/**
 * > 这玩意因为狂神还得是数组
 *
 * @template {import("./interface.d.ts").NonameAssemblyType} AssemblyType
 * @template {keyof AssemblyType} Name
 * @extends {Array<AssemblyType[Name][keyof AssemblyType[Name]]>}
 */
export class NonameAssembly<AssemblyType extends import("./interface.d.ts").NonameAssemblyType, Name extends keyof AssemblyType> extends Array<AssemblyType[Name][keyof AssemblyType[Name]]> {
    /**
     *
     * @param {Name} name
     */
    constructor(name: Name);
    get name(): Name;
    /**
     *
     * @param {keyof AssemblyType[Name]} name
     * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
     * @override
     */
    override add(name: keyof AssemblyType[Name], content: AssemblyType[Name][keyof AssemblyType[Name]]): this;
    /**
     *
     * @param {keyof AssemblyType[Name]} name
     * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
     * @override
     */
    override push(name: keyof AssemblyType[Name], content: AssemblyType[Name][keyof AssemblyType[Name]]): number;
    /**
     *
     * @param {keyof AssemblyType[Name]} name
     */
    has(name: keyof AssemblyType[Name]): boolean;
    /**
     *
     * @param {keyof AssemblyType[Name]} name
     * @returns {AssemblyType[Name][keyof AssemblyType[Name]] | undefined}
     */
    get(name: keyof AssemblyType[Name]): AssemblyType[Name][keyof AssemblyType[Name]] | undefined;
    /**
     *
     * @param {keyof AssemblyType[Name]} name
     * @param {AssemblyType[Name][keyof AssemblyType[Name]]} content
     */
    update(name: keyof AssemblyType[Name], content: AssemblyType[Name][keyof AssemblyType[Name]]): boolean;
    #private;
}
export namespace defaultHookcompatition {
    let checkBegin: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "checkBegin">;
    let checkCard: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "checkCard">;
    let checkTarget: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "checkTarget">;
    let checkButton: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "checkButton">;
    let checkEnd: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "checkEnd">;
    let uncheckBegin: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "uncheckBegin">;
    let uncheckCard: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "uncheckCard">;
    let uncheckTarget: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "uncheckTarget">;
    let uncheckButton: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "uncheckButton">;
    let uncheckEnd: NonameAssembly<import("./interface.d.ts").NonameAssemblyType, "uncheckEnd">;
}
export namespace defaultAssemblys { }
