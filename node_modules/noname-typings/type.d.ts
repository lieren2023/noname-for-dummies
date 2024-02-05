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
declare type ContentFuncByAll = (event: GameEventPromise, trigger: GameEventPromise, player: Player) => Promise<any>;

declare type GeneratorContentFuncByAll = (event: GameEventPromise, map: {
        event: GameEventPromise,
        step: number,
        source: Player,
        player: Player,
        target: Player,
        targets: Player[],
        card: Card,
        cards: Card[],
        skill: string,
        forced: boolean,
        num: number,
        trigger: GameEventPromise,
        result: Result
    }) => Generator<any, void, unknown>;

declare type OldContentFuncByAll = () => void

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
declare type Character = [Sex, string, number | string, string[], string[]] | [Sex, string, number | string, string[]];
declare type Select = [number, number];

/**
 * 导入武将包的配置
 */
declare interface importCharacterConfig {
    /** 武将包名 */
    name: string;
    /** 
     * 设置该武将包是否可以联机 
     */
    connect?: boolean;
    /** 
     * 设置联机武将禁用列表 
     * */
    connectBanned?: string[];
    /** 
     * 设置武将基本配置信息
     */
    character: SMap<Character>;
    /** 
     * 设置武将介绍 
     * */
    characterIntro?: SMap<string>;
    /** 
     * 设置武将标题（用于写称号或注释）
     * */
    characterTitle?: SMap<string>;
    /** 
     * 设置技能 
     * */
    skill?: SMap<Skill>;
    /** 
     * 设置珠联璧合武将 
     * */
    perfectPair?: SMap<string[]>;
    /** 
     * 设置指定武将的过滤方法（传入一个mode，用于过滤玩法模式） 
     * */
    characterFilter?: SMap<OneParmFun<string, boolean>>;
    /** 
     * 设置在武将包界面分包
     */
    characterSort?: SMap<SMap<string[]>>;
    /** 
     * 设置该武将包独有的卡牌（或者是特殊卡牌） 
     * 
     * */
    card?: SMap<any>;
    /** 
     * 设置自定义卡牌类型的排序用的优先级
     * */
    cardType?: SMap<number>;
    /**
     * 设置动态翻译（本地化）【v1.9.105】
     * 
     * 指定lib.dynamicTranslate.xxx为一个函数 即可让技能xxx显示的描述随玩家状态而变化 并实现技能修改等
     * 
     * Player:指技能拥有者
     */
    dynamicTranslate?: SMap<OneParmFun<Player, string>>;
    /** 
     * 选择武将时，武将左下角可进行替换的武将配置【v1.9.106.3】 
     * 
     * */
    characterReplace?: SMap<string[]>;

    translate?: SMap<string>;
    /**
     * 对应lib.element
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    element?: SMap<any>;
    /**
     * 对应ai
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ai?: SMap<any>;
    /**
     * 对应ui
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ui?: SMap<any>;
    /**
     * 对应game
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    game?: SMap<any>;

    /**
     * 类型：键值对
     * 
     * 作用：对应get
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    get?: SMap<any>;
    /**
     * 帮助内容将显示在菜单－选项－帮助中
     * 
     * 游戏编辑器的帮助代码基本示例结构：
     * 
     * "帮助条目":
     * ```jsx
     *  <ul>
     *      <li>列表1-条目1
     *      <li>列表1-条目2
     *  </ul>
     *  <ol>
     *      <li>列表2-条目1
     *      <li>列表2-条目2
     *  </ul>
     * ```
     * (目前可显示帮助信息：mode，extension，card卡包，character武将包)
     */
    help?: SMap<string>;

    [key: string]: any;
}
/**
 * 导入卡牌包的配置
 */
