import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "sp2",
		connect: true,
		connectBanned: [
			
		],
		character: {
			matie: ["male", "qun", 4, ["dczhuiwang", "dcquxian"]],
			hansong: ["male", "qun", 3, ["dcyinbi", "dcshuaiyan"]],
			chezhou: ["male", "wei", 4, ["dcshefu", "dcpigua"]],
			liqueguosi: ["male", "qun", 4, ["xiongsuan"]],
			dc_jikang: ["male", "wei", 3, ["new_qingxian", "dcjuexiang"]],
			dc_jsp_guanyu: ["male", "wei", 4, ["new_rewusheng", "dcdanji"]],
			dc_mengda: ["male", "wei", 4, ["dclibang", "dcwujie"]],
			//dc_fuwan:['male','qun',4,['dcmoukui']],
			guānning: ["male", "shu", 3, ["dcxiuwen", "longsong"]],
			sunhuan: ["male", "wu", 4, ["dcniji"]],
			sunlang: ["male", "shu", 4, ["dctingxian", "dcbenshi"]],
			shiyi: ["male", "wu", 3, ["dccuichuan", "dczhengxu"]],
			dc_hujinding: ["female", "shu", "3/6", ["dcdeshi", "dcwuyuan", "huaizi"]],
			liyixiejing: ["male", "wu", 4, ["dcdouzhen"]],
			mushun: ["male", "qun", 4, ["dcjinjian", "dcshizhao"]],
			dc_zhaoyǎn: ["male", "wei", 3, ["dcfuning", "dcbingji"]],
			wangwei: ["male", "qun", 4, ["dcruizhan", "dcshilie"]],
			dc_huban: ["male", "wei", 4, ["dcchongyi"]],
			niufu: ["male", "qun", "4/7", ["dcxiaoxi", "xiongrao"]],
			bianxi: ["male", "wei", 4, ["dunxi"]],
			fengfang: ["male", "qun", 3, ["dcditing", "dcbihuo"]],
			qinyilu: ["male", "qun", 3, ["piaoping", "tuoxian", "chuaili"]],
			yanrou: ["male", "wei", 4, ["choutao", "xiangshu"]],
			dc_zhuling: ["male", "wei", 4, ["dczhanyi"]],
			licaiwei: ["female", "qun", 3, ["yijiao", "qibie"], ["border:wei"]],
			yanfuren: ["female", "qun", 3, ["channi", "nifu"]],
			haomeng: ["male", "qun", 7, ["xiongmang"]],
			re_pangdegong: ["male", "qun", 3, ["heqia", "yinyi"]],
			zhangning: ["female", "qun", 3, ["tianze", "difa"]],
			tongyuan: ["male", "qun", 4, ["chaofeng", "chuanshu"]],
			sp_mifangfushiren: ["male", "shu", 4, ["fengshi"]],
			re_nanhualaoxian: ["male", "qun", 4, ["gongxiu", "jinghe"]],
			dufuren: ["female", "wei", 3, ["yise", "shunshi"]],
			caoanmin: ["male", "wei", 4, ["xianwei"]],
			re_zoushi: ["female", "qun", 3, ["rehuoshui", "reqingcheng"]],
			qiuliju: ["male", "qun", "4/6", ["koulve", "qljsuiren"]],
			re_hucheer: ["male", "qun", 4, ["redaoji", "fuzhong"]],
			re_dongcheng: ["male", "qun", 4, ["xuezhao"]],
			tangji: ["female", "qun", 3, ["kangge", "jielie"]],
			zhangheng: ["male", "qun", 8, ["dangzai", "liangjue"]],
			duanwei: ["male", "qun", 4, ["junklangmie"]],
			re_niujin: ["male", "wei", 4, ["recuorui", "reliewei"]],
			zhangmiao: ["male", "qun", 4, ["mouni", "zongfan"]],
			liangxing: ["male", "qun", 4, ["lulve", "lxzhuixi"]],
			caosong: ["male", "wei", 4, ["cslilu", "csyizheng"]],
			re_taoqian: ["male", "qun", 3, ["zhaohuo", "reyixiang", "reyirang"]],
			zhaozhong: ["male", "qun", 6, ["yangzhong", "huangkong"]],
			hanfu: ["male", "qun", 4, ["hfjieying", "weipo"]],
			re_quyi: ["male", "qun", 4, ["refuqi", "jiaozi"]],
			dongxie: ["female", "qun", 4, ["dcjiaoxia", "dchumei"]],
			wangrong: ["female", "qun", 3, ["minsi", "jijing", "zhuide"]],
			ol_dingyuan: ["male", "qun", 4, ["cixiao", "xianshuai"]],
			re_hejin: ["male", "qun", 4, ["spmouzhu", "spyanhuo"]],
			re_hansui: ["male", "qun", 4, ["spniluan", "spweiwu"]],
			liuhong: ["male", "qun", 4, ["yujue", "tuxing"]],
			zhujun: ["male", "qun", 4, ["gongjian", "kuimang"]],
			re_maliang: ["male", "shu", 3, ["rexiemu", "heli"], []],
			caobuxing: ["male", "wu", 3, ["moying", "juanhui"], []],
			lijue: ["male", "qun", "4/6", ["xinfu_langxi", "xinfu_yisuan"], []],
			zhangji: ["male", "qun", 4, ["xinfu_lveming", "xinfu_tunjun"], []],
			fanchou: ["male", "qun", 4, ["xinxingluan"], []],
			guosi: ["male", "qun", 4, ["xinfu_tanbei", "xinfu_sidao"], []],
			lvkai: ["male", "shu", 3, ["xinfu_tunan", "xinfu_bijing"], []],
			zhanggong: ["male", "wei", 3, ["xinfu_zhenxing", "xinfu_qianxin"], []],
			weiwenzhugezhi: ["male", "wu", 4, ["xinfu_fuhai"], []],
			beimihu: ["female", "qun", 3, ["zongkui", "guju", "baijia"]],
			xushao: ["male", "qun", 4, ["pingjian"]],
			xinpi: ["male", "wei", 3, ["xpchijie", "yinju"]],
			lisu: ["male", "qun", 2, ["lslixun", "lskuizhu"]],
			zhangwen: ["male", "wu", 3, ["songshu", "sibian"]],
			mangyachang: ["male", "qun", 4, ["spjiedao"], []],
			xugong: ["male", "wu", 3, ["biaozhao", "yechou"], []],
			zhangchangpu: ["female", "wei", 3, ["yanjiao", "xingshen"], []],
		},
		characterSort: {
			sp2: {
				sp2_whlw: [
					"lijue",
					"zhangji",
					"fanchou",
					"guosi",
					"duanwei",
					"liangxing",
					"zhangheng",
					"tangji",
					"niufu",
					"dongxie",
					"liqueguosi",
				],
				sp2_zltx: ["lvkai", "zhanggong", "weiwenzhugezhi", "beimihu"],
				sp2_sbfm: ["lisu", "xinpi", "zhangwen"],
				sp2_qihuan: ["zhaozhong", "re_hejin", "fengfang", "mushun"],
				sp2_binglin: [
					"re_niujin",
					"sp_mifangfushiren",
					"licaiwei",
					"dc_zhaoyan",
					"shiyi",
					"sunlang",
					"sunhuan",
					"dc_mengda",
				],
				sp2_danqi: [
					"dufuren",
					"qinyilu",
					"bianxi",
					"dc_huban",
					"dc_hujinding",
					"dc_zhaoyǎn",
					"wangwei",
					"liyixiejing",
					"guānning",
					"dc_jsp_guanyu",
				],
				sp2_fenghuo: ["re_nanhualaoxian", "tongyuan", "zhangning", "re_pangdegong"],
				sp2_zizouqi: ["mangyachang", "xugong", "zhangchangpu"],
				
				sp2_huangjin: ["liuhong", "zhujun", "re_hansui", "xushao"],
				sp2_fadong: ["ol_dingyuan", "wangrong", "re_quyi", "hanfu"],
				sp2_xuzhou: ["re_taoqian", "caosong", "zhangmiao", "qiuliju"],
				sp2_zhongyuan: ["re_hucheer", "re_zoushi", "caoanmin", "re_dongcheng"],
				sp2_xiaohu: ["haomeng", "yanfuren", "yanrou", "dc_zhuling"],
				sp2_qunxiong: ["chezhou", "hansong", "matie"],
				
				sp2_waitforsort: ["caobuxing", "re_maliang", "dc_jikang"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			liqueguosi: "请分别查看「李傕」和「郭汜」的武将介绍。",
			tangji: "唐姬，会稽太守唐瑁女，弘农怀王刘辩的妃子。刘辩死后，唐姬回归故里，因节烈不愿改嫁他人，后被汉献帝下诏封为弘农王妃。",
			lijue: "李傕（一说“傕”读音“què”）（？—198年），字稚然。北地郡泥阳县（今陕西省耀县）人，汉末群雄之一。东汉末年汉献帝时的军阀、权臣，官至大司马、车骑将军、开府、领司隶校尉、假节。<br>李傕本为董卓部将，后被董卓的女婿牛辅派遣至中牟与朱儁交战，大破朱儁，进而至陈留、颍川等地劫掠。初平三年（192年）董卓和牛辅被杀后，李傕归无所依，于是采用贾诩之谋，伙同郭汜、张济、樊稠等原董卓部曲将攻向长安。击败吕布，杀死王允等人，占领长安，把持朝廷大权。后诸将不和，李傕在会议上杀死了樊稠，又与郭汜分别劫持了汉献帝和众臣，相互交战，张济率兵赶来和解，于是二人罢兵，李傕出屯池阳黄白城，郭汜、张济等人随汉献帝东归前往弘农。<br>后来，李傕、郭汜、张济反悔，联合起来追击汉献帝，与杨奉、董承等人几番交战。汉献帝一路逃亡，狼狈不堪，到达安邑，与李傕等人讲和。不久，汉献帝被曹操迎往许都。建安三年（198年），曹操派谒者仆射裴茂召集关西诸将段煨等人征讨李傕，灭其三族。",
			zhangji:
				"张济（？－196年），武威郡祖厉县（今甘肃靖远东南）人。东汉末年割据军阀之一。 张济原为董卓部将，董卓被诛杀后，张济与李傕一同率军攻破长安，任中郎将。不久，升任镇东将军，封平阳侯，出屯弘农。献帝东迁时，张济升任骠骑将军，率军护卫献帝，后来因与董承等人有矛盾，便与李傕、郭汜一同追赶献帝。 建安元年（196年），张济因军队缺粮而进攻穰城，中流矢而死。死后，部队由侄儿张绣接管。",
			guosi: "郭汜（？－197年），又名郭多，凉州张掖（今甘肃张掖西北）人，东汉末年将领、军阀，献帝时权臣。原为董卓部下。董卓被杀后，凉州众将归无所依，于是采用贾诩之谋，联兵将攻向长安，击败吕布，杀死王允等人，占领长安，把持朝廷大权。几年后，郭汜被部将伍习杀死。",
			fanchou:
				"樊稠（？—195年），凉州金城（治今甘肃永靖西北）人。东汉末年军阀、将领。官至右将军，封万年侯。 原为董卓部将，董卓死后，伙同李傕、郭汜、张济等人合众十余万反扑长安，败吕布、杀王允，把持朝政。后马腾因与李傕有隙，于是联合韩遂举兵进攻，李傕派樊稠、郭汜等与其交战，大败马腾、韩遂于长平观下。樊稠追至陈仓，与韩遂友好罢兵，却遭李傕猜疑。兴平二年（195年），李傕让外甥骑都尉胡封在会议上将樊稠刺死（一说趁醉用杖击杀）。",
			lvkai: "吕凯（？―225年），字季平，永昌郡不韦县（今云南保山东北）人，三国时期蜀汉官员。初任永昌郡五官掾功曹。章武三年（223年），建宁太守雍闿反叛，投降吴国，吴国任雍闿为永昌太守，吕凯闭境抗拒雍闿。建兴三年（225年），丞相诸葛亮南征，表奏吕凯功劳，任命他为云南太守，封阳迁亭侯。吕凯还未上任，便被叛乱的少数民族杀害。",
			zhanggong:
				"张恭（生卒年不详），三国时期魏国大臣，与子张就一同闻名于西域。官至西域戊己校尉、关内侯，赠执金吾。初为敦煌郡功曹。东汉末河西大乱，太守马艾卒官，他被众人推为代理长史，遂派儿子张就请曹操委任太守，直至新太守到任。魏文帝时拜西域戊己校尉。魏明帝时去世。",
			weiwenzhugezhi:
				"卫温 （？—231年），三国时期东吴将领，曾任将军职。诸葛直（？—231年），三国时期东吴将领。黄龙二年（230年）正月，孙权派卫温、诸葛直带领上万士兵出海寻找夷洲、亶洲，想要俘获那里的民众以充实东吴的人口，陆逊和全琮都谏言反对，孙权不听。230年和卫温一起登上台湾（当时的台湾叫做夷洲），他们是中国历史上记载的最早登陆台湾的人。卫温和诸葛直花费了约一年时间行军，士兵们因为疾病死去了十分之八到十分之九，因为亶洲太过遥远，卫温和诸葛直最终没能到达那里，只带了几千名夷洲的人返回。黄龙三年（231年），孙权认为诸葛直违背诏令，劳财伤民，无功而返，和卫温一同入狱被处死。",
			beimihu:
				"卑弥呼（ひみこ，约159年-约249年，有的史书也写成“俾弥呼”）是日本弥生时代邪马台国（今日本本州近畿地区）的女王，在《三国志·魏书·倭人传》中有关于她的记载。关于她的真实身份一直众说纷纭，是个极具神秘色彩的古代女性统治者。亦是日本古代宗教鬼道教的发源者。",
			liuqi: "刘琦（？－209年）。兖州山阳郡高平县（今山东省济宁市微山县两城镇）人。荆州牧刘表的长子、谏议大夫刘琮兄。官至荆州刺史。建安十四年（209年）病逝。",
			tangzi: "唐咨（生卒年不详），三国时魏利城（今江苏赣榆西）人。魏文帝黄初中利城郡反，推唐咨为主。后为魏军击破，遂亡至吴，官至左将军，封侯、持节。后助诸葛诞拒魏，兵败被俘。为安抚吴国军民，魏主拜唐咨为安远将军。",
			huangquan:
				"黄权（？－240年），字公衡。巴西郡阆中县（今四川阆中）人。三国时期蜀汉、曹魏将领。<br>黄权年轻时为郡吏，后被益州牧刘璋召为主簿。曾劝谏刘璋不要迎接刘备，因而被外放为广汉县长。刘璋败，才降刘备，被拜为偏将军。建计取汉中，拜护军。刘备为汉中王，仍领益州牧，以黄权为治中从事。及刘备称帝，将伐吴，黄权劝谏而不纳。以其为镇北将军，督江北军以防魏师进攻。刘备伐吴败还，而归途隔绝，黄权不得归，无奈之下率部降魏。被魏文帝所赏识，拜镇南将军，封育阳侯，加侍中，使同车陪乘。后领益州刺史，进驻河南。景初三年（239年），迁车骑将军、仪同三司。正始元年（240年），黄权去世，谥号“景”。",
			sufei: "苏飞（生卒年不详），东汉末年人物，原为东汉末年荆州牧刘表的部将，任江夏都督。<br>苏飞与甘宁交好，但是数次向黄祖推荐都失败。甘宁决定投效孙权时助其逃离。后来甘宁率吴军攻破江夏，苏飞兵败被俘。孙权打算将苏飞处斩，但是因为甘宁用性命担保而赦免了苏飞。降吴后官至军都督。",

			zhangchangpu:
				"钟会的母亲。《母夫人张氏传》：夫人张氏，字昌蒲，太原兹氏人，太傅定陵成侯之命妇也。",
			xugong: "许贡是东汉末官吏。先后任吴郡都尉、太守，欲送密信给曹操，要曹操注意孙策，却被孙策发现而被杀。许贡生前招揽了一些门客，当中有三人不忘故主，千方百计想要手刃仇人。建安五年（公元200年），广陵太守陈登派人秘密联系孙策治下的山贼余党，企图颠覆孙策在江东的统治。孙策决定讨伐陈登，行军到丹徒时，许贡门客终于找到了机会。因为孙策有单骑出猎，在野外思考的习惯，三门客趁孙策轻装外出打猎时，放冷箭射中孙策面颊。这些门客后来在与孙策的搏斗中，被赶到的侍卫杀死。孙策此后因为伤口感染，并且俊美的容貌被毁，终于不治身亡，去世时年仅26岁。",
			mangyachang:
				"南蛮王孟获的部将，使一口截头大刀，骑一匹黄骠马。率军与蜀军交战，战败王平。后被平北将军马岱斩杀。只出现在《三国演义》里，正史中无此人。",
			xushao: "许劭（150年—195年），字子将。汝南平舆（今河南平舆县射桥镇）人。东汉末年著名人物评论家。据说他每月都要对当时人物进行一次品评，人称为“月旦评”。曾任汝南郡功曹，后南渡投靠扬州刺史刘繇。刘繇被孙策击败后，许劭随其逃往豫章郡，并在豫章去世。",
			zhangwen:
				"张温（193年—230年），字惠恕，吴郡吴县（今江苏苏州）人。少修节操，容貌奇伟。孙权召拜议郎、选曹尚书，徙太子太傅。黄武三年（224），以辅义中郎将身份出使蜀汉，孙权原先害怕诸葛亮会有意留难张温，但张温不担心。在呈上蜀汉朝廷的文书刻意称颂蜀汉，以表明和解的诚意，重建两国关系。他在蜀汉表现出色，得蜀汉朝廷重视。回东吴后不久，被调进豫章的军队，事业上再无进展。孙权一方面介怀他出使蜀汉时称颂蜀汉，又嫌他声名太盛，恐怕张温不会尽忠地由他任用。当时正好碰上暨艳事件，暨艳是张温引荐的臣子，但他滥用职权，升迁评定等只看自己喜恶。事件被揭发后暨艳及同党徐彪都自杀。孙权见此，于是以张温与暨艳、徐彪等人多有来往而下罪张温，后更将张温发还到家乡吴郡。将军骆统曾上书为张温辩解，但孙权不理会。六年后，张温病逝。",
			lisu: "李肃（？－192年），五原（治今内蒙古包头西北）人。永汉三年四月，司徒王允、尚书仆射士孙瑞、卓将吕布共谋诛卓。是时，天子有疾新愈，大会未央殿。布使同郡骑都尉肃等、将亲兵十馀人，伪著卫士服守掖门。布怀诏书。卓至，肃等格卓。卓惊呼布所在。布曰“有诏”，遂杀卓，夷三族。后卓女婿中郎将牛辅典兵别屯陕，分遣校尉李傕、郭汜、张济略陈留、颍川诸县。卓死，吕布使李肃至陕，欲以诏命诛辅。辅等逆与肃战，肃败走弘农，布诛肃。",
			xinpi: "辛毗（生卒年不详），字佐治，颍川阳翟人。三国时期曹魏大臣。原居陇西（郡治在今甘肃临洮县），东汉光武帝建武年间，其先人东迁。当初，辛毗跟随其兄事袁绍。曹操任司空时，征召辛毗，他不受命。官渡战后，辛毗事袁绍的儿子袁谭。公元204年，曹操攻下邺城，上表推荐辛毗任议郎，后为丞相长史。公元220年，曹丕即皇帝位，以辛毗为侍中，赐爵关内侯，后赐广平亭侯。魏明帝即位，封辛毗颍乡侯，食邑三百户，后为卫尉。公元234年，诸葛亮屯兵渭南，司马懿上表魏明帝。魏明帝任辛毗为大将军军师，加使持节号。诸葛亮病逝后，辛毗返回，仍任卫尉。不久，逝世，谥肃侯。",

			liuzan: "字正明，会稽长山人人，曾任左护军，有两子：留略、留平。少为会稽郡吏，曾参与镇压黄巾起义，后被东吴大将凌统所引用，任屯骑校尉。吴五凤二年（公元255年）留赞任左护军，随孙峻征淮南，因病撤军，被魏将蒋班围困于道，力战而死，时年73岁。",
			zhujun: "朱儁（？－195年），字公伟。会稽郡上虞县（今浙江绍兴上虞区）人。东汉末年名将。朱儁出身寒门，赡养母亲，以好义轻财闻名，受乡里敬重。后被太守徐珪举为孝廉，任兰陵令，颇有治绩。再升任交州刺史，以家兵五千大破叛军，平定交州。战后以功封都亭侯，入朝为谏议大夫。光和七年（184年），黄巾起义爆发，朱儁以右中郎将、持节平定三郡之地，以功进封西乡侯，迁镇贼中郎将。又率军讨平黄巾，“威声满天下”。中平二年（185年），进拜右车骑将军，更封钱塘侯。后为河内太守，击退进逼的张燕。权臣董卓秉政时，想任朱儁为副手，遭其婉拒。其后出逃荆州，更屯军中牟，徐州刺史陶谦等欲推举他为太师，并传檄各州牧伯，相邀讨伐李傕、奉迎天子。但朱儁却奉诏入京任太仆。初平三年（192年），升任太尉、录尚书事。兴平元年（194年），行骠骑将军事，持节镇关东，因故未成行。兴平二年（195年），李傕与郭汜相互攻杀，郭汜扣留朱儁作为人质。朱儁性格刚烈，即日发病而死。",
			liuhong:
				"汉灵帝刘宏（157年，一作156年－189年5月13日），生于冀州河间国（今河北深州）。东汉第十二位皇帝（168年－189年在位），汉章帝刘炟的玄孙。刘宏早年世袭解渎亭侯。永康元年（167年）十二月，汉桓帝刘志逝世，刘宏被外戚窦氏挑选为皇位继承人，于建宁元年（168年）正月即位。刘宏在位的大部分时期，施行党锢及宦官政治。他又设置西园，巧立名目搜刮钱财，甚至卖官鬻爵以用于自己享乐。在位晚期，爆发了黄巾起义，而凉州等地也陷入持续动乱之中。中平六年（189年），刘宏去世，谥号孝灵皇帝，葬于文陵。刘宏喜好辞赋，作有《皇羲篇》、《追德赋》、《令仪颂》、《招商歌》等。",
			wangrong:
				"汉灵怀皇后王荣（？~181年），赵国邯郸（今河北邯郸市）人。五官中郎将王苞孙女，汉灵帝刘宏妃子，汉献帝刘协生母。初以良家子选入掖庭，封为美人，服侍汉灵帝。光和四年（181年），生下陈留王刘协，惨遭灵思皇后毒杀。王荣死后，汉灵帝曾作《追德赋》、《令仪颂》。永汉元年（189年），其子刘协即位，是为汉献帝，追谥灵怀皇后，葬于文昭陵。",
			hanfu: "韩馥（？—191年），字文节，颍川郡（今河南禹州）人。东汉末年的诸侯，冀州牧。韩馥担任过东汉的御史中丞，之后被董卓举荐为冀州牧；在各诸侯起兵讨伐董卓时，韩馥也是其中之一的参与者。韩馥与袁绍也曾经有意立刘虞为皇帝。当时冀州民殷人盛，兵粮优足，于是袁绍便用计夺取冀州，韩馥被迫投靠张邈；之后张邈与袁绍的使者见面，韩馥以为是要来杀害自己的，于是在厕所中以刻书用的小刀自杀。",
			zhaozhong:
				"赵忠（？—189年），安平人，东汉末年宦官，赵延之兄。桓帝、灵帝时，历为小黄门、中常侍、大长秋、车骑将军等职，封都乡侯。在职时以搜刮暴敛、骄纵贪婪见称，灵帝极为宠信，常谓“赵常侍是我母”。中平六年（189年），何进谋诛宦官，事泄，他和其余几个常侍设计伏杀何进，袁绍、袁术等人闻何进被杀，入宫杀尽宦官，后捕杀赵忠。",
			caosong:
				"曹嵩（？—194年），字巨高，沛郡谯县（今安徽省亳州市）人。东汉大臣，大长秋曹腾的养子，曹操之父亲。门荫入仕，历任司隶校尉、鸿胪卿、大司农，位列九卿，位高权重。中平四年（187年），靠着贿赂中官，出任太尉，位列三公。中平五年（188年），受累于黄巾之乱，坐罪免官。兴平元年（194年），投奔兖州牧曹操，遇害于徐州。延康元年（220年），追尊魏国太王。曹魏建立后，追尊皇帝，谥号为太。",
			liangxing:
				"梁兴（？-212年），武威郡姑臧人也，东汉末年凉州军阀之一。与张横、贾诩、段煨是同乡，曾斩杀李傕。建安十六年，同韩遂、马超联合，起兵反抗曹操。梁兴率步骑五千夜袭曹军先头部队徐晃，被击退。联军战败后，梁兴逃到蓝田，劫掠周围郡县。夏侯渊进攻蓝田联合郑浑征讨梁兴，梁兴战败，不知所终。",
			zhangmiao:
				"张邈（？－195年），字孟卓，东平寿张（今山东东平县）人。东汉大臣、名士，“八厨”之一。举孝廉出身，授骑都尉，出任陈留太守。参与讨伐董卓，参加汴水之战，归附于曹操。兴平元年（194年），趁着曹操讨伐徐州牧陶谦，联合陈宫发动叛乱，迎立吕布为兖州牧。受到曹操讨伐，兵败投奔徐州牧刘备。兴平二年，张邈向袁术借兵途中，被部下所杀。",
			duanwei:
				"段煨（？～209年），字忠明，武威郡姑臧（今甘肃省武威市）人也。东汉末年将领，东汉太尉段颎同族兄弟，与太尉贾诩、张济、宣威侯张绣乃是同乡。原为董卓帐下将领，奉命屯兵华阴，勤劳农业。兴平二年（195年），迎接汉献帝刘协东归洛阳，供给衣食补给，与护驾将领杨定不和，引发激战十余天，听从汉献帝刘协劝解。东汉建安三年（198年），攻打黄白城，击杀李傕，夷其三族，封为镇远将军、闅乡亭侯、北地太守，累迁大鸿胪、金光禄大夫。建安十四年（209年），寿终正寝。",
			zhangheng:
				"张横，生卒年不详，武威郡姑臧人，东汉末年凉州军阀之一。与梁兴、贾诩、段煨乃是同乡。建安三年（198），张横与梁兴、段煨等斩杀李傕。十六年（211），同韩遂、马超联合，起兵反抗曹操，兵败后不知所终。",
			wenqin: "文钦（？~258年），字仲若，沛国谯郡（今安徽省亳州市）人，三国时期曹魏将领，曹操部将文稷之子。魏明帝太和年间文钦任牙门将、五营校督，后拜庐江太守、冠军将军，嘉平元年（249年），曹爽及其同党在高平陵之变中被杀，文钦心中不安，执政的司马氏集团为了安抚文钦，升其为前将军、扬州刺史，任职期间结交镇东将军毌丘俭。击退吴国太傅诸葛恪进攻，取得一定战果。正元二年（255年），文钦与镇东将军毌丘俭在扬州起兵讨伐司马师，兵败后投奔吴国，被封为镇北大将军、幽州牧，封谯侯。甘露二年（257年），文钦随吴军援救起兵反抗司马氏的诸葛诞，此后因被司马昭大军围困，军情告急，文钦与诸葛诞本就有矛盾，对文钦日益不满的诸葛诞遂将文钦杀死。淮南平定之后，文钦遗体被其二子收敛安葬。",
			qiuliju:
				"丘力居，东汉末年的辽西乌丸大人。拉拢中山太守张纯反叛东汉，寇略青、徐、幽、冀四州，杀略吏民。死时认为儿子楼班年幼，于是让从子蹋顿总摄三王部。",
			liuba: "刘巴（？－222年），字子初，荆州零陵郡烝阳县（今湖南省衡阳县、邵东县一带）人，东汉末年至三国时期蜀汉时期官员、名士。刘巴少知名，荆州牧刘表多次征用推举，刘巴均不应就。曹操征伐荆州，荆州士人多归刘备，刘巴却北上投靠曹操。后受曹操命令招降荆南三郡，不料先为刘备所得，刘巴不能复命曹操，遂远至交趾，又辗转进入益州。刘备平定益州后，刘巴归附刘备，为左将军西曹掾，法正死后接任尚书令。章武二年（222年）去世。刘巴博学多才，为刘备解决入蜀后的财政困难问题，又与诸葛亮等共制蜀汉的法律文件《蜀科》。为人简朴清高，退无私交，曹魏大臣陈群甚敬重之。所著录于《刘令君集》。",
			pengyang:
				"彭羕（184年－220年），字永年，广汉（今四川广汉北）人。东汉末年官吏。彭羕起初在益州任书佐，但后来其他人向益州牧刘璋诽谤他，刘璋于是以“髡钳”（剃去头发和胡须，并戴上刑具）处罚他，并且贬奴隶。此时刘备入蜀，彭羕想投靠刘备，于是去见庞统。庞统和他会面后很欣赏他，而法正亦很清楚彭羕，于是二人共同向刘备推荐彭羕。刘备多次命令彭羕传递军情和指示给诸将，表现都十分满意，日渐被赏识。刘备入主益州，领益州牧后就任命他为治州从事。彭羕见此，又变得嚣张自矜，诸葛亮对他礼待但心中并不喜欢他，多次密告刘备，说彭羕“心大志广，难可保安”。刘备见诸葛亮这样说，决定疏远彭羕，又观察他行事，于是贬他为江阳太守。彭羕见将被派往外地，心感不悦，与马超见面时又曾对他说“老革荒悖，可复道邪！”“卿为其外，我为其内，天下不足定也。”马超听后大惊，彭羕走后以他的说话告发彭羕，彭羕于是被收监下狱。最后彭羕被处死，死时三十七岁。",
			dongxie:
				"董卓之女，牛辅之妻。在《三国群英传》中名为董宜，在电视剧《三国群英会之吕布与貂蝉》中名为董媛。",
			caoanmin:
				"曹安民（？-197年），沛国谯县（今安徽亳州）人，字安民。东汉时期人物，曹德之子，曹操之侄，曹昂的堂兄弟，曹丕的堂兄，死于宛城之战。按曹丕《典论》记载的“亡兄孝廉子脩、从兄安民遇害。”等情况来看，安民应该是曹操侄子错不了，曹丕是他们属于兄弟关系肯定不会弄错。另外从典论的记载来看安民是和子脩并提的，子脩是曹昂的字，安民则肯定也是字不是名，至于三国志中记载则应取自曹丕之《典论》但陈寿又不知曹安民其名，故写为“长子昂、弟子安民”。",
			dufuren:
				"杜夫人（生卒年不详），东汉末年至三国时人。有异色，原为吕布将秦宜禄之妻，生子秦朗。后为曹操纳为妾，又生曹林、曹衮、金乡公主。",
			mifangfushiren:
				"糜芳（生卒年不详），字子方，东海郡朐县（今江苏省连云港市）人。汉末三国时期蜀国将领，刘备糜夫人的兄弟。糜芳本为徐州牧陶谦部下，曾被曹操表为彭城相。后来辞官，随刘备从徐州辗转至邺城、汝南、新野、长坂坡、江夏等地，奔波多年。傅士仁（生卒年不详），字君义，幽州广阳郡（今北京市）人，刘备手下将领。受到刘备的重用，但被关羽轻慢。<br>刘备称汉中王时，糜芳为南郡太守，但受到关羽的轻慢。后来，因未完成供给军资的任务而被关羽责骂，心中不安。吕蒙袭取荆州时，将已经投降的傅士仁展示给糜芳，糜芳于是选择投降，导致关羽兵败被杀。此后，在吴国担任将军，并且为吴征伐。",
			tongyuan:
				"童渊，字雄付，武术名家，与并州李彦是结拜兄弟，两人均师承义父玉真子，两人分别娶了河北颜家的两位大小姐颜云、颜雨。童飞之父，有张任、张绣为入室弟子，晚年收赵云为关门弟子，传其毕生所学。其成名技为“百鸟朝凤枪”。童渊是南方苏州评话三国中的原创人物，在历史中以及《三国演义》中并不存在。",
			//zhangning:'张宁，东汉末年大贤良师张角的女儿。自幼学习太平道法，掌握天地法则。',
			xinping:
				"辛评（？－204年），字仲治，颍川阳翟人，东汉末年人物。曹魏卫尉辛毗之兄。原是韩馥部下，韩馥逃亡后转而辅佐袁绍。袁绍死后，辛评、郭图欲立袁谭为主，与审配等不和。后来曹操破邺，其弟辛毗在城下劝降。审配怒遣手下将辛评全家杀害。",
			hanmeng:
				"韩猛，又名韩若、韩荀、韩泣（上荀下大） ，东汉末年袁绍帐下名将，或与《曹瞒传》所言韩莒子为同一人。公元200年，官渡之战爆发。袁绍派遣韩猛劫掠曹操军的西道，被曹军部将曹仁击破于鸡洛山。袁绍又派韩猛前去运送粮车，因为轻敌被曹军部将徐晃、史涣击退。",
			yanfuren:
				"《三国志》中东汉末年著名武将吕布有一妻子，但姓名未载于史书，或为魏续的姐妹魏氏。在李傕郭汜之乱期间曾受困，幸亏被庞舒所救，私藏于府中而得以幸免。吕布被曹操围困时，反对陈宫的计谋，导致了吕布的失败。《三国演义》中，姓严，通称严夫人，和吕布生有一女欲嫁于袁术之子，未果，吕布失败后与其女一同送往许昌。",
			haomeng:
				"郝萌（？－196年），东汉末年吕布帐下名将。建安元年（196年），郝萌在袁术的怂恿下反叛吕布，曾一度打得吕布躲入厕所。后来，被吕布部将高顺所阻，其部将曹性临阵反叛，最终被高顺所杀。在小说《三国演义》中，吕布被围下邳时，郝萌护送许汜王楷回城时，被张飞擒获，被曹操所杀。",
			licaiwei:
				"李采薇，生卒年不详，汉末将领庞德之妻，庞会之母。襄樊之战时，庞德任先锋，随于禁率军增援驻守樊城的曹仁。出战前，他将妻子李采薇与年仅六岁的儿子庞会叫来面前，对李采薇说：“吾今为先锋，义当效死疆场。我若死，汝好生看养吾儿。吾儿有异相，长大必当与吾报仇也。”李采薇闻言，与儿子痛哭送别庞德。她知道丈夫已下定决心，若无法胜利归还则必当战死沙场，绝不会投降求生。其后前线果然传来消息：魏军全军覆没，于禁投降，庞德誓死不降被关羽所杀。其子庞会自幼丧父，由母亲抚养长大。成年后，庞会性格勇烈，有先父之风。他多次立下战功，深受魏文帝曹丕的喜爱。后来庞会随钟会、邓艾伐蜀，成都城破之后，尽灭关氏家以报父仇。",
			yanrou: "阎柔（生卒年不详），燕国广阳（今北京市附近）人。三国时期曹魏名将。年少时曾被乌丸、鲜卑俘虏，后来却得到他们的信任。刘虞死后，阎柔被鲜于辅等推举为乌丸司马，联系鲜卑为刘虞报仇，和公孙瓒对抗。在官渡之战时归曹操，拜护乌丸校尉，对曹操讨伐乌丸有功，赐爵关内侯。曹操待其如子，曹丕也视其如亲兄弟，阎柔坐镇北方，统帅幽州兵马，抗击胡人的入侵。曹丕即位后，阎柔被拜为度辽将军。",
			qinyilu:
				"秦宜禄（？—200年），并州云中郡云中县人（今内蒙古自治区呼和浩特市托克托县古城镇）。东汉军阀吕布的部将。吕布战败后归降曹操，后为张飞所杀。",
			fengfang:
				"冯方，其字不详，司隶人。初掌校事，监察京师及周边地区，刺探文武百官秘事。十常侍之乱后，董卓进京，掌控朝政。冯方认为他胸怀不臣之心，于是弃官携女儿冯妤至江南避祸。其后董卓果然乱政，京师之地生灵涂炭，更将洛阳付之一炬。冯方因其先见之明得以保全家人。<br>冯妤长大成人后，有倾国之貌。一日袁术登城观景，得见冯妤，心中非常喜欢，于是将其纳为夫人。冯方心忧自家女儿不谙世事，于是将可以让人更显妩媚的家传宝梳交给她，希望能借此使其获得袁术的宠爱。其后果然传来袁术偏爱冯夫人的消息，冯方因此宽心，接受了袁术的征辟，为其效力。然而好景不长，没过多久，冯妤自缢身亡的消息传出，冯方悲愤不已，弃官而走，自此销声匿迹。",
			bianxi: "小说《三国演义》里的人物。汜水关守将，并州人氏。原是黄巾余党，后投曹操，拨来守汜水关。善使流星锤。在镇国寺设下伏兵欲谋害千里寻兄的关羽，但是寺中僧人普净暗示加以解救。最后被关羽斩杀。",
			niufu: "牛辅，东汉末年武将，东汉相国董卓的女婿。曾任中郎将，征讨白波军，不能取胜。董卓被杀时，牛辅别屯于陕地。吕布派李肃前去征讨牛辅，被牛辅击败。后来，牛辅营中有士兵半夜背叛出逃，造成内乱，牛辅以为整营皆叛，于是带着金银珠宝，独与亲信胡赤儿等五六人逾城北渡河。赤儿等人以绳索系在牛辅腰间将其从城头放下，但赤儿等因为谋财而在离地面数丈高的地方就松开了绳子使得牛辅重重摔在地上腰部受伤，而后赤儿与诸胡人将牛辅斩首，将其首级送去长安。",
			wangwei:
				"王威，东汉末年人。荆州刺史刘表部下将领，乃忠义之士。刘表亡后，刘琮投降曹操，王威向刘琮献计偷袭曹操，刘琮没有采纳。小说《三国演义》中，曹操表刘琮为青州刺史，使远离故乡，时只有王威追随，曹操复遣于禁追杀刘琮等人，王威亦于乱军中殉主。",
			liyixiejing:
				"李异（生卒年不详），三国时吴将领，曾随陆逊大败蜀军。谢旌（生卒年不详），三国时期吴国名将，会稽（今属浙江）人。建安末，李异与谢旌率水陆三千，破蜀将詹晏、陈凤。刘备领兵攻孙权，李异与陆议等屯巫、秭归，为蜀将所破。黄武元年（222），陆逊破刘备于猇亭，他追踪蜀军，屯驻南山。建安二十四年，陆逊击败关羽后，遣李异、谢旌二人将水陆军三千，进攻蜀将詹晏、陈凤。李异率水军，谢旌率陆军，于险要之地设防，击败詹晏，生擒陈凤。其后进攻房陵太守邓辅、南乡太守郭睦，大破之。又攻秭归大姓文布、邓凯等所合夷兵数千人，大胜，文布、邓凯落荒而逃。在《三国演义》中，两人为孙桓麾下部将，皆有“万夫不当之勇”。刘备攻吴时，谢旌迎战张苞，不敌败走。李异接战，被关兴所斩。次日，谢旌于乱军中被张苞一矛刺死。",
			shiyi: "是仪（生卒年不详），本名氏仪，字子羽，北海郡营陵县（今山东昌乐）人，三国时期吴国官员。仕东汉、东吴两朝，早年曾在本县营陵县及本郡北海郡任官，后在东吴历任骑都尉、忠义校尉、裨将军、偏将军、侍中、中执法、尚书仆射等官。先封都亭侯，后进封都乡侯。年八十一岁时病逝，死前要求节葬。",
			sunlang:
				"孙狼（生卒年不详），东汉末农民起义军首领。建安二十三年（218）陆浑（今河南嵩县东北）县长张固发民服徭役，百姓惶俱，狼等乘机发动起义，杀县主簿，攻破县城，后南下投奔蜀将关羽。",
			sp_jiaxu:
				"字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。",
			sunhuan:
				"孙桓（198年－223年），字叔武，吴郡富春（今浙江杭州富阳区）人，三国时期吴国建武将军。孙河第三子。仪容端正，器怀聪明，博学强记，能论议应对，孙权常称为“宗室颜渊”。初擢为武卫都尉。建安二十四年（219年），参与由吕蒙指挥的袭击荆州行动，从讨关羽于华容，招揽关羽余众，得五千人以及大量牛马器械。黄武元年（222年），孙桓二十五岁，拜安东中郎将，跟随陆逊抗击进攻东吴的刘备。当时刘备率领众多兵众进攻，满山都是蜀军，孙桓奋战，与陆逊等协力击破蜀军。刘备兵败逃走，孙桓截击，“斩上夔道，扼要径”，差点生擒刘备。战后孙桓因功拜建武将军，封丹徒侯，督牛渚，修筑横江坞，期间逝世。",
			guānning:
				"关宁，《三国演义》的虚构人物，为关定之子，关平的哥哥，学文。关羽前往冀州寻找刘备时曾居于关定庄，关定命关宁、关平二子出拜。后关羽同刘备回到关定庄时，关羽向刘备介绍关宁、关平二人，关定即提出让关平拜关羽为义父。",
			mushun: "穆顺，小说《三国演义》中的人物，男，东汉末宦官。献帝欲修书与国舅伏完，共谋图曹公。因顺为宦官中之忠义可托者，乃命顺往送书。顺藏书于发中，潜出禁宫，径至完宅，将书呈上。及完回书付顺，顺乃藏于头髻内，辞完回宫。然公闻信，先于宫门等候，顺回遇公，公喝左右，遍搜身上，并无夹带，放行。忽然风吹落其帽。公又唤回，取帽视之，遍观无物，还帽令戴。顺双手倒戴其帽。公心疑，令左右搜其头发中，搜出伏完书来。公见书大怒，执下顺于密室问之，顺不肯招。当晚将顺、完等宗族二百余口，皆斩于市。",
			jsp_guanyu:
				"关羽，字云长。曾水淹七军、擒于禁、斩庞德、威震华夏，吓得曹操差点迁都躲避，但是东吴偷袭荆州，关羽兵败被害。后传说吕蒙因关羽之魂索命而死。",
			chezhou: "车胄（？－199年至200年），东汉末年武将，为曹操所置徐州刺史。建安四年，左将军刘备率军出征，前往下邳，于同年或次年杀死车胄。",
			hansong: "韩嵩（生卒年不详），字德高，南阳人。少好学，贫不改操。不应三公辟命，与同好数人隐居郦西山中。后担任刘表手下的别驾，转为从事中郎。出使许都，被拜为侍中，迁零陵太守。建安十三年（208年），韩嵩与蒯越、傅巽劝刘琮降曹。曹操平定荆州后，拜韩嵩为大鸿胪。",
			matie: "马铁（？－212年），扶风茂陵（今陕西兴平）人。马腾之子，马超之弟。马腾遭韩遂进攻，乃携马铁等入京受职。马铁被封为骑都尉。后在邺城居住。因其兄马超反曹而被曹操夷灭。",
		},
		characterTitle: {
			
		},
		characterFilter: {
			
		},
		characterInitFilter: {
			
		},
		card: {
			
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//王戎
			mpjianlin: {
				audio: 2,
				trigger: {
					global: "phaseAfter",
				},
				getCards(player) {
					const cards = [];
					game.checkGlobalHistory("cardMove", evt => {
						if (evt.name == "lose") {
							if (evt.position !== ui.discardPile) return false;
						} else if (evt.name !== "cardsDiscard") return false;
						if (get.info("mpjianlin").isUseOrRespond(evt, player)) {
							cards.addArray(
								evt.cards.filter(card => {
									return get.type(card) == "basic" && get.position(card) === "d";
								})
							);
						}
					});
					player.checkHistory("lose", evt => {
						if (evt.type == "discard") {
							cards.addArray(
								evt.cards2.filter(card => {
									return get.type(card) == "basic" && get.position(card) === "d";
								})
							);
						}
					});
					return cards;
				},
				isUseOrRespond(event, player) {
					if (event.name !== "cardsDiscard") return false;
					const evtx = event.getParent();
					if (evtx.name !== "orderingDiscard") return false;
					const evt2 = evtx.relatedEvent || evtx.getParent();
					return ["useCard", "respond"].includes(evt2.name) && evt2.player == player;
				},
				filter(event, player) {
					return get.info("mpjianlin").getCards(player).length;
				},
				async cost(event, trigger, player) {
					const cards = get.info("mpjianlin").getCards(player);
					const {
						result: { bool, links },
					} = await player.chooseButton(["俭吝：你可以获得其中一张牌", cards]).set("ai", get.buttonValue);
					event.result = {
						bool: bool,
						cost_data: links,
					};
				},
				async content(event, trigger, player) {
					player.gain(event.cost_data, "gain2");
				},
			},
			mpsixiao: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				locked: true,
				filter(event, player) {
					return (event.name != "phase" || game.phaseNumber == 0) && game.hasPlayer(current => current != player);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(true, lib.filter.notMe, "死孝：请选择一名角色当其孝子", "当该角色需要使用或打出除【无懈可击】外的牌时，其可以观看你的手牌并可以使用或打出其中一张牌，然后你摸一张牌")
						.set("ai", target => {
							return get.attitude(get.player(), target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					game.log(player, "成为了", target, "的孝子");
					target.storage.mpsixiao_use = player;
					target.addSkill("mpsixiao_use");
				},
				subSkill: {
					use: {
						charlotte: true,
						mark: "character",
						intro: {
							content: "当你需要使用或打出除【无懈可击】外的牌时，你可以观看$的手牌并可以使用或打出其中一张牌，然后$摸一张牌",
						},
						hiddenCard(player, name) {
							if (name == "wuxie" || !lib.inpile.includes(name) || player.hasSkill("mpsixiao_used", null, null, false)) return false;
							const target = player.storage.mpsixiao_use;
							const cards = target.getCards("h");
							for (var i of cards) {
								if (get.name(i, target) == name) return true;
							}
							return false;
						},
						enable: ["chooseToUse", "chooseToRespond"],
						filter(event, player) {
							const target = player.storage.mpsixiao_use;
							const cards = target.getCards("h");
							if (player.hasSkill("mpsixiao_used", null, null, false)) return false;
							return cards.some(i =>
								event.filterCard(
									{
										name: get.name(i, target),
										nature: get.nature(i, target),
										isCard: true,
									},
									player,
									event
								)
							);
						},
						chooseButton: {
							dialog(event, player) {
								const target = player.storage.mpsixiao_use;
								const cards = target.getCards("h");
								return ui.create.dialog("死孝", cards);
							},
							filter(button, player) {
								const evt = _status.event.getParent();
								const target = player.storage.mpsixiao_use;
								return evt.filterCard(
									{
										name: get.name(button.link, target),
										nature: get.nature(button.link, target),
										isCard: true,
									},
									player,
									evt
								);
							},
							check(button) {
								const player = get.player();
								const evt = _status.event.getParent();
								if (evt.dying) return get.attitude(player, evt.dying);
								if (_status.event.getParent().type != "phase") return 1;
								return player.getUseValue(get.autoViewAs(button.link), null, true);
							},
							backup(links, player) {
								const target = player.storage.mpsixiao_use;
								return {
									viewAs: {
										name: get.name(links[0], target),
										nature: get.nature(links[0], target),
										isCard: true,
									},
									card: links[0],
									filterCard: () => false,
									selectCard: -1,
									log: false,
									async precontent(event, trigger, player) {
										const card = lib.skill.mpsixiao_use_backup.card,
											target = player.storage.mpsixiao_use;
										event.result.card = card;
										event.result.cards = [card];
										player.addTempSkill("mpsixiao_used");
										target
											.when({ global: ["useCard", "respond"] })
											.filter(evt => evt.player == player && evt.skill == "mpsixiao_use_backup")
											.then(() => {
												player.draw();
											});
									},
								};
							},
							ai: {
								hasSha: true,
								hasShan: true,
								skillTagFilter(player, tag) {
									const name = "s" + tag.slice(4);
									return lib.skill.mpsixiao_use.hiddenCard(player, name);
								},
							},
						},
						ai: {
							order: 8,
							result: {
								player: 1,
							},
						},
					},
					used: {},
				},
			},
			//马铁
			dczhuiwang: {
				mod: {
					globalFrom(from, to) {
						if (from.hp >= to.hp) return -Infinity;
					},
				},
			},
			dcquxian: {
				audio: 2,
				trigger: {
					player: "phaseUseBegin",
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("dcquxian"), "选择一名角色，攻击范围内包含其的角色可以对其使用【杀】")
						.set("ai", target => {
							const player = get.player();
							return -get.attitude(player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0],
						targets = game.filterPlayer(current => current != player && current.inRange(target)).sortBySeat();
					if (!targets.length) return;
					const sha = [],
						nosha = [];
					while (targets.length) {
						const current = targets.shift();
						const bool = await current
							.chooseToUse(function (card, player, event) {
								if (get.name(card) != "sha") return false;
								return lib.filter.filterCard.apply(this, arguments);
							}, "驱险：是否对" + get.translation(target) + "使用一张杀？")
							.set("targetRequired", true)
							.set("complexSelect", true)
							.set("filterTarget", function (card, player, target) {
								if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
								return lib.filter.targetEnabled.apply(this, arguments);
							})
							.set("sourcex", target)
							.set("addCount", false)
							.forResultBool();
						if (bool) sha.push(current);
						else nosha.push(current);
					}
					if (!target.hasHistory("damage", evt => evt.getParent().type == "card" && evt.getParent(4) == event) && sha.length && nosha.length) {
						for (const i of nosha) await i.loseHp(sha.length);
					}
				},
			},
			//韩嵩
			dcyinbi: {
				mod: {
					targetInRange(card, player) {
						if (!game.hasPlayer(current => current != player && current.countCards("h") == player.countCards("h"))) return true;
					},
					cardUsable(card, player) {
						if (!game.hasPlayer(current => current != player && current.countCards("h") == player.countCards("h"))) return Infinity;
					},
					maxHandcardBase(player) {
						if (_status.dcyinbi) return;
						_status.dcyinbi = true;
						const num = Math.max(...game.filterPlayer().map(target => target.getHandcardLimit()));
						delete _status.dcyinbi;
						return num;
					},
				},
			},
			dcshuaiyan: {
				audio: 2,
				trigger: {
					global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				filter(event, player, name, target) {
					return target && target.countCards("h") == player.countCards("h");
				},
				getIndex(event, player) {
					return game
						.filterPlayer(target => {
							if (target == player) return false;
							if (event.getg && event.getg(target) && event.getg(target).length && target.countCards("h") == player.countCards("h")) return true;
							const evt = event.getl(target);
							if (evt && evt.hs && evt.hs.length && target.countCards("h") == player.countCards("h")) return true;
							return false;
						})
						.sortBySeat();
				},
				logTarget(event, player, triggername, target) {
					return target;
				},
				forced: true,
				async content(event, trigger, player) {
					const target = event.targets[0],
						goon = target.countDiscardableCards(player, "he");
					let result;
					if (goon)
						result = await player
							.chooseControl()
							.set("choiceList", ["弃置" + get.translation(target) + "的一张牌", "摸一张牌"])
							.set("ai", () => {
								const player = get.player();
								const eff1 = get.effect(get.event("target"), { name: "guohe_copy2" }, player, player);
								const eff2 = get.effect(player, { name: "draw" }, player, player);
								return eff1 > eff2 ? 0 : 1;
							})
							.set("target", target)
							.forResult();
					else result = { index: 1 };
					if (result.index == 0) player.discardPlayerCard(target, "he", true);
					else player.draw();
				},
			},
			//侧肘
			dcshefu: {
				audio: 2,
				trigger: {
					player: "damageBegin2",
					source: "damageBegin1",
				},
				filter(event, player) {
					if (!event.source || event.source == event.player || !event.cards || !event.cards.length) return false;
					const evt = event.getParent(2);
					return evt && evt.name == "useCard";
				},
				forced: true,
				logTarget(event, player) {
					return event.source == player ? event.player : event.source;
				},
				content() {
					const evt = trigger.getParent(2);
					const cards = evt.cards.filter(card => {
						if (trigger.source._start_cards?.includes(card)) return true;
						return trigger.source.getAllHistory("gain", evt => {
							return evt.cards.includes(card);
						}).length;
					});
					trigger.num =
						cards.length +
						cards.reduce((sum, card) => {
							let num = 0,
								history = trigger.source.actionHistory;
							for (let i = history.length - 1; i >= 0; i--) {
								if (history[i].gain.some(evtx => evtx.cards.includes(card))) break;
								if (history[i].isRound) num++;
								if (i == 0 && trigger.source._start_cards?.includes(card)) num--;
							}
							return sum + num;
						}, 0);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target == player || !get.tag(card, "damage")) return;
							if (!(card.cards || []).length) return "zeroplayertarget";
						},
						player: function () {
							return lib.skill.dcshefu.ai.effect.target.apply(this, arguments);
						},
					},
				},
			},
			dcpigua: {
				audio: 2,
				trigger: { source: "damageSource" },
				filter(event, player) {
					if (event.player == player) return false;
					return event.num > 1 && event.player.isIn() && event.player.countCards("he") && game.roundNumber > 0;
				},
				async cost(event, trigger, player) {
					const target = trigger.player;
					let result = await player.gainPlayerCard(target, "he", [1, game.roundNumber]).set("prompt", get.prompt2("dcpigua", target)).set("logSkill", ["dcpigua", target]).forResult();
					result.bool = Boolean((result.cards || []).length);
					event.result = result;
				},
				popup: false,
				async content(event, trigger, player) {
					player.addTempSkill("dcpigua_effect");
					player.addGaintag(event.cards, "dcpigua_effect");
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove(player, skill) {
							player.removeGaintag(skill);
						},
						mod: {
							ignoredHandcard(card) {
								if (card.hasGaintag("dcpigua_effect")) return true;
							},
							cardDiscardable(card, _, name) {
								if (name == "phaseDiscard" && card.hasGaintag("dcpigua_effect")) return false;
							},
						},
					},
				},
			},
			//星张昭
			starzhongyan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(current => get.info("starzhongyan").filterTarget(null, player, current));
				},
				filterTarget(card, player, target) {
					return target.countCards("h");
				},
				async content(event, trigger, player) {
					const target = event.targets[0],
						topCards = get.cards(3);
					await game.cardsGotoOrdering(topCards);
					await player.showCards(topCards, get.translation(player) + "发动了【忠言】");
					if (!target.countCards("h")) return;
					const result = await target
						.chooseToMove("忠言：交换其中一张牌")
						.set("list", [
							["牌堆顶", topCards],
							["你的手牌", target.getCards("h")],
						])
						.set("filterMove", (from, to, moved) => {
							if (typeof to == "number") return false;
							var player = _status.event.player;
							var hs = player.getCards("h");
							var changed = hs.filter(function (card) {
								return !moved[1].includes(card);
							});
							var changed2 = moved[1].filter(function (card) {
								return !hs.includes(card);
							});
							if (changed.length < 1) return true;
							var pos1 = moved[0].includes(from.link) ? 0 : 1,
								pos2 = moved[0].includes(to.link) ? 0 : 1;
							if (pos1 == pos2) return true;
							if (pos1 == 0) {
								if (changed.includes(from.link)) return true;
								return changed2.includes(to.link);
							}
							if (changed2.includes(from.link)) return true;
							return changed.includes(to.link);
						})
						.set("filterOk", moved => {
							return moved[0].filter(card => get.owner(card)).length == 1;
						})
						.set("processAI", function (list) {
							var cards1 = list[0][1].slice(),
								cards2 = list[1][1].slice();
							var card1 = cards1.sort((a, b) => get.value(b) - get.value(a))[0];
							var card2 = cards2.sort((a, b) => get.value(a) - get.value(b))[0];
							if (card1 && card2 && get.value(card1) > get.value(card2)) {
								cards1.remove(card1);
								cards2.remove(card2);
								cards1.push(card2);
								cards2.push(card1);
							}
							return [cards1, cards2];
						})
						.forResult();
					if (result.bool) {
						const lose = result.moved[0].slice();
						const gain = result.moved[1].slice().filter(i => !get.owner(i));
						if (lose.some(i => get.owner(i)))
							await target.lose(
								lose.filter(i => get.owner(i)),
								ui.special
							);
						for (let i = lose.length - 1; i--; i >= 0) {
							ui.cardPile.insertBefore(lose[i], ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
						if (gain.length) await target.gain(gain, "draw");
						if (lose.map(card => get.color(card)).toUniqued().length == 1) {
							const chosen = [],
								list = player != target ? [target, player] : [target];
							for (const current of list) {
								const goon = game.hasPlayer(i => i.countGainableCards(current, "ej"));
								const choices = [];
								const choiceList = ["回复1点体力", "获得场上一张牌"];
								if (current.isDamaged() && !chosen.includes("选项一")) choices.push("选项一");
								else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
								if (goon && !chosen.includes("选项二")) choices.push("选项二");
								else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
								if (!choices.length) continue;
								const control =
									choices.length == 1
										? choices[0]
										: await current
												.chooseControl(choices)
												.set("choiceList", choiceList)
												.set("prompt", "忠言：请选择一项")
												.set("ai", () => {
													const player = get.player();
													const eff2 = get.recoverEffect(player, player, player);
													return eff2 ? 0 : 1;
												})
												.forResultControl();
								chosen.push(control);
								if (control == "选项一") {
									await current.recover();
								} else {
									const targets = await current
										.chooseTarget("获得一名角色场上的一张牌", true, (card, player, target) => {
											const targetx = get.event("targetx");
											return target.countGainableCards(targetx, "ej") > 0;
										})
										.set("ai", target => {
											const player = get.player();
											let att = get.attitude(player, target);
											if (att < 0) att = -Math.sqrt(-att);
											else att = Math.sqrt(att);
											return att * lib.card.shunshou.ai.result.target(player, target);
										})
										.set("targetx", current)
										.forResultTargets();
									await current.gainPlayerCard(targets[0], "ej", true);
								}
							}
						}
					} else {
						for (let i = topCards.length - 1; i--; i >= 0) {
							ui.cardPile.insertBefore(topCards[i], ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
						target: 1,
					},
				},
			},
			starjinglun: {
				audio: 2,
				trigger: {
					global: "damageSource",
				},
				filter(event, player) {
					const target = event.source;
					return target && target.isIn() && get.distance(player, target) <= 1;
				},
				check(event, player) {
					return get.attitude(player, event.source) > 0;
				},
				usable:1,
				logTarget: "source",
				async content(event, trigger, player) {
					const target = trigger.source,
						num = target.countCards("e");
					if (num) await target.draw(num);
					await player.useSkill("starzhongyan", [target]);
				},
			},
			//星孙坚
			starruijun: {
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
				},
				filter(event, player) {
					if (
						!player.isPhaseUsing() ||
						player.hasHistory("useCard", evt => {
							if (evt === event.getParent()) return false;
							const targets = evt.targets;
							return evt.isPhaseUsing() && targets.some(target => target !== player);
						})
					)
						return false;
					return event.isFirstTarget && (event.targets || []).some(target => target !== player && target.isIn());
				},
				locked: false,
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt(event.name.slice(0, -5)), `选择其中一名目标角色，摸${get.cnNumber(player.getDamagedHp() + 1)}张牌，令所有除其外的其他角色不在你的攻击范围内，且你对其造成的伤害逐次增加。`, (card, player, target) => {
							return target != player && get.event().getTrigger().targets.includes(target) && target.isIn();
						})
						.set("ai", target => {
							const player = get.player();
							if (
								player.hasCard(card => {
									return game.hasPlayer(current => {
										return get.effect(current, card, player, player) > 0 && player.canUse(card, current, true, true);
									});
								}, "hs")
							)
								return 0;
							return -get.attitude(player, target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					await player.draw(player.getDamagedHp() + 1);
					player.addTempSkill("starruijun_effect", "phaseChange");
					player.markAuto("starruijun_effect", event.targets[0]);
				},
				subSkill: {
					effect: {
						audio: "starruijun",
						trigger: {
							source: "damageBegin2",
						},
						charlotte: true,
						forced: true,
						onremove: true,
						async content(event, trigger, player) {
							let num = 1;
							const evts = player.getHistory("sourceDamage", evt => {
								return evt.source === player && evt.player === trigger.player;
							});
							if (evts.length) num += evts.lastItem.num;
							trigger.num = Math.min(5, num);
						},
						mod: {
							inRange(from, to) {
								if (!from.getStorage("starruijun_effect").includes(to)) return false;
							},
							targetInRange(card, player, target) {
								if (player.getStorage("starruijun_effect").includes(target)) return true;
							},
						}
					},
				},
				mod: {
					aiOrder(player, card, num) {
						const event = get.event();
						if (!event || event.type !== "phase") return;
						if (
							game.hasPlayer(current => {
								return get.effect(current, card, player, player) > 0 && player.canUse(card, current, true, true) && get.damageEffect(current, player, player) > 0;
							})
						)
							return num * 2;
						return num / 1.5;
					}
				},
			},
			stargangyi: {
				audio: 2,
				trigger: {
					source: "damage",
				},
				silent: true,
				forced: true,
				group: "stargangyi_recover",
				async content(event, trigger, player) {
					player.addTempSkill("stargangyi_access");
				},
				subSkill: {
					recover: {
						audio: "stargangyi",
						trigger: {
							player: "recoverBegin",
						},
						filter(event, player) {
							const evt = event.getParent(3);
							if (!player.isDying() || evt.type !== "dying") return false;
							return ["tao", "jiu"].includes(event.getParent().name);
						},
						forced: true,
						async content(event, trigger, player) {
							trigger.num++;
						},
					},
					access: {
						charlotte: true,
					},
				},
				mod: {
					cardEnabled(card, player) {
						if (player.hasSkill("stargangyi_access")) return;
						if (player === _status.currentPhase && card.name === "tao") return false;
					},
					cardSavable(card, player) {
						if (player.hasSkill("stargangyi_access")) return;
						if (player === _status.currentPhase && card.name === "tao") return false;
					},
				},
			},
			//李傕郭汜
			xiongsuan: {
				audio: 2,
				enable: "phaseUse",
				filterTarget: true,
				filterCard: lib.filter.cardDiscardable,
				position: "h",
				usable: 1,
				async content(event, trigger, player) {
					const target = event.target;
					await target.damage();
					await player.draw(3);
					if (target != player) await player.loseHp();
				},
				ai: {
					order: 9,
					result: {
						player(player, target) {
							let res = 2 * get.effect(player, { name: "draw" }, player, player);
							if (player.hp <= 1 && !player.hasCard(i => {
								let name = get.name(i, player);
								if (name != "tao" && name != "jiu") return false;
								return lib.filter.cardSavable(i, player, player);
							}, "hs")) res = -res / 2;
							if (player !== target)
								res += get.effect(player, { name: "losehp" }, player, player);
							return res;
						},
						target(player, target) {
							return get.damageEffect(target, player, target);
						},
					},
				},
			},
			//张春华
			starliangyan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				chooseButton: {
					dialog(event, player) {
						const name = get.translation(event.result.targets[0]);
						const list = [
							"你摸一张牌，其弃置一张牌",
							"你弃置一张牌，其摸一张牌",
							"你摸两张牌，其弃置两张牌",
							"你弃置两张牌，其摸两张牌",
						].map((item, i) => [i, item]);
						const dialog = ui.create.dialog(
							`梁燕：请选择你与${name}要执行的选项`,
							[list.slice(0, 2), "tdnodes"],
							[list.slice(2, 4), "tdnodes"],
							"hidden"
						);
						return dialog;
					},
					filter(button, player) {
						const link = button.link;
						if (link % 2 === 0) return true;
						return player.countDiscardableCards(player, "he") >= (link + 1) / 2;
					},
					check(button) {
						const player = get.player(),
							target = get.event().getParent().result.targets[0];
						const link = button.link;
						if (get.attitude(player, target) <= 0 && link === 2) return 100;
						const ph = player.countCards("h"),
							th = target.countCards("h");
						if (link % 2 === 0) {
							const num = link / 2 + 1;
							if (ph + num === th - num) return 10;
						} else {
							const num = (link + 1) / 2;
							if (ph - num === th + num) return 10;
						}
						return 5;
					},
					backup(links) {
						return {
							audio: "starliangyan",
							target: get.event().result.targets[0],
							link: links[0],
							filterTarget(card, player, target) {
								return target === lib.skill.starliangyan_backup.target;
							},
							selectTarget: -1,
							async content(content, trigger, player) {
								const target = lib.skill.starliangyan_backup.target;
								const link = lib.skill.starliangyan_backup.link;
								const num = link <= 1 ? 1 : 2;
								const fn = ["draw", "chooseToDiscard"];
								if (link % 2 === 1) fn.reverse();
								await player[fn[0]](num, true, "he");
								await target[fn[1]](num, true, "he");
								if (player.countCards("h") === target.countCards("h")) {
									const skipper = [player, target][link % 2];
									skipper.skip("phaseDiscard");
									game.log(skipper, "跳过了下一个", "#y弃牌阶段");
								}
							},
						};
					},
					prompt(links) {
						return "点击“确定”以执行效果";
					},
				},
				subSkill: {
					backup: {},
				},
				ai: {
					order(item, player) {
						if (
							!game.hasPlayer(
								(current) => current !== player && get.attitude(player, current) > 0
							) &&
							game.hasPlayer((current) => get.attitude(player, current) <= 0)
						)
							return 10;
						if (
							game.hasPlayer((current) => {
								const del = player.countCards("h") - current.countCards("h"),
									toFind = [2, 4].find((num) => Math.abs(del) === num);
								if (toFind === 4 && del < 0 && get.attitude(player, current) <= 0) {
									return true;
								}
								return false;
							})
						)
							return 10;
						return 1;
					},
					result: {
						target(player, target) {
							const del = player.countCards("h") - target.countCards("h"),
								toFind = [2, 4].find((num) => Math.abs(del) === num);
							if (toFind) {
								return (
									(-del *
										(get.attitude(player, target) * Math.min(3, target.countCards("h"))) *
										toFind) /
									10
								);
							}
							return -1;
						},
					},
				},
			},
			starminghui: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				filter(event, player) {
					return player.isMinHandcard() || player.isMaxHandcard();
				},
				direct: true,
				async content(event, trigger, player) {
					let logged = false;
					if (player.isMinHandcard()) {
						const card = new lib.element.VCard({
							name: "sha",
						});
						const result = await player
							.chooseUseTarget(
								`###${get.prompt("starminghui")}###视为使用一张无距离限制的【杀】`,
								card,
								false,
								"nodistance"
							)
							.set("logSkill", "starminghui")
							.forResult();
						if (result.bool) logged = true;
					}
					const num = player.countCards("h");
					if (player.isMaxHandcard() && num > 0) {
						const maxNum = game
							.findPlayer((current) => {
								if (current === player) return false;
								return !game.hasPlayer((current2) => {
									if (current2 === player) return false;
									return current2.countCards("h") > current.countCards("h");
								});
							})
							.countCards("h");
						const leastDiscardNum = num - maxNum + 1;
						const prompt = logged ? `是否将手牌弃置至不为最多？` : get.prompt("starminghui");
						const next = player
							.chooseToDiscard(
								prompt,
								`弃置至少${get.cnNumber(leastDiscardNum)}张手牌，然后你令一名角色回复1点体力`
							)
							.set("selectCard", [leastDiscardNum, Infinity])
							.set(
								"goon",
								game.hasPlayer((current) =>
									get.recoverEffect(current, get.player(), get.player())
								)
							)
							.set("ai", (card) => {
								if (!get.event("goon")) return 0;
								if (get.tag(card, "recover")) return 0;
								if (ui.selected.cards.length === get.event("selectCard")[0] - 1)
									return 6.5 - get.value(card);
								return 4 - get.value(card);
							});
						if (!logged) next.set("logSkill", "starminghui");
						const result = await next.forResult();
						if (!result.bool) return;
						if (!player.isUnderControl(true) && !player.isOnline()) await game.asyncDelayx();
						const [bool, targets] = await player
							.chooseTarget("令一名角色回复1点体力")
							.set("ai", (target) => get.recoverEffect(target, get.player(), get.player()))
							.forResult("bool", "targets");
						if (bool) {
							const target = targets[0];
							player.line(target, "green");
							await target.recover();
						}
					}
				},
			},
			//星袁绍
			starxiaoyan: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: ["enterGame" /*,'logSkill'*/],
				},
				filter(event, player) {
					if (!game.hasPlayer((current) => current != player)) return false;
					//if(event.name=='logSkill'&&evt.skill!='starjiaowang') return false;
					return event.name != "phase" || game.phaseNumber == 0;
				},
				forced: true,
				async content(event, trigger, player) {
					let targets = game.filterPlayer((current) => current != player);
					player.line(targets);
					for (const target of targets) await target.damage("fire");
					targets = targets.filter((i) => i.isIn());
					if (targets.length) {
						for (const target of targets) {
							if (!target.countCards("he")) continue;
							const {
								result: { bool },
							} = await target
								.chooseToGive("he", player)
								.set(
									"prompt",
									"是否交给" +
										get.translation(player) +
										"一张牌" +
										(target.isDamaged() ? "并回复1点体力" : "") +
										"？"
								)
								.set("ai", (card) => {
									const target = get.event("player"),
										player = get.event("target");
									const att = get.attitude(target, player);
									if (get.recoverEffect(target, target, target) <= 0) {
										if (att <= 0) return -get.value(card);
										return 0;
									}
									return 7 - get.value(card);
								})
								.set("target", player);
							if (bool) await target.recover();
						}
					}
				},
			},
			starzongshi: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					const cards = player.getCards("h", (card) => {
						const type = get.type(card, null, player);
						if (type != "basic" && type != "trick") return false;
						return (
							lib.filter.cardUsable(card, player) &&
							game.hasPlayer((target) => {
								return lib.filter.targetEnabled2(
									card,
									player,
									target
								) /*&&lib.filter.targetInRange(card,player,target)*/;
							})
						);
					});
					if (!cards.length) return false;
					return cards.some((card) => {
						const cardss = player.getCards(
							"h",
							(cardx) => card != cardx && get.suit(card, player) == get.suit(cardx, player)
						);
						return (
							cardss.length &&
							!cardss.some(
								(cardx) => !game.checkMod(cardx, player, "unchanged", "cardEnabled2", player)
							)
						);
					});
				},
				filterCard(card, player) {
					if (ui.selected.cards.length) return false;
					const cards = player.getCards("h", (card) => {
						const type = get.type(card, null, player);
						if (type != "basic" && type != "trick") return false;
						return (
							lib.filter.cardUsable(card, player) &&
							game.hasPlayer((target) => {
								return lib.filter.targetEnabled2(
									card,
									player,
									target
								) /*&&lib.filter.targetInRange(card,player,target)*/;
							})
						);
					});
					if (!cards.includes(card)) return false;
					const cardss = player.getCards(
						"h",
						(cardx) => card != cardx && get.suit(card, player) == get.suit(cardx, player)
					);
					return (
						cardss.length &&
						!cardss.some(
							(cardx) => !game.checkMod(cardx, player, "unchanged", "cardEnabled2", player)
						)
					);
				},
				selectCard: [1, 2],
				complexCard: true,
				check(card) {
					const player = get.event("player"),
						select = get.copy(get.info(card).selectTarget);
					let range;
					if (select == undefined) range = [1, 1];
					else if (typeof select == "number") range = [select, select];
					else if (get.itemtype(select) == "select") range = select;
					else if (typeof select == "function") range = select(card, player);
					game.checkMod(card, player, range, "selectTarget", player);
					const cards = player.getCards(
						"h",
						(cardx) => card != cardx && get.suit(card, player) == get.suit(cardx, player)
					);
					let targets = game.filterPlayer(
						(target) =>
							lib.filter.targetEnabled2(
								card,
								player,
								target
							) /*&&lib.filter.targetInRange(card,player,target)*/ &&
							get.effect(target, card, player, player) > 0
					);
					const max = range[1],
						max2 = Math.min(cards.length, targets.length);
					if (max > max2) return 0;
					targets = targets
						.sort(
							(a, b) =>
								get.effect(b, card, player, player) - get.effect(a, card, player, player)
						)
						.slice(0, max2);
					const sum = targets.reduce(
						(num, target) => num + get.effect(target, card, player, player),
						0
					);
					if (max == -1) {
						if (
							game
								.filterPlayer((target) => {
									return lib.filter.targetEnabled2(
										card,
										player,
										target
									) /*&&lib.filter.targetInRange(card,player,target)*/;
								})
								.reduce((num, target) => num + get.effect(target, card, player, player), 0) >
							sum
						)
							return 0;
					}
					return sum;
				},
				position: "h",
				discard: false,
				lose: false,
				delay: false,
				async content(event, trigger, player) {
					const card = event.cards[0],
						cards = player.getCards(
							"h",
							(cardx) => card != cardx && get.suit(card, player) == get.suit(cardx, player)
						);
					await player.showCards([card], get.translation(player) + "发动了【纵势】");
					const cardx = new lib.element.VCard({
						name: get.name(card, player),
						nature: get.nature(card, player),
						cards: cards,
					});
					const {
						result: { bool, targets },
					} = await player
						.chooseTarget((card, player, target) => {
							//return player.canUse(get.event('cardx'),target);
							return lib.filter.targetEnabled2(
								get.event("cardx"),
								player,
								target
							) /*&&lib.filter.targetInRange(get.event('cardx'),player,target)*/;
						}, true)
						.set("cardx", cardx)
						.set("selectTarget", [1, cards.length])
						.set(
							"prompt",
							"请选择" +
								(game.hasNature(cardx) ? get.translation(get.nature(cardx)) : "") +
								"【" +
								get.translation(cardx) +
								"】（" +
								get.translation(cards) +
								"）的目标"
						)
						.set("ai", (target) => {
							const player = get.event("player"),
								card = get.event("cardx");
							return get.effect(target, card, player, player);
						});
					if (bool) player.useCard(cardx, cards, targets.sortBySeat());
				},
				ai: {
					order: 9,
					result: { player: 1 },
				},
			},
			starjiaowang: {
				audio: 2,
				trigger: { global: "roundStart" },
				filter(event, player) {
					if (game.roundNumber <= 1) return false;
					const history = game.getAllGlobalHistory();
					for (let i = history.length - 2; i >= 0; i--) {
						const evt = history[i]["everything"];
						for (let j = evt.length - 1; j >= 0; j--) {
							if (evt[j].name == "die" && evt[j].getParent(3).name != "starxiaoyan")
								return false;
						}
						if (history[i].isRound) break;
					}
					return true;
				},
				forced: true,
				async content(event, trigger, player) {
					await player.loseHp();
					if (game.hasPlayer((current) => current != player))
						player.useResult({ skill: "starxiaoyan" }, event);
				},
			},
			staraoshi: {
				audio: 2,
				zhuSkill: true,
				global: "staraoshi_global",
				subSkill: {
					global: {
						audio: "staraoshi",
						forceaudio: true,
						enable: "phaseUse",
						filter(event, player) {
							return (
								player.group == "qun" &&
								game.hasPlayer((target) =>
									lib.skill.staraoshi.subSkill.global.filterTarget(null, player, target)
								)
							);
						},
						filterTarget(card, player, target) {
							return target != player && target.hasZhuSkill("staraoshi");
						},
						prompt() {
							const player = get.event("player");
							const targets = game.filterPlayer((target) =>
								lib.skill.staraoshi.subSkill.global.filterTarget(null, player, target)
							);
							return (
								"交给" +
								get.translation(targets) +
								(targets.length > 1 ? "中的一人" : "") +
								"一张手牌，然后其可以发动一次【纵势】"
							);
						},
						filterCard: true,
						check(card) {
							const player = get.event("player");
							const target = game
								.filterPlayer((target) => {
									return lib.skill.staraoshi.subSkill.global.filterTarget(
										null,
										player,
										target
									);
								})
								.sort((a, b) => b.countCards("h") - a.countCards("h"))[0];
							return target.getUseValue(card);
						},
						discard: false,
						lose: false,
						delay: false,
						usable: 1,
						async content(event, trigger, player) {
							const target = event.target,
								info = get.info("starzongshi");
							await player.give(event.cards, target);
							const {
								result: { bool, cards },
							} = await target
								.chooseCard(info.position, (card, player) => {
									return get.event("info").filterCard(card, player);
								})
								.set("info", info)
								.set("ai", (card) => get.event("info").check(card))
								.set("selectCard", [1, 2])
								.set("complexCard", true)
								.set("prompt", get.prompt("starzongshi"))
								.set("prompt2", lib.translate.starzongshi_info.slice(8).slice(0, -1));
							if (bool) target.useResult({ skill: "starzongshi", cards: cards }, event);
						},
						ai: {
							order: 9,
							result: {
								target(player, target) {
									return target.countCards("h") + 1;
								},
							},
						},
					},
				},
			},
			//星董卓
			starweilin: {
				audio: 2,
				trigger: { source: "damageBegin1" },
				filter: function (event, player) {
					return (
						!event.player.getHistory("damage").length &&
						player.getHistory("useCard").length >= event.player.getHp()
					);
				},
				forced: true,
				logTarget: "player",
				content: function () {
					trigger.num++;
				},
			},
			starzhangrong: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return player.getHp() > 0;
				},
				direct: true,
				content: function* (event, map) {
					var player = map.player;
					var str = get.cnNumber(player.getHp());
					var choiceList = [
							"令至多" + str + "名体力值大于等于你的角色各失去1点体力",
							"令至多" + str + "名手牌数大于等于你的角色各弃置一张手牌",
						],
						list = ["cancel2"];
					if (
						game.hasPlayer((target) => {
							if (target == player)
								return player.countCards("h", (card) =>
									lib.filter.cardDiscardable(card, player)
								);
							return target.countCards("h") >= Math.max(1, player.countCards("h"));
						})
					)
						list.unshift("弃牌");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					list.unshift("扣血");
					var result = yield player
						.chooseControl(list)
						.set(
							"prompt",
							"###" +
								get.prompt("starzhangrong") +
								"###选择其中一项令任意名符合条件的角色执行，然后你摸等量的牌，回合结束时，若这些角色中有本回合未受到过伤害的角色，则你失去1点体力"
						)
						.set("ai", () => {
							var player = _status.event.player;
							var controls = _status.event.controls.slice();
							/*
						var cards=player.getCards('hes',card=>get.tag(card,'damage')&&player.hasValueTarget(card));
						var cardx=cards.filter(card=>get.name(card)=='sha');
						cardx.sort((a,b)=>player.getUseValue(b)-player.getUseValue(a));
						cardx=cardx.slice(Math.min(cardx.length,player.getCardUsable('sha')),cardx.length);
						cards.removeArray(cardx);
						*/
							var targets1 = game.filterPlayer(
								(target) =>
									get.attitude(player, target) < 0 &&
									target.getHp() >= player.getHp() &&
									get.effect(target, { name: "losehp" }, player, player) >
										0 /*&&cards.some(card=>player.canUse(card,target))*/
							);
							_status.starzhangrong_check = true;
							var targets2 = game.filterPlayer(
								(target) =>
									get.attitude(player, target) < 0 &&
									target.countCards("h") >= Math.max(1, player.countCards("h")) &&
									get.effect(target, { name: "guohe_copy2" }, player, player) >
										0 /*&&cards.some(card=>player.canUse(card,target))*/
							);
							delete _status.starzhangrong_check;
							[targets1, targets2].forEach((list) => {
								list.sort((a, b) => get.damageEffect(b) - get.damageEffect(a));
								list = list.slice(0, Math.min(player.getHp() /*,cards.length*/));
							});
							if (!controls.includes("弃牌")) return 1 - get.sgn(targets1.length);
							return Math.max(0, get.sgn(targets2.length - targets1.length));
						})
						.set("choiceList", choiceList);
					if (result.control != "cancel2") {
						var choice = result.index;
						var result2 = yield player
							.chooseTarget(
								[1, player.getHp()],
								"请选择【掌戎】的目标",
								"令至多" +
									str +
									"名" +
									(choice ? "手牌数" : "体力值") +
									"大于你的角色各" +
									(choice ? "弃置一张手牌" : "失去1点体力"),
								(card, player, target) => {
									var name = _status.event.card.name;
									if (name == "guohe_copy2") {
										if (target == player)
											return player.countCards("h", (card) =>
												lib.filter.cardDiscardable(card, player)
											);
										return target.countCards("h") >= Math.max(1, player.countCards("h"));
									}
									return target.getHp() >= player.getHp();
								}
							)
							.set("ai", (target) => {
								var player = _status.event.player;
								if (get.attitude(player, target) >= 0) return 0;
								return get.effect(target, _status.event.card, player, player);
							})
							.set("card", { name: choice ? "guohe_copy2" : "losehp" });
						if (result2.bool) {
							var targets = result2.targets.sortBySeat();
							player.logSkill("starzhangrong", targets);
							targets.forEach((target) => {
								target.addTempSkill("starzhangrong_threaten");
								if (choice) target.chooseToDiscard("h", true);
								else target.loseHp();
							});
							player.draw(targets.length);
							player
								.when("phaseEnd")
								.then(() => {
									targets.forEach((target) => target.removeSkill("starzhangrong_threaten"));
									var targetx = targets.filter(
										(target) => !target.getHistory("damage").length
									);
									if (targetx.length) {
										targetx.forEach((target) => target.chat("乐"));
										player.popup("杯具");
										player.loseHp();
										return;
									}
									player.popup("洗具");
								})
								.vars({ targets: targets });
						}
					}
				},
				global: "starzhangrong_check",
				subSkill: {
					check: {
						mod: {
							canBeDiscarded: function (card, player, target) {
								if (!_status.starzhangrong_check) return;
								if (player.hasSkill("starzhangrong") && get.position(card) != "h")
									return false;
							},
						},
					},
					threaten: {
						charlotte: true,
						trigger: { player: "damageEnd" },
						firstDo: true,
						forced: true,
						popup: false,
						content: function () {
							player.removeSkill("starzhangrong_threaten");
						},
						ai: { threaten: 114514 + 1919810 },
						mark: true,
						markimage: "image/card/sha.png",
						intro: { content: "我还没受到伤害哟！" },
					},
				},
			},
			starhaoshou: {
				unique: true,
				audio: 2,
				trigger: { global: "useCardAfter" },
				filter: function (event, player) {
					return (
						event.player != player &&
						event.card.name == "jiu" &&
						player.isDamaged() &&
						event.player.group == "qun"
					);
				},
				direct: true,
				zhuSkill: true,
				content: function* (event, map) {
					var player = map.player,
						target = map.trigger.player;
					var result = yield target
						.chooseBool(
							get.prompt("starhaoshou", player),
							"令" + get.translation(player) + "回复1点体力"
						)
						.set("choice", get.recoverEffect(player, target, target) > 0);
					if (result.bool) {
						target.line(player);
						player.logSkill("starhaoshou");
						player.recover();
					}
				},
				//global:'starhaoshou_global',
				subSkill: {
					global: {
						audio: "starhaoshou",
						forceaudio: true,
						filter: function (event, player) {
							if (
								!player.countCards("hes", (card) => {
									if (get.position(card) == "h" && _status.connectMode) return true;
									return get.name(card) == "jiu";
								})
							)
								return false;
							return (
								event.type == "dying" &&
								event.dying &&
								event.dying != player &&
								event.dying.hp <= 0 &&
								event.dying.hasZhuSkill("starhaoshou") &&
								player.group == "qun"
							);
						},
						filterCard: function (card, player) {
							return get.name(card) == "jiu";
						},
						check: () => 1,
						viewAs: { name: "tao" },
						position: "hes",
						prompt: function () {
							return "将一张【酒】当作【桃】对" + get.translation(_status.event.dying) + "使用";
						},
						ai: {
							save: true,
							skillTagFilter: function (player, arg, target) {
								if (
									!player.countCards("hes", (card) => {
										if (get.position(card) == "h" && _status.connectMode) return true;
										return get.name(card) == "jiu";
									}) ||
									player == target ||
									!target.hasSkill("starhaoshou") ||
									player.group != "qun"
								)
									return false;
							},
						},
					},
				},
			},
			//星袁术
			starcanxi: {
				audio: 2,
				trigger: {
					global: ["phaseBefore", "roundStart"],
					player: "enterGame",
				},
				filter: function (event, player, name) {
					if (name == "roundStart")
						return player.getSkills().some((skill) => skill.indexOf("starcanxi_") == 0);
					return event.name != "phase" || game.phaseNumber == 0;
				},
				forced: true,
				content: function () {
					"step 0";
					if (event.triggername != "roundStart") {
						var list = game.filterPlayer().reduce((list, target) => list.add(target.group), []);
						list.sort((a, b) => lib.group.indexOf(a) - lib.group.indexOf(b));
						let lacks = lib.group.filter(group => group != "shen" && !list.includes(group));
						list.forEach((group) => lib.skill.starcanxi.create(group, player));
						if (lacks.length) player.gainMaxHp(lacks.length);
						event.finish();
						return;
					}
					"step 1";
					var groups = player.getSkills().filter((skill) => skill.indexOf("starcanxi_") == 0);
					groups = groups.map((group) => group.slice(10));
					groups.sort((a, b) => lib.group.indexOf(a) - lib.group.indexOf(b));
					var map = {};
					groups.forEach((group) => (map[group] = get.translation(group + "2")));
					event.map = map;
					player
						.chooseButton(
							[
								'###残玺###<div class="text center">请选择势力和效果</div>',
								[Object.values(map), "tdnodes"],
								[
									[
										[
											"wangsheng",
											'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【妄生】</div><div>被选择势力角色每回合首次造成的伤害+1且计算与其他角色间的距离-1</div></div>',
										],
										[
											"xiangsi",
											'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【向死】</div><div>其他被选择势力角色每回合首次回复体力后失去1点体力且每回合对你使用的第一张牌无效</div></div>',
										],
									],
									"textbutton",
								],
							],
							2,
							true
						)
						.set("filterButton", function (button) {
							var list = ["wangsheng", "xiangsi"];
							if (!ui.selected.buttons.length) return true;
							return list.includes(ui.selected.buttons[0].link) != list.includes(button.link);
						})
						.set("ai", function (button) {
							var player = _status.event.player;
							var map = _status.event.map,
								list = ["wangsheng", "xiangsi"];
							var getNum = function (group, effect) {
								var num = 0,
									sgn = effect == "wangsheng" ? 1.05 : -1;
								game.countPlayer(function (current) {
									if (!(current == player && sgn == -1))
										num += get.sgn(get.attitude(player, current)) * sgn;
								});
								return num;
							};
							var listx = [];
							Object.keys(map).forEach((group) =>
								list.forEach((effect) => listx.add([group, effect]))
							);
							listx.sort((a, b) => getNum(b[0], b[1]) - getNum(a[0], a[1]));
							if (button.link == map[listx[0][0]] || button.link == listx[0][1]) return 1;
							return 0;
						})
						.set("map", map);
					"step 2";
					if (result.bool) {
						if (!Object.keys(event.map).some((group) => event.map[group] == result.links[0]))
							result.links.reverse();
						player.popup(result.links[0]);
						var group = Object.keys(event.map).find(
							(group) => event.map[group] == result.links[0]
						);
						var skill = "starcanxi_" + result.links[1];
						player.popup(skill);
						game.log(
							player,
							"选择了",
							"#g" + result.links[0],
							"、",
							"#y" + get.translation(skill)
						);
						player.addTempSkill(skill, "roundStart");
						player.markAuto(skill, [group]);
					}
				},
				create: function (group, player) {
					const skill = "starcanxi_" + group;
					get.info("starcanxi").createSkill(skill);
					if (!_status.postReconnect.starcanxi) {
						_status.postReconnect.starcanxi = [get.info("starcanxi").createSkill, []];
					}
					_status.postReconnect.starcanxi[1].add(skill);
					player.addSkill(skill);
				},
				createSkill(skill) {
					if (!lib.skill[skill])
						game.broadcastAll((skill) => {
							const group = skill.slice("starcanxi_".length);
							lib.skill[skill] = {
								mark: true,
								charlotte: true,
								onremove: function (player) {
									player.addMark("starpizhi", 1, false);
								},
								intro: { content: "玉玺的一角" },
							};
							lib.translate[skill] = "残玺·" + get.translation(group + "2");
							lib.skill[skill].marktext = get.translation(group);
							lib.translate[skill + "_bg"] = get.translation(group);
						}, skill);
				},
				subSkill: {
					wangsheng: {
						charlotte: true,
						onremove: true,
						trigger: { global: "damageBegin1" },
						filter: function (event, player) {
							if (
								!event.source ||
								!player.getStorage("starcanxi_wangsheng").includes(event.source.group)
							)
								return false;
							return !event.source.getHistory("sourceDamage").length;
						},
						forced: true,
						logTarget: "source",
						content: function () {
							trigger.num++;
						},
						group: "starcanxi_remove",
						global: "starcanxi_effect",
						intro: { content: "$势力角色每回合首次造成的伤害+1且计算与其他角色间的距离-1" },
					},
					xiangsi: {
						charlotte: true,
						onremove: true,
						trigger: { global: "recoverEnd" },
						filter: function (event, player) {
							if (
								!player.getStorage("starcanxi_xiangsi").includes(event.player.group) ||
								event.player == player
							)
								return false;
							return (
								game.getGlobalHistory("changeHp", function (evt) {
									return evt.getParent().name == "recover" && evt.player == event.player;
								}).length == 1
							);
						},
						forced: true,
						logTarget: "player",
						content: function () {
							trigger.player.loseHp();
						},
						group: ["starcanxi_remove", "starcanxi_cancel"],
						global: "starcanxi_effect",
						intro: {
							content:
								"其他$势力角色每回合首次回复体力后失去1点体力且每回合对你使用的第一张牌无效",
						},
					},
					cancel: {
						charlotte: true,
						trigger: { global: "useCard" },
						filter: function (event, player) {
							if (
								!event.targets ||
								!event.targets.includes(player) ||
								!player.getStorage("starcanxi_xiangsi").includes(event.player.group) ||
								event.player == player
							)
								return false;
							return (
								event.player
									.getHistory(
										"useCard",
										(evt) => evt.targets && evt.targets.includes(player)
									)
									.indexOf(event) == 0
							);
						},
						forced: true,
						logTarget: "player",
						content: function () {
							trigger.excluded.add(player);
						},
					},
					effect: {
						mod: {
							globalFrom: function (from, to, distance) {
								if (
									game.hasPlayer((target) =>
										target.getStorage("starcanxi_wangsheng").includes(from.group)
									)
								)
									return distance - 1;
							},
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									if (get.itemtype(card) !== "card" || !player || !target) return;
									var targets = game.filterPlayer(
										(targetx) =>
											targetx != player &&
											targetx.getStorage("starcanxi_xiangsi").includes(player.group)
									);
									if (!targets.length) return;
									if (get.tag(card, "recover") && target == player && target.hp > 2)
										return 0;
									if (get.tag(card, "damage") && targets.includes(target)) return 0.5;
								},
							},
						},
					},
					remove: {
						charlotte: true,
						trigger: { player: "die" },
						forced: true,
						popup: false,
						firstDo: true,
						forceDie: true,
						content: function () {
							player.removeSkill("starcanxi_wangsheng");
							player.removeSkill("starcanxi_xiangsi");
						},
					},
				},
			},
			starpizhi: {
				audio: 2,
				trigger: { player: "phaseEnd", global: "die" },
				filter: function (event, player) {
					if (event.name == "phase") return player.hasMark("starpizhi");
					if (!game.hasPlayer(current => current != event.player && current.group == event.player.group)) return true;
					if (!player.getStorage("starcanxi_wangsheng").includes(event.player.group) && !player.getStorage("starcanxi_xiangsi").includes(event.player.group)) return false;
					var groups = player.getSkills().filter((skill) => skill.indexOf("starcanxi_") == 0);
					groups = groups.map((group) => group.slice(10));
					return groups.includes(event.player.group);
				},
				forced: true,
				content: function () {
					"step 0";
					if (trigger.name == "die") {
						var skills = player
							.getSkills()
							.filter(
								(skill) =>
									skill.indexOf("starcanxi_") == 0 &&
									skill.slice(10) == trigger.player.group
							);
						player.removeSkill(skills);
					}
					"step 1";
					player.draw(player.countMark("starpizhi"));
					"step 2"
					if (player.isDamaged() && trigger.name == "die") player.recover();
				},
				intro: { content: "已失去#个“玺角”" },
				ai: { combo: "starcanxi" },
			},
			starzhonggu: {
				unique: true,
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				forced: true,
				zhuSkill: true,
				content: function () {
					var num =
						game.roundNumber >= game.countPlayer((current) => current.group == "qun") ? 2 : -1;
					trigger.num += num;
				},
			},
			//星曹仁
			starsujun: {
				audio: 2,
				trigger: { player: "useCard" },
				filter: function (event, player) {
					return player.countCards("h", { type: "basic" }) * 2 == player.countCards("h");
				},
				frequent: true,
				locked: false,
				content: function () {
					player.draw(2);
				},
				mod: {
					aiOrder: function (player, card, num) {
						var num = player.countCards("h") - 2 * player.countCards("h", { type: "basic" });
						if (Math.abs(num) != 1) return;
						if (num == 1 && get.type(card) != "basic") return num + 10;
						if (num == -1 && get.type(card) == "basic") return num + 10;
					},
				},
			},
			starlifeng: {
				audio: 2,
				enable: "chooseToUse",
				filter: function (event, player) {
					if (
						!event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) &&
						!event.filterCard(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event)
					)
						return false;
					return player.hasCard((card) => {
						return !player.getStorage("starlifeng_count").includes(get.color(card, player));
					}, "hs");
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						if (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event))
							list.push(["基本", "", "sha"]);
						if (event.filterCard(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event))
							list.push(["锦囊", "", "wuxie"]);
						return ui.create.dialog("砺锋", [list, "vcard"]);
					},
					check: function (button) {
						var player = _status.event.player;
						return _status.event.getParent().type == "phase"
							? player.getUseValue({ name: button.link[2] })
							: 1;
					},
					backup: function (links, player) {
						return {
							filterCard: function (card, player) {
								return !player
									.getStorage("starlifeng_count")
									.includes(get.color(card, player));
							},
							precontent: function () {
								delete event.result.skill;
								player.logSkill("starlifeng");
								event.getParent().addCount = false;
							},
							popname: true,
							viewAs: {
								name: links[0][2],
							},
							ai1: function (card) {
								var player = _status.event.player;
								var num =
									player.countCards("h") - 2 * player.countCards("h", { type: "basic" });
								if (player.hasSkill("starsujin") && Math.abs(num) == 1) {
									if (num == 1 && get.type(card) != "basic") return 15 - get.value(card);
									if (num == -1 && get.type(card) == "basic") return 15 - get.value(card);
								}
								return 7 - get.value(card);
							},
						};
					},
					prompt: function (links) {
						return (
							"将一张本回合未使用过的颜色的手牌当做【" + get.translation(links[0][2]) + "】使用"
						);
					},
				},
				hiddenCard: function (player, name) {
					if (name == "wuxie")
						return player.countCards("hs", (card) => {
							return (
								!player.getStorage("starlifeng_count").includes(get.color(card, player)) ||
								_status.connectMode
							);
						});
				},
				ai: {
					respondSha: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg == "respond") return false;
						if (
							!player.countCards("hs", (card) => {
								return (
									!player
										.getStorage("starlifeng_count")
										.includes(get.color(card, player)) || _status.connectMode
								);
							})
						)
							return false;
					},
					order: 10,
					result: { player: 1 },
				},
				group: "starlifeng_mark",
				subSkill: {
					mark: {
						charlotte: true,
						trigger: { global: "useCard1" },
						filter: function (event, player) {
							return !player.getStorage("starlifeng_count").includes(get.color(event.card));
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							player.addTempSkill("starlifeng_count");
							player.markAuto("starlifeng_count", [get.color(trigger.card)]);
						},
					},
					count: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			//星孙尚香
			starsaying: {
				audio: 2,
				enable: "chooseToUse",
				hiddenCard: function (player, name) {
					if (player.getStorage('starsaying').includes(name)) return false;
					if (['shan', 'sha'].includes(name)) return player.countCards("hs", card => get.type(card) == "equip" && player.canEquip(card, true));
					if (['tao', 'jiu'].includes(name)) return player.countCards("e");
				},
				filter: function (event, player) {
					for (var name of ['shan', 'sha']) {
						if (player.getStorage('starsaying').includes(name)) continue;
						if (!player.countCards("hs", card => get.type(card) == "equip" && player.canEquip(card, true))) continue;
						if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
					}
					for (var name of ['tao', 'jiu']) {
						if (player.getStorage('starsaying').includes(name)) continue;
						if (!player.countCards("e")) continue;
						if (event.filterCard({ name: name, isCard: true }, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of ['shan', 'sha']) {
							if (player.getStorage('starsaying').includes(name)) continue;
							if (!player.countCards("hs", card => get.type(card) == "equip" && player.canEquip(card, true))) continue;
							if (event.filterCard({ name: name, isCard: true }, player, event)) list.push(['基本', '', name]);
						}
						for (var name of ['tao', 'jiu']) {
							if (player.getStorage('starsaying').includes(name)) continue;
							if (!player.countCards("e")) continue;
							if (event.filterCard({ name: name, isCard: true }, player, event)) list.push(['基本', '', name]);
						}
						return ui.create.dialog("飒影", [list, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], isCard: true };
						return player.getUseValue(card);
					},
					backup: function (links, player) {
						return {
							check: function (card) {
								return 1 / Math.max(0.1, get.value(card));
							},
							filterCard: function (card) {
								let bool = ['sha', 'shan'].includes(links[0][2]);
								if (bool) return get.position(card) != 'e' && get.type(card) == 'equip' && player.canEquip(card, true);
								return get.position(card) == 'e';
							},
							position: 'hes',
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: "none",
								number: null,
								isCard: true,
							},
							popname: true,
							ignoreMod: true,
							precontent: function () {
								player.logSkill("starsaying");
								var card = event.result.cards[0];
								player.$give(card, player, false);
								if (['sha', 'shan'].includes(event.result.card.name)) player.equip(card);
								else player.gain(card, 'gain2');
								var viewAs = {
									name: event.result.card.name,
									nature: event.result.card.nature,
								};
								event.result.card = viewAs;
								event.result.cards = [];
								if (!player.storage.starsaying) {
									player.when({ global: "roundStart" }).then(() => {
										delete player.storage.starsaying;
									});
								}
								player.markAuto("starsaying", viewAs.name);
							},
						};
					},
					prompt: function (links, player) {
						var str = ['sha', 'shan'].includes(links[0][2]) ? "使用一张装备牌" : "获得装备区里的一张牌";
						return str + "，视为使用" + get.translation(links[0][3] || "") + get.translation(links[0][2]);
					},
				},
				ai: {
					order: function () {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard({ name: "jiu" }, player, event) && get.effect(player, { name: "jiu" }) > 0) {
							return 6.3;
						}
						return 6.1;
					},
					skillTagFilter: function (player, tag, arg) {
						let name = tag == 'respondSha' ? 'sha' : 'shan';
						if (player.getStorage('starsaying').includes(name)) return false;
						if (!player.countCards('hs', card => get.type(card) == 'equip' && player.canEquip(card, true))) {
							return false;
						}
					},
					result: {
						player: 1,
					},
					respondSha: true,
					respondShan: true,
				},
			},
			starjiaohao:{
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") && game.hasPlayer(current => lib.skill.starjiaohao.filterTarget(null, player, current));
				},
				filterTarget: function (card, player, target) {
					return player.canCompare(target) && player.countCards('e') >= target.countCards('e');
				},
				async content(event, trigger, player) {
					const target = event.target;
					const result = await player.chooseToCompare(target).forResult();
					if (result.winner) {
						const cards = [result.player, result.target].filterInD("d");
						const result2 = await player.chooseControl('cancel2').set('choiceList', [
							'令' + get.translation(result.winner) + '获得' + (cards.length ? get.translation(cards) : '空气'),
							'令' + get.translation(result.winner) + '使用一张杀',
						]).set('ai', function () {
							return _status.event.check;
						}).set("check", function () {
							if (get.attitude(player, result.winner) <= 0) return 'cancel2';
							if (!game.hasPlayer(current => {
								return result.winner.canUse({ name: 'sha' }, current, false) && get.effect(current, { name: 'sha' }, result.winner, result.winner) > 0;
							}) || !cards.length) return '选项一';
							let eff1 = result.winner.getUseValue({ name: 'sha' }), eff2 = 0;
							for (let card of cards) {
								eff2 += get.value(card, result.winner);
							}
							if (eff1 > eff2 * 2.5) return '选项二';
							return '选项一';
						}()).forResult();
						switch (result2.control) {
							case '选项二': {
								const next = result.winner.chooseToUse("是否使用一张杀？", { name: "sha" }).set("filterTarget", function (card, player, target) {
									return lib.filter.filterTarget.apply(this, arguments);
								}).set("addCount", false);
								await next;
								break;
							}
							case '选项一': {
								await result.winner.gain(cards, 'gain2');
								break;
							}
						}
					}
				},
				ai: {
					order: 5,
					result: {
						target: function (player, target) {
							var hs = player.getCards("h").sort(function (a, b) {
								return b.number - a.number;
							});
							var ts = target.getCards("h").sort(function (a, b) {
								return b.number - a.number;
							});
							if (!hs.length || !ts.length) return 0;
							if (hs[0].number <= ts[0].number) return 2;
							if (player.countCards("h") >= target.countCards("h")) return -10;
							return -1;
						},
					},
				},
			},
			//小程序刘伶
			mpjiusong: {
				audio: 2,
				enable: "chooseToUse",
				trigger: { global: "useCard" },
				filterCard: function (card) {
					return get.type2(card) == "trick";
				},
				viewAs: { name: "jiu" },
				position: "hs",
				viewAsFilter: function (player) {
					return player.hasCard((card) => get.type2(card) == "trick", "hs");
				},
				check: function (card) {
					if (get.itemtype(card) !== "card") return true;
					if (get.event().type == "dying") return 1 / Math.max(0.1, get.value(card));
					return 4 - get.value(card);
				},
				prompt: "将一张锦囊牌当【酒】使用",
				filter: function (event, player) {
					if (event.name == "chooseToUse")
						return player.hasCard((card) => get.type2(card) == "trick", "hs");
					return event.card.name == "jiu" && player.countMark("mpjiusong") < 3;
				},
				forced: true,
				locked: false,
				content: function () {
					player.addMark("mpjiusong");
				},
				marktext: "醉",
				intro: {
					name: "醉(酒颂/酕醄)",
					name2: "醉",
					content: "mark",
				},
			},
			mpmaotao: {
				audio: 2,
				trigger: { global: "useCardToPlayer" },
				filter: function (event, player) {
					if (event.targets.length != 1 || !event.isFirstTarget) return false;
					if (!["basic", "trick"].includes(get.type(event.card))) return false;
					return event.player != player && player.countMark("mpjiusong");
				},
				prompt2: function (event, player) {
					let list;
					if (get.type(event.card) != "delay")
						list = game.filterPlayer((current) => {
							return lib.filter.targetEnabled2(event.card, event.player, current);
						});
					else list = game.filterPlayer((current) => current.canAddJudge(event.card));
					const gainText = `${
						list.length > 1 && !player.storage.mpmaotao_gained ? `若新目标与原目标相同，你` : ""
					}${!player.storage.mpmaotao_gained ? "获得牌堆中的一张锦囊牌。" : ""}`;
					return `移去1枚“醉”${
						list.length > 1
							? `，令${get.translation(event.card)}目标改为${get.translation(
									list
								)}中的一名随机角色`
							: ""
					}。${gainText}`;
				},
				check: function (event, player) {
					const eff = get.effect(event.target, event.card, player, player);
					let list;
					if (get.type(event.card) != "delay")
						list = game.filterPlayer((current) => {
							return lib.filter.targetEnabled2(event.card, event.player, current);
						});
					else list = game.filterPlayer((current) => current.canAddJudge(event.card));
					let list2 = list.filter(
						(current) => get.effect(current, event.card, player, player) > eff
					);
					let list3 = list.filter((current) => get.effect(current, event.card, player, player) > 0);
					return (
						list2.length >= list.length / 2 ||
						(player.countMark("mpjiusong") >= 2 && list3.length >= list.length / 2)
					);
				},
				content: function () {
					player.removeMark("mpjiusong", 1);
					var list,
						oriTarget = trigger.target;
					trigger.targets.remove(oriTarget);
					trigger.getParent().triggeredTargets1.remove(oriTarget);
					trigger.untrigger();
					game.delayx();
					if (get.type(trigger.card) != "delay")
						list = game.filterPlayer((current) => {
							return lib.filter.targetEnabled2(trigger.card, trigger.player, current);
						});
					else list = game.filterPlayer((current) => current.canAddJudge(trigger.card));
					if (list.length) target = list.randomGet();
					trigger.targets.push(target);
					trigger.player.line(target, "thunder");
					game.log(trigger.card, "的目标被改为", target);
					if (target == oriTarget && !player.storage.mpmaotao_gained) {
						var card = get.cardPile2((card) => get.type2(card) == "trick");
						if (card) {
							if (!player.storage.mpmaotao_gained) {
								player.when({ global: "phaseAfter" }).then(() => {
									delete player.storage.mpmaotao_gained;
								});
								player.storage.mpmaotao_gained = true;
							}
							player.gain(card, "gain2");
						} else {
							// player.chat('没酒了！');
							// game.log('但是牌堆中已经没有','#y酒','了!');
							player.chat("没牌了！");
							game.log("但是牌堆中已经没有", "#y锦囊牌", "了!");
						}
					}
				},
				ai: {
					combo: "mpjiusong"
				},
			},
			mpbishi: {
				audio: 2,
				forced: true,
				trigger: { global: "useCard1" },
				filter: function (event, player) {
					if (get.type2(event.card) != "trick" || !get.tag(event.card, "damage")) return false;
					if (!lib.skill.xunshi.isXunshi(event.card)) return false;
					const targets = event.targets.slice();
					targets.remove(event.player);
					return targets.length == game.countPlayer() - 2;
				},
				content: function* () {},
				mod: {
					targetEnabled: function (card) {
						if (get.type2(card) == "trick" && get.tag(card, "damage") > 0) return false;
					},
				},
			},
			//十周年嵇康
			dcjuexiang: {
				derivation: "dccanyun",
				audio: "juexiang",
				trigger: { player: "die" },
				forced: true,
				locked: false,
				forceDie: true,
				skillAnimation: true,
				animationColor: "water",
				content: function () {
					"step 0";
					if (trigger.source && trigger.source.isIn()) {
						trigger.source.discard(trigger.source.getCards("e"));
						trigger.source.loseHp();
					}
					"step 1";
					player
						.chooseTarget("绝响：是否令一名其他角色获得技能〖残韵〗？", lib.filter.notMe)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set("forceDie", true);
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "thunder");
						target.addSkills("dccanyun");
					}
				},
			},
			dccanyun: {
				enable: "phaseUse",
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return lib.skill.dccanyun.filterTarget(null, player, target);
					});
				},
				filterTarget: function (card, player, target) {
					var list = [player];
					player.getAllHistory("useSkill", function (evt) {
						if (evt.skill == "dccanyun") list.addArray(evt.targets);
					});
					return !list.includes(target) && !ui.selected.targets.length;
				},
				selectTarget: [1, 2],
				targetprompt: function (target) {
					var pe = _status.event.player.countCards("e", function (card) {
						return ui.selected.cards.includes(card) == false;
					});
					var te = target.countCards("e");
					if (pe > te) return "回复体力";
					else if (pe == te) return "摸一张牌";
					else if (pe < te) return "失去体力";
				},
				filterCard: true,
				position: "he",
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
				usable: 1,
				content: function () {
					var pe = player.countCards("e");
					var te = target.countCards("e");
					if (pe > te) target.recover();
					else if (pe == te) target.draw();
					else if (pe < te) target.loseHp();
				},
				contentAfter: function () {
					if (player.hp == 1) player.draw();
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
			//董翓
			dcjiaoxia: {
				mod: {
					cardUsableTarget: function (card, player, target) {
						if (!player.isPhaseUsing()) return;
						if (card.name == "sha" && !player.getStorage("dcjiaoxia_mark").includes(target))
							return true;
					},
					targetInRange: function (card, player, target) {
						if (!player.isPhaseUsing()) return;
						if (card.name == "sha" && !player.getStorage("dcjiaoxia_mark").includes(target))
							return true;
					},
				},
				audio: 2,
				locked: false,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return player.countCards("h");
				},
				check: function (event, player) {
					return player.countCards("h", (card) => {
						return game.hasPlayer((target) => {
							var cardx = get.autoViewAs({ name: "sha" }, [card]);
							return (
								player.canUse(cardx, target) &&
								get.effect(target, cardx, player, player) > 0 &&
								(!player.hasUseTarget(card) || player.hasValueTarget(card))
							);
						});
					});
				},
				content: function () {
					var cards = player.getCards("h");
					player.addTempSkill("dcjiaoxia_viewas", "phaseUseAfter");
					player.addGaintag(cards, "dcjiaoxia_viewas");
				},
				group: "dcjiaoxia_load",
				subSkill: {
					load: {
						charlotte: true,
						trigger: { player: "useCard1" },
						filter: function (event, player) {
							if (!player.isPhaseUsing()) return false;
							return (
								event.card.name == "sha" &&
								event.targets &&
								event.targets.some(
									(target) => !player.getStorage("dcjiaoxia_mark").includes(target)
								)
							);
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								trigger.player.getStat().card.sha--;
							}
							player.addTempSkill("dcjiaoxia_mark", "phaseUseAfter");
							player.markAuto(
								"dcjiaoxia_mark",
								trigger.targets.filter(
									(target) => !player.getStorage("dcjiaoxia_mark").includes(target)
								)
							);
						},
					},
					mark: {
						charlotte: true,
						onremove: true,
					},
					viewas: {
						mod: {
							aiOrder: function (player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dcjiaoxia_viewas")) return num + 1;
							},
							cardname: function (card, player) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dcjiaoxia_viewas")) return "sha";
							},
						},
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("dcjiaoxia_viewas");
						},
						trigger: { player: "useCardAfter" },
						filter: function (event, player) {
							return (
								event.cards &&
								event.cards.length == 1 &&
								player.hasUseTarget(get.copy(event.cards[0])) &&
								player.getHistory("lose", (evt) => {
									if (evt.getParent() != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes("dcjiaoxia_viewas")) return true;
									}
									return false;
								}).length &&
								player.getHistory("sourceDamage", (evt) => evt.card == event.card).length &&
								player.hasUseTarget(event.cards[0])
							);
						},
						direct: true,
						content: function () {
							player.chooseUseTarget(trigger.cards[0], get.prompt("dcjiaoxia"), false, false).set("prompt2", "使用" + get.translation(trigger.cards[0])).logSkill = "dcjiaoxia";
						},
					},
				},
			},
			dchumei: {
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
				onChooseToUse: function (event) {
					if (!game.online && !event.dchumei_num) {
						var player = event.player;
						var evtx = event.getParent("phaseUse");
						event.set(
							"dchumei_num",
							player
								.getHistory("sourceDamage", (evt) => {
									return evt.getParent("phaseUse") == evtx;
								})
								.reduce((sum, evt) => sum + evt.num, 0)
						);
					}
				},
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					if (typeof event.dchumei_num != "number") return false;
					return game.hasPlayer((target) => lib.skill.dchumei.filterTarget(null, player, target));
				},
				filterTarget: function (card, player, target) {
					if (target.getHp() > _status.event.dchumei_num) return false;
					const list = player.getStorage("dchumei_used");
					if (!list.includes("draw")) return true;
					if (!list.includes("give") && target.countCards("he")) return true;
					if (!list.includes("recover") && target.isDamaged()) return true;
					return false;
				},
				content: function () {
					"step 0";
					var str = get.translation(target);
					player
						.chooseButton(
							[
								"狐魅：请选择一项",
								[
									[
										["draw", "令" + str + "摸一张牌"],
										["give", "令" + str + "交给你一张牌"],
										["recover", "令" + str + "回复1点体力"],
									].filter((list) => {
										if (player.getStorage("dchumei_used").includes(list[0])) return false;
										if (list[0] == "give" && !target.countCards("he")) return false;
										if (list[0] == "recover" && target.isHealthy()) return false;
										return true;
									}),
									"textbutton",
								],
							],
							true
						)
						.set("filterButton", (button) => {
							const { player, target } = get.event();
							if (player.getStorage("dchumei_used").includes(button.link)) return false;
							if (button.link == "give" && !target.countCards("he")) return false;
							if (button.link == "recover" && target.isHealthy()) return false;
							return true;
						})
						.set("ai", function (button) {
							let target = _status.event.target;
							switch(button.link) {
								case "draw": {
									return get.effect(target, { name: "draw" }, player, player);
								}
								case "give": {
									return get.effect(target, { name: "shunshou_copy2" }, player, player);
								}
								case "recover": {
									return get.recoverEffect(target, player, player);
								}
							}
							return 0;
						})
						.set("target", target);
					"step 1";
					if (result.bool) {
						player.addTempSkill("dchumei_used", "phaseUseAfter");
						player.markAuto("dchumei_used", result.links);
						switch (result.links[0]) {
							case "draw":
								target.draw();
								break;
							case "give":
								target.chooseCard(
									"狐魅：交给" + get.translation(player) + "一张牌",
									"he",
									true
								);
								break;
							case "recover":
								target.recover();
								break;
						}
						if (result.links[0] != "give") event.finish();
					} else event.finish();
					"step 2";
					if (result.bool) player.gain(result.cards, target, "giveAuto");
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							const list = player.getStorage("dchumei_used");
							if (!list.includes("draw")) return 1;
							if (!list.includes("give")) return -1;
							if (!list.includes("recover")) return 1;
						},
					},
				},
			},
			//魏关羽
			dcdanji: {
				audio: "danji",
				skillAnimation: true,
				animationColor: "water",
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				derivation: ["mashu", "dcnuchen"],
				filter(event, player) {
					return player.countCards("hej") > player.getHp();
				},
				async content(event, trigger, player) {
					player.awakenSkill("dcdanji");
					await player.loseMaxHp();
					const num = player.maxHp - player.hp;
					if (num) {
						await player.recover(num);
						await player.draw(num);
					}
					await player.addSkills(["mashu", "dcnuchen"]);
				},
				ai: {
					maixie: true,
					skillTagFilter: (player, tag, arg) => {
						if (tag === "maixie")
							return (
								player.hp >= 2 &&
								!player.storage.dcdanji &&
								!player.hasSkill("dcnuchen") &&
								player.countCards("h") === player.hp
							);
					},
					effect: {
						target: (card, player, target) => {
							let hs = target.countCards("h");
							if (
								target.hp < 3 ||
								target.storage.dcdanji ||
								target.hasSkill("dcnuchen") ||
								hs > target.hp + 1
							)
								return;
							if (get.tag(card, "draw")) return 1.6;
							if (get.tag(card, "lose") || get.tag(card, "discard")) return [1, -0.8];
							if (hs === target.hp && get.tag(card, "damage")) return [1, target.hp / 3];
							if (
								hs > target.hp &&
								target.hp > 3 &&
								(card.name === "shan" || card.name === "wuxie")
							)
								return "zeroplayertarget";
						},
					},
				},
			},
			dcnuchen: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.countCards("h") && target != player;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(target, true, "h");
					"step 1";
					if (result.bool) {
						var card = result.cards[0];
						event.card = card;
						player.showCards(
							card,
							get.translation(player) + "对" + get.translation(target) + "发动了【怒嗔】"
						);
					} else event.finish();
					"step 2";
					var suit = get.suit(card);
					var str = get.translation(suit);
					player
						.chooseToDiscard(
							"怒嗔：是否弃置至少一张" + str + "牌？",
							"若如此做，你对其造成等量伤害；或点击“取消”，获得其所有" + str + "手牌",
							"he",
							{ suit: suit },
							[1, Infinity]
						)
						.set("ai", (card) => {
							if (ui.selected.cards.length >= _status.event.num) return 0;
							return 6 - get.value(card);
						})
						.set(
							"num",
							(function () {
								var eff = get.damageEffect(target, player, player);
								if (eff > 0) {
									if (get.attitude(player, target) > 0) {
										return 1;
									}
									var cards = target.getCards("h", { suit: suit });
									if (cards.length > 2 || get.value(cards) >= 6) {
										return 0;
									}
									if (
										!player.hasSkillTag("jueqing", false, target) &&
										target.hasSkillTag("filterDamage", null, { player: player })
									)
										return 1;
									return Infinity;
								}
								return 0;
							})()
						);
					"step 3";
					if (result.bool) {
						target.damage(result.cards.length);
					} else {
						var cards = target.getCards("h", { suit: get.suit(card) });
						if (cards.length) player.gain(cards, target, "giveAuto", "bySelf");
					}
				},
				ai: {
					expose: 0.4,
					order: 10,
					result: {
						target: function (player, target) {
							return -Math.sqrt(target.countCards("h"));
						},
					},
				},
			},
			//孟达
			dclibang: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				position: "he",
				filter: function (event, player) {
					return (
						player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "dclibang");
						}, "he") && game.countPlayer((current) => current != player) >= 2
					);
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				selectTarget: 2,
				multiline: true,
				multitarget: true,
				content: function () {
					"step 0";
					event.num = 0;
					event.cardsx = [];
					event.targets.sortBySeat();
					"step 1";
					var current = targets[event.num];
					if (current.countCards("he")) player.gainPlayerCard(current, "he", true, "visibleMove");
					event.num++;
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						event.cardsx.push(card);
					}
					if (event.num < targets.length) event.goto(1);
					"step 3";
					player.judge().set("callback", lib.skill.dclibang.contentx);
				},
				contentx: function () {
					"step 0";
					var card = event.judgeResult.card;
					var color = event.judgeResult.color;
					var player = event.getParent(2).player;
					var cards = event.getParent(2).cardsx;
					for (var cardx of cards) {
						if (get.color(cardx) == color) {
							if (get.position(card, true) == "o") player.gain(card, "gain2");
							return;
						}
					}
					event.goto(3);
					"step 1";
					var targets = event.getParent(2).targets.filter((target) => {
						return player.canUse("sha", target);
					});
					if (!targets.length) event.finish();
					else
						player
							.chooseTarget(
								"利傍：视为对其中一名角色使用一张【杀】",
								true,
								(card, player, target) => {
									return _status.event.targets.includes(target);
								}
							)
							.set("targets", targets)
							.set("ai", (target) => {
								return get.effect(target, { name: "sha" }, player, player);
							});
					"step 2";
					if (result.bool) {
						player.useCard({ name: "sha", isCard: true }, result.targets[0], false);
					}
					event.finish();
					"step 3";
					player.chooseCardTarget({
						filterCard: function (card) {
							return get.itemtype(card) == "card";
						},
						filterTarget: function (card, player, target) {
							return _status.event.targets.includes(target);
						},
						selectCard: 2,
						targets: event.getParent(2).targets,
						position: "he",
						prompt: "交给其中一名角色两张牌，或失去1点体力",
						ai1: function (card) {
							return 1;
						},
						ai2: function (target) {
							var player = _status.event.player,
								card = ui.selected.cards[0];
							var val = get.value(card, target);
							if (val > 0) return get.attitude(player, target) * 2;
							return (val - 2) * get.attitude(player, target);
						},
					});
					"step 4";
					if (result.bool) {
						player.give(result.cards, result.targets[0]);
					} else player.loseHp();
				},
				ai: {
					order: 8,
					result: {
						target: function (player, target) {
							if (get.attitude(player, target) > 0 && ui.selected.targets.length) return 0.1;
							return -1;
						},
					},
				},
			},
			dcwujie: {
				audio: 2,
				trigger: {
					global: ["discardBegin", "drawBegin"],
				},
				forced: true,
				forceDie: true,
				group: "dcwujie_inf",
				logTarget: "player",
				filter: function (event, player) {
					return (
						event.getParent().name == "die" &&
						event.getParent().source == event.player &&
						event.player != player &&
						event.getParent().player == player
					);
				},
				content: function () {
					trigger.cancel();
				},
				subSkill: {
					inf: {
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							if (get.color(event.card) == "none" && event.addCount !== false) return true;
							return false;
						},
						content: function () {
							trigger.addCount = false;
							var stat = player.getStat().card,
								name = trigger.card.name;
							if (typeof stat[name] == "number") stat[name]--;
						},
					},
				},
				mod: {
					targetInRange: function (card, player) {
						const color = get.color(card);
						if (color === "none" || color === "unsure") return true;
					},
					cardUsable: function (card) {
						const color = get.color(card);
						if (color === "none" || color === "unsure") return Infinity;
					},
				},
			},
			//关宁
			dcxiuwen: {
				audio: 2,
				trigger: { player: "useCard" },
				filter: function (event, player) {
					return !player.getStorage("dcxiuwen").includes(event.card.name);
				},
				frequent: true,
				content: function () {
					player.draw();
					player.markAuto("dcxiuwen", [trigger.card.name]);
				},
				intro: { content: "已使用：$" },
			},
			oldlongsong: {
				audio: "dclongsong",
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				getSkills: function (target, player, trigger) {
					return target.getSkills(null, false).filter((skill) => {
						var skills = game.expandSkills([skill]);
						if (
							skills.filter((skillx) => {
								var info = get.info(skillx);
								if (!info || !info.enable || (info.usable && !(info.usable >= 1)))
									return false;
								if (
									info.enable != "phaseUse" &&
									(!Array.isArray(info.enable) || !info.enable.includes("phaseUse"))
								)
									return false;
								if (info.viewAs && info.usable && info.usable != 1) return false;
								if (
									info.juexingji ||
									info.hiddenSkill ||
									info.charlotte ||
									info.limited ||
									info.dutySkill
								)
									return false;
								if ((!info.usable || info.usable > 1) && info.filter) {
									try {
										var bool1 = info.filter(trigger, player);
										var num = player.getStat().skill[skillx];
										player.getStat().skill[skillx] = 1;
										var bool2 = info.filter(trigger, player);
										if (!num) delete player.getStat().skill[skillx];
										else player.getStat().skill[skillx] = num;
										var bool3 = !(bool1 && !bool2);
									} catch (e) {
										console.trace(e);
									}
									if (
										!bool1 &&
										!bool2 &&
										get.skillInfoTranslation(skill, player).indexOf("出牌阶段限一次") ==
											-1
									)
										return false;
									if ((bool1 || bool2) && bool3) return false;
								}
								return true;
							}).length
						)
							return true;
						return false;
					});
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterCard: true,
						selectCard: 1,
						filterTarget: function (card, player, target) {
							return player != target;
						},
						ai1: function (card) {
							return 6 - get.value(card);
						},
						ai2: function (target) {
							var att = get.attitude(_status.event.player, target),
								trigger = _status.event.getTrigger(),
								player = _status.event.player;
							return (
								lib.skill.oldlongsong.getSkills(target, player, trigger).length * 3 + att / 3
							);
						},
						prompt: get.prompt2("oldlongsong"),
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("oldlongsong", target);
						event.target = target;
						player.line(target, "green");
						player.give(result.cards, target);
						var skills = lib.skill.oldlongsong.getSkills(target, player, trigger);
						if (skills.length) {
							if (!event.isMine() && !event.isOnline()) game.delayx();
							target.disableSkill("oldlongsong_back", skills);
							target.markAuto("oldlongsong_back", skills);
							target.addTempSkill("oldlongsong_back", ["phaseUseAfter", "phaseAfter"]);
							var str = "";
							for (var i = 0; i < skills.length; i++) {
								str += "【" + get.translation(skills[i]) + "】";
								if (i != skills.length - 1) str += "、";
							}
							game.log(target, "的技能", "#g" + str, "失效了");
							// game.log(player,'获得了技能','#g'+str);
							player.popup(skills, "thunder");
							for (var skill of skills) {
								player.addTempSkills(skill, ["phaseUseAfter", "phaseAfter"]);
							}
						}
					}
				},
				ai: { expose: 0.2 },
				subSkill: {
					back: {
						charlotte: true,
						onremove: function (player, skill) {
							var skills = player.getStorage("oldlongsong_back");
							for (var key of skills) {
								game.log(player, "恢复了技能", "#g【" + get.translation(key) + "】");
								delete player.storage[key];
							}
							player.enableSkill(skill);
							player.popup(skills, "thunder");
						},
					},
				},
			},
			dclongsong: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				getSkills(target, skills) {
					return (target && !skills ? target.getSkills(null, false) : skills).filter((skill) => {
						var str = get.skillInfoTranslation(skill, target);
						if (str.indexOf("当你于出牌阶段外") != -1) return false;
						if (str.indexOf("当你于出牌阶段") != -1) return true;
						var skills = game.expandSkills([skill]);
						if (
							skills.some((skillx) => {
								var info = get.info(skillx);
								if (!info || !info.enable) return false;
								if (
									info.enable != "phaseUse" &&
									info.enable != "chooseToUse" &&
									(!Array.isArray(info.enable) ||
										(!info.enable.includes("phaseUse") &&
											!info.enable.includes("chooseToUse")))
								)
									return false;
								if (
									info.juexingji ||
									info.hiddenSkill ||
									info.charlotte ||
									info.limited ||
									info.dutySkill
								)
									return false;
								if (info.ai && info.ai.notemp) return false;
								return true;
							})
						)
							return true;
						return false;
					});
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterCard: { color: "red" },
						selectCard: 1,
						position: "he",
						filterTarget: function (card, player, target) {
							return player != target;
						},
						ai1: function (card) {
							return 6 - get.value(card);
						},
						ai2: function (target) {
							var att = get.attitude(_status.event.player, target);
							return lib.skill.dclongsong.getSkills(target).length * 2 + att / 2.5;
						},
						prompt: get.prompt2("dclongsong"),
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dclongsong", target);
						event.target = target;
						player.line(target, "green");
						player.give(result.cards, target);
						var skills = lib.skill.dclongsong.getSkills(target);
						if (skills.length) {
							if (!event.isMine() && !event.isOnline()) game.delayx();
							target.disableSkill("dclongsong_back", skills);
							target.markAuto("dclongsong_back", skills);
							player.addTempSkill("dclongsong_remove", ["phaseUseAfter", "phaseAfter"]);
							player.markAuto("dclongsong_remove", skills);
							target.addTempSkill("dclongsong_back", ["phaseUseAfter", "phaseAfter"]);
							var str = "";
							for (var i = 0; i < skills.length; i++) {
								str += "【" + get.translation(skills[i]) + "】";
								if (i != skills.length - 1) str += "、";
							}
							game.log(target, "的技能", "#g" + str, "失效了");
							// game.log(player,'获得了技能','#g'+str);
							player.popup(skills, "thunder");
							for (var skill of skills) {
								player.addTempSkills(skill, ["phaseUseAfter", "phaseAfter"]);
							}
						}
					}
				},
				ai: { expose: 0.2 },
				subSkill: {
					back: {
						charlotte: true,
						onremove: function (player, skill) {
							var skills = player.getStorage("dclongsong_back");
							for (var key of skills) {
								game.log(player, "恢复了技能", "#g【" + get.translation(key) + "】");
								//delete player.storage[key];
							}
							player.enableSkill(skill);
							player.popup(skills, "thunder");
						},
					},
					remove: {
						trigger: { player: ["useSkill", "logSkillBegin"] },
						forced: true,
						charlotte: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							var skill = get.sourceSkillFor(event);
							return (
								player.getStorage("dclongsong_remove").includes(skill) &&
								!player.getStockSkills(false, true).includes(skill)
							);
						},
						content: function () {
							"step 0";
							var skill = get.sourceSkillFor(trigger);
							player.removeSkills(skill);
							player.unmarkAuto("dclongsong_remove", [skill]);
						},
					},
				},
			},
			longsong: {
				audio: "dclongsong",
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return game.hasPlayer(target => {
						return target.hasCard(card => {
							if (get.position(card) == "h") return true;
							if (get.color(card) != "red") return false;
							if (player == target) return true;
							return lib.filter.canBeGained(card, player, target);
						}, "he");
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCardTarget({
							prompt: get.prompt2("longsong"),
							filterTarget(card, player, target) {
								if (target === player) return false;
								const skills = lib.skill.dclongsong.getSkills(target).map(skill => get.translation(skill));
								if (skills.length) {
									target.prompt(skills.join("<br>"));
								}
								return ui.selected.cards.length || target.hasCard(card => {
									if (get.position(card) == "h") return true;
									return get.color(card) == "red" && lib.filter.canBeGained(card, player, target);
								}, "he");
							},
							filterCard: { color: "red" },
							selectCard: [0, 1],
							multitarget: true,
							ai1(card) {
								const ai2 = get.event("ai2");
								if (
									game.hasPlayer(current => {
										return ai2(current) > 0;
									})
								) {
									return -1 - get.value(card);
								}
								return 6 - get.value(card);
							},
							ai2(target) {
								const player = get.event("player"),
									att = get.attitude(player, target);
								if (att > 0 && !target.getGainableCards(player, "he").some(card => get.color(card) == "red")) return 0;
								return lib.skill.dclongsong.getSkills(target).length + (att > 0 ? 0 : Math.max(0, get.effect(target, { name: "shunshou_copy2" }, player, player)));
							},
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0],
						cards = event.cards,
						gainableCards = target.getGainableCards(player, "he").filter(card => get.color(card) == "red");
					if (cards) {
						await player.give(cards, target);
					} else {
						if (gainableCards.length) {
							let dialog = ["龙诵：获得" + get.translation(target) + "的一张红色牌"];
							let cards1 = gainableCards.filter(i => get.position(i) == "h"),
								cards2 = gainableCards.filter(i => get.position(i) == "e");
							if (cards1.length) {
								dialog.push('<div class="text center">手牌区</div>');
								if (player.hasSkillTag("viewHandcard", null, target, true)) dialog.push(cards1);
								else dialog.push([cards1.randomSort(), "blank"]);
							}
							if (cards2.length) {
								dialog.push('<div class="text center">装备区</div>');
								dialog.push(cards2);
							}
							const {
								result: { bool, links },
							} = await player.chooseButton(dialog, true).set("ai", button => {
								const player = get.event("player"),
									target = get.event().getParent().targets[0];
								return get.value(button.link, player) * get.value(button.link, target) * (1 + Math.random());
							});
							if (!bool) return;
							await player.gain(links, target, "giveAuto", "bySelf");
						} else {
							player.popup("杯具");
							player.chat("无牌可得？！");
							game.log("但是", target, "没有红色牌可被" + get.translation(player) + "获得！");
						}
					}
					let skills = lib.skill.dclongsong.getSkills(target),
						fromTarget = true;
					if (!skills.length) {
						if (!_status.characterlist) {
							lib.skill.pingjian.initList();
						}
						const allList = _status.characterlist.slice(0);
						allList.randomSort();
						for (const name of allList) {
							const curSkills = lib.character[name][3];
							const filteredSkills = lib.skill.dclongsong.getSkills(null, curSkills);
							if (filteredSkills.length > 0) {
								skills = filteredSkills.randomGets(1);
								fromTarget = false;
								break;
							}
						}
					}
					if (!skills.length) return;
					if (!event.isMine() && !event.isOnline()) await game.asyncDelayx();
					skills.forEach(skill => {
						player.popup(skill, "thunder");
					});
					if (fromTarget) {
						target.disableSkill("dclongsong_back", skills);
						target.markAuto("dclongsong_back", skills);
						target.addTempSkill("dclongsong_back", ["phaseUseAfter", "phaseAfter"]);
						let str = "";
						for (let i = 0; i < skills.length; i++) {
							str += "【" + get.translation(skills[i]) + "】";
							if (i != skills.length - 1) str += "、";
						}
						game.log(target, "的技能", "#g" + str, "失效了");
					}
					player.addTempSkill("dclongsong_remove", ["phaseUseAfter", "phaseAfter"]);
					player.markAuto("dclongsong_remove", skills);
					await player.addTempSkills(skills, ["phaseUseAfter", "phaseAfter"]);
				},
			},
			//伏完
			dcmoukui: {
				audio: "moukui",
				trigger: { player: "useCardToPlayered" },
				direct: true,
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && event.isFirstTarget;
				},
				content: function () {
					"step 0";
					player
						.chooseButton([
							get.prompt("dcmoukui"),
							[
								[
									["draw", "摸一张牌"],
									[
										"discard",
										"弃置" +
											(trigger.targets.length == 1
												? get.translation(trigger.targets[0])
												: "一名目标角色") +
											"的一张牌",
									],
								],
								"textbutton",
							],
						])
						.set("filterButton", (button) => {
							if (
								button.link == "discard" &&
								_status.event.getTrigger().targets.every((target) => {
									return target.countDiscardableCards(_status.event.player, "he") == 0;
								})
							)
								return false;
							return true;
						})
						.set("ai", function (button) {
							if (
								button.link == "discard" &&
								_status.event.getTrigger().targets.every((target) => {
									return (
										get.effect(target, { name: "guohe_copy2" }, _status.event.player) <= 0
									);
								})
							)
								return 0;
							return 1;
						})
						.set("selectButton", [1, 2]);
					"step 1";
					if (result.bool) {
						player.logSkill("dcmoukui");
						var choices = result.links;
						event.choices = choices;
						if (choices.includes("draw")) {
							game.log(player, "选择了", "#y选项一");
							player.draw();
						}
						if (choices.includes("discard")) {
							game.log(player, "选择了", "#y选项二");
							if (trigger.targets.length == 1) event.directtarget = trigger.targets[0];
							else
								player
									.chooseTarget(
										"谋溃：弃置一名目标角色的一张牌",
										true,
										(card, player, target) => {
											return (
												_status.event.getTrigger().targets.includes(target) &&
												target.countDiscardableCards(player, "he") > 0
											);
										}
									)
									.set("ai", (target) => {
										return get.effect(
											target,
											{ name: "guohe_copy2" },
											_status.event.player
										);
									});
						} else event.finish();
						if (choices.length >= 2) {
							player.addTempSkill("dcmoukui_conseq");
							player.markAuto("dcmoukui_conseq", [trigger.card]);
						}
					} else event.finish();
					"step 2";
					player.discardPlayerCard(
						event.directtarget || result.targets[0],
						true,
						"he"
					).boolline = true;
				},
				subSkill: {
					conseq: {
						trigger: {
							global: ["shaMiss", "useCardToExcluded", "eventNeutralized", "shaCancelled"],
						},
						forced: true,
						popup: false,
						charlotte: true,
						onremove: true,
						filter: function (event, player, name) {
							if (!event.card) return false;
							var cards = player.getStorage("dcmoukui_conseq");
							if (!cards.includes(event.card)) return false;
							return true;
						},
						content: function () {
							"step 0";
							game.delayx();
							"step 1";
							trigger.target.discardPlayerCard(player, true, "he").boolline = true;
						},
					},
				},
			},
			//孙桓
			dcniji: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					return get.type(event.card) != "equip";
				},
				frequent: true,
				group: "dcniji_discard",
				content: function () {
					var next = player.draw();
					var evt = trigger.getParent("dcniji_discard");
					if (!evt || evt.player != player) next.gaintag = ["dcniji"];
					player.addTempSkill("dcniji_clear");
				},
				subSkill: {
					clear: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("dcniji");
						},
					},
					discard: {
						audio: "dcniji",
						trigger: { global: "phaseJieshuBegin" },
						filter: function (event, player) {
							return player.hasCard(
								(card) =>
									card.hasGaintag("dcniji") &&
									lib.filter.cardDiscardable(card, player, "dcniji"),
								"h"
							);
						},
						forced: true,
						locked: false,
						content: function () {
							"step 0";
							var cards = player.getCards(
								"h",
								(card) =>
									card.hasGaintag("dcniji") &&
									lib.filter.cardDiscardable(card, player, "dcniji")
							);
							event.cards = cards;
							// if(cards.length>=player.hp){
							if (cards.some((card) => player.hasUseTarget(card))) {
								player.chooseToUse({
									prompt: "是否使用一张“逆击”牌？",
									filterCard: function (card, player) {
										if (get.itemtype(card) == "card" && !card.hasGaintag("dcniji"))
											return false;
										return lib.filter.filterCard.apply(this, arguments);
									},
									ai1: function (card) {
										return get.player().getUseValue(card);
									},
								});
							}
							// }
							"step 1";
							if (result.bool) game.delayex();
							var cards = cards.filter(
								(card) =>
									get.owner(card) == player &&
									get.position(card) == "h" &&
									lib.filter.cardDiscardable(card, player, "dcniji")
							);
							if (cards.length) player.discard(cards);
						},
					},
				},
			},
			//孙狼
			dctingxian: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				usable: 1,
				filter: function (event, player) {
					return (
						event.card.name == "sha" &&
						event.getParent().triggeredTargets3.length == event.targets.length
					);
				},
				/*
				check: function (event, player) {
					return event.targets.some(
						(target) => get.effect(target, event.card, player, player) <= 0
					);
				},
				*/
				content: function () {
					"step 0";
					var num = player.countCards("e") + 1;
					event.num = num;
					player.draw(num);
					"step 1";
					var num = Math.min(trigger.targets.length, num);
					player
						.chooseTarget("铤险：是否令此杀对其中至多" + get.cnNumber(num) + "个目标无效？", [1, num], (card, player, target) => {
								return _status.event.getTrigger().targets.includes(target);
							}
						)
						.set("ai", (target) => {
							return (
								1 -
								get.effect(
									target,
									_status.event.getTrigger().card,
									_status.event.player,
									_status.event.player
								)
							);
						});
					"step 2";
					if (result.bool) {
						player.line(result.targets);
						trigger.getParent().excluded.addArray(result.targets);
					}
				},
				/*
				ai: {
					effect: {
						player: function (card, player, target) {
							if (
								_status.event.name == "chooseToUse" &&
								get.name(card) == "sha" &&
								(!player.storage.counttrigger || !player.storage.counttrigger.dctingxian) &&
								!_status._dctingxian_aiChecking
							) {
								_status._dctingxian_aiChecking = true;
								var eff = get.effect(target, { name: "sha" }, player, player);
								delete _status._dctingxian_aiChecking;
								if (
									eff < 0 &&
									ui.selected.targets.filter((targetx) => {
										if (targetx == target) return false;
										_status._dctingxian_aiChecking = true;
										var eff = get.effect(targetx, { name: "sha" }, player, player);
										delete _status._dctingxian_aiChecking;
										if (eff < 0) return true;
									}).length <
										player.countCards("e") + 1
								)
									return [0, 0, 0, 0.5];
							}
						},
					},
				},
				*/
			},
			dcbenshi: {
				audio: 2,
				forced: true,
				trigger: { player: "useCard1" },
				filter: function (event, player) {
					if (event.card.name != "sha") return false;
					var card = event.card;
					var range;
					var select = get.copy(get.info(card).selectTarget);
					if (select == undefined) {
						if (get.info(card).filterTarget == undefined) return false;
						range = [1, 1];
					} else if (typeof select == "number") range = [select, select];
					else if (get.itemtype(select) == "select") range = select;
					else if (typeof select == "function") range = select(card, player);
					game.checkMod(card, player, range, "selectTarget", player);
					return range[1] == -1;
				},
				content: function () {},
				mod: {
					/*
					attackRangeBase: function (player, num) {
						if (num !== "unchanged") return num;
						var range = 1;
						var equips = player.getCards("e", function (card) {
							return (
								get.subtype(card) != "equip1" &&
								(!ui.selected.cards || !ui.selected.cards.includes(card))
							);
						});
						for (var i = 0; i < equips.length; i++) {
							var info = get.info(equips[i], false).distance;
							if (!info) continue;
							if (info.attackFrom) {
								range -= info.attackFrom;
							}
						}
						return range;
					},
					*/
					attackRange: function (player, num) {
						return num + 1;
					},
					selectTarget: function (card, player, range) {
						if (card.name == "sha") {
							range[0] = -1;
							range[1] = -1;
						}
					},
				},
			},
			//是仪
			dccuichuan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				filterCard: true,
				derivation: "dczuojian",
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					event.num = target.countCards("e");
					var subtypes = [];
					for (var i = 1; i < 7; i++) {
						if (target.hasEmptySlot(i)) subtypes.push("equip" + i);
					}
					if (subtypes.length) {
						subtypes.randomSort();
						for (var subtype of subtypes) {
							var card = get.cardPile2((card) => get.subtype(card) == subtype);
							if (card && target.canUse(card, target)) {
								target.chooseUseTarget(card, true, "nopopup");
								break;
							}
						}
					}
					"step 1";
					var numx = target.countCards("e");
					if (numx > 0) player.draw(numx);
					game.delayx();
					"step 2";
					event.num2 = target.countCards("e");
					if (event.num2 == 4 && num != 4) {
						player.trySkillAnimate(
							"dccuichuan_animate",
							"dccuichuan_animate",
							player.checkShow("dccuichuan")
						);
						//player.removeSkill('dccuichuan');
						//game.log(player,'失去了技能','#g【榱椽】');
						player.changeSkills(["dczuojian"], ["dccuichuan"]);
						target.insertPhase();
						game.delayx();
					}
				},
				subSkill: {
					animate: {
						skillAnimation: true,
						animationColor: "wood",
					},
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							if (target.countCards("e") == 3) return 2;
							return 1;
						},
						player: function (player, target) {
							if (target.countCards("e") == 3) return 0.5;
							return target.countCards("e") + 1;
						},
					},
				},
			},
			dczhengxu: {
				audio: 2,
				group: ["dczhengxu_lose", "dczhengxu_damage"],
				subSkill: {
					lose: {
						audio: "dczhengxu",
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
						prompt2: function (event, player) {
							return (
								"当你失去牌后，若你本回合受到过伤害，你可以摸等量的牌（" +
								get.cnNumber(event.getl(player).cards2.length) +
								"张）"
							);
						},
						check: () => true,
						filter: function (event, player) {
							if (event.name == "gain" && event.player == player) return false;
							if (
								!player.getHistory("damage").length ||
								player.hasHistory("useSkill", (evt) => evt.skill == "dczhengxu_lose")
							)
								return false;
							var evt = event.getl(player);
							return evt && evt.cards2 && evt.cards2.length > 0;
						},
						content: function () {
							player.draw(trigger.getl(player).cards2.length);
						},
						ai: {
							effect: {
								target: (card, player, target) => {
									if (
										(get.tag(card, "lose") || get.tag(card, "discard")) &&
										target.getHistory("damage").length &&
										!target.hasHistory("useSkill", (evt) => evt.skill == "dczhengxu_lose")
									)
										return [1, 1];
								},
							},
						},
					},
					damage: {
						audio: "dczhengxu",
						trigger: {
							player: "damageBegin4",
						},
						prompt2: "当你受到伤害时，若你本回合失去过牌，你可以防止之",
						check: () => true,
						filter: function (event, player) {
							if (
								!player.hasHistory("lose", (evt) => evt.cards2 && evt.cards2.length) ||
								player.hasHistory("useSkill", (evt) => evt.skill == "dczhengxu_damage")
							)
								return false;
							return true;
						},
						content: function () {
							trigger.cancel();
						},
						ai: {
							effect: {
								target: (card, player, target) => {
									if (
										player.hasSkillTag("jueqing", false, target) ||
										!get.tag(card, "damage")
									)
										return;
									if (
										target.hasHistory(
											"useSkill",
											(evt) => evt.skill == "dczhengxu_damage"
										) ||
										!target.hasHistory("lose", (evt) => evt.cards2 && evt.cards2.length)
									)
										return;
									if (get.attitude(player, target) >= 0) return "zeroplayertarget";
									let num = 0,
										shas = player.getCardUsable("sha"),
										hs = player.getCards("hs", (i) => {
											if (
												i === card ||
												(card.cards && card.cards.includes(i)) ||
												!get.tag(i, "damage") ||
												!player.canUse(i, target)
											)
												return false;
											if (get.name(i) === "sha") {
												num++;
												return false;
											}
											return true;
										});
									if (card.name === "sha") shas--;
									num = Math.min(num, shas);
									num += hs.length;
									if (!num) return "zeroplayertarget";
									num = 1 - 2 / 3 / num;
									return [num, 0, num, 0];
								},
							},
						},
					},
				},
			},
			dczuojian: {
				audio: 2,
				trigger: { player: "phaseUseEnd" },
				filter: function (event, player) {
					return (
						player.getHistory("useCard", (evt) => {
							var evtx = evt.getParent("phaseUse");
							if (evtx && evtx == event) return true;
							return false;
						}).length >= player.hp
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var choices = [];
					var choiceList = [
						"令装备区牌数多于你的角色各摸一张牌",
						"令装备区牌数少于你的角色各弃置一张手牌",
					];
					var num = player.countCards("e");
					var targets = [],
						targets2 = [];
					var eff = 0,
						eff2 = 0;
					for (var target of game.filterPlayer()) {
						if (target.countCards("e") > num) {
							targets.push(target);
							eff += get.attitude(player, target);
						}
						if (target.countCards("e") < num) {
							targets2.push(target);
							eff2 -= get.attitude(player, target);
						}
					}
					event.targets = targets;
					event.targets2 = targets2;
					if (targets.length) {
						choices.push("选项一");
						choiceList[0] += "（" + get.translation(targets) + "）";
					} else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + "</span>";
					if (targets2.length) {
						choices.push("选项二");
						choiceList[1] += "（" + get.translation(targets2) + "）";
					} else choiceList[1] = '<span style="opacity:0.5; ">' + choiceList[1] + "</span>";
					if (!choices.length) event.finish();
					else
						player
							.chooseControl(choices, "cancel2")
							.set("prompt", get.prompt("dczuojian"))
							.set("choiceList", choiceList)
							.set("ai", () => {
								var controls = _status.event.controls,
									choice = _status.event.choice;
								if (
									!controls.includes("选项一") ||
									(controls.includes("选项二") && choice == 1)
								)
									return "选项二";
								return "选项一";
							})
							.set("choice", eff <= 0 && eff2 <= 0 ? "cancel2" : eff > -eff2 ? 0 : 1);
					"step 1";
					if (result.control == "选项一") {
						player.logSkill("dczuojian", targets);
						game.asyncDraw(targets, 1);
					} else if (result.control == "选项二") {
						player.logSkill("dczuojian", event.targets2);
						for (var target of event.targets2) {
							player.discardPlayerCard("h", target, true);
						}
					}
				},
			},
			//胡金定
			dcdeshi: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				forced: true,
				filter: function (event, player) {
					return player.isDamaged() && event.card && event.card.name == "sha";
				},
				content: function () {
					"step 0";
					trigger.cancel();
					for (var func of ["discardPile", "cardPile2"]) {
						var card = get[func]((card) => card.name == "sha");
						if (card) {
							player.gain(card, "gain2");
							break;
						}
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
			dcwuyuan: {
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
							return (
								current != player && current.isDamaged() && get.attitude(player, current) > 2
							);
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
					player.draw("nodelay");
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
			//李异谢旌
			dcdouzhen: {
				audio: 2,
				trigger: {
					player: ["useCard", "respond"],
				},
				forced: true,
				zhuanhuanji: "number",
				mark: true,
				marktext: "☯",
				intro: {
					content: function (storage, player) {
						var str = "<li>已转换过" + get.cnNumber(storage || 0) + "次。<li>你的回合内，";
						str +=
							player.countMark("dcdouzhen") % 2
								? "你的红色基本牌均视为普【杀】且无次数限制。"
								: "你的黑色基本牌均视为【决斗】且使用时获得目标的一张牌。";
						return str;
					},
				},
				filter: function (event, player) {
					if (
						player != _status.currentPhase ||
						!event.card.isCard ||
						!event.cards ||
						event.cards.length != 1 ||
						get.type(event.cards[0]) != "basic"
					)
						return false;
					if (player.countMark("dcdouzhen") % 2)
						return get.color(event.cards[0]) == "red" && event.card.name == "sha";
					return (
						event.name != "respond" &&
						get.color(event.cards[0]) == "black" &&
						event.card.name == "juedou"
					);
				},
				content: function () {
					if (player.countMark("dcdouzhen") % 2) {
						// if(trigger.addCount!==false){
						// 	 trigger.addCount=false;
						// 	 if(player.stat[player.stat.length-1].card.sha>0){
						// 		 player.stat[player.stat.length-1].card.sha--;
						// 	 }
						// }
					} else {
						if (
							trigger.targets.length &&
							trigger.targets.filter((i) => i.countGainableCards(player, "he") > 0).length
						)
							player.gainMultiple(trigger.targets.sortBySeat(), "he");
					}
					player.changeZhuanhuanji("dcdouzhen");
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (card.name != "juedou") return;
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
							) {
								return [1, 1];
							}
							var hs1 = target.getCards("h", "sha");
							var hs2 = player.getCards(
								"h",
								(card) =>
									(get.color(card) == "red" && get.type(card) == "basic") ||
									get.name(card) == "sha"
							);
							var hsx = target.getCards("h");
							if (
								hs1.length > hs2.length + 1 ||
								(hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) ||
								(hsx.length > 3 && hs2.length == 0) ||
								(hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number))
							) {
								return [1, -2];
							}
							return [1, -0.5];
						},
					},
				},
				mod: {
					cardname: function (card, player) {
						if (get.type(card, null, false) != "basic" || player != _status.currentPhase) return;
						if (player.countMark("dcdouzhen") % 2) {
							if (get.color(card) == "red") return "sha";
						} else {
							if (get.color(card) == "black") return "juedou";
						}
					},
					cardnature: function (card, player) {
						if (get.type(card, null, false) != "basic" || player != _status.currentPhase) return;
						if (player.countMark("dcdouzhen") % 2) {
							if (get.color(card) == "red") return false;
						}
					},
					cardUsable: function (card, player) {
						if (
							_status.currentPhase == player &&
							card.name == "sha" &&
							player.countMark("dcdouzhen") % 2 &&
							get.color(card) == "red" &&
							card.isCard
						)
							return Infinity;
					},
				},
			},
			//穆顺
			dcjinjian: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				forced: true,
				locked: false,
				filter: function (event, player, name) {
					return (
						name == "damageSource" ||
						(event.source && event.source != player && event.source.isIn())
					);
				},
				content: function () {
					"step 0";
					player.addMark("dcjinjian", 1);
					game.delayx();
					"step 1";
					var source = trigger.source;
					if (source && source != player && source.isIn() && player.canCompare(source)) {
						player
							.chooseBool(
								"是否和" + get.translation(source) + "拼点？",
								"若你赢，则你恢复1点体力"
							)
							.set(
								"goon",
								(player.countCards("h") == 1 ||
									player.hasCard(function (card) {
										return get.value(card) <= 5 || get.number(card) > 10;
									})) &&
									(get.attitude(player, source) <= 0 || source.countCards("h") >= 4)
							)
							.set("ai", function () {
								return _status.event.goon;
							});
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.line(trigger.source, "green");
						player.chooseToCompare(trigger.source);
					} else event.finish();
					"step 3";
					if (result.bool) player.recover();
				},
				intro: {
					name2: "劲",
					content: "mark",
				},
				mod: {
					attackRange: function (player, num) {
						return num + player.countMark("dcjinjian");
					},
				},
			},
			dcshizhao: {
				audio: 2,
				usable: 1,
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
				forced: true,
				filter: function (event, player) {
					return (
						player != _status.currentPhase &&
						player.countCards("h") == 0 &&
						event.getl(player).hs.length > 0
					);
				},
				content: function () {
					if (player.hasMark("dcjinjian")) {
						player.removeMark("dcjinjian", 1);
						player.draw(2);
					} else {
						player.addTempSkill("dcshizhao_effect");
						player.addMark("dcshizhao_effect", 1, false);
						game.delayx();
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						trigger: { player: "damageBegin1" },
						forced: true,
						content: function () {
							trigger.num += player.countMark(event.name);
							player.removeSkill(event.name);
						},
					},
				},
				ai: {
					combo: "dcjinjian",
					halfneg: true
				},
			},
			//赵俨
			dcfuning: {
				audio: 2,
				trigger: { player: "useCard" },
				prompt2: function (event, player) {
					return (
						"摸两张牌，然后弃置" +
						get.cnNumber(
							1 +
								player.getHistory("useSkill", function (evt) {
									return evt.skill == "dcfuning";
								}).length
						) +
						"张牌"
					);
				},
				check: function (event, player) {
					return (
						player.getHistory("useSkill", function (evt) {
							return evt.skill == "dcfuning";
						}).length < 2
					);
				},
				content: function () {
					player.draw(2);
					player.chooseToDiscard(
						"he",
						true,
						+player.getHistory("useSkill", function (evt) {
							return evt.skill == "dcfuning";
						}).length
					);
				},
			},
			dcbingji: {
				audio: 2,
				enable: "phaseUse",
				usable: 4,
				filter: function (event, player) {
					var hs = player.getCards("h"),
						suits = player.getStorage("dcbingji_used");
					if (!hs.length) return false;
					var suit = get.suit(hs[0], player);
					if (suit == "none" || suits.includes(suit)) return false;
					for (var i = 1; i < hs.length; i++) {
						if (get.suit(hs[i], player) != suit) return false;
					}
					return true;
				},
				ai: {
					order: 10,
					result: { player: 1 },
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("秉纪", [["sha", "tao"], "vcard"], "hidden");
					},
					filter: function (button, player) {
						return lib.filter.cardEnabled(
							{
								name: button.link[2],
								isCard: true,
								storage: { dcbingji: true },
							},
							player,
							"forceEnable"
						);
					},
					check: function (button) {
						var card = {
								name: button.link[2],
								isCard: true,
								storage: { dcbingji: true },
							},
							player = _status.event.player;
						return Math.max.apply(
							Math,
							game
								.filterPlayer(function (target) {
									if (player == target) return false;
									return (
										lib.filter.targetEnabled2(card, player, target) &&
										lib.filter.targetInRange(card, player, target)
									);
								})
								.map(function (target) {
									return get.effect(target, card, player, player);
								})
						);
					},
					backup: function (links, player) {
						return {
							viewAs: {
								name: links[0][2],
								isCard: true,
								storage: { dcbingji: true },
							},
							filterCard: () => false,
							selectCard: -1,
							filterTarget: function (card, player, target) {
								if (!card) card = get.card();
								if (player == target) return false;
								return (
									lib.filter.targetEnabled2(card, player, target) &&
									lib.filter.targetInRange(card, player, target)
								);
							},
							selectTarget: 1,
							ignoreMod: true,
							filterOk: () => true,
							precontent: function () {
								player.logSkill("dcbingji");
								delete event.result.skill;
								var hs = player.getCards("h");
								event.getParent().addCount = false;
								player.showCards(hs, get.translation(player) + "发动了【秉纪】");
								player.markAuto("dcbingji_used", [get.suit(hs[0], player)]);
								player.addTempSkill("dcbingji_used");
							},
						};
					},
					prompt: function (links, player) {
						return "请选择【" + get.translation(links[0][2]) + "】的目标";
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			//王威
			dcruizhan: {
				audio: 2,
				trigger: { global: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return (
						player != event.player &&
						event.player.countCards("h") >= Math.max(1, event.player.hp) &&
						player.canCompare(event.player)
					);
				},
				logTarget: "player",
				check: function (event, player) {
					var goon = player.hasCard(function (card) {
						return card.name == "sha" || get.value(card) <= 5;
					});
					var target = event.player;
					if (goon && get.attitude(player, target) < 0) {
						return get.effect(target, { name: "sha" }, player, player) > 0;
					}
					return 0;
				},
				content: function () {
					"step 0";
					event.target = trigger.player;
					player.chooseToCompare(event.target).set("ai", function (card) {
						if (typeof card == "string" && lib.skill[card]) {
							var ais =
								lib.skill[card].check ||
								function () {
									return 0;
								};
							return ais();
						}
						var player = get.owner(card);
						var getn = function (card) {
							if (player.hasSkill("tianbian") && get.suit(card) == "heart") return 13;
							return get.number(card);
						};
						var event = _status.event.getParent();
						var to = player == event.player ? event.target : event.player;
						var addi = get.value(card) >= 8 && get.type(card) != "equip" ? -6 : 0;
						if (card.name == "du") addi -= 5;
						if (player == event.player) {
							if (get.name(card, player) == "sha") {
								return 10 + getn(card);
							}
							return getn(card) - get.value(card) / 2 + addi;
						} else {
							if (get.name(card, player) == "sha") {
								return -10 - getn(card) - get.value(card) / 2 + addi;
							}
							return getn(card) - get.value(card) / 2 + addi;
						}
					});
					"step 1";
					var bool1 = result.bool;
					var bool2 =
						get.name(result.player, player) == "sha" || get.name(result.target, target) == "sha";
					if (bool1 || bool2) {
						if (player.canUse("sha", target, false)) {
							player.useCard({ name: "sha", isCard: true }, target, false);
							if (!bool1 || !bool2) event.finish();
						} else event.finish();
					} else event.finish();
					"step 2";
					if (
						target.hasCard(function (card) {
							return lib.filter.canBeGained(card, player, target);
						}, "he") &&
						player.hasHistory("sourceDamage", function (evt) {
							var evtx = evt.getParent("useCard");
							return evtx && evtx.card == evt.card && evtx.getParent() == event;
						})
					)
						player.gainPlayerCard(target, true, "he");
				},
			},
			dcshilie: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog(
							"示烈：请选择一项",
							[
								[
									["recover", "回复1点体力，将两张牌置于武将牌上作为“示烈”"],
									["losehp", "失去1点体力，获得两张“示烈”牌"],
								],
								"textbutton",
							],
							"hidden"
						);
					},
					check: function (button) {
						return button.link == "recover" ? 1 : 0;
					},
					backup: function (links, player) {
						return get.copy(lib.skill["dcshilie_" + links[0]]);
					},
					prompt: () => "点击“确定”以执行选项",
				},
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "dcshilie_die",
				ai: {
					order: 0.5,
					result: {
						player: function (player) {
							if (player.isDamaged() && !player.countCards("h", "tao")) return 1;
							return 0;
						},
					},
				},
				subSkill: {
					backup: {},
					recover: {
						audio: "dcshilie",
						selectCard: -1,
						selectTarget: -1,
						filterCard: () => false,
						filterTarget: () => false,
						multitarget: true,
						content: function () {
							"step 0";
							player.recover();
							"step 1";
							var hs = player.getCards("he");
							if (!hs.length) event.finish();
							else if (hs.length <= 2) event._result = { bool: true, cards: hs };
							else player.chooseCard("he", 2, true, "选择两张牌作为“示烈”牌");
							"step 2";
							if (result.bool) {
								player.addToExpansion(result.cards, player, "give").gaintag.add("dcshilie");
							} else event.finish();
							"step 3";
							var cards = player.getExpansions("dcshilie");
							if (cards.length > game.countPlayer()) {
								player.loseToDiscardpile(cards.slice(game.countPlayer()));
							}
						},
					},
					losehp: {
						audio: "dcshilie",
						selectCard: -1,
						selectTarget: -1,
						filterCard: () => false,
						filterTarget: () => false,
						multitarget: true,
						content: function () {
							"step 0";
							player.loseHp();
							"step 1";
							var hs = player.getExpansions("dcshilie");
							if (!hs.length) event.finish();
							else if (hs.length <= 2) event._result = { bool: true, links: hs };
							else player.chooseButton(["选择获得两张“示烈”牌", hs], 2, true);
							"step 2";
							if (result.bool) {
								player.gain(result.links, "gain2");
							}
						},
					},
					die: {
						audio: "dcshilie",
						forceDie: true,
						trigger: { player: "die" },
						filter: function (event, player) {
							return player.getExpansions("dcshilie").length > 0;
						},
						direct: true,
						skillAnimation: true,
						animationColor: "metal",
						content: function () {
							"step 0";
							player.chooseTarget(
								get.prompt("dcshilie"),
								"令一名角色获得你的“示烈”牌",
								function (card, player, target) {
									return target != player && target != _status.event.getTrigger().source;
								}
							);
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dcshilie_die", target);
								player.give(player.getExpansions("dcshilie"), target, "give");
							}
						},
					},
				},
			},
			//胡班
			dcchongyi: {
				audio: 2,
				init: () => {
					game.addGlobalSkill("dcchongyi_ai");
				},
				onremove: () => {
					if (!game.hasPlayer((i) => i.hasSkill("dcchongyi"), true))
						game.removeGlobalSkill("dcchongyi_ai");
				},
				trigger: { global: "useCard" },
				logTarget: "player",
				filter: function (event, player) {
					if (event.card.name != "sha" || !event.player.isIn()) return false;
					var evt = event.getParent("phaseUse");
					if (!evt || evt.player != event.player) return false;
					var goon = false;
					var history = event.player.getHistory("useCard", function (evtx) {
						if (goon || evtx.getParent("phaseUse") != evt) return false;
						goon = true;
						return true;
					});
					return history[0] == event;
				},
				prompt2: (event) => "令其摸两张牌，且使用【杀】的次数上限+1",
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				content: function () {
					var target = trigger.player;
					target.draw(2);
					target.addMark("dcchongyi_sha", 1, false);
					target.addTempSkill("dcchongyi_sha");
				},
				group: "dcchongyi_end",
				subSkill: {
					ai: {
						mod: {
							aiOrder: function (player, card, num) {
								if (card.name != "sha") return;
								var evt = _status.event.getParent("phaseUse");
								if (!evt || evt.player != player) return;
								if (
									player.hasHistory("useCard", function (evtx) {
										return evtx.getParent("phaseUse") == evt;
									})
								)
									return;
								if (
									game.hasPlayer(function (current) {
										return (
											current.hasSkill("dcchongyi") &&
											get.attitude(player, current) >= 0
										);
									})
								)
									return num + 10;
							},
						},
						trigger: { player: "dieAfter" },
						filter: () => {
							return !game.hasPlayer((i) => i.hasSkill("dcchongyi"), true);
						},
						silent: true,
						forceDie: true,
						content: () => {
							game.removeGlobalSkill("dcchongyi_ai");
						},
					},
					end: {
						audio: "dcchongyi",
						trigger: { global: "phaseUseEnd" },
						logTarget: "player",
						filter: function (event, player) {
							if (!event.player.isIn()) return false;
							var history = event.player.getHistory("useCard", function (evt) {
								return evt.getParent("phaseUse") == event;
							});
							return history.length && history[history.length - 1].card.name == "sha";
						},
						prompt2(event, player) {
							const target = event.player;
							const history = target.getHistory("useCard", (evt) => {
								return evt.getParent("phaseUse") === event;
							});
							const evt = history.lastItem,
								cards = evt.cards.filterInD("d");
							let str = "令" + get.translation(target) + "本回合的手牌上限+1";
							if (cards.length) str += `，然后你获得${get.translation(cards)}`;
							str += "。";
							return str;
						},
						check: function (event, player) {
							return get.attitude(player, event.player) > 0;
						},
						async content(event, trigger, player) {
							const target = trigger.player;
							target.addMark("dcchongyi_keep", 1, false);
							target.addTempSkill("dcchongyi_keep");
							const history = target.getHistory("useCard", (evt) => {
								return evt.getParent("phaseUse") === trigger;
							});
							const evt = history.lastItem,
								cards = evt.cards.filterInD("d");
							if (cards.length) await player.gain(cards, "gain2");
							else await game.asyncDelayx();
						},
					},
					sha: {
						charlotte: true,
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("dcchongyi_sha");
							},
						},
						onremove: true,
						intro: { content: "使用【杀】的次数上限+#" },
					},
					keep: {
						charlotte: true,
						mod: {
							maxHandcard: function (player, num) {
								return num + player.countMark("dcchongyi_keep");
							},
						},
						onremove: true,
						intro: { content: "手牌上限+#" },
					},
				},
			},
			//牛辅
			dcxiaoxi: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				forced: true,
				filter: function (event, player) {
					return player.maxHp > 1;
				},
				content: function () {
					"step 0";
					if (player.maxHp <= 2) event._result = { index: 0 };
					else
						player
							.chooseControl("1点", "2点")
							.set("prompt", "宵袭：减少1或2点体力上限")
							.set("ai", function () {
								var player = _status.event.player;
								if (
									!game.hasPlayer(function (current) {
										if (!player.inRange(current) || get.attitude(player, current) >= 0)
											return false;
										if (
											get.effect(current, { name: "shunshou_copy2" }, player, player) >
												0 &&
											current.countCards("h") +
												current.countCards("e", function (card) {
													return get.value(card, current) > 0;
												}) >
												1
										)
											return true;
										if (
											get.effect(current, { name: "sha" }, player, player) > 0 &&
											current.countCards("hs", "shan") + current.hp > 1
										)
											return true;
									})
								)
									return 0;
								return 1;
							});
					"step 1";
					player.loseMaxHp(1 + result.index);
					event.num = 1 + result.index;
					"step 2";
					if (!game.hasPlayer((current) => player.inRange(current))) event.finish();
					else
						player
							.chooseTarget(
								"请选择【宵袭】的目标",
								"然后你选择一项：⒈获得该角色的" +
									get.cnNumber(num) +
									"张牌。⒉视为对其使用" +
									get.cnNumber(num) +
									"张【杀】。",
								function (card, player, target) {
									return player.inRange(target);
								},
								true
							)
							.set("ai", function (target) {
								var player = _status.event.player;
								if (get.attitude(player, target) >= 0) return 0;
								var eff1 = get.effect(target, { name: "shunshou_copy2" }, player, player);
								if (
									eff1 > 0 &&
									target.countCards("h") +
										target.countCards("e", function (card) {
											return get.value(card, target) > 0;
										}) >
										1
								)
									eff1 *= 1.6;
								var eff2 = player.canUse("sha", target)
									? get.effect(target, { name: "sha" }, player, player)
									: 0;
								if (eff2 > 0 && target.countCards("hs", "shan") + target.hp > 1) eff2 *= 2;
								return Math.max(eff1, eff2);
							});
					"step 3";
					var target = result.targets[0];
					player.line(target, "green");
					event.target = target;
					var bool1 = target.countGainableCards(player, "he") > 0;
					var bool2 = player.canUse("sha", target);
					if (!bool1 && !bool2) event.finish();
					else if (bool1 && bool2) {
						var str = get.translation(target),
							numx = get.cnNumber(num);
						player
							.chooseControl()
							.set("choiceList", [
								"获得" + str + "的" + numx + "张牌",
								"视为对" + str + "使用" + numx + "张【杀】",
							])
							.set("ai", function () {
								var player = _status.event.player,
									target = _status.event.getParent().target;
								var eff1 = get.effect(target, { name: "shunshou_copy2" }, player, player);
								if (
									eff1 > 0 &&
									target.countCards("h") +
										target.countCards("e", function (card) {
											return get.value(card, target) > 0;
										}) >
										1
								)
									eff1 *= 1.6;
								var eff2 = player.canUse("sha", target)
									? get.effect(target, { name: "sha" }, player, player)
									: 0;
								if (eff2 > 0 && target.countCards("hs", "shan") + target.hp > 1) eff2 *= 2;
								return eff1 > eff2 ? 0 : 1;
							});
					} else event._result = { index: bool1 ? 0 : 1 };
					"step 4";
					if (result.index == 0) {
						player.gainPlayerCard(target, true, num, "he");
						event.finish();
					}
					"step 5";
					event.num--;
					if (player.canUse("sha", target, false)) {
						player.useCard({ name: "sha", isCard: true }, target, false);
						if (event.num > 0) event.redo();
					}
				},
				ai: {
					neg: true,
				},
			},
			xiongrao: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				limited: true,
				skillAnimation: true,
				animationColor: "soil",
				prompt: function (event, player) {
					var str = "是否发动【熊扰】？";
					str += "（可摸" + get.cnNumber(Math.max(0, 7 - player.maxHp)) + "张牌）";
					return str;
				},
				logTarget: (event, player) => game.filterPlayer((current) => current != player),
				check: function (event, player) {
					return player.maxHp <= 3;
				},
				content: function () {
					player.awakenSkill("xiongrao");
					game.countPlayer(function (current) {
						if (current != player) current.addTempSkill("xiongrao_blocker");
					});
					var num = 7 - player.maxHp;
					if (num > 0) {
						player.gainMaxHp(num);
						player.draw(num);
					}
				},
				subSkill: {
					blocker: {
						init: function (player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove: function (player, skill) {
							player.removeSkillBlocker(skill);
						},
						charlotte: true,
						locked: true,
						skillBlocker: function (skill, player) {
							var info = get.info(skill);
							return info && !info.charlotte && !info.persevereSkill && !get.is.locked(skill) && !info.limited && !info.juexingji;
						},
						mark: true,
						marktext: "扰",
						intro: {
							content: function (list, player, skill) {
								var storage = player.getSkills(null, false, false).filter(function (i) {
									return lib.skill.xiongrao_blocker.skillBlocker(i, player);
								});
								if (storage.length) return "失效技能：" + get.translation(storage);
								return "无失效技能";
							},
						},
					},
				},
			},
			//卞喜
			dunxi: {
				audio: 2,
				trigger: { player: "useCard" },
				direct: true,
				filter: function (event, player) {
					if (!get.tag(event.card, "damage")) return false;
					return event.targets.some((target) => target != player && target.isIn());
				},
				content: function () {
					"step 0";
					var targets = trigger.targets.filter(function (current) {
						return current != player && current.isIn();
					});
					if (targets.length == 1) {
						event.target = targets[0];
						player
							.chooseBool(
								get.prompt("dunxi", event.target),
								"令" + get.translation(event.target) + "获得一枚“钝”标记"
							)
							.set("goon", get.attitude(player, event.target) < 0)
							.set("ai", () => _status.event.goon);
					} else {
						player
							.chooseTarget(
								get.prompt("dunxi"),
								"选择一名目标角色获得一枚“钝”标记",
								function (card, player, target) {
									return (
										target != player &&
										_status.event.getTrigger().targets.includes(target)
									);
								}
							)
							.set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (att >= 0) return 0;
								return -att / (1 + target.hasMark("dunxi"));
							});
					}
					"step 1";
					if (result.bool) {
						var target = event.target || result.targets[0];
						player.logSkill("dunxi", target);
						target.addMark("dunxi", 1);
						game.delayx();
					}
				},
				intro: { content: "mark", name2: "钝" },
				group: "dunxi_random",
				subSkill: {
					random: {
						audio: "dunxi",
						trigger: { global: "useCard" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							if (
								!event.player.hasMark("dunxi") ||
								event.targets.length != 1 ||
								event._dunxi ||
								_status.dying.length
							)
								return false;
							var type = get.type2(event.card, false);
							return type == "basic" || type == "trick";
						},
						logTarget: "player",
						line: "fire",
						content: function () {
							"step 0";
							trigger._dunxi = true;
							trigger.player.removeMark("dunxi", 1);
							var target = trigger.targets[0];
							event.target = target;
							trigger.targets.remove(target);
							game.delayx();
							"step 1";
							var list;
							if (get.type(event.card) != "delay")
								list = game.filterPlayer(function (current) {
									return lib.filter.targetEnabled2(trigger.card, trigger.player, current);
								});
							else
								list = game.filterPlayer(function (current) {
									return current.canAddJudge(event.card);
								});
							if (list.length) target = list.randomGet();
							trigger.targets.push(target);
							trigger.player.line(target, "fire");
							game.log(trigger.card, "的目标被改为", target);
							if (target == event.target) {
								trigger.player.loseHp();
								var evt = trigger.getParent("phaseUse");
								if (evt && evt.player == trigger.player) evt.skipped = true;
							}
						},
					},
				},
			},
			//冯方
			dcditing: {
				audio: 2,
				trigger: { global: "phaseUseBegin" },
				logTarget: "player",
				filter: function (event, player) {
					return player.hp > 0 && event.player.countCards("h") > 0 && event.player.inRange(player);
				},
				prompt2: (event, player) =>
					"观看其" +
					get.cnNumber(Math.min(player.hp, event.player.countCards("h"))) +
					"张手牌并选择其中一张",
				check: function (event, player) {
					var target = event.player;
					if (get.attitude(player, target) > 0) return true;
					if (Math.min(player.hp, target.countCards("h")) > 2) return true;
					return false;
				},
				content: function () {
					"step 0";
					var target = trigger.player;
					var cards = target.getCards("h");
					var num = Math.min(cards.length, player.hp),
						cards2 = cards.randomGets(num);
					player
						.chooseButton(
							[get.translation(target) + "的手牌（" + num + "/" + cards.length + "）", cards2],
							true
						)
						.set("ai", function (button) {
							var player = _status.event.player,
								target = _status.event.getTrigger().player,
								card = button.link;
							var att = get.attitude(player, target);
							var val = target.getUseValue(card, null, true);
							if (val <= 0) return (-get.value(card, target) / 2) * get.sgn(att - 0.05);
							if (target.canUse(card, player) && get.effect(player, card, target, target) > 0) {
								var eff = get.effect(player, card, target, player);
								if (eff < 0) val -= eff;
							}
							return val;
						});
					"step 1";
					if (result.bool) {
						player.addTempSkill("dcditing_effect", "phaseUseAfter");
						player.storage.dcditing_effect = [trigger.player, result.links[0]];
					}
				},
				subSkill: {
					effect: {
						audio: "dcditing",
						charlotte: true,
						trigger: { target: "useCardToTargeted" },
						forced: true,
						filter: function (event, player) {
							var list = player.storage.dcditing_effect;
							return list && event.player == list[0] && event.cards.includes(list[1]);
						},
						content: function () {
							trigger.excluded.add(player);
							game.delayx();
						},
						group: ["dcditing_draw", "dcditing_gain"],
					},
					draw: {
						audio: "dcditing",
						charlotte: true,
						trigger: { global: "useCardAfter" },
						forced: true,
						filter: function (event, player) {
							var list = player.storage.dcditing_effect;
							return (
								list &&
								event.player == list[0] &&
								event.cards.includes(list[1]) &&
								!event.targets.includes(player)
							);
						},
						content: function () {
							player.draw(2);
						},
					},
					gain: {
						audio: "dcditing",
						charlotte: true,
						trigger: { global: "phaseUseEnd" },
						forced: true,
						filter: function (event, player) {
							var list = player.storage.dcditing_effect;
							return (
								list &&
								event.player == list[0] &&
								event.player.getCards("h").includes(list[1])
							);
						},
						content: function () {
							var list = player.storage.dcditing_effect;
							player.gain(list[0], list[1], "giveAuto", "bySelf");
						},
					},
				},
			},
			dcbihuo: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				direct: true,
				filter: function (event, player) {
					return event.source && event.player != event.source;
				},
				content: function () {
					"step 0";
					event.num = event.triggername == "damageEnd" ? 1 : -1;
					player
						.chooseTarget(
							get.prompt("dcbihuo"),
							"令一名角色下回合的额定摸牌数" + (event.num > 0 ? "+1" : "-1")
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								num = _status.event.getParent().num;
							var att = get.attitude(player, target);
							if (num > 0) {
								if (att <= 0) return 0;
								if (target.hasJudge("lebu")) return att / 10;
								return (
									(att / Math.sqrt(Math.min(5, 1 + target.countCards("h")))) *
									Math.sqrt(1 + target.hp)
								);
							}
							if (num < 0) {
								if (att >= 0) return 0;
								if ((target.storage.dcbihuo_effect || 0) <= -2) return -att / 10;
								return (
									(-att / Math.sqrt(Math.min(5, 1 + target.countCards("h")))) *
									Math.sqrt(1 + target.hp)
								);
							}
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcbihuo", target);
						if (typeof target.storage.dcbihuo_effect != "number")
							target.storage.dcbihuo_effect = 0;
						target.storage.dcbihuo_effect += event.num;
						target.addTempSkill("dcbihuo_effect", { player: "phaseAfter" });
						game.delayx();
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "phaseDrawBegin" },
						forced: true,
						onremove: true,
						content: function () {
							var num = player.storage.dcbihuo_effect;
							trigger.num += num;
							game.log(player, "的额定摸牌数", "#g" + (num >= 0 ? "+" : "") + num);
						},
						mark: true,
						intro: {
							content: (num) => "额定摸牌数" + (num >= 0 ? "+" : "") + num,
						},
					},
				},
			},
			//秦宜禄
			piaoping: {
				audio: 2,
				trigger: { player: "useCard" },
				forced: true,
				zhuanhuanji: true,
				filter: function (event, player) {
					return !player.hasSkill("piaoping_blocker", null, null, false);
				},
				content: function () {
					player.changeZhuanhuanji("piaoping");
					var num = Math.min(
						player.hp,
						player.getHistory("useSkill", function (evt) {
							return evt.skill == "piaoping";
						}).length
					);
					if (num <= 0) return;
					if (player.storage.piaoping == true) player.draw(num);
					else if (
						player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "piaoping");
						}, "he")
					) {
						game.delayx();
						player.chooseToDiscard(true, "he", num);
					}
				},
				mark: true,
				marktext: "☯",
				intro: {
					content: function (storage) {
						if (storage)
							return "转换技，锁定技。当你使用一张牌时，你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）";
						return "转换技，锁定技。当你使用一张牌时，你摸X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）";
					},
				},
				subSkill: { blocker: { charlotte: true } },
			},
			tuoxian: {
				audio: 2,
				ai: { combo: "piaoping" },
				trigger: { player: "loseAfter" },
				marktext: "栗",
				filter: function (event, player) {
					return (
						event.type == "discard" &&
						event.getParent(3).name == "piaoping" &&
						player.countMark("tuoxian") > 0 &&
						event.cards.filterInD("d").length > 0
					);
				},
				direct: true,
				content: function () {
					"step 0";
					event.cards = trigger.cards.filterInD("d");
					player
						.chooseTarget(
							lib.filter.notMe,
							get.prompt("tuoxian"),
							"令一名其他角色获得" + get.translation(event.cards)
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att < 0) return 0;
							if (target.hasSkillTag("nogain")) att /= 10;
							return att * Math.pow(1 + target.countCards("he"), 0.25);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("tuoxian", target);
						player.removeMark("tuoxian", 1);
						target.gain(cards, "gain2");
					} else event.finish();
					"step 2";
					target
						.chooseControl()
						.set("choiceList", [
							"弃置区域内的" + get.cnNumber(cards.length) + "张牌",
							"令" + get.translation(player) + "的〖漂萍〗于本回合内失效",
						])
						.set("ai", function () {
							var player = _status.event.player,
								target = _status.event.getParent().player;
							if (
								player.hasCard(function (card) {
									return (
										get.effect(
											player,
											{ name: card.viewAs || card.name },
											player,
											player
										) < 0
									);
								}, "j") ||
								player.hasCard(function (card) {
									return get.value(card, player) <= 0;
								})
							)
								return 0;
							if (get.attitude(player, target) <= 0 || !target.isPhaseUsing()) return 1;
							if (
								!target.needsToDiscard() &&
								!target.hasCard(function (card) {
									return !target.hasValueTarget(card, null, true);
								}, "hs")
							)
								return 1;
							return 0;
						});
					"step 3";
					if (result.index == 0) {
						var num = Math.min(target.countCards("hej"), cards.length);
						if (target.countCards("j") > 0) target.discardPlayerCard(target, num, true, "hej");
						else target.chooseToDiscard("he", true, num);
					} else player.addTempSkill("piaoping_blocker");
				},
				init(player) {
					player.addMark("tuoxian", 1, false);
				},
				intro: { name2: "栗", content: "剩余可用#次" },
			},
			chuaili: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				filter: function (event, player) {
					if (player == event.player || get.color(event.card) != "black") return false;
					if (!player.hasSkill("piaoping", null, null, false)) return false;
					return (
						player.storage.piaoping == true ||
						!player.hasSkill("chuaili_blocker", null, null, false)
					);
				},
				content: function () {
					if (player.storage.piaoping == true) {
						player.changeZhuanhuanji("piaoping");
					} else {
						player.addMark("tuoxian", 1, false);
						if (player.countCards("tuoxian") > 3) player.addTempSkill("chuaili_blocker");
					}
					game.delayx();
				},
				ai: { combo: "piaoping" },
				subSkill: { blocker: { charlotte: true } },
			},
			//闫柔
			choutao: {
				audio: 2,
				trigger: {
					player: "useCard",
					target: "useCardToTargeted",
				},
				filter: function (event, player) {
					if (event.card.name != "sha" || !event.player.isIn()) return false;
					if (player == event.player)
						return player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "choutao");
						}, "he");
					return event.player.hasCard(function (card) {
						return lib.filter.canBeDiscarded(card, player, event.player);
					}, "he");
				},
				check: function (event, player) {
					if (player == event.player) {
						if (
							!player.hasCard(function (card) {
								return get.value(card) <= 5;
							}, "he")
						)
							return false;
						for (var i of event.targets) {
							var eff1 = get.damageEffect(i, player, player);
							if (eff1 < 0) return false;
							if (i.hasShan() && eff1 > 0) return true;
						}
						var sha = false;
						return (
							player.getCardUsable({ name: "sha" }) <= 0 &&
							player.hasCard(function (card) {
								if (!sha && get.name(card) == "sha" && player.getUseValue(card) > 0) {
									sha = true;
									return false;
								}
								return sha && get.value(card) <= 5;
							}, "hs")
						);
					} else {
						var eff1 = get.effect(event.player, { name: "guohe_copy2" }, player, player);
						var eff2 = get.damageEffect(player, event.player, player);
						if (!player.hasShan()) return eff1 > 0;
						if (eff2 > 0) return eff1 > 0;
						return player.hp > 2 && eff2 < eff1;
					}
				},
				logTarget: "player",
				content: function () {
					"step 0";
					if (player != game.me && !player.isOnline() && !player.isUnderControl()) game.delayx();
					if (player == trigger.player)
						player.chooseToDiscard("he", true).set("ai", function (card) {
							var player = _status.event.player;
							var val = player.getUseValue(card);
							if (get.name(card) == "sha" && player.getUseValue(card) > 0) val += 5;
							return 20 - val;
						});
					else player.discardPlayerCard(trigger.player, true, "he");
					"step 1";
					trigger.directHit.addArray(game.players);
					if (player == trigger.player && trigger.addCount !== false) {
						trigger.addCount = false;
						player.getStat().card.sha--;
					}
				},
			},
			xiangshu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				limited: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return (
						(player.getStat("damage") || 0) > 0 &&
						game.hasPlayer((current) => current.isDamaged())
					);
				},
				content: function () {
					"step 0";
					event.num = Math.min(5, player.getStat("damage"));
					player
						.chooseTarget(
							"是否发动限定技【襄戍】？",
							"令一名角色回复" + event.num + "点体力并摸" + get.cnNumber(event.num) + "张牌",
							function (card, player, target) {
								return target.isDamaged();
							}
						)
						.set("ai", function (target) {
							var num = _status.event.getParent().num,
								player = _status.event.player;
							var att = get.attitude(player, target);
							if (att > 0 && num >= Math.min(player.hp, 2))
								return att * Math.sqrt(target.getDamagedHp());
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.awakenSkill("xiangshu");
						player.logSkill("xiangshu", target);
						target.recover(num);
						target.draw(num);
						if (player != target) player.addExpose(0.2);
					}
				},
			},
			//朱灵
			dczhanyi: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					var list = ["basic", "trick", "equip"];
					var list2 = [];
					var hs = player.getCards("he");
					for (var card of hs) {
						var type = get.type2(card, player);
						if (list.includes(type)) {
							var bool = lib.filter.cardDiscardable(card, player, "dczhanyi");
							if (bool) list2.add(type);
							else {
								list.remove(type);
								list2.remove(type);
							}
						}
					}
					return list2.length > 0;
				},
				content: function () {
					"step 0";
					var list = ["basic", "trick", "equip"];
					var list2 = [];
					var hs = player.getCards("he");
					for (var card of hs) {
						var type = get.type2(card, player);
						if (list.includes(type)) {
							var bool = lib.filter.cardDiscardable(card, player, "dczhanyi");
							if (bool) list2.add(type);
							else {
								list.remove(type);
								list2.remove(type);
							}
						}
					}
					player
						.chooseControl(list2, "cancel2")
						.set("prompt", get.prompt("dczhanyi"))
						.set("prompt2", "弃置一种类型的所有牌")
						.set("ai", function () {
							var player = _status.event.player;
							var getval = function (control) {
								if (control == "cancel2") return 0;
								var hs = player.getCards("h"),
									eff = 0;
								var es = player.getCards("e");
								var ss = player.getCards("s");
								var sha = player.getCardUsable({ name: "sha" });
								for (var i of hs) {
									var type = get.type2(i);
									if (type == control) {
										eff -= get.value(i, player);
									} else {
										switch (type) {
											case "basic":
												if (sha > 0 && get.name(i) == "sha") {
													sha--;
													var add = 3;
													if (
														!player.hasValueTarget(i) &&
														player.hasValueTarget(i, false)
													)
														add += player.getUseValue(i, false);
													eff += add;
												}
												break;
											case "trick":
												if (player.hasValueTarget(i)) eff += 6;
												break;
											case "equip":
												if (player.hasValueTarget({ name: "guohe_copy2" }))
													eff += player.getUseValue({ name: "guohe_copy2" });
												break;
										}
									}
								}
								if (control == "equip") {
									for (var i of es) eff -= get.value(i, player);
								} else {
									for (var i of ss) {
										var type = get.type2(i);
										if (type == control) continue;
										switch (type) {
											case "basic":
												if (sha > 0 && get.name(i) == "sha") {
													sha--;
													var add = 3;
													if (
														!player.hasValueTarget(i) &&
														player.hasValueTarget(i, false)
													)
														add += player.getUseValue(i, false);
													eff += add;
												}
												break;
											case "trick":
												if (player.hasValueTarget(i)) eff += 6;
												break;
											case "equip":
												if (player.hasValueTarget({ name: "guohe_copy2" }))
													eff += player.getUseValue({ name: "guohe_copy2" });
												break;
										}
									}
								}
								return eff;
							};
							var controls = _status.event.controls.slice(0);
							var eff = 0,
								current = "cancel2";
							for (var i of controls) {
								var effx = getval(i);
								if (effx > eff) {
									eff = effx;
									current = i;
								}
							}
							return current;
						});
					"step 1";
					var type = result.control;
					if (type != "cancel2") {
						event.type = type;
						var cards = player.getCards("he", function (card) {
							return get.type2(card, player) == type;
						});
						if (cards.length) {
							player.logSkill("dczhanyi");
							player.discard(cards);
						} else event.finish();
					} else event.finish();
					"step 2";
					var list = ["basic", "trick", "equip"];
					for (var i of list) {
						if (i != event.type) player.addTempSkill("dczhanyi_" + i, { player: "phaseBegin" });
					}
				},
				subSkill: {
					basic: {
						charlotte: true,
						marktext: "基",
						mark: true,
						intro: {
							content: "使用基本牌无距离限制，且伤害值和回复值基数+1",
						},
						trigger: { source: ["damageBegin1", "recoverBegin"] },
						filter: function (event, player) {
							var evt = event.getParent();
							return evt.type == "card" && get.type(evt.card, null, false) == "basic";
						},
						forced: true,
						logTarget: "player",
						content: function () {
							trigger.num++;
						},
						mod: {
							targetInRange: function (card) {
								if (get.type(card) == "basic") return true;
							},
						},
						ai: {
							damageBonus: true,
						},
					},
					trick: {
						charlotte: true,
						marktext: "锦",
						mark: true,
						intro: {
							content: "使用锦囊牌时摸一张牌，且锦囊牌不计入本回合的手牌上限",
						},
						trigger: { player: "useCard" },
						filter: function (event, player) {
							return get.type2(event.card) == "trick";
						},
						forced: true,
						content: function () {
							player.draw();
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (get.type2(card, player) == "trick") return true;
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && get.type2(card, player) == "trick")
									return false;
							},
						},
					},
					equip: {
						charlotte: true,
						marktext: "装",
						mark: true,
						intro: {
							content: "有装备牌进入你的装备区时，可弃置一名其他角色的一张牌",
						},
						trigger: { player: "equipAfter" },
						filter: function (event, player) {
							return game.hasPlayer(
								(target) => target != player && target.countDiscardableCards(player, "he") > 0
							);
						},
						direct: true,
						content: function () {
							"step 0";
							player
								.chooseTarget(
									"战意：是否弃置一名其他角色的一张牌？",
									function (card, player, target) {
										return (
											target != player && target.countDiscardableCards(player, "he") > 0
										);
									}
								)
								.set("ai", function (target) {
									var player = _status.event.player;
									return get.effect(target, { name: "guohe_copy2" }, player, player);
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dczhanyi_equip", target);
								player.discardPlayerCard(target, "he", true);
							}
						},
					},
				},
			},
			//李采薇
			yijiao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasMark("yijiao");
					});
				},
				filterTarget: function (card, player, target) {
					return target != player && !target.hasMark("yijiao");
				},
				content: function () {
					"step 0";
					player
						.chooseControl("10个", "20个", "30个", "40个")
						.set("prompt", "要令" + get.translation(target) + "获得多少标记？")
						.set("ai", function () {
							var player = _status.event.player,
								target = _status.event.getParent().target;
							if (get.attitude(player, target) < 0) return 3;
							return 0;
						});
					"step 1";
					target.addMark("yijiao", 10 * (1 + result.index));
				},
				ai: {
					order: 1.1,
					result: {
						player: 1,
						target: -0.5,
					},
				},
				group: "yijiao_effect",
				subSkill: {
					effect: {
						trigger: { global: "phaseJieshuBegin" },
						forced: true,
						filter: function (event, player) {
							return (
								event.player.isIn() &&
								event.player != player &&
								event.player.hasMark("yijiao")
							);
						},
						logTarget: "player",
						content: function () {
							var target = trigger.player,
								num = target.countMark("yijiao");
							var num2 = 0;
							target.getHistory("useCard", function (evt) {
								var numz = get.number(evt.card);
								if (typeof numz == "number") num2 += numz;
							});
							if (num > num2) {
								var hs = target.getCards("h", function (card) {
									return lib.filter.cardDiscardable(card, target, "yijiao_effect");
								});
								if (hs.length) target.discard(hs.randomGets(get.rand(1, 3)));
							} else if (num == num2) {
								target.insertPhase();
								player.draw(2);
							} else {
								player.draw(3);
							}
							target.removeMark("yijiao", num);
						},
					},
				},
				intro: {
					onunmark: true,
					name2: "异",
					content: "mark",
				},
			},
			qibie: {
				audio: 2,
				trigger: { global: "die" },
				filter: function (event, player) {
					return (
						player.countCards("h") > 0 &&
						!player.hasCard(function (card) {
							return !lib.filter.cardDiscardable(card, player, "qibie");
						}, "h")
					);
				},
				check: function (event, player) {
					return player.isDamaged() && player.countCards("h", "tao") < Math.max(2, player.hp);
				},
				content: function () {
					var hs = player.getCards("h");
					player.discard(hs);
					player.recover();
					player.draw(hs.length + 2);
				},
			},
			//严夫人
			channi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget: lib.filter.notMe,
				filterCard: true,
				selectCard: [1, Infinity],
				check: function (card) {
					let player = _status.event.player,
						num = player.hasSkill("nifu") ? 15 : 8;
					if (
						ui.selected.cards.length <=
						Math.max(1, player.needsToDiscard(), player.countCards("h") - 4)
					)
						return num - get.value(card);
					return num / 2 - get.value(card);
				},
				position: "h",
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					"step 0";
					player.give(cards, target);
					player.addTempSkill("channi_effect");
					"step 1";
					if (target.countCards("h") > 0) {
						game.broadcastAll(function (num) {
							lib.skill.channi_backup.selectCard = [1, num];
						}, cards.length);
						var next = target.chooseToUse();
						next.set(
							"openskilldialog",
							"将至多" + get.cnNumber(cards.length) + "张手牌当做【决斗】使用"
						);
						next.set("norestore", true);
						next.set("addCount", false);
						next.set("_backupevent", "channi_backup");
						next.set("custom", {
							add: {},
							replace: { window: function () { } },
						});
						next.backup("channi_backup");
					}
					"step 2";
					player.removeSkill("channi_effect");
				},
				subSkill: {
					effect: {
						trigger: {
							global: ["damageSource", "damageEnd"],
						},
						filter(event, player, name) {
							if (!event.card || event.card.name != "juedou") return false;
							let evt = event.getParent(2);
							if (!evt || evt.name != "useCard" || evt.card.name != "juedou") return false;
							let user = evt.player;
							let evtx = event.getParent("channi", true);
							if (!evtx || evtx.player != player) return false;
							if (name == "damageSource") return event.source == user && evt.cards.length;
							return event.player == user && player.countCards("h");
						},
						forced: true,
						charlotte: true,
						logTarget(event, player, name) {
							return event[name == "damageSource" ? "source" : "player"];
						},
						content() {
							let evt = trigger.getParent(2);
							if (event.triggername == "damageSource") evt.player.draw(evt.cards.length);
							else player.chooseToDiscard("h", true, player.countCards("h"));
						},
					},
					backup: {
						filterCard: function (card) {
							return get.itemtype(card) == "card";
						},
						viewAs: { name: "juedou" },
						position: "h",
						filterTarget: lib.filter.targetEnabled,
						ai1: (card) => {
							if (get.name(card) === "sha") return 0;
							return 5.5 - get.value(card);
						},
						log: false,
						precontent: function () {
							delete event.result.skill;
						},
					},
				},
				ai: {
					order: 0.3,
					result: {
						target: function (player, target) {
							if (
								target == game.me ||
								target.isOnline() ||
								target.hasValueTarget({ name: "juedou" })
							)
								return 2;
							if (player.needsToDiscard()) return 0.5;
							return 0;
						},
					},
				},
			},
			nifu: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				forced: true,
				filter: function (event, player) {
					return player.countCards("h") != 3;
				},
				content: function () {
					var num = player.countCards("h") - 3;
					if (num > 0) player.chooseToDiscard("h", num, true);
					else player.draw(-num);
				},
			},
			//郝萌
			xiongmang: {
				audio: 2,
				enable: "chooseToUse",
				viewAs: { name: "sha" },
				viewAsFilter: function (player) {
					return player.countCards("hs") > 0;
				},
				selectCard: function () {
					return [1, 4];
				},
				selectTarget: function () {
					var card = get.card(),
						player = get.player();
					if (card == undefined) return;
					var range = [1, Math.max(1, ui.selected.cards.length)];
					game.checkMod(card, player, range, "selectTarget", player);
					return range;
				},
				complexCard: true,
				filterCard: function (card) {
					if (!ui.selected.cards.length) return true;
					var suit = get.suit(card);
					for (var i of ui.selected.cards) {
						if (get.suit(i) == suit) return false;
					}
					return true;
				},
				filterOk: function () {
					if (!ui.selected.targets.length) return false;
					var card = get.card(),
						player = get.player();
					if (card == undefined) return;
					var range = [1, Math.max(1, ui.selected.cards.length)];
					game.checkMod(card, player, range, "selectTarget", player);
					if (
						(range[0] <= ui.selected.targets.length && range[1] >= ui.selected.targets.length) ||
						range[0] == -1
					)
						return true;
					return false;
				},
				check: function (card) {
					var player = _status.event.player,
						card = get.autoViewAs({ name: "sha" }, ui.selected.cards.concat(card));
					if (
						game.countPlayer(function (current) {
							return (
								(_status.event.filterTarget || lib.filter.filterTarget)(
									card,
									player,
									current
								) && get.effect_use(current, card, player, player) > 0
							);
						}) <= ui.selected.cards.length
					)
						return 0;
					return 5 - get.value(card);
				},
				position: "hs",
				onuse: function (links, player) {
					player.addTempSkill("xiongmang_effect");
				},
				ai: {
					order: () => get.order({ name: "sha" }) + 0.2,
					respondSha: true,
					skillTagFilter: function (player, tag, arg) {
						return player.countCards("hs") > 0;
					},
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "useCardAfter" },
						filter: function (event, player) {
							return event.skill == "xiongmang";
						},
						forced: true,
						popup: false,
						content: function () {
							if (!game.getGlobalHistory("changeHp", evt => evt.getParent().name == 'damage' && evt.getParent().card && evt.getParent().card == trigger.card).length) {
								player.loseMaxHp();
							} else {
								player.addTempSkill("xiongmang_more", ["phaseChange", "phaseAfter"]);
								player.addMark("xiongmang_more", 1, false);
							}
						},
					},
					more: {
						charlotte: true,
						onremove: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == "sha") return num + player.countMark("xiongmang_more");
							},
						},
						intro: { content: "使用【杀】的额定次数+#" },
					},
				},
			},
			//庞德公
			heqia: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(
						(current) => current.countCards(current == player ? "he" : "h") > 0
					);
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						prompt: get.prompt("heqia"),
						prompt2:
							"操作提示：选择要给出的牌和目标角色，或直接选择一名目标角色，令其将牌交给自己",
						filterCard: true,
						position: "he",
						selectCard: function () {
							if (ui.selected.targets.length && !ui.selected.targets[0].countCards("h"))
								return [1, Infinity];
							return [0, Infinity];
						},
						filterTarget: function (card, player, target) {
							if (player == target) return false;
							if (!ui.selected.cards.length) return target.countCards("h") > 0;
							return true;
						},
						ai1: function (card) {
							if (!_status.event.nogive || ui.selected.cards.length) return 0 - get.value(card);
							return 1 / Math.max(1, get.value(card));
						},
						ai2: function (target) {
							return (get.attitude(player, target) - 0.1) * (ui.selected.cards.length ? 1 : -1);
						},
						nogive: !game.hasPlayer(function (current) {
							return (
								current != player &&
								get.attitude(player, current) <= 0 &&
								current.countCards("h") > 0
							);
						}),
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("heqia", target);
						if (result.cards.length) {
							player.give(result.cards, target);
							event.source = target;
							event.num = result.cards.length;
							event.goto(4);
						}
					} else event.finish();
					"step 2";
					var he = target.getCards("he");
					if (he.length > 0) {
						if (he.length > 1)
							target
								.chooseCard(
									"he",
									true,
									[1, Infinity],
									"选择交给" + get.translation(player) + "任意张牌"
								)
								.set("ai", (card) => -get.value(card));
						else event._result = { bool: true, cards: he };
					} else event.finish();
					"step 3";
					if (result.bool) {
						event.source = player;
						target.give(result.cards, player);
						event.num = result.cards.length;
					} else event.finish();
					"step 4";
					if (source && source.isIn() && source.countCards("h") > 0) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) != "basic") continue;
							if (source.hasUseTarget({ name: name }, false)) list.push(["基本", "", name]);
							if (name == "sha") {
								for (var nature of lib.inpile_nature) {
									if (source.hasUseTarget({ name: name, nature: nature }, false))
										list.push(["基本", "", name, nature]);
								}
							}
						}
						if (list.length) {
							source
								.chooseButton(["是否将一张手牌当做一种基本牌使用？", [list, "vcard"]])
								.set("ai", (button) =>
									_status.event.player.getUseValue(
										{ name: button.link[2], nature: button.link[3] },
										false
									)
								);
						} else event.finish();
					} else event.finish();
					"step 5";
					if (result.bool) {
						var card = { name: result.links[0][2], nature: result.links[0][3] };
						game.broadcastAll(function (card) {
							lib.skill.heqia_backup.viewAs = card;
						}, card);
						var next = source.chooseToUse();
						next.set("openskilldialog", "将一张手牌当做" + get.translation(card) + "使用");
						next.set("norestore", true);
						next.set("addCount", false);
						next.set("_backupevent", "heqia_backup");
						next.set("custom", {
							add: {},
							replace: { window: function () {} },
						});
						next.backup("heqia_backup");
					}
				},
				group: "heqia_add",
				subSkill: {
					backup: {
						filterCard: function (card) {
							return get.itemtype(card) == "card";
						},
						position: "h",
						filterTarget: lib.filter.targetEnabled,
						selectCard: 1,
						check: (card) => 6 - get.value(card),
						log: false,
						precontent: function () {
							delete event.result.skill;
						},
					},
					add: {
						trigger: { global: "useCard2" },
						charlotte: true,
						direct: true,
						filter: function (event, player) {
							var evt = event.getParent(2);
							if (
								evt.name != "heqia" ||
								evt.player != player ||
								!event.targets ||
								evt.num <= event.targets.length
							)
								return false;
							var card = event.card,
								info = get.info(card);
							if (info.allowMultiple == false) return false;
							if (event.targets && !info.multitarget) {
								if (
									game.hasPlayer(function (current) {
										return (
											!event.targets.includes(current) &&
											lib.filter.targetEnabled2(card, event.player, current)
										);
									})
								) {
									return true;
								}
							}
							return false;
						},
						content: function () {
							"step 0";
							var num = trigger.getParent(2).num - trigger.targets.length;
							var prompt2 =
								"是否为" +
								get.translation(trigger.card) +
								"增加至多" +
								get.cnNumber(num) +
								"个目标？";
							trigger.player
								.chooseTarget(prompt2, [1, num], function (card, player, target) {
									var player = _status.event.player;
									return (
										!_status.event.targets.includes(target) &&
										lib.filter.targetEnabled2(_status.event.card, player, target)
									);
								})
								.set("ai", function (target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, player, player);
								})
								.set("card", trigger.card)
								.set("targets", trigger.targets);
							"step 1";
							if (result.bool) {
								trigger.player.line(result.targets);
								game.log(result.targets, "也成为了", trigger.card, "的目标");
								trigger.targets.addArray(result.targets);
							}
						},
					},
				},
			},
			yinyi: {
				audio: 2,
				trigger: { player: "damageBegin1" },
				forced: true,
				usable: 1,
				filter: function (event, player) {
					return (
						event.source &&
						event.source.hp != player.hp &&
						!event.hasNature("linked") &&
						event.source.countCards("h") != player.countCards("h")
					);
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage")) {
								if (player.hp == target.hp || lib.linked.includes(get.nature(card))) return;
								var cards = [card];
								if (card.cards && card.cards.length) cards.addArray(card.cards);
								if (ui.selected.cards.length) cards.addArray(ui.selected.cards);
								if (
									player.countCards("h", function (card) {
										return !cards.includes(card);
									}) == target.countCards("h")
								)
									return;
								return "zeroplayertarget";
							}
						},
					},
				},
			},
			//韩猛
			jieliang: {
				trigger: { global: "phaseDrawBegin2" },
				direct: true,
				filter: function (event, player) {
					return (
						event.player != player &&
						!event.numFixed &&
						event.num > 1 &&
						player.countCards("he") > 0
					);
				},
				content: function () {
					"step 0";
					event.target = trigger.player;
					player
						.chooseToDiscard(get.prompt2("jieliang", event.target), "he")
						.set("goon", get.attitude(player, trigger.player) < -2)
						.set("ai", function (card) {
							if (!_status.event.goon) return 0;
							return 7 - get.value(card);
						}).logSkill = ["jieliang", event.target];
					"step 1";
					if (result.bool) {
						trigger.num--;
						if (get.mode() != "identity" || player.identity != "nei") player.addExpose(0.15);
						target.addMark("jieliang_less", 1, false);
						target.addTempSkill("jieliang_less");
						player.addTempSkill("jieliang_gain");
					}
				},
				subSkill: {
					less: {
						charlotte: true,
						mod: {
							maxHandcard: function (player, num) {
								return num - player.countMark("jieliang_less");
							},
						},
						onremove: true,
						intro: { content: "手牌上限-#" },
					},
					gain: {
						trigger: { global: "loseAfter" },
						charlotte: true,
						direct: true,
						filter: function (event, player) {
							return (
								event.type == "discard" &&
								event.player == _status.currentPhase &&
								event.getParent(3).name == "phaseDiscard" &&
								event.cards2.filterInD("d").length > 0
							);
						},
						content: function () {
							"step 0";
							player
								.chooseButton(["截粮：是否获得一张牌?", trigger.cards2.filterInD("d")])
								.set("ai", function (button) {
									return get.value(button.link, _status.event.player);
								});
							"step 1";
							if (result.bool) {
								player.logSkill("jieliang", trigger.player);
								player.gain(result.links, "gain2");
							}
						},
					},
				},
			},
			quanjiu: {
				audio: 2,
				mod: {
					aiOrder: function (player, card, num) {
						if ((card.name == "jiu" || card.name == "xujiu") && get.name(card) == "sha")
							return num + 0.5;
					},
					cardname: function (card, player, name) {
						if (card.name == "jiu" || card.name == "xujiu") return "sha";
					},
				},
				trigger: { player: "useCard1" },
				forced: true,
				filter: function (event, player) {
					return (
						event.addCount !== false &&
						event.card.isCard &&
						event.card.name == "sha" &&
						event.cards.length == 1 &&
						(event.cards[0].name == "jiu" || event.cards[0].name == "xujiu")
					);
				},
				content: function () {
					trigger.addCount = false;
					player.getStat().card.sha--;
				},
			},
			//辛评
			fuyuan: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				filter: function (event, player) {
					var target = _status.currentPhase;
					return target && target != player && target.isIn();
				},
				logTarget: function (event, player) {
					var target = _status.currentPhase;
					return target.countCards("h") < player.countCards("h") ? target : player;
				},
				check: function (event, player) {
					var target = lib.skill.fuyuan.logTarget(event, player);
					return get.attitude(player, target) > 0;
				},
				prompt: "是否发动【辅袁】？",
				prompt2: function (event, player) {
					var target = lib.skill.fuyuan.logTarget(event, player);
					return "令" + get.translation(target) + (target == player ? "（你）" : "") + "摸一张牌";
				},
				content: function () {
					lib.skill.fuyuan.logTarget(trigger, player).draw();
				},
			},
			zhongjie: {
				trigger: { player: "die" },
				direct: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "gray",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("zhongjie"), lib.filter.notMe)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						//player.awakenSkill('zhongjie');
						var target = result.targets[0];
						player.logSkill("zhongjie", target);
						target.gainMaxHp();
						target.recover();
						target.draw();
					}
				},
			},
			//张宁
			tianze: {
				audio: 2,
				trigger: { global: "useCardAfter" },
				filter: function (event, player) {
					return (
						player != event.player &&
						event.player.isIn() &&
						get.color(event.card) == "black" &&
						event.player.hasHistory("lose", function (evt) {
							return evt && evt.hs.length && evt.getParent() == event;
						}) &&
						event.player.isPhaseUsing() &&
						!player.hasSkill("tianze_block") &&
						player.hasCard(card => {
							if (_status.connectMode && get.position(card) == "h") return true;
							return get.color(card, player) == "black";
						}, "he")
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard(
							"he",
							function (card, player) {
								return get.color(card, player) == "black";
							},
							get.prompt("tianze", trigger.player),
							"弃置一张黑色牌并对其造成1点伤害"
						)
						.set("ai", function (card) {
							if (!_status.event.goon) return 0;
							return 8 - get.value(card);
						})
						.set("goon", get.damageEffect(trigger.player, player, player) > 0)
						.set("logSkill", ["tianze", trigger.player])
						.forResult();
				},
				popup: false,
				async content(event, trigger, player) {
					player.addTempSkill("tianze_block");
					if (get.mode() != "identity" || player.identity != "nei") player.addExpose(0.2);
					await trigger.player.damage();
					await game.asyncDelayx();
				},
				group: "tianze_draw",
				subSkill: {
					block: { charlotte: true },
					draw: {
						audio: "tianze",
						trigger: { global: "judgeEnd" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return event.player != player && event.result && event.result.color == "black";
						},
						content: function () {
							player.draw();
						},
					},
				},
			},
			difa: {
				trigger: { player: "gainAfter" },
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i of event.cards) {
						if (
							hs.includes(i) &&
							get.color(i, player) == "red" &&
							lib.filter.cardDiscardable(i, player, "difa")
						)
							return true;
					}
					return false;
				},
				async cost(event, trigger, player) {
					let hs = player.getCards("h"),
						cards = trigger.cards.filter(function (i) {
							return hs.includes(i) && get.color(i, player) == "red" && lib.filter.cardDiscardable(i, player, "difa");
						}),
						tricks = [];
					for(let i = 0; i < ui.cardPile.childNodes.length; i++){
						let card = ui.cardPile.childNodes[i], type = get.type2(card, false);
						if (type != "trick" || tricks.includes(type)) continue;
						tricks.push([card.name, get.event().player.getUseValue(card)]);
					}
					for(let i = 0; i < ui.discardPile.childNodes.length; i++){
						let card = ui.discardPile.childNodes[i], type = get.type2(card, false);
						if (type != "trick" || tricks.includes(type)) continue;
						tricks.push([card.name, get.event().player.getUseValue(card)]);
					}
					tricks.sort((a, b) => b[1] - a[1]);
					let result = await player.chooseToDiscard(get.prompt2("difa"), card => {
						return get.event().cards.includes(card);
					}).set("ai", card => {
						let val = get.event().val;
						if (typeof val !== "number") return 0;
						return val - get.value(card);
					}).set("val", function () {
						if (!tricks.length) return false;
						return 3 * tricks[0][1];
					}()).set("cards", cards).forResult();
					event.result = {
						bool: result.bool,
						cost_data: tricks
					};
				},
				usable: 1,
				async content(event, trigger, player) {
					let list = lib.inpile.filter(function (i) {
						return get.type2(i, false) == "trick";
					});
					if (!list.length) return;
					const result = await player
						.chooseButton(["选择获得一种锦囊牌", [list.map(i => ["锦囊", "", i]), "vcard"]], true)
						.set("ai", function (button) {
							var name = button.link[2];
							for (let i of get.event().list) {
								if (i[0] == name) return i[1];
							}
							return 0;
						})
						.set("list", event.cost_data)
						.forResult();
					if (result.bool) {
						let card = get.cardPile(i => {
							return i.name == result.links[0][2];
						});
						if (card) await player.gain(card, "gain2");
					}
				},
			},
			//童渊
			chaofeng: {
				audio: 2,
				trigger: { source: "damageBegin1" },
				direct: true,
				filter: function (event, player) {
					return (
						player.countCards("h") > 0 && player.isPhaseUsing() && !player.hasSkill("chaofeng2")
					);
				},
				content: function () {
					"step 0";
					var str = "弃置一张手牌并摸一张牌",
						color,
						type;
					if (trigger.card) {
						type = get.type2(trigger.card, false);
						color = get.color(trigger.card, false);
						if (color != "none") str += "；若弃置" + get.translation(color) + "牌则改为摸两张牌";
						if (type) str += "；若弃置类型为" + get.translation(type) + "的牌则伤害+1";
					}
					var next = player.chooseToDiscard("h", get.prompt("chaofeng", trigger.player), str);
					next.set("ai", function (card) {
						var player = _status.event.player,
							att = _status.event.att;
						var val = 4.2 - get.value(card);
						if (get.color(card) == _status.event.color) val += 3;
						if (get.type2(card) == _status.event.type) {
							if (att < 0) val += 4;
							else if (att === 0) val += 2;
							else val = 0;
						}
						return val;
					});
					next.set("att", get.attitude(player, trigger.player));
					next.logSkill = ["chaofeng", trigger.player];
					if (color != "none") {
						event.color = color;
						next.set("color", color);
					}
					if (type) {
						event.type = type;
						next.set("type", type);
					}
					"step 1";
					if (result.bool) {
						player.addTempSkill("chaofeng2", "phaseUseEnd");
						var card = result.cards[0];
						player.draw(
							event.color &&
								get.color(card, card.original == "h" ? player : false) == event.color
								? 2
								: 1
						);
						if (
							event.type &&
							get.type2(card, card.original == "h" ? player : false) == event.type
						)
							trigger.num++;
					}
				},
			},
			chaofeng2: {},
			chuanshu: {
				audio: 2,
				trigger: { player: ["phaseZhunbeiBegin", "die"] },
				direct: true,
				limited: true,
				forceDie: true,
				filter: function (event, player) {
					return player.isDamaged() && (event.name == "die" || player.isIn());
				},
				skillAnimation: true,
				animationColor: "gray",
				content: function () {
					"step 0";
					player
						.chooseTarget(lib.filter.notMe, get.prompt("chuanshu"), "令一名其他角色获得〖朝凤〗")
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set("forceDie", true);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.awakenSkill("chuanshu");
						player.logSkill("chuanshu", target);
						target.addSkills("chaofeng");
						if (player.isDead()) event.finish();
					} else event.finish();
					"step 2";
					player.addSkills(lib.skill.chuanshu.derivation);
				},
				derivation: ["ollongdan", "drlt_congjian", "chuanyun"],
				ai: {
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage")) {
								if (target.isHealthy()) return [1, 3];
							}
							else if (get.tag(card, "recover") && target.getDamagedHp() == 1) return [0, 0];
						}
					}
				}
			},
			longdan_tongyuan: { audio: true },
			ocongjian_tongyuan: { audio: true },
			chuanyun: {
				audio: true,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.card.name == "sha" && event.target.countCards("e") > 0;
				},
				logTarget: "target",
				content: function () {
					var target = trigger.target;
					card = target.getCards("e").randomGet();
					if (card) target.discard(card);
				},
			},
			//南华老仙
			jinghe: {
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.hasSkill("jinghe_clear");
				},
				selectCard: function () {
					if (ui.selected.targets.length) return [ui.selected.targets.length, 4];
					return [1, 4];
				},
				selectTarget: function () {
					return ui.selected.cards.length;
				},
				filterTarget: true,
				filterCard: function (card) {
					if (ui.selected.cards.length) {
						var name = get.name(card);
						for (var i of ui.selected.cards) {
							if (get.name(i) == name) return false;
						}
					}
					return true;
				},
				check: function (card) {
					var player = _status.event.player;
					if (
						game.countPlayer(function (current) {
							return get.attitude(player, current) > 0;
						}) > ui.selected.cards.length
					)
						return 1;
					return 0;
				},
				position: "h",
				complexCard: true,
				discard: false,
				lose: false,
				delay: false,
				multitarget: true,
				multiline: true,
				content: function () {
					"step 0";
					player.showCards(cards, get.translation(player) + "发动了【经合】");
					event.skills = lib.skill.jinghe.derivation.randomGets(4);
					player.addTempSkill("jinghe_clear", { player: "phaseBegin" });
					event.targets.sortBySeat();
					event.num = 0;
					"step 1";
					event.target = targets[num];
					event.num++;
					event.target
						.chooseControl(event.skills, "cancel2")
						.set(
							"choiceList",
							event.skills.map(function (i) {
								return (
									'<div class="skill">【' +
									get.translation(
										lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)
									) +
									"】</div><div>" +
									get.skillInfoTranslation(i, player) +
									"</div>"
								);
							})
						)
						.set("displayIndex", false)
						.set("prompt", "选择获得一个技能");
					"step 2";
					var skill = result.control;
					if (skill != "cancel2") {
						event.skills.remove(skill);
						target.addAdditionalSkills("jinghe_" + player.playerid, skill, true);
						target.popup(skill);
					}
					if (event.num < event.targets.length) event.goto(1);
					if (target != game.me && !target.isOnline2()) game.delayx();
				},
				ai: {
					threaten: 3,
					order: 10,
					result: {
						target: 1,
					},
				},
				derivation: [
					"releiji",
					"rebiyue",
					"new_retuxi",
					"remingce",
					"xinzhiyan",
					"nhyinbing",
					"nhhuoqi",
					"nhguizhu",
					"nhxianshou",
					"nhlundao",
					"nhguanyue",
					"nhyanzheng",
				],
				subSkill: {
					clear: {
						onremove: function (player) {
							game.countPlayer(function (current) {
								current.removeAdditionalSkills("jinghe_" + player.playerid);
							});
						},
					},
				},
			},
			gongxiu: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return player.hasSkill("jinghe_clear");
				},
				content: function () {
					"step 0";
					event.list1 = [];
					event.list2 = [];
					event.addIndex = 0;
					var choices = [];
					game.countPlayer(function (current) {
						if (current.additionalSkills["jinghe_" + player.playerid]) event.list1.push(current);
						else event.list2.push(current);
					});
					event.list1.sortBySeat();
					if (event.list1.length)
						choices.push(
							"令" +
								get.translation(event.list1) +
								(event.list1.length > 1 ? "各" : "") +
								"摸一张牌"
						);
					else event.addIndex++;
					event.list2.sortBySeat();
					if (event.list2.length)
						choices.push(
							"令" +
								get.translation(event.list2) +
								(event.list2.length > 1 ? "各" : "") +
								"弃置一张手牌"
						);
					player
						.chooseControl("cancel2")
						.set("choiceList", choices)
						.set("prompt", get.prompt("gongxiu"))
						.set("", function () {
							var evt = _status.event.getParent();
							if (
								evt.list2.filter(function (current) {
									return get.attitude(player, current) <= 0 && !current.hasSkillTag("noh");
								}).length -
									evt.list1.length >
								1
							)
								return 1 - evt.addIndex;
							return 0;
						});
					"step 1";
					if (result.control != "cancel2") {
						if (result.index + event.addIndex == 0) {
							player.logSkill("gongxiu", event.list1);
							game.asyncDraw(event.list1);
						} else {
							player.logSkill("gongxiu", event.list2);
							for (var i of event.list2) i.chooseToDiscard("h", true);
							event.finish();
						}
					} else event.finish();
					"step 2";
					game.delayx();
				},
				ai: {
					combo: "jinghe",
				},
			},
			nhyinbing: {
				trigger: { source: "damageBefore" },
				forced: true,
				filter: function (event, player) {
					return event.card && event.card.name == "sha";
				},
				content: function () {
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
				group: "nhyinbing_draw",
				subSkill: {
					draw: {
						trigger: { global: "loseHpAfter" },
						forced: true,
						filter: function (event, player) {
							return player != event.player;
						},
						content: function () {
							player.draw();
						},
					},
				},
				ai: {
					jueqing: true,
				},
			},
			nhhuoqi: {
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				position: "he",
				filterCard: true,
				filterTarget: function (card, player, target) {
					return target.isMinHp();
				},
				check: function (card) {
					return 7 - get.value(card);
				},
				content: function () {
					target.recover();
					target.draw();
				},
				ai: {
					order: 1,
					tag: {
						draw: 1,
						recover: 1,
					},
					result: {
						target: function (player, target) {
							if (target.isDamaged()) return 3;
							if (ui.selected.cards.length) return 0;
							return 1;
						},
					},
				},
			},
			nhguizhu: {
				trigger: { global: "dying" },
				usable: 1,
				logTarget: "player",
				frequent: true,
				content: function () {
					player.draw(2);
				},
			},
			nhxianshou: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				content: function () {
					target.draw(target.isHealthy() ? 2 : 1);
				},
				ai: {
					order: 1,
					tag: {
						draw: 1,
					},
					result: {
						target: function (player, target) {
							return target.isHealthy() ? 2 : 0.5;
						},
					},
				},
			},
			nhlundao: {
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					return (
						event.source &&
						player != event.source &&
						player.countCards("h") != event.source.countCards("h")
					);
				},
				logTarget: "source",
				check: function (event, player) {
					return (
						player.countCards("h") < event.source.countCards("h") ||
						get.effect(event.source, { name: "guohe_copy2" }, player, player) > 0
					);
				},
				content: function () {
					if (player.countCards("h") > trigger.source.countCards("h")) player.draw();
					else player.discardPlayerCard(trigger.source, "he", true);
				},
			},
			nhguanyue: {
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				content: function () {
					"step 0";
					var cards = get.cards(2);
					player
						.chooseButton(["观月：选择获得一张牌", cards.slice(0)], true)
						.set("ai", function (button) {
							return get.value(button.link, _status.event.player);
						});
					while (cards.length) {
						ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
					}
					"step 1";
					if (result.bool) {
						player.gain(result.links, "gain2");
					}
				},
			},
			nhyanzheng: {
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseCard("h", get.prompt("nhyanzheng"))
						.set(
							"goon",
							(function () {
								var num = player.countCards("h") - 1;
								return (
									game.countPlayer(function (current) {
										return get.damageEffect(current, player, player) > 0;
									}) >= Math.min(3, num)
								);
							})()
						)
						.set("ai", function (card) {
							if (_status.event.goon) return Math.max(1, get.value(card));
							return 0;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("nhyanzheng");
						var cards = player.getCards("h", function (card) {
							return (
								card != result.cards[0] &&
								lib.filter.cardDiscardable(card, player, "nhyanzheng")
							);
						});
						if (cards.length) {
							player.discard(cards);
							event.num = cards.length;
						} else event.finish();
					} else event.finish();
					"step 2";
					num = Math.min(num, game.countPlayer());
					player
						.chooseTarget(
							[1, num],
							true,
							"对" + (num > 1 ? "至多" : "") + get.cnNumber(num) + "名角色造成1点伤害"
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 3";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.line(targets, "green");
						for (var i of targets) i.damage();
					}
				},
			},
			//樊稠
			xinxingluan: {
				audio: "xinfu_xingluan",
				usable: 1,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					return player.isPhaseUsing();
				},
				async cost(event, trigger, player) {
					const choiceList = [
							"观看牌堆中两张点数为6的牌并获得其中一张",
							"令一名其他角色弃置一张点数为6的牌或交给你一张牌",
							"获得场上一张点数为6的牌",
						],
						choices = ["选项一"];
					if (game.hasPlayer((current) => current != player && current.countCards("he") > 0)) {
						choices.push("选项二");
					} else {
						choiceList[1] = `<span style="opacity:0.5">${choiceList[1]}</span>`;
					}
					if (
						game.hasPlayer((current) => {
							return current.hasCard(function (card) {
								return get.number(card) == 6 && lib.filter.canBeGained(card, current, player);
							}, "ej");
						})
					) {
						choices.push("选项三");
					} else {
						choiceList[2] = `<span style="opacity:0.5">${choiceList[2]}</span>`;
					}
					const result = await player
						.chooseControl(choices, "cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt("xinxingluan"))
						.set("ai", function () {
							var player = _status.event.player;
							if (
								game.hasPlayer(function (current) {
									if (current == player) return false;
									var att = -get.sgn(get.attitude(player, current) - 0.1);
									return current.hasCard(function (card) {
										return (
											get.number(card) == 6 &&
											lib.filter.canBeGained(card, current, player) &&
											get.sgn(get.useful(card, current)) == att
										);
									}, "ej");
								})
							)
								return "选项三";
							if (
								game.hasPlayer(function (target) {
									if (target == player) return false;
									var att = get.attitude(player, target);
									return (
										att < 0 &&
										target.countCards("he") > 0 &&
										!target.hasCard(function (card) {
											return get.value(card, target) <= 0;
										}, "he")
									);
								})
							)
								return "选项二";
							return "选项一";
						})
						.forResult();
					if (result.control !== "cancel2") {
						const results = { bool: true, cost_data: { index: choices.indexOf(result.control) } };
						if (results.cost_data.index === 1) {
							const { targets } = await player
								.chooseTarget(
									"令一名其他角色弃置一张点数为6的牌，否则交给你一张牌",
									true,
									function (card, player, current) {
										return current != player && current.countCards("he") > 0;
									}
								)
								.set("ai", function (target) {
									var player = _status.event.player,
										att = get.attitude(player, target);
									if (att >= 0) return 0;
									if (
										!target.hasCard(function (card) {
											return get.value(card, target) <= 0;
										}, "he")
									)
										return -att / Math.sqrt(target.countCards("he"));
									return 0;
								})
								.forResult();
							results.targets = targets;
						} else if (results.cost_data.index === 2) {
							const { targets } = await player
								.chooseTarget(
									"获得一名角色装备区或判定区内点数为6的牌",
									true,
									function (card, player, current) {
										return current.hasCard(function (card) {
											return (
												get.number(card) == 6 &&
												lib.filter.canBeGained(card, current, player)
											);
										}, "ej");
									}
								)
								.set("ai", function (target) {
									var player = _status.event.player,
										att = -get.sgn(get.attitude(player, target) - 0.1),
										max = 0,
										ej = target.getCards("ej", function (card) {
											return (
												get.number(card) == 6 &&
												lib.filter.canBeGained(card, target, player)
											);
										});
									for (var i of ej) {
										var num = get.useful(i, target) * att;
										if (num > max) max = num;
										return max;
									}
								})
								.forResult();
							results.targets = targets;
						}
						event.result = results;
					}
				},
				content: function () {
					"step 0";
					var result = event.cost_data;
					if (result.index === 1) event.goto(4);
					else if (result.index === 2) event.goto(3);
					"step 1";
					var cards = [];
					while (cards.length < 2) {
						var card = get.cardPile2(function (card) {
							return !cards.includes(card) && get.number(card) == 6;
						});
						if (!card) break;
						cards.push(card);
					}
					if (!cards.length) {
						player.draw(6);
						event.finish();
					} else if (cards.length == 1) {
						event._result = { bool: true, links: cards };
					} else
						player
							.chooseButton(["兴乱：选择获得其中一张", cards], true)
							.set("ai", function (button) {
								return get.value(button.link, _status.event.player);
							});
					"step 2";
					if (result.bool) {
						player.gain(result.links, "gain2");
					}
					event.finish();
					"step 3";
					var target = targets[0];
					player.gainPlayerCard(target, "ej", true).set("filterButton", function (button) {
						return get.number(button.link) == 6;
					});
					event.finish();
					"step 4";
					var target = targets[0];
					event.target = target;
					target.chooseToDiscard(
						"he",
						"弃置一张点数为6的牌，否则交给" + get.translation(player) + "一张牌",
						function (card) {
							return get.number(card) == 6;
						}
					).ai = (card) => 8 - get.value(card);
					"step 5";
					if (!result.bool) {
						target.chooseCard("he", true, "交给" + get.translation(player) + "一张牌");
					} else event.finish();
					"step 6";
					if (result.bool) target.give(result.cards, player, "giveAuto");
				},
			},
			rexingluan: {
				audio: "xinfu_xingluan",
				usable: 1,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					return (
						event.targets &&
						event.targets.length == 1 &&
						typeof get.number(event.card, false) == "number" &&
						player.isPhaseUsing()
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var str = "",
						num = get.number(trigger.card, false),
						nums = get.strNumber(num);
					var list = game.filterPlayer(function (current) {
						return current.hasCard(function (card) {
							return get.number(card) == num && lib.filter.canBeGained(card, current, player);
						}, "ej");
					});
					if (list.length) {
						str +=
							"获得一名角色装备区或判定区内的一张点数为" +
							nums +
							"的牌，或直接从牌堆中获得一张点数为" +
							nums +
							"的牌";
						player
							.chooseTarget(
								get.prompt("rexingluan"),
								str,
								[0, 1],
								function (card, player, target) {
									return _status.event.targets.includes(target);
								}
							)
							.set("targets", list)
							.set("ai", function (target) {
								if (!target) return 1;
								var player = _status.event.player,
									num = get.number(_status.event.getTrigger().card, false),
									att = -get.sgn(get.attitude(player, target));
								if (
									target.hasCard(function (card) {
										return (
											get.number(card) == num &&
											get.effect(target, card, target, player) < 0
										);
									}, "j")
								)
									return 1.2 * Math.abs(get.attitude(player, target));
								if (
									target.hasCard(function (card) {
										return (
											get.number(card) == num &&
											get.sgn(get.value(card, target) + 0.1) == att
										);
									}, "e")
								)
									return Math.abs(get.attitude(player, target));
								return 0;
							});
					} else {
						player.chooseBool(
							get.prompt("rexingluan"),
							"从牌堆中获得一张点数为" + nums + "的牌"
						).ai = () => true;
					}
					"step 1";
					if (result.bool) {
						if (result.targets && result.targets.length) {
							var target = result.targets[0];
							player.logSkill("rexingluan", target);
							player
								.gainPlayerCard(target, "ej", true)
								.set("num", get.number(trigger.card, false))
								.set("filterButton", function (button) {
									return get.number(button.link) == _status.event.num;
								});
						} else {
							player.logSkill("rexingluan");
							var num = get.number(trigger.card, false),
								card = get.cardPile2(function (i) {
									return get.number(i, false) == num;
								});
							if (card) player.gain(card, "gain2");
						}
					}
				},
			},
			//杜夫人
			yise: {
				audio: 2,
				trigger: {
					global: "gainAfter",
					player: "loseAsyncAfter",
				},
				filter: function (event, player) {
					if (event.name == "loseAsync") {
						if (event.type != "gain") return false;
					}
					var cards = event.getl(player).cards2;
					return game.hasPlayer(function (current) {
						if (current == player) return false;
						var cardsx = event.getg(current);
						for (var i of cardsx) {
							if (cards.includes(i)) {
								if (current.isDamaged()) return true;
								return get.color(i, player) == "black";
							}
						}
						return false;
					});
				},
				direct: true,
				content: function () {
					"step 0";
					var cards = trigger.getl(player).cards2;
					event.cards = cards;
					event.targets = game
						.filterPlayer(function (current) {
							if (current == player) return false;
							var cardsx = trigger.getg(current);
							for (var i of cardsx) {
								if (cards.includes(i)) return true;
							}
							return false;
						})
						.sortBySeat();
					if (!event.targets.length) event.finish();
					"step 1";
					var target = targets.shift();
					var cardsx = trigger.getg(target);
					var goon = false;
					for (var i of cardsx) {
						if (cards.includes(i)) {
							if (target.isDamaged() || get.color(i, player) == "black") {
								goon = true;
								break;
							}
						}
					}
					if (goon) {
						var next = game.createEvent("yise_insert");
						next.player = player;
						next.target = target;
						next.cards = cardsx;
						next.setContent(lib.skill.yise.contentx);
					}
					if (targets.length > 0) event.redo();
				},
				contentx: function () {
					"step 0";
					for (var i of cards) {
						event[get.color(i, player)] = true;
						if (event.red && event.black) break;
					}
					if (event.red && target.isDamaged()) {
						player
							.chooseBool(
								get.prompt("yise", target),
								"令" + get.translation(target) + "回复1点体力"
							)
							.set(
								"ai",
								() =>
									get.recoverEffect(
										_status.event.getParent().target,
										_status.event.player,
										_status.event.player
									) > 0
							);
					}
					"step 1";
					if (event.black || (event.red && result.bool)) player.logSkill("yise", target);
					if (event.red && result.bool) target.recover();
					if (event.black) {
						target.addMark("yise_damage", 1, false);
						target.addSkill("yise_damage");
					}
				},
				subSkill: {
					damage: {
						trigger: { player: "damageBegin1" },
						forced: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return event.card && event.card.name == "sha" && event.getParent().name == "sha";
						},
						content: function () {
							trigger.num += player.countMark("yise_damage");
							player.removeSkill("yise_damage");
						},
						intro: {
							content: "下一次受到杀的伤害+#",
						},
					},
				},
			},
			shunshi: {
				trigger: { player: ["damageEnd", "phaseZhunbeiBegin"] },
				direct: true,
				filter: function (event, player) {
					return (
						(event.name != "damage" || player != _status.currentPhase) &&
						player.countCards("he") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current != event.source;
						})
					);
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						prompt: get.prompt("shunshi"),
						prompt2: "将一张牌交给一名其他角色，并获得+1效果",
						filterCard: true,
						filterTarget: function (card, player, target) {
							return target != player && target != _status.event.source;
						},
						position: "he",
						source: trigger.source,
						ai1: function (card) {
							var player = _status.event.player;
							if (player.hasSkill("yise")) {
								if (
									get.color(card, player) == "red" &&
									game.hasPlayer(function (current) {
										return (
											current != player &&
											current != _status.event.source &&
											current.isDamaged() &&
											get.recoverEffect(current, player, player) > 0
										);
									})
								)
									return 10 - get.value(card);
								if (get.color(card, player) == "black") return 4 - get.value(card);
							}
							return 8 - get.value(card);
						},
						ai2: function (target) {
							var player = _status.event.player,
								card = ui.selected.cards[0];
							if (player.hasSkill("yise")) {
								if (get.color(card) == "red" && target.isDamaged())
									return 2 * get.recoverEffect(target, player, player);
								if (get.color(card) == "black") return -get.attitude(player, target);
							}
							if (get.value(card, target) < 0) return -get.attitude(player, target);
							if (get.value(card, target) < 1) return 0.01 * -get.attitude(player, target);
							return (
								Math.max(1, get.value(card, target) - get.value(card, player)) *
								get.attitude(player, target)
							);
						},
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("shunshi", target);
						player.give(result.cards, target);
						player.addMark("shunshi_mark", 1, false);
						player.addTempSkill("shunshi_mark", { player: "phaseEnd" });
					}
				},
				subSkill: {
					mark: {
						onremove: true,
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						charlotte: true,
						popup: false,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							trigger.num += player.countMark("shunshi_mark");
						},
						mod: {
							maxHandcard: function (player, num) {
								return num + player.countMark("shunshi_mark");
							},
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("shunshi_mark");
							},
						},
						intro: {
							content: "拥有#层效果",
						},
					},
				},
			},
			xianwei: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return player.hasEnabledSlot();
				},
				content: function () {
					"step 0";
					player.chooseToDisable().ai = function (event, player, list) {
						var getVal = function (num) {
							var card = player.getEquip(num);
							if (card) {
								var val = get.value(card);
								if (val > 0) return 0;
								return 5 - val;
							}
							switch (num) {
								case "equip3":
									return 4.5;
								case "equip4":
									return 4.4;
								case "equip5":
									return 4.3;
								case "equip2":
									return (3 - player.hp) * 1.5;
								case "equip1": {
									if (
										game.hasPlayer(function (current) {
											return (
												(get.realAttitude || get.attitude)(player, current) < 0 &&
												get.distance(player, current) > 1
											);
										})
									)
										return 0;
									return 3.2;
								}
							}
						};
						list.sort(function (a, b) {
							return getVal(b) - getVal(a);
						});
						return list[0];
					};
					"step 1";
					var cardType = result.control;
					event.cardType = cardType;
					var num = player.countDisabledSlot();
					if (num < 5) player.draw(5 - num);
					if (!game.hasPlayer(current => current != player)) return;
					player
						.chooseTarget(lib.filter.notMe, true, "令一名其他角色从牌堆中使用一张" + get.translation(cardType) + "牌")
						.set("ai", function (target) {
							var player = _status.event.player,
								type = _status.event.cardType;
							var card = get.cardPile2(function (card) {
								return get.subtype(card) == type && target.canUse(card, target);
							});
							if (!card) return 0;
							return get.effect(target, card, target, player);
						})
						.set("cardType", event.cardType);
					"step 2";
					if (!result.bool) return;
					var target = result.targets[0];
					player.line(target, "green");
					var card = get.cardPile2(function (card) {
						return get.subtype(card) == event.cardType && target.canUse(card, target);
					});
					if (card) target.chooseUseTarget(card, "nopopup", true);
					else target.draw();
				},
				group: "xianwei_all",
				subSkill: {
					all: {
						trigger: { player: "disableEquipAfter" },
						forced: true,
						filter: function (event, player) {
							return !player.hasEnabledSlot();
						},
						content: function () {
							player.gainMaxHp(2);
							player.addSkill("xianwei_effect");
						},
					},
					effect: {
						charlotte: true,
						mark: true,
						intro: { content: "和其他角色视为在彼此的攻击范围内" },
						mod: {
							inRange: () => true,
							inRangeOf: () => true,
						},
					},
				},
			},
			rehuoshui: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					var num = Math.min(game.countPlayer() - 1, Math.max(1, player.getDamagedHp()));
					var str;
					if (num > 1) {
						str = "选择至多" + get.cnNumber(num) + "名其他角色。";
						var list = [
							"第一名角色的非锁定技失效直到回合结束",
							"；第二名角色交给你一张手牌",
							"；第三名及之后角色弃置装备区内的所有牌",
						];
						for (var i = 0; i < Math.min(3, num); i++) {
							str += list[i];
						}
						str += "。";
					} else str = "令一名其他角色的非锁定技本回合内失效";
					player
						.chooseTarget([1, num], get.prompt("rehuoshui"), str, lib.filter.notMe)
						.set("ai", function (target) {
							var att = -get.attitude(_status.event.player, target);
							if (att <= 0) return 0;
							if (
								target.hasSkillTag("maixie") ||
								target.hasSkill("maixie_hp") ||
								target.hasSkill("maixie_defed")
							)
								att *= 3;
							return att / get.threaten(target);
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets;
						player.logSkill("rehuoshui", targets);
						event.targets = targets;
						targets[0].addTempSkill("fengyin");
						if (targets.length < 2) event.goto(6);
					} else event.finish();
					"step 2";
					if (targets[1].countCards("h") == 0) event.goto(targets.length > 2 ? 4 : 6);
					else targets[1].chooseCard("h", true, "交给" + get.translation(player) + "一张手牌");
					"step 3";
					if (result.bool) {
						targets[1].give(result.cards, player);
					}
					"step 4";
					if (targets.length < 3) {
						event.goto(6);
					} else {
						targets.splice(0, 2);
					}
					"step 5";
					var target = targets.shift();
					var num = target.countCards("e");
					if (num > 0) target.chooseToDiscard("e", true, num);
					if (targets.length > 0) event.redo();
					"step 6";
					game.delayx();
				},
			},
			reqingcheng: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer((current) =>
						lib.skill.reqingcheng.filterTarget(null, player, current)
					);
				},
				filterTarget: function (card, player, target) {
					return (
						target != player &&
						target.hasSex("male") &&
						target.countCards("h") <= player.countCards("h")
					);
				},
				content: function () {
					player.swapHandcards(target);
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							if (target.countCards("h") > 0)
								return -Math.max(
									get.value(target.getCards("h"), player) -
										get.value(player.getCards("h"), player),
									0
								);
							return 0;
						},
					},
				},
			},
			//丘力居
			koulve: {
				audio: 2,
				trigger: { source: "damageSource" },
				logTarget: "player",
				filter: function (event, player) {
					return (
						event.player.isDamaged() && event.player.countCards("h") > 0 && player.isPhaseUsing()
					);
				},
				check: function (event, player) {
					if (player.hp == 1 && player.isHealthy()) return false;
					return get.attitude(player, event.player) <= 0;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(trigger.player, "h", true, trigger.player.getDamagedHp());
					"step 1";
					var card = result.cards;
					event.cards = card;
					player.showCards(card, get.translation(player) + "发动了【宼略】");
					"step 2";
					var gains = [],
						red = false;
					var target = trigger.player;
					for (var card of cards) {
						var type = get.type2(card, target);
						if ((type == "basic" || type == "trick") && get.tag(card, "damage") > 0)
							gains.push(card);
						if (!red && get.color(card, target) == "red") red = true;
					}
					if (gains.length) player.gain(gains, "give");
					if (!red) event.finish();
					"step 3";
					player[player.isDamaged() ? "loseMaxHp" : "loseHp"]();
					player.draw(2);
				},
			},
			qljsuiren: {
				audio: 2,
				trigger: { player: "die" },
				direct: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return player.countCards("h", function (card) {
						var type = get.type(card, null, player);
						return (type == "basic" || type == "trick") && get.tag(card, "damage") > 0;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							lib.filter.notMe,
							get.prompt("qljsuiren"),
							"将所有伤害性基本牌和锦囊牌交给一名其他角色"
						)
						.set("forceDie", true)
						.set("ai", function (target) {
							var player = _status.event.player,
								cards = _status.event.aiCards;
							var att = get.attitude(player, target);
							if (att <= 0) return 0;
							if (target.hasSkillTag("nogain")) att /= 100;
							var num = 0.1;
							for (var i of cards) num += Math.max(0, target.getUseValue(card));
							return num * att;
						})
						.set(
							"aiCards",
							player.getCards("h", function (card) {
								var type = get.type(card, null, player);
								return (type == "basic" || type == "trick") && get.tag(card, "damage") > 0;
							})
						);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("qljsuiren", target);
						player.give(
							player.getCards("h", function (card) {
								var type = get.type(card, null, player);
								return (type == "basic" || type == "trick") && get.tag(card, "damage") > 0;
							}),
							target,
							"give"
						);
					}
				},
			},
			//胡车儿
			redaoji: {
				audio: 2,
				trigger: { global: "useCard" },
				direct: true,
				filter: function (event, player) {
					if (
						player == event.player ||
						get.subtype(event.card, false) != "equip1" ||
						(event.player.isDead() && !event.cards.filterInD().length)
					)
						return false;
					var all = event.player.getAllHistory("useCard");
					for (var i of all) {
						if (get.subtype(i.card, false) == "equip1") return i == event;
					}
					return false;
				},
				content: function () {
					"step 0";
					var list = [];
					event.addIndex = 0;
					if (trigger.cards.filterInD().length > 0)
						list.push("获得" + get.translation(trigger.cards.filterInD()));
					else event.addIndex++;
					if (trigger.player.isIn())
						list.push("令" + get.translation(trigger.player) + "本回合不能使用或打出【杀】");
					player
						.chooseControl("cancel2")
						.set("choiceList", list)
						.set("prompt", get.prompt("redaoji", trigger.player))
						.set("ai", function () {
							var evt = _status.event.getParent(),
								player = evt.player,
								evt2 = evt._trigger;
							if (evt.addIndex == 0) {
								var noob = get.attitude(player, evt2.player) < 0 ? 1 : "cancel2";
								if (player.countMark("fuzhong") == 3) return noob;
								if (get.effect(evt2.targets[0], evt2.card, evt2.player, player) <= 0)
									return 0;
								return noob;
							}
							return get.attitude(player, evt2.player) < 0 ? 0 : "cancel2";
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("redaoji", trigger.player);
						game.delayx();
						if (result.index + event.addIndex == 0) {
							player.gain(trigger.cards.filterInD(), "gain2");
						} else trigger.player.addTempSkill("redaoji2");
					}
				},
			},
			redaoji2: {
				charlotte: true,
				mark: true,
				mod: {
					cardEnabled: function (card) {
						if (card.name == "sha") return false;
					},
					cardRespondable: function (card) {
						if (card.name == "sha") return false;
					},
				},
				intro: {
					content: "本回合不能使用或打出杀",
				},
			},
			fuzhong: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					return player.countMark("fuzhong") > 3;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(lib.filter.notMe, "对一名其他角色造成1点伤害", true)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						target.damage("nocard");
					}
					player.removeMark("fuzhong", 4);
				},
				marktext: "重",
				intro: { content: "mark" },
				group: ["fuzhong_gain", "fuzhong_yingzi"],
				mod: {
					maxHandcard: function (player, num) {
						if (player.countMark("fuzhong") > 2) return num + 3;
					},
					globalFrom: function (player, target, num) {
						if (player.countMark("fuzhong") > 1) return num - 2;
					},
				},
				subSkill: {
					gain: {
						audio: "fuzhong",
						trigger: {
							player: "gainAfter",
							global: "loseAsyncAfter",
						},
						forced: true,
						filter: function (event, player) {
							return player != _status.currentPhase && event.getg(player).length > 0;
						},
						content: function () {
							player.addMark("fuzhong", 1);
						},
					},
					yingzi: {
						audio: "fuzhong",
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						filter: function (event, player) {
							return !event.numFixed && player.countMark("fuzhong") > 0;
						},
						content: function () {
							trigger.num++;
						},
					},
				},
			},
			//董承
			xuezhao: {
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.maxHp > 0 && player.countCards("h") > 0;
				},
				filterCard: true,
				position: "h",
				filterTarget: lib.filter.notMe,
				selectTarget: function () {
					return [1, _status.event.player.maxHp];
				},
				check: function (card) {
					return 2 * (_status.event.player.maxHp + 2) - get.value(card);
				},
				content: function () {
					"step 0";
					if (!target.countCards("he")) event._result = { bool: false };
					else
						target
							.chooseCard(
								"he",
								"交给" +
									get.translation(player) +
									"一张牌并摸一张牌，或不能响应其使用的牌直到回合结束"
							)
							.set("ai", function (card) {
								var player = _status.event.player,
									target = _status.event.getParent().player,
									val = get.value(card);
								if (get.attitude(player, target) > 0) {
									if (get.name(card, target) == "sha" && target.hasValueTarget(card))
										return 30 - val;
									return 20 - val;
								}
								return -val;
							});
					"step 1";
					if (result.bool) {
						player.addTempSkill("xuezhao_sha");
						player.addMark("xuezhao_sha", 1, false);
						target.give(result.cards, player);
						target.draw();
					} else {
						player.addTempSkill("xuezhao_hit");
						player.markAuto("xuezhao_hit", [target]);
					}
				},
				contentAfter:function(){
					if(!player.getHistory('gain',evt=>evt.getParent('useSkill')==event.getParent('useSkill')).length) player.drawTo(player.maxHp);
				},
				ai: {
					threaten: 2.4,
					order: 3.6,
					result: {
						player: function (player, target) {
							if (get.attitude(target, player) > 0) {
								if (
									target.countCards("e", function (card) {
										return get.value(card, target) < 0;
									})
								)
									return 3;
								return Math.sqrt(target.countCards("he"));
							}
							if (
								target.mayHaveShan(
									player,
									"use",
									target.getCards("h", (i) => {
										return i.hasGaintag("sha_notshan");
									})
								) &&
								player.countCards("hs", function (card) {
									return (
										!ui.selected.cards.includes(card) &&
										get.name(card) == "sha" &&
										player.canUse(card, target) &&
										get.effect(target, card, player, player) != 0
									);
								})
							)
								return -Math.sqrt(Math.abs(get.attitude(player, target))) / 2;
							return 0.1;
						},
					},
				},
				subSkill: {
					sha: {
						charlotte: true,
						onremove: true,
						marktext: "血",
						intro: { content: "多杀#刀，誓诛曹贼！" },
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("xuezhao_sha");
							},
						},
					},
					hit: {
						charlotte: true,
						onremove: true,
						marktext: "诏",
						intro: { content: "$篡汉，其心可诛！" },
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						content: function () {
							trigger.directHit.addArray(player.getStorage("xuezhao_hit"));
						},
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return player.getStorage("xuezhao_hit").includes(arg.target);
							},
						},
					},
				},
			},
			//唐姬
			kangge: {
				audio: 2,
				trigger: { player: "phaseBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.phaseNumber == 1 &&
						!player.storage.kangge &&
						game.hasPlayer((current) => current != player)
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							"请选择【抗歌】的目标",
							"其于回合外摸牌后，你摸等量的牌；其进入濒死状态时，你可令其回复体力至1点；其死亡后，你弃置所有牌并失去1点体力",
							lib.filter.notMe,
							true
						)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("kangge", target);
						if (get.mode() != "identity" || player.identity != "nei") {
							if (target.identityShown || typeof target.ai.expose == "number" && target.ai.expose > 0.5) player.addExpose(0.4);
						}
						player.addSkill("kangge_clear");
						player.storage.kangge = target;
						player.markSkill("kangge");
						game.delayx();
					}
				},
				intro: { content: "已指定$为目标" },
				group: ["kangge_draw", "kangge_dying", "kangge_die"],
				subSkill: {
					draw: {
						audio: "kangge",
						trigger: {
							global: ["gainAfter", "loseAsyncAfter"],
						},
						forced: true,
						filter: function (event, player) {
							if (player.countMark("kangge_draw") >= 3) return false;
							var target = player.storage.kangge;
							return target && target != _status.currentPhase && event.getg(target).length > 0;
						},
						logTarget: "player",
						content: function () {
							var num = Math.min(
								3 - player.countMark("kangge_draw"),
								trigger.getg(player.storage.kangge).length
							);
							player.addMark("kangge_draw", num, false);
							player.draw(num);
						},
					},
					clear: {
						trigger: { global: "phaseBeginStart" },
						forced: true,
						firstDo: true,
						popup: false,
						charlotte: true,
						filter: function (event, player) {
							return player.countMark("kangge_draw") > 0;
						},
						content: function () {
							player.removeMark("kangge_draw", player.countMark("kangge_draw"), false);
						},
					},
					dying: {
						audio: "kangge",
						trigger: { global: "dying" },
						logTarget: "player",
						filter: function (event, player) {
							return (
								event.player == player.storage.kangge &&
								event.player.hp < 1 &&
								!player.hasSkill("kangge_temp")
							);
						},
						check: function (event, player) {
							return get.attitude(player, event.player) > 0;
						},
						prompt2: "令其将体力值回复至1点",
						content: function () {
							trigger.player.recover(1 - trigger.player.hp);
							player.addTempSkill("kangge_temp", "roundStart");
						},
					},
					temp: {},
					die: {
						audio: "kangge",
						trigger: { global: "dieAfter" },
						filter: function (event, player) {
							return event.player == player.storage.kangge;
						},
						forced: true,
						content: function () {
							var cards = player.getCards("he");
							if (cards.length) player.discard(cards);
							player.loseHp();
						},
					},
				},
				ai: {
					threaten: 2,
				},
			},
			jielie: {
				audio: 2,
				trigger: { player: "damageBegin4" },
				direct: true,
				filter: function (event, player) {
					return (
						(!event.source ||
							(event.source != player && event.source != player.storage.kangge)) &&
						player.storage.kangge &&
						player.storage.kangge.isIn()
					);
				},
				content: function () {
					"step 0";
					player
						.chooseControl(lib.suit.slice(0), "cancel2")
						.set("prompt", get.prompt("jielie"))
						.set(
							"prompt2",
							"防止伤害并改为失去等量体力，且令" +
								get.translation(player.storage.kangge) +
								"从弃牌堆中获得等量的花色牌"
						)
						.set("ai", function () {
							var player = _status.event.player;
							if (get.attitude(player, player.storage.kangge) <= 0) return "cancel2";
							return lib.suit.randomGet();
						});
					"step 1";
					if (result.control != "cancel2") {
						event.suit = result.control;
						player.logSkill("jielie", player.storage.kangge);
						trigger.cancel();
						player.loseHp(trigger.num);
					} else event.finish();
					"step 2";
					var cards = [];
					while (cards.length < trigger.num) {
						var card = get.discardPile(function (card) {
							return get.suit(card, false) == event.suit && !cards.includes(card);
						});
						if (card) cards.push(card);
						else break;
					}
					if (cards.length) player.storage.kangge.gain(cards, "gain2");
				},
			},
			//张横
			dangzai: {
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return (
						!player.isDisabledJudge() &&
						game.hasPlayer(function (current) {
							return (
								current != player &&
								current.countCards("j", function (card) {
									return player.canAddJudge(card);
								}) > 0
							);
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(
						function (card, player, target) {
							return (
								target != player &&
								target.countCards("j", function (card) {
									return player.canAddJudge(card);
								}) > 0
							);
						},
						get.prompt("dangzai"),
						"将一名其他角色判定区内的任意张牌移动到你的判定区内"
					).forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await player.choosePlayerCard(target, "j", true, [1, Infinity]).set("filterButton", function (button) {
						return _status.event.player.canAddJudge(button.link);
					}).forResult();
					if (result.bool && result.cards) {
						while (result.cards.length) {
							const card = result.cards.shift();
							target.$give(card, player);
							await game.asyncDelay();
							const name = card.viewAs || card.name;
							if (card.name != name) {
								await player.addJudge(name, card);
							} else {
								await player.addJudge(card);
							}
						}
					}
				},
			},
			liangjue: {
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
				forced: true,
				getIndex: function (event, player, triggername) {
					let num = 0;
					if (event.player == player) {
						if (event.name == "equip" && get.color(event.card, player) == "black") num++;
						if (event.name == "addJudge" && get.color(event.cards[0], player) == "black") num++;
					}
					if (!event.getl) return num;
					let evt = event.getl(player);
					if (evt.es && evt.es.length) {
						for (var i of evt.es) {
							if (get.color(i, player) == "black") num++;
						}
					}
					if (evt.js && evt.js.length) {
						for (var i of evt.js) {
							if (get.color(i, player) == "black") num++;
						}
					}
					return num;
				},
				async content(event, trigger, player) {
					await player.draw(2);
					if (player.hp > 1) await player.loseHp();
				},
			},
			//狼灭
			langmie: {
				trigger: { global: "phaseUseEnd" },
				//forced:true,
				filter: function (event, player) {
					if (player == event.player || !player.countCards("he")) return false;
					var map = {};
					var list = event.player.getHistory("useCard", function (evt) {
						var evt2 = evt.getParent("phaseUse");
						return evt2 == event;
					});
					for (var i of list) {
						var name = get.type2(i.card, false);
						if (!map[name]) map[name] = true;
						else return true;
					}
				},
				frequent: true,
				content: function () {
					player.draw();
				},
				group: "langmie_damage",
			},
			langmie_damage: {
				audio: "langmie",
				trigger: { global: "phaseEnd" },
				direct: true,
				sourceSkill: "langmie",
				filter: function (event, player) {
					return (
						event.player != player &&
						(event.player.getStat("damage") || 0) > 1 &&
						player.countCards("he") > 0
					);
				},
				content: function () {
					"step 0";
					player
						.chooseToDiscard(
							"he",
							get.prompt("langmie", trigger.player),
							"弃置一张牌并对其造成1点伤害"
						)
						.set("goon", get.damageEffect(trigger.player, player, player) > 0)
						.set("ai", function (card) {
							if (!_status.event.goon) return 0;
							return 7 - get.value(card);
						}).logSkill = ["langmie_damage", trigger.player];
					"step 1";
					if (result.bool) trigger.player.damage();
				},
				ai: { expose: 0.2 },
			},
			//牛金
			recuorui: {
				audio: "cuorui",
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return (
						player.hp > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countGainableCards(player, "h") > 0;
						})
					);
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countGainableCards(player, "h") > 0;
				},
				selectTarget: function () {
					return [1, _status.event.player.hp];
				},
				content: function () {
					if (num == 0) player.awakenSkill("recuorui");
					player.gainPlayerCard(target, true, "h");
				},
				ai: {
					order: 10,
					result: {
						player: 1,
						target: function (player, target) {
							if (target.hasSkillTag("noh")) return 0;
							return -1;
						},
					},
				},
			},
			reliewei: {
				audio: "liewei",
				trigger: { global: "dying" },
				filter: function (event, player) {
					return (
						player == _status.currentPhase ||
						player.getHistory("useSkill", (evt) => evt.skill == "reliewei").length <
							player.getHp()
					);
				},
				frequent: true,
				content: function () {
					player.draw();
				},
			},
			//张邈
			mouni: {
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("h", "sha") > 0;
				},
				content: function () {
					"step 0";
					player.addSkill("mouni2");
					player.chooseTarget(get.prompt2("mouni"), lib.filter.notMe).set("ai", function (target) {
						var player = _status.event.player,
							cards = player.getCards("h", "sha");
						if (
							get.attitude(player, target) >= 0 ||
							!player.canUse(cards[0], target, false) ||
							(!player.hasJudge("lebu") &&
								target.mayHaveShan(
									player,
									"use",
									target.getCards("h", (i) => {
										return i.hasGaintag("sha_notshan");
									})
								) &&
								!player.hasSkillTag(
									"directHit_ai",
									true,
									{
										target: target,
										card: cards[0],
									},
									true
								))
						)
							return 0;
						return get.effect(target, cards[0], player, player);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("mouni", target);
						event.cards = player.getCards("h", "sha");
					} else event.finish();
					"step 2";
					if (event.mouni_dying) return;
					var hs = player.getCards("h");
					cards = cards.filter(function (card) {
						return (
							hs.includes(card) &&
							get.name(card, player) == "sha" &&
							player.canUse(
								{
									name: "sha",
									nature: get.nature(card, player),
									isCard: true,
									cards: [card],
								},
								target,
								false
							)
						);
					});
					if (cards.length) {
						var card = cards.randomRemove(1)[0];
						player.useCard(target, false, card);
						event.redo();
					}
					"step 3";
					if (
						player.getHistory("useCard", function (evt) {
							return (
								evt.getParent() == event &&
								!player.getHistory("sourceDamage", function (evt2) {
									return evt.card == evt2.card;
								}).length
							);
						}).length
					) {
						player.skip("phaseUse");
						player.skip("phaseDiscard");
					}
					player.removeSkill("mouni2");
				},
			},
			mouni2: {
				charlotte: true,
				trigger: { global: "dying" },
				forced: true,
				firstDo: true,
				popup: false,
				sourceSkill: "mouni",
				filter: function (event, player) {
					var evt = event.getParent("mouni");
					return evt && evt.player == player && evt.target == event.player;
				},
				content: function () {
					trigger.getParent("mouni").mouni_dying = true;
				},
			},
			zongfan: {
				derivation: "zhangu",
				trigger: { player: "phaseJieshuBegin" },
				juexingji: true,
				forced: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return (
						!player.getHistory("skipped").includes("phaseUse") &&
						player.getHistory("useCard", function (evt) {
							return evt.getParent().name == "mouni";
						}).length > 0
					);
				},
				content: function () {
					"step 0";
					player.awakenSkill("zongfan");
					var num = player.countCards("he");
					if (num > 0) {
						player.chooseCardTarget({
							prompt: "是否将任意张牌交给一名其他角色？",
							selectCard: [1, num],
							filterCard: true,
							filterTarget: lib.filter.notMe,
							position: "he",
							ai1: function (card) {
								if (card.name == "du") return 10;
								else if (ui.selected.cards.length && ui.selected.cards[0].name == "du")
									return 0;
								var player = _status.event.player;
								if (
									ui.selected.cards.length > 4 ||
									!game.hasPlayer(function (current) {
										return (
											get.attitude(player, current) > 0 &&
											!current.hasSkillTag("nogain")
										);
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
					} else event.goto(2);
					"step 1";
					if (result.bool) {
						var cards = result.cards,
							target = result.targets[0],
							num = Math.min(5, cards.length);
						player.give(cards, target);
						player.gainMaxHp(num);
						player.recover(num);
					}
					"step 2";
					//player.removeSkill('mouni');
					player.changeSkills(["zhangu"], ["mouni"]);
				},
				ai: {
					combo: "mouni",
				},
			},
			zhangu: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return player.maxHp > 1 && (player.countCards("h") == 0 || player.countCards("e") == 0);
				},
				content: function () {
					var cards = [],
						types = [];
					for (var i = 0; i < 3; i++) {
						var card = get.cardPile2(function (card) {
							return !cards.includes(card) && !types.includes(get.type2(card, false));
						});
						if (card) {
							cards.push(card);
							types.push(get.type2(card, false));
						} else break;
					}
					if (cards.length) player.gain(cards, "gain2");
					player.loseMaxHp();
				},
			},
			//梁兴
			lulve: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					var hs = player.countCards("h");
					return (
						hs > 1 &&
						game.hasPlayer(function (target) {
							var ts = target.countCards("h");
							return target != player && ts > 0 && hs > ts;
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("lulve"), function (card, player, target) {
							var hs = player.countCards("h"),
								ts = target.countCards("h");
							return target != player && ts > 0 && hs > ts;
						})
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.isTurnedOver()) return att / 10;
							if (
								!player.hasShan() &&
								target.canUse({ name: "sha", isCard: true }, player, false) &&
								get.effect(player, { name: "sha", isCard: true }, target, player) < 0 &&
								player.hp < 4
							)
								return 0;
							return -att * Math.sqrt(target.countCards("h"));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("lulve", target);
						var str = get.translation(player);
						target
							.chooseControl()
							.set("choiceList", [
								"将所有手牌交给" + str + "，然后其将武将牌翻面",
								"将武将牌翻面，然后视为对" + str + "使用【杀】",
							])
							.set("ai", function () {
								var player = _status.event.player,
									target = _status.event.getParent().player;
								if (player.isTurnedOver()) return 1;
								if (
									!target.hasShan() &&
									player.canUse({ name: "sha", isCard: true }, target, false) &&
									get.effect(target, { name: "sha", isCard: true }, player, player) < 0
								)
									return 0;
								return Math.random() < 0.5 ? 0 : 1;
							});
					} else event.finish();
					"step 2";
					if (result.index == 0) {
						target.give(target.getCards("h"), player);
						player.turnOver();
						event.finish();
					} else target.turnOver();
					"step 3";
					if (target.canUse({ name: "sha", isCard: true }, player, false))
						target.useCard({ name: "sha", isCard: true }, player, false);
				},
			},
			lxzhuixi: {
				audio: 2,
				trigger: {
					player: "damageBegin3",
					source: "damageBegin1",
				},
				forced: true,
				logTarget: "player",
				filter: function (event, player) {
					return event.source && event.player.isTurnedOver() != event.source.isTurnedOver();
				},
				content: function () {
					trigger.num++;
				},
				ai: {
					combo: "lulve",
					halfneg: true
				},
			},
			//陶谦和曹嵩
			reyirang: {
				audio: "yirang",
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
						return current != player;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("reyirang"), function (card, player, target) {
							return target != player;
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
						player.logSkill("reyirang", target);
						player.give(cards, target, "give");
						if (target.maxHp > player.maxHp) {
							player.gainMaxHp(target.maxHp - player.maxHp, true);
							player.recover(cards.length);
						}
					}
				},
			},
			cslilu: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				check: function (event, player) {
					return (
						Math.min(player.maxHp, 5) - player.countCards("h") > 3 ||
						game.hasPlayer(function (current) {
							return current != player && get.attitude(player, current) > 0;
						})
					);
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					"step 1";
					player.drawTo(Math.min(player.maxHp, 5));
					"step 2";
					if (player.countCards("h") > 0) {
						var str = "将至少一张手牌交给一名其他角色";
						var num = player.countMark("cslilu");
						if (num < player.countCards("h")) {
							if (num > 0) str += "。若给出的牌数大于" + get.cnNumber(num) + "张，则你";
							else str += "，并";
							str += "加1点体力上限并回复1点体力";
						}
						player.chooseCardTarget({
							prompt: str,
							filterCard: true,
							filterTarget: lib.filter.notMe,
							selectCard: [1, Infinity],
							forced: true,
							ai1: function (card) {
								if (ui.selected.cards.length < _status.event.goon) {
									if (
										get.tag(card, "damage") &&
										game.hasPlayer(function (current) {
											current != player &&
												get.attitude(player, current) > 0 &&
												!current.hasSkillTag("nogain") &&
												!current.hasJudge("lebu") &&
												current.hasValueTarget(card);
										})
									)
										return 1;
									return 1 / Math.max(0.1, get.value(card));
								}
								return 0;
							},
							ai2: function (target) {
								return (
									Math.sqrt(5 - Math.min(4, target.countCards("h"))) *
									get.attitude(_status.event.player, target)
								);
							},
							goon: (function () {
								if (
									!game.hasPlayer(function (current) {
										return (
											current != player &&
											get.attitude(player, current) > 0 &&
											!current.hasSkillTag("nogain") &&
											!current.hasJudge("lebu")
										);
									})
								)
									return 1;
								if (num < player.countCards("h")) return num + 1;
								return 1;
							})(),
						});
					} else event.finish();
					"step 3";
					if (result.bool) {
						var num = player.countMark("cslilu");
						player.give(result.cards, result.targets[0]);
						if (result.cards.length > num) {
							player.gainMaxHp();
							player.recover();
						}
						player.storage.cslilu = result.cards.length;
						player.markSkill("cslilu");
					}
				},
			},
			csyizheng: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("csyizheng"), lib.filter.notMe)
						.set("ai", function (target) {
							if (target.isTurnedOver() || target.hasJudge("lebu")) return 0;
							return (
								get.attitude(_status.event.player, target) *
								Math.max(0, target.countCards("h") - 2)
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("csyizheng", target);
						player.storage.csyizheng2 = target;
						player.addTempSkill("csyizheng2", { player: "phaseBegin" });
					}
				},
				ai: {
					combo: "cslilu"
				},
			},
			csyizheng2: {
				audio: "csyizheng",
				trigger: {
					global: ["recoverBegin", "damageBegin1"],
				},
				forced: true,
				charlotte: true,
				sourceSkill: "csyizheng",
				logTarget: function (event) {
					return event.name == "damage" ? event.source : event.player;
				},
				filter: function (event, player) {
					var target = lib.skill.csyizheng2.logTarget(event);
					if (target != player.storage.csyizheng2) return false;
					return player.maxHp > target.maxHp;
				},
				content: function () {
					player.loseMaxHp();
					trigger.num++;
				},
				mark: "character",
				intro: {
					content:
						"$造成伤害或回复体力时，若你的体力上限大于其，则你减1点体力上限，然后此伤害/回复量+1",
				},
			},
			reyixiang: {
				audio: "yixiang",
				audioname: ["re_taoqian"],
				trigger: { player: "damageBegin1" },
				forced: true,
				filter: function (event, player) {
					var evt = event.getParent(2);
					if (evt.name != "useCard" || evt.card != event.card) return false;
					var source = evt.player;
					var phsu = evt.getParent("phaseUse");
					if (!source || source == player || source != phsu.player) return false;
					return (
						source.getHistory("useCard", function (evt2) {
							return evt2.getParent("phaseUse") == phsu;
						})[0] == evt
					);
				},
				content: function () {
					trigger.num--;
				},
				group: "reyixiang_card",
				subSkill: {
					card: {
						audio: "yixiang",
						audioname: ["re_taoqian"],
						trigger: { target: "useCardToTargeted" },
						forced: true,
						filter: function (event, player) {
							if (get.color(event.card) != "black") return false;
							var evt = event.getParent();
							var source = evt.player;
							var phsu = evt.getParent("phaseUse");
							if (!source || source == player || source != phsu.player) return false;
							return (
								source
									.getHistory("useCard", function (evt2) {
										return evt2.getParent("phaseUse") == phsu;
									})
									.indexOf(evt) == 1
							);
						},
						content: function () {
							trigger.excluded.add(player);
						},
					},
				},
				ai: {
					effect: {
						target: function (card, player, target, current, isLink) {
							if (isLink || typeof card !== "object" || !player.isPhaseUsing()) return;
							var num;
							var evt = _status.event.getParent("useCard"),
								evt2 = _status.event.getParent("phaseUse");
							if (evt.card == card) {
								num = player
									.getHistory("useCard", function (evt) {
										return evt.getParent("phaseUse") == evt2;
									})
									.indexOf(evt);
							} else
								num = player.getHistory("useCard", function (evt) {
									return evt.getParent("phaseUse") == evt2;
								}).length;
							if (num < 0 || num > 1) return;
							if (num === 0 && get.tag(card, "damage")) {
								if (
									target.hasSkillTag("filterDamage", null, {
										player: player,
										card: card,
									}) ||
									!player.hasSkillTag("damageBonus", true, {
										target: target,
										card: card,
									})
								)
									return "zerotarget";
								return [0.5, 0, 0.5, 0];
							}
							if (num === 1 && get.color(card) == "black") return "zeroplayertarget";
						},
					},
				},
			},
			//赵忠
			yangzhong: {
				audio: 2,
				trigger: {
					source: "damageSource",
					player: "damageEnd",
				},
				direct: true,
				filter: function (event, player) {
					var target = event.player,
						source = event.source;
					if (player != source && !player.hasSkill("yangzhong")) return false;
					if (!target || !source || !target.isIn() || !source.isIn()) return false;
					return source.countCards("he") > 1;
				},
				content: function () {
					"step 0";
					trigger.source
						.chooseToDiscard(
							"是否对" + get.translation(trigger.player) + "发动【殃众】？",
							"弃置两张牌，并令其失去1点体力",
							"he",
							2
						)
						.set("ai", function (card) {
							var evt = _status.event;
							if (get.attitude(evt.player, evt.getTrigger().player) >= 0) return 0;
							return 7 - get.value(card);
						}).logSkill = ["yangzhong", trigger.player];
					"step 1";
					if (result.bool) trigger.player.loseHp();
				},
			},
			huangkong: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				filter: function (event, player) {
					if (player == _status.currentPhase || player.countCards("h")) return false;
					return event.card.name == "sha" || get.type(event.card, null, false) == "trick";
				},
				content: function () {
					player.draw(2);
				},
			},
			hfjieying: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("hfjieying"), lib.filter.notMe)
						.set("ai", function (target) {
							var player = _status.event.player;
							return (
								(get.attitude(player, target) *
									(1 +
										target.countCards("h", function (card) {
											return !get.tag(card, "damage") && target.hasValueTarget(card);
										}))) /
								(1 + target.countCards("h"))
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("hfjieying", target);
						target.addTempSkill("hfjieying2", { player: "phaseJieshuBegin" });
					}
				},
				ai: {
					expose: 0.05,
				},
			},
			hfjieying2: {
				mod: {
					cardEnabled: function (card, player) {
						if (player.storage.hfjieying2) return false;
					},
					cardSavable: function (card, player) {
						if (player.storage.hfjieying2) return false;
					},
					targetInRange: function (card, player) {
						if (
							player == _status.currentPhase &&
							(card.name == "sha" || get.type(card) == "trick")
						)
							return true;
					},
					aiOrder: function (player, card, num) {
						var info = get.info(card);
						if (!get.tag(card, "damage") && (!info || !info.toself)) return num + 8;
					},
				},
				onremove: true,
				trigger: { player: "useCard2" },
				direct: true,
				charlotte: true,
				sourceSkill: "hfjieying",
				filter: function (event, player) {
					if (player != _status.currentPhase || event.targets.length != 1) return false;
					var card = event.card;
					if (card.name != "sha" && get.type(card) != "trick") return false;
					var info = get.info(card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return (
									!event.targets.includes(current) &&
									lib.filter.targetEnabled2(card, player, current)
								);
							})
						) {
							return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
					player
						.chooseTarget(get.prompt("hfjieying2"), function (card, player, target) {
							var player = _status.event.player;
							return (
								!_status.event.targets.includes(target) &&
								lib.filter.targetEnabled2(_status.event.card, player, target)
							);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("card", trigger.card)
						.set("targets", trigger.targets);
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets) {
						player.logSkill("hfjieying2", event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				group: "hfjieying3",
				mark: true,
				intro: {
					content: function (player) {
						if (player) return "不能使用牌直到回合结束";
						return "使用【杀】或普通锦囊牌时无距离限制且可以多指定一个目标";
					},
				},
			},
			hfjieying3: {
				trigger: { source: "damageSource" },
				forced: true,
				popup: false,
				sourceSkill: "hfjieying",
				filter: function (event, player) {
					return !player.storage.hfjieying2 && player == _status.currentPhase;
				},
				content: function () {
					player.storage.hfjieying2 = true;
				},
			},
			weipo: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				filter: function (event, player) {
					return (
						player != event.player &&
						!player.hasSkill("weipo3") &&
						player.countCards("h") < Math.min(5, player.maxHp) &&
						(event.card.name == "sha" || get.type(event.card) == "trick")
					);
				},
				content: function () {
					"step 0";
					player.addTempSkill("weipo2");
					player.drawTo(Math.min(5, player.maxHp));
					"step 1";
					var evt = trigger.getParent();
					if (!evt.weipo) evt.weipo = {};
					evt.weipo[player.playerid] = player.countCards("h");
				},
			},
			weipo2: {
				charlotte: true,
				trigger: { global: "useCardAfter" },
				forced: true,
				popup: false,
				sourceSkill: "weipo",
				filter: function (event, player) {
					return (
						event.weipo &&
						event.weipo[player.playerid] != undefined &&
						event.weipo[player.playerid] > player.countCards("h")
					);
				},
				content: function () {
					"step 0";
					player.addTempSkill("weipo3", { player: "phaseBegin" });
					if (player.countCards("h") && trigger.player.isIn()) {
						player.chooseCard("h", true, "将一张手牌交给" + get.translation(trigger.player));
					} else event.finish();
					"step 1";
					if (result.bool) {
						player.give(result.cards, trigger.player);
					}
				},
			},
			weipo3: { charlotte: true },
			refuqi: {
				audio: "fuqi",
				forced: true,
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					return (
						event.card &&
						(get.type(event.card) == "trick" ||
							(get.type(event.card) == "basic" &&
								!["shan", "tao", "jiu", "du"].includes(event.card.name))) &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) <= 1;
						})
					);
				},
				content: function () {
					trigger.directHit.addArray(
						game.filterPlayer(function (current) {
							return current != player && get.distance(player, current) <= 1;
						})
					);
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						return get.distance(player, arg.target) <= 1;
					},
				},
			},
			zhuide: {
				audio: 2,
				trigger: { player: "die" },
				forceDie: true,
				skillAnimation: true,
				animationColor: "thunder",
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("zhuide"), lib.filter.notMe).set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zhuide", target);
						var names = [];
						var cards = [];
						while (cards.length < 4) {
							var card = get.cardPile2(function (card) {
								return (
									!cards.includes(card) &&
									!names.includes(card.name) &&
									get.type(card) == "basic"
								);
							});
							if (card) {
								cards.push(card);
								names.push(card.name);
							} else break;
						}
						if (cards.length) target.gain(cards, "gain2");
					}
				},
			},
			juntun: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return player.maxHp > 1;
				},
				content: function () {
					player.loseMaxHp();
					player.draw(player.maxHp);
				},
			},
			jiaojie: {
				audio: 2,
				mod: {
					ignoredHandcard: function (card, player) {
						if (get.color(card) == "red") {
							return true;
						}
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && get.color(card) == "red") {
							return false;
						}
					},
					targetInRange: function (card) {
						const color = get.color(card);
						if (color === "black" || color === "unsure") return true;
					},
					cardUsable: function (card) {
						const color = get.color(card);
						if (color === "black" || color === "unsure") return Infinity;
					},
				},
			},
			decadewuniang: {
				trigger: {
					player: ["useCard", "respond"],
				},
				audio: "xinfu_wuniang",
				direct: true,
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("decadewuniang"), function (card, player, target) {
							if (player == target) return false;
							return target.countGainableCards(player, "he") > 0;
						})
						.set("ai", function (target) {
							return 10 - get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("decadewuniang", target);
						player.line(target, "fire");
						player.gainPlayerCard(target, "he", true);
						target.draw();
						if (!player.storage.decadexushen) event.finish();
					} else event.finish();
					"step 2";
					var list = game.filterPlayer(function (current) {
						return current.name == "dc_guansuo" || current.name2 == "dc_guansuo";
					});
					if (list.length) game.asyncDraw(list);
					else event.finish();
					"step 3";
					game.delayx();
				},
			},
			minsi: {
				audio: 2,
				enable: "phaseUse",
				getResult: function (cards) {
					var l = cards.length;
					var all = Math.pow(l, 2);
					var list = [];
					for (var i = 1; i < all; i++) {
						var array = [];
						for (var j = 0; j < l; j++) {
							if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0)
								array.push(cards[j]);
						}
						var num = 0;
						for (var k of array) {
							num += get.number(k);
						}
						if (num == 13) list.push(array);
					}
					if (list.length) {
						list.sort(function (a, b) {
							if (a.length != b.length) return b.length - a.length;
							return get.value(a) - get.value(b);
						});
						return list[0];
					}
					return list;
				},
				usable: 1,
				filterCard: function (card) {
					var num = 0;
					for (var i = 0; i < ui.selected.cards.length; i++) {
						num += get.number(ui.selected.cards[i]);
					}
					return get.number(card) + num <= 13;
				},
				complexCard: true,
				selectCard: function () {
					var num = 0;
					for (var i = 0; i < ui.selected.cards.length; i++) {
						num += get.number(ui.selected.cards[i]);
					}
					if (num == 13) return ui.selected.cards.length;
					return ui.selected.cards.length + 2;
				},
				check: function (card) {
					var evt = _status.event;
					if (!evt.minsi_choice)
						evt.minsi_choice = lib.skill.minsi.getResult(evt.player.getCards("he"));
					if (!evt.minsi_choice.includes(card)) return 0;
					return 1;
				},
				position: "he",
				content: function () {
					player.draw(cards.length * 2).gaintag = ["minsi2"];
					player.addTempSkill("minsi2");
				},
				ai: {
					order: 5,
					result: { player: 1 },
				},
			},
			minsi2: {
				onremove: function (player) {
					player.removeGaintag("minsi2");
				},
				mod: {
					targetInRange: function (card, player, target) {
						if (!card.cards || !card.cards.length) return;
						for (var i of card.cards) {
							if (!i.hasGaintag("minsi2") || get.color(i) != "black") return;
						}
						return true;
					},
					ignoredHandcard: function (card, player) {
						if (card.hasGaintag("minsi2") && get.color(card) == "red") {
							return true;
						}
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && card.hasGaintag("minsi2") && get.color(card) == "red") {
							return false;
						}
					},
					aiOrder: function (player, card, num) {
						if (
							get.itemtype(card) == "card" &&
							card.hasGaintag("minsi2") &&
							get.color(card) == "black"
						)
							return num - 0.1;
					},
				},
			},
			jijing: {
				audio: 2,
				trigger: { player: "damageEnd" },
				frequent: true,
				content: function () {
					"step 0";
					player.judge();
					"step 1";
					var num = result.number;
					var next = player.chooseToDiscard(
						"是否弃置任意张点数之和为" + get.cnNumber(num) + "的牌并回复1点体力？",
						function (card) {
							var num = 0;
							for (var i = 0; i < ui.selected.cards.length; i++) {
								num += get.number(ui.selected.cards[i]);
							}
							return get.number(card) + num <= _status.event.num;
						},
						"he"
					);
					next.set("num", num);
					next.set("complexCard", true);
					next.set("selectCard", function () {
						var num = 0;
						for (var i = 0; i < ui.selected.cards.length; i++) {
							num += get.number(ui.selected.cards[i]);
						}
						if (num == _status.event.num) return ui.selected.cards.length;
						return ui.selected.cards.length + 2;
					});
					next.set(
						"cardResult",
						(function () {
							var cards = player.getCards("he");
							var l = cards.length;
							var all = Math.pow(l, 2);
							var list = [];
							for (var i = 1; i < all; i++) {
								var array = [];
								for (var j = 0; j < l; j++) {
									if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0)
										array.push(cards[j]);
								}
								var numx = 0;
								for (var k of array) {
									numx += get.number(k);
								}
								if (numx == num) list.push(array);
							}
							if (list.length) {
								list.sort(function (a, b) {
									return get.value(a) - get.value(b);
								});
								return list[0];
							}
							return list;
						})()
					);
					next.set("ai", function (card) {
						if (!_status.event.cardResult.includes(card)) return 0;
						return 6 - get.value(card);
					});
					"step 2";
					if (result.bool) player.recover();
				},
			},
			cixiao: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					if (
						!game.hasPlayer(function (current) {
							return current.hasSkill("panshi");
						})
					)
						return true;
					return (
						player.countCards("he") >= 1 &&
						game.hasPlayer(function (current) {
							return current != player && !current.hasSkill("panshi");
						})
					);
				},
				content: function () {
					"step 0";
					if (
						game.hasPlayer(function (current) {
							return current.hasSkill("panshi");
						})
					)
						event.goto(2);
					else
						player
							.chooseTarget(
								lib.filter.notMe,
								get.prompt("cixiao"),
								"令一名其他角色获得「义子」标记"
							)
							.set("ai", function (target) {
								var player = _status.event.player;
								var att = -get.attitude(player, target);
								return att * target.countCards("h");
							});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("cixiao", target);
						target.addSkills("panshi");
					}
					event.finish();
					"step 2";
					var list = game.filterPlayer(function (current) {
						return current.hasSkill("panshi");
					});
					player.chooseCardTarget({
						prompt: get.prompt("cixiao"),
						prompt2: "弃置一张牌并将" + get.translation(list) + "的「义子」标记转移给其他角色",
						position: "he",
						filterTarget: function (card, player, target) {
							return player != target && !target.hasSkill("panshi");
						},
						filterCard: lib.filter.cardDiscardable,
						ai1: function (card) {
							if (_status.event.goon) return 5 - get.value(card);
							return 0;
						},
						ai2: function (target) {
							var player = _status.event.player;
							var att = -get.attitude(player, target);
							return att * target.countCards("h");
						},
						goon: (function (target) {
							var att = -get.attitude(player, target);
							return att * target.countCards("h") <= 0;
						})(list[0]),
					});
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("cixiao");
						player.discard(result.cards).delay = false;
						player.line2(
							game
								.filterPlayer(function (current) {
									if (current.hasSkill("panshi")) {
										current.removeSkills("panshi");
										return true;
									}
								})
								.concat(result.targets),
							"green"
						);
						target.addSkills("panshi");
					} else event.finish();
					"step 4";
					game.delayx();
				},
				derivation: "panshi",
				ai: { threaten: 8 },
			},
			panshi: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.hasSkill("cixiao");
						})
					);
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(function (current) {
						return current != player && current.hasSkill("cixiao");
					});
					if (targets.length == 1) {
						event.target = targets[0];
						player.chooseCard("h", true, "叛弑：将一张手牌交给" + get.translation(targets));
					} else
						player.chooseCardTarget({
							prompt: "叛弑：将一张手牌交给" + get.translation(targets) + "中的一名角色",
							filterCard: true,
							position: "h",
							targets: targets,
							forced: true,
							filterTarget: function (card, player, target) {
								return _status.event.targets.includes(target);
							},
						});
					"step 1";
					if (result.bool) {
						if (!target) target = result.targets[0];
						player.line(target);
						player.give(result.cards, target);
					}
				},
				mark: true,
				marktext: "子",
				intro: {
					name: "义子",
					//content:'我是儿子',
					//R·I·P——永远怀念：被棘手砍掉的“我是儿子”
					content(_, player) {
						const targets = game
							.filterPlayer2((target) => target.hasSkill("cixiao", null, null, false))
							.sortBySeat(player);
						if (!targets.length) return "我义父呢？！";
						if (
							["name", "name1", "name2"].some((name) => {
								if (
									!player[name] ||
									!get.character(player[name]) ||
									typeof get.translation(player[name]) != "string"
								)
									return false;
								return (
									player[name].includes("lvbu") &&
									get.translation(player[name]).includes("吕布")
								);
							})
						)
							return "公若不弃，布愿拜为义父";
						return (
							"我是" +
							get.translation(targets) +
							"的" +
							((player) => {
								switch (player.sex) {
									case "female":
										return "义女";
									case "double":
										return "义子义女";
									default:
										return "义子";
								}
							})(player)
						);
					},
				},
				group: "panshi_damage",
				ai: {
					halfneg: true
				},
			},
			panshi_damage: {
				trigger: { source: "damageBegin1" },
				forced: true,
				logTarget: "player",
				sourceSkill: "panshi",
				filter: function (event, player) {
					return (
						player.isPhaseUsing() &&
						event.card &&
						event.card.name == "sha" &&
						event.player.hasSkill("cixiao")
					);
				},
				content: function () {
					trigger.num++;
					if (
						["name", "name1", "name2"].some((name) => {
							if (
								!player[name] ||
								!get.character(player[name]) ||
								typeof get.translation(player[name]) != "string"
							)
								return false;
							return (
								player[name].includes("lvbu") &&
								get.translation(player[name]).includes("吕布")
							);
						})
					)
						player.chat("吾堂堂丈夫，安肯为汝子乎！");
					var evt = event.getParent("phaseUse");
					if (evt && evt.player == player) evt.skipped = true;
				},
			},
			xianshuai: {
				audio: 2,
				trigger: { global: "damageSource" },
				forced: true,
				filter: function (event, player) {
					return event.source && event.source.isIn() && !player.hasSkill("xianshuai2");
				},
				content: function () {
					player.addTempSkill("xianshuai2", "roundStart");
					player.draw();
					if (player == trigger.source && trigger.player.isIn()) {
						player.line(trigger.player, "green");
						trigger.player.damage();
					}
				},
			},
			xianshuai2: { charlotte: true },
			decadexushen: {
				derivation: "decadezhennan",
				audio: "xinfu_xushen",
				trigger: { player: "dying" },
				limited: true,
				skillAnimation: true,
				animationColor: "orange",
				filter: function (event, player) {
					return player.hp < 1;
				},
				content: function () {
					player.awakenSkill("decadexushen");
					player.addSkills("decadezhennan");
					player.addTempSkill("decadexushen2");
					trigger.decadexushen = true;
					player.recover();
				},
			},
			decadexushen2: {
				trigger: { player: "dyingAfter" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "decadexushen",
				filter: function (event, player) {
					return (
						event.decadexushen == true &&
						!game.hasPlayer(function (current) {
							return current.name == "dc_guansuo" || current.name2 == "dc_guansuo";
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							lib.filter.notMe,
							"许身：是否令一名其他角色选择是否将其武将牌替换为“关索”并令其摸三张牌？"
						)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 1";
					if (!result.bool) {
						event.finish();
						return;
					}
					var target = result.targets[0];
					event.target = target;
					player.line(target, "fire");
					target.chooseBool(
						"许身：是否将自己的一张武将牌替换为“关索”并令" +
							get.translation(player) +
							"摸三张牌？"
					);
					"step 2";
					if (result.bool) {
						if (target.name2 != undefined) {
							target
								.chooseControl(target.name1, target.name2)
								.set("prompt", "请选择要更换的武将牌");
						} else event._result = { control: target.name1 };
					} else event.goto(4);
					"step 3";
					target.reinitCharacter(result.control, "dc_guansuo");
					"step 4";
					target.draw(3);
				},
			},
			decadezhennan: {
				audio: "xinfu_zhennan",
				trigger: {
					global: "useCardToPlayered",
				},
				filter: function (event, player) {
					return (
						event.isFirstTarget &&
						event.targets &&
						event.targets.length > 1 &&
						get.type2(event.card) == "trick"
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("decadezhennan"),
							"对一名其他角色造成1点伤害",
							function (card, player, target) {
								return target != player;
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool && result.targets && result.targets.length) {
						player.logSkill("decadezhennan", result.targets);
						result.targets[0].damage();
					}
				},
				ai: {
					expose: 0.25,
				},
			},
			yujue: {
				audio: 2,
				derivation: "zhihu",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.hasEnabledSlot();
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("###鬻爵###" + lib.translate.yujue_info);
					},
					chooseControl: function (event, player) {
						var list = [];
						for (var i = 1; i < 6; i++) {
							if (player.hasEnabledSlot(i)) list.push("equip" + i);
						}
						list.push("cancel2");
						return list;
					},
					check: function (event, player) {
						for (var i = 5; i > 0; i--) {
							if (player.hasEmptySlot(i)) return "equip" + i;
						}
						return "cancel2";
					},
					backup: function (result) {
						var next = get.copy(lib.skill.yujuex);
						next.position = result.control;
						return next;
					},
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							if (
								game.hasPlayer(function (target) {
									if (player == target) return false;
									var hs = target.countCards("h");
									return hs > 2 && get.attitude(player, target) > 0;
								})
							)
								return 1;
							return 0;
						},
					},
				},
			},
			yujuex: {
				audio: "yujue",
				sourceSkill: "yujue",
				async content(event, trigger, player) {
					await player.disableEquip(lib.skill.yujue_backup.position);
					if (
						player.isIn() &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h");
						})
					) {
						const result = await player
							.chooseTarget(
								true,
								"选择一名角色交给你一张牌并获得技能〖执笏〗",
								function (card, player, target) {
									if (player == target) return false;
									return target.countCards("h") > 0;
								}
							)
							.set("ai", function (target) {
								return get.attitude(_status.event.player, target) * target.countCards("h");
							})
							.forResult();
						if (result.bool) {
							var target = result.targets[0];
							event.target = target;
							player.line(target);
							const result2 = await target
								.chooseCard("h", true, "交给" + get.translation(player) + "一张手牌")
								.forResult();
							if (result2.bool && result2.cards && result2.cards.length) {
								await target.give(result2.cards, player);
								target.storage.zhihu_mark = player;
								await target.addSkills("zhihu");
								target.addSkill("zhihu_mark");
							}
						}
					}
				},
			},
			zhihu: {
				usable: 2,
				trigger: { source: "damageSource" },
				forced: true,
				filter: function (event, player) {
					return player != event.player;
				},
				content: function () {
					player.draw(2);
				},
			},
			zhihu_mark: {
				mark: "character",
				intro: {
					content: "以$之名，授予汝技能〖执笏〗，直至$的下回合开始为止！",
				},
				onremove: function (player) {
					delete player.storage.zhihu_mark;
					player.removeSkills("zhihu");
				},
				trigger: { global: "phaseBeginStart" },
				firstDo: true,
				charlotte: true,
				silent: true,
				sourceSkill: "zhihu",
				filter: function (event, player) {
					return event.player == player.storage.zhihu_mark;
				},
				content: function () {
					player.removeSkill("zhihu_mark");
				},
			},
			tuxing: {
				audio: 2,
				trigger: { player: "disableEquipAfter" },
				forced: true,
				content: function () {
					"step 0";
					player.gainMaxHp();
					player.recover();
					"step 1";
					if (!player.hasEnabledSlot()) {
						player.loseMaxHp(4);
						player.addSkill("tuxing2");
					}
				},
				ai: {
					combo: "yujue"
				},
			},
			tuxing2: {
				audio: "tuxing",
				trigger: { source: "damageBegin1" },
				forced: true,
				charlotte: true,
				sourceSkill: "tuxing",
				content: function () {
					trigger.num++;
				},
				mark: true,
				intro: {
					content: "造成伤害时，此伤害+1",
				},
			},
			gongjian: {
				audio: 2,
				trigger: { global: "useCardToPlayered" },
				usable: 1,
				logTarget: function (event) {
					return event.parent.gongjian_targets.filter(function (target) {
						return event.targets.includes(target) && target.countCards("he") > 0;
					});
				},
				filter: function (event, player) {
					if (event.card.name != "sha" || !event.isFirstTarget) return false;
					if (
						event.parent.gongjian_targets &&
						event.parent.gongjian_targets.filter(function (target) {
							return event.targets.includes(target) && target.countCards("he") > 0;
						}).length > 0
					)
						return true;
					return false;
				},
				check: function (event, player) {
					var targets = event.parent.gongjian_targets.filter(function (target) {
							return event.targets.includes(target) && target.countCards("he") > 0;
						}),
						att = 0;
					for (var i of targets) {
						att += get.attitude(player, i);
					}
					return att < 0;
				},
				content: function () {
					"step 0";
					event.targets = trigger.parent.gongjian_targets.filter(function (target) {
						return trigger.targets.includes(target);
					});
					event.num = 0;
					"step 1";
					var target = targets[num];
					player.discardPlayerCard(target, true, "he", [1, 2]).set("forceAuto", true);
					"step 2";
					event.num++;
					if (event.num < targets.length) event.goto(1);
					else {
						var cards = [];
						game.getGlobalHistory("cardMove", function (evt) {
							if (evt.player && evt.hs && evt.type == "discard" && evt.getParent(3) == event) {
								for (var i of evt.hs) {
									if (get.name(i, evt.player) == "sha" && get.position(i, true) == "d")
										cards.add(i);
								}
							}
						});
						if (cards.length) player.gain(cards, "gain2");
					}
				},
				group: "gongjian_count",
				subSkill: {
					count: {
						trigger: { global: "useCard1" },
						silent: true,
						firstDo: true,
						filter: function (event, player) {
							return event.card && event.card.name == "sha";
						},
						content: function () {
							if (player.storage.gongjian) trigger.gongjian_targets = player.storage.gongjian;
							player.storage.gongjian = trigger.targets;
						},
					},
				},
			},
			kuimang: {
				audio: 2,
				trigger: { global: "dieAfter" },
				forced: true,
				filter: function (event, player) {
					return (
						player.getAllHistory("sourceDamage", function (target) {
							return target.player == event.player;
						}).length > 0
					);
				},
				content: function () {
					player.draw(2);
				},
			},
			rexiemu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return !game.hasPlayer(function (current) {
						return current.hasMark("rexiemu");
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("rexiemu"), lib.filter.notMe)
						.set("ai", function (target) {
							var player = _status.event.player;
							return (
								get.attitude(player, target) *
								Math.sqrt(Math.max(1 + player.countCards("h"), 1 + target.countCards("h")))
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("rexiemu", target);
						target.addMark("rexiemu", 1);
						player.addSkill("rexiemu2");
					}
				},
				intro: { content: "mark" },
				ai: {
					expose: 0.1,
				},
			},
			rexiemu2: {
				audio: "rexiemu",
				trigger: { global: ["loseAfter"] },
				forced: true,
				charlotte: true,
				usable: 1,
				sourceSkill: "rexiemu",
				filter: function (event, player) {
					return (
						(event.player == player || event.player.hasMark("rexiemu")) &&
						["useCard", "respond"].includes(event.getParent().name) &&
						event.hs &&
						event.hs.length &&
						event.player != _status.currentPhase &&
						game.hasPlayer(function (current) {
							return current.hasMark("rexiemu");
						})
					);
				},
				content: function () {
					"step 0";
					game.asyncDraw(
						game.filterPlayer(function (current) {
							return (
								current == player || current == trigger.player || current.hasMark("rexiemu")
							);
						})
					);
					"step 1";
					game.delayx();
				},
				group: "rexiemu3",
			},
			rexiemu3: {
				trigger: { player: "phaseBegin" },
				forced: true,
				charlotte: true,
				silent: true,
				firstDo: true,
				sourceSkill: "rexiemu",
				content: function () {
					player.removeSkill("rexiemu2");
					game.countPlayer(function (current) {
						var num = current.countMark("rexiemu");
						if (num) current.removeMark("rexiemu", num);
					});
				},
			},
			heli: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return lib.skill.heli.filterTarget(null, player, current);
					});
				},
				filterTarget: function (card, player, target) {
					return target.countCards("h") < player.countCards("h");
				},
				content: function () {
					"step 0";
					if (target.countCards("h")) target.showHandcards();
					"step 1";
					var list = [];
					var cards = [];
					for (var i of lib.inpile) list.add(get.type2(i));
					for (var i of list) {
						if (
							!target.countCards("h", function (card) {
								return get.type2(card, target) == i;
							})
						) {
							var card = get.cardPile2(function (card) {
								return get.type2(card, false) == i;
							});
							if (card) cards.push(card);
						}
					}
					if (cards.length) target.gain(cards, "gain2", "log");
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							return 1 / Math.sqrt(1 + target.countCards("h"));
						},
					},
				},
			},
			moying: {
				audio: 2,
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
				direct: true,
				filter: function (event, player) {
					if (player == _status.currentPhase || event.getParent().name == "useCard") return false;
					if (event.name == "gain" && event.player == player) return false;
					var evt = event.getl(player);
					return (
						evt &&
						evt.cards2 &&
						evt.cards2.length == 1 &&
						["equip", "trick"].includes(
							get.type2(
								evt.cards2[0],
								evt.type == "discard" && evt.hs.includes(evt.cards2[0]) ? player : false
							)
						) &&
						!player.hasSkill("moying2")
					);
				},
				content: function () {
					"step 0";
					var number = trigger.getl(player).cards2[0].number;
					var numbers = [number - 2, number - 1, number, number + 1, number + 2].filter(function (
						number
					) {
						return number >= 1 && number <= 13;
					});
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						event._result = {
							bool: true,
							suit: lib.suit.randomGet(),
							number: numbers.randomGet(),
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (player, numbers) {
						var event = _status.event;
						player = player || event.player;
						if (!event._result) event._result = {};
						var dialog = ui.create.dialog("是否发动【墨影】？", "forcebutton", "hidden");
						event.dialog = dialog;
						dialog.addText("花色");
						var table = document.createElement("div");
						table.classList.add("add-setting");
						table.style.margin = "0";
						table.style.width = "100%";
						table.style.position = "relative";
						var listi = ["spade", "heart", "club", "diamond"];
						for (var i = 0; i < listi.length; i++) {
							var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
							td.link = listi[i];
							table.appendChild(td);
							td.innerHTML = "<span>" + get.translation(listi[i]) + "</span>";
							td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector(".bluebg");
								if (current) {
									current.classList.remove("bluebg");
								}
								this.classList.add("bluebg");
								event._result.suit = link;
							});
						}
						dialog.content.appendChild(table);
						dialog.addText("点数");
						var table2 = document.createElement("div");
						table2.classList.add("add-setting");
						table2.style.margin = "0";
						table2.style.width = "100%";
						table2.style.position = "relative";
						for (var i = 0; i < numbers.length; i++) {
							var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
							td.link = numbers[i];
							table2.appendChild(td);
							var num = numbers[i];
							switch (num) {
								case 1:
									num = "A";
									break;
								case 11:
									num = "J";
									break;
								case 12:
									num = "Q";
									break;
								case 13:
									num = "K";
									break;
							}
							td.innerHTML = "<span>" + num + "</span>";
							td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector(".bluebg");
								if (current) {
									current.classList.remove("bluebg");
								}
								this.classList.add("bluebg");
								event._result.number = link;
							});
						}
						dialog.content.appendChild(table2);
						dialog.add("　　");
						event.dialog.open();

						event.switchToAuto = function () {
							event._result = {
								bool: true,
								number: numbers.randomGet(),
								suit: lib.suit.randomGet(),
							};
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						};
						event.control = ui.create.control("ok", "cancel2", function (link) {
							var result = event._result;
							if (link == "cancel2") result.bool = false;
							else {
								if (!result.number || !result.suit) return;
								result.bool = true;
							}
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						});
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add("selectable");
						}
						game.pause();
						game.countChoose();
					};
					if (event.isMine()) {
						chooseButton(player, numbers);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, event.player, numbers);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 1";
					var map = event.result || result;
					if (map.bool) {
						player.logSkill("moying");
						player.addTempSkill("moying2");
						var cards = [];
						for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
							var card = ui.cardPile.childNodes[i];
							if (get.suit(card) == map.suit && get.number(card) == map.number)
								cards.push(card);
						}
						if (cards.length) player.gain(cards, "gain2", "log");
					}
				},
			},
			moying2: {},
			juanhui: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("juanhui"),
							lib.filter.notMe,
							"选择记录一名其他角色使用过的牌"
						)
						.set("ai", function (target) {
							if (target.isTurnedOver() || target.hasJudge("lebu")) return Math.random();
							return (1 + target.countCards("h")) * 2 + Math.random();
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("juanhui", target);
						player.storage.juanhui2 = target;
						player.storage.juanhui3 = [];
						player.addSkill("juanhui2");
					}
				},
			},
			juanhui2: {
				charlotte: true,
				mark: true,
				mod: {
					cardUsable: function (card) {
						if (card.name == "sha" && _status.event.skill == "juanhui2_backup") return Infinity;
					},
				},
				intro: {
					markcount: function (storage, player) {
						return player.getStorage("juanhui3").length;
					},
					mark: function (dialog, storage, player) {
						dialog.addText("记录目标");
						dialog.addSmall([storage]);
						var vcard = player.getStorage("juanhui3");
						if (vcard.length) {
							dialog.addText("记录卡牌");
							dialog.addSmall([vcard, "vcard"]);
						}
					},
					content: function (storage, player) {
						var str = "记录目标：" + get.translation(storage);
						var vcard = player.getStorage("juanhui3");
						if (vcard.length) {
							str += "<br>记录卡牌：";
							for (var i of vcard) {
								if (i[2] == "sha" && i[3]) str += get.translation(i[3]);
								str += get.translation(i[2]);
								str += "、";
							}
							str = str.slice(0, str.length - 1);
						}
						return str;
					},
				},
				onremove: function (player) {
					delete player.storage.juanhui2;
					delete player.storage.juanhui3;
				},
				group: "juanhui3",
				enable: "phaseUse",
				sourceSkill: "juanhui",
				filter: function (event, player) {
					return player.getStorage("juanhui3").length > 0 && player.countCards("hs") > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("绢绘", [player.getStorage("juanhui3"), "vcard"], "hidden");
					},
					filter: function (button, player) {
						return lib.filter.cardEnabled(
							{
								name: button.link[2],
								nature: button.link[3],
							},
							player,
							_status.event.getParent()
						);
					},
					check: function (button) {
						var player = _status.event.player;
						var card = {
							name: button.link[2],
							nature: button.link[3],
						};
						if (player.getUseValue(card) > 0) return get.order(card);
						return -1;
					},
					backup: function (links, player) {
						return {
							audio: "juanhui",
							popname: true,
							filterCard: true,
							position: "hs",
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							check: function (card) {
								return 6 - get.value(card);
							},
							precontent: function () {
								var card = event.result.card;
								if (card.name == "sha") event.getParent().addCount = false;
								var vcard = player.storage.juanhui3;
								for (var i = 0; i < vcard.length; i++) {
									if (vcard[i][2] == card.name) vcard.splice(i--, 1);
								}
								if (vcard.length) player.markSkill("juanhui2");
								else {
									player.unmarkSkill("juanhui2");
									event.getParent().juanhui = true;
								}
							},
						};
					},
					prompt: function (links, player) {
						return (
							"将一张手牌当做" +
							(links[0][2] == "sha" && links[0][3] ? get.translation(links[0][3]) : "") +
							get.translation(links[0][2]) +
							"使用"
						);
					},
				},
				ai: {
					order: function (item, player) {
						var muniu = player.getStorage("juanhui3");
						var order = 0;
						for (var i = 0; i < muniu.length; i++) {
							var card = { name: muniu[i][2], nature: muniu[i][3] };
							if (player.getUseValue(card) > 0) {
								var order2 = get.order(card);
								if (order2 > order) order = order2;
							}
						}
						return order + 0.1;
					},
					result: {
						player: 1,
					},
				},
			},
			juanhui3: {
				charlotte: true,
				firstDo: true,
				trigger: {
					global: "useCard2",
					player: ["phaseUseEnd", "phaseUseSkipped", "useCardAfter"],
				},
				silent: true,
				sourceSkill: "juanhui",
				filter: function (event, player, name) {
					if (event.name == "phaseUse") return true;
					else if (name == "useCardAfter") return event.getParent().juanhui;
					return (
						event.player == player.storage.juanhui2 &&
						event.player.isPhaseUsing() &&
						["basic", "trick"].includes(get.type(event.card)) &&
						player.getStorage("juanhui3").filter(function (vcard) {
							return vcard[2] == event.card.name;
						}).length == 0
					);
				},
				content: function () {
					if (trigger.name == "phaseUse") player.removeSkill("juanhui2");
					else if (event.triggername == "useCardAfter") {
						player.recover();
						player.drawTo(3);
					} else {
						var vcard = [get.type(trigger.card), "", trigger.card.name];
						if (game.hasNature(trigger.card)) vcard.push(get.nature(trigger.card));
						player.storage.juanhui3.push(vcard);
						player.markSkill("juanhui2");
					}
				},
			},
			mubing: {
				audio: 2,
				audioname: ["sp_key_yuri"],
				trigger: { player: "phaseUseBegin" },
				//direct:true,
				frequent: true,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					var num = player.storage.mubing2 ? 4 : 3;
					event.num = num;
					event.cards = game.cardsGotoOrdering(get.cards(num)).cards;
					game.log(player, "展示了", event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards) {
							var str = get.translation(player) + "发动了【募兵】";
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards
					);
					game.addVideo("showCards", player, [
						get.translation(player) + "发动了【募兵】",
						get.cardsInfo(event.cards),
					]);
					game.delay(2);
					"step 1";
					var numa = 0;
					cards.sort(function (a, b) {
						return a.number - b.number;
					});
					for (var i of cards) {
						if (get.value(i, player) > 0) numa += get.number(i);
					}
					player
						.chooseToDiscard([1, Infinity], "h")
						.set("ai", function (card) {
							var player = _status.event.player;
							var numa = _status.event.numa;
							//if(card.name!='tengjia'&&get.position(card)=='e'&&get.equipValue(card,player)<=0) return 14;
							var num = 0;
							for (var i of ui.selected.cards) {
								num += i.number;
							}
							if (num >= numa) return 0;
							if (card.number + num >= numa) return 15 - get.value(card);
							if (!ui.selected.cards.length) {
								var min = _status.event.min;
								if (
									card.number < min &&
									!player.countCards("h", function (xcard) {
										return xcard != card && card.number + xcard.number > min;
									})
								)
									return 0;
								return card.number;
							}
							return Math.max(5 - get.value(card), card.number);
						})
						.set("prompt", false)
						.set("numa", numa)
						.set("min", cards[0].number);
					var func = function (id) {
						var dialog = get.idDialog(id);
						if (dialog) dialog.content.firstChild.innerHTML = "请选择要弃置的牌";
					};
					if (player == game.me) func(event.videoId);
					else if (player.isOnline()) player.send(func, event.videoId);
					"step 2";
					if (!result.bool) {
						return;
					}
					var numx = 0;
					for (var i of result.cards) {
						numx += get.number(i);
					}
					event.numx = numx;
					var next = player.chooseButton([0, num]);
					next.set("dialog", event.videoId);
					next.set("filterButton", function (button) {
						var num = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							num += get.number(ui.selected.buttons[i].link);
						}
						return num + get.number(button.link) <= _status.event.maxNum;
					});
					next.set("maxNum", event.numx);
					next.set("ai", function (button) {
						return get.value(button.link, _status.event.player);
					});
					var func = function (id) {
						var dialog = get.idDialog(id);
						if (dialog) dialog.content.firstChild.innerHTML = "请选择要获得的牌";
					};
					if (player == game.me) func(event.videoId);
					else if (player.isOnline()) player.send(func, event.videoId);
					"step 3";
					if (!result.bool) event.cards = [];
					else event.cards = result.links;
					"step 4";
					game.broadcastAll("closeDialog", event.videoId);
					game.addVideo("cardDialog", null, event.videoId);
					if (!cards.length) {
						event.finish();
						return;
					}
					player.gain(cards, "log", "gain2");
					if (!player.storage.mubing2) {
						event.finish();
						return;
					}
					event.given = [];
					"step 5";
					var hs = player.getCards("h");
					cards = cards.filter(function (card) {
						return hs.includes(card);
					});
					if (
						cards.length &&
						game.hasPlayer(function (current) {
							return current != player && !event.given.includes(current);
						})
					)
						player.chooseCardTarget({
							prompt: "是否将得到的牌中的任意张交给其他角色？",
							selectCard: [1, cards.length],
							filterCard: function (card) {
								return _status.event.cards.includes(card);
							},
							filterTarget: function (card, player, target) {
								return target != player && !_status.event.given.includes(target);
							},
							cards: cards,
							given: event.given,
							ai1: function (card) {
								return -1;
							},
						});
					else event.finish();
					"step 6";
					if (result.bool) {
						var target = result.targets[0];
						var cards = result.cards;
						event.given.push(target);
						event.cards.removeArray(cards);
						player.line(target, "green");
						player.give(cards, target);
						event.goto(5);
					}
				},
			},
			ziqu: {
				audio: 2,
				audioname: ["sp_key_yuri"],
				trigger: { source: "damageBegin2" },
				filter: function (event, player) {
					return (
						event.player != player &&
						!player.getStorage("ziqu").includes(event.player) &&
						event.player.countCards("he") > 0
					);
				},
				check: function (event, player) {
					var target = event.player;
					var eff = get.damageEffect(target, player, player);
					if (get.attitude(player, target) > 0) {
						if (eff >= 0) return false;
						return true;
					}
					if (eff <= 0) return true;
					if (target.hp == 1) return false;
					if (event.num > 1) return false;
					var cards = target.getCards("he");
					for (var i = 0; i < cards.length; i++) {
						if (get.number(cards[i]) > 10) return true;
					}
					return false;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					trigger.cancel();
					if (!player.storage.ziqu) player.storage.ziqu = [];
					player.storage.ziqu.push(trigger.player);
					player.markSkill("ziqu");
					trigger.player.chooseCard(true, "he", function (card, player) {
						return !player.countCards("he", function (cardx) {
							return cardx.number > card.number;
						});
					});
					"step 1";
					if (result.bool && result.cards && result.cards.length)
						trigger.player.give(result.cards, player);
				},
				intro: { content: "已对$发动过" },
			},
			mubing_rewrite: {
				mark: true,
				intro: {
					content:
						"出牌阶段开始时，你可以亮出牌堆顶的四张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。然后你可将以此法得到的牌以任意方式交给其他角色。",
				},
				ai: {
					combo: "mubing"
				},
			},
			diaoling: {
				audio: 2,
				audioname: ["sp_key_yuri"],
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "metal",
				filter: function (event, player) {
					var num = 0;
					player.getAllHistory("gain", function (evt) {
						var evt2 = evt.getParent();
						if (evt2.name == "mubing" && evt2.player == player)
							num += evt.cards.filter(function (card) {
								return (
									card.name == "sha" ||
									get.subtype(card, false) == "equip1" ||
									(get.type2(card, false) == "trick" &&
										get.tag({ name: card.name }, "damage"))
								);
							}).length;
					});
					return num >= 6;
				},
				content: function () {
					player.awakenSkill("diaoling");
					player.storage.mubing2 = true;
					player.markSkill("mubing_rewrite");
					player.chooseDrawRecover(2, true);
				},
				ai: {
					combo: "mubing"
				},
				derivation: "mubing_rewrite",
			},
			refenyin_wufan: { audio: 2 },
			//官渡之战
			xiying: {
				trigger: { player: "phaseUseBegin" },
				audio: 2,
				direct: true,
				filter: function (event, player) {
					return (
						player.countCards("h", function (card) {
							return _status.connectMode || get.type(card) != "basic";
						}) > 0
					);
				},
				content: function () {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current != player;
					});
					list.sortBySeat();
					event.targets = list;
					player
						.chooseToDiscard(get.prompt2("xiying"), "h", function (card) {
							return get.type(card) != "basic";
						})
						.set("logSkill", ["xiying", list])
						.set("ai", function (card) {
							return _status.event.val - get.value(card);
						})
						.set(
							"val",
							(function () {
								return (
									4 *
									Math.sqrt(
										game.countPlayer(function (current) {
											return (
												get.attitude(player, current) < 0 &&
												current.countCards("he") > 0
											);
										})
									)
								);
							})()
						);
					"step 1";
					if (!result.bool) event.finish();
					else player.addTempSkill("xiying_gain");
					"step 2";
					var target = targets.shift();
					event.target = target;
					if (target.isIn())
						target
							.chooseToDiscard("he", "弃置一张牌，或本回合内不能使用或打出牌")
							.set("ai", function (card) {
								var player = _status.event.player;
								var source = _status.event.getTrigger().player;
								if (get.attitude(source, player) > 0) return -1;
								if (_status.event.getRand() > 0.5) return 5 - get.value(card);
								return -1;
							});
					"step 3";
					if (target.isIn() && !result.bool) target.addTempSkill("xiying2");
					if (targets.length) event.goto(2);
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						return arg.target.hasSkill("xiying2");
					},
				},
				subSkill: {
					gain: {
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return (
								player.getHistory("sourceDamage", function (evt) {
									return evt.isPhaseUsing(player);
								}).length > 0
							);
						},
						content: function () {
							var card = get.cardPile2(function (card) {
								var type = get.type(card, null, false);
								if (type != "basic" && type != "trick") return false;
								return get.tag(card, "damage") > 0;
							});
							if (card) player.gain(card, "gain2");
						},
					},
				},
			},
			xiying2: {
				mark: true,
				intro: { content: "本回合内不能使用或打出牌" },
				mod: {
					cardEnabled2: function (card) {
						return false;
					},
				},
			},
			gangzhi: {
				audio: 2,
				trigger: {
					player: "damageBefore",
					source: "damageBefore",
				},
				forced: true,
				filter: function (event, player) {
					if (event.source == event.player) return false;
					if (event.player == player) {
						return event.source && event.source.isIn();
					}
					return true;
				},
				content: function () {
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
				ai: {
					jueqing: true,
				},
				init(player) {
					game.addGlobalSkill("gangzhi_jueqing");
				},
				onremove() {
					if (!game.hasPlayer(cur => cur.hasSkill("gangzhi", null, null, false), true)) game.removeGlobalSkill("gangzhi_jueqing");
				},
				subSkill: {
					jueqing: {
						trigger: {player: "dieAfter"},
						filter(event, player) {
							return !game.hasPlayer(cur => cur.hasSkill("gangzhi", null, null, false));
						},
						silent: true,
						forceDie: true,
						content() {
							game.removeGlobalSkill("gangzhi_jueqing");
						},
						ai: {
							jueqing: true,
							skillTagFilter(player, tag, arg) {
								if (tag === "jueqing") return arg && arg.hasSkill("gangzhi");
							}
						}
					}
				},
			},
			beizhan: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				audio: 2,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("beizhan")).set("ai", function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						var hs = target.countCards("h");
						var ht = target.maxHp;
						if (hs >= ht && target.isMaxHandcard()) return -att * hs;
						if (
							hs < ht &&
							game.hasPlayer(function (current) {
								return current.countCards("h") > ht;
							})
						)
							return att * 2 * (ht - hs);
						return 0;
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("beizhan", target);
						target.drawTo(Math.min(5, target.maxHp));
						target.addSkill("beizhan2");
					}
				},
				ai: {
					expose: 0.25,
				},
			},
			beizhan2: {
				trigger: { player: "phaseBegin" },
				silent: true,
				firstDo: true,
				sourceSkill: "beizhan",
				content: function () {
					player.removeSkill("beizhan2");
					if (player.isMaxHandcard()) player.addTempSkill("zishou2");
				},
				mark: true,
				intro: { content: "回合开始时，若手牌数为全场最多，则回合内不能使用牌指定其他角色为目标" },
			},
			fenglve: {
				audio: 2,
				trigger: {
					player: "phaseUseBegin",
				},
				direct: true,
				content: function () {
					"step 0";
					var goon = player.hasCard(function (card) {
						if (get.position(card) != "h") return false;
						var val = get.value(card);
						if (val < 0) return true;
						if (val <= 5) {
							return card.number >= 12;
						}
						if (val <= 6) {
							return card.number >= 13;
						}
						return false;
					});
					player
						.chooseTarget(get.prompt2("fenglve"), function (card, player, target) {
							return player.canCompare(target);
						})
						.set("ai", function (target) {
							if (!_status.event.goon) return 0;
							return (
								(-get.attitude(player, target) * (1 + target.countCards("e"))) /
								(1 + target.countCards("j"))
							);
						})
						.set("goon", goon);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("fenglve", target);
						player.chooseToCompare(target);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						var num = 0;
						if (target.countCards("h")) num++;
						if (target.countCards("e")) num++;
						if (target.countCards("j")) num++;
						if (num) {
							event.gainner = player;
							event.giver = target;
							target
								.choosePlayerCard(target, num, "hej", true)
								.set("filterButton", function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (
											get.position(button.link) ==
											get.position(ui.selected.buttons[i].link)
										)
											return false;
									}
									return true;
								})
								.set("prompt", "选择交给" + get.translation(event.gainner) + "的牌");
						} else event.finish();
					} else {
						if (player.countCards("he")) {
							event.gainner = target;
							event.giver = player;
							player
								.choosePlayerCard(player, true, "he")
								.set("prompt", "选择交给" + get.translation(event.gainner) + "的牌");
						} else event.finish();
					}
					"step 3";
					event.giver.give(result.links, event.gainner);
				},
				group: "fenglve2",
				ai: {
					expose: 0.25,
				},
			},
			fenglve2: {
				trigger: {
					player: "chooseToCompareAfter",
					target: "chooseToCompareAfter",
				},
				check: function (event, player) {
					var card, target;
					if (player == event.player) {
						card = event.card1;
						target = event.target;
					} else {
						card = event.card2;
						target = event.player;
					}
					return get.attitude(player, target) * get.value(card, target, "raw") > 0;
				},
				sourceSkill: "fenglve",
				filter: function (event, player) {
					if (event.targets) return false;
					var card, target;
					if (player == event.player) {
						card = event.card1;
						target = event.target;
					} else {
						card = event.card2;
						target = event.player;
					}
					return get.position(card, true) == "o";
				},
				prompt: function (event, player) {
					var card, target;
					if (player == event.player) {
						card = event.card1;
						target = event.target;
					} else {
						card = event.card2;
						target = event.player;
					}
					return (
						"是否发动【锋略】，令" +
						get.translation(target) +
						"获得" +
						get.translation(card) +
						"？"
					);
				},
				logTarget: function (event, player) {
					var target;
					if (player == event.player) {
						target = event.target;
					} else {
						target = event.player;
					}
					return target;
				},
				content: function () {
					var card, target;
					if (player == trigger.player) {
						card = trigger.card1;
						target = trigger.target;
					} else {
						card = trigger.card2;
						target = trigger.player;
					}
					target.gain(card, "gain2", "log");
				},
			},
			mouzhi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				filterTarget: function (card, player, target) {
					if (target.storage.mouzhi2 && target.storage.mouzhi2.includes(player)) return false;
					return target != player;
				},
				delay: 0,
				lose: false,
				discard: false,
				check: function (card) {
					if (card.name == "du") return 20;
					var player = _status.event.player;
					var useval = player.getUseValue(card);
					var maxval = 0;
					game.countPlayer(function (current) {
						if (
							current != player &&
							!current.hasSkillTag("nogain") &&
							get.attitude(player, current) > 0
						) {
							var temp = current.getUseValue(card);
							if (temp > maxval) maxval = temp;
						}
					});
					if (maxval > 0 && get.tag(card, "damage")) return 15;
					if (maxval > useval) return 10;
					if (player.needsToDiscard()) return 1 / Math.max(0.1, get.value(card));
					return -1;
				},
				content: function () {
					player.give(cards, target);
					target.addTempSkill("mouzhi2", { player: "phaseEnd" });
					target.storage.mouzhi2.add(player);
					target.storage.mouzhi2.sortBySeat(target);
					target.markSkill("mouzhi2");
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (ui.selected.cards.length) {
								var card = ui.selected.cards[0];
								if (card.name == "du") return target.hasSkill("lucia_duqu") ? 1 : -1;
								var t = target.getUseValue(card);
								var p = player.getUseValue(card);
								if (t > p) return 2;
								if (t > 0) return 1.5;
								if (player.needsToDiscard()) return 1;
								return 0;
							}
							return 0;
						},
					},
				},
			},
			mouzhi2: {
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				trigger: { source: "damageSource" },
				forced: true,
				intro: {
					content: "出牌阶段内第一次对一名其他角色造成伤害时，$摸一张牌",
				},
				sourceSkill: "mouzhi",
				filter: function (event, player) {
					var evt2 = event.getParent("phaseUse");
					if (!evt2 || evt2.player != player) return false;
					var history = event.player.getHistory("damage", function (evt) {
						return evt.source == player && evt.getParent("phaseUse") == evt2;
					});
					return history[0] == event;
				},
				content: function () {
					"step 0";
					game.asyncDraw(player.storage.mouzhi2);
					"step 1";
					game.delay();
				},
			},
			yuanlve: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filter: function (event, player) {
					return player.countCards("h", function (card) {
						return get.type(card) != "equip";
					});
				},
				filterCard: function (card) {
					return get.type(card) != "equip";
				},
				filterTarget: lib.filter.notMe,
				delay: false,
				discard: false,
				lose: false,
				check: function (card) {
					if (card.name == "du") return 20;
					var player = _status.event.player;
					var useval = player.getUseValue(card);
					var maxval = 0;
					game.countPlayer(function (current) {
						if (
							current != player &&
							!current.hasSkillTag("nogain") &&
							get.attitude(player, current) > 0
						) {
							var temp = current.getUseValue(card);
							if (temp > maxval) maxval = temp;
						}
					});
					if (maxval > useval) return 15;
					if (maxval > 0) return 10;
					if (player.needsToDiscard()) return 1 / Math.max(0.1, get.value(card));
					return -1;
				},
				content: function () {
					"step 0";
					player.give(cards, target);
					"step 1";
					target.chooseUseTarget(cards[0]);
					"step 2";
					if (result.bool) player.draw();
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (ui.selected.cards.length) {
								var card = ui.selected.cards[0];
								if (card.name == "du") return target.hasSkill("lucia_duqu") ? 1 : -1;
								var t = target.getUseValue(card);
								var p = player.getUseValue(card);
								if (t > p) return 2;
								if (t > 0) return 1.5;
								if (player.needsToDiscard()) return 1;
								return 0;
							}
							return 0;
						},
					},
				},
			},
			//吕旷吕翔和淳于琼和官渡哔哔机
			spshicai: {
				audio: 2,
				enable: "phaseUse",
				position: "he",
				filter: function (event, player) {
					return (
						!player.storage.spshicai2 || !player.getCards("h").includes(player.storage.spshicai2)
					);
				},
				filterCard: true,
				prompt: function () {
					var str = "弃置一张牌，然后获得";
					if (get.itemtype(_status.pileTop) == "card") str += get.translation(_status.pileTop);
					else str += "牌堆顶的一张牌";
					return str;
				},
				check: function (card) {
					var player = _status.event.player;
					var cardx = _status.pileTop;
					if (get.itemtype(cardx) != "card") return 0;
					var val = player.getUseValue(cardx, null, true);
					if (!val) return 0;
					var val2 = player.getUseValue(card, null, true);
					return (val - val2) / Math.max(0.1, get.value(card));
				},
				content: function () {
					var card = get.cards()[0];
					player.storage.spshicai2 = card;
					player.gain(card, "draw");
					game.log(player, "获得了牌堆顶的一张牌");
				},
				group: "spshicai_mark",
				ai: {
					order: 1,
					result: { player: 1 },
				},
			},
			spshicai_mark: {
				trigger: { player: "phaseUseBegin" },
				silent: true,
				firstDo: true,
				sourceSkill: "spshicai",
				content: function () {
					player.addTempSkill("spshicai2", "phaseUseEnd");
				},
			},
			spshicai2: {
				onremove: true,
				mark: true,
				intro: {
					mark: function (dialog, content, player) {
						if (player != game.me) return get.translation(player) + "观看牌堆中...";
						if (get.itemtype(_status.pileTop) != "card") return "牌堆顶无牌";
						dialog.add([_status.pileTop]);
					},
				},
			},
			spfushi: {
				group: ["zezhu", "chenggong"],
				derivation: ["zezhu", "chenggong"],
				locked: true,
			},
			zezhu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					var enemy = 0;
					var friend = 0;
					var zhu = 0;
					for (var i of game.players) {
						if (i.isEnemyOf(player)) enemy++;
						else friend++;
						if (i != player && i.isZhu) zhu++;
					}
					return zhu > 0 && enemy < friend;
				},
				filterTarget: function (card, player, target) {
					return target != player && target.isZhu;
				},
				selectTarget: -1,
				multiline: true,
				multitarget: true,
				content: function () {
					"step 0";
					event.targets.sortBySeat();
					event.targets2 = event.targets.slice(0);
					"step 1";
					var target = event.targets2.shift();
					if (target.countGainableCards(player, "he") > 0)
						player.gainPlayerCard(target, "he", true);
					else player.draw();
					if (event.targets2.length) event.redo();
					"step 2";
					if (player.countCards("he") >= targets.length) {
						player
							.chooseCard(
								"he",
								true,
								"依次选择" +
									get.cnNumber(targets.length) +
									"张牌，分别交给" +
									get.translation(targets),
								targets.length
							)
							.set("ai", function (card) {
								var target = _status.event.getParent().targets[ui.selected.cards.length];
								var player = _status.event.player;
								return get.attitude(player, target) * get.value(card, target);
							});
					} else event.finish();
					"step 3";
					var list = [];
					for (var i = 0; i < targets.length; i++) {
						list.push([targets[i], result.cards[i]]);
					}
					game.loseAsync({
						gain_list: list,
						giver: player,
						player: player,
						cards: result.cards,
						animate: "giveAuto",
					}).setContent("gaincardMultiple");
				},
				ai: {
					order: 6,
					result: { player: 1 },
				},
			},
			chenggong: {
				audio: 2,
				trigger: { global: "useCardToPlayered" },
				filter: function (event, player) {
					if (
						!(
							event.isFirstTarget &&
							event.targets &&
							event.targets.length > 1 &&
							event.player.isIn()
						)
					)
						return false;
					var enemy = 0;
					var friend = 0;
					for (var i of game.players) {
						if (i.isEnemyOf(player)) enemy++;
						else friend++;
					}
					return enemy > friend;
				},
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				logTarget: "player",
				content: function () {
					trigger.player.draw();
				},
			},
			cangchu: {
				trigger: {
					global: "phaseBefore",
					player: ["damageEnd", "enterGame"],
				},
				audio: 2,
				forced: true,
				filter: function (event, player) {
					if (event.name != "damage") return event.name != "phase" || game.phaseNumber == 0;
					return event.hasNature("fire") && player.countMark("cangchu") > 0;
				},
				content: function () {
					if (trigger.name != "damage") player.addMark("cangchu", 3);
					else {
						player.removeMark("cangchu", Math.min(trigger.num, player.countMark("cangchu")));
						if (!player.hasMark("cangchu")) event.trigger("cangchuAwaken");
					}
				},
				marktext: "粮",
				intro: {
					name2: "粮",
					content: "mark",
				},
				ai: {
					threaten: function (player, target) {
						return 1 + target.countMark("cangchu") / 2;
					},
					effect: {
						target: function (card, player, target, current) {
							if (target.hasMark("cangchu")) {
								if (card.name == "sha") {
									if (
										lib.skill.global.includes("huoshaowuchao") ||
										game.hasNature(card, "fire") ||
										player.hasSkill("zhuque_skill")
									)
										return 2;
								}
								if (get.tag(card, "fireDamage") && current < 0) return 2;
							}
						},
					},
					combo: "liangying",
				},
			},
			sushou: {
				audio: 2,
				trigger: { player: "phaseDiscardBegin" },
				frequent: true,
				async content(event, trigger, player) {
					await player.draw(1 + player.countMark("cangchu"));
					const num = Math.min(
						player.countCards("h"),
						player.countCards("he"),
						game.countPlayer((target) => target != player && target.isFriendOf(player))
					);
					if (num) {
						let list = [];
						if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
						while (num - list.length > 0) {
							const {
								result: { bool, targets, cards },
							} = await player
								.chooseCardTarget({
									prompt: "宿守：你可以交给友方角色各一张牌",
									position: "he",
									animate: false,
									filterCard(card, player) {
										return !get.event("list").some((list) => list[1] == card);
									},
									filterTarget(card, player, target) {
										return (
											target != player &&
											target.isFriendOf(player) &&
											!get.event("list").some((list) => list[0] == target)
										);
									},
									ai1(card) {
										if (card.name == "shan") return 1;
										return Math.random();
									},
									ai2(target) {
										return get.attitude(get.event("player"), target);
									},
								})
								.set("list", list);
							if (bool) {
								list.push([targets[0], cards[0]]);
								player.addGaintag(cards, "olsujian_given");
							} else break;
						}
						if (_status.connectMode) {
							game.broadcastAll(() => {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
						if (list.length) {
							await game
								.loseAsync({
									gain_list: list,
									player: player,
									cards: list.slice().map((list) => list[1]),
									giver: player,
									animate: "giveAuto",
								})
								.setContent("gaincardMultiple");
						}
					}
				},
			},
			liangying: {
				trigger: {
					global: "phaseDrawBegin2",
					player: "cangchuAwaken",
				},
				forced: true,
				audio: 1,
				logTarget: function (event, player) {
					if (event.name == "phaseDraw") return event.player;
					return game.filterPlayer(function (current) {
						return current.isEnemyOf(player);
					});
				},
				filter: function (event, player) {
					if (event.name == "cangchu") return true;
					return player.hasMark("cangchu") && !event.numFixed && event.player.isFriendOf(player);
				},
				content: function () {
					"step 0";
					if (trigger.name == "cangchu") {
						player.loseMaxHp();
						var list = game.filterPlayer(function (current) {
							return current.isEnemyOf(player);
						});
						if (list.length) {
							game.asyncDraw(list, 2);
						}
					} else {
						trigger.num++;
						event.finish();
					}
					"step 1";
					game.delay();
				},
				ai: {
					combo: "cangchu",
				},
			},
			liehou: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				filterTarget: function (card, player, target) {
					return player.inRange(target) && target.countCards("h");
				},
				content: function () {
					"step 0";
					target.chooseCard("h", true, "交给" + get.translation(player) + "一张牌");
					"step 1";
					if (result.bool) {
						target.give(result.cards, player);
					} else event.finish();
					"step 2";
					if (
						player.countCards("h") &&
						game.hasPlayer(function (current) {
							return current != target && player.inRange(current);
						})
					) {
						player.chooseCardTarget({
							position: "h",
							filterCard: true,
							filterTarget: function (card, player, target) {
								return target != _status.event.getParent().target && player.inRange(target);
							},
							forced: true,
							prompt: "将一张手牌交给一名攻击范围内的其他角色",
							ai1: function (card) {
								var player = _status.event.player;
								if (get.name(card) == "du") return 20;
								if (
									game.hasPlayer(function (current) {
										return (
											current != _status.event.getParent().target &&
											player.inRange(current) &&
											get.attitude(player, current) > 0 &&
											current.getUseValue(card) > player.getUseValue(card) &&
											current.getUseValue(card) > player.getUseValue(card)
										);
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
									if (
										get.position(card) == "h" &&
										target.getUseValue(card) > player.getUseValue(card)
									)
										return 4 * att;
									if (get.value(card, target) > get.value(card, player)) return 2 * att;
									return 1.2 * att;
								}
								return (-att * Math.min(4, target.countCards("he"))) / 6;
							},
						});
					} else event.finish();
					"step 3";
					if (result.bool) player.give(result.cards, result.targets[0]);
				},
				ai: {
					order: 6,
					result: {
						target: -1,
					},
				},
			},
			qigong: {
				trigger: { player: "shaMiss" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					return (
						event.target.isIn() &&
						game.hasPlayer(function (current) {
							return current != event.target && current.canUse("sha", event.target, false);
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("qigong"),
							"令一名角色可再对" + get.translation(trigger.target) + "使用一张【杀】",
							function (card, player, target) {
								var source = _status.event.getTrigger().target;
								return target != source && target.canUse("sha", source, false);
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								card = { name: "sha" },
								source = _status.event.getTrigger().target;
							if (target.hasSha()) {
								var eff1 = get.effect(source, card, target, target);
								if (eff1 > 0) return get.effect(source, card, target, player);
							}
							return target != player ? Math.random() * get.attitude(player, target) : 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("qigong", target);
						target.addTempSkill("qigong_ai", "chooseToUseEnd");
						target
							.chooseToUse(
								"是否再对" + get.translation(trigger.target) + "使用一张【杀】？",
								function (card, player, event) {
									if (get.name(card) != "sha") return false;
									return lib.filter.filterCard.apply(this, arguments);
								},
								trigger.target,
								-1
							)
							.set("addCount", false)
							.set("oncard", function () {
								_status.event.directHit.addArray(game.players);
							});
					}
				},
				subSkill: {
					ai: {
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return arg.card && arg.card.name == "sha";
							},
						},
					},
				},
			},
			//和沙摩柯一起上线的新服三将
			spjiedao: {
				audio: 2,
				trigger: {
					source: "damageBegin1",
				},
				filter: function (event, player) {
					return player.isDamaged() && !player.getHistory("sourceDamage").length;
				},
				logTarget: "player",
				direct: true,
				check: function (trigger, player) {
					if (get.attitude(player, trigger.player) >= -1) return false;
					return !trigger.player.hasSkillTag("filterDamage", null, {
						player: player,
						card: trigger.card,
					});
				},
				content: function () {
					"step 0";
					var num = player.getDamagedHp();
					var map = {};
					var list = [];
					for (var i = 1; i <= num; i++) {
						var cn = get.cnNumber(i, true);
						map[cn] = i;
						list.push(cn);
					}
					event.map = map;
					player
						.chooseControl(list, "cancel2", function () {
							if (!lib.skill.spjiedao.check(_status.event.getTrigger(), player))
								return "cancel2";
							return get.cnNumber(_status.event.goon, true);
						})
						.set("prompt", get.prompt2("spjiedao", trigger.player))
						.set("goon", num);
					"step 1";
					if (result.control == "cancel2") return;
					player.logSkill("spjiedao", trigger.player);
					var num = event.map[result.control] || 1;
					trigger.num += num;
					player
						.when({ global: "damageEnd" })
						.filter(evt => evt == trigger)
						.then(() => {
							if (trigger.player.isIn()) {
								player.chooseToDiscard(num, true, "he");
							}
						})
						.vars({ num: num });
				},
			},
			biaozhao: {
				audio: 2,
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				trigger: {
					player: "phaseJieshuBegin",
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards("he") > 0 && !player.getExpansions("biaozhao").length;
				},
				content: function () {
					"step 0";
					player.chooseCard("he", get.prompt("biaozhao"), "将一张牌置于武将牌上作为“表”").ai =
						function (card) {
							return 6 - get.value(card);
						};
					"step 1";
					if (result.bool) {
						player.logSkill("biaozhao");
						player.addToExpansion(result.cards, player, "give").gaintag.add("biaozhao");
					}
				},
				ai: {
					notemp: true,
				},
				group: ["biaozhao2", "biaozhao3"],
			},
			biaozhao2: {
				trigger: {
					global: ["loseAsyncAfter", "loseAfter", "cardsDiscardAfter"],
				},
				forced: true,
				audio: "biaozhao",
				sourceSkill: "biaozhao",
				filter: function (event, player) {
					if (event.name == "loseAsyncAfter" && event.type != "discard") return false;
					if (event.name == "lose" && (event.getlx === false || event.position != ui.discardPile))
						return false;
					var cards = player.getExpansions("biaozhao");
					if (!cards.length) return false;
					var suit = get.suit(cards[0]);
					var num = get.number(cards[0]);
					var cards = event.getd();
					for (var card of cards) {
						if (get.suit(card) == suit && get.number(card) == num) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					var card = player.getExpansions("biaozhao")[0];
					if (trigger.getParent().name == "discard") {
						trigger.player.gain(card, player, "give", "bySelf");
					} else {
						player.loseToDiscardpile(card);
					}
					"step 1";
					player.loseHp();
				},
			},
			biaozhao3: {
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				forced: true,
				charlotte: true,
				audio: "biaozhao",
				sourceSkill: "biaozhao",
				filter: function (event, player) {
					return player.getExpansions("biaozhao").length > 0;
				},
				content: function () {
					"step 0";
					var card = player.getExpansions("biaozhao")[0];
					player.loseToDiscardpile(card);
					"step 1";
					event.num = 0;
					game.countPlayer(function (current) {
						if (current.countCards("h") > event.num) event.num = current.countCards("h");
					});
					player.chooseTarget("是否令一名角色将手牌摸至" + event.num + "张并回复1点体力？").ai =
						function (target) {
							var num = Math.min(event.num - target.countCards("h"), 5);
							if (target.isDamaged()) num++;
							return num * get.attitude(_status.event.player, target);
						};
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						var draw = Math.min(num - target.countCards("h"), 5);
						if (draw) target.draw(draw);
						target.recover();
					}
				},
			},
			yechou: {
				audio: 2,
				trigger: {
					player: "die",
				},
				direct: true,
				forceDie: true,
				skillAnimation: true,
				animationColor: "wood",
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("yechou"), function (card, player, target) {
							return player != target && target.getDamagedHp() > 1;
						})
						.set("forceDie", true)
						.set("ai", function (target) {
							let att = get.attitude(_status.event.player, target);
							if (att > 0) return 0;
							att = Math.sqrt(0.01 - att);
							return (
								att *
								(get.distance(_status.currentPhase, target, "absolute") ||
									game.players.length)
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("yechou", target);
						player.line(target, "green");
						target.addTempSkill("yechou2", { player: "phaseZhunbeiBegin" });
					}
				},
				ai: {
					expose: 0.5,
					maixie_defend: true,
				},
			},
			yechou2: {
				mark: true,
				marktext: "仇",
				intro: {
					content: "每个回合结束时失去1点体力直到回合开始",
				},
				trigger: {
					global: "phaseAfter",
				},
				forced: true,
				sourceSkill: "yechou",
				content: function () {
					player.loseHp();
				},
			},
			yanjiao: {
				audio: 2,
				ai: {
					order: 10,
					result: {
						player: 1,
						target: 1.1,
					},
				},
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					"step 0";
					var num = 4;
					if (player.storage.xingshen) {
						num += player.storage.xingshen;
						player.storage.xingshen = 0;
						player.unmarkSkill("xingshen");
					}
					if (player.storage.olxingshen) {
						num += player.storage.olxingshen;
						player.storage.olxingshen = 0;
						player.unmarkSkill("olxingshen");
					}
					num = Math.min(10, num);
					event.cards = get.cards(num);
					game.cardsGotoOrdering(event.cards);
					player.showCards(event.cards);
					"step 1";
					event.getedResult = lib.skill.yanjiao.getResult(cards);
					if (!event.getedResult.length) {
						player.addTempSkill("yanjiao2");
						event.finish();
					}
					"step 2";
					target
						.chooseControl("自动分配", "手动分配")
						.set("prompt", "【严教】：是否让系统自动分配方案？").ai = function () {
						return 0;
					};
					"step 3";
					if (result.control == "手动分配") {
						event.goto(8);
					}
					"step 4";
					event.index = 0;
					event.togain = event.getedResult[event.index];
					target.showCards(event.togain[0], get.translation(target) + "分出的第一份牌");
					"step 5";
					target.showCards(event.togain[1], get.translation(target) + "分出的第二份牌");
					"step 6";
					target
						.chooseControl()
						.set("choiceList", [
							"获得" + get.translation(event.togain[0]),
							"获得" + get.translation(event.togain[1]),
						]).ai = function () {
						return Math.random() < 0.5 ? 1 : 0;
					};
					"step 7";
					var list = [
						[target, event.togain[result.index]],
						[player, event.togain[1 - result.index]],
					];
					game.loseAsync({
						gain_list: list,
						giver: target,
						animate: "gain2",
					}).setContent("gaincardMultiple");
					if (event.togain[2].length > 1) player.addTempSkill("yanjiao2");
					event.finish();
					"step 8";
					var next = target.chooseToMove("严教：分出点数相等的两组牌");
					next.set("chooseTime", (cards.length * 4).toString());
					next.set("list", [
						[
							"未分配",
							cards,
							function (list) {
								var num = 0;
								for (var i of list) num += i.number;
								return "未分配（点数和" + num + "）";
							},
						],
						[
							"第一组",
							[],
							function (list) {
								var num = 0;
								for (var i of list) num += i.number;
								return "第一组（点数和" + num + "）";
							},
						],
						[
							"第二组",
							[],
							function (list) {
								var num = 0;
								for (var i of list) num += i.number;
								return "第二组（点数和" + num + "）";
							},
						],
					]);
					next.set("filterOk", function (moved) {
						var num1 = 0;
						for (var i of moved[1]) num1 += i.number;
						if (num1 == 0) return false;
						var num2 = 0;
						for (var i of moved[2]) num2 += i.number;
						return num1 == num2;
					});
					next.set("processAI", () => false);
					"step 9";
					if (result.bool) {
						var moved = result.moved;
						event.getedResult = [[moved[1], moved[2], moved[0]]];
						event.goto(4);
					} else {
						player.addTempSkill("yanjiao2");
					}
				},
				getResult: function (cards) {
					var cl = cards.length;
					var maxmium = Math.pow(3, cl);
					var filter = function (list) {
						if (!list[1].length || !list[0].length) return false;
						var num1 = 0;
						for (var i = 0; i < list[1].length; i++) {
							num1 += list[1][i].number;
						}
						var num2 = 0;
						for (var j = 0; j < list[0].length; j++) {
							num2 += list[0][j].number;
						}
						return num1 == num2;
					};
					var results = [];
					for (var i = 0; i < maxmium; i++) {
						var result = [[], [], []];
						for (var j = 0; j < cl; j++) {
							result[Math.floor((i % Math.pow(3, j + 1)) / Math.pow(3, j))].push(cards[j]);
						}
						if (filter(result)) results.push(result);
					}
					var filterSame = function (list1, list2) {
						if (list1[1].length == list2[0].length && list1[0].length == list2[1].length) {
							for (var i = 0; i < list1[0].length; i++) {
								if (!list2[1].includes(list1[0][i])) return false;
							}
							for (var i = 0; i < list1[1].length; i++) {
								if (!list2[0].includes(list1[1][i])) return false;
							}
							return true;
						}
						return false;
					};
					for (var i = 0; i < results.length; i++) {
						for (var j = i + 1; j < results.length; j++) {
							if (filterSame(results[i], results[j])) results.splice(j--, 1);
						}
					}
					results.sort(function (a, b) {
						return a[2].length - b[2].length;
					});
					return results.slice(0, 50);
				},
			},
			yanjiao2: {
				marktext: "教",
				mark: true,
				intro: {
					content: "本回合手牌上限-1",
				},
				mod: {
					maxHandcard: function (player, num) {
						return num - 1;
					},
				},
			},
			xingshen: {
				audio: 2,
				intro: {
					content: "下一次发动【严教】时多展示#张牌",
				},
				trigger: {
					player: "damageEnd",
				},
				frequent: true,
				content: function () {
					player.draw(player.isMinHandcard() ? 2 : 1);
					if (!player.storage.xingshen) player.storage.xingshen = 0;
					player.storage.xingshen += player.isMinHp() ? 2 : 1;
					if (player.storage.xingshen > 4) player.storage.xingshen = 4;
					player.markSkill("xingshen");
				},
			},
			pingjian: {
				initList: function () {
					var list = [];
					if (_status.connectMode) list = get.charactersOL();
					else {
						var list = [];
						for (var i in lib.character) {
							if (!lib.filter.characterDisabled2(i) && !lib.filter.characterDisabled(i))
								list.push(i);
						}
					}
					game.countPlayer2(function (current) {
						list.remove(current.name);
						list.remove(current.name1);
						list.remove(current.name2);
					});
					_status.characterlist = list;
				},
				init: function (player) {
					player.addSkill("pingjian_check");
					if (!player.storage.pingjian_check) player.storage.pingjian_check = {};
				},
				audio: 2,
				trigger: { player: ["damageEnd", "phaseJieshuBegin"] },
				frequent: true,
				content: function () {
					"step 0";
					if (!_status.characterlist) {
						lib.skill.pingjian.initList();
					}
					var allList = _status.characterlist.slice(0);
					game.countPlayer(function (current) {
						if (
							current.name &&
							lib.character[current.name] &&
							current.name.indexOf("gz_shibing") != 0 &&
							current.name.indexOf("gz_jun_") != 0
						)
							allList.add(current.name);
						if (
							current.name1 &&
							lib.character[current.name1] &&
							current.name1.indexOf("gz_shibing") != 0 &&
							current.name1.indexOf("gz_jun_") != 0
						)
							allList.add(current.name1);
						if (
							current.name2 &&
							lib.character[current.name2] &&
							current.name2.indexOf("gz_shibing") != 0 &&
							current.name2.indexOf("gz_jun_") != 0
						)
							allList.add(current.name2);
					});
					var list = [];
					var skills = [];
					var map = [];
					allList.randomSort();
					var name2 = event.triggername;
					for (var i = 0; i < allList.length; i++) {
						var name = allList[i];
						if (name.indexOf("zuoci") != -1 || name.indexOf("xushao") != -1) continue;
						var skills2 = lib.character[name][3];
						for (var j = 0; j < skills2.length; j++) {
							if (player.getStorage("pingjian").includes(skills2[j])) continue;
							if (skills.includes(skills2[j])) {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							var list2 = [skills2[j]];
							game.expandSkills(list2);
							for (var k = 0; k < list2.length; k++) {
								var info = lib.skill[list2[k]];
								if (get.is.zhuanhuanji(list2[k], player)) continue;
								if (
									!info ||
									!info.trigger ||
									!info.trigger.player ||
									info.silent ||
									info.limited ||
									info.juexingji ||
									info.hiddenSkill ||
									info.dutySkill ||
									(info.zhuSkill && !player.isZhu2())
								)
									continue;
								if (
									info.trigger.player == name2 ||
									(Array.isArray(info.trigger.player) &&
										info.trigger.player.includes(name2))
								) {
									if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
									if (info.init) continue;
									if (info.filter) {
										try {
											var bool = info.filter(trigger, player, name2);
											if (!bool) continue;
										} catch (e) {
											continue;
										}
									}
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									break;
								}
							}
						}
						if (list.length > 2) break;
					}
					if (skills.length) {
						event.list = list;
						player
							.chooseControl(skills)
							.set("dialog", ["评鉴：请选择尝试发动的技能", [list, "character"]]);
					} else event.finish();
					"step 1";
					player.markAuto("pingjian", [result.control]);
					player.addTempSkill(result.control);
					player.storage.pingjian_check[result.control] =
						trigger.name == "damage" ? trigger : "phaseJieshu";
					var name = event.list.find((name) => lib.character[name][3].includes(result.control));
					// if(name) lib.skill.rehuashen.createAudio(name,result.control,'xushao');
					if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
				},
				group: "pingjian_use",
				phaseUse_special: [],
				ai: { threaten: 5 },
			},
			pingjian_use: {
				audio: "pingjian",
				enable: "phaseUse",
				usable: 1,
				sourceSkill: "pingjian",
				prompt: () => lib.translate.pingjian_info,
				content: function () {
					"step 0";
					var list = [];
					var skills = [];
					var map = [];
					var evt = event.getParent(2);
					if (!_status.characterlist) {
						lib.skill.pingjian.initList();
					}
					var allList = _status.characterlist.slice(0);
					game.countPlayer(function (current) {
						if (
							current.name &&
							lib.character[current.name] &&
							current.name.indexOf("gz_shibing") != 0 &&
							current.name.indexOf("gz_jun_") != 0
						)
							allList.add(current.name);
						if (
							current.name1 &&
							lib.character[current.name1] &&
							current.name1.indexOf("gz_shibing") != 0 &&
							current.name1.indexOf("gz_jun_") != 0
						)
							allList.add(current.name1);
						if (
							current.name2 &&
							lib.character[current.name2] &&
							current.name2.indexOf("gz_shibing") != 0 &&
							current.name2.indexOf("gz_jun_") != 0
						)
							allList.add(current.name2);
					});
					allList.randomSort();
					for (var i = 0; i < allList.length; i++) {
						var name = allList[i];
						if (name.indexOf("zuoci") != -1 || name.indexOf("xushao") != -1) continue;
						var skills2 = lib.character[name][3];
						for (var j = 0; j < skills2.length; j++) {
							if (player.getStorage("pingjian").includes(skills2[j])) continue;
							if (get.is.locked(skills2[j], player)) continue;
							var info = lib.translate[skills2[j] + "_info"];
							if (
								skills.includes(skills2[j]) ||
								(info &&
									info.indexOf("当你于出牌阶段") != -1 &&
									info.indexOf("当你于出牌阶段外") == -1)
							) {
								list.add(name);
								if (!map[name]) map[name] = [];
								map[name].push(skills2[j]);
								skills.add(skills2[j]);
								continue;
							}
							var list2 = [skills2[j]];
							game.expandSkills(list2);
							for (var k = 0; k < list2.length; k++) {
								var info = lib.skill[list2[k]];
								if (get.is.zhuanhuanji(list2[k], player)) continue;
								if (
									!info ||
									!info.enable ||
									info.charlotte ||
									info.limited ||
									info.juexingji ||
									info.hiddenSkill ||
									info.dutySkill ||
									(info.zhuSkill && !player.isZhu2())
								)
									continue;
								if (
									info.enable == "phaseUse" ||
									(Array.isArray(info.enable) && info.enable.includes("phaseUse")) ||
									info.enable == "chooseToUse" ||
									(Array.isArray(info.enable) && info.enable.includes("chooseToUse"))
								) {
									if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
									if (info.init || info.onChooseToUse) continue;
									if (info.filter) {
										try {
											var bool = info.filter(evt, player);
											if (!bool) continue;
										} catch (e) {
											continue;
										}
									} else if (info.viewAs && typeof info.viewAs != "function") {
										try {
											if (evt.filterCard && !evt.filterCard(info.viewAs, player, evt))
												continue;
											if (info.viewAsFilter && info.viewAsFilter(player) == false)
												continue;
										} catch (e) {
											continue;
										}
									}
									list.add(name);
									if (!map[name]) map[name] = [];
									map[name].push(skills2[j]);
									skills.add(skills2[j]);
									break;
								}
							}
						}
						if (list.length > 2) break;
					}
					if (skills.length) {
						event.list = list;
						player
							.chooseControl(skills)
							.set("dialog", ["评鉴：请选择尝试发动的技能", [list, "character"]]);
					} else event.finish();
					"step 1";
					player.markAuto("pingjian", [result.control]);
					player.addTempSkill(result.control);
					player.storage.pingjian_check[result.control] = "phaseUse";
					var name = event.list.find((name) => lib.character[name][3].includes(result.control));
					// if(name) lib.skill.rehuashen.createAudio(name,result.control,'xushao');
					if (name) game.broadcastAll((player, name) => player.tempname.add(name), player, name);
				},
				ai: { order: 12, result: { player: 1 } },
			},
			pingjian_check: {
				charlotte: true,
				trigger: { player: ["useSkill", "logSkillBegin"] },
				sourceSkill: "pingjian",
				filter: function (event, player) {
					var info = get.info(event.skill);
					if (info && info.charlotte) return false;
					var skill = get.sourceSkillFor(event);
					return player.storage.pingjian_check[skill];
				},
				direct: true,
				firstDo: true,
				priority: Infinity,
				content: function () {
					var skill = get.sourceSkillFor(trigger);
					player.removeSkill(skill);
					const names =
						player.tempname && player.tempname.filter((i) => lib.character[i][3].includes(skill));
					if (names)
						game.broadcastAll(
							(player, names) => player.tempname.removeArray(names),
							player,
							names
						);
					delete player.storage.pingjian_check[skill];
				},
				group: "pingjian_check2",
			},
			pingjian_check2: {
				charlotte: true,
				trigger: { player: ["phaseUseEnd", "damageEnd", "phaseJieshuBegin"] },
				sourceSkill: "pingjian",
				filter: function (event, player) {
					return Object.keys(player.storage.pingjian_check).find(function (skill) {
						if (event.name != "damage") return player.storage.pingjian_check[skill] == event.name;
						return player.storage.pingjian_check[skill] == event;
					});
				},
				direct: true,
				lastDo: true,
				priority: -Infinity,
				content: function () {
					var skills = Object.keys(player.storage.pingjian_check).filter(function (skill) {
						if (trigger.name != "damage")
							return player.storage.pingjian_check[skill] == trigger.name;
						return player.storage.pingjian_check[skill] == trigger;
					});
					player.removeSkill(skills);
					const names =
						player.tempname &&
						player.tempname.filter((i) =>
							skills.some((skill) => lib.character[i][3].includes(skill))
						);
					if (names)
						game.broadcastAll(
							(player, names) => player.tempname.removeArray(names),
							player,
							names
						);
					for (var skill of skills) delete player.storage.pingjian_check[skill];
				},
			},
			//上兵伐谋
			//伊籍在标包 不会移动
			songshu: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return (
						!player.hasSkill("songshu_reflectionblue", null, null, false) &&
						player.countCards("h") > 0
					);
				},
				filterTarget: function (card, player, target) {
					return target != player && player.canCompare(target);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target).set("small", get.attitude(player, target) > 0);
					"step 1";
					if (!result.bool) {
						player.draw(2, "nodelay");
						target.draw(2);
						player.addTempSkill("songshu_reflectionblue", "phaseUseAfter");
					} else {
						target.addTempSkill("songshu_ai");
					}
				},
				ai: {
					basic: {
						order: 1,
					},
					expose: 0.2,
					result: {
						target: function (player, target) {
							if (target.hasSkill("songshu_ai", null, null, false)) return 0;
							var maxnum = 0;
							var cards2 = target.getCards("h");
							for (var i = 0; i < cards2.length; i++) {
								if (get.number(cards2[i]) > maxnum) {
									maxnum = get.number(cards2[i]);
								}
							}
							if (maxnum > 10) maxnum = 10;
							if (maxnum < 5 && cards2.length > 1) maxnum = 5;
							var cards = player.getCards("h");
							for (var i = 0; i < cards.length; i++) {
								if (get.number(cards[i]) < maxnum) return 1;
							}
							return 0;
						},
					},
				},
			},
			songshu_ai: { charlotte: true },
			songshu_reflectionblue: { charlotte: true },
			sibian: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					event.cards = get.cards(4);
					game.cardsGotoOrdering(event.cards);
					player.showCards(event.cards);
					"step 1";
					cards.sort(function (a, b) {
						return b.number - a.number;
					});
					var gains = [];
					var mx = [cards[0].number, cards[3].number];
					for (var i = 0; i < cards.length; i++) {
						if (mx.includes(cards[i].number)) gains.addArray(cards.splice(i--, 1));
					}
					player.gain(gains, "gain2");
					if (cards.length > 0)
						player
							.chooseTarget(
								"是否令一名手牌数最少的角色获得" + get.translation(cards),
								function (card, player, target) {
									return target.isMinHandcard();
								}
							)
							.set("ai", function (target) {
								return get.attitude(_status.event.player, target);
							});
					else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						player.addExpose(0.2);
						target.gain(cards, "gain2");
					}
				},
			},
			lslixun: {
				audio: 2,
				forced: true,
				trigger: { player: "damageBegin4" },
				marktext: "珠",
				intro: {
					name2: "珠",
					content: "共有#个“珠”",
				},
				content: function () {
					trigger.cancel();
					player.addMark("lslixun", trigger.num);
				},
				group: "lslixun_fate",
			},
			lslixun_fate: {
				audio: "lslixun",
				trigger: { player: "phaseUseBegin" },
				forced: true,
				sourceSkill: "lslixun",
				filter: function (event, player) {
					return player.countMark("lslixun") > 0;
				},
				content: function () {
					"step 0";
					event.forceDie = true;
					_status.lslixun = player.countMark("lslixun");
					player.judge(function (card) {
						if (get.number(card) < _status.lslixun) return -_status.lslixun;
						return 1;
					}).judge2 = function (result) {
						return result.bool ? true : false;
					};
					"step 1";
					delete _status.lslixun;
					if (!result.bool) {
						player.chooseToDiscard([1, player.countMark("lslixun")], "h").ai =
							lib.skill.qiangxi.check;
					} else event.finish();
					"step 2";
					var num = player.countMark("lslixun");
					if (result.cards && result.cards.length) num -= result.cards.length;
					if (num) player.loseHp(num);
				},
			},
			lskuizhu: {
				audio: 2,
				trigger: { player: "phaseUseEnd" },
				direct: true,
				filter: function (event, player) {
					return player.isMaxHp(true) == false;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("lskuizhu"), function (card, player, target) {
						return target != player && target.isMaxHp();
					}).ai = function (target) {
						var player = _status.event.player;
						var ts = Math.min(5, target.countCards("h"));
						var delta = ts - player.countCards("h");
						if (delta <= 0) return 0;
						if (get.attitude(player, target) < 1) return false;
						return target.countCards("he", function (card) {
							return lib.skill.zhiheng.check(card) > 0;
						}) > 1
							? delta
							: 0;
					};
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("lskuizhu", target);
						player.drawTo(Math.min(5, target.countCards("h")));
					} else event.finish();
					"step 2";
					if (!player.countCards("h")) {
						event.finish();
						return;
					}
					target.viewHandcards(player);
					"step 3";
					if (!target.countCards("h")) {
						event.finish();
						return;
					}
					target.chooseToDiscard(
						true,
						"h",
						[1, player.countCards("h")],
						"弃置至多" +
							get.cnNumber(player.countCards("h")) +
							"张手牌，并获得" +
							get.translation(player) +
							"等量的手牌"
					).ai = function (card) {
						if (ui.selected.cards.length > 1) return -1;
						return lib.skill.zhiheng.check.apply(this, arguments);
					};
					"step 4";
					if (
						result.bool &&
						result.cards &&
						result.cards.length &&
						player.countGainableCards(target, "h") > 0
					) {
						target.gainPlayerCard(player, "h", true, result.cards.length).visible = true;
					}
					"step 5";
					if (result.bool && result.cards && result.cards.length > 1) {
						var bool = player.storage.lslixun > 0 !== true;
						player
							.chooseTarget(
								bool,
								"令" +
									get.translation(target) +
									"对其攻击范围内的一名角色造成1点伤害" +
									(bool ? "" : "，或点「取消」移去一个“珠”"),
								function (card, player, target) {
									var source = _status.event.source;
									return target != source && source.inRange(target);
								}
							)
							.set("source", target)
							.set("ai", function (target) {
								return get.damageEffect(target, _status.event.source, _status.event.player);
							});
					} else event.finish();
					"step 6";
					if (result.bool && result.targets && result.targets.length) {
						player.line(result.targets[0]);
						result.targets[0].damage(target);
					} else {
						player.removeMark("lslixun", 1);
					}
				},
				ai: {
					expose: 0.25,
				},
			},
			xpchijie: {
				audio: 2,
				trigger: {
					target: "useCardToAfter",
				},
				filter: function (event, player) {
					var evt = event.getParent();
					var targets = evt.targets.slice(evt.num + 1);
					return event.player != player && targets.length > 0;
				},
				usable: 1,
				prompt2: function (event, player) {
					var evt = event.getParent();
					var targets = evt.targets.slice(evt.num + 1);
					return "令" + get.translation(event.card) + "对" + get.translation(targets) + "无效";
				},
				check: function (event, player) {
					var evt = event.getParent();
					var targets = evt.targets.slice(evt.num + 1);
					var num = 0;
					for (var i = 0; i < targets.length; i++) {
						num += get.effect(targets[i], evt.card, evt.player, player);
					}
					return num < -1;
				},
				content: function () {
					var evt = trigger.getParent();
					evt.excluded.addArray(evt.targets);
				},
				group: "xpchijie2",
			},
			xpchijie2: {
				trigger: { global: "useCardAfter" },
				audio: "xpchijie",
				sourceSkill: "xpchijie",
				filter: function (event, player) {
					return (
						event.player != player &&
						event.targets.includes(player) &&
						event.cards.filterInD().length > 0 &&
						!game.hasPlayer2(function (current) {
							return (
								current.getHistory("damage", function (evt) {
									return evt.card == event.card;
								}).length > 0
							);
						})
					);
				},
				usable: 1,
				check: function (event, player) {
					return get.value(event.cards.filterInD(), player, "raw") > 0;
				},
				prompt2: function (event, player) {
					return "获得" + get.translation(event.cards.filterInD()) + "。";
				},
				content: function () {
					player.gain(trigger.cards.filterInD(), "log", "gain2");
				},
			},
			xpchijie4: {},
			yinju: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				filterTarget: lib.filter.notMe,
				skillAnimation: true,
				animationColor: "water",
				content: function () {
					player.awakenSkill("yinju");
					player.storage.yinju2 = target;
					player.addTempSkill("yinju2");
				},
				ai: {
					result: {
						order: 10,
						player: function (player, target) {
							if (
								player.countCards("hs", function (card) {
									return get.tag(card, "damage") && player.canUse(card, target);
								}) >= 1 &&
								target.hp <= 2
							)
								return 0.1;
							if (
								player.countCards("hes", function (card) {
									return player.canUse(card, target);
								}) <= 2
							)
								return -100;
							return 1;
						},
						target: function (player, target) {
							return target.isDamaged() ? 5 : 3;
						},
					},
				},
			},
			yinju2: {
				trigger: {
					player: "useCardToPlayered",
					source: "damageBefore",
				},
				forced: true,
				onremove: true,
				filter: function (event, player, name) {
					if (name == "useCardToPlayered") return event.target == player.storage.yinju2;
					return event.player == player.storage.yinju2;
				},
				logTarget: function (event) {
					return event[event.name == "damage" ? "player" : "target"];
				},
				content: function () {
					"step 0";
					if (trigger.name == "damage") {
						trigger.cancel();
						trigger.player.recover(trigger.num);
						event.finish();
					} else {
						game.asyncDraw([player, trigger.target]);
					}
					"step 1";
					game.delayx();
				},
				ai: {
					effect: {
						player_use: function (card, player, target) {
							if (target != player.storage.yinju2) return;
							if (card.name == "lebu") return;
							return [1, 0.6, 1, 0.6];
						},
						player(card, player, target) {
							if (card.name !== "huogong" && get.tag(card, "damage") && target.isDamaged()) [1, 0, 0, 2];
						}
					},
				},
			},
			rewenji: {
				audio: "spwenji",
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("he");
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("rewenji"), function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 0) return Math.sqrt(att) / 10;
							return 5 - att;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("rewenji", target);
						target.chooseCard("he", true, "问计：将一张牌交给" + get.translation(player));
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.addTempSkill("rewenji_respond");
						player.storage.rewenji_respond = get.type2(result.cards[0], target);
						event.target.give(result.cards, player, true);
					}
				},
				subSkill: {
					respond: {
						onremove: true,
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						audio: "spwenji",
						filter: function (event, player) {
							return get.type2(event.card) == player.storage.rewenji_respond;
						},
						content: function () {
							trigger.directHit.addArray(
								game.filterPlayer(function (current) {
									return current != player;
								})
							);
						},
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return get.type2(arg.card) == player.storage.rewenji_respond;
							},
						},
					},
				},
			},
			spwenji: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("he");
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("spwenji"), function (card, player, target) {
							return target != player && target.countCards("he") > 0;
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 0) return Math.sqrt(att) / 10;
							return 5 - att;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("spwenji", target);
						target.chooseCard("he", true, "问计：将一张牌交给" + get.translation(player));
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.addTempSkill("spwenji_respond");
						player.storage.spwenji_respond = result.cards[0].name;
						event.target.give(result.cards, player, true);
					}
				},
				subSkill: {
					respond: {
						onremove: true,
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						audio: "spwenji",
						filter: function (event, player) {
							return event.card.name == player.storage.spwenji_respond;
						},
						content: function () {
							trigger.directHit.addArray(
								game.filterPlayer(function (current) {
									return current != player;
								})
							);
						},
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return arg.card.name == player.storage.spwenji_respond;
							},
						},
					},
				},
			},
			sptunjiang: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				filter: function (event, player) {
					//if(player.getHistory('skipped').includes('phaseUse')) return false;
					return (
						player.getHistory("useCard", function (evt) {
							if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
								var targets = evt.targets.slice(0);
								while (targets.includes(player)) targets.remove(player);
								return targets.length > 0;
							}
							return false;
						}).length == 0
					);
				},
				content: function () {
					player.draw(game.countGroup());
				},
			},
			bingzhao: {
				audio: 2,
				unique: true,
				zhuSkill: true,
				forced: true,
				locked: false,
				intro: {
					content: function (group) {
						return "已选择了" + get.translation(group) + "势力";
					},
				},
				trigger: { global: ["phaseBefore", "zhuUpdate"] },
				filter: function (event, player) {
					if (
						!lib.group.some(function (group) {
							if (group == player.group) return false;
							return (
								lib.group.includes(group) ||
								game.hasPlayer(function (current) {
									return current.group == group;
								})
							);
						})
					)
						return false;
					return (
						!player.storage.bingzhao &&
						player.hasZhuSkill("bingzhao") &&
						(event.name != "phase" || game.phaseNumber == 0)
					);
				},
				content: function () {
					"step 0";
					var list = lib.group.filter(function (group) {
						if (group == player.group) return false;
						return (
							lib.group.includes(group) ||
							game.hasPlayer(function (current) {
								return current.group == group;
							})
						);
					});
					player
						.chooseControl(list)
						.set("prompt", "秉诏：请选择一个其他势力")
						.set("ai", function () {
							var listx = list.slice(0);
							listx.sort(function (a, b) {
								return (
									game.countPlayer(function (current) {
										return current != player && current.group == b;
									}) -
									game.countPlayer(function (current) {
										return current != player && current.group == a;
									})
								);
							});
							return listx[0];
						});
					"step 1";
					var group = result.control;
					player.popup(get.translation(group) + "势力", get.groupnature(group, "raw"));
					game.log(player, "选择了", "#y" + get.translation(group) + "势力");
					player.storage.bingzhao = group;
					player.markSkill("bingzhao");
				},
				ai: {
					combo: "guju"
				},
			},
			baijia: {
				audio: 2,
				audioname: ["tw_beimihu"],
				unique: true,
				derivation: "bmcanshi",
				juexingji: true,
				ai: {
					combo: "guju",
				},
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return player.hasSkill("guju") && player.storage.guju >= 7;
				},
				content: function () {
					player.awakenSkill("baijia");
					player.gainMaxHp();
					player.recover();
					var list = game.filterPlayer();
					for (var i = 0; i < list.length; i++) {
						if (list[i] != player && !list[i].hasMark("zongkui_mark")) {
							list[i].addMark("zongkui_mark", 1);
							player.line(list[i], "green");
						}
					}
					//player.removeSkill('guju');
					player.changeSkills(["bmcanshi"], ["guju"]);
				},
			},
			bmcanshi: {
				audio: 2,
				audioname: ["tw_beimihu"],
				group: ["bmcanshi_add", "bmcanshi_remove"],
				ai: {
					combo: "zongkui",
				},
				subSkill: {
					add: {
						audio: "bmcanshi",
						trigger: { player: "useCard2" },
						filter: function (event, player) {
							if (!event.targets || event.targets.length != 1) return false;
							var info = get.info(event.card);
							if (info.multitarget) return false;
							if (info.allowMultiple == false) return false;
							if (info.type == "equip") return false;
							if (info.type == "delay") return false;
							return game.hasPlayer(function (current) {
								if (!current.hasMark("zongkui_mark")) return false;
								return (
									!event.targets.includes(current) &&
									lib.filter.targetEnabled2(event.card, player, current)
								);
							});
						},
						direct: true,
						content: function () {
							"step 0";
							player
								.chooseTarget(
									get.prompt2("bmcanshi"),
									[1, Infinity],
									function (card, player, target) {
										if (!target.hasMark("zongkui_mark")) return false;
										var trigger = _status.event.getTrigger();
										return (
											!trigger.targets.includes(target) &&
											lib.filter.targetEnabled2(trigger.card, player, target)
										);
									}
								)
								.set("ai", function (target) {
									var player = _status.event.player;
									return get.effect(
										target,
										_status.event.getTrigger().card,
										player,
										player
									);
								});
							"step 1";
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayx();
								event.targets = result.targets.sortBySeat();
							} else {
								event.finish();
							}
							"step 2";
							player.logSkill("bmcanshi", event.targets);
							for (var i = 0; i < event.targets.length; i++) {
								event.targets[i].removeMark("zongkui_mark", 1);
							}
							trigger.targets.addArray(event.targets);
						},
					},
					remove: {
						audio: "bmcanshi",
						trigger: {
							target: "useCardToTarget",
						},
						check: function (event, player) {
							return (
								get.attitude(event.player, player) < 0 &&
								get.effect(player, event.card, event.player, player) < 0
							);
						},
						logTarget: "player",
						filter: function (event, player) {
							if (!["basic", "trick"].includes(get.type(event.card))) return false;
							if (!event.targets || event.targets.length != 1) return false;
							return event.player.hasMark("zongkui_mark");
						},
						content: function () {
							trigger.targets.remove(player);
							trigger.getParent().triggeredTargets2.remove(player);
							game.delay();
							trigger.player.removeMark("zongkui_mark");
						},
					},
				},
			},
			guju: {
				audio: 2,
				audioname: ["tw_beimihu"],
				init: function (player) {
					if (!player.storage.guju) player.storage.guju = 0;
				},
				intro: {
					content: "已因此技能得到#张牌",
				},
				trigger: { global: "damageEnd" },
				forced: true,
				filter: function (event, player) {
					return (
						event.player != player && event.player.isIn() && event.player.hasMark("zongkui_mark")
					);
				},
				content: function () {
					"step 0";
					player.draw();
					player.storage.guju++;
					player.markSkill("guju");
					"step 1";
					if (
						player.hasZhuSkill("bingzhao", trigger.player) &&
						trigger.player.group == player.storage.bingzhao &&
						trigger.player.isIn()
					) {
						trigger.player.chooseBool("是否对" + get.translation(player) + "发动【秉诏】？").ai =
							function () {
								return get.attitude(trigger.player, player) > 1;
							};
					} else event.finish();
					"step 2";
					if (result.bool) {
						trigger.player.logSkill("bingzhao", player);
						player.draw();
						player.storage.guju++;
						player.markSkill("guju");
					}
				},
				ai: {
					combo: "zongkui",
				},
			},
			zongkui: {
				trigger: {
					player: "phaseBeforeEnd",
					global: "roundStart",
				},
				direct: true,
				audio: 2,
				audioname: ["tw_beimihu"],
				filter: function (event, player, name) {
					return game.hasPlayer(function (current) {
						if (name == "roundStart" && !current.isMinHp()) return false;
						return current != player && !current.hasMark("zongkui_mark");
					});
				},
				content: function () {
					"step 0";
					var targets = game.filterPlayer(function (current) {
						if (event.triggername == "roundStart" && !current.isMinHp()) return false;
						return current != player && !current.hasMark("zongkui_mark");
					});
					if (event.triggername == "roundStart" && targets.length == 1) {
						event._result = { bool: true, targets: targets };
					} else {
						var next = player
							.chooseTarget(
								get.prompt("zongkui"),
								"令一名" +
									(event.triggername == "roundStart" ? "体力值最小的" : "") +
									"其他角色获得“傀”标记",
								function (card, player, target) {
									if (_status.event.round && !target.isMinHp()) return false;
									return target != player && !target.hasMark("zongkui_mark");
								}
							)
							.set("ai", function (target) {
								var num = target.isMinHp() ? 0.5 : 1;
								return num * get.threaten(target);
							})
							.set("round", event.triggername == "roundStart");
						if (event.triggername == "roundStart") next.set("forced", true);
					}
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zongkui", target);
						target.addMark("zongkui_mark", 1);
						game.delayx();
					}
				},
				subSkill: {
					mark: {
						marktext: "傀",
						intro: {
							name2: "傀",
							content: "mark",
						},
					},
				},
				ai: {
					combo: "guju",
					threaten: 1.4,
				},
			},
			xinfu_langxi: {
				audio: 2,
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.hp <= player.hp;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("xinfu_langxi"),
							"对一名体力值不大于你的其他角色造成0-2点随机伤害",
							function (card, player, target) {
								return target.hp <= player.hp && target != player;
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					"step 1";
					if (result.bool && result.targets && result.targets.length) {
						player.logSkill("xinfu_langxi", result.targets);
						var num = [1, 2, 0].randomGet();
						if (get.isLuckyStar(player)) num = 2;
						player.line(result.targets[0], "green");
						result.targets[0].damage(num);
					}
				},
				ai: {
					expose: 0.25,
					threaten: 1.7,
				},
			},
			xinfu_yisuan: {
				usable: 1,
				audio: 2,
				trigger: {
					player: "useCardEnd",
				},
				check: function (event, player) {
					return get.value(event.cards) + player.maxHp * 2 - 18 > 0;
				},
				prompt2: function (event, player) {
					return "你可以减1点体力上限，然后获得" + get.translation(event.cards.filterInD()) + "。";
				},
				filter: function (event, player) {
					return (
						player.isPhaseUsing() &&
						get.type(event.card) == "trick" &&
						event.cards.filterInD().length > 0
					);
				},
				content: function () {
					player.loseMaxHp();
					player.gain(trigger.cards.filterInD(), "gain2", "log");
				},
			},
			xinfu_xingluan: {
				usable: 1,
				audio: 2,
				trigger: {
					player: "useCardAfter",
				},
				filter: function (event, player) {
					if (!player.isPhaseUsing()) return false;
					if (get.type(event.card) == undefined) return false;
					return event.targets && event.targets.length == 1;
				},
				content: function () {
					var card = get.cardPile2(function (card) {
						return card.number == 6;
					});
					if (!card) {
						player.chat("无牌可得了吗");
						game.log("但是牌堆里面已经没有点数为6的牌了！");
						event.finish();
						return;
					}
					player.gain(card, "gain2");
				},
			},
			xinfu_lveming: {
				init: function (player) {
					player.storage.xinfu_lveming = 0;
				},
				mark: true,
				intro: {
					content: "已发动过#次",
				},
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target && target.countCards("e") < player.countCards("e");
				},
				content: function () {
					"step 0";
					var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
					target
						.chooseControl(list)
						.set("ai", function () {
							return get.rand(0, 12);
						})
						.set("prompt", "请选择一个点数");
					"step 1";
					if (result.control) {
						target.$damagepop(result.control, "thunder");
						var num = result.index + 1;
						event.num = num;
					} else {
						target.$damagepop("K", "thunder");
						event.num = 13;
					}
					game.log(target, "选择的点数是", "#y" + get.strNumber(event.num));
					player.storage.xinfu_lveming++;
					player.judge(function (card) {
						if (card.number == _status.event.getParent("xinfu_lveming").num) return 4;
						return 0;
					});
					"step 2";
					if (result.bool == true) {
						target.damage(2);
					} else {
						var card = target.getCards("hej").randomGet();
						player.gain(card, target, "giveAuto", "bySelf");
					}
				},
				ai: {
					order: 9,
					result: {
						player(player, target) {
							if (target.countCards("hej")) return 0.92;
							return 0;
						},
						target(player, target) {
							var numj = target.countCards("j");
							var numhe = target.countCards("he");
							if (numhe + numj > 0) return (1.6 * numj - numhe) / (numj + numhe) - 0.3;
							return -0.3;
						},
					},
					threaten: 1.1,
				},
			},
			xinfu_tunjun: {
				skillAnimation: true,
				animationColor: "metal",
				limited: true,
				unique: true,
				enable: "phaseUse",
				audio: 2,
				filter: function (event, player) {
					if (player.storage.xinfu_tunjun) return false;
					return player.storage.xinfu_lveming && player.storage.xinfu_lveming > 0;
				},
				filterTarget: true,
				selectTarget: 1,
				content: function () {
					"step 0";
					player.awakenSkill("xinfu_tunjun");
					event.num = player.storage.xinfu_lveming;
					event.toequip = [];
					"step 1";
					var equip = get.cardPile(function (card) {
						var bool1 = true;
						for (var i = 0; i < event.toequip.length; i++) {
							if (
								get.type(card) == "equip" &&
								get.subtype(card) == get.subtype(event.toequip[i])
							)
								bool1 = false;
						}
						return (
							get.type(card) == "equip" &&
							!event.toequip.includes(card) &&
							target.hasEmptySlot(card) &&
							bool1
						);
					});
					if (equip) event.toequip.push(equip);
					else event.num = 0;
					event.num--;
					"step 2";
					if (event.num > 0) event.goto(1);
					"step 3";
					for (var i = 0; i < event.toequip.length; i++) {
						target
							.chooseUseTarget(event.toequip[i], true)
							.set("animate", false)
							.set("nopopup", true);
					}
				},
				ai: {
					combo: "xinfu_lveming",
					order: function () {
						var player = _status.event.player,
							num = 0;
						for (var i = 1; i < 6; i++) {
							num += player.countEquipableSlot(i);
						}
						if (num <= 2) return 6;
						if (
							player.hp <= 2 ||
							!game.hasPlayer((current) => {
								if (player == current || get.attitude(player, current) < 0 || current.hp <= 1)
									return false;
								return current.hp > 2 || current.countCards("hs") > 2;
							})
						)
							return 1;
						return 0;
					},
					result: {
						target: function (player, target) {
							var num = 0;
							for (var i = 1; i < 6; i++) {
								num += target.countEquipableSlot(i);
							}
							return num;
						},
					},
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player) {
					player.storage.xinfu_tunjun = false;
				},
			},
			xinfu_tanbei: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					"step 0";
					if (target.countCards("hej") == 0) {
						event._result = { index: 1 };
					} else {
						target
							.chooseControl()
							.set("choiceList", [
								"令" +
									get.translation(player) +
									"随机获得你区域内的一张牌，然后其本回合内不能再对你使用牌。",
								"令" + get.translation(player) + "本回合内对你使用牌没有次数与距离限制。",
							])
							.set("ai", function () {
								var list = [0, 1];
								return list.randomGet();
							});
					}
					"step 1";
					player.addTempSkill("tanbei_effect3");
					if (result.index == 0) {
						var card = target.getCards("hej").randomGet();
						player.gain(card, target, "giveAuto", "bySelf");
						target.addTempSkill("tanbei_effect2");
					} else {
						target.addTempSkill("tanbei_effect1");
					}
				},
				ai: {
					order: function () {
						return [2, 4, 6, 8, 10].randomGet();
					},
					result: {
						target: function (player, target) {
							return -2 - target.countCards("h");
						},
					},
					threaten: 1.1,
				},
			},
			tanbei_effect3: {
				charlotte: true,
				mod: {
					targetInRange: function (card, player, target) {
						if (target.hasSkill("tanbei_effect1")) {
							return true;
						}
					},
					cardUsableTarget: function (card, player, target) {
						if (target.hasSkill("tanbei_effect1")) return true;
					},
					playerEnabled: function (card, player, target) {
						if (target.hasSkill("tanbei_effect2")) return false;
					},
				},
			},
			xinfu_sidao: {
				audio: 2,
				trigger: {
					player: "useCardAfter",
				},
				filter: function (event, player) {
					if (player.hasSkill("xinfu_sidaoy") || !player.countCards("hs")) return false;
					if (!event.targets || !event.targets.length || !event.isPhaseUsing(player)) return false;
					var history = player.getHistory("useCard");
					var index = history.indexOf(event) - 1;
					if (index < 0) return false;
					var evt = history[index];
					if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player))
						return false;
					for (var i = 0; i < event.targets.length; i++) {
						if (
							evt.targets.includes(event.targets[i]) &&
							lib.filter.filterTarget({ name: "shunshou" }, player, event.targets[i])
						)
							return true;
					}
					return false;
				},
				direct: true,
				content: function () {
					var targets = player.getLastUsed(1).targets;
					var next = player.chooseToUse();
					next.set(
						"targets",
						game.filterPlayer(function (current) {
							return targets.includes(current) && trigger.targets.includes(current);
						})
					);
					next.set("openskilldialog", get.prompt2("xinfu_sidao"));
					next.set("norestore", true);
					next.set("_backupevent", "xinfu_sidaox");
					next.set("custom", {
						add: {},
						replace: { window: function () {} },
					});
					next.backup("xinfu_sidaox");
				},
			},
			xinfu_sidaox: {
				audio: "xinfu_sidao",
				sourceSkill: "xinfu_sidao",
				filterCard: function (card) {
					return get.itemtype(card) == "card";
				},
				position: "hs",
				viewAs: {
					name: "shunshou",
				},
				filterTarget: function (card, player, target) {
					return (
						_status.event.targets &&
						_status.event.targets.includes(target) &&
						lib.filter.filterTarget.apply(this, arguments)
					);
				},
				prompt: "将一张手牌当顺手牵羊使用",
				check: function (card) {
					return 7 - get.value(card);
				},
				onuse: function (links, player) {
					player.addTempSkill("xinfu_sidaoy");
				},
			},
			xinfu_sidaoy: {},
			tanbei_effect1: {
				charlotte: true,
			},
			tanbei_effect2: {
				charlotte: true,
			},
			xinfu_tunan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					"step 0";
					event.cards = get.cards(1);
					player.showCards(
						get.translation(player) + "对" + get.translation(target) + "发动了【图南】",
						event.cards
					);
					"step 1";
					var card = cards[0];
					var bool1 = game.hasPlayer(function (current) {
						return target.canUse(card, current, false);
					});
					var bool2 = game.hasPlayer(function (current) {
						return target.canUse({ name: "sha" }, current);
					});
					if (bool1 && bool2) {
						target
							.chooseControl(function () {
								return 0;
							})
							.set("choiceList", [
								"使用" + get.translation(cards) + "。（没有距离限制）",
								"将" + get.translation(cards) + "当做【杀】使用。",
							])
							.set("ai", function () {
								return _status.event.choice;
							})
							.set(
								"choice",
								target.getUseValue(card, false) >
									target.getUseValue({ name: "sha", cards: cards })
									? 0
									: 1
							);
					} else if (bool1) {
						event.directindex = 0;
					} else if (bool2) {
						event.directindex = 1;
					} else {
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						event.finish();
					}
					"step 2";
					var card = cards[0];
					if (result && typeof event.directindex != "number") {
						event.directindex = result.index;
					}
					if (event.directindex == 1) {
						target.chooseUseTarget({ name: "sha" }, cards, true, false).viewAs = false;
					} else {
						target.chooseUseTarget(card, true, false, "nodistance");
					}
				},
				ai: {
					order: 7,
					result: {
						target: 1,
					},
				},
			},
			xinfu_bijing: {
				audio: 2,
				subSkill: {
					lose: {
						trigger: {
							global: "phaseDiscardBegin",
						},
						audio: "xinfu_bijing",
						charlotte: true,
						filter: function (event, player) {
							if (event.player == player) return false;
							return (
								player.getHistory("lose", function (evt) {
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes("xinfu_bijing")) return true;
									}
								}).length > 0 && event.player.countCards("he") > 0
							);
						},
						forced: true,
						logTarget: "player",
						content: function () {
							trigger.player.chooseToDiscard(2, true, "he");
						},
						sub: true,
					},
					discard: {
						trigger: {
							player: "phaseZhunbeiBegin",
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return player.hasCard(
								(card) => card.hasGaintag("xinfu_bijing") && player.canRecast(card),
								"h"
							);
						},
						content: function () {
							player.recast(
								player.getCards(
									"h",
									(card) => card.hasGaintag("xinfu_bijing") && player.canRecast(card)
								)
							);
						},
						sub: true,
					},
				},
				trigger: {
					player: "phaseJieshuBegin",
				},
				direct: true,
				filter: function (player, event) {
					return event.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.chooseCard(get.prompt2("xinfu_bijing"), "h", [1, 2]).set("ai", function (card) {
						if (card.name == "shan") return 6;
						return 6 - get.value(card);
					});
					"step 1";
					if (result.bool) {
						player.logSkill("xinfu_bijing");
						player.addGaintag(result.cards, "xinfu_bijing");
						player.addSkill("xinfu_bijing_lose");
						player.addSkill("xinfu_bijing_discard");
					}
				},
			},
			xinfu_zhenxing: {
				audio: 2,
				trigger: {
					player: ["damageEnd", "phaseJieshuBegin"],
				},
				async cost(event, trigger, player) {
					const result = await player
						.chooseControl("一张", "两张", "三张", "cancel2")
						.set("prompt", get.prompt2("xinfu_zhenxing"))
						.set("ai", function () {
							return 0;
						}).forResult();
					event.result = {
						bool: result.control !== "cancel2",
						cost_data: result.index + 1
					};
				},
				async content(event, trigger, player) {
					const cards = get.cards(event.cost_data);
					await game.cardsGotoOrdering(cards);
					let result = await player
						.chooseButton(["【镇行】：请选择要获得的牌", cards])
						.set("filterButton", function (button) {
							var cards = _status.event.cards;
							for (var i = 0; i < cards.length; i++) {
								if (button.link != cards[i] && get.suit(cards[i]) == get.suit(button.link))
									return false;
							}
							return true;
						})
						.set("ai", function (button) {
							return get.value(button.link);
						})
						.set("cards", cards)
						.forResult();
					if (result.bool) player.gain(result.links, "gain2");
				},
			},
			xinfu_qianxin: {
				audio: 2,
				group: ["xinfu_qianxin2"],
				enable: "phaseUse",
				usable: 1,
				onChooseToUse: function (event) {
					if (!game.online) {
						var num1 = game.players.length - 1;
						var player = event.player;
						var num2 = ui.cardPile.childElementCount;
						var num3 = num2;
						if (num1 > num2) num3 = 0;
						else if (player.storage.xinfu_qianxin) {
							for (var i = 0; i < num2; i++) {
								if (player.storage.xinfu_qianxin.includes(ui.cardPile.childNodes[i])) {
									num3 = 0;
									break;
								}
							}
						}
						event.set("qianxinNum", num3);
					}
				},
				filter: function (event, player) {
					return event.qianxinNum && event.qianxinNum > 0;
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				filterCard: true,
				selectCard: function () {
					var num1 = game.players.length - 1;
					var num2 = _status.event.qianxinNum;
					return [1, Math.floor(num2 / num1)];
				},
				discard: false,
				check: function () {
					return -1;
				},
				delay: false,
				lose: false,
				prompt: function () {
					return (
						"选择一名角色并将任意张手牌放置于牌堆中" +
						get.cnNumber(game.players.length) +
						"倍数的位置（先选择的牌在上）"
					);
				},
				content: function () {
					"step 0";
					player.$throw(cards.length);
					player.storage.xinfu_qianxin = cards.slice(0);
					player.storage.xinfu_qianxin2 = target;
					//cards.reverse();
					player.lose(cards, ui.cardPile).insert_index = function (event, card) {
						var num1 = game.players.length,
							i = event.cards.indexOf(card);
						var num3 = num1 * (i + 1) - 1;
						return ui.cardPile.childNodes[num3];
					};
					"step 1";
					game.updateRoundNumber();
					game.log(player, "把", get.cnNumber(cards.length), "张牌放在了牌堆里");
					game.delayx();
				},
				ai: {
					order: 1,
					result: {
						target: -1,
					},
				},
			},
			xinfu_qianxin2: {
				subSkill: {
					dis: {
						mod: {
							maxHandcard: function (player, num) {
								return num - 2;
							},
						},
						sub: true,
					},
				},
				forced: true,
				locked: false,
				audio: "xinfu_qianxin",
				logTarget: "player",
				sourceSkill: "xinfu_qianxin",
				trigger: {
					global: "phaseDiscardBegin",
				},
				filter: function (event, player) {
					if (player.storage.xinfu_qianxin2 != event.player) return false;
					if (!player.storage.xinfu_qianxin) return false;
					var hs = event.player.getCards("h");
					var cs = player.storage.xinfu_qianxin;
					var bool = false;
					var history = event.player.getHistory("gain");
					for (var i = 0; i < history.length; i++) {
						for (var j = 0; j < history[i].cards.length; j++) {
							var card = history[i].cards[j];
							if (hs.includes(card) && cs.includes(card)) return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					delete player.storage.xinfu_qianxin2;
					if (player.countCards("h") >= 4) {
						event._result = { index: 1 };
					} else {
						trigger.player
							.chooseControl()
							.set("choiceList", [
								"令" + get.translation(player) + "将手牌摸至四张",
								"令自己本回合的手牌上限-2",
							])
							.set("ai", function () {
								var player = _status.event.player;
								var source = _status.event.getParent().player;
								if (get.attitude(player, source) > 0) return 0;
								if (player.hp - player.countCards("h") > 1) return 1;
								return [0, 1].randomGet();
							});
					}
					"step 1";
					if (result.index == 0) {
						player.drawTo(4);
					} else {
						trigger.player.addTempSkill("xinfu_qianxin2_dis");
					}
				},
			},
			xinfu_fuhai: {
				subSkill: {
					next: {},
					previous: {},
				},
				audio: 2,
				group: ["fuhai_clear"],
				intro: {
					content: "已指定过#个目标",
				},
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasSkill("xinfu_fuhai_next") && player.hasSkill("xinfu_fuhai_previous"))
						return false;
					return player.countCards("h") > 0;
				},
				filterTarget: function (card, player, target) {
					if (![player.next, player.previous].includes(target) || target.countCards("h") == 0)
						return false;
					if (player.hasSkill("xinfu_fuhai_next")) return target == player.previous;
					if (player.hasSkill("xinfu_fuhai_previous")) return target == player.next;
					return true;
				},
				line: false,
				content: function () {
					"step 0";
					event.side = target == player.next ? "next" : "previous";
					event.current = target;
					if (!player.storage.xinfu_fuhai) player.storage.xinfu_fuhai = 1;
					player.addTempSkill("xinfu_fuhai_" + event.side, "phaseUseAfter");
					"step 1";
					if (
						player.countCards("h") == 0 ||
						event.current.countCards("h") == 0 ||
						event.current == player
					) {
						event.finish();
						return;
					}
					var next = event.current[event.side];
					if (get.attitude(event.current, player) > 0) {
						if (
							get.attitude(next, target) <= 0 ||
							next.countCards("h") == 0 ||
							player.countCards("h") == 1
						) {
							event.stopm = true;
							event.stopt = true;
						} else {
							event.stopm = false;
							event.stopt = false;
						}
					} else {
						if (get.attitude(next, target) >= 0) {
							event.stopt = true;
							event.stopm = false;
						} else {
							event.stopt = false;
							event.stopm = false;
						}
					}
					player.markSkill("xinfu_fuhai");
					player.line(event.current, "green");
					player
						.chooseCard("请选择要展示的牌", true)
						.set("ai", function (card) {
							if (_status.event.stop) return 14 - get.number(card);
							return get.number(card);
						})
						.set("stop", event.stopm);
					"step 2";
					event.mes = result.cards[0];
					player.showCards(event.mes);
					"step 3";
					event.current
						.chooseCard("请选择要展示的牌", true)
						.set("ai", function (card) {
							if (_status.event.stop) return get.number(card);
							return 14 - get.number(card);
						})
						.set("stop", event.stopt);
					"step 4";
					event.tes = result.cards[0];
					event.current.showCards(event.tes);
					"step 5";
					var num1 = get.number(event.mes);
					var num2 = get.number(event.tes);
					if (num1 < num2) {
						event.current.discard(event.tes);
						game.asyncDraw([player, event.current], player.storage.xinfu_fuhai);
						player.addTempSkill("xinfu_fuhai_next", "phaseUseAfter");
						player.addTempSkill("xinfu_fuhai_previous", "phaseUseAfter");
						player.unmarkSkill("xinfu_fuhai");
					} else {
						player.discard(event.mes);
						player.storage.xinfu_fuhai++;
						event.current = event.current[event.side];
						if (
							player.countCards("h") > 0 &&
							event.current.countCards("h") > 0 &&
							event.current != player
						)
							event.goto(1);
					}
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							var hs = player.countCards("h");
							var side = target == player.next ? "next" : "previous";
							var current = player;
							for (var i = 0; i < hs; i++) {
								current = current[side];
								if (current == player || !current.countCards("h")) return 0;
								if (get.attitude(current, player) > 0) return 1;
							}
							return 0;
						},
					},
				},
			},
			fuhai_clear: {
				trigger: {
					player: "phaseAfter",
				},
				forced: true,
				silent: true,
				popup: false,
				sourceSkill: "xinfu_fuhai",
				filter: function (event, player) {
					return player.storage.xinfu_fuhai != undefined;
				},
				content: function () {
					player.unmarkSkill("xinfu_fuhai");
					delete player.storage.xinfu_fuhai;
				},
			},
			xz_xunxun: {
				filter: function (event, player) {
					var num = game.countPlayer(function (current) {
						return current.isDamaged();
					});
					return num >= 1 && !player.hasSkill("xunxun");
				},
				audio: 2,
				trigger: {
					player: "phaseDrawBegin1",
				},
				//priority:10,
				content: function () {
					"step 0";
					var cards = get.cards(4);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove("恂恂：将两张牌置于牌堆顶", true);
					next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
					next.set("filterMove", function (from, to, moved) {
						if (to == 1 && moved[1].length >= 2) return false;
						return true;
					});
					next.set("filterOk", function (moved) {
						return moved[1].length == 2;
					});
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b) - get.value(a);
						});
						return [cards, cards.splice(2)];
					});
					"step 1";
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					game.updateRoundNumber();
					game.delayx();
				},
			},
			xinfu_xingzhao: {
				audio: 2,
				group: ["xz_xunxun", "xinfu_xingzhao2", "xinfu_xingzhao3"],
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				filter: function (event, player) {
					if (
						game.countPlayer(function (current) {
							return current.isDamaged();
						}) < 2
					)
						return false;
					const evt = event.getl(player);
					if (event.name == "equip" && event.player == player) return true;
					return evt && evt.es.length;
				},
				getIndex(event, player) {
					const evt = event.getl(player);
					if (event.name == "equip" && event.player == player && evt && evt.es.length) return 2;
					return 1;
				},
				content: function () {
					player.draw();
				},
				derivation: "xz_xunxun",
				mark: true,
				intro: {
					content: function (storage, player) {
						var num = game.countPlayer(function (current) {
							return current.isDamaged();
						});
						var str = "<li>造成的伤害+1";
						if (num >= 1) {
							str = "<li>视为拥有技能“恂恂”";
						}
						if (num >= 2) {
							str += "<br><li>装备牌进入或离开你的装备区时摸一张牌";
						}
						if (num >= 3) {
							str += "<br><li>始终跳过弃牌阶段";
						}
						if (num >= 4) {
							str += "<br><li>造成的伤害+1";
						}
						return str;
					},
				},
			},
			xinfu_xingzhao2: {
				audio: "xinfu_xingzhao",
				sourceSkill: "xinfu_xingzhao",
				trigger: {
					player: ["phaseJudgeBefore", "phaseDiscardBefore"],
				},
				forced: true,
				filter: function (event, player) {
					var num = game.countPlayer(function (current) {
						return current.isDamaged();
					});
					return num >= 3;
				},
				content: function () {
					trigger.cancel();
					game.log(player, "跳过了" + (trigger.name == "phaseJudge" ? "判定" : "弃牌") + "阶段");
				},
			},
			xinfu_xingzhao3: {
				audio: "xinfu_xingzhao",
				sourceSkill: "xinfu_xingzhao",
				trigger: {
					source: "damageBegin1",
				},
				forced: true,
				filter: function (event, player) {
					var num = game.countPlayer(function (current) {
						return current.isDamaged();
					});
					return num == 0 || num >= 4;
				},
				content: function () {
					trigger.num++;
				},
			},
			xinfu_dianhu: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				filter: function (event, player) {
					return (
						game.hasPlayer((current) => current != player) &&
						(event.name != "phase" || game.phaseNumber == 0)
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							"选择【点虎】的目标",
							lib.translate.xinfu_dianhu_info,
							true,
							function (card, player, target) {
								return target != player && !target.hasSkill("xinfu_dianhu2");
							}
						)
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att < 0) return -att + 3;
							return Math.random();
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						game.log(target, "成为了", "【点虎】", "的目标");
						if (get.mode() != "identity" || player.identity != "nei") player.addExpose(0.25);
						target.storage.xinfu_dianhu2 = player;
						target.addTempSkill("xinfu_dianhu2", { player: "die" });
					}
				},
			},
			xinfu_dianhu2: {
				mark: "character",
				intro: {
					content: "当你受到来自$的伤害或回复体力后，$摸一张牌",
				},
				nopop: true,
				trigger: {
					player: ["damageEnd", "recoverEnd"],
				},
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "xinfu_dianhu",
				filter: function (event, player) {
					if (player.storage.xinfu_dianhu2 && player.storage.xinfu_dianhu2.isIn()) {
						if (event.name == "damage") return event.source == player.storage.xinfu_dianhu2;
						return true;
					}
				},
				content: function () {
					"step 0";
					var target = player.storage.xinfu_dianhu2;
					target.logSkill("xinfu_dianhu");
					target.draw();
				},
				onremove: true,
			},
			xinfu_jianji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				content: function () {
					"step 0";
					target.draw();
					"step 1";
					var card = result[0];
					if (
						card &&
						game.hasPlayer(function (current) {
							return target.canUse(card, current);
						}) &&
						get.owner(card) == target
					) {
						target.chooseToUse({
							prompt: "是否使用" + get.translation(card) + "？",
							filterCard: function (cardx, player, target) {
								return cardx == _status.event.cardx;
							},
							cardx: card,
						});
					}
				},
				ai: {
					order: 7.5,
					result: {
						target: 1,
					},
				},
			},
			xinfu_lianpian: {
				audio: 2,
				usable: 3,
				trigger: {
					player: "useCardToPlayered",
				},
				frequent: true,
				filter: function (event, player) {
					if (
						!event.targets ||
						!event.targets.length ||
						event.getParent().triggeredTargets3.length > 1 ||
						!event.isPhaseUsing(player)
					)
						return false;
					var evt = player.getLastUsed(1);
					if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player))
						return false;
					for (var i = 0; i < event.targets.length; i++) {
						if (evt.targets.includes(event.targets[i])) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					event.card = result[0];
					var ablers = player.getLastUsed(1).targets.slice(0);
					for (var i = 0; i < ablers.length; i++) {
						if (ablers[i] == player || !trigger.targets.includes(ablers[i]))
							ablers.splice(i--, 1);
					}
					if (event.card && get.owner(event.card) == player && ablers.length) {
						player
							.chooseTarget(
								"是否将" + get.translation(event.card) + "交给其他角色？",
								function (card, player, target) {
									return _status.event.ablers.includes(target) && target != player;
								}
							)
							.set("ablers", ablers).ai = function () {
							return false;
						};
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.give(event.card, result.targets[0], true);
					}
				},
				locked: false,
				mod: {
					aiOrder: function (player, card, num) {
						if (
							player.isPhaseUsing() &&
							(!player.storage.counttrigger ||
								!player.storage.counttrigger.xinfu_lianpian ||
								!player.storage.counttrigger.xinfu_lianpian < 3)
						) {
							var evt = player.getLastUsed();
							if (
								evt &&
								evt.targets &&
								evt.targets.length &&
								evt.isPhaseUsing(player) &&
								game.hasPlayer(function (current) {
									return (
										evt.targets.includes(current) &&
										player.canUse(card, current) &&
										get.effect(current, card, player, player) > 0
									);
								})
							) {
								return num + 10;
							}
						}
					},
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							var evt = player.getLastUsed();
							if (
								evt &&
								evt.targets.includes(target) &&
								(!player.storage.counttrigger ||
									!player.storage.counttrigger.xinfu_lianpian ||
									!player.storage.counttrigger.xinfu_lianpian < 3) &&
								player.isPhaseUsing(player)
							)
								return [1.5, 0];
						},
					},
				},
			},
			//糜芳傅士仁
			fengshi: {
				audio: "mffengshi",
				audioname: ["sp_mifangfushiren"],
				trigger: { player: "useCardToPlayered" },
				filter(event, player) {
					if (!event.isFirstTarget) return false;
					return event.targets.some((target) => {
						return (
							player.countCards("h") > target.countCards("h") &&
							target.countCards("he") > 0 &&
							player.hasCard((card) => {
								return lib.filter.cardDiscardable(card, player, "fengshi");
							}, "he")
						);
					});
				},
				direct: true,
				async content(event, trigger, player) {
					const {
						result: { bool, targets },
					} = await player
						.chooseTarget(
							get.prompt("fengshi"),
							"弃置你与一名目标角色的各一张牌，然后令" +
								get.translation(event.card) +
								"对其造成的伤害+1",
							(card, player, target) => {
								const targets = get.event().getTrigger().targets;
								if (!targets.includes(target)) return false;
								return (
									player.countCards("h") > target.countCards("h") &&
									target.countCards("he") > 0 &&
									player.hasCard((card) => {
										return lib.filter.cardDiscardable(card, player, "fengshi");
									}, "he")
								);
							}
						)
						.set("ai", (target) => {
							let trigger = get.event().getTrigger(), player = trigger.player;
							if (get.attitude(player, target) > 0) return 0;
							let eff = get.effect(player, { name: "guohe" }, player, get.event().player) + get.effect(target, { name: "guohe" }, player, get.event().player);
							if (get.tag(trigger.card, "damage")) eff += get.effect(target, trigger.card, trigger.player, get.event().player);
							return eff;
						});
					if (bool) {
						const target = targets[0];
						player.logSkill("fengshi", target);
						await player.chooseToDiscard("he", true);
						await player.discardPlayerCard(target, "he", true);
						if (get.tag(trigger.card, "damage")) {
							var id = target.playerid;
							var map = trigger.getParent().customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].extraDamage != "number") map[id].extraDamage = 0;
							map[id].extraDamage++;
						}
					}
				},
				group: "fengshi_target",
				subSkill: {
					target: {
						inherit: "dcmffengshi",
						trigger: { target: "useCardToTargeted" },
						filter(event, player) {
							if (event.player == event.target) return false;
							return (
								event.player.countCards("h") > player.countCards("h") &&
								event.player.countCards("he") > 0 &&
								player.hasCard((card) => {
									return lib.filter.cardDiscardable(card, player, "fengshi");
								}, "he")
							);
						},
						async content(event, trigger, player) {
							const target = trigger.player;
							await player.chooseToDiscard("he", true);
							await player.discardPlayerCard(target, "he", true);
							if (get.tag(trigger.card, "damage")) {
								var id = player.playerid;
								var map = trigger.getParent().customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != "number") map[id].extraDamage = 0;
								map[id].extraDamage++;
							}
						},
					},
				},
			},
			dcmffengshi: {
				audio: "mffengshi",
				audioname: ["sp_mifangfushiren"],
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				filter: function (event, player, name) {
					if (event.player == event.target || event.targets.length != 1) return false;
					return (
						event.player.countCards("h") > event.target.countCards("h") &&
						event.target.countCards("he") > 0 &&
						player.hasCard(function (card) {
							return lib.filter.cardDiscardable(card, player, "dcmffengshi");
						}, "he")
					);
				},
				logTarget: function (event, player) {
					return player == event.player ? event.target : event.player;
				},
				prompt2: function (event, player) {
					var target = lib.skill.dcmffengshi.logTarget(event, player);
					return (
						"弃置你与" +
						get.translation(target) +
						"的各一张牌，然后令" +
						get.translation(event.card) +
						"的伤害+1"
					);
				},
				check: function (event, player) {
					let viewer = get.event().player,
						user = event.player,
						target = event.target;
					if (get.attitude(player, target) > 0) return 0;
					let eff = get.effect(user, { name: "guohe" }, user, viewer) + get.effect(target, { name: "guohe" }, user, viewer);
					if (get.tag(event.card, "damage")) eff += get.damageEffect(target, event.card, player, viewer);
					return eff > 0;
				},
				content: function () {
					if (get.tag(trigger.card, "damage")) trigger.getParent().baseDamage++;
					var target = lib.skill.dcmffengshi.logTarget(trigger, player);
					player.chooseToDiscard("he", true);
					player.discardPlayerCard(target, "he", true);
				},
			},
			mffengshi: {
				audio: 2,
				audioname: ["sp_mifangfushiren"],
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				direct: true,
				preHidden: true,
				filter: function (event, player) {
					if (event.player == event.target || event.targets.length != 1) return false;
					if (player != event.player && !player.hasSkill("mffengshi")) return false;
					return (
						event.player.countCards("h") > event.target.countCards("h") &&
						event.target.countCards("he") > 0
					);
				},
				content: function () {
					"step 0";
					event.source = trigger.player;
					event.target = player == trigger.target ? trigger.player : trigger.target;
					var str;
					if (player == trigger.player) str = "弃置自己的和该角色";
					else str = "令其弃置其与你的";
					var next = trigger.player.chooseBool("是否对" + get.translation(trigger.target) + "发动【锋势】？", str + "的各一张牌，然后令" + get.translation(trigger.card) + "的伤害+1")
						.set("ai", () => get.event().bool)
						.set("bool", function () {
							if (get.attitude(trigger.player, player) > 0) return 0;
							let eff = get.effect(trigger.player, { name: "guohe" }, player, trigger.player) + get.effect(trigger.target, { name: "guohe" }, player, trigger.player);
							if (get.tag(trigger.card, "damage")) eff += get.damageEffect(trigger.target, trigger.card, trigger.player, trigger.player);
							return eff > 0;
						}());
					if (player == next.player) next.setHiddenSkill("mffengshi");
					"step 1";
					if (result.bool) {
						if (player == source) player.logSkill("mffengshi", target);
						else {
							player.logSkill("mffengshi");
							source.line(player, "green");
						}
						if (get.tag(trigger.card, "damage")) trigger.getParent().baseDamage++;
						player.chooseToDiscard("he", true);
					} else event.finish();
					"step 2";
					if (target.countDiscardableCards(player, "he") > 0)
						player.discardPlayerCard(target, "he", true);
				},
			},
		},
		dynamicTranslate: {
			mubing: function (player) {
				if (player.storage.mubing2)
					return "出牌阶段开始时，你可以亮出牌堆顶的四张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。然后你可将以此法得到的牌以任意方式交给其他角色。";
				return "出牌阶段开始时，你可以亮出牌堆顶的三张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。";
			},
			piaoping: function (player) {
				if (player.storage.piaoping)
					return '转换技，锁定技。当你使用一张牌时，阴：你摸X张牌。<span class="bluetext">阳：你弃置X张牌。</span>（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）';
				return '转换技，锁定技。当你使用一张牌时，<span class="bluetext">阴：你摸X张牌。</span>阳：你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）';
			},
			chuaili: function (player) {
				if (!player.hasSkill("piaoping", null, null, false))
					return "锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阳状态，则你将〖漂萍〗转换至阴状态；处于阴状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。";
				if (player.storage.piaoping)
					return '锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：<span class="bluetext">处于阳状态，则你将〖漂萍〗转换至阴状态；</span>处于阴状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。';
				return '锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阳状态，则你将〖漂萍〗转换至阴状态；<span class="bluetext">处于阴状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。</span>';
			},
			dcdouzhen: function (player) {
				var str = "锁定技。①转换技。你的回合内，";
				if (player.countMark("dcdouzhen") % 2)
					str +=
						'阴：当你使用非转化且对应的实体牌为一张黑色基本牌的【决斗】时，你获得目标角色各一张牌并获得1枚“☯”；<span class="bluetext">阳：当你使用或打出非转化且对应的实体牌为一张红色基本牌的【杀】时，你获得1枚“☯”。</span>②若你的“☯”数为：偶数，你的黑色基本牌均视为【决斗】；<span class="bluetext">奇数，你的红色基本牌均视为无次数限制的普【杀】。</span>';
				else
					str +=
						'<span class="bluetext">阴：当你使用非转化且对应的实体牌为一张黑色基本牌的【决斗】时，你获得目标角色各一张牌并获得1枚“☯”；</span>阳：当你使用或打出非转化且对应的实体牌为一张红色基本牌的【杀】时，你获得1枚“☯”。</span>②若你的“☯”数为：<span class="bluetext">偶数，你的黑色基本牌均视为【决斗】；</span>奇数，你的红色基本牌均视为无次数限制的普【杀】。';
				return str;
			},
		},
		translate: {
			lijue: "李傕",
			zhangji: "张济",
			fanchou: "樊稠",
			guosi: "郭汜",
			lvkai: "吕凯",
			zhanggong: "张恭",
			weiwenzhugezhi: "卫温诸葛直",
			sp_liuqi: "刘琦",
			xf_tangzi: "唐咨",
			gz_xf_huangquan: "黄权",
			xf_huangquan: "OL黄权",
			xf_huangquan_prefix: "OL",
			gz_xf_sufei: "苏飞",
			xf_sufei: "OL苏飞",
			xf_sufei_prefix: "OL",
			xinfu_langxi: "狼袭",
			xinfu_langxi_info: "准备阶段，你可以对一名体力小于或等于你的其他角色造成0～2点随机伤害。",
			xinfu_yisuan: "亦算",
			xinfu_yisuan_info:
				"每回合限一次。当你于出牌阶段内使用的锦囊牌结算结束后，你可以减1点体力上限并获得此牌对应的所有实体牌。",
			xinfu_xingluan: "兴乱",
			xinfu_xingluan_info:
				"每回合限一次。当你于出牌阶段内使用的仅指定一个目标的牌结算完成后，你可以从牌堆中随机获得一张点数为6的牌。",
			xinfu_lveming: "掠命",
			xinfu_lveming_info:
				"出牌阶段限一次，你可以选择一名装备区装备比你少的角色，令其选择一个点数，然后你进行判定：<br>若点数相同，你对其造成2点伤害；<br>若点数不同，则你随机获得其区域内的一张牌。",
			xinfu_tunjun: "屯军",
			xinfu_tunjun_info:
				"限定技，出牌阶段，你可以选择一名角色，令其随机使用牌堆中的X张装备牌。(X为你发动过“掠命”的次数)",
			xinfu_tanbei: "贪狈",
			xinfu_tanbei_info:
				"出牌阶段限一次，你可以令一名其他角色选择一项：1.令你随机获得其区域内的一张牌，本回合内你不能对其使用牌。2.令你此回合内对其使用牌没有次数与距离限制。",
			xinfu_sidao: "伺盗",
			xinfu_sidaox: "伺盗",
			xinfu_sidao_info:
				"出牌阶段限一次，当你对一名其他角色连续使用两张牌后，你可以将一张手牌当做【顺手牵羊】对其使用。",
			tanbei_effect1: "贪狈",
			tanbei_effect1_info: "",
			tanbei_effect2: "贪狈",
			tanbei_effect2_info: "",

			xinfu_tunan: "图南",
			xinfu_tunan_info:
				"出牌阶段限一次，你可以亮出牌堆顶的一张牌并选择一名其他角色，然后该角色选择一项：使用此牌（无距离限制）；或将此牌当普通【杀】使用。",
			xinfu_bijing: "闭境",
			xinfu_bijing_info:
				"结束阶段，你可以选择至多两张手牌并标记为“闭境”，然后你获得如下效果：1.其他角色的弃牌阶段开始时，若你于本回合内失去过“闭境”，其弃置两张牌；2.准备阶段，你重铸所有“闭境”牌。",
			xinfu_zhenxing: "镇行",
			xinfu_zhenxing_info:
				"结束阶段开始时或当你受到伤害后，你可以观看牌堆顶的至多三张牌，然后你获得其中与其余牌花色均不相同的一张牌。",
			xinfu_qianxin: "遣信",
			xinfu_qianxin_info:
				"出牌阶段限一次，若牌堆中没有“信”，你可以选择一名角色并将任意张手牌放置于牌堆中X倍数的位置（X为存活人数），称为“信”。该角色的弃牌阶段开始时，若其手牌区内有于本回合内获得过的“信”，其选择一项：令你将手牌摸至四张；本回合手牌上限-2。",
			qianxin_effect: "遣信",
			qianxin_effect_info: "",
			xinfu_qianxin2: "遣信",
			xinfu_qianxin2_info: "",

			xinfu_fuhai: "浮海",
			xinfu_fuhai_info:
				"出牌阶段每个方向限一次，你可以展示一张手牌并选择上家或下家。该角色展示一张手牌，若你展示的牌点数大于等于其展示的牌点数，你弃置你展示的牌，然后继续对其上家或下家重复此流程；若你展示的牌点数小于该展示角色牌的点数，则该角色弃置其展示的牌，然后你与其各摸X张牌（X为你此回合内发动此技能选择的角色数），且你此阶段内不能再发动〖浮海〗。",
			fuhai_clear: "浮海",
			fuhai_clear_info: "",

			xz_xunxun: "恂恂",
			xz_xunxun_info:
				"摸牌阶段，你可以观看牌堆顶的四张牌，然后将其中的两张牌置于牌堆顶，并将其余的牌以任意顺序置于牌堆底。",
			xinfu_xingzhao: "兴棹",
			xinfu_xingzhao_info: "锁定技。若场上已受伤的角色数：≥1，你视为拥有技能〖恂恂〗；X≥2，有装备牌进入或离开你的装备区时，你摸一张牌；X≥3，判定阶段或弃牌阶段开始时，你跳过此阶段；为0或≥4，当你造成伤害时，此伤害+1。",
			xinfu_xingzhao2: "兴棹",
			xinfu_xingzhao2_info: "",
			xinfu_xingzhao3: "兴棹",
			xinfu_dianhu: "点虎",
			xinfu_dianhu_info:
				"锁定技，游戏开始时，你选择一名其他角色。当其受到来自你的伤害后或回复体力后，你摸一张牌。",
			xinfu_dianhu2: "点虎",
			xinfu_dianhu2_info: "",
			xinfu_jianji: "谏计",
			xinfu_jianji_info: "出牌阶段限一次，你可以令一名其他角色摸一张牌。然后该角色可以使用此牌。",
			xinfu_lianpian: "联翩",
			xinfu_lianpian_info:
				"出牌阶段限三次。当你对一名角色连续使用牌时，你可以摸一张牌，然后可以将一张牌交给该角色。",
			spwenji: "问计",
			spwenji_info:
				"出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌名称相同的牌时不能被其他角色响应。",
			rewenji: "问计",
			rewenji_info:
				"出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌类型相同的牌时不能被其他角色响应。",
			sptunjiang: "屯江",
			sptunjiang_info:
				"结束阶段，若你未于本回合的出牌阶段内使用牌指定过其他角色为目标，则你可以摸X张牌（X为全场势力数）。",
			zongkui: "纵傀",
			zongkui_mark: "纵傀",
			zongkui_mark_bg: "傀",
			zongkui_info:
				"回合开始前，你可以指定一名未拥有“傀”标记的其他角色，令其获得一枚“傀”标记。一轮游戏开始时，你指定一名体力值最少且没有“傀”标记的其他角色，令其获得一枚“傀”标记。",
			guju: "骨疽",
			guju_info: "锁定技，拥有“傀”标记的角色受到伤害后，你摸一张牌。",
			baijia: "拜假",
			baijia_info:
				"觉醒技，准备阶段，若你因〖骨疽〗得到的牌不少于7张，则你增加1点体力上限，回复1点体力，然后令所有未拥有“傀”标记的其他角色获得“傀”标记，最后失去技能〖骨疽〗，并获得技能〖蚕食〗。",
			bmcanshi: "蚕食",
			bmcanshi_info:
				"一名角色使用基本牌或普通锦囊牌指定你为唯一目标时，若其有“傀”标记，你可以取消之，然后其失去“傀”标记；你使用牌仅指定一名角色为目标时，你可以额外指定任意名带有“傀”标记的角色为目标（无距离限制），然后这些角色失去“傀”标记。",

			xinpi: "辛毗",
			lisu: "李肃",
			zhangwen: "张温",
			xushao: "许劭",
			mangyachang: "忙牙长",
			xugong: "许贡",
			zhangchangpu: "张昌蒲",
			pingjian: "评荐",
			pingjian_use: "评荐",
			pingjian_info:
				"结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以令系统随机检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌。然后你可以选择尝试发动其中一个技能。每个技能每局游戏只能选择一次。",

			songshu: "颂蜀",
			songshu_info:
				"出牌阶段，你可以和其他角色拼点。若你没赢，你与其各摸两张牌，且你本阶段内不能再发动〖颂蜀〗。",
			sibian: "思辩",
			sibian_info:
				"摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的四张牌，然后获得其中所有点数最大与点数最小的牌，且可以将剩余的牌交给手牌数最少的角色。",
			lslixun: "利熏",
			lslixun_fate: "利熏",
			lslixun_info:
				"锁定技，当你受到伤害时，你防止此伤害，然后获得等同于伤害值的“珠”标记。出牌阶段开始时，你进行判定，若结果点数小于“珠”的数量，你弃置等同于“珠”数量的手牌（若弃牌的牌数不够，则失去剩余数量的体力值）。",
			lskuizhu: "馈珠",
			lskuizhu_info:
				"出牌阶段结束时，你可以选择体力值为全场最多的一名其他角色，将手牌摸至与该角色相同（最多摸至五张），然后该角色观看你的手牌，弃置任意张手牌并从观看的牌中获得等量的牌。若其得到的牌大于一张，则你选择一项：移去一个“珠”；或令其对其攻击范围内的一名角色造成1点伤害。",
			xpchijie: "持节",
			xpchijie_info:
				"每回合每项各限一次。1.当其他角色使用的牌对你结算结束后，你可以令此牌对所有后续目标无效。2.其他角色使用的牌结算完成时，若你是此牌的目标之一且此牌未造成过伤害，则你可以获得此牌对应的所有实体牌。",
			xpchijie2: "持节",
			yinju: "引裾",
			yinju_info: "限定技，出牌阶段，你可以选择一名其他角色。若如此做，直到回合结束：1.当你使用牌指定其为目标后，你与其各摸一张牌；2.当你即将对其造成伤害时，防止此伤害，然后其回复等量的体力。",
			yinju2: "引裾",

			spjiedao: "截刀",
			spjiedao_info:
				"当你每回合第一次造成伤害时，你可令此伤害至多+X（X为你损失的体力值）。然后若受到此伤害的角色没有死亡，你弃置等同于此伤害加值的牌。",
			biaozhao: "表召",
			biaozhao_info:
				"结束阶段，你可以将一张牌置于武将牌上，称为“表”。当有一张与“表”花色点数均相同的牌进入弃牌堆后，你将“表”置入弃牌堆并失去1点体力，若此牌是其他角色因弃置而进入弃牌堆的，则改为该角色获得“表”。准备阶段，若你的武将牌上有“表”，则你将“表”置入弃牌堆。然后你选择一名角色，该角色回复1点体力且将手牌摸至与全场手牌数最多的人相同（最多摸五张）。",
			biaozhao2: "表召",
			biaozhao2_info: "",
			biaozhao3: "表召",
			biaozhao3_info: "",
			yechou: "业仇",
			yechou_info:
				"当你死亡时，你可以选择一名已损失体力值大于1的角色。直到其下个回合开始前，每个回合结束时，该角色失去1点体力。",
			yechou2: "业仇",
			yechou2_info: "",
			yanjiao: "严教",
			yanjiao_info:
				"出牌阶段限一次，你可以选择一名其他角色并从牌堆顶亮出四张牌。该角色将这些牌分成点数之和相等的两组，你与其各获得其中一组，然后将剩余未分组的牌置入弃牌堆。若未分组的牌超过一张，则你本回合手牌上限-1。",
			yanjiao2: "严教",
			yanjiao2_info: "",
			xingshen: "省身",
			xingshen_info:
				"当你受到伤害后，你可以摸一张牌且下一次发动〖严教〗亮出的牌数+1。若你的手牌数为全场最少，则改为摸两张牌；若你的体力值为全场最少，则〖严教〗亮出的牌数改为+2（加值总数不能超过4）。",

			sp_zhanghe: "SP张郃",
			sp_zhanghe_prefix: "SP",
			yuanlve: "远略",
			yuanlve_info:
				"出牌阶段限一次，你可以将一张非装备牌交给一名角色，然后该角色可以使用该牌并令你摸一张牌。",
			xunchen: "OL荀谌",
			xunchen_prefix: "OL",
			fenglve: "锋略",
			fenglve2: "锋略",
			fenglve_info:
				"出牌阶段开始时，你可以与一名角色拼点，若你赢，该角色将其区域内的各一张牌交给你；若你没赢，你交给其一张牌。当你的单人拼点结算后，你可以令对方获得你拼点的牌。",
			mouzhi: "谋识",
			mouzhi2: "谋识",
			mouzhi_info:
				"出牌阶段限一次，你可以将一张手牌交给一名角色，若如此做，当其于其下回合的出牌阶段内对一名角色造成伤害后，若是此阶段其第一次对该角色造成伤害，你摸一张牌。",
			sp_shenpei: "SP审配",
			sp_shenpei_prefix: "SP",
			gangzhi: "刚直",
			gangzhi_info:
				"锁定技，当你即将受到其他角色造成的伤害时，或即将对其他角色造成伤害时，你防止此伤害，改为受到伤害的角色失去等量的体力。",
			beizhan: "备战",
			beizhan2: "备战",
			beizhan_info:
				"结束阶段，你可以令一名角色将手牌摸至体力上限（至多为5）。其下个回合开始时，若其手牌数为全场最多，则其此回合内使用的牌不能指定其他角色为目标。",
			gaolan: "OL高览",
			gaolan_prefix: "OL",
			xiying: "袭营",
			xiying2: "袭营",
			xiying_info:
				"出牌阶段开始时，你可以弃置一张非基本手牌，然后令所有其他角色依次选择一项：弃置一张牌，或本回合内不能使用或打出牌；且你本回合内获得如下效果：结束阶段，若你于本回合的出牌阶段内造成过伤害，则你从牌堆中获得一张伤害性基本牌或普通锦囊牌。",
			lvkuanglvxiang: "OL吕旷吕翔",
			lvkuanglvxiang_prefix: "OL",
			liehou: "列侯",
			liehou_info:
				"出牌阶段限一次，你可以令一名攻击范围内的角色交给你一张手牌，然后你将一张手牌交给攻击范围内的另一名角色。",
			qigong: "齐攻",
			qigong_info:
				"当你使用的【杀】被【闪】抵消之后，你可以令一名角色再对目标角色使用一张【杀】（不可被响应）。",
			chunyuqiong: "淳于琼",
			sushou: "宿守",
			sushou_info: "弃牌阶段开始时，你可以摸X+1张牌（X为“粮”数），然后可以交给任意名友方角色各一张牌。",
			cangchu: "仓储",
			cangchu_info:
				"锁定技，游戏开始时，你获得3枚“粮”标记，当你受到1点火焰伤害后，你失去一枚“粮”标记。",
			liangying: "粮营",
			liangying_info:
				"锁定技，若你有“粮”标记，则友方角色摸牌阶段摸牌数+1；当你失去所有“粮”标记后，你减1点体力上限，然后令敌方角色各摸两张牌。",
			sp_xuyou: "SP许攸",
			sp_xuyou_prefix: "SP",
			spshicai: "恃才",
			spshicai2: "恃才",
			spshicai_info:
				"出牌阶段，牌堆顶的一张牌对你可见。你可以弃置一张牌，然后获得牌堆顶的一张牌，且不能再发动〖恃才〗直到此牌离开你的手牌区。",
			spfushi: "附势",
			spfushi_info:
				"锁定技，若己方存活角色数：大于敌方，你视为拥有〖择主〗；小于敌方，你视为拥有〖逞功〗。",
			zezhu: "择主",
			zezhu_info:
				"出牌阶段限一次，你可以获得双方主帅的各一张牌（若无牌则改为你摸一张牌），然后交给双方主帅各一张牌。",
			chenggong: "逞功",
			chenggong_info: "当有角色使用牌指定目标后，若此牌对目标数大于1，则你可令使用者摸一张牌。",
			sp_zhangliao: "SP张辽",
			sp_zhangliao_prefix: "SP",
			//这仨技能给SP仲村由理毫无违和感好吗！！！
			mubing: "募兵",
			mubing_info:
				"出牌阶段开始时，你可以亮出牌堆顶的三张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。",
			ziqu: "资取",
			ziqu_info:
				"每名角色限一次，当你对有牌的其他角色造成伤害后，你可以防止此伤害。然后其将其点数最大的牌交给你。",
			diaoling: "调令",
			diaoling_info:
				"觉醒技，准备阶段，若你已因〖募兵〗获得了6张或更多的【杀】或武器牌或伤害锦囊牌，则你回复1点体力或摸两张牌，然后修改〖募兵〗。",
			mubing_rewrite: "募兵·改",
			mubing_rewrite_info:
				"出牌阶段开始时，你可以亮出牌堆顶的四张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。然后你可将以此法得到的牌以任意方式交给其他角色。",
			caobuxing: "曹不兴",
			moying: "墨影",
			moying_info:
				"每回合限一次，当你于回合外不因使用而失去单一一张锦囊牌或装备牌后，你可以选择一个花色和与此牌点数差绝对值不超过2的点数，然后获得牌堆中所有与此牌花色点数相同的牌。",
			juanhui: "绢绘",
			juanhui2: "绢绘",
			juanhui2_backup: "绢绘",
			juanhui_info:
				'结束阶段，你可以选择一名其他角色。记录该角色下回合的出牌阶段里使用的基本牌和普通锦囊牌（每种牌名限记一次），你的下回合出牌阶段，可将一张手牌当这些牌里的任意一张牌使用（每张限使用一次，且【杀】不计次数）。当"绢绘"的牌全部用完时，你回复1点体力并将手牌摸至三张。',
			re_maliang: "新杀马良",
			re_maliang_prefix: "新杀",
			rexiemu: "协穆",
			rexiemu_info:
				"结束阶段，若全场没有“协穆”标记，你可以选择一名角色获得“协穆”标记直到你的下回合开始。你或该角色在各自的回合外使用或打出手牌时，你与其各摸一张牌（每回合限一次）。",
			heli: "贺励",
			heli_info:
				"出牌阶段限一次，你可以选择手牌数比你少的一名其他角色。该角色展示所有手牌，然后每缺少一种类型的牌，便从牌堆中随机获得一张此类型的牌。",
			zhujun: "朱儁",
			gongjian: "攻坚",
			gongjian_info:
				"每回合限一次，当有角色使用【杀】指定第一个目标后，若此【杀】的目标和本局游戏内被使用的上一张【杀】的目标的交集A不为空，则你可以依次弃置A中所有角色的至多两张牌，然后获得以此法弃置的所有【杀】。",
			kuimang: "溃蟒",
			kuimang_info: "锁定技，一名角色死亡后，若你对其造成过伤害，你摸两张牌。",
			liuhong: "刘宏",
			yujue: "鬻爵",
			yujue_backup: "鬻爵",
			yujue_info:
				"出牌阶段限一次，你可以废除一个装备栏，然后令一名有手牌的其他角色交给你一张手牌。其获得〖执笏〗直到你的下回合开始。",
			zhihu: "执笏",
			zhihu_mark: "执笏",
			zhihu_info: "锁定技，每回合限两次，当你对其他角色造成伤害后，你摸两张牌。",
			tuxing: "图兴",
			tuxing2: "图兴",
			tuxing_info:
				"锁定技，当你废除一个装备栏时，你加1点体力上限并回复1点体力。然后若你所有的装备栏均已被废除，则你减4点体力上限，且本局游戏内造成的伤害+1。",
			re_hejin: "新杀何进",
			re_hejin_prefix: "新杀",
			xin_baosanniang: "新杀鲍三娘",
			xin_baosanniang_prefix: "新杀",
			decadexushen: "许身",
			decadexushen2: "许身",
			decadexushen_info:
				"限定技，当你进入濒死状态后，你可以回复1点体力并获得技能“镇南”，然后如果你脱离濒死状态且“关索”不在场，你可令一名其他角色选择是否用“关索”代替其武将并令其摸三张牌。",
			decadezhennan: "镇南",
			decadezhennan_info:
				"当有角色使用普通锦囊牌指定目标后，若此牌目标数大于1，你可以对一名其他角色造成1点伤害。",
			ol_dingyuan: "丁原",
			cixiao: "慈孝",
			cixiao_info:
				"准备阶段，若场上没有“义子”标记，你可令一名其他角色获得一个“义子”标记；若场上有“义子”标记，你可以弃置一张牌移动“义子”标记。拥有“义子”标记的角色获得技能“叛弑”。",
			panshi: "叛弑",
			panshi_info:
				"锁定技，准备阶段，你交给有“慈孝”技能的角色一张手牌；当你于出牌阶段因使用【杀】对其他角色造成伤害时，若其拥有技能“慈孝”，则此伤害+1，且你结束出牌阶段。",
			xianshuai: "先率",
			xianshuai_info:
				"锁定技，有角色造成伤害后，若此伤害是本轮第一次造成伤害：你摸一张牌；若伤害来源是你，则你对受伤角色再造成1点伤害。",
			wangrong: "王荣",
			minsi: "敏思",
			minsi2: "敏思",
			minsi_info:
				"出牌阶段限一次，你可以弃置任意张点数之和为13的牌，然后摸两倍数量的牌。以此法得到的牌中，黑色牌本回合无距离限制，红色牌本回合不计入手牌上限。",
			jijing: "吉境",
			jijing_info:
				"当你受到伤害后，你可以进行一次判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复1点体力。",
			zhuide: "追德",
			zhuide_info: "当你死亡时，你可令一名其他角色从牌堆中获得四张名称各不相同的基本牌。",
			decadewuniang: "武娘",
			decadewuniang_info:
				"当你使用或打出【杀】时，你可以获得一名其他角色的一张牌。若如此做，其摸一张牌。（若你已发动许身，则关索也摸一张牌）",
			dongxie: "董翓",
			juntun: "军屯",
			juntun_info: "锁定技，准备阶段，若X大于1，则你减1点体力上限并摸X张牌（X为你的体力上限）。",
			jiaojie: "狡黠",
			jiaojie_info: "锁定技，你的红色牌不计入手牌上限。你使用黑色牌无距离和次数限制。",
			dcjiaoxia: "狡黠",
			dcjiaoxia_info:
				"①出牌阶段开始时，你可以令自己的所有手牌于此阶段均视为【杀】。若如此做，你使用以此法转化的【杀】造成伤害后，你可以使用此牌对应的原卡牌。②出牌阶段，你对你本阶段未使用过【杀】的角色使用【杀】无距离和次数限制。",
			dchumei: "狐魅",
			dchumei_info:
				"出牌阶段各限一次，你可以选择一名体力值不大于X的角色，令其：①摸一张牌。②交给你一张牌。③回复1点体力。（X为你本阶段造成的伤害数）",
			buchen: "不臣",
			buchen_info: "隐匿技，你于其他角色的回合登场时，可获得当前回合角色的一张牌。",
			smyyingshi: "鹰视",
			smyyingshi_info: "锁定技，出牌阶段，你可观看牌堆顶的X张牌（X为你的体力上限）。",
			xiongzhi: "雄志",
			xiongzhi_info:
				"限定技，出牌阶段，你可亮出牌堆顶的一张牌并使用之。若如此做，你重复此流程，直到你以此法展示的牌无法使用。",
			quanbian: "权变",
			quanbian2: "权变",
			quanbian_info:
				"当你于出牌阶段内使用/打出手牌时，若此牌有花色且你本回合内未使用/打出过该花色的其他手牌，则你可以选择一项：①摸一张牌。②将牌堆顶X张牌中的一张置于牌堆底（X为你的体力上限）。若你发动此技能，则你本回合内不能再使用与此牌花色相同的手牌。",
			re_hansui: "新杀韩遂",
			re_hansui_prefix: "新杀",
			re_quyi: "新杀麴义",
			re_quyi_prefix: "新杀",
			refuqi: "伏骑",
			refuqi_info: "锁定技，当你使用牌时，你令所有距离为1的其他角色不能使用或打出牌响应此牌。",
			hanfu: "韩馥",
			hfjieying: "节应",
			hfjieying2: "节应",
			hfjieying3: "节应",
			hfjieying_info:
				"结束阶段，你可以选择一名其他角色，该角色下回合使用目标数为1的【杀】或普通锦囊牌无距离限制且可多指定一个目标，且当其造成伤害后，其无法再使用牌直到回合结束。",
			weipo: "危迫",
			weipo_info:
				"锁定技，其他角色使用【杀】或普通锦囊牌指定你为目标后，若你的手牌数小于X，则你将手牌摸至X张，并记录摸牌事件结算后的手牌数Y。此牌结算结束后，若你的手牌数小于Y，则你将一张手牌交给此牌的使用者，且此技能失效直到你的下回合开始。（X为你的体力上限且至多为5）",
			zhaozhong: "赵忠",
			yangzhong: "殃众",
			yangzhong_info:
				"当你造成或受到伤害后，若受伤角色和伤害来源均存活，则伤害来源可弃置两张牌，然后令受伤角色失去1点体力。",
			huangkong: "惶恐",
			huangkong_info:
				"锁定技，当你于回合外成为【杀】或普通锦囊牌的目标后，若你没有手牌，则你摸两张牌。",
			re_taoqian: "陶谦",
			reyixiang: "义襄",
			reyixiang_info:
				"锁定技，其他角色于其出牌阶段内使用的第一张牌对你的伤害-1；其使用的第二张牌若为黑色，则对你无效。",
			caosong: "曹嵩",
			cslilu: "礼赂",
			cslilu_info:
				"摸牌阶段，你可以放弃摸牌，改为将手牌摸至X张（X为你的体力上限和5中的最小值），然后将至少一张手牌交给一名其他角色。若你以此法给出的牌数大于你上次以此法给出的牌数，则你加1点体力上限并回复1点体力。",
			csyizheng: "翊正",
			csyizheng2: "翊正",
			csyizheng_info:
				"结束阶段开始时，你可以选择一名其他角色。你的下回合开始前，当该角色造成伤害或回复体力时，若其体力上限小于你，则你减1点体力上限，且令此伤害值/回复值+1。",
			reyirang: "揖让",
			reyirang_info: "出牌阶段开始时，你可以将所有非基本牌交给一名其他角色。若其体力上限大于你，则你将体力上限调整至与其相同并回复X点体力（X为你以此法交给其的牌数）。",
			liangxing: "梁兴",
			lulve: "掳掠",
			lulve_info:
				"出牌阶段开始时，你可选择一名有手牌且手牌数少于你的角色。其选择一项：①将所有手牌交给你，然后你将武将牌翻面。②将武将牌翻面，然后其视为对你使用一张【杀】。",
			lxzhuixi: "追袭",
			lxzhuixi_info:
				"锁定技，当你造成伤害或受到伤害时，若受伤角色的翻面状态和伤害来源的翻面状态不同，则此伤害+1。",
			zhangmiao: "张邈",
			mouni: "谋逆",
			mouni_info:
				"准备阶段，你可对一名其他角色依次使用你手牌中所有的【杀】（若其进入了濒死状态，则终止此流程）。然后若这些【杀】中有未造成伤害的【杀】，则你跳过本回合的出牌阶段和弃牌阶段。",
			zongfan: "纵反",
			zongfan_info:
				"觉醒技。结束阶段，若你本回合内因〖谋逆〗使用过【杀】且未跳过本回合的出牌阶段，则你将任意张牌交给一名其他角色，然后加X点体力上限并回复X点体力（X为你以此法给出的牌数且至多为5）。最后失去〖谋逆〗并获得〖战孤〗。",
			zhangu: "战孤",
			zhangu_info:
				"锁定技，准备阶段，若你的体力上限大于1且没有手牌/装备区内没有牌，则你减1点体力上限，然后从牌堆中获得三张类型不同的牌。",
			re_niujin: "新杀牛金",
			re_niujin_prefix: "新杀",
			recuorui: "摧锐",
			recuorui_info: "限定技，出牌阶段，你可以依次获得至多X名角色的各一张手牌（X为你的体力值）。",
			reliewei: "裂围",
			reliewei_info:
				"每回合限Y次，当有角色进入濒死状态时，你可以摸一张牌（Y为你的体力值，若当前回合角色为你，则Y为Infinity）。",
			duanwei: "段煨",
			langmie: "狼灭",
			langmie_damage: "狼灭",
			langmie_info:
				"其他角色的出牌阶段结束时，若其本阶段内使用过的牌中有类型相同的牌，则你可以摸一张牌；其他角色的结束阶段开始时，若其本回合内造成的伤害大于1，则你可以弃置一张牌并对其造成1点伤害。",
			zhangheng: "张横",
			dangzai: "挡灾",
			dangzai_info: "出牌阶段开始时，你可将一名其他角色判定区内的任意张牌移动至你的判定区内。",
			liangjue: "粮绝",
			liangjue_info: "锁定技，一张黑色牌进入或者离开你的判定区或装备区后，你摸两张牌，然后若你的体力值大于1，你失去1点体力。",
			tangji: "唐姬",
			kangge: "抗歌",
			kangge_info:
				"你的第一个回合开始时，选择一名其他角色，该角色每次于其回合外得到牌后，你摸等量的牌（每回合至多摸三张）；其进入濒死状态时，你可令其回复体力至1点（每轮限一次）。该角色死亡时，你弃置所有牌并失去1点体力。",
			jielie: "节烈",
			jielie_info:
				"当你受到除自己和“抗歌”角色以外的角色造成的伤害时，你可以防止此伤害并选择一种花色，然后你失去X点体力，令“抗歌”角色从弃牌堆中随机获得X张此花色的牌（X为伤害值）。",
			re_dongcheng: "董承",
			xuezhao: "血诏",
			xuezhao_info: "出牌阶段限一次，你可弃置一张手牌并选择至多X名其他角色(X为你的体力上限）。这些角色依次选择是否交给你一张牌，若选择是，该角色摸一张牌且你本回合可多使用一张【杀】；若选择否，该角色本回合无法响应你使用的牌。若没有角色交给你牌，你将手牌摸至体力上限。",
			re_hucheer: "胡车儿",
			redaoji: "盗戟",
			redaoji2: "盗戟",
			redaoji_info:
				"其他角色第一次使用武器牌时，你可选择一项：①获得此牌。②令其本回合内不能使用或打出【杀】。",
			fuzhong: "负重",
			fuzhong_info:
				"锁定技，当你于回合外得到牌后，你获得一枚“重”标记。若X：大于0，你于摸牌阶段开始时令额定摸牌数+1；大于1，你至其他角色的距离-2；大于2，你的手牌上限+3；大于3，结束阶段开始时，你对一名其他角色造成1点伤害，然后移去4枚“重”（X为“重”数）。",
			qiuliju: "丘力居",
			koulve: "寇略",
			koulve_info:
				"当你于出牌阶段内对其他角色造成伤害后，你可以展示其X张手牌（X为其已损失的体力值）。若这些牌中：有带有伤害标签的基本牌或锦囊牌，则你获得之；有红色牌，则你失去1点体力（若已受伤则改为减1点体力上限），然后摸两张牌。",
			qljsuiren: "随认",
			qljsuiren_info: "当你死亡时，你可以将手牌中所有的带有伤害标签的基本牌或锦囊牌交给一名其他角色。",
			re_zoushi: "邹氏",
			rehuoshui: "祸水",
			rehuoshui_info:
				"准备阶段，你可以选择至多X名角色（X为你已损失的体力值且至少为1）。你令这些角色中第一名角色的非锁定技失效直到回合结束；第二名角色交给你一张手牌；第三名及之后角色弃置装备区内的所有牌。",
			reqingcheng: "倾城",
			reqingcheng_info: "出牌阶段限一次，你可以与一名手牌数不大于你的男性角色交换手牌。",
			caoanmin: "曹安民",
			xianwei: "险卫",
			xianwei_info: "锁定技，准备阶段，你废除一个装备栏并摸X张牌（X为你未废除的装备栏数），然后你令一名其他角色对其自己使用一张牌堆中的一张与此装备栏副类别相同的装备牌（没有可使用的牌则改为摸一张牌）。当你废除所有装备栏后，你加2点体力上限，然后你与所有其他角色视为在彼此的攻击范围内。",
			dufuren: "杜夫人",
			yise: "异色",
			yise_info:
				"其他角色得到你的牌后，若这些牌中：有红色牌，你可令其回复1点体力；有黑色牌，其下次受到因执行【杀】的效果造成的伤害时，此伤害+1。",
			shunshi: "顺世",
			shunshi_info:
				"准备阶段开始时，或当你受到伤害后，你可将一张牌交给一名不为伤害来源的其他角色并获得如下效果直到你的回合结束：摸牌阶段的额定摸牌数+1，使用【杀】的次数上限+1，手牌上限+1。",
			rexingluan: "兴乱",
			rexingluan_info:
				"出牌阶段限一次，当你使用的仅指定一个目标的牌结算完成后，你可以获得场上一张与此牌点数相同的牌，或获得牌堆中随机一张点数与此牌相同的牌。",
			xinxingluan: "兴乱",
			xinxingluan_info:
				"每回合限一次。当你于出牌阶段内使用牌结算结束后，你可选择一项：①观看牌堆中的两张点数为6的牌并获得其中一张（没有则改为摸六张牌）；②令一名其他角色弃置一张点数为6的牌或交给你一张牌；③获得场上的一张点数为6的牌。",
			re_nanhualaoxian: "南华老仙",
			gongxiu: "共修",
			gongxiu_info:
				"结束阶段，若你本回合内发动过〖经合〗，则你选择一项：①令所有本回合内成为过〖经合〗目标的角色各摸一张牌；②令所有本回合内未成为过〖经合〗目标的角色各弃置一张手牌。",
			jinghe: "经合",
			jinghe_info: "出牌阶段限一次，你可以展示至多四张牌名各不相同的牌并选择等量的角色。系统从“写满技能的天书”中随机选择等量的技能，然后这些角色依次选择获得其中的一个直到你的下回合开始。",
			nhyinbing: "阴兵",
			nhyinbing_info: "锁定技，你使用的【杀】造成伤害改为失去体力。其他角色失去体力后，你摸一张牌。",
			nhhuoqi: "活气",
			nhhuoqi_info:
				"出牌阶段限一次，你可以弃置一张牌，然后令体力值最少的一名角色回复1点体力并摸一张牌。",
			nhguizhu: "鬼助",
			nhguizhu_info: "一名角色进入濒死状态时，你可以摸两张牌（每回合限一次）。",
			nhxianshou: "仙授",
			nhxianshou_info: "出牌阶段限一次，你可以选择一名角色令其摸一张牌。若其未受伤，则多摸一张。",
			nhlundao: "论道",
			nhlundao_info:
				"当你受到伤害后，若伤害来源比你手牌多，你可以弃置其一张牌；若伤害来源比你手牌少，你摸一张牌。",
			nhguanyue: "观月",
			nhguanyue_info: "结束阶段，你可以观看牌堆顶两张牌，然后获得其中一张，另一张放回牌堆顶。",
			nhyanzheng: "言政",
			nhyanzheng_info:
				"准备阶段，若你的手牌数大于1，你可以保留一张手牌并弃置其余的牌，然后选择至多等于弃牌数量的角色，对这些角色各造成1点伤害。",
			sp_mifangfushiren: "糜芳傅士仁",
			mffengshi: "锋势",
			mffengshi_info:
				"当你使用牌指定唯一目标后，或成为其他角色使用牌的唯一目标后，若此牌使用者的手牌数大于此牌目标的手牌数，则此牌的使用者可令你弃置自己和对方的各一张牌，并令此牌的伤害值+1。",
			dcmffengshi: "锋势",
			dcmffengshi_info:
				"当你使用牌指定唯一目标后，或成为其他角色使用牌的唯一目标后，若此牌使用者的手牌数大于此牌目标的手牌数，则你可弃置自己和对方的各一张牌，并令此牌的伤害值+1。",
			fengshi: "锋势",
			fengshi_info:
				"当你使用牌指定第一个目标后，你可弃置你与其中一名手牌数小于你的目标角色的各一张牌，并令此牌对其造成的伤害+1；当你成为其他角色使用牌的目标后，若你的手牌数小于其，则你可以弃置你与其的各一张牌，并令此牌对你造成的伤害+1。",
			tongyuan: "童渊",
			chaofeng: "朝凤",
			chaofeng_info:
				"出牌阶段限一次。当你造成伤害时，你可以弃置一张手牌，然后摸一张牌。若此伤害的渠道为牌且你弃置的牌：与此牌颜色相同，则你改为摸两张牌；与此牌类型相同，则此伤害+1。",
			chuanshu: "传术",
			chuanshu_info:
				"限定技。准备阶段，若你已受伤；或当你死亡时，你可令一名其他角色获得〖朝凤〗。然后你获得〖龙胆〗、〖从谏〗和〖穿云〗。",
			chuanyun: "穿云",
			chuanyun_info: "当你使用【杀】指定目标后，你可令目标角色随机弃置其装备区内的一张牌。",
			zhangning: "张宁",
			tianze: "天则",
			tianze_info: "①其他角色于其出牌阶段内使用的第一张黑色手牌结算结束后，你可以弃置一张黑色牌，并对其造成1点伤害。②其他角色的判定生效后，若结果为黑色，则你摸一张牌。",
			difa: "地法",
			difa_info: "每回合限一次。当你于回合内得到红色牌后，你可以弃置其中一张。然后你选择一个锦囊牌的牌名，并从牌堆/弃牌堆中获得一张此牌名的牌。",
			xinping: "辛评",
			fuyuan: "辅袁",
			fuyuan_info:
				"当你于回合外使用或打出牌时，若当前回合角色的手牌数：不小于你，你可摸一张牌；小于你，你可令其摸一张牌。",
			zhongjie: "忠节",
			zhongjie_info: "当你死亡时，你可令一名其他角色加1点体力上限并回复1点体力，然后摸一张牌。",
			hanmeng: "韩猛",
			jieliang: "截粮",
			jieliang_info:
				"其他角色的摸牌阶段开始时，你可弃置一张牌，令其本阶段的摸牌数和本回合的手牌上限-1。然后当其于本回合的弃牌阶段内因弃置而失去牌后，你可获得其中的一张。",
			quanjiu: "劝酒",
			quanjiu_info:
				"锁定技。①你手牌区中的【酒】的牌名视为【杀】。②你使用对应的实体牌为一张【酒】的非转化【杀】不计入次数限制。",
			re_pangdegong: "庞德公",
			heqia: "和洽",
			heqia_info:
				"出牌阶段开始时，你可选择一项：①将任意张牌交给一名其他角色。②令一名有手牌的其他角色交给你任意张牌。然后以此法得到牌的角色可以将一张手牌当作任意基本牌使用，且当其声明使用此牌后，可以为此牌增加至至多X个目标（X为以此法移动的牌数）。",
			yinyi: "隐逸",
			yinyi_info:
				"锁定技。每回合限一次，当你受到非属性伤害时，若你的手牌数和体力值与伤害来源均不相同，则你防止此伤害。",
			haomeng: "郝萌",
			xiongmang: "雄莽",
			xiongmang_info: "你可将任意张花色各不相同的手牌当做目标数上限为X的【杀】使用（X为此【杀】对应的实体牌数）。此【杀】使用结算结束后，若此牌造成过/未造成过伤害，则你本阶段使用【杀】的额定次数+1/减1点体力上限。",
			yanfuren: "严夫人",
			channi: "谗逆",
			channi_info: "出牌阶段限一次。你可将任意张手牌交给一名其他角色，然后其可以将至多等量的手牌当做【决斗】使用。当其因此【决斗】：造成伤害后，其摸X张牌（X为此【决斗】对应的实体牌数）；受到伤害后，你弃置所有手牌。",
			nifu: "匿伏",
			nifu_info: "锁定技。一名角色的回合结束时，你将手牌摸至或弃置至三张。",
			licaiwei: "李采薇",
			yijiao: "异教",
			yijiao_info:
				"出牌阶段限一次，你可以选择一名没有“异”标记的其他角色并声明一个整数X（X∈[1,4]），该角色获得10X个“异”标记。有“异”标记的角色的结束阶段，其移去“异”标记，且若其本回合使用牌的点数之和：1.小于“异”标记数，其随机弃置至多三张手牌；2.等于“异”标记数，你摸两张牌且该角色本回合结束后进行一个额外的回合；3.大于“异”标记数，你摸三张牌。",
			qibie: "泣别",
			qibie_info:
				"一名角色死亡后，若你有手牌且这些手牌均可被弃置，则你可以弃置所有手牌，然后回复1点体力并摸X+2张牌（X为你弃置的牌数）。",
			dc_zhuling: "朱灵",
			dczhanyi: "战意",
			dczhanyi_info:
				"出牌阶段开始时，你可以弃置所有基本牌/锦囊牌/装备牌，然后获得另外两种类型的牌对应的效果直到你的下个回合开始：基本牌、你使用基本牌无距离限制，且伤害值和回复值基数+1；锦囊牌、你使用锦囊牌时摸一张牌，且锦囊牌不计入手牌上限；装备牌，当装备牌进入你的装备区时，你可弃置一名其他角色的一张牌。",
			yanrou: "阎柔",
			choutao: "仇讨",
			choutao_info:
				"当你使用【杀】时，或成为【杀】的目标后，你可以弃置此【杀】使用者的一张牌，令此【杀】不可被响应。若你是此【杀】的使用者，则你令此【杀】不计入次数限制。",
			xiangshu: "襄戍",
			xiangshu_info:
				"限定技。结束阶段开始时，若你本回合内造成过伤害，则你可以选择一名已受伤的角色。该角色回复X点体力并摸X张牌（X为你本回合内造成的伤害值总和且至多为5）。",
			qinyilu: "秦宜禄",
			piaoping: "漂萍",
			piaoping_info:
				"转换技，锁定技。当你使用一张牌时，阴：你摸X张牌。阳：你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）",
			tuoxian: "托献",
			tuoxian_info:
				"每局游戏限一次。当你因执行〖漂萍〗的效果而弃置牌后，你可令一名其他角色获得这些牌，然后令该角色选择一项：⒈弃置区域内等量的牌。⒉令你的〖漂萍〗失效直到回合结束。",
			chuaili: "惴栗",
			chuaili_info:
				"锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阳状态，则你将〖漂萍〗转换至阴状态；处于阴状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。",
			fengfang: "冯方",
			dcditing: "谛听",
			dcditing_info:
				"其他角色的出牌阶段开始时，若你在该角色的攻击范围内，则你可以观看其的X张手牌（X为你的体力值）并选择其中一张，且获得如下效果：①当其使用对应实体牌包含此牌的牌指定你为目标后，你令此牌对你无效。②当其使用对应实体牌包含此牌的牌结算结束后，若你不是此牌的目标，则你摸两张牌。③其出牌阶段结束时，若此牌位于其的手牌区，则你获得此牌。",
			dcbihuo: "避祸",
			dcbihuo_info:
				"①当你受到其他角色造成的伤害后，你可令一名角色下回合摸牌阶段的额定摸牌数+1。②当你对其他角色造成伤害后，你可令一名角色下回合摸牌阶段的额定摸牌数-1。",
			bianxi: "卞喜",
			dunxi: "钝袭",
			dunxi_info:
				"①当你使用具有伤害标签的牌时，你可以令一名不为你的目标角色获得一枚“钝”。②有“钝”的角色使用基本牌或锦囊牌时，若此牌目标数为1且此时没有角色处于濒死状态，你令其移去一枚“钝”。系统随机选择一名角色，并将此牌的目标改为该角色。若该角色和原目标相同，则其失去1点体力。若其正处于出牌阶段内，则结束此阶段。",
			niufu: "牛辅",
			dcxiaoxi: "宵袭",
			dcxiaoxi_info:
				"锁定技。出牌阶段开始时，你声明X并减X点体力上限（X∈[1,2]）。然后你选择一名攻击范围内的其他角色并选择一项：⒈获得该角色的X张牌。⒉视为对其使用X张【杀】。",
			xiongrao: "熊扰",
			xiongrao_info:
				"限定技。准备阶段开始时，你可以选择所有其他角色。这些角色本回合内所有不为锁定技、限定技、觉醒技的普通技能失效。然后你将体力上限增加至7点并摸X张牌（X为你以此法增加的体力上限数）。",
			dc_huban: "胡班",
			dcchongyi: "崇义",
			dcchongyi_info:
				"①一名角色使用【杀】时，若此牌是其于当前出牌阶段内使用的第一张牌，则你可以令其摸两张牌，且其本回合使用【杀】的次数上限+1。②一名角色的出牌阶段结束时，若其于此阶段内使用的最后一张牌为【杀】，则你可以令其本回合的手牌上限+1，然后你获得此【杀】。",
			wangwei: "王威",
			dcruizhan: "锐战",
			dcruizhan_info:
				"其他角色的准备阶段开始时，若其的手牌数不小于其体力值，则你可以和其拼点。若你赢或拼点牌中有【杀】，则你视为对其使用一张【杀】。然后若此【杀】造成了伤害且以上两个条件均被满足，则你获得其一张牌。",
			dcshilie: "示烈",
			dcshilie_info:
				"①出牌阶段限一次。你可以选择一项：⒈回复1点体力，将两张牌置于武将牌上作为“示烈”。若“示烈”牌数大于存活人数，则你将最早的多余牌置入弃牌堆；⒉失去1点体力，获得两张“示烈”牌。（满血则不回血，无牌则不移动）②当你死亡时，你可以将所有“示烈”牌交给一名不为伤害来源的其他角色。",
			dc_zhaoyǎn: "赵俨",
			dcfuning: "抚宁",
			dcfuning_info:
				"当你使用牌时，你可以摸两张牌，然后弃置X张牌（X为你本回合内发动过〖抚宁〗的次数）。",
			dcbingji: "秉纪",
			dcbingji_info:
				"出牌阶段每种花色各限一次。若你有手牌且这些牌的花色均相同，则你可以展示手牌，然后选择一名其他角色，视为对其使用一张【杀】或【桃】（有距离限制）。",
			mushun: "穆顺",
			dcjinjian: "劲坚",
			dcjinjian_info:
				"①当你受到其他角色造成的伤害后或造成伤害后，你获得一枚“劲”。然后你可以和伤害来源拼点，若你赢，你恢复1点体力。②你的攻击范围+X（X为“劲”数）。",
			dcshizhao: "失诏",
			dcshizhao_info:
				"锁定技。每回合限一次，当你于回合外失去手牌后，若你没有手牌，且你：有“劲”，则你移去一枚“劲”并摸两张牌；没有“劲”，则你本回合下一次受到的伤害+1。",
			liyixiejing: "李异谢旌",
			dcdouzhen: "斗阵",
			dcdouzhen_info:
				"锁定技。①转换技。你的回合内，阴：当你使用非转化且对应的实体牌为一张黑色基本牌的【决斗】时，你获得目标角色各一张牌并获得1枚“☯”；阳：当你使用或打出非转化且对应的实体牌为一张红色基本牌的【杀】时，你获得1枚“☯”。②若你的“☯”数为：偶数，你的黑色基本牌均视为【决斗】；奇数，你的红色基本牌均视为无次数限制的普【杀】。",
			dc_hujinding: "新杀胡金定",
			dc_hujinding_prefix: "新杀",
			dcdeshi: "德释",
			dcdeshi_info:
				"锁定技。当你受到【杀】的伤害时，若你已受伤，则你防止此伤害并令系统从弃牌堆/牌堆中检索一张【杀】，你获得此【杀】，然后减1点体力上限。",
			dcwuyuan: "武缘",
			dcwuyuan_info:
				"出牌阶段限一次。你可将一张【杀】交给一名其他角色，然后你回复1点体力，你与其各摸一张牌。若此【杀】为：红色【杀】，其回复1点体力；属性【杀】，其改为摸两张牌。",
			shiyi: "是仪",
			dccuichuan: "榱椽",
			dccuichuan_info:
				"出牌阶段限一次。你可以弃置一张手牌并选择一名角色，其随机使用牌堆里一张其空置装备栏对应副类别且其能对其使用的装备牌，你摸X张牌（X为其装备区里的牌数）。然后若其装备区里的牌数增加至四张，你失去〖榱椽〗，获得〖佐谏〗，且令其获得一个额外回合。",
			dczhengxu: "正序",
			dczhengxu_info:
				"每回合每项限一次。①当你受到伤害时，若你本回合失去过牌，你可以防止此伤害。②当你失去牌后，若你本回合受到过伤害，你可以摸等量的牌。",
			dczuojian: "佐谏",
			dczuojian_info:
				"出牌阶段结束时，若你于此阶段使用过的牌数不小于体力值，你可以选择一项：1.令装备区牌数多于你的角色各摸一张牌；2.弃置装备区牌数少于你的角色各一张手牌。",
			sunlang: "孙狼",
			dctingxian: "铤险",
			dctingxian_info: "每回合限一次。当你使用【杀】指定最后一个目标后，你可以摸X张牌，然后可以令此【杀】对其中至多X个目标无效（X为你装备区的牌数+1）。",
			dcbenshi: "奔矢",
			dcbenshi_info: "锁定技。①你的攻击范围+1。②由你使用的【杀】的牌面信息中的“使用目标”产生的规则改为“攻击范围内的所有角色”。",
			sunhuan: "孙桓",
			dcniji: "逆击",
			dcniji_info:
				"①当你成为非装备牌的目标后，你可以摸一张牌，称为“逆击”。②一名角色的结束阶段，你可以使用一张“逆击”牌，然后弃置所有“逆击”牌。",
			//dc_fuwan:'新杀伏完',
			//dc_fuwan_prefix:'新杀',
			//dc_fuwan_ab:'伏完',
			dcmoukui: "谋溃",
			dcmoukui_info:
				"当你使用【杀】指定第一个目标后，你可以选择任意项：1.摸一张牌；2.弃置其中一个目标角色一张牌。若你均选择，当此【杀】被无效后或被抵消后，该角色弃置你一张牌。",
			guānning: "关宁",
			dcxiuwen: "修文",
			dcxiuwen_info: "当你使用牌时，若你未记录此牌牌名，你可以记录之并摸一张牌。",
			oldlongsong: "龙诵",
			oldlongsong_info:
				"出牌阶段开始时，你可以将一张手牌交给一名其他角色。然后其须选择其所有的发动时机为出牌阶段内的空闲时间点且你至多能于此阶段发动一次的技能，其于此阶段这些技能失效，你获得这些技能。",
			dclongsong: "龙诵",
			dclongsong_info:
				"出牌阶段开始时，你可以将一张红色牌交给一名其他角色。然后其须选择其所有的发动时机包含“出牌阶段”的技能，其于此阶段这些技能失效，你获得这些技能且至多可以发动一次。",
			longsong: "龙诵",
			longsong_info:
				"出牌阶段开始时，你可以将一张红色牌交给一名其他角色或获得一名其他角色的一张红色牌，然后你本阶段获得其所有的发动时机包含“出牌阶段”的技能且至多可以发动一次，若其没有符合条件的技能，则改为随机获得一个满足条件的技能。",
			dc_mengda: "孟达",
			dclibang: "利傍",
			dclibang_info:
				"出牌阶段限一次。你可以弃置一张牌，正面向上获得两名其他角色的各一张牌。然后你判定，若结果与这两张牌的颜色均不同，你交给其中一名角色两张牌或失去1点体力，否则你获得判定牌并视为对其中一名角色使用一张【杀】。",
			dcwujie: "无节",
			dcwujie_info:
				"锁定技。①你使用无色牌无任何次数限制且无距离限制。②当其他角色执行杀死你的奖惩而摸牌或弃牌时，取消之。",
			dc_jsp_guanyu: "新杀SP关羽",
			dc_jsp_guanyu_prefix: "新杀SP",
			dcdanji: "单骑",
			dcdanji_info: "觉醒技。准备阶段，若你区域内的牌数大于体力值，你减1点体力上限，将体力回复至体力上限并摸等量张牌，然后获得〖马术〗和〖怒嗔〗。",
			dcnuchen: "怒嗔",
			dcnuchen_info:
				"出牌阶段限一次。你可以展示一名其他角色的一张手牌，然后选择一项：1.弃置任意张该花色的牌，对其造成等量伤害；2.获得该角色手牌中所有此花色的牌。",
			dc_jikang: "新杀嵇康",
			dc_jikang_prefix: "新杀",
			dcjuexiang: "绝响",
			dcjuexiang_info:
				"当你死亡时，杀死你的角色弃置其装备区内的所有牌并失去1点体力，然后你可以令一名其他角色获得〖残韵〗。",
			dccanyun: "残韵",
			dccanyun_info:
				"每名角色限一次。出牌阶段，你可以弃置一张牌并选择一名其他角色，然后若其装备区里的牌数：小于你，其回复1点体力；大于你，其失去1点体力；等于你，其摸一张牌。若你的体力值为1，你摸一张牌。",
			mp_liuling: "刘伶",
			mpjiusong: "酒颂",
			mpjiusong_info:
				"①你可以将一张锦囊牌当【酒】使用。②当一名角色使用【酒】时，你获得1枚“醉”标记（“醉”数至多为3）。",
			mpmaotao: "酕醄",
			mpmaotao_info:
				"当其他角色使用基本牌或普通锦囊牌指定唯一目标时，你可以移去1枚“醉”，令此牌的目标改为随机一名合法角色（无距离限制）。若目标角色与原目标相同且你本回合未以此法获得过牌，你从牌堆中随机获得一张锦囊牌。",
			mpbishi: "避世",
			mpbishi_info: "锁定技。你不能成为伤害类锦囊牌的目标。",
			star_caoren: "星曹仁",
			star_caoren_prefix: "星",
			starsujun: "肃军",
			starsujun_info: "当你使用一张牌时，若你手牌中的基本牌和非基本牌的牌数相等，你可以摸两张牌。",
			starlifeng: "砺锋",
			starlifeng_info:
				"你可以将一张本回合未有角色使用过的颜色的手牌当做不计入次数的【杀】或【无懈可击】使用。",
			star_yuanshu: "星袁术",
			star_yuanshu_prefix: "星",
			starcanxi: "残玺",
			starcanxi_wangsheng: "妄生",
			starcanxi_xiangsi: "向死",
			starcanxi_cancel: "向死",
			starcanxi_info: "锁定技。①游戏开始时，你获得场上所有角色的势力对应的“玺角”标记（初始势力中未获得的“玺角”标记改为增加等量的体力上限）。②一轮游戏开始时，你选择一个“玺角”对应势力并选择以下一项：1.妄生：本轮被选择势力角色每回合首次造成的伤害+1且计算与其他角色间的距离-1；2.向死：本轮其他被选择势力角色每回合首次回复体力后失去1点体力且每回合对你使用的第一张牌无效。",
			starpizhi: "圮秩",
			starpizhi_info: "锁定技。①一名角色死亡后，若你拥有该角色对应的“玺角”标记且你本轮发动〖残玺〗的势力与其相同，或其是该势力最后一名角色，你失去之，然后摸X张牌并回复1点体力。②结束阶段，你摸X张牌。（X为你本局游戏失去的“玺角”标记数）",
			starzhonggu: "冢骨",
			starzhonggu_info:
				"主公技，锁定技。摸牌阶段，若游戏轮数大于等于场上的群势力角色数，则你额外摸两张牌，否则你少摸一张牌。",
			star_dongzhuo: "星董卓",
			star_dongzhuo_prefix: "星",
			starweilin: "威临",
			starweilin_info:
				"锁定技。当你于回合内对一名其他角色造成伤害时，若其本回合未受到过伤害，且你本回合使用的牌数大于等于其体力值，则此伤害+1。",
			starzhangrong: "掌戎",
			starzhangrong_info:
				"准备阶段，你可以选择令至多X名体力值大于等于你的角色各失去1点体力或令至多X名手牌数大于等于你的角色各弃置一张手牌（X为你的体力值）。若如此做，你摸等同于选择角色数的牌，且本回合结束时，若这些角色中存在本回合未受到过伤害的角色，则你失去1点体力。",
			starhaoshou: "豪首",
			//starhaoshou_info:'主公技。①其他群势力角色使用【酒】结算完毕后，其可以令你回复1点体力。②当你处于濒死状态时，其他群势力角色可以将【酒】当作【桃】对你使用。',
			starhaoshou_info: "主公技。其他群势力角色使用【酒】结算完毕后，其可以令你回复1点体力。",
			star_yuanshao: "星袁绍",
			star_yuanshao_prefix: "星",
			starxiaoyan: "硝焰",
			starxiaoyan_info:
				"锁定技，游戏开始时，你对所有其他角色各造成1点火属性伤害，然后这些角色可依次交给你一张牌并回复1点体力。",
			starzongshi: "纵势",
			starzongshi_info:
				"出牌阶段，你可以展示一张可展示目标的基本牌或普通锦囊牌，然后你将手牌中所有与此牌花色相同的其他牌当作此牌使用（无距离限制），且此牌至多指定转化牌数的目标。",
			starjiaowang: "骄妄",
			starjiaowang_info:
				"锁定技，非首轮游戏开始时，若上一轮没有角色死亡（因〖硝焰〗死亡的角色除外），则你失去1点体力并发动〖硝焰〗。",
			staraoshi: "傲势",
			staraoshi_info:
				"主公技，其他群势力角色的出牌阶段限一次，其可以交给你一张手牌，然后你可以发动一次〖纵势〗。",
			star_zhangchunhua: "星张春华",
			star_zhangchunhua_prefix: "星",
			starliangyan: "梁燕",
			starliangyan_info:
				"出牌阶段限一次。你可以选择一名其他角色，你摸/弃置至多两张牌，令其弃置/摸等量的牌。然后若你与其手牌数相同，以此法摸牌的角色跳过其下一个弃牌阶段。",
			starminghui: "明慧",
			starminghui_info:
				"一名角色的回合结束时，若你的手牌数：最少，你可以视为使用一张无距离限制的【杀】；最多，你可以将手牌弃置至你手牌数不为最多，然后令一名角色回复1点体力。",
			star_sunshangxiang: "星孙尚香",
			star_sunshangxiang_prefix: "星",
			starsaying: "飒影",
			starsaying_info: "每轮每种牌名限一次，你需要使用【杀】或【闪】时，你可以使用一张装备牌，视为使用之；你需要使用【桃】或【酒】时，你可以收回装备区里的一张牌，视为使用之。",
			starjiaohao: "骄豪",
			starjiaohao_info: "出牌阶段限一次，你可以与一名装备区牌数不大于你的角色拼点，然后你可令赢的角色获得拼点牌或令其使用一张【杀】。",
			liqueguosi: "李傕郭汜",
			xiongsuan: "凶算",
			xiongsuan_info:
				"出牌阶段限一次，你可以弃置一张手牌并对一名角色造成1点伤害，然后你摸三张牌。若该角色不为你，你失去1点体力。",
			star_sunjian: "星孙坚",
			star_sunjian_prefix: "星",
			starruijun: "锐军",
			starruijun_info: "当你于出牌阶段首次使用牌指定其他角色为目标后，你可以选择其中一名目标角色并摸X张牌（X为你已损失的体力值+1）。直到此阶段结束，所有不为其的其他角色均不在你的攻击范围内，你对其使用牌无距离限制，且当你对其造成伤害时，此伤害值改为Y（Y为你本回合上一次对其造成过的伤害值+1，至多为5）。",
			stargangyi: "刚毅",
			stargangyi_info: "锁定技。①你的回合内，若你本回合没有造成过伤害，你不能使用【桃】。②当你处于濒死状态时，以你为目标的【桃】或【酒】的回复值+1。",
			star_zhangzhao: "星张昭",
			star_zhangzhao_prefix: "星",
			starzhongyan: "忠言",
			starzhongyan_info: "出牌阶段限一次，你可展示牌堆顶三张牌，然后令一名角色将一张手牌与其中一张牌交换。然后若这些牌颜色相同，其回复1点体力或获得场上一张牌。然后若该角色不为你，你执行其未执行的一项。",
			starjinglun: "经纶",
			starjinglun_info: "每回合限一次，当你距离1以内的角色造成伤害后，你可以令其摸X张牌并对其发动〖忠言〗（X为其装备区的牌数）。",
			chezhou: "车胄",
			dcshefu: "慑伏",
			dcshefu_info: "锁定技。你对其他角色/其他角色对你使用牌造成的伤害改为X（X为此牌对应的所有实体牌最近一次被伤害来源获得后至现在经过的轮次数之和）。",
			dcpigua: "披挂",
			dcpigua_info: "当你对一名其他角色造成超过1点伤害后，你可以获得其至多等同于游戏轮次的牌，这些牌本回合不计入你的手牌上限。",
			hansong: "韩嵩",
			dcyinbi: "隐避",
			dcyinbi_info: "锁定技。①你的手牌上限与场上手牌上限最多的角色相同。②若没有其他角色的手牌数与你相等，则你使用牌无距离和次数限制。",
			dcshuaiyan: "率言",
			dcshuaiyan_info: "锁定技，其他角色手牌数变化后，若与你相等，你弃置其一张牌或摸一张牌。",
			matie: "马铁",
			dczhuiwang: "追亡",
			dczhuiwang_info: "锁定技，你计算体力值小于等于你的角色的距离视为1。",
			dcquxian: "驱险",
			dcquxian_info: "出牌阶段开始时，你可以选择一名角色，攻击范围内包含其的其他角色可以依次对其使用一张【杀】。若其未以此法受到伤害，这些角色中未使用【杀】的角色失去X点体力（X为这些角色中使用【杀】的角色数）。",
			mp_wangrong: "王戎",
			mpjianlin: "俭吝",
			mpjianlin_info: "每回合结束后，若本回合你有基本牌因使用、打出或弃置而进入弃牌堆，则你可以选择其中一张牌获得之。",
			mpsixiao: "死孝",
			mpsixiao_info: "锁定技，游戏开始时，你选择一名其他角色。每回合限一次，当该角色需要使用或打出除【无懈可击】外的牌时，其可以观看你的手牌并可以使用或打出其中一张牌，然后你摸一张牌。",

			// 南征北战
			sp2_whlw: "南征北战·文和乱武",
			sp2_zltx: "南征北战·逐鹿天下",
			sp2_sbfm: "南征北战·上兵伐谋",
			sp2_qihuan: "南征北战·戚宦之争",
			sp2_binglin: "南征北战·兵临城下",
			sp2_danqi: "南征北战·千里单骑",
			sp2_fenghuo: "南征北战·烽火连天",
			sp2_zizouqi: "南征北战·食禄尽忠",
			
			// 武将列传
			sp2_huangjin: "武将列传·黄巾之乱",
			sp2_fadong: "武将列传·诸侯伐董",
			sp2_xuzhou: "武将列传·徐州风云",
			sp2_zhongyuan: "武将列传·中原狼烟",
			sp2_xiaohu: "武将列传·虓虎悲歌",
			sp2_qunxiong: "武将列传·群雄伺动",
			
			sp2_waitforsort: "等待分包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			卑弥呼: ["Himiko"],
		},
	};
});
