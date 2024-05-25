import { lib } from "../../../noname.js";

export class LibInitPromises {
	/**
	 * Promise版的`lib.init.js`
	 *
	 * @param {string} path - 文件路径
	 * @param {string | string[]} [file] - 文件名或文件名组，忽略则直接读取`path`的内容
	 * @returns {Promise<Event>}
	 */
	js(path, file) {
		return new Promise((resolve, reject) => lib.init.js(path, file, resolve, reject));
	}

	/**
	 * Promise版的`lib.init.css`
	 *
	 * @param {string} path - 文件路径
	 * @param {string | string[]} [file] - 文件名或文件名组，忽略则直接读取`path`的内容
	 * @param {Element} [before] - 新样式dom的位置
	 * @param {boolean} [noerror = false] - 是否忽略报错
	 * @returns {Promise<HTMLLinkElement>}
	 */
	css(path, file, before, noerror = false) {
		return new Promise((resolve, reject) => {
			const style = lib.init.css(path, file, before);
			const success = () => resolve(style);
			style.addEventListener("load", success);
			style.addEventListener("error", noerror ? success : reject);
		});
	}

	/**
	 * Promise版的`lib.init.req`
	 *
	 * @param {string} str - 要读取的地址
	 * @param {string} [master]
	 * @returns {Promise<ProgressEvent>}
	 */
	req(str, master) {
		return new Promise((resolve, reject) => lib.init.req(str, resolve, reject, master));
	}

	/**
	 * Promise版的`lib.init.json`
	 *
	 * @param {string} url - 要读取的地址
	 * @returns {Promise<object>}
	 */
	json(url) {
		return new Promise((resolve, reject) => lib.init.json(url, resolve, reject));
	}

	/**
	 * Promise版的`lib.init.sheet`
	 *
	 * @returns {Promise<HTMLStyleElement>}
	 */
	sheet() {
		return new Promise((resolve, reject) => {
			const style = lib.init.sheet.apply(lib.init, arguments);
			style.addEventListener("load", () => resolve(style));
			style.addEventListener("error", reject);
		});
	}
}