declare interface importCardConfig {
    /** 卡牌包名 */
    name: string;
    /** 
     * 设置该卡包是否可以联机 
     * */
    connect?: boolean;
    /** 
     * 设置卡牌
     * */
    card: SMap<Card>;
    /** 
     * 设置卡牌技能 
     * */
    skill: SMap<Skill>;
    /** 
     * 设置从牌堆添加指定卡牌
     * */
    list: CardBaseUIData[];
    /** 卡牌翻译 */
    translate: SMap<string> | string;
    /**
     * 帮助内容将显示在菜单－选项－帮助中
     * 
     * 游戏编辑器的帮助代码基本示例结构：
     * 
     * "帮助条目":
     * ```jsx
     *  <ul>
     *      <li>列表1-条目1
     *      <li>列表1-条目2
     *  </ul>
     *  <ol>
     *      <li>列表2-条目1
     *      <li>列表2-条目2
     *  </ul>
     * ```
     * (目前可显示帮助信息：mode，extension，card卡包，character武将包)
     */
    help?: SMap<string>;

    [key: string]: any;
}

/**
 * 导入玩法模式的配置
 */
declare interface importModeConfig {
    /** 模式名 */
    name: string;
    /** 技能（主要是放些该模式下特有的技能） */
    skill?: SMap<Skill>;
    /** 
     * 武将包
     */
    characterPack?: SMap<SMap<Character>>;
    /**
     * 武将分类排序
     */
    characterSort?: SMap<SMap<string[]>>;
    /** 卡牌（主要是放些该模式下特有的卡牌） */
    card?: SMap<ExCardData>;
    /** 
     * 卡包
     */
    cardPack?: SMap<SMap<string[]>>;
    /**
     * mode的init方法（若有，init是最早启动的方法）
     */
    init?(): void;
    /**
     * mode的start启动方法
     */
    start(): void;
    /**
     * mode的start启动之前的处理方法
     */
    startBefore?(): void;
    /**
     * 重新初始化
     * 
     * 在lib.client.reinit中，
     * 
     * game.loadModeAsync，读取mode时启用这个初始化。
     * 
     * 具体作用：有待考究
     */
    onreinit?(): void;
    /**
     * 对应lib.element
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    element?: SMap<any>;
    /**
     * 对应ai
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ai?: SMap<any>;
    /**
     * 对应ui
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ui?: SMap<any>;
    /**
     * 对应game
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    game?: SMap<any>;

    /**
     * 类型：键值对
     * 
     * 作用：对应get
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    get?: SMap<any>;
    /**
     * 帮助内容将显示在菜单－选项－帮助中
     * 
     * 游戏编辑器的帮助代码基本示例结构：
     * 
     * "帮助条目":
     * ```jsx
     *  <ul>
     *      <li>列表1-条目1
     *      <li>列表1-条目2
     *  </ul>
     *  <ol>
     *      <li>列表2-条目1
     *      <li>列表2-条目2
     *  </ul>
     * ```
     * (目前可显示帮助信息：mode，extension，card卡包，character武将包)
     */
    help?: SMap<string>;

    [key: string]: any;
}

/**
 * 导入武将的配置
 */
