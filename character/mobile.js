import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "mobile",
		connect: true,
		connectBanned: [
			// "miheng"
		],
		character: {
			mb_sp_zhenji: ["female", "qun", 3, ["mbbojian", "mbjiwei"]],
			mb_zhangfen: ["male", "wu", 4, ["mbquchong", "mbxunjie"]],
			mb_jiachong: ["male", "qun", 3, ["mbbeini", "mbdingfa"], ["die_audio:jiachong", "border:jin"]],
			mb_simazhou: ["male", "wei", 4, ["mbbifeng", "mbsuwang"], ["border:jin"]],
			mb_wenqin: ["male", "wei", 4, ["mbbeiming", "mbchoumang"]],
			mb_simafu: ["male", "wei", 3, ["mbpanxiang", "mbchenjie"], ["border:jin"]],
			mb_sp_guanqiujian: ["male", "wei", 4, ["mbcuizhen", "mbkuili"]],
			mb_caomao: ["male", "wei", 3, ["mbqianlong", "mbweitong"], ["zhu"]],
			chengji: ["male", "wei", 4, ["mbkuangli", "mbxiongsi"], ["border:jin"]],
			lizhaojiaobo: ["male", "wei", 4, ["mbzuoyou", "mbshishou"]],
			yangfeng: ["male", "qun", 4, ["mbxuetu", "mbweiming"]],
			xin_huojun: ["male", "shu", 4, ["sidai", "jieyu"], ["character:tw_huojun", "die_audio:tw_huojun"]],
			muludawang: ["male", "qun", "3/3/1", ["shoufa", "zhoulin", "yuxiang"]],
			mb_chengui: ["male", "qun", 3, ["guimou", "zhouxian"]],
			mb_huban: ["male", "wei", 4, ["mbyilie"]],
			mb_xianglang: ["male", "shu", 3, ["naxue", "yijie"]],
			yanxiang: ["male", "qun", 3, ["kujian", "ruilian"], ["die_audio:tw_yanxiang"]],
			mb_sunluyu: ["female", "wu", 3, ["mbmeibu", "mbmumu"]],
			xin_wuban: ["male", "shu", 4, ["xinjintao"], ["clan:陈留吴氏", "character:wuban"]],
			baoxin: ["male", "qun", 4, ["mutao", "yimou"], ["die_audio:tw_baoxin"]],
			jiangji: ["male", "wei", 3, ["twjichou", "jilun"], ["character:tw_jiangji", "die_audio:tw_jiangji"]],
			liwei: ["male", "shu", 4, ["jiaohua"], ["die_audio:tw_liwei"]],
			laimin: ["male", "shu", 3, ["laishou", "luanqun"]],
			yj_zhoubuyi: ["male", "wei", 3, ["mbhuiyao", "mbquesong"]],
			xin_guozhao: ["female", "wei", 3, ["yichong", "wufei"]],
			xin_zhangyi: ["male", "shu", 4, ["xinwurong", "shizhi"]],
			xin_sunliang: ["male", "wu", 3, ["xinzhizheng", "xinkuizhu", "xinlijun"], ["zhu"]],
			re_xiaoqiao: ["female", "wu", 3, ["retianxiang", "xinhongyan"]],
			shichangshi: ["male", "qun", 1, ["mbdanggu", "mbmowang"], ["sex:male_castrated"]],
			re_zhangzhang: ["male", "wu", 3, ["rezhijian", "guzheng"]],
			qianzhao: ["male", "wei", 4, ["mbshihe", "mbzhenfu"]],
			re_yanwen: ["male", "qun", 4, ["reshuangxiong"]],
			xin_zhoutai: ["male", "wu", 4, ["buqu", "new_fenji"]],
			re_caozhi: ["male", "wei", 3, ["reluoying", "rejiushi", "chengzhang"]],
			yj_weiyan: ["male", "qun", "4/4/1", ["mbguli", "mbaosi"]],
			re_chenqun: ["male", "wei", 3, ["redingpin", "refaen"]],
			xin_caoxiu: ["male", "wei", 4, ["qianju", "xinqingxi"]],
			xin_zhuhuan: ["male", "wu", 4, ["fenli", "xinpingkou"]],
			sp_pengyang: ["male", "shu", 3, ["spdaming", "spxiaoni"]],
			wangjun: ["male", "qun", 4, ["zhujian", "duansuo"], ["border:jin"]],
			xin_zhuzhi: ["male", "wu", 4, ["sbanguo"]],
			xin_wuyi: ["male", "shu", 4, ["sbbenxi"]],
			yangfu: ["male", "wei", 3, ["jiebing", "hannan"]],
			sp_caosong: ["male", "wei", 3, ["yijin", "guanzong"]],
			re_liru: ["male", "qun", 3, ["rejuece", "remieji", "xinfencheng"]],
			re_dianwei: ["male", "wei", 4, ["reqiangxi"]],
			xin_mamidi: ["male", "qun", 3, ["chengye", "buxu"]],
			ruanhui: ["female", "wei", 3, ["mingcha", "jingzhong"]],
			xin_quancong: ["male", "wu", 4, ["sbyaoming"]],
			re_xunyu: ["male", "wei", 3, ["quhu", "rejieming"], ["clan:颍川荀氏"]],
			xin_jushou: ["male", "qun", "2/3/3", ["xinjianying", "shibei"]],
			re_bulianshi: ["female", "wu", 3, ["reanxu", "zhuiyi"]],
			re_caiwenji: ["female", "qun", 3, ["rebeige", "duanchang"]],
			sp_jianggan: ["male", "wei", 3, ["mbdaoshu", "spdaizui"]],
			peixiu: ["male", "qun", 3, ["xingtu", "juezhi"], ["border:jin"]],
			re_gaoshun: ["male", "qun", 4, ["rexianzhen", "rejinjiu"]],
			re_wuguotai: ["female", "wu", 3, ["reganlu", "buyi"]],
			xin_sunxiu: ["male", "wu", 3, ["mobileyanzhu", "mobilexingxue", "zhaofu"], ["zhu"]],
			sp_maojie: ["male", "wei", 3, ["bingqing", "yingfeng"]],
			yj_huangzhong: ["male", "qun", 4, ["spshidi", "spyishi", "spqishe"]],
			re_yufan: ["male", "wu", 3, ["zhiyan", "rezongxuan"]],
			sunhanhua: ["female", "wu", 3, ["chongxu", "miaojian", "shhlianhua"]],
			yanpu: ["male", "qun", 3, ["huantu", "bihuo"]],
			mayuanyi: ["male", "qun", 4, ["jibing", "wangjing", "moucuan"]],
			fuqian: ["male", "shu", 4, ["jueyong", "poxiang"]],
			// xin_caozhen: ["male", "wei", 4, ["discretesidi"]],
			xin_caozhen: ["male", "wei", 4, ["mbsidi"]],
			xin_sunluban: ["female", "wu", 3, ["xinzenhui", "xinjiaojin"]],
			qiaozhou: ["male", "shu", 3, ["zhiming", "xingbu"]],
			xin_guyong: ["male", "wu", 3, ["xinshenxing", "xinbingyi"]],
			re_zhonghui: ["male", "wei", 4, ["requanji", "zili"], ["clan:颍川钟氏"]],
			xin_caifuren: ["female", "qun", 3, ["xinqieting", "xianzhou"]],
			xin_zhoucang: ["male", "shu", 4, ["mobilezhongyong"]],
			ol_yujin: ["male", "wei", 4, ["rejieyue"], ["die_audio:yujin_yujin"]],
			zhouqun: ["male", "shu", 3, ["tiansuan"]],
			re_zhurong: ["female", "shu", 4, ["juxiang", "relieren"]],
			re_jiangwei: ["male", "shu", 4, ["retiaoxin", "zhiji"]],
			nanhualaoxian: ["male", "qun", 3, ["yufeng", "tianshu"]],
			re_handang: ["male", "wu", 4, ["regongji", "jiefan"]],
			re_dengai: ["male", "wei", 4, ["retuntian", "zaoxian"]],
			xin_fuhuanghou: ["female", "qun", 3, ["xinzhuikong", "xinqiuyuan"]],
			xin_panzhangmazhong: ["male", "wu", 4, ["xinduodao", "xinanjian"]],
			xin_guohuai: ["male", "wei", 4, ["mobilejingce"]],
			gongsunkang: ["male", "qun", 4, ["juliao", "taomie"]],
			xin_zhangfei: ["male", "shu", 4, ["new_repaoxiao", "liyong"]],
			xin_hansui: ["male", "qun", "4/4/1", ["xinniluan", "xiaoxi_hansui"]],
			hucheer: ["male", "qun", 4, ["daoji"]],
			re_lingtong: ["male", "wu", 4, ["rexuanfeng"]],
			re_liubiao: ["male", "qun", 3, ["zishou", "rezongshi"]],
			simashi: ["male", "wei", 4, ["baiyi", "jinglve", "shanli"], ["border:jin"]],
			yanghuiyu: ["female", "wei", 3, ["hongyi", "requanfeng"], ["border:jin"]],
			xin_zhuran: ["male", "wu", 4, ["mobiledanshou"]],
			xin_gongsunzan: ["male", "qun", 4, ["xinyicong", "qiaomeng"], ["die_audio:gongsunzan"]],
			dingyuan: ["male", "qun", 4, ["beizhu"]],
			xin_jianyong: ["male", "shu", 3, ["xinqiaoshui", "xinjyzongshi"]],
			xin_caozhang: ["male", "wei", 4, ["rejiangchi"]],
			xin_liaohua: ["male", "shu", 4, ["redangxian", "refuli"]],
			furong: ["male", "shu", 4, ["xuewei", "liechi"]],
			re_dongzhuo: ["male", "qun", 8, ["rejiuchi", "roulin", "benghuai", "baonue"], ["zhu"]],
			re_xusheng: ["male", "wu", 4, ["repojun"]],
			sp_sufei: ["male", "qun", 4, ["zhengjian", "gaoyuan"]],
			yj_zhangliao: ["male", "qun", 4, ["weifeng"]],
			yj_zhanghe: ["male", "qun", 4, ["xinzhilve"]],
			yj_xuhuang: ["male", "qun", 4, ["xinxhzhiyan"]],
			yj_ganning: ["male", "qun", 4, ["gnjinfan", "gnsheque"]],
			re_sunjian: ["male", "wu", 4, ["gzyinghun", "repolu"]],
			zhengxuan: ["male", "qun", 3, ["zhengjing"]],
			dengzhi: ["male", "shu", 3, ["jimeng", "shuaiyan"]],
			xin_chengpu: ["male", "wu", 4, ["relihuo", "chunlao"]],
			yangyi: ["male", "shu", 3, ["duoduan", "gongsun"]],
			dongcheng: ["male", "qun", 4, ["chengzhao"]],
			re_pangtong: ["male", "shu", 3, ["xinlianhuan", "niepan"]],
			re_guanqiujian: ["male", "wei", 4, ["rezhengrong", "rehongju"]],
			chendeng: ["male", "qun", 3, ["zhouxuan", "fengji"]],
			re_heqi: ["male", "wu", 4, ["reqizhou", "reshanxi"]],
			yangbiao: ["male", "qun", 3, ["zhaohan", "rangjie", "yizheng"]],
			re_sp_zhugeliang: ["male", "shu", 3, ["bazhen", "rehuoji", "rekanpo"]],
			xin_xiahoudun: ["male", "wei", 4, ["reganglie", "xinqingjian"]],
			zhangyì: ["male", "shu", 4, ["rezhiyi"]],
			jiakui: ["male", "wei", 4, ["tongqu", "xinwanlan"]],
			re_jikang: ["male", "wei", 3, ["new_qingxian", "new_juexiang"]],
			miheng: ["male", "qun", 3, ["kuangcai", "shejian"]],
			taoqian: ["male", "qun", 3, ["zhaohuo", "yixiang", "yirang"]],
			liuzan: ["male", "wu", 4, ["fenyin"]],
			lingcao: ["male", "wu", 4, ["dujin"]],
			sunru: ["female", "wu", 3, ["yingjian", "shixin"]],
			lifeng: ["male", "shu", 3, ["tunchu", "shuliang"]],
			zhuling: ["male", "wei", 4, ["xinzhanyi"]],
			liuye: ["male", "wei", 3, ["polu", "choulve"]],
			zhaotongzhaoguang: ["male", "shu", 4, ["yizan_use", "xinfu_longyuan"]],
			majun: ["male", "wei", 3, ["xinfu_jingxie1", "qiaosi"]],
			simazhao: ["male", "wei", 3, ["xinfu_daigong", "xinfu_zhaoxin"], ["border:jin"]],
			wangyuanji: ["female", "wei", 3, ["xinfu_qianchong", "xinfu_shangjian"], ["border:jin"]],
			pangdegong: ["male", "qun", 3, ["xinfu_pingcai", "xinfu_pdgyingshi"]],
			old_yuanshu: ["male", "qun", 4, ["xinyongsi", "yjixi"]],
			zhangbu: ["male", "wu", 4, ["mbchengxiong", "mbwangzhuang"]],
			mb_wangjing: ["male", "wei", 3, ["mbzujin", "mbjiejian"]],

			shenpei: ["male", "qun", "2/3", ["shouye", "liezhi"]],
			re_wangyun: ["male", "qun", 3, ["relianji", "remoucheng"], ["clan:太原王氏"]],

			re_baosanniang: ["female", "shu", 3, ["meiyong", "rexushen", "rezhennan"]],

			hujinding: ["female", "shu", "2/6", ["renshi", "wuyuan", "huaizi"]],

			re_zhanggong: ["male", "wei", 3, ["reqianxin", "rezhenxing"]],
			re_xugong: ["male", "qun", 3, ["rebiaozhao", "yechou"], ["doublegroup:wu:qun"]],
			re_weiwenzhugezhi: ["male", "wu", 4, ["refuhai"]],

			xin_yuanshao: ["male", "qun", 4, ["reluanji", "xueyi"], ["zhu"]],
			re_liushan: ["male", "shu", 3, ["xiangle", "refangquan", "ruoyu"], ["zhu"]],
			re_sunben: ["male", "wu", 4, ["jiang", "rehunzi", "zhiba"], ["zhu"]],

			scs_zhangrang: ["male", "qun", "", ["scstaoluan"], ["unseen", "sex:male_castrated"]],
			scs_zhaozhong: ["male", "qun", "", ["scschiyan"], ["unseen", "sex:male_castrated"]],
			scs_sunzhang: ["male", "qun", "", ["scszimou"], ["unseen", "sex:male_castrated"]],
			scs_bilan: ["male", "qun", "", ["scspicai"], ["unseen", "sex:male_castrated"]],
			scs_xiayun: ["male", "qun", "", ["scsyaozhuo"], ["unseen", "sex:male_castrated"]],
			scs_hankui: ["male", "qun", "", ["scsxiaolu"], ["unseen", "sex:male_castrated"]],
			scs_lisong: ["male", "qun", "", ["scskuiji"], ["unseen", "sex:male_castrated"]],
			scs_duangui: ["male", "qun", "", ["scschihe"], ["unseen", "sex:male_castrated"]],
			scs_guosheng: ["male", "qun", "", ["scsniqu"], ["unseen", "sex:male_castrated"]],
			scs_gaowang: ["male", "qun", "", ["scsmiaoyu"], ["unseen", "sex:male_castrated"]],
			new_yj_dongzhuo: ["male", "qun", "4/5", ["xiongjin", "xiawei", "baoxi"]],
		},
		characterSort: {
			mobile: {
				mobile_longxue: ["mb_simafu", "mb_wenqin", "mb_simazhou", "mb_sp_guanqiujian", "mb_caomao", "chengji", "lizhaojiaobo", "mb_wangjing", "mb_jiachong"],
				mobile_yijiang: ["yj_zhanghe", "yj_zhangliao", "yj_xuhuang", "yj_ganning", "yj_huangzhong", "yj_weiyan", "yj_zhoubuyi", "new_yj_dongzhuo"],
				mobile_xlqk: ["sunru", "liuzan", "pangdegong", "miheng", "majun", "zhengxuan", "simashi", "nanhualaoxian", "shichangshi", "sunhanhua", "mb_zhangfen"],
				mobile_sp: ["xin_huojun", "muludawang", "mb_chengui", "mb_huban", "mb_xianglang", "yanxiang", "xin_wuban", "laimin", "baoxin", "jiangji", "liwei", "xin_guozhao", "taoqian", "lingcao", "lifeng", "zhuling", "liuye", "zhaotongzhaoguang", "simazhao", "wangyuanji", "shenpei", "hujinding", "zhangyì", "jiakui", "yangbiao", "chendeng", "dongcheng", "yangyi", "dengzhi", "sp_sufei", "furong", "dingyuan", "yanghuiyu", "hucheer", "gongsunkang", "zhouqun", "qiaozhou", "fuqian", "mayuanyi", "yanpu", "sp_maojie", "peixiu", "sp_jianggan", "ruanhui", "xin_mamidi", "sp_caosong", "yangfu", "wangjun", "sp_pengyang", "qianzhao", "yangfeng", "zhangbu", "re_wangyun", "re_baosanniang", "re_weiwenzhugezhi", "re_zhanggong", "re_xugong", "re_heqi", "xin_hansui", "mb_sunluyu", "mb_sp_zhenji"],
				mobile_standard: ["xin_xiahoudun", "xin_zhangfei", "old_yuanshu"],
				mobile_shenhua_feng: ["re_xiaoqiao", "xin_zhoutai"],
				mobile_shenhua_huo: ["re_pangtong", "re_sp_zhugeliang", "re_xunyu", "re_dianwei", "re_yanwen", "xin_yuanshao"],
				mobile_shenhua_lin: ["re_dongzhuo", "re_sunjian", "re_zhurong"],
				mobile_shenhua_shan: ["re_liushan", "re_dengai", "re_jiangwei", "re_caiwenji", "re_zhangzhang", "re_sunben"],
				mobile_shenhua_yin: ["xin_sunliang"],
				mobile_shenhua_lei: ["re_guanqiujian"],
				mobile_yijiang1: ["re_xusheng", "re_lingtong", "ol_yujin", "re_wuguotai", "re_gaoshun", "re_caozhi"],
				mobile_yijiang2: ["xin_liaohua", "xin_caozhang", "re_liubiao", "re_handang", "xin_chengpu", "xin_gongsunzan", "re_zhonghui", "re_bulianshi"],
				mobile_yijiang3: ["re_liru", "xin_jianyong", "xin_zhuran", "xin_guohuai", "xin_panzhangmazhong", "xin_fuhuanghou", "re_yufan"],
				mobile_yijiang4: ["xin_zhoucang", "xin_caifuren", "xin_guyong", "xin_sunluban", "xin_caozhen", "xin_jushou", "xin_wuyi", "xin_zhuhuan", "re_chenqun"],
				mobile_yijiang5: ["xin_zhangyi", "xin_sunxiu", "xin_quancong", "xin_zhuzhi", "xin_caoxiu"],
				mobile_yijiang7: ["re_jikang"],
				
				mobile_changshi: ["scs_zhangrang", "scs_zhaozhong", "scs_sunzhang", "scs_bilan", "scs_xiayun", "scs_hankui", "scs_lisong", "scs_duangui", "scs_guosheng", "scs_gaowang"],
			},
		},
		characterSubstitute: {
			mb_caomao: [
				["mb_caomao_shadow", ["die_audio:mb_caomao"]],
				["mb_caomao_dead", ["die_audio:mb_caomao"]],
			],
			shichangshi: [["shichangshi_dead", ["die_audio:shichangshi"]]],
		},
		characterIntro: {
			lizhaojiaobo: "李昭（？—约公元260年），三国时期曹魏官吏，官拜冗从仆射，为魏帝曹髦的亲信。<br>焦伯，三国时期人物，魏帝曹髦护卫，官拜黄门从官。<br>曹髦见自己权力威势日渐削弱，感到不胜忿恨，于公元260年（甘露五年）五月初六夜里，令李昭和焦伯等在陵云台布署甲士，出讨司马昭，但最终失败，曹髦为成济所弑，李昭和焦伯等应该也战死。在《三国演义》里，焦伯挺枪出战成济，亦被成济所杀。",
			chengji: "成济（？～260年6月21日），三国时期曹魏官员。官至太子舍人。在魏帝曹髦起兵讨司马昭时，受到司马昭之心腹贾充指使，刺死曹髦。司马昭为平息众怒，将成倅、成济兄弟二人杀死。",
			yangfeng: "杨奉（？－197年/198年），东汉末年将领。杨奉早年参加白波军起义，曾经帮助李傕对抗郭汜，后来背叛李傕。兴平二年，加号兴义将军，护送汉献帝刘协东归雒阳，颇有功勋，加号车骑将军，屯兵于梁县。建安元年，随着汉献帝迁都许县，失去权力，先后依附于袁术、吕布，劫掠徐州和扬州地区。建安二年（一说三年），带兵进犯刘备领地，被刘备诱杀。",
			muludawang: "古典小说《三国演义》中的虚构人物，八纳洞主，孟获盟友。擅驱兽法，能行风雨，控制猛兽并指挥它们作战。在法术帮助下最初对蜀军取得一些胜利，但在诸葛亮的喷火木兽将他的动物吓跑后战败，最后死于乱军之中。",
			laimin: "来敏（165年—261年），字敬达，义阳新野人，东汉太中大夫来歙之后，司空来艳之子，三国时期蜀汉官员。东汉末年，逢董卓之乱，来敏跟随姐夫黄琬到荆州避难，黄琬是刘璋祖母的侄子，来敏又与姐姐来氏入蜀，被刘璋引为宾客。来敏喜欢读书，尤其喜欢《左氏春秋》。刘备平定益州后，以来敏为典学校尉，后立太子，来敏为家令。刘禅继位后，任命来敏为虎贲中郎将，诸葛亮驻汉中，请来敏为军祭酒、辅军将军。却因其口出狂言而被罢官，诸葛亮死后，来敏历任大长秋、光禄大夫、执慎将军等职，期间多次因说错话而被免官，蜀汉景耀年间，来敏去世，时年九十七岁。",
			shichangshi: "十常侍，指中国东汉（公元25年—220年）灵帝时期（168年-189年）操纵政权的十二个宦官：张让、赵忠、夏恽、郭胜、孙璋、毕岚、栗嵩、段珪、高望、张恭、韩悝、宋典（在小说《三国演义》里，十常侍指的是指张让、赵忠、封谞、段珪、曹节、侯览、蹇硕、程旷、夏恽、郭胜十人），他们都任职中常侍。玩弄小皇帝于股掌之中，以至灵帝称“张常侍是我父，赵常侍是我母”。十常侍自己横征暴敛，卖官鬻爵，他们的父兄子弟遍布天下，横行乡里，祸害百姓，无官敢管。人民不堪剥削、压迫，纷纷起来反抗。当时一些比较清醒的官吏，已看出宦官集团的黑暗腐败，导致大规模农民起义的形势。郎中张钧在给皇帝的奏章中明确指出，黄巾起义是外戚宦官专权逼出来的，他说：“张角所以能兴兵作乱，万人所以乐附之者，其源皆由十常侍多放父兄、子弟、婚宗、宾客典据州郡，辜确财利，侵略百姓，百姓之怨无所告诉，故谋议不轨，聚为‘盗贼’。”后被曹操、袁绍所歼。",
			sunzhang: "孙璋（？-189年？）东汉末期汉灵帝的宦官，官居中常侍，为十常侍之一，在张让、赵忠之下位居第三。光熹元年（189年），张让、赵忠、段珪等诛杀何进，袁绍率军入宫，诛杀孙璋。",
			bilan: "毕岚（？—189），东汉宦官，十常侍之一。十常侍朋比为奸，祸乱朝纲，制造出党锢之祸，后被袁绍诛杀。另外，毕岚曾制造翻车，用于取河水洒路。",
			xiayun: "夏恽（？—189），东汉宦官，十常侍之一。后被袁绍、曹操诛于翠花楼前。",
			hankui: "韩悝（？—189），东汉宦官，十常侍之一。后被袁绍所诛。",
			lisong: "栗嵩，东汉宦官，十常侍之一，与张让等人均一同任职中常侍。",
			duangui: "段珪（？—189），东汉宦官，十常侍之一。段珪与张让、赵忠等人朋比为奸，党同伐异，横征暴敛，卖官鬻爵，引起了以何进为首的外戚集团的不满。何进谋诛宦官，却不纳曹操、陈琳之谏，多结外镇军阀，翘首京师，与袁绍等谋诛宦竖。终于事泄，被宦官集团查知。张让、段珪等人先下手为强，斩杀何进于嘉德殿前，却也引起了京师的变乱。袁绍等人趁机带兵冲入皇宫，大肆诛杀太监。洛阳卫军变乱后，段珪与张让等人劫持少帝刘辩、陈留王刘协出逃，后被杀。",
			guosheng: "郭胜，南阳宛（今河南南阳）人。汉灵帝时为中常侍，与张让、赵忠等狼狈为奸，并皆封侯。曾助同乡何进、何太后贵幸。后被袁绍等人率兵诛灭。",
			gaowang: "高望（？~189年），京兆人，东汉宦官，十常侍之一，为小黄门兼任尚药监，颇得皇子刘辩的信任。中平六年（189年），张让等人杀害大将军何进，袁绍与王匡等人率兵杀入雒阳端门，在承明堂上斩杀中常侍高望。",
			qianzhao: "牵招（？—231年），字子经，安平郡观津县（今河北省武邑县）人。三国时期曹魏名将。牵招早年师从乐隐，与刘备成为刎颈之交。投靠冀州牧袁绍，担任冀州从事，统领乌丸突骑。袁绍死后，跟随冀州刺史袁尚，受到并州牧高干加害，投奔丞相曹操，授军谋掾。从平乌丸，出任护乌丸校尉。举茂才出身，从平汉中，授中护军。拜平虏校尉，平定东莱郡叛乱。魏文帝曹丕时期，授护鲜卑校尉，驻扎昌平，迁右中郎将、雁门太守，遏制鲜卑轲比能发展壮大。魏明帝即位，赐爵关内侯，营救护乌丸校尉田豫。太和五年，去世。",
			fuqian: "傅佥（？~263年），义阳（治今湖北省枣阳市）人，蜀汉将领傅彤之子，三国时期蜀汉名将。金长于谋略，并颇有胆勇，姜维甚爱之。傅佥官至关中都督。魏国攻伐蜀汉时，傅佥和蒋舒防守阳安关，兵败战死。",
			wangjun: "王濬（207年～286年），字士治，小名阿童，弘农郡湖县（今河南省灵宝市阌乡）人。西晋时期名将。王濬出身世家，博学多闻，容颜英俊，多谋善战。举秀才出身，起家河东郡从事。泰始八年（272年），担任广汉太守，平定益州叛乱，迁益州刺史。利用长江上游地势之利，修造战船，组建强大的水军。上书晋武帝，促成晋灭吴之战。咸宁六年（280年），率兵顺流而下，熔毁横江铁链，攻克丹阳郡，率先攻取石头城，接受吴末帝孙皓投降，完成西晋统一大业。凭借功勋，拜辅国将军、步兵校尉，册封襄阳侯。为避猜忌，纵情享受，累迁特进、抚军大将军、开府仪同三司、散骑常侍、后军将军等。太康六年十二月（286年1月18日），王濬去世，享年八十岁，谥号为“武”，安葬于柏谷山。",
			yangfu: "杨阜（172年—244年），字义山，汉天水冀县（今甘谷县东南）人。三国时期曹魏名臣。汉献帝建安初年，任凉州从事，旋拜安定长史；韦康任刺史后辟为别驾，改任州参军；后因讨马超有功，赐爵关内侯。曹操征汉中时，杨阜担任益州刺史，回来后又担任武都太守。魏明帝时，由将作大匠改少府。杨阜不但卓识远见，而且刚正不阿，敢于直言，对朝廷弊政多有诤谏，六次进言谏魏明帝应勤政爱民，魏明帝对他颇有敬畏之心。杨阜勤政廉洁，在宫内担任少府时，专管宝器、珍膳、衣物等，而他死后则家无馀财。皇帝让杨阜的孙子杨豹继任了少府之职。原甘谷县文昌宫西侧有杨氏家祠，内悬“两代尚书”匾额。",
			ruanhui: "阮氏女，是指三国时期曹魏名士许允之妻阮氏，陈留尉氏人。阮氏女是中国古代四大丑女之一，貌丑而见识非凡。她出身士族之家，是卫尉阮共（字伯彦）之女、阮侃（字德如）之妹。嫁与许允后生有二子：许奇，官至司隶校尉；许猛，官至幽州刺史。",
			peixiu: "裴秀（224年－271年4月3日），字季彦。河东郡闻喜县（今山西省闻喜县）人。魏晋时期名臣、地图学家，东汉尚书令裴茂之孙、曹魏光禄大夫裴潜之子。出身河东裴氏，少年时便颇有名气，后被大将军曹爽辟为掾属，袭爵清阳亭侯，又迁黄门侍郎。高平陵之变后，因是曹爽的故吏而被罢免。此后历任廷尉正、安东将军及卫将军司马，参与谋划军国之政，参与平定诸葛诞叛乱。因功转任尚书，进封鲁阳乡侯。魏元帝继位后，进爵鲁阳县侯，任尚书仆射。咸熙元年（264年），受命负责修改官制，又提议恢复五等爵制。五等制恢复后，获封济川侯。他建议立司马炎为世子，司马炎继位晋王后，拜裴秀为尚书令、右光禄大夫。西晋建立后，加左光禄大夫，封钜鹿郡公。泰始三年（267年），升任司空。泰始七年（271年），裴秀因服食寒食散后饮冷酒而逝世，年四十八，谥号“元”。有文集三卷。裴秀作《禹贡地域图》，开创了中国古代地图绘制学。李约瑟称他为“中国科学制图学之父”，与古希腊著名地图学家托勒密齐名，是世界古代地图学史上东西辉映的两颗灿烂明星。为纪念这位中国地图科学创始人而设立的“裴秀奖”，每两年评选一次，是中国地图学界最高奖项。由于他的贡献突出，联合国天文组织将月球正面的一个环形山命名为“裴秀环形山”。",
			liucheng: "游卡桌游的原创人物。设定为黄忠的妻子。",
			jiangwan: "蒋琬（？－246年），字公琰。零陵郡湘乡县人。三国时期蜀汉政治家，与诸葛亮、董允、费祎合称“蜀汉四相”。蒋琬最初随刘备入蜀，为广都县长。因其不理政事，惹怒刘备，在诸葛亮的劝说下才免于一死。后重获启用，受到诸葛亮的悉心培养，累官丞相长史兼抚军将军。建兴十二年（234年），诸葛亮去世，蒋琬继其执政，拜尚书令，又加行都护、假节，领益州刺史，再迁大将军，录尚书事，封安阳亭侯。延熙元年（238年），受命开府，加大司马，总揽蜀汉军政。曾制定由水路进攻曹魏的计划，但未被采纳。延熙九年（246年），蒋琬病逝，谥号为恭。",
			sunhanhua: "孙寒华，三国时女仙。梁·陶弘景《真诰》卷一三、五代·杜光庭《墉城集仙录》卷七：其父孙贲为孙权堂兄，寒华少时与杜契有私情，后从杜契受玄白之要，颜容日少。周旋吴越诸山十馀年，得道仙去。《鉴后集》卷四：一云即吴大帝孙权之女。于茅山修道，道成，冲虚而去，因号其山为华姥山。山在茅山崇禧观前。《神异典》卷二五九人于明代，误。",
			yanpu: "阎圃，生卒年不详，是益州巴西安汉（今四川省南充市）人。张鲁割据巴、汉，就以阎圃为功曹。东汉末年人物，本为张鲁部下谋士，后随张鲁一同投降曹操，封平乐乡侯。",
			mayuanyi: "马元义（？—184年6月7日），东汉末年黄巾之乱的组织者之一，是黄巾大方首领。光和六年（183年），马元义奉黄巾军首领张角之命，筹划起事的准备工作。马元义聚集荆州、扬州信徒数万人约定于邺城相会，并收买中常侍封谞、徐奉等为内应，准备于次年（甲子年）三月初五（戊申日）内外同时起事。由于张角弟子济南人唐周的告密，马元义于于中平元年（184年）正月在河内郡山阳县被捕，送往洛阳车裂，同时被杀的还有教众近千人。由于马元义的被杀，迫使张角提前于二月起兵发动叛乱。",
			simafu: "司马孚（180年－272年4月3日），字叔达。河内郡温县（今河南温县）人。三国曹魏至西晋初年重臣，西晋宗室，东汉京兆尹司马防第三子，晋宣帝司马懿之弟。自曹操时代起，司马孚就任文学掾，而后历仕魏国五代皇帝，累迁至太傅。司马孚在“高平陵事变”之际，协助司马懿控制京师，诛杀曹爽一党。后又督军成功防御吴、蜀的进攻，为司马氏政权的稳固多有功劳。但他性格十分谨慎，自司马懿执掌大权起，便逐渐引退，更未直接参与司马氏废立魏帝的谋划。西晋代魏后，司马孚进拜太宰，封安平王。晋武帝司马炎对他十分尊宠，但他并不以此为荣，至死仍以魏臣自称。泰始八年二月壬辰日（272年4月3日），司马孚去世，年九十三。武帝为其举哀三日，葬礼规格比照东汉东平献王刘苍，赐谥献王。",
			sunchen: "孙綝（231年－259年1月18日），字子通，吴郡富春（今浙江杭州市富阳区）人。三国时期吴国宗室、权臣，昭义中郎将孙静曾孙、定武中郎将孙暠之孙、安民都尉孙绰的儿子。门荫入仕，初任偏将军。太平元年（256年），升任侍中、武卫将军、都督中外诸军事。掌权以后，诛杀大司马滕胤、骠骑将军吕据等重臣，升任大将军，册封永宁县侯。嗜好杀戮，与皇帝孙亮的矛盾激化，最终废黜孙亮，拥立琅琊王孙休即位，累迁丞相、荆州牧。永安元年十二月（259年1月），在左将军张布的协助下，遭到皇帝孙休捕杀，时年二十八岁，削除宗籍，改姓故氏。",
			qiaozhou: "谯周（201年－270年），字允南，巴西郡西充国县（今四川西充县槐树镇）人。三国时期蜀汉大臣、学者、儒学家、史学家。幼年丧父，少读典籍，精研六经，颇晓天文，成为蜀地大儒之一，门下有陈寿、罗宪等学生。诸葛亮担任益州牧时，授劝学从事。诸葛亮死后，不顾朝令，前往奔丧。后主刘禅册立太子时，授太子仆，迁太子家令、光禄大夫。反对姜维北伐，著《仇国论》，力陈北伐之失。炎兴元年（263年），邓艾攻打成都时期，力劝刘禅投降，“有全国之功”，投降魏国后，受封阳城亭侯，迁骑都尉。泰始六年（270年），授散骑常侍，同年去世，时年七十岁。",
			gongsunkang: "公孙康（生卒年不详），辽东襄平（今辽宁辽阳）人。东汉末年辽东地区割据军阀，辽东太守公孙度长子（一作庶子）、车骑将军公孙恭之兄。公孙康在其父死后继任辽东太守。建安十二年（207年），擒斩图谋不轨的袁尚、袁熙兄弟，将其首级献予曹操，被拜为左将军，封襄平侯。建安十四年（209年），公孙康大破高句丽，陷其国都，并讨伐韩濊，设置带方郡。死后因二子年幼，由公孙恭继任。曹丕称帝后，被追赠为大司马。",
			zhouqun: "周群（生卒年不详），字仲直，巴西阆中（今四川阆中）人。周群年少时随父周舒学习占验天算之术。后来刘璋聘请周群为师友从事，其预言大多得以应验。刘备割据益州，任命周群为儒林校尉。曾劝说刘备攻汉中必定不利，事后得到应验，被举荐为茂才。",
			dongzhao: "董昭（156年－236年7月4日），字公仁，济阴定陶（今山东省菏泽市定陶区）人。东汉末年曹魏谋士、重臣、开国元勋。董昭年轻时被举为孝廉，后担任袁绍帐下参军。多有战功，但是袁绍听信谗言，董昭不得已离开袁绍投奔张杨。张杨率军迎接汉献帝时，董昭随行，并拜为议郎。后与曹操在洛阳相见，又建议曹操将汉献帝迎接到许昌。董昭自此成为曹操的谋士。建安年间（198年）历任河南尹、冀州牧、徐州牧、魏郡太守等职，多有功劳，深受曹操器重。曹操受封魏公、魏王的谋划都是出自董昭之手。曹丕继魏王位后，董昭任将作大匠。曹丕称帝后，升任大鸿胪。此后先后担任侍中、太常、光禄大夫、太仆等重要职位。魏明帝曹叡即位后转任卫尉。太和六年（232年）升任司徒。青龙四年（236年）卒，时年八十一，谥曰定。",
			nanhualaoxian: "南华老仙，是古典小说《三国演义》中的虚拟人物。其原型来自道教典籍中对庄子的封号，又称“南华仙人”、“南华真人”等。在古典小说《三国演义》通行本的第一回中，描述了南华老仙将《太平要术》赠送给张角的情节。",
			chenzhen: "陈震（？—公元235年），字孝起。荆州南阳郡（今河南南阳）人。三国时期蜀汉官员。刘备领荆州牧时，辟陈震为从事。后随刘备入蜀，为蜀郡北部都尉、汶山太守、犍为太守。建兴三年（225年），拜尚书，迁尚书令。建兴七年（229年），孙权称帝。蜀汉以陈震为卫尉，前往祝贺，与孙权开坛歃盟，交分天下。还蜀，封城阳亭侯。建兴十三年（235年），卒。",
			hucheer: "胡车儿（生卒年不详），东汉末年武将，初从张绣，为其心腹猛将，勇冠三军，与贾诩交情甚佳。宛城大战后，张绣投降曹操，曹操爱胡车儿之骁勇，手以黄金与之。后因曹操私纳张绣亡叔张济的遗孀邹氏，张绣深感其辱，欲杀曹操，与贾诩商议后决心反曹。《三国演义》中，作者考虑到典韦的勇猛，便增加了令胡车儿盗走典韦的双戟的情节。最终典韦、曹昂（曹操长子）、曹安民（曹操侄子）皆死于此次战斗。野史说胡车儿跟随曹操征战，被赵云在长坂坡上红枪挑死。",
			simashi: "司马师（208年～255年3月23日），字子元，河内温县（今河南省温县）人。三国时期曹魏权臣，西晋王朝的奠基人之一，晋宣帝司马懿与宣穆皇后张春华的长子，晋文帝司马昭的同母兄，晋武帝司马炎的伯父。司马师沉着坚强，雄才大略，早年与夏侯玄、何晏齐名。高平陵政变后，以功封长平乡侯，旋加卫将军。司马懿死后，以抚军大将军辅政，独揽朝廷大权，次年升为大将军。掌权后，他制定选拔官吏的法规，命百官推荐贤才，整顿纲纪，使其各有职掌，朝野肃然。司马师也有卓越的军事才能，曾用计于新城之战击溃吴国诸葛恪的大军。嘉平六年（254年），魏帝曹芳与中书令李丰等人密谋除司马师，事情泄露，司马师杀死参与者，迫郭太后废曹芳，改立高贵乡公曹髦为帝。次年，亲自率兵平定毌丘俭、文钦之乱。回师途中病死，时年四十八岁，谥号“忠武”。后被追尊为晋景王。西晋建立后，被追尊为景皇帝，庙号世宗。",
			yanghuiyu: "羊徽瑜（214年－278年），泰山南城（今山东新泰）人，晋景帝司马师第三任妻子。羊徽瑜出身官宦世家泰山羊氏，她是南阳太守羊续的孙女，上党太守羊衜之女；其母为东汉名士左中郎将蔡邕之女、蔡文姬的姐妹。羊徽瑜聪慧贤德，嫁给司马师后未有子女。以司马师之弟司马昭的次子司马攸为继子。司马师死后，司马攸侍奉羊徽瑜非常孝顺。泰始元年（265年），司马昭长子司马炎受禅登基，建立西晋，追谥伯父司马师为景皇帝。泰始二年（266年），尊奉羊徽瑜为景皇后，因居弘训宫，故称弘训太后。咸宁四年（278年），羊徽瑜去世，时年六十五岁，谥号景献皇后，与司马师合葬峻平陵。",
			dingyuan: "丁原（？—189年），字建阳，兖州泰山郡南城县（山东省平邑县郑城镇）人。东汉末年军阀，官拜执金吾、并州刺史。任并州刺史期间，他亲近、善待主簿吕布，又调遣部下张杨、张辽等名将到洛阳任职。汉灵帝驾崩后，带兵进入洛阳，担任执金吾，并与大将军何进谋划诛杀十常侍，但不久事情败露，何进被宦官杀死。在宦官被诛灭之后，丁原与军阀董卓在废帝问题上意见不合产生矛盾，于是董卓诱使吕布将其杀害，其势力亦被吞并。",
			furong: "傅肜（？－222年），义阳（今湖北枣阳）人，三国时蜀汉将领。刘备攻伐吴国时，傅肜为别督。后刘备被陆逊击败，傅肜率部断后，奋战至死。死前怒斥道：“吴狗！何有汉将军降者！”",
			zhengxuan: "郑玄（127年－200年），字康成。北海郡高密县（今山东省高密市）人。东汉末年儒家学者、经学大师。郑玄曾入太学攻《京氏易》、《公羊春秋》及《三统历》、《九章算术》，又从张恭祖学《古文尚书》、《周礼》和《左传》等，最后从马融学古文经。游学归里之后，复客耕东莱，聚徒授课，弟子达数千人，家贫好学，终为大儒。党锢之祸起，遭禁锢，杜门注疏，潜心著述。晚年守节不仕，却遭逼迫从军，最终病逝于元城，年七十四。郑玄治学以古文经学为主，兼采今文经学。他遍注儒家经典，以毕生精力整理古代文化遗产，使经学进入了一个“小统一时代”。著有《天文七政论》、《中侯》等书，共百万余言，世称“郑学”，为汉代经学的集大成者。唐贞观年间，列郑玄于二十二“先师”之列，配享孔庙。宋代时被追封为高密伯。后人建有郑公祠以纪念。",
			dengzhi: "邓芝（178年－251年），字伯苗。义阳郡新野县（今河南新野）人。东汉名将邓禹之后，三国时期蜀汉重臣。邓芝早年曾被预言能位至大将，后被刘备任为郫令，升迁为广汉太守。因任官公廉且有治绩，被征入朝为尚书。刘备逝世后，奉命出使吴国，成功修复两国关系，并深为吴大帝孙权所赏识。建兴六年（228年），丞相诸葛亮策划北伐，命邓芝与大将赵云佯攻郿城，以吸引魏国曹真军主力。建兴十二年（234年），迁前军师、前将军，领兖州刺史，封阳武亭侯，不久督领江州。延熙六年（243年），迁车骑将军，后授假节。又率军平定涪陵叛乱。延熙十四年（251年），邓芝病逝。邓芝性格正直、简单，不刻意修饰情绪。他为将二十多年，赏罚明断，体恤士卒。身上的衣食取自官府，从未经营过私产，妻儿甚至还有忍饥挨饿之时，死时家中也没有多余财物。",
			yangyi: "杨仪（？－235年），字威公，襄阳（今湖北襄阳）人，三国时期蜀汉官员。最初为荆州刺史傅群的主簿，后投奔关羽，任为功曹。关羽遣其至成都，大受刘备赞赏，擢为尚书。因与尚书令刘巴不和，调为弘农太守。建兴三年（225年）任丞相参军，此后一直跟随诸葛亮战斗。亮卒，他部署安全退军。诸葛亮在生前定蒋琬继己任，杨仪仅拜中军师。建兴十三年（235年），因多出怨言，被削职流放至汉嘉郡。但杨仪仍不自省，又上书诽谤，言辞激烈，最后下狱，自杀身亡。",
			dongcheng: "董承（？~200年），字号不详，冀州河间人（今河北献县）人。东汉末年外戚大臣，汉灵帝母亲董太后侄子，汉献帝嫔妃董贵人之父。初从西凉军，为董卓女婿牛辅部曲。护卫汉献帝刘协从长安东归洛阳，拜为卫将军，受封列侯。建安四年（199年），拜车骑将军。自称领受汉献帝衣带诏，联合刘备、种辑、吴子兰、王子服、吴硕等人密谋诛杀曹操。五年正月，图谋泄露，董承诸人及董贵人全部遇害。",
			chendeng: "陈登（163—201），字元龙，下邳淮浦（今江苏涟水西）人。东汉末年将领、官员。沛相陈珪之子。为人爽朗，性格沈静，智谋过人，少年时有扶世济民之志，并且博览群书，学识渊博。二十五岁时，举孝廉，任东阳县长。虽然年轻，但他能够体察民情，抚弱育孤，深得百姓敬重。后来，徐州牧陶谦提拔他为典农校尉，主管一州农业生产。他亲自考察徐州的土壤状况，开发水利，发展农田灌溉，使汉末迭遭破坏的徐州农业得到一定程度的恢复，百姓们安居乐业，“秔稻丰积”。建安初奉使赴许，向曹操献灭吕布之策，被授广陵太守。以灭吕布有功，加伏波将军。又迁东城太守。年三十九卒。其子陈肃，魏文帝时追陈登之功，为郎中。",
			yangbiao: "杨彪（142年－225年），字文先。弘农郡华阴县（今陕西华阴）人。东汉末年名臣，太尉杨赐之子、名士杨修之父。杨彪少年时受家学熏陶，初举孝廉、茂才。其后征拜为议郎，参与续写《东观汉记》。任京兆尹时，揭发黄门令王甫的贪赃行为，使其被定罪诛杀。累任侍中、五官中郎将、卫尉等职。汉献帝时，遍历三公（司空、司徒、太尉）之职。权臣董卓意图迁都时，他据理力争。献帝东迁时，杨彪尽节护主。曹操挟献帝定都许县后，将杨彪下狱，获释后又任太常。他见汉室衰微，便诈称脚疾，不理世事。曹魏建立后，拒绝出任太尉，改光禄大夫，待以客礼。黄初六年（225年），杨彪去世，年八十四。其著作现仅存《答曹公书》一篇。",
			zhangyì: "张翼（？－264年），字伯恭，益州犍为郡武阳县人。三国时期蜀汉将领。历任梓潼、广汉、蜀郡三郡太守，出任庲降都督，后随诸葛亮和姜维北伐，官至左车骑将军，领冀州刺史。初封关内侯，进爵都亭侯。蜀汉灭亡后，魏将钟会密谋造反，成都大乱，张翼亦为乱兵所杀。张翼是蜀汉第三任庲降都督，由于执法严厉，不得南夷欢心。在北伐上，张翼认为国小民疲，不应滥用武力，是蜀汉朝廷当时极少敢当朝和姜维争辩北伐问题的大臣。",
			jiakui: "贾逵（174年—228年），本名贾衢，字梁道，河东襄陵人（今山西临汾县）。汉末三国时期魏国名臣，西晋开国功臣贾充父亲。初为并州郡吏，迁渑池县令，拜弘农太守，历仕曹操、曹丕、曹叡三世，是曹魏政权中具有军政才干的人物，终其一生为魏国统一事业作出卓越贡献。担任豫州刺史期间，兴修水利，凿通运河二百余里，时称“贾侯渠”，便利民生。随同曹丕伐吴，进封阳里亭侯，加号建威将军。石亭之战，率军救出曹休。太和二年，去世，赠本官，谥号为肃，《唐会要》将其尊为魏晋八君子之一。",
			shenpei: "审配（？－204年），字正南，魏郡阴安（今河北清丰北）人。为人正直， 袁绍领冀州，审配被委以腹心之任，并总幕府。河北平定，袁绍以审配、逢纪统军事，审配恃其强盛，力主与曹操决战。曾率领弓弩手大破曹军于官渡。官渡战败，审配二子被俘，反因此受谮见疑，幸得逢纪力保。袁绍病死，审配等矫诏立袁尚为嗣，导致兄弟相争，被曹操各个击破。曹操围邺，审配死守数月，终城破被擒，拒不投降，慷慨受死。",
			hujinding: "胡金定，女，传说中关羽之妻。关索之母，配偶关羽，出处《花关索传》和元代《三国志评话》民间传说人物。",
			zhangbu:"张布（？-264年），三国时吴国将领。张布在孙休受封为琅琊王时，为左右将督。太平三年（258年），孙休即位后，张布由长水校尉迁辅义将军，封永康侯。不久，孙休听说孙綝阴谋反叛，于是暗中和张布商量计策，孙綝被杀后，左将军张布因功加封中军督。由于孙休对张布厚加恩宠，因此张布专擅朝廷大权，多行无礼之事。永安七年（264年），孙休去世，丞相濮阳兴、左将军张布推荐孙皓为帝。同年八月初三，孙皓即皇帝位，封张布为骠骑将军，加侍中。孙皓粗暴骄盈、暴虐治国，又好酒色，濮阳兴和张布暗地里感到后悔，有人将此事报告孙皓，濮阳兴和张布二人被诛。",
			mb_wangjing:"王经（？—260年），字彦纬，冀州清河郡人，三国时代曹魏大臣。《三国志》无传。王经为农民出身，因得到同乡崔林的赏识，被提拔任官。其母说他太快出头会不吉利，但他平步青云，历任江夏太守、雍州刺史。正元二年（255年），蜀将姜维攻入陇西郡时，他率军出狄道城迎击蜀军，却被击败。被包围在城中，陷入穷途末路的境况。幸亏得到大将陈泰和邓艾的援助，合力击破姜维，才脱险。此后，他被朝廷召回。不久迁司隶校尉、尚书。甘露五年（260年），魏帝曹髦召见王沈、王经、王业，提出进讨司马昭的计划。王经进谏，但曹髦不听；王沈、王业向司马昭告密，王经不从。司马昭弑君后，王经因未向司马昭告急，而和其母一同被逮捕并被处死。",
		},
		characterTitle: {
			
		},
		characterFilter: {
			simashi: function (mode) {
				if (["boss", "chess", "tafang", "stone"].includes(mode)) return false;
				if (mode == "versus") return _status.mode != "three";
				return true;
			},
		},
		characterInitFilter: {
			
		},
		card: {
			ly_piliche: {
				fullskin: true,
				//vanish:true,
				derivation: "liuye",
				cardcolor: "diamond",
				type: "equip",
				subtype: "equip1",
				distance: { attackFrom: -8 },
				skills: ["ly_piliche"],
				//destroy:'polu'
			},
			wolong_card: {
				type: "takaramono",
				fullskin: true,
				//derivation:"pangdegong",
			},
			fengchu_card: {
				type: "takaramono",
				fullskin: true,
				//derivation:"pangdegong",
			},
			xuanjian_card: {
				fullskin: true,
				type: "takaramono",
				//derivation:"pangdegong",
			},
			shuijing_card: {
				fullskin: true,
				type: "takaramono",
				//derivation:"pangdegong",
			},
			rewrite_bagua: {
				derivation: "majun",
				//cardimage:"bagua",
				fullskin: true,
				type: "equip",
				subtype: "equip2",
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				skills: ["rw_bagua_skill"],
			},
			rewrite_baiyin: {
				derivation: "majun",
				fullskin: true,
				//cardimage:"baiyin",
				type: "equip",
				subtype: "equip2",
				loseDelay: false,
				onLose: function () {
					player.addTempSkill("rw_baiyin_skill_lose");
				},
				skills: ["rw_baiyin_skill"],
				tag: {
					recover: 1,
				},
				ai: {
					order: 9.5,
					equipValue: function (card, player) {
						if (player.hp == player.maxHp) return 5;
						if (player.countCards("h", "rewrite_baiyin")) return 6;
						return 0;
					},
					basic: {
						equipValue: 5,
					},
				},
			},
			rewrite_lanyinjia: {
				derivation: "majun",
				//cardimage:"lanyinjia",
				fullskin: true,
				type: "equip",
				subtype: "equip2",
				skills: ["rw_lanyinjia", "lanyinjia2"],
				ai: {
					equipValue: 6,
					basic: {
						equipValue: 1,
					},
				},
			},
			rewrite_renwang: {
				derivation: "majun",
				//cardimage:"renwang",
				fullskin: true,
				type: "equip",
				subtype: "equip2",
				skills: ["rw_renwang_skill"],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			rewrite_tengjia: {
				derivation: "majun",
				//cardimage:"tengjia",
				fullskin: true,
				type: "equip",
				subtype: "equip2",
				//cardnature:"fire",
				ai: {
					equipValue: function (card, player) {
						if (player.hasSkillTag("maixie") && player.hp > 1) return 0;
						if (player.hasSkillTag("noDirectDamage")) return 10;
						if (get.damageEffect(player, player, player, "fire") >= 0) return 10;
						var num =
							3 -
							game.countPlayer(function (current) {
								return get.attitude(current, player) < 0;
							});
						if (player.hp == 1) num += 4;
						if (player.hp == 2) num += 1;
						if (player.hp == 3) num--;
						if (player.hp > 3) num -= 4;
						return num;
					},
					basic: {
						equipValue: 3,
					},
				},
				skills: ["rw_tengjia1", "rw_tengjia2", "rw_tengjia3", "rw_tengjia4"],
			},
			rewrite_zhuge: {
				derivation: "majun",
				//cardimage:"zhuge",
				distance: {
					attackFrom: -2,
				},
				fullskin: true,
				type: "equip",
				subtype: "equip1",
				ai: {
					equipValue: function (card, player) {
						if (
							!game.hasPlayer(function (current) {
								return player.canUse("sha", current) && get.effect(current, { name: "sha" }, player, player) > 0;
							})
						) {
							return 1;
						}
						if (player.hasSha() && _status.currentPhase == player) {
							if (player.getEquip("zhuge") || player.getCardUsable("sha") == 0) {
								return 10;
							}
						}
						var num = player.countCards("h", "sha");
						if (num > 1) return 6 + num;
						return 3 + num;
					},
					basic: {
						equipValue: 5,
					},
					tag: {
						valueswap: 1,
					},
				},
				skills: ["rw_zhuge_skill"],
			},
			//大攻车
			dagongche_attack: {
				fullskin: true,
				derivation: "mb_zhangfen",
				type: "equip",
				subtype: "equip1",
				destroyLog: false,
				distance: { attackFrom: -8 },
				ai: { basic: { equipValue: 10 } },
				cardPrompt(card) {
					if (!card.storage || typeof card.storage.mbquchong != "number") return lib.translate["dagongche_attack_info"];
					let str = "此牌剩余" + parseFloat(card.storage.mbquchong) + "点耐久度，耐久度为0时销毁此牌。";
					return str + "①当此牌进入你的装备区时，弃置你装备区里的其他牌。②其他装备区进入你的装备区前，改为将这些牌置于弃牌堆。③当你对一名角色造成伤害时，你可减少1点此牌的耐久度，令此伤害+X（X为游戏轮数且至多为3）。④当此牌不因〖渠冲〗离开装备区时，减少1点此牌的耐久度并防止之。";
				},
				skills: ["dagongche_attack_skill", "mbquchong_effect"],
			},
			dagongche_defend: {
				fullskin: true,
				derivation: "mb_zhangfen",
				type: "equip",
				subtype: "equip1",
				destroyLog: false,
				distance: { attackFrom: -8 },
				ai: { basic: { equipValue: 10 } },
				cardPrompt(card) {
					if (!card.storage || typeof card.storage.mbquchong != "number") return lib.translate["dagongche_defend_info"];
					let str = "此牌剩余" + parseFloat(card.storage.mbquchong) + "点耐久度，耐久度为0时销毁此牌。";
					return str + "①当此牌进入你的装备区时，弃置你装备区里的其他牌。②其他装备区进入你的装备区前，改为将这些牌置于弃牌堆。③当你受到伤害时，减少X点此牌的耐久度，令此伤害-X（X为伤害值且至多为此牌耐久度）。④当此牌不因〖渠冲〗离开装备区时，减少1点此牌的耐久度并防止之。";
				},
				skills: ["dagongche_defend_skill", "mbquchong_effect"],
			},
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//SP甄宓
			mbbojian: {
				audio: 2,
				init(player) {
					player.addSkill("mbbojian_record");
				},
				trigger: {
					player: "phaseUseEnd",
				},
				filter(event, player) {
					const record = _status.mbbojian;
					if (!record || !record[player.playerid]) return false;
					const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
					const num1 = history.length,
						num2 = history.map(evt => get.suit(evt.card)).toUniqued().length,
						cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD("d")), []);
					return (num1 != record[player.playerid][0] && num2 != record[player.playerid][1]) || cards.length;
				},
				forced: true,
				async content(event, trigger, player) {
					const record = _status.mbbojian;
					const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
					const num1 = history.length,
						num2 = history.map(evt => get.suit(evt.card)).toUniqued().length,
						cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD("d")), []);
					if (num1 != record[player.playerid][0] && num2 != record[player.playerid][1]) await player.draw(2);
					else {
						const links =
							cards.length == 1
								? cards
								: await player
										.chooseButton(["博鉴：请选择要分配的牌", cards], true)
										.set("ai", button => {
											return get.value(button.link);
										})
										.forResultLinks();
						const togive = links[0];
						const { result } = await player.chooseTarget("选择获得" + get.translation(togive) + "的角色", true).set("ai", target => {
							const player = get.player();
							return get.attitude(player, target);
						});
						if (result.bool) {
							await result.targets[0].gain(togive, "gain2");
						}
					}
				},
				subSkill: {
					record: {
						trigger: {
							player: "phaseUseAfter",
						},
						firstDo: true,
						charlotte: true,
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
							const num1 = history.length,
								num2 = history.map(evt => get.suit(evt.card)).toUniqued().length;
							if (!_status.mbbojian) _status.mbbojian = {};
							_status.mbbojian[player.playerid] = [num1, num2];
							player.markSkill(event.name);
						},
						intro: {
							markcount: () => 0,
							content(storage, player) {
								const record = _status.mbbojian;
								if (!record || !record[player.playerid]) return "无信息";
								return "上个出牌阶段使用牌情况：①牌数：" + record[player.playerid][0] + "；②花色数：" + record[player.playerid][1];
							},
						},
					},
				},
			},
			mbjiwei: {
				audio: 4,
				getNum(event, player) {
					let num = 0;
					if (game.countPlayer2(current => current.hasHistory("lose")) >= 1) num++;
					if (game.countPlayer2(current => current.hasHistory("damage")) >= 1) num++;
					if (event.name == "phase") return num;
					return Math.max(game.countPlayer(), player.getHp());
				},
				trigger: {
					player: "phaseZhunbeiBegin",
					global: "phaseEnd",
				},
				filter(event, player) {
					const num = get.info("mbjiwei").getNum(event, player);
					if (event.name == "phaseZhunbei") return player.countCards("h") >= num && game.hasPlayer(current => current != player);
					return event.player != player && num > 0;
				},
				forced: true,
				async content(event, trigger, player) {
					const num = get.info("mbjiwei").getNum(trigger, player);
					if (trigger.name == "phase") await player.draw(num);
					else {
						const cards = player.getCards("h"),
							map = {};
						for (let color of ["red", "black", "none"]) {
							if (typeof map[color] != "number") map[color] = 0;
							map[color] += cards.filter(card => get.color(card) == color).length;
						}
						const list = [];
						for (var i in map) {
							if (map[i] > 0) list.push([`${i}2`, map[i]]);
						}
						list.sort((a, b) => b[1] - a[1]);
						let colors = list.filter(i => i[1] == list[0][1]).map(i => i[0]);
						const control = colors.length == 1 ? colors[0] : await player.chooseControl(colors).set("prompt", "济危：请选择一个颜色").forResultControl();
						let togive = player.getCards("h").filter(card => get.color(card) == control.slice(0, -1));
						if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
						let given_map = [];
						while (togive.length) {
							const {
								result: { bool, cards, targets },
							} = await player.chooseCardTarget({
								forced: true,
								filterCard(card, player) {
									return get.event("togive").includes(card) && !card.hasGaintag("olsujian_given");
								},
								selectCard: [1, Infinity],
								position: "h",
								filterTarget: lib.filter.notMe,
								prompt: "济危：请选择要分配的卡牌和目标",
								ai1(card) {
									return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
								},
								ai2(target) {
									const player = get.event("player");
									const card = ui.selected.cards[0];
									if (card) return get.value(card, target) * get.attitude(player, target);
									return 0;
								},
								togive: togive,
							});
							if (bool) {
								togive.removeArray(cards);
								const target = targets[0];
								if (given_map.some(i => i[0] == target)) {
									given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
								} else given_map.push([target, cards]);
								player.addGaintag(cards, "olsujian_given");
							} else break;
						}
						if (_status.connectMode) {
							game.broadcastAll(() => {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
						if (given_map.length) {
							await game
								.loseAsync({
									gain_list: given_map,
									player: player,
									cards: given_map.slice().map(list => list[1]),
									giver: player,
									animate: "giveAuto",
								})
								.setContent("gaincardMultiple");
						}
					}
				},
			},
			//张奋
			mbquchong: {
				audio: 4,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					if (
						!game.hasPlayer(target => {
							return target.hasCard(card => card.name.startsWith("dagongche_"), "e");
						})
					) {
						const num = player.getAllHistory("custom", evt => evt.name == "mbquchong").length;
						const list = /*get.mode() == "identity" ? [0, 5, 10, 10] : */ [0, 2, 5, 5];
						return num < 4 && player.countMark("mbquchong") >= list[num];
					}
					return player.canMoveCard(
						null,
						true,
						game.filterPlayer(target => {
							return target.hasCard(card => card.name.startsWith("dagongche_"), "e");
						}),
						(card, player) => {
							return card.name.startsWith("dagongche_");
						},
						"canReplace"
					);
				},
				mod: {
					aiValue(player, card, num) {
						if (!player.countCards(cardx => cardx.name.startsWith("dagongche_"), "e")) return num;
						if (card.name.startsWith("dagongche_")) return num;
						if (get.type(card) == "equip" && num > 0) return 0.3;
					},
				},
				locked: false,
				direct: true,
				logAudio: index => (typeof index === "number" ? "mbquchong" + index + ".mp3" : 4),
				async content(event, trigger, player) {
					if (
						game.hasPlayer(target => {
							return target.hasCard(card => card.name.startsWith("dagongche_"), "e");
						})
					) {
						await player
							.moveCard(
								get.prompt("mbquchong"),
								"移动场上的一张【大攻车】",
								(card, player) => {
									return card.name.startsWith("dagongche_");
								},
								game.filterPlayer(target => {
									return target.hasCard(card => card.name.startsWith("dagongche_"), "e");
								}),
								"canReplace"
							)
							.set("nojudge", true)
							.set("logSkill", ["mbquchong", null, null, null, [4]]);
					} else {
						const numbers = Array.from({ length: 13 }).map((_, i) => get.strNumber(i + 1));
						const list = /*get.mode() == "identity" ? [0, 5, 10, 10] : */ [0, 2, 5, 5];
						const costMark = list[player.getAllHistory("custom", evt => evt.name == "mbquchong").length];
						const result = await player
							.chooseButton(
								[
									"###" + get.prompt("mbquchong") + '###<div class="text center">消耗' + parseFloat(costMark) + "点铸造值，制造任意花色和点数的【大攻车·攻】或【大攻车·守】</div>",
									[["dagongche_attack", "dagongche_defend"].map(i => [i, get.translation(i)]), "tdnodes"],
									[
										lib.suit
											.slice()
											.reverse()
											.map(i => [i, get.translation(i)]),
										"tdnodes",
									],
									[numbers, "tdnodes"],
								],
								3
							)
							.set("filterButton", button => {
								return !ui.selected.buttons.some(but => {
									return [["dagongche_attack", "dagongche_defend"], lib.suit, get.event("numbers")].some(list => list.includes(but.link) && list.includes(button.link));
								});
							})
							.set("numbers", numbers)
							.set("ai", () => 1 + Math.random())
							.forResult(); //插眼，PZ157
						if (result.bool) {
							const equips = result.links.sort((a, b) => {
								return lib.suit.includes(a) + (numbers.includes(a) ? 2 : 0) - (lib.suit.includes(b) + (numbers.includes(b) ? 2 : 0));
							});
							const card = game.createCard(equips[0], equips[1], get.numString(equips[2]));
							if (!card.storage) card.storage = {};
							if (typeof card.storage.mbquchong != "number") {
								card.storage.mbquchong = card.name == "dagongche_attack" ? 2 : 3;
							}
							lib.skill.mbquchong.broadcast(card);
							const resultx = await player
								.chooseTarget("令一名角色获得" + get.translation(card) + "并使用之", true)
								.set("ai", target => {
									const player = get.event().player,
										att = get.attitude(player, target);
									if (!target.canEquip(get.event().card)) return att;
									return att * (2.5 - target.countCards("e"));
								})
								.set("card", card)
								.forResult();
							if (resultx.bool) {
								const target = resultx.targets[0];
								player.logSkill("mbquchong", target, null, null, [card.name == "dagongche_attack" ? 3 : 2]);
								if (costMark > 0) player.removeMark("mbquchong", costMark);
								player.getHistory("custom").push({ name: "mbquchong" });
								await target.gain(card, "gain2");
								if (get.position(card) == "h" && get.owner(card) == target && target.hasUseTarget(card)) {
									await target.chooseUseTarget(card, "nopopup", false, true);
								}
							}
						}
					}
				},
				broadcast(card) {
					game.broadcast(
						(card, storage) => {
							card.storage = storage;
						},
						card,
						card.storage
					);
				},
				marktext: "铸",
				intro: {
					name: "铸造点",
					content: "当前拥有#铸造点",
				},
				group: ["mbquchong_recast", "mbquchong_remove"],
				derivation: ["dagongche_attack", "dagongche_defend"],
				subSkill: {
					recast: {
						audio: "mbquchong1.mp3",
						inherit: "drlt_huairou",
					},
					remove: {
						audio: "mbquchong1.mp3",
						trigger: { global: "phaseEnd" },
						filter(event, player) {
							return get.discardPile(i => get.type(i, false) == "equip");
						},
						forced: true,
						locked: false,
						async content(event, trigger, player) {
							const cards = Array.from(ui.discardPile.childNodes).filter(i => get.type(i, false) == "equip");
							await game.cardsGotoSpecial(cards);
							await player.showCards(cards, get.translation(player) + "发动了【渠冲】");
							game.log(cards, "被移出了游戏");
							player.addMark("mbquchong", cards.length);
						},
					},
					effect: {
						equipSkill: true,
						trigger: {
							player: ["loseBefore", "mbquchongOnRemove", "equipBefore", "equipAfter"],
						},
						filter(event, player, name) {
							if (name == "mbquchongOnRemove") {
								// 临时修改（by 棘手怀念摧毁）
								return player.hasCard(card => card.name.startsWith("dagongche_") && card.storage && card.storage.mbquchong <= 0, "e");
								// return player.hasCard(card => card.name.startsWith("dagongche_") && card.storage?.mbquchong <= 0, "e");
							}
							if (event.name == "equip") {
								if (name == "equipBefore") return true;
								if (!event.card.name.startsWith("dagongche_")) return false;
								return player.hasCard(card => {
									return !event.cards.includes(card) && lib.filter.cardDiscardable(card, player);
								}, "e");
							}
							if(event.getParent(2).name=="disableEquip") return false;
							if (event.getParent(3).name == "mbquchong" || event.getParent(3).name == "mbquchong_recast") return false;
							return player.hasCard(card => {
								if (!event.cards.includes(card)) return false;
								// 临时修改（by 棘手怀念摧毁）
								return card.name.startsWith("dagongche_") && card.storage && card.storage.mbquchong > 0;
								// return card.name.startsWith("dagongche_") && card.storage?.mbquchong > 0;
							}, "e");
						},
						forced: true,
						async content(event, trigger, player) {
							if (event.triggername == "mbquchongOnRemove") {
								// 临时修改（by 棘手怀念摧毁）
								const cards = player.getCards("e", card => card.name.startsWith("dagongche_") && card.storage && card.storage.mbquchong <= 0);
								// const cards = player.getCards("e", card => card.name.startsWith("dagongche_") && card.storage?.mbquchong <= 0);
								await player.lose(cards, ui.special);
								for (const card of cards) {
									card.fix();
									card.remove();
									card.destroyed = true;
								}
								game.log(cards, "被移出了游戏");
							} else if (trigger.name == "equip") {
								if (event.triggername == "equipBefore") trigger.cancel();
								else await player.discard(player.getCards("e", card => {
									return !trigger.cards.includes(card) && lib.filter.cardDiscardable(card, player);
								}));
							}
							else {
								const cards = player.getCards("e", card => {
									if (!trigger.cards.includes(card)) return false;
									// 临时修改（by 棘手怀念摧毁）
									return card.name.startsWith("dagongche_") && card.storage && card.storage.mbquchong > 0;
									// return card.name.startsWith("dagongche_") && card.storage?.mbquchong > 0;
								});
								trigger.cards.removeArray(cards);
								for (const card of cards) {
									card.storage.mbquchong--;
									game.log(card, '减少了', '#y1点', '#g耐久值');
									lib.skill.mbquchong.broadcast(card);
								}
								await event.trigger("mbquchongOnRemove");
							}
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target.hasCard(card => card.name.startsWith("dagongche_"), "e")) return;
									if (player == target && get.type(card) == "equip") return 0;
								},
							},
						},
					},
				},
			},
			dagongche_attack_skill: {
				equipSkill: true,
				trigger: { source: "damageBegin3" },
				filter(event, player) {
					if (
						!player.hasCard(card => {
							// 临时修改（by 棘手怀念摧毁）
							return card.name == "dagongche_attack" && card.storage && card.storage.mbquchong > 0;
							// return card.name == "dagongche_attack" && card.storage?.mbquchong > 0;
						}, "e")
					)
						return false;
					return game.roundNumber > 0;
				},
				logTarget: "player",
				prompt2(event, player) {
					return "令对" + get.translation(event.player) + "造成的伤害+" + parseFloat(Math.min(3, game.roundNumber));
				},
				check(event, player) {
					return get.damageEffect(event.player, player, player) > 0;
				},
				async content(event, trigger, player) {
					trigger.num += Math.min(3, game.roundNumber);
					const cards = player.getCards("e", card => {
						// 临时修改（by 棘手怀念摧毁）
						return card.name == "dagongche_attack" && card.storage && card.storage.mbquchong > 0;
						// return card.name == "dagongche_attack" && card.storage?.mbquchong > 0;
					});
					for (const card of cards) {
						card.storage.mbquchong--;
						game.log(card, '减少了', '#y1点', '#g耐久值');
						lib.skill.mbquchong.broadcast(card);
					}
					await event.trigger("mbquchongOnRemove");
				},
			},
			dagongche_defend_skill: {
				equipSkill: true,
				trigger: { player: "damageBegin3" },
				filter(event, player) {
					if (
						!player.hasCard(card => {
							// 临时修改（by 棘手怀念摧毁）
							return card.name == "dagongche_defend" && card.storage && card.storage.mbquchong > 0;
							// return card.name == "dagongche_defend" && card.storage?.mbquchong > 0;
						}, "e")
					)
						return false;
					return game.roundNumber > 0;
				},
				forced: true,
				locked: false,
				async content(event, trigger, player) {
					const cards = player.getCards("e", card => {
						// 临时修改（by 棘手怀念摧毁）
						return card.name == "dagongche_defend" && card.storage && card.storage.mbquchong > 0;
						// return card.name == "dagongche_defend" && card.storage?.mbquchong > 0;
					});
					for (const card of cards) {
						const num = Math.min(trigger.num, card.storage.mbquchong);
						trigger.num -= num;
						card.storage.mbquchong -= num;
						game.log(card, '减少了', '#y' + num +'点', '#g耐久值');
						lib.skill.mbquchong.broadcast(card);
						if (trigger.num <= 0) break;
					}
					await event.trigger("mbquchongOnRemove");
				},
			},
			mbxunjie: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				filter(event, player) {
					if (!event.source || event.source.getHp() <= player.getHp()) return false;
					return !game.hasPlayer(target => {
						return target.hasCard(card => card.name.startsWith("dagongche_"), "e");
					});
				},
				forced: true,
				logTarget: "source",
				async content(event, trigger, player) {
					const result = await player
						.judge(card => {
							return get.color(card) == "red" ? 2 : -2;
						})
						.set("judge2", result => Boolean(result.bool))
						.forResult();
					if (result.color == "red") trigger.num--;
				},
				ai: {
					combo: "mbquchong",
					effect: {
						target(card, player, target) {
							if (
								player.getHp() <= target.getHp() ||
								game.hasPlayer(current => {
									return current.hasCard(card => card.name.startsWith("dagongche_"), "e");
								})
							)
								return;
							if (player.hasSkillTag("jueqing", false, target)) return;
							const num = get.tag(card, "damage");
							if (num) {
								if (num > 1) return 0.55;
								return 0.05;
							}
						},
					},
				},
			},
			//贾充
			mbbeini: {
				audio: "beini",
				inherit: "beini",
				async content(event, trigger, player) {
					const target = event.targets[0];
					const str = get.translation(target);
					const {
						result: { index },
					} = await player
						.chooseControl()
						.set("choiceList", [`摸两张牌，然后令${str}视为对自己使用【杀】或弃置自己场上一张牌`, `令${str}摸两张牌，然后视为对其使用【杀】或弃置其场上一张牌`])
						.set("ai", () => {
							const evt = _status.event.getParent(),
								player = evt.player,
								target = evt.target;
							const card = { name: "sha", isCard: true },
								att = get.attitude(player, target) > 0;
							if (!target.canUse(card, player, false) || get.effect(player, card, target, player) >= 0) return 0;
							if (att && (!player.canUse(card, target, false) || get.effect(target, card, player, player) >= 0)) return 1;
							if (target.hasSkill("nogain") && player.canUse(card, target, false) && get.effect(target, card, player, player) > 0) return 1;
							if (player.hasShan()) return 0;
							if (att && target.hasShan()) return 1;
							return 0;
						});
					const list = [player, target];
					if (index == 1) list.reverse();
					await list[0].draw(2);
					const sha = get.autoViewAs({ name: "sha", isCard: true });
					const choices = [];
					const choiceList = [`视为对${get.translation(list[0])}使用一张【杀】`, `弃置${get.translation(list[0])}场上一张牌`];
					if (list[1].canUse("sha", list[0], false)) choices.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
					if (list[0].countDiscardableCards(list[1], "ej")) choices.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					if (!choices.length) return;
					const control =
						choices.length == 1
							? choices[0]
							: await list[1]
									.chooseControl(choices)
									.set("choiceList", choiceList)
									.set("prompt", "悖逆：请选择一项")
									.set("ai", () => {
										const player = get.player(),
											target = get.event("target");
										const eff2 = get.effect(target, { name: "sha" }, player, player),
											eff1 = get.effect(target, { name: "guohe_copy2" }, player, player);
										return eff1 > eff2 ? "选项一" : "选项二";
									})
									.set("target", list[0])
									.forResultControl();
					if (control == "选项一") await list[1].useCard(sha, list[0], false, "noai");
					else await list[1].discardPlayerCard(list[0], "ej", true);
				},
			},
			mbdingfa: {
				audio: "dingfa",
				trigger: {
					player: "phaseDiscardAfter",
				},
				filter(event, player) {
					let num = 0;
					player.getHistory("lose", evt => {
						num += evt.cards2.length;
					});
					return num >= player.hp && (player.isDamaged() || game.hasPlayer(current => current.countDiscardableCards(player, "he")));
				},
				async cost(event, trigger, player) {
					const choices = [];
					const choiceList = ["回复1点体力", "弃置一名角色至多两张牌"];
					if (player.isDamaged()) choices.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
					if (game.hasPlayer(current => current.countDiscardableCards(player, "he"))) choices.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					const control = await player
						.chooseControl(choices, "cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt(event.name.slice(0, -5)))
						.set("ai", () => {
							const player = get.player();
							const choices = get.event().controls.slice().remove("cancel2");
							const eff = get.recoverEffect(player, player, player);
							if (!game.hasPlayer(current => get.effect(current, { name: "guohe_copy2" }, player, player) > eff)) choices.remove("选项二");
							else if (choices.includes("选项二")) return "选项二";
							if (eff <= 0) choices.remove("选项一");
							if (!choices.length) return "cancel2";
							return choices.randomGet();
						})
						.forResultControl();
					event.result = {
						bool: control != "cancel2",
						cost_data: control,
					};
				},
				async content(event, trigger, player) {
					if (event.cost_data == "选项一") await player.recover();
					else {
						const targets = await player
							.chooseTarget(
								"选择一名角色弃置其至多两张牌",
								(card, player, target) => {
									return target.countDiscardableCards(player, "he");
								},
								true
							)
							.set("ai", target => {
								const player = get.player();
								return get.effect(target, { name: "guohe_copy2" }, player, player);
							})
							.forResultTargets();
						if (!targets || !targets.length) return;
						const target = targets[0];
						await player.discardPlayerCard(target, "he", true, [1, 2]);
					}
				},
			},
			//司马伷
			mbbifeng: {
				audio: 3,
				trigger: {
					target: "useCardToTarget",
					global: "useCardAfter",
				},
				filter(event, player, name) {
					if (name == "useCardAfter") return player.getStorage("mbbifeng").includes(event.card);
					if (event.targets && event.targets.length > 4) return false;
					return ["trick", "basic"].includes(get.type(event.card));
				},
				logAudio: index => (typeof index === "number" ? "mbbifeng" + index + ".mp3" : 3),
				async cost(event, trigger, player) {
					if (event.triggername == "useCardAfter") {
						event.result = { bool: true };
					} else {
						event.result = await player
							.chooseBool(get.prompt2(event.skill))
							.set("ai", () => get.event("bool"))
							.set(
								"bool",
								(function () {
									let cancel = get.effect(player, trigger.card, trigger.player, player),
										name = trigger.card.name;
									if (get.effect(player, { name: "losehp" }, player, player) - cancel > 0) {
										return true;
									}
									if (2 * get.effect(player, { name: "draw" }, player, player) - cancel <= 0) {
										return false;
									}
									let targets = trigger.targets.filter(current => {
										return player !== current && get.effect(current, trigger.card, trigger.player, current) < 0;
									});
									if (name === "sha") {
										return targets.some(target => {
											return target.mayHaveShan(player, "use");
										});
									}
									if (name === "juedou" || name === "nanman") {
										return targets.some(target => {
											return target.mayHaveSha(player, "respond");
										});
									}
									/*if (name === "jiedao") return targets.some(target => {
								return target.mayHaveSha(player, "use");
							});*/
									if (name === "wanjian") {
										return targets.some(target => {
											return target.mayHaveShan(player, "respond");
										});
									}
									if (name === "qizhengxiangsheng") {
										return targets.some(target => {
											return target.mayHaveSha(player, "respond") || target.mayHaveShan(player, "respond");
										});
									}
									return false;
								})()
							)
							.forResult();
					}
				},
				popup: false,
				async content(event, trigger, player) {
					if (event.triggername == "useCardAfter") {
						player.unmarkAuto("mbbifeng", trigger.card);
						if (game.hasPlayer(current => {
							if (current == player) return false;
							let respondEvts = [];
							respondEvts.addArray(current.getHistory("useCard")).addArray(current.getHistory("respond"));
							respondEvts = respondEvts.filter(i => i.respondTo).map(evt => evt.respondTo);
							return respondEvts.some(list => {
								return list[1] == trigger.card;
							});
						})) {
							player.logSkill("mbbifeng", null, null, null, [3]);
							await player.draw(2);
						} else {
							player.logSkill("mbbifeng", null, null, null, [2]);
							await player.loseHp();
						}
					}
					else {
						player.logSkill("mbbifeng", null, null, null, [1]);
						trigger.getParent().excluded.add(player);
						player.markAuto("mbbifeng", trigger.card);
					}
				},
			},
			mbsuwang: {
				audio: 2,
				trigger: {
					global: "phaseEnd",
				},
				filter(event, player) {
					if (player.getHistory("damage").length) return false;
					return event.player.hasHistory("useCard", evt => evt.targets && evt.targets.includes(player));
				},
				frequent: true,
				async content(event, trigger, player) {
					await player.addToExpansion(get.cards(1), "draw").gaintag.add("mbsuwang");
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "mbsuwang_draw",
				subSkill: {
					draw: {
						audio: "mbsuwang",
						trigger: {
							player: "phaseDrawBegin1",
						},
						filter(event, player) {
							return !event.numFixed && player.getExpansions("mbsuwang").length;
						},
						async cost(event, trigger, player) {
							const cards = player.getExpansions("mbsuwang");
							event.result = await player.chooseBool(get.prompt("mbsuwang"), "放弃摸牌并获得" + get.translation(cards)).set("choice", trigger.num <= cards.length).forResult();
						},
						async content(event, trigger, player) {
							const cards = player.getExpansions("mbsuwang");
							trigger.changeToZero();
							await player.gain(cards, "gain2");
							if (cards.length >= 0) {
								const result = await player.chooseTarget("是否令一名其他角色摸两张牌?", lib.filter.notMe).set("ai", function (target) {
									return get.effect(target, { name: "draw" }, _status.event.player, _status.event.player);
								}).forResult();
								if (result.bool) {
									player.line(result.targets[0], "green");
									await result.targets[0].draw(2);
								}
							}
						},
					},
				},
			},
			//文钦
			mbbeiming:{
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("mbbeiming"), "令至多两名角色获得武器牌", [1, 2])
						.set("ai", target => {
							return get.attitude(get.player(), target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const targets = event.targets;
					for (const target of targets) {
						const suits = [];
						for (const card of target.getCards("h")) suits.add(get.suit(card));
						const equip = get.cardPile2(card => {
							if (get.subtype(card) != "equip1") return false;
							const info = get.info(card, false);
							if (!info) return false;
							if (!info.distance || typeof info.distance.attackFrom != "number") return suits.length == 1;
							return 1 - info.distance.attackFrom == suits.length;
						});
						if (equip) await target.gain(equip, "gain2");
					}
				},
			},
			mbchoumang: {
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				usable: 1,
				filter(event, player) {
					return event.card.name == "sha" && event.targets.length == 1;
				},
				async cost(event, trigger, player) {
					const list = ["选项一", "选项二"], target = event.triggername == "useCardToPlayered" ? trigger.target : trigger.player;
					if (player.getEquip(1) || target.getEquip(1)) list.push("背水！");
					list.push("cancel2");
					const result = await player.chooseControl(list).set("choiceList", [
						"令此【杀】伤害+1",
						"若此【杀】被【闪】抵消，你可以获得与你距离为1以内的一名其他角色区域里的一张牌",
						"背水！弃置你与其装备区的武器牌并执行所有选项",
					]).set("prompt", get.prompt("mbchoumang")).set("result", function () {
						let eff = 0;
						for (const targetx of trigger.targets) eff += get.effect(targetx, trigger.card, trigger.player, player);
						const bool = game.hasPlayer(current => player != current && get.distance(player, current) <= 1 && get.effect(current, { name: "shunshou_copy2" }, player, player) > 0);
						if (list.includes("背水！") && eff > 0 && bool) return "背水！";
						if (bool) return "选项二";
						if (eff > 0) return "选项一";
						return "cancel2";
					}()).set("ai", function () {
						return _status.event.result;
					}).forResult();
					event.result = {
						bool: result.control != "cancel2",
						targets: [target],
						cost_data: result.control,
					};
				},
				async content(event, trigger, player) {
					const result = event.cost_data, target = event.targets[0];
					if (result == "背水！") {
						const list = [];
						if (player.getEquips(1).length) list.push([player, player.getEquips(1)]);
						if (target.getEquips(1).length) list.push([target, target.getEquips(1)]);
						await game.loseAsync({
							lose_list: list,
							discarder: player,
						}).setContent("discardMultiple");
					}
					if (result != "选项二") {
						trigger.getParent().baseDamage++;
						await game.asyncDelay();
					}
					if (result != "选项一") {
						player.addTempSkill("mbchoumang_effect");
						player.markAuto("mbchoumang_effect", trigger.card);
					}
				},
				subSkill: {
					effect: {
						trigger: {
							global: "shaMiss",
						},
						filter(event, player) {
							if (!player.getStorage("mbchoumang_effect").includes(event.card)) return false;
							return game.hasPlayer(current => player != current && get.distance(player, current) <= 1 && current.countCards("hej"));
						},
						charlotte: true,
						onremove: true,
						async cost(event, trigger, player) {
							event.result = await player.chooseTarget("仇铓：是否获得与你距离为1以内的一名其他角色区域里的一张牌？", function (card, player, target) {
								return player != target && get.distance(player, target) <= 1 && target.countCards("hej");
							}).set("ai", function (target) {
								const player = _status.event.player;
								return get.effect(target, { name: "shunshou_copy2" }, player, player);
							}).forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							await player.gainPlayerCard(target, "hej", true);
							player.unmarkAuto("mbchoumang_effect", [trigger.card]);
							if (!player.getStorage("mbchoumang_effect").length) player.removeSkill("mbchoumang_effect");
						},
					},
				},
			},
			//张布
			mbchengxiong: {
				audio: 2,
				trigger: { player: "useCardToTargeted" },
				filter(event, player) {
					if (get.type2(event.card) !== "trick" || !event.isFirstTarget || event.targets.includes(player)) {
						return false;
					}
					const num = lib.skill.mbchengxiong.phaseUsed(event, player);
					return game.hasPlayer(current => current !== player && current.countCards("he") >= num);
				},
				phaseUsed(event, player) {
					let phase = null;
					for (let i of lib.phaseName) {
						if (event.getParent(i, true)) {
							phase = i;
							break;
						}
					}
					if (!phase) {
						return 0;
					}
					return player.getHistory("useCard", evt => evt.getParent(phase) == event.getParent(phase)).length;
				},
				async cost(event, trigger, player) {
					const num = lib.skill.mbchengxiong.phaseUsed(trigger, player);
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), function (card, player, target) {
							const num = get.event("num");
							return target !== player && target.countCards("he") >= num;
						})
						.set("num", num)
						.set("color", get.color(trigger.card))
						.set("ai", function (target) {
							let player = get.player(),
								eff = get.effect(target, { name: "guohe_copy2" }, player, player);
							const color = get.event("color");
							if (target.getCards("e").some(card => get.color(card) == color)) {
								eff += get.damageEffect(target, player, player) / 2;
							}
							return eff;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await player
						.discardPlayerCard("he", target, true)
						.set("ai", function (button) {
							let val = get.buttonValue(button);
							if (get.attitude(_status.event.player, get.owner(button.link)) > 0) {
								val *= -1;
							}
							if (get.position(button.link) == "e" && get.color(button.link) == get.event("color")) {
								return (val *= 2);
							}
							return val;
						})
						.set("color", get.color(trigger.card))
						.forResult();
					if (result?.bool && get.color(result.links[0]) == get.color(trigger.card)) {
						await target.damage();
					}
				},
				locked: false,
				mod: {
					aiOrder(player, card, num) {
						if (get.type2(card) == "trick") {
							return num + 10;
						}
					},
				},
			},
			mbwangzhuang: {
				audio: 2,
				trigger: { global: "damageEnd" },
				filter(event, player) {
					if (event.card) {
						return false;
					}
					return [event.source, event.player].includes(player);
				},
				logTarget(event, player) {
					return _status.currentPhase || player;
				},
				async content(event, trigger, player) {
					await player.draw();
					if (_status.currentPhase) {
						_status.currentPhase.addTempSkill("fengyin");
					}
				},
			},
			//王经
			mbzujin: {
				audio: 3,
				enable: ["chooseToUse", "chooseToRespond"],
				filter: function (event, player) {
					if (!player.countCards("hse", card => get.type(card) == "basic")) return false;
					if (player.isDamaged()) {
						if (event.filterCard(get.autoViewAs({ name: "shan" }, "unsure"), player, event) && !player.getStorage("mbzujin").includes("shan")) return true;
						if (event.filterCard(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) && !player.getStorage("mbzujin").includes("wuxie")) return true;
					}
					if (!player.isDamaged() || !player.isMinHp()) {
						if (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) && !player.getStorage("mbzujin").includes("sha")) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						if (player.isDamaged()) {
							if (event.filterCard(get.autoViewAs({ name: "shan" }, "unsure"), player, event) && !player.getStorage("mbzujin").includes("shan")) list.push(["基本", "", "shan"]);
							if (event.filterCard(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) && !player.getStorage("mbzujin").includes("wuxie")) list.push(["锦囊", "", "wuxie"]);
						}
						if (!player.isDamaged() || !player.isMinHp() && !player.getStorage("mbzujin").includes("sha")) {
							if (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
						}
						return ui.create.dialog("阻进", [list, "vcard"]);
					},
					check: function (button) {
						if (_status.event.getParent().type != "phase") return 1;
						var player = _status.event.player;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup: function (links, player) {
						return {
							audio: "mbzujin",
							filterCard: card => get.type(card) == "basic",
							popname: true,
							check: function (card) {
								return 8 - get.value(card);
							},
							logAudio(event, player) {
								return "mbzujin" + (["sha", "shan", "wuxie"].indexOf(event.card.name) + 1) + ".mp3";
							},
							position: "hse",
							viewAs: { name: links[0][2], nature: links[0][3] },
							precontent: function () {
								if (!player.storage.mbzujin) {
									player.storage.mbzujin = [];
									player.when({ global: "phaseEnd" }).then(() => {
										delete player.storage.mbzujin;
									});
								}
								player.markAuto("mbzujin", [event.result.card.name]);
							},
						};
					},
					prompt: function (links, player) {
						return "将一张基本牌当做" + get.translation(links[0][2]) + "使用";
					},
				},
				hiddenCard: function (player, name) {
					if (!player.countCards("she", card => get.type(card) == "basic")) return false;
					if (player.getStorage("mbzujin").includes(name)) return false;
					if (["shan", "wuxie"].includes(name)) return player.isDamaged();
					if (name == "sha") return (!player.isDamaged() || !player.isMinHp());
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						if (!player.countCards("hse", card => get.type(card) == "basic")) return false;
						if (tag == "respondSha") return (!player.isDamaged() || !player.isMinHp()) && !player.getStorage("mbzujin").includes("sha");
						return player.isDamaged() && !player.getStorage("mbzujin").includes("shan");
					},
					order: 1,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
				subSkill: { backup: {} },
			},
			mbjiejian: {
				audio: 3,
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter: function (event, player) {
					return player.countCards("h");
				},
				async cost(event, trigger, player) {
					if (_status.connectMode)
						game.broadcastAll(function () {
							_status.noclearcountdown = true;
						});
					const give_map = {};
					let used = [];
					do {
						const result = await player.chooseCardTarget({
							filterCard: function (card) {
								return get.itemtype(card) == "card" && !card.hasGaintag("mbjiejian_tag");
							},
							filterTarget: lib.filter.notMe,
							selectCard: [1, Infinity],
							prompt: used.length ? "是否继续分配手牌？" : get.prompt("mbjiejian"),
							prompt2: "请选择要分配的卡牌和目标",
							ai1: function (card) {
								if (!ui.selected.cards.length) return 8 - get.value(card);
								return 0;
							},
							ai2: function (target) {
								let player = _status.event.player,
									card = ui.selected.cards[0];
								let val = get.value(card), att = get.attitude(player, target);
								if (val <= 4) {
									if (get.event("used").includes(target)) return 0;
									return 1 / target.getUseValue(card);
								}
								return att * (target.getUseValue(card) + 4);
							},
						}).set("used", used).forResult();
						if (result.bool && result.targets.length) {
							const id = result.targets[0].playerid,
								map = give_map;
							if (!map[id]) map[id] = [];
							map[id].addArray(result.cards);
							player.addGaintag(result.cards, "mbjiejian_tag");
							used.addArray(result.targets);
						}
						else break;
					} while (player.countCards("h"));
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					const list = [], targets = [];
					for (const i in give_map) {
						const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						if (player !== source && (get.mode() !== "identity" || player.identity !== "nei")) player.addExpose(0.2);
						targets.push(source);
						list.push([source, give_map[i]]);
					}
					event.result = {
						bool: list.length > 0,
						targets: targets,
						cost_data: list,
					};
				},
				logAudio: () => 1,
				async content(event, trigger, player) {
					const list = event.cost_data;
					await game.loseAsync({
						gain_list: list,
						player: player,
						cards: list.map(i => i[1]).flat(),
						giver: player,
						animate: "giveAuto",
					}).setContent("gaincardMultiple");
					for (let target of event.targets) {
						let num = target.hp - target.countMark("mbjiejian_mark");
						target.addMark("mbjiejian_mark", num, false);
					}
				},
				group: ["mbjiejian_liuli", "mbjiejian_remove"],
				subSkill: {
					liuli: {
						audio: "mbjiejian2.mp3",
						trigger: {
							global: "useCardToTarget",
						},
						filter: function (event, player) {
							if (get.type(event.card) == "equip") return false;
							if (!event.targets || event.targets.length != 1) return false;
							if (!event.targets[0].hasMark("mbjiejian_mark")) return false;
							return true;
						},
						prompt2: "将此牌转移给自己",
						check: function (event, player) {
							return get.effect(player, event.card, event.player, player) >= get.effect(event.targets[0], event.card, event.player, player);
						},
						logTarget: "target",
						async content(event, trigger, player) {
							const evt = trigger.getParent();
							evt.triggeredTargets2.removeArray(event.targets);
							evt.targets.removeArray(event.targets);
							if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) evt.targets.push(player);
							await player.draw();
						},
					},
					remove: {
						audio: "mbjiejian3.mp3",
						trigger: {
							global: "phaseEnd",
						},
						forced: true,
						filter: function (event, player) {
							return event.player.hasMark("mbjiejian_mark");
						},
						logTarget: "player",
						async content(event, trigger, player) {
							const target = event.targets[0], num = target.countMark("mbjiejian_mark");
							target.removeMark("mbjiejian_mark", num, false);
							if (target.hp >= num) await player.draw(2);
						},
					},
					mark: {
						intro: {
							content: "获得“节谏”时的体力值：$",
						},
					},
				},
			},
			//新司马孚
			mbpanxiang: {
				audio: 4,
				trigger: {
					global: "damageBegin3",
				},
				async cost(event, trigger, player) {
					const { player: target, source, card } = trigger;
					const [SUB, ADD] = ["减伤", "加伤"];
					const list = ["减伤", "加伤"].filter(text => text !== (player.storage.mbpanxiang || {})[target.playerid]);
					list.push("cancel2");
					let prompt = `${get.translation(target)}即将受到${source ? "来自" + get.translation(source) : "无来源"}的${trigger.num}点伤害，你可以选择一项：`;
					const choiceTexts = [`⒈令此伤害-1${source && source.isIn() ? "，" + get.translation(source) + "摸两张牌" : ""}；`, `⒉令此伤害+1，${get.translation(target)}摸三张牌。`];
					if (!list.includes(SUB)) choiceTexts[0] = `<span style="text-decoration: line-through;">${choiceTexts[0]}（上次选过）</span>`;
					if (!list.includes(ADD)) choiceTexts[1] = `<span style="text-decoration: line-through;">${choiceTexts[1]}（上次选过）</span>`;
					choiceTexts.forEach(text => prompt += text);
					const result = await player
						.chooseControl(list)
						.set("prompt", get.prompt("mbpanxiang", target))
						.set("prompt2", prompt)
						.set("ai", () => {
							return get.event("choice");
						})
						.set(
							"choice",
							(() => {
								const damageEff = get.damageEffect(target, source, player);
								const att = get.attitude(player, target),
									attSource = get.attitude(player, source);
								const canFilterDamage = target.hasSkillTag("filterDamage", null, {
									player: source,
									card,
								});
								if (list.includes(ADD)) {
									if (damageEff > 0) {
										if (!canFilterDamage && target.getHp() <= trigger.num + 1) return ADD;
									} else {
										if (att > 0 && (damageEff === 0 || canFilterDamage)) return ADD;
										if (
											target.getHp() +
												target.countCards("hs", card => {
													return target.canSaveCard(card, target);
												}) >
												trigger.num + 1 &&
											!list.includes(SUB)
										)
											return ADD;
									}
								}
								if (list.includes(SUB)) {
									if (att > 0 && attSource >= 0) return SUB;
									if (canFilterDamage && att > 0) return "cancel2";
									if (damageEff > 0) {
										if (target.getHp() > trigger.num && attSource > 0 && source.countCards("h") + source.getHp() <= 4) return SUB;
									} else {
										if (att > 0) {
											if (trigger.num >= target.getHp()) return SUB;
											if (
												source && !source.countCards("hs", card => {
													return source.canUse(card, target, true) && get.effect(target, card, source, player) > 0;
												})
											)
												return Math.random() < 0.7 ? ADD : "cancel2";
										} else {
											if (attSource >= 0) return SUB;
											if (target.hasSkillTag("maixie") && trigger.num === 1 && damageEff < -20) return SUB;
										}
									}
								}
								return "cancel2";
							})()
						)
						.forResult();
					if (result.control !== "cancel2") {
						event.result = {
							bool: true,
							cost_data: {
								control: result.control,
							},
						};
					}
				},
				logTarget: "player",
				onremove: true,
				logAudio(event, player, name, indexedData, evt) {
					const { control } = evt.cost_data;
					return control == "减伤" ? ["mbpanxiang1.mp3", "mbpanxiang2.mp3"] : ["mbpanxiang3.mp3", "mbpanxiang4.mp3"];
				},
				async content(event, trigger, player) {
					const { control } = event.cost_data;
					const { player: target, source } = trigger;
					if (!player.storage.mbpanxiang) player.storage.mbpanxiang = {};
					player.storage.mbpanxiang[target.playerid] = control;
					if (control === "减伤") {
						trigger.num--;
						game.log(player, "令此伤害", "#y-1");
						if (source && source.isIn()) await source.draw(2);
					} else {
						trigger.num++;
						game.log(player, "令此伤害", "#y+1");
						await target.draw(3);
					}
				},
			},
			mbchenjie: {
				audio: 2,
				trigger: { global: "dieAfter" },
				filter(event, player) {
					return (
						player.hasSkill("mbpanxiang", null, false, false) &&
						player.hasHistory("useSkill", evt => {
							return evt.skill === "mbpanxiang" && evt.targets.includes(event.player);
						})
					);
				},
				forced: true,
				async content(event, trigger, player) {
					const cards = player.getCards("hej", card => lib.filter.cardDiscardable(card, player, "mbchenjie"));
					if (cards.length) await player.discard(cards);
					await player.draw(4);
				},
				ai: {
					combo: "mbpanxiang"
				},
			},
			//李昭焦伯
			mbzuoyou: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				zhuanhuanji: true,
				filterTarget(card, player, target) {
					if (player.storage.mbzuoyou) return get.mode() == "versus" && _status.mode == "two" ? true : target.countCards("h");
					return true;
				},
				async content(event, trigger, player) {
					const storage = player.storage.mbzuoyou,
						target = event.target;
					if (event.name === "mbzuoyou") player.changeZhuanhuanji("mbzuoyou");
					if (!storage) {
						await target.draw(3);
						await target.chooseToDiscard(2, true, "h");
					} else {
						if ((get.mode() != "versus" || _status.mode != "two") && target.countCards("h")) await target.chooseToDiscard(target === player ? "佐佑" : `${get.translation(player)}对你发动了【佐佑】`, "请弃置一张手牌，然后获得1点护甲", 1, true);
						await target.changeHujia(1, null, true);
					}
				},
				mark: true,
				marktext: "☯",
				intro: {
					content(storage, player) {
						if (!storage) return "转换技。出牌阶段限一次，你可以令一名角色摸三张牌，然后其弃置两张手牌。";
						return "转换技。出牌阶段限一次，你可以令一名有手牌的角色弃置一张手牌，然后其获得1点护甲。";
					},
				},
				ai: {
					order(item, player) {
						if (
							player.storage.mbzuoyou &&
							game.hasPlayer(current => {
								return current !== player && get.effect(current, "mbzuoyou", player, player) > 0;
							})
						)
							return get.order({ name: "zengbin" }) + 0.1;
						return 2;
					},
					result: {
						target(player, target) {
							let eff = 0;
							if (player.storage.mbzuoyou) eff = target.hujia < 5 ? 1 : 0;
							else eff = 1;
							if (target === player && player.hasSkill("mbshishou")) eff /= 10;
							return eff;
						},
					},
				},
			},
			mbshishou: {
				audio: 2,
				trigger: { player: "useSkillAfter" },
				filter(event, player) {
					return event.skill === "mbzuoyou" && !event.targets.includes(player);
				},
				forced: true,
				async content(event, trigger, player) {
					await lib.skill.mbzuoyou.content(
						{
							target: player,
						},
						{},
						player
					);
				},
				ai: {
					combo: "mbzuoyou",
				},
			},
			//成济
			mbkuangli: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return game.hasPlayer(current => current !== player);
				},
				forced: true,
				group: ["mbkuangli_target", "mbkuangli_remove"],
				async content(event, trigger, player) {
					let targets = game.filterPlayer(current => current !== player).randomSort();
					targets = targets.slice(0, Math.ceil(Math.random() * targets.length));
					targets.sortBySeat();
					player.line(targets, "thunder");
					targets.forEach(current => {
						current.addSkill("mbkuangli_mark");
					});
					await game.asyncDelayx();
				},
				subSkill: {
					target: {
						audio: "mbkuangli",
						trigger: { player: "useCardToPlayered" },
						filter(event, player) {
							return event.target.hasSkill("mbkuangli_mark") && [player, event.target].some(current => current.countCards("he"));
						},
						forced: true,
						logTarget: "target",
						get usable() {
							return get.mode() == "doudizhu" ? 1 : 2;
						},
						async content(event, trigger, player) {
							const target = trigger.target, list = [];
							const playerCards = player.getCards("he", card => {
								return lib.filter.cardDiscardable(card, player, "mbkuangli");
							});
							if (playerCards.length > 0) list.push([player, playerCards.randomGets(1)]);
							const targetCards = target.getCards("he", card => {
								return lib.filter.cardDiscardable(card, target, "mbkuangli");
							});
							if (targetCards.length > 0) list.push([target, targetCards.randomGets(1)]);
							await game.loseAsync({
								lose_list: list,
								discarder: player,
							}).setContent("discardMultiple");
							await game.asyncDelayx();
							await player.draw(2);
							await game.asyncDelayx();
						},
						ai: {
							effect: {
								player(card, player, target, current) {
									if (!target) return;
									const counttrigger = player.storage.counttrigger;
									if (counttrigger && counttrigger.mbkuangli_target && counttrigger.mbkuangli_target >= lib.skill.mbkuangli_target.usable) return;
									if (target.hasSkill("mbkuangli_mark")) {
										if (get.attitude(player, target) > 0) return 0.75;
										return 1.25;
									}
								},
							},
						},
					},
					remove: {
						audio: "mbkuangli",
						trigger: { player: "phaseEnd" },
						filter(event, player) {
							return game.hasPlayer(current => current.hasSkill("mbkuangli_mark"));
						},
						forced: true,
						async content(event, trigger, player) {
							game.countPlayer(current => {
								if (current.hasSkill("mbkuangli_mark")) {
									player.line(current);
									current.removeSkill("mbkuangli_mark");
								}
							});
						},
					},
					mark: {
						mark: true,
						marktext: "戾",
						charlotte: true,
						intro: {
							name: "狂戾",
							name2: "狂戾",
							content: "已拥有“狂戾”标记",
						},
					},
				},
			},
			mbxiongsi: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("h") >= 3;
				},
				limited: true,
				skillAnimation: true,
				animationColor: "fire",
				filterCard: true,
				selectCard: [-1, -2],
				async content(event, trigger, player) {
					player.awakenSkill("mbxiongsi");
					const targets = game.filterPlayer(current => current !== player);
					for (const target of targets) {
						player.line(target, "thunder");
						await target.loseHp();
					}
				},
				ai: {
					order(item, player) {
						if (get.effect(player, "mbxiongsi", player) <= 0) return 1;
						if (
							player.countCards("h") > 3 &&
							player.countCards("h", card => {
								return player.hasValueTarget(card);
							}) > 0
						)
							return 0.1;
						return 8;
					},
					result: {
						player(player) {
							let eff = 0;
							game.countPlayer(current => {
								let effx = get.effect(current, { name: "losehp" }, player, player);
								if (get.attitude(player, current) < -6 && current.getHp() <= 1) effx *= 1.3;
								eff += effx;
							});
							eff *= player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) <= 2 ? 1.5 : 0.35;
							eff -= player
								.getCards("h")
								.map(card => {
									if (lib.filter.cardDiscardable(card, player, "mbxiongsi")) return get.value(card);
									return 0;
								})
								.reduce((p, c) => p + c, 0);
							if (eff > 0) return 2;
							return -1;
						},
					},
				},
			},
			//SP母兵脸
			mbcuizhen: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				filter(event, player) {
					return (
						(event.name != "phase" || game.phaseNumber == 0) &&
						game.hasPlayer(current => {
							return current !== player && current.hasEnabledSlot(1);
						})
					);
				},
				async cost(event, trigger, player) {
					const num = 3;
					event.result = await player
						.chooseTarget(get.prompt("mbcuizhen"), "废除至多" + get.cnNumber(num) +"名其他角色的武器栏", [1, num], (card, player, target) => {
							return target !== player && target.hasEnabledSlot(1);
						})
						.set("ai", target => {
							const player = get.event("player");
							return (1 - get.attitude(player, target)) * Math.sqrt(get.distance(player, target));
						})
						.forResult();
				},
				group: ["mbcuizhen_inphase", "mbcuizhen_draw"],
				async content(event, trigger, player) {
					const targets = event.targets.slice().sortBySeat();
					for (const target of targets) {
						if (target.identityShown) {
							if (get.mode() != "identity" || player.identity != "nei") {
								player.addExpose(0.3);
							}
						}
						await target.disableEquip(1);
					}
					await game.asyncDelay();
				},
				subSkill: {
					inphase: {
						audio: "mbcuizhen",
						trigger: {
							player: "useCardToPlayered",
						},
						filter(event, player) {
							if (!player.isPhaseUsing()) return false;
							if (!get.tag(event.card, "damage")) return false;
							const target = event.target;
							return target !== player && target.countCards("h") >= target.getHp() && target.hasEnabledSlot(1);
						},
						prompt2: "废除其的武器栏",
						logTarget: "target",
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						async content(event, trigger, player) {
							await trigger.target.disableEquip(1);
							await game.asyncDelayx();
						},
					},
					draw: {
						audio: "mbcuizhen",
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						locked: false,
						filter(event, player) {
							return !event.numFixed;
						},
						async content(event, trigger, player) {
							trigger.num += Math.min(
								3,
								game.countPlayer(current => {
									return current.countDisabledSlot(1);
								}) + 1
							);
						},
					},
				},
			},
			mbkuili: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				filter(event, player) {
					return event.source && event.source.isIn() && event.source.hasDisabledSlot(1);
				},
				forced: true,
				async content(event, trigger, player) {
					const source = trigger.source;
					player.line(source, "green");
					await source.enableEquip(1, player);
				},
				ai: {
					neg: true,
					effect: {
						target(card, player, target) {
							if (player && player.isIn() && get.tag(card, "damage") && player.hasDisabledSlot(1)) {
								return [1, 0, 1, 1.5];
							}
						},
					},
				},
			},
			//曹髦  史?! 我求你别改了
			mbqianlong: {
				audio: 6,
				persevereSkill: true,
				trigger: {
					player: ["mbqianlong_beginAfter", "mbqianlong_addAfter", "mbweitongAfter"],
				},
				filter(event, player) {
					let skills = [];
					if (player.additionalSkills && player.additionalSkills.mbqianlong) skills.addArray(player.additionalSkills.mbqianlong);
					return player.countMark("mbqianlong") >= 25 * skills.length;
				},
				forced: true,
				locked: false,
				beginMarkCount: 20,
				maxMarkCount: 99,
				derivation: ["mbcmqingzheng", "mbcmjiushi", "mbcmfangzhu", "mbjuejin"],
				addMark(player, num) {
					num = Math.min(num, lib.skill.mbqianlong.maxMarkCount - player.countMark("mbqianlong"));
					player.addMark("mbqianlong", num);
				},
				group: ["mbqianlong_begin", "mbqianlong_add", "mbqianlong_die"],
				async content(event, trigger, player) {
					const derivation = lib.skill.mbqianlong.derivation,
						skills = player.countMark("mbqianlong") == lib.skill.mbqianlong.maxMarkCount ? derivation : derivation.slice(0, Math.floor(player.countMark("mbqianlong") / 25));
					player.addAdditionalSkill("mbqianlong", skills);
				},
				marktext: "道",
				intro: {
					name: "道心(潜龙)",
					name2: "道心",
					content: "当前道心数为#",
				},
				subSkill: {
					begin: {
						audio: "mbqianlong",
						persevereSkill: true,
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						forced: true,
						locked: false,
						async content(event, trigger, player) {
							const num = game.hasPlayer(current => {
								return current !== player && current.group === "wei" && player.hasZhuSkill("mbweitong", current);
							})
								? 60
								: lib.skill.mbqianlong.beginMarkCount;
							lib.skill.mbqianlong.addMark(player, num);
						},
					},
					add: {
						audio: "mbqianlong",
						persevereSkill: true,
						trigger: {
							player: ["gainAfter", "damageEnd"],
							source: "damageSource",
							global: "loseAsyncAfter",
						},
						filter(event, player) {
							if (player.countMark("mbqianlong") >= lib.skill.mbqianlong.maxMarkCount) return false;
							if (event.name === "damage") return event.num > 0;
							return event.getg(player).length > 0;
						},
						getIndex(event, player, triggername) {
							if (event.name === "damage") return event.num;
							return 1;
						},
						forced: true,
						locked: false,
						async content(event, trigger, player) {
							let toAdd = 5 * (1 + (trigger.name === "damage") + (event.triggername === "damageSource"));
							lib.skill.mbqianlong.addMark(player, toAdd);
						},
					},
					die: {
						trigger: {
							player: "dieBefore",
						},
						charlotte: true,
						firstDo: true,
						forced: true,
						popup: false,
						forceDie: true,
						async content(event, trigger, player) {
							player.changeSkin({ characterName: "mb_caomao" }, "mb_caomao_dead");
						},
					},
				},
			},
			mbweitong: {
				audio: 1,
				persevereSkill: true,
				zhuSkill: true,
				trigger: {
					player: "mbqianlong_beginBegin",
				},
				forced: true,
				locked: false,
				content() {},
				ai: {
					combo: "mbqianlong",
				},
			},
			mbcmqingzheng: {
				audio: "sbqingzheng",
				audioname2: { mb_caomao: "sbqingzheng_mb_caomao", mb_caomao_shadow: "sbqingzheng_mb_caomao", mb_caomao_dead: "sbqingzheng_mb_caomao" },
				persevereSkill: true,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				direct: true,
				content() {
					"step 0";
					var num = 1;
					var prompt = "###" + get.prompt("sbqingzheng") + "###弃置" + get.cnNumber(num) + "种花色的所有牌";
					var next = player.chooseButton([prompt, [lib.suit.map(i => ["", "", "lukai_" + i]), "vcard"]], [num, num + 1]);
					next.set("filterButton", button => {
						var player = _status.event.player;
						if (ui.selected.buttons.length >= get.event().num) return false;
						var cards = player.getCards("h", { suit: button.link[2].slice(6) });
						return cards.length > 0 && cards.filter(card => lib.filter.cardDiscardable(card, player, "sbqingzheng")).length == cards.length;
					});
					next.set("num", num);
					next.set("ai", button => {
						var player = _status.event.player;
						return (
							15 -
							player
								.getCards("h", { suit: button.link[2].slice(6) })
								.map(i => get.value(i))
								.reduce((p, c) => p + c, 0)
						);
					});
					next.set("custom", {
						replace: {
							button: function (button) {
								if (!_status.event.isMine()) return;
								if (button.classList.contains("selectable") == false) return;
								var cards = _status.event.player.getCards("h", {
									suit: button.link[2].slice(6),
								});
								if (cards.length) {
									var chosen = cards.filter(i => ui.selected.cards.includes(i)).length == cards.length;
									if (chosen) {
										ui.selected.cards.removeArray(cards);
										cards.forEach(card => {
											card.classList.remove("selected");
											card.updateTransform(false);
										});
									} else {
										ui.selected.cards.addArray(cards);
										cards.forEach(card => {
											card.classList.add("selected");
											card.updateTransform(true);
										});
									}
								}
								if (button.classList.contains("selected")) {
									ui.selected.buttons.remove(button);
									button.classList.remove("selected");
									if (_status.multitarget || _status.event.complexSelect) {
										game.uncheck();
										game.check();
									}
								} else {
									button.classList.add("selected");
									ui.selected.buttons.add(button);
								}
								var custom = _status.event.custom;
								if (custom && custom.add && custom.add.button) {
									custom.add.button();
								}
								game.check();
							},
						},
						add: next.custom.add,
					});
					"step 1";
					if (result.bool) {
						var cards = result.cards;
						if (!cards.length) {
							var suits = result.links.map(i => i[2].slice(6));
							cards = player.getCards("h", card => suits.includes(get.suit(card, player)));
						}
						event.cards = cards;
						if (!cards.length) event.finish();
						else
							player
								.chooseTarget("清正：观看一名其他角色的手牌并弃置其中一种花色的所有牌", (card, player, target) => {
									return target != player && target.countCards("h");
								})
								.set("ai", target => {
									var player = _status.event.player,
										att = get.attitude(player, target);
									if (att >= 0) return 0;
									return 1 - att / 2 + Math.sqrt(target.countCards("h"));
								});
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("sbqingzheng", target);
						player.discard(cards);
						var list = [];
						var dialog = ["清正：弃置" + get.translation(target) + "一种花色的所有牌"];
						for (var suit of lib.suit.concat("none")) {
							if (target.countCards("h", { suit: suit })) {
								dialog.push('<div class="text center">' + get.translation(suit + "2") + "牌</div>");
								dialog.push(target.getCards("h", { suit: suit }));
								list.push(suit);
							}
						}
						if (list.length) {
							player
								.chooseControl(list)
								.set("dialog", dialog)
								.set("ai", () => {
									return _status.event.control;
								})
								.set(
									"control",
									(() => {
										var getv = cards => cards.map(i => get.value(i)).reduce((p, c) => p + c, 0);
										return list.sort((a, b) => {
											return getv(target.getCards("h", { suit: b })) - getv(target.getCards("h", { suit: a }));
										})[0];
									})()
								);
						}
					} else event.finish();
					"step 3";
					var cards2 = target.getCards("h", { suit: result.control });
					event.cards2 = cards2;
					target.discard(cards2, "notBySelf").set("discarder", player);
					"step 4";
					if (event.cards2.length < cards.length) target.damage();
				},
			},
			mbcmjiushi: {
				audio: "rejiushi",
				inherit: "rejiushi",
				persevereSkill: true,
				group: ["rejiushi1", "mbcmjiushi_check", "mbcmjiushi_turnback", "mbcmjiushi_gain"],
				subSkill: {
					check: {
						trigger: { player: "damageBegin3" },
						silent: true,
						firstDo: true,
						filter(event, player) {
							return player.isTurnedOver();
						},
						content() {
							trigger.mbcmjiushi = true;
						},
					},
					turnback: {
						audio: "rejiushi",
						audioname2: { mb_caomao: "rejiushi_mb_caomao", mb_caomao_shadow: "rejiushi_mb_caomao", mb_caomao_dead: "rejiushi_mb_caomao" },
						persevereSkill: true,
						trigger: { player: "damageEnd" },
						check(event, player) {
							return player.isTurnedOver();
						},
						filter(event, player) {
							// 改回旧版
							return event.mbcmjiushi;
							/*
							if (
								player.hasHistory("useCard", evt => {
									if (evt.card.name != "jiu" || evt.getParent().name != "mbcmjiushi_use") {
										return false;
									}
									return evt.getParent("damage", true) == event;
								})
							) {
								return false;
							}
							return player.isTurnedOver();
							*/
						},
						prompt(event, player) {
							return "是否发动【酒诗】，将武将牌翻面？";
						},
						content() {
							delete trigger.mbcmjiushi;
							player.turnOver();
						},
					},
					gain: {
						audio: "rejiushi",
						audioname2: { mb_caomao: "rejiushi_mb_caomao", mb_caomao_shadow: "rejiushi_mb_caomao", mb_caomao_dead: "rejiushi_mb_caomao" },
						persevereSkill: true,
						trigger: { player: "turnOverAfter" },
						frequent: true,
						prompt: "是否发动【酒诗】，获得牌堆中的一张锦囊牌？",
						content() {
							var card = get.cardPile2(function (card) {
								return get.type2(card) == "trick";
							});
							if (card) player.gain(card, "draw");
						},
					},
				},
			},
			mbcmfangzhu: {
				audio: "sbfangzhu",
				audioname2: { mb_caomao: "sbfangzhu_mb_caomao", mb_caomao_shadow: "sbfangzhu_mb_caomao", mb_caomao_dead: "sbfangzhu_mb_caomao" },
				persevereSkill: true,
				inherit: "sbfangzhu",
				filter(event, player) {
					const target = player.storage.mbcmfangzhu;
					return game.hasPlayer(current => current !== player && (target ? target != current : true));
				},
				usable: 1,
				chooseButton: {
					dialog() {
						const dialog = ui.create.dialog("放逐：令一名其他角色...", "hidden");
						dialog.add([
							[
								[1, "不能使用手牌中的非锦囊牌直到其回合结束"],
								[2, "非Charlotte技能失效直到其回合结束"],
							],
							"textbutton",
						]);
						return dialog;
					},
					check(button) {
						const player = get.player();
						if (button.link === 2) {
							if (
								game.hasPlayer(target => {
									if (target.hasSkill("mbcmfangzhu_ban") || target.hasSkill("fengyin") || target.hasSkill("baiban")) return false;
									return (
										get.attitude(player, target) < 0 &&
										["name", "name1", "name2"]
											.map((sum, name) => {
												if (target[name] && (name != "name1" || target.name != target.name1)) {
													if (get.character(target[name])) return get.rank(target[name], true);
												}
												return 0;
											})
											.reduce((p, c) => {
												return p + c;
											}, 0) > 5
									);
								})
							)
								return 6;
						}
						return button.link === 1 ? 1 : 0;
					},
					backup(links, player) {
						return {
							num: links[0],
							audio: "sbfangzhu",
							audioname2: { mb_caomao: "sbfangzhu_mb_caomao", mb_caomao_shadow: "sbfangzhu_mb_caomao", mb_caomao_dead: "sbfangzhu_mb_caomao" },
							filterCard: () => false,
							selectCard: -1,
							filterTarget(card, player, target) {
								if (target == player) return false;
								const num = lib.skill.mbcmfangzhu_backup.num,
									storage = target.getStorage("mbcmfangzhu_ban"),
									targetx = player.storage.mbcmfangzhu;
								if (target == targetx) return false;
								return num != 1 || !storage.length;
							},
							async content(event, trigger, player) {
								const target = event.target;
								const num = lib.skill.mbcmfangzhu_backup.num;
								player.storage.mbcmfangzhu = target;
								let evt = event.getParent("phaseUse", true);
								if(evt) evt.fangzhuUsed = true;
								player.when("phaseUseEnd").filter(evtx => !evtx.fangzhuUsed).then(() => {
									player.storage.mbcmfangzhu = player;
								});
								switch (num) {
									case 1:
										target.addTempSkill("mbcmfangzhu_ban", { player: "phaseEnd" });
										target.markAuto("mbcmfangzhu_ban", ["trick"]);
										break;
									case 2:
										target.addTempSkill("mbcmfangzhu_baiban", { player: "phaseEnd" });
										break;
								}
							},
							ai: {
								result: {
									target(player, target) {
										switch (lib.skill.mbcmfangzhu_backup.num) {
											case 1:
												return -target.countCards("h", card => get.type(card) != "trick") - 1;
											case 2:
												return -target.getSkills(null, null, false).reduce((sum, skill) => {
													return sum + Math.max(get.skillRank(skill, "out"), get.skillRank(skill, "in"));
												}, 0);
										}
									},
								},
							},
						};
					},
					prompt(links, player) {
						const str = "###放逐###";
						switch (links[0]) {
							case 1:
								return str + "令一名其他角色不能使用手牌中的非锦囊牌直到其回合结束";
							case 2:
								return str + "令一名其他角色的非Charlotte技能失效直到其回合结束";
						}
					},
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							return game.hasPlayer(current => get.attitude(player, current) < 0) ? 1 : 0;
						},
					},
				},
				subSkill: {
					backup: {},
					baiban: {
						inherit: "baiban",
						marktext: "逐",
					},
					ban: {
						charlotte: true,
						onremove: true,
						mark: true,
						marktext: "禁",
						intro: {
							markcount: () => 0,
							content(storage) {
								if (storage.length > 1) return "不能使用手牌";
								return "不能使用手牌中的非" + get.translation(storage[0]) + "牌";
							},
						},
						mod: {
							cardEnabled(card, player) {
								const storage = player.getStorage("mbcmfangzhu_ban");
								const hs = player.getCards("h"),
									cards = [card];
								if (Array.isArray(card.cards)) cards.addArray(card.cards);
								if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) return false;
							},
							cardSavable(card, player) {
								const storage = player.getStorage("mbcmfangzhu_ban");
								const hs = player.getCards("h"),
									cards = [card];
								if (Array.isArray(card.cards)) cards.addArray(card.cards);
								if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) return false;
							},
						},
					},
				},
			},
			mbjuejin: {
				audio: 2,
				persevereSkill: true,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filterCard: () => false,
				selectCard: [-1, -2],
				filterTarget: true,
				selectTarget: -1,
				multiline: true,
				async contentBefore(event, trigger, player) {
					// 临时修改（by 棘手怀念摧毁）
					if (lib.config.effectBGM_mb_caomao)
					game.broadcastAll(() => {
						_status.tempMusic = "effect_caomaoBJM";
						game.playBackgroundMusic();
					});
					
					player.changeSkin({ characterName: "mb_caomao" }, "mb_caomao_shadow");
					player.awakenSkill("mbjuejin");
				},
				async content(event, trigger, player) {
					const target = event.target;
					const delt = target.getHp(true) - 1,
						num = Math.abs(delt);
					if (delt != 0) {
						if (delt > 0) {
							const next = target.changeHp(-delt);
							next._triggered = null;
							await next;
						} else await target.recover(num);
					}
					if (num > 0) await target.changeHujia(num + (player == target ? 2 : 0), null, true);
					else if (player == target) await target.changeHujia(2, null, true);
				},
				async contentAfter(event, trigger, player) {
					game.addGlobalSkill("mbjuejin_xiangsicunwei");
					player.$fullscreenpop("向死存魏！", "thunder");
					const cards = ["cardPile", "discardPile"].map(pos => Array.from(ui[pos].childNodes)).flat();
					const filter = card => ["shan", "tao", "jiu"].includes(card.name);
					const cardx = cards.filter(filter);
					if (cardx.length) {
						await game.cardsGotoSpecial(cardx);
						game.log(cardx, "被移出了游戏");
					}
					for (const target of game.filterPlayer()) {
						const sishis = target.getCards("hej", filter);
						if (sishis.length) await target.lose(sishis);
					}
				},
				ai: {
					order: 0.1,
					result: {
						player(player) {
							let eff = 1;
							game.countPlayer(current => {
								const att = get.attitude(player, current),
									num = Math.abs(current.getHp(true) - 1);
								const delt = Math.max(0, num + current.hujia - 5);
								eff -= att * delt;
							});
							return eff > 0 ? 1 : 0;
						},
					},
				},
				subSkill: {
					xiangsicunwei: {
						trigger: {
							global: ["loseAfter", "equipAfter", "loseAsyncAfter", "cardsDiscardAfter"],
						},
						forced: true,
						silent: true,
						firstDo: true,
						filter(event, player) {
							const nameList = ["shan", "tao", "jiu"];
							return event.getd().some(card => {
								return nameList.includes(get.name(card, false)) && get.position(card, true) === "d";
							});
						},
						async content(event, trigger, player) {
							const nameList = ["shan", "tao", "jiu"];
							const cards = trigger.getd().filter(card => {
								return nameList.includes(get.name(card, false)) && get.position(card, true) === "d";
							});
							await game.cardsGotoSpecial(cards);
							game.log(cards, "被移出了游戏");
						},
					},
				},
			},
			sbqingzheng_mb_caomao: { audio: 2 },
			rejiushi_mb_caomao: { audio: 2 },
			sbfangzhu_mb_caomao: { audio: 2 },
			//杨奉
			mbxuetu: {
				audio: 4,
				enable: "phaseUse",
				usable: 2,
				filter(event, player) {
					if (player.countMark("mbxuetu_status") == 2 && !game.hasPlayer(current => current != player)) return false;
					if (!game.hasPlayer(current => current.isDamaged())) {
						if (player.countMark("mbxuetu_status") == 1 && player.getStorage("mbxuetu_used").includes(1)) return false;
						if (player.countMark("mbxuetu_status") == 0 && !player.storage.mbxuetu) return false;
					}
					if (player.countMark("mbxuetu_status") !== 1 && player.getStat("skill").mbxuetu) return false;
					return true;
				},
				zhuanhuanji2(skill, player) {
					return !player || player.countMark("mbxuetu_status") !== 1;
				},
				position: "he",
				onremove: ["mbxuetu", "mbxuetu_status"],
				derivation: ["mbxuetu_achieve", "mbxuetu_fail"],
				chooseButton: {
					dialog() {
						const dialog = ui.create.dialog("###血途###请选择要执行的项");
						dialog.direct = true;
						return dialog;
					},
					chooseControl(event, player) {
						let list = ["令一名角色回复1点体力", "令一名角色摸两张牌"];
						if (player.countMark("mbxuetu_status") !== 1) {
							list[player.storage.mbxuetu ? "shift" : "pop"]();
						} else {
							list = list.filter((choice, index) => {
								if (index == 0 && !game.hasPlayer(current => current.isDamaged())) return false;
								if (player.countMark("mbxuetu_status") == 2 && current == player) return false;
								return !player.getStorage("mbxuetu_used").includes(index);
							});
						}
					list.push("cancel2");
						return list;
					},
					check() {
						return get.event("controls")[0];
					},
					backup(result, player) {
						return {
							audio: "mbxuetu",
							logAudio(event, player) {
								return player.countMark("mbxuetu_status") == 2 ? ["mbxuetu3.mp3", "mbxuetu4.mp3"] : ["mbxuetu1.mp3", "mbxuetu2.mp3"];
							},
							choice: result.control.includes("回复") ? 0 : 1,
							filterCard: () => false,
							selectCard: -1,
							filterTarget(card, player, target) {
								const { choice } = get.info("mbxuetu_backup");
								if (player.countMark("mbxuetu_status") !== 2 && choice == 0) return target.isDamaged();
								if (player.countMark("mbxuetu_status") == 2) return target != player;
								return true;
							},
							async content(event, trigger, player) {
								const { choice } = get.info("mbxuetu_backup");
								const target = event.targets[0];
								const status = player.countMark("mbxuetu_status");
								player.changeZhuanhuanji("mbxuetu");
								if (status < 2) {
									player.addTempSkill("mbxuetu_used", "phaseUseAfter");
									player.markAuto("mbxuetu_used", [choice]);
									if (!choice) {
										await target.recover();
									} else {
										await target.draw(2);
									}
								} else {
									if (!choice) {
										await player.recover();
										await target.chooseToDiscard(2, true, "he");
									} else {
										await player.draw();
										await target.damage();
									}
								}
							},
							ai: {
								result: {
									target(player, target) {
										const { choice } = get.info("mbxuetu_backup");
										const status = player.countMark("mbxuetu_status");
										if (status > 1) {
											if (player.storage.mbxuetu) return get.damageEffect(target, player, target) / 10;
											return -2;
										}
										if (choice === 1) return 2;
										const eff = get.recoverEffect(target, player, player);
										return eff > 0 ? 2 : eff < 0 ? -get.sgnAttitude(player, target) : 0;
									},
									player(player, target) {
										const status = player.countMark("mbxuetu_status");
										if (status > 1) {
											if (player.storage.mbxuetu) return 1;
											return get.recoverEffect(player, player) / 6;
										}
										return 0;
									},
								},
							},
						};
					},
					prompt(result, player) {
						const { choice } = get.info("mbxuetu_backup");
						const status = player.countMark("mbxuetu_status");
						let str = "";
						if (status < 2) {
							str += "令一名角色" + (choice ? "摸两张牌" : "回复1点体力");
						} else {
							str += choice ? "摸一张牌，然后对一名其他角色造成1点伤害" : "回复1点体力，然后令一名其他角色弃置两张牌";
						}
						return `###血途###<div class="text center">${str}</div>`;
					},
				},
				mark: true,
				marktext: "☯",
				intro: {
					content: (storage, player) => {
						if (!player.countMark("mbxuetu_status")) {
							if (storage) return "转换技。出牌阶段限一次，你可以令一名角色摸两张牌。";
							return "转换技。出牌阶段限一次，你可以令一名角色回复1点体力。";
						} else {
							if (storage) return "转换技。出牌阶段限一次，你可以摸一张牌，然后对一名其他角色造成1点伤害。";
							return "转换技。出牌阶段限一次，你可以回复1点体力，然后令一名其他角色弃置两张牌。";
						}
					},
				},
				ai: {
					order(item, player) {
						const status = player.countMark("mbxuetu_status");
						if (status > 1) return Math.max(get.order({ name: "guohe" }), get.order({ name: "chuqibuyi" }));
						if (status === 1 || player.storage.mbxuetu) return 9;
						return 2;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
					backup: {},
				},
			},
			mbweiming: {
				audio: 3,
				dutySkill: true,
				locked: true,
				group: ["mbweiming_achieve", "mbweiming_fail", "mbweiming_effect"],
				intro: {
					content: "已记录$",
				},
				subSkill: {
					effect: {
						audio: "mbweiming1.mp3",
						trigger: {
							player: "phaseUseBegin",
						},
						filter(event, player) {
							return game.hasPlayer(current => {
								return !player.getStorage("mbweiming").includes(current) && current != player;
							});
						},
						locked: true,
						async cost(event, trigger, player) {
							const targets = game.filterPlayer(current => !player.getStorage("mbweiming").includes(current) && current != player);
							if (targets.length == 1) {
								event.result = { bool: true, targets: targets };
							}
							else {
								event.result = await player
									.chooseTarget("威命：记录一名未记录过的其他角色", "当你杀死没有被记录过的角色后，则〖威命〗使命成功；如果在你杀死这些角色中的一名之前，有被记录过的角色死亡，则你〖威命〗使命失败。", true)
									.set("filterTarget", (card, player, target) => {
										return !player.getStorage("mbweiming").includes(target) && target != player;
									})
									.set("ai", target => {
										if (target === player) return 1;
										return 1 + (Math.sqrt(Math.abs(get.attitude(player, target))) * Math.abs(get.threaten(target))) / Math.sqrt(target.getHp() + 1) / Math.sqrt(target.countCards("hes") + 1);
									})
									.forResult();
							}
						},
						async content(event, trigger, player) {
							const targets = event.targets;
							// 临时修改（by 棘手怀念摧毁）
							if (targets && targets.length) player.markAuto("mbweiming", targets[0]);
							// if (targets?.length) player.markAuto("mbweiming", targets[0]);
						},
					},
					achieve: {
						audio: "mbweiming2.mp3",
						trigger: {
							source: "dieAfter",
						},
						filter(event, player) {
							return !player.getStorage("mbweiming").includes(event.player);
						},
						dutySkill: true,
						forced: true,
						skillAnimation: true,
						animationColor: "fire",
						async content(event, trigger, player) {
							game.log(player, "成功完成使命");
							player.awakenSkill("mbweiming");
							player.storage.mbxuetu_status = 1;
							player.unmarkSkill("mbxuetu");
							await game.asyncDelayx();
						},
					},
					fail: {
						audio: "mbweiming3.mp3",
						trigger: {
							global: "dieAfter",
						},
						filter(event, player) {
							return player.getStorage("mbweiming").includes(event.player);
						},
						dutySkill: true,
						forced: true,
						async content(event, trigger, player) {
							game.log(player, "使命失败");
							player.awakenSkill("mbweiming");
							player.storage.mbxuetu_status = 2;
							await game.asyncDelayx();
						},
					},
				},
				ai: {
					combo: "mbxuetu",
				},
			},
			//霍骏
			sidai: {
				audio: "twsidai",
				enable: "phaseUse",
				usable: 1,
				locked: false,
				limited: true,
				skillAnimation: true,
				animationColor: "fire",
				filter: function (event, player) {
					var cards = player.getCards("h", { type: "basic" });
					if (!cards.length) return false;
					for (var i of cards) {
						if (!game.checkMod(i, player, "unchanged", "cardEnabled2", player)) return false;
					}
					return event.filterCard(get.autoViewAs({ name: "sha", storage: { sidai: true } }, cards), player, event);
				},
				viewAs: { name: "sha", storage: { sidai: true } },
				filterCard: { type: "basic" },
				selectCard: -1,
				check: () => 1,
				onuse: function (result, player) {
					player.awakenSkill("sidai");
					player.addTempSkill("sidai_tao");
					player.addTempSkill("sidai_shan");
				},
				ai: {
					order: function (item, player) {
						return get.order({ name: "sha" }, player) + 0.1;
					},
					result: {
						target: function (player, target) {
							var cards = ui.selected.cards.slice(0);
							var names = [];
							for (var i of cards) names.add(i.name);
							if (names.length < player.hp) return 0;
							if (player.hasUnknown() && (player.identity != "fan" || !target.isZhu)) return 0;
							if (get.attitude(player, target) >= 0) return -20;
							return lib.card.sha.ai.result.target.apply(this, arguments);
						},
					},
				},
				subSkill: {
					tao: {
						trigger: { source: "damageSource" },
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.sidai || !event.player.isIn()) return false;
							for (var i of event.cards) {
								if (i.name == "tao") return true;
							}
							return false;
						},
						forced: true,
						popup: false,
						content: function () {
							trigger.player.loseMaxHp();
						},
					},
					shan: {
						trigger: { player: "useCardToPlayered" },
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.sidai || !event.target.isIn()) return false;
							for (var i of event.cards) {
								if (i.name == "shan") return true;
							}
							return false;
						},
						forced: true,
						popup: false,
						content: function () {
							"step 0";
							trigger.target.chooseToDiscard("h", { type: "basic" }, "弃置一张基本牌，否则不能响应" + get.translation(trigger.card)).set("ai", function (card) {
								var player = _status.event.player;
								if (
									player.hasCard("hs", function (cardx) {
										return cardx != card && get.name(cardx, player) == "shan";
									})
								)
									return 12 - get.value(card);
								return 0;
							});
							"step 1";
							if (!result.bool) trigger.directHit.add(trigger.target);
						},
					},
				},
			},
			jieyu: {
				audio: "twjieyu",
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					for (let i = 0; i < ui.discardPile.childElementCount; i++) {
						if (get.type(ui.discardPile.childNodes[i], false) == "basic") return true;
					}
					return false;
				},
				prompt2: function (event, player) {
					const num = lib.skill.jieyu.getNum(player);
					return "获得弃牌堆中" + get.cnNumber(num) + "张" + (num > 1 ? "牌名各不相同的" : "") + "基本牌";
				},
				async content(event, trigger, player) {
					const num = lib.skill.jieyu.getNum(player, event);
					let gains = [],
						names = [];
					for (let i = 0; i < ui.discardPile.childElementCount; i++) {
						let card = ui.discardPile.childNodes[i];
						if (get.type(card, null, false) == "basic" && !names.includes(card.name)) {
							gains.push(card);
							names.push(card.name);
						}
					}
					if (gains.length) player.gain(gains.randomGets(Math.min(gains.length, num)), "gain2");
				},
				getNum: function (player, event) {
					//let num = get.mode() == "identity" ? 3 : 4;
					let num = 3;
					const history = game.getAllGlobalHistory("everything");
					for (let i = history.length - 1; i >= 0; i--) {
						const evt = history[i];
						if (evt.name == "jieyu" && evt.player == player) {
							if (!event || evt != event) break;
						}
						if (evt.name == "useCard" && evt.player != player && evt.targets && evt.targets.includes(player) && get.tag(evt.card, "damage")) {
							num--;
							if (num == 1) break;
						}
					}
					return num;
				},
			},
			//木鹿大王
			shoufa: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter: function (event, player, name) {
					if (name == "damageSource" && player.getHistory("sourceDamage").indexOf(event) != 0) return false;
					return game.hasPlayer(target => {
						const num = get.mode() == "doudizhu" ? 1 : 2;
						if (name == "damageEnd" && get.distance(player, target) <= num) return false;
						if (name == "damageSource" && get.distance(player, target) > num) return false;
						const zhoufa = player.storage.zhoulin_zhoufa;
						if (!zhoufa) return true;
						if (zhoufa == "豹" || zhoufa == "兔") return true;
						if (zhoufa == "鹰") return target.countCards("he");
						return target.countDiscardableCards(player, "e");
					});
				},
				direct: true,
				async content(event, trigger, player) {
					const zhoufa = player.storage.zhoulin_zhoufa;
					const str = zhoufa ? ["令其受到1点无来源伤害", "你随机获得其一张牌", "你随机弃置其装备区的一张牌", "令其摸一张牌"][["豹", "鹰", "熊", "兔"].indexOf(zhoufa)] : "令其随机执行一个效果";
					const nodoudizhu = get.mode() == "doudizhu" ? "距离" + (event.triggername == "damageEnd" ? "" : "不") + "大于1的" : "距离" + (event.triggername == "damageEnd" ? "" : "不") + "大于2的";
					const {
						result: { bool, targets },
					} = await player
						.chooseTarget(get.prompt("shoufa"), "选择一名" + nodoudizhu + "角色，" + str, (card, player, target) => {
							const name = _status.event.triggername;
							const num = get.mode() == "doudizhu" ? 1 : 2;
							if (name == "damageEnd" && get.distance(player, target) <= num) return false;
							if (name == "damageSource" && get.distance(player, target) > num) return false;
							const zhoufa = player.storage.zhoulin_zhoufa;
							if (!zhoufa) return true;
							if (zhoufa == "豹" || zhoufa == "兔") return true;
							if (zhoufa == "鹰") return target.countCards("he");
							return target.countDiscardableCards(player, "e");
						})
						.set("ai", target => {
							const player = _status.event.player;
							const zhoufa = player.storage.zhoulin_zhoufa;
							if (!zhoufa) return -get.attitude(player, target);
							switch (zhoufa) {
								case "豹":
									return get.damageEffect(target, player, player);
								case "鹰":
									return get.effect(target, { name: "guohe_copy2" }, player, player);
								case "熊":
									let att = get.attitude(player, target),
										eff = 0;
									target.getCards("e", card => {
										var val = get.value(card, target);
										eff = Math.max(eff, -val * att);
									});
									return eff;
								case "兔":
									return get.effect(target, { name: "draw" }, player, player);
							}
						})
						.set("triggername", event.triggername);
					if (!bool) return;
					const target = targets[0];
					player.logSkill("shoufa", target);
					const shoufa = zhoufa ? zhoufa : ["豹", "鹰", "熊", "兔"].randomGet();
					game.log(target, "执行", "#g" + shoufa, "效果");
					switch (shoufa) {
						case "豹":
							target.damage("nosource");
							break;
						case "鹰":
							player.gain(target.getGainableCards(player, "he").randomGet(), target, "giveAuto");
							break;
						case "熊":
							target.discard(target.getGainableCards(player, "e").randomGet()).discarder = player;
							break;
						case "兔":
							target.draw();
							break;
					}
				},
			},
			yuxiang: {
				mod: {
					globalFrom(from, to, distance) {
						if (from.hujia > 0) return distance - 1;
					},
					globalTo(from, to, distance) {
						if (to.hujia > 0) return distance + 1;
					},
				},
				audio: true,
				trigger: { player: "damageBegin2" },
				filter: function (event, player) {
					return player.hujia > 0 && event.hasNature("fire");
				},
				forced: true,
				async content(event, trigger, player) {
					trigger.num++;
				},
				ai: {
					combo: "zhoulin"
				},
			},
			zhoulin: {
				audio: 2,
				limited: true,
				unique: true,
				enable: "phaseUse",
				skillAnimation: true,
				animationColor: "fire",
				async content(event, trigger, player) {
					player.awakenSkill("zhoulin");
					player.changeHujia(2, null, true);
					const {
						result: { control },
					} = await player
						.chooseControl("豹", "鹰", "熊", "兔")
						.set("ai", () => "豹")
						.set("prompt", "选择一个固定效果");
					if (control) {
						player.popup(control);
						game.log(player, "选择了", "#g" + control, "效果");
						player.addTempSkill("zhoulin_zhoufa");
						player.storage.zhoulin_zhoufa = control;
						player.markSkill("zhoulin_zhoufa");
						game.broadcastAll(
							function (player, zhoufa) {
								if (player.marks.zhoulin_zhoufa) player.marks.zhoulin_zhoufa.firstChild.innerHTML = zhoufa;
							},
							player,
							control
						);
					}
				},
				ai: {
					order: 12,
					result: { player: 1 },
				},
				subSkill: {
					zhoufa: {
						charlotte: true,
						onremove: true,
						intro: { content: "已选择$效果" },
					},
				},
			},
			//陈珪
			guimou: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: ["enterGame", "phaseEnd", "phaseZhunbeiBegin"],
				},
				filter: function (event, player, name) {
					if (event.name == "phaseZhunbei" || name == "phaseEnd") return true;
					return event.name != "phase" || game.phaseNumber == 0;
				},
				direct: true,
				locked: true,
				content: function* (event, map) {
					var player = map.player,
						trigger = map.trigger;
					if (trigger.name != "phaseZhunbei") {
						player.logSkill("guimou");
						var result,
							choiceList = ["惩罚期间使用牌最少的角色", "惩罚期间弃置牌最少的角色", "惩罚期间得到牌最少的角色"];
						if (trigger.name != "phase" || game.phaseNumber == 0) result = { index: get.rand(0, 2) };
						else
							result = yield player
								.chooseControl()
								.set("choiceList", choiceList)
								.set("ai", () => get.rand(0, 2));
						var str = choiceList[result.index];
						game.log(player, "选择", "#g" + str);
						player.addSkill("guimou_" + result.index);
						return;
					}
					var targets = [];
					for (var i = 0; i <= 2; i++) {
						var skill = "guimou_" + i;
						if (player.hasSkill(skill)) {
							var storage = player.storage[skill],
								nums = storage[0].slice();
							var targetx = nums.sort((a, b) => storage[1][storage[0].indexOf(a)] - storage[1][storage[0].indexOf(b)]);
							targetx = targetx.filter(target => storage[1][storage[0].indexOf(target)] == storage[1][storage[0].indexOf(targetx[0])]);
							targets.addArray(targetx);
							player.removeSkill(skill);
						}
					}
					targets = targets.filter(target => target != player && target.countCards("h"));
					if (targets.length) {
						var result = yield player
							.chooseTarget(
								"请选择【诡谋】的目标",
								"观看一名可选择的角色的手牌并选择其中一张牌，然后你可以此牌交给另一名其他角色或弃置此牌",
								(card, player, target) => {
									return _status.event.targets.includes(target) && target.countCards("h");
								},
								true
							)
							.set("ai", target => {
								return Math.sqrt(Math.min(3, target.countCards("h"))) * get.effect(target, { name: "guohe_copy2" }, player, player);
							})
							.set("targets", targets);
						if (result.bool) {
							var target = result.targets[0];
							player.logSkill("guimou", target);
							player.addExpose(0.3);
							var result2 = yield player
								.choosePlayerCard(target, "h", "visible", true)
								.set("ai", button => {
									return get.value(button.link);
								})
								.set("prompt", "诡谋：请选择" + get.translation(target) + "的一张手牌")
								.set("prompt2", '<div class="text center">将选择的牌交给另一名其他角色或弃置此牌</div>');
							if (result2.bool) {
								var cards = result2.links.slice(),
									result3;
								if (!game.hasPlayer(targetx => targetx != player && targetx != target)) result3 = { bool: false };
								else
									result3 = yield player
										.chooseTarget("是否令另一名其他角色获得" + get.translation(cards) + "？", (card, player, target) => {
											return target != player && target != _status.event.target;
										})
										.set("ai", target => get.attitude(_status.event.player, target))
										.set("target", target);
								if (result3.bool) {
									var targetx = result3.targets[0];
									player.line(targetx);
									targetx.gain(cards, target, "give");
								} else target.discard(cards).discarder = player;
							}
						}
					}
				},
				subSkill: {
					0: {
						charlotte: true,
						onremove: true,
						init: function (player, skill) {
							if (!player.storage[skill]) {
								player.storage[skill] = [[], []];
								var targets = game.filterPlayer().sortBySeat(player);
								targets.forEach(target => {
									player.storage[skill][0].push(target);
									player.storage[skill][1].push(0);
								});
							}
						},
						mark: true,
						intro: {
							markcount: storage => 0,
							content: function (storage, player) {
								var str = "当前使用牌数排行榜";
								var lose = storage[1].slice().sort((a, b) => a - b)[0];
								storage[0].forEach(target => {
									str += "<br><li>";
									var score = storage[1][storage[0].indexOf(target)];
									if (score == lose) str += "<span class='texiaotext' style='color:#FF0000'>";
									str += " " + get.translation(target) + " ";
									str += score + "张";
									if (score == lose) str += "</span>";
								});
								return str;
							},
						},
						trigger: { global: "useCard1" },
						forced: true,
						popup: false,
						content: function () {
							var storage = player.storage["guimou_0"];
							if (!storage[0].includes(trigger.player)) {
								storage[0].push(trigger.player);
								storage[1].push(0);
							}
							storage[1][storage[0].indexOf(trigger.player)]++;
						},
					},
					1: {
						charlotte: true,
						onremove: true,
						init: function (player, skill) {
							if (!player.storage[skill]) {
								player.storage[skill] = [[], []];
								var targets = game.filterPlayer().sortBySeat(player);
								targets.forEach(target => {
									player.storage[skill][0].push(target);
									player.storage[skill][1].push(0);
								});
							}
						},
						mark: true,
						intro: {
							markcount: storage => 0,
							content: function (storage, player) {
								var str = "当前弃置牌数排行榜";
								var lose = storage[1].slice().sort((a, b) => a - b)[0];
								storage[0].forEach(target => {
									str += "<br><li>";
									var score = storage[1][storage[0].indexOf(target)];
									if (score == lose) str += "<span class='texiaotext' style='color:#FF0000'>";
									str += " " + get.translation(target) + " ";
									str += score + "张";
									if (score == lose) str += "</span>";
								});
								return str;
							},
						},
						trigger: { global: ["loseAfter", "loseAsyncAfter"] },
						filter: function (event, player) {
							return event.type == "discard" && game.hasPlayer(target => event.getl(target).cards2.length);
						},
						forced: true,
						popup: false,
						content: function () {
							var storage = player.storage["guimou_1"];
							var targets = game.filterPlayer(target => trigger.getl(target).cards2.length);
							targets.forEach(target => {
								if (!storage[0].includes(target)) {
									storage[0].push(target);
									storage[1].push(0);
								}
								storage[1][storage[0].indexOf(target)] += trigger.getl(target).cards2.length;
							});
						},
					},
					2: {
						charlotte: true,
						onremove: true,
						init: function (player, skill) {
							if (!player.storage[skill]) {
								player.storage[skill] = [[], []];
								var targets = game.filterPlayer().sortBySeat(player);
								targets.forEach(target => {
									player.storage[skill][0].push(target);
									player.storage[skill][1].push(0);
								});
							}
						},
						mark: true,
						intro: {
							markcount: storage => 0,
							content: function (storage, player) {
								var str = "当前得到牌数排行榜";
								var lose = storage[1].slice().sort((a, b) => a - b)[0];
								storage[0].forEach(target => {
									str += "<br><li>";
									var score = storage[1][storage[0].indexOf(target)];
									if (score == lose) str += "<span class='texiaotext' style='color:#FF0000'>";
									str += " " + get.translation(target) + " ";
									str += score + "张";
									if (score == lose) str += "</span>";
								});
								return str;
							},
						},
						trigger: { global: ["gainAfter", "loseAsyncAfter"] },
						forced: true,
						popup: false,
						content: function () {
							var storage = player.storage["guimou_2"];
							var targets = game.filterPlayer(target => trigger.getg(target).length);
							targets.forEach(target => {
								if (!storage[0].includes(target)) {
									storage[0].push(target);
									storage[1].push(0);
								}
								storage[1][storage[0].indexOf(target)] += trigger.getg(target).length;
							});
						},
					},
				},
			},
			zhouxian: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					return event.player != player && get.tag(event.card, "damage");
				},
				forced: true,
				logTarget: "player",
				content: function* (event, map) {
					var player = map.player,
						trigger = map.trigger,
						target = trigger.player;
					var cards = get.cards(3);
					yield game.cardsDiscard(cards);
					player.showCards(cards, get.translation(player) + "发动了【州贤】");
					var result = yield target
						.chooseToDiscard("he", "州贤：弃置一张其中有的类别的牌，或令此牌对" + get.translation(player) + "无效", (card, player) => {
							return _status.event.cards.some(cardx => get.type2(cardx) == get.type2(card));
						})
						.set("cards", cards)
						.set("ai", card => {
							if (!_status.event.goon) return 0;
							return 7.5 - get.value(card);
						})
						.set("goon", get.effect(player, trigger.card, target, target) > 0);
					if (!result || !result.bool) trigger.getParent().excluded.add(player);
				},
				ai: {
					effect: {
						target_use: function (card, player, target, current) {
							if (get.tag(card, "damage") && get.attitude(player, target) < 0 && target != player) {
								if (_status.event.name == "zhouxian") return;
								if (get.attitude(player, target) > 0 && current < 0) return "zerotarget";
								var bs = player.getDiscardableCards(player, "he");
								bs.remove(card);
								if (card.cards) bs.removeArray(card.cards);
								else bs.removeArray(ui.selected.cards);
								var cardx = Array.from(ui.cardPile.childNodes).slice(0, 3);
								bs = bs.filter(i => cardx.some(j => get.type2(j) == get.type2(i)));
								if (!bs.length) return "zerotarget";
								if (bs.length <= 2) {
									if (bs.some(bsi => get.value(bsi) < 7)) return [1, 0, 1, -0.5];
									return [1, 0, 0.3, 0];
								}
								return [1, 0, 1, -0.5];
							}
						},
					},
				},
			},
			//胡班
			mbyilie: {
				audio: 3,
				trigger: { global: "phaseBefore", player: "enterGame" },
				filter: function (event, player) {
					return !player.storage.mbyilie2 && (event.name != "phase" || game.phaseNumber == 0);
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("mbyilie"), lib.filter.notMe, true).set("ai", function (target) {
						let player = _status.event.player;
						return Math.max(1 + get.attitude(player, target) * get.threaten(target), Math.random());
					}).set("animate", false);
					"step 1";
					if (result.bool) {
						let target = result.targets[0];
						player.logSkill("mbyilie");
						player.storage.mbyilie2 = target;
						player.addSkill("mbyilie2");
						
						const func = (player, target) => {
							target.markSkillCharacter("mbyilie2", player, "义烈", `${get.translation(player)}决定追随于你`, true);
						};
						if (event.isMine()) func(player, target);
						else if (player.isOnline2()) player.send(func, player, target);
					}
				},
				marktext: "烈",
				intro: {
					name2: "烈",
					content: "mark",
				},
				group: "mbyilie3",
			},
			mbyilie2: {
				charlotte: true,
				audio: "mbyilie",
				trigger: { global: ["damageBegin4", "damageSource"] },
				sourceSkill: "mbyilie",
				filter: function (event, player, name) {
					var target = player.storage.mbyilie2;
					if (name == "damageSource") return event.source == target && event.player != player && player.isDamaged();
					return event.player == target && !player.countMark("mbyilie");
				},
				forced: true,
				logTarget: function (event, player) {
					return player.storage.mbyilie2;
				},
				content: function () {
					if (event.triggername == "damageSource") player.recover();
					else {
						event.targets[0].markSkillCharacter("mbyilie2", player, "义烈", `${get.translation(player)}决定追随于你`);
						player.addMark("mbyilie", trigger.num);
						trigger.cancel();
					}
				},
			},
			mbyilie3: {
				audio: "mbyilie",
				trigger: { player: "phaseEnd" },
				sourceSkill: "mbyilie",
				filter: function (event, player) {
					return player.hasMark("mbyilie");
				},
				forced: true,
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					var num = player.countMark("mbyilie");
					if (num) {
						player.loseHp(num);
						player.removeMark("mbyilie", num);
					}
				},
			},
			//向朗
			naxue: {
				audio: 2,
				trigger: { player: "phaseUseBefore" },
				check: function (event, player) {
					var cards = player.getCards("h", card => player.hasValueTarget(card));
					if (!cards.length) return true;
					if (!(player.hp >= 2 && player.countCards("h") <= player.hp + 1)) return false;
					return game.hasPlayer(function (target) {
						if (target.hasJudge("lebu") || target == player) return false;
						if (get.attitude(player, target) > 4) {
							return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards("h") + 1) > 0;
						}
						return false;
					});
				},
				content: function* (event, map) {
					var player = map.player;
					map.trigger.cancel();
					var num = player.countDiscardableCards(player, "he");
					if (num) {
						var result = yield player.chooseToDiscard("纳学：是否弃置任意张牌并摸等量的牌？", "he", [1, num]).set("ai", lib.skill.zhiheng.check);
						if (result.bool) yield player.draw(result.cards.length);
					}
					if (player.countCards("h")) {
						var result2 = yield player.chooseCardTarget({
							prompt: "是否交给至多两名其他角色各一张手牌？",
							prompt2: "先按顺序选中所有要给出的牌，然后再按顺序选择等量的目标角色。",
							selectCard: [1, 2],
							filterCard: true,
							filterTarget: lib.filter.notMe,
							selectTarget: function () {
								return ui.selected.cards.length;
							},
							filterOk: () => {
								return ui.selected.cards.length == ui.selected.targets.length;
							},
							position: "h",
							ai1: function (card) {
								if (card.name == "du") return 10;
								else if (ui.selected.cards.length && ui.selected.cards[0].name == "du") return 0;
								var player = _status.event.player;
								if (
									ui.selected.cards.length > 4 ||
									!game.hasPlayer(function (current) {
										return get.attitude(player, current) > 0 && !current.hasSkillTag("nogain");
									})
								)
									return 0;
								return 1 / Math.max(0.1, get.value(card));
							},
							ai2: function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (ui.selected.cards[0].name == "du") return -att;
								if (target.hasSkillTag("nogain")) att /= 6;
								return att;
							},
						});
						if (result2.bool) {
							const list = [];
							for (let i = 0; i < result2.targets.length; i++) {
								list.push([result2.targets[i], result2.cards[i]]);
								player.line(result2.targets[i]);
							}
							game.loseAsync({
								gain_list: list,
								player: player,
								cards: result2.cards,
								giver: player,
								animate: "giveAuto",
							}).setContent("gaincardMultiple");
						}
					}
				},
			},
			yijie: {
				audio: 2,
				trigger: { player: "die" },
				filter: function (event, player) {
					return game.hasPlayer(target => target != player);
				},
				forced: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "orange",
				logTarget: function (event, player) {
					return game.filterPlayer(target => target != player);
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(target => target != player);
					var sum = targets.reduce((num, target) => (num += target.hp), 0);
					sum = Math.max(1, Math.floor(sum / targets.length));
					event.num = sum;
					event.targets = targets;
					"step 1";
					var target = targets.shift();
					var delta = target.hp - num;
					if (delta != 0) {
						target[delta > 0 ? "loseHp" : "recover"](Math.abs(delta));
					}
					if (targets.length) event.redo();
				},
			},
			//阎象
			kujian: {
				audio: "twkujian",
				inherit: "twkujian",
				selectCard: [1, 2],
				logAudio: () => "twkujian1.mp3",
				content: function () {
					player.give(cards, target).gaintag.add("twkujianx");
					player.addSkill("kujian_discard");
				},
				subSkill: {
					discard: {
						trigger: {
							global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						forced: true,
						getIndex(event, player) {
							let list=[],players=game.filterPlayer().sortBySeat();
							for(const current of players){
								let bool = ["useCard","respond"].includes(event.getParent().name);
								if(current == player) continue;
								var evt = event.getl(current);
								if (!evt || !evt.hs || !evt.hs.length) continue;
								if (event.name == "lose") {
									for (var i in event.gaintag_map) {
										if (event.gaintag_map[i].includes("twkujianx")) list.push([current,bool]);
									}
									continue;
								}
								current.getHistory("lose", evt=>{
									if (event != evt.getParent()) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes("twkujianx")) list.push([current,bool]);
									}
								});
							}
							return list;
						},
						charlotte: true,
						logTarget(event,player,name,data){
							return data[0];
						},
						logAudio(event, player, name, data) {
							let type = data[1];
							if (type) {
								return "twkujian2.mp3";
							}
							return "twkujian3.mp3";
						},
						async content(event,trigger,player) {
							const target=event.targets[0];
							const type=event.indexedData[1];
							if(type) await game.asyncDraw([player,target],2);
							else{
								if(player.countCards("h")) await player.chooseToDiscard(1,true,"h");
								if(target.countCards("h")) await target.chooseToDiscard(1,true,"h");
							}
						},
					},
				},
			},
			ruilian: {
				audio: "twruilian",
				trigger: { global: "roundStart" },
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(get.prompt2("ruilian")).set("ai", target => {
						let player = _status.event.player,
							att = get.attitude(player, target),
							eff = att / (player == target ? 2 : 1) + 1;
						if (att >= 0) {
							if (target.hasSkill("yongsi")) return eff * 5;
							if (target.hasSkill("zhiheng") || target.hasSkill("rezhiheng")) return eff * 4;
							if (target.hasSkill("rekurou")) return eff * 3;
							if (target.hasSkill("xinlianji") || target.hasSkill("dclianji")) return eff * 2;
							if (target.needsToDiscard()) return eff * 1.5;
							return eff;
						}
						return 0;
					}).forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.addSkill("ruilian_target");
					player.markAuto("ruilian_target", [target]);
				},
				subSkill: {
					target: {
						onremove: true,
						intro: { content: "已选择$" },
						trigger: { global: "phaseEnd" },
						filter: function (event, player) {
							return player.getStorage("ruilian_target").includes(event.player);
						},
						direct: true,
						charlotte: true,
						async content(event, trigger, player) {
							const target = trigger.player;
							let cards = [];
							player.removeSkill("ruilian_target");
							target.getHistory("lose", evt => {
								if (evt.type == "discard") cards.addArray(evt.cards2);
							});
							if (!cards.length) return;
							let list = [];
							for (let type of ["basic", "trick", "equip"]) {
								for (let card of cards) {
									if (get.type2(card) == type) {
										list.push(type);
										break;
									}
								}
							}
							list.push("cancel2");
							const result = await player
								.chooseControl(list)
								.set("prompt", "睿敛：是否与" + get.translation(target) + "各获得一种类型的牌？")
								.set("ai", function () {
									let player = _status.event.player,
										list = _status.event.controls;
									if (player.hp <= 3 && !player.countCards("h", { name: ["shan", "tao"] }) && list.includes("basic")) return "basic";
									if (player.countCards("he", { type: "equip" }) < 2 && list.includes("equip")) return "equip";
									if (list.includes("trick")) return "trick";
									return list.remove("cancel2").randomGet();
								})
								.forResult();
							if (result.control != "cancel2") {
								player.logSkill("ruilian_target", target);
								let type = result.control;
								list = [target, player].sortBySeat(_status.currentPhase);
								cards = [];
								for (let current of list) {
									let card = get.discardPile(function (card) {
										return get.type2(card) == type && !cards.includes(card);
									});
									if (card) {
										cards.push(card);
										await current.gain(card, "gain2");
									}
								}
							}
						},
					}
				}
			},
			//手杀差异化孙鲁育
			mbmumu: {
				audio: "mumu",
				inherit: "new_mumu",
				filter: function (event, player) {
					return game.hasPlayer(current => {
						return current.countCards("e") > 0;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("mbmumu"), "弃置场上的一张装备牌，或者获得场上的一张防具牌。", function (card, player, target) {
							return target.countCards("e") > 0;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (target.getEquip(2) && player.hasEmptySlot(2)) {
								return -2 * att;
							}
							return -att;
						});
					"step 1";
					if (result.bool && result.targets && result.targets.length) {
						event.target = result.targets[0];
						player.logSkill("mbmumu", event.target);
						player.line(event.target, "green");
						var e = event.target.getEquips(2);
						event.e = e;
						if (e.length > 0) {
							player.chooseControl("弃置一张装备牌", "获得一张防具牌").set("ai", function () {
								if (_status.event.player.getEquips(2).length > 0) {
									return "弃置一张装备牌";
								}
								return "获得一张防具牌";
							});
						} else {
							event.choice = "弃置一张装备牌";
						}
					} else event.finish();
					"step 2";
					var choice = event.choice || result.control;
					if (choice == "弃置一张装备牌") {
						player.discardPlayerCard(event.target, "e", true);
					} else {
						if (event.e) {
							player.gain(event.e, event.target, "give", "bySelf");
							player.addTempSkill("new_mumu2");
						}
					}
				},
			},
			mbmeibu: {
				inherit: "new_meibu",
				derivation: ["mbzhixi"],
				content: function () {
					"step 0";
					var check = lib.skill.new_meibu.checkx(trigger, player);
					player
						.chooseToDiscard(get.prompt2("mbmeibu", trigger.player), "he")
						.set("ai", function (card) {
							if (_status.event.check) return 6 - get.value(card);
							return 0;
						})
						.set("check", check)
						.set("logSkill", ["mbmeibu", trigger.player]);
					"step 1";
					if (result.bool) {
						var target = trigger.player;
						var card = result.cards[0];
						player.line(target, "green");
						target.addTempSkills("mbzhixi", "phaseUseAfter");
						if (card.name != "sha" && !(get.type(card, "trick") == "trick" && get.color(card) == "black")) {
							target.addTempSkill("new_meibu_range", "phaseUseAfter");
							target.markAuto("new_meibu_range", player);
						}
						target.markSkillCharacter("mbmeibu", player, "魅步", "锁定技。出牌阶段，若你于此阶段使用过的牌数不小于X，你不能使用牌（X为你的体力值）；当你使用锦囊牌时，你结束此阶段。");
					}
				},
			},
			mbzhixi: {
				mod: {
					cardEnabled: function (card, player) {
						if (player.countMark("mbzhixi") >= player.hp) return false;
					},
					cardUsable: function (card, player) {
						if (player.countMark("mbzhixi") >= player.hp) return false;
					},
					cardSavable: function (card, player) {
						if (player.countMark("mbzhixi") >= player.hp) return false;
					},
				},
				trigger: {
					player: "useCard1",
				},
				forced: true,
				popup: false,
				firstDo: true,
				init: function (player, skill) {
					player.storage[skill] = 0;
					var evt = _status.event.getParent("phaseUse");
					if (evt && evt.player == player) {
						player.getHistory("useCard", function (evtx) {
							if (evtx.getParent("phaseUse") == evt) {
								player.storage[skill]++;
							}
						});
					}
				},
				onremove: function (player) {
					player.unmarkSkill("mbmeibu");
					delete player.storage.mbzhixi;
				},
				content: function () {
					player.addMark("mbzhixi", 1, false);
					if (get.type2(trigger.card) == "trick") {
						var evt = trigger.getParent("phaseUse");
						if (evt && evt.player == player) {
							evt.skipped = true;
							game.log(player, "结束了出牌阶段");
						}
					}
				},
				ai: {
					presha: true,
					pretao: true,
					neg: true,
					nokeep: true,
				},
			},
			//庞统
			xinlianhuan: {
				audio: 2,
				audioname: ["ol_pangtong"],
				inherit: "lianhuan",
				group: "xinlianhuan_add",
				subSkill: {
					add: {
						audio: "xinlianhuan",
						audioname: ["ol_pangtong"],
						trigger: { player: "useCard2" },
						filter: function (event, player) {
							if (event.card.name != "tiesuo") return false;
							var info = get.info(event.card);
							if (info.allowMultiple == false) return false;
							if (event.targets && !info.multitarget) {
								if (
									game.hasPlayer(current => {
										return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
									})
								)
									return true;
							}
							return false;
						},
						charlotte: true,
						forced: true,
						popup: false,
						content: function () {
							"step 0";
							player
								.chooseTarget(get.prompt("xinlianhuan"), "为" + get.translation(trigger.card) + "额外指定一个目标", (card, player, target) => {
									return !_status.event.sourcex.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
								})
								.set("sourcex", trigger.targets)
								.set("ai", function (target) {
									var player = _status.event.player;
									return get.effect(target, _status.event.card, player, player);
								})
								.set("card", trigger.card);
							"step 1";
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayex();
							} else event.finish();
							"step 2";
							if (result.bool) {
								var targets = result.targets;
								player.logSkill("xinlianhuan_add", targets);
								trigger.targets.addArray(targets);
								game.log(targets, "也成为了", trigger.card, "的目标");
							}
						},
					},
				},
			},
			//吴班
			xinjintao: {
				audio: "jintao",
				inherit: "jintao",
				content: function () {
					var evt = trigger.getParent("phaseUse");
					var index = player
						.getHistory("useCard", function (evtx) {
							return evtx.card.name == "sha" && evtx.getParent("phaseUse") == evt;
						})
						.indexOf(trigger);
					if (index == 0) {
						game.log(trigger.card, "不可被响应");
						trigger.directHit.addArray(game.players);
					} else {
						game.log(trigger.card, "伤害+1");
						if (typeof trigger.baseDamage != "number") trigger.baseDamage = 1;
						trigger.baseDamage++;
					}
				},
			},
			//鲍信
			mutao: {
				audio: "twmutao",
				inherit: "twmutao",
				content: function () {
					"step 0";
					event.togive = target.getNext();
					var cards = target.getCards("h", { name: "sha" });
					if (!cards.length) {
						game.log("但", target, "没有", "#y杀", "！");
						event.finish();
					} else target.addToExpansion(cards, target, "give").gaintag.add("mutao");
					"step 1";
					var card = target.getExpansions("mutao").randomGet();
					target.give(card, event.togive);
					"step 2";
					if (target.getExpansions("mutao").length) {
						event.togive = event.togive.getNext();
						event.goto(1);
					} else {
						target.line(event.togive);
						event.togive.damage(Math.min(2, event.togive.countCards("h", { name: "sha" })), target);
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
			},
			yimou: {
				audio: "twyimou",
				inherit: "twyimou",
				content: function () {
					"step 0";
					if (trigger.player != player) player.addExpose(0.3);
					var target = get.translation(trigger.player);
					var choiceList = ["令" + target + "获得牌堆里的一张【杀】", "令" + target + "将一张牌交给另一名角色，然后" + target + "摸一张牌"];
					var list = ["选项一"];
					if (trigger.player.countCards("h")) list.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					player
						.chooseControl(list)
						.set("prompt", "毅谋：请选择一项")
						.set("choiceList", choiceList)
						.set("ai", function () {
							var evt = _status.event.getTrigger(),
								list = _status.event.list;
							var player = _status.event.player;
							var target = evt.player;
							if (target.countCards("h") && list.includes("选项二")) return "选项二";
							return "选项一";
						})
						.set("list", list);
					"step 1";
					event.choice = result.control;
					"step 2";
					if (event.choice != "选项二") {
						var card = get.cardPile2(function (card) {
							return card.name == "sha";
						});
						if (card) trigger.player.gain(card, "gain2");
						else game.log("但牌堆里已经没有", "#y杀", "了！");
						if (event.choice == "选项一") event.finish();
					}
					"step 3";
					if (event.choice != "选项一") {
						if (trigger.player.countCards("h"))
							trigger.player.chooseCardTarget({
								prompt: "毅谋：将一张手牌交给另一名其他角色",
								filterCard: true,
								forced: true,
								filterTarget: lib.filter.notMe,
								ai1: function (card) {
									return 1 / Math.max(0.1, get.value(card));
								},
								ai2: function (target) {
									var player = _status.event.player,
										att = get.attitude(player, target);
									if (target.hasSkillTag("nogain")) att /= 9;
									return 4 + att;
								},
							});
						else event.finish();
					}
					"step 4";
					var target = result.targets[0];
					trigger.player.line(target);
					trigger.player.give(result.cards, target);
					trigger.player.draw();
				},
			},
			//蒋济
			jilun: {
				audio: "twjilun",
				inherit: "twjilun",
				filter: function (event, player) {
					return player.hasSkill("twjichou", null, false, false);
				},
				content: function () {
					"step 0";
					var choices = ["选项一"];
					var choiceList = ["摸两张牌", "获得一个“机论”标记"];
					if (
						!player.getStorage("twjichou").length ||
						!player.getStorage("twjichou").filter(function (name) {
							return !player.getStorage("jilun").includes(name) && player.hasUseTarget({ name: name });
						}).length
					)
						choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					else choices.push("选项二");
					player
						.chooseControl(choices, "cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt("jilun"))
						.set("ai", () => {
							if (_status.event.choiceList.length == 1 || !player.getStorage("twjichou").length) return 0;
							var val = player.getUseValue({ name: "wuzhong" });
							for (var name of player.getStorage("twjichou")) {
								if (player.getStorage("jilun").includes(name)) continue;
								if (player.getUseValue({ name: name }) > val) return 1;
							}
							return 0;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("jilun");
						if (result.control == "选项一") player.draw(2);
						else player.addMark("jilun_mark", 1);
					}
				},
				group: "jilun_effect",
				subSkill: {
					mark: {
						intro: { content: "mark" },
					},
					effect: {
						audio: "twjilun",
						trigger: { global: "phaseJieshuBegin" },
						filter: function (event, player) {
							return player.hasMark("jilun_mark");
						},
						forced: true,
						content: function () {
							"step 0";
							if (
								!player.getStorage("twjichou").length ||
								!player.getStorage("twjichou").filter(function (name) {
									return !player.getStorage("jilun").includes(name) && player.hasUseTarget({ name: name });
								}).length
							) {
								if (player.hasMark("jilun_mark")) player.removeMark("jilun_mark", player.countMark("jilun_mark"));
								event.finish();
								return;
							}
							var list = [];
							for (var name of player.getStorage("twjichou")) {
								if (!player.getStorage("jilun").includes(name)) {
									list.push(["锦囊", "", name]);
								}
							}
							player
								.chooseButton(['###机论：请选择你要执行的选项###<div class="text center"><li>失去1枚“机论”标记，视为使用一张〖急筹〗已记录但〖机论〗未记录的普通锦囊牌<br><li>失去所有“机论”标记</div>', [list, "vcard"]])
								.set("filterButton", function (button) {
									return _status.event.player.hasUseTarget({ name: button.link[2] });
								})
								.set("ai", function (button) {
									return _status.event.getParent().player.getUseValue({ name: button.link[2] }, null, true);
								});
							"step 1";
							if (result.bool) {
								player.removeMark("jilun_mark", 1);
								var card = { name: result.links[0][2], isCard: true };
								player.chooseUseTarget(card, true);
								player.markAuto("jilun", [card.name]);
								player.syncStorage("jilun");
							} else {
								player.removeMark("jilun_mark", player.countMark("jilun_mark"));
								event.finish();
							}
							"step 2";
							if (player.hasMark("jilun_mark")) event.goto(0);
						},
					},
				},
				ai: {
					combo: "twjichou",
				},
			},
			//李遗
			jiaohua: {
				onremove: true,
				audio: "twjiaohua",
				enable: "phaseUse",
				usable: 2,
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("###教化###选择一种牌的类型，令一名角色从牌堆获得此类型的一张牌");
					},
					chooseControl: function (event, player) {
						var list = ["basic", "trick", "equip"].filter(type => !player.getStorage("jiaohua").includes(type));
						list.push("cancel2");
						return list;
					},
					check: function (event, player) {
						var list = ["trick", "equip", "basic"].filter(type => !player.getStorage("jiaohua").includes(type));
						return list[0];
					},
					backup: function (result, player) {
						return {
							type: result.control,
							audio: "twjiaohua",
							filterCard: () => false,
							selectCard: -1,
							filterTarget: true,
							content: function () {
								"step 0";
								var type = lib.skill.jiaohua_backup.type;
								var card = get.cardPile2(card => get.type2(card) == type);
								if (card) target.gain(card, "gain2");
								else game.log("但牌堆里已经没有", "#y" + get.translation(type) + "牌", "了！");
								"step 1";
								player.markAuto("jiaohua", [lib.skill.jiaohua_backup.type]);
								"step 2";
								if (!["basic", "trick", "equip"].some(type => !player.getStorage("jiaohua").includes(type))) {
									player.popup("教化");
									player.unmarkAuto("jiaohua", player.getStorage("jiaohua"));
									game.log(player, "清空了", "#g【教化】", "记录");
								}
							},
							ai: {
								result: { target: 1 },
							},
						};
					},
					prompt: function (result, player) {
						return "令一名角色从牌堆中获得一张" + get.translation(result.control) + "牌";
					},
				},
				ai: {
					order: 7,
					result: { player: 1 },
				},
				intro: { content: "已记录$牌" },
			},
			//来敏
			laishou: {
				audio: 3,
				trigger: { player: ["damageBegin4", "phaseZhunbeiBegin"] },
				filter: function (event, player) {
					var num = 9;
					if (event.name == "damage") return event.num >= player.getHp() && player.maxHp < num;
					return player.maxHp >= num;
				},
				forced: true,
				logAudio(event, player) {
					if (event.name == "damage") {
						return 2;
					}
					return "laishou3.mp3";
				},
				content: function () {
					if (trigger.name == "damage") {
						player.gainMaxHp(trigger.num);
						trigger.cancel();
					} else player.die();
				},
			},
			luanqun: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("h");
				},
				usable: 1,
				contentBefore: function () {
					player.line(game.filterPlayer(current => current.countCards("h")));
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(current => current.countCards("h")).sortBySeat();
					event.targets = targets;
					var next = player
						.chooseCardOL(targets, "乱群：请选择要展示的牌", true)
						.set("ai", function (card) {
							return -get.value(card);
						})
						.set("source", player);
					next.aiCard = function (target) {
						var hs = target.getCards("h");
						return { bool: true, cards: [hs.randomGet()] };
					};
					next._args.remove("glow_result");
					"step 1";
					var cards = [];
					event.videoId = lib.status.videoId++;
					for (var i = 0; i < targets.length; i++) cards.push(result[i].cards[0]);
					event.cards = cards;
					game.log(player, "展示了", targets, "的", cards);
					game.broadcastAll(
						function (targets, cards, id, player) {
							var dialog = ui.create.dialog(get.translation(player) + "发动了【乱群】", cards);
							dialog.videoId = id;
							var getName = function (target) {
								if (target._tempTranslate) return target._tempTranslate;
								var name = target.name;
								if (lib.translate[name + "_ab"]) return lib.translate[name + "_ab"];
								return get.translation(name);
							};
							for (var i = 0; i < targets.length; i++) {
								dialog.buttons[i].querySelector(".info").innerHTML = getName(targets[i]) + get.translation(cards[i].suit);
							}
						},
						targets,
						cards,
						event.videoId,
						player
					);
					game.delay(4);
					"step 2";
					game.broadcastAll("closeDialog", event.videoId);
					var card = cards[targets.indexOf(player)];
					var cardx = cards.filter(cardy => cardy != card && get.color(cardy, targets[cards.indexOf(cardy)]) == get.color(card, player));
					if (cardx.length) {
						const num = get.mode() == "identity" ? 4 : 2;
						player
							.chooseButton(["乱群：是否获得其中至多" + get.cnNumber(num) + "张牌", cardx])
							.set("forceAuto", true)
							.set("ai", function (button) {
								var cards = _status.event.list[0];
								var targets = _status.event.list[1];
								var player = _status.event.player;
								if (get.attitude(player, targets[cards.indexOf(button.link)]) > 0) return 0;
								return get.value(button.link, player);
							})
							.set("selectButton", [1, num])
							.set("list", [cards, targets]);
					} else event.goto(4);
					"step 3";
					if (result.bool) player.gain(result.links, "give");
					"step 4";
					var card = cards[targets.indexOf(player)];
					targets = targets.filter(target => get.color(cards[targets.indexOf(target)], target) != get.color(card, player));
					if (targets.length) {
						player.line(targets);
						targets.forEach(target => {
							target.addTempSkill("luanqun_effect", { player: "phaseUseAfter" });
							target.markAuto("luanqun_effect", [player]);
							target.addTempSkill("luanqun_directHit", { player: "phaseEnd" });
							target.markAuto("luanqun_directHit", [player]);
						});
					}
				},
				ai: {
					order: 9,
					result: {
						player: function (player, target) {
							if (player.hasSkill("laishou")) return 1;
							return player.hp >= 2 ? 1 : 0;
						},
					},
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						mod: {
							playerEnabled: function (card, player, target) {
								if (!player.isPhaseUsing()) return;
								if (card.name == "sha" && !player.getStorage("luanqun_effect").includes(target)) return false;
							},
						},
						trigger: { player: "useCard1" },
						filter: function (event, player) {
							return player.isPhaseUsing() && event.card.name == "sha";
						},
						firstDo: true,
						forced: true,
						content: function () {
							player.removeSkill("luanqun_effect");
						},
					},
					directHit: {
						charlotte: true,
						onremove: true,
						intro: { content: "出牌阶段第一张【杀】只能指定$为目标，且其不可响应你回合内使用的【杀】" },
						trigger: { player: "useCardToPlayered" },
						filter(event, player) {
							return (
								player === _status.currentPhase &&
								event.card.name == "sha" &&
								player.getStorage("luanqun_directHit").some(tar => {
									return event.targets.includes(tar);
								})
							);
						},
						forced: true,
						logTarget(event, player) {
							return player.getStorage("luanqun_directHit");
						},
						content: function () {
							trigger.directHit.addArray(player.getStorage("luanqun_directHit"));
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if (tag === "directHit_ai") {
									return player.getStorage("luanqun_directHit").includes(arg.target);
								}
							},
						},
					},
				},
			},
			//☆周不疑
			mbhuiyao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				// filterTarget:lib.filter.notMe,
				content: function () {
					"step 0";
					player.damage("nosource");
					"step 1";
					if (game.countPlayer() < 2) event.finish();
					if (game.countPlayer() == 2)
						event._result = {
							bool: true,
							targets: [game.findPlayer(i => i != player), player],
						};
					else
						player
							.chooseTarget(
								`慧夭：请选择两名角色`,
								`令不为你的第一名角色视为对第二名角色造成过1点伤害。`,
								(card, player, target) => {
									if (!ui.selected.targets.length) return player != target;
									return true;
								},
								2,
								true
							)
							.set("multitarget", true)
							.set("targetprompt", ["伤害来源", "受伤角色"])
							.set("ai", target => {
								return target == get.event("aiTargets")[ui.selected.targets.length] ? 10 : 0;
							})
							.set("aiTargets", lib.skill.mbhuiyao.getUnrealDamageTargets(player, [game.filterPlayer(i => i != player), game.filterPlayer()], true));
					"step 2";
					if (result.bool) {
						var targets = result.targets;
						player.line2(targets, "green");
						game.delaye();
						targets[1].damage(targets[0], "unreal");
					}
				},
				getUnrealDamageTargets: (player, lists, forced) => {
					const targets = [null, null];
					let sourceList, targetList;
					if (lists.length == 2 && lists.every(l => Array.isArray(l))) {
						sourceList = lists[0];
						targetList = lists[1];
					} else {
						sourceList = lists.slice();
						targetList = lists.slice();
					}
					const list = targetList
						.map(current => {
							const _hp = current.hp,
								_maxhp = current.maxHp;
							current.hp = 100;
							current.maxHp = 100;
							const att = -get.sgnAttitude(player, current);
							let val = get.damageEffect(current, player, current) * att;
							current.getSkills(null, false, false).forEach(skill => {
								const info = get.info(skill);
								if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? "max" : "min"](val > 0 ? 0.1 : -0.1, val + 2 * att);
							});
							const eff = 100 / val + 15;
							current.hp = _hp;
							current.maxHp = _maxhp;
							return [current, eff];
						})
						.sort((a, b) => b[1] - a[1])[0];
					if (list[1] < 0 && !forced) return targets;
					const targetx = list[0];
					targets[1] = targetx;
					const list2 = sourceList
						.filter(i => i != targetx)
						.map(current => {
							const _hp = targetx.hp,
								_maxhp = targetx.maxHp;
							targetx.hp = 100;
							targetx.maxHp = 100;
							const att = -get.sgnAttitude(player, current);
							const eff = get.damageEffect(targetx, current, current) * att;
							targetx.hp = _hp;
							targetx.maxHp = _maxhp;
							return [current, eff];
						})
						.sort((a, b) => b[1] - a[1])[0];
					if (!list2) return targets;
					targets[0] = list2[0];
					return targets;
				},
				ai: {
					order: 6,
					result: {
						player: function (player) {
							if (player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) <= 1) return 0;
							var limit = 25;
							var quesong = player.hasSkill("mbquesong") && !player.getStat().damaged;
							if (quesong) {
								limit -= 7.5;
							}
							if (
								quesong &&
								game.hasPlayer(target => {
									var att = get.attitude(player, target);
									if (att < 0) return false;
									return (
										att *
											Math.sqrt(
												Math.max(
													1,
													[1, 2, 3, 4].reduce((p, c) => p + target.countEmptySlot(c), 0)
												)
											) >=
											10 || target.getHp() <= 2
									);
								})
							)
								return 1;
							if (
								!quesong &&
								game.hasPlayer(target => {
									if (target == player) return false;
									var _hp = target.hp,
										_maxhp = target.maxHp;
									target.hp = 100;
									target.maxHp = 100;
									var att = -get.sgnAttitude(player, target);
									var val = get.damageEffect(target, player, target) * att;
									target.getSkills(null, false, false).forEach(skill => {
										var info = get.info(skill);
										if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? "max" : "min"](val > 0 ? 0.1 : -0.1, val + 2 * att);
									});
									var eff = 100 / val;
									target.hp = _hp;
									target.maxHp = _maxhp;
									if (eff < limit) return false;
									return true;
								})
							)
								return 1;
							return 0;
						},
					},
					combo: "mbquesong",
					halfneg: true
				},
			},
			mbquesong: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.getHistory("damage").length;
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("mbquesong")).set("ai", target => {
						var player = _status.event.player;
						if (get.attitude(player, target) <= 0) return 0;
						var len = lib.skill.mbquesong.getNum(target),
							hp = target.getHp();
						return len + target.isTurnedOver() * 2 + (1.5 * Math.min(4, target.getDamagedHp())) / (hp + 1);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("mbquesong", target);
						var len = lib.skill.mbquesong.getNum(target);
						if (target.isHealthy()) event._result = { index: 0 };
						else {
							target
								.chooseControl()
								.set("choiceList", ["摸" + get.cnNumber(len) + "张牌并复原武将牌", "回复1点体力"])
								.set("prompt", "雀颂：请选择一项")
								.set("ai", () => {
									var player = _status.event.player;
									var len = _status.event.len;
									return get.effect(player, { name: "draw" }, player, player) * len >= get.recoverEffect(player, player, player) ? 0 : 1;
								})
								.set("len", len);
						}
					} else event.finish();
					"step 2";
					if (result.index == 1) {
						target.recover();
						event.finish();
					} else target.draw(lib.skill.mbquesong.getNum(target));
					"step 3";
					target.link(false);
					"step 4";
					target.turnOver(false);
				},
				getNum: function (player) {
					return player.countCards("e", card => get.subtype(card) != "equip5") >= 3 ? 2 : 3;
				},
				ai: {
					expose: 0.2,
					maixie: true,
					skillTagFilter: function (player, tag) {
						if (player.getStat().damaged) return false;
					},
				},
			},
			//郭照
			yichong: {
				initSkill: function (skill) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							charlotte: true,
							onremove: true,
							mark: true,
							marktext: "雀",
							intro: {
								markcount: function (storage) {
									return (storage || 0).toString();
								},
								content: function (storage) {
									return "已被掠夺" + (storage || 0) + "张牌";
								},
							},
						};
						lib.translate[skill] = "易宠";
						lib.translate[skill + "_bg"] = "雀";
					}
				},
				getLimit: 1,
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("yichong"), "选择一名其他角色并选择一个花色，获得其此花色的所有牌并令其获得“雀”标记", lib.filter.notMe).set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0) return 0;
						var getNum = function (player) {
							var list = [];
							for (var i of lib.suit) list.push(player.countCards("he", { suit: i }) + 3);
							return list.sort((a, b) => b - a)[0];
						};
						return getNum(target) + target.countCards("h") / 10;
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("yichong", target);
						event.target = target;
						player
							.chooseControl(lib.suit.slice(0).reverse())
							.set("prompt", "请声明一个花色")
							.set("ai", function () {
								var target = _status.event.target,
									cards = target.getCards("he");
								var suits = lib.suit.slice(0);
								suits.sort(function (a, b) {
									var num = function (suit) {
										return cards.filter(function (card) {
											return get.suit(card) == suit;
										}).length;
									};
									return num(b) - num(a);
								});
								return suits[0];
							})
							.set("target", target);
					} else event.finish();
					"step 2";
					var suit = result.control;
					event.suit = suit;
					player.chat(get.translation(suit + 2));
					game.log(player, "选择了", "#y" + get.translation(suit + 2));
					if (target.countCards("e", { suit: suit })) player.gain(target.getCards("e", { suit: suit }), target, "giveAuto");
					"step 3";
					var suit = event.suit;
					if (target.countCards("h", { suit: suit })) {
						player.chooseButton(["选择获得其中一张牌", target.getCards("h", { suit: suit })], true).set("ai", button => get.value(button.link));
					} else event.goto(5);
					"step 4";
					if (result.bool) {
						var card = result.links[0];
						if (lib.filter.canBeGained(card, player, target)) player.gain(card, target, "giveAuto", "bySelf");
						else game.log("但", card, "不能被", player, "获得！");
					}
					"step 5";
					var suit = event.suit;
					player.storage.yichong = suit;
					player.markSkill("yichong");
					var skill = "yichong_" + player.playerid;
					game.broadcastAll(lib.skill.yichong.initSkill, skill);
					game.broadcastAll(
						function (player, suit) {
							if (player.marks.yichong) player.marks.yichong.firstChild.innerHTML = get.translation(suit);
						},
						player,
						suit
					);
					game.countPlayer(function (current) {
						current.removeSkill("yichong_" + player.playerid);
						if (current == target) target.addSkill("yichong_" + player.playerid);
					});
					player.addTempSkill("yichong_clear", { player: "phaseBegin" });
				},
				onremove: true,
				intro: { content: "拥有“雀”标记的角色得到$牌后，你获得之" },
				group: "yichong_gain",
				subSkill: {
					gain: {
						audio: "yichong",
						trigger: { global: ["gainAfter", "loseAsyncAfter"] },
						filter: function (event, player) {
							if (!player.storage.yichong) return false;
							return game.hasPlayer(function (current) {
								if (!event.getg(current).length || !current.hasSkill("yichong_" + player.playerid)) return false;
								if (current.countMark("yichong_" + player.playerid) >= lib.skill.yichong.getLimit) return false;
								return event.getg(current).some(card => get.suit(card, current) == player.storage.yichong && lib.filter.canBeGained(card, current, player));
							});
						},
						forced: true,
						content: function () {
							var target = game.findPlayer(function (current) {
								if (!trigger.getg(current).length || !current.hasSkill("yichong_" + player.playerid)) return false;
								if (current.countMark("yichong_" + player.playerid) >= lib.skill.yichong.getLimit) return false;
								return trigger.getg(current).some(card => get.suit(card, current) == player.storage.yichong && lib.filter.canBeGained(card, current, player));
							});
							var cards = trigger.getg(target).filter(card => get.suit(card, target) == player.storage.yichong && lib.filter.canBeGained(card, target, player));
							var num = lib.skill.yichong.getLimit - target.countMark("yichong_" + player.playerid);
							cards = cards.randomGets(num);
							player.gain(cards, target, "giveAuto");
							target.addMark("yichong_" + player.playerid, cards.length, false);
						},
					},
					clear: {
						charlotte: true,
						onremove: function (player) {
							game.countPlayer(function (current) {
								current.removeSkill("yichong_" + player.playerid);
							});
						},
					},
				},
			},
			wufei: {
				audio: 2,
				trigger: { player: ["useCardToPlayered", "damageEnd"] },
				filter: function (event, player) {
					var target = game.findPlayer(current => current.hasSkill("yichong_" + player.playerid));
					if (!target) return false;
					if (event.name == "damage") return target.hp > 3;
					return event.isFirstTarget && (event.card.name == "sha" || (get.type(event.card) == "trick" && get.tag(event.card, "damage")));
				},
				direct: true,
				content: function () {
					"step 0";
					var target = game.findPlayer(current => current.hasSkill("yichong_" + player.playerid));
					event.target = target;
					if (trigger.name == "damage") {
						player.chooseBool(get.prompt("wufei", target), "令" + get.translation(target) + "受到1点无来源伤害").set("choice", get.damageEffect(target, player, player) > 0);
					} else {
						player.logSkill("wufei", target);
						player.addTempSkill("wufei_effect");
						player.markAuto("wufei_effect", [trigger.card]);
						game.log(target, "成为了", trigger.card, "的伤害来源");
						event.finish();
					}
					"step 1";
					if (result.bool) {
						player.logSkill("wufei", target);
						target.damage("nosource");
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { source: "damageBefore" },
						filter: function (event, player) {
							if (!event.card) return false;
							return player.getStorage("wufei_effect").includes(event.card);
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							var target = game.findPlayer(current => current.hasSkill("yichong_" + player.playerid));
							if (!target) delete trigger.source;
							else trigger.source = target;
						},
					},
				},
				ai: {
					combo: "yichong",
				},
			},
			//张嶷
			xinwurong: {
				audio: 3,
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					player
						.chooseToDuiben(target)
						.set("title", "谋弈")
						.set("namelist", ["反抗", "归顺", "镇压", "安抚"])
						.set("translationList", [`对方选择镇压：${get.translation(player)}对你造成1点伤害，然后其摸1张牌<br>对方选择安抚：${get.translation(player)}受到1点伤害，然后其摸2张牌`, `对方选择镇压：${get.translation(player)}获得你1张牌，然后其交给你2张牌<br>对方选择安抚：你须交给${get.translation(player)}两张牌（若你牌数不足2张，则改为其令你跳过你下个摸牌阶段）`, `对方选择反抗：你对${get.translation(target)}造成1点伤害，然后你摸1张牌<br>对方选择归顺：你获得${get.translation(target)}1张牌，然后你交给其2张牌`, `对方选择反抗：你受到1点伤害，然后你摸2张牌<br>对方选择归顺：${get.translation(target)}须交给你两张牌（若其牌数不足两张，则改为令其跳过其下个摸牌阶段）`])
						.set("ai", button => 1 + Math.random());
					"step 1";
					if (result.bool) {
						if (result.player == "db_def1") {
							target.damage();
							player.draw();
							event.finish();
						} else {
							var cards = target.getCards("he");
							if (cards.length < 2) {
								target.skip("phaseDraw");
								target.addTempSkill("xinwurong_skip", { player: "phaseDrawSkipped" });
								event.finish();
							} else if (cards.length == 2) event._result = { bool: true, cards: cards };
							else target.chooseCard("怃戎：交给" + get.translation(player) + "两张牌", 2, true, "he");
						}
					} else {
						if (result.player == "db_def1") {
							player.gainPlayerCard(target, "he", true);
							event.goto(3);
						} else {
							player.damage();
							player.draw(2);
							event.finish();
						}
					}
					"step 2";
					if (result.bool) player.gain(result.cards, target, "giveAuto");
					event.finish();
					"step 3";
					var cards = player.getCards("he");
					if (!cards.length) event.finish();
					else if (cards.length <= 2) event._result = { bool: true, cards: cards };
					else player.chooseCard("怃戎：交给" + get.translation(target) + "两张牌", 2, true, "he");
					"step 4";
					if (result.bool) target.gain(result.cards, player, "giveAuto");
				},
				ai: {
					order: 7,
					result: {
						player: 1,
						target: -1,
					},
				},
				subSkill: {
					skip: {
						charlotte: true,
						mark: true,
						intro: { content: "跳过下个摸牌阶段" },
					},
				},
			},
			//孙亮
			xinkuizhu: {
				audio: "nzry_kuizhu",
				trigger: { player: "phaseDiscardAfter" },
				filter: function (event, player) {
					return player.getHistory("lose", function (evt) {
						return evt.type == "discard" && evt.getParent("phaseDiscard") == event;
					}).length;
				},
				direct: true,
				content: function () {
					"step 0";
					var cards = [];
					player.getHistory("lose", function (evt) {
						if (evt.type == "discard" && evt.getParent("phaseDiscard") == trigger) cards.addArray(evt.cards2);
					});
					event.num = cards.length;
					event.str1 = "令至多" + event.num + "名角色摸一张牌";
					event.str2 = "对任意名体力值之和为" + event.num + "的角色造成1点伤害";
					player
						.chooseControl("cancel2")
						.set("ai", function () {
							if (
								game.countPlayer(function (current) {
									return get.attitude(player, current) < 0 && current.hp == event.num;
								}) > 0 &&
								event.num <= 3
							)
								return 1;
							return 0;
						})
						.set("choiceList", [event.str1, event.str2])
						.set("prompt", "是否发动【溃诛】？");
					"step 1";
					if (result.control == "cancel2") event.finish();
					event.control = [event.str1, event.str2][result.index];
					"step 2";
					var str = "请选择〖溃诛〗的目标";
					if (event.bool == false) str = "<br>所选目标体力之和不足" + event.num + "，请重选";
					if (event.control == event.str2) {
						player
							.chooseTarget(str, function (card, player, target) {
								var targets = ui.selected.targets;
								var num = 0;
								for (var i = 0; i < targets.length; i++) num += targets[i].hp;
								return num + target.hp <= _status.event.num;
							})
							.set("ai", function (target) {
								if (ui.selected.targets[0] != undefined) return -1;
								return get.attitude(player, target) < 0;
							})
							.set("promptbar", "none")
							.set("num", event.num)
							.set("selectTarget", function () {
								var targets = ui.selected.targets;
								var num = 0;
								for (var i = 0; i < targets.length; i++) num += targets[i].hp;
								if (num == _status.event.num) return ui.selected.targets.length;
								return ui.selected.targets.length + 1;
							});
					} else {
						player.chooseTarget("请选择〖溃诛〗的目标", "令至多" + get.cnNumber(event.num) + "名角色各摸一张牌", [1, event.num]).set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					}
					"step 3";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						if (event.control == event.str1) {
							player.logSkill("xinkuizhu", targets);
							game.asyncDraw(targets);
						} else {
							var num = 0;
							for (var i = 0; i < targets.length; i++) num += targets[i].hp;
							if (num < event.num) {
								event.bool = false;
								event.goto(2);
							} else {
								player.logSkill("xinkuizhu", targets);
								for (var i of targets) i.damage();
								if (targets.length >= 2) player.loseHp();
							}
						}
					}
				},
			},
			xinzhizheng: {
				audio: "nzry_zhizheng",
				mod: {
					playerEnabled: function (card, player, target) {
						var info = get.info(card);
						if (target != player && (!info || !info.singleCard || !ui.selected.targets.length) && player.isPhaseUsing() && !target.inRange(player)) return false;
					},
				},
				trigger: { player: "phaseUseEnd" },
				filter: function (event, player) {
					return (
						player.getHistory("useCard", function (evt) {
							return evt.getParent("phaseUse") == event;
						}).length <
							game.countPlayer(function (current) {
								return current != player && !current.inRange(player);
							}) &&
						game.hasPlayer(function (target) {
							return target != player && !target.inRange(player) && target.countDiscardableCards(player, "he");
						})
					);
				},
				forced: true,
				content: function () {
					"step 0";
					player
						.chooseTarget("请选择〖掣政〗的目标", "弃置一名攻击范围内不包含你的角色的一张牌", true, function (card, player, target) {
							return target != player && !target.inRange(player) && target.countDiscardableCards(player, "he");
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						});
					"step 1";
					if (result.bool) {
						player.line(result.targets);
						player.discardPlayerCard(result.targets[0], "he", true);
					}
				},
			},
			xinlijun: {
				unique: true,
				audio: "nzry_lijun1",
				trigger: { global: "useCardAfter" },
				filter: function (event, player) {
					if (event.card.name != "sha") return false;
					if (_status.currentPhase != event.player || event.player.group != "wu") return false;
					if (!player.hasZhuSkill("xinlijun", event.player) || player == event.player) return false;
					return event.cards.filterInD().length;
				},
				zhuSkill: true,
				direct: true,
				content: function () {
					"step 0";
					trigger.player.chooseBool(get.prompt("xinlijun"), "将" + get.translation(trigger.cards) + "交给" + get.translation(player)).set("choice", get.attitude(trigger.player, player) > 0);
					"step 1";
					if (result.bool) {
						player.logSkill("xinlijun", trigger.player);
						player.gain(trigger.cards.filterInD(), "gain2");
						player
							.chooseBool()
							.set("prompt", "是否令" + get.translation(trigger.player) + "摸一张牌？")
							.set("choice", get.attitude(player, trigger.player) > 0);
					} else event.finish();
					"step 2";
					if (result.bool) trigger.player.draw();
				},
			},
			//十常侍
			mbdanggu: {
				audio: 2,
				trigger: {
					player: "enterGame",
					global: "phaseBefore",
				},
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				derivation: ["mbdanggu_faq", "mbdanggu_faq2",
					"scstaoluan", "scschiyan", "scszimou", "scspicai", "scsyaozhuo", "scsxiaolu", "scskuiji", "scschihe", "scsniqu", "scsmiaoyu"
				],
				forced: true,
				unique: true,
				onremove: function (player) {
					delete player.storage.mbdanggu;
					delete player.storage.mbdanggu_current;
					if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
						game.broadcastAll(function (player) {
							player.name1 = player.name;
							player.skin.name = player.name;
							player.smoothAvatar(false);
							player.node.avatar.setBackground(player.name, "character");
							player.node.name.innerHTML = get.slimName(player.name);
							delete player.name2;
							delete player.skin.name2;
							player.classList.remove("fullskin2");
							player.node.avatar2.classList.add("hidden");
							player.node.name2.innerHTML = "";
							if (player == game.me && ui.fakeme) {
								ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
							}
						}, player);
					}
				},
				changshi: [
					["scs_zhangrang", "scstaoluan"],
					["scs_zhaozhong", "scschiyan"],
					["scs_sunzhang", "scszimou"],
					["scs_bilan", "scspicai"],
					["scs_xiayun", "scsyaozhuo"],
					["scs_hankui", "scsxiaolu"],
					["scs_lisong", "scskuiji"],
					["scs_duangui", "scschihe"],
					["scs_guosheng", "scsniqu"],
					["scs_gaowang", "scsmiaoyu"],
				],
				conflictMap: function (player) {
					if (!_status.changshiMap) {
						_status.changshiMap = {
							scs_zhangrang: [],
							scs_zhaozhong: [],
							scs_sunzhang: [],
							scs_bilan: ["scs_hankui"],
							scs_xiayun: [],
							scs_hankui: ["scs_bilan"],
							scs_lisong: [],
							scs_duangui: ["scs_guosheng"],
							scs_guosheng: ["scs_duangui"],
							scs_gaowang: [],
						};
						if (!get.isLuckyStar(player)) {
							var list = lib.skill.mbdanggu.changshi.map(i => i[0]);
							for (var i of list) {
								var select = list.filter(scs => scs != i && !_status.changshiMap[i].includes(i));
								_status.changshiMap[i].addArray(select.randomGets(get.rand(0, select.length)));
							}
						}
					}
					return _status.changshiMap;
				},
				group: "mbdanggu_back",
				content: function () {
					"step 0";
					var list = lib.skill.mbdanggu.changshi.map(i => i[0]);
					player.markAuto("mbdanggu", list);
					game.broadcastAll(
						function (player, list) {
							var cards = [];
							for (var i = 0; i < list.length; i++) {
								var cardname = "huashen_card_" + list[i];
								lib.card[cardname] = {
									fullimage: true,
									image: "character/" + list[i],
								};
								lib.translate[cardname] = get.rawName2(list[i]);
								cards.push(game.createCard(cardname, "", ""));
							}
							player.$draw(cards, "nobroadcast");
						},
						player,
						list
					);
					"step 1";
					var next = game.createEvent("mbdanggu_clique");
					next.player = player;
					next.setContent(lib.skill.mbdanggu.contentx);
				},
				contentx: function () {
					"step 0";
					var list = player.getStorage("mbdanggu").slice();
					var first = list.randomRemove();
					event.first = first;
					var others = list.randomGets(4);
					if (others.length == 1) event._result = { bool: true, links: others };
					else {
						var map = {
								scs_bilan: "scs_hankui",
								scs_hankui: "scs_bilan",
								scs_duangui: "scs_guosheng",
								scs_guosheng: "scs_duangui",
							},
							map2 = lib.skill.mbdanggu.conflictMap(player);
						var conflictList = others.filter(changshi => {
								if (map[first] && others.some(changshi2 => map[first] == changshi2)) return map[first] == changshi;
								else return map2[first].includes(changshi);
							}),
							list = others.slice();
						if (conflictList.length) {
							var conflict = conflictList.randomGet();
							list.remove(conflict);
							game.broadcastAll(
								function (changshi, player) {
									if (lib.config.background_speak) {
										if (player.isUnderControl(true)) game.playAudio("skill", changshi + "_enter");
									}
								},
								conflict,
								player
							);
						}
						player
							.chooseButton(["党锢：请选择结党对象", [[first], "character"], '<div class="text center">可选常侍</div>', [others, "character"]], true)
							.set("filterButton", button => {
								return _status.event.canChoose.includes(button.link);
							})
							.set("canChoose", list)
							.set("ai", button => Math.random() * 10);
					}
					"step 1";
					if (result.bool) {
						var first = event.first;
						var chosen = result.links[0];
						var skills = [];
						var list = lib.skill.mbdanggu.changshi;
						var changshis = [first, chosen];
						player.unmarkAuto("mbdanggu", changshis);
						player.storage.mbdanggu_current = changshis;
						for (var changshi of changshis) {
							for (var cs of list) {
								if (changshi == cs[0]) skills.push(cs[1]);
							}
						}
						if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
							game.broadcastAll(
								function (player, first, chosen) {
									player.name1 = first;
									player.node.avatar.setBackground(first, "character");
									player.node.name.innerHTML = get.slimName(first);
									player.name2 = chosen;
									player.skin.name = first;
									player.skin.name2 = chosen;
									player.classList.add("fullskin2");
									player.node.avatar2.classList.remove("hidden");
									player.node.avatar2.setBackground(chosen, "character");
									player.node.name2.innerHTML = get.slimName(chosen);
									if (player == game.me && ui.fakeme) {
										ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
									}
								},
								player,
								first,
								chosen
							);
						}
						game.log(player, "选择了常侍", "#y" + get.translation(changshis));
						if (skills.length) {
							player.addAdditionalSkill("mbdanggu", skills);
							var str = "";
							for (var i of skills) {
								str += "【" + get.translation(i) + "】、";
								player.popup(i);
							}
							str = str.slice(0, -1);
							game.log(player, "获得了技能", "#g" + str);
						}
					}
				},
				isSingleShichangshi: function (player) {
					var map = lib.skill.mbdanggu.conflictMap(player);
					return player.name == "shichangshi" && ((map[player.name1] && map[player.name2]) || (map[player.name1] && !player.name2) || (!player.name1 && !player.name2) || (player.name == player.name1 && !player.name2));
				},
				mod: {
					aiValue: function (player, card, num) {
						if (["shan", "tao", "wuxie", "caochuan"].includes(card.name)) return num / 10;
					},
					aiUseful: function () {
						return lib.skill.mbdanggu.mod.aiValue.apply(this, arguments);
					},
				},
				ai: {
					combo: "mbmowang",
					nokeep: true,
				},
				intro: {
					mark: function (dialog, storage, player) {
						dialog.addText("剩余常侍");
						dialog.addSmall([storage, "character"]);
						if (player.storage.mbdanggu_current && player.isIn()) {
							dialog.addText("当前常侍");
							dialog.addSmall([player.storage.mbdanggu_current, "character"]);
						}
					},
				},
				subSkill: {
					back: {
						audio: "mbdanggu",
						trigger: { global: "restEnd" },
						filter: function (event, player) {
							return event.getTrigger().player == player;
						},
						forced: true,
						content: function () {
							"step 0";
							delete player.storage.mbdanggu_current;
							if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
								game.broadcastAll(function (player) {
									player.name1 = player.name;
									player.skin.name = player.name;
									player.smoothAvatar(false);
									player.node.avatar.setBackground(player.name, "character");
									player.node.name.innerHTML = get.slimName(player.name);
									delete player.name2;
									delete player.skin.name2;
									player.classList.remove("fullskin2");
									player.node.avatar2.classList.add("hidden");
									player.node.name2.innerHTML = "";
									if (player == game.me && ui.fakeme) {
										ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
									}
								}, player);
							}
							"step 1";
							var next = game.createEvent("mbdanggu_clique");
							next.player = player;
							next.setContent(lib.skill.mbdanggu.contentx);
							player.draw();
						},
					},
				},
			},
			mbmowang: {
				audio: 2,
				trigger: { player: "dieBefore" },
				filter: function (event, player) {
					return event.getParent().name != "giveup" && player.maxHp > 0;
				},
				derivation: "mbmowang_faq",
				forced: true,
				direct: true,
				priority: 15,
				group: ["mbmowang_die", "mbmowang_return"],
				content: function () {
					if (_status.mbmowang_return && _status.mbmowang_return[player.playerid]) {
						trigger.cancel();
					} else {
						if(player.getStorage("mbdanggu").length){
							player.logSkill("mbmowang");
							game.broadcastAll(function () {
								if (lib.config.background_speak) game.playAudio("die", "shichangshiRest");
							});
							trigger.setContent(lib.skill.mbmowang.dieContent);
							trigger.includeOut = true;
						}
						else player.changeSkin("mbmowang", "shichangshi_dead");
					}
				},
				ai: {
					combo: "mbdanggu",
					neg: true,
				},
				dieContent: function () {
					"step 0";
					event.forceDie = true;
					if (source) {
						game.log(player, "被", source, "杀害");
						if (source.stat[source.stat.length - 1].kill == undefined) {
							source.stat[source.stat.length - 1].kill = 1;
						} else {
							source.stat[source.stat.length - 1].kill++;
						}
					} else {
						game.log(player, "阵亡");
					}
					if (player.isIn() && (!_status.mbmowang_return || !_status.mbmowang_return[player.playerid])) {
						event.reserveOut = true;
						game.log(player, "进入了修整状态");
						game.log(player, "移出了游戏");
						//game.addGlobalSkill('mbmowang_return');
						if (!_status.mbmowang_return) _status.mbmowang_return = {};
						_status.mbmowang_return[player.playerid] = 1;
					} else event.finish();
					if (!game.countPlayer()) game.over();
					else if (player.hp != 0) {
						player.changeHp(0 - player.hp, false).forceDie = true;
					}
					game.broadcastAll(function (player) {
						if (player.isLinked()) {
							if (get.is.linked2(player)) {
								player.classList.toggle("linked2");
							} else {
								player.classList.toggle("linked");
							}
						}
						if (player.isTurnedOver()) {
							player.classList.toggle("turnedover");
						}
					}, player);
					game.addVideo("link", player, player.isLinked());
					game.addVideo("turnOver", player, player.classList.contains("turnedover"));
					"step 1";
					event.trigger("die");
					"step 2";
					if (event.reserveOut) {
						if (!game.reserveDead) {
							for (var mark in player.marks) {
								if (mark == "mbdanggu") continue;
								player.unmarkSkill(mark);
							}
							var count = 1;
							var list = Array.from(player.node.marks.childNodes);
							if (list.some(i => i.name == "mbdanggu")) count++;
							while (player.node.marks.childNodes.length > count) {
								var node = player.node.marks.lastChild;
								if (node.name == "mbdanggu") {
									node = node.previousSibling;
								}
								node.remove();
							}
							game.broadcast(
								function (player, count) {
									while (player.node.marks.childNodes.length > count) {
										var node = player.node.marks.lastChild;
										if (node.name == "mbdanggu") {
											node = node.previousSibling;
										}
										node.remove();
									}
								},
								player,
								count
							);
						}
						for (var i in player.tempSkills) {
							player.removeSkill(i);
						}
						var skills = player.getSkills();
						for (var i = 0; i < skills.length; i++) {
							if (lib.skill[skills[i]].temp) {
								player.removeSkill(skills[i]);
							}
						}
						event.cards = player.getCards("hejsx");
						if (event.cards.length) {
							player.discard(event.cards).forceDie = true;
						}
					}
					"step 3";
					if (event.reserveOut) {
						game.broadcastAll(
							function (player, list) {
								player.classList.add("out");
								if (list.includes(player.name1) || player.name1 == "shichangshi") {
									player.smoothAvatar(false);
									player.skin.name = player.name1 + "_dead";
									player.node.avatar.setBackground(player.name1 + "_dead", "character");
								}
								if (list.includes(player.name2) || player.name2 == "shichangshi") {
									player.smoothAvatar(true);
									player.skin.name2 = player.name2 + "_dead";
									player.node.avatar2.setBackground(player.name2 + "_dead", "character");
								}
							},
							player,
							lib.skill.mbdanggu.changshi.map(i => i[0])
						);
					}
					if (source && lib.config.border_style == "auto" && (lib.config.autoborder_count == "kill" || lib.config.autoborder_count == "mix")) {
						switch (source.node.framebg.dataset.auto) {
							case "gold":
							case "silver":
								source.node.framebg.dataset.auto = "gold";
								break;
							case "bronze":
								source.node.framebg.dataset.auto = "silver";
								break;
							default:
								source.node.framebg.dataset.auto = lib.config.autoborder_start || "bronze";
						}
						if (lib.config.autoborder_count == "kill") {
							source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
						} else {
							var dnum = 0;
							for (var j = 0; j < source.stat.length; j++) {
								if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
							}
							source.node.framebg.dataset.decoration = "";
							switch (source.node.framebg.dataset.auto) {
								case "bronze":
									if (dnum >= 4) source.node.framebg.dataset.decoration = "bronze";
									break;
								case "silver":
									if (dnum >= 8) source.node.framebg.dataset.decoration = "silver";
									break;
								case "gold":
									if (dnum >= 12) source.node.framebg.dataset.decoration = "gold";
									break;
							}
						}
						source.classList.add("topcount");
					}
				},
				subSkill: {
					die: {
						audio: "mbmowang",
						trigger: { player: "phaseAfter" },
						forced: true,
						forceDie: true,
						content: function () {
							"step 0";
							if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
								if (!player.getStorage("mbdanggu").length) {
									game.broadcastAll(function (player) {
										player.name1 = player.name;
										player.skin.name = player.name + "_dead";
										player.smoothAvatar(false);
										player.node.avatar.setBackground(player.name + "_dead", "character");
										player.node.name.innerHTML = get.slimName(player.name);
										delete player.name2;
										delete player.skin.name2;
										player.classList.remove("fullskin2");
										player.node.avatar2.classList.add("hidden");
										player.node.name2.innerHTML = "";
										if (player == game.me && ui.fakeme) {
											ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
										}
									}, player);
								}
							}
							if (!player.getStorage("mbdanggu").length) {
								game.delay();
							}
							"step 1";
							player.die();
						},
					},
					return: {
						trigger: { player: "phaseBefore" },
						forced: true,
						charlotte: true,
						silent: true,
						forceDie: true,
						forceOut: true,
						filter: function (event, player) {
							return !event._mbmowang_return && event.player.isOut() && _status.mbmowang_return[event.player.playerid];
						},
						content: function () {
							"step 0";
							trigger._mbmowang_return = true;
							game.broadcastAll(function (player) {
								player.classList.remove("out");
							}, trigger.player);
							game.log(trigger.player, "移回了游戏");
							delete _status.mbmowang_return[trigger.player.playerid];
							trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
							game.broadcastAll(function (player) {
								if (player.name1 == "shichangshi") {
									player.smoothAvatar(false);
									player.node.avatar.setBackground(player.name1, "character");
									if (!lib.skill.mbdanggu.isSingleShichangshi(player)) {
										player.skin.name = player.name1;
									}
								}
								if (player.name2 == "shichangshi") {
									player.smoothAvatar(true);
									player.node.avatar2.setBackground(player.name2, "character");
									if (!lib.skill.mbdanggu.isSingleShichangshi(player)) {
										player.skin.name2 = player.name2;
									}
								}
							}, trigger.player);
							"step 1";
							event.trigger("restEnd");
						},
					},
				},
			},
			//张让
			scstaoluan: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("hes") > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == "sha") {
								list.push(["基本", "", "sha"]);
								for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
							} else if (get.type(name) == "trick") list.push(["锦囊", "", name]);
							else if (get.type(name) == "basic") list.push(["基本", "", name]);
						}
						return ui.create.dialog("滔乱", [list, "vcard"]);
					},
					filter: function (button, player) {
						return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						if (player.countCards("hs", button.link[2]) > 0) return 0;
						if (button.link[2] == "wugu") return;
						var effect = player.getUseValue(button.link[2]);
						if (effect > 0) return effect;
						return 0;
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							audio: "scstaoluan",
							selectCard: 1,
							popname: true,
							check: function (card) {
								return 6 - get.value(card);
							},
							position: "hes",
							viewAs: { name: links[0][2], nature: links[0][3] },
						};
					},
					prompt: function (links, player) {
						return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					order: 4,
					result: {
						player: 1,
					},
					threaten: 1.9,
				},
			},
			//赵忠
			scschiyan: {
				audio: 1,
				trigger: { player: "useCardToPlayered" },
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha" && event.target.hp > 0 && event.target.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					var next = player.choosePlayerCard(trigger.target, "he", get.prompt("scschiyan", trigger.target));
					next.set("ai", function (button) {
						if (!_status.event.goon) return 0;
						var val = get.value(button.link);
						if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
						return val;
					});
					next.set("goon", get.attitude(player, trigger.target) <= 0);
					next.set("forceAuto", true);
					"step 1";
					if (result.bool) {
						var target = trigger.target;
						player.logSkill("scschiyan", target);
						target.addSkill("scschiyan_get");
						target.addToExpansion("giveAuto", result.cards, target).gaintag.add("scschiyan_get");
					}
				},
				ai: {
					unequip_ai: true,
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (get.attitude(player, arg.target) > 0) return false;
						if (tag == "directHit_ai") return arg.target.hp >= Math.max(1, arg.target.countCards("h") - 1);
						if (arg && arg.name == "sha" && arg.target.getEquip(2)) return true;
						return false;
					},
				},
				group: "scschiyan_damage",
				subSkill: {
					get: {
						trigger: { global: "phaseEnd" },
						forced: true,
						popup: false,
						charlotte: true,
						filter: function (event, player) {
							return player.getExpansions("scschiyan_get").length > 0;
						},
						content: function () {
							"step 0";
							var cards = player.getExpansions("scschiyan_get");
							player.gain(cards, "draw");
							game.log(player, "收回了" + get.cnNumber(cards.length) + "张“鸱咽”牌");
							"step 1";
							player.removeSkill("scschiyan_get");
						},
						intro: {
							markcount: "expansion",
							mark: function (dialog, storage, player) {
								var cards = player.getExpansions("scschiyan_get");
								if (player.isUnderControl(true)) dialog.addAuto(cards);
								else return "共有" + get.cnNumber(cards.length) + "张牌";
							},
						},
					},
					damage: {
						audio: "scschiyan",
						trigger: { source: "damageBegin1" },
						forced: true,
						locked: false,
						logTarget: "player",
						filter: function (event, player) {
							var target = event.player;
							return event.getParent().name == "sha" && player.countCards("h") >= target.countCards("h") && player.countCards("e") >= target.countCards("e");
						},
						content: function () {
							trigger.num++;
						},
					},
				},
			},
			//孙璋
			scszimou: {
				audio: 1,
				trigger: { player: "useCard" },
				forced: true,
				filter: function (event, player) {
					var evt = event.getParent("phaseUse");
					if (!evt || evt.player != player) return false;
					var num = player.getHistory("useCard", evtx => evtx.getParent("phaseUse") == evt).length;
					return num == 2 || num == 4 || num == 6;
				},
				content: function () {
					var evt = trigger.getParent("phaseUse");
					var num = player.getHistory("useCard", evtx => evtx.getParent("phaseUse") == evt).length;
					var cards = [];
					if (num == 2) {
						var card = get.cardPile2(card => {
							return ["jiu", "xionghuangjiu"].includes(card.name);
						});
						if (card) cards.push(card);
					} else if (num == 4) {
						var card = get.cardPile2(card => {
							return card.name == "sha";
						});
						if (card) cards.push(card);
					} else if (num == 6) {
						var card = get.cardPile2(card => {
							return card.name == "juedou";
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
				},
			},
			//毕岚
			scspicai: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				frequent: true,
				content: function () {
					"step 0";
					event.cards = [];
					event.suits = [];
					"step 1";
					player
						.judge(function (result) {
							var evt = _status.event.getParent("scspicai");
							if (evt && evt.suits && evt.suits.includes(get.suit(result))) return 0;
							return 1;
						})
						.set("callback", lib.skill.scspicai.callback).judge2 = function (result) {
						return result.bool ? true : false;
					};
					"step 2";
					var cards = cards.filterInD();
					if (cards.length)
						player.chooseTarget("将" + get.translation(cards) + "交给一名角色", true).set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards("h"));
							if (target.hasSkillTag("nogain")) att /= 10;
							return att;
						});
					else event.finish();
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "green");
						target.gain(cards, "gain2").giver = player;
					} else event.finish();
				},
				callback: function () {
					"step 0";
					var evt = event.getParent(2);
					event.getParent().orderingCards.remove(event.judgeResult.card);
					evt.cards.push(event.judgeResult.card);
					if (event.getParent().result.bool) {
						evt.suits.push(event.getParent().result.suit);
						player.chooseBool("是否继续发动【庀材】？").set("frequentSkill", "scspicai");
					} else event._result = { bool: false };
					"step 1";
					if (result.bool) event.getParent(2).redo();
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
			},
			//夏恽
			scsyaozhuo: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return player.canCompare(current);
					});
				},
				filterTarget: function (card, player, current) {
					return player.canCompare(current);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) {
						target.skip("phaseDraw");
						target.addTempSkill("scsyaozhuo_skip", { player: "phaseDrawSkipped" });
					} else player.chooseToDiscard(2, true, "he");
				},
				subSkill: {
					skip: {
						mark: true,
						intro: { content: "跳过下一个摸牌阶段" },
					},
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (target.skipList.includes("phaseDraw") || target.hasSkill("pingkou")) return 0;
							var hs = player.getCards("h").sort(function (a, b) {
								return b.number - a.number;
							});
							var ts = target.getCards("h").sort(function (a, b) {
								return b.number - a.number;
							});
							if (!hs.length || !ts.length) return 0;
							if (hs[0].number > ts[0].number - 2 && hs[0].number > 5) return -1;
							return 0;
						},
					},
				},
			},
			//韩悝
			scsxiaolu: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					player.draw(2);
					"step 1";
					var num = player.countCards("h");
					if (!num) event.finish();
					else if (num < 2) event._result = { index: 1 };
					else
						player
							.chooseControl()
							.set("choiceList", ["将两张牌交给一名其他角色", "弃置两张牌"])
							.set("ai", function () {
								if (
									game.hasPlayer(function (current) {
										return current != player && get.attitude(player, current) > 0;
									})
								)
									return 0;
								return 1;
							});
					"step 2";
					if (result.index == 0) {
						player.chooseCardTarget({
							position: "h",
							filterCard: true,
							selectCard: 2,
							filterTarget: function (card, player, target) {
								return player != target;
							},
							ai1: function (card) {
								return get.unuseful(card);
							},
							ai2: function (target) {
								var att = get.attitude(_status.event.player, target);
								if (target.hasSkillTag("nogain")) att /= 10;
								if (target.hasJudge("lebu")) att /= 5;
								return att;
							},
							prompt: "选择两张手牌，交给一名其他角色",
							forced: true,
						});
					} else {
						player.chooseToDiscard(2, true, "h");
						event.finish();
					}
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.give(result.cards, target);
					}
				},
				ai: {
					order: 9,
					result: { player: 2 },
				},
			},
			//栗嵩
			scskuiji: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					event.list1 = [];
					event.list2 = [];
					if (player.countCards("h") > 0) {
						var chooseButton = player.chooseButton(4, ["你的手牌", player.getCards("h"), get.translation(target.name) + "的手牌", target.getCards("h")]);
					} else {
						var chooseButton = player.chooseButton(4, [get.translation(target.name) + "的手牌", target.getCards("h")]);
					}
					chooseButton.set("target", target);
					chooseButton.set("ai", function (button) {
						var player = _status.event.player;
						var target = _status.event.target;
						var ps = [];
						var ts = [];
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							var card = ui.selected.buttons[i].link;
							if (target.getCards("h").includes(card)) ts.push(card);
							else ps.push(card);
						}
						var card = button.link;
						var owner = get.owner(card);
						var val = get.value(card) || 1;
						if (owner == target) {
							return 2 * val;
						}
						return 7 - val;
					});
					chooseButton.set("filterButton", function (button) {
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (get.suit(button.link) == get.suit(ui.selected.buttons[i].link)) return false;
						}
						return true;
					});
					"step 1";
					if (result.bool) {
						var list = result.links;
						for (var i = 0; i < list.length; i++) {
							if (get.owner(list[i]) == player) {
								event.list1.push(list[i]);
							} else {
								event.list2.push(list[i]);
							}
						}
						if (event.list1.length && event.list2.length) {
							game.loseAsync({
								lose_list: [
									[player, event.list1],
									[target, event.list2],
								],
								discarder: player,
							}).setContent("discardMultiple");
						} else if (event.list2.length) {
							target.discard(event.list2);
						} else player.discard(event.list1);
					}
				},
				ai: {
					order: 13,
					result: {
						target: -1,
					},
				},
			},
			//段珪
			scschihe: {
				audio: 1,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.targets.length == 1 && event.card.name == "sha";
				},
				prompt2: function (event, player) {
					var str = "亮出牌堆顶的两张牌并增加伤害；且";
					str += "令" + get.translation(event.target) + "不能使用";
					str += "这两张牌所包含的花色";
					str += "的牌响应" + get.translation(event.card);
					return str;
				},
				logTarget: "target",
				locked: false,
				check: function (event, player) {
					var target = event.target;
					if (get.attitude(player, target) > 0) return false;
					return true;
				},
				content: function () {
					var num = 2;
					var evt = trigger.getParent();
					var suit = get.suit(trigger.card);
					var suits = [];
					if (num > 0) {
						if (typeof evt.baseDamage != "number") evt.baseDamage = 1;
						var cards = get.cards(num);
						player.showCards(cards.slice(0), get.translation(player) + "发动了【叱吓】");
						while (cards.length > 0) {
							var card = cards.pop();
							var suitx = get.suit(card, false);
							suits.add(suitx);
							if (suit == suitx) evt.baseDamage++;
						}
						game.updateRoundNumber();
					}
					evt._scschihe_player = player;
					var target = trigger.target;
					target.addTempSkill("scschihe_block");
					if (!target.storage.scschihe_block) target.storage.scschihe_block = [];
					target.storage.scschihe_block.push([evt.card, suits]);
					lib.skill.scschihe.updateBlocker(target);
				},
				updateBlocker: function (player) {
					var list = [],
						storage = player.storage.scschihe_block;
					if (storage && storage.length) {
						for (var i of storage) list.addArray(i[1]);
					}
					player.storage.scschihe_blocker = list;
				},
				ai: {
					threaten: 2.5,
				},
				subSkill: {
					block: {
						mod: {
							cardEnabled: function (card, player) {
								if (!player.storage.scschihe_blocker) return;
								var suit = get.suit(card);
								if (suit == "none" || suit == "unsure") return;
								var evt = _status.event;
								if (evt.name != "chooseToUse") evt = evt.getParent("chooseToUse");
								if (!evt || !evt.respondTo || evt.respondTo[1].name != "sha") return;
								if (player.storage.scschihe_blocker.includes(suit)) return false;
							},
						},
						trigger: {
							player: ["damageBefore", "damageCancelled", "damageZero"],
							target: ["shaMiss", "useCardToExcluded", "useCardToEnd"],
							global: ["useCardEnd"],
						},
						forced: true,
						firstDo: true,
						charlotte: true,
						popup: false,
						onremove: function (player) {
							delete player.storage.scschihe_block;
							delete player.storage.scschihe_blocker;
						},
						filter: function (event, player) {
							const evt = event.getParent("useCard", true, true);
							if (evt && evt.effectedCount < evt.effectCount) return false;
							if (!event.card || !player.storage.scschihe_block) return false;
							for (var i of player.storage.scschihe_block) {
								if (i[0] == event.card) return true;
							}
							return false;
						},
						content: function () {
							var storage = player.storage.scschihe_block;
							for (var i = 0; i < storage.length; i++) {
								if (storage[i][0] == trigger.card) {
									storage.splice(i--, 1);
								}
							}
							if (!storage.length) player.removeSkill("scschihe_block");
							else lib.skill.scschihe.updateBlocker(target);
						},
					},
				},
			},
			//郭胜
			scsniqu: {
				audio: 1,
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				selectTarget: 1,
				content: function () {
					target.damage("fire");
				},
				ai: {
					expose: 0.2,
					order: 5,
					result: {
						target: function (player, target) {
							return get.damageEffect(target, player, target, "fire") / 10;
						},
					},
				},
			},
			//高望
			scsanruo: {
				audio: 1,
				enable: ["chooseToUse", "chooseToRespond"],
				prompt: "将一张♥牌当做桃，♦牌当做火杀，♣牌当做闪，♠牌当做无懈可击使用或打出",
				viewAs: function (cards, player) {
					var name = false;
					var nature = null;
					switch (get.suit(cards[0], player)) {
						case "club":
							name = "shan";
							break;
						case "diamond":
							name = "sha";
							nature = "fire";
							break;
						case "spade":
							name = "wuxie";
							break;
						case "heart":
							name = "tao";
							break;
					}
					if (name) return { name: name, nature: nature };
					return null;
				},
				check: function (card) {
					var player = _status.event.player;
					if (_status.event.type == "phase") {
						var max = 0;
						var name2;
						var list = ["sha", "tao"];
						var map = { sha: "diamond", tao: "heart" };
						for (var i = 0; i < list.length; i++) {
							var name = list[i];
							if (
								player.countCards("hes", function (card) {
									return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
								}) > 0 &&
								player.getUseValue({ name: name, nature: name == "sha" ? "fire" : null }) > 0
							) {
								var temp = get.order({ name: name, nature: name == "sha" ? "fire" : null });
								if (temp > max) {
									max = temp;
									name2 = map[name];
								}
							}
						}
						if (name2 == get.suit(card, player)) return name2 == "diamond" ? 5 - get.value(card) : 20 - get.value(card);
						return 0;
					}
					return 1;
				},
				position: "hes",
				filterCard: function (card, player, event) {
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var name = get.suit(card, player);
					if (name == "club" && filter({ name: "shan", cards: [card] }, player, event)) return true;
					if (name == "diamond" && filter({ name: "sha", cards: [card], nature: "fire" }, player, event)) return true;
					if (name == "spade" && filter({ name: "wuxie", cards: [card] }, player, event)) return true;
					if (name == "heart" && filter({ name: "tao", cards: [card] }, player, event)) return true;
					return false;
				},
				filter: function (event, player) {
					var filter = event.filterCard;
					if (filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player, event) && player.countCards("hes", { suit: "diamond" })) return true;
					if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player, event) && player.countCards("hes", { suit: "club" })) return true;
					if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player, event) && player.countCards("hes", { suit: "heart" })) return true;
					if (filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) && player.countCards("hes", { suit: "spade" })) return true;
					return false;
				},
				precontent: function () {
					"step 0";
					player.addTempSkill("scsanruo_effect");
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						var name;
						switch (tag) {
							case "respondSha":
								name = "diamond";
								break;
							case "respondShan":
								name = "club";
								break;
							case "save":
								name = "heart";
								break;
						}
						if (!player.countCards("hes", { suit: name })) return false;
					},
					order: function (item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							var list = ["sha", "tao"];
							var map = { sha: "diamond", tao: "heart" };
							for (var i = 0; i < list.length; i++) {
								var name = list[i];
								if (
									player.countCards("hes", function (card) {
										return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
									}) > 0 &&
									player.getUseValue({
										name: name,
										nature: name == "sha" ? "fire" : null,
									}) > 0
								) {
									var temp = get.order({
										name: name,
										nature: name == "sha" ? "fire" : null,
									});
									if (temp > max) max = temp;
								}
							}
							max /= 1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard: function (player, name) {
					if (name == "wuxie" && _status.connectMode && player.countCards("hes") > 0) return true;
					if (name == "wuxie") return player.countCards("hes", { suit: "spade" }) > 0;
					if (name == "tao") return player.countCards("hes", { suit: "heart" }) > 0;
				},
				subSkill: {
					effect: {
						audio: "scsanruo",
						trigger: {
							player: ["useCard", "respond"],
						},
						filter: function (event, player) {
							return event.skill == "scsanruo";
						},
						direct: true,
						forced: true,
						charlotte: true,
						content: function () {
							"step 0";
							var name = trigger.card.name;
							var next = game.createEvent("scsanruo_" + name);
							next.player = player;
							next.setContent(lib.skill.scsanruo_effect[name == "shan" ? "sha" : name] || function () {});
						},
						sha: function () {
							"step 0";
							var trigger = event.getParent().getTrigger();
							if (trigger.name == "useCard") {
								var target = lib.skill.chongzhen.logTarget(trigger, player);
							} else {
								var target = trigger.source;
							}
							event.target = target;
							if (!target || !target.countGainableCards(player, "he")) event._result = { bool: false };
							else
								player
									.chooseBool(get.prompt("scsanruo_effect", target), "获得该角色的一张牌")
									.set("ai", () => {
										return _status.event.goon;
									})
									.set("goon", get.attitude(player, target) < 1);
							"step 1";
							if (result.bool) {
								player.logSkill("scsanruo_effect", target);
								player.gainPlayerCard(target, "he", true);
							}
						},
						tao: function () {
							"step 0";
							player
								.chooseTarget(get.prompt("scsanruo"), "获得一名其他角色的一张牌", (card, player, target) => {
									return target.countGainableCards(player, "he") && target != player;
								})
								.set("ai", target => {
									return 1 - get.attitude(_status.event.player, target);
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("scsanruo_effect", target);
								player.gainPlayerCard(target, "he", true);
							}
						},
						wuxie: function () {
							"step 0";
							var trigger = event.getParent().getTrigger();
							if (!trigger.respondTo) {
								event.finish();
								return;
							}
							var target = trigger.respondTo[0];
							event.target = target;
							if (!target || !target.countGainableCards(player, player == target ? "e" : "he")) event._result = { bool: false };
							else
								player
									.chooseBool(get.prompt("scsanruo_effect", target), "获得该角色的一张牌")
									.set("ai", () => {
										return _status.event.goon;
									})
									.set("goon", get.attitude(player, target) < 1);
							"step 1";
							if (result.bool) {
								player.logSkill("scsanruo_effect", target);
								player.gainPlayerCard(target, player == target ? "e" : "he", true);
							}
						},
					},
				},
			},
			scsmiaoyu: {
				audio: "scsanruo",
				enable: ["chooseToUse", "chooseToRespond"],
				prompt: "将至多两张♦牌当作火【杀】，♥牌当作【桃】，♣牌当作【闪】，♠牌当作【无懈可击】使用或打出",
				viewAs: function (cards, player) {
					var name = false;
					var nature = null;
					switch (get.suit(cards[0], player)) {
						case "club":
							name = "shan";
							break;
						case "diamond":
							name = "sha";
							nature = "fire";
							break;
						case "spade":
							name = "wuxie";
							break;
						case "heart":
							name = "tao";
							break;
					}
					//返回判断结果
					if (name) return { name: name, nature: nature };
					return null;
				},
				check: function (card) {
					if (ui.selected.cards.length) return 0;
					var player = _status.event.player;
					if (_status.event.type == "phase") {
						var max = 0;
						var name2;
						var list = ["sha", "tao"];
						var map = { sha: "diamond", tao: "heart" };
						for (var i = 0; i < list.length; i++) {
							var name = list[i];
							if (
								player.countCards("hes", function (card) {
									return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
								}) > 0 &&
								player.getUseValue({ name: name, nature: name == "sha" ? "fire" : null }) > 0
							) {
								var temp = get.order({ name: name, nature: name == "sha" ? "fire" : null });
								if (temp > max) {
									max = temp;
									name2 = map[name];
								}
							}
						}
						if (name2 == get.suit(card, player)) return name2 == "diamond" ? 5 - get.value(card) : 20 - get.value(card);
						return 0;
					}
					return 1;
				},
				selectCard: [1, 2],
				complexCard: true,
				position: "hes",
				filterCard: function (card, player, event) {
					if (ui.selected.cards.length) return get.suit(card, player) == get.suit(ui.selected.cards[0], player);
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var name = get.suit(card, player);
					if (name == "club" && filter({ name: "shan", cards: [card] }, player, event)) return true;
					if (name == "diamond" && filter({ name: "sha", cards: [card], nature: "fire" }, player, event)) return true;
					if (name == "spade" && filter({ name: "wuxie", cards: [card] }, player, event)) return true;
					if (name == "heart" && filter({ name: "tao", cards: [card] }, player, event)) return true;
					return false;
				},
				filter: function (event, player) {
					var filter = event.filterCard;
					if (filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player, event) && player.countCards("hes", { suit: "diamond" })) return true;
					if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player, event) && player.countCards("hes", { suit: "club" })) return true;
					if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player, event) && player.countCards("hes", { suit: "heart" })) return true;
					if (filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) && player.countCards("hes", { suit: "spade" })) return true;
					return false;
				},
				precontent: function () {
					player.addTempSkill("scsmiaoyu_num");
					player.addTempSkill("scsmiaoyu_discard");
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						var name;
						switch (tag) {
							case "respondSha":
								name = "diamond";
								break;
							case "respondShan":
								name = "club";
								break;
							case "save":
								name = "heart";
								break;
						}
						if (!player.countCards("hes", { suit: name })) return false;
					},
					order: function (item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							var list = ["sha", "tao"];
							var map = { sha: "diamond", tao: "heart" };
							for (var i = 0; i < list.length; i++) {
								var name = list[i];
								if (
									player.countCards("hes", function (card) {
										return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
									}) > 0 &&
									player.getUseValue({
										name: name,
										nature: name == "sha" ? "fire" : null,
									}) > 0
								) {
									var temp = get.order({
										name: name,
										nature: name == "sha" ? "fire" : null,
									});
									if (temp > max) max = temp;
								}
							}
							max /= 1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard: function (player, name) {
					if (name == "wuxie" && _status.connectMode && player.countCards("hs") > 0) return true;
					if (name == "wuxie") return player.countCards("hes", { suit: "spade" }) > 0;
					if (name == "tao") return player.countCards("hes", { suit: "heart" }) > 0;
				},
				subSkill: {
					num: {
						charlotte: true,
						trigger: { player: "useCard" },
						filter: function (event) {
							return ["sha", "tao"].includes(event.card.name) && event.skill == "scsmiaoyu" && event.cards && event.cards.length == 2;
						},
						forced: true,
						popup: false,
						content: function () {
							trigger.baseDamage++;
						},
					},
					discard: {
						charlotte: true,
						trigger: { player: ["useCardAfter", "respondAfter"] },
						autodelay: function (event) {
							return event.name == "respond" ? 0.5 : false;
						},
						filter: function (event, player) {
							return ["shan", "wuxie"].includes(event.card.name) && event.skill == "scsmiaoyu" && event.cards && event.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, "he");
						},
						forced: true,
						popup: false,
						content: function () {
							player.line(_status.currentPhase, "green");
							player.discardPlayerCard(_status.currentPhase, "he", true);
						},
					},
				},
			},
			//牵招
			mbshihe: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(current => player.canCompare(current));
				},
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) {
						target.addTempSkill("mbshihe_prevent", { player: "phaseAfter" });
						target.markAuto("mbshihe_prevent", [player]);
					} else {
						var cards = player.getCards("he", card => {
							return lib.filter.cardDiscardable(card, player, "mbshihe");
						});
						if (cards.length > 0) player.discard(cards.randomGet());
					}
				},
				ai: {
					order: 6,
					result: {
						player: function (player, target) {
							if ((get.realAttitude || get.attitude)(target, player) >= 0 || get.damageEffect(player, target, player) >= 0) return 0;
							var card = player.getCards("h").sort(function (a, b) {
								return get.number(b) - get.number(a);
							})[0];
							return get.number(card) >= 10 || (get.number(card) >= 7 && target.countCards("h") <= 2) ? 1 : -1;
						},
					},
				},
				subSkill: {
					prevent: {
						trigger: { source: "damageBegin2" },
						filter: function (event, player) {
							if (get.mode() == "identity") return player.getStorage("mbshihe_prevent").includes(event.player);
							return player.getStorage("mbshihe_prevent").some(target => event.player.isFriendOf(target));
						},
						onremove: true,
						forced: true,
						charlotte: true,
						content: function () {
							trigger.cancel();
						},
						mark: true,
						marktext: "吓",
						intro: {
							content: function (storage, player) {
								var targets = storage.filter(i => i.isIn());
								return "被" + get.translation(targets) + "吓到了，对他" + (targets.length > 1 ? "们" : "") + (get.mode() != "identity" ? "和他的友方角色" : "") + "打不出伤害";
							},
						},
						ai: {
							effect: {
								player: function (card, player, target, current) {
									if (get.tag(card, "damage")) {
										var bool = false;
										if (get.mode() == "identity" && player.getStorage("mbshihe_prevent").includes(target)) bool = true;
										if (get.mode() != "identity" && player.getStorage("mbshihe_prevent").some(targetx => target.isFriendOf(targetx))) bool = true;
										if (bool) return "zeroplayertarget";
									}
								},
							},
						},
					},
				},
			},
			mbzhenfu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.hasHistory("lose", evt => {
						return evt.type == "discard";
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("mbzhenfu"), "令一名其他角色获得1点护甲", (card, player, target) => {
							return target != player && target.hujia < 5;
						})
						.set("ai", target => {
							return Math.max(0, get.threaten(target)) * get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("mbzhenfu", target);
						target.changeHujia(1, null, true);
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			//☆胃炎
			mbguli: {
				audio: 2,
				enable: "phaseUse",
				filterCard: true,
				selectCard: -1,
				position: "h",
				filter: function (event, player) {
					if (player.hasSkill("mbguli_used")) return false;
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var card of hs) {
						var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
						if (mod2 === false) return false;
					}
					return event.filterCard(get.autoViewAs({ name: "sha" }, hs));
				},
				viewAs: {
					name: "sha",
					storage: { mbguli: true },
				},
				onuse: function (links, player) {
					player.addTempSkill("mbguli_used", "phaseUseAfter");
				},
				ai: {
					order: 1,
					threaten: 1.14,
					unequip_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.name == "sha" && arg.card && arg.card.storage && arg.card.storage.mbguli) return true;
						return false;
					},
				},
				subSkill: {
					used: {
						audio: "mbguli",
						trigger: { global: "useCardAfter" },
						charlotte: true,
						prompt2: "失去1点体力，然后将手牌摸至体力上限",
						check: function (event, player) {
							var num = player.maxHp - player.countCards("h");
							return (num >= 3 && player.hp >= 2) || (num >= 2 && player.hp >= 3);
						},
						filter: function (event, player) {
							return (
								event.card.storage &&
								event.card.storage.mbguli &&
								game.hasPlayer2(current => {
									return current.hasHistory("sourceDamage", evt => evt.card == event.card);
								})
							);
						},
						content: function () {
							"step 0";
							player.loseHp();
							"step 1";
							player.drawTo(player.maxHp);
						},
						group: "mbguli_unequip",
					},
					unequip: {
						trigger: {
							player: "useCardToPlayered",
						},
						filter: function ({ card }) {
							return card.name == "sha" && card.storage && card.storage.mbguli;
						},
						forced: true,
						popup: false,
						logTarget: "target",
						content: function () {
							trigger.target.addTempSkill("qinggang2");
							trigger.target.storage.qinggang2.add(trigger.card);
							trigger.target.markSkill("qinggang2");
						},
					},
				},
			},
			mbaosi: {
				audio: 2,
				trigger: { source: "damageSource" },
				forced: true,
				filter: function (event, player) {
					return player.inRange(event.player) && player.isPhaseUsing() && event.player.isIn() && !player.getStorage("mbaosi_inf").includes(event.player);
				},
				logTarget: "player",
				content: function () {
					player.addTempSkill("mbaosi_inf", "phaseUseAfter");
					player.markAuto("mbaosi_inf", [trigger.player]);
				},
				subSkill: {
					inf: {
						charlotte: true,
						onremove: true,
						forced: true,
						intro: { content: "对$使用牌无次数限制" },
						mod: {
							cardUsableTarget: function (card, player, target) {
								if (player.getStorage("mbaosi_inf").includes(target)) return true;
							},
						},
					},
				},
			},
			// 界曹休
			xinqingxi: {
				audio: 2,
				usable: 1,
				trigger: { source: "damageBegin1" },
				check: function (event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter: function (event, player) {
					return event.player != player;
				},
				content: function () {
					"step 0";
					var num = Math.max(1, 4 - get.distance(player, trigger.player));
					if (trigger.player.countCards("h") < num) {
						event._result = { bool: false };
					} else {
						trigger.player.chooseToDiscard(num, "弃置" + get.cnNumber(num) + "张手牌，或令" + get.translation(player) + "对你造成的此伤害+1").set("ai", function (card) {
							var player = _status.event.player;
							if (player.hp == 1) {
								if (get.type(card) == "basic") {
									return 8 - get.value(card);
								} else {
									return 10 - get.value(card);
								}
							} else {
								if (num > 2) {
									return 0;
								}
								return 8 - get.value(card);
							}
						});
					}
					"step 1";
					if (!result.bool) {
						trigger.num++;
					}
				},
			},
			// 界朱桓
			xinpingkou: {
				audio: 2,
				trigger: { player: "phaseEnd" },
				direct: true,
				filter: function (event, player) {
					return player.getHistory("skipped").length > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget([1, player.getHistory("skipped").length], get.prompt2("xinpingkou"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("xinpingkou", result.targets);
						event.targets = result.targets.slice(0).sortBySeat();
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets && event.targets.length) {
						event.targets.shift().damage();
						event.redo();
					}
					"step 3";
					var card = get.cardPile2(card => get.type(card, null, false) == "equip");
					if (card) player.gain(card, "gain2");
				},
				ai: {
					effect: {
						target: function (card) {
							if (card.name == "lebu" || card.name == "bingliang") return 0.5;
						},
					},
					combo: "fenli"
				},
			},
			// 彭羕
			spdaming: {
				audio: 3,
				trigger: { global: "phaseBefore", player: "enterGame" },
				forced: true,
				locked: false,
				logAudio: () => 2,
				global: "spdaming_give",
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				change: function (player, num) {
					if (!player.storage.spdaming) player.storage.spdaming = 0;
					if (!num) return;
					player.storage.spdaming += num;
					player.markSkill("spdaming");
					game.log(player, (num > 0 ? "获得了" : "减少了") + get.cnNumber(Math.abs(num)) + "点“达命”值");
				},
				content: function () {
					lib.skill.spdaming.change(player, 1);
				},
				intro: {
					name: "达命值",
					markcount: function (storage, player) {
						return (storage || 0).toString();
					},
					content: "当前有#点“达命”值",
				},
				subSkill: {
					used: { charlotte: true },
					give: {
						audio: ["spdaming", 2],
						enable: "phaseUse",
						forceaudio: true,
						nopop: true,
						filter: function (event, player) {
							if (!player.countCards("he")) return false;
							return game.hasPlayer(current => {
								return current != player && current.hasSkill("spdaming") && !current.hasSkill("spdaming_used");
							});
						},
						selectCard: 1,
						filterCard: true,
						filterTarget: function (card, player, target) {
							return target.hasSkill("spdaming") && !target.hasSkill("spdaming_used");
						},
						selectTarget: function () {
							var player = _status.event.player;
							var targets = game.filterPlayer(current => {
								return current != player && current.hasSkill("spdaming") && !current.hasSkill("spdaming_used");
							});
							return targets.length > 1 ? 1 : -1;
						},
						complexSelect: true,
						prompt: function () {
							var player = _status.event.player;
							var targets = game.filterPlayer(function (current) {
								return current != player && current.hasSkill("spdaming") && !current.hasSkill("spdaming_used");
							});
							return "将一张牌交给" + get.translation(targets) + (targets.length > 1 ? "中的一人" : "");
						},
						position: "he",
						discard: false,
						lose: false,
						delay: false,
						check: function (card) {
							var player = _status.event.player;
							if (
								game.hasPlayer(current => {
									return lib.skill.spdaming_give.filterTarget(null, player, current) && get.attitude(player, current) > 0;
								})
							) {
								return 6 + Math.random() - get.value(card) / 15;
							}
							return 0;
						},
						content: function () {
							"step 0";
							player.give(cards, target);
							if (!game.hasPlayer(current => current != player && current != target)) event.finish();
							target.addTempSkill("spdaming_used", "phaseUseAfter");
							"step 1";
							var type = get.type(cards[0], "trick", target);
							event.cardtype = type;
							var str = get.translation(type),
								user = get.translation(player);
							target
								.chooseTarget("达命：选择另一名其他角色", "若该角色有" + str + "牌，其将一张该类型的牌交给" + user + "，你获得1点“达命”值；否则你将" + get.translation(cards) + "交给" + user, (card, player, target) => {
									return target != player && target != _status.event.getParent().player;
								})
								.set("ai", target => 1 - get.attitude(_status.event.player, target));
							"step 2";
							if (result.bool) {
								var targetx = result.targets[0],
									type = event.cardtype;
								target.line(targetx);
								event.targetx = targetx;
								if (targetx.countCards("he", { type: type }) > 0) {
									targetx
										.chooseCard("交给" + get.translation(player) + "一张" + get.translation(type) + "牌", "he", true, card => {
											return get.type(card) == _status.event.getParent().cardtype;
										})
										.set("ai", card => 10 - get.value(card));
								} else {
									var cards = cards.filter(i => get.owner(i) == target);
									if (cards.length) {
										target.give(cards, player);
										game.broadcastAll(() => {
											if (lib.config.background_speak) {
												game.playAudio("skill", "spdaming3");
											}
										});
									}
									event.finish();
								}
							} else event.finish();
							"step 3";
							if (result.bool) {
								event.targetx.give(result.cards, player);
								event.targetx.line(player);
								lib.skill.spdaming.change(target, 1);
								game.delayx();
							}
						},
						ai: {
							expose: 0.2,
							order: 10,
							result: { target: 1 },
						},
					},
				},
			},
			spxiaoni: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				locked: false,
				filter: function (event, player) {
					return (player.storage.spdaming || 0) > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (name == "sha") {
								list.push(["基本", "", "sha"]);
								for (var i of lib.inpile_nature) list.push(["基本", "", "sha", i]);
							}
							if (!get.tag({ name: name }, "damage")) continue;
							if (get.type2(name) == "trick") list.push(["锦囊", "", name]);
						}
						return ui.create.dialog("嚣逆", [list, "vcard"]);
					},
					filter: function (button, player) {
						return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						if (player.countCards("hs", button.link[2]) > 0) return 0;
						var effect = player.getUseValue(button.link[2]);
						if (effect > 0) return effect;
						return 0;
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							audio: "spxiaoni",
							selectCard: 1,
							popname: true,
							check: function (card) {
								return 6 - get.value(card);
							},
							position: "hes",
							viewAs: { name: links[0][2], nature: links[0][3] },
							onuse: function (result, player) {
								lib.skill.spdaming.change(player, -result.targets.length);
							},
						};
					},
					prompt: function (links, player) {
						return "将一张牌当" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】使用";
					},
				},
				mod: {
					maxHandcardBase: function (player, num) {
						return Math.min(Math.max(0, player.storage.spdaming || 0), player.hp);
					},
				},
				ai: {
					order: 4,
					result: {
						player: 1,
					},
					threaten: 1.4,
					combo: "spdaming",
				},
				subSkill: {
					backup: {},
				},
			},
			// 灭霸
			zhujian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.countCards("e") > 0;
				},
				selectTarget: [2, Infinity],
				multiline: true,
				multitarget: true,
				filter: function (event, player) {
					return game.countPlayer(current => current.countCards("e") > 0) >= 2;
				},
				content: function () {
					game.asyncDraw(targets);
				},
				ai: {
					order: 8,
					result: { target: 1 },
				},
			},
			duansuo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.isLinked();
				},
				selectTarget: [1, Infinity],
				multiline: true,
				multitarget: true,
				filter: function (event, player) {
					return game.countPlayer(current => current.isLinked());
				},
				content: function () {
					"step 0";
					event.targets = targets.sortBySeat();
					for (var i of event.targets) {
						i.link(false);
					}
					"step 1";
					for (var i of targets) {
						i.damage("fire");
					}
				},
				ai: {
					order: 2,
					result: { target: -1 },
				},
			},
			// 界朱治
			sbanguo: {
				audio: 3,
				trigger: { global: "phaseBefore", player: "enterGame" },
				forced: true,
				locked: false,
				direct: true,
				group: ["sbanguo_move", "sbanguo_damage", "sbanguo_dying"],
				logAudio: () => 2,
				filter: function (event, player) {
					return game.hasPlayer(current => current != player) && (event.name != "phase" || game.phaseNumber == 0);
				},
				content: function () {
					"step 0";
					player.chooseTarget("安国：令一名其他角色获得“安国”标记", lib.filter.notMe, true);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("sbanguo", target, null, null, [get.rand(1, 2)]);
						target.addMark("sbanguo_mark", 1, false);
						target.addAdditionalSkill("sbanguo_" + player.playerid, "sbanguo_mark");
						target.addMark("sbanguo_marked", 1, false);
					}
				},
				subSkill: {
					mark: {
						onremove: true,
						marktext: "安",
						charlotte: true,
						intro: {
							name: "安国",
							name2: "安国",
							content: "已拥有“安国”标记",
						},
						mod: {
							maxHandcardBase: function (player, num) {
								return player.maxHp;
							},
						},
					},
					move: {
						audio: ["sbanguo1.mp3", "sbanguo2.mp3"],
						direct: true,
						trigger: { player: "phaseUseBegin" },
						filter: function (event, player) {
							return game.hasPlayer(current => current.hasSkill("sbanguo_mark")) && game.hasPlayer(current => !current.hasMark("sbanguo_marked") && current != player);
						},
						content: function () {
							"step 0";
							var targets = game.filterPlayer(current => current.hasSkill("sbanguo_mark"));
							var prompt2 = targets.length == 1 ? "将" + get.translation(targets[0]) + "的“安国”交给一名未获得过“安国”的其他角色" : "选择一名有“安国”的角色，将该标记交给一名未获得过“安国”的其他角色";
							player
								.chooseTarget(get.prompt("sbanguo"), prompt2, targets.length == 1 ? 1 : 2, (card, player, target) => {
									if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) return target.hasSkill("sbanguo_mark");
									return !target.hasMark("sbanguo_marked") && target != player;
								})
								.set("ai", target => {
									var player = _status.event.player;
									if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) return -get.attitude(player, target);
									return get.attitude(player, _status.event.targets[0]) < get.attitude(player, target);
								})
								.set("targets", targets);
							"step 1";
							if (result.bool) {
								var targets = result.targets;
								if (targets.length == 1) {
									var target1 = game.filterPlayer(current => current.hasSkill("sbanguo_mark"))[0];
									var target2 = targets[0];
								} else {
									var target1 = targets[0];
									var target2 = targets[1];
								}
								player.logSkill("sbanguo_move", target2, false);
								player.line2([target1, target2], "green");
								var map = target1.additionalSkills;
								for (var key in map) {
									if (key.indexOf("sbanguo_") != 0) continue;
									var id = parseInt(key.slice(8));
									target1.removeAdditionalSkill("sbanguo_" + id);
									target2.addMark("sbanguo_mark", 1, false);
									target2.addAdditionalSkill("sbanguo_" + id, "sbanguo_mark");
									target2.addMark("sbanguo_marked", 1, false);
								}
							}
						},
					},
					damage: {
						audio: ["sbanguo1.mp3", "sbanguo2.mp3"],
						forced: true,
						locked: false,
						trigger: { player: "damageBegin4" },
						filter: function (event, player) {
							if (!game.hasPlayer(current => current.hasSkill("sbanguo_mark"))) return false;
							if (event.source && event.source.isIn() && event.source.hasSkill("sbanguo_mark")) return false;
							return event.num >= player.hp;
						},
						content: function () {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							nothunder: true,
							nodamage: true,
							effect: {
								target: function (card, player, target, current) {
									if (!game.hasPlayer(current => current.hasSkill("sbanguo_mark"))) return;
									if (player.hasSkill("sbanguo_mark")) return;
									if (get.tag(card, "damage")) {
										if (target.hp <= 1) return [0, 0];
										return 0.5;
									}
								},
							},
						},
					},
					dying: {
						audio: "sbanguo3.mp3",
						forced: true,
						locked: false,
						trigger: { global: "dying" },
						filter: function (event, player) {
							var skills = event.player.additionalSkills["sbanguo_" + player.playerid];
							return skills && skills.length;
						},
						logTarget: "player",
						content: function () {
							"step 0";
							trigger.player.removeAdditionalSkill("sbanguo_" + player.playerid);
							var num = 1 - trigger.player.hp;
							if (num > 0) trigger.player.recover(num);
							"step 1";
							var hp = player.hp - 1,
								maxhp = player.maxHp - 1;
							if (hp > 0 && maxhp > 0) {
								player
									.chooseControl()
									.set("prompt", "安国：请选择一项")
									.set("choiceList", ["失去" + hp + "点体力，令" + get.translation(trigger.player) + "获得1点护甲", "减" + maxhp + "点体力上限，令" + get.translation(trigger.player) + "获得1点护甲"])
									.set("ai", () => "选项一");
							} else if (hp > 0) event._result = { control: "选项一" };
							else if (maxhp > 0) event._result = { control: "选项二" };
							else event.finish();
							"step 2";
							if (result.control == "选项一") {
								var num = player.hp - 1;
								if (num > 0) player.loseHp(num);
							} else {
								var num = player.maxHp - 1;
								if (num > 0) player.loseMaxHp(num);
							}
							trigger.player.changeHujia(1, null, true);
						},
					},
				},
			},
			// 界吴懿
			sbbenxi: {
				audio: 3,
				trigger: {
					player: "phaseUseBegin",
				},
				filter: function (event, player) {
					return player.countDiscardableCards(player, "he") > 0;
				},
				logAudio: () => 1,
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseToDiscard(get.prompt2("sbbenxi"), [1, Infinity], "he")
						.set("logSkill", ["sbbenxi", null, null, null, [1]])
						.set("ai", card => {
							var player = _status.event.player;
							if (ui.selected.cards.length < _status.event.num) return 100 - (get.useful(card, player) + player.getUseValue(card) / 3);
							return 0;
						})
						.set(
							"num",
							(function () {
								var count = 0;
								var list = [],
									list2 = [];
								var targets = game.filterPlayer(current => get.distance(player, current) >= 1);
								var cards = player.getCards("hs", card => {
									return player.hasUseTarget(card, false) && ["basic", "trick"].includes(get.type(card, false, player)) && get.info(card).allowMultiple != false;
								});
								var cards2 = player
									.getCards("he")
									.filter(i => lib.filter.cardDiscardable(i, player, "sbbenxi"))
									.sort((a, b) => {
										return get.useful(a, player) + player.getUseValue(a) / 3 - (get.useful(b, player) + player.getUseValue(b) / 3);
									});
								for (var i = 0; i < cards2.length; i++) {
									count = 0;
									list = [];
									for (var card of cards) {
										var num = i + 1;
										if (cards2.slice(0, num).includes(card)) continue;
										if (get.tag(card, "damage") && i > 0) count += get.effect(player, { name: "draw" }, player);
										var targets2 = targets.filter(current => {
											return player.canUse(card, current, false) && get.distance(player, current) <= num && get.effect(current, card, player, player) > 0;
										});
										targets2 = targets2.map(target => get.effect(target, card, player, player)).sort((a, b) => b - a);
										targets2.slice(0, num).forEach(eff => (count += eff));
										list.push(count - 1.2 * get.value(cards2[i]));
									}
									var val = list.sort((a, b) => b - a)[0];
									if (!isNaN(val)) list2.push([val, i]);
								}
								list2 = list2.filter(i => i[0] > 0);
								if (!list2.length) return 0;
								return list2.sort((a, b) => b[0] - a[0])[0][1];
							})()
						);
					"step 1";
					if (result.bool) {
						var num = result.cards.length;
						player.addTempSkill("sbbenxi_effect", "phaseUseAfter");
						player.addTempSkill("sbbenxi_effect2", "phaseUseAfter");
						player.addMark("sbbenxi_effect2", num, false);
					}
				},
				subSkill: {
					effect: {
						audio: "sbbenxi2.mp3",
						trigger: { player: "useCard2" },
						forced: true,
						charlotte: true,
						direct: true,
						onremove: true,
						filter: function (event, player) {
							var type = get.type(event.card, null, false);
							return type == "basic" || type == "trick";
						},
						content: function () {
							"step 0";
							var num = player.countMark("sbbenxi_effect2");
							player.removeSkill("sbbenxi_effect");
							player.addTempSkill("sbbenxi_effect3", "phaseUseAfter");
							player.markAuto("sbbenxi_effect3", [trigger.card]);
							var filter = function (event, player) {
								var card = event.card,
									info = get.info(card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.distance(player, current) == 1;
										})
									) {
										return true;
									}
								}
								return false;
							};
							if (!filter(trigger, player)) event.finish();
							else {
								var prompt = "为" + get.translation(trigger.card) + "增加至多" + get.cnNumber(num) + "个距离为1的目标？";
								trigger.player
									.chooseTarget(get.prompt("sbbenxi_effect"), prompt, [1, num], function (card, player, target) {
										var player = _status.event.player;
										return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target) && get.distance(player, target) == 1;
									})
									.set("ai", function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									})
									.set("card", trigger.card)
									.set("targets", trigger.targets);
							}
							"step 1";
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayx();
							} else event.finish();
							"step 2";
							player.logSkill("sbbenxi_effect", result.targets);
							game.log(result.targets, "也成为了", trigger.card, "的目标");
							trigger.targets.addArray(result.targets);
						},
						ai: {
							effect: {
								target: function (card, player, target) {
									if (player.canUse(card, target) && get.distance(player, target) != 1) return 1.2;
								},
							},
						},
					},
					effect2: {
						audio: "sbbenxi3.mp3",
						trigger: {
							global: "useCardAfter",
						},
						forced: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return (
								player.getStorage("sbbenxi_effect3").includes(event.card) &&
								game.hasPlayer2(current => {
									return current.hasHistory("damage", evt => {
										return event.card == evt.card;
									});
								})
							);
						},
						content: function () {
							player.draw(5);
						},
						mod: {
							aiOrder: function (player, card, num) {
								var evt = _status.event.getParent("phaseUse");
								if (!evt || evt.player != player) return;
								if (
									player.hasHistory("useCard", evtx => {
										return evtx.getParent("phaseUse") == evt && ["basic", "trick"].includes(get.type(evtx.card));
									})
								)
									return;
								if (get.tag(card, "damage") || get.type(card) == "equip") return num + 10;
							},
							globalFrom: function (from, to, distance) {
								return distance - from.countMark("sbbenxi_effect2");
							},
						},
						marktext: "奔",
						intro: {
							content: function (storage, player) {
								var str = "于此阶段至其他角色的距离-" + storage;
								if (player.hasSkill("sbbenxi_effect")) str += "；使用下一张基本牌或普通锦囊牌选择目标后，可以增加" + get.cnNumber(storage) + "个目标";
								return str;
							},
						},
					},
					effect3: {
						forced: true,
						charlotte: true,
						popup: false,
						onremove: true,
					},
				},
			},
			// 杨阜
			jiebing: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				direct: true,
				forced: true,
				filter: function (event, player) {
					return game.hasPlayer(current => {
						return current != event.source && current != player && current.countGainableCards(player, "he");
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget("借兵：选择一名其他角色", get.skillInfoTranslation("jiebing"), true, (card, player, target) => {
							return player != target && target != _status.event.getTrigger().source && target.countGainableCards(player, "he");
						})
						.set("ai", target => get.effect(target, { name: "shunshou_copy2" }, player, player) /** (target.countCards('he')>1?1.5:1)*/);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("jiebing", target);
						if (target.ai.shown > 0) player.addExpose(0.15);
						var cards = target.getGainableCards(player, "he").randomGets(1);
						event.cards = cards;
						player.gain(target, cards, "give", "bySelf");
						player.showCards(cards, "借兵");
					} else event.finish();
					"step 2";
					for (var card of cards) {
						if (get.type(card) == "equip" && player.hasUseTarget(card) && get.owner(card) == player) {
							player.chooseUseTarget(card, true);
						}
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (player != target && !player.getFriends().length) return;
								if (
									game.hasPlayer(current => {
										return current != player && get.attitude(player, current) > 0 && current.countGainableCards(target, "he") > 0;
									})
								)
									return [1, 1];
							}
						},
					},
				},
			},
			hannan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return !player.hasSkillTag("noCompareSource");
				},
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (!result.tie) {
						var players = [player, target];
						if (result.bool) players.reverse();
						players[1].line(players[0], "thunder");
						players[0].damage(players[1], 1);
					}
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							var hs = player.getCards("h").sort(function (a, b) {
								return get.number(b) - get.number(a);
							});
							var ts = target.getCards("h").sort(function (a, b) {
								return get.number(b) - get.number(a);
							});
							if (!hs.length || !ts.length) return 0;
							if (get.number(hs[0]) > get.number(ts[0]) || get.number(hs[0]) - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.damageEffect(target, player, player);
							return 0;
						},
					},
				},
			},
			// 曹嵩
			yijin: {
				audio: 3,
				trigger: { player: "phaseUseBegin" },
				forced: true,
				direct: true,
				group: ["yijin_upstart", "yijin_die"],
				filter: function (event, player) {
					if (!game.hasPlayer(current => current != player && !lib.skill.yijin.getKane(current).length)) return false;
					return lib.skill.yijin.getKane(player).length;
				},
				getKane: function (player) {
					var list = lib.skill.yijin.derivation;
					return list.filter(mark => player.hasMark(mark));
				},
				derivation: ["yijin_wushi", "yijin_jinmi", "yijin_guxiong", "yijin_tongshen", "yijin_yongbi", "yijin_houren"],
				getValue: function (player, mark, target) {
					let dis = Math.sqrt(get.distance(player, target, "absolute"));
					if (target.isTurnedOver()) dis++;
					let draw = get.effect(target, { name: "draw" }, target, target);
					switch (mark.slice(6)) {
						case "wushi":
							if (target.hasJudge("bingliang")) return 12 / (1 + target.getCardUsable("sha", true));
							return (5 * draw) / dis + 12 / (1 + target.getCardUsable("sha", true));
						case "jinmi":
							if (target.hasJudge("lebu") && !target.hasCard({ name: "wuxie" }, "hs")) return (draw * target.needsToDiscard(2.2)) / dis;
							return get.effect(target, { name: "lebu" }, player, target) + (draw * target.needsToDiscard(2.2)) / dis;
						case "guxiong":
							if (target.hasJudge("lebu")) return (-draw * target.needsToDiscard(3)) / dis;
							return (get.effect(target, { name: "losehp" }, target, target) * 2) / dis - (draw * target.needsToDiscard(3)) / dis;
						case "tongshen":
							if (target.isMin()) return 0;
							var eff = -get.damageEffect(target, player, target);
							if (eff <= 0) return 0;
							if (target.hp < 2) return eff * dis * 2;
							if (target.hp < 3 && target.countCards("he") < 3) return eff * dis * 1.5;
							if (target.hp > 3) return (eff * dis) / target.hp;
							return eff * dis;
						case "yongbi":
							if (target.hasJudge("bingliang") && !target.hasCard({ name: "wuxie" }, "hs")) return 0;
							return (get.effect(target, { name: "bingliang" }, player, target) * 2) / dis;
						case "houren":
							return (Math.min(5, 2 + target.getDamagedHp()) * get.recoverEffect(target, player, target)) / dis;
					}
				},
				content: function () {
					"step 0";
					player
						.chooseTarget("亿金：令一名其他角色获得1枚“金”", true, (card, player, target) => {
							return player != target && !lib.skill.yijin.getKane(target).length;
						})
						.set("ai", target => {
							let player = _status.event.player,
								att = get.attitude(player, target),
								kane = lib.skill.yijin.getKane(player);
							if (Math.abs(att) > 1) att = Math.sign(att) * Math.sqrt(Math.abs(att));
							return Math.max.apply(
								Math.max,
								kane.map(i => {
									return att * lib.skill.yijin.getValue(player, i, target);
								})
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						var kane = lib.skill.yijin.getKane(player);
						var choiceList = kane.map(i => {
							return '<div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div>" + "<div>" + get.skillInfoTranslation(i, player) + "</div>";
						});
						player
							.chooseControl(kane)
							.set("choiceList", choiceList)
							.set("displayIndex", false)
							.set("prompt", "选择令" + get.translation(target) + "获得的“金”")
							.set("ai", () => {
								let controls = _status.event.controls,
									player = _status.event.player,
									target = _status.event.getParent().target,
									att = get.attitude(player, target);
								if (Math.abs(att) > 1) att = Math.sign(att) * Math.sqrt(Math.abs(att));
								let list = controls.map(i => {
									return [i, att * lib.skill.yijin.getValue(player, i, target)];
								});
								list.sort((a, b) => b[1] - a[1]);
								if (list.length) return list[0][0];
								return controls.randomGet();
							});
					} else event.finish();
					"step 2";
					var kane = result.control;
					player.logSkill("yijin", target, null, null, [['yijin_jinmi', 'yijin_guxiong', 'yijin_yongbi'].includes(result.control) ? 2 : 1]);
					player.removeMark(kane, 1);
					player.popup(kane, "metal");
					player.addSkill("yijin_clear");
					target.addMark(kane, 1);
					target.addAdditionalSkill("yijin_" + player.playerid, kane);
					game.delayx();
				},
				subSkill: {
					mark: {
						mark: true,
						marktext: "金",
						intro: {
							name: "亿金",
							name2: "亿金",
							markcount: function (storage, player) {
								return lib.skill.yijin.getKane(player).length;
							},
							content: function (storage, player) {
								return "剩余金：" + get.translation(lib.skill.yijin.getKane(player));
							},
						},
					},
					upstart: {
						audio: "yijin1.mp3",
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						filter: function (event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						content: function () {
							var kane = lib.skill.yijin.derivation;
							for (var mark of kane) {
								player.addMark(mark, 1, false);
								player.unmarkSkill(mark);
							}
							player.addSkill("yijin_mark");
						},
					},
					die: {
						audio: "yijin3.mp3",
						trigger: { player: "phaseBegin" },
						forced: true,
						check: () => false,
						filter: function (event, player) {
							return !lib.skill.yijin.getKane(player).length;
						},
						content: function () {
							player.die();
						},
					},
					clear: {
						trigger: {
							global: "phaseAfter",
							player: "die",
						},
						charlotte: true,
						forced: true,
						popup: false,
						forceDie: true,
						filter: function (event, player) {
							if (event.name == "die") return true;
							return lib.skill.yijin.getKane(event.player).length && event.player.additionalSkills["yijin_" + player.playerid];
						},
						content: function () {
							"step 0";
							if (trigger.name == "die") {
								game.countPlayer(current => {
									var skills = current.additionalSkills["yijin_" + player.playerid];
									if (skills && skills.length) {
										current.removeAdditionalSkill("yijin_" + player.playerid);
										for (var i of skills) {
											trigger.player.removeSkill(i);
										}
									}
								});
								event.finish();
								return;
							} else {
								const skills = trigger.player.additionalSkills["yijin_" + player.playerid];
								for (const mark of skills) trigger.player.removeMark(mark, 1);
							}
							"step 1";
							trigger.player.removeAdditionalSkill("yijin_" + player.playerid);
						},
					},
					wushi: {
						charlotte: true,
						forced: true,
						trigger: { player: "phaseDrawBegin2" },
						content: function () {
							trigger.num += 4;
						},
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + 1;
							},
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(膴仕)",
							name2: "金(膴仕)",
							content: "摸牌阶段多摸四张牌；使用【杀】的次数上限+1",
						},
					},
					jinmi: {
						charlotte: true,
						forced: true,
						trigger: { player: "phaseBegin" },
						content: function () {
							player.skip("phaseUse");
							player.skip("phaseDiscard");
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(金迷)",
							name2: "金(金迷)",
							content: "回合开始时，跳过下一个出牌阶段和弃牌阶段",
						},
					},
					guxiong: {
						charlotte: true,
						forced: true,
						trigger: { player: "phaseUseBegin" },
						content: function () {
							player.loseHp();
						},
						ai: {
							neg: true,
							nokeep: true,
						},
						mod: {
							maxHandcard: function (player, num) {
								return num - 3;
							},
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(贾凶)",
							name2: "金(贾凶)",
							content: "出牌阶段开始时，失去1点体力；手牌上限-3",
						},
					},
					tongshen: {
						charlotte: true,
						forced: true,
						trigger: { player: "damageBegin4" },
						filter: function (event) {
							return !event.hasNature("thunder");
						},
						content: function () {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							nodamage: true,
							effect: {
								target: function (card, player, target, current) {
									if (get.tag(card, "damage") && !get.tag(card, "thunderDamage")) return [0, 0];
								},
							},
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(通神)",
							name2: "金(通神)",
							content: "当你受到非雷电伤害时，防止之",
						},
					},
					yongbi: {
						charlotte: true,
						forced: true,
						trigger: { player: "phaseZhunbeiBegin" },
						content: function () {
							player.skip("phaseDraw");
						},
						ai: {
							neg: true,
							nokeep: true,
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(拥蔽)",
							name2: "金(拥蔽)",
							content: "准备阶段，跳过下一个摸牌阶段",
						},
					},
					houren: {
						charlotte: true,
						forced: true,
						trigger: { player: "phaseEnd" },
						content: function () {
							player.recover(3);
						},
						nopop: true,
						marktext: "金",
						intro: {
							name: "金(厚任)",
							name2: "金(厚任)",
							content: "回合结束时，回复3点体力",
						},
					},
				},
			},
			guanzong: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.countPlayer(current => current != player) >= 2;
				},
				filterTarget: lib.filter.notMe,
				selectTarget: 2,
				multitarget: true,
				targetprompt: ["伤害来源", "受伤角色"],
				content: function () {
					targets[1].damage(targets[0], "unreal");
				},
				ai: {
					result: {
						target: function (player, target) {
							if (game.countPlayer(i => i != player) < 2) return 0;
							var list = game
								.filterPlayer(current => current != player)
								.map(current => {
									var _hp = current.hp,
										_maxhp = current.maxHp;
									current.hp = 10;
									current.maxHp = 10;
									var att = -get.sgnAttitude(player, current);
									var val = get.damageEffect(current, player, current) * att;
									current.getSkills(null, false, false).forEach(skill => {
										var info = get.info(skill);
										if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? "max" : "min"](val > 0 ? 0.1 : -0.1, val + 2 * att);
									});
									var eff = 100 / val + 15;
									current.hp = _hp;
									current.maxHp = _maxhp;
									return [current, eff];
								})
								.sort((a, b) => b[1] - a[1])[0];
							if (list[1] < 0) return 0;
							var targetx = list[0],
								sign = get.sgnAttitude(player, target);
							if (ui.selected.targets.length) return target == targetx ? sign : 0;
							return (
								sign *
								(game
									.filterPlayer(current => {
										return current != player && current != targetx;
									})
									.map(current => {
										var _hp = targetx.hp,
											_maxhp = targetx.maxHp;
										targetx.hp = 10;
										targetx.maxHp = 10;
										var eff = -get.damageEffect(targetx, current, current);
										targetx.hp = _hp;
										targetx.maxHp = _maxhp;
										return [current, eff];
									})
									.sort((a, b) => b[1] - a[1])[0][0] == target
									? 10
									: 1)
							);
						},
					},
					order: 9.5,
					expose: 0.2,
				},
			},
			//马日磾
			chengye: {
				audio: 3,
				liujing_filter: [
					function (card) {
						return get.type(card, null, false) == "trick" && get.tag(card, "damage", null, false) > 0;
					},
					card => get.type(card, null, false) == "basic",
					card => get.name(card, false) == "wuxie",
					card => get.name(card, false) == "wuzhong",
					card => get.name(card, false) == "lebu",
					card => get.type(card, null, false) == "equip",
				],
				getLiujing: function (player, index) {
					var filter = lib.skill.chengye.liujing_filter[index],
						expansion = player.getExpansions("chengye");
					for (var i of expansion) {
						if (filter(i)) return i;
					}
					return false;
				},
				trigger: {
					global: ["useCardAfter", "loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
				},
				forced: true,
				filter: function (event, player) {
					if (player == event.player) return false;
					if (event.name == "useCard") {
						if (!event.card.isCard) return false;
						var cards = event.cards.filterInD();
						if (!cards.length) return false;
					} else if (event.name != "cardsDiscard") {
						var cards = event.getd(null, "cards2").filter(function (card) {
							if (get.position(card, true) != "d") return false;
							var type = get.type(card, null, false);
							return type == "delay" || type == "equip";
						});
						cards.removeArray(event.getd(player, "cards2"));
						if (!cards.length) return false;
					} else {
						var evtx = event.getParent();
						if (evtx.name != "orderingDiscard") return false;
						var evt2 = evtx.relatedEvent || evtx.getParent();
						if (evt2.name != "phaseJudge" || evt2.player == player) return;
						var cards = event.cards.filter(function (card) {
							if (get.position(card, true) != "d") return false;
							var type = get.type(card, null, false);
							return type == "delay";
						});
						if (!cards.length) return false;
					}
					for (var i = 0; i < 6; i++) {
						if (lib.skill.chengye.getLiujing(player, i)) continue;
						for (var j of cards) {
							if (lib.skill.chengye.liujing_filter[i](j)) return true;
						}
					}
					return false;
				},
				content: function () {
					var cards,
						cards2 = [];
					if (trigger.name == "useCard") {
						cards = trigger.cards.filterInD();
					} else if (trigger.name != "cardsDiscard") {
						cards = trigger.getd().filter(function (card) {
							if (card.original == "j" || get.position(card, true) != "d") return false;
							var type = get.type(card, null, false);
							return type == "delay" || type == "equip";
						});
						cards.removeArray(trigger.getd(player));
					} else {
						cards = trigger.cards.filter(function (card) {
							if (get.position(card, true) != "d") return false;
							var type = get.type(card, null, false);
							return type == "delay";
						});
					}
					for (var i = 0; i < 6; i++) {
						if (lib.skill.chengye.getLiujing(player, i)) continue;
						for (var j of cards) {
							if (lib.skill.chengye.liujing_filter[i](j)) {
								cards.remove(j);
								cards2.push(j);
								break;
							}
						}
						if (!cards.length) break;
					}
					player.addToExpansion(cards2, "gain2").gaintag.add("chengye");
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				mark: true,
				marktext: "经",
				intro: {
					name: "六经",
					markcount: "expansion",
					content: "expansion",
					mark: function (dialog, storage, player) {
						var list = ["《诗经》", "《尚书》", "《仪礼》", "《易经》", "《乐经》", "《春秋》"];
						var desc = ["伤害类锦囊牌", "基本牌", "无懈可击", "无中生有", "乐不思蜀", "装备牌"];
						for (var i = 0; i < 6; i++) {
							dialog.addText(list[i]);
							var card = lib.skill.chengye.getLiujing(player, i);
							if (!card) dialog.addText("（缺少 " + desc[i] + "）");
							else dialog.addSmall([card]);
						}
					},
				},
				group: "chengye_gain",
				subSkill: {
					gain: {
						audio: "chengye",
						trigger: { player: "phaseUseBegin" },
						filter: function (event, player) {
							return player.getExpansions("chengye").length >= 6;
						},
						forced: true,
						content: function () {
							player.gain(player.getExpansions("chengye"), "gain2");
						},
					},
				},
			},
			buxu: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					var num = (player.getStat("skill").buxu || 0) + 1;
					return player.countCards("he") >= num && player.getExpansions("chengye").length < 6;
				},
				chooseButton: {
					chooseControl: function (event, player) {
						var list = ["诗经", "尚书", "仪礼", "易经", "乐经", "春秋"];
						var choices = [];
						for (var i = 0; i < 6; i++) {
							if (!lib.skill.chengye.getLiujing(player, i)) choices.push(list[i]);
						}
						choices.push("cancel2");
						return choices;
					},
					check: function (event, player) {
						var list = [4, 3, 5, 0, 2, 1];
						for (var i of list) {
							if (!lib.skill.chengye.getLiujing(player, i)) {
								return ["诗经", "尚书", "仪礼", "易经", "乐经", "春秋"][i];
							}
						}
						return "cancel2";
					},
					dialog: function (event, player) {
						var num = (player.getStat("skill").buxu || 0) + 1;
						return ui.create.dialog("###补续###弃置" + get.cnNumber(num) + "张牌并补充一张“六经”");
					},
					prompt: function (links, player) {
						var num = (player.getStat("skill").buxu || 0) + 1;
						return "弃置" + get.cnNumber(num) + "张牌并补充一张《" + links.control + "》";
					},
					backup: function (links, player) {
						return {
							audio: "buxu",
							index: ["诗经", "尚书", "仪礼", "易经", "乐经", "春秋"].indexOf(links.control),
							filterCard: true,
							position: "he",
							selectCard: (player.getStat("skill").buxu || 0) + 1,
							ai1: function (card) {
								var player = _status.event.player;
								if (
									player.needsToDiscard(0, (i, player) => {
										return !ui.selected.cards.includes(i) && !player.canIgnoreHandcard(i);
									})
								)
									return 10 / Math.max(0.1, get.value(card));
								return 5 - (player.getStat("skill").buxu || 0) - get.value(card);
							},
							ai2: () => 1,
							content: function () {
								var filter = lib.skill.chengye.liujing_filter[lib.skill.buxu_backup.index];
								var card = get.cardPile2(filter);
								if (card) player.addToExpansion(card, "gain2").gaintag.add("chengye");
							},
							ai: { result: { player: 1 } },
						};
					},
				},
				ai: {
					combo: "chengye",
					order: 0.2,
					result: { player: 1 },
				},
			},
			//阮慧
			mingcha: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				forced: true,
				locked: false,
				filter: event => !event.numFixed,
				content: function () {
					"step 0";
					var cards = game.cardsGotoOrdering(get.cards(3)).cards,
						cards2 = cards.slice(0);
					event.cards = cards.filter(function (i) {
						return get.number(i) < 9;
					});
					// while(cards2.length>0){
					// 	var card=cards2.pop();
					// 	card.fix();
					// 	ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
					// }
					// game.updateRoundNumber();
					player.showCards(cards, get.translation(player) + "发动了【明察】");
					if (!event.cards.length) event.finish();
					"step 1";
					player.chooseBool("是否放弃摸牌并获得" + get.translation(cards)).set("goon", trigger.num - cards.length <= 1);
					"step 2";
					if (result.bool) {
						trigger.changeToZero();
						player.gain(cards, "gain2");
					} else event.finish();
					"step 3";
					player
						.chooseTarget("是否随机获得其他角色的一张牌？", function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						})
						.set("ai", function (target) {
							return 3 - get.attitude(player, target);
						});
					"step 4";
					if (result.bool) {
						var target = result.targets[0],
							cards = target.getGainableCards(player, "he");
						player.line(target, "green");
						if (cards.length) player.gain(cards.randomGet(), target, "giveAuto", "bySelf");
					}
				},
			},
			jingzhong: {
				audio: 2,
				trigger: { player: "phaseDiscardAfter" },
				filter: function (event, player) {
					var num = 0;
					player.getHistory("lose", function (evt) {
						if (evt.type == "discard" && evt.getParent("phaseDiscard") == event) {
							for (var i of evt.cards2) {
								if (get.color(i, player) == "black") num++;
							}
						}
					});
					return num > 1;
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("jingzhong"), "获得一名其他角色下回合出牌阶段内使用的牌", lib.filter.notMe).set("ai", function (target) {
						return Math.sqrt(target.countCards("h")) * get.threaten(target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("jingzhong", target);
						player.addSkill("jingzhong_effect");
						player.markAuto("jingzhong_effect", [target]);
						game.delayx();
					}
				},
				subSkill: {
					effect: {
						trigger: { global: "useCardAfter" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							if (!player.getStorage("jingzhong_effect").includes(event.player) || !event.cards.filterInD().length) return false;
							var evt = event.getParent("phaseUse");
							if (!evt || evt.player != event.player) return false;
							return (
								player.getHistory("useSkill", function (evtx) {
									return evtx.skill == "jingzhong_effect" && evtx.event.getParent("phaseUse") == evt;
								}).length < 3
							);
						},
						logTarget: "player",
						content: function () {
							player.gain(trigger.cards.filterInD(), "gain2");
						},
						mark: true,
						intro: { content: "已指定$为目标" },
						group: "jingzhong_remove",
					},
					remove: {
						trigger: { global: "phaseAfter" },
						forced: true,
						charlotte: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							return player.getStorage("jingzhong_effect").includes(event.player);
						},
						content: function () {
							var storage = player.getStorage("jingzhong_effect");
							storage.remove(trigger.player);
							if (!storage.length) player.removeSkill("jingzhong_effect");
						},
					},
				},
			},
			//全琮
			sbyaoming: {
				audio: 2,
				chargeSkill: 4,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCharge() > 0;
				},
				filterTarget: true,
				prompt: function () {
					var num = _status.event.player.storage.sbyaoming_status;
					var list = ["弃置一名手牌数不小于你的角色的一张牌", "；或令一名手牌数不大于你的角色摸一张牌"];
					if (typeof num == "number") list[num] += "（上次选择）";
					return list[0] + list[1];
				},
				content: function () {
					"step 0";
					player.removeCharge();
					var num = target.countCards("h"),
						num2 = player.countCards("h");
					if (num == num2 && target.countCards("he") > 0) {
						var choice = get.attitude(player, target) > 0 ? 1 : 0;
						var str = get.translation(target),
							choiceList = ["弃置" + str + "的一张牌", "令" + str + "摸一张牌"];
						if (typeof player.storage.sbyaoming_status == "number") choiceList[player.storage.sbyaoming_status] += "（上次选择）";
						var next = player.chooseControl().set("choiceList", choiceList);
						next.set("ai_choice", choice);
						next.set("ai", () => _status.event.ai_choice);
					} else event._result = { index: num > num2 ? 0 : 1 };
					"step 1";
					if (result.index == 0) {
						player.discardPlayerCard(target, true, "he");
					} else target.draw();
					if (typeof player.storage.sbyaoming_status == "number" && result.index != player.storage.sbyaoming_status) {
						player.addCharge();
						delete player.storage.sbyaoming_status;
					} else {
						player.storage.sbyaoming_status = result.index;
					}
				},
				ai: {
					order: 6,
					result: {
						player: function (player, target) {
							var att = get.attitude(player, target),
								eff = [0, 0];
							var hs = player.countCards("h"),
								ht = target.countCards("h");
							if (hs >= ht) {
								eff[0] = get.effect(target, { name: "draw" }, player, player);
								if (player.storage.sbyaoming_status == 0) eff[0] *= 1.2;
							}
							if (hs <= ht) {
								eff[1] = get.effect(target, { name: "guohe_copy2" }, player, player);
								if (player.storage.sbyaoming_status == 1) eff[1] *= 1.2;
							}
							return Math.max.apply(Math, eff);
						},
					},
				},
				group: ["sbyaoming_damage", "sbyaoming_init"],
				subSkill: {
					damage: {
						trigger: { player: "damageEnd" },
						direct: true,
						content: function () {
							"step 0";
							if (player.countCharge(true)) {
								player.logSkill("sbyaoming_damage");
								player.addCharge(trigger.num);
								game.delayx();
							}
							"step 1";
							player.chooseTarget(get.prompt("sbyaoming"), lib.skill.sbyaoming.prompt()).set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, "sbyaoming", player, player);
							});
							"step 2";
							if (result.bool) {
								player.useSkill("sbyaoming", result.targets);
							}
						},
					},
					init: {
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (event.name != "phase" || game.phaseNumber == 0) && player.countCharge(true);
						},
						content: function () {
							player.addCharge(2);
						},
					},
				},
			},
			//手杀界荀彧
			rejieming: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				direct: true,
				content: function () {
					"step 0";
					event.count = trigger.num;
					"step 1";
					player.chooseTarget(get.prompt("rejieming"), "令一名角色摸两张牌。然后若其手牌数少于体力上限，你摸一张牌").set("ai", function (target) {
						var att = get.attitude(_status.event.player, target);
						if (att > 2) {
							if (target.maxHp - target.countCards("h") > 2) return 2 * att;
							return att;
						}
						return att / 3;
					});
					"step 2";
					if (result.bool) {
						event.current = result.targets[0];
						player.logSkill("rejieming", event.current);
						player.line(event.current, "thunder");
						event.current.draw(2);
						event.count--;
					} else event.finish();
					"step 3";
					if (event.current.countCards("h") < event.current.maxHp) {
						player.draw();
					}
					"step 4";
					if (event.count > 0 && player.hasSkill("rejieming")) event.goto(1);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && target.hp > 1) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								var max = 0;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (get.attitude(target, players[i]) > 0) {
										max = Math.max(Math.min(5, players[i].hp) - players[i].countCards("h"), max);
									}
								}
								switch (max) {
									case 0:
										return 2;
									case 1:
										return 1.5;
									case 2:
										return [1, 2];
									default:
										return [0, max];
								}
							}
							if ((card.name == "tao" || card.name == "caoyao") && target.hp > 1 && target.countCards("h") <= target.hp) return [0, 0];
						},
					},
				},
			},
			//沮授
			xinjianying: {
				audio: 2,
				subfrequent: ["draw"],
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					if (!player.countCards("he")) return false;
					for (var i of lib.inpile) {
						if (i != "du" && get.type(i, null, false) == "basic") {
							if (event.filterCard({ name: i }, player, event)) return true;
							if (i == "sha") {
								for (var j of lib.inpile_nature) {
									if (event.filterCard({ name: i, nature: j }, player, event)) return true;
								}
							}
						}
					}
					return false;
				},
				onChooseToUse: function (event) {
					if (event.type == "phase" && !game.online) {
						var last = event.player.getLastUsed();
						if (last && last.getParent("phaseUse") == event.getParent()) {
							var suit = get.suit(last.card, false);
							if (suit != "none") event.set("xinjianying_suit", suit);
						}
					}
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						var suit = event.xinjianying_suit || "",
							str = get.translation(suit);
						for (var i of lib.inpile) {
							if (i != "du" && get.type(i, null, false) == "basic") {
								if (event.filterCard({ name: i }, player, event)) list.push(["基本", str, i]);
								if (i == "sha") {
									for (var j of lib.inpile_nature) {
										if (event.filterCard({ name: i, nature: j }, player, event)) list.push(["基本", str, i, j]);
									}
								}
							}
						}
						return ui.create.dialog("渐营", [list, "vcard"]);
					},
					check: function (button) {
						if (button.link[2] == "jiu") return 0;
						return _status.event.player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup: function (links, player) {
						var next = {
							audio: "xinjianying",
							filterCard: true,
							popname: true,
							position: "he",
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							ai1: function (card) {
								return 7 - _status.event.player.getUseValue(card, null, true);
							},
						};
						if (_status.event.xinjianying_suit) next.viewAs.suit = _status.event.xinjianying_suit;
						return next;
					},
					prompt: function (links) {
						return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + (_status.event.xinjianying_suit ? "(" + get.translation(_status.event.xinjianying_suit) + ")" : "") + "使用";
					},
				},
				ai: {
					order: function (item, player) {
						if (_status.event.xinjianying_suit) return 16;
						return 3;
					},
					result: { player: 7 },
				},
				group: ["xinjianying_draw", "jianying_mark"],
				init: function (player) {
					if (player.isPhaseUsing()) {
						var evt = _status.event.getParent("phaseUse");
						var history = player.getHistory("useCard", function (evt2) {
							return evt2.getParent("phaseUse") == evt;
						});
						if (history.length) {
							var trigger = history[history.length - 1];
							player.storage.jianying_mark = trigger.card;
							player.markSkill("jianying_mark");
							game.broadcastAll(
								function (player, suit) {
									if (player.marks.jianying_mark) player.marks.jianying_mark.firstChild.innerHTML = get.translation(suit);
								},
								player,
								get.suit(trigger.card, player)
							);
							player.when("phaseUseAfter").then(() => {
								player.unmarkSkill("jianying_mark");
								delete player.storage.jianying_mark;
							});
						}
					}
				},
				onremove: function (player) {
					player.unmarkSkill("jianying_mark");
					delete player.storage.jianying_mark;
				},
				subSkill: {
					draw: { inherit: "jianying", audio: "xinjianying" },
				},
			},
			//步练师
			reanxu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return (
						game.countPlayer() > 2 &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("he");
						})
					);
				},
				selectTarget: 2,
				filterTarget: function (card, player, target) {
					if (target == player) return false;
					if (!ui.selected.targets.length) return target.countCards("he") > 0;
					return target != ui.selected.targets[0] && ui.selected.targets[0].countGainableCards(target, "he") > 0;
				},
				multitarget: true,
				targetprompt: ["被拿牌", "得到牌"],
				content: function () {
					"step 0";
					targets[1].gainPlayerCard(targets[0], "he", true);
					"step 1";
					if (
						targets[0].getHistory("lose", function (evt) {
							return evt.getParent(3) == event && !evt.es.length;
						}).length
					)
						player.draw();
					"step 2";
					if (targets[0].isIn() && targets[1].isIn() && targets[0].countCards("h") != targets[1].countCards("h")) {
						event.target = targets[targets[0].countCards("h") > targets[1].countCards("h") ? 1 : 0];
						player.chooseBool("是否令" + get.translation(event.target) + "摸一张牌？").set("ai", function () {
							var evt = _status.event.getParent();
							return get.attitude(evt.player, evt.target) > 0;
						});
					} else event.finish();
					"step 3";
					if (result.bool) target.draw();
				},
				ai: {
					expose: 0.2,
					threaten: 2,
					order: 9,
					result: {
						player: function (player, target) {
							if (ui.selected.targets.length) return 0.01;
							return target.countCards("e") ? 0 : 0.5;
						},
						target: function (player, target) {
							if (ui.selected.targets.length) {
								player = target;
								target = ui.selected.targets[0];
								if (get.attitude(player, target) > 1) {
									return 0;
								}
								return target.countCards("h") - player.countCards("h") > (target.countCards("e") ? 2 : 1) ? 2 : 1;
							} else {
								if (get.attitude(player, target) <= 0)
									return target.countCards("he", function (card) {
										return card.name == "tengjia" || get.value(card) > 0;
									}) > 0
										? -1.5
										: 1.5;
								return target.countCards("he", function (card) {
									return card.name != "tengjia" && get.value(card) <= 0;
								}) > 0
									? 1.5
									: -1.5;
							}
						},
					},
				},
			},
			//蒋干
			spdaoshu: {
				audio: 3,
				group: "spdaoshu_effect",
				subSkill: {
					effect: {
						audio: "spdaoshu1",
						trigger: { global: "phaseUseBegin" },
						filter: function (event, player) {
							var goon = event.player != player && (get.mode() == "identity" || get.mode() == "guozhan" || event.player.isEnemyOf(player));
							return goon && event.player.countCards("h") > 0 && event.player.hasUseTarget({ name: "jiu", isCard: true }, null, true);
						},
						round: 1,
						logTarget: "player",
						prompt2: () => lib.translate.spdaoshu_info,
						check: function (event, player) {
							var target = event.player;
							var att = get.attitude(player, target);
							if (att > 0) return false;
							if (att == 0) return !player.inRangeOf(target);
							return true;
						},
						content: function () {
							"step 0";
							event.target = trigger.player;
							event.target.chooseUseTarget("jiu", true);
							"step 1";
							if (!target.countCards("h")) {
								event.finish();
								return;
							}
							var list = [];
							for (var i of lib.inpile) {
								if (get.type(i) == "basic") list.push(i);
							}
							if (!list.length) {
								event.finish();
								return;
							}
							target
								.chooseControl(list)
								.set("prompt", "请声明一种基本牌")
								.set("ai", () => _status.event.rand)
								.set("rand", get.rand(0, list.length - 1));
							"step 2";
							event.cardname = result.control;
							target.chat("我声明" + get.translation(event.cardname));
							game.log(target, "声明的牌名为", "#y" + get.translation(event.cardname));
							game.delayx();
							player
								.chooseControl("有！", "没有！")
								.set("prompt", "你觉得" + get.translation(target) + "的手牌区里有" + get.translation(event.cardname) + "吗？")
								.set("ai", function () {
									return _status.event.choice;
								})
								.set(
									"choice",
									(function () {
										var rand =
											{
												sha: 0.273,
												shan: 0.149,
												tao: 0.074,
												jiu: 0.031,
											}[event.cardname] || 0.1;
										return 1 - Math.pow(1 - rand, target.countCards("h")) > 0.5 ? "有！" : "没有！";
									})()
								);
							"step 3";
							player.chat(result.control);
							game.log(player, "认为", "#y" + result.control);
							game.delayx();
							"step 4";
							var bool1 = result.index == 0;
							var bool2 = target.hasCard(function (card) {
								return get.name(card, target) == event.cardname;
							}, "h");
							if (bool1 == bool2) {
								player.popup("判断正确", "wood");
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "spdaoshu2");
								});
								player.gainPlayerCard(target, "h", 2, true);
								//var cards=target.getCards('h',function(card){
								//	return lib.filter.canBeGained(card,player,target);
								//}).randomGets(5);
								//if(cards.length>0) player.gain(cards,target,'giveAuto','bySelf');
							} else {
								player.popup("判断错误", "fire");
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "spdaoshu3");
								});
								//player.addTempSkill('spdaoshu_respond');
							}
						},
						ai: { expose: 0.3 },
					},
					respond: {
						trigger: { global: "useCard1" },
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.player == _status.currentPhase;
						},
						content: function () {
							trigger.directHit.add(player);
						},
					},
				},
			},
			spdaoshu1: { audio: true },
			mbdaoshu: {
				audio: 3,
				group: "mbdaoshu_use",
				subSkill: {
					use: {
						audio: "mbdaoshu1",
						enable: "phaseUse",
						filter: function (event, player) {
							return game.hasPlayer(target => lib.skill.mbdaoshu_use.filterTarget(event, player, target));
						},
						filterTarget: function (card, player, target) {
							if (!["guozhan", "identity"].includes(get.mode()) && target.isFriendOf(player)) return false;
							return target != player && target.countCards("h") >= 2;
						},
						usable: 1,
						prompt: () => lib.translate.mbdaoshu_info,
						content: function* (event, map) {
							var player = map.player,
								target = event.target;
							var targets = [player],
								names = lib.inpile.randomGets(3);
							if (!names.length) return;
							var map = {};
							names.forEach(name => (map[get.translation(name)] = name));
							if (get.mode() != "identity" && get.mode() != "guozhan") targets.addArray(player.getFriends());
							targets.remove(target);
							targets.sortBySeat();
							var result = yield target
								.chooseButton(["盗书：请选择伪装的牌和牌名", target.getCards("h"), [Object.keys(map), "tdnodes"]], 2, true)
								.set("filterButton", button => {
									var map = _status.event.map;
									if (!ui.selected.buttons.length) return true;
									if (typeof button.link == typeof ui.selected.buttons[0].link) return false;
									if (typeof button.link == "string") return get.name(ui.selected.buttons[0].link, false) != map[button.link];
									return map[ui.selected.buttons[0].link] != get.name(button.link, false);
								})
								.set("ai", button => {
									var map = _status.event.map;
									if (!ui.selected.buttons.length) {
										if (typeof button.link == "object") {
											if (Object.values(map).some(name => lib.card.list.some(card => card[0] == get.suit(button.link, false) && card[1] == get.number(button.link, false) && card[2] == name))) return 5;
											return 3.5 + Math.random();
										}
										return 0;
									}
									if (typeof button.link == "string") {
										var cardx = ui.selected.buttons[0].link;
										if (lib.card.list.some(card => card[0] == get.suit(cardx, false) && card[1] == get.number(cardx, false) && card[2] == map[button.link])) return 2 + Math.random();
										return 1;
									}
									return 0;
								})
								.set("map", map);
							if (result.bool) {
								var guessWinner = [];
								if (typeof result.links[0] == "string") result.links.reverse();
								var OriginCard = result.links[0],
									ChangeName = map[result.links[1]],
									cards = target.getCards("h").slice();
								var card = game.createCard(ChangeName, get.suit(OriginCard, false), get.number(OriginCard, false));
								cards[cards.indexOf(OriginCard)] = card;
								if (_status.connectMode) {
									var list = targets.map(target2 => [target2, ["请猜测" + get.translation(target) + "伪装的手牌", cards], true]);
									var result2 = yield player
										.chooseButtonOL(list)
										.set("switchToAuto", () => (_status.event.result = "ai"))
										.set("processAI", () => {
											var cards = _status.event.cards.slice();
											var card = cards.find(card => lib.card.list.some(cardx => cardx[2] == card.name) && !lib.card.list.some(cardx => cardx[2] == card.name && cardx[0] == get.suit(card, false) && cardx[0] == get.number(card, false)));
											return {
												bool: true,
												links: card ? card : cards.randomGet(),
											};
										})
										.set("cards", cards);
									for (var i in result2) {
										if (result2[i].links[0] == card) guessWinner.push(lib.playerOL[i]);
									}
								} else {
									var guessTargets = targets.slice();
									while (guessTargets.length) {
										var target2 = guessTargets.shift();
										var result2 = yield target2
											.chooseButton(["请猜测" + get.translation(target) + "伪装的手牌", cards], true)
											.set("ai", button => {
												var cards = _status.event.cards.slice();
												var card = cards.find(card => lib.card.list.some(cardx => cardx[2] == get.name(card, false)) && !lib.card.list.some(cardx => cardx[2] == get.name(card, false) && cardx[0] == get.suit(card, false) && cardx[0] == get.number(card, false)));
												return button.link == card ? 3 : 1 + Math.random();
											})
											.set("cards", cards);
										if (result2.bool) {
											if (result2.links[0] == card) guessWinner.push(target2);
										}
									}
								}
								targets.forEach(target2 => {
									if (guessWinner.includes(target2)) {
										target2.popup("判断正确", "wood");
										game.log(target2, "猜测", "#g正确");
										game.broadcastAll(() => {
											if (lib.config.background_speak) game.playAudio("skill", "mbdaoshu2");
										});
										target2.line(target);
										target.damage(1, target2);
									} else {
										target2.popup("判断错误", "fire");
										game.log(target2, "猜测", "#y错误");
										game.broadcastAll(() => {
											if (lib.config.background_speak) game.playAudio("skill", "mbdaoshu3");
										});
										if (target2.countCards("h") >= 2) target2.discard(target2.getCards("h").randomGets(2));
										else target2.loseHp();
									}
								});
							}
						},
						ai: {
							order: 9,
							result: {
								target: function (player, target) {
									return -1 / target.countCards("h");
								},
							},
						},
					},
				},
			},
			mbdaoshu1: { audio: true },
			spdaizui: {
				audio: 2,
				trigger: { player: "damageBegin2" },
				limited: true,
				logTarget: "source",
				filter: function (event, player) {
					return event.num >= player.hp && event.source && event.source.isIn() && event.cards && event.cards.filterInD().length > 0;
				},
				prompt2: function (event) {
					return "防止即将受到的" + get.cnNumber(event.num) + "点伤害，并令" + get.translation(event.source) + "将" + get.translation(event.cards.filterInD()) + "置于武将牌上且回合结束时收回";
				},
				skillAnimation: true,
				animationColor: "thunder",
				content: function () {
					player.awakenSkill("spdaizui");
					trigger.source.addSkill("spdaizui2");
					trigger.source.addToExpansion(trigger.cards.filterInD(), "gain2").gaintag.add("spdaizui2");
					trigger.cancel();
				},
			},
			spdaizui2: {
				trigger: { global: "phaseEnd" },
				forced: true,
				charlotte: true,
				sourceSkill: "spdaizui",
				filter: function (event, player) {
					return player.getExpansions("spdaizui2").length > 0;
				},
				content: function () {
					"step 0";
					var cards = player.getExpansions("spdaizui2");
					player.gain(cards, "gain2");
					"step 1";
					player.removeSkill("spdaizui2");
				},
				marktext: "释",
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
			},
			//裴秀
			xingtu: {
				trigger: { player: "useCard" },
				filter: function (event, player) {
					var evt = lib.skill.dcjianying.getLastUsed(player, event);
					if (!evt || !evt.card) return false;
					var num1 = get.number(event.card),
						num2 = get.number(evt.card);
					return typeof num1 == "number" && typeof num2 == "number" && num2 % num1 == 0;
				},
				forced: true,
				content: function () {
					player.draw();
				},
				mod: {
					cardUsable(card, player) {
						if (typeof card == "object") {
							let num1 = get.number(card);
							if (num1 != "unsure" && typeof num1 != "number") {
								return;
							}
							if ([card].concat(card.cards || []).some(cardx => get.itemtype(cardx) === "card" && cardx.hasGaintag("xingtu1"))) {
								return Infinity;
							}
							let num2 = player.storage.xingtu_mark;
							if (typeof num2 == "number" && num1 % num2 == 0) {
								return Infinity;
							}
						}
					},
					aiOrder(player, card, num) {
						if (typeof card == "object") {
							let num1 = get.number(card);
							if (num1 != "unsure" && typeof num1 != "number") {
								return;
							}
							if (!card.cards) {
								return;
							}
							for (var i of card.cards) {
								if (i.hasGaintag("xingtu1")) {
									return num + 5;
								}
							}
							let num2 = player.storage.xingtu_mark;
							if (typeof num2 == "number" && num1 % num2 == 0) {
								return num + 5;
							}
						}
					},
				},
				init: function (player) {
					player.addSkill("xingtu_mark");
					var history = player.getAllHistory("useCard");
					if (history.length) {
						var trigger = history[history.length - 1],
							num = get.number(trigger.card);
						player.storage.xingtu_mark = num;
						player[typeof num != "number" ? "unmarkSkill" : "markSkill"]("xingtu_mark");
					}
				},
				onremove: function (player) {
					player.removeSkill("xingtu_mark");
					player.removeGaintag("xingtu1");
					player.removeGaintag("xingtu2");
					delete player.storage.xingtu_mark;
				},
				subSkill: {
					mark: {
						charlotte: true,
						trigger: {
							player: ["useCard1", "gainAfter"],
							global: "loseAsyncAfter",
						},
						filter: function (event, player, name) {
							return name == "useCard1" || event.getg(player).length && player.countCards("h");
						},
						direct: true,
						firstDo: true,
						content: function () {
							"step 0";
							player.removeGaintag("xingtu1");
							player.removeGaintag("xingtu2");
							if (event.triggername == "useCard1") {
								var num = get.number(trigger.card, player);
								player.storage.xingtu_mark = num;
								player[typeof num != "number" ? "unmarkSkill" : "markSkill"]("xingtu_mark");
								if (typeof num != "number") event.finish();
							}
							"step 1";
							var cards1 = [],
								cards2 = [],
								num = player.storage.xingtu_mark;
							player.getCards("h").forEach(card => {
								var numx = get.number(card, player);
								if (typeof numx == "number") {
									if (numx % num == 0) cards1.push(card);
									if (num % numx == 0) cards2.push(card);
								}
							});
							player.addGaintag(cards1, "xingtu1");
							player.addGaintag(cards2, "xingtu2");
						},
						intro: { content: "上一张牌的点数：#" },
					},
				},
			},
			juezhi: {
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("he") > 1;
				},
				filterCard: true,
				position: "he",
				selectCard: [2, Infinity],
				check: function (card) {
					if (ui.selected.cards.length > 1) return 0;
					var player = _status.event.player;
					if (player.hasSkill("xingtu") && player.storage.xingtu) {
						var cards = player.getCards("he");
						var num = player.storage.xingtu,
							stop = false;
						for (var i = 0; i <= cards.length; i++) {
							if (i != cards.length) {
								var num1 = get.number(cards[i], player);
								if (typeof num1 != "number") continue;
								for (var j = 0; j < cards.length; j++) {
									if (i == j) continue;
									var num2 = get.number(cards[j], player);
									if (typeof num2 != "number") continue;
									var sum = num1 + num2;
									if (sum % num == 0 || num % sum == 0) {
										stop = true;
										break;
									}
								}
								if (stop) break;
							}
						}
						if (i != cards.length) {
							var cardx = [cards[i], cards[j]];
							if (cardx.includes(card)) return 10 - get.value(card);
						}
					}
					return 5 - get.value(card);
				},
				content: function () {
					var num = 0;
					for (var i of cards) num += get.number(i, player);
					num = num % 13;
					if (num == 0) num = 13;
					var card = get.cardPile2(function (card) {
						return get.number(card, false) == num;
					});
					if (card) player.gain(card, "gain2");
				},
				ai: {
					order: 1,
					result: { player: 1 },
				},
			},
			reganlu: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				selectTarget: 2,
				delay: 0,
				filterTarget: function (card, player, target) {
					if (target.isMin()) return false;
					if (ui.selected.targets.length == 0) return true;
					if (ui.selected.targets[0].countCards("e") == 0 && target.countCards("e") == 0) return false;
					return target == player || ui.selected.targets[0] == player || Math.abs(ui.selected.targets[0].countCards("e") - target.countCards("e")) <= player.maxHp - player.hp;
				},
				multitarget: true,
				multiline: true,
				content: function () {
					targets[0].swapEquip(targets[1]);
				},
				ai: {
					order: 10,
					threaten: function (player, target) {
						return 0.8 * Math.max(1 + target.maxHp - target.hp);
					},
					result: {
						target: function (player, target) {
							var list1 = [];
							var list2 = [];
							var num = player.maxHp - player.hp;
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (get.attitude(player, players[i]) > 0) list1.push(players[i]);
								else if (get.attitude(player, players[i]) < 0) list2.push(players[i]);
							}
							list1.sort(function (a, b) {
								return a.countCards("e") - b.countCards("e");
							});
							list2.sort(function (a, b) {
								return b.countCards("e") - a.countCards("e");
							});
							var delta;
							for (var i = 0; i < list1.length; i++) {
								for (var j = 0; j < list2.length; j++) {
									delta = list2[j].countCards("e") - list1[i].countCards("e");
									if (delta <= 0) continue;
									if (delta <= num || list1[i] == player || list2[j] == player) {
										if (target == list1[i] || target == list2[j]) {
											return get.attitude(player, target);
										}
										return 0;
									}
								}
							}
							return 0;
						},
					},
				},
			},
			//孙休
			mobilexingxue: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return (player.storage.mobileyanzhu ? player.maxHp : player.hp) > 0;
				},
				direct: true,
				content: function () {
					"step 0";
					var num = player.storage.mobileyanzhu ? player.maxHp : player.hp;
					player.chooseTarget([1, num], get.prompt2("mobilexingxue")).set("ai", function (target) {
						var att = get.attitude(_status.event.player, target);
						if (target.countCards("he")) return att;
						return att / 10;
					});
					"step 1";
					if (result.bool) {
						player.logSkill("mobilexingxue", result.targets);
						event.targets = result.targets;
						event.targets2 = event.targets.slice(0);
						event.targets.sort(lib.sort.seat);
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets.length) {
						var target = event.targets.shift();
						target.draw();
						event.current = target;
					} else {
						event.finish();
					}
					"step 3";
					if (event.current && event.current.countCards("he")) {
						if (!player.storage.mobileyanzhu || event.targets2.length == 1) event.current.chooseCard("选择一张牌置于牌堆顶", "he", true);
						else
							event.current.chooseCardTarget({
								prompt: "将一张牌置于牌堆顶，或交给其他目标角色",
								filterCard: true,
								position: "he",
								filterTarget: function (card, player, target) {
									return target != player && _status.event.getParent().targets2.includes(target);
								},
								forced: true,
								selectTarget: [0, 1],
								ai1: card => 6 - get.value(card),
								ai2: target => get.attitude(_status.event.player, target),
							});
					} else {
						event.goto(2);
					}
					"step 4";
					if (result && result.cards) {
						event.card = result.cards[0];
						if (!result.targets || !result.targets.length) {
							event.current.lose(result.cards, ui.cardPile, "insert");
							game.broadcastAll(function (player) {
								var cardx = ui.create.card();
								cardx.classList.add("infohidden");
								cardx.classList.add("infoflip");
								player.$throw(cardx, 1000, "nobroadcast");
							}, event.current);
						} else {
							event.current.give(result.cards, result.targets[0]);
						}
					} else {
						event.card = null;
					}
					"step 5";
					event.goto(2);
				},
				derivation: "mobilexingxuex",
			},
			mobileyanzhu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.countCards("hej") > 0 && target != player;
				},
				content: function () {
					"step 0";
					if (target.countCards("e")) {
						target
							.chooseBool("是否将装备区内的所有牌交给" + get.translation(player) + "？", "若选择“取消”，则其将获得你区域里的一张牌")
							.set("ai", function () {
								if (_status.event.effect > 0) return false;
								if (_status.event.player.countCards("e") >= 3) return false;
								return true;
							})
							.set("effect", get.effect(target, { name: "shunshou" }, player, target));
					} else {
						player.gainPlayerCard(target, true, "he");
						event.finish();
					}
					"step 1";
					if (result.bool) {
						var es = target.getCards("e");
						target.give(es, player, "give");
						player.removeSkills("mobileyanzhu");
						player.storage.mobileyanzhu = true;
						player.popup("兴学");
						game.log(player, "修改了技能", "#g【兴学】");
					} else {
						player.gainPlayerCard(target, true, "hej");
					}
				},
				ai: {
					order: 6,
					result: {
						target: function (player, target) {
							var ne = target.countCards("e"),
								nj = target.countCards("j");
							if (nj) return 2.5;
							if (!ne) return -2;
							if (ne >= 2) return -ne;
							return 0;
						},
					},
				},
			},
			//毛玠
			bingqing: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter(event, player) {
					const evt = event.getParent("phaseUse");
					if (!evt || !evt.player || evt.player != player) return false;
					const suit = get.suit(event.card);
					if (!lib.suit.includes(suit)) return false;
					if (
						player
							.getHistory("useCard", evtx => {
								return evtx.getParent("phaseUse") == evt && get.suit(evtx.card) == suit;
							})
							.indexOf(event) != 0
					)
						return false;
					return Array.from({ length: 3 })
						.map((_, i) => i + 2)
						.includes(
							player
								.getHistory(
									"useCard",
									evtx => {
										return evtx.getParent("phaseUse") == evt && lib.suit.includes(get.suit(evtx.card));
									},
									event
								)
								.reduce((list, evtx) => list.add(get.suit(evtx.card)), []).length
						);
				},
				async cost(event, trigger, player) {
					const evt = trigger.getParent("phaseUse");
					const num = player
						.getHistory(
							"useCard",
							evtx => {
								return evtx.getParent("phaseUse") == evt && lib.suit.includes(get.suit(evtx.card));
							},
							trigger
						)
						.reduce((list, evtx) => list.add(get.suit(evtx.card)), []).length;
					let prompt, filterTarget, ai;
					switch (num) {
						case 2:
							prompt = "令一名角色摸两张牌";
							filterTarget = function (card, player, target) {
								return true;
							};
							ai = function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								if (target.hasSkill("nogain")) att /= 10;
								return att / Math.sqrt(Math.min(5, 1 + target.countCards("h")));
							};
							break;
						case 3:
							prompt = "弃置一名角色区域内的一张牌";
							filterTarget = function (card, player, target) {
								return target.hasCard(function (card) {
									return lib.filter.canBeDiscarded(card, player, target);
								}, "hej");
							};
							ai = function (target) {
								var player = _status.event.player;
								return get.effect(target, { name: "guohe" }, player, player);
							};
							break;
						case 4:
							prompt = "对一名其他角色造成1点伤害";
							filterTarget = function (card, player, target) {
								return target != player;
							};
							ai = function (target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player);
							};
							break;
						default:
							event.result = { bool: false };
							return;
					}
					let result = await player.chooseTarget(get.prompt("bingqing"), prompt, filterTarget).set("ai", ai).forResult();
					result.cost_data = num;
					event.result = result;
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					switch (event.cost_data) {
						case 2:
							await target.draw(2);
							break;
						case 3:
							await player.discardPlayerCard(target, true, "hej");
							break;
						case 4:
							await target.damage();
							break;
					}
				},
			},
			yingfeng: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("yingfeng"), "令一名角色获得“奉”标记", function (card, player, target) {
							return !target.hasSkill("yingfeng_mark");
						})
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att <= 0) return 0;
							var eff = 0.1;
							var preTarget = game.findPlayer(function (current) {
								return current != target && current.hasSkill("yingfeng_mark");
							});
							if (preTarget) {
								if (get.attitude(player, preTarget) < 0) eff += 4;
								else if (preTarget.hasValueTarget({ name: "sha" }, false) && !preTarget.hasValueTarget({ name: "sha" })) eff -= 3;
							}
							if (target.hasValueTarget({ name: "sha" }, false) && !target.hasValueTarget({ name: "sha" })) eff += 3;
							if (player == target) att *= 1.2;
							return 0.01 + att * eff;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("yingfeng", target);
						target.addAdditionalSkill("yingfeng_" + player.playerid, "yingfeng_mark");
						game.countPlayer(function (current) {
							if (current != target && current.hasSkill("yingfeng_mark")) {
								current.removeSkill("yingfeng_mark");
								current.removeAdditionalSkill("yingfeng_" + player.playerid);
							}
						});
					}
				},
				subSkill: {
					mark: {
						charlotte: true,
						mark: true,
						marktext: "奉",
						mod: {
							targetInRange: () => true,
						},
						intro: { content: "使用牌无距离限制" },
					},
				},
			},
			//猩黄忠
			spshidi: {
				audio: 2,
				trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
				zhuanhuanji: "number",
				filter: function (event, player) {
					return player.countMark("spshidi") % 2 == ["phaseJieshu", "phaseZhunbei"].indexOf(event.name);
				},
				logAudio(event, player) {
					return "spshidi" + (2 - (player.countMark("spshidi") % 2)) + ".mp3";
				},
				forced: true,
				content: function () {
					player.changeZhuanhuanji("spshidi");
				},
				mod: {
					globalFrom: function (from, to, distance) {
						if (from.countMark("spshidi") % 2 == 0) return distance - 1;
					},
					globalTo: function (from, to, distance) {
						if (to.countMark("spshidi") % 2 == 1) return distance + 1;
					},
					aiOrder: function (player, card, num) {
						if (player.countMark("spshidi") % 2 == 0 && card.name == "sha" && get.color(card) == "black") return num + 0.1;
					},
				},
				mark: true,
				marktext: "☯",
				intro: {
					content: function (storage, player) {
						return "已转换过" + (storage || 0) + "次";
					},
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (!arg || !arg.card || !arg.target || arg.card.name != "sha") return false;
						return player.countMark("spshidi") % 2 == 0 && get.color(arg.card) == "black";
					},
				},
				group: ["spshidi_use", "spshidi_beused"],
				subSkill: {
					use: {
						audio: "spshidi1.mp3",
						trigger: { player: "useCard" },
						forced: true,
						filter: function (event, player) {
							return event.card.name == "sha" && player.countMark("spshidi") % 2 == 0 && get.color(event.card, false) == "black";
						},
						content: function () {
							trigger.directHit.addArray(game.players);
						},
					},
					beused: {
						audio: "spshidi2.mp3",
						trigger: { target: "useCardToTargeted" },
						forced: true,
						filter: function (event, player) {
							return event.card.name == "sha" && player.countMark("spshidi") % 2 == 1 && get.color(event.card, false) == "red";
						},
						content: function () {
							trigger.directHit.add(player);
						},
					},
				},
			},
			spyishi: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				filter: function (event, player) {
					return player != event.player && event.player.countCards("e") > 0;
				},
				check: function (event, player) {
					return (
						get.damageEffect(event.player, player, player) <= 0 ||
						(get.attitude(player, event.player) <= 0 &&
							!event.player.hasSkillTag("noe") &&
							event.player.hasCard(function (card) {
								return get.value(card) > 9 - event.player.hp;
							}, "e"))
					);
				},
				logTarget: "player",
				content: function () {
					trigger.num--;
					player.gainPlayerCard(trigger.player, "e", true);
				},
			},
			spqishe: {
				enable: "chooseToUse",
				viewAs: { name: "jiu" },
				filterCard: { type: "equip" },
				position: "hes",
				viewAsFilter: function (player) {
					return player.hasCard({ type: "equip" }, "ehs");
				},
				check: function (card) {
					if (_status.event.type == "dying") return 1 / (get.value(card) || 0.5);
					return 5 - get.value(card);
				},
				locked: false,
				mod: {
					maxHandcard: function (player, num) {
						return num + player.countCards("e");
					},
				},
			},
			//虞翻
			rezongxuan: {
				inherit: "zongxuan",
				group: "rezongxuan_place",
			},
			rezongxuan_place: {
				audio: "rezongxuan",
				enable: "phaseUse",
				usable: 1,
				sourceSkill: "rezongxuan",
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					player.chooseCard("he", true, "将一张牌置于牌堆顶");
					"step 2";
					if (result && result.cards) {
						event.card = result.cards[0];
						player.lose(result.cards, ui.cardPile, "insert");
						game.log(player, "将", get.position(event.card) == "h" ? "一张牌" : event.card, "置于牌堆顶");
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add("infohidden");
							cardx.classList.add("infoflip");
							player.$throw(cardx, 1000, "nobroadcast");
						}, player);
					} else event.finish();
				},
				ai: {
					order: 1,
					result: { player: 1 },
				},
			},
			//孙寒华
			chongxu: {
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					player.chooseToPlayBeatmap(lib.skill.chongxu.beatmaps.randomGet());
					"step 1";
					var score = Math.floor(Math.min(5, result.accuracy / 17));
					event.score = score;
					game.log(player, "的演奏评级为", "#y" + result.rank[0], "，获得积分点数", "#y" + score, "分");
					if (score < 3) {
						if (score >= 2) player.draw();
						event.finish();
						return;
					}
					var list = [];
					if (player.countMark("miaojian") < 2 && player.hasSkill("miaojian")) list.push("修改【妙剑】");
					if (player.countMark("shhlianhua") < 2 && player.hasSkill("shhlianhua")) list.push("修改【莲华】");
					if (list.length) {
						list.push("全部摸牌");
						player.chooseControl(list).set("prompt", "冲虚：修改技能" + (score == 5 ? "并摸一张牌" : "") + "；或摸" + Math.floor(score / 2) + "张牌");
					} else event._result = { control: "全部摸牌" };
					"step 2";
					var score = event.score;
					if (result.control != "全部摸牌") {
						score -= 3;
						var skill = result.control == "修改【妙剑】" ? "miaojian" : "shhlianhua";
						player.addMark(skill, 1, false);
						game.log(player, "修改了技能", "#g【" + get.translation(skill) + "】");
					}
					if (score > 1) player.draw(Math.floor(score / 2));
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
				beatmaps: [
					{
						//歌曲名称
						name: "鳥の詩",
						//歌曲文件名（默认在audio/effect文件夹下 若要重定向到扩展 请写为'ext:扩展名称/文件名'的格式）
						filename: "tori_no_uta",
						//每个音符的开始时间点（毫秒，相对未偏移的开始播放时间）
						timeleap: [1047, 3012, 4978, 5469, 5961, 6452, 6698, 7435, 8909, 10875, 12840],
						//开始播放时间的偏移量（毫秒）
						current: -110,
						//判定栏高度（相对整个对话框高度比例）
						judgebar_height: 0.16,
						//Good/Great/Prefect的位置判定范围（百分比，相对于整个对话框。以滑条的底部作为判定基准）
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						//滑条每相对于整个对话框下落1%所需的时间（毫秒）
						speed: 25,
					},
					{
						name: "竹取飛翔　～ Lunatic Princess",
						filename: "taketori_hishou",
						timeleap: [1021, 1490, 1959, 2896, 3834, 4537, 4771, 5709, 6646, 7585, 8039, 8494, 9403, 10291, 11180, 11832, 12049, 12920, 13345, 13771, 14196],
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(rgba(250, 170, 190, 1), rgba(240, 160, 180, 1))",
						judgebar_color: "linear-gradient(rgba(240, 120, 243, 1), rgba(245, 106, 230, 1))",
					},
					{
						name: "ignotus",
						filename: "ignotus",
						//Number of tracks
						//轨道数量
						number_of_tracks: 4,
						//Customize the track to generate for every note (0 is the first track)
						//自定义每个音符生成的轨道（0是第一个轨道）
						mapping: [0, 2, 3, 1, 1, 0, 3, 0, 0, 3, 0, 0, 2, 1, 2],
						//Convert from beats (0 is the first beat) to timeleap
						//将节拍（0是第一拍）转换为开始时间点
						timeleap: game.generateBeatmapTimeleap(170, [0, 4, 8, 12, 14, 16, 16.5, 23.5, 24, 31, 32, 40, 45, 46, 47]),
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(rgba(240, 250, 240, 1), rgba(230, 240, 230, 1))",
						judgebar_color: "linear-gradient(rgba(161, 59, 150, 1), rgba(58, 43, 74, 1))",
					},
					{
						name: "Super Mario 3D World Theme",
						filename: "sm3dw_overworld",
						//Random (Randomly choose tracks to generate notes each play)
						//随机（每次演奏时音符会随机选择轨道生成）
						mapping: "random",
						timeleap: [0, 1071, 1518, 2054, 4018, 4286, 5357, 6429, 7500, 8571, 9643, 10714, 11786, 12321, 12589, 12857, 13929, 15000, 16071, 17143, 18214, 18482, 18750, 19018, 19286, 20357],
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(rgba(120, 130, 240, 1), rgba(100, 100, 230, 1))",
						judgebar_color: "linear-gradient(rgba(230, 40, 30, 1), rgba(220, 30, 10, 1))",
					},
					{
						name: "只因你太美",
						filename: "chicken_you_are_so_beautiful",
						number_of_tracks: 7,
						mapping: [3, 6, 4, 5, 6, 2, 3, 2, 1, 2, 0, 4, 3, 6, 5, 4, 3, 6, 3, 2, 3, 1, 0, 1, 2, 3, 4, 5, 6],
						timeleap: game.generateBeatmapTimeleap(107, [2, 3.5, 4.5, 5.5, 6.5, 8.5, 10, 11.5, 12.5, 13.5, 14.5, 15.5, 18, 19.5, 20.5, 21.5, 22.5, 24.5, 26, 27.5, 28.5, 29.5, 30.5, 31, 31.5, 32, 32.5, 33, 33.5]),
						//Hitsound file name (By default in the audio/effect folder. To redirect to the extension, please write in the format of 'ext:extension_name')
						//打击音文件名（默认在audio/effect文件夹下 若要重定向到扩展 请写为'ext:扩展名称'的格式）
						hitsound: "chickun.wav",
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(#99f, #66c)",
						judgebar_color: "linear-gradient(#ccf, #99c)",
					},
					{
						name: "Croatian Rhapsody",
						filename: "croatian_rhapsody",
						mapping: [4, 1, 2, 1, 0, 0, 4, 5, 1, 3, 2, 1, 0, 0],
						timeleap: game.generateBeatmapTimeleap(96, [4, 6, 8, 9, 10, 11, 12, 13.5, 14, 15.5, 16, 17, 18, 19]),
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(#fff, #ccc)",
						judgebar_color: "linear-gradient(#fff, #ccc)",
					},
					{
						name: "罗刹海市",
						filename: "rakshasa_sea_city",
						number_of_tracks: 7,
						mapping: "random",
						timeleap: game.generateBeatmapTimeleap(150, [0, 2, 4, 6, 7, 9, 11, 13, 14, 16, 18, 20, 21, 23, 25, 27]),
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(#333, #000)",
						judgebar_color: "linear-gradient(#c66, #933)",
					},
					{
						name: "Pigstep (Stereo Mix)",
						filename: "pigstep",
						number_of_tracks: 16,
						timeleap: game.generateBeatmapTimeleap(170, [3, 4, 6, 6.5, 7.5, 11, 12, 14, 14.5, 15.5, 19, 20, 22, 22.5, 23.5, 27, 28, 30, 30.5, 31.5, 35, 36, 38, 38.5, 39.5, 43, 44, 46, 46.5, 47.5, 51, 52, 54, 54.5, 55.5, 59, 60, 62, 62.5]),
						current: -110,
						judgebar_height: 0.16,
						range1: [84, 110],
						range2: [90, 104],
						range3: [94, 100],
						speed: 25,
						node_color: "linear-gradient(#066, #033)",
						judgebar_color: "linear-gradient(#633, #300)",
					},
				],
				derivation: "chongxu_faq",
			},
			miaojian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					var level = player.countMark("miaojian");
					if (event.filterCard({ name: "sha", nature: "stab" }, player, event)) {
						if (level == 2) return true;
						if (
							level == 1 &&
							player.hasCard(function (card) {
								return get.type2(card) == "basic";
							}, "hs")
						)
							return true;
						if (
							level == 0 &&
							player.hasCard(function (card) {
								return get.name(card) == "sha";
							}, "hs")
						)
							return true;
					}
					if (event.filterCard({ name: "wuzhong" }, player, event)) {
						if (level == 2) return true;
						if (
							level == 1 &&
							player.hasCard(function (card) {
								return get.type2(card) != "basic";
							}, "hes")
						)
							return true;
						if (
							level == 0 &&
							player.hasCard(function (card) {
								return get.type2(card) == "trick";
							}, "hs")
						)
							return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function () {
						return ui.create.dialog("妙剑", [
							[
								["基本", "", "sha", "stab"],
								["锦囊", "", "wuzhong"],
							],
							"vcard",
						]);
					},
					filter: function (button, player) {
						var event = _status.event.getParent(),
							level = player.countMark("miaojian");
						if (button.link[2] == "sha") {
							if (!event.filterCard({ name: "sha", nature: "stab" }, player, event)) return false;
							if (level == 2) return true;
							if (level == 1)
								return player.hasCard(function (card) {
									return get.type2(card) == "basic";
								}, "hs");
							return (
								level == 0 &&
								player.hasCard(function (card) {
									return get.name(card) == "sha";
								}, "hs")
							);
						}
						if (button.link[2] == "wuzhong") {
							if (!event.filterCard({ name: "wuzhong" }, player, event)) return false;
							if (level == 2) return true;
							if (level == 1)
								return player.hasCard(function (card) {
									return get.type2(card) != "basic";
								}, "hes");
							return (
								level == 0 &&
								player.hasCard(function (card) {
									return get.type2(card) == "trick";
								}, "hs")
							);
						}
					},
					check: function (button) {
						var card = { name: button.link[2], nature: button.link[3] },
							player = _status.event.player;
						return get.value(card, player) * get.sgn(player.getUseValue(card));
					},
					backup: function (links, player) {
						var index = links[0][2] == "sha" ? 0 : 1,
							level = player.countMark("miaojian");
						var next = {
							audio: "miaojian",
							filterCard: [
								[
									function (card) {
										return get.name(card) == "sha";
									},
									function (card) {
										return get.type(card) == "basic";
									},
									() => false,
								],
								[
									function (card) {
										return get.type2(card) == "trick";
									},
									function (card) {
										return get.type(card) != "basic";
									},
									() => false,
								],
							][index][level],
							position: "hes",
							check: function (card) {
								if (card) return 6.5 - get.value(card);
								return 1;
							},
							viewAs: [
								{
									name: "sha",
									nature: "stab",
								},
								{
									name: "wuzhong",
								},
							][index],
						};
						if (level == 2) {
							next.selectCard = -1;
							next.viewAs.isCard = true;
						}
						return next;
					},
					prompt: function (links, player) {
						var index = links[0][2] == "sha" ? 0 : 1,
							level = player.countMark("miaojian");
						return [
							["将一张【杀】当做刺【杀】使用", "将一张基本牌当做刺【杀】使用", "请选择刺【杀】的目标"],
							["将一张锦囊牌当做【无中生有】使用", "将一张非基本牌当做【无中生有】使用", "请选择【无中生有】的目标"],
						][index][level];
					},
				},
				onremove: true,
				derivation: ["miaojian1", "miaojian2"],
				subSkill: { backup: { audio: "miaojian" } },
				ai: {
					order: 7,
					result: { player: 1 },
				},
			},
			shhlianhua: {
				audio: 2,
				derivation: ["shhlianhua1", "shhlianhua2"],
				trigger: { target: "useCardToTargeted" },
				forced: true,
				locked: false,
				filter: event => event.card.name == "sha",
				content: function () {
					"step 0";
					player.draw();
					var level = player.countMark("shhlianhua");
					if (!level) event.finish();
					else if (level == 2) event.goto(2);
					else
						player
							.judge(function (result) {
								return get.suit(result) == "spade" ? 1 : -1;
							})
							.set("judge2", result => result.bool);
					"step 1";
					if (result.bool) trigger.excluded.add(player);
					event.finish();
					"step 2";
					var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
					trigger.player
						.chooseToDiscard("he", "弃置一张牌，或令" + get.translation(trigger.card) + "对" + get.translation(player) + "无效")
						.set("ai", function (card) {
							if (_status.event.eff > 0) {
								return 10 - get.value(card);
							}
							return 0;
						})
						.set("eff", eff);
					"step 3";
					if (result.bool == false) {
						trigger.getParent().excluded.add(player);
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (card.name == "sha" && current < 0) return 0.7;
						},
					},
				},
			},
			//阎圃
			huantu: {
				audio: 2,
				trigger: { global: "phaseDrawBefore" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 0 && !player.hasSkill("huantu_round") && player.inRange(event.player);
				},
				checkx: function (event, player) {
					var target = event.player;
					return get.attitude(player, target) > 0 && (target.hasSkill("pingkou") || target.skipList.includes("phaseUse") || (target.isDamaged() && target.hp <= 2) || target.needsToDiscard());
				},
				content: function () {
					"step 0";
					player
						.chooseCard(get.prompt("huantu", trigger.player), "交给其一张牌并令其暂时跳过摸牌阶段", "he")
						.set("ai", function (card) {
							if (!_status.event.checkx) return 0;
							return 1 + Math.random();
						})
						.set("checkx", lib.skill.huantu.checkx(trigger, player));
					"step 1";
					if (result.bool) {
						player.addTempSkill("huantu_round", "roundStart");
						player.logSkill("huantu", trigger.player);
						player.give(result.cards, trigger.player);
						trigger.cancel();
						player.addTempSkill("huantu_effect");
					}
				},
				subSkill: {
					round: {
						charlotte: true,
						mark: true,
						intro: { content: "本轮已发动" },
					},
					effect: {
						audio: "huantu",
						trigger: { global: "phaseJieshuBegin" },
						forced: true,
						charlotte: true,
						logTarget: "player",
						filter: function (event, player) {
							return event.player.isIn();
						},
						content: function () {
							"step 0";
							var str = get.translation(trigger.player);
							player
								.chooseControl()
								.set("choiceList", ["令" + str + "回复1点体力并摸两张牌", "摸三张牌，然后交给" + str + "两张手牌"])
								.set("choice", trigger.player.isDamaged() ? 0 : 1);
							"step 1";
							if (result.index == 0) {
								trigger.player.recover();
								trigger.player.draw(2);
								event.finish();
							} else {
								event.target = trigger.player;
								player.draw(3);
							}
							"step 2";
							var hs = player.getCards("h");
							if (hs.length && target.isIn() && player.isIn()) {
								if (hs.length <= 2) event._result = { bool: true, cards: hs };
								else player.chooseCard("h", 2, true, "交给" + get.translation(target) + "两张手牌");
							} else event.finish();
							"step 3";
							if (result.bool) player.give(result.cards, trigger.player);
						},
					},
				},
			},
			bihuo: {
				trigger: { global: "dyingAfter" },
				logTarget: "player",
				limited: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return event.player.isIn();
				},
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				content: function () {
					player.awakenSkill("bihuo");
					trigger.player.draw(3);
					trigger.player.addTempSkill("bihuo_effect", "roundStart");
					trigger.player.addMark("bihuo_effect", game.countPlayer(), false);
				},
				subSkill: {
					effect: {
						onremove: true,
						charlotte: true,
						mod: {
							globalTo: function (from, to, distance) {
								return distance + to.countMark("bihuo_effect");
							},
						},
						intro: { content: "其他角色至你的距离+#" },
					},
				},
			},
			//马元义
			jibing: {
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				filter: function (event, player) {
					return player.getExpansions("jibing").length > 0 && (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) || event.filterCard(get.autoViewAs({ name: "shan" }, "unsure"), player, event));
				},
				chooseButton: {
					dialog: function (event, player) {
						var dialog = ui.create.dialog("集兵", "hidden");
						if (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) && event.filterCard(get.autoViewAs({ name: "shan" }, "unsure"), player, event)) {
							dialog._chooseButton = 2;
							var list = ["sha", "shan"];
							dialog.add([
								list.map(i => {
									return [i, get.translation(i)];
								}),
								"tdnodes",
							]);
						} else dialog._cardName = event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) ? "sha" : "shan";
						dialog.add(player.getExpansions("jibing"));
						return dialog;
					},
					filter: function (button) {
						var evt = _status.event,
							player = _status.event.player;
						if (evt.dialog) {
							if (!evt.dialog._chooseButton) {
								var evt2 = _status.event.getParent();
								return evt2.filterCard(get.autoViewAs({ name: evt.dialog._cardName }, [button.link]), player, evt2);
							}
							if (ui.selected.buttons.length) {
								var str = ui.selected.buttons[0].link;
								if (typeof str != "string" || typeof button.link == "string") return false;
								var evt2 = _status.event.getParent();
								return evt2.filterCard(get.autoViewAs({ name: str }, [button.link]), player, evt2);
							}
							return typeof button.link == "string";
						}
						return false;
					},
					select: function () {
						return _status.event.dialog ? _status.event.dialog._chooseButton || 1 : 1;
					},
					backup: function (links, player) {
						var card, name;
						if (links.length == 2) {
							name = links[0];
							card = links[1];
						} else {
							card = links[0];
							var event = _status.event;
							name = event.filterCard(get.autoViewAs({ name: "sha" }, [card]), player, event) ? "sha" : "shan";
						}
						return {
							audio: "jibing",
							filterCard: function (card) {
								return card == lib.skill.jibing_backup.card;
							},
							selectCard: -1,
							position: "x",
							viewAs: { name: name },
							card: card,
						};
					},
					prompt: function (links, player) {
						return "请选择【杀】的目标";
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						return player.getExpansions("jibing").length > 0;
					},
					order: function (item, player) {
						if (player.hasSkill("binghuo")) return 6;
						return 1;
					},
					result: {
						player: 1,
					},
				},
				group: "jibing_place",
				subSkill: {
					place: {
						audio: "jibing",
						trigger: { player: "phaseDrawBegin1" },
						prompt2: "摸牌阶段开始时，若你的“兵”数小于势力数，则你可以改为将牌堆顶的两张牌置于你的武将牌上，称为“兵”。",
						filter: function (event, player) {
							return !event.numFixed && player.getExpansions("jibing").length < game.countGroup();
						},
						content: function () {
							trigger.changeToZero();
							var cards = get.cards(2);
							player.addToExpansion(cards, "gain2").gaintag.add("jibing");
						},
					},
					backup: { audio: "jibing" },
				},
				intro: { content: "expansion", markcount: "expansion" },
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			wangjing: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				filter: function (event, player) {
					if (event.skill != "jibing_backup") return false;
					var target = lib.skill.wangjing.logTarget(event, player);
					return target && target.isMaxHp();
				},
				logTarget: function (event, player) {
					if (event.name == "respond") return event.source;
					if (event.card.name == "sha") return event.targets[0];
					return event.respondTo[0];
				},
				forced: true,
				content: function () {
					player.draw();
				},
				ai: {
					combo: "jibing",
					mingzhi: false,
					effect: {
						target: function (card, player, target, current) {
							if ((get.tag(card, "respondShan") || get.tag(card, "respondSha")) && target.getExpansions("jibing").length > 0 && player.isMaxHp()) {
								if (get.attitude(target, player) <= 0) {
									return [0, 0, 1, 0.3];
								}
							}
						},
					},
				},
			},
			moucuan: {
				audio: 2,
				derivation: "binghuo",
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "metal",
				filter: function (event, player) {
					return player.getExpansions("jibing").length >= game.countGroup();
				},
				content: function () {
					player.awakenSkill("moucuan");
					player.loseMaxHp();
					player.addSkills("binghuo");
				},
				ai: { combo: "jibing" },
			},
			binghuo: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.hasHistory("useCard", function (evt) {
							return evt.skill == "jibing_backup";
						}) ||
						player.hasHistory("respond", function (evt) {
							return evt.skill == "jibing_backup";
						})
					);
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("binghuo")).set("ai", function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("binghuo", target);
						target.judge(function (card) {
							if (get.color(card) == "black") return -2;
							return 0.1;
						}).judge2 = function (result) {
							return result.bool === false ? true : false;
						};
					} else event.finish();
					"step 2";
					if (result.bool == false) target.damage("thunder");
				},
				ai: { combo: "jibing", expose: 0.2 },
			},
			//傅佥
			jueyong: {
				audio: 2,
				trigger: { target: "useCardToTarget" },
				forced: true,
				filter: function (event, player) {
					return event.card.name != "jiu" && event.card.name != "tao" && event.targets.length == 1 && event.card.isCard && event.cards.length == 1 && event.getParent(2).name != "jueyong_timeout" && get.position(event.cards[0], true) == "o" && event.card.name == event.cards[0].name && (!player.storage.jueyong || player.storage.jueyong[0].length < player.getHp());
				},
				content: function () {
					trigger.targets.remove(player);
					trigger.getParent().triggeredTargets2.remove(player);
					trigger.untrigger();
					var card = trigger.cards[0];
					player.addToExpansion(card, "gain2").gaintag.add("jueyong");
					if (!player.storage.jueyong) player.storage.jueyong = [[], []];
					player.storage.jueyong[0].push(card);
					player.storage.jueyong[1].push(trigger.player);
					game.delayx();
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
					delete player.storage[skill];
				},
				intro: {
					markcount: function (storage) {
						if (!storage) return 0;
						return storage[0].length;
					},
					mark: function (dialog, storage, player) {
						if (!storage) return;
						dialog.addAuto(storage[0]);
						dialog.addText(get.translation(storage[1]));
					},
					onunmark: function (storage, player) {
						player.storage.jueyong = [[], []];
					},
				},
				ai: {
					reverseEquip: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "equip" && !get.tag(card, "gifts") && target.storage.jueyong && target.storage.jueyong[1].length) {
								var result1 = get.equipResult(player, target, card.name),
									subtype = get.subtype(card);
								for (var i of target.storage.jueyong[0]) {
									if (get.subtype(i, false) == subtype && get.equipResult(target, target, i.name) >= result1) return "zerotarget";
								}
							}
						},
					},
				},
				group: "jueyong_timeout",
				subSkill: {
					timeout: {
						audio: "jueyong",
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						filter: function (event, player) {
							return player.storage.jueyong && player.storage.jueyong[0].length > 0; //=Math.max(1,player.getDamagedHp());
						},
						content: function () {
							var list = player.storage.jueyong,
								card = list[0].shift(),
								source = list[1].shift();
							if (player.getExpansions("jueyong").includes(card)) {
								if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
								else player.loseToDiscardpile(card);
							}
							if (list[0].length) event.redo();
						},
					},
				},
			},
			poxiang: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: (event, player) => player.countCards("he") > 0,
				filterCard: true,
				filterTarget: lib.filter.notMe,
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				check: function (card) {
					var player = _status.event.player;
					if (
						!player.storage.jueyong ||
						!player.storage.jueyong[0].length ||
						(player.hp <= 1 &&
							!player.storage.jueyong[0].some(function (card) {
								return get.tag(card, "damage") > 0;
							})) ||
						!player.storage.jueyong[0].some(function (card) {
							return get.effect(player, card, player.storage.jueyong[1][player.storage.jueyong[0].indexOf(card)], player) < 0;
						})
					)
						return -1;
					return 20 - get.value(card);
				},
				content: function () {
					"step 0";
					player.give(cards, target);
					player.draw(3).gaintag = ["poxiang"];
					player.addTempSkill("poxiang_mark");
					"step 1";
					var cards = player.getExpansions("jueyong");
					if (cards.length) player.loseToDiscardpile(cards);
					player.unmarkSkill("jueyong");
					player.loseHp();
					"step 2";
					//player.skip('phaseDiscard');
					game.delayx();
				},
				ai: {
					order: 12,
					result: {
						player: 4,
						target: 1,
					},
				},
				subSkill: {
					mark: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("poxiang");
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("poxiang")) {
									return true;
								}
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("poxiang")) {
									return false;
								}
							},
						},
					},
				},
			},
			//曹真
			disordersidi: { audio: 2 },
			discretesidi: {
				audio: "disordersidi",
				trigger: { player: "useCardAfter" },
				direct: true,
				filter: function (event, player) {
					return (
						get.type(event.card, null, false) != "delay" &&
						game.hasPlayer(function (current) {
							return player != current && (!player.storage.discretesidi || !player.storage.discretesidi.includes(current));
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("discretesidi"), "选择两名角色a,b建立二元序偶<a,b>，或仅选择一名角色，建立二元序偶<a,a>", [1, 2], function (card, player, target) {
							if (ui.selected.targets.length) return true;
							return target != player && (!player.storage.discretesidi || !player.storage.discretesidi.includes(target));
						})
						.set("complexTarget", true)
						.set("complexSelect", true)
						.set("targetprompt", ["第一元素", "第二元素"])
						.set("ai", function (target) {
							var player = _status.event.player;
							if (!ui.selected.targets.length) {
								if (target.getEnemies().length == 1) return 2 + Math.random();
								return 1 + Math.random();
							}
							var targetx = ui.selected.targets[0];
							if (targetx.getEnemies().includes(target) && targetx.inRange(target)) return Math.random() - 0.5;
							return 0;
						}).animate = false;
					"step 1";
					if (result.bool && result.targets.length) {
						var targets = result.targets;
						player.logSkill("discretesidi", targets[0]);
						if (targets.length == 1) targets.push(targets[0]);
						if (!player.storage.discretesidi) player.storage.discretesidi = [];
						if (!player.storage.discretesidi2) player.storage.discretesidi2 = [];
						player.storage.discretesidi.push(targets[0]);
						player.storage.discretesidi2.push(targets[1]);
						player.markSkill("discretesidi");
						game.delayx();
					}
				},
				intro: {
					content: function (storage, player) {
						if ((player == game.me || player.isUnderControl()) && !game.observe) {
							var str = "R={ ";
							for (var i = 0; i < storage.length; i++) {
								str += "&lt;" + get.translation(storage[i]) + ", " + get.translation(player.storage.discretesidi2[i]) + "&gt;";
								if (i < storage.length - 1) str += ", ";
							}
							str += " }";
							return str;
						}
						return "已指定" + get.translation(storage) + "为目标";
					},
				},
				onremove: function (player) {
					delete player.storage.discretesidi;
					delete player.storage.discretesidi2;
				},
				group: ["discretesidi_clear", "discretesidi_exec"],
				subSkill: {
					clear: {
						trigger: { global: ["useCardToPlayered", "die"] },
						forced: true,
						popup: false,
						locked: false,
						filter: function (event, player) {
							if (!player.storage.discretesidi || !player.storage.discretesidi.includes(event.player)) return false;
							if (event.name == "die") return true;
							if (get.type(event.card, null, false) != "delay") {
								var index = player.storage.discretesidi.indexOf(event.player);
								return index != -1 && (player.storage.discretesidi2[index] != event.target || event.targets.length != 1);
							}
							return false;
						},
						content: function () {
							player.storage.discretesidi2.splice(player.storage.discretesidi.indexOf(trigger.player), 1);
							player.unmarkAuto("discretesidi", [trigger.player]);
						},
					},
					exec: {
						audio: "disordersidi",
						trigger: { global: "useCardToPlayered" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							if (get.type(event.card, null, false) == "delay" || !player.storage.discretesidi || event.targets.length != 1) return false;
							var index = player.storage.discretesidi.indexOf(event.player);
							return index != -1 && player.storage.discretesidi2[index] == event.target;
						},
						logTarget: "player",
						content: function () {
							"step 0";
							player.storage.discretesidi2.splice(player.storage.discretesidi.indexOf(trigger.player), 1);
							player.unmarkAuto("discretesidi", [trigger.player]);
							if (trigger.target == player) {
								player.draw();
								event.finish();
								return;
							}
							var target = trigger.player;
							event.target = target;
							player
								.chooseControl("cancel2")
								.set("choiceList", ["取消" + get.translation(trigger.card) + "的所有目标并对" + get.translation(target) + "造成1点伤害", "摸两张牌"])
								.set("ai", function () {
									var player = _status.event.player,
										evt = _status.event.getTrigger();
									if (get.damageEffect(evt.player, player, player) > 0 && get.effect(evt.target, evt.card, evt.player, player) < 0) return 0;
									return 1;
								});
							"step 1";
							if (result.index == 0) {
								trigger.cancel();
								trigger.targets.length = 0;
								trigger.getParent().triggeredTargets1.length = 0;
								if (!_status.dying.length) target.damage();
							} else if (result.index == 1) player.draw(2);
						},
					},
				},
			},
			//数学家
			mbsidi: {
				audio: "disordersidi",
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					return (
						get.type(event.card, false) != "delay" &&
						game.hasPlayer(function (current) {
							return player != current && (!player.storage.mbsidi || !player.storage.mbsidi.includes(current));
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("mbsidi"), "选择一名角色，为其选择一名“司敌”目标角色", function (card, player, target) {
							return target != player && (!player.storage.mbsidi || !player.storage.mbsidi.includes(target));
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							if (target.getEnemies().length == 1) return 2 + Math.random();
							return 1 + Math.random();
						}).animate = false;
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player
							.chooseTarget("为" + get.translation(target) + "选择一名“司敌”目标角色")
							.set("ai", function (target) {
								var player = _status.event.player;
								var targetx = _status.event.target;
								if (targetx.getEnemies().includes(target) && targetx.inRange(target)) return Math.random() + 1.5;
								return targetx == target ? 1 : -1;
							})
							.set("target", target).animate = false;
					} else event.finish();
					"step 2";
					if (result.bool) {
						result.targets.unshift();
						player.logSkill("mbsidi", target);
						if (!player.storage.mbsidi) player.storage.mbsidi = [];
						if (!player.storage.mbsidi2) player.storage.mbsidi2 = [];
						player.storage.mbsidi.push(target);
						player.storage.mbsidi2.push(result.targets[0]);
						player.markSkill("mbsidi");
						game.delayx();
					}
				},
				intro: {
					content: function (storage, player) {
						if ((player == game.me || player.isUnderControl()) && !game.observe) {
							var storage2 = player.storage.mbsidi2,
								str = "";
							for (var i = 0; i < storage.length; i++) {
								str += get.translation(storage[i]) + "=>" + get.translation(storage2[i]);
								if (i < storage.length - 1) str += "<br>";
							}
							return str;
						}
						return "已指定" + get.translation(storage) + "为目标";
					},
				},
				onremove: function (player) {
					delete player.storage.mbsidi;
					delete player.storage.mbsidi2;
				},
				group: ["mbsidi_clear", "mbsidi_exec"],
				subSkill: {
					clear: {
						trigger: { global: ["useCardToPlayered", "die"] },
						filter: function (event, player) {
							if (!player.storage.mbsidi || !player.storage.mbsidi.includes(event.player)) return false;
							if (event.name == "die") return true;
							if (get.type(event.card, false) != "delay") {
								var index = player.storage.mbsidi.indexOf(event.player);
								return index != -1 && (player.storage.mbsidi2[index] != event.target || event.targets.length != 1);
							}
							return false;
						},
						forced: true,
						locked: false,
						popup: false,
						content: function () {
							player.storage.mbsidi2.splice(player.storage.mbsidi.indexOf(trigger.player), 1);
							player.unmarkAuto("mbsidi", [trigger.player]);
						},
					},
					exec: {
						audio: "disordersidi",
						trigger: { global: "useCardToPlayered" },
						filter: function (event, player) {
							if (get.type(event.card, false) == "delay" || !player.storage.mbsidi || event.targets.length != 1) return false;
							var index = player.storage.mbsidi.indexOf(event.player);
							return index != -1 && player.storage.mbsidi2[index] == event.target;
						},
						logTarget: "player",
						forced: true,
						locked: false,
						content: function () {
							"step 0";
							player.storage.mbsidi2.splice(player.storage.mbsidi.indexOf(trigger.player), 1);
							player.unmarkAuto("mbsidi", [trigger.player]);
							if (trigger.target == player) {
								player.draw();
								event.finish();
								return;
							}
							var target = trigger.player;
							event.target = target;
							player
								.chooseControl("cancel2")
								.set("choiceList", ["取消" + get.translation(trigger.card) + "的所有目标" + (_status.dying.length ? "" : "，然后对" + get.translation(target) + "造成1点伤害"), "摸两张牌"])
								.set("ai", function () {
									var player = _status.event.player,
										evt = _status.event.getTrigger();
									if (get.damageEffect(evt.player, player, player) > 0 && get.effect(evt.target, evt.card, evt.player, player) < 0) return 0;
									return 1;
								});
							"step 1";
							if (result.index == 0) {
								trigger.cancel();
								trigger.targets.length = 0;
								trigger.getParent().triggeredTargets1.length = 0;
								if (!_status.dying.length) target.damage();
							} else if (result.index == 1) player.draw(2);
						},
					},
				},
			},
			//孙鲁班
			xinzenhui: {
				audio: 2,
				trigger: { player: "useCardToPlayer" },
				filter: function (event, player) {
					if (event.targets.length != 1) return false;
					var card = event.card;
					if (card.name != "sha" && (get.type(card, null, false) != "trick" || get.color(card, false) != "black")) return false;
					if (!player.isPhaseUsing() || player.hasSkill("xinzenhui2")) return false;
					return game.hasPlayer(function (current) {
						return current != player && current != event.target && lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("xinzenhui"), function (card, player, target) {
							if (player == target) return false;
							var evt = _status.event.getTrigger();
							return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return Math.max(target.countGainableCards(player, "he") ? get.effect(target, { name: "shunshou_copy2" }, player, player) : 0, get.effect(target, trigger.card, player, player));
						});
					"step 1";
					if (result.bool) {
						player.addTempSkill("xinzenhui2", "phaseUseAfter");
						var target = result.targets[0],
							str = get.translation(target);
						event.target = target;
						player.logSkill("xinzenhui", target);
						if (!target.countGainableCards(player, "he")) event._result = { index: 0 };
						else
							player
								.chooseControl()
								.set("choiceList", ["令" + str + "也成为" + get.translation(trigger.card) + "的目标", "获得" + str + "的一张牌，然后其成为" + get.translation(trigger.card) + "的使用者"])
								.set("ai", function () {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player,
										target = _status.event.getParent().target;
									return (target.countGainableCards(player, "he") ? get.effect(target, { name: "shunshou_copy2" }, player, player) : 0) > get.effect(target, trigger.card, player, player) ? 1 : 0;
								});
					} else event.finish();
					"step 2";
					if (result.index == 1) {
						trigger.untrigger();
						trigger.getParent().player = event.target;
						game.log(event.target, "成为了", trigger.card, "的使用者");
						player.gainPlayerCard(target, true, "he");
					} else {
						game.log(event.target, "成为了", trigger.card, "的额外目标");
						trigger.getParent().targets.push(event.target);
					}
				},
			},
			xinzenhui2: {},
			xinjiaojin: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				filter: function (event, player) {
					return player.countCards("he", { type: "equip" }) && event.source && event.source.hasSex("male");
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard("he", "骄矜：是否弃置一张装备牌防止伤害？", function (card, player) {
						return get.type(card) == "equip";
					});
					next.set("ai", function (card) {
						var player = _status.event.player;
						if (player.hp == 1 || _status.event.getTrigger().num > 1) {
							return 9 - get.value(card);
						}
						if (player.hp == 2) {
							return 8 - get.value(card);
						}
						return 7 - get.value(card);
					});
					next.logSkill = "xinjiaojin";
					"step 1";
					if (result.bool) {
						game.delay(0.5);
						trigger.cancel();
					}
				},
			},
			//谯周
			zhiming: {
				audio: 2,
				trigger: { player: ["phaseZhunbeiBegin", "phaseDiscardEnd"] },
				frequent: true,
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					if (player.countCards("he") > 0) {
						var next = player.chooseCard("he", "是否将一张牌置于牌堆顶？");
						if (trigger.name == "phaseZhunbei") {
							next.set("ai", function (card) {
								var player = _status.event.player,
									js = player.getCards("j");
								if (js.length) {
									var judge = get.judge(js[0]);
									if (judge && judge(card) >= 0) return 20 - get.value(card);
								}
								return 0;
							});
						} else
							next.set("ai", function (card) {
								var player = _status.event.player,
									js = player.next.getCards("j");
								if (js.length) {
									var judge = get.judge(js[0]);
									if (judge && (judge(card) + 0.01) * get.attitude(player, player.next) > 0) return 20 - get.value(card);
								}
								return 0;
							});
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.$throw(get.position(result.cards[0]) == "e" ? result.cards[0] : 1, 1000);
						game.log(player, "将", get.position(result.cards[0]) == "e" ? result.cards[0] : "#y一张手牌", "置于了牌堆顶");
						player.lose(result.cards, ui.cardPile, "insert");
					} else event.finish();
					"step 3";
					game.updateRoundNumber();
					game.delayx();
				},
				ai: { guanxing: true },
			},
			xingbu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				prompt2: "亮出牌堆顶的三张牌，并可以根据其中红色牌的数量，令一名其他角色获得一种效果",
				content: function () {
					"step 0";
					var cards = game.cardsGotoOrdering(get.cards(3)).cards;
					event.cards = cards;
					player.showCards(cards, get.translation(player) + "发动了【星卜】");
					"step 1";
					var num = 0;
					for (var i of cards) {
						if (get.color(i, false) == "red") num++;
					}
					player.chooseTarget("是否选择一名其他角色获得星卜效果（" + get.cnNumber(num) + "张）？", lib.filter.notMe).set("ai", function (target) {
						var player = _status.event.player,
							num = _status.event.getParent().num;
						var att = get.attitude(player, target);
						if (num < 3) att *= -1;
						if (num == 2 && target.hasJudge("lebu")) att *= -1.4;
						return att;
					});
					if (num == 0) num = 1;
					event.num = num;
					"step 2";
					if (result.bool) {
						var skill = "xingbu_effect" + num,
							target = result.targets[0];
						player.line(target, "green");
						game.log(player, "选择了", target);
						target.addTempSkill(skill, { player: "phaseEnd" });
						target.addMark(skill, 1, false);
						game.delayx();
					}
				},
				subSkill: {
					effect1: {
						charlotte: true,
						onremove: true,
						intro: { content: "准备阶段开始时弃置#张手牌" },
						trigger: { player: "phaseZhunbeiBegin" },
						forced: true,
						filter: function (event, player) {
							return player.countCards("h") > 0;
						},
						content: function () {
							player.chooseToDiscard("h", true, player.countMark("xingbu_effect1"));
						},
					},
					effect2: {
						charlotte: true,
						onremove: true,
						intro: { content: "使用【杀】的次数上限-#，跳过弃牌阶段" },
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num - player.countMark("xingbu_effect2");
							},
						},
						trigger: { player: "phaseDiscardBegin" },
						forced: true,
						content: function () {
							trigger.cancel();
						},
					},
					effect3: {
						charlotte: true,
						onremove: true,
						intro: { content: "摸牌阶段多摸2*#张牌，使用【杀】的次数上限+#。" },
						trigger: { player: ["phaseDrawBegin2"] },
						forced: true,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							if (trigger.name == "phaseDraw") trigger.num += player.countMark("xingbu_effect3") * 2;
						},
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("xingbu_effect3");
							},
						},
					},
				},
			},
			//顾雍
			xinshenxing: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return (player.getStat("skill").xinshenxing || 0) < player.hp && player.countCards("he") > 1;
				},
				selectCard: 2,
				position: "he",
				check: function (card) {
					if (!ui.selected.cards.length || get.color(card) != get.color(ui.selected.cards[0])) return 6.5 - get.value(card);
					return 6.5 - get.value(card) - get.value(ui.selected.cards[0]);
				},
				filterCard: true,
				content: function () {
					player.draw(get.color(cards) == "none" ? 2 : 1);
				},
				ai: {
					order: 1,
					result: { player: 1 },
				},
			},
			xinbingyi: {
				audio: "bingyi",
				audioname: ["xin_guyong"],
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterx: function (event, player) {
					var cards = player.getCards("h");
					if (cards.length == 1) return true;
					var color = get.color(cards[0], player),
						type = get.type2(cards[0], player);
					for (var i = 1; i < cards.length; i++) {
						if (color && get.color(cards[i], player) != color) color = false;
						if (type && get.type2(cards[i], player) != type) type = false;
						if (!color && !type) return false;
					}
					return true;
				},
				direct: true,
				content: function () {
					"step 0";
					if (lib.skill.xinbingyi.filterx(trigger, player)) {
						player
							.chooseTarget(get.prompt("xinbingyi"), "展示所有手牌，并选择至多" + get.cnNumber(player.countCards("h")) + "名角色各摸一张牌", [0, player.countCards("h")], function (card, player, target) {
								return true;
							})
							.set("ai", function (target) {
								return get.attitude(_status.event.player, target);
							});
					} else
						player.chooseBool(get.prompt("bingyi"), "展示所有手牌").ai = function () {
							return false;
						};
					"step 1";
					if (result.bool) {
						player.logSkill("xinbingyi");
						player.showHandcards(get.translation(player) + "发动了【秉壹】");
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					if (targets && targets.length) {
						player.line(targets, "green");
						targets.sortBySeat();
						game.asyncDraw(targets);
					}
				},
				ai: {
					expose: 0.1,
				},
			},
			//钟会
			requanji: {
				audio: 2,
				trigger: { player: ["damageEnd", "phaseUseEnd"] },
				frequent: true,
				locked: false,
				filter: function (event, player) {
					if (event.name == "phaseUse") return player.countCards("h") > player.hp;
					return event.num > 0;
				},
				content: function () {
					"step 0";
					event.count = trigger.num || 1;
					"step 1";
					event.count--;
					player.draw();
					"step 2";
					if (player.countCards("h")) {
						player.chooseCard("将一张手牌置于武将牌上作为“权”", true);
					} else {
						event.goto(4);
					}
					"step 3";
					if (result.cards && result.cards.length) {
						player.addToExpansion(result.cards, player, "give").gaintag.add("quanji");
					}
					"step 4";
					if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
						player.chooseBool(get.prompt2("requanji")).set("frequentSkill", event.name);
					} else event.finish();
					"step 5";
					if (result.bool) {
						player.logSkill("requanji");
						event.goto(1);
					}
				},
				mod: {
					maxHandcard(player, num) {
						return num + player.getExpansions("quanji").length;
					},
					aiOrder(player, card, num) {
						if (num <= 0 || typeof card !== "object" || !player.isPhaseUsing()) return num;
						if (player.countCards("h") > (player.hp + 1)) return num;
						if (!player.hasSkill("zili") || player.hasSkill("paiyi")) return num;
						if (player.getExpansions("quanji").length < 3) {
							if (get.type(card) == "equip" && !["equip2", "equip3"].includes(get.subtype(card))) return 0;
							let eff = 6 + player.hp;
							if (!get.tag(card, "gain") && !get.tag(card, "draw")) eff += 3;
							if (player.getUseValue(card) < eff) return 0;
						}
					},
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions("quanji");
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					notemp: true,
					threaten: 0.8,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [0.5, get.tag(card, "damage") * 2];
								if (!target.hasSkill("paiyi") && target.hp > 1) return [0.5, get.tag(card, "damage") * 1.5];
								if (target.hp == 3) return [0.5, get.tag(card, "damage") * 1.5];
								if (target.hp == 2) return [1, get.tag(card, "damage") * 0.5];
							}
						},
					},
				},
			},
			//蔡夫人
			xinqieting: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				direct: true,
				filter: function (event, player) {
					return (
						player != event.player &&
						event.player.getHistory("sourceDamage", function (evt) {
							return evt.player != event.player;
						}).length == 0
					);
				},
				content: function () {
					"step 0";
					var list = ["摸一张牌"],
						target = trigger.player,
						str = get.translation(target);
					event.target = target;
					event.addIndex = 0;
					if (target.countCards("h") > 0) list.push("观看" + str + "的两张手牌并获得其中一张");
					else event.addIndex++;
					if (
						target.countCards("e", function (card) {
							return player.canEquip(card);
						}) > 0
					)
						list.push("将" + str + "装备区内的一张牌移动至自己的装备区");
					player
						.chooseControl("cancel2")
						.set("choiceList", list)
						.set("prompt", get.prompt("xinqieting", target))
						.set("ai", function () {
							var evt = _status.event.getParent();
							if (get.attitude(evt.player, evt.target) > 0) return 0;
							var val = evt.target.hasSkillTag("noe") ? 6 : 0;
							if (
								evt.target.countCards("e", function (card) {
									return evt.player.canEquip(card) && get.value(card, evt.target) > val && get.effect(evt.player, card, evt.player, evt.player) > 0;
								}) > 0
							)
								return 2 - evt.addIndex;
							if (evt.target.countCards("h") > 0) return 1;
							return 0;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("xinqieting", target);
						if (result.index == 0) {
							player.draw();
							event.finish();
						} else if (result.index + event.addIndex == 1) {
							player.choosePlayerCard(target, "h", 2, true);
							player.addExpose(0.2);
							event.goto(3);
						} else {
							player.addExpose(0.1);
							player
								.choosePlayerCard(target, "e", true)
								.set("filterButton", function (button) {
									return _status.event.player.canEquip(button.link);
								})
								.set("ai", function (button) {
									var player = _status.event.player;
									return get.effect(player, button.link, player, player);
								});
						}
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						target.$give(card, player, false);
						game.delay(0.5);
						player.equip(card);
					}
					event.finish();
					"step 3";
					if (result.bool) player.chooseButton(["选择获得一张牌", result.cards], true);
					else event.finish();
					"step 4";
					if (result.bool) {
						var card = result.links[0];
						if (lib.filter.canBeGained(card, player, target)) player.gain(card, target, "giveAuto", "bySelf");
						else game.log("但", card, "不能被", player, "获得！");
					}
				},
			},
			mobilezhongyong: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				direct: true,
				filter: function (event, player) {
					if (event.card.name != "sha" || !event.isPhaseUsing(player)) return false;
					if (event.cards.filterInD().length > 0) return true;
					var list = lib.skill.mobilezhongyong.getResponds(event);
					if (list.length) {
						for (var evt of list) {
							if (evt.cards.filterInD("od").length > 0) return true;
						}
					}
					return false;
				},
				getResponds: function (event) {
					var list = [];
					for (var i of event.targets) {
						list.addArray(
							i.getHistory("useCard", function (evt) {
								return evt.card.name == "shan" && evt.respondTo && evt.respondTo[1] == event.card;
							})
						);
					}
					return list;
				},
				content: function () {
					"step 0";
					event.shas = trigger.cards.filterInD();
					var list = lib.skill.mobilezhongyong.getResponds(trigger);
					if (list.length) {
						event.shans = [];
						for (var evt of list) {
							event.shans.addArray(evt.cards.filterInD("od"));
						}
						event.goto(2);
					} else
						player.chooseBool(get.prompt("mobilezhongyong"), "获得" + get.translation(event.shas)).set("ai", function () {
							var evt = _status.event.getParent();
							return get.value(evt.shas, evt.player) > 0;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("mobilezhongyong");
						player.addTempSkill("mobilezhongyong_buff");
						player.gain(event.shas, "gain2").gaintag.add("mobilezhongyong");
					}
					event.finish();
					"step 2";
					var shans = get.translation(event.shans),
						choiceList = ["获得" + shans];
					if (
						game.hasPlayer(function (current) {
							return current != player && !trigger.targets.includes(current);
						})
					) {
						if (event.shas.length) choiceList[0] += "，然后可以令另一名其他角色获得" + get.translation(event.shas);
						choiceList.push("令另一名其他角色获得" + shans + "，然后你于本回合内使用【杀】的次数上限+1且下一张【杀】的伤害值基数+1");
					}
					player
						.chooseControl("cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt("mobilezhongyong"))
						.set("ai", function () {
							var evt = _status.event.getParent(),
								player = evt.player,
								tri = _status.event.getTrigger();
							if (
								game.hasPlayer(function (current) {
									return current != player && !tri.targets.includes(current) && get.attitude(player, current) > 0;
								}) &&
								player.countCards("hs", function (card) {
									return get.name(card) == "sha" && player.hasValueTarget(card);
								}) > player.getCardUsable({ name: "sha" })
							)
								return 1;
							return 0;
						});
					"step 3";
					if (result.index == 0) {
						player.logSkill("mobilezhongyong");
						player.addTempSkill("mobilezhongyong_buff");
						player.gain(event.shans, "gain2").gaintag.add("mobilezhongyong");
					} else event.goto(6);
					"step 4";
					event.shas = event.shas.filterInD("od");
					if (
						event.shas.length &&
						game.hasPlayer(function (current) {
							return current != player && !trigger.targets.includes(current);
						})
					) {
						player
							.chooseTarget("是否令一名其他角色获得" + get.translation(event.shas) + "？", function (card, player, target) {
								return target != player && !_status.event.getTrigger().targets.includes(target);
							})
							.set("ai", function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (att <= 0) return att;
								if (target.hasSkillTag("nogain")) return att / 10;
								if (!target.hasSha()) return 2 * att;
								return att;
							});
					} else event.finish();
					"step 5";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.gain(event.shas, "gain2");
					}
					event.finish();
					"step 6";
					player
						.chooseTarget("令一名其他角色获得" + get.translation(event.shans), true, function (card, player, target) {
							return target != player && !_status.event.getTrigger().targets.includes(target);
						})
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att <= 0) return att;
							if (target.hasSkillTag("nogain")) return att / 10;
							if (!target.hasShan()) return 2 * att;
							return att;
						});
					"step 7";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("mobilezhongyong", target);
						target.gain(event.shans, "gain2");
						player.addTempSkill("mobilezhongyong_buff");
						player.addMark("mobilezhongyong_buff", 1, false);
						player.addMark("mobilezhongyong_damage", 1, false);
					}
				},
				subSkill: {
					buff: {
						mod: {
							cardEnabled2: function (card, player) {
								if (get.itemtype(card) == "card" && card.hasGaintag("mobilezhongyong")) return false;
							},
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("mobilezhongyong_buff");
							},
						},
						trigger: { player: "useCard1" },
						firstDo: true,
						forced: true,
						charlotte: true,
						popup: false,
						filter: function (event, player) {
							return event.card.name == "sha" && player.countMark("mobilezhongyong_damage") > 0;
						},
						content: function () {
							trigger.baseDamage += player.storage.mobilezhongyong_damage;
							delete player.storage.mobilezhongyong_damage;
						},
						onremove: function (player) {
							delete player.storage.mobilezhongyong_buff;
							delete player.storage.mobilezhongyong_damage;
							player.removeGaintag("mobilezhongyong");
						},
					},
				},
			},
			rejieyue: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						prompt: get.prompt2("rejieyue"),
						filterCard: true,
						position: "he",
						filterTarget: lib.filter.notMe,
						ai1: function (card) {
							var player = _status.event.player;
							if (get.name(card) == "du") return 20;
							if (get.position(card) == "e" && get.value(card) <= 0) return 14;
							if (
								get.position(card) == "h" &&
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
								})
							)
								return 12;
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0;
								})
							) {
								if (card.name == "wuxie") return 11;
								if (card.name == "shan" && player.countCards("h", "shan") > 1) return 9;
							}
							return 6 / Math.max(1, get.value(card));
						},
						ai2: function (target) {
							var player = _status.event.player;
							var card = ui.selected.cards[0];
							var att = get.attitude(player, target);
							if (card.name == "du") return -6 * att;
							if (att > 0) {
								if (get.position(card) == "h" && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
								if (get.value(card, target) > get.value(card, player)) return 2 * att;
								return 1.2 * att;
							}
							return (-att * Math.min(4, target.countCards("he"))) / 4;
						},
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("rejieyue", target);
						player.give(result.cards, target);
					} else event.finish();
					"step 2";
					var num = 0;
					if (target.countCards("h")) num++;
					if (target.countCards("e")) num++;
					if (num > 0) {
						var next = target.chooseCard("he", num, "选择保留每个区域的各一张牌，然后弃置其余的牌。或点取消，令" + get.translation(player) + "摸三张牌", function (card) {
							for (var i = 0; i < ui.selected.cards.length; i++) {
								if (get.position(ui.selected.cards[i]) == get.position(card)) return false;
							}
							return true;
						});
						next.set("complexCard", true);
						next.set("goon", get.attitude(target, player) >= 0);
						next.set("maxNum", num);
						next.set("ai", function (card) {
							if (_status.event.goon) return -1;
							var num = _status.event.maxNum;
							if (ui.selected.cards.length >= num - 1) {
								var cards = player.getCards("he", function (cardx) {
									return cardx != card && !ui.selected.cards.includes(cardx);
								});
								var val = 0;
								for (var cardx of cards) val += get.value(cardx);
								if (val >= 14) return 0;
							}
							return get.value(card);
						});
					} else event._result = { bool: false };
					"step 3";
					if (!result.bool) player.draw(3);
					else {
						var cards = target.getCards("he");
						cards.removeArray(result.cards);
						if (cards.length) target.discard(cards);
					}
				},
				ai: {
					threaten: 1.3,
					expose: 0.2,
				},
			},
			tiansuan: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.storage.tiansuan2;
				},
				content: function () {
					"step 0";
					player
						.chooseControl("上上签", "上签", "中签", "下签", "下下签", "cancel2")
						.set("prompt", "天算：是否增加其中一个命运签的权重？")
						.set("ai", function () {
							return Math.random() < 0.5 ? 0 : 4;
						});
					"step 1";
					var list = [0, 1, 1, 2, 2, 2, 3, 3, 4];
					if (result.control != "cancel2") list.push(result.index);
					var num = list.randomGet();
					event.num = num;
					var str = get.translation(player) + "抽取的命运签为：" + lib.skill["tiansuan2_" + num].name;
					game.log(player, "抽取出了", "#g" + lib.skill["tiansuan2_" + num].name);
					event.dialog = ui.create.dialog(str);
					event.videoId = lib.status.videoId++;
					game.broadcast("createDialog", event.videoId, str);
					game.pause();
					setTimeout(function () {
						game.resume();
					}, 1500);
					"step 2";
					event.dialog.close();
					game.broadcast("closeDialog", event.videoId);
					player.chooseTarget(true, "令一名角色获得“" + lib.skill["tiansuan2_" + num].name + "”").set("ai", lib.skill["tiansuan2_" + num].aiCheck);
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						game.log(player, "令", target, "获得了命运签");
						player.storage.tiansuan2 = target;
						player.storage.tiansuan3 = "tiansuan2_" + num;
						player.addTempSkill("tiansuan2", { player: "phaseBegin" });
						target.addSkill("tiansuan2_" + num);
						var pos = "e";
						if (target != player) pos += "h";
						if (num == 0) pos += "j";
						if (num < 2 && target.countGainableCards(player, pos) > 0) {
							var next = player.gainPlayerCard(target, pos, true);
							if (num == 0) next.visible = true;
						} else game.delayx();
					}
				},
				derivation: "tiansuan_faq",
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
			},
			tiansuan2: {
				charlotte: true,
				onremove: function (player, skill) {
					if (player.storage.tiansuan2) player.storage.tiansuan2.removeSkill(player.storage.tiansuan3);
					delete player.storage.tiansuan2;
					delete player.storage.tiansuan3;
				},
			},
			tiansuan2_0: {
				name: "上上签",
				trigger: { player: "damageBegin4" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				content: function () {
					trigger.cancel();
				},
				mark: true,
				intro: {
					content: "当你受到伤害时，防止此伤害。",
				},
				aiCheck: function (target) {
					if (target.hasSkill("tiansuan2_0")) return 0;
					var player = _status.event.player;
					var att = get.attitude(player, target);
					if (
						target.countCards("e", function (card) {
							return get.value(card, target) <= 0;
						})
					)
						att *= 2;
					return att / Math.sqrt(Math.max(1, target.hp));
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && !player.hasSkillTag("jueqing", false, target)) return "zerotarget";
						},
					},
				},
			},
			tiansuan2_1: {
				name: "上签",
				trigger: { player: "damageBegin4" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				filter: function (event, player) {
					return event.num > 1;
				},
				content: function () {
					trigger.num = 1;
				},
				group: "tiansuan2_damage",
				mark: true,
				intro: {
					content: "当你受到伤害时，你令伤害值改为1；当你受到1点伤害后，你摸一张牌。",
				},
				aiCheck: function (target) {
					if (target.hasSkill("tiansuan2_1")) return 0;
					var player = _status.event.player;
					var att = get.attitude(player, target);
					if (
						target.countCards("e", function (card) {
							return get.value(card, target) <= 0;
						})
					)
						att *= 2;
					if (target.hp == 1) return att / 2;
					return att / Math.sqrt(Math.max(1, target.hp));
				},
				ai: {
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
						}
					},
					effect: {
						target: function (card, player, target, current) {
							if (target && target.hp > 1 && get.tag(card, "damage") && !player.hasSkillTag("jueqing", false, target)) return 0.8;
						},
					},
				},
			},
			tiansuan2_damage: {
				trigger: { player: "damageEnd" },
				charlotte: true,
				sourceSkill: "tiansuan",
				content: function () {
					player.draw(trigger.num);
				},
			},
			tiansuan2_2: {
				name: "中签",
				trigger: { player: "damageBegin4" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				filter: function (event, player) {
					return event.num > 1;
				},
				content: function () {
					trigger.num = 1;
				},
				mark: true,
				intro: {
					content: "当你受到伤害时，你令伤害属性改为火属性并将伤害值改为1。",
				},
				aiCheck: function (target) {
					if (target.hasSkill("tiansuan2_2")) return 0;
					let player = _status.event.player, original = get.damageEffect(target, player, player);
					target.addSkill("tiansuan2_ai");
					let fire = get.damageEffect(target, player, player, "fire");
					target.removeSkill("tiansuan2_ai");
					return (fire - original) * get.attitude(player, target);
				},
				group: ["tiansuan2_fire", "tiansuan2_ai"],
			},
			tiansuan2_ai: {
				ai: {
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
						}
					},
				},
			},
			tiansuan2_fire: {
				trigger: { player: "damageBefore" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				filter: function (event, player) {
					return !event.hasNature("fire");
				},
				content: function () {
					game.setNature(trigger, "fire");
				},
			},
			tiansuan2_3: {
				name: "下签",
				trigger: { player: "damageBegin3" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				content: function () {
					trigger.num++;
				},
				mark: true,
				intro: {
					content: "当你受到伤害时，你令此伤害+1。",
				},
				aiCheck: function (target) {
					if (target.hasSkill("tiansuan2_3")) return 0;
					var player = _status.event.player;
					var att = get.attitude(player, target);
					return -att / Math.sqrt(Math.max(1, target.hp));
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && !player.hasSkillTag("jueqing", false, target) && current < 0) return 1.3;
						},
					},
				},
			},
			tiansuan2_4: {
				name: "下下签",
				trigger: { player: "damageBegin3" },
				forced: true,
				charlotte: true,
				sourceSkill: "tiansuan",
				content: function () {
					trigger.num++;
				},
				mod: {
					cardEnabled: function (card, player) {
						if (card.name == "tao" || card.name == "jiu") return false;
					},
					cardSavable: function (card, player) {
						if (card.name == "tao" || card.name == "jiu") return false;
					},
				},
				mark: true,
				intro: {
					content: "当你受到伤害时，你令此伤害+1。你不能使用【酒】或【桃】。",
				},
				aiCheck: function (target) {
					if (target.hasSkill("tiansuan2_4")) return 0;
					var player = _status.event.player;
					var att = get.attitude(player, target);
					return -att / Math.sqrt(Math.max(1, target.hp));
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && !player.hasSkillTag("jueqing", false, target) && current < 0) return 1.3;
						},
					},
				},
			},
			relieren: {
				audio: 2,
				audioname: ["boss_lvbu3"],
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.card.name == "sha" && player.canCompare(event.target);
				},
				check: function (event, player) {
					return get.attitude(player, event.target) < 0;
				},
				//priority:5,
				content: function () {
					"step 0";
					player.chooseToCompare(trigger.target).clear = false;
					"step 1";
					if (result.bool) {
						if (trigger.target.countGainableCards(player, "he")) player.gainPlayerCard(trigger.target, true, "he");
						ui.clear();
					} else {
						var card1 = result.player;
						var card2 = result.target;
						if (get.position(card1) == "d") trigger.target.gain(card1, "gain2");
						if (get.position(card2) == "d") player.gain(card2, "gain2");
					}
				},
			},
			retiaoxin: {
				audio: "tiaoxin",
				audioname: ["sp_jiangwei", "xiahouba", "re_jiangwei"],
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("he");
				},
				content: function () {
					"step 0";
					target
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "挑衅：对" + get.translation(player) + "使用一张杀，或令其弃置你的一张牌")
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
							return lib.filter.filterTarget.apply(this, arguments);
						})
						.set("sourcex", player);
					"step 1";
					if (result.bool == false && target.countCards("he") > 0) {
						player.discardPlayerCard(target, "he", true);
					} else {
						event.finish();
					}
				},
				ai: {
					order: 4,
					expose: 0.2,
					result: {
						target: -1,
						player: function (player, target) {
							if (!target.canUse("sha", player)) return 0;
							if (target.countCards("h") == 0) return 0;
							if (target.countCards("h") == 1) return -0.1;
							if (player.hp <= 2) return -2;
							if (player.countCards("h", "shan") == 0) return -1;
							return -0.5;
						},
					},
					threaten: 1.1,
				},
			},
			//南华老仙
			yufeng: {
				inherit: "yufeng_old",
				content: function () {
					"step 0";
					if (_status.connectMode) event.time = lib.configOL.choose_timeout;
					event.videoId = lib.status.videoId++;
					var maxScore = Math.max(2, 1 + player.countMark("yufeng"));
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						game.pause();
						game.countChoose();
						setTimeout(function () {
							_status.imchoosing = false;
							var max = Math.max(2, 1 + player.countMark("yufeng"));
							var score = Math.random() < 0.5 ? max : get.rand(1, max);
							event._result = {
								bool: true,
								score: score,
								win: score >= max,
							};
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
							game.resume();
						}, 5000);
					};
					var createDialog = function (player, id) {
						if (_status.connectMode) lib.configOL.choose_timeout = "30";
						if (player == game.me) return;
						var str = get.translation(player) + "正在表演《御风飞行》...<br>";
						ui.create.dialog(str).videoId = id;
					};
					var chooseButton = function (maxScore) {
						lib.skill.yufeng.$playFlappyBird(maxScore);
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId);
					if (event.isMine()) {
						chooseButton(maxScore);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, maxScore);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					game.broadcastAll(
						function (id, time) {
							if (_status.connectMode) lib.configOL.choose_timeout = time;
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
							}
						},
						event.videoId,
						event.time
					);
					var result = event.result || result;
					player.popup(get.cnNumber(result.score) + "分", result.win ? "wood" : "fire");
					game.log(player, "御风飞行", result.win ? "#g成功" : "#y失败");
					game.log(player, "获得了", "#g" + result.score + "分");
					var max = player.countMark("yufeng");
					if (!result.win) {
						if (result.score) player.draw(result.score);
						if (max) player.removeMark("yufeng", max, false);
						event.finish();
					} else {
						if (max < 2) player.addMark("yufeng", 1, false);
						event.score = result.score;
						player
							.chooseTarget("请选择【御风】的目标", [1, result.score], function (card, player, target) {
								return target != player && !target.hasSkill("yufeng2");
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								var att = -get.attitude(player, target),
									attx = att * 2;
								if (att <= 0 || target.hasSkill("xinfu_pdgyingshi")) return 0;
								if (target.hasJudge("lebu")) attx -= att;
								if (target.hasJudge("bingliang")) attx -= att;
								return attx / Math.max(2.25, Math.sqrt(target.countCards("h") + 1));
							});
					}
					"step 2";
					if (result.bool) {
						result.targets.sortBySeat();
						player.line(result.targets, "green");
						game.log(result.targets, "获得了", "#y“御风”", "效果");
						for (var i of result.targets) i.addSkill("yufeng2");
						if (event.score > result.targets.length) player.draw(event.score - result.targets.length);
					} else player.draw(event.score);
				},
				$playFlappyBird: function (maxScore, title) {
					//Forked from: https://github.com/aaarafat/JS-Flappy-Bird

					const event = _status.event;
					const dialog = ui.create.dialog("forcebutton", "hidden");
					dialog.textPrompt = dialog.add('<div class="text center">准备好了吗？</div>');
					dialog.classList.add("fixed");
					dialog.classList.add("scroll1");
					dialog.classList.add("scroll2");
					dialog.classList.add("fullwidth");
					dialog.classList.add("fullheight");
					dialog.classList.add("noupdate");
					const updateText = function (str) {
						dialog.textPrompt.innerHTML = '<div class="text center">' + str + "</div>";
					};

					const canvas = document.createElement("canvas");
					dialog.appendChild(canvas);
					canvas.style.position = "absolute";
					canvas.style.width = "276px";
					canvas.style.height = "414px";
					canvas.style.left = "calc(50% - 141px)";
					canvas.style.top = "calc(50% - 200px)";
					canvas.width = 276;
					canvas.height = 414;
					canvas.style.border = "3px solid";

					const RAD = Math.PI / 180;
					const ctx = canvas.getContext("2d");
					let frames = 0;
					let dx = 0.1;
					let previousDOMHighResTimeStamp = performance.now();
					let deltaTime = 0;
					const state = {
						curr: 0,
						getReady: 0,
						Play: 1,
						gameOver: 2,
						gameSuccess: 3,
					};
					const SFX = {
						start: new Audio(),
						flap: new Audio(),
						score: new Audio(),
						hit: new Audio(),
						die: new Audio(),
						played: false,
					};
					const gnd = {
						sprite: new Image(),
						x: 0,
						y: 0,
						draw: function () {
							this.y = parseFloat(canvas.height - this.sprite.height);
							ctx.drawImage(this.sprite, this.x, this.y);
						},
						update: function () {
							if (state.curr == state.gameOver || state.curr == state.gameSuccess) return;
							this.x -= dx * deltaTime;
							const halfWidth = this.sprite.width / 4;
							if (this.x <= -halfWidth) this.x += halfWidth;
						},
					};
					const bg = {
						sprite: new Image(),
						x: 0,
						y: 0,
						draw: function () {
							let y = parseFloat(canvas.height - this.sprite.height);
							ctx.drawImage(this.sprite, this.x, y);
						},
					};
					const pipe = {
						top: { sprite: new Image() },
						bot: { sprite: new Image() },
						gap: 127,
						moved: true,
						pipes: [],
						numberOfPipes: 1,
						timeElapsed: 0,
						draw: function () {
							for (let i = 0; i < this.pipes.length; i++) {
								let p = this.pipes[i];
								ctx.drawImage(this.top.sprite, p.x, p.y);
								ctx.drawImage(this.bot.sprite, p.x, p.y + parseFloat(this.top.sprite.height) + this.gap);
							}
						},
						update: function () {
							if (state.curr != state.Play) return;
							this.timeElapsed += deltaTime;
							if (this.timeElapsed >= 1600) {
								this.timeElapsed -= 1600;
								this.pipes.push({
									x: parseFloat(canvas.width),
									y: -210 * Math.min(Math.random() * 0.8 + 1.2, 1.8),
								});
							}
							this.pipes.forEach(pipe => {
								pipe.x -= dx * deltaTime;
							});
							if (this.pipes.length && this.pipes[0].x < -this.top.sprite.width) {
								this.pipes.shift();
								this.moved = true;
							}
						},
					};
					const bird = {
						animations: [{ sprite: new Image() }, { sprite: new Image() }, { sprite: new Image() }, { sprite: new Image() }],
						rotatation: 0,
						x: 50,
						y: 100,
						speed: 0,
						gravity: 0.0004,
						thrust: 0.18,
						frame: 0,
						timeElapsed: 0,
						totalTimeElapsed: 0,
						draw: function () {
							let h = this.animations[this.frame].sprite.height;
							let w = this.animations[this.frame].sprite.width;
							ctx.save();
							ctx.translate(this.x, this.y);
							ctx.rotate(this.rotatation * RAD);
							ctx.drawImage(this.animations[this.frame].sprite, -w / 2, -h / 2);
							ctx.restore();
						},
						update: function () {
							this.totalTimeElapsed += deltaTime;
							let r = parseFloat(this.animations[0].sprite.width) / 2;
							switch (state.curr) {
								case state.getReady:
								case state.gameSuccess:
									this.rotatation = 0;
									this.timeElapsed += deltaTime;
									if (this.timeElapsed >= 200) {
										this.timeElapsed -= 200;
										this.y += Math.sin((this.totalTimeElapsed / 10) * RAD);
										this.frame++;
									}
									break;
								case state.Play:
									this.timeElapsed += deltaTime;
									if (this.timeElapsed >= 100) {
										this.timeElapsed -= 100;
										this.frame++;
									}
									this.y += this.speed * deltaTime;
									this.setRotation();
									this.speed += this.gravity * deltaTime;
									if (UI.score.curr >= maxScore) {
										state.curr = state.gameSuccess;
										this.timeElapsed = 0;
										updateText(`${title || "御风飞行"}表演成功！`);
										setTimeout(switchToAuto, 2000);
									} else if (this.y + r >= gnd.y || this.collisioned()) {
										state.curr = state.gameOver;
										this.timeElapsed = 0;
										updateText(`${title || "御风飞行"}表演失败……`);
										setTimeout(switchToAuto, 2000);
									}
									break;
								case state.gameOver:
									this.frame = 1;
									if (this.y + r < gnd.y) {
										this.y += this.speed * deltaTime;
										this.setRotation();
										this.speed += this.gravity * deltaTime;
									} else {
										this.speed = 0;
										this.y = gnd.y - r;
										this.rotatation = 90;
										if (!SFX.played) {
											Promise.resolve(SFX.die.play()).catch(() => void 0);
											SFX.played = true;
										}
									}
									break;
							}
							const animationsLength = this.animations.length;
							if (this.frame >= animationsLength) this.frame -= animationsLength;
						},
						flap: function () {
							if (this.y <= 0) return;
							const flap = SFX.flap;
							flap.currentTime = 0;
							if (flap.paused) Promise.resolve(flap.play()).catch(() => void 0);
							this.speed = -this.thrust;
						},
						setRotation: function () {
							if (this.speed <= 0) {
								this.rotatation = Math.max(-25, (-25 * this.speed) / (-1 * this.thrust));
							} else if (this.speed > 0) {
								this.rotatation = Math.min(90, (90 * this.speed) / (this.thrust * 2));
							}
						},
						collisioned: function () {
							if (!pipe.pipes.length) return;
							let bird = this.animations[0].sprite;
							let x = pipe.pipes[0].x;
							let y = pipe.pipes[0].y;
							let r = bird.height / 4 + bird.width / 4;
							let roof = y + parseFloat(pipe.top.sprite.height);
							let floor = roof + pipe.gap;
							let w = parseFloat(pipe.top.sprite.width);
							if (this.x + r >= x) {
								if (this.x + r < x + w) {
									if (this.y - r <= roof || this.y + r >= floor) {
										Promise.resolve(SFX.hit.play()).catch(() => void 0);
										return true;
									}
								} else if (pipe.moved) {
									updateText(`当前分数：${++UI.score.curr}`);
									const score = SFX.score;
									score.currentTime = 0;
									if (score.paused) Promise.resolve(score.play()).catch(() => void 0);
									pipe.moved = false;
								}
							}
						},
					};
					const UI = {
						getReady: { sprite: new Image() },
						gameOver: { sprite: new Image() },
						gameClear: { sprite: new Image() },
						tap: [{ sprite: new Image() }, { sprite: new Image() }],
						score: {
							curr: 0,
							best: 0,
						},
						x: 0,
						y: 0,
						tx: 0,
						ty: 0,
						frame: 0,
						timeElapsed: 0,
						draw: function () {
							switch (state.curr) {
								case state.getReady:
									this.y = parseFloat(canvas.height - this.getReady.sprite.height) / 2;
									this.x = parseFloat(canvas.width - this.getReady.sprite.width) / 2;
									this.tx = parseFloat(canvas.width - this.tap[0].sprite.width) / 2;
									this.ty = this.y + this.getReady.sprite.height - this.tap[0].sprite.height;
									ctx.drawImage(this.getReady.sprite, this.x, this.y);
									ctx.drawImage(this.tap[this.frame].sprite, this.tx, this.ty);
									break;
								case state.gameOver:
								case state.gameSuccess:
									this.y = parseFloat(canvas.height - this.gameOver.sprite.height) / 2;
									this.x = parseFloat(canvas.width - this.gameOver.sprite.width) / 2;
									this.tx = parseFloat(canvas.width - this.tap[0].sprite.width) / 2;
									this.ty = this.y + this.gameOver.sprite.height - this.tap[0].sprite.height;
									ctx.drawImage((state.curr == state.gameOver ? this.gameOver : this.gameClear).sprite, this.x, this.y);
							}
						},
						update: function () {
							if (state.curr == state.Play) return;
							this.timeElapsed += deltaTime;
							if (this.timeElapsed >= 200) {
								this.timeElapsed -= 200;
								this.frame++;
							}
							const tapLength = this.tap.length;
							if (this.frame >= tapLength) this.frame -= tapLength;
						},
					};
					gnd.sprite.src = lib.assetURL + "image/flappybird/ground.png";
					bg.sprite.src = lib.assetURL + "image/flappybird/BG.png";
					pipe.top.sprite.src = lib.assetURL + "image/flappybird/toppipe.png";
					pipe.bot.sprite.src = lib.assetURL + "image/flappybird/botpipe.png";
					UI.gameOver.sprite.src = lib.assetURL + "image/flappybird/gameover.png";
					UI.gameClear.sprite.src = lib.assetURL + "image/flappybird/gameclear.png";
					UI.getReady.sprite.src = lib.assetURL + "image/flappybird/getready.png";
					UI.tap[0].sprite.src = lib.assetURL + "image/flappybird/tap/t0.png";
					UI.tap[1].sprite.src = lib.assetURL + "image/flappybird/tap/t1.png";
					bird.animations[0].sprite.src = lib.assetURL + "image/flappybird/bird/b0.png";
					bird.animations[1].sprite.src = lib.assetURL + "image/flappybird/bird/b1.png";
					bird.animations[2].sprite.src = lib.assetURL + "image/flappybird/bird/b2.png";
					bird.animations[3].sprite.src = lib.assetURL + "image/flappybird/bird/b0.png";

					SFX.start.src = lib.assetURL + "audio/effect/flappybird_start.wav";
					SFX.flap.src = lib.assetURL + "audio/effect/flappybird_flap.wav";
					SFX.score.src = lib.assetURL + "audio/effect/flappybird_score.wav";
					SFX.hit.src = lib.assetURL + "audio/effect/flappybird_hit.wav";
					SFX.die.src = lib.assetURL + "audio/effect/flappybird_die.wav";

					const gameLoop = domHighResTimeStamp => {
						if (frames < 0) return;
						deltaTime = domHighResTimeStamp - previousDOMHighResTimeStamp;
						previousDOMHighResTimeStamp = domHighResTimeStamp;
						update();
						draw();
						frames++;
						window.requestAnimationFrame(gameLoop);
					};

					const update = function () {
						bird.update();
						gnd.update();
						pipe.update();
						UI.update();
					};

					const draw = function () {
						ctx.fillStyle = "#30c0df";
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						bg.draw();
						pipe.draw();

						bird.draw();
						gnd.draw();
						UI.draw();
					};

					const click = function () {
						switch (state.curr) {
							case state.getReady:
								state.curr = state.Play;
								bird.timeElapsed = 0;
								Promise.resolve(SFX.start.play()).catch(() => void 0);
								updateText(`当前分数：${UI.score.curr}`);
								break;
							case state.Play:
								bird.flap();
						}
					};
					const switchToAuto = function () {
						event._result = {
							bool: true,
							score: UI.score.curr,
							win: UI.score.curr >= maxScore,
						};
						dialog.close();
						game.resume();
						_status.imchoosing = false;
						frames = -1;
						document.removeEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", click);
					};

					dialog.open();
					game.pause();
					game.countChoose();

					document.addEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", click);
					window.requestAnimationFrame(gameLoop);
				},
			},
			yufeng_old: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					if (_status.connectMode) event.time = lib.configOL.choose_timeout;
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						game.pause();
						game.countChoose();
						setTimeout(function () {
							_status.imchoosing = false;
							var max = Math.max(2, 1 + game.me.countMark("yufeng"));
							var score = Math.random() < 0.5 ? max : get.rand(1, max);
							event._result = {
								bool: true,
								score: score,
								win: score >= max,
							};
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
							game.resume();
						}, 5000);
					};
					var createDialog = function (player, id) {
						if (_status.connectMode) lib.configOL.choose_timeout = "30";
						if (player == game.me) return;
						var str = get.translation(player) + "正在表演《御风飞行》...<br>";
						ui.create.dialog(str).videoId = id;
					};
					var chooseButton = function () {
						var roundmenu = false;
						if (ui.roundmenu && ui.roundmenu.display != "none") {
							roundmenu = true;
							ui.roundmenu.style.display = "none";
						}
						var event = _status.event;
						event.settleed = false;
						event.score = 0;
						event.dialog = ui.create.dialog("forcebutton", "hidden");
						event.dialog.textPrompt = event.dialog.add('<div class="text center">准备好了吗？准备好了的话就点击屏幕开始吧！</div>');
						var max = Math.max(2, 1 + game.me.countMark("yufeng"));
						event.dialog.textPrompt.style["z-index"] = 10;
						event.switchToAuto = function () {
							event._result = {
								bool: true,
								score: event.score,
								win: event.score >= max,
							};
							event.dialog.close();
							game.resume();
							_status.imchoosing = false;
							if (roundmenu) ui.roundmenu.style.display = "";
						};
						event.dialog.classList.add("fixed");
						event.dialog.classList.add("scroll1");
						event.dialog.classList.add("scroll2");
						event.dialog.classList.add("fullwidth");
						event.dialog.classList.add("fullheight");
						event.dialog.classList.add("noupdate");
						event.dialog.style.overflow = "hidden";
						event.dialog.open();

						var height = event.dialog.offsetHeight;
						var width = event.dialog.offsetWidth;
						var top = 50;
						var speed = 0;
						var start = false;

						var bird = ui.create.div("");
						bird.style["background-image"] = "linear-gradient(rgba(240, 235, 3, 1), rgba(230, 225, 5, 1))";
						bird.style["border-radius"] = "3px";
						var pipes = [];
						bird.style.position = "absolute";
						bird.style.height = "40px";
						bird.style.width = "40px";
						bird.style.left = Math.ceil(width / 3) + "px";
						bird.style.top = (top / 100) * height + "px";
						bird.updatePosition = function () {
							bird.style.transform = "translateY(" + ((top / 100) * height - bird.offsetTop) + "px)";
						};
						event.dialog.appendChild(bird);
						var isDead = function () {
							if (top > 100 || top < 0) return true;
							var btop = top;
							var bleft = 100 / 3;
							var bdown = btop + 5;
							var bright = bleft + 5;
							for (var i of pipes) {
								var left2 = i.left;
								var right2 = left2 + 10;
								var bottom2 = i.height1;
								var top2 = i.height2;

								if (left2 > bright || right2 < bleft) continue;
								if (btop < bottom2) return true;
								if (bdown > top2) return true;
								return false;
							}
							return false;
						};

						var fly = function () {
							if (!start) {
								start = true;
								event.dialog.textPrompt.innerHTML = '<div class="text center">当前分数：' + event.score + "</div>";
								speed = -4;
								event.fly = setInterval(function () {
									top += speed;
									if (top < 0) top = 0;
									bird.updatePosition();
									for (var i of pipes) {
										i.left -= 0.5;
										i.updateLeft();
									}
									speed += 0.5;
									if (speed > 2.5) speed = 2.5;

									if (isDead() == true) {
										event.settle();
									}
								}, 35);
								var addPipe = function () {
									var num = get.rand(5, 55);

									var pipe1 = ui.create.div("");
									pipe1.style["background-image"] = "linear-gradient(rgba(57, 133, 4, 1), rgba(60, 135, 6, 1))";
									pipe1.style["border-radius"] = "3px";
									pipe1.style.position = "absolute";
									pipe1.height1 = num;
									pipe1.height2 = num + 50;
									pipe1.left = 110;
									pipe1.num = 1;
									pipe1.style.height = Math.ceil((height * num) / 100) + "px";
									pipe1.style.width = width / 10 + "px";
									pipe1.style.left = (pipe1.left * width) / 100 + "px";
									pipe1.style.top = "0px";

									var pipe2 = ui.create.div("");
									pipe2.style["background-image"] = "linear-gradient(rgba(57, 133, 4, 1), rgba(60, 135, 6, 1))";
									pipe2.style["border-radius"] = "3px";
									pipe1.pipe2 = pipe2;
									pipe2.style.position = "absolute";
									pipe2.style.height = Math.ceil(((100 - pipe1.height2) * height) / 100) + "px";
									pipe2.style.width = width / 10 + "px";
									pipe2.style.left = (pipe1.left * width) / 100 + "px";
									pipe2.style.top = Math.ceil((pipe1.height2 * height) / 100) + "px";
									pipes.add(pipe1);
									event.dialog.appendChild(pipe1);
									event.dialog.appendChild(pipe2);
									pipe1.updateLeft = function () {
										this.style.transform = "translateX(" + ((this.left / 100) * width - this.offsetLeft) + "px)";
										this.pipe2.style.transform = "translateX(" + ((this.left / 100) * width - this.pipe2.offsetLeft) + "px)";
										if (this.left < 25 && !this.score) {
											this.score = true;
											event.score++;
											event.dialog.textPrompt.innerHTML = '<div class="text center">当前分数：' + event.score + "</div>";
											if (event.score >= max) {
												event.settle();
											}
										}
										if (this.left < -15) {
											this.remove();
											this.pipe2.remove();
											pipes.remove(this);
										}
									};
								};
								event.addPipe = setInterval(addPipe, 2500);
							} else if (speed > 0) {
								speed = -4;
							}
						};
						document.addEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", fly);

						event.settle = function () {
							clearInterval(event.fly);
							clearInterval(event.addPipe);
							document.removeEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", fly);
							setTimeout(function () {
								event.switchToAuto();
							}, 1000);
						};

						game.pause();
						game.countChoose();
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId);
					if (event.isMine()) {
						chooseButton();
					} else if (event.isOnline()) {
						event.player.send(chooseButton);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					game.broadcastAll(
						function (id, time) {
							if (_status.connectMode) lib.configOL.choose_timeout = time;
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
							}
						},
						event.videoId,
						event.time
					);
					var result = event.result || result;
					player.popup(get.cnNumber(result.score) + "分", result.win ? "wood" : "fire");
					game.log(player, "御风飞行", result.win ? "#g成功" : "#y失败");
					game.log(player, "获得了", "#g" + result.score + "分");
					var max = player.countMark("yufeng");
					if (!result.win) {
						if (result.score) player.draw(result.score);
						if (max) player.removeMark("yufeng", max, false);
						event.finish();
					} else {
						if (max < 2) player.addMark("yufeng", 1, false);
						event.score = result.score;
						player
							.chooseTarget("请选择【御风】的目标", [1, result.score], function (card, player, target) {
								return target != player && !target.hasSkill("yufeng2");
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								var att = -get.attitude(player, target),
									attx = att * 2;
								if (att <= 0 || target.hasSkill("xinfu_pdgyingshi")) return 0;
								if (target.hasJudge("lebu")) attx -= att;
								if (target.hasJudge("bingliang")) attx -= att;
								return attx / Math.max(2.25, Math.sqrt(target.countCards("h") + 1));
							});
					}
					"step 2";
					if (result.bool) {
						result.targets.sortBySeat();
						player.line(result.targets, "green");
						game.log(result.targets, "获得了", "#y“御风”", "效果");
						for (var i of result.targets) i.addSkill("yufeng2");
						if (event.score > result.targets.length) player.draw(event.score - result.targets.length);
					} else player.draw(event.score);
				},
				ai: {
					order: 10,
					result: { player: 1 },
					threaten: 3.2,
				},
			},
			yufeng2: {
				trigger: { player: "phaseZhunbeiBegin" },
				audio: false,
				forced: true,
				charlotte: true,
				sourceSkill: "yufeng",
				content: function () {
					"step 0";
					player.removeSkill("yufeng2");
					player.judge();
					"step 1";
					switch (result.color) {
						case "red":
							player.skip("phaseDraw");
							break;

						case "black":
							player.skip("phaseUse");
							player.skip("phaseDiscard");
							break;

						default:
							break;
					}
				},
				mark: true,
				intro: {
					content: "准备阶段时进行判定，结果为红则跳过摸牌阶段，为黑则跳过出牌阶段和弃牌阶段",
				},
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
			},
			tianshu: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return (
						player.countCards("he") &&
						!game.hasPlayer(function (current) {
							return current.countCards("ej", "taipingyaoshu");
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseCardTarget({
						prompt: get.prompt2("tianshu"),
						filterCard: true,
						position: "he",
						ai1: function (card) {
							return 5 - get.value(card);
						},
						ai2: function (target) {
							var player = _status.event.player;
							if (get.attitude(player, target) > 0 && !target.hasEmptySlot(2)) return 0;
							return get.attitude(player, target);
						},
					});
					"step 1";
					if (!result.bool) {
						event.finish();
						return;
					}
					var target = result.targets[0];
					event.target = target;
					player.logSkill("tianshu", target);
					player.discard(result.cards);
					if (!lib.inpile.includes("taipingyaoshu")) {
						lib.inpile.push("taipingyaoshu");
						event.card = game.createCard2("taipingyaoshu", "heart", 3);
					} else {
						event.card = get.cardPile(function (card) {
							return card.name == "taipingyaoshu";
						});
					}
					if (!event.card) event.finish();
					else target.gain(event.card, "gain2");
					"step 2";
					if (target.getCards("h").includes(card) && get.name(card, target) == "taipingyaoshu") target.chooseUseTarget(card, "nopopup", true);
				},
			},
			//界伏寿
			xinzhuikong: {
				audio: 2,
				trigger: { global: "phaseZhunbeiBegin" },
				check: function (event, player) {
					if (get.attitude(player, event.player) < -2) {
						var cards = player.getCards("h");
						if (cards.length > player.hp) return true;
						for (var i = 0; i < cards.length; i++) {
							var useful = get.useful(cards[i]);
							if (useful < 5) return true;
							if (cards[i].number > 7 && useful < 7) return true;
						}
					}
					return false;
				},
				logTarget: "player",
				filter: function (event, player) {
					return !player.hasSkill("xinzhuikong2") && player.hp <= event.player.hp && player.canCompare(event.player);
				},
				content: function () {
					"step 0";
					player.addTempSkill("xinzhuikong2", "roundStart");
					player.chooseToCompare(trigger.player).set("small", player.hp > 1 && get.effect(player, { name: "sha" }, trigger.player, player) > 0 && Math.random() < 0.9);
					"step 1";
					if (result.bool) {
						trigger.player.addTempSkill("zishou2");
						event.finish();
					} else if (result.target && get.position(result.target) == "d") player.gain(result.target, "gain2", "log");
					"step 2";
					var card = { name: "sha", isCard: true };
					if (trigger.player.canUse(card, player, false)) trigger.player.useCard(card, player, false);
				},
			},
			xinzhuikong2: { charlotte: true },
			xinqiuyuan: {
				audio: 2,
				trigger: { target: "useCardToTarget" },
				direct: true,
				filter: function (event, player) {
					return (
						event.card.name == "sha" &&
						game.hasPlayer(function (current) {
							return current != player && !event.targets.includes(current) && lib.filter.targetEnabled(event.card, event.player, current);
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("xinqiuyuan"), function (card, player, target) {
							var evt = _status.event.getTrigger();
							return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, evt.player, target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, trigger.player, player) + 0.1;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("xinqiuyuan", target);
						event.target = target;
						target
							.chooseCard(
								function (card, player) {
									var name = get.name(card, player);
									return name != "sha" && get.type(name) == "basic";
								},
								"h",
								"交给" + get.translation(player) + "一张不为【杀】的基本牌，或成为此杀的额外目标"
							)
							.set("ai", function (card) {
								return get.attitude(target, _status.event.sourcex) >= 0 ? 1 : -1;
							})
							.set("sourcex", player);
						game.delay();
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						target.give(result.cards, player);
						game.delay();
					} else {
						trigger.getParent().targets.push(event.target);
						trigger.getParent().triggeredTargets2.push(event.target);
						game.log(event.target, "成为了", trigger.card, "的额外目标");
					}
				},
				ai: {
					expose: 0.2,
					effect: {
						target: function (card, player, target) {
							if (card.name != "sha") return;
							var players = game.filterPlayer();
							if (get.attitude(player, target) <= 0) {
								for (var i = 0; i < players.length; i++) {
									var target2 = players[i];
									if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, target) > 0 && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, player) < 0) {
										if (target.hp == target.maxHp) return 0.3;
										return 0.6;
									}
								}
							} else {
								for (var i = 0; i < players.length; i++) {
									var target2 = players[i];
									if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, player) > 0) {
										if (player.canUse(card, target2)) return;
										if (target.hp == target.maxHp) return [0, 1];
										return [0, 0];
									}
								}
							}
						},
					},
				},
			},
			//界潘璋马忠
			xinduodao: {
				audio: 2,
				trigger: { player: "damageEnd" },
				logTarget: "source",
				filter: function (event, player) {
					var source = event.source;
					if (!source) return false;
					var cards = source.getEquips(1);
					return cards.some(card => lib.filter.canBeGained(card, player, source));
				},
				prompt2: function (event, player) {
					var source = event.source;
					var cards = source.getEquips(1).filter(card => lib.filter.canBeGained(card, player, source));
					return "获得其装备区中的" + get.translation(cards);
				},
				check: function (event, player) {
					let es = event.source.getEquips(1).filter(card => {
						return lib.filter.canBeGained(card, player, event.source);
					});
					if (get.attitude(player, event.source) > 0) return es.reduce((acc, card) => {
						return acc + get.value(card, event.source);
					}, 0) < 0 || event.source.hasSkillTag("noe");
					return es.reduce((acc, card) => {
						return acc + get.value(card, player);
					}, 0);
				},
				content: function () {
					var source = trigger.source;
					var cards = source.getEquips(1).filter(card => lib.filter.canBeGained(card, player, source));
					player.gain(cards, source, "give", "bySelf");
				},
			},
			xinanjian: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				forced: true,
				logTarget: "target",
				filter: function (event, player) {
					return event.card.name == "sha" && !player.inRangeOf(event.target);
				},
				content: function () {
					"step 0";
					var card = get.translation(trigger.card);
					var target = get.translation(trigger.target);
					player
						.chooseControl()
						.set("prompt", "暗箭：请选择一项")
						.set("choiceList", ["令" + target + "不能响应" + card, "令" + card + "对" + target + "的伤害值基数+1"])
						.set("ai", function () {
							var target = _status.event.getTrigger().target;
							var player = _status.event.player;
							var num = target.mayHaveShan(
								player,
								"use",
								target.getCards("h", i => {
									return i.hasGaintag("sha_notshan");
								})
							)
								? 0
								: 1;
							if (get.attitude(player, target) > 0) num = 1 - num;
							return num;
						});
					"step 1";
					if (result.index == 0) {
						game.log(player, "令", trigger.card, "不能被", trigger.target, "响应");
						trigger.directHit.push(trigger.target);
					} else {
						game.log(player, "令", trigger.card, "对", trigger.target, "的伤害+1");
						var id = trigger.target.playerid;
						var map = trigger.customArgs;
						if (!map[id]) map[id] = {};
						if (!map[id].extraDamage) map[id].extraDamage = 0;
						map[id].extraDamage++;
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (!arg || !arg.card || !arg.target || arg.card.name != "sha" || arg.target.inRange(player) || get.attitude(player, arg.target) > 0) return false;
					},
				},
			},
			//界郭笨
			mobilejingce: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				filter: function (event, player) {
					var num = 0;
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name != "cardsDiscard") return;
						var evtx = evt.getParent();
						if (evtx.name != "orderingDiscard") return false;
						var evt2 = evtx.relatedEvent || evtx.getParent();
						if (evt2 && (evt2.name == "useCard" || evt2.name == "respond")) num += evt.cards.length;
					});
					return num >= player.hp;
				},
				content: function () {
					player.draw(2);
				},
				group: "mobilejingce_count",
				intro: {
					content: function (num, player) {
						if (num == 0) return "一张都没有？就这？";
						if (num < player.hp) return "才" + get.cnNumber(num) + "张？就这？";
						return "卧槽，牛逼啊，居然" + get.cnNumber(num) + "张了！";
					},
				},
			},
			mobilejingce_count: {
				trigger: {
					global: ["cardsDiscardEnd", "phaseBefore"],
					player: "phaseAfter",
				},
				silent: true,
				firstDo: true,
				sourceSkill: "mobilejingce",
				filter: function (evt, player) {
					if (evt.name == "phase") return true;
					if (player != _status.currentPhase) return false;
					var evtx = evt.getParent();
					if (evtx.name != "orderingDiscard") return false;
					var evt2 = evtx.relatedEvent || evtx.getParent();
					return evt2 && (evt2.name == "useCard" || evt2.name == "respond");
				},
				content: function () {
					if (trigger.name == "phase") player.unmarkSkill("mobilejingce");
					else {
						var num = 0;
						game.getGlobalHistory("cardMove", function (evt) {
							if (evt.name != "cardsDiscard") return;
							var evtx = evt.getParent();
							if (evtx.name != "orderingDiscard") return false;
							var evt2 = evtx.relatedEvent || evtx.getParent();
							if (evt2 && (evt2.name == "useCard" || evt2.name == "respond")) num += evt.cards.length;
						});
						player.storage.mobilejingce = num;
						player.markSkill("mobilejingce");
					}
				},
			},
			//公孙康
			juliao: {
				mod: {
					globalTo: function (from, to, distance) {
						return distance + game.countGroup() - 1;
					},
				},
			},
			taomie: {
				audio: 3,
				group: ["taomie1", "taomie2", "taomie3"],
				trigger: { source: "damageBegin1" },
				forced: true,
				locked: false,
				direct: true,
				filter: function (event, player) {
					return event.player.hasMark("taomie");
				},
				content: function () {
					"step 0";
					player.logSkill(Math.random() < 0.5 ? "taomie2" : "taomie3", trigger.player);
					var target = get.translation(trigger.player);
					player
						.chooseControl()
						.set("prompt", "讨灭：请选择一项")
						.set("choiceList", ["令即将对" + target + "造成的伤害+1", "获得" + target + "的一张牌，并可将其交给另一名其他角色", "依次执行以上所有选项，并移去" + target + "的“讨灭”标记"])
						.set("ai", function () {
							var evt = _status.event.getTrigger();
							var player = _status.event.player;
							var target = evt.player;
							var bool1 = !target.hasSkillTag("filterDamage", null, {
								player: player,
								card: evt.card,
							});
							var bool2 = get.effect(target, { name: "shunshou" }, player, player) > 0;
							if (bool1 && bool2 && target.hp <= evt.num + 1) return 2;
							if (bool1) return 0;
							return 1;
						});
					"step 1";
					if (result.index == 2) {
						trigger.taomie_player = trigger.player;
						trigger.player.addTempSkill("taomie4");
					}
					if (result.index != 1) {
						trigger.num++;
					}
					if (result.index != 0 && trigger.player.countGainableCards(player, "hej") > 0) {
						player.gainPlayerCard(trigger.player, "hej", true);
					} else event.finish();
					"step 2";
					var card = result.cards[0];
					if (
						card &&
						player.getCards("h").includes(card) &&
						game.hasPlayer(function (current) {
							return current != player && current != trigger.player;
						})
					) {
						event.card = card;
						player
							.chooseTarget("是否将" + get.translation(card) + "交给一名其他角色？", function (card, player, target) {
								return target != player && target != _status.event.getTrigger().player;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								var card = _status.event.getParent().card;
								if (target.hasSkillTag("nogain") || !player.needsToDiscard() || (get.tag(card, "damage") && player.hasValueTarget(card, null, false) && get.effect(_status.event.getTrigger().player, card, null, false) > 0)) return 0;
								return get.attitude(player, target) / (1 + target.countCards("h"));
							});
					} else event.finish();
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						player.give(card, target);
					}
				},
				mod: {
					inRangeOf: function (from, to) {
						if (from.hasMark("taomie")) return true;
					},
					inRange: function (from, to) {
						if (to.hasMark("taomie")) return true;
					},
				},
				intro: {
					content: "mark",
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (target && get.tag(card, "damage") && target.hasMark("taomie")) {
								if (player.hasSkillTag("jueqing", false, target)) return;
								if (get.attitude(player, target) > 0) {
									return 0.7;
								}
								return 1.2;
							}
						},
					},
				},
			},
			taomie1: {
				audio: true,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				sourceSkill: "taomie",
				logTarget: function (trigger, player) {
					if (player == trigger.player) return trigger.source;
					return trigger.player;
				},
				filter: function (event, player) {
					var target = lib.skill.taomie1.logTarget(event, player);
					return target && target.isIn() && !target.hasMark("taomie");
				},
				check: function (event, player) {
					var target = lib.skill.taomie1.logTarget(event, player);
					if (get.attitude(player, target) > 0) return false;
					var target0 = game.findPlayer(function (current) {
						return current.hasMark("taomie");
					});
					if (!target0) return true;
					var eff1 = 0,
						eff2 = 0;
					player.countCards("h", function (card) {
						if (!get.tag(card, "damage")) return false;
						if (player.hasValueTarget(card, null, true) > 0) {
							if (player.canUse(card, target, null, true)) {
								var eff = get.effect(target, card, player, player);
								if (eff > 0) eff1 += eff;
							}
							if (player.canUse(card, target0, null, true)) {
								var eff = get.effect(target0, card, player, player);
								if (eff > 0) eff2 += eff;
							}
						}
					});
					return eff1 > eff2;
				},
				prompt2: function (event, player) {
					var target = lib.skill.taomie1.logTarget(event, player);
					var str = "令" + get.translation(target) + "获得“讨灭”标记";
					if (
						game.hasPlayer(function (current) {
							return current.hasMark("taomie");
						})
					)
						str += "，并移去场上已有的“讨灭”标记";
					return str;
				},
				content: function () {
					game.countPlayer(function (current) {
						var num = current.countMark("taomie");
						if (num) current.removeMark("taomie");
					});
					lib.skill.taomie1.logTarget(trigger, player).addMark("taomie", 1);
				},
			},
			taomie2: { audio: true },
			taomie3: { audio: true },
			taomie4: {
				trigger: {
					global: ["damageAfter", "damageCancelled", "damageZero"],
					player: "dieBegin",
				},
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "taomie",
				filter: function (event, player) {
					return player.hasMark("taomie") && (event.name == "die" || event.taomie_player == player);
				},
				content: function () {
					player.removeMark("taomie", player.countMark("taomie"));
					player.removeSkill("taomie2");
				},
			},
			//铁骑飞
			liyong: {
				audio: "retishen",
				trigger: { player: "shaMiss" },
				forced: true,
				filter: function (event, player) {
					return player.isPhaseUsing();
				},
				content: function () {
					trigger.getParent().liyong = true;
					player.addTempSkill("liyong2", "phaseUseEnd");
				},
			},
			liyong2: {
				audio: "retishen",
				mark: true,
				intro: {
					content: "铁骑！强命！加伤！然后掉血嘞…",
				},
				trigger: { player: "useCardToPlayered" },
				forced: true,
				sourceSkill: "liyong",
				filter: function (event, player) {
					if (!event.card || event.card.name != "sha") return false;
					var evt = event.getParent();
					if (evt.liyong) return false;
					var history = player.getHistory("useCard", function (evt) {
						return evt.card.name == "sha";
					});
					var evt2 = history[history.indexOf(evt) - 1];
					return evt2 && evt2.liyong;
				},
				logTarget: "target",
				content: function () {
					var target = trigger.target;
					target.addTempSkill("fengyin");
					trigger.directHit.add(target);
					var id = target.playerid;
					var map = trigger.customArgs;
					if (!map[id]) map[id] = {};
					if (!map[id].extraDamage) map[id].extraDamage = 0;
					map[id].extraDamage++;
					trigger.getParent().liyong2 = true;
				},
				group: ["liyong3", "liyong4"],
			},
			liyong3: {
				trigger: { source: "damageSource" },
				forced: true,
				popup: false,
				sourceSkill: "liyong",
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && event.player.isIn() && event.getParent(2).liyong2 == true;
				},
				content: function () {
					player.loseHp();
				},
			},
			liyong4: {
				trigger: { player: "useCardAfter" },
				forced: true,
				silent: true,
				sourceSkill: "liyong",
				filter: function (evt, player) {
					if (!evt.card || evt.card.name != "sha") return false;
					if (evt.liyong) return false;
					var history = player.getHistory("useCard", function (evt) {
						return evt.card.name == "sha";
					});
					var evt2 = history[history.indexOf(evt) - 1];
					return evt2 && evt2.liyong;
				},
				content: function () {
					player.removeSkill("liyong2");
				},
			},
			//韩遂
			xinniluan: {
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player != event.player &&
						event.player.isIn() &&
						event.player.getHistory("useCard", function (evt) {
							if (evt.targets && evt.targets.length) {
								var targets = evt.targets.slice(0);
								while (targets.includes(event.player)) targets.remove(event.player);
								return targets.length > 0;
							}
							return false;
						}).length > 0 &&
						(_status.connectMode || player.hasSha())
					);
				},
				content: function () {
					"step 0";
					player.chooseToUse({
						logSkill: "xinniluan",
						preTarget: trigger.player,
						prompt: "是否发动【逆乱】，对" + get.translation(trigger.player) + "使用一张【杀】？",
						filterCard: function (card, player) {
							return get.name(card) == "sha" && lib.filter.filterCard.apply(this, arguments);
						},
						filterTarget: function (card, player, target) {
							return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
						},
						addCount: false,
					});
					"step 1";
					if (
						result.bool &&
						player.getHistory("sourceDamage", function (evt) {
							return evt.getParent(4) == event;
						}).length &&
						trigger.player.countDiscardableCards(player, "he") > 0
					)
						player.discardPlayerCard(trigger.player, true, "he").boolline = true;
				},
			},
			xiaoxi_hansui: {
				audio: 2,
				enable: ["chooseToRespond", "chooseToUse"],
				filterCard: function (card, player) {
					return get.color(card) == "black";
				},
				position: "hse",
				viewAs: { name: "sha" },
				viewAsFilter: function (player) {
					if (!player.countCards("hse", { color: "black" })) return false;
				},
				prompt: "将一张黑色牌当杀使用或打出",
				check: function (card) {
					return 4.5 - get.value(card);
				},
				ai: {
					skillTagFilter: function (player) {
						if (!player.countCards("hes", { color: "black" })) return false;
					},
					respondSha: true,
				},
			},
			//胡车儿
			daoji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return (
						player.countCards("he", function (card) {
							return get.type(card) != "basic";
						}) &&
						game.hasPlayer(function (target) {
							return target != player && target.countCards("e") > 0;
						})
					);
				},
				filterCard: function (card) {
					return get.type(card) != "basic";
				},
				position: "he",
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("e") > 0;
				},
				check: function (card) {
					var player = _status.event.player;
					if (
						game.hasPlayer(function (current) {
							return current != player && get.attitude(player, current) < 0 && get.damageEffect(current, player, player) > 0 && current.getEquip(1);
						})
					)
						return 8 - get.value(card);
					return 5 - get.value(card);
				},
				content: function () {
					"step 0";
					player.gainPlayerCard(target, "e", true).set("ai", function (button) {
						var card = button.link;
						var player = _status.event.player;
						if (get.subtype(card) == "equip1" && get.damageEffect(_status.event.target, player, player) > 0) return 6 + get.value(card);
						return get.value(card);
					});
					"step 1";
					if (!result || !result.bool || !result.cards || !result.cards.length) {
						event.finish();
						return;
					}
					var card = result.cards[0];
					event.card = card;
					if (player.getCards("h").includes(card) && get.type(card) == "equip") player.chooseUseTarget(card, true).nopopup = true;
					"step 2";
					if (get.subtype(card, false) == "equip1") target.damage();
				},
				ai: {
					order: 6,
					result: {
						target: function (player, current) {
							if (get.damageEffect(current, player, player) > 0 && current.getEquip(1)) return -1.5;
							return -1;
						},
					},
				},
			},
			//司马师夫妇
			//垃圾
			baiyi: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				selectTarget: 2,
				limited: true,
				skillAnimation: false,
				//animationColor:'thunder',
				filter: function (event, player) {
					return player.isDamaged() && game.players.length > 2;
				},
				multitarget: true,
				multiline: true,
				changeSeat: true,
				seatRelated: true,
				contentBefore: function () {
					player.$fullscreenpop("败移", "thunder");
				},
				content: function () {
					player.awakenSkill("baiyi");
					game.broadcastAll(
						function (target1, target2) {
							game.swapSeat(target1, target2);
						},
						targets[0],
						targets[1]
					);
				},
				ai: {
					order: function () {
						return get.order({ name: "tao" }) + 1;
					},
					result: {
						target: function (player, target) {
							if (player.hasUnknown() && target != player.next && target != player.previous) return 0;
							var distance = Math.pow(get.distance(player, target, "absolute"), 2);
							if (!ui.selected.targets.length) return distance;
							var distance2 = Math.pow(get.distance(player, ui.selected.targets[0], "absolute"), 2);
							return Math.min(0, distance - distance2);
						},
					},
				},
			},
			jinglve: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					if (player.hasSkill("jinglve2")) return false;
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("h") > 0;
					});
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					if (!player.storage.jinglve4) player.storage.jinglve4 = [];
					player.storage.jinglve4.add(target);
					player.chooseButton(["选择一张牌作为「死士」", target.getCards("h")], true).set("ai", function (button) {
						var target = _status.event.getParent().target;
						var card = button.link;
						var val = target.getUseValue(card);
						if (val > 0) return val;
						return get.value(card);
					});
					"step 1";
					if (result.bool) {
						player.storage.jinglve2 = target;
						player.storage.jinglve3 = result.links[0];
						player.addSkill("jinglve2");
					}
				},
				ai: {
					order: 12,
					result: {
						target: -1,
					},
				},
			},
			jinglve2: {
				mark: true,
				intro: {
					name: "死士",
					mark: function (dialog, content, player) {
						dialog.addText("记录目标");
						dialog.add([content]);
						if (player == game.me || player.isUnderControl()) {
							dialog.addText("死士牌");
							dialog.add([player.storage.jinglve3]);
						}
					},
				},
				sourceSkill: "jinglve",
				onremove: function (player) {
					delete player.storage.jinglve2;
					delete player.storage.jinglve3;
				},
				trigger: { global: ["dieEnd", "loseEnd", "gainEnd"] },
				silent: true,
				lastDo: true,
				charlotte: true,
				filter: function (event, player) {
					if (event.name != "gain" && event.player != player.storage.jinglve2) return false;
					return event.name == "die" || (event.cards.includes(player.storage.jinglve3) && (event.name == "gain" || (event.position != ui.ordering && event.position != ui.discardPile)));
				},
				content: function () {
					player.removeSkill("jinglve2");
				},
				group: "jinglve3",
			},
			jinglve3: {
				audio: "jinglve",
				trigger: {
					global: ["loseAfter", "useCard", "phaseAfter", "cardsDiscardAfter", "loseAsyncAfter"],
				},
				sourceSkill: "jinglve",
				filter: function (event, player) {
					if (event.player && event.player != player.storage.jinglve2) return false;
					var card = player.storage.jinglve3;
					if (event.name == "phase") return event.player.getCards("hej").includes(card);
					if (event.name == "useCard") return event.cards.includes(card);
					return get.position(card, true) == "d" && event.getd().includes(card);
				},
				forced: true,
				charlotte: true,
				logTarget: "player",
				content: function () {
					if (trigger.name == "useCard") {
						trigger.all_excluded = true;
						trigger.targets.length = 0;
					} else {
						if (trigger.name == "phase") {
							player.gain(player.storage.jinglve3, trigger.player, "giveAuto", "bySelf");
						} else if (get.position(player.storage.jinglve3, true) == "d") player.gain(player.storage.jinglve3, "gain2");
					}
					player.removeSkill("jinglve2");
				},
			},
			shanli: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				juexingji: true,
				forced: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return player.storage.baiyi && player.getStorage("jinglve4").length > 1;
				},
				content: function () {
					"step 0";
					player.awakenSkill("shanli");
					player.loseMaxHp();
					player.chooseTarget(true, "选择【擅立】的目标").set("ai", function (target) {
						var att = get.attitude(_status.event.player, target);
						if (target == game.me || (target.isUnderControl() && target.isOnline())) return 2 * att;
						return att;
					});
					"step 1";
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					game.log(player, "拥立", target);
					var list = [];
					if (!_status.characterlist) {
						if (_status.connectMode) var list = get.charactersOL();
						else {
							var list = [];
							for (var i in lib.character) {
								if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
								list.push(i);
							}
						}
						game.countPlayer2(function (current) {
							list.remove(current.name);
							list.remove(current.name1);
							list.remove(current.name2);
							if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character);
						});
						_status.characterlist = list;
					}
					_status.characterlist.randomSort();
					var chara = [];
					var skills = [];
					for (var i of _status.characterlist) {
						if (i == "key_yuri") continue;
						var character = lib.character[i];
						if (character && character[3]) {
							for (var j of character[3]) {
								if (skills.includes(j) || j == "yuri_wangxi" || target.hasSkill(j)) continue;
								var info = get.info(j);
								if (info && info.zhuSkill) {
									skills.add(j);
									chara.add(i);
									continue;
								}
							}
						}
						if (skills.length >= 3) break;
					}
					if (!skills.length) {
						event.finish();
						return;
					}
					event.chara = chara;
					event.skills = skills;
					player.chooseControl(skills).set("dialog", ["选择令" + get.translation(target) + "获得一个技能", [chara, "character"]]);
					"step 2";
					target.addSkills(result.control);
					target.setAvatarQueue(target.name1 || target.name, [event.chara[event.skills.indexOf(result.control)]]);
				},
				ai: {
					combo: "baiyi",
				},
			},
			hongyi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				//filter:function(event,player){
				//	return player.countCards('he')>=Math.min(2,game.dead.length);
				//},
				//selectCard:function(){
				//	return Math.min(2,game.dead.length);
				//},
				//filterCard:true,
				filterTarget: lib.filter.notMe,
				check: function (card) {
					var num = Math.min(2, game.dead.length);
					if (!num) return 1;
					if (num == 1) return 7 - get.value(card);
					return 5 - get.value(card);
				},
				position: "he",
				content: function () {
					player.addTempSkill("hongyi2", { player: "phaseBeginStart" });
					player.storage.hongyi2.add(target);
					player.markSkill("hongyi2");
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (target.hasJudge("lebu")) return -0.5;
							return -1 - target.countCards("h");
						},
					},
				},
			},
			hongyi2: {
				audio: "hongyi",
				trigger: { global: "damageBegin1" },
				charlotte: true,
				forced: true,
				logTarget: "source",
				sourceSkill: "hongyi",
				filter: function (event, player) {
					return player.storage.hongyi2.includes(event.source);
				},
				content: function () {
					"step 0";
					trigger.source.judge();
					"step 1";
					if (result.color == "black") trigger.num--;
					else trigger.player.draw();
				},
				onremove: true,
				intro: {
					content: "已选中$为技能目标",
				},
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
			},
			requanfeng: {
				audio: "quanfeng",
				enable: "chooseToUse",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return event.type == "dying" && player == event.dying;
				},
				content: function () {
					player.awakenSkill("requanfeng");
					player.gainMaxHp(2);
					player.recover(4);
				},
				ai: {
					save: true,
					skillTagFilter: function (player, tag, arg) {
						return player == arg;
					},
					order: 10,
					result: {
						player: 1,
					},
				},
				group: "requanfeng_gain",
			},
			requanfeng_gain: {
				audio: "quanfeng",
				trigger: { global: "die" },
				sourceSkill: "requanfeng",
				filter: function (event, player) {
					return (
						player.hasSkill("hongyi") &&
						event.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
							var info = get.info(skill);
							return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
						}).length > 0
					);
				},
				logTarget: "player",
				skillAnimation: true,
				animationColor: "thunder",
				prompt2: "（限定技）失去技能【劝封】，并获得该角色武将牌上的所有技能，然后加1点体力上限并回复1点体力",
				check: (event, player) => {
					if (
						event.player
							.getStockSkills("仲村由理", "天下第一")
							.filter(skill => {
								let info = get.info(skill);
								return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
							})
							.some(i => {
								let info = get.info(i);
								if (info && info.ai) return info.ai.neg || info.ai.halfneg;
							})
					)
						return false;
					return true;
				},
				content: function () {
					player.awakenSkill("requanfeng");
					player.removeSkills("hongyi");
					var skills = trigger.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
						var info = get.info(skill);
						return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
					});
					if (skills.length) {
						player.addSkills(skills);
						game.broadcastAll(function (list) {
							game.expandSkills(list);
							for (var i of list) {
								var info = lib.skill[i];
								if (!info) continue;
								if (!info.audioname2) info.audioname2 = {};
								info.audioname2.yanghuiyu = "quanfeng";
							}
						}, skills);
					}
					player.gainMaxHp();
					player.recover();
				},
			},
			quanfeng: {
				audio: 2,
				trigger: { global: "die" },
				filter: function (event, player) {
					return (
						event.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
							var info = get.info(skill);
							return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
						}).length > 0
					);
				},
				logTarget: "player",
				skillAnimation: true,
				limited: true,
				forced: true,
				animationColor: "thunder",
				content: function () {
					"step 0";
					player.awakenSkill("quanfeng");
					var list = trigger.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
						var info = get.info(skill);
						return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
					});
					if (list.length == 1) event._result = { control: list[0] };
					else
						player
							.chooseControl(list)
							.set("prompt", "选择获得" + get.translation(trigger.player) + "的一个技能")
							.set("forceDie", true)
							.set("ai", function () {
								return list.randomGet();
							});
					"step 1";
					player.addSkills(result.control);
					game.broadcastAll(function (skill) {
						var list = [skill];
						game.expandSkills(list);
						for (var i of list) {
							var info = lib.skill[i];
							if (!info) continue;
							if (!info.audioname2) info.audioname2 = {};
							info.audioname2.yanghuiyu = "quanfeng";
						}
					}, result.control);
					player.gainMaxHp();
					player.recover();
				},
			},
			//手杀界朱然
			//设计师你改技能有瘾🐴
			mobiledanshou: {
				trigger: { global: "phaseJieshuBegin" },
				audio: 2,
				direct: true,
				filter: function (event, player) {
					if (player == event.player) return false;
					var num = event.player.getHistory("useCard", function (evt) {
						return evt.targets.includes(player);
					}).length;
					return num == 0 || (event.player.isIn() && num <= player.countCards("he"));
				},
				content: function () {
					"step 0";
					var num = trigger.player.getHistory("useCard", function (evt) {
						return evt.targets.includes(player);
					}).length;
					event.num = num;
					if (num == 0) {
						if (player.hasSkill("mobiledanshou")) event._result = { bool: true };
						else player.chooseBool("是否发动【胆守】摸一张牌？", lib.translate.mobiledanshou_info);
					} else event.goto(2);
					"step 1";
					if (result.bool) {
						player.logSkill("mobiledanshou");
						player.draw();
					}
					event.finish();
					"step 2";
					player
						.chooseToDiscard(num, get.prompt("mobiledanshou", trigger.player), "弃置" + get.translation(num) + "张牌并对其造成1点伤害", "he")
						.set("ai", function (card) {
							if (!_status.event.goon) return 0;
							var num = _status.event.getParent().num;
							if (num == 1) return 8 - get.value(card);
							if (num == 2) return 6.5 - get.value(card);
							return 5 - get.value(card);
						})
						.set("goon", get.damageEffect(trigger.player, player, player) > 0).logSkill = ["mobiledanshou", trigger.player];
					"step 3";
					if (result.bool) {
						player.addExpose(0.2);
						trigger.player.damage();
					}
				},
			},
			//丁原
			//程序员和设计师至少有一个脑子有坑
			beizhu: {
				audio: 3,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return lib.skill.beizhu.filterTarget(null, player, target);
					});
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				logAudio: () => 2,
				content: function () {
					"step 0";
					player.addTempSkill("beizhu_draw");
					player.viewHandcards(target);
					"step 1";
					var cards = target.getCards("h", "sha");
					if (cards.length) {
						event.cards = cards;
						event.goto(5);
					} else player.discardPlayerCard("he", target, "visible", true);
					"step 2";
					player.chooseBool("是否令" + get.translation(target) + "获得一张【杀】？").set("choice", get.attitude(player, target) > 0);
					"step 3";
					if (result.bool) {
						var card = get.cardPile2(function (card) {
							return card.name == "sha";
						});
						if (card) target.gain(card, "gain2");
					} else event.finish();
					"step 4";
					game.updateRoundNumber();
					event.finish();
					"step 5";
					var hs = target.getCards("h");
					cards = cards.filter(function (card) {
						return (
							hs.includes(card) &&
							get.name(card, target) == "sha" &&
							target.canUse(
								{
									name: "sha",
									isCard: true,
									cards: [card],
								},
								player,
								false
							)
						);
					});
					if (cards.length) {
						var card = cards.randomRemove(1)[0];
						target.useCard(player, false, card).card.beizhu = true;
						event.redo();
					}
				},
				ai: {
					order: 7,
					threaten: 1.14 + 5.14,
					result: {
						player: function (player, target) {
							var eff = get.effect(target, { name: "guohe_copy2" }, player, player);
							var cards = target.getCards("h", { name: "sha" });
							if (!cards.length) return eff;
							return eff / (cards.length + 3);
						},
					},
				},
			},
			beizhu_draw: {
				charlotte: true,
				audio: "beizhu3.mp3",
				trigger: { player: "damageEnd" },
				sourceSkill: "beizhu",
				filter: function (event, player) {
					return event.card && event.card.beizhu;
				},
				forced: true,
				content: function () {
					player.draw(trigger.num);
				},
			},
			//新简雍
			xinqiaoshui: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) player.addTempSkill("xinqiaoshui_target", "phaseUseEnd");
					else {
						player.addTempSkill("qiaoshui2", "phaseUseEnd");
					}
				},
				subSkill: {
					target: {
						audio: "xinqiaoshui",
						inherit: "qiaoshui3",
						sourceSkill: "xinqiaoshui",
					},
				},
				ai: {
					order: function (item, player) {
						if (
							player.countCards("h", function (card) {
								return player.hasValueTarget(card);
							})
						)
							return 10;
						return 1;
					},
					result: {
						target: function (player, target) {
							if (
								player.countCards("h", function (card) {
									return player.hasValueTarget(card);
								})
							) {
								if (player.hasSkill("xinqiaoshui_target")) return 0;
								var nd = !player.needsToDiscard();
								if (
									player.hasCard(function (card) {
										if (get.position(card) != "h") return false;
										var val = get.value(card);
										if (nd && val < 0) return true;
										if (val <= 5) {
											return card.number >= 12;
										}
										if (val <= 6) {
											return card.number >= 13;
										}
										return false;
									})
								)
									return -1;
								return 0;
							}
							return -1;
						},
					},
				},
			},
			xinjyzongshi: {
				audio: 2,
				trigger: {
					player: ["chooseToCompareAfter", "compareMultipleAfter"],
					target: ["chooseToCompareAfter", "compareMultipleAfter"],
				},
				filter: function (event, player) {
					if (event.preserve) return false;
					if (event.name == "compareMultiple") return true;
					return !event.compareMultiple;
				},
				frequent: true,
				content: function () {
					"step 0";
					var str = '<div class="text center">牌堆顶';
					var cards = get.cards();
					if (trigger.name == "chooseToCompare" && trigger.compareMeanwhile) {
						var result = trigger.result;
						var list = [[result.num1[0], result.player]];
						list.addArray(
							result.num2.map(function (card, i) {
								return [card, result.targets[i]];
							})
						);
						list.sort(function (a, b) {
							return a[0] - b[0];
						});
						if (list[0][0] < list[1][0] && get.position(list[0][1], true) == "o") {
							str += "/拼点牌";
							cards.push(list[0][1]);
						}
					} else {
						if (player == trigger.player) {
							if (trigger.num1 > trigger.num2 && get.position(trigger.card2, true) == "o") {
								str += "/拼点牌";
								cards.push(trigger.card2);
							} else if (trigger.num1 < trigger.num2 && get.position(trigger.card1, true) == "o") {
								str += "/拼点牌";
								cards.push(trigger.card1);
							}
						} else {
							if (trigger.num1 < trigger.num2 && get.position(trigger.card1, true) == "o") {
								str += "/拼点牌";
								cards.push(trigger.card1);
							} else if (trigger.num1 > trigger.num2 && get.position(trigger.card2, true) == "o") {
								str += "/拼点牌";
								cards.push(trigger.card2);
							}
						}
					}
					str += "</div>";
					event.cards = cards;
					player.chooseButton(["纵适：选择要获得的牌", str, cards]).set("ai", get.buttonValue);
					"step 1";
					if (result.bool) {
						var draw = result.links[0] == cards[0];
						player.gain(result.links, draw ? "draw" : "gain2").log = false;
						game.log(player, "获得了", draw ? "牌堆顶的一张牌" : result.links);
						if (!draw) {
							cards[0].fix();
							ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
							game.updateRoundNumber();
						}
					}
				},
			},
			//通渠张恭
			rezhenxing: {
				audio: "xinfu_zhenxing",
				trigger: {
					player: ["damageEnd", "phaseJieshuBegin"],
				},
				frequent: true,
				content: function () {
					"step 0";
					event.cards = get.cards(3);
					player
						.chooseButton(["【镇行】：请选择要获得的牌", event.cards])
						.set("filterButton", function (button) {
							var cards = _status.event.cards;
							for (var i = 0; i < cards.length; i++) {
								if (button.link != cards[i] && get.suit(cards[i]) == get.suit(button.link)) return false;
							}
							return true;
						})
						.set("ai", function (button) {
							return get.value(button.link);
						})
						.set("cards", event.cards);
					"step 1";
					for (var i = event.cards.length - 1; i >= 0; i--) {
						if (result.bool && result.links.includes(event.cards[i])) {
							player.gain(event.cards[i], "gain2");
						} else {
							event.cards[i].fix();
							ui.cardPile.insertBefore(event.cards[i], ui.cardPile.childNodes[0]);
						}
					}
					game.updateRoundNumber();
				},
			},
			//芙蓉，手杀界廖化，手杀界曹彰
			rejiangchi: {
				audio: 2,
				trigger: {
					player: "phaseUseBegin",
				},
				direct: true,
				content: function () {
					"step 0";
					var list = ["弃牌", "摸牌", "取消"];
					if (!player.countCards("he")) list.remove("弃牌");
					player
						.chooseControl(list, function () {
							var player = _status.event.player;
							if (list.includes("弃牌")) {
								if (player.countCards("h") > 3 && player.countCards("h", "sha") > 1) {
									return "弃牌";
								}
								if (player.countCards("h", "sha") > 2) {
									return "弃牌";
								}
							}
							if (!player.countCards("h", "sha")) {
								return "摸牌";
							}
							return "cancel2";
						})
						.set("prompt", get.prompt2("rejiangchi"));
					"step 1";
					if (result.control == "弃牌") {
						player.chooseToDiscard(true, "he");
						player.addTempSkill("jiangchi2", "phaseUseEnd");
						player.logSkill("rejiangchi");
					} else if (result.control == "摸牌") {
						player.draw();
						player.addTempSkill("rejiangchi3", "phaseUseEnd");
						player.logSkill("rejiangchi");
					}
				},
			},
			rejiangchi3: {
				mod: {
					cardEnabled: function (card) {
						if (card.name == "sha") return false;
					},
				},
			},
			refuli: {
				skillAnimation: true,
				animationColor: "soil",
				audio: 2,
				unique: true,
				limited: true,
				enable: "chooseToUse",
				mark: true,
				filter: function (event, player) {
					if (event.type != "dying") return false;
					if (player != event.dying) return false;
					return true;
				},
				content: function () {
					"step 0";
					player.awakenSkill("refuli");
					event.num = game.countGroup();
					if (event.num > player.hp) player.recover(event.num - player.hp);
					"step 1";
					if (player.isMaxHp(true)) player.turnOver();
				},
				ai: {
					save: true,
					skillTagFilter: function (player, arg, target) {
						return player == target;
					},
					result: {
						player: 10,
					},
					threaten: function (player, target) {
						if (!target.storage.refuli) return 0.9;
					},
				},
			},
			redangxian: {
				trigger: { player: "phaseBegin" },
				forced: true,
				audio: "dangxian",
				audioname: ["xin_liaohua"],
				audioname2: {
					guansuo: "dangxian_guansuo",
				},
				content: function () {
					"step 0";
					var card = get.discardPile(function (card) {
						return card.name == "sha";
					});
					if (card) player.gain(card, "gain2");
					"step 1";
					game.updateRoundNumber();
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
			},
			xuewei: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("xuewei"), lib.filter.notMe).set("ai", function (target) {
						var player = _status.event.player;
						if (player == get.zhu(player) && player.hp <= 2) return 0;
						return get.attitude(player, target) - 4;
					}).animate = false;
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("xuewei");
						player.addTempSkill("xuewei2", { player: "phaseBegin" });
						player.storage.xuewei2 = target;
					}
				},
				ai: {
					threaten: 1.05,
				},
			},
			xuewei2: {
				audio: "xuewei",
				forced: true,
				onremove: true,
				trigger: { global: "damageBegin4" },
				charlotte: true,
				sourceSkill: "xuewei",
				filter: function (event, player) {
					return event.player == player.storage.xuewei2;
				},
				logTarget: "player",
				content: function () {
					player.removeSkill("xuewei2");
					trigger.cancel();
					player.damage(trigger.num, trigger.source || "nosource");
					if (trigger.source && trigger.source.isIn()) trigger.source.damage(trigger.num, trigger.nature, player);
				},
			},
			liechi: {
				trigger: { player: "dying" },
				forced: true,
				filter: function (event, player) {
					return event.getParent().name == "damage" && event.source && event.source.countCards("he");
				},
				audio: 2,
				content: function () {
					trigger.source.chooseToDiscard("he", true);
				},
			},
			rejiuchi: {
				group: ["jiuchi"],
				audioname: ["re_dongzhuo"],
				trigger: { source: "damage" },
				forced: true,
				popup: false,
				locked: false,
				audio: "jiuchi",
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && event.getParent(2).jiu == true && !player.hasSkill("rejiuchi_air");
				},
				content: function () {
					player.logSkill("jiuchi");
					player.addTempSkill("rejiuchi_air");
				},
				subSkill: {
					air: {},
				},
			},
			//苏飞，新贾逵
			tongqu: {
				audio: 2,
				trigger: {
					global: ["phaseBefore", "dying", "phaseDrawBegin2"],
					player: ["enterGame", "phaseZhunbeiBegin"],
				},
				direct: true,
				filter: function (event, player) {
					if (event.name == "phaseDraw") return event.player.hasMark("tongqu");
					if (event.name == "dying") return event.player.hasMark("tongqu");
					if (event.name == "phaseZhunbei")
						return game.hasPlayer(function (current) {
							return !current.hasMark("tongqu");
						});
					return !player.hasMark("tongqu") && (event.name != "phase" || game.phaseNumber == 0);
				},
				content: function () {
					"step 0";
					if (trigger.name == "phaseDraw") {
						player.logSkill("tongqu", trigger.player);
						trigger.player.draw("nodelay");
						trigger.player.addTempSkill("tongqu2", "phaseDrawAfter");
						event.finish();
					} else if (trigger.name == "dying") {
						player.logSkill("tongqu", trigger.player);
						trigger.player.removeMark("tongqu", 1);
						event.finish();
					} else if (trigger.name == "phaseZhunbei") {
						player
							.chooseTarget(get.prompt2("tongqu"), function (card, player, target) {
								return !target.hasMark("tongqu");
							})
							.set("ai", function (target) {
								if (_status.event.player.hp < 3) return 0;
								return get.attitude(_status.event.player, target);
							});
					} else {
						player.logSkill("tongqu");
						player.addMark("tongqu", 1);
						event.finish();
					}
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.loseHp();
						player.logSkill("tongqu", target);
						target.addMark("tongqu", 1);
					}
				},
				marktext: "渠",
				intro: { content: "mark", name2: "渠" },
			},
			tongqu2: {
				trigger: { player: "phaseDrawEnd" },
				forced: true,
				silent: true,
				sourceSkill: "tongqu",
				filter: function (event, player) {
					var bool = game.hasPlayer(function (current) {
						return current != player && current.hasMark("tongqu");
					});
					return (
						player.countCards("he", function (card) {
							if (bool) return true;
							return lib.filter.cardDiscardable(card, player);
						}) > 0
					);
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						forced: true,
						position: "he",
						filterCard: true,
						filterTarget: function (card, player, target) {
							return player != target && target.hasMark("tongqu");
						},
						selectTarget: function () {
							if (ui.selected.cards.length && !lib.filter.cardDiscardable(ui.selected.cards[0], _status.event.player)) return [1, 1];
							return [0, 1];
						},
						prompt: "弃置一张牌，或将一张牌交给一名有“渠”的其他角色",
						ai1: function (card) {
							var player = _status.event.player;
							if (get.name(card) == "du") return 20;
							if (get.position(card) == "e" && get.value(card) <= 0) return 14;
							if (
								get.position(card) == "h" &&
								game.hasPlayer(function (current) {
									return current != player && current.hasMark("tongqu") && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
								})
							)
								return 12;
							if (
								game.hasPlayer(function (current) {
									return current != player && current.hasMark("tongqu") && get.attitude(player, current) > 0;
								})
							) {
								if (card.name == "wuxie") return 11;
								if (card.name == "shan" && player.countCards("h", "shan") > 1) return 9;
							}
							return 6 / Math.max(1, get.value(card));
						},
						ai2: function (target) {
							var player = _status.event.player;
							var card = ui.selected.cards[0];
							var att = get.attitude(player, target);
							if (card.name == "du") return -6 * att;
							if (att > 0) {
								if (get.position(card) == "h" && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
								if (target.hasUseTarget(card)) return 2 * att;
								return 1.2 * att;
							}
							return 0;
						},
					});
					"step 1";
					if (result.bool) {
						if (result.targets.length) {
							event.target = result.targets[0];
							player.give(result.cards, event.target);
							event.card = result.cards[0];
						} else {
							player.discard(result.cards);
							event.finish();
						}
					}
					"step 2";
					if (target.getCards("h").includes(card) && get.type(card) == "equip") {
						target.chooseUseTarget(card, true);
					}
				},
			},
			xinwanlan: {
				audio: "wanlan",
				trigger: { global: "damageBegin4" },
				filter: function (event, player) {
					return event.player.hp <= event.num && player.countCards("e") >= 1;
				},
				logTarget: "player",
				check: function (event, player) {
					if (get.attitude(player, event.player) < 4) return false;
					if (player.countCards("hs", card => player.canSaveCard(card, event.player)) >= 1 + event.num - event.player.hp) return false;
					if (event.player == player || event.player == get.zhu(player)) return true;
					return !player.hasUnknown();
				},
				content: function () {
					player.discard(player.getCards("e"));
					trigger.cancel();
				},
			},
			zhengjian: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				locked: true,
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget("请选择【诤荐】的目标", lib.translate.zhengjian_info).set("ai", function (target) {
						if (target.hasSkill("zhengjian_mark")) return 0;
						if (player == target) return 0.5;
						return get.attitude(_status.event.player, target) * (1 + target.countCards("h"));
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zhengjian", target);
						target.addSkill("zhengjian_mark");
					}
				},
				group: "zhengjian_draw",
				ai: {
					notemp: true,
				},
			},
			zhengjian_draw: {
				audio: "zhengjian",
				trigger: { player: "phaseBegin" },
				forced: true,
				sourceSkill: "zhengjian",
				filter: function (event) {
					return game.hasPlayer(function (current) {
						return current.hasSkill("zhengjian_mark");
					});
				},
				logTarget: function (event) {
					return game.filterPlayer(function (current) {
						return current.hasSkill("zhengjian_mark");
					});
				},
				content: function () {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current.countMark("zhengjian_mark") > 0;
					});
					if (list.length > 1) {
						event.delay = true;
						game.asyncDraw(list, function (target) {
							return Math.min(5, target.maxHp, target.countMark("zhengjian_mark"));
						});
					} else if (list.length == 1) list[0].draw(Math.min(5, list[0].maxHp, list[0].countMark("zhengjian_mark")));
					"step 1";
					game.countPlayer(function (current) {
						current.removeSkill("zhengjian_mark");
					});
					if (event.delay) game.delayx();
				},
			},
			zhengjian_mark: {
				trigger: { player: ["useCard1", "respond"] },
				silent: true,
				firstDo: true,
				onremove: true,
				charlotte: true,
				sourceSkill: "zhengjian",
				content: function () {
					player.addMark("zhengjian_mark", 1, false);
				},
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				mark: true,
				intro: {
					content: "已使用/打出过#张牌",
				},
			},
			gaoyuan: {
				audio: 2,
				trigger: { target: "useCardToTarget" },
				direct: true,
				filter: function (event, player) {
					if (event.card.name != "sha") return false;
					if (player.countCards("he") == 0) return false;
					return game.hasPlayer(function (current) {
						return current != event.player && current != player && current.hasSkill("zhengjian_mark") && lib.filter.targetEnabled(event.card, event.player, current);
					});
				},
				content: function () {
					"step 0";
					var next = player.chooseCardTarget({
						position: "he",
						filterCard: lib.filter.cardDiscardable,
						filterTarget: function (card, player, target) {
							var trigger = _status.event;
							if (target != player && target != trigger.source) {
								if (target.hasSkill("zhengjian_mark") && lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
							}
							return false;
						},
						ai1: function (card) {
							return get.unuseful(card) + 9;
						},
						ai2: function (target) {
							if (_status.event.player.countCards("h", "shan")) {
								return -get.attitude(_status.event.player, target);
							}
							if (get.attitude(_status.event.player, target) < 5) {
								return 6 - get.attitude(_status.event.player, target);
							}
							if (_status.event.player.hp == 1 && player.countCards("h", "shan") == 0) {
								return 10 - get.attitude(_status.event.player, target);
							}
							if (_status.event.player.hp == 2 && player.countCards("h", "shan") == 0) {
								return 8 - get.attitude(_status.event.player, target);
							}
							return -1;
						},
						prompt: get.prompt("gaoyuan"),
						prompt2: "弃置一张牌，将此【杀】转移给一名有“诤”的角色",
						source: trigger.player,
						card: trigger.card,
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill(event.name, target);
						player.discard(result.cards);
						var evt = trigger.getParent();
						evt.triggeredTargets2.remove(player);
						evt.targets.remove(player);
						evt.targets.push(target);
					}
				},
				ai: {
					combo: "zhengjian",
				},
			},
			//一 将 成 名
			zhilve: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				content: function () {
					"step 0";
					if (!player.canMoveCard()) event._result = { index: 1 };
					else
						player
							.chooseControl()
							.set("choiceList", ["移动场上的一张牌", "本回合的摸牌阶段多摸一张牌且第一张杀无距离次数限制"])
							.set("ai", function () {
								return 1;
							});
					"step 1";
					if (result.index == 1) {
						player.addTempSkill("zhilve_yingzi");
						if (
							!player.getHistory("useCard", function (card) {
								return card.card.name == "sha";
							}).length
						)
							player.addTempSkill("zhilve_xiandeng");
						event.finish();
					} else player.moveCard(true);
					"step 2";
					if (result.position == "e") player.loseHp();
					else player.addTempSkill("zhilve_dis");
				},
				subSkill: {
					dis: {
						mod: {
							maxHandcard: function (player, num) {
								return num - 1;
							},
						},
					},
					yingzi: {
						trigger: { player: "phaseDrawBegin2" },
						popup: false,
						forced: true,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							trigger.num++;
						},
					},
					xiandeng: {
						mod: {
							targetInRange: function (card, player) {
								if (card.name == "sha") return true;
							},
						},
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							return event.card.name == "sha";
						},
						content: function () {
							player.removeSkill(event.name);
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								var stat = player.getStat("card");
								if (stat && stat.sha) stat.sha--;
							}
						},
					},
				},
			},
			xhzhiyan: {
				enable: "phaseUse",
				audio: 2,
				filter: function (event, player) {
					return player.countCards("h") != player.maxHp;
				},
				filterCard: true,
				selectCard: function () {
					var player = _status.event.player;
					var num = Math.max(0, player.countCards("h") - player.maxHp);
					return [num, num];
				},
				check: function (card) {
					var player = _status.event.player;
					if (
						player.getUseValue(card) <= 0 &&
						game.hasPlayer(function (current) {
							return current != player && get.value(card, current) * get.attitude(player, current) > 0;
						})
					)
						return 1;
					return 0;
				},
				content: function () {
					"step 0";
					if (!cards.length) {
						player.draw(player.maxHp - player.countCards("h"));
						player.addTempSkill("zishou2");
						event.finish();
					} else {
						cards = cards.filterInD("d");
						if (cards.length)
							player.chooseButton(["是否将其中的一张牌交给一名其他角色？", cards]).set("", function (button) {
								var player = _status.event.player;
								if (
									game.hasPlayer(function (current) {
										return current != player && get.value(button.link, current) * get.attitude(player, current) > 0;
									})
								)
									return Math.abs(get.value(button.link));
								return 0;
							});
						else event.finish();
					}
					"step 1";
					if (result.bool && game.hasPlayer(current => current != player)) {
						event.card = result.links[0];
						player.chooseTarget(true, lib.filter.notMe, "选择一名其他角色获得" + get.translation(event.card)).set("ai", function (target) {
							return get.value(_status.event.getParent().card, target) * get.attitude(_status.event.player, target);
						});
					} else event.finish();
					"step 2";
					var target = result.targets[0];
					player.line(target, "green");
					target.gain(card, "gain2", "log");
				},
				ai: {
					order: function (obj, player) {
						if (player.countCards("h") > player.maxHp) return 10;
						return 0.5;
					},
					result: {
						player: 1,
					},
				},
			},
			//水 果 忍 者
			zhengjing_guanju: { audio: true },
			zhengjing: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return !player.hasSkill("zhengjing3");
				},
				content: function () {
					"step 0";
					//game.trySkillAudio('zhengjing_guanju',player);
					if (_status.connectMode) event.time = lib.configOL.choose_timeout;
					var cards = [];
					var names = [];
					while (true) {
						var card = get.cardPile(function (carde) {
							return carde.name != "du" && !names.includes(carde.name);
						});
						if (card) {
							cards.push(card);
							names.push(card.name);
							if (get.mode() == "doudizhu") {
								if (cards.length == 1 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
								if (cards.length == 2 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
								if (cards.length >= 3) break;
							} else {
								if (cards.length == 3 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
								if (cards.length == 4 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
								if (cards.length >= 5) break;
							}
						} else break;
					}
					event.cards = cards;
					if (!cards.length) {
						event.finish();
						return;
					}
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						names.remove("du");
						game.pause();
						game.countChoose();
						setTimeout(function () {
							_status.imchoosing = false;
							event._result = {
								bool: true,
								links: names.slice(0),
							};
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
							game.resume();
						}, 5000);
					};
					var createDialog = function (player, id) {
						if (_status.connectMode) lib.configOL.choose_timeout = "30";
						if (player == game.me) return;
						var str = get.translation(player) + "正在整理经书...<br>";
						ui.create.dialog(str).videoId = id;
					};
					var chooseButton = function (list) {
						var roundmenu = false;
						if (ui.roundmenu && ui.roundmenu.display != "none") {
							roundmenu = true;
							ui.roundmenu.style.display = "none";
						}
						var event = _status.event;
						event.settleed = false;
						event.finishedx = [];
						event.map = {};
						var names = list.slice(0);
						event.zhengjing_nodes = [];
						names.push("du");
						names.randomSort();
						var names2 = names.slice(0);
						for (var i = 0; i < 2; i++) {
							names2.randomSort();
							names = names.concat(names2);
						}

						event.zhengjing = names;
						for (var i of list) {
							event.map[i] = 0;
						}
						event.dialog = ui.create.dialog("forcebutton", "hidden");
						event.dialog.textPrompt = event.dialog.add('<div class="text center">及时点击卡牌，但不要点到毒了！</div>');
						var str = '<div class="text center">';
						for (var i of list) {
							str += get.translation(i) + ":" + Math.min(2, event.map[i]) + "/2 ";
						}
						str += "</div>";
						event.dialog.textPrompt2 = event.dialog.add(str);
						event.switchToAuto = function () {
							event._result = {
								bool: true,
								links: event.finishedx.slice(0),
							};
							event.dialog.close();
							game.resume();
							_status.imchoosing = false;
							if (roundmenu) ui.roundmenu.style.display = "";
						};
						event.dialog.classList.add("fixed");
						event.dialog.classList.add("scroll1");
						event.dialog.classList.add("scroll2");
						event.dialog.classList.add("fullwidth");
						event.dialog.classList.add("fullheight");
						event.dialog.classList.add("noupdate");
						event.dialog.open();
						event.settle = function (du) {
							if (event.settleed) return;
							event.settleed = true;
							event.dialog.textPrompt2.innerHTML = "";
							if (du) {
								if (lib.config.background_speak) game.playAudio("skill", "zhengjing_boom");
								event.dialog.textPrompt.innerHTML = '<div class="text center">叫你别点毒你非得点 这下翻车了吧</div>';
							} else {
								if (lib.config.background_speak) game.playAudio("skill", "zhengjing_finish");
								event.dialog.textPrompt.innerHTML = '<div class="text center">整理经典结束！共整理出' + get.cnNumber(event.finishedx.length) + "份经典</div>";
							}
							while (event.zhengjing_nodes.length) {
								event.zhengjing_nodes.shift().delete();
							}
							setTimeout(function () {
								event.switchToAuto();
							}, 1000);
						};

						var click = function () {
							var name = this.name;
							if (name == "du") {
								event.zhengjing.length = 0;
								event.settle(true);
							} else {
								if (lib.config.background_speak) game.playAudio("skill", "zhengjing_click");
								event.map[name]++;
								if (event.map[name] > 1) event.finishedx.add(name);
								if (event.finishedx.length < list.length) {
									var str = '<div class="text center">';
									for (var i of list) {
										str += get.translation(i) + ":" + Math.min(2, event.map[i]) + "/2 ";
									}
									str += "</div>";
									event.dialog.textPrompt2.innerHTML = str;
								} else {
									event.zhengjing.length = 0;
									event.settle();
								}
							}
							event.zhengjing_nodes.remove(this);
							this.style.transition = "all 0.5s";
							this.style.transform = "scale(1.2)";
							this.delete();
						};
						var addNode = function () {
							if (event.zhengjing.length) {
								var card = ui.create.card(ui.special, "noclick", true);
								card.init(["", "", event.zhengjing.shift()]);
								card.addEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", click);
								event.zhengjing_nodes.push(card);
								card.style.position = "absolute";
								var rand1 = Math.round(Math.random() * 100);
								var rand2 = Math.round(Math.random() * 100);
								var rand3 = Math.round(Math.random() * 40) - 20;
								card.style.left = "calc(" + rand1 + "% - " + rand1 + "px)";
								card.style.top = "calc(" + rand2 + "% - " + rand2 + "px)";
								card.style.transform = "scale(0.8) rotate(" + rand3 + "deg)";
								card.style.opacity = 0;
								event.dialog.appendChild(card);
								ui.refresh(card);
								card.style.opacity = 1;
								card.style.transform = "scale(1) rotate(" + rand3 + "deg)";
							}
							if (event.zhengjing_nodes.length > (event.zhengjing.length > 0 ? 2 : 0)) event.zhengjing_nodes.shift().delete();
							if (event.zhengjing.length || event.zhengjing_nodes.length)
								setTimeout(function () {
									addNode();
								}, 800);
							else event.settle();
						};

						game.pause();
						game.countChoose();
						addNode();
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId);
					if (event.isMine()) {
						chooseButton(names);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, names);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					game.broadcastAll(
						function (id, time) {
							if (_status.connectMode) lib.configOL.choose_timeout = time;
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
							}
						},
						event.videoId,
						event.time
					);
					var result = event.result || result;
					for (var i = 0; i < cards.length; i++) {
						//if(cards.length==1) break;
						if (!result.links.includes(cards[i].name)) cards.splice(i--, 1);
					}
					if (cards.length) {
						player.showCards(cards, get.translation(player) + "整理出了以下经典");
						game.cardsGotoOrdering(cards);
					} else {
						game.log(player, "并没有整理出经典");
						player.popup("杯具");
						event.finish();
					}
					"step 2";
					game.updateRoundNumber();
					player.chooseTarget(true, "将整理出的经典置于一名角色的武将牌上").set("ai", function (target) {
						if (target.hasSkill("xinfu_pdgyingshi")) return 0;
						let player = _status.event.player,
							cards = _status.event.getParent().cards,
							att = get.attitude(player, target),
							js = target.getCards("j", i => {
								let name = i.viewAs || i.name, info = lib.card[name];
								if (!info || !info.judge) return false;
								return true;
							}),
							eff = -1.5 * get.effect(target, { name: "draw" }, player, player);
						if (js.length) eff += js.reduce((acc, i) => {
							let name = i.viewAs || i.name;
							return acc - 0.7 * get.effect(target, get.autoViewAs({ name }, [i]), target, player);
						}, 0);
						return eff;
					});
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "thunder");
					}
					"step 4";
					if (cards.length == 1) {
						event._result = { bool: true, moved: [cards, []] };
						return;
					}
					var next = player.chooseToMove("整经：请分配整理出的经典", true);
					next.set("list", [["置于" + get.translation(target) + "的武将牌上", cards], ["自己获得"]]);
					next.set("filterMove", function (from, to, moved) {
						if (moved[0].length == 1 && to == 1 && from.link == moved[0][0]) return false;
						return true;
					});
					next.set("filterOk", function (moved) {
						return moved[0].length > 0;
					});
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(a) - get.value(b);
						});
						return [cards.splice(0, 1), cards];
					});
					"step 5";
					if (result.bool) {
						var cards = result.moved[0],
							gains = result.moved[1];
						target.addSkill("zhengjing2");
						target.addToExpansion(cards, "gain2").gaintag.add("zhengjing2");
						if (gains.length) player.gain(gains, "gain2");
					}
				},
				ai: {
					order: 10,
					result: { player: 1 },
					threaten: 3.2,
				},
			},
			//恁就是仲村由理？
			zhengjing2: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				charlotte: true,
				intro: { content: "expansion", markcount: "expansion" },
				sourceSkill: "zhengjing",
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				content: function () {
					"step 0";
					player.gain(player.getExpansions("zhengjing2"), "gain2");
					player.skip("phaseJudge");
					player.skip("phaseDraw");
					"step 1";
					player.removeSkill("zhengjing2");
				},
			},
			zhengjing3: {},
			//邓芝
			jimeng: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.countGainableCards(player, "he") > 0;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("jimeng"), function (card, player, target) {
							return target != player && target.countGainableCards(player, "he") > 0;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							if (player.hp > 1 && get.attitude(player, target) < 2) return 0;
							return get.effect(target, { name: "shunshou" }, player, player);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("jimeng", target);
						player.gainPlayerCard(target, "he", true);
					} else event.finish();
					"step 2";
					var hs = player.getCards("he");
					if (player.hp > 0 && hs.length) {
						if (hs.length <= player.hp) event._result = { bool: true, cards: hs };
						else player.chooseCard(player.hp, true, "交给" + get.translation(target) + get.cnNumber(player.hp) + "张牌", "he", true);
					} else event.finish();
					"step 3";
					player.give(result.cards, target);
				},
			},
			shuaiyan: {
				audio: 2,
				trigger: { player: "phaseDiscardBegin" },
				filter: function (event, player) {
					return player.countCards("h") > 1;
				},
				check: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("he") && lib.skill.shuaiyan.check2(current, player);
					});
				},
				check2: function (target, player) {
					if (get.itemtype(player) != "player") player = _status.event.player;
					return -get.attitude(player, target) / target.countCards("he");
				},
				content: function () {
					"step 0";
					player.showHandcards(get.translation(player) + "发动了【率言】");
					"step 1";
					var filter = function (card, player, target) {
						return player != target && target.countCards("he") > 0;
					};
					if (
						game.hasPlayer(function (current) {
							return filter("我约等于白板", player, current);
						})
					) {
						player.chooseTarget(true, filter, "选择一名其他角色，令其交给你一张牌").set("ai", lib.skill.shuaiyan.check2);
					} else event.finish();
					"step 2";
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					target.chooseCard("he", true, "交给" + get.translation(player) + "一张牌");
					"step 3";
					target.give(result.cards, player);
				},
			},
			relihuo: {
				audio: 2,
				group: ["relihuo_baigei", "relihuo_damage"],
				trigger: { player: "useCard1" },
				filter: function (event, player) {
					if (event.card.name == "sha" && !game.hasNature(event.card)) return true;
				},
				check: function (event, player) {
					return false;
				},
				content: function () {
					game.setNature(trigger.card, "fire");
					trigger.relihuo = true;
				},
			},
			relihuo_damage: {
				trigger: { source: "damageBegin1" },
				forced: true,
				audio: "relihuo",
				sourceSkill: "relihuo",
				filter: function (event, player) {
					return event.getParent(2).relihuo == true && event.player.isLinked();
				},
				content: function () {
					trigger.num++;
				},
			},
			relihuo_baigei: {
				trigger: { player: "useCardAfter" },
				forced: true,
				audio: "relihuo",
				sourceSkill: "relihuo",
				filter: function (event, player) {
					if (event.card.name != "sha" || !game.hasNature(event.card, "fire")) return false;
					var num = 0;
					player.getHistory("sourceDamage", function (evt) {
						if (evt.card == event.card) num += evt.num;
					});
					return num > 1;
				},
				content: function () {
					var num = 0;
					player.getHistory("sourceDamage", function (evt) {
						if (evt.card == trigger.card) num += evt.num;
					});
					player.loseHp(Math.floor(num / 2));
				},
			},
			gongsun: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 1;
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						prompt: get.prompt2("gongsun"),
						selectCard: 2,
						filterCard: lib.filter.cardDiscardable,
						filterTarget: lib.filter.notMe,
						position: "he",
						ai1: function (card) {
							var friend = 0,
								enemy = 0,
								player = _status.event.player;
							var num = game.countPlayer(function (target) {
								var att = get.attitude(player, target);
								if (att < 0) enemy++;
								if (target != player && att > 0) friend++;
								return true;
							});
							if (num > friend + enemy + 2) return 0;
							if (friend < enemy) return 0;
							if (card.name == "sha") return 10 - enemy;
							return 10 - enemy - get.value(card);
						},
						ai2: function (target) {
							return -get.attitude(_status.event.player, target) * (1 + target.countCards("h"));
						},
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("gongsun", target);
						player.discard(result.cards);
						player.addTempSkill("gongsun_shadow", { player: ["phaseBegin", "die"] });
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (get.type(name) == "trick") list.push(["锦囊", "", name]);
							else if (get.type(name) == "basic") list.push(["基本", "", name]);
						}
						player.chooseButton(["请选择一个牌名", [list, "vcard"], true]).set("ai", function (button) {
							return button.link[2] == "sha" ? 1 : 0;
						});
					} else event.finish();
					"step 2";
					player.storage.gongsun_shadow.push([target, result.links[0][2]]);
					player.popup(result.links[0][2], "soil");
					game.log(player, "选择了", "" + get.translation(result.links[0][2]));
					player.markSkill("gongsun_shadow");
				},
			},
			gongsun_shadow: {
				global: "gongsun_shadow2",
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				marktext: "损",
				onremove: true,
				intro: {
					content: function (shadow) {
						var str = "";
						for (var i = 0; i < shadow.length; i++) {
							if (i > 0) str += "<br>";
							str += get.translation(shadow[i][0]);
							str += "：";
							str += get.translation(shadow[i][1]);
						}
						return str;
					},
				},
				mod: {
					cardEnabled: function (card, player) {
						var list = player.storage.gongsun_shadow;
						for (var i = 0; i < list.length; i++) {
							if (list[i][1] == card.name) return false;
						}
					},
					cardRespondable: function (card, player) {
						var list = player.storage.gongsun_shadow;
						for (var i = 0; i < list.length; i++) {
							if (list[i][1] == card.name) return false;
						}
					},
					cardSavable: function (card, player) {
						var list = player.storage.gongsun_shadow;
						for (var i = 0; i < list.length; i++) {
							if (list[i][1] == card.name) return false;
						}
					},
					cardDiscardable: function (card, player) {
						var list = player.storage.gongsun_shadow;
						for (var i = 0; i < list.length; i++) {
							if (list[i][1] == card.name) return false;
						}
					},
				},
			},
			gongsun_shadow2: {
				mod: {
					cardEnabled: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								var list = current.storage.gongsun_shadow;
								if (!list) return false;
								for (var i = 0; i < list.length; i++) {
									if (list[i][0] == player && list[i][1] == card.name) return true;
								}
								return false;
							})
						)
							return false;
					},
					cardSavable: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								var list = current.storage.gongsun_shadow;
								if (!list) return false;
								for (var i = 0; i < list.length; i++) {
									if (list[i][0] == player && list[i][1] == card.name) return true;
								}
								return false;
							})
						)
							return false;
					},
					cardRespondable: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								var list = current.storage.gongsun_shadow;
								if (!list) return false;
								for (var i = 0; i < list.length; i++) {
									if (list[i][0] == player && list[i][1] == card.name) return true;
								}
								return false;
							})
						)
							return false;
					},
					cardDiscardable: function (card, player) {
						if (
							game.hasPlayer(function (current) {
								var list = current.storage.gongsun_shadow;
								if (!list) return false;
								for (var i = 0; i < list.length; i++) {
									if (list[i][0] == player && list[i][1] == card.name) return true;
								}
								return false;
							})
						)
							return false;
					},
				},
			},
			duoduan: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha" && player.countCards("he") > 0 && !player.hasSkill("duoduan_im");
				},
				content: function () {
					"step 0";
					player
						.chooseCard("he", get.prompt2("duoduan"), lib.filter.cardRecastable)
						.set("ai", function (card) {
							if (_status.event.goon) return 8 - get.value(card);
							return 0;
						})
						.set(
							"goon",
							(function () {
								if (get.attitude(trigger.player, player) > 0) return true;
								if (!trigger.player.countCards("he")) return true;
								if (!player.hasShan()) return true;
								return event.getRand() < 0.5;
							})()
						);
					"step 1";
					if (result.bool) {
						player.addTempSkill("duoduan_im");
						player.logSkill("duoduan", trigger.player);
						player.recast(result.cards);
					} else event.finish();
					"step 2";
					var sha = get.translation(trigger.card);
					if (
						!trigger.player.countCards("he", function (card) {
							return lib.filter.cardDiscardable(card, trigger.player, "duoduan");
						})
					)
						event.finish();
					else
						player
							.chooseControl()
							.set("choiceList", ["令其摸两张牌，然后令" + sha + "对你无效", "令其弃置一张牌，然后你不可响应" + sha])
							.set("prompt", "度断：令" + get.translation(trigger.player) + "执行一项")
							.set("ai", function () {
								var player = _status.event.player;
								var source = _status.event.getTrigger().player;
								if (get.attitude(player, source) > 0) return 0;
								if (!player.hasShan() && player.hp >= 2) return 1;
								return 0;
							});
					"step 3";
					if (result.index == 0) event.goto(5);
					else trigger.player.chooseToDiscard("弃置一张牌令" + get.translation(player) + "不能闪避此【杀】", "he", true);
					"step 4";
					if (result.bool) {
						trigger.directHit.add(player);
					}
					event.finish();
					"step 5";
					trigger.player.draw(2);
					trigger.excluded.add(player);
				},
			},
			duoduan_im: {
				//'im' refers to 'Iwasawa Masami' in 'Angel Beats!'
				//Although she disappeared in the Episode 3 of the anime, but her route in the game is really worth to play.
			},
			chengzhao: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					var num = 0;
					player.getHistory("gain", function (evt) {
						num += evt.cards.length;
					});
					if (num < 2) return false;
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return player != current && player.canCompare(current);
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("chengzhao"), function (card, player, target) {
							return player.canCompare(target);
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target) / target.countCards("h");
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("chengzhao", target);
						player.chooseToCompare(target);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = { name: "sha", isCard: true };
						if (player.canUse(card, target, false)) player.useCard(card, target, false).card.chengzhao = true;
					}
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (!arg || !arg.card || arg.card.chengzhao != true) return false;
					},
				},
			},
			rezhengrong: {
				trigger: { player: "useCardAfter" },
				locked: true,
				direct: true,
				audio: "drlt_zhenrong",
				filter: function (event, player) {
					if (!event.targets) return false;
					if (!event.isPhaseUsing(player)) return false;
					var bool = false;
					for (var i = 0; i < event.targets.length; i++) {
						if (event.targets[i] != player) {
							bool = true;
							break;
						}
					}
					if (!bool) return false;
					return (
						player
							.getAllHistory("useCard", function (evt) {
								if (!evt.isPhaseUsing(player)) return false;
								for (var i = 0; i < evt.targets.length; i++) {
									if (evt.targets[i] != player) return true;
								}
								return false;
							})
							.indexOf(event) %
							2 ==
						1
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("rezhengrong"), true, "将一名其他角色的随机一张牌置于你的武将牌上，成为「荣」", function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						})
						.set("ai", function (target) {
							return (1 - get.attitude(_status.event.player, target)) / target.countCards("he");
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = result.targets[0];
						player.logSkill("rezhengrong", target);
						var card = target.getCards("he").randomGet();
						player.addToExpansion(card, target, "give").gaintag.add("rezhengrong");
					}
				},
				marktext: "荣",
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
			},
			rehongju: {
				trigger: { player: "phaseZhunbeiBegin" },
				audio: "drlt_hongju",
				forced: true,
				unique: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "thunder",
				derivation: "reqingce",
				filter: function (event, player) {
					return player.getExpansions("rezhengrong").length >= 3 && game.dead.length > 0;
				},
				content: function () {
					"step 0";
					player.awakenSkill("rehongju");
					player.draw(player.getExpansions("rezhengrong").length);
					"step 1";
					if (player.countCards("h") == 0) event.goto(3);
					else {
						var dialog = ["请选择要交换的手牌和「荣」，或点「取消」", '<div class="text center">「征荣」牌</div>', player.getExpansions("rezhengrong"), '<div class="text center">手牌区</div>', player.getCards("h")];
						var next = player.chooseButton(dialog);
						next.set("filterButton", function (button) {
							var ss = _status.event.player.getExpansions("rezhengrong");
							var hs = _status.event.player.getCards("h");
							var sn = 0;
							var hn = 0;
							var ub = ui.selected.buttons;
							for (var i = 0; i < ub.length; i++) {
								if (ss.includes(ub[i].link)) sn++;
								else hn++;
							}
							return !((sn >= hs.length && ss.includes(button.link)) || (hn >= ss.length && hs.includes(button.link)));
						});
						next.set("selectButton", function () {
							if (ui.selected.buttons.length == 0) return 2;
							var ss = _status.event.player.getExpansions("rezhengrong");
							var hs = _status.event.player.getCards("h");
							var sn = 0;
							var hn = 0;
							var ub = ui.selected.buttons;
							for (var i = 0; i < ub.length; i++) {
								if (ss.includes(ub[i].link)) sn++;
								else hn++;
							}
							if (sn != hn) return 2 * Math.max(sn, hn);
							else {
								if (sn == ss.length || hn == hs.length || sn == hs.length || hn == ss.length) return ub.length;
								return [ub.length, ub.length + 1];
							}
						});
						next.set("ai", function () {
							return -1;
						});
					}
					"step 2";
					if (result.bool) {
						var gains = [];
						var pushs = [];
						var expansions = player.getExpansions("rezhengrong");
						for (var i = 0; i < result.links.length; i++) {
							var card = result.links[i];
							if (expansions.includes(card)) gains.push(card);
							else pushs.push(card);
						}
						player.addToExpansion(pushs, player, "give").gaintag.add("rezhengrong");
						player.gain(gains, "gain2");
					}
					"step 3";
					player.addSkills("reqingce");
					player.loseMaxHp();
				},
				ai: {
					combo: "rezhengrong",
				},
			},
			reqingce: {
				enable: "phaseUse",
				audio: "drlt_qingce",
				filter: function (event, player) {
					return player.getExpansions("rezhengrong").length > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("请选择要移去的「荣」", player.getExpansions("rezhengrong"), "hidden");
					},
					backup: function (links, player) {
						return {
							card: links[0],
							filterCard: function () {
								return false;
							},
							selectCard: -1,
							filterTarget: function (card, player, target) {
								return target.countDiscardableCards(player, "ej") > 0;
							},
							delay: false,
							audio: "drlt_qingce",
							content: lib.skill.reqingce.contentx,
							ai: {
								result: {
									target: function (player, target) {
										var att = get.attitude(player, target);
										if (
											att > 0 &&
											(target.countCards("j") > 0 ||
												target.countCards("e", function (card) {
													return get.value(card, target) < 0;
												}))
										)
											return 2;
										if (att < 0 && target.countCards("e") > 0 && !target.hasSkillTag("noe")) return -1;
										return 0;
									},
								},
							},
						};
					},
					prompt: function (links, player) {
						return "弃置一名角色装备区或判定区内的一张牌";
					},
				},
				contentx: function () {
					"step 0";
					var card = lib.skill.reqingce_backup.card;
					player.loseToDiscardpile(card);
					"step 1";
					if (target.countDiscardableCards(player, "ej") > 0) {
						player.discardPlayerCard("ej", true, target);
					}
				},
				ai: {
					combo: "rezhengrong",
					order: 8,
					result: {
						player: function (player) {
							if (
								game.hasPlayer(function (current) {
									var att = get.attitude(player, current);
									if ((att > 0 && current.countCards("j") > 0) || (att < 0 && current.countCards("e") > 0)) return true;
									return false;
								})
							)
								return 1;
							return 0;
						},
					},
				},
			},
			fengji: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return typeof player.storage.fengji == "number" && player.countCards("h") >= player.storage.fengji;
				},
				content: function () {
					player.draw(2);
					player.addTempSkill("fengji3");
				},
				group: "fengji2",
				intro: {
					content: "上回合结束时的手牌数：#",
				},
			},
			fengji2: {
				trigger: { player: "phaseEnd" },
				silent: true,
				sourceSkill: "fengji",
				content: function () {
					player.storage.fengji = player.countCards("h");
					if (player.hasSkill("fengji")) player.markSkill("fengji");
				},
			},
			fengji3: {
				mod: {
					maxHandcardBase: function (player, num) {
						return player.maxHp;
					},
				},
			},
			zhouxuan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				filterCard: true,
				position: "he",
				filterTarget(card, player, target) {
					if (!["identity", "doudizhu"].includes(get.mode()) && target.isFriendOf(player)) return false;
					return target != player;
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				content: function () {
					"step 0";
					player.addSkill("zhouxuan2");
					target.addTempSkill("zhouxuan_ai", { player: "phaseUseAfter" });
					player.storage.zhouxuan2 = {};
					player.storage.zhouxuan2.player = target;
					var list = [];
					var basic = [];
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						var type = get.type(name, "trick");
						if (type == "basic") {
							list.push(name);
							basic.push(name);
						} else list.add(type);
					}
					event.basic = basic;
					player
						.chooseControl(list)
						.set("prompt", "请选择一种基本牌的名称或非基本牌的类别")
						.set("ai", function () {
							var player = _status.event.player;
							var target = player.storage.zhouxuan2.player;
							var cards = target.getCards("h", function (card) {
								return target.hasUseTarget(card);
							});
							var map = {};
							for (var i = 0; i < cards.length; i++) {
								var type = get.type(cards[i], "trick");
								map[type == "basic" ? get.name(cards[i]) : type] = true;
							}
							if (map.equip) return "equip";
							if (map.trick) return "trick";
							if (map.sha) return "sha";
							if (map.tao) return "tao";
							return 0;
						});
					"step 1";
					player.storage.zhouxuan2.card = result.control;
					if (event.basic.includes(result.control)) player.storage.zhouxuan2.isbasic = true;
					player.markSkill("zhouxuan2");
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							if (get.attitude(player, target) > 0)
								return (
									Math.max(1, target.hp) *
									target.countCards("h", function (card) {
										return target.getUseValue(card) > 0;
									})
								);
							return 0;
						},
					},
				},
			},
			zhouxuan_ai: {
				mod: {
					aiOrder: function (player, card, num) {
						if (
							game.hasPlayer(function (current) {
								return current.storage.zhouxuan2 && current.storage.zhouxuan2.player == player && get.attitude(player, current) > 0 && (current.storage.zhouxuan2.isbasic ? card.name : get.type(card, "trick")) == current.storage.zhouxuan2.card;
							})
						)
							return num + 10;
					},
				},
			},
			zhouxuan2: {
				intro: {
					mark: function (player, storage) {
						return get.translation(storage.player) + "使用或打出下一张牌时，若此牌为" + get.translation(storage.card) + (storage.isbasic ? "" : "牌") + "，你观看牌堆顶的三张牌并分配给任意角色";
					},
				},
				audio: "zhouxuan",
				forced: true,
				charlotte: true,
				trigger: { global: ["useCard", "respond"] },
				sourceSkill: "zhouxuan",
				filter: function (event, player) {
					if (event.zhouxuanable) return true;
					if (player.storage.zhouxuan2) {
						var map = player.storage.zhouxuan2;
						if (map.player != event.player) return false;
						delete player.storage.zhouxuan2;
						player.unmarkSkill("zhouxuan2");
						if (map.card != (map.isbasic ? event.card.name : get.type(event.card, "trick"))) return false;
						event.zhouxuanable = true;
						return true;
					}
					return false;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					event.cards = game.cardsGotoOrdering(get.cards(3)).cards;
					if (_status.connectMode)
						game.broadcastAll(function () {
							_status.noclearcountdown = true;
						});
					event.given_map = {};
					"step 1";
					if (event.cards.length > 1) {
						player.chooseCardButton("周旋：请选择要分配的牌", true, event.cards, [1, event.cards.length]).set("ai", function (button) {
							if (ui.selected.buttons.length == 0) return 1;
							return 0;
						});
					} else if (event.cards.length == 1) {
						event._result = { links: event.cards.slice(0), bool: true };
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						event.cards.removeArray(result.links);
						event.togive = result.links.slice(0);
						player
							.chooseTarget("选择一名角色获得" + get.translation(result.links), true)
							.set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (_status.event.enemy) {
									return -att;
								} else if (att > 0) {
									return att / (1 + target.countCards("h"));
								} else {
									return att / 100;
								}
							})
							.set("enemy", get.value(event.togive[0], player, "raw") < 0);
					}
					"step 3";
					if (result.targets.length) {
						var id = result.targets[0].playerid,
							map = event.given_map;
						if (!map[id]) map[id] = [];
						map[id].addArray(event.togive);
					}
					if (cards.length > 0) event.goto(1);
					"step 4";
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					var list = [];
					for (var i in event.given_map) {
						var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						list.push([source, event.given_map[i]]);
					}
					game.loseAsync({
						gain_list: list,
						giver: player,
						animate: "draw",
					}).setContent("gaincardMultiple");
				},
			},
			reshanxi: {
				audio: "shanxi",
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.hp > 0 &&
						player.countCards("h", function (card) {
							if (_status.connectMode) return true;
							return get.color(card) == "red" && get.type(card) == "basic";
						}) > 0
					);
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterCard: function (card) {
							return get.color(card) == "red" && get.type(card) == "basic" && lib.filter.cardDiscardable.apply(this, arguments);
						},
						filterTarget: function (card, player, target) {
							return player != target && target.countCards("he") > 0;
						},
						prompt: get.prompt("reshanxi"),
						prompt2: "弃置一张红色基本牌并选择一名其他角色，将其的至多X张牌置于其武将牌上直到回合结束。（X为你的体力值）",
						ai1: function () {
							return -1;
						},
					});
					"step 1";
					if (result.bool) {
						event.target = result.targets[0];
						player.logSkill("reshanxi", event.target);
						player.discard(result.cards);
					} else event.finish();
					"step 2";
					var max = Math.min(player.hp, target.countCards("he"));
					if (max > 0 && target.isIn()) {
						player
							.choosePlayerCard("he", target, true, [1, max])
							.set("forceAuto", true)
							.set("prompt", "将" + get.translation(target) + "的至多" + get.cnNumber(max) + "张牌置于其武将牌上");
					} else event.finish();
					"step 3";
					target.addSkill("reshanxi2");
					target.addToExpansion(result.cards, "giveAuto", target).gaintag.add("reshanxi2");
				},
			},
			reshanxi2: {
				trigger: { global: "phaseEnd" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "reshanxi",
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				content: function () {
					"step 0";
					var cards = player.getExpansions("reshanxi2");
					if (cards.length) player.gain(cards, "draw");
					"step 1";
					player.removeSkill("reshanxi2");
				},
				intro: {
					markcount: "expansion",
					mark: function (dialog, storage, player) {
						var cards = player.getExpansions("reshanxi2");
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张牌";
					},
				},
			},
			reqizhou: {
				trigger: { player: ["equipEnd", "loseEnd"] },
				forced: true,
				popup: false,
				derivation: ["reyingzi", "qixi", "rexuanfeng"],
				filter: function (event, player) {
					if (player.equiping) return false;
					var suits = [];
					var es = player.getCards("e");
					for (var i = 0; i < es.length; i++) {
						suits.add(get.suit(es[i]));
					}
					if (suits.length > 3) suits.length = 3;
					if (player.additionalSkills.reqizhou) {
						return player.additionalSkills.reqizhou.length != suits.length;
					} else {
						return suits.length > 0;
					}
				},
				content: function () {
					lib.skill.reqizhou.init(player, "reqizhou");
				},
				init: function (player, skill) {
					var suits = [];
					var es = player.getCards("e");
					for (var i = 0; i < es.length; i++) {
						suits.add(get.suit(es[i]));
					}
					if (suits.length > 3) suits.length = 3;
					player.removeAdditionalSkill(skill);
					switch (suits.length) {
						case 1:
							player.addAdditionalSkill(skill, ["reyingzi"]);
							break;
						case 2:
							player.addAdditionalSkill(skill, ["reyingzi", "qixi"]);
							break;
						case 3:
							player.addAdditionalSkill(skill, ["reyingzi", "qixi", "rexuanfeng"]);
							break;
					}
				},
				ai: {
					threaten: 1.2,
				},
			},
			zhaohan: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return player.phaseNumber < 8;
				},
				check: function (event, player) {
					return player.phaseNumber < 3;
				},
				content: function () {
					if (player.phaseNumber < 5) {
						player.gainMaxHp();
						player.recover();
					} else player.loseMaxHp();
				},
			},
			rangjie: {
				audio: 2,
				trigger: { player: "damageEnd" },
				direct: true,
				content: function () {
					"step 0";
					event.count = trigger.num;
					"step 1";
					event.count--;
					var choiceList = ["获得一张指定类型的牌"];
					if (player.canMoveCard()) choiceList.push("移动场上的一张牌");
					player
						.chooseControl("cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt("rangjie"))
						.set("ai", function () {
							var player = _status.event.player;
							if (player.canMoveCard(true)) return 1;
							return 0;
						});
					"step 2";
					if (result.control == "cancel2") event.finish();
					else {
						player.logSkill("rangjie");
						player.draw();
						if (result.index == 0) {
							player
								.chooseControl("basic", "trick", "equip")
								.set("prompt", "选择获得一种类型的牌")
								.set("ai", function () {
									var player = _status.event.player;
									if (player.hp <= 3 && !player.countCards("h", { name: ["shan", "tao"] })) return "basic";
									if (player.countCards("he", { type: "equip" }) < 2) return "equip";
									return "trick";
								});
						} else {
							player.moveCard(true);
							event.goto(4);
						}
					}
					"step 3";
					var card = get.cardPile(function (card) {
						return get.type(card, "trick") == result.control;
					});
					if (card) player.gain(card, "gain2", "log");
					"step 4";
					if (event.count > 0 && player.hasSkill("rangjie")) event.goto(1);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								var num = 1;
								if (get.attitude(player, target) > 0) {
									if (player.needsToDiscard()) num = 0.7;
									else num = 0.5;
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						},
					},
				},
			},
			yizheng: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.hp <= player.hp && player.canCompare(current);
					});
				},
				filterTarget: function (card, player, current) {
					return current.hp <= player.hp && player.canCompare(current);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) {
						target.skip("phaseDraw");
						target.addTempSkill("yizheng2", { player: "phaseDrawSkipped" });
					} else player.loseMaxHp();
				},
				ai: {
					order: 1,
					result: {
						player: (player, target) => {
							let hs = player.getCards("h").sort(function (a, b) {
								return get.number(b) - get.number(a);
							});
							if (!hs.length) return 0;
							let a = get.number(hs[0]),
								b = 4;
							if (player.getDamagedHp()) b = 2;
							return -b * (1 - Math.pow((a - 1) / 13, target.countCards("h")));
						},
						target: (player, target) => {
							if (target.skipList.includes("phaseDraw") || target.hasSkill("pingkou") || target.hasSkill("xinpingkou")) return 0;
							let hs = player.getCards("h").sort(function (a, b) {
								return get.number(b) - get.number(a);
							});
							if (!hs.length) return 0;
							return -Math.pow((get.number(hs[0]) - 1) / 13, target.countCards("h")) * 2;
						},
					},
				},
			},
			yizheng2: {
				mark: true,
				intro: { content: "跳过下回合的摸牌阶段" },
			},
			rw_zhuge_skill: {
				equipSkill: true,
				audio: true,
				firstDo: true,
				trigger: { player: "useCard1" },
				forced: true,
				filter: function (event, player) {
					return !event.audioed && event.card.name == "sha" && player.countUsed("sha", true) > 1 && event.getParent().type == "phase";
				},
				content: function () {
					trigger.audioed = true;
				},
				mod: {
					cardUsable: function (card, player, num) {
						var cards = player.getEquips("rewrite_zhuge");
						if (card.name == "sha") {
							if (!cards.length || player.hasSkill("rw_zhuge_skill", null, false) || cards.some(card => card != _status.rw_zhuge_temp && !ui.selected.cards.includes(card))) {
								if (get.is.versus() || get.is.changban()) {
									return num + 3;
								}
								return Infinity;
							}
						}
					},
					cardEnabled2: function (card, player) {
						if (!_status.event.addCount_extra || player.hasSkill("rw_zhuge_skill", null, false)) return;
						var cards = player.getEquips("rewrite_zhuge");
						if (card && cards.includes(card)) {
							try {
								var cardz = get.card();
							} catch (e) {
								return;
							}
							if (!cardz || cardz.name != "sha") return;
							_status.rw_zhuge_temp = card;
							var bool = lib.filter.cardUsable(get.autoViewAs({ name: "sha" }, ui.selected.cards.concat([card])), player);
							delete _status.rw_zhuge_temp;
							if (!bool) return false;
						}
					},
				},
			},
			xinqingjian: {
				audio: "qingjian",
				trigger: {
					player: "gainAfter",
					global: "loseAsyncAfter",
				},
				usable: 1,
				filter(event, player) {
					return event.getg(player).length && event.getParent("phaseDraw").player != player && player.countCards("h") > 0;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard(get.prompt2(event.name.slice(0, -5)), "h", [1, player.countCards("h")])
						.set("ai", card => {
							if (!game.hasPlayer(target => player != target && get.attitude(player, target) > 0)) return 0;
							return 4 - get.value(card);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.addSkill("xinqingjian2");
					const next = player.addToExpansion(event.cards, "giveAuto", player);
					next.gaintag.add("xinqingjian2");
					await next;
				},
			},
			xinqingjian2: {
				audio: "xinqingjian",
				charlotte: true,
				trigger: { global: "phaseEnd" },
				forced: true,
				sourceSkill: "xinqingjian",
				filter(event, player) {
					return player.getExpansions("xinqingjian2").length > 0;
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				async content(event, trigger, player) {
					if (_status.connectMode)
						game.broadcastAll(() => {
							_status.noclearcountdown = true;
						});
					const given_map = {};
					event.given_map = given_map;
					const expansions = player.getExpansions("xinqingjian2");
					const goon = expansions.length > 1;
					let result;
					while (true) {
						if (expansions.length > 1) {
							result = await player
								.chooseCardButton("清俭：请选择要分配的牌", true, expansions, [1, expansions.length])
								.set("ai", button => {
									if (ui.selected.buttons.length) return 0;
									return get.value(button.link, get.player());
								})
								.forResult();
						} else if (expansions.length === 1) result = { bool: true, links: expansions.slice(0) };
						else return;
						if (!result.bool) return;
						const toGive = result.links;
						result = await player
							.chooseTarget(`选择一名其他角色获得${get.translation(toGive)}`, expansions.length === 1, lib.filter.notMe)
							.set("ai", target => {
								const att = get.attitude(get.player(), target);
								if (get.event("toEnemy")) return Math.max(0.01, 100 - att);
								else if (att > 0) return Math.max(0.1, att / Math.sqrt(1 + target.countCards("h") + (get.event().getParent().given_map[target.playerid] || 0)));
								else return Math.max(0.01, (100 + att) / 200);
							})
							.set("toEnemy", get.value(toGive[0], player, "raw") < 0)
							.forResult();
						if (result.bool) {
							expansions.removeArray(toGive);
							if (result.targets.length) {
								const id = result.targets[0].playerid;
								if (!given_map[id]) given_map[id] = [];
								given_map[id].addArray(toGive);
							}
							if (!expansions.length) break;
						}
					}
					if (_status.connectMode)
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					const gain_list = [];
					for (const i in given_map) {
						const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						gain_list.push([source, given_map[i]]);
						game.log(source, "获得了", given_map[i]);
					}
					await game
						.loseAsync({
							gain_list,
							giver: player,
							animate: "gain2",
						})
						.setContent("gaincardMultiple");
					if (goon) await player.draw();
					player.removeSkill("xinqingjian2");
				},
				intro: {
					markcount: "expansion",
					mark(dialog, storage, player) {
						var cards = player.getExpansions("xinqingjian2");
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张牌";
					},
				},
			},
			zhongzuo: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return player.getHistory("damage").length > 0 || player.getHistory("sourceDamage").length > 0;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("zhongzuo"), "令一名角色摸两张牌。若其已受伤，则你摸一张牌。").set("ai", function (target) {
						if (target.hasSkillTag("nogain")) return target.isDamaged() ? 0 : 1;
						let att = get.attitude(_status.event.player, target);
						if (att <= 0) return 0;
						if (target.isDamaged()) return 1 + att / 5;
						return att / 5;
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zhongzuo", target);
						target.draw(2);
						if (target.isDamaged()) player.draw();
					}
				},
			},
			wanlan: {
				audio: 2,
				trigger: { global: "dying" },
				check: function (event, player) {
					if (get.attitude(player, event.player) < 4) return false;
					if (player.countCards("hs", card => player.canSaveCard(card, event.player)) >= 1 - event.player.hp) return false;
					if (event.player == player || event.player == get.zhu(player)) return true;
					if (_status.currentPhase && get.damageEffect(_status.currentPhase, player, player) < 0) return false;
					return !player.hasUnknown();
				},
				limited: true,
				unique: true,
				filter: function (event, player) {
					return event.player.hp <= 0;
				},
				skillAnimation: true,
				animationColor: "thunder",
				logTarget: "player",
				content: function () {
					"step 0";
					player.awakenSkill("wanlan");
					var hs = player.getCards("h");
					if (hs.length) player.discard(hs);
					"step 1";
					var num = 1 - trigger.player.hp;
					if (num) trigger.player.recover(num);
					"step 2";
					if (_status.currentPhase && _status.currentPhase.isIn()) {
						var next = _status.currentPhase.damage();
						event.next.remove(next);
						trigger.after.push(next);
					}
				},
			},
			rezhiyi: {
				audio: "zhiyi",
				trigger: { global: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					return (
						player.getHistory("useCard", function (card) {
							return get.type(card.card) == "basic";
						}).length > 0 ||
						player.getHistory("respond", function (card) {
							return get.type(card.card) == "basic";
						}).length > 0
					);
				},
				content: function () {
					"step 0";
					var list = [];
					player.getHistory("useCard", function (evt) {
						if (get.type(evt.card) != "basic") return;
						var name = evt.card.name;
						if (name == "sha") {
							var nature = evt.card.nature;
							switch (nature) {
								case "fire":
									name = "huosha";
									break;
								case "thunder":
									name = "leisha";
									break;
								case "kami":
									name = "kamisha";
									break;
								case "ice":
									name = "icesha";
									break;
								case "stab":
									name = "cisha";
									break;
							}
						}
						list.add(name);
					});
					player.getHistory("respond", function (evt) {
						if (get.type(evt.card) != "basic") return;
						var name = evt.card.name;
						if (name == "sha") {
							var nature = evt.card.nature;
							switch (nature) {
								case "fire":
									name = "huosha";
									break;
								case "thunder":
									name = "leisha";
									break;
								case "kami":
									name = "kamisha";
									break;
								case "ice":
									name = "icesha";
									break;
								case "stab":
									name = "cisha";
									break;
							}
						}
						list.add(name);
					});
					player.chooseButton(
						[
							"执义：选择要使用的牌，或点取消摸一张牌",
							[
								list.map(function (name) {
									return ["基本", "", name];
								}),
								"vcard",
							],
						],
						function (button) {
							return _status.event.player.getUseValue({
								name: button.link[2],
								nature: button.link[3],
							});
						},
						function (button) {
							return _status.event.player.hasUseTarget({
								name: button.link[2],
								nature: button.link[3],
							});
						}
					);
					"step 1";
					if (!result.bool) player.draw();
					else player.chooseUseTarget({ name: result.links[0][2], isCard: true, nature: result.links[0][3] }, true);
				},
			},
			zhiyi: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				forced: true,
				filter: function (event, player) {
					if (get.type(event.card) != "basic") return false;
					var history = player
						.getHistory("useCard", function (evt) {
							return get.type(evt.card) == "basic";
						})
						.concat(
							player.getHistory("respond", function (evt) {
								return get.type(evt.card) == "basic";
							})
						);
					return history.length == 1 && history[0] == event;
				},
				content: function () {
					"step 0";
					var info = get.info(trigger.card);
					if (!info || !info.enable) event._result = { index: 0 };
					else {
						var evt = trigger;
						if (evt.respondTo && evt.getParent("useCard").name == "useCard") evt = evt.getParent("useCard");
						event.evt = evt;
						player
							.chooseControl()
							.set("prompt", "执义：请选择一项")
							.set("choiceList", [
								"摸一张牌",
								"于" +
									get.translation(evt.card) +
									"的使用结算结束之后视为使用一张" +
									get.translation({
										name: trigger.card.name,
										nature: trigger.card.nature,
										isCard: true,
									}),
							])
							.set("ai", function () {
								return _status.event.choice;
							})
							.set(
								"choice",
								(function () {
									var card = {
										name: trigger.card.name,
										nature: trigger.card.nature,
										isCard: true,
									};
									if (card.name == "sha") {
										if (player.getUseValue(card) > 0) return 1;
									} else if (card.name == "tao") {
										var hp = player.maxHp - player.hp;
										if (trigger.targets.includes(player)) hp--;
										return hp > 0 ? 1 : 0;
									}
									return 0;
								})()
							);
					}
					"step 1";
					if (result.index == 0) {
						player.draw();
					} else {
						var next = player.chooseUseTarget({ name: trigger.card.name, nature: trigger.card.nature, isCard: true }, false, true);
						_status.event.next.remove(next);
						event.evt.after.push(next);
						next.logSkill = "zhiyi";
					}
				},
			},
			//表演测试
			qiaosi_map: { charlotte: true },
			qiaosi: {
				audio: "xinfu_qiaosi",
				derivation: "qiaosi_map",
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						game.pause();
						game.countChoose();
						setTimeout(function () {
							_status.imchoosing = false;
							event._result = {
								bool: true,
								links: ["qiaosi_c1", "qiaosi_c6"].concat(["qiaosi_c2", "qiaosi_c3", "qiaosi_c4", "qiaosi_c5"].randomGets(1)),
							};
							if (event.dialog) event.dialog.close();
							if (event.controls) {
								for (var i of event.controls) i.close();
							}
							game.resume();
						}, 5000);
					};
					var createDialog = function (player, id) {
						if (player == game.me) return;
						var str = get.translation(player) + "正在表演...<br>";
						for (var i = 1; i < 7; i++) {
							str += get.translation("qiaosi_c" + i);
							if (i % 3 != 0) str += "　　";
							if (i == 3) str += "<br>";
						}
						ui.create.dialog(str, "forcebutton").videoId = id;
					};
					var chooseButton = function (player) {
						var event = _status.event;
						player = player || event.player;
						event.status = {
							qiaosi_c1: 0,
							qiaosi_c2: 0,
							qiaosi_c3: 0,
							qiaosi_c4: 0,
							qiaosi_c5: 0,
							qiaosi_c6: 0,
						};
						event.map = {
							qiaosi_c1: [40, 60],
							qiaosi_c2: [80, 120],
							qiaosi_c3: [90, 110],
							qiaosi_c4: [90, 110],
							qiaosi_c5: [80, 120],
							qiaosi_c6: [40, 60],
						};
						event.finishedx = [];
						event.str = '请开始你的表演<br><img src="' + lib.assetURL + 'image/card/qiaosi_card1.png" width="60" height="60">qiaosi_c1% <img src="' + lib.assetURL + 'image/card/qiaosi_card2.png" width="60" height="60">qiaosi_c2% <img src="' + lib.assetURL + 'image/card/qiaosi_card3.png" width="60" height="60">qiaosi_c3%<br><img src="' + lib.assetURL + 'image/card/qiaosi_card4.png" width="60" height="60">qiaosi_c4%<img src="' + lib.assetURL + 'image/card/qiaosi_card5.png" width="60" height="60">qiaosi_c5% <img src="' + lib.assetURL + 'image/card/qiaosi_card6.png" width="60" height="60">qiaosi_c6%';
						event.dialog = ui.create.dialog(event.str, "forcebutton", "hidden");
						event.dialog.addText("<li>点击下方的按钮，可以增加按钮对应的角色的「表演完成度」。对于不同的角色，点击时增加的完成度不同，最终获得的牌也不同。一次表演最多只能完成3名角色的进度。", false);
						event.dialog.open();
						for (var i in event.status) {
							event.dialog.content.childNodes[0].innerHTML = event.dialog.content.childNodes[0].innerHTML.replace(i, event.status[i]);
						}
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add("pointerdiv");
						}
						(event.switchToAuto = function () {
							event._result = {
								bool: true,
								links: event.finishedx.slice(0),
							};
							event.dialog.close();
							for (var i of event.controls) i.close();
							game.resume();
							_status.imchoosing = false;
						}),
							(event.controls = []);
						for (var i = 1; i <= 6; i++)
							event.controls.push(
								ui.create.control("qiaosi_c" + i, function (link) {
									var event = _status.event;
									if (event.finishedx.includes(link)) return;
									event.status[link] += get.rand.apply(get, event.map[link]);
									if (event.status[link] >= 100) {
										event.status[link] = 100;
										var str = event.str.slice(0);
										for (var i in event.status) {
											str = str.replace(i, event.status[i]);
										}
										event.dialog.content.childNodes[0].innerHTML = str;
										event.finishedx.push(link);
										if (event.finishedx.length >= 3) {
											event._result = {
												bool: true,
												links: event.finishedx.slice(0),
											};
											event.dialog.close();
											for (var i of event.controls) i.close();
											game.resume();
											_status.imchoosing = false;
										}
									} else {
										var str = event.str.slice(0);
										for (var i in event.status) {
											str = str.replace(i, event.status[i]);
										}
										event.dialog.content.childNodes[0].innerHTML = str;
									}
								})
							);
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add("selectable");
						}
						game.pause();
						game.countChoose();
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId);
					if (event.isMine()) {
						chooseButton();
					} else if (event.isOnline()) {
						event.player.send(chooseButton, event.player);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					game.broadcastAll("closeDialog", event.videoId);
					var map = event.result || result;
					//game.print(map);
					if (!map || !map.bool || !map.links) {
						game.log(player, "表演失败");
						event.finish();
						return;
					}
					var list = map.links;
					if (!list.length) {
						game.log(player, "表演失败");
						event.finish();
						return;
					}
					var cards = [];
					var list2 = [];
					if (list.includes("qiaosi_c1")) {
						list2.push("trick");
						list2.push("trick");
					}
					if (list.includes("qiaosi_c2")) {
						if (list.includes("qiaosi_c1")) list2.push(["sha", "jiu"]);
						else list2.push(Math.random() < 0.66 ? "equip" : ["sha", "jiu"]);
					}
					if (list.includes("qiaosi_c3")) {
						list2.push([Math.random() < 0.66 ? "sha" : "jiu"]);
					}
					if (list.includes("qiaosi_c4")) {
						list2.push([Math.random() < 0.66 ? "shan" : "tao"]);
					}
					if (list.includes("qiaosi_c5")) {
						if (list.includes("qiaosi_c6")) list2.push(["shan", "tao"]);
						else list2.push(Math.random() < 0.66 ? "trick" : ["shan", "tao"]);
					}
					if (list.includes("qiaosi_c6")) {
						list2.push("equip");
						list2.push("equip");
					}
					while (list2.length) {
						var filter = list2.shift();
						var card = get.cardPile(function (x) {
							if (cards.includes(x)) return false;
							if (typeof filter == "string" && get.type(x, "trick") == filter) return true;
							if (typeof filter == "object" && filter.includes(x.name)) return true;
						});
						if (card) cards.push(card);
						else {
							var card = get.cardPile(function (x) {
								return !cards.includes(x);
							});
							if (card) cards.push(card);
						}
					}
					if (cards.length) {
						event.cards = cards;
						event.num = cards.length;
						player.showCards(cards);
					} else event.finish();
					"step 2";
					player.gain(event.cards, "gain2");
					"step 3"
					if (!player.countCards("he")) event.finish();
					else player.chooseControl().set("choiceList", ["将" + get.cnNumber(event.num) + "张牌交给一名其他角色", "弃置" + get.cnNumber(event.num) + "张牌"]).set("ai", function () {
						if (game.hasPlayer(function (current) {
							return current != player && get.attitude(player, current) > 2;
						})) return 0;
						return 1;
					});
					"step 4";
					if (result.index == 0) {
						player.chooseCardTarget({
							position: "he",
							filterCard: true,
							selectCard: Math.min(event.num, player.countCards("he")),
							filterTarget: function (card, player, target) {
								return player != target;
							},
							ai1: function (card) {
								return 1;
							},
							ai2: function (target) {
								var att = get.attitude(_status.event.player, target);
								if (target.hasSkillTag("nogain")) att /= 10;
								if (target.hasJudge("lebu")) att /= 5;
								return att;
							},
							prompt: "选择" + get.cnNumber(event.num) + "张牌，交给一名其他角色。",
							forced: true,
						});
					} else {
						player.chooseToDiscard(event.num, true, "he");
						event.finish();
					}
					"step 5";
					if (result.bool) {
						var target = result.targets[0];
						player.give(result.cards, target);
					}
				},
				ai: {
					order: 10,
					result: { player: 1 },
					threaten: 3.2,
				},
			},
			refuhai: {
				audio: "xinfu_fuhai",
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					event.current = player.next;
					event.upper = [];
					event.lower = [];
					event.acted = [];
					event.num = 0;
					event.stopped = false;
					"step 1";
					event.acted.push(event.current);
					event.current.chooseControl("潮起", "潮落").set("prompt", "潮鸣起乎？潮鸣落乎？").ai = function () {
						return Math.random() < 0.5 ? 0 : 1;
					};
					"step 2";
					if (!event.chosen) event.chosen = result.control;
					if (event.chosen != result.control) event.stopped = true;
					if (!event.stopped) event.num++;
					if (result.control == "潮起") {
						event.upper.push(event.current);
					} else event.lower.push(event.current);
					event.current = event.current.next;
					if (event.current != player && !event.acted.includes(event.current)) event.goto(1);
					"step 3";
					for (var i = 0; i < event.acted.length; i++) {
						var bool = event.upper.includes(event.acted[i]);
						game.log(event.acted[i], "选择了", bool ? "#g潮起" : "#y潮落");
						event.acted[i].popup(bool ? "潮起" : "潮落", bool ? "wood" : "orange");
					}
					game.delay(1);
					"step 4";
					if (num > 1) player.draw(num);
				},
				ai: {
					order: 10,
					result: { player: 1 },
				},
			},
			rebiaozhao: {
				audio: "biaozhao",
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				trigger: {
					player: "phaseJieshuBegin",
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 0 && !player.getExpansions("rebiaozhao").length;
				},
				content: function () {
					"step 0";
					player.chooseCard("he", get.prompt("rebiaozhao"), "将一张牌置于武将牌上作为“表”").ai = function (card) {
						return 6 - get.value(card);
					};
					"step 1";
					if (result.bool) {
						player.logSkill("rebiaozhao");
						player.addToExpansion(player, result.cards).gaintag.add("rebiaozhao");
					}
				},
				intro: {
					markcount: "expansion",
					mark(dialog, content, player) {
						var content = player.getExpansions("rebiaozhao");
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								dialog.addAuto(content);
							} else {
								return "共有" + get.cnNumber(content.length) + "张表";
							}
						}
					},
					content(content, player) {
						var content = player.getExpansions("rebiaozhao");
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								return get.translation(content);
							}
							return "共有" + get.cnNumber(content.length) + "张表";
						}
					},
				},
				ai: { notemp: true },
				group: ["rebiaozhao2", "rebiaozhao3"],
			},
			rebiaozhao2: {
				trigger: {
					global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
				},
				forced: true,
				audio: "biaozhao",
				sourceSkill: "rebiaozhao",
				filter: function (event, player) {
					var cards = player.getExpansions("rebiaozhao"),
						cards2 = event.getd();
					if (!cards.length || !cards2.length) return false;
					var num = get.number(cards[0]);
					var cards = event.getd();
					for (var card of cards) {
						if (get.number(card) == num) return true;
					}
					return false;
				},
				content: function () {
					player.loseToDiscardpile(player.getExpansions("rebiaozhao"));
					player.loseHp();
				},
			},
			rebiaozhao3: {
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				forced: true,
				charlotte: true,
				audio: "biaozhao",
				sourceSkill: "rebiaozhao",
				filter: function (event, player) {
					return player.getExpansions("rebiaozhao").length > 0;
				},
				content: function () {
					"step 0";
					player.loseToDiscardpile(player.getExpansions("rebiaozhao"));
					"step 1";
					player.chooseTarget("令一名角色摸三张牌并回复1点体力", true).ai = function (target) {
						var num = 2;
						if (target.isDamaged()) num++;
						return num * get.attitude(_status.event.player, target);
					};
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.draw(3);
						target.recover();
					}
				},
			},
			reqianxin: {
				audio: "xinfu_qianxin",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				selectCard: function () {
					return [1, Math.min(2, game.players.length - 1)];
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					var targets = game
						.filterPlayer(function (current) {
							return current != player;
						})
						.randomGets(cards.length);
					var map = [];
					for (var i = 0; i < targets.length; i++) {
						var target = targets[i];
						target.addSkill("reqianxin2");
						target.storage.reqianxin2.push([cards[i], player]);
						map.push([target, cards[i]]);
					}
					game.loseAsync({
						gain_list: map,
						player: player,
						cards: cards,
						giver: player,
						animate: "giveAuto",
					}).setContent("gaincardMultiple");
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			reqianxin2: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "reqianxin",
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				filter: function (event, player) {
					var list = player.storage.reqianxin2;
					if (Array.isArray(list)) {
						var hs = player.getCards("h");
						for (var i = 0; i < list.length; i++) {
							if (hs.includes(list[i][0]) && list[i][1].isIn()) return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var current = player.storage.reqianxin2.shift();
					event.source = current[1];
					if (!event.source.isIn() || !player.getCards("h").includes(current[0])) event.goto(3);
					"step 1";
					source.logSkill("reqianxin", player);
					player
						.chooseControl()
						.set("choiceList", ["令" + get.translation(source) + "摸两张牌", "令自己本回合的手牌上限-2"])
						.set("prompt", get.translation(source) + "发动了【遣信】，请选择一项")
						.set("source", source)
						.set("ai", function () {
							var player = _status.event.player;
							if (get.attitude(player, _status.event.source) > 0) return 0;
							if (player.maxHp - player.countCards("h") > 1) return 1;
							return Math.random() > 0.5 ? 0 : 1;
						});
					"step 2";
					if (result.index == 0) source.draw(2);
					else {
						player.addTempSkill("reqianxin3");
						player.addMark("reqianxin3", 2, false);
					}
					"step 3";
					if (player.storage.reqianxin2.length) event.goto(0);
					else player.removeSkill("reqianxin2");
				},
			},
			reqianxin3: {
				onremove: true,
				mod: {
					maxHandcard: function (player, num) {
						return num - player.countMark("reqianxin3");
					},
				},
			},
			renshi: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				forced: true,
				filter: function (event, player) {
					return player.isDamaged() && event.card && event.card.name == "sha";
				},
				content: function () {
					"step 0";
					trigger.cancel();
					if (trigger.cards) {
						var cards = trigger.cards.filterInD();
						if (cards.length) player.gain(cards, "gain2", "log");
					}
					"step 1";
					player.loseMaxHp();
				},
				ai: {
					halfneg: true,
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.card && arg.card.name == "sha") return true;
						return false;
					},
				},
			},
			wuyuan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h", "sha") > 0;
				},
				filterCard: { name: "sha" },
				filterTarget: lib.filter.notMe,
				check: function (card) {
					var player = _status.event.player;
					if (
						get.color(card) == "red" &&
						game.hasPlayer(function (current) {
							return current != player && current.isDamaged() && get.attitude(player, current) > 2;
						})
					)
						return 2;
					if (get.natureList(card).length) return 1.5;
					return 1;
				},
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					"step 0";
					player.give(cards, target, "give");
					player.recover();
					"step 1";
					var num = 1;
					if (get.natureList(cards[0]).length) num++;
					target.draw(num);
					if (get.color(cards[0]) == "red") target.recover();
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							if (player.isDamaged()) return 1;
							return 0;
						},
						target: function (player, target) {
							if (ui.selected.cards.length) {
								var num = 1;
								if (get.natureList(ui.selected.cards[0]).length) num++;
								if (target.hasSkillTag("nogain")) num = 0;
								if (get.color(ui.selected.cards[0]) == "red") return num + 2;
								else return num + 1;
							}
							return 1;
						},
					},
				},
			},
			huaizi: {
				mod: {
					maxHandcardBase: function (player, num) {
						return player.maxHp;
					},
				},
				//audio:2,
				//trigger:{player:'phaseDiscardBegin'},
				forced: true,
				firstDo: true,
				filter: function (event, player) {
					return player.isDamaged() && player.countCards("h") > player.hp;
				},
				content: function () {},
			},
			rexushen: {
				derivation: ["new_rewusheng", "redangxian"],
				audio: "xinfu_xushen",
				limited: true,
				enable: "phaseUse",
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.hasSex("male");
					});
				},
				skillAnimation: true,
				animationColor: "fire",
				content: function () {
					player.addSkill("rexushen2");
					player.awakenSkill("rexushen");
					player.loseHp(
						game.countPlayer(function (current) {
							return current.hasSex("male");
						})
					);
				},
				ai: {
					order: 10,
					result: {
						player: function (player) {
							if (
								player.hp !=
								game.countPlayer(function (current) {
									return current.hasSex("male");
								})
							)
								return 0;
							return game.hasPlayer(function (current) {
								return get.attitude(player, current) > 4 && current.countCards("h", "tao");
							})
								? 1
								: 0;
						},
					},
				},
			},
			rexushen2: {
				charlotte: true,
				subSkill: {
					count: {
						trigger: {
							player: "recoverBegin",
						},
						forced: true,
						silent: true,
						popup: false,
						filter: function (event, player) {
							if (!event.source) return false;
							if (!player.isDying()) return false;
							var evt = event.getParent("dying").getParent(2);
							return evt.name == "rexushen" && evt.player == player;
						},
						content: function () {
							trigger.rexushen = true;
						},
						sub: true,
					},
				},
				group: ["rexushen2_count"],
				trigger: {
					player: "recoverAfter",
				},
				sourceSkill: "rexushen",
				filter: function (event, player) {
					if (player.isDying()) return false;
					return event.rexushen == true;
				},
				direct: true,
				silent: true,
				popup: false,
				content: function () {
					"step 0";
					player.removeSkill("rexushen2");
					player.chooseBool("是否令" + get.translation(trigger.source) + "获得技能〖武圣〗和〖当先〗").ai = function () {
						return get.attitude(player, trigger.source) > 0;
					};
					"step 1";
					if (result.bool) {
						player.line(trigger.source, "fire");
						trigger.source.addSkills(["new_rewusheng", "redangxian"]);
					}
				},
			},
			rezhennan: {
				audio: "xinfu_zhennan",
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					return event.player != player && event.targets && event.targets.length && event.targets.length > event.player.hp;
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard(get.prompt("rezhennan", trigger.player), "弃置一张牌并对其造成1点伤害", "he");
					next.set("logSkill", ["rezhennan", trigger.player]);
					next.set("ai", function (card) {
						var player = _status.event.player;
						var target = _status.event.getTrigger().player;
						if (get.damageEffect(target, player, player) > 0) return 7 - get.value(card);
						return -1;
					});
					"step 1";
					if (result.bool) trigger.player.damage();
				},
			},
			meiyong: {
				inherit: "xinfu_wuniang",
				audio: "xinfu_wuniang",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("meiyong"), "获得一名其他角色区域内的一张牌，然后其摸一张牌。", function (card, player, target) {
							if (player == target) return false;
							return target.countGainableCards(player, "hej") > 0;
						})
						.set("ai", function (target) {
							return 10 - get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("meiyong", target);
						player.gainPlayerCard(target, "hej", true);
					} else event.finish();
					"step 2";
					target.draw();
				},
			},
			relianji: {
				audio: "wylianji",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.players.length > 1;
				},
				filterTarget: lib.filter.notMe,
				targetprompt: ["打人", "被打"],
				selectTarget: 2,
				multitarget: true,
				content: function () {
					"step 0";
					game.delay(0.5);
					if (!targets[0].hasEquipableSlot(1)) event.goto(2);
					"step 1";
					let target = targets[0];
					let equip1 = get.cardPile2(card=>card.name=="qinggang");
					if(!equip1 || Math.random()>0.5){
						equip1 = get.cardPile2(function (card) {
							return get.subtype(card) == "equip1" && target.canUse(card, target);
						});
					}
					if (!equip1) {
						player.popup("连计失败");
						game.log("牌堆中无装备");
						event.finish();
						return;
					}
					if (equip1.name == "qinggang" && !lib.inpile.includes("qibaodao")) {
						game.broadcastAll(function (card) {
							card.init([card.suit, card.number, "qibaodao"]);
						}, equip1);
					}
					target.$draw(equip1);
					target.chooseUseTarget(equip1, "noanimate", "nopopup", true);
					"step 2";
					game.updateRoundNumber();
					var list = ["nanman", "wanjian", "huogong", "juedou", "sha"];
					var list2 = game.players.slice(0);
					// list2.remove(player);
					for (var i = 0; i < list.length; i++) {
						if (!targets[0].canUse(list[i], targets[1], false)) list.splice(i--, 1);
					}
					if (!list.length) return;
					var name = list.randomGet();
					if (name == "nanman" || name == "wanjian") {
						for (var i = 0; i < list2.length; i++) {
							if (!targets[0].canUse(name, list2[i], false)) list2.splice(i--, 1);
						}
					} else list2 = targets[1];
					targets[0].useCard({ name: name, isCard: true }, list2, "noai");
					game.delay(0.5);
				},
				ai: {
					order: 8,
					result: {
						target: function (player, target) {
							if (ui.selected.targets.length == 0) {
								return 1;
							} else {
								return -1;
							}
						},
					},
					expose: 0.4,
					threaten: 3,
				},
				group: "relianji_count",
				subSkill: {
					count: {
						sub: true,
						forced: true,
						popup: false,
						silent: true,
						trigger: { global: "damageEnd" },
						filter: function (event, player) {
							var evt = event.getParent(3);
							return evt && evt.name == "relianji" && evt.player == player;
						},
						content: function () {
							if (!player.storage.relianji) player.storage.relianji = 0;
							player.storage.relianji++;
							event.trigger("remoucheng_awaken");
						},
					},
				},
			},
			remoucheng: {
				derivation: "jingong",
				trigger: {
					player: "remoucheng_awaken",
				},
				forced: true,
				filter: function (event, player) {
					return player.storage.relianji && player.storage.relianji > 2;
				},
				audio: "moucheng",
				juexingji: true,
				skillAnimation: true,
				animationColor: "thunder",
				content: function () {
					player.awakenSkill("remoucheng");
					player.changeSkills(["jingong"], ["relianji"]);
					player.gainMaxHp();
					player.recover();
				},
				ai: {
					combo: "relianji",
				},
			},
			shouye: {
				audio: 2,
				group: "shouye_after",
				trigger: { target: "useCardToTarget" },
				filter: function (event, player) {
					return event.player != player && event.targets.length == 1;
				},
				check: function (event, player) {
					if (event.player == game.me || event.player.isOnline()) return get.attitude(player, event.player) < 0;
					return get.effect(player, event.card, event.player, player) < 0;
				},
				usable: 1,
				logTarget: "player",
				content: function () {
					"step 0";
					player.line(trigger.player, "green");
					player.chooseToDuiben(trigger.player);
					"step 1";
					if (result.bool) {
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.getParent().shouyeer = player;
					}
				},
				subSkill: {
					after: {
						sub: true,
						trigger: { global: "useCardAfter" },
						forced: true,
						silent: true,
						popup: false,
						filter: function (event, player) {
							if (event.shouyeer != player) return false;
							if (event.cards) {
								for (var i = 0; i < event.cards.length; i++) {
									if (event.cards[i].isInPile()) return true;
								}
							}
							return false;
						},
						content: function () {
							var list = [];
							for (var i = 0; i < trigger.cards.length; i++) {
								if (trigger.cards[i].isInPile()) {
									list.push(trigger.cards[i]);
								}
							}
							player.gain(list, "gain2", "log");
						},
					},
				},
			},
			liezhi: {
				audio: 2,
				group: "liezhi_damage",
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return !player.hasSkill("liezhi_disable");
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("liezhi"), "弃置至多两名其他角色区域内的各一张牌", [1, 2], function (card, player, target) {
						return target != player && target.countDiscardableCards(player, "hej") > 0;
					}).ai = function (target) {
						var player = _status.event.player;
						return get.effect(target, { name: "guohe" }, player, player);
					};
					"step 1";
					if (result.bool) {
						result.targets.sortBySeat();
						event.targets = result.targets;
						player.line(result.targets, "green");
						player.logSkill("liezhi", result.targets);
					} else event.finish();
					"step 2";
					event.current = targets.shift();
					player.discardPlayerCard(event.current, "hej", true);
					if (targets.length) event.redo();
				},
				subSkill: {
					disable: {
						sub: true,
						trigger: { player: "phaseAfter" },
						forced: true,
						silent: true,
						popup: false,
						charlotte: true,
						//filter:function(event){return !event.liezhi},
						content: function () {
							player.removeSkill("liezhi_disable");
						},
					},
					damage: {
						trigger: { player: "damage" },
						forced: true,
						silent: true,
						popup: false,
						content: function () {
							player.addSkill("liezhi_disable");
						},
					},
				},
			},
			xinzhanyi: {
				audio: "zhanyi",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				position: "he",
				check: function (card) {
					var player = _status.event.player;
					if (player.hp < 3) return 0;
					var type = get.type(card, "trick");
					if (type == "trick") {
						return 6 - get.value(card);
					} else if (type == "equip") {
						if (
							player.hasSha() &&
							game.hasPlayer(function (current) {
								return player.canUse("sha", current) && get.attitude(player, current) < 0 && get.effect(current, { name: "sha" }, player, player) > 0;
							})
						) {
							return 6 - get.value(card);
						}
					}
					return 0;
				},
				content: function () {
					player.loseHp();
					switch (get.type(cards[0], "trick", cards[0].original == "h" ? player : false)) {
						case "basic":
							player.addTempSkill("xinzhanyi_basic");
							player.addMark("xinzhanyi_basic1", 1, false);
							break;
						case "equip":
							player.addTempSkill("xinzhanyi_equip");
							break;
						case "trick":
							player.addTempSkill("xinzhanyi_trick");
							player.draw(3);
							break;
					}
				},
				ai: {
					order: 9.1,
					result: {
						player: 1,
					},
				},
			},
			xinzhanyi_basic1: {
				trigger: { player: "useCard" },
				sourceSkill: "xinzhanyi",
				filter: function (event, player) {
					return get.type(event.card, null, false) == "basic" && player.hasMark("xinzhanyi_basic1");
				},
				forced: true,
				silent: true,
				popup: false,
				content: function () {
					if (!trigger.baseDamage) trigger.baseDamage = 1;
					var num = player.countMark("xinzhanyi_basic1");
					trigger.baseDamage += num;
					player.removeMark("xinzhanyi_basic1", num, false);
					game.log(trigger.card, "的伤害值/回复值", "#y+" + num);
				},
			},
			xinzhanyi_basic: {
				group: ["xinzhanyi_basic1"],
				sourceSkill: "xinzhanyi",
				onremove: function (p, s) {
					delete p.storage[s + 1];
				},
				hiddenCard: function (player, name) {
					return get.type(name) == "basic" && player.countCards("h", { type: "basic" }) > 0;
				},
				enable: "chooseToUse",
				filter: function (event, player) {
					if (
						!player.hasCard(function (card) {
							return get.type(card) == "basic";
						}, "hs")
					)
						return false;
					for (var name of lib.inpile) {
						if (get.type(name) != "basic") continue;
						if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) != "basic") continue;
							if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
							if (name != "sha") continue;
							for (var j of lib.inpile_nature) {
								if (event.filterCard({ name: name, nature: j }, player, event)) list.push(["基本", "", "sha", j]);
							}
						}
						return ui.create.dialog("战意", [list, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], nature: button.link[3] };
						if (
							game.hasPlayer(function (current) {
								return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
							})
						) {
							switch (button.link[2]) {
								case "tao":
									return 5;
								case "jiu": {
									if (player.countCards("hs", { type: "basic" }) >= 2) return 3;
									return 0;
								}
								case "sha":
									if (button.link[3] == "fire") return 2.95;
									else if (button.link[3] == "thunder" || button.link[3] == "ice") return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup: function (links, player) {
						return {
							audio: "zhanyi",
							filterCard: function (card, player, target) {
								return get.type(card) == "basic";
							},
							check: function (card, player, target) {
								return 9 - get.value(card);
							},
							viewAs: { name: links[0][2], nature: links[0][3] },
							position: "hs",
							popname: true,
						};
					},
					prompt: function (links, player) {
						return "将一张基本牌当做" + get.translation(links[0][3] || "") + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					order: function () {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard({ name: "jiu" }, player, event) && get.effect(player, { name: "jiu" }) > 0 && player.countCards("hs", { type: "basic" }) >= 2) {
							return 3.3;
						}
						return 3.1;
					},
					respondSha: true,
					skillTagFilter: function (player, tag, arg) {
						if (
							player.hasCard(function (card) {
								return get.type(card) == "basic";
							}, "hs")
						) {
							if (tag == "respondSha") {
								if (arg != "use") return false;
							}
						} else {
							return false;
						}
					},
					result: {
						player: 1,
					},
				},
			},
			xinzhanyi_equip: {
				audio: "zhanyi",
				trigger: { player: "useCardToPlayered" },
				forced: true,
				sourceSkill: "xinzhanyi",
				filter: function (event, player) {
					return event.card.name == "sha" && event.target.countCards("he") > 0 && event.targets.length == 1;
				},
				check: function (event, player) {
					return get.attitude(player, event.target) < 0;
				},
				content: function () {
					"step 0";
					trigger.target.chooseToDiscard("he", true, 2);
					"step 1";
					if (result.bool && result.cards && result.cards.length) {
						const cards = result.cards.filterInD("d");
						if (cards.length == 1) {
							event._result = { bool: true, links: result.cards.slice(0) };
						} else if (cards.length > 1) {
							player.chooseButton(["选择获得其中的一张牌", result.cards.slice(0)], true).set("ai", function (button) {
								return get.value(button.link);
							});
						} else event.finish();
					} else event.finish();
					"step 2";
					if (result.links) player.gain(result.links, "gain2");
				},
			},
			xinzhanyi_trick: {
				mod: {
					wuxieRespondable: function () {
						return false;
					},
				},
			},
			xinfu_daigong: {
				usable: 1,
				audio: 2,
				trigger: {
					player: "damageBegin4",
				},
				filter: function (event, player) {
					return event.source != undefined && player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.showHandcards();
					"step 1";
					var cards = player.getCards("h");
					var suits = [];
					for (var i = 0; i < cards.length; i++) {
						suits.add(get.suit(cards[i]));
					}
					trigger.source
						.chooseCard("he", "交给" + get.translation(player) + "一张满足条件的牌，否则防止此伤害。", function (card) {
							return !_status.event.suits.includes(get.suit(card));
						})
						.set("suits", suits).ai = function (card) {
						var player = _status.event.player;
						var target = _status.event.getParent("xinfu_daigong").player;
						if (get.damageEffect(target, player, player) > 0) return 6.5 - get.value(card);
						return 0;
					};
					"step 2";
					if (result.bool) {
						trigger.source.give(result.cards, player, true);
					} else trigger.cancel();
				},
			},
			xinfu_zhaoxin: {
				group: ["zhaoxin_give"],
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filter: function (event, player) {
					return player.countCards("he") > 0 && player.getExpansions("xinfu_zhaoxin").length < 3;
				},
				filterCard: true,
				selectCard: function () {
					var player = _status.event.player;
					return [1, 3 - player.getExpansions("xinfu_zhaoxin").length];
				},
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					player.addToExpansion(player, "give", cards).gaintag.add("xinfu_zhaoxin");
					player.draw(cards.length);
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			zhaoxin_give: {
				trigger: {
					global: "phaseDrawAfter",
				},
				filter: function (event, player) {
					if (!player.getExpansions("xinfu_zhaoxin").length) return false;
					return player == event.player || player.inRange(event.player);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseCardButton(get.prompt("xinfu_zhaoxin", trigger.player), player.getExpansions("xinfu_zhaoxin"), function (button) {
							return true;
						})
						.set("ai", function (button) {
							return 1 + Math.random();
						});
					"step 1";
					if (result.bool) {
						event.card = result.links[0];
						player.logSkill("xinfu_zhaoxin", target);
						player.line(trigger.player, "thunder");
						player.showCards(event.card);
					} else event.finish();
					"step 2";
					trigger.player.chooseBool("是否获得" + get.translation(event.card) + "?").ai = function () {
						return get.attitude(trigger.player, player) > 0;
					};
					"step 3";
					if (result.bool) {
						trigger.player.gain(event.card, "give", player, "bySelf");
						player.chooseBool("是否对" + get.translation(trigger.player) + "造成1点伤害？").ai = function () {
							return get.damageEffect(trigger.player, player, player) > 0;
						};
					} else {
						trigger.player.chat("拒绝");
						event.finish();
					}
					"step 4";
					if (result.bool) {
						trigger.player.damage("nocard");
					}
				},
			},
			xinfu_qianchong: {
				audio: 1,
				group: ["qc_weimu", "qc_mingzhe"],
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						mod: {
							cardUsable: function (card, player) {
								var type = get.type2(card);
								if (player.getStorage("xinfu_qianchong_effect").includes(type)) return Infinity;
							},
							targetInRange: function (card, player) {
								var type = get.type2(card);
								if (player.getStorage("xinfu_qianchong_effect").includes(type)) return true;
							},
						},
					},
				},
				trigger: {
					player: "phaseUseBegin",
				},
				direct: true,
				derivation: ["qc_weimu", "qc_mingzhe"],
				filter: function (event, player) {
					var es = player.getCards("e");
					if (!es.length) return true;
					var col = get.color(es[0]);
					for (var i = 0; i < es.length; i++) {
						if (get.color(es[i]) != col) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					var list = ["basic", "trick", "equip", "cancel2"];
					list.removeArray(player.getStorage("xinfu_qianchong_effect"));
					if (list.length > 1) {
						player
							.chooseControl(list)
							.set("ai", function () {
								return list[0];
							})
							.set("prompt", get.prompt("xinfu_qianchong"))
							.set("prompt2", "你可以选择一种类别的牌，然后你本回合内使用该类别的牌时没有次数和距离限制。");
					} else event.finish();
					"step 1";
					if (result.control && result.control != "cancel2") {
						player.logSkill("xinfu_qianchong");
						var type = result.control;
						player.addTempSkill("xinfu_qianchong_effect");
						player.markAuto("xinfu_qianchong_effect", [type]);
						var str = get.translation(type) + "牌";
						game.log(player, "声明了", "#y" + str);
						player.popup(str, "thunder");
					}
				},
			},
			qc_weimu: {
				audio: true,
				trigger: { global: "useCard1" },
				forced: true,
				firstDo: true,
				filter(event, player) {
					if (player.hasSkill("weimu")) return false;
					if (event.player == player) return false;
					if (get.color(event.card) != "black" || get.type(event.card) != "trick") return false;
					var info = lib.card[event.card.name];
					return info && info.selectTarget && info.selectTarget == -1 && !info.toself;
				},
				async content() {},
				mod: {
					targetEnabled: function (card, player, target) {
						var bool = true;
						var es = target.getCards("e");
						if (!es.length) bool = false;
						for (var i = 0; i < es.length; i++) {
							if (get.color(es[i]) != "black") bool = false;
						}
						if (bool && (get.type(card) == "trick" || get.type(card) == "delay") && get.color(card) == "black") return false;
					},
				},
			},
			qc_mingzhe: {
				audio: true,
				trigger: {
					player: ["useCard", "respond", "loseAfter"],
					global: "loseAsyncAfter",
				},
				frequent: true,
				filter: function (event, player) {
					if (player.hasSkill("mingzhe")) return false;
					if (player == _status.currentPhase) return false;
					var es = player.getCards("e");
					if (!es.length) return false;
					for (var i = 0; i < es.length; i++) {
						if (get.color(es[i]) != "red") return false;
					}
					if (event.name.indexOf("lose") != 0) return get.color(event.card) == "red";
					if (event.type != "discard") return false;
					var evt = event.getl(player);
					if (evt.cards2) {
						for (var i = 0; i < evt.cards2.length; i++) {
							if (get.color(evt.cards2[i]) == "red") return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					event.count = 1;
					if (trigger.name.indexOf("lose") == 0) {
						event.count = 0;
						var evt = trigger.getl(player);
						for (var i = 0; i < evt.cards2.length; i++) {
							if (get.color(evt.cards2[i]) == "red") event.count++;
						}
					}
					"step 1";
					player.draw();
					event.count--;
					"step 2";
					if (event.count && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
						player.chooseBool(get.prompt2("mingzhe")).set("frequentSkill", event.name);
					} else event.finish();
					"step 3";
					if (result.bool) {
						player.logSkill("qc_mingzhe");
						event.goto(1);
					}
				},
				ai: {
					threaten: 0.7,
				},
			},
			xinfu_shangjian: {
				trigger: {
					global: "phaseJieshuBegin",
				},
				audio: 2,
				filter: function (event, player) {
					var num = 0;
					player.getHistory("lose", function (evt) {
						var evt2 = evt.getParent();
						if (evt2.name == "useCard" && evt2.player == player && get.type(evt2.card, null, false) == "equip") return;
						if (evt.cards2) num += evt.cards2.length;
					});
					return num > 0 && num <= player.hp;
				},
				forced: true,
				content: function () {
					"step 0";
					var num = 0;
					player.getHistory("lose", function (evt) {
						var evt2 = evt.getParent();
						if (evt2.name == "useCard" && evt2.player == player && get.type(evt2.card, null, false) == "equip") return;
						if (evt.cards2) num += evt.cards2.length;
					});
					if (num > 0) {
						player.draw(num);
					}
				},
			},
			rw_bagua_skill: {
				inherit: "bagua_skill",
				audio: true,
				content: function () {
					"step 0";
					player.judge("rewrite_bagua", function (card) {
						return get.suit(card) != "spade" ? 1.5 : -0.5;
					}).judge2 = function (result) {
						return result.bool;
					};
					"step 1";
					if (result.judge > 0) {
						trigger.untrigger();
						trigger.set("responded", true);
						trigger.result = { bool: true, card: { name: "shan" } };
					}
				},
			},
			rw_baiyin_skill: {
				inherit: "baiyin_skill",
				audio: true,
				subSkill: {
					lose: {
						audio: "rw_baiyin_skill",
						forced: true,
						charlotte: true,
						equipSkill: true,
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter: (event, player) => {
							if (player.hasSkillTag("unequip2")) return false;
							var evt = event.getl(player);
							return evt && evt.es.some(card => card.name == "rewrite_baiyin");
						},
						content: function () {
							var evt = trigger.getl(player);
							evt.es.forEach(card => {
								if (card.name == "rewrite_baiyin") {
									player.recover();
									player.draw(2);
								}
							});
						},
					},
				},
			},
			rw_lanyinjia: {
				inherit: "lanyinjia",
				audio: "lanyinjia",
			},
			rw_minguangkai_cancel: {
				inherit: "minguangkai_cancel",
			},
			rw_minguangkai_link: {
				inherit: "minguangkai_link",
				trigger: {
					player: "linkBefore",
				},
				forced: true,
				//priority:20,
				filter: function (event, player) {
					return !player.isLinked();
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (["tiesuo", "lulitongxin"].includes(card.name)) {
								return "zerotarget";
							}
						},
					},
				},
			},
			rw_renwang_skill: {
				inherit: "renwang_skill",
				audio: true,
				filter: function (event, player) {
					if (player.hasSkillTag("unequip2")) return false;
					if (
						event.player.hasSkillTag("unequip", false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					return event.card.name == "sha" && (get.suit(event.card) == "heart" || get.color(event.card) == "black");
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (typeof card !== "object" || target.hasSkillTag("unequip2")) return;
							if (
								player.hasSkillTag("unequip", false, {
									name: card ? card.name : null,
									target: player,
									card: card,
								}) ||
								player.hasSkillTag("unequip_ai", false, {
									name: card ? card.name : null,
									target: player,
									card: card,
								})
							)
								return;
							if (card.name == "sha" && ["spade", "club", "heart"].includes(get.suit(card))) return "zeroplayertarget";
						},
					},
				},
			},
			rw_tengjia1: {
				inherit: "tengjia1",
				audio: true,
			},
			rw_tengjia2: {
				inherit: "tengjia2",
				audio: true,
			},
			rw_tengjia3: {
				audio: "rw_tengjia1",
				inherit: "rw_minguangkai_link",
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (["tiesuo", "lulitongxin"].includes(card.name)) {
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			rw_tengjia4: {
				inherit: "tengjia3",
				audio: "rw_tengjia1",
			},
			xinfu_pingcai: {
				subSkill: { backup: {} },
				wolong_card: function () {
					"step 0";
					var ingame = game.hasPlayer(function (current) {
						return ["sp_zhugeliang", "re_sp_zhugeliang", "ol_sp_zhugeliang", "prp_zhugeliang"].includes(current.name) || ["sp_zhugeliang", "re_sp_zhugeliang", "ol_sp_zhugeliang", "prp_zhugeliang"].includes(current.name2);
					})
						? true
						: false;
					var prompt = "请选择";
					prompt += ingame ? "至多两名" : "一名";
					prompt += "角色，对其造成1点火焰伤害";
					var range = ingame ? [1, 2] : [1, 1];
					player.chooseTarget(prompt, range).set("ai", function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player, "fire");
					});
					"step 1";
					if (result.bool && result.targets.length) {
						player.line(result.targets, "fire");
						result.targets.sortBySeat();
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].damage("fire");
						}
					}
				},
				fengchu_card: function () {
					"step 0";
					var ingame = game.hasPlayer(function (current) {
						return ["re_pangtong", "pangtong", "ol_pangtong"].includes(current.name) || ["re_pangtong", "pangtong", "ol_pangtong"].includes(current.name2);
					})
						? true
						: false;
					var prompt = "请选择";
					prompt += ingame ? "至多四名" : "至多三名";
					prompt += "要横置的角色";
					var range = ingame ? [1, 4] : [1, 3];
					player
						.chooseTarget(prompt, range, (card, player, target) => {
							return !target.isLinked();
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "tiesuo" }, player, player);
						});
					"step 1";
					if (result.bool && result.targets.length) {
						player.line(result.targets, "green");
						result.targets.sortBySeat();
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].link();
						}
					}
				},
				xuanjian_card: function () {
					"step 0";
					event.ingame = game.hasPlayer(function (current) {
						return ["re_xushu", "xin_xushu", "xushu", "dc_xushu"].includes(current.name) || ["re_xushu", "xin_xushu", "xushu", "dc_xushu"].includes(current.name2);
					})
						? true
						: false;
					var prompt = "请选择一名角色，令其回复1点体力并摸一张牌";
					prompt += event.ingame ? "，然后你摸一张牌。" : "。";
					player.chooseTarget(prompt).set("ai", function (target) {
						var player = _status.event.player;
						return get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
					});
					"step 1";
					if (result.bool && result.targets.length) {
						var target = result.targets[0];
						player.line(target, "thunder");
						target.draw();
						target.recover();
						if (event.ingame) player.draw();
					}
				},
				shuijing_card: function () {
					"step 0";
					event.ingame = game.hasPlayer(function (current) {
						return current.name == "simahui" || current.name2 == "simahui";
					})
						? true
						: false;
					var prompt = "将一名角色装备区中的";
					prompt += event.ingame ? "一张牌" : "防具牌";
					prompt += "移动到另一名角色的装备区中";
					var next = player.chooseTarget(2, function (card, player, target) {
						if (ui.selected.targets.length) {
							if (!_status.event.ingame) {
								var cards = ui.selected.targets[0].getEquips(2);
								return cards.some(card => target.canEquip(card));
							}
							var from = ui.selected.targets[0];
							if (target.isMin()) return false;
							var es = from.getCards("e");
							for (var i = 0; i < es.length; i++) {
								if (target.canEquip(es[i])) return true;
							}
							return false;
						} else {
							if (!event.ingame) {
								if (target.getEquips(2).length) return true;
								return false;
							}
							return target.countCards("e") > 0;
						}
					});
					next.set("ingame", event.ingame);
					next.set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (ui.selected.targets.length == 0) {
							if (att < 0) {
								if (
									game.hasPlayer(function (current) {
										if (get.attitude(player, current) > 0) {
											var es = target.getCards("e");
											for (var i = 0; i < es.length; i++) {
												if (current.canEquip(es[i])) return true;
											}
											return false;
										}
									})
								)
									return -att;
							}
							return 0;
						}
						if (att > 0) {
							var es = ui.selected.targets[0].getCards("e");
							var i;
							for (i = 0; i < es.length; i++) {
								if (target.canEquip(es[i])) break;
							}
							if (i == es.length) return 0;
						}
						return -att * get.attitude(player, ui.selected.targets[0]);
					});
					next.set("multitarget", true);
					next.set("targetprompt", ["被移走", "移动目标"]);
					next.set("prompt", prompt);
					"step 1";
					if (result.bool) {
						player.line2(result.targets, "green");
						event.targets = result.targets;
					} else event.finish();
					"step 2";
					game.delay();
					"step 3";
					if (targets.length == 2) {
						if (!event.ingame) {
							var cards = targets[0].getEquips(2);
							if (cards.length == 1)
								event._result = {
									bool: true,
									links: cards,
								};
							else {
								player
									.choosePlayerCard(
										"e",
										true,
										function (button) {
											return get.equipValue(button.link);
										},
										targets[0]
									)
									.set("targets0", targets[0])
									.set("targets1", targets[1])
									.set("filterButton", function (button) {
										if (!get.subtypes(button.link, false).includes("equip2")) return false;
										var targets1 = _status.event.targets1;
										return targets1.canEquip(button.link);
									});
							}
						} else {
							player
								.choosePlayerCard(
									"e",
									true,
									function (button) {
										return get.equipValue(button.link);
									},
									targets[0]
								)
								.set("targets0", targets[0])
								.set("targets1", targets[1])
								.set("filterButton", function (button) {
									var targets1 = _status.event.targets1;
									return targets1.canEquip(button.link);
								});
						}
					} else event.finish();
					"step 4";
					if (result.bool && result.links.length) {
						var link = result.links[0];
						if (get.position(link) == "e") event.targets[1].equip(link);
						else if (link.viewAs) event.targets[1].addJudge({ name: link.viewAs }, [link]);
						else event.targets[1].addJudge(link);
						event.targets[0].$give(link, event.targets[1], false);
						game.delay();
					}
				},
				audio: 5,
				enable: "phaseUse",
				usable: 1,
				chooseButton: {
					dialog: function () {
						var list = ["wolong", "fengchu", "xuanjian", "shuijing"];
						for (var i = 0; i < list.length; i++) {
							list[i] = ["", "", list[i] + "_card"];
						}
						return ui.create.dialog("评才", [list, "vcard"]);
					},
					check: function (button) {
						var name = button.link[2];
						var player = _status.event.player;
						if (name == "xuanjian_card") {
							if (
								game.hasPlayer(function (current) {
									return current.isDamaged() && current.hp < 3 && get.attitude(player, current) > 1;
								})
							)
								return 1 + Math.random();
							else return 1;
						} else if (name == "wolong_card") {
							if (
								game.hasPlayer(function (current) {
									return get.damageEffect(current, player, player, "fire") > 0;
								})
							)
								return 1.2 + Math.random();
							else return 0.5;
						} else return 0.6;
					},
					backup: function (links, player) {
						return {
							audio: "xinfu_pingcai1.mp3",
							filterCard: () => false,
							selectCard: -1,
							takara: links[0][2],
							content: lib.skill.xinfu_pingcai.contentx,
						};
					},
				},
				contentx: function () {
					"step 0";
					event.pingcai_delayed = true;
					var name = lib.skill.xinfu_pingcai_backup.takara;
					event.cardname = name;
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						game.pause();
						game.countChoose();
						event.timeout = setTimeout(function () {
							_status.imchoosing = false;
							event._result = {
								bool: true,
							};
							game.resume();
						}, 9000);
					};
					var createDialog = function (player, id, name) {
						if (player == game.me) return;
						var dialog = ui.create.dialog("forcebutton", "hidden");
						var str = get.translation(player) + "正在擦拭宝物上的灰尘…";
						var canSkip = !_status.connectMode;
						if (canSkip) str += "<br>（点击宝物可以跳过等待AI操作）";
						dialog.textPrompt = dialog.add('<div class="text center">' + str + "</div>");
						dialog.classList.add("fixed");
						dialog.classList.add("scroll1");
						dialog.classList.add("scroll2");
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noupdate");
						dialog.videoId = id;

						var canvas2 = document.createElement("canvas");
						dialog.canvas_viewer = canvas2;
						dialog.appendChild(canvas2);
						canvas2.classList.add("grayscale");
						canvas2.style.position = "absolute";
						canvas2.style.width = "249px";
						canvas2.style.height = "249px";
						canvas2.style["border-radius"] = "6px";
						canvas2.style.left = "calc(50% - 125px)";
						canvas2.style.top = "calc(50% - 125px)";
						canvas2.width = 249;
						canvas2.height = 249;
						canvas2.style.border = "3px solid";

						var ctx2 = canvas2.getContext("2d");
						var img = new Image();
						img.src = lib.assetURL + "image/card/" + name + ".png";
						img.onload = function () {
							ctx2.drawImage(this, 0, 0, this.width, this.height, 0, 0, canvas2.width, canvas2.height);
						};
						if (canSkip) {
							var skip = function () {
								if (event.pingcai_delayed) {
									delete event.pingcai_delayed;
									clearTimeout(event.timeout);
									event._result = {
										bool: true,
									};
									game.resume();
									canvas2.removeEventListener(lib.config.touchscreen ? "touchend" : "click", skip);
								}
							};
							canvas2.addEventListener(lib.config.touchscreen ? "touchend" : "click", skip);
						}
						dialog.open();
					};
					var chooseButton = function (id, name) {
						var event = _status.event;
						_status.xinfu_pingcai_finished = false;

						var dialog = ui.create.dialog("forcebutton", "hidden");
						dialog.textPrompt = dialog.add('<div class="text center">擦拭掉宝物上的灰尘吧！</div>');
						event.switchToAuto = function () {
							event._result = {
								bool: _status.xinfu_pingcai_finished,
							};
							game.resume();
							_status.imchoosing = false;
							_status.xinfu_pingcai_finished = true;
						};
						dialog.classList.add("fixed");
						dialog.classList.add("scroll1");
						dialog.classList.add("scroll2");
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noupdate");
						dialog.videoId = id;

						var canvas = document.createElement("canvas");
						var canvas2 = document.createElement("canvas");

						dialog.appendChild(canvas2);
						dialog.appendChild(canvas);

						canvas.style.position = "absolute";
						canvas.style.width = "249px";
						canvas.style.height = "249px";
						canvas.style["border-radius"] = "6px";
						canvas.style.left = "calc(50% - 125px)";
						canvas.style.top = "calc(50% - 125px)";
						canvas.width = 249;
						canvas.height = 249;
						canvas.style.border = "3px solid";

						canvas2.style.position = "absolute";
						canvas2.style.width = "249px";
						canvas2.style.height = "249px";
						canvas2.style["border-radius"] = "6px";
						canvas2.style.left = "calc(50% - 125px)";
						canvas2.style.top = "calc(50% - 125px)";
						canvas2.width = 249;
						canvas2.height = 249;
						canvas2.style.border = "3px solid";

						var ctx = canvas.getContext("2d");
						var ctx2 = canvas2.getContext("2d");

						var img = new Image();
						img.src = lib.assetURL + "image/card/" + name + ".png";
						img.onload = function () {
							ctx2.drawImage(this, 0, 0, this.width, this.height, 0, 0, canvas2.width, canvas2.height);
						};

						ctx.fillStyle = "lightgray";
						ctx.fillRect(0, 0, canvas.width, canvas.height);

						canvas.onmousedown = function (ev) {
							//if(_status.xinfu_pingcai_finished) return;
							canvas.onmousemove = function (e) {
								if (_status.xinfu_pingcai_finished) return;
								ctx.beginPath();
								ctx.clearRect(e.offsetX - 16, e.offsetY - 16, 32, 32);
								var data = ctx.getImageData(canvas.width * 0.1, canvas.height * 0.1, canvas.width * 0.8, canvas.height * 0.8).data;
								var sum = 0;
								for (var i = 3; i < data.length; i += 4) {
									if (data[i] == 0) {
										sum++;
									}
								}
								if (sum >= canvas.width * canvas.height * 0.6) {
									//ctx.clearRect(0,0,canvas.width,canvas.height);
									if (!_status.xinfu_pingcai_finished) {
										_status.xinfu_pingcai_finished = true;
										event.switchToAuto();
									}
								}
							};
						};
						canvas.ontouchstart = function (ev) {
							//if(_status.xinfu_pingcai_finished) return;
							canvas.ontouchmove = function (e) {
								if (_status.xinfu_pingcai_finished) return;
								ctx.beginPath();
								var rect = canvas.getBoundingClientRect();
								var X = ((e.touches[0].clientX - rect.left) / rect.width) * canvas.width;
								var Y = ((e.touches[0].clientY - rect.top) / rect.height) * canvas.height;
								ctx.clearRect(X - 16, Y - 16, 32, 32);
								var data = ctx.getImageData(canvas.width * 0.1, canvas.height * 0.1, canvas.width * 0.8, canvas.height * 0.8).data;
								var sum = 0;
								for (var i = 3; i < data.length; i += 4) {
									if (data[i] == 0) {
										sum++;
									}
								}
								if (sum >= canvas.width * canvas.height * 0.6) {
									if (!_status.xinfu_pingcai_finished) {
										_status.xinfu_pingcai_finished = true;
										event.switchToAuto();
									}
								}
							};
						};
						canvas.onmouseup = function (ev) {
							canvas.onmousemove = null;
						};
						canvas.ontouchend = function (ev) {
							canvas.ontouchmove = null;
						};

						dialog.open();

						game.pause();
						game.countChoose();
					};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog, player, event.videoId, name);
					if (event.isMine()) {
						chooseButton(event.videoId, name);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, event.videoId, name);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					var result = event.result || result;
					if (!result) result = { bool: false };
					event._result = result;
					game.broadcastAll(
						function (id, result, player) {
							_status.xinfu_pingcai_finished = true;
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.textPrompt.innerHTML = '<div class="text center">' + (get.translation(player) + "擦拭宝物" + (result.bool ? "成功！" : "失败…")) + "</div>";
								if (result.bool && dialog.canvas_viewer) dialog.canvas_viewer.classList.remove("grayscale");
							}
							if (!_status.connectMode) delete event.pingcai_delayed;
						},
						event.videoId,
						result,
						player
					);
					game.delay(2.5);
					"step 2";
					game.broadcastAll("closeDialog", event.videoId);
					if (result.bool) {
						player.logSkill("pcaudio_" + event.cardname);
						event.insert(lib.skill.xinfu_pingcai[event.cardname], {
							player: player,
						});
					}
				},
				ai: {
					order: 7,
					fireAttack: true,
					threaten: 1.7,
					result: {
						player: 1,
					},
				},
			},
			xinfu_pdgyingshi: {
				mod: {
					targetEnabled: function (card, player, target) {
						if (get.type(card) == "delay") {
							return false;
						}
					},
				},
				trigger: {
					player: ["phaseZhunbeiBefore", "phaseJieshuBefore"],
				},
				forced: true,
				audio: 2,
				group: "xinfu_pdgyingshi2",
				content: function () {
					trigger.cancel();
					game.log(player, "跳过了", event.triggername == "phaseZhunbeiBefore" ? "准备阶段" : "结束阶段");
				},
			},
			xinfu_pdgyingshi2: {
				popup: false,
				trigger: {
					player: "phaseJudgeBefore",
				},
				forced: true,
				sourceSkill: "xinfu_pdgyingshi",
				content: function () {
					trigger.cancel();
					game.log(player, "跳过了判定阶段");
				},
			},
			pcaudio_wolong_card: {
				audio: "xinfu_pingcai2.mp3",
			},
			pcaudio_fengchu_card: {
				audio: "xinfu_pingcai3.mp3",
			},
			pcaudio_shuijing_card: {
				audio: "xinfu_pingcai4.mp3",
			},
			pcaudio_xuanjian_card: {
				audio: "xinfu_pingcai5.mp3",
			},
			yizan_use: {
				audio: "yizan_respond_shan",
				intro: {
					content: "已发动过#次",
				},
				enable: ["chooseToUse", "chooseToRespond"],
				hiddenCard: function (player, name) {
					if (get.type(name) != "basic") return false;
					if (!player.storage.yizan && player.countCards("hes") < 2) return false;
					return player.hasCard(function (card) {
						return get.type(card) == "basic";
					}, "hs");
				},
				filter: function (event, player) {
					if (!player.storage.yizan && player.countCards("hes") < 2) return false;
					if (
						!player.hasCard(function (card) {
							return get.type(card) == "basic";
						}, "hs")
					)
						return false;
					for (var name of lib.inpile) {
						if (get.type(name) != "basic") continue;
						if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) return true;
						if (name == "sha") {
							for (var nature of lib.inpile_nature) {
								if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) != "basic") continue;
							if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) {
								list.push(["基本", "", name]);
							}
							if (name == "sha") {
								for (var nature of lib.inpile_nature) {
									if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
								}
							}
						}
						return ui.create.dialog("翊赞", [list, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], nature: button.link[3] };
						if (
							_status.event.getParent().type != "phase" ||
							game.hasPlayer(function (current) {
								return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
							})
						) {
							switch (button.link[2]) {
								case "tao":
								case "shan":
									return 5;
								case "jiu": {
									if (player.storage.yizan && player.countCards("hs", { type: "basic" }) > 2) return 3;
									return 0;
								}
								case "sha":
									if (button.link[3] == "fire") return 2.95;
									else if (button.link[3] == "thunder" || button.link[3] == "ice") return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup: function (links, player) {
						return {
							audio: "yizan_respond_shan",
							filterCard: function (card, player, target) {
								if (player.storage.yizan) return get.type(card) == "basic";
								else if (ui.selected.cards.length) {
									if (get.type(ui.selected.cards[0]) == "basic") return true;
									return get.type(card) == "basic";
								}
								return true;
							},
							complexCard: true,
							selectCard: function () {
								var player = _status.event.player;
								if (player.storage.yizan) return 1;
								return 2;
							},
							check: function (card, player, target) {
								if (!ui.selected.cards.length && get.type(card) == "basic") return 6;
								else return 6 - get.value(card);
							},
							viewAs: { name: links[0][2], nature: links[0][3] },
							position: "hes",
							popname: true,
							precontent: function () {
								player.addMark("yizan_use", 1, false);
							},
						};
					},
					prompt: function (links, player) {
						var str = player.storage.yizan ? "一张基本牌" : "两张牌(其中至少应有一张基本牌)";
						return "将" + str + "当做" + get.translation(links[0][3] || "") + get.translation(links[0][2]) + "使用或打出";
					},
				},
				ai: {
					order: function () {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard({ name: "jiu" }, player, event) && get.effect(player, { name: "jiu" }) > 0 && player.storage.yizan && player.countCards("hs", { type: "basic" }) > 2) {
							return 3.3;
						}
						return 3.1;
					},
					skillTagFilter: function (player, tag, arg) {
						if (tag == "fireAttack") return true;
						if (!player.storage.yizan && player.countCards("hes") < 2) return false;
						if (
							!player.hasCard(function (card) {
								return get.type(card) == "basic";
							}, "hes")
						) {
							return false;
						}
					},
					result: {
						player: 1,
					},
					respondSha: true,
					respondShan: true,
					fireAttack: true,
				},
			},
			yizan_respond_shan: {
				audio: 2,
			},
			xinfu_longyuan: {
				audio: 2,
				forced: true,
				unique: true,
				juexingji: true,
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				skillAnimation: true,
				animationColor: "orange",
				filter: function (event, player) {
					return player.countMark("yizan_use") >= 3;
				},
				content: function () {
					player.awakenSkill("xinfu_longyuan");
					player.storage.yizan = true;
				},
				derivation: "yizan_rewrite",
				ai: {
					combo: "yizan_use",
				},
			},
			xinfu_jingxie: {
				audio: 2,
				video: function (player, info) {
					var l2 = player.getCards(info[0] ? "e" : "h"),
						l1 = info[1];
					for (var j = 0; j < l2.length; j++) {
						if (l2[j].suit == l1[0] && l2[j].number == l1[1] && l2[j].name == l1[2]) {
							l2[j].init([l2[j].suit, l2[j].number, "rewrite_" + l2[j].name]);
							break;
						}
					}
				},
			},
			xinfu_jingxie1: {
				group: ["xinfu_jingxie2"],
				position: "he",
				audio: "xinfu_jingxie",
				enable: "phaseUse",
				filter: function (event, player) {
					var he = player.getCards("he");
					for (var i = 0; i < he.length; i++) {
						if (["bagua", "baiyin", "lanyinjia", "renwang", "tengjia", "zhuge"].includes(he[i].name)) return true;
					}
					return false;
				},
				filterCard: function (card) {
					return ["bagua", "baiyin", "lanyinjia", "renwang", "tengjia", "zhuge"].includes(card.name);
				},
				discard: false,
				lose: false,
				delay: false,
				check: function () {
					return 1;
				},
				content: function () {
					"step 0";
					player.showCards(cards);
					"step 1";
					var card = cards[0];
					var bool = get.position(card) == "e";
					if (bool) player.removeEquipTrigger(card);
					game.addVideo("skill", player, ["xinfu_jingxie", [bool, get.cardInfo(card)]]);
					game.broadcastAll(function (card) {
						card.init([card.suit, card.number, "rewrite_" + card.name]);
					}, card);
					if (bool) {
						var info = get.info(card);
						if (info.skills) {
							for (var i = 0; i < info.skills.length; i++) {
								player.addSkillTrigger(info.skills[i]);
							}
						}
					}
				},
				ai: {
					basic: {
						order: 10,
					},
					result: {
						player: 1,
					},
				},
			},
			xinfu_jingxie2: {
				prompt: "重铸一张防具牌，然后将体力回复至1点。",
				audio: "xinfu_jingxie",
				enable: "chooseToUse",
				filterCard: (card, player) => get.subtype(card) == "equip2" && player.canRecast(card),
				filter: (event, player) => {
					if (event.type != "dying") return false;
					if (player != event.dying) return false;
					return player.hasCard(card => lib.skill.xinfu_jingxie2.filterCard(card, player), "he");
				},
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					"step 0";
					player.recast(cards);
					"step 1";
					var num = 1 - player.hp;
					if (num) player.recover(num);
				},
				ai: {
					order: 0.5,
					skillTagFilter: function (player, arg, target) {
						if (player != target) return false;
						return player.hasCard(card => (_status.connectMode && get.position(card) == "h") || (get.subtype(card) == "equip2" && player.canRecast(card)), "he");
					},
					save: true,
					result: {
						player: function (player) {
							return 10;
						},
					},
				},
			},
			xinfu_qiaosi: {
				enable: "phaseUse",
				usable: 1,
				content: function () {
					"step 0";
					if (get.isLuckyStar(player)) {
						event.num = 6;
						player.throwDice(6);
					} else player.throwDice();
					"step 1";
					event.cards = get.cards(event.num);
					player.showCards(event.cards);
					"step 2";
					player.gain(event.cards, "gain2");
					player
						.chooseControl()
						.set("choiceList", ["将" + get.cnNumber(event.num) + "张牌交给一名其他角色", "弃置" + get.cnNumber(event.num) + "张牌"])
						.set("ai", function () {
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 2;
								})
							)
								return 0;
							return 1;
						});
					"step 3";
					if (result.index == 0) {
						player.chooseCardTarget({
							position: "he",
							filterCard: true,
							selectCard: event.num,
							filterTarget: function (card, player, target) {
								return player != target;
							},
							ai1: function (card) {
								return 1;
							},
							ai2: function (target) {
								var att = get.attitude(_status.event.player, target);
								return att;
							},
							prompt: "请选择要送人的卡牌",
							forced: true,
						});
					} else {
						player.chooseToDiscard(event.num, true, "he");
						event.finish();
					}
					"step 4";
					if (result.bool) {
						var target = result.targets[0];
						player.give(result.cards, target);
					}
				},
				ai: {
					order: 7.5,
					result: {
						player: 1,
					},
				},
			},
			zhaohuo: {
				audio: 2,
				audioname: ["re_taoqian"],
				trigger: { global: "dying" },
				forced: true,
				//priority:12,
				filter: function (event, player) {
					return event.player != player && player.maxHp > 1;
				},
				content: function () {
					"step 0";
					event.num = player.maxHp - 1;
					player.loseMaxHp(event.num, true);
					"step 1";
					player.draw(event.num);
				},
				ai: {
					neg: true,
				},
			},
			yixiang: {
				audio: 2,
				audioname: ["re_taoqian"],
				trigger: { target: "useCardToTargeted" },
				frequent: true,
				filter: function (event, player) {
					if (event.player.hp <= player.hp) return false;
					//if(event.targets.length>1) return false;
					var hs = player.getCards("h");
					var names = ["sha", "shan", "tao", "jiu", "du"];
					for (var i = 0; i < hs.length; i++) {
						names.remove(hs[i].name);
					}
					if (!names.length) return false;
					for (var i = 0; i < ui.cardPile.childElementCount; i++) {
						if (names.includes(ui.cardPile.childNodes[i].name)) {
							return true;
						}
					}
					return false;
				},
				usable: 1,
				content: function () {
					var hs = player.getCards("h");
					var list = [];
					var names = ["sha", "shan", "tao", "jiu", "du"];
					for (var i = 0; i < hs.length; i++) {
						names.remove(hs[i].name);
					}
					for (var i = 0; i < ui.cardPile.childElementCount; i++) {
						if (names.includes(ui.cardPile.childNodes[i].name)) {
							list.push(ui.cardPile.childNodes[i]);
						}
					}
					if (list.length) {
						player.gain(list.randomGet(), "draw");
					}
				},
			},
			yirang: {
				audio: 2,
				audioname: ["re_taoqian"],
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					if (
						!player.countCards("he", function (card) {
							return get.type(card) != "basic";
						})
					) {
						return false;
					}
					return game.hasPlayer(function (current) {
						return current.maxHp > player.maxHp;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("yirang"), function (card, player, target) {
							return target.maxHp > player.maxHp;
						})
						.set("ai", function (target) {
							return (get.attitude(_status.event.player, target) - 2) * target.maxHp;
						});
					"step 1";
					if (result.bool) {
						var cards = player.getCards("he", function (card) {
							return get.type(card) != "basic";
						});
						var target = result.targets[0];
						var types = [];
						for (var i = 0; i < cards.length; i++) {
							types.add(get.type(cards[i], "trick"));
						}
						player.logSkill("yirang", target);
						player.give(cards, target);
						player.gainMaxHp(target.maxHp - player.maxHp, true);
						player.recover(types.length);
						game.delay();
					}
				},
			},
			kuangcai: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return !event.player.isMad();
				},
				content: function () {
					game.broadcastAll(function (player) {
						player.forceCountChoose = { phaseUse: 5 };
					}, player);
					player.addSkill("kuangcai_use");
					player.addSkill("kuangcai_cancel");
					//ui.auto.hide();
				},
				subSkill: {
					use: {
						mod: {
							cardUsable: function (card) {
								if (get.info(card) && get.info(card).forceUsable) return;
								return Infinity;
							},
							targetInRange: function () {
								return true;
							},
							aiOrder: function (player, card, num) {
								var name = get.name(card);
								if (name == "tao") return num + 7 + Math.pow(player.getDamagedHp(), 2);
								if (name == "sha") return num + 6;
								if (get.subtype(card) == "equip2") return num + get.value(card) / 3;
							},
						},
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						silent: true,
						popup: false,
						filter: function (event, player) {
							if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
								return false;
							}
							return true;
						},
						content: function () {
							player.draw();
							if (player.forceCountChoose.phaseUse == 1) {
								var evt = event.getParent("phaseUse");
								if (evt) evt.skipped = true;
							} else
								game.broadcastAll(function (player) {
									player.forceCountChoose.phaseUse--;
								}, player);
						},
					},
					cancel: {
						trigger: { player: "phaseUseEnd" },
						firstDo: true,
						silent: true,
						charlotte: true,
						content: function () {
							game.broadcastAll(function (player) {
								delete player.forceCountChoose;
							}, player);
							//ui.auto.show();
							player.removeSkill("kuangcai_use");
							player.removeSkill("kuangcai_cancel");
						},
					},
				},
				ai: {
					threaten: 4.5,
				},
			},
			shejian: {
				audio: 2,
				trigger: { player: "phaseDiscardEnd" },
				direct: true,
				filter: function (event, player) {
					var cards = [];
					player.getHistory("lose", function (evt) {
						if (evt.type == "discard" && evt.getParent("phaseDiscard") == event) cards.addArray(evt.cards2);
					});
					if (cards) {
						if (cards.length < 2) return false;
						var suits = [];
						for (var i = 0; i < cards.length; i++) {
							var suit = get.suit(cards[i]);
							if (suits.includes(suit)) {
								return false;
							} else {
								suits.push(suit);
							}
						}
						return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("shejian"), "弃置一名其他角色的一张牌", function (card, player, target) {
						if (player == target) return false;
						return target.countDiscardableCards(player, "he") > 0;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					"step 1";
					if (result.bool) {
						player.logSkill("shejian", result.targets);
						player.discardPlayerCard(result.targets[0], "he", true);
					} else {
						event.finish();
					}
				},
			},
			shixin: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				filter: function (event) {
					return event.hasNature("fire");
				},
				forced: true,
				content: function () {
					trigger.cancel();
				},
				ai: {
					nofire: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "fireDamage")) return "zerotarget";
						},
					},
				},
			},
			fenyin: {
				locked: false,
				mod: {
					aiOrder: function (player, card, num) {
						if (typeof card == "object" && player == _status.currentPhase) {
							var evt = player.getLastUsed();
							if (evt && evt.card && get.color(evt.card) != "none" && get.color(card) != "none" && get.color(evt.card) != get.color(card)) {
								return num + 10;
							}
						}
					},
				},
				audio: 2,
				trigger: { player: "useCard" },
				frequent: true,
				//usable:3,
				filter: function (event, player) {
					if (_status.currentPhase != player) return false;
					var evt = player.getLastUsed(1);
					if (!evt) return false;
					var color1 = get.color(evt.card);
					var color2 = get.color(event.card);
					return color1 && color2 && color1 != "none" && color2 != "none" && color1 != color2;
				},
				content: function () {
					player.draw();
				},
				ai: {
					threaten: 3,
				},
			},
			dujin: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				frequent: true,
				preHidden: true,
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					trigger.num += 1 + Math.ceil(player.countCards("e") / 2);
				},
			},
			yingjian: {
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				audio: "qingyi",
				content: function () {
					player.chooseUseTarget("###是否发动【影箭】？###视为使用一张没有距离限制的【杀】", { name: "sha" }, false, "nodistance").logSkill = "yingjian";
				},
				ai: {
					threaten: function (player, target) {
						return 1.6;
					},
				},
			},
			tunchu: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				frequent: true,
				preHidden: true,
				locked: false,
				filter: function (event, player) {
					if (event.numFixed || player.getExpansions("tunchu").length) return false;
					return true;
				},
				content: function () {
					trigger.num += 2;
					player.addTempSkill("tunchu_choose", "phaseDrawAfter");
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				mod: {
					cardEnabled: function (card, player) {
						if (player.getExpansions("tunchu").length && card.name == "sha") {
							return false;
						}
					},
				},
				subSkill: {
					choose: {
						trigger: { player: "phaseDrawEnd" },
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							"step 0";
							player.removeSkill("tunchu_choose");
							var nh = player.countCards("h");
							if (nh) {
								player.chooseCard("h", [1, nh], "将任意张手牌置于你的武将牌上").set("ai", function (card) {
									var player = _status.event.player;
									var count = game.countPlayer(function (current) {
										return get.attitude(player, current) > 2 && current.hp - current.countCards("h") > 1;
									});
									if (ui.selected.cards.length >= count) return -get.value(card);
									return 5 - get.value(card);
								});
							} else {
								event.finish();
							}
							"step 1";
							if (result.bool) {
								player.addToExpansion(result.cards, player, "giveAuto").gaintag.add("tunchu");
							}
						},
					},
				},
			},
			shuliang: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return player.getExpansions("tunchu").length > 0 && event.player.countCards("h") < event.player.hp && event.player.isIn();
				},
				content: function () {
					"step 0";
					var goon = get.attitude(player, trigger.player) > 0;
					player
						.chooseCardButton(get.prompt("shuliang", trigger.player), player.getExpansions("tunchu"))
						.set("ai", function () {
							if (_status.event.goon) return 1;
							return 0;
						})
						.set("goon", goon);
					"step 1";
					if (result.bool) {
						player.logSkill("shuliang", trigger.player);
						player.loseToDiscardpile(result.links);
						trigger.player.draw(2);
					}
				},
				ai: { combo: "tunchu" },
			},
			choulve: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("he");
					});
				},
				async cost(event, trigger, player){
					let str = "令一名其他角色交给你一张牌";
					const history = player.getAllHistory("damage", function (evt) {
						return evt.card && evt.card.name && lib.card[evt.card.name];
					});
					if (history.length) event.cardname = history[history.length - 1].card.name;
					if (event.cardname) {
						str += "。若其如此做，视为你使用【" + get.translation(event.cardname) + "】";
					}
					let goon = true;
					if (event.cardname) {
						goon = game.hasPlayer(function (current) {
							return player.canUse(event.cardname, current) && get.effect(current, { name: event.cardname }, player, player) > 0;
						});
					}
					const result = await player.chooseTarget(get.prompt("choulve"), str, function (card, player, target) {
						return target != player && target.countCards("he");
					}).set("ai", function (target) {
						const event = get.event();
						if (!event.goon) return 0;
						var player = event.player;
						if (get.attitude(player, target) >= 0 && get.attitude(target, player) >= 0) {
							return Math.sqrt(target.countCards("he"));
						}
						return 0;
					}).set("goon", goon).forResult();
					if(result.bool){
						result.cost_data = {cardname: event.cardname};
						event.result = result;
					}
				},
				content: function () {
					"step 0";
					event.cardname = event.cost_data.cardname;
					var target = targets[0];
					target.chooseCard("he", "是否交给" + get.translation(player) + "一张牌？", event.cardname ? "若如此做，视为" + get.translation(player) + "使用【" + get.translation(event.cardname) + "】" : null).set("ai", function (card) {
						if (_status.event.goon) return 7 - get.value(card);
						return 0;
					}).set("goon", get.attitude(target, player) > 1);
					event.target = target;
					"step 1";
					if (result.bool) {
						event.target.give(result.cards, player);
						if (event.cardname) {
							player.chooseUseTarget(event.cardname, true, false);
						}
					}
				},
			},
			polu: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					if (!lib.inpile.includes("ly_piliche")) return true;
					return !!get.cardPile(function (card) {
						return card.name == "ly_piliche";
					});
				},
				content: function () {
					var card;
					if (!lib.inpile.includes("ly_piliche")) {
						card = game.createCard2("ly_piliche", "diamond", 1);
						lib.inpile.push("ly_piliche");
					} else
						card = get.cardPile(function (card) {
							return card.name == "ly_piliche";
						});
					player.chooseUseTarget(card, true, "nopopup");
				},
				group: "polu_damage",
				subSkill: {
					damage: {
						audio: "polu",
						trigger: { player: "damageEnd" },
						forced: true,
						filter: function (event, player) {
							return !player.getEquips("ly_piliche").length;
						},
						content: function () {
							"step 0";
							event.count = trigger.num;
							"step 1";
							event.count--;
							player.draw();
							"step 2";
							var card = get.cardPile2(function (card) {
								return get.subtype(card, false) == "equip1" && player.canUse(card, player);
							});
							if (card) player.chooseUseTarget(card, true, "nopopup");
							"step 3";
							if (event.count > 0 && !player.getEquips("ly_piliche").length) event.goto(1);
						},
					},
				},
			},
			ly_piliche: {
				equipSkill: true,
				trigger: { source: "damageSource" },
				check: function (event, player) {
					return get.attitude(player, event.player) * get.value(event.player.getDiscardableCards(player, "e"), event.player) <= 0;
				},
				filter: function (event, player) {
					return player != event.player && event.player.countDiscardableCards(player, "e") > 0;
				},
				logTarget: "player",
				content: function () {
					player.discardPlayerCard(trigger.player, "e", true, trigger.player.countCards("e"));
				},
			},
			xinzhilve: {
				enable: "phaseUse",
				audio: "zhilve",
				usable: 1,
				chooseButton: {
					dialog: function (event, player) {
						var list = ["移动场上的一张牌", "摸一张牌并视为使用一张【杀】"];
						var choiceList = ui.create.dialog("知略：失去1点体力并...", "forcebutton", "hidden");
						choiceList.add([
							list.map((item, i) => {
								return [i, item];
							}),
							"textbutton",
						]);
						return choiceList;
					},
					filter: function (button, player) {
						if (button.link == 0) return player.canMoveCard();
						return player.hasUseTarget({ name: "sha", isCard: true }, false);
					},
					check: function (button) {
						return button.link;
					},
					backup: function (links) {
						return lib.skill["xinzhilve_" + ["move", "use"][links[0]]];
					},
					prompt: function () {
						return "请选择【杀】的目标";
					},
				},
				ai: {
					order: function (item, player) {
						return get.order({ name: "sha" }) + 0.1;
					},
					result: {
						player: function (player) {
							if (player.hp > 2 && player.hasValueTarget({ name: "sha" })) return 1;
							return 0;
						},
					},
				},
			},
			xinzhilve_move: {
				audio: "zhilve",
				sourceSkill: "xinzhilve",
				filterCard: function () {
					return false;
				},
				selectCard: -1,
				delay: false,
				content: function () {
					"step 0";
					event.forceDie = true;
					if (!player.canMoveCard(null, event.nojudge)) {
						event.finish();
						return;
					}
					var next = player.chooseTarget(2, function (card, player, target) {
						if (ui.selected.targets.length) {
							var from = ui.selected.targets[0];
							var js = from.getCards("j");
							for (var i = 0; i < js.length; i++) {
								if (_status.event.nojudge) break;
								if (target.canAddJudge(js[i])) return true;
							}
							if (target.isMin()) return false;
							var es = from.getCards("e");
							for (var i = 0; i < es.length; i++) {
								if (target.canEquip(es[i])) return true;
							}
							return false;
						} else {
							var range = "ej";
							if (_status.event.nojudge) range = "e";
							return target.countCards(range) > 0;
						}
					});
					next.set("nojudge", event.nojudge || false);
					next.set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						var sgnatt = get.sgn(att);
						if (ui.selected.targets.length == 0) {
							if (att > 0) {
								if (
									!_status.event.nojudge &&
									target.countCards("j", function (card) {
										return game.hasPlayer(function (current) {
											return current.canAddJudge(card) && get.attitude(player, current) < 0;
										});
									})
								)
									return 14;
								if (
									target.countCards("e", function (card) {
										return (
											get.value(card, target) < 0 &&
											game.hasPlayer(function (current) {
												return current != target && get.attitude(player, current) < 0 && current.canEquip(card);
											})
										);
									}) > 0
								)
									return 9;
							} else if (att < 0) {
								if (
									game.hasPlayer(function (current) {
										if (current != target && get.attitude(player, current) > 0) {
											var es = target.getCards("e");
											for (var i = 0; i < es.length; i++) {
												if (get.value(es[i], target) > 0 && current.canEquip(es[i]) && get.value(es[i], current) > 0) return true;
											}
										}
									})
								) {
									return -att;
								}
							}
							return 0;
						}
						var es = ui.selected.targets[0].getCards("e");
						var i;
						var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
						for (i = 0; i < es.length; i++) {
							if (sgnatt != 0 && att2 != 0 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.value(es[i], target)) == sgnatt && target.canEquip(es[i])) {
								return Math.abs(att);
							}
						}
						if (
							i == es.length &&
							(_status.event.nojudge ||
								!ui.selected.targets[0].countCards("j", function (card) {
									return target.canAddJudge(card);
								}))
						) {
							return 0;
						}
						return -att * get.attitude(player, ui.selected.targets[0]);
					});
					next.set("multitarget", true);
					next.set("targetprompt", _status.event.targetprompt || ["被移走", "移动目标"]);
					next.set("prompt", event.prompt || "移动场上的一张牌");
					if (event.prompt2) next.set("prompt2", event.prompt2);
					if (event.forced) next.set("forced", true);
					"step 1";
					event.result = result;
					if (result.bool) {
						player.line2(result.targets, "green");
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					game.delay();
					"step 3";
					if (targets.length == 2) {
						player
							.choosePlayerCard(
								"ej",
								true,
								function (button) {
									var player = _status.event.player;
									var targets0 = _status.event.targets0;
									var targets1 = _status.event.targets1;
									if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
										if (get.position(button.link) == "j") return 12;
										if (get.value(button.link, targets0) < 0) return 10;
										return 0;
									} else {
										if (get.position(button.link) == "j") return -10;
										return get.equipValue(button.link);
									}
								},
								targets[0]
							)
							.set("nojudge", event.nojudge || false)
							.set("targets0", targets[0])
							.set("targets1", targets[1])
							.set("filterButton", function (button) {
								var targets1 = _status.event.targets1;
								if (get.position(button.link) == "j") {
									if (_status.event.nojudge) return false;
									return targets1.canAddJudge(button.link);
								} else {
									return targets1.canEquip(button.link);
								}
							});
					} else {
						event.finish();
					}
					"step 4";
					if (result.bool && result.links.length) {
						player.loseHp();
					}
					"step 5";
					if (result.bool && result.links.length) {
						var link = result.links[0];
						if (get.position(link) == "e") {
							event.targets[1].equip(link);
						} else if (link.viewAs) {
							event.targets[1].addJudge({ name: link.viewAs }, [link]);
						} else {
							event.targets[1].addJudge(link);
						}
						event.targets[0].$give(link, event.targets[1]);
						event.result.card = link;
						event.result.position = get.position(link);
						game.delay();
						player.addTempSkill("xinzhilve_mark");
						player.addMark("xinzhilve_mark", 1, false);
					}
				},
			},
			xinzhilve_use: {
				audio: "zhilve",
				sourceSkill: "xinzhilve",
				filterCard: function () {
					return false;
				},
				selectCard: -1,
				filterTarget: function (card, player, target) {
					return player.canUse({ name: "sha", isCard: true }, target, false);
				},
				content: function () {
					player.loseHp();
					player.draw();
					player.useCard({ name: "sha", isCard: true }, false, target).forceDie = true;
					player.addTempSkill("xinzhilve_mark");
					player.addMark("xinzhilve_mark", 1, false);
				},
				ai: {
					result: {
						target: function (player, target) {
							return get.effect(target, { name: "sha" }, player, target);
						},
					},
				},
			},
			xinzhilve_mark: {
				intro: { content: "本回合手牌上限+#" },
				onremove: true,
				charlotte: true,
				mod: {
					maxHandcard: function (player, num) {
						return num + player.countMark("xinzhilve_mark");
					},
				},
			},
			xinxhzhiyan: {
				audio: "xhzhiyan",
				enable: "phaseUse",
				filter: function (event, player) {
					const list = player.getStorage("xinxhzhiyan_used");
					return (!list.includes("give") && player.countCards("h") > player.hp) || (!list.includes("draw") && player.countCards("h") < player.maxHp);
				},
				filterCard: true,
				selectCard: function () {
					var player = _status.event.player;
					const list = player.getStorage("xinxhzhiyan_used");
					if (list.includes("give")) return 0;
					var num = Math.max(0, player.countCards("h") - player.hp);
					if (ui.selected.cards.length || !list.includes("draw") || player.countCards("h") >= player.maxHp) return [num, num];
					return [0, num];
				},
				filterTarget: lib.filter.notMe,
				selectTarget: function () {
					if (ui.selected.cards.length) return [1, 1];
					return [0, 0];
				},
				check: function (card) {
					var player = _status.event.player;
					var checkx = function (card) {
						if (
							player.getUseValue(card, null, true) <= 0 &&
							game.hasPlayer(function (current) {
								return current != player && get.value(card, current) > 0 && get.attitude(player, current) > 0;
							})
						)
							return 2;
						return 1;
					};
					if (
						player.countCards("h", function (card) {
							return checkx(card) > 0;
						}) <
						player.countCards("h") - player.hp
					)
						return 0;
					return checkx(card);
				},
				delay: false,
				discard: false,
				lose: false,
				content: function () {
					var bool = cards && cards.length > 0;
					player.addTempSkill("xinxhzhiyan_used", "phaseUseEnd");
					if (!bool) {
						player.markAuto("xinxhzhiyan_used", "draw");
						player.addTempSkill("xinxhzhiyan_false", "phaseUseEnd");
						player.draw(player.maxHp - player.countCards("h"));
					} else {
						player.markAuto("xinxhzhiyan_used", "give");
						player.give(cards, target);
					}
				},
				ai: {
					order: function (obj, player) {
						if (player.countCards("h") > player.hp) return 10;
						return 0.5;
					},
					result: {
						player: function (player, target) {
							if (!ui.selected.cards.length && player.countCards("h") < player.maxHp) return 1;
							return 0;
						},
						target: 1,
					},
				},
			},
			xinxhzhiyan_used: {
				charlotte: true,
				onremove: true,
			},
			xinxhzhiyan_false: {
				mod: {
					playerEnabled: function (card, player, target) {
						if (player != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
					},
				},
				charlotte: true,
				mark: true,
				intro: {
					content: "不能对其他角色使用牌",
				},
			},
			weifeng: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				forced: true,
				filter: function (event, player) {
					if (
						!event.targets ||
						!event.targets.filter(function (target) {
							return target != player && !target.storage.weifeng2;
						}).length
					)
						return false;
					var evt = event.getParent("phaseUse");
					if (!evt || evt.player != player) return false;
					if (!get.tag(event.card, "damage")) return false;
					if (!["basic", "trick"].includes(get.type(event.card))) return false;
					return (
						player
							.getHistory("useCard", function (ev) {
								return ev.getParent("phaseUse") == evt && get.tag(ev.card, "damage") && ["basic", "trick"].includes(get.type(ev.card));
							})
							.indexOf(event) == 0 &&
						game.hasPlayer(function (current) {
							return current != player && !current.storage.weifeng2 && event.targets.includes(current);
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(true, "威风：请选择一个目标，令其获得一个【惧(" + get.translation(trigger.card.name) + ")】标记", function (card, player, target) {
							return player != target && !target.storage.weifeng2 && _status.event.getTrigger().targets.includes(target);
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						target.storage.weifeng2 = trigger.card.name;
						player.line(target, "green");
						game.log(target, "获得了一个", "#g【惧(" + get.translation(trigger.card.name) + ")】", "标记");
						target.markSkill("weifeng2");
						player.addSkill("weifeng3");
					}
				},
			},
			weifeng2: {
				intro: {
					content: "当前“惧”标记名称：$",
					onunmark: function (storage, player) {
						if (player.storage.weifeng2) {
							game.log(player, "移去了一个", "#g【惧(" + get.translation(player.storage.weifeng2) + ")】", "标记");
							delete player.storage.weifeng2;
						}
					},
				},
				marktext: "惧",
			},
			weifeng3: {
				trigger: {
					global: "damageBegin3",
					player: ["phaseZhunbeiBegin", "dieBegin"],
				},
				forced: true,
				popup: false,
				sourceSkill: "weifeng",
				filter: function (event, player) {
					if (event.name != "damage") return true;
					return event.player != player && typeof event.player.storage.weifeng2 == "string";
				},
				content: function () {
					if (trigger.name == "damage") {
						player.logSkill("weifeng", trigger.player);
						if (trigger.card && trigger.card.name == trigger.player.storage.weifeng2) trigger.num++;
						else if (trigger.player.countGainableCards(player, "he") > 0) player.gainPlayerCard(trigger.player, "he", true);
						trigger.player.unmarkSkill("weifeng2");
					} else {
						game.countPlayer(function (current) {
							if (current.storage.weifeng2) current.unmarkSkill("weifeng2");
						});
						player.removeSkill("weifeng3");
					}
				},
			},
			gnjinfan: {
				trigger: { player: "phaseDiscardBegin" },
				direct: true,
				locked: false,
				audio: 2,
				filter: function (event, player) {
					var list = [];
					player.getCards("s", function (card) {
						if (card.hasGaintag("gnjinfan")) list.add(get.suit(card));
					});
					if (list.length >= lib.suit.length) return false;
					return (
						player.countCards("h", function (card) {
							return _status.connectMode || !list.includes(get.suit(card));
						}) > 0
					);
				},
				content: function () {
					"step 0";
					player
						.chooseCard(
							"h",
							get.prompt("gnjinfan"),
							"将任意张手牌当做“铃”置于武将牌上",
							[
								1,
								(function () {
									var list = [];
									var list2 = [];
									player.getCards("s", function (card) {
										if (card.hasGaintag("gnjinfan")) list.add(get.suit(card));
									});
									player.getCards("h", function (card) {
										list2.add(get.suit(card));
									});
									list2.removeArray(list);
									return Math.max(1, list2.length);
								})(),
							],
							function (card, player) {
								return (
									!player.countCards("s", function (cardx) {
										return cardx.hasGaintag("gnjinfan") && get.suit(cardx, false) == get.suit(card, player);
									}) &&
									!ui.selected.cards.filter(function (cardx) {
										return get.suit(cardx, player) == get.suit(card, player);
									}).length
								);
							}
						)
						.set("ai", function (card) {
							var player = _status.event.player;
							if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
							if (["sha", "shan", "wuxie", "caochuan"].includes(card.name)) return 2 + Math.random();
							return 1 + Math.random();
						})
						.set("complexCard", true);
					"step 1";
					if (result.bool) {
						player.logSkill("gnjinfan");
						game.log(player, "将", result.cards, "放到了武将牌上");
						player.loseToSpecial(result.cards, "gnjinfan").visible = true;
					} else event.finish();
					"step 2";
					player.markSkill("gnjinfan");
				},
				group: ["gnjinfan_gain"],
				marktext: "铃",
				intro: {
					mark: function (dialog, storage, player) {
						dialog.addAuto(
							player.getCards("s", function (card) {
								return card.hasGaintag("gnjinfan");
							})
						);
					},
					markcount: function (storage, player) {
						return player.getCards("s", function (card) {
							return card.hasGaintag("gnjinfan");
						}).length;
					},
					onunmark: function (storage, player) {
						var cards = player.getCards("s", function (card) {
							return card.hasGaintag("gnjinfan");
						});
						if (cards.length) {
							player.lose(cards, ui.discardPile);
							player.$throw(cards, 1000);
							game.log(cards, "进入了弃牌堆");
						}
					},
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("gnjinfan")) return num + 0.5;
					},
				},
			},
			gnjinfan_gain: {
				audio: "gnjinfan",
				trigger: { player: "loseAfter" },
				forced: true,
				sourceSkill: "gnjinfan",
				filter: function (event, player) {
					if (!event.ss || !event.ss.length) return false;
					for (var i in event.gaintag_map) {
						if (event.gaintag_map[i].includes("gnjinfan")) return true;
						return false;
					}
				},
				content: function () {
					"step 0";
					var cards = [];
					for (var i of trigger.ss) {
						if (!trigger.gaintag_map[i.cardid] || !trigger.gaintag_map[i.cardid].includes("gnjinfan")) continue;
						var suit = get.suit(i, false);
						var card = get.cardPile2(function (card) {
							return !cards.includes(card) && get.suit(card, false) == suit;
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
					var num = player.getCards("s", function (card) {
						return card.hasGaintag("gnjinfan");
					}).length;
					if (num) player.markSkill("gnjinfan");
					else player.unmarkSkill("gnjinfan");
					"step 1";
					game.updateRoundNumber();
				},
			},
			gnsheque: {
				audio: 2,
				trigger: { global: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return event.player.isIn() && event.player.countCards("e") > 0 && lib.filter.targetEnabled({ name: "sha" }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards("h") > 0));
				},
				content: function () {
					player
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "射却：是否对" + get.translation(trigger.player) + "使用一张杀？")
						.set("logSkill", "gnsheque")
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						})
						.set("sourcex", trigger.player)
						.set("oncard", function (card) {
							try {
								card.gnsheque_tag = true;
							} catch (e) {
								alert("发生了一个导致【射却】无法正常触发无视防具效果的错误。请关闭十周年UI/手杀ui等扩展以解决");
							}
						});
				},
				ai: {
					unequip: true,
					unequip_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "unequip_ai") {
							if (_status.event.getParent().name != "gnsheque") return false;
						} else if (!arg || !arg.card || !arg.card.gnsheque_tag) return false;
					},
				},
			},
			//星董卓
			xiongjin: {
				mark: true,
				marktext: "☯",
				zhuanhuanji: true,
				intro: {
					content(storage) {
						if (!storage) return "出牌阶段开始时，你可以摸X张牌，然后本回合的弃牌阶段开始时，你弃置所有非基本牌（X为你已损失的体力值，至少为1，至多为3）";
						return "其他角色的出牌阶段开始时，你可以令其摸X张牌，然后本回合的弃牌阶段开始时，其弃置所有基本牌（X为你已损失的体力值，至少为1，至多为3）";
					},
				},
				audio: 2,
				trigger: { global: "phaseUseBegin" },
				filter(event, player) {
					return (event.player !== player) === Boolean(player.storage.xiongjin);
				},
				logTarget: "player",
				prompt2(event, player) {
					const goon = event.player === player;
					return (goon ? "" : "令其") + "摸" + get.cnNumber(Math.min(3, Math.max(1, player.getDamagedHp()))) + "张牌，本回合的弃牌阶段开始时，" + (goon ? "弃置所有非基本牌" : "其弃置所有基本牌");
				},
				content() {
					player.changeZhuanhuanji("xiongjin");
					const target = trigger.player;
					target.addTempSkill("xiongjin_effect");
					target.markAuto("xiongjin_effect", [target === player ? "nobasic" : "basic"]);
					target.draw(Math.min(3, Math.max(1, player.getDamagedHp())));
				},
				subSkill: {
					effect: {
						charlotte: true,
						mark: true,
						intro: {
							markcount: () => 0,
							content(storage) {
								if (storage.length > 1) return "弃牌阶段开始时，弃置所有牌";
								return "弃牌阶段开始时，弃置所有" + (storage[0] === "basic" ? "基本" : "非基本") + "牌";
							},
						},
						trigger: { player: "phaseDiscardBegin" },
						forced: true,
						popup: false,
						content() {
							const storage = player.getStorage("xiongjin_effect");
							const cards = player.getCards("he", card => {
								if (!lib.filter.cardDiscardable(card, player)) return false;
								const type = get.type(card);
								return (type === "basic" && storage.includes("basic")) || (type !== "basic" && storage.includes("nobasic"));
							});
							if (cards.length) player.discard(cards);
						},
					},
				},
			},
			xiawei: {
				audio: 2,
				trigger: { global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter"] },
				filter(event, player) {
					if (event.name.indexOf("lose") === 0) {
						if (event.getlx === false || event.position !== ui.discardPile) return false;
					} else if (event.getParent()?.relatedEvent?.name == "useCard") return false;
					return event.cards.some(card => !player.getStorage("xiawei").includes(get.suit(card, false)));
				},
				forced: true,
				async content(event, trigger, player) {
					player.markAuto(
						"xiawei",
						trigger.cards.reduce((list, card) => list.add(get.suit(card, false)), [])
					);
					player.storage.xiawei.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
					// 临时修改（by 棘手怀念摧毁）
					// player.addTip("xiawei", get.translation("xiawei") + player.getStorage("xiawei").reduce((str, suit) => str + get.translation(suit), " "));
					if (player.getStorage("xiawei").length >= 4 && player.maxHp < 9) {
						delete player.storage.xiawei;
						player.unmarkSkill("xiawei");
						// 临时修改（by 棘手怀念摧毁）
						// player.removeTip("xiawei");
						await player.gainMaxHp();
						await player.draw();
					}
				},
				intro: { content: "已记录花色$" },
				mod: { maxHandcardBase: player => player.maxHp },
				// 临时修改（by 棘手怀念摧毁）
				// onremove: (player, skill) => player.removeTip(skill),
			},
			baoxi: {
				audio: 2,
				trigger: { global: ["loseEnd", "cardsDiscardEnd", "loseAsyncEnd"] },
				filter(event, player) {
					if (player.getStorage("baoxi_used").includes("juedou")) return false;
					if (event.name.indexOf("lose") === 0 && (event.getlx === false || event.position !== ui.discardPile)) return false;
					return event.cards.filter(card => get.type(card) === "basic").length > 1 && player.hasUseTarget(new lib.element.VCard({ name: "juedou" }));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("baoxi"), "减1点体力上限，视为对一名角色使用【决斗】", (card, player, target) => {
							return player.canUse(new lib.element.VCard({ name: "juedou" }), target);
						})
						.set("ai", target => {
							const player = get.player();
							if (player.maxHp === 1) return 0;
							return get.effect(target, new lib.element.VCard({ name: "juedou" }), player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.addTempSkill("baoxi_used");
					player.markAuto("baoxi_used", ["juedou"]);
					await player.loseMaxHp();
					await player.useCard(new lib.element.VCard({ name: "juedou" }), event.targets[0], false);
				},
				group: "baoxi_sha",
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
					sha: {
						audio: "baoxi",
						trigger: { global: ["loseEnd", "cardsDiscardEnd", "loseAsyncEnd"] },
						filter(event, player) {
							if (player.getStorage("baoxi_used").includes("sha")) return false;
							if (event.name.indexOf("lose") === 0 && (event.getlx === false || event.position !== ui.discardPile)) return false;
							return event.cards.filter(card => get.type(card) !== "basic").length > 1 && player.hasUseTarget(new lib.element.VCard({ name: "sha" }));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt("baoxi"), "减1点体力上限，视为对一名角色使用【杀】", (card, player, target) => {
									return player.canUse(new lib.element.VCard({ name: "sha" }), target);
								})
								.set("ai", target => {
									const player = get.player();
									if (player.maxHp === 1) return 0;
									return get.effect(target, new lib.element.VCard({ name: "sha" }), player, player);
								})
								.forResult();
						},
						async content(event, trigger, player) {
							player.addTempSkill("baoxi_used");
							player.markAuto("baoxi_used", ["sha"]);
							await player.loseMaxHp();
							await player.useCard(new lib.element.VCard({ name: "sha" }), event.targets[0], false);
						},
					},
				},
			},
		},
		dynamicTranslate: {
			yizan_use: function (player) {
				if (player.storage.yizan) return "你可以将一张基本牌当做任意基本牌使用或打出。";
				return "你可以将两张牌（其中至少一张为基本牌）当做任意基本牌使用或打出。";
			},
			miaojian: function (player) {
				return ["出牌阶段限一次。你可将一张【杀】当做刺【杀】使用，或将一张锦囊牌当做【无中生有】使用。", "出牌阶段限一次。你可将一张基本牌当做刺【杀】使用，或将一张非基本牌当做【无中生有】使用。", "出牌阶段限一次。你可视为使用一张刺【杀】或【无中生有】。"][player.countMark("miaojian")];
			},
			shhlianhua: function (player) {
				return ["当你成为【杀】的目标后，你摸一张牌。", "当你成为【杀】的目标后，你摸一张牌。然后你进行判定，若结果为黑桃，则此【杀】对你无效。", "当你成为【杀】的目标后，你摸一张牌。然后此【杀】的使用者选择一项：①弃置一张牌。②令此【杀】对你无效。"][player.countMark("shhlianhua")];
			},
			spshidi: function (player) {
				if (player.countMark("spshidi") % 2 == 0) return '转换技，锁定技。①准备阶段/结束阶段开始时，若你发动此分支的累计次数为奇数/偶数，则你获得一个“☯”。<span class="bluetext">②若你的“☯”数为偶数，则你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。</span>③若你的“☯”数为奇数，则其他角色至你的距离+1，且你不可响应红色【杀】。';
				return '转换技，锁定技。①准备阶段/结束阶段开始时，若你发动此分支的累计次数为奇数/偶数，则你获得一个“☯”。②若你的“☯”数为偶数，则你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。<span class="bluetext">③若你的“☯”数为奇数，则其他角色至你的距离+1，且你不可响应红色【杀】。</span>';
			},
			mobilexingxue: function (player) {
				return lib.translate[(player.storage.mobileyanzhu ? "mobilexingxuex" : "mobilexingxue") + "_info"];
			},
			shoufa: function (player) {
				const zhoufa = player.storage.zhoulin_zhoufa;
				const nodoudizhu = get.mode() == "doudizhu" ? "与你距离大于/不大于1的" : "与你距离大于/不大于2的";
				if (!zhoufa) return "当你受到伤害后/于一回合首次造成伤害后，你可以选择一名" + nodoudizhu + "角色，令其随机执行以下一项：豹，令其受到1点无来源伤害；鹰，你随机获得其一张牌；熊，你随机弃置其装备区的一张牌；兔，令其摸一张牌。";
				let str = "当你受到伤害后/于一回合首次造成伤害后，你可以选择一名" + nodoudizhu + "角色，";
				str += ["令其受到1点无来源伤害", "你随机获得其一张牌", "你随机弃置其装备区的一张牌", "令其摸一张牌"][["豹", "鹰", "熊", "兔"].indexOf(zhoufa)];
				return str + "。";
			},
			mbxuetu(player) {
				const xuetu = player.storage.mbxuetu,
					status = player.countMark("mbxuetu_status");
				if (status === 0) {
					if (!xuetu) return '转换技。出牌阶段限一次，<span class="bluetext">阴：你可以令一名角色回复1点体力；</span>阳：你可以令一名角色摸两张牌。';
					return '转换技。出牌阶段限一次，阴：你可以令一名角色回复1点体力；<span class="bluetext">阳：你可以令一名角色摸两张牌。</span>';
				} else if (status === 1) {
					return lib.translate.mbxuetu_achieve_info;
				} else {
					if (!xuetu) return '转换技。出牌阶段限一次，<span class="bluetext">阴：你可以回复1点体力，然后令一名其他角色弃置两张牌；</span>阳：你可以摸一张牌，然后对一名其他角色造成1点伤害。';
					return '转换技。出牌阶段限一次，阴：你可以回复1点体力，然后令一名其他角色弃置两张牌；<span class="bluetext">阳：你可以摸一张牌，然后对一名其他角色造成1点伤害。</span>';
				}
			},
			mbzuoyou(player) {
				const mbzuoyou = player.storage.mbzuoyou,
					versus = get.mode() == "versus" && _status.mode == "two" ? "角色" : "有手牌的角色弃置一张手牌，然后其";
				if (mbzuoyou) return '转换技。出牌阶段限一次，阴：你可以令一名角色摸三张牌，然后其弃置两张牌；<span class="bluetext">阳：你可以令一名' + versus + "获得1点护甲。</span>";
				return '转换技。出牌阶段限一次，<span class="bluetext">阴：你可以令一名角色摸三张牌，然后其弃置两张牌；</span>阳：你可以令一名' + versus + "获得1点护甲。";
			},
			xiongjin(player){
				const storage = player.storage.xiongjin;
				var str = "转换技。";
				if (!storage) str += '<span class="bluetext">';
				str += "阳：出牌阶段开始时，你可以摸X张牌，然后本回合的弃牌阶段开始时，你弃置所有非基本牌";
				if (!storage) str += "</span>";
				str += "；";
				if (storage) str += '<span class="bluetext">';
				str += "阴，其他角色的出牌阶段开始时，你可以令其摸X张牌，然后本回合的弃牌阶段开始时，其弃置所有基本牌";
				if (storage) str += "</span>";
				return str+="（X为你已损失的体力值，至少为1，至多为3）。";
			},
		},
		translate: {
			liuzan: "手杀留赞",
			liuzan_prefix: "手杀",
			re_sp_zhugeliang: "手杀界卧龙",
			re_sp_zhugeliang_prefix: "手杀界",
			ly_piliche: "霹雳车",
			ly_piliche_info: "当你对其他角色造成伤害后，你可以弃置其装备区内的所有牌。",
			polu: "破橹",
			polu_info: "锁定技，回合开始时，若【霹雳车】未加入游戏或在牌堆/弃牌堆内，则你使用之；当你受到1点伤害后，若你的装备区里没有【霹雳车】，则你摸一张牌并使用牌堆中的一张随机武器牌。",
			choulve: "筹略",
			choulve_info: "出牌阶段开始时，你可以令一名其他角色交给你一张牌，若其如此做，视为你使用上一张对你过造成伤害且不为延时锦囊牌的牌。",
			tunchu: "屯储",
			tunchu_info: "摸牌阶段，若你没有「粮」，你可以多摸两张牌。若如此做，摸牌阶段结束时，你可以将任意张手牌置于你的武将上，称为「粮」，只要你的武将牌上有「粮」，你便不能使用【杀】。",
			shuliang: "输粮",
			shuliang_info: "一名角色的结束阶段开始时，若其手牌数少于体力值，你可以移去一张「粮」，然后该角色摸两张牌。",
			fenyin: "奋音",
			yingjian: "影箭",
			fenyin_info: "你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌的颜色不同，则你可以摸一张牌。",
			yingjian_info: "准备阶段开始时，你可以视为使用一张无距离限制的【杀】。",
			dujin: "独进",
			dujin_info: "摸牌阶段，你可以多摸X+1张牌（X为你装备区里牌数的一半且向上取整）。",
			shixin: "释衅",
			shixin_info: "锁定技，当你受到火属性伤害时，你防止此伤害。",
			zhaohuo: "招祸",
			zhaohuo_info: "锁定技，当其他角色进入濒死状态时，你将体力上限调整为1点。若你的体力上限因此减少，则你摸X张牌。（X为你以此法减少的体力上限）",
			yixiang: "义襄",
			yixiang_info: "每名角色的回合限一次，当你成为一名角色使用牌的目标后，若该角色的体力值大于你的体力值，你可以随机获得牌堆里的一张你没有的基本牌。",
			yirang: "揖让",
			yirang_info: "出牌阶段开始时，你可以将所有非基本牌交给一名体力上限大于你的其他角色，然后调整体力上限至与该角色相同并回复X点体力（X为你以此法交给其的牌的类别数）。",
			kuangcai: "狂才",
			kuangcai_info: "出牌阶段开始时，你可以令你此阶段内的主动出牌时间变为5秒。若如此做，你于此阶段内使用牌没距离和次数限制，且每当你于此阶段内使用牌时，你摸一张牌且主动出牌时间-1秒。若主动出牌时间减至0，则你结束出牌阶段。",
			shejian: "舌剑",
			shejian_info: "弃牌阶段结束时，若你于此阶段弃置过至少两张牌且这些牌花色均不相同，则你可以弃置一名其他角色的一张牌。",
			xinfu_daigong: "怠攻",
			xinfu_daigong_info: "每回合限一次。当你受到伤害时，你可以展示所有手牌，然后令伤害来源选择一项：交给你一张与你所有手牌花色均不相同的一张牌，或防止此伤害。",
			xinfu_zhaoxin: "昭心",
			xinfu_zhaoxin_info: "出牌阶段限一次，你可以将任意张牌置于武将牌上并摸等量的牌，称之为「望」（你至多拥有三张「望」）。你或你攻击范围内的一名其他角色的摸牌阶段结束后，其可以获得一张由你选择的「望」，然后你可以对其造成1点伤害。",
			zhaoxin_give: "昭心",
			zhaoxin_give_info: "",
			xinfu_qianchong: "谦冲",
			xinfu_qianchong_info: "锁定技，若你的装备区内有牌且：均为红色，则你视为拥有技能〖明哲〗。均为黑色，则你视为拥有技能〖帷幕〗。若均不满足，则出牌阶段开始时，你可以选择一种类别的牌，然后你本回合内使用该类别的牌时没有次数和距离限制。",
			qc_weimu: "帷幕",
			qc_weimu_info: "锁定技，你不能成为黑色锦囊牌的目标。",
			qc_mingzhe: "明哲",
			qc_mingzhe_info: "当你于回合外因使用、打出或弃置而失去一张红色牌时，你可以摸一张牌。",
			xinfu_shangjian: "尚俭",
			xinfu_shangjian_info: "锁定技。一名角色的结束阶段开始时，若你于此回合内不因使用装备牌而失去了X张或更少的牌，则你摸等量的牌（X为你的体力值）。",
			rw_bagua_skill: "先天八卦阵",
			rw_bagua_skill_info: "当你需要使用或打出一张【闪】时，你可以进行判定，若判定结果不为黑桃，视为你使用或打出了一张【闪】。",
			rw_baiyin_skill: "照月狮子盔",
			rw_baiyin_skill_info: "锁定技，当你受到大于1的伤害时，你将伤害值改为1；当你失去装备区里的【照月狮子盔】时，你回复1点体力并摸两张牌。",
			rw_lanyinjia: "精银甲",
			rw_lanyinjia_info: "你可以将一张手牌当做【闪】使用或打出。锁定技，【精银甲】不会无效。",
			rw_minguangkai_cancel: "耀光铠",
			rw_minguangkai_cancel_info: "锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
			rw_minguangkai_link: "耀光铠",
			rw_minguangkai_link_info: "锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
			rw_renwang_skill: "仁王金刚盾",
			rw_renwang_skill_info: "黑色【杀】和红桃【杀】对你无效。",
			rw_tengjia1: "桐油百韧甲",
			rw_tengjia1_info: "锁定技，【南蛮入侵】、【万箭齐发】和普【杀】对你无效。当你受到火焰伤害时，此伤害+1。当你即将被横置时，取消之。",
			rw_tengjia2: "桐油百韧甲",
			rw_tengjia2_info: "锁定技，【南蛮入侵】、【万箭齐发】和普【杀】对你无效。当你受到火焰伤害时，此伤害+1。当你即将被横置时，取消之。",
			rw_tengjia3: "桐油百韧甲",
			rw_tengjia3_info: "锁定技，【南蛮入侵】、【万箭齐发】和普【杀】对你无效。当你受到火焰伤害时，此伤害+1。当你即将被横置时，取消之。",
			rw_tengjia4: "桐油百韧甲",
			rewrite_bagua: "先天八卦阵",
			rewrite_bagua_info: "当你需要使用或打出一张【闪】时，你可以进行判定，若判定结果不为黑桃，视为你使用或打出了一张【闪】。",
			rewrite_baiyin: "照月狮子盔",
			rewrite_baiyin_info: "锁定技，当你受到大于1的伤害时，你将伤害值改为1；当你失去装备区里的【照月狮子盔】时，你回复1点体力并摸两张牌。",
			rewrite_lanyinjia: "精银甲",
			rewrite_lanyinjia_info: "你可以将一张手牌当做【闪】使用或打出。锁定技，【精银甲】不会无效。",
			rewrite_minguangkai: "耀光铠",
			rewrite_minguangkai_info: "锁定技，当你成为【火烧连营】、【火攻】或火【杀】的目标时，或即将被横置时，取消之。",
			rewrite_renwang: "仁王金刚盾",
			rewrite_renwang_info: "黑色【杀】和红桃【杀】对你无效。",
			rewrite_tengjia: "桐油百韧甲",
			rewrite_tengjia_info: "锁定技，【南蛮入侵】、【万箭齐发】和普【杀】对你无效。当你受到火焰伤害时，此伤害+1。当你即将被横置时，取消之。",
			rewrite_zhuge: "元戎精械弩",
			rewrite_zhuge_info: "锁定技，你于出牌阶段内使用【杀】无次数限制。",
			rw_zhuge_skill: "诸葛连弩",
			rw_zhuge_skill_info: "锁定技，你于出牌阶段内使用【杀】无次数限制。",
			takaramono: "宝物",
			wolong_card: "卧龙",
			wolong_card_info: "对一名角色造成1点火焰伤害。若场上有存活的诸葛亮(火)，则改为对至多两名角色各造成1点火焰伤害。",
			fengchu_card: "凤雏",
			fengchu_card_info: "横置至多三名角色。若场上有存活的庞统(火)，则改为横置至多四名角色。",
			xuanjian_card: "玄剑",
			xuanjian_card_info: "令一名角色摸一张牌并回复1点体力。若场上有存活的徐庶(将/界)，则改为令一名角色摸一张牌并回复1点体力，然后你摸一张牌。",
			shuijing_card: "水镜",
			shuijing_card_info: "将一名角色装备区内的防具牌移动到另一名角色对应区域。若场上有存活的司马徽，则改为将1名角色装备区内的1件装备移动到另1角色对应区域。",
			xinfu_pingcai: "评才",
			xinfu_pingcai_info: "出牌阶段限一次，你可以挑选一个宝物并擦拭掉其上面的灰尘。然后，你可以根据宝物类型执行对应的效果。",
			xinfu_pdgyingshi: "隐世",
			xinfu_pdgyingshi2: "隐世",
			xinfu_pdgyingshi_info: "锁定技，你始终跳过准备阶段，判定阶段，结束阶段。你不能被选择为延时锦囊牌的目标。",
			pcaudio_wolong_card: "卧龙",
			pcaudio_wolong_card_info: "",
			pcaudio_fengchu_card: "凤雏",
			pcaudio_fengchu_card_info: "",
			pcaudio_shuijing_card: "水镜",
			pcaudio_shuijing_card_info: "",
			pcaudio_xuanjian_card: "玄剑",
			pcaudio_xuanjian_card_info: "",
			yizan_respond_sha: "翊赞",
			yizan_respond_sha_info: "",
			yizan_use: "翊赞",
			yizan_use_backup: "翊赞",
			yizan_use_info: "你可以将两张牌（其中至少一张为基本牌）当做任意基本牌使用或打出。",
			yizan_respond_shan: "翊赞",
			yizan_respond_shan_info: "",
			xinfu_longyuan: "龙渊",
			xinfu_longyuan_info: "觉醒技，准备阶段，若你本局游戏内发动过〖翊赞〗的次数大于等于3，则你修改〖翊赞〗。",
			yizan_rewrite: "翊赞·改",
			yizan_rewrite_info: "你可以将一张基本牌当做任意基本牌使用或打出。",
			yizan_count: "翊赞",
			yizan_count_info: "",
			xinfu_jingxie1: "精械",
			xinfu_jingxie1_info: "出牌阶段，你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌，然后对其进行强化。当你处于濒死状态时，你可以重铸一张防具牌，然后将体力回复至1点。",
			xinfu_jingxie2: "精械",
			xinfu_jingxie2_info: "",
			xinfu_qiaosi: "巧思",
			xinfu_qiaosi_info: "出牌阶段限一次，你可以投掷一枚六面骰子，亮出牌堆顶的X张牌并获得之。然后，你选择一项：1.交给一名其他角色X张牌。2.弃置X张牌。（X为骰子的点数）",
			xin_xiahoudun: "手杀界夏侯惇",
			xin_xiahoudun_prefix: "手杀界",
			xinqingjian: "清俭",
			xinqingjian2: "清俭",
			xinqingjian_info: "每回合限一次。当你不因摸牌阶段的额定摸牌而得到牌后，你可以将任意张手牌扣置于武将牌上。回合结束时，你将这些牌交给任意名其他角色。若这些牌的数量大于1，你摸一张牌。",
			zhangyì: "张翼",
			jiakui: "贾逵",
			zhiyi: "执义",
			zhiyi_info: "锁定技，当你于一回合内使用或打出第一张基本牌时，你选择一项：1.摸一张牌。2.于此牌A（若此牌是因响应牌B而使用或打出的，则改为牌B）的使用或打出流程结算完成后，视为使用一张与此牌名称和属性相同的卡牌。",
			rezhiyi: "执义",
			rezhiyi_info: "锁定技，一名角色的结束阶段开始时，若你本回合内使用或打出过基本牌，则你选择一项：1.摸一张牌。2.视为使用一张你本回合内使用或打出过的基本牌。",
			zhongzuo: "忠佐",
			zhongzuo_info: "一名角色的结束阶段开始时，若你于此回合内造成或受到过伤害，则你可以令一名角色摸两张牌。若该角色已受伤，则你摸一张牌。",
			wanlan: "挽澜",
			wanlan_info: "限定技，当一名角色进入濒死状态时，你可以弃置所有手牌（无牌可不弃）。其回复体力至1点，然后你对当前回合角色造成1点伤害。",
			re_jikang: "手杀嵇康",
			re_jikang_prefix: "手杀",
			shenpei: "审配",
			re_wangyun: "手杀王允",
			re_wangyun_prefix: "手杀",
			relianji: "连计",
			relianji_info: "出牌阶段限一次，你可以选择两名其他角色。第一名角色随机使用牌堆中的一张武器牌，然后这名角色视为对另一名角色随机使用一张下列的牌名的牌：【决斗】、【火攻】、【南蛮入侵】、【万箭齐发】或普【杀】。然后若此牌造成伤害，你获得X枚“连计”标记（X为此次扣减的体力值点数）。",
			remoucheng: "谋逞",
			remoucheng_info: "觉醒技，当一名角色因〖连计〗造成伤害后，若你拥有的“连计”标记数大于2，你加1点体力上限，回复1点体力，失去“连计”，获得“矜功”。",

			shouye: "守邺",
			shouye_info: "每回合限一次。当其他角色使用牌指定你为唯一目标时，你可以与其进行【对策】。若你赢，则你取消此牌的目标，且你于此牌结算完成后获得其对应的所有实体牌。",
			liezhi: "烈直",
			liezhi_info: "准备阶段，你可以依次弃置至多两名其他角色区域内的各一张牌。若你受到过伤害，则〖烈直〗于你的下个回合无效。",

			xinzhanyi: "战意",
			xinzhanyi_info: "出牌阶段限一次，你可以弃置一张牌并失去1点体力，然后根据你弃置的牌获得以下效果直到回合结束：基本牌，你可以将一张基本牌当作【杀】、【酒】或【桃】使用，且你本回合第一次以此法使用的牌的回复值/伤害值+1；锦囊牌，摸三张牌且你使用的牌不能被【无懈可击】响应；装备牌，你使用【杀】指定唯一目标后，其弃置两张牌，然后你获得其中的一张。",
			xinzhanyi_basic_backup: "战意",
			xinzhanyi_basic: "战意",
			xinzhanyi_equip: "战意",

			meiyong: "姝勇",
			meiyong_info: "当你使用或打出【杀】时，你可以获得一名其他角色区域内的一张牌，然后其摸一张牌。",
			rexushen: "许身",
			rexushen_info: "限定技，出牌阶段，你可以失去X点体力（X为场上男性角色的数量）。若你以此法进入了濒死状态，则当你因一名角色而脱离此濒死状态后，你可以令其获得技能〖武圣〗和〖当先〗。",
			rezhennan: "镇南",
			rezhennan_info: "当你成为其他角色使用的牌的目标后，若此牌的目标数大于该角色的体力值，则你可以弃置一张牌并对其造成1点伤害。",

			hujinding: "手杀胡金定",
			hujinding_prefix: "手杀",
			huaizi: "怀子",
			huaizi_info: "锁定技，你的手牌上限为你的体力上限。",
			renshi: "仁释",
			renshi_info: "锁定技，当你受到【杀】的伤害时，若你已受伤，则你防止此伤害并获得此【杀】对应的所有实体牌，然后减1点体力上限。",
			wuyuan: "武缘",
			wuyuan_info: "出牌阶段限一次，你可将一张【杀】交给一名其他角色，然后你回复1点体力，其摸一张牌。若此【杀】为：红色【杀】，其回复1点体力；属性【杀】，其改为摸两张牌。",

			re_weiwenzhugezhi: "手杀卫温诸葛直",
			re_weiwenzhugezhi_prefix: "手杀",
			gz_re_xugong: "许贡",
			re_xugong: "手杀许贡",
			re_xugong_prefix: "手杀",
			re_zhanggong: "手杀张恭",
			re_zhanggong_prefix: "手杀",
			reqianxin: "遣信",
			reqianxin_info: "出牌阶段限一次，你可将至多两张手牌随机交给等量的其他角色，称为「信」。这些角色的准备阶段开始时，若其手牌中有「信」，则其选择一项：令你摸两张牌，本回合手牌上限-2。",
			rebiaozhao: "表召",
			rebiaozhao_info: "结束阶段，你可以将一张牌置于武将牌上，称为「表」。当有一张与「表」点数相同的牌进入弃牌堆后，你将「表」置入弃牌堆并失去1点体力。准备阶段，若你的武将牌上有「表」，则你移去「表」并选择一名角色，该角色回复1点体力并摸三张牌。",
			rebiaozhao2: "表召",
			rebiaozhao2_info: "",
			rebiaozhao3: "表召",
			rebiaozhao3_info: "",
			refuhai: "浮海",
			refuhai_info: "出牌阶段限一次，你可令其他角色同时在「潮起」和「潮落」中选择一项，并依次展示这些角色的选项。若从你下家开始选择了相同选项的角色数目大于1，则你摸X张牌（X为连续相同结果的数量）。",
			qiaosi: "巧思",
			qiaosi_info: "出牌阶段限一次，你可以表演「大键角色图」并根据表演结果获得相应的牌。然后，你选择一项：1.弃置X张牌。2.将X张牌交给一名其他角色。（X为你以此法得到的牌数）",
			qiaosi_map: "大键角色图",
			qiaosi_map_info: "<br><li>星野 梦美：锦囊牌*2<br><li>能美 库特莉亚芙卡：装备牌/【杀】/【酒】*1<br><li>友利 奈绪：【杀】/【酒】*1<br><li>神尾 观铃：【闪】/【桃】*1<br><li>伊吹 风子：锦囊牌/【闪】/【桃】*1<br><li>仲村 由理：装备牌*2<br><li>Illustration:うら;Twitter:@ura530",
			qiaosi_c1: '<img src="' + lib.assetURL + 'image/card/qiaosi_card1.png" width="60" height="60"> ',
			//星野 梦美
			qiaosi_c2: '<img src="' + lib.assetURL + 'image/card/qiaosi_card2.png" width="60" height="60"> ',
			//能美 库特莉亚芙卡
			qiaosi_c3: '<img src="' + lib.assetURL + 'image/card/qiaosi_card3.png" width="60" height="60"> ',
			//友利 奈绪
			qiaosi_c4: '<img src="' + lib.assetURL + 'image/card/qiaosi_card4.png" width="60" height="60"> ',
			//神尾 观铃
			qiaosi_c5: '<img src="' + lib.assetURL + 'image/card/qiaosi_card5.png" width="60" height="60"> ',
			//伊吹 风子
			qiaosi_c6: '<img src="' + lib.assetURL + 'image/card/qiaosi_card6.png" width="60" height="60"> ',
			//仲村 由理

			yangbiao: "手杀杨彪",
			yangbiao_prefix: "手杀",
			zhaohan: "昭汉",
			zhaohan_info: "锁定技，你的第1-4个准备阶段开始时，你加1点体力上限并回复1点体力，你的第5-7个准备阶段开始时，你减1点体力上限。",
			rangjie: "让节",
			rangjie_info: "当你受到1点伤害后，你可以选择一项并摸一张牌：获得牌堆或弃牌堆里你选择的类型的一张牌，或移动场上的一张牌。",
			yizheng: "义争",
			yizheng2: "义争",
			yizheng_info: "出牌阶段限一次，你可以和一名体力值不大于你的其他角色拼点。若你赢，其跳过下个摸牌阶段。若你没赢，你减1点体力上限。",
			re_heqi: "手杀贺齐",
			re_heqi_prefix: "手杀",
			reqizhou: "绮胄",
			reqizhou_info: "锁定技，你根据装备区里牌的花色数获得以下技能：1种或以上：〖英姿〗；2种或以上：〖奇袭〗；3种或以上：〖旋风〗。",
			reshanxi: "闪袭",
			reshanxi2: "闪袭",
			reshanxi_info: "出牌阶段开始时，你可以弃置一张红色基本牌并选择一名有牌的其他角色，将其的至多X张牌置于其的武将牌上（X为你的体力值）。回合结束时，该角色获得这些牌。",
			chendeng: "手杀陈登",
			chendeng_prefix: "手杀",
			zhouxuan: "周旋",
			zhouxuan2: "周旋",
			zhouxuan_info: "出牌阶段限一次，你可以弃置一张牌并指定一名敌方角色，然后选择一个基本牌的名称或非基本牌的类型。其使用或打出下一张牌时，若此牌的名称或类型和你选择的相同，则你观看牌堆顶的三张牌，然后将这些牌以任意分割方式交给任意名角色。",
			zhouxuan_info_identity: "出牌阶段限一次，你可以弃置一张牌并指定一名其他角色，然后选择一个基本牌的名称或非基本牌的类型。其使用或打出下一张牌时，若此牌的名称或类型和你选择的相同，则你观看牌堆顶的三张牌，然后将这些牌以任意分割方式交给任意名角色。",
			zhouxuan_info_doudizhu: "出牌阶段限一次，你可以弃置一张牌并指定一名其他角色，然后选择一个基本牌的名称或非基本牌的类型。其使用或打出下一张牌时，若此牌的名称或类型和你选择的相同，则你观看牌堆顶的三张牌，然后将这些牌以任意分割方式交给任意名角色。",
			fengji: "丰积",
			fengji_info: "锁定技，回合结束时，你记录你的手牌数。准备阶段开始时，若你的手牌数不小于你记录的手牌数，则你摸两张牌且本回合手牌上限为体力上限。",
			re_guanqiujian: "手杀毌丘俭",
			re_guanqiujian_prefix: "手杀",
			rezhengrong: "征荣",
			rehongju: "鸿举",
			reqingce: "清侧",
			reqingce_backup: "清侧",
			rezhengrong_info: "锁定技。当你于出牌阶段使用的指定了其他角色为目标的牌结算完成后，若此牌是你本局游戏内于出牌阶段使用的指定了其他角色为目标的第偶数张牌，则你将一名其他角色角色的随机一张牌置于你的武将牌上，称为「荣」。",
			rehongju_info: "觉醒技，准备阶段，若你武将牌上「荣」的数量不小于3且有角色死亡，则你摸等同于「荣」数量的牌。然后可以用任意数量的手牌交换等量的「荣」。你减1点体力上限并获得技能〖清侧〗。",
			reqingce_info: "出牌阶段，你可以将一张「荣」置入弃牌堆，然后弃置场上的一张牌。",
			re_pangtong: "手杀界庞统",
			re_pangtong_prefix: "手杀界",
			dongcheng: "手杀董承",
			dongcheng_prefix: "手杀",
			chengzhao: "承诏",
			chengzhao_info: "一名角色的结束阶段，若你于本回合内获得了两张以上的牌，则你可以与一名其他角色拼点。若你赢，你视为对其使用一张无视防具的【杀】。",
			yangyi: "手杀杨仪",
			yangyi_prefix: "手杀",
			duoduan: "度断",
			duoduan_info: "每回合限一次，当你成为【杀】的目标后，你可以重铸一张牌。若如此做，你选择一项：①令使用者摸两张牌，且此【杀】无效。②令使用者弃置一张牌，且你不能响应此【杀】。",
			gongsun: "共损",
			gongsun_info: "出牌阶段开始时，你可以弃置两张牌并指定一名其他角色。你选择一个基本牌或普通锦囊牌的牌名。直到你的下回合开始或你死亡，你与其不能使用或打出或弃置此名称的牌。",
			gongsun_shadow: "共损",
			xin_chengpu: "手杀界程普",
			xin_chengpu_prefix: "手杀界",
			relihuo: "疠火",
			relihuo_damage: "疠火",
			relihuo_baigei: "疠火",
			relihuo_info: "当你使用普【杀】时，你可以将此【杀】改为火属性。若如此做，当你因执行此【杀】的效果而对横置角色造成伤害时，此伤害+1；当你使用的火【杀】结算完成后，你失去X点体力（X为你因此【杀】造成的伤害总点数的一半且向下取整）。",
			dengzhi: "手杀邓芝",
			dengzhi_prefix: "手杀",
			jimeng: "急盟",
			jimeng_info: "出牌阶段开始时，你可以获得一名其他角色的一张牌，然后交给该角色X张牌（X为你当前体力值）。",
			shuaiyan: "率言",
			shuaiyan_info: "弃牌阶段开始时，若你的手牌数大于1，则你可以展示所有手牌，然后你令一名其他角色交给你一张牌。",
			zhengxuan: "郑玄",
			zhengjing: "整经",
			zhengjing_info: "出牌阶段，你可以整理卡牌。然后，你将整理出的卡牌中的至少一张作为“经”置于一名角色的武将牌上，然后获得其余的牌。该角色的准备阶段获得这些牌，且跳过此回合的判定和摸牌阶段。",
			zhengjing2: "整经",

			yj_zhanghe: "☆张郃",
			yj_zhanghe_prefix: "☆",
			yj_zhangliao: "☆张辽",
			yj_zhangliao_prefix: "☆",
			yj_xuhuang: "☆徐晃",
			yj_xuhuang_prefix: "☆",
			yj_ganning: "☆甘宁",
			yj_ganning_prefix: "☆",
			xhzhiyan: "治严",
			xhzhiyan_info: "出牌阶段，若你的手牌数不等于体力上限，则你可以将手牌摸至/弃至手牌上限，然后本回合不能对其他角色使用牌/可以将弃置的一张牌交给一名其他角色。",
			zhilve: "知略",
			zhilve_info: "锁定技，准备阶段，你选择一项：1.移动场上装备区的一张牌并失去1点体力。2.移动场上判定区的一张牌并令本回合手牌上限-1。3.本回合摸牌阶段多摸一张牌且使用的第一张【杀】无距离限制且不计入次数限制。",
			xinzhilve: "知略",
			xinzhilve_backup: "知略",
			xinzhilve_mark: "知略",
			xinzhilve_info: "出牌阶段限一次，你可以失去1点体力并选择一项：1.移动场上的一张牌；2.视为使用一张无距离限制且不计入次数限制的【杀】并摸一张牌。然后你本回合的手牌上限+1。",
			xinxhzhiyan: "治严",
			xinxhzhiyan_false: "治严",
			xinxhzhiyan_info: "出牌阶段每项各限一次，若你的手牌数：大于体力值，则你可以将X张手牌交给一名其他角色（X为你的手牌数与体力值之差）；小于体力上限，则你可以摸X张牌且本阶段内不能再对其他角色使用牌。（X为你的手牌数与体力上限之差）",
			weifeng: "威风",
			weifeng2: "威风",
			weifeng3: "威风",
			weifeng_info: "锁定技，当你于出牌阶段内使用第一张伤害性基本牌或普通锦囊牌后，你令此牌的一名没有“惧”的其他目标角色获得一枚名称为此牌牌名的“惧”。有“惧”的角色受到伤害时，其移去“惧”，然后若造成伤害的牌名称和“惧”：相同，此伤害+1；不同，你获得该角色的一张牌。准备阶段开始时或你死亡时，你移去场上的所有“惧”。",
			gnjinfan: "锦帆",
			gnjinfan_gain: "锦帆",
			gnjinfan_info: "弃牌阶段开始时，你可将任意张手牌置于武将牌上，称为“铃”（每种花色的“铃”限一张）。你可以如手牌般使用或打出“铃”。当有“铃”移动到处理区后，你从牌堆中获得与“铃”花色相同的一张牌。",
			gnsheque: "射却",
			gnsheque_info: "一名其他角色的准备阶段开始时，若其装备区内有牌，则你可以对其使用一张【杀】（无距离关系的限制且无视防具）。",
			sp_sufei: "手杀苏飞",
			sp_sufei_prefix: "手杀",
			zhengjian: "诤荐",
			zhengjian_draw: "诤荐",
			zhengjian_mark: "诤荐",
			zhengjian_info: "锁定技，结束阶段，你令一名角色获得一枚“诤”。回合开始时，你令有“诤”的角色移去“诤”并摸X张牌（X为其最后一次获得“诤”后使用和打出的牌数，且至多不能超过其体力上限或5）。",
			gaoyuan: "告援",
			gaoyuan_info: "当你成为【杀】的目标时，你可弃置一张牌将此【杀】转移给一名有“诤”且不是此【杀】使用者的其他角色。",
			tongqu: "通渠",
			tongqu_info: "游戏开始时，你拥有一个“渠”标记。准备阶段，你可以失去1点体力令一名没有“渠”标记的角色获得“渠”标记。有“渠”的角色摸牌阶段额外摸一张牌，然后将一张牌交给其他有“渠”的角色或弃置。若以此法给出的是装备牌则使用之。当有“渠”的角色进入濒死状态时，移除其“渠”标记。",
			xinwanlan: "挽澜",
			xinwanlan_info: "当一名角色受到伤害值不小于体力值的伤害时，你可以弃置装备区中的所有牌（至少一张） 防止此伤害。",
			re_xusheng: "手杀界徐盛",
			re_xusheng_prefix: "手杀界",
			re_dongzhuo: "手杀界董卓",
			re_dongzhuo_prefix: "手杀界",
			rejiuchi: "酒池",
			rejiuchi_info: "你可以将一张黑桃手牌当做【酒】使用。当你于回合内使用带有【酒】效果的【杀】造成伤害时，你令你的〖崩坏〗失效直到回合结束。",
			furong: "手杀傅肜",
			furong_prefix: "手杀",
			xuewei: "血卫",
			xuewei_info: "准备阶段，你可以选择一名其他角色（仅自己可见）。若如此做，直到你的下回合开始前，当其第一次受到伤害时，你防止此伤害，改为由你受到等量的伤害并对伤害来源造成等量同属性的伤害。",
			liechi: "烈斥",
			liechi_info: "锁定技，当你进入濒死状态时，伤害来源弃置一张牌。",
			xin_liaohua: "手杀界廖化",
			xin_liaohua_prefix: "手杀界",
			redangxian: "当先",
			redangxian_info: "锁定技，回合开始时，你从弃牌堆中获得一张【杀】并进行一个额外的出牌阶段。",
			refuli: "伏枥",
			refuli_info: "限定技，当你处于濒死状态时，你可以将体力值回复至X点（X为势力数）。然后若你的体力值为全场唯一最多，你翻面。",
			xin_caozhang: "手杀界曹彰",
			xin_caozhang_prefix: "手杀界",
			rejiangchi: "将驰",
			rejiangchi_info: "出牌阶段开始时，你可以选择一项：1、摸一张牌，若如此做，你本阶段内不能使用【杀】。 2、弃置一张牌，若如此做，此阶段你使用【杀】无距离限制且你可以额外使用一张【杀】。",
			rezhenxing: "镇行",
			rezhenxing_info: "结束阶段开始时或当你受到伤害后，你可以观看牌堆顶的三张牌，然后你获得其中与其余牌花色均不相同的一张牌，将剩余牌以原顺序放回牌堆顶。",
			xin_jianyong: "手杀界简雍",
			xin_jianyong_prefix: "手杀界",
			xinqiaoshui: "巧说",
			xinqiaoshui_info: "出牌阶段限一次，你可以和一名其他角色拼点。若你赢，则你本阶段内使用下一张基本牌或普通锦囊牌时，可以为此牌增加或减少一个目标。若你没赢，你本阶段内不能使用锦囊牌。",
			xinjyzongshi: "纵适",
			xinjyzongshi_info: "当你拼点后，你可以观看牌堆顶的一张牌，然后选择一项：获得此牌，或获得两张拼点牌中点数较小的一张。",
			dingyuan: "手杀丁原",
			dingyuan_prefix: "手杀",
			beizhu: "备诛",
			beizhu_draw: "备诛",
			beizhu_info: "出牌阶段限一次，你可以观看一名其他角色的手牌。若其中：没有【杀】，你弃置其一张牌，然后你可令其获得牌堆中的一张【杀】；有【杀】，其依次对你使用这些【杀】，当你因此受到1点伤害后，你摸一张牌。",
			xin_zhuran: "手杀界朱然",
			xin_zhuran_prefix: "手杀界",
			mobiledanshou: "胆守",
			mobiledanshou_info: "一名其他角色的结束阶段开始时，若X：为0，你摸一张牌；不等于0，你可弃置X张牌并对其造成1点伤害（X为其本回合内使用的目标包含你的牌的数量）。",
			yanghuiyu: "羊徽瑜",
			hongyi: "弘仪",
			hongyi2: "弘仪",
			hongyi_info: "出牌阶段限一次，你可以选择一名其他角色。你的下回合开始前，该角色造成伤害时进行判定，若结果为：黑色，此伤害-1。红色，受到伤害的角色摸一张牌。",
			requanfeng: "劝封",
			requanfeng_gain: "劝封",
			requanfeng_info: "限定技。①其他角色死亡时，你可失去〖弘仪〗，然后获得其武将牌上的所有非主公技，非隐匿技和非Charlotte技，加1点体力上限并回复1点体力。②当你处于濒死状态时，你可以加2点体力上限，然后回复4点体力。",
			quanfeng: "劝封",
			quanfeng_info: "锁定技，限定技，一名角色死亡时，你选择获得其的一个技能（主公技，限定技，觉醒技，隐匿技，使命技，带有Charlotte标签的技能除外），然后加1点体力上限并回复1点体力。",
			simashi: "司马师",
			baiyi: "败移",
			baiyi_info: "限定技，出牌阶段，若你已受伤，你可以交换两名其他角色的座次。",
			jinglve: "景略",
			jinglve2: "景略",
			jinglve3: "景略",
			jinglve_info: "出牌阶段限一次，若场上没有与你对应的「死士」牌，则你可以观看一名其他角色的手牌，将其中一张牌标记为「死士」。当其使用对应的实体牌中包含「死士」的牌时，你取消此牌的所有目标。当「死士」牌不因使用而进入弃牌堆，或其回合结束后，若「死士」牌仍在其区域内，则你获得此牌。",
			shanli: "擅立",
			shanli_info: "觉醒技，准备阶段，若你已发动过〖败移〗且对至少两名角色发动过〖景略〗，则你减1点体力上限并选择一名角色。系统随机选择三个不为〖忘隙(仲村由理)〗的主公技，然后你选择其中一个技能，令其获得之。其将交互表情中的【拖鞋】和【酒杯】替换为【枷锁】和【玉玺】。",
			re_lingtong: "手杀界凌统",
			re_lingtong_prefix: "手杀界",
			re_liubiao: "手杀界刘表",
			re_liubiao_prefix: "手杀界",
			hucheer: "手杀胡车儿",
			hucheer_prefix: "手杀",
			daoji: "盗戟",
			daoji_info: "出牌阶段限一次，你可以弃置一张非基本牌并选择一名装备区里有牌的其他角色，你获得其装备区中的一张牌并使用之。若你以此法得到的牌是武器牌，则你使用此牌后对其造成1点伤害。",
			xin_hansui: "手杀韩遂",
			xin_hansui_prefix: "手杀",
			xinniluan: "逆乱",
			xinniluan_info: "其他角色的结束阶段，若其本回合对除其以外的角色使用过牌，则你可以对其使用一张【杀】。若以此法使用的【杀】造成伤害，则你弃置其一张牌。",
			xiaoxi_hansui: "骁袭",
			xiaoxi_hansui_info: "你可以将一张黑色牌当做【杀】使用或打出。",
			xin_zhangfei: "手杀界张飞",
			xin_zhangfei_prefix: "手杀界",
			liyong: "厉勇",
			liyong2: "厉勇",
			liyong3: "厉勇",
			liyong_info: "锁定技，若你于出牌阶段内使用的【杀】被【闪】抵消，则你获得如下效果：你本回合使用的下一张【杀】不可被响应且伤害+1，指定的目标本回合非锁定技失效，当此【杀】造成伤害后，若目标角色未死亡，你失去1点体力。",
			gongsunkang: "公孙康",
			juliao: "据辽",
			juliao_info: "锁定技，其他角色计算与你的距离始终+X（X为场上势力数-1）。",
			taomie: "讨灭",
			taomie1: "讨灭",
			taomie2: "讨灭",
			taomie3: "讨灭",
			taomie4: "讨灭",
			taomie_info: "当你受到伤害后或当你造成伤害后，你可以令伤害来源或受伤角色获得“讨灭”标记（如场上已有标记则转移给该角色）；你和拥有“讨灭”标记的角色视为在彼此的攻击范围内，且当你对该角色造成伤害时，选择一项：1. 此伤害+1；2. 你获得其区域内的一张牌并可将之交给另一名角色；3. 依次执行前两项并于伤害结算后弃置其“讨灭”标记。",
			xin_guohuai: "手杀界郭淮",
			xin_guohuai_prefix: "手杀界",
			mobilejingce: "精策",
			mobilejingce_info: "结束阶段，若此回合因使用或打出而置入弃牌堆的牌的数量不小于你的体力值，则你可以摸两张牌。",
			xin_panzhangmazhong: "手杀界潘璋马忠",
			xin_panzhangmazhong_prefix: "手杀界",
			xinduodao: "夺刀",
			xinduodao_info: "当你受到伤害后，你可以获得伤害来源装备区里的武器牌。",
			xinanjian: "暗箭",
			xinanjian_info: "锁定技，当你使用【杀】指定目标后，若你不在目标角色攻击范围内，你选择一项：1. 令其无法响应此【杀】；2. 其受到此【杀】造成的伤害+1。",
			xin_fuhuanghou: "手杀界伏寿",
			xin_fuhuanghou_prefix: "手杀界",
			xinzhuikong: "惴恐",
			xinzhuikong_info: "每轮限一次，其他角色的回合开始时，若其体力值不小于你，你可与其拼点。若你赢，其本回合无法使用牌指定除其以外的角色为目标；若你没赢，你获得其拼点的牌，然后其视为对你使用一张【杀】。",
			xinqiuyuan: "求援",
			xinqiuyuan_info: "当你成为【杀】的目标时，你可以令另一名其他角色交给你一张除【杀】以外的基本牌，否则其也成为此【杀】的目标。",
			xin_gongsunzan: "手杀界公孙瓒",
			xin_gongsunzan_prefix: "手杀界",
			re_dengai: "手杀界邓艾",
			re_dengai_prefix: "手杀界",
			flappybird: "飞鸟",
			flappybird_info: "出牌阶段，你可游玩一局Flappy Bird。",
			re_handang: "手杀界韩当",
			re_handang_prefix: "手杀界",
			nanhualaoxian: "手杀南华老仙",
			nanhualaoxian_prefix: "手杀",
			yufeng: "御风",
			yufeng2: "御风",
			yufeng_info: "出牌阶段限一次，你可以表演“御风飞行”。若表演失败，则你摸X张牌。若表演成功，则你可以选择至多X名其他角色获得“御风”效果，然后摸X-Y张牌（准备阶段开始时，你进行判定。若结果为：红色，你跳过摸牌阶段；黑色，你跳过出牌阶段和弃牌阶段。X为你的得分。Y为你选择的角色数）。",
			tianshu: "天书",
			tianshu_info: "出牌阶段开始时，若场上没有【太平要术】，则你可以弃置一张牌并选择一名角色。该角色获得并使用【太平要术】。",
			re_jiangwei: "手杀界姜维",
			re_jiangwei_prefix: "手杀界",
			retiaoxin: "挑衅",
			retiaoxin_info: "出牌阶段限一次，你可以指定一名有牌的其他角色，该角色需对你使用一张【杀】，否则你弃置其一张牌。",
			re_zhurong: "手杀界祝融",
			re_zhurong_prefix: "手杀界",
			relieren: "烈刃",
			relieren_info: "当你使用【杀】指定目标后，你可以和目标角色进行拼点。若你赢，你获得其一张牌。若你没赢，你获得对方的拼点牌，其获得你的拼点牌。",
			zhouqun: "周群",
			tiansuan: "天算",
			tiansuan_info: "出牌阶段限一次，若场上没有因你产生的“命运签”，则你可以抽取一张“命运签”，然后令一名角色获得“命运签”直到你的下回合开始。若你以此法抽取的“命运签”为：上上签，你观看其手牌并获得其区域内的一张牌；上签，你获得其一张牌。",
			tiansuan_faq: "【命运签】说明",
			tiansuan_faq_info: "当你抽取“命运签”时，你可以令其中一种命运签的权重+1。<br>上上签（权重1）：当你受到伤害时，防止此伤害。<br>上签（权重2）：当你受到伤害时，你令伤害值改为1；当你受到1点伤害后，你摸一张牌。<br>中签（权重3）：当你受到伤害时，你令伤害属性改为火属性并将伤害值改为1。<br>下签（权重2）：当你受到伤害时，你令此伤害+1。<br>下下签（权重1）：当你受到伤害时，你令此伤害+1。你不能使用【酒】或【桃】。",
			tiansuan2_0: "命运签",
			tiansuan2_1: "命运签",
			tiansuan2_2: "命运签",
			tiansuan2_damage: "命运签",
			tiansuan2_fire: "命运签",
			tiansuan2_3: "命运签",
			tiansuan2_4: "命运签",
			ol_yujin: "手杀界于禁",
			ol_yujin_prefix: "手杀界",
			rejieyue: "节钺",
			rejieyue_info: "结束阶段开始时，你可以将一张牌交给一名其他角色。然后其选择一项：令你摸三张牌：或其保留一张手牌和装备区的牌，然后弃置其余的牌。",
			xin_zhoucang: "手杀界周仓",
			xin_zhoucang_prefix: "手杀界",
			mobilezhongyong: "忠勇",
			mobilezhongyong_info: "当你于出牌阶段内使用的【杀】结算结束后，若没有目标角色使用【闪】响应过此【杀】，则你可获得此【杀】；否则你可选择一项：①获得目标角色使用的【闪】，然后可将此【杀】交给另一名其他角色。②将目标角色使用的【闪】交给另一名其他角色，然后你本回合使用【杀】的次数上限+1且下一张【杀】的伤害值基数+1。（你不能使用本回合因执行〖忠勇〗的效果得到的牌）",
			xin_caifuren: "手杀界蔡夫人",
			xin_caifuren_prefix: "手杀界",
			xinqieting: "窃听",
			xinqieting_info: "其他角色的回合结束时，若其本回合内未对其他角色造成过伤害，则你可选择一项：①摸一张牌。②观看其两张手牌并获得其中的一张。③将其装备区内的一张牌移动至你的装备区。",
			xinguixiu: "闺秀",
			xinguixiu_info: "锁定技。结束阶段，若你的体力值为：奇数，你摸一张牌；偶数，你回复1点体力。",
			re_zhonghui: "手杀界钟会",
			re_zhonghui_prefix: "手杀界",
			requanji: "权计",
			requanji_info: "出牌阶段结束时，若你的手牌数大于体力值，或当你受到1点伤害后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。",
			xin_guyong: "手杀界顾雍",
			xin_guyong_prefix: "手杀界",
			xinshenxing: "慎行",
			xinshenxing_info: "出牌阶段限X次（X为你的体力值），你可以弃置两张牌，然后摸一张牌。若这两张牌颜色不同，则改为摸两张牌。",
			xinbingyi: "秉壹",
			xinbingyi_info: "结束阶段，你可展示所有手牌。若这些牌的颜色或类型均相同，则你可以令至多X名角色各摸一张牌（X为你的手牌数）。",
			qiaozhou: "手杀谯周",
			qiaozhou_prefix: "手杀",
			zhiming: "知命",
			zhiming_info: "准备阶段开始时或弃牌阶段结束时，你摸一张牌，然后可以将一张牌置于牌堆顶。",
			xingbu: "星卜",
			xingbu_info: "结束阶段，你可以亮出牌堆顶的三张牌，然后你可以根据X值（X为这三张牌中红色牌的数量），令一名其他角色获得对应的效果直到其下回合结束：①三张：其摸牌阶段多摸两张牌，使用【杀】的次数上限+1。②两张：其使用【杀】的次数上限-1，跳过弃牌阶段。③小于两张：其于准备阶段开始时弃置一张手牌。",
			xin_sunluban: "手杀界孙鲁班",
			xin_sunluban_prefix: "手杀界",
			xinzenhui: "谮毁",
			xinzenhui_info: "出牌阶段限一次。当你使用【杀】或黑色普通锦囊牌指定目标时，你可选择另一名能成为此牌目标的其他角色并选择一项：①令其也成为此牌的目标。②获得其一张牌，然后将此牌的使用者改为该角色。",
			xinjiaojin: "骄矜",
			xinjiaojin_info: "当你受到男性角色造成的伤害时，你可以弃置一张装备牌并防止此伤害。",
			xin_caozhen: "手杀界曹真",
			xin_caozhen_prefix: "手杀界",
			discretesidi: "司敌",
			discretesidi_info: "①当你使用的不为延时锦囊牌的牌结算结束后，你可选择一名R内不存在以a为第一序偶的二元序偶的其他角色a，并选择一名角色b，在关系R内建立二元序偶&lt;a,b&gt;（b对其他角色不可见）。②一名角色a使用不为延时锦囊牌的牌指定b为目标时，若(aRb)∧(此牌目标数为1)为真，则{你从R内移除&lt;a,b&gt;，且：若b为你，你摸一张牌；若b不为你，你可选择：⒈取消此牌的目标，然后若场上没有处于濒死状态的角色，则你对a造成1点伤害。⒉摸两张牌}；否则{你清除R内以a为第一元素的二元序偶}。",
			mbsidi: '司敌',
			mbsidi_info: '当你使用非延时锦囊牌结算完毕后，你可以选择一名未指定“司敌”目标的其他角色，并为其指定一名“司敌”目标角色（仅你可见）。其使用的下一张非延时锦囊牌指定目标后，清除你为其指定的“司敌”目标角色，若此时其使用此牌仅指定“司敌”目标为唯一目标，且目标：为你，你摸一张牌；不为你，你可以选择一项：⒈取消此牌目标，然后若场上没有处于濒死的角色，你对其造成1点伤害；⒉摸两张牌。',
			fuqian: "傅佥",
			jueyong: "绝勇",
			jueyong_info: "锁定技。①当你不因〖绝勇〗成为唯一牌的目标时，若此牌不为转化牌且对应的实体牌牌数为1且不为【桃】或【酒】且你的“绝”数小于你的体力值，则你将此牌置于你的武将牌上，称为“绝”，且取消此牌的目标。②结束阶段开始时，若你有“绝”，则你令所有“绝”的原使用者依次对你使用所有“绝”，将无法使用的“绝”置入弃牌堆。",
			poxiang: "破降",
			poxiang_info: "出牌阶段限一次。你可以将一张牌交给一名其他角色。你摸三张牌（不计入本回合的手牌上限），移去所有“绝”并失去1点体力。",
			mayuanyi: "马元义",
			jibing: "集兵",
			jibing_info: "①摸牌阶段开始时，若你的“兵”数小于势力数，则你可以改为将牌堆顶的两张牌置于你的武将牌上，称为“兵”。②你可以将一张“兵”当做【杀】或【闪】使用或打出。",
			wangjing: "往京",
			wangjing_info: "锁定技。当你因〖集兵〗而使用或打出牌时，若对方是场上体力值最高的角色，则你摸一张牌。",
			moucuan: "谋篡",
			moucuan_info: "觉醒技。准备阶段，若你的“兵”数不小于势力数，则你减1点体力上限并获得〖兵祸〗。",
			binghuo: "兵祸",
			binghuo_info: "一名角色的结束阶段开始时，若你本回合内因〖集兵〗而使用或打出过牌，则你可令一名角色判定。若判定结果为黑色，则你对其造成1点雷属性伤害。",
			yanpu: "阎圃",
			huantu: "缓图",
			huantu_info: "每轮限一次。一名角色的摸牌阶段开始前，若其在你攻击范围内，则你可以交给其一张牌并令其跳过此阶段。然后你于此回合的结束阶段选择一项：①令其回复1点体力并摸两张牌。②你摸三张牌，然后交给其两张手牌。",
			bihuo: "避祸",
			bihuo_info: "限定技。一名角色脱离濒死状态时，你可以令其摸三张牌，然后其他角色计算至其的距离时+X直到本轮结束（X为角色数）。",
			sunhanhua: "手杀孙寒华",
			sunhanhua_prefix: "手杀",
			chongxu: "冲虚",
			chongxu_info: "出牌阶段限一次，你可以随机演奏一首音乐，并根据完成度来获得相应的分数（至多五分）。然后你可修改〖妙剑〗或〖莲华〗（消耗3分），并使用剩余的分数进行摸牌（每张2分）。",
			chongxu_faq: "目前的曲库",
			chongxu_faq_info: "　<br>《鸟之诗》- 折户伸治<br>《竹取飛翔　～ Lunatic Princess》- ZUN<br>《ignotus》- ak+q<br>《Super Mario 3D World Theme》- 横田真人<br>《只因你太美》- SWIN-S<br>《Croatian Rhapsody》- Maksim<br>《罗刹海市》- 刀郎<br>《Pigstep (Stereo Mix)》- Lena Raine",
			miaojian: "妙剑",
			miaojian_info: "出牌阶段限一次。你可将一张【杀】当做刺【杀】使用，或将一张锦囊牌当做【无中生有】使用。",
			miaojian1: "妙剑·改",
			miaojian1_info: "出牌阶段限一次。你可将一张基本牌当做刺【杀】使用，或将一张非基本牌当做【无中生有】使用。",
			miaojian2: "妙剑·极",
			miaojian2_info: "出牌阶段限一次。你可视为使用一张刺【杀】或【无中生有】。",
			shhlianhua: "莲华",
			shhlianhua_info: "当你成为【杀】的目标后，你摸一张牌。",
			shhlianhua1: "莲华·改",
			shhlianhua1_info: "当你成为【杀】的目标后，你摸一张牌。然后你进行判定，若结果为黑桃，则此【杀】对你无效。",
			shhlianhua2: "莲华·极",
			shhlianhua2_info: "当你成为【杀】的目标后，你摸一张牌。然后此【杀】的使用者选择一项：①弃置一张牌。②令此【杀】对你无效。",
			re_yufan: "手杀界虞翻",
			re_yufan_prefix: "手杀界",
			rezongxuan: "纵玄",
			rezongxuan_place: "纵玄",
			rezongxuan_info: "当你的牌因弃置而进入弃牌堆后，你可以将其以任意顺序置于牌堆顶。出牌阶段限一次，你可以摸一张牌，然后将一张牌置于牌堆顶。",
			yj_huangzhong: "☆黄忠",
			yj_huangzhong_prefix: "☆",
			spshidi: "势敌",
			spshidi_info: "转换技，锁定技。①准备阶段/结束阶段开始时，若你发动此分支的累计次数为奇数/偶数，则你获得一个“☯”。②若你的“☯”数为偶数，则你至其他角色的距离-1，且你使用的黑色【杀】不可被响应。③若你的“☯”数为奇数，则其他角色至你的距离+1，且你不可响应红色【杀】。",
			spyishi: "义释",
			spyishi_info: "当你对装备区有牌的其他角色造成伤害时，你可令此伤害-1，然后获得其装备区内的一张牌。",
			spqishe: "骑射",
			spqishe_info: "你可以将一张装备牌当做【酒】使用。你的手牌上限+X（X为你装备区内的牌数）。",
			sp_maojie: "毛玠",
			bingqing: "秉清",
			bingqing_info: "当你于出牌阶段内使用的牌结算完毕后，若你于本阶段内此前使用的所有牌的花色与此牌花色均不相同，则你可根据X的值执行对应效果：为2，你令一名角色摸两张牌；为3，你弃置一名角色区域内的一张牌；为4，你对一名其他角色造成1点伤害。（X为你于本阶段内此前使用的所有牌包含的花色数+1）",
			yingfeng: "迎奉",
			yingfeng_info: "准备阶段，你可以令一名角色获得“奉”标记并移除场上所有其他的“奉”标记。有“奉”标记的角色使用牌没有距离限制。",
			xin_sunxiu: "手杀界孙休",
			xin_sunxiu_prefix: "手杀界",
			mobileyanzhu: "宴诛",
			mobileyanzhu_info: "出牌阶段限一次，你可以令一名有牌的其他角色选择一项：①你获得其装备区里所有的牌，然后你失去技能〖宴诛〗并修改技能〖兴学〗。②你获得其区域里的一张牌。",
			mobilexingxue: "兴学",
			mobilexingxue_info: "结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶（X为你的体力值）。",
			mobilexingxuex: "兴学·改",
			mobilexingxuex_info: "结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶或交给一名其他目标角色（X为你的体力上限）。",
			re_wuguotai: "手杀界吴国太",
			re_wuguotai_prefix: "手杀界",
			reganlu: "甘露",
			reganlu_info: "出牌阶段限一次，你可以选择装备区牌数之差的绝对值不大于X的两名角色或包含你在内的两名角色，然后交换这两名角色装备区内的牌。（X为你已损失的体力值）",
			taoqian: "手杀陶谦",
			taoqian_prefix: "手杀",
			miheng: "手杀祢衡",
			miheng_prefix: "手杀",
			re_gaoshun: "手杀界高顺",
			re_gaoshun_prefix: "手杀界",
			peixiu: "手杀裴秀",
			peixiu_prefix: "手杀",
			xingtu: "行图",
			xingtu1: "倍数",
			xingtu2: "约数",
			xingtu_info: "锁定技。你使用点数为X的倍数的牌无次数限制，你使用点数为X的约数的牌时摸一张牌（X为你本局游戏使用的上一张牌的点数）。",
			juezhi: "爵制",
			juezhi_info: "出牌阶段，你可以弃置至少两张牌，然后从牌堆中获得一张点数为Y的牌（Y为这些牌的点数和对13取余，余数为0时Y取13）。",
			sp_jianggan: "手杀蒋干",
			sp_jianggan_prefix: "手杀",
			spdaoshu: "盗书",
			spdaoshu_info: "每轮限一次。一名敌方角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你获得其两张手牌。",
			spdaoshu_info_identity: "每轮限一次。一名其他角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你获得其两张手牌。",
			spdaoshu_info_guozhan: "每轮限一次。一名其他角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你获得其两张手牌。",
			mbdaoshu: "盗书",
			mbdaoshu_info: "出牌阶段限一次，你可以选择一名手牌数不少于两张的敌方角色，其随机获得三个牌名并将一张手牌的牌名伪装成其中一个与原牌名不同的牌名，然后你和队友观看其手牌并猜测其伪装的手牌，猜对的角色对其造成1点伤害，猜错的角色随机弃置两张手牌（手牌数不足两张则改为失去1点体力）。",
			mbdaoshu_info_identity: "出牌阶段限一次，你可以选择一名手牌数不少于两张的其他角色，其随机获得三个牌名并将一张手牌的牌名伪装成其中一个与原牌名不同的牌名，然后你观看其手牌并猜测其伪装的手牌。若猜中，你对其造成1点伤害；若猜错，你随机弃置两张手牌（手牌数不足两张则改为失去1点体力）。",
			mbdaoshu_info_guozhan: "出牌阶段限一次，你可以选择一名手牌数不少于两张的其他角色，其随机获得三个牌名并将一张手牌的牌名伪装成其中一个与原牌名不同的牌名，然后你观看其手牌并猜测其伪装的手牌。若猜中，你对其造成1点伤害；若猜错，你随机弃置两张手牌（手牌数不足两张则改为失去1点体力）。",
			spdaizui: "戴罪",
			spdaizui2: "戴罪",
			spdaizui_info: "限定技。当你受到伤害值不小于体力值的伤害时，你可防止此伤害并将此伤害渠道对应的所有实体牌置于伤害来源的武将牌上，称为“释”。本回合结束时，其获得所有“释”。",
			re_caiwenji: "手杀界蔡琰",
			re_caiwenji_prefix: "手杀界",
			re_bulianshi: "手杀界步练师",
			re_bulianshi_prefix: "手杀界",
			reanxu: "安恤",
			reanxu_info: "出牌阶段限一次，你可以选择两名其他角色，令其中一名角色获得另一名角色的一张牌。若以此法移动的牌不来自装备区，则你摸一张牌。然后你可以令二者中手牌数较少的一名角色摸一张牌。",
			xin_jushou: "手杀界沮授",
			xin_jushou_prefix: "手杀界",
			xinjianying: "渐营",
			xinjianying_info: "①当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。②出牌阶段限一次，你可以将一张牌当做任意基本牌使用。若你于此阶段内使用的上一张牌有花色，则此牌的花色视为上一张牌的花色。",
			re_xunyu: "手杀界荀彧",
			re_xunyu_prefix: "手杀界",
			rejieming: "节命",
			rejieming_info: "当你受到1点伤害后，你可以令一名角色摸两张牌。然后若其手牌数小于体力上限，则你摸一张牌。",
			xin_quancong: "手杀界全琮",
			xin_quancong_prefix: "手杀界",
			sbyaoming: "邀名",
			sbyaoming_info: "蓄力技（2/4）。①当你受到1点伤害后，你可以获得1点蓄力值。②出牌阶段或当你受到伤害后，你可消耗1点蓄力值并选择一项：⒈弃置一名手牌数不小于你的角色的一张牌。⒉令一名手牌数不大于你的角色摸一张牌。若你上次发动〖邀名②〗时未获得过蓄力值且你选择的选项和上次不同，则你获得1点蓄力值。",
			ruanhui: "阮慧",
			mingcha: "明察",
			mingcha_info: "摸牌阶段开始时，你亮出牌堆顶的三张牌。若这三张牌中有点数小于9的牌，则你可以放弃摸牌并获得这些牌，然后你可以获得一名其他角色的随机一张牌。",
			jingzhong: "敬重",
			jingzhong_info: "弃牌阶段结束时，若你于本阶段内弃置过至少两张黑色牌，则你可以选择一名其他角色并获得如下效果直到其回合结束：每阶段限三次，其于出牌阶段内使用的牌结算结束后，你获得此牌对应的实体牌。",
			xin_mamidi: "手杀马日磾",
			xin_mamidi_prefix: "手杀",
			chengye: "承业",
			chengye_info: "锁定技。①其他角色使用的非转化牌结算结束后，或其他角色的装备牌和延时锦囊牌进入弃牌堆后，或有延时锦囊牌因其他角色执行判定阶段的流程而进入弃牌堆后，若你的“六经”有空缺的位置可以置入此牌，则你将此牌置于你武将牌上，填补“六经”的对应位置。②出牌阶段开始时，若你的“六经”没有空缺的位置，则你获得所有“六经”。",
			chengye_append: '<span style="font-family:yuanli"><li>《诗经》：伤害类锦囊牌<br><li>《尚书》：基本牌<br><li>《仪礼》：无懈可击<br><li>《易经》：无中生有<br><li>《乐经》：乐不思蜀<br><li>《春秋》：装备牌</span>',
			buxu: "补续",
			buxu_backup: "补续",
			buxu_info: "出牌阶段，若你的“六经”中有空缺的位置，则你可以弃置X+1张牌并选择一种空缺的“六经”（X为你本阶段内发动过〖补续〗的次数）。系统从牌堆中检索一张对应的牌，然后你将此牌置于你武将牌上，填补“六经”的对应位置。",
			re_dianwei: "手杀界典韦",
			re_dianwei_prefix: "手杀界",
			liuye: "手杀刘晔",
			liuye_prefix: "手杀",
			sp_caosong: "手杀曹嵩",
			sp_caosong_prefix: "手杀",
			yijin: "亿金",
			yijin_info: "锁定技。①游戏开始时，你获得“膴仕”、“金迷”、“贾凶”、“通神”、“拥蔽”、“厚任”各1枚（均称为“金”）。②出牌阶段开始时，你选择一名没有“金”的其他角色。你交给其1枚“金”，且令其获得对应效果。③一名角色的回合结束后，若其有你交给其的“金”，其移去此“金”。④当你死亡时，移去场上所有你交出的“金”。⑤回合开始时，若你没有“金”，你死亡。",
			yijin_wushi: "膴仕",
			yijin_wushi_info: "锁定技。①摸牌阶段，你多摸四张牌。②你使用【杀】的次数上限+1。",
			yijin_jinmi: "金迷",
			yijin_jinmi_info: "锁定技。回合开始时，你跳过下一个出牌阶段和弃牌阶段。",
			yijin_guxiong: "贾凶",
			yijin_guxiong_info: "锁定技。①出牌阶段开始时，你失去1点体力。②你的手牌上限-3。",
			yijin_tongshen: "通神",
			yijin_tongshen_info: "锁定技。当你受到非雷电伤害时，防止之。",
			yijin_yongbi: "拥蔽",
			yijin_yongbi_info: "锁定技。准备阶段，你跳过下一个摸牌阶段。",
			yijin_houren: "厚任",
			yijin_houren_info: "锁定技。回合结束时，你回复3点体力。",
			guanzong: "惯纵",
			guanzong_info: "出牌阶段限一次。你可以令一名其他角色视为对另一名其他角色造成过1点伤害。",
			yangfu: "杨阜",
			jiebing: "借兵",
			jiebing_info: "锁定技。当你受到伤害后，你选择来源外的一名其他角色，随机获得其一张牌并展示。若此牌为装备牌，你使用之。",
			hannan: "扞难",
			hannan_info: "出牌阶段限一次。你可以与一名角色拼点，赢的角色对没赢的角色造成1点伤害。",
			xin_wuyi: "手杀界吴懿",
			xin_wuyi_prefix: "手杀界",
			sbbenxi: "奔袭",
			sbbenxi_info: "出牌阶段开始时，你可以弃置至少一张牌，然后你于此阶段获得如下效果：①你至其他角色距离-X；②当你使用的下一张基本牌或普通锦囊牌A选择目标后，你可以额外指定X名距离为1的角色为目标；③牌A结算结束后，若此牌造成过伤害，你摸五张牌（X为你以此法弃置的牌数）。",
			xin_zhuzhi: "手杀界朱治",
			xin_zhuzhi_prefix: "手杀界",
			sbanguo: "安国",
			sbanguo_info: "①游戏开始时，你令一名其他角色获得1枚“安国”标记（有“安国”的角色手牌上限基数等于体力上限）。②出牌阶段开始时，你可以将一名有“安国”的角色的所有“安国”移动给一名本局游戏未获得过“安国”的其他角色。③当你受到伤害时，若有有“安国”的角色且伤害值不小于你的体力值且此伤害没有来源或来源没有“安国”，防止此伤害。④一名角色进入濒死状态时，若其有你因〖安国①〗获得的“安国”，你移去其该“安国”，令其将体力回复至1点。然后你选择一项：1.若你的体力值大于1，你失去体力至1点；2.若你的体力上限大于1，你将体力上限减至1。最后你令其获得1点护甲。",
			wangjun: "手杀王濬",
			wangjun_prefix: "手杀",
			zhujian: "筑舰",
			zhujian_info: "出牌阶段限一次。你可以令至少两名装备区里有牌的角色各摸一张牌。",
			duansuo: "断索",
			duansuo_info: "出牌阶段限一次。你可以重置任意名处于连环状态的角色，然后对这些角色各造成1点火焰伤害。",
			sp_pengyang: "手杀彭羕",
			sp_pengyang_prefix: "手杀",
			spdaming: "达命",
			spdaming_info: "①游戏开始时，你获得1点“达命”值。②其他角色A的出牌阶段限一次。其可以交给你一张牌，然后你选择另一名其他角色B。若B有与此牌相同类型的牌，其将一张该类型的牌交给A，你获得1点“达命”值；否则你将此牌交给A。",
			spxiaoni: "嚣逆",
			spxiaoni_info: "①出牌阶段限一次。若你的“达命”值大于0，你可以将一张牌当任意一种【杀】或伤害类锦囊牌使用。然后你减少等同于此牌指定目标数的“达命”值。②你的手牌上限基数为X（X为“达命”值，且至多为你的体力值，至少为0）。",
			xin_zhuhuan: "手杀界朱桓",
			xin_zhuhuan_prefix: "手杀界",
			xinpingkou: "平寇",
			xinpingkou_info: "回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。然后你从牌堆中获得一张装备牌。",
			xin_caoxiu: "手杀界曹休",
			xin_caoxiu_prefix: "手杀界",
			xinqingxi: "倾袭",
			xinqingxi_info: "每回合限一次。当你对其他角色造成伤害时，你可以令其选择一项：1.弃置X张手牌（X为4减去你至其的距离，至少为1）；2.令此伤害+1。",
			yj_weiyan: "☆魏延",
			yj_weiyan_prefix: "☆",
			mbguli: "孤厉",
			mbguli_info: "出牌阶段限一次。你可以将所有手牌当做一张无视防具的【杀】使用。此牌结算结束后，若此牌造成过伤害，你可以失去1点体力并将手牌摸至X张（X为你的体力上限）。",
			mbaosi: "骜肆",
			mbaosi_info: "锁定技。当你于出牌阶段对一名攻击范围内的角色造成伤害后，你于此阶段对其使用牌无次数限制。",
			xin_zhoutai: "手杀界周泰",
			xin_zhoutai_prefix: "手杀界",
			re_yanwen: "手杀界颜良文丑",
			re_yanwen_prefix: "手杀界",
			qianzhao: "手杀牵招",
			qianzhao_prefix: "手杀",
			mbshihe: "势吓",
			mbshihe_info_identity: "出牌阶段限一次。你可以与一名角色拼点。若你：赢，当其于其下回合结束前对你造成伤害时，取消之；没赢，你随机弃置一张牌。",
			mbshihe_info: "出牌阶段限一次。你可以与一名角色拼点。若你：赢，当其于其下回合结束前对你和你的友方角色造成伤害时，取消之；没赢，你随机弃置一张牌。",
			mbzhenfu: "镇抚",
			mbzhenfu_info: "结束阶段，若你本回合因弃置失去过牌，你可以令一名其他角色获得1点护甲。",
			shichangshi: "十常侍",
			mbdanggu: "党锢",
			mbdanggu_info: "锁定技。①游戏开始时，你获得十张“常侍”牌，然后你进行一次结党。②当你修整结束后，你进行一次结党并摸一张牌。③若你有亮出的“常侍”牌，你视为拥有这些牌的技能。",
			mbdanggu_faq: "关于结党",
			mbdanggu_faq_info: "<br>系统随机选择一张未亮出过的“常侍”牌，然后选择四张未亮出过的“常侍”牌。你观看前者，然后从后者中选择一名认可前者的“常侍”牌。然后若此时不为双将模式，你将这两张武将牌作为你的武将牌（不移除原有技能）；否则你获得这两张武将牌上的技能。",
			mbdanggu_faq2: "关于认可",
			mbdanggu_faq2_info: "<br>双向不认可常侍为固定组合：<br><li>郭胜、段珪<br><li>韩悝、毕岚<br>单向不认可常侍为系统随机分配。<br>每次结党至多存在一张不认可主将的常侍牌，且若此次结党仅有一张常侍牌，则不会存在不认可情况。",
			mbmowang: "殁亡",
			mbmowang_info: "锁定技。①当你死亡前，若你有未亮出的“常侍”牌且体力上限大于0，你将死亡改为修整至你的下个回合开始前，然后你复原武将牌，且不于此次死亡事件中进行展示身份牌、检测游戏胜利条件与执行奖惩的流程。②回合结束后，你死亡。",
			mbmowang_faq: "关于修整",
			mbmowang_faq_info: "<br>将武将牌移出游戏（视为你存活）。当该角色修整结束，其移回游戏。",
			scs_zhangrang: "张让",
			scstaoluan: "滔乱",
			scstaoluan_info: "出牌阶段限一次。你可以将一张牌当任意一种基本牌或普通锦囊牌使用。",
			scs_zhaozhong: "赵忠",
			scschiyan: "鸱咽",
			scschiyan_info: "①当你使用【杀】指定目标后，你可以将其的一张牌置于其武将牌上，然后其于当前回合结束时获得这些牌。②当你因执行【杀】的效果对一名角色造成伤害时，若该角色的手牌数和装备区内的牌数均不大于你，此伤害+1。",
			scs_sunzhang: "孙璋",
			scszimou: "自谋",
			scszimou_info: "锁定技。出牌阶段，当你使用第二/四/六张牌时，你从牌堆中获得一张【酒】/【杀】/【决斗】。",
			scs_bilan: "毕岚",
			scspicai: "庀材",
			scspicai_info: "出牌阶段限一次。你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同，则你可以重复此流程。然后你将所有位于处理区的判定牌交给一名角色。",
			scs_xiayun: "夏恽",
			scsyaozhuo: "谣诼",
			scsyaozhuo_info: "出牌阶段限一次。你可以与一名角色拼点，若你赢，其跳过下一个摸牌阶段；若你没赢，你弃置两张牌。",
			scs_hankui: "韩悝",
			scsxiaolu: "宵赂",
			scsxiaolu_info: "出牌阶段限一次。你可以摸两张牌，然后选择一项：1.弃置两张手牌；2.将两张手牌交给一名其他角色。",
			scs_lisong: "栗嵩",
			scskuiji: "窥机",
			scskuiji_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后弃置你与其的共计四张花色各不相同的手牌。",
			scs_duangui: "段珪",
			scschihe: "叱吓",
			scschihe_info: "当你使用【杀】指定唯一目标后，你可亮出牌堆顶的两张牌，令此【杀】的伤害值基数+X（X为亮出牌中花色与此【杀】相同的牌数），且目标角色不能使用亮出牌包含的花色的牌响应此【杀】。",
			scs_guosheng: "郭胜",
			scsniqu: "逆取",
			scsniqu_info: "出牌阶段限一次。你可以对一名角色造成1点火焰伤害。",
			scs_gaowang: "高望",
			scsanruo: "安弱",
			scsanruo_info: "你可以将一张♥牌当【桃】、♦牌当火【杀】、♣牌当【闪】、♠牌当【无懈可击】使用。当你以此法使用或打出【杀】或【闪】时，你可以获得对方的一张牌；当你以此法使用【桃】时，你可以获得一名其他角色的一张牌；当你以此法使用【无懈可击】时，你可以获得此牌响应的普通锦囊牌的使用者的一张牌。",
			scsmiaoyu: "妙语",
			scsmiaoyu_info: "你可以将至多两张相同花色的牌按照以下规则使用或打出：♦牌当作火【杀】，♥牌当作【桃】，♣牌当作【闪】，♠牌当作【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。",
			re_xiaoqiao: "手杀界小乔",
			re_xiaoqiao_prefix: "手杀界",
			xin_sunliang: "手杀孙亮",
			xin_sunliang_prefix: "手杀",
			xinkuizhu: "溃诛",
			xinkuizhu_info: "弃牌阶段结束后，你可以选择一项：1.令至多X名角色各摸一张牌。2.对任意名体力值之和为X的角色造成1点伤害，若你以此法选择的角色数不小于2，你失去1点体力。（X为你此阶段弃置的牌数）",
			xinzhizheng: "掣政",
			xinzhizheng_info: "锁定技，你的出牌阶段内，攻击范围内不包含你的其他角色不能成为你使用牌的目标。出牌阶段结束时，若你本阶段内使用的牌数小于这些角色的数量，则你弃置其中一名角色的一张牌。",
			xinlijun: "立军",
			xinlijun_info: "主公技，其他吴势力角色于其回合内使用【杀】结算完毕后，其可以将此【杀】对应的实体牌交给你，然后你可以令其摸一张牌。",
			xin_zhangyi: "手杀界张嶷",
			xin_zhangyi_prefix: "手杀界",
			xinwurong: "怃戎",
			xinwurong_info: "出牌阶段限一次，你可以与一名其他角色进行谋弈：<br><li>若你选择“镇压”且其选择“反抗”，你对其造成1点伤害，然后你摸一张牌。<br><li>若你选择“安抚”且其选择“归顺”，其须交给你两张牌（若其牌数不足两张，则改为令其跳过其下个摸牌阶段）。<br><li>若你选择“镇压”且其选择“归顺”，你获得其一张牌，然后你交给其两张牌。<br><li>若你选择“安抚”且其选择“反抗”，你受到1点伤害，然后你摸两张牌。",
			xin_guozhao: "手杀郭照",
			xin_guozhao_prefix: "手杀",
			yichong: "易宠",
			yichong_info: "①准备阶段，你可以选择一名其他角色并选择一个花色，然后你获得其所有此花色的装备牌和其一张此花色的手牌，移除场上的所有“雀”标记，令其获得“雀”标记直到你的下个回合开始。②拥有“雀”标记的角色获得你最后一次发动〖易宠①〗选择的花色的牌后，你获得这些牌（你至多通过每个“雀”得到一张牌）。",
			wufei: "诬诽",
			wufei_info: "若场上存在拥有“雀”标记的角色A，则：①当你使用【杀】或伤害类锦囊牌指定第一个目标后，你令A成为此牌伤害来源。②当你受到伤害后，若A的体力值大于3，则你可以令A受到1点无来源伤害。",
			yj_zhoubuyi: "☆周不疑",
			yj_zhoubuyi_prefix: "☆",
			mbhuiyao: "慧夭",
			mbhuiyao_info: "出牌阶段限一次。你可以受到1点无来源伤害，然后你选择一名其他角色，令其视为对另一名角色造成过1点伤害。",
			mbquesong: "雀颂",
			mbquesong_info: "一名角色的结束阶段，若你于本回合受到过伤害，你可以令一名角色选择一项：1.摸X张牌并复原武将牌（X为3，若其装备区非宝物牌牌数不小于三张则X为2）；2.回复1点体力。",
			xin_yuanshao: "手杀界袁绍",
			xin_yuanshao_prefix: "手杀界",
			re_baosanniang: "手杀鲍三娘",
			re_baosanniang_prefix: "手杀",
			re_liushan: "手杀界刘禅",
			re_liushan_prefix: "手杀界",
			re_sunben: "界孙笨",
			re_sunben_prefix: "界",
			re_zhangzhang: "手杀界张昭张纮",
			re_zhangzhang_prefix: "手杀界",
			re_caozhi: "手杀界曹植",
			re_caozhi_prefix: "手杀界",
			re_sunjian: "手杀界孙坚",
			re_sunjian_prefix: "手杀界",
			sunru: "手杀孙茹",
			sunru_prefix: "手杀",
			pangdegong: "手杀庞德公",
			pangdegong_prefix: "手杀",
			zhaotongzhaoguang: "手杀赵统赵广",
			zhaotongzhaoguang_prefix: "手杀",
			re_liru: "手杀界李儒",
			re_liru_prefix: "手杀界",
			re_chenqun: "手杀界陈群",
			re_chenqun_prefix: "手杀界",
			old_yuanshu: "手杀袁术",
			old_yuanshu_prefix: "手杀",
			baoxin: "鲍信",
			mutao: "募讨",
			mutao_info: "出牌阶段限一次。你可以选择一名角色，令其将手牌中所有的【杀】置于武将牌上，然后将这些牌依次随机交给其下家开始的每一名角色。然后其对最后一名以此法获得【杀】的角色A造成X点伤害（X为A手牌中【杀】的数量且至多为2）。",
			yimou: "毅谋",
			yimou_info: "当一名角色受到伤害后，若其存活且你至其的距离不大于1，你可以选择一项：1.令其从牌堆中获得一张【杀】；2.令其将一张手牌交给另一名角色，然后摸一张牌。",
			jiangji: "蒋济",
			jilun: "机论",
			jilun_info: "①当你受到伤害后，若你拥有技能〖急筹〗，则你可以一项：1.摸两张牌。2.获得1枚“机论”标记。②一名角色的结束阶段，若你拥有“机论”，则重复选择执行以下项直到你没有“机论”标记：1.失去1枚“机论”标记，视为使用一张〖急筹①〗记录过且未被〖机论②〗记录过的普通锦囊牌并记录此牌牌名。2.失去所有“机论”标记。",
			liwei: "李遗",
			jiaohua: "教化",
			jiaohua_backup: "教化",
			jiaohua_info: "出牌阶段限两次，你可以选择一个未被〖教化〗记录过的牌的类型，令一名角色从牌堆中获得一张此类型的牌，然后记录此类型，若基本、锦囊、装备均已被你发动〖教化〗记录，则你清空〖教化〗记录。",
			laimin: "来敏",
			laishou: "来寿",
			laishou_info: "锁定技。①当你受到伤害值大于等于你的体力值的伤害时，若你的体力上限小于9，你防止此伤害并增加等量体力上限。②准备阶段，若你的体力上限不小于9，你死亡。",
			luanqun: "乱群",
			luanqun_info: "出牌阶段限一次，若你有手牌，则你可以令所有有手牌的角色同时展示一张手牌，然后你可以获得其中至多两张与你展示的牌颜色相同的展示牌，所有本次展示牌颜色与你展示的牌颜色不同的角色的下个出牌阶段使用的第一张【杀】只能对你使用，且你无法响应其于回合内使用的【杀】。",
			luanqun_info_identity: "出牌阶段限一次，若你有手牌，则你可以令所有有手牌的角色同时展示一张手牌，然后你可以获得其中至多四张与你展示的牌颜色相同的展示牌，所有本次展示牌颜色与你展示的牌颜色不同的角色的下个出牌阶段使用的第一张【杀】只能对你使用，且你无法响应其于回合内使用的【杀】。",
			xin_wuban: "吴班",
			xinjintao: "进讨",
			xinjintao_info: "锁定技，你使用【杀】无距离限制且次数上限+1。你于出牌阶段内使用的第一张【杀】不可被响应，第二张【杀】伤害+1。",
			xinlianhuan: "连环",
			xinlianhuan_info: "你可以将一张♣手牌当【铁索连环】使用或重铸。你使用【铁索连环】选择目标后，可以给此牌增加一个目标。",
			mb_sunluyu: "手杀孙鲁育",
			mb_sunluyu_prefix: "手杀",
			mbmumu: "穆穆",
			mbmumu_info: "出牌阶段开始时，你可以选择一项：1.弃置场上的一张装备牌；2.获得场上的一张防具牌，然后你本回合不能使用或打出【杀】。",
			mbmeibu: "魅步",
			mbmeibu_info: "其他角色的出牌阶段开始时，若你在其攻击范围内，你可以弃置一张牌，令该角色于本回合内获得〖止息〗。若你以此法弃置的牌不是【杀】或黑色锦囊牌，则本回合其与你的距离视为1。",
			mbzhixi: "止息",
			mbzhixi_info: "锁定技。出牌阶段，若你于此阶段使用过的牌数不小于X，你不能使用牌（X为你的体力值）；当你使用锦囊牌时，你结束此阶段。",
			yanxiang: "阎象",
			kujian: "苦谏",
			kujian_info: "出牌阶段限一次，你可以将至多两张手牌称为“谏”并交给一名其他角色，然后你获得以下效果：其他角色失去“谏”后，若为因使用或打出而失去，你与其各摸两张牌；否则你与其各弃置一张牌。",
			ruilian: "睿敛",
			ruilian_info: "一轮游戏开始时，你可以选择一名角色。其下回合结束时，若其本回合弃置过牌，你可以选择其本回合弃置过的一种类别，你与其各从弃牌堆中获得一张此类别的牌。",
			mb_xianglang: "手杀向朗",
			mb_xianglang_prefix: "手杀",
			naxue: "纳学",
			naxue_info: "你可以跳过出牌阶段。若如此做，你可以弃置任意张牌并摸等量的牌，然后你可以交给至多两名其他角色各一张手牌。",
			yijie: "遗诫",
			yijie_info: "锁定技。当你死亡时，你令所有其他角色将体力回复或失去至X（X为所有其他角色的体力之和除以所有其他角色数，向下取整，且X至少为1）。",
			mb_chengui: "手杀陈珪",
			mb_chengui_prefix: "手杀",
			guimou: "诡谋",
			guimou_info: "锁定技。游戏开始时/回合结束时，你随机/须选择以下一项直到你的下个准备阶段：①记录场上期间角色使用牌数；②记录期间场上角色弃置牌数；③记录期间场上角色获得牌数。准备阶段，你可以选择一名场上对应记录数值最少的其他角色，观看其手牌并选择其中一张牌，然后你将此牌交给另一名其他角色或弃置此牌。",
			zhouxian: "州贤",
			zhouxian_info: "锁定技。当你成为其他角色使用的伤害类卡牌的目标后，你亮出牌堆顶的三张牌，然后其须选择一项：①弃置一张与亮出牌之一类别相同的牌；②令此牌对你无效。",
			mb_huban: "手杀胡班",
			mb_huban_prefix: "手杀",
			mbyilie: "义烈",
			mbyilie2: "义烈",
			mbyilie3: "义烈",
			mbyilie_info: "锁定技。①游戏开始时，你选择一名其他角色，然后你获得以下效果：其受到伤害时，若你没有“烈”，则你获得等同于伤害值的“烈”标记，然后防止此伤害；其对其他角色造成伤害后，你回复1点体力。②结束阶段，若你拥有“烈”标记，你摸一张牌并失去X点体力，然后移去所有“烈”（X为你拥有的“烈”标记数）。",
			muludawang: "木鹿大王",
			shoufa: "兽法",
			shoufa_info: "当你受到伤害后/于一回合首次造成伤害后，你可以选择一名与你距离大于/不大于2的角色，令其随机执行以下一项：豹，令其受到1点无来源伤害；鹰，你随机获得其一张牌；熊，你随机弃置其装备区的一张牌；兔，令其摸一张牌。",
			shoufa_info_doudizhu: "当你受到伤害后/于一回合首次造成伤害后，你可以选择一名与你距离大于/不大于1的角色，令其随机执行以下一项：豹，令其受到1点无来源伤害；鹰，你随机获得其一张牌；熊，你随机弃置其装备区的一张牌；兔，令其摸一张牌。",
			yuxiang: "御象",
			yuxiang_info: "锁定技，若你有护甲值，则：①你计算与其他角色的距离-1，其他角色计算与你的距离+1；②当你受到火焰伤害时，此伤害+1。",
			zhoulin: "咒鳞",
			zhoulin_info: "限定技，出牌阶段，你可以获得2点护甲值，然后选择一个“兽法”效果，你发动〖兽法〗的执行效果改为你选择的效果直到你的下个回合结束。",
			xin_huojun: "手杀霍峻",
			xin_huojun_prefix: "手杀",
			sidai: "伺怠",
			sidai_info: "限定技，出牌阶段，你可以将手牌区内的所有基本牌当做【杀】使用。若此牌对应的实体牌中：包含【闪】，则目标角色成为此牌的目标后，需弃置一张基本牌，否则不可响应此牌；包含【桃】，则当目标角色受到此牌的伤害后，其减1点体力上限。",
			jieyu: "竭御",
			jieyu_info: "结束阶段，你可以从弃牌堆中获得共X张不同牌名的基本牌（X为3-你上次发动〖竭御〗至今你成为其他角色使用伤害类卡牌目标的次数，且X至少为1）。",
			// jieyu_info_identity: "结束阶段，你可以从弃牌堆中获得共X张不同牌名的基本牌（X为3-你上次发动〖竭御〗至今你成为其他角色使用伤害类卡牌目标的次数，且X至少为1）。",
			yangfeng: "杨奉",
			mbxuetu: "血途",
			mbxuetu_info: "转换技。出牌阶段限一次，阴：你可以令一名角色回复1点体力；阳：你可以令一名角色摸两张牌。",
			mbxuetu_achieve: "血途·成功",
			mbxuetu_achieve_info: "出牌阶段各限一次。⒈你可以令一名角色回复1点体力；⒉你可以令一名角色摸两张牌。",
			mbxuetu_fail: "血途·失败",
			mbxuetu_fail_info: "转换技。出牌阶段限一次，阴：你可以回复1点体力，然后令一名其他角色弃置两张牌；阳：你可以摸一张牌，然后对一名其他角色造成1点伤害。",
			mbweiming: "威命",
			mbweiming_info: "使命技，锁定技。①出牌阶段开始时，你记录一名未以此法记录过的其他角色。②成功：当你杀死一名未被〖威命①〗记录过的角色后，修改〖血途〗为成功版本。③失败：当一名被〖威命①〗记录过的角色死亡后，你修改〖血途〗为失败版本。",
			lizhaojiaobo: "李昭焦伯",
			mbzuoyou: "佐佑",
			mbzuoyou_info: "转换技。出牌阶段限一次，阴：你可以令一名角色摸三张牌，然后其弃置两张手牌；阳：你可以令一名有手牌的角色弃置一张手牌，然后其获得1点护甲。",
			mbshishou: "侍守",
			mbshishou_info: "锁定技。当你发动〖佐佑〗后，若目标角色不为你，你执行〖佐佑〗中目标角色未执行的一项。",
			chengji: "成济",
			mbkuangli: "狂戾",
			mbkuangli_info: "锁定技。①出牌阶段开始时，你随机令场上任意名其他角色获得“狂戾”标记。②出牌阶段限两次，当你使用牌指定有“狂戾”的角色为目标后，你随机弃置你与其各一张牌，然后你摸两张牌。③回合结束时，你移除所有角色的“狂戾”。",
			mbkuangli_info_doudizhu: "锁定技。①出牌阶段开始时，你随机令场上任意名其他角色获得“狂戾”标记。②出牌阶段限一次，当你使用牌指定有“狂戾”的角色为目标后，你随机弃置你与其各一张牌，然后你摸两张牌。③回合结束时，你移除所有角色的“狂戾”。",
			mbxiongsi: "凶肆",
			mbxiongsi_info: "限定技。出牌阶段，若你的手牌数不少于三张，你可以弃置所有手牌，然后令所有其他角色依次失去1点体力。",
			mb_sp_guanqiujian: "玄毌丘俭",
			mb_sp_guanqiujian_prefix: "玄",
			mbcuizhen: "摧阵",
			mbcuizhen_info: "①游戏开始时，你可以废除至多三名其他角色的武器栏。②当你于出牌阶段使用伤害类牌指定其他角色为目标后，若目标角色的手牌数不小于体力值，你可以废除其武器栏。③摸牌阶段，你令额定摸牌数+X（X为所有角色被废除的武器栏数之和+1，至多为3）。",
			mbkuili: "溃离",
			mbkuili_info: "锁定技。当你受到伤害后，若来源有被废除的武器栏，你令其恢复武器栏。",
			mb_caomao: "手杀曹髦",
			mb_caomao_prefix: "手杀",
			mbqianlong: "潜龙",
			mbqianlong_info: "持恒技。①游戏开始时，你获得20枚“道心”标记。②当你得到牌后/受到1点伤害后/造成1点伤害后，你获得5/10/15枚“道心”（上限为99枚）。③若你的“道心”数不小于25/50/75/99，你视为拥有〖清正〗/〖酒诗〗/〖放逐〗/〖决进〗。",
			mbcmqingzheng: "清正",
			mbcmqingzheng_info: "持恒技。出牌阶段开始时，你可以弃置一种花色的所有手牌，并观看一名有手牌的其他角色的手牌，你弃置其中一种花色的所有牌。若其被弃置的牌数小于你以此法弃置的牌数，你对其造成1点伤害。",
			mbcmjiushi: "酒诗",
			mbcmjiushi_info: "持恒技。①当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。②当你受到伤害后，若你武将牌背面朝上且未因此次伤害发动过〖酒诗〗，你可以翻面。③当你翻面后，你获得牌堆里的一张锦囊牌。",
			mbcmfangzhu: "放逐",
			mbcmfangzhu_info: "持恒技。出牌阶段限一次，你可以选择一名不为你上个出牌阶段发动〖放逐〗的目标的其他角色，选择一项：⒈令其不能使用手牌中的非锦囊牌直到其回合结束；⒉令其所有非Charlotte技能失效直到其回合结束。",
			mbjuejin: "决进",
			mbjuejin_info: "持恒技，限定技。出牌阶段，你可以令所有角色依次将体力调整至1并获得X点护甲（X为一名角色以此法变化的体力值且你以此法获得的护甲数额外+2）。然后你将牌堆、弃牌堆、场上及所有角色手牌中的【闪】、【桃】和【酒】移出游戏且增加如下“向死存魏”的全局技能：当有牌进入弃牌堆后，系统将这些牌中的【闪】、【桃】和【酒】移出游戏。",
			mbweitong: "卫统",
			mbweitong_info: "持恒技，主公技。游戏开始时，若你有〖潜龙〗且场上有其他魏势力角色，你因“潜龙”于游戏开始时获得的“道心”标记数修改为60枚。",
			mb_simafu: "手杀司马孚",
			mb_simafu_prefix: "手杀",
			mbpanxiang: "蹒襄",
			mbpanxiang_info: "当一名角色受到伤害时，你可以选择一项（不能与上次你因其发动此技能时选择的选项相同）：⒈令此伤害-1，伤害来源摸两张牌；⒉令此伤害+1，其摸三张牌。",
			mbchenjie: "臣节",
			mbchenjie_info: "锁定技。当一名角色死亡后，若你有〖蹒襄〗且其成为过你〖蹒襄〗的目标，你弃置区域里的所有牌，摸四张牌。",
			zhangbu: "张布",
			mbchengxiong: "惩凶",
			mbchengxiong_info: "你使用锦囊牌仅指定其他角色为目标后，可选择一名牌数不小于X的其他角色，弃置其一张牌（X为你此阶段使用的牌数）。若此牌颜色与你使用的锦囊牌相同，你对其造成1点伤害。",
			mbwangzhuang: "妄专",
			mbwangzhuang_info: "一名角色受到非牌造成的伤害后，若你是伤害来源或受伤角色，你可以摸一张牌，令当前回合角色本回合非锁定技失效。",
			mb_wangjing: "王经",
			mbzujin: "阻进",
			mbzujin_info: "每回合每种牌名限一次，若你未受伤或体力值不为最低，你可将一张基本牌当作【杀】使用或打出；若你已受伤，你可将一张基本牌当作【闪】或【无懈可击】使用或打出。",
			mbjiejian: "节谏",
			mbjiejian_info: "准备阶段，你可将任意张手牌交给任意名其他角色，并令这些角色获得“节谏”标记。“节谏”角色成为一张非装备牌的唯一目标时，你可将此牌转移给你，然后摸一张牌。“节谏”角色的回合结束时，移去其“节谏”标记，若其体力值不小于X（X为你交给其牌时其的体力值），你摸两张牌。",
			mbjiejian_tag: "已分配",
			mb_wenqin: "玄文钦",
			mb_wenqin_prefix: "玄",
			mbbeiming: "孛明",
			mbbeiming_info: "游戏开始时，你可令至多两名角色获得牌堆中一张攻击范围为X的武器牌（X为其手牌中的花色数）。",
			mbchoumang: "仇铓",
			mbchoumang_info: "每回合限一次，你使用【杀】指定唯一目标或成为【杀】的唯一目标后，可以选择一项：①令此【杀】伤害+1；②若此【杀】被【闪】抵消，你可以获得与你距离为1以内的一名其他角色区域里的一张牌；③背水：弃置你与其装备栏里的武器牌，然后依次执行上述所有选项。",
			mb_simazhou: "手杀司马伷",
			mb_simazhou_prefix: "手杀",
			mbbifeng: "避锋",
			mbbifeng_info: "你成为一张基本牌或普通锦囊牌的目标时，若此牌目标数不大于4，你可取消之。若如此做，此牌结算完成后若没有其他角色响应此牌，你失去1点体力，否则摸两张牌。",
			mbsuwang: "宿望",
			mbsuwang_info: "一名角色的回合结束时，若其此回合对你使用过牌且你未受到过伤害，你可以将牌堆顶的一张牌置于武将牌上，称为宿望牌。摸牌阶段开始时，若你有宿望牌，可以改为获得之，然后可以令一名其他角色摸两张牌。",
			mb_jiachong: "手杀贾充",
			mb_jiachong_prefix: "手杀",
			mbbeini: "悖逆",
			mbbeini_info: "出牌阶段限一次，你可以选择一名体力值不小于你的角色，令你或其摸两张牌，然后未摸牌的角色选择一项：1.视为对摸牌的角色使用一张【杀】；2.获得摸牌的角色场上的一张牌。",
			mbdingfa: "定法",
			mbdingfa_info: "弃牌阶段结束时，若本回合你失去的牌数不小于你的体力值，你可以选择一项：1、回复1点体力；2、弃置一名角色至多两张牌。",
			mb_zhangfen: "手杀张奋",
			mbquchong: "渠冲",
			mbquchong_effect: "大攻车",
			mbquchong_info: "①出牌阶段，你可以重铸装备牌。②一名角色的回合结束时，你将弃牌堆中的所有装备移出游戏，然后获得等量的铸造值。③出牌阶段开始时，若场上：没有【大攻车】，则你可以依次消耗0、2、5、5点铸造值，从【大攻车·攻】和【大攻车·守】中选择一个令一名角色获得（你任选此牌花色和点数）并令其使用此牌；有【大攻车】，则你可以移动场上的一张【大攻车】（可替换原装备）。",
			// mbquchong_info_identity: "①出牌阶段，你可以重铸装备牌。②一名角色的回合结束时，你将弃牌堆中的所有装备移出游戏，然后获得等量的铸造值。③出牌阶段开始时，若场上：没有【大攻车】，则你可以依次消耗0、5、10、10点铸造值，从【大攻车·攻】和【大攻车·守】中选择一个令一名角色获得（你任选此牌花色和点数）并令其使用此牌；有【大攻车】，则你可以移动场上的一张【大攻车】（可替换原装备）。",
			mbxunjie:'逊节',
			mbxunjie_info:'锁定技，当你受到有来源的伤害时，若其体力值大于你且场上没有【大攻车】，则你进行一次判定，若结果为红色，则此伤害-1。',
			mb_zhangfen_prefix: "手杀",
			dagongche_attack: "大攻车·攻",
			dagongche_defend: "大攻车·守",
			dagongche_attack_skill: "大攻车",
			dagongche_defend_skill: "大攻车",
			dagongche_attack_info: "此牌拥有2点耐久度，耐久度为0时销毁此牌。①当此牌进入你的装备区时，弃置你装备区里的其他牌。②其他装备区进入你的装备区前，改为将这些牌置于弃牌堆。③当你对一名角色造成伤害时，你可减少1点此牌的耐久度，令此伤害+X（X为游戏轮数且至多为3）。④当此牌不因〖渠冲〗离开装备区时，减少1点此牌的耐久度并防止之。",
			dagongche_defend_info: "此牌拥有3点耐久度，耐久度为0时销毁此牌。①当此牌进入你的装备区时，弃置你装备区里的其他牌。②其他装备区进入你的装备区前，改为将这些牌置于弃牌堆。③当你受到伤害时，减少X点此牌的耐久度，令此伤害-X（X为伤害值且至多为此牌耐久度）。④当此牌不因〖渠冲〗离开装备区时，减少1点此牌的耐久度并防止之。",
			mb_sp_zhenji: "手杀SP甄宓",
			mb_sp_zhenji_prefix: "手杀SP",
			mbbojian: "博鉴",
			mbbojian_info: "锁定技。若你本阶段使用牌数与花色数与上个出牌阶段皆不同，你摸两张牌；否则你将一张弃牌堆中本阶段你因使用而失去的牌交给一名角色。",
			mbjiwei: "济危",
			mbjiwei_info: "锁定技。①其他角色的回合结束时，你摸X张牌（X为本回合满足的项数：1.至少[1]名角色失去过牌；2.至少[1]名角色受到过伤害）。②准备阶段，若你的手牌数不小于Y，你将手牌中颜色较多的牌分配给任意名其他角色（Y为存活人数与你体力值的最大值）。",
			new_yj_dongzhuo: "☆董卓",
			new_yj_dongzhuo_prefix: "☆",
			xiongjin: "雄进",
			xiongjin_info: "转换技。阳：出牌阶段开始时，你可以摸X张牌，然后本回合的弃牌阶段开始时，你弃置所有非基本牌；阴，其他角色的出牌阶段开始时，你可以令其摸X张牌，然后本回合的弃牌阶段开始时，其弃置所有基本牌（X为你已损失的体力值，至少为1，至多为3）。",
			xiawei: "侠威",
			xiawei_info: "锁定技。①你的手牌上限等于体力上限。②有牌非因使用进入弃牌堆后，你记录这些牌的花色，然后若你因此记录了至少四种花色且你的体力上限小于9，则你增加1点体力上限并摸一张牌。",
			baoxi: "暴袭",
			baoxi_info: "每回合每项各限一次，当一次性至少有两张基本牌/非基本牌进入弃牌堆时，你可以减1点体力上限，视为对一名角色使用【决斗】/【杀】。",

			mobile_longxue: "龙血玄黄",
			mobile_yijiang: "将星独具",
			mobile_xlqk: "袖里乾坤",
			mobile_sp: "手杀·SP",
			mobile_standard: "手杀异构·标准包",
			mobile_shenhua_feng: "手杀异构·其疾如风",
			mobile_shenhua_huo: "手杀异构·侵掠如火",
			mobile_shenhua_lin: "手杀异构·其徐如林",
			mobile_shenhua_shan: "手杀异构·不动如山",
			mobile_shenhua_yin: "手杀异构·难知如阴",
			mobile_shenhua_lei: "手杀异构·动如雷霆",
			mobile_yijiang1: "手杀异构·将1",
			mobile_yijiang2: "手杀异构·将2",
			mobile_yijiang3: "手杀异构·将3",
			mobile_yijiang4: "手杀异构·将4",
			mobile_yijiang5: "手杀异构·将5",
			mobile_yijiang7: "手杀异构·原7",
			
			mobile_changshi: "十常侍单体",
			// mobile_others: "其他",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
