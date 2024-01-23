//这里主要是声明各种游戏内常用的对象的结构
type listeners = {
    [key in keyof HTMLElementEventMap]?: EventListener;
};

type styleObj = {
    [key in keyof CSSStyleDeclaration]?: string;
}

/** key为字符串的map */
interface SMap<V> {
    [key: string]: V
}

/** key为number的map */
interface NMap<V> {
    [key: number]: V
}

//从0个参数到任意参数的方法结构声明
type NoneParmFum<T> = () => T;
type OneParmFun<U, T> = (arg0: U) => T;
type TwoParmFun<U1, U2, T> = (arg0: U1, arg1: U2) => T;
type ThreeParmFun<U1, U2, U3, T> = (arg0: U1, arg1: U2, arg2: U3) => T;
type FourParmFun<U1, U2, U3, U4, T> = (arg0: U1, arg1: U2, arg2: U3, arg3: U4) => T;
type RestParmFun<T> = (...args) => T;
type RestParmFun2<U, T> = (...args: U[]) => T;

//尝试增加的符合类型声明
/** SingleAndArrayType:单体与集合类型 */
type SAAType<T> = T | T[];
/** 再价格可以返回这种类型的方法 */
type SAAFType<T> = T | T[] | RestParmFun<T>;
/** 有name属性的对象 */
type NameType = { name: string };
/** 技能或者卡牌 */
type SkillOrCard = string | NameType | Card;
/** 卡牌或者卡牌集合 */
type CCards = SAAType<Card>;

/** 技能content */
declare type ContentFuncByAll = {
    // (event: GameEventPromise, step: number, source: Player, player: Player, target: Player, targets: Player[], card: Card, cards: Card[], skill: string, forced: boolean, num: number, trigger: GameEventPromise, result: Result): any,
    (event: GameEventPromise, trigger: GameEventPromise, player: Player): Promise<any>;
}

declare type Game = typeof import('../../noname/game/index.js').Game;
declare type Library = typeof import('../../noname/library/index.js').Library;
declare type Status = typeof import('../../noname/status/index.js').status;
declare type UI = typeof import('../../noname/ui/index.js').UI;
declare type Get = typeof import('../../noname/get/index.js').Get;
declare type AI = typeof import('../../noname/ai/index.js').AI;

declare type Button = import('../../noname/library/index.js').Button;
declare type Card = import('../../noname/library/index.js').Card;
declare type VCard = import('../../noname/library/index.js').VCard;
declare type Dialog = import('../../noname/library/index.js').Dialog;
declare type GameEvent = import('../../noname/library/index.js').GameEvent;
declare type GameEventPromise = import('../../noname/library/index.js').GameEventPromise;
declare type Player = import('../../noname/library/index.js').Player;
declare type VCard = import('../../noname/library/index.js').VCard;
declare type Control = import('../../noname/library/index.js').Control;

declare type Video = import('../../noname/game/index.js').Video;
declare type Videos = import('../../noname/game/index.js').Videos;
declare type GameHistory = import('../../noname/game/index.js').GameHistory;
declare type CodeMirror = typeof import('../../game/codemirror.js').default;

declare type Sex = 'male' | 'female' | 'dobule' | 'none';
declare type Character = [Sex, string, number | string, string[], string[]];
declare type Select = [number, number];