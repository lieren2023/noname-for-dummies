import { GeneratorFunction } from "../../util/index.js";
import { get } from "../../get/index.js";
import { game } from "../../game/index.js";
import { lib } from "../index.js";
import { _status } from "../../status/index.js";
import { ui } from "../../ui/index.js";
import { gnc } from "../../gnc/index.js";

import { LibInitPromises } from "./promises.js";
import { GameEvent } from "../element/gameEvent.js";
import { GameEventPromise } from "../element/gameEventPromise.js";

export class LibInit {
	/**
	 * 部分函数的Promise版本
	 */
	promises = new LibInitPromises();

	init() {
		throw new Error("lib.init.init is moved to noname/init");
	}

	reset() {
		if (window.inSplash) return;
		if (window.resetExtension) {
			if (
				confirm(
					"游戏似乎未正常载入，有可能因为部分扩展未正常载入，或者因为部分扩展未载入完毕。\n是否禁用扩展并重新打开？"
				)
			) {
				window.resetExtension();
				window.location.reload();
			}
		} else {
			if (lib.device) {
				if (navigator.notification) {
					navigator.notification.confirm(
						"游戏似乎未正常载入，是否重置游戏？",
						function (index) {
							if (index == 2) {
								localStorage.removeItem("noname_inited");
								window.location.reload();
							} else if (index == 3) {
								var noname_inited = localStorage.getItem("noname_inited");
								var onlineKey = localStorage.getItem(lib.configprefix + "key");
								localStorage.clear();
								if (noname_inited) {
									localStorage.setItem("noname_inited", noname_inited);
								}
								if (onlineKey) {
									localStorage.setItem(lib.configprefix + "key", onlineKey);
								}
								if (indexedDB) indexedDB.deleteDatabase(lib.configprefix + "data");
								setTimeout(function () {
									window.location.reload();
								}, 200);
							}
						},
						"确认退出",
						["取消", "重新下载", "重置设置"]
					);
				} else {
					if (confirm("游戏似乎未正常载入，是否重置游戏？")) {
						localStorage.removeItem("noname_inited");
						window.location.reload();
					}
				}
			} else {
				if (confirm("游戏似乎未正常载入，是否重置游戏？")) {
					var onlineKey = localStorage.getItem(lib.configprefix + "key");
					localStorage.clear();
					if (onlineKey) {
						localStorage.setItem(lib.configprefix + "key", onlineKey);
					}
					if (indexedDB) indexedDB.deleteDatabase(lib.configprefix + "data");
					setTimeout(function () {
						window.location.reload();
					}, 200);
				}
			}
		}
	}

	// 现在改lib.init.onload的都给我无报错被创
	async onload() {
		throw new Error("lib.init.onload is moved to noname/init/onload");
	}

	startOnline() {
		"step 0";
		event._resultid = null;
		event._result = null;
		game.pause();
		"step 1";
		if (result) {
			if (event._resultid) {
				result.id = event._resultid;
			}
			game.send("result", result);
		}
		event.goto(0);
	}

	onfree() {
		if (lib.onfree) {
			clearTimeout(window.resetGameTimeout);
			delete window.resetGameTimeout;
			if (!game.syncMenu) {
				delete window.resetExtension;
				localStorage.removeItem(lib.configprefix + "disable_extension");
			}

			if (game.removeFile && lib.config.brokenFile.length) {
				while (lib.config.brokenFile.length) {
					game.removeFile(lib.config.brokenFile.shift());
				}
				game.saveConfigValue("brokenFile");
			}

			var onfree = lib.onfree;
			delete lib.onfree;
			var loop = function () {
				if (onfree.length) {
					onfree.shift()();
					setTimeout(loop, 100);
				}
			};
			setTimeout(loop, 500);
			if (!_status.new_tutorial) game.saveConfig("menu_loadondemand", true, lib.config.mode);
		}
	}

