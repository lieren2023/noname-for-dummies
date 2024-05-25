import * as buildin from "./buildin.js";

/**
 * > 这玩意因为狂神还得是数组
 *
 * @template {import("./interface.d.ts").NonameAssemblyType} AssemblyType
 * @template {keyof AssemblyType} Name
 * @extends {Array<AssemblyType[Name][keyof AssemblyType[Name]]>}
 */
export class NonameAssembly extends Array {
	/**
	 * @type {Name}
	 */
	#name;

	/**
	 * @type {Map<keyof AssemblyType[Name], number>}
	 */
	#record;

	/**
	 *
	 * @param {Name} name
	 */
	constructor(name) {
		super();
		this.#name = name;
		this.#record = new Map();

		if (name in buildin) {
			// @ts-ignore
			for (const [key, item] of Object.entries(buildin[name])) {
				// @ts-ignore
				this.add(key, item);
			}
		}
	}

	static get [Symbol.species]() {
		return Array;
	}

	get name() {
		return this.#name;
	}

	/**
	 *
	 * @param {keyof AssemblyType[Name]} name
	 * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
	 * @override
	 */
	// @ts-ignore
	add(name, content) {
		if (!content) {
			// @ts-expect-error A
			content = name;
			// @ts-expect-error A
			name = content.name;
		}
		if (typeof content !== "function") throw new Error("you can't add a non-function to assembly.");
		// if (typeof name !== "string" || name.length === 0) throw new Error("you can't add a anonymous function to assembly.")

		if (typeof name !== "string" || name.length === 0) {
			if (!this.includes(content)) Array.prototype.push.call(this, content);
		} else if (!this.has(name)) {
			this.#record.set(name, this.length);
			Array.prototype.push.call(this, content);
		}

		return this;
	}

	/**
	 *
	 * @param {keyof AssemblyType[Name]} name
	 * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
	 * @override
	 */
	// @ts-ignore
	push(name, content) {
		return this.add(name, content).length;
	}

	/**
	 *
	 * @param {keyof AssemblyType[Name]} name
	 */
	has(name) {
		return this.#record.has(name);
	}

	/**
	 *
	 * @param {keyof AssemblyType[Name]} name
	 * @returns {AssemblyType[Name][keyof AssemblyType[Name]] | undefined}
	 */
	get(name) {
		if (!this.has(name)) return void 0;
		// @ts-ignore
		return this[this.#record.get(name)];
	}

	/**
	 *
	 * @param {keyof AssemblyType[Name]} name
	 * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
	 */
	update(name, content) {
		if (!this.has(name)) return false;

		try {
			// @ts-ignore
			this[this.#record.get(name)] = content;
		} catch (e) {
			console.error(e);
			return false;
		}

		return true;
	}
}

export const defaultHookcompatition = {
	checkBegin: new NonameAssembly("checkBegin"),
	checkCard: new NonameAssembly("checkCard"),
	checkTarget: new NonameAssembly("checkTarget"),
	checkButton: new NonameAssembly("checkButton"),
	checkEnd: new NonameAssembly("checkEnd"),

	uncheckBegin: new NonameAssembly("uncheckBegin"),
	uncheckCard: new NonameAssembly("uncheckCard"),
	uncheckTarget: new NonameAssembly("uncheckTarget"),
	uncheckButton: new NonameAssembly("uncheckButton"),
	uncheckEnd: new NonameAssembly("uncheckEnd"),
};

export const defaultAssemblys = {
	...defaultHookcompatition,
};
