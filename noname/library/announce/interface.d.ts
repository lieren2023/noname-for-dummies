export interface NonameAnnounceType {
	// Apperaence 外观区域
	// 用于关于无名杀外观方面的通知

	// Apperaence.Theme 无名杀主题区域
	/**
	 * 主题正在被切换时通知
	 *
	 * @param values - 主题名称
	 */
	"Noname.Apperaence.Theme.onChanging": AnnounceFunction<string>;

	/**
	 * 主题被切换时通知
	 *
	 * @param values - 主题名称
	 */
	"Noname.Apperaence.Theme.onChanged": AnnounceFunction<string>;

	/**
	 * 主题被切换时，已经显示完毕后通知
	 *
	 * @param values - 主题名称
	 */
	"Noname.Apperaence.Theme.onChangeFinished": AnnounceFunction<string>;

	// Game 游戏区域
	// 包含游戏对局下的通知

	// Game.Event 事件区域
	/**
	 * 当游戏对局开始时进行通知
	 *
	 * @param values - 空对象
	 */
	"Noname.Game.Event.GameStart": AnnounceFunction<{}>;

	// Init 初始化区域
	// 用于关于初始化方面的通知

	// Init.Extension 扩展初始化区域
	/**
	 * 当扩展初始化完成时通知
	 *
	 * @param values - 扩展名称
	 */
	"Noname.Init.Extension.onLoad": AnnounceFunction<string>;
}

export type AnnounceFunction<T> = (values: T) => void;
