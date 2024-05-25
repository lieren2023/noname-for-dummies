export const defaultHooks: {
    checkBegin: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "checkBegin">;
    checkCard: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "checkCard">;
    checkTarget: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "checkTarget">;
    checkButton: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "checkButton">;
    checkEnd: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "checkEnd">;
    uncheckBegin: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "uncheckBegin">;
    uncheckCard: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "uncheckCard">;
    uncheckTarget: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "uncheckTarget">;
    uncheckButton: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "uncheckButton">;
    uncheckEnd: import("../assembly/index.js").NonameAssembly<import("../assembly/interface.js").NonameAssemblyType, "uncheckEnd">;
    addGroup: NonameHook<import("./interface.js").NonameHookType, "addGroup">;
    addNature: NonameHook<import("./interface.js").NonameHookType, "addNature">;
};
export { NonameHook };
import { NonameHook } from "./hook.js";
