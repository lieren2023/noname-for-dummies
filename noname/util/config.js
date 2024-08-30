import { lib } from "../library/index.js";

/**
 * @param {string} name
 * @returns {any}
 */
export function get(name) {
	const config = Reflect.get(lib, "config");
	if (!config) return null;
	return Reflect.get(config, name);
}

/**
 * @param {string} name
 * @param {any} value
 * @returns {void}
 */
export function set(name, value) {
	const config = Reflect.get(lib, "config");
	if (!config) return;
	Reflect.set(config, name, value);
}

/**
 * @param {string} name
 * @returns {boolean}
 */
export function has(name) {
	const config = Reflect.get(lib, "config");
	if (!config) return false;
	return Reflect.has(config, name);
}
