import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "yijiang",
		connect: true,
		connectBanned: [
			// "qinmi"
		],
		character: {
			xiahoumao: ["male", "wei", 4, ["tongwei", "cuguo"]],
			chenshi: ["male", "shu", 4, ["qingbei"]],
			sunli: ["male", "wei", 4, ["kangli"]],
			feiyao: ["male", "wei", 4, ["zhenfeng"]],
			wuanguo: ["male", "qun", 4, ["diezhang", "duanwan"]],
			hanlong: ["male", "wei", 4, ["duwang", "cibei"]],
			yj_qiaozhou: ["male", "shu", 3, ["shiming", "jiangxi"]],
			yj_sufei: ["male", "wu", 4, ["shuojian"]],
			liwan: ["female", "wei", 3, ["liandui", "biejun"]],
			zhugeshang: ["male", "shu", 3, ["sangu", "yizu"]],
			kebineng: ["male", "qun", 4, ["kousheng"]],
			lukai: ["male", "wu", 4, ["lkbushi", "lkzhongzhuang"]],
			xin_fazheng: ["male", "shu", 3, ["xinxuanhuo", "xinenyuan"]],
			guanzhang: ["male", "shu", 4, ["fuhun"]],
			wangyi: ["female", "wei", 3, ["zhenlie", "miji"]],
			caozhang: ["male", "wei", 4, ["new_jiangchi"]],
			guohuai: ["male", "wei", 3, ["rejingce"]],
			zhangchunhua: ["female", "wei", 3, ["jueqing", "shangshi"]],
			caozhi: ["male", "wei", 3, ["luoying", "jiushi"]],
			caochong: ["male", "wei", 3, ["chengxiang", "renxin"]],
			xunyou: ["male", "wei", 3, ["qice", "zhiyu"], ["clan:颍川荀氏"]],
			xin_xushu: ["male", "shu", 3, ["xinwuyan", "xinjujian"], ["border:wei"]],
			xin_masu: ["male", "shu", 3, ["olsanyao", "rezhiman"]],
			zhuran: ["male", "wu", 4, ["danshou"]],
			xusheng: ["male", "wu", 4, ["xinpojun"]],
			wuguotai: ["female", "wu", 3, ["ganlu", "buyi"]],
			lingtong: ["male", "wu", 4, ["xuanfeng"]],
			liubiao: ["male", "qun", 3, ["rezishou", "zongshi"]],
			yufan: ["male", "wu", 3, ["zhiyan", "zongxuan"]],
			chengong: ["male", "qun", 3, ["mingce", "zhichi"]],
			bulianshi: ["female", "wu", 3, ["old_anxu", "zhuiyi"]],
			handang: ["male", "wu", 4, ["gongji", "jiefan"]],
			fuhuanghou: ["female", "qun", 3, ["qiuyuan", "zhuikong"]],
			zhonghui: ["male", "wei", 4, ["quanji", "zili"], ["clan:颍川钟氏"]],
			jianyong: ["male", "shu", 3, ["qiaoshui", "jyzongshi"]],
			old_madai: ["male", "shu", 4, ["mashu", "qianxi"]],
			liufeng: ["male", "shu", 4, ["xiansi"]],
			manchong: ["male", "wei", 3, ["junxing", "yuce"]],
			chenqun: ["male", "wei", 3, ["pindi", "faen"]],
			sunluban: ["female", "wu", 3, ["chanhui", "jiaojin"]],
			guyong: ["male", "wu", 3, ["shenxing", "olbingyi"]],
			caifuren: ["female", "qun", 3, ["qieting", "xianzhou"]],
			yj_jushou: ["male", "qun", 3, ["jianying", "shibei"]],
			zhangsong: ["male", "shu", 3, ["qiangzhi", "xiantu"]],
			zhuhuan: ["male", "wu", 4, ["fenli", "pingkou"]],
			xiahoushi: ["female", "shu", 3, ["qiaoshi", "yanyu"]],

			panzhangmazhong: ["male", "wu", 4, ["duodao", "anjian"]],
			zhoucang: ["male", "shu", 4, ["xinzhongyong"]],
			guanping: ["male", "shu", 4, ["longyin"]],
			liaohua: ["male", "shu", 4, ["dangxian", "fuli"]],
			chengpu: ["male", "wu", 4, ["lihuo", "chunlao"]],
			gaoshun: ["male", "qun", 4, ["xinxianzhen", "jinjiu"]],
			caozhen: ["male", "wei", 4, ["xinsidi"]],
			wuyi: ["male", "shu", 4, ["benxi"], ["clan:陈留吴氏"]],
			hanhaoshihuan: ["male", "wei", 4, ["shenduan", "yonglve"]],

			caorui: ["male", "wei", 3, ["huituo", "mingjian", "xingshuai"], ["zhu"]],
			caoxiu: ["male", "wei", 4, ["qianju", "qingxi"]],
			zhongyao: ["male", "wei", 3, ["huomo", "zuoding"], ["clan:颍川钟氏"]],
			liuchen: ["male", "shu", 4, ["zhanjue", "qinwang"], ["zhu"]],
			zhangyi: ["male", "shu", 4, ["wurong", "shizhi"]],
			sunxiu: ["male", "wu", 3, ["yanzhu", "xingxue", "xinzhaofu"], ["zhu"]],
			zhuzhi: ["male", "wu", 4, ["xinanguo"]],
			quancong: ["male", "wu", 4, ["yaoming"]],
			gongsunyuan: ["male", "qun", 4, ["huaiyi"]],
			guotufengji: ["male", "qun", 3, ["jigong", "shifei"]],

			xin_liru: ["male", "qun", 3, ["xinjuece", "xinmieji", "xinfencheng"]],

			guohuanghou: ["female", "wei", 3, ["jiaozhao", "danxin"]],
			liuyu: ["male", "qun", 2, ["zhige", "zongzuo", "twchongwang"], ["zhu"]],
			liyan: ["male", "shu", 3, ["dcduliang", "fulin"]],
			sundeng: ["male", "wu", 4, ["kuangbi"]],

			cenhun: ["male", "wu", 4, ["jishe", "lianhuo"]],
			huanghao: ["male", "shu", 3, ["qinqing", "huisheng"]],
			zhangrang: ["male", "qun", 3, ["taoluan"], ["sex:male_castrated"]],
			sunziliufang: ["male", "wei", 3, ["guizao", "jiyu"]],

			xinxianying: ["female", "wei", 3, ["zhongjian", "caishi"]],
			wuxian: ["female", "shu", 3, ["fumian", "daiyan"], ["clan:陈留吴氏"]],
			xushi: ["female", "wu", 3, ["wengua", "fuzhu"]],
			caojie: ["female", "qun", 3, ["shouxi", "huimin"]],

			caiyong: ["male", "qun", 3, ["bizhuan", "tongbo"]],
			jikang: ["male", "wei", 3, ["qingxian", "juexiang"]],
			qinmi: ["male", "shu", 3, ["jianzheng", "zhuandui", "tianbian"]],
			xuezong: ["male", "wu", 3, ["funan", "xinjiexun"]],

			old_huaxiong: ["male", "qun", 6, ["shiyong"]],

			yujin: ["male", "wei", 4, ["rezhenjun"], ["die_audio:ol_yujin"]],

			linghuyu: ["male", "wei", 4, ["xvzhi"]],
			yj_simafu: ["male", "wei", 4, ["beiyu", "duchi"], ["border:jin"]],
			yj_xuangongzhu: ["female", "wei", 3, ["yjqimei", "yjzhuiji"]],
			xukun: ["male", "wu", 4, ["fazhu"]],
			yj_majun: ["male", "wei", 3, ["yjgongqiao", "yjjingyi"]],
		},
		characterSort: {
			yijiang: {
				yijiang_2011: ["caozhi", "yujin", "zhangchunhua", "xin_fazheng", "xin_masu", "xin_xushu", "xusheng", "lingtong", "wuguotai", "chengong", "gaoshun"],
				yijiang_2012: ["wangyi", "xunyou", "zhonghui", "old_madai", "liaohua", "guanzhang", "bulianshi", "handang", "chengpu", "liubiao", "old_huaxiong", "caozhang"],
				yijiang_2013: ["manchong", "guohuai", "caochong", "guanping", "liufeng", "jianyong", "yufan", "panzhangmazhong", "zhuran", "xin_liru", "fuhuanghou"],
				yijiang_2014: ["hanhaoshihuan", "chenqun", "caozhen", "zhangsong", "wuyi", "zhoucang", "zhuhuan", "guyong", "sunluban", "yj_jushou", "caifuren"],
				yijiang_2015: ["caoxiu", "caorui", "zhongyao", "xiahoushi", "liuchen", "zhangyi", "zhuzhi", "quancong", "sunxiu", "gongsunyuan", "guotufengji"],
				yijiang_2016: ["guohuanghou", "sunziliufang", "huanghao", "liyan", "sundeng", "cenhun", "zhangrang", "liuyu"],
				yijiang_2017: ["xinxianying", "jikang", "wuxian", "qinmi", "xuezong", "xushi", "caiyong", "caojie"],
				yijiang_2022: ["lukai", "kebineng", "zhugeshang", "liwan", "wuanguo", "hanlong", "yj_sufei", "yj_qiaozhou"],
				yijiang_2023: ["xiahoumao", "chenshi", "sunli", "feiyao", "linghuyu", "yj_simafu", "yj_xuangongzhu", "xukun", "yj_majun"],
				// yijiang_2025: [],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			linghuyu: "令狐愚（？－249年），字公治，太原人。曹魏时期将领， 原名浚。太尉王凌的外甥，弘农太守令狐邵之侄。黄初年间出任和戎护军，后任曹爽府长史、兖州刺史。嘉平年间，与王凌一起密谋废除曹芳，共立楚王曹彪，事未行而病卒。嘉平三年（251年），事泄，王凌服毒自尽，与此事相连者，皆夷三族。王凌及令狐愚被开棺暴尸三日， 亲土埋之。",
			xukun: "徐琨，字号不详，吴郡富春县（今浙江省杭州市富阳区）人。三国时期吴国开国功臣，武烈皇帝孙坚的外甥，吴大帝孙权的表兄弟，徐夫人的生父。出身吴郡豪门，最初担任郡吏。投靠舅舅孙坚，参与征伐董卓有功，拜偏将军。孙坚逝后，追随孙策，攻讨扬州刺史刘繇，采取奇袭作战方式，占领丹阳郡，为孙策开拓江东事业奠定基础，领丹杨太守。适逢吴景归附江东，改授督军中郎将。孙权嗣位后，平定庐江太守李术叛乱，击破皖城，册封广德侯，加号平虏将军。后来，随孙权征讨黄祖，身中流矢，不治而亡。",
			sunli: "孙礼（？—250年），字德达，涿郡容城县人。三国时期曹魏名将。曹操平定幽州后，孙礼被征召为司空军谋掾。后被任命为河间郡丞，升至荥阳都尉。后孙礼被调为鲁国相。历任山阳、平原、平昌、琅邪郡太守。从大司马曹休在夹石征吴，孙礼谏其不可深入作战，曹休不听遂战败。后孙礼调任阳平郡太守。明帝时入为尚书，受遗诏拜大将军长史，加散骑常侍。曹爽令孙礼出任扬州刺史，加管伏波将军，赐爵关内侯。孙礼率兵御东吴军队，奋不顾身，贼众乃退。朝廷赐绢七百匹，孙礼皆以绢付亡者家，无以入身。后征拜少府，出为荆州刺史，迁冀州牧。爽见礼奏，大怒，劾礼怨望，结刑五岁。在家期年，众人多以为言，除城门校尉。出为并州刺史，加振武将军，使持节，护匈奴中郎将。爽诛后，入为司隶校尉。迁司空，封大利亭侯，邑一百户。嘉平二年（250年），孙礼去世，谥号景侯。其孙孙元继承爵位。《全三国文》录有孙礼文一篇《清河平原争界案图宜属平原疏》。陈寿评曰“孙礼刚断伉厉”。",
			xiahoumao: "夏侯楙，字子林，沛国谯县（今安徽省亳州市）人，曹魏名将夏侯惇之子，三国时期魏国官员、将领，其妻为曹操之女清河公主。在魏国历任侍中、尚书、安西将军、镇东将军，假节，封列侯。曾一度驻守曹魏都城长安，但蜀汉北伐后就被调离。",
			chenshi: "陈式，生卒年不详，三国时期蜀汉将领。最初为刘备军中重要的基层指挥官，后成长为高级将领。在诸葛亮第三次北伐期间，在诸葛亮的军事指挥下攻克了魏国的武都、阴平二郡。",
			feiyao: "费曜（生卒年不详），又作费瑶、费繇，三国时期曹魏将领。魏初，参与平河西之乱。明帝时官任后将军，跟随曹真、司马懿多次对抗蜀汉。《三国演义》中作“费耀”，随曹真和诸葛亮的第二次北伐军作战。怀疑姜维作内应是假，自告奋勇替曹真出征，结果被事先埋伏的姜维包围，自尽而死。",
			wuanguo: "武安国，历史小说《三国演义》中人物，是北海太守孔融的部将，兵器为一把长柄铁锤，重五十余斤。诸侯伐董时，双方于虎牢关相峙，吕布撰战，一合而斩穆顺，关东军大惊。北海太守孔融部将武安国，使铁锤飞马而出，吕布挥戟拍马来迎，战到十余合，一戟砍断安国手腕，安国弃锤于地而走，八路军兵齐出，这才救了他性命。",
			hanlong: "韩龙，汉末三国时期刺客。韩龙使得魏国北方边得到数十年的安宁，减少魏国的军政压力，得以休养生息。太和二年，豫遣译夏舍诣比能女婿郁筑鞬部，舍为鞬所杀。其秋，豫将西部鲜卑蒲头、泄归泥出塞讨郁筑鞬，大破之。还至马城，比能自将三万骑围豫七日。上谷太守阎志，阎柔之弟也，素为鲜卑所信。志往解喻，即解围去。后幽州刺史王雄并领校尉，抚以恩信。比能数款塞，诣州奉贡献。至青龙元年，比能诱纳步度根，使叛并州，与结和亲，自勒万骑迎其累重於陉北。并州刺史毕轨遣将军苏尚、董弼等击之，比能遣子将骑与尚等会战於楼烦，临陈害尚、弼。至三年中，雄遣勇士韩龙刺杀比能，更立其弟。",
			liwan: "李婉（生卒年不详），字淑文，里居不详，贾充之妻，魏晋时期才女，约景元年间（260年前后）在世。著有《典戒》。《隋书·经籍志》载李婉有文集一卷，今失传。",
			zhugeshang: "诸葛尚（244年2月－263年11月），琅琊阳都（今山东沂南）人，诸葛瞻长子，诸葛亮之孙。诸葛尚博览兵书且精通武艺。炎兴元年（公元263年），出任先锋，抗拒魏国大将邓艾，与其父诸葛瞻同战死于绵竹，时年十九岁。",
			kebineng: "轲比能（？～235年），为中国三国时期的鲜卑首领之一。轲比能出身鲜卑支部，因他作战勇敢，执法公平，不贪财物，所以被鲜卑民众推举为大人。轲比能因其部落近塞，所以他抓住有利条件积极学习汉族先进技术和文化，促进了鲜卑族的进步和北方的民族融合。轲比能统率下的部众，战守有法，战斗力相当强大。自曹操北征后向曹氏进贡表示效忠。魏文帝时，轲比能受封附义王。轲比能在进行部落统一战争时，受魏国干涉，受沉重打击，于是对魏怀贰，献书魏帝表忠，以麻痹魏庭，使之放松警惕。此后，轲比能的部众变得强盛，控弦十余万骑，为害魏国边境。每次钞略得财物，轲比能都公开透明地均平分配，所以得部众死力，各部大人都敬畏之。实力强大后，他继续部落统一战争，于是威行诸部落，建立起强大的鲜卑族政权。深感威胁的魏国幽州刺史王雄派刺客韩龙将其刺杀，其政权立刻崩溃，鲜卑民族再次陷入混战。",
			lukai: "陆凯（198－269年），字敬风，吴郡吴县（今江苏省苏州市）人。三国时期吴国重臣，丞相陆逊的族侄，大司马陆抗的族兄。黄武年间，举孝廉出身，曾任永兴县长、诸暨县长，颇有治绩。拜建武都尉、儋耳太守，与聂友率军讨伐朱崖和儋耳，迁建武校尉。五凤二年（255年），讨斩零陵山贼陈毖，拜偏将军、巴丘督，册封都乡侯。迁武昌右部督，随军进入寿春。后拜荡魏将军，加号绥远将军。吴景帝孙休继位，拜征北将军、假节、领豫州牧。孙皓即位，迁任镇西大将军，都督巴丘，又领荆州牧，进封嘉兴侯。宝鼎元年（266年），迁左丞相。以正直及屡次劝谏孙皓而闻名。建衡元年（269年），去世，时年七十二。",
			caozhi: "字子建，沛国谯人，三国曹魏著名文学家，建安文学代表人物。魏武帝曹操之子，魏文帝曹丕之弟，生前曾为陈王，去世后谥号“思”，因此又称陈思王。南朝宋文学家谢灵运更有“天下才有一石，曹子建独占八斗”的评价。王士祯尝论汉魏以来二千年间诗家堪称“仙才”者，曹植、李白、苏轼三人耳。",
			gaoshun: "中国东汉末年将领，吕布帐下中郎将。史载高顺为人清白有威严，不好饮酒，所统率的部队精锐非常，号称“陷阵营”。屡进忠言于吕布，吕布虽知其忠而不能用。曹操击破吕布后，高顺被曹操所杀。",
			chengong: "字公台，东汉末年吕布帐下谋士，东郡东武阳人。性情刚直，足智多谋，年少时与海内知名之士相互结交。192年，陈宫等人主张曹操接任兖州牧。但此后陈宫因曹操杀害边让而与曹操反目，并游说张邈等人背叛曹操迎吕布入兖州，辅助吕布攻打曹操。吕布战败后，随吕布等一同被曹操所擒，决意赴死。",
			lingtong: "字公绩，吴郡馀杭人，三国时期吴国名将。凌操之子，官至偏将军。",
			masu: "字幼常，襄阳宜城人，三国时期蜀汉大臣，侍中马良之弟。初以荆州从事跟随刘备取蜀入川，曾任绵竹、成都令、越嶲太守。诸葛亮北伐时因作战失误而失守街亭，因而被诸葛亮所斩。",
			wuguotai: "吴国太，小说《三国演义》中的人物，不见于正史记载。在小说中，吴国太被描述为孙坚的次妻，孙坚正妻武烈皇后（小说中写作吴太夫人）的妹妹，孙朗、孙仁（孙尚香）的母亲。",
			xusheng: "字文向，琅邪莒县人。三国时期吴将。徐盛最初因讨伐山贼有功而被加为中郎将，后于濡须口之战中表现出色，得到孙权的赞赏。魏文帝曹丕伐吴时，徐盛以疑城之计退去魏军。",
			yujin: "字文则，泰山钜平人。三国时期曹魏武将。本为鲍信部将，后属曹操，曹操称赞他可与古代名将相比。然而在建安二十四年的襄樊之战中，于禁在败给关羽后投降，致使一代名将晚节不保。",
			zhangchunhua: "西晋宣穆皇后张春华（189－247），河内平皋（今河南温县）人。她是晋宣帝司马懿之妻，晋景帝司马师、晋文帝司马昭的母亲。后被追尊为皇后。",
			fazheng: "字孝直，本为刘璋部下，刘备围成都时劝说刘璋投降，而后又与刘备进取汉中，献计将曹操大将夏侯渊斩首。法正善奇谋，深受刘备信任和敬重。",
			xushu: "字元直，与司马徽、诸葛亮等人为友。先化名单福仕官于新野的刘备，后因曹操囚禁其母而不得不弃备投操，临行前向刘备推荐诸葛亮之才。入曹营后，一言不发，不曾为曹操进献过一计半策。后人形容徐庶“身在曹营心在汉”。",
			caozhang: "字子文，是曹操与武宣卞皇后所生第二子，曹丕之弟，曹植之兄，曹魏任城王。曹彰武艺过人，曹操问诸子志向时自言“好为将”，因此得到曹操的赞赏。其胡须黄色，被曹操称为“黄须儿”。",
			xunyou: "字公达，颍川颍阴人。东汉末年曹操的五谋臣之一，荀彧从子，被曹操称为“谋主”。官至尚书令。正始五年被追谥为敬侯。",
			liaohua: "本名淳，字元俭，襄阳中卢（今湖北襄樊）人。三国时期蜀国后期将领，以勇敢果断著称。廖化是三国时代中经历了魏、蜀、吴整个兴衰过程极少数人中的一个，与严颜、黄忠共称为蜀汉三老将。",
			bulianshi: "步夫人（？－238），讳练师，临淮淮阴人。东吴丞相步骘同族，吴大帝孙权之妃，在孙权众夫人中最受孙权的宠爱（宠冠后庭），生有二女：孙鲁班、孙鲁育。赤乌元年卒，追封为皇后，葬于蒋陵。",
			chengpu: "字德谋，右北平土垠人。历仕孙坚、孙策、孙权三任君主。孙策死后，他与张昭等人共同辅佐孙权，并讨伐江东境内的山贼，功勋卓著。被人们尊称为“程公”。",
			handang: "字义公，辽西令支（今河北迁安）人，吴国将领。韩当因为长于弓箭、骑术并且膂力过人而被孙坚赏识，追随他四处征伐周旋，数次冒险犯难，攻陷敌人、擒拿俘虏。对江东基业的逐渐稳固和吴国的建立有着重要影响。",
			liubiao: "刘表，字景升，山阳郡高平（今山东微山）人。东汉末年名士，汉室宗亲，荆州牧，汉末群雄之一。",
			zhonghui: "字士季。魏名将，太傅钟繇之子。公元263年，他与邓艾带兵攻打蜀国，最终导致蜀国灭亡。之后钟会设计害死邓艾，联合姜维准备自立，最终因部下反叛失败，与姜维一同死于兵变。",
			wangyi: "益州刺史赵昂之妻，赵英、赵月之母。马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。",
			guanzhang: "关兴，名将关羽之子，继承了父亲汉寿亭侯的爵位。年少时即受诸葛亮器重，在蜀汉担任侍中、中监军之职，后在夷陵之战中报了杀父之仇。张苞，张飞的长子，使用父亲的家传蛇矛为兵器，勇猛剽悍不弱其父。",
			madai: "名将马超的从弟。早年他曾经从曹操手中死里逃生，后跟随马超大战曹操。后在诸葛亮病逝后受杨仪派遣斩杀了蜀将魏延。曾率领军队出师北伐，被魏将牛金击败而退还。",
			caochong: "字仓舒，曹操之子。从小聪明仁爱，与众不同，深受曹操喜爱。留有“曹冲称象”的典故。曹操几次对群臣夸耀他，有让他继嗣之意。可惜曹冲在建安十三病逝，年仅13岁。",
			guohuai: "魏国名将，夏侯渊战死时郭淮收集残兵，与杜袭共推张郃为主将而得以稳定局势。曹丕称帝后，赐郭淮爵关内侯，又任镇西长史。诸葛亮伐魏时，郭淮料敌准确，多立战功，而后亦曾击退姜维。",
			manchong: "初在曹操手下任许县县令，掌管司法，以执法严格著称；转任汝南太守，开始参与军事，曾参与赤壁之战。后关羽围攻樊城，满宠协助曹仁守城，劝阻了弃城而逃的计划，成功坚持到援军到来。曹丕在位期间，满宠驻扎在新野，负责荆州侧的对吴作战。曹叡在位期间，满宠转任到扬州，接替曹休负责东侧对吴作战，屡有功劳。",
			guanping: "关平是关羽在战乱中所收之义子。关羽脱离曹军后，与刘备于关定家中重逢，关定欲使年仅十八岁的关平随关羽同行，刘备便主张让关羽与关平结为义父子。自此后关平随侍在关羽身边，一生东征西讨。他武勇过人，不逊乃父，曾跟随刘备出征西川，立下战功，后来又与曹魏猛将庞德大战三十回合，不分胜负。",
			jianyong: "简雍为刘备同乡，年少时与刘备相识。黄巾之乱时，刘备加入对抗黄巾军的战争，简雍便跟随他奔走。常作为谈客，往来使命，刘备围成都时简雍作为刘备使臣成功劝说刘璋投降。简雍擅于辩论、议事。性情简单直接、不拘小节。",
			liufeng: "刘备义子。性格刚猛，气力过人。随赵云、张飞等扫荡西川，颇有战功，而后又统领孟达攻取上庸，深为刘备信任。但是后来关羽北伐曹魏，多次要求刘封起兵相助，刘封不从。而后又侵凌孟达，迫其降魏。孟达与魏徐晃共袭刘封，并劝刘封投降，刘封不降，又遭部下叛变，败归成都。刘备在诸葛亮的建议下赐死刘封，刘封自裁，刘备深表痛惜。",
			panzhangmazhong: "马忠为潘璋部将。于麦城之战中设伏擒获关羽及关平。刘备伐吴时，马忠随潘璋等往拒，突袭射伤蜀将黄忠，导致黄忠阵亡。不久，潘璋为关兴所杀，马忠领兵围击，击退张苞援军。后降将糜、傅发动兵变，刺杀了马忠，将首级献于刘备。",
			yufan: "虞翻初在会稽被太守王朗任命为功曹，曾劝谏王朗躲开孙策未果。后孙策占江东仍任命他为功曹。吕蒙袭取荆州时，虞翻提醒其躲过了埋伏，成功占领城池。后因为直言进谏被孙权发配到交州。",
			zhuran: "吴国著名将领，吕蒙白衣渡江取荆州，朱然协助潘璋捉住了关羽。黄武元年，刘备兵伐东吴，朱然与孙桓抵抗刘备大军。后又参加夷陵之战，追击刘备，被前来接应的赵云一枪刺死。",
			fuhuanghou: "执金吾伏完之女，汉献帝的皇后，后因怨恨曹操诛董承，与父伏完密谋曹操，事情泄漏，曹将伏皇后禁闭冷宫逼其自缢，所生二位皇子亦被鸩杀。",
			liru: "董卓的首席谋士，为董卓所亲信，大小事宜皆与其商议。董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动，均离不开李儒的参谋之功，并奉命毒杀皇帝刘辩。李傕被曹操击败后，李儒从此不知所踪，消失在历史长河中。",
			caozhen: "曹操族子，官至大将军、大司马。其父为曹操招募人马时被州郡所杀，曹操因怜悯曹真少年丧父而待其如亲子一般，因赞赏曹真的勇猛而让他率领虎豹骑。曹真在镇守曹魏西北边境时表现突出，魏文帝时期督众将大破羌胡联军，平定河西；魏明帝时期屡次对抗诸葛亮的北伐。",
			hanhaoshihuan: "韩浩和史涣都以忠勇著称，两人皆是曹操心腹将领，共同掌管禁兵。",
			chenqun: "陈群一直位居要职，先后受曹操、曹丕托孤，成为魏国重臣，官至司空。其子陈泰，亦是魏国后期名将。最大的贡献为创立了九品中正制，为后期的人才选拔和管理打好了基础。",
			wuyi: "初为益州牧刘璋的部将，刘备进攻益州时，泠苞在雒城大败，吴懿自告奋勇，领兵前往救援。不料被赵云和张飞生擒，吴懿于是归降。刘备自称汉中王，迎娶吴懿之妹。诸葛亮出师北伐，吴懿以左将军、高阳侯的身份跟随出征，屡立战功。诸葛亮逝世后，吴懿随姜维一并镇守汉中。",
			zhoucang: "原为张宝部将。关羽千里走单骑时，周仓投降关羽，成为了关羽的贴身护卫。建安十六年（公元211年），刘备攻打成都时，周仓跟随关羽镇守荆州。关羽水淹七军时，周仓曾生擒魏军的立义将军庞德，关羽被孙权斩首之后，周仓在麦城大哭失声，拔剑自刎而死。",
			zhangsong: "刘璋的部下，长相丑陋但有过目不忘的本领。张松奉命出使许都被曹操赶出，归蜀时为刘备所厚待，于是将西川地理图献予刘备，劝刘备取益州，愿为内应，并派好友孟达、法正帮助刘备。",
			sunluban: "孙权之女。孙鲁班与孙权二子孙和不睦。孙权长子孙登死后，孙和被立为太子。孙鲁班向孙权进谗言废孙和太子之位，孙和被废后忧愤而死。",
			zhuhuan: "字休穆，吴郡吴县（今江苏苏州）人，吴国名将，官至前将军、青州牧，假节，封为嘉兴侯。有一子朱异。",
			guyong: "为蔡邕之徒。其为人少言语，不饮酒，严厉正大，被张纮推荐仕于孙权。孙权任命他为会稽郡丞，行太守事，后不断升迁，官至吴国丞相。顾雍为官，多进良言，有功于吴。",
			jushou: "袁绍帐下谋士。史载他“少有大志，擅于谋略”。曾为冀州别驾，举茂才，并当过两次县令。后来又当韩馥别驾，被韩馥表为骑都尉。袁绍占据冀州后任用沮授为从事。经常对袁绍提出良策，但很多时候袁绍并不听从。官渡之战时袁绍大败，沮授未及逃走，被曹操所获，因拒降被曹操处死。",
			caifuren: "原是刘表的小妾，正室死后，成为了刘表的后妻。因刘琮娶了自己的侄女所以对其偏爱有加。刘备客居荆州时险些受其所害。刘表死后为了让刘琮即位不惜献州于曹操。",
			caorui: "魏文帝曹丕长子，曹魏第二位皇帝。在位期间指挥曹真、司马懿等人成功防御了吴、蜀的多次攻伐，并且平定鲜卑，攻灭公孙渊，颇有建树。",
			caoxiu: "曹操族子，曹操大宴铜雀台之时，射箭夺袍。曹休随曹操四处征伐，在攻蜀汉中之战，伐吴濡须口之战均有登场，曾放冷箭射倒凌统的马匹，后又协助夏侯惇平息洛阳纵火叛乱，总管御林兵马，协助曹丕代汉。",
			zhongyao: "初为长安郡守，马超反叛时，引军攻打长安，钟繇率军防卫。后城破，钟繇从东门弃城而走，退守潼关。后奉献帝令繇草拟诏令，册立曹操为魏王，曹操以钟繇为相国。明帝即位时，钟繇为太傅。诸葛亮北伐，钟繇举荐司马懿前往抵御。",
			liuchen: "刘禅第五子，自幼聪明，英敏过人。魏军兵临城下时，刘禅准备投降，刘谌劝阻刘禅投降不成后悲愤不已，遂自杀于昭烈庙。",
			xiahoushi: "夏侯渊从女，夏侯霸从妹，出城拾柴时被张飞所得，取其为妻。后生有二女，其中一人为星彩。",
			zhangyi: "曾随诸葛亮南征孟获，七擒孟获的战斗中立下赫赫战功，与祝融夫人单挑。诸葛亮病死五丈原，告诉姜维张嶷忠贞勇猛，经验丰富，是可以依靠的武将，后于征伐魏国时为掩护姜维撤退阵亡。",
			sunxiu: "孙权第六子，孙綝发动政变罢黜孙亮后，迎立孙休为帝。后孙綝专权，孙休遣使丁奉等人将其诛杀。孙休在位期间，颁布良制，嘉惠百姓，促进了东吴的繁荣。",
			zhuzhi: "孙坚旧将，朱然嗣父，孙坚阵亡后，孙策附袁术，朱治、吕范为之定计，用玉玺向袁术借兵夺取江东。孙策平定东路后，任命朱治为吴郡太守，收军返回江东。后来赤壁之战，大都督周瑜令朱治、吕范为四方巡警使，催督六郡官军。",
			quancong: "吴国名将，孙策进兵江东时归顺之，深得孙权赏识，孙权甚至将孙鲁班许配之。",
			gongsunyuan: "辽东太守公孙度之孙，辽东割据首领。趁魏、吴骚乱之际自称燕王，发动叛乱，与魏对抗。败给司马懿率领的讨伐大军，被围困后乞降不被接受，与子修在欲出城逃跑时被斩杀。",
			guotufengji: "两人均是袁绍帐下谋士。曾联手献计，利用公孙瓒攻击韩馥，又劝说韩馥请袁绍抵挡公孙瓒，终替袁绍拿下冀州。官渡之战期间，两人进谗逼反张郃高览，逼死田丰。使得袁绍的实力大损。",
			guohuanghou: "明元郭皇后（并非郭女王），在三国志有正传。曹叡夫人，曹丕的儿媳妇，曹芳，曹髦，曹奂三朝太后，是唯一经历了曹魏全部皇帝时代的贵族女性。曹魏后三帝时期，由于皇帝年少，太后与重臣一同处理政务。史书上对郭皇后有两种截然不同的记载，一种是曹芳被废和曹髦死后郭太后发诏书斥责他们不配人君，另一种却提及曹芳被夺权期间，太后与曹芳相拥而泣，曹髦讨伐司马昭前，曾向太后禀报。",
			liyan: "字正方，蜀汉重臣。初为刘表部下，曹操入主荆州时，李严西奔入蜀。刘备入川，李严率众投降，深得刘备器重，受命与诸葛亮、法正等人一同编制《蜀科》，又率军平定了蜀中盗贼。白帝城托孤，与诸葛亮共受遗诏同扶幼主。其人性格矜高难近，终因督粮不利且谎报实情而被流放，后在当地去世。",
			sundeng: "字子高，孙权长子。孙权称帝后其被立为太子，受诸葛恪等人辅佐。其人性情温和而能礼贤下士，加之爱民如子，因此深受爱戴。曾劝服孙权在孙虑之死时节哀，并劝谏孙权勿用吕壹苛政。后不幸早逝，临终前上书建言，推荐了多位良臣。其亡故令孙权极为悲伤，也为南鲁党争的祸乱埋下了伏笔。",
			liuyu: "伯安，幽州牧，汉室宗亲。在幽州两度任职，颇有威望。张纯、张举叛乱，刘虞恩威并施将其平定，又鼓励农商，大大改善了当地经济民生，青徐二州流民纷纷前来避难。后坚拒袁绍等人立其为帝的请求，派兵迎接献帝，却为袁术所扣，并因此事激化了与公孙瓒的矛盾，最终被击败，为其所害。",
			cenhun: "岑昏为宦官，官列中常侍，孙皓即位后得到宠幸。280年，晋龙骧将军王濬率军伐吴，岑昏建议以铁锁链封锁长江，阻挡晋军进攻。王濬以火船烧锁链破其计，沿途东吴将士或死或降。群臣上奏东吴衰败之因在于岑昏，将他与蜀汉的黄皓并列为误国之奸臣。",
			sunziliufang: "孙资在曹操手下历任县令，参丞相军事；刘放曾有劝王松归顺曹操之举，为曹操所欣赏，遂招为司空府官，又外放历任几处县令。魏国初建之际，孙资与刘放俱任秘书郎。曹丕继位后，二人一同掌握机密。曹睿病危时，二人力荐曹爽，又推荐招回司马懿辅政。最后，曹睿独召曹爽、司马懿、刘放、孙资同受诏命，而免去曹宇、夏侯献、曹肇、秦朗的官职。",
			huanghao: "宦官。为后主刘禅所宠，专秉朝政。黄皓与大将军姜维不睦，维启后主杀之，后主不从。皓阴以心腹阎宇替维。景耀六年，蜀亡，邓艾预欲杀之，皓贿赂左右得免。及后主迁洛阳，皓为司马昭凌迟处死。",
			zhangrang: "汉中常侍。同赵忠、曹节、段珪等为“十常侍”，为灵帝所宠。让等专权乱政、卖官索财，朝野皆痛恨之。郎中张钧上书奏请诛杀十常侍，帝不允，让等阴杀钧。及灵帝崩，大将军何进欲杀让等，让阴结何太后，招进入宫，斩杀之。部将袁绍引兵攻让，让等劫帝走河上。追急，让投水自尽。",
			jikang: "嵇康（224年－263年，一作223年－262年），字叔夜。谯国铚县（今安徽省濉溪县）人。三国时期曹魏思想家、音乐家、文学家。<br>嵇康幼年聪颖，博览群书，广习诸艺，又喜爱老庄学说。身长七尺八寸，容止出众。后娶魏武帝曹操曾孙女长乐亭主为妻，拜郎中，调中散大夫，世称“嵇中散”。后隐居不仕，屡拒为官。因得罪司隶校尉钟会，遭其构陷，而被掌权的大将军司马昭处死，时年四十岁。",
			xinxianying: "辛氏（191年—269年），字宪英，祖籍陇西，颍川阳翟（今河南禹州）人。魏晋时期著名才女，曹魏侍中辛毗之女，卫尉羊耽之妻。辛宪英聪朗有才鉴，曾劝弟辛敞尽忠职守，预言钟会将会叛乱。泰始五年（公元269年），辛宪英逝世，享年七十九岁。",
			wuxian: "穆皇后吴氏（？—245年），陈留（今河南开封）人，车骑将军吴懿之妹，三国时期蜀汉昭烈帝刘备的皇后。<br>吴氏早年丧父，其父生前与刘焉交情深厚，所以全家跟随刘焉来到蜀地。后刘焉听相面者说吴氏有大贵之相，于是为儿子刘瑁迎娶吴氏。刘瑁死后，吴氏成为寡妇。<br>建安十九年（214年），刘备平定益州，纳吴氏为夫人。建安二十四年（219年），刘备自称汉中王，立吴氏为汉中王后。章武元年（221年），刘备称帝，建立蜀汉，立吴氏为皇后。章武三年（223年），刘备去世，太子刘禅即位，尊嫡母吴氏为皇太后。延熙八年（245年），吴氏去世，谥号穆皇后，葬入刘备的惠陵。",
			qinmi: "秦宓（？－226年），字子敕。广汉郡绵竹县（今四川德阳北）人。三国蜀汉时大臣、学者。秦宓善舌辩。早年仕于益州牧刘璋麾下，后降刘备。刘备伐吴时，秦宓劝阻，刘备大怒，欲杀秦宓。因诸葛亮及时求情，才保住性命，仅被下狱，后被释放，拜左中郎将、长水校尉。吴蜀同盟后，孙权派张温至成都回访。酒宴之上，秦宓与张温舌战，说得张温无言以对。后官至大司农。建兴四年（226年），秦宓病逝。",
			xushi: "徐氏，孙权之弟孙翊的妻子，著名烈女。孙翊的部下妫览、戴员买通家将边鸿将孙翊杀死，并将全部罪责推给边鸿，又谋杀了前来查问的太守孙河。徐夫人一面用美人计色诱妫览、戴员，令其放松警惕；一面对孙翊生前亲信孙高、傅婴说明真相并晓以大义，最终成功地在内室中将杀夫凶手妫览、戴员诛杀。",
			xuezong: "薛综（？―243年），字敬文，沛郡竹邑（今安徽濉溪）人，三国时期吴国名臣。少时避乱至交州，师从刘熙。士燮归附孙权，召其为五官中郎将，出任合浦、交阯太守。后从征至九真，回朝任谒者仆射。232年，升任尚书仆射。240年，改任选曹尚书。242年，担任太子少傅，兼任选部职任。243年，薛综去世。薛综是当时名儒，著有诗赋难论数万言，集为《私载》，并著有《五宗图述》、《二京解》。",
			caiyong: "蔡邕（133年－192年），字伯喈。陈留郡圉县（今河南杞县南）人。东汉时期名臣，文学家、书法家，才女蔡文姬之父。蔡邕早年拒朝廷征召之命，后被征辟为司徒掾属，任河平长、郎中、议郎等职，曾参与续写《东观汉记》及刻印熹平石经。后因罪被流放朔方，几经周折，避难江南十二年。董卓掌权时，强召蔡邕为祭酒。三日之内，历任侍御史、治书侍御史、尚书、侍中、左中郎将等职，封高阳乡侯，世称“蔡中郎”。董卓被诛杀后，蔡邕因在王允座上感叹而被下狱，不久便死于狱中，年六十。",
			caojie: "曹节（196年―260年），沛国谯县（今安徽亳州）人，汉献帝刘协第二任皇后，魏武帝曹操的女儿。建安十八年（213年），曹操将女儿曹宪、曹节、曹华三姐妹同时入宫中，封为夫人。建安十九年（214年），并封为贵人。曹操废掉汉献帝第一位皇后伏寿,将她囚禁而死。曹操要汉献帝立曹节为皇后，汉献帝只得依从。建安二十五年（220年），曹操去世，曹丕袭封魏王位。曹丕授意华歆去逼汉献帝让位。曹节怒斥华歆，华歆只好退出宫去。第二天又逼汉献帝将帝位禅让给曹丕。并以武力威胁，向曹节索要玺印，曹节无奈，将玺印掷于栏板之下。面对曹丕篡位，她极为愤怒，高喊：“老天有眼，决不让你长久！”汉献帝被废为山阳公，曹节为山阳公夫人。景元元年（260年），曹节病逝，仍以汉朝礼仪合葬于献帝的禅陵，谥号献穆皇后。",
		},
		characterTitle: {
			
		},
		characterFilter: {
			
		},
		characterInitFilter: {
			
		},
		card: {
			lukai_spade: { fullskin: true },
			lukai_heart: { fullskin: true },
			lukai_diamond: { fullskin: true },
			lukai_club: { fullskin: true },
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//一将2024
			// 新杀马钧-临时写法 #1607
			yjgongqiao: {
				enable: "phaseUse",
				usable: 1,
				init(player, skill) {
					player.addSkill("yjgongqiao_clear");
					// 临时修改（by 棘手怀念摧毁）
					if (!lib.config['extension_十周年UI_equipLayout']) ui.arena.dataset.equipLayout = 'on'
				},
				filterCard(card, player) {
					if (get.type(card) == "equip") return player.canEquip(card, true);
					return player.hasEnabledSlot();
				},
				filter(event, player) {
					return player.countCards("h", card => lib.skill.yjgongqiao.filterCard(card, player));
				},
				check(card) {
					const player = _status.event.player, val = get.value(card);
					if (!player.countCards("h", cardx => get.type2(cardx) == get.type2(card))) val /= 4;
					if (get.type2(card) == "trick") return 9 - val;
					return 6 - val;
				},
				discard: false,
				async content(event, trigger, player) {
					const card = event.cards[0];
					player.$give(card, player);
					if (get.type(card) == "equip") await player.equip(card);
					else {
						let list = [];
						for (let i = 1; i <= 5; i++) {
							if (player.hasEnabledSlot(i)) list.push(i);
						}
						let choices = list.map(i => get.translation(`equip${i}`));
						const result = await player.chooseControl(choices).set("prompt", `选择要置入${get.translation(card)}的装备栏`).set("ai", function () {
							const player = _status.event.player;
							if (!player.getEquips(5).length) return "宝物";
							const list = [1, 2, 3, 4].filter(i => player.hasEnabledSlot(i) && !player.getEquips(i).length);
							if (list.length) return get.translation(`equip${list.randomGet()}`);
							return _status.event.choices.randomGet();
						}).set("choices", choices).forResult();
						const subtype = `equip${list[result.index]}`;
						game.broadcastAll(function (card, subtype) {
							card.subtype = subtype;
						}, card, subtype);
						game.log(player, "将", card, "置入了", `#g${get.translation(subtype)}栏`);
						await player.equip(card);
					}
				},
				ai: {
					order: 5,
					result: {
						player: 1,
					},
				},
				group: "yjgongqiao_effect",
				subSkill: {
					clear: {
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						direct: true,
						charlotte: true,
						async content(event, trigger, player) {
							const evt = trigger.getl(player);
							if (evt && evt.es) {
								for (let card of evt.es) {
									if (card.subtype) {
										game.broadcastAll(function (card) {
											delete card.subtype;
										}, card);
									}
								}
							}
						},
					},
					effect: {
						trigger: {
							player: ["useCard", "useCardAfter"],
						},
						filter(event, player, name) {
							if (name == "useCard") return get.type(event.card) == "basic" && player.countCards("e", card => get.type(card) == "basic");
							if (player.getHistory("useCard", evt => get.type2(evt.card) == get.type2(event.card) && evt != event).length) return false;
							return player.countCards("e", card => get.type2(card) == "trick");
						},
						async content(event, trigger, player) {
							if (event.triggername == "useCard") trigger.baseDamage++;
							else await player.draw();
						},
						forced: true,
						locked: false,
						mod: {
							maxHandcard(player, num) {
								if (player.countCards("e", card => get.type(card) == "equip")) return num + 3;
							},
						},
					},
				},
			},
			yjjingyi: {
				trigger: {
					player: "equipEnd",
				},
				forced: true,
				async content(event, trigger, player) {
					const num = player.countCards("e");
					await player.draw(num);
					await player.chooseToDiscard("he", 2, true).set('ai', card => {
						if (get.position(card) == "e" || get.type(card) == "equip") return 1;
						return 9 - get.value(card);
					});
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							const num = player.countCards("e") - 1;
							if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, num];
						},
					},
					threaten: 1.3,
				},
			},
			//一将2023
			//令狐愚
			xvzhi: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return (
						game.countPlayer(target => {
							return lib.skill.xvzhi.filterTarget(null, player, target);
						}) > 1
					);
				},
				filterTarget(card, player, target) {
					const stat = player.getStat("xvzhi");
					return target.countCards("h") && (!stat || !stat.includes(target));
				},
				selectTarget:2,
				usable: 1,
				multiline: true,
				multitarget: true,
				async content(event, trigger, player) {
					const targets = event.targets;
					if (!player.getStat().xvzhi) player.getStat().xvzhi = [];
					player.getStat().xvzhi.addArray(targets);
					if (targets.some(i => !i.countCards("h"))) return;
					const result = await player
						.chooseCardOL(targets, "h", true, [1, Infinity], "蓄志：选择任意张手牌并与对方交换")
						.set("ai", card => {
							const player = get.event("player"),
								target = get.event().getParent(2).targets.find(i => i != player);
							const sha = new lib.element.VCard({ name: "sha" });
							const playerEffect = player.hasUseTarget(sha, false)
								? Math.max(
										...game.filterPlayer(current =>
											player.canUse(sha, current, false)
										).map(current => {
											return get.effect(current, sha, player, player);
										})
								  )
								: 0;
							const targetEffect = target.hasUseTarget(sha, false)
								? Math.max(
										...game.filterPlayer(current =>
											target.canUse(sha, current, false)
										).map(current => {
											return get.effect(current, sha, player, player);
										})
								  )
								: 0;
							return 5 + 2 * get.sgn(playerEffect - targetEffect) - get.value(card);
						})
						.forResult();
					await targets[0].swapHandcards(targets[1], result[0].cards, result[1].cards);
					if (result[0].cards.length == result[1].cards.length) {
						await player.draw(2);
						player.getStat("skill").xvzhi--;
					} else {
						const aim = targets[result[0].cards.length > result[1].cards.length ? 0 : 1];
						const sha = new lib.element.VCard({ name: "sha" });
						if (aim.hasUseTarget(sha, false)) {
							await aim.chooseUseTarget(sha, true, false, "nodistance");
						}
					}
				},
				ai: {
					order: 5,
					result: {
						target(player, target) {
							return get.sgn(get.attitude(player, target)) * target.countCards("h");
						},
					},
				},
			},
			//司马孚
			beiyu: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("h") < player.maxHp;
				},
				usable: 1,
				async content(event, trigger, player) {
					await player.drawTo(player.maxHp);
					if (!player.countCards("h")) return;
					const suits = player
						.getCards("h")
						.reduce((list, card) => list.add(get.suit(card)), [])
						.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
					const result = await player
						.chooseControl(suits)
						.set("prompt", "备预：将一种花色的手牌牌置于牌堆底")
						.set("ai", () => {
							const player = get.event("player");
							let suits = get.event("controls").slice();
							suits.sort((a, b) => player.countCards("h", { suit: a }) - player.countCards("h", { suit: b }));
							return suits[0];
						})
						.forResult();
					if (result.control) {
						const suit = result.control,
							cards = player.getCards("h", { suit: suit });
						if (cards.length) {
							let resultx;
							if (cards.length == 1) {
								resultx = { bool: true, moved: [cards] };
							} else {
								resultx = await player
									.chooseToMove("备预：将牌按顺序置于牌堆底", true)
									.set("list", [["牌堆底", cards]])
									.set("processAI", list => {
										return [list[0][1].slice(0)];
									})
									.forResult();
							}
							if (resultx.bool) {
								const moved = resultx.moved[0];
								if (moved.length) {
									await player.lose(cards, ui.cardPile);
									for (let i = 0; i < moved.length; i++) {
										const card = moved[i];
										card.fix();
										ui.cardPile.appendChild(card);
									}
								}
							}
						}
					}
				},
				ai: {
					order: 0.001,
					result: { player: 1 },
				},
			},
			duchi: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter(event, player) {
					return event.player != player;
				},
				usable: 1,
				logTarget: "player",
				check(event, player) {
					return get.effect(player, event.card, event.player, player) <= 0;
				},
				async content(event, trigger, player) {
					await player.draw().set("bottom", true);
					if (player.countCards("h")) {
						await player.showHandcards(get.translation(player) + "发动了【督持】");
						const colors = player.getCards("h").reduce((list, card) => list.add(get.color(card)), []);
						if (colors.length == 1) {
							player.popup("洗具");
							trigger.getParent().excluded.add(player);
							return;
						}
					}
					player.popup("杯具");
				},
				ai: { threaten: 0.8 },
			},
			//宣公主
			yjqimei: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					const count = player.getStat("skill").yjqimei;
					if (count && count > 0 && !player.hasSkill("yjqimei_rewrite")) return false;
					return true;
				},
				filterTarget: lib.filter.notMe,
				usable: 2,
				async content(event, trigger, player) {
					const target = event.target;
					await player.draw(2, "nodelay");
					await target.draw(2);
					const targets = [player, target].filter(current => current.countDiscardableCards(current, "he"));
					if (targets.length) {
						const result = await player
							.chooseCardOL(targets, "he", true, 2, "齐眉：请弃置两张牌", (card, player, target) => {
								return lib.filter.cardDiscardable(card, player);
							})
							.forResult();
						if (result.length == 1) targets[0].discard(result[0].cards);
						else {
							await game
								.loseAsync({
									lose_list: [
										[targets[0], result[0].cards],
										[targets[1], result[1].cards],
									],
								})
								.setContent("discardMultiple");
							await game.asyncDelayx();
						}
						let cards = result.reduce((list, evt) => {
							list.addArray(evt.cards);
							return list;
						}, []);
						const suits = cards.reduce((list, card) => list.add(get.suit(card)), []);
						switch (suits.length) {
							case 1:
								while (cards.length) {
									const card = cards.shift();
									if (player.hasUseTarget(card)) {
										player.$gain2(card, false);
										await game.asyncDelayx();
										await player.chooseUseTarget(true, card, false);
									}
								}
								break;
							case 2:
								for (const current of [player, target]) {
									if (!current.isIn()) continue;
									if (current.isLinked()) await current.link(false);
									if (current.isTurnedOver()) await current.turnOver(false);
								}
								break;
							case 3:
								for (const current of [player, target]) {
									if (current.isIn() && !current.isLinked()) await current.link(true);
								}
								break;
							case 4:
								await player.draw("nodelay");
								await target.draw();
								player.addTempSkill("yjqimei_rewrite");
								break;
						}
					}
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							const att = get.sgn(get.attitude(player, target));
							return (2 + att) * att;
						},
					},
				},
				subSkill: { rewrite: { charlotte: true } },
			},
			yjzhuiji: {
				audio: 2,
				trigger: { player: "die" },
				filter(event, player) {
					return game.hasPlayer(target => {
						return (
							target != player &&
							Array.from({ length: 5 })
								.map((_, i) => i + 1)
								.some(i => target.hasEmptySlot(i))
						);
					});
				},
				forceDie: true,
				skillAnimation: true,
				animationColor: "water",
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("yjzhuiji"), (card, player, target) => {
							return (
								target != player &&
								Array.from({ length: 5 })
									.map((_, i) => i + 1)
									.some(i => target.hasEmptySlot(i))
							);
						})
						.set("ai", target => {
							const player = get.event("player");
							return (
								get.sgn(get.attitude(player, target)) *
								Array.from({ length: 5 })
									.map((_, i) => i + 1)
									.reduce((sum, i) => sum + target.countEmptySlot(i), 0)
							);
						})
						.set("forceDie", true)
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					let num = 1,
						cards = [];
					while (num <= 5) {
						while (target.hasEmptySlot(num)) {
							const card = get.cardPile2(card => {
								return !cards.includes(card) && get.subtype(card) == "equip" + num && target.canUse(card, target);
							});
							if (card) {
								cards.push(card);
								target.$gain2(card, false);
								await game.asyncDelayx();
								await target.chooseUseTarget(card, true, "nopopup");
							} else break;
						}
						num++;
					}
					if (cards.length) {
						target.addSkill("yjzhuiji_buff");
						target.markAuto("yjzhuiji_buff", cards);
					}
				},
				subSkill: {
					buff: {
						charlotte: true,
						mod: {
							aiValue(player, card, num) {
								if (player.getStorage("yjzhuiji_buff").includes(card)) return num + 100;
							},
							aiUseful(player, card, num) {
								if (player.getStorage("yjzhuiji_buff").includes(card)) return num / 114514;
							},
						},
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							const evt = event.getl(player);
							return evt && evt.es && evt.es.some(i => player.getStorage("yjzhuiji_buff").includes(i));
						},
						forced: true,
						popup: false,
						firstDo: true,
						content() {
							const evt = trigger.getl(player);
							const cards = evt.es.filter(i => player.getStorage("yjzhuiji_buff").includes(i));
							player.unmarkAuto("yjzhuiji_buff", cards);
							for (const card of cards) player.disableEquip(get.subtype(card));
						},
						intro: {
							mark(dialog, storage) {
								if (storage && storage.length) dialog.addSmall([storage, "vcard"]);
								else return "暂无装备";
							},
						},
					},
				},
			},
			//徐琨（菜不菜我不知道）
			fazhu: {
				audio: 3,
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.hasCard(card => !get.tag(card, "damage") && player.canRecast(card), "hej");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.choosePlayerCard(get.prompt(event.name.slice(0, -5)), player, "hej", [1, Infinity])
						.set("ai", button => {
							const card = button.link;
							if (get.position(card) == "j") return 10;
							return 6 - get.value(card);
						})
						.set("filterButton", button => {
							const card = button.link,
								player = get.player();
							return !get.tag(card, "damage") && player.canRecast(card);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					await player.recast(event.cards);
					const cards = player
						.getHistory("gain", evt => evt.getParent(3) == event)
						.reduce((list, evt) => {
							list.addArray(evt.cards);
							return list;
						}, []);
					let num = Math.min(cards.length, game.countPlayer()),
						list = [];
					if (!num) return;
					if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
					while (num - list.length > 0 && cards.some(i => get.owner(i) == player && get.position(i) == "h" && !i.hasGaintag("olsujian_given"))) {
						const result = await player
							.chooseCardTarget({
								prompt: "筏铸：将以此法获得的牌交给任意角色各一张",
								position: "he",
								animate: false,
								filterCard(card, player) {
									if (!get.event("cards").includes(card)) return false;
									return !get.event("list").some(list => list[1] == card);
								},
								filterTarget(card, player, target) {
									return !get.event("list").some(list => list[0] == target);
								},
								ai1(card) {
									if (card.name == "sha") return 2.5;
									return 1 + Math.random();
								},
								ai2(target) {
									return get.attitude(get.event("player"), target);
								},
							})
							.set("forced", !list.length)
							.set("list", list)
							.set("cards", cards)
							.forResult();
						if (result.bool) {
							list.push([result.targets[0], result.cards[0]]);
							player.addGaintag(result.cards, "olsujian_given");
						} else break;
					}
					if (_status.connectMode) {
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (list.length) {
						const targets = list.slice().map(list => list[0]);
						await game
							.loseAsync({
								gain_list: list,
								player: player,
								cards: list.slice().map(list => list[1]),
								giver: player,
								animate: "giveAuto",
							})
							.setContent("gaincardMultiple");
						for (const target of targets) {
							await target
								.chooseToUse(function (card, player, event) {
									if (get.name(card) != "sha") return false;
									return lib.filter.cardEnabled.apply(this, arguments);
								})
								.set("openskilldialog", "筏铸：是否使用一张【杀】（无距离限制）？")
								.set("norestore", true)
								.set("custom", {
									add: {},
									replace: { window: function () {} },
								})
								.set("targetRequired", true)
								.set("complexSelect", true)
								.set("filterTarget", function (card, player, target) {
									return lib.filter.targetEnabled.apply(this, arguments);
								})
								.set("addCount", false);
						}
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!card || get.type(card) != "delay") return;
							if (!get.tag(card, "damage") && target.canRecast(card)) return "zeroplayertarget";
						},
					},
				},
			},
			//一将2023
			//孙礼
			kangli: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				forced: true,
				locked: false,
				content: function () {
					player.draw(2).gaintag = ["kangli"];
					player.when({ source: "damageBegin1" }).then(() => {
						var cards = player.getCards("h", card => card.hasGaintag("kangli") && lib.filter.cardDiscardable(card, player, "kangli"));
						if (cards.length) player.discard(cards);
					});
				},
				ai: {
					maixie: true,
				},
			},
			//夏侯楙
			tongwei: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he", card => lib.skill.tongwei.filterCard(card, player)) > 1 && game.hasPlayer(i => i != player);
				},
				filterTarget: lib.filter.notMe,
				filterCard: lib.filter.cardRecastable,
				selectCard: 2,
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				popname: true,
				check: function (card) {
					var num = 6.5;
					if (ui.selected.cards.length) {
						var cardx = ui.selected.cards[0];
						num = get.number(cardx);
					}
					var del = Math.abs(get.number(card) - num);
					return 5 + del / 5 - get.value(card);
				},
				content: function () {
					"step 0";
					player.recast(cards);
					"step 1";
					var numbers = cards.map(c => get.number(c, player)).sort((a, b) => a - b);
					target.when("useCard1").then(() => {
						trigger._tongwei_checked = true;
					});
					target
						.when("useCardAfter")
						.assign({
							numbers: numbers,
							playerx: player,
							mod: {
								aiOrder: function (player, card, num) {
									var number = get.number(card);
									if (typeof number != "number" || number <= numbers[0] || number >= numbers[1]) return num + 10;
								},
							},
						})
						.filter((event, player) => {
							return event._tongwei_checked;
						})
						.then(() => {
							var number = get.number(trigger.card);
							var numbers = get.info(event.name).numbers;
							event.playerx = get.info(event.name).playerx;
							if (typeof number != "number" || number <= numbers[0] || number >= numbers[1]) event.finish();
						})
						.then(() => {
							var playerx = event.playerx;
							var names = ["sha", "guohe"].filter(name => playerx.canUse({ name: name, isCard: true }, player, false));
							if (!names.length) event.finish();
							else if (names.length == 1) event._result = { links: [[null, null, names[0]]] };
							else
								playerx
									.chooseButton([`请选择要视为对${get.translation(player)}使用的牌`, [names, "vcard"]], true)
									.set("ai", button => {
										return button.link[0][2] == _status.event.choice;
									})
									.set(
										"choice",
										(function () {
											var list = names
												.map(name => {
													return [name, get.effect(player, { name: name, isCard: true }, playerx, playerx)];
												})
												.sort((a, b) => {
													return b[1] - a[1];
												});
											return list[0][0];
										})()
									);
						})
						.then(() => {
							var name = result.links[0][2];
							var card = { name: name, isCard: true },
								playerx = event.playerx;
							if (playerx.canUse(card, player, false)) playerx.useCard(card, player, "tongwei");
						});
				},
				ai: {
					expose: 0.2,
					order: 7,
					threaten: 2.2,
					result: {
						target: -1,
					},
				},
			},
			cuguo: {
				audio: 2,
				trigger: { player: ["shaMiss", "eventNeutralized"] },
				filter: function (event, player) {
					if (event.type != "card" && event.name != "_wuxie") return false;
					if (
						!event.target ||
						!event.target.isIn() ||
						!player.canUse(
							{
								name: event.card.name,
								nature: event.card.nature,
								isCard: true,
							},
							event.target,
							false
						)
					)
						return false;
					if (!player.hasCard(card => lib.filter.cardDiscardable(card, player), "he")) return false;
					var history = game.getGlobalHistory("everything");
					for (var evt of history) {
						if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
							var evtx = evt.getParent();
							return evtx.name == "useCard" && evtx.player == player && evt == event;
						}
					}
					return false;
				},
				forced: true,
				direct: true,
				content: function () {
					"step 0";
					var card = {
						name: trigger.card.name,
						nature: trigger.card.nature,
						isCard: true,
						storage: { cuguo: true },
					};
					event.card = card;
					player.chooseToDiscard("蹙国：请弃置一张牌", `视为你对${get.translation(trigger.target)}使用一张${get.translation(card.nature || "")}【${get.translation(card.name)}】`, "he", true).set("logSkill", ["cuguo", trigger.target]);
					"step 1";
					if (player.canUse(card, trigger.target, false)) {
						player.useCard(card, trigger.target);
						player
							.when("useCardAfter")
							.filter(event => {
								return event.card.storage && event.card.storage.cuguo;
							})
							.then(() => {
								if (
									game.hasGlobalHistory("everything", evt => {
										if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
											if (evt.getParent() == trigger) return true;
										}
										return false;
									})
								) {
									player.loseHp();
								}
							});
					}
				},
			},
			//陈式
			qingbei: {
				audio: 2,
				trigger: { global: "roundStart" },
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseButton(['###擎北：是否选择任意种花色？###<div class="text center">你不能于本轮使用这些花色，且使用牌后摸等同于选择花色数的牌</div>', [lib.suit.map(i => ["", "", "lukai_" + i]), "vcard"]], [1, 4]);
					next.set("ai", button => {
						var player = _status.event.player;
						var suit = button.link[2].slice(6);
						var val = player
							.getCards("hs", { suit: suit })
							.map(card => {
								return get.value(card) + player.getUseValue(card) / 3;
							})
							.reduce((p, c) => {
								return p + c;
							}, 0);
						if (val > 10 && ui.selected.buttons.length > 0) return -1;
						if (val > 6 && ui.selected.buttons.length == 2) return -1;
						if (ui.selected.buttons.length == 3) return -1;
						return 1 + 1 / val;
					});
					"step 1";
					if (result.bool) {
						var suits = result.links.map(i => i[2].slice(6));
						player.logSkill("qingbei");
						player.addTempSkill("qingbei_effect", "roundStart");
						player.setStorage("qingbei_effect", suits);
						player.markSkill("qingbei_effect");
					}
				},
				ai: {
					threaten: 2.3,
				},
				subSkill: {
					effect: {
						audio: "qingbei",
						trigger: { player: "useCardAfter" },
						charlotte: true,
						onremove: true,
						forced: true,
						filter: function (event, player) {
							if (!lib.suit.includes(get.suit(event.card))) return false;
							return player.getStorage("qingbei_effect").length;
						},
						content: function () {
							player.draw(player.getStorage("qingbei_effect").length);
						},
						mark: true,
						intro: {
							content: storage => `本轮内不能使用${get.translation(storage)}花色的牌，且使用一张有花色的牌后摸${get.cnNumber(storage.length)}张牌`,
						},
						mod: {
							cardEnabled: function (card, player) {
								if (player.getStorage("qingbei_effect").includes(get.suit(card))) return false;
							},
							cardSavable: function (card, player) {
								if (player.getStorage("qingbei_effect").includes(get.suit(card))) return false;
							},
						},
					},
				},
			},
			//费曜
			zhenfeng: {
				audio: 2,
				trigger: { global: "useCard" },
				usable: 1,
				filter: function (event, player) {
					return event.player != player && event.player == _status.currentPhase && event.player.countCards("h") <= event.player.getHp();
				},
				check: function (event, player) {
					var type = get.type2(event.card, event.player);
					if (type == "equip" && event.player.hasCard(card => event.player.hasValueTarget(card))) return false;
					if (get.attitude(player, event.player) > 0 && event.player.getHp() + event.player.countCards("hs", ["shan", "caochuan"]) <= 3) return false;
					return true;
				},
				onremove: true,
				logTarget: "player",
				content: function () {
					"step 0";
					var choices = Array.from({ length: trigger.player.countCards("h") + 1 }).map((_, i) => get.cnNumber(i, true));
					var type = get.type2(trigger.card, trigger.player);
					player
						.chooseControl(choices)
						.set("prompt", "镇锋：猜测其手牌中的" + get.translation(type) + "牌数")
						.set("ai", () => {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								var num = trigger.player.countCards("h", card => get.type2(card) == type);
								var knownNum = trigger.player.countKnownCards(_status.event.player, card => get.type2(card) == type);
								if (trigger.player.isAllCardsKnown(_status.event.player)) {
									return knownNum;
								}
								var restNum = num - knownNum;
								var numx;
								if (type == "basic") numx = num + Math.floor(Math.random() * restNum + 1);
								else if (type == "trick") {
									if (num > 2) numx = 2;
									else numx = 1;
									if (Math.random() < 0.5) {
										numx += Math.random() > 0.5 ? 1 : -1;
									}
								} else {
									numx = [0, 1].randomGet();
								}
								if (numx < knownNum) numx = knownNum;
								else if (numx >= choices.length) numx = choices.length - 1;
								return numx;
							})()
						);
					"step 1";
					var type = get.type2(trigger.card, trigger.player);
					var guessedNum = result.index;
					player.chat("我猜" + get.cnNumber(guessedNum) + "张");
					game.log(player, "猜测", trigger.player, "有", get.cnNumber(guessedNum) + "张" + get.translation(type) + "牌");
					event.guessedNum = guessedNum;
					game.delay();
					"step 2";
					var type = get.type2(trigger.card, trigger.player);
					var count = trigger.player.countCards("h", card => get.type2(card) == type);
					var guessedNum = event.guessedNum;
					if (count == guessedNum) {
						player.popup("洗具");
						game.log(player, "猜测", "#g正确");
						if (player.countMark("zhenfeng") < 5) player.addMark("zhenfeng", 1, false);
						player.draw(player.countMark("zhenfeng"));
						if (player.canUse("sha", trigger.player, false)) player.useCard({ name: "sha", isCard: true }, trigger.player);
					} else {
						player.popup("杯具");
						game.log(player, "猜测", "#y错误");
						player.clearMark("zhenfeng");
						if (Math.abs(count - guessedNum) > 1 && trigger.player.canUse("sha", player, false)) {
							trigger.player.useCard({ name: "sha", isCard: true }, player, false, "noai");
						}
					}
				},
				intro: {
					content: "已连续猜对#次",
				},
			},
			//新杀小加强 李严
			dcduliang: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target && target.countCards("he") > 0;
				},
				audio: "duliang",
				content: function () {
					"step 0";
					player.gainPlayerCard(target, "he", true);
					"step 1";
					var name = get.translation(target);
					player
						.chooseControl(function () {
							return Math.random() < 0.5 ? "选项一" : "选项二";
						})
						.set("prompt", "督粮：请选择一项")
						.set("choiceList", ["你观看牌堆顶的两张牌，然后令" + name + "获得其中的一或两张基本牌", "令" + name + "于下回合的摸牌阶段额外摸一张牌"]);
					"step 2";
					if (result.control == "选项一") {
						var cards = get.cards(2),
							bool = false;
						event.cards = cards;
						game.cardsGotoOrdering(cards);
						for (var card of cards) {
							if (get.type(card) == "basic") {
								bool = true;
								break;
							}
						}
						player
							.chooseButton(["督粮：选择令" + get.translation(target) + "获得的牌", cards], [1, 2], bool)
							.set("filterButton", button => {
								return get.type(button.link) == "basic";
							})
							.set("ai", button => {
								return _status.event.sgn * get.value(button.link);
							})
							.set("sgn", get.sgnAttitude(player, target) > 0);
					} else {
						target.addTempSkill("dcduliang2", { player: "phaseAfter" });
						target.addMark("dcduliang2", 1, false);
						event.finish();
					}
					"step 3";
					if (result.bool) {
						var cardsx = result.links;
						target.gain(cardsx, "draw");
						game.log(target, "获得了" + get.cnNumber(cardsx.length) + "张牌");
						cards.removeArray(cardsx);
						cards.reverse();
					}
					for (var i = 0; i < cards.length; i++) {
						ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
				},
				ai: {
					order: 4,
					result: {
						target: -1,
						player: 0.1,
					},
				},
			},
			dcduliang2: {
				trigger: { player: "phaseDrawBegin" },
				forced: true,
				mark: true,
				audio: false,
				onremove: true,
				charlotte: true,
				sourceSkill: "dcduliang",
				intro: {
					content: "下回合的摸牌阶段额外摸#张牌",
				},
				content: function () {
					trigger.num += player.countMark("dcduliang2");
				},
			},
			//苏飞
			shuojian: {
				audio: 2,
				enable: "phaseUse",
				usable: 3,
				filterTarget: lib.filter.notMe,
				filterCard: true,
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				check: function (card, player) {
					return 6 - get.value(card);
				},
				content: function () {
					"step 0";
					player.give(cards, target);
					"step 1";
					var num = 3 - get.skillCount("shuojian") + 1;
					event.num = num;
					event.num2 = num;
					if (event.num == 0) event.finish();
					"step 2";
					var forced = num != event.num2;
					var prompt = "###" + get.translation(player) + "对你发动了【数谏】###视为使用" + get.cnNumber(num) + "张【过河拆桥】" + (forced ? "" : "且" + get.translation(player) + "此技能本回合失效，或点击“取消”令其摸" + get.cnNumber(num) + "张牌");
					if (!target.hasUseTarget({ name: "guohe" })) event._result = { bool: false };
					else
						target
							.chooseUseTarget(prompt, "guohe", forced)
							.set("ai", function () {
								var evt = _status.event;
								if (evt.name == "chooseTarget") evt = evt.getParent();
								if (!evt.goon) return 0;
								return get.effect_use.apply(this, arguments);
							})
							.set("goon", target.getUseValue({ name: "guohe" }) > (get.sgnAttitude(target, player) * player.getUseValue({ name: "wuzhong" })) / (2 - num * 0.4));
					"step 3";
					if (!result.bool) {
						player.draw(num);
						if (num > 1) player.chooseToDiscard("he", num - 1, true);
						event.finish();
					}
					"step 4";
					if (--event.num2 > 0) {
						event.goto(2);
					} else player.tempBanSkill("shuojian");
				},
				ai: {
					expose: 0.15,
					order: 8,
					result: { target: 1 },
				},
			},
			//谯周
			shiming: {
				audio: 2,
				trigger: { global: "phaseDrawBegin1" },
				filter: function (event, player) {
					return !player.hasSkill("shiming_round");
				},
				check: function (event, player) {
					return true; //get.attitude(player,event.player)<0||get.damageEffect(event.player,event.player,player)>0;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					player.addTempSkill("shiming_round", "roundStart");
					var cards = get.cards(3);
					player
						.chooseButton(["识命：是否将其中一张置于牌堆底？", cards.slice(0)])
						.set("ai", button => {
							var att = _status.event.att,
								damage = _status.event.damage,
								val = get.value(button.link, _status.event.player);
							if ((att > 0 && damage < 0) || (att <= 0 && damage > 0)) return 6 - val;
							return val - 5.99;
						})
						.set("att", get.attitude(player, trigger.player))
						.set("damage", get.damageEffect(trigger.player, trigger.player, player) > 0 && trigger.player.hp <= 3 ? 1 : -1);
					while (cards.length) ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						card.fix();
						ui.cardPile.appendChild(card);
						player.popup("一下", "wood");
						game.log(player, "将一张牌置于了牌堆底");
					}
					"step 2";
					trigger.player
						.chooseBool("是否跳过摸牌阶段并对自己造成1点伤害，然后从牌堆底摸三张牌？")
						.set("ai", () => _status.event.bool)
						.set("bool", get.damageEffect(trigger.player, trigger.player) >= -6 || trigger.player.hp > 3);
					"step 3";
					if (result.bool) {
						trigger.cancel();
						trigger.player.damage(trigger.player);
					} else event.finish();
					"step 4";
					trigger.player.draw(3, "bottom");
				},
				subSkill: {
					round: {
						mark: true,
						intro: { content: "本轮已发动〖识命〗" },
					},
				},
			},
			jiangxi: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				filter: function (event, player) {
					var zhu = game.findPlayer(i => i.getSeatNum() == 1);
					return (
						(zhu &&
							player.hasSkill("shiming_round") &&
							(game.getGlobalHistory("changeHp", evt => {
								return evt.player == zhu && evt._dyinged;
							}).length > 0 ||
								zhu.getHistory("damage").length == 0)) ||
						!game.hasPlayer2(current => current.getHistory("damage").length > 0)
					);
				},
				direct: true,
				seatRelated: true,
				content: function () {
					"step 0";
					var zhu = game.findPlayer(i => i.getSeatNum() == 1);
					if (zhu && player.hasSkill("shiming_round")) {
						if (
							game.getGlobalHistory("changeHp", evt => {
								return evt.player == zhu && evt._dyinged;
							}).length > 0 ||
							zhu.getHistory("damage").length == 0
						) {
							player.chooseBool(get.prompt("jiangxi"), "重置〖识命〗");
						}
					} else event.goto(2);
					"step 1";
					if (result.bool) {
						player.logSkill("jiangxi");
						event.logged = true;
						player.removeSkill("shiming_round");
						player.draw();
					}
					"step 2";
					if (!game.hasPlayer2(current => current.getHistory("damage").length > 0)) {
						player
							.chooseBool(get.prompt("jiangxi"), "与" + get.translation(trigger.player) + "各摸一张牌")
							.set("ai", () => _status.event.bool)
							.set("bool", trigger.player.getUseValue({ name: "wuzhong" }) + player.getUseValue({ name: "wuzhong" }) > 0);
					} else event.finish();
					"step 3";
					if (result.bool) {
						if (!event.logged) player.logSkill("jiangxi");
						trigger.player.draw("nodelay");
						player.draw();
					}
				},
			},
			//韩龙
			duwang: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					var cards = [];
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						var card = ui.cardPile.childNodes[i];
						if (card.name != "sha") cards.push(card);
						if (cards.length >= 5) break;
					}
					if (cards.length) player.addToExpansion(cards, "gain2").gaintag.add("duwang");
				},
				marktext: "刺",
				intro: {
					name: "刺",
					name2: "刺",
					content: "expansion",
					markcount: "expansion",
				},
				mod: {
					globalFrom: function (from, to, distance) {
						return distance + Math.min(1, from.getExpansions("duwang").filter(i => i.name != "sha").length);
					},
					globalTo: function (from, to, distance) {
						return distance + Math.min(1, to.getExpansions("duwang").filter(i => i.name != "sha").length);
					},
				},
			},
			cibei: {
				audio: 2,
				trigger: { global: "cardsDiscardAfter" },
				filter: function (event, player) {
					if (!player.getExpansions("duwang").filter(i => i.name != "sha").length) return false;
					var evt = event.getParent();
					if (evt.name != "orderingDiscard") return false;
					var evtx = evt.relatedEvent || evt.getParent();
					return (
						evtx.name == "useCard" &&
						evtx.card.name == "sha" &&
						evtx.card.isCard &&
						event.cards.filterInD("d").length &&
						game.hasPlayer2(current =>
							current.hasHistory("sourceDamage", evtxx => {
								return evtxx.card == evtx.card;
							})
						)
					);
				},
				direct: true,
				group: "cibei_fullyReady",
				content: function () {
					"step 0";
					player.chooseButton(["###" + get.prompt(event.name) + '###<div class="text center">将一张“刺”置入弃牌堆，并将' + get.translation(trigger.cards.filterInD("d")) + "置入“刺”</div>", player.getExpansions("duwang")]).set("filterButton", button => {
						return button.link.name != "sha";
					});
					"step 1";
					if (result.bool) {
						player.logSkill(event.name);
						player.loseToDiscardpile(result.links);
						player.addToExpansion(trigger.cards.filterInD("d"), "gain2").gaintag.add("duwang");
						if (game.hasPlayer(current => current.countDiscardableCards(player, "hej") > 0))
							player
								.chooseTarget("刺北：弃置一名角色区域内的一张牌", true, (card, player, target) => {
									return target.countDiscardableCards(player, "hej") > 0;
								})
								.set("ai", target => {
									return get.effect(target, { name: "guohe" }, _status.event.player);
								});
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						player.discardPlayerCard(target, "hej", true);
						player.addExpose(0.1);
					}
				},
				ai: {
					combo: "duwang",
				},
				subSkill: {
					fullyReady: {
						trigger: { global: "phaseEnd" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							var storage = player.getExpansions("duwang");
							return storage.length > 0 && storage.every(i => i.name == "sha");
						},
						content: function () {
							player.gain(player.getExpansions("duwang"), "gain2").gaintag.add("cibei_mark");
							player.addSkill("cibei_mark");
						},
					},
					mark: {
						trigger: { player: "useCard1" },
						onremove: true,
						charlotte: true,
						silent: true,
						firstDo: true,
						filter: function (event, player) {
							return player.hasHistory("lose", evt => {
								if (evt.getParent() != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("cibei_mark")) return true;
								}
								return false;
							});
						},
						content: function () {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								var stat = player.getStat().card,
									name = trigger.card.name;
								if (typeof stat[name] == "number") stat[name]--;
							}
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("cibei_mark")) return true;
							},
							cardDiscardable: function (card, player, name) {
								if (card.hasGaintag("cibei_mark")) return false;
							},
							canBeDiscarded: function (card) {
								if (card.hasGaintag("cibei_mark")) return false;
							},
							targetInRange: function (card, player, target) {
								if (!card.cards) return;
								for (var i of card.cards) {
									if (i.hasGaintag("cibei_mark")) return true;
								}
							},
							cardUsable: function (card, player) {
								if (!card.cards) return;
								for (var i of card.cards) {
									if (i.hasGaintag("cibei_mark")) return true;
								}
							},
						},
					},
				},
			},
			//武安国
			diezhang: {
				audio: 2,
				locked: false,
				zhuanhuanji: function (player, skill) {
					if (!player.storage.duanwan) player.storage[skill] = !player.storage[skill];
				},
				trigger: { global: ["eventNeutralized", "shaMiss"] },
				filter: function (event, player) {
					if (player.hasSkill("diezhang_used")) return false;
					if (event.type != "card") return false;
					var evt = event._neutralize_event;
					var user, responder;
					if (event.name == "sha") {
						user = event.player;
						responder = event.target;
					} else {
						if (evt.type != "card") return false;
						user = event.player;
						responder = evt.player;
					}
					if (!player.storage.diezhang) {
						if (user != player || responder == player) return false;
						return player.countDiscardableCards(player, "he") > 0 && player.canUse("sha", responder, false);
					} else {
						if (user == player || responder != player) return false;
						return player.canUse("sha", user, false);
					}
				},
				direct: true,
				content: function () {
					"step 0";
					var evt = trigger._neutralize_event;
					var user, responder;
					if (trigger.name == "sha") {
						user = trigger.player;
						responder = trigger.target;
					} else {
						user = trigger.player;
						responder = evt.player;
					}
					var num = player.storage.duanwan ? 2 : 1;
					event.num = num;
					if (!player.storage.diezhang) {
						var target = responder;
						event.target = target;
						var next = player
							.chooseToDiscard(get.prompt("diezhang", target), "弃置一张牌，视为对其使用" + get.cnNumber(num) + "张【杀】", "he")
							.set("ai", card => {
								if (_status.event.goon) return 6 - get.value(card);
								return 0;
							})
							.set("logSkill", ["diezhang", target]);
					} else {
						var target = user;
						event.target = target;
						var next = player.chooseBool(get.prompt("diezhang", target), "摸" + get.cnNumber(num) + "张牌，视为对其使用一张【杀】").set("ai", () => _status.event.goon);
					}
					next.set("goon", get.effect(target, { name: "sha" }, player, player) > 0);
					"step 1";
					if (result.bool) {
						if (player.storage.duanwan) player.addTempSkill("diezhang_used");
						player.changeZhuanhuanji("diezhang");
						if (!result.cards || !result.cards.length) {
							player.logSkill("diezhang", target);
							player.draw(num, "nodelay");
							player.useCard({ name: "sha", isCard: true }, target, false);
						} else while (num--) player.useCard({ name: "sha", isCard: true }, target, false);
					}
				},
				marktext: "☯",
				mark: true,
				intro: {
					content: function (storage, player) {
						var cnNum = get.cnNumber(player.storage.duanwan ? 2 : 1);
						if (storage) return "当其他角色使用牌被你抵消后，你可以摸" + cnNum + "张牌，视为对其使用一张【杀】。";
						return "当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用" + cnNum + "张【杀】。";
					},
				},
				mod: {
					cardUsable: function (card, player, num) {
						if (!player.storage.duanwan && card.name == "sha") return num + 1;
					},
				},
				subSkill: { used: { charlotte: true } },
			},
			duanwan: {
				audio: 2,
				enable: "chooseToUse",
				skillAnimation: true,
				animationColor: "soil",
				limited: true,
				filter: function (event, player) {
					return event.type == "dying" && player == event.dying;
				},
				content: function () {
					player.changeZhuanhuanji("diezhang");
					player.awakenSkill("duanwan");
					var num = 2 - player.hp;
					if (num > 0) player.recover(num);
				},
				ai: {
					save: true,
					skillTagFilter: function (player, tag, target) {
						return player == target;
					},
					result: { player: 1 },
				},
			},
			//李婉
			liandui: {
				audio: 2,
				trigger: { global: "useCard" },
				filter: function (event, player) {
					var history = game.getAllGlobalHistory("useCard");
					var index = history.indexOf(event);
					if (index <= 0) return false;
					var previous = history[index - 1].player;
					if (event.player == player && previous != player && previous.isIn()) return true;
					if (event.player != player && previous == player) return true;
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					var history = game.getAllGlobalHistory("useCard");
					var index = history.indexOf(trigger);
					var previous = history[index - 1].player;
					var user = trigger.player,
						target = previous;
					event.user = user;
					event.target = target;
					if (user) {
						user.chooseBool("是否对" + get.translation(target) + "发动【联对】？", "令" + get.translation(target) + "摸两张牌")
							.set("ai", () => _status.event.bool)
							.set("bool", get.effect(target, { name: "draw" }, user, user) > 0);
					}
					"step 1";
					if (result.bool) {
						event.user.logSkill("liandui", target);
						target.draw(2);
					}
				},
			},
			biejun: {
				audio: 2,
				global: "biejun_give",
				trigger: { player: "damageBegin4" },
				filter: function (event, player) {
					return (
						!player.hasSkill("biejun_used") &&
						player.countCards("h", card => {
							return card.hasGaintag("biejun");
						}) == 0
					);
				},
				prompt2: "翻面并防止此伤害",
				check: function (event, player) {
					return player.isTurnedOver() || event.num >= player.hp || get.distance(_status.currentPhase, player, "absolute") >= 3;
				},
				content: function () {
					player.addTempSkill("biejun_used");
					player.turnOver();
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
							if (get.tag(card, "damage")) {
								if (player.getNext() == target && lib.skill.biejun.filter(null, target) && target.isTurnedOver()) return [0, 1];
							}
						},
					},
				},
				subSkill: {
					used: { charlotte: true },
					give: {
						audio: 2,
						enable: "phaseUse",
						usable: 1,
						filter: function (event, player) {
							if (!player.countCards("h")) return false;
							var targets = game.filterPlayer(function (current) {
								return current != player && current.hasSkill("biejun");
							});
							if (!targets.length) return false;
							return true;
						},
						selectCard: 1,
						filterCard: true,
						filterTarget: function (card, player, target) {
							return target.hasSkill("biejun");
						},
						selectTarget: function () {
							var player = _status.event.player;
							var targets = game.filterPlayer(function (current) {
								return current != player && current.hasSkill("biejun");
							});
							return targets.length > 1 ? 1 : -1;
						},
						complexSelect: true,
						prompt: function () {
							var player = _status.event.player;
							var targets = game.filterPlayer(function (current) {
								return current != player && current.hasSkill("biejun");
							});
							return "将一张手牌交给" + get.translation(targets) + (targets.length > 1 ? "中的一人" : "");
						},
						position: "h",
						discard: false,
						lose: false,
						delay: false,
						check: function (card) {
							var player = _status.event.player;
							if (
								game.hasPlayer(function (current) {
									return lib.skill.biejun_give.filterTarget(null, player, current) && get.attitude(player, current) > 0;
								})
							) {
								return 5 - get.value(card);
							}
							return -get.value(card);
						},
						content: function () {
							game.trySkillAudio("biejun", target);
							player.give(cards, target).gaintag.add("biejun");
							target.addTempSkill("biejun_tag");
						},
						ai: {
							order: 2,
							result: { target: 1 },
						},
					},
					tag: {
						charlotte: true,
						forced: true,
						onremove: function (player) {
							player.removeGaintag("biejun");
						},
					},
				},
			},
			//诸葛尚
			sangu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				getEffect: function (player, target, event, list1, list2) {
					let att = get.attitude(player, target);
					if (att === 0) return 0;
					let getv = function (name, player, arg) {
						let v = event.getTempCache("sangu", player.playerid + name);
						if (typeof v === "number") return v;
						v = player.getUseValue({ name: name, storage: { sangu: true } }, arg);
						event.putTempCache("sangu", player.playerid + name, v);
						return v;
					};
					if (att < 0) {
						for (let i of list1) {
							if (getv(i, target) <= 0 || getv(i, target) <= 0) return -att * Math.sqrt(get.threaten(target)) * 2;
						}
						return 0;
					} else {
						let list = list1.concat(player.hp > 1 ? list2 : []),
							eff = 0;
						list.sort(function (a, b) {
							return getv(b, target) - getv(a, target);
						});
						list = list.slice(3);
						for (let i of list) {
							let res = getv(i, target);
							if (res <= 5) break;
							else eff += res;
						}
						return Math.sqrt(eff / 1.5) * att;
					}
				},
				content: function () {
					"step 0";
					event.list1 = [];
					event.list2 = [];
					event.used = [];
					player.getHistory("useCard", function (evt) {
						event.used.add(evt.card.name);
					});
					for (let name of lib.inpile) {
						let add = false,
							type = get.type(name);
						if (name === "sha") add = true;
						else if (type === "trick") {
							let info = lib.card[name];
							if (info && !info.singleCard && !info.notarget) add = true;
						}
						if (!add) continue;
						if (event.used.includes(name)) event.list1.push(name);
						else event.list2.push(name);
					}
					if (!event.list1.length && !event.list2.length) event.finish();
					else
						player
							.chooseTarget(get.prompt2("sangu"), lib.filter.notMe)
							.set("ai", function (target) {
								return lib.skill.sangu.getEffect(_status.event.player, target, _status.event.getTrigger(), _status.event.list1, _status.event.list2);
							})
							.set("list1", event.list1)
							.set("list2", event.list2);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("sangu", target);
						event.target = target;
					} else event.finish();
					"step 2";
					var dialog = ["为" + get.translation(target) + "选择至多三个牌名"];
					if (event.list1.length) {
						dialog.push('<div class="text center">本回合已使用过的牌</div>');
						dialog.push([event.list1.map(i => [get.type(i), "", i]), "vcard"]);
					}
					if (event.list2.length) {
						dialog.push('<div class="text center">本回合未使用过的牌</div>');
						dialog.push([event.list2.map(i => [get.type(i), "", i]), "vcard"]);
					}
					player
						.chooseButton(dialog, true, [1, 3])
						.set("ai", function (button) {
							let name = button.link[2],
								list = _status.event.list,
								player = _status.event.player,
								target = _status.event.getParent().target,
								trigger = _status.event.getTrigger(),
								getv = (name, player) => {
									let v = trigger.getTempCache("sangu", player.playerid + name);
									if (typeof v === "number") return v;
									v = player.getUseValue({ name: name, storage: { sangu: true } });
									trigger.putTempCache("sangu", player.playerid + name, v);
									return v;
								};
							if (get.attitude(player, target) < 0) {
								if (!list.includes(name)) return 0;
								return -getv(name, target);
							} else {
								if (player.hp < 2 && !list.includes(name)) return 0;
								let val = getv(name, target),
									base = 5;
								val = Math.min(15, val - base);
								if (name === "wuzhong" || name === "dongzhuxianji") val += 15;
								else if (name === "shunshou") val += 6;
								return val;
							}
						})
						.set("list", event.list1);
					"step 3";
					if (result.bool) {
						var names = result.links.map(i => i[2]);
						if (!target.storage.sangu_effect) target.storage.sangu_effect = [];
						target.storage.sangu_effect = target.storage.sangu_effect.concat(names);
						game.log(player, "为", target, "选择了", "#y" + get.translation(names));
						target.addTempSkill("sangu_effect", { player: "phaseUseAfter" });
						target.markSkill("sangu_effect");
						var bool = true;
						for (var i of names) {
							if (!event.used.includes(i)) {
								bool = false;
								break;
							}
						}
						if (bool) {
							target.addTempSkill("sangu_prevent", { player: "phaseUseAfter" });
							target.markAuto("sangu_prevent", [player]);
						}
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && card.storage && card.storage.sangu) return "zeroplayertarget";
						},
					},
				},
				subSkill: {
					effect: {
						trigger: { player: "phaseUseBegin" },
						charlotte: true,
						forced: true,
						popup: false,
						content: function () {
							player.addTempSkill("sangu_viewas");
						},
						onremove: true,
						intro: {
							mark: function (dialog, storage, player) {
								if (!storage || !storage.length) return "当前无可用牌";
								dialog.add([[storage[0]], "vcard"]);
								if (storage.length > 1) dialog.addSmall([storage.slice(1), "vcard"]);
							},
							content: "$",
						},
					},
					viewas: {
						mod: {
							hiddenCard: function (player, name) {
								var storage = player.getStorage("sangu_effect");
								if (storage.length) return name == storage[0];
							},
							cardname: function (card, player) {
								if (_status.event.name != "chooseToUse" || _status.event.skill) return;
								var storage = player.getStorage("sangu_effect");
								if (storage.length) return storage[0];
							},
							cardnature: function (card, player) {
								if (_status.event.name != "chooseToUse" || _status.event.skill) return;
								var storage = player.getStorage("sangu_effect");
								if (storage.length) return false;
							},
						},
						trigger: { player: ["useCard", "respond"] },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return event.cards.length > 0 && player.getStorage("sangu_effect").length > 0;
						},
						content: function () {
							if (!trigger.card.storage) trigger.card.storage = {};
							trigger.card.storage.sangu = true;
							player.unmarkAuto("sangu_effect", [player.getStorage("sangu_effect")[0]]);
						},
					},
					prevent: {
						trigger: { source: "damageBegin2" },
						forced: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return event.card && event.card.storage && event.card.storage.sangu && player.getStorage("sangu_prevent").includes(event.player);
						},
						content: function () {
							trigger.cancel();
						},
					},
				},
			},
			yizu: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				usable: 1,
				filter: function (event, player) {
					return player.isDamaged() && player.hp <= event.player.hp && (event.card.name == "sha" || event.card.name == "juedou");
				},
				content: function () {
					player.recover();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (target.isHealthy() || (card.name != "sha" && card.name != "juedou")) return;
							if (target.storage.counttrigger && target.storage.counttrigger.yizu && current < 0) return 5;
							if (player.hp < target.hp) return;
							if (current > 0) return 1.2;
							if (get.attitude(player, target) >= 0) return;
							var copy = get.effect(target, { name: "shacopy" }, player, player);
							if (
								copy > 0 &&
								player.isPhaseUsing() &&
								Math.min(
									player.getCardUsable("sha"),
									player.countCards("hs", function (card) {
										return get.name(card) == "sha" && player.canUse(card, target, null, true);
									})
								) >= 2
							)
								return;
							return [0, 2];
						},
					},
				},
			},
			//轲比能
			kousheng: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseCard("h", [1, player.countCards("h")], get.prompt("kousheng"), "你可以选择任意张手牌，这些手牌于本回合内视为无次数限制的【杀】。但当有角色受到这些【杀】的伤害后，其可以用所有手牌交换剩余的牌。")
						.set("standard", player.getUseValue({ name: "sha" }, null, true))
						.set("ai", function (card) {
							var player = _status.event.player,
								standard = _status.event.standard;
							if (standard <= 0) return 0;
							var eff = player.getUseValue(card, null, true);
							if (eff <= standard) return standard - eff + 0.1;
							return 0;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("kousheng");
						player.addGaintag(result.cards, "kousheng");
						player.addTempSkill("kousheng_effect");
						game.delayx();
					}
				},
				subSkill: {
					effect: {
						audio: "kousheng",
						trigger: { player: "useCard1" },
						forced: true,
						charlotte: true,
						firstDo: true,
						filter: function (event, player) {
							if (event.card.name != "sha") return false;
							return player.hasHistory("lose", function (evt) {
								if (evt.getParent() != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("kousheng")) return true;
								}
								return false;
							});
						},
						content: function () {
							if (!trigger.card.storage) trigger.card.storage = {};
							trigger.card.storage.kousheng = true;
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								player.getStat("card").sha--;
							}
						},
						onremove: function (player) {
							player.removeGaintag("kousheng");
						},
						mod: {
							cardUsable: function (card, player, target) {
								if (card.name != "sha" || !card.cards) return;
								for (var i of card.cards) {
									if (i.hasGaintag("kousheng")) return Infinity;
								}
							},
							cardname: function (card) {
								if (get.itemtype(card) == "card" && card.hasGaintag("kousheng")) return "sha";
							},
							cardnature: function (card) {
								if (get.itemtype(card) == "card" && card.hasGaintag("kousheng")) return false;
							},
						},
						group: "kousheng_damage",
					},
					damage: {
						audio: "kousheng",
						trigger: { source: "damageSource" },
						forced: true,
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.kousheng || event.getParent().type != "card") return false;
							var target = event.player;
							return (
								target.isIn() &&
								player.hasCard(function (card) {
									return card.hasGaintag("kousheng");
								}, "h")
							);
						},
						content: function () {
							"step 0";
							var target = trigger.player;
							event.target = target;
							var cards = player.getCards("h", function (card) {
								return card.hasGaintag("kousheng");
							});
							event.cards = cards;
							var str = get.translation(player);
							player.showCards(cards, str + "的【寇旌】牌");
							if (target.countCards("h") > 0)
								target.chooseBool("是否交换“寇旌”牌？", "用你的所有手牌交换" + str + "的下列“寇旌”牌：" + get.translation(cards)).set("ai", function () {
									var player = _status.event.player,
										target = _status.event.getParent().player;
									if (player.hasShan() || player.countCards("hs", { name: ["tao", "jiu"] }) > 0 || get.attitude(player, target) >= 0) return false;
									var hs1 = player.getCards("h"),
										hs2 = _status.event.getParent().cards;
									if (hs2.length >= player.hp) return true;
									if (get.value(hs1, player) >= get.value(hs2, target)) return false;
									return true;
								});
							else event.finish();
							"step 1";
							if (result.bool) {
								player.swapHandcards(target, cards, target.getCards("h"));
							}
						},
					},
				},
			},
			//陆凯
			lkbushi: {
				audio: 2,
				getBushi: function (player) {
					if (!player.storage.lkbushi) return ["spade", "heart", "club", "diamond"];
					return player.storage.lkbushi;
				},
				onremove: true,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				locked: false,
				content: function () {
					"step 0";
					var list = lib.skill.lkbushi.getBushi(player);
					list = list.map(function (i) {
						return ["", "", "lukai_" + i];
					});
					var next = player.chooseToMove("卜筮：是否调整〖卜筮〗的花色顺序？");
					next.set("list", [
						[
							"无次数限制/使用打出摸牌<br>可弃牌无效/结束阶段获得",
							[list, "vcard"],
							function (list) {
								var list2 = list.map(function (i) {
									return get.translation(i[2].slice(6));
								});
								return "你使用" + list2[0] + "牌时无次数限制；使用或打出" + list2[1] + "时，摸一张牌；<br>成为" + list2[2] + "牌目标后可弃一张牌无效；结束阶段获得一张" + list2[3] + "牌";
							},
						],
					]);
					next.set("processAI", function () {
						var player = _status.event.player;
						var list = lib.skill.lkbushi.getBushi(player);
						var list2 = [];
						var hs = player.getCards("hs", function (card) {
							return player.hasValueTarget(card);
						});
						list.sort(function (a, b) {
							return hs.filter(i => get.suit(i) == b).length - hs.filter(i => get.suit(i) == a).length;
						});
						list2.push(list.shift());
						hs = player.getCards("hs", "sha");
						list.sort(function (a, b) {
							return hs.filter(i => get.suit(i) == b).length - hs.filter(i => get.suit(i) == a).length;
						});
						list2.unshift(list.shift());
						list.randomSort();
						list2.addArray(list);
						return [list2.map(i => ["", "", "lukai_" + i])];
					});
					"step 1";
					if (result.bool) {
						var list = lib.skill.lkbushi.getBushi(player),
							list2 = result.moved[0].map(function (i) {
								return i[2].slice(6);
							});
						for (var i = 0; i < 4; i++) {
							if (list[i] != list2[i]) {
								player.logSkill("lkbushi");
								player.storage.lkbushi = list2;
								var str = "#g";
								for (var j = 0; j < 4; j++) {
									str += get.translation(list2[j]);
									if (j != 3) str += "/";
								}
								game.log(player, "将", "#g【卜筮】", "的花色序列改为", str);
								game.delayx();
								break;
							}
						}
					}
				},
				mark: true,
				marktext: "筮",
				intro: {
					content: function (storage, player) {
						var list = lib.skill.lkbushi.getBushi(player).map(i => get.translation(i));
						return "①你使用" + list[0] + "牌无次数限制。②当你使用或打出" + list[1] + "牌后，你摸一张牌。③当你成为" + list[2] + "牌的目标后，你可以弃置一张牌，令此牌对你无效。④结束阶段开始时，你从牌堆或弃牌堆获得一张" + list[3] + "牌。⑤准备阶段开始时，你可调整此技能中四种花色的对应顺序。";
					},
				},
				group: ["lkbushi_unlimit", "lkbushi_draw", "lkbushi_defend", "lkbushi_gain"],
				subSkill: {
					unlimit: {
						mod: {
							cardUsable: function (card, player) {
								const list = lib.skill.lkbushi.getBushi(player),
									suit = get.suit(card);
								if (suit === "unsure" || list[0] === suit) return Infinity;
							},
						},
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						silent: true,
						firstDo: true,
						filter: function (event, player) {
							if (event.addCount === false) return true;
							var list = lib.skill.lkbushi.getBushi(player);
							return list[0] == get.suit(event.card);
						},
						content: function () {
							trigger.addCount = false;
							var stat = player.getStat().card,
								name = trigger.card.name;
							if (stat[name] && typeof stat[name] == "number") stat[name]--;
						},
					},
					draw: {
						audio: "lkbushi",
						trigger: { player: ["useCardAfter", "respondAfter"] },
						forced: true,
						locked: false,
						filter: function (event, player) {
							var list = lib.skill.lkbushi.getBushi(player);
							return list[1] == get.suit(event.card);
						},
						content: function () {
							player.draw();
						},
					},
					defend: {
						audio: "lkbushi",
						trigger: { target: "useCardToTargeted" },
						direct: true,
						filter: function (event, player) {
							var list = lib.skill.lkbushi.getBushi(player);
							return list[2] == get.suit(event.card) && !event.excluded.includes(player) && player.countCards("he") > 0;
						},
						content: function () {
							"step 0";
							player
								.chooseToDiscard("he", get.prompt("lkbushi"), "弃置一张牌，令" + get.translation(trigger.card) + "对你无效")
								.set("ai", function (card) {
									if (_status.event.eff >= 0) return false;
									return -_status.event.eff * 1.1 - get.value(card);
								})
								.set("eff", get.effect(player, trigger.card, trigger.player, player)).logSkill = ["lkbushi_defend", trigger.player];
							"step 1";
							if (result.bool) {
								trigger.excluded.add(player);
							}
						},
					},
					gain: {
						audio: "lkbushi",
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						locked: false,
						content: function () {
							var list = lib.skill.lkbushi.getBushi(player);
							var card = get.cardPile(function (card) {
								return get.suit(card, false) == list[3];
							});
							if (card) player.gain(card, "gain2");
						},
					},
				},
			},
			lkzhongzhuang: {
				audio: 2,
				trigger: { source: ["damageBegin1", "damageBegin4"] },
				forced: true,
				filter: function (event, player, name) {
					if (!event.card || event.card.name != "sha" || event.getParent().type != "card") return false;
					var range = player.getAttackRange();
					if (name == "damageBegin1") return range > 3;
					return range < 3 && event.num > 1;
				},
				content: function () {
					if (event.triggername == "damageBegin1") trigger.num++;
					else trigger.num = 1;
				},
				global: "lkzhongzhuang_ai",
				subSkill: {
					ai: {
						ai: {
							filterDamage: true,
							skillTagFilter: function (player, tag, arg) {
								if (arg && arg.card && arg.card.name == "sha") {
									if (arg.player && arg.player.hasSkill("lkzhongzhuang") && arg.player.getAttackRange() < 3) return true;
								}
								return false;
							},
						},
					},
				},
			},
			//顾雍
			olbingyi: {
				audio: "bingyi",
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				filter: function (event, player) {
					return event.type == "discard" && event.getl(player).cards2.length > 0 && player.countCards("h") > 0 && !player.hasSkill("olbingyi_blocker", null, null, false);
				},
				prompt2: function (event, player) {
					var str = "展示所有手牌，然后",
						hs = player.getCards("h");
					var color = get.color(hs);
					if (color == "none") return str + "无事发生";
					str += "令至多" + get.cnNumber(hs.length) + "名其他角色和自己各摸一张牌";
					return str;
				},
				check: function (event, player) {
					var color = get.color(player.getCards("h"));
					return color != "none";
				},
				content: function () {
					"step 0";
					player.addTempSkill("olbingyi_blocker", ["phaseZhunbeiAfter", "phaseJudgeAfter", "phaseDrawAfter", "phaseUseAfter", "phaseDiscardAfter", "phaseJieshuAfter"]);
					player.showHandcards(get.translation(player) + "发动了【秉壹】");
					if (get.color(player.getCards("h")) == "none") event.finish();
					"step 1";
					var num = player.countCards("h");
					player.chooseTarget([1, num], "令至多" + get.cnNumber(num) + "名角色也各摸一张牌", lib.filter.notMe).set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards("h"));
						if (target.hasSkillTag("nogain")) att /= 10;
						return att;
					});
					"step 2";
					var targets = [player];
					if (result.bool) {
						targets.addArray(result.targets);
						player.line(targets, "green");
						game.asyncDraw(targets.sortBySeat());
					} else {
						player.draw();
						event.finish();
					}
					"step 3";
					game.delayx();
				},
				subSkill: { blocker: { charlotte: true } },
			},
			//孙体
			xinzhaofu: {
				audio: "zhaofu",
				enable: "phaseUse",
				usable: 1,
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: "wood",
				selectTarget: [1, 2],
				filterTarget: lib.filter.notMe,
				zhuSkill: true,
				contentBefore: function () {
					player.awakenSkill("xinzhaofu");
				},
				content: function () {
					target.addSkill("xinzhaofu_effect");
					target.markAuto("xinzhaofu_effect", [player]);
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							var targets = game.filterPlayer(function (current) {
								return current.group == "wu" && get.attitude(player, current) > 0;
							});
							if (targets.length) {
								for (var targetx of targets) {
									if (!targetx.inRange(target)) return -1;
								}
								return -0.5;
							}
							return 0;
						},
					},
				},
				subSkill: {
					effect: {
						charlotte: true,
						mark: true,
						intro: { content: "已视为在其他吴势力角色的攻击范围内" },
						mod: {
							inRangeOf: function (from, to) {
								if (from.group != "wu") return;
								var list = to.getStorage("xinzhaofu_effect");
								for (var i of list) {
									if (i != from) return true;
								}
							},
						},
					},
				},
			},
			xinkuangbi: {
				audio: "kuangbi",
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					target.chooseCard("he", [1, 3], "匡弼：交给" + get.translation(player) + "一至三张牌", true).set("ai", function (card) {
						if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
							return 7 - get.value(card);
						}
						return -get.value(card);
					});
					"step 1";
					if (result.bool) {
						target.give(result.cards, player, "giveAuto").gaintag.add("xinkuangbi_keep");
						player.addTempSkill("xinkuangbi_keep");
						target.addSkill("xinkuangbi_draw");
						target.addMark("xinkuangbi_draw", result.cards.length, false);
					}
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) > 0) {
								return Math.sqrt(target.countCards("he"));
							}
							return 0;
						},
						player: 1,
					},
				},
				subSkill: {
					keep: {
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("xinkuangbi_keep")) return true;
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("xinkuangbi_keep")) return false;
							},
						},
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("xinkuangbi_keep");
						},
					},
					draw: {
						trigger: { player: "phaseBegin" },
						forced: true,
						charlotte: true,
						onremove: true,
						intro: {
							content: "下回合开始时摸#张牌",
						},
						content: function () {
							player.draw(player.countMark("xinkuangbi_draw"));
							player.removeSkill("xinkuangbi_draw");
						},
					},
				},
			},
			rejingce: {
				audio: "jingce",
				trigger: { player: "phaseUseEnd" },
				frequent: true,
				filter: function (event, player) {
					return (
						player.getHistory("useCard", function (evt) {
							return evt.getParent("phaseUse") == event;
						}).length > 0
					);
				},
				content: function () {
					var list = [];
					player.getHistory("useCard", function (evt) {
						if (evt.getParent("phaseUse") == trigger) list.add(get.type2(evt.card));
					});
					player.draw(list.length);
				},
				group: "rejingce_add",
			},
			rejingce_add: {
				trigger: { player: "loseEnd" },
				silent: true,
				firstDo: true,
				sourceSkill: "rejingce",
				filter: function (event, player) {
					if (event.getParent().name != "useCard" || player != _status.currentPhase) return false;
					var list = player.getStorage("rejingce2");
					for (var i of event.cards) {
						if (!list.includes(get.suit(i, player))) return true;
					}
					return false;
				},
				content: function () {
					if (!player.storage.rejingce2) player.storage.rejingce2 = [];
					for (var i of trigger.cards) player.storage.rejingce2.add(get.suit(i, player));
					player.storage.rejingce2.sort();
					player.addTempSkill("rejingce2");
					player.markSkill("rejingce2");
				},
			},
			rejingce2: {
				onremove: true,
				intro: {
					content: "当前已使用花色：$",
				},
				mod: {
					maxHandcard: function (player, num) {
						return num + player.getStorage("rejingce2").length;
					},
				},
			},
			rejueqing: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				skillAnimation: true,
				animationColor: "water",
				filter: function (event, player) {
					return player != event.player && !player.storage.rejueqing_rewrite;
				},
				prompt2: function (event, player) {
					var num = get.cnNumber(2 * event.num, true);
					return "令即将对其造成的伤害翻倍至" + num + "点，并令自己失去" + get.cnNumber(event.num) + "点体力";
				},
				check: function (event, player) {
					return (
						player.hp > event.num &&
						event.player.hp > event.num &&
						!event.player.hasSkillTag("filterDamage", null, {
							player: player,
							card: event.card,
						}) &&
						get.attitude(player, event.player) < 0
					);
				},
				locked: function (skill, player) {
					return player && player.storage.rejueqing_rewrite;
				},
				logTarget: "player",
				content: function () {
					player.loseHp(trigger.num);
					trigger.num *= 2;
					player.storage.rejueqing_rewrite = true;
				},
				derivation: "rejueqing_rewrite",
				group: "rejueqing_rewrite",
				subSkill: {
					rewrite: {
						trigger: { source: "damageBefore" },
						forced: true,
						charlotte: true,
						audio: "rejueqing",
						filter: function (event, player) {
							return player.storage.rejueqing_rewrite == true;
						},
						check: function () {
							return false;
						},
						content: function () {
							trigger.cancel();
							trigger.player.loseHp(trigger.num);
						},
						ai: {
							jueqing: true,
							skillTagFilter: function (player) {
								return player.storage.rejueqing_rewrite == true;
							},
						},
					},
				},
			},
			reshangshi: {
				audio: 2,
				trigger: {
					player: ["loseAfter", "changeHp", "gainMaxHpAfter", "loseMaxHpAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				frequent: true,
				prompt: function (event, player) {
					return "是否发动【伤逝】将手牌摸至" + get.cnNumber(player.getDamagedHp()) + "张？";
				},
				prompt2: false,
				filter: function (event, player) {
					if (event.getl && !event.getl(player)) return false;
					return player.countCards("h") < player.getDamagedHp();
				},
				content: function () {
					player.draw(player.getDamagedHp() - player.countCards("h"));
				},
				ai: {
					noh: true,
					skillTagFilter: function (player, tag) {
						if (tag == "noh" && player.maxHp - player.hp < player.countCards("h")) {
							return false;
						}
					},
				},
				group: "reshangshi_2nd",
			},
			reshangshi_2nd: {
				trigger: { player: "damageBegin3" },
				direct: true,
				sourceSkill: "reshangshi",
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				content: function () {
					player
						.chooseToDiscard("是否发动【伤逝】弃置一张牌？", "he")
						.set("logSkill", "reshangshi")
						.set("ai", function (card) {
							var player = _status.event.player;
							if (player.countCards("h") > player.getDamagedHp() + _status.event.getTrigger().num) return 1;
							if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
							return (get.position(card) == "h" ? 5 : 0.1) - get.value(card);
						});
				},
			},
			oldzhenlie: {
				audio: 2,
				trigger: { player: "judge" },
				check: function (event, player) {
					return event.judge(player.judging[0]) < 0;
				},
				content: function () {
					"step 0";
					var card = get.cards()[0];
					event.card = card;
					game.cardsGotoOrdering(card).relatedEvent = trigger;
					"step 1";
					player.$throw(card);
					if (trigger.player.judging[0].clone) {
						trigger.player.judging[0].clone.classList.remove("thrownhighlight");
						game.broadcast(function (card) {
							if (card.clone) {
								card.clone.classList.remove("thrownhighlight");
							}
						}, trigger.player.judging[0]);
						game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
					}
					game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0] = card;
					game.log(trigger.player, "的判定牌改为", card);
					game.delay(2);
				},
			},
			oldmiji: {
				trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
				audio: 2,
				filter: function (event, player) {
					return player.isDamaged();
				},
				content: function () {
					"step 0";
					player.judge(function (card) {
						return get.color(card) == "black" ? 1 : -1;
					}).judge2 = function (result) {
						return result.bool;
					};
					"step 1";
					if (result.bool && player.maxHp > player.hp) {
						var cards = get.cards(player.maxHp - player.hp);
						event.cards = cards;
						player
							.chooseTarget(true)
							.set("ai", function (target) {
								return get.attitude(player, target) / Math.sqrt(1 + target.countCards("h"));
							})
							.set("createDialog", ["请选择一名角色获得这些牌", event.cards]);
					} else {
						event.finish();
					}
					"step 2";
					player.line(result.targets);
					result.targets[0].gain(event.cards, "draw");
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "recover") && target.hp == target.maxHp - 1) return [0, 0];
							if (target.hasFriend()) {
								if ((get.tag(card, "damage") == 1 || get.tag(card, "loseHp")) && target.hp == target.maxHp) return [0, 1];
							}
						},
					},
					threaten: function (player, target) {
						if (target.hp == 1) return 3;
						if (target.hp == 2) return 2;
						return 1;
					},
				},
			},
			oldqianxi: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				check: function (event, player) {
					var att = get.attitude(player, event.player);
					if (event.player.hp == event.player.maxHp) return att < 0;
					if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag("maixie"))) return att < 0;
					return att > 0;
				},
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && get.distance(player, event.player) <= 1;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					player.judge(function (card) {
						return get.suit(card) != "heart" ? 1 : -1;
					}).judge2 = function (result) {
						return result.bool;
					};
					"step 1";
					if (result.bool) {
						trigger.cancel();
						trigger.player.loseMaxHp(true);
					}
				},
			},
			old_fuhun: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					"step 1";
					var cards = get.cards(2);
					event.cards = cards;
					player.showCards(cards, get.translation(player) + "发动了【父魂】");
					"step 2";
					player.gain(cards, "gain2");
					if (get.color(cards[0]) != get.color(cards[1])) {
						player.addTempSkills(["wusheng", "paoxiao"]);
					}
				},
				derivation: ["wusheng", "paoxiao"],
			},
			shiyong: {
				audio: 2,
				trigger: { player: "damageEnd" },
				forced: true,
				check: function () {
					return false;
				},
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && (get.color(event.card) == "red" || event.getParent(2).jiu == true);
				},
				content: function () {
					player.loseMaxHp();
				},
				ai: {
					neg: true,
				},
			},
			xindanshou: {
				audio: 2,
				trigger: {
					global: "phaseJieshuBegin",
					target: "useCardToTargeted",
				},
				direct: true,
				filter: function (event, player, name) {
					return ((name == "phaseJieshuBegin" && event.player != player && player.countCards("he") >= event.player.countCards("h")) || (event.targets && event.targets.includes(player) && ["basic", "trick"].includes(get.type(event.card, "trick")))) && !player.hasSkill("xindanshou_as");
				},
				content: function () {
					"step 0";
					if (event.triggername == "phaseJieshuBegin") {
						var num = trigger.player.countCards("h");
						if (num > 0)
							player
								.chooseToDiscard(get.prompt("xindanshou", trigger.player), num, "弃置" + get.cnNumber(num) + "张牌并对" + get.translation(trigger.player) + "造成1点伤害", "he")
								.set("logSkill", ["xindanshou", trigger.player])
								.set("ai", function (card) {
									if (get.damageEffect(_status.event.getTrigger().player, _status.event.player, _status.event.player) > 0) return Math.max(5.5, 8 - _status.event.selectTarget) - get.value(card);
									return -1;
								});
						else
							player.chooseBool(get.prompt("xindanshou", trigger.player), "对" + get.translation(trigger.player) + "造成1点伤害").ai = function () {
								return get.damageEffect(trigger.player, player, player) > 0;
							};
					} else {
						var num = 0;
						game.countPlayer2(function (current) {
							var history = current.getHistory("useCard");
							for (var j = 0; j < history.length; j++) {
								if (["basic", "trick"].includes(get.type(history[j].card, "trick")) && history[j].targets && history[j].targets.includes(player)) num++;
							}
						});
						event.num = num;
						player
							.chooseBool(get.prompt("xindanshou") + "（可摸" + get.cnNumber(num) + "张牌）", get.translation("xindanshou_info"))
							.set("ai", function () {
								return _status.event.choice;
							})
							.set(
								"choice",
								(function () {
									if (player.isPhaseUsing()) {
										if (
											player.countCards("h", function (card) {
												return ["basic", "trick"].includes(get.type(card, "trick")) && player.canUse(card, player, null, true) && get.effect(player, card, player) > 0 && player.getUseValue(card, null, true) > 0;
											})
										)
											return false;
										return true;
									}
									if (num > 2) return true;
									var card = trigger.card;
									if (get.tag(card, "damage") && player.hp <= trigger.getParent().baseDamage && (!get.tag(card, "respondShan") || !player.hasShan()) && (!get.tag(card, "respondSha") || !player.hasSha())) return true;
									var source = _status.currentPhase,
										todis = source.countCards("h") - source.needsToDiscard();
									if (
										todis <=
											Math.max(
												Math.min(
													2 + (source.hp <= 1 ? 1 : 0),
													player.countCards("he", function (card) {
														return get.value(card, player) < Math.max(5.5, 8 - todis);
													})
												),
												player.countCards("he", function (card) {
													return get.value(card, player) <= 0;
												})
											) &&
										get.damageEffect(source, player, player) > 0
									)
										return false;
									if (!source.isPhaseUsing() || get.attitude(player, source) > 0) return true;
									if (card.name == "sha" && !source.getCardUsable("sha")) return true;
									return Math.random() < num / 3;
								})()
							);
					}
					"step 1";
					if (result.bool) {
						if (!result.cards || !result.cards.length) {
							player.logSkill("xindanshou", trigger.player);
						}
						if (event.triggername == "useCardToTargeted") {
							player.draw(num);
							player.addTempSkill("xindanshou_as");
						} else {
							trigger.player.damage("nocard");
						}
					}
				},
				subSkill: { as: { charlotte: true } },
				ai: {
					threaten: 0.6,
					effect: {
						target: function (card, player, target, current) {
							if (typeof card != "object" || target.hasSkill("xindanshou_as") || !["basic", "trick"].includes(get.type(card, "trick"))) return;
							var num = 0;
							game.countPlayer2(function (current) {
								var history = current.getHistory("useCard");
								for (var j = 0; j < history.length; j++) {
									if (["basic", "trick"].includes(get.type(history[j].card, "trick")) && history[j].targets && history[j].targets.includes(player)) num++;
								}
							});
							if (player == target && current > 0) return [1.1, num];
							return [0.9, num];
						},
					},
				},
			},
			xinbenxi: {
				group: ["xinbenxi_summer", "xinbenxi_damage"],
				audio: 2,
				trigger: {
					player: "useCard2",
				},
				forced: true,
				mod: {
					globalFrom: function (from, to, distance) {
						if (_status.currentPhase == from) {
							return distance - from.storage.xinbenxi;
						}
					},
					wuxieRespondable: function (card, player, target, current) {
						if (player != current && player.storage.xinbenxi_directHit.includes(card)) {
							return false;
						}
					},
				},
				init: function (player) {
					player.storage.xinbenxi_directHit = [];
					player.storage.xinbenxi_damage = [];
					player.storage.xinbenxi_unequip = [];
					player.storage.xinbenxi = 0;
				},
				filter: function (trigger, player) {
					return (
						_status.currentPhase == player &&
						trigger.targets &&
						trigger.targets.length == 1 &&
						(get.name(trigger.card) == "sha" || get.type(trigger.card) == "trick") &&
						!game.hasPlayer(function (current) {
							return get.distance(player, current) > 1;
						})
					);
				},
				filterx: function (event, player) {
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var list = ["为XXX多选择一个目标", "　令XXX无视防具牌　", "　令XXX不可被抵消　", "当XXX造成伤害时摸牌"],
						card = get.translation(trigger.card);
					for (var i = 0; i < list.length; i++) {
						list[i] = [i, list[i].replace(/XXX/g, card)];
					}
					var next = player.chooseButton(["奔袭：请选择一至两项", [list.slice(0, 2), "tdnodes"], [list.slice(2, 4), "tdnodes"]]);
					next.set("forced", true);
					next.set("selectButton", [1, 2]);
					next.set("filterButton", function (button) {
						if (button.link == 0) {
							return _status.event.bool1;
						}
						return true;
					});
					next.set("bool1", lib.skill.xinbenxi.filterx(trigger, player));
					next.set("ai", function (button) {
						var player = _status.event.player;
						var event = _status.event.getTrigger();
						switch (button.link) {
							case 0: {
								if (
									game.hasPlayer(function (current) {
										return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && get.effect(current, event.card, player, player) > 0;
									})
								)
									return 1.6 + Math.random();
								return 0;
							}
							case 1: {
								if (
									event.targets.filter(function (current) {
										var eff1 = get.effect(current, event.card, player, player);
										player._xinbenxi_ai = true;
										var eff2 = get.effect(current, event.card, player, player);
										delete player._xinbenxi_ai;
										return eff1 > eff2;
									}).length
								)
									return 1.9 + Math.random();
								return Math.random();
							}
							case 2: {
								var num = 1.3;
								if (
									event.card.name == "sha" &&
									event.targets.filter(function (current) {
										if (
											current.mayHaveShan(
												player,
												"use",
												current.getCards("h", i => {
													return i.hasGaintag("sha_notshan");
												})
											) &&
											get.attitude(player, current) <= 0
										) {
											if (current.hasSkillTag("useShan")) num = 1.9;
											return true;
										}
										return false;
									}).length
								)
									return num + Math.random();
								return 0.5 + Math.random();
							}
							case 3: {
								return (get.tag(event.card, "damage") || 0) + Math.random();
							}
						}
					});
					"step 1";
					var map = [
						function (trigger, player, event) {
							player
								.chooseTarget("请选择" + get.translation(trigger.card) + "的额外目标", true, function (card, player, target) {
									var player = _status.event.player;
									if (_status.event.targets.includes(target)) return false;
									return lib.filter.targetEnabled2(_status.event.card, player, target);
								})
								.set("targets", trigger.targets)
								.set("card", trigger.card)
								.set("ai", function (target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, player, player);
								});
						},
						function (trigger, player, event) {
							player.storage.xinbenxi_unequip.add(trigger.card);
						},
						function (trigger, player, event) {
							player.storage.xinbenxi_directHit.add(trigger.card);
							trigger.nowuxie = true;
							trigger.customArgs.default.directHit2 = true;
						},
						function (trigger, player, event) {
							player.storage.xinbenxi_damage.add(trigger.card);
						},
					];
					for (var i = 0; i < result.links.length; i++) {
						game.log(player, "选择了", "#g【奔袭】", "的", "#y选项" + get.cnNumber(result.links[i] + 1, true));
						map[result.links[i]](trigger, player, event);
					}
					if (!result.links.includes(0)) event.finish();
					"step 2";
					if (result.targets) {
						player.line(result.targets);
						trigger.targets.addArray(result.targets);
					}
				},
				ai: {
					unequip: true,
					unequip_ai: true,
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "unequip") {
							if (arg && player.storage.xinbenxi_unequip.includes(arg.card)) return true;
							return false;
						}
						if (
							_status.currentPhase != player ||
							game.hasPlayer(function (current) {
								return get.distance(player, current) > 1;
							})
						)
							return false;
						if (tag == "directHit_ai") return arg.card.name == "sha";
						if (!arg || !arg.card || (arg.card.name != "sha" && arg.card.name != "chuqibuyi")) return false;
						var card = arg.target.getEquip(2);
						if (card && card.name.indexOf("bagua") != -1) return true;
						if (player._xinbenxi_ai) return false;
					},
				},
				subSkill: {
					damage: {
						sub: true,
						trigger: { global: "damageBegin1" },
						audio: 2,
						forced: true,
						filter: function (event, player) {
							return event.card && player.storage.xinbenxi_damage.includes(event.card);
						},
						content: function () {
							player.draw();
						},
					},
					summer: {
						sub: true,
						trigger: { player: ["phaseAfter", "useCardAfter", "useCard"] },
						silent: true,
						filter: function (event, player) {
							return player == _status.currentPhase;
						},
						content: function () {
							if (trigger.name == "phase") {
								player.storage.xinbenxi = 0;
								return;
							} else if (event.triggername == "useCard") {
								player.logSkill("xinbenxi");
								player.storage.xinbenxi++;
								player.syncStorage("xinbenxi");
								return;
							} else {
								player.storage.xinbenxi_unequip.remove(event.card);
								player.storage.xinbenxi_directHit.remove(event.card);
								player.storage.xinbenxi_damage.remove(event.card);
							}
						},
					},
				},
			},
			xinyaoming: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return ["摸牌", "弃牌", "制衡"].some(function (control) {
							var storage = player.getStorage("xinyaoming_kanon");
							if (storage.includes(control)) return false;
							if (control == "摸牌" && target != player) return true;
							if (control == "弃牌" && target != player && target.countCards("h")) return true;
							if (control == "制衡") return true;
							return false;
						});
					});
				},
				direct: true,
				content: function () {
					"step 0";
					var func = function () {
						game.countPlayer(function (target) {
							var list = ["摸牌", "弃牌", "制衡"].filter(function (control) {
									var storage = player.getStorage("xinyaoming_kanon");
									if (storage.includes(control)) return false;
									if (control == "摸牌" && target != player) return true;
									if (control == "弃牌" && target != player && target.countCards("h")) return true;
									if (control == "制衡") return true;
									return false;
								}),
								str = "";
							for (var i of list) str += i + "<br>";
							str = str.slice(0, -4);
							target.prompt(str);
						});
					};
					if (event.player == game.me) func();
					else if (event.isOnline()) player.send(func);
					player
						.chooseTarget(get.prompt2("xinyaoming"), function (card, player, target) {
							var storage = player.getStorage("xinyaoming_kanon");
							if (!storage.includes("制衡")) return true;
							if (target == player) return false;
							return !storage.includes("摸牌") || target.countCards("h");
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							var storage = player.getStorage("xinyaoming_kanon");
							if (get.attitude(player, target) > 0 && !storage.includes("摸牌") && target != player) return get.effect(target, { name: "draw" }, player, player);
							if (get.attitude(player, target) < 0 && !storage.includes("弃牌") && target != player && target.countCards("h")) return get.effect(target, { name: "guohe_copy2" }, player, player);
							if (get.attitude(player, target) > 0 && !storage.includes("制衡")) return get.effect(target, { name: "kaihua" }, player, player);
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("xinyaoming", target);
						var controls = ["摸牌", "弃牌", "制衡"].filter(function (control) {
							var storage = player.getStorage("xinyaoming_kanon");
							if (storage.includes(control)) return false;
							if (control == "摸牌" && target != player) return true;
							if (control == "弃牌" && target != player && target.countCards("h")) return true;
							if (control == "制衡") return true;
							return false;
						});
						if (controls.length == 1) event._result = { control: controls[0] };
						else {
							var str = get.translation(target);
							var choiceList = ["令" + str + "摸一张牌", "弃置" + str + "一张手牌", "令" + str + "弃置至多两张牌，然后其摸等量的牌"];
							var list = ["摸牌", "弃牌", "制衡"];
							for (var i = 0; i < 3; i++) {
								if (!controls.includes(list[i])) {
									choiceList[i] = '<span style="opacity:0.5">' + choiceList[i] + "</span>";
								}
							}
							player
								.chooseControl(controls)
								.set("choiceList", choiceList)
								.set("ai", function () {
									var player = _status.event.player;
									var target = _status.event.target;
									var controls = _status.event.controls.slice();
									var map = {
										摸牌: get.effect(target, { name: "draw" }, player, player),
										弃牌: get.effect(target, { name: "guohe_copy2" }, player, player),
										制衡: get.effect(target, { name: "kaihua" }, player, player),
									};
									controls.sort((a, b) => map[b] - map[a]);
									return controls[0];
								})
								.set("target", target);
						}
					} else event.finish();
					"step 2";
					player.addTempSkill("xinyaoming_kanon");
					player.markAuto("xinyaoming_kanon", [result.control]);
					switch (result.control) {
						case "摸牌":
							target.draw();
							break;
						case "弃牌":
							player.discardPlayerCard(target, "h", true);
							break;
						case "制衡":
							target.chooseToDiscard([1, 2], "he", "邀名：弃置至多两张牌，然后摸等量的牌", true).set("ai", card => lib.skill.zhiheng.check(card));
							break;
					}
					if (result.control != "制衡") event.finish();
					"step 3";
					if (result.bool) {
						target.draw(result.cards.length);
					}
				},
				subSkill: {
					kanon: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			xinfuli: {
				audio: 2,
				skillAnimation: true,
				animationColor: "soil",
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
					player.awakenSkill("xinfuli");
					event.num = game.countGroup();
					player.recover(event.num - player.hp);
					"step 1";
					var num2 = num - player.countCards("h");
					if (num2) player.draw(num2);
					"step 2";
					if (num > 2) player.turnOver();
					player.storage.xinfuli = true;
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
						if (!target.storage.xinfuli) return 0.9;
					},
				},
				intro: {
					content: "limited",
				},
			},
			xindangxian: {
				trigger: { player: "phaseBegin" },
				forced: true,
				audio: "dangxian",
				audioname: ["xin_liaohua", "re_liaohua"],
				audioname2: {
					dc_guansuo: "dangxian_guansuo",
					guansuo: "dangxian_guansuo",
				},
				content: function () {
					trigger.phaseList.splice(trigger.num, 0, "phaseUse|xindangxian");
				},
				group: "xindangxian_rewrite",
				subSkill: {
					rewrite: {
						trigger: { player: "phaseUseBegin" },
						forced: true,
						popup: false,
						filter: function (kagari) {
							return kagari._extraPhaseReason == "xindangxian";
						},
						content: function () {
							"step 0";
							if (player.storage.xinfuli) {
								player.chooseBool("是否失去1点体力并获得一张【杀】？").ai = function () {
									return player.hp > 2 && !player.hasSha();
								};
							} else event._result = { bool: true };
							"step 1";
							if (!result.bool) {
								event.finish();
								return;
							}
							player.loseHp();
							"step 2";
							var card = get.cardPile(function (card) {
								return card.name == "sha";
							});
							if (card) player.gain(card, "gain2");
							"step 3";
							game.updateRoundNumber();
						},
					},
				},
				ai: {
					combo: "xinfuli",
					halfneg: true
				},
			},
			xinjunxing: {
				inherit: "junxing",
				audio: "junxing",
				content: function () {
					"step 0";
					var types = [];
					for (var i = 0; i < cards.length; i++) {
						types.add(get.type(cards[i], "trick", player));
					}
					target
						.chooseToDiscard(function (card) {
							return !_status.event.types.includes(get.type(card, "trick"));
						})
						.set("ai", function (card) {
							if (_status.event.player.isTurnedOver()) return -1;
							return 8 - get.value(card);
						})
						.set("types", types)
						.set("dialog", ["弃置一张与" + get.translation(player) + "弃置的牌类别均不同的牌，或将武将牌翻面", "hidden", cards]);
					"step 1";
					if (!result.bool) {
						target.turnOver();
					} else event.finish();
					"step 2";
					var num = 4 - target.countCards("h");
					if (num) target.draw(num);
				},
			},
			xinzhige: {
				enable: "phaseUse",
				usable: 1,
				audio: "zhige",
				position: "he",
				selectTarget: 2,
				multitarget: true,
				targetprompt: ["出杀人", "出杀目标"],
				filterTarget: function (card, player, target) {
					if (ui.selected.targets.length == 0) {
						return target != player && target.inRange(player);
					} else {
						return ui.selected.targets[0].inRange(target);
					}
				},
				content: function () {
					"step 0";
					targets[0].chooseCard("交给" + get.translation(player) + "一张【杀】或武器牌，否则视为对" + get.translation(targets[1]) + "使用一张【杀】", "he", function (card) {
						return get.name(card) == "sha" || get.subtype(card) == "equip1";
					}).ai = function (card) {
						var player = _status.event.player;
						var target = _status.event.getParent("xinzhige").targets[1];
						return get.effect(target, { name: "sha" }, player, player) >= 0 ? -1 : 9 - get.value(card);
					};
					"step 1";
					if (result.bool) {
						targets[0].give(result.cards, player, "give");
					} else {
						if (targets[0].canUse("sha", targets[1])) targets[0].useCard({ name: "sha", isCard: true }, targets[1]);
					}
				},
				ai: {
					result: {
						target: function (player, target) {
							if (ui.selected.targets.length) {
								var from = ui.selected.targets[0];
								return get.effect(target, { name: "sha" }, from, target);
							}
							var effs = [0, 0];
							game.countPlayer(function (current) {
								if (current != target && target.canUse("sha", current)) {
									var eff = get.effect(current, { name: "sha" }, target, target);
									if (eff > effs[0]) effs[0] = eff;
									if (eff < effs[1]) effs[1] = eff;
								}
							});
							return effs[get.attitude(player, target) > 0 ? 0 : 1];
						},
					},
					order: 8.5,
					expose: 0.2,
				},
			},
			xinzongzuo: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				audio: "zongzuo",
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					"step 0";
					var num = game.countGroup();
					player.gainMaxHp(num);
					event.num = num;
					"step 1";
					player.recover(event.num);
					//player.update();
				},
				group: "xinzongzuo_lose",
				subSkill: {
					lose: {
						trigger: { global: "dieAfter" },
						forced: true,
						audio: "zongzuo",
						filter: function (event, player) {
							if (!lib.group.includes(event.player.group)) return false;
							if (
								game.hasPlayer(function (current) {
									return current.group == event.player.group;
								})
							) {
								return false;
							}
							return true;
						},
						content: function () {
							"step 0";
							player.loseMaxHp();
							"step 1";
							player.draw(2);
						},
					},
				},
			},
			xintaoluan: {
				hiddenCard: function (player, name) {
					return !player.getStorage("xintaoluan").includes(name) && player.countCards("hes") > 0 && !player.hasSkill("xintaoluan3") && lib.inpile.includes(name);
				},
				audio: "taoluan",
				enable: "chooseToUse",
				filter: function (event, player) {
					return (
						!player.hasSkill("xintaoluan3") &&
						player.hasCard(card =>
							lib.inpile.some(name => {
								if (player.getStorage("xintaoluan").includes(name)) return false;
								if (get.type(name) != "basic" && get.type(name) != "trick") return false;
								if (event.filterCard({ name: name, isCard: true, cards: [card] }, player, event)) return true;
								if (name == "sha") {
									for (var nature of lib.inpile_nature) {
										if (event.filterCard({ name: name, nature: nature, isCard: true, cards: [card] }, player, event)) return true;
									}
								}
								return false;
							}, "hes")
						) > 0 &&
						!_status.dying.length
					);
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) == "basic" || get.type(name) == "trick") {
								if (player.getStorage("xintaoluan").includes(name)) continue;
								list.push([get.translation(get.type(name)), "", name]);
								if (name == "sha") {
									for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
								}
							}
						}
						return ui.create.dialog("滔乱", [list, "vcard"]);
					},
					filter: function (button, player) {
						return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], nature: button.link[3] };
						if (player.countCards("hes", cardx => cardx.name == card.name)) return 0;
						return _status.event.getParent().type == "phase" ? player.getUseValue(card) : 1;
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							audio: "taoluan",
							popname: true,
							check: function (card) {
								return 7 - get.value(card);
							},
							position: "hes",
							viewAs: { name: links[0][2], nature: links[0][3] },
							onuse: function (result, player) {
								var evt = _status.event.getParent("phase");
								if (evt && evt.name == "phase" && !evt.xintaoluan) {
									evt.xintaoluan = true;
									var next = game.createEvent("xintaoluan_clear");
									_status.event.next.remove(next);
									evt.after.push(next);
									next.player = player;
									next.setContent(function () {
										delete player.storage.xintaoluan;
										delete player.storage.xintaoluan2;
									});
								}
								player.markAuto("xintaoluan", [result.card.name]);
							},
						};
					},
					prompt: function (links, player) {
						return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					order: 4,
					save: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						if (!player.countCards("hes") || player.hasSkill("taoluan3")) return false;
						if (tag == "respondSha" || tag == "respondShan") {
							if (arg == "respond") return false;
							return !player.getStorage("taoluan").includes(tag == "respondSha" ? "sha" : "shan");
						}
						return !player.getStorage("taoluan").includes("tao") || (!player.getStorage("taoluan").includes("jiu") && arg == player);
					},
					result: {
						player: function (player) {
							var num = player.countMark("xintaoluan2");
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i] != player && players[i].countCards("he") > (num + 1) * 2 && get.attitude(player, players[i]) > 0) {
									return 1;
								}
							}
							return 0;
						},
					},
					threaten: 1.9,
				},
				group: "xintaoluan2",
			},
			xintaoluan2: {
				trigger: { player: ["useCardAfter", "respondAfter"] },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "xintaoluan",
				filter: function (event, player) {
					if (!game.hasPlayer(current => current != player)) return false;
					return event.skill == "xintaoluan_backup";
				},
				content: function () {
					"step 0";
					player.addMark("xintaoluan2", 1, false);
					event.num = player.countMark("xintaoluan2");
					player
						.chooseTarget(
							true,
							function (card, player, target) {
								return target != player;
							},
							'滔乱<br><br><div class="text center">令一名其他角色选择一项：1.交给你' + get.cnNumber(event.num) + "张与你以此法使用的牌类别不同的牌；2.你失去" + get.cnNumber(event.num) + "点体力"
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (get.attitude(player, target) > 0) {
								if (get.attitude(target, player) > 0) {
									return target.countCards("h");
								}
								return target.countCards("h") / 2;
							}
							return 0;
						});
					"step 1";
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					var type = get.type(trigger.card, "trick");
					target
						.chooseCard('滔乱<br><br><div class="text center">交给' + get.translation(player) + get.cnNumber(num) + "张不为" + get.translation(type) + "牌的牌，或令其失去" + get.cnNumber(num) + "点体力且滔乱无效直到回合结束", "he", num, function (card, player, target) {
							return get.type(card, "trick") != _status.event.cardType;
						})
						.set("cardType", type)
						.set("ai", function (card) {
							if (_status.event.att) {
								return 11 - get.value(card);
							}
							return 0;
						})
						.set("att", get.attitude(target, player) > 0);
					"step 2";
					var target = event.target;
					if (result.bool) {
						target.give(result.cards, player, "give");
					} else {
						player.addTempSkill("xintaoluan3");
						player.loseHp(num);
					}
				},
			},
			xintaoluan3: { charlotte: true },
			xintaoluan_backup: {},
			xincaishi: {
				trigger: {
					player: "phaseDrawBegin2",
				},
				audio: "caishi",
				direct: true,
				content: function () {
					"step 0";
					var choiceList = ["手牌上限-1且发动【忠鉴】时可以多展示对方的一张牌"];
					if (!trigger.numFixed) {
						choiceList.push("摸牌阶段多摸两张牌，然后本回合内不能发动【忠鉴】");
						if (trigger.num > 0) {
							choiceList.unshift("摸牌阶段少摸一张牌，发动【忠鉴】时可以多展示自己的一张牌直到回合结束");
							event.first = true;
						}
					}
					var next = player.chooseControl("cancel2");
					next.set("choiceList", choiceList);
					next.set("prompt", get.prompt("xincaishi"));
					next.set("ai", function () {
						return 2;
					});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("xincaishi");
						if (!event.first) result.index++;
						trigger.num += result.index > 1 ? 2 : result.index - 1;
						player.addTempSkill("xincaishi_" + result.index);
					}
				},
				subSkill: {
					0: {
						mark: true,
						intro: {
							content: "发动【忠鉴】时可以多展示自己的一张牌",
						},
					},
					1: {
						mark: true,
						intro: {
							content: "发动【忠鉴】时可以多展示目标角色的一张牌",
						},
						mod: {
							maxHandcard: function (player, num) {
								return num - 1;
							},
						},
					},
					2: {
						mark: true,
						intro: {
							content: "不能发动【忠鉴】直到回合结束",
						},
					},
				},
			},
			xinzhongjian: {
				audio: "zhongjian",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return !player.hasSkill("xincaishi_2") && player.countCards("h") > 0;
				},
				filterTarget: function (event, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				filterCard: true,
				selectCard: function () {
					return _status.event.player.hasSkill("xincaishi_0") ? [1, 2] : [1, 1];
				},
				check: function () {
					return 1;
				},
				discard: false,
				lose: false,
				content: function () {
					"step 0";
					event.suits = [];
					event.nums = [];
					for (var i = 0; i < cards.length; i++) {
						event.suits.push(get.suit(cards[i]));
						event.nums.push(get.number(cards[i]));
					}
					player.showCards(cards);
					"step 1";
					player.choosePlayerCard(target, "h", [1, player.hasSkill("xincaishi_1") ? 4 : 3], "请选择要展示的牌", true).ai = function () {
						return Math.random();
					};
					"step 2";
					event.cards2 = result.cards.slice(0);
					target.showCards(event.cards2);
					"step 3";
					var card = event.cards2.shift();
					var bool = false;
					if (event.suits.includes(get.suit(card))) {
						bool = true;
						player.draw();
					}
					if (event.nums.includes(get.number(card))) {
						bool = true;
						target.damage("nocard");
					}
					if (!bool && player.countCards("h")) player.chooseToDiscard("h", true);
					"step 4";
					if (event.cards2.length) event.goto(3);
				},
				ai: {
					result: {
						target: function (player, target) {
							return -target.countCards("h");
						},
					},
				},
			},
			new_qingxian: {
				group: ["qingxian_draw"],
				enable: "phaseUse",
				audio: "qingxian",
				usable: 1,
				position: "he",
				filterTarget: function (card, player, target) {
					return target != player;
				},
				complexCard: true,
				complexSelect: true,
				selectTarget: function () {
					return ui.selected.cards.length;
				},
				filterCard: true,
				selectCard: function () {
					var player = _status.event.player;
					return [1, player.hp];
				},
				check: function (cardx) {
					var player = _status.event.player;
					var number = game.countPlayer(function (target) {
						if (player == target) return false;
						var pe = player.countCards("e", function (card) {
							return card != cardx && ui.selected.cards.includes(card) == false;
						});
						var te = target.countCards("e");
						if (pe > te && target.isDamaged() && get.attitude(player, target) > 2) return true;
						else if (pe == te && get.attitude(player, target) > 2) return true;
						else if (pe < te && get.attitude(player, target) < 0) return true;
						return false;
					});
					if (ui.selected.cards.length < number) return 7 - get.value(cardx);
					else return 0;
				},
				targetprompt: function (target) {
					var pe = _status.event.player.countCards("e", function (card) {
						return ui.selected.cards.includes(card) == false;
					});
					var te = target.countCards("e");
					if (pe > te) return "回复体力";
					else if (pe == te) return "摸一张牌";
					else if (pe < te) return "失去体力";
				},
				line: "thunder",
				content: function () {
					var pe = player.countCards("e");
					var te = target.countCards("e");
					if (pe > te) target.recover();
					else if (pe == te) target.draw();
					else if (pe < te) target.loseHp();
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							var pe = player.countCards("e", function (card) {
								return ui.selected.cards.includes(card) == false;
							});
							var te = target.countCards("e");
							if (pe > te && target.isDamaged()) return 2;
							else if (pe == te) return 1;
							else if (pe < te) return -2.5;
							else return 0;
						},
					},
				},
			},
			new_juexiang: {
				audio: "juexiang",
				trigger: {
					player: "die",
				},
				forced: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "water",
				derivation: ["new_canyun"],
				async content(event, trigger, player) {
					const source = trigger.source;
					if (source && source.isIn()) {
						await source.discard(source.getCards("e"));
						await source.loseHp();
					}
					const targets = await player
						.chooseTarget("【绝响】：是否令一名其他角色获得技能〖残韵〗？", lib.filter.notMe)
						.set("ai", target => {
							var att = get.attitude(get.player(), target);
							if (target.countCards("ej", { suit: "club" })) att = att * 2;
							return 10 + att;
						})
						.set("forceDie", true)
						.forResultTargets();
					if (!targets || !targets.length) return;
					const target = targets[0];
					player.line(target, "thunder");
					await target.addSkills("new_canyun");
					const { result } = await target
						.chooseTarget("是否弃置场上的一张牌，获得技能〖绝响〗？", (card, player, target) => {
							return target.getDiscardableCards(player, "ej").some(i => get.suit(i) == "club");
						})
						.set("ai", target => {
							const player = get.player();
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						});
					if (result.bool) {
						await target.discardPlayerCard(result.targets[0], "ej", true).set("filterButton", button => {
							return get.suit(button.link) == "club";
						});
						await target.addSkills("new_juexiang");
					}
				},
			},
			new_canyun: {
				group: ["qingxian_draw"],
				complexCard: true,
				complexSelect: true,
				marktext: "韵",
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				intro: {
					content: function (storage) {
						var str = "";
						var str2 = "<li>出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色（不能选择已经成为过〖残韵〗目标的角色）。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）";
						if (storage.length > 0) {
							for (var i = 0; i < storage.length; i++) {
								str += "、";
								str += get.translation(storage[i]);
							}
							str = str.slice(1);
							str2 += "<br><li>已对" + str + "发动过〖残韵〗";
						}
						return str2;
					},
				},
				mark: true,
				enable: "phaseUse",
				usable: 1,
				check: function (cardx) {
					var player = _status.event.player;
					var number = game.countPlayer(function (target) {
						if (player == target) return false;
						var pe = player.countCards("e", function (card) {
							return card != cardx && ui.selected.cards.includes(card) == false;
						});
						var te = target.countCards("e");
						if (pe > te && target.isDamaged() && get.attitude(player, target) > 2) return true;
						else if (pe < te && get.attitude(player, target) < 0) return true;
						return false;
					});
					if (ui.selected.cards.length < number) return 6 - get.value(cardx);
					else return 0;
				},
				filter: function (event, player) {
					if (!player.storage.new_canyun) player.storage.new_canyun = [];
					return game.hasPlayer(function (current) {
						return current != player && !player.storage.new_canyun.includes(current);
					});
				},
				filterTarget: function (card, player, target) {
					return target != player && !player.storage.new_canyun.includes(target);
				},
				selectTarget: function () {
					return ui.selected.cards.length;
				},
				filterCard: true,
				selectCard: function () {
					var player = _status.event.player;
					return [1, player.hp];
				},
				targetprompt: function (target) {
					var pe = _status.event.player.countCards("e", function (card) {
						return ui.selected.cards.includes(card) == false;
					});
					var te = target.countCards("e");
					if (pe > te) return "回复体力";
					else if (pe == te) return "摸一张牌";
					else if (pe < te) return "失去体力";
				},
				line: "thunder",
				position: "he",
				content: function () {
					player.storage.new_canyun.push(target);
					var pe = player.countCards("e");
					var te = target.countCards("e");
					if (pe > te) target.recover();
					else if (pe == te) target.draw();
					else if (pe < te) target.loseHp();
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							var pe = player.countCards("e");
							var te = target.countCards("e");
							if (pe > te && target.isDamaged()) return 2;
							else if (pe == te) return 1;
							else if (pe < te) return -2.5;
							else return 0;
						},
					},
				},
			},
			qingxian_draw: {
				trigger: {
					player: ["new_qingxianAfter", "new_canyunAfter"],
				},
				forced: true,
				popup: false,
				silent: false,
				filter: function (event, player) {
					return event.target == event.targets[event.targets.length - 1] && event.targets.length == player.hp;
				},
				content: function () {
					player.draw();
				},
			},
			zhenjun: {
				audio: "jieyue",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards("h") > current.hp;
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("zhenjun"), function (card, player, target) {
							return target.countCards("h") > target.hp;
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target) * (target.countCards("e") + 1);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						var num = target.countCards("h") - target.hp;
						player.line(target, "thunder");
						player.logSkill("zhenjun", target);
						player.discardPlayerCard(num, target, true);
					}
					"step 2";
					if (result.cards && result.cards.length) {
						event.num = 0;
						event.num2 = result.cards.length;
						for (var i = 0; i < result.cards.length; i++) {
							if (get.type(result.cards[i], null, result.cards[i].original == "h" ? target : false) != "equip") {
								event.num++;
							}
						}
						if (event.num > 0) {
							var prompt = "弃置" + get.cnNumber(event.num) + "张牌，或令" + get.translation(event.target) + "摸" + get.cnNumber(event.num2) + "张牌";
							player.chooseToDiscard(event.num, prompt, "he").ai = function (card) {
								return 5 - get.value(card);
							};
						} else event.finish();
					} else event.finish();
					"step 3";
					if (!result.bool) {
						event.target.draw(event.num2);
					}
				},
			},
			rezhenjun: {
				audio: "jieyue",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards("h") > 0;
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("rezhenjun"), (card, player, target) => {
						return target.countCards("he");
					}).ai = function (target) {
						return -get.attitude(_status.event.player, target) * (target.countCards("e") + 1);
					};
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						var num = Math.max(target.countCards("h") - target.hp, 1);
						player.logSkill("rezhenjun", target);
						player.discardPlayerCard(num, target, true);
					}
					"step 2";
					if (result.cards && result.cards.length) {
						event.num = 0;
						for (var i = 0; i < result.cards.length; i++) {
							if (get.type(result.cards[i]) != "equip") {
								event.num++;
							}
						}
						if (event.num > 0) {
							var prompt = "弃置" + get.cnNumber(event.num) + "张牌，或令" + get.translation(event.target) + "摸" + get.cnNumber(event.num) + "张牌";
							player.chooseToDiscard(event.num, prompt, "he").ai = function (card) {
								return 5 - get.value(card);
							};
						} else event.finish();
					} else event.finish();
					"step 3";
					if (!result.bool) {
						event.target.draw(event.num);
					}
				},
			},
			fenli: {
				audio: 2,
				audioname: ["xin_zhuhuan"],
				group: ["fenli_draw", "fenli_use", "fenli_discard"],
				subfrequent: ["discard"],
				subSkill: {
					draw: {
						audio: "fenli",
						audioname: ["xin_zhuhuan"],
						trigger: { player: "phaseDrawBefore" },
						prompt: "是否发动【奋励】跳过摸牌阶段？",
						filter: function (event, player) {
							return player.isMaxHandcard();
						},
						check: function (event, player) {
							if (!player.hasSkill("pingkou") && !player.hasSkill("xinpingkou") || player.getHistory("skipped").length > 0) return false;
							return game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
							});
						},
						content: function () {
							trigger.cancel();
						},
					},
					use: {
						audio: "fenli",
						audioname: ["xin_zhuhuan"],
						trigger: { player: "phaseUseBefore" },
						prompt: "是否发动【奋励】跳过出牌阶段？",
						filter: function (event, player) {
							return player.isMaxHp();
						},
						check: function (event, player) {
							if (!player.hasSkill("pingkou") && !player.hasSkill("xinpingkou")) return false;
							if (!player.needsToDiscard() || (player.countCards("e") && player.isMaxEquip())) return true;
							if (player.getHistory("skipped").length > 0) return false;
							return game.hasPlayer(function (current) {
								return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
							});
						},
						content: function () {
							trigger.cancel();
						},
					},
					discard: {
						audio: "fenli",
						audioname: ["xin_zhuhuan"],
						trigger: { player: "phaseDiscardBefore" },
						prompt: "是否发动【奋励】跳过弃牌阶段？",
						frequent: true,
						filter: function (event, player) {
							return player.isMaxEquip() && player.countCards("e");
						},
						content: function () {
							trigger.cancel();
						},
					},
				},
				ai: {
					combo: "pingkou"
				},
			},
			pingkou: {
				audio: 2,
				trigger: { player: "phaseEnd" },
				direct: true,
				filter: function (event, player) {
					return player.getHistory("skipped").length > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget([1, player.getHistory("skipped").length], get.prompt2("pingkou"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("pingkou", result.targets);
						event.targets = result.targets.slice(0).sortBySeat();
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets && event.targets.length) {
						event.targets.shift().damage();
						event.redo();
					}
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
			xinanguo: {
				audio: "anguo",
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					if (target.isMinHandcard()) {
						target.draw();
						event.h = true;
					}
					"step 1";
					if (target.isMinHp() && target.isDamaged()) {
						target.recover();
						event.hp = true;
					}
					"step 2";
					var equip = get.cardPile(function (card) {
						return get.type(card) == "equip" && target.hasUseTarget(card);
					});
					if (target.isMinEquip() && equip) {
						target.chooseUseTarget(equip, "nothrow", "nopopup", true);
						event.e = true;
					}
					"step 3";
					game.updateRoundNumber();
					if (!event.h && player.isMinHandcard()) {
						player.draw();
					}
					"step 4";
					if (!event.hp && player.isMinHp() && player.isDamaged()) {
						player.recover();
					}
					"step 5";
					if (!event.e && player.isMinEquip()) {
						var equip = get.cardPile(function (card) {
							return get.type(card) == "equip" && player.hasUseTarget(card);
						});
						if (equip) player.chooseUseTarget(equip, "nothrow", "nopopup", true);
					}
					"step 6";
					game.updateRoundNumber();
				},
				ai: {
					threaten: 1.6,
					order: 9,
					result: {
						player: function (player, target) {
							if (get.attitude(player, target) <= 0) {
								if (target.isMinHandcard() || target.isMinEquip() || target.isMinHp()) return -1;
							}
							var num = 0;
							if (player.isMinHandcard() || target.isMinHandcard()) num++;
							if (player.isMinEquip() || target.isMinEquip()) num++;
							if ((player.isMinHp() && player.isDamaged()) || (target.isMinHp() && target.isDamaged())) num += 2.1;
							return num;
						},
					},
				},
			},
			pindi: {
				audio: 2,
				enable: "phaseUse",
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					if (player.storage.pindi_target && player.storage.pindi_target.includes(target)) {
						return false;
					}
					return true;
				},
				filterCard: function (card, player) {
					if (player.storage.pindi_type && player.storage.pindi_type.includes(get.type2(card))) {
						return false;
					}
					return true;
				},
				subSkill: {
					clear: {
						trigger: { player: "phaseAfter" },
						silent: true,
						content: function () {
							delete player.storage.pindi_target;
							delete player.storage.pindi_type;
						},
					},
				},
				//group:'pindi_clear',
				check: function (card) {
					var num = _status.event.player.getStat("skill").pindi || 0;
					return 6 + num - get.value(card);
				},
				position: "he",
				content: function () {
					"step 0";
					if (!player.storage.pindi_target) {
						player.storage.pindi_target = [];
					}
					if (!player.storage.pindi_type) {
						player.storage.pindi_type = [];
					}
					player.storage.pindi_target.push(target);
					player.storage.pindi_type.push(get.type2(cards[0], cards[0].original == "h" ? player : false));
					event.num = player.getStat("skill").pindi;
					var evt = _status.event.getParent("phase");
					if (evt && evt.name == "phase" && !evt.pindi) {
						var next = game.createEvent("rerende_clear");
						_status.event.next.remove(next);
						evt.after.push(next);
						evt.pindi = true;
						next.player = player;
						next.setContent(lib.skill.pindi_clear.content);
					}
					player.syncStorage();
					if (target.countCards("he") == 0) event._result = { index: 0 };
					else {
						player
							.chooseControlList(["令" + get.translation(target) + "摸" + get.cnNumber(event.num) + "张牌", "令" + get.translation(target) + "弃置" + get.cnNumber(event.num) + "张牌"], function () {
								return _status.event.choice;
							})
							.set("choice", get.attitude(player, target) > 0 ? 0 : 1);
					}
					"step 1";
					if (result.index == 0) {
						target.draw(event.num);
					} else {
						target.chooseToDiscard(event.num, "he", true);
					}
					"step 2";
					if (target.isDamaged()) {
						player.link(true);
					}
				},
				ai: {
					order: 8,
					threaten: 1.8,
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							var num = (player.getStat("skill").pindi || 0) + 1;
							if (att <= 0 && target.countCards("he") < num) return 0;
							return get.sgn(att);
						},
					},
				},
			},
			funan: {
				audio: 2,
				trigger: { global: ["respond", "useCard"] },
				filter: function (event, player) {
					if (!event.respondTo) return false;
					if (event.player == player) return false;
					if (player != event.respondTo[0]) return false;
					if (!player.hasSkill("funan_jiexun")) {
						var cards = [];
						if (get.itemtype(event.respondTo[1]) == "card") cards.push(event.respondTo[1]);
						else if (event.respondTo[1].cards) cards.addArray(event.respondTo[1].cards);
						return cards.filterInD("od").length > 0;
					} else return event.cards.filterInD("od").length > 0;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					if (!player.hasSkill("funan_jiexun")) {
						var cards = [];
						if (get.itemtype(trigger.respondTo[1]) == "card") cards.push(trigger.respondTo[1]);
						else if (trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
						cards = cards.filterInD("od");
						trigger.player.gain(cards, "gain2", "log").gaintag.add("funan");
						trigger.player.addTempSkill("funan_use");
					}
					"step 1";
					var cards = trigger.cards.filterInD("od");
					player.gain(cards, "log", "gain2");
				},
				subSkill: {
					jiexun: {
						charlotte: true,
						mark: true,
						marktext: "复",
						intro: {
							content: "你发动“复难”时，无须令其他角色获得你使用的牌",
						},
					},
					use: {
						onremove: function (player) {
							player.removeGaintag("funan");
						},
						charlotte: true,
						mod: {
							cardEnabled2: function (card, player) {
								if (get.itemtype(card) == "card" && card.hasGaintag("funan")) {
									return false;
								}
							},
						},
					},
				},
			},
			jiexun: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				onremove: true,
				direct: true,
				content: function () {
					"step 0";
					var num1 = game.countPlayer(function (current) {
						return current.countCards("ej", { suit: "diamond" });
					});
					var num2 = player.countMark("jiexun");
					event.num1 = num1;
					event.num2 = num2;
					var str = "令目标摸" + get.cnNumber(num1) + "张牌";
					if (num2) {
						str += "，然后弃置" + get.cnNumber(num2) + "张牌；若目标因此法弃置了所有牌，则你失去“诫训”，然后你发动“复难”时，无须令其获得你使用的牌";
					}
					player
						.chooseTarget(get.prompt("jiexun"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							return _status.event.coeff * get.attitude(_status.event.player, target);
						})
						.set("coeff", num1 >= num2 ? 1 : -1)
						.set("prompt2", str);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("jiexun", target);
						if (event.num1) {
							target.draw(event.num1);
						}
						player.addMark("jiexun", 1, false);
					} else {
						event.finish();
					}
					"step 2";
					if (event.num2) {
						event.target.chooseToDiscard(event.num2, true, "he");
					} else {
						event.finish();
					}
					"step 3";
					if (result.bool && result.autochoose && result.cards.length == result.rawcards.length) {
						player.removeSkills("jiexun");
						player.addSkill("funan_jiexun");
					}
				},
			},
			xinjiexun: {
				audio: "jiexun",
				trigger: { player: "phaseJieshuBegin" },
				onremove: true,
				direct: true,
				content: function () {
					"step 0";
					var num1 = game.countPlayer(function (current) {
						return current.countCards("ej", { suit: "diamond" });
					});
					var num2 = player.countMark("xinjiexun");
					event.num1 = num1;
					event.num2 = num2;
					var str = "令目标摸" + get.cnNumber(num1) + "张牌";
					if (num2) {
						str += "，然后弃置" + get.cnNumber(num2) + "张牌";
					}
					player
						.chooseTarget(get.prompt("xinjiexun"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							return _status.event.coeff * get.attitude(_status.event.player, target);
						})
						.set("coeff", num1 >= num2 ? 1 : -1)
						.set("prompt2", str);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("xinjiexun", target);
						if (event.num1) {
							target.draw(event.num1);
						}
						player.addMark("xinjiexun", 1, false);
					} else {
						event.finish();
					}
					"step 2";
					if (event.num2) {
						event.target.chooseToDiscard(event.num2, true, "he");
					} else {
						event.finish();
					}
					"step 3";
					if (result.bool && result.autochoose && result.cards.length == result.rawcards.length) {
						player.removeMark("xinjiexun", player.countMark("xinjiexun"), false);
						player.addSkill("funan_jiexun");
					}
				},
				intro: { content: "已经发动过了#次" },
			},
			zhuandui: {
				audio: 2,
				group: ["zhuandui_respond", "zhuandui_use"],
				subSkill: {
					use: {
						audio: "zhuandui",
						trigger: { player: "useCardToPlayered" },
						check: function (event, player) {
							return get.attitude(player, event.target) < 0;
						},
						filter: function (event, player) {
							return event.card.name == "sha" && player.canCompare(event.target);
						},
						logTarget: "target",
						content: function () {
							"step 0";
							player.chooseToCompare(trigger.target);
							"step 1";
							if (result.bool) {
								trigger.getParent().directHit.add(trigger.target);
							}
						},
					},
					respond: {
						audio: "zhuandui",
						trigger: { target: "useCardToTargeted" },
						check: function (event, player) {
							return get.effect(player, event.card, event.player, player) < 0;
						},
						filter: function (event, player) {
							return event.card.name == "sha" && player.canCompare(event.player);
						},
						logTarget: "player",
						content: function () {
							"step 0";
							player.chooseToCompare(trigger.player);
							"step 1";
							if (result.bool) {
								trigger.getParent().excluded.add(player);
							}
						},
					},
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (player._zhuandui_temp || tag !== "directHit_ai") return false;
						player._zhuandui_temp = true;
						var bool = (function () {
							if (arg.card.name != "sha" || get.attitude(player, arg.target) >= 0 || !arg.target.countCards("h")) return false;
							if (
								arg.target.countCards("h") == 1 &&
								(!arg.target.hasSkillTag(
									"freeShan",
									false,
									{
										player: player,
										card: arg.card,
									},
									true
								) ||
									player.hasSkillTag("unequip", false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}) ||
									player.hasSkillTag("unequip_ai", false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}))
							)
								return true;
							return (
								player.countCards("h", function (card) {
									return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) <= 4 && (get.number(card) >= 11 + arg.target.countCards("h") / 2 || get.suit(card, player) == "heart");
								}) > 0
							);
						})();
						delete player._zhuandui_temp;
						return bool;
					},
					effect: {
						target: function (card, player, target, current) {
							if (card.name == "sha" && current < 0) return 0.7;
						},
					},
				},
			},
			tianbian: {
				audio: 2,
				enable: "chooseCard",
				check: function (event, player) {
					var player = _status.event.player;
					return !player.hasCard(function (card) {
						var val = get.value(card);
						return val < 0 || (val <= 4 && (get.number(card) >= 11 || get.suit(card) == "heart"));
					}, "h")
						? 20
						: 0;
				},
				filter: function (event) {
					return event.type == "compare" && !event.directresult;
				},
				onCompare: function (player) {
					return game.cardsGotoOrdering(get.cards()).cards;
				},
				group: "tianbian_number",
				subSkill: {
					number: {
						trigger: { player: "compare", target: "compare" },
						filter: function (event, player) {
							if (event.player == player) {
								return !event.iwhile && get.suit(event.card1) == "heart"; //&&event.card1.vanishtag.includes('tianbian');
							} else {
								return get.suit(event.card2) == "heart"; //&&event.card2.vanishtag.includes('tianbian');
							}
						},
						silent: true,
						content: function () {
							game.log(player, "拼点牌点数视为", "#yK");
							if (player == trigger.player) {
								trigger.num1 = 13;
							} else {
								trigger.num2 = 13;
							}
						},
					},
				},
			},
			jianzheng: {
				audio: 2,
				trigger: { global: "useCardToPlayer" },
				filter: function (event, player) {
					if (!player.countCards("h")) return false;
					return event.player != player && event.card.name == "sha" && !event.targets.includes(player) && event.player.inRange(player);
				},
				direct: true,
				content: function () {
					"step 0";
					var effect = 0;
					for (var i = 0; i < trigger.targets.length; i++) {
						effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
					}
					if (effect > 0) {
						if (get.color(trigger.card) != "black") {
							effect = 0;
						} else {
							effect = 1;
						}
						if (trigger.targets.length == 1) {
							if (trigger.targets[0].hp == 1) {
								effect++;
							}
							if (effect > 0 && trigger.targets[0].countCards("h") < player.countCards("h")) {
								effect++;
							}
						}
						if (effect > 0) {
							effect += 6;
						}
					}
					player
						.chooseCard("h", get.prompt2("jianzheng", trigger.player))
						.set("ai", function (card) {
							if (_status.event.effect >= 0) {
								var val = get.value(card);
								if (val < 0) return 10 - val;
								return _status.event.effect - val;
							}
							return 0;
						})
						.set("effect", effect)
						.set("logSkill", ["jianzheng", trigger.player]);
					"step 1";
					if (result.bool && result.cards) {
						event.card = result.cards[0];
						trigger.targets.length = 0;
						trigger.getParent().triggeredTargets1.length = 0;
					} else {
						event.finish();
					}
					"step 2";
					if (!event.isMine()) game.delayx();
					"step 3";
					if (event.card) {
						player.logSkill("jianzheng", trigger.player);
						player.lose(event.card, ui.cardPile, "visible", "insert");
						player.$throw(event.card, 1000);
						game.log(player, "将", card, "置于牌堆顶");
					}
					"step 4";
					if (get.color(trigger.card) != "black") {
						trigger.getParent().targets.push(player);
						trigger.player.line(player);
						game.delay();
					}
				},
				ai: {
					threaten: 1.1,
					expose: 0.25,
				},
			},
			qingxian: {
				audio: 2,
				group: ["qingxian_jilie", "qingxian_rouhe", "qingxian_dying"],
				ai: {
					threaten: 0.8,
					maixie: true,
					maixie_hp: true,
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (target.hp > 1 && target.hasFriend()) return 0.4;
							}
						},
					},
				},
				subSkill: {
					dying: {
						audio: "qingxian",
						trigger: { global: "dyingAfter" },
						filter: function (event, player) {
							return player.storage.qingxian && player.storage.qingxian > 0 && !_status.dying.length;
						},
						direct: true,
						content: function () {
							"step 0";
							player.storage.qingxian--;
							player
								.chooseTarget(get.prompt("qingxian"), function (card, player, target) {
									return target != player;
								})
								.set("ai", function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.isHealthy() && att > 0) return 0;
									if (target.hp == 1 && att != 0) {
										if (att > 0) return 9;
										else return 10;
									} else {
										return Math.sqrt(Math.abs(att));
									}
								})
								.set("prompt2", "当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力");
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("qingxian", target);
								event.insert(lib.skill.qingxian.content_choose, {
									target: target,
									player: player,
								});
							}
							"step 2";
							if (lib.skill.qingxian_dying.filter(trigger, player)) event.goto(0);
						},
					},
					rouhe: {
						audio: "qingxian",
						trigger: { player: "recoverEnd" },
						direct: true,
						content: function () {
							"step 0";
							if (_status.dying.length) {
								if (!player.storage.qingxian) player.storage.qingxian = 0;
								player.storage.qingxian++;
								event.finish();
								return;
							}
							player
								.chooseTarget(get.prompt("qingxian"), function (card, player, target) {
									return target != player;
								})
								.set("ai", function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.isHealthy() && att > 0) return 0;
									if (target.hp == 1 && att != 0) {
										if (att > 0) return 9;
										else return 10;
									} else {
										return Math.sqrt(Math.abs(att));
									}
								})
								.set("prompt2", "当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力");
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("qingxian", target);
								event.insert(lib.skill.qingxian.content_choose, {
									target: target,
									player: player,
								});
							}
						},
					},
					jilie: {
						audio: "qingxian",
						trigger: { player: "damageEnd" },
						filter: function (event, player) {
							return event.source && event.source.isIn();
						},
						check: function (event, player) {
							if (get.attitude(player, event.source) > 0 && event.source.isHealthy()) {
								return false;
							}
							return true;
						},
						logTarget: "source",
						prompt2: "当你受到伤害后，你可以令伤害来源执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力",
						content: function () {
							event.insert(lib.skill.qingxian.content_choose, {
								target: trigger.source,
								player: player,
							});
						},
					},
				},
				content_choose: function () {
					"step 0";
					if (target.isHealthy()) {
						event._result = { index: 0 };
					} else {
						var index;
						if (get.attitude(player, target) > 0) {
							index = 1;
						} else {
							index = 0;
						}
						player
							.chooseControlList(["令" + get.translation(target) + "失去1点体力，随机使用一张装备牌", "令" + get.translation(target) + "回复1点体力，弃置一张装备牌"], true, function (event, player) {
								return _status.event.index;
							})
							.set("index", index);
					}
					"step 1";
					if (result.index == 0) {
						target.loseHp();
						event.card = get.cardPile(function (card) {
							return get.type(card) == "equip" && target.canUse(card, target);
						});
						if (event.card) {
							target.chooseUseTarget(event.card, "nothrow", "nopopup", true);
							event.goto(3);
						} else {
							event.finish();
						}
					} else {
						target.recover();
						if (target.countCards("he", { type: "equip" })) {
							target
								.chooseToDiscard("he", true, "弃置一张装备牌", function (card) {
									return get.type(card) == "equip";
								})
								.set("ai", function (card) {
									var val = -get.value(card);
									if (get.suit(card) == "club") {
										val += _status.event.att * 10;
									}
									return val;
								})
								.set("att", get.sgnAttitude(target, player));
						} else {
							event.finish();
						}
					}
					"step 2";
					if (result && result.cards) {
						event.card = result.cards[0];
					}
					"step 3";
					if (event.card && get.suit(event.card) == "club") {
						player.draw();
					}
				},
			},
			juexiang: {
				audio: 2,
				trigger: { player: "die" },
				direct: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "thunder",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("juexiang"), function (card, player, target) {
							return target != player;
						})
						.set("forceDie", true)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target) / Math.sqrt(target.hp + 1);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("juexiang", target);
						target.addSkills(lib.skill.juexiang.derivation.randomGet());
						target.addTempSkill("juexiang_club", { player: "phaseZhunbeiBegin" });
					}
				},
				derivation: ["juexiang_ji", "juexiang_lie", "juexiang_rou", "juexiang_he"],
				subSkill: {
					ji: {
						audio: 1,
						mark: true,
						nopop: true,
						intro: {
							content: "info",
						},
						trigger: { player: "damageEnd" },
						filter: function (event, player) {
							return event.source && event.source.isIn() && event.source != player;
						},
						check: function (event, player) {
							return get.attitude(player, event.source) < 0;
						},
						logTarget: "source",
						content: function () {
							trigger.source.loseHp();
							var card = get.cardPile(function (card) {
								return get.type(card) == "equip" && trigger.source.canUse(card, trigger.source);
							});
							if (card) {
								trigger.source.chooseUseTarget(card, "nothrow", "nopopup", true);
							}
						},
						ai: {
							maixie_defend: true,
						},
					},
					lie: {
						audio: 1,
						mark: true,
						nopop: true,
						intro: {
							content: "info",
						},
						trigger: {
							player: "recoverEnd",
							global: "dyingAfter",
						},
						direct: true,
						content: function () {
							"step 0";
							if (_status.dying.length) {
								if (event.triggername == "recoverEnd") {
									if (!player.storage.juexiang_lie) player.storage.juexiang_lie = 0;
									player.storage.juexiang_lie++;
								}
								event.finish();
								return;
							}
							if (event.triggername == "dyingAfter") {
								if (!player.storage.juexiang_lie) {
									event.finish();
									return;
								}
								player.storage.juexiang_lie--;
							}
							player
								.chooseTarget(get.prompt2("juexiang_lie"), function (card, player, target) {
									return target != player;
								})
								.set("ai", function (target) {
									return -get.attitude(player, target) / (1 + target.hp);
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("juexiang_lie", target);
								target.loseHp();
								var card = get.cardPile(function (card) {
									return get.type(card) == "equip" && target.canUse(card, target);
								});
								if (card) {
									target.chooseUseTarget(card, true, "nothrow", "nopopup", true);
								}
							}
							if (event.triggername == "dyingAfter" && player.storage.juexiang_lie > 0) event.goto(0);
						},
					},
					rou: {
						audio: 1,
						mark: true,
						nopop: true,
						intro: {
							content: "info",
						},
						trigger: { player: "damageEnd" },
						filter: function (event, player) {
							return event.source && event.source.isIn() && event.source != player;
						},
						check: function (event, player) {
							var att = get.attitude(player, event.source);
							if (player.isHealthy()) {
								return att < 0;
							} else {
								return att > 0;
							}
						},
						logTarget: "source",
						content: function () {
							trigger.source.recover();
							if (trigger.source.countCards("he", { type: "equip" })) {
								trigger.source.chooseToDiscard("he", true, "弃置一张装备牌", function (card) {
									return get.type(card) == "equip";
								});
							}
						},
						ai: {
							maixie_defend: true,
						},
					},
					he: {
						audio: 1,
						mark: true,
						nopop: true,
						intro: {
							content: "info",
						},
						trigger: { player: "recoverEnd" },
						direct: true,
						content: function () {
							"step 0";
							player
								.chooseTarget(get.prompt2("juexiang_he"), function (card, player, target) {
									return target != player;
								})
								.set("ai", function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.isHealthy() && target.countCards("he")) {
										return -att;
									} else {
										return (10 * att) / (1 + target.hp);
									}
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("juexiang_he", target);
								target.recover();
								if (target.countCards("he", { type: "equip" })) {
									target.chooseToDiscard("he", true, "弃置一张装备牌", function (card) {
										return get.type(card) == "equip";
									});
								}
							}
						},
					},
					club: {
						mark: true,
						nopop: true,
						intro: {
							content: "info",
						},
						mod: {
							targetEnabled: function (card, player, target) {
								if (get.suit(card) == "club" && player != target) {
									return false;
								}
							},
						},
					},
				},
			},
			bizhuan: {
				audio: 2,
				trigger: {
					player: "useCard",
					target: "useCardToTargeted",
				},
				filter: function (event, player) {
					if (event.name != "useCard" && event.player == event.target) return false;
					if (player.getExpansions("bizhuan").length >= 4) return false;
					return get.suit(event.card) == "spade";
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				frequent: true,
				locked: false,
				content: function () {
					player.addToExpansion(get.cards(), "gain2").gaintag.add("bizhuan");
				},
				mod: {
					maxHandcard: function (player, num) {
						return num + player.getExpansions("bizhuan").length;
					},
				},
				ai: {
					notemp: true
				},
			},
			tongbo: {
				trigger: { player: "phaseDrawAfter" },
				direct: true,
				filter: function (event, player) {
					return player.getExpansions("bizhuan").length > 0 && player.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					var four = false;
					var nofour = !player.hasFriend();
					var expansions = player.getExpansions("bizhuan");
					if (expansions.length == 4) {
						var suits = ["club", "spade", "heart", "diamond"];
						var list = player.getCards("he").concat(expansions);
						for (var i = 0; i < list.length; i++) {
							suits.remove(get.suit(list[i]));
							if (suits.length == 0) {
								four = true;
								break;
							}
						}
					}
					var next = player.chooseToMove("通博：是否交换“书”和手牌？").set("four", four).set("nofour", nofour);
					next.set("list", [
						[get.translation(player) + "（你）的“书”", expansions],
						["你的牌", player.getCards("he")],
					]);
					next.set("filterMove", function (from, to) {
						return typeof to != "number";
					});
					next.set("processAI", function (list) {
						var player = _status.event.player,
							cards = list[0][1].concat(list[1][1]),
							cards2 = [];
						if (_status.event.four) {
							var sorted = [[], [], [], []];
							for (var i of cards) {
								var index = lib.suit.indexOf(get.suit(i, false));
								if (sorted[index]) sorted[index].push(i);
							}
							if (_status.event.nofour) {
								sorted.sort(function (a, b) {
									return a.length - b.length;
								});
								var cards3 = cards.slice(0).sort(function (a, b) {
									return get.useful(a) - get.useful(b);
								});
								cards3.removeArray(sorted[0]);
								cards2 = cards3.slice(0, 4);
								cards.removeArray(cards2);
							} else {
								for (var i of sorted) {
									cards2.push(i.randomGet());
									cards.remove(cards2);
								}
							}
						} else {
							cards.sort(function (a, b) {
								return get.useful(a) - get.useful(b);
							});
							cards2 = cards.splice(0, player.getExpansions("bizhuan").length);
						}
						return [cards2, cards];
					});
					"step 1";
					if (result.bool) {
						var pushs = result.moved[0],
							gains = result.moved[1];
						pushs.removeArray(player.getExpansions("bizhuan"));
						gains.removeArray(player.getCards("he"));
						if (!pushs.length || pushs.length != gains.length) {
							event.finish();
							return;
						}
						player.logSkill("tongbo");
						player.addToExpansion(pushs, "give", player).gaintag.add("bizhuan");
						player.gain(gains, "gain2");
					}
					"step 2";
					var suits2 = ["club", "spade", "heart", "diamond"];
					var expansions = player.getExpansions("bizhuan");
					for (var i = 0; i < expansions.length; i++) {
						suits2.remove(get.suit(expansions[i]));
					}
					if (suits2.length > 0) {
						event.finish();
					}
					"step 3";
					event.cards = player.getExpansions("bizhuan").slice(0);
					if (event.cards.length > 1) {
						player.chooseCardButton("将所有“书”交给任意名其他角色", true, event.cards, [1, event.cards.length]).set("ai", function (button) {
							if (ui.selected.buttons.length == 0) return 1;
							return 0;
						});
					} else if (event.cards.length == 1) {
						event._result = { links: event.cards.slice(0), bool: true };
					} else {
						event.finish();
					}
					"step 4";
					if (result.bool) {
						for (var i = 0; i < result.links.length; i++) {
							event.cards.remove(result.links[i]);
						}
						event.togive = result.links.slice(0);
						player
							.chooseTarget("将" + get.translation(result.links) + "交给一名其他角色", true, function (card, player, target) {
								return target != player;
							})
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
					} else {
						event.finish();
					}
					"step 5";
					if (result.targets.length) {
						result.targets[0].gain(event.togive, "draw").giver = player;
						player.line(result.targets[0], "green");
						game.log(result.targets[0], "获得了" + get.cnNumber(event.togive.length) + "张", "#g“书”");
						if (event.cards.length) event.goto(3);
					}
				},
				ai: {
					combo: "bizhuan",
				},
			},
			shouxi: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				direct: true,
				init: function (player) {
					if (!player.storage.shouxi) player.storage.shouxi = [];
				},
				filter: function (event, player) {
					return event.card.name == "sha" && event.player.isIn();
				},
				content: function () {
					"step 0";
					var list = lib.inpile.filter(function (i) {
						if (player.storage.shouxi.includes(i)) return false;
						var type = get.type2(i);
						if (type == "basic" || type == "trick") return true;
						return false;
					});
					for (var i = 0; i < list.length; i++) {
						list[i] = [get.type(list[i]), "", list[i]];
					}
					player.chooseButton([get.prompt("shouxi", trigger.player), [list, "vcard"]]).set("ai", function (button) {
						return Math.random();
					});
					"step 1";
					if (result.bool) {
						player.logSkill("shouxi");
						var name = result.links[0][2];
						event.vcard = result.links;
						event.cardname = name;
						player.storage.shouxi.add(name);
						player.popup(name);
						game.log(player, "声明了", "#y" + get.translation(name));
					} else {
						event.finish();
					}
					"step 2";
					var name = event.cardname;
					trigger.player
						.chooseToDiscard(function (card) {
							return card.name == _status.event.cardname;
						})
						.set("ai", function (card) {
							if (_status.event.att < 0) {
								return 10 - get.value(card);
							}
							return 0;
						})
						.set("att", get.attitude(trigger.player, player))
						.set("cardname", name)
						.set("dialog", ["守玺：请弃置一张【" + get.translation(name) + "】，否则此【杀】对" + get.translation(player) + "无效", [event.vcard, "vcard"]]);
					"step 3";
					if (result.bool == false) {
						trigger.excluded.push(player);
					} else {
						trigger.player.gainPlayerCard(player);
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (card.name == "sha" && get.attitude(player, target) < 0) {
								return 0.3;
							}
						},
					},
				},
			},
			huimin: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				check: function (event, player) {
					return (
						game.countPlayer(function (current) {
							if (current.countCards("h") < current.hp) {
								return get.sgn(get.attitude(player, current));
							}
						}) >= 0
					);
				},
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards("h") < current.hp;
					});
				},
				content: function () {
					"step 0";
					event.list = game
						.filterPlayer(function (current) {
							return current.countCards("h") < current.hp;
						})
						.sortBySeat();
					player.draw(event.list.length);
					"step 1";
					player
						.chooseTarget(
							true,
							function (card, player, target) {
								var list = _status.event.list;
								return list.includes(target);
							},
							"选择一名角色作为分牌起点"
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (att <= 0) return att;
							var list = _status.event.list;
							var index = list.indexOf(target);
							var prev;
							if (index == 0) {
								prev = list[list.length - 1];
							} else {
								prev = list[index - 1];
							}
							if (get.attitude(player, prev) < 0) return att;
							return 0;
						})
						.set("list", event.list);
					"step 2";
					var index = event.list.indexOf(result.targets[0]);
					if (index < 0) index = 0;
					var tmp = event.list.splice(index);
					event.list = tmp.concat(event.list);
					player.line(result.targets, "green");
					player.chooseCard("h", "选择要分配的手牌", event.list.length, true);
					"step 3";
					var cards = result.cards;
					player.lose(cards, ui.ordering);
					event.togain = cards;
					if (result.bool && cards.length) {
						var dialog = ui.create.dialog("惠民", cards, true);
						_status.dieClose.push(dialog);
						dialog.videoId = lib.status.videoId++;
						event.dialogID = dialog.videoId;
						game.addVideo("cardDialog", null, ["惠民", get.cardsInfo(cards), dialog.videoId]);
						game.broadcast(
							function (cards, id) {
								var dialog = ui.create.dialog("惠民", cards, true);
								_status.dieClose.push(dialog);
								dialog.videoId = id;
							},
							cards,
							dialog.videoId
						);
					} else {
						event.finish();
					}
					"step 4";
					game.delay();
					"step 5";
					if (event.list.length && event.togain.length) {
						event.current = event.list.shift();
						var next = event.current.chooseButton(true, function (button) {
							return get.value(button.link, _status.event.player);
						});
						next.set("dialog", event.dialogID);
						next.set("closeDialog", false);
						next.set("dialogdisplay", true);
						next.set("cardFilter", event.togain.slice(0));
						next.set("filterButton", function (button) {
							return _status.event.cardFilter.includes(button.link);
						});
					} else {
						for (var i = 0; i < ui.dialogs.length; i++) {
							if (ui.dialogs[i].videoId == event.dialogID) {
								var dialog = ui.dialogs[i];
								dialog.close();
								_status.dieClose.remove(dialog);
								break;
							}
						}
						if (event.togain.length) {
							game.cardsDiscard(event.togain);
						}
						game.broadcast(function (id) {
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
								_status.dieClose.remove(dialog);
							}
						}, event.dialogID);
						game.addVideo("cardDialog", null, event.dialogID);
						event.finish();
					}
					"step 6";
					var card = result.links[0],
						target = event.current;
					if (card) {
						target.gain(card, "gain2");
						event.togain.remove(card);
					}
					var capt = get.translation(target) + "选择了" + get.translation(card);
					game.broadcastAll(
						function (card, id, name, capt) {
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.content.firstChild.innerHTML = capt;
								for (var i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == card) {
										dialog.buttons[i].querySelector(".info").innerHTML = name;
										break;
									}
								}
								game.addVideo("dialogCapt", null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
							}
						},
						card,
						event.dialogID,
						(function (target) {
							if (target._tempTranslate) return target._tempTranslate;
							var name = target.name;
							if (lib.translate[name + "_ab"]) return lib.translate[name + "_ab"];
							return get.translation(name);
						})(target),
						capt
					);
					if (event.togain.length) event.goto(5);
					else {
						for (var i = 0; i < ui.dialogs.length; i++) {
							if (ui.dialogs[i].videoId == event.dialogID) {
								var dialog = ui.dialogs[i];
								dialog.close();
								_status.dieClose.remove(dialog);
								break;
							}
						}
						if (event.togain.length) {
							game.cardsDiscard(event.togain);
						}
						game.broadcast(function (id) {
							var dialog = get.idDialog(id);
							if (dialog) {
								dialog.close();
								_status.dieClose.remove(dialog);
							}
						}, event.dialogID);
						game.addVideo("cardDialog", null, event.dialogID);
						event.finish();
					}
				},
			},
			fuzhu: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					return event.player != player && event.player.hasSex("male") && ui.cardPile.childElementCount <= player.hp * 10;
				},
				check: function (event, player) {
					return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: "sha" }, player, player) > 0;
				},
				logTarget: "player",
				skillAnimation: true,
				animationColor: "wood",
				onWash: function () {
					_status.event.getParent("fuzhu").washed = true;
					return "remove";
				},
				content: function () {
					"step 0";
					event.washed = false;
					lib.onwash.push(lib.skill.fuzhu.onWash);
					event.total = game.players.length + game.dead.length;
					"step 1";
					event.total--;
					var card = get.cardPile2(function (card) {
						return card.name == "sha" && player.canUse(card, trigger.player, false);
					});
					if (card) {
						player.useCard(card, trigger.player, false);
					}
					"step 2";
					if (event.total > 0 && !event.washed && ui.cardPile.childElementCount <= player.hp * 10 && trigger.player.isIn()) event.goto(1);
					"step 3";
					lib.onwash.remove(lib.skill.fuzhu.onWash);
					game.washCard();
				},
				ai: {
					threaten: 1.5,
				},
			},
			wengua: {
				global: "wengua2",
				audio: 2,
			},
			wengua2: {
				audio: "wengua",
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasSkill("wengua3")) return false;
					return (
						player.countCards("he") &&
						game.hasPlayer(function (current) {
							return current.hasSkill("wengua");
						})
					);
				},
				log: false,
				delay: false,
				filterCard: true,
				discard: false,
				lose: false,
				position: "he",
				prompt: function () {
					var player = _status.event.player;
					var list = game.filterPlayer(function (current) {
						return current.hasSkill("wengua");
					});
					if (list.length == 1 && list[0] == player) return "将一张牌置于牌堆顶或是牌堆底";
					var str = "将一张牌交给" + get.translation(list);
					if (list.length > 1) str += "中的一人";
					return str;
				},
				check: function (card) {
					if (card.name == "sha") return 5;
					return 8 - get.value(card);
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(function (current) {
						return current.hasSkill("wengua");
					});
					if (targets.length == 1) {
						event.target = targets[0];
						event.goto(2);
					} else if (targets.length > 0) {
						player
							.chooseTarget(true, "选择【问卦】的目标", function (card, player, target) {
								return _status.event.list.includes(target);
							})
							.set("list", targets)
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							});
					} else {
						event.finish();
					}
					"step 1";
					if (result.bool && result.targets.length) {
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2";
					if (event.target) {
						player.logSkill("wengua", event.target);
						player.addTempSkill("wengua3", "phaseUseEnd");
						event.card = cards[0];
						if (event.target != player) {
							player.give(cards, event.target);
						}
					} else {
						event.finish();
					}
					delete _status.noclearcountdown;
					game.stopCountChoose();
					"step 3";
					if (event.target.getCards("he").includes(event.card)) {
						event.target.chooseControlList("问卦", "将" + get.translation(event.card) + "置于牌堆顶", "将" + get.translation(event.card) + "置于牌堆底", event.target == player, function () {
							if (get.attitude(event.target, player) < 0) return 2;
							return 1;
						});
					} else {
						event.finish();
					}
					"step 4";
					event.index = result.index;
					if (event.index == 0 || event.index == 1) {
						var next = event.target.lose(event.card, ui.cardPile);
						if (event.index == 0) next.insert_card = true;
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add("infohidden");
							cardx.classList.add("infoflip");
							player.$throw(cardx, 1000, "nobroadcast");
						}, event.target);
					} else event.finish();
					"step 5";
					game.delay();
					"step 6";
					if (event.index == 1) {
						game.log(event.target, "将得到的牌置于牌堆底");
						if (ui.cardPile.childElementCount == 1 || player == event.target) {
							player.draw();
						} else {
							game.asyncDraw([player, target], null, null);
						}
					} else if (event.index == 0) {
						game.log(player, "将获得的牌置于牌堆顶");
						if (ui.cardPile.childElementCount == 1 || player == event.target) {
							player.draw("bottom");
						} else {
							game.asyncDraw([player, target], null, null, true);
						}
					}
				},
				ai: {
					order: 2,
					threaten: 1.5,
					result: {
						player: function (player, target) {
							var target = game.findPlayer(function (current) {
								return current.hasSkill("wengua");
							});
							if (target) {
								return get.attitude(player, target);
							}
						},
					},
				},
			},
			wengua3: { charlotte: true },
			daiyan: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				init: function () {
					lib.onwash.push(function () {
						delete _status.daiyan_notao;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("daiyan"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (att > 0) {
								if (_status.daiyan_notao) {
									return 0;
								} else {
									if (target == player.storage.daiyan) return 0;
									return (2 * att) / Math.sqrt(1 + target.hp);
								}
							} else {
								if (_status.daiyan_notao) {
									if (target == player.storage.daiyan) return -3 * att;
									return -att;
								} else {
									return 0;
								}
							}
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("daiyan", target);
						var tao = get.cardPile2(function (card) {
							return get.suit(card) == "heart" && get.type(card) == "basic";
						});
						if (tao) {
							target.gain(tao, "gain2");
						} else {
							_status.daiyan_notao = true;
						}
						if (target == player.storage.daiyan) {
							target.loseHp();
						}
						player.storage.daiyan = target;
					} else {
						delete player.storage.daiyan;
					}
				},
				ai: {
					threaten: 1.5,
					expose: 0.2,
				},
			},
			fumian: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					if (player.storage.fumian_choice == "draw") {
						player.chooseControlList(get.prompt("fumian"), "摸牌阶段多摸一张牌", "使用红色牌可以多选择两个目标（限一次）", function (event, player) {
							if (player.hp == 1 || player.countCards("h") <= 1) return 0;
							return 1;
						});
					} else if (player.storage.fumian_choice == "red") {
						player.chooseControlList(get.prompt("fumian"), "摸牌阶段多摸两张牌", "使用红色牌可以多选择一个目标（限一次）", function (event, player) {
							return 0;
						});
					} else {
						player.chooseControlList(get.prompt("fumian"), "摸牌阶段多摸一张牌", "使用红色牌可以多选择一个目标（限一次）", function (event, player) {
							if (player.hp == 1 || player.countCards("h") < player.hp) return 0;
							return 1;
						});
					}
					"step 1";
					if (player.storage.fumian_choice == "draw") {
						if (result.index == 0) {
							player.storage.fumian_draw = 1;
						} else if (result.index == 1) {
							player.storage.fumian_red = 2;
							delete player.storage.fumian_choice;
						}
					} else if (player.storage.fumian_choice == "red") {
						if (result.index == 0) {
							player.storage.fumian_draw = 2;
							delete player.storage.fumian_choice;
						} else if (result.index == 1) {
							player.storage.fumian_red = 1;
						}
					} else {
						if (result.index == 0) {
							player.storage.fumian_draw = 1;
							player.storage.fumian_choice = "draw";
						} else if (result.index == 1) {
							player.storage.fumian_red = 1;
							player.storage.fumian_choice = "red";
						}
					}
					if (result.index == 0) {
						player.logSkill("fumian");
						player.addTempSkill("fumian_draw");
					} else if (result.index == 1) {
						player.logSkill("fumian");
						player.addTempSkill("fumian_red");
					}
				},
				ai: {
					threaten: 1.3,
				},
				subSkill: {
					draw: {
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							return !event.numFixed && typeof player.storage.fumian_draw == "number";
						},
						content: function () {
							trigger.num += player.storage.fumian_draw;
						},
					},
					red2: {},
					red: {
						trigger: { player: "useCard2" },
						direct: true,
						mark: true,
						onremove: true,
						intro: {
							content: "你使用红色牌可以多选择#个目标（限一次）",
						},
						filter: function (event, player) {
							if (get.color(event.card) != "red") return false;
							if (player.hasSkill("fumian_red2")) return false;
							var info = get.info(event.card);
							if (info.allowMultiple == false) return false;
							if (event.targets && !info.multitarget) {
								if (
									game.hasPlayer(function (current) {
										return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
									})
								) {
									return true;
								}
							}
							return false;
						},
						content: function () {
							"step 0";
							var prompt2 = "额外指定";
							if (player.storage.fumian_red == 2) {
								prompt2 += "至多两";
							} else {
								prompt2 += "一";
							}
							prompt2 += "名" + get.translation(trigger.card) + "的目标";
							player
								.chooseTarget([1, player.storage.fumian_red], get.prompt("fumian"), function (card, player, target) {
									var player = _status.event.player;
									if (_status.event.targets.includes(target)) return false;
									return lib.filter.targetEnabled2(_status.event.card, player, target);
								})
								.set("prompt2", prompt2)
								.set("ai", function (target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, player, player);
								})
								.set("targets", trigger.targets)
								.set("card", trigger.card);
							"step 1";
							if (result.bool) {
								if (!event.isMine()) game.delayx();
								event.targets = result.targets;
							} else {
								event.finish();
							}
							"step 2";
							if (event.targets) {
								player.logSkill("fumian", event.targets);
								trigger.targets.addArray(event.targets);
								player.addTempSkill("fumian_red2");
							}
						},
					},
				},
			},
			zhongjian: {
				audio: 2,
				enable: "phaseUse",
				usable: 2,
				filter: function (event, player) {
					if (!player.countCards("h")) return false;
					if (player.getStat("skill").zhongjian && !player.hasSkill("zhongjian2")) return false;
					return game.hasPlayer(function (current) {
						return current != player && Math.min(current.hp, current.countCards("h")) > 0;
					});
				},
				filterCard: true,
				check: function () {
					return Math.random();
				},
				discard: false,
				lose: false,
				delay: false,
				filterTarget: function (card, player, target) {
					return target != player && target.hp > 0 && target.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.showCards(cards);
					"step 1";
					player.choosePlayerCard(target, "h", Math.min(target.countCards("h"), target.hp), true);
					"step 2";
					var hs = result.cards;
					target.showCards(hs);
					var colors = [];
					var numbers = [];
					for (var i = 0; i < cards.length; i++) {
						colors.add(get.color(cards[i]));
						numbers.add(get.number(cards[i]));
					}
					event.bool1 = false;
					event.bool2 = false;
					for (var i = 0; i < hs.length; i++) {
						if (!event.bool1 && colors.includes(get.color(hs[i]))) event.bool1 = true;
						if (!event.bool2 && numbers.includes(get.number(hs[i]))) event.bool2 = true;
					}
					"step 3";
					if (event.bool1) {
						var filterTarget = function (card, player, target) {
							return target != player && target.countDiscardableCards(player, "he") > 0;
						};
						if (
							!game.hasPlayer(function (current) {
								return filterTarget(null, player, current);
							})
						)
							event._result = { bool: false };
						else
							player.chooseTarget(filterTarget, "弃置一名其他角色的一张牌或摸一张牌").set("ai", function (target) {
								var att = get.attitude(player, target);
								if (att >= 0) return 0;
								if (
									target.countCards("he", function (card) {
										return get.value(card) > 5;
									})
								)
									return -att;
								return 0;
							});
					} else {
						event.goto(5);
					}
					"step 4";
					if (!result.bool) player.draw();
					else {
						var target = result.targets[0];
						player.line(target, "green");
						player.discardPlayerCard(target, true, "he");
					}
					"step 5";
					if (event.bool2) {
						player.addTempSkill("zhongjian2");
					}
					if (!event.bool1 && !event.bool2) {
						player.addSkill("caishix");
						if (typeof player.storage.caishix != "number") player.storage.caishix = 0;
						player.storage.caishix--;
						player.markSkill("caishix");
						player.popup("杯具");
					}
				},
				ai: {
					order: 8,
					result: {
						player: function (player, target) {
							return Math.min(target.hp, target.countCards("h"));
						},
					},
				},
			},
			zhongjian2: {},
			caishi: {
				audio: 2,
				trigger: { player: "phaseDrawBegin" },
				direct: true,
				content: function () {
					"step 0";
					if (player.isHealthy()) {
						event.type = 0;
						player.chooseBool(get.prompt("caishi"), "令自己的手牌上限+1", function () {
							return true;
						});
					} else {
						event.type = 1;
						player.chooseControlList(get.prompt("caishi"), "令自己的手牌上限+1", "回复1点体力，然后本回合你的牌不能对自己使用", function () {
							return 1;
						});
					}
					"step 1";
					if (event.type) {
						if (result.control != "cancel2") {
							player.logSkill("caishi");
							if (result.index == 0) {
								player.addSkill("caishix");
								if (typeof player.storage.caishix != "number") player.storage.caishix = 0;
								player.storage.caishix++;
								player.markSkill("caishix");
							} else if (result.index == 1) {
								player.recover();
								player.addTempSkill("caishi3");
							}
						}
					} else {
						if (result.bool) {
							player.logSkill("caishi");
							player.addSkill("caishix");
							if (typeof player.storage.caishix != "number") player.storage.caishix = 0;
							player.storage.caishix++;
							player.markSkill("caishix");
						}
					}
				},
			},
			caishix: {
				intro: {
					content: function (storage) {
						if (storage > 0) return "手牌上限+" + storage;
						if (storage < 0) return "手牌上限" + storage;
						return "手牌上限无变化";
					},
				},
				mod: {
					maxHandcard: function (player, num) {
						if (typeof player.storage.caishix == "number") return num + player.storage.caishix;
					},
				},
				charlotte: true,
				onremove: true,
			},
			caishi2: {
				mod: {
					playerEnabled: function (card, player, target) {
						if (player != target) return false;
					},
				},
			},
			caishi3: {
				mod: {
					playerEnabled: function (card, player, target) {
						if (player == target) return false;
					},
				},
			},
			ttt: {
				mod: {
					targetEnabled: function (card) {
						if (card.name == "tao") return false;
					},
				},
			},
			jyzongshi: {
				audio: 2,
				audioname: ["re_jianyong"],
				trigger: {
					player: ["chooseToCompareAfter", "compareMultipleAfter"],
					target: ["chooseToCompareAfter", "compareMultipleAfter"],
				},
				filter: function (event, player) {
					if (event.preserve) return false;
					if (player == event.player) {
						if (event.num1 > event.num2) {
							return !get.owner(event.card2);
						} else {
							return !get.owner(event.card1);
						}
					} else {
						if (event.num1 < event.num2) {
							return !get.owner(event.card1);
						} else {
							return !get.owner(event.card2);
						}
					}
				},
				check: function (event, player) {
					if (player == event.player) {
						if (event.num1 > event.num2) {
							return event.card2.name != "du";
						} else {
							return event.card1.name != "du";
						}
					} else {
						if (event.num1 < event.num2) {
							return event.card1.name != "du";
						} else {
							return event.card2.name != "du";
						}
					}
				},
				content: function () {
					if (player == trigger.player) {
						if (trigger.num1 > trigger.num2) {
							player.gain(trigger.card2, "gain2", "log");
						} else {
							player.gain(trigger.card1, "gain2", "log");
						}
					} else {
						if (trigger.num1 < trigger.num2) {
							player.gain(trigger.card1, "gain2", "log");
						} else {
							player.gain(trigger.card2, "gain2", "log");
						}
					}
				},
			},
			xinsidi: {
				audio: "sidi",
				trigger: { global: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					if (event.player == player || event.player.isDead()) return false;
					return player.countCards("e") > 0;
				},
				content: function () {
					"step 0";
					var goon = true;
					if (get.attitude(player, trigger.player) >= -0.8) goon = false;
					else if (trigger.player.countCards("h") <= 3) goon = false;
					else if (player.countCards("h", "shan") == 0) goon = false;
					var es = player.getCards("e");
					var color = [];
					for (var i = 0; i < es.length; i++) {
						color.add(get.color(es[i]));
					}
					if (color.length == 2) color = "all";
					else color = color[0];
					player
						.chooseToDiscard(get.prompt2("xinsidi", trigger.player), "he", function (card) {
							if (get.type(card) == "basic") return false;
							if (_status.event.color == "all") return true;
							return get.color(card) == _status.event.color;
						})
						.set("ai", function (card) {
							if (_status.event.goon) return 6 - get.value(card);
							return 0;
						})
						.set("goon", goon)
						.set("color", color)
						.set("logSkill", ["xinsidi", trigger.player]);
					"step 1";
					if (result.bool) {
						trigger.player.addSkill("xinsidi2");
						trigger.player.markAuto("xinsidi2", [get.color(result.cards[0], result.cards[0].original == "h" ? player : false)]);
						trigger.player.storage.xinsidi4 = player;
						trigger.player.syncStorage("xinsidi2");
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			xinsidi2: {
				mark: true,
				group: ["xinsidi2_end"],
				sourceSkill: "xinsidi",
				subSkill: {
					end: {
						trigger: { player: "phaseUseEnd" },
						forced: true,
						popup: false,
						audio: false,
						content: function () {
							"step 0";
							if (
								player.storage.xinsidi4.isIn() &&
								!player.getHistory("useCard", function (evt) {
									return evt.card.name == "sha";
								}).length &&
								player.storage.xinsidi4.canUse({ name: "sha", isCard: true }, player, false)
							) {
								player.storage.xinsidi4.logSkill("xinsidi", player);
								player.storage.xinsidi4.useCard({ name: "sha", isCard: true }, player);
							}
							"step 1";
							delete player.storage.xinsidi2;
							delete player.storage.xinsidi3;
							delete player.storage.xinsidi4;
							player.removeSkill("xinsidi2");
						},
					},
				},
				mod: {
					cardEnabled: function (card, player) {
						if (player.getStorage("xinsidi2").includes(get.color(card))) return false;
					},
					cardRespondable: function (card, player) {
						if (player.getStorage("xinsidi2").includes(get.color(card))) return false;
					},
					cardSavable: function (card, player) {
						if (player.getStorage("xinsidi2").includes(get.color(card))) return false;
					},
				},
				intro: {
					content: "不能使用或打出$的牌",
				},
			},
			taoluan: {
				hiddenCard: function (player, name) {
					return !player.getStorage("taoluan").includes(name) && player.countCards("hes") > 0 && !player.hasSkill("taoluan3") && lib.inpile.includes(name);
				},
				audio: 2,
				enable: "chooseToUse",
				filter: function (event, player) {
					return (
						!player.hasSkill("taoluan3") &&
						player.hasCard(card =>
							lib.inpile.some(name => {
								if (player.getStorage("taoluan").includes(name)) return false;
								if (get.type(name) != "basic" && get.type(name) != "trick") return false;
								if (event.filterCard({ name: name, isCard: true, cards: [card] }, player, event)) return true;
								if (name == "sha") {
									for (var nature of lib.inpile_nature) {
										if (event.filterCard({ name: name, nature: nature, isCard: true, cards: [card] }, player, event)) return true;
									}
								}
								return false;
							}, "hes")
						) > 0
					);
				},
				onremove: true,
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) == "basic" || get.type(name) == "trick") {
								if (player.getStorage("taoluan").includes(name)) continue;
								list.push([get.translation(get.type(name)), "", name]);
								if (name == "sha") {
									for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
								}
							}
						}
						return ui.create.dialog("滔乱", [list, "vcard"]);
					},
					filter: function (button, player) {
						return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], nature: button.link[3] };
						if (player.countCards("hes", cardx => cardx.name == card.name)) return 0;
						return _status.event.getParent().type == "phase" ? player.getUseValue(card) : 1;
					},
					backup: function (links, player) {
						return {
							audio: "taoluan",
							filterCard: true,
							popname: true,
							check: function (card) {
								return 7 - get.value(card);
							},
							position: "hes",
							viewAs: { name: links[0][2], nature: links[0][3] },
							onuse: function (result, player) {
								player.markAuto("taoluan", [result.card.name]);
							},
						};
					},
					prompt: function (links, player) {
						return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					save: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						if (!player.countCards("hes") || player.hasSkill("taoluan3")) return false;
						if (tag == "respondSha" || tag == "respondShan") {
							if (arg == "respond") return false;
							return !player.getStorage("taoluan").includes(tag == "respondSha" ? "sha" : "shan");
						}
						return !player.getStorage("taoluan").includes("tao") || (!player.getStorage("taoluan").includes("jiu") && arg == player);
					},
					order: 4,
					result: {
						player: function (player) {
							var allshown = true,
								players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i].ai.shown == 0) {
									allshown = false;
								}
								if (players[i] != player && players[i].countCards("h") && get.attitude(player, players[i]) > 0) {
									return 1;
								}
							}
							if (allshown) return 1;
							return 0;
						},
					},
					threaten: 1.9,
				},
				group: "taoluan2",
			},
			taoluan2: {
				charlotte: true,
				trigger: { player: "useCardAfter" },
				sourceSkill: "taoluan",
				filter: function (event, player) {
					if (!game.hasPlayer(current => current != player)) return false;
					return event.skill == "taoluan_backup";
				},
				forced: true,
				popup: false,
				content: function () {
					"step 0";
					player
						.chooseTarget(
							true,
							function (card, player, target) {
								return target != player;
							},
							'滔乱<br><br><div class="text center">令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力'
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							if (get.attitude(player, target) > 0) {
								if (get.attitude(target, player) > 0) {
									return target.countCards("he");
								}
								return target.countCards("he") / 2;
							}
							return 0;
						});
					"step 1";
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					var type = get.type(trigger.card, "trick");
					target
						.chooseCard('滔乱<br><br><div class="text center">交给' + get.translation(player) + "一张不为" + get.translation(type) + "牌的牌，或令其失去1点体力且滔乱无效直到回合结束", "he", function (card, player, target) {
							return get.type(card, "trick") != _status.event.cardType;
						})
						.set("cardType", type)
						.set("ai", function (card) {
							if (_status.event.att) {
								return 11 - get.value(card);
							}
							return 0;
						})
						.set("att", get.attitude(target, player) > 0);
					"step 2";
					var target = event.target;
					if (result.bool) {
						target.give(result.cards, player);
					} else {
						player.addTempSkill("taoluan3");
						player.loseHp();
					}
				},
			},
			taoluan3: { charlotte: true },
			taoluan_backup: {},
			jishe: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.getHandcardLimit() > 0;
				},
				usable: 20,
				locked: false,
				content: function () {
					player.draw();
					player.addTempSkill("jishe2");
					player.addMark("jishe2", 1, false);
				},
				ai: {
					order: 10,
					result: {
						player: function (player) {
							if (!player.needsToDiscard(1)) {
								return 1;
							}
							return 0;
						},
					},
				},
				group: ["jishe3"],
			},
			jishe2: {
				mod: {
					maxHandcard: function (player, num) {
						return num - player.countMark("jishe2");
					},
				},
				onremove: true,
				charlotte: true,
				marktext: "奢",
				intro: { content: "手牌上限-#" },
			},
			jishe3: {
				audio: "jishe",
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				sourceSkill: "jishe",
				filter: function (event, player) {
					if (player.countCards("h")) return false;
					return game.hasPlayer(function (current) {
						return !current.isLinked();
					});
				},
				content: function () {
					"step 0";
					var num = game.countPlayer(function (current) {
						return !current.isLinked();
					});
					player
						.chooseTarget(get.prompt("jishe"), "横置至多" + get.cnNumber(Math.min(num, player.hp)) + "名未横置的角色", [1, Math.min(num, player.hp)], function (card, player, target) {
							return !target.isLinked();
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("jishe", result.targets);
						event.targets = result.targets;
						event.num = 0;
					} else {
						event.finish();
					}
					"step 2";
					if (event.num < event.targets.length) {
						event.targets[event.num].link();
						event.num++;
						event.redo();
					}
				},
				ai: {
					expose: 0.3,
				},
			},
			lianhuo: {
				audio: 2,
				trigger: { player: "damageBegin3" },
				forced: true,
				filter: function (event, player) {
					return player.isLinked() && event.notLink() && event.hasNature("fire");
				},
				content: function () {
					trigger.num++;
				},
				ai: {
					neg: true,
				},
			},
			huisheng: {
				audio: 2,
				audioname: ["dc_huanghao"],
				trigger: { player: "damageBegin4" },
				direct: true,
				filter: function (event, player) {
					if (!player.countCards("he")) return false;
					if (!event.source || event.source == player || !event.source.isIn()) return false;
					if (player.storage.huisheng && player.storage.huisheng.includes(event.source)) return false;
					return true;
				},
				init: function (player) {
					if (player.storage.huisheng) player.storage.huisheng = [];
				},
				content: function () {
					"step 0";
					var att = get.attitude(player, trigger.source) > 0;
					var goon = false;
					if (player.hp == 1) {
						goon = true;
					} else {
						var he = player.getCards("he");
						var num = 0;
						for (var i = 0; i < he.length; i++) {
							if (get.value(he[i]) < 8) {
								num++;
								if (num >= 2) {
									goon = true;
									break;
								}
							}
						}
					}
					player
						.chooseCard("he", [1, player.countCards("he")], get.prompt2("huisheng", trigger.source))
						.set("ai", function (card) {
							if (_status.event.att) {
								return 10 - get.value(card);
							}
							if (_status.event.goon) {
								return 8 - get.value(card);
							}
							if (!ui.selected.cards.length) {
								return 7 - get.value(card);
							}
							return 0;
						})
						.set("goon", goon)
						.set("att", att);
					"step 1";
					if (result.bool) {
						player.logSkill("huisheng", trigger.source);
						game.delay();
						event.num = result.cards.length;
						var goon = false;
						if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
							goon = true;
						}
						var forced = false;
						var str = "获得其中一张牌并防止伤害";
						if (trigger.source.countCards("he") < event.num) {
							forced = true;
						} else {
							str += "，或取消并弃置" + get.cnNumber(result.cards.length) + "张牌";
						}
						trigger.source
							.chooseButton([str, result.cards], forced)
							.set("ai", function (button) {
								if (_status.event.goon) {
									return get.value(button.link);
								}
								return get.value(button.link) - 8;
							})
							.set("goon", goon);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						var card = result.links[0];
						trigger.source.gain(card, player, "giveAuto", "bySelf");
						trigger.cancel();
						if (!player.storage.huisheng) player.storage.huisheng = [];
						player.storage.huisheng.push(trigger.source);
					} else {
						trigger.source.chooseToDiscard(event.num, true, "he");
					}
				},
			},
			qinqing: {
				audio: 2,
				mode: ["identity", "versus", "doudizhu"],
				available: function (mode) {
					if (mode == "versus" && _status.mode != "four") return false;
					if (mode == "identity" && _status.mode == "purple") return false;
				},
				getZhu: player => {
					if (get.mode() == "doudizhu") return game.findPlayer(i => i.identity == "zhu");
					return get.zhu(player);
				},
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					var zhu = get.info("qinqing").getZhu(player);
					if (!zhu || (get.mode() != "doudizhu" && !zhu.isZhu)) return false;
					return game.hasPlayer(function (current) {
						return current != zhu && current.inRange(zhu);
					});
				},
				content: function () {
					"step 0";
					event.zhu = get.info("qinqing").getZhu(player);
					player
						.chooseTarget(get.prompt2("qinqing"), [1, Infinity], function (card, player, target) {
							var zhu = get.event("zhu");
							if (target == zhu) return false;
							return target.inRange(zhu);
						})
						.set("ai", function (target) {
							var he = target.countCards("he");
							var zhu = get.event("zhu");
							if (get.attitude(_status.event.player, target) > 0) {
								if (he == 0) return 1;
								if (target.countCards("h") > zhu.countCards("h")) return 1;
							} else {
								if (he > 0) return 1;
							}
							return 0;
						})
						.set("zhu", event.zhu);
					"step 1";
					if (result.bool) {
						event.targets = result.targets.slice(0).sortBySeat();
						event.list = event.targets.slice(0);
						player.logSkill("qinqing", event.targets);
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets.length) {
						var target = event.targets.shift();
						if (target.countCards("he")) {
							player.discardPlayerCard(target, "he", true);
						}
						target.draw();
						event.redo();
					}
					"step 3";
					var num = 0;
					if (event.zhu) {
						var nh = event.zhu.countCards("h");
						for (var i = 0; i < event.list.length; i++) {
							if (event.list[i].countCards("h") > nh) {
								num++;
							}
						}
						if (num) {
							player.draw(num);
						}
					}
				},
				ai: {
					threaten: 1.2,
				},
			},
			guizao: {
				audio: 2,
				trigger: { player: "phaseDiscardEnd" },
				direct: true,
				filter: function (event, player) {
					if (event.cards && event.cards.length > 1) {
						var suits = [];
						for (var i = 0; i < event.cards.length; i++) {
							var suit = get.suit(event.cards[i]);
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
					player.chooseDrawRecover(get.prompt("guizao"), "摸一张牌或回复1点体力").logSkill = "guizao";
				},
			},
			jiyu: {
				audio: 2,
				enable: "phaseUse",
				locked: false,
				filter: function (event, player) {
					if (!player.getStat().skill.jiyu || !player.storage.jiyu2) return true;
					var hs = player.getCards("h");
					for (var i = 0; i < hs.length; i++) {
						if (!player.storage.jiyu2.includes(get.suit(hs[i]))) {
							return true;
						}
					}
					return false;
				},
				filterTarget: function (card, player, target) {
					return target.countCards("h") && (!player.storage.jiyu || !player.storage.jiyu.includes(target));
				},
				content: function () {
					"step 0";
					var evt = _status.event.getParent("phaseUse");
					if (evt && evt.name == "phaseUse" && !evt.jiyu) {
						evt.jiyu = true;
						var next = game.createEvent("jiyu_clear");
						_status.event.next.remove(next);
						evt.after.push(next);
						next.player = player;
						next.setContent(function () {
							game.broadcastAll(function (player) {
								delete player.storage.jiyu;
								delete player.storage.jiyu2;
							}, player);
						});
					}
					if (!player.storage.jiyu) player.storage.jiyu = [];
					player.storage.jiyu.push(target);
					var spade = true;
					if (player.isTurnedOver() || get.attitude(target, player) > 0 || target.hp <= 2) {
						spade = false;
					}
					target
						.chooseToDiscard("h", true)
						.set("ai", function (card) {
							if (get.suit(card) == "spade") {
								if (_status.event.spade) {
									return 10 - get.value(card);
								} else {
									return -10 - get.value(card);
								}
							}
							if (_status.event.getParent().player.storage.jiyu2 && _status.event.getParent().player.storage.jiyu2.includes(get.suit(card))) {
								return -3 - get.value(card);
							}
							return -get.value(card);
						})
						.set("spade", spade);
					"step 1";
					if (!result.cards || !result.cards.length) return;
					var card = result.cards[0];
					if (get.suit(card, target) == "spade") {
						player.turnOver();
						target.loseHp();
					}
					if (!player.storage.jiyu2) player.storage.jiyu2 = [];
					player.storage.jiyu2.add(get.suit(card));
				},
				onremove: ["jiyu", "jiyu2"],
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							if (player.isTurnedOver() || target.countCards("h") <= 3) return -1;
							return 0;
						},
					},
				},
				mod: {
					cardEnabled: function (card, player) {
						if (player.storage.jiyu2 && player.storage.jiyu2.includes(get.suit(card))) return false;
					},
					cardSavable: function (card, player) {
						if (player.storage.jiyu2 && player.storage.jiyu2.includes(get.suit(card))) return false;
					},
				},
			},
			jiyu2: {
				trigger: { player: ["phaseUseBegin", "phaseUseAfter"] },
				silent: true,
				sourceSkill: "jiyu",
				content: function () {
					player.storage.jiyu = [];
					player.storage.jiyu2 = [];
				},
			},
			jiaozhao: {
				mod: {
					targetEnabled: function (card, player, target) {
						if (card.storage && card.storage.jiaozhao && card.storage.jiaozhao == target) return false;
					},
				},
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				check: function (card) {
					return 8 - get.value(card);
				},
				filter: function (event, player) {
					return player.countMark("xindanxin") < 2 && player.countCards("h") > 0;
				},
				filterCard: true,
				discard: false,
				lose: false,
				delay: false,
				locked: false,
				content: function () {
					"step 0";
					player.showCards(cards);
					"step 1";
					if (player.countMark("xindanxin") > 1) {
						event.target = player;
					} else {
						var targets = game.filterPlayer();
						targets.remove(player);
						targets.sort(function (a, b) {
							return Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b));
						});
						var distance = Math.max(1, get.distance(player, targets[0]));
						for (var i = 1; i < targets.length; i++) {
							if (Math.max(1, get.distance(player, targets[i])) > distance) {
								targets.splice(i);
								break;
							}
						}
						player
							.chooseTarget("请选择【矫诏】的目标", true, function (card, player, target) {
								return _status.event.targets.includes(target);
							})
							.set("ai", function (target) {
								return get.attitude(_status.event.player, target);
							})
							.set("targets", targets);
					}
					"step 2";
					if (!event.target) {
						event.target = result.targets[0];
						player.line(result.targets, "green");
					}
					if (!event.target) {
						event.finish();
						return;
					}
					var list = [];
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						if (name == "sha") {
							list.push(["基本", "", "sha"]);
							for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
						} else if (get.type(name) == "basic") list.push(["基本", "", name]);
						else if (player.countMark("xindanxin") > 0 && get.type(name) == "trick") list.push(["锦囊", "", name]);
					}
					event.target
						.chooseButton(["矫诏", [list, "vcard"]], true)
						.set("ai", function (button) {
							var player = _status.event.getParent().player,
								card = {
									name: button.link[2],
									nature: button.link[3],
									storage: {
										jiaozhao: player,
									},
								};
							return player.getUseValue(card, null, true) * _status.event.att;
						})
						.set("att", get.attitude(event.target, player) > 0 ? 1 : -1);
					"step 3";
					var chosen = result.links[0][2];
					var nature = result.links[0][3];
					var fakecard = {
						name: chosen,
						storage: { jiaozhao: player },
					};
					if (nature) fakecard.nature = nature;
					event.target.showCards(
						game.createCard({
							name: chosen,
							nature: nature,
							suit: cards[0].suit,
							number: cards[0].number,
						}),
						get.translation(event.target) + "声明了" + get.translation(chosen)
					);
					player.storage.jiaozhao = cards[0];
					player.storage.jiaozhao_card = fakecard;
					game.broadcastAll(
						function (name, card) {
							lib.skill.jiaozhao2.viewAs = fakecard;
							card.addGaintag("jiaozhao");
						},
						fakecard,
						cards[0]
					);
					player.addTempSkill("jiaozhao2", "phaseUseEnd");
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
				group: "jiaozhao3",
			},
			jiaozhao2: {
				enable: "phaseUse",
				audio: "jiaozhao",
				charlotte: true,
				sourceSkill: "jiaozhao",
				filter: function (event, player) {
					if (!player.storage.jiaozhao || !lib.skill.jiaozhao2.viewAs) return false;
					var name = lib.skill.jiaozhao2.viewAs.name;
					return player.getCards("h").includes(player.storage.jiaozhao) && player.storage.jiaozhao.hasGaintag("jiaozhao") && game.checkMod(player.storage.jiaozhao, player, "unchanged", "cardEnabled2", player) !== false;
				},
				filterCard: function (card, player) {
					return card == player.storage.jiaozhao;
				},
				selectCard: -1,
				popname: true,
				prompt: function () {
					return "选择" + get.translation(lib.skill.jiaozhao2.viewAs) + "的目标";
				},
				check: function (card) {
					return 8 - get.value(card);
				},
				ai: {
					order: 6,
				},
				onremove: function (player) {
					player.removeGaintag("jiaozhao");
					delete player.storage.jiaozhao;
					delete player.storage.jiaozhao_card;
				},
			},
			jiaozhao3: {
				audio: "jiaozhao",
				enable: "phaseUse",
				sourceSkill: "jiaozhao",
				filter: function (event, player) {
					return (player.getStat("skill").jiaozhao || 0) + (player.getStat("skill").jiaozhao3 || 0) < player.countMark("xindanxin") - 1 && player.countCards("h") > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i of lib.inpile) {
							var type = get.type(i, null, false);
							if (type == "basic" || type == "trick") {
								var card = {
									name: i,
									storage: {
										jiaozhao: player,
									},
								};
								if (event.filterCard(card, player, event)) list.push([type, "", i]);
								if (i == "sha") {
									for (var j of lib.inpile_nature) {
										card.nature = j;
										if (event.filterCard(card, player, event)) list.push([type, "", i, j]);
									}
								}
							}
						}
						if (list.length) return ui.create.dialog("矫诏", [list, "vcard"]);
						return ui.create.dialog("矫诏：当前没有可用牌");
					},
					check: function (button) {
						var player = _status.event.player,
							card = {
								name: button.link[2],
								nature: button.link[3],
								storage: {
									jiaozhao: player,
								},
							};
						return player.getUseValue(card);
					},
					backup: function (links, player) {
						return {
							audio: "jiaozhao",
							filterCard: true,
							position: "h",
							popname: true,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								storage: {
									jiaozhao: player,
								},
							},
							check: function (card) {
								return 8 - get.value(card);
							},
						};
					},
					prompt: function (links, player) {
						return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
			},
			jiaozhao3_backup: { audio: "jiaozhao" },
			xindanxin: {
				trigger: { player: "damageEnd" },
				frequent: true,
				audio: "danxin",
				content: function () {
					player.draw();
					if (player.countMark("xindanxin") < 3) {
						player.addMark("xindanxin", 1, false);
						game.log(player, "修改了技能", "#g【矫诏】");
					}
				},
				intro: { content: "【矫诏】加成等级：Lv.#" },
				ai: {
					maixie: true,
					effect: {
						target: (card, player, target) => {
							if (!get.tag(card, "damage")) return;
							if (target.hp + target.hujia < 2 || player.hasSkillTag("jueqing", false, target)) return 1.8;
							if (!target.hasSkill("jiaozhao") || target.countMark("xindanxin") > 1) return [1, 1];
							return [1, 0.8 * target.hp - 0.5];
						},
					},
				},
			},
			danxin: {
				trigger: { player: "damageEnd" },
				frequent: true,
				audio: 2,
				content: function () {
					"step 0";
					if (player.countMark("xindanxin") >= 2) {
						player.draw();
						event.finish();
					} else {
						var list = ["draw_card", "更改描述"];
						var prompt;
						if (player.countMark("xindanxin") == 0) {
							prompt = '摸一张牌或更改矫诏的描述<br><br><div class="text">更改描述：将“选择距离最近的一名其他角色，该角色”改为“你”';
						} else {
							prompt = '摸一张牌或更改矫诏的描述<br><br><div class="text">更改描述：将“基本牌”改为“基本牌或普通锦囊牌”';
						}
						player
							.chooseControl(list, function () {
								if (!_status.event.player.hasSkill("jiaozhao")) return "draw_card";
								return "更改描述";
							})
							.set("prompt", prompt);
					}
					"step 1";
					if (result.control == "draw_card") {
						player.draw();
					} else {
						game.log(player, "更改了", "【矫诏】", "的描述");
						player.popup("更改描述");
						player.addMark("xindanxin", 1, false);
					}
				},
				ai: {
					maixie: true,
					effect: {
						target: (card, player, target) => {
							if (!get.tag(card, "damage")) return;
							if (target.hp < 2 || player.hasSkillTag("jueqing", false, target)) return 1.5;
							return [1, 0.8];
						},
					},
				},
			},
			zongzuo: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				audio: 2,
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					"step 0";
					var num = game.countGroup();
					player.gainMaxHp(num);
					event.num = num;
					"step 1";
					player.recover(event.num);
					//player.update();
				},
				group: "zongzuo_lose",
				subSkill: {
					lose: {
						trigger: { global: "dieAfter" },
						forced: true,
						audio: "zongzuo",
						filter: function (event, player) {
							if (!lib.group.includes(event.player.group)) return false;
							if (
								game.hasPlayer(function (current) {
									return current.group == event.player.group;
								})
							) {
								return false;
							}
							return true;
						},
						content: function () {
							player.loseMaxHp();
						},
					},
				},
			},
			zhige: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filter: function (event, player) {
					return player.countCards("h") > player.hp;
				},
				filterTarget: function (card, player, target) {
					return get.distance(target, player, "attack") <= 1 && target.countCards("e") > 0;
				},
				content: function () {
					"step 0";
					target.chooseToUse({ name: "sha" }, "止戈：使用一张杀，或将其装备区里的一张牌交给" + get.translation(player));
					"step 1";
					if (!result.bool && target.countCards("e")) {
						target.chooseCard("e", true, "将其装备区里的一张牌交给" + get.translation(player));
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						target.give(result.cards, player);
					}
				},
				ai: {
					expose: 0.2,
					order: 5,
					result: {
						target: -1,
						player: function (player, target) {
							if (target.countCards("h") == 0) return 0;
							if (target.countCards("h") == 1) return -0.1;
							if (player.hp <= 2) return -2;
							if (player.countCards("h", "shan") == 0) return -1;
							return -0.5;
						},
					},
				},
			},
			kuangbi: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					target.chooseCard("he", [1, 3], "匡弼：将至多三张牌置于" + get.translation(player) + "的武将牌上", true).set("ai", function (card) {
						if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
							return 7 - get.value(card);
						}
						return -get.value(card);
					});
					"step 1";
					if (result.bool) {
						player.addToExpansion(result.cards, target, "give").gaintag.add("kuangbi");
						if (!player.storage.kuangbi_draw) player.storage.kuangbi_draw = [[], []];
						player.storage.kuangbi_draw[0].push(target);
						player.storage.kuangbi_draw[1].push(result.cards.length);
						player.addSkill("kuangbi_draw");
						player.syncStorage("kuangbi_draw");
						player.updateMarks("kuangbi_draw");
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
					delete player.storage[skill];
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) > 0) {
								return Math.sqrt(target.countCards("he"));
							}
							return 0;
						},
						player: 1,
					},
				},
				subSkill: {
					draw: {
						trigger: { player: "phaseZhunbeiBegin" },
						forced: true,
						mark: true,
						charlotte: true,
						audio: "kuangbi",
						onremove: true,
						filter: function (event, player) {
							return player.getExpansions("kuangbi").length;
						},
						content: function () {
							player.gain(player.getExpansions("kuangbi"), "gain2");
							var storage = player.storage.kuangbi_draw;
							if (storage.length) {
								for (var i = 0; i < storage[0].length; i++) {
									var target = storage[0][i],
										num = storage[1][i];
									if (target && target.isIn()) {
										player.line(target);
										target.draw(num);
									}
								}
							}
							player.removeSkill("kuangbi_draw");
						},
					},
				},
			},
			fulin: {
				trigger: { player: "phaseDiscardBegin" },
				audio: 2,
				forced: true,
				content: function () {
					player.addTempSkill("fulin2", "phaseDiscardAfter");
				},
				group: ["fulin_count", "fulin_reset"],
				subSkill: {
					reset: {
						trigger: { player: ["phaseBefore", "phaseAfter"] },
						silent: true,
						priority: 10,
						content: function () {
							player.removeGaintag("fulin");
						},
					},
					count: {
						trigger: { player: "gainBegin" },
						audio: "fulin",
						forced: true,
						silent: true,
						filter: function (event, player) {
							return _status.currentPhase == player;
						},
						content: function () {
							trigger.gaintag.add("fulin");
						},
					},
				},
				onremove: function (player) {
					player.removeGaintag("fulin");
				},
			},
			fulin2: {
				mod: {
					ignoredHandcard: function (card, player) {
						if (card.hasGaintag("fulin")) {
							return true;
						}
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && card.hasGaintag("fulin")) {
							return false;
						}
					},
				},
			},
			duliang: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target && target.countCards("h") > 0;
				},
				audio: 2,
				content: function () {
					"step 0";
					player.gainPlayerCard(target, "h", true);
					"step 1";
					var name = get.translation(target);
					player
						.chooseControl(function () {
							return Math.random() < 0.5 ? "选项一" : "选项二";
						})
						.set("prompt", "督粮")
						.set("choiceList", ["令" + name + "观看牌堆顶的两张牌，然后获得其中的基本牌", "令" + name + "于下个摸牌阶段额外摸一张牌"]);
					"step 2";
					if (result.control == "选项一") {
						var cards = get.cards(2);
						target.viewCards("督粮", cards);
						event.cards2 = [];
						event.tothrow = [];
						for (var i = 0; i < cards.length; i++) {
							if (get.type(cards[i]) == "basic") {
								ui.special.appendChild(cards[i]);
								event.cards2.push(cards[i]);
							} else {
								event.tothrow.push(cards[i]);
							}
						}
						while (event.tothrow.length) {
							ui.cardPile.insertBefore(event.tothrow.pop(), ui.cardPile.firstChild);
						}
					} else {
						target.addSkill("duliang2");
						target.updateMarks("duliang2");
						target.storage.duliang2++;
						event.finish();
					}
					"step 3";
					if (event.cards2 && event.cards2.length) {
						target.gain(event.cards2, "draw");
						game.log(target, "获得了" + get.cnNumber(event.cards2.length) + "张牌");
					}
					game.updateRoundNumber();
				},
				ai: {
					order: 4,
					result: {
						target: -1,
						player: 0.1,
					},
				},
			},
			duliang2: {
				trigger: { player: "phaseDrawBegin" },
				forced: true,
				mark: true,
				audio: false,
				onremove: true,
				charlotte: true,
				sourceSkill: "duliang",
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				intro: {
					content: "下个摸牌阶段额外摸#张牌",
				},
				content: function () {
					trigger.num += player.storage.duliang2;
					player.removeSkill("duliang2");
				},
			},
			xinfencheng: {
				skillAnimation: "epic",
				animationColor: "gray",
				audio: 2,
				audioname: ["re_liru"],
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.storage.xinfencheng;
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				unique: true,
				limited: true,
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				mark: true,
				line: "fire",
				content: function () {
					"step 0";
					player.storage.xinfencheng = true;
					player.awakenSkill("xinfencheng");
					event.num = 1;
					event.targets = targets.slice(0);
					event.targets.sort(lib.sort.seat);
					"step 1";
					if (event.targets.length) {
						var target = event.targets.shift();
						event.target = target;
						var res = get.damageEffect(target, player, target, "fire");
						target
							.chooseToDiscard("he", "弃置至少" + get.cnNumber(event.num) + "张牌或受到2点火焰伤害", [num, Infinity])
							.set("ai", function (card) {
								if (ui.selected.cards.length >= _status.event.getParent().num) return -1;
								if (_status.event.player.hasSkillTag("nofire")) return -1;
								if (_status.event.res >= 0) return 6 - get.value(card);
								if (get.type(card) != "basic") {
									return 10 - get.value(card);
								}
								return 8 - get.value(card);
							})
							.set("res", res);
					} else {
						event.finish();
					}
					"step 2";
					if (!result.bool) {
						event.target.damage(2, "fire");
						event.num = 1;
					} else {
						event.num = result.cards.length + 1;
					}
					event.goto(1);
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							var num = 0,
								eff = 0,
								players = game
									.filterPlayer(function (current) {
										return current != player;
									})
									.sortBySeat(player);
							for (var target of players) {
								if (get.damageEffect(target, player, target, "fire") >= 0) {
									num = 0;
									continue;
								}
								var shao = false;
								num++;
								if (
									target.countCards("he", function (card) {
										if (get.type(card) != "basic") {
											return get.value(card) < 10;
										}
										return get.value(card) < 8;
									}) < num
								)
									shao = true;
								if (shao) {
									eff -= 4 * (get.realAttitude || get.attitude)(player, target);
									num = 0;
								} else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
							}
							if (eff < 4) return 0;
							return eff;
						},
					},
				},
				init: function (player) {
					player.storage.xinfencheng = false;
				},
				intro: {
					content: "limited",
				},
			},
			xinjuece: {
				audio: "juece",
				audioname: ["dc_liru", "ol_liru"],
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (player) {
						return player.countCards("h") == 0;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("xinjuece"), "对一名没有手牌的角色造成1点伤害", function (card, player, target) {
							return target.countCards("h") == 0;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("xinjuece", result.targets);
						result.targets[0].damage();
					}
				},
			},
			xinmieji: {
				audio: "mieji",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h", { type: ["trick", "delay"], color: "black" });
				},
				filterCard: function (card) {
					return get.color(card) == "black" && get.type(card, "trick") == "trick";
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				discard: false,
				delay: false,
				check: function (card) {
					return 8 - get.value(card);
				},
				loseTo: "cardPile",
				insert: true,
				visible: true,
				content: function () {
					"step 0";
					player.showCards(cards);
					"step 1";
					target.chooseToDiscard("he", true).set("prompt", "请弃置一张锦囊牌，或依次弃置两张非锦囊牌。");
					"step 2";
					if (
						(!result.cards || get.type(result.cards[0], "trick", result.cards[0].original == "h" ? target : false) != "trick") &&
						target.countCards("he", function (card) {
							return get.type(card, "trick") != "trick";
						})
					) {
						target
							.chooseToDiscard("he", true, function (card) {
								return get.type(card, "trick") != "trick";
							})
							.set("prompt", "请弃置第二张非锦囊牌");
					}
				},
				ai: {
					order: 9,
					result: {
						target: -1,
					},
				},
			},
			qianju: {
				mod: {
					globalFrom: function (from, to, distance) {
						return distance - from.getDamagedHp();
					},
				},
			},
			reqianju: {
				mod: {
					globalFrom: function (from, to, distance) {
						return distance - Math.max(1, from.getDamagedHp());
					},
				},
			},
			reqingxi: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.card.name == "sha" || event.card.name == "juedou";
				},
				check: function (event, player) {
					return get.attitude(player, event.target) < 0;
				},
				logTarget: "target",
				content: function () {
					"step 0";
					var num = Math.min(
						game.countPlayer(function (current) {
							return player.inRange(current);
						}),
						player.getEquips(1).length ? 4 : 2
					);
					if (trigger.target.countCards("h") < num) {
						event.directfalse = true;
					} else {
						trigger.target.chooseToDiscard(num, "弃置" + get.cnNumber(num) + "张手牌，或令" + get.translation(trigger.card) + "的伤害+1").set("ai", function (card) {
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
					if (!event.directfalse && result.bool) {
						var e1 = player.getEquips(1);
						if (e1.length) {
							player.discard(e1, "notBySelf");
						}
						event.finish();
					} else {
						var id = trigger.target.playerid;
						var map = trigger.customArgs;
						if (!map[id]) map[id] = {};
						if (!map[id].extraDamage) map[id].extraDamage = 0;
						map[id].extraDamage++;
						player.judge(function (card) {
							if (get.color(card) == "red") return 1;
							return 0;
						}).judge2 = function (result) {
							return result.bool;
						};
					}
					"step 2";
					if (result.color == "red") trigger.directHit.add(trigger.target);
				},
			},
			reqingxi2: {
				mod: {
					cardEnabled: function (card, player) {
						if (
							player.storage.reqingxi2 &&
							player.storage.reqingxi2.filter(function (cd) {
								return get.color(cd) == get.color(card);
							}).length
						)
							return false;
					},
					cardRespondable: function (card, player) {
						if (
							player.storage.reqingxi2 &&
							player.storage.reqingxi2.filter(function (cd) {
								return get.color(cd) == get.color(card);
							}).length
						)
							return false;
					},
				},
				firstDo: true,
				onremove: true,
				trigger: {
					player: ["damage", "damageCancelled", "damageZero"],
					target: ["shaMiss", "useCardToExcluded"],
				},
				charlotte: true,
				sourceSkill: "reqingxi",
				filter: function (event, player) {
					const evt = event.getParent("useCard", true, true);
					if (evt && evt.effectedCount < evt.effectCount) return false;
					return player.storage.reqingxi2 && event.card && player.storage.reqingxi2.includes(event.card);
				},
				silent: true,
				forced: true,
				popup: false,
				priority: 12,
				content: function () {
					player.storage.reqingxi2.remove(trigger.card);
					if (!player.storage.reqingxi2.length) player.removeSkill("reqingxi2");
				},
			},
			qingxi: {
				audio: 2,
				trigger: { source: "damageBegin1" },
				check: function (event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter: function (event, player) {
					return event.getParent().name == "sha" && player.getEquips(1).length > 0;
				},
				content: function () {
					"step 0";
					var num = player.getEquipRange();
					if (trigger.player.countCards("h") < num) {
						event.directfalse = true;
					} else {
						trigger.player.chooseToDiscard(num, "弃置" + get.cnNumber(num) + "张手牌，或令杀的伤害+1").set("ai", function (card) {
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
					if (!event.directfalse && result.bool) {
						var e1 = player.getEquips(1);
						if (e1.length) {
							player.discard(e1, "notBySelf");
						}
					} else {
						trigger.num++;
					}
				},
			},
			jieyue: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterTarget: function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						},
						filterCard: lib.filter.cardDiscardable,
						ai1: function (card) {
							return 7 - get.useful(card);
						},
						ai2: function (target) {
							return 1 - get.attitude(_status.event.player, target);
						},
						prompt: get.prompt2("jieyue"),
					});
					"step 1";
					if (result.bool) {
						player.logSkill("jieyue", result.targets);
						player.discard(result.cards);
						var target = result.targets[0];
						event.target = target;
						target.chooseCard("将一张牌置于" + get.translation(player) + "的武将牌上，或令其弃置你的一张牌", "he").set("ai", function (card) {
							if (card.name == "du") return 20;
							var player = _status.event.player;
							if (get.attitude(player, _status.event.getParent().player) > 0) {
								return 8 - get.value(card);
							}
							var nh = player.countCards("h");
							if (nh <= 2) {
								return 6 - get.value(card);
							}
							if (nh <= 3) {
								return 2 - get.value(card);
							}
							return 0;
						});
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						player.addToExpansion(result.cards, "give", target).gaintag.add("jieyue");
					} else if (event.target.countCards("he")) {
						player.discardPlayerCard(event.target, true);
					}
				},
				ai: { expose: 0.1 },
				marktext: "节",
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: ["jieyue_wuxie", "jieyue_shan", "jieyue_gain"],
				subSkill: {
					wuxie: {
						audio: true,
						enable: "chooseToUse",
						filterCard: function (card) {
							return get.color(card) == "black";
						},
						viewAsFilter: function (player) {
							return player.getExpansions("jieyue").length && player.countCards("hs", { color: "black" }) > 0;
						},
						position: "hs",
						viewAs: { name: "wuxie" },
						prompt: "将一张黑色手牌当无懈可击使用",
						check: function (card) {
							return 8 - get.value(card);
						},
					},
					shan: {
						audio: true,
						enable: ["chooseToRespond", "chooseToUse"],
						filterCard: function (card) {
							return get.color(card) == "red";
						},
						position: "hs",
						viewAs: { name: "shan" },
						viewAsFilter: function (player) {
							return player.getExpansions("jieyue").length && player.countCards("hs", { color: "red" }) > 0;
						},
						prompt: "将一张红色手牌当闪使用或打出",
						check: () => 1,
						ai: {
							respondShan: true,
							skillTagFilter: function (player) {
								if (!player.getExpansions("jieyue").length || !player.countCards("hs", { color: "red" })) return false;
							},
							effect: {
								target: function (card, player, target, current) {
									if (get.tag(card, "respondShan") && current < 0) return 0.8;
								},
							},
						},
					},
					gain: {
						audio: "jieyue",
						trigger: { player: "phaseZhunbeiBegin" },
						filter: function (event, player) {
							return player.getExpansions("jieyue").length;
						},
						forced: true,
						content: function () {
							var cards = player.getExpansions("jieyue");
							if (cards.length) player.gain(cards, "gain2");
						},
					},
				},
			},
			jinjiu: {
				mod: {
					cardname: function (card, player) {
						if (card.name == "jiu") return "sha";
					},
				},
				ai: {
					skillTagFilter: function (player) {
						if (!player.countCards("h", "jiu")) return false;
					},
					respondSha: true,
				},
				audio: 2,
				trigger: { player: ["useCard1", "respond"] },
				firstDo: true,
				forced: true,
				filter: function (event, player) {
					return event.card.name == "sha" && !event.skill && event.cards.length == 1 && event.cards[0].name == "jiu";
				},
				content: function () {},
			},
			xinxianzhen: {
				audio: "xianzhen",
				inherit: "xianzhen",
			},
			xinxianzhen2: {
				audio: "xianzhen",
				audioname2: {
					ol_gaoshun: "rexianzhen",
				},
				mod: {
					targetInRange: function (card, player, target) {
						if (target == player.storage.xinxianzhen) return true;
					},
					cardUsableTarget: function (card, player, target) {
						if (target == player.storage.xinxianzhen) return true;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg.target != player.storage.xinxianzhen) return false;
					},
					effect: {
						player: function (card, player, target, current, isLink) {
							if (isLink || !player.storage.xinxianzhen || player._xinxianzhen_effect_temp) return;
							if (target != player.storage.xinxianzhen && ["sha", "guohe", "shunshou", "huogong", "juedou"].includes(card.name)) {
								player._xinxianzhen_effect_temp = true;
								let eff = get.effect(player.storage.xinxianzhen, card, player, player);
								delete player._xinxianzhen_effect_temp;
								if (eff > 0) {
									return [1, 2];
								}
							}
						},
					},
				},
				trigger: { player: "useCard2" },
				sourceSkill: "xinxianzhen",
				filter: function (event, player) {
					return player.storage.xinxianzhen && player.storage.xinxianzhen.isIn() && (event.card.name == "sha" || get.type(event.card) == "trick") && event.targets && event.targets.length == 1 && !event.targets.includes(player.storage.xinxianzhen);
				},
				check: function (event, player) {
					return get.effect(player.storage.xinxianzhen, event.card, player, player) > 0;
				},
				logTarget: function (event, player) {
					return player.storage.xinxianzhen;
				},
				prompt2: (event, player) => "令" + get.translation(player.storage.decadexianzhen2) + "也成为" + get.translation(event.card) + "的目标",
				content: function () {
					var target = player.storage.xinxianzhen;
					trigger.targets.push(target);
					game.log(target, "成为了", trigger.card, "的额外目标");
				},
			},
			xinxianzhen3: {
				charlotte: true,
				mod: {
					cardEnabled: function (card) {
						if (card.name == "sha") return false;
					},
					ignoredHandcard: function (card, player) {
						if (get.name(card) == "sha") {
							return true;
						}
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && get.name(card) == "sha") {
							return false;
						}
					},
				},
			},
			xianzhen: {
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
					if (result.bool) {
						player.storage[event.name] = target;
						player.addTempSkill(event.name + 2);
					} else {
						player.addTempSkill(event.name + 3);
					}
				},
				ai: {
					order: function (name, player) {
						var cards = player.getCards("h");
						if (player.countCards("h", "sha") == 0) {
							return 1;
						}
						for (var i = 0; i < cards.length; i++) {
							if (cards[i].name != "sha" && get.number(cards[i]) > 11 && get.value(cards[i]) < 7) {
								return 9;
							}
						}
						return get.order({ name: "sha" }) - 1;
					},
					result: {
						player: function (player) {
							if (player.countCards("h", "sha") > 0) return 0;
							var num = player.countCards("h");
							if (num > player.hp) return 0;
							if (num == 1) return -2;
							if (num == 2) return -1;
							return -0.7;
						},
						target: function (player, target) {
							var num = target.countCards("h");
							if (num == 1) return -1;
							if (num == 2) return -0.7;
							return -0.5;
						},
					},
					threaten: 1.3,
				},
			},
			xianzhen2: {
				charlotte: true,
				mod: {
					targetInRange: function (card, player, target) {
						if (target == player.storage.xianzhen) return true;
					},
					cardUsableTarget: function (card, player, target) {
						if (target == player.storage.xianzhen) return true;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg.target != player.storage.xianzhen) return false;
					},
				},
			},
			xianzhen3: {
				charlotte: true,
				mod: {
					cardEnabled: function (card) {
						if (card.name == "sha") return false;
					},
				},
			},
			lihuo: {
				trigger: { player: "useCard1" },
				filter: function (event, player) {
					if (event.card.name == "sha" && !game.hasNature(event.card)) return true;
					return false;
				},
				audio: 2,
				audioname: ["re_chengpu"],
				check: function (event, player) {
					return false;
				},
				content: function () {
					game.setNature(trigger.card, "fire");
					var next = game.createEvent("lihuo_clear");
					next.player = player;
					next.card = trigger.card;
					event.next.remove(next);
					next.forceDie = true;
					trigger.after.push(next);
					next.setContent(function () {
						if (
							player.isIn() &&
							player.getHistory("sourceDamage", function (evt) {
								return evt.getParent(2) == event.parent;
							}).length > 0
						)
							player.loseHp();
						game.setNature(card, [], true);
					});
				},
				group: "lihuo2",
			},
			lihuo2: {
				trigger: { player: "useCard2" },
				sourceSkill: "lihuo",
				filter: function (event, player) {
					if (event.card.name != "sha" || !game.hasNature(event.card, "fire")) return false;
					return game.hasPlayer(function (current) {
						return !event.targets.includes(current) && player.canUse(event.card, current);
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("lihuo"), "为" + get.translation(trigger.card) + "增加一个目标", function (card, player, target) {
							return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
						})
						.set("sourcex", trigger.targets)
						.set("card", trigger.card)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, _status.event.card, player, player);
						});
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !_status.connectMode) game.delayx();
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2";
					player.logSkill("lihuo", event.target);
					trigger.targets.push(event.target);
				},
			},
			lihuo3: {
				trigger: { player: "useCardAfter" },
				vanish: true,
				sourceSkill: "lihuo",
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				forced: true,
				audio: false,
				content: function () {
					player.loseHp();
					player.removeSkill("lihuo3");
				},
			},
			chunlao: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				audio: 2,
				audioname: ["xin_chengpu"],
				filter: function (event, player) {
					return player.countCards("h") > 0 && (_status.connectMode || player.countCards("h", "sha") > 0) && !player.getExpansions("chunlao").length;
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				content: function () {
					"step 0";
					player
						.chooseCard([1, Math.max(1, player.countCards("h", "sha"))], get.prompt("chunlao"), {
							name: "sha",
						})
						.set("ai", function () {
							return 1;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("chunlao");
						player.addToExpansion(result.cards, player, "giveAuto").gaintag.add("chunlao");
					}
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (_status.currentPhase != player) return;
							if (card.name == "sha" && !player.needsToDiscard() && !player.getExpansions("chunlao").length && target.hp > 1) {
								return "zeroplayertarget";
							}
						},
					},
					threaten: 1.4,
				},
				group: "chunlao2",
			},
			chunlao2: {
				enable: "chooseToUse",
				sourceSkill: "chunlao",
				filter: function (event, player) {
					return event.type == "dying" && event.dying && event.dying.hp <= 0 && player.getExpansions("chunlao").length > 0;
				},
				filterTarget: function (card, player, target) {
					return target == _status.event.dying;
				},
				direct: true,
				clearTime: true,
				delay: false,
				selectTarget: -1,
				content: function () {
					"step 0";
					player.chooseCardButton(get.translation("chunlao"), player.getExpansions("chunlao"), true);
					"step 1";
					if (result.bool) {
						player.logSkill("chunlao", target);
						player.loseToDiscardpile(result.links);
						event.type = "dying";
						target.useCard({ name: "jiu", isCard: true }, target);
					}
				},
				ai: {
					order: 6,
					skillTagFilter: function (player) {
						return player.getExpansions("chunlao").length > 0;
					},
					save: true,
					result: {
						target: 3,
					},
					threaten: 1.6,
				},
			},
			chunlao2_old: {
				trigger: { global: "dying" },
				//priority:6,
				filter: function (event, player) {
					return event.player.hp <= 0 && player.storage.chunlao.length > 0;
				},
				direct: true,
				content: function () {
					"step 0";
					var att = get.attitude(player, trigger.player);
					player
						.chooseCardButton(get.prompt("chunlao", trigger.player), player.storage.chunlao)
						.set("ai", function (button) {
							if (_status.event.att > 0) return 1;
							return 0;
						})
						.set("att", att);
					"step 1";
					if (result.bool) {
						player.logSkill("chunlao", trigger.player);
						player.$throw(result.links);
						player.storage.chunlao.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage("chunlao");
						trigger.player.useCard({ name: "jiu", isCard: true }, trigger.player);
						if (!player.storage.chunlao.length) {
							player.unmarkSkill("chunlao");
						} else {
							player.markSkill("chunlao");
						}
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			shenduan: {
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				filter: function (event, player) {
					if (event.type != "discard" || event.getlx === false) return;
					var evt = event.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.color(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false) == "black" && get.type(evt.cards2[i]) == "basic" && get.position(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false) == "d") {
							return true;
						}
					}
					return false;
				},
				audio: 2,
				direct: true,
				content: function () {
					"step 0";
					var cards = [];
					var evt = trigger.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.color(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false) == "black" && get.type(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false) == "basic" && get.position(evt.cards2[i]) == "d") {
							cards.push(evt.cards2[i]);
						}
					}
					if (!cards.length) {
						event.finish();
					} else {
						event.cards = cards;
					}
					"step 1";
					if (event.cards.length) {
						player
							.chooseTarget(get.prompt("shenduan"), "将" + get.translation(event.cards) + (event.cards.length > 1 ? "中的一张牌" : "") + "当做【兵粮寸断】对一名其他角色使用", function (card, player, target) {
								var cs = _status.event.cards;
								for (var i = 0; i < cs.length; i++) {
									if (player.canUse({ name: "bingliang", cards: [cs[i]] }, target, false)) return true;
								}
								return false;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, { name: "bingliang" }, player, player);
							})
							.set("cards", cards);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool && result.targets && result.targets.length) {
						event.current = result.targets[0];
						if (event.cards.length == 1) {
							event.directCard = event.cards[0];
						} else {
							delete event.directCard;
							player
								.chooseCardButton("选择一张牌当作兵断寸断使用", event.cards, true)
								.set("filterButton", function (button) {
									return player.canUse({ name: "bingliang", cards: [button.link] }, _status.event.target, false);
								})
								.set("target", event.current);
						}
					} else {
						event.finish();
					}
					"step 3";
					var card;
					if (event.directCard) {
						card = event.directCard;
					} else if (result.links && result.links.length && event.cards.includes(result.links[0])) {
						card = result.links[0];
					}
					if (card) {
						event.cards.remove(card);
						player.line(event.current);
						player.useCard({ name: "bingliang" }, event.current, [card], "shenduan").animate = false;
						event.goto(1);
					}
				},
			},
			reshenduan: {
				audio: 2,
				trigger: {
					global: "loseAsyncAfter",
					player: "loseAfter",
				},
				filter: function (event, player) {
					if (event.type != "discard" || event.getlx === false) return;
					var evt = event.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.color(evt.cards2[i], player) == "black" && ["basic", "equip"].includes(get.type(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false)) && get.position(evt.cards2[i]) == "d") {
							return true;
						}
					}
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					var cards = [];
					var evt = trigger.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.color(evt.cards2[i], player) == "black" && ["basic", "equip"].includes(get.type(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false)) && get.position(evt.cards2[i]) == "d") {
							cards.push(evt.cards2[i]);
						}
					}
					if (!cards.length) {
						event.finish();
					} else {
						event.cards = cards;
					}
					"step 1";
					if (event.cards.length) {
						player
							.chooseTarget(get.prompt("shenduan"), "将" + get.translation(event.cards) + (event.cards.length > 1 ? "中的一张牌" : "") + "当做【兵粮寸断】对一名其他角色使用", function (card, player, target) {
								var cs = _status.event.cards;
								for (var i = 0; i < cs.length; i++) {
									if (player.canUse({ name: "bingliang", cards: [cs[i]] }, target, false)) return true;
								}
								return false;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, { name: "bingliang" }, player, player);
							})
							.set("cards", cards);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool && result.targets && result.targets.length) {
						event.current = result.targets[0];
						if (event.cards.length == 1) {
							event.directCard = event.cards[0];
						} else {
							delete event.directCard;
							player
								.chooseCardButton("选择一张牌当作兵断寸断使用", event.cards, true)
								.set("filterButton", function (button) {
									return player.canUse({ name: "bingliang", cards: [button.link] }, _status.event.target, false);
								})
								.set("target", event.current);
						}
					} else {
						event.finish();
					}
					"step 3";
					var card;
					if (event.directCard) {
						card = event.directCard;
					} else if (result.links && result.links.length && event.cards.includes(result.links[0])) {
						card = result.links[0];
					}
					if (card) {
						event.cards.remove(card);
						player.line(event.current);
						player.useCard({ name: "bingliang" }, event.current, [card], "reshenduan").animate = false;
						event.goto(1);
					}
				},
			},
			reyonglve: {
				audio: 2,
				trigger: { global: "phaseJudgeBegin" },
				direct: true,
				filter: function (event, player) {
					return event.player != player && event.player.countCards("j") > 0;
				},
				content: function () {
					"step 0";
					var att = get.attitude(player, trigger.player);
					var nh = trigger.player.countCards("h");
					var eff = get.effect(trigger.player, { name: "sha", isCard: true }, player, player);
					if (player.inRange(trigger.player) || !player.canUse({ name: "sha", isCard: true }, trigger.player, false)) eff = 0;
					player
						.discardPlayerCard(get.prompt("yonglve", trigger.player), trigger.player, "j")
						.set("ai", function (button) {
							var name = button.link.viewAs || button.link.name;
							var att = _status.event.att;
							var nh = _status.event.nh;
							var eff = _status.event.eff;
							var trigger = _status.event.getTrigger();
							if (att > 0 && eff >= 0) return 1;
							if (att >= 0 && eff > 0) return 1;
							if (
								att > 0 &&
								(trigger.player.hp >= 3 ||
									trigger.player.hasSkillTag("freeShan", false, {
										player: _status.event.player,
										card: new lib.element.VCard({ name: "sha", isCard: true }),
									}) ||
									trigger.player.countCards("h", "shan"))
							) {
								if (name == "lebu" && nh > trigger.player.hp) return 1;
								if (name == "bingliang" && nh < trigger.player.hp) return 1;
							}
							return 0;
						})
						.set("att", att)
						.set("nh", nh)
						.set("eff", eff)
						.set("logSkill", ["reyonglve", trigger.player]);
					"step 1";
					if (result.bool) {
						if (!player.inRange(trigger.player) && player.canUse({ name: "sha", isCard: true }, trigger.player, false)) {
							player.useCard({ name: "sha", isCard: true }, trigger.player);
						} else player.draw();
					}
				},
			},
			yonglve: {
				trigger: { global: "phaseJudgeBegin" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					return event.player != player && event.player.countCards("j") > 0 && player.inRange(event.player);
				},
				content: function () {
					"step 0";
					var att = get.attitude(player, trigger.player);
					var nh = trigger.player.countCards("h");
					var eff = get.effect(trigger.player, { name: "sha", isCard: true }, player, player);
					if (!player.canUse({ name: "sha", isCard: true }, trigger.player)) eff = 0;
					player
						.discardPlayerCard(get.prompt("yonglve", trigger.player), trigger.player, "j")
						.set("ai", function (button) {
							var name = button.link.viewAs || button.link.name;
							var att = _status.event.att;
							var nh = _status.event.nh;
							var eff = _status.event.eff;
							var trigger = _status.event.getTrigger();
							if (att > 0 && eff >= 0) return 1;
							if (att >= 0 && eff > 0) return 1;
							if (
								att > 0 &&
								(trigger.player.hp >= 3 ||
									trigger.player.hasSkillTag("freeShan", false, {
										player: _status.event.player,
										card: new lib.element.VCard({ name: "sha", isCard: true }),
									}) ||
									trigger.player.countCards("h", "shan"))
							) {
								if (name == "lebu" && nh > trigger.player.hp) return 1;
								if (name == "bingliang" && nh < trigger.player.hp) return 1;
							}
							return 0;
						})
						.set("att", att)
						.set("nh", nh)
						.set("eff", eff)
						.set("logSkill", ["yonglve", trigger.player]);
					"step 1";
					if (result.bool) {
						if (player.canUse({ name: "sha", isCard: true }, trigger.player)) {
							event.related = player.useCard({ name: "sha", isCard: true }, trigger.player);
						}
					} else {
						event.finish();
					}
					"step 2";
					if (
						!event.related ||
						!game.hasPlayer2(function (current) {
							return (
								current.getHistory("damage", function (evt) {
									return evt.getParent(2) == event.related;
								}).length > 0
							);
						})
					) {
						player.draw();
					}
				},
				//group:'yonglve2'
			},
			yonglve2: {
				trigger: { source: "damage" },
				forced: true,
				popup: false,
				sourceSkill: "yonglve",
				filter: function (event) {
					return event.parent.skill == "yonglve";
				},
				content: function () {
					player.storage.yonglve = true;
				},
			},
			benxi: {
				audio: 2,
				trigger: { player: "useCard2" },
				forced: true,
				filter: function (event, player) {
					return player.isPhaseUsing();
				},
				content: function () {},
				mod: {
					globalFrom: function (from, to, distance) {
						if (_status.currentPhase == from) {
							return distance - from.countUsed();
						}
					},
					selectTarget: function (card, player, range) {
						if (_status.currentPhase == player) {
							if (card.name == "sha" && range[1] != -1) {
								if (
									!game.hasPlayer(function (current) {
										return get.distance(player, current) > 1;
									})
								) {
									range[1]++;
								}
							}
						}
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player) {
						if (
							game.hasPlayer(function (current) {
								return get.distance(player, current) > 1;
							})
						) {
							return false;
						}
					},
				},
			},
			sidi: {
				audio: 2,
				trigger: { global: "useCard" },
				filter: function (event, player) {
					if (event.card.name != "shan") return false;
					if (event.player == player) return true;
					return _status.currentPhase == player;
				},
				frequent: true,
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				content: function () {
					player.addToExpansion(get.cards(), "gain2").gaintag.add("sidi");
				},
				group: "sidi2",
			},
			sidi2: {
				trigger: { global: "phaseUseBegin" },
				sourceSkill: "sidi",
				filter: function (event, player) {
					if (event.player == player || event.player.isDead()) return false;
					if (!player.getExpansions("sidi").length) return false;
					return true;
				},
				check: function (event, player) {
					if (get.attitude(player, event.player) >= 0) return false;
					if (event.player.getEquip("zhuge")) return false;
					if (event.player.hasSkill("paoxiao")) return false;
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (event.player.canUse("sha", players[i]) && get.attitude(player, players[i]) > 0) break;
					}
					if (i == players.length) return false;
					var nh = event.player.countCards("h");
					var nsha = event.player.countCards("h", "sha");
					if (nh < 2) return false;
					switch (nh) {
						case 2:
							if (nsha) return Math.random() < 0.4;
							return Math.random() < 0.2;
						case 3:
							if (nsha) return Math.random() < 0.8;
							return Math.random() < 0.3;
						case 4:
							if (nsha > 1) return true;
							if (nsha) return Math.random() < 0.9;
							return Math.random() < 0.5;
						default:
							return true;
					}
				},
				logTarget: "player",
				content: function () {
					"step 0";
					var cards = player.getExpansions("sidi");
					if (cards.length == 1) {
						event.directbutton = cards[0];
					} else {
						player.chooseCardButton("弃置一张“司敌”牌", cards, true);
					}
					"step 1";
					var button;
					if (event.directbutton) {
						button = event.directbutton;
					} else if (result.bool && result.links && result.links.length) {
						button = result.links[0];
					}
					if (button) {
						player.loseToDiscardpile(button);
						trigger.player.addTempSkill("sidi3", "phaseUseAfter");
						trigger.player.addMark("sidi3", 1, false);
					}
				},
			},
			sidi3: {
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return num - player.countMark("sidi3");
					},
				},
				onremove: true,
			},
			zhongyong: {
				audio: 2,
				trigger: { player: "shaMiss" },
				direct: true,
				filter: function (event, player) {
					return event.responded && get.itemtype(event.responded.cards) == "cards";
				},
				content: function () {
					"step 0";
					var cards = trigger.responded.cards;
					event.cards = cards;
					player
						.chooseTarget("忠勇：将" + get.translation(trigger.responded.cards) + "交给一名角色", function (card, player, target) {
							return target != _status.event.source;
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.countCards("h", "shan") && target.countCards("h") >= 2) {
								att /= 1.5;
							}
							return att;
						})
						.set("source", trigger.target);
					"step 1";
					if (result.bool) {
						player.logSkill("zhongyong", result.targets);
						result.targets[0].gain(event.cards, "gain2");
						if (result.targets[0] == player) {
							event.finish();
						}
					} else {
						event.finish();
					}
					"step 2";
					player.chooseToUse("是否对" + get.translation(trigger.target) + "再使用一张杀？", { name: "sha" }, trigger.target, -1).set("addCount", false);
				},
			},
			xinzhongyong: {
				trigger: { player: "useCardAfter" },
				audio: "zhongyong",
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				content: function () {
					"step 0";
					event.sha = trigger.cards.slice(0).filterInD();
					event.shan = [];
					game.countPlayer2(function (current) {
						current.getHistory("useCard", function (evt) {
							if (evt.card.name == "shan" && evt.getParent(3) == trigger) event.shan.addArray(evt.cards);
						});
					});
					event.shan.filterInD("d");
					if (!event.sha.length && !event.shan.length) event.finish();
					player
						.chooseTarget(get.prompt2("xinzhongyong"), function (card, player, target) {
							return !_status.event.source.includes(target) && target != player;
						})
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set("source", trigger.targets);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("xinzhongyong", target);
						if (event.sha.length && event.shan.length) {
							player
								.chooseControl()
								.set("choiceList", ["将" + get.translation(event.sha) + "交给" + get.translation(target), "将" + get.translation(event.shan) + "交给" + get.translation(target)])
								.set("ai", function () {
									return _status.event.choice;
								})
								.set(
									"choice",
									(function () {
										if (get.color(event.sha) != "black") return 0;
										return 1;
									})()
								);
						} else event._result = { index: event.sha.length ? 0 : 1 };
					} else {
						event.finish();
					}
					"step 2";
					var cards = result.index == 0 ? event.sha : event.shan;
					event.useSha = false;
					target.gain(cards, "gain2");
					for (var i = 0; i < cards.length; i++) {
						if (get.color(cards[i]) == "red") {
							event.useSha = true;
							break;
						}
					}
					"step 3";
					if (event.useSha) {
						event.target
							.chooseToUse("是否使用一张杀？", { name: "sha" })
							.set("filterTarget", function (card, player, target) {
								return target != _status.event.sourcex && _status.event.sourcex.inRange(target) && lib.filter.targetEnabled.apply(this, arguments);
							})
							.set("sourcex", player)
							.set("addCount", false);
					}
				},
			},
			dangxian: {
				trigger: { player: "phaseBegin" },
				forced: true,
				audio: 2,
				audioname2: {
					guansuo: "dangxian_guansuo",
				},
				content: function () {
					trigger.phaseList.splice(trigger.num, 0, "phaseUse|dangxian");
				},
			},
			longyin: {
				audio: 2,
				init: player => {
					game.addGlobalSkill("longyin_order");
				},
				onremove: player => {
					if (!game.hasPlayer(current => current.hasSkill("longyin"), true)) game.removeGlobalSkill("longyin_order");
				},
				trigger: { global: "useCard" },
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha" && player.countCards("he") > 0 && event.player.isPhaseUsing();
				},
				content: function () {
					"step 0";
					var go = false;
					if (get.attitude(player, trigger.player) > 0) {
						if (get.color(trigger.card) == "red") {
							go = true;
						} else if (trigger.addCount === false || !trigger.player.isPhaseUsing()) go = false;
						else if (!trigger.player.hasSkill("paoxiao") && !trigger.player.hasSkill("tanlin3") && !trigger.player.hasSkill("zhaxiang2") && !trigger.player.hasSkill("fengnu") && !trigger.player.getEquip("zhuge")) {
							var nh = trigger.player.countCards("h");
							if (player == trigger.player) {
								go = player.countCards("h", "sha") > 0;
							} else if (nh >= 4) {
								go = true;
							} else if (player.countCards("h", "sha")) {
								if (nh == 3) {
									go = Math.random() < 0.8;
								} else if (nh == 2) {
									go = Math.random() < 0.5;
								}
							} else if (nh >= 3) {
								if (nh == 3) {
									go = Math.random() < 0.5;
								} else if (nh == 2) {
									go = Math.random() < 0.2;
								}
							}
						}
					}
					//AI停顿
					if (
						go &&
						!event.isMine() &&
						!event.isOnline() &&
						player.hasCard(function (card) {
							return get.value(card) < 6 && lib.filter.cardDiscardable(card, player, event.name);
						}, "he")
					) {
						game.delayx();
					}
					var next = player.chooseToDiscard(get.prompt("longyin"), "弃置一张牌" + (get.color(trigger.card) == "red" ? "并摸一张牌" : "") + "，令" + get.translation(trigger.player) + "本次使用的【杀】不计入使用次数", "he");
					next.logSkill = ["longyin", trigger.player];
					next.set("ai", function (card) {
						if (_status.event.go) {
							return 6 - get.value(card);
						}
						return 0;
					});
					next.set("go", go);
					"step 1";
					if (result.bool) {
						if (trigger.addCount !== false) {
							trigger.addCount = false;
							trigger.player.getStat().card.sha--;
						}
						if (get.color(trigger.card) == "red") {
							player.draw();
						}
						// player.logSkill('longyin',trigger.player);
					}
				},
				ai: {
					expose: 0.2,
				},
				subSkill: {
					order: {
						mod: {
							aiOrder: (player, card, num) => {
								if (num && card.name === "sha" && get.color(card) === "red") {
									let gp = game.findPlayer(current => {
										return current.hasSkill("longyin") && current.hasCard(i => true, "he");
									});
									if (gp) return num + 0.15 * Math.sign(get.attitude(player, gp));
								}
							},
						},
						trigger: { player: "dieAfter" },
						filter: (event, player) => {
							return !game.hasPlayer(current => current.hasSkill("longyin"), true);
						},
						silent: true,
						forceDie: true,
						charlotte: true,
						content: () => {
							game.removeGlobalSkill("longyin_order");
						},
					},
				},
			},
			jigong: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				check: function (event, player) {
					var nh = player.countCards("h") - player.countCards("h", { type: "equip" });
					if (nh <= 1) return true;
					if (player.countCards("h", "tao")) return false;
					if (nh <= 2) return Math.random() < 0.7;
					if (nh <= 3) return Math.random() < 0.4;
					return false;
				},
				content: function () {
					player.draw(2);
					player.addTempSkill("jigong2");
				},
			},
			jigong2: {
				mod: {
					maxHandcardBase: function (player, num) {
						var damage = player.getStat().damage;
						if (typeof damage == "number") return damage;
						return 0;
					},
				},
			},
			shifei: {
				audio: 2,
				audioname: ["re_guotufengji"],
				enable: ["chooseToRespond", "chooseToUse"],
				filter: function (event, player) {
					if (!_status.currentPhase || event.shifei) return false;
					if (!event.filterCard({ name: "shan", isCard: true }, player, event)) return false;
					if (event.name != "chooseToUse" && !lib.filter.cardRespondable({ name: "shan", isCard: true }, player, event)) return false;
					return true;
				},
				delay: false,
				checkx: function (player) {
					if (get.attitude(player, _status.currentPhase) > 0) return true;
					var nh = _status.currentPhase.countCards("h") + 1;
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (players[i].countCards("h") >= nh) {
							if (!player.countCards("h", "shan") || get.attitude(player, players[i]) <= 0) return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					player.line(_status.currentPhase, "green");
					_status.currentPhase.draw();
					"step 1";
					if (_status.currentPhase.isMaxHandcard(true)) {
						event.finish();
						var evt = event.getParent(2);
						evt.set("shifei", true);
						evt.goto(0);
						return;
					}
					var targets = game.filterPlayer(function (current) {
						return current.isMaxHandcard();
					});
					if (targets.length == 1) {
						event.onlytarget = targets[0];
					} else if (targets.length) {
						player
							.chooseTarget("选择一名角色弃置其一张牌", true, function (card, player, target) {
								return _status.event.targets.includes(target);
							})
							.set("ai", function (target) {
								return -get.attitude(_status.event.player, target);
							})
							.set("targets", targets);
					} else {
						event.finish();
					}
					"step 2";
					var evt = event.getParent(2);
					var target;
					if (event.onlytarget) {
						target = event.onlytarget;
					} else if (result.targets && result.targets.length) {
						target = result.targets[0];
					}
					if (target) {
						player.line(target, "green");
						player.discardPlayerCard(target, "he", true);
						evt.result = { bool: true, card: { name: "shan", isCard: true }, cards: [] };
						evt.redo();
					} else {
						evt.set("shifei", true);
						evt.goto(0);
					}
				},
				ai: {
					respondShan: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "respondShan") && current < 0) {
								var nh = player.countCards("h");
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i].countCards("h") > nh) return 0.4;
								}
							}
						},
					},
					order: 8,
					result: {
						player: function (player) {
							return lib.skill.shifei.checkx(player) ? 1 : 0;
						},
					},
				},
			},
			huaiyi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				delay: false,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.showHandcards();
					const hs = player.getCards("h"), color = get.color(hs[0], player);
					if (hs.length === 1 || !hs.some((card,index) => {
						return index > 0 && get.color(card) !== color;
					})) {
						event.finish();
					}
					"step 1";
					const list = [], bannedList = [], indexs = Object.keys(lib.color);
					player.getCards("h").forEach(card => {
						const color = get.color(card, player);
						list.add(color);
						if (!lib.filter.cardDiscardable(card, player, "huaiyi")) bannedList.add(color);
					});
					list.removeArray(bannedList);
					list.sort((a, b) => indexs.indexOf(a) - indexs.indexOf(b));
					if (!list.length) event.finish();
					else if(list.length === 1) event._result = {control: list[0]};
					else player.chooseControl(list.map(i => `${i}2`)).set("ai", function () {
						var player = _status.event.player;
						if (player.countCards("h", { color: "red" }) == 1 && player.countCards("h", { color: "black" }) > 1) return 1;
						return 0;
					}).set("prompt", "请选择弃置一种颜色的所有手牌");
					"step 2";
					event.control = result.control.slice(0, result.control.length - 1);
					var cards = player.getCards("h", {color: event.control});
					player.discard(cards);
					event.num = cards.length;
					"step 3";
					player
						.chooseTarget("请选择至多" + get.cnNumber(event.num) + "名有牌的其他角色，获得这些角色的各一张牌。", [1, event.num], function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target) + 0.5;
						});
					"step 4";
					if (result.bool && result.targets) {
						player.line(result.targets, "green");
						event.targets = result.targets;
						event.targets.sort(lib.sort.seat);
						event.gained = 0;
					} else {
						event.finish();
					}
					"step 5";
					if (player.isIn() && event.targets.length) {
						player.gainPlayerCard(event.targets.shift(), "he", true);
					} else event.finish();
					"step 6";
					if (result.bool) {
						event.gained += result.cards.length;
					}
					if (event.targets.length) event.goto(5);
					"step 7";
					if (event.gained > 1) player.loseHp();
				},
				ai: {
					order: function (item, player) {
						if (player.countCards("h", { color: "red" }) == 1) return 10;
						if (player.countCards("h", { color: "black" }) == 1) return 10;
						return 1;
					},
					result: {
						player:(player) => {
							if (get.color(player.getCards("h")) != "none") return 0;
							return 1;
						},
					},
				},
			},
			yaoming: {
				audio: 2,
				trigger: { player: "damageEnd", source: "damageSource" },
				direct: true,
				filter: function (event, player) {
					if (player.hasSkill("yaoming2")) return false;
					var nh = player.countCards("h");
					return game.hasPlayer(function (current) {
						return current.countCards("h") != nh;
					});
				},
				content: function () {
					"step 0";
					var nh = player.countCards("h");
					player
						.chooseTarget(get.prompt2("yaoming"), function (card, player, target) {
							return _status.event.nh != target.countCards("h");
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.countCards("h") > _status.event.nh) return -att;
							return att;
						})
						.set("nh", nh);
					"step 1";
					if (result.bool) {
						player.logSkill("yaoming", result.targets);
						player.addTempSkill("yaoming2");
						var target = result.targets[0];
						if (target.countCards("h") < player.countCards("h")) {
							target.draw();
						} else {
							target.discard(target.getCards("h").randomGet());
						}
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			yaoming2: {},
			anguo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target && target.countCards("e") > 0;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(target, "e", true);
					"step 1";
					if (result.links) {
						var num = 0,
							players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (target.inRange(players[i])) {
								num++;
							}
						}
						event.num = num;
						target.gain(result.links, "gain2");
					} else {
						event.finish();
					}
					"step 2";
					var num2 = 0,
						players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (target.inRange(players[i])) {
							num2++;
						}
					}
					if (event.num > num2) {
						player.draw();
					}
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag("noe")) return 1;
							if (target.getEquip(1) || target.getEquip(4)) return -1;
							if (target.getEquip(2)) return -0.7;
							return -0.5;
						},
					},
				},
			},
			reyanzhu: {
				enable: "phaseUse",
				audio: 2,
				usable: 1,
				filterTarget: lib.filter.notMe,
				derivation: ["reyanzhu_rewrite", "rexingxue_rewrite"],
				prompt: function () {
					return lib.translate[(_status.event.player.storage.reyanzhu ? "reyanzhu_rewrite" : "reyanzhu") + "_info"];
				},
				content: function () {
					"step 0";
					if (player.storage.reyanzhu || !target.countCards("e")) event._result = { index: 1 };
					else
						target
							.chooseControl()
							.set("prompt", get.translation(player) + "发动了【宴诛】，请选择一项")
							.set("choiceList", ["将装备区内的所有牌交给" + get.translation(player) + "并令其修改技能", "弃置一张牌，并令下次受到的伤害+1直到下回合开始"])
							.set("ai", function () {
								if (_status.event.player.countCards("e") >= 3) return 1;
								return 0;
							});
					"step 1";
					if (result.index == 0) {
						target.give(target.getCards("e"), player);
						player.storage.reyanzhu = true;
					} else {
						target.addTempSkill("reyanzhu2", { player: "phaseBegin" });
						target.addMark("reyanzhu2", 1, false);
						if (!player.storage.reyanzhu && target.countCards("he") > 0) target.chooseToDiscard("he", true);
					}
				},
				ai: {
					order: 6,
					result: {
						target: function (player, target) {
							if (player.storage.reyanzhu) return -1;
							var ne = target.countCards("e");
							if (!ne) return -2;
							if (ne >= 2) return -ne;
							return 0;
						},
					},
				},
			},
			reyanzhu2: {
				trigger: { player: "damageBegin3" },
				forced: true,
				onremove: true,
				sourceSkill: "reyanzhu",
				content: function () {
					trigger.num += player.countMark("reyanzhu2");
					game.log(player, "受到的伤害+" + player.countMark("reyanzhu2"));
					player.removeSkill("reyanzhu2");
				},
				intro: {
					content: "下次受到的伤害+#直到下回合开始",
				},
			},
			rexingxue: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					return (player.storage.reyanzhu ? player.maxHp : player.hp) > 0;
				},
				content: function () {
					"step 0";
					player.chooseTarget([1, player.storage.reyanzhu ? player.maxHp : player.hp], get.prompt("rexingxue"), "令所有目标角色依次摸一张牌，然后所有手牌数大于体力值的目标角色依次将一张牌置于牌堆顶").set("ai", function (target) {
						var att = get.attitude(player, target);
						if (target.countCards("h") == target.hp - 1) att *= 2;
						return att;
					});
					"step 1";
					if (result.bool) {
						event.targets = result.targets.sortBySeat();
						player.logSkill("rexingxue", event.targets);
						game.asyncDraw(result.targets);
					} else event.finish();
					"step 2";
					game.delay();
					"step 3";
					if (event.targets.length) {
						event.target = event.targets.shift();
						if (event.target.isDead()) event.redo();
					} else event.finish();
					"step 4";
					if (target.isIn() && target.countCards("h") && target.countCards("h") > target.hp) target.chooseCard("he", true, "将一张牌置于牌堆顶");
					else event.goto(3);
					"step 5";
					if (result && result.cards) {
						event.card = result.cards[0];
						target.lose(result.cards, ui.cardPile, "insert");
						game.log(target, "将", get.position(event.card) == "h" ? "一张牌" : event.card, "置于牌堆顶");
						game.broadcastAll(function (player) {
							var cardx = ui.create.card();
							cardx.classList.add("infohidden");
							cardx.classList.add("infoflip");
							player.$throw(cardx, 1000, "nobroadcast");
						}, target);
					}
					event.goto(3);
				},
			},
			rezhaofu: {
				unique: true,
				locked: true,
				global: "rezhaofu2",
				zhuSkill: true,
			},
			rezhaofu2: {
				mod: {
					inRangeOf: function (from, to) {
						if (from.group != "wu") return;
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (from != players[i] && to != players[i] && players[i].hasZhuSkill("rezhaofu", from)) {
								if (players[i].inRange(to)) return true;
							}
						}
					},
				},
			},
			zhaofu: {
				unique: true,
				global: "zhaofu2",
				zhuSkill: true,
				locked: true,
			},
			zhaofu2: {
				mod: {
					inRangeOf: function (from, to) {
						if (from.group != "wu") return;
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (from != players[i] && to != players[i] && players[i].hasZhuSkill("zhaofu", from)) {
								if (get.distance(players[i], to) <= 1) return true;
							}
						}
					},
				},
			},
			xingxue: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				async content(event, trigger, player) {
					var num = player.hp;
					if (!player.hasSkill("yanzhu")) {
						num = player.maxHp;
					}
					const {
						result: { targets, bool },
					} = await player.chooseTarget([1, num], get.prompt2("xingxue")).set("ai", function (target) {
						var att = get.attitude(_status.event.player, target);
						if (target.countCards("he")) return att;
						return att / 10;
					});
					if (bool) {
						player.logSkill("xingxue", targets);
						const chooseToPutCard = async function (target) {
							await target.draw();
							if (target.countCards("he")) {
								const {
									result: { cards, bool },
								} = await target.chooseCard("选择一张牌置于牌堆顶", "he", true);
								if (bool) {
									await target.lose(cards, ui.cardPile, "insert");
								}
								game.broadcastAll(function (player) {
									var cardx = ui.create.card();
									cardx.classList.add("infohidden");
									cardx.classList.add("infoflip");
									player.$throw(cardx, 1000, "nobroadcast");
								}, target);
								if (player == game.me) {
									await game.asyncDelay(0.5);
								}
							}
						};
						await game.doAsyncInOrder(targets, chooseToPutCard);
					}
				},
			},
			yanzhu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.countCards("he") > 0 && target != player;
				},
				content: function () {
					"step 0";
					if (target.countCards("e")) {
						target.chooseBool("是否将装备区内的所有牌交给" + get.translation(player) + "？").set("ai", function () {
							if (_status.event.player.countCards("e") >= 3) return false;
							return true;
						});
					} else {
						target.chooseToDiscard(true, "he");
						event.finish();
					}
					"step 1";
					if (result.bool) {
						var es = target.getCards("e");
						target.give(es, player, "give");
						player.removeSkills("yanzhu");
					} else {
						target.chooseToDiscard(true, "he");
					}
				},
				ai: {
					order: 6,
					result: {
						target: function (player, target) {
							var ne = target.countCards("e");
							if (!ne) return -2;
							if (ne >= 2) return -ne;
							return 0;
						},
					},
				},
			},
			shizhi: {
				mod: {
					cardname: function (card, player, name) {
						if (card.name == "shan" && player.hp == 1) return "sha";
					},
				},
				ai: {
					skillTagFilter: function (player) {
						if (!player.countCards("h", "shan")) return false;
						if (player.hp != 1) return false;
					},
					respondSha: true,
					neg: true,
				},
				audio: 2,
				audioname: ["xin_zhangyi"],
				trigger: { player: ["useCard1", "respond"] },
				firstDo: true,
				forced: true,
				filter: function (event, player) {
					return event.card.name == "sha" && !event.skill && event.cards.length == 1 && event.cards[0].name == "shan";
				},
				content: function () {},
			},
			wurong: {
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget: function (card, player, target) {
					return target.countCards("h") > 0 && target != player;
				},
				content: function () {
					"step 0";
					if (target.countCards("h") == 0 || player.countCards("h") == 0) {
						event.finish();
						return;
					}
					"step 1";
					var sendback = function () {
						if (_status.event != event) {
							return function () {
								event.resultOL = _status.event.resultOL;
							};
						}
					};
					if (player.isOnline()) {
						player.wait(sendback);
						event.ol = true;
						player.send(function () {
							game.me.chooseCard(true).set("glow_result", true).ai = function () {
								return Math.random();
							};
							game.resume();
						});
					} else {
						event.localPlayer = true;
						player.chooseCard(true).set("glow_result", true).ai = function () {
							return Math.random();
						};
					}
					if (target.isOnline()) {
						target.wait(sendback);
						event.ol = true;
						target.send(function () {
							var rand = Math.random() < 0.4;
							game.me.chooseCard(true).set("glow_result", true).ai = function (card) {
								if (rand) return card.name == "shan" ? 1 : 0;
								return card.name == "shan" ? 0 : 1;
							};
							game.resume();
						});
					} else {
						event.localTarget = true;
					}
					"step 2";
					if (event.localPlayer) {
						event.card1 = result.cards[0];
					}
					if (event.localTarget) {
						var rand = Math.random() < 0.4;
						target.chooseCard(true).set("glow_result", true).ai = function (card) {
							if (rand) return card.name == "shan" ? 1 : 0;
							return card.name == "shan" ? 0 : 1;
						};
					}
					"step 3";
					if (event.localTarget) {
						event.card2 = result.cards[0];
					}
					if (!event.resultOL && event.ol) {
						game.pause();
					}
					"step 4";
					try {
						if (!event.card1) event.card1 = event.resultOL[player.playerid].cards[0];
						if (!event.card2) event.card2 = event.resultOL[target.playerid].cards[0];
						if (!event.card1 || !event.card2) {
							throw "err";
						}
					} catch (e) {
						console.log(e);
						event.finish();
						return;
					}
					game.broadcastAll(
						function (card1, card2) {
							card1.classList.remove("glow");
							card2.classList.remove("glow");
						},
						event.card1,
						event.card2
					);
					"step 5";
					game.broadcastAll(function () {
						ui.arena.classList.add("thrownhighlight");
					});
					game.addVideo("thrownhighlight1");
					player.$compare(event.card1, target, event.card2);
					game.delay(4);
					"step 6";
					var next = game.createEvent("showCards");
					next.player = player;
					next.cards = [event.card1];
					next.setContent("emptyEvent");
					game.log(player, "展示了", event.card1);
					"step 7";
					var next = game.createEvent("showCards");
					next.player = target;
					next.cards = [event.card2];
					next.setContent("emptyEvent");
					game.log(target, "展示了", event.card2);
					"step 8";
					var name1 = get.name(event.card1);
					var name2 = get.name(event.card2);
					if (name1 == "sha" && name2 != "shan") {
						player.discard(event.card1).set("animate", false);
						target.$gain2(event.card2);
						var clone = event.card1.clone;
						if (clone) {
							clone.style.transition = "all 0.5s";
							clone.style.transform = "scale(1.2)";
							clone.delete();
							game.addVideo("deletenode", player, get.cardsInfo([clone]));
						}
						game.broadcast(function (card) {
							var clone = card.clone;
							if (clone) {
								clone.style.transition = "all 0.5s";
								clone.style.transform = "scale(1.2)";
								clone.delete();
							}
						}, event.card1);
						target.damage("nocard");
					} else if (name1 != "sha" && name2 == "shan") {
						player.discard(event.card1).set("animate", false);
						target.$gain2(event.card2);
						var clone = event.card1.clone;
						if (clone) {
							clone.style.transition = "all 0.5s";
							clone.style.transform = "scale(1.2)";
							clone.delete();
							game.addVideo("deletenode", player, get.cardsInfo([clone]));
						}
						game.broadcast(function (card) {
							var clone = card.clone;
							if (clone) {
								clone.style.transition = "all 0.5s";
								clone.style.transform = "scale(1.2)";
								clone.delete();
							}
						}, event.card1);
						player.gainPlayerCard(target, true, "he");
					} else {
						player.$gain2(event.card1);
						target.$gain2(event.card2);
					}
					game.broadcastAll(function () {
						ui.arena.classList.remove("thrownhighlight");
					});
					game.addVideo("thrownhighlight2");
				},
				ai: {
					order: 6,
					result: {
						target: -1,
					},
				},
			},
			zhanjue: {
				audio: 2,
				enable: "phaseUse",
				filterCard: true,
				selectCard: -1,
				position: "h",
				filter: function (event, player) {
					if (player.getStat().skill.zhanjue_draw && player.getStat().skill.zhanjue_draw >= 2) return false;
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, "unchanged", "cardEnabled2", player);
						if (mod2 === false) return false;
					}
					return true;
				},
				viewAs: { name: "juedou" },
				group: ["zhanjue4"],
				ai: {
					damage: true,
					order(item, player) {
						if (player.countCards("h") > 1) return 0.8;
						return 8;
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1,
					},
					result: {
						player(player, target) {
							let td = get.damageEffect(target, player, target);
							if (!td) return 0;
							let hs = player.getCards("h"), 
								val = hs.reduce((acc, i) => acc - get.value(i, player), 0) / 6 + 1;
							if (td > 0) return val;
							if (player.hasSkillTag(
								"directHit_ai",
								true,
								{
									target: target,
									card: get.autoViewAs({ name: "juedou" }, hs),
								}
							)) return val;
							let pd = get.damageEffect(player, target, player),
								att = get.attitude(player, target);
							if (att > 0 && get.damageEffect(target, player, player) > pd) return val;
							let ts = target.mayHaveSha(player, "respond", null, "count");
							if (ts < 1 && ts * 8 < Math.pow(player.hp, 2)) return val;
							let damage = pd / get.attitude(player, player),
								ps = player.mayHaveSha(player, "respond", hs, "count");
							if (att > 0) {
								if (ts < 1) return val;
								return val + damage + 1;
							}
							if (pd >= 0) return val + damage + 1;
							if (ts - ps + Math.exp(0.8 - player.hp) < 1) return val - ts;
							return val + damage + 1 - ts;
						},
						target(player, target) {
							let td = get.damageEffect(target, player, target) / get.attitude(target, target);
							if (!td) return 0;
							let hs = player.getCards("h");
							if (td > 0 || player.hasSkillTag(
								"directHit_ai",
								true,
								{
									target: target,
									card: get.autoViewAs({ name: "juedou" }, hs),
								}
							)) return td + 1;
							let pd = get.damageEffect(player, target, player),
								att = get.attitude(player, target);
							if (att > 0) return td + 1;
							let ts = target.mayHaveSha(player, "respond", null, "count"),
								ps = player.mayHaveSha(player, "respond", hs, "count");
							if (ts < 1) return td + 1;
							if (pd >= 0) return 0;
							if (ts - ps < 1) return td + 1 - ts;
							return -ts;
						},
					},
					effect: {
						player: function (card, player, target) {
							if (_status.event.skill == "zhanjue") {
								if (
									player.hasSkillTag(
										"directHit_ai",
										true,
										{
											target: target,
											card: card,
										},
										true
									)
								)
									return;
								if (player.countCards("h") >= 3 || target.countCards("h") >= 3) return "zeroplayertarget";
								if (player.countCards("h", "tao")) return "zeroplayertarget";
								if (target.countCards("h", "sha") > 1) return "zeroplayertarget";
							}
						},
					},
					nokeep: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag === "nokeep") return (!arg || (arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && player.countSkill("zhanjue_draw") < 2 && player.hasCard(card => get.name(card) != "tao", "h");
					},
				},
			},
			zhanjue2: {
				audio: false,
				trigger: { player: "phaseBefore" },
				silent: true,
				sourceSkill: "zhanjue",
				content: function () {
					player.storage.zhanjue = 0;
				},
			},
			zhanjue3: {
				audio: false,
				trigger: { player: "damageAfter", source: "damageAfter" },
				forced: true,
				popup: false,
				sourceSkill: "zhanjue",
				filter: function (event, player) {
					return event.parent.skill == "zhanjue";
				},
				content: function () {
					trigger.player.addTempSkill("zhanjue5");
				},
			},
			zhanjue4: {
				audio: false,
				trigger: { player: "useCardAfter" },
				forced: true,
				popup: false,
				sourceSkill: "zhanjue",
				filter: function (event, player) {
					return event.skill == "zhanjue";
				},
				content: function () {
					"step 0";
					var stat = player.getStat().skill;
					if (!stat.zhanjue_draw) stat.zhanjue_draw = 0;
					stat.zhanjue_draw++;
					player.draw("nodelay");
					var list = game.filterPlayer(function (current) {
						if (
							current.getHistory("damage", function (evt) {
								return evt.card == trigger.card;
							}).length > 0
						) {
							if (current == player) {
								stat.zhanjue_draw++;
							}
							return true;
						}
						return false;
					});
					if (list.length) {
						list.sortBySeat();
						game.asyncDraw(list);
					}
					"step 1";
					game.delay();
				},
			},
			zhanjue5: {},
			qinwang: {
				audio: "qinwang1",
				unique: true,
				group: ["qinwang1"],
				zhuSkill: true,
				filter: function (event, player) {
					if (
						!player.hasZhuSkill("qinwang") ||
						!game.hasPlayer(function (current) {
							return current != player && current.group == "shu";
						}) ||
						!player.countCards("he")
					)
						return false;
					return !event.jijiang && (event.type != "phase" || !player.hasSkill("jijiang3"));
				},
				enable: ["chooseToUse", "chooseToRespond"],
				viewAs: {
					name: "sha",
					cards: [],
					suit: "none",
					number: null,
					isCard: true,
				},
				filterCard: lib.filter.cardDiscardable,
				position: "he",
				check: function (card) {
					var player = _status.event.player,
						players = game.filterPlayer();
					if (player.hasSkill("qinwang_ai")) return false;
					for (var i = 0; i < players.length; i++) {
						var nh = players[i].countCards("h");
						if (players[i] != player && players[i].group == "shu" && get.attitude(players[i], player) > 2 && nh >= 3 && players[i].countCards("h", "sha")) {
							return 5 - get.value(card);
						}
					}
					return 0;
				},
				ai: {
					order: function () {
						return get.order({ name: "sha" }) - 0.3;
					},
					respondSha: true,
					skillTagFilter: function (player) {
						if (
							!player.hasZhuSkill("qinwang") ||
							!game.hasPlayer(function (current) {
								return current != player && current.group == "shu";
							}) ||
							!player.countCards("he")
						)
							return false;
					},
				},
			},
			qinwang1: {
				audio: 2,
				trigger: { player: ["useCardBegin", "respondBegin"] },
				logTarget: "targets",
				sourceSkill: "qinwang",
				filter: function (event, player) {
					return event.skill == "qinwang";
				},
				forced: true,
				content: function () {
					"step 0";
					delete trigger.skill;
					delete trigger.card.cards;
					player.discard(trigger.cards);
					delete trigger.cards;
					trigger.getParent().set("jijiang", true);
					"step 1";
					if (event.current == undefined) event.current = player.next;
					if (event.current == player) {
						player.addTempSkill("jijiang3");
						player.addTempSkill("qinwang_ai");
						event.finish();
						trigger.cancel();
						trigger.getParent().goto(0);
					} else if (event.current.group == "shu") {
						var next = event.current.chooseToRespond("是否替" + get.translation(player) + "打出一张杀？", { name: "sha" });
						next.set("ai", function () {
							var event = _status.event;
							return get.attitude(event.player, event.source) - 2;
						});
						next.set("source", player);
						next.set("jijiang", true);
						next.set("skillwarn", "替" + get.translation(player) + "打出一张杀");
						next.noOrdering = true;
						next.autochoose = lib.filter.autoRespondSha;
					} else {
						event.current = event.current.next;
						event.redo();
					}
					"step 2";
					if (result.bool) {
						event.current.draw();
						event.finish();
						trigger.card = result.card;
						trigger.cards = result.cards;
						trigger.throw = false;
						if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
							event.current.ai.shown += 0.3;
							if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
						}
					} else {
						event.current = event.current.next;
						event.goto(1);
					}
				},
			},
			qinwang_ai: {},
			zuoding: {
				audio: 2,
				audioname: ["re_zhongyao"],
				trigger: { global: "useCardToPlayered" },
				filter: function (event, player) {
					if (event.getParent().triggeredTargets3.length > 1) return false;
					return (
						get.suit(event.card) == "spade" &&
						_status.currentPhase == event.player &&
						event.targets &&
						event.targets.length &&
						event.player != player &&
						game.countPlayer2(function (current) {
							return current.getHistory("damage").length > 0;
						}) == 0
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("zuoding"), "令一名目标角色摸一张牌", function (card, player, target) {
							return _status.event.targets.includes(target);
						})
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set("targets", trigger.targets);
					"step 1";
					if (result.bool) {
						player.logSkill("zuoding", result.targets);
						result.targets[0].draw();
					}
				},
				ai: {
					expose: 0.2,
				},
				//group:'zuoding3'
			},
			zuoding2: {},
			zuoding3: {
				trigger: { global: "damage" },
				silent: true,
				sourceSkill: "zuoding",
				content: function () {
					player.addTempSkill("zuoding2");
				},
			},
			huomo: {
				audio: 2,
				audioname: ["huzhao", "re_zhongyao"],
				enable: "chooseToUse",
				onChooseToUse: function (event) {
					if (game.online || event.huomo_list) return;
					var list = lib.skill.huomo.getUsed(event.player);
					event.set("huomo_list", list);
				},
				getUsed: function (player) {
					var list = [];
					player.getHistory("useCard", function (evt) {
						if (get.type(evt.card, null, false) == "basic") list.add(evt.card.name);
					});
					return list;
				},
				hiddenCard: function (player, name) {
					if (get.type(name) != "basic") return false;
					var list = lib.skill.huomo.getUsed(player);
					if (list.includes(name)) return false;
					return player.hasCard(function (card) {
						return get.color(card) == "black" && get.type(card) != "basic";
					}, "eh");
				},
				filter: function (event, player) {
					if (
						event.type == "wuxie" ||
						!player.hasCard(function (card) {
							return get.color(card) == "black" && get.type(card) != "basic";
						}, "eh")
					)
						return false;
					var list = event.huomo_list || lib.skill.huomo.getUsed(player);
					for (var name of lib.inpile) {
						if (get.type(name) != "basic" || list.includes(name)) continue;
						var card = { name: name, isCard: true };
						if (event.filterCard(card, player, event)) return true;
						if (name == "sha") {
							for (var nature of lib.inpile_nature) {
								card.nature = nature;
								if (event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var vcards = [];
						var list = event.huomo_list || lib.skill.huomo.getUsed(player);
						for (var name of lib.inpile) {
							if (get.type(name) != "basic" || list.includes(name)) continue;
							var card = { name: name, isCard: true };
							if (event.filterCard(card, player, event)) vcards.push(["基本", "", name]);
							if (name == "sha") {
								for (var nature of lib.inpile_nature) {
									card.nature = nature;
									if (event.filterCard(card, player, event)) vcards.push(["基本", "", name, nature]);
								}
							}
						}
						return ui.create.dialog("活墨", [vcards, "vcard"], "hidden");
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
								case "jiu":
									return 3.01;
								case "sha":
									if (button.link[3] == "fire") return 2.95;
									else if (button.link[3] == "thunder") return 2.92;
									else return 2.9;
								case "shan":
									return 1;
							}
						}
						return 0;
					},
					backup: function (links, player) {
						return {
							check: function (card) {
								return 1 / Math.max(0.1, get.value(card));
							},
							filterCard: function (card) {
								return get.type(card) != "basic" && get.color(card) == "black";
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: "none",
								number: null,
								isCard: true,
							},
							position: "he",
							popname: true,
							ignoreMod: true,
							precontent: function () {
								player.logSkill("huomo");
								var card = event.result.cards[0];
								game.log(player, "将", card, "置于牌堆顶");
								event.result.card = {
									name: event.result.card.name,
									nature: event.result.card.nature,
								};
								event.result.cards = [];
								player.loseToDiscardpile(card, ui.cardPile, "visible", "insert").log = false;
							},
						};
					},
					prompt: function (links, player) {
						return "将一张黑色非基本牌置于牌堆顶并视为使用一张" + get.translation(links[0][3] || "") + get.translation(links[0][2]);
					},
				},
				ai: {
					order: function () {
						var player = _status.event.player;
						var event = _status.event;
						var list = lib.skill.huomo.getUsed(player);
						if (!list.includes("jiu") && event.filterCard({ name: "jiu" }, player, event) && get.effect(player, { name: "jiu" }) > 0) {
							return 3.1;
						}
						return 2.9;
					},
					respondSha: true,
					fireAttack: true,
					respondShan: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "fireAttack") return true;
						if (
							player.hasCard(function (card) {
								return get.color(card) == "black" && get.type(card) != "basic";
							}, "he")
						) {
							var list = lib.skill.huomo.getUsed(player);
							if (tag == "respondSha") {
								if (arg != "use") return false;
								if (list.includes("sha")) return false;
							} else if (tag == "respondShan") {
								if (list.includes("shan")) return false;
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
			// taoxi:{
			// 	audio: "qingxi",
			// 	trigger:{player:'useCardToPlayered'},
			// 	filter:function(event,player){
			// 		return _status.currentPhase==player&&event.targets.length==1&&
			// 			event.target.countCards('h')>0&&!player.hasSkill('taoxi4')&&player!=event.target;
			// 	},
			// 	check:function(event,player){
			// 		return get.attitude(player,event.target)<0;
			// 	},
			// 	intro:{
			// 		content:'card'
			// 	},
			// 	content:function(){
			// 		var card=trigger.target.getCards('h').randomGet();
			// 		player.showCards([card]);
			// 		player.storage.taoxi=card;
			// 		player.storage.taoxi2=trigger.target;
			// 		player.syncStorage('taoxi');
			// 		player.markSkill('taoxi');
			// 		player.addTempSkill('taoxi4');
			// 	},
			// 	group:['taoxi2','taoxi3']
			// },
			// taoxi2:{
			// 	audio:false,
			// 	enable:'phaseUse',
			// 	filter:function(event,player){
			// 		if(player.storage.taoxi&&player.storage.taoxi2&&
			// 			get.owner(player.storage.taoxi)==player.storage.taoxi2&&
			// 			lib.filter.filterCard(player.storage.taoxi,player,event)){
			// 			return true;
			// 		}
			// 		return false;
			// 	},
			// 	filterTarget:function(card,player,target){
			// 		return player.canUse(player.storage.taoxi,target);
			// 	},
			// 	selectTarget:function(){
			// 		var info=get.info(_status.event.player.storage.taoxi);
			// 		if(info.notarget) return -1;
			// 		return get.select(info.selectTarget);
			// 	},
			// 	multitarget:true,
			// 	multiline:true,
			// 	content:function(){
			// 		'step 0'
			// 		var card=player.storage.taoxi;
			// 		if(!card){
			// 			event.finish();
			// 			return;
			// 		}
			// 		var owner=get.owner(card);
			// 		if(owner){
			// 			owner.lose(card,ui.special);
			// 		}
			// 		event.card=card;
			// 		player.$throw(card);
			// 		'step 1'
			// 		player.useCard(event.card,targets).animate=false;
			// 		delete player.storage.taoxi;
			// 		delete player.storage.taoxi2;
			// 		player.unmarkSkill('taoxi');
			// 	},
			// 	ai:{
			// 		order:8,
			// 		result:{
			// 			target:function(player,target){
			// 				return get.effect(target,player.storage.taoxi,player,target);
			// 			},
			// 			player:1
			// 		}
			// 	}
			// },
			// taoxi3:{
			// 	trigger:{player:'phaseJieshuBegin'},
			// 	forced:true,
			// 	popup:false,
			// 	filter:function(event,player){
			// 		return player.storage.taoxi?true:false;
			// 	},
			// 	content:function(){
			// 		if(get.owner(player.storage.taoxi)==player.storage.taoxi2){
			// 			player.loseHp();
			// 		}
			// 		delete player.storage.taoxi;
			// 		delete player.storage.taoxi2;
			// 		player.unmarkSkill('taoxi');
			// 	}
			// },
			// taoxi4:{},
			taoxi: {
				audio: "qingxi",
				trigger: { player: "useCardToPlayered" },
				check: function (event, player) {
					if (get.attitude(player, event.target) >= 0) return false;
					var cards = event.target.getCards("h");
					if (cards.filter(card => player.hasUseTarget(card)).length >= cards.length / 2) return true;
					return false;
				},
				filter: function (event, player) {
					return player.isPhaseUsing() && event.targets.length == 1 && event.target.countCards("h") > 0 && player != event.target && !player.hasSkill("taoxi_used");
				},
				logTarget: "target",
				content: function () {
					"step 0";
					player.choosePlayerCard(trigger.target, "h", true);
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						player.showCards(card, get.translation(player) + "对" + get.translation(trigger.target) + "发动了【讨袭】");
						if (!player.storage.taoxi_list) player.storage.taoxi_list = [[], []];
						if (!player.storage.taoxi_list[1].some(i => i._cardid == card.cardid)) {
							var cardx = ui.create.card();
							cardx.init(get.cardInfo(card));
							cardx._cardid = card.cardid;
							player.directgains([cardx], null, "taoxi");
							player.storage.taoxi_list[0].push(trigger.target);
							player.storage.taoxi_list[1].push(cardx);
							player.markSkill("taoxi_list");
							player.addTempSkill("taoxi_list");
							player.addTempSkill("taoxi_use");
							player.addTempSkill("taoxi_used", "phaseUseAfter");
						}
					}
				},
				subSkill: {
					used: {},
					use: {
						trigger: { player: "useCardBefore" },
						charlotte: true,
						forced: true,
						popup: false,
						firstDo: true,
						group: "taoxi_lose",
						filter: function (event, player) {
							if (!player.storage.taoxi_list || !player.storage.taoxi_list.length) return false;
							var list = player.storage.taoxi_list[1];
							return (
								event.cards &&
								event.cards.some(card => {
									return list.includes(card);
								})
							);
						},
						content: function () {
							var cards = [],
								list = player.storage.taoxi_list;
							for (var card of trigger.cards) {
								var bool = false;
								for (var i = 0; i < list[0].length; i++) {
									if (list[1][i] == card) {
										var cardid = card._cardid;
										var cardx = list[0][i].getCards("h", cardxx => cardxx.cardid == cardid)[0];
										if (cardx && get.position(cardx) == "h") {
											cards.push(cardx);
											list[0][i].$throw(cardx);
											bool = true;
											break;
										}
									}
								}
								if (!bool) cards.push(card);
							}
							trigger.cards = cards;
							trigger.card.cards = cards;
							trigger.throw = false;
						},
						mod: {
							aiOrder: function (player, card, num) {
								var list = player.storage.taoxi_list;
								if (!list || !list[1]) return;
								if (list[1].includes(card)) return num + 0.5;
							},
							cardEnabled2: function (card) {
								if (get.itemtype(card) == "card" && card.hasGaintag("taoxi") && _status.event.name == "chooseToRespond") return false;
							},
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									var list = player.storage.taoxi_list;
									if (!list || !list[1]) return;
									if (list[1].includes(card)) return [1, 1];
								},
							},
						},
					},
					lose: {
						trigger: {
							global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd"],
						},
						charlotte: true,
						forced: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							var list = player.storage.taoxi_list;
							if (!list || !list[0].length) return false;
							return game.hasPlayer(function (current) {
								if (!list[0].includes(current)) return;
								var evt = event.getl(current);
								if (
									evt &&
									evt.hs &&
									evt.hs.some(card => {
										return list[1].some(i => i._cardid == card.cardid);
									})
								)
									return true;
								return false;
							});
						},
						content: function () {
							var list = player.storage.taoxi_list;
							var targets = game.filterPlayer(function (current) {
								if (!list[0].includes(current)) return;
								var evt = trigger.getl(current);
								if (
									evt &&
									evt.hs &&
									evt.hs.some(card => {
										return list[1].some(i => i._cardid == card.cardid);
									})
								)
									return true;
								return false;
							});
							for (var target of targets) {
								var hs = trigger.getl(target).hs;
								for (var i = 0; i < list[0].length; i++) {
									if (hs.some(j => j.cardid == list[1][i]._cardid)) {
										if (player.isOnline2()) {
											player.send(
												function (list, i) {
													game.me.storage.taoxi_list = list;
													list[1][i].delete();
													list[0].splice(i, 1);
													list[1].splice(i, 1);
												},
												player.storage.taoxi_list,
												i
											);
										}
										list[1][i].delete();
										list[0].splice(i, 1);
										list[1].splice(i, 1);
										i--;
									}
								}
							}
						},
					},
					list: {
						trigger: { player: "phaseEnd" },
						charlotte: true,
						forced: true,
						onremove: function (player) {
							game.broadcastAll(function (player) {
								player.storage.taoxi_list[1].forEach(i => i.delete());
								delete player.storage.taoxi_list;
							}, player);
						},
						filter: function (event, player) {
							return player.storage.taoxi_list && player.storage.taoxi_list[0].length > 0;
						},
						content: function () {
							player.loseHp();
						},
					},
				},
			},
			xingshuai: {
				skillAnimation: true,
				animationColor: "thunder",
				audio: 2,
				audioname2: {
					re_caorui: "rexingshuai",
				},
				trigger: { player: "dying" },
				//priority:6,
				zhuSkill: true,
				filter: function (event, player) {
					if (player.hp > 0) return false;
					if (!player.hasZhuSkill("xingshuai")) return false;
					return game.hasPlayer(function (current) {
						return current != player && current.group == "wei";
					});
				},
				mark: true,
				unique: true,
				limited: true,
				content: function () {
					"step 0";
					player.awakenSkill("xingshuai");
					var targets = game.filterPlayer();
					targets.remove(player);
					event.targets = targets;
					event.damages = [];
					"step 1";
					if (event.targets.length) {
						var current = event.targets.shift();
						if (current.group == "wei") {
							current
								.chooseBool("是否令" + get.translation(player) + "回复1点体力？")
								.set("ai", function () {
									return get.attitude(_status.event.player, _status.event.target) > 2;
								})
								.set("target", player);
							event.current = current;
						} else {
							event.redo();
						}
					} else {
						event.goto(3);
					}
					"step 2";
					if (result.bool) {
						event.damages.push(event.current);
						event.current.line(player, "green");
						game.log(event.current, "令", player, "回复1点体力");
						player.recover();
					}
					if (event.targets.length) {
						event.goto(1);
					}
					"step 3";
					if (event.damages.length) {
						var next = game.createEvent("xingshuaI_next");
						event.next.remove(next);
						trigger.after.push(next);
						next.targets = event.damages;
						next.setContent(function () {
							targets.shift().damage();
							if (targets.length) event.redo();
						});
					}
				},
			},
			mingjian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				selectCard: -1,
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					player.give(cards, target);
					target.addTempSkill("mingjian2", { player: "phaseAfter" });
					target.storage.mingjian2++;
					target.updateMarks("mingjian2");
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag("nogain")) return 0;
							if (player.countCards("h") == player.countCards("h", "du")) return -1;
							if (target.hasJudge("lebu")) return 0;
							if (get.attitude(player, target) > 3) {
								var basis = get.threaten(target);
								if (
									player == get.zhu(player) &&
									player.hp <= 2 &&
									player.countCards("h", "shan") &&
									!game.hasPlayer(function (current) {
										return get.attitude(current, player) > 3 && current.countCards("h", "tao") > 0;
									})
								)
									return 0;
								if (target.countCards("h") + player.countCards("h") > target.hp + 2) return basis * 0.8;
								return basis;
							}
							return 0;
						},
					},
				},
			},
			mingjian2: {
				charlotte: true,
				mark: true,
				intro: {
					content: "手牌上限+#，出杀次数+#",
				},
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				onremove: true,
				mod: {
					maxHandcard: function (player, num) {
						return num + player.storage.mingjian2;
					},
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return num + player.storage.mingjian2;
					},
				},
			},
			mingjian_old: {
				audio: 2,
				trigger: { player: "phaseUseBefore" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					var go = Math.random() < 0.5;
					player.chooseTarget(get.prompt("mingjian_old"), function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						var att = get.attitude(player, target);
						if (att > 3) {
							if (player.countCards("h") > player.hp) return att;
							if (go) return att;
						}
						return 0;
					};
					"step 1";
					if (result.bool) {
						player.logSkill("mingjian_old", result.targets);
						trigger.cancel();
						var target = result.targets[0];
						target.addSkill("mingjian2_old");
						var hs = player.getCards("h");
						player.give(hs, target);
					}
				},
			},
			mingjian2_old: {
				audio: false,
				trigger: { global: "phaseAfter" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "mingjian_old",
				content: function () {
					if (lib.config.glow_phase) {
						if (_status.currentPhase) {
							_status.currentPhase.classList.remove("glow_phase");
						}
						player.classList.add("glow_phase");
					}
					game.addVideo("phaseChange", player);
					_status.currentPhase = player;
					player.ai.tempIgnore = [];
					player.stat.push({ card: {}, skill: {} });
					player.phaseUse();
					player.removeSkill("mingjian2_old");
				},
			},
			huituo: {
				audio: 2,
				audioname: ["re_caorui"],
				trigger: { player: "damageEnd" },
				direct: true,
				content: function () {
					"step 0";
					var forced = event.forced === undefined ? false : event.forced;
					var info = get.skillInfoTranslation("huituo", player);
					var str = `###${forced ? "恢拓：请选择一名角色" : get.prompt("huituo")}###令一名角色判定。若结果为红色，其回复1点体力；若结果为黑色，其摸${get.cnNumber(trigger.num)}张牌`;
					player.chooseTarget(str, event.forced).set("ai", function (target) {
						var player = _status.event.player;
						if (get.attitude(player, target) > 0) {
							return get.recoverEffect(target, player, player) + 1;
						}
						return 0;
					});
					"step 1";
					if (result.bool) {
						player.logSkill("huituo", result.targets);
						var target = result.targets[0];
						event.target = target;
						target.judge(function (card) {
							if (target.hp == target.maxHp) {
								if (get.color(card) == "red") return -1;
							}
							if (get.color(card) == "red") return 1;
							return 0;
						});
					} else {
						event.finish();
					}
					"step 2";
					switch (result.color) {
						case "red":
							if (event.target.hp < event.target.maxHp) event.target.recover();
							break;

						case "black":
							event.target.draw(trigger.num);
							break;

						default:
							break;
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			duodao: {
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					return player.countCards("he") > 0 && event.source && event.card && event.card.name == "sha";
				},
				direct: true,
				//priority:5,
				audio: 2,
				content: function () {
					"step 0";
					var prompt = "弃置一张牌";
					if (trigger.source.getEquips(1).length) prompt += "，然后获得" + get.translation(trigger.source) + "装备区中的" + get.translation(trigger.source.getEquips(1));
					var next = player.chooseToDiscard("he", get.prompt("duodao", trigger.source), prompt);
					next.logSkill = ["duodao", trigger.source];
					next.set("ai", function (card) {
						if (!_status.event.getTrigger().source.getEquip(1)) return 0;
						if (get.attitude(_status.event.player, _status.event.getTrigger().source) <= 0) {
							return 6 - get.value(card);
						}
						return 0;
					});
					"step 1";
					if (result.bool && trigger.source.getEquips(1).length) {
						player.gain(trigger.source.getEquips(1), trigger.source, "give", "bySelf");
					}
				},
				ai: {
					maixie_defend: true,
				},
			},
			reanjian: {
				trigger: { player: "useCardToPlayered" },
				forced: true,
				audio: 2,
				filter: function (event, player) {
					return event.card.name == "sha" && !event.target.inRange(player);
				},
				logTarget: "target",
				content: function () {
					trigger.getParent().reanjian_buffed = true;
					var map = trigger.customArgs;
					var id = trigger.target.playerid;
					if (!map[id]) map[id] = {};
					if (!map[id].extraDamage) map[id].extraDamage = 0;
					map[id].extraDamage++;
					trigger.target.addTempSkill("reanjian2");
					trigger.target.addTempSkill("reanjian4");
					trigger.target.storage.reanjian2.add(trigger.card);
				},
				ai: {
					unequip_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.name == "sha" && arg.target && !arg.target.inRange(player)) return true;
						return false;
					},
				},
			},
			reanjian2: {
				firstDo: true,
				sourceSkill: "reanjian",
				ai: { unequip2: true },
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				trigger: {
					player: ["damage", "damageCancelled", "damageZero"],
					target: ["shaMiss", "useCardToExcluded"],
				},
				charlotte: true,
				filter: function (event, player) {
					const evt = event.getParent("useCard", true, true);
					if (evt && evt.effectedCount < evt.effectCount) return false;
					return player.storage.reanjian2 && event.card && player.storage.reanjian2.includes(event.card);
				},
				silent: true,
				forced: true,
				popup: false,
				priority: 12,
				content: function () {
					player.storage.reanjian2.remove(trigger.card);
					if (!player.storage.reanjian2.length) player.removeSkill("reanjian2");
				},
			},
			reanjian3: {
				mod: {
					cardSavable: function (card) {
						if (card.name == "tao") return false;
					},
				},
			},
			reanjian4: {
				trigger: { player: "dyingBegin" },
				forced: true,
				silent: true,
				firstDo: true,
				sourceSkill: "reanjian",
				filter: function (event, player) {
					return (event.getParent(2).reanjian_buffed = true);
				},
				content: function () {
					player.addTempSkill("reanjian3", { global: ["dyingEnd", "phaseEnd"] });
				},
			},
			reduodao: {
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					return event.card.name == "sha" && (get.color(event.card) == "red" ? event.player.getEquips(1).length > 0 : player.countCards("he") > 0);
				},
				direct: true,
				audio: 2,
				content: function () {
					"step 0";
					var prompt = "弃置一张牌";
					if (trigger.player.getEquips(1).length) prompt += "，然后获得" + get.translation(trigger.player) + "装备区中的" + get.translation(trigger.player.getEquips(1));
					var next = player.chooseToDiscard("he", get.prompt("reduodao", trigger.player), prompt);
					next.logSkill = ["reduodao", trigger.player];
					next.set("ai", function (card) {
						if (!_status.event.getTrigger().player.getEquips(1).length) return 0;
						if (get.attitude(_status.event.player, _status.event.getTrigger().player) * get.value(_status.event.getTrigger().player.getEquips(1)) <= 0) {
							return 6 - get.value(card);
						}
						return 0;
					});
					"step 1";
					if (result.bool && trigger.player.getEquips(1).length) {
						if (!result.cards || !result.cards.length) player.logSkill("reduodao", trigger.player);
						player.gain(trigger.player.getEquips(1), trigger.player, "give", "bySelf");
					}
				},
			},
			anjian: {
				audio: 2,
				trigger: { source: "damageBegin1" },
				check: function (event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				forced: true,
				filter: function (event, player) {
					return event.getParent().name == "sha" && !event.player.inRange(player);
				},
				content: function () {
					trigger.num++;
				},
			},
			xinpojun: {
				trigger: { player: "useCardToPlayered" },
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha" && player.isPhaseUsing() && event.target.hp > 0 && event.target.countCards("he") > 0;
				},
				audio: "pojun",
				content: function () {
					"step 0";
					player.choosePlayerCard(trigger.target, "he", [1, Math.min(trigger.target.countCards("he"), trigger.target.hp)], get.prompt("xinpojun", trigger.target)).set("forceAuto", true);
					"step 1";
					if (result.bool && result.links.length) {
						var target = trigger.target;
						player.logSkill("xinpojun", target);
						target.addToExpansion(result.cards, "giveAuto", target).gaintag.add("xinpojun2");
						target.addSkill("xinpojun2");
					}
				},
				ai: {
					unequip_ai: true,
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (get.attitude(player, arg.target) > 0 || !player.isPhaseUsing()) return false;
						if (tag == "directHit_ai") return arg.target.hp >= Math.max(1, arg.target.countCards("h") - 1);
						if (arg && arg.name == "sha" && arg.target.getEquip(2)) return true;
						return false;
					},
				},
			},
			xinpojun2: {
				trigger: { global: "phaseEnd" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "xinpojun",
				filter: function (event, player) {
					return player.getExpansions("xinpojun2").length > 0;
				},
				content: function () {
					"step 0";
					var cards = player.getExpansions("xinpojun2");
					player.gain(cards, "draw");
					game.log(player, "收回了" + get.cnNumber(cards.length) + "张“破军”牌");
					"step 1";
					player.removeSkill("xinpojun2");
				},
				intro: {
					markcount: "expansion",
					mark: function (dialog, storage, player) {
						var cards = player.getExpansions("xinpojun2");
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张牌";
					},
				},
			},
			qiaoshi: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					return event.player != player && event.player.countCards("h") == player.countCards("h") && event.player.isIn();
				},
				check: function (event, player) {
					return get.attitude(player, event.player) >= 0;
				},
				logTarget: "player",
				content: function () {
					game.asyncDraw([trigger.player, player]);
				},
			},
			yanyu: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.hasCard(card => lib.skill.yanyu.filterCard(card, player), "h");
				},
				filterCard: (card, player) => get.name(card) == "sha" && player.canRecast(card),
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					player.recast(cards);
				},
				ai: {
					basic: {
						order: 1,
					},
					result: {
						player: 1,
					},
				},
				group: "yanyu2",
			},
			yanyu2: {
				trigger: { player: "phaseUseEnd" },
				filter: function (event, player) {
					return (
						player.getHistory("useSkill", function (evt) {
							return evt.event.getParent("phaseUse") == event && evt.skill == "yanyu";
						}).length >= 2
					);
				},
				direct: true,
				sourceSkill: "yanyu",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("yanyu"), "令一名男性角色摸两张牌", function (card, player, target) {
							return target.hasSex("male") && target != player;
						})
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("yanyu", result.targets);
						result.targets[0].draw(2);
					}
				},
			},
			youdi: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("youdi"), function (card, player, target) {
							return player != target;
						})
						.set("ai", function (target) {
							if (!_status.event.goon) return 0;
							if (target.countCards("he") == 0) return 0;
							return -get.attitude(_status.event.player, target);
						})
						.set("goon", player.countCards("h", "sha") <= player.countCards("h") / 3);
					"step 1";
					if (result.bool) {
						game.delay();
						player.logSkill("youdi", result.targets);
						event.target = result.targets[0];
						event.target.discardPlayerCard(player, "he", true);
					} else {
						event.finish();
					}
					"step 2";
					if (result.links[0].name != "sha" && event.target.countGainableCards(player, "he")) {
						player.gainPlayerCard("he", event.target, true);
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			fuhun: {
				enable: ["chooseToUse", "chooseToRespond"],
				filterCard: true,
				selectCard: 2,
				position: "hs",
				audio: 2,
				audioname: ["re_guanzhang"],
				derivation: ["new_rewusheng", "olpaoxiao"],
				viewAs: { name: "sha" },
				prompt: "将两张手牌当杀使用或打出",
				viewAsFilter: function (player) {
					return player.countCards("hs") > 1;
				},
				check: function (card) {
					if (_status.event.player.hasSkill("new_rewusheng") && get.color(card) == "red") return 0;
					if (_status.event.name == "chooseToRespond") {
						if (card.name == "sha") return 0;
						return 6 - get.useful(card);
					}
					if (_status.event.player.countCards("hs") < 4) return 6 - get.useful(card);
					return 7 - get.useful(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter: function (player) {
						if (player.countCards("hs") < 2) return false;
					},
					order: function (item, player) {
						if (player.hasSkill("new_rewusheng") && player.hasSkill("olpaoxiao")) {
							return 1;
						}
						if (player.countCards("hs") < 4) {
							return 1;
						}
						return 4;
					},
				},
				group: "fuhun2",
			},
			fuhun2: {
				audio: "fuhun",
				audioname: ["re_guanzhang"],
				trigger: { source: "damageSource" },
				forced: true,
				sourceSkill: "fuhun",
				filter: function (event, player) {
					if (["new_rewusheng", "olpaoxiao"].every(skill => player.hasSkill(skill, null, false, false))) return false;
					return event.getParent().skill == "fuhun";
				},
				content: function () {
					player.addTempSkills(["new_rewusheng", "olpaoxiao"]);
					// player.addTempSkill('fuhun3');
				},
			},
			fuhun3: {},
			wusheng_guanzhang: { audio: 1 },
			paoxiao_guanzhang: { audio: 1 },
			fencheng: {
				skillAnimation: "epic",
				animationColor: "gray",
				audio: "xinfencheng",
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.storage.fencheng;
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				unique: true,
				limited: true,
				selectTarget: -1,
				mark: true,
				line: "fire",
				content: function () {
					"step 0";
					player.storage.fencheng = true;
					player.awakenSkill("fencheng");
					var res = get.damageEffect(target, player, target, "fire");
					var num = Math.max(1, target.countCards("e"));
					target
						.chooseToDiscard(num, "he", "弃置" + get.cnNumber(num) + "张牌或受到1点火焰伤害")
						.set("ai", function (card) {
							var res = _status.event.res;
							var num = _status.event.num;
							var player = _status.event.player;
							if (res >= 0) return -1;
							if (num > 2 && player.hp > 1) return -1;
							if (num > 1 && player.hp > 2) return -1;
							if (get.position(card) == "e") {
								return 10 - get.value(card);
							}
							return 6 - get.value(card);
						})
						.set("res", res)
						.set("num", num);
					"step 1";
					if (!result.bool) {
						target.damage("fire");
					}
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							var num = 0,
								players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (player != players[i] && get.damageEffect(players[i], player, players[i], "fire") < 0) {
									var att = get.attitude(player, players[i]);
									if (att > 0) {
										num -= Math.max(1, players[i].countCards("e"));
									} else if (att < 0) {
										num += Math.max(1, players[i].countCards("e"));
									}
								}
							}
							if (players.length < 5) {
								return num - 1;
							} else {
								return num - 2;
							}
						},
					},
				},
				init: function (player) {
					player.storage.fencheng = false;
				},
				intro: {
					content: "limited",
				},
			},
			mieji: {
				trigger: { player: "useCard2" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					if (get.type(event.card) != "trick" || get.color(event.card) != "black") return false;
					if (!event.targets || event.targets.length != 1) return false;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				position: "he",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("mieji"), "为" + get.translation(trigger.card) + "增加一个额外目标", function (card, player, target) {
							var player = _status.event.player;
							if (_status.event.targets.includes(target)) return false;
							return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
						})
						.set("autodelay", true)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("targets", trigger.targets)
						.set("card", trigger.card);
					"step 1";
					if (result.bool) {
						player.logSkill("mieji", result.targets);
						trigger.targets.push(result.targets[0]);
					}
				},
			},
			junxing: {
				enable: "phaseUse",
				audio: 2,
				usable: 1,
				filterCard: true,
				selectCard: [1, Infinity],
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				check: function (card) {
					if (ui.selected.cards.length) return -1;
					var val = get.value(card);
					if (get.type(card) == "basic") return 8 - get.value(card);
					return 5 - get.value(card);
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					"step 0";
					var types = [];
					for (var i = 0; i < cards.length; i++) {
						types.add(get.type(cards[i], "trick", player));
					}
					target
						.chooseToDiscard(function (card) {
							return !_status.event.types.includes(get.type(card, "trick"));
						})
						.set("ai", function (card) {
							if (_status.event.player.isTurnedOver()) return -1;
							return 8 - get.value(card);
						})
						.set("types", types)
						.set("dialog", ["弃置一张与" + get.translation(player) + "弃置的牌类别均不同的牌，或将武将牌翻面", "hidden", cards]);
					"step 1";
					if (!result.bool) {
						target.turnOver();
						target.draw(cards.length);
					}
				},
				ai: {
					order: 2,
					expose: 0.3,
					threaten: 1.8,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag("noturn")) return 0;
							if (target.isTurnedOver()) return 2;
							return -1 / (target.countCards("h") + 1);
						},
					},
				},
			},
			juece: {
				audio: 2,
				audioname: ["dc_liru", "ol_liru"],
				trigger: {
					global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				direct: true,
				filter: function (event, player) {
					if (_status.currentPhase != player) return false;
					return game.hasPlayer(current => {
						if (current == player || current.countCards("h")) return false;
						var evt = event.getl(current);
						return evt && evt.hs && evt.hs.length;
					});
				},
				check: function (event, player) {
					return get.damageEffect(event.player, player, player) > 0;
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(current => {
						if (current == player || current.countCards("h")) return false;
						var evt = trigger.getl(current);
						return evt && evt.hs && evt.hs.length;
					});
					event.targets = targets;
					"step 1";
					var target = event.targets.shift();
					event.target = target;
					player.chooseBool(get.prompt2("juece", target)).set("ai", () => {
						return get.damageEffect(_status.event.getParent().target, _status.event.player, _status.event.player) >= 0;
					});
					"step 2";
					if (result.bool) {
						player.logSkill("juece", target);
						target.damage();
					}
					"step 3";
					if (targets.length) event.goto(1);
				},
				ai: {
					threaten: 1.1,
				},
			},
			jiefan: {
				skillAnimation: true,
				animationColor: "wood",
				audio: 2,
				audioname: ["re_handang"],
				unique: true,
				limited: true,
				mark: true,
				init: function (player) {
					player.storage.jiefan = false;
				},
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.storage.jiefan;
				},
				intro: {
					content: "limited",
				},
				filterTarget: true,
				content: function () {
					"step 0";
					player.awakenSkill("jiefan");
					player.storage.jiefan = true;
					event.players = game.filterPlayer(function (current) {
						return current != target && current.inRange(target);
					});
					event.players.sortBySeat(target);
					"step 1";
					if (event.players.length) {
						event.current = event.players.shift();
						event.current.addTempClass("target");
						player.line(event.current, "green");
						if (event.current.countCards("he") && target.isIn()) {
							event.current
								.chooseToDiscard({ subtype: "equip1" }, "he", "弃置一张武器牌或让" + get.translation(target) + "摸一张牌")
								.set("ai", function (card) {
									if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
									return -1;
								})
								.set("target", target);
							event.tempbool = false;
						} else {
							event.tempbool = true;
						}
					} else {
						event.finish();
					}
					"step 2";
					if (event.tempbool || result.bool == false) {
						target.draw();
					}
					event.goto(1);
				},
				ai: {
					order: 5,
					result: {
						target: function (player, target) {
							if (player.hp > 2) {
								if (game.phaseNumber < game.players.length * 2) return 0;
							}
							var num = 0,
								players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i] != target && players[i].inRange(target)) {
									num++;
								}
							}
							return num;
						},
					},
				},
			},
			fuli: {
				skillAnimation: true,
				animationColor: "soil",
				audio: 2,
				unique: true,
				limited: true,
				enable: "chooseToUse",
				init: function (player) {
					player.storage.fuli = false;
				},
				mark: true,
				filter: function (event, player) {
					if (event.type != "dying") return false;
					if (player != event.dying) return false;
					if (player.storage.fuli) return false;
					return true;
				},
				content: function () {
					"step 0";
					player.awakenSkill("fuli");
					player.recover(game.countGroup() - player.hp);
					"step 1";
					player.turnOver();
					player.storage.fuli = true;
				},
				ai: {
					save: true,
					skillTagFilter: function (player, arg, target) {
						return player == target && player.storage.fuli != true;
					},
					result: {
						player: 10,
					},
					threaten: function (player, target) {
						if (!target.storage.fuli) return 0.9;
					},
				},
				intro: {
					content: "limited",
				},
			},
			qianxi: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				preHidden: true,
				content: function () {
					"step 0";
					player.draw();
					player.chooseToDiscard("he", true).set("ai", card => {
						let player = get.event("player");
						if (get.color(card, player)) return 7 - get.value(card, player);
						return 4 - get.value(card, player);
					});
					"step 1";
					if (!result.bool) {
						event.finish();
						return;
					}
					event.color = get.color(result.cards[0], result.cards[0].original == "h" ? player : false);
					player
						.chooseTarget(function (card, player, target) {
							return player != target && get.distance(player, target) <= 1;
						}, true)
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 2";
					if (result.bool && result.targets.length) {
						result.targets[0].storage.qianxi2 = event.color;
						player.line(result.targets, "green");
						result.targets[0].addTempSkill("qianxi2");
						result.targets[0].markSkill("qianxi2");
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag !== "directHit_ai" || !arg.target.hasSkill("qianxi2")) return false;
						if (arg.card.name == "sha")
							return (
								arg.target.storage.qianxi2 == "red" &&
								(!arg.target.hasSkillTag(
									"freeShan",
									false,
									{
										player: player,
										card: arg.card,
									},
									true
								) ||
									player.hasSkillTag("unequip", false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}) ||
									player.hasSkillTag("unequip_ai", false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}))
							);
						return arg.target.storage.qianxi2 == "black";
					},
				},
			},
			qianxi2: {
				//trigger:{global:'phaseAfter'},
				forced: true,
				mark: true,
				audio: false,
				sourceSkill: "qianxi",
				content: function () {
					player.removeSkill("qianxi2");
					delete player.storage.qianxi2;
				},
				mod: {
					cardEnabled2: function (card, player) {
						if (get.color(card) == player.storage.qianxi2 && get.position(card) == "h") return false;
					},
				},
				intro: {
					content: function (color) {
						return "不能使用或打出" + get.translation(color) + "的手牌";
					},
				},
			},
			zhiman: {
				audio: 2,
				audioname2: {
					guansuo: "zhiman_guansuo",
				},
				trigger: { source: "damageBegin2" },
				check: function (event, player) {
					if (get.damageEffect(event.player, player, player) < 0) return true;
					var att = get.attitude(player, event.player);
					if (att > 0 && event.player.countCards("j")) return true;
					if (event.num > 1) {
						if (att < 0) return false;
						if (att > 0) return true;
					}
					var cards = event.player.getGainableCards(player, "e");
					for (var i = 0; i < cards.length; i++) {
						if (get.equipValue(cards[i]) >= 6) return true;
					}
					return false;
				},
				filter: function (event, player) {
					return player != event.player;
				},
				logTarget: "player",
				content: function () {
					if (trigger.player.countGainableCards(player, "ej")) {
						player.gainPlayerCard(trigger.player, "ej", true);
					}
					trigger.cancel();
				},
			},
			sanyao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.isMaxHp();
				},
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				check: function (card) {
					return 7 - get.value(card);
				},
				position: "he",
				filterCard: true,
				content: function () {
					target.damage("nocard");
				},
				ai: {
					result: {
						target: function (player, target) {
							if (target.countCards("j") && get.attitude(player, target) > 0) {
								return 1;
							}
							if (target.countCards("e")) {
								return -1;
							}
							return get.damageEffect(target, player);
						},
					},
					order: 7,
				},
			},
			olsanyao: {
				enable: "phaseUse",
				audio: "sanyao",
				filter: function (event, player) {
					return player.countCards("he") > 0 && player.getStorage("olsanyao_used").length < 2;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = ["选择手牌数最多的一名角色", "选择体力值最大的一名角色"];
						var choiceList = ui.create.dialog("散谣：请选择一项", "forcebutton", "hidden");
						choiceList.add([
							list.map((item, i) => {
								return [i, item];
							}),
							"textbutton",
						]);
						return choiceList;
					},
					filter: function (button, player) {
						return !player.getStorage("olsanyao_used").includes(button.link);
					},
					check: function (button) {
						var player = _status.event.player;
						if (
							game.hasPlayer(
								[
									function (target) {
										var num = target.countCards("h");
										return (
											!game.hasPlayer(function (current) {
												return current != target && current.countCards("h") > num;
											}) && get.effect(target, "sanyao", player, player) > 0
										);
									},
									function (target) {
										var num = target.hp;
										return (
											!game.hasPlayer(function (current) {
												return current != target && current.hp > num;
											}) && get.effect(target, "sanyao", player, player) > 0
										);
									},
								][button.link]
							)
						)
							return 1 + button.link;
						return 0;
					},
					backup: function (links) {
						return {
							audio: "sanyao",
							filterTarget: [
								function (card, player, target) {
									var num = target.countCards("h");
									return !game.hasPlayer(function (current) {
										return current != target && current.countCards("h") > num;
									});
								},
								function (card, player, target) {
									return !game.hasPlayer(function (current) {
										return current != target && current.hp > target.hp;
									});
								},
							][links[0]],
							index: links[0],
							filterCard: true,
							check: function (card) {
								return 7 - get.value(card);
							},
							position: "he",
							content: function () {
								player.addTempSkill("olsanyao_used", "phaseUseAfter");
								player.markAuto("olsanyao_used", lib.skill[event.name].index);
								target.damage("nocard");
							},
							ai: lib.skill.sanyao.ai,
						};
					},
					prompt: function () {
						return "请选择【散谣】的目标";
					},
				},
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			rezhiman: {
				audio: "zhiman",
				audioname: ["re_masu"],
				audioname2: {
					dc_guansuo: "zhiman_guansuo",
					guansuo: "zhiman_guansuo",
				},
				trigger: { source: "damageBegin2" },
				filter: function (event, player) {
					return player != event.player;
				},
				check: function (event, player) {
					if (get.damageEffect(event.player, player, player) < 0) return true;
					var att = get.attitude(player, event.player);
					if (att > 0 && event.player.countCards("j")) return true;
					if (event.num > 1) {
						if (att < 0) return false;
						if (att > 0) return true;
					}
					var cards = event.player.getGainableCards(player, "he");
					for (var i = 0; i < cards.length; i++) {
						if (get.equipValue(cards[i]) >= 6) return true;
					}
					return false;
				},
				logTarget: "player",
				content: function () {
					if (trigger.player.countGainableCards(player, "hej")) {
						player.gainPlayerCard(trigger.player, "hej", true);
					}
					trigger.cancel();
				},
			},
			resanyao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				selectCard: function () {
					var player = _status.event.player;
					return [
						Math.max(1, ui.selected.targets.length),
						game.countPlayer(function (target) {
							return (
								target != player &&
								!game.hasPlayer(function (current) {
									return current != player && current.hp > target.hp;
								})
							);
						}),
					];
				},
				selectTarget: function () {
					return ui.selected.cards.length;
				},
				filterTarget: function (card, player, target) {
					return (
						target != player &&
						!game.hasPlayer(function (current) {
							return current != player && current.hp > target.hp;
						})
					);
				},
				check: function (card) {
					var player = _status.event.player;
					if (
						game.countPlayer(function (target) {
							return (
								target != player &&
								!game.hasPlayer(function (current) {
									return current != player && current.hp > target.hp;
								}) &&
								get.effect(target, "sanyao", player, player) > 0
							);
						}) <= ui.selected.cards.length
					)
						return 0;
					return 7 - get.value(card);
				},
				position: "he",
				filterCard: true,
				content: function () {
					target.damage("nocard");
				},
				ai: {
					result: {
						target: function (player, target) {
							var disbool = false;
							if (player.hasSkill("rezhiman")) {
								if (target.countCards("j") && get.attitude(player, target) > 0) {
									return 1;
								}
								if (
									target.countCards("he", function (card) {
										return card.name == "tengjia" || get.value(card) > 0;
									})
								) {
									disbool = true;
								}
							}
							var damage = get.damageEffect(target, player);
							if (disbool && get.attitude(player, target) < 0) return Math.min(-1, damage);
							return damage;
						},
					},
					order: 7,
				},
			},
			reqiaoshui: {
				audio: 2,
				enable: "phaseUse",
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
					if (result.bool) player.addTempSkill("reqiaoshui_target", "phaseUseEnd");
					else {
						player.addTempSkill("qiaoshui4");
						event.getParent(3).skipped = true;
					}
				},
				subSkill: {
					target: {
						audio: "reqiaoshui",
						inherit: "qiaoshui3",
						sourceSkill: "reqiaoshui",
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
								if (player.hasSkill("reqiaoshui_target")) return 0;
								var nd = !player.needsToDiscard();
								if (
									player.hasCard(function (card) {
										if (get.position(card) != "h") return false;
										var val = get.value(card);
										if (nd && val < 0) return true;
										if (val <= 5) {
											return get.number(card) >= 12;
										}
										if (val <= 6) {
											return get.number(card) >= 13;
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
			qiaoshui: {
				audio: 2,
				audioname2: {
					re_jianyong: "reqiaoshui",
					xin_jianyong: "xinqiaoshui",
				},
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("qiaoshui"), function (card, player, target) {
							return player.canCompare(target);
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target) / target.countCards("h");
						});
					"step 1";
					if (result.bool) {
						player.logSkill("qiaoshui", result.targets[0]);
						player.chooseToCompare(result.targets[0]);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.addTempSkill("qiaoshui3");
					} else {
						player.addTempSkill("qiaoshui2");
					}
				},
				ai: {
					expose: 0.1,
				},
			},
			qiaoshui2: {
				mod: {
					cardEnabled: function (card) {
						if (get.type(card, "trick") == "trick") return false;
					},
				},
			},
			qiaoshui3: {
				charlotte: true,
				audio: "qiaoshui",
				trigger: { player: "useCard2" },
				sourceSkill: "qiaoshui",
				filter: function (event, player) {
					var type = get.type(event.card);
					return type == "basic" || type == "trick";
				},
				direct: true,
				content: function () {
					"step 0";
					player.removeSkill(event.name);
					var goon = false;
					var info = get.info(trigger.card);
					if (trigger.targets && !info.multitarget) {
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
								goon = true;
								break;
							}
						}
					}
					if (goon) {
						player
							.chooseTarget("巧说：是否为" + get.translation(trigger.card) + "额外指定一名目标？", function (card, player, target) {
								var trigger = _status.event;
								if (trigger.targets.includes(target)) return false;
								return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
							})
							.set("ai", function (target) {
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								return get.effect(target, trigger.card, player, player);
							})
							.set("targets", trigger.targets)
							.set("card", trigger.card);
					} else {
						if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
							event.goto(3);
						}
					}
					"step 1";
					if (result.bool) {
						if (!event.isMine()) game.delayx();
						event.target = result.targets[0];
					} else if (!get.info(trigger.card).multitarget && trigger.targets && trigger.targets.length > 1) {
						event.goto(3);
					} else {
						event.finish();
					}
					"step 2";
					if (event.target) {
						player.logSkill(event.name, event.target);
						trigger.targets.add(event.target);
					}
					event.finish();
					"step 3";
					player
						.chooseTarget("巧说：是否减少一名" + get.translation(trigger.card) + "的目标？", function (card, player, target) {
							return _status.event.targets.includes(target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							return -get.effect(target, trigger.card, trigger.player, _status.event.player);
						})
						.set("targets", trigger.targets);
					"step 4";
					if (result.bool) {
						event.targets = result.targets;
						if (event.isMine()) {
							player.logSkill(event.name, event.targets);
							event.finish();
						}
						for (var i = 0; i < result.targets.length; i++) {
							trigger.targets.remove(result.targets[i]);
						}
						game.delay();
					} else {
						event.finish();
					}
					"step 5";
					player.logSkill(event.name, event.targets);
				},
			},
			qiaoshui4: {
				mod: {
					ignoredHandcard: function (card, player) {
						if (get.type(card, "trick", player) == "trick") {
							return true;
						}
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && get.type(card, "trick", player) == "trick") {
							return false;
						}
					},
				},
			},
			jyzongshi_old: {
				audio: 2,
				trigger: { target: "useCardToBegin" },
				filter: function (event, player) {
					if (event.targets && event.targets.length > 1) return false;
					return event.card && get.type(event.card) == "trick" && event.player != player;
				},
				frequent: true,
				content: function () {
					player.draw();
				},
				ai: {
					effect: function (card, player, target) {
						if (get.type(card) == "trick") return [1, 1];
					},
				},
			},
			shenxing: {
				audio: 2,
				enable: "phaseUse",
				position: "he",
				filterCard: true,
				selectCard: 2,
				prompt: "弃置两张牌并摸一张牌",
				check: function (card) {
					var player = _status.event.player;
					if (!player.hasSkill("olbingyi") || player.hasSkill("olbingyi_blocker", null, null, false)) return 4 - get.value(card);
					var red = 0,
						black = 0,
						hs = player.getCards("h");
					for (var i of hs) {
						if (ui.selected.cards.includes(i)) continue;
						var color = get.color(i, player);
						if (color == "red") red++;
						if (color == "black") black++;
					}
					if (red > 2 && black > 2) return 4 - get.value(card);
					if (red == 0 || black == 0) return 8 - get.value(card);
					var color = get.color(card);
					if (black <= red) return (color == "black" && get.position(card) == "h" ? 8 : 4) - get.value(card);
					return (color == "red" && get.position(card) == "h" ? 8 : 4) - get.value(card);
				},
				content: function () {
					player.draw();
				},
				ai: {
					order: 9,
					result: {
						player: function (player, target) {
							if (!ui.selected.cards.length) return 1;
							if (!player.hasSkill("olbingyi") || player.hasSkill("olbingyi_blocker", null, null, false)) return 1;
							var red = 0,
								black = 0,
								hs = player.getCards("h");
							for (var i of hs) {
								if (ui.selected.cards.includes(i)) continue;
								var color = get.color(i);
								if (color == "red") red++;
								if (color == "black") black++;
							}
							var val = 0;
							for (var i of ui.selected.cards) val += get.value(i, player);
							if (red == 0 || black == 0) {
								if (red + black == 0) return 0;
								var num =
									Math.min(
										red + black,
										game.countPlayer(function (current) {
											return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag("nogain");
										})
									) + 1;
								if (num * 7 > val) return 1;
							}
							if (val < 8) return 1;
							return 0;
						},
					},
				},
			},
			bingyi: {
				audio: 2,
				audioname: ["xin_guyong"],
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterx: function (event, player) {
					var cards = player.getCards("h");
					if (cards.length < 1) return false;
					var color = get.color(cards[0]);
					for (var i = 1; i < cards.length; i++) {
						if (get.color(cards[i]) != color) return false;
					}
					return true;
				},
				direct: true,
				content: function () {
					"step 0";
					if (lib.skill.bingyi.filterx(trigger, player)) {
						player
							.chooseTarget(get.prompt("bingyi"), "展示所有手牌，并令至多" + get.cnNumber(player.countCards("h")) + "名角色各摸一张牌", [1, player.countCards("h")], function (card, player, target) {
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
						player.logSkill("bingyi");
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
			xiantu: {
				audio: 2,
				group: ["xiantu1", "xiantu2"],
			},
			xiantu1: {
				audio: true,
				trigger: { global: "phaseUseBegin" },
				sourceSkill: "xiantu",
				filter: function (event, player) {
					return event.player != player;
				},
				logTarget: "player",
				prompt2: "摸两张牌，然后交给其两张牌。若该角色于本回合阶段时未杀死过角色，则你失去1点体力。",
				check: function (event, player) {
					if (get.attitude(player, event.player) < 5) return false;
					if (player.maxHp - player.hp >= 2) return false;
					if (player.hp == 1) return false;
					if (player.hp == 2 && player.countCards("h") < 2) return false;
					if (event.player.countCards("h") >= event.player.hp) return false;
					return true;
				},
				content: function () {
					"step 0";
					if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.2);
					player.draw(2);
					"step 1";
					player.chooseCard(2, "he", true, "交给" + get.translation(trigger.player) + "两张牌").set("ai", function (card) {
						if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
						if (get.tag(card, "damage")) return 1;
						if (get.type(card) == "equip") return 1;
						return 0;
					});
					"step 2";
					player.give(result.cards, trigger.player);
					trigger.player.addSkill("xiantu4");
					trigger.player.storage.xiantu4.push(player);
				},
				ai: {
					threaten: 1.1,
				},
			},
			xiantu2: { audio: true },
			xiantu4: {
				trigger: { player: "phaseUseEnd" },
				forced: true,
				audio: false,
				onremove: true,
				sourceSkill: "xiantu",
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				charlotte: true,
				content: function () {
					while (player.storage.xiantu4.length) {
						var current = player.storage.xiantu4.shift();
						if (current.isDead()) continue;
						current.logSkill("xiantu2");
						current.loseHp();
					}
					player.removeSkill("xiantu4");
				},
				group: "xiantu3",
			},
			xiantu3: {
				trigger: { source: "dieAfter" },
				forced: true,
				audio: false,
				sourceSkill: "xiantu",
				content: function () {
					player.removeSkill("xiantu4");
				},
			},
			qiangzhi: {
				audio: 2,
				audioname: ["re_zhangsong"],
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("h") > 0;
					});
				},
				subfrequent: ["draw"],
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("qiangzhi"), function (card, player, target) {
							return target != player && target.countCards("h") > 0;
						})
						.set("ai", function () {
							return Math.random();
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("qiangzhi", target);
						player.choosePlayerCard(target, "h", true);
					} else event.finish();
					"step 2";
					var card = result.cards[0];
					target.showCards(card, get.translation(target) + "因【强识】展示");
					player.storage.qiangzhi_draw = get.type(card, "trick");
					game.addVideo("storage", player, ["qiangzhi_draw", player.storage.qiangzhi_draw]);
					player.addTempSkill("qiangzhi_draw", "phaseUseEnd");
				},
			},
			qiangzhi_draw: {
				trigger: { player: "useCard" },
				frequent: true,
				popup: false,
				charlotte: true,
				prompt: "是否执行【强识】的效果摸一张牌？",
				sourceSkill: "qiangzhi",
				filter: function (event, player) {
					return get.type(event.card, "trick") == player.storage.qiangzhi_draw;
				},
				content: function () {
					player.draw();
				},
				onremove: true,
				mark: true,
				intro: {
					content: function (type) {
						return get.translation(type) + "牌";
					},
				},
			},
			dingpin: {
				audio: "pindi",
				enable: "phaseUse",
				onChooseToUse: function (event) {
					if (event.type != "phase" || game.online) return;
					var list = [],
						player = event.player;
					player.getHistory("useCard", function (evt) {
						list.add(get.type2(evt.card));
					});
					player.getHistory("lose", function (evt) {
						if (evt.type != "discard") return;
						for (var i of evt.cards2) {
							list.add(get.type2(i, evt.hs.includes(i) ? player : false));
						}
					});
					event.set("dingpin_types", list);
				},
				filter: function (event, player) {
					var list = event.dingpin_types || [];
					return (
						player.countCards("he", function (card) {
							return !list.includes(get.type2(card));
						}) > 0
					);
				},
				filterCard: function (card) {
					var list = _status.event.dingpin_types || [];
					return !list.includes(get.type2(card));
				},
				position: "he",
				filterTarget: function (card, player, target) {
					return !target.hasSkill("dingpin2");
				},
				content: function () {
					"step 0";
					target.judge(function (card) {
						var evt = _status.event.getParent("dingpin"),
							color = get.color(card);
						switch (color) {
							case "black":
								return evt.target.getDamagedHp();
							case "red":
								return get.sgn(get.attitude(evt.target, evt.player)) * -3;
						}
						return 0;
					}).judge2 = function (result) {
						if (result.color == "black") return true;
						return false;
					};
					"step 1";
					switch (result.color) {
						case "black":
							if (target.getDamagedHp() > 0) target.draw(target.getDamagedHp());
							target.addTempSkill("dingpin2");
							break;
						case "red":
							player.turnOver();
							break;
						default:
							break;
					}
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							if (player.isTurnedOver()) return target.getDamagedHp();
							var card = ui.cardPile.firstChild;
							if (!card) return;
							if (get.color(card) == "black") return target.getDamagedHp();
							return 0;
						},
					},
				},
			},
			dingpin2: { charlotte: true },
			faen: {
				audio: 2,
				trigger: { global: ["turnOverAfter", "linkAfter"] },
				filter: function (event, player) {
					if (event.name == "link") return event.player.isLinked();
					return !event.player.isTurnedOver();
				},
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				logTarget: "player",
				content: function () {
					trigger.player.draw();
				},
				ai: {
					expose: 0.2,
				},
				global: "faen_global",
				subSkill: {
					global: {
						ai: {
							effect: {
								target(card, player, target) {
									if (card.name == "tiesuo" && !target.isLinked()) return [1, 0.6 * game.countPlayer(cur => {
										return (
											cur.hasSkill("faen") ||
											cur.hasSkill("oldfaen") ||
											cur.hasSkill("refaen") ||
											cur.hasSkill("dcfaen")
										) && get.attitude(target, cur) > 0;
									})];
								}
							}
						}
					}
				},
			},
			jiaojin: {
				audio: 2,
				trigger: { player: "damageBegin3" },
				filter: function (event, player) {
					return player.countCards("he", { type: "equip" }) && event.source && event.source.hasSex("male");
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard("he", "骄矜：是否弃置一张装备牌令伤害-1？", function (card, player) {
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
					next.logSkill = "jiaojin";
					"step 1";
					if (result.bool) {
						game.delay(0.5);
						trigger.num--;
					}
				},
			},
			chanhui: {
				audio: 2,
				trigger: { player: "useCardToPlayer" },
				filter: function (event, player) {
					if (_status.currentPhase != player) return false;
					if (player.hasSkill("chanhui2")) return false;
					if (event.targets.length > 1) return false;
					var card = event.card;
					if (card.name == "sha") return true;
					if (get.color(card) == "black" && get.type(card) == "trick") return true;
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("chanhui"), function (card, player, target) {
							if (player == target) return false;
							var evt = _status.event.getTrigger();
							return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player) + 0.01;
						});
					"step 1";
					if (result.bool) {
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2";
					player.addTempSkill("chanhui2");
					player.logSkill("chanhui", event.target);
					event.target.chooseCard("交给" + get.translation(player) + "一张手牌，或成为" + get.translation(trigger.card) + "的额外目标").set("ai", function (card) {
						return 5 - get.value(card);
					});
					"step 3";
					if (result.bool) {
						target.give(result.cards, player);
						trigger.untrigger();
						trigger.getParent().player = event.target;
						game.log(event.target, "成为了", trigger.card, "的使用者");
					} else {
						game.log(event.target, "成为了", trigger.card, "的额外目标");
						trigger.getParent().targets.push(event.target);
					}
				},
			},
			rechanhui: {
				audio: 2,
				trigger: { player: "useCardToPlayer" },
				filter: function (event, player) {
					if (player.hasSkill("rechanhui2")) return false;
					if (event.targets.length > 1) return false;
					var card = event.card;
					if (card.name == "sha" || get.type(card) == "trick") return true;
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("rechanhui"), function (card, player, target) {
							if (player == target) return false;
							var trigger = _status.event;
							return player.canUse(trigger.card, target, false) && trigger.targets.includes(target) == false;
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player) + 0.01;
						})
						.set("targets", trigger.targets)
						.set("card", trigger.card);
					"step 1";
					if (result.bool) {
						//game.delay(0,200);
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2";
					player.logSkill("rechanhui", event.target);
					event.target.chooseCard("交给" + get.translation(player) + "一张牌，或成为" + get.translation(trigger.card) + "的额外目标", "he").set("ai", function (card) {
						return 5 - get.value(card);
					});
					"step 3";
					if (result.bool) {
						target.give(result.cards, player);
						trigger.untrigger();
						trigger.getParent().player = event.target;
						game.log(event.target, "成为了", trigger.card, "的使用者");
					} else {
						game.log(event.target, "成为了", trigger.card, "的额外目标");
						trigger.getParent().targets.push(event.target);
						player.addTempSkill("rechanhui2");
					}
				},
			},
			rechanhui2: { charlotte: true },
			rejiaojin2: { charlotte: true },
			rejiaojin: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					return (
						(event.card.name == "sha" || get.type(event.card) == "trick") &&
						event.player != player &&
						player.countCards("he", function (card) {
							return _status.connectMode || get.type(card) == "equip";
						}) &&
						!player.hasSkill("rejiaojin2")
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard("he", "骄矜：是否弃置一张装备牌令" + get.translation(trigger.card) + "对你无效？", function (card, player) {
						return get.type(card) == "equip";
					});
					next.set("ai", function (card) {
						if (_status.event.goon2) {
							return 3 + _status.event.val - get.value(card);
						}
						return 0;
					});
					next.set("val", get.value(trigger.cards.filterInD()));
					next.set("goon2", get.effect(player, trigger.card, trigger.player, player) < 0);
					next.logSkill = ["rejiaojin", trigger.player];
					"step 1";
					if (result.bool) {
						var cards = trigger.cards.filterInD();
						if (cards.length) player.gain(cards, "gain2", "log");
						trigger.excluded.push(player);
						if (trigger.player.hasSex("female")) player.addTempSkill("rejiaojin2");
					}
				},
			},
			chanhui2: {},
			quanji: {
				audio: 2,
				trigger: { player: "damageEnd" },
				frequent: true,
				locked: false,
				filter: function (event) {
					return event.num > 0;
				},
				content: function () {
					"step 0";
					event.count = trigger.num;
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
						player.addToExpansion(result.cards, player, "giveAuto").gaintag.add("quanji");
					}
					"step 4";
					if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
						player.chooseBool(get.prompt2("quanji")).set("frequentSkill", event.name);
					} else event.finish();
					"step 5";
					if (result.bool) {
						player.logSkill("quanji");
						event.goto(1);
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				mod: {
					maxHandcard: function (player, num) {
						return num + player.getExpansions("quanji").length;
					},
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					notemp: true,
					threaten: 0.8,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage") && (player.hasSkill("paiyi") || player.hasSkill("zili"))) {
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
			zili: {
				skillAnimation: true,
				animationColor: "thunder",
				audio: 2,
				audioname: ["re_zhonghui"],
				unique: true,
				juexingji: true,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				derivation: "paiyi",
				filter: function (event, player) {
					return !player.hasSkill("paiyi") && player.getExpansions("quanji").length >= 3;
				},
				content: function () {
					"step 0";
					player.awakenSkill("zili");
					player.chooseDrawRecover(2, true, function (event, player) {
						if (player.hp == 1 && player.isDamaged()) return "recover_hp";
						return "draw_card";
					});
					"step 1";
					player.loseMaxHp();
					player.addSkills("paiyi");
				},
				ai: {
					combo: "quanji",
				},
			},
			paiyi: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				audioname: ["re_zhonghui"],
				filter: function (event, player) {
					return player.getExpansions("quanji").length > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("排异", player.getExpansions("quanji"), "hidden");
					},
					backup: function (links, player) {
						return {
							audio: "paiyi",
							audioname: ["re_zhonghui"],
							filterTarget: true,
							filterCard: function () {
								return false;
							},
							selectCard: -1,
							card: links[0],
							delay: false,
							content: lib.skill.paiyi.contentx,
							ai: {
								order: 10,
								result: {
									target: function (player, target) {
										if (player != target) return 0;
										if (player.hasSkill("requanji") || player.countCards("h") + 2 <= player.hp + player.getExpansions("quanji").length) return 1;
										return 0;
									},
								},
							},
						};
					},
					prompt: function () {
						return "请选择〖排异〗的目标";
					},
				},
				contentx: function () {
					"step 0";
					var card = lib.skill.paiyi_backup.card;
					player.loseToDiscardpile(card);
					"step 1";
					target.draw(2);
					"step 2";
					if (target.countCards("h") > player.countCards("h")) {
						target.damage();
					}
				},
				ai: {
					order: 1,
					combo: "quanji",
					result: {
						player: 1,
					},
				},
			},
			xianzhou: {
				skillAnimation: true,
				animationColor: "gray",
				audio: 2,
				audioname: ["xin_caifuren", "ol_caifuren"],
				unique: true,
				limited: true,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("e") > 0;
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				mark: true,
				delay: false,
				content: function () {
					"step 0";
					player.awakenSkill("xianzhou");
					var cards = player.getCards("e");
					player.give(cards, target);
					event.num = cards.length;
					game.delay();
					"step 1";
					target
						.chooseTarget([1, event.num], "令" + get.translation(player) + "回复" + event.num + "点体力，或对攻击范围内的" + event.num + "名角色造成1点伤害", function (card, player, target2) {
							return _status.event.player.inRange(target2);
						})
						.set("ai", function (target2) {
							var target = _status.event.player;
							var player = _status.event.getParent().player;
							if (get.attitude(target, player) > 0) {
								if (player.hp + event.num <= player.maxHp || player.hp == 1) return -1;
							}
							return get.damageEffect(target2, target, target);
						});
					"step 2";
					if (result.bool) {
						target.line(result.targets, "green");
						event.targets = result.targets;
						event.num2 = 0;
					} else {
						player.recover(event.num);
						event.finish();
					}
					"step 3";
					if (event.num2 < event.targets.length) {
						event.targets[event.num2].damage(target);
						event.num2++;
						event.redo();
					}
				},
				intro: {
					content: "limited",
				},
				ai: {
					order: 1,
					result: {
						target: 1,
						player: function (player) {
							var bool = true,
								players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i] != player && get.attitude(player, players[i]) > 2 && get.attitude(players[i], player) > 2) {
									bool = false;
									break;
								}
							}
							if (bool) return -10;
							if (player.hp == 1) return 1;
							if (game.phaseNumber < game.players.length) return -10;
							if (player.countCards("e") + player.hp <= player.maxHp) return 1;
							return -10;
						},
					},
				},
			},
			qieting: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				filter: function (event, player) {
					if (event.player == player || !event.player.isIn()) return false;
					var history = event.player.getHistory("useCard");
					for (var i = 0; i < history.length; i++) {
						if (!history[i].targets) continue;
						for (var j = 0; j < history[i].targets.length; j++) {
							if (history[i].targets[j] != event.player) return false;
						}
					}
					return true;
				},
				direct: true,
				content: function () {
					"step 0";
					var next;
					if (
						trigger.player.hasCard(function (card) {
							return player.canEquip(card);
						}, "e")
					) {
						next = player
							.chooseControl("移动装备", "draw_card", "cancel2", function (event, player) {
								var source = _status.event.sourcex;
								var att = get.attitude(player, source);
								if (source.hasSkillTag("noe")) {
									if (att > 0) {
										return "移动装备";
									}
								} else {
									if (
										att <= 0 &&
										source.countCards("e", function (card) {
											return get.value(card, source) > 0 && get.effect(player, card, player, player) > 0;
										})
									) {
										return "移动装备";
									}
								}
								return "draw_card";
							})
							.set("sourcex", trigger.player);
					} else {
						next = player.chooseControl("draw_card", "cancel2", function () {
							return "draw_card";
						});
					}
					next.set("prompt", get.prompt("qieting", trigger.player));
					"step 1";
					if (result.control == "移动装备") {
						player.logSkill("qieting", trigger.player);
						player
							.choosePlayerCard(trigger.player, "e", "将一张装备牌移至你的装备区", true)
							.set("filterButton", function (button) {
								return _status.event.player.canEquip(button.link);
							})
							.set("ai", function (button) {
								return get.effect(player, button.link, player, player);
							});
					} else {
						if (result.control == "draw_card") {
							player.logSkill("qieting");
							player.draw();
						}
						event.finish();
					}
					"step 2";
					if (result && result.links && result.links.length) {
						game.delay(2);
						trigger.player.$give(result.links[0], player, false);
						player.equip(result.links[0]);
						player.addExpose(0.2);
					}
				},
			},
			oldzhuikong: {
				audio: "zhuikong",
				inherit: "zhuikong",
			},
			zhuikong: {
				audio: 2,
				trigger: { global: "phaseZhunbeiBegin" },
				check: function (event, player) {
					if (get.attitude(player, event.player) < -2) {
						var cards = player.getCards("h");
						if (cards.length > player.hp) return true;
						for (var i = 0; i < cards.length; i++) {
							var useful = get.useful(cards[i]);
							if (useful < 5) return true;
							if (get.number(cards[i]) > 9 && useful < 7) return true;
						}
					}
					return false;
				},
				logTarget: "player",
				filter: function (event, player) {
					return player.hp < player.maxHp && player.canCompare(event.player);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(trigger.player);
					"step 1";
					if (result.bool) {
						if (event.name == "zhuikong") trigger.player.addTempSkill("zishou2");
						else trigger.player.skip("phaseUse");
					} else {
						trigger.player.storage.zhuikong_distance = player;
						trigger.player.addTempSkill("zhuikong_distance");
					}
				},
				subSkill: {
					distance: {
						sub: true,
						onremove: true,
						mod: {
							globalFrom: function (from, to, distance) {
								if (from.storage.zhuikong_distance == to) return -Infinity;
							},
						},
					},
				},
			},
			oldqiuyuan: {
				audio: "qiuyuan",
				inherit: "qiuyuan",
				filter: function (event, player) {
					return (
						event.card.name == "sha" &&
						game.hasPlayer(function (current) {
							return current != player && !event.targets.includes(current) && current.countCards("h") > 0 && lib.filter.targetEnabled(event.card, event.player, current);
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("oldqiuyuan"), function (card, player, target) {
							var evt = _status.event.getTrigger();
							return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, evt.player, target) && target.countCards("h") > 0;
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, trigger.player, player) + 0.1;
						})
						.set("targets", trigger.targets)
						.set("playerx", trigger.player);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("oldqiuyuan", target);
						event.target = target;
						target
							.chooseCard("交给" + get.translation(player) + "一张牌，若此牌不为【闪】，则也成为此杀的额外目标", true)
							.set("ai", function (card) {
								return -get.value(card, player, "raw");
							})
							.set("sourcex", player);
						game.delay();
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						target.give(result.cards, player, "give");
						if (get.name(result.cards[0]) != "shan") {
							trigger.getParent().targets.push(event.target);
							trigger.getParent().triggeredTargets2.push(event.target);
							game.log(event.target, "成为了额外目标");
						}
						game.delay();
					}
				},
			},
			qiuyuan: {
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
						.chooseTarget(get.prompt2("qiuyuan"), function (card, player, target) {
							var evt = _status.event.getTrigger();
							return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, evt.player, target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, trigger.player, player) + 0.1;
						})
						.set("targets", trigger.targets)
						.set("playerx", trigger.player);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("qiuyuan", target);
						event.target = target;
						target
							.chooseCard({ name: "shan" }, "交给" + get.translation(player) + "一张闪，或成为此杀的额外目标")
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
						game.log(event.target, "成为了额外目标");
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
			gongji: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				position: "he",
				filterCard: true,
				check: function (card) {
					if (get.type(card) != "equip") return 0;
					var player = _status.currentPhase;
					if (player.countCards("he", { subtype: get.subtype(card) }) > 1) {
						return 11 - get.equipValue(card);
					}
					return 6 - get.equipValue(card);
				},
				content: function () {
					"step 0";
					player.addTempSkill("gongji2");
					"step 1";
					if (get.type(cards[0], null, cards[0].original == "h" ? player : false) == "equip") {
						player
							.chooseTarget("是否弃置一名角色的一张牌？", function (card, player, target) {
								return player != target && target.countCards("he") > 0;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								if (get.attitude(player, target) < 0) {
									return Math.max(0.5, get.effect(target, { name: "sha" }, player, player));
								}
								return 0;
							});
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.line(result.targets, "green");
						event.target = result.targets[0];
						player.discardPlayerCard(event.target, "he", true).ai = get.buttonValue;
					}
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
			},
			gongji2: {
				mod: {
					attackRangeBase: function () {
						return Infinity;
					},
				},
			},
			zhuiyi: {
				audio: 2,
				audioname: ["re_bulianshi"],
				trigger: { player: "die" },
				direct: true,
				skillAnimation: true,
				animationColor: "wood",
				forceDie: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("zhuiyi"), function (card, player, target) {
							return player != target && _status.event.sourcex != target;
						})
						.set("forceDie", true)
						.set("ai", function (target) {
							var num = get.attitude(_status.event.player, target);
							if (num > 0) {
								if (target.hp == 1) {
									num += 2;
								}
								if (target.hp < target.maxHp) {
									num += 2;
								}
							}
							return num;
						})
						.set("sourcex", trigger.source);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zhuiyi", target);
						player.line(target, "green");
						target.recover();
						target.draw(3);
					}
				},
				ai: {
					expose: 0.5,
				},
			},
			old_anxu: {
				enable: "phaseUse",
				usable: 1,
				multitarget: true,
				audio: "anxu",
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var num = target.countCards("h");
					if (ui.selected.targets.length) {
						return num < ui.selected.targets[0].countCards("h");
					}
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (num > players[i].countCards("h")) return true;
					}
					return false;
				},
				selectTarget: 2,
				content: function () {
					"step 0";
					var gainner, giver;
					if (targets[0].countCards("h") < targets[1].countCards("h")) {
						gainner = targets[0];
						giver = targets[1];
					} else {
						gainner = targets[1];
						giver = targets[0];
					}
					gainner.gainPlayerCard(giver, true, "h", "visibleMove");
					event.gainner = gainner;
					event.giver = giver;
					"step 1";
					if (result.cards) {
						event.bool = false;
						var card = result.cards[0];
						if (get.suit(card) != "spade") event.bool = true;
					}
					"step 2";
					if (event.bool) {
						player.draw();
					}
				},
				ai: {
					order: 10.5,
					threaten: 2.3,
					result: {
						target: function (player, target) {
							var num = target.countCards("h");
							var att = get.attitude(player, target);
							if (ui.selected.targets.length == 0) {
								if (att > 0) return -1;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									var num2 = players[i].countCards("h");
									var att2 = get.attitude(player, players[i]);
									if (num2 < num) {
										if (att2 > 0) return -3;
										return -1;
									}
								}
								return 0;
							} else {
								return 1;
							}
						},
						player: 1,
					},
				},
			},
			anxu: {
				enable: "phaseUse",
				usable: 1,
				multitarget: true,
				audio: 2,
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var num = target.countCards("h");
					if (ui.selected.targets.length) {
						return num < ui.selected.targets[0].countCards("h");
					}
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (num > players[i].countCards("h")) return true;
					}
					return false;
				},
				selectTarget: 2,
				content: function () {
					"step 0";
					var gainner, giver;
					if (targets[0].countCards("h") < targets[1].countCards("h")) {
						gainner = targets[0];
						giver = targets[1];
					} else {
						gainner = targets[1];
						giver = targets[0];
					}
					giver.chooseCard("选择一张手牌交给" + get.translation(gainner), true);
					event.gainner = gainner;
					event.giver = giver;
					"step 1";
					var card = result.cards[0];
					event.giver.give(card, event.gainner);
					"step 2";
					if (event.gainner.countCards("h") == event.giver.countCards("h")) {
						player.chooseDrawRecover(true);
					}
				},
				ai: {
					order: 10.5,
					threaten: 1.6,
					result: {
						target: function (player, target) {
							var num = target.countCards("h");
							var att = get.attitude(player, target);
							if (ui.selected.targets.length == 0) {
								if (att > 0) return -1;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									var num2 = players[i].countCards("h");
									var att2 = get.attitude(player, players[i]);
									if (att2 >= 0 && num2 < num) return -1;
								}
								return 0;
							} else {
								return 1;
							}
						},
						player: 0.1,
					},
				},
			},
			mingce: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				position: "he",
				filterCard: function (card) {
					return get.name(card) == "sha" || get.type(card) == "equip";
				},
				filter: function (event, player) {
					return player.countCards("h", "sha") > 0 || player.countCards("he", { type: "equip" }) > 0;
				},
				check: function (card) {
					return 8 - get.value(card);
				},
				selectTarget: 2,
				multitarget: true,
				discard: false,
				lose: false,
				targetprompt: ["得到牌", "出杀目标"],
				filterTarget: function (card, player, target) {
					if (ui.selected.targets.length == 0) {
						return player != target;
					} else {
						return ui.selected.targets[0].inRange(target);
					}
				},
				delay: false,
				content: function () {
					"step 0";
					player.give(cards, targets[0], "visible");
					"step 1";
					if (!lib.filter.filterTarget({ name: "sha", isCard: true }, targets[0], targets[1])) event._result = { control: "draw_card" };
					else
						targets[0]
							.chooseControl("draw_card", "出杀", function () {
								var player = _status.event.player;
								var target = _status.event.target;
								if (get.effect(_status.event.target, { name: "sha" }, player, player) > 0) {
									return 1;
								}
								return 0;
							})
							.set("target", targets[1])
							.set("prompt", "对" + get.translation(targets[1]) + "使用一张杀，或摸一张牌");
					"step 2";
					if (result.control == "draw_card") {
						targets[0].draw();
					} else {
						targets[0].useCard({ name: "sha", isCard: true }, targets[1]);
					}
				},
				ai: {
					result: {
						player: function (player) {
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
									return 1;
								}
							}
							return 0;
						},
						target: function (player, target) {
							if (ui.selected.targets.length) {
								return -0.1;
							}
							return 1;
						},
					},
					order: 8.5,
					expose: 0.2,
				},
			},
			xinxuanhuo: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				direct: true,
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("xinxuanhuo"), function (card, player, target) {
							return player != target;
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 0) {
								if (target.countCards("h") < target.hp) att += 2;
								return att - target.countCards("h") / 3;
							} else {
								return -1;
							}
						});
					"step 1";
					if (result.bool) {
						trigger.changeToZero();
						player.logSkill("xinxuanhuo", result.targets);
						event.target = result.targets[0];
						event.target.draw(2);
					} else {
						event.finish();
					}
					"step 2";
					if (
						game.hasPlayer(function (current) {
							return target.canUse("sha", current);
						})
					)
						player
							.chooseTarget("选择出杀的目标", true, function (card, player, target) {
								return _status.event.target.canUse("sha", target);
							})
							.set("ai", function (target) {
								return get.effect(target, { name: "sha" }, _status.event.target, _status.event.player);
							})
							.set("target", event.target);
					"step 3";
					if (result.bool && result.targets.length) {
						game.log(player, "指定的出杀目标为", result.targets);
						event.target.line(result.targets);
						event.target.chooseToUse("对" + get.translation(result.targets) + "使用一张杀，或令" + get.translation(player) + "获得你的两张牌", { name: "sha" }, result.targets[0], -1);
					} else {
						event.bool = true;
					}
					"step 4";
					if (event.bool || result.bool == false) {
						player.gainPlayerCard("he", event.target, Math.min(2, event.target.countCards("he")), true);
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			zhichi: {
				audio: 2,
				trigger: { player: "damageEnd" },
				audioname: ["re_chengong"],
				forced: true,
				filter: function (event, player) {
					return _status.currentPhase != player;
				},
				content: function () {
					player.addTempSkill("zhichi2", ["phaseAfter", "phaseBefore"]);
				},
			},
			zhichi2: {
				audio: 'zhichi',
				trigger: { target: "useCardToBefore" },
				audioname: ["re_chengong"],
				forced: true,
				charlotte: true,
				priority: 15,
				sourceSkill: "zhichi",
				filter: function (event, player) {
					return get.type(event.card) == "trick" || event.card.name == "sha";
				},
				content: function () {
					game.log(player, "发动了智迟，", trigger.card, "对", trigger.target, "失效");
					trigger.cancel();
				},
				mark: true,
				intro: {
					content: "杀或普通锦囊牌对你无效",
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "trick" || card.name == "sha") return "zeroplayertarget";
						},
					},
				},
			},
			zongxuan: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				filter: function (event, player) {
					if (event.type != "discard" || event.getlx === false) return;
					var evt = event.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.position(evt.cards2[i]) == "d") {
							return true;
						}
					}
					return false;
				},
				check: function (trigger, player) {
					if (
						trigger.getParent(3).name != "phaseDiscard" ||
						!game.hasPlayer(function (current) {
							return current.isDamaged() && get.recoverEffect(current, player, player) > 0;
						})
					)
						return false;
					var evt = trigger.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.position(evt.cards2[i], true) == "d" && get.type(evt.cards2[i], false) == "equip") {
							return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var cards = [];
					var evt = trigger.getl(player);
					for (var i = 0; i < evt.cards2.length; i++) {
						if (get.position(evt.cards2[i], true) == "d") {
							cards.push(evt.cards2[i]);
						}
					}
					var next = player.chooseToMove("纵玄：将任意张牌置于牌堆顶", true);
					next.set("list", [["本次弃置的牌", cards], ["牌堆顶"]]);
					next.set("filterOk", function (moved) {
						return moved[1].length > 0;
					});
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0),
							cards2 = cards.filter(function (i) {
								return get.type(i, null, false) == "equip";
							}),
							cards3;
						if (cards2.length) {
							cards3 = cards2.randomGet();
						} else cards3 = cards.randomGet();
						return [[], [cards3]];
					});
					"step 1";
					if (result.bool) {
						var cards = result.moved[1];
						game.log(player, "将", cards, "置于了牌堆顶");
						while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
					}
				},
			},
			zhiyan: {
				audio: 2,
				audioname: ["gexuan", "re_yufan"],
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt("zhiyan"), "令一名角色摸一张牌并展示之。若为装备牌，则其回复1点体力").set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						event.target = result.targets[0];
						player.logSkill("zhiyan", result.targets);
						event.bool = false;
						event.target.draw("visible");
					} else {
						event.finish();
					}
					"step 2";
					var card = result[0];
					if (get.type(card) == "equip") {
						if (target.getCards("h").includes(card) && target.hasUseTarget(card)) {
							event.target.chooseUseTarget(card, true, "nopopup");
							game.delay();
						}
						event.bool = true;
					}
					"step 3";
					if (event.bool) target.recover();
				},
				ai: {
					expose: 0.2,
					threaten: 1.2,
				},
			},
			miji: {
				audio: 2,
				audioname: ["re_wangyi"],
				locked: false,
				mod: {
					aiOrder: function (player, card, num) {
						if (num > 0 && _status.event && _status.event.type === "phase" && get.tag(card, "recover")) {
							if (player.needsToDiscard()) return num / 3;
							return 0;
						}
					},
				},
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.hp < player.maxHp;
				},
				content: function () {
					"step 0";
					event.num = player.getDamagedHp();
					player.draw(event.num);
					if (_status.connectMode)
						game.broadcastAll(function () {
							_status.noclearcountdown = true;
						});
					event.given_map = {};
					event._forcing = false;
					event.aicheck = (function () {
						let res = {
								bool: true,
								cards: [],
							},
							cards = player.getCards("he"),
							tars = game.filterPlayer(i => player !== i);
						cards.forEach(i => {
							let o = get.value(i, player),
								max = o,
								temp,
								t;
							tars.forEach(tar => {
								temp = get.value(i, tar);
								if (temp > max) {
									max = temp;
									t = tar;
								}
							});
							if (t) res.cards.push([i, t, max - o]);
						});
						if (res.cards.length < event.num) res.bool = false;
						else if (res.cards.length > event.num)
							res.cards
								.sort((a, b) => {
									return b[2] - a[2];
								})
								.slice(0, event.num);
						return res;
					})();
					"step 1";
					player.chooseCardTarget({
						filterCard(card) {
							return get.itemtype(card) == "card" && !card.hasGaintag("miji_tag");
						},
						filterTarget: lib.filter.notMe,
						selectCard: [1, event.num],
						prompt: "请选择要分配的卡牌和目标",
						forced: event._forcing,
						ai1(card) {
							if (!_status.event.res.bool || ui.selected.cards.length) return 0;
							for (let arr of _status.event.res.cards) {
								if (arr[0] === card) return arr[2];
							}
							return 0;
						},
						ai2(target) {
							let card = ui.selected.cards[0];
							for (let arr of _status.event.res.cards) {
								if (arr[0] === card) return get.attitude(player, target);
							}
							let val = target.getUseValue(card);
							if (val > 0) return val * get.attitude(player, target) * 2;
							return get.value(card, target) * get.attitude(player, target);
						},
						res: event.aicheck,
					});
					"step 2";
					if (result.bool) {
						event._forcing = true;
						var res = result.cards,
							target = result.targets[0].playerid;
						player.addGaintag(res, "miji_tag");
						event.num -= res.length;
						if (!event.given_map[target]) event.given_map[target] = [];
						event.given_map[target].addArray(res);
						if (event.num > 0) event.goto(1);
					}
					"step 3";
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					var map = [],
						cards = [];
					for (var i in event.given_map) {
						var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						if (player !== source && (get.mode() !== "identity" || player.identity !== "nei")) player.addExpose(0.18);
						map.push([source, event.given_map[i]]);
						cards.addArray(event.given_map[i]);
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
					threaten: function (player, target) {
						return 0.6 + 0.7 * target.getDamagedHp();
					},
					effect: {
						target: function (card, player, target) {
							if (target.hp <= 2 && get.tag(card, "damage")) {
								var num = 1;
								if (
									get.itemtype(player) == "player" &&
									player.hasSkillTag("damageBonus", false, {
										target: target,
										card: card,
									}) &&
									!target.hasSkillTag("filterDamage", null, {
										player: player,
										card: card,
									})
								)
									num = 2;
								if (target.hp > num) return [1, 1];
							}
						},
					},
				},
			},
			zhenlie: {
				audio: 2,
				audioname: ["re_wangyi"],
				filter: function (event, player) {
					return event.player != player && event.card && (event.card.name == "sha" || get.type(event.card) == "trick");
				},
				logTarget: "player",
				check: function (event, player) {
					if (event.getParent().excluded.includes(player)) return false;
					if (get.attitude(player, event.player) > 0 || (player.hp < 2 && !get.tag(event.card, "damage"))) return false;
					let evt = event.getParent(),
						directHit = (evt.nowuxie && get.type(event.card, "trick") === "trick") || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
					if (get.tag(event.card, "respondSha")) {
						if (directHit || player.countCards("h", { name: "sha" }) === 0) return true;
					} else if (get.tag(event.card, "respondShan")) {
						if (directHit || player.countCards("h", { name: "shan" }) === 0) return true;
					} else if (get.tag(event.card, "damage")) {
						if (event.card.name === "huogong") return event.player.countCards("h") > 4 - player.hp - player.hujia;
						if (event.card.name === "shuiyanqijunx") return player.countCards("e") === 0;
						return true;
					} else if (player.hp > 2) {
						if (event.card.name === "shunshou" || (event.card.name === "zhujinqiyuan" && (event.card.yingbian || get.distance(event.player, player) < 0))) return true;
					}
					return false;
				},
				trigger: { target: "useCardToTargeted" },
				content: function () {
					"step 0";
					if (get.attitude(player, trigger.player) < 0 && trigger.player.countDiscardableCards(player, "he")) player.addTempSkill("zhenlie_lose");
					player.loseHp();
					"step 1";
					player.removeSkill("zhenlie_lose");
					trigger.getParent().excluded.add(player);
					"step 2";
					if (trigger.player.countCards("he")) {
						if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.12);
						player.discardPlayerCard(trigger.player, "he", true);
					}
				},
				subSkill: {
					lose: {
						charlotte: true,
					},
				},
				ai: {
					filterDamage: true,
					skillTagFilter: (player, tag, arg) => {
						return arg && arg.jiu == true;
					},
					effect: {
						target: (card, player, target) => {
							if (target.hp <= 0 && target.hasSkill("zhenlie_lose") && get.tag(card, "recover")) return [1, 1.2];
						},
					},
				},
			},
			//吾彦...
			wuyan: { audio: 2 },
			xswuyan: {
				audio: "wuyan",
				trigger: { target: "useCardToBefore", player: "useCardToBefore" },
				forced: true,
				check: function (event, player) {
					return get.effect(event.target, event.card, event.player, player) < 0;
				},
				filter: function (event, player) {
					if (!event.target) return false;
					if (event.player == player && event.target == player) return false;
					return get.type(event.card) == "trick";
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "trick" && player != target) return "zeroplayertarget";
						},
						player: function (card, player, target, current) {
							if (get.type(card) == "trick" && player != target) return "zeroplayertarget";
						},
					},
				},
			},
			xinwuyan: {
				audio: 2,
				trigger: { source: "damageBegin2", player: "damageBegin4" },
				forced: true,
				check: function (event, player) {
					if (player == event.player) return true;
					return false;
				},
				filter: function (event, player) {
					return get.type(event.card, "trick") == "trick";
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					notrick: true,
					notricksource: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "trick" && get.tag(card, "damage")) {
								return "zeroplayertarget";
							}
						},
						player: function (card, player, target, current) {
							if (get.type(card) == "trick" && get.tag(card, "damage")) {
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			xinjujian: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					return player.countCards("he") > player.countCards("he", { type: "basic" });
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterTarget: function (card, player, target) {
							return player != target;
						},
						filterCard: function (card, player) {
							return get.type(card) != "basic" && lib.filter.cardDiscardable(card, player);
						},
						ai1: function (card) {
							if (get.tag(card, "damage") && get.type(card) == "trick") {
								return 20;
							}
							return 9 - get.value(card);
						},
						ai2: function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 0) {
								if (target.isTurnedOver()) att += 3;
								if (target.hp == 1) att += 3;
							}
							return att;
						},
						position: "he",
						prompt: get.prompt2("xinjujian"),
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("xinjujian", target);
						player.discard(result.cards);
						if (target.hp == target.maxHp && !target.isTurnedOver() && !target.isLinked()) {
							target.draw(2);
							event.finish();
						} else {
							var controls = ["draw_card"];
							if (target.hp < target.maxHp) {
								controls.push("recover_hp");
							}
							if (target.isLinked() | target.isTurnedOver()) {
								controls.push("reset_character");
							}
							target.chooseControl(controls).ai = function () {
								if (target.isTurnedOver()) {
									return "reset_character";
								} else if (target.hp == 1 && target.maxHp > 2) {
									return "recover_hp";
								} else if (target.hp == 2 && target.maxHp > 2 && target.countCards("h") > 1) {
									return "recover_hp";
								} else {
									return "draw_card";
								}
							};
						}
					} else {
						event.finish();
					}
					"step 2";
					event.control = result.control;
					switch (event.control) {
						case "recover_hp":
							event.target.recover();
							event.finish();
							break;
						case "draw_card":
							event.target.draw(2);
							event.finish();
							break;
						case "reset_character":
							if (event.target.isTurnedOver()) event.target.turnOver();
							break;
					}
					"step 3";
					if (event.control == "reset_character" && event.target.isLinked()) {
						event.target.link();
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.4,
				},
			},
			jujian: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filterCard: true,
				position: "he",
				selectCard: [1, 3],
				check: function (card) {
					var player = get.owner(card);
					if (get.type(card) == "trick") return 10;
					if (player.countCards("h") - player.hp - ui.selected.cards.length > 0) {
						return 8 - get.value(card);
					}
					return 4 - get.value(card);
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					target.draw(cards.length);
					if (cards.length == 3) {
						if (get.type(cards[0], "trick") == get.type(cards[1], "trick") && get.type(cards[0], "trick") == get.type(cards[2], "trick")) {
							player.recover();
						}
					}
				},
				ai: {
					expose: 0.2,
					order: 1,
					result: {
						target: 1,
					},
				},
			},
			yizhong: {
				trigger: { target: "shaBefore" },
				forced: true,
				audio: 2,
				filter: function (event, player) {
					if (!player.hasEmptySlot(2)) return false;
					return event.card.name == "sha" && get.color(event.card) == "black";
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (player == target && get.subtypes(card).includes("equip2")) {
								if (get.equipValue(card) <= 8) return 0;
							}
							if (!player.hasEmptySlot(2)) return;
							if (card.name == "sha" && get.color(card) == "black") return "zerotarget";
						},
					},
				},
			},
			jueqing: {
				audio: 2,
				audioname: ["ol_zhangchunhua"],
				trigger: { source: "damageBefore" },
				forced: true,
				content: function () {
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
				ai: {
					jueqing: true,
				},
			},
			shangshi: {
				audio: 2,
				audioname: ["ol_zhangchunhua"],
				audioname2: {
					re_zhangchunhua: "reshangshi",
				},
				trigger: {
					player: ["loseAfter", "changeHp", "gainMaxHpAfter", "loseMaxHpAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				frequent: true,
				filter: function (event, player) {
					if (event.getl && !event.getl(player)) return false;
					return player.countCards("h") < player.getDamagedHp();
				},
				content: function () {
					player.draw(player.getDamagedHp() - player.countCards("h"));
				},
				ai: {
					noh: true,
					skillTagFilter: function (player, tag) {
						if (tag == "noh" && player.maxHp - player.hp < player.countCards("h")) {
							return false;
						}
					},
				},
			},
			luoying: {
				//unique:true,
				//gainable:true,
				group: ["luoying_discard", "luoying_judge"],
				subfrequent: ["judge"],
				subSkill: {
					discard: {
						audio: 2,
						trigger: { global: "loseAfter" },
						filter: function (event, player) {
							if (event.type != "discard" || event.getlx === false) return false;
							var cards = event.cards.slice(0);
							var evt = event.getl(player);
							if (evt && evt.cards) cards.removeArray(evt.cards);
							for (var i = 0; i < cards.length; i++) {
								if (cards[i].original != "j" && get.suit(cards[i], event.player) == "club" && get.position(cards[i], true) == "d") {
									return true;
								}
							}
							return false;
						},
						direct: true,
						content: function () {
							"step 0";
							if (trigger.delay == false) game.delay();
							"step 1";
							var cards = [],
								cards2 = trigger.cards.slice(0),
								evt = trigger.getl(player);
							if (evt && evt.cards) cards2.removeArray(evt.cards);
							for (var i = 0; i < cards2.length; i++) {
								if (cards2[i].original != "j" && get.suit(cards2[i], trigger.player) == "club" && get.position(cards2[i], true) == "d") {
									cards.push(cards2[i]);
								}
							}
							if (cards.length) {
								player.chooseButton(["落英：选择要获得的牌", cards], [1, cards.length]).set("ai", function (button) {
									return get.value(button.link, _status.event.player, "raw");
								});
							}
							"step 2";
							if (result.bool) {
								player.logSkill(event.name);
								player.gain(result.links, "gain2", "log");
							}
						},
					},
					judge: {
						audio: 2,
						trigger: { global: "cardsDiscardAfter" },
						//frequent:'check',
						direct: true,
						filter: function (event, player) {
							var evt = event.getParent().relatedEvent;
							if (!evt || evt.name != "judge") return;
							if (evt.player == player) return false;
							if (get.position(event.cards[0], true) != "d") return false;
							return get.suit(event.cards[0]) == "club";
						},
						content: function () {
							"step 0";
							player.chooseButton(["落英：选择要获得的牌", trigger.cards], [1, trigger.cards.length]).set("ai", function (button) {
								return get.value(button.link, _status.event.player, "raw");
							});
							"step 1";
							if (result.bool) {
								player.logSkill(event.name);
								player.gain(result.links, "gain2", "log");
							}
						},
					},
				},
			},
			jiushi: {
				audio: "jiushi1",
				group: ["jiushi1", "jiushi2", "jiushi3"],
			},
			jiushi1: {
				audio: 2,
				enable: "chooseToUse",
				sourceSkill: "jiushi",
				hiddenCard: function (player, name) {
					if (name == "jiu") return !player.isTurnedOver();
					return false;
				},
				filter: function (event, player) {
					if (player.classList.contains("turnedover")) return false;
					return event.filterCard({ name: "jiu", isCard: true }, player, event);
				},
				content: function () {
					if (_status.event.getParent(2).type == "dying") {
						event.dying = player;
						event.type = "dying";
					}
					player.turnOver();
					player.useCard({ name: "jiu", isCard: true }, player);
				},
				ai: {
					order: 5,
					result: {
						player: function (player) {
							if (_status.event.parent.name == "phaseUse") {
								if (player.countCards("h", "jiu") > 0) return 0;
								if (player.getEquip("zhuge") && player.countCards("h", "sha") > 1) return 0;
								if (!player.countCards("h", "sha")) return 0;
								var targets = [];
								var target;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (get.attitude(player, players[i]) < 0) {
										if (player.canUse("sha", players[i], true, true)) {
											targets.push(players[i]);
										}
									}
								}
								if (targets.length) {
									target = targets[0];
								} else {
									return 0;
								}
								var num = get.effect(target, { name: "sha" }, player, player);
								for (var i = 1; i < targets.length; i++) {
									var num2 = get.effect(targets[i], { name: "sha" }, player, player);
									if (num2 > num) {
										target = targets[i];
										num = num2;
									}
								}
								if (num <= 0) return 0;
								var e2 = target.getEquip(2);
								if (e2) {
									if (e2.name == "tengjia") {
										if (!player.countCards("h", { name: "sha", nature: "fire" }) && !player.getEquip("zhuque")) return 0;
									}
									if (e2.name == "renwang") {
										if (!player.countCards("h", { name: "sha", color: "red" })) return 0;
									}
									if (e2.name == "baiyin") return 0;
								}
								if (player.getEquip("guanshi") && player.countCards("he") > 2) return 1;
								return target.countCards("h") > 3 ? 0 : 1;
							}
							if (player == _status.event.dying || player.isTurnedOver()) return 3;
						},
					},
					effect: {
						target: function (card, player, target) {
							if (card.name == "guiyoujie") return [0, 0.5];
							if (target.isTurnedOver()) {
								if (get.tag(card, "damage")) {
									if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
									if (target.hp == 1) return;
									return [1, target.countCards("h") / 2];
								}
							}
						},
					},
				},
			},
			jiushi2: {
				trigger: { player: "damageBegin3" },
				silent: true,
				firstDo: true,
				sourceSkill: "jiushi",
				filter: function (event, player) {
					return player.classList.contains("turnedover");
				},
				content: function () {
					trigger.jiushi = true;
				},
			},
			jiushi3: {
				audio: "jiushi1",
				trigger: { player: "damageEnd" },
				sourceSkill: "jiushi",
				check: function (event, player) {
					return player.isTurnedOver();
				},
				prompt: "是否发动【酒诗】，将武将牌翻面？",
				filter: function (event, player) {
					if (event.jiushi) {
						return true;
					}
					return false;
				},
				content: function () {
					delete trigger.jiushi;
					player.turnOver();
				},
			},
			zongshi: {
				audio: 2,
				mod: {
					maxHandcard: function (player, num) {
						return num + game.countGroup();
					},
				},
			},
			zishou: {
				audio: 2,
				audioname: ["re_liubiao"],
				trigger: { player: "phaseDrawBegin2" },
				check: function (event, player) {
					return player.countCards("h") <= (player.hasSkill("zongshi") ? player.maxHp : player.hp - 2) || player.skipList.includes("phaseUse");
				},
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					trigger.num += game.countGroup();
					player.addTempSkill("zishou2");
				},
				ai: {
					threaten: 1.5,
				},
			},
			zishou2: {
				mod: {
					playerEnabled: function (card, player, target) {
						if (player != target) return false;
					},
				},
			},
			olddanshou: {
				audio: "danshou",
				trigger: { source: "damageSource" },
				//priority:9,
				check: function (event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content: function () {
					"step 0";
					player.draw();
					var cards = Array.from(ui.ordering.childNodes);
					while (cards.length) {
						cards.shift().discard();
					}
					"step 1";
					var evt = _status.event.getParent("phase");
					if (evt) {
						game.resetSkills();
						_status.event = evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				},
				ai: {
					jueqing: true,
				},
			},
			danshou: {
				enable: "phaseUse",
				filterCard: true,
				position: "he",
				audio: 2,
				filter: function (event, player) {
					var num = player.getStat().skill.danshou;
					if (num) {
						num++;
					} else {
						num = 1;
					}
					return player.countCards("he") >= num;
				},
				check: function (card) {
					if (ui.selected.cards.length >= 2) {
						return 4 - get.value(card);
					}
					return 6 - get.value(card);
				},
				selectCard: function (card) {
					var num = _status.event.player.getStat().skill.danshou;
					if (num) return num + 1;
					return 1;
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var num = player.getStat().skill.danshou;
					if (num) {
						num++;
					} else {
						num = 1;
					}
					if (num <= 2 && !target.countCards("he")) return false;
					return player.inRange(target);
				},
				content: function () {
					"step 0";
					var num = player.getStat().skill.danshou;
					switch (num) {
						case 1:
							player.discardPlayerCard(target, true);
							break;
						case 2:
							target.chooseCard("选择一张牌交给" + get.translation(player), "he", true);
							break;
						case 3:
							target.damage("nocard");
							break;
						default:
							game.asyncDraw([player, target], 2);
					}
					if (num != 2) event.finish();
					"step 1";
					if (result.cards) {
						target.give(result.cards, player);
					}
				},
				ai: {
					order: 8.6,
					result: {
						target: function (player, target) {
							var num = player.getStat().skill.danshou;
							if (num) {
								num++;
							} else {
								num = 1;
							}
							if (num > 3) return 0;
							if (num == 3) return get.damageEffect(target, player, target);
							return -1;
						},
					},
				},
			},
			qice: {
				audio: 2,
				audioname: ["clan_xunyou", "pot_huanjie"],
				enable: "phaseUse",
				filter: function (event, player) {
					const hs = player.getCards("h");
					if (!hs.length) return false;
					if (
						hs.some(card => {
							const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
							return mod2 === false;
						})
					)
						return false;
					return lib.inpile.some(name => {
						if (get.type(name) != "trick") return false;
						const card = get.autoViewAs({ name }, hs);
						return event.filterCard(card, player, event);
					});
				},
				usable: 1,
				chooseButton: {
					dialog: function (player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							if (get.type(lib.inpile[i]) == "trick") list.push(["锦囊", "", lib.inpile[i]]);
						}
						return ui.create.dialog(get.translation("qice"), [list, "vcard"]);
					},
					filter: function (button, player) {
						const event = _status.event.getParent(),
							card = get.autoViewAs(
								{
									name: button.link[2],
								},
								player.getCards("h")
							);
						return event.filterCard(card, player, event);
					},
					check: function (button) {
						var player = _status.event.player;
						var recover = 0,
							lose = 1,
							players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
								return button.link[2] == "juedou" ? 2 : -1;
							}
							if (!players[i].isOut()) {
								if (players[i].hp < players[i].maxHp) {
									if (get.attitude(player, players[i]) > 0) {
										if (players[i].hp < 2) {
											lose--;
											recover += 0.5;
										}
										lose--;
										recover++;
									} else if (get.attitude(player, players[i]) < 0) {
										if (players[i].hp < 2) {
											lose++;
											recover -= 0.5;
										}
										lose++;
										recover--;
									}
								} else {
									if (get.attitude(player, players[i]) > 0) {
										lose--;
									} else if (get.attitude(player, players[i]) < 0) {
										lose++;
									}
								}
							}
						}
						if (lose > recover && lose > 0) return button.link[2] == "nanman" ? 1 : -1;
						if (lose < recover && recover > 0) return button.link[2] == "taoyuan" ? 1 : -1;
						return button.link[2] == "wuzhong" ? 1 : -1;
					},
					backup: function (links, player) {
						return {
							audio: "qice",
							audioname: ["clan_xunyou"],
							filterCard: true,
							selectCard: -1,
							position: "h",
							popname: true,
							viewAs: { name: links[0][2] },
						};
					},
					prompt: function (links, player) {
						return "将全部手牌当作" + get.translation(links[0][2]) + "使用";
					},
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							var num = 0;
							var cards = player.getCards("h");
							if (cards.length >= 3 && player.hp >= 3) return 0;
							for (var i = 0; i < cards.length; i++) {
								num += Math.max(0, get.value(cards[i], player, "raw"));
							}
							num /= cards.length;
							num *= Math.min(cards.length, player.hp);
							return 12 - num;
						},
					},
					nokeep: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag === "nokeep") return (!arg || (arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && !player.getStat("skill").qice && player.hasCard(card => get.name(card) != "tao", "h");
					},
					threaten: 1.6,
				},
			},
			zhiyu: {
				audio: 2,
				trigger: { player: "damageEnd" },
				preHidden: true,
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					if (!player.countCards("h")) event.finish();
					else player.showHandcards();
					"step 2";
					if (!trigger.source) return;
					var cards = player.getCards("h");
					var color = get.color(cards[0], player);
					for (var i = 1; i < cards.length; i++) {
						if (get.color(cards[i], player) != color) return;
					}
					trigger.source.chooseToDiscard(true);
				},
				ai: {
					maixie_defend: true,
					threaten: 0.9,
				},
			},
			xuanfeng: {
				audio: 2,
				audioname: ["boss_lvbu3"],
				audioname2: { re_heqi: "fenwei_heqi" },
				trigger: {
					player: ["loseAfter", "phaseDiscardEnd"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				direct: true,
				filter: function (event, player) {
					if (event.name == "phaseDiscard") {
						var cards = [];
						player.getHistory("lose", function (evt) {
							if (evt && evt.type == "discard" && evt.getParent("phaseDiscard") == event && evt.hs) cards.addArray(evt.hs);
						});
						return cards.length > 1;
					} else {
						var evt = event.getl(player);
						return evt && evt.es && evt.es.length > 0;
					}
				},
				content: function () {
					"step 0";
					event.count = 2;
					event.logged = false;
					"step 1";
					player
						.chooseTarget(get.prompt("xuanfeng"), "弃置一名其他角色的一张牌", function (card, player, target) {
							if (player == target) return false;
							return target.countDiscardableCards(player, "he");
						})
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 2";
					if (result.bool) {
						if (!event.logged) {
							player.logSkill("xuanfeng", result.targets);
							event.logged = true;
						} else player.line(result.targets[0], "green");
						player.discardPlayerCard(result.targets[0], "he", true);
						event.count--;
					} else event.finish();
					"step 3";
					if (event.count) event.goto(1);
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, 3];
						},
					},
					reverseEquip: true,
					noe: true,
				},
			},
			jiangchi: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				direct: true,
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					"step 0";
					player.chooseControl("jiangchi_less", "jiangchi_more", "cancel2", function () {
						var player = _status.event.player;
						if (player.countCards("h") > 3 && player.countCards("h", "sha") > 1) {
							return "jiangchi_less";
						}
						if (player.countCards("h", "sha") > 2) {
							return "jiangchi_less";
						}
						if (player.hp - player.countCards("h") > 1) {
							return "jiangchi_more";
						}
						return "cancel2";
					});
					"step 1";
					if (result.control == "jiangchi_less") {
						trigger.num--;
						player.addTempSkill("jiangchi2", "phaseUseEnd");
						player.logSkill("jiangchi");
					} else if (result.control == "jiangchi_more") {
						trigger.num++;
						player.addTempSkill("jiangchi3", "phaseUseEnd");
						player.logSkill("jiangchi");
					}
				},
			},
			jiangchi2: {
				mod: {
					targetInRange: function (card, player, target, now) {
						if (card.name == "sha") return true;
					},
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return num + 1;
					},
				},
			},
			jiangchi3: {
				mod: {
					cardEnabled2(card) {
						if (card.name == "sha") return false;
					},
				},
			},
			xinzhan: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("h") > player.maxHp;
				},
				usable: 1,
				content: function () {
					"step 0";
					var cards = get.cards(3);
					event.cards = cards;
					var next = player.chooseCardButton(cards, "选择获得的红桃牌", [1, Infinity]).set("filterButton", function (button) {
						return get.suit(button.link) == "heart";
					});
					"step 1";
					if (result.bool) {
						player.gain(result.links, "draw");
					}
					for (var i = event.cards.length - 1; i >= 0; i--) {
						if (!result.bool || !result.links.includes(event.cards[i])) {
							ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
						}
					}
				},
				ai: {
					order: 11,
					result: {
						player: 1,
					},
				},
			},
			huilei: {
				audio: 2,
				trigger: { player: "die" },
				forced: true,
				forceDie: true,
				filter: function (event) {
					return event.source && event.source.isIn();
				},
				logTarget: "source",
				skillAnimation: true,
				animationColor: "thunder",
				content: function () {
					trigger.source.discard(trigger.source.getCards("he"));
				},
				ai: {
					threaten: 0.7,
				},
			},
			xinenyuan: {
				audio: 2,
				group: ["xinenyuan1", "xinenyuan2"],
			},
			xinenyuan1: {
				audio: true,
				trigger: { player: "gainEnd" },
				sourceSkill: "xinenyuan",
				filter: function (event, player) {
					return event.source && event.source.isIn() && event.source != player && event.cards.length >= 2;
				},
				logTarget: "source",
				check: function (event, player) {
					return get.attitude(player, event.source) > 0;
				},
				prompt2: function (event, player) {
					return "令" + get.translation(event.source) + "摸一张牌";
				},
				content: function () {
					trigger.source.draw();
				},
			},
			xinenyuan2: {
				audio: true,
				trigger: { player: "damageEnd" },
				sourceSkill: "xinenyuan",
				check: function (event, player) {
					var att = get.attitude(player, event.source);
					var num = event.source.countCards("h");
					if (att <= 0) return true;
					if (num > 2) return true;
					if (num) return att < 4;
					return false;
				},
				filter: function (event, player) {
					return event.source && event.source != player && event.num > 0 && event.source.isIn();
				},
				logTarget: "source",
				prompt2: function (event, player) {
					return "令" + get.translation(event.source) + "交给你一张手牌或失去1点体力";
				},
				content: function () {
					"step 0";
					event.num = trigger.num;
					"step 1";
					trigger.source.chooseCard("选择一张手牌交给" + get.translation(player) + "，或点“取消”失去1点体力").set("ai", function (card) {
						var player = _status.event.getParent().player,
							source = _status.event.player;
						if (get.effect(source, { name: "losehp" }, source, source) >= 0) return 0;
						if (get.attitude(player, source) > 0) return 11 - get.value(card);
						return 7 - get.value(card);
					});
					"step 2";
					if (result.bool) {
						trigger.source.give(result.cards, player);
					} else {
						trigger.source.loseHp();
					}
					if (event.num > 1 && player.hasSkill("xinenyuan") && trigger.source && trigger.source.isIn()) {
						player.logSkill("xinenyuan", trigger.source);
						event.num--;
						event.goto(1);
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
							if (!target.hasFriend()) return;
							if (get.tag(card, "damage")) return [1, 0, 0, -0.7];
						},
					},
				},
			},
			enyuan: {
				audio: 4,
				locked: true,
				group: ["enyuan1", "enyuan2"],
			},
			enyuan1: {
				audio: "enyuan",
				logAudio: () => ["enyuan3.mp3", "enyuan4.mp3"],
				trigger: { player: "damageEnd" },
				forced: true,
				sourceSkill: "enyuan",
				filter: function (event, player) {
					return event.source && event.source != player && event.source.isIn();
				},
				logTarget: "source",
				content: function () {
					"step 0";
					trigger.source
						.chooseCard("选择一张红桃牌交给" + get.translation(player) + "，或点“取消”失去1点体力", function (card) {
							return get.suit(card) == "heart";
						})
						.set("ai", function (card) {
							var player = _status.event.getParent().player,
								source = _status.event.player;
							if (get.effect(source, { name: "losehp" }, source, source) >= 0) return 0;
							if (get.attitude(player, source) > 0) return 11 - get.value(card);
							return 7 - get.value(card);
						});
					"step 1";
					if (result.bool) {
						trigger.source.give(result.cards, player);
					} else {
						trigger.source.loseHp();
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							if (get.tag(card, "damage")) return [1, 0, 0, -1];
						},
					},
				},
			},
			enyuan2: {
				audio: "enyuan",
				logAudio: () => ["enyuan1.mp3", "enyuan2.mp3"],
				trigger: { player: "recoverEnd" },
				forced: true,
				logTarget: "source",
				sourceSkill: "enyuan",
				filter: function (event, player) {
					return event.source && event.source != player && event.source.isIn();
				},
				content: function () {
					"step 0";
					event.num = trigger.num;
					"step 1";
					if (event.num > 0) {
						// 临时修改（by 棘手怀念摧毁）
						// player.logSkill("enyuan1", trigger.source);
						trigger.source.draw();
						event.num--;
						event.redo();
					}
				},
			},
			xuanhuo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				discard: false,
				lose: false,
				delay: 0,
				filter: function (event, player) {
					return player.countCards("he", { suit: "heart" });
				},
				filterCard: function (card) {
					return get.suit(card) == "heart";
				},
				filterTarget: function (card, player, target) {
					if (game.countPlayer() == 2) return false;
					return player != target;
				},
				check: function (card) {
					var player = get.owner(card);
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (players[i] != player && get.attitude(player, players[i]) > 3) break;
					}
					if (i == players.length) return -1;
					return 5 - get.value(card);
				},
				content: function () {
					"step 0";
					player.give(cards, target);
					// game.delay();
					"step 1";
					player.gainPlayerCard(target, "he", true);
					"step 2";
					var source = target;
					event.card = result.links[0];
					if (player.getCards("h").includes(event.card))
						player
							.chooseTarget("将" + get.translation(event.card) + "交给另一名其他角色", function (card, player, target) {
								return target != _status.event.sourcex && target != player;
							})
							.set("ai", function (target) {
								return get.attitude(_status.event.player, target);
							})
							.set("sourcex", target);
					else event.finish();
					"step 3";
					if (result.bool) {
						player.give(card, result.targets[0], "give");
						game.delay();
					}
				},
				ai: {
					result: {
						target: -0.5,
					},
					basic: {
						order: 9,
					},
				},
			},
			ganlu: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				selectTarget: 2,
				filterTarget: function (card, player, target) {
					if (target.isMin()) return false;
					if (ui.selected.targets.length == 0) return true;
					if (ui.selected.targets[0].countCards("e") == 0 && target.countCards("e") == 0) return false;
					return Math.abs(ui.selected.targets[0].countCards("e") - target.countCards("e")) <= player.maxHp - player.hp;
				},
				multitarget: true,
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
									if (delta <= num) {
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
					effect: {
						target: function (card, player, target) {
							if (target.hp == target.maxHp && get.tag(card, "damage")) return 0.2;
						},
					},
				},
			},
			buyi: {
				trigger: { global: "dying" },
				//priority:6,
				audio: 2,
				audioname: ["re_wuguotai"],
				filter: function (event, player) {
					return event.player.hp <= 0 && event.player.countCards("h") > 0;
				},
				direct: true,
				content: function () {
					"step 0";
					var check;
					if (trigger.player.isUnderControl(true, player)) {
						check = player.hasCard(function (card) {
							return get.type(card) != "basic";
						});
					} else {
						check = get.attitude(player, trigger.player) > 0;
					}
					player
						.choosePlayerCard(trigger.player, get.prompt("buyi", trigger.player), "h")
						.set("ai", function (button) {
							if (!_status.event.check) return 0;
							if (_status.event.target.isUnderControl(true, _status.event.player)) {
								if (get.type(button.link) != "basic") {
									return 10 - get.value(button.link);
								}
								return 0;
							} else {
								return Math.random();
							}
						})
						.set("check", check)
						.set("filterButton", function (button) {
							if (_status.event.player == _status.event.target) {
								return lib.filter.cardDiscardable(button.link, _status.event.player);
							}
							return true;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("buyi", trigger.player);
						event.card = result.links[0];
						player.showCards([event.card], get.translation(player) + "展示的手牌");
					} else {
						event.finish();
					}
					"step 2";
					if (get.type(event.card) != "basic") {
						trigger.player.recover();
						trigger.player.discard(event.card);
					}
				},
				ai: {
					threaten: 1.4,
				},
			},
			pojun: {
				audio: 2,
				trigger: { source: "damageSource" },
				check: function (event, player) {
					if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
					if (event.player.hp < 3) {
						return get.attitude(player, event.player) < 0;
					}
					return get.attitude(player, event.player) > 0;
				},
				filter: function (event) {
					if (event._notrigger.includes(event.player)) return false;
					return event.card && event.card.name == "sha" && event.player.isIn();
				},
				logTarget: "player",
				content: function () {
					"step 0";
					trigger.player.draw(Math.min(5, trigger.player.hp));
					"step 1";
					trigger.player.turnOver();
				},
			},
			jingce: {
				trigger: { player: "phaseUseEnd" },
				frequent: true,
				filter: function (event, player) {
					return player.countUsed(null, true) >= player.hp;
				},
				content: function () {
					player.draw(2);
				},
				audio: 2,
			},
			xinjingce: {
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				filter: function (event, player) {
					return player.countUsed(null, true) >= player.hp;
				},
				content: function () {
					player.draw(2);
				},
				audio: 2,
			},
			oldchengxiang: {
				audio: "chengxiang",
				inherit: "chengxiang",
			},
			chengxiang: {
				trigger: { player: "damageEnd" },
				//direct:true,
				frequent: true,
				audio: 2,
				content: function () {
					"step 0";
					event.cards = get.cards(4);
					game.cardsGotoOrdering(event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards, num) {
							var str;
							if (player == game.me && !_status.auto) {
								str = "称象：选择任意张点数不大于" + num + "的牌";
							} else {
								str = "称象";
							}
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards,
						event.name == "oldchengxiang" ? 12 : 13
					);
					event.time = get.utc();
					game.addVideo("showCards", player, ["称象", get.cardsInfo(event.cards)]);
					game.addVideo("delay", null, 2);
					"step 1";
					var next = player.chooseButton([0, 4]);
					next.set("dialog", event.videoId);
					next.set("filterButton", function (button) {
						var num = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							num += get.number(ui.selected.buttons[i].link);
						}
						return num + get.number(button.link) <= _status.event.maxNum;
					});
					next.set("maxNum", event.name == "oldchengxiang" ? 12 : 13);
					next.set("ai", function (button) {
						let player = _status.event.player,
							name = get.name(button.link),
							val = get.value(button.link, player);
						if (name === "tao") return val + 2 * Math.min(3, 1 + player.getDamagedHp());
						if (name === "jiu" && player.hp < 3) return val + 2 * (2.8 - player.hp);
						if (name === "wuxie" && player.countCards("j") && !player.hasWuxie()) return val + 5;
						if (player.hp > 1 && player.hasSkill("renxin") && player.hasFriend() && get.type(button.link) === "equip") return val + 4;
						return val;
					});
					"step 2";
					if (result.bool && result.links) {
						//player.logSkill('chengxiang');
						var cards2 = [];
						for (var i = 0; i < result.links.length; i++) {
							cards2.push(result.links[i]);
							cards.remove(result.links[i]);
						}
						event.cards2 = cards2;
					} else {
						event.finish();
					}
					var time = 1000 - (get.utc() - event.time);
					if (time > 0) {
						game.delay(0, time);
					}
					"step 3";
					game.broadcastAll("closeDialog", event.videoId);
					var cards2 = event.cards2;
					player.gain(cards2, "log", "gain2");
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [1, 2];
								if (target.hp == 3) return [1, 1.5];
								if (target.hp == 2) return [1, 0.5];
							}
						},
					},
				},
			},
			oldrenxin: {
				audio: "renxin",
				trigger: { global: "dying" },
				//priority:6,
				filter: function (event, player) {
					return event.player != player && event.player.hp <= 0 && player.countCards("h") > 0;
				},
				check: function (event, player) {
					if (get.attitude(player, event.player) <= 0) return false;
					if (player.countCards("h", { name: ["tao", "jiu"] }) + event.player.hp < 0) return false;
					return true;
				},
				content: function () {
					"step 0";
					player.turnOver();
					"step 1";
					player.give(player.getCards("h"), trigger.player);
					"step 2";
					trigger.player.recover();
				},
			},
			renxin: {
				trigger: { global: "damageBegin4" },
				audio: 2,
				audioname: ["re_caochong"],
				//priority:6,
				filter: function (event, player) {
					return event.player != player && event.player.hp == 1 && player.countCards("he", { type: "equip" }) > 0;
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard(get.prompt("renxin", trigger.player), "弃置一张装备牌并将武将牌翻面，然后防止" + get.translation(trigger.player) + "受到的伤害", { type: "equip" }, "he");
					next.logSkill = ["renxin", trigger.player];
					next.set("ai", function (card) {
						var player = _status.event.player;
						if (get.attitude(player, _status.event.getTrigger().player) > 3) {
							return 11 - get.value(card);
						}
						return -1;
					});
					"step 1";
					if (result.bool) {
						player.turnOver();
					} else {
						event.finish();
					}
					"step 2";
					trigger.cancel();
				},
				ai: {
					expose: 0.5,
				},
			},
			yuce: {
				audio: 2,
				audioname: ["re_manchong"],
				trigger: { player: "damageEnd" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					var next = player.chooseCard(get.prompt2("yuce"));
					next.set("ai", function (card) {
						if (get.type(card) == "basic") return 1;
						return Math.abs(get.value(card)) + 1;
					});
					"step 1";
					if (result.bool) {
						player.logSkill("yuce");
						player.showCards(result.cards);
						var type = get.type(result.cards[0], "trick");
						if (trigger.source) {
							trigger.source
								.chooseToDiscard("弃置一张不为" + get.translation(type) + "牌的牌或令" + get.translation(player) + "回复1点体力", function (card) {
									return get.type(card, "trick") != _status.event.type;
								})
								.set("ai", function (card) {
									if (get.recoverEffect(_status.event.getParent().player, _status.event.player, _status.event.player) < 0) {
										return 7 - get.value(card);
									}
									return 0;
								})
								.set("type", type);
						} else {
							event.recover = true;
						}
					} else {
						event.finish();
					}
					"step 2";
					if (event.recover || !result.bool) {
						player.recover();
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage" && target.countCards("h"))) {
								return 0.8;
							}
						},
					},
				},
			},
			xiansi: {
				audio: 2,
				audioname: ["re_liufeng"],
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(
						get.prompt2(event.name),
						[1, 2],
						function (card, player, target) {
							return target.countCards("he") > 0;
						},
						function (target) {
							return -get.attitude(_status.event.player, target);
						}
					);
					"step 1";
					if (result.bool) {
						result.targets.sortBySeat();
						player.logSkill(event.name, result.targets);
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets.length) {
						var target = event.targets.shift();
						event.current = target;
						player.choosePlayerCard(target, true);
					} else {
						event.finish();
					}
					"step 3";
					if (result.bool) {
						player.addToExpansion(result.cards, event.current, "give").gaintag.add("xiansi");
						event.goto(2);
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player) {
					var cards = player.getExpansions("xiansi");
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: {
					threaten: 2,
				},
				global: "xiansi2",
				group: "xiansix",
			},
			xiansix: {},
			xiansi2: {
				enable: "chooseToUse",
				audio: 2,
				audioname2: { re_liufeng: "rexiansi" },
				viewAs: { name: "sha", isCard: true },
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current.hasSkill("xiansix") && current.getExpansions("xiansi").length > 1 && event.filterTarget({ name: "sha" }, player, current);
					});
				},
				filterTarget: function (card, player, target) {
					var bool = false;
					var players = ui.selected.targets.slice(0);
					for (var i = 0; i < players.length; i++) {
						if (players[i].hasSkill("xiansix") && players[i].getExpansions("xiansi").length > 1) bool = true;
						break;
					}
					if (!bool && (!target.hasSkill("xiansix") || target.getExpansions("xiansi").length <= 1)) return false;
					return _status.event._backup.filterTarget.apply(this, arguments);
				},
				complexSelect: true,
				selectCard: -1,
				filterCard: function () {
					return false;
				},
				forceaudio: true,
				prompt: "弃置一名有【逆】的角色的两张【逆】，然后视为对包含其在内的角色使用【杀】。",
				delay: false,
				log: false,
				precontent: function () {
					"step 0";
					var targets = event.result.targets.filter(function (current) {
						return current.getExpansions("xiansi").length > 1 && current.hasSkill("xiansix");
					});
					if (targets.length == 1) {
						event.target = targets[0];
						event.goto(2);
					} else if (targets.length > 0) {
						player
							.chooseTarget(true, "选择弃置【陷嗣】牌的目标", function (card, player, target) {
								return _status.event.list.includes(target);
							})
							.set("list", targets)
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							});
					} else {
						event.finish();
					}
					"step 1";
					if (result.bool && result.targets.length) {
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					"step 2";
					if (event.target) {
						if (event.target.getExpansions("xiansi").length == 2) {
							event.directresult = event.target.getExpansions("xiansi").slice(0);
						} else {
							player.chooseCardButton("移去两张“逆”", 2, event.target.getExpansions("xiansi"), true);
						}
					} else {
						event.finish();
					}
					"step 3";
					if (event.directresult || result.bool) {
						player.logSkill("xiansi2_log", event.target);
						game.trySkillAudio("xiansi2", event.target, true);
						var links = event.directresult || result.links;
						target.loseToDiscardpile(links);
					}
				},
				ai: {
					order: function () {
						return get.order({ name: "sha" }) + 0.05;
					},
				},
				subSkill: { log: {} },
			},
			shibei: {
				trigger: { player: "damageEnd" },
				forced: true,
				audio: 2,
				audioname: ["xin_jushou"],
				check: function (event, player) {
					return player.getHistory("damage").indexOf(event) == 0;
				},
				content: function () {
					if (player.getHistory("damage").indexOf(trigger) > 0) {
						player.loseHp();
					} else {
						player.recover();
					}
				},
				subSkill: {
					damaged: {},
					ai: {},
				},
				ai: {
					maixie_defend: true,
					threaten: 0.9,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return;
							if (target.hujia) return;
							if (player._shibei_tmp) return;
							if (target.hasSkill("shibei_ai")) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (get.tag(card, "damage")) {
								if (target.getHistory("damage").length > 0) {
									return [1, -2];
								} else {
									if (get.attitude(player, target) > 0 && target.hp > 1) {
										return 0;
									}
									if (get.attitude(player, target) < 0 && !player.hasSkillTag("damageBonus")) {
										if (card.name == "sha") return;
										var sha = false;
										player._shibei_tmp = true;
										var num = player.countCards("h", function (card) {
											if (card.name == "sha") {
												if (sha) {
													return false;
												} else {
													sha = true;
												}
											}
											return get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
										});
										delete player._shibei_tmp;
										if (player.hasSkillTag("damage")) {
											num++;
										}
										if (num < 2) {
											var enemies = player.getEnemies();
											if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
												return;
											}
											return 0;
										}
									}
								}
							}
						},
					},
				},
			},
			shibei_old: {
				audio: 2,
				trigger: { player: "damageAfter" },
				forced: true,
				content: function () {
					"step 0";
					player.judge(function (card) {
						if (player.hasSkill("shibei2")) {
							if (get.color(card) == "black") return -1;
						} else {
							if (get.color(card) == "red") return 1;
						}
						return 0;
					});
					"step 1";
					if (result.judge > 0) {
						player.recover();
					} else if (result.judge < 0) {
						player.loseHp();
					}
					if (!player.hasSkill("shibei2")) {
						player.addTempSkill("shibei2");
					}
				},
			},
			shibei2: {},
			jianying: {
				audio: 2,
				locked: false,
				mod: {
					aiOrder: function (player, card, num) {
						if (typeof card == "object" && player.isPhaseUsing()) {
							var evt = player.getLastUsed();
							if (!evt || !evt.card || evt.getParent("phaseUse") !== _status.event.getParent("phaseUse")) return num;
							if ((get.suit(evt.card) && get.suit(evt.card) == get.suit(card)) || (evt.card.number && evt.card.number == get.number(card))) {
								return num + 10;
							}
						}
					},
				},
				trigger: { player: "useCard" },
				frequent: true,
				filter: function (event, player) {
					var evt = player.getLastUsed(1);
					if (!evt || !evt.card) return false;
					if (!player.isPhaseUsing()) return false;
					var evt2 = evt.getParent("phaseUse");
					if (!evt2 || evt2.name != "phaseUse" || evt2 !== event.getParent("phaseUse")) return false;
					return (get.suit(evt.card) != "none" && get.suit(evt.card) == get.suit(event.card)) || (typeof get.number(evt.card, false) == "number" && get.number(evt.card, false) == get.number(event.card));
				},
				content: function () {
					player.draw();
				},
				group: "jianying_mark",
				init: function (player) {
					if (player.isPhaseUsing()) {
						var evt = _status.event.getParent("phaseUse");
						var history = player.getHistory("useCard", function (evt2) {
							return evt2.getParent("phaseUse") == evt;
						});
						if (history.length) {
							var trigger = history[history.length - 1];
							if (get.suit(trigger.card, player) == "none" || typeof get.number(trigger.card, player) != "number") return;
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
					mark: {
						charlotte: true,
						trigger: { player: "useCard1" },
						filter: function (event, player) {
							return player.isPhaseUsing();
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							if (get.suit(trigger.card, player) == "none" || typeof get.number(trigger.card, player) != "number") player.unmarkSkill("jianying_mark");
							else {
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
						},
						intro: {
							markcount: function (card, player) {
								var num = get.number(card, player);
								var list = [1, 11, 12, 13];
								if (list.includes(num)) return ["A", "J", "Q", "K"][list.indexOf(num)];
								return parseFloat(num);
							},
							content: function (card, player) {
								var suit = get.suit(card, player);
								var num = get.number(card, player);
								var str = "<li>上一张牌的花色：" + get.translation(suit);
								str += "<br><li>上一张牌的点数：";
								var list = [1, 11, 12, 13];
								if (list.includes(num)) str += ["A(1)", "J(11)", "Q(12)", "K(13)"][list.indexOf(num)];
								else str += parseFloat(num);
								return str;
							},
						},
					},
				},
			},
			zzhenggong: {
				trigger: { player: "damageEnd" },
				direct: true,
				filter: function (event, player) {
					return event.source && event.source.countCards("e") > 0;
				},
				content: function () {
					"step 0";
					var att = get.attitude(player, trigger.source);
					player.gainPlayerCard("e", get.prompt("zzhenggong"), trigger.source).ai = function (button) {
						if (att <= 0) {
							return get.equipValue(button.link);
						}
						return 0;
					};
					"step 1";
					if (result.bool) {
						player.logSkill("zzhenggong", trigger.source);
						var card = result.links[0];
						if (player.getCards("h").includes(card)) {
							player.$give(card, player, false);
							player.equip(card);
						}
					}
				},
				ai: {
					maixie_defend: true,
				},
			},
			zquanji: {
				trigger: { global: "phaseBegin" },
				//priority:15,
				check: function (event, player) {
					var att = get.attitude(player, event.player);
					if (att < 0) {
						var nh1 = event.player.countCards("h");
						var nh2 = player.countCards("h");
						return nh1 <= 2 && nh2 > nh1 + 1;
					}
					if (att > 0 && event.player.hasJudge("lebu") && event.player.countCards("h") > event.player.hp + 1) return true;
					return false;
				},
				logTarget: "player",
				filter: function (event, player) {
					return event.player != player && player.canCompare(event.player);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(trigger.player);
					"step 1";
					if (result.bool) {
						trigger.player.skip("phaseZhunbei");
						trigger.player.skip("phaseJudge");
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			zbaijiang: {
				skillAnimation: true,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				unique: true,
				derivation: ["zyexin", "zzili", "zpaiyi"],
				filter: function (event, player) {
					return player.countCards("e") >= 2;
				},
				content: function () {
					player.awakenSkill("zbaijiang");
					player.gainMaxHp();
					player.changeSkills(["zyexin", "zzili"], ["zquanji", "zzhenggong"]);
				},
			},
			zyexin: {
				trigger: { player: "damageEnd", source: "damageSource" },
				marktext: "权",
				frequent: true,
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				content: function () {
					player.addToExpansion("zyexin", get.cards(), "gain2").gaintag.add("zyexin");
				},
				group: "zyexin2",
			},
			zyexin2: {
				enable: "phaseUse",
				usable: 1,
				lose: false,
				discard: false,
				delay: false,
				selectCard: [1, Infinity],
				filterCard: true,
				sourceSkill: "zyexin",
				filter: function (event, player) {
					return player.getExpansions("zyexin").length > 0;
				},
				prompt: "用任意数量的手牌与等量的“权”交换",
				content: function () {
					"step 0";
					player.addToExpansion(cards, "give", player).gaintag.add("zyexin");
					"step 1";
					player.chooseCardButton(player.getExpansions("zyexin"), "选择" + get.cnNumber(cards.length) + "张牌作为手牌", cards.length, true).ai = function (button) {
						return get.value(button.link);
					};
					"step 2";
					player.gain(result.links, "gain2");
				},
				ai: {
					order: 5,
					result: {
						player: 1,
					},
				},
			},
			zzili: {
				skillAnimation: true,
				unique: true,
				derivation: "zpaiyi",
				trigger: { player: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return player.getExpansions("zyexin").length >= 4;
				},
				forced: true,
				async content(e, t, player) {
					player.awakenSkill("zzili");
					player.loseMaxHp();
					player.addSkills("zpaiyi");
				},
				// intro:{
				// 	content:'limited'
				// }
			},
			zpaiyi: {
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.getExpansions("zyexin").length;
				},
				direct: true,
				content: function () {
					"step 0";
					var next = player.chooseCardButton(get.prompt("zpaiyi"), player.getExpansions("zyexin"));
					next.set("ai", function (button) {
						return get.value(button.link);
					});
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						event.card = card;
						player
							.chooseTarget(function (card, player, target) {
								var card = _status.event.card;
								var type = get.type(card);
								switch (type) {
									case "basic":
									case "trick":
										return true;
									case "delay":
										return target.canAddJudge(card);
									case "equip":
										return target.canEquip(card, true);
								}
								return true;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, _status.event.card, player, player);
							})
							.set("card", card);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						var type = get.type(event.card),
							target = result.targets[0];
						player.logSkill("zpaiyi", target);
						switch (type) {
							case "basic":
							case "trick":
								player.give(event.card, target, "give");
								break;
							case "delay":
								player.$give(event.card, target, false);
								target.addJudge(event.card);
								break;
							case "equip":
								player.$give(event.card, target, false);
								target.equip(event.card);
						}
						if (player != result.targets[0]) {
							player.chooseBool("是否摸一张牌？");
						} else event.finish();
					} else event.finish();
					"step 3";
					if (result.bool) player.draw();
				},
				ai: {
					combo: "zyexin",
				},
			},
		},
		dynamicTranslate: {
			rejueqing: function (player) {
				if (player.storage.rejueqing_rewrite) return "锁定技，你即将造成的伤害均视为失去体力。";
				return "当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。";
			},
			reyanzhu: function (player) {
				if (!player.storage.reyanzhu) return "出牌阶段限一次，你可以令一名其他角色选择一项：将装备区里的所有牌交给你并令你修改〖宴诛〗和〖兴学〗，或弃置一张牌并令下一次受到的伤害+1直到其下回合开始。";
				return "出牌阶段限一次，你可以选择一名其他角色。该角色下一次受到的伤害+1直到其下回合开始。";
			},
			rexingxue: function (player) {
				if (player.storage.reyanzhu) return "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力上限）。";
				return "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力值）。";
			},
			jiaozhao: function (player) {
				var num = player.countMark("xindanxin");
				if (num > 2) return "出牌阶段限两次，你可以将一张手牌当做任意基本牌或普通锦囊牌使用（你不能对自己使用此牌）。";
				if (num > 1) return "出牌阶段限一次，你可以将一张手牌当做任意基本牌或普通锦囊牌使用（你不能对自己使用此牌）。";
				if (num > 0) return "出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌或普通锦囊牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用（你不能对自己使用此牌，且此牌不可被【无懈可击】响应）。";
				return "出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用（你不能对自己使用此牌，且此牌不可被【无懈可击】响应）。";
			},
			funan: function (player) {
				if (player.hasSkill("funan_jiexun")) return "其他角色使用或打出牌响应你使用的牌时，你可获得其使用或打出的牌。";
				return "其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。";
			},
			lkbushi: function (player) {
				var list = lib.skill.lkbushi.getBushi(player).map(i => get.translation(i));
				return "①你使用" + list[0] + "牌无次数限制。②当你使用或打出" + list[1] + "牌后，你摸一张牌。③当你成为" + list[2] + "牌的目标后，你可以弃置一张牌，令此牌对你无效。④结束阶段开始时，你从牌堆或弃牌堆获得一张" + list[3] + "牌。⑤准备阶段开始时，你可调整此技能中四种花色的对应顺序。";
			},
			diezhang: function (player) {
				var str = "";
				str += player.storage.duanwan ? "" : "①出牌阶段，你使用【杀】的次数上限+1。②";
				str += "转换技" + (player.storage.duanwan ? "，每回合限一次" : "") + "。";
				var cnNum = get.cnNumber(player.storage.duanwan ? 2 : 1);
				var yinStr = "阴：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用" + cnNum + "张【杀】";
				var yangStr = "阳：当其他角色使用牌被你抵消后，你可以摸" + cnNum + "张牌，视为对其使用一张【杀】";
				if (player.storage.diezhang) {
					if (player.storage.duanwan) yinStr = '<span style="text-decoration: line-through; ">' + yinStr + "</span>";
					yangStr = '<span class="bluetext">' + yangStr + "</span>";
				} else {
					yinStr = '<span class="bluetext">' + yinStr + "</span>";
					if (player.storage.duanwan) yangStr = '<span style="text-decoration: line-through; ">' + yangStr + "</span>";
				}
				return str + yinStr + "；" + yangStr + "。";
			},
		},
		translate: {
			old_huaxiong: "将华雄",
			old_huaxiong_prefix: "将",
			yufan: "虞翻",
			xushu: "旧徐庶",
			xushu_prefix: "旧",
			caozhi: "曹植",
			zhangchunhua: "张春华",
			lingtong: "凌统",
			xunyou: "荀攸",
			liubiao: "刘表",
			zhuran: "朱然",
			yujin: "于禁",
			masu: "旧马谡",
			masu_prefix: "旧",
			xin_masu: "马谡",
			xin_fazheng: "法正",
			wuguotai: "吴国太",
			chengong: "陈宫",
			xusheng: "徐盛",
			guohuai: "郭淮",
			caochong: "曹冲",
			bulianshi: "步练师",
			handang: "韩当",
			fuhuanghou: "伏寿",
			caifuren: "蔡夫人",
			zhonghui: "钟会",
			old_zhonghui: "旧钟会",
			old_zhonghui_prefix: "旧",
			sunluban: "孙鲁班",
			chenqun: "陈群",
			zhangsong: "张松",
			guyong: "顾雍",
			jianyong: "简雍",
			old_madai: "马岱",
			gz_madai: "马岱",
			xin_xushu: "徐庶",
			manchong: "满宠",
			liufeng: "刘封",
			liru: "旧李儒",
			liru_prefix: "旧",
			yj_jushou: "沮授",
			zhuhuan: "朱桓",
			xiahoushi: "夏侯氏",
			panzhangmazhong: "潘璋马忠",
			caorui: "曹叡",
			caoxiu: "曹休",
			zhongyao: "钟繇",
			liuchen: "刘谌",
			zhangyi: "张嶷",
			sunxiu: "孙休",
			zhuzhi: "朱治",
			quancong: "全琮",
			gongsunyuan: "公孙渊",
			guotufengji: "郭图逢纪",
			zhoucang: "周仓",
			guanping: "关平",
			liaohua: "廖化",
			caozhen: "曹真",
			wuyi: "吴懿",
			hanhaoshihuan: "韩浩史涣",
			chengpu: "程普",
			gaoshun: "高顺",
			xin_liru: "李儒",
			guohuanghou: "郭皇后",
			liuyu: "刘虞",
			sundeng: "孙登",
			liyan: "李严",
			sunziliufang: "孙资刘放",
			huanghao: "黄皓",
			zhangrang: "张让",
			cenhun: "岑昏",
			xinxianying: "辛宪英",
			wuxian: "吴苋",
			xushi: "徐氏",
			caojie: "曹节",
			xuezong: "薛综",
			jikang: "嵇康",
			qinmi: "秦宓",
			caiyong: "蔡邕",

			new_qingxian: "清弦",
			new_qingxian_info: "出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
			new_juexiang: "绝响",
			new_juexiang_info: "锁定技，当你死亡后，杀死你的角色弃置装备区内的所有牌并失去1点体力。然后，你可以令一名其他角色获得技能〖残韵〗。若场上有梅花牌，则其可以弃置其中的一张，然后其获得技能〖绝响〗。",
			new_canyun: "残韵",
			new_canyun_info: "出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色（不能选择已经成为过〖残韵〗目标的角色）。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
			qingxian_draw: "清弦",
			qingxian_draw_info: "",
			zhenjun: "镇军",
			zhenjun_info: "准备阶段，你可以弃置一名手牌数多于体力值的角色的X张牌（X为其手牌数和体力值之差），然后选择一项：1.你弃置等同于其中非装备牌数量的牌；2.其摸等量的牌。",
			rezhenjun: "镇军",
			rezhenjun_info: "准备阶段，你可以弃置一名角色的X张牌（X为其手牌数和体力值之差且至少为1），然后选择一项：1.你弃置X张牌；2.其摸X张牌。（X为其弃置的牌中非装备牌的数量）",
			fenli: "奋励",
			fenli_info: "若你的手牌数为全场最多，你可以跳过摸牌阶段；若你的体力值为全场最多，你可以跳过出牌阶段；若你的装备区里有牌且数量为全场最多，你可以跳过弃牌阶段。",
			pingkou: "平寇",
			pingkou_info: "回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。",
			xinanguo: "安国",
			xinanguo_info: "出牌阶段限一次，你可以选择一名其他角色，若其手牌数为全场最少，其摸一张牌；体力值为全场最低，回复1点体力；装备区内牌数为全场最少，随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。",
			pindi: "品第",
			pindi_info: "出牌阶段，你可以弃置一张牌并选择一名其他角色（不能弃置相同类型牌且不能指定相同的角色），然后令其执行一项：摸X张牌；弃置X张牌（X为本回合此技能发动次数）。若其已受伤，你横置。",
			funan_jiexun: "诫训",
			bizhuan: "辟撰",
			bizhuan_bg: "书",
			bizhuan_info: "当你使用黑桃牌后，或你成为其他角色使用黑桃牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”；你至多拥有四张“书”，你每有一张“书” ，手牌上限+1。",
			tongbo: "通博",
			tongbo_info: "摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”交给任意名其他角色。",
			qingxian: "清弦",
			qingxian_info: "当你受到伤害/回复体力后，你可以令伤害来源/一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你摸一张牌。",
			juexiang: "绝响",
			juexiang_info: "当你死亡后，你可以令一名角色随机获得“清弦残谱”其中一个技能，然后直到其下回合开始，其不能被选择为其他角色使用梅花牌的目标。",
			juexiang_ji: "激弦",
			juexiang_ji_info: "当你受到伤害后，你可以令伤害来源失去1点体力，随机使用一张装备。",
			juexiang_lie: "烈弦",
			juexiang_lie_info: "当你回复体力后，你可以令一名其他角色失去1点体力，随机使用一张装备。",
			juexiang_rou: "柔弦",
			juexiang_rou_info: "当你受到伤害后，你可以令伤害来源回复1点体力，弃置一张装备。",
			juexiang_he: "和弦",
			juexiang_he_info: "当你回复体力后，你可以令一名其他角色回复1点体力，弃置一张装备。",
			juexiang_club: "绝响",
			juexiang_club_bg: "响",
			juexiang_club_info: "直到下回合开始，不能被选择为其他角色使用梅花牌的目标。",
			jianzheng: "谏征",
			jianzheng_info: "当一名其他角色使用【杀】指定目标时，若你在其攻击范围内且你不是目标，则你可以将一张手牌置于牌堆顶，取消所有目标，然后若此【杀】不为黑色，你成为目标。",
			zhuandui: "专对",
			zhuandui_info: "当你使用【杀】指定目标/成为【杀】的目标后，你可以与目标角色/此【杀】使用者拼点，若你赢，此【杀】不能被【闪】响应/对你无效。",
			zhuandui_use_info: "当你使用【杀】指定目标后，你可以与目标角色拼点，若你赢，此【杀】不能被【闪】响应。",
			zhuandui_respond_info: "当你成为【杀】的目标后，你可以与此【杀】使用者拼点，若你赢，此【杀】对你无效。",
			tianbian: "天辩",
			tianbian_info: "你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌花色为红桃，则此牌的点数视为K。",
			funan: "复难",
			funan_info: "其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。",
			jiexun: "诫训",
			jiexun_info: "结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。若有角色因此法弃置了所有牌，则你失去〖诫训〗，然后你发动〖复难〗时，无须令对方获得你使用的牌。",
			xinjiexun: "诫训",
			xinjiexun_info: "结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。若有角色因此法弃置了所有牌，则你将X归零，然后你发动〖复难〗时，无须令对方获得你使用的牌。",
			shouxi: "守玺",
			shouxi_info: "当你成为【杀】的目标后，你可声明一种未以此法声明过的基本牌或锦囊牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【杀】对你无效。",
			huimin: "惠民",
			huimin_info: "结束阶段，你可以摸X张牌并展示等量手牌（X为手牌数小于其体力值的角色数），然后从你指定的一名角色开始这些角色依次选择并获得其中一张。",
			wengua: "问卦",
			wengua2: "问卦",
			wengua_info: "其他角色/你的出牌阶段限一次，其可以交给你一张牌，(若当前回合角色为你，则跳过此步骤)，你可以将此牌/一张牌置于牌堆顶或牌堆底，然后你与其/你从另一端摸一张牌。",
			fuzhu: "伏诛",
			fuzhu_info: "一名男性角色的结束阶段，若牌堆剩余牌数不大于你体力值的十倍，则你可以依次对其使用牌堆中所有的【杀】（不能超过游戏人数），然后洗牌。",
			fumian: "福绵",
			fumian_info: "准备阶段，你可以选择一项：1.摸牌阶段多摸一张牌；2.使用红色牌可以多选择一个目标（限一次）。若与你上回合选择的选项不同，则该选项数值+1并复原此技能。",
			daiyan: "怠宴",
			daiyan_info: "结束阶段，你可以令一名其他角色从牌堆中获得一张红桃基本牌，然后若其于上回合成为过该技能目标，则其失去1点体力。",
			xinzhongjian: "忠鉴",
			xinzhongjian_info: "出牌阶段限一次，你可以展示自己的一张手牌，然后展示一名其他角色的至多三张手牌。其展示的牌中：每有一张花色相同，你摸一张牌；点数相同，你对其造成1点伤害；均不同，你弃置一张手牌。",
			zhongjian: "忠鉴",
			zhongjian_bg: "鉴",
			zhongjian3: "忠鉴",
			zhongjian3_bg: "鉴",
			zhongjian_info: "出牌阶段限一次，你可以展示一张手牌，然后展示一名其他角色的X张手牌（X为其体力值）。若以此法展示的牌与你展示的牌：有颜色相同的，你选择：①摸一张牌。②弃置一名其他角色的一张牌；有点数相同的，本回合此技能改为“出牌阶段限两次”；均不同，你的手牌上限-1。",
			caishi: "才识",
			caishix: "才识/忠鉴",
			caishi_info: "摸牌阶段开始时，你可以选择一项：1.令手牌上限+1；2.回复1点体力，本回合内不能对自己使用牌。",
			xincaishi: "才识",
			xincaishi_info: "摸牌阶段，你可以选择一项：1.少摸一张牌，然后本回合发动〖忠鉴〗时可以多展示自己的一张牌；2.本回合手牌上限-1，然后本回合发动〖忠鉴〗时可以多展示对方的一张牌；3.多摸两张牌，本回合不能发动〖忠鉴〗。",
			guizao: "瑰藻",
			guizao_info: "弃牌阶段结束时，若你于此阶段弃置牌的数量不小于2且它们的花色各不相同，你可以回复1点体力或摸一张牌。",
			jiyu: "讥谀",
			jiyu_info: "出牌阶段限一次，你可以令一名角色弃置一张手牌。若如此做，你不能使用与之相同花色的牌，直到回合结束。若其以此法弃置的牌为黑桃，你翻面并令其失去1点体力。若你有未被〖讥谀〗限制的手牌，则你可以继续发动此技能，但不能选择本回合已经选择过的目标。",
			qinqing: "寝情",
			qinqing_info: "结束阶段，你可以选择任意名攻击范围内含有主公的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃），若如此做，你摸X张牌（X为其中手牌比主公多的角色数）。",
			qinqing_info_doudizhu: "结束阶段，你可以选择任意名攻击范围内含有地主的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃），若如此做，你摸X张牌（X为其中手牌比地主多的角色数）。",
			huisheng: "贿生",
			huisheng_info: "当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此伤害，然后你不能再对其发动〖贿生〗；2.弃置等量的牌。",
			jishe: "极奢",
			jishe2: "极奢",
			jishe_info: "①出牌阶段限20次，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。②结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）。",
			lianhuo: "链祸",
			lianhuo_info: "锁定技，当你受到火焰伤害时，若你的武将牌处于横置状态且此伤害不为连环伤害，则此伤害+1。",
			taoluan: "滔乱",
			taoluan_backup: "滔乱",
			taoluan_info: "你可以将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌），然后你令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力且〖滔乱〗无效直到回合结束。",
			xintaoluan: "滔乱",
			xintaoluan_backup: "滔乱",
			xintaoluan_info: "若场上没有濒死的角色，则你可以将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本回合内你以此法使用过的牌），然后你令一名其他角色选择一项：1.交给你X张与你以此法使用的牌类别不同的牌；2.你失去X点体力且滔乱无效直到回合结束（X为你本回合内发动过〖滔乱〗的次数且至多为3）。",
			jiaozhao: "矫诏",
			jiaozhao3: "矫诏",
			jiaozhao3_backup: "矫诏",
			jiaozhao2: "矫诏",
			jiaozhao_info: "出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用（你不能对自己使用此牌）。",
			danxin: "殚心",
			danxin_info: "当你受到伤害后，你可以摸一张牌，或对“矫诏”的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通锦囊牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”。",
			xindanxin: "殚心",
			xindanxin_info: "当你受到伤害后，你可以摸一张牌，并对“矫诏”的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通锦囊牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”。3.将“出牌阶段限一次”改为“出牌阶段限两次”。",
			duliang: "督粮",
			duliang2: "督粮",
			duliang_info: "出牌阶段限一次，你可以获得一名其他角色的一张手牌，然后选择一项：1.令其观看牌堆顶的两张牌，然后获得其中的基本牌；2.令其于下个摸牌阶段额外摸一张牌。",
			fulin: "腹鳞",
			fulin_info: "锁定技，你于回合内得到的牌不计入你本回合的手牌上限。",
			kuangbi: "匡弼",
			kuangbi_info: "出牌阶段限一次，你可以选择一名有牌的其他角色，该角色将其的一至三张牌置于你的武将牌上。若如此做，你的下个准备阶段，你获得武将牌上的所有牌，然后其摸等量的牌。",
			xinzhige: "止戈",
			xinzhige_info: "出牌阶段限一次，你可以令一名攻击范围内含有你的其他角色交给你一张【杀】或武器牌，否则其视为对你指定的另一名其攻击范围内的角色使用了一张【杀】。",
			zhige: "止戈",
			zhige_info: "出牌阶段限一次，若你的手牌数大于你的体力值，你可以选择攻击范围内含有你的一名其他角色，其选择一项：1.使用一张【杀】；2.将装备区里的一张牌交给你。",
			xinzongzuo: "宗祚",
			xinzongzuo_info: "锁定技，游戏的第一个回合开始前，你加X点体力上限并回复X点体力（X为全场势力数）；当一名角色死亡后，若没有与其势力相同的角色，你减1点体力上限并摸两张牌。",
			zongzuo: "宗祚",
			zongzuo_info: "锁定技，游戏的第一个回合开始前，你加X点体力上限并回复X点体力（X为全场势力数）；当一名角色死亡后，若没有与其势力相同的角色，你减1点体力上限。",
			xinjuece: "绝策",
			xinjuece_info: "结束阶段，你可以对一名没有手牌的角色造成1点伤害。",
			xinmieji: "灭计",
			xinmieji_info: "出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或依次弃置两张非锦囊牌。",
			xinfencheng: "焚城",
			xinfencheng_info: "限定技。出牌阶段，你可以令所有其他角色各选择一项：弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1)；或受到你对其造成的2点火焰伤害。",
			qianju: "千驹",
			qianju_info: "锁定技，若你已受伤，你计算与其他角色的距离时-X（X为你已损失的体力值）。",
			qingxi: "倾袭",
			qingxi_info: "当你使用【杀】对目标角色造成伤害时，若你的装备区里有武器牌，你可以令其选择一项：1、弃置X张手牌（X为此武器牌的攻击范围），若如此做，其弃置你的此武器牌；2、令伤害值+1。",
			reqianju: "千驹",
			reqianju_info: "锁定技，若你已受伤，你计算与其他角色的距离时-X（X为你已损失的体力值且至少为1）。",
			reqingxi: "倾袭",
			reqingxi_info: "当你使用【杀】或【决斗】指定目标后，你可以令其选择一项：1、弃置X张手牌（X为你攻击范围内的角色数，且当你装备区内有武器牌/没有武器牌时至多为4/2），若如此做，其弃置你的此武器牌；2、令此牌的伤害值+1且你进行判定，若结果为红色，则其不能响应此牌。",
			jieyue: "节钺",
			jieyue_info: "①结束阶段，你可以弃置一张手牌，然后令一名其他角色选择一项：1.将一张牌置于你的武将牌上,称之为“节”；2.令你弃置其一张牌。②若你有“节”，你可以将红色/黑色手牌当作【闪】/【无懈可击】使用或打出。③准备阶段，若你有“节”，则你获得之。",
			xianzhen: "陷阵",
			xianzhen_info: "出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得以下效果直到回合结束：无视与该角色的距离；无视该角色的防具且对其使用【杀】没有次数限制。若你没赢，你不能使用【杀】直到回合结束。",
			xinxianzhen: "陷阵",
			xinxianzhen_info: "出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得以下效果直到回合结束：无视该角色的防具且对其使用牌没有次数和距离限制，且当你使用【杀】或普通锦囊牌指定唯一目标时，可以令该角色也成为此牌的目标。若你没赢，你不能使用【杀】且你的【杀】不计入手牌上限直到回合结束。",
			xinxianzhen2: "陷阵",
			jinjiu: "禁酒",
			jinjiu_info: "锁定技，你的【酒】均视为【杀】。",
			chunlao: "醇醪",
			chunlao2: "醇醪",
			chunlao_info: "结束阶段开始时，若你没有“醇”，你可以将至少一张【杀】置于你的武将牌上，称为“醇”。当一名角色处于濒死状态时，你可以移去一张“醇”，视为该角色使用一张【酒】。",
			lihuo: "疠火",
			lihuo_info: "当你声明使用普通【杀】后，你可以将此【杀】改为火【杀】。若以此法使用的【杀】造成了伤害，则此【杀】结算后你失去1点体力；你使用火【杀】选择目标后，可以额外指定一个目标。",
			shenduan: "慎断",
			shenduan_info: "当你的黑色基本牌因弃置而进入弃牌堆后，你可以将其当做【兵粮寸断】使用（无距离限制）。",
			yonglve: "勇略",
			yonglve_info: "一名其他角色的判定阶段开始时，若其在你攻击范围内，则你可以弃置其判定区里的一张牌，视为对该角色使用一张【杀】。若此【杀】未造成伤害，你摸一张牌。",
			reshenduan: "慎断",
			reshenduan_info: "当你的黑色基本牌或装备牌因弃置而进入弃牌堆后，你可以将其当做【兵粮寸断】使用（无距离限制）。",
			reyonglve: "勇略",
			reyonglve_info: "其他角色的判定阶段开始时，你可以弃置其判定区里的一张牌。然后若该角色在你攻击范围内，你摸一张牌。若其在你攻击范围外，视为你对其使用一张【杀】。",
			benxi: "奔袭",
			benxi_info: "锁定技，你的回合内，你每使用一次牌后，你的进攻距离+1直到回合结束；你的回合内，若你与所有角色的距离均为1，你无视其他角色的防具，且你使用的【杀】可额外指定一个目标。",
			xinbenxi: "奔袭",
			xinbenxi_info: "锁定技，当你于回合内使用牌时，你本回合计算与其他角色的距离-1。你的回合内，若你至场上所有其他角色的距离均不大于1，则当你使用【杀】或普通锦囊牌选择唯一目标后，你选择至多两项：1.为此牌多指定一个目标；2.令此牌无视防具；3.令此牌不可被抵消；4.此牌造成伤害时摸一张牌。",
			sidi: "司敌",
			sidi2: "司敌",
			sidi3: "司敌",
			sidi_info: "①当你使用或其他角色在你的回合内使用【闪】时，你可以将牌堆顶的牌置于你的武将牌上，称为“司敌”牌。②其他角色的出牌阶段开始时，你可以移去一张“司敌”牌，令其本阶段使用【杀】的次数上限-1。",
			xinsidi: "司敌",
			xinsidi2: "司敌",
			xinsidi_info: "其他角色出牌阶段开始时，你可以弃置一张与你装备区里的牌颜色相同的非基本牌，然后该角色于此阶段内不能使用和打出与此牌颜色相同的牌。此阶段结束时，若其此阶段没有使用【杀】，视为你对其使用了【杀】。",
			dangxian: "当先",
			dangxian_info: "锁定技，回合开始时，你执行一个额外的出牌阶段。",
			xindangxian: "当先",
			xindangxian_info: "锁定技，回合开始时，你执行一个额外的出牌阶段。此阶段开始时，你失去1点体力并从牌堆/弃牌堆中获得一张【杀】（若你已发动过〖伏枥〗，则可以不发动此效果）。",
			longyin: "龙吟",
			longyin_info: "当一名角色于其出牌阶段内使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌。",
			zhongyong: "忠勇",
			zhongyong_info: "当你于出牌阶段内使用的【杀】被目标角色使用的【闪】抵消时，你可以将此【闪】交给除该角色外的一名角色。若获得此【闪】的角色不是你，你可以对相同的目标再使用一张【杀】。",
			xinzhongyong: "忠勇",
			xinzhongyong_info: "当你使用的【杀】结算完毕后，你可以将此【杀】或目标角色使用的【闪】交给一名该角色以外的其他角色，以此法得到红色牌的角色可以对你攻击范围内的角色使用一张【杀】。",
			jigong: "急攻",
			jigong_info: "出牌阶段开始时，你可以摸两张牌。若如此做，你本回合的手牌上限改为X（X为你此阶段造成的伤害点数之和）。",
			shifei: "饰非",
			shifei_info: "当你需要使用或打出【闪】时，你可以令当前回合角色摸一张牌。然后若其手牌数不为全场唯一最多，则你弃置全场手牌数最多（或之一）角色的一张牌，视为你使用或打出了一张【闪】。",
			huaiyi: "怀异",
			huaiyi_info: "出牌阶段限一次，你可以展示所有手牌，若这些牌的颜色不全部相同，则你选择一种颜色并弃置该颜色的所有手牌，然后你可以获得至多X名角色的各一张牌（X为你以此法弃置的手牌数）。若你以此法得到的牌不少于两张，则你失去1点体力。",
			yaoming: "邀名",
			yaoming_info: "每回合限一次，当你造成或受到伤害后，你可以选择一项：1. 弃置手牌数大于你的一名角色的一张手牌；2. 令手牌数小于你的一名角色摸一张牌。",
			xinyaoming: "邀名",
			xinyaoming_info: "每回合每个选项限一次，当你造成或受到伤害后，你可以选择一项：1. 弃置一名其他角色的一张手牌；2. 令一名其他角色摸一张牌；3.令一名角色弃置至多两张牌，然后摸等量的牌。",
			anguo: "安国",
			anguo_info: "出牌阶段限一次，你可以选择一名其他角色装备区里的一张牌，令其获得此牌。然后若该角色攻击范围内的角色数因此减少，则你摸一张牌。",
			yanzhu: "宴诛",
			yanzhu_info: "出牌阶段限一次，你可以令一名有牌的其他角色选择一项：令你获得其装备区里所有的牌，然后你失去技能〖宴诛〗；或弃置一张牌。",
			xingxue: "兴学",
			xingxue_info: "结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶（X为你的体力值，若你已失去技能〖宴诛〗，则将X改为你的体力上限）。",
			zhaofu: "诏缚",
			zhaofu_info: "主公技，锁定技，你距离为1的角色视为在其他吴势力角色的攻击范围内。",
			reyanzhu: "宴诛",
			reyanzhu2: "宴诛",
			reyanzhu_info: "出牌阶段限一次，你可以令一名其他角色选择一项：将装备区里的所有牌交给你并令你修改〖宴诛〗和〖兴学〗，或弃置一张牌并令下一次受到的伤害+1直到其下回合开始。",
			reyanzhu_rewrite: "宴诛·改",
			reyanzhu_rewrite_info: "出牌阶段限一次，你可以选择一名其他角色。该角色下一次受到的伤害+1直到其下回合开始。",
			rexingxue: "兴学",
			rexingxue_info: "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力值）。",
			rexingxue_rewrite: "兴学·改",
			rexingxue_rewrite_info: "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力上限）。",
			rezhaofu: "诏缚",
			rezhaofu_info: "主公技，锁定技，你攻击范围内的角色视为在其他吴势力角色的攻击范围内。",
			wurong: "怃戎",
			wurong_info: "出牌阶段限一次，你可以令一名其他角色与你同时展示一张手牌：若你展示的是【杀】且该角色展示的不是【闪】，则你弃置此【杀】并对其造成1点伤害；若你展示的不是【杀】且该角色展示的是【闪】，则你弃置你展示的牌并获得其一张牌。",
			shizhi: "矢志",
			shizhi_info: "锁定技，当你的体力值为1时，你的【闪】均视为【杀】。",
			zhanjue: "战绝",
			zhanjue_info: "出牌阶段，你可以将所有手牌当作【决斗】使用。此【决斗】结算后，你与以此法受到伤害的角色各摸一张牌。若你在同一阶段内以此法摸了两张或更多的牌，则此技能失效直到回合结束。",
			qinwang: "勤王",
			qinwang1: "勤王",
			qinwang2: "勤王",
			qinwang_info: "主公技，当你需要使用或打出一张【杀】时，你可以弃置一张牌，然后视为你发动了〖激将①〗。若有角色响应，则该角色打出【杀】时摸一张牌。",
			huomo: "活墨",
			huomo_info: "当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，视为使用此基本牌。",
			zuoding: "佐定",
			zuoding_info: "当其他角色于其回合内使用♠牌指定目标后，若本回合内没有角色受到过伤害，则你可以令其中一名目标角色摸一张牌。",
			taoxi: "讨袭",
			taoxi2: "讨袭",
			taoxi3: "讨袭",
			taoxi_info: "出牌阶段限一次。当你使用牌指定一名其他角色为唯一目标后，你可以亮出其一张手牌直到回合结束，并且你于此回合内可以将此牌如手牌般使用。回合结束时，若此牌仍在该角色手牌区里，你失去1点体力。",
			huituo: "恢拓",
			huituo_info: "当你受到伤害后，你可以令一名角色进行一次判定，若结果为红色，该角色回复1点体力；若结果为黑色，该角色摸X张牌（X为此次伤害的伤害点数）。",
			mingjian: "明鉴",
			mingjian2: "明鉴",
			mingjian_info: "出牌阶段限一次。你可以将所有手牌交给一名其他角色，然后该角色于其下个回合的手牌上限+1，且使用【杀】的次数上限+1。",
			xingshuai: "兴衰",
			xingshuai_info: "主公技，限定技，当你进入濒死状态时，其他魏势力角色可依次令你回复1点体力，然后这些角色依次受到1点伤害。",
			reduodao: "夺刀",
			reduodao_info: "当你成为【杀】的目标后，你可以弃置一张牌。然后你获得此【杀】使用者装备区里的武器牌。",
			reanjian: "暗箭",
			reanjian_info: "锁定技，当你使用【杀】指定目标后，若你不在其攻击范围内，则此【杀】伤害+1且无视其防具。若其因执行此【杀】的效果受到伤害而进入濒死状态，则其不能使用【桃】直到此濒死事件结算结束。",
			duodao: "夺刀",
			duodao_info: "当你受到【杀】造成的伤害后，你可以弃置一张牌，然后获得伤害来源装备区里的武器牌。",
			anjian: "暗箭",
			anjian_info: "锁定技，当你使用【杀】对目标角色造成伤害时，若你不在其攻击范围内，则此【杀】伤害+1。",
			xinpojun: "破军",
			xinpojun2: "破军",
			xinpojun_info: "当你于出牌阶段内使用【杀】指定一个目标后，你可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。若如此做，当前回合结束后，该角色获得其武将牌旁的所有牌。",

			qiaoshi: "樵拾",
			qiaoshi_info: "其他角色的结束阶段开始时，若你的手牌数与其相等，则你可以与其各摸一张牌。",
			yanyu: "燕语",
			yanyu2: "燕语",
			yanyu_info: "出牌阶段，你可以重铸【杀】。出牌阶段结束时，若你于此阶段以此法重铸了至少两张【杀】，则你可以令一名男性角色摸两张牌。",

			zzhenggong: "争功",
			zzhenggong_info: "当你受到伤害后，你可以获得伤害来源装备区里的一张牌并置入你的装备区。",
			zquanji: "权计",
			zquanji_info: "其他角色的回合开始时，你可以与该角色拼点。若你赢，该角色跳过准备阶段和判定阶段。",
			zbaijiang: "拜将",
			zbaijiang_info: "觉醒技。准备阶段，若你装备区里的牌数不少于两张，你加1点体力上限，失去〖权计〗和〖争功〗，获得〖野心〗和〖自立〗。",
			zyexin: "野心",
			zyexin2: "野心",
			zyexin_info: "①当你造成或受到伤害后，你可以将牌堆顶的一张牌置于你的武将牌上，称为“权”。②出牌阶段限一次。你可以用任意数量的手牌与等量的“权”交换。",
			zzili: "自立",
			zzili_info: "觉醒技。准备阶段，若你的“权”数不小于4，你减1点体力上限并获得〖排异〗。",
			zpaiyi: "排异",
			zpaiyi_info: "结束阶段，你可以选择一张“权”，若此牌为：装备牌，你将此牌置入一名角色的装备区；延时类锦囊牌，你将此牌置入一名角色的判定区；基本牌或普通锦囊牌，你将此牌交给一名角色。然后若此牌的目标区域对应的角色不为你，你可以摸一张牌。",
			shibei: "矢北",
			shibei_info: "锁定技，当你受到伤害后：若此伤害是你本回合第一次受到的伤害，则你回复1点体力；否则你失去1点体力。",
			jianying: "渐营",
			jianying_info: "当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。",
			xinenyuan: "恩怨",
			xinenyuan1: "恩怨",
			xinenyuan2: "恩怨",
			xinenyuan_info: "当你获得一名其他角色两张或更多的牌后，你可以令其摸一张牌；当你受到1点伤害后，你可以令伤害来源选择一项：1、将一张手牌交给你；2、失去1点体力。",
			xinxuanhuo: "眩惑",
			xinxuanhuo_info: "摸牌阶段开始时，你可以改为令一名其他角色摸两张牌，然后该角色需对其攻击范围内你选择的另一名角色使用一张【杀】，否则你获得其两张牌。",
			fuhun: "父魂",
			fuhun2: "父魂",
			fuhun_info: "你可以将两张手牌当做【杀】使用或打出；当你于出牌阶段以此法使用的【杀】造成伤害后，你获得〖武圣〗和〖咆哮〗直到回合结束。",
			yuce: "御策",
			yuce_info: "当你受到伤害后，你可以展示一张手牌，并令伤害来源选择一项：弃置一张与此牌类型不同的手牌，或令你回复1点体力。",
			xiansi: "陷嗣",
			xiansix: "陷嗣",
			xiansi_bg: "逆",
			xiansi2: "陷嗣",
			xiansi_info: "准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”；当一名角色需要对你使用【杀】时，其可以移去两张“逆”，然后视为对你使用了一张【杀】。",
			chanhui: "谮毁",
			chanhui_info: "出牌阶段限一次，当你使用【杀】或黑色普通锦囊牌指定唯一目标时，你可令可以成为此牌目标的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标。",
			rechanhui: "谮毁",
			rechanhui_info: "当你使用【杀】或普通锦囊牌指定唯一目标时，你可令可以成为此牌目标（无距离限制）的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标且你本回合内不能再次发动〖谮毁〗。",
			jiaojin: "骄矜",
			jiaojin_info: "当你受到男性角色造成的伤害时，你可以弃置一张装备牌，令此伤害-1。",
			rejiaojin: "骄矜",
			rejiaojin_info: "当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以弃置一张装备牌，令此牌对你无效并获得此牌对应的所有实体牌。若此牌的使用者为女性角色，则你令〖骄矜〗失效直到回合结束。",
			shenxing: "慎行",
			shenxing_info: "出牌阶段，你可以弃置两张牌，然后摸一张牌。",
			bingyi: "秉壹",
			bingyi_info: "结束阶段开始时，你可以展示所有手牌，若这些牌颜色均相同，则你令至多X名角色各摸一张牌(X为你的手牌数)。",
			qiangzhi: "强识",
			qiangzhi_draw: "强识",
			qiangzhi_info: "出牌阶段开始时，你可以展示一名其他角色的一张手牌。若如此做，当你于此阶段内使用与此牌类别相同的牌时，你可以摸一张牌。",
			xiantu: "献图",
			xiantu1: "献图",
			xiantu2: "献图",
			xiantu3: "献图",
			xiantu_info: "一名其他角色的出牌阶段开始时，你可以摸两张牌，然后交给其两张牌。若如此做，此阶段结束时，若该角色未于此阶段内杀死过角色，则你失去1点体力。",
			dingpin: "定品",
			dingpin_info: "出牌阶段，你可以弃置一张手牌，然后令一名已受伤的角色判定，若结果为黑色，该角色摸X张牌(X为该角色已损失的体力值)，然后你本回合不能再对其发动〖定品〗；若结果为红色，你翻面（你不能弃置本回合已弃置或使用过的类型的牌）。",
			faen: "法恩",
			faen_info: "当一名角色翻至正面或横置后，你可以令其摸一张牌。",
			jyzongshi: "纵适",
			jyzongshi_info: "当你拼点赢时，你可以获得对方此次拼点的牌；当你拼点没赢时，你可以收回你此次拼点的牌。",
			qiaoshui: "巧说",
			qiaoshui3: "巧说",
			qiaoshui_info: "出牌阶段开始时，你可与一名其他角色拼点。若你赢，你本回合使用下一张基本牌或普通锦囊牌时，可以为此牌增加或减少一个目标；若你没赢，你不能使用锦囊牌直到回合结束。",
			reqiaoshui: "巧说",
			reqiaoshui_info: "出牌阶段，你可与一名其他角色拼点。若你赢，你本回合使用下一张基本牌或普通锦囊牌时，可以为此牌增加或减少一个目标；若你没赢，你结束出牌阶段且本回合内锦囊牌不计入手牌上限。",
			junxing: "峻刑",
			junxing_info: "出牌阶段限一次，你可以弃置至少一张手牌并选择一名其他角色，该角色需弃置一张与你弃置的牌类别均不同的手牌，否则其先将其武将牌翻面再摸X张牌（X为你以此法弃置的手牌数量）。",
			xinjunxing: "峻刑",
			xinjunxing_info: "出牌阶段限一次，你可以弃置至少一张手牌并选择一名其他角色，该角色需弃置一张与你弃置的牌类别均不同的手牌，否则其先将其武将牌翻面，然后将手牌摸至四张。",

			xswuyan: "无言",
			xinwuyan: "无言",
			jujian: "举荐",
			xinjujian: "举荐",
			luoying: "落英",
			luoying_discard: "落英",
			luoying_judge: "落英",
			luoying_judge_noconf: "落英·判定",
			jiushi: "酒诗",
			jiushi1: "酒诗",
			jiushi2: "酒诗",
			jiushi3: "酒诗",
			jueqing: "绝情",
			shangshi: "伤逝",
			xuanfeng: "旋风",
			zhiyu: "智愚",
			qice: "奇策",
			qice_backup: "奇策",
			jiangchi: "将驰",
			jiangchi_less: "少摸一张",
			jiangchi_more: "多摸一张",
			zishou: "自守",
			zongshi: "宗室",
			danshou: "胆守",
			olddanshou: "胆守",
			xindanshou: "胆守",
			yizhong: "毅重",
			xinzhan: "心战",
			xinzhan_gain: "获得",
			xinzhan_place: "牌堆顶",
			huilei: "挥泪",
			enyuan: "恩怨",
			enyuan1: "恩怨",
			enyuan2: "恩怨",
			xuanhuo: "眩惑",
			ganlu: "甘露",
			buyi: "补益",
			mingce: "明策",
			zhichi: "智迟",
			zhichi2: "智迟",
			pojun: "破军",
			jingce: "精策",
			xinjingce: "精策",
			chengxiang: "称象",
			oldchengxiang: "称象",
			renxin: "仁心",
			oldrenxin: "仁心",
			zhenlie: "贞烈",
			miji: "秘计",
			miji_tag: "已分配",
			zhiyan: "直言",
			zongxuan: "纵玄",
			anxu: "安恤",
			old_anxu: "安恤",
			zhuiyi: "追忆",
			gongji: "弓骑",
			qiuyuan: "求援",
			oldqiuyuan: "求援",
			zhuikong: "惴恐",
			oldzhuikong: "惴恐",
			qieting: "窃听",
			xianzhou: "献州",
			quanji: "权计",
			zili: "自立",
			paiyi: "排异",
			paiyi_backup: "排异",
			sanyao: "散谣",
			olsanyao: "散谣",
			olsanyao_backup: "散谣",
			zhiman: "制蛮",
			resanyao: "散谣",
			rezhiman: "制蛮",
			qianxi: "潜袭",
			qianxi2: "潜袭",
			qianxi2_bg: "袭",
			fuli: "伏枥",
			xinfuli: "伏枥",
			jiefan: "解烦",
			juece: "绝策",
			mieji: "灭计",
			fencheng: "焚城",
			youdi: "诱敌",
			youdi_info: "结束阶段开始时，你可以令一名其他角色弃置你的一张牌，若此牌不为【杀】，你获得该角色的一张牌。",
			fencheng_info: "限定技。出牌阶段，你可令所有其他角色依次选择一项：弃置X张牌；或受到1点火焰伤害。(X为该角色装备区里牌的数量且至少为1)",
			mieji_info: "当你使用黑色普通锦囊牌选择目标后，若目标数为1，则你可以额外指定一个目标。",
			juece_info: "当其他角色在你回合内失去最后的手牌后，你可以对其造成1点伤害。",
			jiefan_info: "限定技，出牌阶段，你可以选择一名角色，令攻击范围内含有该角色的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。",
			fuli_info: "限定技，当你处于濒死状态时，你可以将体力回复至与场上势力数相同，然后翻面。",
			xinfuli_info: "限定技，当你处于濒死状态时，可以将体力回复至X点并将手牌摸至X张（X为场上势力数）。若X大于2，你翻面。",
			qianxi_info: "准备阶段，你可以摸一张牌，并弃置一张牌，然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌直到回合结束。",
			zhiman_info: "当你对一名其他角色造成伤害时，你可以防止此伤害，然后获得其装备区或判定区的一张牌。",
			sanyao_info: "出牌阶段限一次，你可以弃置一张牌并指定一名体力值最多(或之一)的角色，你对其造成1点伤害。",
			olsanyao_info: "出牌阶段每项各限一次，你可以弃置一张牌并指定一名体力值或手牌数最多(或之一)的角色，并对其造成1点伤害。",
			rezhiman_info: "当你对一名其他角色造成伤害时，你可以防止此伤害，然后获得其区域内的一张牌。",
			resanyao_info: "出牌阶段限一次，你可以弃置任意张牌并指定等量除你外体力值最多(或之一)的其他角色。你对这些角色依次造成1点伤害。",
			paiyi_info: "出牌阶段限一次，你可以移去一张“权”并选择一名角色，令其摸两张牌，然后若其手牌数大于你，你对其造成1点伤害。",
			zili_info: "觉醒技，准备阶段开始时，若“权”的数量不小于3，你减1点体力上限，然后选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“排异”。",
			quanji_info: "当你受到1点伤害后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。",
			xianzhou_info: "限定技。出牌阶段，你可以将装备区内的所有牌交给一名其他角色，然后该角色选择一项：令你回复X点体力；或对其攻击范围内的X名角色各造成1点伤害(X为你以此法交给该角色的牌的数量)。",
			qieting_info: "其他角色的回合结束时，若其未于此回合内使用过指定其他角色为目标的牌，你可以选择一项：将其装备区里的一张牌移动至你装备区里的相应位置；或摸一张牌。",
			zhuikong_info: "其他角色的准备阶段，若你已受伤，你可以与该角色拼点。若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标。若你没赢，其本回合至你的距离视为1。",
			oldzhuikong_info: "其他角色的准备阶段，若你已受伤，你可以与该角色拼点。若你赢，该角色跳过本回合的出牌阶段。若你没赢，其本回合至你的距离视为1。",
			qiuyuan_info: "当你成为【杀】的目标时，你可以令一名其他角色选择一项：①、交给你一张【闪】；②、成为此【杀】的额外目标。",
			oldqiuyuan_info: "当你成为【杀】的目标时，你可以令一名有手牌的其他角色正面朝上交给你一张牌。若此牌不为【闪】，则该角色也成为此【杀】的额外目标。",
			gongji_info: "出牌阶段限一次，你可以弃置一张牌，然后你的攻击范围视为无限直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。",
			zhuiyi_info: "当你死亡时，你可以令一名其他角色（杀死你的角色除外）摸三张牌，然后其回复1点体力。",
			anxu_info: "出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌多的角色将一张手牌交给手牌少的角色，然后若这两名角色手牌数相等，你摸一张牌或回复1点体力。",
			old_anxu_info: "出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为黑桃，则你摸一张牌。",
			zongxuan_info: "当你的牌因弃置而进入弃牌堆后，你可以将其按任意顺序置于牌堆顶。",
			zhiyan_info: "结束阶段，你可以令一名角色摸一张牌并展示之，若为装备牌，其使用此牌并回复1点体力。",
			miji_info: "结束阶段，若你已受伤，则可以摸X张牌，然后可以将等量的牌交给其他角色（X为你已损失的体力值）。",
			zhenlie_info: "当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以失去1点体力并令此牌对你无效，然后弃置对方一张牌。",
			chengxiang_info: "当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌。",
			oldchengxiang_info: "当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于12的牌。",
			renxin_info: "当体力值为1的一名其他角色受到伤害时，你可以将武将牌翻面并弃置一张装备牌，然后防止此伤害。",
			oldrenxin_info: "其他角色进入濒死状态时，你可以将所有手牌交给该角色并翻面，然后该角色回复1点体力。",
			jingce_info: "出牌阶段结束时，若你本回合使用的牌数量大于或等于你的当前体力值，你可以摸两张牌。",
			xinjingce_info: "结束阶段，若你本回合使用的牌数量大于或等于你的当前体力值，你可以摸两张牌。",
			xswuyan_info: "锁定技，你使用的普通锦囊牌对其他角色无效；其他角色使用的普通锦囊牌对你无效。",
			xinwuyan_info: "锁定技，当你使用锦囊牌造成伤害时，你防止此伤害；锁定技，当你受到锦囊牌对你造成的伤害时，你防止此伤害。",
			jujian_info: "出牌阶段限一次，你可以弃至多三张牌，然后令一名其他角色摸等量的牌。若你以此法弃牌不少于三张且均为同一类别，你回复1点体力。",
			xinjujian_info: "结束阶段开始时，你可以弃置一张非基本牌并选择一名其他角色，令其选择一项：1.摸两张牌；2.回复1点体力；3.将其武将牌翻转至正面朝上并重置之。",
			luoying_info: "当其他角色的梅花牌因弃置或判定而进入弃牌堆后，你可以获得之。",
			jiushi_info: "当你需要使用一张【酒】时，若你的武将牌正面朝上，则你可以将武将牌翻面并视为使用了一张【酒】；当你受到伤害时，若你的武将牌背面朝上，则你可在此伤害结算后将武将牌翻回正面。",
			jueqing_info: "锁定技，你即将造成的伤害均视为失去体力。",
			shangshi_info: "当你的手牌数小于X时，你可以将手牌摸至X张（X为你已损失的体力值）。",
			xuanfeng_info: "当你失去装备区内的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
			zhiyu_info: "当你受到伤害后，你可以摸一张牌，然后展示所有手牌。若颜色均相同，你令伤害来源弃置一张手牌。",
			qice_info: "出牌阶段限一次，你可以将所有的手牌（至少一张）当做任意一张普通锦囊牌使用。",
			jiangchi_info: "摸牌阶段摸牌时，你可以选择一项：1、额外摸一张牌，若如此做，你不能使用或打出【杀】直到回合结束。 2、少摸一张牌，若如此做，你使用【杀】无距离限制且可以多使用一张【杀】直到回合结束。",
			zishou_info: "摸牌阶段，你可以额外摸X张牌（X为场上势力数）。然后你于本回合的出牌阶段内使用的牌不能指定其他角色为目标。",
			zongshi_info: "锁定技，你的手牌上限+X（X为场上现存势力数）。",
			danshou_info: "出牌阶段，你可以选择你攻击范围内的一名其他角色，然后弃置X张牌（X为此前你于此阶段你发动“胆守”的次数+1）。若X：为1，你弃置该角色的一张牌；为2，令该角色交给你一张牌；为3，你对该角色造成1点伤害；不小于4，你与该角色各摸两张牌。",
			olddanshou_info: "当你造成伤害后，你可以摸一张牌。若如此做，终止一切结算，当前回合结束。",
			xindanshou_info: "①每回合限一次，当你成为基本牌或锦囊牌的目标后，你可以摸X张牌（X为你本回合内成为过基本牌或锦囊牌的目标的次数）。②一名其他角色的结束阶段，若你本回合内没有发动过〖胆守①〗，则你可以弃置X张牌并对其造成1点伤害（X为其手牌数，无牌则不弃）。",
			yizhong_info: "锁定技，当你的防具栏为空时，黑色的【杀】对你无效。",
			xinzhan_info: "出牌阶段限一次，若你的手牌数大于你的体力上限，你可以观看牌堆顶的三张牌，然后展示其中任意红桃牌并获得之。",
			huilei_info: "锁定技，当你死亡时，杀死你的角色弃置所有的牌。",
			enyuan_info: "锁定技。①当其他角色令你回复1点体力后，该角色摸一张牌。②当其他角色对你造成伤害后，其须交给你一张♥手牌，否则失去1点体力。",
			xuanhuo_info: "出牌阶段限一次，你可以将一张红桃手牌交给一名其他角色，获得该角色的一张牌，然后交给除该角色外的一名其他角色。",
			ganlu_info: "出牌阶段限一次，你可以选择两名装备区内装备数之差不大于X的角色，令其交换装备区内的牌（X为你已损失的体力值）。",
			buyi_info: "当有角色进入濒死状态时，你可以展示该角色的一张手牌：若此牌不为基本牌，则该角色弃置此牌并回复1点体力。",
			mingce_info: "出牌阶段，你可以交给一名其他角色一张装备牌或【杀】，然后令该角色选择一项：1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】。2. 摸一张牌。每回合限一次。",
			zhichi_info: "锁定技，当你于回合外受到伤害后，所有【杀】或普通锦囊牌对你无效直到回合结束。",
			zhichi2_info: "智迟已发动",
			pojun_info: "当你使用【杀】造成伤害后，你可以令受伤角色摸X张牌，然后其翻面（X为该角色的体力值且至多为5）。",
			shiyong: "恃勇",
			shiyong_info: "锁定技，当你受到一次红色【杀】或【酒】【杀】造成的伤害后，须减1点体力上限。",
			old_guanzhang: "旧关兴张苞",
			old_guanzhang_prefix: "旧",
			wangyi: "王异",
			oldqianxi: "潜袭",
			oldqianxi_info: "当你使用【杀】对距离为1的目标角色造成伤害时，你可以进行一次判定，若判定结果不为红桃，你防止此伤害，令其减1点体力上限。",
			oldzhenlie: "贞烈",
			oldzhenlie_info: "在你的判定牌生效前，你可以亮出牌堆顶的一张牌代替之。",
			oldmiji: "秘计",
			oldmiji_info: "准备/结束阶段开始时，若你已受伤，你可以判定，若判定结果为黑色，你观看牌堆顶的X张牌（X为你已损失的体力值），然后将这些牌交给一名角色。",
			old_fuhun: "父魂",
			old_fuhun_info: "摸牌阶段开始时，你可以放弃摸牌，改为从牌堆顶亮出两张牌并获得之，若亮出的牌颜色不同，你获得〖武圣〗和〖咆哮〗直到回合结束。",
			rejueqing: "绝情",
			rejueqing_info: "当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力并修改〖绝情〗（X为伤害值）。",
			rejueqing_1st: "绝情",
			rejueqing_rewrite: "绝情·改",
			rejueqing_rewrite_info: "锁定技，你即将造成的伤害均视为失去体力。",
			reshangshi: "伤逝",
			reshangshi_2nd: "伤逝",
			reshangshi_info: "当你受到伤害时，你可以弃置一张牌。当你的手牌数小于X时，你可以将手牌摸至X张。（X为你已损失的体力值）",
			rejingce: "精策",
			rejingce2: "精策",
			rejingce_add: "精策",
			rejingce_info: "当你于一回合内首次使用某种花色的手牌时，你的手牌上限+1。出牌阶段结束时，你可以摸X张牌（X为你本阶段内使用过的牌的类型数）。",
			xinkuangbi: "匡弼",
			xinkuangbi_info: "出牌阶段限一次。你可以令一名其他角色交给你至多三张牌（不计入你本回合的手牌上限）。然后其于其的下回合开始时摸等量的牌。",
			xinzhaofu: "诏缚",
			xinzhaofu_info: "主公技，限定技。出牌阶段，你可选择至多两名其他角色。这两名角色视为在所有其他吴势力角色的攻击范围内。",
			olbingyi: "秉壹",
			olbingyi_info: "每阶段限一次。当你因弃置而失去牌后，你可以展示所有手牌。若这些牌的颜色均相同，则你可以与至多X名其他角色各摸一张牌（X为你的手牌数）。",
			lukai: "陆凯",
			lukai_spade: "♠",
			lukai_spade_bg: "♠️",
			lukai_heart: "♥",
			lukai_heart_bg: "♥️",
			lukai_club: "♣",
			lukai_club_bg: "♣",
			lukai_diamond: "♦",
			lukai_diamond_bg: "♦️️",
			lkbushi: "卜筮",
			lkbushi_info: "①你使用♠牌无次数限制。②当你使用或打出♥牌后，你摸一张牌。③当你成为♣牌的目标后，你可以弃置一张牌，令此牌对你无效。④结束阶段开始时，你从牌堆或弃牌堆获得一张♦牌。⑤准备阶段开始时，你可调整此技能中四种花色的对应顺序。",
			lkzhongzhuang: "忠壮",
			lkzhongzhuang_info: "锁定技。①当你因执行【杀】的效果而造成伤害时，若你的攻击范围大于3，则此伤害+1。②当一名角色受到你因执行【杀】的效果而造成的伤害时，若你的攻击范围小于3，则此伤害改为1。",
			kebineng: "轲比能",
			kousheng: "寇旌",
			kousheng_info: "①出牌阶段开始时，你可以选择任意张手牌，这些牌称为“寇旌”直到回合结束。②你的“寇旌”均视为【杀】且无次数限制。③当你因执行对应实体牌包含“寇旌”的【杀】的效果而造成伤害后，你展示所有“寇旌”牌，然后目标角色可以用所有手牌交换这些牌。",
			zhugeshang: "诸葛尚",
			sangu: "三顾",
			sangu_info: "结束阶段，你可以选择至多三个{【杀】或不为notarget或singleCard的普通锦囊牌}中的牌名，然后令一名其他角色记录这些牌名。该角色的下个出牌阶段开始时，其的手牌于其需要使用牌时均视为其记录中的第一张牌直到此阶段结束，且当其使用或打出有对应实体牌的牌时，移除这些牌中的第一张牌。若你以此法选择过的牌名均为你本回合内使用过的牌名，则防止你因其以此法使用牌造成的伤害。",
			yizu: "轶祖",
			yizu_info: "锁定技。每回合限一次，当你成为【杀】或【决斗】的目标后，若你的体力值不大于使用者的体力值，则你回复1点体力。",
			liwan: "李婉",
			liandui: "联对",
			liandui_info: "①当你使用牌时，若本局游戏内上一张被使用的牌的使用者不为你，你可以令其摸两张牌。②其他角色使用牌时，若本局游戏内上一张被使用的牌的使用者为你，其可以令你摸两张牌。",
			biejun: "别君",
			biejun_info: "①其他角色的出牌阶段限一次。其可以将一张手牌交给你。②每回合限一次。当你受到伤害时，若你手牌中没有本回合因〖别君①〗得到的牌，你可以翻面并防止此伤害。",
			yj_sufei: "苏飞",
			shuojian: "数谏",
			shuojian_info: "出牌阶段限三次。你可以交给一名其他角色一张牌，其选择一项：1.令你摸X张牌并弃置X-1张牌；2.视为使用X张【过河拆桥】，然后此技能本回合失效（X为此技能本阶段剩余发动次数+1）。",
			yj_qiaozhou: "谯周",
			shiming: "识命",
			shiming_info: "每轮限一次。一名角色的摸牌阶段，你可以观看牌堆顶的三张牌，并可以将其中一张置于牌堆底。然后该角色可以改为对自己造成1点伤害，然后从牌堆底摸三张牌。",
			jiangxi: "将息",
			jiangxi_info: "一名角色的回合结束时，若一号位于此回合内进入过濒死状态或未受到过伤害，你可以重置〖识命〗并摸一张牌；若所有角色均未受到过伤害，你可以与当前回合角色各摸一张牌。",
			hanlong: "韩龙",
			duwang: "独往",
			duwang_info: "锁定技。①游戏开始时，你从牌堆顶将五张不为【杀】的牌置于武将牌上，称为“刺”。②若你有牌名不为【杀】“刺”，你至其他角色或其他角色至你的距离+1。",
			cibei: "刺北",
			cibei_info: "①当一名角色使用非转化【杀】造成伤害且此牌对应的实体牌进入弃牌堆后，你可以将一张不为【杀】的“刺”置入弃牌堆，并将这些牌置入“刺”，然后弃置一名角色区域里的一张牌。②一名角色的回合结束时，若你的“刺”均为【杀】，你获得所有“刺”，且这些牌不能被弃置，不计入手牌上限，且当你使用对应实体牌包含这些牌的牌时无次数和距离限制。",
			wuanguo: "武安国",
			diezhang: "叠嶂",
			diezhang_info: "转换技。①出牌阶段，你使用【杀】的次数上限+1。②阴：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用X张【杀】；阳：当其他角色使用牌被你抵消后，你可以摸X张牌，视为对其使用一张【杀】（X为1）。",
			duanwan: "断腕",
			duanwan_info: "限定技。当你处于濒死状态时，你可以将体力回复至2点，然后删除〖叠嶂①〗和当前转换技状态的〖叠嶂②〗分支，并将〖叠嶂〗修改为“每回合限一次”且将X修改为2。",
			dcduliang: "督粮",
			dcduliang2: "督粮",
			dcduliang_info: "出牌阶段限一次。你可以获得一名其他角色的一张牌，然后选择一项：1.你观看牌堆顶的两张牌，然后令其获得其中的一或两张基本牌；2.令其于下回合的摸牌阶段额外摸一张牌。",
			sunli: "孙礼",
			kangli: "伉厉",
			kangli_info: "当你造成或受到伤害后，你摸两张牌。然后你下次造成伤害时弃置这些牌。",
			xiahoumao: "夏侯楙",
			tongwei: "统围",
			tongwei_info: "出牌阶段限一次。你可以重铸两张牌并指定一名其他角色，当其使用的下一张牌结算结束后，若此牌点数在你上次以此法重铸的牌的点数之间，你视为对其使用一张【杀】或【过河拆桥】。",
			cuguo: "蹙国",
			cuguo_info: "锁定技。当你于一回合使用牌首次被抵消后，你弃置一张牌，视为对此牌的目标角色使用一张该被抵消的牌。此牌结算结束后，若此牌被抵消，你失去1点体力。",
			chenshi: "陈式",
			qingbei: "擎北",
			qingbei_info: "一轮游戏开始时，你可以选择任意种花色，你不能于本轮内使用这些花色的牌。然后当你于本轮使用一张有花色的牌结算结束后，你摸等同于你上一次〖擎北〗选择过的花色数的牌。",
			feiyao: "费曜",
			zhenfeng: "镇锋",
			zhenfeng_info: "每回合限一次。当其他角色于其回合内使用牌时，若其手牌数不大于其体力值，你可以猜测其手牌中与此牌类别相同的牌数。若你猜对，你摸X张牌并视为对其使用一张【杀】（X为你连续猜对的次数且至多为5）；若你猜错且差值大于1，其视为对你使用一张【杀】。",
			linghuyu: "令狐愚",
			yj_simafu: "司马孚",
			yj_xuangongzhu: "宣公主",
			xukun: "徐琨",
			xvzhi: "蓄志",
			xvzhi_info: "出牌阶段限一次，你可令两名角色各选择任意张手牌并交换这些牌，然后获得牌数较少的角色视为使用无视距离的【杀】；若获得牌数相等，你摸两张牌且可以对此阶段未以此法选择过的角色再发动一次〖蓄志〗。",
			beiyu: "备预",
			beiyu_info: "出牌阶段限一次，你可将手牌摸至体力上限，然后你将一种花色的所有手牌置于牌堆底。",
			duchi: "督持",
			duchi_info: "每回合限一次，当你成为其他角色使用牌的目标后，你可从牌堆底摸一张牌并展示所有手牌，若颜色均相同，则此牌对你无效。",
			yjqimei: "齐眉",
			yjqimei_info: "出牌阶段限一次，你可以选择一名其他角色，你与其各摸两张牌并弃置两张牌，然后你根据你与其弃置牌的花色总数执行以下效果：1、你依次使用这些弃置的牌中可以使用的牌；2、你与其复原武将牌；3、你与其横置武将牌；4、你与其各摸一张牌，然后你修改〖齐眉〗为“出牌阶段限两次”直到回合结束。",
			yjzhuiji: "追姬",
			yjzhuiji_info: "当你死亡时，你可以令一名角色从牌堆和弃牌堆中的随机使用任意装备牌直至其没有空置的装备栏。若如此做，当其失去以此法使用的装备牌后，其废除对应的装备栏。",
			fazhu: "筏铸",
			fazhu_info: "准备阶段，你可以重铸你的区域内任意张非伤害牌，然后将以此法获得的牌交给至多等量名角色各一张，这些角色可以依次使用一张无距离限制的【杀】。",
			yj_majun: "马钧",
			yjgongqiao: "工巧",
			yjgongqiao_info: "出牌阶段限一次，你可将一张手牌置入一个装备栏（替换原装备）；若你的装备区内有：基本牌，你使用基本牌数值+1；锦囊牌，你每回合首次使用一种类型的牌后摸一张牌；装备牌，手牌上限+3。",
			yjjingyi: "精益",
			yjjingyi_info: "锁定技，有牌进入你的装备区后，你摸X张牌，然后弃置两张牌（X为你装备区里的牌数）。",

			yijiang_2011: "一将成名2011",
			yijiang_2012: "一将成名2012",
			yijiang_2013: "一将成名2013",
			yijiang_2014: "一将成名2014",
			yijiang_2015: "一将成名2015",
			yijiang_2016: "原创设计2016",
			yijiang_2017: "原创设计2017",
			// 新一将成名
			yijiang_2022: "一将成名2022",
			yijiang_2023: "一将成名2023",
			yijiang_2025: "一将成名2025",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
