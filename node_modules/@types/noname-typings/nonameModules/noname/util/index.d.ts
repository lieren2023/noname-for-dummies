/**
 * 暂停x毫秒
 * @param { number } ms
 * @returns { Promise<void> }
 */
export function delay(ms: number): Promise<void>;
/**
 * 将当前Record已有的普通项封装起来，但不阻止其继续扩展
 *
 * @template {object} T
 * @param {T} record - 要封装的Record
 * @returns {Readonly<T>}
 */
export function freezeButExtensible<T extends unknown>(record: T): Readonly<T>;
/** @type { string } */
export const nonameInitialized: string;
export const assetURL: string;
export const GeneratorFunction: Function;
export const AsyncFunction: Function;
export const userAgent: string;
export { Mutex } from "./mutex.js";
export const characterDefaultPicturePath: "image/character/default_silhouette_";
/**
 * 不能被new的类
 */
export class Uninstantable {
}
