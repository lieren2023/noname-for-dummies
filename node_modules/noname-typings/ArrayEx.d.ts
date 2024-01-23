// noname内扩展的一些array方法：
declare interface Array<T> {
    /**
     * @deprecated 已废弃，请使用includes
     */
    contains(item: T): boolean;
    /**
     * 添加任意元素进数组中
     * @param args 
     * @returns 
     * 1. 当添加成功时，返回此数组 
     * 2. 添加失败(已有此元素)时返回false，若传入多个参数，且添加失败时，后面的元素不再进行添加操作
     */
    add(...args: T[]): this | false;
    /**
     * 添加一个数组的所有元素到该数组中(循环执行this.add)，此时参数arr中若有一个数组元素可能会出现bug
     * @param arr 
     */
    addArray(arr: T[]): this;
    /**
     * 移除一个元素出该数组(该元素不能是数组)
     * @param item 
     * @returns 
     * 1. 当移除成功时，返回此数组 
     * 2. 移除失败(没有此元素)时返回false 
     * 3. 传入参数为一个数组时，返回undefined
     */
    remove(item: T): this | false;

    remove(item: T[]): void;
    /**
     * 将一个数组的所有元素移除出该数组(循环执行this.remove)，此时参数arr中若有一个数组元素可能会出现bug
     * @param arr 
     */
    removeArray(arr: T[]): this;
    /**
     * 随机获得该数组的一个元素
     * @param args 设置需要排除掉的部分元素；
     */
    randomGet(...args: T[]): T;
    /**
     * 随机移除数组的一个/多个元素
     * @param num 若num为数字的情况下，则移除num个元素，否则移除一个
     * @returns 
     * 1. 移除一个元素，只返回被移除的元素 
     * 2. 移除多个元素，返回一个被移除元素组成的数组
     * 3. 数组无元素返回undefined
     */
    randomRemove(num: number): T | T[];
    randomRemove(num: T): T | undefined;
    /**
     * 随机重新排序数组（数组乱序）
     */
    randomSort(): this;
    /**
     * 随机获取数组的元素
     * 
     * 返回的是一个重新整合的数组
     * @param num 获取的数量, 不传参视为0
     */
    randomGets(num?: number): this;
    /**
     * 对所有玩家进行排序
     * 
     * 其排序，使用的是lib.sort.seat方法，按座位排序
     * @param target 目标玩家
     */
    sortBySeat(target?: Player): Player[];
    /**
     * 将一个Array中所有位于处理区的卡牌过滤出来
     * 
     * 例：设一list为[c1,c2,c3,c4]，其中c1和c3是位于处理区的卡牌
     * 那么list.filterInD()得到的结果即为[c1,c3]
     * 
     * 在1.9.97.8.1或更高的版本中: 
     * 可通过直接在括号中填写一个区域 来判断处于特定区域的卡牌 
     * 例：list.filterInD('h') 即判断数组中所有位于手牌区的卡牌
     * @param poiston 指定的区域，默认是 'o'
     */
    filterInD(poiston?: string): Card[];

    //关于处理区：
    /*
    不知道处理区是什么的同学们 请自行查阅凌天翼规则集相关内容太长了我懒得贴
    处理区在无名杀的代码为ui.ordering
    为方便兼容旧扩展 使用get.position(card)方法读取处理区的卡牌 默认得到的仍然是弃牌堆（'d'）
    使用get.position(card,true) 才会得到处理区（'o'）的结果

    处理区：（不清楚无名杀对其的实验是否满足这些要求）
    一个最常被用到，但是尚未命名的区域。
    当你使用一张牌等待结算或处于结算中，
    当你和另一名角色拼点的两张牌失去时，
    当你和另一名角色交换的牌失去时，
    当你的牌被张辽或张郃搞的失去时……
    总之，当一张牌不在任何角色的手牌、装备区或判定区里，
    也不在牌堆或弃牌堆里，也没有被移出游戏，那么它就是在这个尚未命名的区域里。
    为了便于行文，在本规则与FAQ集中暂且称之为‘处理区’。
    */

    /**
     * 获取 item 在数组中出现的次数
     */
    numOf(item: T): number
}