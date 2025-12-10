import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "collab",
		connect: true,
		connectBanned: [
			
		],
		character: {
			jiangziya: ["male", "qun", 3, ["xingzhou", "lieshen"]],
			shengongbao: ["male", "qun", 3, ["zhuzhou", "yaoxian"]],
			nanjixianweng: ["male", "qun", 3, ["xwshoufa", "fuzhao"]],
			ol_jsrg_caocao: ["male", "qun", 4, ["oldingxi", "olnengchen", "olhuojie"], ["character:jsrg_caocao"]],
			// 临时修改（by 棘手怀念摧毁）
			liuxiecaojie: ["double", "qun", 2, ["dcjuanlv", "dcqixin"]],
			// liuxiecaojie: ["male", "qun", 2, ["dcjuanlv", "dcqixin"]],
			dc_zhaoyun: [
				"male",
				"shen",
				1,
				["boss_juejing", "dclonghun", "dczhanjiang"],
				["shu", "InitFilter:noZhuHp:noZhuSkill"],
			],
			dc_sunce: ["male", "wu", 4, ["dcshuangbi"]],
			nezha: ["male", "qun", 3, ["dcsantou", "dcfaqi"], ["InitFilter:noZhuHp"]],
			dc_caocao: ["male", "wei", 4, ["dcjianxiong"]],
			dc_liubei: ["male", "shu", 4, ["dcrende"]],
			dc_sunquan: ["male", "wu", 4, ["dczhiheng"]],
			zhutiexiong: ["male", "qun", 3, ["dcbianzhuang"]],
			wu_zhutiexiong: ["male", "qun", 3, ["dcbianzhuang"], ["unseen"]],
			xiaoyuehankehan: ["male", "qun", 3, ["dctongliao", "dcwudao"], ["die_audio:xiaoyuehankehan:xiaoyuehankehan2:xiaoyuehankehan3"]],
			libai: ["male", "qun", 3, ["dclbjiuxian", "dcshixian"], ["die_audio:libai:libai2"]],
			sunwukong: ["male", "qun", 3, ["dcjinjing", "dccibei", "dcruyi"]],
			longwang: ["male", "qun", 3, ["dclonggong", "dcsitian"]],
			taoshen: ["male", "qun", 3, ["dcnutao"]],
			sunyang: ["male", "wu", 4, ["clbshuijian"]],
			yeshiwen: ["female", "wu", 3, ["clbjisu", "clbshuiyong"]],
			sp_jiben: ["male", "qun", 3, ["spduanzhi", "spduyi"]],
			sp_fuhuanghou: ["female", "qun", 3, ["spcangni", "spmixin"]],
			sp_fuwan: ["male", "qun", 3, ["spfengyin", "spchizhong"]],
			old_lingju: ["female", "qun", 3, ["jieyuan", "fenxin_old"]],
			sp_mushun: ["male", "qun", 4, ["moukui"]],
			dc_wuyi: ["male", "shu", 4, ["dcbenxi"]],
			quyuan: ["male", "qun", 3, ["dcqiusuo", "dclisao"]],
			xin_sunquan: ["male", "wu", 3, ["dchuiwan", "dchuanli"]],
			wuhujiang: ["male", "shu", 4, ["olhuyi"], ["die_audio:wuhujiang:wuhujiang2:wuhujiang3:wuhujiang4:wuhujiang5"]],
			dc_noname: ["male", "qun", 3, ["dcchushan"]],
			xunyuxunyou: ["male", "wei", 3, ["zhinang", "gouzhu"]],
			mp_wangrong: ["male", "wei", 3, ["mpjianlin", "mpsixiao"]],
			mp_liuling: ["male", "jin", 3, ["mpjiusong", "mpmaotao", "mpbishi"], ["doublegroup:wei:qun:jin"]],
			mp_xiangxiu: ["male", "jin", 3, ["mpmiaoxi", "mpsijiu"], ["doublegroup:wei:jin"]],
		},
		characterSort: {
			collab: {
				collab_olympic: ["sunyang", "yeshiwen"],
				collab_tongque: ["sp_fuwan", "sp_fuhuanghou", "sp_jiben", "old_lingju", "sp_mushun"],
				collab_oldoudizhu: ["wuhujiang", "ol_jsrg_caocao"],
				collab_wuyi: ["dc_wuyi"],
				collab_liuyi: ["xin_sunquan"],
				collab_duanwu: ["sunwukong", "longwang", "taoshen", "quyuan"],
				collab_qixi: ["liuxiecaojie"],
				collab_decade: ["libai", "xiaoyuehankehan", "zhutiexiong", "wu_zhutiexiong"],
				collab_remake: ["dc_caocao", "dc_liubei", "dc_sunquan", "nezha", "dc_sunce", "dc_zhaoyun", "dc_noname", "xunyuxunyou"],
				mini_qixian: ["mp_liuling", "mp_wangrong", "mp_xiangxiu"],
				collab_anime: ["jiangziya", "shengongbao", "nanjixianweng"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			liuxiecaojie: "请分别查看「刘协」和「曹节」的武将介绍。",
			dc_noname: " ",
			xunyuxunyou: "请分别查看「荀彧」和「荀攸」的武将介绍。",
			wuhujiang: "请分别查看「关羽」、「张飞」、「赵云」、「马超」和「黄忠」的武将介绍。",
			quyuan: "屈原（约前340年～前278年），芈姓（一作嬭姓），屈氏，名平，字原，又自云名正则，字灵均，出生于楚国丹阳秭归（今湖北省宜昌市），战国时期楚国诗人、政治家。楚武王熊通之子屈瑕的后代（一说屈氏的来源是西周前期的楚国人屈紃）。屈原少年时受过良好的教育，博闻强识，志向远大。早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤诽谤，被先后流放至汉北和沅湘流域。前278年，楚国郢都被秦军攻破后，自沉于汨罗江，以身殉楚国。屈原是中国历史上一位伟大的爱国诗人，中国浪漫主义文学的奠基人，“楚辞”的创立者和代表作家，开辟了“香草美人”的传统，被誉为“楚辞之祖”，楚国有名的辞赋家宋玉、唐勒、景差都受到屈原的影响。屈原作品的出现，标志着中国诗歌进入了一个由大雅歌唱到浪漫独创的新时代，其主要作品有《离骚》《九歌》《九章》《天问》等。以屈原作品为主体的《楚辞》是中国浪漫主义文学的源头之一，对后世诗歌产生了深远影响。成为中国文学史上的璀璨明珠，“逸响伟辞，卓绝一世”。“路漫漫其修远兮，吾将上下而求索”，屈原的“求索”精神，成为后世仁人志士所信奉和追求的一种高尚精神。",
			sunwukong:
				"孙悟空是中国古典小说《西游记》的主人公，也是中国神话中的民俗神祇之一，明代百回本《西游记》书中最为深入人心的形象之一。《西游记》中的孙悟空本是天地生成的一个石猴，率领群猴在花果山水帘洞过着逍遥自在的日子，后来为学习长生的法术而拜菩提祖师为师，学会了七十二变和筋斗云等绝技。后来他前往东海龙宫夺取如意金箍棒，又大闹地府勾了生死簿，惊动天庭，天庭两次派兵征讨花果山，仍然降他不得，只好请西天如来佛祖前来助阵。如来佛祖以五行山将悟空压在山下五百年。五百年后，悟空在观音菩萨的指点下拜唐僧为师，并跟随唐僧前往西天求取真经。路上唐僧又收了猪八戒、沙和尚两个徒弟，众人在途中斩妖除魔、历经磨难，终于取得真经，修成正果。",
			longwang:
				"东海龙王，名敖广，是中国古代神话传说中的龙族之王，为“四海龙王”之首，亦为所有水族之王。统治东海之洋，主宰着雨水、雷鸣、洪灾、海潮、海啸等。曾下陷东京、水淹陈塘关（影视设定）。在中国以东方为尊位，按周易来说东为阳，故此东海龙王排第一便是理所应当。常记载于《西游记》《封神演义》《三教搜神大全》等文学典籍。东海龙王居于东海的海底水晶宫（花果山瀑布顺流可直抵龙宫）。虽为司雨之神，但其保持着较大的特殊自由性，人间降雨由其它江河湖井龙王完成，很少需要东海龙王亲自降雨。海洋管辖之权为龙王所有，天庭一般任其自治。",
			taoshen:
				"涛神，是司掌钱塘江的神，传说其原型为春秋战国时期的吴国大臣伍子胥。伍子胥从楚国投奔吴国，为吴国立下了汗马功劳；但吴王夫差听信太宰伯嚭的谗言，逐渐疏远了伍子胥，最后还赐死了他。伍子胥含冤身亡，十分悲愤，做出了吴国灭亡的预言后自杀。暴怒的夫差下令用皮革包裹住伍子胥的尸身，在五月五日这天丢进钱塘江。百姓可怜伍子胥忠于吴王却遭受惨死，因此将五月五日这一天定为节日，以此纪念伍子胥，这也是端午节的来历之一。",
			libai: "李白（701年2月28日—762年12月），字太白，号青莲居士，祖籍陇西成纪（今甘肃省秦安县），出生于蜀郡绵州昌隆县（一说出生于西域碎叶）。唐朝伟大的浪漫主义诗人，凉武昭王李暠九世孙。<br>为人爽朗大方，乐于交友，爱好饮酒作诗，名列“酒中八仙”。曾经得到唐玄宗李隆基赏识，担任翰林学士，赐金放还，游历全国，先后迎娶宰相许圉师、宗楚客的孙女。唐肃宗即位后，卷入永王之乱，流放夜郎，辗转到达当涂县令李阳冰家。上元二年，去世，时年六十二。<br>著有《李太白集》，代表作有《望庐山瀑布》《行路难》《蜀道难》《将进酒》《早发白帝城》等。李白所作词赋，就其开创意义及艺术成就而言，享有极为崇高的地位，后世誉为“诗仙”，与诗圣杜甫并称“李杜”。",
			sunyang:
				"孙杨，1991年12月1日生于浙江杭州，男子1500米自由泳世界纪录保持者，男子400米自由泳奥运会纪录保持者。年伦敦奥运会男子400米自由泳、男子1500米自由泳冠军；2016年里约奥运会男子200米自由泳冠军。孙杨是世界泳坛历史上唯一一位男子200米自由泳、男子400米自由泳、男子1500米自由泳的奥运会世锦赛大满贯冠军得主，史上唯一一位男子400米自由泳世锦赛四连冠，唯一一位男子800米自由泳世锦赛三连冠，男子自由泳个人单项金牌数居世界第一。",
			yeshiwen:
				"叶诗文，1996年3月1日生于浙江省杭州市，中国女子游泳队运动员，女子200米混合泳奥运会纪录保持者。叶诗文是中国泳坛首位集奥运会、长池世锦赛、短池世锦赛、游泳世界杯、亚运会、全运会冠军于一身的运动员，成为中国泳坛首个金满贯。2010年广州亚运会女子200米和400米个人混合泳冠军。2011年上海世界游泳锦标赛女子200米混合泳冠军。2012年伦敦奥运会女子200米混合泳、400米混合泳冠军。2012年伊斯坦布尔短池世锦赛女子200米混合泳冠军。2013年辽宁全运会女子200米、400米混合泳冠军。2016年里约奥运会女子200米混合泳第八名。2017年天津全运会女子200米混合泳冠军。2019年光州世界游泳锦标赛女子200米混合泳亚军、女子400米混合泳亚军。2018年1月30日，当选为浙江省出席第十三届全国人民代表大会代表。2019年7月28日，2019年韩国光州游泳世锦赛，叶诗文以4分32秒07获得亚军。2021年9月19日，叶诗文获得第十四届全国运动会游泳女子4×200米混合泳接力金牌。9月22日，叶诗文获得全运会女子200米个人混合泳银牌。",
			jiben: "吉本（？—218年），东汉末年太医令。建安二十三年春正月，时金祎自以世为汉臣，睹汉祚将移，谓可季兴，乃喟然发愤，遂与太医令本、少府耿纪、司直韦晃、本子邈、邈弟穆等结谋攻许，杀曹公长史王必，南援刘备。后必营，必与典农中郎将严匡讨斩之。在《三国演义》中，吉本在此为吉平或吉太，因字称平，故又唤作吉平。曾参与董承等人刺杀曹操的计划，并企图在为曹操治病时毒死曹操，但被曹操识破而遭处刑。之后其子吉邈和吉穆都参与了由耿纪和韦晃等人所发动的反叛曹操的行动，但都失败被杀。",
			xiaoyuehankehan:
				'小约翰可汗，知乎答主，<style type="text/css">#xiaoyuehankehan_bilibili:link, #xiaoyuehankehan_bilibili:visited {color:white;}</style><a id="xiaoyuehankehan_bilibili" href="https://space.bilibili.com/23947287" target="_blank">bilibili知识区up主</a>，其视频以介绍冷门国家和名人为主，因其视频极具特色的幽默风格而知名。代表作包括《奇葩小国》系列和《硬核狠人》系列。昵称里的“小约翰”来源于《纸牌屋》里的主角弗朗西斯·厄克特的外号Little John。家乡在内蒙古通辽市，在《奇葩小国》系列视频中，介绍小国面积和人口时，常用通辽市的面积和人口作为计量单位，后简化为T。1T=6万平方公里或287万人（如：阿富汗面积约为64万平方公里，超过10T）。此梗成为该系列视频的特色之一，可汗也因此被称为“通辽可汗”。',
			zhutiexiong:
				"朱铁雄，福建莆田人，1994年出生，短视频创作者。中国魔法少年的英雄梦，国风变装的热血与浪漫。抖音年度高光时刻作者，国风变装现象级人物。创玩节期间化身三国杀武将，来一场热血变身！",
			nezha: "哪吒是中国神话中的民俗神之一，在古典名著《西游记》《封神演义》等及其衍生作品中也多有登场。传说中，哪吒是托塔天王李靖的第三子。哪吒之母怀胎三年，而哪吒出生之时是一个肉球，李靖惊怒之下，用剑劈开了肉球，而哪吒就在肉球中。哪吒广泛流传于道教以及民间传说中，被称为三坛海会大神、威灵显圣大将军、中坛元帅等，民间俗称“三太子”，又常冠其父姓，称为“李哪吒”。哪吒的原型为佛教护法神“那咤”。在不同作品的设定中，哪吒的师承关系有所不同，比如《封神演义》中，哪吒是太乙真人的弟子、元始天尊的徒孙，而《西游记》之中，哪吒则是释迦牟尼（如来佛祖）的弟子。在传说中，哪吒的形象常被形容为可化作三头六臂（封神之中是三头八臂），使用多种武器战斗。比如，《封神演义》中哪吒使用的武器（法宝）为乾坤圈、混天绫、火尖枪和风火轮等，西游记中是斩妖剑、砍妖刀、缚妖索、降妖杵、绣球儿、火轮儿。而哪吒第一次死后被其师父（太乙真人或如来佛祖）以莲花和莲藕复活。",
			jiangziya: "姜太公（？－前1015年或前1036年），姜姓，吕氏，名尚或望，字子牙（或单呼“牙”），后世称姜子牙、齐太公、师尚父、太公望、吕望、吕尚、姜尚等。籍贯有“东海上”（今山东日照）、河内汲县（今河南卫辉）等不同说法。中国商朝末年军事家、政治家、韬略家、思想家，西周开国元勋。",
			shengongbao: "申公豹是明代神魔小说《封神演义》中的人物，昆仑山玉虚宫元始天尊弟子，其随身佩一宝剑，有法宝开天珠，坐骑是白额虎。<br>申公豹与姜子牙、南极仙翁为阐教同门，然而，其本人性格狂妄自大、心胸狭窄，自诩有几千年的修行而违背元始天尊师命，逆势而为，选择保成汤、扶纣王，与以姜子牙为代表的扶周灭纣立场相悖。<br>申公豹作为《封神演义》中的反面人物，以其蛊惑人心、搬弄是非的形象让人熟知。离开昆仑山后，申公豹四处游说三十六路人马与姜子牙为敌，助纣王攻打西岐，最终，申公豹被元始天尊罚去以身体塞了北海眼，封神时，受封为东海分水将军。",
			nanjixianweng: "南极仙翁，为中国古代神话传说中的仙人，是古典小说及电视剧中衍生出来的名称，在道教典籍中暂未发现有南极仙翁称呼的神仙，其原型是道教著名的神仙“寿星老人”。以居南极，故名。常有鹿、鹤二童为其役使；鹿、鹤、灵芝，俱寿之征也。",
			liuling: "刘伶（约221年-约300年），字伯伦，西晋沛国（治今安徽濉溪县西北）人，竹林七贤之一，中国魏晋时期作家，名士。<br>刘伶自幼便失去了父爱，因其父亲身材矮小，及至长大成人后，刘伶身高也不过六尺。魏齐王曹芳正始之末（249年），刘伶已成为当世名重一时的名士，并且常与嵇康、阮籍、阮咸集会于山阳竹林之下，饮酒赋诗，弹琴作歌。晋武帝司马炎泰始初年（265年）前后，曾做过一段时间的建威参军，不久朝廷下诏，入宫中策问。他大谈老庄，强调无为而治，非但没有得到重用，反而连参军之职也被罢免了，从此再无仕进。晋惠帝司马衷永康元年（300年）前后，以寿而终。<br>刘伶有“品酒第一人”的美称，也被酒行业传颂至今，后人以古瀑河边上的井水酿酒，还取刘伶墓地的黄土垒成窖池酿酒，为了纪念刘伶，当地百姓也将“润泉涌”更名为“刘伶醉”。其传世作品仅有《酒德颂》《北芒客舍》两篇，其中《酒德颂》所表现出的藐视一切存在的气概，敌视礼教之士的反抗精神，既高扬了人格的力量，批判了当时的黑暗政治，同时也抒发了压抑的愤世之情，充满了浪漫色彩，气魄豪迈，用辞又骈偶间行，有无意追求而自至的特点，对后代影响极大。",
			mp_wangrong: "王戎（234年－305年7月11日），字濬冲。琅玡郡临沂县（今山东省临沂市白沙埠镇诸葛村）人。祖父为三国魏幽州刺史王雄，曹魏凉州刺史王浑的儿子。三国至西晋时期名士、官员，“竹林七贤”之一。<br>王戎出身琅玡王氏。自少神采秀美，长于清谈，以精辟的品评与识鉴而著称，以聪颖知名，为父辈好友、名士阮籍器重，后人视之为玄学名士。初袭父爵贞陵亭侯，被大将军司马昭辟为掾属。累官豫州刺史、建威将军，参与晋灭吴之战。战后以功进封安丰县侯，故人称“王安丰”。治理荆州时，他拉拢士人，颇有成效。后历任侍中、光禄勋、吏部尚书、太子太傅、中书令、尚书左仆射等职。元康七年（296年），升任司徒，位列三公。王戎认为天下将乱，于是不理世事，以山水游玩为乐。赵王司马伦发动政变时，王戎被牵连免官。之后被起用为尚书令，再迁司徒。右将军张方劫持晋惠帝入长安后，王戎逃奔郏县。<br>永兴二年（305年），王戎去世，时年七十二，谥号为“元”。",
			xiangxiu: "向秀（约227年－272年），字子期，河内怀县（今河南武陟）人。魏晋时期的文学家，竹林七贤之一。向秀雅好读书，与嵇康、吕安等人相善，隐居不仕。景元四年（263年）嵇康、吕安被司马昭害死后，向秀应本郡的郡上计到洛阳，受司马昭接见，后官至黄门侍郎、散骑常侍。泰始八年（272年）去世。",
		},
		characterTitle: {
			
		},
		characterFilter: {
			old_lingju(mode) {
				return mode == "identity";
			},
		},
		characterInitFilter: {
			dc_zhaoyun(tag) {
				if (tag == "noZhuSkill" && (get.mode() != "doudizhu" || _status.mode != "normal"))
					return false;
			},
		},
		card: {
			ruyijingubang: {
				fullskin: true,
				derivation: "sunwukong",
				type: "equip",
				subtype: "equip1",
				cardcolor: "heart",
				skills: ["ruyijingubang_skill", "ruyijingubang_effect"],
				equipDelay: false,
				distance: {
					attackFrom: -2,
					attackRange: (card, player) => {
						return player.storage.ruyijingubang_skill || 3;
					},
				},
				onEquip() {
					if (!card.storage.ruyijingubang_skill) card.storage.ruyijingubang_skill = 3;
					player.storage.ruyijingubang_skill = card.storage.ruyijingubang_skill;
					player.markSkill("ruyijingubang_skill");
				},
			},
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//姜子牙
			xingzhou: {
				audio: 2,
				usable: 1,
				trigger: {
					global: "damageEnd",
				},
				filter(event, player) {
					if (!event.source || !event.source.isIn()) return false;
					if (!player.canUse({ name: "sha" }, event.source, false)) return false;
					return player.countCards("h") > 1 && event.player.isMinHandcard();
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard("h", 2, get.prompt2("xingzhou", trigger.source))
						.set("chooseonly", true)
						.set("ai", card => {
							const player = get.player(),
								target = get.event().getTrigger().source;
							if (!player.canUse({ name: "sha" }, target, false)) return 0;
							if (get.effect(target, { name: "sha" }, player, player) <= 0) return 0;
							return 6 - get.value(card);
						})
						.forResult();
					event.result.targets = [trigger.source];
				},
				async content(event, trigger, player) {
					const { cards, targets } = event;
					await player.discard(cards);
					const card = { name: "sha", isCard: true };
					if (player.canUse(card, targets[0], false)) await player.useCard(card, targets, false);
					if (
						game.getGlobalHistory("everything", evt => {
							if (evt.name != "die" || evt.player != targets[0]) return false;
							return evt.reason?.getParent(event.name) == event;
						}).length > 0
					) {
						player.restoreSkill("lieshen");
					}
				},
			},
			lieshen: {
				audio: 2,
				init(player) {
					player.addSkill("lieshen_init");
				},
				onremove(player) {
					player.removeSkill("lieshen_init");
				},
				enable: "phaseUse",
				mark: true,
				skillAnimation: true,
				animationColor: "gray",
				limited: true,
				onChooseToUse(event) {
					if (game.online) return;
					let list = [];
					if (_status.lieshen_map) {
						let map = _status.lieshen_map;
						for (let key in map) {
							let target = game.findPlayer(current => current.playerid == key);
							if (target) {
								list.add([target, ...map[key]]);
							}
						}
					}
					event.set("lieshen_list", list);
				},
				filter(event, player) {
					const list = event.lieshen_list;
					if (!list || !list.length) return false;
					return list.some(map => {
						return map[0].hp != map[1] || map[0].countCards("h") != map[2];
					});
				},
				filterTarget(card, player, target) {
					const list = _status.event.lieshen_list;
					return list.some(map => {
						if (map[0] != target) return false;
						return map[0].hp != map[1] || map[0].countCards("h") != map[2];
					});
				},
				async content(event, trigger, player) {
					const target = event.target;
					player.awakenSkill(event.name);
					const map = _status.lieshen_map[target.playerid];
					if (map) {
						if (target.hp > map[0]) await target.loseHp(target.hp - map[0]);
						else if (target.hp < map[0]) await target.recoverTo(map[0]);
						const num = target.countCards("h");
						if (num > map[1]) await target.chooseToDiscard("h", num - map[1], true);
						else if (num < map[1]) await target.drawTo(map[1]);
					}
				},
				ai: {
					order: 2,
					result: {
						target(player, target) {
							const list = _status.event.lieshen_list;
							if (!list || !list.length) return 0;
							const map = list.find(key => key[0] == target);
							if (!map) return 0;
							let eff = 0,
								num1 = target.hp - map[1],
								num2 = target.countCards("h") - map[2];
							if (num1 > 0) {
								eff += get.effect(target, { name: "losehp" }, target, target) * num1;
							}
							else if (num1 < 0) {
								eff -= get.recoverEffect(target, target, target) * num1;
							}
							if (num2 > 0) {
								eff += get.effect(target, { name: "guohe_copy2" }, target, target) * num2;
							}
							else if (num2 < 0) {
								eff -= get.effect(target, { name: "draw" }, target, target) * num2;
							}
							if (Math.abs(eff) <= 5) return 0;
							return eff;
						},
					},
				},
				subSkill: {
					init: {
						trigger: {
							global: ["phaseBefore", "enterGame"],
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						charlotte: true,
						lastDo: true,
						async cost(event, trigger, player) {
							let targets = game.players;
							if (trigger.name != "phase" && trigger.player != player) targets = [trigger.player];
							let bool = targets.some(target => {
								if (!_status.lieshen_map) return true;
								return !_status.lieshen_map[target.playerid];
							});
							event.result = {
								bool: bool,
								targets: targets,
								skill_popup: false,
							};
						},
						async content(event, trigger, player) {
							if (!_status.lieshen_map) _status.lieshen_map = {};
							for (let target of event.targets) {
								if (_status.lieshen_map[target.playerid]) continue;
								_status.lieshen_map[target.playerid] = [target.hp, target.countCards("h")];
							}
						},
					},
				},
			},
			//申公豹
			zhuzhou: {
				audio: 2,
				usable: 1,
				trigger: {
					global: "damageSource",
				},
				filter(event, player) {
					if (!event.source || event.source == event.player) return false;
					if (!event.source.isIn() || !event.player.isIn()) return false;
					return event.source.isMaxHandcard() && event.player.countCards("h");
				},
				check(event, player) {
					return get.effect(event.player, { name: "shunshou_copy2" }, event.source, player) > 0;
				},
				logTarget: "source",
				prompt2: "令其获得受伤角色的一张手牌",
				async content(event, trigger, player) {
					await trigger.source.gainPlayerCard(trigger.player, "h", true);
				},
			},
			yaoxian: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				selectTarget: 2,
				multitarget: true,
				targetprompt: ["摸牌", "出杀目标"],
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 0) {
						return true;
					} else {
						return target != player;
					}
				},
				delay: false,
				async content(event, trigger, player) {
					const drawer = event.targets[0],
						target = event.targets[1];
					await drawer.draw(2);
					const result = await drawer
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "邀仙：对" + get.translation(target) + "使用一张杀，否则失去1点体力")
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						})
						.set("sourcex", target)
						.forResult();
					if (!result.bool) await drawer.loseHp();
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
							if (target.hp <= 1) return 0;
							return 1;
						},
					},
					order: 8.5,
					expose: 0.2,
				},
			},
			//寿星
			xwshoufa: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("h", card => lib.suit.includes(get.suit(card, player)));
				},
				chooseButton: {
					dialog(event, player) {
						const dialog = ui.create.dialog("###授法###请选择要给出的花色");
						return dialog;
					},
					chooseControl(event, player) {
						var list = player.getCards("h").reduce((arr, card) => arr.add(get.suit(card, player)), []);
						list.push("cancel2");
						return list;
					},
					check(event, player) {
						return 1 + Math.random();
					},
					backup(result, player) {
						return {
							audio: "xwshoufa",
							filterCard(card, player) {
								return get.suit(card, player) == result.control;
							},
							selectCard: -1,
							position: "h",
							suit: result.control,
							filterTarget:lib.filter.notMe,
							discard: false,
							lose: false,
							async content(event, trigger, player) {
								const { cards, target } = event;
								await player.give(cards, target);
								let suit = get.info(event.name).suit;
								if (suit) {
									let skill = lib.skill.xwshoufa.derivation[["spade", "heart", "club", "diamond"].indexOf(suit)];
									player.addSkill("xwshoufa_clear");
									target.addAdditionalSkills(`xwshoufa_${player.playerid}`, skill, true);
								}
							},
							ai: {
								result: {
									target(player, target) {
										if (target.hasSkillTag("nogain")) return 0;
										if (!ui.selected.cards?.length) return 0;
										return ui.selected.cards.reduce((sum, card) => sum += get.value(card, target), 0);
									}
								},
							},
						};
					},
					prompt(result, player) {
						let skill = lib.skill.xwshoufa.derivation[["spade", "heart", "club", "diamond"].indexOf(result.control)];
						return `将所有${get.translation(result.control)}牌交给一名其他角色并令其获得【${get.translation(skill)}】`;
					},
				},
				ai: {
					order: 2,
					result: { player: 1 },
				},
				derivation: ["tiandu", "retianxiang", "reqingguo", "new_rewusheng"],
				subSkill: {
					clear: {
						trigger: {
							player: "phaseBegin",
						},
						direct: true,
						firstDo: true,
						charlotte: true,
						async content(event, trigger, player) {
							game.players.forEach(current => {
								current.removeAdditionalSkills(`xwshoufa_${player.playerid}`);
							});
						},
					},
					backup: {},
				},
			},
			fuzhao: {
				audio: 2,
				trigger: {
					global: "dying",
				},
				logTarget: "player",
				filter(event, player) {
					return event.player.hp < 1;
				},
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await target
						.judge(function (card) {
							if (get.suit(card) == "heart") return 2;
							return 0;
						})
						.forResult();
					if (result?.suit) {
						if (result.suit == "heart") await target.recover();
					}
				},
			},
			//忠曹操
			//汉曹操
			//江山如故二代目
			oldingxi: {
				audio: 2,
				trigger: { global: "cardsDiscardAfter" },
				filter(event, player) {
					if (
						!player.getPrevious() ||
						!event.cards.filterInD("d").some(card => {
							return get.tag(card, "damage") && player.canUse(card, player.getPrevious());
						})
					) {
						return false;
					}
					const evt = event.getParent();
					if (evt.name != "orderingDiscard") {
						return false;
					}
					const evtx = evt.relatedEvent || evt.getParent();
					return player.hasHistory("useCard", evtxx => {
						if (evtxx.getParent().name === "oldingxi") {
							return false;
						}
						return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()) && get.tag(evtxx.card, "damage");
					});
				},
				async cost(event, trigger, player) {
					const target = player.getPrevious();
					const cards = trigger.cards.filterInD("d").filter(card => get.tag(card, "damage"));
					event.result = await player
						.chooseButton([get.prompt2(event.skill, target), cards])
						.set("filterButton", button => {
							const player = get.player(),
								target = get.event().target;
							return player.canUse(button.link, target);
						})
						.set("target", target)
						.set("ai", button => {
							const player = get.player(),
								target = get.event().target;
							return get.effect(target, button.link, player, player);
						})
						.forResult();
					if (event.result.bool) {
						event.result.cards = event.result.links;
					}
				},
				logTarget(event, player) {
					return player.getPrevious();
				},
				async content(event, trigger, player) {
					player.$gain2(event.cards, false);
					// 临时修改（by 棘手怀念摧毁）
					await game.asyncDelayx();
					// await game.delayx();
					const useCardEvent = player.useCard(event.cards[0], event.targets[0], false);
					await useCardEvent;
					const cards = useCardEvent.cards.filterInD("d");
					if (cards.length) {
						const next = player.addToExpansion(cards, "gain2");
						next.gaintag.add("oldingxi");
						await next;
					}
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) {
						player.loseToDiscardpile(cards);
					}
				},
				group: "oldingxi_biyue",
				subSkill: {
					biyue: {
						audio: "oldingxi",
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						locked: false,
						filter(event, player) {
							return player.countExpansions("oldingxi") > 0;
						},
						async content(event, trigger, player) {
							await player.draw(player.countExpansions("oldingxi"));
						},
					},
				},
			},
			olnengchen: {
				audio: 2,
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return event.card && player.getExpansions("oldingxi").some(card => card.name === event.card.name);
				},
				forced: true,
				content() {
					const cards = player.getExpansions("oldingxi").filter(card => card.name === trigger.card.name);
					player.gain(cards.randomGet(), player, "give");
				},
				ai: { combo: "oldingxi" },
			},
			olhuojie: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return player.countExpansions("oldingxi") > game.players.length + game.dead.length;
				},
				forced: true,
				async content(event, trigger, player) {
					let num = player.getExpansions("oldingxi").length;
					while (num > 0) {
						num--;
						const next = player.executeDelayCardEffect("shandian");
						await next;
						if (player.hasHistory("damage", evt => evt.getParent(2) == next)) {
							const cards = player.getExpansions("oldingxi");
							if (cards.length) {
								await player.gain(cards, player, "give");
							}
							break;
						}
					}
				},
				ai: {
					combo: "oldingxi",
					neg: true,
				},
			},
			//刘协曹节
			//我们意念合一×2
			dcjuanlv: {
				audio: 2,
				equipSkill: false,
				inherit: "cixiong_skill",
				filter(event, player) {
					return player.differentSexFrom(event.target);
				},
			},
			dcqixin: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return !player.storage.dcqixin_die;
				},
				filterCard: false,
				selectCard: [0, 1],
				prompt() {
					const player = get.player();
					return "将性别变更为" + (Boolean(player.storage["dcqixin"]) ? "刘协--男" : "曹节--女");
				},
				*content(event, map) {
					const player = map.player;
					player.changeZhuanhuanji("dcqixin");
					player.storage.dcqixin_hp[1 - Boolean(player.storage["dcqixin"])] = player.hp;
					const hp = player.storage.dcqixin_hp[0 + Boolean(player.storage["dcqixin"])];
					if (player.hp != hp) yield player.changeHp(hp - player.hp);
					player.tempBanSkill(
						"dcqixin",
						{
							player: ["useCard1", "useSkillBegin", "phaseUseEnd"],
							global: ["phaseAfter", "phaseBeforeStart"],
						},
						false
					);
					const sex = player.storage["dcqixin"] ? "female" : "male";
					game.broadcastAll(
						(player, sex) => {
							player.sex = sex;
						},
						player,
						sex
					);
					game.log(player, "将性别变为了", "#y" + get.translation(sex) + "性");
				},
				mark: true,
				zhuanhuanji: true,
				
				// 临时修改（by 棘手怀念摧毁）
				marktext: "☯",
				init(player) {
					if (_status.gameStarted && !player.storage.dcqixin_hp) player.storage.dcqixin_hp = [player.maxHp, player.maxHp];
					
					// 临时修改（by 棘手怀念摧毁）
					const sex = player.storage["dcqixin"] ? "female" : "male";
					game.broadcastAll(
						(player, sex) => {
							player.sex = sex;
						},
						player,
						sex
					);
					game.log(player, "将性别变为了", "#y" + get.translation(sex) + "性");
				},
				/*
				markimage: "image/character/liuxie.jpg",
				$zhuanhuanji(skill, player) {
					const image = Boolean(player.storage[skill]) ? "caojie" : "liuxie";
					const mark = player.marks[skill];
					if (mark) mark.setBackground(image, "character");
				},
				*/
				
				intro: {
					content(storage, player) {
						const str = "当前性别：" + (Boolean(!storage) ? "刘协--男" : "曹节--女");
						const hp = player.storage.dcqixin_hp || [player.maxHp, player.maxHp];
						return player.storage.dcqixin_die ? str : "<li>" + str + "<br><li>" + (Boolean(storage) ? "刘协" : "曹节") + "体力值：" + hp[1 - Boolean(storage)];
					},
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							const cards = player.getCards("hs");
							const target = game
								.filterPlayer(i => i != player)
								.sort((a, b) => {
									return (
										cards
											.filter(j => player.canUse(j, b, true, true) && get.effect(b, j, player, player) > 0)
											.reduce((sum, card) => {
												return sum + get.effect(b, card, player, player);
											}, 0) -
										cards
											.filter(j => player.canUse(j, a, true, true) && get.effect(a, j, player, player) > 0)
											.reduce((sum, card) => {
												return sum + get.effect(a, card, player, player);
											}, 0)
									);
								})[0];
							return player.differentSexFrom(target) ? 0 : 1;
						},
					},
				},
				derivation: "dcqixin_faq",
				group: ["dcqixin_die", "dcqixin_mark"],
				subSkill: {
					die: {
						audio: "dcqixin",
						trigger: { player: "dieBefore" },
						filter(event, player) {
							return !player.storage.dcqixin_die && player.maxHp > 0;
						},
						forced: true,
						locked: false,
						content() {
							trigger.cancel();
							player.storage.dcqixin_die = true;
							player.changeZhuanhuanji("dcqixin");
							const sex = player.storage["dcqixin"] ? "female" : "male";
							game.broadcastAll(
								(player, sex) => {
									player.sex = sex;
								},
								player,
								sex
							);
							game.log(player, "将性别变为了", "#y" + get.translation(sex) + "性");
							player.storage.dcqixin_hp[1 - Boolean(player.storage["dcqixin"])] = player.hp;
							const hp = player.storage.dcqixin_hp[0 + Boolean(player.storage["dcqixin"])];
							if (player.hp != hp) player.changeHp(hp - player.hp);
						},
					},
					//双武将牌--梦回橙续缘双面武将
					mark: {
						charlotte: true,
						trigger: { global: "gameStart" },
						filter(event, player) {
							return !player.storage.dcqixin_hp;
						},
						forced: true,
						popup: false,
						firstDo: true,
						content() {
							player.storage.dcqixin_hp = [player.maxHp, player.maxHp];
						},
					},
				},
			},
			//荀彧荀攸
			zhinang: {
				getMap() {
					if (!_status.zhinang_map) {
						_status.zhinang_map = {
							name: {},
							info: {},
						};
						let list;
						if (_status.connectMode) {
							list = get.charactersOL();
						} else {
							list = get.gainableCharacters();
						}
						list.forEach(name => {
							if (name !== "xunyuxunyou") {
								const skills = get.character(name, 3);
								skills.forEach(skill => {
									const info = get.info(skill);
									if (!info || (info.ai && info.ai.combo)) return;
									if (skill in _status.zhinang_map) return;
									if (get.translation(skill).includes("谋")) _status.zhinang_map.name[skill] = name;
									const voices = game.parseSkillText(skill, name);
									if (voices.some(data => data.includes("谋"))) {
										_status.zhinang_map.info[skill] = name;
									}
								});
							}
						});
					}
					return _status.zhinang_map;
				},
				trigger: {
					player: "useCardAfter",
				},
				filter(event, player) {
					return ["trick", "equip"].includes(get.type2(event.card));
				},
				prompt2(event, player) {
					const type = get.type2(event.card),
						name = `zhinang_${type}`,
						skills = player.getRemovableAdditionalSkills(name);
					let str = `获得一个技能${type == "trick" ? "台词" : "名"}包含“谋”的技能`;
					if (skills.length) {
						str = `失去${skills.map(skill => `【${get.translation(skill)}】`)}并${str}`;
					}
					return str;
				},
				async content(event, trigger, player) {
					const map = lib.skill.zhinang.getMap(),
						type = get.type2(trigger.card) == "equip" ? "name" : "info",
						list = Object.keys(map[type]);
					if (list.length > 0) {
						const skill = list.randomGet(),
							voiceMap = game.parseSkillTextMap(skill, map[type][skill]);
						if (type == "info") {
							findaudio: for (let data of voiceMap) {
								if (!data.text) continue;
								if (data.text.includes("谋")) {
									player.chat(data.text);
									game.broadcastAll(file => game.playAudio(file), data.file);
									break findaudio;
								}
							}
						}
						else player.flashAvatar("zhinang", map[type][skill])
						player.popup(skill);
						await player.addAdditionalSkills(`zhinang_${get.type2(trigger.card)}`, skill);
					}
				},
				init(player, skill) {
					player.addSkill(["zhinang_equip", "zhinang_trick"]);
				},
				onremove(player, skill) {
					player.removeSkill(["zhinang_equip", "zhinang_trick"]);
				},
				subSkill: {
					equip: {},
					trick: {},
				},
			},
			gouzhu: {
				trigger: {
					player: "changeSkillsAfter",
				},
				filter(_1, player, _3, skill) {
					let list = get.skillCategoriesOf(skill, player);
					return list.length && list.some(item => item in lib.skill.gouzhu.effectMap);
				},
				getIndex(event, player) {
					if (!event.removeSkill.length) return false;
					return event.removeSkill;
				},
				prompt(_1, _2, _3, skill) {
					return `失去了技能【${get.translation(skill)}】，是否发动【苟渚】？`;
				},
				frequent: true,
				effectMap: {
					"锁定技": async function () {
						let player = _status.event.player;
						if (player.isDamaged()) await player.recover();
					},
					"觉醒技": async function () {
						let player = _status.event.player;
						let card = get.cardPile(card => get.type(card) == "basic");
						if (card) await player.gain(card, "gain2");
					},
					"限定技": async function () {
						let player = _status.event.player;
						let target = game.filterPlayer(current => current != player).randomGet();
						if (target) {
							player.line(target, "green");
							await target.damage(player);
						}
					},
					"转换技": async function () {
						let player = _status.event.player;
						player.addMark("gouzhu", 1, false);
						game.log(player, '手牌上限+1');
						await game.asyncDelay();
					},
					"主公技": async function () {
						let player = _status.event.player;
						await player.gainMaxHp();
					},
				},
				mod: {
					maxHandcard: function (player, num) {
						return num + player.countMark("gouzhu");
					},
				},
				intro: {
					content: "手牌上限+#",
				},
				locked: false,
				onremove: true,
				async content(event, trigger, player) {
					let skill = event.indexedData;
					let list = get.skillCategoriesOf(skill, player);
					for (const item of list) {
						if (item in lib.skill.gouzhu.effectMap) {
							const next = game.createEvent("gouzhu_effect", false);
							next.player = player;
							next.setContent(lib.skill.gouzhu.effectMap[item]);
							await next;
						}
					}
				},
			},
			//五虎将
			//是的孩子们，我们意念合一
			olhuyi: {
				audio: 5,
				getList() {
					let list,
						skills = [];
					if (get.mode() == "guozhan") {
						list = [];
						for (const i in lib.characterPack.mode_guozhan) {
							if (lib.character[i]) list.push(i);
						}
					} else if (_status.connectMode) list = get.charactersOL();
					else {
						list = [];
						for (const i in lib.character) {
							if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					const wuhuList = list.filter(character => ["关羽", "张飞", "赵云", "马超", "黄忠"].includes(get.rawName(character)));
					for (const i of wuhuList) {
						skills.addArray(
							(lib.character[i][3] || []).filter(skill => {
								const info = get.info(skill);
								return info && !info.zhuSkill && !info.hiddenSkill && !info.charlotte && !info.groupSkill && !info.limited && !info.juexingji;
							})
						);
					}
					return skills;
				},
				getBasic(event, player) {
					const name = event.card.name,
						skills = get
							.info("olhuyi")
							.getList()
							.filter(skill => {
								const translation = get.skillInfoTranslation(skill, player);
								if (!translation) return false;
								const info = get.plainText(translation);
								const reg = `【${get.translation(name)}】`;
								if (name == "sha") {
									for (let nature of lib.inpile_nature) {
										const reg1 = `【${get.translation(nature) + get.translation(name)}】`,
											reg2 = `${get.translation(nature)}【${get.translation(name)}】`;
										if (info.includes(reg1) || info.includes(reg2)) return true;
									}
								}
								return info.includes(reg);
							});
					return skills;
				},
				prioritySkills: ["boss_juejing", "xinlonghun", "relonghun", "sbwusheng", "jsrgnianen", "jsrgguanjue", "shencai", "sbpaoxiao", "sbliegong", "pshengwu"],
				trigger: {
					global: "phaseBefore",
					player: ["enterGame", "useCardAfter", "respondAfter"],
				},
				filter(event, player) {
					if (["useCard", "respond"].includes(event.name)) {
						if (get.type(event.card) != "basic") return false;
						if (
							!get
								.info("olhuyi")
								.getBasic(event, player)
								.some(skill => !player.hasSkill(skill, null, null, false))
						)
							return false;
						return !player.additionalSkills.olhuyi || (player.additionalSkills.olhuyi && player.additionalSkills.olhuyi.length < 5);
					}
					const skills = get.info("olhuyi").getList();
					return (event.name != "phase" || game.phaseNumber == 0) && skills.some(skill => !player.hasSkill(skill, null, null, false));
				},
				locked: true,
				async cost(event, trigger, player) {
					if (["useCard", "respond"].includes(trigger.name)) {
						event.result = {
							bool: true,
						};
					} else {
						const skills = get
							.info("olhuyi")
							.getList()
							.filter(skill => !player.hasSkill(skill, null, null, false))
							.randomGets(3);
						const list = [];
						for (const skill of skills) {
							list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"]);
						}
						const next = player.chooseButton(["虎翼：请选择获得其中一个技能", [list, "textbutton"]]);
						next.set("forced", true);
						next.set("ai", button => {
							const skill = button.link,
								choice = get.event("choice");
							if (get.info("olhuyi").prioritySkills.includes(skill)) return 3;
							if (skill == choice) return 2;
							return 1;
						});
						next.set(
							"choice",
							skills.sort((a, b) => {
								return get.skillRank(b, "in") - get.skillRank(a, "in");
							})[0]
						);
						const links = await next.forResultLinks();
						event.result = {
							bool: true,
							cost_data: links,
						};
					}
				},
				async content(event, trigger, player) {
					const skill = ["useCard", "respond"].includes(trigger.name)
						? get
								.info("olhuyi")
								.getBasic(trigger, player)
								.filter(skill => !player.hasSkill(skill, null, null, false))
								.randomGets(1)
						: event.cost_data;
					player.addAdditionalSkills("olhuyi", skill, true);
				},
				group: "olhuyi_remove",
				subSkill: {
					remove: {
						audio: "olhuyi",
						trigger: {
							player: "phaseEnd",
						},
						filter(event, player) {
							return player.additionalSkills.olhuyi && player.additionalSkills.olhuyi.length;
						},
						async cost(event, trigger, player) {
							const skills = player.additionalSkills.olhuyi;
							const list = [];
							for (const skill of skills) {
								list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"]);
							}
							const next = player.chooseButton(["虎翼：你可以失去其中一个技能", [list, "textbutton"]]);
							next.set("ai", button => {
								const skill = button.link;
								let skills = get.event("skills").slice(0);
								skills.removeArray(get.info("olhuyi").prioritySkills);
								if (skills.length < 4) return 0;
								if (skills.includes(skill)) return 2;
								return Math.random();
							});
							next.set("skills", skills);
							const {
								result: { bool, links },
							} = await next;
							event.result = {
								bool: bool,
								cost_data: links,
							};
						},
						async content(event, trigger, player) {
							player.changeSkills([], event.cost_data).set("$handle", (player, addSkills, removeSkills) => {
								game.log(
									player,
									"失去了技能",
									...removeSkills.map(i => {
										return "#g【" + get.translation(i) + "】";
									})
								);
								player.removeSkill(removeSkills);
								const additionalSkills = player.additionalSkills.olhuyi;
								additionalSkills.removeArray(removeSkills);
								if (!additionalSkills.length) delete player.additionalSkills.olhuyi;
							});
						},
					},
				},
			},
			//无名
			dcchushan: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				filter(event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				forced: true,
				async content(event, trigger, player) {
					if (!_status.characterlist) lib.skill.pingjian.initList();
					_status.characterlist.randomSort();
					const characters = _status.characterlist.randomGets(6);
					const first = characters.slice(0, 3),
						last = characters.slice(3, 6);
					const skills1 = [],
						skills2 = [];
					for (let i of first) skills1.push(get.character(i, 3).randomGet());
					for (let i of last) skills2.push(get.character(i, 3).randomGet());
					const result1 = await player
						.chooseControl(skills1)
						.set("dialog", ["无名：请选择姓氏", [first, "character"]])
						.forResult();
					const gains = [];
					let surname = first[skills1.indexOf(result1.control)];
					gains.add(result1.control);
					const result2 = await player
						.chooseControl(skills2)
						.set("dialog", ["无名：请选择名字", [last, "character"]])
						.forResult();
					let name = last[skills2.indexOf(result2.control)];
					gains.add(result2.control);
					let newname = get.characterSurname(surname).randomGet()[0] + get.characterSurname(name).randomGet()[1];
					// 临时修改（by 棘手怀念摧毁）
					if (!get.characterSurname(surname).randomGet()[0] || !get.characterSurname(name).randomGet()[1]) {
						newname = "无名";
						player.chat("终究还是落得藉藉无名……");
					}
					// 暂时先用旧版代码
					game.broadcastAll(
						(player, name) => {
							if (player.name == "dc_noname" || player.name1 == "dc_noname") player.node.name.innerHTML = name;
							if (player.name2 == "dc_noname") player.node.name2.innerHTML = name;
						},
						player,
						newname
					);
					// 新版代码暂未跟进
					// game.broadcastAll(
						// (player, name, list) => {
							// if (player.name == "dc_noname" || player.name1 == "dc_noname") player.node.name.innerHTML = name;
							// if (player.name2 == "dc_noname") player.node.name2.innerHTML = name;
							// player.tempname.addArray(
								// list.map(name => {
									// while (get.character(name).tempname.length > 0) {
										// name = get.character(name).tempname[0];
									// }
									// return name;
								// })
							// );
						// },
						// player,
						// newname,
						// [surname, name]
					// );
					await player.addSkills(gains);
				},
			},
			//会玩孙权
			dchuiwan: {
				audio: 2,
				trigger: { player: "drawBegin" },
				filter(event, player) {
					// 临时修改（by 棘手怀念摧毁）
					return lib.skill.dchuiwan.gainCards(player) && lib.skill.dchuiwan.gainCards(player).length;
					// return lib.skill.dchuiwan.gainCards(player)?.length;
				},
				gainCards(player) {
					const cards = Array.from(ui.cardPile.childNodes).slice(0);
					const list = [];
					for (const card of cards) {
						const name = get.name(card);
						const type = get.type(card);
						if (type != "basic" && type != "trick") continue;
						if (!player.getStorage("dchuiwan_used").includes(name)) list.add(name);
					}
					return list;
				},
				async cost(event, trigger, player) {
					let result = await player
						.chooseButton(
							[
								get.prompt2("dchuiwan"),
								[
									lib.skill.dchuiwan.gainCards(player),
									"vcard",
								],
							],
							[1, trigger.num]
						)
						.set("ai", button => {
							if (!get.cardPile2(button.link[2])) return 0;
							return get.value({ name: button.link[2] }, get.event("player"));
						})
						.forResult();
					if (result.bool) {
						result.cost_data = result.links;
					}
					event.result = result;
				},
				async content(event, trigger, player) {
					trigger.num -= event.cost_data.length;
					if (!player.storage.dchuiwan_used) {
						player.when({ global: "phaseAfter" }).then(() => delete player.storage.dchuiwan_used);
					}
					player.markAuto(
						"dchuiwan_used",
						event.cost_data.map(name => name[2])
					);
					let list = [];
					for (const name of event.cost_data) {
						const card = get.cardPile2(name[2]);
						if (card) list.push(card);
					}
					if (list.length) await player.gain(list, "gain2");
					else player.chat("无牌可得？！");
				},
			},
			dchuanli: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						player.getHistory("useCard", evt => {
							return (evt.targets || []).includes(player);
						}).length >= 3 ||
						game.hasPlayer(target => {
							if (target == player) return false;
							return (
								player.getHistory("useCard", evt => {
									return (evt.targets || []).includes(target);
								}).length >= 3
							);
						})
					);
				},
				direct: true,
				async content(event, trigger, player) {
					let zhangzhang = false,
						zhouyu = false;
					if (
						player.getHistory("useCard", evt => {
							return (evt.targets || []).includes(player);
						}).length >= 3
					) {
						const result = await player
							.chooseTarget(get.prompt("dchuanli"), "令一名其他角色的所有技能失效，然后令其获得〖直谏〗和〖固政〗直到其回合结束", (card, player, target) => {
								return target != player && !target.hasSkill("dchuanli_zhangzhang");
							})
							.set("ai", target => {
								const player = get.event("player");
								return (
									get.rank("zhangzhang", true) -
									["name", "name1", "name2"].reduce((sum, name) => {
										if (!target[name] || !lib.character[target[name]] || (name == "name1" && target.name1 == target.name)) return sum;
										return sum + get.rank(target[name], true);
									}, 0)
								);
							})
							.forResult();
						if (result.bool) {
							zhangzhang = true;
							const target = result.targets[0];
							await player.logSkill("dchuanli", target);
							target.addTempSkill("dchuanli_zhangzhang", { player: "phaseAfter" });
							target.markSkillCharacter("dchuanli_zhangzhang", "zhangzhang", "唤理-内事", "内事不决问张昭");
							await target.addAdditionalSkills("dchuanli_zhangzhang", ["zhijian", "guzheng"]);
						}
					}
					const targets = game.filterPlayer(target => {
						if (target == player || target.hasSkill("dchuanli_zhouyu")) return false;
						return (
							player.getHistory("useCard", evt => {
								return (evt.targets || []).includes(target);
							}).length >= 3
						);
					});
					if (targets.length) {
						const result = await player
							.chooseTarget(get.prompt("dchuanli"), "令一名其他角色的所有技能失效，然后令其获得〖英姿〗和〖反间〗直到其回合结束", (card, player, target) => {
								return get.event("targets").includes(target);
							})
							.set("ai", target => {
								const player = get.event("player");
								return (
									get.rank("re_zhouyu", true) -
									["name", "name1", "name2"].reduce((sum, name) => {
										if (!target[name] || !lib.character[target[name]] || (name == "name1" && target.name1 == target.name)) return sum;
										return sum + get.rank(target[name], true);
									}, 0)
								);
							})
							.set("targets", targets)
							.forResult();
						if (result.bool) {
							zhouyu = true;
							const target = result.targets[0];
							await player.logSkill("dchuanli", target);
							target.addTempSkill("dchuanli_zhouyu", { player: "phaseAfter" });
							target.markSkillCharacter("dchuanli_zhouyu", "re_zhouyu", "唤理-外事", "外事不决问周瑜");
							await target.addAdditionalSkills("dchuanli_zhouyu", ["reyingzi", "refanjian"]);
						}
					}
					if (zhangzhang && zhouyu) {
						await player.logSkill("dchuanli");
						if (player.storage.dchuanli_sunquan) delete player.storage.dchuanli_sunquan;
						await player.addAdditionalSkills("dchuanli_sunquan", "rezhiheng");
						player.addSkill("dchuanli_sunquan");
					}
				},
				subSkill: {
					zhangzhang: {
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
							player.removeAdditionalSkills(skill);
						},
						charlotte: true,
						skillBlocker(skill) {
							if (lib.skill[skill].persevereSkill) return false;
							return !["zhijian", "guzheng"].includes(skill) && skill != "dchuanli_zhangzhang" && !lib.skill[skill].charlotte;
						},
					},
					zhouyu: {
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
							player.removeAdditionalSkills(skill);
						},
						charlotte: true,
						skillBlocker(skill) {
							if (lib.skill[skill].persevereSkill) return false;
							return !["reyingzi", "refanjian"].includes(skill) && skill != "dchuanli_zhouyu" && !lib.skill[skill].charlotte;
						},
					},
					sunquan: {
						charlotte: true,
						onremove(player, skill) {
							delete player.storage[skill];
						},
						trigger: { player: "phaseAfter" },
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							if (!player.storage.dchuanli_sunquan) {
								player.storage.dchuanli_sunquan = true;
							} else {
								await player.removeAdditionalSkills("dchuanli_sunquan");
								player.removeSkill("dchuanli_sunquan");
							}
						},
					},
				},
				derivation: ["zhijian", "guzheng", "reyingzi", "refanjian", "rezhiheng"],
			},
			//屈原
			dcqiusuo: {
				audio: 2,
				trigger: {
					source: "damageSource",
					player: "damageEnd",
				},
				frequent: true,
				async content(event, trigger, player) {
					const tiesuo = get.cardPile("tiesuo");
					if (tiesuo) await player.gain(tiesuo, "gain2");
				},
			},
			dclisao: {
				audio: 2,
				enable: "phaseUse",
				filterTarget: true,
				selectTarget: [1, 2],
				usable: 1,
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					let targets = event.targets.sortBySeat();
					//处理问题
					let answer_ok = undefined,
						answered = targets.slice(),
						gaifa = targets.slice(); //该罚
					let question = [];
					const sentences = _status.lisao_text.randomGets(2).randomSort();
					const goon = Math.round(Math.random());
					question.addArray(["请回答《离骚》中“" + sentences[0].split("，")[goon] + "”的" + (goon ? "上" : "下") + "句", [sentences[0].split("，")[1 - goon], sentences[1].split("，")[1 - goon]].randomSort()]);
					//人类和AI
					//AI随机排序一下，模拟不同顺序回答
					let humans = targets.filter(current => current === game.me || current.isOnline());
					let locals = targets.slice(0).randomSort();
					locals.removeArray(humans);
					const eventId = get.id();
					const send = (question, current, eventId) => {
						lib.skill.dclisao.chooseControl(question, current, eventId);
						game.resume();
					};
					//让读条不消失并显示读条
					event._global_waiting = true;
					let time = 10000;
					if (lib.configOL && lib.configOL.choose_timeout) time = parseInt(lib.configOL.choose_timeout) * 1000;
					targets.forEach(current => current.showTimer(time));
					//先处理人类玩家
					if (humans.length > 0) {
						const solve = function (resolve, reject) {
							return function (result, player) {
								if (result && result.control && !answer_ok) {
									answered.remove(player);
									if (result.control == sentences[0].split("，")[1 - goon]) {
										resolve();
										player.popup("回答正确", "wood");
										game.log(player, "回答正确");
										answer_ok = player;
										gaifa.remove(player);
									} else {
										reject();
										player.popup("回答错误", "fire");
										game.log(player, "回答错误");
									}
								} else reject();
							};
						};
						//等待第一位回答正确（兑现Promise）的玩家，若回答错误（Promise被拒绝）则继续等待
						await Promise.any(
							humans.map(current => {
								return new Promise(async (resolve, reject) => {
									if (current.isOnline()) {
										current.send(send, question, current, eventId);
										current.wait(solve(resolve, reject));
									} else {
										const next = lib.skill.dclisao.chooseControl(question, current, eventId);
										const solver = solve(resolve, reject);
										if (_status.connectMode) game.me.wait(solver);
										const result = await next.forResult();
										if (_status.connectMode && !answer_ok) game.me.unwait(result, current);
										else solver(result, current);
									}
								});
							})
						).catch(() => {});
						game.broadcastAll("cancel", eventId);
					}
					//再处理单机的他人控制玩家/AI玩家
					if (!answer_ok && locals.length > 0) {
						for (const current of locals) {
							const result = await lib.skill.dclisao.chooseControl(question, current).forResult();
							if (result && result.control) {
								answered.remove(current);
								if (result.control == sentences[0].split("，")[1 - goon]) {
									current.popup("回答正确", "wood");
									game.log(current, "回答正确");
									answer_ok = current;
									gaifa.remove(current);
									break;
								} else {
									current.popup("回答错误", "fire");
									game.log(current, "回答错误");
								}
							}
						}
					}
					//清除读条
					delete event._global_waiting;
					for (const i of targets) {
						i.hideTimer();
						if (answered.includes(i)) {
							i.popup("未回答");
							game.log(i, "未进行回答");
						}
					}
					await game.asyncDelay();
					//处理结果
					if (answer_ok && answer_ok.countCards("h")) await answer_ok.showHandcards();
					if (gaifa.length) {
						for (const i of gaifa) {
							i.addTempSkill("dclisao_gaifa");
							i.markAuto("dclisao_gaifa", [player]);
						}
						await game.asyncDelay();
					}
				},
				chooseControl(question, current, eventId) {
					const next = current.chooseControl(question[1]);
					next.set("prompt", question[0]);
					next.set("id", eventId);
					next.set("_global_waiting", true);
					next.set("ai", () => Math.round(Math.random()));
					return next;
				},
				init() {
					//《离骚》（高中节选）
					if (!_status.lisao_text) {
						let text = "长太息以掩涕兮，哀民生之多艰。余虽好修姱以鞿羁兮，謇朝谇而夕替。既替余以蕙纕兮，又申之以揽茝。亦余心之所善兮，虽九死其犹未悔。怨灵修之浩荡兮，终不察夫民心。众女嫉余之蛾眉兮，谣诼谓余以善淫。固时俗之工巧兮，偭规矩而改错。背绳墨以追曲兮，竞周容以为度。忳郁邑余侘傺兮，吾独穷困乎此时也。宁溘死以流亡兮，余不忍为此态也。鸷鸟之不群兮，自前世而固然。何方圜之能周兮，夫孰异道而相安。屈心而抑志兮，忍尤而攘诟。伏清白以死直兮，固前圣之所厚。悔相道之不察兮，延伫乎吾将反。回朕车以复路兮，及行迷之未远。步余马于兰皋兮，驰椒丘且焉止息。进不入以离尤兮，退将复修吾初服。制芰荷以为衣兮，集芙蓉以为裳。不吾知其亦已兮，苟余情其信芳。高余冠之岌岌兮，长余佩之陆离。芳与泽其杂糅兮，唯昭质其犹未亏。忽反顾以游目兮，将往观乎四荒。佩缤纷其繁饰兮，芳菲菲其弥章。民生各有所乐兮，余独好修以为常。虽体解吾犹未变兮，岂余心之可惩。";
						_status.lisao_text = text.slice(0, -1).split("。");
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (player === target) {
								if (ui.selected.targets.length) return 8;
								return 0;
							}
							if (target.getStorage("dclisao_gaifa").includes(player)) return 0;
							if (get.damageEffect(target, player, player) < 0 && get.attitude(player, target) > 0) return 0;
							let cards = player.getCards("hs", card => get.tag(card, "damage") && get.effect(target, card, player, player) > 0);
							if (!cards.length) return 0;
							let cardx = cards.filter(card => get.name(card) == "sha");
							cardx.sort((a, b) => get.effect(target, b, player, player) - get.effect(target, a, player, player));
							cardx = cardx.slice(Math.min(cardx.length, player.getCardUsable("sha")), cardx.length);
							cards.removeArray(cardx);
							return (
								cards.reduce((sum, card) => {
									if (player.canUse(card, target)) return sum + get.effect(target, card, player, target);
									if (player.canUse(card, target, false)) return sum + get.effect(target, card, player, target) / 10;
									return 0;
								}, 0) - 10
							);
						},
					},
				},
				subSkill: {
					gaifa: {
						charlotte: true,
						onremove: true,
						trigger: {
							global: "useCard",
							player: "damageBegin3",
						},
						filter(event, player) {
							const targets = player.getStorage("dclisao_gaifa");
							return event.name != "useCard" || targets.includes(event.player);
						},
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							const targets = player.getStorage("dclisao_gaifa");
							if (trigger.name == "useCard") trigger.directHit.add(player);
							else trigger.num = trigger.num * (targets.length + 1);
						},
						mark: true,
						marktext: "江",
						intro: {
							markcount: () => 0,
							content(storage) {
								return "<li>无法响应" + get.translation(storage) + "使用的牌<br><li>受到的伤害翻" + storage.length + "倍";
							},
						},
					},
				},
			},
			//名将吴懿
			dcbenxi: {
				trigger: {
					player: ["loseAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				zhuanhuanji: true,
				filter(event, player) {
					const evt = event.getl(player);
					return evt && evt.hs && evt.hs.length > 0;
				},
				async content(event, trigger, player) {
					player.changeZhuanhuanji("dcbenxi");
					if (player.storage.dcbenxi) {
						const map = lib.skill.dcbenxi.getMap(),
							list = Object.keys(map);
						if (list.length > 0) {
							const skill = list.randomGet(), voiceMap = game.parseSkillTextMap(skill, map[skill]);
							player.storage.dcbenxi_pending = skill;
							findaudio: for (let data of voiceMap) {
								if(!data.text) continue;
								// 临时修改（by 棘手怀念摧毁）
								// 小加强一下，能获得类似这样的技能："百姓千载皆苦勿，以苛政待之。"
								// （实际上是因为拼音有问题，例如，get.pinyin("百姓千载皆苦，勿以苛政待之。", false);）
								const chinese = data.text.replace(/[^\u4e00-\u9fa5]/g, '');
								
								const pinyins = get.pinyin(chinese, false);
								for (let i = 0; i < pinyins.length - 1; i++) {
									if (pinyins[i] === "wu" && pinyins[i + 1] === "yi") {
										player.chat(data.text);
										game.broadcastAll(file => game.playAudio(file), data.file)
										break findaudio;
									}
								}
							}
						}
					} else {
						const skill = player.storage.dcbenxi_pending;
						if (skill) {
							if (player.hasSkill(skill, null, false)){
								const targets = game.filterPlayer(current => current != player).sortBySeat();
								player.line(targets, 'fire');
								for(let target of targets){
									if(target.isIn()) await target.damage();
								}
							}
							else{
								await player.addTempSkills([skill], {player: "phaseBegin"});
							}
							delete player.storage.dcbenxi_pending;
						}
					}
					player.markSkill(event.name);
				},
				onremove(player){
					delete player.storage.dcbenxi;
					delete player.storage.dcbenxi_pending;
				},
				mark: true,
				marktext: "☯",
				intro: {
					mark(dialog, storage, player){
						if(storage){
							const skill = player.storage.dcbenxi_pending;
							if(skill){
								dialog.addText(`锁定技，当你下次失去手牌后，你获得技能〖${get.translation(skill)}〗直到你的下回合开始。若已获得该技能，则改为对所有其他角色各造成1点伤害。`, false);
								dialog.add('<div><div class="skill">【' + get.translation(lib.translate[skill + "_ab"] || get.translation(skill).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(skill, player) + "</div></div>");
							}
						}
						else{
							return "锁定技。当你下次失去手牌后，你随机念出一句拼音中含有“wu,yi”的台词。";
						}
					},
				},
				getMap() {
					if (!_status.dcbenxi_map) {
						_status.dcbenxi_map = {};
						let list;
						if (_status.connectMode) {
							list = get.charactersOL();
						} else {
							list = get.gainableCharacters();
						}
						list.forEach(name => {
							if (name !== "dc_wuyi") {
								const skills = get.character(name, 3);
								skills.forEach(skill => {
									const info = get.info(skill);
									if (!info || (info.ai && info.ai.combo)) return;
									if (skill in _status.dcbenxi_map) return;
									const voices = game.parseSkillText(skill, name);
									if (
										voices.some(text => {
											// 临时修改（by 棘手怀念摧毁）
											// 小加强一下，能获得类似这样的技能："百姓千载皆苦勿，以苛政待之。"
											// （实际上是因为拼音有问题，例如，get.pinyin("百姓千载皆苦，勿以苛政待之。", false);）
											const chinese = text.replace(/[^\u4e00-\u9fa5]/g, '');
											
											const pinyins = get.pinyin(chinese, false);
											for (let i = 0; i < pinyins.length - 1; i++) {
												if (pinyins[i] === "wu" && pinyins[i + 1] === "yi") return true;
											}
											return false;
										})
									) {
										_status.dcbenxi_map[skill] = name;
									}
								});
							}
						});
					}
					return _status.dcbenxi_map;
				},
			},
			//新InitFilter测试高达一号
			//打赢复活赛的牢达[哭]
			dclonghun: {
				audio: 2,
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || !player.isPhaseUsing() || player.needsToDiscard() < 2) return num;
						let suit = get.suit(card, player);
						if (suit === "heart") return num - 3.6;
					},
					aiValue(player, card, num) {
						if (num <= 0) return num;
						let suit = get.suit(card, player);
						if (suit === "heart") return num + 3.6;
						if (suit === "club") return num + 1;
						if (suit === "spade") return num + 1.8;
					},
					aiUseful(player, card, num) {
						if (num <= 0) return num;
						let suit = get.suit(card, player);
						if (suit === "heart") return num + 3;
						if (suit === "club") return num + 1;
						if (suit === "spade") return num + 1;
					},
				},
				locked: false,
				enable: ["chooseToUse", "chooseToRespond"],
				prompt: "将♦牌当做火【杀】，♥牌当做【桃】，♣牌当做【闪】，♠牌当做【无懈可击】使用或打出",
				viewAs(cards, player) {
					var name;
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
				check(card) {
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
									return (
										(name != "sha" || get.value(card) < 5) &&
										get.suit(card, player) == map[name]
									);
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
								if (temp > max) {
									max = temp;
									name2 = map[name];
								}
							}
						}
						if (name2 == get.suit(card, player))
							return name2 == "diamond" ? 5 - get.value(card) : 20 - get.value(card);
						return 0;
					}
					return 1;
				},
				position: "hes",
				filterCard(card, player, event) {
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var name = get.suit(card, player);
					if (name == "club" && filter({ name: "shan", cards: [card] }, player, event)) return true;
					if (
						name == "diamond" &&
						filter({ name: "sha", cards: [card], nature: "fire" }, player, event)
					)
						return true;
					if (name == "spade" && filter({ name: "wuxie", cards: [card] }, player, event))
						return true;
					if (name == "heart" && filter({ name: "tao", cards: [card] }, player, event)) return true;
					return false;
				},
				filter(event, player) {
					var filter = event.filterCard;
					if (
						filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player, event) &&
						player.countCards("hes", { suit: "diamond" })
					)
						return true;
					if (
						filter(get.autoViewAs({ name: "shan" }, "unsure"), player, event) &&
						player.countCards("hes", { suit: "club" })
					)
						return true;
					if (
						filter(get.autoViewAs({ name: "tao" }, "unsure"), player, event) &&
						player.countCards("hes", { suit: "heart" })
					)
						return true;
					if (
						filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) &&
						player.countCards("hes", { suit: "spade" })
					)
						return true;
					return false;
				},
				usable: 20,
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag) {
						if ((player.getStat("skill").dclonghun || 0) >= 20) return false;
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
					order(item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							var list = ["sha", "tao"];
							var map = { sha: "diamond", tao: "heart" };
							for (var i = 0; i < list.length; i++) {
								var name = list[i];
								if (
									player.countCards("hes", function (card) {
										return (
											(name != "sha" || get.value(card) < 5) &&
											get.suit(card, player) == map[name]
										);
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
				hiddenCard(player, name) {
					if ((player.getStat("skill").dclonghun || 0) >= 20) return false;
					if (name == "wuxie" && _status.connectMode && player.countCards("hes") > 0) return true;
					if (name == "wuxie") return player.countCards("hes", { suit: "spade" }) > 0;
					if (name == "tao") return player.countCards("hes", { suit: "heart" }) > 0;
				},
			},
			dczhanjiang: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return game.hasPlayer((target) => {
						return target.countCards(
							"ej",
							(card) =>
								get.name(card, false) == "qinggang" ||
								get.name(card, get.owner(card)) == "qinggang"
						);
					});
				},
				content() {
					let cards = [],
						targets = game.filterPlayer((target) => {
							return target.countCards(
								"ej",
								(card) =>
									get.name(card, false) == "qinggang" ||
									get.name(card, get.owner(card)) == "qinggang"
							);
						});
					targets.forEach((target) =>
						cards.addArray(
							target.getCards(
								"ej",
								(card) =>
									get.name(card, false) == "qinggang" ||
									get.name(card, get.owner(card)) == "qinggang"
							)
						)
					);
					player.gain(cards, "give");
				},
			},
			//孙策
			//双壁=100%技能周瑜+100%原画孙策
			dcshuangbi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				*content(event, map) {
					var player = map.player,
						num = game.countPlayer();
					var result = yield player
						.chooseControl()
						.set("choiceList", [
							"摸" + get.cnNumber(num) + "张牌，本回合手牌上限+" + parseFloat(num),
							"弃置至多" + get.cnNumber(num) + "张牌，随机对其他角色造成等量火焰伤害",
							"视为使用" + get.cnNumber(num) + "张火【杀】或【火攻】",
						])
						.set("ai", () => {
							var player = _status.event.player,
								card = { name: "sha", nature: "fire" };
							if (
								!game.hasPlayer(
									(target) =>
										player.canUse(card, target) &&
										get.effect(target, card, player, player) > 0
								)
							)
								return 0;
							return 2;
						});
					player.flashAvatar(
						"dcshuangbi",
						["re_zhouyu", "shen_zhouyu", "dc_sb_zhouyu"][result.index]
					);
					switch (result.index) {
						case 0:
							player.draw(num);
							player.addTempSkill("dcshuangbi_effect");
							player.addMark("dcshuangbi_effect", num, false);
							break;
						case 1:
							var result2 = yield player
								.chooseToDiscard(
									"双壁：弃置至多" +
										get.cnNumber(num) +
										"张牌，随机对其他角色造成等量火焰伤害",
									[1, num],
									"he"
								)
								.set("ai", (card) => 1 / (get.value(card) || 0.5));
							if (result2.bool) {
								var map = {},
									sum = result2.cards.length;
								var targets = game.filterPlayer((target) => target != player);
								if (targets.length) {
									while (sum) {
										sum--;
										var target = targets.randomGet();
										player.line(target);
										target.damage(1, "fire");
										game.delayx();
									}
								}
							}
							break;
						case 2:
							while (
								num &&
								game.hasPlayer(
									(target) =>
										player.canUse({ name: "sha", nature: "fire" }, target) ||
										player.canUse({ name: "huogong" }, target)
								)
							) {
								num--;
								var list = [];
								if (
									game.hasPlayer((target) =>
										player.canUse({ name: "sha", nature: "fire" }, target)
									)
								)
									list.push(["基本", "", "sha", "fire"]);
								if (game.hasPlayer((target) => player.canUse({ name: "huogong" }, target)))
									list.push(["锦囊", "", "huogong"]);
								var result2 = yield player
									.chooseButton(["双壁：请选择你要使用的牌", [list, "vcard"]], true)
									.set("ai", (button) => (button.link[2] == "sha" ? 1 : 0));
								if (result2.bool) {
									var card = {
										name: result2.links[0][2],
										nature: result2.links[0][3],
									};
									yield player.chooseUseTarget(true, card, false);
								} else break;
							}
							break;
					}
				},
				ai: {
					order: 9,
					result: { player: 1 },
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						intro: { content: "手牌上限+#" },
						mod: {
							maxHandcard(player, num) {
								return num + player.countMark("dcshuangbi_effect");
							},
						},
					},
				},
			},
			//哪吒
			dcsantou: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				forced: true,
				*content(event, map) {
					var player = map.player,
						trigger = map.trigger;
					var source = trigger.source;
					trigger.cancel();
					var hp = player.getHp();
					var lose = false;
					if (hp >= 3) {
						if (
							player.hasHistory("useSkill", (evt) => {
								var evtx = evt.event;
								return (
									evt.skill == "dcsantou" &&
									evtx.getTrigger().source == source &&
									evtx.getParent(2) != trigger
								);
							})
						)
							lose = true;
					} else if (hp == 2) {
						if (trigger.hasNature()) lose = true;
					} else if (hp == 1) {
						if (trigger.card && get.color(trigger.card) == "red") lose = true;
					}
					if (lose) player.loseHp();
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.player && arg.player.hasSkillTag("jueqing", false, player))
							return false;
					},
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return;
							if (player._dcsantou_temp) return;
							if (get.tag(card, "damage")) {
								const hp = target.getHp();
								player._dcsantou_temp = true;
								const losehp =
									get.effect(target, { name: "losehp" }, target, target) /
									get.attitude(target, target);
								delete player._dcsantou_temp;
								if (hp >= 3) {
									if (
										target.hasHistory(
											"useSkill",
											(evt) =>
												evt.skill == "dcsantou" &&
												evt.event.getTrigger().source == player
										)
									)
										return [0, losehp, 0, 0];
									else if (get.attitude(player, target) < 0) {
										let hs = player.getCards("hs", (i) => {
												return i !== card && (!card.cards || !card.cards.includes(i));
											}),
											num = player.getCardUsable("sha");
										if (card.name === "sha") num--;
										hs = hs.filter((i) => {
											if (!player.canUse(i, target)) return false;
											if (get.tag(card, "damage") && get.name(i, player) !== "sha")
												return true;
											if (num) {
												num--;
												return true;
											}
											return false;
										}).length;
										if (
											player.hasSkillTag("damage", null, {
												target: target,
											})
										)
											hs++;
										if (!hs) return "zeroplayertarget";
										num = 1 - 2 / 3 / hs;
										return [num, 0, num, 0];
									}
								}
								if (
									(hp == 2 && get.tag(card, "natureDamage")) ||
									(hp == 1 && typeof card == "object" && get.color(card) == "red")
								)
									return [0, losehp, 0, 0];
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			dcfaqi: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter(event, player) {
					if (get.type(event.card) != "equip") return false;
					if (!player.isPhaseUsing()) return false;
					for (const name of lib.inpile) {
						if (get.type(name) != "trick") continue;
						if (
							!player.hasStorage("dcfaqi", name) &&
							player.hasUseTarget({ name: name, isCard: true })
						)
							return true;
					}
					return false;
				},
				direct: true,
				*content(event, map) {
					var player = map.player;
					var list = get.inpileVCardList((info) => {
						if (info[0] != "trick") return false;
						var name = info[2];
						return (
							!player.hasStorage("dcfaqi", name) &&
							player.hasUseTarget({ name: name, isCard: true })
						);
					});
					if (list.length) {
						var result = yield player
							.chooseButton(["法器：视为使用一张普通锦囊牌", [list, "vcard"]], true)
							.set("ai", (button) => {
								return get.player().getUseValue({ name: button.link[2] });
							});
						if (result.bool) {
							var name = result.links[0][2];
							if (!player.storage.dcfaqi)
								player
									.when({ global: "phaseAfter" })
									.then(() => delete player.storage.dcfaqi);
							player.markAuto("dcfaqi", name);
							player.chooseUseTarget({ name: name, isCard: true }, true, false).logSkill =
								"dcfaqi";
						}
					} else event.finish();
				},
				ai: {
					reverseEquip: true,
				},
			},
			//隅泣曹操
			dcjianxiong: {
				audio: "rejianxiong",
				trigger: {
					player: "damageEnd",
				},
				content() {
					"step 0";
					if (
						get.itemtype(trigger.cards) == "cards" &&
						get.position(trigger.cards[0], true) == "o"
					) {
						player.gain(trigger.cards, "gain2");
					}
					player.draw(player.countMark("dcjianxiong") + 1, "nodelay");
					"step 1";
					if (player.countMark("dcjianxiong") < 4) player.addMark("dcjianxiong", 1, false);
				},
				mark: true,
				marktext: "雄",
				intro: {
					markcount(storage, player) {
						return player.countMark("dcjianxiong") + 1;
					},
					content(storage, player) {
						return "摸牌数为" + (player.countMark("dcjianxiong") + 1);
					},
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage") && player != target) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
								var cards = card.cards,
									evt = _status.event;
								if (
									evt.player == target &&
									card.name == "damage" &&
									evt.getParent().type == "card"
								)
									cards = evt.getParent().cards.filterInD();
								if (target.hp <= 1) return;
								if (get.itemtype(cards) != "cards") return;
								for (var i of cards) {
									if (get.name(i, target) == "tao") return [1, 2.5 + player.countMark("dcjianxiong") / 2];
								}
								if (get.value(cards, target) >= 7 - player.countMark("dcjianxiong") / 2 + target.getDamagedHp()) return [1, 1.5 + player.countMark("dcjianxiong") / 2];
								return [1, 0.6 + player.countMark("dcjianxiong") / 2];
							}
						},
					},
				},
			},
			//缺德刘备
			dcrende: {
				audio: "rerende",
				enable: "phaseUse",
				filter(event, player) {
					return game.hasPlayer((current) => {
						return lib.skill.dcrende.filterTarget(null, player, current);
					});
				},
				discard: false,
				lose: false,
				delay: false,
				filterTarget(card, player, target) {
					if (player.getStorage("dcrende_targeted").includes(target)) return false;
					return player != target && target.countGainableCards(player, "h") > 1;
				},
				content() {
					"step 0";
					player.addTempSkill("dcrende_targeted", "phaseUseAfter");
					player.markAuto("dcrende_targeted", [target]);
					player.gainPlayerCard(target, "h", true, 2);
					"step 1";
					var list = [];
					for (var name of lib.inpile) {
						if (get.type(name) != "basic") continue;
						var card = { name: name, isCard: true };
						if (
							lib.filter.cardUsable(card, player, event.getParent("chooseToUse")) &&
							game.hasPlayer((current) => {
								return player.canUse(card, current);
							})
						) {
							list.push(["基本", "", name]);
						}
						if (name == "sha") {
							for (var nature of lib.inpile_nature) {
								card.nature = nature;
								if (
									lib.filter.cardUsable(card, player, event.getParent("chooseToUse")) &&
									game.hasPlayer((current) => {
										return player.canUse(card, current);
									})
								) {
									list.push(["基本", "", name, nature]);
								}
							}
						}
					}
					if (list.length) {
						player
							.chooseButton(["是否视为使用一张基本牌？", [list, "vcard"]])
							.set("ai", function (button) {
								var player = _status.event.player;
								var card = {
									name: button.link[2],
									nature: button.link[3],
									isCard: true,
								};
								if (card.name == "tao") {
									if (
										player.hp == 1 ||
										(player.hp == 2 && !player.hasShan()) ||
										player.needsToDiscard()
									)
										return 5;
									return 1;
								}
								if (card.name == "sha") {
									if (
										game.hasPlayer(function (current) {
											return (
												player.canUse(card, current) &&
												get.effect(current, card, player, player) > 0
											);
										})
									) {
										if (card.nature == "fire") return 2.95;
										if (card.nature == "thunder" || card.nature == "ice") return 2.92;
										return 2.9;
									}
									return 0;
								}
								if (card.name == "jiu") {
									return 0.5;
								}
								return 0;
							});
					} else {
						event.finish();
					}
					"step 2";
					if (result && result.bool && result.links[0]) {
						var card = {
							name: result.links[0][2],
							nature: result.links[0][3],
							isCard: true,
						};
						player.chooseUseTarget(card, true);
					}
				},
				subSkill: {
					targeted: {
						onremove: true,
						charlotte: true,
					},
				},
				ai: {
					fireAttack: true,
					order(skill, player) {
						return 10;
					},
					result: {
						target(player, target) {
							if (target.hasSkillTag("noh")) return -0.1;
							return -2;
						},
					},
					threaten: 3,
				},
			},
			//会玩孙权
			dczhiheng: {
				audio: "rezhiheng",
				init: (player) => {
					player.storage.dczhiheng_hit = [];
				},
				enable: "phaseUse",
				position: "he",
				filterCard: lib.filter.cardDiscardable,
				discard: false,
				lose: false,
				delay: false,
				selectCard: [1, Infinity],
				filter(event, player) {
					var skill = player.getStat().skill;
					return (
						!skill.dczhiheng || skill.dczhiheng < 1 + player.getStorage("dczhiheng_hit").length
					);
				},
				check(card) {
					let player = _status.event.player;
					if (
						get.position(card) == "h" &&
						!player.countCards("h", "du") &&
						(
							player.hp > 2 ||
							!player.countCards("h", i => {
								return get.value(i) >= 8;
							})
						)
					) return 1;
					if (get.position(card) == "e") {
						let subs = get.subtypes(card);
						if (subs.includes("equip2") || subs.includes("equip3")) return player.getHp() - get.value(card);
					}
					return 6 - get.value(card);
				},
				group: "dczhiheng_add",
				content() {
					"step 0";
					player.discard(cards);
					event.num = 1;
					var hs = player.getCards("h");
					if (!hs.length) event.num = 0;
					for (var i = 0; i < hs.length; i++) {
						if (!cards.includes(hs[i])) {
							event.num = 0;
							break;
						}
					}
					"step 1";
					player.draw(event.num + cards.length);
				},
				subSkill: {
					add: {
						audio: "rezhiheng",
						trigger: {
							source: "damageSource",
						},
						forced: true,
						locked: false,
						filter(event, player) {
							if (event.player == player) return false;
							return !player.getStorage("dczhiheng_hit").includes(event.player);
						},
						logTarget: "player",
						content() {
							player.addTempSkill("dczhiheng_hit");
							player.markAuto("dczhiheng_hit", [trigger.player]);
							game.log(player, "#g【制衡】", "可发动次数", "#y+1");
						},
					},
					hit: {
						charlotte: true,
						onremove: (player) => {
							player.storage.dczhiheng_hit = [];
						},
						mark: true,
						marktext: "衡",
						intro: {
							markcount(storage) {
								if (storage) return storage.length;
								return 0;
							},
							content: "本回合已对$造成过伤害",
						},
					},
				},
				ai: {
					order(item, player) {
						if (
							player.hasCard((i) => {
								return get.value(i) > Math.max(6, 9 - player.hp);
							}, "he")
						)
							return 1;
						return 10;
					},
					result: {
						player: 1,
					},
					nokeep: true,
					skillTagFilter(player, tag, arg) {
						if (tag === "nokeep")
							return (
								(!arg || (arg && arg.card && get.name(arg.card) === "tao")) &&
								player.isPhaseUsing() &&
								player.countSkill("dczhiheng") <
									1 + player.getStorage("dczhiheng_hit").length &&
								player.hasCard((card) => {
									return get.name(card) !== "tao";
								}, "h")
							);
					},
					threaten: 1.55,
				},
			},
			//朱铁雄
			dcbianzhuang: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				content() {
					"step 0";
					var list = [];
					for (var i in lib.skill.dcbianzhuang.characterMap) {
						if (
							Array.isArray(lib.character[i]) &&
							get.is.object(lib.skill[lib.skill.dcbianzhuang.characterMap[i]])
						)
							list.push(i);
					}
					var characters = list.randomGets(player.storage.dcbianzhuang_inited ? 3 : 2);
					if (!characters.length) {
						event.finish();
						return;
					}
					var skills = characters.map((i) => lib.skill.dcbianzhuang.characterMap[i]);
					player
						.chooseControl(skills)
						.set("dialog", ["选择获得一个技能并“变装”", [characters, "character"]]);
					"step 1";
					var skill = result.control;
					player.addTempSkills(skill, "dcbianzhuangAfter");
					for (var i in lib.skill.dcbianzhuang.characterMap) {
						if (lib.skill.dcbianzhuang.characterMap[i] == skill) {
							player.flashAvatar("dcbianzhuang", i);
							player.popup(skill);
							game.log(player, "“变装”为了", "#b" + get.translation(i));
							break;
						}
					}
					player.chooseUseTarget("sha", true, false, "nodistance");
					"step 2";
					if (result.bool && !player.storage.dcbianzhuang_inited) {
						player.addMark("dcbianzhuang", 1, false);
						if (player.countMark("dcbianzhuang") > 2) {
							player.storage.dcbianzhuang_inited = true;
							player.reinitCharacter("zhutiexiong", "wu_zhutiexiong");
						}
					}
				},
				group: "dcbianzhuang_refresh",
				ai: {
					order: 16,
					result: {
						player(player) {
							if (player.hasValueTarget("sha", false)) return 1;
							return 0;
						},
					},
					effect: {
						target(card, player, target, current) {
							if (player == target && player.isPhaseUsing() && get.type(card) == "equip") {
								if (
									player.hasValueTarget("sha", false) &&
									typeof player.getStat("skill").dcbianzhuang == "number"
								)
									return [1, 3];
							}
						},
					},
				},
				subSkill: {
					refresh: {
						audio: "dcbianzhuang",
						trigger: { player: "useCardAfter" },
						forced: true,
						filter(event, player) {
							return (
								get.type2(event.card, false) == "equip" &&
								typeof player.getStat("skill").dcbianzhuang == "number"
							);
						},
						content() {
							var stat = player.getStat("skill");
							delete stat.dcbianzhuang;
							game.log(player, "重置了技能", "#g【变装】");
						},
					},
				},
				characterMap: {
					re_zhangchunhua: "rejueqing",
					wangshuang: "spzhuilie",
					re_machao: "retieji",
					ol_weiyan: "xinkuanggu",
					re_lvbu: "wushuang",
					re_huangzhong: "xinliegong",
					ol_pangde: "rejianchu",
					ol_zhurong: "lieren",
					re_masu: "rezhiman",
					re_panzhangmazhong: "reanjian",
					mayunlu: "fengpo",
					re_quyi: "refuqi",
				},
			},
			//小约翰可汗
			dctongliao: {
				audio: 3,
				trigger: { player: "phaseDrawAfter" },
				direct: true,
				locked: false,
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				content() {
					"step 0";
					player
						.chooseCard(
							"h",
							get.prompt("dctongliao"),
							"选择一张牌标记为“通辽”",
							function (card, player) {
								if (card.hasGaintag("dctongliao")) return false;
								var num = get.number(card, player);
								return !player.hasCard((card2) => {
									return card != card2 && get.number(card2, player) < num;
								});
							}
						)
						.set("ai", function (card) {
							var player = _status.event.player;
							return 1 + Math.max(0, player.getUseValue(card, null, true));
						});
					"step 1";
					if (result.bool) {
						player.logSkill("dctongliao");
						player.addGaintag(result.cards, "dctongliao");
						game.delayx();
					}
				},
				mod: {
					aiOrder(player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("dctongliao")) return num + 0.6;
					},
				},
				group: "dctongliao_draw",
				subSkill: {
					draw: {
						trigger: {
							player: ["loseAfter"],
							global: [
								"equipAfter",
								"addJudgeAfter",
								"gainAfter",
								"loseAsyncAfter",
								"addToExpansionAfter",
							],
						},
						filter(event, player) {
							var evt = event.getl(player);
							if (!evt || !evt.hs || !evt.hs.length) return false;
							if (event.name == "lose") {
								for (var i in event.gaintag_map) {
									if (event.gaintag_map[i].includes("dctongliao")) return true;
								}
								return false;
							}
							return player.hasHistory("lose", function (evt) {
								if (event != evt.getParent()) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dctongliao")) return true;
								}
								return false;
							});
						},
						forced: true,
						content() {
							var num = 0;
							var cards = trigger.getl(player).hs,
								ids = [];
							if (trigger.name == "lose") {
								for (var i in trigger.gaintag_map) {
									if (trigger.gaintag_map[i].includes("dctongliao")) ids.push(i);
								}
							} else
								player.getHistory("lose", function (evt) {
									if (trigger != evt.getParent()) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes("dctongliao")) ids.push(i);
									}
								});
							for (var card of cards) {
								if (ids.includes(card.cardid)) num += get.number(card, player);
							}
							if (num > 0) player.draw(num);
						},
					},
				},
			},
			dcwudao: {
				audio: 3,
				trigger: { player: "useCardAfter" },
				frequent: true,
				filter(event, player) {
					if (player.getStorage("dcwudao_effect").includes(get.type2(event.card, false)))
						return false;
					var history = player.getHistory("useCard"),
						index = history.indexOf(event);
					if (index < 1) return false;
					var evt = history[index - 1];
					return get.type2(event.card, false) == get.type2(evt.card, false);
				},
				prompt2(event) {
					return (
						"令你本回合使用" +
						get.translation(get.type2(event.card, false)) +
						"牌时不可被响应且伤害+1"
					);
				},
				content() {
					player.addTempSkill("dcwudao_effect");
					player.markAuto("dcwudao_effect", [get.type2(trigger.card, false)]);
				},
				subSkill: {
					effect: {
						trigger: { player: "useCard" },
						forced: true,
						popup: false,
						onremove: true,
						filter(event, player) {
							return player.getStorage("dcwudao_effect").includes(get.type2(event.card, false));
						},
						content() {
							if (get.tag(trigger.card, "damage") > 0) trigger.baseDamage++;
							trigger.directHit.addArray(game.filterPlayer());
						},
						intro: { content: "已经悟到了$牌" },
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if (
									arg &&
									arg.card &&
									player.getStorage("dcwudao_effect").includes(get.type2(arg.card))
								)
									return true;
								return false;
							},
						},
					},
				},
			},
			//叶诗文
			clbjisu: {
				audio: 2,
				trigger: { player: "phaseJudgeBefore" },
				direct: true,
				content() {
					"step 0";
					var check = player.countCards("h") > 2;
					player
						.chooseTarget(
							get.prompt("clbjisu"),
							"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",
							function (card, player, target) {
								if (player == target) return false;
								return player.canUse({ name: "sha" }, target, false);
							}
						)
						.set("check", check)
						.set("ai", function (target) {
							if (!_status.event.check) return 0;
							return get.effect(target, { name: "sha" }, _status.event.player);
						})
						.setHiddenSkill("clbjisu");
					"step 1";
					if (result.bool) {
						player.useCard({ name: "sha", isCard: true }, result.targets[0], false, "clbjisu");
						trigger.cancel();
						player.skip("phaseDraw");
					}
				},
			},
			clbshuiyong: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				filter(event) {
					return event.hasNature("fire");
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, "fireDamage")) return "zerotarget";
						},
					},
				},
			},
			//孙杨
			clbshuijian: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				frequent: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					var num = 1 + Math.floor(player.countCards("e") / 2);
					trigger.num += num;
				},
			},
			//李白
			dclbjiuxian: {
				audio: 2,
				enable: "chooseToUse",
				locked: false,
				viewAs: { name: "jiu" },
				check: (card) => 6.5 - get.value(card),
				filterCard(card) {
					var info = get.info(card);
					if (!info || (info.type != "trick" && info.type != "delay")) return false;
					if (info.notarget) return false;
					if (info.selectTarget != undefined) {
						if (Array.isArray(info.selectTarget)) {
							if (info.selectTarget[0] < 0) return !info.toself;
							return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
						} else {
							if (info.selectTarget < 0) return !info.toself;
							return info.selectTarget != 1;
						}
					}
					return false;
				},
				viewAsFilter(player) {
					if (_status.connectMode && player.countCards("hs") > 0) return true;
					return player.hasCard(lib.skill.dclbjiuxian.filterCard, "hs");
				},
				ai: {
					order: (item, player) => get.order({ name: "jiu" }, player),
				},
				mod: {
					cardUsable(card) {
						if (card.name == "jiu") return Infinity;
					},
				},
			},
			dcshixian: {
				audio: 2,
				trigger: { player: "useCard" },
				//frequent:true,
				//direct:true,
				locked: false,
				filter(event, player) {
					var history = player.getAllHistory("useCard"),
						index = history.indexOf(event);
					if (index < 1) return false;
					var evt = history[index - 1];
					return get.is.yayun(get.translation(event.card.name), get.translation(evt.card.name));
				},
				filterx(event) {
					if (event.targets.length == 0) return false;
					var type = get.type(event.card);
					if (type != "basic" && type != "trick") return false;
					return true;
				},
				prompt2(event, player) {
					if (lib.skill.dcshixian.filterx(event))
						return "摸一张牌并令" + get.translation(event.card) + "额外结算一次？";
					return "摸一张牌。";
				},
				check(event, player) {
					if (lib.skill.dcshixian.filterx(event)) return !get.tag(event.card, "norepeat");
					return true;
				},
				content() {
					player.draw();
					if (lib.skill.dcshixian.filterx(trigger)) {
						trigger.effectCount++;
						game.log(trigger.card, "额外结算一次");
					}
				},
				mod: {
					aiOrder(player, card, num) {
						if (typeof card == "object" && !get.tag(card, "norepeat")) {
							var history = player.getAllHistory("useCard");
							if (history.length > 0) {
								var cardx = history[history.length - 1].card;
								if (get.is.yayun(get.translation(cardx.name), get.translation(card.name)))
									return num + 20;
							}
						}
					},
				},
				init(player) {
					player.addSkill("dcshixian_yayun");
					var history = player.getAllHistory("useCard");
					if (history.length) {
						player.addGaintag(
							player.getCards("h", (card) => {
								return get.is.yayun(
									get.translation(card.name),
									get.translation(history[history.length - 1].card.name)
								);
							}),
							"dcshixian_yayun"
						);
					}
				},
				onremove(player) {
					player.removeSkill("dcshixian_yayun");
					player.removeGaintag("dcshixian_yayun");
				},
				subSkill: {
					yayun: {
						charlotte: true,
						trigger: { player: "useCard1" },
						filter(event, player) {
							return player.countCards("h") > 0;
						},
						direct: true,
						priority: 11 + 45 + 14 + 19 + 19 + 810,
						content() {
							"step 0";
							player.removeGaintag("dcshixian_yayun");
							"step 1";
							player.addGaintag(
								player.getCards("h", (card) => {
									return get.is.yayun(
										get.translation(card.name),
										get.translation(trigger.card.name)
									);
								}),
								"dcshixian_yayun"
							);
						},
					},
				},
			},
			//龙王
			dclonggong: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				usable: 1,
				filter(event, player) {
					return event.source && event.source.isIn();
				},
				logTarget: "source",
				check(event, player) {
					return get.attitude(player, event.source) >= 0 || player.hp <= Math.max(2, event.num);
				},
				content() {
					"step 0";
					trigger.cancel();
					"step 1";
					var card = get.cardPile2(function (card) {
							return get.type(card, null, false) == "equip";
						}),
						source = trigger.source;
					if (card && source && source.isIn()) source.gain(card, "gain2");
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player) {
						return !player.storage.counttrigger || !player.storage.counttrigger.dclonggong;
					},
				},
			},
			dcsitian: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					var colorx = false,
						hs = player.getCards("he");
					if (hs.length < 2) return false;
					for (var card of hs) {
						if (!lib.filter.cardDiscardable(card, player)) continue;
						var color = get.color(card, player);
						if (color == "none") continue;
						if (!colorx) colorx = color;
						else if (colorx != color) return true;
					}
					return false;
				},
				filterCard(card, player) {
					var color = get.color(card, player);
					if (color == "none") return false;
					return !ui.selected.cards.length || get.color(ui.selected.cards[0]) != color;
				},
				selectCard: 2,
				complexCard: true,
				prompt: "弃置两张颜色不同的牌并改变天气",
				check: (card) => 4.5 - get.value(card),
				content() {
					"step 0";
					var list = ["烈日", "雷电", "大浪", "暴雨", "大雾"].randomGets(2);
					player
						.chooseButton(true, [
							"请选择执行一个天气",
							[
								list.map((i) => [
									i,
									'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' +
										i +
										"】</div><div>" +
										lib.skill.dcsitian.weathers[i].description +
										"</div></div>",
								]),
								"textbutton",
							],
						])
						.set("ai", function (button) {
							return lib.skill.dcsitian.weathers[button.link].ai(_status.event.player);
						});
					"step 1";
					if (result.bool) {
						var choice = result.links[0];
						game.log(player, "将当前天气变更为", "#g" + choice);
						var next = game.createEvent("dcsitian_weather", false);
						next.player = player;
						next.setContent(lib.skill.dcsitian.weathers[choice].content);
					}
				},
				ai: {
					order: 8,
					result: {
						player(player) {
							var num1 = 0,
								num2 = 0;
							game.countPlayer(function (current) {
								if (player == current) return;
								var att = get.attitude(player, current);
								if (att > 0) num1++;
								else num2++;
							});
							return num2 - num1;
						},
					},
				},
				subSkill: {
					dawu: {
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return get.type2(event.card, false) == "basic";
						},
						content() {
							trigger.targets.length = 0;
							trigger.all_excluded = true;
							player.removeSkill("dcsitian_dawu");
						},
						mark: true,
						marktext: "雾",
						intro: {
							name: "司天 - 大雾",
							content: "使用的下一张基本牌无效",
						},
					},
				},
				weathers: {
					烈日: {
						description: "你对其他角色造成1点火属性伤害。",
						content() {
							var targets = game.filterPlayer((current) => current != player).sortBySeat();
							player.line(targets, "fire");
							for (var target of targets) {
								target.damage("fire");
							}
						},
						ai(player) {
							var effect = 0;
							game.countPlayer(function (current) {
								if (current == player) return;
								effect += get.damageEffect(current, player, player, "fire");
							});
							return effect;
						},
					},
					雷电: {
						description:
							"你令其他角色各进行一次判定。若结果为♠2~9，则其受到3点无来源雷属性伤害。",
						content() {
							"step 0";
							var targets = game.filterPlayer((current) => current != player).sortBySeat();
							player.line(targets, "thunder");
							event.targets = targets;
							"step 1";
							var target = targets.shift();
							if (!target.isIn()) {
								if (targets.length > 0) event.redo();
								else {
									event.finish();
									return;
								}
							}
							event.target = target;
							event.judgestr = get.translation("shandian");
							target.judge(lib.card.shandian.judge, event.judgestr).judge2 =
								lib.card.shandian.judge2;
							//game.delayx(1.5);
							"step 2";
							var name = "shandian";
							if (event.cancelled && !event.direct) {
								if (lib.card[name].cancel) {
									var next = game.createEvent(name + "Cancel");
									next.setContent(lib.card[name].cancel);
									next.cards = [];
									next.card = get.autoViewAs({ name: name });
									next.player = target;
								}
							} else {
								var next = game.createEvent(name);
								next.setContent(function () {
									if (result.bool == false) {
										player.damage(3, "thunder", "nosource");
									}
								});
								next._result = result;
								next.cards = [];
								next.card = get.autoViewAs({ name: name });
								next.player = target;
							}
							if (targets.length > 0) event.goto(1);
						},
						ai(player) {
							var effect = 0;
							game.countPlayer(function (current) {
								if (current == player) return;
								effect += get.damageEffect(current, current, player, "thunder") / 5;
							});
							return effect;
						},
					},
					大浪: {
						description:
							"你弃置其他角色装备区内的所有牌（装备区内没有牌的角色改为失去1点体力）。",
						content() {
							"step 0";
							var targets = game.filterPlayer((current) => current != player).sortBySeat();
							player.line(targets, "green");
							event.targets = targets;
							"step 1";
							var target = targets.shift();
							if (target.isIn()) {
								var num = target.countCards("e");
								if (num > 0) {
									player.discardPlayerCard(target, true, "e", num);
								} else {
									target.loseHp();
									game.delayex();
								}
							}
							if (targets.length > 0) event.redo();
						},
						ai(player) {
							var effect = 0;
							game.countPlayer(function (current) {
								if (current == player) return;
								var es = current.getCards("e");
								if (es.length > 0) {
									var att = get.attitude(player, current),
										val = get.value(es, current);
									effect -= Math.sqrt(att) * val;
								} else effect += get.effect(current, { name: "losehp" }, player, player);
							});
							return effect;
						},
					},
					暴雨: {
						description: "你弃置一名角色的所有手牌。若其没有手牌，则改为令其失去1点体力。",
						content() {
							"step 0";
							player
								.chooseTarget(
									"请选择【暴雨】的目标",
									"令目标角色弃置所有手牌。若其没有手牌，则其改为失去1点体力。"
								)
								.set("ai", function (current) {
									var es = current.getCards("h"),
										player = _status.event.player;
									if (es.length > 0) {
										var att = get.attitude(player, current),
											val = get.value(es, current);
										return -Math.sqrt(att) * val;
									}
									return get.effect(current, { name: "losehp" }, player, player);
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.line(target, "green");
								var num = target.countCards("h");
								if (num > 0) {
									player.discardPlayerCard(target, true, "h", num);
								} else {
									target.loseHp();
									game.delayex();
								}
							}
						},
						ai(player) {
							return Math.max.apply(
								Math,
								game
									.filterPlayer(function (current) {
										return current != player;
									})
									.map(function (current) {
										var es = current.getCards("h");
										if (es.length > 0) {
											var att = get.attitude(player, current),
												val = get.value(es, current);
											return -Math.sqrt(att) * val;
										}
										return get.effect(current, { name: "losehp" }, player, player);
									})
							);
						},
					},
					大雾: {
						description: "你令所有其他角色获得如下效果：当其使用下一张基本牌时，取消之。",
						content() {
							var targets = game.filterPlayer((current) => current != player).sortBySeat();
							player.line(targets);
							for (var target of targets) target.addSkill("dcsitian_dawu");
						},
						ai(player) {
							var effect = 0;
							game.countPlayer(function (current) {
								if (current == player || current.hasSkill("dcsitian_dawu")) return;
								effect -= 0.5 * get.attitude(player, current);
							});
							return effect;
						},
					},
				},
			},
			//美猴王
			dcjinjing: {
				audio: 2,
				locked: true,
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (player == arg) return false;
					},
				},
			},
			dccibei: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				logTarget: "player",
				filter(event, player) {
					return (
						player != event.player &&
						!player.hasHistory("useSkill", function (evt) {
							return evt.skill == "dccibei" && evt.targets.includes(event.player);
						})
					);
				},
				check(event, player) {
					var target = event.player;
					if (get.attitude(player, target) >= 0) return true;
					return (
						!player.getStat("skill").ruyijingubang_skill ||
						player.storage.ruyijingubang_skill == 1
					);
				},
				content() {
					trigger.cancel();
					player.draw(5);
				},
				ai: {
					threaten: 4.5,
				},
			},
			dcruyi: {
				audio: 2,
				derivation: "ruyijingubang_skill",
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				filter(event, player) {
					return (
						(event.name != "phase" || game.phaseNumber == 0) &&
						player.hasEquipableSlot(1) &&
						!player.getEquips("ruyijingubang").length
					);
				},
				content() {
					var card = game.createCard2("ruyijingubang", "heart", 9);
					player.$gain2(card, false);
					game.delayx();
					player.equip(card);
				},
				mod: {
					canBeGained(card, source, player) {
						if (player.getEquips("ruyijingubang").includes(card)) return false;
					},
					canBeDiscarded(card, source, player) {
						if (player.getEquips("ruyijingubang").includes(card)) return false;
					},
					canBeReplaced(card, player) {
						if (player.getEquips("ruyijingubang").includes(card)) return false;
					},
					cardname(card) {
						if (get.subtype(card, false) == "equip1") return "sha";
					},
					cardnature(card) {
						if (get.subtypes(card, false).includes("equip1")) return false;
					},
					cardDiscardable(card, player) {
						if (player.getEquips("ruyijingubang").includes(card)) return false;
					},
					cardEnabled2(card, player) {
						if (player.getEquips("ruyijingubang").includes(card)) return false;
					},
				},
				group: "dcruyi_blocker",
				subSkill: {
					blocker: {
						trigger: {
							player: ["loseBefore", "disableEquipBefore"],
						},
						forced: true,
						filter(event, player) {
							if (event.name == "disableEquip") return event.slots.includes("equip1");
							var cards = player.getEquips("ruyijingubang");
							return event.cards.some((card) => cards.includes(card));
						},
						content() {
							if (trigger.name == "lose") {
								trigger.cards.removeArray(player.getEquips("ruyijingubang"));
							} else {
								while (trigger.slots.includes("equip1")) trigger.slots.remove("equip1");
							}
						},
					},
				},
			},
			ruyijingubang_skill: {
				equipSkill: true,
				enable: "phaseUse",
				usable: 1,
				chooseButton: {
					dialog() {
						var dialog = ui.create.dialog(
							"如意金箍棒：选择变化攻击范围",
							// 临时修改（by 棘手怀念摧毁）
							[
								[
									[1, "⒈【杀】无次数限制"],
									[2, "⒉【杀】的伤害值+1"],
									[3, "⒊【杀】不可被响应"],
									[4, "⒋【杀】的目标数+1"],
								],
								"textbutton",
							],
							/*
							[
								[
									[1, "　　　⒈【杀】无次数限制　　　"],
									[2, "　　　⒉【杀】的伤害值+1　　　"],
								],
								"tdnodes",
							],
							[
								[
									[3, "　　　⒊【杀】不可被响应　　　"],
									[4, "　　　⒋【杀】的目标数+1　　　"],
								],
								"tdnodes",
							]
							*/
						);
						return dialog;
					},
					filter(button, player) {
						return button.link != player.storage.ruyijingubang_skill;
					},
					check(button) {
						if (button.link == 1 || button.link == 3) return 1;
						return 0;
					},
					backup(links, player) {
						return {
							audio: "dcruyi",
							num: links[0],
							popup: "如意金箍棒",
							content() {
								var num = lib.skill.ruyijingubang_skill_backup.num;
								player.storage.ruyijingubang_skill = num;
								var cards = player.getEquips(1);
								for (var card of cards) {
									if (card && card.name == "ruyijingubang") {
										card.storage.ruyijingubang_skill = num;
										game.log(player, "将", card, "的攻击范围改为" + num);
									}
								}
								player.markSkill("ruyijingubang_skill");
							},
						};
					},
				},
				mod: {
					cardUsable(card, player, num) {
						if (player.storage.ruyijingubang_skill == 1 && card.name == "sha") return Infinity;
					},
				},
				ai: {
					order: 1,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return player.storage.ruyijingubang_skill == 3;
					},
					effect: {
						player(card, player, target, current) {
							if (get.tag(card, "damage") > 0 && player != target) {
								if (
									player.getStat("skill").ruyijingubang_skill &&
									player.storage.ruyijingubang_skill != 1
								)
									return;
								if (
									player.hasSkill("dccibei") &&
									!player.hasHistory("useSkill", function (evt) {
										return evt.skill == "dccibei" && evt.targets.includes(target);
									})
								) {
									return [1, 3];
								}
							}
						},
					},
					result: {
						player(player) {
							if (player.storage.ruyijingubang_skill == 1) {
								if (!player.hasSha()) return 1;
								return 0;
							} else {
								if (player.hasSha() && player.getCardUsable("sha") <= 0) return 1;
								return 0;
							}
						},
					},
				},
				intro: {
					name: "如意金箍棒",
					content(storage) {
						if (!storage) storage = 3;
						return (
							"<li>攻击范围：" +
							storage +
							"<br><li>" +
							[
								"你使用【杀】无次数限制。",
								"你使用的【杀】伤害+1。",
								"你使用的【杀】不可被响应。",
								"你使用【杀】选择目标后，可以增加一个额外目标。",
							][storage - 1]
						);
					},
				},
				subSkill: {
					backup: {},
				},
			},
			ruyijingubang_effect: {
				equipSkill: true,
				trigger: { player: "useCard2" },
				direct: true,
				locked: true,
				filter(event, player) {
					if (event.card.name != "sha") return false;
					var num = player.storage.ruyijingubang_skill;
					if (!num || num == 1) return false;
					if (num != 4) return true;
					var card = event.card;
					if (
						game.hasPlayer(function (current) {
							return (
								!event.targets.includes(current) &&
								lib.filter.targetEnabled2(card, player, current) &&
								lib.filter.targetInRange(card, player, current)
							);
						})
					) {
						return true;
					}
					return false;
				},
				content() {
					"step 0";
					var num = player.storage.ruyijingubang_skill;
					if (num == 4) {
						player
							.chooseTarget(
								get.prompt("ruyijingubang_effect"),
								"为" + get.translation(trigger.card) + "额外指定一个目标",
								function (card, player, target) {
									return (
										!_status.event.sourcex.includes(target) &&
										player.canUse(_status.event.card, target, false)
									);
								}
							)
							.set("sourcex", trigger.targets)
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, _status.event.card, player, player);
							})
							.set("card", trigger.card);
					} else {
						player.logSkill("ruyijingubang_effect");
						if (num == 2) {
							trigger.baseDamage++;
							game.log(trigger.card, "的伤害+1");
						} else if (num == 3) {
							trigger.directHit.addArray(game.filterPlayer());
							game.log(trigger.card, "不可被响应");
						}
						event.finish();
					}
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					player.logSkill("ruyijingubang_effect", event.targets);
					trigger.targets.addArray(event.targets);
				},
			},
			//涛神
			dcnutao: {
				audio: 4,
				trigger: { player: "useCardToPlayer" },
				forced: true,
				group: "dcnutao_add",
				filter(event, player) {
					if (get.type2(event.card) != "trick") return false;
					return event.isFirstTarget && event.targets.some((i) => i != player);
				},
				content() {
					var target = trigger.targets.filter((i) => i != player).randomGet();
					player.line(target, "thunder");
					target.damage("thunder");
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (player !== target && get.type2(card) === "trick") {
								let tars = [target];
								if (ui.selected.targets.length)
									tars.addArray(
										ui.selected.targets.filter((i) => i !== player && i !== target)
									);
								if (tars.length < 2) return [1, 0, 1, -2];
								return [1, 0, 1, -2 / tars.length];
							}
						},
					},
				},
				subSkill: {
					add: {
						audio: "dcnutao",
						trigger: { source: "damageSource" },
						filter(event, player) {
							return event.nature == "thunder" && player.isPhaseUsing();
						},
						forced: true,
						content() {
							player.addTempSkill("dcnutao_sha", "phaseUseAfter");
							player.addMark("dcnutao_sha", 1, false);
						},
					},
					sha: {
						charlotte: true,
						onremove: true,
						marktext: "涛",
						intro: {
							content: "此阶段使用【杀】的次数上限+#",
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name == "sha") return num + player.countMark("dcnutao_sha");
							},
						},
					},
				},
			},
			//铜雀台
			spduanzhi: {
				trigger: { target: "useCardToTargeted" },
				logTarget: "player",
				check(event, player) {
					var target = event.player;
					if (
						get.attitude(player, target) >= -2 ||
						target.countCards("he", function (card) {
							return get.value(card, target) > 5;
						}) < 2
					)
						return false;
					if (player.hp > 2) return true;
					if (player.hp == 1) {
						if (get.tag(event.card, "respondSha")) {
							if (player.countCards("h", { name: "sha" }) == 0) {
								return true;
							}
						} else if (get.tag(event.card, "respondShan")) {
							if (player.countCards("h", { name: "shan" }) == 0) {
								return true;
							}
						} else if (get.tag(event.card, "damage")) {
							if (event.card.name == "shuiyanqijunx") return player.countCards("e") == 0;
							return true;
						}
					}
					return false;
				},
				filter(event, player) {
					return player != event.player && event.player.countDiscardableCards(player, "he") > 0;
				},
				content() {
					player.discardPlayerCard(trigger.player, true, "he", [1, 2]);
					player.loseHp();
				},
			},
			spduyi: {
				enable: "phaseUse",
				usable: 1,
				content() {
					"step 0";
					event.card = get.cards()[0];
					game.cardsGotoOrdering(event.card);
					player.showCards(event.card);
					"step 1";
					player
						.chooseTarget("令一名角色获得" + get.translation(card), true)
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (_status.event.du) {
								if (target.hasSkillTag("nodu")) return 0;
								return -att;
							}
							if (att > 0) {
								if (target == player) att *= 0.6;
								return att + Math.sqrt(Math.max(0, 5 - target.countCards("h")));
							}
							return att;
						})
						.set("du", card.name == "du");
					"step 2";
					if (result && result.bool) {
						var target = result.targets[0];
						target.gain(card, "gain2");
						if (get.color(card, false) == "black") target.addTempSkill("spduyi2");
					}
				},
				ai: {
					order: 0.1,
					result: {
						player: 1,
					},
				},
			},
			spduyi2: {
				mod: {
					cardEnabled2(card) {
						if (get.position(card) == "h") return false;
					},
				},
				mark: true,
				intro: {
					content: "不能使用或打出手牌",
				},
			},
			spcangni: {
				audio: "zhuikong",
				trigger: { player: "phaseDiscardBegin" },
				direct: true,
				content() {
					"step 0";
					player.chooseDrawRecover(
						"###" + get.prompt("spcangni") + "###摸两张牌或回复1点体力，然后将武将牌翻面",
						2
					).logSkill = "spcangni";
					"step 1";
					if (result.control != "cancel2") player.turnOver();
				},
				group: ["spcangni_gain", "spcangni_lose"],
				subSkill: {
					gain: {
						audio: "zhuikong",
						trigger: {
							player: "gainAfter",
							global: "loseAsyncAfter",
						},
						usable: 1,
						filter(event, player) {
							return (
								player.isTurnedOver() &&
								player != _status.currentPhase &&
								event.getg(player).length > 0
							);
						},
						check(event, player) {
							return get.attitude(player, _status.currentPhase) > 0;
						},
						logTarget() {
							return _status.currentPhase;
						},
						prompt2: "令该角色摸一张牌",
						content() {
							_status.currentPhase.draw();
						},
					},
					lose: {
						audio: "zhuikong",
						trigger: {
							player: "loseAfter",
							global: [
								"equipAfter",
								"addJudgeAfter",
								"gainAfter",
								"loseAsyncAfter",
								"addToExpansionAfter",
							],
						},
						filter(event, player) {
							if (event.name == "gain" && player == event.player) return false;
							var evt = event.getl(player);
							if (!evt || !evt.cards2 || !evt.cards2.length) return false;
							return (
								player.isTurnedOver() &&
								player != _status.currentPhase &&
								_status.currentPhase.countCards("he") > 0
							);
						},
						check(event, player) {
							var target = _status.currentPhase;
							var att = get.attitude(player, target);
							if (
								target.countCards("e", function (card) {
									return get.value(card, target) <= 0;
								})
							)
								return att > 0;
							return att < 0;
						},
						logTarget() {
							return _status.currentPhase;
						},
						prompt2: "令该角色弃置一张牌",
						content() {
							_status.currentPhase.chooseToDiscard("he", true);
						},
					},
				},
			},
			spmixin: {
				audio: "qiuyuan",
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") > 0 && game.countPlayer() > 2;
				},
				filterCard: true,
				filterTarget: lib.filter.notMe,
				position: "h",
				selectTarget: 2,
				targetprompt: ["拿牌打人", "被打"],
				multitarget: true,
				delay: false,
				discard: false,
				lose: false,
				check(card) {
					if (card.name == "sha") return 4;
					return 4 - get.value(card);
				},
				content() {
					"step 0";
					player.give(cards, targets[0]);
					"step 1";
					if (!targets[0].isIn() || !targets[1].isIn()) {
						event.finish();
						return;
					}
					targets[0]
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "密信：对" +
							get.translation(targets[1]) +
							"使用一张【杀】，或令其观看并获得你的一张手牌")
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (
								target != _status.event.sourcex &&
								!ui.selected.targets.includes(_status.event.sourcex)
							)
								return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						})
						.set("sourcex", targets[1]);
					"step 2";
					if (!result.bool && targets[0].countCards("h"))
						targets[1].gainPlayerCard(targets[0], "visible", "h", true);
				},
				ai: {
					order: 1,
					expose: 0.1,
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							if (!card) return 0;
							if (ui.selected.targets.length == 0) {
								if (card.name == "sha" || target.hasSha()) return 2;
								if (get.value(card, target) < 0) return -2;
								return 0;
							}
							var target1 = ui.selected.targets[0];
							if (
								(card.name == "sha" || target1.hasSha()) &&
								get.effect(target, { name: "sha" }, target1, target1) > 0
							)
								return get.effect(target, { name: "sha" }, target1, target);
							return 1.5;
						},
					},
				},
			},
			spfengyin: {
				audio: "moukui",
				trigger: { global: "phaseZhunbeiBegin" },
				direct: true,
				filter(event, player) {
					return (
						player != event.player &&
						event.player.hp >= player.hp &&
						player.countCards("h", function (card) {
							if (_status.connectMode) return true;
							return get.name(card, player) == "sha";
						}) > 0
					);
				},
				content() {
					"step 0";
					player
						.chooseCard(
							"h",
							get.prompt("spfengyin", trigger.player),
							"交给该角色一张【杀】并令其跳过出牌阶段和弃牌阶段",
							function (card, player) {
								return get.name(card, player) == "sha";
							}
						)
						.set("ai", function (card) {
							if (_status.event.goon) return 5 - get.value(card);
							return 0;
						})
						.set(
							"goon",
							(function () {
								if (get.attitude(player, trigger.player) >= 0) return false;
								if (trigger.player.countCards("hs") < trigger.player.hp) return false;
								return true;
							})()
						);
					"step 1";
					if (result.bool) {
						var target = trigger.player;
						player.logSkill("spfengyin", target);
						player.give(result.cards, target, "give");
						target.skip("phaseUse");
						target.skip("phaseDiscard");
					}
				},
			},
			spchizhong: {
				mod: {
					maxHandcardBase(player, num) {
						return player.maxHp;
					},
				},
				trigger: { global: "dieAfter" },
				forced: true,
				content() {
					player.gainMaxHp();
				},
			},
			fenxin_old: {
				mode: ["identity"],
				trigger: { source: "dieBegin" },
				init(player) {
					player.storage.fenxin = false;
				},
				intro: {
					content: "limited",
				},
				skillAnimation: "epic",
				animationColor: "fire",
				unique: true,
				limited: true,
				audio: "fenxin",
				mark: true,
				filter(event, player) {
					if (player.storage.fenxin) return false;
					return (
						event.player.identity != "zhu" &&
						player.identity != "zhu" &&
						player.identity != "mingzhong" &&
						event.player.identity != "mingzhong"
					);
				},
				check(event, player) {
					if (player.identity == event.player.identity) return Math.random() < 0.5;
					var stat = get.situation();
					switch (player.identity) {
						case "fan":
							if (stat < 0) return false;
							if (stat == 0) return Math.random() < 0.6;
							return true;
						case "zhong":
							if (stat > 0) return false;
							if (stat == 0) return Math.random() < 0.6;
							return true;
						case "nei":
							if (event.player.identity == "fan" && stat < 0) return true;
							if (event.player.identity == "zhong" && stat > 0) return true;
							if (stat == 0) return Math.random() < 0.7;
							return false;
					}
					return false;
				},
				prompt(event, player) {
					return "焚心：是否与" + get.translation(event.player) + "交换身份？";
				},
				content() {
					game.broadcastAll(
						function (player, target, shown) {
							var identity = player.identity;
							player.identity = target.identity;
							if (shown || player == game.me) {
								player.setIdentity();
							}
							target.identity = identity;
						},
						player,
						trigger.player,
						trigger.player.identityShown
					);
					player.line(trigger.player, "green");
					player.storage.fenxin = true;
					player.awakenSkill("fenxin_old");
				},
			},
			
			//向秀
			mpmiaoxi: {
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				position: "h",
				filterTarget(card, player, target) {
					return target.countCards("h") && target != player;
				},
				discard: false,
				lose: false,
				delay: false,
				async content(event, trigger, player) {
					const target = event.target;
					const carda = event.cards[0];
					const result = await player.choosePlayerCard(target, "h", true).forResult();
					if (result.bool) {
						const cardb = result.cards[0];
						player.$throw(carda);
						target.$throw(cardb);
						game.log(player, "展示了", player, "的", carda, "和", target, "的", cardb);
						await player.showCards([carda, cardb], get.translation(player) + "发动了【妙析】");
						if (get.color(carda) == get.color(cardb)) {
							await game.loseAsync({
								lose_list: [
									[player, [carda]],
									[target, [cardb]],
								],
								discarder: player,
							}).setContent("discardMultiple");
						}
						if (get.suit(carda) == get.suit(cardb)) await target.loseHp();
						if (get.name(carda) == get.name(cardb)) {
							if (get.owner(cardb)) await get.owner(cardb).give(cardb, player);
							else await player.gain(cardb, "gain2");
						}
						if (get.number(carda) == get.number(cardb)) player.getStat("skill").mpmiaoxi--;
					}
				},
				ai: {
					order: 5,
					result: {
						target: -1,
					},
				},
			},
			mpsijiu: {
				trigger: {
					global: "roundStart",
				},
				filter(event, player) {
					return game.hasPlayer(current=>{
						if (current == player) return false;
						return current.getRoundHistory("lose", evt => {
							let evtx = evt.getParent();
							if (!evtx.getg) return false;
							var cards = evtx.getg(player);
							if (!cards.length) return false;
							var cards2 = evt.cards2;
							for (var card of cards2) {
								if (cards.includes(card)) return true;
							}
							return false;
						},1).length>0;
					});
				},
				frequent: true,
				async content(event, trigger, player) {
					await player.draw();
					const result = await player
						.chooseTarget("是否观看一名角色的手牌？", function (card, player, target) {
							return target != player && target.countCards("h");
						})
						.set("ai", target => {
							return 11 - get.attitude(get.player(), target);
						})
						.forResult();
					if (result.bool) {
						const target = result.targets[0];
						await player.viewHandcards(target);
					}
				},
			},
		},
		dynamicTranslate: {
			dcjianxiong(player) {
				return (
					"当你受到伤害后，你可以摸" +
					get.cnNumber(player.countMark("dcjianxiong") + 1) +
					"张牌并获得对你造成伤害的牌，然后你令此技能摸牌数+1（至多为5）。"
				);
			},
			dcbenxi(player) {
				if (player.storage.dcbenxi) return "转换技，锁定技。当你失去手牌后，阴：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。<span class='bluetext'>阳：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。</span>";
				return "转换技，锁定技。当你失去手牌后，<span class='bluetext'>阴：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。</span>阳：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。";
			},
			dcqixin(player) {
				const storage = player.storage["dcqixin"];
				const banned = player.storage.dcqixin_die;
				if (banned) return '<span style="opacity:0.5">' + lib.translate.dcqixin_info + "</span>";
				let str = "转换技。①出牌阶段，你可以将性别变更为：";
				if (!storage) str += '<span class="bluetext">';
				str += "阴，曹节--女；";
				if (!storage) str += "</span>";
				if (storage) str += '<span class="bluetext">';
				str += "阳，刘协--男。";
				if (storage) str += "</span>";
				return str + "②当你即将死亡时，你取消之并将性别变更为〖齐心①〗的转换状态，将体力调整至此状态的体力，然后你本局游戏不能发动〖齐心〗。";
			},
		},
		translate: {
			old_lingju: "SP灵雎",
			old_lingju_prefix: "SP",
			fenxin_old: "焚心",
			fenxin_old_info:
				"限定技，当你杀死一名非主公角色时，你可以与其交换未翻开的身份牌。（你的身份为主公时不能发动此技能）",
			sp_fuwan: "SP伏完",
			sp_fuwan_prefix: "SP",
			spfengyin: "奉印",
			spfengyin_info:
				"其他角色的回合开始时，若其体力值不少于你，你可以交给其一张【杀】，令其跳过出牌阶段和弃牌阶段。",
			spchizhong: "持重",
			spchizhong_info: "锁定技，你的手牌上限等于体力上限；其他角色死亡时，你加1点体力上限。",
			sp_fuhuanghou: "SP伏寿",
			sp_fuhuanghou_prefix: "SP",
			spcangni: "藏匿",
			spcangni_info:
				"弃牌阶段开始时，你可以回复1点体力或摸两张牌，然后将你的武将牌翻面；其他角色的回合内，当你获得（每回合限一次）/失去一次牌时，若你的武将牌背面朝上，你可以令该角色摸/弃置一张牌。",
			spmixin: "密信",
			spmixin_info:
				"出牌阶段限一次，你可以将一张手牌交给一名其他角色，该角色须对你选择的另一名角色使用一张无距离限制的【杀】，否则你选择的角色观看其手牌并获得其中一张。",
			sp_jiben: "SP吉本",
			sp_jiben_prefix: "SP",
			spduanzhi: "断指",
			spduanzhi_info: "当你成为其他角色使用的牌的目标后，你可以弃置其至多两张牌，然后失去1点体力。",
			spduyi: "毒医",
			spduyi2: "毒医",
			spduyi_info:
				"出牌阶段限一次，你可以亮出牌堆顶的一张牌并交给一名角色，若此牌为黑色，该角色不能使用或打出手牌，直到回到结束。",
			sp_mushun: "SP穆顺",
			sp_mushun_prefix: "SP",
			libai: "李白",
			dclbjiuxian: "酒仙",
			dclbjiuxian_info: "①你可以将额定目标数大于1的锦囊牌当做【酒】使用。②你使用【酒】无次数限制。",
			dcshixian: "诗仙",
			dcshixian_yayun: "押韵",
			dcshixian_info:
				"当你使用一张牌时，若此牌的牌名与你于本局游戏使用的上一张牌的牌名押韵，则你可以摸一张牌，并令此牌额外结算一次。",
			taoshen: "涛神",
			dcnutao: "怒涛",
			dcnutao_info:
				"锁定技。①当你使用锦囊牌指定第一个目标时，若目标角色包含其他角色，你随机对其中一名其他目标角色造成1点雷电伤害。②当你于出牌阶段造成雷电伤害后，你于此阶段使用【杀】的次数上限+1。",
			sunwukong: "孙悟空",
			dcjinjing: "金睛",
			dcjinjing_info: "锁定技。其他角色的手牌对你可见。",
			dccibei: "慈悲",
			dccibei_info: "每回合每名角色限一次。当你对其他角色造成伤害时，你可以防止此伤害，然后摸五张牌。",
			dcruyi: "如意",
			dcruyi_info:
				"锁定技。①游戏开始时，你将【如意金箍棒】置入装备区。②你手牌区内的武器牌均视为【杀】，且你不是武器牌的合法目标。③当你即将失去【如意金箍棒】或即将废除武器栏时，取消之。④你不能将装备区内的【如意金箍棒】当做其他牌使用或打出。",
			ruyijingubang: "如意金箍棒",
			// ruyijingubang_skill:'如意',
			ruyijingubang_skill: "如意金箍棒",
			ruyijingubang_effect: "如意金箍棒",
			ruyijingubang_info:
				"出牌阶段限一次。你可以将此牌的实际攻击范围调整为1~4内的任意整数。你根据此牌的实际攻击范围拥有对应的效果：<br><li>⑴你使用【杀】无次数限制。<br><li>⑵你使用的【杀】伤害+1。<br><li>⑶你使用的【杀】不可被响应。<br><li>⑷你使用【杀】选择目标后，可以增加一个额外目标。",
			ruyijingubang_skill_info: "出牌阶段限一次。你可以将此牌的实际攻击范围调整为1~4内的任意整数。你根据此牌的实际攻击范围拥有对应的效果：<br><li>⑴你使用【杀】无次数限制。<br><li>⑵你使用的【杀】伤害+1。<br><li>⑶你使用的【杀】不可被响应。<br><li>⑷你使用【杀】选择目标后，可以增加一个额外目标。",
			longwang: "龙王",
			dclonggong: "龙宫",
			dclonggong_info:
				"每回合限一次。当你受到伤害时，你可以防止此伤害，然后令伤害来源从牌堆中获得一张装备牌。",
			dcsitian: "司天",
			dcsitian_info:
				"出牌阶段，你可以弃置两张颜色不同的手牌。系统从所有天气中随机选择两个，你观看这些天气并选择一个执行。<br><li>烈日：你对其他角色依次造成1点火属性伤害。<br><li>雷电：你令其他角色各进行一次判定。若结果为♠2~9，则其受到3点无来源雷属性伤害。<br><li>大浪：你弃置其他角色装备区内的所有牌（装备区内没有牌的角色改为失去1点体力）。<br><li>暴雨：你弃置一名角色的所有手牌。若其没有手牌，则改为令其失去1点体力。<br><li>大雾：你令所有其他角色获得如下效果：当其使用下一张基本牌时，取消之。",
			sunyang: "孙杨",
			clbshuijian: "水箭",
			clbshuijian_info:
				"摸牌阶段开始时，你可以令额定摸牌数+X（X为你装备区内牌数的一半+1，且向下取整）。",
			yeshiwen: "叶诗文",
			clbjisu: "急速",
			clbjisu_info:
				"判定阶段开始前，你可以跳过本回合的判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】。",
			clbshuiyong: "水泳",
			clbshuiyong_info: "锁定技。当你受到火属性伤害时，取消之。",
			xiaoyuehankehan: "小约翰可汗",
			dctongliao: "通辽",
			dctongliao_info:
				"①摸牌阶段结束时，你可以选择一张点数最小的手牌，将此牌标记为“通辽”。②当你失去一张具有“通辽”标签的牌时，你摸X张牌（X为此牌点数）。",
			dcwudao: "悟道",
			dcwudao_info:
				"当你使用牌结算结束后，若你使用的上一张牌与此牌类型相同，则你可以于本回合内获得如下效果：当你于回合内使用该类型的牌时，你令此牌不可被响应且伤害值基数+1。",
			zhutiexiong: "朱铁雄",
			wu_zhutiexiong: "朱铁雄",
			dcbianzhuang: "变装",
			dcbianzhuang_info:
				"①出牌阶段限一次，你可以从系统随机选择的两个技能中获得一个，并视为使用一张【杀】（无距离次数限制），然后失去以此法获得的技能。②当你使用装备牌后，你清空此技能的发动次数记录。③当你发动〖变装①〗后，若你发动〖变装①〗的次数大于2，则你将武将牌变更为诸葛亮，并将系统选择的技能数改为三个。",
			dc_caocao: "经典曹操",
			dc_caocao_prefix: "经典",
			dcjianxiong: "奸雄",
			dcjianxiong_info:
				"当你受到伤害后，你可以摸一张牌并获得对你造成伤害的牌，然后你令此技能摸牌数+1（至多为5）。",
			dc_liubei: "经典刘备",
			dc_liubei_prefix: "经典",
			dcrende: "仁德",
			dcrende_info: "出牌阶段每名角色限一次。你可以获得一名其他角色两张手牌，然后视为使用一张基本牌。",
			dc_sunquan: "经典孙权",
			dc_sunquan_prefix: "经典",
			dczhiheng: "制衡",
			dczhiheng_info:
				"①出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。②每回合每名角色限一次。当你对其他角色造成伤害后，你令〖制衡①〗于此回合发动次数上限+1。",
			nezha: "哪吒",
			dcsantou: "三头",
			dcsantou_info:
				"锁定技，当你受到伤害时，防止之，然后若以下有条件成立，你失去1点体力：1.你于本回合此前以此法防止过该伤害来源的伤害，且你的体力值不小于3；2.本次伤害为属性伤害，且你的体力值为2；3.本次伤害的渠道为红色的牌，且你的体力值为1。",
			dcfaqi: "法器",
			dcfaqi_info:
				"当你于出牌阶段使用装备牌结算结束后，你视为使用一张本回合未以此法使用过的普通锦囊牌。",
			dc_sunce: "经典孙策",
			dc_sunce_prefix: "经典",
			dcshuangbi: "双壁",
			dcshuangbi_info:
				"出牌阶段限一次，你可以选择一项：①摸X张牌，本回合手牌上限+X；②弃置至多X张牌，随机对其他角色造成等量火焰伤害；③视为使用X张火【杀】或【火攻】。（X为场上存活角色数）",
			dc_zhaoyun: "经典神赵云",
			dc_zhaoyun_prefix: "经典神",
			dclonghun: "龙魂",
			dclonghun_info:
				"每回合限20次，你可以将你的牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当【无懈可击】。",
			dczhanjiang: "斩将",
			dczhanjiang_info: "准备阶段，若场上有【青釭剑】，则你可以获得之。",
			dc_wuyi: "经典吴懿",
			dc_wuyi_prefix: "经典",
			dcbenxi: "奔袭",
			dcbenxi_info: "转换技，锁定技。当你失去手牌后，阴：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。阳：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。",
			quyuan: "屈原",
			dcqiusuo: "求索",
			dcqiusuo_info: "当你造成或受到伤害后，你可以从牌堆或弃牌堆中获得一张【铁索连环】。",
			dclisao: "离骚",
			dclisao_info: "出牌阶段限一次，你可以选择至多两名角色，这些角色须同时回答《离骚》的句段填空（抢答题，一名角色回答正确后结束答题）。回答正确的角色展示所有手牌，其余角色本回合不能响应你使用的牌且受到的伤害翻倍。",
			xin_sunquan: "会玩孙权",
			xin_sunquan_prefix: "会玩",
			dchuiwan: "会玩",
			dchuiwan_info: "每回合每种牌名限一次，当你摸牌时，你可以选择至多等同于摸牌数的基本牌或锦囊牌的牌名并从牌堆中获得，然后你少摸等量张牌。",
			dchuanli: "唤理",
			dchuanli_info: "结束阶段，若你本回合：使用牌至少指定三次自己为目标，则你可以令一名其他角色的所有技能失效，然后其获得〖直谏〗和〖固政〗，直到其下回合结束；使用牌至少指定三次一名其他角色为目标，则你可以令其所有技能失效，然后其获得〖英姿〗和〖反间〗，直到其下回合结束。然后若你两项均执行，你获得〖制衡〗直到你的下个回合结束。",
			dc_noname: "无名",
			dcchushan: "出山",
			dcchushan_info: "锁定技，游戏开始时，你获得两个武将的各一个技能，并将你的武将名改为这两个武将的名字组合。",
			wuhujiang: "魂五虎",
			wuhujiang_prefix: "魂",
			olhuyi: "虎翼",
			olhuyi_info: "①游戏开始时，你从随机三个五虎将技能中选择一个获得。②当你使用或打出一张基本牌后，若你因此技能获得的技能数小于5，你随机获得一个技能描述中包含此牌名的五虎将技能。③回合结束时，你可以失去一个以此法获得的技能。",
			xunyuxunyou: "荀彧荀攸",
			zhinang: "智囊",
			zhinang_info: "①当你使用锦囊牌后，你可以获得一个技能台词包含“谋”的技能直到再发动此项；②当你使用装备牌后，你可以获得一个技能名包含“谋”的技能直到再发动此项。",
			gouzhu: "苟渚",
			gouzhu_info: "你失去技能后，若此技能为：锁定技，回复1点体力；觉醒技，获得一张基本牌；限定技，对随机一名其他角色造成1点伤害；转换技，手牌上限+1；主公技，增加1点体力上限。",
			liuxiecaojie: "刘协曹节",
			dcjuanlv: "眷侣",
			dcjuanlv_info: "当你使用牌指定异性角色为目标后，你可以令其选择一项：①弃置一张牌；②令你摸一张牌。",
			dcqixin: "齐心",
			dcqixin_info: "转换技。①出牌阶段，你可以将性别变更为：阴，曹节--女；阳，刘协--男。②当你即将死亡时，你取消之并将性别变更为〖齐心①〗的转换状态，将体力调整至此状态的体力，然后你本局游戏不能发动〖齐心〗。",
			dcqixin_faq: "关于齐心",
			dcqixin_faq_info: "<br>〖齐心①〗的两种状态各拥有初始体力上限的体力值，初始状态为“刘协--男”，且两种状态的体力值分别计算。",
			// ol_jsrg_caocao: "忠曹操",
			// ol_jsrg_caocao_prefix: "忠",
			ol_jsrg_caocao: "汉曹操",
			ol_jsrg_caocao_prefix: "汉",
			oldingxi: "定西",
			oldingxi_info: "当你不因〖定西〗使用伤害牌进入弃牌堆后，你可以对上家使用其中一张伤害牌，然后将使用的牌置于武将牌上。结束阶段，你摸X张牌（X为你的“定西”牌数）。",
			olnengchen: "能臣",
			olnengchen_info: "锁定技，当你受到牌造成的伤害后，若你拥有与此牌牌名相同的“定西”牌，则你随机获得其中一张。",
			olhuojie: "祸结",
			olhuojie_info: "锁定技，出牌阶段开始时，若X大于游戏人数，则你进行X次【闪电】判定直到以此法受到伤害（X为你的“定西”牌数）；然后若你因此受到了伤害，则你获得所有“定西”牌。",
			jiangziya: "姜子牙",
			xingzhou: "兴周",
			xingzhou_info: "每回合限一次，手牌数最少的角色受到伤害后，你可以弃置两张手牌，视为对伤害来源使用一张【杀】；若其因此死亡，你令〖列神〗视为未发动过。",
			lieshen: "列神",
			lieshen_info: "限定技，出牌阶段，你可以令一名角色将体力值和手牌数调整至游戏开始时。",
			shengongbao: "申公豹",
			zhuzhou: "助纣",
			zhuzhou_info: "每回合限一次，手牌数最多的角色造成伤害后，你可以令其获得受伤角色的的一张手牌。",
			yaoxian: "邀仙",
			yaoxian_info: "出牌阶段限一次，你可以令一名角色摸两张牌，然后其须对你指定的另一名其他角色使用【杀】，否则其失去1点体力。",
			nanjixianweng: "南极仙翁",
			xwshoufa: "授法",
			xwshoufa_info: "出牌阶段，你可以展示并将所有♠/♥/♣/♦花色的手牌交给一名其他角色，令其获得〖天妒〗/〖天香〗/〖倾国〗/〖武圣〗直到你的下个回合开始。",
			fuzhao: "福照",
			fuzhao_info: "一名角色进入濒死状态时，你可以令其进行一次判定，若结果为♥，其回复1点体力。",

			collab_olympic: "OL·伦敦奥运会",
			collab_tongque: "OL·铜雀台",
			collab_oldoudizhu: "OL·限时地主",
			collab_wuyi: "新服·五一限时地主",
			collab_liuyi: "新服·六一限时地主",
			collab_duanwu: "新服·端午限时地主",
			collab_qixi: "新服·七夕限时地主",
			collab_decade: "新服·创玩节",
			collab_remake: "新服·共创武将",
			mini_qixian: "小程序·竹林七贤",
			collab_anime: "三国杀·动画",
			
			
			
			
			
/*------------------------------------------// 临时修改（by 棘手怀念摧毁）------------------------------------------*/
/*--------------------------------台词因名将吴懿而更新，所以都放这里很合理吧（开始）--------------------------------*/
	// bingshi
	"#potqingyan1": " 行如圭臬，无偏毫厘。",
	"#potqingyan2": " 既执权柄，不纵私欲。",
	"#potqingyan3": " 清风两袖，正色一堂。",
	"#potceduan1": "若蒙救援，使为外藩，则吴人可挫也。",
	"#potceduan2": "鄙郡虽小，形便之国也。",
	"#potceduan3": "江东虎狼，非王师不能制之。",
	"#pot_chenjiao:die": "纵无申胥之效，敢忘弘演之义乎？",
	"#potjiejie1": "职守，人之大义也，安可不出？",
	"#potjiejie2": "为人执鞭而弃其事，不祥，不可也！",
	"#potqingshi1": "军旅之间可以济者，唯仁与恕。",
	"#potqingshi2": "在职思其所司，在义思其所立。",
	"#potqingshi3": "会在事纵恣，非持久处下之道。",
	"#potqingshi4": "智多而肆，吾畏其有他志。",
	"#pot_xinxianying:die": "汝若依言行之，必可全身而退……",
	"#mbquanchong1": "这等小事，何劳陛下过问？",
	"#mbquanchong2": "陛下万般恩宠，臣常思竭诚相报。",
	"#mbquanchong3": "大胆庞宏，竟敢瞧我不起？",
	"#mbquanchong4": "朝堂有我一日，汝便休想翻身。",
	"#mbrenxing1": "吾乃天子近臣，自依圣命行事。",
	"#mbrenxing2": "陛下金口玉言，岂会有误？",
	"#mb_chenzhi:die": "微臣寸功未建，有辱圣恩啊……",
	"#potgongmou1": "夫居万死之地，必有死争之心。",
	"#potgongmou2": "大王案六军以示余力，何忧于败而欲自往？",
	"#potzhengshuo1": "安帝以来，唯有名号，尺土一民，皆非汉有。",
	"#potzhengshuo2": "孙权在远称臣，此即天人之应也。",
	"#qice_pot_huanjie1": "无有奇策，何以解之？",
	"#qice_pot_huanjie2": "为今之际，唯效图纬故事。",
	
	// 待补
	// "#kanpo_pot_huanjie1": "",
	// "#kanpo_pot_huanjie2": "",
	
	"#pot_huanjie:die": "陛下厚遇，臣唯结草相报……",
	"#pottuntian1": "屯田开渠，为军农要用。",
	"#pottuntian2": "农者，胜之本也。",
	"#potjixi1": "今掩其空虚，破之必矣。",
	"#potjixi2": "存亡之分，在此一举。",
	"#potzaoxian1": "乘胜进击，一鼓作气。",
	"#potzaoxian2": "为建破蜀之功，何惧丧身之险。",
	"#pot_dengai:die": "忠心天日可表，奈何为乱贼所蔽……",
	"#pothaoshi1": "万贯家财，尽施百姓又何妨？",
	"#pothaoshi2": "今战事频起，百姓流离，吾安忍坐视？",
	"#pothaoshi3": "以其无私，故能成其私也。",
	"#potdimeng1": "两家联盟若成，则无虑强曹之患。",
	"#potdimeng2": "今为将军陈以时势，望明缔盟之重也。",
	"#pot_lusu:die": "但恐时移世易，联盟不再啊……",
	"#mbxiongtu1": "明日置酒设宴，还望使君勿醉。",
	"#mbxiongtu2": "使君病未善平，有带服药酒，可取之。",
	"#mbxiongtu3": "诸葛恪民心尽失，此实为大好之机。",
	"#mbxiongtu4": "诸葛恪跋扈自恣，峻请为陛下除之。",
	"#mbxianshuai1": "吾不为陛下分忧，谁为陛下分忧？",
	"#mbxianshuai2": "臣即率兵马，征伐曹魏。",
	"#mb_sunjun:die": "啊啊，诸葛恪，汝生时吾尚且不惧，更况死乎？",
	"#potzhongao1": "主公有延助力，何忧汉室难兴！",
	"#potzhongao2": "此番斩将得胜，只是连捷之始！",
	"#potzhongao3": "此身搏杀不懈，只为成主公之业！",
	"#potzhongao4": "一时得失何须挂怀，自有再建功业之机！",
	"#potzhongao5": "吾身无需担忧，诸位还需奋进！",
	"#potkuanggu1": "曹贼吾犬，我有何惧哉？",
	"#potkuanggu2": "我尚未全力一搏，又试问谁能阻挡？",
	"#potkuanggu_pot_weiyan_achieve1": "饮罢贼血，看我再立功绩！",
	"#potkuanggu_pot_weiyan_achieve2": "与我为敌，是汝等最大的不幸！",
	"#potkuanggu_pot_weiyan_achieve3": "贼寇尚未尽戮，我岂会还营！",
	"#potkuanggu_pot_weiyan_achieve4": "可还有强敌，能让我浅尝一败！",
	"#potkuanggu_pot_weiyan_fail1": "趁此番小胜，再图一雪前耻！",
	"#potkuanggu_pot_weiyan_fail2": "我自当率军击贼，岂可为断后之将！",
	"#potzhuangshi1": "若魏寇将十万之众，延当为主公尽歼！",
	"#potzhuangshi2": "纵曹贼举天下进犯，延亦可勠力拒退！",
	"#potzhuangshi_pot_weiyan_achieve1": "丞相无需多虑，我定能亲身立功！",
	"#potzhuangshi_pot_weiyan_achieve2": "夏侯楙怯而无谋，有何计议之需！",
	"#potyinzhan1": "征战沙场，实乃平生快事！",
	"#potyinzhan2": "为主破敌，如鱼饮水！",
	"#potyinzhan3": "魏文长在此，尔辈何敢乃尔！",
	"#potyinzhan_pot_weiyan_achieve1": "既遇我魏延，休再妄想生还！",
	"#potyinzhan_pot_weiyan_achieve2": "敢阻我锋芒，自是要丢盔弃甲！",
	"#potyinzhan_pot_weiyan_achieve3": "强敌我斩，坚甲我摧！",
	"#potyinzhan_pot_weiyan_fail1": "宁战死沙场，绝不弃甲而降！",
	"#potyinzhan_pot_weiyan_fail2": "纵士少兵疲，亦可杀出重围！",
	"#potyinzhan_pot_weiyan_fail3": "战事何计兵将多寡，但看心怀之气！",
	"#kunfen_pot_weiyan1": "身承主公深信，岂可为小错所扰！",
	"#kunfen_pot_weiyan2": "前路既艰，更需倍道而行！",
	"#pot_weiyan:die": "止为大汉献身，纵死又有何恨？",
	"#pot_weiyan_achieve:die": "战死沙场固为快事，且待来生看大汉兴复！",
	"#pot_weiyan_fail:die": "不怨小人构陷，只恨主公雄志未成……",
	"#mb_zhangyan:die": "与其四下奔走，不如归降曹公……",
	"#mbfeijing1": "我要看到赤地千里，荒无人烟！",
	"#mbfeijing2": "可知我军中飞燕的厉害！",
	"#mbfeijing3": "家家皆掠，鸡犬不留！",
	"#mbfeijing4": "怪汝时运不佳，栽在我的手里！",
	"#mbxiaoge1": "有此骁勇将士，我何战不可得胜！",
	"#mbxiaoge2": "此战收获颇丰，尔等当有奖赏。",
	"#mbxiaoge3": "小子，可能再与我战百八回合？",
	"#mbxiaoge4": "我也不以多欺少，可敢与我单挑？",
	"#mbrunwei1": "以妾身微躯，亦可奉叔妹无虞。",
	"#mbrunwei2": "妾力虽微，然足挑一肩家计。",
	"#mbrunwei3": "君等困顿未解，我岂可半途而废。",
	"#mbrunwei4": "有舍有得，此固自然之理。",
	"#mbshuanghuai1": "女子有节，宁兰摧玉折，无负心违愿。",
	"#mbshuanghuai2": "谦则德之柄，顺则妇之行。",
	"#mbshuanghuai3": "颜子贵于能改，仲尼嘉其不贰，而况妇人者哉!",
	"#mb_luyusheng:die": "有辱家族之荣，亦负父亲之望……",
	"#mbganggeng1": "犯颜敢谏，何惧一死乎？",
	"#mbganggeng2": "丰有良言，将军何不纳之？",
	"#mbganggeng3": "将军今得天时，此战必可胜之。",
	"#mbganggeng4": "唉!大事去矣，大事去矣!",
	"#mbsijian1": "若可劝得主公，丰死之无悔!",
	"#mbsijian2": "郁寄于心，丰不吐不快!",
	"#mb_tianfeng:die": "用人不疑，疑人不用，主公岂不知此理？",
	"#mbchizhang1": "孙权屡屡犯我，必将其生擒泄愤!",
	"#mbchizhang2": "竖子，安敢口出狂言！",
	"#mbduanyang1": "众士向前，退者立斩！",
	"#mbduanyang2": "大胆竖子，安敢乱我军心!",
	"#mbduanyang3": "诸将所为甚是得当，吾安可不赏？",
	"#mb_huangzu:die": "人骂汝父作锻锡公，奈何不杀？",
	"#mbchenshe1": "此等余党，非为首恶，请曹公免于行刑。",
	"#mbchenshe2": "田银、苏伯既破，余党复何虑哉？",
	"#mbchenshe3": "今者千人得生，全赖曹公恩德。",
	"#mbxiugeng1": "既受此托，安可负曹公之任!",
	"#mbxiugeng2": "相土处民，计民置吏，方可成屯田之功。",
	"#mbxiugeng3": "百姓竞劝乐业，实是人间乐土。",
	"#mbxiugeng4": "所幸风调雨顺，岁岁仓廪丰实。",
	"#mbqingdao1": "上不欺君，下不虐民，此为官之道也。",
	"#mbqingdao2": "为官之法，惟有三事，曰清、曰慎、曰勤。",
	"#guoyuan:die": "吾一生清俭，死亦当薄葬……",
	"#potfuji1": "此符上格神明，下通幽府，有诸般之神效。",
	"#potfuji2": "吾所书之符上可鞭笞百鬼，更况些许小疾。",
	"#potfuji3": "天地有常法，不失铢分也。",
	"#potfuji4": "得天意者寿，失天意者亡。",
	"#potfuji5": "天者养人命，地者养人形。",
	"#potdaozhuan1": "吾承天道法，闭其凶恶之路，开天太平之阶。",
	"#potdaozhuan2": "幸欲报天地之功而得寿者，努力信道勿懈。",
	"#potdaozhuan3": "不学无求贤，不耕无求收，子知之乎？",
	"#potdaozhuan4": "哀哉，有志之士，早计早计，无负今言。",
	"#pot_yuji:die": "子为愚者，尚迷不信道，堕卑贱苦，岂不哀哉!",
	"#pot_yuji_shadow:die": "子思其意无邪倾，积德累行道自成。",
	"#mbkuangxiang1": "吾与益州有通家之好，安忍其诸孙受害？",
	"#mbkuangxiang2": "伐鲁之事，吾可为君之助力。",
	"#mbkuangxiang3": "匡君辅政，丈夫之任也。",
	"#mbxuye1": "今世宜须兵位，且召汉昌賨民为兵。",
	"#mbxuye2": "募兵但为御敌，岂敢怀有贰心？",
	"#mbxuye3": "今天下扰乱，治下岂可无人？",
	"#pangxi:die": "吾救君诸子，广有匡襄，州牧安可疑我？",
	"#mbzhuji1": "有此金汤之固，何惧远征之敌。",
	"#mbzhuji2": "甲坚兵利，敌军自是难攻。",
	"#mbzhuji3": "起楼橹，修器备，以御敌寇。",
	"#mbzhuji4": "若无城甲之坚，何以拒敌之外。",
	"#mbganjue1": "坚毅果敢，勇而有决，大丈夫当如是也。",
	"#mbganjue2": "将贵及时应变，早溃敌军。",
	"#sunsháo:die": "至尊恩遇，臣恐不能报还……",
	"#mbjianji1": "先擒刘备，后图吕布，则徐州可得也。",
	"#mbjianji2": "今日不可力战，需以计图谋。",
	"#mbjianji3": "刘备易取，但恐吕布相救，故需以间计图之。",
	"#mbyuanmo1": "某今献一计，可使刘备即日就擒。",
	"#mbyuanmo2": "孙策据长江之险，兵精良广，未可图也。",
	"#mbyuanmo3": "今当先伐刘备，然后图取孙策未迟。",
	"#mb_yanghong:die": "今日固死，死又何惧？",
	"#potwanglie1": "上将者，但建今日之功，不勘往昔之烈。",
	"#potwanglie2": "一人之兵，如震如霆，霆霆冥冥，天下皆惊!",
	"#pothongyi1": "非弘不能胜其重，非毅无以致其远。",
	"#pothongyi2": "士不可以不弘毅，任重而道远。",
	"#pothongyi3": "纵具万险，亦需一试。",
	"#pothongyi4": "路虽千里，行则将至。",
	"#pot_chendao:die": "先帝功业，终止于此乎？",
	"#potguansha1": "如此坚壁可成，虽金汤之固，未能过也。",
	"#potguansha2": "今趁天寒，可灌沙为城，不过达晓之功。",
	"#potjiyu1": "丞相今与贼战，当即筑营寨，以御敌变也。",
	"#potjiyu2": "丞相英明一世，岂为此事所迷？",
	"#potjiyu3": "三军既出，营为首务，安可不筑城以御乎？",
	"#pot_lougui:die": "丞相留步，老夫告辞……",
	"#pothanzhan1": "君壮情烈胆，某必当奉陪！",
	"#pothanzhan2": "哼！你我再斗一番，方知孰为霸王！",
	"#potzhanlie1": "君头已在此，还不授首来降！",
	"#potzhanlie2": "且看此箭之下，焉有偷生之人？",
	"#potzhanlie3": "哼，汝还能战否？",
	"#potzhenfeng1": "前番未见高下，此番定决生死！",
	"#potzhenfeng2": "天道择义而襄，英雄待机而胜！",
	"#potzhenfeng3": "待吾重振兵马，胜负犹未可知！",
	"#potzhenfeng4": "有胆气者，随某前去一战！",
	"#pot_taishici:die": "身征大义，魂念江东……",
	
	// clan
	"#clanyirong1": "花开彼岸，繁荣不减当年。",
	"#clanyirong2": "移花接木，花容更胜从前。",
	"#clanguixiang1": "女相显贵，凤仪从龙。",
	"#clanguixiang2": "正官七杀，天生富贵。",
	"#clanmuyin_clan_wuxian1": "吴门隆盛，闻钟而鼎食。",
	"#clanmuyin_clan_wuxian2": "吴氏一族，感明君青睐。",
	"#clan_wuxian:die": "玄德东征，何日归还？",
	"#clanzhanding1": "汝颈硬，比之金铁何如？",
	"#clanzhanding2": "魍魉鼠辈，速速系颈伏首！",
	"#clanmuyin_clan_wuban1": "世代佐忠义，子孙何绝焉？",
	"#clanmuyin_clan_wuban2": "祖训秉心，其荫何能薄也？",
	"#clan_wuban:die": "无胆鼠辈，安敢暗箭伤人……",
	"#clanshenjun1": "区区障眼之法，难遮神人之目。",
	"#clanshenjun2": "我以天地为师，自可道法自然。",
	"#clanbalong1": "八龙之蜿蜿，云旗之委蛇。",
	"#clanbalong2": "穆王乘八牡，天地恣遨游。",
	"#clandaojie_clan_xunshu1": "荀人如玉，向节而生。",
	"#clandaojie_clan_xunshu2": "竹有其节，焚之不改。",
	"#clan_xunshu:die": "天下陆沉，荀氏难支……",
	"#clansankuang1": "人言可畏，宜常辟之。",
	"#clansankuang2": "天地可敬，可常惧之。",
	"#clanbeishi1": "虎卑其势，将有所逮。",
	"#clanbeishi2": "至山穷水尽，复柳暗花明。",
	"#clandaojie_clan_xunchen1": "此生所重者，慷慨之节也。",
	"#clandaojie_clan_xunchen2": "愿以此身，全清尚之节。",
	"#clan_xunchen:die": "行二臣之为，羞见列祖……",
	"#clanlieshi1": "拭刃为誓，女无二夫。",
	"#clanlieshi2": "霜刃证言，宁死不贰。",
	"#clandianzhan1": "此灯如我，独向光明。",
	"#clandianzhan2": "此间皆暗，唯灯瞩明。",
	"#clanhuanyin1": "且将此身，还于阴氏。",
	"#clanhuanyin2": "生不得同户，死可葬同穴乎？",
	"#clandaojie_clan_xuncai1": "女子有节，宁死蹈之。",
	"#clandaojie_clan_xuncai2": "荀氏三纲，死不贰嫁。",
	"#clan_xuncai:die": "苦难已过，世间大好……",
	"#clanyunshen1": "此心恋卿，尽融三九之冰。",
	"#clanyunshen2": "寒梅傲雪，馥郁三尺之香。",
	"#clanshangshen1": "识字数万，此痛无字可言。",
	"#clanshangshen2": "吾妻已逝，吾心悲怆。",
	"#clanfenchai1": "钗同我心，奈何分之？",
	"#clanfenchai2": "夫妻分钗，天涯陌路。",
	"#clandaojie_clan_xuncan1": "君子持节，何移情乎？",
	"#clandaojie_clan_xuncan2": "我心慕鸳，从一而终。",
	"#clan_xuncan:die": "此钗，今日可合乎？",
	"#clanfangzhen1": "百姓罹灾，当施粮以赈。",
	"#clanfangzhen2": "开仓放粮，以赈灾民。",
	"#clanliuju1": "乡老十里相送，此驹可彰吾情。",
	"#clanliuju2": "当逐千里之驹，情深可留嬴城。",
	"#clanxumin_clan_hanshao1": "民者，居野而多艰，不可不恤。",
	"#clanxumin_clan_hanshao2": "天下之本，上为君，下为民。",
	"#clan_hanshao:die": "天地不仁，万物何辜……",
	"#clanlianhe1": "枯草难存于劲风，唯抱簇得生。",
	"#clanlianhe2": "吾所来之由，一为好，二为和。",
	"#clanhuanjia1": "我之所言，皆为君好。",
	"#clanhuanjia2": "吾言之切切，请君听之。",
	"#clanxumin_clan_hanrong1": "江海陆沉，皆为黎庶之泪。",
	"#clanxumin_clan_hanrong2": "天下汹汹，百姓何辜？",
	"#clan_hanrong:die": "天下兴亡，皆苦百姓……",
	"#clanlianzhu1": "奸宦作乱，当联兵伐之。",
	"#clanlianzhu2": "尽诛贼常侍，正在此时。",
	"#clanmuyin_clan_wukuang1": "家有贵女，其德泽三代。",
	"#clanmuyin_clan_wukuang2": "吾家当以此女而兴之。",
	"#clan_wukuang:die": "孟德何在？本初何在？",
	"#clanbolong1": "驳者，食虎之兽焉，可摄冢虎。",
	"#clanbolong2": "主上暗弱，当另择明主侍之。",
	"#clanzhongliu_clan_wangling1": "王门世代骨鲠，皆为国之柱石。",
	"#clanzhongliu_clan_wangling2": "行舟至中流而遇浪，大风起兮。",
	"#clan_wangling:die": "淩忠心可鉴，死亦未悔……",
	"#clanguangu1": "此才拔萃，然观其形骨，恐早夭。",
	"#clanguangu2": "绯衣者，汝所拔乎？",
	"#clanxiaoyong1": "凉风萧条，露沾我衣。",
	"#clanxiaoyong2": "忧来多方，慨然永怀。",
	"#clanbaozu_clan_zhongyan1": "好女宜家，可度大厄。",
	"#clanbaozu_clan_zhongyan2": "宗族有难，当施以援手。",
	"#clan_zhongyan:die": "此间天下人，皆分一斗之才……",
	"#clanjiexuan1": "允不才，愿以天下苍生为己任。",
	"#clanjiexuan2": "愿以此躯为膳，饲天下以太平。",
	"#clanmingjie1": "大公至正，恪忠义于国。",
	"#clanmingjie2": "此生柱国之志，铭恪于胸。",
	"#clanzhongliu_clan_wangyun1": "国朝汹汹如涌，当如柱石镇之。",
	"#clanzhongliu_clan_wangyun2": "砥中流之柱，其舍我复谁？",
	"#clan_wangyun:die": "获罪于君，当伏大辟以谢天下……",
	"#clanfuxun1": "东吴遗民惶惶，宜抚而不宜罚。",
	"#clanfuxun2": "江东新附，不可以严法度之。",
	"#clanchenya1": "喜怒不现于形，此为执中之道。",
	"#clanchenya2": "胸有万丈之海，故而波澜不惊。",
	"#clanzhongliu_clan_wanghun1": "国潮汹涌，当为中流之砥柱。",
	"#clanzhongliu_clan_wanghun2": "执剑斩巨浪，息风波者出我辈。",
	"#clan_wanghun:die": "灭国之功本属我，奈何枉作他人衣……",
	"#clanyuzhi1": "风水轮流转，轮到我钟某问鼎重几何了。",
	"#clanyuzhi2": "空将宝地赠他人，某怎会心甘情愿？",
	"#clanyuzhi3": "入宝山而空手回，其与匹夫何异？",
	"#clanyuzhi4": "天降大任于斯，不受必遭其殃。",
	"#clanyuzhi5": "汉鹿已失，魏牛犹在，吾欲执其耳。",
	"#clanyuzhi6": "我欲行夏禹旧事，为天下人。",
	"#clanxieshu1": "大丈夫胸怀四海，有提携玉龙之术。",
	"#clanxieshu2": "王霸之志在胸，我岂池中之物？",
	"#clanxieshu3": "历经风浪至此，会不可止步于龙门。",
	"#clanxieshu4": "我若束手无策，诸位又有何施为？",
	"#clanxieshu5": "今长缨在手，欲问鼎九州。",
	"#clanxieshu6": "我有佐国之术，可缚苍龙。",
	"#clanbaozu_clan_zhonghui1": "动我钟家的人，哼，你长了几个脑袋？",
	"#clanbaozu_clan_zhonghui2": "有我在一日，谁也动不得吾族分毫。",
	"#clanbaozu_clan_zhonghui3": "钟门欲屹万年，当先居万人之上。",
	"#clanbaozu_clan_zhonghui4": "诸位同门，随我钟会赌一遭如何？",
	"#clanbaozu_clan_zhonghui5": "不为刀下脍，且做俎上刀。",
	"#clanbaozu_clan_zhonghui6": "吾族恒大，谁敢欺之？",
	"#clan_zhonghui:die": "兵来似欲作恶，当云何？",
	"#clan_zhonghui2:die": "伯约误我！",
	"#clan_zhonghui3:die": "谋事在人，成事在天……",
	"#clanjiejian1": "庙胜之策，不临矢石。",
	"#clanjiejian2": "王者之兵，有征无战。",
	"#clanhuanghan1": "居天子阶下，故诚惶诚恐。",
	"#clanhuanghan2": "战战惶惶，汗出如浆。",
	"#clanbaozu_clan_zhongyu1": "弟会腹有恶谋，不可不防。",
	"#clanbaozu_clan_zhongyu2": "会期大祸将至，请晋公恕之。",
	"#clan_zhongyu:die": "百年钟氏，一朝为尘矣……",
	"#clanqiuxin1": "此生所求者，顺心意尔。",
	"#clanqiuxin2": "羡孔丘知天命之岁，叹吾生之不达。",
	"#clanjianyuan1": "我视天地为三，其为众妙之门。",
	"#clanjianyuan2": "昔年孔明有言，宁静方能致远。",
	"#clanzhongliu_clan_wanglun1": "上善若水，中流而引全局。",
	"#clanzhongliu_clan_wanglun2": "泽物无声，此真名士风流。",
	"#clan_wanglun:die": "人间多锦绣，奈何我云不喜……",
	"#clanbaichu1": "腹有经纶，到用时施无穷之计。",
	"#clanbaichu2": "胸纳甲兵，烽烟起可靖疆晏海。",
	"#clandaojie_clan_xunyou1": "秉忠正之心，可抚宁内外。",
	"#clandaojie_clan_xunyou2": "贤者，温良恭俭让以得之。",
	"#clan_xunyou:die": "吾知命之寿，明知命之节……",
	"#clanqiajue1": "汉旗未复，此生不居檐下。",
	"#clanqiajue2": "蜀川大好，皆可为家。",
	"#clanmuyin_clan_wuqiao1": "生继汉泽于身，死效忠义于行。",
	"#clanmuyin_clan_wuqiao2": "吾祖彰汉室之荣，今子孙未敢忘。",
	"#clan_wuqiao:die": "蜀川万里，孤身伶仃……",
	"#clanchengqi1": "世有十万字形，亦当有十万字体。",
	"#clanchengqi2": "笔画如骨，不可拘于一形。",
	"#clanjieli1": "子不学难成其材，子不教难筑其器。",
	"#clanjieli2": "此子顽劣如斯，必当严加管教。",
	"#clanbaozu_clan_zhongyao1": "立规定矩，教习钟门之材。",
	"#clanbaozu_clan_zhongyao2": "放任纨绔，于族是祸非福。",
	"#clan_zhongyao:die": "幼子得宠而无忌，恐生无妄之祸……",
	"#qice_clan_xunyou1": "二袁相争，此曹公得利之时。",
	"#qice_clan_xunyou2": "穷寇宜追，需防死蛇之不僵。",

	// collab
	"#olhuyi1": "青龙啸赤月，长刀行千里。",
	"#olhuyi2": "谋取敌将首，声震当阳桥。",
	"#olhuyi3": "游龙战长坂，可复七进七出。",
	"#olhuyi4": "身跨白玉鞍，铁骑踏冰河。",
	"#olhuyi5": "满弓望西北，弦惊夜行之虎。",
	"#wuhujiang:die": "麦城残阳洗长刀……",
	"#wuhujiang2:die": "当阳空余声……",
	"#wuhujiang3:die": "亢龙有悔……",
	"#wuhujiang4:die": "西风寒，冷铁衣……",
	"#wuhujiang5:die": "年老力衰，不复当年勇……",
	"#dcqiusuo1": "驾八龙之婉婉兮，载云旗之委蛇。",
	"#dcqiusuo2": "路漫漫其修远兮，吾将上下而求索。",
	"#dclisao1": "朝饮木兰之坠露兮，夕餐秋菊之落英。",
	"#dclisao2": "惟草木之零落兮，恐美人之迟暮。",
	"#quyuan:die": "伏清白以死直兮，固前圣之所厚……",
	"#dcjuejing1": "龙翔九天，曳日月于天地，换旧符于新岁。",
	"#dcjuejing2": "御风万里，辟邪祟于宇外，映祥瑞于神州。",
	"#dclonghun1": "龙诞新岁，普天同庆，魂佑宇内，裔泽炎黄。",
	"#dclonghun2": "龙吐息而万物生，今龙临神州，华夏当兴。",
	"#dc_zhaoyun:die": "酒足驱年兽，新岁老一人……",
	"#dcsantou1": "任尔计策奇略，我自随机应对。",
	"#dcsantou2": "三相显圣，何惧雷劫地火？",
	"#dcfaqi1": "脚踏风火轮，金印翻天，剑辟阴阳！",
	"#dcfaqi2": "手执火尖枪，红绫混天，乾坤难困我！",
	"#nezha:die": "莲藕花开，始知三清……",
	"#dcbianzhuang1": "须知少日凌云志，曾许人间第一流。",
	"#dcbianzhuang2": "愿尽绵薄之力，盼国风盛行。",
	"#zhutiexiong:die": "那些看似很可笑的梦，是我们用尽全力守护的光……",
	"#wu_zhutiexiong:die": "愿得此身长报国，何须生入玉门关……",
	"#dctongliao1": "发动偷袭。",
	"#dctongliao2": "不够心狠手辣，怎配江山如画。",
	"#dctongliao3": "必须出重拳，而且是物理意义上的出重拳。",
	"#dcwudao1": "众所周知，能力越大，能力也就越大。",
	"#dcwudao2": "龙争虎斗彼岸花，约翰给你一个家。",
	"#dcwudao3": "唯一能够打破命运牢笼的，只有我们自己。",
	"#xiaoyuehankehan:die": "留得青山在，老天爷饿不死瞎家雀。",
	"#xiaoyuehankehan2:die": "人的肉体必然会泯灭，但精神会永远存在。",
	"#xiaoyuehankehan3:die": "我闭上眼睛就是天黑~~",
	"#dclbjiuxian1": "地若不爱酒，地应无酒泉。",
	"#dclbjiuxian2": "天若不爱酒，酒星不在天。",
	"#dcshixian1": "鱼水三顾合，风云四海生。",
	"#dcshixian2": "武侯立岷蜀，壮志吞咸京。",
	"#libai:die": "谁识卧龙客，长吟愁鬓斑……",
	"#libai2:die": "再来一杯吧！",
	"#dcjinjing1": "嗯？有妖气！",
	"#dcjinjing2": "融石为甲，披焰成袍，火眼金睛，踏碎凌霄！",
	"#dccibei1": "生亦何欢，死亦何苦。",
	"#dccibei2": "我欲成佛，天下无魔；我欲成魔，佛奈我何？",
	"#dcruyi1": "俺老孙来也！",
	"#dcruyi2": "吃俺老孙一棒！",
	"#sunwukong:die": "曾经有一整片蟠桃园在我面前，失去后才追悔莫及……",
	"#dclonggong1": "停手，大哥！给东西能换条命不？",
	"#dclonggong2": "冤家宜解不宜结，莫要伤了和气。",
	"#dcsitian1": "观众朋友大家好，欢迎收看天气预报！",
	"#dcsitian2": "这一喷嚏，不知要掀起多少狂风暴雨。",
	"#longwang:die": "三年之期已到，哥们要回家啦……",
	"#dcnutao1": "伍胥怒涛，奔流不灭！",
	"#dcnutao2": "波澜逆转，攻守皆可！",
	"#dcnutao3": "智勇深沉，一世之雄！",
	"#dcnutao4": "波涛怒天，神力无边！",
	"#taoshen:die": "马革裹尸，身沉江心……",
	"#dchuiwan1": "金珠弹黄鹂，玉带做秋千，如此游戏人间。",
	"#dchuiwan2": "小爷横行江东，今日走马、明日弄鹰。",
	"#dchuanli1": "金乌当空，汝欲与我辩日否？",
	"#dchuanli2": "童言无忌，童言有理！",
	"#xin_sunquan:die": "阿娘，大哥抢我糖人！",
	"#oldingxi1": "今天，我曹操誓要踏平祁连山！",
	"#oldingxi2": "饮马瀚海，封狼居胥，大丈夫当如此！",
	"#olnengchen1": "当今四海升平，可为治世之能臣。",
	"#olnengchen2": "为大汉江山鞠躬尽瘁，臣死犹生。",
	"#olhuojie1": "国虽大，忘战必危，好战必亡。",
	"#olhuojie2": "这穷兵黩武的罪，让我一人受便可。",
	"#ol_jsrg_caocao:die": "此征西将军曹侯之墓……",
	
	// ddd
	
	// diy
	
	// extra
	"#dclieqiong1": "横眉蔑风雨，引弓狩天狼。",
	"#dclieqiong2": "一箭出，万军毙！",
	"#dczhanjue1": "流不尽的英雄血，斩不尽的逆贼头！",
	"#dczhanjue2": "长刀渴血，当饲英雄胆！",
	"#shen_huangzhong:die": "箭雨曾蔽日，今夕却成绝响……",
	"#xinrenjie1": "朝中大小事宜，自有大将军定夺。",
	"#xinrenjie2": "朝论政事，老夫唯大将军马首是瞻。",
	"#xinbaiyin1": "乱世已尽，老夫当再开万世河山！",
	"#xinbaiyin2": "明出地上，自昭天德，此为晋也。",
	"#xinjilve1": "三分一统，天下归一！",
	"#xinjilve2": "大权独揽，朝野皆平！",
	"#jilue1": "运筹成略，统军持国！",
	"#jilue2": "英雄皆殁，天命终归吾司马一族！",
	"#wansha_new_simayi1": "连诛其族，翦其党羽，以夷后患！",
	"#wansha_new_simayi2": "绝汝生死，断汝轮回！",
	"#lianpo_new_simayi1": "能战当战，不能战当死耳！",
	"#lianpo_new_simayi2": "连下诸城以筑京观，足永平辽东之患。",
	"#reguicai_new_simayi1": "风雨雷电，皆由老夫决之！",
	"#reguicai_new_simayi2": "天地造化，不过老夫一念之间！",
	"#fangzhu_new_simayi1": "此非老夫不仁，实乃汝咎由自取。",
	"#rejizhi_new_simayi1": "一策一划，皆为成吾之远图！",
	"#rezhiheng_new_simayi1": "轮回不止，因果不休。",
	"#jilin1": "戢鳞潜翼，蓄志待时！",
	"#jilin2": "老臣一心为国，还望陛下明鉴。",
	"#jilin3": "年老意荒，无力朝事。",
	"#jilin4": "坐观潮起潮落，笑谈云卷云舒。",
	"#jilin5": "数载春去秋来，静看大江东流！",
	"#yingyou1": "吞吴克蜀，老臣毕生之志也！",
	"#yingyou2": "臣当总领西事，不负陛下所托！",
	"#yingyou3": "积谷屯田，以为灭贼之要！",
	"#yingyou4": "轻骑神速，八日足解新城之叛！",
	"#yingtian1": "太白袭月知何故，天狼掩日欲吞天！",
	"#yingtian2": "藏锋四十载，终昭吾亮剑之时！",
	"#new_simayi:die": "洛水滔滔，难诉吾一生坎坷……",
	"#jingyu1": "人身疾苦，与我无异。",
	"#jingyu2": "医以济世，其术贵在精诚。",
	"#lvxin1": "医病非难，难在医人之心。",
	"#lvxin2": "知人者有验于天，知天者有验于人。",
	"#huandao1": "一语一默，道尽医者慈悲。",
	"#huandao2": "亦急亦缓，抚平世间苦难。",
	"#dc_shen_huatuo:die": "世无良医，枉死者半……",
	"#zhengqing1": "锐势夺志，斩将者虎候是也！",
	"#zhengqing2": "三军争勇，擎纛者舍我其谁！",
	"#zhuangpo1": "腹吞龙虎，气撼山河！",
	"#zhuangpo2": "神魄凝威，魍魉辟易！",
	"#shen_xuzhu:die": "猛虎归林晚，不见往来人……",
	"#dingzhou1": "今肃亲往，主公何愁不定！",
	"#dingzhou2": "肃之所至，万事皆平！",
	"#tamo1": "天下分崩，乱之已极，肃竭浅智，窃为君计。",
	"#tamo2": "天下易主，已为大势，君当据此，以待其时。",
	"#zhimeng1": "豫州何图远窜，而不投吾雄略之主乎？",
	"#zhimeng2": "吾主英明神武，曹众虽百万亦无所惧！",
	"#shen_lusu:die": "常计小利，何成大局……",
	"#wuling1": "吾创五禽之戏，君可作以除疾。",
	"#wuling2": "欲解万般苦，驱身仿五灵。",
	"#youyi1": "此身行医，志济万千百姓。",
	"#youyi2": "普济众生，永免疾患之苦。",
	"#shen_huatuo:die": "人间诸疾未解，老夫怎入轮回……",
	"#juanjia1": "尚攻者弃守，其提双刃，斩万敌！",
	"#juanjia2": "舍衣事力，提兵驱敌！",
	"#qiexie1": "今挟双戟搏战，定护主公太平！",
	"#qiexie2": "吾乃典韦是也，谁敢向前，谁敢向前！",
	"#cuijue1": "当锋摧决，贯遐洞坚！",
	"#cuijue2": "殒身不恤，死战成仁！",
	"#shen_dianwei:die": "主公快走！",
	"#shen_dianwei2:die": "战死沙场，快哉快哉！",
	"#dctuoyu1": "本尊目之所及，皆为麾下王土。",
	"#dctuoyu2": "擎五丁之神力，碎万仞之高山。",
	"#dcxianjin1": "大风！大雨！大景！！",
	"#dcxianjin2": "行役沙场，不战胜，则战死！",
	"#dcqijing1": "今神兵于天降，贯奕世之长虹！",
	"#dcqijing2": "辟罗浮之险径，捣伪汉之黄龙！",
	"#shen_dengai:die": "灭蜀者，邓氏士载也！",
	"#shelie1": "略懂，略懂。",
	"#shelie2": "什么都略懂一点，生活更多彩一些。",
	"#gongxin1": "攻城为下，攻心为上。",
	"#gongxin2": "我替施主把把脉。",
	"#tw_shen_lvmeng:die": "终是逃不开，追魂索命之咒……",
	"#yizhao1": "苍天已死，此黄天当立之时。",
	"#yizhao2": "甲子尚水，显炎汉将亡之兆。",
	"#sijun1": "联九州黎庶，撼一家之王庭。",
	"#sijun2": "吾以此身为药，欲医天下之疾。",
	"#sanshou1": "三公既现，领大道而立黄天。",
	"#sanshou2": "天地三才，载厚德以驱魍魉。",
	"#tianjie1": "苍天既死，贫道当替天行道！",
	"#tianjie2": "朱紫庸，肉食鄙，吾当代天伐之！",
	"#tianjie3": "贫道张角，请大汉赴死！",
	"#shen_zhangjiao:die": "诸君唤我为贼，然我所窃何物？",
	"#shencai1": "我有三千炼狱，待汝万世轮回！",
	"#shencai2": "纵汝王侯将相，亦须俯首待裁！",
	"#xunshi1": "秉身为正，辟易万邪！",
	"#xunshi2": "巡御两界，路寻不平！",
	"#shen_zhangfei:die": "尔等，欲复斩我头乎？",
	"#wushen1": "鬼龙斩月刀！",
	"#wushen2": "千里追魂，一刀索命。",
	"#twwuhun1": "不杀此人，何以雪恨？",
	"#twwuhun2": "还我头来！",
	"#tw_shen_guanyu:die": "夙愿已了，魂归地府……",
	"#shouli1": "赤骊骋疆，巡狩八荒！",
	"#shouli2": "长缨在手，百骥可降！",
	"#hengwu1": "横枪立马，独啸秋风！",
	"#hengwu2": "世皆彳亍，唯我纵横！",
	"#shen_machao:die": "离群之马，虽强亦亡……",
	"#yuheng1": "权术妙用，存乎一心。",
	"#yuheng2": "威权之道，皆在于衡。",
	"#dili1": "身处巅峰，览天下大事。",
	"#dili2": "位居至尊，掌至高之权。",
	"#shen_sunquan:die": "困居江东，枉称至尊……",
	"#jiufa1": "九伐中原，以圆先帝遗志。",
	"#jiufa2": "日日砺剑，相报丞相厚恩。",
	"#tianren1": "举石补苍天，舍我更复其谁？",
	"#tianren2": "天地同协力，何愁汉道不昌？",
	"#pingxiang1": "策马纵慷慨，捐躯抗虎豺。",
	"#pingxiang2": "解甲事仇雠，竭力挽狂澜。",
	"#shen_jiangwei:die": "武侯遗志，已成泡影矣……",
	"#yingba1": "从我者可免，拒我者难容！",
	"#yingba2": "卧榻之侧，岂容他人鼾睡！",
	"#scfuhai1": "翻江复蹈海，六合定乾坤！",
	"#scfuhai2": "力攻平江东，威名扬天下！",
	"#pinghe1": "不过胆小鼠辈，吾等有何惧哉！",
	"#pinghe2": "只可得胜而返，岂能败战而归！",
	"#shen_sunce:die": "无耻小人！竟敢暗算于我……",
	"#tianzuo1": "此时进之多弊，守之多利，愿主公熟虑。",
	"#tianzuo2": "主公若不时定，待四方生心，则无及矣。",
	"#lingce1": "绍士卒虽众，其实难用，必无为也。",
	"#lingce2": "袁军不过一盘砂砾，主公用奇则散。",
	"#dinghan1": "杀身有地，报国有时。",
	"#dinghan2": "益国之事，虽死弗避。",
	"#shen_xunyu:die": "宁鸣而死，不默而生……",
	"#dulie1": "素来言出必践，成吾信义昭彰！",
	"#dulie2": "小信如若不成，大信将以何立？",
	"#tspowei1": "弓马骑射洒热血，突破重围显英豪！",
	"#tspowei2": "敌军尚犹严防，有待明日再看！",
	"#tspowei3": "君且城中等候，待吾探敌虚实。",
	"#shen_taishici:die": "魂归……天地……",
	"#shuishi1": "聪以知远，明以察微。",
	"#shuishi2": "见微知著，识人心志。",
	"#stianyi1": "天命靡常，惟德是辅。",
	"#stianyi2": "可成吾志者，必此人也！",
	"#sghuishi1": "丧家之犬，主公实不足虑也。",
	"#sghuishi2": "时势兼备，主公复有何忧？",
	"#zuoxing1": "以聪虑难，悉咨于上。",
	"#zuoxing2": "身计国谋，不可两遂。",
	"#zuoxing3": "奉孝不才，愿献勤心。",
	"#shen_guojia:die": "可叹桢干命也迂……",
	"#meihun1": "这个和这个不要，其他全给我吧~",
	"#meihun2": "嗯~~妾身就是喜欢这些，给我嘛~",
	"#huoxin1": "一笑倾城，一眼惑心~",
	"#huoxin2": "哎呀~妾身~能有什么坏心思呢？",
	"#shen_diaochan:die": "纵使消逝，妾影长存……",
	"#wuhun21": "生当啖汝之肉！",
	"#wuhun22": "死当追汝之魂！",
	"#shen_guanyu:die": "我还会回来的……",
	"#xinjuejing1": "背水一战，不胜便死！",
	"#xinjuejing2": "置于死地，方能后生！",
	"#relonghun1": "能屈能伸，才是大丈夫！",
	"#relonghun2": "常山赵子龙在此！",
	"#shen_zhaoyun:die": "龙身虽死，魂魄不灭！",
	"#qixing1": "伏望天恩，誓讨汉贼！",
	"#qixing2": "祈星辰之力，佑我蜀汉！",
	"#kuangfeng1": "万事俱备，只欠业火。",
	"#kuangfeng2": "风~~起~~",
	"#dawu1": "此计可保你一时平安。",
	"#dawu2": "此非万全之策，唯惧天雷。",
	"#shen_zhugeliang:die": "今当远离，临表涕零，不知所言……",
	"#shen_lvmeng:die": "劫数难逃，我们别无选择……",
	"#yeyan1": "（燃烧声）让这熊熊业火，焚尽你的罪恶！",
	"#yeyan2": "（燃烧声）聆听吧，这献给你的镇魂曲！",
	"#qinyin1": "（急促的琴声、燃烧声）",
	"#qinyin2": "（舒缓的琴声）",
	"#shen_zhouyu:die": "逝者不死，浴火……重生……",
	"#renjie21": "忍一时，风平浪静。",
	"#renjie22": "退一步，海阔天空。",
	"#sbaiyin1": "老骥伏枥，志在千里！",
	"#sbaiyin2": "烈士暮年，壮心不已！",
	"#lianpo1": "受命于天，既寿永昌！",
	"#lianpo2": "一鼓作气，破敌致胜！",
	"#shen_simayi:die": "鼎足三分已成梦，一切都结束了……",
	"#guixin1": "山不厌高，海不厌深！",
	"#guixin2": "周公吐哺，天下归心！",
	"#shen_caocao:die": "腾蛇乘雾，终为土灰……",
	"#baonu1": "嗯~~~~~！",
	"#baonu2": "哼！",
	"#wumou1": "哪个说我有勇无谋？！",
	"#wumou2": "不管这些了！",
	"#ol_wuqian1": "看我神威，无坚不摧！",
	"#ol_wuqian2": "天王老子也保不住你！",
	"#ol_shenfen1": "凡人们，颤抖吧！这是神之怒火！",
	"#ol_shenfen2": "这，才是活生生的地狱！",
	"#shen_lvbu:die": "我在修罗炼狱，等着你们，呃哈哈哈哈哈~",
	"#nzry_longnu1": "龙怒降临，岂是尔等凡人可抗？",
	"#nzry_longnu2": "龙意怒火，汝皆不能逃脱。",
	"#nzry_jieying1": "桃园结义，营一世之交。",
	"#nzry_jieying2": "结草衔环，报兄弟大恩。",
	"#shen_liubei:die": "桃园依旧，来世再结……",
	"#nzry_junlve1": "文韬武略兼备，方可破敌如破竹。",
	"#nzry_junlve2": "军略绵腹，制敌千里。",
	"#nzry_cuike1": "摧敌心神，克敌计谋。",
	"#nzry_cuike2": "克险摧难，军略当先。",
	"#nzry_dinghuo1": "绽东吴业火，烧敌军数千！",
	"#nzry_dinghuo2": "业火映东水，吴志绽敌营！",
	"#shen_luxun:die": "东吴业火，终究熄灭……",
	"#drlt_duorui1": "夺敌军锐气，杀敌方士气。",
	"#drlt_duorui2": "尖锐之势，吾亦可一人夺之！",
	"#drlt_zhiti1": "娃闻名止啼，孙损十万休。",
	"#drlt_zhiti2": "江东小儿，安敢啼哭？",
	"#shen_zhangliao:die": "我也有……被孙仲谋所伤之时？",
	"#drlt_poxi1": "夜袭敌军，挫其锐气。",
	"#drlt_poxi2": "受主知遇，袭敌不惧。",
	"#drlt_jieying1": "劫营速战，措手不及。",
	"#drlt_jieying2": "裹甲衔枚，劫营如入无人之境。",
	"#shen_ganning:die": "吾不能奉主，谁辅主基业？",
	"#chuyuan1": "储君之位，囊中之物。",
	"#chuyuan2": "此役，我之胜。",
	"#dengji1": "登高位，享极乐。",
	"#dengji2": "今日，便是我称帝之时。",
	"#shen_caopi:die": "曹魏锦绣，孤还未看尽……",
	"#shenfu1": "河洛之神，诗赋可抒。",
	"#shenfu2": "云神鱼游，罗扇掩面。",
	"#shen_zhenji:die": "众口铄金，难证吾清……",
	"#juejing": "龙战于野，其血玄黄。",
	"#longhun1": "潜龙于渊，涉灵愈伤。",
	"#longhun2": "千里一怒，红莲灿世。",
	"#longhun3": "金甲映日，驱邪祛秽。",
	"#longhun4": "腾龙行云，首尾不见。",
	"#boss_zhaoyun:die": "血染鳞甲，龙坠九天……",
	"#dccuixin1": "今兵临城下，其王庭可摧。",
	"#dccuixin2": "四面皆奏楚歌，问汝降是不降？",
	"#dili_shengzhi1": "位继父兄，承弘德以继往。",
	"#dili_shengzhi2": "英魂犹在，履功业而开来。",
	"#dili_chigang1": "秉承伦常，扶树纲纪。",
	"#dili_chigang2": "至尊临位，则朝野自肃。",
	"#dili_qionglan1": "事无巨细，咸即问询。",
	"#dili_qionglan2": "纵览全局，以小见大。",
	"#dili_quandao1": "继策掌权，符令吴会。",
	"#dili_quandao2": "以权驭衡，谋定天下。",
	"#dili_jiaohui1": "日月交辉，天下大白。",
	"#dili_jiaohui2": "雄鸡引颈，生民白也。",
	"#dili_yuanlv1": "临江而眺，静观江水东流。",
	"#dili_yuanlv2": "屹立山巅，笑看大江潮来。",
	"#shenzhu1": "力引强弓百斤，矢除贯手著棼！",
	"#shenzhu2": "箭既已在弦上，吾又岂能不发！",
	"#jilue_guicai1": "老夫，即是天命！",
	"#jilue_fangzhu1": "赦你死罪，你去吧！",
	"#jilue_wansha1": "天要亡你，谁人能救？",
	"#jilue_zhiheng1": "天之道，轮回也。",
	"#jilue_jizhi1": "顺应天意，得道多助。",
	"#wushuang_shen_lvbu1": "燎原千里，凶名远扬！",
	"#wushuang_shen_lvbu2": "铁蹄奋进，所向披靡！",
	"#tianxing1": "孤之行，天之意。",
	"#tianxing2": "我做的决定，便是天的旨意。",
	"#rejianxiong_shen_caopi1": "孤之所长，继父之所长。",
	"#rejianxiong_shen_caopi2": "乱世枭雄，哼，孤亦是。",
	"#rerende_shen_caopi1": "这些都是孤赏赐给你的。",
	"#rezhiheng_shen_caopi1": "有些事情，还需多加思索。",
	"#olluanji_shen_caopi1": "违逆我的，都该处罚。",
	"#olfangquan_shen_caopi1": "此等小事，你们处理即可。",
	
	// huicui
	"#dcshuangrui1": "刚柔并济，武学之道可不分男女。",
	"#dcshuangrui2": "人言女子柔弱，我偏要以武证道。",
	"#dcfuxie1": "箭射辕角，夏侯老贼必中疑兵之计。",
	"#dcfuxie2": "借父三矢以诱敌，佯装黄汉升在此。",
	"#dcshouxing1": "古时后羿射日，今我以星为狩。",
	"#dcshouxing2": "柔荑挽雕弓，箭出大星落。",
	"#dcshaxue1": "短兵奋进，杀人于无形。",
	"#dcshaxue2": "霜刃映雪，三步之内，必取汝性命！",
	"#dc_huangwudie:die": "谁说，战死沙场专属男儿？",
	"#dcyunzheng1": "佳人弄青丝，柔荑奏鸣筝。",
	"#dcyunzheng2": "玉柱冷寒雪，清商怨羽声。",
	"#dchuoxin1": "闻君精通音律，与我合奏一曲如何？",
	"#dchuoxin2": "知君有心意，此筝寄我情。",
	"#yue_zoushi:die": "雁归衡阳，良人当还……",
	"#dcduanti1": "流水不腐，户枢不蠹。",
	"#dcduanti2": "五禽锻体，百病不侵。",
	"#dcshicao1": "掌中非药，乃活人之根本。",
	"#dcshicao2": "药长于草木，然草木非皆可入药。",
	"#wupu:die": "医者，不可使人长生……",
	"#dcjianzhuan1": "今作擎天之柱，何怜八方风雨？",
	"#dcjianzhuan2": "吾寄百里之命，当居万丈危楼。",
	"#dcfanshi1": "垒巨木为寨，发屯兵自守。",
	"#dcfanshi2": "吾居伊周之位，怎可以罪见黜？",
	"#dc_caoshuang:die": "我度太傅之意，不欲伤我兄弟耳……",
	"#zangba:die": "短刃沉江，负主重托……",
	"#dcsanshi1": "春雨润物，未觉其暖，已见其青。",
	"#dcsanshi2": "养士效孟尝，用时可得千臂之助力。",
	"#dczhenrao1": "此病需静养，怎堪兵戈铁马之扰。",
	"#dczhenrao2": "孤值有疾，竟为文家小儿所扰。",
	"#dcchenlve1": "怀泰山之重，必立以千仞。",
	"#dcchenlve2": "万世之勋待取，此乃亮剑之时。",
	"#dc_simashi:die": "东兴之败，此我过也，诸将何罪！",
	"#dcjichou1": "备武整戈，待天下风起之时。",
	"#dcjichou2": "定淮联兖，邀群士共襄大义。",
	"#dcmouli1": "君上暗弱，以致受制于强臣。",
	"#dcmouli2": "吾闻楚王彪有智勇，可迎之于许都。",
	"#dczifu1": "今势穷，吾自缚于斯，请太傅发落。",
	"#dczifu2": "凌有罪，公劳师而来，唯系首待斩。",
	"#dc_wangling:die": "曹魏之盛，再难复梦……",
	"#dcshiju1": "借力为己用，可攀青云直上。",
	"#dcshiju2": "应势而动，事半而功倍。",
	"#dcyingshi1": "今君失道寡助，何不审时以降？",
	"#dcyingshi2": "君既掷刀于地，可保富贵无虞。",
	"#dc_jiangji:die": "大醉解忧，然忧无解，唯忘耳……",
	"#dcgangu1": "干父之蛊，全辽裔未竟之业。",
	"#dcgangu2": "承志奉祠，达于行伍之事。",
	"#dckuizhen1": "今一马当先，效霸王破釜！",
	"#dckuizhen2": "自古北马皆傲，视南风为鱼俎。",
	"#gongsunxiu:die": "大星坠地，父子俱亡……",
	"#dcfuli1": "民为贵，社稷次之，君为轻。",
	"#dcfuli2": "民之所欲，天必从之。",
	"#dcdehua1": "君子怀德，可驱怀土之小人。",
	"#dcdehua2": "以德与人，福虽未至，祸已远离。",
	"#dc_liuli:die": "覆舟之水，皆百姓之泪……",
	"#dcqiqin_yue_daqiao1": "山月栖瑶琴，一曲渔歌和晚音。",
	"#dcqiqin_yue_daqiao2": "指尖有琴音，何不于君指上听？",
	"#dczixi1": "日暮飞伯劳，倦梳头，坐看鸥鹭争舟。",
	"#dczixi2": "姊折翠柳寄江北，念君心悠悠。",
	"#yue_daqiao:die": "曲终人散，再会奈何桥畔……",
	"#dcqiqin1": "渔歌唱晚落山月，素琴薄暮声。",
	"#dcqiqin2": "指上琴音浅，欲听还需抚瑶琴。",
	"#dcweiwan1": "繁花初成，所幸未晚于桑榆。",
	"#dcweiwan2": "群胥泛舟，共载佳期若瑶梦。",
	"#yue_xiaoqiao:die": "独寄人间白首，曲误周郎难顾……",
	"#dcyijia1": "曹侯忠心可鉴，可暂居其檐下。",
	"#dcyijia2": "今东都糜败，陛下当移驾许昌。",
	"#dcdingji1": "丞相宜进爵国公，以彰殊勋。",
	"#dcdingji2": "今公与诸将并侯，岂天下所望哉！",
	"#dc_dongzhao:die": "凡有天下者，无虚伪不真之人……",
	"#dcliangxiu1": "君子性谦，不夺人之爱。",
	"#dcliangxiu2": "蒯门多隽秀，吾居其末。",
	"#dcxunjie1": "君子有节，可杀而不可辱。",
	"#dcxunjie2": "吾受国命，城破则身死。",
	"#kuaiqi:die": "泉下万事休，人间雪满头……",
	"#dccaisi1": "扶耒耜，植桑陌，习诗书，以传家。",
	"#dccaisi2": "惟楚有才，于庞门为盛。",
	"#dczhuoli1": "良梓千万，当擢才而用。",
	"#dczhuoli2": "任人唯才，不妨寒门入上品。",
	"#pangshanmin:die": "九品中正后，庙堂无寒门……",
	"#dcbeini1": "臣等忠心耿耿，陛下何故谋反？",
	"#dcbeini2": "公等养汝，正拟今日，复何疑？",
	"#dcshizong1": "成济、王经已死，独我安享富贵。",
	"#dcshizong2": "吾乃司马公心腹，顺我者生！",
	"#dc_jiachong:die": "诸公勿怪，充乃奉命行事……",
	"#dczigu1": "卿有成材良木，可妆吾家江山。",
	"#dczigu2": "吾好锦衣玉食，卿家可愿割爱否？",
	"#dczuowei1": "不顺我意者，当填在野之壑。",
	"#dczuowei2": "吾令不从者，当膏霜锋之锷。",
	"#dc_sunchen:die": "臣家火起，请离席救之……",
	"#dclvecheng1": "我等一无所有，普天又有何惧？",
	"#dclvecheng2": "我视百城为饵，皆可食之果腹。",
	"#dczhongji1": "羸汉暴政不息，黄巾永世不绝。",
	"#dczhongji2": "宛洛膏如秋实，怎可不生螟虫？",
	"#dc_zhangmancheng:die": "逡巡不前，坐以待毙……",
	"#dclingkong1": "吴宫绿荷惊涟漪，飞燕啄新泥。",
	"#dclingkong2": "箜篌奏晚歌，渔樵有归期。",
	"#dcxianshu1": "居宠而不骄，秉贤淑于内庭。",
	"#dcxianshu2": "心怀玲珑意，宜家国于春秋。",
	"#yue_zhoufei:die": "红颜薄命，望君珍重……",
	"#dcyouzhan1": "本将军在此！贼仲达何在？",
	"#dcyouzhan2": "以身为饵，诱老贼出营。",
	"#dc_wuban:die": "班……有负丞相重望……",
	"#dcshuangjia1": "塞外青鸟匿，不闻折柳声。",
	"#dcshuangjia2": "向晚吹霜笳，雪落白发生。",
	"#dcbeifen1": "此心如置冰壶，无物可暖。",
	"#dcbeifen2": "年少爱登楼，欲说语还休。",
	"#yue_caiwenji:die": "天何薄我，天何薄我……",
	"#dcminze1": "百姓千载皆苦，勿以苛政待之。",
	"#dcminze2": "黎庶待哺，人主当施恩德泽。",
	"#dcjini1": "备劲弩强刃，待恶客上门。",
	"#dcjini2": "逆贼犯境，诸君当共击之。",
	"#liuchongluojun:die": "袁术贼子，折我大汉基业……",
	"#dcporui1": "承父勇烈，问此间谁堪敌手。",
	"#dcporui2": "敌锋虽锐，吾亦击之如破卵。",
	"#dcgonghu1": "大都督中伏，吾等当舍命救之。",
	"#dcgonghu2": "袍泽临难，但有共死而无坐视。",
	"#yuechen:die": "天下犹魏，公休何故如此？",
	"#dcxiangshu1": "要财还是要命，选一个吧！",
	"#dcxiangshu2": "有什么好东西，都给我交出来！",
	"#zhangkai:die": "报应竟来得这么快……",
	"#dcchiying1": "今诱老贼来此，必折其父子于上方谷。",
	"#dcchiying2": "列柳城既失，当下唯死守阳平关。",
	"#gaoxiang:die": "老贼不死，实天意也……",
	"#dcshengdu1": "姐姐有的，妹妹也要有。",
	"#dcshengdu2": "你我同为佳丽，凭甚汝得独宠？",
	"#dcjieling1": "来人，送冯氏上路！",
	"#dcjieling2": "我有一求，请姐姐赴之。",
	"#dongwan:die": "陛下饶命，妾并无歹意……",
	"#dcjizhong1": "聚八方之众，昭黄天之明。",
	"#dcjizhong2": "联苦厄黎庶，传大道太平。",
	"#dcrihui1": "甲子双至，黄巾再起。",
	"#dcrihui2": "日中必彗，操刀必割。",
	"#dcguangshi1": "舍身饲火，光耀人间。",
	"#dcguangshi2": "愿为奉光之薪柴，照太平于人间。",
	"#zhangchu:die": "苦难不尽，黄天不死……",
	"#dcmoyu1": "人之所有，我之所欲。",
	"#dcmoyu2": "胸有欲壑千丈，自当饥不择食。",
	"#peiyuanshao:die": "好生厉害的白袍小将……",
	"#dcyinlu1": "南疆苦瘴，非土人不得过。",
	"#dcyinlu2": "闻丞相南征，某特来引之。",
	"#dcyouqi1": "寒烟锁旧山，坐看云起出。",
	"#dcyouqi2": "某隐居山野，不慕富贵功名。",
	"#mengjie:die": "蛮人无知，请丞相教之……",
	"#dcgue1": "哀兵必胜，况吾众志成城。",
	"#dcgue2": "扼守孤城，试问万夫谁开？",
	"#dcsigong1": "善守者亦善攻，不可死守。",
	"#dcsigong2": "璋军疲敝，可伺机而攻。",
	"#dc_huojun:die": "蒙君知恩，奈何早薨……",
	"#dchuiling1": "天地有灵，汇于我眸间。",
	"#dchuiling2": "撷四时钟灵，拈芳兰毓秀。",
	"#dcchongxu1": "慕圣道冲虚，有求者皆应。",
	"#dcchongxu2": "养志无为，遗冲虚于物外。",
	"#dc_sunhanhua:die": "长生不长乐，悔觅仙途……",
	"#dcqinshen1": "君不见砾砖素瓦，亦可成摘星之高楼乎？",
	"#dcqinshen2": "某无惊世之才，亦非积富之家，唯托以勤慎。",
	"#dcweidang1": "今既掌玺握权，焉能不为己谋划？",
	"#dcweidang2": "托孤之大任，内可付与爽，外可付于懿。",
	"#dc_sunziliufang:die": "我等虽死，然已享富贵荣华……",
	"#dcneifa1": "同室操戈，胜者王、败者寇。",
	"#dcneifa2": "兄弟无能，吾当继袁氏大统。",
	"#yuantanyuanxiyuanshang:die": "同室内伐，贻笑大方……",
	"#dcaishou1": "某家未闻有一合而破关之将。",
	"#dcaishou2": "凭关而守，敌强又奈何？",
	"#dcsaowei1": "今从王师猎虎，必擒吕布。",
	"#dcsaowei2": "七军围猎，虓虎插翅难逃。",
	"#qiaorui:die": "今兵败城破，唯死而已……",
	"#dckanji1": "览文库全书，筑文心文胆。",
	"#dckanji2": "世间学问，皆载韦编之上。",
	"#dcqianzheng1": "悔往昔之种种，恨彼时之切切。",
	"#dcqianzheng2": "罪臣怀咎难辞，有愧国恩。",
	"#xianglang:die": "识文重义而徇私，恨也……",
	"#dchaochong1": "朗螟蛉之子，幸隆曹氏厚恩。",
	"#dchaochong2": "幸得义父所重，必效死奉曹。",
	"#dcjinjin1": "螟蛉终非麒麟，不可气盛自矜。",
	"#dcjinjin2": "我姓非曹，可敬人，不可欺人。",
	"#qinlang:die": "二姓之人，死无其所……",
	"#dcxuewei1": "慷慨赴国难，青山侠骨香。",
	"#dcxuewei2": "舍身卫主之志，死犹未悔！",
	"#dcyuguan1": "城后即为汉土，吾等无路可退！",
	"#dcyuguan2": "舍身卫关，身虽死而志犹在。",
	"#furongfuqian:die": "此间，何有汉将军降者！",
	"#dcqiangzhi1": "吾民在后，岂惧尔等魍魉。",
	"#dcqiangzhi2": "凶兵来袭，当长戈相迎。",
	"#dcpitian1": "此间辟地数旬，必成良田千亩。",
	"#dcpitian2": "民以物力为天，物力唯田可得。",
	"#zhenghun:die": "此世为官，未辱青天之名……",
	"#dcqingren1": "此身忠义，可鉴天涯明月。",
	"#dcqingren2": "青釭并龙胆，试刃三千里。",
	"#dc_zhaotongzhaoguang:die": "皇上……丞相，统（广）愧矣……",
	"#dcqinqing1": "陛下今日不理朝政，退下吧！",
	"#dcqinqing2": "此事咱家自会传达陛下。",
	"#huisheng_dc_huanghao1": "不就是想要好处嘛？",
	"#huisheng_dc_huanghao2": "这些都拿去。",
	"#dccunwei1": "陛下专宠，诸侯畏惧。",
	"#dccunwei2": "君侧之人，众所畏惧。",
	"#dc_huanghao:die": "难道都是我一个人的错吗！",
	"#dcjuying1": "垒石为寨，纵万军亦可阻。",
	"#dcjuying2": "如虎踞汝南，攻守自有我。",
	"#liupi:die": "玄德公高义，辟宁死不悔！",
	"#dc_sp_jiaxu:die": "哎，站错队伍才是根本问题……",
	"#dcsilve1": "劫尔之富，济我之贫！",
	"#dcsilve2": "徇私而动，劫财掠货。",
	"#dcshuaijie1": "弱肉强食，实乃天地至理。",
	"#dcshuaijie2": "恃强凌弱，方为我辈本色！",
	"#leibo:die": "此人不可力敌，速退！",
	"#dczhenze1": "名震千里，泽被海东。",
	"#dczhenze2": "施威除暴，上下咸服。",
	"#dcanliao1": "地阔天高，大有可为。",
	"#dcanliao2": "水草丰沛，当展宏图。",
	"#gongsundu:die": "为何都不愿出仕！",
	"#dcyiyong1": "关氏鼠辈，庞令明之子来邪！",
	"#dcyiyong2": "凭一腔勇力，父仇定可报还！",
	"#dcsuchou1": "关家人我杀定了，谁也保不住！",
	"#dcsuchou2": "身陷仇海，谁知道我是怎么过的！",
	"#panghui:die": "大仇虽报，奈何心有余创……",
	"#dccuijin1": "军令如山，诸君焉敢不前？",
	"#dccuijin2": "前攻者赏之，后靡斩之！",
	"#dc_yuejiu:die": "此役既败，请速斩我……",
	"#dcxieshou1": "此城所能守者，在你我之协力。",
	"#dcxieshou2": "据地利而拥人和，其天时在我。",
	"#dcqingyan1": "清风盈大袖，严韵久长存。",
	"#dcqingyan2": "至清之人无徒，唯余雁阵惊寒。",
	"#chenjiao:die": "矫既死，则魏再无直臣哉……",
	"#dcchongwang1": "乡人所崇者，烈之义行也。",
	"#dcchongwang2": "诸家争讼曲直，可质于我。",
	"#dchuagui1": "烈不才，难为君之朱紫。",
	"#dchuagui2": "一身风雨，难坐高堂。",
	"#wanglie:die": "烈尚不能自断，何断人乎？",
	"#dcyingtu1": "不过略施小计，聊戏莽夫耳。",
	"#dcyingtu2": "栖虎狼之侧，安能不图存身？",
	"#dccongshi1": "阁下奉天子以令诸侯，珪自当相从。",
	"#dccongshi2": "将军率六师以伐不臣，珪何敢相抗？",
	"#chengui:die": "终日戏虎，竟为虎所噬……",
	"#dcquanjian1": "陛下宜后镇，臣请为先锋！",
	"#dcquanjian2": "吴人悍战，陛下万不可涉险！",
	"#dctujue1": "归蜀无路，孤臣泪尽江北。",
	"#dctujue2": "受吾主殊遇，安能降吴！",
	"#dc_huangquan:die": "败军之将，何言忠乎？",
	"#dcyingyu1": "妾身蒲柳，幸蒙将军不弃。",
	"#dcyingyu2": "妾之所有，愿尽予君。",
	"#dcyongbi1": "海誓山盟，此生不渝。",
	"#dcyongbi2": "万千宠爱，幸君怜之。",
	"#yinfuren:die": "奈何遇君何其晚乎？",
	"#dcshuhe1": "齐心共举，万事俱成。",
	"#dcshuhe2": "手足协力，天下可往。",
	"#dcliehou1": "论功行赏，加官进侯。",
	"#dcliehou2": "增班列侯，赏赐无量！",
	"#dc_lvkuanglvxiang:die": "不避其死，以成其忠……",
	"#suoliang1": "奉上万石粮草，吾便退兵！",
	"#suoliang2": "听闻北海富庶，特来借粮。",
	"#qinbao1": "赤箓护身，神鬼莫当。",
	"#qinbao2": "头裹黄巾，代天征伐。",
	"#guanhai:die": "这红脸汉子，为何如此眼熟……",
	"#midu1": "皓首穷经，其心不移。",
	"#midu2": "竹简册书，百读不厌。",
	"#xianwang1": "浩气长存，以正压邪。",
	"#xianwang2": "名彰千里，盗无敢侵。",
	"#huzhao:die": "纵有清名，无益于世也……",
	"#dczhubi1": "铸币平市，百货可居。",
	"#dczhubi2": "做钱直百，府库皆实。",
	"#dcliuzhuan1": "身似浮萍，随波逐流。",
	"#dcliuzhuan2": "辗转四方，宦游八州。",
	"#dc_liuba:die": "竹蕴于林，风必摧之……",
	"#suizheng1": "屡屡随征，战皆告捷。",
	"#suizheng2": "将勇兵强，大举出征！",
	"#zhangxun:die": "此役，死伤甚重……",
	"#zyqiao1": "吾六十何为不受兵邪？",
	"#zyqiao2": "芝性骄傲，吾独不为屈。",
	"#chengshang1": "嘉其抗直，甚爱待之。",
	"#chengshang2": "为国鞠躬，必受封赏。",
	"#zongyu:die": "吾年逾七十，唯少一死耳……",
	"#dcshuangren1": "尔也配称天下名将？徒有虚名！",
	"#dcshuangren2": "不决个高下，愧对我家主公。",
	"#dc_jiling:die": "这贼将武艺，竟胜我三分……",
	"#dcdeshao1": "名德远播，朝野俱瞻。",
	"#dcdeshao2": "增修德信，以诚服人。",
	"#dcmingfa1": "煌煌大势，无须诈取。",
	"#dcmingfa2": "开示公道，不为掩袭。",
	"#dc_yanghu:die": "臣死之后，杜元凯可继之……",
	"#lianzhou1": "操练水军，以应东吴。",
	"#lianzhou2": "连锁环舟，方能共济。",
	"#jinglan1": "潮生潮落，风浪不息。",
	"#jinglan2": "狂风舟起，巨浪滔天。",
	"#caimaozhangyun:die": "丞相，冤枉，冤枉啊！",
	"#xingchong1": "佳人有荣幸，好女天自怜。",
	"#xingchong2": "世间万般宠爱，独聚我于一身。",
	"#liunian1": "佳期若梦，似水流年。",
	"#liunian2": "逝者如流水，昼夜不将息。",
	"#tenggongzhu:die": "已过江北，再无江南……",
	"#dcjiezhen1": "八阵无破，唯解死而向生。",
	"#dcjiezhen2": "此阵，可由景门入、生门出。",
	"#dczecai1": "诸葛良才，可为我佳婿。",
	"#dczecai2": "梧桐亭亭，必引凤而栖。",
	"#dcyinshi1": "南阳隐世，耕读传家。",
	"#dcyinshi2": "手扶耒耜，不闻风雷。",
	"#dc_huangchengyan:die": "卧龙出山天伦逝，悔教吾婿离南阳……",
	"#xizhen1": "今我为刀俎，尔等皆为鱼肉。",
	"#xizhen2": "先发可制人，后发制于人。",
	"#dc_gaolan:die": "郭公则害我！",
	"#dunshi1": "失路青山隐，藏名白水游。",
	"#dunshi2": "隐居青松畔，遁走孤竹丘。",
	"#guanning:die": "高节始终，无憾矣……",
	"#xunli1": "病情扑朔，容某思量。",
	"#xunli2": "此疾难辨，容某细察。",
	"#zhishi1": "嚼指为誓，誓杀国贼！",
	"#zhishi2": "心怀汉恩，断指相随。",
	"#lieyi1": "君有疾在身，不治将恐深。",
	"#lieyi2": "汝身患重疾，当以虎狼之药去之。",
	"#dc_jiben:die": "今事不成，惟死而已！",
	"#bingjie1": "秉节传旌，心存丹衷。",
	"#bingjie2": "秉节刚劲，奸佞务尽。",
	"#zhengding1": "行义修正，改故用新。",
	"#zhengding2": "义约谬误，有所正订。",
	"#mamidi:die": "失节屈辱忧恚！",
	"#jianliang1": "岂曰少衣食，与君共袍泽！",
	"#jianliang2": "义士同心力，粮秣应期来！",
	"#weimeng1": "此礼献于友邦，共赴兴汉大业！",
	"#weimeng2": "吴有三江之守，何故委身侍魏？",
	"#re_dengzhi:die": "伯约啊，我帮不了你了……",
	"#yusui1": "宁为玉碎，不为瓦全！",
	"#yusui2": "生义相左，舍生取义。",
	"#boyan1": "黑白颠倒，汝言谬矣！",
	"#boyan2": "魏王高论，实为无知之言。",
	"#fengxi:die": "乡音未改双鬓苍，身陷北国有义求……",
	"#rekuangcai1": "耳所瞥闻，不忘于心。",
	"#rekuangcai2": "吾焉能从屠沽儿耶？",
	"#reshejian1": "伤人的，可不止刀剑！",
	"#reshejian2": "死公！云等道？",
	"#re_miheng:die": "恶口……终至杀身……",
	"#refuyuan1": "今君困顿，扶援相助。",
	"#refuyuan2": "恤君之患，以相扶援。",
	"#reyingshui1": "道之以德，齐之以礼。",
	"#reyingshui2": "施恩行惠，赡之以义。",
	"#rewangzu1": "名门望族，显贵荣达。",
	"#rewangzu2": "能人辈出，仕宦显达。",
	"#re_chendeng:die": "吾疾无人可治……",
	"#zhenge1": "常备不懈，严阵以待。",
	"#zhenge2": "枕戈待旦，日夜警惕。",
	"#xinghan1": "汉之兴旺，不敢松懈。",
	"#xinghan2": "兴汉除贼，吾之所愿。",
	"#wanniangongzhu:die": "兴汉的使命，还没有完成……",
	"#refenglve1": "当今敢称贤者，唯袁氏本初一人！",
	"#refenglve2": "冀州宝地，本当贤者居之。",
	"#anyong1": "殿上太守且相看，殿下几人还拥韩？",
	"#anyong2": "冀州暗潮汹涌，群仕居危思变。",
	"#re_xunchen:die": "为臣当不贰，贰臣不当为……",
	"#guowu1": "方天映黛眉，赤兔牵红妆。",
	"#guowu2": "武姬青丝利，巾帼女儿红。",
	"#zhuangrong1": "锋镝鸣手中，锐戟映秋霜。",
	"#zhuangrong2": "红妆非我愿，学武觅封侯。",
	"#lvlingqi:die": "父亲，女儿好累……",
	"#cuijian1": "所当皆披靡，破坚若无人！",
	"#cuijian2": "一枪定顽敌，一骑破坚城！",
	"#tongyuan1": "乐将军何在？随我共援上方谷！",
	"#tongyuan2": "袍泽有难，岂有坐视之理？",
	"#zhanghu:die": "虎父威犹在，犬子叹奈何……",
	"#zhente1": "抗声昭节，义形于色。",
	"#zhente2": "少履贞特之行，三从四德。",
	"#zhiwei1": "体信贯于神明，送终以礼。",
	"#zhiwei2": "昭德以行，生不能侍奉二主。",
	"#luyusheng:die": "父亲，郁生甚是想念……",
	"#wanggui1": "存志太虚，安心玄妙。",
	"#wanggui2": "礼法有度，良德才略。",
	"#xibing1": "千里运粮，非用兵之利。",
	"#xibing2": "宜弘一代之治，绍三王之迹。",
	"#huaxin:die": "大举发兵，劳民伤国……",
	"#manyi_mengyou1": "我辈蛮夷久居荒野，岂为兽虫所伤。",
	"#manyi_mengyou2": "我乃蛮王孟获之弟，谁敢伤我！",
	"#dcmanzhi1": "吾有蛮勇可攻，亦有蛮智可御。",
	"#dcmanzhi2": "远交近攻之法，怎可不为我所用。",
	"#mengyou:die": "大哥，诸葛亮又打来了……",
	"#zhuning1": "此剑半丈，当斩奸佞人头！",
	"#zhuning2": "此身八尺，甘为柱国之石。",
	"#fengxiang1": "北风摧蜀地，王爵换乡侯。",
	"#fengxiang2": "汉皇可负我，我不负父兄。",
	"#liuyong:die": "他日若是凛风起，你自长哭我自笑……",
	"#xiecui1": "东隅既得，亦收桑榆。",
	"#xiecui2": "江东多娇，锦花相簇。",
	"#youxu1": "积富之家，当恤众急。",
	"#youxu2": "周忧济难，请君恤之。",
	"#dc_sunru:die": "伯言，抗儿便托付于你了……",
	"#fuping1": "有草生清池，无根碧波上。",
	"#fuping2": "愿为浮萍草，托身寄清池。",
	"#weilie1": "好学尚贞烈，义形必沾巾。",
	"#weilie2": "贞烈过男子，何处弱须眉？",
	"#xiahoulingnv:die": "心存死志，绝不肯从！",
	"#yuanyu1": "此生最恨者，吴垣孙氏人。",
	"#yuanyu2": "愿为宫外柳，不做建章卿。",
	"#xiyan1": "夕阳绝美，只叹黄昏。",
	"#xiyan2": "朱颜将逝，知我何求。",
	"#zhangyao:die": "花开人赏，花败谁怜……",
	"#chenjian1": "国有其弊，上书当陈。",
	"#chenjian2": "食君之禄，怎可默言。",
	"#xixiu1": "君子如玉，德形皓白。",
	"#xixiu2": "木秀于身，芬芳自如。",
	"#tengyin:die": "臣好洁，不堪与之合污！",
	"#tongli1": "胞妹殊礼，妾幸同之。",
	"#tongli2": "夫妻之礼，举案齐眉。",
	"#shezang1": "世间千百物，物物皆相思。",
	"#shezang2": "伊人将逝，何物为葬？",
	"#zhangxuan:die": "陛下，臣妾绝无异心！",
	"#huguan1": "共护边关，蜀汉可安。",
	"#huguan2": "护君周全，妾身无悔。",
	"#yaopei1": "环佩春风，步摇桃粉。",
	"#yaopei2": "赠君摇佩，佑君安好。",
	"#wangtao:die": "落花有意，何人来摘……",
	"#huguan_wangyue1": "此战虽险，悦亦可助之。",
	"#huguan_wangyue2": "葭萌关外，同君携手。",
	"#mingluan1": "鸾笺寄情，笙歌动心。",
	"#mingluan2": "鸾鸣轻歌，声声悦耳。",
	"#wangyue:die": "这次比试不算，再来……",
	"#jinhui1": "大则盈尺，小则方寸。",
	"#jinhui2": "十指纤纤，万分机巧。",
	"#qingman1": "经纬分明，片片罗縠。",
	"#qingman2": "罗帐轻幔，可消酷暑烦躁。",
	"#zhaoyan:die": "彩绘锦绣，二者不可缺其一……",
	"#yachai1": "才秀知名，无所顾惮。",
	"#yachai2": "讲论经义，为万世法。",
	"#qingtan1": "事而为事，由无以成。",
	"#qingtan2": "转蓬去其根，流飘从风移。",
	"#heyan:die": "恃无以生……",
	"#dcmiyun1": "不要大张旗鼓，要神不知鬼不觉。",
	"#dcmiyun2": "小阿斗，跟本将军走一趟吧。",
	"#dcdanying1": "早就想会会你常山赵子龙了。",
	"#dcdanying2": "赵子龙是吧？兜鍪给你打掉。",
	"#zhoushan:die": "夫人救我！夫人救我！",
	"#dcxunji1": "待拿下你，再找丞相谢罪。",
	"#dcxunji2": "姓关的，我现在就来抓你！",
	"#dcjiaofeng1": "此击透骨，亦解骨肉之痛。",
	"#dcjiaofeng2": "关羽？哼，不过如此！",
	"#dc_caiyang:die": "何处来的鼓声？",
	"#liedan1": "声若洪钟，震胆发聩！",
	"#liedan2": "阴雷滚滚，肝胆俱颤！",
	"#zhuangdan1": "假丞相虎威，壮豪将龙胆。",
	"#zhuangdan2": "我家丞相在此，哪个有胆敢动我？",
	"#xiahoujie:die": "你吼那么大声干嘛……",
	"#cxliushi1": "就你叫夏侯惇？",
	"#cxliushi2": "兀那贼将，且吃我一箭！",
	"#zhanwan1": "郝萌，尔敢造反不成？",
	"#zhanwan2": "健儿护主，奸逆断腕！",
	"#caoxing:die": "夏侯将军，有话好说……",
	"#recangchu1": "广积粮草，有备无患。",
	"#recangchu2": "吾奉命于此、建仓储粮。",
	"#reliangying1": "酒气上涌，精神倍长。",
	"#reliangying2": "仲简在此，谁敢来犯？",
	"#reshishou1": "腹痛骤发，痛不可当。",
	"#reshishou2": "火光冲天，悔不当初。",
	"#re_chunyuqiong:die": "这酒，饮不得啊……",
	"#xuxie1": "说出吾名，吓汝一跳！",
	"#xuxie2": "我乃是零陵上将军！",
	"#xingdaorong:die": "孔明之计，我难猜透啊……",
	"#xinkuangfu1": "大斧到处，片甲不留！",
	"#xinkuangfu2": "你可接得住我一斧？",
	"#re_panfeng:die": "来者……可是魔将？",
	"#shengxi1": "国之生计，在民生息。",
	"#shengxi2": "安民止战，兴汉室！",
	"#shoucheng1": "待吾等助将军一臂之力！",
	"#shoucheng2": "国库盈余，可助军威！",
	"#jiangfei:die": "墨守成规，终为其害啊……",
	"#dctunchu1": "秋收冬藏，此四时之理，亘古不变。",
	"#dctunchu2": "屯粮之家，必无饥馑之虞。",
	"#dcshuliang1": "北伐鏖战正酣，此正需粮之时。",
	"#dcshuliang2": "粮草先于兵马而动，此军心之本。",
	"#dc_lifeng:die": "黍穗重丰，不见丞相还……",
	"#dcfudou1": "既作困禽，何妨铤险以覆车？",
	"#dcfudou2": "据将覆之巢，必作犹斗之困兽。",
	"#dctaji1": "仙途本寂寥，结发叹长生。",
	"#dctaji2": "仙者不言，手执春风。",
	"#dcqinghuang1": "上士无争，焉生妄心。",
	"#dcqinghuang2": "心有草木，何畏荒芜？",
	"#huomo_huzhao1": "行文挥毫，得心应手。",
	"#huomo_huzhao2": "泼墨走笔，挥洒自如。",
	"#llqshenwei1": "我乃温侯吕奉先之女！",
	"#llqshenwei2": "继父神威，无坚不摧！",
	"#wushuang_lvlingqi1": "猛将策良骥，长戟破敌营。",
	"#wushuang_lvlingqi2": "杀气腾剑戟，严风卷戎装。",
	"#dcjigu1": "我接着奏乐，诸公接着舞。",
	"#dcjigu2": "这不是鼓，而是曹公的脸面！",
	"#dcsirui1": "暑气可借酒气消，此间艳阳最佐酒。",
	"#dcsirui2": "诸君饮泥而醉，举世唯我独醒！",
	"#yue_miheng:die": "映日荷花今犹在，不见当年采荷人……",
	
	// jsrg
	"#jsrgxiezheng1": "烈祖明皇帝乘舆仍出，陛下何妨效之。",
	"#jsrgxiezheng2": "陛下宜誓临戎，使将士得凭天威。",
	"#jsrgxiezheng_jin_jsrg_simazhao1": "既得众将之力，何愁贼不得平？",
	"#jsrgxiezheng_jin_jsrg_simazhao2": "逆贼起兵作乱，诸位无心报国乎？",
	"#jsrgqiantun1": "辅国臣之本分，何敢图于禄勋。",
	"#jsrgqiantun2": "蜀贼吴寇未灭，臣未可受此殊荣。",
	"#jsrgqiantun3": "陛下一国之君，不可使以小性。",
	"#jsrgqiantun4": "讲经宴筵，实非治国之道也。",
	"#jsrgweisi1": "上者慑敌以威，灭敌以势。",
	"#jsrgweisi2": "哼，求存者多，未见求死者也。",
	"#jsrgweisi3": "未想逆贼区区，竟然好物甚巨。",
	"#jsrgzhaoxiong1": "若得灭蜀之功，何不可受禅为帝。",
	"#jsrgzhaoxiong2": "已极人臣之贵，当一尝人主之威。",
	"#jsrgdangyi1": "哼！斩首示众，以儆效尤。",
	"#jsrgdangyi2": "汝等仍存异心，可见心存魏阙。",
	"#jsrg_simazhao:die": "曹髦小儿竟有如此肝胆……我实不甘……",
	"#jin_jsrg_simazhao:die": "愿我晋祚，万世不易，国运永昌……",
	"#jsrgshanzheng1": "陛下于此道不明，本后且代为理政。",
	"#jsrgshanzheng2": "诏命皆从我出，诸君当知谁为这一国之主。",
	"#jsrgshanzheng3": "哼！再有犯者，皆有如此人。",
	"#jsrgshanzheng4": "尔等罪证，可俱在本宫手中。",
	"#jsrgxiongbao1": "不论汝用何法，本后只要死的。",
	"#jsrgxiongbao2": "且慢，若事有不获大可行雷霆手段。",
	"#jsrgliedu1": "好个贱婢，看来留不得你。",
	"#jsrgliedu2": "待本后开膛破肚，一验是子是女。",
	"#jsrg_jiananfeng:die": "只恨未早下杀手，致有今日险境……",
	"#jsrgciyin1": "今蒙恩诏，寸心难表，然念祖母，诚难上道。",
	"#jsrgciyin2": "是臣尽节于陛下之日长，报养刘之日短也。",
	"#jsrgciyin3": "臣亡国贱俘，蒙陛下累征不弃，敢不陨首以报。",
	"#jsrgchendu1": "愿陛下矜悯愚诚，听臣微志，庶刘侥幸，保卒余年。",
	"#jsrgchendu2": "臣无祖母，无以至今日；祖母无臣，无以终余年。",
	"#jsrg_limi:die": "人亦有言，有因有缘。官无中人，不如归田……",
	"#jsrgfennan1": "幸得陛下厚任，吾当亡命战场，以报所受。",
	"#jsrgfennan2": "敌虽万众之数，以吾之谋，易为平之。",
	"#jsrgxunji1": "天统之境，岂容丑虏犯边。",
	"#jsrgxunji2": "凉州有危，臣者当济。",
	"#jsrg_malong:die": "惟愿长守边境，不使百姓为虏所扰……",
	"#jsrgchengliu1": "顺流鼓棹，径造三山。",
	"#jsrgchengliu2": "今威名已著，当直取敌都。",
	"#jsrgjianlou1": "作船七载，以备伐吴。",
	"#jsrgjianlou2": "奉诏修舟舰，待机伐孙吴。",
	"#jsrg_wangjun:die": "吾功大无匹，但为浑父子所抑而已……",
	"#jsrgzuozhan1": "首义难成大事，且待吾之良机！",
	"#jsrgzuozhan2": "天下风云变幻，何须急于一时！",
	"#jsrgzuozhan3": "将军忠心可鉴，日月昭彰！",
	"#jsrgzuozhan4": "昭伯旧党皆为其诛，吾又岂能安坐！",
	"#jsrgcuibing1": "内据淮南，外联孙吴，必可功成！",
	"#jsrgcuibing2": "淮南可与吴寇，亦不予汝司马一族！",
	"#jsrgcuibing3": "残阳孤城，当鉴吾之丹心！",
	"#jsrgcuibing4": "困兽之争，只求玉碎冰摧！",
	"#jsrgcuibing5": "再守数日，必得东吴援军！",
	"#jsrglangan1": "粮草不至，淮南岌岌可危……",
	"#jsrglangan2": "我大义之军，何以至此……",
	"#jsrg_zhugedan:die": "大义载天，守忠覆地！",
	"#jsrgfuzhen1": "若不拼死一战，何以诛此国贼！",
	"#jsrgfuzhen2": "虽为败势，鸯亦有险中取胜之法！",
	"#jsrgfuzhen3": "鼓噪而复进之，必取老贼之首！",
	"#jsrgfuzhen4": "一鼓乱其心，后必破之！",
	"#jsrg_wenyang:die": "恨不得手刃司马老贼，致其有残生之机……",
	"#jsrgchaozheng1": "何故争论无休？朝堂自有公论。",
	"#jsrgchaozheng2": "今日之言，无是无非，皆为我大汉社稷。",
	"#jsrgchaozheng3": "诸卿一心为公，大汉中兴可期！",
	"#jsrgchaozheng4": "朝野皆论朋党之私，欲置朕于何处！",
	"#jsrgshenchong1": "天子近前，岂曰无人？赏！",
	"#jsrgshenchong2": "诸臣皆为己利，唯汝独讨朕心。",
	"#jsrgjulian1": "朕聚天下之财，岂不为天下之事乎？",
	"#jsrgjulian2": "若为汉家中兴，朕又何惜此金银之物！",
	"#jsrgjulian3": "天下既无贤才，不知民有闲财否？哈哈哈！",
	"#jsrgjulian4": "府仓国库，皆归朕有！",
	"#jsrg_liuhong:die": "中兴无望，唯将大志托于此剑……",
	"#jsrgzhaobing1": "此事，便依本初之言。",
	"#jsrgzhaobing2": "诸侯兵马，皆听我调遣。",
	"#jsrgzhuhuan1": "杀了你们，天下都是我说了算！",
	"#jsrgzhuhuan2": "整顿天下，为国除害！",
	"#jsrgyanhuo1": "附肉之蛆，也想弑主？",
	"#jsrgyanhuo2": "陛下在哪儿？陛下在哪儿！",
	"#jsrg_hejin:die": "太后诏我入宫，汝等这是何意？！",
	"#jsrgshelun1": "董贼既死，凉州旧部当有处置。",
	"#jsrgshelun2": "此事甚难定夺，还请诸公共议。",
	"#jsrgshelun3": "此辈何罪？但为其主，不足杀之。",
	"#jsrgshelun4": "今不屠此逆军，何慰关东义士之心？",
	"#jsrgfayi1": "吾除董贼，朝野自是吾一言之堂。",
	"#jsrgfayi2": "念私惠而忘公义，其与董贼同罪！",
	"#jsrg_wangyun:die": "罢兵不成，新乱又起……老夫当以死谢天下……",
	"#jsrgzhenglve1": "臣奉陛下之命，以伐乱臣。",
	"#jsrgzhenglve2": "陛下且安坐宫中，待臣之捷报。",
	"#jsrgzhenglve3": "齐桓之功，唯霸可彰王道。",
	"#jsrgzhenglve4": "晋公亦霸，然亦躬奉周王。",
	"#jsrghuilie1": "奉辞伐罪，旌麾南指，欲请将军会猎于吴。",
	"#jsrghuilie2": "宝雕弓，金鈚箭，臣乞为陛下猎天下之不臣。",
	"#jsrgpingrong1": "兵贵神速，勿失此讨贼良机。",
	"#jsrgpingrong2": "以战平戎，以武止戈。",
	"#jsrgpingrong3": "治世匡以仁德，乱世当用重典。",
	"#jsrg_caocao:die": "本欲征西讨贼，为国效命，奈何天命……唉……",
	"#jsrgjishan1": "刀兵罪在我，而百姓何辜耶？",
	"#jsrgjishan2": "备宁愿一死，只求百姓得安。",
	"#jsrgjishan3": "民若得安，则天下安矣！",
	"#jsrgjishan4": "勿以恶小而为之，勿以善小而不为。",
	"#jsrgzhenqiao1": "剑出鞘鸣，引得龙吟海内！",
	"#jsrgzhenqiao2": "鲲鹏之志，志在天下苍生！",
	"#jsrg_liubei:die": "楼桑羽葆，黄粱一梦……",
	"#jsrgpingtao1": "董贼势败在即，诸公何故不前。",
	"#jsrgpingtao2": "歃血为盟，誓诛此国贼。",
	"#jsrgjuelie1": "传令所部兵马，定绝董贼后路。",
	"#jsrgjuelie2": "今当夷汝三族，县示四海。",
	"#jsrgjuelie3": "洛阳已在眼下，莫让董贼轻逃。",
	"#jsrgjuelie4": "火势刻不容缓，全军速速进发。",
	"#jsrg_sunjian:die": "若违此誓，某必为万箭穿心！",
	
	// key
	"#yuri_xingdong1": "では、オペレーション・スターーート！！",
	"#yuri_xingdong2": "では、オペレーション・スタート！",
	"#yuri_xingdong3": "では、オペレーションスタート！",
	"#yuri_xingdong_gain1": "…さすがね、あたしの勘",
	"#yuri_xingdong_gain2": "あたしの予想ではね",
	"#yuri_wangxi1": "賢明ね。これでようやくあなたにも戦線で戦う目的が生まれたってわけね",
	"#yuri_wangxi2": "落ち着いて…ここは地獄なんかじゃないわ",
	"#key_yuri:die": "ひどい…リーダーね",
	"#kanade_mapo1": "よくこの麻婆豆腐を前にぼーっとできるものね",
	"#kanade_mapo2": "…あたし、麻婆豆腐が好きなの？",
	"#kanade_benzhan1": "ガードスキル・ハンドソニック・バージョン２",
	"#kanade_benzhan2": "ガードスキル・ハンドソニック",
	"#kanade_benzhan3": "ハンドソニック",
	"#sp_key_kanade:die": "死ぬことなんで…あるの？",
	"#yui_jiang1": "みんな、こんなものかぁーー！？",
	"#yui_jiang2": "盛り上がって行くぜぇー！！",
	"#yui_lieyin1": "いくぞー！ワン、ツー、スリー、フォー！！",
	"#yui_lieyin2": "さあ、皆さん、演奏スタートですっ",
	"#yui_takaramono1": "よかった…",
	"#yui_takaramono2": "ほんとに…あたしが打ったの…？",
	"#key_yui:die": "あたしの…幸せ、ぜんぶ奪っていったんだ…",
	"#shiina_qingshen1": "あさはかなり…",
	"#shiina_qingshen1": "哼——",
	"#shiina_retieji1": "もうその必要はない",
	"#key_shiina:die": "これは…悪夢か？",
	"#shiorimiyuki_banyin1": "おふたり、おめでとうございまーす！！",
	"#shiorimiyuki_banyin2": "お二人ともすごく素敵です！！",
	"#shiorimiyuki_tingxian1": "ですよねー！では、みゆきちで／え？　あたしが何！？",
	"#shiorimiyuki_tingxian2": "うわっ、こいつひさ子先輩にキレたっ！／逃げたほうがいいよ！",
	"#key_shiorimiyuki:die": "呜啊啊啊啊啊啊——",
	"#hisako_yinbao1": "関根、てめぇーーー！！",
	"#hisako_yinbao2": "お、ま、え、な…",
	"#key_hisako:die": "あたしの人生は一体なんだったと思う？",
	"#noda_xunxin1": "勝負は！？どっちの勝ちなんだ！？",
	"#noda_xunxin2": "はっ！なら…試してやろう",
	"#noda_fengcheng1": "ゆりっぺ…俺はお前のそばでお前を守りたい",
	"#noda_fengcheng2": "わかった…お前の言葉を信じる",
	"#key_noda:die": "噗啊啊啊啊啊啊啊——",
	"#abyusa_jueqing1": "私は感情など持ち合わせていませんので",
	"#abyusa_jueqing2": "人をお化けのように言わないでください",
	"#abyusa_dunying1": "だからそれはあなたが気づいていないだけで、いきなり現れたりなどしていません",
	"#abyusa_dunying2": "ちゃんと歩いてあなたの前に現れています。それに気づくか気づかないかはあなた次第かと",
	"#key_abyusa:die": "嗯…",
	"#hinata_qiulve1": "１番、お前な",
	"#hinata_qiulve2": "よっしゃー！俺も続くぜ！",
	"#hinata_ehou1": "てめぇ、何様だよぉぉぉーーーっ！！",
	"#hinata_ehou2": "そっっっいうのが一番むかつくんだよっ！！！",
	"#key_hinata:die": "呜哇啊啊啊啊啊啊啊啊——————————",
	"#shiki_omusubi1": "始めるんだ…神山識",
	"#shiki_omusubi2": "大切な人を守るために！",
	"#key_shiki:die": "ありがとう…羽依里くん…",
	"#saya_shouji1": "じゃあ…Game Start!",
	"#saya_shouji2": "いくつかポイントがあるの",
	"#saya_powei1": "決して任務には失敗しないんだ！",
	"#saya_powei2": "ただ、もう一度だけトライさせてもらえるかしら",
	"#key_saya:die": "砰——",
	
	// mdtx
	"#xianmou1": "绸缪于未雨，手握胜机，雨落何妨高歌？",
	"#xianmou2": "此帆济沧海，彼岸日边，任他风雨飘摇。",
	"#xianmou_yj_sb_guojia_shadow1": "嘉不受此劫，安能以凡人之躯窥得天机？",
	"#xianmou_yj_sb_guojia_shadow2": "九州为觞，风雨为酿，谁与我共饮此杯？",
	"#lunshi1": "曹公济天下大难，必定霸王之业。",
	"#lunshi2": "智者审于良主，袁公未知用人之机。",
	"#lunshi_yj_sb_guojia_shadow1": "公有此十胜，败绍非难事尔。",
	"#lunshi_yj_sb_guojia_shadow2": "嘉窃料之，绍有十败，公有十胜。",
	"#yj_sb_guojia:die": "生如夏花，死亦何憾？",
	"#yj_sb_guojia_shadow:die": "江湖路远，诸君，某先行一步……",
	
	// mobile
	"#mbbojian1": "闻古者贤女，未有不学前事成败而以为己诫。",
	"#mbbojian2": "视字辄识，方知何为礼义。",
	"#mbjiwei1": "乱世之宝，非金银田产，而在仁心。",
	"#mbjiwei2": "匹夫怀璧为罪，更况吾豪门大族。",
	"#mbjiwei3": "左右乡邻，当共力时艰。",
	"#mbjiwei4": "民不逢时，吾又何忍视其饥苦。",
	"#mb_sp_zhenji:die": "悔入帝王家，万愿皆成空……",
	"#mbquchong1": "器有九距之备，亦有九攻之变。",
	"#mbquchong2": "攻城之机变，于此车皆可解之！",
	"#mbquchong3": "大攻起兮，可辟山海之艰！",
	"#mbquchong4": "破坚阵如朽木，履高城如平地。",
	"#mbxunjie1": "藏于心者竭爱，动于身者竭恭。",
	"#mbxunjie2": "修身如藏器，大巧若无工。",
	"#mb_zhangfen:die": "而立之年，未立功名，实憾也……",
	"#qiaomeng_xin_gongsunzan1": "夺汝兵刃战马，尔等必败无疑。",
	"#qiaomeng_xin_gongsunzan2": "摧敌似折枯，荡寇如反掌。",
	"#mbbifeng1": "众士暂避其锋，万不可冲撞圣驾。",
	"#mbbifeng2": "陛下今日所为，实令臣民失望。",
	"#mbbifeng3": "事已至此，当速禀南阙之急。",
	"#mbsuwang1": "居上处事，当极绥怀之仁。",
	"#mbsuwang2": "国治吏和，百姓自存怀化之心。",
	"#mb_simazhou:die": "臣所求唯葬伏太妃陵次，分国封四子而已……",
	"#mbbeiming1": "孛星起于吴楚，吾等应举刀兵！",
	"#mbbeiming2": "尽点淮南兵马，以讨司马逆臣！",
	"#mbchoumang1": "司马氏之罪，尽洛水亦难清！",
	"#mbchoumang2": "汝司马氏世受魏恩，今安敢如此！",
	"#mb_wenqin:die": "伺君兵败之日，必报此仇于九泉！",
	"#mbpanxiang1": "殿下当以国事为重，奈何效匹夫之孝乎？",
	"#mbpanxiang2": "诸君当早拜嗣君，以镇海内，而但哭邪？",
	"#mbpanxiang3": "身负托孤之重，但坐谈清论，此亦可乎？",
	"#mbpanxiang4": "老臣受命督军，自竭拒吴蜀于疆外。",
	"#mbchenjie1": "身为魏臣，终不背魏。",
	"#mbchenjie2": "杀陛下者，臣之罪也。",
	"#mb_simafu:die": "生此篡逆之事，罪臣难辞其咎……",
	"#mbzujin1": "蜀军远来必疲，今当先发以制。",
	"#mbzujin2": "错估军情，今唯退守敌道矣。",
	"#mbzujin3": "静守待援，不可中诱敌之计。",
	"#mbjiejian1": "昔鲁昭公败走失国，陛下因而更宜深虑。",
	"#mbjiejian2": "今权在其门，为日已久，陛下何以违抗。",
	"#mbjiejian3": "陛下何急一时，今当忍而待机啊。",
	"#mb_wangjing:die": "有母此言，今死之无悔……",
	"#mbchengxiong1": "天子殿前，岂容不洁之臣。",
	"#mbchengxiong2": "陛下有令，还不将其斩之。",
	"#mbwangzhuang1": "此事若入君耳，后果汝当自知。",
	"#mbwangzhuang2": "孙綝既诛，便是我一言之堂。",
	"#zhangbu:die": "悔不遵先帝遗命啊……",
	"#mbcuizhen1": "欲活命者，还不弃兵卸甲！",
	"#mbcuizhen2": "全军大进，誓讨司马乱贼！",
	"#mbkuili1": "此犹有转胜之机，吾等切不可自乱。",
	"#mbkuili2": "不患败战于人，但恐军心已溃啊。",
	"#mb_sp_guanqiujian:die": "汝不讨篡权逆臣，何杀吾讨贼义军……",
	"#mbqianlong1": "朕为天子，岂忍威权日去！",
	"#mbqianlong2": "朕行之决矣，正使死又何惧！",
	"#mbqianlong3": "权臣震主，竟视天子于无物！",
	"#mbqianlong4": "假以时日，必讨司马一族！",
	"#mbqianlong5": "若安司马于外，或则皇权可收。",
	"#mbqianlong6": "暗恤忠君之士，以待破局之机。",
	"#mbweitong1": "手无实权难卫统，朦胧成睡，睡去还惊。",
	"#mb_caomao:die": "纵不成身死，朕亦为太祖子孙，大魏君王……",
	"#mbkuangli1": "我已受命弑君，汝等还不散去！",
	"#mbkuangli2": "谁再聚众作乱，我就将其杀之！",
	"#mbxiongsi1": "既想杀人灭口，那就同归于尽！",
	"#mbxiongsi2": "贾充！你不仁就别怪我不义！",
	"#chengji:die": "汝等要卸磨杀驴吗？呃啊……",
	"#mbzuoyou1": "陛下亲讨乱贼，臣等安不随护！",
	"#mbzuoyou2": "纵有亡身之险，亦忠陛下一人。",
	"#mbshishou1": "此乃天子御驾，尔等谁敢近前！",
	"#mbshishou2": "吾等侍卫在侧，必保陛下无虞！",
	"#lizhaojiaobo:die": "陛下！尔等乱臣，安敢弑君，呃啊……",
	"#mbxuetu1": "天子依仗在此，逆贼安扰圣驾。",
	"#mbxuetu2": "末将救驾来迟，还望陛下恕罪。",
	"#mbxuetu3": "徐、扬粮草甚多，众将随我前往。",
	"#mbxuetu4": "哈哈哈哈，所过之处，粒粟不留。",
	"#mbweiming1": "诸位东归洛阳，奉愿随驾以护。",
	"#mbweiming2": "不遵皇命，视同倡乱之贼。",
	"#mbweiming3": "布局良久，于今功亏一篑啊！",
	"#yangfeng:die": "刘备！本共图吕布，何设鸿门相欺！",
	"#shoufa1": "虎豹豺狼，皆听我令！",
	"#shoufa2": "毒蛇恶蝎，奉旨而行！",
	"#zhoulin1": "本大王承天大法，岂与诸葛亮小计等同！",
	"#zhoulin2": "料一山野书生，安识我南中御兽之术！",
	"#yuxiang": "呃啊啊，好大的火光啊！",
	"#muludawang:die": "啊啊，诸葛亮神人降世，吾等难挡天威……",
	"#guimou1": "不过卒合之师，岂是将军之敌乎？",
	"#guimou2": "连鸡势不俱栖，依珪计便可一一解离。",
	"#zhouxian1": "今未有苛暴之乱，汝敢言失政之语。",
	"#zhouxian2": "曹将军神武应期，如何以以身试祸。",
	"#mb_chengui:die": "布非忠良之士，将军宜早图之……",
	"#mbyilie1": "禽兽尚且知义，而况于人乎？",
	"#mbyilie2": "班虽无名，亦有忠义在骨！",
	"#mbyilie3": "身不慕生，宁比泰山之重！",
	"#mb_huban:die": "生虽微而志不可改，位虽卑而节不可夺……",
	"#naxue1": "诸位正值年少，勿负此读书良时。",
	"#naxue2": "老夫积书万卷，可供诸生阅览。",
	"#yijie1": "《传》称师克在和不在众，此言天地和则万物生。",
	"#yijie2": "君臣和则国家平，九族和则家族兴。",
	"#mb_xianglang:die": "子曰：有教无类。惜哉，未入学者多矣……",
	"#laishou1": "黄耇鲐背，谓之永年。",
	"#laishou2": "养怡和之福，得乔松之寿。",
	"#laishou3": "福寿将终，竟未得期颐！",
	"#luanqun1": "年过杖朝，自是从心所欲，何来逾矩之理？",
	"#luanqun2": "位居执慎，博涉多闻，更应秉性而论！",
	"#laimin:die": "狂嚣之言，一言十过啊……",
	"#mbhuiyao1": "幸有仓舒为伴，吾不至居高寡寒。",
	"#mbhuiyao2": "通悟而无笃学之念，则必盈天下之叹也。",
	"#mbquesong1": "承白雀之瑞，显周公之德。",
	"#mbquesong2": "挽汉室于危亡，继光武之中兴。",
	"#yj_zhoubuyi:die": "慧童亡，天下伤……",
	"#yichong1": "处椒房之尊，得陛下隆宠！",
	"#yichong2": "三千宠爱？当聚于我一身！",
	"#wufei1": "巫蛊实乃凶邪之术，陛下不可不察！",
	"#wufei2": "妾不该多言，只怕陛下为其所害。",
	"#xin_guozhao:die": "不觉泪下……沾衣裳……",
	"#xinwurong1": "平乱羌！抚蛮夷！开旧道！复驿亭！",
	"#xinwurong2": "识断明果，以肃越嵩千里蛮疆。",
	"#xinwurong3": "蛮不从化，化不及蛮，此嶷之过矣。",
	"#xin_zhangyi:die": "北伐未捷，臣必杀身以报陛下！",
	"#tianxiang_re_xiaoqiao1": "盈盈一笑，娇花照水~",
	"#tianxiang_re_xiaoqiao2": "月容花貌难自弃。",
	"#re_xiaoqiao:die": "周郎……等我……",
	"#rezhijian1": "为臣之道，在于直言无讳。",
	"#rezhijian2": "谏言或逆耳，于国无一害。",
	"#guzheng_re_zhangzhang1": "为君者，不可肆兴土木，奢费物力。",
	"#guzheng_re_zhangzhang2": "安民固国，方可思动。",
	"#re_zhangzhang:die": "只恨不能为东吴百姓再谋一日福祉……",
	"#mbshihe1": "此举关乎福祸，还请峭王明察！",
	"#mbshihe2": "汉乃天朝上国，岂是辽东下郡可比？",
	"#mbzhenfu1": "储资粮，牧良畜，镇外贼，抚黎庶。",
	"#mbzhenfu2": "通民户十万余众，镇大小夷虏晏息。",
	"#qianzhao:die": "治边数载，虽不敢称功，亦可谓无过……",
	"#shuangxiong_re_yanwen1": "哥哥，且看我与赵云一战！——先与他战个五十回合！",
	"#shuangxiong_re_yanwen2": "此战如有你我一人在此，何惧华雄？——定叫他有去无回！",
	"#re_yanwen:die": "不是叫你看好我身后吗……",
	"#reluoying1": "转蓬离本根，飘摇随长风。",
	"#reluoying2": "高树多悲风，海水扬其波。",
	"#rejiushi1": "乐饮过三爵，缓带倾庶羞。",
	"#rejiushi2": "归来宴平乐，美酒斗十千。",
	"#chengzhang1": "弦急悲声发，聆我慷慨言。",
	"#chengzhang2": "盛时不再来，百年忽我遒。",
	"#re_caozhi:die": "先民谁不死，知命复何忧？",
	"#mbguli1": "今若弑此昏聩主，纵蒙恶名又如何？",
	"#mbguli2": "韩玄少谋多忌，吾今当诛之！",
	"#mbaosi1": "凶慢骜肆，天生狂骨！",
	"#mbaosi2": "暴戾恣睢，傲视诸雄！",
	"#yj_weiyan:die": "使君为何弃我而去……呃啊！",
	"#redingpin1": "察举旧制已隳，简拔当立中正。",
	"#redingpin2": "置州郡中正，以九品进退人才。",
	"#refaen1": "法不可容之事，情或能原宥。",
	"#refaen2": "严刑峻法，万望慎行。",
	"#re_chenqun:die": "立身纯且粹，一死复何忧……",
	"#xinqingxi1": "此残兵败将，胜之若儿戏耳！",
	"#xinqingxi2": "有休在此，主公何虑？哈哈哈哈！",
	"#xin_caoxiu:die": "此战大败，休甚是羞惭啊……",
	"#fenli_xin_zhuhuan1": "为主制客，乃百战百胜之势。",
	"#fenli_xin_zhuhuan2": "诸位且与我勠力一战，自可得胜。",
	"#xinpingkou1": "等候多时，为的便是今日之胜。",
	"#xinpingkou2": "一鼓作气，击败疲敝之敌！",
	"#xin_zhuhuan:die": "为将不行前而为人下，非可生受之辱……",
	"#spdaming1": "幸蒙士元斟酌，诣公于葭萌，达命于蜀川。",
	"#spdaming2": "论治图王，助吾主成就大业。",
	"#spdaming3": "心大志广，愧公知遇之恩。",
	"#spxiaoni1": "织席贩履之辈，果无用人之能乎？",
	"#spxiaoni2": "古今天下，岂有重屠沽之流而轻贤达者乎？",
	"#sp_pengyang:die": "招祸自咎，无不自己……",
	"#zhujian1": "修橹筑楼舫，伺时补金瓯。",
	"#zhujian2": "连舫披金甲，王气自可收。",
	"#duansuo1": "吾心如炬，无碍寒江铁索。",
	"#duansuo2": "熔金断索，克敌建功！",
	"#wangjun:die": "问鼎金瓯碎，临江铁索寒……",
	"#sbanguo1": "感文台知遇，自当鞠躬尽瘁，扶其身后之业。",
	"#sbanguo2": "安国定邦，克成东南一统！",
	"#sbanguo3": "孙氏为危难之际，吾当尽力辅之！",
	"#xin_zhuzhi:die": "臣辅孙氏三代之业，今年近古稀，死而无憾……",
	"#sbbenxi1": "战事唯论成败，何惜此等无用之物？",
	"#sbbenxi2": "汝等惊弓之鸟，亦难逃吾奔战穷击！",
	"#sbbenxi3": "袍染雍凉落日，马过岐山残雪！",
	"#xin_wuyi:die": "吾等虽不惧蜀道之险，却亦难过这渭水长安……",
	"#jiebing1": "敌寇势大，情况危急，只能多谢阁下。",
	"#jiebing2": "将军借兵之恩，阜退敌后自当报还。",
	"#hannan1": "贼寇虽勇，阜亦戮力以捍！",
	"#hannan2": "纵使信布之勇，亦非无策可当！",
	"#yangfu:die": "汝背父叛君，吾誓，杀……",
	"#yijin1": "吾家资巨万，无惜此两贯三钱！",
	"#yijin2": "小儿持金过闹市，哼！杀人何需我多劳！",
	"#yijin3": "普天之下，竟有吾难市之职？",
	"#guanzong1": "汝为叔父，怎可与小辈计较！",
	"#guanzong2": "阿瞒生龙活虎，汝切勿胡言！",
	"#sp_caosong:die": "长恨人心不如水，等闲平地起波澜……",
	"#rejuece1": "束手就擒吧！",
	"#rejuece2": "斩草除根，以绝后患！",
	"#remieji1": "就是要让你无路可走！",
	"#remieji2": "你也逃不了！",
	"#xinfencheng_re_liru1": "千里皇城，尽作焦土！",
	"#xinfencheng_re_liru2": "荣耀、权力、欲望、统统让这大火焚灭吧！",
	"#re_liru:die": "吾等皆死于妇人之手矣！",
	"#reqiangxi1": "铁戟双提八十斤，威风凛凛震乾坤！",
	"#reqiangxi2": "勇字当头，义字当先！",
	"#re_dianwei:die": "汝等小儿，竟敢害我！拿命来！",
	"#chengye1": "勤学于未长，立志于未壮。",
	"#chengye2": "志在坚且行，学在勤且久。",
	"#chengye3": "承继族贤之业，弘彰孔儒之学。",
	"#buxu1": "今世俗儒穿凿，不加补续，恐疑误后学。",
	"#buxu2": "经籍去圣久远，文字多谬，当正定《六经》。",
	"#xin_mamidi:die": "袁公路！汝怎可欺我！",
	"#mingcha1": "明主可以理夺，怎可以情求之？",
	"#mingcha2": "祸见于此，何免之有？",
	"#jingzhong1": "妾所乏为容，试问君有几德？",
	"#jingzhong2": "君好色轻德，何谓百德皆备？",
	"#ruanhui:die": "贱妾茕茕守空房，忧来思君不敢忘……",
	"#sbyaoming1": "山不让纤介，而成其危；海不辞丰盈，而成其邃。",
	"#sbyaoming2": "取上方可得中，取下则无所得矣。",
	"#xin_quancong:die": "吾逐名如筑室道谋，而是用终不溃于成……",
	"#quhu_re_xunyu1": "驱虎伤敌，保我无虞。",
	"#quhu_re_xunyu2": "无需费我一兵一卒。",
	"#rejieming1": "因势利导，是为良计。",
	"#rejieming2": "杀身成仁，不负皇恩。",
	"#re_xunyu:die": "命不由人，徒叹奈何……",
	"#xinjianying1": "良谋百出，渐定决战胜势！",
	"#xinjianying2": "佳策数成，破敌垂手可得！",
	"#shibei_xin_jushou1": "只有杀身士，绝无降曹夫！",
	"#shibei_xin_jushou2": "心向袁氏，绝无背离可言！",
	"#xin_jushou:die": "授，无愧主公之恩……",
	"#reanxu1": "贤淑重礼，育人育己。",
	"#reanxu2": "雨露均沾，后宫不乱。",
	"#zhuiyi_re_bulianshi1": "化作桃园只为君。",
	"#zhuiyi_re_bulianshi2": "魂若有灵，当助夫君。",
	"#re_bulianshi:die": "今生先君逝，来世再侍君……",
	"#beige_re_caiwenji1": "人多暴猛兮如虺蛇，控弦披甲兮为骄奢。",
	"#beige_re_caiwenji2": "两拍张弦兮弦欲绝，志摧心折兮自悲嗟。",
	"#duanchang_re_caiwenji1": "雁飞高兮邈难寻，空断肠兮思愔愔。",
	"#duanchang_re_caiwenji2": "为天有眼兮，为何使我独飘流？",
	"#re_caiwenji:die": "今别子兮归故乡，旧怨平兮新怨长！",
	"#mbdaoshu1": "嗨！不过区区信件，何妨故友一观？",
	"#mbdaoshu2": "幸吾有备而来，不然为汝所戏矣。",
	"#mbdaoshu3": "亏我一世英名，竟上了周瑜的大当。",
	"#spdaizui1": "望丞相权且记过，容干将功折罪啊！",
	"#spdaizui2": "干，谢丞相不杀之恩！",
	"#sp_jianggan:die": "唉！假信害我不浅啊！",
	"#xingtu1": "制图之体有六，缺一不可言精。",
	"#xingtu2": "图设分率，则宇内地域皆可绘于一尺。",
	"#juezhi1": "复设五等之制，以解天下土崩之势。",
	"#juezhi2": "表为建爵五等，实则藩卫帝室。",
	"#peixiu:die": "既食寒石散，便不可饮冷酒啊……",
	"#re_gaoshun:die": "可叹主公知而不用啊！",
	"#reganlu1": "玄德实乃佳婿呀。",
	"#reganlu2": "好一个郎才女貌，真是天作之合啊。",
	"#buyi_re_wuguotai1": "有我在，定保贤婿无余！",
	"#buyi_re_wuguotai2": "东吴，岂容汝等儿戏！",
	"#re_wuguotai:die": "诸位卿家，还请尽力辅佐仲谋啊……",
	"#mobileyanzhu1": "计设辞阳宴，只为断汝头！",
	"#mobileyanzhu2": "何需待午正？即刻送汝行！",
	"#mobilexingxue1": "古者建国，教学为先，为时养器！",
	"#mobilexingxue2": "偃武修文，以崇大化！",
	"#xin_sunxiu:die": "不求外取城地，但保大吴永安……",
	"#bingqing1": "常怀圣言，以是自励。",
	"#bingqing2": "身受贵宠，不忘初心。",
	"#yingfeng1": "公内奉天子，外令诸侯，则天下可定。",
	"#yingfeng2": "公怀奉君之心，则民有安固之志。",
	"#sp_maojie:die": "废立大事，公不可不慎……",
	"#spshidi1": "诈败以射之，其必死矣！",
	"#spshidi2": "呃啊，中其拖刀计矣！",
	"#spyishi1": "昨日释忠之恩，今吾虚射以报。",
	"#spyishi2": "君刀不砍头颅，吾箭只射盔缨。",
	"#spqishe1": "诱敌之计已成，吾且拈弓搭箭！",
	"#spqishe2": "关羽即至吊桥，既已控弦，如何是好？",
	"#yj_huangzhong:die": "关云长义释黄某，吾又安忍射之……",
	"#zhiyan_re_yufan1": "失忠于信，何以侍君！",
	"#zhiyan_re_yufan2": "恕臣耿直，犯言谏正！",
	"#rezongxuan1": "凡夫俗子，怎识得卦象玄妙？",
	"#rezongxuan2": "微妙玄通，深不可识。",
	"#re_yufan:die": "唉，主公不能容我……",
	"#chongxu1": "阳炁冲三关，斩尸除阴魔。",
	"#chongxu2": "蒲团清静坐，神归了道真。",
	"#miaojian1": "谨以三尺玄锋，代天行化，布令宣威。",
	"#miaojian2": "布天罡，踏北斗，有秽皆除，无妖不斩。",
	"#shhlianhua1": "刀兵水火，速离身形。",
	"#shhlianhua2": "体有金光，覆映吾身。",
	"#sunhanhua:die": "天有寒暑，人有死生……",
	"#huantu1": "今群雄蜂起，主公宜外收内敛，勿为祸先。",
	"#huantu2": "昔陈胜之事，足为今日之师，望主公熟虑。",
	"#bihuo1": "公以败兵之身投之，功轻且恐难保身也。",
	"#bihuo2": "公不若附之他人与相拒，然后委质，功必多。",
	"#yanpu:die": "公皆听吾计，圃岂敢不专……",
	"#jibing1": "集荆、扬精兵，而后共举大义！",
	"#jibing2": "教众快快集合，不可误了大事！",
	"#wangjing1": "联络朝中中常侍，共抗朝廷不义师！",
	"#wangjing2": "往来京城，与众常侍密谋举事！",
	"#moucuan1": "汉失民心，天赐良机！",
	"#moucuan2": "天下正主，正是大贤良师！",
	"#mayuanyi:die": "唐周……无耻！",
	"#jueyong1": "敌围何惧，有死而已！",
	"#jueyong2": "身陷敌阵，战而弥勇！",
	"#poxiang1": "王瓘既然假降，吾等可将计就计。",
	"#poxiang2": "佥率已降两千魏兵，便可大破魏军主力。",
	"#fuqian:die": "生为蜀臣，死……亦当为蜀！",
	"#disordersidi1": "司敌之动，先发而制。",
	"#disordersidi2": "料敌之行，伏兵灭之。",
	"#xin_caozhen:die": "雍凉动乱，皆吾之过也……",
	"#xinzenhui1": "本公主说你忤逆，岂能有假？",
	"#xinzenhui2": "不用挣扎了，你们谁都逃不了！",
	"#xinjiaojin1": "狂妄之徒！忘了你自己的身份了吗？",
	"#xinjiaojin2": "和本公主比心机谋算？哼，可笑！",
	"#xin_sunluban:die": "妹妹，姐姐是迫不得已……",
	"#zhiming1": "天定人命，仅可一窥。",
	"#zhiming2": "知命而行，尽诸人事。",
	"#xingbu1": "天现祥瑞，此乃大吉之兆。",
	"#xingbu2": "天象显异，北伐万不可期。",
	"#qiaozhou:die": "老夫死不足惜，但求蜀地百姓无虞！",
	"#xinshenxing1": "事前多思，事后少悔。",
	"#xinshenxing2": "权衡斟酌，再虑一番。",
	"#xin_guyong:die": "陛下厚爱，雍……",
	"#requanji1": "备兵驯马，以待战机。",
	"#requanji2": "避其锋芒，权且忍让。",
	"#zili_re_zhonghui1": "金鳞，岂是池中之物！",
	"#zili_re_zhonghui2": "千载一时，鼎足而立！",
	"#re_zhonghui:die": "伯约，我已无力回天……",
	"#xinqieting1": "密言？哼！早已入我耳中。",
	"#xinqieting2": "此子不除，久必为患！",
	"#xianzhou_xin_caifuren1": "既是诸位之议，妾身复有何疑？",
	"#xianzhou_xin_caifuren2": "我虽女流，亦知献州乃为长久之计。",
	"#xin_caifuren:die": "琮儿！啊啊……",
	"#mobilezhongyong1": "关将军，接刀！",
	"#mobilezhongyong2": "青龙三停刀，斩敌万千条！",
	"#xin_zhoucang:die": "九泉之下，仓陪将军再走一遭……",
	"#rejieyue1": "按丞相之命，此部今由余统摄。",
	"#rejieyue2": "奉法行令，事上之节，岂有宽宥之理？",
	"#ol_yujin:die": "忍辱偷生，无颜以面丞相厚恩！",
	"#tiansuan1": "汝既持签问卜，亦当应天授命。",
	"#tiansuan2": "尔若居正体道，福寿自当天成。",
	"#zhouqun:die": "及时止损，过犹不及……",
	"#juxiang1_re_zhurong1": "今日，就让这群汉人长长见识。",
	"#juxiang1_re_zhurong2": "我的大象，终于有了用武之地。",
	"#relieren1": "有我手中飞刀在，何惧蜀军！",
	"#relieren2": "长矛，飞刀，烈火，都来吧！",
	"#re_zhurong:die": "这群汉人使诈……",
	"#tiaoxin_re_jiangwei1": "黄口竖子，何必上阵送命？",
	"#tiaoxin_re_jiangwei2": "汝如欲大败而归，则可进军一战！",
	"#zhiji_re_jiangwei1": "维定当奋身以复汉室。",
	"#zhiji_re_jiangwei2": "丞相之志，维必竭力而为。",
	"#re_jiangwei:die": "可惜大计未成，吾已身陨……",
	"#yufeng1": "广开兮天门，纷吾乘兮玄云。",
	"#yufeng2": "高飞兮安翔，乘清气兮御阴阳。",
	"#tianshu1": "其耆欲深者，其天机浅。",
	"#tianshu2": "杀生者不死，生生者不生。",
	"#nanhualaoxian:die": "天机求而近，执而远……",
	"#re_handang:die": "箭尽弓折，力竭人亡……",
	"#retuntian1": "休养生息，是为以备不虞。",
	"#retuntian2": "战损难免，应以军务减之。",
	"#zaoxian_re_dengai1": "用兵以险，则战之以胜！",
	"#zaoxian_re_dengai2": "已至马阁山，宜速进军破蜀！",
	"#re_dengai:die": "一片忠心，换来这般田地……",
	"#xinzhuikong1": "万事必须小心为妙。",
	"#xinzhuikong2": "我虽妇人，亦当铲除曹贼。",
	"#xinqiuyuan1": "这是最后的希望了。",
	"#xinqiuyuan2": "诛此国贼者，加官进爵！",
	"#xin_fuhuanghou:die": "父亲大人，你竟如此优柔寡断……",
	"#xinduodao1": "避其锋芒，夺其兵刃！",
	"#xinduodao2": "好兵器啊！哈哈哈！",
	"#xinanjian1": "看我一箭索命！",
	"#xinanjian2": "明枪易躲，暗箭难防！",
	"#xin_panzhangmazhong:die": "埋伏得这么好，怎会……",
	"#mobilejingce1": "得一寸，进一尺。",
	"#mobilejingce2": "良策佐君王，率征万精兵。",
	"#xin_guohuai:die": "穷寇莫追……",
	"#taomie1": "犯我辽东疆界，必遭后报！",
	"#taomie2": "韩濊之乱，再无可生之机！",
	"#taomie3": "颅且远行万里，要席何用？",
	"#gongsunkang:die": "枭雄一世，何有所憾！",
	"#xinniluan1": "绝地反击的时候到了！",
	"#xinniluan2": "胜者为王败者为寇。",
	"#xiaoxi_hansui1": "先下手为强！",
	"#xiaoxi_hansui2": "乌合之众，西凉何惧！",
	"#xin_hansui:die": "中了曹贼的离间计……了……",
	"#daoji1": "八十斤双戟？于我如探囊取物！",
	"#daoji2": "以汝之矛，攻汝之盾！",
	"#hucheer:die": "未料一伸手，便被……敌酋捉……",
	"#re_lingtong:die": "先……停一下吧……",
	"#zishou_re_liubiao1": "忍时待机，以期坐收渔利！",
	"#zishou_re_liubiao2": "按兵不动，徐图荆襄霸业！",
	"#rezongshi1": "这天下，尽是大汉疆土！",
	"#rezongshi2": "汉室之威，犹然彰存！",
	"#re_liubiao:die": "垂垂老矣，已忘壮年雄心……",
	"#baiyi1": "吾不听公休之言，以致须行此策。",
	"#baiyi2": "诸将无过，且按吾之略再图破敌。",
	"#jinglve1": "安待良机，自有舍身报吾之士。",
	"#jinglve2": "察局备间，保诸事不虞。",
	"#shanli1": "荡尘涤污，重整河山，便在今日！",
	"#shanli2": "效伊尹霍光，以返天下清明。",
	"#simashi:die": "吾家夙愿，得偿与否，尽看子上……",
	"#hongyi1": "克明礼教，约束不端之行。",
	"#hongyi2": "训成弘操，以扬正明之德。",
	"#quanfeng1": "媛容德懿，应追谥之。",
	"#quanfeng2": "景怀之号，方配得上前人之德。",
	"#yanghuiyu:die": "桃符，一定要平安啊……",
	"#mobiledanshou1": "此诚危难，我定当竭尽全力！",
	"#mobiledanshou2": "大丈夫屈伸有道，不在一时胜负。",
	"#xin_zhuran:die": "大耳贼就在眼前，快追……",
	"#beizhu1": "检阅士卒，备将行之役。",
	"#beizhu2": "点选将校，讨乱汉之贼。",
	"#beizhu3": "乱贼势大，且暂勿力战。",
	"#dingyuan:die": "奉先何故心变，啊！",
	"#xinqiaoshui1": "此事听我一言，定有分明之理。",
	"#xinqiaoshui2": "今日之事，听我一言便是。",
	"#xinjyzongshi1": "空拘小节，难成大事。",
	"#xinjyzongshi2": "繁文缛节，不过是缚人之物。",
	"#xin_jianyong:die": "行事无矩，为人所恶矣……",
	"#rejiangchi1": "将飞翼伏，三军整肃。",
	"#rejiangchi2": "策马扬鞭，奔驰万里。",
	"#xin_caozhang:die": "黄须金甲，也难敌骨肉毒心！",
	"#dangxian_xin_liaohua1": "谁言蜀汉已无大将？",
	"#dangxian_xin_liaohua2": "老将虽白发，宝刀刃犹锋！",
	"#refuli1": "未破敌军，岂可轻易服输？",
	"#refuli2": "看老夫再奋身一战！",
	"#xin_liaohua:die": "兴复大业，就靠你们了……",
	"#xuewei1": "吾主之尊，岂容尔等贼寇近前？",
	"#xuewei2": "血佑忠魂，身卫英主。",
	"#liechi1": "吾受汉帝恩，岂容吴贼辱？",
	"#liechi2": "汉将有死无降，怎会如吴狗一般？",
	"#furong:die": "吾主既然得返，此番已是功成……",
	"#jiuchi_re_dongzhuo1": "无酒不欢，来来来，再饮，再饮！",
	"#jiuchi_re_dongzhuo2": "黄金美酒夜光杯，舍我其谁啊，哈哈哈哈哈哈！",
	"#roulin_re_dongzhuo1": "美女，美酒，美食，嘿嘿，尽我享用！",
	"#roulin_re_dongzhuo2": "嗯啊，尽享天下美味，哼哼哼哼哈哈哈哈！",
	"#benghuai_re_dongzhuo1": "什么礼制纲常，我说的就是纲常！",
	"#benghuai_re_dongzhuo2": "谁有权力，谁掌生死！",
	"#baonue2_re_dongzhuo1": "不施严法，怎治乱民，休得啰嗦！",
	"#baonue2_re_dongzhuo2": "天子在我手里，我怕谁！",
	"#re_dongzhuo:die": "竖子，竟敢反我！",
	"#repojun1": "犯大吴疆土者，盛必击而破之！",
	"#repojun2": "若敢来犯，必叫你大败而归！",
	"#re_xusheng:die": "盛只恨，不能再为主公，破敌致胜了……",
	"#zhengjian1": "此人有雄猛逸才，还请明公观之。",
	"#zhengjian2": "若明公得此人才，定当如虎添翼。",
	"#gaoyuan1": "还请告知兴霸，请他务必相助。",
	"#gaoyuan2": "如今事急，唯有兴霸可救。",
	"#sp_sufei:die": "本可共图大业，奈何主公量狭器小啊……",
	"#weifeng1": "广散惧义，尽泄敌之斗志。",
	"#weifeng2": "哼哼，若尔等惧我，自当卷甲以降！",
	"#yj_zhangliao:die": "惑于女子而尽失战机，庸主误我啊……",
	"#zhilve1": "将者，上不治天，下不治地，中不治人。",
	"#zhilve2": "料敌之计，明敌之意，因况反制。",
	"#yj_zhanghe:die": "若非小人作梗，何至官渡之败……",
	"#xhzhiyan1": "治军严谨，方得精锐之师。",
	"#xhzhiyan2": "精兵当严于律己，束身自修。",
	"#yj_xuhuang:die": "唉，明主未遇，大功未成……",
	"#gnjinfan1": "扬锦帆，劫四方，快意逍遥！",
	"#gnjinfan2": "铃声所至之处，再无安宁！",
	"#gnsheque1": "看我此箭，取那轻舟冒进之人性命！",
	"#gnsheque2": "纵有劲甲良盾，也难挡我神射之威！",
	"#yj_ganning:die": "铜铃声……怕是听不到了……",
	"#yinghun_re_sunjian1": "义定四野，武匡海内。",
	"#yinghun_re_sunjian2": "江东男儿，皆胸怀匡扶天下之志。",
	"#re_sunjian:die": "吾身虽死，忠勇须传……",
	"#zhengjing1": "兼采今古，博学并蓄，择善以教之。",
	"#zhengjing2": "君子需通六艺，亦当识明三礼。",
	"#zhengxuan:die": "注易未毕，奈何寿数将近……",
	"#jimeng1": "今日之言，皆是为保两国无虞。",
	"#jimeng2": "天下之势已如水火，还望重修盟好。",
	"#shuaiyan1": "并魏之日，想来便是两国争战之时。",
	"#shuaiyan2": "在下所言，至诚至率。",
	"#dengzhi:die": "使命既成，但死无妨！",
	"#relihuo1": "此火只为全歼敌寇，无需妇人之仁。",
	"#relihuo2": "战胜攻取，以火修功。",
	"#chunlao_xin_chengpu1": "备下佳酿，以做庆功之用。",
	"#chunlao_xin_chengpu2": "饮此壮行酒，当立先头功。",
	"#xin_chengpu:die": "以暴讨贼，竟遭报应么……",
	"#duoduan1": "北伐之事，丞相亦听我定夺。",
	"#duoduan2": "筹定规画，片刻既定！",
	"#gongsun1": "我岂能与魏延这种莽夫共事！",
	"#gongsun2": "早知如此，投靠魏国又如何！",
	"#yangyi:die": "我功勋卓著，只为昏君奸臣所害，唉！",
	"#chengzhao1": "定当为皇上诛杀首害！",
	"#chengzhao2": "此诏字字诛心，岂能不斩曹贼！",
	"#dongcheng:die": "九泉之下，我等着你曹贼到来！",
	"#xinlianhuan1": "将多兵众，不可以敌，使其自累，以杀其势。",
	"#xinlianhuan2": "善用兵者，运巧必防损，立谋虑中变。",
	"#niepan_re_pangtong1": "凤凰折翅，涅槃再生。",
	"#niepan_re_pangtong2": "九天之志，展翅翱翔。",
	"#re_pangtong:die": "落……凤……坡……",
	"#zhouxuan1": "孰为虎？孰为鹰？于吾都如棋子。",
	"#zhouxuan2": "群雄逐鹿之际，唯有洞明时势方有所成。",
	"#fengji1": "巡土田之宜，尽凿溉之利。",
	"#fengji2": "养耆育孤，视民如伤，以丰定徐州。",
	"#chendeng:die": "诸卿何患无令君乎？",
	"#zhaohan1": "天道昭昭，再兴如光武亦可期。",
	"#zhaohan2": "汉祚将终，我又岂能无憾。",
	"#rangjie1": "公既执掌权柄，又何必令君臣遭乱。",
	"#rangjie2": "公虽权倾朝野，亦当尊圣上之意。",
	"#yizheng1": "一人劫天子，一人质公卿，此可行邪？",
	"#yizheng2": "诸军举事，当上顺天心，奈何如是！",
	"#yangbiao:die": "未能效死佑汉，只因宗族之重……",
	"#bazhen_re_sp_zhugeliang1": "待得八阵图毕，必令敌军入阵。",
	"#bazhen_re_sp_zhugeliang2": "八卦布阵，困兵十万，哈哈哈哈。",
	"#rehuoji1": "火，尽可烧的再猛烈一些。",
	"#rehuoji2": "行火必有因，烟火必素具。",
	"#rekanpo1": "料事如神，随机应变。",
	"#rekanpo2": "虚虚实实，兵无常势。",
	"#zhiyi1": "岂可擅退而误国家之功？",
	"#zhiyi2": "统摄不懈，只为破敌！",
	"#zhangyì:die": "唯愿百姓，不受此乱所害，哎……",
	"#zhongzuo1": "历经磨难，不改佐国之志。",
	"#zhongzuo2": "建功立业，唯愿天下早定。",
	"#wanlan1": "挽狂澜于既倒，扶大厦于将倾。",
	"#wanlan2": "深受国恩，今日便是报偿之时！",
	"#jiakui:die": "不斩孙权，九泉之下羞见先帝啊！",
	"#kuangcai1": "博古揽今，信手拈来。",
	"#kuangcai2": "功名为尘，光阴为金。",
	"#shejian1": "尔等竖子，不堪为伍！",
	"#shejian2": "请君洗耳，听我之言。",
	"#miheng:die": "呵呵呵呵……这天地都容不下我！……",
	"#zhaohuo1": "我获罪于天，致使徐州之民，受此大难！",
	"#zhaohuo2": "如此一来，徐州危矣……",
	"#yixiang1": "一方有难，八方应援。",
	"#yixiang2": "昔日有恩，还望此时来报。",
	"#yirang1": "明公切勿推辞！",
	"#yirang2": "万望明公可怜汉家城池为重！",
	"#taoqian:die": "悔不该差使小人，招此祸患……",
	"#fenyin1": "披发亢歌，至死不休！",
	"#fenyin2": "力不竭，战不止！",
	"#liuzan:die": "今病困若此，固命也……",
	"#dujin1": "带兵十万，不如老夫多甲一件！",
	"#dujin2": "轻舟独进，破敌先锋！",
	"#lingcao:die": "呃啊！（扑通）此箭……何来……",
	"#qingyi1": "没牌，又有何不可能的？",
	"#qingyi2": "翩翩逸云端，仿若桃花仙。",
	"#shixin1": "释怀之戾气，化君之不悦。",
	"#shixin2": "星星之火，安能伤我？",
	"#sunru:die": "佑我江东，虽死无怨……",
	"#tunchu1": "屯粮事大，暂不与尔等计较。",
	"#tunchu2": "屯粮待战，莫动刀枪。",
	"#shuliang1": "将军驰劳，酒肉慰劳。",
	"#shuliang2": "将军，牌来了。",
	"#lifeng:die": "吾，有负丞相重托……",
	"#zhanyi1": "以战养战，视敌而战。",
	"#zhanyi2": "战，可以破敌。意，可以守御。",
	"#zhuling:die": "此生得遇曹公，再无他求……",
	"#polu1": "设此发石车，可破袁军高橹。",
	"#polu2": "霹雳之声，震丧敌胆。",
	"#choulve1": "依此计行，可安军心。",
	"#choulve2": "破袁之策，吾已有计。",
	"#liuye:die": "唉，于上不能佐君主，于下不能亲同僚，吾愧为佐世人臣……",
	"#yizan_respond_shan1": "承吾父之勇，翊军立阵。",
	"#yizan_respond_shan2": "继先帝之志，季兴大汉。",
	"#xinfu_longyuan1": "金鳞岂是池中物，一遇风云便化龙。",
	"#xinfu_longyuan2": "忍时待机，今日终于可以建功立业。",
	"#zhaotongzhaoguang:die": "守业死战，不愧初心……",
	"#xinfu_jingxie1": "军具精巧，方保无虞。",
	"#xinfu_jingxie2": "巧则巧矣，未尽善也。",
	"#xinfu_qiaosi1": "待我稍作思量，更益其巧。",
	"#xinfu_qiaosi2": "虚争空言，不如思而试之。",
	"#majun:die": "衡石不用，美玉见诬啊！",
	"#xinfu_daigong1": "不急，只等敌军士气渐殆。",
	"#xinfu_daigong2": "敌谋吾已尽料，可以长策縻之。",
	"#xinfu_zhaoxin1": "吾心昭昭，何惧天下之口！",
	"#xinfu_zhaoxin2": "公此行欲何为，吾自有量度。",
	"#simazhao:die": "安世，接下来，就看你的了……",
	"#xinfu_qianchong1": "细行筹划，只盼能助夫君一臂之力。",
	"#qc_weimu": "宫闱之内，何必擅涉外事！",
	"#qc_mingzhe": "谦瑾行事，方能多吉少恙。",
	"#xinfu_shangjian1": "如今乱世，当秉俭行之节。",
	"#xinfu_shangjian2": "百姓尚处寒饥之困，吾等不可奢费财力。",
	"#wangyuanji:die": "世事沉浮，非是一人可逆啊……",
	"#xinfu_pingcai1": "吾有众好友，分为卧龙、凤雏、水镜、元直。",
	"#xinfu_pingcai2": "孔明能借天火之势。",
	"#xinfu_pingcai3": "士元虑事环环相扣。",
	"#xinfu_pingcai4": "德操深谙处世之道。",
	"#xinfu_pingcai5": "元直侠客惩恶扬善。",
	"#pangdegong:die": "吾知人而不自知，何等荒唐……",
	"#shouye1": "敌军攻势渐怠，还望诸位依策坚守。",
	"#shouye2": "袁幽州不日便至，当行策建功以报之。",
	"#liezhi1": "只恨箭支太少，不能射杀汝等！",
	"#liezhi2": "身陨事小，秉节事大。",
	"#shenpei:die": "吾君在北，但求面北而亡！",
	"#xinfu_zhennan1": "镇守南中，夫君无忧。",
	"#xinfu_zhennan2": "与君携手，定平蛮夷。",
	"#renshi1": "巾帼于乱世，只能飘零如尘。",
	"#renshi2": "还望您可以手下留情！",
	"#wuyuan1": "夫君，此次出征，还望您记挂妾身！",
	"#wuyuan2": "云长，一定要平安归来啊！",
	"#hujinding:die": "云长，重逢不久，又要相别么……",
	"#re_zhanggong:die": "大漠孤烟，孤立无援啊……",
	"#reluanji1": "万箭穿心，灭其士气！",
	"#reluanji2": "卿当与本公同心戮力，共安社稷！",
	"#xueyi1": "世受皇恩，威震海内。",
	"#xueyi2": "四世三公，名贯天下。",
	"#xin_yuanshao:die": "袁门不幸啊！",
	"#xiangle_re_liushan1": "天府之国，自然民安国泰。",
	"#xiangle_re_liushan2": "战事扰乱民生，不如作罢。",
	"#refangquan1": "爱卿自行定夺便是。",
	"#refangquan2": "北伐事重，相父全权处理即可啊！",
	"#ruoyu_re_liushan1": "唯有自认庸主之名，方能保蜀地官民无虞啊！",
	"#ruoyu_re_liushan2": "既无争雄天下之才，只好做守成之主。",
	"#re_liushan:die": "实在有愧父皇与相父啊……",
	"#jiang_re_sunben1": "我会把胜利带回江东。",
	"#jiang_re_sunben2": "天下英雄，谁能与我一战？",
	"#rehunzi1": "小霸王之名响彻天下，何人不知？",
	"#rehunzi2": "江东已平，中原动荡，直取许昌。",
	"#zhiba2_re_sunben1": "我的霸业才刚刚开始。",
	"#zhiba2_re_sunben2": "汝是战是降，我皆奉陪。",
	"#re_sunben:die": "大业未就，中世尔殒……",
	"#scstaoluan1": "罗绮朱紫，皆若吾等手中傀儡。",
	"#scschiyan1": "逆臣乱党，都要受这啄心之刑。",
	"#scszimou1": "在宫里当差，还不是为这利字！",
	"#scspicai1": "修得广厦千万，可庇汉室不倾。",
	"#scsyaozhuo1": "上蔽天听，下诓朝野！",
	"#scsxiaolu1": "咱家上下打点，自是要费些银子。",
	"#scskuiji1": "同道者为忠，殊途者为奸！",
	"#scschihe1": "想见圣上？哼哼，你怕是没这个福分了！",
	"#scsniqu1": "离心离德，为吾等所不容！",
	"#scsanruo1": "小伤无碍，安心修养便可。",
	"#wangzun_old_yuanshu1": "这玉玺，当然是能者居之。",
	"#wangzun_old_yuanshu2": "我就是皇帝，我就是天！",
	"#sbqingzheng_mb_caomao1": "朕虽不德，昧于大道，思与宇内共臻兹路。",
	"#sbqingzheng_mb_caomao2": "愿遵前人教诲，为一国明帝贤君。",
	"#rejiushi_mb_caomao1": "心忿无所表，下笔即成篇。",
	"#rejiushi_mb_caomao2": "气幽但求醉，醒后寻复来。",
	"#sbfangzhu_mb_caomao1": "卿当竭命纳忠，何为此逾矩之举！",
	"#sbfangzhu_mb_caomao2": "朕继文帝风流，亦当效其权略。",
	"#mbjuejin1": "朕宁拼一死，逆贼安敢一战！",
	"#mbjuejin2": "朕安可坐受废辱，今日当与卿自出讨之！",
	"#yanxiang:die": "若遇明主，或可青史留名……",
	"#baoxin:die": "区区黄巾流寇，如何挡我？呃啊……",
	"#jiangji:die": "洛水之誓，言犹在耳……咳咳咳……",
	"#liwei:die": "安南重任，万不可轻之……",
	"#binghuo1": "黄巾既起，必灭不义之师！",
	"#binghuo2": "诛官杀吏，尽诛朝廷爪牙！",
	"#paiyi_re_zhonghui1": "艾命不尊，死有余辜。",
	"#paiyi_re_zhonghui2": "非我族类，其心必异。",
	"#guanxing_re_jiangwei1": "知天易则观之，逆天难亦行之。",
	"#guanxing_re_jiangwei2": "欲尽人事，亦先听天命。",
	"#jixi_re_dengai1": "攻敌之不备，斩将夺辎！",
	"#jixi_re_dengai2": "奇兵正攻，敌何能为？",
	"#jijiang1_re_liushan1": "还望诸卿勠力同心，以保国祚。",
	"#jijiang1_re_liushan2": "哪位爱卿愿意报效国家？",
	"#reyingzi_re_sunben1": "有公瑾助我，可平天下。",
	"#reyingzi_re_sunben2": "所到之处，战无不胜。",
	"#yinghun_re_sunben1": "武烈之魂，助我扬名。",
	"#yinghun_re_sunben2": "江东之主，众望所归。",
	
	// offline
	"#kuiwei1": "休整片刻，且随我杀出一条血路。",
	"#kuiwei2": "骑兵列队，准备突围。",
	"#yanzheng1": "任你横行霸道，我自岿然不动。",
	"#yanzheng2": "行伍严整，百战不殆。",
	"#jsp_caoren:die": "城在人在，城破人亡……",
	"#vtbguisha1": "瑰姿媚丽，沙场来战。",
	"#vtbshuli1": "姿颜姝丽，决意于众。",
	"#vtb_xiaosha:die": "哼！你欺负人家！",
	"#vtbshanwu1": "见风起舞，胡步轻盈。",
	"#vtbxianli1": "娴丽曼瑶，宜室宜家。",
	"#vtb_xiaoshan:die": "……你欺负人家！",
	"#vtbtaoyan1": "灿若桃花，琼华宴婉！",
	"#vtbyanli1": "妍姿秀丽，翩然如花。",
	"#vtb_xiaotao:die": "呜呜……你欺负人家……",
	"#vtbleyu1": "虞歌爱晚，此间为乐。",
	"#vtbyuanli1": "媛媛相携，心有灵犀。",
	"#vtb_xiaole:die": "呜呜……你欺负人家……",
	"#vtbmeiniang1": "桨醇轻启，酒香富裕。",
	"#vtbyaoli1": "酾酒临江,慷慨而旋。",
	"#vtb_xiaojiu:die": "呜呜……你欺负人家！",
	"#xiongyi1": "此时不战，更待何时！",
	"#xiongyi2": "弟兄们，我们的机会来啦！",
	"#mateng:die": "儿子，为爹报仇啊……",
	"#sijian1": "且听我最后一言！",
	"#sijian2": "忠言逆耳啊！！",
	"#suishi1": "一荣俱荣！",
	"#suishi2": "一损俱损……",
	"#tianfeng:die": "不纳吾言而反诛吾心，奈何奈何！！",
	"#jiling:die": "额，将军为何咆哮不断……",
	"#kongrong:die": "覆巢之下，岂有完卵……",
	"#zhongyi1": "忠义是为将之本。",
	"#zhongyi2": "为国尽忠，天经地义！",
	"#gzjinfa1": "居功者，当自矜，为将者，当善伐。",
	"#gzjinfa2": "此战伐敌所获，皆我之功！",
	"#qiuan1": "明公神文圣武，吾自当举城来降。",
	"#qiuan2": "臣心不自安，乃君之过也。",
	"#liangfan1": "今举兵投魏，必可封王拜相，一展宏图。",
	"#liangfan2": "今举义军事若成，吾为复汉元勋也。",
	"#pe_mengda:die": "吾一生寡信，今报应果然来矣……",
	"#gzquanji1": "不露圭角，择时而发！",
	"#gzquanji2": "晦养厚积，乘势而起！",
	"#gzpaiyi1": "排斥异己，为王者必由之路！",
	"#gzpaiyi2": "非吾友，则必敌也！",
	"#chenggong1": "吾与主公患难之交也！",
	"#chenggong2": "我豫州人才济济，元皓之辈，不堪大用。",
	"#yj_liru:die": "如遇明主，大业必成……",
	"#zhaolie1": "不灭东吴，誓不归蜀！",
	"#zhaolie2": "汝等勿劝，此战势在必行！",
	"#shichou": "尔等叛贼，害我兄弟，饶不得汝！",
	"#dahe": "燕人张飞在此！",
	"#fenyong1": "放手一搏吧！",
	"#fenyong2": "壮情豪胆，小伤何惧！",
	"#sp_xiahoudun:die": "血染沙场，马革裹尸，快哉，快哉！",
	"#yanxiao1": "倾心一笑，愿君驻足。",
	"#yanxiao2": "英雄壮志，红颜无怨。",
	"#anxian1": "大恩不言谢哦~",
	"#anxian2": "伯符，不用担心我！",
	"#manjuan": "漫卷纵酒，白首狂歌。",
	"#zuixiang": "懵懵醉乡中，天下心中藏。",
	"#sp_pangtong:die": "纵有治世才，难遇治世主……",
	"#gzshilu1": "以杀立威，谁敢反我？",
	"#gzshilu2": "将这些乱臣贼子，尽皆诛之！",
	"#gzxiongnve1": "当今天子乃我所立，他敢怎样？",
	"#gzxiongnve2": "我兄弟三人同掌禁军，有何所惧？",
	"#ns_lijue:die": "若无内讧，也不至如此……",
	"#ns_fanchou:die": "唉，稚然疑心，甚重……",
	
	// old
	"#xiemu1": "暴戾之气，伤人害己。",
	"#xiemu2": "休要再起战事！",
	"#naman1": "慢着，让我来！",
	"#naman2": "弃暗投明，光耀门楣。",
	"#youdi1": "无名小卒，可敢再前进一步！",
	"#youdi2": "予以小利，必有大获。",
	"#old_zhuhuan:die": "这巍巍巨城，吾竟无力撼动……",
	"#xinzhan1": "吾通晓兵法，世人皆知。",
	"#xinzhan2": "用兵之道，攻心为上。",
	"#huilei1": "丞相视某如子，某以丞相为父。",
	"#huilei2": "谡愿以死安大局。",
	"#oldzhenlie1": "我，绝不屈服！",
	"#oldzhenlie2": "休要小看妇人志气！",
	"#oldmiji1": "我将尽我所能！",
	"#oldmiji2": "奇谋，只在绝境中诞生！",
	"#old_wangyi:die": "忠义已尽，死又何妨？",
	"#oldqianxi1": "伤其十指，不如断其一指！",
	"#oldqianxi2": "斩草除根，除恶务尽！",
	"#madai:die": "反骨贼已除，丞相放心……",
	"#mengjin1": "你，可敢挡我？",
	"#mengjin2": "我要杀你们个片甲不留！",
	"#pangde:die": "四面都是水，我命休矣……",
	"#enyuan1": "滴水之恩，涌泉以报。",
	"#enyuan2": "得人恩果千年记。",
	"#enyuan3": "睚眦之怨，无不报复。",
	"#enyuan4": "谁敢得罪我？",
	"#xuanhuo1": "给你的，十倍奉还给我。",
	"#xuanhuo2": "重用许靖，以眩远近。",
	"#fazheng:die": "蜀翼既折，蜀汉哀矣……",
	"#yizhong1": "不先为备，何以待敌？",
	"#yizhong2": "稳重行军，百战不殆！",
	"#xin_yujin:die": "呃，晚节不保……",
	"#xiahouyuan:die": "竟然……比我还……快……",
	"#weiyan:die": "谁敢杀我？！呃啊……",
	"#xuhuang:die": "一顿不吃，饿得慌……",
	"#huangtian2_zhangjiao1": "岁在甲子，天下大吉！",
	"#huangtian2_zhangjiao2": "苍天已死，黄天当立！",
	"#zhangjiao:die": "黄天，也死了……",
	"#wuyan1": "唉，一切尽在不言中。",
	"#wuyan2": "嘘，言多必失啊。",
	"#jujian1": "将军岂愿抓牌乎？",
	"#jujian2": "我看好你！",
	"#xushu:die": "娘……孩儿不孝……向您……请罪……",
	"#old_guhuo1": "你信吗？",
	"#old_guhuo2": "猜猜看哪~",
	"#yuji:die": "竟然……被猜到了……",
	"#old_fuhun1": "呐喊破敌，锐不可挡！",
	"#old_fuhun2": "匹夫之勇，插标卖首！",
	"#old_guanzhang:die": "父亲，我来了……",
	"#huangzhong:die": "不得不服老啦~",
	
	// onlyOL
	"#olbachao1": "众卿，别来无恙。",
	"#olbachao2": "改弦更张，乾坤倒转，待我重整江山。",
	"#olbachao3": "豺狼聚野，万民皆唤我，魂归来兮！",
	"#olbachao4": "钝劣无能者，跪服便罢。",
	"#olbachao5": "天下离孤久矣，此来当还黎庶以太明！",
	"#olfuzai1": "舍去慈悲苦，目中唯蕴帝王志！",
	"#olfuzai2": "葬尽衣冠旧，魔气聚化绣龙袍。",
	"#olfuzai3": "万化归一，开以阴阳，持以纯相。",
	"#olfuzai4": "天子剑在心，何凭刀兵胄甲。",
	"#olfuzai5": "凡俗兵刃，何胆与神器争锋？",
	"#dm_caocao:die": "身登帝座，也救不了大魏江山……",
	"#olduoqi1": "你的脊梁，不堪一击！",
	"#olduoqi2": "你的胆气，一文不值！",
	"#olkuangmo1": "草芥，也配呼吸？",
	"#olkuangmo2": "哼，蝼蚁，杀了解闷。",
	"#olkuangmo3": "骄狂纵意，天地唯我！",
	"#olgangquan1": "罡风贯耳，为我战歌！",
	"#olgangquan2": "用这拳头，打破一切！",
	"#dm_lvbu:die": "人间无敌，该去地狱挑战了……",
	"#olhuanhuo1": "你们的争斗，不过是我指间的傀儡戏。",
	"#olhuanhuo2": "我动动指尖，便能让山河变色，群雄皆醉。",
	"#olqingshi1": "看你们为我疯魔厮杀，才是这世间最美的风景。",
	"#olqingshi2": "血流成河，方不负我倾世的容颜。",
	"#dm_diaochan:die": "待我归来，定让这天下再为我癫狂！",
	"#olguifu1": "天命在我，何须急于一时。",
	"#olguifu2": "天数已定，如渊潜龙！",
	"#olmoubian1": "别跟我谈什么对错！我的灵魂，即是我的正义！",
	"#olmoubian2": "我这把剑，该见见血了！",
	"#olmoubian3": "无天无界，我就是天命！",
	"#olmoubian4": "自今日起，我剑由我不由人！",
	"#olzhouxi1": "你降，不降，都得死！",
	"#olzhouxi2": "我就像这夜，终将吞噬一切！",
	"#dm_simayi:die": "哈哈哈哈哈哈，天数……我还是输给了天数？",
	"#olsbhulie1": "匹夫犯我，吾必斩之！",
	"#olsbhulie2": "鼠辈！这一刀下去定让你看不到明天的太阳。",
	"#olsbhulie3": "这大汉，就是我江东子弟的天下！",
	"#olsbyipo1": "乱臣贼子，天地不容！",
	"#olsbyipo2": "身既死兮神以灵，魂魄毅兮为鬼雄！",
	"#olsbyipo3": "年少束发从羽林，纵死不改报国志。",
	"#ol_sb_sunjian:die": "江东子弟们，我先走一步了……",
	"#olbuyi1": "今植桑芜，可荫来者。",
	"#olbuyi2": "补气凝神，百邪不侵。",
	"#olganlu1": "吾家有女，当择良婿。",
	"#olganlu2": "今见玄德，真佳婿也。",
	"#ol_wuguotai:die": "竖子，何以胞妹为饵乎？",
	"#jueqing_ol_zhangchunhua1": "情丝如雪，难当暖阳。",
	"#jueqing_ol_zhangchunhua2": "有情总被无情负，绝情方无软肋生。",
	"#shangshi_ol_zhangchunhua1": "伤我最深的，竟是你司马懿。",
	"#shangshi_ol_zhangchunhua2": "世间刀剑数万，何以情字伤人？",
	"#oljianmie1": "莫说是你，天潢贵胄亦可杀得！",
	"#oljianmie2": "你我不到黄泉，不复相见！",
	"#ol_zhangchunhua:die": "我不负懿，懿负我……",
	"#olchengxiang1": "谁知道称大象需要几步？",
	"#olchengxiang2": "象虽大，然可并舟称之。",
	"#olrenxin1": "待三日中，然后自归。",
	"#olrenxin2": "王者仁心，尚性善之本。",
	"#ol_caochong:die": "性慧早夭，为之奈何？",
	"#olxuanhuo1": "眩惑之术，非为迷惑，乃为明辨贤愚。",
	"#olxuanhuo2": "以眩惑试人心，以真情待贤才，方能得天下。",
	"#olenyuan1": "恩重如山，必报之以雷霆之势！",
	"#olenyuan2": "怨深似海，必还之以烈火之怒！",
	"#ol_fazheng:die": "孝直不忠，不能佑主公复汉室了……",
	"#olqieting1": "好你个刘玄德，敢坏我儿大事。",
	"#olqieting2": "两个大男人窃窃私语，定没有好事。",
	"#xianzhou_ol_caifuren1": "今献州以降，请丞相善待我孤儿寡母。",
	"#xianzhou_ol_caifuren2": "我儿志短才疏，只求方寸之地安享富贵。",
	"#ol_caifuren:die": "这哪里是青州，分明是黄泉……",
	"#olsbhongtu1": "当下春风正好，君可扶摇而上。",
	"#olsbhongtu2": "得卧龙凤雏相助，主公大业可成。",
	"#olsbhongtu3": "我有一计，管教刘璋拱手来降。",
	"#olsbhongtu4": "我有一计，可定千里蜀川。",
	"#olsbhongtu5": "我有一计，可使主公大展鸿图。",
	"#olsbhongtu6": "我有一计，请诸位倾耳静听。",
	"#olsbqiwu1": "哎~没打着~",
	"#olsbqiwu2": "除了飞来的暗箭，无物可伤我。",
	"#olsbqiwu3": "凤栖梧桐，不为虫蚁所伤。",
	"#olsbqiwu4": "既有冲天之心，何惧风霜之寒。",
	"#olsbqiwu5": "食腐鼠之狸，安敢觊觎枝上之凤？",
	"#olsbqiwu6": "坐高处观月，远虫鸣之扰。",
	"#ol_sb_pangtong:die": "未与孔明把酒锦官城，恨也，恨也……",
	"#ol_sb_pangtong2:die": "卧龙凤雏，只可得其一……",
	"#ol_sb_pangtong3:die": "主公大业未成，统如何瞑目……",
	"#olsbzhuri1": "效逐日之夸父，怀忠志而长存。",
	"#olsbzhuri2": "知天命而不顺，履穷途而强为。",
	"#olsbranji1": "此身为薪，炬成灰亦昭大汉长明！",
	"#olsbranji2": "维之一腔骨血，可驱驰来北马否？",
	"#kunfen_ol_sb_jiangwei1": "虽千万人，吾往矣！",
	"#zhaxiang_ol_sb_jiangwei1": "亡国之将姜维，请明公驱驰。",
	"#ol_sb_jiangwei:die": "姜维姜维……又将何为？",
	"#xuanfeng_re_lingtong1": "短兵相接，让敌人丢盔弃甲！",
	"#xuanfeng_re_lingtong2": "攻敌不备，看他们闻风而逃！",
	"#olsbweilin1": "汝等鼠辈，岂敢与某相抗！",
	"#olsbweilin2": "义襄千里，威震华夏！",
	"#olsbduoshou1": "今日之敌，必死于我刀下！",
	"#olsbduoshou2": "青龙所向，战无不胜！",
	"#ol_sb_guanyu:die": "玉碎不改白，竹焚不毁节……",
	"#olsbdulie1": "秉同难共患之义，莫敢辞也。",
	"#olsbdulie2": "慈赴府君之急，死又何惧尔？",
	"#olsbdouchan1": "此时不捉孙策，更待何时！",
	"#olsbdouchan2": "有胆气者，都随我来！",
	"#ol_sb_taishici:die": "人生得遇知己，死又何憾……",
	"#olsbhetao1": "合诸侯之群力，扶大汉之将倾。",
	"#olsbhetao2": "猛虎啸于山野，群士执戈相待。",
	"#olsbhetao3": "合兵讨贼，其利断金！",
	"#olsbhetao_ol_sb_yuanshao_shadow1": "众将一心，战无不胜！",
	"#olsbhetao_ol_sb_yuanshao_shadow2": "秣马厉兵，今乃报国之时！",
	"#olsbhetao_ol_sb_yuanshao_shadow3": "齐心协力，缔三造大汉之举！",
	"#olsbshenli1": "沧海之水难覆，将倾之厦难扶。",
	"#olsbshenli2": "诸君心怀苟且，安能并力西向？",
	"#olsbshenli3": "联军离心，各逐其利。",
	"#olsbshenli_ol_sb_yuanshao_shadow1": "什么国恩大义，不过蔽履而已！",
	"#olsbshenli_ol_sb_yuanshao_shadow2": "本盟主的话，你是听还是不听？",
	"#olsbshenli_ol_sb_yuanshao_shadow3": "尔等皆为墙头草，随风而摆。",
	"#olsbyufeng1": "梦神人授剑，怀神兵济世。",
	"#olsbyufeng2": "哼！我剑也未尝不利！",
	"#olsbyufeng_ol_sb_yuanshao_shadow1": "士者，怎可徒手而战！",
	"#olsbshishou1": "今执牛耳，当为天下之先。",
	"#olsbshishou2": "士者不徒手而战，况其首乎。",
	"#olsbshishou3": "吾居群士之首，可配剑履否？",
	"#olsbshishou_ol_sb_yuanshao_shadow1": "剑来！",
	"#olsbshishou_ol_sb_yuanshao_shadow2": "今秉七尺之躯，不负三尺之剑！",
	"#olsbshishou_ol_sb_yuanshao_shadow3": "拔剑四顾，诸位识得我袁本初？",
	"#ol_sb_yuanshao:die": "众人合而无力，徒负大义也……",
	"#ol_sb_yuanshao_shadow:die": "袁氏凋零，皆我一人之罪……",
	"#ol_yufan:die": "唉，主公不能容我啊！",
	"#ol_jianyong:die": "此景竟无言以对……",
	
	// refresh
	"#huituo_re_caorui1": "谁有权利，谁就拥有天下。",
	"#huituo_re_caorui2": "严法度，以拓疆土。",
	"#remingjian1": "以卿之才学，何愁此战不胜。",
	"#remingjian2": "用人自当不疑，卿大可放心。",
	"#rexingshuai1": "有皇权在身，竟半点儿不自由。",
	"#rexingshuai2": "只要魏国还在，我定保你等周全。",
	"#re_caorui:die": "愧为人主，何颜见父……",
	"#zhuhai1": "善恶有报，天道轮回！",
	"#zhuhai2": "早知今日，何必当初！",
	"#qianxin1": "既遇明主，天下可图！",
	"#qianxin2": "弃武从文，安邦卫国！",
	"#re_xushu:die": "母亲……孩儿……尽孝来了……",
	"#xunxun1": "众将死战，非我之功。",
	"#xunxun2": "爱兵如子，胜乃可全。",
	"#wangxi1": "大丈夫，何拘小节。",
	"#wangxi2": "前尘往事，莫再提起。",
	"#re_lidian:die": "报国杀敌，虽死犹荣……",
	"#huomo_re_zhongyao1": "笔墨抒胸臆，妙手成汗青。",
	"#huomo_re_zhongyao2": "胸蕴大家之行，则下笔如有神助。",
	"#zuoding_re_zhongyao1": "腹有大才，可助阁下成事。",
	"#zuoding_re_zhongyao2": "胸有良策，可济将军之危。",
	"#re_zhongyao:die": "人有寿终日，笔有墨尽时……",
	"#rechengxiang1": "冲有一法，可得其重。",
	"#rechengxiang2": "待我细细算来。",
	"#renxin_re_caochong1": "见死而不救，非仁者所为。",
	"#renxin_re_caochong2": "遇难而不援，非我之道也。",
	"#re_caochong:die": "父亲，兄长……",
	"#olzhijian1": "君有恙，臣者当舍命除之。",
	"#olzhijian2": "臣有言在喉，不吐不快。",
	"#olguzheng1": "兴国为任，可驱百里之行。",
	"#olguzheng2": "固政之责，在君亦在臣。",
	"#ol_zhangzhang:die": "老臣年迈，无力为继……",
	"#rejiqiao1": "机关将作之术，在乎手巧心灵。",
	"#rejiqiao2": "机巧藏于心，亦如君之容。",
	"#relinglong1": "我夫所赠之玫，遗香自长存。",
	"#relinglong2": "心有玲珑罩，不殇春与秋。",
	"#re_jsp_huangyueying:die": "此心欲留夏，奈何秋风起……",
	"#qiangzhi_re_zhangsong1": "过目难忘，千载在我腹间。",
	"#qiangzhi_re_zhangsong2": "吾目为镜，可照世间文字。",
	"#rexiantu1": "此图载益州山水，请君纳之。",
	"#rexiantu2": "我献梧木一株，为引凤而来。",
	"#re_zhangsong:die": "恨未见使君，入主益州……",
	"#reanguo1": "非武不可安邦，非兵不可定国。",
	"#reanguo2": "天下纷乱，正是吾等用武之时。",
	"#re_zhuzhi:die": "刀在人在，刀折人亡……",
	"#reluoying_dc_caozhi1": "花落断情伤，心碎斩痴妄。",
	"#reluoying_dc_caozhi2": "流水不言恨，落英难解愁。",
	"#dcjiushi1": "花开易见落难寻。",
	"#dcjiushi2": "金樽盛清酒，烟景入诗篇。",
	"#dc_caozhi:die": "一生轻松待来生……",
	"#liegong_ol_huangzhong1": "龙骨成镞，矢破苍穹！",
	"#liegong_ol_huangzhong2": "凤翎为羽，箭没坚城！",
	"#ol_huangzhong:die": "末将，有负主公重托……",
	"#zhenwei_re_wenpin1": "想攻城，问过我没有？",
	"#zhenwei_re_wenpin2": "有我坐镇，我军焉能有失？",
	"#re_wenpin:die": "没想到，敌军的攻势如此凌厉……",
	"#fuhun_re_guanzhang1": "擎刀执矛，以效先父之法！",
	"#fuhun_re_guanzhang2": "苍天在上，儿必不堕父亲威名！",
	"#re_guanzhang:die": "马革裹尸，九泉之下无愧见父……",
	"#refuman1": "蛮夷畏威，杀之积怨，抚之怀德。",
	"#refuman2": "以威镇夷，宜抚之，勿戾之。",
	"#re_mazhong:die": "愿付此生，见汉蛮一家……",
	"#repindi1": "以九品论才，正是栋梁之谋。",
	"#repindi2": "置州郡中正，可为百年之政。",
	"#refaen_dc_chenqun1": "国法虽严，然不外乎于情。",
	"#refaen_dc_chenqun2": "律令如铁，亦有可商榷之处。",
	"#dc_chenqun:die": "吾身虽亡，然吾志当遗百年……",
	"#rekuangbi1": "江东多娇，士当弼国以全方圆。",
	"#rekuangbi2": "吴垒锦绣，卿当匡佐使延万年。",
	"#re_sundeng:die": "此别无期，此恨绵绵……",
	"#rebizhuan1": "笔书石碑以助群儒正道。",
	"#rebizhuan2": "正定六经是为天下之法。",
	"#retongbo1": "博览诗书通古圣之学。",
	"#retongbo2": "通读经典悟群贤之道。",
	"#re_caiyong:die": "乞受刑罚，以求继承汉史？",
	"#remingce1": "阁下若纳此谋，则大业可成也！",
	"#remingce2": "形势如此，将军可按计行事。",
	"#zhichi_re_chengong1": "不若先行退避，再做打算。",
	"#zhichi_re_chengong2": "敌势汹汹，不宜与其交锋。",
	"#re_chengong:die": "一步迟，步步迟啊！",
	"#reqice1": "攸已有妙计在胸，此事不足为虑。",
	"#reqice2": "主公勿虑，攸有奇策，可解此局。",
	"#rezhiyu1": "经达权变，大智若愚。",
	"#rezhiyu2": "微末伎俩，让阁下见笑了。",
	"#re_xunyou:die": "再不能替主公出谋了……",
	"#juece_dc_liru1": "乏谋少计，别做无谓挣扎了！",
	"#juece_dc_liru2": "缺兵少粮，看你还能如何应对？",
	"#dcmieji1": "欲成大事，当弃则弃，怎可优柔寡断？",
	"#dcmieji2": "所谓智斗，便是以兑子入局取势，而后成杀。",
	"#dcfencheng1": "堆薪聚垛，以燃焚天之焰！",
	"#dcfencheng2": "就让这熊熊烈焰，为尔等送葬！",
	"#dc_liru:die": "多行不义，必自毙……",
	"#refenli1": "兵威已振，怎能踟蹰不前？",
	"#refenli2": "敌势汹汹，自当奋勇以对。",
	"#repingkou1": "群寇蜂起，以军平之。",
	"#repingkou2": "所到之处，寇患皆平。",
	"#re_zhuhuan:die": "憾老死病榻，恨未马革裹尸……",
	"#qiangxi_ol_dianwei1": "典韦来也，谁敢一战。",
	"#qiangxi_ol_dianwei2": "双戟青罡，百死无生！",
	"#olninge1": "古之恶来，今之典韦！",
	"#olninge2": "宁为刀俎，不为鱼肉。",
	"#ol_dianwei:die": "为将者，怎可徒手而亡？",
	"#rejixu1": "辨坚识钝，可解充栋之牛！",
	"#rejixu2": "以锐欺虚，可击泰山之踵！",
	"#re_sp_taishici:die": "危而不救为怯，救而不得为庸……",
	"#xiansi_re_liufeng1": "此皆孟达之过也！",
	"#xiansi_re_liufeng2": "非我不救，实乃孟达谗言。",
	"#re_liufeng:die": "父亲，儿实无异心……",
	"#quhu_ol_xunyu1": "两虎相斗，旁观成败。",
	"#quhu_ol_xunyu2": "驱兽相争，坐收渔利。",
	"#oljieming1": "含气在胸，有进无退。",
	"#oljieming2": "蕴节于形，生死无惧。",
	"#ol_xunyu:die": "一招不慎，为虎所噬……",
	"#rezhanjue1": "千里锦绣江山，岂能拱手相让！",
	"#rezhanjue2": "先帝一生心血，安可坐以待毙！",
	"#reqinwang1": "大江潮来，怎无忠勇之士？",
	"#reqinwang2": "泰山倾崩，可有坚贞之臣？",
	"#re_liuchen:die": "儿欲死战，父亲何故先降？",
	"#dcyicong1": "恩义聚骠骑，百战从公孙！",
	"#dcyicong2": "义从呼啸至，白马抖精神！",
	"#dcqiaomeng1": "猛士骁锐，可慑百蛮失蹄！",
	"#dcqiaomeng2": "锐士志猛，可凭白手夺马！",
	"#dc_gongsunzan:die": "良弓断，白马亡……",
	"#reandong1": "青龙映木，星出其东则天下安。",
	"#reandong2": "以身涉险，剑伐不臣而定河东。",
	"#reyingshi1": "大势如潮，可应之而不可逆之。",
	"#reyingshi2": "应大势伐贼者，当以重酬彰之。",
	"#re_duji:die": "公无渡河，公竟渡河……",
	"#dcjianying1": "步步为营，缓缓而进。",
	"#dcjianying2": "以强击弱，何必心急？",
	"#dcshibei1": "宁向北而死，不面南而生。",
	"#dcshibei2": "主公在北，吾心亦在北！",
	"#re_jushou:die": "身处河南，魂归河北……",
	"#reqiaobian1": "顺势而变，则胜矣。",
	"#reqiaobian2": "万物变化，固无休息。",
	"#re_zhanghe:die": "何处之流矢……",
	"#rezhuhai1": "霜刃出鞘，诛恶方还。",
	"#rezhuhai2": "心有不平，拔剑相向。",
	"#xsqianxin1": "弃剑执笔，修习韬略。",
	"#xsqianxin2": "休武兴文，专研筹划。",
	"#dc_xushu:die": "忠孝之德，庶两者皆空……",
	"#decadexianzhen1": "精练整齐，每战必克！",
	"#decadexianzhen2": "陷阵杀敌，好不爽快！",
	"#decadejinjiu1": "好酒之徒，难堪大任，不入我营！",
	"#decadejinjiu2": "饮酒误事，必当严禁！",
	"#xin_gaoshun:die": "力尽于布，与之偕死……",
	"#rejiaozhao1": "事关社稷，万望阁下谨慎行事。",
	"#rejiaozhao2": "为续江山，还请爱卿仔细观之。",
	"#redanxin1": "殚精出谋，以保社稷。",
	"#redanxin2": "竭心筹划，求续魏统。",
	"#re_guohuanghou:die": "哀家愧对先帝……",
	"#reqiaoshi1": "暖风细雨，心有灵犀。",
	"#reqiaoshi2": "樵采城郭外，忽见郎君来。",
	"#reyanyu1": "边功未成，还请郎君努力。",
	"#reyanyu2": "郎君有意倾心诉，妾身心中相思埋。",
	"#re_xiahoushi:die": "天气渐寒，郎君如今安在？",
	"#olhaoshi1": "仗义疏财，深得人心。",
	"#olhaoshi2": "招聚少年，给其衣食。",
	"#oldimeng1": "深知其奇，相与亲结。",
	"#oldimeng2": "同盟之人，言归于好。",
	"#ol_lusu:die": "一生为国，纵死无憾……",
	"#wansha_re_jiaxu1": "有谁敢试试？",
	"#wansha_re_jiaxu2": "斩草务尽，以绝后患。",
	"#luanwu_re_jiaxu1": "一切都在我的掌控中！",
	"#luanwu_re_jiaxu2": "这乱世还不够乱！",
	"#reweimu1": "此伤与我无关。",
	"#reweimu2": "还是另寻他法吧。",
	"#re_jiaxu:die": "此劫，我亦有所算……",
	"#reshenxing1": "谋而后动，行不容差。",
	"#reshenxing2": "谋略之道，需慎之又慎。",
	"#rebingyi1": "秉持心性，心口如一。",
	"#rebingyi2": "秉忠职守，一生不事二主。",
	"#re_guyong:die": "君不可不慎呐……",
	"#xinquanji1": "操权弄略，舍小利而谋大局。",
	"#xinquanji2": "大丈夫行事，岂较一兵一将之得失？",
	"#xinzili1": "烧去剑阁八百里，蜀中自有一片天！",
	"#xinzili2": "天下风流出我辈，一遇风云便化龙。",
	"#xin_zhonghui:die": "这就是……自食恶果的下场吗？",
	"#reqieting1": "谋略未定，窃听以察先机。",
	"#reqieting2": "所见相同，何必畏我？",
	"#rexianzhou1": "举州请降，高枕无忧。",
	"#rexianzhou2": "州固可贵，然不及我儿安危。",
	"#re_caifuren:die": "枉费妾身机关算尽……",
	"#relongyin1": "风云将起，龙虎齐鸣！",
	"#relongyin2": "武圣龙威，破敌无惧！",
	"#jiezhong1": "犯我疆土者，竭忠尽节以灭之。",
	"#jiezhong2": "竭力尽能以立功于国，忠心不二。",
	"#re_guanping:die": "黄泉路远，儿愿为父亲牵马执鞭……",
	"#rejigong1": "此时不战，更待何时！",
	"#rejigong2": "箭在弦上，不得不发！",
	"#shifei_re_guotufengji1": "若依吾计而行，许昌旦夕可破！",
	"#shifei_re_guotufengji2": "先锋怯战，非谋策之过。",
	"#re_guotufengji:die": "主公，我还有一计啊！",
	"#rezhongyong1": "赤兔北奔，马踏鼠胆之辈！",
	"#rezhongyong2": "青龙夜照，刀斩悖主之贼！",
	"#re_zhoucang:die": "愿随将军赴死！",
	"#juxiang1_ol_zhurong1": "巨象冲锋，踏平敌阵！",
	"#juxiang1_ol_zhurong2": "南兵象阵，刀枪不入！",
	"#lieren_ol_zhurong1": "烈火飞刃，例无虚发！",
	"#lieren_ol_zhurong2": "烈刃一出，谁与争锋？",
	"#changbiao1": "长标如虹，以伐蜀汉！",
	"#changbiao2": "长标在此，谁敢拦我？",
	"#ol_zhurong:die": "这汉人，竟……如此厉害……",
	"#rejueqing1": "不知情之所起，亦不知情之所终。",
	"#rejueqing2": "唯有情字最伤人！",
	"#reshangshi1": "半生韶华随流水，思君不见撷落花。",
	"#reshangshi2": "西风知我意，送我三尺秋。",
	"#re_zhangchunhua:die": "仲达负我！",
	"#rehuaiyi1": "曹刘可王，孤亦可王！",
	"#rehuaiyi2": "汉失其鹿，天下豪杰当共逐之。",
	"#re_gongsunyuan:die": "大星落，君王死……",
	"#residi1": "总算困住你了！",
	"#residi2": "你出得了手吗？",
	"#re_caozhen:die": "未竟之业，请你们务必继续！",
	"#rezhuikong1": "曹贼！你怎可如此不尊汉室！",
	"#rezhuikong2": "密信之事，不可被曹贼知晓。",
	"#reqiuyuan1": "陛下，我不想离开。",
	"#reqiuyuan2": "将军此事，可有希望。",
	"#re_fuhuanghou:die": "这幽禁之地，好冷……",
	"#reenyuan1": "善因得善果，恶因得恶报！",
	"#reenyuan2": "私我者赠之琼瑶，厌我者报之斧钺！",
	"#rexuanhuo1": "光以眩目，言以惑人。",
	"#rexuanhuo2": "我法孝直如何会害你？",
	"#re_fazheng:die": "恨未得见吾主，君临天下……",
	"#xuanfeng_xin_lingtong1": "风动扬帆起，枪出敌军溃！",
	"#xuanfeng_xin_lingtong2": "御风而动，敌军四散！",
	"#yongjin_xin_lingtong1": "鏖兵卫主，勇足以却敌！",
	"#yongjin_xin_lingtong2": "勇不可挡，进则无退！",
	"#xin_lingtong:die": "风萧而力去，风残……而力尽……",
	"#decadezishou1": "恩威并著，从容自保！",
	"#decadezishou2": "据有荆州，以观世事！",
	"#decadezongshi1": "汉室江山，气数未尽！",
	"#decadezongshi2": "我刘氏一族，皆海内之俊杰也！",
	"#xin_liubiao:die": "人心不古！",
	"#reqingxi1": "虎豹骑倾巢而动，安有不胜之理？",
	"#reqingxi2": "任尔等固若金汤，虎豹骑可破之！",
	"#re_caoxiu:die": "奈何痈发背薨！",
	"#reyanzhu1": "觥筹交错，杀人于无形！",
	"#reyanzhu2": "子烈设宴，意在汝项上人头！",
	"#rexingxue1": "案古置学官，以敦王化，以隆风俗。",
	"#rexingxue2": "志善好学，未来可期！",
	"#re_sunxiu:die": "盛世未成，实为憾事！",
	"#oltuntian1": "兵农一体，以屯养战。",
	"#oltuntian2": "垦田南山，志在西川。",
	"#olzaoxian1": "良田厚土，足平蜀道之难！",
	"#olzaoxian2": "效仿五丁开川，赢粮直捣黄龙！",
	"#ol_dengai:die": "钟会！你为何害我！",
	"#qiaomeng1": "秣马厉兵，枕戈待战。",
	"#qiaomeng2": "夺敌辎重，以为己用。",
	"#reyicong1": "变阵冲轭，以守代攻。",
	"#reyicong2": "列阵锋矢，直取要害。",
	"#re_gongsunzan:die": "皇图霸业梦，付之，一炬中……",
	"#rejunxing1": "严法尚公，岂分贵贱而异施？",
	"#rejunxing2": "情理可容之事，法未必能容！",
	"#yuce_re_manchong1": "骄之以利，示之以慑！",
	"#yuce_re_manchong2": "虽举得于外，则福生于内矣。",
	"#re_manchong:die": "宠一生为公，无愧忠俭之节……",
	"#zhiyan_xin_yufan1": "此事，臣有一言要讲。",
	"#zhiyan_xin_yufan2": "还望将军听我一言。",
	"#xinzongxuan1": "天命所定，乃天数之法。",
	"#xinzongxuan2": "因果循坏，已有定数。",
	"#xin_yufan:die": "若听谏言，何至如此……",
	"#dcanxu1": "温言呢喃，消君之愁。",
	"#dcanxu2": "吴侬软语，以解君忧。",
	"#dczhuiyi1": "别后庭中树，相思几度攀。",
	"#dczhuiyi2": "空馀宫阙恨，因此寄相思。",
	"#dc_bulianshi:die": "还请至尊多保重……",
	"#reshenduan1": "行军断策需慎之又慎！",
	"#reshenduan2": "为将者务当慎行谨断！",
	"#reyonglve1": "兵势勇健，战胜攻取，无不如志！",
	"#reyonglve2": "雄才大略，举无遗策，威震四海！",
	"#re_hanhaoshihuan:die": "末将愧对主公知遇之恩！",
	"#reduodao1": "避其锋芒，夺其兵刃！",
	"#reduodao2": "好兵器啊！哈哈哈！",
	"#reanjian1": "看我一箭索命！",
	"#reanjian2": "明枪易躲，暗箭难防！",
	"#re_panzhangmazhong:die": "埋伏得这么好，怎会……",
	"#zhenlie_re_wangyi1": "女子，亦可有坚贞气节！",
	"#zhenlie_re_wangyi2": "品德端正，心中不移。",
	"#miji_re_wangyi1": "秘计已成，定助夫君得胜。",
	"#miji_re_wangyi2": "秘计在此，将军必凯旋而归。",
	"#re_wangyi:die": "秘计不成，此城难守……",
	"#reqianxi1": "暗影深处，袭敌斩首！",
	"#reqianxi2": "哼，出不了牌了吧？",
	"#re_madai:die": "丞相临终使命，岱已达成……",
	"#decadepojun1": "奋身出命，为国建功！",
	"#decadepojun2": "披甲持戟，先登陷陈！",
	"#xin_xusheng:die": "文向已无憾矣！",
	"#tianyi_re_taishici1": "天降大任，速战解围！",
	"#tianyi_re_taishici2": "义不从之，天必不佑！",
	"#hanzhan1": "伯符，且与我一战！",
	"#hanzhan2": "与君酣战，快哉快哉！",
	"#re_taishici:die": "无妄之灾，难以避免……",
	"#resanyao1": "蜚短流长，以基所毁，敌军自溃。",
	"#resanyao2": "群言谣混，积是成非！",
	"#zhiman_re_masu1": "断其粮草，不战而胜！",
	"#zhiman_re_masu2": "用兵之道，攻心为上！",
	"#re_masu:die": "谡虽死无恨于黄壤也……",
	"#rechanhui1": "萋兮斐兮，谋欲谮人！",
	"#rechanhui2": "稍稍谮毁，万劫不复！",
	"#rejiaojin1": "凭汝之力，何不自鉴？",
	"#rejiaojin2": "万金之躯，岂容狎侮！",
	"#re_sunluban:die": "谁敢动哀家一根寒毛！",
	"#xingongji1": "马踏飞箭，弓骑无双！",
	"#xingongji2": "提弓上马，箭砺八方！",
	"#xinjiefan1": "烦忧千万，且看我一刀解之。",
	"#xinjiefan2": "莫道雄兵属北地，解烦威名天下扬。",
	"#xin_handang:die": "三石雕弓今尤在，不见当年挽弓人……",
	"#decadezhenjun1": "奉令无犯，当敌制决！",
	"#decadezhenjun2": "质中性一，守执节义，自当无坚不陷。",
	"#yujin_yujin:die": "如今临危处难，却负丞相三十年之赏识，唉……",
	"#xinjiangchi1": "率师而行，所向皆破！",
	"#xinjiangchi2": "数从征伐，志意慷慨，不避险阻！",
	"#re_caozhang:die": "奈何病薨！",
	"#lihuo_re_chengpu1": "叛军者，非烈火灼身难泄吾恨。",
	"#lihuo_re_chengpu2": "投敌于火，烧炙其身，皮焦肉烂！",
	"#rechunlao1": "醉里披甲执坚，梦中杀敌破阵。",
	"#rechunlao2": "醇醪须与明君饮，沙场无还亦不悔。",
	"#re_chengpu:die": "病疠缠身，终天命难违……",
	"#xinyaoming1": "养威持重，不营小利。",
	"#xinyaoming2": "则天而行，作功邀名。",
	"#re_quancong:die": "患难可共济，生死……不同当……",
	"#dangxian_re_liaohua1": "竭诚当先，一举克定！",
	"#dangxian_re_liaohua2": "一马当先，奋勇杀敌！",
	"#xinfuli1": "匡扶汉室，死而后已！",
	"#xinfuli2": "一息尚存，不忘君恩！",
	"#re_liaohua:die": "汉室，气数已尽……",
	"#decadejingce1": "精细入微，策敌制胜。",
	"#decadejingce2": "妙策如神，精兵强将，安有不胜之理？",
	"#re_guohuai:die": "岂料姜维……空手接箭！",
	"#xinbenxi1": "北伐曹魏，以弱制强！",
	"#xinbenxi2": "引军汉中，以御敌袭！",
	"#re_wuyi:die": "远道疲敝，寡不敌众，唉！",
	"#xindanshou1": "胆识过人而劲勇，则见敌无所畏惧！",
	"#xindanshou2": "胆守有余，可堪大任！",
	"#re_zhuran:die": "真不愧是……常胜将军……",
	"#xinlianhuan_ol_pangtong1": "连环之策，攻敌之计。",
	"#xinlianhuan_ol_pangtong2": "锁链连舟，困步难行。",
	"#olniepan1": "烈火脱胎，涅槃重生。",
	"#olniepan2": "破而后立，方有大成。",
	"#ol_pangtong:die": "骥飞羽落，坡道归尘……",
	"#rewurong1": "策略以入算，果烈以立威！",
	"#rewurong2": "诈与和亲，不攻可得！",
	"#reshizhi1": "护汉成勋业，矢志报国恩。",
	"#reshizhi2": "怀精忠之志，坦赤诚之心。",
	"#re_zhangyi:die": "挥师未捷，杀身以报！",
	"#xinganlu1": "纳采问名，而后交换文定。",
	"#xinganlu2": "兵戈相向，何如化戈为帛？",
	"#xinbuyi1": "有老身在，阁下勿忧。",
	"#xinbuyi2": "如此佳婿，谁敢伤之？",
	"#xin_wuguotai:die": "爱女已去，老身何存？",
	"#rejianxiong1": "燕雀，安知鸿鹄之志！",
	"#rejianxiong2": "夫英雄者，胸怀大志，腹有良谋！",
	"#hujia_re_caocao1": "大胆逆贼，谁可擒之！",
	"#hujia_re_caocao2": "护卫何在！",
	"#re_caocao:die": "华佗何在？……",
	"#refankui1": "哼，自作孽不可活！",
	"#refankui2": "哼，正中下怀！",
	"#reguicai1": "天命难违？哈哈哈哈哈……",
	"#reguicai2": "才通天地，逆天改命！",
	"#re_simayi:die": "我的气数，就到这里了么？",
	"#tiandu_re_guojia1": "天意如此。",
	"#tiandu_re_guojia2": "那，就这样吧。",
	"#reyiji1": "锦囊妙策，终定社稷。",
	"#reyiji2": "依此计行，辽东可定。",
	"#re_guojia:die": "咳，咳咳咳……",
	"#retuxi1": "快马突袭，占尽先机！",
	"#retuxi2": "马似飞影，枪如霹雳！",
	"#re_zhangliao:die": "被敌人占了先机……呃……",
	"#reluoyi1": "过来打一架，对，就是你！",
	"#reluoyi2": "废话少说，放马过来吧！",
	"#re_xuzhu:die": "丞相，末将尽力了……",
	"#reganglie1": "伤我者，十倍奉还！",
	"#reganglie2": "哪个敢动我！",
	"#qingjian1": "钱财，乃身外之物。",
	"#qingjian2": "福生于清俭，德生于卑退。",
	"#re_xiahoudun:die": "诸多败绩，有负丞相重托……",
	"#paoxiao_re_zhangfei1": "喝啊！",
	"#paoxiao_re_zhangfei2": "今，必斩汝马下！",
	"#retishen1": "谁，还敢过来一战？！",
	"#retishen2": "欺我无谋？定要尔等血偿！",
	"#re_zhangfei:die": "桃园一拜，此生……无憾……",
	"#longdan_sha_re_zhaoyun1": "龙威虎胆，斩敌破阵！",
	"#longdan_sha_re_zhaoyun2": "进退自如，游刃有余！",
	"#reyajiao1": "策马驱前，斩敌当先！",
	"#reyajiao2": "遍寻天下，但求一败！",
	"#re_zhaoyun:die": "你们谁……还敢再上……",
	"#wusheng_re_guanyu1": "刀锋所向，战无不克！",
	"#wusheng_re_guanyu2": "逆贼，哪里走！",
	"#yijue1": "恩已断，义当绝！",
	"#yijue2": "关某，向来恩怨分明！",
	"#re_guanyu:die": "桃园一拜，恩义常在……",
	"#retieji1": "目标敌阵，全军突击！",
	"#retieji2": "敌人阵型已乱，随我杀！",
	"#re_machao:die": "请将我，葬在西凉……",
	"#reyingzi1": "哈哈哈哈哈哈哈哈……！",
	"#reyingzi2": "伯符，且看我这一手！",
	"#refanjian1": "与我为敌，就当这般生不如死！",
	"#refanjian2": "抉择吧！在苦与痛的地狱中！",
	"#re_zhouyu:die": "既生瑜，何生亮！……既生瑜，何生亮……！",
	"#keji_re_lvmeng1": "蓄力待时，不争首功。",
	"#keji_re_lvmeng2": "最好的机会，还在等着我。",
	"#qinxue1": "勤以修身，学以报国。",
	"#qinxue2": "兵书熟读，了然于胸。",
	"#botu1": "今日起兵，渡江攻敌！",
	"#botu2": "时机已到，全军出击！",
	"#re_lvmeng:die": "你，给我等着！",
	"#qixi_re_ganning1": "弟兄们，准备动手！",
	"#qixi_re_ganning2": "你用不了这么多了！",
	"#fenwei1": "哼！敢欺我东吴无人。",
	"#fenwei2": "奋勇当先，威名远扬！",
	"#re_ganning:die": "别管我，继续上！",
	"#reqianxun1": "满招损，谦受益。",
	"#reqianxun2": "谦谦君子，温润如玉。",
	"#relianying1": "生生不息，源源不绝。",
	"#relianying2": "失之淡然，得之坦然。",
	"#re_luxun:die": "我的未竟之业……",
	"#reguose1": "旅途劳顿，请下马休整吧~",
	"#reguose2": "还没到休息的时候！",
	"#liuli_re_daqiao1": "伯符不在身边，我要自己保重！",
	"#liuli_re_daqiao2": "帮帮人家嘛~",
	"#re_daqiao:die": "伯符，再也没人能欺负我了……",
	"#rekurou1": "我这把老骨头，不算什么！",
	"#rekurou2": "为成大义，死不足惜！",
	"#zhaxiang1": "铁锁连舟而行，东吴水师可破！",
	"#zhaxiang2": "两军阵前，不斩降将！",
	"#re_huanggai:die": "盖，有负公瑾重托……",
	"#wushuang_re_lvbu1": "三个齐上，也不是我的对手！",
	"#wushuang_re_lvbu2": "还有哪个敢挑战我！？",
	"#liyu1": "人不为己，天诛地灭。",
	"#liyu2": "大丈夫，相时而动。",
	"#re_lvbu:die": "我竟然输了……不可能！",
	"#jijiu_re_huatuo1": "妙手仁心，药到病除。",
	"#jijiu_re_huatuo2": "救死扶伤，悬壶济世。",
	"#new_reqingnang1": "舒活筋络，方解病痛之苦。",
	"#new_reqingnang2": "悬丝诊脉，顽疾可医。",
	"#re_huatuo:die": "生老病死，命不可违……",
	"#rerende1": "施仁布泽，乃我大汉立国之本！",
	"#rerende2": "同心同德，救困扶危！",
	"#jijiang1_re_liubei1": "哪位将军，替我拿下此贼！",
	"#jijiang1_re_liubei2": "欺我军无人乎？！",
	"#re_liubei:die": "汉室未兴，祖宗未耀，朕实不忍此时西去……",
	"#lijian_re_diaochan1": "赢家，才能得到我~",
	"#lijian_re_diaochan2": "这场比赛，将军可要赢哦~",
	"#rebiyue1": "梦蝶幻月，如沫虚妄。",
	"#rebiyue2": "水映月明，芙蓉照倩影。",
	"#re_diaochan:die": "我的任务，终于完成了……",
	"#rejizhi1": "得上通，智集心。",
	"#rejizhi2": "集万千才智，致巧趣鲜用。",
	"#re_huangyueying:die": "我的面容，有吓到你吗？",
	"#rezhiheng1": "制衡互牵，大局可安。",
	"#rezhiheng2": "不急不躁，稳谋应对。",
	"#rejiuyuan1": "你们真是朕的得力干将。",
	"#rejiuyuan2": "有爱卿在，朕无烦忧。",
	"#re_sunquan:die": "锦绣江东，岂能失于我手……",
	"#xiaoji_re_sunshangxiang1": "剑利弓急，你可打不过我的。",
	"#xiaoji_re_sunshangxiang2": "我会的武器，可多着呢。",
	"#rejieyin1": "得遇夫君，妾身福分。",
	"#rejieyin2": "随夫嫁娶，宜室宜家。",
	"#re_sunshangxiang:die": "哎呀，这次弓箭射歪了……",
	"#reluoshen1": "屏翳收风，川后静波。",
	"#reluoshen2": "冯夷鸣鼓，女娲清歌。",
	"#reqingguo1": "肩若削成，腰如约素。",
	"#reqingguo2": "延颈秀项，皓质呈露。",
	"#re_zhenji:die": "出亦复何苦，入亦复何愁……",
	"#guanxing_re_zhugeliang1": "天星之变，吾窥探一二。",
	"#guanxing_re_zhugeliang2": "星途莫测，细细推敲。",
	"#kongcheng1_re_zhugeliang1": "淡然相对，转危为安。",
	"#kongcheng1_re_zhugeliang2": "绝处逢生，此招慎用。",
	"#re_zhugeliang:die": "穷尽毕生，有憾无悔……",
	"#new_reyaowu1": "有吾在此，解太师烦忧。",
	"#new_reyaowu2": "这些杂兵，我有何惧！",
	"#shizhan1": "看你能坚持几个回合！",
	"#shizhan2": "兀那汉子，且报上名来！",
	"#re_huaxiong:die": "我掉以轻心了……",
	"#xinleiji1": "疾雷迅电，不可趋避！",
	"#xinleiji2": "雷霆之诛，灭军毁城！",
	"#xinguidao1": "汝之命运，吾来改之！",
	"#xinguidao2": "鬼道运行，由我把控！",
	"#xinhuangtian2_re_zhangjiao1": "天书庇佑，黄巾可兴！",
	"#xinhuangtian2_re_zhangjiao2": "黄天法力，万军可灭！",
	"#re_zhangjiao:die": "天书无效，人心难聚……",
	"#reguhuo1": "这牌，猜对了吗？",
	"#reguhuo2": "真真假假，虚实难测。",
	"#xin_yuji:die": "符水失效，此病难医……",
	"#rehuashen1": "容貌发肤，不过浮尘。",
	"#rehuashen2": "皮囊万千，吾皆可化。",
	"#rexinsheng1": "枯木发荣，朽木逢春。",
	"#rexinsheng2": "风靡云涌，万丈光芒。",
	"#re_zuoci:die": "红尘看破，驾鹤仙升……",
	"#shensu1_ol_xiahouyuan1": "健步如飞，破敌不备！",
	"#shensu1_ol_xiahouyuan2": "奔逸绝尘，不留踪影！",
	"#shebian1": "随机应变，临机设变！",
	"#shebian2": "设变力战，虏敌千万！",
	"#ol_xiahouyuan:die": "我的速度，还是不够……",
	"#xinjushou1": "兵精粮足，守土一方。",
	"#xinjushou2": "坚守此地，不退半步。",
	"#xinjiewei1": "化守为攻，出奇制胜！",
	"#xinjiewei2": "坚壁清野，以挫敌锐！",
	"#caoren:die": "长江以南，再无王土矣……",
	"#kuanggu_ol_weiyan1": "反骨狂傲，彰显本色！",
	"#kuanggu_ol_weiyan2": "只有战场，能让我感到兴奋！",
	"#reqimou1": "勇战不如奇谋。",
	"#reqimou2": "为了胜利，可以出其不意！",
	"#ol_weiyan:die": "这次失败，意料之中……",
	"#tianxiang_ol_xiaoqiao1": "你岂会懂我的美丽？",
	"#tianxiang_ol_xiaoqiao2": "碧玉闺秀，只可远观。",
	"#rehongyan1": "红颜娇花好，折花门前盼。",
	"#rehongyan2": "我的容貌，让你心动了吗？",
	"#piaoling1": "清风拂枝，落花飘零。",
	"#piaoling2": "花自飘零水自流。",
	"#ol_xiaoqiao:die": "同心而离居，忧伤以终老……",
	"#zhoutai:die": "敌众我寡，无力回天……",
	"#rejianchu1": "你这身躯，怎么能快过我？",
	"#rejianchu2": "这些怎么能挡住我的威力！",
	"#ol_pangde:die": "人亡马倒，命之所归……",
	"#olduanliang1": "兵行无常，计行断粮。",
	"#olduanliang2": "焚其粮营，断其粮道。",
	"#oljiezi1": "剪径截辎，馈泽同袍。",
	"#oljiezi2": "截敌粮草，以资袍泽。",
	"#ol_xuhuang:die": "亚夫易老，李广难封……",
	"#bazhen_ol_sp_zhugeliang1": "八阵连心，日月同辉。",
	"#bazhen_ol_sp_zhugeliang2": "此阵变化，岂是汝等可解？",
	"#rehuoji_ol_sp_zhugeliang1": "东风，让这火烧得再猛烈些吧！",
	"#rehuoji_ol_sp_zhugeliang2": "赤壁借东风，燃火灭魏军。",
	"#rekanpo_ol_sp_zhugeliang1": "还有什么是我看不破的？",
	"#rekanpo_ol_sp_zhugeliang2": "此计奥妙，我已看破。",
	"#cangzhuo1": "藏巧于拙，用晦而明。",
	"#cangzhuo2": "寓清于浊，以屈为伸。",
	"#ol_sp_zhugeliang:die": "星途半废，夙愿未完……",
	"#olshuangxiong1": "吾执矛，君执槊，此天下可有挡我者？",
	"#olshuangxiong2": "兄弟协力，定可于乱世纵横！",
	"#ol_yanwen:die": "双雄皆陨，徒隆武圣之名……",
	"#olluanji1": "我的箭支，准备颇多！",
	"#olluanji2": "谁都挡不住，我的箭阵！",
	"#olxueyi1": "高贵名门，族裔盛名。",
	"#olxueyi2": "贵裔之脉，后起之秀！",
	"#ol_yuanshao:die": "孟德此计，防不胜防……",
	"#huoshou1_re_menghuo1": "啸据哀牢，闻祸而喜！",
	"#huoshou1_re_menghuo2": "坐据三山，蛮霸四野！",
	"#rezaiqi1": "挫而弥坚，战而弥勇！",
	"#rezaiqi2": "蛮人骨硬，其势复来！",
	"#re_menghuo:die": "勿再放我，但求速死！",
	"#oljiuchi1": "好酒，痛快！",
	"#oljiuchi2": "某，千杯不醉！",
	"#roulin_ol_dongzhuo1": "醇酒美人，幸甚乐甚！",
	"#roulin_ol_dongzhuo2": "这些美人，都可进贡。",
	"#benghuai_ol_dongzhuo1": "何人伤我？",
	"#benghuai_ol_dongzhuo2": "酒色伤身呐……",
	"#olbaonue1": "天下群雄，唯我独尊！",
	"#olbaonue2": "吾乃人屠，当以兵为贡。",
	"#ol_dongzhuo:die": "地府……可有美人乎？",
	"#wulie1": "孙武之后，英烈勇战。",
	"#wulie2": "兴义之中，忠烈之名。",
	"#ol_sunjian:die": "袁术之辈，不可共谋！",
	"#rexingshang1": "群燕辞归鹄南翔，念君客游思断肠。",
	"#rexingshang2": "霜露纷兮文下，木叶落兮凄凄。",
	"#refangzhu1": "国法不可废耳，汝先退去。",
	"#refangzhu2": "将军征战辛苦，孤当赠以良宅。",
	"#songwei2_re_caopi1": "藩屏大宗，御侮厌难！",
	"#songwei2_re_caopi2": "朕，承符运，终受革命！",
	"#re_caopi:die": "建平所言八十，谓昼夜也，吾其决矣……",
	"#tiaoxin_ol_jiangwei1": "会闻用师，观衅而动。",
	"#tiaoxin_ol_jiangwei2": "宜乘其衅会，以挑敌将。",
	"#olzhiji1": "丞相遗志，不死不休！",
	"#olzhiji2": "大业未成，矢志不渝！",
	"#ol_jiangwei:die": "星散流离……",
	"#beige_ol_caiwenji1": "箜篌鸣九霄，闻者心俱伤。",
	"#beige_ol_caiwenji2": " 琴弹十八拍，听此双泪流。",
	"#duanchang_ol_caiwenji1": "红颜留塞外，愁思欲断肠。",
	"#duanchang_ol_caiwenji2": "莫吟苦辛曲，此生谁忍闻。",
	"#ol_caiwenji:die": "飘飘外域里，何日能归乡？",
	"#xiangle_ol_liushan1": "嘿嘿嘿，还是玩耍快乐。",
	"#xiangle_ol_liushan2": "美好的日子，应该好好享受。",
	"#olfangquan1": "蜀汉有相父在，我可安心。",
	"#olfangquan2": "这些事情，你们安排就好。",
	"#olruoyu1": "若愚故泰，巧骗众人。",
	"#olruoyu2": "愚昧者，非真傻也。",
	"#ol_liushan:die": "将军英勇，我……我投降……",
	"#jiang_re_sunce1": "收合流散，东据吴会。",
	"#jiang_re_sunce2": "策虽暗稚，窃有微志。",
	"#olhunzi1": "江东新秀，由此崛起！",
	"#olhunzi2": "看汝等大展英气！",
	"#olzhiba1": "让将军在此恭候多时了。",
	"#olzhiba2": "有诸位将军在，此战岂会不胜？",
	"#re_sunce:die": "汝等，怎能受于吉蛊惑？",
	"#jyzongshi_re_jianyong1": "能断大事者，不拘小节。",
	"#jyzongshi_re_jianyong2": "闲暇自得，威仪不肃。",
	"#re_jianyong:die": "此景竟无言以对……",
	"#rexianzhen1": "陷阵之志，有死无生！",
	"#rexianzhen2": "攻则破城，战则克敌。",
	"#rejinjiu1": "耽此黄汤，岂不误事？",
	"#rejinjiu2": "陷阵营中，不可饮酒。",
	"#regongji1": "射石饮羽，弦无虚发！",
	"#regongji2": "驭马前行，弓急弦发！",
	"#repolu1": "斩敌复城，扬我江东军威！",
	"#jianyan1": "开言纳谏，社稷之福。",
	"#jianyan2": "如此如此，敌军自破！",
	"#wusheng_re_guanzhang1": "青龙驰骋，恍若汉寿再世。",
	"#wusheng_re_guanzhang2": "偃月幽光，恰如武圣冲阵。",
	"#paoxiao_re_guanzhang1": "桓侯之子，当效父之勇烈！",
	"#paoxiao_re_guanzhang2": "蛇矛在手，谁敢与我一战！",
	"#rejianyan1": "此人之才，胜吾十倍。",
	"#rejianyan2": "先生大才，请受此礼。",
	"#xinpaiyi1": "蜀川三千里，皆由我一言决之！",
	"#xinpaiyi2": "顺我者，封侯拜将；逆我者，斧钺加身！",
	"#jixi_ol_dengai1": "良田为济，神兵天降！",
	"#jixi_ol_dengai2": "明至剑阁，暗袭蜀都！",
	"#bazhen_ol_pangtong1": "八卦四象，阴阳运转。",
	"#bazhen_ol_pangtong2": "离火艮山，皆随我用。",
	"#rehuoji_ol_pangtong1": "火烧赤壁，曹贼必败。",
	"#rehuoji_ol_pangtong2": "火计诱敌，江水助势。",
	"#rekanpo_ol_pangtong1": "这些小伎俩，逃不出我的眼睛！",
	"#rekanpo_ol_pangtong2": "卧龙之才，吾也略懂。",
	"#gongxin_re_lvmeng1": "哼，早知如此。",
	"#gongxin_re_lvmeng2": "洞若观火，运筹帷幄。",
	"#rechanyuan1": "此咒甚重，怨念缠身。",
	"#rechanyuan2": "不信吾法，无福之缘。",
	"#guanxing_ol_jiangwei1": "星象相弦，此乃吉兆！",
	"#guanxing_ol_jiangwei2": "星之分野，各有所属。",
	"#jijiang1_ol_liushan1": "爱卿爱卿，快来护驾！",
	"#jijiang1_ol_liushan2": "将军快替我，拦下此贼！",
	"#sishu1": "蜀乐乡土，怎不思念？",
	"#sishu2": "思乡心切，徘徊惶惶。",
	"#reyingzi_re_sunce1": "得公瑾辅助，策必当一战！",
	"#reyingzi_re_sunce2": "公瑾在此，此战无忧！",
	"#yinghun_re_sunce1": "东吴繁盛，望父亲可知。",
	"#yinghun_re_sunce2": "父亲，吾定不负你期望！",
	
	// sb
	"#sbhuanshi1": "济危以仁，泽国生春。",
	"#sbhuanshi2": "谏而不犯，正而不毅。",
	"#sbhongyuan1": "舍己之私，援君之危急！",
	"#sbhongyuan2": "身为萤火之光，亦当照于天下！",
	"#sbmingzhe1": "事事不求成功，但求尽善尽全。",
	"#sbmingzhe2": "明可查冒进之失，哲以避险躁之性。",
	"#sb_zhugejin:die": "君臣相托，生死不渝……",
	"#sbgongqi1": "敌寇首级，且看吾一箭取之。",
	"#sbgongqi2": "末将尤善骑射，今示于主公一观。",
	"#sbjiefan1": "一箭可解之事，何使公忧烦至此。",
	"#sbjiefan2": "贼盛不畏惧，有吾解烦营。",
	"#sb_handang:die": "吾子难堪大用，主公，勿以重任相托……",
	"#sbqiaomeng1": "观今天下，何有我义从之敌。",
	"#sbqiaomeng2": "众将征战所得，皆为汝等所有。",
	"#sbyicong1": "尔等性命，皆在吾甲骑之间。",
	"#sbyicong2": "围以疲敌，不做无谓之战。",
	"#sb_gongsunzan:die": "称雄半生，岂可为他人俘虏，啊啊啊……",
	"#sbwansha1": "世人皆行殊途，于死亦有同归！",
	"#sbwansha2": "九幽泉下，是你最好的归宿。",
	"#sbluanwu1": "降则任人鱼肉，竭战或可保生！",
	"#sbluanwu2": "一将功成需万骨，何妨多添此一城！",
	"#sbluanwu3": "人之道，损不足以奉有余！",
	"#sbluanwu4": "寒烟起于朽木，白骨亦可生花！",
	"#sbweimu1": "执棋之人，不可入局者共论！",
	"#sbweimu2": "世有千万门法，与我均无纠葛。",
	"#sbweimu3": "方圆之间，参透天地万物心！",
	"#sbweimu4": "帐前独知形表，幕后可见人心！",
	"#sb_jiaxu:die": "踽踽黄泉，与吾行世又有何异？",
	"#sbqianxun1": "虽有戈矛之刺，不如恭俭之利也。",
	"#sbqianxun2": "贤者任重而行恭，知者功大而辞顺。",
	"#sblianying1": "蜀营连绵百里，正待吾燎原一炬！",
	"#sblianying2": "蜀军虚实已知，吾等不日便破也。",
	"#sb_luxun:die": "心淤岂容有污，今唯以死自证……",
	"#sbxianzhen1": "陷阵营中，皆是以一敌百之士！",
	"#sbxianzhen2": "军令既出，使命必完！",
	"#sbjinjiu1": "军规严戒，不容稍纵形骸！",
	"#sbjinjiu2": "黄汤乱军误事，不可不禁！",
	"#sb_gaoshun:die": "宁为断头鬼，不当受降虏……",
	"#sbganglie1": "一军之帅，岂惧暗箭之伤。",
	"#sbganglie2": "宁陨沙场，不容折悔。",
	"#sbqingjian1": "如今乱世，还是当以俭治军。",
	"#sbqingjian2": "浮奢之举，非是正道。",
	"#sb_xiahoudun:die": "急攻盲进，实是有愧丞相……",
	"#sbquhu1": "驱他山之虎，抗近身之豺。",
	"#sbquhu2": "引狼喰虎，待虎吞狼。",
	"#sbjieming1": "守誓心之节，达百里之命。",
	"#sbjieming2": "成佐王定策之功，守殉国忘身之节。",
	"#sb_xunyu:die": "北风化王境，空萦荀令香……",
	"#sbxingshang1": "纵是身死，仍要为我所用。",
	"#sbxingshang2": "汝九泉之下，定会感朕之情。",
	"#sbfangzhu1": "战败而降，辱我国威，岂能轻饶！",
	"#sbfangzhu2": "此等过错，不杀已是承了朕恩。",
	"#sbsongwei1": "江山锦绣，尽在朕手。",
	"#sbsongwei2": "成功建业，扬我魏威。",
	"#sb_caopi:die": "大魏如何踏破吴蜀，就全看叡儿了……",
	"#sbwusheng1": "千军斩将而回，于某又有何难？",
	"#sbwusheng2": "关某既出，敌将定皆披靡。",
	"#sbwusheng3": "对敌岂遵一招一式！",
	"#sbyijue1": "承君之恩，今日尽报。",
	"#sbyijue2": "下次沙场相见，关某定不留情。",
	"#sb_guanyu:die": "大哥，翼德，来生再于桃园，论豪情壮志……",
	"#sbjizhi1": "解之有万法，吾独得千计。",
	"#sbjizhi2": "慧思万千，以成我之所想。",
	"#sbqicai1": "依我此计，便可破之。",
	"#sbqicai2": "以此无用之物，换得锦囊妙计。",
	"#sb_huangyueying:die": "何日北平中原，夫君再返隆中……",
	"#sbhuoji1": "区区汉贼，怎挡天火之威？",
	"#sbhuoji2": "就让此火，再兴炎汉国祚。",
	"#sbhuoji3": "吾虽有功，然终逆天命啊。",
	"#sbkanpo1": "知汝欲行此计，故已待之久矣。",
	"#sbkanpo2": "静思敌谋，以出应对之策。",
	"#sb_sp_zhugeliang:die": "纵具地利，不得天时亦难胜也……",
	"#sbqiaobian1": "将计就计，变夺胜机。",
	"#sbqiaobian2": "因势而变，则可引势而为。",
	"#sb_zhanghe:die": "未料竟中孔明之计……",
	"#sbxiayuan1": "速置粮草，驰援天柱山。",
	"#sbxiayuan2": "援军既至，定攻克此地！",
	"#sbjieyue1": "尔等小儿，徒费兵力！",
	"#sbjieyue2": "侧翼迎敌，拱卫中军！",
	"#sbjieyue3": "调兵遣将，以御敌势！",
	"#sbjieyue4": "雕虫小技，静待则已！",
	"#sb_yujin:die": "禁……愧于丞相……",
	"#new_reyaowu_sb_huaxiong1": "俞涉小儿，岂是我的对手！",
	"#new_reyaowu_sb_huaxiong2": "上将潘凤？哼！还不是死在我刀下！",
	"#sbyangwei1": "哈哈哈哈！现在谁不知我华雄？",
	"#sbyangwei2": "定要关外诸侯，知我威名！",
	"#sb_huaxiong:die": "小小马弓手，竟然……啊……",
	"#splveying1": "避实击虚，吾可不惮尔等蛮力！",
	"#splveying2": "疾步如风，谁人可视吾影？",
	"#spyingwu1": "莺舞曼妙，杀机亦藏其中！",
	"#spyingwu2": "莺翼之羽，便是诛汝之锋！",
	"#liucheng:die": "此番寻药未果，怎医叙儿之疾……",
	"#spmingxuan1": "闻汝节行俱佳，今特设宴相请。",
	"#spmingxuan2": "百闻不如一见，夫人果真非凡。",
	"#spxianchou1": "夫君勿忘，杀妻害子之仇！",
	"#spxianchou2": "吾母子之仇，便全靠夫君来报了！",
	"#sp_yangwan:die": "引狗入寨，悔恨交加……",
	"#sbliegong1": "矢贯坚石，劲冠三军！",
	"#sbliegong2": "吾虽年迈，箭矢犹锋！",
	"#sb_huangzhong:die": "弦断弓藏，将老孤亡……",
	"#sbkeji1": "事事克己，步步虚心！",
	"#sbkeji2": "勤学潜习，始觉自新！",
	"#sbdujiang1": "大军渡江，昼夜驰上！",
	"#sbdujiang2": "白衣摇橹，昼夜兼行！",
	"#sb_lvmeng:die": "义封胆略过人，主公可任之……",
	"#sbjieyin1": "君若不负吾心，妾自随君千里。",
	"#sbjieyin2": "夫妻之情既断，何必再问归期！",
	"#sbliangzhu1": "助君得胜战，跃马提缨枪！",
	"#sbliangzhu2": "平贼成君业，何惜上沙场！",
	"#sbxiaoji1": "吾之所通，何止十八般兵刃！",
	"#sbxiaoji2": "既如此，就让尔等见识一番！",
	"#sb_sunshangxiang:die": "此去一别，竟无再见之日……",
	"#sbzhiheng1": "稳坐山河，但观世变。",
	"#sbzhiheng2": "身处惊涛，尤可弄潮。",
	"#sbtongye1": "上下一心，君臣同志。",
	"#sbtongye2": "胸有天下者，必可得其国。",
	"#sbjiuyuan1": "汝救护有功，吾必当厚赐。",
	"#sbjiuyuan2": "诸位将军，快快拦住贼军！",
	"#sb_sunquan:die": "风急举发，命不久矣……",
	"#sbkurou1": "既不能破，不如依张子布之言，投降便罢！",
	"#sbkurou2": "周瑜小儿！破曹不得，便欺吾三世老臣乎？",
	"#sbzhaxiang1": "江东六郡之卒，怎敌丞相百万雄师！",
	"#sbzhaxiang2": "闻丞相虚心纳士，盖愿率众归降！",
	"#sb_huanggai:die": "哈哈哈哈，公瑾计成，老夫死也无憾了……",
	"#sbyingzi1": "交之总角，付之九州！",
	"#sbyingzi2": "定策分两治，纵马饮三江！",
	"#sbfanjian1": "若不念汝三世之功，今日定斩不赦！",
	"#sbfanjian2": "比之自内，不自失也！",
	"#sb_zhouyu:die": "瑜虽不惧曹军，但惧白驹过隙……",
	"#sbjushou1": "白马沉河共歃誓，怒涛没城亦不悔！",
	"#sbjushou2": "汉水溢流断归路，守城之志穷且坚！",
	"#sbjushou3": "山水速疾来去易，襄樊镇固永难开！",
	"#sbjiewei1": "同袍之谊，断不可弃之！",
	"#sbjiewei2": "贼虽势盛，若吾出马，亦可解之。",
	"#sb_caoren:die": "吾身可殉，然襄樊之地万不可落于吴蜀之手……",
	"#sbqiaoshi1": "拾樵城郭边，似有苔花开。",
	"#sbqiaoshi2": "拾樵采薇，怡然自足。",
	"#sbyanyu1": "燕语呢喃唤君归！",
	"#sbyanyu2": "燕燕于飞，差池其羽。",
	"#sb_xiahoushi:die": "玄鸟不曾归，君亦不再来……",
	"#sbleiji1": "云涌风起，雷电聚集！",
	"#sbleiji2": "乾坤无极，风雷受命！",
	"#sbguidao1": "世间万法，殊途同归！",
	"#sbguidao2": "从无邪恶之法，唯有作恶之人！",
	"#sbhuangtian1": "汝等既顺黄天，当应天公之命！",
	"#sbhuangtian2": "黄天佑我，道兵显威！",
	"#sb_zhangjiao:die": "只叹未能覆汉，徒失天时……",
	"#sbjianxiong1": "古今英雄盛世，尽赴沧海东流。",
	"#sbjianxiong2": "骖六龙行御九州，行四海路下八邦！",
	"#sbqingzheng1": "立威行严法，肃佞正国纲！",
	"#sbqingzheng2": "悬杖分五色，治法扬清名。",
	"#sbhujia1": "虎贲三千，堪当敌万余！",
	"#sbhujia2": "壮士八百，足护卫吾身！",
	"#sb_caocao:die": "狐死归首丘，故乡安可忘……",
	"#sbluoshen1": "凌波荡兮微步，香罗袜兮生尘。",
	"#sbluoshen2": "辛夷展兮修裙，紫藤舒兮绣裳。",
	"#qingguo_sb_zhenji1": "商灵缤兮恭迎，伞盖纷兮若云。",
	"#qingguo_sb_zhenji2": "晨张兮细帷，夕茸兮兰櫋。",
	"#sb_zhenji:die": "秀目回兮难得，徒逍遥兮莫离……",
	"#sbqixi1": "击敌不备，奇袭拔寨！",
	"#sbqixi2": "轻羽透重铠，奇袭溃坚城！",
	"#sbfenwei1": "舍身护主，扬吴将之风！",
	"#sbfenwei2": "袭军挫阵，奋江东之威！",
	"#sb_ganning:die": "蛮将休得猖狂！呃啊！",
	"#sbtieji1": "厉马秣兵，只待今日！",
	"#sbtieji_true1": "敌军防备空虚，出击直取敌营！",
	"#sbtieji_true2": "敌军早有防备，先行扰阵疲敌！",
	"#sbtieji_false": "全军速撤回营，以期再觅良机！",
	"#sb_machao:die": "父兄妻儿具丧，吾有何面目活于世间……",
	"#sbduanliang1": "常读兵法，终有良策也！",
	"#sbduanliang_true1": "烧敌粮草，救主于危急！",
	"#sbduanliang_true2": "敌现混乱之机，我军可长驱直入！",
	"#sbduanliang_false": "敌即识破吾计，则断不可行矣。",
	"#sbshipo1": "已向尔等陈明利害，奉劝尔等早日归降！",
	"#sbshipo2": "此时归降或可封赏，即至城破必斩无赦！",
	"#sb_xuhuang:die": "为主效劳，何畏生死……",
	"#sbpaoxiao1": "我乃燕人张飞，尔等休走！",
	"#sbpaoxiao2": "战又不战，退又不退，却是何故！",
	"#sbxieji1": "兄弟三人协力，破敌只在须臾！",
	"#sbxieji2": "二哥，俺来助你！",
	"#sbxieji3": "吴贼害我手足，此仇今日当报！",
	"#sb_zhangfei:die": "不恤士卒，终为小人所害！",
	"#sblongdan1": "长坂沥赤胆，佑主成忠名！",
	"#sblongdan2": "龙驹染碧血，银枪照丹心！",
	"#sbjizhu1": "义贯金石，忠以卫上！",
	"#sbjizhu2": "遵奉法度，功效可书！",
	"#sbjizhu3": "兴汉伟功，从今始成！",
	"#sb_zhaoyun:die": "汉室未兴，功业未成……",
	"#sbrende1": "仁德为政，自得民心！",
	"#sbrende2": "此非吾心所愿，乃形势所迫耳！",
	"#sbrende3": "民心所望，乃吾政所向！",
	"#sbzhangwu1": "汉贼不两立，王业不偏安！",
	"#sbzhangwu2": "众将皆言君恩，今当献身以报！",
	"#sbjijiang1": "大汉将士，何人敢战？",
	"#sbjijiang2": "匡扶汉室，岂能无诸将之助！",
	"#sb_liubei:die": "汉室之兴，皆仰望丞相了……",
	"#sbtiaoxin1": "汝等小儿，还不快跨马来战！",
	"#sbtiaoxin2": "哼！既匹夫不战，不如归耕陇亩！",
	"#sbzhiji1": "丞相之志，维岂敢忘之！",
	"#sbzhiji2": "北定中原终有日！",
	"#sb_jiangwei:die": "市井鱼龙易一统，护国麒麟难擎天……",
	"#sbxuanhuo1": "虚名虽然无用，可沽万人之心。",
	"#sbxuanhuo2": "效金台碣馆之事，布礼贤仁德之名。",
	"#sbenyuan1": "恩如泰山，当还以东海。",
	"#sbenyuan2": "汝既负我，哼哼，休怪军法无情！",
	"#sb_fazheng:die": "蜀翼双折，吾主王业，就靠孔明了……",
	"#sbmingce1": "分兵驻扎，可互为掎角之势。",
	"#sbmingce2": "行吾此计，可使将军化险为夷。",
	"#sbzhichi1": "将军勿急，我等可如此行事。",
	"#sbzhichi2": "哎！怪我智迟，竟少算一步。",
	"#sb_chengong:die": "何必多言！宫唯求一死……",
	"#sblijian1": "太师若献妾于吕布，妾宁死不受此辱。",
	"#sblijian2": "贱妾污浊之身，岂可复侍将军。",
	"#sbbiyue1": "薄酒醉红颜，广袂羞掩面。",
	"#sbbiyue2": "芳草更芊芊，荷池映玉颜。",
	"#sb_diaochan:die": "终不负阿父之托……",
	"#sbluanji1": "与我袁本初为敌，下场只有一个！",
	"#sbluanji2": "弓弩手，乱箭齐下，射杀此贼！",
	"#sbxueyi1": "四世三公之贵，岂是尔等寒门可及？",
	"#sbxueyi2": "吾袁门名冠天下，何须奉天子为傀？",
	"#sb_yuanshao:die": "我不可能输给曹阿瞒，不可能！",
	"#sblianhuan1": "任凭潮涌，连环无惧！",
	"#sblianhuan2": "并排横江，可利水战！",
	"#sbniepan1": "凤雏涅槃，只为再生！",
	"#sbniepan2": "烈火焚身，凤羽更丰！",
	"#sb_pangtong:die": "落凤坡，果真为我葬身之地……",
	"#sbjiang1": "义武奋扬，荡尽犯我之寇！",
	"#sbjiang2": "锦绣江东，岂容小丑横行！",
	"#sbhunzi1": "群雄逐鹿之时，正是吾等崭露头角之日！",
	"#sbhunzi2": "胸中远志几时立，正逢建功立业时！",
	"#sbzhiba1": "知君英豪，望来归效！",
	"#sbzhiba2": "孰胜孰负，犹未可知！",
	"#sb_sunce:die": "大志未展，权弟当继……",
	"#sbguose1": "还望将军，稍等片刻。",
	"#sbguose2": "将军，请留步。",
	"#sbliuli1": "无论何时何地，我都在你身边。",
	"#sbliuli2": "辗转流离，只为此刻与君相遇。",
	"#sb_daqiao:die": "此心无可依，惟有泣别离……",
	"#sbzishou1": "荆襄通连天下，我有何惧？",
	"#sbzishou2": "据此人杰地灵之地，何必再行征战？",
	"#sbzongshi1": "是时候讨伐悖逆之人了。",
	"#sbzongshi2": "强汉之威，贼寇岂有不败之理？",
	"#sb_liubiao:die": "我死之后，只望荆州仍然安定……",
	"#sblieren1": "哼！可知本夫人厉害？",
	"#sblieren2": "我的飞刀，谁敢小瞧？",
	"#sbjuxiang1": "哼！何须我亲自出马！",
	"#sbjuxiang2": "都给我留下吧！",
	"#sb_zhurong:die": "大王……这诸葛亮果然厉害……",
	"#sbhuoshou1": "我才是南中之主！",
	"#sbhuoshou2": "整个南中都要听我的！",
	"#sbzaiqi1": "且败且战，愈战愈勇！",
	"#sbzaiqi2": "若有来日，必将汝等拿下！",
	"#sb_menghuo:die": "吾等谨遵丞相教诲，永不复叛……",
	"#nzry_mingren_1_sb_yl_luzhi1": "父不爱无益之子，君不蓄无用之臣！",
	"#nzry_mingren_1_sb_yl_luzhi2": "老夫蒙国重恩，敢不捐躯以报！",
	"#sbzhenliang1": "汉室艰祸繁兴，老夫岂忍宸极失御！",
	"#sbzhenliang2": "犹思中兴之美，尚怀来苏之望！",
	"#sb_yl_luzhi:die": "历数有尽，天命有归……",
	"#sbtianxiang1": "凤眸流盼，美目含情。",
	"#sbtianxiang2": "灿如春华，皎如秋月。",
	"#sb_xiaoqiao:die": "朱颜易改，初心永在……",
	"#sbguanxing1": "明星皓月，前路通达。",
	"#sbguanxing2": "冷夜孤星，正如时局啊。",
	"#sbkongcheng1": "城下千军万马，我亦谈笑自若。",
	"#sbkongcheng2": "仲达可愿与我城中一叙？",
	"#sbduojing1": "快舟轻甲，速袭其后！",
	"#sbduojing2": "复取荆州，尽在掌握！",
	"#sbyingzi_sb_sunce1": "今与公瑾相约，共图天下霸业！",
	"#sbyingzi_sb_sunce2": "空言岂尽意，跨马战沙场！",
	"#yinghun_sb_sunce1": "父亲英魂犹在，助我定乱平贼！",
	"#yinghun_sb_sunce2": "扫尽门庭之寇，贼自畏我之威！",
	
	// sbfm
	
	// shengxiao
	"#olzishu": "这些牌都归我吧！",
	"#ol_zishu:die": "油米全没了……",
	"#olchouniu": "牛角之歌，自保足矣。",
	"#ol_chouniu:die": "请将我……埋于此地吧……",
	"#olyinhu": "尝尝我的厉害吧！",
	"#ol_yinhu:die": "百兽之王，也有终老……",
	"#olmaotu": "想抓到我？不可能！",
	"#ol_maotu:die": "这灾祸，是躲不过了……",
	"#olchenlong": "龙怒的威力，不是你所能承受的。",
	"#ol_chenlong:die": "龙威不在，龙鳞已落……",
	"#olsishe": "伤我者，一一奉还。",
	"#ol_sishe:die": "我的毒液，失效了……",
	"#olwuma": "有我在，必成功！",
	"#ol_wuma:die": "马有失蹄啊……",
	"#olweiyang": "共享绵泽，同甘共苦。",
	"#ol_weiyang:die": "看不到青草翠绿时……",
	"#olshenhou": "百般变化，真假难辨！",
	"#ol_shenhou:die": "这仙桃，无用了……",
	"#olyouji": "鸡豚之息，虽微渐厚。",
	"#ol_youji:die": "杀鸡取卵，不可取呀……",
	"#olxugou": "驱邪吠恶，遇凶斩杀！",
	"#ol_xugou:die": "不能守护家园了……",
	"#olhaizhu": "这些都归我吧！",
	"#ol_haizhu:die": "啊，果然，还是吃太多了……",
	
	// shenhua
	"#liegong_re_huangzhong1": "弓不离手，自有转机。",
	"#liegong_re_huangzhong2": "箭阵开道，所向无敌！",
	"#re_huangzhong:die": "真哉，老将无用矣……",
	"#gzbuqu1": "还不够！",
	"#gzbuqu2": "我绝不会倒下！",
	"#old_zhoutai:die": "已经，尽力了……",
	"#jushou1": "我先休息一会！",
	"#jushou2": "尽管来吧！",
	"#new_caoren:die": "实在是守不住了……",
	"#duanliang1_re_xuhuang1": "粮不三载，敌军已犯行军大忌。",
	"#duanliang1_re_xuhuang2": "断敌粮秣，此战可胜。",
	"#jiezi1": "因粮于敌，故军食可足也。",
	"#jiezi2": "食敌一钟，当吾二十钟。",
	"#re_xuhuang:die": "敌军防备周全，是吾轻敌……",
	"#jianchu_re_pangde1": "来呀，冲杀出去，杀他个片甲不留。",
	"#jianchu_re_pangde2": "一人一骑，横扫千军！",
	"#re_pangde:die": "我宁为国家鬼，不为贼将也！",
	"#shensu1_re_xiahouyuan1": "吾等无需恋战。",
	"#shensu1_re_xiahouyuan2": "吾自当以一当十，速战速决。",
	"#re_xiahouyuan:die": "吾命休矣，遂成竖子之名……",
	"#kuanggu_re_weiyan1": "哼！也不看看我是何人！",
	"#kuanggu_re_weiyan2": "哈哈哈哈哈哈，赢你还不容易？",
	"#qimou1": "成王败寇，怎可有勇无谋？",
	"#qimou2": "且不要因为暂时的得失而胆怯。",
	"#re_weiyan:die": "奸贼……害我……",
	"#tianxiang1": "接着哦~",
	"#tianxiang2": "替我挡着~",
	"#hongyan": "（笑声）",
	"#xiaoqiao:die": "公瑾……我先走一步……",
	"#releiji1": "成为黄天之世的祭品吧！",
	"#releiji2": "呼风唤雨，驱雷策电！",
	"#guidao_sp_zhangjiao1": "道施所向，皆由我控。",
	"#guidao_sp_zhangjiao2": "哼哼，天意如此。",
	"#huangtian21": "苍天不覆，黄天将替！",
	"#huangtian22": "黄天立，民心顺，天下平。",
	"#sp_zhangjiao:die": "黄天既覆……苍生何存？",
	"#guhuo_guess1": "道法玄机，变幻莫测。",
	"#guhuo_guess2": "如真似幻，扑朔迷离。",
	"#re_yuji:die": "道法玄机，竟被参破……",
	"#bazhen1": "你可识得此阵？",
	"#bazhen2": "太极生两仪，两仪生四象，四象生八卦。",
	"#huoji1": "此火可助我军大获全胜。",
	"#huoji2": "燃烧吧！",
	"#kanpo1": "雕虫小技。",
	"#kanpo2": "你的计谋被识破了。",
	"#sp_zhugeliang:die": "我的计谋竟被……",
	"#lianhuan1": "伤一敌可连其百！",
	"#lianhuan2": "通通连起来吧！",
	"#niepan1": "凤雏岂能消亡？",
	"#niepan2": "浴火重生！",
	"#pangtong:die": "看来我命中注定将丧命于此……",
	"#quhu1": "此乃驱虎吞狼之计。",
	"#quhu2": "借你之手，与他一搏吧。",
	"#jieming1": "秉忠贞之志，守谦退之节。",
	"#jieming2": "我，永不背弃。",
	"#xunyu:die": "主公要臣死，臣不得不死……",
	"#qiangxi1": "吃我一戟！",
	"#qiangxi2": "看我三步之内取你小命！",
	"#dianwei:die": "主公，快走！",
	"#tianyi1": "请助我一臂之力！",
	"#tianyi2": "我当要替天行道！",
	"#taishici:die": "大丈夫，当带三尺之剑，立不世之功！",
	"#shuangxiong1": "吾乃河北上将颜良文丑是也！",
	"#shuangxiong2": "快来与我等决一死战！",
	"#yanwen:die": "这红脸长须大将是……",
	"#luanji1": "弓箭手，准备放箭！",
	"#luanji2": "全都去死吧！",
	"#re_yuanshao:die": "老天不助我袁家啊！……",
	"#huoshou11": "背黑锅我来，送死？你去！",
	"#huoshou12": "通通算我的！",
	"#zaiqi1": "起！",
	"#zaiqi2": "丞相助我！",
	"#menghuo:die": "七纵之恩……来世……再报了……",
	"#juxiang11": "小小把戏~",
	"#juxiang12": "大王，看我的。",
	"#lieren1": "亮兵器吧。",
	"#lieren2": "尝尝我飞刀的厉害！",
	"#zhurong:die": "大王，我……先走一步了……",
	"#xingshang1": "来，管杀还管埋！",
	"#xingshang2": "我的是我的，你的还是我的。",
	"#fangzhu1": "死罪可免，活罪难赦！",
	"#fangzhu2": "给我翻过来！",
	"#songwei21": "仙福永享，寿与天齐！",
	"#songwei22": "千秋万载，一统江山！",
	"#caopi:die": "子建，子建……",
	"#haoshi1": "来来来，见面分一半。",
	"#haoshi2": "拿去拿去，莫跟哥哥客气！",
	"#dimeng1": "合纵连横，方能以弱胜强。",
	"#dimeng2": "以和为贵，以和为贵。",
	"#re_lusu:die": "此联盟已破，吴蜀休矣……",
	"#yinghun1": "不诛此贼三族，则吾死不瞑目！",
	"#yinghun2": "以吾魂魄，保佑吾儿之基业。",
	"#sunjian:die": "有埋伏！呃……啊！！",
	"#jiuchi1": "呃呵呵呵呵，好酒好酒！",
	"#jiuchi2": "呃……再来……一壶……",
	"#roulin1": "食色，性也~~",
	"#roulin2": "美人儿，来，香一个~~",
	"#benghuai1": "嗯呃~",
	"#benghuai2": "哎，我是不是该减肥了？",
	"#baonue21": "呵哈哈哈哈哈哈哈哈！",
	"#baonue22": "顺我者昌，逆我者亡！",
	"#dongzhuo:die": "汉室衰落，非我一人之罪……",
	"#luanwu1": "哭喊吧，哀求吧，挣扎吧，然后，死吧！",
	"#luanwu2": "哼哼哼……坐山观虎斗！",
	"#wansha1": "神仙难救，神仙难救啊。",
	"#wansha2": "我要你三更死，谁敢留你到五更！",
	"#weimu1": "此计伤不到我。",
	"#weimu2": "你奈我何？",
	"#jiaxu:die": "我的时辰也到了……",
	"#tiaoxin1": "贼将早降，可免一死。",
	"#tiaoxin2": "汝等小儿，可敢杀我？",
	"#zhiji1": "先帝之志，丞相之托，不可忘也！",
	"#zhiji2": "丞相厚恩，维万死不能相报。",
	"#jiangwei:die": "我计不成，乃天命也……",
	"#xiangle1": "打打杀杀，真没意思。",
	"#xiangle2": "我爸爸是刘备！",
	"#fangquan1": "诶，这可如何是好啊？",
	"#fangquan2": "哎，你办事儿，我放心~",
	"#ruoyu1": "不装疯卖傻，岂能安然无恙？",
	"#ruoyu2": "世人皆错看我，唉！",
	"#liushan:die": "别打脸，我投降还不行吗？",
	"#qiaobian1": "兵无常势，水无常形。",
	"#qiaobian2": "用兵之道，变化万千。",
	"#zhanghe:die": "啊……膝盖……中箭了……",
	"#tuntian1": "休养生息，备战待敌。",
	"#tuntian2": "锄禾日当午，汗滴禾下土。",
	"#zaoxian1": "屯田日久，当建奇功！",
	"#zaoxian2": "开辟险路，奇袭敌军！",
	"#dengai:die": "吾破蜀克敌，竟葬于奸贼之手！",
	"#jiang1": "江东子弟，何惧于天下！",
	"#jiang2": "吾乃江东小霸王孙伯符！",
	"#hunzi1": "父亲在上，魂佑江东；公瑾在旁，智定天下！",
	"#hunzi2": "愿承父志，与公瑾共谋天下！",
	"#yinghun_sunce1": "父亲，助我背水一战！",
	"#yinghun_sunce2": "孙氏英烈，庇佑江东！",
	"#zhiba21": "是友是敌，一探便知。",
	"#zhiba22": "我若怕你，非孙伯符也！",
	"#sunce:die": "内事不决问张昭，外事不决问周瑜……",
	"#zhijian1": "请恕老臣直言！",
	"#zhijian2": "为臣者，当冒死以谏！",
	"#guzheng1": "今当稳固内政，以御外患。",
	"#guzheng2": "固国安邦，居当如是！",
	"#zhangzhang:die": "竭力尽智，死而无憾……",
	"#beige1": "悲歌可以当泣，远望可以当归。",
	"#beige2": "制兹八拍兮拟排忧，何知曲成兮心转愁。",
	"#duanchang1": "流落异乡愁断肠。",
	"#duanchang2": "日东月西兮徒相望，不得相随兮空断肠。",
	"#caiwenji:die": "人生几何时，怀忧终年岁……",
	"#huashen21": "哼，肉眼凡胎，岂能窥视仙人变幻？",
	"#huashen22": "万物苍生，幻化由心。",
	"#xinsheng1": "幻幻无穷，生生不息。",
	"#xinsheng2": "吐故纳新，师法天地。",
	"#zuoci:die": "腾云跨风，飞升太虚……",
	"#qizhi1": "声东击西，敌寇一网成擒。",
	"#qizhi2": "吾意不在此地，已遣别部出发。",
	"#jinqu1": "建上昶水城，以逼夏口！",
	"#jinqu2": "通川聚粮，伐吴之业，当步步为营。",
	"#wangji:die": "天下之势，必归大魏，可恨，未能得见呐！",
	"#nzry_juzhan_11": "砍头便砍头，何为怒耶！",
	"#nzry_juzhan_12": "我州但有断头将军，无降将军也！",
	"#yanyan:die": "宁可断头死，安能屈膝降！",
	"#nzry_feijun1": "山地崎岖，也挡不住飞军破势！",
	"#nzry_feijun2": "无当飞军，伐叛乱，镇蛮夷！",
	"#nzry_binglve1": "兵略者，明战胜攻取之数，形机之势，诈谲之变。",
	"#nzry_binglve2": "奇略兵速，敌未能料之。",
	"#wangping:die": "无当飞军，也有困于深林之时……",
	"#nzry_huaiju1": "袖中怀绿桔，遗母报乳哺。",
	"#nzry_huaiju2": "情深舐犊，怀擢藏橘。",
	"#nzry_yili1": "遗失礼仪，则俱非议。",
	"#nzry_yili2": "行遗礼之举，于不敬王者。",
	"#nzry_zhenglun1": "整论四海未泰，修文德以平。",
	"#nzry_zhenglun2": "今论者不务道德怀取之术，而惟尚武，窃所未安。",
	"#luji:die": "恨不能见，车同轨，书同文……",
	"#nzry_kuizhu1": "子通专恣，必谋而诛之！",
	"#nzry_kuizhu2": "孙綝久专，不可久忍，必溃诛！",
	"#nzry_zhizheng1": "风驰电掣，政权不怠！",
	"#nzry_zhizheng2": "廉平掣政，实为艰事。",
	"#nzry_lijun11": "立于朝堂，定于军心。",
	"#nzry_lijun12": "君立于朝堂，军侧于四方！",
	"#sunliang:die": "今日欲诛逆臣而不得，方知机事不密则害成……",
	"#nzry_chenglve1": "成略在胸，良计速出。",
	"#nzry_chenglve2": "吾有良略在怀，必为阿瞒所需。",
	"#nzry_shicai_21": "吾才满腹，袁本初竟不从之。",
	"#nzry_shicai_22": "阿瞒有我良计，取冀州便是易如反掌。",
	"#nzry_cunmu1": "哼！目光所及，短寸之间。",
	"#nzry_cunmu2": "狭目之见，只能窥底。",
	"#xuyou:die": "阿瞒，没有我你得不到冀州啊！",
	"#nzry_mingren_11": "吾之任，君之明举！",
	"#nzry_mingren_12": "得义真所救，吾任之必尽瘁以报。",
	"#nzry_zhenliang_11": "贞洁贤良，吾之本心。",
	"#nzry_zhenliang_12": "风霜以别草木之性，危乱而见贞良之节。",
	"#yl_luzhi:die": "泓泓眸子宿渊亭，不见蛾眉只见经……",
	"#nzry_jianxiang1": "得遇曹公，吾之幸也。",
	"#nzry_jianxiang2": "曹公得荆不喜，喜得吾二人足矣。",
	"#nzry_shenshi_11": "深中足智，鉴时审情。",
	"#nzry_shenshi_12": "数语之言，审时度势。",
	"#kuailiangkuaiyue:die": "表不能善用，所憾也……",
	"#drlt_zhenrong1": "东征高句丽，保辽东安稳。",
	"#drlt_zhenrong2": "跨海东征，家国俱荣。",
	"#drlt_hongju1": "一举拿下，鸿途可得。",
	"#drlt_hongju2": "鸿飞荣升，举重若轻。",
	"#guanqiujian:die": "峥嵘一生，然被平民所击射！",
	"#drlt_zhenggu1": "镇守城池，必以骨相拼！",
	"#drlt_zhenggu2": "孔明计虽百算，却难敌吾镇骨千具！",
	"#haozhao:die": "镇守陈仓，也有一失……",
	"#xinfu_zuilun1": "吾有三罪，未能除黄皓、制伯约、守国土。",
	"#xinfu_zuilun2": "唉，数罪当论，吾愧对先帝恩惠。",
	"#xinfu_fuyin1": "得父荫庇，平步青云。",
	"#xinfu_fuyin2": "吾自幼心怀父诫，方不愧父亲荫庇。",
	"#zhugezhan:die": "临难而死义，无愧先父……",
	"#drlt_qianjie1": "继父之节，谦逊恭毕。",
	"#drlt_qianjie2": "谦谦清廉德，节节卓尔茂。",
	"#drlt_jueyan1": "毁堰坝之计，实为阻晋粮道。",
	"#drlt_jueyan2": "堰坝毁之，可令敌军自退。",
	"#drlt_poshi1": "破晋军分进合击之势，牵晋军主力之实！",
	"#drlt_poshi2": "破羊祜之策，势在必行！",
	"#lukang:die": "哎，陛下不听，社稷恐有危难……",
	"#drlt_yongsi1": "传国玉玺在手，朕语便是天言。",
	"#drlt_yongsi2": "朕今日雄踞淮南，明日便可一匡天下。",
	"#drlt_weidi1": "天下，即将尽归吾袁公路！",
	"#drlt_weidi2": "传朕旨意，诸部遵旨即可。",
	"#yl_yuanshu:die": "仲朝国祚，本应千秋万代，薪传不息……",
	"#drlt_xiongluan1": "雄据宛城，虽乱世可安！",
	"#drlt_xiongluan2": "北地枭雄，乱世不败！！",
	"#drlt_congjian1": "听君谏言，去危亡，保宗祀！",
	"#drlt_congjian2": "从谏良计，可得自保！",
	"#zhangxiu:die": "若失文和……吾将何归……",
	"#drlt_wanglie1": "猛将之烈，统帅之所往。",
	"#drlt_wanglie2": "与子龙忠勇相往，猛烈相合。",
	"#chendao:die": "我的白毦兵，再也不能为先帝出力了……",
	"#liangyin1": "结得良姻，固吴基业。",
	"#liangyin2": "君恩之命，妾身良姻之福。",
	"#kongsheng1": "窈窕淑女，箜篌有知。",
	"#kongsheng2": "箜篌声声，琴瑟和鸣。",
	"#zhoufei:die": "夫君，妾身再也不能陪你看这江南翠绿了……",
	"#buqu1": "哼，这点小伤算什么！",
	"#buqu2": "战如熊虎，不惜躯命！",
	"#fenji1": "百战之身，奋勇趋前！",
	"#fenji2": "两肋插刀，愿赴此躯！",
	"#yinghun_ol_sunjian1": "提刀奔走，灭敌不休。",
	"#yinghun_ol_sunjian2": "贼寇草莽，我且出战。",
	"#xueyi_re_yuanshao1": "崇王攘夷，生长尊贵。",
	"#xueyi_re_yuanshao2": "衣冠华胄，宜蒙优免。",
	"#chanyuan1": "不识天数，在劫难逃。",
	"#chanyuan2": "凡人仇怨，皆由心生。",
	"#guanxing_jiangwei1": "继丞相之遗志，讨篡汉之逆贼！",
	"#guanxing_jiangwei2": "克复中原，指日可待！",
	"#jijiang1_liushan1": "匡扶汉室，谁敢出战！",
	"#jijiang1_liushan2": "我蜀汉岂无人乎？",
	"#jixi1": "攻其不备，出其不意！",
	"#jixi2": "偷渡阴平，直取蜀汉！",
	"#reyingzi_sunce1": "尔等看好了！",
	"#reyingzi_sunce2": "公瑾，助我决一死战！",
	"#drlt_qingce1": "感明帝之恩，清君侧之贼。",
	"#drlt_qingce2": "得太后手诏，清奸佞乱臣。",
	"#rejizhi_lukang1": "智父安能有愚子乎？",
	"#drlt_huairou1": "各保分界，无求细利。",
	"#drlt_huairou2": "胸怀千万，彰其德，包其柔。",
	"#shensu11": "吾善于千里袭人！",
	"#shensu12": "取汝首级，有如探囊取物！",
	
	// shiji
	"#duanbi1": "收缴故币，以旧铸新，使民有余财。",
	"#duanbi2": "今，若能统一蜀地币制，则利在千秋。",
	"#tongduo1": "辎重调拨，乃国之要务，岂可儿戏！",
	"#tongduo2": "府库充盈，民有余财，主公师出有名矣。",
	"#liuba:die": "孔明，大汉的重担，就全系于你一人之身了……",
	"#yangjie1": "全军彻围，待其出城迎敌，再攻敌自散矣！",
	"#yangjie2": "佯解敌围，而后城外击之，此为易破之道！",
	"#zjjuxiang1": "今非秦项之际，如若受之，徒增逆意！",
	"#zjjuxiang2": "兵有形同而势异者，此次乞降断不可受！",
	"#houfeng1": "交汝统领，勿负我望！",
	"#houfeng2": "有功自当行赏，来人呈上！",
	"#houfeng3": "叉出去！罚其二十军杖！",
	"#sp_zhujun:die": "郭汜小竖！气煞我也！嗯……",
	"#spzhengjun1": "众将平日随心，战则务尽死力！",
	"#spzhengjun2": "汝等不怀余力，皆有平贼之功！",
	"#spzhengjun3": "仁恕之道，终非治军良策！",
	"#spshiji1": "乱民桀逆，非威不服！",
	"#spshiji2": "欲定黄巾，必赖兵革之利！",
	"#sptaoluan1": "敌军依草结营，正犯兵家大忌！",
	"#sptaoluan2": "兵法所云火攻之计，正合此时之势！",
	"#sp_huangfusong:die": "力有所能，臣必为也……",
	"#spdiaodu1": "三军器用，攻守之具，皆有法也！",
	"#spdiaodu2": "士各执其器，乃陷坚陈，败强敌！",
	"#spdiancai1": "资财当为公，不可为私也！",
	"#spdiancai2": "财用于公则政明，而后民附也！",
	"#spyanji1": "范既典主财计，必律己以率之！",
	"#spyanji2": "有财贵于善用，须置军资以崇国防！",
	"#spyanji3": "公帑私用？待吾查清定要严惩！",
	"#sp_lvfan:die": "此病来势汹汹，恕臣无力侍奉……",
	"#spjianyi1": "今虽富贵，亦不可浪费。",
	"#spjianyi2": "缩衣克俭，才是兴家之道。",
	"#spshangyi1": "国士，当以义为先！",
	"#spshangyi2": "豪侠尚义，何拘俗礼！",
	"#sp_jiangqing:die": "奋敌护主，成吾忠名……",
	"#spzhenting1": "今政事在我，更要持重慎行！",
	"#spzhenting2": "国可因外敌而亡，不可因内政而损！",
	"#spjincui1": "伐魏虽俯仰惟艰，臣甘愿效死于前！",
	"#spjincui2": "臣敢竭股肱之力，誓死为陛下前驱！",
	"#sp_jiangwan:die": "臣即将一死，辅国之事文伟可继……",
	"#spdifei1": "称病不见，待其自露马脚。",
	"#spdifei2": "孙氏之诽，伤不到我分毫。",
	"#spyanjiao1": "此篇未记，会儿便不可嬉戏。",
	"#spyanjiao2": "母亲虽严，却皆为汝好。",
	"#sp_zhangchangpu:die": "钟氏门楣，待我儿光耀……",
	"#spyajun1": "君子如珩，缨绂有容！",
	"#spyajun2": "仁声未闻，岂可先计后兵！",
	"#spzundi1": "盖闻春秋之义，立子自当立长。",
	"#spzundi2": "五官将才德兼备，是以宜承正统。",
	"#sp_cuiyan:die": "生当如君子，死当追竹德……",
	"#spxiangzhen1": "象兵便可退敌，何劳本姑娘亲往？",
	"#spxiangzhen2": "哼！象阵所至，尽皆纷乱之师。",
	"#spfangzong1": "一战结缘难再许，痛为大义斩此情！",
	"#spfangzong2": "将军处处留情，小女芳心暗许。",
	"#spxizhan1": "哎呀~母亲放心，鬘儿不会捣乱的。",
	"#spxizhan2": "本姑娘只是戏耍一番，尔等怎下如此重手！",
	"#spxizhan3": "战场纵非玩乐之所，尔等又能奈我何？",
	"#spxizhan4": "嘻嘻，这样才好玩嘛。",
	"#spxizhan5": "哼！让你瞧瞧本姑娘的厉害！",
	"#sp_huaman:die": "战事已定，吾愿终亦得偿……",
	"#spjungong1": "曹军营守，不能野战，此乃攻敌之机！",
	"#spjungong2": "若此营攻之不下，览何颜面见袁公！",
	"#spdengli1": "纵尔勇冠天下，吾亦不退半分！",
	"#spdengli2": "虚名何足夸口，败吾休得再提！",
	"#sp_gaolan:die": "满腹忠肝，难抵一句谮言……唉！",
	"#zaoli1": "喜怒不形于色，诈伪要明之徒。",
	"#zaoli2": "摇舌鼓唇，竖子是之也！",
	"#sunyi:die": "叛我贼子，虽死亦不饶之……",
	"#yiyong1": "这么着急回营？哼！那我就送你一程！",
	"#yiyong2": "你的兵器，本大爷还给你！哈哈哈哈！",
	"#shanxie1": "快快取我兵器，与我上阵杀敌！",
	"#shanxie2": "哈哈！还是自己的兵器用着趁手！",
	"#sp_wangshuang:die": "啊？速回主营！啊！",
	"#zhibian1": "两国各增守将，皆事势宜然，何足相问。",
	"#zhibian2": "固边大计，乃立国之本，岂有不设之理。",
	"#yuyan1": "正直敢言，不惧圣怒。",
	"#yuyan2": "威武不能屈，方为大丈夫。",
	"#sp_zongyu:die": "此次出使，终不负陛下期望……",
	"#qingjue1": "兵者，凶器也，宜不得已而用之。",
	"#qingjue2": "民安土重迁，易以顺行，难以逆动。",
	"#fengjie1": "见贤思齐，内自省也。",
	"#fengjie2": "立本于道，置身于正。",
	"#yuanhuan:die": "乱世之中，有礼无用啊……",
	"#spyilie1": "哈哈哈哈！来吧！",
	"#spyilie2": "哼！都来受死！",
	"#spfenming1": "合肥一役，吾等必拼死效力！",
	"#spfenming2": "主公勿忧，待吾等上前一战！",
	"#sp_chendong:die": "陛下速退！",
	"#dbquedi1": "力摧敌阵，如视天光破云！",
	"#dbquedi2": "让尔等有命追，无命回！",
	"#dbzhuifeng1": "率军冲锋，不惧刀枪所阻！",
	"#dbzhuifeng2": "登锋履刃，何妨马革裹尸！",
	"#dbchongjian1": "尔等良将，于我不堪一击！",
	"#dbchongjian2": "此等残兵，破之何其易也！",
	"#dbchoujue1": "血海深仇，便在今日来报！",
	"#dbchoujue2": "取汝之头，以祭先父！",
	"#db_wenyang:die": "半生功业，而见疑于一家之言，岂能无怨！",
	"#mingfa1": "明日即为交兵之时，望尔等早做准备。",
	"#mingfa2": "吾行明伐之策，不为掩袭之计。",
	"#rongbei1": "我军虽以德感民，亦不可废弛武备。",
	"#rongbei2": "缮甲训卒，广为戎备，不失伐吴之机。",
	"#sp_yanghu:die": "此生所憾，唯未克东吴也……",
	"#yizhu1": "老夫有二女，视之如明珠。",
	"#yizhu2": "将军若得遇小女，万望护送而归。",
	"#luanchou1": "愿汝永结鸾俦，以期共盟鸳蝶。",
	"#luanchou2": "夫妻相濡以沫，方可百年偕老。",
	"#qiaogong:die": "为父所念，为汝二人啊……",
	"#xiusheng1": "百姓安乐足矣，穷兵黩武实不可取啊。",
	"#xiusheng2": "内乱初定，更应休养生息。",
	"#yinlang1": "益州疲敝，还望贤兄相助。",
	"#yinlang2": "内讨米贼，外拒强曹，璋无宗兄，万万不可啊。",
	"#huaibi1": "哎！吾本无罪，怀璧其罪啊。",
	"#huaibi2": "粮草尽皆在此，宗兄可自取之。",
	"#liuzhang:die": "引狼入室，噬脐莫及啊！",
	"#gebo1": "握手言和，永罢刀兵。",
	"#gebo2": "重归于好，摒弃前仇。",
	"#spsongshu1": "称美蜀政，祛其疑贰之心。",
	"#spsongshu2": "蜀地君明民乐，实乃太平之治。",
	"#sp_zhangwen:die": "自招罪谴，诚可悲疚……",
	"#jishi1": "勤求古训，常怀济人之志。",
	"#jishi2": "博采众方，不随趋势之徒。",
	"#liaoyi1": "麻黄之汤，或可疗伤寒之疫。",
	"#liaoyi2": "望闻问切，因病施治。",
	"#binglun1": "受病有深浅，使药有重轻。",
	"#binglun2": "三分需外治，七分靠内养。",
	"#zhangzhongjing:die": "得人不传，恐成坠绪……",
	"#boming1": "先载附从，吾后行即可。",
	"#boming2": "诸位速速上船，靖随后便至。",
	"#ejian1": "为政者当沙汰秽浊，显拔幽滞，以顺民心。",
	"#ejian2": "此所谓寡助之至，天下叛之矣。",
	"#sp_xujing:die": "吾……必秉德无怠，以称帝心……",
	"#yuanqing1": "怀瑾瑜，握兰桂，而心若芷萱。",
	"#yuanqing2": "嘉言懿行，如渊之清，如玉之洁。",
	"#shuchen1": "陛下应先留心于治道，以征伐为后事也。",
	"#shuchen2": "陛下若修文德，察民疾苦，则天下幸甚。",
	"#sp_huaxin:die": "为虑国计，身损可矣……",
	"#guying1": "我军之营，犹如磐石之固！",
	"#guying2": "深壁固垒，敌军莫敢来侵！",
	"#muzhen1": "行阵和睦，方可优劣得所。",
	"#muzhen2": "识时达务，才可上和下睦。",
	"#xiangchong:die": "蛮夷怀异，战乱难平……",
	"#sheyi1": "二子不可兼顾，妾身唯保其一。",
	"#sheyi2": "吾子虽弃亦可，前遗万勿有失。",
	"#tianyin1": "抚琴体清心远，方成自然之趣。",
	"#tianyin2": "心怀雅正，天音自得。",
	"#caizhenji:die": "世誉吾为贤妻，吾愧终不为良母……",
	"#splirang1": "人之所至，礼之所及。",
	"#splirang2": "施之以礼，还之以德。",
	"#spmingshi1": "纵有强权在侧，亦不可失吾风骨。",
	"#spmingshi2": "黜邪崇正，何惧之有？",
	"#sp_kongrong:die": "不遵朝仪？诬害之词也！",
	"#xianghai1": "快快闪开，伤到你们可就不好了，哈哈哈！",
	"#xianghai2": "你自己撞上来的，这可怪不得小爷我！",
	"#chuhai1": "有我在此，安敢为害？！",
	"#chuhai2": "小小孽畜，还不伏诛？！",
	"#chuhai3": "此番不成，明日再战！",
	"#zhouchu:die": "改励自砥，誓除三害……",
	"#xunyi1": "古有死恩之士，今有殉义之人！",
	"#xunyi2": "舍身殉义，为君效死！",
	"#wangfuzhaolei:die": "誓死……追随将军左右！",
	"#xingqi1": "司马氏虽权尊势重，吾等徐图亦无不可！",
	"#xingqi2": "先谋后事者昌，先事后谋者亡！",
	"#zifu1": "有心无力，请罪愿降。",
	"#zifu2": "舆榇自缚，只求太傅开恩！",
	"#mibei1": "密为之备，不可有失。",
	"#mibei2": "事以密成，语以泄败！",
	"#wangling:die": "一生尽忠事魏，不料今日晚节尽毁啊！",
	"#heji1": "你我合势而击之，区区贼寇岂会费力？",
	"#heji2": "伯符！今日之战，务必全力攻之！",
	"#liubing1": "尔等流寇，亦可展吾军之勇。",
	"#liubing2": "流寇不堪大用，勤加操练可为精兵。",
	"#wujing:die": "贼寇未除，奈何吾身先丧……",
	"#xinguixiu1": "身陷绝境，亦须秉端庄之姿。",
	"#xinguixiu2": "纵吾身罹乱，焉能隳节败名。",
	"#qingyu1": "冰清玉粹，岂可有污！",
	"#qingyu2": "朱沉玉没，桂殒兰凋。",
	"#qingyu3": "大家之韵，不可失之。",
	"#sp_mifuren:die": "妾命数已至，惟愿阿斗顺利归蜀……",
	"#spyinju1": "伐吴者，兴师劳民，徒而无功，万望陛下三思！",
	"#spyinju2": "今当屯田罢兵，徐图吴蜀，安能急躁冒进乎？",
	"#spchijie1": "节度在此，诸将莫要轻进。",
	"#spchijie2": "吾奉天子明诏，整肃六军。",
	"#sp_xinpi:die": "生而立于朝堂，亡而留名青史，我，已无憾矣……",
	"#fyjianyu1": "功以才成，业由才广，弃才不用，非长计也。",
	"#fyjianyu2": "舍此不任而防后患，是备风波而废舟楫也。",
	"#feiyi:die": "臣请告陛下，宦权日盛，必乱社稷也……",
	"#spwanwei1": "梁、沛之间，无子廉焉有今日？",
	"#spwanwei2": "汝兄弟皆为手足，何必苦苦相逼？",
	"#spyuejian1": "吾母仪天下，于节俭处当率先垂范。",
	"#spyuejian2": "取上为贪，取下为伪，妾则取其中者。",
	"#sp_bianfuren:die": "夫君，妾身终于要随您而去了……",
	"#spwuku1": "损益万枢，竭世运机。",
	"#spwuku2": "胸藏万卷，充盈如库。",
	"#spsanchen1": "贼计已穷，陈兵吴地，可一鼓而下也。",
	"#spsanchen2": "伐吴此举，十有九利，惟陛下察之。",
	"#sp_duyu:die": "洛水圆石，遂道向南，吾将以俭自完耳……",
	"#qinzheng1": "夫国之有民，犹水之有舟，停则以安，扰则以危。",
	"#qinzheng2": "治疾及其未笃，除患贵其莫深。",
	"#luotong:die": "臣统之大愿，足以死而不朽矣……",
	"#spqiai1": "恨我无时谋，譬诸具官臣。",
	"#spqiai2": "鞠躬中坚内，微画无所陈。",
	"#spshanxi1": "连舫逾万艘，带甲千万人。",
	"#spshanxi2": "率彼东南路，将定一举勋。",
	"#sp_wangcan:die": "虽无铅刀用，庶几奋薄身……",
	"#shameng1": "歃血盟誓，以告神明。",
	"#shameng2": "戮力一心，同讨魏贼。",
	"#sp_chenzhen:die": "震不负丞相所托……",
	"#mjdingyi1": "经国序民，还需制礼定仪。",
	"#mjdingyi2": "无礼而治世，欲使国泰，安可得哉？",
	"#zuici1": "既为朝堂宁定，吾请辞便是。",
	"#zuici2": "国事为先，何惧清名有损！",
	"#fubi1": "辅君弼主，士之所志也。",
	"#fubi2": "献策思计，佐定江山。",
	"#sp_sunshao:die": "江东将相各有所能，奈何心向不一……",
	"#mjweipo1": "想必……将军心中已有所计较。",
	"#mjweipo2": "谌言尽于此，采纳与否还凭将军。",
	"#mjchenshi1": "将军已为此二者所围，形势实不容乐观。",
	"#mjchenshi2": "此二人若合力攻之，则将军危矣。",
	"#mjmouzhi1": "潜谋于无形，胜于不争不费。",
	"#mjmouzhi2": "欲思其成，必虑其败也。",
	"#sp_xunchen:die": "袁公不济，吾自当以死继之……",
	"#gonghuan1": "曹魏势大，吴蜀当共拒之。",
	"#gonghuan2": "两国得此联姻，邦交更当稳固。",
	"#mouli1": "澄汰王室，迎立宗子！",
	"#mouli2": "僣孽为害，吾岂可谋而不行？",
	"#xuancun1": "阿斗年幼，望子龙将军仔细！",
	"#xuancun2": "今得见将军，此儿有望生矣。",
	"#spmiewu1": "倾荡之势已成，石城尽在眼下。",
	"#spmiewu2": "吾军势如破竹，江东六郡唾手可得。",
	
	// sp
	"#olpingduan1": "草原儿郎，张弓善射，勇不可当。",
	"#olpingduan2": "策马逐雄鹰，孤当与尔等共分天下。",
	"#ol_kebineng:die": "未驱青马饮于黄河，死难瞑目……",
	"#olchishi1": "柴米油盐之细，不逊兵家之谋。",
	"#olchishi2": "治大家如烹小鲜，须面面俱到。",
	"#olweimian1": "不过二三小事，夫君何须烦恼。",
	"#olweimian2": "宦海疾风大浪，家为避风之塘。",
	"#ol_sunru:die": "从来无情者，皆出帝王家……",
	"#olyongzu1": "既拜我为父，咱家当视汝为骨肉。",
	"#olyongzu2": "天地君亲师，此五者最须尊崇。",
	"#rejianxiong_caoteng": "躬行禁闱，不敢争一时之气。",
	"#tianming_caoteng": "天命在彼，事莫强为。",
	"#olqingliu1": "谁说这宦官，皆是大奸大恶之人？",
	"#olqingliu2": "咱家要让这天下人知道，宦亦有贤。",
	"#caoteng:die": "种暠害我，望陛下明鉴……",
	"#olziruo1": "泰山虽崩于前，我亦风清云淡。",
	"#olziruo2": "诸君勿忧，一切尽在掌握。",
	"#olxvfa1": "常言道，积善之家必有余庆。",
	"#olxvfa2": "蓄势待发，一鸣惊天下。",
	"#ol_jiangwan:die": "臣既暗弱，加婴疾疢，规方无成……",
	"#olsilv1": "大义同胶漆，匪石心不移。",
	"#olsilv2": "人谁不虑终，日月有合离。",
	"#ollianju1": "叹息亦何为，但恐大义亏。",
	"#ollianju2": "室中是阿谁，叹息声正悲。",
	"#ol_liwan:die": "及尔偕老，老使我怨……",
	"#oljingzhou1": "艨艟连江，敌必不战自退。",
	"#oljingzhou2": "精舟锐进，直捣孙家老巢。",
	"#olzuolian1": "有我操练水军，曹公大可放心！",
	"#olzuolian2": "好！儿郎们很有精神！",
	"#caimao:die": "丞相，末将忠心耿耿呀……",
	"#olrunwei1": "流水不言，泽德万物。",
	"#olrunwei2": "生如春雨，润物无声。",
	"#olcangxin1": "世间百味，品在唇而味在心。",
	"#olcangxin2": "我藏风雨于心，故而衣不沾雨。",
	"#ol_luyusheng:die": "郁生既为张妇，誓不再许！",
	"#olliantao1": "沙场百战疾，争衡天下间。",
	"#olliantao2": "征战无休，决胜千里。",
	"#sp_sunce:die": "身受百创，力难从心……",
	"#olxuanzhu1": "提笔注太玄，佐国定江山。",
	"#olxuanzhu2": "总太玄之要，纵弼国之实。",
	"#oljiane1": "臣者，未死于战，则死于谏。",
	"#oljiane2": "君有弊，坐视之辈甚于外贼。",
	"#ol_lukai:die": "注经之人，终寄身于土……",
	"#olqushi1": "将军天人之姿，可令四海归心。",
	"#olqushi2": "小小锦上之花，难表一腔敬意。",
	"#olweijie1": "败战之罪在你，休要多言！",
	"#olweijie2": "纵汝舌灿莲花，亦难逃死罪。",
	"#guotu:die": "工于心计而不成事，匹夫怀其罪……",
	"#olqingyuan1": "男儿重义气，自古轻别离。",
	"#olqingyuan2": "缘轻义重，倚东篱而叹长生。",
	"#olchongshen1": "妾死则矣，腹中稚婴何辜？",
	"#olchongshen2": "身怀六甲，君忘好生之德乎？",
	"#ol_hujinding:die": "君无愧于天下，可有悔于妻儿？",
	"#olshandao1": "君子藏器，待天时而动。",
	"#olshandao2": "善刀而藏之，可解充栋之牛。",
	"#tianchou:die": "吾罪大矣，何堪封侯之荣……",
	"#olchanshuang1": "武艺精熟，勇冠三军。",
	"#olchanshuang2": "以一敌二，易如反掌。",
	"#olzhanjin1": "寒光纵横，血战八方！",
	"#olzhanjin2": "蘸金霜刃，力贯山河！",
	"#liyi:die": "此人竟如此勇猛……",
	"#olgongjie1": "身负浩然之气，当以恭节待人。",
	"#olgongjie2": "生于帝王之家，不可忘恭失节。",
	"#olxiangxv1": "今之大魏，非一家一姓之国。",
	"#olxiangxv2": "宇内同庆，奏凯歌于长垣。",
	"#olxiangzuo1": "怀济沧海之心，徒拔剑而茫然。",
	"#olxiangzuo2": "执三尺之青锋，卫大魏之宗庙。",
	"#caoyu:die": "满园秋霜落，一人叹奈何……",
	"#olfudao1": "冰刃入腹，使肝肠寸断。",
	"#olfudao2": "失子之殇，世间再无春秋。",
	"#olfengyan1": "何不以曹公之命，换我儿之命乎？",
	"#olfengyan2": "亲儿丧于宛城，曹公何颜复还？",
	"#ol_dingshangwan:die": "今生与曹，不复相见……",
	"#olsuji1": "飞燕如风，非快不得破。",
	"#olsuji2": "载疾风之势，摧万仞之城。",
	"#ollangdao1": "虎踞黑山，望天下百城。",
	"#ollangdao2": "狼顾四野，视幽冀为饵。",
	"#zhangyan:die": "草莽之辈，难登大雅之堂……",
	"#yanru1": "国有宁日，民有丰年，大同也。",
	"#yanru2": "及臻厥成，天下晏如也。",
	"#hezhong1": "家和而万事兴，国亦如是。",
	"#hezhong2": "你我同殿为臣，理当协力齐心。",
	"#ol_feiyi:die": "今为小人所伤，皆酒醉之误……",
	"#olfushi1": "缚豕待宰，要让阿瞒吃个肚儿溜圆。",
	"#olfushi2": "今儿个呀，咱们吃油汪汪的猪肉！",
	"#oldongdao1": "阿瞒远道而来，老夫当尽地主之谊！",
	"#oldongdao2": "我乃嵩兄故交，孟德来此可无忧虑。",
	"#lvboshe:die": "阿瞒，我沽酒回来……呃！",
	"#olgangshu1": "羲而立之年，当为立身之事。",
	"#olgangshu2": "总六军之要，秉选举之机。",
	"#oljianxuan1": "司马氏卧虎藏龙，大兄安能小觑。",
	"#oljianxuan2": "兄长以兽为猎，殊不知己亦为猎乎？",
	"#caoxi:die": "曹氏亡矣，大魏亡矣！",
	"#olweifu1": "蛮人畏威，当束甲抚之。",
	"#olweifu2": "以威为抚，可定万世之太平。",
	"#olkuansai1": "君既以礼相待，我何干戈相向。",
	"#olkuansai2": "我备美酒，待君玉帛。",
	"#ol_qianzhao:die": "玄德兄，弟……来迟矣……",
	"#cuorui1": "区区乌合之众，如何困得住我？！",
	"#cuorui2": "今日就让你见识见识老牛的厉害！",
	"#liewei1": "敌阵已乱，速速突围！",
	"#liewei2": "杀你，如同捻死一只蚂蚁！",
	"#niujin:die": "这包围圈太厚，老牛，尽力了……",
	"#mouzhu1": "宦官专权，今必诛之。",
	"#mouzhu2": "汝等罪大恶极，快快伏法。",
	"#yanhuo1": "乱世，才刚刚开始……",
	"#yanhuo2": "你很快就笑不出来了……",
	"#hejin:die": "不能遗祸世间……",
	"#niluan1": "如果不能功成名就，那就干脆为祸一方！",
	"#niluan2": "哈哈哈哈哈，天下之事皆无常！",
	"#hansui:die": "马侄儿为何……啊！",
	"#olsaogu1": "大汉铁骑，必昭卫霍遗风于当年。",
	"#olsaogu2": "笑驱百蛮，试问谁敢牧马于中原！",
	"#duanjiong:die": "秋霜落，天下寒……",
	"#oltianhou1": "雷霆雨露，皆为君恩。",
	"#oltianhou2": "天象之所显，世事之所为。",
	"#olchenshuo1": "命数玄奥，然吾可言之。",
	"#olchenshuo2": "天地神鬼之辩，在吾唇舌之间。",
	"#ol_zhouqun:die": "知万物而不知己命，大谬也……",
	"#olguangao1": "策马觅封侯，长驱万里之数。",
	"#olguangao2": "大丈夫行事，焉能畏首畏尾。",
	"#olhuiqi1": "今大星西垂，此天降清君侧之证。",
	"#olhuiqi2": "彗星竟于西北，此罚天狼之兆。",
	"#ol_wenqin:die": "天不佑国魏！天不佑族文！",
	"#olzhenying1": "吾闻世间有忠义，今欲为之。",
	"#olzhenying2": "吴虽兵临三郡，普宁死不降。",
	"#haopu:die": "徒做奔臣，死无其所……",
	"#olgoude1": "蝼蚁尚且偷生，况我大将军乎。",
	"#olgoude2": "为保身家性命，做奔臣又如何？",
	"#ol_mengda:die": "丞相援军何其远乎？",
	"#gushe1": "公既知天命，识时务，为何要兴无名之师，犯我疆界？",
	"#gushe2": "你若倒戈卸甲，以礼来降，仍不失封侯之位，国安民乐，岂不美哉？",
	"#jici1": "谅尔等腐草之荧光，如何比得上天空之皓月？",
	"#jici2": "你……诸葛村夫，你敢！",
	"#ol_wanglang:die": "你，你……哇啊……啊……",
	"#olzhuyan1": "心有灵犀，面如不老之椿。",
	"#olzhuyan2": "驻颜有术，此间永得芳容。",
	"#olleijie1": "雷劫锻体，清瘴涤魂。",
	"#olleijie2": "欲得长生，必受此劫。",
	"#lushi:die": "人世寻大道，何其愚也……",
	"#olhongji1": "玄德公当世人杰，奇货可居。",
	"#olhongji2": "张某慕君高义，愿鼎力相助。",
	"#olxinggu1": "乱世烽烟，贾者如火中取栗尔。",
	"#olxinggu2": "天下动荡，货行千里可易千金。",
	"#zhangshiping:die": "奇货犹在，其人老矣……",
	"#olxianbi1": "宦海如薄冰，求生逐富贵。",
	"#olxianbi2": "吾不欲为鱼肉，故为刀俎。",
	"#olzenrun1": "据图谋不轨，今奉诏索命。",
	"#olzenrun2": "休妄论芍陂之战，当诛之。",
	"#sunhong:die": "诸葛公何至于此……",
	"#oldaili1": "国朝倾覆，吾宁当为降虏乎！",
	"#oldaili2": "弃百姓之所仰，君子不为也。",
	"#luoxian:die": "汉亡矣，命休矣……",
	"#olhuiyun1": "舍身饲离火，不负万古名。",
	"#olhuiyun2": "义士今犹在，青笺气干云。",
	"#ol_huban:die": "无耻鼠辈，吾耻与为伍！",
	"#olmiuyan1": "未时引火，必大败蜀军。",
	"#olmiuyan2": "我等诈降，必欺姜维于不意。",
	"#olshilu1": "吾计不成，吾命何归？",
	"#olshilu2": "烟尘四起，无处寻路。",
	"#wangguan:die": "我本魏将，将军救我！！",
	"#oldianjun1": "大将军勿忧，翼可领后军。",
	"#oldianjun2": "诸将速行，某自领军殿后。",
	"#olkangrui1": "尔等魍魉，愿试吾剑之利乎？",
	"#olkangrui2": "诸君鼓力，克复中原指日可待！",
	"#ol_zhangyì:die": "伯约不见疲惫之国力乎？",
	"#olcuipo1": "虎贲冯河，何惧千城！",
	"#olcuipo2": "长锋在手，万寇辟易。",
	"#ol_zhujun:die": "李郭匹夫，安敢辱我！",
	"#olkenshang1": "择兵选将，一击而大白。",
	"#olkenshang2": "纵横三辅，垦伤庸富！",
	"#maxiumatie:die": "我兄弟，愿随父帅赴死！",
	"#oljianman1": "鹄巡山野，见腐羝而聒鸣！",
	"#oljianman2": "我蛮夷也，进退可无矩。",
	"#dongtuna:die": "孟获小儿，安敢杀我！",
	"#olbihun1": "辅弼天家，以扶朝纲。",
	"#olbihun2": "为国治政，尽忠匡辅。",
	"#oljianhe1": "身临朝阙，腰悬太阿。",
	"#oljianhe2": "位登三事，当配龙泉。",
	"#olchuanwu1": "祝融侵库，剑怀远志。",
	"#olchuanwu2": "斩蛇穿屋，其志绥远。",
	"#zhanghua:die": "桑化为柏，此非不祥乎？",
	"#olqiejian1": "东宫不稳，必使众人生异。",
	"#olqiejian2": "今三方鼎持，不宜擅动储君。",
	"#olnishou1": "臣以泥涂首，足证本心。",
	"#olnishou2": "人生百年，终埋一抔黄土。",
	"#quhuang:die": "臣死谏于斯，死得其所……",
	"#olchenglie1": "策马逐金雕，跨鞍寻天狼！",
	"#olchenglie2": "铁蹄踏南北，烈马惊黄沙！",
	"#macheng:die": "儿有辱父祖之威名……",
	"#olbixin1": "携笔落云藻，文书剖纤毫。",
	"#olbixin2": "执纸抒胸臆，挥笔涕汍澜。",
	"#olximo1": "帛尽漂洗，以待后用。",
	"#olximo2": "故帛无尽，而笔不停也。",
	"#olximo3": "以帛为纸，临池习书。",
	"#zhangzhi:die": "力透三分，何以言老……",
	"#oltongduo1": "上下调度，臣工皆有所为。",
	"#oltongduo2": "统筹部划，不糜国利分毫。",
	"#olzhubi1": "钱货之通者，在乎币。",
	"#olzhubi2": "融金为料，可铸五铢。",
	"#ol_liuba:die": "恨未见，铸兵为币之日……",
	"#olxiaosi1": "既抱必死之心，焉存偷生之意。",
	"#olxiaosi2": "为国效死，死得其所。",
	"#ol_furong:die": "吴狗！何有汉将军降者！",
	"#jueman1": "伤人之蛇蝎，向来善藏行。",
	"#jueman2": "我不欲伤人，奈何人自伤。",
	"#ahuinan:die": "什么？大王要杀我？",
	"#zhefu1": "非我善妒，实乃汝之过也！",
	"#zhefu2": "履行不端者，当有此罚。",
	"#yidu1": "彼之砒霜，吾之蜜糖。",
	"#yidu2": "巧动心思，以遗他人。",
	"#jin_guohuai:die": "我死后，切勿从粲、午之言……",
	"#olhuanfu1": "宦海浮沉，莫问前路。",
	"#olhuanfu2": "仕途险恶，吉凶难料。",
	"#olqingyi1": "布政得失，愿与诸君共议。",
	"#olqingyi2": "领军伐谋，还请诸位献策。",
	"#olzeyue1": "以令相迮，束阀阅之家。",
	"#olzeyue2": "以正相争，清朝野之妒。",
	"#xiahouxuan:die": "玉山倾颓心无尘……",
	"#dzkanpo1": "兵锋相交，便可知其玄机。",
	"#dzkanpo2": "先发一军，以探敌营虚实。",
	"#dzgengzhan1": "将无常败，军可常胜。",
	"#dzgengzhan2": "前进可活，后退即死。",
	"#dengzhong:die": "杀身报国，死得其所……",
	"#yangkuang1": "比干忠谏剖心死，箕子披发阳狂生。",
	"#yangkuang2": "梅伯数谏遭炮烙，来革顺志而用国。",
	"#cihuang1": "腹存经典，口吐雌黄。",
	"#cihuang2": "手把玉麈，胸蕴成篇。",
	"#sanku1": "纲常难为，应存后路。",
	"#sanku2": "世将大乱，当思保全。",
	"#wangyan:die": "影摇枭鸱动，三窟难得生……",
	"#qiongshou1": "戍守孤城，其势不侵。",
	"#qiongshou2": "吾头可得，而城不可得。",
	"#fenrui1": "待其疲敝，则可一击破之。",
	"#fenrui2": "覆军斩将，便在旦夕之间。",
	"#huojun:die": "恨，不能与使君共成霸业……",
	"#huamu1": "左杉右树，可共余生。",
	"#huamu2": "夫君，当与妾共越此人间之阶！",
	"#huamu3": "四月寻春花更香。",
	"#huamu4": "一树樱桃带雨红。",
	"#huamu5": "山重水复，心有灵犀。",
	"#huamu6": "灵之来兮如云。",
	"#qianmeng1": "前盟已断，杉树长别。",
	"#qianmeng2": "苍山有灵，杉树相依。",
	"#liangyuan1": "千古奇遇，共剪西窗。",
	"#liangyuan2": "金玉良缘，来日方长。",
	"#jisi1": "被褐怀玉，天放不羁。",
	"#jisi2": "心若野马，不系璇台。",
	"#caoxiancaohua:die": "爱恨有泪，聚散无常……",
	"#shanduan1": "浪子回头，其期未晚矣！",
	"#shanduan2": "心既存蛟虎，秉慧剑斩之！",
	"#yilie1": "从来天下义，只在青山中！",
	"#yilie2": "沥血染征袍，英名万古存！",
	"#jin_zhouchu:die": "死战死谏，死亦可乎！",
	"#tongxie1": "分则必败，合则可胜！",
	"#tongxie2": "唯同心协力，方可破敌。",
	"#zhaoyǎn:die": "援军不至，樊城之围难解……",
	"#olshengong1": "技艺若神，大巧不工。",
	"#olshengong2": "千锤百炼，始得神兵。",
	"#olqisi1": "匠作之道，当佐奇思。",
	"#olqisi2": "世无同刃，不循凡矩。",
	"#ol_puyuan:die": "锻兵万千，不及造屋二三……",
	"#qiaoli1": "别跑，且吃我一斧！",
	"#qiaoli2": "让我看看你的能耐。",
	"#qingliang1": "挥斧摇清风，笑颜比朝霞。",
	"#qingliang2": "素手抚重斧，飞矢擦靓装。",
	"#ruiji:die": "这斧头，怎么变这么重了……",
	"#yuanzi1": "不过是些身外之物罢了。",
	"#yuanzi2": "兹之家资，将军可尽取之。",
	"#liejie1": "头可断，然节不可夺。",
	"#liejie2": "血可流，而志不可改。",
	"#weizi:die": "敌军势众，速退！",
	"#luochong1": "宠至莫言非，思移难恃貌。",
	"#luochong2": "君王一时情，安有恩长久。",
	"#aichen1": "泪干红落面，心结发垂头。",
	"#aichen2": "思君一叹息，苦泪无言垂。",
	"#tengfanglan:die": "封侯归命，夫妻同归……",
	"#spmanwang1": "不服王命，纵兵凶战危，也应以血相偿！",
	"#spmanwang2": "夷汉所服，据南中诸郡，当以蛮王为号！",
	"#sp_menghuo:die": "有材而得生，无材而得纵……",
	"#huaiyuan1": "当怀远志，砥砺奋进。",
	"#huaiyuan2": "举有成资，谋有全策。",
	"#chongxin1": "非诚不行，无信不立。",
	"#chongxin2": "以诚待人，可得其心。",
	"#dezhang1": "以德怀柔，广得军心。",
	"#dezhang2": "德彰四海，威震八荒。",
	"#jin_yanghu:die": "当断不断，反受其乱……",
	"#zengou1": "此书定能置夏侯楙于死地。",
	"#zengou2": "夏侯违制，请君上定夺。",
	"#qhzhangji1": "魏武有子数十，唯我最长。",
	"#qhzhangji2": "长姐为大，众弟怎可悖之？",
	"#qinghegongzhu:die": "我言非虚，君上何疑于我？",
	"#yuanchou1": "鞭挞之仇，不共戴天！",
	"#yuanchou2": "三将军怎可如此对待我二人！",
	"#juesheng1": "向死而生，索性拼个鱼死网破！",
	"#juesheng2": "张翼德，我二人报仇来了！",
	"#fanjiangzhangda:die": "吴侯救我！",
	"#saodi1": "狄获悬野，秋风扫之！",
	"#saodi2": "戎狄作乱，岂能坐视！",
	"#zhuitao1": "敌将休走，汝命休矣！",
	"#zhuitao2": "长缨在手，敌寇何逃！",
	"#tianyu:die": "命数之沙，已尽矣……",
	"#olfengji1": "取舍有道，待机而赢。",
	"#olfengji2": "此退彼进，月亏待盈。",
	"#olxuanhui1": "今日，怕是要辜负温侯美意了。",
	"#olxuanhui2": "前盖以惑敌，今图穷而匕现。",
	"#ol_chendeng:die": "可无命，不可无脍……",
	"#jixian1": "全军出击，速攻敌城。",
	"#jixian2": "勿以我为念，攻城！",
	"#ol_zhuling:die": "母亲，弟弟，我来了……",
	"#lanjiang1": "一人擒虎力，千军拗锋芒。",
	"#lanjiang2": "勇力擎四疆，狂澜涌八荒。",
	"#wuyan:die": "世间再无擒虎客……",
	"#spolzhouxuan1": "详勘细察，洞若观火。",
	"#spolzhouxuan2": "知敌底细，方能百战百胜。",
	"#sp_ol_zhanghe:die": "我终究是看不透这人心……",
	"#olxianlve1": "行略于先，未雨绸缪。",
	"#olxianlve2": "先见梧叶，而后知秋。",
	"#olzaowang1": "大魏当兴，吾主可王。",
	"#olzaowang2": "身加九锡，当君不让。",
	"#ol_dongzhao:die": "昭，一心向魏，绝无二心……",
	"#zhuangshu1": "殿前妆梳，风姿绝世。",
	"#zhuangshu2": "顾影徘徊，丰容靓饰。",
	"#zhuangshu_basic": "鬓怯琼梳，朱颜消瘦。",
	"#zhuangshu_trick": "犀梳斜插，醉倚阑干。",
	"#zhuangshu_equip": "金梳富贵，蒙君宠幸。",
	"#chuiti1": "悲愁垂涕，三日不食。",
	"#chuiti2": "宜数涕泣，示忧愁也。",
	"#fengfangnv:die": "毒妇妒我……",
	"#oljuanxia1": "汝有何功，竟能居我之上！",
	"#oljuanxia2": "恃才傲立，恩怨必偿。",
	"#oldingcuo1": "丞相新丧，吾当继之。",
	"#oldingcuo2": "规画分部，筹度粮谷。",
	"#ol_yangyi:die": "魏延庸奴，吾，誓杀汝！",
	"#zhaosong1": "领诏者，可上而颂之。",
	"#zhaosong2": "今为诏，以上告下也。",
	"#lisi1": "骨肉至亲，化为他人。",
	"#lisi2": "梦想魂归，见所思兮。",
	"#zuofen:die": "惨怆愁悲……",
	"#olfengzi1": "丰姿秀丽，礼法不失。",
	"#olfengzi2": "倩影姿态，悄然入心。",
	"#oljizhan1": "得吉占之兆，延福运之气。",
	"#oljizhan2": "吉占逢时，化险为夷。",
	"#olfusong1": "陛下垂爱，妾身方有此位。",
	"#olfusong2": "长情颂，君王恩。",
	"#ol_wangrong:die": "只求吾儿，一生平安……",
	"#olxiuhao1": "吴蜀合同，可御魏敌。",
	"#olxiuhao2": "与吴修好，共为唇齿。",
	"#olsujian1": "不苟素俭，不置私产。",
	"#olsujian2": "高风亮节，摆袖却金。",
	"#ol_dengzhi:die": "修好未成，蜀汉恐危……",
	"#wanwei1": "梁、沛之间，非子廉无有今日。",
	"#wanwei2": "正使祸至，共死何苦！",
	"#yuejian1": "无文绣珠玉，器皆黑漆。",
	"#yuejian2": "性情约俭，不尚华丽。",
	"#ol_bianfuren:die": "心肝涂地，惊愕断绝……",
	"#quxi1": "不自改悔，终须驱徙。",
	"#quxi2": "奈何驱徙，不使存活。",
	"#bixiong1": "避凶而从吉，以趋荆州。",
	"#bixiong2": "逢凶化吉，遇难成祥。",
	"#duxi:die": "避凶不及，难……也……",
	"#juguan1": "吾欲自立，举兵拒关。",
	"#juguan2": "自立门户，拒关不开。",
	"#gaogan:die": "天不助我！",
	"#guanxu1": "不识此阵者，必为所迷。",
	"#guanxu2": "虚实相生，变化无穷。",
	"#yashi1": "德行贞绝者，谓其雅士。",
	"#yashi2": "鸿儒雅士，闻见多矣。",
	"#huangchengyan:die": "皆为虚妄……",
	"#wangong1": "强弓挽之，以射长箭！",
	"#wangong2": "挽弓如月，克定江夏！",
	"#huangzu:die": "命也……势也……",
	"#weiyi1": "无威仪者，不可奉社稷。",
	"#weiyi2": "有威仪者，进止雍容。",
	"#jinzhi1": "织锦为旗，以扬威仪。",
	"#jinzhi2": "坐而织锦，立则为仪。",
	"#panshu:die": "本为织女，幸蒙帝垂怜……",
	"#youlong1": "赤壁献策，再谱春秋！",
	"#youlong2": "卧龙出山，谋定万古！",
	"#luanfeng1": "凤栖枯木，浴火涅槃！",
	"#luanfeng2": "青鸾归宇，雏凤还巢！",
	"#wolongfengchu:die": "铁链，东风，也难困这魏军……",
	"#mubing1": "兵者，不唯在精，亦在广。",
	"#mubing2": "男儿当从军，功名马上取。",
	"#ziqu1": "兵马已动，尔等速将粮草缴来。",
	"#ziqu2": "留财不留命，留命不留财。",
	"#diaoling1": "兵甲已足，当汇集三军。",
	"#diaoling2": "临军告急，当遣将急援。",
	"#sp_zhangliao:die": "孤军难鸣，进退维谷……",
	"#tuogu1": "君托以六尺之孤，爽，当寄百里之命。",
	"#tuogu2": "先帝以大事托我，任重而道远。",
	"#shanzhuan1": "打入冷宫，禁足绝食。",
	"#shanzhuan2": "我言既出，谁敢不从？",
	"#caoshuang:die": "悔不该降了司马懿……",
	"#zlhuji1": "骑虎云游，探求道法。",
	"#zlhuji2": "求仙长生，感悟万象。",
	"#zlshoufu1": "得授符法，驱鬼灭害。",
	"#zlshoufu2": "吾得法器，必斩万恶！",
	"#zhangling:die": "远离尘世，脱俗成仙……",
	"#bizheng1": "弼亮四世，正色率下。",
	"#bizheng2": "弼佐辅君，国事政法。",
	"#yidian1": "无传书卷记，功过自有评。",
	"#yidian2": "佚以典传，千秋谁记？",
	"#sunshao:die": "此去一别，难见文举……",
	"#fenyue1": "逆贼势大，且扎营寨，击其懈怠。",
	"#fenyue2": "兵有其变，不在众寡。",
	"#huangfusong:die": "吾只恨黄巾未平，不能报效朝廷……",
	"#neifa1": "自相恩残，相煎何急。",
	"#neifa2": "同室内伐，贻笑外人。",
	"#yuantanyuanshang:die": "兄弟难齐心，该有此果……",
	"#yuxu1": "誉名浮虚，播流四海。",
	"#yuxu2": "誉虚之名，得保一时。",
	"#xjshijian1": "国家安危，在于足下。",
	"#xjshijian2": "行之得道，即社稷用宁。",
	"#xujing:die": "漂薄风波，绝粮茹草……",
	"#weicheng1": "略施谋略，敌军便信以为真。",
	"#weicheng2": "吾只观雅规，而非说客。",
	"#daoshu1": "得此文书，丞相定可高枕无忧。",
	"#daoshu2": "让我看看，这是什么机密。",
	"#jianggan:die": "丞相，再给我一次机会啊！",
	"#xinfu_lingren1": "敌势已缓，休要走了老贼！",
	"#xinfu_lingren2": "精兵如炬，困龙难飞！",
	"#xinfu_fujian1": "兵者，诡道也。",
	"#xinfu_fujian2": "粮资军备，一览无遗。",
	"#caoying:die": "曹魏天下存，魂归故土安……",
	"#xinfu_jianjie1": "卧龙凤雏，二者得一，可安天下。",
	"#xinfu_jianjie2": "公怀王佐之才，宜择人而仕。",
	"#xinfu_jianjie3": "二人齐聚，汉室可兴矣。",
	"#xinfu_chenghao1": "好，很好，非常好。",
	"#xinfu_chenghao2": "您的话也很好。",
	"#xinfu_yinshi1": "山野闲散之人，不堪世用。",
	"#xinfu_yinshi2": "我老啦，会有胜我十倍的人来帮助你。",
	"#simahui:die": "这似乎……没那么好了……",
	"#xinfu_wuniang1": "虽为女子身，不输男儿郎。",
	"#xinfu_wuniang2": "剑舞轻盈，沙场克敌。",
	"#xinfu_xushen1": "救命之恩，涌泉相报。",
	"#xinfu_xushen2": "解我危难，报君华彩。",
	"#baosanniang:die": "我还想与你，共骑这雪花驹……",
	"#jilei1": "食之无肉，弃之有味。",
	"#jilei2": "曹公之意我已了然！",
	"#danlao1": "我喜欢！",
	"#danlao2": "来来，一人一口！",
	"#yangxiu:die": "我固自以死之晚也……",
	"#bifa1": "笔墨纸砚，皆兵器也！",
	"#bifa2": "汝德行败坏，人所不齿也！",
	"#songci1": "将军德才兼备，大汉之栋梁也！",
	"#songci2": "汝窃国奸贼，人人得而诛之！",
	"#chenlin:die": "来人……我的笔呢……",
	"#yuanhu1": "将军，这件兵器可还趁手？",
	"#yuanhu2": "刀剑无眼，须得小心防护。",
	"#yuanhu3": "宝马配英雄！哈哈哈哈……",
	"#caohong:die": "福兮祸所伏……",
	"#xiahouba:die": "弃魏投蜀，死而无憾……",
	"#yongsi1": "大汉天下，已半入我手！",
	"#yongsi2": "玉玺在手，天下我有。",
	"#weidi1": "我才是皇帝！",
	"#weidi2": "你们都得听我的号令！",
	"#yuanshu:die": "可恶！就差……一步了……",
	"#lihun1": "将军~这些都赏给妾身好不好嘛~",
	"#lihun2": "这些人家不喜欢嘛~还给你吧~",
	"#chongzhen1": "贼将休走，可敢与我一战？",
	"#chongzhen2": "陷阵杀敌，一马当先！",
	"#tianming1": "朕乃大汉皇帝，天命之子！",
	"#tianming2": "皇汉国祚，千年不息！",
	"#mizhao1": "爱卿世受皇恩，堪此重任。",
	"#mizhao2": "此诏事关重大，切记小心行事。",
	"#liuxie:die": "为什么，不把复兴汉室的权力交给我……",
	"#huanshi1": "缓乐之危急，释兵之困顿。",
	"#huanshi2": "尽死生之力，保友邦之安。",
	"#hongyuan1": "自舍其身，施于天下。",
	"#hongyuan2": "诸将莫慌，粮草已到。",
	"#mingzhe1": "明以洞察，哲以保身。",
	"#mingzhe2": "塞翁失马，焉知非福？",
	"#zhugejin:die": "君臣不相负，来世复君臣……",
	"#aocai1": "吾主圣明，泽披臣属。",
	"#aocai2": "哼，易如反掌。",
	"#duwu1": "破曹大功，正在今朝！",
	"#duwu2": "全力攻城！言退者，斩！",
	"#zhugeke:die": "重权震主，是我疏忽了……",
	"#huxiao1": "大仇未报，还不能放弃！",
	"#huxiao2": "虎父无犬女！",
	"#xueji1": "这炽热的鲜血，父亲，你可感觉得到？",
	"#xueji2": "取你首级，祭先父之灵！",
	"#wuji1": "我感受到了，父亲的力量。",
	"#wuji2": "我也要像父亲那样坚强。",
	"#guanyinping:die": "父亲，你来救我了吗……",
	"#junbing1": "男儿慷慨，军中豪迈。",
	"#junbing2": "郡国当有搜狩习战之备。",
	"#quji1": "若不去兵之疾，则将何以守国？",
	"#quji2": "愿为将士，略尽绵薄。",
	"#simalang:die": "微功未效，有辱国恩……",
	"#shenxian1": "抚慰军心，以安国事。",
	"#shenxian2": "愿尽己力，为君分忧。",
	"#qiangwu1": "咆哮沙场，万夫不敌！",
	"#qiangwu2": "父亲未尽之业，由我继续！",
	"#zhangxingcai:die": "复兴汉室之路，臣妾再也不能陪伴左右了……",
	"#moukui1": "你的死期到了。",
	"#moukui2": "同归于尽吧。",
	"#fuwan:die": "后会有期……",
	"#liangzhu1": "吾愿携弩，征战沙场，助君一战！",
	"#liangzhu2": "两国结盟，你我都是一家人。",
	"#fanxiang1": "今夕一别，不知何日再见。",
	"#fanxiang2": "兄命难违，从此两别。",
	"#sp_sunshangxiang:die": "东途难归，初心难追……",
	"#kaikang1": "典将军，比比看谁杀敌更多！",
	"#kaikang2": "父亲快走，有我殿后！",
	"#caoang:die": "典将军，还是你赢了……",
	"#weikui1": "休整片刻，且随我杀出一条血路。",
	"#weikui2": "骑兵列队，准备突围。",
	"#lizhan1": "行伍严整，百战不殆。",
	"#lizhan2": "敌军围困万千重，我自岿然不动。",
	"#sp_caoren:die": "城在人在，城破人亡……",
	"#zhoufu1": "违吾咒者，倾死灭亡。",
	"#zhoufu2": "咒宝符命，速显威灵。",
	"#yingbin1": "所呼立至，所召立前。",
	"#yingbin2": "朱雀玄武，誓为我征。",
	"#zhangbao:die": "黄天……为何？！",
	"#zishu1": "慢着，让我来！",
	"#zishu2": "身外之物，不要也罢！",
	"#yingyuan1": "接好嘞！",
	"#yingyuan2": "好牌只用一次怎么够？",
	"#maliang:die": "皇叔为何不听我之言？",
	"#gongao1": "恪尽职守，忠心事主。",
	"#gongao2": "攻城拔寨，建功立业。",
	"#juyi1": "司马氏篡权，我当替天伐之！",
	"#benghuai_zhugedan1": "咳……咳咳……",
	"#weizhong1": "定当夷司马氏三族！",
	"#zhugedan:die": "诸葛一氏定会为我复仇！",
	"#kunfen1": "兴蜀需时，众将且勿惫怠！",
	"#kunfen2": "纵使困顿难行，亦当砥砺奋进！",
	"#fengliang1": "丞相大义，维岂有不从之理？",
	"#fengliang2": "得遇丞相，再生之德！",
	"#sp_jiangwei:die": "伯约已尽力而为，奈何大汉，国运衰微……",
	"#ol_shichou1": "灭族之恨，不共戴天！",
	"#ol_shichou2": "休想跑！",
	"#sp_machao:die": "西凉，回不去了……",
	"#canshi1": "众人与蝼蚁何异？哈哈哈……",
	"#canshi2": "难道一切不在朕手中？",
	"#chouhai1": "哼，树敌三千又如何？",
	"#chouhai2": "不发狂，就灭亡！",
	"#guiming1": "这就是末世皇帝的不归路！",
	"#guiming2": "这是要我命归黄泉吗？",
	"#sunhao:die": "命啊！命！",
	"#biluan1": "身处乱世，自保足矣。",
	"#biluan2": "避一时之乱，求长世安稳。",
	"#lixia1": "英雄可安身立命于交州之地。",
	"#lixia2": "将军真乃国之栋梁。",
	"#shixie:die": "我这一生，足矣……",
	"#fengpo1": "对付你，用不着我家哥哥亲自上阵！",
	"#fengpo2": "等我提枪上马，打你个落花流水！",
	"#mayunlu:die": "呜呜……是你们欺负人……",
	"#yishe1": "你有你的权谋，我，哼，自有我的道义。",
	"#yishe2": "行大义之举，须有向道之心。",
	"#bushi1": "布施行善，乃道义之本。",
	"#bushi2": "行布施，得天道。",
	"#midao1": "从善从良，从五斗米道。",
	"#midao2": "兼济天下，解百姓之忧。",
	"#zhanglu:die": "但，归置于道，无意凡事争斗……",
	"#ranshang1": "战火燃尽英雄胆！",
	"#ranshang2": "尔等，竟如此歹毒！",
	"#hanyong1": "藤甲军从无对手，不服来战！",
	"#hanyong2": "犯我者，杀！",
	"#wutugu:die": "撤，快撤！",
	"#chenqing1": "陈生死离别之苦，悲乱世之跌宕。",
	"#chenqing2": "乱世陈情，字字血泪！",
	"#mozhi1": "博闻强识，不辱才女之名。",
	"#mozhi2": "今日默书，方恨千卷诗书未能全记。",
	"#sp_caiwenji:die": "昨日重现，大漠飞沙……",
	"#qirang1": "集母亲之智，效父亲之法，祈以七星。",
	"#qirang2": "仙甲既来，岂无仙术乎。",
	"#yuhua1": "此乃仙人之物，不可轻弃。",
	"#yuhua2": "凤羽飞烟，乘化仙尘。",
	"#zhugeguo:die": "方生方死，方死方生……",
	"#fenxin1": "杀人，诛心。",
	"#fenxin2": "主上，这是最后的机会……",
	"#lingju:die": "主上，对不起……",
	"#yawang1": "琰，定不负诸位雅望！",
	"#yawang2": "君子，当以正气立于乱世。",
	"#xunzhi1": "春秋大义，自在我心！",
	"#xunzhi2": "成大义者，这点牺牲算不得什么！",
	"#cuiyan:die": "尔等，皆是欺世盗名之辈！",
	"#wusheng_jsp_guanyu1": "以义传魂，以武入圣！",
	"#wusheng_jsp_guanyu2": "义击逆流，武安黎庶。",
	"#danji1": "单骑护嫂千里，只为桃园之义！",
	"#danji2": "独身远涉，赤心归国！",
	"#jsp_guanyu:die": "樊城一去，死亦无惧！",
	"#jiqiao1": "驭巧器，以取先机。",
	"#jiqiao2": "颖悟之人，不以拙力取胜。",
	"#linglong1": "哼~书中自有玲珑心~",
	"#linglong2": "哼~自然是多多益善咯~",
	"#jsp_huangyueying:die": "只恨不能再助夫君了……",
	"#meibu1": "若要动手，就请先杀我吧！",
	"#meibu2": "萧墙之乱，宫闱之衅，实为吴国之祸啊！",
	"#mumu1": "只求相夫教子，不求参政议事。",
	"#mumu2": "立储乃国家大事，我们姐妹不便参与。",
	"#sunluyu:die": "姐姐，你且好自为之……",
	"#fentian1": "烈火燎原，焚天灭地！",
	"#fentian2": "骄阳似火，万物无生！",
	"#zhiri1": "好舒服，这太阳的力量！",
	"#zhiri2": "你以为这样就已经结束了？",
	"#hanba:die": "应龙，是你在呼唤我吗……",
	"#yinbing1": "将军走此小道，追兵交我应付！",
	"#yinbing2": "追兵凶猛，末将断后！",
	"#juedi1": "提起武器，最后一搏！",
	"#juedi2": "困兽之斗，以全忠义！",
	"#zumao:die": "孙将军，已经，安全了吧……",
	"#zhenwei1": "江夏防线，固若金汤！",
	"#zhenwei2": "再敢来犯，仍叫你无功而返！",
	"#wenpin:die": "终于，也守不住了……",
	"#xingwu1": "哼，不要小瞧女孩子哦！",
	"#xingwu2": "姐妹齐心，其利断金。",
	"#daxiaoqiao:die": "伯符，公瑾，请一定要守住我们的江东啊！",
	"#luanzhan1": "受袁氏大恩，当效死力。",
	"#luanzhan2": "现，正是我乌桓崛起之机。",
	"#tadun:die": "呃……不该趟曹袁之争的浑水……",
	"#zhidao1": "乱世之中，能者为王！",
	"#zhidao2": "谁有地盘，谁是老大！",
	"#jili1": "寄人篱下的日子，不好过呀！",
	"#jili2": "这份恩德，白虎记下了！",
	"#yanbaihu:die": "严舆吾弟，为兄来陪你了……",
	"#shefu1": "圈套已设，埋伏已完，只等敌军进来。",
	"#shefu2": "如此天网，量你插翅也难逃。",
	"#benyu1": "天下大乱，群雄并起，必有命事。",
	"#benyu2": "曹公智略乃上天所授！",
	"#chengyu:die": "此诚报效国家之时，吾却休矣……",
	"#juesi1": "死都不怕，还能怕你！",
	"#juesi2": "抬棺而战，不死不休！",
	"#sp_pangde:die": "受魏王厚恩，唯以死报之……",
	"#jianshu1": "来，让我看一出好戏吧。",
	"#jianshu2": "纵有千军万马，离心则难成大事。",
	"#yongdi1": "臣愿为世子，肝脑涂地。",
	"#yongdi2": "嫡庶有别，尊卑有序。",
	"#sp_jiaxu:die": "立嫡之事，真是取祸之道！",
	"#tuifeng1": "摧锋陷阵，以杀贼首！",
	"#tuifeng2": "敌锋之锐，我已尽知。",
	"#litong:die": "战死沙场，快哉……",
	"#ziyuan1": "区区薄礼，万望使君笑纳。",
	"#ziyuan2": "雪中送炭，以解君愁。",
	"#jugu1": "钱？要多少有多少。",
	"#jugu2": "君子爱财，取之有道。",
	"#mizhu:die": "劣弟背主，我之罪也……",
	"#hongde1": "江南重义，东吴尚德。",
	"#hongde2": "德无单行，福必双至。",
	"#dingpan1": "从孙者生，从刘者死！",
	"#dingpan2": "多行不义必自毙！",
	"#buzhi:die": "交州已定，主公尽可放心……",
	"#shanjia1": "缮甲厉兵，伺机而行。",
	"#shanjia2": "战，当取精锐之兵，而弃驽钝也。",
	"#caochun:die": "银甲在身，竟败于你手！",
	"#lianzhu1": "若有不臣之心，定当株连九族。",
	"#lianzhu2": "你们都是一条绳上的蚂蚱~",
	"#dongbai:die": "放肆，我要让爷爷赐你们死罪！",
	"#fanghun1": "万花凋落尽，一梅独傲霜。",
	"#fanghun2": "暗香疏影处，凌风踏雪来！",
	"#fuhan1": "承先父之志，扶汉兴刘。",
	"#fuhan2": "天将降大任于我。",
	"#zhaoxiang:die": "遁入阴影之中……",
	"#fuman1": "恩威并施，蛮夷可为我所用！",
	"#fuman2": "发兵器啦！",
	"#mazhong:die": "丞相不在，你们竟然……",
	"#bingzheng1": "自古，就是邪不胜正！",
	"#bingzheng2": "主公面前，岂容小人搬弄是非。",
	"#sheyan1": "公事为重，宴席不去也罢。",
	"#sheyan2": "还是改日吧。",
	"#dongyun:die": "大汉，要亡于宦官之手了……",
	"#xiashu1": "吾有密信，特来献于将军。",
	"#xiashu2": "将军若不信，可亲自验看！",
	"#kuanshi1": "不知者，无罪。",
	"#kuanshi2": "罚酒三杯，下不为例。",
	"#kanze:die": "我早已做好了牺牲的准备……",
	"#shanxi1": "敌援未到，需要速战速决！",
	"#shanxi2": "快马加鞭，赶在敌人戒备之前！",
	"#heqi:die": "别拿走……我的装备！",
	"#xiaoguo1": "三军听我号令，不得撤退！",
	"#xiaoguo2": "看我先登城头，立下首功！",
	"#yuejin:die": "箭疮发作，吾命休矣……",
	"#hengzheng1": "老夫进京平乱，岂能空手而归？",
	"#hengzheng2": "谁的？都是我的！",
	"#sp_dongzhuo:die": "王允老贼，罪该……",
	"#zhendu1": "怪只怪你，不该生有皇子！",
	"#zhendu2": "后宫之中，岂有你的位置！",
	"#qiluan21": "待我召吾兄入宫，谁敢不从？",
	"#qiluan22": "本后自有哥哥在外照应，有什么好担心的！",
	"#hetaihou:die": "你们男人造的孽，非要说什么红颜祸水……",
	"#fenxun1": "取封侯爵赏，正在今日！",
	"#fenxun2": "给我拉过来！",
	"#dingfeng:die": "这风，太冷了……",
	"#gzjili1": "蒺藜骨朵，威震慑敌！",
	"#gzjili2": "看我一招，铁蒺藜骨朵！",
	"#shamoke:die": "五溪蛮夷，不可能输！",
	"#chuanxin1": "一箭穿心，哪里可逃？",
	"#chuanxin2": "穿心之痛，细细品吧，哈哈哈哈！",
	"#zfengshi1": "大军压境，还不卸甲受降！",
	"#zfengshi2": "放下兵器，饶你不死！",
	"#zhangren:die": "本将军败于诸葛，无憾！",
	"#wylianji1": "两计扣用，以催强势。",
	"#wylianji2": "容老夫细细思量。",
	"#moucheng1": "董贼伏诛，天下太平！",
	"#moucheng2": "叫天不应，叫地不灵，今天就是你的死期！",
	"#wangyun:die": "努力谢关东诸公，勤以国家为念！",
	"#qianya1": "君子不妄动，动必有道。",
	"#qianya2": "哎！将军过誉了！",
	"#shuimeng1": "你我唇齿相依，共御外敌，何如？",
	"#shuimeng2": "今兵薄势寡，可遣某为使往说之。",
	"#sunqian:die": "恨不能……得见皇叔早登大宝，咳咳咳……",
	"#tiandu_xizhicai1": "既是如此。",
	"#tiandu_xizhicai2": "天意，不可逆。",
	"#xianfu1": "辅佐明君，从一而终。",
	"#xianfu2": "吾于此生，竭尽所能。",
	"#xianfu3": "赠人玫瑰，手有余香。",
	"#xianfu4": "主公之幸，我之幸也。",
	"#xianfu5": "春蚕至死，蜡炬成灰！",
	"#xianfu6": "愿为主公，尽我所能。",
	"#chouce1": "一筹一划，一策一略。",
	"#chouce2": "主公之忧，吾之所思也。",
	"#xizhicai:die": "为何……不再给我……一点点时间……",
	"#fuqi1": "既来之，休走之！",
	"#fuqi2": "白马？哼，定叫他有来无回！",
	"#jiaozi1": "今日之获，皆是吾之功劳。",
	"#jiaozi2": "今吾于此，尔等皆为飞灰！",
	"#quyi:die": "为主公戎马一生，主公为何如此对我！",
	"#qingzhong1": "执政为民，当尽我所能。",
	"#qingzhong2": "吾自幼流离失所，更能体恤百姓之苦。",
	"#weijing1": "战事兴起，最苦的，仍是百姓。",
	"#weijing2": "国乃大家，保大家才有小家。",
	"#luzhi:die": "年迈力微，是该告老还乡了……",
	"#hengjiang1": "霸必奋勇杀敌，一雪夷陵之耻！",
	"#hengjiang2": "江横索寒，阻敌绝境之中！",
	"#mingshi1": "孔门之后，忠孝为先。",
	"#mingshi2": "名士之风，仁义高洁。",
	"#lirang1": "夫礼先王以承天之道，以治人之情。",
	"#lirang2": "谦者，德之柄也，让者，礼之逐也。",
	"#shushen1": "船到桥头自然直。",
	"#shushen2": "妾身无恙，相公请安心征战。",
	"#shenzhi1": "子龙将军，一切都托付给你了。",
	"#shenzhi2": "阿斗，相信妈妈，没事的。",
	"#shuangren1": "吃我一记三尖两刃刀！",
	"#shuangren2": "仲国大将纪灵在此！",
	"#shangyi1": "大丈夫为人坦荡，看下手牌算什么。",
	"#shangyi2": "敌情已了然于胸，即刻出发！",
	"#oltianhou_spade": "月离于毕，俾滂沱矣。",
	"#oltianhou_heart": "七月流火，涸我山泽。",
	"#oltianhou_club": "雪瀑寒霜落，霜下可折竹。",
	"#oltianhou_diamond": "云雾弥野，如夜之幽。",
	"#olxieju1": "今举大义，誓与仲恭共死。",
	"#olxieju2": "天降大任，当与志士同忾。",
	"#olfeibai1": "字之体势，一笔而成。",
	"#olfeibai2": "超前绝伦，独步无双。",
	"#sppanqin1": "百兽嘶鸣筋骨振，蛮王起兮万人随！",
	"#sppanqin2": "呼勒格诗惹之民，召南中群雄复起！",
	"#weishu1": "水来土掩，兵来将挡。",
	"#weishu2": "吴人来犯，当用心戒备。",
	"#lingren_jianxiong1": "且收此弩箭，不日奉还。",
	"#lingren_xingshang1": "此刀枪军械，尽归我有。",
	"#tiaoxin_xiahouba1": "跪下受降，饶你不死！",
	"#tiaoxin_xiahouba2": "黄口小儿，可听过将军名号？",
	"#paoxiao_xiahouba1": "喝啊！",
	"#paoxiao_xiahouba2": "受死吧！",
	"#shensu1_xiahouba1": "冲杀敌阵，来去如电！",
	"#shensu1_xiahouba2": "今日有恙在身，须得速战速决！",
	"#xiaoji_sp_sunshangxiang1": "弓马何须忌红妆？",
	"#xiaoji_sp_sunshangxiang2": "双剑夸巧，不让须眉！",
	"#tiaoxin_sp_jiangwei1": "今日天公作美，怎能不战而退？",
	"#tiaoxin_sp_jiangwei2": "贼将无胆，何不早降！",
	"#ranshang21": "战火燃尽英雄胆！",
	"#ranshang22": "尔等，竟如此歹毒！",
	"#jieyuan_more": "我所有的努力，都是为了杀你！",
	"#jieyuan_less": "我必须活下去！",
	"#xintan1": "让心中之火慢慢吞噬你吧！哈哈哈哈哈哈……",
	"#xintan2": "人人心中都有一团欲望之火！",
	"#tianxiang_daxiaoqiao1": "哼，我才不怕你呢~",
	"#tianxiang_daxiaoqiao2": "替我挡着吧~",
	"#zhengnan1": "末将愿承父志，随丞相出征！",
	"#zhengnan2": "索全凭丞相差遣，万死不辞！",
	"#wusheng_guansuo1": "逆贼，可识得关氏之勇？",
	"#dangxian_guansuo1": "各位将军，且让小辈先行出战！",
	"#zhiman_guansuo1": "蛮夷可抚，不可剿！",
	"#guansuo:die": "只恨天下未平，空留遗志……",
	"#duanbing_heqi1": "可真是把好刀啊！",
	"#reyingzi_heqi1": "人靠衣装马靠鞍！",
	"#fenwei_heqi1": "我的船队，要让全建业城都看见！",
	"#lanjiang_heqi1": "大江惊澜，浪涌四极之疆！",
	"#duanbing1": "众将官，短刀出鞘。",
	"#duanbing2": "短兵轻甲也可取汝性命！",
	"#jingong1": "若无老夫之谋，尔等皆化为腐土也。",
	"#jingong2": "董贼旧部，可尽诛之！",
	"#olxiaofan1": "吾得三顾之伯乐，必登九丈之高台。",
	"#olxiaofan2": "诸君食肉而鄙，空有大腹作碍。",
	"#oltuishi1": "备者，久居行伍之丘八，何知礼仪？",
	"#oltuishi2": "老革荒悖，可复道邪？",
	"#nzry_cunmu_ol_pengyang1": "腹有锦绣千里，奈何偏居一隅。",
	"#nzry_cunmu_ol_pengyang2": "心大志广之人，必难以保安。",
	"#ol_pengyang:die": "羕酒后失言，主公勿怪……",
	"#olyicheng1": "改帜易土，当奉玄德公为汝南之主。",
	"#olyicheng2": "地无常主，人有恒志，其择木而栖。",
	"#ol_liupi:die": "玄德公速行，曹军某自当之……",
	"#olpijing1": "今青锋在手，必破敌军于域外。",
	"#olpijing2": "荆楚多锦绣，安能丧于小儿之手！",
	"#liupan:die": "今袍泽离散，无以为战……",
	"#olqingya1": "罡风从虎，威震四方！",
	"#olqingya2": "铁车过处，寸草不生！",
	"#yadan:die": "多谢丞相不杀之恩……",
	
	// sp2
	"#staranshu1": "与民休养生息，则国可得安泰。",
	"#staranshu2": "春种其粟，秋得其实。",
	"#starkuangzuo1": "吾辈向汉，当矢志不渝，不可坐视神州陆沉。",
	"#starkuangzuo2": "家国兴衰，系于一肩之上，朝纲待重整之时。",
	"#starchengfeng1": "承天子之任，奉天子之统。",
	"#starchengfeng2": "臣簇于君侧，为耳目，为股肱。",
	"#star_xunyu:die": "臣固忠于国，非一家之臣……",
	"#mpjianlin1": "吾性至俭，不能自奉，何况遗人？",
	"#mpjianlin2": "以财自污，则免清高之祸。",
	"#mpsixiao1": "风木之悲，痛彻肺腑。",
	"#mpsixiao2": "外容毁悴，内心神伤。",
	"#mp_wangrong:die": "自阮、嵇云亡，为世所羁，实有所叹……",
	"#starliangyan1": "佳燕并头语，不恋雕梁而归于万里。",
	"#starliangyan2": "灵禽非醴泉不饮，非积善之家不栖。",
	"#starminghui1": "大智若愚，女子之锦绣常隐于华服。",
	"#starminghui2": "知者不惑，心有明镜以照人。",
	"#star_zhangchunhua:die": "我何为也，竟称可憎之老物？",
	"#xiongsuan1": "朝中无一是男儿，谁敢拦我二人！",
	"#xiongsuan2": "挟持天子，执掌重兵，天下可图！",
	"#liqueguosi:die": "文和之言，诚不欺我……",
	"#starxiaoyan1": "万军付薪柴，戾火燃苍穹。",
	"#starxiaoyan2": "九州硝烟起，烽火灼铁衣。",
	"#starzongshi1": "四世三公之家，当为天下之望。",
	"#starzongshi2": "大势在我，可怀问鼎之心。",
	"#starjiaowang1": "剑顾四野，马踏青山，今谁堪敌手？",
	"#starjiaowang2": "并土四州，带甲百万，吾可居大否？",
	"#staraoshi1": "无傲骨近于鄙夫，有傲心方为君子。",
	"#staraoshi2": "得志则喜，临富贵如何不骄？",
	"#star_yuanshao:die": "骄兵必败，奈何不记前辙……",
	"#starweilin1": "今吾入京城，欲寻人而食。",
	"#starweilin2": "天下事在我，我今为之，谁敢不从？",
	"#starzhangrong1": "尔欲行大事，问过吾掌中兵刃否？",
	"#starzhangrong2": "西凉铁骑曳城，天下高楼可摧！",
	"#starhaoshou1": "满朝诸公，视吾剑不利否？",
	"#starhaoshou2": "顺我者生，逆我者十死无生！",
	"#star_dongzhuo:die": "美人迷人眼，溢权昏人智……",
	"#starcanxi1": "大势散于天下，全宝玺者其谁？",
	"#starcanxi2": "汉祚已僵待死，吾可取而代之。",
	"#starpizhi1": "春秋无义，秉笔汗青者，胜者尔。",
	"#starpizhi2": "大厦将倾，居危墙之下者，愚夫尔。",
	"#starzhonggu1": "既登九五之尊位，何惧为冢中之枯骨？",
	"#starzhonggu2": "天下英雄多矣，大浪淘沙，谁不老冢中？",
	"#star_yuanshu:die": "英雄不死则已，死则举大名尔……",
	"#starsujun1": "将为军魂，需以身作则。",
	"#starsujun2": "整肃三军，可育虎贲。",
	"#starlifeng1": "锋出百砺，健卒亦如是。",
	"#starlifeng2": "强军者，必校之以三九，练之三伏。",
	"#star_caoren:die": "濡须之败，此生之耻……",
	"#mpjiusong1": "大人以天地为一朝，以万期为须臾。",
	"#mpjiusong2": "以天为幕，以地为席！",
	"#mpmaotao1": "痛饮酕醄，醉生梦死！",
	"#mpmaotao2": "杜康既为酒圣，吾定为醉侯！",
	"#mpbishi1": "往矣！吾将曳尾于涂中。",
	"#mpbishi2": "仕途多舛，哪有醉卧山野痛快！",
	"#mp_liuling:die": "哈……呼……（鼾声渐小）",
	"#wusheng_dc_jsp_guanyu1": "以义传魂，以武入圣！",
	"#wusheng_dc_jsp_guanyu2": "义击逆流，武安黎庶。",
	"#dclibang1": "天下熙攘，所为者利尔。",
	"#dclibang2": "我有武力傍身，必可待价而沽。",
	"#dcwujie1": "腹中有粮则脊自直，非节盈之。",
	"#dcwujie2": "气节？可当粟米果腹乎！",
	"#dc_mengda:die": "司马老贼害我，诸葛老贼误我……",
	"#dcxiuwen1": "书生笔下三尺剑，毫锋可杀人。",
	"#dcxiuwen2": "吾以书执剑，可斩世间魍魉。",
	"#dclongsong1": "百家诸子，且听九霄龙吟。",
	"#dclongsong2": "朗朗书声，岂虚于刀斧铮鸣。",
	"#guānning:die": "为国捐生，虽死无憾……",
	"#dcniji1": "善战者后动，一击而毙敌。",
	"#dcniji2": "我所善者，后发制人尔。",
	"#sunhuan:die": "此建功立业之时，奈何……",
	"#dctingxian1": "大争之世，当举兵行义。",
	"#dctingxian2": "聚兵三千众，可为天下先。",
	"#dcbenshi1": "今，或为鱼肉，或为刀俎。",
	"#dcbenshi2": "所征徭者必死，可先斩之。",
	"#sunlang:die": "为关将军死，无憾……",
	"#dccuichuan1": "老臣在，必不使吴垒倾颓。",
	"#dccuichuan2": "舍老朽之躯，擎广厦之柱。",
	"#dczhengxu1": "陛下怜子无序，此取祸之道。",
	"#dczhengxu2": "古语有云，上尊而下卑。",
	"#shiyi:die": "吾故后，务从省约……",
	"#dcdeshi1": "你我素无仇怨，何故欺之太急。",
	"#dcdeshi2": "恃强凌弱，非大丈夫之所为。",
	"#dcwuyuan1": "生为关氏之妇，虽死亦不悔。",
	"#dcwuyuan2": "我夫关长生，乃盖世之英雄。",
	"#dc_hujinding:die": "妾不畏死，唯畏君断情……",
	"#dcdouzhen1": "擂鼓击柝，庆我兄弟凯旋。",
	"#dcdouzhen2": "匹夫欺我江东无人乎。",
	"#liyixiejing:die": "蜀军凶猛，虽力战犹不敌……",
	"#dcjinjian1": "卑微之人，脊中亦有七寸硬骨！",
	"#dcjinjian2": "目不识丁，胸中却含三分浩气！",
	"#dcshizhao1": "并无夹带，阁下多心了。",
	"#dcshizhao2": "将军多虑，顺安有忤逆之心？",
	"#mushun:die": "这，何来的大风？",
	"#dcfuning1": "为国效力，不可逞一时之气。",
	"#dcfuning2": "诸将和睦，方为国家之幸。",
	"#dcbingji1": "权其轻重，而后施令。",
	"#dcbingji2": "罪而后赦，以立恩威。",
	"#dc_zhaoyǎn:die": "背信食言，当有此劫……",
	"#dcruizhan1": "敌势汹汹，当急攻以挫其锐。",
	"#dcruizhan2": "威愿领骑兵千人，以破敌前军。",
	"#dcshilie1": "荆州七郡，亦有怀义之人！",
	"#dcshilie2": "食禄半生，安能弃旧主而去！",
	"#wangwei:die": "后有追兵，主公先行！",
	"#dcchongyi1": "班虽卑微，亦知何为大义。",
	"#dcchongyi2": "大义当头，且助君一臂之力。",
	"#dc_huban:die": "行义而亡，虽死无憾……",
	"#dcxiaoxi1": "夜深枭啼，亡命夺袭！",
	"#dcxiaoxi2": "以夜为幕，纵兵逞凶！",
	"#xiongrao1": "势如熊罴，威震四海！",
	"#xiongrao2": "啸聚熊虎，兔走狐惊！",
	"#niufu:die": "胡儿安敢杀我！",
	"#dunxi1": "看锤！",
	"#dunxi2": "且吃我一锤！",
	"#bianxi:die": "以力破巧，难挡其锋……",
	"#dcditing1": "奉命查验，还请配合。",
	"#dcditing2": "且容我查验一二。",
	"#dcbihuo1": "董卓乱政，京师不可久留。",
	"#dcbihuo2": "权臣当朝，不如早日脱身。",
	"#fengfang:die": "掌控校事，为人所忌……",
	"#piaoping1": "奔波四处，前途未明。",
	"#piaoping2": "辗转各地，功业难寻。",
	"#tuoxian1": "一贵一贱，其情乃见。",
	"#tuoxian2": "一死一生，乃知交情。",
	"#chuaili1": "近况艰难，何不忧愁？",
	"#chuaili2": "形势如此，惴惕难当。",
	"#qinyilu:die": "我竟落得如此下场……",
	"#choutao1": "大恨深仇，此剑讨之！",
	"#choutao2": "是非恩怨，此役决之！",
	"#xiangshu1": "得道多襄，为公是瞻！",
	"#xiangshu2": "愿为中原，永戍北疆！",
	"#yanrou:die": "寒风折戍矛，铁衣裹枯骨……",
	"#dczhanyi1": "以役兴国，战意磅礴！",
	"#dczhanyi2": "此命不已，此战不休！",
	"#dc_zhuling:die": "吾，错付曹公……",
	"#yijiao1": "不能居下者，终为异教。",
	"#yijiao2": "异教兴，而大义危。",
	"#qibie1": "今与君别，恍如昨日，不经幽泣。",
	"#qibie2": "相逢为君饮，相别为君泣。",
	"#licaiwei:die": "我心孔疚，我行不来！",
	"#channi1": "此人心怀叵测，将军当拔剑诛之！",
	"#channi2": "请夫君听妾身之言，勿为小人所误！",
	"#nifu1": "当为贤妻宜室，莫做妒妇祸家。",
	"#nifu2": "将军且往沙场驰骋，妾身自有苟全之法。",
	"#yanfuren:die": "妾身绝不会害将军呀！",
	"#xiongmang1": "力逮千军，唯武为雄！",
	"#xiongmang2": "莽行沙场，乱世称雄！",
	"#haomeng:die": "曹性，汝欲反我不成？",
	"#heqia1": "和洽不基，贵贱无司。",
	"#heqia2": "教化大行，天下和洽。",
	"#yinyi1": "但求得其栖宿而已，天下非所保也。",
	"#yinyi2": "居岘山之南，沔水上，未尝入城府。",
	"#re_pangdegong:die": "天地闭，贤人隐……",
	"#jieliang1": "伏兵起，粮道绝！",
	"#jieliang2": "粮草根本，截之破敌！",
	"#quanjiu1": "大敌当前，怎可松懈畅饮？",
	"#quanjiu2": "乌巢重地，不宜饮酒。",
	"#hanmeng:die": "曹操狡诈，防不胜防……",
	"#fuyuan1": "袁门一体，休戚与共。",
	"#fuyuan2": "袁氏荣光，俯仰唯卿。",
	"#zhongjie1": "义士有忠节，可杀不可量！",
	"#zhongjie2": "愿以骨血为饲，事汝君临天下。",
	"#yongdi_xinping1": "袁门当兴，兴在明公！",
	"#yongdi_xinping2": "主公之位，非君莫属。",
	"#xinping:die": "老臣，尽力了……",
	"#tianze1": "观天则，以断人事。",
	"#tianze2": "乾元用九，乃见天则。",
	"#difa1": "地蕴天成，微妙玄通。",
	"#difa2": "观地之法，吉在其中。",
	"#zhangning:die": "全气之地，当葬其止……",
	"#chaofeng1": "鸾凤归巢，百鸟齐鸣。",
	"#chaofeng2": "鸾凤之响，所闻皆朝。",
	"#chuanshu1": "此术不传子，独传于贤。",
	"#chuanshu2": "定倾之术，贤者可习之。",
	"#tongyuan:die": "一门三杰，无憾矣！",
	"#mffengshi_sp_mifangfushiren1": "锋芒之锐，势不可挡！",
	"#mffengshi_sp_mifangfushiren2": "势须砥砺，就其锋芒。",
	"#sp_mifangfushiren:die": "愧对将军……",
	"#gongxiu1": "福祸与共，业山可移。",
	"#gongxiu2": "修行退智，遂之道也。",
	"#jinghe1": "大哉乾元，万物资始。",
	"#jinghe2": "无极之外，复无无极。",
	"#re_nanhualaoxian:die": "道亦有穷时……",
	"#yise1": "明丽端庄，双瞳剪水。",
	"#yise2": "姿色天然，貌若桃李。",
	"#shunshi1": "顺应时运，得保安康。",
	"#shunshi2": "随遇而安，宠辱不惊。",
	"#dufuren:die": "往事云烟，去日苦多……",
	"#xianwei1": "曹家儿郎，何惧一死！",
	"#xianwei2": "此役当战，有死无生！",
	"#caoanmin:die": "伯父快走！",
	"#rehuoshui1": "走不动了嘛？",
	"#rehuoshui2": "别走了，再玩一会儿嘛。",
	"#reqingcheng1": "我和你们真是投缘呐。",
	"#reqingcheng2": "哼，眼睛都直了呀。",
	"#re_zoushi:die": "年老色衰了吗？",
	"#koulve1": "兵强马壮，时出寇略。",
	"#koulve2": "饥则寇略，饱则弃馀。",
	"#qljsuiren1": "就交给你了。",
	"#qljsuiren2": "我的财富，收好！",
	"#qiuliju:die": "乌丸危矣！",
	"#redaoji1": "典韦勇猛，盗戟可除。",
	"#redaoji2": "你的，就是我的。",
	"#fuzhong1": "身负重任，绝无懈怠。",
	"#fuzhong2": "勇冠其军，负重前行。",
	"#re_hucheer:die": "好快的涯角枪！",
	"#xuezhao1": "奉旨行事，莫敢不从？",
	"#xuezhao2": "衣带密诏，当诛曹公！",
	"#re_dongcheng:die": "是谁走漏了风声？",
	"#kangge1": "慷慨悲歌，以抗凶逆。",
	"#kangge2": "忧惶昼夜，抗之以歌。",
	"#jielie1": "节烈之妇，从一而终也！",
	"#jielie2": "清闲贞静，守节整齐。",
	"#tangji:die": "皇天崩兮后土颓……",
	"#dangzai1": "此处有我，休得放肆！",
	"#dangzai2": "退后，让我来！",
	"#liangjue1": "行军者，切不可无粮！",
	"#liangjue2": "粮尽援绝，须另谋出路。",
	"#zhangheng:die": "军粮匮乏……",
	"#langmie1": "群狼四起，灭其一威众。",
	"#langmie2": "贪狼强力，寡义而趋利。",
	"#duanwei:die": "狼伴其侧，终不胜防……",
	"#mouni1": "反制于人，不以鄙乎！",
	"#mouni2": "与诸君终为敌，吾欲先手。",
	"#zongfan1": "今天下未定，有能者皆可谋之！",
	"#zongfan2": "吾以千里之众，当四战之地，可反也！",
	"#zhangmiao:die": "独木终难支矣……",
	"#lulve1": "趁火打劫，乘危掳掠。",
	"#lulve2": "天下大乱，掳掠以自保。",
	"#lxzhuixi1": "得势追击，胜望在握！",
	"#lxzhuixi2": "诸将得令，追而袭之！",
	"#liangxing:die": "夏侯渊，你竟敢！",
	"#cslilu1": "乱狱滋丰，以礼赂之。",
	"#cslilu2": "微薄之礼，聊表敬意！",
	"#csyizheng1": "玉树盈阶，望子成龙！",
	"#csyizheng2": "择善者，翊赞季兴。",
	"#caosong:die": "孟德，勿忘汝父之仇！",
	"#zhaohuo_re_taoqian1": "覆巢之下，安有完卵。",
	"#zhaohuo_re_taoqian2": "四战之地，兵连祸结。",
	"#yixiang_re_taoqian1": "阿瞒！你可攻的下这徐州城！",
	"#yixiang_re_taoqian2": "得道多助，失道寡助！",
	"#yirang_re_taoqian1": "百万黎庶，尽嘱明公！",
	"#yirang_re_taoqian2": "徐州之主，舍君其谁！",
	"#re_taoqian:die": "原知万事空，谁解托州意？",
	"#yangzhong1": "宦祸所起，池鱼所终！",
	"#yangzhong2": "窃权利己，弄祸殃众！",
	"#huangkong1": "满腹忠心，如履薄冰！",
	"#huangkong2": "咱家乃皇帝之母，能有什么坏心思？",
	"#zhaozhong:die": "咱家忠心可鉴啊！！",
	"#hfjieying1": "秉志持节，应时而动。",
	"#hfjieying2": "授节于汝，随机应变！",
	"#weipo1": "临渊勒马，进退维谷！",
	"#weipo2": "前狼后虎，朝不保夕！",
	"#hanfu:die": "袁本初，你为何不放过我！",
	"#dcjiaoxia1": "青锋绕指柔，将军可愿提头来见？",
	"#dcjiaoxia2": "我视诸君如豕犬，杀剐不过覆手之间。",
	"#dchumei1": "狐假虎威，以巡山林，可使百兽折膝。",
	"#dchumei2": "狐鸣青丘，其声呦呦，自有英雄入幕。",
	"#dongxie:die": "新人胜旧人，现在叫人家牛夫人……",
	"#minsi1": "能书会记，心思灵巧。",
	"#minsi2": "才情兼备，选入掖庭。",
	"#jijing1": "吉梦赐福，顺应天命。",
	"#jijing2": "梦之指引，必为吉运。",
	"#zhuide1": "思美人，两情悦。",
	"#zhuide2": "花香蝶恋，君德妾慕。",
	"#wangrong:die": "谁能护妾身幼子……",
	"#cixiao1": "吾儿奉先，天下无敌！",
	"#cixiao2": "父慈子孝，义理为先！",
	"#xianshuai1": "九州齐喑，首义瞩吾！",
	"#xianshuai2": "雄兵一击，则天下大白！",
	"#ol_dingyuan:die": "你我父子，此恩今日断！",
	"#spweiwu1": "凉州寸土，不可拱手让人。",
	"#spweiwu2": "明遵旨，暗忤意。",
	"#re_hansui:die": "马侄儿为何？啊！！",
	"#yujue1": "国库空虚，鬻爵可解。",
	"#yujue2": "卖官鬻爵，酣歌畅饮。",
	"#tuxing1": "国之兴亡，休戚相关。",
	"#tuxing2": "兴业安民，宏图可绘。",
	"#liuhong:die": "权利的滋味，让人沉沦……",
	"#gongjian1": "善攻者，敌不知其所守。",
	"#gongjian2": "围解自出，势必意散。",
	"#kuimang1": "黄巾流寇，不过如此。",
	"#kuimang2": "黄巾作乱，奉旨平叛！",
	"#zhujun:die": "乞降不受，愿一战！",
	"#xinfu_langxi1": "袭夺之势，如狼噬骨。",
	"#xinfu_langxi2": "引吾至此，怎能不袭掠之？",
	"#xinfu_yisuan1": "吾亦能善算谋划。",
	"#xinfu_yisuan2": "算计人心，我也可略施一二。",
	"#lijue:die": "若无内讧，也不至如此……",
	"#xinfu_lveming1": "劫命掠财，毫不费力。",
	"#xinfu_lveming2": "人财，皆掠之，哈哈！",
	"#xinfu_tunjun1": "得封侯爵，屯军弘农。",
	"#xinfu_tunjun2": "屯军弘农，养精蓄锐。",
	"#zhangji:die": "哪，哪里来的乱箭？",
	"#xinfu_xingluan1": "大兴兵争，长安当乱。",
	"#xinfu_xingluan2": "勇猛兴军，乱世当立。",
	"#fanchou:die": "唉，稚然疑心，甚重……",
	"#xinfu_tanbei1": "此机，我怎么会错失。",
	"#xinfu_tanbei2": "你的东西，现在是我的了！",
	"#xinfu_sidao1": "连发伺动，顺手可得。",
	"#xinfu_sidao2": "伺机而动，此地可窃。",
	"#guosi:die": "伍习，你……",
	"#xinfu_tunan1": "敢问丞相，何时挥师南下？",
	"#xinfu_tunan2": "攻伐之道，一念之间。",
	"#xinfu_bijing1": "拒吴闭境，臣誓保永昌！",
	"#xinfu_bijing2": "一臣无二主，可战不可降！",
	"#lvkai:die": "守节不易，吾愿舍身为蜀……",
	"#xinfu_zhenxing1": "东征西讨，募军百里挑一。",
	"#xinfu_zhenxing2": "众口铄金，积毁销骨。",
	"#xinfu_qianxin1": "兵困绝地，将至如归！",
	"#xinfu_qianxin2": "临危之际，速速来援！",
	"#zhanggong:die": "大漠孤烟，孤立无援啊……",
	"#xinfu_fuhai1": "跨海南征，波涛起浮。",
	"#xinfu_fuhai2": "宦海沉浮，生死难料！",
	"#weiwenzhugezhi:die": "吾皆海岱清士，岂料生死易逝……",
	"#zongkui1": "准备好，听候女王的差遣了吗？",
	"#zongkui2": "契约已定！",
	"#guju1": "我能看到，你的灵魂在颤抖。",
	"#guju2": "你死后，我将超度你的亡魂。",
	"#baijia1": "以邪马台的名义！",
	"#baijia2": "我要摧毁你的一切，然后建立我的国度。",
	"#beimihu:die": "我还会从黄泉比良坂回来的……",
	"#spwenji1": "还望先生救我！",
	"#spwenji2": "言出子口，入于吾耳，可以言未？",
	"#sptunjiang1": "江夏冲要之地，孩儿愿往守之。",
	"#sptunjiang2": "皇叔勿惊，吾与关将军已到。",
	"#sp_liuqi:die": "父亲，孩儿来，见你了……",
	"#xinfu_xingzhao1": "拿些上好的木料来。",
	"#xinfu_xingzhao2": "精挑细选，方能成百年之计。",
	"#xz_xunxun1": "让我先探他一探。",
	"#xz_xunxun2": "船，也不是一天就能造出来的。",
	"#xf_tangzi:die": "偷工减料，要不得啊……",
	"#xinfu_dianhu1": "就用你，给我军祭旗！",
	"#xinfu_dianhu2": "预则立，不预则废！",
	"#xinfu_jianji1": "密计交于将军，可解燃眉之困。",
	"#xinfu_jianji2": "锦上添花，不如雪中送炭。",
	"#xf_huangquan:die": "魏王厚待于我，降魏又有何错？",
	"#xinfu_lianpian1": "心无旁骛，断而敢行！",
	"#xinfu_lianpian2": "需持续投入，方有回报。",
	"#xf_sufei:die": "恐不能再与兴霸兄……并肩奋战了……",
	"#pingjian1": "识人读心，评荐推达。",
	"#pingjian2": "月旦雅评，试论天下。",
	"#xushao:die": "守节好耻，不可逡巡……",
	"#xpchijie1": "此战不在急，请仲达明了。",
	"#xpchijie2": "持节阻战，奉帝赐诏。",
	"#yinju1": "据理直谏，吾人臣本分。",
	"#yinju2": "迁徙之计，危涉万民。",
	"#xinpi:die": "失民心，且无食……",
	"#lslixun1": "利欲熏心，财权保命。",
	"#lslixun2": "利益当前，岂不心动？",
	"#lskuizhu1": "与君同谋，赠君金珠。",
	"#lskuizhu2": "金珠熠熠，都归将军了。",
	"#lisu:die": "金银珠宝再多，也难买命啊……",
	"#songshu1": "称颂蜀汉，以表诚心。",
	"#songshu2": "吴蜀两和，方可安稳。",
	"#sibian1": "弘雅之素，英秀之德。",
	"#sibian2": "才藻俊茂，辨思如涌。",
	"#zhangwen:die": "暨艳过错，强牵吾罪……",
	"#spjiedao1": "我这大刀，可是不看情面的。",
	"#spjiedao2": "截头大刀的威力，你来尝尝？",
	"#mangyachang:die": "黄骠马也跑不快了……",
	"#biaozhao1": "孙策宜加贵宠，须召还京邑！",
	"#biaozhao2": "此人有祸患之像，望丞相慎之。",
	"#yechou1": "会有人替我报仇的！",
	"#yechou2": "我的门客，是不会放过你的！",
	"#xugong:die": "终究……还是被其所害……",
	"#yanjiao1": "性矜严教，明于教训。",
	"#yanjiao2": "会虽童稚，勤见规诲。",
	"#xingshen1": "居上不骄，制节谨度。",
	"#xingshen2": "君子之行，皆积小以致高大。",
	"#zhangchangpu:die": "我还是小看了，孙氏的伎俩……",
	"#xiying1": "此番若功不能成，我军恐难以再战。",
	"#xiying2": "速袭曹营，以解乌巢之难！",
	"#gaolan:die": "郭图小辈之计……误军呐！",
	"#gangzhi1": "死便死，降？断不能降！",
	"#gangzhi2": "只恨箭支太少，不能射杀汝等！",
	"#beizhan1": "今伐曹氏，譬如覆手之举。",
	"#beizhan2": "十，则围之；五，则攻之！",
	"#sp_shenpei:die": "吾君在北，但求面北而亡……",
	"#fenglve1": "汝能比得上我家主公吗？",
	"#fenglve2": "将军有让贤之名而身安于泰山也，实乃上策。",
	"#mouzhi1": "官渡决战，袁公必胜而曹氏必败。",
	"#mouzhi2": "吾既辅佐袁公，定不会使其覆巢。",
	"#xunchen:die": "吾欲赴死，断不做背主之事……",
	"#yuanlve1": "若不引兵救乌巢，则主公危矣！",
	"#yuanlve2": "此番攻之不破，吾属尽成俘虏。",
	"#sp_zhanghe:die": "袁公不听吾之言，乃至今日……",
	"#spshicai1": "主公不听吾之言，实乃障目不见泰山也！",
	"#spshicai2": "遣轻骑以袭许都，大事可成。",
	"#sp_xuyou:die": "我军之所以败，皆因尔等指挥不当！",
	"#cangchu1": "敌袭！速度整军，坚守营寨！",
	"#cangchu2": "袁公所托，琼，必当死守！",
	"#sushou1": "吾军之所守，为重中之重，尔等、切莫懈怠！",
	"#sushou2": "今夜，需再加强巡逻，不要出了差池。",
	"#liangying1": "敌袭！速度整军，坚守营寨！",
	"#chunyuqiong:die": "子远老贼，吾死当追汝之魂！",
	"#liehou1": "识时务者为俊杰。",
	"#liehou2": "兄弟齐心，其利断金！",
	"#qigong1": "打虎亲兄弟！",
	"#qigong2": "丞相有令，尔敢不从？",
	"#lvkuanglvxiang:die": "此处可是新野……",
	"#dcnuchen1": "触关某之逆鳞者，杀无赦！",
	"#dcnuchen2": "天下碌碌之辈，安敢小觑关某？！",
	"#dczuojian1": "关羽者，刘备之枭将，宜除之。",
	"#dczuojian2": "主公虽非赵简子，然某可为周舍。",
	"#longdan_tongyuan": "能进能退，方显名将本色。",
	"#ocongjian_tongyuan": "察言纳谏，安身立命之道也。",
	"#chuanyun": "吾枪所至，人马俱亡！",
	"#zhangu1": "孤军奋战，独破众将。",
	"#zhangu2": "雄狮搏兔，何须援乎？",
	"#bmcanshi1": "是你，在召唤我吗？",
	"#bmcanshi2": "这片土地的人，真是太有趣了。",
	"#starruijun1": "三军夺锐，势不可挡。",
	"#starruijun2": "士如钢锋，可破三属之甲。",
	"#stargangyi1": "不见狼居胥，何妨马革裹尸。",
	"#stargangyi2": "既无功，不受禄。",
	"#star_sunjian:die": "身怀宝器，必受群狼觊觎……",
	"#starjiaohao1": "身虽为碧玉，手不怠锟铻！",
	"#starjiaohao2": "站住！且与本姑娘分个高下！",
	"#starsaying1": "倩影映江汀，巾帼犹飒爽！",
	"#starsaying2": "我有一袭红袖，欲揾英雄泪！",
	"#star_sunshangxiang:die": "秋风冷，江水寒……",
	
	// standard
	"#ganfuren:die": "请替我照顾好阿斗……",
	"#std_panfeng:die": "潘凤又被华雄斩了……",
	"#jianxiong1": "宁教我负天下人，休教天下人负我！",
	"#jianxiong2": "吾好梦中杀人！",
	"#hujia1": "魏将何在？",
	"#hujia2": "来人！护驾！",
	"#caocao:die": "霸业未成未成啊！",
	"#fankui1": "出来混，早晚要还的。",
	"#fankui2": "下次注意点。",
	"#guicai1": "天命？哈哈哈哈……",
	"#guicai2": "吾乃天命之子！",
	"#simayi:die": "难道真是天意难违？",
	"#ganglie1": "鼠辈，竟敢伤我！",
	"#ganglie2": "以彼之道，还施彼身！",
	"#xiahoudun:die": "两，两边都看不见了……",
	"#tuxi1": "哼，没想到吧！",
	"#tuxi2": "拿来吧！",
	"#zhangliao:die": "真的没想到……",
	"#luoyi1": "脱！",
	"#luoyi2": "谁来与我大战三百回合？",
	"#xuzhu:die": "冷，好冷啊……",
	"#tiandu1": "罢了。",
	"#tiandu2": "也好。",
	"#yiji1": "就这样吧。",
	"#yiji2": "哦？",
	"#guojia:die": "咳，咳……",
	"#luoshen1": "髣髴兮若轻云之蔽月。",
	"#luoshen2": "飘飖兮若流风之回雪。",
	"#qingguo1": "凌波微步，罗袜生尘。",
	"#qingguo2": "体迅飞凫，飘忽若神。",
	"#zhenji:die": "悼良会之永绝兮，哀一逝而异乡……",
	"#rende1": "以德服人。",
	"#rende2": "唯贤唯德，能服于人。",
	"#jijiang11": "蜀将何在？",
	"#jijiang12": "尔等敢应战否？",
	"#liubei:die": "这就是桃园吗？",
	"#wusheng1": "关羽在此，尔等受死！",
	"#wusheng2": "看尔乃插标卖首！",
	"#guanyu:die": "什么？此地名叫麦城？",
	"#paoxiao1": "燕人张飞在此！",
	"#paoxiao2": "啊~~~！",
	"#zhangfei:die": "实在是，杀不动了……",
	"#guanxing1": "观今夜天象，知天下大事。",
	"#guanxing2": "知天易，逆天难。",
	"#kongcheng11": "（抚琴声）",
	"#kongcheng12": "（抚琴声）",
	"#zhugeliang:die": "将星陨落，天命难违……",
	"#longdan_sha1": "能进能退，乃真正法器！",
	"#longdan_sha2": "吾乃常山赵子龙也！",
	"#zhaoyun:die": "这，就是失败的滋味吗？",
	"#tieji1": "全军突击！",
	"#tieji2": "（马蹄声，马叫声）",
	"#machao:die": "（马蹄声远去……）",
	"#jizhi1": "哼哼~",
	"#jizhi2": "哼~",
	"#huangyueying:die": "亮……",
	"#zhiheng1": "容我三思。",
	"#zhiheng2": "且慢。",
	"#jiuyuan1": "有汝辅佐，甚好！",
	"#jiuyuan2": "好舒服啊。",
	"#sunquan:die": "父亲，大哥，仲谋愧矣……",
	"#qixi1": "接招吧！",
	"#qixi2": "你的牌太多啦！",
	"#ganning:die": "二十年后，又是一条好汉……",
	"#keji1": "不是不报，时候未到！",
	"#keji2": "留得青山在，不怕没柴烧！",
	"#lvmeng:die": "被看穿了吗……",
	"#kurou1": "请鞭笞我吧，公瑾！",
	"#kurou2": "赴汤蹈火，在所不辞。",
	"#huanggai:die": "失血……过多了……",
	"#yingzi1": "哈哈哈哈！",
	"#yingzi2": "汝等看好了！",
	"#fanjian1": "痛苦吧，在仇与恨的地狱中！",
	"#fanjian2": "挣扎吧，在血和暗的深渊里！",
	"#zhouyu:die": "既生瑜，何生……",
	"#guose1": "请休息吧。",
	"#guose2": "你累了。",
	"#liuli1": "交给你了~",
	"#liuli2": "你来嘛~",
	"#daqiao:die": "伯符，我去了……",
	"#qianxun1": "儒生脱尘，不为贪逸淫乐之事。",
	"#qianxun2": "谦谦君子，不饮盗泉之水。",
	"#lianying1": "牌不是万能的，但是没牌是万万不能的。",
	"#lianying2": "旧的不去，新的不来。",
	"#luxun:die": "我还是太年轻了……",
	"#xiaoji1": "哼！",
	"#xiaoji2": "看我的厉害！",
	"#jieyin1": "夫君，身体要紧。",
	"#jieyin2": "他好，我也好。",
	"#sunshangxiang:die": "不！还不可以死！",
	"#qingnang1": "早睡早起，方能养生。",
	"#qingnang2": "越老越要补啊。",
	"#jijiu1": "别紧张，有老夫呢。",
	"#jijiu2": "救人一命，胜造七级浮屠。",
	"#huatuo:die": "医者……不能自医啊……",
	"#wushuang1": "谁能挡我！",
	"#wushuang2": "神挡杀神，佛挡杀佛！",
	"#lvbu:die": "不可能！",
	"#lijian1": "嗯呵呵~~呵呵~~",
	"#lijian2": "夫君，你要替妾身做主啊……",
	"#biyue1": "失礼了~",
	"#biyue2": "羡慕吧~",
	"#diaochan:die": "父亲大人，对不起……",
	"#yaowu1": "大人有大量，不和你计较！",
	"#yaowu2": "哼，先让你尝点甜头！",
	"#huaxiong:die": "这，怎么可能……",
	"#yicong1": "冲啊！",
	"#yicong2": "众将听令，排好阵势，御敌！",
	"#gongsunzan:die": "我军将败，我已无颜苟活于世……",
	"#xinfu_jijie1": "一拜一起，未足为劳。",
	"#xinfu_jijie2": "识言观行，方能雍容风议。",
	"#xinfu_jiyuan1": "公若辞，必遭蔡瑁之害矣。",
	"#xinfu_jiyuan2": "形势危急，还请速行。",
	"#xf_yiji:die": "未能，救得刘公脱险……",
	"#wangzun1": "真命天子，八方拜服。",
	"#wangzun2": "归顺于我，封爵赏地！",
	"#tongji1": "弑君之罪，当诛九族！",
	"#tongji2": "你，你这是反啦！",
	"#re_yuanshu:die": "把玉玺，还给我……",
	
	// sxrm
	
	// tw
	"#twciyin1": "虽为纤弱之身，亦当为吾儿遮风挡雨。",
	"#twciyin2": "纵有狼虎于前，定保吾儿平安。",
	"#twchenglong1": "这次，换孩儿来保护母亲！",
	"#twchenglong2": "儿虽年幼，亦当立丈夫之志！",
	"#licuilianzhaoquanding:die": "李翠莲：吾儿，前路坎坷，为母恐不能再行……<br>全定：母亲，母亲！（哭泣声）",
	"#twzongquan1": "大权不可旁落，且由老夫暂领。",
	"#twzongquan2": "将在外而君死社稷，自不受他人之制！",
	"#twguimou1": "再立大魏新政，招天下怀魏之人！",
	"#twguimou2": "诸葛贼计已穷，且看老夫此番谋略何如！",
	"#huan_simayi:die": "天命已定，汝竟能……逆之！",
	"#twlifeng1": "十年磨一剑，今日欲以贼三军试锋！",
	"#twlifeng2": "业火炼锋，江水淬刃，方铸此师！",
	"#twniwo1": "疲敌而取之以逸，其势易也。",
	"#twniwo2": "吊其心、疲其势，则可以静制动，以弱胜强。",
	"#huan_luxun:die": "但为大吴万世基业，臣死亦不改匡谏之心！",
	"#twqiji1": "久攻不克？待我奇功灭敌！",
	"#twqiji2": "依我此计，魏都不日可下！",
	"#twpiankuang1": "有延一人，足为我主克魏吞吴！",
	"#twpiankuang2": "非我居功自傲，实为吴魏之辈不足一提！",
	"#huan_weiyan:die": "若无粮草之急，何致有今日之败……",
	"#twguihan1": "天下分合，终不改汉祚之名。",
	"#twguihan2": "平南安北，终携百姓治太平。",
	"#twrenxian1": "朕虽驽钝，幸有众爱卿相助。",
	"#twrenxian2": "知人善用，任人唯贤！",
	"#twyanzuo1": "若无忠臣良将，焉有今日之功。",
	"#twyanzuo2": "卿等安国定疆，方有今日之统。",
	"#huan_liushan:die": "天下分崩离乱，再难建兴……",
	"#twqinghan1": "二十四代终未尽，今以一隅誓还天！",
	"#twqinghan2": "维继丞相遗托，当负擎汉之重。",
	"#twzhihuan1": "贪心祸国谗言媚主，汝罪不容诛！",
	"#twzhihuan2": "阉宦小人，何以蔽天！",
	"#huan_jiangwei:die": "九州未定，维……有负丞相遗托……",
	"#twlingyin1": "我自逍遥天地，何拘凡尘俗法。",
	"#twlingyin2": "朝暮露霞雾，夜枕夕缠绵。",
	"#twxianyuan1": "顺天者，天助之。",
	"#twxianyuan2": "所思所寻，皆得天应。",
	"#huan_zhugeguo:die": "仙缘已了，魂入轮回……",
	"#twbeiding1": "众将同心扶汉，北伐或可功成。",
	"#twbeiding2": "虽失天时地利，亦有三分胜机。",
	"#twjielv1": "竭一国之材，尽万人之力。",
	"#twjielv2": "穷力尽心，亮必以血补天。",
	"#twhunyou1": "扶汉兴刘，夙夜沥血，忽入草堂梦中。",
	"#twhunyou2": "一整山河，以明己志，昔日言犹记否？",
	"#huan_zhugeliang:die": "先帝遗志未竟，吾怎可终于半途……",
	"#twbeidingx1": "内外不懈如斯，长安不日可下。",
	"#twbeidingx2": "先帝英灵冥鉴，此番定成夙愿。",
	"#twjielvx1": "出箕谷，饮河洛，所至长安。",
	"#twjielvx2": "破司马，废伪政，誓还帝都。",
	"#twhuanji1": "以计中之计，调雍凉戴甲，天下备鞍。",
	"#twhuanji2": "借计代兵，以一隅抗九州。",
	"#twchanggui1": "隆中鱼水，永安星落，数载恍然隔世。",
	"#twchanggui2": "铁马冰河，金台临望，倏醒方叹无功。",
	"#huan_zhugeliang_shadow:die": "一人之愿，终难逆天命……",
	"#twjiezhan1": "血尽鳞碎，不改匡汉之志！",
	"#twjiezhan2": "龙胆虎威，百险千难誓相随！",
	"#twlongjin1": "龙烬沙场，以全大汉之荣光！",
	"#twlongjin2": "长坂龙魂犹在，吟哮万里长安！",
	"#longdan_sha_huan_zhaoyun1": "进退有度，百战无伤！",
	"#longdan_sha_huan_zhaoyun2": "龙魂缠身，虎威犹在！",
	"#chongzhen_huan_zhaoyun1": "众将士，且随老夫再战一场！",
	"#chongzhen_huan_zhaoyun2": "出入千军万马，经年横站八方！",
	"#huan_zhaoyun:die": "转战一生，终得见兴汉之日……",
	"#twkuiduan1": "蜀军大败，吾等岂能失此战机！",
	"#twkuiduan2": "求胜心切，竟轻中贼计！",
	"#huan_zhanghe:die": "老卒迟暮，恨，不能再报于国……",
	"#xunde1": "陛下所托，臣必尽心尽力！",
	"#xunde2": "纵吾荏弱难持，亦不推诿君命！",
	"#chenjie1": "臣心怀二心，不可事君也。",
	"#chenjie2": "竭力致身，以尽臣节。",
	"#simafu:die": "身辅六公，亦难报此恩……",
	"#twduwang1": "阿瞒聚众来犯，吾一人可挡万敌！",
	"#twduwang2": "勇绝河北，吾足以一柱擎天！",
	"#twylyanshi1": "今破曹军，明日当直取许都！",
	"#twylyanshi2": "全军整肃，此战不得有失！",
	"#twxiayong1_tw_yanliang": "呃啊，马失前蹄，大意了！",
	"#twxiayong2_tw_yanliang": "哈哈哈，先发制人！",
	"#tw_yanliang:die": "哥哥，切不可轻敌！",
	"#twjuexing1": "阿瞒且寄汝首，待吾一骑取之！",
	"#twjuexing2": "杀！尽奸贼败军之众！",
	"#twxiayong1": "一招之差，不足决此战胜负！",
	"#twxiayong2": "这般身手，也敢来战我？",
	"#tw_wenchou:die": "黄泉路上，你我兄弟亦不可独行……",
	"#twqiaosi1": "身居长位，犹处峭崖之巅。",
	"#twqiaosi2": "为长而不得承嗣，岂有善终乎？",
	"#twbaizu1": "今袁氏之事，岂独因我？",
	"#twbaizu2": "长幼之序不明，何惜操戈以正！",
	"#tw_yuantan:die": "咄，儿过我，必使富贵。呃……！",
	"#twhuajing1": "瞬息之间，已蕴森罗万象之法！",
	"#twhuajing2": "万般兵器，皆由吾心所化！",
	"#twtianshou1": "既怀远志，此武可助汝成之！",
	"#twtianshou2": "汝得此术，当勤为善行，勿动恶念！",
	"#xia_yuzhenzi:die": "吾身归去，如化大道……",
	"#twdengjian1": "百家剑法之长，皆凝于此剑！",
	"#twdengjian2": "君剑法超群，观之似有所得！",
	"#twxinshou1": "传汝于心，授汝以要！",
	"#twxinshou2": "公子少怀大志，可承吾剑！",
	"#xia_shie:die": "江湖路远，吾等终会有再见之时……",
	"#twjieqiu1": "元直莫慌，石韬来也！",
	"#twjieqiu2": "一群鼠辈，焉能挡我等去路！",
	"#twenchou1": "江湖快意，恩仇必报！",
	"#twenchou2": "今日之因，明日之果！",
	"#xia_shitao:die": "想不到竟中了官府的埋伏……",
	"#twzhongyi1": "忠照白日，义贯长虹！",
	"#twzhongyi2": "忠铸吾骨，义全吾身！",
	"#twchue1": "关某此生，誓斩天下恶徒！",
	"#twchue2": "政法不行，羽当替天行之！",
	"#xia_guanyu:die": "丈夫终有一死，唯恨壮志难酬……",
	"#twshenyi1": "施仁德于天下，伸大义于四海！",
	"#twshenyi2": "汉道虽衰，亦不容汝等奸祟放肆！",
	"#twxinghan1": "继先汉之荣，开万世泰平！",
	"#twxinghan2": "立此兴汉之志，终不可渝！",
	"#xia_liubei:die": "楼桑羽葆，终是一梦……",
	"#twchengxi1": "从今日始，血婆娑由我继之。",
	"#twchengxi2": "夏侯之名，吾师之愿，子萼定不相负！",
	"#xia_xiahousone:die": "蔷薇凋零，永沉血海……",
	"#twdanlie1": "师者如父，辱师之仇亦如辱父！",
	"#twdanlie2": "壮士自怀豪烈胆，初生幼虎敢搏龙！",
	"#xia_xiahoudun:die": "英雄烈胆，何惧泉台一战……",
	"#twhuzhong1": "此难当头，吾誓保百姓无恙！",
	"#twhuzhong2": "天崩于前，吾必先众人而死！",
	"#twfenwang1": "洛阳逢此大难，吾，亦难脱身。",
	"#twfenwang2": "大火之下，黑影，已无所遁形！",
	"#xia_zhangwei:die": "百姓……安否……",
	"#twquanqian1": "欲承奕世之基，当迁龙兴之地。",
	"#twquanqian2": "吴郡僻远，宜迁都秣陵，以承王业。",
	"#twrouke1": "宽以待人，柔能克刚，则英雄莫敌。",
	"#twrouke2": "务崇宽惠，顺天命以行诛。",
	"#tw_zhanghong:die": "惟愿主公从善如流，老臣去矣……",
	"#twlijian1": "陛下欲复昔日桓公之事乎？",
	"#twlijian2": "君者当御贤于后，安可校勇于猛兽！",
	"#twchungang1": "陛下若此，天下何以观之！",
	"#twchungang2": "偏听谄谀之言，此为万民所仰之君乎？",
	"#tw_zhangzhao:die": "哼哼！此皆老臣罪责，陛下岂会有过……",
	"#twhuiyuan1": "起渤海之兵，襄吾兄成事！",
	"#twhuiyuan2": "发一州之力，随手足之势！",
	"#twshoushou1": "此印既授，吾自当收之！",
	"#twshoushou2": "本初虽已示弱，此仇亦不能饶！",
	"#tw_gongsunfan:die": "公孙氏之业，终付之一炬……",
	"#twzhiqu1": "八百之众，哼，须臾可灭！",
	"#twzhiqu2": "此战首功，当由我取之！",
	"#twxianfeng1": "吾领万余白马，可堪此战先锋！",
	"#twxianfeng2": "白马先发，敌不攻而散！",
	"#tw_yangang:die": "诸将，冲锋！呃啊！",
	"#twxuechang1": "风尘难掩忠魂血，杀尽宦祸不得偿！",
	"#twxuechang2": "霜刃绚练，血舞婆娑。",
	"#twduoren1": "便以汝血，封汝之刀！",
	"#twduoren2": "血婆娑之剑，从不会沾无辜之血。",
	"#xia_xiahouzie:die": "祖父，紫萼不能为您昭雪了……",
	"#twyanshi1": "当以贼血，污此白刃！",
	"#twyanshi2": "骨肉至亲，血脉相连。",
	"#twrenchou1": "禄福夜雪白，都亭朝霞红！",
	"#twrenchou2": "塞亡父之冤魂，血三弟之永恨！",
	"#xia_zhaoe:die": "乞就刑戮，肃明王法……",
	"#twkaizeng1": "此心唯念天下之士，不较细软锱铢！",
	"#twkaizeng2": "千金散尽何须虑，但求天下俱欢颜！",
	"#twyangming1": "善名高布凌霄阙，仁德始铸黄金台！",
	"#twyangming2": "失千金之利，得万人之心！",
	"#xia_lusu:die": "人心不足，巴蛇吞象……",
	"#twliexi1": "短兵强击，贯汝心扉！",
	"#twliexi2": "性刚情烈，目不容奸！",
	"#twshezhong1": "此乃吾之私怨，与汝等何干？！",
	"#twshezhong2": "拦吾去路者，下场有如此贼！",
	"#xia_dianwei:die": "少智无谋，空负此身勇武……",
	"#twbingde1": "秉德纯懿，志行忠方。",
	"#twbingde2": "慎所与，节所偏，德毕迩矣。",
	"#twqingtao1": "君子当如滔流，循道而不失其行。",
	"#twqingtao2": "探赜索隐，钩深致远。日月在躬，隐之弥曜。",
	"#tw_bingyuan:die": "人能弘道，非道弘人……",
	"#twjuntun1": "屯安邑之地，慑山东之贼。",
	"#twjuntun2": "长安丰饶，当以军养军。",
	"#twxiongxi1": "凶兵厉袭，片瓦不存！",
	"#twxiongxi2": "尽起西凉狼兵，袭掠中原之地！",
	"#twxiafeng1": "穷奇凶戾，黠凤诡诈。",
	"#twxiafeng2": "鸾凤襄蛟，黠风殷狰。",
	"#tw_niufudongxie:die": "董公遗命，谁可继之……",
	"#twkunsi1": "豺狼虎兕雄壮，西园将校威风！",
	"#twkunsi2": "灵帝遗命，岂容尔等放肆？",
	"#tw_jianshuo:die": "郭胜，汝竟下此狠手！",
	"#twjichou1": "此危亡之时，当出此急谋。",
	"#twjichou2": "急筹布画，运策捭阖。",
	"#twjichou3": "事急从权，待吾稍作思量。",
	"#twjilun1": "时移不移，违天之祥也。",
	"#twjilun2": "民望不因，违人之咎也。",
	"#twxiongzheng1": "凶年荒岁，当兴乱自保！",
	"#twxiongzheng2": "天下大势，分分合合。",
	"#twluannian1": "西凉男儿，怀天下之志！",
	"#twluannian2": "金戈铁马，争乱世之雄！",
	"#tw_mateng:die": "皇叔，剩下的就靠你了……",
	"#twmutao1": "董贼暴乱，天下定当奋节讨之！",
	"#twmutao2": "募州郡义士，讨祸国逆贼！",
	"#twyimou1": "今畜士众之力，据其要害，贼可破之。",
	"#twyimou2": "泰然若定，攻敌自溃！",
	"#twzhuidu1": "到了阴司地府，你们也别想好过！",
	"#twzhuidu2": "髡头墨面，杀人诛心。",
	"#twshigong1": "冀州安定，此司空之功也……",
	"#twshigong2": "妾当自缚，以示诚心。",
	"#tw_liufuren:die": "害人终害己，最毒妇人心……",
	"#twjiekuang1": "昔汉帝安疆之恩，今当竭力以报。",
	"#twjiekuang2": "发兵援汉，以示竭忠之心。",
	"#twneirao1": "家破父亡，请留汉土。",
	"#twneirao2": "虚国匡汉，无力安家。",
	"#tw_yufuluo:die": "胡马依北风，越鸟巢南枝……",
	"#twqingkou1": "哈哈哈哈，鼠辈岂能当我大汉雄师？",
	"#twqingkou2": "凛凛汉将，岂畏江东鼠辈？",
	"#tw_fengxí:die": "陛下，速退白帝……",
	"#twdingzhen1": "招抚流民，兴复县邑。",
	"#twdingzhen2": "容民畜众，群羌归土。",
	"#twyouye1": "筑城西疆，开万代太平。",
	"#twyouye2": "镇边戍卫，许万民攸业。",
	"#tw_zhangji:die": "恨不见四海肃眘，羌胡徕服……",
	"#twfenwu1": "合围夷道，兵困吴贼！",
	"#twfenwu2": "纵兵摧城，奋武破敌！",
	"#tw_zhangnan:die": "骨埋吴地，魂归汉土……",
	"#twfupan1": "胜者为王，吾等……无话可说……",
	"#twfupan2": "此为吾等，复兴匈奴之良机！",
	"#twfupan3": "今乱平阳之地，汉人如何可防？",
	"#tw_huchuquan:die": "久困汉庭，无力再叛……",
	"#twjiaohua1": "教民崇化，以定南疆。",
	"#twjiaohua2": "知礼数，崇王化，则民不复叛矣。",
	"#twkujian1": "吾之所言，皆为公之大业。",
	"#twkujian2": "明公虽奕世克昌，未若有周之盛。",
	"#twkujian3": "公岂徒有纳谏之名乎？",
	"#twruilian1": "公若擅进庸肆，必失民心！",
	"#twruilian2": "外敛虚进之势，内减弊民之政。",
	"#twfujian1": "得此宝剑，如虎添翼！",
	"#twfujian2": "丞相至宝，汝岂配用之？啊！……",
	"#twjianwei1": "小小匹夫，可否闻长坂剑神之名号？",
	"#twjianwei2": "此剑吹毛得过，削铁如泥。",
	"#tw_xiahouen:die": "长坂剑神，也陨落了……",
	"#twtanfeng1": "探敌薄防之地，夺敌不备之间。",
	"#twtanfeng2": "探锋之锐，以待进取之机。",
	"#tw_xiahoushang:die": "陛下垂怜至此，臣纵死无憾……",
	"#twxiawei1": "既闻仲帝威名，还不速速归降！",
	"#twxiawei2": "仲朝国土，岂容贼军放肆！",
	"#twqiongji1": "我技虽穷，势不可衰！",
	"#twqiongji2": "战在其势，何妨技穷？",
	"#tw_qiaorui:die": "曹贼……安敢犯仲国之威……",
	"#twgongge1": "弓弩并射难近其身，若退又恐难安己命！",
	"#twgongge2": "既已决心反之，当速擒吕布以溃其兵士！",
	"#twgongge3": "今行至如此，唯殊死一搏！",
	"#tw_haomeng:die": "反复小儿！汝竟临阵倒戈……",
	"#twsuizheng1": "续得将军器重，愿随将军出征！",
	"#twsuizheng2": "将军莫慌，万事有吾！",
	"#twsuizheng3": "吾与将军有亲，哼！尔等岂可与我相比！",
	"#twtuidao1": "将军大势已去，续无可奈何啊。",
	"#twtuidao2": "续投明主，还望将军勿怪才是。",
	"#tw_weixu:die": "颜良小儿，竟敢杀我同伴，看我为其……啊！",
	"#twjiange1": "纵剑为舞，击缶而歌！",
	"#twjiange2": "辞亲历山野，仗剑唱大风！",
	"#twxiawang1": "天下兴亡，侠客当为之己任。",
	"#twxiawang2": "隐居江湖之远，敢争天下之先！",
	"#xia_xushu:die": "天下为公……",
	"#twyulong1": "三尺青锋，为君驭六龙，定九州！",
	"#twyulong2": "十年砺剑，当率千军之众，堪万夫之雄！",
	"#twjianming1": "弹剑作谱，鸣之铮铮。",
	"#twjianming2": "剑鸣凄凄，穿心刺骨。",
	"#xia_wangyue:die": "汉室中兴，不系于吾一人……",
	"#twzhenhu1": "戟出势如虎，百兽尽皆服！",
	"#twzhenhu2": "横戟冲阵，敌纵为猛虎凶豺，亦不敢前！",
	"#twlvren1": "坚甲利刃，破之如鲁缟！",
	"#twlvren2": "攻城破阵，如履平地！",
	"#xia_liyàn:die": "戾气入髓，不可再起杀心……",
	"#twchaofeng1": "枪出惊百鸟，技现震诸雄。",
	"#twchaofeng2": "出如鸾凤高翱，收若百鸟归林。",
	"#twchuanshu1": "此术集百家之法，当传万世。",
	"#twchuanshu2": "某虽无名于世，此术可传之万年。",
	"#xia_tongyuan:die": "隐居山水，空老病榻……",
	"#twxingzhui1": "中宫黯弱，紫宫当明。",
	"#twxingzhui2": "星坠如雨，月掩轩辕。",
	"#twjuchen1": "流沙聚散，黄巾浮沉。",
	"#twjuchen2": "积土为台，聚尘为砂。",
	"#tw_zhangning:die": "风过烟尘散，雨罢雷音绝……",
	"#zniaoxiang1": "此战，必是有死无生！",
	"#zniaoxiang2": "抢占先机，占尽优势！",
	"#bingyi_xin_guyong1": "志爱公利，道德纯备。",
	"#bingyi_xin_guyong2": "秉持吾志，一心为公。",
	"#tw_chendong:die": "杀身为主，死而无憾……",
	"#jiefan_re_handang1": "援军已至，看你们往哪里逃！",
	"#jiefan_re_handang2": "长驱直入，迎刃而解。",
	"#tw_madai:die": "反骨贼已除，丞相放心……",
	"#zhangming1": "心怀远志，何愁声名不彰！",
	"#zhangming2": "从今始学，成为有用之才！",
	"#shengxi_feiyi1": "利治小之宜，秉居静之理。",
	"#shengxi_feiyi2": "外却骆谷之师，内保宁缉之实。",
	"#tw_bianfuren:die": "心肝涂地，惊愕断绝……",
	"#twmuyue1": "震以不才，得充下使，愿促两国盟好。",
	"#twchayi1": "震奉聘叙好，若有违贵国典制，万望告之。",
	"#tw_chenzhen:die": "若毁盟约，则两败俱伤！",
	"#twzhengjian1": "修建未成，皆因尔等懈怠。",
	"#twzhengjian2": "哼！何故建田不成！",
	"#twzhongchi1": "陛下，兴已知错。",
	"#twzhongchi2": "微臣有罪，任凭陛下处置。",
	"#tw_puyangxing:die": "陛下已流放吾等，为何……啊！",
	"#twzhenxi1": "戮胡首领，捣其王廷！",
	"#twzhenxi2": "震疆扫寇，袭贼平戎！",
	"#twyangshi1": "扬师北疆，剪覆胡奴！",
	"#twyangshi2": "陈兵百万，慑敌心胆！",
	"#tw_tianyu:die": "钟鸣漏尽，夜行不休……",
	"#zhenshan1": "施人恩惠，可以扬名！",
	"#zhenshan2": "乐民之乐者，民亦乐其乐。",
	"#old_quancong:die": "劳民伤财之事……何必呢？",
	"#twdianyi1": "旧仪废弛，兴造制度。",
	"#twdianyi2": "礼仪卒度，笑语卒获。",
	"#twyingji1": "辩适于世，论合于时。",
	"#twyingji2": "辩言出于口，不失思忖心。",
	"#twshanghe1": "今使海内回心，望风而愿治，皆明公之功也。",
	"#twshanghe2": "明公平定兵乱，使百姓可安，粲当奉觞以贺之。",
	"#tw_wangcan:die": "虽无铅刀用，庶几奋薄身……",
	"#twkaiji1": "力除秦汉之弊，方可治化复兴。",
	"#twkaiji2": "约官实录，勿与百姓争利。",
	"#twshepan1": "遣五军案大道发还，贼望必喜而轻敌。",
	"#twshepan2": "以所获铠马驰环城，贼见必怒而失智。",
	"#tw_wangchang:die": "吾切至之言，望尔等引以为戒……",
	"#twfuzuan1": "望陛下听臣忠言，勿信资等无知之论。",
	"#twfuzuan2": "前朝王莽之乱，可为今事之鉴。",
	"#twchongqi1": "吾既身承宠遇，敢不为君分忧？",
	"#twchongqi2": "臣得君上垂青，已是此生之幸。",
	"#tw_caozhao:die": "虽极荣宠，亦有尽时……",
	"#twjingce1": "方策精详，有备无患。",
	"#twjingce2": "精兵拒敌，策守如山。",
	"#yuzhang1": "吾已料敌布防，蜀军休想进犯！",
	"#yuzhang2": "诸君依策行事，定保魏境无虞！",
	"#twfengji1": "蜂趋蚁附，皆为道来。",
	"#twfengji2": "蜂攒蚁集，皆为道往！",
	"#twyiju1": "鸱张蚁聚，为从天道！",
	"#twyiju2": "黄巾之道，苍天之示。",
	"#twbudao1": "得天之力，从天之道。",
	"#twbudao2": "黄天大道，泽及苍生。",
	"#tw_zhangmancheng:die": "天师，曼成尽力了……",
	"#twlingfa1": "吾明令在此，汝何以犯之？",
	"#twlingfa2": "法不阿贵，绳不挠曲！",
	"#tw_caocao:die": "奸宦当道，难以匡正啊……",
	"#twyujue1": "财物交足，官位任取。",
	"#twyujue2": "卖官鬻爵，取财之道。",
	"#twgezhi1": "改革旧制，保我汉室长存！",
	"#twgezhi2": "革除旧弊，方乃中兴！",
	"#tw_liuhong:die": "汉室中兴，还需尔等忠良……",
	"#twsidai1": "敌军疲乏，正是战机，随我杀！",
	"#twsidai2": "敌军无备，随我冲锋！",
	"#twjieyu1": "葭萌，蜀之咽喉，峻必竭力守之。",
	"#twjieyu2": "吾头可得，城不可得。",
	"#twhanyu1": "霸起泰山，称雄东方！",
	"#twhanyu2": "乱贼何惧，霸自可御之！",
	"#twjuezhu1": "曹君速上马，洪自断后。",
	"#twjuezhu2": "天下可无洪，不可无君。",
	"#xinzhenjun1": "将怀其威，则镇其军。",
	"#xinzhenjun2": "治军之道，得之于严。",
	"#tw_yujin:die": "今即命归九泉，何颜……",
	"#cuijin1": "诸军速行，违者军法论处！",
	"#cuijin2": "快！贻误军机者，定斩不赦！",
	"#yuejiu:die": "哼，动手吧！",
	"#jintao1": "一雪前耻，誓报前仇！",
	"#jintao2": "量敌而进，直讨吴境！",
	"#wuban:die": "恨，杀不尽吴狗！",
	"#equan1": "哈哈哈哈哈哈，有此毒泉，大王尽可宽心。",
	"#equan2": "有此四泉足矣，何用刀兵？",
	"#manji1": "嗯~~不错，不错。",
	"#manji2": "哈哈哈哈哈哈，痛快！痛快！",
	"#duosidawang:die": "快快放箭！快快放箭！",
	"#beini1": "今日污无用清名，明朝自得新圣褒嘉。",
	"#beini2": "吾佐奉朝日暖旭，又何惮落月残辉？",
	"#dingfa1": "峻礼教之防，准五服以制罪。",
	"#dingfa2": "礼律并重，臧善否恶，宽简弼国。",
	"#jiachong:die": "此生从势忠命，此刻，只乞不获恶谥……",
	"#twmiaolve1": "智者通权达变，以解临近之难。",
	"#twmiaolve2": "依吾计而行，此患乃除耳。",
	"#twyingjia1": "行非常之事，乃有非常之功，愿将军三思。",
	"#twyingjia2": "将军今留匡弼，事势不便，惟移驾幸许耳。",
	"#tw_dongzhao:die": "为曹公助书方略，实昭之幸也……",
	"#twdanfa1": "取五灵三使之药，炼九光七曜之丹。",
	"#twdanfa2": "云液踊跃成雪霜，流珠之英能延年。",
	"#twlingbao1": "洞明于至道，俯弘于世教。",
	"#twlingbao2": "凝神太虚镜，北冥探玄珠。",
	"#twsidao1": "执吾法器，以司正道。",
	"#twsidao2": "内修道法，外需宝器。",
	"#tw_gexuan:die": "金丹难成，大道难修……",
	"#zongkui_tw_beimihu1": "不要抵抗，接受我的操纵吧。",
	"#zongkui_tw_beimihu2": "当我的傀儡，你将受益良多。",
	"#guju_tw_beimihu1": "你还没有见过真正的恐惧。",
	"#guju_tw_beimihu2": "这些，你就感到害怕了吗？",
	"#baijia_tw_beimihu1": "没有人能阻止我的觉醒。",
	"#baijia_tw_beimihu2": "哼哼哼……这才是我的真面目。",
	"#tw_beimihu:die": "鬼道破灭，我有何寄托？",
	"#chijie": "按照女王的命令，选择目标吧！",
	"#waishi1": "贵国的繁荣，在下都看到了。",
	"#waishi2": "希望我们两国，可以世代修好。",
	"#renshe1": "无论风雨再大，都无法阻挡我的脚步。",
	"#renshe2": "一定不能辜负女王的期望！",
	"#nashime:die": "请把这身残躯，带回我的家乡……",
	"#twxiongjun1": "凶兵愤戾，尽诛长安之民！",
	"#twxiongjun2": "继董公之命，逞凶历之兵！",
	"#tw_jiangji:die": "洛水之誓，言犹在耳……咳咳咳……",
	"#tw_baoxin:die": "区区黄巾流寇，如何挡我？呃啊……",
	"#twluanlve1": "合兵寇河内，聚众掠太原。",
	"#twluanlve2": "联白波之众，掠河东之地。",
	"#tw_liwei:die": "安南重任，万不可轻之……",
	"#tw_yanxiang:die": "若遇明主，或可青史留名……",
	"#tw_fanchou:die": "唉，稚然疑心，甚重……",
	"#liuli_daxiaoqiao1": "不懂得怜香惜玉么~",
	"#liuli_daxiaoqiao2": "呵呵，交给你啦~",
	"#twfeifu1": "此亦久矣，其能复几！",
	"#twfeifu2": "以侯归第？终败于其！",
	"#twzhian1": "此等蝼蚁不除，必溃千丈之堤！",
	"#twzhian2": "尔等权贵贪赃枉法，岂可轻饶？！",
	"#twzhian3": "目无禁法，勿问贵贱依律棒杀！",
	"#bmcanshi_tw_beimihu1": "此患不足为惧，可蚕食而尽。",
	"#bmcanshi_tw_beimihu2": "小则蚕食，大则溃坝。",
	
	// xianding
	"#dckengqiang1": "女子着征袍，战意越关山。",
	"#dckengqiang2": "兴武效妇好，挥钺断苍穹！",
	"#dckuichi1": "久战沙场，遗伤无数。",
	"#dckuichi2": "人无完人，千虑亦有一失。",
	"#dckunli1": "回首万重山，难阻轻舟一叶。",
	"#dckunli2": "已过山穷水尽，前有柳暗花明。",
	"#dcshangjue1": "伯约，奈何桥畔，再等我片刻。",
	"#dcshangjue2": "与君同生共死，岂可空待黄泉！",
	"#wenyuan:die": "伯约，回家了……",
	"#dcyanzuo1": "提笔欲续出师表，何日重登蜀道？",
	"#dcyanzuo2": "我族以诗书传家，苑中未绝琅琅。",
	"#dczuyin1": "蒙先祖之佑，未觉春秋之寒。",
	"#dczuyin2": "我本孺子，幸得父祖遮风挡雨。",
	"#dcpijian1": "神思凝慧剑，当悬宵小之颈。",
	"#dcpijian2": "仗剑凌天下，汝忘武侯否！",
	"#zhugejing:die": "子孙不肖，徒遗泪胡尘……",
	"#dcsbyaozuo1": "明公馈墨，琳当还以锦绣。",
	"#dcsbyaozuo2": "识时务者，应势而为，当为俊杰。",
	"#dcsbzhuanwen1": "夺人妻子，掘人祖陵，彼与桀纣何异。",
	"#dcsbzhuanwen2": "奸宦之后，权佞之子，安敢居南而大！",
	"#dc_sb_chenlin:die": "矢在弦上，不得不发，请曹公恕罪……",
	"#dcsbkongwu1": "莫说兵器，取汝首级也易如反掌。",
	"#dcsbkongwu2": "臂有千斤力，何惧万人敌。",
	"#dc_sb_hucheer:die": "典……典将军，您还没睡啊……",
	"#xinfu_xionghuo1": "此镬加之于你，定有所伤！",
	"#xinfu_xionghuo2": "凶镬沿袭，怎会轻易无伤？",
	"#xinfu_shajue1": "杀伐决绝，不留后患。",
	"#xinfu_shajue2": "吾即出，必绝之！",
	"#xurong:die": "此生无悔，心中无愧……",
	"#xinfu_falu1": "求法之道，以司箓籍。",
	"#xinfu_falu2": "取舍有法，方得其法。",
	"#xinfu_dianhua1": "大道无形，点化无为。",
	"#xinfu_dianhua2": "得此点化，必得大道。",
	"#xinfu_zhenyi1": "紫薇星辰，斗数之仪。",
	"#xinfu_zhenyi2": "不疾不徐，自爱自重。",
	"#zhangqiying:die": "米碎面散，我心欲绝……",
	"#dcsbzuojun1": "彼不得安，我取其逸，则大局可定。",
	"#dcsbzuojun2": "义者无敌，骄者先败，今非用兵之时。",
	"#dcsbmuwang1": "授熟读十万书，腹中唯无降字。",
	"#dcsbmuwang2": "长河没日，天岂无再明之时！",
	"#dc_sb_jushou:die": "身虽死，忠魂不灭……",
	"#dcbizu1": "花既繁于枝，当为众乔灌荫。",
	"#dcbizu2": "手执金麾伞，可为我族遮风挡雨。",
	"#dcwuxie1": "一介弱质女流，安能登辇拔剑？",
	"#dcwuxie2": "主上既亡，我当为生者计。",
	"#bianyue:die": "空怀悲怆之心，未有杀贼之力……",
	"#dcjingyin1": "金柝越关山，唯送君于南。",
	"#dcjingyin2": "燕燕于飞，寒江照孤影。",
	"#dcchixing1": "孤鸿鸣晚林，泪垂大江流。",
	"#dcchixing2": "若路的尽头是离别，妾宁愿蹒跚一世。",
	"#liutan:die": "孤灯照长夜，羹熟唤何人？",
	"#dcshizha1": "不好，江东鼠辈欲乘东风来袭！ ",
	"#dcshizha2": "江上起东风，恐战局生变。",
	"#dcgaojian1": "江东不乏能人，主公不可小觑。",
	"#dcgaojian2": "狮子搏兔，亦须尽其全力。",
	"#dc_sb_chengyu:die": "乌鹊南飞，何枝可依啊……",
	"#dcsbkangyong1": "此猛士之血，其与醇酒孰烈乎？",
	"#dcsbkangyong2": "歃血为誓，城在则人在。",
	"#dcsbkuangzhan1": "平生不修礼乐，唯擅杀人放火。",
	"#dcsbkuangzhan2": "宛城乃曹公掌中之物，谁敢染指。",
	"#dc_sb_dianwei:die": "主公无恙，韦虽死犹生……",
	"#dcsbsushen1": "谋先于行则昌，行先于谋则亡。",
	"#dcsbsushen2": "天行五色，雪覆林间睡狐，独我执白。",
	"#dcsbsushen_dc_sb_jiaxu_shadow1": "我有三窟之筹谋，不蹈背水之维谷。",
	"#dcsbsushen_dc_sb_jiaxu_shadow2": "已积千里跬步，欲履万里河山。",
	"#dcsbfumou1": "恩仇付浊酒，荡平劫波，且做英雄吼。",
	"#dcsbfumou2": "人无恒敌，亦无恒友，唯有恒利。",
	"#dcsbfumou_dc_sb_jiaxu_shadow1": "不周之柱已折，这世间当起一阵风，落一场雨。",
	"#dcsbfumou_dc_sb_jiaxu_shadow2": "善谋者，不与善战者争功。",
	"#dcsbrushi1": "孤立川上，观逝者如东去之流水。",
	"#dcsbrushi2": "九州如画，怎可空老人间？",
	"#dcsbrushi_dc_sb_jiaxu_shadow1": "曾寄青鸟凌云志，归来城头看王旗。",
	"#dcsbrushi_dc_sb_jiaxu_shadow2": "烽火照长安，淯水洗枯骨，今日对弈何人？",
	"#dc_sb_jiaxu:die": "辛者抱薪，妄燃烽火以戏诸侯……",
	"#dc_sb_jiaxu_shadow:die": "未见青山草木，枯骨徒付浊流……",
	"#dcsbfuxi1": "可因势而附，亦可因势而袭。",
	"#dcsbfuxi2": "仗剑在手，或亮之，或藏之。",
	"#dcsbhaoyi1": "今缴丧敌之炙，且宴麾下袍泽。",
	"#dcsbhaoyi2": "龙骧枯荣一体，岂曰同袍无衣。",
	"#dc_sb_zhangxiu:die": "曹贼欺我太甚！",
	"#dctongdao1": "安定宫无一丈之长，恐难七步成诗。",
	"#dctongdao2": "故峻恶，皓恶甚于峻。",
	"#dccilv1": "妾一介女流，安知社稷之虑。",
	"#dccilv2": "家国无损、宗庙得续，我无异议。",
	"#zhupeilan:die": "生如浮萍，随波而逝……",
	"#dcsbwuwei1": "残阳洗长刀，漫卷天下帜。",
	"#dcsbwuwei2": "武效万人敌，复行千里路。",
	"#dc_sb_guanping:die": "生未屈刀兵，死罢战黄泉……",
	"#dcxingmen1": "尔等，休道我关氏无人！",
	"#dcxingmen2": "义在人心，人人皆可成关公。",
	"#dcfenhui1": "国仇家恨，不共戴天！",
	"#dcfenhui2": "手中虽无青龙吟，心有长刀仍啸月。",
	"#dcshouzhi1": "日暮且眠岗上松，散尽千金买东风。",
	"#dcshouzhi2": "这沽来的酒，哪有赊的有味道。",
	"#guanyue:die": "提履无处归，举目山河冷……",
	"#dcsbtaozhou1": "皇叔借荆州久矣，瑾特来讨要。",
	"#dcsbtaozhou2": "荆州弹丸之地，诸君岂可食言而肥？",
	"#dcsbhoude1": "君子有德，可以载天下之重。",
	"#dcsbhoude2": "南山有松，任尔风雨雷霆。",
	"#dc_sb_zhugejin:die": "吾数梦，琅琊旧园……",
	"#dcjijie1": "不知书，何由见之。",
	"#dcjijie2": "闻古贤女，未有不学前世成败者。",
	"#dchuiji1": "明眸善睐，瑰姿艳逸。",
	"#dchuiji2": "云鬓释远，彩衣婀娜。",
	"#sp_zhenji:die": "自古英雄迟暮，谁见佳人白头？",
	"#dcjuewu1": "此身屹沧海，覆手潮立，浪涌三十六天。",
	"#dcjuewu2": "青龙啸肃月，长刀裂空，威降一十九将。",
	"#dcwuyou1": "秉赤面，观春秋，虓菟踏纛，汗青著峥嵘。",
	"#dcwuyou2": "着青袍，饮温酒，五关已过，来将且通名！",
	"#dcyixian1": "春秋着墨十万卷，长髯映雪千里行。",
	"#dcyixian2": "义驱千里长路，风起桃园芳菲。",
	"#wu_guanyu:die": "天下泪染将军袍，且枕青山梦桃园……",
	"#dczhimin1": "渤海虽阔，亦不及朕胸腹之广。",
	"#dczhimin2": "民众渡海而来，当筑梧居相待。",
	"#dcjujian1": "尔等眼中，只见到朕的昏庸吗？",
	"#dcjujian2": "我做天子，不得自在邪？",
	"#caofang:die": "匹夫无罪，怀璧其罪……",
	"#dcsbquanmou1": "洛水为誓，皇天为证，吾意不在刀兵。",
	"#dcsbquanmou2": "以谋代战，攻形不以力，攻心不以勇。",
	"#dcsbquanmou_dc_sb_simayi_shadow1": "鸿门之宴虽歇，会稽之胆尚悬，孤岂姬、项之辈！",
	"#dcsbquanmou_dc_sb_simayi_shadow2": "昔藏青锋于沧海，今潮落，可现兵！",
	"#dcsbpingliao1": "烽烟起大荒，戎军远役，问不臣者谁？",
	"#dcsbpingliao2": "挥斥千军之贲，长驱万里之远。",
	"#dcsbpingliao_dc_sb_simayi_shadow1": "率土之滨皆为王城，辽土亦居普天之下。",
	"#dcsbpingliao_dc_sb_simayi_shadow2": "青云远上，寒风试刃，北雁当寄红绫。",
	"#dc_sb_simayi:die": "以权谋而立者，必失大义于千秋……",
	"#dc_sb_simayi_shadow:die": "人立中流，非己力可向，实大势所迫……",
	"#duanxie1": "区区绳索就想挡住吾等去路？！",
	"#duanxie2": "以身索敌，何惧同伤！",
	"#fenming1": "东吴男儿，岂是贪生怕死之辈？",
	"#fenming2": "不惜性命，也要保主公周全！",
	"#chendong:die": "杀身卫主，死而无憾！",
	"#diaodu1": "诸军兵器战具，皆由我调配！",
	"#diaodu2": "甲胄兵器，按我所说之法分发！",
	"#diancai1": "军资之用，不可擅作主张！",
	"#diancai2": "善用资财，乃为政上法！",
	"#lvfan:die": "闻主公欲授大司马之职，容臣不能……谢恩了……",
	"#zhengbi1": "跅弛之士，在御之而已。",
	"#zhengbi2": "内不避亲，外不避仇。",
	"#fengying1": "二臣恭奉，以迎皇嗣。",
	"#fengying2": "奉旨典选，以迎忠良。",
	"#cuimao:die": "为世所痛惜，冤哉……",
	"#dcjichun1": "寒冬已至，花开不远矣。",
	"#dcjichun2": "梅凌霜雪，其香不逊晚来者。",
	"#dchanying1": "寒梅不争春，空任群芳妒。",
	"#dchanying2": "三九寒天，尤有寒英凌霜。",
	"#zhugemengxue:die": "雪落青丝上，与君共白头……",
	"#dclinghui1": "福兮祸所依，祸兮福所伏。",
	"#dclinghui2": "枯桑知风，沧海知寒。",
	"#dcxiace1": "风之积非厚，其负大翼也无力。",
	"#dcxiace2": "人情同于抔土，岂穷达而异心。",
	"#dcyuxin1": "得一人知情识趣，何妨同甘共苦。",
	"#dcyuxin2": "临千军而不改其静，御心无波尔。",
	"#bailingyun:die": "世人皆惧司马，独我痴情仲达……",
	"#dclingxi1": "灵犀渡清潭，涟漪扰我心。",
	"#dclingxi2": "心有玲珑曲，万籁皆空灵。",
	"#dczhifou1": "满怀相思意，念君君可知？",
	"#dczhifou2": "世有人万万，相知无二三。",
	"#caoxian:die": "恨生枭雄府，恨嫁君王家……",
	"#dcsbronghuo1": "火莲绽江矶，炎映三千弱水。",
	"#dcsbronghuo2": "奇志吞樯橹，潮平百万寇贼。",
	"#dcsbronghuo_dc_sb_zhouyu_shadow1": "江东多锦绣，离火起曹贼毕，九州同忾。",
	"#dcsbronghuo_dc_sb_zhouyu_shadow2": "星火乘风，风助火势，其必成燎原之姿。",
	"#dcsbyingmou1": "行计以险，纵略以奇，敌虽百万亦戏之如犬豕。",
	"#dcsbyingmou2": "若生铸剑为犁之心，须有纵钺止戈之力。",
	"#dcsbyingmou_dc_sb_zhouyu_shadow1": "既遇知己之明主，当福祸共之，荣辱共之。",
	"#dcsbyingmou_dc_sb_zhouyu_shadow2": "将者，贵在知敌虚实，而后避实而击虚。",
	"#dc_sb_zhouyu:die": "人生之艰难，犹如不息之长河……",
	"#dc_sb_zhouyu_shadow:die": "大业未成，奈何身付黄泉……",
	"#dcsbmingshi1": "联刘以抗曹，此可行之大势。",
	"#dcsbmingshi2": "强敌在北，唯协力可御之。",
	"#dcsbmingshi_dc_sb_lusu_shadow1": "今天下春秋已定，君不见南北沟壑乎？",
	"#dcsbmingshi_dc_sb_lusu_shadow2": "善谋者借势而为，其化万物为己用。",
	"#dcsbmengmou1": "南北同仇，请皇叔移驾江东，共观花火。",
	"#dcsbmengmou2": "孙刘一家，慕英雄之意，忾窃汉之敌。",
	"#dcsbmengmou_dc_sb_lusu_shadow1": "合左抑右，定两家之盟。",
	"#dcsbmengmou_dc_sb_lusu_shadow2": "求同存异，邀英雄问鼎。",
	"#dc_sb_lusu:die": "虎可为之用，亦可为之伤……",
	"#dc_sb_lusu_shadow:die": "青龙已巢，以何驱之？",
	"#dcqiongying1": "冰心碎玉壶，光转琼英灿。",
	"#dcqiongying2": "玉心玲珑意，撷英倚西楼。",
	"#dcnuanhui1": "暖阳映雪，可照八九之风光。",
	"#dcnuanhui2": "晓风和畅，吹融附柳之霜雪。",
	"#zhugeruoxue:die": "自古佳人叹白头……",
	"#dcmiyi1": "百战黄沙苦，舒颜红袖甜。",
	"#dcmiyi2": "撷蜜凝饴糖，入喉润心颜。",
	"#dcyinjun1": "既乘虎豹之威，当弘大魏万年。",
	"#dcyinjun2": "今日青锋在手，可驯四方虎狼。",
	"#caoyi:die": "霜落寒鸦浦，天下无故人……",
	"#dcxiaoyin1": "鹿栖于野，必能奔光而来。",
	"#dcxiaoyin2": "磨硝作引，可点心中灵犀。",
	"#dchuahuo1": "馏石漆取上清，可为胜爆竹之花火。",
	"#dchuahuo2": "莫道繁花好颜色，此火犹胜二月黄。",
	"#malingli:die": "花无百日好，人无再少年……",
	"#dcxiongmu1": "步步为营者，定无后顾之虞。",
	"#dcxiongmu2": "明公彀中藏龙卧虎，放之海内皆可称贤。",
	"#dczhangcai1": "今提墨笔绘乾坤，湖海添色山永春。",
	"#dczhangcai2": "手提玉剑斥千军，昔日锦鲤化金龙。",
	"#dcruxian1": "儒门有言，仁为己任，此生不负孔孟之礼。",
	"#dcruxian2": "儒道尚仁而有礼，贤者知命而独悟。",
	"#wu_luxun:die": "此生清白，不为浊泥所染……",
	"#dcshangyu1": "君满腹才学，当为国之大器。",
	"#dcshangyu2": "一腔青云之志，正待梦日之时。",
	"#dccaixia1": "玉有十色五光，微瑕难掩其瑜。",
	"#dccaixia2": "吾习扫天下之术，不善净一屋之秽。",
	"#dc_xujing:die": "时人如江鲫，所逐者功利尔……",
	"#rebaobian1": "变可生，不变则死。",
	"#rebaobian2": "适时而动，穷极则变。",
	"#dc_daxiaoqiao:die": "伯符，公瑾，请一定要守护住我们的江东啊！",
	"#dcposuo1": "绯纱婆娑起，佳人笑靥红。",
	"#dcposuo2": "红烛映俏影，一舞影斑斓。",
	"#dcxiaoren1": "红绡举腕重，明眸最溺人。",
	"#dcxiaoren2": "飘然回雪轻，言然游龙惊。",
	"#tianshangyi:die": "红梅待百花，魏宫无春风……",
	"#dclingyue1": "宫商催角羽，仙乐自可聆。",
	"#dclingyue2": "玉琶奏折柳，天地尽箫声。",
	"#dcpandi1": "待君归时，共泛轻舟于湖海。",
	"#dcpandi2": "妾有一曲，可壮卿之峥嵘。",
	"#sunlingluan:die": "良人当归，苦酒何妨……",
	"#dctongye1": "白首全金瓯，著风流于春秋。",
	"#dctongye2": "长戈斩王气，统大业于四海。",
	"#dcchangqu1": "布横江之铁索，徒自缚耳。",
	"#dcchangqu2": "艨艟击浪，可下千里江陵。",
	"#dc_wangjun:die": "未蹈曹刘覆辙，险遭士载之厄……",
	"#dcshiji1": "哼~区区十丈之城，何须丞相图画。",
	"#dcshiji2": "顽垒在前，可依不疑之计施为。",
	"#dcsilun1": "习守静之术，行务时之风。",
	"#dcsilun2": "纵笔瑞白雀，满座尽高朋。",
	"#zhoubuyi:die": "人心者，叵测也……",
	"#dcjianguo1": "彭蠡雁惊，此诚平吴之时。",
	"#dcjianguo2": "奏三陈之诏，谏一国之弊。",
	"#dcdyqingshi1": "潮起万丈之仞，可阻江南春风。",
	"#dcdyqingshi2": "缮甲兵，耀威武，伐吴指日可待。",
	"#dc_duyu:die": "六合即归一统，奈何寿数已尽……",
	"#dcchanjuan1": "姐妹一心，共侍玄德无忧。",
	"#dcchanjuan2": "双姝从龙，姊妹宠荣与共。",
	"#dcxunbie1": "既为君之妇，何惧为君之鬼。",
	"#dcxunbie2": "今临难将罹，唯求不负皇叔。",
	"#ganfurenmifuren:die": "人生百年，奈何于我十不存一……",
	"#guixiu1": "闺楼独看花月，倚窗顾影自怜。",
	"#guixiu2": "闺中女子，亦可秀气英拔。",
	"#cunsi1": "一切，便托付将军了……",
	"#cunsi2": "存汉室之嗣，留汉室之本。",
	"#dc_mifuren:die": "阿斗被救，妾身……再无牵挂……",
	"#wanglang:die": "你，你……哇啊……啊……",
	"#dczhaowen1": "我辈昭昭，正始之音浩荡。",
	"#dczhaowen2": "正文之昭，微言之绪，绝而复续。",
	"#dcjiudun1": "籍不胜酒力，恐失言失仪。",
	"#dcjiudun2": "秋月春风正好，不如大醉归去。",
	"#ruanji:die": "诸君，欲与我同醉否？",
	"#dcjincui1": "情记三顾之恩，亮必继之以死。",
	"#dcjincui2": "身负六尺之孤，臣当鞠躬尽瘁。",
	"#dcqingshi1": "兵者，行霸道之势，彰王道之实。",
	"#dcqingshi2": "将为军魂，可因势而袭，其有战无类。",
	"#dczhizhe1": "轻舟载浊酒，此去，我欲借箭十万。",
	"#dczhizhe2": "主公有多大胆略，亮便有多少谋略。",
	"#wu_zhugeliang:die": "天下事，了犹未了，终以不了了之……",
	"#dccaizhuang1": "素手调脂粉，女子自有好颜色。",
	"#dccaizhuang2": "为悦己者容，撷彩云为妆。",
	"#dchuayi1": "皓腕凝霜雪，罗襦绣鹧鸪。",
	"#dchuayi2": "绝色戴珠玉，佳人配华衣。",
	"#duanqiaoxiao:die": "佳人时光少，君王总薄情……",
	"#dchuizhi1": "妾有一席幽梦，予君三千暗香。",
	"#dchuizhi2": "我有玲珑之心，其情唯衷陛下。",
	"#dcjijiao1": "哀吾姊早逝，幸陛下垂怜。",
	"#dcjijiao2": "居椒之殊荣，妾得之惶恐。",
	"#zhangjinyun:die": "陛下，妾身来陪你了……",
	"#dcjianzheng1": "将军今出洛阳，恐难再回。",
	"#dcjianzheng2": "贼示弱于外，必包藏祸心。",
	"#dcfumou1": "某有良谋，可为将军所用。",
	"#dcfumou2": "吾负十斗之囊，其盈一石之智。",
	"#huanfan:die": "有良言而不用，君何愚哉……",
	"#dcctjiuxian1": "救袍泽于水火，返清明于天下。",
	"#dcctjiuxian2": "与君共扼王旗，焉能见死不救。",
	"#dcchenyong1": "将者，当泰山崩于前而不改色。",
	"#dcchenyong2": "救将陷之城，焉求益兵之助。",
	"#chentai:die": "公非旦，我非勃……",
	"#dcquanshou1": "曹军势大，不可刚其锋。",
	"#dcquanshou2": "持重待守，不战而胜十万雄兵。",
	"#dcshexue1": "虽为武夫，亦需极目汗青。",
	"#dcshexue2": "武可靖天下，然不能定天下。",
	"#sunyu:die": "孙氏始得江东，奈何魂归黄泉……",
	"#dcdanyi1": "满城锦绣，何及笔下春秋？",
	"#dcdanyi2": "一心向学，不闻窗外风雨。",
	"#dcwencan1": "宴友以文，书声喧哗，众宾欢也。",
	"#dcwencan2": "众星灿于九天，犹雅文耀于万世。",
	"#xizheng:die": "此生有涯，奈何学海无涯……",
	"#dcwangyuan1": "小女子不才，愿伴公子余生。",
	"#dcwangyuan2": "纵有万钧之力，然不斩情丝。",
	"#dclingyin1": "环佩婉尔，心动情动铃儿动。",
	"#dclingyin2": "小鹿撞入我怀，银铃焉能不鸣？",
	"#dcliying1": "飞影略白鹭，日暮栖君怀。",
	"#dcliying2": "妾影婆娑，摇曳君心。",
	"#dc_ruiji:die": "佳人芳华逝，空余孤铃鸣……",
	"#dccansi1": "君不入地狱，谁入地狱？",
	"#dccansi2": "众生皆苦，唯渡众生于极乐。",
	"#dcfozong1": "此身无长物，愿奉骨肉为浮屠。",
	"#dcfozong2": "驱大白牛车，颂无上功德。",
	"#zerong:die": "此劫，不可避……",
	"#dcyuandi1": "此生与君为好，共结连理。",
	"#dcyuandi2": "结发元嫡，其情唯衷孙郎。",
	"#dcxinyou1": "我有幽月一斛，可醉十里春风。",
	"#dcxinyou2": "心在方外，故而不闻市井之声。",
	"#xielingyu:die": "翠瓦红墙处，最折意中人……",
	"#dczhaohan1": "此心昭昭，惟愿汉明。",
	"#dczhaohan2": "天曰昭德！天曰昭汉！",
	"#dcjinjie1": "大汉养士百载，今乃奉节之时。",
	"#dcjinjie2": "尔等皆忘天地君亲师乎？",
	"#dcjue1": "尔等一家之言，难堵天下悠悠之口。",
	"#dcjue2": "区区黄门而敛财千万，可诛其九族。",
	"#dc_yangbiao:die": "愧无日磾先见之明，犹怀老牛舐犊之爱……",
	"#dcluochong1": "陛下独宠她人，奈何雨露不均。",
	"#dcluochong2": "妾贵于佳丽，然宠不及三千。",
	"#dcaichen1": "君可负妾，然妾不负君。",
	"#dcaichen2": "所思所想，皆系陛下。",
	"#dc_tengfanglan:die": "今生缘尽，来世两宽……",
	"#dcjianji1": "备枭雄也，布虓虎也，当间之。",
	"#dcjianji2": "二虎和则我亡，二虎斗则我兴。",
	"#dcyuanmo1": "强敌不可战，弱敌不可恕。",
	"#dcyuanmo2": "孙伯符羽翼已丰，主公当图刘备。",
	"#yanghong:die": "主公为何不听我一言？",
	"#dcxialei1": "采霞揾晶泪，沾我青衫湿。",
	"#dcxialei2": "登车入宫墙，垂泪凝如瑙。",
	"#dcanzhi1": "深闱行彩线，唯手熟尔。",
	"#dcanzhi2": "星月独照人，何谓之暗？",
	"#xuelingyun:die": "寒月隐幕，难作衣裳……",
	"#dc_wangyun:die": "逆贼何必多言，今日有死而已！",
	"#dcwumei1": "大梦若期，皆付一枕黄粱。",
	"#dcwumei2": "日所思之，故夜所梦之。",
	"#dczhanmeng1": "梦境缥缈，然有迹可占。",
	"#dczhanmeng2": "万物有兆，唯梦可卜。",
	"#dc_zhouxuān:die": "人生如梦，假时亦真……",
	"#dcjingzao1": "闭门绝韦编，造经教世人。",
	"#dcjingzao2": "著文成经，可教万世之人。",
	"#dcenyu1": "君以国士待我，我必国士报之。",
	"#dcenyu2": "吾本乡野腐儒，幸隆君之大恩。",
	"#chengbing:die": "著经未成，此憾事也……",
	"#dclianzhi1": "刘董同气连枝，一损则俱损。",
	"#dclianzhi2": "妾虽女流，然亦有忠侍陛下之心。",
	"#dclingfang1": "曹贼欲加之罪，何患无据可言。",
	"#dclingfang2": "花落水自流，何须怨东风。",
	"#dcfengying1": "可怜东篱寒累树，孤影落秋风。",
	"#dcfengying2": "西风落，西风落，宫墙不堪破。",
	"#dongguiren:die": "陛下乃大汉皇帝，不可言乞……",
	"#dcfangdu1": "浮萍却红尘，何意染是非？",
	"#dcfangdu2": "我本无意争春，奈何群芳相妒。",
	"#dcjiexing1": "女子有节，安能贰其行？",
	"#dcjiexing2": "坐受雨露，皆为君恩。",
	"#yuanji:die": "妾本蒲柳，幸荣君恩……",
	"#dcxiangmian1": "以吾之见，阁下命不久矣。",
	"#dcxiangmian2": "印堂发黑，将军危在旦夕。",
	"#dctianji1": "顺天而行，坐收其利。",
	"#dctianji2": "只可意会，不可言传。",
	"#zhujianping:die": "天机，不可泄露啊……",
	"#dctongguan1": "极目宇宙，可观如织之命数。",
	"#dctongguan2": "命河长往，唯我立于川上。",
	"#dcmengjie1": "唇舌之语，难言虚实之境。",
	"#dcmengjie2": "解梦之术，如镜中观花尔。",
	"#zhaozhi:die": "解人之梦者，犹在己梦中……",
	"#dcpoyuan1": "砲石飞空，坚垣难存。",
	"#dcpoyuan2": "声若霹雳，人马俱摧。",
	"#dchuace1": "筹画所料，无有不中。",
	"#dchuace2": "献策破敌，所谋皆应。",
	"#dc_liuye:die": "功名富贵，到头来，不过黄土一抔……",
	"#dcyaoyi1": "对弈未分高下，胜负可问春风。",
	"#dcyaoyi2": "我掷三十六道，邀君游弈其中。",
	"#dcshoutan1": "对弈博雅，落子珠玑胜无声。",
	"#dcshoutan2": "弈者无言，手执黑白谈古今。",
	"#dcfuxue1": "普天之大，唯此处可安书桌。",
	"#dcfuxue2": "书中自有风月，何故东奔西顾？",
	"#luyi:die": "此生博弈，落子未有悔……",
	"#dcfengyan1": "既将我儿杀之，何复念之！",
	"#dcfengyan2": "乞问曹公，吾儿何时归还？",
	"#dcfudao1": "弑子之仇，不共戴天！",
	"#dcfudao2": "眼中泪绝，尽付仇怆。",
	"#dingshangwan:die": "吾儿既丧，天地无光……",
	"#dchuishu1": "心有慧镜，善解百般人意。",
	"#dchuishu2": "袖着静淑，可揾夜阑之泪。",
	"#dcyishu1": "此命由我，如织之数可易。",
	"#dcyishu2": "易天定之数，结人定之缘。",
	"#dcligong1": "伴君离高墙，日暮江湖远。",
	"#dcligong2": "巍巍宫门开，自此不复来。",
	"#quanhuijie:die": "妾有愧于陛下……",
	"#dcfanyin1": "此音可协，此律可振。",
	"#dcfanyin2": "玄妙殊巧，可谓绝技。",
	"#dcpeiqi1": "声依永，律和声。",
	"#dcpeiqi2": "音律不协，不可用也。",
	"#dukui:die": "此钟不堪用，再铸！",
	"#dcwanglu1": "大攻车前，坚城弗当。",
	"#dcwanglu2": "大攻既作，天下可望！",
	"#dcxianzhu1": "敌垒已陷，当长驱直入！",
	"#dcxianzhu2": "舍命陷登，击蛟蟒于狂澜！",
	"#dcchaixie1": "利器经久，拆合自用。",
	"#dcchaixie2": "损一得十，如鲸落宇。",
	"#zhangfen:die": "身陨外，愿魂归江东……",
	"#dcgeyuan1": "绘同径之距，置内圆而割之。",
	"#dcgeyuan2": "矩割弥细，圆失弥少，以至不可割。",
	"#dcjieshu1": "累乘除以成九数者，可以加减解之。",
	"#dcjieshu2": "数有其理，见筹一可知沙数。",
	"#dcgusuan1": "勾中容横，股中容直，可知其玄五。",
	"#dcgusuan2": "累矩连索，类推衍化，开立而得法。",
	"#liuhui:die": "算学如海，穷我一生，只得杯水……",
	"#dckaiji1": "谋虑渊深，料远若近。",
	"#dckaiji2": "视昧而察，筹不虚运。",
	"#dcpingxi1": "地有常险，守无常势。",
	"#dcpingxi2": "国有常众，战无常胜。",
	"#dc_wangchang:die": "志存开济，人亡政息……",
	"#dczhongjie1": "气节之士，不可不救。",
	"#dczhongjie2": "志士遭祸，应施以援手。",
	"#dcsushou1": "敌众我寡，怎可少谋？",
	"#dcsushou2": "临城据守，当出奇计。",
	"#zhaoang:die": "援军为何迟迟不至？",
	"#caiyi1": "凰凤化越，彩翼犹存。",
	"#caiyi2": "身披彩翼，心有灵犀。",
	"#guili1": "既离厄海，当归泸沽。",
	"#guili2": "山野如春，不如归去。",
	"#caohua:die": "自古忠孝难两全……",
	"#dcsuifu1": "以柔克刚，方是良策。",
	"#dcsuifu2": "镇抚边疆，为国家计。",
	"#dcpijing1": "群寇来袭，愿和将军同御外侮。",
	"#dcpijing2": "天下不宁，愿与阁下共守此州。",
	"#dc_liuyu:die": "公孙瓒谋逆，人人可诛！",
	"#dcjinggong1": "屈臂发弓，亲射猛虎。",
	"#dcjinggong2": "幼习弓弩，正为此时！",
	"#dcxiaojuan1": "骁锐敢斗，威震江夏！",
	"#dcxiaojuan2": "得隽为雄，气贯大江！",
	"#dc_huangzu:die": "周瑜小儿，竟破了我的埋伏？",
	"#xiaowu1": "繁星临云袖，明月耀舞衣。",
	"#xiaowu2": "逐舞飘轻袖，传歌共绕梁。",
	"#huaping1": "风絮飘残，化萍而终。",
	"#huaping2": "莲泥刚倩，藕丝萦绕。",
	"#laiyinger:die": "谷底幽兰艳，芳魂永留香……",
	"#qianlong1": "鸟栖于林，龙潜于渊。",
	"#qianlong2": "游鱼惊钓，潜龙飞天。",
	"#fensi1": "此贼之心，路人皆知！",
	"#fensi2": "孤君烈忿，怒愈秋霜。",
	"#juetao1": "登车拔剑起，奋跃搏乱臣！",
	"#juetao2": "陵云决心意，登辇讨不臣！",
	"#zhushi1": "可有爱卿愿助朕讨贼？",
	"#zhushi2": "泱泱大魏，忠臣俱亡乎？",
	"#caomao:die": "宁作高贵乡公死，不作汉献帝生……",
	"#renzheng1": "仁政如水，可润万物。",
	"#renzheng2": "为官一任，当造福一方。",
	"#jinjian1": "臣代天子牧民，闻苛自当谏之。",
	"#jinjian2": "为将者死战，为臣者死谏！",
	"#dc_luotong:die": "而立之年，奈何早逝……",
	"#tiqi1": "远望中原，涕泪交流。",
	"#tiqi2": "瞻望家乡，泣涕如雨。",
	"#baoshu1": "明镜映梳台，黛眉衬粉面。",
	"#baoshu2": "头作扶摇髻，首枕千金梳。",
	"#re_fengfangnv:die": "诸位，为何如此对我？",
	"#tianyun1": "天垂象，见吉凶。",
	"#tianyun2": "治历数，知风气。",
	"#wfyuyan1": "差若毫厘，谬以千里，需慎之。",
	"#wfyuyan2": "六爻之动，三极之道也。",
	"#wufan:die": "天运之术今绝矣……",
	"#syjiqiao1": "为将者，当躬冒矢石！",
	"#syjiqiao2": "吾承父兄之志，危又何惧？",
	"#syxiongyi1": "此仇不报，吾恨难消！",
	"#syxiongyi2": "功业未立，汝可继之！",
	"#re_sunyi:die": "功业未成而身先死，惜哉，惜哉！",
	"#yuqi1": "孤影独泣，困于隅角。",
	"#yuqi2": "向隅而泣，黯然伤感。",
	"#shanshen1": "好善为德，坚守本心。",
	"#shanshen2": "洁身自爱，独善其身。",
	"#xianjing1": "文静娴丽，举止柔美。",
	"#xianjing2": "娴静淡雅，温婉穆穆。",
	"#caojinyu:die": "平叔之情，吾岂不明……",
	"#zhukou1": "草莽贼寇，不过如此。",
	"#zhukou2": "轻装上阵，利剑出鞘。",
	"#mengqing1": "女之耽兮，不可说也。",
	"#mengqing2": "淇水汤汤，渐车帷裳。",
	"#zhouyi:die": "江水寒，萧瑟起……",
	"#zhiren1": "穿针引线，栩栩如生。",
	"#zhiren2": "纺绩织纴，布帛可成。",
	"#yaner1": "如胶似漆，白首相随。",
	"#yaner2": "新婚燕尔，亲睦和美。",
	"#re_panshu:die": "有喜必忧，以为深戒！",
	"#youyan1": "诱言者，为人所不齿。",
	"#youyan2": "诱言之弊，不可不慎。",
	"#zhuihuan1": "伤人者，追而还之！",
	"#zhuihuan2": "追而还击，皆为因果。",
	"#yangwan:die": "遇人不淑……",
	"#xingzuo1": "顺人之情，时之势，兴作可成。",
	"#xingzuo2": "兴作从心，相继不绝。",
	"#miaoxian1": "女为悦者容，士为知己死。",
	"#miaoxian2": "与君高歌，请君侧耳。",
	"#ruanyu:die": "良时忽过，身为土灰……",
	"#bazhan1": "此酒，当配将军。",
	"#bazhan2": "这杯酒，敬于将军。",
	"#jiaoying1": "独酌清醮，霓裳自舞。",
	"#jiaoying2": "醮影倩丽，何人爱怜。",
	"#fanyufeng:die": "醮妇再遇良人难……",
	"#pianchong1": "得陛下怜爱，恩宠不衰。",
	"#pianchong2": "谬蒙圣恩，光授殊宠。",
	"#zunwei1": "处尊居显，位极椒房。",
	"#zunwei2": "自在东宫，及即尊位。",
	"#guozhao:die": "我的出身，不配为后？",
	"#shiyuan1": "感怀诗于前，绝怨赋于后。",
	"#shiyuan2": "汉宫楚歌起，四面无援矣。",
	"#dushi1": "孤无病，此药无需服。",
	"#dushi2": "辟恶之毒，为最毒。",
	"#liubian:die": "侯非侯，王非王……",
	"#refenyin1": "斗志高歌，士气昂扬！",
	"#refenyin2": "抗音而歌，左右应之！",
	"#liji1": "破敌搴旗，未尝负败！",
	"#liji2": "鸷猛壮烈，万人不敌！",
	"#re_liuzan:die": "若因病困此，命矣……",
	"#lvli1": "此击若中，万念俱灰！",
	"#lvli2": "姿器膂力，万人之雄。",
	"#choujue1": "家仇未报，怎可独安？",
	"#choujue2": "逆臣之军，不足畏惧！",
	"#wenyang:die": "痛贯心膂，天灭大魏啊！",
	"#spzhuilie1": "哈哈！我喜欢，猎夺沙场的快感！",
	"#spzhuilie2": "追敌夺魂，猎尽贼寇。",
	"#wangshuang:die": "我居然，被蜀军所击倒……",
	"#manyi1": "蛮族的力量，你可不要小瞧！",
	"#manyi2": "南蛮女子，该当英勇善战！",
	"#mansi1": "多谢父母怜爱。",
	"#mansi2": "承父母庇护，得此福气。",
	"#souying1": "真薮影移，险战不惧！",
	"#souying2": "幽薮影单，只身勇斗！",
	"#zhanyuan1": "势不同，情相随。",
	"#zhanyuan2": "战中结缘，虽苦亦甜。",
	"#huaman:die": "南蛮之地的花，还在开吗……",
	"#pytianjiang1": "天赐匠法，精心锤炼。",
	"#pytianjiang2": "巧夺天工，超凡脱俗。",
	"#pyzhuren1": "此刀，可劈铁珠之筒。",
	"#pyzhuren2": "造刀三千口，用法各不同。",
	"#puyuan:die": "铸木镂冰，怎成大器？！",
	"#tuiyan1": "鸟语略知，万物略懂。",
	"#tuiyan2": "玄妙之舒巧，推微而知晓。",
	"#busuan1": "喜仰视星辰，夜不肯寐。",
	"#busuan2": "今日一卦，便知命数。",
	"#mingjie1": "戒律循规，不可妄贪。",
	"#mingjie2": "王道文明，何忧不平。",
	"#guanlu:die": "怀我好英，心非草木……",
	"#gxlianhua1": "草木精炼，万物化丹。",
	"#gxlianhua2": "白日青山，飞升化仙。",
	"#zhafu1": "垂恩广救，慈悲在怀。",
	"#zhafu2": "行符敕鬼，神变善易。",
	"#gexuan:die": "善变化，拙用身……",
	"#kuiji1": "绝域奋击，孤注一掷。",
	"#kuiji2": "舍得一身剐，不畏君王威。",
	"#leitong:die": "翼德救我……",
	"#wlcuorui1": "减辎疾行，挫敌军锐气。",
	"#wlcuorui2": "外物当舍，摄敌为重。",
	"#wulan:die": "蛮狗，尔敢杀我！",
	"#yongjue1": "扶幼主，成霸业！",
	"#yongjue2": "能救一个是一个！",
	"#dcshouze": "白绫加之我颈，其罪何患无辞。",
	"#dczimu1": "既为汉吏，当遵汉律。",
	"#refenyin_wufan1": "奋音鼓劲，片甲不留！",
	"#refenyin_wufan2": "奋勇杀敌，声罪致讨！",
	"#olhunzi_re_sunyi1": "身临绝境，亦当心怀壮志！",
	"#olhunzi_re_sunyi2": "危难之时，自当振奋以对！",
	"#reyingzi_re_sunyi1": "骁悍果烈，威震江东！",
	"#gzyinghun_re_sunyi1": "兄弟齐心，以保父兄基业！",
	"#yuyun1": "春依旧，人消瘦。",
	"#yuyun2": "泪沾青衫，玉殒香消。",
	"#beishui1": "某若退却半步，诸将可立斩之！",
	"#beishui2": "效淮阴之举，力敌数千！",
	"#qingjiao1": "慈不掌兵，义不养财！",
	"#qingjiao2": "清蛮夷之乱，剿不臣之贼！",
	"#hmxili1": "系力而为，助君得胜。",
	"#hmxili2": "有我在，将军此战必能一举拿下！",
	"#reyingzi_gexuan1": "仙人之姿，凡目岂见！",
	"#guanxing_gexuan1": "仙人之栖，群星浩瀚！",
	"#zhiyan_gexuan1": "仙人之语，凡耳震聩！",
	"#gongxin_gexuan1": "仙人之目，因果即现！",
	
	// xinghuoliaoyuan
	"#xinfu_sanwen1": "文若春华，思若泉涌。",
	"#xinfu_sanwen2": "独步汉南，散文天下。",
	"#xinfu_qiai1": "未知身死处，何能两相完？",
	"#xinfu_qiai2": "悟彼下泉人，喟然伤心肝。",
	"#xinfu_denglou1": "登兹楼以四望兮，聊暇日以销忧。",
	"#xinfu_denglou2": "惟日月之逾迈兮，俟河清其未极。",
	"#wangcan:die": "一作驴鸣悲，万古送葬别……",
	"#xinfu_jixu1": "击虚箭射，懈敌戒备。",
	"#xinfu_jixu2": "虚实难辨，方迷敌方之心！",
	"#sp_taishici:die": "刘繇之见，短浅也……",
	"#xinfu_guolun1": "品过是非，讨评好坏。",
	"#xinfu_guolun2": "若有天下太平时，必讨四海之内才。",
	"#xinfu_songsang1": "送丧至东吴，使命已完。",
	"#xinfu_songsang2": "送丧虽至，吾与孝则得相交。",
	"#re_jsp_pangtong:die": "我终究……不得东吴赏识……",
	"#qinguo_use1": "为国勤事，体素精勤。",
	"#qinguo_use2": "忠勤为国，通达治体。",
	"#lvdai:die": "再也不能，为吴国奉身了……",
	"#xinfu_jijun1": "集万千义军，定天下大局！",
	"#xinfu_jijun2": "集民力万千，亦可为军！",
	"#xinfu_fangtong1": "统领方队，为民意所举！",
	"#xinfu_fangtong2": "三十六方，必为大统！",
	"#re_zhangliang:die": "人公也难逃被人所杀……",
	"#xinfu_weilu1": "贼人势大，需从长计议。",
	"#xinfu_weilu2": "时机未到，先行撤退。",
	"#xinfu_zengdao1": "有功赏之，有过罚之。",
	"#xinfu_zengdao2": "治军之道，功过分明。",
	"#lvqian:die": "我自泰山郡以来，百姓获安，镇军伐贼，此生已无憾！",
	"#xinfu_guanwei1": "今日宴请诸位，有要事相商。",
	"#xinfu_guanwei2": "天下未定，请主公以大局为重。",
	"#xinfu_gongqing1": "尔辈何故与降虏交善。",
	"#xinfu_gongqing2": "豪将在外，增兵必成祸患啊！",
	"#panjun:die": "耻失荆州，耻失荆州啊！",
	"#xinfu_andong1": "勇足以当大难，智涌以安万变。",
	"#xinfu_andong2": "宽猛克济，方安河东之民。",
	"#xinfu_yingshi1": "应民之声，势民之根。",
	"#xinfu_yingshi2": "应势而谋，顺民而为。",
	"#duji:die": "试船而溺之，虽亡而忠至……",
	"#xinfu_duanfa1": "身体发肤，受之父母。",
	"#xinfu_duanfa2": "今断发以明志，尚不可证吾之心意？",
	"#xinfu_youdi1": "东吴已容不下我，愿降以保周全。",
	"#xinfu_youdi2": "笺书七条，足以表我归降之心。",
	"#zhoufang:die": "功亏一篑，功亏一篑啊……",
	"#xinfu_guanchao1": "朝夕之间，可知所进退。",
	"#xinfu_guanchao2": "月盈，潮起晨暮也；月亏，潮起日半也。",
	"#xinfu_xunxian1": "督军之才，子明强于我甚多。",
	"#xinfu_xunxian2": "此间重任，公卿可担之。",
	"#yanjun:die": "著作，还……没完成……",
	"#xinfu_kannan1": "俊才之杰，材匪戡难。",
	"#xinfu_kannan2": "戡，克也，难，攻之。",
	"#liuyao:die": "伯符小儿，还我子义！",
	"#xinfu_tushe1": "非英杰不图？吾既谋之且射毕！",
	"#xinfu_tushe2": "汉室衰微，朝纲祸乱，必图后福。",
	"#xinfu_limu1": "米贼作乱，吾必为益州自保。",
	"#xinfu_limu2": "废史立牧，可得一方安定。",
	"#liuyan:die": "背疮难治，世子难继……",
	"#xinfu_zhanji1": "公瑾安全至吴，心安之。",
	"#xinfu_zhanji2": "功曹之恩，吾必有展骥之机。",
	
	// yijiang
	"#xvzhi1": "鹿复现于野，孰不可射乎？",
	"#xvzhi2": "天下之士合纵，欲复攻于秦。",
	"#linghuyu:die": "咳咳……我欲谋大事，奈何命不由己……",
	"#zhenfeng1": "河西诸贼作乱，吾当驱万里之远。",
	"#zhenfeng2": "可折诸葛之锋而御者，独我其谁。",
	"#feiyao:die": "姜维，你果然是蜀军内应！",
	// 击、逆、泰、每，懂？
	"#fazhu1": "击风雨于共济，逆流亦溯千帆。",
	"#fazhu2": "泰山轻于大义，每思志士、何惧临渊。",
	"#fazhu3": "大江潮起，伐苇成舟，载江南春风。",
	"#xukun:die": "何处射来的流矢？",
	"#kangli1": "地界纷争皋陶难断，然图藏天府，坐上可明。",
	"#kangli2": "正至歉岁，难征百姓于役，望陛下明鉴。",
	"#sunli:die": "国无矩不立，何谓之方圆？",
	"#tongwei1": "集关西诸路大军，必雪当年长坂坡之耻。",
	"#tongwei2": "手织天网十万尺，欲擒飞龙落彀中。",
	"#cuguo1": "身担父命，怎可蜷于宫阙。",
	"#cuguo2": "体承国运，岂能缩居朝堂。",
	"#xiahoumao:die": "一将无能，徒累死三军……",
	"#qingbei1": "待追上那司马懿，定教他没好果子吃！",
	"#qingbei2": "身若不周，吾一人可作擎北之柱。",
	"#chenshi:die": "丞相、丞相！是魏延指使我的！",
	"#diezhang1": "某家这大锤，舞起来那叫一个万夫莫敌。",
	"#diezhang2": "贼吕布何在？某家来取汝性命了！",
	"#duanwan1": "好你个吕奉先，竟敢卸我膀子！",
	"#duanwan2": "汝这匹夫，为何往手腕上招呼？",
	"#wuanguo:die": "吕奉先，你给某家等着！",
	"#duwang1": "此去，欲诛敌莽、杀单于。",
	"#duwang2": "风萧萧兮易水寒，壮士一去兮不复还！",
	"#cibei1": "匹夫一怒，流血二人，天下缟素。",
	"#cibei2": "我欲效专诸、聂政之旧事，逐天狼于西北。",
	"#hanlong:die": "杀轲比能者，韩龙也！",
	"#shiming1": "今天命在北，我等已尽人事。",
	"#shiming2": "益州国疲民敝，非人力可续之。",
	"#jiangxi1": "典午忽兮，月酉没兮。",
	"#jiangxi2": "周慕孔子遗风，可与刘、扬同轨。",
	"#yj_qiaozhou:die": "炎汉百年之业，吾一言毁之……",
	"#shuojian1": "我数荐卿而祖不用，其之失也。",
	"#shuojian2": "兴霸乃当世豪杰，何患无爵。",
	"#yj_sufei:die": "兴霸何在？吾命休矣……",
	"#liandui1": "以句相联，抒离散之苦。",
	"#liandui2": "以诗相对，颂哀怨之情。",
	"#biejun1": "彼岸荼蘼远，落寞北风凉。",
	"#biejun2": "此去经年，不知何时能归？",
	"#liwan:die": "生不能同寝，死亦难同穴……",
	"#sangu1": "思报君恩，尽父子之忠。",
	"#sangu2": "欲酬三顾，竭三代之力。",
	"#yizu1": "仿祖父行事，可阻敌袭。",
	"#yizu2": "习先人故智，可御寇侵。",
	"#zhugeshang:die": "父子荷国重恩，当尽忠以报！",
	"#kousheng1": "驰马掠野，塞外称雄。",
	"#kousheng2": "控弦十万，纵横漠南。",
	"#kebineng:die": "草原雄鹰，折翼于此……",
	"#lkbushi1": "论演玄意，以筮辄验。",
	"#lkbushi2": "手不释书，好研经卷。",
	"#lkzhongzhuang1": "秽尘天听，卿有不测之祸！",
	"#lkzhongzhuang2": "倾乱国政，安得寿终正寝？",
	"#lukai:die": "不听忠言，国将亡矣……",
	"#xinxuanhuo1": "收人钱财，替人消灾。",
	"#xinxuanhuo2": "哼，叫你十倍奉还！",
	"#xinenyuan1": "报之以李，还之以桃。",
	"#xinenyuan2": "伤了我，休想全身而退！",
	"#xin_fazheng:die": "汉室复兴，我，是看不到了……",
	"#fuhun1": "光复汉室，重任在肩！",
	"#fuhun2": "将门虎子，承我父志！",
	"#guanzhang:die": "未能手刃仇敌，愧对先父……",
	"#zhenlie1": "虽是妇人，亦当奋身一搏！",
	"#zhenlie2": "为雪前耻，不惜吾身！",
	"#miji1": "此计，可歼敌精锐！",
	"#miji2": "此举，可破敌之围！",
	"#wangyi:die": "月儿，不要责怪你爹爹……",
	"#new_jiangchi1": "身当矢石，驰骛四方！",
	"#new_jiangchi2": "稳兵自重，静观其变！",
	"#caozhang:die": "子桓，你害我！",
	"#jingce1": "方策精详，有备无患。",
	"#jingce2": "精兵据敌，策守如山。",
	"#guohuai:die": "姜维小儿，竟然……",
	"#jueqing1": "你的死活，与我何干？",
	"#jueqing2": "无来无去，不悔不怨。",
	"#shangshi1": "无情者伤人，有情者自伤。",
	"#shangshi2": "自损八百，可伤敌一千。",
	"#zhangchunhua:die": "怎能如此对我！",
	"#luoying1": "别着急扔，给我就好。",
	"#luoying2": "这些都是我的。",
	"#jiushi11": "置酒高殿上，亲友从我游。",
	"#jiushi12": "走马行酒醴，驱车布鱼肉。",
	"#caozhi:die": "本是同根生，相煎何太急……",
	"#chengxiang1": "依我看，小事一桩。",
	"#chengxiang2": "孰重孰轻，一称便知。",
	"#renxin1": "仁者爱人，人恒爱之。",
	"#renxin2": "有我在，别怕。",
	"#caochong:die": "子桓哥哥……",
	"#qice1": "奇策在此，谁与争锋？",
	"#qice2": "倾力为国，算无遗策。",
	"#zhiyu1": "大勇若怯，大智如愚。",
	"#zhiyu2": "愚者既出，智者何存？",
	"#xunyou:die": "主公，臣下先行告退……",
	"#xinwuyan1": "汝有良策，何必问我！",
	"#xinwuyan2": "吾，誓不为汉贼献一策！",
	"#xinjujian1": "卧龙之才，远胜于吾。",
	"#xinjujian2": "天下大任，望君莫辞！",
	"#xin_xushu:die": "忠孝不能两全，孩儿……",
	"#sanyao1": "三人成虎，事多有。",
	"#sanyao2": "散谣惑敌，不攻自破！",
	"#zhiman1": "丞相多虑，且看我的！",
	"#zhiman2": "兵法谙熟于心，取胜千里之外！",
	"#xin_masu:die": "败军之罪，万死难赎！",
	"#danshou1": "以胆为守，扼敌咽喉！",
	"#danshou2": "到此为止了！",
	"#zhuran:die": "何人竟有如此之胆！？",
	"#pojun1": "大军在此！汝等休想前进一步！",
	"#pojun2": "敬请，养精蓄锐！",
	"#xusheng:die": "盛不能奋身出命，不亦辱乎……",
	"#ganlu1": "男婚女嫁，须当交换文定之物。",
	"#ganlu2": "此真乃吾之佳婿也。",
	"#buyi1": "吾乃吴国之母，何人敢放肆？",
	"#buyi2": "有老身在，汝等尽可放心。",
	"#wuguotai:die": "卿等，务必用心辅佐仲谋……",
	"#xuanfeng1": "伤敌于千里之外！",
	"#xuanfeng2": "索命于须臾之间！",
	"#lingtong:die": "大丈夫，不惧死亡……",
	"#zishou1": "江河霸主，何惧之有？",
	"#zishou2": "荆襄之地，固若金汤。",
	"#zongshi1": "汉室百年，坚如磐石。",
	"#zongshi2": "宗室子弟，尽收民心。",
	"#liubiao:die": "优柔寡断，要不得啊……",
	"#zhiyan1": "志节分明，折而不屈！",
	"#zhiyan2": "直言劝谏，不惧祸否！",
	"#zongxuan1": "依易设象，以占吉凶。",
	"#zongxuan2": "世间万物，皆有定数。",
	"#yufan:die": "我枉称东方朔再世……",
	"#mingce1": "如此，霸业可图也。",
	"#mingce2": "如此，一击可擒也。",
	"#zhichi1": "如今之计，唯有退守，再做决断。",
	"#zhichi2": "若吾，早知如此……",
	"#chengong:die": "请出就戮！",
	"#anxu1": "和鸾雍雍，万福攸同。",
	"#anxu2": "君子乐胥，万邦之屏。",
	"#zhuiyi1": "终其永怀，恋心殷殷。",
	"#zhuiyi2": "妾心所系，如月之恒。",
	"#bulianshi:die": "江之永矣，不可方思……",
	"#gongji1": "吃我一箭！",
	"#gongji2": "鼠辈，哪里走！",
	"#jiefan1": "退后，这里交给我！",
	"#jiefan2": "休想趁人之危！",
	"#handang:die": "今后，只能靠你了……",
	"#qiuyuan1": "逆贼逞凶，卿可灭之。",
	"#qiuyuan2": "求父亲救救大汉江山吧！",
	"#zhuikong1": "诚惶诚恐，夜不能寐。",
	"#zhuikong2": "嘘，隔墙有耳。",
	"#fuhuanghou:die": "陛下为何不救臣妾……",
	"#quanji1": "这仇，我记下了。",
	"#quanji2": "先让你得意几天。",
	"#zili1": "欲取天下，当在此时！",
	"#zili2": "时机已到，今日起兵！",
	"#zhonghui:die": "伯约，让你失望了……",
	"#qiaoshui1": "合则两利，斗则两伤。",
	"#qiaoshui2": "君且安坐，听我一言。",
	"#jyzongshi1": "买卖不成，情义还在。",
	"#jyzongshi2": "此等小事，何须挂耳？",
	"#jianyong:die": "两国交战……不斩……",
	"#qianxi1": "喊什么喊？我敢杀你！",
	"#qianxi2": "笑什么笑？叫你得意！",
	"#old_madai:die": "我怎么会死在这里……",
	"#xiansi1": "袭人于不意，溃敌于无形！",
	"#xiansi2": "破敌军阵，父亲定会刮目相看！",
	"#liufeng:die": "父亲，为什么……",
	"#junxing1": "严刑峻法，以破奸诡之胆。",
	"#junxing2": "你招还是不招？",
	"#yuce1": "御敌之策，成竹于胸。",
	"#yuce2": "以缓制急，不战屈兵。",
	"#manchong:die": "援军为何迟迟未到……",
	"#pindi1": "定品寻良骥，中正探人杰。",
	"#pindi2": "取才赋职，论能行赏。",
	"#faen1": "礼法容情，皇恩浩荡。",
	"#faen2": "法理有度，恩威并施。",
	"#chenqun:die": "吾身虽陨，典律昭昭……",
	"#chanhui1": "你也休想置身事外！",
	"#chanhui2": "你可别不识抬举！",
	"#jiaojin1": "就凭你，还想算计于我？",
	"#jiaojin2": "是谁借给你的胆子？",
	"#sunluban:die": "本公主，何罪之有？",
	"#shenxing1": "审时度势，乃容万变。",
	"#shenxing2": "此需斟酌一二。",
	"#bingyi1": "公正无私，秉持如一。",
	"#bingyi2": "诸君看仔细了！",
	"#guyong:die": "病躯渐重，国事难安……",
	"#qieting1": "想欺我蔡氏，痴心妄想！",
	"#qieting2": "此人不露锋芒，断不可留！",
	"#xianzhou1": "献荆襄九郡，图一世之安。",
	"#xianzhou2": "丞相携天威而至，吾等安敢不降。",
	"#caifuren:die": "孤儿寡母，何必赶尽杀绝呢……",
	"#jianying1": "由缓至急，循循而进。",
	"#jianying2": "事需缓图，欲速不达也。",
	"#shibei1": "矢志于北，尽忠于国！",
	"#shibei2": "命系袁氏，一心向北。",
	"#yj_jushou:die": "智士凋亡，河北哀矣……",
	"#qiangzhi1": "文书强识，才可博于运筹。",
	"#qiangzhi2": "容我过目，即刻咏来。",
	"#xiantu1": "将军莫虑，且看此图。",
	"#xiantu2": "吾以诚心相献，君何踌躇不前！",
	"#zhangsong:die": "皇叔不听吾谏言，悔时晚矣！",
	"#fenli1": "以逸待劳，坐收渔利。",
	"#fenli2": "以主制客，占尽优势。",
	"#pingkou1": "对敌人仁慈，就是对自己残忍。",
	"#pingkou2": "反守为攻，直捣黄龙！",
	"#zhuhuan:die": "我不要死在这病榻之上……",
	"#qiaoshi1": "樵心遇郎君，妾心涟漪生。",
	"#qiaoshi2": "樵前情窦开，君后寻迹来。",
	"#yanyu1": "感君一回顾，思君朝与暮。",
	"#yanyu2": "伴君一生不寂寞。",
	"#xiahoushi:die": "愿有来世，不负前缘……",
	"#duodao1": "这刀岂是你配用的？",
	"#duodao2": "夺敌兵刃，如断其臂！",
	"#anjian1": "击其懈怠，攻其不备！",
	"#anjian2": "哼，你满身都是破绽！",
	"#panzhangmazhong:die": "怎么可能，我明明亲手将你……",
	"#zhongyong1": "驱刀飞血，直取寇首！",
	"#zhongyong2": "为将军提刀携马，万死不辞！",
	"#zhoucang:die": "为将军操刀牵马，此生无憾……",
	"#longyin1": "破阵杀敌，愿献犬马之劳！",
	"#longyin2": "虎啸既响，龙吟当附！",
	"#guanping:die": "父亲快走，孩儿断后……",
	"#dangxian1": "先锋就由老夫来当！",
	"#dangxian2": "看我先行破敌！",
	"#fuli1": "有老夫在，蜀汉就不会倒下！",
	"#fuli2": "今天是个拼命的好日子，哈哈哈哈！",
	"#liaohua:die": "今后，就靠你们啦……",
	"#lihuo1": "将士们，引火对敌！",
	"#lihuo2": "和我同归于尽吧！",
	"#chunlao1": "唉，帐中不可无酒啊！",
	"#chunlao2": "无碍，且饮一杯！",
	"#chengpu:die": "没，没有酒了……",
	"#xianzhen1": "攻无不克，战无不胜！",
	"#xianzhen2": "破阵斩将，易如反掌！",
	"#jinjiu1": "贬酒阙色，所以无污。",
	"#jinjiu2": "避嫌远疑，所以无误。",
	"#gaoshun:die": "生死有命……",
	"#sidi1": "筑城固守，司敌备战。",
	"#sidi2": "徒手制敌，能奈我何？",
	"#caozhen:die": "秋雨凄迷，军心已乱……",
	"#benxi1": "奔战万里，袭关斩将。",
	"#benxi2": "袭敌千里，溃敌百步！",
	"#wuyi:die": "奔波已疲，难以，再战……",
	"#shenduan1": "良机虽去，尚可截资断源！",
	"#shenduan2": "行军须慎，谋断当绝！",
	"#yonglve1": "不必从言，自有主断！",
	"#yonglve2": "非常之机，当行非常之计！",
	"#hanhaoshihuan:die": "那拈弓搭箭的将军，是何人？",
	"#huituo1": "富我大魏，扬我国威！",
	"#huituo2": "大展宏图，就在今日！",
	"#mingjian1": "孰忠孰奸，朕尚能明辨！",
	"#mingjian2": "你我推心置腹，岂能相负。",
	"#xingshuai1": "聚群臣而嘉勋，隆天子之气运！",
	"#xingshuai2": "百年兴衰皆由人，不由天！",
	"#caorui:die": "悔不该耽于逸乐，至有今日……",
	"#qingxi1": "策马疾如电，溃敌一瞬间。",
	"#qingxi2": "虎豹骑岂能徒有虚名？杀！",
	"#caoxiu:die": "兵行险招，终有一失……",
	"#huomo1": "妙笔在手，研墨在心。",
	"#huomo2": "笔墨写春秋，挥毫退万敌！",
	"#zuoding1": "承君恩宠，报效国家！",
	"#zuoding2": "只有忠心，没有谋略，是不够的。",
	"#zhongyao:die": "墨尽，岁终……",
	"#zhanjue1": "成败在此一举，杀！",
	"#zhanjue2": "此刻，唯有死战，安能言降！",
	"#qinwang11": "国有危难，哪位将军请战？",
	"#qinwang12": "大厦倾危，谁堪栋梁！",
	"#liuchen:die": "无言对百姓，有愧，见先祖……",
	"#wurong1": "兵不血刃，亦可先声夺人！",
	"#wurong2": "从，则安之；犯，则诛之。",
	"#shizhi1": "捐躯赴难，视死如归。",
	"#shizhi2": "矢志于国，至死不渝。",
	"#zhangyi:die": "大丈夫当战死沙场，马革裹尸而还……",
	"#yanzhu1": "大局已定，你还是放弃吧。",
	"#yanzhu2": "不诛此权臣，朕，何以治天下？",
	"#xingxue1": "文修武备，才是兴国之道。",
	"#xingxue2": "汝等都是国之栋梁。",
	"#zhaofu1": "奉朕之诏，擒此国贼！",
	"#zhaofu2": "天子震怒，贼臣授首。",
	"#sunxiu:die": "崇文抑武，朕错了吗？",
	"#anguo1": "止干戈，休战事。",
	"#anguo2": "安邦定国，臣子分内之事。",
	"#zhuzhi:die": "集毕生之力，保国泰民安……",
	"#yaoming1": "民不足食，何以养军？",
	"#yaoming2": "看我如何以无用之力换己所需，哈哈哈！",
	"#quancong:die": "儿啊，好好报答吴王知遇之恩……",
	"#huaiyi1": "一生纵横，怎可对他人称臣！",
	"#huaiyi2": "此等小利，焉能安吾雄心？",
	"#gongsunyuan:die": "天不容我公孙家……",
	"#jigong1": "曹贼势颓，主公速击之。",
	"#jigong2": "不惜一切代价，拿下此人！",
	"#shifei1": "良谋失利，罪在先锋！",
	"#shifei2": "计略周详，怎奈指挥不当。",
	"#guotufengji:die": "大势已去，无力回天……",
	"#juece1": "哼！你走投无路了。",
	"#juece2": "无用之人，死！",
	"#mieji1": "宁错杀，无放过！",
	"#mieji2": "你能逃得出我的手掌心吗？",
	"#xinfencheng1": "我得不到的，你们也别想得到！",
	"#xinfencheng2": "让这一切都灰飞烟灭吧！哼哼哼哼……",
	"#xin_liru:die": "如遇明主，大业必成……",
	"#jiaozhao1": "诏书在此，不得放肆！",
	"#jiaozhao2": "妾身也是逼不得已，方才出此下策。",
	"#danxin1": "司马一族，其心可诛。",
	"#danxin2": "妾身定为我大魏鞠躬尽瘁，死而后已。",
	"#guohuanghou:die": "陛下，臣妾这就来见你……",
	"#zhige1": "天下和而平乱，神器宁而止戈。",
	"#zhige2": "刀兵纷争既止，国运福祚绵长。",
	"#zongzuo1": "尽死生之力，保大厦不倾。",
	"#zongzuo2": "乾坤倒，黎民苦，高祖后，岂任之？",
	"#liuyu:die": "怀柔之计，终非良策……",
	"#duliang1": "告诉丞相，山路难走！请宽限几天。",
	"#duliang2": "粮草已到，请将军验看。",
	"#fulin1": "我乃托孤重臣，却在这儿搞什么粮草！",
	"#fulin2": "丞相，丞相！你们没看见我吗？",
	"#liyan:die": "孔明这一走，我算是没指望了……",
	"#kuangbi1": "匡人助己，辅政弼贤。",
	"#kuangbi2": "兴隆大化，佐理时务。",
	"#sundeng:die": "愿陛下留意听采，儿臣虽死犹生……",
	"#jishe1": "孙吴正当盛世，兴些土木又何妨？",
	"#jishe2": "当再建新殿，扬我国威！",
	"#lianhuo1": "用那剩下的铁石，正好做些工事。",
	"#lianhuo2": "筑下这铁链，江东天险牢不可破！",
	"#cenhun:die": "我为主上出过力！！！呃啊！",
	"#qinqing1": "陛下勿忧，大将军危言耸听。",
	"#qinqing2": "陛下，莫让他人知晓此事！",
	"#huisheng1": "大人，这些钱够吗？",
	"#huisheng2": "劳烦大人美言几句~",
	"#huanghao:die": "魏军竟然真杀来了！",
	"#taoluan1": "睁开你的眼睛看看，现在是谁说了算？",
	"#taoluan2": "国家承平，神器稳固，陛下勿忧。",
	"#zhangrang:die": "臣等殄灭，唯陛下自爱……（跳水声）",
	"#guizao1": "这都是陛下的恩泽呀。",
	"#guizao2": "陛下盛宠，臣万莫敢忘。",
	"#jiyu1": "陛下，此人不堪大用。",
	"#jiyu2": "尔等玩忽职守，依诏降职处置。",
	"#sunziliufang:die": "唉，树倒猢狲散，鼓破众人捶呀……",
	"#zhongjian1": "浊世风云变幻，当以明眸洞察。",
	"#zhongjian2": "心中自有明镜，可鉴奸佞忠良。",
	"#caishi1": "清识难尚，至德可师。",
	"#caishi2": "知书达礼，博古通今。",
	"#xinxianying:die": "吾一生明鉴，竟错看于你……",
	"#fumian1": "人言吾吉人天相，福寿绵绵。",
	"#fumian2": "永理二子，当保大汉血脉长存。",
	"#daiyan1": "汝可于宫中多留几日无妨。",
	"#daiyan2": "胡氏受屈，吾亦心不安。",
	"#wuxian:die": "所幸伴君半生，善始终得善终……",
	"#wengua1": "阴阳相生相克，万事周而复始。",
	"#wengua2": "卦不能佳，可须异日。",
	"#fuzhu1": "我连做梦都在等这一天呢。",
	"#fuzhu2": "既然来了，就别想走了。",
	"#xushi:die": "莫问前程凶吉，但求落幕无悔……",
	"#shouxi1": "天子之位，乃归刘汉！",
	"#shouxi2": "吾父功盖寰区，然且不敢篡窃神器。",
	"#huimin1": "悬壶济世，施医救民。",
	"#huimin2": "心系百姓，惠布山阳。",
	"#caojie:die": "皇天必不祚尔……",
	"#bizhuan1": "无墨不成书，无识不成才。",
	"#bizhuan2": "笔可抒情，亦可诛心。",
	"#tongbo1": "读万卷书，行万里路。",
	"#tongbo2": "博学而不穷，笃行而不倦。",
	"#caiyong:die": "感叹世事，何罪之有？",
	"#qingxian1": "抚琴拨弦，悠然自得。",
	"#qingxian2": "寄情于琴，合于天地。",
	"#juexiang1": "此曲不能绝矣！",
	"#juexiang2": "一曲琴音，为我送别。",
	"#jikang:die": "多少遗恨，俱随琴音去……",
	"#jianzheng1": "天时不当，必难取胜！",
	"#jianzheng2": "且慢，此仗打不得！",
	"#zhuandui1": "你已无话可说了吧！",
	"#zhuandui2": "黄口小儿，也敢来班门弄斧？",
	"#tianbian1": "当今天子为刘，天亦姓刘！",
	"#tianbian2": "阁下知其然，而未知其所以然。",
	"#qinmi:die": "我竟然，也百口莫辩了……",
	"#funan1": "礼尚往来，乃君子风范。",
	"#funan2": "以子之矛，攻子之盾。",
	"#jiexun1": "帝王应以社稷为重，以大观为主。",
	"#jiexun2": "吾冒昧进谏，只求陛下思虑。",
	"#xuezong:die": "尔等，竟做如此有辱斯文之事……",
	"#shiyong1": "好大一股杀气啊！",
	"#shiyong2": "好大一股酒气啊！",
	"#old_huaxiong:die": "皮厚，不挡刀啊……",
	"#jieyue1": "安营驻寨，严守城防。",
	"#jieyue2": "诸军严整，敌军自乱。",
	"#yujin:die": "我，无颜面对丞相了……",
	"#reqiaoshui1": "慧心妙舌，难题可解。",
	"#reqiaoshui2": "巧言善辩，应对自如。",
	"#wusheng_guanzhang1": "一夫当关，万夫莫当！",
	"#paoxiao_guanzhang1": "喝啊~",
	"#luoying_discard1": "别着急扔，给我就好。",
	"#luoying_discard2": "这些都是我的。",
	"#luoying_judge1": "别着急扔，给我就好。",
	"#luoying_judge2": "这些都是我的。",
	"#jiushi21": "置酒高殿上，亲友从我游。",
	"#jiushi22": "走马行酒醴，驱车布鱼肉。",
	"#paiyi1": "妨碍我的人，都得死！",
	"#paiyi2": "此地容不下你！",
	"#juexiang_ji1": "一弹一拨，铿锵有力！",
	"#juexiang_lie1": "一壶烈云烧，一曲人皆醉。",
	"#juexiang_rou1": "君子以琴会友，以瑟辅人。",
	"#juexiang_he1": "悠悠琴音，人人自醉。",
	
	// yingbian
	"#oltousui1": "区区黄口孺帝，能有何作为？",
	"#oltousui2": "昔年沙场茹血，今欲饮帝血！",
	"#olchuming1": "明公为何如此待我兄弟？",
	"#olchuming2": "栖佳木之良禽，其鸣亦哀乎？",
	"#chengjichengcui:die": "今为贼子贾充所害！",
	"#bingxin1": "思鸟黄雀至，卧冰鱼自跃。",
	"#bingxin2": "夜静向寒月，卧冰求鲤鱼。",
	"#wangxiang:die": "夫生之有死，自然之理也……",
	"#xiongshu1": "怀志拥权，谁敢不服？",
	"#xiongshu2": "天下凶凶，由我一人。",
	"#jianhui1": "一箭之仇，十年不忘！",
	"#jianhui2": "此仇不报，怨恨难消！",
	"#jin_jiachong:die": "任元褒，吾与汝势不两立！",
	"#gaoling1": "天家贵胄，福泽四海。",
	"#gaoling2": "宣王之女，恩惠八方。",
	"#qimei1": "辅车相依，比翼双飞。",
	"#qimei2": "情投意合，相濡以沫。",
	"#ybzhuiji1": "不过是些微代价罢了。",
	"#ybzhuiji2": "哼，以为这就能难倒我吗？",
	"#xuangongzhu:die": "元凯，我去也……",
	"#canmou1": "兢兢业业，竭心筹划。",
	"#canmou2": "欲设此法，计谋二人。",
	"#congjian1": "为人臣属，安可不随？",
	"#congjian2": "主公有难，吾当从之。",
	"#xinchang:die": "宪英，救我！",
	"#wanyi1": "天性婉嫕，易以道御。",
	"#wanyi2": "婉嫕利珍，为后攸行。",
	"#maihuo1": "祸根未决，转而滋蔓。",
	"#maihuo2": "无德之亲，终为祸根。",
	"#yangzhi:die": "贾氏……构陷……",
	"#xuanbei1": "博选良家，以充后宫。",
	"#xuanbei2": "非良家，不可选也。",
	"#xianwan1": "婉而从物，不竞不争。",
	"#xianwan2": "娴婉恭谨，重贤加礼。",
	"#yangyan:die": "一旦殂损，痛悼伤怀……",
	"#caozhao1": "草诏所宣，密勿从事。",
	"#caozhao2": "惩恶扬功，四方之纲。",
	"#olxibing1": "讲信修睦，息兵不功。",
	"#olxibing2": "天时未至，周武还师。",
	"#ol_huaxin:die": "死国，甚无谓也！",
	"#bolan1": "博览群书，融会贯通。",
	"#bolan2": "博览于文，约之以礼。",
	"#yifa1": "仪法不明，则实不称名。",
	"#yifa2": "仪法明晰，则长治久安。",
	"#zhongyan:die": "嗟尔姜任，邈不我留……",
	"#zhongyun1": "秉公行事，无所亲疏。",
	"#zhongyun2": "明晰法理，通晓人情。",
	"#shenpin1": "考其遗法，肃若神明。",
	"#shenpin2": "气韵生动，出于天成。",
	"#weiguan:die": "辞荣善终，不可求……",
	"#chexuan1": "兵车疾动，以悬敌首！",
	"#chexuan2": "层层布设，以多胜强！",
	"#cheliji:die": "元气已伤，不如归去……",
	"#caiwang1": "才气不俗，声望四海。",
	"#caiwang2": "绥怀之策，监守邺城。",
	"#naxiang1": "奉命伐吴，得胜纳降。",
	"#naxiang2": "进军逼江，震慑吴贼。",
	"#simazhou:die": "恩赐重物，病身难消受……",
	"#qiaoyan1": "此事不宜迟，在于速决。",
	"#qiaoyan2": "公若到彼，贵不可言。",
	"#xianzhu1": "馈珠之恩，望将军莫忘。",
	"#xianzhu2": "愿以珠为礼，与卿交好，而休刀兵。",
	"#ol_lisu:die": "忘恩负义之徒！",
	"#huirong1": "红尘洗练，慧容不改。",
	"#huirong2": "花貌易改，福惠长存。",
	"#ciwei1": "乃家乃邦，是则是效。",
	"#ciwei2": "其慈有威，不舒不暴。",
	"#caiyuan1": "柳絮轻舞，撷芳赋诗。",
	"#caiyuan2": "秀媛才德，知书达理。",
	"#jin_yanghuiyu:die": "韶华易老，佳容不再……",
	"#zhuosheng1": "才经世务，干用之绩。",
	"#zhuosheng2": "器量之远，当至公辅。",
	"#shibao:die": "寒门出身，难以擢升……",
	"#huishi1": "你的想法，我已知晓。",
	"#huishi2": "妾身慧眼，已看透太多。",
	"#qingleng1": "冷冷清清，寂落沉沉。",
	"#qingleng2": "冷月葬情，深雪埋伤。",
	"#xuanmu1": "四门穆穆，八面莹澈。",
	"#xuanmu2": "天色澄穆，心明清静。",
	"#jin_zhangchunhua:die": "冷眸残情，孤苦为一人……",
	"#buchen1": "螟蛉之光，安敢同日月争辉？",
	"#buchen2": "巍巍隐帝，岂可为臣？",
	"#smyyingshi1": "鹰扬千里，明察秋毫。",
	"#smyyingshi2": "鸢飞戾天，目入百川。",
	"#xiongzhi1": "烈士雄心，志存高远。",
	"#xiongzhi2": "乱世之中，唯我司马！",
	"#quanbian1": "筹权谋变，步步为营。",
	"#quanbian2": "随机应变，谋国窃权。",
	"#jin_simayi:die": "虎入骷冢，司马难兴……",
	"#shiren1": "宠过必乱，不可大任。",
	"#shiren2": "开卷有益，识人有法。",
	"#yanxi1": "宴会嬉趣，其乐融融。",
	"#yanxi2": "宴中趣玩，得遇知己。",
	"#jin_wangyuanji:die": "祖父已逝，哀凄悲戚……",
	"#tuishi1": "此僚怀异，召汝讨贼。",
	"#tuishi2": "推令既出，焉敢不从？",
	"#choufa1": "秣马厉兵，筹伐不臣！",
	"#choufa2": "枕戈待旦，秣马征平。",
	"#zhaoran1": "行昭然于世，赦众贼以威。",
	"#zhaoran2": "吾之心思，路人皆知。",
	"#chengwu1": "令行禁止，政通无虞。",
	"#chengwu2": "上下一体，大业可筹。",
	"#jin_simazhao:die": "司马三代，一梦成空……",
	"#baoqie1": "宝箧藏玺，时局变动。",
	"#baoqie2": "曹亡宝箧，尽露锋芒。",
	"#jyishi1": "家庭和顺，夫妻和睦。",
	"#jyishi2": "之子于归，宜其室家。",
	"#shiduo1": "鉴识得体，气度雅涵。",
	"#shiduo2": "宽容体谅，宽人益己。",
	"#jin_xiahouhui:die": "夫君，你怎么对我如此狠心……",
	"#taoyin1": "司马氏善谋、善忍，善置汝于绝境！",
	"#taoyin2": "隐忍数载，亦不坠青云之志！",
	"#yimie1": "汝大逆不道，当死无赦！",
	"#yimie2": "斩草除根，灭其退路！",
	"#ruilve1": "司马当兴，其兴在吾。",
	"#ruilve2": "吾承父志，故知军事、通谋略。",
	"#tairan1": "撼山易，撼我司马氏难。",
	"#tairan2": "云卷云舒，处之泰然。",
	"#jin_simashi:die": "子上，这是为兄给你打下的江山……",
	"#xijue1": "承爵于父，安能辱之！",
	"#xijue2": "虎父安有犬子乎？",
	"#zhanghuyuechen:die": "儿有辱……父亲威名……",
	"#sanchen1": "陈书弼国，当一而再、再而三。",
	"#sanchen2": "勘除弼事，三陈而就。",
	"#zhaotao1": "奉诏伐吴，定鼎东南！",
	"#zhaotao2": "三陈方得诏，一股下孙吴！",
	"#duyu:die": "金瓯尚缺，死难瞑目……",
	"#xijue_tuxi1": "动如霹雳，威震宵小！",
	"#xijue_tuxi2": "行略如风，摧枯拉朽！",
	"#xijue_xiaoguo1": "大丈夫生于世，当沙场效忠！",
	"#xijue_xiaoguo2": "骁勇善战，刚毅果断！",
	"#pozhu1": "攻其不备，摧枯拉朽！",
	"#pozhu2": "势如破竹，铁锁横江亦难挡！",
	
	// guozhan
	"#gz_sp_dongzhuo:die": "为何人人皆与我为敌？……",
	"#gz_jiangqing:die": "竟……破我阵法……",
	"#gz_zhonghui:die": "吾机关算尽，却还是棋错一着……",
	"#gzzhaoxin1": "行明动正，何惧他人讥毁。",
	"#gzzhaoxin2": "大业之举，岂因宵小而动？",
	"#gzsuzhi1": "敌军势大与否，无碍我自计定施。",
	"#gzsuzhi2": "汝竭力强攻，也只是徒燥军心。",
	"#gzfankui1": "胆敢诽谤惑众，这就是下场！",
	"#gzfankui2": "今天，就拿你来杀鸡儆猴。",
	"#gz_simazhao:die": "千里之功，只差一步了……",
	"#gzhuaiyi1": "曹魏可王，吾亦可王！",
	"#gzhuaiyi2": "这天下，本就是我囊中之物。",
	"#gzzisui1": "仲达公，敢问这辽隧之战，谁胜谁负啊，哈哈哈哈……",
	"#gzzisui2": "凡从我大燕者，授印封爵，全族俱荣！",
	"#gz_gongsunyuan:die": "流星骤损，三军皆溃，看来大势去矣……",
	"#gz_sunchen:die": "愿陛下念臣昔日之功，陛下？陛下！！",
	"#gzxingzhao1": "让我先探他一探。",
	"#gzxingzhao2": "船，也不是一天就能造出来的。",
	"#gzxingzhao_xunxun1": "拿些上好的木料来。",
	"#gzxingzhao_xunxun2": "精挑细选，方能成百年之计。",
	"#gz_tangzi:die": "偷工减料，要不得啊……",
	"#gz_mengda:die": "吾一生寡信，今报应果然来矣……",
	"#gzwenji1": "这，可如何是好？",
	"#gzwenji2": "望先生不吝赐教。",
	"#gztunjiang1": "大恩难报，军粮以资。",
	"#gztunjiang2": "虽有不舍，也只能离家远行了。",
	"#gz_liuqi:die": "身侧之人，歹毒更甚于敌！",
	"#mffengshi1": "雪中送炭？倒不如落井下石！",
	"#mffengshi2": "今发兵援羽，敢问是过是功？",
	"#gz_mifangfushiren:die": "虞翻小儿，你安敢辱我！",
	"#gzbiluan1": "审势夺度，以稳求进。",
	"#gzbiluan2": "进退利弊，自当细细思量。",
	"#gzlixia1": "先生大才，岂可居于人下。",
	"#gzlixia2": "先生贤才，老夫着实佩服。",
	"#gz_shixie:die": "天命之时……已到……",
	"#gzbushi1": "争斗，永远没有赢家。",
	"#gzbushi2": "和平，永远没有输家。",
	"#gzmidao1": "恩结天地，法惠八荒。",
	"#gzmidao2": "行五斗米道，可知暖饱。",
	"#gz_zhanglu:die": "唉，义不敌武，道难御兵……",
	"#quanjin1": "今称魏公，则可以藩卫之名，征吴伐蜀也。",
	"#quanjin2": "明公受封，正合天心人意！",
	"#zaoyun1": "开渠输粮，振军之心，破敌之胆！",
	"#zaoyun2": "兵精粮足，胜局已定！",
	"#gz_dongzhao:die": "一生无愧，又何惧身后之议……",
	"#zhuhai_gz_re_xushu1": "今日当要替天行道。",
	"#zhuhai_gz_re_xushu2": "我容得你，天不容你！",
	"#gzjiancai1": "得此贤士，如鱼得水。",
	"#gzjiancai2": "将军，在下可举荐一人。",
	"#gz_re_xushu:die": "未尽孝道，抱憾此生……",
	"#donggui1": "闻伯符立业，今特来相助。",
	"#donggui2": "臣虽驽钝，愿以此腔热血报国。",
	"#fengyang1": "谁也休想染指江东寸土！",
	"#fengyang2": "如此咽喉要地，吾当亲力守之。",
	"#gz_wujing:die": "憾未能见，我江东一统天下之时……",
	"#gzzhidao1": "一朝得势，自当尽诸其力！",
	"#gzzhidao2": "本王要的，没有得不到的！",
	"#gzyjili1": "处处受制于人，难施拳脚。",
	"#gzyjili2": "寄居人下，终是气短。",
	"#gz_yanbaihu:die": "江东，有我一半……",
	"#gzchenglve1": "如此大胜，皆由我一人谋划。",
	"#gzchenglve2": "画谋定计，谁堪与我比较。",
	"#gzshicai1": "阿瞒，苦思之事，我早有良策。",
	"#gzshicai2": "策略已有，按部就班即可得胜。",
	"#gz_xuyou:die": "阿瞒，你竟忘恩负义！！",
	"#gzbaolie1": "废话少说，受死吧，喝！",
	"#gzbaolie2": "当今曹营之将，一个能打的都没有！",
	"#gz_xiahouba:die": "不好，有埋伏！呃！",
	"#gzcongcha1": "窥一斑而知全豹。",
	"#gzcongcha2": "问一事则明其心。",
	"#xinfu_gongqing_gz_panjun1": "水至清则无鱼，人至察则可无过。",
	"#xinfu_gongqing_gz_panjun2": "若人人怀公忘私，则天下早定矣。",
	"#gz_panjun:die": "密谋既泄，难处奸贼啊……",
	"#gzxishe1": "伏箭灭破虏，坚城拒讨逆。",
	"#gzxishe2": "什么江东猛虎？还不是我箭下之鬼！",
	"#gz_huangzu:die": "今日不过是成王败寇，哼！动手吧！",
	"#aocai_gz_zhugeke1": "诸位可知，自古英雄出少年！",
	"#aocai_gz_zhugeke2": "恪乞笔再添二字，还请陛下一观。",
	"#gzduwu1": "此战罪在当代，然功在千秋。",
	"#gzduwu2": "昔秦灭六国之事，足表养敌之患！",
	"#gz_zhugeke:die": "祸及三族，愧对父亲……",
	"#gz_wenqin:die": "公休，汝这是何意，呃……",
	"#gzlianpian1": "公之大才，当于行伍建功，安能空老林泉？",
	"#gzlianpian2": "你我旧识，此险，望兄搭救之！",
	"#gz_xf_sufei:die": "身陷庸主而不自知，今日终陷囹圄……",
	"#gztongduo1": "统荆益二州诸物之价，以为民生国祚之大计。",
	"#gztongduo2": "铸直百之钱，可平物价，定军民之心。",
	"#qingyin1": "功成身退，再不问世间诸事。",
	"#qingyin2": "天下既定，我亦当遁迹匿踪，颐养天年矣。",
	"#gz_liuba:die": "家国将逢巨变，奈何此身先陨……",
	"#daming1": "孝直溢美之言，特以此小利报之，还望笑纳。",
	"#daming2": "孟起，莫非甘心为他人座下之客。",
	"#xiaoni1": "如此荒辈之徒为主，成何用也。",
	"#xiaoni2": "公既如此，恕在下诚难留之。",
	"#gz_pengyang:die": "人言我心大志寡，难可保安，果然如此，唉……",
	"#gzjuejue1": "舍小家而取大胜，何惜之有？！",
	"#gzjuejue2": "今家小虽陷敌手，安敢以私废公！",
	"#gzfangyuan1": "布阵合围，滴水不漏，待敌自溃。",
	"#gzfangyuan2": "乘敌阵未稳，待我斩将刈旗，先奋士气！",
	"#gz_zhuling:die": "半生曹家麾下将，终是，丞相眼中，倒戈臣……",
	"#gz_caocao:die": "霸业未成未成啊！",
	"#gz_simayi:die": "难道真是天意难违？",
	"#gz_xiahoudun:die": "两，两边都看不见了……",
	"#gz_zhangliao:die": "真的没想到……",
	"#gz_xuzhu:die": "冷，好冷啊……",
	"#gz_guojia:die": "咳，咳……",
	"#gz_zhenji:die": "悼良会之永绝兮，哀一逝而异乡……",
	"#gz_xiahouyuan:die": "竟然……比我还……快……",
	"#gz_zhanghe:die": "啊……膝盖……中箭了……",
	"#duanliang11": "截其源，断其粮，贼可擒也。",
	"#duanliang12": "人是铁，饭是钢。",
	"#gz_xuhuang:die": "一顿不吃饿得慌……",
	"#gz_caoren:die": "长江以南，再无王土矣……",
	"#gz_dianwei:die": "主公，快走……！",
	"#gz_xunyu:die": "主公要臣死，臣不得不死……",
	"#gz_caopi:die": "子建，子建……",
	"#gz_yuejin:die": "箭疮发作，吾命休矣……",
	"#gz_liubei:die": "这就是桃园吗？",
	"#gz_guanyu:die": "什么？此地名叫麦城？",
	"#gz_zhangfei:die": "实在是，杀不动了……",
	"#gz_zhugeliang:die": "将星陨落，天命难违……",
	"#gz_zhaoyun:die": "这，就是失败的滋味吗……",
	"#gz_machao:die": "（马蹄声远去……）",
	"#gz_huangyueying:die": "亮……",
	"#liegong1": "百步穿杨！",
	"#liegong2": "中！",
	"#gz_huangzhong:die": "不得不服老啦~",
	"#kuanggu1": "我会怕你吗！",
	"#kuanggu2": "真是美味啊！",
	"#gz_weiyan:die": "谁敢杀我？！呃啊……",
	"#gz_pangtong:die": "看来我命中注定将丧命于此……",
	"#gz_liushan:die": "别……别打脸，我投降还不行吗？",
	"#gz_menghuo:die": "七纵之恩……来世……再报了……",
	"#gz_zhurong:die": "大王，我，先走一步了……",
	"#gz_ganfuren:die": "请替我照顾好阿斗……",
	"#qianhuan1": "幻变迷踪，虽飞鸟亦难觅踪迹。",
	"#qianhuan2": "幻化于阴阳，藏匿于乾坤。",
	"#gz_yuji:die": "幻化之物，终是算不得真呐……",
	"#gz_sunquan:die": "父亲，大哥，仲谋愧矣……",
	"#gz_ganning:die": "二十年后，又是一条好汉……",
	"#gz_lvmeng:die": "被看穿了吗……",
	"#gz_huanggai:die": "失血……过多了……",
	"#gz_zhouyu:die": "既生瑜，何生……",
	"#liuli1": "交给你了~",
	"#liuli2": "你来嘛~",
	"#gz_daqiao:die": "伯符，我去了……",
	"#duoshi1": "国之大计，审势为先。",
	"#duoshi2": "依今日之大势，当行此计。",
	"#gz_luxun:die": "还以为我已经不再年轻……",
	"#gz_sunshangxiang:die": "不！还不可以死！",
	"#gz_sunjian:die": "有埋伏！呃……啊！！",
	"#gz_xiaoqiao:die": "公瑾，我先走一步……",
	"#gz_re_taishici:die": "无妄之灾，难以避免……",
	"#gz_zhoutai:die": "敌众我寡，无力回天……",
	"#guzheng2": "固国安邦，居当如是！",
	"#gz_zhangzhang:die": "竭力尽智，死而无憾……",
	"#gz_dingfeng:die": "这风，太冷了……",
	"#chulao1": "病入膏肓，需下猛药。",
	"#chulao2": "病去，如抽丝。",
	"#gz_huatuo:die": "医者……不能自医啊……",
	"#gz_lvbu:die": "不可能！",
	"#lijian1": "嗯呵呵~~呵呵~~",
	"#biyue1": "失礼了~",
	"#biyue2": "羡慕吧~",
	"#gz_diaochan:die": "父亲大人，对不起……",
	"#gz_yanwen:die": "这红脸长须大将是……",
	"#gz_jiaxu:die": "我的时辰也到了……",
	"#jianchu1": "休想全身而退！",
	"#jianchu2": "杀到你丢盔弃甲！",
	"#gz_pangde:die": "四面都是水，我命休矣……",
	"#leiji1": "雷公助我！",
	"#leiji2": "以我之真气，合天地之造化！",
	"#guidao1": "哼哼哼哼~",
	"#guidao2": "天下大势，为我所控。",
	"#gz_zhangjiao:die": "黄天，也死了……",
	"#gz_caiwenji:die": "人生几何时，怀忧终年岁……",
	"#gz_mateng:die": "儿子，为爹报仇啊！",
	"#gz_kongrong:die": "覆巢之下，岂有完卵……",
	"#shuangren1": "吃我一记三尖两刃刀！",
	"#gz_jiling:die": "额，将军为何咆哮不断……",
	"#gz_tianfeng:die": "不纳吾言而反诛吾心，奈何奈何！！",
	"#kuangfu1": "这家伙还是给我用吧！",
	"#kuangfu2": "吾乃上将潘凤，可斩华雄！",
	"#gz_panfeng:die": "潘凤又被华雄斩啦……",
	"#huoshui1": "别走了，再玩一会儿嘛。",
	"#huoshui2": "走不动了嘛？",
	"#qingcheng1": "我和你们真是投缘啊。",
	"#qingcheng2": "哼，眼睛都直了呀。",
	"#gz_zoushi:die": "年老色衰了吗？",
	"#tuntian_gz_dengai1": "积谷于此，以制四方。",
	"#tuntian_gz_dengai2": "留得良田在，何愁不破敌？",
	"#ziliang1": "吃饱了，才有力气为国效力。",
	"#ziliang2": "兵，断不可无粮啊。",
	"#jixi_gz_dengai1": "哪里走！！",
	"#jixi_gz_dengai2": "谁占到先机，谁就胜了。",
	"#gz_dengai:die": "君不知臣，臣不知君，罢了……罢了……",
	"#gz_caohong:die": "福兮祸所伏……",
	"#gz_jiangfei:die": "墨守成规，终为其害啊……",
	"#tiaoxin_gz_jiangwei1": "小小娃娃，乳臭未干。",
	"#tiaoxin_gz_jiangwei2": "快滚回去，叫你主将出来！",
	"#yizhi1": "天文地理，丞相所教，维铭记于心。",
	"#yizhi2": "哪怕只有一线生机，我也不会放弃！",
	"#tianfu1": "丞相已教我识得此计！",
	"#tianfu2": "哼，有破绽！",
	"#gz_jiangwei:die": "我计不成，乃天命也……",
	"#yicheng1": "不怕死，就尽管放马过来！",
	"#yicheng2": "待末将布下疑城，以退曹贼。",
	"#gz_xusheng:die": "可怜一身胆略，尽随一抔黄土……",
	"#gz_hetaihou:die": "你们男人造的孽，非要说什么红颜祸水……",
	"#gz_zangba:die": "短刃沉江，负主重托……",
	"#gz_madai:die": "反骨贼已除，丞相放心……",
	"#gz_mifuren:die": "阿斗被救，妾身再无牵挂……",
	"#yingyang1": "此战，我必取胜！",
	"#yingyang2": "相斗之趣，吾常胜之。",
	"#yinghun_sunce1": "父亲，助我背水一战！",
	"#yinghun_sunce2": "孙氏英烈，庇佑江东！",
	"#gz_sunce:die": "内事不决问张昭，外事不决问周瑜……",
	"#gz_chendong:die": "杀身为主，死而无憾……",
	"#baoling1": "待吾大开杀戒，哈哈哈哈！",
	"#baoling2": "大丈夫，岂能妇人之仁？",
	"#gz_zhangren:die": "老臣，绝不事二主！",
	"#zhangwu1": "遁剑归一，有凤来仪。",
	"#zhangwu2": "剑气化龙，听朕雷动！",
	"#jizhao1": "仇未报，汉未兴，朕志犹在！",
	"#jizhao2": "王业不偏安，起师再兴汉！",
	"#rerende_gz_jun_liubei1": "勿以恶小而为之，勿以善小而不为。",
	"#rerende_gz_jun_liubei2": "君才十倍于丕，必能安国成事。",
	"#shouyue": "布德而昭仁，见旗如见朕！",
	"#shouyue_wusheng1": "关将军雄姿，由你再现！",
	"#shouyue_wusheng2": "再次威震华雄，必成汉兴佳话！",
	"#shouyue_paoxiao1": "杀！把他捅成马蜂窝！",
	"#shouyue_paoxiao2": "昔日长坂坡，今日再咆哮！",
	"#shouyue_longdan1": "请收好，此乃子龙枪法。",
	"#shouyue_longdan2": "子龙将助你一臂之力。",
	"#shouyue_tieji1": "西凉的马蹄声，真好听。",
	"#shouyue_tieji2": "马家军风采何在？！",
	"#shouyue_liegong1": "当年老将军冲锋，也是这时机。",
	"#shouyue_liegong2": "百步穿杨，立功拜将！",
	"#gz_jun_liubei:die": "若嗣子可辅，辅之；如其不才，君可自取……",
	"#wuxin1": "冀悟迷惑之心。",
	"#wuxin2": "吾已明此救世之术矣。",
	"#hongfa1": "苍天已死，黄天当立！",
	"#hongfa2": "汝等安心，吾乃大贤良师也。",
	"#hongfa3": "此法可助汝等脱离苦海。",
	"#huangjintianbingfu1": "此乃天将天兵，尔等妖孽看着！",
	"#huangjintianbingfu2": "且作一法，召唤神力！",
	"#huangjintianbingfu3": "吾有天神护体！",
	"#wendao1": "诚心求天地之道，救世之法。",
	"#wendao2": "求太平之法以安天下。",
	"#gz_jun_zhangjiao:die": "天，真要灭我……",
	"#jiahe": "嘉禾生，大吴兴！",
	"#yuanjiangfenghuotu1": "保卫国家，人人有责！",
	"#yuanjiangfenghuotu2": "连绵的烽火，就是对敌人最好的震慑！",
	"#yuanjiangfenghuotu3": "有敌来犯，速速御敌！",
	"#yuanjiangfenghuotu4": "来，扶孤上马迎敌！",
	"#jiahe_reyingzi1": "大吴江山，儒将辈出。",
	"#jiahe_reyingzi2": "千夫奉儒将，百兽伏麒麟。",
	"#jiahe_haoshi1": "朋友有难，当倾囊相助。",
	"#jiahe_haoshi2": "好东西，就要跟朋友分享。",
	"#jiahe_shelie1": "军中多务，亦当涉猎。",
	"#jiahe_shelie2": "少说话，多看书。",
	"#jiahe_duoshi1": "广施方略，以观其变。",
	"#jiahe_duoshi2": "莫慌，观察好局势再做行动。",
	"#lianzi1": "税以足食，赋以足兵。",
	"#lianzi2": "府库充盈，国家方能强盛！",
	"#zhiheng_gz_jun_sunquan1": "二宫并阙，孤之所愿。",
	"#zhiheng_gz_jun_sunquan2": "鲁王才兼文武，堪比太子。",
	"#jubao1": "四海之宝，孤之所爱。",
	"#jubao2": "夷洲，扶南，辽东，皆大吴臣邦也！",
	"#gz_jun_sunquan:die": "朕的江山，要倒下了么……",
	"#gz_liqueguosi:die": "文和之言，诚不欺我……",
	"#yigui1": "百鬼众魅，自缚见形。",
	"#yigui2": "来去无踪，众谓诡异。",
	"#jihun1": "魂聚则生，魂散则弃。",
	"#jihun2": "魂羽化游，以辅四方。",
	"#gz_zuoci:die": "腾云跨风，飞升太虚……",
	"#gz_bianfuren:die": "心肝涂地，惊愕断绝……",
	"#gz_xunyou:die": "主公，臣下先行告退……",
	"#xuanlve1": "强兵破阵，斩将于须臾。",
	"#xuanlve2": "轻装急袭，破敌于千里。",
	"#yongjin1": "冲啊，扬我东吴之勇！",
	"#yongjin2": "东吴虎威，岂是尔等可犯！",
	"#gz_lingtong:die": "大丈夫不惧死亡……",
	"#gz_lvfan:die": "闻主公欲授大司马之职，容臣不能……谢恩了……",
	"#gz_shamoke:die": "五溪蛮夷，不可能输！",
	"#gz_lingcao:die": "呃啊！（扑通）此箭……何来……",
	"#gz_lifeng:die": "吾，有负丞相重托……",
	"#gz_beimihu:die": "我还会从黄泉比良坂回来的……",
	"#gz_jianggan:die": "丞相，再给我一次机会啊！",
	"#gz_huaxin:die": "大举发兵，劳民伤国……",
	"#gz_luyusheng:die": "父亲，郁生甚是想念……",
	"#gz_zongyu:die": "吾年逾七十，唯少一死耳……",
	"#gzkuangcai1": "耳所瞥闻，不忘于心。",
	"#gzkuangcai2": "吾焉能从屠沽儿耶？",
	"#gzshejian1": "伤人的，可不止刀剑！",
	"#gzshejian2": "死公！云等道？",
	"#gz_miheng:die": "恶口……终至杀身……",
	"#gz_fengxi:die": "乡音未改双鬓苍，身陷北国有义求……",
	"#gzjianliang1": "岂曰少衣食，与君共袍泽！",
	"#gzjianliang2": "义士同心力，粮秣应期来！",
	"#gzweimeng1": "此礼献于友邦，共赴兴汉大业！",
	"#gzweimeng2": "吴有三江之守，何故委身侍魏？",
	"#gz_dengzhi:die": "伯约啊，我帮不了你了……",
	"#gzduannian1": "断思量，莫思量。",
	"#gzduannian2": "一别两宽，不负相思。",
	"#gzlianyou1": "莲花佑兴，业火可兴。",
	"#gzlianyou2": "昔日莲花开，今日红火燃。",
	"#gz_zhouyi:die": "江水寒，萧瑟起……",
	"#anyong2": "冀州暗潮汹涌，群仕居危思变。",
	"#gz_lvlingqi:die": "父亲，女儿好累……",
	"#gz_dc_yanghu:die": "臣死之后，杜元凯可继之……",
	"#gz_cuimao:die": "为世所痛惜，冤哉……",
	"#jianglue1": "奇谋为短，将略为要。",
	"#jianglue2": "为将者，需有谋略。",
	"#gz_wangping:die": "无当飞军，也有困于深林之时……",
	"#fz_wusheng": "武节不减，圣德加身。",
	"#fz_new_paoxiao": "刚勇奋战，绝不退缩！",
	"#fz_new_longdan": "盘龙卧旋，攻防无解。",
	"#fz_new_tieji": "战骑铁甲，撼动踏阵。",
	"#fz_liegong": "挽弓箭出，流火漫天。",
	"#fz_xinkuanggu": "猎战沙场，我的乐趣。",
	"#gz_wuguotai:die": "卿等，务必用心辅佐仲谋……",
	"#keshou1": "仁以待民，自处不败之势。",
	"#keshou2": "宽济百姓，则得战前养备之机。",
	"#gz_lukang:die": "抗仅以君子之交待叔子，未有半分背国之念啊！",
	"#gz_yuanshu:die": "可恶！就差……一步了……",
	"#gzfudi1": "弃暗投明，为明公计！",
	"#gzfudi2": "绣虽有降心，奈何贵营难容。",
	"#drlt_congjian1": "听君谏言，去危亡，保宗祀！",
	"#gz_zhangxiu:die": "若失文和，吾将何归？",
	"#jianan": "设使天下无孤，不知几人称帝，几人称王？",
	"#wuziliangjiangdao1": "行为军锋，还为后拒！",
	"#wuziliangjiangdao2": "国之良将，五子为先。",
	"#jianan_tuxi": "以百破万，让孤再看一次！",
	"#jianan_qiaobian": "孤之兵道，此一时，彼一时。",
	"#jianan_xiaoguo": "使孤梦回辽东者，卿之雄风也！",
	"#jianan_jieyue": "孤之股肱，谁敢不从？嗯？",
	"#jianan_duanliang": "孤以为断粮如断肠，卿意下如何？",
	"#huibian1": "吾任天下之智力，以道御之，无所不可。",
	"#huibian2": "青青子衿，悠悠我心。但为君故，沉吟至今。",
	"#gzzongyu1": "驾六龙，乘风而行。行四海，路下之八邦。",
	"#gzzongyu2": "齐桓之功，为霸之首。九合诸侯，一匡天下！",//配音错误？，应为：齐桓之功，为霸之道
	"#gz_jun_caocao:die": "神龟虽寿，犹有竟时。腾蛇乘雾，终为土灰……",
	"#sanchen1": "陈书弼国，当一而再、再而三。",
	"#gz_duyu:die": "金瓯尚缺，死难瞑目……",
	"#gz_zhanghuyuechen:die": "儿有辱……父亲威名……",
	"#gz_simazhou:die": "恩赐重物，病身难消受……",
	"#gz_shibao:die": "寒门出身，难以擢升……",
	"#gz_weiguan:die": "辞荣善终，不可求……",
	"#gz_zhongyan:die": "嗟尔姜任，邈不我留……",
	"#gz_yangyan:die": "一旦殂损，痛悼伤怀……",
	"#gz_zuofen:die": "惨怆愁悲……",
	"#gz_xuangongzhu:die": "元凯，我去也……",
	"#gz_xinchang:die": "宪英，救我！",
	"#gz_yangzhi:die": "贾氏……构陷……",
	"#gz_liaohua:die": "今后，就靠你们啦……",
	"#mingzhe2": "塞翁失马，焉知非福？",
	"#gz_zhugejin:die": "君臣不相负，来世复君臣……",
	"#gz_yangxiu:die": "我固自以死之晚也……",
	"#gz_zumao:die": "孙将军，已经，安全了吧……",
	"#gz_fuwan:die": "后会有期……",
	"#gz_chendao:die": "我的白毦兵，再也不能为先帝出力了……",
	"#twzhenxi2": "震疆扫寇，袭贼平戎！",
	"#gz_guohuai:die": "姜维小儿，竟然……",
	"#gz_guanqiujian:die": "峥嵘一生，然被平民所击射！",
	"#gz_zhujun:die": "乞降不受，愿一战！",
	"#gz_chengong:die": "请出就戮！",
	"#gz_yangwan:die": "遇人不淑……",
	"#gz_wangling:die": "一生尽忠事魏，不料，今日晚节尽毁啊！",
	"#gz_yanyan:die": "宁可断头死，安能屈膝降！",
	"#mobiledanshou1": "此诚危难，我定当竭尽全力！",
	"#gz_gaoshun:die": "生死有命……",
	"#weishu2": "吴人来犯，当用心戒备。",
	
	// boss
	"#boss_lvbu1:die": "虎牢关，失守了……",
	"#xiuluo1": "准备受死吧！",
	"#xiuluo2": "鼠辈！螳臂当车！",
	"#shenwei1": "萤烛之火，也敢与日月争辉？",
	"#shenwei2": "我不会输给任何人！",
	"#shenji1": "杂鱼们！都去死吧！",
	"#shenji2": "竟想赢我？痴人说梦！",
	"#boss_lvbu2:die": "虎牢关，失守了……",
	"#shenqu1": "别心怀侥幸了，你们不可能赢！",
	"#shenqu2": "虎牢关，我一人镇守足矣！",
	"#jiwu1": "我，是不可战胜的！",
	"#jiwu2": "今天，就让你们感受一下真正的绝望！",
	"#qiangxi_boss_lvbu31": "这么想死，那我就成全你！",
	"#qiangxi_boss_lvbu32": "项上人头，待我来取！",
	"#retieji_boss_lvbu31": "哈哈哈，破绽百出！",
	"#retieji_boss_lvbu32": "我要让这虎牢关下，血流成河！",
	"#xuanfeng_boss_lvbu31": "千钧之势，力贯苍穹！",
	"#xuanfeng_boss_lvbu32": "横扫六合，威震八荒！",
	"#wansha_boss_lvbu31": "蝼蚁，怎容偷生？",
	"#wansha_boss_lvbu32": "沉沦吧，在这无边的恐惧！",
	"#boss_lvbu3:die": "你们的项上人头，我改日再取！",
/*--------------------------------台词因名将吴懿而更新，所以都放这里很合理吧（结束）--------------------------------*/
		},
		perfectPair: {
/*------------------------------------------// 临时修改（by 棘手怀念摧毁）------------------------------------------*/
/*--------------------------------有一就有二，所以character/perfectPairs.js都放这里很合理吧（开始）--------------------------------*/
	bailingyun: ["jin_simayi", "new_jin_simayi"],
	bulianshi: ["sunquan"],
	caifuren: ["liubiao"],
	caoang: ["caocao"],
	caocao: ["xuzhu", "re_xuzhu", "dianwei", "bianfuren"],
	re_caocao: ["caoang", "caoying", "xuzhu", "re_xuzhu", "dianwei", "bianfuren", "cuiyan"],
	caohong: ["caoren"],
	caopi: ["zhenji", "cuimao", "luzhi"],
	caoying: ["caocao", "caopi"],
	caozhi: ["zhenji"],
	chengong: ["lvbu"],
	chengpu: ["zhouyu"],
	cuiyan: ["caocao"],
	daqiao: ["xiaoqiao"],
	daxiaoqiao: ["zhouyu", "sunce"],
	dingfeng: ["xusheng", "re_xusheng", "zhugeke"],
	dongzhuo: ["liru", "dongbai", "xurong"],
	fuhuanghou: ["liuxie"],
	fuwan: ["fuhuanghou"],
	gaolan: ["yj_zhanghe"],
	ganning: ["lingtong", "xf_sufei"],
	guanping: ["guanyu"],
	guanqiujian: ["wenqin"],
	guansuo: ["guanyu"],
	guanyinping: ["guanyu"],
	guanyu: ["zhangfei", "liaohua", "guanyinping"],
	huangzhong: ["weiyan", "pot_weiyan", "ol_weiyan"],
	jiangqing: ["zhoutai"],
	jiangwei: ["xiahouba"],
	jiaxu: ["liqueguosi"],
	jin_guohuai: ["jin_jiachong"],
	jin_simashi: ["jin_xiahouhui", "jin_yanghuiyu"],
	jin_simayi: ["jin_zhangchunhua", "shibao", "new_jin_zhangchunhua"],
	jin_simazhao: ["jin_wangyuanji"],
	jin_yanghu: ["duyu"],
	key_ao: ["key_inari"],
	key_chihaya: ["key_sakuya"],
	key_doruji: ["key_rin"],
	key_hinata: ["key_yui"],
	key_iwasawa: ["key_hisako"],
	key_jojiro: ["key_yusa"],
	key_kaori: ["key_shiori"],
	key_komari: ["key_rin", "key_sasami"],
	key_kud: ["key_harukakanata"],
	key_lucia: ["key_shizuru"],
	key_masato: ["key_kengo"],
	key_riki: ["key_rin", "key_saya", "key_kyousuke", "key_kud"],
	key_shiroha: ["key_umi"],
	key_shizuku: ["key_tsumugi"],
	key_tomoya: ["key_nagisa", "key_sunohara", "key_kotomi"],
	key_yuiko: ["key_harukakanata"],
	key_yuri: ["key_kanade", "key_abyusa"],
	key_yuu: ["key_nao"],
	key_yuzuru: ["key_hinata", "key_kanade", "key_ayato"],
	lijue: ["guosi", "jiaxu"],
	lingcao: ["lingtong"],
	lingju: ["diaochan", "lvbu", "re_lvbu"],
	lingtong: ["ganning"],
	liubei: ["guanyu", "zhangfei", "ganfuren", "fazheng"],
	liuchen: ["liushan"],
	lukang: ["luxun", "re_luxun"],
	lvbu: ["diaochan", "lvlingqi"],
	re_lvbu: ["diaochan", "lvlingqi"],
	machao: ["madai", "mayunlu", "yangwan"],
	maliang: ["masu"],
	mateng: ["machao", "madai", "mayunlu"],
	menghuo: ["zhurong"],
	nanhualaoxian: ["zuoci", "yuji"],
	new_jin_simayi: ["jin_zhangchunhua", "shibao", "new_jin_zhangchunhua"],
	pangtong: ["zhugejin"],
	re_guohuai: ["xiahouyuan", "zhanghe"],
	re_nanhualaoxian: ["zuoci", "yuji"],
	re_xushu: ["zhaoyun", "sp_zhugeliang"],
	re_yuanshao: ["yanwen", "ol_yanwen", "tianfeng", "yanliang", "wenchou"],
	simahui: ["pangdegong"],
	simazhao: ["wangyuanji", "simayi"],
	sp_zhugeliang: ["pangtong", "huangyueying", "re_huangyueying"],
	sunben: ["zhouyu", "taishici", "re_taishici", "daqiao"],
	sunce: ["zhouyu", "taishici", "re_taishici", "daqiao"],
	sundeng: ["sunquan", "zhoufei"],
	sunluban: ["quancong"],
	sunquan: ["zhoutai"],
	sunshangxiang: ["liubei"],
	sunxiù: ["simalun"],
	taishici: ["liuyao", "kongrong"],
	tw_liufuren: ["yuanshao"],
	tw_xiahoushang: ["caopi"],
	wangping: ["jiangfei"],
	wuguotai: ["sunjian", "ol_sb_sunjian", "sunshangxiang"],
	wujing: ["sunce", "sunben", "wuguotai"],
	xf_sufei: ["ganning"],
	xiahoudun: ["xiahouyuan", "yujin"],
	xiahoushi: ["zhangfei"],
	xuangongzhu: ["duyu"],
	xugong: ["yanbaihu"],
	xunyou: ["xunyu"],
	//xushu: ["liubei"],
	yuanshu: ["jiling"],
	yl_yuanshu: ["jiling"],
	yuejin: ["re_lidian"],
	yuji: ["zuoci"],
	zhangbao: ["zhangliang", "zhangjiao", "re_zhangjiao"],
	zhangchunhua: ["simayi"],
	zhangji: ["zhangxiu", "zoushi"],
	zhangliang: ["zhangjiao", "re_zhangjiao"],
	zhangliao: ["zangba"],
	zhangqiying: ["zhanglu"],
	zhangxingcai: ["liushan"],
	zhangxiu: ["jiaxu"],
	zhangxuan: ["zhangyao"],
	zhaoyun: ["liushan"],
	zhonghui: ["jiangwei"],
	ol_zhonghui: ["jiangwei"],
	zhoucang: ["guanyu"],
	zhouyu: ["huanggai", "re_huanggai", "xiaoqiao", "zhouyi"],
	zhugejin: ["zhugeke", "sunquan"],
	zhugeliang: ["jiangwei", "jiangfei", "huangyueying", "re_huangyueying"],
	zuoci: ["yuji"],
/*--------------------------------有一就有二，所以character/perfectPairs.js都放这里很合理吧（结束）--------------------------------*/
		},
		characterReplace: {
/*------------------------------------------// 临时修改（by 棘手怀念摧毁）------------------------------------------*/
/*--------------------------------有二就有三，所以character/replace.js都放这里很合理吧（开始）--------------------------------*/
	// 临时修改（by 棘手怀念摧毁）
	shen_huangzhong: ["shen_huangzhong", "old_shen_huangzhong"],
	
	//大致按照OL，新杀，手杀，外服，线下，DIY，怀旧的顺序排列。（同服按标，界，谋，sp）
	key_yuri: ["key_yuri", "sp_key_yuri"],
	sp_key_kanade: ["sp_key_kanade", "kanade"],
	shen_caocao: ["shen_caocao", "old_caocao", "ca_shen_caocao"],
	shen_guanyu: ["shen_guanyu", "tw_shen_guanyu", "ty_shen_guanyu"],
	shen_huatuo: ["dc_shen_huatuo", "shen_huatuo"],
	shen_jiaxu: ["le_shen_jiaxu", "shen_jiaxu", "zombie_jiaxu"],
	shen_liubei: ["shen_liubei", "ty_shen_liubei"],
	shen_lvmeng: ["shen_lvmeng", "tw_shen_lvmeng"],
	shen_machao: ["shen_machao", "ps_shen_machao", "wn_shen_machao", "mark_shen_machao"],
	shen_simayi: ["shen_simayi", "xin_simayi", "new_simayi"],
	shen_sunquan: ["shen_sunquan", "junk_sunquan", "dc_shen_sunquan"],
	shen_xuzhu: ["shen_xuzhu", "wn_shen_xuzhu"],
	shen_zhangfei: ["shen_zhangfei", "ty_shen_zhangfei"],
	shen_zhangliao: ["ol_zhangliao", "shen_zhangliao"],
	shen_zhangjiao: ["junk_zhangjiao", "shen_zhangjiao", "hm_shen_zhangjiao"],
	shen_zhaoyun: ["shen_zhaoyun", "dc_zhaoyun", "boss_zhaoyun", "old_shen_zhaoyun"],
	baosanniang: ["baosanniang", "xin_baosanniang", "re_baosanniang", "std_baosanniang", "sy_baosanniang", "fx_baosanniang"],
	baoxin: ["baoxin", "tw_baoxin", "std_baoxin"],
	beimihu: ["beimihu", "tw_beimihu"],
	bulianshi: ["bulianshi", "dc_bulianshi", "re_bulianshi", "old_bulianshi"],
	buzhi: ["buzhi", "ty_buzhi"],
	caifuren: ["caifuren", "ol_caifuren", "re_caifuren", "xin_caifuren"],
	caimao: ["caimao", "ns_caimao"],
	caiwenji: ["caiwenji", "sp_caiwenji", "ol_caiwenji", "re_caiwenji", "yue_caiwenji"],
	caiyong: ["caiyong", "re_caiyong", "yue_caiyong"],
	caizhenji: ["caizhenji", "ol_caizhenji"],
	caoang: ["caoang", "dc_sb_caoang", "tw_caoang", "huan_caoang", "yj_caoang"],
	caoanmin: ["caoanmin", "ns_caoanmin"],
	caocao: ["caocao", "re_caocao", "sp_ol_caocao", "ol_jsrg_caocao", "dc_caocao", "sb_caocao", "mb_caocao", "tw_jsrg_caocao", "jsrg_caocao", "jd_sb_caocao", "yj_caocao", "ns_caocao", "ns_caocaosp", "jy_caocao", "ps_caocao", "sxrm_caocao", "wn_caocao", "pe_jun_caocao", "xy_caocao", "v_caocao", "wxdl_caocao", "dm_caocao"],
	caochong: ["caochong", "ol_caochong", "re_caochong", "huan_caochong", "old_caochong", "strong_caochong"],
	caochun: ["caochun", "dc_caochun", "old_caochun"],
	caofang: ["caofang", "jsrg_caofang"],
	caohong: ["caohong", "dc_sb_caohong", "tw_re_caohong", "tw_caohong", "yj_caohong", "mb_caohong"],
	caomao: ["caomao", "mb_caomao"],
	caopi: ["caopi", "v_caopi", "re_caopi", "sb_caopi", "tw_sb_caopi", "huan_caopi", "ps_caopi", "sxrm_caopi", "pe_jun_caopi", "xia_caopi"],
	caoren: ["caoren", "old_caoren", "sp_caoren", "star_caoren", "sb_caoren", "jsp_caoren", "drag_caoren", "new_caoren", "jy_caoren"],
	caorui: ["caorui", "re_caorui", "std_caorui", "yy_caorui", "old_caorui"],
	caoshuang: ["caoshuang", "dc_caoshuang", "ns_caoshuang"],
	caosong: ["caosong", "sp_caosong", "xy_caosong"],
	caoxiu: ["caoxiu", "re_caoxiu", "xin_caoxiu", "tw_caoxiu", "old_caoxiu"],
	caoxing: ["caoxing", "mb_caoxing"],
	caoying: ["caoying", "scl_caoying"],
	caozhang: ["caozhang", "ol_caozhang", "re_caozhang", "xin_caozhang"],
	caozhen: ["caozhen", "re_caozhen", "xin_caozhen", "old_caozhen", "std_caozhen"],
	caozhi: ["caozhi", "ol_caozhi", "dc_caozhi", "re_caozhi", "huan_caozhi", "ps_caozhi"],
	cenhun: ["cenhun", "shi_cenhun", "std_cenhun"],
	chendao: ["chendao", "pot_chendao", "ns_chendao", "old_chendao"],
	chendeng: ["chendeng", "ol_chendeng", "re_chendeng", "jsrg_chendeng"],
	chendong: ["chendong", "sp_chendong", "tw_chendong"],
	chengong: ["chengong", "re_chengong", "sb_chengong", "xy_chengong"],
	chengpu: ["chengpu", "ol_chengpu", "xin_chengpu", "re_chengpu", "tw_chengpu", "std_chengpu", "ns_chengpu"],
	chengui: ["chengui", "mb_chengui"],
	chengyu: ["chengyu", "dc_sb_chengyu", "std_chengyu", "xy_chengyu"],
	chenjiao: ["chenjiao", "pot_chenjiao"],
	chenlin: ["chenlin", "dc_sb_chenlin"],
	chenqun: ["chenqun", "dc_chenqun", "re_chenqun", "old_chenqun"],
	chenshi: ["chenshi", "ty_chenshi"],
	cuilingyi: ["cuilingyi", "mb_cuilingyi"],
	cuiyan: ["cuiyan", "sp_cuiyan"],
	chunyuqiong: ["chunyuqiong", "re_chunyuqiong", "jsrg_chunyuqiong"],
	daqiao: ["daqiao", "re_daqiao", "yue_daqiao", "sb_daqiao", "jd_sb_daqiao", "sp_daqiao"],
	daxiaoqiao: ["daxiaoqiao", "dc_daxiaoqiao", "tw_daxiaoqiao"],
	dengai: ["dengai", "ol_dengai", "ol_sb_dengai", "re_dengai", "jsrg_dengai", "ren_dengai", "dc_sb_dengai", "bigsb_dengai", "pot_dengai"],
	dengzhi: ["ol_dengzhi", "re_dengzhi", "dengzhi", "tw_dengzhi", "std_re_dengzhi"],
	dianwei: ["dianwei", "ol_dianwei", "dc_sb_dianwei", "re_dianwei", "xia_dianwei", "huan_dianwei"],
	diaochan: ["diaochan", "re_diaochan", "sp_diaochan", "dm_diaochan", "yue_diaochan", "sb_diaochan"],
	dingfeng: ["dingfeng", "star_dingfeng", "tw_dingfeng", "std_dingfeng", "old_dingfeng", "zj_dingfeng"],
	dingshangwan: ["dingshangwan", "ol_dingshangwan", "huan_dingshangwan"],
	dingyuan: ["ol_dingyuan", "dingyuan"],
	dongbai: ["dongbai", "re_dongbai", "jsrg_dongbai"],
	dongcheng: ["re_dongcheng", "dc_sb_dongcheng", "dongcheng"],
	dongwan: ["dongwan", "shinin_dongwan"],
	dongxie: ["ol_dongxie", "dongxie"],
	dongzhuo: ["dongzhuo", "ol_dongzhuo", "ol_sb_dongzhuo", "star_dongzhuo", "v_dongzhuo", "re_dongzhuo", "new_yj_dongzhuo", "jsrg_dongzhuo", "sp_dongzhuo", "yj_dongzhuo"],
	duanwei: ["duanwei", "junk_duanwei"],
	duji: ["duji", "re_duji", "ns_duji"],
	duyu: ["duyu", "dc_duyu", "sp_duyu", "pk_sp_duyu"],
	fanchou: ["fanchou", "tw_fanchou", "ns_fanchou", "ca_fanchou"],
	fanjiangzhangda: ["fanjiangzhangda", "jsrg_fanjiangzhangda"],
	fanyufeng: ["fanyufeng", "std_fanyufeng"],
	fazheng: ["xin_fazheng", "ol_fazheng", "re_fazheng", "star_fazheng", "sb_fazheng", "tw_re_fazheng", "fazheng", "jd_sb_fazheng", "yj_fazheng"],
	feiyi: ["ol_feiyi", "feiyi", "tw_feiyi", "std_feiyi"],
	fengfangnv: ["fengfangnv", "re_fengfangnv"],
	fuhuanghou: ["fuhuanghou", "ol_fuhuanghou", "re_fuhuanghou", "xin_fuhuanghou", "tw_fuhuanghou", "std_fuhuanghou", "sp_fuhuanghou", "old_fuhuanghou", "sxrm_fuhuanghou"],
	furong: ["ol_furong", "furong", "tw_furong"],
	fuwan: ["fuwan", "tw_fuwan", "sp_fuwan"],
	ganfuren: ["ganfuren", "dc_ganfuren", "mb_ganfuren", "jsp_ganfuren"],
	ganning: ["ganning", "re_ganning", "sb_ganning", "yj_ganning", "yongjian_ganning", "jd_sb_ganning", "sp_ganning", "ty_ganning"],
	gaolan: ["gaolan", "dc_gaolan", "sp_gaolan"],
	gaoshun: ["gaoshun", "ol_gaoshun", "xin_gaoshun", "re_gaoshun", "sb_gaoshun", "old_gaoshun"],
	gaoxiang: ["gaoxiang", "jsrg_gaoxiang"],
	gexuan: ["gexuan", "tw_gexuan"],
	goblin: ["goblin", "lord_goblin"],
	gongsunyuan: ["gongsunyuan", "re_gongsunyuan", "std_gongsunyuan", "yy_gongsunyuan"],
	gongsunzan: ["gongsunzan", "re_gongsunzan", "ol_sb_gongsunzan", "dc_gongsunzan", "xin_gongsunzan", "sb_gongsunzan", "sp_gongsunzan", "yy_gongsunzan"],
	guanlu: ["guanlu", "ns_guanlu"],
	guanping: ["guanping", "re_guanping", "dc_sb_guanping", "drag_guanping"],
	guanqiujian: ["guanqiujian", "re_guanqiujian", "mb_sp_guanqiujian", "tw_guanqiujian", "old_guanqiujian"],
	guansuo: ["guansuo", "dc_guansuo", "std_guansuo", "drag_guansuo"],
	guanyinping: ["guanyinping", "mb_guanyinping", "old_guanyinping", "ty_guanyinping", "drag_guanyinping", "sxrm_guanyinping"],
	guanyu: ["guanyu", "re_guanyu", "jsp_guanyu", "ol_sb_guanyu", "wu_guanyu", "dc_jsp_guanyu", "sb_guanyu", "tw_jsp_guanyu", "xia_guanyu", "jsrg_guanyu", "jd_sb_guanyu", "drag_guanyu", "ty_guanyu", "jx_guanyu", "ps_guanyu", "old_guanyu", "junk_guanyu", "sxrm_guanyu"],
	guanzhang: ["guanzhang", "ol_guanzhang", "re_guanzhang", "old_guanzhang"],
	guohuai: ["guohuai", "re_guohuai", "ol_guohuai", "xin_guohuai", "sb_guohuai", "tw_guohuai"],
	guohuanghou: ["guohuanghou", "ol_guohuanghou", "re_guohuanghou", "std_guohuanghou", "ol_guohuanghou", "pl_sb_guojia"],
	guojia: ["guojia", "re_guojia", "yj_sb_guojia", "sb_guojia", "jsrg_guojia", "ps1059_guojia", "ps2070_guojia", "ol_sb_guojia"],
	guosi: ["guosi", "ca_guosi"],
	guotufengji: ["guotufengji", "re_guotufengji"],
	guozhao: ["ol_guozhao", "guozhao", "xin_guozhao", "jsrg_guozhao", "std_guozhao", "pe_guozhao"],
	guyong: ["guyong", "re_guyong", "xin_guyong", "tw_guyong"],
	yj_hanbing: ["yj_hanbing", "two_yj_hanbing"],
	handang: ["handang", "xin_handang", "re_handang", "sb_handang", "tw_handang", "old_handang"],
	hanfu: ["hanfu", "ol_hanfu", "clan_hanfu"],
	hanhaoshihuan: ["hanhaoshihuan", "re_hanhaoshihuan"],
	hanlong: ["hanlong", "jd_hanlong"],
	hansui: ["hansui", "re_hansui", "xin_hansui", "jsrg_hansui", "wn_hansui"],
	haomeng: ["haomeng", "tw_haomeng"],
	hejin: ["hejin", "re_hejin", "tw_hejin", "tw_jsrg_hejin", "jsrg_hejin"],
	heqi: ["re_heqi", "heqi"],
	huaman: ["huaman", "sp_huaman"],
	huangchengyan: ["huangchengyan", "dc_huangchengyan", "ns_huangchengyan"],
	std_huangchong: ["std_huangchong", "zj_huangchong"],
	huangfusong: ["huangfusong", "wu_huangfusong", "sp_huangfusong", "tw_jsrg_huangfusong", "jsrg_huangfusong", "std_huangfusong", "old_huangfusong"],
	huanggai: ["huanggai", "re_huanggai", "dc_sb_huanggai", "sb_huanggai", "huan_huanggai", "jy_huanggai"],
	huanghao: ["huanghao", "dc_huanghao", "old_huanghao"],
	huangyueying: ["huangyueying", "re_huangyueying", "jsp_huangyueying", "ol_sb_huangyueying", "re_jsp_huangyueying", "sb_huangyueying", "jd_sb_huangyueying", "junk_huangyueying"],
	huangzhong: ["re_huangzhong", "ol_huangzhong", "sb_huangzhong", "yj_huangzhong", "jsrg_huangzhong", "ty_huangzhong", "huangzhong"],
	huangzu: ["huangzu", "dc_huangzu", "mb_huangzu", "ns_huangzu"],
	huatuo: ["huatuo", "re_huatuo", "old_huatuo", "sxrm_huatuo"],
	huaxin: ["ol_huaxin", "huaxin", "sp_huaxin", "std_huaxin", "jd_ol_huaxin"],
	huaxiong: ["huaxiong", "re_huaxiong", "ol_huaxiong", "ol_sb_huaxiong", "sb_huaxiong", "old_huaxiong"],
	hucheer: ["re_hucheer", "dc_sb_hucheer", "hucheer", "tw_hucheer"],
	hujinding: ["ol_hujinding", "hujinding", "dc_hujinding"],
	huojun: ["huojun", "dc_huojun", "xin_huojun", "tw_huojun"],
	jiachong: ["jin_jiachong", "dc_jiachong", "mb_jiachong", "jiachong"],
	jiakui: ["jiakui", "old_jiakui", "std_jiakui"],
	jianggan: ["jianggan", "sp_jianggan", "std_jianggan", "sxrm_jianggan"],
	jiangji: ["dc_jiangji", "tw_jiangji", "jiangji"],
	jiangqing: ["dc_jiangqing", "sp_jiangqing", "tw_jiangqing", "jiangqing"],
	jiangwei: ["jiangwei", "ol_jiangwei", "re_jiangwei", "ol_sb_jiangwei", "sp_jiangwei", "dc_sb_jiangwei", "sb_jiangwei", "huan_jiangwei", "jsrg_jiangwei", "jd_sb_jiangwei", "ren_jiangwei", "zj_jiangwei"],
	jianyong: ["jianyong", "ol_jianyong", "re_jianyong", "xin_jianyong"],
	jiaxu: ["jiaxu", "re_jiaxu", "sp_jiaxu", "ol_sb_jiaxu", "dc_sb_jiaxu", "dc_sp_jiaxu", "sb_jiaxu", "yj_jiaxu", "ps_jiaxu", "ns_jiaxu", "wn_jiaxu", "zc26_jiaxu", "scl_jiaxu"],
	jikang: ["jikang", "re_jikang", "dc_jikang"],
	jiling: ["jiling", "dc_jiling", "tw_jiling", "std_jiling", "yj_jiling"],
	kanze: ["kanze", "re_kanze"],
	kebineng: ["kebineng", "ol_kebineng"],
	kongrong: ["ol_sb_kongrong", "dc_kongrong", "sp_kongrong", "jsrg_kongrong", "kongrong", "std_kongrong"],
	liaohua: ["liaohua", "ol_liaohua", "xin_liaohua", "re_liaohua", "ty_liaohua", "drag_liaohua", "zj_liaohua"],
	lifeng: ["ol_lifeng", "dc_lifeng", "lifeng"],
	lijue: ["lijue", "std_lijue", "ns_lijue", "ca_lijue"],
	lingcao: ["lingcao", "dc_lingcao"],
	lingju: ["lingju", "old_lingju"],
	lingtong: ["lingtong", "ol_lingtong", "re_lingtong", "xin_lingtong", "old_lingtong"],
	liru: ["xin_liru", "ol_liru", "dc_liru", "re_liru", "std_liru", "yj_liru", "liru", "wild_liru"],
	lisu: ["ol_lisu", "lisu"],
	liuba: ["ol_liuba", "dc_liuba", "liuba", "std_liuba"],
	liubei: ["liubei", "re_liubei", "sp_ol_liubei", "dc_liubei", "sb_liubei", "xia_liubei", "jsrg_liubei", "jd_sb_liubei", "ty_liubei", "sp_liubei", "jsp_liubei", "junk_liubei", "ps_liubei", "sxrm_liubei", "pe_jun_liubei"],
	liubiao: ["liubiao", "ol_liubiao", "xin_liubiao", "re_liubiao", "sb_liubiao", "jsrg_liubiao", "std_liubiao", "old_liubiao", "oldre_liubiao"],
	liuchen: ["liuchen", "re_liuchen", "std_liuchen"],
	liufeng: ["liufeng", "re_liufeng", "huan_liufeng", "sxrm_liufeng"],
	liuhong: ["liuhong", "ol_jsrg_liuhong", "tw_liuhong", "jsrg_liuhong", "pe_jun_liuhong"],
	liupi: ["ol_liupi", "liupi"],
	liushan: ["liushan", "ol_liushan", "re_liushan", "huan_liushan", "pe_jun_liushan", "ol_le_liushan"],
	liuxie: ["liuxie", "dc_sb_liuxie", "sp_liuxie", "std_liuxie", "hs_liuxie", "pe_jun_liuxie"],
	liuyan: ["liuyan", "jsrg_liuyan", "junk_liuyan"],
	liuye: ["dc_liuye", "liuye", "std_liuye"],
	liuyong: ["liuyong", "jsrg_liuyong"],
	liuyu: ["liuyu", "ol_liuyu", "dc_liuyu"],
	liuzan: ["re_liuzan", "liuzan", "std_liuzan"],
	liuzhang: ["liuzhang", "ol_liuzhang", "tw_liuzhang", "std_liuzhang", "ns_liuzhang"],
	liyan: ["liyan", "old_liyan"],
	liwan: ["ol_liwan", "liwan"],
	liwei: ["liwei", "tw_liwei"],
	luji: ["luji", "clan_luji"],
	lukai: ["ol_lukai", "lukai"],
	lukang: ["lukang", "wu_lukang", "jsrg_lukang", "zj_lukang"],
	luotong: ["dc_luotong", "luotong", "std_dc_luotong", "scl_luotong", "dc_sb_luotong"],
	luxun: ["luxun", "re_luxun", "wu_luxun", "dc_sb_lunxun", "sb_luxun", "jsrg_luxun", "huan_luxun", "ty_luxun", "drag_luxun", "sxrm_luxun"],
	luyusheng: ["ol_luyusheng", "luyusheng", "mb_luyusheng", "ns_luyusheng"],
	lvboshe: ["lvboshe", "sxrm_lvboshe"],
	lvbu: ["lvbu", "re_lvbu", "ol_jsrg_lvbu", "dm_lvbu", "v_lvbu", "sb_lvbu", "jsrg_lvbu", "ps_lvbu", "ca_lvbu", "scl_lvbu", "jun_lvbu", "xy_lvbu"],
	lvfan: ["lvfan", "sp_lvfan", "std_lvfan"],
	lvkuanglvxiang: ["lvkuanglvxiang", "dc_lvkuanglvxiang"],
	lvlingqi: ["lvlingqi", "std_lvlingqi", "shinin_lvlingqi", "ol_lvlingqi"],
	lvmeng: ["lvmeng", "re_lvmeng", "sb_lvmeng", "sp_lvmeng", "ns_lvmeng", "she_lvmeng", "sxrm_lvmeng", "dc_sb_lvmeng"],
	machao: ["machao", "re_machao", "sp_machao", "dc_sp_machao", "one_dc_sp_machao", "two_dc_sp_machao", "v_machao", "sb_machao", "jsrg_machao", "ps_machao", "old_machao"],
	madai: ["old_madai", "ol_madai", "re_madai", "tw_madai", "madai"],
	majun: ["majun", "yj_majun", "std_majun", "cx_majun", "qq_majun"],
	maliang: ["ol_maliang", "maliang", "re_maliang", "tw_maliang", "std_maliang", "old_maliang"],
	mamidi: ["mamidi", "xin_mamidi"],
	manchong: ["manchong", "re_manchong"],
	masu: ["xin_masu", "re_masu", "masu", "ns_masu"],
	mateng: ["dc_mateng", "tw_mateng", "std_mateng", "mateng"],
	mayunlu: ["mayunlu", "tw_mayunlu", "std_mayunlu"],
	mazhong: ["mazhong", "re_mazhong", "tw_mazhong"],
	menghuo: ["menghuo", "re_menghuo", "sb_menghuo", "sp_menghuo", "dc_sp_menghuo", "jd_sb_menghuo"],
	mengyou: ["mengyou", "ns_mengyou"],
	miheng: ["ol_miheng", "yue_miheng", "re_miheng", "miheng", "scl_miheng", "std_miheng"],
	mushun: ["mushun", "sp_mushun"],
	nanhualaoxian: ["ol_nanhualaoxian", "re_nanhualaoxian", "nanhualaoxian", "jsrg_nanhualaoxian", "hm_nanhualaoxian", "std_nanhualaoxian", "ns_nanhua", "ns_xinnanhua"],
	niufu: ["ol_niufu", "niufu"],
	niujin: ["niujin", "re_niujin", "tw_niujin"],
	panfeng: ["panfeng", "re_panfeng", "std_panfeng"],
	pangde: ["ol_pangde", "sp_pangde", "re_pangde", "drag_pangde", "pangde", "sxrm_pangde"],
	pangdegong: ["re_pangdegong", "pangdegong", "scl_pangdegong", "std_pangdegong"],
	pangtong: ["pangtong", "ol_pangtong", "ol_sb_pangtong", "re_jsp_pangtong", "re_pangtong", "sb_pangtong", "friend_pangtong", "jsrg_pangtong", "jd_sb_pangtong", "sp_pangtong", "jy_pangtong"],
	panshu: ["panshu", "re_panshu"],
	panzhangmazhong: ["panzhangmazhong", "re_panzhangmazhong", "xin_panzhangmazhong"],
	peixiu: ["ol_peixiu", "fj_peixiu", "xj_peixiu", "peixiu", "scl_peixiu", "std_peixiu"],
	puyuan: ["ol_puyuan", "puyuan", "two_yj_puyuan", "yj_puyuan"],
	qianzhao: ["ol_qianzhao", "qianzhao"],
	qiaogong: ["ol_qiaogong", "qiaogong", "tw_qiaogong"],
	qiaorui: ["qiaorui", "tw_qiaorui"],
	ol_qiaoxuan: ["ol_qiaoxuan", "jsrg_qiaoxuan"],
	qiaozhou: ["yj_qiaozhou", "qiaozhou", "tw_qiaozhou"],
	qinghegongzhu: ["qinghegongzhu", "dc_qinghegongzhu", "mb_qinghegongzhu", "std_qinghegongzhu"],
	qinlang: ["ol_qinlang", "qinlang"],
	quancong: ["quancong", "re_quancong", "xin_quancong", "yy_quancong", "old_quancong"],
	quyi: ["quyi", "re_quyi", "yy_quyi", "std_quyi"],
	ruiji: ["ruiji", "dc_ruiji", "shinin_ruiji"],
	shamoke: ["shamoke", "ty_shamoke"],
	shenpei: ["shenpei", "sp_shenpei", "ns_shenpei"],
	shixie: ["shixie", "dc_shixie", "old_shixie"],
	simafu: ["yj_simafu", "mb_simafu", "simafu"],
	simalang: ["simalang", "re_simalang"],
	simashi: ["jin_simashi", "dc_simashi", "simashi", "tw_simashi", "std_simashi", "jd_jin_simashi"],
	simayi: ["simayi", "re_simayi", "jin_simayi", "dm_simayi", "dc_sb_simayi", "huan_simayi", "jsrg_simayi", "yy_simayi", "ps_simayi", "ps_jin_simayi", "ps2068_simayi", "junk_simayi"],
	simazhao: ["jin_simazhao", "mb_simazhao", "simazhao", "sp_simazhao", "jsrg_simazhao", "jin_jsrg_simazhao", "jd_jin_simazhao", "ns_simazhao", "std_simazhao"],
	simazhou: ["simazhou", "mb_simazhou"],
	sunce: ["sunce", "re_sunce", "sp_sunce", "dc_sunce", "re_sunben", "sb_sunce", "jsrg_sunce", "pe_jun_sunce", "v_sunce"],
	sundeng: ["sundeng", "re_sundeng", "ns_sundeng"],
	sunhanhua: ["dc_sunhanhua", "sunhanhua", "scl_sunhanhua"],
	sunhao: ["sunhao", "std_sunhao", "hs_sunhao"],
	sunjian: ["sunjian", "ol_sunjian", "ol_sb_sunjian", "re_sunjian", "star_sunjian", "tw_jsrg_sunjian", "jsrg_sunjian", "ns_sunjian"],
	sunliang: ["sunliang", "xin_sunliang"],
	sunluban: ["re_sunluban", "xin_sunluban", "tw_sunluban", "std_sunluban", "sunluban", "ol_sunluban"],
	sunluyu: ["sunluyu", "re_sunluyu", "mb_sunluyu", "std_sunluyu"],
	sunquan: ["sunquan", "re_sunquan", "v_sunquan", "dc_sunquan", "xin_sunquan", "sb_sunquan", "jd_sb_sunquan", "ty_sunquan", "ps_sunquan", "pe_jun_sunquan", "dm_sunquan"],
	sunru: ["dc_sunru", "ol_sunru", "sunru"],
	sunshangxiang: ["sunshangxiang", "re_sunshangxiang", "sp_sunshangxiang", "star_sunshangxiang", "sb_sunshangxiang", "jsrg_sunshangxiang", "jd_sb_sunshangxiang", "v_sunshangxiang"],
	sunshao: ["sunshao", "sp_sunshao", "std_sunshao"],
	sunxiu: ["sunxiu", "ol_sunxiu", "re_sunxiu", "xin_sunxiu"],
	sunyi: ["re_sunyi", "sunyi", "tw_sunyi", "std_sunyi", "ns_sunyi"],
	sunziliufang: ["sunziliufang", "dc_sunziliufang"],
	taishici: ["taishici", "re_taishici", "ol_sb_taishici", "sp_taishici", "re_sp_taishici", "pot_taishici", "star_taishici", "zc26_taishici"],
	taoqian: ["ol_taoqian", "re_taoqian", "taoqian", "std_taoqian"],
	tengfanglan: ["tengfanglan", "dc_tengfanglan"],
	yj_tengjia: ["yj_tengjia", "two_yj_tengjia"],
	tianfeng: ["dc_tianfeng", "tianfeng", "mb_tianfeng", "std_tianfeng"],
	tianyu: ["tianyu", "tw_tianyu"],
	tongyuan: ["tongyuan", "xia_tongyuan"],
	wangcan: ["wangcan", "sp_wangcan", "tw_wangcan"],
	wangjun: ["dc_wangjun", "wangjun", "jsrg_wangjun"],
	wanglang: ["ol_wanglang", "wanglang", "std_wanglang", "old_wanglang"],
	wangling: ["clan_wangling", "dc_wangling", "wangling", "tw_wangling"],
	wangrong: ["ol_wangrong", "wangrong"],
	wangshuang: ["wangshuang", "sp_wangshuang"],
	wangyi: ["wangyi", "ol_wangyi", "re_wangyi", "old_wangyi"],
	wangyuanji: ["jin_wangyuanji", "wangyuanji", "std_wangyuanji", "jd_jin_wangyuanji", "sp_wangyuanji"],
	wangyun: ["wangyun", "clan_wangyun", "dc_wangyun", "re_wangyun", "jsrg_wangyun", "std_wangyun", "pe_wangyun", "ns_wangyun", "old_wangyun", "ca_wangyun"],
	weiwenzhugezhi: ["weiwenzhugezhi", "re_weiwenzhugezhi", "jsrg_weiwenzhugezhi"],
	weiyan: ["re_weiyan", "ol_weiyan", "weiyan", "yj_weiyan", "huan_weiyan", "pot_weiyan"],
	wenpin: ["wenpin", "re_wenpin"],
	wenyang: ["wenyang", "db_wenyang", "jsrg_wenyang", "std_db_wenyang", "diy_wenyang"],
	wuanguo: ["ol_wuanguo", "wuanguo"],
	wuban: ["clan_wuban", "dc_wuban", "wuban", "xin_wuban", "ty_wuban"],
	wuguotai: ["wuguotai", "ol_wuguotai", "xin_wuguotai", "re_wuguotai", "shinin_wuguotai"],
	wuhujiang: ["wuhujiang", "hanshiwuhu"],
	wujing: ["ol_wujing", "wujing", "tw_wujing"],
	wuxian: ["wuxian", "clan_wuxian"],
	wuyi: ["wuyi", "re_wuyi", "clan_wuyi", "dc_wuyi", "xin_wuyi", "old_wuyi"],
	xiahouba: ["xiahouba", "dc_xiahouba", "tw_xiahouba", "std_xiahouba"],
	xiahoudun: ["xiahoudun", "re_xiahoudun", "xin_xiahoudun", "sb_xiahoudun", "xia_xiahoudun", "sp_xiahoudun"],
	xiahoushi: ["xiahoushi", "re_xiahoushi", "sb_xiahoushi", "sp_xiahoushi"],
	xiahouxuan: ["xiahouxuan", "dc_xiahouxuan", "pe_xiahouxuan"],
	xiahouyuan: ["re_xiahouyuan", "ol_xiahouyuan", "sb_xiahouyuan", "xiahouyuan"],
	xiangchong: ["xiangchong", "dc_xiangchong"],
	xianglang: ["xianglang", "mb_xianglang"],
	xiaoqiao: ["xiaoqiao", "ol_xiaoqiao", "ol_sb_xiaoqiao", "yue_xiaoqiao", "re_xiaoqiao", "sb_xiaoqiao", "jd_sb_xiaoqiao", "old_xiaoqiao"],
	xinpi: ["xinpi", "sp_xinpi"],
	xinxianying: ["xinxianying", "re_xinxianying", "ol_xinxianying", "sp_xinxianying", "ns_xinxianying", "pot_xinxianying"],
	xizhicai: ["xizhicai", "ol_sb_xizhicai"],
	xuangongzhu: ["xuangongzhu", "yj_xuangongzhu"],
	xuelingyun: ["ol_xuelingyun", "xuelingyun"],
	xuezong: ["xuezong", "mb_xuezong", "tw_xuezong", "std_xuezong"],
	xugong: ["xugong", "re_xugong", "jsrg_xugong"],
	xuhuang: ["re_xuhuang", "ol_xuhuang", "sb_xuhuang", "yj_xuhuang", "jd_sb_xuhuang", "xuhuang", "wn_xuhuang"],
	xujing: ["xujing", "dc_xujing", "sp_xujing", "tw_xujing"],
	xunchen: ["xunchen", "clan_xunchen", "re_xunchen", "sp_xunchen", "tw_xunchen"],
	xunyou: ["xunyou", "clan_xunyou", "re_xunyou"],
	xunyu: ["xunyu", "ol_xunyu", "dc_sb_xunyu", "star_xunyu", "re_xunyu", "sb_xunyu", "sxrm_xunyu", "xy_xunyu", "clan_xunyu"],
	xushao: ["xushao", "jsrg_xushao", "std_xushao"],
	xusheng: ["xusheng", "xin_xusheng", "re_xusheng", "old_xusheng", "drag_xusheng", "dc_sb_xushneg"],
	xushi: ["xushi", "zc26_sp_xushi"],
	xushu: ["xin_xushu", "re_xushu", "dc_xushu", "friend_xushu", "xia_xushu", "std_xushu", "xushu", "xk_shanfu"],
	xuwen: ["xuwen"],
	xuyou: ["xuyou", "ol_sb_xuyou", "sp_xuyou", "jsrg_xuyou", "yj_xuyou", "junk_xuyou"],
	xuzhu: ["xuzhu", "re_xuzhu"],
	yangbiao: ["dc_yangbiao", "yangbiao", "jsrg_yangbiao", "clan_yangbiao", "std_yangbiao"],
	yangfeng: ["ol_yangfeng", "yangfeng"],
	yanghuiyu: ["jin_yanghuiyu", "yanghuiyu"],
	yangwan: ["yangwan", "sp_yangwan", "jd_sp_yangwan"],
	yangyan: ["yangyan", "old_yangyan"],
	yangyi: ["ol_yangyi", "yangyi", "tw_yangyi", "ns_yangyi"],
	yangzhi: ["yangzhi", "old_yangzhi"],
	yanwen: ["yanwen", "ol_yanwen", "re_yanwen", "sxrm_yanwen"],
	yanxiang: ["yanxiang", "tw_yanxiang"],
	yuanhuan: ["ol_yuanhuan", "yuanhuan"],
	yuanji: ["ol_yuanji", "yuanji"],
	yuanshu: ["yuanshu", "re_yuanshu", "ol_sb_yuanshu", "star_yuanshu", "yl_yuanshu", "old_yuanshu", "ol_yuanshu", "yao_yuanshu", "x_yao_yuanshu"],
	yuantanyuanshang: ["yuantanyuanshang", "yuantanyuanxiyuanshang"],
	yuejin: ["yuejin", "std_yuejin", "eu_yuejin"],
	yuejiu: ["dc_yuejiu", "yuejiu"],
	yufan: ["yufan", "ol_yufan", "xin_yufan", "re_yufan", "std_yufan"],
	yuji: ["xin_yuji", "re_yuji", "yuji", "pot_yuji", "ns_yuji", "ns_yujisp"],
	yujin: ["yujin", "ol_yujin", "yujin_yujin", "sb_yujin", "tw_yujin", "jd_sb_yujin", "xin_yujin", "re_yujin", "eu_yujin", "ol_re_yujin", "sxrm_yujin"],
	zangba: ["zangba", "tw_zangba"],
	zhangbao: ["zhangbao", "re_zhangbao", "ns_zhangbao"],
	zhangchangpu: ["ol_zhangchangpu", "zhangchangpu", "sp_zhangchangpu"],
	zhangchu: ["zhangchu", "jsrg_zhangchu"],
	zhangchunhua: ["zhangchunhua", "ol_zhangchunhua", "jin_zhangchunhua", "re_zhangchunhua", "star_zhangchunhua"],
	zhangfei: ["zhangfei", "re_zhangfei", "ol_sb_zhangfei", "old_zhangfei", "xin_zhangfei", "sb_zhangfei", "tw_zhangfei", "jsrg_zhangfei", "jd_sb_zhangfei", "yj_zhangfei", "sp_zhangfei", "yj_zhangfei"],
	zhangfen: ["zhangfen", "mb_zhangfen", "std_zhangfen"],
	zhangji: ["zhangji", "ns_zhangji", "ca_zhangji"],
	zhangjiao: ["sp_zhangjiao", "re_zhangjiao", "sb_zhangjiao", "jsrg_zhangjiao", "zhangjiao", "pe_jun_zhangjiao"],
	zhangkai: ["xy_zhangkai"],
	zhanggong: ["zhanggong", "re_zhanggong"],
	zhanghe: ["zhanghe", "re_zhanghe", "sp_ol_zhanghe", "yj_zhanghe", "sp_zhanghe", "sb_zhanghe", "tw_yj_zhanghe", "huan_zhanghe", "jsrg_zhanghe", "wn_zhanghe", "zc26_zhanghe"],
	zhangliang: ["zhangliang", "xin_zhangliang", "re_zhangliang"],
	zhangliao: ["zhangliao", "re_zhangliao", "sp_zhangliao", "v_zhangliao", "yj_zhangliao", "sb_zhangliao", "jsrg_zhangliao", "eu_zhangliao", "ol_jsrg_zhangliao"],
	zhangmiao: ["zhangmiao", "xy_zhangmiao"],
	zhangning: ["zhangning", "tw_zhangning", "ns_zhangning"],
	zhangrang: ["ol_zhangrang", "zhangrang", "ol_sb_zhangrang", "star_zhangrang", "junk_zhangrang", "ps_zhangrang"],
	zhangsong: ["zhangsong", "re_zhangsong"],
	zhangwen: ["zhangwen", "sp_zhangwen"],
	zhangxingcai: ["zhangxingcai", "old_zhangxingcai"],
	zhangxiu: ["zhangxiu", "ol_sb_zhangxiu", "dc_sb_zhangxiu", "ns_zhangxiu"],
	zhangxuan: ["zhangxuan", "jsrg_zhangxuan", "std_zhangxuan"],
	zhangyi: ["zhangyi", "re_zhangyi", "xin_zhangyi"],
	zhangyì: ["ol_zhangyì", "dc_zhangyì", "zhangyì", "std_zhangyì"],
	zhangzhang: ["zhangzhang", "ol_zhangzhang", "re_zhangzhang"],
	zhaotongzhaoguang: ["dc_zhaotongzhaoguang", "zhaotongzhaoguang", "zj_zhaotong", "zj_zhaoguang"],
	zhaoxiang: ["zhaoxiang", "dc_zhaoxiang", "tw_zhaoxiang"],
	zhaoyǎn: ["zhaoyǎn", "dc_zhaoyǎn"],
	zhaoyun: ["zhaoyun", "re_zhaoyun", "sp_zhaoyun", "ol_sb_zhaoyun", "ol_jsrg_zhaoyun", "old_zhaoyun", "sb_zhaoyun", "huan_zhaoyun", "jsrg_zhaoyun", "jd_sb_zhaoyun", "jsp_zhaoyun", "yy_zhaoyun", "ps2063_zhaoyun", "ps2067_zhaoyun"],
	zhenji: ["zhenji", "re_zhenji", "sp_zhenji", "sb_zhenji", "mb_sp_zhenji", "tw_zhenji", "jsrg_zhenji", "yj_zhenji", "shinin_zhenji"],
	zhonghui: ["zhonghui", "clan_zhonghui", "xin_zhonghui", "re_zhonghui", "std_zhonghui", "yj_zhonghui", "pe_zhonghui", "old_zhonghui", "zj_zhonghui", "sp_zhonghui"],
	zhongyan: ["zhongyan", "clan_zhongyan"],
	zhongyao: ["zhongyao", "clan_zhongyao", "re_zhongyao"],
	zhoubuyi: ["zhoubuyi", "yj_zhoubuyi"],
	zhoucang: ["zhoucang", "re_zhoucang", "xin_zhoucang", "drag_zhoucang"],
	zhouchu: ["jin_zhouchu", "zhouchu", "tw_zhouchu", "std_zhouchu"],
	zhoufei: ["zhoufei", "yue_zhoufei"],
	zhouqun: ["ol_zhouqun", "zhouqun"],
	zhoutai: ["zhoutai", "xin_zhoutai", "old_zhoutai"],
	zhouyu: ["zhouyu", "re_zhouyu", "dc_sb_zhouyu", "yue_zhouyu", "sb_zhouyu", "jx_zhouyu", "ps1062_zhouyu", "ps2080_zhouyu", "jy_zhouyu"],
	zhugedan: ["zhugedan", "re_zhugedan", "jsrg_zhugedan"],
	zhugeguo: ["zhugeguo", "yue_zhugeguo", "tw_zhugeguo", "huan_zhugeguo"],
	zhugejin: ["zhugejin", "dc_sb_zhugejin", "sb_zhugejin"],
	zhugeliang: ["zhugeliang", "re_zhugeliang", "ol_sb_zhugeliang", "wu_zhugeliang", "friend_zhugeliang", "huan_zhugeliang", "jsrg_zhugeliang", "ps_zhugeliang", "ps2066_zhugeliang", "prp_zhugeliang", "ns_zhugeliang", "jy_zhugeliang", "zj_zhugeliang", "you_zhugeliang"],
	zhugezhan: ["zhugezhan", "old_zhugezhan", "zj_zhugezhan"],
	zhuhuan: ["zhuhuan", "re_zhuhuan", "xin_zhuhuan", "old_zhuhuan"],
	zhujun: ["ol_zhujun", "zhujun", "sp_zhujun", "jsrg_zhujun"],
	zhuling: ["ol_zhuling", "dc_zhuling", "zhuling", "wn_zhuling"],
	zhuran: ["zhuran", "re_zhuran", "xin_zhuran", "old_zhuran", "dc_sb_zhuran"],
	zhurong: ["zhurong", "ol_zhurong", "re_zhurong", "sb_zhurong", "dc_sp_zhurong"],
	zhuzhi: ["zhuzhi", "re_zhuzhi", "xin_zhuzhi", "tw_zhuzhi", "old_zhuzhi"],
	zongyu: ["zongyu", "sp_zongyu", "tw_zongyu"],
	zoushi: ["zoushi", "re_zoushi", "yue_zoushi", "jsrg_zoushi", "std_zoushi"],
	zumao: ["zumao", "tw_zumao"],
	zuoci: ["zuoci", "re_zuoci", "ns_zuoci"],
	zhangyan: ["zhangyan", "yj_zhangyan", "mb_zhangyan"],
	dc_huangwudie: ["dc_huangwudie", "std_huangwudie", "ns_huangwudie"],
	dc_huanjie: ["dc_huanjie", "pot_huanjie"],
	dc_jiben: ["dc_jiben", "sp_jiben"],
	dc_wangchang: ["clan_wangchang", "dc_wangchang", "tw_wangchang"],
	dc_zhangmancheng: ["ol_zhangmancheng", "dc_zhangmancheng", "tw_zhangmancheng"],
	dc_zhangren: ["dc_zhangren", "jsrg_zhangren"],
	ol_bianfuren: ["ol_bianfuren", "sp_bianfuren", "tw_bianfuren"],
	ol_dongzhao: ["ol_dongzhao", "dc_dongzhao", "pot_dongzhao", "tw_dongzhao"],
	ol_huban: ["ol_huban", "dc_huban", "mb_huban"],
	ol_mengda: ["ol_mengda", "dc_mengda", "pe_mengda", "std_mengda", "mb_mengda"],
	ol_pengyang: ["ol_pengyang", "sp_pengyang"],
	ol_wenqin: ["ol_wenqin", "mb_wenqin", "pe_wenqin"],
	re_lidian: ["re_lidian", "old_re_lidian", "junk_lidian"],
	re_lusu: ["re_lusu", "ol_lusu", "ol_sb_lusu", "dc_sb_lusu", "pot_lusu", "xia_lusu", "jy_lusu", "zc26_lusu"],
	re_yuanshao: ["re_yuanshao", "ol_yuanshao", "ol_sb_yuanshao", "star_yuanshao", "xin_yuanshao", "sb_yuanshao", "jsrg_yuanshao", "jd_sb_yuanshao", "yy_yuanshao", "pe_jun_yuanshao"],
	sp_chenzhen: ["sp_chenzhen", "tw_chenzhen"],
	sp_jiangwan: ["ol_jiangwan", "sp_jiangwan", "std_jiangwan", "star_jiangwan"],
	sp_mifuren: ["dc_mifuren", "sp_mifuren"],
	sp_zhugeliang: ["sp_zhugeliang", "ol_sp_zhugeliang", "re_sp_zhugeliang", "sb_sp_zhugeliang", "tw_sb_sp_zhugeliang", "jd_sb_sp_zhugeliang"],
	ty_anying: ["ty_anying", "ty_anyingx"],
	ty_guanxing: ["std_guanxing", "ty_guanxing"],
	tw_fengxí: ["tw_fengxí", "ty_fengxí"],
	tw_wenchou: ["ol_sb_wenchou", "star_wenchou", "tw_wenchou", "yy_wenchou", "ns_wenchou"],
	tw_xiahouen: ["ol_xiahouen", "tw_xiahouen", "jsrg_xiahouen"],
	tw_yanliang: ["tw_yanliang", "ns_yanliang", "star_yanliang"],
	tw_zhangji: ["tw_zhangji", "ol_tw_zhangji"],
	tw_zhangnan: ["tw_zhangnan", "ty_zhangnan"],
	tw_zhangzhao: ["tw_zhangzhao", "star_zhangzhao", "jy_zhangzhao"],
	xf_huangquan: ["xf_huangquan", "dc_huangquan", "dc_sb_huangquan"],
	yj_jushou: ["yj_jushou", "ol_sb_jushou", "re_jushou", "dc_sb_jushou", "xin_jushou", "std_jushou"],
	yj_sufei: ["xf_sufei", "yj_sufei", "sp_sufei"],
	yl_luzhi: ["yl_luzhi", "ol_sb_yl_luzhi", "sb_yl_luzhi", "tw_yl_luzhi", "jsrg_yl_luzhi"],
	jin_yanghu: ["jin_yanghu", "dc_yanghu", "sp_yanghu", "std_dc_yanghu", "ns_yanghu"],
	xiahouhan: ["xiahouhan", "zj_xiahouhan"],
	jin_xiahouhui: ["jin_xiahouhui", "dc_xiahouhui", "jd_jin_xiahouhui"],
	jsrg_limi: ["jsrg_limi", "ns_limi"],
	pot_lougui: ["pot_lougui", "jsrg_lougui"],
	ol_zhaozhong: ["ol_zhaozhong", "zhaozhong", "ps_zhaozhong"],
	friend_shitao: ["friend_shitao", "xia_shitao"],
	tw_xiahoushang: ["mb_xiahoushang", "tw_xiahoushang"],
	yanghong: ["yanghong", "mb_yanghong"],
	peiyuanshao: ["ol_peiyuanshao", "peiyuanshao"],
	xingdaorong: ["xingdaorong", "mb_xingdaorong"],
	yangxiu: ["yangxiu", "clan_yangxiu"],
	zhugeke: ["zhugeke", "std_zhugeke"],
	dongyun: ["dongyun", "std_dongyun"],
	zhoufang: ["zhoufang", "std_zhoufang"],
	yangfu: ["ol_yangfu", "yangfu"],
	chezhou: ["chezhou", "yj_chezhou"],
	clan_zhongyu: ["clan_zhongyu", "dc_zhongyu"],
	guanhai: ["ol_guanhai", "guanhai"],
	zerong: ["zerong", "std_zerong", "mb_zerong"],
	tw_zhugejun: ["tw_zhugejun", "dc_zhugejun"],
	wufu: ["wufu", "hr_wufu"],
	zhangyao: ["zhangyao", "std_zhangyao"],
	sunjun: ["mb_sunjun", "jsrg_sunjun"],
	zhangqiying: ["zhangqiying", "x_dc_zhangqiying", "y_dc_zhangqiying"],
	yj_zhanghuan: ["yj_zhanghuan", "jsrg_zhanghuan"],
	kaisa: ["kaisa", "eu_kaisa"],
	simahui: ["simahui", "std_simahui"],
	zhengxuan: ["zhengxuan", "std_zhengxuan"],
	zhaoyan: ["zhaoyan", "std_zhaoyan"],
	dc_liuli: ["dc_liuli", "std_liuli"],
	dc_sb_hulie: ["zj_hulie", "dc_sb_hulie"],
	zhanghu: ["zj_zhanghu", "zhanghu"],
	yuechen: ["zj_yuechen", "yuechen"],
	wenyuan: ["wenyuan", "std_wenyuan"],
/*--------------------------------有二就有三，所以character/replace.js都放这里很合理吧（结束）--------------------------------*/
		},
		pinyins: {
			
		},
	};
});
