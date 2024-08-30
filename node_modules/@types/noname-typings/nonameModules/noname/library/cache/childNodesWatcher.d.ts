/**
 * 子节点观察器，对于需要频繁遍历子节点的DOM对象的实时变化进行缓存。
 */
export class ChildNodesWatcher {
    constructor(dom: any);
    dom: any;
    childNodes: any[];
    observer: MutationObserver;
    onChildNodesChanged(addedNodes: any, removedNodes: any): void;
}
