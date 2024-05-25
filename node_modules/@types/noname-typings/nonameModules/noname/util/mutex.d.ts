/**
 * 一个非常普通的“锁”
 */
export class Mutex {
    /**
     * 上锁
     *
     * 请时刻记住使用`await Mutex#lock()`来使锁正常工作
     */
    lock(): Promise<void>;
    /**
     * 解锁
     *
     * 请不要在未上锁的情况下解锁
     */
    unlock(): void;
    /**
     * 启用锁的try-finally封装，用于在函数执行完后自动解放锁的控制权（就算发生错误）
     *
     * @param {function(): void | Promise<void>} content
     */
    scoped(content: () => void | Promise<void>): Promise<void>;
    #private;
}
