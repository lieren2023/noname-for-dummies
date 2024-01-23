import { GeneratorFunction, Uninstantable } from "../util/index.js";

export class Is extends Uninstantable {
	/**
	 * @param {*} item 
	 * @returns {boolean}
	 */
	static coroutine(item) {
		return typeof item == "function" && item.name == "genCoroutine";
	}

	/**
	 * @param {*} item 
	 * @returns {boolean}
	 */
	static generatorFunc(item) {
		return item instanceof GeneratorFunction;
	}

	/**
	 * @param {*} item 
	 * @returns {boolean}
	 */
	static generator(item) {
		return (typeof item == "object") && ("constructor" in item) && item.constructor && ("constructor" in item.constructor) && item.constructor.constructor === GeneratorFunction;
	}
};
