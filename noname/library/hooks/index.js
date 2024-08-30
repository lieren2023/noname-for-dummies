import { NonameHook } from "./hook.js";
import { defaultHookcompatition } from "../assembly/index.js";

export const defaultHooks = {
	addGroup: new NonameHook("addGroup"),
	addNature: new NonameHook("addNature"),

	...defaultHookcompatition,
};

export { NonameHook };
