import { GeneratorFunction, Uninstantable } from "../util/index.js";
import { Is } from "./is.js";

// gnc: GeNCoroutine
export class GNC extends Uninstantable {
	/**
	 * @param {GeneratorFunction} fn 
	 * @returns 
	 */
	static of(fn) {
		return Is.generatorFunc(fn) ?
			/**
			 * @param {Parameters<typeof fn>} args
			 * @returns {Promise<ReturnType<typeof fn>>}
			 */
			function genCoroutine(...args) {
				let gen = fn.apply(this, args);
				gen.status = "next";
				gen.state = undefined;
				const callback = (resolve, reject) => {
					let result,
						nexts = resolve,
						throws = reject;
					try {
						result = gen[gen.status](gen.state);
					} catch (error) {
						reject(error);
						return;
					}
					if (!result.done) {
						nexts = (item) => {
							gen.state = item;
							gen.status = "next";
							callback(resolve, reject);
						};
						throws = (err) => {
							gen.state = err;
							gen.status = "throw";
							callback(resolve, reject);
						};
					}
					result = result.value;
					Promise.resolve(result).then(nexts, throws);
				};
				return new Promise(callback);
			} : (() => { throw new TypeError("gnc.of needs a GeneratorFunction."); })();
	}
	static is = Is;
};

export const gnc = GNC;