declare interface importPlayerConfig {
    /** 武将包名 */
    name: string;
    /** 禁用此扩展的模式 */
    forbid: string[];
    /** 可使用模式 */
    mode: string[];
    //自定义是实现核心初始化方法
    init?(): void;
    arenaReady?(): void;
    /**
      * 对应lib.element
      * 
      * 若里面是项目内的同名字段，将覆盖原方法
      */
    element?: SMap<any>;
    /**
     * 对应ai
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ai?: SMap<any>;
    /**
     * 对应ui
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    ui?: SMap<any>;
    /**
     * 对应game
     * 
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    game?: SMap<any>;

    /**
     * 类型：键值对
     * 
     * 作用：对应get
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    get?: SMap<any>;

    [key: string]: any;
}

/**
 * 导入扩展的配置
 */
declare interface importExtensionConfig {
    /** 扩展名 */
    name: string;
    /** 用于解析用的key，不直接参与游戏逻辑，参与自己定义的解析流程，统一该包的前缀 */
    key?: string;
    /** 
     * 是否可编辑该扩展（需要打开显示制作扩展）
     * 
     * （都满足条件，则可以开启“编辑此扩展”功能）
     */
    editable?: boolean;
    /** 
     * 该扩展菜单的配置 
     * 
     * 名字："extension_" + key
     * 
     * 内容： value
     * 
     * (也是游戏编辑器中的选项代码部分)
     */
    config?: SMap<SelectConfigData>;
    /**
     * 联机配置（目前扩展已经不能联机）
     * 
     * 特殊接口：update
     */
    connect?: SMap<SelectConfigData>;
    /**
     * 扩展的包信息。
     * 
     * 包括卡牌，技能，人物的代码以及中文翻译
     */
    package: PackageData;
    /**
     * 函数执行时机为游戏数据加载之后、界面加载之前
     * 
     * （游戏编辑器中的主代码部分）
     * 
     * 注：即选择了玩法模式之后加载的内容部分；
     * @param config 扩展选项/配置
     * @param pack 扩展定义的武将、卡牌和技能等
     */
    content?(config: SMap<any>, pack: PackageData): void;
    /**
     * 函数执行时机为游戏数据加载之前，且不受禁用扩展的限制，除添加模式外请慎用
     * 
     * （也是游戏编辑器中的启动代码部分）
     * 
     * 注：game.import添加扩展时就加载，即当前游戏加载菜单界面时就已经加载；
     * 
     * 注2：当前扩展联机时，需要直接再此扩展；为了方便扩展，大部分扩展直接在这里扩展；
     * @param data 保存在lib.config中”extension_扩展名“为前缀的配置
     */
    precontent?(data?: SMap<any>): void;
    /** 删除该扩展后调用 */
    onremove?(): void;
    /** 
     * 帮助内容将显示在菜单－选项－帮助中
     * 
     * 游戏编辑器的帮助代码基本示例结构：
     * 
     * "帮助条目":
     * ```jsx
     *  <ul>
     *      <li>列表1-条目1
     *      <li>列表1-条目2
     *  </ul>
     *  <ol>
     *      <li>列表2-条目1
     *      <li>列表2-条目2
     *  </ul>
     * ```
     * (目前可显示帮助信息：mode，extension，card卡包，character武将包)
     */
    help?: SMap<string>;
    /** 相关文件名 */
    files?: {
        character?: string[],
        card?: string[],
        skill?: string[]
    };
    /**
     * 【特殊】用于game.addMode添加时，
     * 用于显示模式icon，所有的图片路径的imgsrc，指定外层扩展文件名；
     */
    extension?: string;
    /**
     * 对应lib.element,
     * 若里面是项目内的同名字段，将覆盖原方法
     */
    element?: SMap<any>;
    /**
     * 对应ai
     */
    ai?: SMap<any>;
    /**
     * 对应ui
     */
    ui?: SMap<any>;
    /**
     * 对应game
     */
    game?: SMap<any>;
    /**
     * 对应get
     */
    get?: SMap<any>;
    /** 
     * 可以继续加入更多对象：
     * 这些对象会对应附加在lib中，或替换对应lib位置的对象：
     * 例如：translate，help，skill... ... 或者其他自定义的...
     */
    [key: string]: any;
}

/** 
 * 菜单的选项的配置 
 * 
 * config的功能菜单的node._link.config，就是该config
 * 内部代码略复杂，太多UI相关逻辑，看不懂（等日后精进，再继续再战）
 */
declare interface SelectConfigData {
    /** 功能名 */
    name: string;
    /** 
     * 【核心】初始化时默认的选项/配置/模式（对应下面item的key）
     */
    init?: boolean | string;
    /** 
     * 【核心】二级菜单配置(当前config内容的菜单)
     */
    item?: SMap<string> | NoneParmFum<SMap<string>>;
    /** 
     * 功能说明
     * 
     * 若没有，也不是其他特殊的选项，则显示“设置 + name”
     */
    intro?: string | NoneParmFum<string>;

