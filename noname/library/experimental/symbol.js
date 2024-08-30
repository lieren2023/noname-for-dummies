import { Uninstantable } from "../../util/index.js";

export class ExperimentalSymbol extends Uninstantable {
	static itemType = Symbol("noname.experimental.itemType");
}
