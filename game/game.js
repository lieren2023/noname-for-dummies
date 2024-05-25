"use strict";

(async function () {
	// 预设定常量
	/**
	 * 最低要求的Safari版本
	 *
	 * @type {[majorVersion: number, minorVersion: number, patchVersion: number]}
	 */
	const minSafariVersion = [14, 5, 0];

	// 基础全局变量
	const nonameInitialized = localStorage.getItem("noname_inited");
	const assetURL = location.protocol.startsWith("http") || typeof nonameInitialized != "string" || nonameInitialized == "nodejs" ? "" : nonameInitialized;
	const userAgent = navigator.userAgent.toLowerCase();

	// 使用到的文本
	const globalText = {
		GPL_ALERT: ["①无名杀是一款基于GPLv3协议的开源软件！", "你可以在遵守GPLv3协议的基础上任意使用，修改并转发《无名杀》，以及所有基于《无名杀》开发的拓展。", "点击“确定”即代表您认可并接受GPLv3协议↓️", "https://www.gnu.org/licenses/gpl-3.0.html", "②无名杀官方发布地址仅有GitHub仓库！", "其他所有的所谓“无名杀”社群（包括但不限于绝大多数“官方”QQ群、QQ频道等）均为玩家自发组织，与无名杀官方无关！"].join("\n"),
		LOAD_ENTRY_FAILED: ["您使用的浏览器或《无名杀》客户端加载内容失败！", "请检查是否缺少游戏文件！隔版本更新请下载完整包而不是离线包！", "目前使用的浏览器UA信息为: ", userAgent, "若您使用的客户端为自带内核的旧版“兼容版”，请及时更新客户端版本！", "若您使用的客户端为手机端的非兼容版《无名杀》，请尝试更新手机的WebView内核，或者更换为1.8.2版本及以上的兼容版！", "若您是直接使用浏览器加载index.html进行游戏，请改为运行文件夹内的“noname-server.exe”（或使用VSCode等工具启动Live Server），以动态服务器的方式启动《无名杀》！", "若您使用的是苹果端，请至少将Safari升级至14.5.0！"].join("\n"),
		REDIRECT_TIP: ["您使用的浏览器或无名杀客户端内核版本过低，已经无法正常运行无名杀！", "目前使用的浏览器UA信息为: ", userAgent, "点击“确认”以前往GitHub下载最新版无名杀客户端（可能需要科学上网）。", "稍后您的无名杀将自动退出（可能的话）"].join("\n"),
		SAFARI_VERSION_NOT_SUPPORT: ["您使用的Safari浏览器无法支持当前无名杀所需的功能，请至少升级至14.5.0！", "当前浏览器的UA为: ", userAgent, "稍后您的无名杀将自动退出（可能的话）"].join("\n"),
	};

	// 检查 window 对象中是否存在 "__core-js_shared__" 属性
	if (!("__core-js_shared__" in window)) {
		// 如果不存在，则执行以下操作
		await new Promise(resolve => {
			// 创建一个新的 <script> 元素
			const coreJSBundle = document.createElement("script");
			// 为 script 元素设置 onerror 和 onload 事件处理程序
			// 当出错或加载完成时，调用 resolve 函数以解决 Promise
			coreJSBundle.onerror = coreJSBundle.onload = resolve;
			// 设置 script 元素的 src 属性，指向 core-js-bundle.js 文件
			coreJSBundle.src = `${assetURL}game/core-js-bundle.js`;
			// 将 script 元素添加到 document.head 中
			document.head.appendChild(coreJSBundle);
		});
	}

	// 检查是否已经显示过GPL许可协议警告
	if (!localStorage.getItem("gplv3_noname_alerted")) {
		// 判断游戏是否运行在HTTP环境中
		const gameInHttpEnvironment = location.protocol.startsWith("http");

		// 判断游戏是否已经初始化过
		const gameIntialized = nonameInitialized && nonameInitialized.length > 0;

		// 如果满足以下条件之一，则显示GPL许可协议警告:
		// 1. 游戏运行在HTTP环境中且已经初始化过
		// 2. 用户确认显示GPL许可协议警告
		if ((gameInHttpEnvironment && gameIntialized) || confirm(globalText.GPL_ALERT)) {
			// 记录已显示过GPL许可协议警告
			localStorage.setItem("gplv3_noname_alerted", String(true));
		} else {
			// 如果用户拒绝显示GPL许可协议警告，则退出程序
			exit();
		}
	}

	window["b" + "ann" + "e" + "dE" + "x" + "ten" + "s" + "i" + "o" + "ns"] = [];

	// 检查是否是Safari浏览器
	// 通过检查用户代理字符串是否包含 "safari" 且不包含 "chrome"，可以初步判断是不是Safari
	if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
		// 如果是 Safari 浏览器,则进行以下操作
		// 获取 Safari 版本信息
		let [coreName, ...safariVersion] = getSafariVersion();
		// 检查 Safari 的内核名称是否为 "safari"，以及版本号是否低于要求的最小版本号
		// 如果无法判定是Safari，则证明这个浏览器内核很玄乎，我们表示对未知的、不符合标准的内核无能为力，只能等出问题了再适配
		if (coreName === "safari" && !checkVersion(minSafariVersion, safariVersion)) {
			// 如果版本号低于要求的最小版本号,则执行以下操作
			// 显示警告消息
			alert(globalText.SAFARI_VERSION_NOT_SUPPORT);
			// 退出程序
			exit();
		}
	}

	// 处理Node环境下的http情况
	if (typeof window.require == "function" && typeof window.process == "object" && typeof window.__dirname == "string") {
		// 在http环境下修改__dirname和require的逻辑
		if (location.protocol.startsWith("http") && window.__dirname.endsWith("electron.asar\\renderer")) {
			const path = require("path");
			window.__dirname = path.join(path.resolve(), "resources/app");
			const oldData = Object.entries(window.require);
			// @ts-ignore
			window.require = function (moduleId) {
				try {
					return module.require(moduleId);
				} catch {
					return module.require(path.join(window.__dirname, moduleId));
				}
			};
			oldData.forEach(([key, value]) => {
				window.require[key] = value;
			});
		}
		// 增加导入ts的逻辑
		window.require.extensions[".ts"] = function (module, filename) {
			// @ts-ignore
			const _compile = module._compile;
			// @ts-ignore
			module._compile = function (code, fileName) {
				/**
				 * @type { import("typescript") }
				 */
				// @ts-ignore
				const ts = require("./game/typescript.js");
				// 使用ts compiler对ts文件进行编译
				const result = ts.transpile(
					code,
					{
						module: ts.ModuleKind.CommonJS,
						//@todo: ES2019 -> ES2020
						target: ts.ScriptTarget.ES2019,
						inlineSourceMap: true,
						resolveJsonModule: true,
						esModuleInterop: true,
					},
					fileName
				);
				// 使用默认的js编译函数获取返回值
				return _compile.call(this, result, fileName);
			};
			// @ts-ignore
			module._compile(require("fs").readFileSync(filename, "utf8"), filename);
		};
	}

	// 使serviceWorker加载完成后，再加载entry.js
	if (location.protocol.startsWith("http") && "serviceWorker" in navigator) {
		let scope = window.location.protocol + "//" + window.location.host + window.location.pathname;
		let registrations = await navigator.serviceWorker.getRegistrations();
		let findServiceWorker = registrations.find(registration => {
			return registration && registration.active && registration.active.scriptURL == `${scope}service-worker.js`;
		});

		try {
			const registration_1 = await navigator.serviceWorker.register(`${scope}service-worker.js`, {
				type: "module",
				updateViaCache: "all",
				scope,
			});
			// 初次加载worker，需要重新启动一次
			if (!findServiceWorker) location.reload();
			// 接收消息，暂时没用到
			navigator.serviceWorker.addEventListener("message", e => {
				console.log(e);
			});
			registration_1.update().catch(e => console.error("worker update失败", e));
			if (!sessionStorage.getItem("canUseTs")) {
				await import("./canUse.ts")
					.then(({ text }) => console.log(text))
					.catch(() => {
						sessionStorage.setItem("canUseTs", "1");
						location.reload();
					});
			}
		} catch (e_1) {
			console.log("serviceWorker加载失败: ", e_1);
		}
	}

	// 创建一个新的 <script> 元素
	const script = document.createElement("script");
	// 设置该 <script> 元素为模块脚本
	script.type = "module";
	// 设置 <script> 元素的 src 属性,指向 entry.js 文件
	script.src = `${assetURL}game/entry.js`;
	// 设置该脚本为异步加载
	script.async = true;
	// 为 <script> 元素设置 onerror 事件处理程序
	script.onerror = event => {
		// 在控制台输出错误信息
		console.error(event);
		// 获取加载失败的提示信息
		const message = globalText.LOAD_ENTRY_FAILED;
		// 在控制台输出提示信息
		console.error(message);
		// 显示提示信息
		alert(message);
		// 退出程序
		exit();
	};
	// 将 <script> 元素添加到 document.head 中
	document.head.appendChild(script);
	
	// 创建一个新的 <script> 元素,用于回退
	let fallback = document.createElement("script");
	// 设置该 <script> 元素为旧式脚本
	fallback.noModule = true;
	// 设置 <script> 元素的 src 属性,指向 fallback.js 文件
	fallback.src = `${assetURL}game/fallback.js`;
	// 为 <script> 元素设置 onload 事件处理程序
	fallback.onload = () => {
		// 显示一个确认对话框,询问是否要重定向到 GitHub 页面
		if (confirm(globalText.REDIRECT_TIP)) {
			// 如果确认,则打开新的浏览器窗口,跳转到指定的 GitHub 页面
			window.open("https://github.com/libccy/noname/releases/tag/chromium77-client");
		}
		// 退出程序
		exit();
	};
	// 将 <script> 元素添加到 document.head 中
	document.head.appendChild(fallback);

	/**
	 * 退出客户端用到的代码
	 *
	 * @author Spmario233
	 */
	function exit() {
		const ios = userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("macintosh");
		//electron
		if (typeof window.process == "object" && typeof window.require == "function") {
			const versions = window.process.versions;
			// @ts-ignore
			const electronVersion = parseFloat(versions.electron);
			let remote;
			if (electronVersion >= 14) {
				// @ts-ignore
				remote = require("@electron/remote");
			} else {
				// @ts-ignore
				remote = require("electron").remote;
			}
			const thisWindow = remote.getCurrentWindow();
			thisWindow.destroy();
			window.process.exit();
		}
		//android-cordova环境
		//ios-cordova环境或ios浏览器环境
		//非ios的网页版
		else if (!ios) {
			window.close();
		}
	}

	/**
	 * 获取Safari的版本号
	 *
	 * @returns {[coreName: "safari" | "other", majorVersion: number, minorVersion: number, patchVersion: number]}
	 */
	function getSafariVersion() {
		let result;
		// 以下是所有Safari平台的判断方法
		// macOS以及以桌面显示的移动端则直接判断
		if (/macintosh/.test(userAgent)) {
			result = userAgent.match(/version\/(\d+(?:\.\d+)+).*safari/);
			if (!result) return ["other", NaN, NaN, NaN];
		}
		// 不然则通过OS后面的版本号来获取内容
		else {
			let safariRegex = /(?:iphone|ipad); cpu (?:iphone )?os (\d+(?:_\d+)+)/;
			result = userAgent.match(safariRegex);
			if (!result) return ["other", NaN, NaN, NaN];
		}
		// result = userAgent.match(/version\/(\d+(?:\.\d+)+).*safari/)
		// @ts-ignore
		const [major, minor, patch] = result[1].split(".");
		return ["safari", parseInt(major), parseInt(minor), parseInt(patch)];
	}

	// require是需求的版本号，current是浏览器环境本身的版本号
	/**
	 *
	 * @param {[majorVersion: number, minorVersion: number, patchVersion: number]} require
	 * @param {[majorVersion: number, minorVersion: number, patchVersion: number]} current
	 * @returns
	 */
	function checkVersion(require, current) {
		// 防止不存在的意外，提前截断当前版本号的长度
		if (current.length > require.length) current.length = require.length;

		// 考虑到玄学的NaN情况，记录是否存在NaN
		let flag = false;
		// 从主版本号遍历到修订版本号，只考虑当前版本号的长度
		for (let i = 0; i < current.length; ++i) {
			// 当前环境版本号当前位若是NaN，则记录后直接到下一位
			if (isNaN(current[i])) {
				flag = true;
				continue;
			}
			// 如果此时flag为true且current[i]不为NaN，版本号则不合法，直接否
			if (flag) return false;
			// 上位版本号未达到要求，直接否决
			if (require[i] > current[i]) return false;
			// 上位版本号已超过要求，直接可行
			if (current[i] > require[i]) return true;
		}
		return true;
	}
})();
