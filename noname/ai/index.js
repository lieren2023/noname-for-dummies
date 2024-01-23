import { Get as get } from '../get/index.js';
import { Game as game } from '../game/index.js';
import { status as _status } from '../status/index.js';
import { UI as ui } from '../ui/index.js';
import { Library as lib } from '../library/index.js';
import { GNC as gnc } from '../gnc/index.js';
import { Uninstantable } from "../util/index.js";

import { Basic } from './basic.js';

export class AI extends Uninstantable {
	static basic = Basic;
	static get = get;
};

export const ai = AI;

export {
	Basic
}
