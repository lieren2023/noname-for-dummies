/**
 * 关于不同浏览器下对异步错误的处理方式
 *
 * 目前已实现的浏览器如下：
 *
 * - `Google Chrome`（包括`electron`、`cordova`以及`crosswalk`）
 * - `Mozilla Firefox`
 *
 */

export { ChromePromiseErrorHandler } from "./chrome.js";
export { FirefoxPromiseErrorHandler } from "./firefox.js";
export { UnknownPromiseErrorHandler } from "./unknown.js";
