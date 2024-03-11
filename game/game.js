"use strict";

new Promise(resolve => {
	// 客户端自带core.js的请注意跟进core.js版本
	if ('__core-js_shared__' in window) resolve(null);
	else {
		const nonameInitialized = localStorage.getItem('noname_inited');
		const assetURL = location.protocol.startsWith('http') || typeof nonameInitialized != 'string' || nonameInitialized == 'nodejs' ? '' : nonameInitialized;
		const coreJSBundle = document.createElement('script');
		coreJSBundle.onerror = coreJSBundle.onload = resolve;
		coreJSBundle.src = `${assetURL}game/core-js-bundle.js`;
		document.head.appendChild(coreJSBundle);
	}
}).then(() => {
	const nonameInitialized = localStorage.getItem('noname_inited');
	const assetURL = location.protocol.startsWith('http') || typeof nonameInitialized != 'string' || nonameInitialized == 'nodejs' ? '' : nonameInitialized;
	const userAgent = navigator.userAgent.toLowerCase();

	const exit = () => {
		const ios = userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('macintosh');
		//electron
		if (typeof window.process == 'object' && typeof window.require == 'function') {
			const versions = window.process.versions;
			// @ts-ignore
			const electronVersion = parseFloat(versions.electron);
			let remote;
			if (electronVersion >= 14) {
				// @ts-ignore
				remote = require('@electron/remote');
			} else {
				// @ts-ignore
				remote = require('electron').remote;
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
	};

	// 这个弹窗，在升级到http协议下的客户端不应该进行提示。
	if (!localStorage.getItem('gplv3_noname_alerted')) {
		const nonameInitialized = localStorage.getItem('noname_inited');
		const callback = () => {
			if (confirm('①无名杀是一款基于GPLv3协议的开源软件！\n你可以在遵守GPLv3协议的基础上任意使用，修改并转发《无名杀》，以及所有基于《无名杀》开发的拓展。\n点击“确定”即代表您认可并接受GPLv3协议↓️\nhttps://www.gnu.org/licenses/gpl-3.0.html\n②无名杀官方发布地址仅有GitHub仓库！\n其他所有的所谓“无名杀”社群（包括但不限于绝大多数“官方”QQ群、QQ频道等）均为玩家自发组织，与无名杀官方无关！')) {
				// @ts-ignore
				localStorage.setItem('gplv3_noname_alerted', true);
			}
			else {
				exit();
			}
		};
		if (location.protocol.startsWith('http')) {
			if (!nonameInitialized || nonameInitialized.length == 0) {
				callback();
			} else {
				// @ts-ignore
				localStorage.setItem('gplv3_noname_alerted', true);
			}
		} else callback();

	}
	window['b' + 'ann' + 'e' + 'dE' + 'x' + 'ten' + 's' + 'i' + 'o' + 'ns'] = [];

	/**
	 *
	 * @returns {["firefox" | "chrome" | "safari" | "other", number, number, number]}
	 */
	function coreInfo() {
		const regex = /(firefox|chrome|safari)\/(\d+(?:\.\d+)+)/
		let result
		if (!(result = userAgent.match(regex))) return ["other", NaN, NaN, NaN]
		if (result[1] != "safari") {
			const [major, minor, patch] = result[2].split(".")
			// @ts-ignore
			return [result[1], parseInt(major), parseInt(minor), parseInt(patch)]
		}
		result = userAgent.match(/version\/(\d+(?:\.\d+)+).*safari/)
		// @ts-ignore
		const [major, minor, patch] = result[1].split(".")
		return ["safari", parseInt(major), parseInt(minor), parseInt(patch)]
	}
	const [core, major, minor, patch] = coreInfo();
	const supportMap = {
		"firefox": [60, 0, 0],
		"chrome": [61, 0, 0],
		"safari": [14, 5, 0]
	}
	const versions = [major, minor, patch]
	// require是需求的版本号，current是浏览器环境本身的版本号
	const check = (require, current) => {
		// 防止不存在的意外，提前截断当前版本号的长度
		if (current.length > require.length) current.length = require.length

		// 考虑到玄学的NaN情况，记录是否存在NaN
		let flag = false
		// 从主版本号遍历到修订版本号，只考虑当前版本号的长度
		for (let i = 0; i < current.length; ++i) {
			// 当前环境版本号当前位若是NaN，则记录后直接到下一位
			if (isNaN(current[i])) {
				flag = true
				continue
			}
			// 如果此时flag为true且current[i]不为NaN，版本号则不合法，直接否
			if (flag) return false
			// 上位版本号未达到要求，直接否决
			if (require[i] > current[i]) return false
			// 上位版本号已超过要求，直接可行
			if (current[i] > require[i]) return true
		}
		return true
	}

	if (core in supportMap && !check(supportMap[core], versions)) {
		const tip = '检测到您的浏览器内核版本无法支持当前无名杀所需的功能，请立即升级浏览器或手机webview内核！';
		console.error(tip);
		let redirect_tip = `您使用的浏览器或无名杀客户端内核版本过低，已经无法正常运行无名杀！\n目前使用的浏览器UA信息为：\n${userAgent}\n点击“确认”以前往GitHub下载最新版无名杀客户端（可能需要科学上网）。\n稍后您的无名杀将自动退出（可能的话）`;
		if (core === 'safari') {
			alert(`您使用的safari浏览器无法支持当前无名杀所需的功能，请至少升级至14.5.0！\n稍后您的无名杀将自动退出（可能的话）`);
		} else {
			if (confirm(redirect_tip)) {
				window.open('https://github.com/libccy/noname/releases/tag/chromium77-client');
			}
		}
		exit();
	}
	else {
		// node环境下
		if (typeof window.require == 'function' &&
			typeof window.process == 'object' &&
			typeof window.__dirname == 'string') {
			// 在http环境下修改__dirname和require的逻辑
			if (location.protocol.startsWith('http') &&
				window.__dirname.endsWith('electron.asar\\renderer')) {
				const path = require('path');
				window.__dirname = path.join(path.resolve(), 'resources/app');
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
			window.require.extensions['.ts'] = function (module, filename) {
				// @ts-ignore
				const _compile = module._compile;
				// @ts-ignore
				module._compile = function (code, fileName) {
					/**
					 * @type { import('typescript') }
					 */
					// @ts-ignore
					const ts = require('./game/typescript.js');
					// 使用ts compiler对ts文件进行编译
					const result = ts.transpile(code, {
						module: ts.ModuleKind.CommonJS,
						target: ts.ScriptTarget.ES2019,
						inlineSourceMap: true,
						resolveJsonModule: true,
						esModuleInterop: true,
					}, fileName);
					// 使用默认的js编译函数获取返回值
					return _compile.call(this, result, fileName);
				}
				// @ts-ignore
				module._compile(require('fs').readFileSync(filename, 'utf8'), filename);
			};
		}
		// 使serviceWorker加载完成后，再加载entry.js
		const loadEntryJs = () => {
			const script = document.createElement('script')
			script.type = "module";
			script.src = `${assetURL}game/entry.js`;
			script.async = true;
			script.onerror = event => {
				console.error(event);
				const message = `您使用的浏览器或《无名杀》客户端加载内容失败！\n请检查是否缺少游戏文件！隔版本更新请下载完整包而不是离线包！\n目前使用的浏览器UA信息为：\n${userAgent}\n若您使用的客户端为自带内核的旧版“兼容版”，请及时更新客户端版本！\n若您使用的客户端为手机端的非兼容版《无名杀》，请尝试更新手机的WebView内核，或者更换为1.8.2版本及以上的兼容版！\n若您是直接使用浏览器加载index.html进行游戏，请改为运行文件夹内的“noname-server.exe”（或使用VSCode等工具启动Live Server），以动态服务器的方式启动《无名杀》！\n若您使用的是苹果端，请至少将Safari升级至14.5.0！`;
				console.error(message);
				alert(message);
				exit();
			}
			document.head.appendChild(script);
		};

		if (location.protocol.startsWith('http') && 'serviceWorker' in navigator) {
			let scope = window.location.protocol + '//' + window.location.host + '/';
			navigator.serviceWorker.getRegistrations()
				.then(async registrations => {
					let findServiceWorker = registrations.find(registration => {
						return registration && registration.active && registration.active.scriptURL == `${scope}service-worker.js`;
					});
					try {
						const registration_1 = await navigator.serviceWorker.register(`${scope}service-worker.js`, {
							updateViaCache: "all",
							scope,
						});
						// 初次加载worker，需要重新启动一次
						if (!findServiceWorker) location.reload();
						navigator.serviceWorker.addEventListener('message', e => {
							console.log(e);
						});
						registration_1.update().catch(console.error);
					} catch (e_1) {
						console.log('serviceWorker加载失败: ', e_1);
					}
				}).finally(loadEntryJs);
		} else {
			loadEntryJs();
		}
	}
});
