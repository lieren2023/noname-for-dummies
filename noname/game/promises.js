import { Uninstantable } from "../util/index.js";
import { game, Game } from "./index.js";

export class GamePromises extends Uninstantable {
	/**
	 * 模仿h5的prompt，用于显示可提示用户进行输入的对话框
	 *
	 * 注: 由于参数列表是随意的，在这里我准备限制一下这个函数的参数顺序
	 *
	 * @type {{
	 *  (title: string): Promise<string | false>;
	 *	(title: string, forced: true): Promise<string>;
	 *	(alertOption: 'alert', title: string): Promise<true>;
	 * }}
	 *
	 * @param { string } [title] 设置prompt标题与input内容
	 * @param { boolean } [forced] 为true的话将没有"取消按钮"
	 * @param { string } alertOption 设置prompt是否模拟alert
	 * @example
	 * ```js
	 * // 只设置标题(但是input的初始值就变成了undefined)
	 * game.promises.prompt('###prompt标题').then(value => console.log(value));
	 * // 设置标题和input初始内容
	 * game.promises.prompt('###prompt标题###input初始内容').then(value => console.log(value));
	 * ```
	 * @returns { Promise<string> }
	 */
	// @ts-ignore
	static prompt(alertOption, title, forced) {
		return new Promise((resolve, reject) => {
			if (alertOption !== 'alert') {
				// @ts-ignore
				forced = title || false;
				title = alertOption;
				game.prompt(title, forced, resolve);
			} else {
				game.prompt(title, alertOption, resolve);
			}
		});
	}
	/**
	 * 模仿h5的alert，用于显示信息的对话框
	 *
	 * @param { string } title
	 * @example
	 * ```js
	 * await game.promises.alert('弹窗内容');
	 * ```
	 * @returns { Promise<true> }
	 */
	static alert(title) {
		return new Promise((resolve, reject) => {
			game.prompt(title, 'alert', resolve);
		});
	}
	// 读写函数promises化(不用考虑其对应函数是否存在)
	static download(url, folder, dev, onprogress) {
		return new Promise((resolve, reject) => {
			game.download(url, folder, resolve, reject, dev, onprogress);
		});
	}
	static readFile(filename) {
		return new Promise((resolve, reject) => {
			game.readFile(filename, resolve, reject);
		});
	}
	static readFileAsText(filename) {
		return new Promise((resolve, reject) => {
			game.readFileAsText(filename, resolve, reject);
		});
	}
	static writeFile(data, path, name) {
		return (new Promise((resolve, reject) => {
			game.writeFile(data, path, name, resolve);
		})).then(result => {
			return new Promise((resolve, reject) => {
				if (result instanceof Error) {
					reject(result);
				} else {
					resolve(result);
				}
			});
		});
	}
	static ensureDirectory(list, callback, file) {
		return new Promise((resolve, reject) => {
			game.ensureDirectory(list, callback, file).then(resolve).catch(reject);
		});
	}
	static createDir(directory) {
		return new Promise((resolve, reject) => {
			game.createDir(directory, resolve, reject);
		});
	}
	static removeFile(filename) {
		return /** @type {Promise<void>} */(new Promise((resolve, reject) => {
			game.removeFile(filename, err => {
				if (err) reject(err);
				else resolve();
			});
		}));
	}
}
