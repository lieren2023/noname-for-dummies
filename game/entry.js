/*
 const module = import('../noname.js');

 module.then(({ ai, game, get, lib, _status, ui, boot }) => {
 const coreAndVersion = get.coreInfo();
 const core = coreAndVersion[0], version = coreAndVersion[1];
 if (core === 'chrome' && !isNaN(version) && version < 77) {
 const tip = '检测到您的浏览器内核版本小于77，请及时升级浏览器或手机webview内核！';
 console.warn(tip);
 game.print(tip);
 const redirect_tip = '您使用的浏览器或无名杀客户端内核版本过低，将在未来的版本被废弃！\n点击“确认”以前往GitHub下载最新版无名杀客户端（可能需要科学上网）。';
 if (confirm(redirect_tip)) {
 window.open('https://github.com/libccy/noname/releases/tag/chromium77-client');
 }
 }
 boot().then(lib.other.ignore);
 });
 */

import { game, get, lib, boot } from "../noname.js"
import { userAgent } from "../noname/util/index.js";

const coreAndVersion = get.coreInfo();
const core = coreAndVersion[0], version = coreAndVersion[1];
if (core === 'chrome' && !isNaN(version) && version < 77) {
	const tip = '检测到您的浏览器内核版本小于77，请及时升级浏览器或手机webview内核！';
	console.warn(tip);
	game.print(tip);
	const redirect_tip = `您使用的浏览器或无名杀客户端内核版本过低，将在未来的版本被废弃！\n目前使用的浏览器UA信息为：\n${userAgent}\n点击“确认”以前往GitHub下载最新版无名杀客户端（可能需要科学上网）。`;
	if (confirm(redirect_tip)) {
		window.open('https://github.com/libccy/noname/releases/tag/chromium77-client');
	}
}
boot().then(lib.other.ignore);

