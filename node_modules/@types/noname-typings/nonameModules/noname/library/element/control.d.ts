export class Control extends HTMLDivElement {
    constructor(...args: any[]);
    open(): this;
    add(item: any): void;
    close(): void;
    replace(...args: any[]): this;
    custom: any;
}