	connection(ws) {
		const client = new lib.element.Client(ws);
		lib.node.clients.push(client);
		if (window.isNonameServer) {
			document.querySelector("#server_count").innerHTML = lib.node.clients.length;
		}
		ws.on("message", function (messagestr) {
			var message;
			try {
				message = JSON.parse(messagestr);
				if (!Array.isArray(message) || typeof lib.message.server[message[0]] !== "function") {
					throw "err";
				}
				for (var i = 1; i < message.length; i++) {
					message[i] = get.parsedResult(message[i]);
				}
			} catch (e) {
				console.log(e);
				console.log("invalid message: " + messagestr);
				return;
			}
			lib.message.server[message.shift()].apply(client, message);
		});
		ws.on("close", function () {
			client.close();
		});
		client.send("opened");
	}

	sheet() {
		var style = document.createElement("style");
		document.head.appendChild(style);
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "string") {
				style.sheet.insertRule(arguments[i], 0);
			}
		}
		return style;
	}

	css(path, file, before) {
		const style = document.createElement("link");
		style.rel = "stylesheet";
		if (path) {
			if (path[path.length - 1] == "/") path = path.slice(0, path.length - 1);
			if (file) path = `${path}${/^db:extension-[^:]*$/.test(path) ? ":" : "/"}${file}.css`;
			(path.startsWith("db:")
				? game.getDB("image", path.slice(3)).then(get.objectURL)
				: new Promise((resolve) => resolve(path))
			).then((resolvedPath) => {
				style.href = resolvedPath;
				if (typeof before == "function") {
					style.addEventListener("load", before);
					document.head.appendChild(style);
				} else if (before) document.head.insertBefore(style, before);
				else document.head.appendChild(style);
			});
		}
		return style;
	}

	//在扩展的precontent中调用，用于加载扩展必需的JS文件。
	//If any of the parameters is an Array, corresponding files will be loaded in order
	//如果任意参数为数组，则按顺序加载加载相应的文件
	jsForExtension(path, file, onLoad, onError) {
		if (!_status.javaScriptExtensions) _status.javaScriptExtensions = [];
		_status.javaScriptExtensions.push({
			path: path,
			file: file,
			onLoad: onLoad,
			onError: onError,
		});
	}

	js(path, file, onLoad, onError) {
		if (path[path.length - 1] == "/") path = path.slice(0, path.length - 1);
		if (path == `${lib.assetURL}mode` && lib.config.all.stockmode.indexOf(file) == -1) {
			lib.genAwait(lib.init[`setMode_${file}`]()).then(onLoad);
			return;
		}
		if (Array.isArray(file)) {
			file.forEach((value) => lib.init.js(path, value, onLoad, onError));
			return;
		}
		let scriptSource = file ? `${path}${/^db:extension-[^:]*$/.test(path) ? ":" : "/"}${file}.js` : path;
		if (path.startsWith("http")) scriptSource += `?rand=${get.id()}`;
		else if (
			lib.config.fuck_sojson &&
			scriptSource.includes("extension") != -1 &&
			scriptSource.startsWith(lib.assetURL)
		) {
			const pathToRead = scriptSource.slice(lib.assetURL.length);
			const alertMessage = `检测到您安装了使用免费版sojson进行加密的扩展。请谨慎使用这些扩展，避免游戏数据遭到破坏。\n扩展文件：${pathToRead}`;
			if (typeof game.readFileAsText == "function")
				game.readFileAsText(
					pathToRead,
					(result) => {
						if (
							result.includes("sojson") ||
							result.includes("jsjiami") ||
							result.includes("var _0x")
						)
							alert(alertMessage);
					},
					() => void 0
				);
			else if (location.origin != "file://")
				lib.init.reqSync(
					pathToRead,
					function () {
						const result = this.responseText;
						if (
							result.includes("sojson") ||
							result.includes("jsjiami") ||
							result.includes("var _0x")
						)
							alert(alertMessage);
					},
					() => void 0
				);
		}
		const script = document.createElement("script");
		(scriptSource.startsWith("db:")
			? game.getDB("image", scriptSource.slice(3)).then(get.objectURL)
			: new Promise((resolve) => resolve(scriptSource))
		).then((resolvedScriptSource) => {
			script.src = resolvedScriptSource;
			if (path.startsWith("http")) script.addEventListener("load", () => script.remove());
			document.head.appendChild(script);
			if (typeof onLoad == "function") script.addEventListener("load", onLoad);
			if (typeof onError == "function") script.addEventListener("error", onError);
		});
		return script;
	}

	/**
	 * 同步lib.init.js
	 * @returns { void }
	 */
	jsSync(path, file, onLoad, onError) {
		if (lib.assetURL.length == 0 && location.origin == "file://" && typeof game.readFile == "undefined") {
			const e = new Error("浏览器file协议下无法使用此api，请在http/https协议下使用此api");
			if (typeof onError == "function") onError(e);
			else throw e;
			return;
		}
		if (path[path.length - 1] == "/") path = path.slice(0, path.length - 1);
		if (path == `${lib.assetURL}mode` && lib.config.all.stockmode.indexOf(file) == -1) {
			lib.genAwait(lib.init[`setMode_${file}`]()).then(onLoad);
			return;
		}
		if (Array.isArray(file)) {
			return file.forEach((value) => lib.init.jsSync(path, value, onLoad, onError));
		}
		let scriptSource;
		if (!file) scriptSource = path;
		else scriptSource = `${path}/${file}.js`;
		if (path.startsWith("http")) scriptSource += `?rand=${get.id()}`;
		const xmlHttpRequest = new XMLHttpRequest();
		let data;
		xmlHttpRequest.addEventListener("load", () => {
			if (![0, 200].includes(xmlHttpRequest.status)) {
				// @ts-ignore
				if (typeof onError == "function") onError(new Error(oReq.statusText || oReq.status));
				return;
			}
			data = xmlHttpRequest.responseText;
			if (!data) {
				if (typeof onError == "function") onError(new Error(`${scriptSource}加载失败！`));
				return;
			}
			if (
				lib.config.fuck_sojson &&
				scriptSource.includes("extension") != -1 &&
				scriptSource.startsWith(lib.assetURL)
			) {
				const pathToRead = scriptSource.slice(lib.assetURL.length);
				if (data.includes("sojson") || data.includes("jsjiami") || data.includes("var _0x"))
					alert(
						`检测到您安装了使用免费版sojson进行加密的扩展。请谨慎使用这些扩展，避免游戏数据遭到破坏。\n扩展文件：${pathToRead}`
					);
			}
			try {
				window.eval(data);
				if (typeof onLoad == "function") onLoad();
			} catch (error) {
				if (typeof onError == "function") onError(error);
			}
		});
		if (typeof onError == "function") xmlHttpRequest.addEventListener("error", onError);
		xmlHttpRequest.open("GET", scriptSource, false);
		xmlHttpRequest.send();
	}

	req(str, onload, onerror, master) {
		let sScriptURL;
		if (str.startsWith("http")) sScriptURL = str;
		else if (str.startsWith("local:")) {
			if (
				lib.assetURL.length == 0 &&
				location.origin == "file://" &&
				typeof game.readFile == "undefined"
			) {
				const e = new Error("浏览器file协议下无法使用此api，请在http/https协议下使用此api");
				if (typeof onerror == "function") onerror(e);
				else throw e;
				return;
			}
			sScriptURL = lib.assetURL + str.slice(6);
		} else {
			let url = get.url(master);
			if (url[url.length - 1] != "/") url += "/";
			sScriptURL = url + str;
		}
		const oReq = new XMLHttpRequest();
		if (typeof onload == "function")
			oReq.addEventListener("load", (result) => {
				if (![0, 200].includes(oReq.status)) {
					// @ts-ignore
					if (typeof onerror == "function") onerror(new Error(oReq.statusText || oReq.status));
					return;
				}
				onload.call(oReq, result);
			});
		if (typeof onerror == "function") oReq.addEventListener("error", onerror);
		oReq.open("GET", sScriptURL);
		oReq.send();
	}

	/**
	 * 同步lib.init.req
	 */
	reqSync(str, onload, onerror, master) {
		let sScriptURL;
		if (str.startsWith("http")) sScriptURL = str;
		else if (str.startsWith("local:")) {
			if (
				lib.assetURL.length == 0 &&
				location.origin == "file://" &&
				typeof game.readFile == "undefined"
			) {
				const e = new Error("浏览器file协议下无法使用此api，请在http/https协议下使用此api");
				if (typeof onerror == "function") onerror(e);
				else throw e;
				return;
			}
			sScriptURL = lib.assetURL + str.slice(6);
		} else {
			let url = get.url(master);
			if (url[url.length - 1] != "/") url += "/";
			sScriptURL = url + str;
		}
		const oReq = new XMLHttpRequest();
		if (typeof onload == "function")
			oReq.addEventListener("load", (result) => {
				if (![0, 200].includes(oReq.status)) {
					// @ts-ignore
					if (typeof onerror == "function") onerror(new Error(oReq.statusText || oReq.status));
					return;
				}
				onload(result);
			});
		if (typeof onerror == "function") oReq.addEventListener("error", onerror);
		oReq.open("GET", sScriptURL, false);
		oReq.send();
		if (typeof onload !== "function") return oReq.responseText;
	}

	json(url, onload, onerror) {
		const oReq = new XMLHttpRequest();
		if (typeof onload == "function")
			oReq.addEventListener("load", () => {
				if (![0, 200].includes(oReq.status)) {
					// @ts-ignore
					if (typeof onerror == "function") onerror(new Error(oReq.statusText || oReq.status));
					return;
				}
				let result;
				try {
					result = JSON.parse(oReq.responseText);
					if (!result) throw "err";
				} catch (e) {
					if (typeof onerror == "function") onerror(e);
					return;
				}
				onload(result);
			});
		if (typeof onerror == "function") oReq.addEventListener("error", onerror);
		oReq.open("GET", url);
		oReq.send();
	}

	/**
	 * 同步lib.init.json
	 */
	jsonSync(url, onload, onerror) {
		if (lib.assetURL.length == 0 && location.origin == "file://" && typeof game.readFile == "undefined") {
			const e = new Error("浏览器file协议下无法使用此api，请在http/https协议下使用此api");
			if (typeof onerror == "function") onerror(e);
			else throw e;
			return;
		}
		const oReq = new XMLHttpRequest();
		if (typeof onload == "function")
			oReq.addEventListener("load", () => {
				if (![0, 200].includes(oReq.status)) {
					// @ts-ignore
					if (typeof onerror == "function") onerror(new Error(oReq.statusText || oReq.status));
					return;
				}
				let result;
				try {
					result = JSON.parse(oReq.responseText);
					if (!result) throw "err";
				} catch (e) {
					if (typeof onerror == "function") onerror(e);
					return;
				}
				onload(result);
			});
		if (typeof onerror == "function") oReq.addEventListener("error", onerror);
		oReq.open("GET", url, false);
		oReq.send();
	}

	cssstyles() {
		if (ui.css.styles) {
			ui.css.styles.remove();
		}
		ui.css.styles = lib.init.sheet();
		ui.css.styles.sheet.insertRule(
			"#arena .player>.name,#arena .button.character>.name {font-family: " +
				(lib.config.name_font || "xinwei") +
				",xinwei}",
			0
		);
		ui.css.styles.sheet.insertRule(
			"#arena .player>.name,.button.character>.name {font-family: " +
				(lib.config.name_font || "xinwei") +
				",xinwei}",
			0
		);
		ui.css.styles.sheet.insertRule(
			"#arena .player .identity>div {font-family: " +
				(lib.config.identity_font || "huangcao") +
				",xinwei}",
			0
		);
		ui.css.styles.sheet.insertRule(
			".button.character.newstyle>.identity {font-family: " +
				(lib.config.identity_font || "huangcao") +
				",xinwei}",
			0
		);
		if (lib.config.cardtext_font && lib.config.cardtext_font != "default") {
			ui.css.styles.sheet.insertRule(
				".card div:not(.info):not(.background) {font-family: " + lib.config.cardtext_font + ";}",
				0
			);
		}
		if (lib.config.global_font && lib.config.global_font != "default") {
			ui.css.styles.sheet.insertRule("#window {font-family: " + lib.config.global_font + ",xinwei}", 0);
			ui.css.styles.sheet.insertRule(
				"#window #control{font-family: STHeiti,SimHei,Microsoft JhengHei,Microsoft YaHei,WenQuanYi Micro Hei,Suits,Helvetica,Arial,sans-serif}",
				0
			);
		}
		switch (lib.config.glow_phase) {
			case "yellow":
				ui.css.styles.sheet.insertRule(
					"#arena .player:not(.selectable):not(.selected).glow_phase {box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 1px, rgb(217, 152, 62) 0 0 15px, rgb(217, 152, 62) 0 0 15px !important;}",
					0
				);
				break;
			case "green":
				ui.css.styles.sheet.insertRule(
					"#arena .player:not(.selectable):not(.selected).glow_phase {box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(10, 155, 67, 1) 0 0 15px, rgba(10, 155, 67, 1) 0 0 15px !important;}",
					0
				);
				break;
			case "purple":
				ui.css.styles.sheet.insertRule(
					"#arena .player:not(.selectable):not(.selected).glow_phase {box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 1px, rgb(189, 62, 170) 0 0 15px, rgb(189, 62, 170) 0 0 15px !important;}",
					0
				);
				break;
		}
	}

	layout(layout, nosave) {
		const loadingScreen = ui.create.div(".loading-screen", document.body),
			loadingScreenStyle = loadingScreen.style;
		loadingScreenStyle.animationDuration = "1s";
		loadingScreenStyle.animationFillMode = "forwards";
		loadingScreenStyle.animationName = "opacity-0-1";
		if (layout == "default") layout = "mobile";
		if (!nosave) game.saveConfig("layout", layout);
		game.layout = layout;
		ui.arena.hide();
		new Promise((resolve) => setTimeout(resolve, 500))
			.then(() => {
				if (game.layout == "default") {
					ui.css.layout.href = "";
				} else {
					ui.css.layout.href = lib.assetURL + "layout/" + game.layout + "/layout.css";
				}
				if (game.layout == "mobile" || game.layout == "long") {
					ui.arena.classList.add("mobile");
				} else {
					ui.arena.classList.remove("mobile");
				}
				if (
					game.layout == "mobile" ||
					game.layout == "long" ||
					game.layout == "long2" ||
					game.layout == "nova"
				) {
					if (game.me && game.me.node.handcards2.childNodes.length) {
						while (game.me.node.handcards2.childNodes.length) {
							game.me.node.handcards1.appendChild(game.me.node.handcards2.firstChild);
						}
					}
				}
				if (game.layout == "default") {
					ui.arena.classList.add("oldlayout");
				} else {
					ui.arena.classList.remove("oldlayout");
				}
				if (
					lib.config.cardshape == "oblong" &&
					(game.layout == "long" ||
						game.layout == "mobile" ||
						game.layout == "long2" ||
						game.layout == "nova")
				) {
					ui.arena.classList.add("oblongcard");
					ui.window.classList.add("oblongcard");
				} else {
					ui.arena.classList.remove("oblongcard");
					ui.window.classList.remove("oblongcard");
				}
				//if(lib.config.textequip=='text'&&(game.layout=='long'||game.layout=='mobile')){
				if (game.layout == "long" || game.layout == "mobile") {
					ui.arena.classList.add("textequip");
				} else {
					ui.arena.classList.remove("textequip");
				}
				if (get.is.phoneLayout()) {
					ui.css.phone.href = lib.assetURL + "layout/default/phone.css";
					ui.arena.classList.add("phone");
				} else {
					ui.css.phone.href = "";
					ui.arena.classList.remove("phone");
				}
				for (var i = 0; i < game.players.length; i++) {
					if (get.is.linked2(game.players[i])) {
						if (game.players[i].classList.contains("linked")) {
							game.players[i].classList.remove("linked");
							game.players[i].classList.add("linked2");
						}
					} else {
						if (game.players[i].classList.contains("linked2")) {
							game.players[i].classList.remove("linked2");
							game.players[i].classList.add("linked");
						}
					}
				}
				if (game.layout == "long" || game.layout == "long2") {
					ui.arena.classList.add("long");
				} else {
					ui.arena.classList.remove("long");
				}
				if (lib.config.player_border != "wide" || game.layout == "long" || game.layout == "long2") {
					ui.arena.classList.add("slim_player");
				} else {
					ui.arena.classList.remove("slim_player");
				}
				if (
					lib.config.player_border == "normal" &&
					lib.config.mode != "brawl" &&
					(game.layout == "long" || game.layout == "long2")
				) {
					ui.arena.classList.add("lslim_player");
				} else {
					ui.arena.classList.remove("lslim_player");
				}
				if (lib.config.player_border == "slim") {
					ui.arena.classList.add("uslim_player");
				} else {
					ui.arena.classList.remove("uslim_player");
				}
				if (lib.config.player_border == "narrow") {
					ui.arena.classList.add("mslim_player");
				} else {
					ui.arena.classList.remove("mslim_player");
				}
				ui.updatej();
				ui.updatem();
				return new Promise((resolve) => setTimeout(resolve, 100));
			})
			.then(() => {
				ui.arena.show();
				if (game.me) game.me.update();
				return new Promise((resolve) => setTimeout(resolve, 500));
			})
			.then(() => {
				ui.updatex();
				ui.updatePlayerPositions();
				return new Promise((resolve) => setTimeout(resolve, 500));
			})
			.then(() => {
				ui.updatec();
				loadingScreenStyle.animationName = "opacity-1-0";
				loadingScreen.addEventListener("animationend", (animationEvent) =>
					animationEvent.target.remove()
				);
			});
	}

	background() {
		if (lib.config.image_background_random) {
			var list = [];
			for (var i in lib.configMenu.appearence.config.image_background.item) {
				if (i == "default") continue;
				list.push(i);
			}
			list.remove(lib.config.image_background);
			localStorage.setItem(lib.configprefix + "background", JSON.stringify(list));
		} else if (
			lib.config.image_background &&
			lib.config.image_background != "default" &&
			!lib.config.image_background.startsWith("custom_")
		) {
			localStorage.setItem(lib.configprefix + "background", lib.config.image_background);
		} else if (lib.config.image_background == "default" && lib.config.theme == "simple") {
			localStorage.setItem(lib.configprefix + "background", "ol_bg");
		} else {
			localStorage.removeItem(lib.configprefix + "background");
		}
	}

	/**
	 *
	 * @param {*} item
	 * @param {Function} [scope] 作用域
	 * @returns
	 */
	parsex(item, scope) {
		//by 诗笺、Tipx-L
		/**
		 * @param {Function} func
		 */
		function Legacy(func) {
			//Remove all comments
			//移除所有注释
			let str = func
				.toString()
				.replace(
					/((?:(?:^[ \t]*)?(?:\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/(?:[ \t]*\r?\n(?=[ \t]*(?:\r?\n|\/\*|\/\/)))?|\/\/(?:[^\\]|\\(?:\r?\n)?)*?(?:\r?\n(?=[ \t]*(?:\r?\n|\/\*|\/\/))|(?=\r?\n))))+)|("(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|(?:\r?\n|[\s\S])[^/"'\\\s]*)/gm,
					"$2"
				)
				.trim();
			//获取第一个 { 后的所有字符
			str = str.slice(str.indexOf("{") + 1);
			//判断代码中是否有debugger
			let regex = /event\.debugger\(\)/;
			let hasDebugger = false;
			let insertDebugger = `yield code=>eval(code);`;
			let debuggerSkip = 0;
			let debuggerResult;
			while ((debuggerResult = str.slice(debuggerSkip).match(regex)) != null) {
				let debuggerCopy = str;
				debuggerCopy =
					debuggerCopy.slice(0, debuggerSkip + debuggerResult.index) +
					insertDebugger +
					debuggerCopy.slice(debuggerSkip + debuggerResult.index + debuggerResult[0].length, -1);
				//测试是否有错误
				try {
					new GeneratorFunction(debuggerCopy);
					str = debuggerCopy + "}";
					debuggerSkip += debuggerResult.index + insertDebugger.length;
					hasDebugger = true;
				} catch (error) {
					debuggerSkip += debuggerResult.index + debuggerResult[0].length;
				}
			}
			//func中要写步骤的话，必须要写step 0
			if (str.indexOf("step 0") == -1) {
				str = "{if(event.step==1) {event.finish();return;}\n" + str;
			} else {
				let skip = 0;
				let k = 0;
				let result;
				//去除99个step的限制
				while ((result = str.slice(skip).match(new RegExp(`\\(?['"]step ${k}['"]\\)?;?`))) != null) {
					let insertStr;
					if (k == 0) {
						insertStr = `switch(step){case 0:`;
					} else {
						insertStr = `break;case ${k}:`;
					}
					let copy = str;
					copy =
						copy.slice(0, skip + result.index) +
						insertStr +
						copy.slice(skip + result.index + result[0].length);
					//测试是否有错误
					try {
						new (hasDebugger ? GeneratorFunction : Function)(copy);
						str = copy;
						skip += result.index + insertStr.length;
					} catch (error) {
						k--;
						skip += result.index + result[0].length;
					}
					k++;
				}
				str = `if(event.step==${k}){event.finish();return;}` + str;
			}
			if (!scope) {
				return new (hasDebugger ? GeneratorFunction : Function)(
					"event",
					"step",
					"source",
					"player",
					"target",
					"targets",
					"card",
					"cards",
					"skill",
					"forced",
					"num",
					"trigger",
					"result",
					"_status",
					"lib",
					"game",
					"ui",
					"get",
					"ai",
					str
				);
			} else {
				return scope(`function${
					hasDebugger ? "*" : ""
				} anonymous(event,step,source,player,target,targets,
						card,cards,skill,forced,num,trigger,result,
						_status,lib,game,ui,get,ai){${str}}; anonymous;`);
			}
		}
		switch (typeof item) {
			case "object":
				if (Array.isArray(item)) {
					let lastEvent = null;
					return function* (
						event,
						step,
						source,
						player,
						target,
						targets,
						card,
						cards,
						skill,
						forced,
						num,
						trigger,
						result,
						_status,
						lib,
						game,
						ui,
						get,
						ai
					) {
						if (step >= item.length) return event.finish();
						var current = item[step];
						if (typeof current != "function")
							throw new Error(`content ${step} of ${event.name} is not vaild: ${current}`);
						var currentResult = current(
							event,
							{
								event: event,
								step: step,
								source: source,
								player: player,
								target: target,
								targets: targets,
								card: card,
								cards: cards,
								skill: skill,
								forced: forced,
								num: num,
								trigger: trigger,
								result: result,
							},
							lastEvent && "result" in lastEvent ? lastEvent.result : null
						);
						// TODO: use `event.debugger` to replace source
						if (gnc.is.generator(currentResult)) lastEvent = yield* currentResult;
						else lastEvent = currentResult;
					};
				} else {
					if (Symbol.iterator in item) return lib.init.parsex(Array.from(item));
					if (item.toString !== Object.prototype.toString) return lib.init.parsex(item.toString());
					if ("render" in item) {
						// TODO: Object Render Parse
						throw new Error("NYI: Object Render Parse");
					}
					// TODO: Object Other Parse
					throw new Error("NYI: Object Other Parse");
				}
			case "function":
				if (gnc.is.generatorFunc(item)) {
					// let gen, lastEvent;
					let content = function* (
						event,
						step,
						source,
						player,
						target,
						targets,
						card,
						cards,
						skill,
						forced,
						num,
						trigger,
						result,
						_status,
						lib,
						game,
						ui,
						get,
						ai
					) {
						event.step = NaN;
						if (!this.gen)
							this.gen = item(event, {
								event,
								step,
								source,
								player,
								target,
								targets,
								card,
								cards,
								skill,
								forced,
								num,
								trigger,
								result,
							});

						let res;
						if (!this.last) res = this.gen.next();
						else if (typeof this.last !== "object") res = this.gen.next(this.last);
						else if (this.last instanceof GameEvent || this.last instanceof GameEventPromise)
							res = this.gen.next(this.last.result);
						else res = this.gen.next(this.last);

						if (res.done) {
							this.gen = null;
							return event.finish();
						}
						let currentResult = res.value;
						// TODO: use `event.debugger` to replace source
						if (typeof currentResult == "function") yield currentResult;
						else {
							if (Array.isArray(currentResult)) {
								event.step = currentResult[1];
								currentResult = currentResult[0];
							}
							this.last = currentResult;
						}
					}.bind({
						gen: null,
						last: undefined,
					});
					content._gen = true;
					return content;
				} else if (item._parsed) return item;
			// falls through
			default:
				return Legacy(item);
		}
	}

	eval(func) {
		if (typeof func == "function") {
			return eval("(" + func.toString() + ")");
		} else if (typeof func == "object") {
			for (var i in func) {
				if (Object.prototype.hasOwnProperty.call(func, i)) {
					if (typeof func[i] == "function") {
						let checkObject = {};
						checkObject[i] = func[i];
						return eval(`(function(){return ${get.stringify(checkObject)};})()`)[i];
					} else {
						func[i] = lib.init.eval(func[i]);
					}
				}
			}
		}
		return func;
	}

	encode(strUni) {
		var strUtf = strUni.replace(/[\u0080-\u07ff]/g, function (c) {
			var cc = c.charCodeAt(0);
			return String.fromCharCode(0xc0 | (cc >> 6), 0x80 | (cc & 0x3f));
		});
		strUtf = strUtf.replace(/[\u0800-\uffff]/g, function (c) {
			var cc = c.charCodeAt(0);
			return String.fromCharCode(0xe0 | (cc >> 12), 0x80 | ((cc >> 6) & 0x3f), 0x80 | (cc & 0x3f));
		});
		return btoa(strUtf);
	}

	decode(str) {
		var strUtf = atob(str);
		var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (c) {
			var cc =
				((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
			return String.fromCharCode(cc);
		});
		strUni = strUni.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (c) {
			var cc = ((c.charCodeAt(0) & 0x1f) << 6) | (c.charCodeAt(1) & 0x3f);
			return String.fromCharCode(cc);
		});
		return strUni;
	}

	stringify(obj) {
		var str = "{";
		for (var i in obj) {
			str += '"' + i + '":';
			if (Object.prototype.toString.call(obj[i]) == "[object Object]") {
				str += lib.init.stringify(obj[i]);
			} else if (typeof obj[i] == "function") {
				str += obj[i].toString();
			} else {
				str += JSON.stringify(obj[i]);
			}
			str += ",";
		}
		str += "}";
		return str;
	}

	stringifySkill(obj) {
		var str = "";
		for (var i in obj) {
			str += i + ":";
			if (Object.prototype.toString.call(obj[i]) == "[object Object]") {
				str += "{\n" + lib.init.stringifySkill(obj[i]) + "}";
			} else if (typeof obj[i] == "function") {
				str += obj[i].toString().replace(/\t/g, "");
			} else {
				str += JSON.stringify(obj[i]);
			}
			str += ",\n";
		}
		return str;
	}

	/**
	 * 在返回当前加载的esm模块相对位置。
	 * @param {*} url 传入import.meta.url
	 */
	getCurrentFileLocation(url) {
		let head = window.location.href.slice(0, window.location.href.lastIndexOf("/") + 1);
		let ret = url.replace(head, "");
		return decodeURIComponent(ret);
	}
}
