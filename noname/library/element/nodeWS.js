import { AI as ai } from '../../ai/index.js';
import { Get as get } from '../../get/index.js';
import { Game as game } from '../../game/index.js';
import { Library as lib } from "../index.js";
import { status as _status } from '../../status/index.js';
import { UI as ui } from '../../ui/index.js';
import { GNC as gnc } from '../../gnc/index.js';

export class NodeWS {
	/**
	 * @param {string | NodeWS} id
	 */
	constructor(id) {
		this.wsid = (id instanceof NodeWS) ? id.wsid : id;
	}
	send(message) {
		game.send('server', 'send', this.wsid, message);
	}
	on(type, func) {
		this['on' + type] = func;
	}
	close() {
		game.send('server', 'close', this.wsid);
	}
}
