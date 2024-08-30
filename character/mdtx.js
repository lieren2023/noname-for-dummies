import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "mdtx",
		connect: true,
		connectBanned: [
			
		],
		character: {
			dc_sb_jushou: ["male", "qun", 3, ["dcsbzuojun", "dcsbmuwang"]],
			dc_sb_chengyu: ["male", "wei", 3, ["dcshizha", "dcgaojian"]],
			yj_sb_guojia: ["male", "wei", 3, ["xianmou", "lunshi"]],
			dc_sb_zhangxiu: ["male", "qun", 4, ["dcsbfuxi", "dcsbhaoyi"]],
			dc_sb_guanping: ["male", "shu", 4, ["dcsbwuwei"]],
			dc_sb_caoang: ["male", "wei", 4, ["dcsbfengmin", "dcsbzhiwang"]],
			dc_sb_dianwei: ["male", "wei", "4/5", ["dcsbkuangzhan", "dcsbkangyong"]],
			dc_caoshuang: ["male", "wei", 4, ["dcjianzhuan", "dcfanshi"]],
			dc_simashi: ["male", "wei", 3, ["dcsanshi", "dczhenrao", "dcchenlve"]],
			dc_wangling: ["male", "wei", 4, ["dcjichou", "dcmouli"], ["clan:太原王氏"]],
			dc_jiangji: ["male", "wei", 3, ["dcshiju", "dcyingshi"]],
			dc_sb_zhugejin: ["male", "wu", 3, ["dcsbtaozhou", "dcsbhoude"]],
			dc_sb_jiaxu: ["male", "qun", 3, ["dcsbsushen", "dcsbfumou"]],
			dc_sb_simayi: ["male", "wei", 3, ["dcsbquanmou", "dcsbpingliao"]],
			dc_sb_zhouyu: ["male", "wu", 4, ["dcsbronghuo", "dcsbyingmou"]],
			dc_sb_lusu: ["male", "wu", 3, ["dcsbmingshi", "dcsbmengmou"]],
		},
		characterFilter: {
			
		},
		characterSort: {
			mdtx: {
				mdtx_mouding: ["dc_sb_jiaxu", "dc_sb_lusu", "dc_sb_zhouyu", "dc_sb_simayi", "yj_sb_guojia"],
				mdtx_zhonghu: ["dc_jiangji", "dc_wangling", "dc_simashi", "dc_caoshuang"],
				mdtx_zijing: ["dc_sb_zhugejin", "dc_sb_guanping"],
				mdtx_dushi: ["dc_sb_caoang", "dc_sb_zhangxiu", "dc_sb_dianwei"],
				mdtx_zhoulang: ["dc_sb_chengyu"],
				mdtx_qizuo: ["dc_sb_jushou"],
				
				// mdtx_waitforsort: [],
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
			

			mdtx_mouding: "谋定天下·谋定天下",
			mdtx_zhonghu: "谋定天下·冢虎狼顾",
			mdtx_zijing: "谋定天下·子敬邀刀",
			mdtx_dushi: "谋定天下·毒士鸩计",
			mdtx_zhoulang: "谋定天下·周郎将计",
			mdtx_qizuo: "谋定天下·奇佐论胜",
			
			mdtx_waitforsort: "等待分包",
		},
		pinyins: {
			
		},
	};
});
