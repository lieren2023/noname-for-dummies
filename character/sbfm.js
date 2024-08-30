import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "sbfm",
		connect: true,
		connectBanned: [
			
		],
		character: {
			ol_sb_yuanshu: ["male", "qun", 4, ["olsbjinming", "olsbxiaoshi", "olsbyanliang"], ["zhu"]],
			ol_sb_sunjian: ["male", "wu", "4/5", ["olsbhulie", "olsbyipo"]],
			ol_sb_jiangwei: ["male", "shu", 4, ["olsbzhuri", "olsbranji"]],
			ol_sb_guanyu: ["male", "shu", 4, ["olsbweilin", "olsbduoshou"]],
			ol_sb_taishici: ["male", "wu", 4, ["olsbdulie", "olsbdouchan"]],
			ol_sb_yuanshao: [
				"male",
				"qun",
				4,
				["olsbhetao", "olsbshenli", "olsbyufeng", "olsbshishou"],
				["zhu"],
			],
			ol_sb_pangtong: ["male", "shu", 3, ["olsbhongtu", "olsbqiwu"], ["die_audio:ol_sb_pangtong:ol_sb_pangtong2:ol_sb_pangtong3"]],
			ol_sb_kongrong: ["male", "qun", 4, ["olsbliwen", "olsbzhengyi"]],
		},
		characterFilter: {
			
		},
		characterSort: {
			sbfm: {
				sbfm_sb_mouding: ["ol_sb_jiangwei", "ol_sb_pangtong"],
				sbfm_sb_wudong: ["ol_sb_guanyu"],
				sbfm_sb_fenwu: ["ol_sb_taishici", "ol_sb_yuanshao", "ol_sb_sunjian"],
				sbfm_sb_shiren: ["ol_sb_kongrong"],
				sbfm_sb_jichu: ["ol_sb_yuanshu"],
				
				// sbfm_waitingforsort: [],
			},
		},
		characterIntro: {
			
		},
		characterTitle: {
			
		},
		card: {
			
		},
		perfectPair: {
			
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			
		},
		dynamicTranslate: {
			
		},
		characterReplace: {
			
		},
		translate: {
			

			sbfm_sb_mouding: "上兵伐谋·谋定天下",
			sbfm_sb_wudong: "上兵伐谋·武动乾坤",
			sbfm_sb_fenwu: "上兵伐谋·奋武扬威",
			sbfm_sb_shiren: "上兵伐谋·施仁布泽",
			sbfm_sb_jichu: "上兵伐谋·计出万全",
			
			sbfm_waitingforsort: "等待分包",
		},
		pinyins: {
			
		},
	};
});
