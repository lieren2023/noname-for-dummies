export const status = {
	paused: false,
	paused2: false,
	paused3: false,
	over: false,
	clicked: false,
	auto: false,
	/**
	 * @type { GameEventPromise }
	 */
	// @ts-ignore
	event: null,
	ai: {},
	lastdragchange: [],
	skillaudio: [],
	dieClose: [],
	dragline: [],
	dying: [],
	/**
	 * @type { GameHistory[] }
	 */
	globalHistory: [{
		// @ts-ignore
		cardMove: [],
		custom: [],
		useCard: [],
		changeHp: [],
		everything: [],
	}],
	cardtag: {
		yingbian_zhuzhan: [],
		yingbian_kongchao: [],
		yingbian_fujia: [],
		yingbian_canqu: [],
		yingbian_force: []
	},
	renku: [],
	prehidden_skills: [],
	postReconnect: {},
	/**
	 * @type { string | void }
	 */
	extension: undefined,
};

export const _status = status;