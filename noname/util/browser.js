import { PromiseErrorHandler } from "./struct/index.js";

/**
 * 从浏览器名到不同浏览器下异步处理方式的映射
 *
 * `key`的值同`get.coreInfo`函数返回值的第一个元素
 *
 * @type {Record<"firefox" | "chrome" | "safari" | "other", new () => PromiseErrorHandler>}
 */
export const promiseErrorHandlerMap = {
	chrome: PromiseErrorHandler.ChromePromiseErrorHandler,
	firefox: PromiseErrorHandler.FirefoxPromiseErrorHandler,
	safari: PromiseErrorHandler.UnknownPromiseErrorHandler,
	other: PromiseErrorHandler.UnknownPromiseErrorHandler,
};

/**
 * @typedef {import('./struct/interface/promise-error-handler.js').PromiseErrorHandler} PromiseErrorHandler
 */
