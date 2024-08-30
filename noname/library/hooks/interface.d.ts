import { Button, Card, GameEvent, GameEventPromise, Player } from "../element";

export interface NonameHookType {
	/**
	 *
	 * @param id - 势力的id
	 * @param short - 势力的短名称（单字称呼）
	 * @param name - 势力的完整名称
	 * @param config - 关于势力的配置情况
	 */
	addGroup(id: string, short: string, name: string, config: Record<string, unknown>): any;

	/**
	 *
	 * @param nature - 属性的id
	 * @param translation - 属性的名称
	 * @param config - 关于属性的配置
	 */
	addNature(nature: string, translation: string, config: Record<string, unknown>): any;

	// #region Assembly-Compatition
	/**
	 *
	 * @param event - 当前检查的事件
	 */
	checkBegin(event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param event - 当前检查的事件
	 * @param config - 一些配置
	 */
	checkEnd(
		event: GameEvent & GameEventPromise,
		config: { ok: boolean; auto: boolean; autoConfirm: boolean }
	): any;

	/**
	 *
	 * @param button - 检查的Button
	 * @param event - 当前检查的事件
	 */
	checkButton(button: Button, event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param card - 检查的卡牌
	 * @param event - 当前检查的事件
	 */
	checkCard(card: Card, event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param target - 检查的玩家
	 * @param event - 当前检查的事件
	 */
	checkTarget(target: Player, event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param event - 当前检查的事件
	 * @param args - 要取消检查的对象
	 */
	uncheckBegin(
		event: GameEvent & GameEventPromise,
		args: ("button" | "card" | "target")[] = ["button", "card", "target"]
	): any;

	/**
	 *
	 * @param event - 当前检查的事件
	 * @param args - 要取消检查的对象
	 */
	uncheckEnd(
		event: GameEvent & GameEventPromise,
		args: ("button" | "card" | "target")[] = ["button", "card", "target"]
	): any;

	/**
	 *
	 * @param button - 取消检查的Button
	 * @param event - 当前检查的事件
	 */
	uncheckButton(button: Button, event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param card - 取消检查的卡牌
	 * @param event - 当前检查的事件
	 */
	uncheckCard(card: Card, event: GameEvent & GameEventPromise): any;

	/**
	 *
	 * @param target - 取消检查的玩家
	 * @param event - 当前检查的事件
	 */
	uncheckTarget(target: Player, event: GameEvent & GameEventPromise): any;
	// #endregion
}
