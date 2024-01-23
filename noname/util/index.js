export const nonameInitialized = localStorage.getItem('noname_inited');
export const assetURL = typeof nonameInitialized != 'string' || nonameInitialized == 'nodejs' ? '' : nonameInitialized;
export const GeneratorFunction = (function* () { }).constructor;
export const AsyncFunction = (async function () { }).constructor;
export const userAgent = navigator.userAgent.toLowerCase();
export { Mutex } from './mutex.js';
export const characterDefaultPicturePath = "image/character/default_silhouette_";

// 我靠循环引用问题在这？
// export * as config from './config.js'

/**
 * 不能被new的类
 */
export class Uninstantable {
	constructor() {
		throw new TypeError(`${new.target.name} is not a constructor`);
	}
}

/**
 * 
 * @param { number } ms 
 * @returns { Promise<void> }
 */
export function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
