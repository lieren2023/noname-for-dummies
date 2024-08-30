import { NonameAnnounceType } from "./interface.d.ts";

export interface IAnnounceSubscriber {
	subscribe(name: string): void;
	unsubscribe(name: string): void;

	get isEmpty(): boolean;
}

export type AnnounceSubscriberType<T> = new (
	content: (value: T, name: string) => void,
	target: EventTarget
) => IAnnounceSubscriber;

export class Announce {
	constructor(
		eventTarget: EventTarget,
		records: WeakMap<(arg0: any) => void, IAnnounceSubscriber>,
		SubscriberType: AnnounceSubscriberType<any> = AnnounceSubscriber
	);

	/**
	 * 推送任意数据给所有监听了指定事件的订阅者，并返回给定的数据
	 *
	 * 若不存在订阅指定事件的订阅者，则推送的数据将无意义
	 *
	 * @param name - 要推送事件的名称
	 * @param values - 要推送的数据
	 */
	publish<Type extends NonameAnnounceType, Name extends keyof Type>(
		name: Name,
		values: Parameters<Type[Name]>[0]
	): Parameters<Type[Name]>[0];

	/**
	 * 订阅给定名字的事件，并返回给定的函数
	 *
	 * 在事件触发时执行给定的函数
	 *
	 * 给定的函数将被存储至当前实例中，用于取消订阅时获取
	 *
	 * @param name - 要订阅事件的名称
	 * @param method - 事件触发时执行的函数
	 */
	subscribe<Type extends NonameAnnounceType, Name extends keyof Type>(
		name: Name,
		method: Type[Name]
	): Type[Name];

	/**
	 * 取消指定事件某一个函数的订阅，并返回该函数
	 *
	 * 给定的函数将不再于事件触发时执行，其余同事件需触发的函数不受限制
	 *
	 * @param name - 要取消订阅事件的名称
	 * @param method - 订阅指定事件的函数
	 */
	unsubscribe<Type extends NonameAnnounceType, Name extends keyof Type>(
		name: Name,
		method: Type[Name]
	): Type[Name];
}

export class AnnounceSubscriber<T> implements IAnnounceSubscriber {
	constructor(content: (value: T, name: string) => void, target: EventTarget);
}
