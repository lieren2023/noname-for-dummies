import { Uninstantable } from "../../util/index.js";

import { ExperimentalSymbol } from "./symbol.js";

export class Experimental extends Uninstantable {
	static symbol = ExperimentalSymbol;
	static symbols = ExperimentalSymbol;
}