    /**
     * 显示bar(添加了“withbar”,有一定的居中效果，即当前menu的头部或者尾部)
     * 
     * @param node 创建出来的visualBar节点
     * @param item item选项
     * @param create 即内部自定义的createNode方法，一般不直接使用该方法，目前来看，可以内部重新定义覆盖该方法，自己达成创建item列表的方式
     * @param switcher 当前config的item的node节点
     */
    visualBar?: (node: HTMLDivElement, item: SMap<string>, create: OneParmFun<string, void>, switcher?: HTMLDivElement) => void
    /**
     * 显示菜单
     * 显示一个以3列为一行的显示列表（内部实现）
     * @param node 当前配置项的节点
     * @param item 当前node的node._link
     * @param name item选项
     * @param config 当前的config
     */
    visualMenu?: (node: HTMLDivElement, link: any, name: string, config: SelectConfigData) => void;
    /**
     * 文本菜单
     * 当前不存在visualMenu的话，则创建item列表节点，若有该属性则执行
     * @param node 
     * @param link 
     */
    textMenu?(node: HTMLDivElement, link: string, config: SelectConfigData): void;

    /** 
     * 清理游戏，核心选项，应该默认是false(undefined)<--该功能不知是否存在
     * 
     * 若没有nopointer配置（false/undefined）,则设置“pointerspan”
     * 
     * 通“click”,即当前整个node都可以点击<--这个应该才是真实的功能
     */
    clear?: boolean;
    /** 指定该项没有功能，仅展示，项目内多用于描述上 */
    nopointer?: boolean;
    /** 
     * 点击触发事件
     * 
     * 若有返回值false，则当前点击事件的toggle切换无效
     */
    onclick?(item: any): void | boolean;
    onclick?(link: any, node: HTMLDivElement): void | boolean;

    /** 当前没有onclick方法时，除了默认game.saveConfig保存数据配置key的数据，可以使用该方法进行数据处理啊 */
    onsave?(reslut: any): void;

    /**
     * 输入框
     * 
     * 其输入框的默认值是当前的init属性
     */
    input?: boolean;
    /** 取值true，若没有设置可以进行input输入 */
    fixed?: boolean;
    /** 设置input节点的onblur事件的回调（焦点离开输出框） */
    onblur?(): void;

    /**
     * 用于扩展菜单lib.extensionMenu中(目前未见使用)
     */
    onswitch?(bool: boolean): void;

    /** 核心，更新方法 */
    update?(config: SMap<any>, map: SMap<HTMLDivElement>): any;

    /**
     * 在玩法模式选择中： 
     *  是否需要“重启”游戏，若为true，则“启”按钮会高亮（添加“glowing”）
     * 在选项中：
     *  每次改变该选项，都会重置当前的ui选项（增加，减少一些功能项） 
     */
    restart?: boolean | NoneParmFum<boolean>;
    /** 应该与unfrequent功能时一致的，相反判断，直接显示出来的功能项 */
    frequent?: boolean,
    /** 加入更多中（随着下拉出现），用得较多 */
    unfrequent?: boolean;
    /** 不明，用得很少 */
    content?(bool: boolean): void;

    /** 内部属性，记录当前配置的key */
    _name?: string;
}

/** 
 * 扩展的包信息
 * 游戏自带编辑器的代码编辑区域的扩展结构：
 * （主要是通过系统内部自带编译器编辑的代码，导入逻辑其实基本一致）
 */
declare interface PackageData {
    /** 扩展制作作者名 */
    author?: string,
    /** 扩展描述 */
    intro?: string,
    /** 讨论地址 */
    diskURL?: string,
    /** 网盘地址 */
    forumURL?: string,
    /** 扩展版本 */
    version?: string,

    /** 武将导入信息 */
    character?: {
        character: SMap<Character>;
        translate: SMap<string>;
    };
    /** 卡牌导入信息 */
    card?: {
        card: SMap<Card>;
        translate: SMap<string>;
        list: CardBaseUIData[];
    };
    /** 技能导入信息 */
    skill?: {
        skill: SMap<Skill>;
        translate: SMap<string>;
    };

    /** 相关文件名（扩展所使用的一些图片） */
    files?: {
        character: string[];
        card: string[];
        skill: string[];
    }

    /** 主代码中，pack.code包括以下属性： */
    code?: {
        /** 扩展的config配置信息 */
        config?: SMap<SelectConfigData>;
        /** 扩展主代码 */
        content?: (config: SMap<any>, pack: PackageData) => void;
        /** 扩展帮助信息 */
        help?: SMap<string>;
        /** 扩展启动代码 */
        precontent?: (data?: SMap<any>) => void;
    }
}

