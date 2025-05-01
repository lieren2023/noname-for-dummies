game.import("extension",function(lib,game,ui,get,ai,_status){
	// 适配新版本体，加强对未将数组contains方法改为includes方法的旧扩展的兼容（控制台警告），注意classList还是用contains方法
	Array.prototype.contains = Array.prototype.includes;//懒得一个个改了，直接用这个消去报错。
	
	// 关闭扩展后，自动将游戏人数恢复为八人，避免报错
	if(!game.getExtensionConfig('搬运自用','enable') && lib.config.youxirenshu_identityguozhan!=false){
		game.saveConfig('player_number','8','identity');
		game.saveConfig('player_number','8','guozhan');
		game.saveConfig('youxirenshu_identityguozhan',false);
	}
return {
name:"搬运自用",
content:function(config,pack){
	// 特效/界面错位解决方案
	// 扩展：特效修复，作者：梨花喵🐱，魔改：棘手怀念摧毁
	// 注1：特效错位已修复——手机端测试通过（新版Android System WebView导致，据反馈是127以上版本有此问题）；电脑端测试通过
	// 注2：界面错位已修复——菜单蓝色光标、子菜单位置，结合棘手懒人包的十周年UI/menu.js修复（3处界面错位修复）
	// 特效错位修复
	game.getChromeVersion = function () {
		const userAgent = navigator.userAgent;
		if (userAgent.indexOf("Chrome") > -1) {
			const versionMatch = userAgent.match(/Chrome\/(\d+)/);
			if (versionMatch && versionMatch[1]) {
				return parseInt(versionMatch[1]);
			}
		}
		return 0;
	};
	if (game.getChromeVersion() >= 128) {
		const gBC = HTMLElement.prototype.getBoundingClientRect;
		HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
			let {bottom, height, left, right, top, width, x, y} = gBC.call(this);
			bottom /= game.documentZoom;
			height /= game.documentZoom;
			left /= game.documentZoom;
			right /= game.documentZoom;
			top /= game.documentZoom;
			width /= game.documentZoom;
			x /= game.documentZoom;
			y /= game.documentZoom;
			return {
				bottom,
				height,
				left,
				right,
				top,
				width,
				x,
				y
			};
		}
	}
	
	// 临时修复塔防等模式的武将显示问题
	if(!['chess', 'tafang', 'stone'].includes(get.mode())){
		// 按钮宽度调整（武将/卡牌的全部禁用/全部启用）
		game.dynamicStyle.update(".content>.pointerdiv", {
			width: "calc(100% - 18px) !important"
		});
	}
	
	// 武将称号补充（缓更中）
	if(config.wujiangchenghao){
		// 删除本体武将称号（放的位置不对）
		for (let key in lib.characterTitle) {
			if (lib.characterTitle[key].startsWith('S') || lib.characterTitle[key].startsWith('#g') || lib.characterTitle[key].startsWith('#b') || lib.characterTitle[key].startsWith('#r') || lib.characterTitle[key].startsWith('#p')) {
				lib.characterTitle[key] = '';
			}
		}
		
		// lib.characterTitle.AAA = lib.characterTitle.BBB赋值时注意顺序（lib.characterTitle.BBB要先写且有值）
		// standard:'标准',
		lib.characterTitle.old_re_lidian = "深明大义";
		lib.characterTitle.ganfuren = "昭烈皇后";
		lib.characterTitle.std_panfeng = "联军上将";
		lib.characterTitle.caocao = "魏武帝";
		lib.characterTitle.simayi = "狼顾之鬼";
		lib.characterTitle.xiahoudun = "独眼的罗刹";
		lib.characterTitle.zhangliao = "前将军";
		lib.characterTitle.xuzhu = "虎痴";
		lib.characterTitle.guojia = "早终的先知";
		lib.characterTitle.zhenji = "薄幸的美人";
		lib.characterTitle.liubei = "乱世的枭雄";
		lib.characterTitle.guanyu = "美髯公";
		lib.characterTitle.zhangfei = "万夫不当";
		lib.characterTitle.zhugeliang = "迟暮的丞相";
		lib.characterTitle.zhaoyun = "少年将军";
		lib.characterTitle.machao = "一骑当千";
		lib.characterTitle.huangyueying = "归隐的杰女";
		lib.characterTitle.sunquan = "年轻的贤君";
		lib.characterTitle.ganning = "锦帆游侠";
		lib.characterTitle.lvmeng = "白衣渡江";
		lib.characterTitle.huanggai = "轻身为国";
		lib.characterTitle.zhouyu = "大都督";
		lib.characterTitle.daqiao = "矜持之花";
		lib.characterTitle.luxun = "儒生雄才";
		lib.characterTitle.sunshangxiang = "弓腰姬";
		lib.characterTitle.huatuo = "神医";
		lib.characterTitle.lvbu = "武的化身";
		lib.characterTitle.diaochan = "绝世的舞姬";
		lib.characterTitle.huaxiong = "飞扬跋扈";
		lib.characterTitle.gongsunzan = "白马将军";
		lib.characterTitle.xf_yiji = "礼仁同渡";
		lib.characterTitle.re_yuanshu = "野心渐增";
		// shenhua:'神话再临',
		lib.characterTitle.re_huangzhong = "老当益壮";
		lib.characterTitle.old_zhoutai = "历战之驱";
		lib.characterTitle.old_caoren = "大将军";
		lib.characterTitle.re_xuhuang = "周亚夫之风";
		lib.characterTitle.re_pangde = "人马一体";
		lib.characterTitle.re_xiahouyuan = "疾行的猎豹";
		lib.characterTitle.re_weiyan = "嗜血的独狼";
		lib.characterTitle.xiaoqiao = "矫情之花";
		lib.characterTitle.sp_zhangjiao = "天公将军";
		lib.characterTitle.re_yuji = "太平道人";
		lib.characterTitle.sp_zhugeliang = "卧龙";
		lib.characterTitle.pangtong = "凤雏";
		lib.characterTitle.xunyu = "王佐之才";
		lib.characterTitle.dianwei = "古之恶来";
		lib.characterTitle.taishici = "笃烈之士";
		lib.characterTitle.yanwen = "虎狼兄弟";
		lib.characterTitle.re_yuanshao = "高贵的名门";
		lib.characterTitle.menghuo = "南蛮王";
		lib.characterTitle.zhurong = "野性的女王";
		lib.characterTitle.caopi = "霸业的继承者";
		lib.characterTitle.re_lusu = "独断的外交家";
		lib.characterTitle.sunjian = "武烈帝";
		lib.characterTitle.dongzhuo = "魔王";
		lib.characterTitle.jiaxu = "冷酷的毒士";
		lib.characterTitle.jiangwei = "龙的衣钵";
		lib.characterTitle.liushan = "无为的真命主";
		lib.characterTitle.zhanghe = "料敌机先";
		lib.characterTitle.dengai = "矫然的壮士";
		lib.characterTitle.sunce = "江东的小霸王";
		lib.characterTitle.zhangzhang = "经天纬地";
		lib.characterTitle.caiwenji = "异乡的孤女";
		lib.characterTitle.zuoci = "谜之仙人";
		lib.characterTitle.wangji = "经行合一";
		lib.characterTitle.yanyan = "断头将军";
		lib.characterTitle.wangping = "兵谋以致用";
		lib.characterTitle.luji = "瑚琏之器";
		lib.characterTitle.sunliang = "寒江枯水";
		lib.characterTitle.xuyou = "朝秦暮楚";
		lib.characterTitle.yl_luzhi = "国之桢干";
		lib.characterTitle.kuailiangkuaiyue = "雍论臼谋";
		lib.characterTitle.guanqiujian = "镌功铭征荣";
		lib.characterTitle.haozhao = "扣弦的豪将";
		lib.characterTitle.zhugezhan = "临难死义";
		lib.characterTitle.lukang = "社稷之瑰宝";
		lib.characterTitle.yl_yuanshu = "仲家帝";
		lib.characterTitle.zhangxiu = "北地枪王";
		lib.characterTitle.chendao = "白毦督";
		lib.characterTitle.zhoufei = "软玉温香";
		// yijiang:'一将成名',
		lib.characterTitle.xiahoumao = "束甲之鸟";
		lib.characterTitle.chenshi = "裨将可期";
		lib.characterTitle.sunli = "百炼公才";
		lib.characterTitle.feiyao = "后将军";
		lib.characterTitle.wuanguo = "虎口折腕";
		lib.characterTitle.hanlong = "冯河易水";
		lib.characterTitle.yj_qiaozhou = "观星知命";
		lib.characterTitle.yj_sufei = "雄猛逸才";
		lib.characterTitle.liwan = "才媛淑美";
		lib.characterTitle.zhugeshang = "尚节殉义";
		lib.characterTitle.kebineng = "瀚海鲸波";
		lib.characterTitle.lukai = "青辞宰辅";
		lib.characterTitle.xin_fazheng = "蜀汉的辅翼";
		lib.characterTitle.guanzhang = "将门虎子";
		lib.characterTitle.wangyi = "决意的巾帼";
		lib.characterTitle.caozhang = "黄须儿";
		lib.characterTitle.guohuai = "垂问秦雍";
		lib.characterTitle.zhangchunhua = "冷血皇后";
		lib.characterTitle.caozhi = "八斗之才";
		lib.characterTitle.caochong = "仁爱的神童";
		lib.characterTitle.xunyou = "曹魏的谋主";
		lib.characterTitle.xin_xushu = "忠孝的侠士";
		lib.characterTitle.xin_masu = "怀才自负";
		lib.characterTitle.zhuran = "不动之督";
		lib.characterTitle.xusheng = "江东的铁壁";
		lib.characterTitle.wuguotai = "武烈皇后";
		lib.characterTitle.lingtong = "豪情烈胆";
		lib.characterTitle.liubiao = "跨蹈汉南";
		lib.characterTitle.yufan = "狂直之士";
		lib.characterTitle.chengong = "刚直壮烈";
		lib.characterTitle.bulianshi = "无冕之后";
		lib.characterTitle.handang = "石城侯";
		lib.characterTitle.fuhuanghou = "孤注一掷";
		lib.characterTitle.zhonghui = "桀骜的野心家";
		lib.characterTitle.jianyong = "悠游风议";
		lib.characterTitle.old_madai = "临危受命";
		lib.characterTitle.liufeng = "骑虎之殇";
		lib.characterTitle.manchong = "政法兵谋";
		lib.characterTitle.chenqun = "万世臣表";
		lib.characterTitle.sunluban = "为虎作伥";
		lib.characterTitle.guyong = "庙堂的玉磬";
		lib.characterTitle.caifuren = "襄江的蒲苇";
		lib.characterTitle.yj_jushou = "监军谋国";
		lib.characterTitle.zhangsong = "怀璧待凤仪";
		lib.characterTitle.zhuhuan = "中洲拒天人";
		lib.characterTitle.xiahoushi = "采缘撷睦";
		lib.characterTitle.panzhangmazhong = "擒龙伏虎";
		lib.characterTitle.zhoucang = "披肝沥胆";
		lib.characterTitle.guanping = "忠臣孝子";
		lib.characterTitle.liaohua = "历尽沧桑";
		lib.characterTitle.chengpu = "三朝虎臣";
		lib.characterTitle.gaoshun = "攻无不克";
		lib.characterTitle.caozhen = "荷国天督";
		lib.characterTitle.wuyi = "建兴鞍辔";
		lib.characterTitle.hanhaoshihuan = "中军之主";
		lib.characterTitle.caorui = "天姿的明君";
		lib.characterTitle.caoxiu = "千里骐骥";
		lib.characterTitle.zhongyao = "正楷萧曹";
		lib.characterTitle.liuchen = "血荐轩辕";
		lib.characterTitle.zhangyi = "通壮逾古";
		lib.characterTitle.sunxiu = "弥殇的景君";
		lib.characterTitle.zhuzhi = "王事靡盬";
		lib.characterTitle.quancong = "慕势耀族";
		lib.characterTitle.gongsunyuan = "狡徒悬海";
		lib.characterTitle.guotufengji = "凶蛇两端";
		lib.characterTitle.xin_liru = "魔仕";
		lib.characterTitle.guohuanghou = "月华驱霾";
		lib.characterTitle.liuyu = "甘棠永固";
		lib.characterTitle.liyan = "矜风流务";
		lib.characterTitle.sundeng = "才高德茂";
		lib.characterTitle.cenhun = "伐梁倾瓴";
		lib.characterTitle.huanghao = "便辟佞慧";
		lib.characterTitle.zhangrang = "窃幸绝禋";
		lib.characterTitle.sunziliufang = "服谗搜慝";
		lib.characterTitle.xinxianying = "名门智女";
		lib.characterTitle.wuxian = "穆皇后";
		lib.characterTitle.xushi = "节义双全";
		lib.characterTitle.caojie = "献穆皇后";
		lib.characterTitle.caiyong = "大鸿儒";
		lib.characterTitle.jikang = "峻峰孤松";
		lib.characterTitle.qinmi = "彻天之舌";
		lib.characterTitle.xuezong = "彬彬之玊";
		lib.characterTitle.old_huaxiong = "魔将";
		lib.characterTitle.yujin = "讨暴坚垒";
		lib.characterTitle.linghuyu = "名愚性浚";
		lib.characterTitle.yj_simafu = "仁孝忠德";
		lib.characterTitle.yj_xuangongzhu = "高陵翩蝶";
		lib.characterTitle.xukun = "平虏击逆";
		lib.characterTitle.yj_majun = "名巧天下";
		// extra:'神将',
		lib.characterTitle.shen_huangzhong = "战意破苍穹";
		lib.characterTitle.new_simayi = "晋国之祖";
		lib.characterTitle.xin_simayi = lib.characterTitle.new_simayi;
		lib.characterTitle.dc_shen_huatuo = "灵魂的医者";
		lib.characterTitle.shen_xuzhu = "嗜战的熊罴";
		lib.characterTitle.shen_lusu = "兴吴之邓禹";
		lib.characterTitle.shen_huatuo = "悬壶济世";
		lib.characterTitle.le_shen_jiaxu = "倒悬云衢";
		lib.characterTitle.shen_dianwei = "襢裼暴虎";
		lib.characterTitle.shen_dengai = "带砺山河";
		lib.characterTitle.tw_shen_lvmeng = "圣光之国士";
		lib.characterTitle.shen_zhangjiao = "末世的起首";
		lib.characterTitle.shen_zhangfei = "两界大巡环使";
		lib.characterTitle.tw_shen_guanyu = "鬼神再临";
		lib.characterTitle.shen_machao = "神威天将军";
		lib.characterTitle.shen_sunquan = "东吴大帝";
		lib.characterTitle.shen_jiangwei = "怒麟布武";
		lib.characterTitle.shen_sunce = "踞江鬼雄";
		lib.characterTitle.shen_xunyu = "洞心先识";
		lib.characterTitle.shen_taishici = "义信天武";
		lib.characterTitle.shen_guojia = "星月奇佐";
		lib.characterTitle.shen_diaochan = "欲界非天";
		lib.characterTitle.shen_guanyu = "鬼神再临";
		lib.characterTitle.shen_zhaoyun = "神威如龙";
		lib.characterTitle.shen_zhugeliang = "赤壁的妖术师";
		lib.characterTitle.shen_lvmeng = "圣光之国士";
		lib.characterTitle.shen_zhouyu = "赤壁的火神";
		lib.characterTitle.shen_simayi = lib.characterTitle.new_simayi;
		lib.characterTitle.shen_caocao = "超世之英杰";
		lib.characterTitle.shen_lvbu = "修罗之道";
		lib.characterTitle.shen_liubei = "誓守桃园义";
		lib.characterTitle.shen_luxun = "红莲业火";
		lib.characterTitle.shen_zhangliao = "雁门之刑天";
		lib.characterTitle.shen_ganning = "江表之力牧";
		lib.characterTitle.ol_zhangliao = "雁门之刑天";
		lib.characterTitle.shen_caopi = "诰天仰颂";
		lib.characterTitle.shen_zhenji = "洛水凌波";
		lib.characterTitle.boss_zhaoyun = "天龙乘云";
		// onlyOL:'OL专属',
		lib.characterTitle.ol_caozhang = lib.characterTitle.caozhang;
		lib.characterTitle.ol_jianyong = lib.characterTitle.jianyong;
		lib.characterTitle.ol_lingtong = lib.characterTitle.lingtong;
		lib.characterTitle.ol_gaoshun = lib.characterTitle.gaoshun;
		lib.characterTitle.ol_yufan = lib.characterTitle.yufan;
		lib.characterTitle.ol_chengpu = lib.characterTitle.chengpu;
		lib.characterTitle.ol_wangyi = lib.characterTitle.wangyi;
		lib.characterTitle.ol_fazheng = lib.characterTitle.xin_fazheng;
		lib.characterTitle.ol_caifuren = lib.characterTitle.caifuren;
		lib.characterTitle.ol_liru = lib.characterTitle.xin_liru;
		lib.characterTitle.ol_liubiao = lib.characterTitle.liubiao;
		lib.characterTitle.ol_wuguotai = lib.characterTitle.wuguotai;
		lib.characterTitle.ol_zhangchunhua = lib.characterTitle.zhangchunhua;
		lib.characterTitle.ol_caochong = lib.characterTitle.caochong;
		lib.characterTitle.ol_caozhi = lib.characterTitle.caozhi;
		lib.characterTitle.cuiyan = "伯夷之风";
		lib.characterTitle.huangfusong = "志定雪霜";
		lib.characterTitle.sp_dongzhuo = lib.characterTitle.dongzhuo;
		lib.characterTitle.hanba = "如惔如焚";
		lib.characterTitle.caiyang = "古城勇将";
		// sbfm: "上兵伐谋",
		lib.characterTitle.ol_sb_yuanshu = "画脂镂冰";
		lib.characterTitle.ol_sb_sunjian = "乌程侯";
		lib.characterTitle.ol_sb_jiangwei = "炎志灼心";
		lib.characterTitle.ol_sb_guanyu = "威震华夏";
		lib.characterTitle.ol_sb_taishici = "矢志全忠孝";
		lib.characterTitle.ol_sb_yuanshao = "席卷八荒";
		lib.characterTitle.ol_sb_pangtong = "定鼎巴蜀";
		lib.characterTitle.ol_sb_kongrong = "豪气贯长虹";
		// sp:'璀璨星河',
		lib.characterTitle.hansui = "雄踞北疆";
		lib.characterTitle.fanjiangzhangda = "你死我亡";
		lib.characterTitle.wutugu = "霸体金刚";
		lib.characterTitle.dongbai = "魔姬";
		lib.characterTitle.daxiaoqiao = "江东之花";
		lib.characterTitle.zhangren = "索命神射";
		// clan:'门阀士族',
		lib.characterTitle.clan_wuxian = "淇水汤汤";
		lib.characterTitle.clan_wuban = "豪侠督进";
		lib.characterTitle.clan_xunshu = "八龙飞世";
		lib.characterTitle.clan_xunchen = "挈怯恇恇";
		lib.characterTitle.clan_xuncai = "怀刃自誓";
		lib.characterTitle.clan_xuncan = "分钗断带";
		lib.characterTitle.clan_hanshao = "为民收官";
		lib.characterTitle.clan_hanrong = "虎口扳渡";
		lib.characterTitle.clan_wukuang = "抗驳专挟";
		lib.characterTitle.clan_wangling = "荧惑守斗";
		lib.characterTitle.clan_zhongyan = "紫闼飞莺";
		lib.characterTitle.clan_wangyun = "曷丧偕亡";
		lib.characterTitle.clan_wanghun = "献捷横江";
		lib.characterTitle.clan_zhonghui = "百巧惎";
		lib.characterTitle.clan_zhongyu = "础润殷忧";
		lib.characterTitle.clan_wanglun = "半缘修道";
		lib.characterTitle.clan_xunyou = "深密绝谟";
		lib.characterTitle.clan_wuqiao = "孤节卅岁";
		lib.characterTitle.clan_wangguang = "才性离异";
		lib.characterTitle.clan_wangmingshan = "擅书多艺";
		lib.characterTitle.clan_zhongyao = "开达理干";
		// yingbian:'文德武备',
		lib.characterTitle.chengjichengcui = "袒忿半瓦";
		lib.characterTitle.wangxiang = "沂川跃鲤";
		lib.characterTitle.jin_jiachong = "鲁郡公";
		lib.characterTitle.xuangongzhu = "高陵公主";
		lib.characterTitle.xinchang = "英鉴中铭";
		lib.characterTitle.yangzhi = "武悼皇后";
		lib.characterTitle.yangyan = "武元皇后";
		lib.characterTitle.ol_huaxin = "渊清玉洁";
		lib.characterTitle.zhongyan = "聪慧弘雅";
		lib.characterTitle.weiguan = "兰陵郡公";
		lib.characterTitle.cheliji = "高凉铁骨";
		lib.characterTitle.simazhou = "琅琊武王";
		lib.characterTitle.ol_lisu = "巧言令色";
		lib.characterTitle.jin_yanghuiyu = "景献皇后";
		lib.characterTitle.shibao = "乐陵郡公";
		lib.characterTitle.jin_zhangchunhua = "宣穆皇后";
		lib.characterTitle.jin_simayi = "通达权变";
		lib.characterTitle.jin_wangyuanji = "文明皇后";
		lib.characterTitle.jin_simazhao = "晋文帝";
		lib.characterTitle.jin_xiahouhui = "景怀皇后";
		lib.characterTitle.jin_simashi = "晋景王";
		lib.characterTitle.zhanghuyuechen = "不辱门庭";
		lib.characterTitle.duyu = "文成武德";
		// xinghuoliaoyuan:'星火燎原',
		lib.characterTitle.wangcan = "七子之冠冕";
		lib.characterTitle.sp_taishici = "北海酬恩";
		lib.characterTitle.re_jsp_pangtong = "南州士冠";
		lib.characterTitle.lvdai = "清身奉公";
		lib.characterTitle.re_zhangliang = "人公将军";
		lib.characterTitle.lvqian = "恩威并诸";
		lib.characterTitle.panjun = "方严疾恶";
		lib.characterTitle.duji = "卧镇京畿";
		lib.characterTitle.zhoufang = "断发载义";
		lib.characterTitle.yanjun = "志存补益";
		lib.characterTitle.liuyao = "宗英外镇";
		lib.characterTitle.liuyan = "裂土之宗";
		lib.characterTitle.star_xunyu = "怀忠念治";
		lib.characterTitle.star_zhangzhao = "忠謇方直";
		lib.characterTitle.star_sunjian = "破虏将军";
		lib.characterTitle.star_zhangchunhua = "皑雪皎月";
		lib.characterTitle.star_yuanshao = "熏灼群魔";
		lib.characterTitle.star_dongzhuo = "千里草的魔阀";
		lib.characterTitle.star_yuanshu = "狂貔猖貅";
		lib.characterTitle.star_caoren = "伏波四方";
		lib.characterTitle.star_sunshangxiang = "鸳袖衔剑珮";
		// mdtx: "谋定天下",
		lib.characterTitle.dc_sb_chenlin = "文翻云海";
		lib.characterTitle.dc_sb_jushou = "忠不逢时";
		lib.characterTitle.dc_sb_chengyu = "沐风知秋";
		lib.characterTitle.yj_sb_guojia = "翼谋奇佐";
		lib.characterTitle.dc_sb_zhangxiu = "凌枪破宛";
		lib.characterTitle.dc_sb_hucheer = "有力逮戟";
		lib.characterTitle.dc_sb_guanping = "百战烈烈";
		lib.characterTitle.dc_sb_caoang = "两全忠孝";
		lib.characterTitle.dc_sb_dianwei = "狂战怒莽";
		lib.characterTitle.dc_caoshuang = "托孤傲臣";
		lib.characterTitle.dc_simashi = "唯几成务";
		lib.characterTitle.dc_wangling = "风节格尚";
		lib.characterTitle.dc_jiangji = "策论万机";
		lib.characterTitle.dc_sb_zhugejin = "清雅德纯";
		lib.characterTitle.dc_sb_jiaxu = "晦谋独善";
		lib.characterTitle.dc_sb_simayi = "韬谋韫势";
		lib.characterTitle.dc_sb_zhouyu = "炽谋英隽";
		lib.characterTitle.dc_sb_lusu = "鸿谋翼远";
		// huicui:'群英荟萃',
		lib.characterTitle.yue_zhugeguo = "";
		lib.characterTitle.yue_zoushi = "淯水吟";
		lib.characterTitle.yue_miheng = "鹗立鸷群";
		lib.characterTitle.yue_daqiao = "玉桐姊韵";
		lib.characterTitle.yue_xiaoqiao = "绿绮嫒媛";
		lib.characterTitle.yue_caiyong = "焦尾识音";
		lib.characterTitle.yue_zhoufei = "芙蓉泣露";
		lib.characterTitle.yue_caiwenji = "胡笳十八拍";
		lib.characterTitle.gaoxiang = "玄乡侯";
		lib.characterTitle.zhangchu = "大贤后裔";
		lib.characterTitle.liuyong = "甘陵王";
		lib.characterTitle.zhangxuan = "玉宇嫁蔷";
		// xianding:'限定专属',
		lib.characterTitle.wu_huangfusong = "";
		lib.characterTitle.sp_zhenji = "善言贤女";
		lib.characterTitle.wu_guanyu = "义武千秋";
		lib.characterTitle.caofang = "迷瞑终觉";
		lib.characterTitle.zhangjian = "";
		lib.characterTitle.wu_luxun = "释武怀儒";
		lib.characterTitle.dc_daxiaoqiao = lib.characterTitle.daxiaoqiao;
		lib.characterTitle.wu_zhugeliang = "忠武良弼";
		lib.characterTitle.caomao = "霸业的终耀";
		lib.characterTitle.guozhao = "碧海青天";
		// sp2:'系列专属',
		lib.characterTitle.weiwenzhugezhi = "帆至夷州";
		lib.characterTitle.xushao = "识人读心";
		lib.characterTitle.zhangchangpu = "矜严明训";
		// mobile:'移动版',
		lib.characterTitle.mb_simazhou = "温恭克己";
		lib.characterTitle.mb_wenqin = "淮山骄腕";
		lib.characterTitle.mb_simafu = "阐忠弘道";
		lib.characterTitle.mb_sp_guanqiujian = "才识拔干";
		lib.characterTitle.mb_caomao = "向死存魏";
		lib.characterTitle.chengji = "劣犬良弓";
		lib.characterTitle.lizhaojiaobo = "竭诚尽节";
		lib.characterTitle.muludawang = "八纳洞主";
		lib.characterTitle.yj_zhoubuyi = "稚雀清声";
		lib.characterTitle.shichangshi = "祸乱纲常";
		lib.characterTitle.yj_weiyan = "骜勇孤战";
		lib.characterTitle.xin_jushou = lib.characterTitle.yj_jushou;
		lib.characterTitle.yj_huangzhong = "强挚烈弓";
		lib.characterTitle.nanhualaoxian = "冯虚御风";
		lib.characterTitle.xin_hansui = lib.characterTitle.hansui;
		lib.characterTitle.yj_zhangliao = "蹈锋饮血";
		lib.characterTitle.yj_zhanghe = "宁国中郎将";
		lib.characterTitle.yj_xuhuang = "沉详性严";
		lib.characterTitle.yj_ganning = "铃震没羽";
		lib.characterTitle.yangbiao = "德彰海内";
		lib.characterTitle.mb_wangjing = "青云孤竹";
		lib.characterTitle.re_xugong = "独计击流";
		// sb:'谋攻篇',
		lib.characterTitle.sb_zhugejin = "才猷蕴借";
		lib.characterTitle.sb_jiaxu = "计深似海";
		lib.characterTitle.sb_handang = lib.characterTitle.handang;
		lib.characterTitle.sb_gongsunzan = "劲震幽土";
		lib.characterTitle.sb_gaoshun = lib.characterTitle.gaoshun;
		lib.characterTitle.sb_xiahoudun = lib.characterTitle.xiahoudun;
		lib.characterTitle.sb_xunyu = lib.characterTitle.xunyu;
		lib.characterTitle.sb_caopi = "魏文帝";
		lib.characterTitle.sb_guanyu = "关圣帝君";
		lib.characterTitle.sb_huangyueying = "足智多谋";
		lib.characterTitle.sb_sp_zhugeliang = "忠武侯";
		lib.characterTitle.sb_zhanghe = lib.characterTitle.zhanghe;
		lib.characterTitle.sb_yujin = "威严毅重";
		lib.characterTitle.sb_huaxiong = "跋扈雄狮";
		lib.characterTitle.liucheng = "泣梧的湘女";
		lib.characterTitle.sp_yangwan = "迷计惑心";
		lib.characterTitle.sb_huangzhong = "没金铩羽";
		lib.characterTitle.sb_lvmeng = "苍江一笠";
		lib.characterTitle.sb_sunshangxiang = "骄豪明俏";
		lib.characterTitle.sb_sunquan = "江东大帝";
		lib.characterTitle.sb_huanggai = lib.characterTitle.huanggai;
		lib.characterTitle.sb_zhouyu = "江淮之杰";
		lib.characterTitle.sb_caoren = "固若金汤";
		lib.characterTitle.sb_xiahoushi = "燕语呢喃";
		lib.characterTitle.sb_zhangjiao = "驱雷掣电";
		lib.characterTitle.sb_caocao = "魏武大帝";
		lib.characterTitle.sb_zhenji = "薄幸幽兰";
		lib.characterTitle.sb_ganning = "兴王定霸";
		lib.characterTitle.sb_machao = "阻戎负勇";
		lib.characterTitle.sb_xuhuang = "径行截辎";
		lib.characterTitle.sb_zhangfei = "义付桃园";
		lib.characterTitle.sb_zhaoyun = "七进七出";
		lib.characterTitle.sb_liubei = "雄才盖世";
		lib.characterTitle.sb_jiangwei = "见危授命";
		lib.characterTitle.sb_fazheng = "经学思谋";
		lib.characterTitle.sb_chengong = lib.characterTitle.chengong;
		lib.characterTitle.sb_diaochan = "离间计";
		lib.characterTitle.sb_yuanshao = lib.characterTitle.re_yuanshao;
		lib.characterTitle.sb_pangtong = "铁索连舟";
		lib.characterTitle.sb_sunce = "江东小霸王";
		lib.characterTitle.sb_daqiao = "国色芳华";
		lib.characterTitle.sb_liubiao = "荆襄霸主";
		lib.characterTitle.sb_zhurong = lib.characterTitle.zhurong;
		lib.characterTitle.sb_menghuo = lib.characterTitle.menghuo;
		lib.characterTitle.sb_yl_luzhi = lib.characterTitle.yl_luzhi;
		lib.characterTitle.sb_xiaoqiao = lib.characterTitle.xiaoqiao;
		lib.characterTitle.sb_luxun = lib.characterTitle.luxun;
		// shiji:'始计篇',
		lib.characterTitle.liuba = "撰科行律";
		lib.characterTitle.sp_zhujun = "功成师克";
		lib.characterTitle.sp_huangfusong = "铁血柔肠";
		lib.characterTitle.sp_lvfan = "持筹廉悍";
		lib.characterTitle.sp_jiangqing = "折节尚义";
		lib.characterTitle.sp_jiangwan = "方整威重";
		lib.characterTitle.sp_zhangchangpu = "厉色严教";
		lib.characterTitle.sp_cuiyan = "伯夷之风";
		lib.characterTitle.sp_huaman = "薮泽清影";
		lib.characterTitle.sp_gaolan = "绝击坚营";
		lib.characterTitle.sunyi = "骁悍激躁";
		lib.characterTitle.sp_wangshuang = "边城猛兵";
		lib.characterTitle.sp_zongyu = "御严无惧";
		lib.characterTitle.yuanhuan = "随车致雨";
		lib.characterTitle.sp_chendong = "殒身不恤";
		lib.characterTitle.db_wenyang = "独骑破军";
		lib.characterTitle.sp_yanghu = "鹤德璋声";
		lib.characterTitle.qiaogong = "高风硕望";
		lib.characterTitle.liuzhang = "半圭黯暗";
		lib.characterTitle.sp_zhangwen = "抱德炀和";
		lib.characterTitle.zhangzhongjing = "医理圣哲";
		lib.characterTitle.sp_xujing = "篡贤取良";
		lib.characterTitle.sp_huaxin = "清素拂浊 ";
		lib.characterTitle.xiangchong = "镇军之岳";
		lib.characterTitle.caizhenji = "舍心顾复";
		lib.characterTitle.sp_kongrong = "凛然重义";
		lib.characterTitle.zhouchu = "英情天逸";
		lib.characterTitle.wangfuzhaolei = "忱忠不移";
		lib.characterTitle.wangling = "风节格尚";
		lib.characterTitle.wujing = "助吴征战";
		lib.characterTitle.sp_mifuren = "乱世沉香";
		lib.characterTitle.sp_xinpi = "一节肃六军";
		lib.characterTitle.feiyi = "洞世权相";
		lib.characterTitle.sp_bianfuren = "内助贤后";
		lib.characterTitle.sp_duyu = "文成武德";
		lib.characterTitle.luotong = "力政人臣";
		lib.characterTitle.sp_wangcan = "词章纵横";
		lib.characterTitle.sp_chenzhen = "歃盟使节";
		lib.characterTitle.sp_sunshao = "创基抉政";
		lib.characterTitle.sp_xunchen = "谋刃略锋";
		// tw:'外服武将',
		lib.characterTitle.huan_luxun = "审机而行";
		lib.characterTitle.huan_liushan = "汉祚永延";
		lib.characterTitle.licuilianzhaoquanding = "望子成龙";
		lib.characterTitle.huan_zhugeliang = "天意可叹";
		lib.characterTitle.huan_jiangwei = "麒麟擎汉";
		lib.characterTitle.huan_zhugeguo = "悠游清汉";
		lib.characterTitle.huan_zhanghe = "追敌入彀";
		lib.characterTitle.huan_zhaoyun = "天武耆龙";
		lib.characterTitle.huan_simayi = "权谋并施";
		lib.characterTitle.huan_weiyan = "自矜功伐";
		lib.characterTitle.tw_yanliang = "何惧华雄";
		lib.characterTitle.tw_wenchou = "有去无回";
		lib.characterTitle.tw_niufudongxie = "虺伴蝎行";
		lib.characterTitle.tw_daxiaoqiao = lib.characterTitle.daxiaoqiao;
		lib.characterTitle.kaisa = "Caesar";
		// offline:'线下武将',
		// lib.characterTitle.ty_sunquan = "大汉吴王";
		lib.characterTitle.ty_sunquan = "大蜀吴王";//彩蛋
		lib.characterTitle.ty_guanyu = "卷土重来";
		lib.characterTitle.jd_simayan = "晋武帝";
		lib.characterTitle.yj_tianchuan = "狐影刺客";
		lib.characterTitle.yj_zhonghui = "统定河山";
		lib.characterTitle.yj_ehuan = "牙门勇将";
		lib.characterTitle.yj_zhouji = "江东的红莲";
		lib.characterTitle.drag_guanyu = "国士无双";
		lib.characterTitle.drag_caoren = "玉钤奉国";
		lib.characterTitle.drag_lvchang = "险守襄阳";
		lib.characterTitle.jsp_caoren = "险不辞难";
		lib.characterTitle.sp_liubei = "汉昭烈帝";
		lib.characterTitle.sp_zhangfei = "横矛立马";
		lib.characterTitle.sp_xiahoudun = "啖睛的苍狼";
		lib.characterTitle.sp_ganning = "怀铃的乌羽";
		lib.characterTitle.sp_daqiao = "韶光易逝";
		lib.characterTitle.sp_pangtong = "荆楚之高俊";
		lib.characterTitle.sp_gongsunzan = "白马将军";
		lib.characterTitle.sp_wangyuanji = "文明皇后";
		lib.characterTitle.sp_liuxie = "汉献帝";
		// jsrg:'江山如故',
		lib.characterTitle.jsrg_liuhong = "轧庭焚礼";
		lib.characterTitle.jsrg_hejin = "独意误国谋";
		lib.characterTitle.jsrg_sunjian = "拨定烈志";
		lib.characterTitle.jsrg_huangfusong = "安危定倾";
		lib.characterTitle.jsrg_xushao = lib.characterTitle.xushao;
		lib.characterTitle.jsrg_dongbai = lib.characterTitle.dongbai;
		lib.characterTitle.jsrg_qiaoxuan = "泛爱博容";
		lib.characterTitle.jsrg_yangbiao = lib.characterTitle.yangbiao;
		lib.characterTitle.jsrg_kongrong = "北海太守";
		lib.characterTitle.jsrg_zhujun = "征无遗虑";
		lib.characterTitle.jsrg_liubei = "负戎荷戈";
		lib.characterTitle.jsrg_wangyun = "居功自矜";
		lib.characterTitle.jsrg_liuyan = lib.characterTitle.liuyan;
		lib.characterTitle.jsrg_caocao = "汉征西将军";
		lib.characterTitle.jsrg_nanhualaoxian = lib.characterTitle.nanhualaoxian;
		lib.characterTitle.jsrg_sunce = "问鼎的霸王";
		lib.characterTitle.jsrg_xuyou = "毕方矫翼";
		lib.characterTitle.jsrg_lvbu = "虎视中原";
		lib.characterTitle.jsrg_zhanghe = "微子去殷";
		lib.characterTitle.jsrg_zoushi = "淯水香魂";
		lib.characterTitle.jsrg_guanyu = "羊左之义";
		lib.characterTitle.jsrg_chendeng = "惊涛弄潮";
		lib.characterTitle.jsrg_zhenji = "一顾倾国";
		lib.characterTitle.jsrg_zhangliao = "利刃风骑";
		lib.characterTitle.jsrg_xugong = lib.characterTitle.re_xugong;
		lib.characterTitle.jsrg_chunyuqiong = "乌巢酒仙";
		lib.characterTitle.jsrg_guojia = "赤壁的先知";
		lib.characterTitle.jsrg_zhangfei = "长坂之威";
		lib.characterTitle.jsrg_machao = "潼关之勇";
		lib.characterTitle.jsrg_lougui = "梦梅居士";
		lib.characterTitle.jsrg_zhangren = lib.characterTitle.zhangren;
		lib.characterTitle.jsrg_huangzhong = "定军之英";
		lib.characterTitle.jsrg_xiahourong = "擐甲执兵";
		lib.characterTitle.jsrg_sunshangxiang = "情断吴江";
		lib.characterTitle.jsrg_pangtong = lib.characterTitle.sp_pangtong;
		lib.characterTitle.jsrg_hansui = lib.characterTitle.hansui;
		lib.characterTitle.jsrg_zhangchu = lib.characterTitle.zhangchu;
		lib.characterTitle.jsrg_xiahouen = "背剑之将";
		lib.characterTitle.jsrg_fanjiangzhangda = lib.characterTitle.fanjiangzhangda;
		lib.characterTitle.jsrg_zhugeliang = "炎汉忠魂";
		lib.characterTitle.jsrg_jiangwei = "赤血化龙";
		lib.characterTitle.jsrg_luxun = "却敌安疆";
		lib.characterTitle.jsrg_zhaoyun = "北伐之柱";
		lib.characterTitle.jsrg_simayi = "危崖隐羽";
		lib.characterTitle.jsrg_guoxun = "秉心不回";
		lib.characterTitle.jsrg_sunlubansunluyu = "恶紫夺朱";
		lib.characterTitle.jsrg_caofang = "引狼入庙";
		lib.characterTitle.jsrg_sunjun = "朋党执虎";
		lib.characterTitle.jsrg_liuyong = lib.characterTitle.liuyong;
		lib.characterTitle.jsrg_weiwenzhugezhi = lib.characterTitle.weiwenzhugezhi;
		lib.characterTitle.jsrg_zhangxuan = lib.characterTitle.zhangxuan;
		lib.characterTitle.jsrg_gaoxiang = lib.characterTitle.gaoxiang;
		lib.characterTitle.jsrg_guozhao = lib.characterTitle.guozhao;
		lib.characterTitle.jsrg_yuanshao = "号令天下";
		lib.characterTitle.jsrg_caojiewangfu = "浊乱海内";
		lib.characterTitle.jsrg_songhuanghou = "兰心蕙质";
		lib.characterTitle.jsrg_zhangjiao = "万蛾赴火";
		lib.characterTitle.jsrg_yangqiu = "身蹈水火";
		lib.characterTitle.jsrg_dongzhuo = "华夏震栗";
		lib.characterTitle.jsrg_zhanghuan = "正身洁己";
		lib.characterTitle.jsrg_liubiao = "单骑入荆";
		lib.characterTitle.jsrg_yl_luzhi = "眸宿渊渟";
		lib.characterTitle.jsrg_chenfan = "不畏强御";
		lib.characterTitle.jsrg_zhangju = "草头天子";
		lib.characterTitle.jsrg_jiananfeng = "";
		lib.characterTitle.jsrg_wenyang = "";
		lib.characterTitle.jsrg_zhugedan = "";
		lib.characterTitle.jsrg_wangjun = "";
		lib.characterTitle.jsrg_limi = "";
		// sixiang: "四象封印",
		lib.characterTitle.std_sunhao = "";
		lib.characterTitle.std_mateng = "勇冠西州";
		lib.characterTitle.std_mayunlu = "";
		lib.characterTitle.std_jianggan = "";
		lib.characterTitle.std_zhouchu = "";
		lib.characterTitle.std_lvlingqi = "";
		lib.characterTitle.std_dc_yanghu = "";
		lib.characterTitle.std_dc_luotong = "";
		lib.characterTitle.std_lijue = "";
		lib.characterTitle.std_chengpu = "";
		lib.characterTitle.std_db_wenyang = "";
		lib.characterTitle.std_re_dengzhi = "";
		lib.characterTitle.std_zhangyì = "";
		lib.characterTitle.std_chengyu = "";
		lib.characterTitle.std_fanyufeng = "";
		lib.characterTitle.std_feiyi = "";
		lib.characterTitle.std_guanxing = "龙骧将军";
		lib.characterTitle.std_fuhuanghou = "";
		lib.characterTitle.std_liubiao = "";
		lib.characterTitle.std_gongsunyuan = "";
		lib.characterTitle.std_cenhun = "";
		lib.characterTitle.std_simashi = "";
		lib.characterTitle.std_sunshao = "";
		lib.characterTitle.std_jiangwan = "";
		lib.characterTitle.std_maliang = "";
		lib.characterTitle.std_xushu = "";
		lib.characterTitle.std_xuezong = "";
		lib.characterTitle.std_liuzhang = "";
		lib.characterTitle.std_wangyuanji = "";
		lib.characterTitle.std_wanglang = "";
		lib.characterTitle.std_zhonghui = "";
		lib.characterTitle.std_huaxin = "";
		// collab:'联动卡',
		lib.characterTitle.liuxiecaojie = "";
		lib.characterTitle.dc_zhaoyun = lib.characterTitle.boss_zhaoyun;
		lib.characterTitle.dc_sunce = lib.characterTitle.sunce;
		lib.characterTitle.nezha = "";
		lib.characterTitle.dc_caocao = lib.characterTitle.caocao;
		lib.characterTitle.dc_liubei = lib.characterTitle.liubei;
		lib.characterTitle.dc_sunquan = lib.characterTitle.sunquan;
		lib.characterTitle.zhutiexiong = "";
		lib.characterTitle.wu_zhutiexiong = "";
		lib.characterTitle.xiaoyuehankehan = "";
		lib.characterTitle.libai = "";
		lib.characterTitle.sunwukong = "";
		lib.characterTitle.longwang = "";
		lib.characterTitle.taoshen = "";
		lib.characterTitle.sunyang = "";
		lib.characterTitle.yeshiwen = "";
		lib.characterTitle.sp_jiben = "";
		lib.characterTitle.sp_fuhuanghou = "";
		lib.characterTitle.sp_fuwan = "";
		lib.characterTitle.old_lingju = "";
		lib.characterTitle.sp_mushun = "";
		lib.characterTitle.dc_wuyi = lib.characterTitle.wuyi;
		lib.characterTitle.quyuan = "";
		lib.characterTitle.xin_sunquan = "";
		lib.characterTitle.wuhujiang = "";
		lib.characterTitle.dc_noname = "";
		lib.characterTitle.xunyuxunyou = "";
		lib.characterTitle.mp_wangrong = "善发谈端";
		lib.characterTitle.mp_liuling = "醉侯";
		lib.characterTitle.mp_xiangxiu = "出尘窥冥";
		// old:'怀旧',
		lib.characterTitle.old_shen_huangzhong = lib.characterTitle.shen_huangzhong;
		lib.characterTitle.junk_zhangjiao = lib.characterTitle.shen_zhangjiao;
		lib.characterTitle.old_shen_zhaoyun = lib.characterTitle.shen_zhaoyun;
		lib.characterTitle.old_caocao = lib.characterTitle.shen_caocao;
		// lib.characterTitle.junk_sunquan = lib.characterTitle.shen_sunquan;
		lib.characterTitle.junk_sunquan = "大魏吴王";//彩蛋
		lib.characterTitle.ol_yuanshu = "野心渐增";
		lib.characterTitle.yuji = lib.characterTitle.re_yuji;
		lib.characterTitle.re_yujin = "魏武之刚";
		// refresh:'界限突破',
		lib.characterTitle.re_xushu = "化剑为犁";
		lib.characterTitle.re_lidian = lib.characterTitle.old_re_lidian;
		lib.characterTitle.re_caorui = lib.characterTitle.caorui;
		lib.characterTitle.re_caocao = lib.characterTitle.caocao;
		lib.characterTitle.re_liubei = lib.characterTitle.liubei;
		lib.characterTitle.re_sunquan = lib.characterTitle.sunquan;
		lib.characterTitle.xin_yuji = lib.characterTitle.re_yuji;
		lib.characterTitle.re_caopi = lib.characterTitle.caopi;
		
		// guozhan.js
		lib.characterTitle.gz_caocao = lib.characterTitle.caocao;
		lib.characterTitle.gz_liubei = lib.characterTitle.liubei;
		lib.characterTitle.gz_sunquan = lib.characterTitle.sunquan;
		lib.characterTitle.gz_zhangjiao = lib.characterTitle.sp_zhangjiao;
		
		lib.characterTitle.gz_dianwei = lib.characterTitle.dianwei;
		lib.characterTitle.gz_guanyu = lib.characterTitle.ol_sb_guanyu;
		lib.characterTitle.gz_sunjian = "魂佑江东";
		lib.characterTitle.gz_lvbu = "戟指中原";
		lib.characterTitle.gz_jin_simashi = lib.characterTitle.jin_simashi;
		
		lib.characterTitle.gz_wujing = "汗马鎏金";
		lib.characterTitle.gz_wenqin = "勇而无算";
		lib.characterTitle.gz_liuba = "清河一鲲";
		lib.characterTitle.gz_yuji = "魂绕左右";
		lib.characterTitle.gz_jiangqing = "祁奚之器";
		lib.characterTitle.gz_chendong = "壮怀激烈";
		lib.characterTitle.gz_bianfuren = "奕世之雍容";
		lib.characterTitle.gz_lvfan = "忠笃亮直";
		
		lib.characterTitle.gz_jun_liubei = "龙横蜀汉";
		lib.characterTitle.gz_jun_zhangjiao = "时代的先驱";
		lib.characterTitle.gz_jun_sunquan = "虎踞江东";
		lib.characterTitle.gz_jun_caocao = "凤舞九霄";
		
	}
	
	// 删除无名杀原版引文
	delete lib.translate.jiedao_append;
	delete lib.translate.duanjian_append;
	delete lib.translate.serafuku_append;
	delete lib.translate.yonglv_append;
	delete lib.translate.xinge_append;
	delete lib.translate.erika_yousheng_append;
	delete lib.translate.satomi_daohai_append;
	delete lib.translate.yuheng_append;
	delete lib.translate.hengwu_append;
	delete lib.translate.shiki_omusubi_append;
	delete lib.translate.boss_yingzhong_append;
	
	// 武将引文补充（缓更中）
	if(config.wujiangyinwen && config.youjiancaidan){
		var isguozhanmode = lib.config.mode === 'guozhan';
		var isversusmode_three = lib.config.mode==='versus'&&get.config('versus_mode')==='three';
		var issinglemode = lib.config.mode === 'single';
		lib.translatecharacterappend={};
		
		function addStyleLeft(content) {
			var styleLeft = `<div style="width:100%;text-align:left;font-size:13px;font-style:italic">“${content}”</div>`;
			return styleLeft;
		}
		function addStyleRight(content) {
			var styleRight = `<br><div style="width:98%;text-align:right;font-size:13px;font-style:italic">${content}</div>`;
			return styleRight;
		}
		// 定义window.setWuJiangYinWenTranslation，扩展可用此法写引文了（开启武将引文补充功能）
		window.setWuJiangYinWenTranslation = function (characterPacks, translationTextLeft, translationTextRight) {
			var style = addStyleLeft(translationTextLeft);
			if (translationTextRight!='') {
				style += addStyleRight(translationTextRight);
			}
			
			// 方案1（已放弃）有问题：别的武将如果有这个技能就会也加上引文，无法实现扩展或本体共用技能时，武将和引文一一对应
			// for (var i = 0; i < characterPacks.length; i += 2) {
				// var condition = characterPacks[i + 1];
				// if (condition) {
					// var extractedContent = eval(characterPacks[i].replace(/^'|'$/g,''));
					// var translationKey = extractedContent[3].slice(-1)[0] + "_append";
					// lib.translate[translationKey] = style;
				// }
			// }
			
			// 方案2：新增武将引文接口，武将和引文一一对应
			// 注：暂时先用lib.characterPack.extra.shen_caocao，实际上只要shen_caocao就行
			for (var i = 0; i < characterPacks.length; i += 2) {
				var condition = characterPacks[i + 1];
				if (condition) {
					var path = characterPacks[i];
					var lastDotIndex = path.lastIndexOf(".");
					var characterName = path.substring(lastDotIndex + 1);
					lib.translatecharacterappend[characterName] = style;
				}
			}
		}
		
		// C
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_caocao',
			true,
		], '山不厌高，海不厌深。周公吐哺，天下归心。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_caocao',
			isguozhanmode,
			'lib.characterPack.standard.caocao',
			isversusmode_three,
			'lib.characterSingle.caocao',
			issinglemode,
		], '宁教我负天下人，休教天下人负我。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.jsrg.jsrg_caocao',
			true,
		], '若天命在吾，吾为周文王矣。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_caohong',
			isguozhanmode,
		], '梁、沛之间，非子廉无有今日。', '——卞皇后');
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.new_caoren',
			true,
			'lib.characterPack.shenhua.old_caoren',
			true,
			'lib.characterPack.mode_guozhan.gz_caoren',
			isguozhanmode,
		], '将军真天人也！', '——陈矫');
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.caozhang',
			true,
		], '长驱蹈匈奴，左顾凌鲜卑。', '——曹植');
		// D
		setWuJiangYinWenTranslation([
			'lib.characterPack.shenhua.dengai',
			true,
		], '马到山根断，兵来石径分。', '——《三国演义》');
		// G
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.ganning',
			true,
			'lib.characterPack.mode_guozhan.gz_ganning',
			isguozhanmode,
			'lib.characterSingle.ganning',
			issinglemode,
		], '孟德有张辽，孤有甘兴霸，足以相敌也！', '——孙权');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.guanyu',
			true,
			'lib.characterPack.mode_guozhan.gz_guanyu',
			isguozhanmode,
		], '孟起虽雄烈过人，亦乃黥布、彭越之徒耳；当与翼德并驱争先，犹未及美髯公之绝伦超群也。', '——诸葛亮');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_guanyu',
			true,
		], '他回来了，带着一身新装备——鬼龙斩月刀和梦魇赤兔马。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.jsrg.jsrg_guojia',
			true,
		], '虽然天数三分定，妙算神机亦可图。若是当时存奉孝，难容西蜀与东吴。', '——《三国演义》');
		// H
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.old_huaxiong',
			true,
		], '潘凤又被华雄斩了！', '——飞马来报');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.huaxiong',
			true,
		], '小将愿往斩华雄头，献于帐下！', '——关羽');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.huanggai',
			true,
			'lib.characterPack.mode_guozhan.gz_huanggai',
			isguozhanmode,
			'lib.characterSingle.huanggai',
			issinglemode,
		], '某受孙氏厚恩，虽肝脑涂地，亦无怨悔。', '');
		// J
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_jiangfei',
			isguozhanmode,
		], '蒋琬、费祎荷国之重，亦见谥。', '——《后主传》');
		setWuJiangYinWenTranslation([
			'lib.characterPack.shenhua.jiangwei',
			true,
		], '大胆应无惧，雄心誓不回。', '——《三国演义》');
		// K
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_kongrong',
			isguozhanmode,
		], '融负有高气，志在靖难，而才疏意广，迄无成功。', '——《后汉书》');
		// L
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.lingtong',
			true,
			'lib.characterPack.old.old_lingtong',
			true,
		], '公绩，亡者已矣，苟使卿在，何患无人？', '——孙权');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_liubei',
			isguozhanmode,
		], '先主之弘毅宽厚，知人待士，盖有高祖之风，英雄之器焉。', '——陈寿');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.lvbu',
			true,
			'lib.characterPack.mode_guozhan.gz_lvbu',
			isguozhanmode,
		// ], '骁勇无敌，善战无前，然勇而少谋，暴而少仁。', '——陈宫'); // 旧版
		], '吕布壮士，善战无前。', '——陈宫');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_lvbu',
			true,
		], '颤抖着滚开吧杂鱼们！这世上还有谁能满足我！？', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.lvmeng',
			true,
			'lib.characterPack.mode_guozhan.gz_lvmeng',
			isguozhanmode,
		], '吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。', '——陈寿');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_lvmeng',
			true,
		], '看那温暖而盛情的光芒，我们别无选择。', '');
		// M
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.old_madai',
			true,
			'lib.characterPack.old.madai',
			true,
		], '吾敢杀汝！', '');
		// P
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.panfeng',
			true,
			'lib.characterPack.mode_guozhan.gz_panfeng',
			isguozhanmode,
		], '吾有上将潘凤，可斩华雄。', '——韩馥');
		// S
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_simayi',
			true,
		], '终于，结束了么……', '“不，这是新的开始。”');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_sunquan',
			isguozhanmode,
		], '生子当如孙仲谋。', '——曹操');
		setWuJiangYinWenTranslation([
			'lib.characterPack.jsrg.jsrg_sunce',
			true,
		], '然策一举而遂收江东，为鼎足之资，使之不死，当为魏之大患。', '——何去非');
		// W
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.wangyi',
			true,
			'lib.characterPack.old.old_wangyi',
			true,
		], '凡自冀城之难，至于祁山，昂出九奇，异辄参焉。', '——《列女传》');
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.weiyan',
			true,
			'lib.characterPack.mode_guozhan.gz_weiyan',
			isguozhanmode,
			'lib.characterSingle.weiyan',
			issinglemode,
		], '谁敢杀我？', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.sp.wenpin',
			isversusmode_three,
		], '仲业，卿真忠臣也。', '——曹操');
		// X
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.xiahoudun',
			true,
			'lib.characterPack.mode_guozhan.gz_xiahoudun',
			isguozhanmode,
			'lib.characterPack.standard.xiahoudun',
			isversusmode_three,
			'lib.characterSingle.xiahoudun',
			issinglemode,
		], '惇，魏之元功，勋书竹帛。', '——司马炎');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.xuzhu',
			true,
			'lib.characterPack.mode_guozhan.gz_xuzhu',
			isguozhanmode,
		], '吾见恶战者莫如许褚，真虎痴也！', '——马超');
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.xuhuang',
			true,
			'lib.characterPack.mode_guozhan.gz_xuhuang',
			isguozhanmode,
			'lib.characterSingle.xuhuang',
			issinglemode,
		], '古人患不遭明君，今幸遇之，当以功自效，何用私誉为！', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.old_xusheng',
			true,
			'lib.characterPack.mode_guozhan.gz_xusheng',
			isguozhanmode,
		], '江东将相如此，非久下人者也。', '——邢贞');
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.xunyou',
			true,
		], '庶乎算无遗策，经达权变，其良、平之亚欤！', '——陈寿');
		// Y
		setWuJiangYinWenTranslation([
			'lib.characterPack.old.re_yujin',
			true,
		], '太祖建兹武功，而时之良将，五子为先，于禁最号毅重，然弗克其终。', '——陈寿');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_re_yuanshao',
			isguozhanmode,
		], '振一郡之卒，撮冀州之众，威震河朔，名重天下。', '——沮授');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_yuejin',
			isguozhanmode,
		], '乐进以骁果显名，而鉴其行事，未副所闻。', '——陈寿');
		// Z
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_zangba',
			isguozhanmode,
		], '若假霸步骑万人，必能横行江表。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.yijiang.zhangchunhua',
			true,
		], '宣穆阅礼，偶德潜鳞，翊天造之艰虞，嗣涂山之逸响，宝运归其后胤，盖有母仪之助焉。', '——《晋书·后妃传》');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.zhangfei',
			true,
			'lib.characterPack.mode_guozhan.gz_zhangfei',
			isguozhanmode,
			'lib.characterSingle.zhangfei',
			issinglemode,
		], '吾乃燕人张翼德也，谁敢与我决一死战！', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.mode_guozhan.gz_jun_zhangjiao',
			isguozhanmode,
		], '苍天已死，黄天当立，岁在甲子，天下大吉。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.zhangliao',
			true,
			'lib.characterPack.refresh.re_zhangliao',
			true,
			'lib.characterPack.mode_guozhan.gz_zhangliao',
			isguozhanmode,
		], '张辽虽病，不可挡也，慎之！', '——孙权');
		setWuJiangYinWenTranslation([
			'lib.characterPack.standard.zhaoyun',
			true,
			'lib.characterPack.mode_guozhan.gz_zhaoyun',
			isguozhanmode,
			'lib.characterSingle.zhaoyun',
			issinglemode,
		], '子龙一身都是胆也。', '——刘备');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_zhaoyun',
			true,
		], '子廉，我没有看错，山坡上那位将军是神龙下凡！', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_zhouyu',
			true,
		], '凝听吧，孟德，这献给你的镇魂曲。', '');
		setWuJiangYinWenTranslation([
			'lib.characterPack.extra.shen_zhugeliang',
			true,
		], '状诸葛多智而近妖。', '——鲁迅');
		setWuJiangYinWenTranslation([
			'lib.characterPack.jsrg.jsrg_zhugeliang',
			true,
		], '庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。', '——诸葛亮《出师表》');
		
	}
	
	// 卡牌引文补充（缓更中）
	if(config.kapaiyinwen){
		var obj={};
		// 锦囊牌
		// 非延时类锦囊
		obj.diaohulishan='待天以困之，用人以诱之，往蹇来返。——《三十六计》';
		obj.guohe='你休得顺水推船，偏不许我过河拆桥。——康进之';
		obj.huogong='行火必有因，烟火必素具。——孙子';
		obj.huoshaolianying='初更时分，东南风骤起。只见御营左屯火发。方欲救时，御营右屯又火起。风紧火急，树木皆着，喊声大震。——《三国演义》';
		obj.jiedao='敌已明，友未定，引友杀敌，不自出力，以＜损＞推演。——《三十六计》';
		obj.lianjunshengyan='诸军兵十余万，日置酒高会，不图进取。——《三国志·魏书》';
		obj.lulitongxin='昔逮我献公及穆公相好，勠力同心，申之以盟誓。——《左传·成公十三年》';
		obj.nanman='南蛮一人持矛入侵，川兵百人见而奔逃。——无名氏';
		obj.shuiyanqijunx='四面八方，大水骤至；七军乱窜，随波逐浪者，不计其数。——《三国演义》';
		obj.shunshou='效马效羊者右牵之。——《礼记·曲礼上》';
		obj.taoyuan='既结为兄弟，则同心协力，救困扶危；上报国家，下安黎庶，不求同年同月同日生，只愿同年同月同日死，皇天后土，实鉴此心，背义忘恩，天人共戮。——《三国演义》';
		obj.tiesuo='或三十为一排，或五十为一排，首尾用铁环连锁，上铺阔板，休言人可渡，马亦可走矣。乘此而行，任他风浪潮水上下，复何惧哉？——《三国演义》';
		obj.wanjian='安得夫差水犀手，三千强弩射潮低。——苏东坡';
		obj.wugu='是故风雨时节，五谷丰熟，社稷安宁。——《六韬·龙韬·立将》';
		obj.wuxie='击其懈怠，出其空虚。——曹操';
		obj.wuzhong='天下万物生于有，有生于无。——《老子》';
		obj.xietianzi='然操遂能克绍，以弱为强者，非惟天时，抑亦人谋也。今操已拥百万之众，挟天子而令诸侯。——《隆中对》';
		obj.yiyi='已近待远，以佚待劳，以饱待饥，此治力者也。——《孙子·军争》';
		obj.yuanjiao='形禁势格，利从近取，害以远隔，上火下泽。——《三十六计》';
		obj.zhibi='知己知彼，百战不殆；不知彼而知己，一胜一负；不知彼，不知己，每战必殆。——《孙子·军争》';
		// 延时类锦囊
		obj.shandian='啊啊啊！！！';
		
		// 装备牌
		// 武器牌
		obj.cixiong='又名鸳鸯剑，鸳剑长三尺七寸，鸯剑长三尺四寸，利可断金。——《三国演义》';
		obj.fangtian='豹子尾摇穿画戟，雄兵十万脱征衣。——《三国演义》';
		obj.guanshi='斧，甫也，甫，始也，凡将制器，始用斧伐木，已乃制之也。——《释名·释用器》';
		obj.qilin='虎筋弦响弓开处，雕羽翅飞箭到时。——《三国演义》';
		obj.qinggang='云乃拔青釭剑乱砍，手起处，衣甲平过，血如涌泉。——《三国演义》';
		obj.qinglong='刀势即大，其三十六刀法，兵仗遇之，无不屈者，刀类中以此为第一。——《三才图会·器用》';
		obj.wuliu='吴大皇帝有宝剑六，一曰白虹，二曰紫电，三曰辟邪，四曰流星，五曰青冥，六曰百里。——《古今注》';
		obj.zhangba='马上所持，言其俏俏便杀也；又曰激矛，激截也，可以激截敌阵之矛也。——《释名·释兵》';
		obj.zhuge='又损益连弩，谓之元戎，以铁为矢，矢长八寸，一弩十矢俱发。——《魏氏春秋》';
		// 防具牌
		obj.bagua='乾三连，坤六断，震仰盂，艮覆碗，离中虚，坎中满，兑上缺，巽下断。——《八卦歌诀》';
		obj.huxinjing='坚大怒，命黄盖出战。蔡瑁舞刀来迎。斗到数合，盖挥鞭打瑁正中护心镜。——《三国演义》';
		obj.minguangkai='先帝赐臣铠，黑光、明光各一领，环锁铠一领，马铠一领，今代以升平，兵革无事，乞悉以付铠曹自理。——曹植';
		obj.tengjia='…穿在身上，渡江不沉，经水不湿，刀箭皆不能入…——《三国演义》';
		// 坐骑牌
		// -1坐骑
		obj.chitu='人中吕布，马中赤兔！——《三国演义》';
		obj.dawan='大宛汗血古共知，青海龙种骨更奇，网丝旧画昔尝见，不意人间今见之。——《天马歌》';
		obj.zixin='怀夏后之九代，想陈王之紫骍。——《梁书·张率传》';
		obj.jingfanma='曹真有駃马，名为惊帆，言其驰骤如烈风之举帆疾也。——崔豹《古今注·杂记》';
		// +1坐骑
		obj.dilu='备急曰：‘的卢，今日危矣，可努力。’的卢乃一踊三丈，遂得过。——崔豹《世语》';
		obj.jueying='公所乘马名绝影。——《三国志·魏书》';
		obj.zhuahuang='操骑爪黄飞电马，引十万之众，与天子猎于许田。——《三国演义》';
		obj.hualiu='枥下骅骝思鼓角，门前老将识风云。——《上将行》';
		// 宝物牌
		obj.muniu='十年，亮休士劝农于黄沙，作流马木牛毕，教兵讲武。——《三国志后主传》';
		obj.yuxi='方圆四寸，上镌五龙交纽；傍缺一角，以黄金镶之；上有篆文八字云：‘受命于天，既寿永昌。——《三国演义》';
		
		function addStyle(content) {
			var quote = content.split('——');
			var styleLeft = `<div style="width:100%;text-align:left;font-size:13px;font-style:italic">“${quote[0]}”</div>`;
			if (quote.length > 1) {
				var styleRight = `<div style="width:98%;text-align:right;font-size:13px;font-style:italic">——${quote[1]}</div>`;
				var breakLine = '<br>';
				return styleLeft + breakLine + styleRight;
			}
			return styleLeft;
		}
		// 使用循环批量处理
		for (var key in obj) {
			obj[key] = addStyle(obj[key]);
		}
		for(var i in obj) lib.translate[i+"_append"]=obj[i];
	}
	
	// 右键菜单修改
	if(config.youjiancaidan){
		// 修复滚轮滚动问题（右键菜单更改皮肤）
		ui.click.mousewheel=function(evt) {
			if (
				this.firstChild &&
				this.firstChild.classList.contains("handcards") &&
				!this.classList.contains("scrollh")
			)
				return;
			var node = this;
			var num = this._scrollnum || 6;
			var speed = this._scrollspeed || 16;
			
			// 阻止默认行为（防止滚轮事件冒泡到父元素触发垂直滚动）
			evt.preventDefault();
			
			clearInterval(node.interval);
			if (evt.detail > 0 || evt.wheelDelta < 0) {
				node.interval = setInterval(function () {
					if (num-- && Math.abs(node.scrollLeft + node.clientWidth - node.scrollWidth) > 0) {
						node.scrollLeft += speed;
					} else {
						clearInterval(node.interval);
					}
				}, 16);
			} else {
				node.interval = setInterval(function () {
					if (num-- && node.scrollLeft > 0) {
						node.scrollLeft -= speed;
					} else {
						clearInterval(node.interval);
					}
				}, 16);
			}
		};
		// 修复三板斧不能正常显示的bug
		function addBrAndSpace(str) {
			// 如果字符串长度小于等于2，则原样返回
			if (str.length <= 2) {
				return str;
			}
			// 用正则表达式在每两个字之后插入 <br> 标签和空格
			return str.replace(/(..)/g, '$1<br><span style="letter-spacing: 0.75em;">&nbsp;</span>').replace(/<br><span style="letter-spacing: 0.75em;">&nbsp;<\/span>$/, ''); // 去除末尾可能的多余 <br> 和空格
		}
		// 发送交互表情时间修改
		// 修改game.js的函数nodeintro:(node,simple,evt)=>{
		get.nodeintro=function(node,simple,evt){
			var uiintro = ui.create.dialog('hidden', 'notouchscroll');
			if (node.classList.contains('player') && !node.name) {
				return uiintro;
			}
			var i, translation, intro, str;
			if (node._nointro) return;
			if (typeof node._customintro == 'function') {
				if (node._customintro(uiintro, evt) === false) return;
				if (evt) lib.placePoppedDialog(uiintro, evt);
			}
			else if (Array.isArray(node._customintro)) {
				var caption = node._customintro[0];
				var content = node._customintro[1];
				if (typeof caption == 'function') {
					caption = caption(node);
				}
				if (typeof content == 'function') {
					content = content(node);
				}
				uiintro.add(caption);
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + content + '</div>');
			}
			else if (node.classList.contains('player') || node.linkplayer) {
				if (node.linkplayer) {
					node = node.link;
				}
				let capt = get.translation(node.name);
				const characterInfo = get.character(node.name), sex = node.sex || characterInfo[0];
				if (sex && sex != 'unknown' && lib.config.show_sex) capt += `&nbsp;&nbsp;${sex == 'none' ? '无' : get.translation(sex)}`;
				const group = node.group;
				if (group && group != 'unknown' && lib.config.show_group) capt += `&nbsp;&nbsp;${get.translation(group)}`;
				uiintro.add(capt);

				if (lib.characterTitle[node.name]) {
					uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
				}

				if (get.characterInitFilter(node.name)) {
					const initFilters = get.characterInitFilter(node.name).filter(tag => {
						if (!lib.characterInitFilter[node.name]) return true;
						return lib.characterInitFilter[node.name](tag) !== false;
					});
					if(initFilters.length){
						const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + '<br>', '').slice(0, -4);
						uiintro.addText(str);
					}
				}

				if (!node.noclick) {
					const allShown = (node.isUnderControl() || (!game.observe && game.me && game.me.hasSkillTag('viewHandcard', null, node, true)));
					const shownHs = node.getShownCards();
					if (shownHs.length) {
						uiintro.add('<div class="text center">明置的手牌</div>');
						uiintro.addSmall(shownHs);
						if (allShown) {
							var hs = node.getCards('h');
							hs.removeArray(shownHs);
							if (hs.length) {
								uiintro.add('<div class="text center">其他手牌</div>');
								uiintro.addSmall(hs);
							}
						}
					}
					else if (allShown) {
						var hs = node.getCards('h');
						if (hs.length) {
							uiintro.add('<div class="text center">手牌</div>');
							uiintro.addSmall(hs);
						}
					}
				}

				var skills = node.getSkills(null, false, false).slice(0);
				var skills2 = game.filterSkills(skills, node);
				if (node == game.me && node.hiddenSkills.length) {
					skills.addArray(node.hiddenSkills);
				}
				for (var i in node.disabledSkills) {
					if (node.disabledSkills[i].length == 1 &&
						node.disabledSkills[i][0] == i + '_awake' &&
						!node.hiddenSkills.includes(i)) {
						skills.add(i);
					}
				}
				for (i = 0; i < skills.length; i++) {
					if (lib.skill[skills[i]] && (lib.skill[skills[i]].nopop || lib.skill[skills[i]].equipSkill)) continue;
					if (lib.translate[skills[i] + '_info']) {
						if (lib.translate[skills[i] + '_ab']) translation = lib.translate[skills[i] + '_ab'];
						else {
							translation = get.translation(skills[i]);
							if (!lib.skill[skills[i]].nobracket) translation = `【${addBrAndSpace(translation)}】`;
						}

						if (node.forbiddenSkills[skills[i]]) {
							var forbidstr = '<div style="opacity:0.5"><div class="skill">' + translation + '</div><div>';
							if (node.forbiddenSkills[skills[i]].length) {
								forbidstr += '（与' + get.translation(node.forbiddenSkills[skills[i]]) + '冲突）<br>';
							}
							else {
								forbidstr += '（双将禁用）<br>';
							}
							forbidstr += get.skillInfoTranslation(skills[i], node) + '</div></div>';
							uiintro.add(forbidstr);
						}
						else if (!skills2.includes(skills[i])) {
							if (lib.skill[skills[i]].preHidden && get.mode() == 'guozhan') {
								uiintro.add('<div><div class="skill" style="opacity:0.5">' + translation + '</div><div><span style="opacity:0.5">' + get.skillInfoTranslation(skills[i], node) + '</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
								var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
								if (_status.prehidden_skills.includes(skills[i])) {
									underlinenode.classList.remove('on');
								}
								underlinenode.link = skills[i];
								underlinenode.listen(ui.click.hiddenskill);
							}
							else uiintro.add('<div style="opacity:0.5"><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
						}
						else if (lib.skill[skills[i]].temp || !node.skills.includes(skills[i]) || lib.skill[skills[i]].thundertext) {
							if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
								uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
								var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
								if (lib.skill[skills[i]].frequent) {
									if (lib.config.autoskilllist.includes(skills[i])) {
										underlinenode.classList.remove('on');
									}
								}
								if (lib.skill[skills[i]].subfrequent) {
									for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
										if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
											underlinenode.classList.remove('on');
										}
									}
								}
								if (lib.config.autoskilllist.includes(skills[i])) {
									underlinenode.classList.remove('on');
								}
								underlinenode.link = skills[i];
								underlinenode.listen(ui.click.autoskill2);
							}
							else {
								uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
							}
						}
						else if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
							uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
							var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
							if (lib.skill[skills[i]].frequent) {
								if (lib.config.autoskilllist.includes(skills[i])) {
									underlinenode.classList.remove('on');
								}
							}
							if (lib.skill[skills[i]].subfrequent) {
								for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
									if (lib.config.autoskilllist.includes(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
										underlinenode.classList.remove('on');
									}
								}
							}
							if (lib.config.autoskilllist.includes(skills[i])) {
								underlinenode.classList.remove('on');
							}
							underlinenode.link = skills[i];
							underlinenode.listen(ui.click.autoskill2);
						}
						else if (lib.skill[skills[i]].clickable && node.isIn() && node.isUnderControl(true)) {
							var intronode = uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
							if (!_status.gameStarted || (lib.skill[skills[i]].clickableFilter && !lib.skill[skills[i]].clickableFilter(node))) {
								intronode.classList.add('disabled');
								intronode.style.opacity = 0.5;
							}
							else {
								intronode.link = node;
								intronode.func = lib.skill[skills[i]].clickable;
								intronode.classList.add('pointerdiv');
								intronode.listen(ui.click.skillbutton);
							}
						}
						else {
							uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
						}
						if (lib.translate[skills[i] + '_append']) {
							uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
						}
					}
				}
				
				// 新增武将引文接口
				if (config.wujiangyinwen && lib.translatecharacterappend[node.name]) {
					uiintro.add('<div class="text">' + lib.translatecharacterappend[node.name] + '</div>');
				}
				
				// if(get.is.phoneLayout()){
				// 	var storage=node.storage;
				// 	for(i in storage){
				// 		if(get.info(i)&&get.info(i).intro){
				// 			intro=get.info(i).intro;
				// 			if(node.getSkills().concat(lib.skill.global).includes(i)==false&&!intro.show) continue;
				// 			var name=intro.name?intro.name:get.translation(i);
				// 			if(typeof name=='function'){
				// 				name=name(storage[i],node);
				// 			}
				// 			translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
				// 			var stint=get.storageintro(intro.content,storage[i],node,null,i);
				// 			if(stint){
				// 				translation+=stint+'</div></div>';
				// 				uiintro.add(translation);
				// 			}
				// 		}
				// 	}
				// }

				if (lib.config.right_range && _status.gameStarted) {
					uiintro.add(ui.create.div('.placeholder'));
					var table, tr, td;
					table = document.createElement('table');
					tr = document.createElement('tr');
					table.appendChild(tr);
					td = document.createElement('td');
					td.innerHTML = '距离';
					tr.appendChild(td);
					td = document.createElement('td');
					td.innerHTML = '手牌';
					tr.appendChild(td);
					td = document.createElement('td');
					td.innerHTML = '行动';
					tr.appendChild(td);
					td = document.createElement('td');
					td.innerHTML = '伤害';
					tr.appendChild(td);

					tr = document.createElement('tr');
					table.appendChild(tr);
					td = document.createElement('td');
					if (node == game.me || !game.me || !game.me.isIn()) {
						td.innerHTML = '-';
					}
					else {
						var dist1 = get.numStr(Math.max(1, game.me.distanceTo(node)));
						var dist2 = get.numStr(Math.max(1, node.distanceTo(game.me)));
						if (dist1 == dist2) {
							td.innerHTML = dist1;
						}
						else {
							td.innerHTML = dist1 + '/' + dist2;
						}
					}
					tr.appendChild(td);
					td = document.createElement('td');
					let handcardLimit = node.getHandcardLimit();
					td.innerHTML = `${node.countCards('h')}/${handcardLimit >= 114514 ? '∞' : handcardLimit}`;
					tr.appendChild(td);
					td = document.createElement('td');
					td.innerHTML = node.phaseNumber;
					tr.appendChild(td);
					td = document.createElement('td');

					(function () {
						num = 0;
						for (var j = 0; j < node.stat.length; j++) {
							if (typeof node.stat[j].damage == 'number') num += node.stat[j].damage;
						}
						td.innerHTML = num;
					}());
					tr.appendChild(td);
					table.style.width = 'calc(100% - 20px)';
					table.style.marginLeft = '10px';

					uiintro.content.appendChild(table);
					if (!lib.config.show_favourite) {
						table.style.paddingBottom = '5px';
					}
				}
				if (!simple || get.is.phoneLayout()) {
					var es = node.getCards('e');
					for (var i = 0; i < es.length; i++) {
						var cardinfo = lib.card[es[i].name];
						if (cardinfo && cardinfo.cardPrompt) uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + cardinfo.cardPrompt(es[i]) + '</div></div>');
						else uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + lib.translate[es[i].name + '_info'] + '</div></div>');
						uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';

						if (lib.translate[es[i].name + '_append']) {
							uiintro.add('<div class="text">' + lib.translate[es[i].name + '_append'] + '</div>');
						}
					}
					var js = node.getCards('j');
					for (var i = 0; i < js.length; i++) {
						if (js[i].viewAs && js[i].viewAs != js[i].name) {
							let html = js[i].outerHTML;
							let cardInfo = lib.card[js[i].viewAs], showCardIntro=true;
							if (cardInfo.blankCard) {
								var cardOwner = get.owner(js[i]);
								if (cardOwner && !cardOwner.isUnderControl(true)) showCardIntro = false;
							}
							if (!showCardIntro) {
								html=ui.create.button(js[i],'blank').outerHTML;
							}
							uiintro.add('<div><div class="skill">' + html + '</div><div>' + lib.translate[js[i].viewAs] + '：' + lib.translate[js[i].viewAs + '_info'] + '</div></div>');
						}
						else {
							uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].name + '_info'] + '</div></div>');
						}
						uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
					}
					if (get.is.phoneLayout()) {
						var markCoutainer = ui.create.div('.mark-container.marks');
						for (var i in node.marks) {
							var nodemark = node.marks[i].cloneNode(true);
							nodemark.classList.add('pointerdiv');
							nodemark.link = node.marks[i];
							nodemark.style.transform = '';
							markCoutainer.appendChild(nodemark);
							nodemark.listen(function () {
								uiintro.noresume = true;
								var rect = this.link.getBoundingClientRect();
								ui.click.intro.call(this.link, {
									clientX: rect.left + rect.width,
									clientY: rect.top + rect.height / 2,
								});
								if (lib.config.touchscreen) {
									uiintro._close();
								}
							});
						}
						if (markCoutainer.childElementCount) {
							uiintro.addText('标记');
							uiintro.add(markCoutainer);
						}
					}
				}
				if (!game.observe && _status.gameStarted && game.me && node != game.me) {
					ui.throwEmotion = [];
					uiintro.addText('发送交互表情');
					var click = function () {
						if (_status.dragged) return;
						if (_status.justdragged) return;
						if (_status.throwEmotionWait) return;
						var emotion = this.link;
						if (game.online) {
							game.send('throwEmotion', node, emotion);
						}
						else game.me.throwEmotion(node, emotion);
						uiintro._close();
						_status.throwEmotionWait = true;
						setTimeout(function () {
							_status.throwEmotionWait = false;
							if (ui.throwEmotion) {
								for (var i of ui.throwEmotion) i.classList.remove('exclude');
							}
						}, (emotion == 'flower' || emotion == 'egg') ? 5 : 10);
					};
					var td;
					var table = document.createElement('div');
					table.classList.add('add-setting');
					table.style.margin = '0';
					table.style.width = '100%';
					table.style.position = 'relative';
					var listi = ['flower', 'egg'];
					for (var i = 0; i < listi.length; i++) {
						td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
						ui.throwEmotion.add(td);
						if (_status.throwEmotionWait) td.classList.add('exclude');
						td.link = listi[i];
						table.appendChild(td);
						td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
						td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
					}
					uiintro.content.appendChild(table);
					table = document.createElement('div');
					table.classList.add('add-setting');
					table.style.margin = '0';
					table.style.width = '100%';
					table.style.position = 'relative';
					var listi = ['wine', 'shoe'];
					if (game.me.storage.zhuSkill_shanli) listi = ['yuxisx', 'jiasuo'];
					for (var i = 0; i < listi.length; i++) {
						td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
						ui.throwEmotion.add(td);
						if (_status.throwEmotionWait) td.classList.add('exclude');
						td.link = listi[i];
						table.appendChild(td);
						td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
						td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
					}
					uiintro.content.appendChild(table);
				}
				var modepack = lib.characterPack['mode_' + get.mode()];
				if (lib.config.show_favourite && lib.character[node.name] && game.players.includes(node) &&
					(!modepack || !modepack[node.name]) && (!simple || get.is.phoneLayout())) {
					var addFavourite = ui.create.div('.text.center.pointerdiv');
					addFavourite.link = node.name;
					if (lib.config.favouriteCharacter.includes(node.name)) {
						addFavourite.innerHTML = '移除收藏';
					}
					else {
						addFavourite.innerHTML = '添加收藏';
					}
					addFavourite.listen(ui.click.favouriteCharacter);
					uiintro.add(addFavourite);
				}
				if (!simple || get.is.phoneLayout()) {
					if ((lib.config.change_skin || lib.skin) && !node.isUnseen()) {
						var num = 1;
						var introadded = false;
						var createButtons = function (num, avatar2) {
							if (!introadded) {
								introadded = true;
								uiintro.add('<div class="text center">更改皮肤</div>');
							}
							var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
							lib.setMousewheel(buttons);
							var nameskin = (avatar2 ? node.name2 : node.name1);
							var nameskin2 = nameskin;
							var gzbool = false;
							if (nameskin.startsWith('gz_shibing')) {
								nameskin = nameskin.slice(3, 11);
							}
							else if (nameskin.startsWith('gz_')) {
								nameskin = nameskin.slice(3);
								gzbool = true;
							}
							for (var i = 0; i <= num; i++) {
								var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
									if (this._link) {
										if (avatar2) {
											lib.config.skin[nameskin] = this._link;
											node.node.avatar2.style.backgroundImage = this.style.backgroundImage;
										}
										else {
											lib.config.skin[nameskin] = this._link;
											node.node.avatar.style.backgroundImage = this.style.backgroundImage;
										}
									}
									else {
										delete lib.config.skin[nameskin];
										if (avatar2) {
											if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2, 'character');
											else node.node.avatar2.setBackground(nameskin, 'character');
										}
										else {
											if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2, 'character');
											else node.node.avatar.setBackground(nameskin, 'character');
										}
									}
									game.saveConfig('skin', lib.config.skin);
								});
								button._link = i;
								if (i) {
									button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
								}
								else {
									if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
									else button.setBackground(nameskin, 'character', 'noskin');
								}
							}
							uiintro.add(buttons);
						};
						var loadImage = function (avatar2) {
							var img = new Image();
							img.onload = function () {
								num++;
								loadImage(avatar2);
							};
							img.onerror = function () {
								num--;
								if (num) {
									createButtons(num, avatar2);
								}
								if (!avatar2) {
									if (!node.classList.contains('unseen2') && node.name2) {
										num = 1;
										loadImage(true);
									}
								}
							};
							var nameskin = (avatar2 ? node.name2 : node.name1);
							var nameskin2 = nameskin;
							var gzbool = false;
							if (nameskin.startsWith('gz_shibing')) {
								nameskin = nameskin.slice(3, 11);
							}
							else if (nameskin.startsWith('gz_')) {
								nameskin = nameskin.slice(3);
								gzbool = true;
							}
							img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
						};
						if (lib.config.change_skin) {
							if (!node.isUnseen(0)) {
								loadImage();
							}
							else if (node.name2) {
								loadImage(true);
							}
						}
						else {
							setTimeout(function () {
								var nameskin1 = node.name1;
								var nameskin2 = node.name2;
								if (nameskin1 && nameskin1.startsWith('gz_')) {
									nameskin1 = nameskin1.slice(3);
								}
								if (nameskin2 && nameskin2.startsWith('gz_')) {
									nameskin2 = nameskin2.slice(3);
								}
								if (!node.isUnseen(0) && lib.skin[nameskin1]) {
									createButtons(lib.skin[nameskin1]);
								}
								if (!node.isUnseen(1) && lib.skin[nameskin2]) {
									createButtons(lib.skin[nameskin2], true);
								}
							});
						}
					}
				}

				uiintro.add(ui.create.div('.placeholder.slim'));
			}
			else if (node.classList.contains('mark') && node.info &&
				node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.classList.contains('player')) {
				var info = node.info;
				var player = node.parentNode.parentNode;
				if (info.name) {
					if (typeof info.name == 'function') {
						var named = info.name(player.storage[node.skill], player);
						if (named) {
							uiintro.add(named);
						}
					}
					else {
						uiintro.add(info.name);
					}
				}
				else if (info.name !== false) {
					uiintro.add(get.translation(node.skill));
				}
				if (typeof info.id == 'string' && info.id.startsWith('subplayer') &&
					player.isUnderControl(true) && player.storage[info.id] && !_status.video) {
					var storage = player.storage[info.id];
					uiintro.addText('当前体力：' + storage.hp + '/' + storage.maxHp);
					if (storage.hs.length) {
						uiintro.addText('手牌区');
						uiintro.addSmall(storage.hs);
					}
					if (storage.es.length) {
						uiintro.addText('装备区');
						uiintro.addSmall(storage.es);
					}
				}
				if (typeof info.mark == 'function') {
					var stint = info.mark(uiintro, player.storage[node.skill], player);
					if (stint) {
						var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
						if (!stint.startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
						// if(stint.length<=100){
						// 	uiintro.add('<div class="text center">'+stint+'</div>');
						// }
						// else{
						// 	uiintro.add('<div class="text">'+stint+'</div>');
						// }
					}
				}
				else {
					var stint = get.storageintro(info.content, player.storage[node.skill], player, uiintro, node.skill);
					if (stint) {
						if (stint[0] == '@') {
							uiintro.add('<div class="caption">' + stint.slice(1) + '</div>');
						}
						else {
							var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
							if (!stint.startsWith('<div class="skill"')) {
								uiintro._place_text = placetext;
							}
						}
						// else if(stint.length<=100){
						// 	uiintro.add('<div class="text center">'+stint+'</div>');
						// }
						// else{
						// 	uiintro.add('<div class="text">'+stint+'</div>');
						// }
					}
				}
				uiintro.add(ui.create.div('.placeholder.slim'));
			}
			else if (node.classList.contains('card')) {
				//卡牌长按介绍
				if (ui.arena.classList.contains('observe') && node.parentNode.classList.contains('handcards')) {
					return;
				}
				var name = node.name;
				if (node.parentNode.cardMod) {
					var moded = false;
					for (var i in node.parentNode.cardMod) {
						var item = node.parentNode.cardMod[i](node);
						if (Array.isArray(item)) {
							moded = true;
							uiintro.add(item[0]);
							uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + item[1] + '</div>');
						}
					}
					if (moded) return uiintro;
				}
				if (node.link && node.link.name && lib.card[node.link.name]) {
					name = node.link.name;
				}
				if (get.position(node) == 'j' && node.viewAs && node.viewAs != name) {
					uiintro.add(get.translation(node.viewAs));
					var cardInfo = lib.card[node.viewAs], showCardIntro=true;
					if (cardInfo.blankCard) {
						var cardOwner = get.owner(node);
						if (cardOwner && !cardOwner.isUnderControl(true)) showCardIntro = false;
					}
					if (showCardIntro) uiintro.add('<div class="text center">（' + get.translation(get.translation(node)) + '）</div>');
					// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
					uiintro.nosub = true;
					name = node.viewAs;
				}
				else {
					uiintro.add(get.translation(node));
				}
				if (node._banning) {
					var clickBanned = function () {
						var banned = lib.config[this.bannedname] || [];
						if (banned.includes(name)) {
							banned.remove(name);
						}
						else {
							banned.push(name);
						}
						game.saveConfig(this.bannedname, banned);
						this.classList.toggle('on');
						if (node.updateBanned) {
							node.updateBanned();
						}
					};
					var modeorder = lib.config.modeorder || [];
					for (var i in lib.mode) {
						modeorder.add(i);
					}
					var list = [];
					uiintro.contentContainer.listen(function (e) {
						ui.click.touchpop();
						e.stopPropagation();
					});
					for (var i = 0; i < modeorder.length; i++) {
						if (node._banning == 'online') {
							if (!lib.mode[modeorder[i]].connect) continue;
						}
						else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
							continue;
						}
						if (lib.config.all.mode.includes(modeorder[i])) {
							list.push(modeorder[i]);
						}
					}
					if (lib.card[name] && lib.card[name].type == 'trick') list.push('zhinang_tricks');
					var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
					var banall = false;
					for (var i = 0; i < list.length; i++) {
						var cfg = ui.create.div('.config', list[i] == 'zhinang_tricks' ? '设为智囊' : (lib.translate[list[i]] + '模式'), page);
						cfg.classList.add('toggle');
						if (list[i] == 'zhinang_tricks') {
							cfg.bannedname = ((node._banning == 'offline') ? '' : 'connect_') + 'zhinang_tricks';
						}
						else if (node._banning == 'offline') {
							cfg.bannedname = list[i] + '_bannedcards';
						}
						else {
							cfg.bannedname = 'connect_' + list[i] + '_bannedcards';
						}
						cfg.listen(clickBanned);
						ui.create.div(ui.create.div(cfg));
						var banned = lib.config[cfg.bannedname] || [];
						if (banned.includes(name) == (list[i] == 'zhinang_tricks')) {
							cfg.classList.add('on');
							banall = true;
						}
					}
					ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
						if (this.innerHTML == '全部禁用') {
							for (var i = 0; i < page.childElementCount; i++) {
								if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
									clickBanned.call(page.childNodes[i]);
								}
							}
							this.innerHTML = '全部启用';
						}
						else {
							for (var i = 0; i < page.childElementCount; i++) {
								if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
									clickBanned.call(page.childNodes[i]);
								}
							}
							this.innerHTML = '全部禁用';
						}
					}).style.marginTop = '-10px';
					ui.create.div('.placeholder.slim', uiintro.content);
				}
				else {
					if (lib.translate[name + '_info']) {
						if (!uiintro.nosub) {
							if (lib.card[name] && lib.card[name].derivation) {
								if (typeof lib.card[name].derivation == 'string') {
									uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivation) + '</div>');
								}
								else if (lib.card[name].derivationpack) {
									uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivationpack + '_card_config') + '包</div>');
								}
							}
							let typeinfo = '';
							if (lib.card[name] && lib.card[name].unique) {
								typeinfo += ('特殊' + get.translation(lib.card[name].type) + '牌');
							}
							else if (lib.card[name] && lib.card[name].type && lib.translate[lib.card[name].type]) {
								typeinfo += (get.translation(lib.card[name].type) + '牌');
							}
							
							/*
							if (get.subtype(name, false)) {
								typeinfo += ('-' + get.translation(get.subtype(name, false)));
							}
							*/
							// 新杀马钧-临时写法 #1607
							if (get.subtype(node, false) || get.subtype(name, false)) {
								typeinfo += "-" + get.translation(get.subtype(node, false) || get.subtype(name, false));
							}
							
							if (typeinfo) {
								uiintro.add('<div class="text center">' + typeinfo + '</div>');
							}
							if (lib.card[name].unique && lib.card[name].type == 'equip') {
								if (lib.cardPile.guozhan && lib.cardPack.guozhan.includes(name)) {
									uiintro.add('<div class="text center">专属装备</div>').style.marginTop = '-5px';
								}
								else {
									uiintro.add('<div class="text center">特殊装备</div>').style.marginTop = '-5px';
								}
							}
							if (lib.card[name] && lib.card[name].addinfomenu) {
								uiintro.add('<div class="text center">' + lib.card[name].addinfomenu + '</div>');
							}
							if (get.subtype(name, false) == 'equip1') {
								var added = false;
								if (lib.card[node.name] && lib.card[node.name].distance) {
									var dist = lib.card[node.name].distance;
									if (dist.attackFrom) {
										added = true;
										uiintro.add('<div class="text center">攻击范围：' + (-dist.attackFrom + 1) + '</div>');
									}
								}
								if (!added) {
									uiintro.add('<div class="text center">攻击范围：1</div>');
								}
							}
						}
						if (lib.card[name].cardPrompt) {
							var str = lib.card[name].cardPrompt(node.link || node), placetext = uiintro.add('<div class="text" style="display:inline">' + str + '</div>');
							if (!str.startsWith('<div class="skill"')) {
								uiintro._place_text = placetext;
							}
						}
						else if (lib.translate[name + '_info']) {
							var placetext = uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_info'] + '</div>');
							if (!lib.translate[name + '_info'].startsWith('<div class="skill"')) {
								uiintro._place_text = placetext;
							}
						}
						if (get.is.yingbianConditional(node.link || node)) {
							const yingbianEffects = get.yingbianEffects(node.link || node);
							if (!yingbianEffects.length) {
								const defaultYingbianEffect = get.defaultYingbianEffect(node.link || node);
								if (lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
							}
							if (yingbianEffects.length && showCardIntro) uiintro.add(`<div class="text" style="font-family: yuanli">应变：${yingbianEffects.map(value => lib.yingbian.prompt.get(value)).join('；')}</div>`);
						}
						if (lib.translate[name + '_append']) {
							uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_append'] + '</div>');
						}
					}
					uiintro.add(ui.create.div('.placeholder.slim'));
				}
			}
			else if (node.classList.contains('character')) {
				const character = node.link, characterInfo = get.character(node.link);
				let capt = get.translation(character);
				if (characterInfo) {
					const infoSex = characterInfo[0];
					if (infoSex && lib.config.show_sex) capt += `&nbsp;&nbsp;${infoSex == 'none' ? '无' : lib.translate[infoSex]}`;
					const infoGroup = characterInfo[1];
					if (infoGroup && lib.config.show_group) {
						const group = get.is.double(character, true);
						if (group) capt += `&nbsp;&nbsp;${group.map(value => get.translation(value)).join('/')}`;
						else capt += `&nbsp;&nbsp;${lib.translate[infoGroup]}`;
					}
				}
				uiintro.add(capt);

				if (lib.characterTitle[node.link]) {
					uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
				}

				if (get.characterInitFilter(node.link)) {
					const initFilters = get.characterInitFilter(node.link).filter(tag => {
						if (!lib.characterInitFilter[node.link]) return true;
						return lib.characterInitFilter[node.link](tag) !== false;
					});
					if(initFilters.length){
						const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + '<br>', '').slice(0, -4);
						uiintro.addText(str);
					}
				}

				if (node._banning) {
					var clickBanned = function () {
						var banned = lib.config[this.bannedname] || [];
						if (banned.includes(character)) {
							banned.remove(character);
						}
						else {
							banned.push(character);
						}
						game.saveConfig(this.bannedname, banned);
						this.classList.toggle('on');
						if (node.updateBanned) {
							node.updateBanned();
						}
					};
					var modeorder = lib.config.modeorder || [];
					for (var i in lib.mode) {
						modeorder.add(i);
					}
					var list = [];
					uiintro.contentContainer.listen(function (e) {
						ui.click.touchpop();
						e.stopPropagation();
					});
					for (var i = 0; i < modeorder.length; i++) {
						if (node._banning == 'online') {
							if (!lib.mode[modeorder[i]].connect) continue;
							if (!lib.config['connect_' + modeorder[i] + '_banned']) {
								lib.config['connect_' + modeorder[i] + '_banned'] = [];
							}
						}
						else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
							continue;
						}
						if (lib.config.all.mode.includes(modeorder[i])) {
							list.push(modeorder[i]);
						}
					}
					var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
					var banall = false;
					for (var i = 0; i < list.length; i++) {
						var cfg = ui.create.div('.config', lib.translate[list[i]] + '模式', page);
						cfg.classList.add('toggle');
						if (node._banning == 'offline') {
							cfg.bannedname = list[i] + '_banned';
						}
						else {
							cfg.bannedname = 'connect_' + list[i] + '_banned';
						}
						cfg.listen(clickBanned);
						ui.create.div(ui.create.div(cfg));
						var banned = lib.config[cfg.bannedname] || [];
						if (!banned.includes(character)) {
							cfg.classList.add('on');
							banall = true;
						}
					}
					if (node._banning == 'offline') {
						var cfg = ui.create.div('.config', '随机选将可用', page);
						cfg.classList.add('toggle');
						cfg.listen(function () {
							this.classList.toggle('on');
							if (this.classList.contains('on')) {
								lib.config.forbidai_user.remove(character);
							}
							else {
								lib.config.forbidai_user.add(character);
							}
							game.saveConfig('forbidai_user', lib.config.forbidai_user);
						});
						ui.create.div(ui.create.div(cfg));
						if (!lib.config.forbidai_user.includes(character)) {
							cfg.classList.add('on');
						}
					}
					ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
						if (this.innerHTML == '全部禁用') {
							for (var i = 0; i < page.childElementCount; i++) {
								if (page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
									clickBanned.call(page.childNodes[i]);
								}
							}
							this.innerHTML = '全部启用';
						}
						else {
							for (var i = 0; i < page.childElementCount; i++) {
								if (page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
									clickBanned.call(page.childNodes[i]);
								}
							}
							this.innerHTML = '全部禁用';
						}
					}).style.marginTop = '-10px';
					ui.create.div('.placeholder.slim', uiintro.content);
				}
				else {
					var infoitem = get.character(character);
					var skills = infoitem[3];
					for (i = 0; i < skills.length; i++) {
						if (lib.translate[skills[i] + '_info']) {
							if (lib.translate[skills[i] + '_ab']) translation = lib.translate[skills[i] + '_ab'];
							else {
								translation = get.translation(skills[i]);
								if (!lib.skill[skills[i]].nobracket) translation = `【${addBrAndSpace(translation)}】`;
							}

							uiintro.add('<div><div class="skill">' + translation + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');

							if (lib.translate[skills[i] + '_append']) {
								uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>');
							}
						}
					}
					
					// 新增武将引文接口
					if (config.wujiangyinwen && lib.translatecharacterappend[node.link]) {
						uiintro.add('<div class="text">' + lib.translatecharacterappend[node.link] + '</div>');
					}
					
					var modepack = lib.characterPack['mode_' + get.mode()];
					if (lib.config.show_favourite &&
						lib.character[node.link] && (!modepack || !modepack[node.link]) && (!simple || get.is.phoneLayout())) {
						var addFavourite = ui.create.div('.text.center.pointerdiv');
						addFavourite.link = node.link;
						addFavourite.style.marginBottom = '15px';
						if (lib.config.favouriteCharacter.includes(node.link)) {
							addFavourite.innerHTML = '移除收藏';
						}
						else {
							addFavourite.innerHTML = '添加收藏';
						}
						addFavourite.listen(ui.click.favouriteCharacter);
						uiintro.add(addFavourite);
					}
					else {
						uiintro.add(ui.create.div('.placeholder.slim'));
					}
					var addskin = false;
					if (node.parentNode.classList.contains('menu-buttons')) {
						addskin = !lib.config.show_charactercard;
					}
					else {
						addskin = lib.config.change_skin || lib.skin;
					}
					if (addskin && (!simple || get.is.phoneLayout())) {
						var num = 1;
						var introadded = false;
						var nameskin = node.link;
						var nameskin2 = nameskin;
						var gzbool = false;
						if (nameskin.startsWith('gz_shibing')) {
							nameskin = nameskin.slice(3, 11);
						}
						else if (nameskin.startsWith('gz_')) {
							nameskin = nameskin.slice(3);
							gzbool = true;
						}
						var createButtons = function (num) {
							if (!num) return;
							if (!introadded) {
								introadded = true;
								uiintro.add('<div class="text center">更改皮肤</div>');
							}
							var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
							lib.setMousewheel(buttons);
							for (var i = 0; i <= num; i++) {
								var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
									if (this._link) {
										lib.config.skin[nameskin] = this._link;
										node.style.backgroundImage = this.style.backgroundImage;
										game.saveConfig('skin', lib.config.skin);
									}
									else {
										delete lib.config.skin[nameskin];
										if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2, 'character');
										else node.setBackground(nameskin, 'character');
										game.saveConfig('skin', lib.config.skin);
									}
								});
								button._link = i;
								if (i) {
									button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
								}
								else {
									if (gzbool && lib.character[nameskin2][4].includes('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
									else button.setBackground(nameskin, 'character', 'noskin');
								}
							}
							uiintro.add(buttons);
						};
						var loadImage = function () {
							var img = new Image();
							img.onload = function () {
								num++;
								loadImage();
							};
							img.onerror = function () {
								num--;
								createButtons(num);
							};
							img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
						};
						if (lib.config.change_skin) {
							loadImage();
						}
						else {
							setTimeout(function () {
								createButtons(lib.skin[nameskin]);
							});
						}
					}
				}
			}
			else if (node.classList.contains('equips') && ui.arena.classList.contains('selecting')) {
				(function () {
					uiintro.add('选择装备');
					uiintro.addSmall(Array.from(node.childNodes).filter(node => !node.classList.contains('emptyequip') && !node.classList.contains('feichu')), true);
					uiintro.clickintro = true;
					ui.control.hide();
					uiintro._onclose = function () {
						ui.control.show();
					};
					var confirmbutton;
					for (var i = 0; i < uiintro.buttons.length; i++) {
						var button = uiintro.buttons[i];
						button.classList.add('pointerdiv');
						if (button.link.classList.contains('selected')) {
							button.classList.add('selected');
						}
						button.listen(function (e) {
							ui.click.card.call(this.link, 'popequip');
							ui.click.window.call(ui.window, e);
							if (this.link.classList.contains('selected')) {
								this.classList.add('selected');
							}
							else {
								this.classList.remove('selected');
							}
							if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
								confirmbutton.classList.remove('disabled');
							}
							else {
								confirmbutton.classList.add('disabled');
							}
						});
					}
					var buttoncontainer = uiintro.add(ui.create.div());
					buttoncontainer.style.display = 'block';
					confirmbutton = ui.create.div('.menubutton.large.pointerdiv', '确定', function () {
						if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
							uiintro._clickintro();
							ui.click.ok(ui.confirm.firstChild);
						}
					}, buttoncontainer);
					confirmbutton.style.position = 'relative';
					setTimeout(function () {
						if (ui.confirm && ui.confirm.str && ui.confirm.str.includes('o')) {
							confirmbutton.classList.remove('disabled');
						}
						else {
							confirmbutton.classList.add('disabled');
						}
					}, 300);
				}());
			}
			else if (node.classList.contains('identity') && node.dataset.career) {
				var career = node.dataset.career;
				uiintro.add(get.translation(career));
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + lib.translate['_' + career + '_skill_info'] + '</div>');
			}
			else if (node.classList.contains('skillbar')) {
				if (node == ui.friendBar) {
					uiintro.add('友方怒气值');
					uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.friendRage + '/100</div>');
				}
				else if (node == ui.enemyBar) {
					uiintro.add('敌方怒气值');
					uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.enemyRage + '/100</div>');
				}
			}
			else if (node.parentNode == ui.historybar) {
				if (node.dead) {
					if (!node.source || node.source == node.player) {
						uiintro.add('<div class="text center">' + get.translation(node.player) + '阵亡</div>');
						uiintro.addSmall([node.player]);
					}
					else {
						uiintro.add('<div class="text center">' + get.translation(node.player) + '被' + get.translation(node.source) + '杀害</div>');
						uiintro.addSmall([node.source]);
					}
				}
				if (node.skill) {
					uiintro.add('<div class="text center">' + get.translation(node.skill, 'skill') + '</div>');
					uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + get.translation(node.skill, 'info') + '</div>');
				}
				if (node.targets && get.itemtype(node.targets) == 'players') {
					uiintro.add('<div class="text center">目标</div>');
					uiintro.addSmall(node.targets);
				}
				if (node.players && node.players.length > 1) {
					uiintro.add('<div class="text center">使用者</div>');
					uiintro.addSmall(node.players);
				}
				if (node.cards && node.cards.length) {
					uiintro.add('<div class="text center">卡牌</div>');
					uiintro.addSmall(node.cards);
				}
				for (var i = 0; i < node.added.length; i++) {
					uiintro.add(node.added[i]);
				}
				if (node.added.length) {
					uiintro.add(ui.create.div('.placeholder.slim'));
				}
				if (uiintro.content.firstChild) {
					uiintro.content.firstChild.style.paddingTop = '3px';
				}
			}
			if (lib.config.touchscreen) {
				lib.setScroll(uiintro.contentContainer);
			}
			return uiintro;
		};
	}
	
	// 整合自写并魔改的2-17人扩展
	lib.arenaReady.push(function(){
		// 完善9-50人国战模式其他-控制界面座位号翻译
		lib.translate.unknown8 = "九号位";
		lib.translate.unknown9 = "十号位";
		lib.translate.unknown10 = "十一号位";
		lib.translate.unknown11 = "十二号位";
		lib.translate.unknown12 = "十三号位";
		lib.translate.unknown13 = "十四号位";
		lib.translate.unknown14 = "十五号位";
		lib.translate.unknown15 = "十六号位";
		lib.translate.unknown16 = "十七号位";
		
		lib.translate.unknown17 = "十八号位";
		lib.translate.unknown18 = "十九号位";
		lib.translate.unknown19 = "二十号位";
		lib.translate.unknown20 = "二十一号位";
		lib.translate.unknown21 = "二十二号位";
		lib.translate.unknown22 = "二十三号位";
		lib.translate.unknown23 = "二十四号位";
		lib.translate.unknown24 = "二十五号位";
		lib.translate.unknown25 = "二十六号位";
		lib.translate.unknown26 = "二十七号位";
		lib.translate.unknown27 = "二十八号位";
		lib.translate.unknown28 = "二十九号位";
		lib.translate.unknown29 = "三十号位";
		lib.translate.unknown30 = "三十一号位";
		lib.translate.unknown31 = "三十二号位";
		lib.translate.unknown32 = "三十三号位";
		lib.translate.unknown33 = "三十四号位";
		lib.translate.unknown34 = "三十五号位";
		lib.translate.unknown35 = "三十六号位";
		lib.translate.unknown36 = "三十七号位";
		lib.translate.unknown37 = "三十八号位";
		lib.translate.unknown38 = "三十九号位";
		lib.translate.unknown39 = "四十号位";
		lib.translate.unknown40 = "四十一号位";
		lib.translate.unknown41 = "四十二号位";
		lib.translate.unknown42 = "四十三号位";
		lib.translate.unknown43 = "四十四号位";
		lib.translate.unknown44 = "四十五号位";
		lib.translate.unknown45 = "四十六号位";
		lib.translate.unknown46 = "四十七号位";
		lib.translate.unknown47 = "四十八号位";
		lib.translate.unknown48 = "四十九号位";
		lib.translate.unknown49 = "五十号位";
		// 界面缩放
		lib.configMenu.appearence.config.ui_zoom={
			name:'界面缩放',
			unfrequent:true,
			init:'normal',
			item:{
				normalw:'170%',
				normalv:'165%',
				normalu:'160%',
				normalt:'155%',
				normals:'150%',
				normalr:'145%',
				normalq:'140%',
				normalp:'135%',
				normala:'130%',
				normalb:'125%',
				normalc:'120%',
				normald:'115%',
				normale:'110%',
				normalf:'105%',
				normal:'100%',
				normalg:'95%',
				normalh:'90%',
				normali:'85%',
				normalj:'80%',
				normalk:'75%',
				normall:'70%',
				normalm:'65%',
				normaln:'60%',
				normalo:'55%',
			},
			onclick:function(zoom){
				game.saveConfig('ui_zoom',zoom);
				// 扩展界面缩放设置与本体界面缩放设置保持一致
				game.saveConfig('extension_搬运自用_kzjmsf',zoom);
				switch(zoom){
					case 'normalw':zoom=1.7;break;
					case 'normalv':zoom=1.65;break;
					case 'normalu':zoom=1.6;break;
					case 'normalt':zoom=1.55;break;
					case 'normals':zoom=1.5;break;
					case 'normalr':zoom=1.45;break;
					case 'normalq':zoom=1.4;break;
					case 'normalp':zoom=1.35;break;
					case 'normala':zoom=1.3;break;
					case 'normalb':zoom=1.25;break;
					case 'normalc':zoom=1.2;break;
					case 'normald':zoom=1.15;break;
					case 'normale':zoom=1.1;break;
					case 'normalf':zoom=1.05;break;
					case 'normalg':zoom=0.95;break;
					case 'normalh':zoom=0.9;break;
					case 'normali':zoom=0.85;break;
					case 'normalj':zoom=0.8;break;
					case 'normalk':zoom=0.75;break;
					case 'normall':zoom=0.7;break;
					case 'normalm':zoom=0.65;break;
					case 'normaln':zoom=0.6;break;
					case 'normalo':zoom=0.55;break;
					default:zoom=1;
				}
				game.documentZoom=game.deviceZoom*zoom;
				ui.updatez();
				// 手动更改缩放后也应触发一次lib.onresize
				if (Array.isArray(lib.onresize)) {
					lib.onresize.forEach(fun => {
						if (typeof fun == 'function') fun();
					});
				}
			}
		};
		
		var zoom;
		switch(lib.config.ui_zoom){
			case 'normalw':zoom=1.7;break;
			case 'normalv':zoom=1.65;break;
			case 'normalu':zoom=1.6;break;
			case 'normalt':zoom=1.55;break;
			case 'normals':zoom=1.5;break;
			case 'normalr':zoom=1.45;break;
			case 'normalq':zoom=1.4;break;
			case 'normalp':zoom=1.35;break;
			case 'normala':zoom=1.3;break;
			case 'normalb':zoom=1.25;break;
			case 'normalc':zoom=1.2;break;
			case 'normald':zoom=1.15;break;
			case 'normale':zoom=1.1;break;
			case 'normalf':zoom=1.05;break;
			case 'normalg':zoom=0.95;break;
			case 'normalh':zoom=0.9;break;
			case 'normali':zoom=0.85;break;
			case 'normalj':zoom=0.8;break;
			case 'normalk':zoom=0.75;break;
			case 'normall':zoom=0.7;break;
			case 'normalm':zoom=0.65;break;
			case 'normaln':zoom=0.6;break;
			case 'normalo':zoom=0.55;break;
			default:zoom=1;
		}
		game.documentZoom=game.deviceZoom*zoom;
		if(zoom!=1){
			ui.updatez();
		}
		
		// 触屏按钮位置调整
		if(lib.config.cpanwztz == 'shouji1'||lib.config.cpanwztz == 'shouji2'||lib.config.cpanwztz == 'shouji3'||lib.config.cpanwztz == 'shouji4'||lib.config.cpanwztz == 'diannao1'||lib.config.cpanwztz == 'diannao2'||lib.config.cpanwztz == 'diannao3'){
			if (lib.device) {
				// 手机端触屏按钮位置调整
				if(ui.roundmenu){
					if(lib.config.cpanwztz == 'shouji1'){
						ui.roundmenu.style.left = '211px';
						ui.roundmenu.style.top = '249px';
					}
					if(lib.config.cpanwztz == 'shouji2'){
						ui.roundmenu.style.left = '225px';
						ui.roundmenu.style.top = '264px';
					}
					if(lib.config.cpanwztz == 'shouji3'){
						ui.roundmenu.style.left = '237px';
						ui.roundmenu.style.top = '280px';
					}
					if(lib.config.cpanwztz == 'shouji4'){
						ui.roundmenu.style.left = '305px';
						ui.roundmenu.style.top = '465px';
					}
				}
			} else {
				// 电脑端触屏按钮位置调整
				if(ui.roundmenu){
					if(lib.config.cpanwztz == 'diannao1'){
						ui.roundmenu.style.left = '231px';
						ui.roundmenu.style.top = '345px';
					}
					if(lib.config.cpanwztz == 'diannao2'){
						ui.roundmenu.style.left = '253px';
						ui.roundmenu.style.top = '331px';
					}
					if(lib.config.cpanwztz == 'diannao3'){
						ui.roundmenu.style.left = '280px';
						ui.roundmenu.style.top = '544px';
					}
				}
			}
			// 关闭记住按钮位置设置开关
			lib.configMenu.view.config.remember_round_button.onclick(false);
		} else {
			// 本扩展接管了本体触屏按钮位置的设置（修改本体代码无效，若想调整触屏按钮位置要修改本扩展默认位置）
			// 若关闭本选项，则调整为默认位置
			if (lib.device) {
				// 手机端
				if(ui.roundmenu){
					ui.roundmenu.style.left = '211px';
					ui.roundmenu.style.top = '249px';
				}
			} else {
				// 电脑端
				if(ui.roundmenu){
					ui.roundmenu.style.left = '231px';
					ui.roundmenu.style.top = '345px';
				}
			}
			// 开启记住按钮位置设置开关
			lib.configMenu.view.config.remember_round_button.onclick(true);
		}
		
	});
	
	// 初始界面缩放比例设置
	if (lib.config.kzjmsf == undefined) {
		if (lib.device) {
			// 手机端
			var item = 'normal';
			lib.extensionMenu['extension_搬运自用'].kzjmsf.onclick(item);
			game.saveConfig('extension_搬运自用_kzjmsf',item);
			game.saveConfig('kzjmsf',item);
		} else {
			// 电脑端
			var item = 'normalp';
			lib.extensionMenu['extension_搬运自用'].kzjmsf.onclick(item);
			game.saveConfig('extension_搬运自用_kzjmsf',item);
			game.saveConfig('kzjmsf',item);
		}
	}
	
	// 多人场设置
	_status.maximumNumberOfPlayers=lib.config['extension_搬运自用_zuiduoyouxirenshu'];
	// 修改game.js的函数updatePlayerPositions:numberOfPlayers=>{
	ui.updatePlayerPositions=function(numberOfPlayers){
		if(typeof numberOfPlayers!='number') numberOfPlayers=ui.arena.dataset.number;
		// 当人数不超过8人时，还是用以前的布局
		// 当人数不超过17人时：若开启使用本体布局开关或关闭2-17人场开关，则使用本体布局；否则是用本扩展的布局
		if(!numberOfPlayers||numberOfPlayers<=8||(numberOfPlayers<=17&&!lib.config['extension_搬运自用_bentibuju']&&lib.config.byzy_shenfenchangkg != false)) return;
		
		const playerPositions=ui.playerPositions;
		playerPositions.forEach((position) => {
			game.dynamicStyle.remove(position);
		});
		playerPositions.length = 0;
		//单个人物的宽度，这里要设置玩家的实际的宽度
		const temporaryPlayer=ui.create.div('.player',ui.arena).hide();
		const computedStyle=getComputedStyle(temporaryPlayer);
		const scale=6/numberOfPlayers;
		//玩家顶部距离父容器上边缘的距离偏移的单位距离
		const quarterHeight=parseFloat(computedStyle.height)/4*scale;
		const halfWidth=parseFloat(computedStyle.width)/2;
		temporaryPlayer.remove();
		//列数，即假如8人场，除去自己后，上面7个人占7列
		const columnCount=numberOfPlayers-1;
		const percentage=90/(columnCount-1);
		//仅当游戏人数大于8人，且玩家的座位号大于0时，设置玩家的位置；因为0号位是game.me在最下方，无需设置
		for(let ordinal=1;ordinal<numberOfPlayers;ordinal++){
			const reversedOrdinal=columnCount-ordinal;
			//动态计算玩家的top属性，实现拱桥的效果；只让两边的各两个人向下偏移一些
			const top=Math.max(0,Math.round(numberOfPlayers/5)-Math.min(Math.abs(ordinal-1),Math.abs(reversedOrdinal)))*quarterHeight;
			const selector = `#arena[data-number='${numberOfPlayers}']>.player[data-position='${ordinal}']`;
			game.dynamicStyle.add(selector, {
				left: `calc(${percentage*reversedOrdinal+5}% - ${halfWidth}px)`,
				top: `${top}px`,
				transform: `scale(${scale})`
			});
			playerPositions.push(selector);
		}
	};
	
	game.saveConfig('youxirenshu_identityguozhan',true);
	// 2-17人场开关
	if (lib.config.byzy_shenfenchangkg != false) {
		// 使用本体布局开启时不用扩展布局
		if (!lib.config['extension_搬运自用_bentibuju']) {
			// 9-17人布局
			var style1=document.createElement('style');
			// 9人
			style1.innerHTML+="[data-number='9']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='2']{top:18px;left:auto;right:calc(14% - 18px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='3']{top:9px;left:auto;right:calc(27% - 19px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='4']{top:0px;left:auto;right:calc(40% - 16px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='5']{top:0px;left:calc(40% - 16px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='6']{top:9px;left:calc(27% - 19px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='7']{top:18px;left:calc(14% - 18px);}";
			style1.innerHTML+="[data-number='9']>.player[data-position='8']{top:72px;left:calc(2% - 30px);}";
			// 10人
			style1.innerHTML+="[data-number='10']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='2']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='3']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='4']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='5']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='6']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='7']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='8']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='10']>.player[data-position='9']{top:72px;left:calc(2% - 30px);}";
			// 11人
			style1.innerHTML+="[data-number='11']>.player[data-position='1']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='2']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='3']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='4']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='5']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='6']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='7']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='8']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='9']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='11']>.player[data-position='10']{top:72px;left:calc(2% - 30px);}";
			// 12人
			style1.innerHTML+="[data-number='12']>.player[data-position='1']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='2']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='3']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='4']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='5']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='6']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='7']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='8']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='9']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='10']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='12']>.player[data-position='11']{top:275px;left:calc(2% - 30px);}";
			// 13人
			style1.innerHTML+="[data-number='13']>.player[data-position='1']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='2']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='3']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='4']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='5']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='6']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='7']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='8']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='9']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='10']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='11']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='13']>.player[data-position='12']{top:275px;left:calc(2% - 30px);}";
			// 14人
			style1.innerHTML+="[data-number='14']>.player[data-position='1']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='2']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='3']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='4']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='5']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='6']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='7']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='8']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='9']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='10']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='11']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='12']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='14']>.player[data-position='13']{top:275px;left:calc(12% - 28px);}";
			// 15人
			style1.innerHTML+="[data-number='15']>.player[data-position='1']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='2']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='3']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='4']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='5']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='6']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='7']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='8']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='9']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='10']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='11']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='12']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='13']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='15']>.player[data-position='14']{top:275px;left:calc(12% - 28px);}";
			// 16人
			style1.innerHTML+="[data-number='16']>.player[data-position='1']{top:275px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='2']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='3']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='4']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='5']{top:36px;left:auto;right:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='6']{top:18px;left:auto;right:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='7']{top:9px;left:auto;right:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='8']{top:0px;left:calc(47% - 22.5px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='9']{top:9px;left:calc(36% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='10']{top:18px;left:calc(25% - 32px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='11']{top:36px;left:calc(14% - 38px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='12']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='13']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='14']{top:275px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='16']>.player[data-position='15']{top:275px;left:calc(22% - 26px);}";
			// 17人
			style1.innerHTML+="[data-number='17']>.player[data-position='1']{top:275px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='2']{top:275px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='3']{top:275px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='4']{top:72px;left:auto;right:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='5']{top:36px;left:auto;right:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='6']{top:18px;left:auto;right:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='7']{top:9px;left:auto;right:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='8']{top:0px;left:auto;right:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='9']{top:0px;left:calc(42% - 22.5px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='10']{top:9px;left:calc(32% - 24px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='11']{top:18px;left:calc(22% - 26px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='12']{top:36px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='13']{top:72px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='14']{top:275px;left:calc(2% - 30px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='15']{top:275px;left:calc(12% - 28px);}";
			style1.innerHTML+="[data-number='17']>.player[data-position='16']{top:275px;left:calc(22% - 26px);}";
			document.head.appendChild(style1);
		}
		
		/*
		lib.mode.identity.config.player_number.item={
			'2':'两人',
			'3':'三人',
			'4':'四人',
			'5':'五人',
			'6':'六人',
			'7':'七人',
			'8':'八人',
			'9':'九人',
			'10':'十人',
			'11':'十一人',
			'12':'十二人',
			'13':'十三人',
			'14':'十四人',
			'15':'十五人',
			'16':'十六人',
			'17':'十七人',
		};
		lib.mode.guozhan.config.player_number.item={
			'2':'两人',
			'3':'三人',
			'4':'四人',
			'5':'五人',
			'6':'六人',
			'7':'七人',
			'8':'八人',
			'9':'九人',
			'10':'十人',
			'11':'十一人',
			'12':'十二人',
			'13':'十三人',
			'14':'十四人',
			'15':'十五人',
			'16':'十六人',
			'17':'十七人',
		};
		*/
		
		// 2-17人身份选项
		// 2人
		if(config.two2Man=='1'){
			lib.config.mode_config.identity.identity[0]=['zhu','fan'];
		}
		if(config.two2Man=='2'){
			lib.config.mode_config.identity.identity[0]=['zhu','nei'];
		}
		// 3人
		if(config.three3Man=='1'){
			lib.config.mode_config.identity.identity[1]=['zhu','nei','fan'];
		}
		if(config.three3Man=='2'){
			lib.config.mode_config.identity.identity[1]=['zhu','zhong','fan'];
		}
		if(config.three3Man=='3'){
			lib.config.mode_config.identity.identity[1]=['zhu','zhong','nei'];
		}
		if(config.three3Man=='4'){
			lib.config.mode_config.identity.identity[1]=['zhu','fan','fan'];
		}
		if(config.three3Man=='5'){
			lib.config.mode_config.identity.identity[1]=['zhu','nei','nei'];
		}
		// 4人
		if(config.four4Man=='1'){
			lib.config.mode_config.identity.identity[2]=['zhu','zhong','nei','fan'];
		}
		if(config.four4Man=='2'){
			lib.config.mode_config.identity.identity[2]=['zhu','zhong','fan','fan'];
		}
		if(config.four4Man=='3'){
			lib.config.mode_config.identity.identity[2]=['zhu','zhong','zhong','fan'];
		}
		if(config.four4Man=='4'){
			lib.config.mode_config.identity.identity[2]=['zhu','nei','nei','fan'];
		}
		if(config.four4Man=='5'){
			lib.config.mode_config.identity.identity[2]=['zhu','fan','fan','fan'];
		}
		if(config.four4Man=='6'){
			lib.config.mode_config.identity.identity[2]=['zhu','nei','nei','nei'];
		}
		// 5人
		if(config.five5Man=='1'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','nei','fan','fan'];
		}
		if(config.five5Man=='2'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','fan','fan','fan'];
		}
		if(config.five5Man=='3'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','nei','nei','nei'];
		}
		if(config.five5Man=='4'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','zhong','zhong','fan'];
		}
		if(config.five5Man=='5'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','zhong','fan','fan'];
		}
		if(config.five5Man=='6'){
			lib.config.mode_config.identity.identity[3]=['zhu','zhong','zhong','nei','nei'];
		}
		if(config.five5Man=='7'){
			lib.config.mode_config.identity.identity[3]=['zhu','nei','nei','fan','fan'];
		}
		if(config.five5Man=='8'){
			lib.config.mode_config.identity.identity[3]=['zhu','fan','fan','fan','fan'];
		}
		if(config.five5Man=='9'){
			lib.config.mode_config.identity.identity[3]=['zhu','nei','nei','nei','nei'];
		}
		// 6人
		if(config.six6Man=='1'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','nei','fan','fan','fan'];
		}
		if(config.six6Man=='2'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','fan','fan','fan','fan'];
		}
		if(config.six6Man=='3'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','nei','nei','nei','fan'];
		}
		if(config.six6Man=='4'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','zhong','zhong','zhong','fan'];
		}
		if(config.six6Man=='5'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','zhong','zhong','fan','fan'];
		}
		if(config.six6Man=='6'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','zhong','zhong','nei','nei'];
		}
		if(config.six6Man=='7'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','zhong','fan','fan','fan'];
		}
		if(config.six6Man=='8'){
			lib.config.mode_config.identity.identity[4]=['zhu','zhong','zhong','nei','nei','fan'];
		}
		if(config.six6Man=='9'){
			lib.config.mode_config.identity.identity[4]=['zhu','nei','nei','fan','fan','fan'];
		}
		if(config.six6Man=='10'){
			lib.config.mode_config.identity.identity[4]=['zhu','nei','nei','nei','nei','fan'];
		}
		if(config.six6Man=='11'){
			lib.config.mode_config.identity.identity[4]=['zhu','fan','fan','fan','fan','fan'];
		}
		if(config.six6Man=='12'){
			lib.config.mode_config.identity.identity[4]=['zhu','nei','nei','nei','nei','nei'];
		}
		// 7人
		if(config.seven7Man=='1'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','nei','fan','fan','fan'];
		}
		if(config.seven7Man=='2'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','fan','fan','fan','fan'];
		}
		if(config.seven7Man=='3'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','nei','nei','nei','fan'];
		}
		if(config.seven7Man=='4'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','zhong','zhong','zhong','fan'];
		}
		if(config.seven7Man=='5'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','zhong','zhong','fan','fan'];
		}
		if(config.seven7Man=='6'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','zhong','zhong','nei','nei'];
		}
		if(config.seven7Man=='7'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','zhong','fan','fan','fan'];
		}
		if(config.seven7Man=='8'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','zhong','zhong','nei','nei','fan'];
		}
		if(config.seven7Man=='9'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','fan','fan','fan','fan','fan'];
		}
		if(config.seven7Man=='10'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','nei','nei','fan','fan','fan'];
		}
		if(config.seven7Man=='11'){
			lib.config.mode_config.identity.identity[5]=['zhu','zhong','nei','nei','nei','nei','fan'];
		}
		if(config.seven7Man=='12'){
			lib.config.mode_config.identity.identity[5]=['zhu','nei','nei','fan','fan','fan','fan'];
		}
		if(config.seven7Man=='13'){
			lib.config.mode_config.identity.identity[5]=['zhu','nei','nei','nei','nei','fan','fan'];
		}
		if(config.seven7Man=='14'){
			lib.config.mode_config.identity.identity[5]=['zhu','fan','fan','fan','fan','fan','fan'];
		}
		if(config.seven7Man=='15'){
			lib.config.mode_config.identity.identity[5]=['zhu','nei','nei','nei','nei','nei','nei'];
		}
		// 8人
		if(config.eight8Man=='1'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','nei','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='2'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','fan','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='3'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','nei','nei','nei','fan','fan'];
		}
		if(config.eight8Man=='4'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','nei','nei','nei','nei','nei'];
		}
		if(config.eight8Man=='5'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan'];
		}
		if(config.eight8Man=='6'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan'];
		}
		if(config.eight8Man=='7'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei'];
		}
		if(config.eight8Man=='8'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan'];
		}
		if(config.eight8Man=='9'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','zhong','nei','nei','fan'];
		}
		if(config.eight8Man=='10'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='11'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','nei','nei','fan','fan'];
		}
		if(config.eight8Man=='12'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','zhong','nei','nei','nei','nei'];
		}
		if(config.eight8Man=='13'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','fan','fan','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='14'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','nei','nei','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='15'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','nei','nei','nei','nei','fan','fan'];
		}
		if(config.eight8Man=='16'){
			lib.config.mode_config.identity.identity[6]=['zhu','zhong','nei','nei','nei','nei','nei','nei'];
		}
		if(config.eight8Man=='17'){
			lib.config.mode_config.identity.identity[6]=['zhu','nei','nei','fan','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='18'){
			lib.config.mode_config.identity.identity[6]=['zhu','nei','nei','nei','nei','fan','fan','fan'];
		}
		if(config.eight8Man=='19'){
			lib.config.mode_config.identity.identity[6]=['zhu','nei','nei','nei','nei','nei','nei','fan'];
		}
		if(config.eight8Man=='20'){
			lib.config.mode_config.identity.identity[6]=['zhu','fan','fan','fan','fan','fan','fan','fan'];
		}
		if(config.eight8Man=='21'){
			lib.config.mode_config.identity.identity[6]=['zhu','nei','nei','nei','nei','nei','nei','nei'];
		}
		// 9人
		if(config.nine9Man=='1'){
			lib.config.mode_config.identity.identity[7]=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'];
		}
		if(config.nine9Man=='2'){
			lib.config.mode_config.identity.identity[7]=['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
		}
		if(config.nine9Man=='3'){
			lib.config.mode_config.identity.identity[7]=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan'];
		}
		if(config.nine9Man=='4'){
			lib.config.mode_config.identity.identity[7]=['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan'];
		}
		if(config.nine9Man=='5'){
			lib.config.mode_config.identity.identity[7]=['zhu','fan','fan','fan','fan','fan','fan','fan','fan'];
		}
		if(config.nine9Man=='6'){
			lib.config.mode_config.identity.identity[7]=['zhu','nei','nei','nei','nei','nei','nei','nei','nei'];
		}
		// 10人
		if(config.ten10Man=='1'){
			lib.config.mode_config.identity.identity[8]=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'];
		}
		if(config.ten10Man=='2'){
			lib.config.mode_config.identity.identity[8]=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'];
		}
		if(config.ten10Man=='3'){
			lib.config.mode_config.identity.identity[8]=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
		}
		if(config.ten10Man=='4'){
			lib.config.mode_config.identity.identity[8]=['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan'];
		}
		if(config.ten10Man=='5'){
			lib.config.mode_config.identity.identity[8]=['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei'];
		}
		// 11人
		if(config.eleven11Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
		}
		if(config.eleven11Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
		}
		if(config.eleven11Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
		}
		if(config.eleven11Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
		}
		if(config.eleven11Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.eleven11Man=='6'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 12人
		if(config.twelve12Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
		}
		if(config.twelve12Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
		}
		if(config.twelve12Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
		}
		if(config.twelve12Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.twelve12Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 13人
		if(config.thirteen13Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
		}
		if(config.thirteen13Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.thirteen13Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
		}
		if(config.thirteen13Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
		}
		if(config.thirteen13Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.thirteen13Man=='6'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 14人
		if(config.fourteen14Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fourteen14Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fourteen14Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fourteen14Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fourteen14Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 15人
		if(config.fifteen15Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fifteen15Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fifteen15Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fifteen15Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fifteen15Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.fifteen15Man=='6'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 16人
		if(config.Sixteen16Man=='1'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Sixteen16Man=='2'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Sixteen16Man=='3'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Sixteen16Man=='4'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Sixteen16Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Sixteen16Man=='6'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
		// 17人
		if(config.Seventeen17Man=='1'){
		lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='2'){
		lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='3'){
		lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='4'){
		lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='5'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='6'){
			lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','nei','nei','nei','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='7'){
			lib.config.mode_config.identity.identity.push(['zhu','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan','fan']);
		}
		if(config.Seventeen17Man=='8'){
			lib.config.mode_config.identity.identity.push(['zhu','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei','nei']);
		}
	}
	
	// 取消弹窗警告（搬运自群英会扩展，已征得Sukincen的修改许可）
	if(config.byzy_cancelwindow){
		window.onerror=function(msg,src,line,column,err){};
	}
	
	// 自动一键导入重启
	if (config.byzy_zdyjdrcq) {
		game.yjdrcqgn(true);
	}
	// 扩展导入完成后，再次重启时，检测扩展文件夹名是否正确，新增为防出现bug请修正的提示
	for(var i in lib.extensionPack){
		if(!lib.config.extensions.contains(i)){
			alert("检测到扩展文件夹名不正确！\r将会引起很多跟路径相关的bug，而且这样导入的扩展无法在游戏内删除。\n\r为防出现bug，请依照如下路径修正扩展文件夹名:\n游戏目录/extension/" + i);
		}
	}
	
	// 自娱自乐，魔改自本体game.js函数autoswap:{
	lib.skill._byzyziyuzile={
		firstDo:true,
		trigger:{player:['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
		'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
		'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin','chooseToMoveBegin','chooseToPlayBeatmapBegin','chooseToGiveBegin',
		'phaseZhunbeiBefore'
		]},
		forced:true,
		priority:1000,
		forceDie:true,
		popup:false,
		filter:function(event,player){
			// if(event.autochoose&&event.autochoose()) return false;
			// if(lib.filter.wuxieSwap(event)) return false;
			// if(_status.auto||!player.isUnderControl()) return false;
			// return true;
			return lib.config.byzy_ziyuzile==true;
		},
		content:function(){
			game.swapPlayerAuto(player);
		},
	};
	
	// 手牌可视，魔改自本体versus.js函数versus_viewHandcard:{
	lib.skill._byzyshoupaikeshi={
		ai:{
			viewHandcard:true,
			skillTagFilter:function(player,tag,target){
				return lib.config.byzy_shoupaikeshi==true && target != game.me;
			},
		},
	};
	
	// 调整手牌和牌堆功能
	if (config.byzy_tiaozhengshoupai) {
		lib.skill._byzy_tiaozhengshoupai = {
			trigger: {
				global: 'gameDrawAfter',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 800,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode) && !(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']==false);
			},
			content: function () {
				'step 0'
				var oldconfiglist = [game.filterPlayer().length,lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']];
				event.configbackup = oldconfiglist;
				
				var list = [];
				
				if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']==false) {
					list.push([get.translation(game.me.name)+"的手牌", game.me.getCards("h")]);
				} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
					for (var target of game.filterPlayer().sortBySeat()) {
						if(target!=game.me) list.push([get.translation(target.name)+"的手牌", target.getCards("h")]);
					}
				} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
					for (var target of game.filterPlayer().sortBySeat()) {
						list.push([get.translation(target.name)+"的手牌", target.getCards("h")]);
					}
				}
				
				if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) {
					var uicardPile = [];
					for (var m = 0; m < ui.cardPile.childElementCount; m++) {
						var cardPile = ui.cardPile.childNodes[m];
						uicardPile.push(cardPile);
					}
				}
				
				if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
					var uidiscardPile = [];
					for (var n = 0; n < ui.discardPile.childElementCount; n++) {
						var discardPile = ui.discardPile.childNodes[n];
						uidiscardPile.push(discardPile);
					}
				}
				
				if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) list.push(["牌堆（顺序为牌堆顶→牌堆底）", uicardPile]);
				if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) list.push(["弃牌堆（顺序为弃牌堆顶→弃牌堆顶底）", uidiscardPile.reverse()]);
				
				var next = player.chooseToMove("请调整手牌和牌堆（若对话框显示不完整，可下滑操作）", true);
				next.set("list", list);
				next.set("processAI", function (list) {
					event.result = { bool: false };
				});
				'step 1'
				if(result.bool) {
					var newconfiglist = [game.filterPlayer().length,lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']];
					var resultbool = false;
					
					for (var i = 0; i < newconfiglist.length; i++) {
						if(event.configbackup[i] !== newconfiglist[i]) {
							resultbool = true;
							break;
						}
					}
					
					// 场上角色数发生变化后/操作过程中改变设置后不继续执行代码
					if(resultbool) {
						event.goto(2);
					} else {
						var moved = result.moved;
						
						var cards = {};
						for (var i = 0; i < moved.length; i++) {
							cards[i] = moved[i];
						}
						
						if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']==false) {
							var hs = cards[0].reverse();
							hs.forEach(i => i.goto(ui.special));
							game.me.directgain(hs, false);
						} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
							var players = game.filterPlayer().sortBySeat();
							for (var j = 1; j < players.length; j++) {
								var hs = cards[j-1].reverse();
								hs.forEach(i => i.goto(ui.special));
								players[j].directgain(hs, false);
							}
						} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
							var players = game.filterPlayer().sortBySeat();
							for (var j = 0; j < players.length; j++) {
								var hs = cards[j].reverse();
								hs.forEach(i => i.goto(ui.special));
								players[j].directgain(hs, false);
							}
						}
						
						if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) {
							var mlinks;
							if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
								mlinks = moved[moved.length-2];
							} else mlinks = moved[moved.length-1];
							for (var m = 0; m < mlinks.length; m++) {
								ui.cardPile.appendChild(mlinks[m]);
							}
						}
						
						if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
							var nlinks = moved[moved.length-1];
							nlinks.reverse();
							for (var n = 0; n < nlinks.length; n++) {
								ui.discardPile.appendChild(nlinks[n]);
							}
						}
					}
				} else event.finish();
				'step 2'
				ui.updatehl();
				game.updateRoundNumber();
				// 临时修复手牌数显示无法及时更新的bug
				if(!(lib.config.extensions && lib.config.extensions.contains('十周年UI') && lib.config['extension_十周年UI_enable'] && (lib.config['extension_十周年UI_szn_shoupaishangxian']==true || lib.config['extension_十周年UI_szn_shoupaishuxsxf']==true))) {
					var libUpdate = player => {
						var numh = player.countCards('h');
						player.node.count.innerHTML = numh;
					}
					var players = game.filterPlayer().sortBySeat();
					for (var i = 0; i < players.length; i++) {
						libUpdate(players[i]);
					}
				}
				game.delayx();
				'step 3'
				player.chooseBool('是否继续调整手牌和牌堆？').ai=function(event,player){
					event.result = { bool: false };
				};
				'step 4'
				if(result.bool){
					event.goto(0);
				}else{
					event.finish();
				}
			},
		};
	}
	
	// 所有角色使用手气卡
	if (config.byzy_sqkall) {
		lib.skill._byzy_sqkall = {
			trigger: {
				global: 'gameDrawAfter',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 801,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				'step 0'
				player.chooseBool('是否令所有角色选择是否使用手气卡？').ai=function(event,player){
					event.result = { bool: false };
				};
				'step 1'
				if(result.bool) {
					var targets = game.filterPlayer().sortBySeat();
					if(lib.config.byzy_sqkallsx=='1') {
						event.targets = targets.reverse();
					} else event.targets = targets;
				} else event.goto(9);
				'step 2'
				var target = targets.shift();
				event.target = target;
				if(lib.config.byzy_ziyuzile==true) {
					event.changeCardnum = lib.config.extension_搬运自用_byzy_sqkallcs === undefined ? 1 : Number(lib.config.extension_搬运自用_byzy_sqkallcs);
					event.goto(3);
				} else {
					event.goto(5);
				}
				'step 3'
				target.chooseBool('是否使用手气卡？').ai=function(event,player){
					event.result = { bool: true };
				};
				'step 4'
				if(result.bool) {
					event.goto(5);
				} else event.goto(7);
				'step 5'
				game.byzyusesqk(target);
				if(lib.config.byzy_ziyuzile==true) game.delayx(2);
				'step 6'
				if(lib.config.byzy_ziyuzile==true) {
					event.changeCardnum-=1;
					if(event.changeCardnum>0) {
						event.goto(3);
					}
				} else {
					event.goto(7);
				}
				'step 7'
				if (targets.length > 0) event.goto(2);
				'step 8'
				event.goto(0);
				'step 9'
				event.finish();
			},
		};
	}
	
	// 交换位置功能，搬运自祖安武将扩展，分离自原功能【游戏自定义工具】，已征得Helasisy星云的修改许可
	if (config.byzy_diycharacterskill) {
		lib.skill._byzy_diycharacterskill = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 800,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				'step 0'
				player.chooseTarget("请选择交换位置的两名角色", 2).set('ai',function(target){
					return 0;
				});
				'step 1'
				if(result.bool) {
					event.target = result.targets;
					game.swapSeat(event.target[0],event.target[1]);
				} else event.finish();
				'step 2'
				event.goto(0);
			},
		};
	}
	
	// 自由选将-随机按钮，搬运自假装无敌扩展，延时调用（可自行调整时间，保证加载到位）
	if (config.byzy_anniusuiji) {
		setTimeout(function(){
			var characterRandomGets = Object.keys(lib.character).randomGets(parseInt(lib.config.recent_character_number));
			lib.characterDialogGroup['随机'] = function (name, capt) {
				return characterRandomGets.includes(name)?capt:null;
			}
			var createDialog = {
				// 修改game.js的函数characterDialog:function(){
				characterDialog:function(){
					var filter = function (name) {
						var info = lib.character[name];
					}, str, noclick, thisiscard, seperate, expandall, onlypack, target, heightset, precharacter, characterx;
					for(var i=0;i<arguments.length;i++){
						if(arguments[i]==='thisiscard'){
							thisiscard=true;
						} else if (get.itemtype(arguments[i]) === 'player') {
							target = arguments[i];
						} else if(arguments[i]==='expandall'){
							expandall=true;
						}
						else if(arguments[i]==='heightset'){
							heightset=true;
						}
						else if(arguments[i]=='precharacter'){
							precharacter=true;
						}
						else if(arguments[i]=='characterx'){
							characterx=true;
						}
						else if(typeof arguments[i]=='string'&&arguments[i].startsWith('onlypack:')){
							onlypack=arguments[i].slice(9);
						}
						else if(typeof arguments[i]=='object'&&typeof arguments[i].seperate=='function'){
							seperate=arguments[i].seperate;
						}
						else if(typeof arguments[i]==='string'){
							str=arguments[i];
						}
						else if(typeof arguments[i]==='function'){
							filter=arguments[i];
						}
						else if(typeof arguments[i]=='boolean'){
							noclick=arguments[i];
						}
					}
					var list=[];
					const groups=[];
					var dialog;
					var node=ui.create.div('.caption.pointerspan');
					if(get.is.phoneLayout()){
						node.style.fontSize='30px';
					}
					var namecapt=[];
					var getCapt=function(str){
						var capt;
						if(str.indexOf('_')==-1){
							capt=str[0];
						}
						else{
							capt=str[str.lastIndexOf('_')+1];
						}
						capt=capt.toLowerCase();
						if(!/[a-z]/i.test(capt)){
							capt='自定义';
						}
						return capt;
					}
					if(thisiscard){
						for(var i in lib.card){
							if(!lib.translate[i+'_info']) continue;
							if(filter&&filter(i)) continue;
							list.push(['',get.translation(lib.card[i].type),i]);
							if(namecapt.indexOf(getCapt(i))==-1){
								namecapt.push(getCapt(i));
							}
						}
					}
					else{
						for(var i in lib.character){
							// 修复幻化之战重新选将弹窗
							if(lib.character[i][4]){
								if(lib.character[i][4].contains('minskin')) continue;
								if(lib.character[i][4].contains('boss')||lib.character[i][4].contains('hiddenboss')){
									if(lib.config.mode=='boss') continue;
									if(!lib.character[i][4].contains('bossallowed')) continue;
								}
								
								if(lib.character[i][4].contains('stonehidden')) continue;
								if(lib.character[i][4].contains('unseen')) continue;
							}
							if(lib.config.banned.contains(i)) continue;
							if(lib.characterFilter[i]&&!lib.characterFilter[i](get.mode())) continue;
							if(filter&&filter(i)) continue;
							list.push(i);
							if(get.is.double(i)){
								groups.add('double');
							}
							else groups.add(lib.character[i][1]);
							if(namecapt.indexOf(getCapt(i))==-1){
								namecapt.push(getCapt(i));
							}
						}
					}
					namecapt.sort(function(a,b){
						return a>b?1:-1;
					});
					groups.sort(lib.sort.group);
					if(!thisiscard){
						namecapt.remove('自定义');
						namecapt.push('newline');
						for(var i in lib.characterDialogGroup){
							namecapt.push(i);
						}
					}
					var newlined=false;
					var newlined2;
					var packsource;
					var clickCapt=function(e){
						if(_status.dragged) return;
						if(dialog.currentcapt2=='最近'&&dialog.currentcaptnode2!=this&&!dialog.currentcaptnode2.inited){
							dialog.currentcapt2=null;
							dialog.currentcaptnode2.classList.remove('thundertext');
							dialog.currentcaptnode2.inited=true;
							dialog.currentcaptnode2=null;
						}
						if(this.alphabet){
							if(this.classList.contains('thundertext')){
								dialog.currentcapt=null;
								dialog.currentcaptnode=null;
								this.classList.remove('thundertext');
								if(this.touchlink){
									this.touchlink.classList.remove('active');
								}
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										dialog.buttons[i].classList.remove('nodisplay');
									}
								}
							}
							else{
								if(dialog.currentcaptnode){
									dialog.currentcaptnode.classList.remove('thundertext');
									if(dialog.currentcaptnode.touchlink){
										dialog.currentcaptnode.touchlink.classList.remove('active');
									}
								}
								dialog.currentcapt=this.link;
								dialog.currentcaptnode=this;
								this.classList.add('thundertext');
								if(this.touchlink){
									this.touchlink.classList.add('active');
								}
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										dialog.buttons[i].classList.remove('nodisplay');
									}
								}
							}
						}
						else{
							if(newlined2){
								newlined2.style.display='none';
								if(!packsource.onlypack){
									packsource.classList.remove('thundertext');
									if(!get.is.phoneLayout()||!lib.config.filternode_button){
										packsource.innerHTML='武将包';
									}
								}
							}
							if(this.classList.contains('thundertext')){
								dialog.currentcapt2=null;
								dialog.currentcaptnode2=null;
								this.classList.remove('thundertext');
								if(this.touchlink){
									this.touchlink.classList.remove('active');
								}
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										dialog.buttons[i].classList.remove('nodisplay');
									}
								}
							}
							else{
								if(dialog.currentcaptnode2){
									dialog.currentcaptnode2.classList.remove('thundertext');
									if(dialog.currentcaptnode2.touchlink){
										dialog.currentcaptnode2.touchlink.classList.remove('active');
									}
								}
								dialog.currentcapt2=this.link;
								dialog.currentcaptnode2=this;
								this.classList.add('thundertext');
								if (dialog.currentcapt2 === '随机'){
									var identity = target && target.identity;
									if(get.mode() === 'guozhan') identity = 'num';
									characterRandomGets = Object.keys(lib.character).randomGets(get.config(`choice_${identity}`) || 12);
								}
								if(this.touchlink){
									this.touchlink.classList.add('active');
								}
								else if(this.parentNode==newlined2){
									packsource.innerHTML=this.innerHTML;
									packsource.classList.add('thundertext');
								}
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										if(dialog.buttons[i].activate){
											dialog.buttons[i].activate();
										}
										dialog.buttons[i].classList.remove('nodisplay');
									}
								}
							}
						}
						if(dialog.seperate){
							for(var i=0;i<dialog.seperate.length;i++){
								if(!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')){
									dialog.seperate[i].style.display='none';
									dialog.seperate[i].nextSibling.style.display='none';
								}
								else{
									dialog.seperate[i].style.display='';
									dialog.seperate[i].nextSibling.style.display='';
								}
							}
						}
						if(filternode){
							if(filternode.querySelector('.active')){
								packsource.classList.add('thundertext');
							}
							else{
								packsource.classList.remove('thundertext');
							}
						}
						if(e) e.stopPropagation();
					};
					for(i=0;i<namecapt.length;i++){
						if(namecapt[i]=='newline'){
							newlined=document.createElement('div');
							newlined.style.marginTop='5px';
							newlined.style.display='block';
							// newlined.style.fontFamily='xinwei';
							if(get.is.phoneLayout()){
								newlined.style.fontSize='32px';
							}
							else{
								newlined.style.fontSize='22px';
							}
							newlined.style.textAlign='center';
							node.appendChild(newlined);
						}
						else if(newlined){
							var span=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
							span.style.margin='3px';
							span.style.width='auto';
							span.innerHTML=' '+namecapt[i].toUpperCase()+' ';
							span.link=namecapt[i];
							span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
							newlined.appendChild(span);
							node[namecapt[i]]=span;
							if(namecapt[i]=='收藏'){
								span._nature='fire';
							}
							else{
								span._nature='wood';
							}
						}
						else{
							var span=document.createElement('span');
							span.innerHTML=' '+namecapt[i].toUpperCase()+' ';
							span.link=namecapt[i];
							span.alphabet=true;
							span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
							node.appendChild(span);
						}
					}
					if(!thisiscard){
						var natures=['water','soil','wood','metal'];
						var span=document.createElement('span');
						newlined.appendChild(span);
						span.style.margin='8px';
						var clickGroup=function(){
							if(_status.dragged) return;
							if(dialog.currentcapt2=='最近'&&dialog.currentcaptnode2!=this&&!dialog.currentcaptnode2.inited){
								dialog.currentcapt2=null;
								dialog.currentcaptnode2.classList.remove('thundertext');
								dialog.currentcaptnode2.inited=true;
								dialog.currentcaptnode2=null;
							}
							// var currentcapt = dialog.currentcapt2 ? dialog.currentcapt2 : dialog.currentcapt;
							var node=this,link=this.link;
							if(node.classList.contains('thundertext')){
								dialog.currentgroup=null;
								dialog.currentgroupnode=null;
								node.classList.remove('thundertext');
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										dialog.buttons[i].classList.remove('nodisplay');
									}
								}
							}
							else{
								if(dialog.currentgroupnode){
									dialog.currentgroupnode.classList.remove('thundertext');
								}
								dialog.currentgroup=link;
								dialog.currentgroupnode=node;
								node.classList.add('thundertext');
								for(var i=0;i<dialog.buttons.length;i++){
									if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
										dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentgroup=='double'){
										if(dialog.buttons[i]._changeGroup) dialog.buttons[i].classList.remove('nodisplay');
										else dialog.buttons[i].classList.add('nodisplay');
									}
									else if(dialog.currentgroup=='ye'){
										if(dialog.buttons[i].group=='ye') dialog.buttons[i].classList.remove('nodisplay');
										else dialog.buttons[i].classList.add('nodisplay');
									}
									else{
										if(dialog.buttons[i]._changeGroup||dialog.buttons[i].group!=dialog.currentgroup){
											dialog.buttons[i].classList.add('nodisplay');
										}
										else{
											dialog.buttons[i].classList.remove('nodisplay');
										}
									}
								}
							}
						};
						for(var i=0;i<groups.length;i++){
							var span=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
							span.style.margin='3px';
							newlined.appendChild(span);
							span.innerHTML=get.translation(groups[i]);
							span.link=groups[i];
							span._nature=natures[i];
							span.addEventListener(lib.config.touchscreen?'touchend':'click',clickGroup);
						}
						
						var span=document.createElement('span');
						newlined.appendChild(span);
						span.style.margin='8px';
						
						packsource=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
						packsource.style.margin='3px';
						newlined.appendChild(packsource);
						var filternode=null;
						var clickCaptNode=function(e){
							delete _status.filterCharacter;
							ui.window.classList.remove('shortcutpaused');
							filternode.delete();
							filternode.classList.remove('shown');
							clickCapt.call(this.link,e);
						};
						if(get.is.phoneLayout()&&lib.config.filternode_button){
							newlined.style.marginTop='';
							packsource.innerHTML='筛选';
							filternode=ui.create.div('.popup-container.filter-character.modenopause');
							ui.create.div(filternode);
							filternode.listen(function(e){
								if(this.classList.contains('removing')) return;
								delete _status.filterCharacter;
								ui.window.classList.remove('shortcutpaused');
								this.delete();
								this.classList.remove('shown');
								e.stopPropagation();
							});
							for(var i=0;i<node.childElementCount;i++){
								if(node.childNodes[i].tagName.toLowerCase()=='span'){
									node.childNodes[i].style.display='none';
									node.childNodes[i].touchlink=ui.create.div(filternode.firstChild,clickCaptNode,'.menubutton.large.capt',node.childNodes[i].innerHTML);
									node.childNodes[i].touchlink.link=node.childNodes[i];
								}
							}
							ui.create.node('br',filternode.firstChild);
						}
						else{
							if(onlypack){
								packsource.onlypack=true;
								packsource.innerHTML=get.translation(onlypack+'_character_config');
								packsource.style.display='none';
								packsource.previousSibling.style.display='none';
							}
							else{
								packsource.innerHTML='武将包';
							}
						}
						
						newlined2=document.createElement('div');
						newlined2.style.marginTop='5px';
						newlined2.style.display='none';
						newlined2.style.fontFamily='xinwei';
						newlined2.classList.add('pointernode');
						if(get.is.phoneLayout()){
							newlined2.style.fontSize='32px';
						}
						else{
							newlined2.style.fontSize='22px';
						}
						newlined2.style.textAlign='center';
						node.appendChild(newlined2);
						
						packsource.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
							if(packsource.onlypack) return;
							if(_status.dragged) return;
							if(get.is.phoneLayout()&&lib.config.filternode_button&&filternode){
								_status.filterCharacter=true;
								ui.window.classList.add('shortcutpaused');
								ui.window.appendChild(filternode);
								ui.refresh(filternode);
								filternode.classList.add('shown');
								var dh=filternode.offsetHeight-filternode.firstChild.offsetHeight;
								if(dh>0){
									filternode.firstChild.style.top=(dh/2)+'px';
								}
								else{
									filternode.firstChild.style.top='';
								}
							}
							else{
								if(newlined2.style.display=='none'){
									newlined2.style.display='block';
								}
								else{
									newlined2.style.display='none';
								}
							}
						});
						var packlist=[];
						for(var i=0;i<lib.config.all.characters.length;i++){
							if(!lib.config.characters.contains(lib.config.all.characters[i])) continue;
							packlist.push(lib.config.all.characters[i]);
						}
						
						// 旧代码
						// for(var i in lib.characterPack){
							// if(!lib.config.all.characters.contains(i)){
								// packlist.push(i);
							// }
						// }
						// 适配新版本体
						Object.keys(lib.characterPack).filter(key=>{
							if(key.indexOf('mode_extension')!=0)return false;
							const extName = key.slice(15);
							//if (!game.hasExtension(extName) || !game.hasExtensionLoaded(extName)) return false;
							return lib.config[`extension_${extName}_characters_enable`] === true;
						}).forEach(key=>packlist.add(key));
						
						for(var i=0;i<packlist.length;i++){
							var span=document.createElement('div');
							span.style.display='inline-block';
							span.style.width='auto';
							span.style.margin='5px';
							if(get.is.phoneLayout()){
								span.style.fontSize='32px';
							}
							else{
								span.style.fontSize='22px';
							}
							span.innerHTML=lib.translate[packlist[i]+'_character_config'];
							span.link=packlist[i];
							span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
							newlined2.appendChild(span);
							if(filternode&&!onlypack){
								span.touchlink=ui.create.div(filternode.firstChild,clickCaptNode,'.menubutton.large',span.innerHTML);
								span.touchlink.link=span;
							}
						}
					}
					
					var groupSort;
					if(thisiscard){
						groupSort=function(name){
							var type=lib.card[name[2]].type;
							if(lib.cardType[type]){
								return lib.cardType[type];
							}
							switch(type){
								case 'basic':return 0;
								case 'chess':return 1.5;
								case 'trick':return 2;
								case 'delay':return 3;
								case 'equip':return 4;
								case 'zhenfa':return 5;
								default:return 6;
							}
						}
						list.sort(function(a,b){
							var del=groupSort(a)-groupSort(b);
							if(del!=0) return del;
							var aa=a,bb=b;
							if(a.includes('_')){
								a=a.slice(a.lastIndexOf('_')+1);
							}
							if(b.includes('_')){
								b=b.slice(b.lastIndexOf('_')+1);
							}
							if(a!=b){
								return a>b?1:-1;
							}
							return aa>bb?1:-1;
						});
					}
					else{
						list.sort(lib.sort.character);
					}
					dialog=ui.create.dialog('hidden');
					dialog.classList.add('noupdate');
					dialog.classList.add('scroll1');
					dialog.classList.add('scroll2');
					dialog.classList.add('scroll3');
					dialog.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						_status.clicked2=true;
					});
					if(heightset){
						dialog.style.height=((game.layout=='long2'||game.layout=='nova')?380:350)+'px';
						dialog._scrollset=true;
					}
					dialog.getCurrentCapt=function(link,capt,noalph){
						var currentcapt=noalph?this.currentcapt2:this.currentcapt;
						if(this.seperatelist&&noalph){
							if(this.seperatelist[currentcapt].contains(link)) return capt;
							return null;
						}
						if(lib.characterDialogGroup[currentcapt]){
							return lib.characterDialogGroup[currentcapt](link,capt);
						}
						if(lib.characterPack[currentcapt]){
							if(lib.characterPack[currentcapt][link]){
								return capt;
							}
							return null;
						}
						return this.currentcapt;
					}
					if(str){
						dialog.add(str);
					}
					dialog.add(node);
					if(thisiscard){
						if(seperate){
							seperate=seperate(list);
							dialog.seperate=[];
							dialog.seperatelist=seperate.list;
							if(dialog.seperatelist){
								newlined=document.createElement('div');
								newlined.style.marginTop='5px';
								newlined.style.display='block';
								newlined.style.fontFamily='xinwei';
								if(get.is.phoneLayout()){
									newlined.style.fontSize='32px';
								}
								else{
									newlined.style.fontSize='22px';
								}
								newlined.style.textAlign='center';
								node.appendChild(newlined);
								for(var i in dialog.seperatelist){
									var span=document.createElement('span');
									span.style.margin='3px';
									span.innerHTML=i;
									span.link=i;
									span.seperate=true;
									span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
									newlined.appendChild(span);
								}
							}
							for(var i in seperate){
								if(i=='list') continue;
								var link='';
								var linkcontent=seperate[i];
								if(i.includes('_link:')){
									link=i.slice(i.indexOf('_link:')+6);
									i=i.slice(0,i.indexOf('_link:'));
								}
								var nodesep=dialog.add(i);
								nodesep.link=link;
								dialog.seperate.push(nodesep);
								dialog.add([linkcontent,'vcard'],noclick);
							}
						}
						else{
							dialog.add([list,'vcard'],noclick);
						}
					}
					else{
						if(precharacter){
							dialog.add([list,'precharacter'],noclick);
						}
						else if(characterx){
							dialog.add([list,'characterx'],noclick);
						}
						else{
							dialog.add([list,'character'],noclick);
						}
					}
					dialog.add(ui.create.div('.placeholder'));
					for(i=0;i<dialog.buttons.length;i++){
						if(thisiscard){
							dialog.buttons[i].capt=getCapt(dialog.buttons[i].link[2]);
						}
						else{
							dialog.buttons[i].group=lib.character[dialog.buttons[i].link][1];
							dialog.buttons[i].capt=getCapt(dialog.buttons[i].link);
						}
					}
					if(!expandall){
						if(!thisiscard&&(lib.characterDialogGroup[lib.config.character_dialog_tool]||
							lib.config.character_dialog_tool=='自创')){
							clickCapt.call(node[lib.config.character_dialog_tool]);
						}
					}
					
					/*
					//仅仅下面是新加的，by Curpond
					*/
					
					return dialog;
				},
			};
			Object.assign(ui.create, createDialog);
		},1);
	}
	
	// 自由选将-搜索功能移至此处，延时调用（现已无需覆写代码，可自行调整时间，保证加载到位）
	if (config.zyxjssgn) {
		setTimeout(function(){
			// 武将搜索代码摘抄自扩展ol
			var kzol_create_characterDialog=ui.create.characterDialog;
			ui.create.characterDialog=function(){
				var dialog=kzol_create_characterDialog.apply(this,arguments);
				// if(lib.config.mode=='stone') return dialog;
				var content_container=dialog.childNodes[0];
				var content=content_container.childNodes[0];
				var switch_con=content.childNodes[0];
				var buttons=content.childNodes[1];
				var div=ui.create.div('');
				div.style.height='35px';
				div.style.width='calc(100%)';
				div.style.top='-2px';
				div.style.left='0px';
				div.style['white-space']='nowrap';
				div.style['text-align']='center';
				div.style['line-height']='26px';
				div.style['font-size']='20px';
				div.style['font-family']='xinwei';
				div.innerHTML='搜索：'+
				'<input type="text" style="width:150px;" placeholder="请输入搜索内容"></input>'+
				'<select size="1" style="margin-left: 10px;width:95px;height:21px;">'+
				'<option value="all">任意关键字</option>'+
				'<option value="name0">武将名翻译</option>'+
				'<option value="name1">武将名ID</option>'+
				'<option value="skill0">技能名翻译</option>'+
				'<option value="skill1">技能名ID</option>'+
				'<option value="skill2">技能描述</option>'+
				'<option value="taici0">技能台词</option>'+
				'<option value="taici1">阵亡台词</option>'+
				'<option value="chenghao">武将称号</option>'+
				'</select>'+
				'<button style="margin-left: 10px;">确定</button>'; // 添加确定按钮
				var input=div.querySelector('input');
				var button = div.querySelector('button'); // 获取新增的确定按钮
				button.onclick = function () { // 定义确定按钮的点击事件
					var value=input.value;
					var choice=div.querySelector('select').options[div.querySelector('select').selectedIndex].value;
					if(value){
						if(game.say1) game.say1('搜索完成');
						//if(dialog.currentcaptnode2) dialog.currentcaptnode2.classList.remove('thundertext');
						//if(dialog.currentcaptnode) dialog.currentcaptnode.classList.remove('thundertext');
						for(var i=0;i<buttons.childNodes.length;i++){
							buttons.childNodes[i].classList.add('nodisplay');
							var name=buttons.childNodes[i].link;
							var skills;
							if(lib.character[name]!=undefined){
								skills=lib.character[name][3];
							}
							if(choice=='all'){
								// 直接组合下面各选项的代码，写法待优化
								if(lib.config['extension_搬运自用_zyxjssgnname0']!=false) {
									// 特殊处理
									var name0map = {
										boss_zhaoyun: "神赵云",//高达一号
										ty_guanyu: "桃关羽",//神秘将军
										boss_sunce: "孙策",//那个男人
									};
									var name0str = name0map[name];
									if(name0str && name0str.indexOf(value)!=-1){
										buttons.childNodes[i].classList.remove('nodisplay');
									}
									
									if(lib.translate[`${name}_ab`] && lib.translate[`${name}_ab`].indexOf(value)!=-1){
										buttons.childNodes[i].classList.remove('nodisplay');
									}
									
									if(get.translation(name).indexOf(value)!=-1){
										buttons.childNodes[i].classList.remove('nodisplay');
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgnname1']!=false) {
									if(name.indexOf(value)!=-1){
										buttons.childNodes[i].classList.remove('nodisplay');
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgnskill0']!=false) {
									if(skills!=undefined&&skills.length>0){
										// 搜索技能
										if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
											for(var j=0;j<skills.length;j++){
												var skill=skills[j];
												if(get.translation(skill).indexOf(value)!=-1){
													buttons.childNodes[i].classList.remove('nodisplay');
												};
											}
										}
										// 搜索衍生技能
										if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
											skills.forEach(skill => {
												var info = get.info(skill);
												if(info && info.derivation) {
													var derivation = info.derivation;
													if(typeof derivation == 'string') {
														derivation = [derivation];
													}
													for(var k=0; k<derivation.length; k++) {
														var derivationskill=derivation[k];
														if(get.translation(derivationskill).indexOf(value)!=-1){
															buttons.childNodes[i].classList.remove('nodisplay');
														};
													}
												}
											});
										}
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgnskill1']!=false) {
									if(skills!=undefined&&skills.length>0){
										// 搜索技能
										if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
											for(var j=0;j<skills.length;j++){
												var skill=skills[j];
												if(skill.indexOf(value)!=-1){
													buttons.childNodes[i].classList.remove('nodisplay');
												};
											}
										}
										// 搜索衍生技能
										if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
											skills.forEach(skill => {
												var info = get.info(skill);
												if(info && info.derivation) {
													var derivation = info.derivation;
													if(typeof derivation == 'string') {
														derivation = [derivation];
													}
													for(var k=0; k<derivation.length; k++) {
														var derivationskill=derivation[k];
														if(derivationskill.indexOf(value)!=-1){
															buttons.childNodes[i].classList.remove('nodisplay');
														};
													}
												}
											});
										}
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgnskill2']!=false) {
									if(skills!=undefined&&skills.length>0){
										// 搜索技能
										if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
											for(var j=0;j<skills.length;j++){
												var skill=skills[j];
												if(lib.translate[skill+'_info']!=undefined&&lib.translate[skill+'_info'].indexOf(value)!=-1){
													buttons.childNodes[i].classList.remove('nodisplay');
												};
											}
										}
										// 搜索衍生技能
										if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
											skills.forEach(skill => {
												var info = get.info(skill);
												if(info && info.derivation) {
													var derivation = info.derivation;
													if(typeof derivation == 'string') {
														derivation = [derivation];
													}
													for(var k=0; k<derivation.length; k++) {
														var derivationskill=derivation[k];
														if(lib.translate[derivationskill+'_info']!=undefined&&lib.translate[derivationskill+'_info'].indexOf(value)!=-1){
															buttons.childNodes[i].classList.remove('nodisplay');
														};
													}
												}
											});
										}
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgntaici0']!=false) {
									if(skills!=undefined&&skills.length>0){
										// 搜索技能
										if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
											for(var j=0;j<skills.length;j++){
												var skill=skills[j];
												var voiceMap=game.parseSkillText(skill, name);
												if(voiceMap.length){
													for(var m=0;m<voiceMap.length;m++){
														if(voiceMap[m].indexOf(value)!=-1){
															buttons.childNodes[i].classList.remove('nodisplay');
														}
													}
												}
											}
										}
										// 搜索衍生技能
										if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
											skills.forEach(skill => {
												var info = get.info(skill);
												if(info && info.derivation) {
													var derivation = info.derivation;
													if(typeof derivation == 'string') {
														derivation = [derivation];
													}
													for(var k=0; k<derivation.length; k++) {
														if (derivation[k].indexOf('_faq') != -1) continue;
														var derivationskill=derivation[k];
														var voiceMap=game.parseSkillText(derivationskill, name);
														if(voiceMap.length){
															for(var m=0;m<voiceMap.length;m++){
																if(voiceMap[m].indexOf(value)!=-1){
																	buttons.childNodes[i].classList.remove('nodisplay');
																}
															}
														}
													}
												}
											});
										}
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgntaici1']!=false) {
									var dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
									if(dieAudios.length){
										for(var m=0;m<dieAudios.length;m++){
											if(dieAudios[m].text.indexOf(value)!=-1){
												buttons.childNodes[i].classList.remove('nodisplay');
											}
										}
									}
								}
								if(lib.config['extension_搬运自用_zyxjssgnchenghao']!=false) {
									if(lib.characterTitle[name] && lib.characterTitle[name].indexOf(value)!=-1){
										buttons.childNodes[i].classList.remove('nodisplay');
									}
								}
							}else if(choice=='name0'){
								// 特殊处理
								var name0map = {
									boss_zhaoyun: "神赵云",//高达一号
									ty_guanyu: "桃关羽",//神秘将军
									boss_sunce: "孙策",//那个男人
								};
								var name0str = name0map[name];
								if(name0str && name0str.indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								}
								
								if(lib.translate[`${name}_ab`] && lib.translate[`${name}_ab`].indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								}
								
								if(get.translation(name).indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								}
							}else if(choice=='name1'){
								if(name.indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								}
							}else if(choice=='skill0'){
								if(skills!=undefined&&skills.length>0){
									// 搜索技能
									if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
										for(var j=0;j<skills.length;j++){
											var skill=skills[j];
											if(get.translation(skill).indexOf(value)!=-1){
												buttons.childNodes[i].classList.remove('nodisplay');
											};
										}
									}
									// 搜索衍生技能
									if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
										skills.forEach(skill => {
											var info = get.info(skill);
											if(info && info.derivation) {
												var derivation = info.derivation;
												if(typeof derivation == 'string') {
													derivation = [derivation];
												}
												for(var k=0; k<derivation.length; k++) {
													var derivationskill=derivation[k];
													if(get.translation(derivationskill).indexOf(value)!=-1){
														buttons.childNodes[i].classList.remove('nodisplay');
													};
												}
											}
										});
									}
								}
							}else if(choice=='skill1'){
								if(skills!=undefined&&skills.length>0){
									// 搜索技能
									if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
										for(var j=0;j<skills.length;j++){
											var skill=skills[j];
											if(skill.indexOf(value)!=-1){
												buttons.childNodes[i].classList.remove('nodisplay');
											};
										}
									}
									// 搜索衍生技能
									if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
										skills.forEach(skill => {
											var info = get.info(skill);
											if(info && info.derivation) {
												var derivation = info.derivation;
												if(typeof derivation == 'string') {
													derivation = [derivation];
												}
												for(var k=0; k<derivation.length; k++) {
													var derivationskill=derivation[k];
													if(derivationskill.indexOf(value)!=-1){
														buttons.childNodes[i].classList.remove('nodisplay');
													};
												}
											}
										});
									}
								}
							}else if(choice=='skill2'){
								if(skills!=undefined&&skills.length>0){
									// 搜索技能
									if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
										for(var j=0;j<skills.length;j++){
											var skill=skills[j];
											if(lib.translate[skill+'_info']!=undefined&&lib.translate[skill+'_info'].indexOf(value)!=-1){
												buttons.childNodes[i].classList.remove('nodisplay');
											};
										}
									}
									// 搜索衍生技能
									if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
										skills.forEach(skill => {
											var info = get.info(skill);
											if(info && info.derivation) {
												var derivation = info.derivation;
												if(typeof derivation == 'string') {
													derivation = [derivation];
												}
												for(var k=0; k<derivation.length; k++) {
													var derivationskill=derivation[k];
													if(lib.translate[derivationskill+'_info']!=undefined&&lib.translate[derivationskill+'_info'].indexOf(value)!=-1){
														buttons.childNodes[i].classList.remove('nodisplay');
													};
												}
											}
										});
									}
								}
							}else if(choice=='taici0'){
								if(skills!=undefined&&skills.length>0){
									// 搜索技能
									if(lib.config['extension_搬运自用_zyxjssjn']!=false) {
										for(var j=0;j<skills.length;j++){
											var skill=skills[j];
											var voiceMap=game.parseSkillText(skill, name);
											if(voiceMap.length){
												for(var m=0;m<voiceMap.length;m++){
													if(voiceMap[m].indexOf(value)!=-1){
														buttons.childNodes[i].classList.remove('nodisplay');
													}
												}
											}
										}
									}
									// 搜索衍生技能
									if(lib.config['extension_搬运自用_zyxjssysjn']!=false) {
										skills.forEach(skill => {
											var info = get.info(skill);
											if(info && info.derivation) {
												var derivation = info.derivation;
												if(typeof derivation == 'string') {
													derivation = [derivation];
												}
												for(var k=0; k<derivation.length; k++) {
													if (derivation[k].indexOf('_faq') != -1) continue;
													var derivationskill=derivation[k];
													var voiceMap=game.parseSkillText(derivationskill, name);
													if(voiceMap.length){
														for(var m=0;m<voiceMap.length;m++){
															if(voiceMap[m].indexOf(value)!=-1){
																buttons.childNodes[i].classList.remove('nodisplay');
															}
														}
													}
												}
											}
										});
									}
								}
							}else if(choice=='taici1'){
								var dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
								if(dieAudios.length){
									for(var m=0;m<dieAudios.length;m++){
										if(dieAudios[m].text.indexOf(value)!=-1){
											buttons.childNodes[i].classList.remove('nodisplay');
										}
									}
								}
							}else if(choice=='chenghao'){
								if(lib.characterTitle[name] && lib.characterTitle[name].indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								}
							}
						}
					}else{
						if(game.say1) game.say1('请先输入需要搜索的内容');
					}
				};
				input.onkeydown=function(e){
					e.stopPropagation();
					if(e.keyCode==13){
						button.click(); // 触发点击确定按钮的事件
					};
				};
				input.onmousedown=function(e){
					e.stopPropagation();
				};
				/*
				if(lib.config['extension_武将卡牌搜索器_enable']==true){
					if(lib.config['extension_扩展ol_zyxj_search1']!=false){
						if(window.诗笺_manual!=undefined){
							div.style.height='58px';
							div.innerHTML+='<br><button>武将卡牌搜索器</button>';
							var button=div.querySelector('button');
							button.onclick=function(){
								window.诗笺_manual.show();
							};
						};
					};
				}
				*/
				switch_con.insertBefore(div,switch_con.firstChild);
				/*
				for(var i=0;i<buttons.childNodes.length;i++){
					var name=buttons.childNodes[i].link;
					if(name!=undefined&&name.indexOf('kzsg_')!=-1){
						buttons.childNodes[i].style.display='none';
					};
				};
				*/
				return dialog;
			}
		},15);
	}
	
	// 自由选将-筛选按钮扩充
	if (config.zyxjsxankz) {
		// 国战模式，开启“使用国战武将”开关、十周年UI国战魔改开启、国战魔改不失效时，显示1.5/2/2.5上限
		// 改本体game.js函数characterDialogGroup:{
		if(lib.config.mode=='guozhan' && get.config('onlyguozhan') && !(lib.config.extensions && lib.config.extensions.contains('千幻聆音') && lib.config['extension_千幻聆音_enable']) && lib.characterGuozhanFilter.length<2 && lib.config.extensions && lib.config.extensions.contains('十周年UI') && lib.config['extension_十周年UI_enable'] && lib.config['extension_十周年UI_guozhanmogai']){
			lib.characterDialogGroup = {
				// 原版
				'收藏':function(name,capt){
					return lib.config.favouriteCharacter.includes(name)?capt:null;
				},
				'最近':function(name,capt){
					var list=get.config('recentCharacter')||[];
					return list.includes(name)?capt:null;
				},
				// 扩充
				'<span style=\"color:#00ADE7\">♂</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="male"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'<span style=\"color:#E56587\">♀</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="female"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'<span style=\"color:#00ADE7\">♂</span><span style=\"color:#E56587\">♀</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="double"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'护甲':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(list1.length == 3){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'体力≠上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[0]) != Number(list1[1])){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'1.5上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 1.5){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 1.5){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'2上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 2){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 2){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'2.5上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 2.5){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 2.5){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
			};
		} else {
			lib.characterDialogGroup = {
				// 原版
				'收藏':function(name,capt){
					return lib.config.favouriteCharacter.includes(name)?capt:null;
				},
				'最近':function(name,capt){
					var list=get.config('recentCharacter')||[];
					return list.includes(name)?capt:null;
				},
				// 扩充
				'<span style=\"color:#00ADE7\">♂</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="male"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'<span style=\"color:#E56587\">♀</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="female"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'<span style=\"color:#00ADE7\">♂</span><span style=\"color:#E56587\">♀</span>':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][0]=="double"){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'主公':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(lib.character[i][4].contains('zhu')){
							list.push(i);
						}
					}
					return list.includes(name)?capt:null;
				},
				'护甲':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(list1.length == 3){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'体力≠上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[0]) != Number(list1[1])){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'1上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 1){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 1){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'2上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 2){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 2){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'3上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 3){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 3){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'4上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 4){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 4){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'5上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 5){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 5){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'6上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 6){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 6){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'7上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 7){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 7){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'8上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) == 8){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] == 8){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
				'>8上限':function(name,capt){
					var list=[];
					for(var i in lib.character){
						if(typeof lib.character[i][2] == typeof ""){
							var list1 = lib.character[i][2].split('/');
							if(Number(list1[1]) > 8){
								list.push(i);
							}
						}
						if(typeof lib.character[i][2] == typeof 0){
							if(lib.character[i][2] > 8){
								list.push(i);
							}
						}
					}
					return list.includes(name)?capt:null;
				},
			};
		}
	}
	
	// 重新选将功能，搬运自假装无敌扩展，原功能名为【AI选将】，已征得清瑶的“徒弟”的修改许可
	if (config.byzy_AIxuanjiang) {
		lib.skill._byzy_AIxuanjiang = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 700,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				'step 0'
				player.chooseTarget("请选择一名角色并替换其武将牌，还可通过重选单双将选项设置单双将(限身份场、斗地主)，即时生效", lib.filter.all).set('ai',function(target){
					return 0;
				});
				'step 1'
				if (result.bool) {
					event.target = result.targets[0];
					game.byzy_choosePlayer.chooseCharacter(event.target);
				} else event.finish();
				'step 2'
				event.goto(0);
			},
		};
	}
	
	// 图片懒加载功能，搬运自假装无敌扩展
	// 武将太多也会卡一阵子，因为操作的元素太多了
	// 待修复：对策、谋弈美化卡牌不显示，十常侍、起许劭、左慈、神典韦等武将卡牌不显示
	if (config.byzy_LoadImageOptimization) {
		// 配置观察元素的参数
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0
		};
		
		// 监听元素是否进入可视区
		function onIntersection(entries) {
			entries.forEach(entry => {
				if (entry.intersectionRatio <= 0) return;
				const target = entry.target;
				if (!target._intersectionObserver) return;
				
				// 停止观察元素
				target._intersectionObserver.unobserve(target);
				
				// 加载图片
				// target.style.backgroundImage = `url("${target._loadSrc}")`;
				// 适配新版本体
				target.style.backgroundImage = `${target._loadSrc}`;
				
				// 清除相关属性
				delete target._intersectionObserver;
				delete target._loadSrc;
			});
		}
		
		// 懒加载武将图片
		const originSetBackgroundImage = HTMLDivElement.prototype.setBackgroundImage;
		HTMLDivElement.prototype.setBackgroundImage = function (imgUrl) {
			// 卡牌经常丢失图片，不优化了
			// if (imgUrl.includes('card')) {
				// return originSetBackgroundImage.call(this, imgUrl);
			// }
			
			if (this._intersectionObserver) {
				this._intersectionObserver.unobserve(this);
				delete this._intersectionObserver
			}
			
			// 记录图片链接
			// this._loadSrc = `${lib.assetURL}${imgUrl}`;
			// 适配新版本体
			if (Array.isArray(imgUrl)) {
				this._loadSrc = imgUrl.unique().map(v => `url("${lib.assetURL}${v}")`).join(",");
			}
			else {
				this._loadSrc = `url("${lib.assetURL}${imgUrl}")`;
			}
			
			// 添加交叉观察器
			const observer = new IntersectionObserver(onIntersection, options);
			this._intersectionObserver = observer;
			observer.observe(this);
		}
	}
	
	// 新增lib.notShowSkillNamePinyin，用ID识别不显示技能拼音的技能和衍生技能
	lib.notShowSkillNamePinyin=[
		"byzyzhenwangpeiyin","byzyshenglipeiyin",//阵亡、胜利
		"boss_zhiwang_planetarian",//注意事项
		"boss_xhuanren","boss_newhuanren",//关卡说明
		"wuziliangjiangdao",//五子良将纛
		"wuhujiangdaqi",//五虎将大旗
		"yuanjiangfenghuotu",//缘江烽火图
		"huangjintianbingfu",//黄巾天兵符
		"qiaosi_map",//大键角色图/水转百戏图
		"wuling_wuqinxi",//五禽戏
		"twhuajing_jian","twhuajing_dao","twhuajing_fu","twhuajing_qiang","twhuajing_ji","twhuajing_gong",//特殊处理：玉真子的剑、刀、斧、枪、戟、弓
		"1！5！_place1","1！5！_place4","1！5！_place5","1！5！_place6","1！5！_place7",//特殊处理：神黄忠的头部、上肢、下肢、胸部、腹部
		"old_1！5！_place1","old_1！5！_place2","old_1！5！_place3","old_1！5！_place4","old_1！5！_place5","old_1！5！_place6","old_1！5！_place7",//特殊处理：旧神黄忠的头部、肩部、手部、上肢、下肢、胸部、腹部
		// 卡牌（临时处理）
		"liulongcanjia",//六龙骖驾
		"feilongduofeng",//飞龙夺凤
		"dinglanyemingzhu",//定澜夜明珠
		"taipingyaoshu",//太平要术
		"ruyijingubang_skill",//如意金箍棒
		"cheliji_sichengliangyu","cheliji_tiejixuanyu","cheliji_feilunzhanyu",//四乘粮舆、铁蒺玄舆、飞轮战舆
		"dagongche_attack","dagongche_defend",//大攻车·攻、大攻车·守
		"mapodoufu",//麻婆豆腐
		"hsbaowu_cangbaotu","hsbaowu_huangjinyuanhou",//藏宝图、黄金猿猴
		"wy_meirenji","wy_xiaolicangdao",//美人计、笑里藏刀
		"hsdusu_xueji","hsdusu_huangxuecao","hsdusu_kuyecao","hsdusu_shinancao","hsdusu_huoyanhua",//血蓟、皇血草、枯叶草、石楠草、火焰花
		"hsmengjing_feicuiyoulong","hsmengjing_huanxiaojiemei","hsmengjing_suxing","hsmengjing_mengye","hsmengjing_mengjing",//翡翠幼龙、欢笑姐妹、苏醒、梦魇、梦境
	];
	// 资料卡修改
	if(config.byzy_zlkxg && !(lib.config.extensions && lib.config.extensions.contains('千幻聆音') && lib.config['extension_千幻聆音_enable'])) {
		if (ui.css.characterbutton)
			ui.css.characterbutton.remove();
		// 添加样式
		ui.css.characterbutton=lib.init.sheet();
		const characterbutton=ui.css.characterbutton.sheet;
		ui.css.characterbutton.sheet.insertRule('.menubg.charactercard>.characterbutton {left: 5px;padding-left: 0;padding-right: 0;width: 190px;top: 250px;height: 50px;white-space: nowrap;overflow-x: scroll;}',0);
		ui.css.characterbutton.sheet.insertRule('.menubg.charactercard>.characterbutton>.menubutton.large {width: 85px;height: 30px;line-height: 30px;padding: 0;font-size: 20px;margin-top: 10px;margin-left: 5px;margin-right: 5px;position: relative;}',0);
		
		// 去除 HTML 标签
		function removeHTMLspan(originalText){
			if(!originalText) return originalText;
			return originalText.replace(/<[^>]+>/g, '');
		}
		
		// 资料卡点击查看武将信息
		window.byzy_zlkdjckwjxx=function(playername){
			if(lib.config['extension_搬运自用_byzy_zlkwjxx'] != false){
				var packName=[];
				var packSortName=[];
				// 所在武将包
				for(var i in lib.characterPack){
					for(var j in lib.characterPack[i]){
						if(j == playername){
							packName.push(i);
						}
					}
				}
				// 所在武将包的分类
				for(var m in lib.characterSort){
					for(var n in lib.characterSort[m]){
						if(lib.characterSort[m][n].includes(playername)){
							packSortName.push(n);
						}
					}
				}
				// 武将称号
				var originalText = lib.characterTitle[playername]; // 获取原始文本
				if (originalText) { // 判断是否为空
					// 如果不为空，则去除颜色样式和武将性别显示
					var playerNameTitle = originalText.replace(/(^#g|^#b|^#r|^#p)|( <span style="color:#00ADE7">♂<\/span>| <span style="color:#E56587">♀<\/span>| <span style="color:#00ADE7">♂<\/span><span style="color:#E56587">♀<\/span>|<span style="color:#00ADE7">♂<\/span>|<span style="color:#E56587">♀<\/span>|<span style="color:#00ADE7">♂<\/span><span style="color:#E56587">♀<\/span>)$/g, '');
				} else {
					var playerNameTitle = originalText; // 如果为空，则返回原始文本
				}
				
				var str11="• 武将名ID";
				var str12=playername;
				var str21="• 武将名翻译";
				var str22=removeHTMLspan(lib.translate[playername]);
				var str31="• 所在武将包 [ID]";
				var str32=removeHTMLspan(lib.translate[packName + '_character_config']) +' [' + packName + ']';
				var str41="• 所在武将包的分类 [ID]";
				var str42=packSortName.length?(removeHTMLspan(lib.translate[packSortName]) +' [' + packSortName + ']'):'无武将包分类';
				var str51="• 武将称号 [拼音]";
				var str52=playerNameTitle?(removeHTMLspan(playerNameTitle) + ' ['+ get.pinyin(removeHTMLspan(playerNameTitle)) + ']'):"暂无武将称号";
				var str61="• [姓,名]";
				var str621=get.characterSurname(playername,"/","/");
				var str622="";
				if(str621.length>1) {
					for(var i=0;i<=str621.length-1;i++){
						var connect=(i<str621.length-1)? "；": "";
						str622+=str621[i]+connect;
					}
				} else str622=str621[0];
				var str62="["+str622+"]";
				var str71="• 武将评级";
				var map72 = {
					junk: "平凡武将A",
					common: "普通武将A+",
					rare: "精品武将S",
					epic: "史诗武将SS",
					legend: "传说武将SSS",
				};
				var str72 = map72[game.getRarity(playername)];
				var str81="• 是否主公武将";
				var str82;
				if(lib.character[playername][4]) {
					if(lib.character[playername][4].contains('zhu')) {
						str82='是';
					} else str82='否';
				} else str82='否';
				
				var str=str11+'\n'+str12+'\n'+str21+'\n'+str22+'\n'+str31+'\n'+str32+'\n'+str41+'\n'+str42+'\n'+str51+'\n'+str52+'\n'+str61+'\n'+str62+'\n'+str71+'\n'+str72+'\n'+str81+'\n'+str82;
				alert(str);
				game.print(str);
				console.log(str);
			}
		};
		
		// 资料卡点击查看技能信息
		window.byzy_zlkdjckjndm=function(skillname){
			if(lib.config['extension_搬运自用_byzy_zlkcode'] != false){
				var str11="• 技能名ID";
				var str12=skillname;
				var str21="• 技能名翻译";
				var str22=removeHTMLspan(lib.translate[skillname]);
				var str31="• 技能描述";
				var str32=removeHTMLspan(lib.translate[skillname + '_info']) || '无技能描述';
				var str41="• 技能代码";
				var str42=get.stringify(get.info(skillname));
				var str=str11+'\n'+str12+'\n'+str21+'\n'+str22+'\n'+str31+'\n'+str32+'\n'+str41+'\n'+str42;
				alert(str);
				game.print(str);
				console.log(str);
			}
		};
		
		// 资料卡试听衍生技能配音
		// 搬运自下方并修改，注意同步更新
		window.byzy_zlkstysjnpy=function(playername,skillname){
			if(lib.config['extension_搬运自用_byzy_zlkysjnpy'] != false){
				// 不播放阵亡/胜利配音
				if(skillname=='byzyzhenwangpeiyin'||skillname=='byzyshenglipeiyin') return;
				// 修改1
				if(lib.config.background_speak){
					// 修改2
					var info=get.info(skillname);
					if(!info) return;
					var audioname=skillname;
					
					if(info.audioname2&&info.audioname2[playername]){
						audioname=info.audioname2[playername];
						info=lib.skill[audioname];
					}
					var audioinfo=info.audio;
					var that=this;
					var getIndex=function(i){
						// 修改3
						if (!that.audioindex||_status.uiclickcharactercard) {
							that.audioindex = {}; // 初始化为空对象
						}
						if(typeof that.audioindex[skillname]!='number'||_status.uiclickcharactercard){
							_status.uiclickcharactercard=false;
							that.audioindex[skillname]=i;
						}
						that.audioindex[skillname]++;
						if(that.audioindex[skillname]>i){
							that.audioindex[skillname]=1;
						}
						return that.audioindex[skillname];
					};
					if(typeof audioinfo=='string'){
						if(audioinfo.indexOf('ext:')==0){
							audioinfo=audioinfo.split(':');
							if(audioinfo.length==3){
								if(audioinfo[2]=='true'){
									game.playAudio('..','extension',audioinfo[1],audioname);
								}
								else{
									audioinfo[2]=parseInt(audioinfo[2]);
									if(audioinfo[2]){
										game.playAudio('..','extension',audioinfo[1],audioname+getIndex(audioinfo[2]));
									}
								}
							}
							return;
						}
						else{
							audioname=audioinfo;
							if(lib.skill[audioinfo]){
								audioinfo=lib.skill[audioinfo].audio;
							}
						}
					}
					else if(Array.isArray(audioinfo)){
						if (audioinfo.length === 2 && typeof audioinfo[0] === "string" && typeof audioinfo[1] === "number") {
							audioname=audioinfo[0];
							audioinfo=audioinfo[1];
						}
					}
					if(typeof audioinfo=='number'){
						if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
						// 临时修复tempname标签武将配音播放错误
						if(Array.isArray(info.audioname)&&!info.audioname.contains(playername)&&lib.character[playername]&&lib.character[playername][4].some(tag=>tag.startsWith('tempname'))) audioname=audioname+'_'+info.audioname;
						game.playAudio('skill',audioname+getIndex(audioinfo));
					}
					else if(typeof audioinfo=="object"&&"type" in audioinfo&&audioinfo.type=="direct"&&"files" in audioinfo){
						let audioFiles=audioinfo.files;
						if(typeof audioFiles=="object"){
							if(!Array.isArray(audioFiles)&&playername&&playername in audioFiles)audioFiles=audioFiles[playername];
							if(Array.isArray(audioFiles)){
								const length=audioFiles.length;
								game.playAudio(audioFiles[getIndex(length)-1]);
							}
						}
					}
					else if(audioinfo){
						if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
						game.playAudio('skill',audioname);
					}
					else if(true&&info.audio!==false){
						if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
						game.playSkillAudio(audioname,getIndex(2));
					}
				}
			}
		};
		
		// 旧版台词函数（暂时先用）
		/**
		 * 根据skill中的audio,audioname,audioname2和player来获取音频地址列表
		 * @typedef {[string,number]|string|number|boolean} audioInfo
		 * @typedef {{audio: audioInfo, audioname?:string[], audioname2?:{[playerName: string]: audioInfo}}} skillInfo
		 * @param { string } skill  技能名
		 * @param { Player | Object | string } [player]  角色/角色名
		 * @param { skillInfo | audioInfo } [skillInfo]  预设的skillInfo/audioInfo(转为skillInfo)，覆盖lib.skill[skill]
		 * @param { boolean | undefined } [useRawAudio]
		 * @returns { string[] }  语音地址列表
		 * @example
		 * ```js
		 * const info=lib.skill['skillname'];
		 * info.audio=undefined //默认值[true,2]
		 * info.audio=false // 不播放语音
		 * info.audio=true // [skill/skillname.mp3]
		 * info.audio=3 // [skill/skillname1.mp3,skill/skillname2.mp3,skill/skillname3.mp3]（项数为数字大小）
		 * info.audio="(ext:extName|db:extension-extName)(/anyPath):true|number(:format)" //间接路径
		 * // 同上，只是将目录改为(ext:extName|db:extension-extName)(/anyPath)，且可以指定格式(默认mp3)
		 * info.audio="(ext:extName|db:extension-extName/)(anyPath/)filename(.format)" //直接路径
		 * //path和format至少有一个，否则会识别为引用技能
		 * //起始位置为audio/(若无anyPath则为audio/skill/)，若没有format默认mp3
		 * info.audio="otherSkillname" //引用技能
		 * //引用一个其他技能的语音，若lib.skill["otherSkillname"]不存在则读取"otherSkillname"的audio为默认值[true,2]
		 * info.audio=["otherSkillname", number] //带fixedNum的引用技能
		 * //同样引用一个其他技能的语音，若lib.skill["otherSkillname"]不存在则读取"otherSkillname"的audio为number
		 * //若"otherSkillname"的语音数超过number，则只取前number个
		 * info.audio=[true,2,"otherSkillname1",["otherSkillname2",2]] //任意元素拼接
		 * //数组里可以放任何以上的格式，结果为分析完的结果合并
		 *
		 * info.audioname=['player1','player2']
		 * //audioname里可以放任意角色名。
		 * //如果其中包含发动技能的角色名"player"，且info.audio不是直接路径"(anyPath/)filename(.format)"的形式
		 * //则在"skill"和number中插入"_player"，形如
		 *
		 * info.audioname2={'player1':audioInfo1,'player2':audioInfo2}
		 * //audioname2是一个对象，其中key为角色名，value的类型和info.audio一样
		 * //如果key中包含发动技能的角色名player，则直接改用info.audioname2[player]来播放语音
		 * ```
		 */
		game.parseSkillAudio=function(skill, player, skillInfo) {
			return game.parseSkillTextMap(skill, player, skillInfo).map(data => data.file);
		};
		/**
		 * 根据skill中的audio,audioname,audioname2和player来获取技能台词列表
		 * @param { string } skill  技能名
		 * @param { Player | Object | string } [player]  角色/角色名
		 * @param { skillInfo | audioInfo } [skillInfo]  预设的skillInfo/audioInfo(转为skillInfo)，覆盖lib.skill[skill]
		 * @returns { string[] }  语音地址列表
		 */
		game.parseSkillText=function(skill, player, skillInfo) {
			return game.parseSkillTextMap(skill, player, skillInfo).map(data => data.text).filter(Boolean);
		};
		/**
		 * 根据skill中的audio,audioname,audioname2和player来获取技能台词列表及其对应的源文件名
		 * @param { string } skill  技能名
		 * @param { Player | Object | string } [player]  角色/角色名
		 * @param { skillInfo | audioInfo } [skillInfo]  预设的skillInfo/audioInfo(转为skillInfo)，覆盖lib.skill[skill]
		 * @returns { any[] }  语音地址列表
		 */
		game.parseSkillTextMap=function(skill, player, skillInfo) {
			if (typeof player === "string") player = { name: player };
			else if (typeof player !== "object" || player === null) player = {};

			if (skillInfo && (typeof skillInfo !== "object" || Array.isArray(skillInfo))) skillInfo = { audio: skillInfo };

			const checkSkill = (skill, history) => {
				if (!lib.skill[skill]) return false;
				if (!history.includes(skill)) return true;
				if (history[0] === skill) return false;
				//deadlock
				throw new RangeError(`parseSkillTextMap: ${skill} in ${history} forms a deadlock`);
			};

			// 临时修改（by 棘手怀念摧毁）
			const getName = (filter) => {
				const name = (player.tempname || []).find((i) => filter(i));
				return (
					name ||
					[player.name, player.name1, player.name2].reduce((result, name) => {
						if (result) return result;
						if (!name) return result;
						if (filter(name)) return name;
						let tempname = (get.character(name, 4) || []).find((tag) => tag.startsWith("tempname:"));
						if (!tempname) return result;
						tempname = tempname
							.split(":")
							.slice(1)
							.find((i) => filter(i));
						return tempname || result;
					}, void 0)
				);
			};

			const getTextMap = (path, name, ext) => ({
				name,
				file: `${path}${name}${ext}`,
				text: lib.translate[`#${name}`],
			});

			function getAudioList(skill, options, skillInfo) {
				const info = skillInfo || lib.skill[skill];
				if (!info) {
					console.error(new ReferenceError(`parseSkillAudio: Cannot find ${skill} in lib.skill`));
					return parseAudio(skill, options, [true, 2]);
				}

				const { audioname, history } = options;
				history.unshift(skill);
				let audioInfo = info.audio;
				if (Array.isArray(info.audioname)) audioname.addArray(info.audioname);
				if (info.audioname2) audioInfo = info.audioname2[getName(i => info.audioname2[i])] || audioInfo;

				return parseAudio(skill, options, audioInfo);
			}

			function parseAudio(skill, options, audioInfo) {
				const audioname = options.audioname.slice();
				const history = options.history.slice();
				options = { audioname, history };
				if (Array.isArray(audioInfo)) {
					if (audioInfo.length === 2 && typeof audioInfo[0] === "string" && typeof audioInfo[1] === "number") {
						const [name, number] = audioInfo;
						if (checkSkill(name, history)) return getAudioList(name, options).slice(0, number);
						return parseAudio(name, options, number);
					}

					const map = {};
					audioInfo.forEach((i) => {
						parseAudio(skill, options, i).forEach(data => map[data.name] = data);
					});
					return Object.values(map);
				}

				if (!["string", "number", "boolean"].includes(typeof audioInfo)) return parseAudio(skill, options, [true, 2]);
				if (audioInfo === false) return [];
				if (typeof audioInfo === "string") {
					if (["data:", "blob:"].some(prefix => audioInfo.startsWith(prefix))) return [getTextMap("", audioInfo, "")];
					if(checkSkill(audioInfo, history)) return getAudioList(audioInfo, options);
				}
				audioInfo = String(audioInfo);
				const list = audioInfo.match(/(?:(.*):|^)(true|\d+)(?::(.*)|$)/); // [path, number|true, ext]
				if (!list) {
					let path = "", ext = "";
					if (!/^db:|^ext:|\//.test(audioInfo)) path = "skill/";
					if (!/\.\w+$/.test(audioInfo)) ext = ".mp3";
					if (path && ext) return parseAudio(audioInfo, options, [true, 2]);
					//@TODO
					console.warn(`${skill}中“${audioInfo}”的地址写法暂时没有完全支持台词系统。`);
					return [getTextMap(path, audioInfo, ext)];
				}

				let [, path = "skill", audioNum, ext = "mp3"] = list;
				let _audioname = getName(i => audioname.includes(i));
				_audioname = _audioname ? `_${_audioname}` : "";

				if (audioNum === "true") return [getTextMap(`${path}/`, `${skill}${_audioname}`, `.${ext}`)];

				const audioList = [];
				audioNum = parseInt(audioNum);
				for (let i = 1; i <= audioNum; i++) {
					audioList.push(getTextMap(`${path}/`, `${skill}${_audioname}${i}`, `.${ext}`));
				}
				return audioList;
			}

			return getAudioList(skill, { audioname: [], history: [] }, skillInfo);
		};
		/**
		 * 获取角色死亡时能播放的所有阵亡语音
		 * @param { string | Player } player  角色名
		 * @returns { any[] }  语音地址列表
		 */
		game.parseDieTextMap=function(player){
			let name, rawName;
			if (typeof player === "string") {
				name = player;
				rawName = name;
			}
			else if (get.itemtype(player) === "player") {
				// @ts-ignore
				name = player.skin.name || player.name;
				rawName = player.name;
			}
			
			// 临时修改（by 棘手怀念摧毁）
			const datas = [];
			let dieAudios = [];
			if (lib.character[name] && lib.character[name][4] && lib.character[name][4].some(tag => tag.startsWith('die_audio'))) {
				var tag = lib.character[name][4].find(tag => tag.startsWith('die_audio'));
				dieAudios = tag.split(':').slice(1);
			}
			
			if(dieAudios && dieAudios.length > 0){
				dieAudios.forEach(item => {
					let key, file;
					if(item.startsWith("ext:")){
						key = item.slice(4).split("/")[1];
						file = item;
					}
					else {
						key = item;
						file = `die/${item}.mp3`;
					}
					const data = {key, file}
					if(lib.translate[`#${key}:die`]) data.text = lib.translate[`#${key}:die`];
					datas.push(data);
				});
			}
			else {
				const data = {
					key: name,
					file: `die/${name}.mp3`,
					isDefault: true,
				}
				if(lib.translate[`#${name}:die`]) data.text = lib.translate[`#${name}:die`];
				datas.push(data);
			}
			return datas;
		};
		
		// 本体函数修改
		ui.click.avatar = function() {
			if (!lib.config.doubleclick_intro) return;
			
			// 查看不可见武将资料卡
			if (lib.config['extension_搬运自用_byzy_ckbkjwjzlk'] != true) {
				if (this.parentNode.isUnseen(0)) return;
				if (!lib.character[this.parentNode.name]) return;
			}
			
			if (!ui.menuContainer) return;
			var avatar = this;
			var player = this.parentNode;
			if (!game.players.includes(player) && !game.dead.includes(player)) return;
			if (!this._doubleClicking) {
				this._doubleClicking = true;
				setTimeout(function () {
					avatar._doubleClicking = false;
				}, 500);
				return;
			}
			// ui.click.skin(this,player.name);
			game.pause2();
			
			// 资料卡查看双形态原画
			if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
				var audioName=player.skin.name || player.name1 || player.name;
				ui.click.charactercard(player.name1 || player.name, null, null, true, this, audioName);
			} else ui.click.charactercard(player.name1 || player.name, null, null, true, this);
		};
		ui.click.avatar2 = function() {
			if (!lib.config.doubleclick_intro) return;
			
			// 查看不可见武将资料卡
			if (lib.config['extension_搬运自用_byzy_ckbkjwjzlk'] != true) {
				if (this.parentNode.classList.contains("unseen2")) return;
				if (!lib.character[this.parentNode.name2]) return;
			}
			
			if (!ui.menuContainer) return;
			var avatar = this;
			var player = this.parentNode;
			if (!game.players.includes(player) && !game.dead.includes(player)) return;
			if (!this._doubleClicking) {
				this._doubleClicking = true;
				setTimeout(function () {
					avatar._doubleClicking = false;
				}, 500);
				return;
			}
			// ui.click.skin(this,player.name2);
			game.pause2();
			
			// 资料卡查看双形态原画
			if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
				ui.click.charactercard(player.name2, null, null, true, this, player.skin.name2 || player.name2);
			} else ui.click.charactercard(player.name2, null, null, true, this);
		};
		
		// 修改game.js的函数charactercard:function(name,sourcenode,noedit,resume,avatar){
		// ui.click.charactercard=function(name,sourcenode,noedit,resume,avatar){
		// 修改
		ui.click.charactercard=function(name, sourcenode, noedit, resume, avatar, audioName) {
			// 多个阵亡配音按顺序播放
			_status.uiclickcharactercard=true;
			
			// 资料卡查看双形态原画
			// if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
				if(!audioName) audioName = name;
			// }
			
			if(_status.dragged) return;
			if(lib.config.theme!='simple'){
				ui.window.classList.add('shortcutpaused');
				ui.menuContainer.classList.add('forceopaque');
			}
			else{
				ui.window.classList.add('systempaused');
				ui.menuContainer.classList.add('transparent2');
			}
			if(lib.config.blur_ui){
				ui.arena.classList.add('blur');
				ui.system.classList.add('blur');
				ui.menuContainer.classList.add('blur');
			}
			var layer=ui.create.div('.popup-container');
			var clicklayer=function(e){
				if(_status.touchpopping) return;
				if(_status.dragged) return;
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				ui.menuContainer.classList.remove('forceopaque');
				ui.menuContainer.classList.remove('transparent2');
				ui.arena.classList.remove('blur');
				ui.system.classList.remove('blur');
				ui.menuContainer.classList.remove('blur');
				this.delete();
				e.stopPropagation();
				if(resume) game.resume2();
				return false;
			}
			var uiintro=ui.create.div('.menubg.charactercard',layer);
			var playerbg=ui.create.div('.menubutton.large.ava',uiintro);
			
			// 资料卡查看双形态原画
			if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
				var bg=ui.create.div('.avatar',playerbg,function(){
					if(changeskinfunc){
						changeskinfunc();
					}
				}).setBackground(audioName || name, "character");
			}else{
				var bg=ui.create.div('.avatar',playerbg,function(){
					if(changeskinfunc){
						changeskinfunc();
					}
				}).setBackground(name,'character');
			}
			
			var changeskinfunc=null;
			var nameskin=name;
			var nameskin2=name;
			var gzbool=false;
			if(nameskin.startsWith('gz_shibing')){
				nameskin=nameskin.slice(3,11);
			}
			else if(nameskin.startsWith('gz_')){
				nameskin=nameskin.slice(3);
				gzbool=true;
			}
			var changeskin=function(){
				var node=ui.create.div('.changeskin','可换肤',playerbg);
				var avatars=ui.create.div('.avatars',playerbg);
				changeskinfunc=function(){
					playerbg.classList.add('scroll');
					if(node._created){
						return;
					}
					node._created=true;
					var createButtons=function(num){
						if(!num) return;
						if(num>=4){
							avatars.classList.add('scroll');
							if(lib.config.touchscreen){
								lib.setScroll(avatars);
							}
						}
						for(var i=0;i<=num;i++){
							var button=ui.create.div(avatars,function(){
								playerbg.classList.remove('scroll');
								if(this._link){
									lib.config.skin[nameskin]=this._link;
									bg.style.backgroundImage=this.style.backgroundImage;
									if(sourcenode) sourcenode.style.backgroundImage=this.style.backgroundImage;
									if(avatar) avatar.style.backgroundImage=this.style.backgroundImage;
									game.saveConfig('skin',lib.config.skin);
								}
								else{
									delete lib.config.skin[nameskin];
									if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin){
										bg.setBackground(nameskin2,'character');
										if(sourcenode) sourcenode.setBackground(nameskin2,'character');
										if(avatar) avatar.setBackground(nameskin2,'character');
									}
									else{
										bg.setBackground(nameskin,'character');
										if(sourcenode) sourcenode.setBackground(nameskin,'character');
										if(avatar) avatar.setBackground(nameskin,'character');
									}
									game.saveConfig('skin',lib.config.skin);
								}
							});
							button._link=i;
							if(i){
								button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
							}
							else{
								if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2,'character','noskin');
								else button.setBackground(nameskin,'character','noskin');
							}
						}
					};
					var num=1;
					var loadImage=function(){
						var img=new Image();
						img.onload=function(){
							num++;
							loadImage();
						}
						img.onerror=function(){
							num--;
							createButtons(num);
						}
						img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
					}
					if(lib.config.change_skin){
						loadImage();
					}
					else{
						createButtons(lib.skin[nameskin]);
					}
				};
			};
			if(lib.config.change_skin){
				var img=new Image();
				img.onload=changeskin;
				img.src=lib.assetURL+'image/skin/'+nameskin+'/1.jpg';
			}
			else if(lib.config.debug&&lib.skin[nameskin]){
				changeskin();
			}
			
			var characterbutton=ui.create.div('.characterbutton',uiintro);
			if(lib.config.touchscreen){
				lib.setScroll(characterbutton);
			}
			if(lib.config.mousewheel){
				characterbutton.onmousewheel=ui.click.mousewheel;
			}
			// 禁用按钮
			var ban=ui.create.div('.menubutton.large.ban.character',characterbutton,'禁用',function(e){
				if(this.classList.contains('unselectable')) return;
				if(typeof noedit=='string'){
					this.classList.toggle('active');
					var bannedname=noedit+'_banned';
					if(!lib.config[bannedname]){
						lib.config[bannedname]=[];
					}
					if(this.classList.contains('active')){
						lib.config[bannedname].add(name);
					}
					else{
						lib.config[bannedname].remove(name);
					}
					game.saveConfig(bannedname,lib.config[bannedname]);
					ban.updateBanned();
				}
				else{
					ui.click.touchpop();
					ui.click.intro.call(this,e);
					_status.clicked=true;
				}
			});
			ban.link=name;
			ban._banning='offline';
			ban.updateBanned=function(){
				if(noedit===true) return;
				if(lib.config[get.mode()+'_banned']&&lib.config[get.mode()+'_banned'].contains(name)){
					ban.classList.add('active');
				}
				else{
					ban.classList.remove('active');
				}
				if(sourcenode&&sourcenode.updateBanned){
					sourcenode.updateBanned();
				}
			};
			ban.updateBanned();
			// 收藏按钮
			var fav=ui.create.div('.menubutton.large.fav',characterbutton,'收藏',function(){
				if(this.classList.contains('unselectable')) return;
				this.classList.toggle('active');
				if(this.classList.contains('active')){
					lib.config.favouriteCharacter.add(name);
				}
				else{
					lib.config.favouriteCharacter.remove(name);
				}
				game.saveConfig('favouriteCharacter',lib.config.favouriteCharacter);
			});
			if(noedit===true){
				fav.classList.add('unselectable');
				ban.classList.add('unselectable');
			}
			else if(lib.config.favouriteCharacter.contains(name)){
				fav.classList.add('active');
			}
			// 注解按钮
			var pinyinbutton=ui.create.div('.menubutton.large.pinyin',characterbutton,'注解',function(){
				this.classList.add('active');
				setTimeout(function(){
					pinyinbutton.classList.remove('active');
				},300);
				// 点击后切换资料卡注解：显示武将名注解选项和显示技能名注解选项统一切换拼音/代码ID，暂时仅支持样式二（若非样式二则点击后设为样式二）
				if(lib.config.show_characternamepinyin=='showPinyin2'||lib.config.show_skillnamepinyin=='showPinyin2'||lib.config.show_characternamepinyin=='showCodeIdentifier2'||lib.config.show_skillnamepinyin=='showCodeIdentifier2'){
					if(lib.config.show_characternamepinyin=='showPinyin2'||lib.config.show_skillnamepinyin=='showPinyin2'){
						game.saveConfig('show_characternamepinyin','showCodeIdentifier2');
						game.saveConfig('show_skillnamepinyin','showCodeIdentifier2');
						pinyinbutton.innerHTML='代码';
					}
					else if(lib.config.show_characternamepinyin=='showCodeIdentifier2'||lib.config.show_skillnamepinyin=='showCodeIdentifier2'){
						game.saveConfig('show_characternamepinyin','showPinyin2');
						game.saveConfig('show_skillnamepinyin','showPinyin2');
						pinyinbutton.innerHTML='拼音';
					}
				} else {
					game.saveConfig('show_characternamepinyin','showPinyin2');
					game.saveConfig('show_skillnamepinyin','showPinyin2');
					pinyinbutton.innerHTML='拼音';
				}
				refreshintro();
				var index;
				// 获取父元素
				var parentElement = document.getElementById('skills_node');
				// 获取父元素下具有 .active 类的子元素
				var activeElements = parentElement.querySelectorAll('.active');
				// 遍历所有带有 .active 类的子元素
				activeElements.forEach(function(element) {
					// 获取每个带有 .active 类的子元素在其父元素中的索引
					index = Array.from(parentElement.children).indexOf(element);
				});
				var current=this;
				current.link=list[index];
				clickSkill.call(current,'init');
			});
			pinyinbutton.classList.remove('active');
			// 台词按钮
			var taicibutton=ui.create.div('.menubutton.large.taici',characterbutton,'台词',function(){
				// 点击设置台词是否显示，功能同资料卡显示台词
				if(lib.config['extension_搬运自用_byzy_zlkxstc'] == false){
					lib.extensionMenu.extension_搬运自用.byzy_zlkxstc.onclick(true);
					this.classList.add('active');
				}
				else if(lib.config['extension_搬运自用_byzy_zlkxstc'] != false){
					lib.extensionMenu.extension_搬运自用.byzy_zlkxstc.onclick(false);
					this.classList.remove('active');
				}
				refreshintro();
			});
			if(lib.config['extension_搬运自用_byzy_zlkxstc'] != false){
				taicibutton.classList.add('active');
			}else taicibutton.classList.remove('active');
			// 切换按钮
			var qiehuanbutton=ui.create.div('.menubutton.large.taici',characterbutton,'切换',function(){
				// 点击设置是否查看切换后的双形态原画（含语音台词），功能同资料卡查看双形态原画
				if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] == false){
					lib.extensionMenu.extension_搬运自用.byzy_zlkcksxtyh.onclick(true);
					this.classList.add('active');
				}
				else if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false){
					lib.extensionMenu.extension_搬运自用.byzy_zlkcksxtyh.onclick(false);
					this.classList.remove('active');
				}
			});
			if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false){
				qiehuanbutton.classList.add('active');
			}else qiehuanbutton.classList.remove('active');
			// 阵亡按钮
			var diebutton=ui.create.div('.menubutton.large.die',characterbutton,'阵亡',function(){
				this.classList.add('active');
				setTimeout(function(){
					diebutton.classList.remove('active');
				},300);
				// 点击后试听阵亡配音
				// 改本体game.js函数die:function(){中if(lib.config.background_speak){
				if(lib.config.background_speak){
					if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].contains('sanguomingjiang_die_audio')){
						if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].some(tag=>tag.startsWith('die_audio'))){
							var tag=lib.character[name][4].find(tag=>tag.startsWith('die_audio'));
							var list=tag.split(':').slice(1);
							// 多个阵亡配音按顺序播放
							if(list.length>1){
								// getIndexFun来自下方getIndex
								var that=this;
								var getIndexFun=function(i){
									if(typeof that.audioindex!='number'){
										that.audioindex=i;
									}
									that.audioindex++;
									if(that.audioindex>i){
										that.audioindex=1;
									}
									return that.audioindex;
								};
								game.playAudio('..','extension','三国24名将','audio',list[getIndexFun(list.length)-1]);
							} else game.playAudio('..','extension','三国24名将','audio',list.length?list[0]:name);
						} else
						game.playAudio('..','extension','三国24名将','audio',name);
					}
					else if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].contains('xyx_die_audio')){
						if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].some(tag=>tag.startsWith('die_audio'))){
							var tag=lib.character[name][4].find(tag=>tag.startsWith('die_audio'));
							var list=tag.split(':').slice(1);
							// 多个阵亡配音按顺序播放
							if(list.length>1){
								// getIndexFun来自下方getIndex
								var that=this;
								var getIndexFun=function(i){
									if(typeof that.audioindex!='number'){
										that.audioindex=i;
									}
									that.audioindex++;
									if(that.audioindex>i){
										that.audioindex=1;
									}
									return that.audioindex;
								};
								game.playAudio('..','extension','小游戏整合','audio',list[getIndexFun(list.length)-1]);
							} else game.playAudio('..','extension','小游戏整合','audio',list.length?list[0]:name);
						} else
						game.playAudio('..','extension','小游戏整合','audio',name);
					}
					else if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].some(tag=>/^die:.+$/.test(tag))){
						var tag=lib.character[name][4].find(tag=>/^die:.+$/.test(tag));
						var reg=new RegExp("^ext:(.+)?/");
						var match=tag.match(/^die:(.+)$/);
						if(match){
							var path=match[1];
							if(reg.test(path)) path=path.replace(reg,(_o,p)=>`../extension/${p}/`);
							game.playAudio(path);
						}
					}
					else if(lib.character[name]&&lib.character[name][4]&&lib.character[name][4].some(tag=>tag.startsWith('die_audio'))){
						var tag=lib.character[name][4].find(tag=>tag.startsWith('die_audio'));
						var list=tag.split(':').slice(1);
						// 多个阵亡配音按顺序播放
						if(list.length>1){
							// getIndexFun来自下方getIndex
							var that=this;
							var getIndexFun=function(i){
								if(typeof that.audioindex!='number'){
									that.audioindex=i;
								}
								that.audioindex++;
								if(that.audioindex>i){
									that.audioindex=1;
								}
								return that.audioindex;
							};
							game.playAudio('die',list[getIndexFun(list.length)-1]);
						} else
						game.playAudio('die',list.length?list[0]:name);
					}
					else{
						// 资料卡查看双形态原画
						if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
							var audioName0;
							// 手杀曹髦等武将处理
							if(lib.characterSubstitute[name] && lib.characterSubstitute[name].find((i) => i[0] == audioName) && (lib.characterSubstitute[name].find((i) => i[0] == audioName))[1][0]) {
								var tag0=(lib.characterSubstitute[name].find((i) => i[0] == audioName))[1][0];
								var list0=tag0.split(':').slice(1);
								// 暂仅支持单条阵亡配音
								if(list0.length>1){
									
								} else audioName0=list0[0];
							} else audioName0=audioName;
							
							game.playAudio('die',audioName0 || name,function(){
								game.playAudio('die',name.slice(name.indexOf('_')+1));
							});
						}else{
							game.playAudio('die',name,function(){
								game.playAudio('die',name.slice(name.indexOf('_')+1));
							});
						}
					}
				}
			});
			diebutton.classList.remove('active');
			// 胜利按钮
			var winbutton=ui.create.div('.menubutton.large.win',characterbutton,'胜利',function(){
				this.classList.add('active');
				setTimeout(function(){
					winbutton.classList.remove('active');
				},300);
				// 点击后试听胜利配音
				if(lib.config.background_speak){
					// （等待后续更新）
				}
			});
			winbutton.classList.remove('active');
			
			
			// 搬运自下方并修改，注意同步更新
			function refreshintro(){
				// 暂时仅支持样式二
				if(intro){
					var nameinfo=get.character(name);
					// 修改1
					// var intro=ui.create.div('.characterintro',get.characterIntro(name),uiintro);
					if(lib.config.show_characternamepinyin=='showPinyin2'||lib.config.show_characternamepinyin=='showCodeIdentifier2'){
						var charactername=get.rawName2(name);
						var characterpinyin=lib.config.show_characternamepinyin=='showCodeIdentifier2'?name:get.pinyin(charactername);
						var charactersex=get.translation(nameinfo[0]);
						const charactergroups=get.is.double(name,true);
						let charactergroup;
						if(charactergroups) charactergroup=charactergroups.map(i=>get.translation(i)).join('/')
						else charactergroup=get.translation(nameinfo[1]);
						var characterhp=nameinfo[2];
						var characterintroinfo=get.characterIntro(name);
						var spacemark=' | ';
						if(charactername.length>3) spacemark='<span style="font-size:7px">'+' '+'</span>'+'|'+'<span style="font-size:7px">'+' '+'</span>';
						// intro.innerHTML='<span style="font-weight:bold;margin-right:5px">'+charactername+'</span>'+'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+characterpinyin+']'+'</span>'+spacemark+charactersex+spacemark+charactergroup+spacemark+characterhp+'<span style="line-height:2"></span>'+'<br>'+characterintroinfo;
						intro.innerHTML=
							'<div onclick="window.byzy_zlkdjckwjxx(\'' + name + '\')">' +
							'<span style="font-weight:bold;margin-right:5px">'+charactername+'</span>'+
							'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+characterpinyin+']'+'</span>'+
							'</div>' +
							spacemark+charactersex+spacemark+charactergroup+spacemark+characterhp+'<span style="line-height:2"></span>'+'<br>'+characterintroinfo;
					} else {
						// 修改2
						intro.innerHTML=get.characterIntro(name);
					}
					
					// 资料卡显示台词
					if(lib.config['extension_搬运自用_byzy_zlkxstc'] != false){
						// 添加台词部分
						// 阵亡台词Map
						// 资料卡查看双形态原画
						let dieAudios;
						if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
							dieAudios = game.parseDieTextMap(audioName).filter(i => "text" in i);
							if(!dieAudios.length) dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
						}else{
							dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
						}
						// 技能台词Map
						const skillAudioMap = new Map();
						nameinfo[3].forEach(skill => {
							// 资料卡查看双形态原画
							let voiceMap;
							if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
								voiceMap = game.parseSkillText(skill, audioName);
								if(!voiceMap.length) voiceMap = game.parseSkillText(skill, name);
							}else{
								voiceMap = game.parseSkillText(skill, name);
							}
							if(voiceMap.length) skillAudioMap.set(skill, voiceMap);
						});
						// 衍生技能台词Map
						const derivationSkillAudioMap = new Map();
						nameinfo[3].forEach(skill => {
							var info = get.info(skill);
							if(info && info.derivation) {
								var derivation = info.derivation;
								if(typeof derivation == 'string') {
									derivation = [derivation];
								}
								for(var i=0; i<derivation.length; i++) {
									if (derivation[i].indexOf('_faq') != -1) continue;
									// 资料卡查看双形态原画
									let derivationVoiceMap;
									if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
										derivationVoiceMap = game.parseSkillText(derivation[i], audioName);
										if(!derivationVoiceMap.length) derivationVoiceMap = game.parseSkillText(derivation[i], name);
									}else{
										derivationVoiceMap = game.parseSkillText(derivation[i], name);
									}
									if(derivationVoiceMap.length) derivationSkillAudioMap.set(derivation[i], derivationVoiceMap);
								}
							}
						});
						if (dieAudios.length || skillAudioMap.size > 0) {
							// 分界线
							const eleHr = document.createElement("hr");
							eleHr.style.marginTop = "11px";
							intro.appendChild(eleHr);
							// 技能台词
							if (skillAudioMap.size > 0) {
								const skillNameSpan = document.createElement("span");
								skillNameSpan.style.lineHeight = "1.7";
								skillNameSpan.innerHTML = `• 技能台词<br>`;
								intro.appendChild(skillNameSpan);
								skillAudioMap.forEach((texts, skill) => {
									const skillNameSpan1 = document.createElement("span"),
										skillNameSpanStyle1 = skillNameSpan1.style;
									skillNameSpanStyle1.fontWeight = "bold";
									skillNameSpanStyle1.fontSize = "15.7px";
									skillNameSpanStyle1.lineHeight = "1.4";
									skillNameSpan1.innerHTML = `${get.translation(skill)}<br>`;
									intro.appendChild(skillNameSpan1);
									texts.forEach((text, index) => {
										const skillTextSpan = document.createElement("span");
										skillTextSpan.style.fontSize = "15.2px";
										skillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
										intro.appendChild(skillTextSpan);
									});
								});
							}
							// 衍生技能台词
							if (derivationSkillAudioMap.size > 0) {
								const derivationSkillNameSpan = document.createElement("span");
								derivationSkillNameSpan.style.lineHeight = "1.7";
								derivationSkillNameSpan.innerHTML = `• 衍生技能台词<br>`;
								intro.appendChild(derivationSkillNameSpan);
								derivationSkillAudioMap.forEach((texts, skill) => {
									const derivationSkillNameSpan1 = document.createElement("span"),
										derivationSkillNameSpanStyle1 = derivationSkillNameSpan1.style;
									derivationSkillNameSpanStyle1.fontWeight = "bold";
									derivationSkillNameSpanStyle1.fontSize = "15.7px";
									derivationSkillNameSpanStyle1.lineHeight = "1.4";
									derivationSkillNameSpan1.innerHTML = `${get.translation(skill)}<br>`;
									intro.appendChild(derivationSkillNameSpan1);
									texts.forEach((text, index) => {
										const derivationSkillTextSpan = document.createElement("span");
										derivationSkillTextSpan.style.fontSize = "15.2px";
										derivationSkillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
										intro.appendChild(derivationSkillTextSpan);
									});
								});
							}
							// 阵亡台词
							if (dieAudios.length > 0) {
								const skillNameSpan2 = document.createElement("span"),
									skillNameSpanStyle2 = skillNameSpan2.style;
								skillNameSpanStyle2.lineHeight = "1.9";
								skillNameSpan2.innerHTML = `• 阵亡台词`;
								intro.appendChild(skillNameSpan2);
								dieAudios.forEach((item, index) => {
									const dieTextSpan = document.createElement("span");
									dieTextSpan.style.fontSize = "15.2px";
									dieTextSpan.innerHTML = `<br>${dieAudios.length > 1 ? `${index + 1}. ` : ""}${item.text}`;
									intro.appendChild(dieTextSpan);
								});
							}
						}
					}
				}
			}
			
			
			// 默认样式修改为样式二
			if(lib.config.show_characternamepinyin=='showPinyin'||lib.config.show_skillnamepinyin=='showPinyin'||lib.config.show_characternamepinyin=='showCodeIdentifier'||lib.config.show_skillnamepinyin=='showCodeIdentifier'){
				// 样式一
				const nameInfo=get.character(name);
				const introduction=ui.create.div('.characterintro',uiintro),showCharacterNamePinyin=lib.config.show_characternamepinyin;
				if(showCharacterNamePinyin!='doNotShow'){
					const characterIntroTable=ui.create.div('.character-intro-table',introduction),span=document.createElement('span');
					span.style.fontWeight='bold';
					const exInfo=nameInfo[4],characterName=exInfo&&exInfo.includes('ruby')?lib.translate[name]:get.rawName2(name);
					span.innerHTML=characterName;
					const ruby=document.createElement('ruby');
					ruby.appendChild(span);
					const leftParenthesisRP=document.createElement('rp');
					leftParenthesisRP.textContent='（';
					ruby.appendChild(leftParenthesisRP);
					const rt=document.createElement('rt');
					rt.innerHTML=showCharacterNamePinyin=='showCodeIdentifier'?name:lib.translate[`${name}_rt`]||get.pinyin(characterName).join(' ');
					ruby.appendChild(rt);
					const rightParenthesisRP=document.createElement('rp');
					rightParenthesisRP.textContent='）';
					ruby.appendChild(rightParenthesisRP);
					characterIntroTable.appendChild(ruby);
					const characterSexDiv=ui.create.div('.character-sex',characterIntroTable),exInfoSex=exInfo&&exInfo.find(value=>value.startsWith('sex:')),characterSex=exInfoSex?exInfoSex.split(':').pop():nameInfo[0];
					new Promise((resolve,reject)=>{
						const imageName=`sex_${characterSex}`,information=lib.card[imageName];
						if(!information) {
							resolve(`${lib.assetURL}image/card/${imageName}.png`)
							return;
						}
						const image=information.image;
						if(!image) resolve(`${lib.assetURL}image/card/${imageName}.png`);
						else if(image.startsWith('db:')) game.getDB('image',image.slice(3)).then(resolve,reject);
						else if(image.startsWith('ext:')) resolve(`${lib.assetURL}${image.replace(/^ext:/,'extension/')}`);
						else resolve(`${lib.assetURL}${image}`);
					}).then(source=>new Promise((resolve,reject)=>{
						const image=new Image();
						image.onload=()=>resolve(image);
						image.onerror=reject;
						image.src=source;
					})).then(image=>characterSexDiv.appendChild(image)).catch(()=>characterSexDiv.innerHTML=get.translation(characterSex));
					const characterGroupDiv=ui.create.div('.character-group',characterIntroTable),characterGroups=get.is.double(name,true);
					if(characterGroups) Promise.all(characterGroups.map(characterGroup=>
						Promise.resolve().then(async () => {
						const imageName = `group_${characterGroup}`,
							information = lib.card[imageName];
						if (!information) return `${lib.assetURL}image/card/${imageName}.png`;
						const image = information.image;
						if (!image) return `${lib.assetURL}image/card/${imageName}.png`;
						if (image.startsWith("db:")) return await game.getDB("image", image.slice(3));
						if (image.startsWith("ext:")) return `${lib.assetURL}${image.replace(/^ext:/, "extension/")}`;
						return `${lib.assetURL}${image}`;
					}).then(source=>new Promise((resolve,reject)=>{
						const image=new Image();
						image.onload=()=>resolve(image);
						image.onerror=reject;
						image.src=source;
					})))).then(images=>{
						let documentFragment=document.createDocumentFragment();
						images.forEach(documentFragment.appendChild,documentFragment);
						characterGroupDiv.appendChild(documentFragment);
					}).catch(()=>characterGroupDiv.innerHTML=characterGroups.map(characterGroup=>get.translation(characterGroup)).join('/'));
					else{
						const characterGroup=nameInfo[1];
						Promise.resolve().then(async () => {
							const imageName = `group_${characterGroup}`,
								information = lib.card[imageName];
							if (!information) return `${lib.assetURL}image/card/${imageName}.png`;
							const image = information.image;
							if (!image) return `${lib.assetURL}image/card/${imageName}.png`;
							if (image.startsWith("db:")) return await game.getDB("image", image.slice(3));
							if (image.startsWith("ext:")) return `${lib.assetURL}${image.replace(/^ext:/, "extension/")}`;
							return `${lib.assetURL}${image}`;
						}).then(source=>new Promise((resolve,reject)=>{
							const image=new Image();
							image.onload=()=>resolve(image);
							image.onerror=reject;
							image.src=source;
						})).then(image=>characterGroupDiv.appendChild(image)).catch(()=>characterGroupDiv.innerHTML=get.translation(characterGroup));
					}
					const hpDiv=ui.create.div('.hp',characterIntroTable),nameInfoHP=nameInfo[2],infoHP=get.infoHp(nameInfoHP);
					hpDiv.dataset.condition=infoHP<4?'mid':'high';
					ui.create.div(hpDiv);
					const hpTextDiv=ui.create.div('.text',hpDiv),infoMaxHP=get.infoMaxHp(nameInfoHP);
					hpTextDiv.innerHTML=infoHP==infoMaxHP?`×${infoHP}`:`×${infoHP}/${infoMaxHP}`;
					const infoShield=get.infoHujia(nameInfoHP);
					if(infoShield){
						ui.create.div('.shield',hpDiv);
						const shieldTextDiv=ui.create.div('.text',hpDiv);
						shieldTextDiv.innerHTML=`×${infoShield}`;
					}
					introduction.appendChild(document.createElement('hr'));
				}
				const htmlParser=document.createElement('body');
				htmlParser.innerHTML=get.characterIntro(name);
				Array.from(htmlParser.childNodes).forEach(value=>introduction.appendChild(value));
				
				// 资料卡显示台词
				if(lib.config['extension_搬运自用_byzy_zlkxstc'] != false){
					// 添加台词部分
					// 阵亡台词Map
					// 资料卡查看双形态原画
					let dieAudios;
					if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
						dieAudios = game.parseDieTextMap(audioName).filter(i => "text" in i);
						if(!dieAudios.length) dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
					}else{
						dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
					}
					// 技能台词Map
					const skillAudioMap = new Map();
					nameInfo[3].forEach(skill => {
						// 资料卡查看双形态原画
						let voiceMap;
						if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
							voiceMap = game.parseSkillText(skill, audioName);
							if(!voiceMap.length) voiceMap = game.parseSkillText(skill, name);
						}else{
							voiceMap = game.parseSkillText(skill, name);
						}
						if(voiceMap.length) skillAudioMap.set(skill, voiceMap);
					});
					// 衍生技能台词Map
					const derivationSkillAudioMap = new Map();
					nameInfo[3].forEach(skill => {
						var info = get.info(skill);
						if(info && info.derivation) {
							var derivation = info.derivation;
							if(typeof derivation == 'string') {
								derivation = [derivation];
							}
							for(var i=0; i<derivation.length; i++) {
								if (derivation[i].indexOf('_faq') != -1) continue;
								// 资料卡查看双形态原画
								let derivationVoiceMap;
								if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
									derivationVoiceMap = game.parseSkillText(derivation[i], audioName);
									if(!derivationVoiceMap.length) derivationVoiceMap = game.parseSkillText(derivation[i], name);
								}else{
									derivationVoiceMap = game.parseSkillText(derivation[i], name);
								}
								if(derivationVoiceMap.length) derivationSkillAudioMap.set(derivation[i], derivationVoiceMap);
							}
						}
					});
					if (dieAudios.length || skillAudioMap.size > 0) {
						// 分界线
						introduction.appendChild(document.createElement("hr"));
						// 技能台词
						if (skillAudioMap.size > 0) {
							const skillNameSpan = document.createElement("span");
							skillNameSpan.innerHTML = `技能台词<br>`;
							introduction.appendChild(skillNameSpan);
							skillAudioMap.forEach((texts, skill) => {
								const skillNameSpan = document.createElement("span"),
									skillNameSpanStyle = skillNameSpan.style;
								skillNameSpanStyle.fontWeight = "bold";
								skillNameSpan.innerHTML = `<br>${get.translation(skill)}<br>`;
								introduction.appendChild(skillNameSpan);
								texts.forEach((text, index) => {
									const skillTextSpan = document.createElement("span");
									skillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
									introduction.appendChild(skillTextSpan);
								});
							});
						}
						// 衍生技能台词
						if (derivationSkillAudioMap.size > 0) {
							const derivationSkillNameSpan = document.createElement("span");
							derivationSkillNameSpan.innerHTML = `<br>衍生技能台词<br>`;
							introduction.appendChild(derivationSkillNameSpan);
							derivationSkillAudioMap.forEach((texts, skill) => {
								const derivationSkillNameSpan1 = document.createElement("span"),
									derivationSkillNameSpanStyle1 = derivationSkillNameSpan1.style;
								derivationSkillNameSpanStyle1.fontWeight = "bold";
								derivationSkillNameSpan1.innerHTML = `<br>${get.translation(skill)}<br>`;
								introduction.appendChild(derivationSkillNameSpan1);
								texts.forEach((text, index) => {
									const derivationSkillTextSpan = document.createElement("span");
									derivationSkillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
									introduction.appendChild(derivationSkillTextSpan);
								});
							});
						}
						// 阵亡台词
						if (dieAudios.length > 0) {
							const skillNameSpan = document.createElement("span"),
								skillNameSpanStyle = skillNameSpan.style;
							skillNameSpanStyle.fontWeight = "bold";
							skillNameSpan.innerHTML = `<br>阵亡台词`;
							introduction.appendChild(skillNameSpan);
							dieAudios.forEach((item, index) => {
								const dieTextSpan = document.createElement("span");
								dieTextSpan.innerHTML = `<br>${dieAudios.length > 1 ? `${index + 1}. ` : ""}${item.text}`;
								introduction.appendChild(dieTextSpan);
							});
						}
					}
				}
				
				const introduction2=ui.create.div('.characterintro.intro2',uiintro);
				var list=get.character(name,3)||[];
				var skills=ui.create.div('.characterskill',uiintro);
				skills.id='skills_node';
				if(lib.config.touchscreen){
					lib.setScroll(introduction);
					lib.setScroll(introduction2);
					lib.setScroll(skills);
				}

				if(lib.config.mousewheel){
					skills.onmousewheel=ui.click.mousewheel;
				}
				var clickSkill=function(e){
					while(introduction2.firstChild){
						introduction2.removeChild(introduction2.lastChild);
					}
					var current=this.parentNode.querySelector('.active');
					if(current){
						current.classList.remove('active');
					}
					this.classList.add('active');
					const skillNameSpan=document.createElement('span'),skillNameSpanStyle=skillNameSpan.style;
					skillNameSpanStyle.fontWeight='bold';
					const link=this.link,skillName=get.translation(link);
					skillNameSpan.innerHTML=skillName;
					const showSkillNamePinyin=lib.config.show_skillnamepinyin;
					if(showSkillNamePinyin!='doNotShow'&&!lib.notShowSkillNamePinyin.contains(link)){
						const ruby=document.createElement('ruby');
						ruby.appendChild(skillNameSpan);
						const leftParenthesisRP=document.createElement('rp');
						leftParenthesisRP.textContent='（';
						ruby.appendChild(leftParenthesisRP);
						const rt=document.createElement('rt');
						rt.innerHTML=showSkillNamePinyin=='showCodeIdentifier'?link:lib.translate[`${link}_rt`]||get.pinyin(skillName).join(' ');
						ruby.appendChild(rt);
						const rightParenthesisRP=document.createElement('rp');
						rightParenthesisRP.textContent='）';
						ruby.appendChild(rightParenthesisRP);
						const div=ui.create.div(introduction2);
						div.style.marginRight='5px';
						div.appendChild(ruby);
					}
					else{
						skillNameSpanStyle.marginRight='5px';
						introduction2.appendChild(skillNameSpan);
					}
					htmlParser.innerHTML=get.skillInfoTranslation(this.link);
					Array.from(htmlParser.childNodes).forEach(childNode=>introduction2.appendChild(childNode));
					var info=get.info(this.link);
					var skill=this.link;
					
					// 资料卡查看双形态原画
					var playername;
					if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
						playername=audioName || this.linkname;
					}else{
						playername=this.linkname;
					}
					
					var skillnode=this;
					let derivations=info.derivation;
					if(info && derivations){
						if(typeof derivations=='string') derivations=[derivations];
						derivations.forEach(derivation=>{
							introduction2.appendChild(document.createElement('br'));
							introduction2.appendChild(document.createElement('br'));
							const derivationNameSpan=document.createElement('span'),derivationNameSpanStyle=derivationNameSpan.style;
							derivationNameSpanStyle.fontWeight='bold';
							const derivationName=get.translation(derivation);
							derivationNameSpan.innerHTML=derivationName;
							if(showSkillNamePinyin!='doNotShow'&&derivationName.length<=5&&derivation.indexOf('_faq')==-1&&!lib.notShowSkillNamePinyin.contains(derivation)){
								const ruby=document.createElement('ruby');
								ruby.appendChild(derivationNameSpan);
								const leftParenthesisRP=document.createElement('rp');
								leftParenthesisRP.textContent='（';
								ruby.appendChild(leftParenthesisRP);
								const rt=document.createElement('rt');
								rt.innerHTML=showSkillNamePinyin=='showCodeIdentifier'?derivation:lib.translate[`${derivation}_rt`]||get.pinyin(derivationName).join(' ');
								ruby.appendChild(rt);
								const rightParenthesisRP=document.createElement('rp');
								rightParenthesisRP.textContent='）';
								ruby.appendChild(rightParenthesisRP);
								const div=ui.create.div(introduction2);
								div.style.marginRight='5px';
								div.appendChild(ruby);
							}
							else{
								derivationNameSpanStyle.marginRight='5px';
								introduction2.appendChild(derivationNameSpan);
							}
							htmlParser.innerHTML=get.skillInfoTranslation(derivation);
							Array.from(htmlParser.childNodes).forEach(childNode=>introduction2.appendChild(childNode));
						});
					}
					if(info.alter){
						introduction2.appendChild(document.createElement('br'));
						introduction2.appendChild(document.createElement('br'));
						ui.create.div('.hrefnode.skillversion',introduction2);
						var skillversionnode=introduction2.querySelector('.hrefnode.skillversion');
						if(lib.config.vintageSkills.contains(skill)){
							skillversionnode.innerHTML='切换至新版';
						}
						else{
							skillversionnode.innerHTML='切换至旧版';
						}
						skillversionnode.listen(function(){
							if(lib.config.vintageSkills.contains(skill)){
								lib.config.vintageSkills.remove(skill);
								lib.translate[skill+'_info']=lib.translate[skill+'_info_alter'];
							}
							else{
								lib.config.vintageSkills.push(skill);
								lib.translate[skill+'_info']=lib.translate[skill+'_info_origin'];
							}
							game.saveConfig('vintageSkills',lib.config.vintageSkills);
							clickSkill.call(skillnode,'init');
						});
					}
					
					// 暂时先用旧版
					if(lib.config.background_speak&&e!=='init'){
						var audioname=this.link;
						if(info.audioname2&&info.audioname2[playername]){
							audioname=info.audioname2[playername];
							info=lib.skill[audioname];
						}
						var audioinfo=info.audio;
						var that=this;
						var getIndex=function(i){
							if(typeof that.audioindex!='number'){
								that.audioindex=i;
							}
							that.audioindex++;
							if(that.audioindex>i){
								that.audioindex=1;
							}
							return that.audioindex;
						};
						if(typeof audioinfo=='string'){
							if(audioinfo.indexOf('ext:')==0){
								audioinfo=audioinfo.split(':');
								if(audioinfo.length==3){
									if(audioinfo[2]=='true'){
										game.playAudio('..','extension',audioinfo[1],audioname);
									}
									else{
										audioinfo[2]=parseInt(audioinfo[2]);
										if(audioinfo[2]){
											game.playAudio('..','extension',audioinfo[1],audioname+getIndex(audioinfo[2]));
										}
									}
								}
								return;
							}
							else{
								audioname=audioinfo;
								if(lib.skill[audioinfo]){
									audioinfo=lib.skill[audioinfo].audio;
								}
							}
						}
						else if(Array.isArray(audioinfo)){
							if (audioinfo.length === 2 && typeof audioinfo[0] === "string" && typeof audioinfo[1] === "number") {
								audioname=audioinfo[0];
								audioinfo=audioinfo[1];
							}
						}
						if(typeof audioinfo=='number'){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							// 临时修复tempname标签武将配音播放错误
							if(Array.isArray(info.audioname)&&!info.audioname.contains(playername)&&lib.character[playername]&&lib.character[playername][4].some(tag=>tag.startsWith('tempname'))) audioname=audioname+'_'+info.audioname;
							game.playAudio('skill',audioname+getIndex(audioinfo));
						}
						else if(typeof audioinfo=="object"&&"type" in audioinfo&&audioinfo.type=="direct"&&"files" in audioinfo){
							let audioFiles=audioinfo.files;
							if(typeof audioFiles=="object"){
								if(!Array.isArray(audioFiles)&&playername&&playername in audioFiles)audioFiles=audioFiles[playername];
								if(Array.isArray(audioFiles)){
									const length=audioFiles.length;
									game.playAudio(audioFiles[getIndex(length)-1]);
								}
							}
						}
						else if(audioinfo){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							game.playAudio('skill',audioname);
						}
						else if(true&&info.audio!==false){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							game.playSkillAudio(audioname,getIndex(2));
						}
					}
					/*
					if (lib.config.background_speak && e !== "init") {
						let audio,
							skillnode = this;
						const playedAudios = [];
						(function play() {
							if (!skillnode.audioList || !skillnode.audioList.length) {
								skillnode.audioList = game.parseSkillAudio(skillnode.link, playername);
								if (
									!skillnode.audioList.length ||
									skillnode.audioList.length == playedAudios.length
								)
									return;
							}
							audio = skillnode.audioList.shift();
							playedAudios.push(audio);
							game.playAudio(audio, play);
						})();
					}
					*/
				}
			}else{
				// 样式二
				var nameinfo=get.character(name);
				var intro=ui.create.div('.characterintro',get.characterIntro(name),uiintro);
				if(lib.config.show_characternamepinyin=='showPinyin2'||lib.config.show_characternamepinyin=='showCodeIdentifier2'){
					var charactername=get.rawName2(name);
					var characterpinyin=lib.config.show_characternamepinyin=='showCodeIdentifier2'?name:get.pinyin(charactername);
					var charactersex=get.translation(nameinfo[0]);
					const charactergroups=get.is.double(name,true);
					let charactergroup;
					if(charactergroups) charactergroup=charactergroups.map(i=>get.translation(i)).join('/')
					else charactergroup=get.translation(nameinfo[1]);
					var characterhp=nameinfo[2];
					var characterintroinfo=get.characterIntro(name);
					var spacemark=' | ';
					if(charactername.length>3) spacemark='<span style="font-size:7px">'+' '+'</span>'+'|'+'<span style="font-size:7px">'+' '+'</span>';
					// intro.innerHTML='<span style="font-weight:bold;margin-right:5px">'+charactername+'</span>'+'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+characterpinyin+']'+'</span>'+spacemark+charactersex+spacemark+charactergroup+spacemark+characterhp+'<span style="line-height:2"></span>'+'<br>'+characterintroinfo;
					intro.innerHTML=
						'<div onclick="window.byzy_zlkdjckwjxx(\'' + name + '\')">' +
						'<span style="font-weight:bold;margin-right:5px">'+charactername+'</span>'+
						'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+characterpinyin+']'+'</span>'+
						'</div>' +
						spacemark+charactersex+spacemark+charactergroup+spacemark+characterhp+'<span style="line-height:2"></span>'+'<br>'+characterintroinfo;
				}
				
				// 资料卡显示台词
				if(lib.config['extension_搬运自用_byzy_zlkxstc'] != false){
					// 添加台词部分
					// 阵亡台词Map
					// 资料卡查看双形态原画
					let dieAudios;
					if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
						dieAudios = game.parseDieTextMap(audioName).filter(i => "text" in i);
						if(!dieAudios.length) dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
					}else{
						dieAudios = game.parseDieTextMap(name).filter(i => "text" in i);
					}
					// 技能台词Map
					const skillAudioMap = new Map();
					nameinfo[3].forEach(skill => {
						// 资料卡查看双形态原画
						let voiceMap;
						if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
							voiceMap = game.parseSkillText(skill, audioName);
							if(!voiceMap.length) voiceMap = game.parseSkillText(skill, name);
						}else{
							voiceMap = game.parseSkillText(skill, name);
						}
						if(voiceMap.length) skillAudioMap.set(skill, voiceMap);
					});
					// 衍生技能台词Map
					const derivationSkillAudioMap = new Map();
					nameinfo[3].forEach(skill => {
						var info = get.info(skill);
						if(info && info.derivation) {
							var derivation = info.derivation;
							if(typeof derivation == 'string') {
								derivation = [derivation];
							}
							for(var i=0; i<derivation.length; i++) {
								if (derivation[i].indexOf('_faq') != -1) continue;
								// 资料卡查看双形态原画
								let derivationVoiceMap;
								if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
									derivationVoiceMap = game.parseSkillText(derivation[i], audioName);
									if(!derivationVoiceMap.length) derivationVoiceMap = game.parseSkillText(derivation[i], name);
								}else{
									derivationVoiceMap = game.parseSkillText(derivation[i], name);
								}
								if(derivationVoiceMap.length) derivationSkillAudioMap.set(derivation[i], derivationVoiceMap);
							}
						}
					});
					if (dieAudios.length || skillAudioMap.size > 0) {
						// 分界线
						const eleHr = document.createElement("hr");
						eleHr.style.marginTop = "11px";
						intro.appendChild(eleHr);
						// 技能台词
						if (skillAudioMap.size > 0) {
							const skillNameSpan = document.createElement("span");
							skillNameSpan.style.lineHeight = "1.7";
							skillNameSpan.innerHTML = `• 技能台词<br>`;
							intro.appendChild(skillNameSpan);
							skillAudioMap.forEach((texts, skill) => {
								const skillNameSpan1 = document.createElement("span"),
									skillNameSpanStyle1 = skillNameSpan1.style;
								skillNameSpanStyle1.fontWeight = "bold";
								skillNameSpanStyle1.fontSize = "15.7px";
								skillNameSpanStyle1.lineHeight = "1.4";
								skillNameSpan1.innerHTML = `${get.translation(skill)}<br>`;
								intro.appendChild(skillNameSpan1);
								texts.forEach((text, index) => {
									const skillTextSpan = document.createElement("span");
									skillTextSpan.style.fontSize = "15.2px";
									skillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
									intro.appendChild(skillTextSpan);
								});
							});
						}
						// 衍生技能台词
						if (derivationSkillAudioMap.size > 0) {
							const derivationSkillNameSpan = document.createElement("span");
							derivationSkillNameSpan.style.lineHeight = "1.7";
							derivationSkillNameSpan.innerHTML = `• 衍生技能台词<br>`;
							intro.appendChild(derivationSkillNameSpan);
							derivationSkillAudioMap.forEach((texts, skill) => {
								const derivationSkillNameSpan1 = document.createElement("span"),
									derivationSkillNameSpanStyle1 = derivationSkillNameSpan1.style;
								derivationSkillNameSpanStyle1.fontWeight = "bold";
								derivationSkillNameSpanStyle1.fontSize = "15.7px";
								derivationSkillNameSpanStyle1.lineHeight = "1.4";
								derivationSkillNameSpan1.innerHTML = `${get.translation(skill)}<br>`;
								intro.appendChild(derivationSkillNameSpan1);
								texts.forEach((text, index) => {
									const derivationSkillTextSpan = document.createElement("span");
									derivationSkillTextSpan.style.fontSize = "15.2px";
									derivationSkillTextSpan.innerHTML = `${texts.length > 1 ? `${index + 1}. ` : ""}${text}<br>`;
									intro.appendChild(derivationSkillTextSpan);
								});
							});
						}
						// 阵亡台词
						if (dieAudios.length > 0) {
							const skillNameSpan2 = document.createElement("span"),
								skillNameSpanStyle2 = skillNameSpan2.style;
							skillNameSpanStyle2.lineHeight = "1.9";
							skillNameSpan2.innerHTML = `• 阵亡台词`;
							intro.appendChild(skillNameSpan2);
							dieAudios.forEach((item, index) => {
								const dieTextSpan = document.createElement("span");
								dieTextSpan.style.fontSize = "15.2px";
								dieTextSpan.innerHTML = `<br>${dieAudios.length > 1 ? `${index + 1}. ` : ""}${item.text}`;
								intro.appendChild(dieTextSpan);
							});
						}
					}
				}
				
				var intro2=ui.create.div('.characterintro.intro2',uiintro);
				var list=get.character(name,3)||[];
				var skills=ui.create.div('.characterskill',uiintro);
				skills.id='skills_node';
				if(lib.config.touchscreen){
					lib.setScroll(intro);
					lib.setScroll(intro2);
					lib.setScroll(skills);
				}

				if(lib.config.mousewheel){
					skills.onmousewheel=ui.click.mousewheel;
				}
				var clickSkill=function(e){
					while(intro2.firstChild){
						intro2.removeChild(intro2.lastChild);
					}
					var current=this.parentNode.querySelector('.active');
					if(current){
						current.classList.remove('active');
					}
					this.classList.add('active');
					
					// 资料卡查看双形态原画
					var playername;
					if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
						playername=audioName || this.linkname;
					}else{
						playername=this.linkname;
					}
					
					var skillname=get.translation(this.link);
					var skilltranslationinfo=get.skillInfoTranslation(this.link);
					if((lib.config.show_skillnamepinyin=='showPinyin2'||lib.config.show_skillnamepinyin=='showCodeIdentifier2')&&!lib.notShowSkillNamePinyin.contains(this.link)){
						var skillpinyin=lib.config.show_skillnamepinyin=='showCodeIdentifier2'?this.link:get.pinyin(skillname);
						// intro2.innerHTML='<span style="font-weight:bold;margin-right:5px">'+skillname+'</span>'+'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+skillpinyin+']'+'</span>'+'  '+skilltranslationinfo;
						intro2.innerHTML =
							'<div onclick="window.byzy_zlkstysjnpy(\'' + playername + '\', \'' + this.link + '\')">' +
							'<span style="font-weight:bold;margin-right:5px">' + skillname + '</span>' +
							'</div>' +
							'<div onclick="window.byzy_zlkdjckjndm(\'' + this.link + '\')">' +
							'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">' + '[' + skillpinyin + ']' + '</span>' +
							'</div>' +
							' ' + skilltranslationinfo;
					}else{
						// intro2.innerHTML='<span style="font-weight:bold;margin-right:5px">'+skillname+'</span>'+skilltranslationinfo;
						intro2.innerHTML=
							'<div onclick="window.byzy_zlkstysjnpy(\'' + playername + '\', \'' + this.link + '\')">' +
							'<span style="font-weight:bold;margin-right:5px">'+skillname+'</span>'+
							'</div>' +
							skilltranslationinfo;
					}
					var info=get.info(this.link);
					var skill=this.link;
					
					var skillnode=this;
					if(info && info.derivation){
						var derivation=info.derivation;
						if(typeof derivation=='string'){
							derivation=[derivation];
						}
						for(var i=0;i<derivation.length;i++){
							var derivationname=get.translation(derivation[i]);
							var derivationtranslationinfo=get.skillInfoTranslation(derivation[i]);
							if((lib.config.show_skillnamepinyin=='showPinyin2'||lib.config.show_skillnamepinyin=='showCodeIdentifier2')&&derivationname.length<=5&&derivation[i].indexOf('_faq')==-1&&!lib.notShowSkillNamePinyin.contains(derivation[i])){
								var derivationpinyin=lib.config.show_skillnamepinyin=='showCodeIdentifier2'?derivation[i]:get.pinyin(derivationname);
								// intro2.innerHTML+='<br><br><span style="font-weight:bold;margin-right:5px">'+derivationname+'</span>'+'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+derivationpinyin+']'+'</span>'+'  '+derivationtranslationinfo;
								intro2.innerHTML +=
									'<br><br><div onclick="window.byzy_zlkstysjnpy(\'' + playername + '\', \'' + derivation[i] + '\')">' +
									'<span style="font-weight:bold;margin-right:5px">'+derivationname+'</span>'+
									'</div>' +
									'<div onclick="window.byzy_zlkdjckjndm(\'' + derivation[i] + '\')">' +
									'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+derivationpinyin+']'+'</span>'+
									'</div>' +
									' ' + derivationtranslationinfo;
							}else{
								// intro2.innerHTML+='<br><br><span style="font-weight:bold;margin-right:5px">'+derivationname+'</span>'+derivationtranslationinfo;
								intro2.innerHTML+=
									'<br><br><div onclick="window.byzy_zlkstysjnpy(\'' + playername + '\', \'' + derivation[i] + '\')">' +
									'<span style="font-weight:bold;margin-right:5px">'+derivationname+'</span>'+
									'</div>' +
									derivationtranslationinfo;
							}
						}
					}
					if(info.alter){
						intro2.innerHTML+='<br><br><div class="hrefnode skillversion"></div>';
						var skillversionnode=intro2.querySelector('.hrefnode.skillversion');
						if(lib.config.vintageSkills.contains(skill)){
							skillversionnode.innerHTML='切换至新版';
						}
						else{
							skillversionnode.innerHTML='切换至旧版';
						}
						skillversionnode.listen(function(){
							if(lib.config.vintageSkills.contains(skill)){
								lib.config.vintageSkills.remove(skill);
								lib.translate[skill+'_info']=lib.translate[skill+'_info_alter'];
							}
							else{
								lib.config.vintageSkills.push(skill);
								lib.translate[skill+'_info']=lib.translate[skill+'_info_origin'];
							}
							game.saveConfig('vintageSkills',lib.config.vintageSkills);
							clickSkill.call(skillnode,'init');
						});
					}
					
					// 暂时先用旧版
					if(lib.config.background_speak&&e!=='init'){
						var audioname=this.link;
						if(info.audioname2&&info.audioname2[playername]){
							audioname=info.audioname2[playername];
							info=lib.skill[audioname];
						}
						var audioinfo=info.audio;
						var that=this;
						var getIndex=function(i){
							if(typeof that.audioindex!='number'){
								that.audioindex=i;
							}
							that.audioindex++;
							if(that.audioindex>i){
								that.audioindex=1;
							}
							return that.audioindex;
						};
						if(typeof audioinfo=='string'){
							if(audioinfo.indexOf('ext:')==0){
								audioinfo=audioinfo.split(':');
								if(audioinfo.length==3){
									if(audioinfo[2]=='true'){
										game.playAudio('..','extension',audioinfo[1],audioname);
									}
									else{
										audioinfo[2]=parseInt(audioinfo[2]);
										if(audioinfo[2]){
											game.playAudio('..','extension',audioinfo[1],audioname+getIndex(audioinfo[2]));
										}
									}
								}
								return;
							}
							else{
								audioname=audioinfo;
								if(lib.skill[audioinfo]){
									audioinfo=lib.skill[audioinfo].audio;
								}
							}
						}
						else if(Array.isArray(audioinfo)){
							if (audioinfo.length === 2 && typeof audioinfo[0] === "string" && typeof audioinfo[1] === "number") {
								audioname=audioinfo[0];
								audioinfo=audioinfo[1];
							}
						}
						if(typeof audioinfo=='number'){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							// 临时修复tempname标签武将配音播放错误
							if(Array.isArray(info.audioname)&&!info.audioname.contains(playername)&&lib.character[playername]&&lib.character[playername][4].some(tag=>tag.startsWith('tempname'))) audioname=audioname+'_'+info.audioname;
							game.playAudio('skill',audioname+getIndex(audioinfo));
						}
						else if(typeof audioinfo=="object"&&"type" in audioinfo&&audioinfo.type=="direct"&&"files" in audioinfo){
							let audioFiles=audioinfo.files;
							if(typeof audioFiles=="object"){
								if(!Array.isArray(audioFiles)&&playername&&playername in audioFiles)audioFiles=audioFiles[playername];
								if(Array.isArray(audioFiles)){
									const length=audioFiles.length;
									game.playAudio(audioFiles[getIndex(length)-1]);
								}
							}
						}
						else if(audioinfo){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							game.playAudio('skill',audioname);
						}
						else if(true&&info.audio!==false){
							if(Array.isArray(info.audioname)&&info.audioname.contains(playername)) audioname=audioname+'_'+playername;
							game.playSkillAudio(audioname,getIndex(2));
						}
					}
					/*
					if (lib.config.background_speak && e !== "init") {
						let audio,
							skillnode = this;
						const playedAudios = [];
						(function play() {
							if (!skillnode.audioList || !skillnode.audioList.length) {
								skillnode.audioList = game.parseSkillAudio(skillnode.link, playername);
								if (
									!skillnode.audioList.length ||
									skillnode.audioList.length == playedAudios.length
								)
									return;
							}
							audio = skillnode.audioList.shift();
							playedAudios.push(audio);
							game.playAudio(audio, play);
						})();
					}
					*/
				}
			}
			
			var initskill=false;
			for(var i=0;i<list.length;i++){
				if(!get.info(list[i])||get.info(list[i]).nopop) continue;
				if(!lib.translate[list[i]]||!lib.translate[list[i]+'_info']) continue;
				var skilltrans=get.translation(list[i]);
				if(skilltrans.startsWith('&nbsp;')){
					skilltrans=skilltrans.slice(6);
				}
				var current=ui.create.div('.menubutton.large',skills,clickSkill,skilltrans);
				current.link=list[i];
				current.linkname=name;
				if(!initskill){
					initskill=true;
					clickSkill.call(current,'init');
				}
			}

			uiintro.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.touchpop);
			layer.addEventListener(lib.config.touchscreen?'touchend':'click',clicklayer);
			ui.window.appendChild(layer);
		};
	}
	
	// 下面是资料卡试听阵亡配音的代码（搬运自金庸群侠传扩展，已征得大熊小猫的修改许可），暂不支持扩展阵亡配音试听，要先打开资料卡修改开关才能生效（彩蛋：三国24名将、小游戏整合扩展支持阵亡配音试听）
	// 新增资料卡试听胜利配音（棘手怀念摧毁修改）
	// 修改ui.click.charactercard，此行为与千幻聆音等扩展冲突，请关闭本功能（新增是否开启千幻聆音扩展的判断，避免冲突弹窗）
	// 咸鱼大佬的资料页阵亡配音代码，不会被武将作为技能获得，开始游戏后依然能看到
	if(config.byzy_zlkxg && (config.byzy_zwpy||config.byzy_slpy) && !(lib.config.extensions && lib.config.extensions.contains('千幻聆音') && lib.config['extension_千幻聆音_enable'])) {
		setTimeout(function(){
			// 闭包
			// 旧版，改本体game.js函数playAudio:function(){
			// /*
			var byzyOrigin_playAudio=game.playAudio;
			game.playAudio=function(){
				if(arguments[0]=='skill'&&typeof arguments[1]=="string"){
					var name2=arguments[1];
					if(name2.indexOf('sanguomingjiang_die_audio:')==0){
						var playername=name2.split(':')[1];
						
						// 资料卡查看双形态原画
						// 临时修复
						if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
							var audioName;
							for (var i = 0; i < game.players.length; i++) {
								if(game.players[i].name2==playername) {
									audioName = game.players[i].skin.name2;
									break;
								}
								if(game.players[i].name==playername) {
									audioName = game.players[i].skin.name;
									break;
								}
							}
							for (var i = 0; i < game.dead.length; i++) {
								if(game.dead[i].name2==playername) {
									audioName = game.dead[i].skin.name2;
									break;
								}
								if(game.dead[i].name==playername) {
									audioName = game.dead[i].skin.name;
									break;
								}
							}
							
							// 手杀曹髦等武将处理
							if(lib.characterSubstitute[playername] && lib.characterSubstitute[playername].find((i) => i[0] == audioName) && (lib.characterSubstitute[playername].find((i) => i[0] == audioName))[1][0]) {
								var tag0=(lib.characterSubstitute[playername].find((i) => i[0] == audioName))[1][0];
								var list0=tag0.split(':').slice(1);
								// 暂仅支持单条阵亡配音
								if(list0.length>1){
									
								} else audioName=list0[0];
							}
							
							if(!audioName) audioName = playername;
						}
						
						if(lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].contains('sanguomingjiang_die_audio')){
							if(lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].some(tag=>tag.startsWith('die_audio'))){
								var tag=lib.character[playername][4].find(tag=>tag.startsWith('die_audio'));
								var list=tag.split(':').slice(1);
								// 多个阵亡配音按顺序播放
								if(list.length>1){
									// getIndexFun来自下方getIndex
									var that=this;
									var getIndexFun=function(i){
										if (!that.audioindex||_status.uiclickcharactercard) {
											that.audioindex = {}; // 初始化为空对象
										}
										if(typeof that.audioindex[playername]!='number'||_status.uiclickcharactercard){
											_status.uiclickcharactercard=false;
											that.audioindex[playername]=i;
										}
										that.audioindex[playername]++;
										if(that.audioindex[playername]>i){
											that.audioindex[playername]=1;
										}
										return that.audioindex[playername];
									};
									byzyOrigin_playAudio('..','extension','三国24名将','audio',list[getIndexFun(list.length)-1]);
								} else
								byzyOrigin_playAudio('..','extension','三国24名将','audio',list.length?list[0]:playername);
							}else
							byzyOrigin_playAudio('..','extension','三国24名将','audio',playername);
						}else if(lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].contains('xyx_die_audio')){
							if(lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].some(tag=>tag.startsWith('die_audio'))){
								var tag=lib.character[playername][4].find(tag=>tag.startsWith('die_audio'));
								var list=tag.split(':').slice(1);
								// 多个阵亡配音按顺序播放
								if(list.length>1){
									// getIndexFun来自下方getIndex
									var that=this;
									var getIndexFun=function(i){
										if (!that.audioindex||_status.uiclickcharactercard) {
											that.audioindex = {}; // 初始化为空对象
										}
										if(typeof that.audioindex[playername]!='number'||_status.uiclickcharactercard){
											_status.uiclickcharactercard=false;
											that.audioindex[playername]=i;
										}
										that.audioindex[playername]++;
										if(that.audioindex[playername]>i){
											that.audioindex[playername]=1;
										}
										return that.audioindex[playername];
									};
									byzyOrigin_playAudio('..','extension','小游戏整合','audio',list[getIndexFun(list.length)-1]);
								} else
								byzyOrigin_playAudio('..','extension','小游戏整合','audio',list.length?list[0]:playername);
							}else
							byzyOrigin_playAudio('..','extension','小游戏整合','audio',playername);
						// }else if (lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].contains('die_audio')){
							// byzyOrigin_playAudio('die',playername);
						// 临时修复die_audio标签武将配音播放错误
						}else if(lib.character[playername]&&lib.character[playername][4]&&lib.character[playername][4].some(tag=>tag.startsWith('die_audio'))){
							var tag=lib.character[playername][4].find(tag=>tag.startsWith('die_audio'));
							var list=tag.split(':').slice(1);
							// 多个阵亡配音按顺序播放
							if(list.length>1){
								// getIndexFun来自下方getIndex
								var that=this;
								var getIndexFun=function(i){
									if (!that.audioindex||_status.uiclickcharactercard) {
										that.audioindex = {}; // 初始化为空对象
									}
									if(typeof that.audioindex[playername]!='number'||_status.uiclickcharactercard){
										_status.uiclickcharactercard=false;
										that.audioindex[playername]=i;
									}
									that.audioindex[playername]++;
									if(that.audioindex[playername]>i){
										that.audioindex[playername]=1;
									}
									return that.audioindex[playername];
								};
								byzyOrigin_playAudio('die',list[getIndexFun(list.length)-1]);
							} else
							byzyOrigin_playAudio('die',list.length?list[0]:playername);
						}else{
							// 资料卡查看双形态原画
							if(lib.config['extension_搬运自用_byzy_zlkcksxtyh'] != false) {
								byzyOrigin_playAudio('die',audioName || playername,function() {
									byzyOrigin_playAudio('die',playername.slice(playername.indexOf('_')+1));
								});
							}else{
								byzyOrigin_playAudio('die',playername,function() {
									byzyOrigin_playAudio('die',playername.slice(playername.indexOf('_')+1));
								});
							}
						}
						return;
					}
				}
				byzyOrigin_playAudio.apply(this,arguments);
			};
			// */
			
			// 新版，改本体game.js函数trySkillAudio:function(skill,player,directaudio){
			/*
			var byzyOrigin_trySkillAudio=game.trySkillAudio;
			game.trySkillAudio=function(skill,player,directaudio){
				if(get.translation(skill)=='阵亡'){
					// 改本体game.js函数die:function(){中if(lib.config.background_speak){
					if(lib.character[player]&&lib.character[player][4]&&lib.character[player][4].contains('sanguomingjiang_die_audio')){
						game.playAudio('..','extension','三国24名将','audio',player);
					}
					else if(lib.character[player]&&lib.character[player][4]&&lib.character[player][4].contains('xyx_die_audio')){
						game.playAudio('..','extension','小游戏整合','audio',player);
					}
					else if(lib.character[player]&&lib.character[player][4]&&lib.character[player][4].some(tag=>/^die:.+$/.test(tag))){
						var tag=lib.character[player][4].find(tag=>/^die:.+$/.test(tag));
						var reg=new RegExp("^ext:(.+)?/");
						var match=tag.match(/^die:(.+)$/);
						if(match){
							var path=match[1];
							if(reg.test(path)) path=path.replace(reg,(_o,p)=>`../extension/${p}/`);
							game.playAudio(path);
						}
					}
					else if(lib.character[player]&&lib.character[player][4]&&lib.character[player][4].some(tag=>tag.startsWith('die_audio'))){
						var tag=lib.character[player][4].find(tag=>tag.startsWith('die_audio'));
						var list=tag.split(':').slice(1);
						game.playAudio('die',list.length?list[0]:player);
					}
					else{
						game.playAudio('die',player,function(){
							game.playAudio('die',player.slice(player.indexOf('_')+1));
						});
					}
				}
				// 调用原函数
				byzyOrigin_trySkillAudio.apply(this,arguments);
			};
			*/
			
			var byzyOrigin_charactercard=ui.click.charactercard;
			ui.click.charactercard=function(name,sourcenode,noedit,resume,avatar){
				if(typeof name=='string'&&!lib.character[name]){
					var result=get.character(name);
					if(result){
						if (!result[4]){
							result[4]=[];
						};
						lib.character[name]=result;
					}
				}
				if(config.byzy_zwpy){
					// 阵亡文本
					lib.skill["byzyzhenwangpeiyin"]={};
					lib.skill["byzyzhenwangpeiyin"]["audio"]="sanguomingjiang_die_audio:"+name;
					// var strinfo='台词文本见上方';
					
					// 新增判断有无台词文本的功能
					var strinfo;
					let dieAudios = [];
					if (lib.character[name] && lib.character[name][4] && lib.character[name][4].some(tag => tag.startsWith('die_audio'))) {
						var tag = lib.character[name][4].find(tag => tag.startsWith('die_audio'));
						dieAudios = tag.split(':').slice(1);
					}
					if(dieAudios && dieAudios.length > 0){
						let hasTranslate = false;
						dieAudios.forEach(item => {
							let key;
							if(item.startsWith("ext:")){
								key = item.slice(4).split("/")[1];
							}
							else {
								key = item;
							}
							if(lib.translate[`#${key}:die`]) hasTranslate = true;
						});
						if(hasTranslate) {
							strinfo='台词文本见上方';
						} else strinfo='暂无台词文本';
					} else {
						if(lib.translate[`#${name}:die`]) {
							strinfo='台词文本见上方';
						} else strinfo='暂无台词文本';
					}
					
					// 不着色
					var diestr="阵亡";
					// 着色
					// var diestr="<font style='text-shadow:black 0 0 3px; color:#f8ab05'>阵亡</font>";
					
					lib.translate["byzyzhenwangpeiyin"]=diestr;
					
					// 显示拼音（注解）
					// if(lib.notShowSkillNamePinyin.contains("byzyzhenwangpeiyin")) lib.notShowSkillNamePinyin.remove("byzyzhenwangpeiyin");
					// 不显示拼音（注解）
					// if(!lib.notShowSkillNamePinyin.contains("byzyzhenwangpeiyin")) lib.notShowSkillNamePinyin.push("byzyzhenwangpeiyin");
					
					lib.translate["byzyzhenwangpeiyin_info"]=strinfo;
				}
				if(config.byzy_slpy){
					// 胜利文本
					lib.skill["byzyshenglipeiyin"]={};
					lib.skill["byzyshenglipeiyin"]["audio"]="sanguomingjiang_win_audio:"+name;
					var strinfo_1='暂无台词文本';
					
					// 不着色
					var winstr="胜利";
					// 着色
					// var winstr="<font style='text-shadow:black 0 0 3px; color:#f8ab05'>胜利</font>";
					
					lib.translate["byzyshenglipeiyin"]=winstr;
					
					// 显示拼音（注解）
					// if(lib.notShowSkillNamePinyin.contains("byzyshenglipeiyin")) lib.notShowSkillNamePinyin.remove("byzyshenglipeiyin");
					// 不显示拼音（注解）
					// if(!lib.notShowSkillNamePinyin.contains("byzyshenglipeiyin")) lib.notShowSkillNamePinyin.push("byzyshenglipeiyin");
					
					lib.translate["byzyshenglipeiyin_info"]=strinfo_1;
				}
				var skills=lib.character[name][3];
				var skills2=skills.slice(0);
				// 阵亡按钮
				if(config.byzy_zwpy) skills2.push("byzyzhenwangpeiyin");
				// 胜利按钮
				if(config.byzy_slpy) skills2.push("byzyshenglipeiyin");
				lib.character[name][3]=skills2;
				byzyOrigin_charactercard.apply(this,arguments);
				lib.character[name][3]=skills;
			};
			
		},1);
	}
	
	// 控制台-功能加强版，搬运自蜀汉中兴扩展，已征得诗笺的修改许可
	// 魔改自本体game.js函数dialog:function(){、控制台代码
	// 注：暂未适配新本体代码
	var dialogx=function(){
		var i;
		var hidden=false;
		var notouchscroll=false;
		var forcebutton=false;
		var noforcebutton=false;
		var dialog=ui.create.div('.dialog');
		dialog.contentContainer=ui.create.div('.content-container',dialog);
		dialog.content=ui.create.div('.content',dialog.contentContainer);
		dialog.bar1=ui.create.div('.bar.top',dialog);
		dialog.bar2=ui.create.div('.bar.bottom',dialog);
		dialog.buttons=[];
		
		// for(i in lib.element.dialog){
			// dialog[i]=lib.element.dialog[i];
		// }
		// 适配新版本体
		Object.setPrototypeOf(dialog,lib.element.Dialog.prototype);
		
		dialog.open=function(){
			if(this.noopen) return;
			var translate;
			// if(lib.config.remember_dialog&&lib.config.dialog_transform&&!this.classList.contains('fixed')){
				// translate=lib.config.dialog_transform;
				// this._dragtransform=translate;
				// this.style.transform='translate('+translate[0]+'px,'+translate[1]+'px) scale(0.8)';
			// }
			// else{
				this.style.transform='scale(0.8)';
			// }
			this.style.transitionProperty='opacity,transform';
			this.style.opacity=0;
			ui.arena.appendChild(this);
			ui.update();
			ui.refresh(this);
			// if(lib.config.remember_dialog&&lib.config.dialog_transform&&!this.classList.contains('fixed')){
				// this.style.transform='translate('+translate[0]+'px,'+translate[1]+'px) scale(1)';
			// }
			// else{
				this.style.transform='scale(1)';
			// }
			this.style.opacity=1;
			var that=this;
			setTimeout(function(){
				that.style.transitionProperty='';
			},500);
			return this;
		};
		dialog.close=function(){
			this.delete();
			if(ui.dialogs.length>0){
				ui.update();
			}
			return this;
		};
		for(i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='boolean') dialog.static=arguments[i];
			else if(arguments[i]=='hidden') hidden=true;
			else if(arguments[i]=='notouchscroll') notouchscroll=true;
			else if(arguments[i]=='forcebutton') forcebutton=true;
			else if(arguments[i]=='noforcebutton') noforcebutton=true;
			else dialog.add(arguments[i]);
		}
		if(!hidden){
			dialog.open();
		}
		if(!lib.config.touchscreen) dialog.contentContainer.onscroll=ui.update;
		if(!notouchscroll){
			dialog.contentContainer.ontouchstart=ui.click.dialogtouchStart;
			dialog.contentContainer.ontouchmove = ui.click.touchScroll;
			dialog.contentContainer.style.WebkitOverflowScrolling='touch';
			dialog.ontouchstart=ui.click.dragtouchdialog;
		}
		if(noforcebutton){
			dialog.noforcebutton=true;
		}
		else if(forcebutton){
			dialog.forcebutton=true;
			dialog.classList.add('forcebutton');
		}
		return dialog;
	};
	window.consoleopen=function(){
		if(_status.shoushaui_console==true) return false;
		var dialog=dialogx('控制台（下滑操作）');
		// dialog.bar1.innerHTML='控制台'
		dialog.style['z-index']=10;
		// dialog.style.color="#FFFFFF";
		// dialog.style.backgroundImage='url(\"'+lib.assetURL+'extension/手杀ui/switch_dialog.png\")';
		// dialog.style.backgroundSize="100% 100%";
		dialog.style.background='rgba(0,0,0,0.2)';
		dialog.style['box-shadow']='rgba(0, 0, 0, 0.3) 0 0 0 1px';
		dialog.style['border-radius']='6px';
		var currentrow1=null;
		// var row1=ui.create.div('.menu-cheat',dialog.content);
		var row1=[]
		// var close=ui.create.div('.close-button',dialog);
		var close=ui.create.div('.menubutton.round.highlight','关');
		
		var cheatButton=ui.create.div('.menubutton.round.highlight','执');
		var norow2=function(){
			var node=currentrow1;
			if(!node) return false;
			var node2=document.getElementById('shoushaui_console_select2');
			if(!node2||node2.value!="none") return true;
			return node.innerHTML=='横置'||node.innerHTML=='强制横置'||node.innerHTML=='解除横置'||node.innerHTML=='翻面'||node.innerHTML=='强制翻面'||node.innerHTML=='解除翻面'||node.innerHTML=='复活魔杖'||node.innerHTML=='死亡笔记'||node.innerHTML=='清空技能'||node.innerHTML=='自曝身份'||node.innerHTML=='显示身份'||node.innerHTML=='重新选将'||node.innerHTML=='换人';
		};
		var noselect=function(){
			var node=document.getElementById('shoushaui_console_select');
			if(!node||node.value=="none") return true;
			return false;
		}
		var noselect2=function(){
			var node=document.getElementById('shoushaui_console_select2');
			if(!node||node.value=="none") return true;
			return false;
		}
		var checkCheat=function(){
			if(norow2()||select2.value!='none'){
				// for(var i=0;i<row2.childElementCount;i++){
				for(var i=0;i<row2.length;i++){
					row2[i].classList.remove('selectedx');
					row2[i].classList.add('unselectable');
				}
			}
			else{
				// for(var i=0;i<row2.childElementCount;i++){
				for(var i=0;i<row2.length;i++){
					row2[i].classList.remove('unselectable');
				}
			}
			if(currentrow1&&currentrow1.innerHTML=='复活魔杖'){
				for(var i=0;i<row3.childNodes.length;i++){
					if(row3.childNodes[i].dead){
						row3.childNodes[i].style.display='';
					}
					else{
						row3.childNodes[i].style.display='none';
						row3.childNodes[i].classList.remove('glow');
					}
					row3.childNodes[i].classList.remove('unselectable');
				}
			}
			else{
				for(var i=0;i<row3.childElementCount;i++){
					if(currentrow1&&currentrow1.innerHTML=='换人'&&row3.childNodes[i].link==game.me){
						row3.childNodes[i].classList.add('unselectable');
					}
					else{
						row3.childNodes[i].classList.remove('unselectable');
					}
					if(!row3.childNodes[i].dead){
						row3.childNodes[i].style.display='';
					}
					else{
						row3.childNodes[i].style.display='none';
						row3.childNodes[i].classList.remove('glow');
					}
				}
			}
			if( (currentrow1 || select.value!='none' || select2.value!='none' )&& (currentrow2||norow2()||select2.value!='none')&&(row3.querySelector('.glow') || row4.querySelector('.glow')) ){
				// cheatButton.classList.add('glowing');
				cheatButton.style['box-shadow']='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 133, 255, 0.8) 0 0 10px, rgba(0, 133, 255, 0.8) 0 0 10px, rgba(0, 133, 255, 0.8) 0 0 15px';
				return true;
			}
			else{
				// cheatButton.classList.remove('glowing');
				cheatButton.style['box-shadow']='';
				return false;
			}
		}
		cheatButton.listen(function(){
			if(checkCheat()){
				var num=0;
				if(currentrow2){
					switch(currentrow2.innerHTML){
						case '一':num=1;break;
						case '二':num=2;break;
						case '三':num=3;break;
						case '四':num=4;break;
						case '五':num=5;break;
						case '六':num=6;break;
						case '七':num=7;break;
						case '八':num=8;break;
						case '九':num=9;break;
						case '十':num=10;break;
						case '十一':num=11;break;
						case '十二':num=12;break;
						case '十三':num=13;break;
						case '十四':num=14;break;
						case '十五':num=15;break;
						case '二十':num=20;break;
						case '二十五':num=25;break;
						case '三十':num=30;break;
						case '三十五':num=35;break;
						case '四十':num=40;break;
						case '四十五':num=45;break;
						case '五十':num=50;break;
						case '0':num=0;break;
						case '999':num=999;break;
					}
				}
				var targets=[];
				var buttons=row3.querySelectorAll('.glow');
				for(var i=0;i<buttons.length;i++){
					targets.push(buttons[i].link);
				}
				var buttons=row4.querySelectorAll('.glow');
				for(var i=0;i<buttons.length;i++){
					targets.push(buttons[i].link);
				}
				// alert('targets'+targets.length)
				while(targets.length){
					var target=targets.shift();
					var e= currentrow1!=null ? currentrow1.innerHTML : select.value;
					if(e=="none"&&select2.value!="none") e=select2.value;
					// alert(e)
					switch( e ){
						case '无属性伤害':target.damage(num,'nosource');break;
						case '火属性伤害':target.damage(num,'fire','nosource');break;
						case '雷属性伤害':target.damage(num,'thunder','nosource');break;
						case '冰属性伤害':target.damage(num,'ice','nosource');break;
						case '回复体力':target.recover(num);break;
						case '失去体力':target.loseHp(num);break;
						case '获得护甲':target.changeHujia(num);break;
						case '失去护甲':target.changeHujia(-num);break;
						case '摸X张牌':target.draw(num);break;
						case '手牌摸至X':target.drawTo(num);break;
						case '弃X张牌':target.discard(target.getCards('he').randomGets(num));break;
						case '手牌弃至X':{
							var num0=num;
							var num1=num0-target.countCards('h');
							target.chooseToDiscard('h',true,-num1);
							break;
						}
						case '弃X张手牌':target.discard(target.getCards('h').randomGets(num));break;
						case '弃X张装备区的牌':target.discard(target.getCards('e').randomGets(num));break;
						case '弃X张判定区的牌':target.discard(target.getCards('j').randomGets(num));break;
						case '横置':target.link();break;
						case '强制横置':target.classList.add('linked2');break;
						case '解除横置':target.classList.remove('linked2');break;
						case '翻面':target.turnOver();break;
						case '强制翻面':target.classList.add('turnedover');break;
						case '解除翻面':target.classList.remove('turnedover');break;
						case '复活魔杖':target.revive(target.maxHp);break;
						case '死亡笔记':target.die();break;
						case '清空技能':target.clearSkills();break;
						case '自曝身份':{
							// 仅适用于身份模式，不影响AI
							if (lib.config.mode=='identity') {
								// 如果想影响AI，请恢复下一行的注释代码
								// target.ai.shown=1;
								if(target.special_identity){
									target.say(get.translation(target.special_identity+'_bg'));
								} else target.say(get.translation(target.identity));
							}
							break;
						}
						case '显示身份':{
							// 身份模式（不影响AI），魔改自本体identity.js函数showIdentity:function(me){
							if (lib.config.mode=='identity') {
								// 如果想影响AI，请恢复下一行的注释代码
								// target.ai.shown=1;
								if(target.special_identity){
									target.node.identity.firstChild.innerHTML=get.translation(target.special_identity+'_bg');
								} else target.setIdentity(target.identity);
							}
							// 国战模式，魔改自本体guozhan.js函数showIdentity:function(started){
							if (lib.config.mode=='guozhan') {
								target.showCharacter(2,false);
							}
							break;
						}
						case '重新选将':{
							// 非托管状态生效
							if (_status.auto == false) {
								game.byzy_choosePlayer.chooseCharacter(target);
							}
							break;
						}
						case '换人':{
							if(_status.event.isMine()){
								if(!ui.auto.classList.contains('hidden')){
									setTimeout(function(){
										ui.click.auto();
										setTimeout(function(){
											ui.click.auto();
											game.swapPlayer(target);
										},500);
									});
								}
							}
							else{
								game.swapPlayer(target);
							}
							break;
						}
						
						case 'defineHp':{
							target.hp=num;
							target.update();
							break;
						}
						case 'defineMaxHp':{
							target.maxHp=num;
							target.update();
							break;
						}
						case 'gainMaxHp':target.gainMaxHp(num);break;
						case 'loseMaxHp':target.loseMaxHp(num);break;
						case 'drawfrombottom':target.draw(num,'bottom');break;
						case 'discardhj':target.discard(target.getCards('hj').randomGets(num));break;
						case 'discardej':target.discard(target.getCards('ej').randomGets(num));break;
						case 'discardhej':target.discard(target.getCards('hej').randomGets(num));break;
						case 'gainCardbasic':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.type(card)=='basic'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardtrick':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.type(card, "trick")=='trick'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnormaltrick':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.type(card)=='trick'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCarddelay':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.type(card)=='delay'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.type(card)=='equip'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip1':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip2':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip2'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						// 坐骑：equip3防御坐骑、equip4攻击坐骑、equip6特殊装备（如【六龙骖驾】、【长安大舰】等）
						case 'gainCardequip346':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return ['equip3','equip4','equip6'].includes(get.subtype(card))&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip3':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip3'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip4':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip4'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip5':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip5'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardequip6':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip6'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardred':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.color(card)=='red'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardblack':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return get.color(card)=='black'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardheart':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.suit=='heart'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCarddiamond':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.suit=='diamond'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardspade':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.suit=='spade'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardclub':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.suit=='club'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardfire':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.nature=='fire'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardthunder':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.nature=='thunder'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardice':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.nature=='ice'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardstab':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.nature=='stab'&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber1':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==1&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber2':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==2&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber3':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==3&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber4':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==4&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber5':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==5&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber6':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==6&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber7':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==7&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber8':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==8&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber9':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==9&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber10':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==10&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber11':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==11&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber12':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==12&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'gainCardnumber13':{
							var cards=[];
							for(var i=0;i<num;i++){
								var card2=get.cardPile(function(card){
									return card.number==13&&(!cards.includes(card));
								});
								cards.push(card2);
							}
							target.gain(cards);
							break;
						}
						case 'chongzhuh':target.recast(target.getCards('h').randomGets(num));break;
						case 'chongzhue':target.recast(target.getCards('e').randomGets(num));break;
						case 'chongzhuj':target.recast(target.getCards('j').randomGets(num));break;
						case 'chongzhuhe':target.recast(target.getCards('he').randomGets(num));break;
						case 'chongzhuhj':target.recast(target.getCards('hj').randomGets(num));break;
						case 'chongzhuej':target.recast(target.getCards('ej').randomGets(num));break;
						case 'chongzhuhej':target.recast(target.getCards('hej').randomGets(num));break;
						
						case 'playerout':target.out();break;
						case 'removeplayer':[].remove.call(game.players,target);break;
						case 'addplayer':[].add.call(game.players,target);break;
						case 'playerinsertphase':target.insertPhase();break;
						case 'showHandcards':target.showHandcards();break;
						case 'moveCard':target.moveCard();break;
						case 'feichupdq':target.disableJudge();break;
						case 'huifupdq':target.enableJudge();break;
						case 'feichuwuqi':target.disableEquip(1);break;
						case 'feichufangju':target.disableEquip(2);break;
						case 'feichufwzj':target.disableEquip(3);break;
						case 'feichugjzj':target.disableEquip(4);break;
						case 'feichubaowu':target.disableEquip(5);break;
						case 'huifuwuqi':target.enableEquip(1);break;
						case 'huifufangju':target.enableEquip(2);break;
						case 'huifufwzj':target.enableEquip(3);break;
						case 'huifugjzj':target.enableEquip(4);break;
						case 'huifubaowu':target.enableEquip(5);break;
						case 'kuozhanwuqi':target.expandEquip(1);break;
						case 'kuozhanfangju':target.expandEquip(2);break;
						case 'kuozhanfwzj':target.expandEquip(3);break;
						case 'kuozhangjzj':target.expandEquip(4);break;
						case 'kuozhanbaowu':target.expandEquip(5);break;
						case 'shiyongshouqika':game.byzyusesqk(target);break;
					}
				}
				// if(ui.coin){
					// game.changeCoin(-20);
				// }
			}
			index();
		});
		
		var clickrow1=function(){
			if(this.classList.contains('unselectable')) return;
			if(currentrow1==this){
				this.classList.remove('selectedx');
				currentrow1=null;
			}
			else{
				this.classList.add('selectedx');
				if(currentrow1){
					currentrow1.classList.remove('selectedx');
				}
				currentrow1=this;
				if(this.innerHTML=='换人'){
					for(var i=0;i<row3.childNodes.length;i++){
						row3.childNodes[i].classList.remove('glow');
					}
				}
			}
			checkCheat();
		};
		var nodedamage=ui.create.div('.menubutton','无属性伤害',clickrow1);
		var nodedamagefire=ui.create.div('.menubutton','火属性伤害',clickrow1);
		var nodedamagethunder=ui.create.div('.menubutton','雷属性伤害',clickrow1);
		var nodedamageice=ui.create.div('.menubutton','冰属性伤害',clickrow1);
		var noderecover=ui.create.div('.menubutton','回复体力',clickrow1);
		var nodelosehp=ui.create.div('.menubutton','失去体力',clickrow1);
		var nodegainhujia=ui.create.div('.menubutton','获得护甲',clickrow1);
		var nodelosehujia=ui.create.div('.menubutton','失去护甲',clickrow1);
		var nodedraw=ui.create.div('.menubutton','摸X张牌',clickrow1);
		var nodedrawto=ui.create.div('.menubutton','手牌摸至X',clickrow1);
		var nodediscard=ui.create.div('.menubutton','弃X张牌',clickrow1);
		var nodediscardto=ui.create.div('.menubutton','手牌弃至X',clickrow1);
		var nodediscardh=ui.create.div('.menubutton','弃X张手牌',clickrow1);
		var nodediscarde=ui.create.div('.menubutton','弃X张装备区的牌',clickrow1);
		var nodediscardj=ui.create.div('.menubutton','弃X张判定区的牌',clickrow1);
		var nodelink=ui.create.div('.menubutton','横置',clickrow1);
		var nodelinkqz=ui.create.div('.menubutton','强制横置',clickrow1);
		var nodelinkjc=ui.create.div('.menubutton','解除横置',clickrow1);
		var nodeturnover=ui.create.div('.menubutton','翻面',clickrow1);
		var nodeturnoverqz=ui.create.div('.menubutton','强制翻面',clickrow1);
		var nodeturnoverjc=ui.create.div('.menubutton','解除翻面',clickrow1);
		var noderevive=ui.create.div('.menubutton','复活魔杖',clickrow1);
		var nodedie=ui.create.div('.menubutton','死亡笔记',clickrow1);
		var nodeclearskill=ui.create.div('.menubutton','清空技能',clickrow1);
		var nodezibaoshenfen=ui.create.div('.menubutton','自曝身份',clickrow1);
		var nodexianshishenfen=ui.create.div('.menubutton','显示身份',clickrow1);
		var nodechongxinxuanjiang=ui.create.div('.menubutton','重新选将',clickrow1);
		var nodereplace=ui.create.div('.menubutton','换人',clickrow1);
		
		dialog.add(" ");
		dialog.add(nodedamage);
		dialog.add(nodedamagefire);
		dialog.add(nodedamagethunder);
		dialog.add(nodedamageice);
		dialog.add(noderecover);
		dialog.add(nodelosehp);
		dialog.add(nodegainhujia);
		dialog.add(nodelosehujia);
		dialog.add(nodedraw);
		dialog.add(nodedrawto);
		dialog.add(nodediscard);
		dialog.add(nodediscardto);
		dialog.add(nodediscardh);
		dialog.add(nodediscarde);
		dialog.add(nodediscardj);
		dialog.add(nodelink);
		dialog.add(nodelinkqz);
		dialog.add(nodelinkjc);
		dialog.add(nodeturnover);
		dialog.add(nodeturnoverqz);
		dialog.add(nodeturnoverjc);
		dialog.add(noderevive);
		dialog.add(nodedie);
		dialog.add(nodeclearskill);
		dialog.add(nodezibaoshenfen);
		dialog.add(nodexianshishenfen);
		dialog.add(nodechongxinxuanjiang);
		dialog.add(nodereplace);
		
		row1.add(nodedamage);
		row1.add(nodedamagefire);
		row1.add(nodedamagethunder);
		row1.add(nodedamageice);
		row1.add(noderecover);
		row1.add(nodelosehp);
		row1.add(nodegainhujia);
		row1.add(nodelosehujia);
		row1.add(nodedraw);
		row1.add(nodedrawto);
		row1.add(nodediscard);
		row1.add(nodediscardto);
		row1.add(nodediscardh);
		row1.add(nodediscarde);
		row1.add(nodediscardj);
		row1.add(nodelink);
		row1.add(nodelinkqz);
		row1.add(nodelinkjc);
		row1.add(nodeturnover);
		row1.add(nodeturnoverqz);
		row1.add(nodeturnoverjc);
		row1.add(noderevive);
		row1.add(nodedie);
		row1.add(nodeclearskill);
		row1.add(nodezibaoshenfen);
		row1.add(nodexianshishenfen);
		row1.add(nodechongxinxuanjiang);
		row1.add(nodereplace);
		dialog.add(" ");
		if(lib.config.mode!='identity'){
			nodezibaoshenfen.classList.add('unselectable');
		}
		if(lib.config.mode!='identity'&&lib.config.mode!='guozhan'){
			nodexianshishenfen.classList.add('unselectable');
		}
		if(lib.config.mode!='identity'&&lib.config.mode!='guozhan'&&lib.config.mode!='doudizhu'){
			nodechongxinxuanjiang.classList.add('unselectable');
			nodereplace.classList.add('unselectable');
		}
		var currentrow2=null;
		// var row2=ui.create.div('.menu-cheat',dialog.content);
		var row2=[]
		var clickrow2=function(){
			if(this.classList.contains('unselectable')) return;
			if(currentrow2==this){
				this.classList.remove('selectedx');
				currentrow2=null;
			}
			else{
				this.classList.add('selectedx');
				if(currentrow2){
					currentrow2.classList.remove('selectedx');
				}
				currentrow2=this;
			}
			checkCheat();
		};
		
		var select=document.createElement('select');
		select.onchange=function(e){
			for(var i=0;i<row1.length;i++){
				if(!noselect()||!noselect2()){
					row1[i].classList.add('unselectable');
					row1[i].classList.remove('selectedx');
				}else{
					row1[i].classList.remove('unselectable');
					row1[i].classList.remove('selectedx');
				}
			}
			currentrow1=null;
			var node=document.getElementById('shoushaui_console_select2');
			if(node) node.value="none";
			index();
		};
		select.id='shoushaui_console_select';
		dialog.add("其他选项");
		dialog.content.appendChild(select);
		dialog.add(" ");
		
		var option=document.createElement('option');
		option.text="无";
		option.value="none";
		select.add(option);
		
		option=document.createElement('option');
		option.text="定义体力值";
		option.value="defineHp";
		select.add(option);
		
		option=document.createElement('option');
		option.text="定义体力上限";
		option.value="defineMaxHp";
		select.add(option);
		
		option=document.createElement('option');
		option.text="增加体力上限";
		option.value="gainMaxHp";
		select.add(option);
		
		option=document.createElement('option');
		option.text="减少体力上限";
		option.value="loseMaxHp";
		select.add(option);
		
		option=document.createElement('option');
		option.text="摸X张牌(从牌堆底)";
		option.value="drawfrombottom";
		select.add(option);
		
		option=document.createElement('option');
		option.text="弃X张牌(手牌区、判定区)";
		option.value="discardhj";
		select.add(option);
		
		option=document.createElement('option');
		option.text="弃X张牌(装备区、判定区)";
		option.value="discardej";
		select.add(option);
		
		option=document.createElement('option');
		option.text="弃X张牌(手牌区、装备区、判定区)";
		option.value="discardhej";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得基本牌";
		option.value="gainCardbasic";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得锦囊牌";
		option.value="gainCardtrick";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得普通锦囊牌";
		option.value="gainCardnormaltrick";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得延时锦囊牌";
		option.value="gainCarddelay";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌";
		option.value="gainCardequip";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-武器";
		option.value="gainCardequip1";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-防具";
		option.value="gainCardequip2";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-坐骑";
		option.value="gainCardequip346";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-防御坐骑";
		option.value="gainCardequip3";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-攻击坐骑";
		option.value="gainCardequip4";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-宝物";
		option.value="gainCardequip5";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得装备牌-特殊装备";
		option.value="gainCardequip6";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得红色牌";
		option.value="gainCardred";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得黑色牌";
		option.value="gainCardblack";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得♥花色牌";
		option.value="gainCardheart";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得♦花色牌";
		option.value="gainCarddiamond";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得♠花色牌";
		option.value="gainCardspade";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得♣花色牌";
		option.value="gainCardclub";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得火属性牌";
		option.value="gainCardfire";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得雷属性牌";
		option.value="gainCardthunder";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得冰属性牌";
		option.value="gainCardice";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得刺属性牌";
		option.value="gainCardstab";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得A点数牌";
		option.value="gainCardnumber1";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得2点数牌";
		option.value="gainCardnumber2";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得3点数牌";
		option.value="gainCardnumber3";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得4点数牌";
		option.value="gainCardnumber4";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得5点数牌";
		option.value="gainCardnumber5";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得6点数牌";
		option.value="gainCardnumber6";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得7点数牌";
		option.value="gainCardnumber7";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得8点数牌";
		option.value="gainCardnumber8";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得9点数牌";
		option.value="gainCardnumber9";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得10点数牌";
		option.value="gainCardnumber10";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得J点数牌";
		option.value="gainCardnumber11";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得Q点数牌";
		option.value="gainCardnumber12";
		select.add(option);
		
		option=document.createElement('option');
		option.text="从牌堆&弃牌堆获得K点数牌";
		option.value="gainCardnumber13";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-手牌区的牌";
		option.value="chongzhuh";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-装备区的牌";
		option.value="chongzhue";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-判定区的牌";
		option.value="chongzhuj";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-手牌区、装备区的牌";
		option.value="chongzhuhe";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-手牌区、判定区的牌";
		option.value="chongzhuhj";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-装备区、判定区的牌";
		option.value="chongzhuej";
		select.add(option);
		
		option=document.createElement('option');
		option.text="重铸-手牌区、装备区、判定区的牌";
		option.value="chongzhuhej";
		select.add(option);
		
		var select2=document.createElement('select');
		select2.onchange=function(e){
			for(var i=0;i<row1.length;i++){
				if(!noselect()||!noselect2()){
					row1[i].classList.add('unselectable');
					row1[i].classList.remove('selectedx');
				}else{
					row1[i].classList.remove('unselectable');
					row1[i].classList.remove('selectedx');
				}
			}
			currentrow1=null;
			for(var i=0;i<row2.length;i++){
				row2[i].classList.add('unselectable');
				row2[i].classList.remove('selectedx');
			}
			currentrow2=null;
			
			var node=document.getElementById('shoushaui_console_select');
			if(node) node.value="none";
			
			index();
		};
		select2.id='shoushaui_console_select2';
		// dialog.add("其他选项(不可选择数值)");
		dialog.content.appendChild(select2);
		dialog.add("选择数值");
		
		var option2=document.createElement('option');
		option2.text="无";
		option2.value="none";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="离开游戏";
		option2.value="playerout";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="移出游戏";
		option2.value="removeplayer";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="加入游戏";
		option2.value="addplayer";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="获得一个额外的回合";
		option2.value="playerinsertphase";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="展示手牌";
		option2.value="showHandcards";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="移动场上一张牌(装备区/判定区的牌)";
		option2.value="moveCard";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除判定区";
		option2.value="feichupdq";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复判定区";
		option2.value="huifupdq";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除装备区-武器栏";
		option2.value="feichuwuqi";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除装备区-防具栏";
		option2.value="feichufangju";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除装备区-防御坐骑栏";
		option2.value="feichufwzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除装备区-攻击坐骑栏";
		option2.value="feichugjzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="废除装备区-宝物栏";
		option2.value="feichubaowu";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复装备区-武器栏";
		option2.value="huifuwuqi";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复装备区-防具栏";
		option2.value="huifufangju";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复装备区-防御坐骑栏";
		option2.value="huifufwzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复装备区-攻击坐骑栏";
		option2.value="huifugjzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="恢复装备区-宝物栏";
		option2.value="huifubaowu";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="扩展装备区-武器栏";
		option2.value="kuozhanwuqi";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="扩展装备区-防具栏";
		option2.value="kuozhanfangju";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="扩展装备区-防御坐骑栏";
		option2.value="kuozhanfwzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="扩展装备区-攻击坐骑栏";
		option2.value="kuozhangjzj";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="扩展装备区-宝物栏";
		option2.value="kuozhanbaowu";
		select2.add(option2);
		
		option2=document.createElement('option');
		option2.text="使用手气卡";
		option2.value="shiyongshouqika";
		select2.add(option2);
		
		var nodex1=ui.create.div('.menubutton','一',clickrow2);
		var nodex2=ui.create.div('.menubutton','二',clickrow2);
		var nodex3=ui.create.div('.menubutton','三',clickrow2);
		var nodex4=ui.create.div('.menubutton','四',clickrow2);
		var nodex5=ui.create.div('.menubutton','五',clickrow2);
		
		var nodex6=ui.create.div('.menubutton','六',clickrow2);
		var nodex7=ui.create.div('.menubutton','七',clickrow2);
		var nodex8=ui.create.div('.menubutton','八',clickrow2);
		var nodex9=ui.create.div('.menubutton','九',clickrow2);
		var nodex10=ui.create.div('.menubutton','十',clickrow2);
		
		var nodex11=ui.create.div('.menubutton','十一',clickrow2);
		var nodex12=ui.create.div('.menubutton','十二',clickrow2);
		var nodex13=ui.create.div('.menubutton','十三',clickrow2);
		var nodex14=ui.create.div('.menubutton','十四',clickrow2);
		var nodex15=ui.create.div('.menubutton','十五',clickrow2);
		var nodex16=ui.create.div('.menubutton','二十',clickrow2);
		var nodex17=ui.create.div('.menubutton','二十五',clickrow2);
		var nodex18=ui.create.div('.menubutton','三十',clickrow2);
		var nodex19=ui.create.div('.menubutton','三十五',clickrow2);
		var nodex20=ui.create.div('.menubutton','四十',clickrow2);
		var nodex21=ui.create.div('.menubutton','四十五',clickrow2);
		var nodex22=ui.create.div('.menubutton','五十',clickrow2);
		var nodex23=ui.create.div('.menubutton','0',clickrow2);
		var nodex24=ui.create.div('.menubutton','999',clickrow2);
		for(var i=1;i<25;i++){
			eval('dialog.add(nodex'+i+');row2.add(nodex'+i+');');
		}
		dialog.add("选择游戏内角色");
		
		var row3=ui.create.div('.menu-buttons.leftbutton.commandbutton',dialog.content);
		row3.style.marginTop='3px';
		var clickrow3=function(){
			if(this.classList.contains('unselectable')) return;
			this.classList.toggle('glow');
			if(currentrow1&&currentrow1.innerHTML=='换人'&&this.classList.contains('glow')){
				if(this.link==game.me){
					this.classList.remove('glow');
				}
				for(var i=0;i<row3.childElementCount;i++){
					if(row3.childNodes[i]!=this){
						row3.childNodes[i].classList.remove('glow');
					}
				}
			}
			checkCheat();
		};
		dialog.add("选择游戏外角色");
		var row4=ui.create.div('.menu-buttons.leftbutton.commandbutton',dialog.content);
		row4.style.marginTop='3px';
		var clickrow4=function(){
			if(this.classList.contains('unselectable')) return;
			this.classList.toggle('glow');
			if(currentrow1&&currentrow1.innerHTML=='换人'&&this.classList.contains('glow')){
				if(this.link==game.me){
					this.classList.remove('glow');
				}
				for(var i=0;i<row4.childElementCount;i++){
					if(row4.childNodes[i]!=this){
						row4.childNodes[i].classList.remove('glow');
					}
				}
			}
			checkCheat();
		};
		
		// var index=setInterval(
		var index=function(){
			var list2=[];
			row4.innerHTML='';
			var node=document.getElementsByClassName('player');
			if(node&&node.length>0){
			for(var i=0;i<node.length;i++){
				if( !game.players.contains(node[i])&&!game.dead.contains(node[i])&&(lib.character[node[i].name]||lib.character[node[i].name1])){
					list2.push(node[i]);
				}
			}
			}
			if(list2.length){
				buttons=ui.create.buttons(list2,'player',row4,true);
				for(var i=0;i<buttons.length;i++){
					buttons[i].listen(clickrow4);
				}
				checkCheat();
			}
			var list=[];
			for(var i=0;i<game.players.length;i++){
				if(lib.character[game.players[i].name]||game.players[i].name1){
					list.push(game.players[i]);
				}
			}
			for(var i=0;i<game.dead.length;i++){
				if(lib.character[game.dead[i].name]||game.dead[i].name1){
					list.push(game.dead[i]);
				}
			}
			if(list.length){
				for(var i=0;i<row1.length;i++){
				row1[i].show()
				}
				for(var i=0;i<row2.length;i++){
				row2[i].show()
				}
				row3.innerHTML='';
				var buttons=ui.create.buttons(list,'player',row3,true);
				for(var i=0;i<buttons.length;i++){
					buttons[i].listen(clickrow3);
					if(game.dead.contains(buttons[i].link)){
						buttons[i].dead=true;
					}
				}
				// row3.innerHTML += "<br/>";
				checkCheat();
			}
			else if (!list2.length){
				for(var i=0;i<row1.length;i++){
					row1[i].hide();
				}
				for(var i=0;i<row2.length;i++){
					row2[i].hide();
				}
			}
			
			if(lib.config.mode=='identity'||lib.config.mode=='guozhan'){
				if(!game.phaseNumber||_status.qianlidanji){
					nodereplace.classList.add('unselectable');
				}
				else if(_status.event.isMine()&&ui.auto.classList.contains('hidden')){
					nodereplace.classList.add('unselectable');
				}
				else if(noselect()&&noselect2()){
					nodereplace.classList.remove('unselectable');
				}
			}
			if(game.dead.length==0){
				noderevive.classList.add('unselectable');
			}
			else{
				noderevive.classList.remove('unselectable');
			}
			
			checkCheat();
		// },1200);
		};
		index();
		close.listen(function(){
			dialog.remove();
			_status.shoushaui_console=false;
		});
		_status.shoushaui_console=true;
		
		dialog.add(cheatButton);
		dialog.add(close);
		if (lib.device) {
			// 手机端
			dialog.style.width='514px';
			dialog.style.left='calc(50% - 257px)';
			dialog.style.bottom='calc(23% + 80px)';
			dialog.style.height='289px';
		} else {
			// 电脑端
			dialog.style.width='520px';
			dialog.style.left='calc(50% - 260px)';
			dialog.style.bottom='calc(19% + 80px)';
			dialog.style.height='350px';
		}
		return {
			'dialog':dialog,
		};
	};
	// 加入顶部左侧菜单（参考自特效测试扩展）
	lib.arenaReady.push(function() {
		if (lib.config.extension_搬运自用_byzy_showkongmenu) {
			ui.txcsanmenu = ui.create.system('控', function() {
				setTimeout(function() {
					consoleopen();
				}, 100);
			});
		}
	});
	
	// 加入顶部左侧菜单（参考自特效测试扩展）
	lib.arenaReady.push(function() {
		if (lib.config.extension_搬运自用_byzy_showdaomenu) {
			ui.txcsanmenu = ui.create.system('导', function() {
				setTimeout(function() {
					ui.click.configMenu();
				}, 10);
				setTimeout(function() {
					ui.click.extensionTab('搬运自用');
				}, 850);
			});
		}
	});
	
	// 武将性别显示，延时调用（可根据武将数量自行调整时间，保证全部添加到位）
	if(config.wujiangxingbie){
		// 开启后关闭本体的显示角色性别开关
		game.saveConfig('show_sex',false);
		setTimeout(function(){
			for(var i in lib.characterPack){
				for(var j in lib.characterPack[i]){
					if(lib.characterPack[i][j][0]=="male"){
						if(lib.characterTitle[j]==undefined){
							lib.characterTitle[j]= "<span style=\"color:#00ADE7\">♂</span>";
						} else lib.characterTitle[j]+=" <span style=\"color:#00ADE7\">♂</span>";
					}
					if(lib.characterPack[i][j][0]=="female"){
						if(lib.characterTitle[j]==undefined){
							lib.characterTitle[j]= "<span style=\"color:#E56587\">♀</span>";
						} else lib.characterTitle[j]+=" <span style=\"color:#E56587\">♀</span>";
					}
					if(lib.characterPack[i][j][0]=="double"){
						if(lib.characterTitle[j]==undefined){
							lib.characterTitle[j]= "<span style=\"color:#00ADE7\">♂</span><span style=\"color:#E56587\">♀</span>";
						} else lib.characterTitle[j]+=" <span style=\"color:#00ADE7\">♂</span><span style=\"color:#E56587\">♀</span>";
					}
				}
			}
		},3);
	}
	
	// 游戏模式
	if (config.byzy_fukemode) {
		lib.skill._byzy_fukemode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 412,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(501);
			},
		};
	}
	if (config.byzy_qingkongmode) {
		lib.skill._byzy_qingkongmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 411,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(502);
			},
		};
	}
	if (config.byzy_quanqingkongmode) {
		lib.skill._byzy_quanqingkongmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 410,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(503);
			},
		};
	}
	if (config.byzy_hunluanmode) {
		lib.skill._byzy_hunluanmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 409,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(504);
			},
		};
	}
	if (config.byzy_pofangmode) {
		lib.skill._byzy_pofangmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 408,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(506);
			},
		};
	}
	if (config.byzy_quanpofangmode) {
		lib.skill._byzy_quanpofangmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 407,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(507);
			},
		};
	}
	if (config.byzy_fengyinmode) {
		lib.skill._byzy_fengyinmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 406,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(509);
			},
		};
	}
	if (config.byzy_quanfengyinmode) {
		lib.skill._byzy_quanfengyinmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 405,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(510);
			},
		};
	}
	if (config.byzy_baibanmode) {
		lib.skill._byzy_baibanmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 404,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(512);
			},
		};
	}
	if (config.byzy_quanbaibanmode) {
		lib.skill._byzy_quanbaibanmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 403,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(513);
			},
		};
	}
	if (config.byzy_qianxingmode) {
		lib.skill._byzy_qianxingmode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 402,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(515);
			},
		};
	}
	if (config.byzy_mianyimode) {
		lib.skill._byzy_mianyimode = {
			trigger: {
				global: 'gameStart',
				player: 'enterGame',
			},
			forced: true,
			popup: false,
			silent: true,
			priority: 401,
			firstDo: true,
			filter: function (event, player) {
				return player === game.me && ['identity', 'guozhan', 'doudizhu'].contains(lib.config.mode);
			},
			content: function () {
				game.zxgn(517);
			},
		};
	}
	
	if (lib.config.byzy_tongrenmoshi!="0"&&lib.config.byzy_tongrenmoshi!=undefined) {
		setTimeout(function() {
			// 同人模式(即时生效)选项
			// 魔改自本体game.js的联机头像选项var connect_avatar_list=[];
			var avatar_list=[];
			if (lib.config.byzy_tongrenmoshixuanjiang=="1") {
				// 所有的武将包武将
				for(var k in lib.characterPack){
					for(var i in lib.characterPack[k]){
						if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
							if(lib.characterPack[k][i][4] && lib.characterPack[k][i][4].includes('unseen')) continue;
							if(!lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
								continue;
							} else if(!lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
								continue;
							} else avatar_list.push(i);
						} else avatar_list.push(i);
					}
				}
			} else {
				// 武将包开启的武将
				for(var i in lib.character){
					if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
						if(lib.character[i][4] && lib.character[i][4].includes('unseen')) continue;
						if(lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
							avatar_list.push(i);
						} else if(lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
							avatar_list.push(i);
						} else continue;
					} else avatar_list.push(i);
				}
			}
			avatar_list.sort(lib.sort.capt);
			// 选项显示
			if (lib.config.byzy_tongrenmoshixuanxiang=="1") {
				for(var i=0;i<avatar_list.length;i++){
					var ia=avatar_list[i];
					lib.extensionMenu.extension_搬运自用.byzy_tongrenmoshi.item[lib.translate[ia]]=lib.translate[ia]+'<span style="font-size:14px;font-family:SimHei,STHeiti,sans-serif">'+'['+ia+']'+'</span>';
				}
			} else {
				for(var i=0;i<avatar_list.length;i++){
					var ia=avatar_list[i];
					lib.extensionMenu.extension_搬运自用.byzy_tongrenmoshi.item[get.rawName([ia])]=get.rawName([ia]);
				}
			}
		}, 10);
		// 同人模式函数
		game.byzy_tongrenmoshi=function(item){
			// 武将遍历
			var list=[];
			// 开启即玩诸葛亮的同人模式
			if(item == '1'){
				if (lib.config.byzy_tongrenmoshixuanjiang=="1") {
					// 所有的武将包武将
					for(var k in lib.characterPack){
						for(var i in lib.characterPack[k]){
							if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
								if(lib.characterPack[k][i][4] && lib.characterPack[k][i][4].includes('unseen')) continue;
								if(lib.translate[i]&&(lib.translate[i].includes('诸葛亮')||(lib.translate[i].includes('卧龙')&&!lib.translate[i].includes('卧龙凤雏')))){
									if(!lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
										continue;
									} else if(!lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
										continue;
									} else list.push(i);
								}
							} else if(lib.translate[i]&&(lib.translate[i].includes('诸葛亮')||(lib.translate[i].includes('卧龙')&&!lib.translate[i].includes('卧龙凤雏')))){
								list.push(i);
							}
						}
					}
				} else {
					// 武将包开启的武将
					for(var i in lib.character){
						if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
							if(lib.character[i][4] && lib.character[i][4].includes('unseen')) continue;
							if(lib.translate[i]&&(lib.translate[i].includes('诸葛亮')||(lib.translate[i].includes('卧龙')&&!lib.translate[i].includes('卧龙凤雏')))){
								if(lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
									list.push(i);
								} else if(lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
									list.push(i);
								} else continue;
							}
						} else if(lib.translate[i]&&(lib.translate[i].includes('诸葛亮')||(lib.translate[i].includes('卧龙')&&!lib.translate[i].includes('卧龙凤雏')))){
							list.push(i);
						}
					}
				}
			} else {
				if (lib.config.byzy_tongrenmoshixuanjiang=="1") {
					// 所有的武将包武将
					for(var k in lib.characterPack){
						for(var i in lib.characterPack[k]){
							if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
								if(lib.characterPack[k][i][4] && lib.characterPack[k][i][4].includes('unseen')) continue;
								if(lib.translate[i]&&lib.translate[i].includes(item)){
									if(!lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
										continue;
									} else if(!lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
										continue;
									} else list.push(i);
								}
							} else if(lib.translate[i]&&lib.translate[i].includes(item)){
								list.push(i);
							}
						}
					}
				} else {
					// 武将包开启的武将
					for(var i in lib.character){
						if(lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)){
							if(lib.character[i][4] && lib.character[i][4].includes('unseen')) continue;
							if(lib.translate[i]&&lib.translate[i].includes(item)){
								if(lib.config['extension_搬运自用_byzy_tongrenmoshijinjiang']&&lib.config.banned.includes(i)){
									list.push(i);
								} else if(lib.config['extension_搬运自用_byzy_tongrenmoshiaijinjiang']&&(lib.config.forbidai.includes(i)||lib.config.forbidai_user.includes(i))){
									list.push(i);
								} else continue;
							}
						} else if(lib.translate[i]&&lib.translate[i].includes(item)){
							list.push(i);
						}
					}
				}
			}
			
			if(item == '0'){
				if(game.say1){
					game.say1('同人模式已关闭');
				}else{
					// alert('同人模式已关闭');
				}
			} else {
				if(game.say1){
					game.say1('同人武将数为：'+list.length+'，场上角色数为：'+game.players.length);
				}else{
					// alert('同人武将数为：'+list.length+'，场上角色数为：'+game.players.length);
				}
			}
			
			if (lib.config.byzy_tongrenmoshifenpei=="1") {
				// 武将分配规则：全随机分配
				for (var i = 0; i < game.players.length; i++) {
					// bug修复：更换武将牌后AI没了、临时修复谋攻篇模式bug
					var gamePlayersAI=game.players[i].ai;
					if (get.config('identity_mode')=='stratagem') {
						var gamePlayerszhibi=game.players[i].storage.zhibi;
						var gamePlayersstratagemexpose=game.players[i].storage.stratagem_expose;
					}
					game.players[i].uninit();
					game.players[i].ai=gamePlayersAI;
					if (get.config('identity_mode')=='stratagem') {
						game.players[i].storage.zhibi=gamePlayerszhibi;
						game.players[i].storage.stratagem_expose=gamePlayersstratagemexpose;
					}
					game.players[i].init(list.randomGet());
					if (get.config('identity_mode')=='stratagem') {
						if (game.players[i].identity == "zhu") game.players[i].addSkill("stratagem_monarchy");
						if (game.players[i].identity == "fan") game.players[i].addSkill("stratagem_revitalization");
					}
				}
			} else {
				// 武将分配规则：随机分配
				var originalList = list.slice(); // 保存原始同人武将列表
				for (var i = 0; i < game.players.length; i++) {
					// bug修复：更换武将牌后AI没了、临时修复谋攻篇模式bug
					var gamePlayersAI=game.players[i].ai;
					if (get.config('identity_mode')=='stratagem') {
						var gamePlayerszhibi=game.players[i].storage.zhibi;
						var gamePlayersstratagemexpose=game.players[i].storage.stratagem_expose;
					}
					game.players[i].uninit(); // 先移除武将牌，避免后面原先隐匿的武将更换武将牌后无皮肤
					game.players[i].ai=gamePlayersAI;
					if (get.config('identity_mode')=='stratagem') {
						game.players[i].storage.zhibi=gamePlayerszhibi;
						game.players[i].storage.stratagem_expose=gamePlayersstratagemexpose;
					}
					var selectedElement = originalList.randomGet(); // 随机分配一个武将
					game.players[i].init(selectedElement); // 使用随机武将进行初始化
					if (get.config('identity_mode')=='stratagem') {
						if (game.players[i].identity == "zhu") game.players[i].addSkill("stratagem_monarchy");
						if (game.players[i].identity == "fan") game.players[i].addSkill("stratagem_revitalization");
					}
					var index = originalList.indexOf(selectedElement); // 获取选中武将在列表中的索引
					originalList.splice(index, 1); // 移除已经分配的武将
					if (originalList.length === 0) {
						originalList = list.slice(); // 全部武将已取完，重新从原始同人武将列表开始
					}
				}
			}
		};
		// 同人模式
		if (config.byzy_tongrenmoshikaiguan) {
			lib.skill._byzy_tongrenmoshi = {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				forced: true,
				popup: false,
				silent: true,
				priority: 900,
				firstDo: true,
				filter: function (event, player) {
					return player === game.me && ['identity', 'doudizhu'].contains(lib.config.mode);
				},
				content: function () {
					game.byzy_tongrenmoshi(lib.config.byzy_tongrenmoshi);
				},
			};
		}
	}
	
	// 禁用武将切换功能，搬运自官将重修扩展
	if (config.byzy_jywjqhgn) {
		for(var i in lib.characterReplace) {
			lib.characterReplace[i] = [];
		}
	}
	
},
precontent:function(){
	// 重新选将功能的换将dialog框函数，搬运自假装无敌扩展，可在非托管状态下通过控制台执行重新选将功能
	// 魔改自本体不同模式的选将函数chooseCharacter:function(){
	game.byzy_choosePlayer = {
		// 根据模式走不同的方法
		chooseCharacter: function (target) {
			var mode = lib.config.mode;
			if (mode === 'identity' || mode === 'doudizhu') return game.byzy_choosePlayer.chooseCharacterShenFen.call(target);
			else if (mode === 'guozhan') return game.byzy_choosePlayer.chooseCharacterGuoZhan.call(target);
		},
		// 身份模式
		chooseCharacterShenFen: function () {
			// 3v3v2判断
			/*if (_status.mode == 'purple') {
				game.chooseCharacterPurple();
				return;
			}*/
			// 斗地主判断
			/*if (_status.mode == 'online') {
				game.chooseCharacterZhidou();
				return;
			}
			if (_status.mode == 'kaihei') {
				game.chooseCharacterKaihei();
				return;
			}
			if (_status.mode == 'huanle') {
				game.chooseCharacterHuanle();
				return;
			}
			if (_status.mode == 'binglin') {
				game.chooseCharacterBinglin();
				return;
			}*/
			var next = game.createEvent('chooseCharacter');
			next.target = this;
			next.player = game.me;
			// next.filter = function (name) {
				//if (lib.character[name][1] === 'key' || name.indexOf("key") === 0) return false;
				// return true;
			// };
			next.showConfig = true;
			next.addPlayer = function (player) {
				var list=get.identityList(game.players.length-1);
				var list2=get.identityList(game.players.length);
				for (var i = 0; i < list.length; i++) list2.remove(list[i]);
				player.identity = list2[0];
				player.setIdentity('cai');
			};
			next.removePlayer = function () {
				return game.players.randomGet(target, game.zhu);
			};
			next.ai=function(player,list,list2,back){
				if(_status.brawl&&_status.brawl.chooseCharacterAi){
					if(_status.brawl.chooseCharacterAi(player,list,list2,back)!==false){
						return;
					}
				}
				var stratagemMode=_status.event.stratagemMode;
				if(_status.event.zhongmode){
					var listc=list.slice(0,2);
					for(var i=0;i<listc.length;i++){
						var listx=lib.characterReplace[listc[i]];
						if(listx&&listx.length) listc[i]=listx.randomGet();
					}
					if(get.config('double_character')){
						player.init(listc[0],listc[1]);
					}
					else{
						player.init(listc[0]);
					}
					if(player.identity=='mingzhong'){
						if(!player.isInitFilter('noZhuHp')){
							player.maxHp++;
							player.hp++;
							player.update();
						}
					}
				}
				else if(player.identity=='zhu'&&!stratagemMode){
					list2.randomSort();
					var choice,choice2;
					if(!_status.event.zhongmode&&Math.random()-0.8<0&&list2.length){
						choice=list2[0];
						choice2=list[0];
						if(choice2==choice){
							choice2=list[1];
						}
					}
					else{
						choice=list[0];
						choice2=list[1];
					}
					if(lib.characterReplace[choice]&&lib.characterReplace[choice].length) choice=lib.characterReplace[choice].randomGet();
					if(lib.characterReplace[choice2]&&lib.characterReplace[choice2].length) choice2=lib.characterReplace[choice2].randomGet();
					if(get.config('double_character')){
						player.init(choice,choice2);
					}
					else{
						player.init(choice);
					}
					if(game.players.length>4){
						if(!player.isInitFilter('noZhuHp')){
							player.maxHp++;
							player.hp++;
							player.update();
						}
					}
				}
				else if(player.identity=='zhong'&&(Math.random()<0.5||['sunliang','key_akane'].contains(game.zhu.name))&&!stratagemMode){
					var listc=list.slice(0);
					for(var i=0;i<listc.length;i++){
						var listx=lib.characterReplace[listc[i]];
						if(listx&&listx.length) listc[i]=listx.randomGet();
					}
					var choice=0;
					for(var i=0;i<listc.length;i++){
						if(lib.character[listc[i]][1]==game.zhu.group){
							choice=i;break;
						}
					}
					if(get.config('double_character')){
						player.init(listc[choice],listc[choice==0?choice+1:choice-1]);
					}
					else{
						player.init(listc[choice]);
					}
				}
				else{
					var listc=list.slice(0,2);
					for(var i=0;i<listc.length;i++){
						var listx=lib.characterReplace[listc[i]];
						if(listx&&listx.length) listc[i]=listx.randomGet();
					}
					if(get.config('double_character')){
						player.init(listc[0],listc[1]);
					}
					else{
						player.init(listc[0]);
					}
				}
				if(back){
					list.remove(get.sourceCharacter(player.name1));
					list.remove(get.sourceCharacter(player.name2));
					for(var i=0;i<list.length;i++){
						back.push(list[i]);
					}
				}
				if(typeof lib.config.test_game=='string'&&player==target.next){
					player.init(lib.config.test_game);
				}
				if(get.is.double(player.name1)){
					player._groupChosen=true;
					player.group=get.is.double(player.name1,true).randomGet();
					player.node.name.dataset.nature=get.groupnature(player.group);
				}
				else if(get.config('choose_group')&&player.group=='shen'&&!player.isUnseen(0)){
					var list=lib.group.slice(0);
					list.remove('shen');
					if(list.length) player.group=function(){
						if(_status.mode!='zhong'&&game.zhu&&game.zhu.group){
							if(['re_zhangjiao','liubei','re_liubei','caocao','re_caocao','sunquan','re_sunquan','zhangjiao','sp_zhangjiao','caopi','re_caopi','liuchen','caorui','sunliang','sunxiu','sunce','re_sunben','ol_liushan','re_liushan','key_akane','dongzhuo','re_dongzhuo','ol_dongzhuo','jin_simashi','caomao'].contains(game.zhu.name)) return game.zhu.group;
							if(game.zhu.name=='yl_yuanshu'){
								if(player.identity=='zhong') list.remove('qun');
								else return 'qun';
							}
							if(['sunhao','xin_yuanshao','re_yuanshao','re_sunce','ol_yuanshao','yuanshu','jin_simazhao','liubian'].contains(game.zhu.name)){
								if(player.identity!='zhong') list.remove(game.zhu.group);
								else return game.zhu.group;
							}
						}
						return list.randomGet();
					}();
				}
				player.node.name.dataset.nature=get.groupnature(player.group);
			}
			next.setContent(function () {
				"step 0"
				ui.arena.classList.add('choose-character');
				var i;
				var list;
				var list2 = [];
				var list3 = [];
				var list4 = [];
				var identityList;
				var chosen = lib.config.continue_name || [];
				game.saveConfig('continue_name');
				event.chosen = chosen;
				if (_status.mode == 'zhong') {
					event.zhongmode = true;
					identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
				}
				else {
					if(_status.mode=='stratagem') event.stratagemMode=true;
					identityList=get.identityList(game.players.length);
					/*
					if (get.config('double_nei')) {
						switch (get.playerNumber()) {
							case 8:
								identityList.remove('fan');
								identityList.push('nei');
								break;
							case 7:
								identityList.remove('zhong');
								identityList.push('nei');
								break;
							case 6:
								identityList.remove('fan');
								identityList.push('nei');
								break;
							case 5:
								identityList.remove('fan');
								identityList.push('nei');
								break;
							case 4:
								identityList.remove('zhong');
								identityList.push('nei');
								break;
							case 3:
								identityList.remove('fan');
								identityList.push('nei');
								break;
						}
					}
					*/
				}
				var stratagemMode=event.stratagemMode;
				
				var addSetting = function (dialog) {
					dialog.add('选择身份').classList.add('add-setting');
					var table = document.createElement('div');
					table.classList.add('add-setting');
					table.style.margin = '0';
					table.style.width = '100%';
					table.style.position = 'relative';
					var listi;
					if (event.zhongmode) {
						listi = ['random', 'zhu', 'mingzhong', 'zhong', 'fan', 'nei'];
					}
					else {
						listi = ['random', 'zhu', 'zhong', 'fan', 'nei'];
						if(get.config('enable_commoner')&&!event.stratagemMode) listi.push('commoner');
					}
					
					for (var i = 0; i < listi.length; i++) {
						var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
						td.link = listi[i];
						if (td.link === target.identity) {
							td.classList.add('bluebg');
						}
						table.appendChild(td);
						td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
						td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
							if (_status.dragged) return;
							if (_status.justdragged) return;
							_status.tempNoButton = true;
							setTimeout(function () {
								_status.tempNoButton = false;
							}, 500);
							var link = this.link;
							if (game.zhu.name) {
								if (link != 'random') {
									_status.event.parent.fixedseat = get.distance(target, game.zhu, 'absolute');
								}
								game.zhu.uninit();
								delete game.zhu.isZhu;
								delete game.zhu.identityShown;
							}
							var current = this.parentNode.querySelector('.bluebg');
							if (current) {
								current.classList.remove('bluebg');
							}
							current=_status.cheat_seat||seats.querySelector('.bluebg');
							if (current) {
								current.classList.remove('bluebg');
							}
							if (link == 'random') {
								if (event.zhongmode) {
									link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
								}
								else {
									var listi=['zhu','zhong','nei','fan'];
									if(get.config('enable_commoner')&&!event.stratagemMode) listi.push('commoner');
									link=listi.randomGet();
								}
								for (var i = 0; i < this.parentNode.childElementCount; i++) {
									if (this.parentNode.childNodes[i].link == link) {
										this.parentNode.childNodes[i].classList.add('bluebg');
									}
								}
							}
							else {
								this.classList.add('bluebg');
							}
							num = get.config('choice_' + link);
							if (event.zhongmode) {
								num = 6;
								if (link == 'zhu' || link == 'nei' || link == 'mingzhong') {
									num = 8;
								}
							}
							_status.event.parent.swapnodialog = function (dialog, list) {
								var buttons = ui.create.div('.buttons');
								var node = dialog.buttons[0].parentNode;
								dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
								dialog.content.insertBefore(buttons, node);
								buttons.addTempClass('start');
								node.remove();
								game.uncheck();
								game.check();
								if(event.stratagemMode) return;
								for (var i = 0; i < seats.childElementCount; i++) {
									if (get.distance(game.zhu, target, 'absolute') === seats.childNodes[i].link) {
										seats.childNodes[i].classList.add('bluebg');
									}
								}
							}
							_status.event = _status.event.parent;
							_status.event.step = 0;
							_status.event.identity = link;
							if(!event.stratagemMode){
								if (link != (event.zhongmode ? 'mingzhong' : 'zhu')) {
									seats.previousSibling.style.display = '';
									seats.style.display = '';
								}
								else {
									seats.previousSibling.style.display = 'none';
									seats.style.display = 'none';
								}
							}
							game.resume();
						});
					}
					
					dialog.content.appendChild(table);
					dialog.add('选择座位').classList.add('add-setting');
					var seats = document.createElement('div');
					seats.classList.add('add-setting');
					seats.style.margin = '0';
					seats.style.width = '100%';
					seats.style.position = 'relative';
					for(var i=stratagemMode?1:2; i <= game.players.length; i++) {
						var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
						td.innerHTML = get.cnNumber(i, true);
						td.link = i - 1;
						seats.appendChild(td);
						if(!stratagemMode&&get.distance(game.zhu, target, 'absolute') === i - 1) {
							td.classList.add('bluebg');
						}
						td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
							if (_status.dragged) return;
							if (_status.justdragged) return;
							if(_status.cheat_seat){
								_status.cheat_seat.classList.remove('bluebg');
								if(_status.cheat_seat==this){
									delete _status.cheat_seat;
									return;
								}
								
							}
							if(stratagemMode){
								this.classList.add('bluebg');
								_status.cheat_seat=this;
							}
							else{
								if (get.distance(game.zhu, target, 'absolute') == this.link) return;
								var current = this.parentNode.querySelector('.bluebg');
								if (current) {
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								for (var i = 0; i < game.players.length; i++) {
									if (get.distance(game.players[i], target, 'absolute') == this.link) {
										game.swapSeat(game.zhu, game.players[i], false);
										return;
									}
								}
							}
						});
					}
					dialog.content.appendChild(seats);
					if (!stratagemMode&&target == game.zhu) {
						seats.previousSibling.style.display = 'none';
						seats.style.display = 'none';
					}
					
					dialog.add(ui.create.div('.placeholder.add-setting'));
					dialog.add(ui.create.div('.placeholder.add-setting'));
					if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
				};
				var removeSetting = function () {
					var dialog = _status.event.dialog;
					if (dialog) {
						dialog.style.height = '';
						delete dialog._scrollset;
						var list = Array.from(dialog.querySelectorAll('.add-setting'));
						while (list.length) {
							list.shift().remove();
						}
						ui.update();
					}
				};
				event.addSetting=addSetting;
				event.removeSetting=removeSetting;
				event.list = [];
				identityList.randomSort();
				if (event.identity) {
					identityList.remove(event.identity);
					identityList.unshift(event.identity);
					if (event.fixedseat) {
						var zhuIdentity = (_status.mode == 'zhong') ? 'mingzhong' : 'zhu';
						if (zhuIdentity != event.identity) {
							identityList.remove(zhuIdentity);
							identityList.splice(event.fixedseat, 0, zhuIdentity);
						}
						delete event.fixedseat;
					}
					delete event.identity;
				}
				else if (_status.mode != 'zhong' && (!_status.brawl || !_status.brawl.identityShown)) {
					var ban_identity = [];
					ban_identity.push(get.config('ban_identity') || 'off');
					if (ban_identity[0] != 'off') {
						ban_identity.push(get.config('ban_identity2') || 'off');
						if (ban_identity[1] != 'off') {
							ban_identity.push(get.config('ban_identity3') || 'off');
						}
					}
					ban_identity.remove('off');
					if (ban_identity.length) {
						var identityList2 = identityList.slice(0);
						for (var i = 0; i < ban_identity.length; i++) {
							while(identityList2.includes(ban_identity[i])){
								identityList2.remove(ban_identity[i]);
							}
						}
						ban_identity = identityList2.randomGet();
						identityList.remove(ban_identity);
						identityList.splice(game.players.indexOf(target), 0, ban_identity);
					}
				}
				// for(i=0;i<game.players.length;i++){
					// if(_status.brawl&&_status.brawl.identityShown){
						// if(game.players[i].identity=='zhu') game.zhu=game.players[i];
						// if(!stratagemMode) game.players[i].identityShown=true;
					// }
					// else{
						// game.players[i].node.identity.classList.add('guessing');
						// game.players[i].identity=identityList[i];
						// game.players[i].setIdentity('cai');
						// if(event.zhongmode){
							// if(identityList[i]=='mingzhong'){
								// game.zhu=game.players[i];
							// }
							// else if(identityList[i]=='zhu'){
								// game.zhu2=game.players[i];
							// }
						// }
						// else{
							// if(identityList[i]=='zhu'){
								// game.zhu=game.players[i];
							// }
						// }
						// game.players[i].identityShown=false;
					// }
				// }
				
				if(get.config('special_identity')&&!event.zhongmode&&!event.stratagemMode&&game.players.length==8){
					for (var i = 0; i < game.players.length; i++) {
						delete game.players[i].special_identity;
					}
					event.special_identity = [];
					var zhongs = game.filterPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var fans = game.filterPlayer(function (current) {
						return current.identity == 'fan';
					});
					if (fans.length >= 1) {
						fans.randomRemove().special_identity = 'identity_zeishou';
						event.special_identity.push('identity_zeishou');
					}
					if (zhongs.length > 1) {
						zhongs.randomRemove().special_identity = 'identity_dajiang';
						zhongs.randomRemove().special_identity = 'identity_junshi';
						event.special_identity.push('identity_dajiang');
						event.special_identity.push('identity_junshi');
					}
					else if (zhongs.length == 1) {
						if (Math.random() < 0.5) {
							zhongs.randomRemove().special_identity = 'identity_dajiang';
							event.special_identity.push('identity_dajiang');
						}
						else {
							zhongs.randomRemove().special_identity = 'identity_junshi';
							event.special_identity.push('identity_junshi');
						}
					}
				}
				
				if (!game.zhu) game.zhu = target;
				else {
					// 修复明忠模式点重新选将会暴露主公身份的bug、修复谋攻模式可以对未亮明身份的主公发动技能的bug
					if(!(stratagemMode||event.zhongmode)){
						game.zhu.setIdentity();
						game.zhu.isZhu = (game.zhu.identity == 'zhu');
						game.zhu.identityShown = true;
						game.zhu.node.identity.classList.remove('guessing');
					}
					/*target.setIdentity();
					target.node.identity.classList.remove('guessing');*/
				}
				//选将框分配
				for (i in lib.characterReplace) {
					var ix = lib.characterReplace[i];
					for (var j = 0; j < ix.length; j++) {
						if (chosen.contains(ix[j]) || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
					}
					if (ix.length) {
						event.list.push(i);
						list4.addArray(ix);
						if(stratagemMode){
							list3.push(i);
						}
						else{
							var bool = false;
							for (var j of ix) {
								if (lib.character[j][4] && lib.character[j][4].contains('zhu')) {
									bool = true;
									break;
								}
							}
							(bool ? list2 : list3).push(i);
						}
					}
				}
				for (i in lib.character) {
					if (list4.contains(i)) continue;
					if (chosen.contains(i)) continue;
					if (lib.filter.characterDisabled(i)) continue;
					
					if (typeof event.filter === 'function' && event.filter(i) === false) continue;
					
					event.list.push(i);
					list4.push(i);
					if (!stratagemMode&&lib.character[i][4] && lib.character[i][4].contains('zhu')) {
						list2.push(i);
					}
					else {
						list3.push(i);
					}
				}
				// var getZhuList=function(){
					// if(stratagemMode){
						// list2.sort(lib.sort.character);
						// return list2;
					// }
					// var limit_zhu=get.config('limit_zhu');
					// if(!limit_zhu||limit_zhu=='off') return list2.slice(0).sort(lib.sort.character);
					// if(limit_zhu!='group'){
						// var num=(parseInt(limit_zhu)||6);
						// return list2.randomGets(num).sort(lib.sort.character);
					// }
					// var getGroup=function(name){
						// if(lib.characterReplace[name]) return lib.character[lib.characterReplace[name][0]][1];
						// return lib.character[name][1];
					// }
					// var list2x=list2.slice(0);
					// list2x.randomSort();
					// for(var i=0;i<list2x.length;i++){
							// for(var j=i+1;j<list2x.length;j++){
							// if(getGroup(list2x[i])==getGroup(list2x[j])){
								// list2x.splice(j--,1);
							// }
						// }
					// }
					// list2x.sort(lib.sort.character);
					// return list2x;
				// }
				list2.sort(lib.sort.character);
				event.list.randomSort();
				_status.characterlist = list4.slice(0).randomSort();
				list3.randomSort();
				if (_status.brawl && _status.brawl.chooseCharacterFilter) {
					// _status.brawl.chooseCharacterFilter(event.list,getZhuList(),list3);
					_status.brawl.chooseCharacterFilter(event.list,list2,list3);
				}
				var num = get.config('choice_' + target.identity);
				if (event.zhongmode) {
					num = 6;
					if (target.identity == 'zhu' || target.identity == 'nei' || target.identity == 'mingzhong') {
						num = 8;
					}
				}
				
				// if(stratagemMode){
					// list=event.list.slice(0,num);
				// }
				// else if(game.zhu!=target){
					// event.ai(game.zhu,event.list,getZhuList())
					// event.list.remove(get.sourceCharacter(game.zhu.name1));
					// event.list.remove(get.sourceCharacter(game.zhu.name2));
					// if(_status.brawl&&_status.brawl.chooseCharacter){
						// list=_status.brawl.chooseCharacter(event.list,num);
						// if(list===false||list==='nozhu'){
							// list=event.list.slice(0,num);
						// }
					// }
					// else{
						// list=event.list.slice(0,num);
					// }
				// }
				// else{
					// if(_status.brawl&&_status.brawl.chooseCharacter){
						// list=_status.brawl.chooseCharacter(getZhuList(),list3,num);
						// if(list===false){
							// if(event.zhongmode){
								// list=list3.slice(0,6);
							// }
							// else{
								// list=getZhuList().concat(list3.slice(0,num));
							// }
						// }
						// else if(list==='nozhu'){
							// list=event.list.slice(0,num);
						// }
					// }
					// else{
						// if(event.zhongmode){
							// list=list3.slice(0,8);
						// }
						// else{
							// list=getZhuList().concat(list3.slice(0,num));
						// }
					// }
				// }
				if (target === game.zhu && lib.config.mode !== "doudizhu") {
					list = list2.concat(list3.slice(0, num));
				} else {
					list = list3.slice(0, 8);
				}
				delete event.swapnochoose;
				var dialog;
				if (event.swapnodialog) {
					dialog = ui.dialog;
					event.swapnodialog(dialog, list);
					delete event.swapnodialog;
				}
				else {
					var str = '选择角色';
					if (_status.brawl && _status.brawl.chooseCharacterStr) {
						str = _status.brawl.chooseCharacterStr;
					}
					dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
					/*if(!_status.brawl||!_status.brawl.noAddSetting){
						if(get.config('change_identity')){
							addSetting(dialog);
						}
					}*/
				}
				
				if (target.special_identity) {
					dialog.setCaption('选择角色（' + get.translation(target.special_identity) + '）');
					target.node.identity.firstChild.innerHTML = get.translation(target.special_identity + '_bg');
				}
				else {
					dialog.setCaption('选择角色');
					//target.setIdentity();
				}
				if (lib.onfree) {
					lib.onfree.push(function () {
						event.dialogxx = ui.create.characterDialog('heightset', target);
					});
				} else {
					event.dialogxx = ui.create.characterDialog('heightset', target);
				}
				
				/*自动改为全部*/
				/*if (event.dialogxx.currentcaptnode2) {
					if (lib.config.touchscreen) {
						event.dialogxx.currentcaptnode2.dispatchEvent(new DragEvent('touchend', {
							cancelable: true,
							composed: true
						}))
					} else {
						event.dialogxx.currentcaptnode2.click();
					}
				}*/
				/*补充所有武将*/
				var charactersKey = Object.keys(lib.character).removeArray(event.dialogxx.buttons.map(value => value.link)).filter(value => {
					var character = lib.character[value];
					if (!character || !character[4]) return false;
					return !character[4].contains('unseen')
				});
				if (!event.chosen.length) {
					// 重新选将功能可以点击取消按钮取消重新选将了
					game.me.chooseButton(event.dialogxx, false).set('onfree', true).selectButton = function () {
						// 重选单双将(即时生效)
						if(lib.config.byzy_cxdsj=="1"){
							return 1;
						} else if(lib.config.byzy_cxdsj=="2"){
							return 2;
						} else {
							if ((_status.brawl && _status.brawl.doubleCharacter) || (target == game.zhu && _status.mode == 'online')) return 2;
							return get.config('double_character') ? 2 : 1
						}
					};
				} else {
					lib.init.onfree();
				}
				
				var buttons1 = ui.create.buttons(charactersKey, 'character', event.dialogxx.querySelector(".buttons"));
				event.dialogxx.buttons = event.dialogxx.buttons.concat(buttons1);
				const getCapt = function (str) {
					var capt;
					if (str.indexOf('_') == -1) {
						capt = str[0];
					} else {
						capt = str[str.lastIndexOf('_') + 1];
					}
					capt = capt.toLowerCase();
					if (!/[a-z]/i.test(capt)) {
						capt = '自定义';
					}
					return capt;
				}
				buttons1.forEach(item => {
					item.group = lib.character[item.link][1];
					item.capt = getCapt(item.link);
					item.classList.add('nodisplay')
				})
				"step 1"
				// 修复重新选将取消后报错
				if (result.buttons==undefined) {
					event.goto(5)
				} else {
					// if (_status.mode == 'online') event.cardPile = target.storage.doudizhu_cardPile;
					if (ui.cheat) {
						ui.cheat.close();
						delete ui.cheat;
					}
					if (ui.cheat2) {
						ui.cheat2.close();
						delete ui.cheat2;
					}
					var chooseGroup = false;
					if (event.chosen.length) {
						if (lib.character[event.chosen[0]][1] == 'shen' && !lib.character[event.chosen[0]][4].contains('hiddenSkill')) {
							chooseGroup = true;
						}
					} else if (event.modchosen) {
						if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
						else event.modchosen[1] = result.buttons[0].link;
					} else if (result.buttons.length == 2) {
						event.choosed = [result.buttons[0].link, result.buttons[1].link];
						game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
						if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].contains('hiddenSkill')) {
							chooseGroup = true;
						}
					} else {
						event.choosed = [result.buttons[0].link];
						if (lib.character[event.choosed[0]][1] == 'shen' && !lib.character[event.choosed[0]][4].contains('hiddenSkill')) {
							chooseGroup = true;
						}
						game.addRecentCharacter(result.buttons[0].link);
					}
					// 修复双势力武将无法重新选势力的bug
					var name = event.choosed[0];
					if (get.is.double(name)) {
						game.me._groupChosen = true;
						game.me.chooseControl(get.is.double(name, true)).set("prompt", "请选择你的势力");
					} else if (get.config('choose_group') && chooseGroup) {
						var list = lib.group.slice(0);
						list.remove('shen');
						// 神武将选择势力（若开启）可点击取消了
						list.push('cancel2');
						game.me.chooseControl(list).prompt = '请选择神武将的势力';
					}
				}
				"step 2"
				event.group = result.control || false;
				// 神武将选择势力（若开启）可点击取消了
				if(event.group=='cancel2'){
					event.group='shen';
				}
				
				// bug修复：更换武将牌后AI没了、临时修复谋攻篇模式bug
				var gamePlayersAI=target.ai;
				if (get.config('identity_mode')=='stratagem') {
					var gamePlayerszhibi=target.storage.zhibi;
					var gamePlayersstratagemexpose=target.storage.stratagem_expose;
				}
				lib.element.player.uninit.call(target);
				target.ai=gamePlayersAI;
				if (get.config('identity_mode')=='stratagem') {
					target.storage.zhibi=gamePlayerszhibi;
					target.storage.stratagem_expose=gamePlayersstratagemexpose;
				}
				if (event.chosen.length) {
					lib.element.player.init.call(target, event.chosen[0], event.chosen[1]);
				} else if (event.modchosen) {
					lib.element.player.init.call(target, event.modchosen[0], event.modchosen[1]);
				} else if (event.choosed.length == 2) {
					lib.element.player.init.call(target, event.choosed[0], event.choosed[1]);
				} else {
					lib.element.player.init.call(target, event.choosed[0]);
				}
				if (get.config('identity_mode')=='stratagem') {
					if (target.identity == "zhu") target.addSkill("stratagem_monarchy");
					if (target.identity == "fan") target.addSkill("stratagem_revitalization");
				}
				
				event.list.remove(get.sourceCharacter(target.name1));
				event.list.remove(get.sourceCharacter(target.name2));
				if (target == game.zhu && _status.mode != 'purple') {
					if (!event.stratagemMode&&game.players.length > 4 || get.mode() == 'doudizhu') {
						if(!target.isInitFilter('noZhuHp')){
							target.maxHp++;
							target.hp++;
							target.update();
						}
					}
					if (get.mode() == 'identity') {
						var enhance_zhu = false;
						if (_status.connectMode) {
							enhance_zhu = (_status.mode != 'zhong' && _status.mode != 'purple' && lib.configOL.enhance_zhu && get.population('fan') >= 3);
						} else {
							enhance_zhu = (_status.mode != 'zhong' && _status.mode != 'purple' && get.config('enhance_zhu') && get.population('fan') >= 3);
						}
						if (enhance_zhu) {
							var skill;
							switch (game.zhu.name) {
								case 'key_yuri':
									skill = 'buqu';
									break;
								case 'liubei':
									skill = 'jizhen';
									break;
								case 'dongzhuo':
									skill = 'hengzheng';
									break;
								case 'sunquan':
									skill = 'batu';
									break;
								case 'sp_zhangjiao':
									skill = 'tiangong';
									break;
								case 'liushan':
									skill = 'shengxi';
									break;
								case 'sunce':
									skill = 'ciqiu';
									break;
								case 're_sunben':
									skill = 'ciqiu';
									break;
								case 'yuanshao':
									skill = 'geju';
									break;
								case 're_caocao':
									skill = 'dangping';
									break;
								case 'caopi':
									skill = 'junxing';
									break;
								case 'liuxie':
									skill = 'moukui';
									break;
								default:
									skill = 'tianming';
									break;
							}
							game.broadcastAll(function (player, skill) {
								target.addSkill(skill);
								target.storage.enhance_zhu = skill;
							}, game.zhu, skill);
						}
					}
					if (get.mode() == 'doudizhu') {
						if (['normal', 'huanle', 'kaihei'].contains(_status.mode)) {
							var skill = ['feiyang', 'bahu'];
							game.broadcastAll(function (player, skill) {
								target.addSkill(skill);
							}, game.zhu, skill);
						}
						if (_status.mode == 'binglin') {
							var skill = game.zhuSkill;
							game.broadcastAll(function (player, skill) {
								target.addSkill(skill);
							}, game.zhu, skill);
						}
					}
				} else {
					if (_status.mode == 'binglin') {
						var skill = ['binglin_shaxue', 'binglin_neihong'];
						game.broadcastAll(function (player, skill) {
							target.addSkill(skill);
						}, target, skill);
					}
				}
				if (_status.mode == 'online') {
					game.zhu.hp = 4;
					game.zhu.maxHp = 4;
					game.zhu.update();
					target.storage.doudizhu_cardPile = event.cardPile;
					target.markSkill('doudizhu_cardPile');
				}
				if (_status.mode == 'purple') {
					if (target == game.rZhu || target == game.bZhu) {
						if(!target.isInitFilter('noZhuHp')){
							target.maxHp++;
							target.hp++;
							target.update();
						}
					}
				}
				/*for(var i=0;i<game.players.length;i++){
					if((event.stratagemMode||game.players[i]!=game.zhu)&&game.players[i]!=target){
						event.list.randomSort();
						event.ai(game.players[i],event.list.splice(0,get.config('choice_'+game.players[i].identity)),null,event.list)
					}
				}*/
				"step 3"
				if (event.group) {
					target.group = event.group;
					target.node.name.dataset.nature = get.groupnature(target.group);
					target.update();
				}
				for (var i = 0; i < game.players.length; i++) {
					_status.characterlist.remove(game.players[i].name);
					_status.characterlist.remove(game.players[i].name1);
					_status.characterlist.remove(game.players[i].name2);
				}
				"step 4"
				if(event.stratagemMode){
					['stratagem_gain','stratagem_insight','stratagem_expose'].forEach(globalSkill=>game.addGlobalSkill(globalSkill));
					game.players.forEach(i=>{
						i.storage.zhibi=[];
						i.storage.stratagem_expose=[];
						i.markSkill('stratagem_fury');
					});
				}
				if (event.special_identity) {
					for (var i = 0; i < event.special_identity.length; i++) {
						game.zhu.addSkill(event.special_identity[i]);
					}
				}
				"step 5"
				// 修复使用控制台多选武将重新选将对话框的显示问题
				// setTimeout(function () {
					ui.arena.classList.remove('choose-character');
				// }, 500);
			});
		},
		// 国战
		chooseCharacterGuoZhan: function () {
			var next = game.createEvent('chooseCharacter');
			next.showConfig = true;
			next.addPlayer = true;
			next.target = this;
			next.player = game.me;
			next.ai = function (player, list, back) {
				if (_status.brawl && _status.brawl.chooseCharacterAi) {
					if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
						return;
					}
				}
				var filterChoice=function(name1,name2){
					if(_status.separatism) return true;
					var group1=lib.character[name1][1];
					var group2=lib.character[name2][1];
					var doublex=get.is.double(name1,true);
					if(doublex){
						var double=get.is.double(name2,true);
						if(double) return doublex.some(group=>double.contains(group));
						return doublex.contains(group2);
					}
					else{
						if(group1=='ye') return group2!='ye';
						var double=get.is.double(name2,true);
						if(double) return double.contains(group1);
						return group1==group2;
					}
				};
				for(var i=0;i<list.length-1;i++){
					for(var j=i+1;j<list.length;j++){
						if(filterChoice(list[i],list[j])||filterChoice(list[j],list[i])){
							var mainx=list[i];
							var vicex=list[j];
							if(!filterChoice(mainx,vicex)||(filterChoice(vicex,mainx)&&get.guozhanReverse(mainx,vicex))){
								mainx=list[j];
								vicex=list[i];
							}
							player.init(mainx,vicex,false);
							if(get.is.double(mainx,true)){
								if(!get.is.double(vicex,true)) player.trueIdentity=lib.character[vicex][1];
								else if(get.is.double(mainx,true).removeArray(get.is.double(vicex,true)).length==0||get.is.double(vicex,true).removeArray(get.is.double(mainx,true)).length==0) player.trueIdentity=get.is.double(vicex,true).filter(group=>get.is.double(mainx,true).contains(group)).randomGet();
								else player.trueIdentity=get.is.double(mainx,true).find(group=>get.is.double(vicex,true).contains(group));
							}
							else if(lib.character[mainx][1]=='ye'&&get.is.double(vicex,true)) player.trueIdentity=get.is.double(vicex,true).randomGet();
							if(back){
								list.remove(player.name1);
								list.remove(player.name2);
								for(var i=0;i<list.length;i++){
									back.push(list[i]);
								}
							}
							return;
						}
					}
				}
			}
			next.setContent(function () {
				"step 0"
				ui.arena.classList.add('choose-character');
				var addSetting = function (dialog) {
					dialog.add('选择座位').classList.add('add-setting');
					var seats = document.createElement('table');
					seats.classList.add('add-setting');
					seats.style.margin = '0';
					seats.style.width = '100%';
					seats.style.position = 'relative';
					for (var i = 1; i <= game.players.length; i++) {
						var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
						td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
						td.link = i - 1;
						seats.appendChild(td);
						td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
							if (_status.dragged) return;
							if (_status.justdragged) return;
							if (_status.cheat_seat) {
								_status.cheat_seat.classList.remove('bluebg');
								if (_status.cheat_seat == this) {
									delete _status.cheat_seat;
									return;
								}
							}
							this.classList.add('bluebg');
							_status.cheat_seat = this;
						});
					}
					dialog.content.appendChild(seats);
					if (game.me == game.zhu) {
						seats.previousSibling.style.display = 'none';
						seats.style.display = 'none';
					}
					
					dialog.add(ui.create.div('.placeholder.add-setting'));
					dialog.add(ui.create.div('.placeholder.add-setting'));
					if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
				};
				var removeSetting = function () {
					var dialog = _status.event.dialog;
					if (dialog) {
						dialog.style.height = '';
						delete dialog._scrollset;
						var list = Array.from(dialog.querySelectorAll('.add-setting'));
						while (list.length) {
							list.shift().remove();
						}
						ui.update();
					}
				};
				event.addSetting = addSetting;
				event.removeSetting = removeSetting;
				
				var chosen = lib.config.continue_name || [];
				game.saveConfig('continue_name');
				event.chosen = chosen;
				
				var i;
				event.list = [];
				for (i in lib.character) {
					if (i.indexOf('gz_shibing') == 0) continue;
					if (chosen.contains(i)) continue;
					if (lib.filter.characterDisabled(i)) continue;
					if (get.config('onlyguozhan')) {
						if(!lib.characterGuozhanFilter.some(pack=>lib.characterPack[pack][i])) continue;
						if (get.is.jun(i)) continue;
					}
					if (lib.character[i][4].contains('hiddenSkill')) continue;
					if(lib.character[i][2]==3||lib.character[i][2]==4||lib.character[i][2]==5||lib.character[i][2]==3/2||lib.character[i][2]==4/2||lib.character[i][2]==5/2)
						event.list.push(i);
				}
				_status.characterlist = event.list.slice(0);
				_status.yeidentity = [];
				if (_status.brawl && _status.brawl.chooseCharacterFilter) {
					event.list = _status.brawl.chooseCharacterFilter(event.list);
				}
				event.list.randomSort();
				// var list=event.list.splice(0,parseInt(get.config('choice_num')));
				var list;
				if (_status.brawl && _status.brawl.chooseCharacter) {
					list = _status.brawl.chooseCharacter(event.list, game.me);
				}
				else{
					list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
				}
				if (_status.auto) {
					event.ai(target, list);
					lib.init.onfree();
				}
				else if (chosen.length){
					game.me.init(chosen[0], chosen[1], false);
					lib.init.onfree();
				}
				else {
					event.dialogxx = ui.create.characterDialog('heightset', function (i) {
						if (i.indexOf('gz_shibing') == 0) return true;
						if (get.config('onlyguozhan')) {
							if(!lib.characterGuozhanFilter.some(pack=>lib.characterPack[pack][i])) return true;
							if (get.is.jun(i)) return true;
						}
					}, get.config('onlyguozhanexpand') ? 'expandall' : undefined, get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined, target);
					var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
					if (!_status.brawl || !_status.brawl.noAddSetting) {
						if (get.config('change_identity')) {
							addSetting(dialog);
						}
					}
					// 重新选将功能可以点击取消按钮取消重新选将了
					var next = game.me.chooseButton(event.dialogxx, false, 2).set('onfree', true);
					next.filterButton = function (button) {
						if (ui.dialog.buttons.length <= 10) {
							for (var i = 0; i < ui.dialog.buttons.length; i++) {
								if (ui.dialog.buttons[i] != button) {
									if (lib.element.player.perfectPair.call({
										name1: button.link,
										name2: ui.dialog.buttons[i].link,
									},true)){
										button.classList.add('glow2');
									}
								}
							}
						}
						if (lib.character[button.link][4].contains('hiddenSkill')) return false;
						var filterChoice=function(name1,name2){
							if(_status.separatism) return true;
							var group1=lib.character[name1][1];
							var group2=lib.character[name2][1];
							var doublex=get.is.double(name1,true);
							if(doublex){
								var double=get.is.double(name2,true);
								if(double) return doublex.some(group=>double.contains(group));
								return doublex.contains(group2);
							}
							else{
								if(group1=='ye') return group2!='ye';
								var double=get.is.double(name2,true);
								if(double) return double.contains(group1);
								return group1==group2;
							}
						};
						if(!ui.selected.buttons.length){
							return ui.dialog.buttons.some(but=>{
								if(but==button) return false;
								return filterChoice(button.link,but.link);
							});
						}
						return filterChoice(ui.selected.buttons[0].link,button.link);
					};
					next.switchToAuto = function () {
						event.ai(target, list);
						ui.arena.classList.remove('selecting');
					};
				}
				"step 1"
				// 修复重新选将取消后报错
				if (result.buttons==undefined) {
					event.goto(3)
				} else {
					if (ui.cheat) {
						ui.cheat.close();
						delete ui.cheat;
					}
					if (ui.cheat2) {
						ui.cheat2.close();
						delete ui.cheat2;
					}
					if(result.buttons){
						var name1=result.buttons[0].link,name2=result.buttons[1].link;
						event.choosen=[name1,name2];
						if(get.is.double(name1,true)){
							if(!get.is.double(name2,true)) event._result={control:lib.character[name2][1]};
							else if(get.is.double(name1,true).removeArray(get.is.double(name2,true)).length==0||get.is.double(name2,true).removeArray(get.is.double(name1,true)).length==0) game.me.chooseControl(get.is.double(name2,true).filter(group=>get.is.double(name1,true).contains(group))).set('prompt','请选择你代表的势力').set('ai',()=>_status.event.controls.randomGet());
							else event._result={control:get.is.double(name1,true).find(group=>get.is.double(name2,true).contains(group))};
						}
						else if(lib.character[name1][1]=='ye'&&get.is.double(name2,true)) game.me.chooseControl(get.is.double(name2,true)).set('prompt','请选择副将代表的势力').set('ai',()=>_status.event.controls.randomGet());
					}
				}
				"step 2"
				if(result&&result.control) target.trueIdentity=result.control;
				if(event.choosen){
					lib.element.player.init.call(target,event.choosen[0],event.choosen[1],false);
					game.addRecentCharacter(event.choosen[0],event.choosen[1]);
					
					target.setIdentity(target.group);
					target.classList.add('unseen');
					target.classList.add('unseen2');
					if (target != game.me) {
						target.node.identity.firstChild.innerHTML = '猜';
						target.node.identity.dataset.color = 'unknown';
						target.node.identity.classList.add('guessing');
					}
					target.hiddenSkills = lib.character[target.name1][3].slice(0);
					var hiddenSkills2 = lib.character[target.name2][3];
					for (var j = 0; j < hiddenSkills2.length; j++) {
						target.hiddenSkills.add(hiddenSkills2[j]);
					}
					for (var j = 0; j < target.hiddenSkills.length; j++) {
						if (!lib.skill[target.hiddenSkills[j]]) {
							target.hiddenSkills.splice(j--, 1);
						}
					}
					target.group = 'unknown';
					target.sex = 'unknown';
					target.name1 = target.name;
					target.name = 'unknown';
					target.identity = 'unknown';
					target.node.name.show();
					target.node.name2.show();
					target._group = lib.character[target.name1][1];
					for (var j = 0; j < target.hiddenSkills.length; j++) {
						target.addSkillTrigger(target.hiddenSkills[j], true);
					}
				}
				
				/*
				event.list.remove(game.me.name1);
				event.list.remove(game.me.name2);
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=game.me){
						event.ai(game.players[i],game.getCharacterChoice(event.list,parseInt(get.config('choice_num'))),event.list);
					}
				}
				for(var i=0;i<game.players.length;i++){
					game.players[i].classList.add('unseen');
					game.players[i].classList.add('unseen2');
					_status.characterlist.remove(game.players[i].name);
					_status.characterlist.remove(game.players[i].name2);
					if(game.players[i]!=game.me){
						game.players[i].node.identity.firstChild.innerHTML='猜';
						game.players[i].node.identity.dataset.color='unknown';
						game.players[i].node.identity.classList.add('guessing');
					}
					game.players[i].hiddenSkills=lib.character[game.players[i].name1][3].slice(0);
					var hiddenSkills2=lib.character[game.players[i].name2][3];
					for(var j=0;j<hiddenSkills2.length;j++){
						game.players[i].hiddenSkills.add(hiddenSkills2[j]);
					}
					for(var j=0;j<game.players[i].hiddenSkills.length;j++){
						if(!lib.skill[game.players[i].hiddenSkills[j]]){
							game.players[i].hiddenSkills.splice(j--,1);
						}
					}
					game.players[i].group='unknown';
					game.players[i].sex='unknown';
					game.players[i].name1=game.players[i].name;
					game.players[i].name='unknown';
					game.players[i].identity='unknown';
					game.players[i].node.name.show();
					game.players[i].node.name2.show();
					for(var j=0;j<game.players[i].hiddenSkills.length;j++){
						game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j],true);
					}
				}
				*/
				"step 3"
				// 修复使用控制台多选武将重新选将对话框的显示问题
				// setTimeout(function () {
					ui.arena.classList.remove('choose-character');
				// }, 500);
			});
		},
	};
	
	// 隐藏武将
	// !lib.characterPack.mode_guozhan[i][4].contains('unseen')
	// !lib.character[i][4].contains('unseen')
	// 在武将-禁将里的武将
	// !lib.config.banned.contains(i)
	// AI禁选的武将
	// !lib.character[i][4].contains('forbidai')
	// !lib.config.forbidai.contains(i)
	// !lib.config.forbidai_user.contains(i)
	// 具体不参与统计的武将详见characterDisabled:function(i,libCharacter){函数return true
	// 主公武将
	// lib.characterPack.mode_guozhan[i][4].contains('zhu')
	// lib.character[i][4].contains('zhu')
	// 总武将包数
	// lib.config.all.characters.length
	// 总平凡武将A
	// lib.rank.rarity.junk
	// 总精品武将S
	// lib.rank.rarity.rare
	// 总史诗武将SS
	// lib.rank.rarity.epic
	// 总传说武将SSS
	// lib.rank.rarity.legend
	// 三国杀武将包（可自行于game/config.js中定义）
	// lib.config.all.sgscharacters
	game.wjtjgn = function(num) {
		// 总武将（当前模式）
		var listcharactertotal=[];
		// 性别（当前模式）
		var listmale=[];
		var listfemale=[];
		var listdouble=[];
		// 主公（当前模式）
		var listzhu=[];
		// 势力（当前模式）
		var listwei=[];
		var listshu=[];
		var listwu=[];
		var listqun=[];
		var listjin=[];
		var listshen=[];
		var listshuang=[];
		var listkey=[];
		var listwestern=[];
		var listye=[];
		// 武将评级（当前模式）
		var listjunk=[];
		var listcommon=[];
		var listrare=[];
		var listepic=[];
		var listlegend=[];
		// 护甲武将（当前模式）
		var listhujia=[];
		// 体力≠上限武将（当前模式）
		var listhpmax0=[];
		// 1上限武将（当前模式）
		var listhpmax1=[];
		// 2上限武将（当前模式）
		var listhpmax2=[];
		// 3上限武将（当前模式）
		var listhpmax3=[];
		// 4上限武将（当前模式）
		var listhpmax4=[];
		// 5上限武将（当前模式）
		var listhpmax5=[];
		// 6上限武将（当前模式）
		var listhpmax6=[];
		// 7上限武将（当前模式）
		var listhpmax7=[];
		// 8上限武将（当前模式）
		var listhpmax8=[];
		// >8上限武将（当前模式）
		var listhpmax9=[];
		// 当前模式禁将
		var bannedlistcharactertotal=lib.config.banned;
		// 总武将
		var listcharactertotal_all=[];
		// 总性别
		var listmale_all=[];
		var listfemale_all=[];
		var listdouble_all=[];
		// 总主公
		var listzhu_all=[];
		// 总势力
		var listwei_all=[];
		var listshu_all=[];
		var listwu_all=[];
		var listqun_all=[];
		var listjin_all=[];
		var listshen_all=[];
		var listshuang_all=[];
		var listkey_all=[];
		var listwestern_all=[];
		var listye_all=[];
		// 总武将评级
		var listjunk_all=[];
		var listcommon_all=[];
		var listrare_all=[];
		var listepic_all=[];
		var listlegend_all=[];
		// 护甲武将
		var listhujia_all=[];
		// 体力≠上限武将
		var listhpmax0_all=[];
		// 1上限武将
		var listhpmax1_all=[];
		// 2上限武将
		var listhpmax2_all=[];
		// 3上限武将
		var listhpmax3_all=[];
		// 4上限武将
		var listhpmax4_all=[];
		// 5上限武将
		var listhpmax5_all=[];
		// 6上限武将
		var listhpmax6_all=[];
		// 7上限武将
		var listhpmax7_all=[];
		// 8上限武将
		var listhpmax8_all=[];
		// >8上限武将
		var listhpmax9_all=[];
		// 总武将包
		var characterpacknametranslate=[];
		// 国战武将-君主武将
		var listguozhanjunzhu=[];
		// 隐藏的武将包
		var yincangcharacterpackname=[];
		// 总卡牌（当前模式）
		var listcardtotal=[];
		// 总卡牌包
		var cardpacknametranslate=[];
		// 隐藏的卡牌包
		var yincangcardpackname=[];
		
		
		// 武将（当前模式）
		// 国战模式
		if(lib.config.mode=='guozhan' && get.config('onlyguozhan')){
			for(var i in lib.characterPack.mode_guozhan){
				if(!lib.filter.characterDisabled(i)){
					listcharactertotal.push(i);
					if(lib.characterPack.mode_guozhan[i][0]=='male'){
						listmale.push(i);
					}
					if(lib.characterPack.mode_guozhan[i][0]=='female'){
						listfemale.push(i);
					}
					if(lib.characterPack.mode_guozhan[i][0]=='double'){
						listdouble.push(i);
					}
					if(lib.characterPack.mode_guozhan[i][4].contains('zhu')){
						listzhu.push(i);
					}
					if(get.is.double(i)){
						listshuang.push(i);
					} else {
						if(lib.characterPack.mode_guozhan[i][1]=='wei'){
							listwei.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='shu'){
							listshu.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='wu'){
							listwu.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='qun'){
							listqun.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='jin'){
							listjin.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='shen'){
							listshen.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='key'){
							listkey.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='western'){
							listwestern.push(i);
						}
						if(lib.characterPack.mode_guozhan[i][1]=='ye'){
							listye.push(i);
						}
					}
					if(game.getRarity(i)=='junk'){
						listjunk.push(i);
					}
					if(game.getRarity(i)=='common'){
						listcommon.push(i);
					}
					if(game.getRarity(i)=='rare'){
						listrare.push(i);
					}
					if(game.getRarity(i)=='epic'){
						listepic.push(i);
					}
					if(game.getRarity(i)=='legend'){
						listlegend.push(i);
					}
					if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
						var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
						if(list1.length == 3){
							listhujia.push(i);
						}
					}
					if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
						var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
						if(Number(list1[0]) != Number(list1[1])){
							listhpmax0.push(i);
						}
					}
					// 若为国战模式，且开启“使用国战武将”开关、十周年UI国战魔改开启、国战魔改不失效时，则勾玉改为阴阳鱼，武将体力以阴阳鱼为单位
					if((lib.config.extensions && lib.config.extensions.contains('十周年UI') && lib.config['extension_十周年UI_enable'] && lib.config['extension_十周年UI_guozhanmogai']) && !(lib.config.extensions && lib.config.extensions.contains('千幻聆音') && lib.config['extension_千幻聆音_enable']) && lib.characterGuozhanFilter.length<2){
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 1.5){
								listhpmax3.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 1.5){
								listhpmax3.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 2){
								listhpmax4.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 2){
								listhpmax4.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 2.5){
								listhpmax5.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 2.5){
								listhpmax5.push(i);
							}
						}
					} else {
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 1){
								listhpmax1.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 1){
								listhpmax1.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 2){
								listhpmax2.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 2){
								listhpmax2.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 3){
								listhpmax3.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 3){
								listhpmax3.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 4){
								listhpmax4.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 4){
								listhpmax4.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 5){
								listhpmax5.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 5){
								listhpmax5.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 6){
								listhpmax6.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 6){
								listhpmax6.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 7){
								listhpmax7.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 7){
								listhpmax7.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) == 8){
								listhpmax8.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] == 8){
								listhpmax8.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof ""){
							var list1 = lib.characterPack.mode_guozhan[i][2].split('/');
							if(Number(list1[1]) > 8){
								listhpmax9.push(i);
							}
						}
						if(typeof lib.characterPack.mode_guozhan[i][2] == typeof 0){
							if(lib.characterPack.mode_guozhan[i][2] > 8){
								listhpmax9.push(i);
							}
						}
					}
				}
			}
		} else {
			// 非国战模式
			for(var i in lib.character){
				if(!lib.filter.characterDisabled(i)){
					listcharactertotal.push(i);
					if(lib.character[i][0]=='male'){
						listmale.push(i);
					}
					if(lib.character[i][0]=='female'){
						listfemale.push(i);
					}
					if(lib.character[i][0]=='double'){
						listdouble.push(i);
					}
					if(lib.character[i][4].contains('zhu')){
						listzhu.push(i);
					}
					if(get.is.double(i)){
						listshuang.push(i);
					} else {
						if(lib.character[i][1]=='wei'){
							listwei.push(i);
						}
						if(lib.character[i][1]=='shu'){
							listshu.push(i);
						}
						if(lib.character[i][1]=='wu'){
							listwu.push(i);
						}
						if(lib.character[i][1]=='qun'){
							listqun.push(i);
						}
						if(lib.character[i][1]=='jin'){
							listjin.push(i);
						}
						if(lib.character[i][1]=='shen'){
							listshen.push(i);
						}
						if(lib.character[i][1]=='key'){
							listkey.push(i);
						}
						if(lib.character[i][1]=='western'){
							listwestern.push(i);
						}
						if(lib.character[i][1]=='ye'){
							listye.push(i);
						}
					}
					if(game.getRarity(i)=='junk'){
						listjunk.push(i);
					}
					if(game.getRarity(i)=='common'){
						listcommon.push(i);
					}
					if(game.getRarity(i)=='rare'){
						listrare.push(i);
					}
					if(game.getRarity(i)=='epic'){
						listepic.push(i);
					}
					if(game.getRarity(i)=='legend'){
						listlegend.push(i);
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(list1.length == 3){
							listhujia.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[0]) != Number(list1[1])){
							listhpmax0.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 1){
							listhpmax1.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 1){
							listhpmax1.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 2){
							listhpmax2.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 2){
							listhpmax2.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 3){
							listhpmax3.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 3){
							listhpmax3.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 4){
							listhpmax4.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 4){
							listhpmax4.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 5){
							listhpmax5.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 5){
							listhpmax5.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 6){
							listhpmax6.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 6){
							listhpmax6.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 7){
							listhpmax7.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 7){
							listhpmax7.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) == 8){
							listhpmax8.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] == 8){
							listhpmax8.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof ""){
						var list1 = lib.character[i][2].split('/');
						if(Number(list1[1]) > 8){
							listhpmax9.push(i);
						}
					}
					if(typeof lib.character[i][2] == typeof 0){
						if(lib.character[i][2] > 8){
							listhpmax9.push(i);
						}
					}
				}
			}
		}
		
		// 主公-性别（当前模式）
		var listzhumale=listzhu.filter(item=>listmale.includes(item));
		var listzhufemale=listzhu.filter(item=>listfemale.includes(item));
		var listzhudouble=listzhu.filter(item=>listdouble.includes(item));
		
		// 势力-男性（当前模式）
		var listweimale=listwei.filter(item=>listmale.includes(item));
		var listshumale=listshu.filter(item=>listmale.includes(item));
		var listwumale=listwu.filter(item=>listmale.includes(item));
		var listqunmale=listqun.filter(item=>listmale.includes(item));
		var listjinmale=listjin.filter(item=>listmale.includes(item));
		var listshenmale=listshen.filter(item=>listmale.includes(item));
		var listshuangmale=listshuang.filter(item=>listmale.includes(item));
		var listkeymale=listkey.filter(item=>listmale.includes(item));
		var listwesternmale=listwestern.filter(item=>listmale.includes(item));
		var listyemale=listye.filter(item=>listmale.includes(item));
		
		// 势力-女性（当前模式）
		var listweifemale=listwei.filter(item=>listfemale.includes(item));
		var listshufemale=listshu.filter(item=>listfemale.includes(item));
		var listwufemale=listwu.filter(item=>listfemale.includes(item));
		var listqunfemale=listqun.filter(item=>listfemale.includes(item));
		var listjinfemale=listjin.filter(item=>listfemale.includes(item));
		var listshenfemale=listshen.filter(item=>listfemale.includes(item));
		var listshuangfemale=listshuang.filter(item=>listfemale.includes(item));
		var listkeyfemale=listkey.filter(item=>listfemale.includes(item));
		var listwesternfemale=listwestern.filter(item=>listfemale.includes(item));
		var listyefemale=listye.filter(item=>listfemale.includes(item));
		
		// 势力-双性（当前模式）
		var listweidouble=listwei.filter(item=>listdouble.includes(item));
		var listshudouble=listshu.filter(item=>listdouble.includes(item));
		var listwudouble=listwu.filter(item=>listdouble.includes(item));
		var listqundouble=listqun.filter(item=>listdouble.includes(item));
		var listjindouble=listjin.filter(item=>listdouble.includes(item));
		var listshendouble=listshen.filter(item=>listdouble.includes(item));
		var listshuangdouble=listshuang.filter(item=>listdouble.includes(item));
		var listkeydouble=listkey.filter(item=>listdouble.includes(item));
		var listwesterndouble=listwestern.filter(item=>listdouble.includes(item));
		var listyedouble=listye.filter(item=>listdouble.includes(item));
		
		// 势力-主公（当前模式）
		var listweizhu=listwei.filter(item=>listzhu.includes(item));
		var listshuzhu=listshu.filter(item=>listzhu.includes(item));
		var listwuzhu=listwu.filter(item=>listzhu.includes(item));
		var listqunzhu=listqun.filter(item=>listzhu.includes(item));
		var listjinzhu=listjin.filter(item=>listzhu.includes(item));
		var listshenzhu=listshen.filter(item=>listzhu.includes(item));
		var listshuangzhu=listshuang.filter(item=>listzhu.includes(item));
		var listkeyzhu=listkey.filter(item=>listzhu.includes(item));
		var listwesternzhu=listwestern.filter(item=>listzhu.includes(item));
		// var listyezhu=listye.filter(item=>listzhu.includes(item));
		
		// 武将（总）
		for(var k in lib.characterPack){
			for(var i in lib.characterPack[k]){
				if(!(lib.characterPack[k][i][4] && lib.characterPack[k][i][4].contains('unseen'))){
					listcharactertotal_all.push(i);
					if(lib.characterPack[k][i][0]=='male'){
						listmale_all.push(i);
					}
					if(lib.characterPack[k][i][0]=='female'){
						listfemale_all.push(i);
					}
					if(lib.characterPack[k][i][0]=='double'){
						listdouble_all.push(i);
					}
					if(lib.characterPack[k][i][4] && lib.characterPack[k][i][4].contains('zhu')){
						listzhu_all.push(i);
					}
					if(get.is.double(i)){
						listshuang_all.push(i);
					} else {
						if(lib.characterPack[k][i][1]=='wei'){
							listwei_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='shu'){
							listshu_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='wu'){
							listwu_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='qun'){
							listqun_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='jin'){
							listjin_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='shen'){
							listshen_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='key'){
							listkey_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='western'){
							listwestern_all.push(i);
						}
						if(lib.characterPack[k][i][1]=='ye'){
							listye_all.push(i);
						}
					}
					if(game.getRarity(i)=='junk'){
						listjunk_all.push(i);
					}
					if(game.getRarity(i)=='common'){
						listcommon_all.push(i);
					}
					if(game.getRarity(i)=='rare'){
						listrare_all.push(i);
					}
					if(game.getRarity(i)=='epic'){
						listepic_all.push(i);
					}
					if(game.getRarity(i)=='legend'){
						listlegend_all.push(i);
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(list1.length == 3){
							listhujia_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[0]) != Number(list1[1])){
							listhpmax0_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 1){
							listhpmax1_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 1){
							listhpmax1_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 2){
							listhpmax2_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 2){
							listhpmax2_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 3){
							listhpmax3_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 3){
							listhpmax3_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 4){
							listhpmax4_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 4){
							listhpmax4_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 5){
							listhpmax5_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 5){
							listhpmax5_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 6){
							listhpmax6_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 6){
							listhpmax6_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 7){
							listhpmax7_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 7){
							listhpmax7_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) == 8){
							listhpmax8_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] == 8){
							listhpmax8_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof ""){
						var list1 = lib.characterPack[k][i][2].split('/');
						if(Number(list1[1]) > 8){
							listhpmax9_all.push(i);
						}
					}
					if(typeof lib.characterPack[k][i][2] == typeof 0){
						if(lib.characterPack[k][i][2] > 8){
							listhpmax9_all.push(i);
						}
					}
				}
			}
		}
		
		// 势力-男性（总）
		var listweimale_all=listwei_all.filter(item=>listmale_all.includes(item));
		var listshumale_all=listshu_all.filter(item=>listmale_all.includes(item));
		var listwumale_all=listwu_all.filter(item=>listmale_all.includes(item));
		var listqunmale_all=listqun_all.filter(item=>listmale_all.includes(item));
		var listjinmale_all=listjin_all.filter(item=>listmale_all.includes(item));
		var listshenmale_all=listshen_all.filter(item=>listmale_all.includes(item));
		var listshuangmale_all=listshuang_all.filter(item=>listmale_all.includes(item));
		var listkeymale_all=listkey_all.filter(item=>listmale_all.includes(item));
		var listwesternmale_all=listwestern_all.filter(item=>listmale_all.includes(item));
		var listyemale_all=listye_all.filter(item=>listmale_all.includes(item));
		
		// 势力-女性（总）
		var listweifemale_all=listwei_all.filter(item=>listfemale_all.includes(item));
		var listshufemale_all=listshu_all.filter(item=>listfemale_all.includes(item));
		var listwufemale_all=listwu_all.filter(item=>listfemale_all.includes(item));
		var listqunfemale_all=listqun_all.filter(item=>listfemale_all.includes(item));
		var listjinfemale_all=listjin_all.filter(item=>listfemale_all.includes(item));
		var listshenfemale_all=listshen_all.filter(item=>listfemale_all.includes(item));
		var listshuangfemale_all=listshuang_all.filter(item=>listfemale_all.includes(item));
		var listkeyfemale_all=listkey_all.filter(item=>listfemale_all.includes(item));
		var listwesternfemale_all=listwestern_all.filter(item=>listfemale_all.includes(item));
		var listyefemale_all=listye_all.filter(item=>listfemale_all.includes(item));
		
		// 总武将包数
		for(var i in lib.characterPack){
			characterpacknametranslate.push(lib.translate[i + '_character_config']);
		}
		
		// 国战武将-君主武将数
		if(lib.config.mode=='guozhan'){
			listguozhanjunzhu=lib.characterSort.mode_guozhan.guozhan_jun;
		}
		
		// 隐藏的武将包数
		for(i=0;i<lib.config.hiddenCharacterPack.length;i++){
			yincangcharacterpackname.push(lib.config.hiddenCharacterPack[i]);
		}
		
		// 总卡牌数（当前模式）
		for(j=0;j<lib.card.list.length;j++){
			listcardtotal.push(lib.card.list[j]);
		}
		
		// 总卡牌包数
		for(var j in lib.cardPack){
			cardpacknametranslate.push(lib.translate[j + '_card_config']);
		}
		
		// 隐藏的卡牌包数
		for(j=0;j<lib.config.hiddenCardPack.length;j++){
			yincangcardpackname.push(lib.config.hiddenCardPack[j]);
		}
		
		// 武将及卡牌统计功能
		if(num==0){
			var str=
			'PART Ⅰ 武将统计'+
			'\n'+
			'◆总武将数（当前模式）：'+listcharactertotal.length+
			' | '+
			'◇总武将数：'+listcharactertotal_all.length+
			'\n---\n'+
			'◆男性武将：'+listmale.length+
			' | '+
			'◆女性武将：'+listfemale.length+
			' | '+
			'◆双性武将：'+listdouble.length+
			'\n'+
			'◇总男性武将：'+listmale_all.length+
			' | '+
			'◇总女性武将：'+listfemale_all.length+
			' | '+
			'◇总双性武将：'+listdouble_all.length+
			'\n---\n'+
			'◆主公武将：'+listzhu.length+
			' （男性：'+listzhumale.length+'、女性：'+listzhufemale.length+'、双性：'+listzhudouble.length+'）'+
			'\n'+
			'◇总主公武将：'+listzhu_all.length+
			'\n---\n'+
			'◆魏势力武将：'+listwei.length+
			' （男性：'+listweimale.length+'、女性：'+listweifemale.length+'、双性：'+listweidouble.length+'，主公：'+listweizhu.length+'）'+
			'\n'+
			'◆蜀势力武将：'+listshu.length+
			' （男性：'+listshumale.length+'、女性：'+listshufemale.length+'、双性：'+listshudouble.length+'，主公：'+listshuzhu.length+'）'+
			'\n'+
			'◆吴势力武将：'+listwu.length+
			' （男性：'+listwumale.length+'、女性：'+listwufemale.length+'、双性：'+listwudouble.length+'，主公：'+listwuzhu.length+'）'+
			'\n'+
			'◆群势力武将：'+listqun.length+
			' （男性：'+listqunmale.length+'、女性：'+listqunfemale.length+'、双性：'+listqundouble.length+'，主公：'+listqunzhu.length+'）'+
			'\n'+
			'◆晋势力武将：'+listjin.length+
			' （男性：'+listjinmale.length+'、女性：'+listjinfemale.length+'、双性：'+listjindouble.length+'，主公：'+listjinzhu.length+'）'+
			'\n'+
			'◆神势力武将：'+listshen.length+
			' （男性：'+listshenmale.length+'、女性：'+listshenfemale.length+'、双性：'+listshendouble.length+'，主公：'+listshenzhu.length+'）'+
			'\n'+
			'◆双势力武将：'+listshuang.length+
			' （男性：'+listshuangmale.length+'、女性：'+listshuangfemale.length+'、双性：'+listshuangdouble.length+'，主公：'+listshuangzhu.length+'）'+
			'\n'+
			'◆键势力武将：'+listkey.length+
			' （男性：'+listkeymale.length+'、女性：'+listkeyfemale.length+'、双性：'+listkeydouble.length+'，主公：'+listkeyzhu.length+'）'+
			'\n'+
			'◆西势力武将：'+listwestern.length+
			' （男性：'+listwesternmale.length+'、女性：'+listwesternfemale.length+'、双性：'+listwesterndouble.length+'，主公：'+listwesternzhu.length+'）'+
			'\n'+
			'◆野势力武将（国战野心家）：'+listye.length+
			' （男性：'+listyemale.length+'、女性：'+listyefemale.length+'、双性：'+listyedouble.length+'）'+
			'\n---\n'+
			'◇总魏势力武将：'+listwei_all.length+
			'\n'+
			'◇总蜀势力武将：'+listshu_all.length+
			'\n'+
			'◇总吴势力武将：'+listwu_all.length+
			'\n'+
			'◇总群势力武将：'+listqun_all.length+
			'\n'+
			'◇总晋势力武将：'+listjin_all.length+
			'\n'+
			'◇总神势力武将：'+listshen_all.length+
			'\n'+
			'◇总双势力武将：'+listshuang_all.length+
			'\n'+
			'◇总键势力武将：'+listkey_all.length+
			'\n'+
			'◇总西势力武将：'+listwestern_all.length+
			'\n'+
			'◇总野势力武将（国战野心家）：'+listye_all.length+
			'\n---\n'+
			'◆当前模式禁将数（武将-禁将里的武将）：'+bannedlistcharactertotal.length+
			'\n---\n'+
			'◆当前模式平凡武将A：'+listjunk.length+
			' | '+
			'◇总平凡武将A：'+listjunk_all.length+
			'\n'+
			'◆当前模式普通武将A+：'+listcommon.length+
			' | '+
			'◇总普通武将A+：'+listcommon_all.length+
			'\n'+
			'◆当前模式精品武将S：'+listrare.length+
			' | '+
			'◇总精品武将S：'+listrare_all.length+
			'\n'+
			'◆当前模式史诗武将SS：'+listepic.length+
			' | '+
			'◇总史诗武将SS：'+listepic_all.length+
			'\n'+
			'◆当前模式传说武将SSS：'+listlegend.length+
			' | '+
			'◇总传说武将SSS：'+listlegend_all.length+
			'\n'+
			'注：若未为武将评级，则默认为普通武将A+'+
			'\n---\n'+
			'◆当前模式护甲武将：'+listhujia.length+
			' | '+
			'◇总护甲武将：'+listhujia_all.length+
			'\n'+
			'◆当前模式体力≠上限武将：'+listhpmax0.length+
			' | '+
			'◇总体力≠上限武将：'+listhpmax0_all.length+
			'\n'+
			'◆当前模式1上限武将：'+listhpmax1.length+
			' | '+
			'◇总1上限武将：'+listhpmax1_all.length+
			'\n'+
			'◆当前模式2上限武将：'+listhpmax2.length+
			' | '+
			'◇总2上限武将：'+listhpmax2_all.length+
			'\n'+
			'◆当前模式3上限武将：'+listhpmax3.length+
			' | '+
			'◇总3上限武将：'+listhpmax3_all.length+
			'\n'+
			'◆当前模式4上限武将：'+listhpmax4.length+
			' | '+
			'◇总4上限武将：'+listhpmax4_all.length+
			'\n'+
			'◆当前模式5上限武将：'+listhpmax5.length+
			' | '+
			'◇总5上限武将：'+listhpmax5_all.length+
			'\n'+
			'◆当前模式6上限武将：'+listhpmax6.length+
			' | '+
			'◇总6上限武将：'+listhpmax6_all.length+
			'\n'+
			'◆当前模式7上限武将：'+listhpmax7.length+
			' | '+
			'◇总7上限武将：'+listhpmax7_all.length+
			'\n'+
			'◆当前模式8上限武将：'+listhpmax8.length+
			' | '+
			'◇总8上限武将：'+listhpmax8_all.length+
			'\n'+
			'◆当前模式>8上限武将：'+listhpmax9.length+
			' | '+
			'◇总>8上限武将：'+listhpmax9_all.length+
			'\n'+
			'注：若为国战模式，且开启“使用国战武将”开关、十周年UI国战魔改开启、国战魔改不失效时，则勾玉改为阴阳鱼，武将体力以阴阳鱼为单位（当前模式武将数统计时，3上限→1.5上限、4上限→2上限、5上限→2.5上限，但会造成总武将数统计混乱）'+
			'\n\n'+
			'PART Ⅱ 武将包统计'+
			'\n'+
			'◇总武将包数：'+characterpacknametranslate.length+
			' | '+
			'◇隐藏的武将包数：'+yincangcharacterpackname.length+
			'\n'+
			'◇国战武将-君主武将数[国战模式才能正确统计]：'+listguozhanjunzhu.length+
			'\n\n'+
			'PART Ⅲ 卡牌统计'+
			'\n'+
			'◆总卡牌数（当前模式）：'+listcardtotal.length+
			'\n\n'+
			'PART Ⅳ 卡牌包统计'+
			'\n'+
			'◇总卡牌包数：'+cardpacknametranslate.length+
			' | '+
			'◇隐藏的卡牌包数：'+yincangcardpackname.length;
			alert(str);
			game.print(str);
			console.log(str);
		}
		
		// 当前模式禁将
		if(num>0){
			if(num<=41){
				var listarr=[[],listcharactertotal,listmale,listfemale,listdouble,listzhu,listwei,listweimale,listweifemale,listshu,listshumale,listshufemale,listwu,listwumale,listwufemale,listqun,listqunmale,listqunfemale,listjin,listjinmale,listjinfemale,listshen,listshuang,listkey,listwestern,listye,listjunk,listcommon,listrare,listepic,listlegend,listhujia,listhpmax0,listhpmax1,listhpmax2,listhpmax3,listhpmax4,listhpmax5,listhpmax6,listhpmax7,listhpmax8,listhpmax9];
				var unionArr= [...new Set([...bannedlistcharactertotal,...listarr[num]])];
				game.saveConfig(lib.config.mode+'_banned',unionArr);
				game.reload();
			}
			if(num>41){
				var listarr_all=[[],listcharactertotal_all,listmale_all,listfemale_all,listdouble_all,listzhu_all,listwei_all,listweimale_all,listweifemale_all,listshu_all,listshumale_all,listshufemale_all,listwu_all,listwumale_all,listwufemale_all,listqun_all,listqunmale_all,listqunfemale_all,listjin_all,listjinmale_all,listjinfemale_all,listshen_all,listshuang_all,listkey_all,listwestern_all,listye_all,listjunk_all,listcommon_all,listrare_all,listepic_all,listlegend_all,listhujia_all,listhpmax0_all,listhpmax1_all,listhpmax2_all,listhpmax3_all,listhpmax4_all,listhpmax5_all,listhpmax6_all,listhpmax7_all,listhpmax8_all,listhpmax9_all];
				var arrDiffer= bannedlistcharactertotal.filter(item=>!listarr_all[num-41].includes(item));
				game.saveConfig(lib.config.mode+'_banned',arrDiffer);
				game.reload();
			}
		}
		
	};
	
	// 自写功能
	// 将控制台命令代码写入扩展，即函数内的代码可拷贝后于控制台输入执行
	game.zxgn = function(num) {
		// 解除当前游戏模式禁将（现改为解除当前模式禁将-解除全部禁将）
		// if(num==-1){
			// var list=[];game.saveConfig(lib.config.mode+'_banned',list);
		// }
		
		// 点击获得一个额外的回合
		if(num==0){
			game.me.insertPhase();
		}
		
		if(num==1){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].classList.add('turnedover');
			}
			game.me.classList.remove('turnedover');
		}
		if(num==2){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].classList.remove('turnedover');
			}
		}
		if(num==3){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].classList.add('linked2');
			}
			game.me.classList.remove('linked2');
		}
		if(num==4){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].classList.remove('linked2');
			}
		}
		if(num==5){
			var list=[];game.saveConfig('recentCharacter',list,true);
		}
		if(num==6){
			var list=[];game.saveConfig('favouriteCharacter',list);
		}
		if(num==7){
			if(lib.config.mode=='boss'){
				var cur;
				for (var i = 0; i < game.players.length; i++) {
					cur = game.players[i];
					if (!cur.node.seat) cur.node.seat = decadeUI.element.create('seat', cur);
					cur.node.seat.innerHTML = get.cnNumber(get.distance(game.boss, cur, 'absolute') + 1, true);
				}
			}
		}
		if(num==8){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].setNickname("");
			}
		}
		if(num==9){
			var emo0=['guojia_emotion','shibing_emotion','xiaojiu_emotion','xiaokuo_emotion','xiaosha_emotion','xiaotao_emotion','xiaowu_emotion','zhenji_emotion'];
			var num0;var num1;
			var emo=emo0.randomGet();
			if(emo=='guojia_emotion'||'xiaojiu_emotion'||'xiaosha_emotion'||'xiaotao_emotion'||'zhenji_emotion'){num0=20;}
			if(emo=='shibing_emotion'){num0=15;}
			if(emo=='xiaowu_emotion'){num0=14;}
			if(emo=='xiaokuo_emotion'){num0=8;}
			num1=Math.floor(Math.random()*num0+1);
			setTimeout(function(){
				// “我”（玩家）发送
				// game.me.emotion(emo,num1);
				// 场上随机一角色发送
				game.players.randomGet().emotion(emo,num1);
			},1000);
		}
		if(num==10){
			var list=lib.quickVoice.randomGet();
			setTimeout(function(){
				// “我”（玩家）发送
				// game.me.chat(list);
				// 场上随机一角色发送
				game.players.randomGet().chat(list);
			},1000);
		}
		if(num==11){
			game.over(true);
		}
		if(num==12){
			game.over(false);
		}
		if(num==13){
			game.over('平局');
		}
		if(num==14){
			if (ui.coin!=undefined) {
				game.changeCoin(999);
			}
		}
		if(num==15){
			if (ui.coin!=undefined) {
				game.changeCoin(-999);
			}
		}
		if(num==16){
			if (ui.coin!=undefined) {
				lib.config.coin=999;
				// 即时生效
				var str;
				if (lib.config.coin_display_playpackconfig == "text") {
					str =
						"<span>" +
						lib.config.coin +
						"</span><span>金</span>";
				} else {
					str =
						'<span style="position:absolute">㉤</span><span style="margin-left:18px;font-family:xinwei;line-height:10px">' +
						lib.config.coin +
						"</span>";
				}
				ui.coin.innerHTML = str;
			}
		}
		if(num==17){
			if (ui.coin!=undefined) {
				lib.config.coin=Infinity;
				// 即时生效
				var str;
				if (lib.config.coin_display_playpackconfig == "text") {
					str =
						"<span>" +
						lib.config.coin +
						"</span><span>金</span>";
				} else {
					str =
						'<span style="position:absolute">㉤</span><span style="margin-left:18px;font-family:xinwei;line-height:10px">' +
						lib.config.coin +
						"</span>";
				}
				ui.coin.innerHTML = str;
			}
		}
		if(num==18){
			if (ui.money!=undefined) {
				game.changeDust(999);
			}
		}
		if(num==19){
			if (ui.money!=undefined) {
				game.changeDust(-999);
			}
		}
		if(num==20){
			if (ui.money!=undefined) {
				game.data.dust=999;
				game.saveData();
				// 即时生效
				ui.money.childNodes[1].innerHTML=game.data.dust;
			}
		}
		if(num==21){
			if (ui.money!=undefined) {
				game.data.dust=Infinity;
				game.saveData();
				// 即时生效
				ui.money.childNodes[1].innerHTML=game.data.dust;
			}
		}
		if(num==22){
			if (ui.money!=undefined) {
				game.changeMoney(999);
			}
		}
		if(num==23){
			if (ui.money!=undefined) {
				game.changeMoney(-999);
			}
		}
		if(num==24){
			if (ui.money!=undefined) {
				game.data.money=999;
				game.saveData();
				// 即时生效
				ui.money.lastChild.innerHTML=game.data.money;
			}
		}
		if(num==25){
			if (ui.money!=undefined) {
				game.data.money=Infinity;
				game.saveData();
				// 即时生效
				ui.money.lastChild.innerHTML=game.data.money;
			}
		}
		if(num==26){
			window.location.reload();
		}
		if(num==27){
			game.saveConfig('version','1.9.1');
			game.reload();
		}
		if(num==28){
			var str=navigator.appVersion;
			alert(str);
			game.print(str);
			console.log(str);
		}
		if(num==29){
			if (!lib.device) {
				lib.node.debug();
			}
		}
		
		// 游戏模式
		if(num==501){
			for (var i = 0; i < game.players.length; i++) {
				if(game.players[i]!=game.me) {
					var myhp=game.me.hp;
					var mymaxhp=game.me.maxHp;
					var mygroup=game.me.group;
					
					// bug修复：更换武将牌后AI没了、临时修复谋攻篇模式bug
					var gamePlayersAI=game.players[i].ai;
					if (get.config('identity_mode')=='stratagem') {
						var gamePlayerszhibi=game.players[i].storage.zhibi;
						var gamePlayersstratagemexpose=game.players[i].storage.stratagem_expose;
					}
					game.players[i].uninit();
					game.players[i].ai=gamePlayersAI;
					if (get.config('identity_mode')=='stratagem') {
						game.players[i].storage.zhibi=gamePlayerszhibi;
						game.players[i].storage.stratagem_expose=gamePlayersstratagemexpose;
					}
					game.players[i].init(game.me.name1,game.me.name2);
					if (get.config('identity_mode')=='stratagem') {
						if (game.players[i].identity == "zhu") game.players[i].addSkill("stratagem_monarchy");
						if (game.players[i].identity == "fan") game.players[i].addSkill("stratagem_revitalization");
					}
					
					game.players[i].hp=myhp;
					game.players[i].maxHp=mymaxhp;
					game.players[i].changeGroup(mygroup);
					game.players[i].update();
				}
			}
		}
		if(num==502){
			for (var i = 0; i < game.players.length; i++) {
				if(game.players[i]!=game.me) game.players[i].clearSkills();
			}
		}
		if(num==503){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].clearSkills();
			}
		}
		if(num==504){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].goMad();
			}
			game.me.unMad();
		}
		if(num==505){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].unMad();
			}
		}
		if(num==506){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('qinggang2');
				game.players[i].markSkill('qinggang2');
			}
			game.me.removeSkill('qinggang2');
			game.me.unmarkSkill('qinggang2');
		}
		if(num==507){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('qinggang2');
				game.players[i].markSkill('qinggang2');
			}
		}
		if(num==508){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('qinggang2');
				game.players[i].unmarkSkill('qinggang2');
			}
		}
		if(num==509){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('fengyin');
			}
			game.me.removeSkill('fengyin');
		}
		if(num==510){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('fengyin');
			}
		}
		if(num==511){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('fengyin');
			}
		}
		if(num==512){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('baiban');
			}
			game.me.removeSkill('baiban');
		}
		if(num==513){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].addSkill('baiban');
			}
		}
		if(num==514){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('baiban');
			}
		}
		if(num==515){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('qianxing');
			}
			game.me.addSkill('qianxing');
		}
		if(num==516){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('qianxing');
			}
		}
		if(num==517){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('mianyi');
			}
			game.me.addSkill('mianyi');
		}
		if(num==518){
			for (var i = 0; i < game.players.length; i++) {
				game.players[i].removeSkill('mianyi');
			}
		}
		
		// 禁将功能
		if(num==1001){
			for(var i in lib.mode){var list=[];game.saveConfig(i+'_banned',list);}
		}
		if(num==1002){
			for(var i in lib.mode){if(i!=lib.config.mode){var list=[];game.saveConfig(i+'_banned',list);}}
		}
		if(num==1003){
			for(var i in lib.mode){if(i!=lib.config.mode){var list=lib.config.banned;game.saveConfig(i+'_banned',list);}}
		}
		if(num==1004){
			var list=[];game.saveConfig('forbidai_user',list);
		}
		if(num==1005){
			var bannedlistcharactertotal=lib.config.banned;
			var list_jj=[];
			for (var i = 0; i < game.players.length; i++) {
				var name1=game.players[i].name1;
				var name2=game.players[i].name2;
				list_jj.push(name1);
				list_jj.push(name2);
			}
			var unionArr= [...new Set([...bannedlistcharactertotal,...list_jj])];
			game.saveConfig(lib.config.mode+'_banned',unionArr);
		}
		if(num==1006){
			var bannedlistcharactertotal=lib.config.banned;
			var list_jj=[];
			for (var i = 0; i < game.players.length; i++) {
				var name1=game.players[i].name1;
				var name2=game.players[i].name2;
				list_jj.push(name1);
				list_jj.push(name2);
			}
			var arrDiffer= bannedlistcharactertotal.filter(item=>!list_jj.includes(item));
			game.saveConfig(lib.config.mode+'_banned',arrDiffer);
		}
		if(num==1007){
			var bannedlistcharactertotal=lib.config.banned;
			var list_jj=[];
			for (var i = 0; i < game.players.length; i++) {
				if(game.players[i]!=game.me){
					var name1=game.players[i].name1;
					var name2=game.players[i].name2;
					list_jj.push(name1);
					list_jj.push(name2);
				}
			}
			var unionArr= [...new Set([...bannedlistcharactertotal,...list_jj])];
			game.saveConfig(lib.config.mode+'_banned',unionArr);
		}
		if(num==1008){
			var bannedlistcharactertotal=lib.config.banned;
			var list_jj=[];
			for (var i = 0; i < game.players.length; i++) {
				if(game.players[i]!=game.me){
					var name1=game.players[i].name1;
					var name2=game.players[i].name2;
					list_jj.push(name1);
					list_jj.push(name2);
				}
			}
			var arrDiffer= bannedlistcharactertotal.filter(item=>!list_jj.includes(item));
			game.saveConfig(lib.config.mode+'_banned',arrDiffer);
		}
		
		// 开关扩展功能
		if(num==1501){
			game.saveConfig('plays',[]);
			
			var extname=['搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1502){
			game.saveConfig('plays',['boss','cardpile','coin','wuxing']);
			
			var extname=['搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
		if(num==1503){
			game.saveConfig('plays',[]);
			
			game.reload();
		}
		if(num==1504){
			game.saveConfig('plays',['boss','cardpile','coin','wuxing']);
			
			game.reload();
		}
		if(num==1505){
			var extname=['十周年UI','手杀ui'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1506){
			var extname=['十周年UI','手杀ui'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
		if(num==1507){
			var extname=['十周年UI','手杀ui','搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1508){
			var extname=['十周年UI','手杀ui','搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
		if(num==1509){
			game.saveConfig('plays',[]);
			
			var extname=['十周年UI','手杀ui'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1510){
			game.saveConfig('plays',['boss','cardpile','coin','wuxing']);
			
			var extname=['十周年UI','手杀ui'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
		if(num==1511){
			game.saveConfig('plays',[]);
			
			var extname=['十周年UI','手杀ui','搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1512){
			game.saveConfig('plays',['boss','cardpile','coin','wuxing']);
			
			var extname=['十周年UI','手杀ui','搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
		if(num==1513){
			var extname=['搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
			}
			game.reload();
		}
		if(num==1514){
			var extname=['搬运自用'];
			for(var i=0;i<lib.config.extensions.length;i++){
				if(!extname.includes(lib.config.extensions[i])) game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
			}
			game.reload();
		}
	};
	
	// 下面是一键导入的代码（搬运自特效测试扩展，删除原版导入助手的功能，已征得永远的萌新的修改许可）
	// 原理：根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启
	game.yjdrcqgn = function(bool) {
		var arr;
		game.getFileList("extension", function(fold, file) {
			arr = Array.from(fold);
			var f = function(array, ck) {
				if (!Array.isArray(array) || array.length == 0) return;
				var fail = [],
					rean = false;
				while (array.length) {
					var obj = array.shift();
					// 新增当扩展文件夹内缺少extension.js时报错提示
					if (lib.device) {
						window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + 'extension/' + obj + '/' + 'extension.js', function(entry) {
							// alert('导入成功');
						}, function() {
							// 手机端用window.resolveLocalFileSystemURL无法检测文件是否存在，故更改了弹窗内容
							alert("检测到扩展文件夹内缺少 extension.js 文件" + "\n\r请检查扩展文件夹的文件结构是否正确！");
							// alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
						});
					} else {
						// 非手机端，修复在非windows的平台上有问题的bug，感谢リいコしロ的指导
						if (!lib.node.fs.existsSync(__dirname + '/extension/' + obj + '/' + 'extension.js')) {
							alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
							continue;
						}
					}
					if (["coin", "boss", "wuxing", "cardpile"].contains(obj)) continue;
					if (ck.indexOf(obj) == -1) {
						fail.add(obj);
						continue;
					}
					if (lib.config.extensions.indexOf(obj) > -1) continue;
					rean = true;
					lib.config.extensions.add(obj);
					game.saveConfig('extension_' + obj + '_enable', true);
				}
				if (fail.length == 0 && rean) {
					game.saveConfig('extensions', lib.config.extensions);
					if (bool == true) game.reload();
				}
			};
			f(arr, Array.from(fold));
		});
	};
	
	// 点击可调整手牌和牌堆功能
	game.tiaozhengshoupai = function () {
		var next = game.createEvent('tiaozhengshoupai', false);
		next.target = this;
		next.player = game.me;
		next.setContent(function () {
			// 搬运自上方点击可调整手牌和牌堆功能的content: function () {
			'step 0'
			var oldconfiglist = [game.filterPlayer().length,lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']];
			event.configbackup = oldconfiglist;
			
			var list = [];
			
			if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']==false) {
				list.push([get.translation(game.me.name)+"的手牌", game.me.getCards("h")]);
			} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
				for (var target of game.filterPlayer().sortBySeat()) {
					if(target!=game.me) list.push([get.translation(target.name)+"的手牌", target.getCards("h")]);
				}
			} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
				for (var target of game.filterPlayer().sortBySeat()) {
					list.push([get.translation(target.name)+"的手牌", target.getCards("h")]);
				}
			}
			
			if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) {
				var uicardPile = [];
				for (var m = 0; m < ui.cardPile.childElementCount; m++) {
					var cardPile = ui.cardPile.childNodes[m];
					uicardPile.push(cardPile);
				}
			}
			
			if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
				var uidiscardPile = [];
				for (var n = 0; n < ui.discardPile.childElementCount; n++) {
					var discardPile = ui.discardPile.childNodes[n];
					uidiscardPile.push(discardPile);
				}
			}
			
			if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) list.push(["牌堆（顺序为牌堆顶→牌堆底）", uicardPile]);
			if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) list.push(["弃牌堆（顺序为弃牌堆顶→弃牌堆顶底）", uidiscardPile.reverse()]);
			
			var next = player.chooseToMove("请调整手牌和牌堆（若对话框显示不完整，可下滑操作）", true);
			next.set("list", list);
			next.set("processAI", function (list) {
				event.result = { bool: false };
			});
			'step 1'
			if(result.bool) {
				var newconfiglist = [game.filterPlayer().length,lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd'],lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']];
				var resultbool = false;
				
				for (var i = 0; i < newconfiglist.length; i++) {
					if(event.configbackup[i] !== newconfiglist[i]) {
						resultbool = true;
						break;
					}
				}
				
				// 场上角色数发生变化后/操作过程中改变设置后不继续执行代码
				if(resultbool) {
					event.goto(2);
				} else {
					var moved = result.moved;
					
					var cards = {};
					for (var i = 0; i < moved.length; i++) {
						cards[i] = moved[i];
					}
					
					if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']==false) {
						var hs = cards[0].reverse();
						hs.forEach(i => i.goto(ui.special));
						game.me.directgain(hs, false);
					} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']==false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
						var players = game.filterPlayer().sortBySeat();
						for (var j = 1; j < players.length; j++) {
							var hs = cards[j-1].reverse();
							hs.forEach(i => i.goto(ui.special));
							players[j].directgain(hs, false);
						}
					} else if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_wj']!=false && lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qtjs']!=false) {
						var players = game.filterPlayer().sortBySeat();
						for (var j = 0; j < players.length; j++) {
							var hs = cards[j].reverse();
							hs.forEach(i => i.goto(ui.special));
							players[j].directgain(hs, false);
						}
					}
					
					if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_pd']!=false) {
						var mlinks;
						if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
							mlinks = moved[moved.length-2];
						} else mlinks = moved[moved.length-1];
						for (var m = 0; m < mlinks.length; m++) {
							ui.cardPile.appendChild(mlinks[m]);
						}
					}
					
					if(lib.config['extension_搬运自用_byzy_tiaozhengshoupai_qpd']!=false) {
						var nlinks = moved[moved.length-1];
						nlinks.reverse();
						for (var n = 0; n < nlinks.length; n++) {
							ui.discardPile.appendChild(nlinks[n]);
						}
					}
				}
			} else event.finish();
			'step 2'
			ui.updatehl();
			game.updateRoundNumber();
			// 临时修复手牌数显示无法及时更新的bug
			if(!(lib.config.extensions && lib.config.extensions.contains('十周年UI') && lib.config['extension_十周年UI_enable'] && (lib.config['extension_十周年UI_szn_shoupaishangxian']==true || lib.config['extension_十周年UI_szn_shoupaishuxsxf']==true))) {
				var libUpdate = player => {
					var numh = player.countCards('h');
					player.node.count.innerHTML = numh;
				}
				var players = game.filterPlayer().sortBySeat();
				for (var i = 0; i < players.length; i++) {
					libUpdate(players[i]);
				}
			}
			game.delayx();
		});
	};
	
	// 使用手气卡函数
	game.byzyusesqk = function (player) {
		var target = player;
		var hs = target.getCards("h");
		game.addVideo("lose", target, [get.cardsInfo(hs), [], [], []]);
		for (var i = 0; i < hs.length; i++) {
			hs[i].discard(false);
		}
		target.directgain(get.cards(hs.length));
	};
	
	// 点击可交换一次位置
	game.jiaohuanweizhi = function () {
		var next = game.createEvent('jiaohuanweizhi', false);
		next.target = this;
		next.player = game.me;
		next.setContent(function () {
			// 搬运自上方交换位置功能的content: function () {
			'step 0'
			player.chooseTarget("请选择交换位置的两名角色", 2).set('ai',function(target){
				return 0;
			});
			'step 1'
			if(result.bool) {
				event.target = result.targets;
				game.swapSeat(event.target[0],event.target[1]);
			} else event.finish();
		});
	};
	
	// game.say1函数，搬运自扩展ol
	game.say1=function(str,num){
		if(game.game_say_dialog_height==undefined) game.game_say_dialog_height=-45;
		if(game.game_say_dialog_num==undefined) game.game_say_dialog_num=0;
		game.game_say_dialog_num++;
		var func=function(){
			game.game_say_dialog_onOpened=true;
			game.game_say_dialog_height+=45;
			var dialog=ui.create.dialog('hidden');
			dialog.classList.add('static');
			dialog.add('<div class="text" style="word-break:break-all;display:inline"><span style="color:#FFFFFF;">'+str+'</span></div>');
			dialog.classList.add('popped');
			dialog.style['pointer-events']='none';
			dialog.style['font-family']="'STXinwei','xinwei'";
			dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			ui.window.appendChild(dialog);
			var width=str.length*20;
			if(num!=undefined) width-=num*20;
			dialog._mod_height=-16;
			dialog.style.width=width+'px';
			lib.placePoppedDialog(dialog,{
				clientX:(ui.arena.offsetLeft+ui.arena.offsetWidth/2)*game.documentZoom,
				clientY:(ui.arena.offsetTop+ui.arena.offsetHeight/4)*game.documentZoom
			});
			if(dialog._mod_height) dialog.content.firstChild.style.padding=0;
			// 根据不同输入框调整显示位置
			if(document.querySelector('.menubutton.large input')){
				if (lib.device) {
					// 手机端
					dialog.style.left='calc(75% - '+(width+16)/2+'px'+')';
				} else {
					// 电脑端
					dialog.style.left='calc(72% - '+(width+16)/2+'px'+')';
				}
				dialog.style.top='calc(3% + '+game.game_say_dialog_height+'px)';
			} else {
				dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
				dialog.style.top='calc(5% + '+game.game_say_dialog_height+'px)';
			}
			dialog.style['z-index']=999999;
			setTimeout(function(){
				// if(lib.config['extension_扩展ol_ts_show']!=false&&dialog_log!=undefined){
					// var div=ui.create.caption('<div class="text center">'+str+'</div>');
					// dialog_log.content.insertBefore(div,dialog_log.content.firstChild);
				// };
				dialog.delete();
				if(game.game_say_dialog_height>ui.window.offsetHeight*0.95-dialog.offsetHeight*2) game.game_say_dialog_height=-45;
				setTimeout(function(){
					if(game.game_say_dialog_num<=0) game.game_say_dialog_height=-45;
				},250);
			},1500);
			setTimeout(function(){
				delete game.game_say_dialog_onOpened;
			},500);
		};
		var interval=setInterval(function(){
			if(game.game_say_dialog_onOpened==undefined){
				func();
				game.game_say_dialog_num--;
				clearInterval(interval);
			};
		},100);
	};
	
	// 设置AI禁将（参考自玄武江湖扩展）
	if(lib.config.aijinjiangxingbie === undefined || lib.config.aijinjiangxingbie === null){
		lib.config.aijinjiangxingbie = 'off';
		game.saveConfig('aijinjiangxingbie','off');
	}
	if(lib.config.aijinjiangxingbie!='off' || lib.config.aijinjiangshiliwei || lib.config.aijinjiangshilishu || lib.config.aijinjiangshiliwu || lib.config.aijinjiangshiliqun || lib.config.aijinjiangshilijin || lib.config.aijinjiangshilishen || lib.config.aijinjiangshilishuang || lib.config.aijinjiangshilikey || lib.config.aijinjiangshiliwestern || lib.config.aijinjiangshiliye || lib.config.aijinjiangpingjipf || lib.config.aijinjiangpingjipt || lib.config.aijinjiangpingjijp || lib.config.aijinjiangpingjiss || lib.config.aijinjiangpingjics){
		var savedFilter = lib.filter.characterDisabled;
		lib.filter.characterDisabled = function(i,libCharacter){
			// 仅保留男性武将
			if(lib.config.aijinjiangxingbie=='male'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]!='male'){
							return true;
						}
					}
				}
			}
			// 仅保留女性武将
			if(lib.config.aijinjiangxingbie=='female'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]!='female'){
							return true;
						}
					}
				}
			}
			// 仅保留双性武将
			if(lib.config.aijinjiangxingbie=='double'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]!='double'){
							return true;
						}
					}
				}
			}
			// 仅保留男性和女性武将
			if(lib.config.aijinjiangxingbie=='malefemale'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]=='double'){
							return true;
						}
					}
				}
			}
			// 仅保留男性和双性武将
			if(lib.config.aijinjiangxingbie=='maledouble'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]=='female'){
							return true;
						}
					}
				}
			}
			// 仅保留女性和双性武将
			if(lib.config.aijinjiangxingbie=='femaledouble'){
				if(i){
					if(lib.character[i]){
						if(lib.character[i][0]=='male'){
							return true;
						}
					}
				}
			}
			if(i){
				if(lib.character[i]){
					// AI禁将-势力
					if((lib.config.aijinjiangshiliwei || lib.config.aijinjiangshilishu || lib.config.aijinjiangshiliwu || lib.config.aijinjiangshiliqun || lib.config.aijinjiangshilijin || lib.config.aijinjiangshilishen|| lib.config.aijinjiangshilishuang || lib.config.aijinjiangshilikey || lib.config.aijinjiangshiliwestern || lib.config.aijinjiangshiliye) && !lib.config.aijinjiangpingjipf && !lib.config.aijinjiangpingjipt && !lib.config.aijinjiangpingjijp && !lib.config.aijinjiangpingjiss && !lib.config.aijinjiangpingjics){
						// 保留魏势力武将
						if(lib.config.aijinjiangshiliwei){
							if(lib.character[i][1]=='wei'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留蜀势力武将
						if(lib.config.aijinjiangshilishu){
							if(lib.character[i][1]=='shu'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留吴势力武将
						if(lib.config.aijinjiangshiliwu){
							if(lib.character[i][1]=='wu'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留群势力武将
						if(lib.config.aijinjiangshiliqun){
							if(lib.character[i][1]=='qun'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留晋势力武将
						if(lib.config.aijinjiangshilijin){
							if(lib.character[i][1]=='jin'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留神势力武将
						if(lib.config.aijinjiangshilishen){
							if(lib.character[i][1]=='shen'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留双势力武将
						if(lib.config.aijinjiangshilishuang){
							if(get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留键势力武将
						if(lib.config.aijinjiangshilikey){
							if(lib.character[i][1]=='key'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留西势力武将
						if(lib.config.aijinjiangshiliwestern){
							if(lib.character[i][1]=='western'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留野势力武将（国战野心家武将）
						if(lib.config.aijinjiangshiliye){
							if(lib.character[i][1]=='ye'&&!get.is.double(i)){
								return savedFilter(i,libCharacter);
							}
						}
					}
					// AI禁将-武将评级
					if(!lib.config.aijinjiangshiliwei && !lib.config.aijinjiangshilishu && !lib.config.aijinjiangshiliwu && !lib.config.aijinjiangshiliqun && !lib.config.aijinjiangshilijin && !lib.config.aijinjiangshilishen && !lib.config.aijinjiangshilishuang && !lib.config.aijinjiangshilikey && !lib.config.aijinjiangshiliwestern && !lib.config.aijinjiangshiliye && (lib.config.aijinjiangpingjipf || lib.config.aijinjiangpingjipt || lib.config.aijinjiangpingjijp || lib.config.aijinjiangpingjiss || lib.config.aijinjiangpingjics)){
						// 保留平凡武将A
						if(lib.config.aijinjiangpingjipf){
							if(game.getRarity(i)=='junk'){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留普通武将A+（若未为武将评级，则默认为普通武将）
						if(lib.config.aijinjiangpingjipt){
							if(game.getRarity(i)=='common'){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留精品武将S
						if(lib.config.aijinjiangpingjijp){
							if(game.getRarity(i)=='rare'){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留史诗武将SS
						if(lib.config.aijinjiangpingjiss){
							if(game.getRarity(i)=='epic'){
								return savedFilter(i,libCharacter);
							}
						}
						// 保留传说武将SSS
						if(lib.config.aijinjiangpingjics){
							if(game.getRarity(i)=='legend'){
								return savedFilter(i,libCharacter);
							}
						}
					}
					// AI禁将-势力和AI禁将-武将评级同时开
					if((lib.config.aijinjiangshiliwei || lib.config.aijinjiangshilishu || lib.config.aijinjiangshiliwu || lib.config.aijinjiangshiliqun || lib.config.aijinjiangshilijin || lib.config.aijinjiangshilishen|| lib.config.aijinjiangshilishuang || lib.config.aijinjiangshilikey || lib.config.aijinjiangshiliwestern || lib.config.aijinjiangshiliye) && (lib.config.aijinjiangpingjipf || lib.config.aijinjiangpingjipt || lib.config.aijinjiangpingjijp || lib.config.aijinjiangpingjiss || lib.config.aijinjiangpingjics)){
						// 保留魏势力武将
						if(lib.config.aijinjiangshiliwei){
							if(lib.character[i][1]=='wei'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留蜀势力武将
						if(lib.config.aijinjiangshilishu){
							if(lib.character[i][1]=='shu'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留吴势力武将
						if(lib.config.aijinjiangshiliwu){
							if(lib.character[i][1]=='wu'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留群势力武将
						if(lib.config.aijinjiangshiliqun){
							if(lib.character[i][1]=='qun'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留晋势力武将
						if(lib.config.aijinjiangshilijin){
							if(lib.character[i][1]=='jin'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留神势力武将
						if(lib.config.aijinjiangshilishen){
							if(lib.character[i][1]=='shen'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留双势力武将
						if(lib.config.aijinjiangshilishuang){
							if(get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留键势力武将
						if(lib.config.aijinjiangshilikey){
							if(lib.character[i][1]=='key'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留西势力武将
						if(lib.config.aijinjiangshiliwestern){
							if(lib.character[i][1]=='western'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
						// 保留野势力武将（国战野心家武将）
						if(lib.config.aijinjiangshiliye){
							if(lib.character[i][1]=='ye'&&!get.is.double(i)){
								// 保留平凡武将A
								if(lib.config.aijinjiangpingjipf){
									if(game.getRarity(i)=='junk'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留普通武将A+（若未为武将评级，则默认为普通武将）
								if(lib.config.aijinjiangpingjipt){
									if(game.getRarity(i)=='common'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留精品武将S
								if(lib.config.aijinjiangpingjijp){
									if(game.getRarity(i)=='rare'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留史诗武将SS
								if(lib.config.aijinjiangpingjiss){
									if(game.getRarity(i)=='epic'){
										return savedFilter(i,libCharacter);
									}
								}
								// 保留传说武将SSS
								if(lib.config.aijinjiangpingjics){
									if(game.getRarity(i)=='legend'){
										return savedFilter(i,libCharacter);
									}
								}
							}
						}
					}
					if(lib.config.aijinjiangshiliwei || lib.config.aijinjiangshilishu || lib.config.aijinjiangshiliwu || lib.config.aijinjiangshiliqun || lib.config.aijinjiangshilijin || lib.config.aijinjiangshilishen ||lib.config.aijinjiangshilishuang || lib.config.aijinjiangshilikey || lib.config.aijinjiangshiliwestern || lib.config.aijinjiangshiliye || lib.config.aijinjiangpingjipf || lib.config.aijinjiangpingjipt || lib.config.aijinjiangpingjijp || lib.config.aijinjiangpingjiss || lib.config.aijinjiangpingjics){
						return true;
					}
				}
			}
			return savedFilter(i,libCharacter);
		};
	}
	
},
config:{
	byzy_sysm: {
		name:'<div class="hth_menu">▶更新说明（点击后展开）</div>',
		clear:true,
		onclick:function(){
			if(this.hth_more==undefined){
				var more=ui.create.div('.hth_more',
				'<div style="border: 1px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
				'本扩展为功能扩展，除自写（含魔改）的一些功能外，额外搬运（并魔改）一些扩展的优秀功能自用，在（尽量）征得原作者同意后发布'+
				'<br>'+
				'<br>PART Ⅰ 自写功能（含魔改）'+
				'<br>'+
				'<br>※ 武将及卡牌统计功能'+
				'<br>- 点击下方<span style="text-decoration: underline;">武将及卡牌统计功能</span>链接按钮，输出武将及卡牌统计结果，可通过弹窗显示、命令框（其它-命令）或控制台查看'+
				'<br>- 当前模式武将统计：<br>隐藏武将及隐藏武将包内的武将、被禁用的武将（在武将-禁将里的武将和AI禁选的武将等）等不参与统计<br>国战模式君主武将参与统计<br>武将包开仅点将可用后包内武将不参与当前模式武将统计（即开启武将资料卡-禁用-随机选将可用开关的武将参与统计）<br>武将包关闭后的武将仍参与当前模式禁将数统计（尽管不在武将-禁将里显示）'+
				'<br>- 总武将统计：<br>隐藏武将及隐藏武将包内的武将<br>国战武将、挑战武将等要在对应的模式下才能参与统计，国战武将-君主武将数要在国战模式下才能正确统计'+
				'<br>- 武将包统计：<br>隐藏的武将包不参与总武将包数统计'+
				'<br>- 卡牌统计：<br>卡牌-衍生不参与卡牌数统计'+
				'<br>- 卡牌包统计：<br>卡牌-衍生（若有）参与总卡牌包数统计，隐藏的卡牌包不参与总卡牌包数统计'+
				'<br>注1：若未为武将评级，则默认为普通武将A+'+
				'<br>注2：若为国战模式，且开启“使用国战武将”开关、十周年UI国战魔改开启、国战魔改不失效时，则勾玉改为阴阳鱼，武将体力以阴阳鱼为单位（当前模式武将数统计时，3上限→1.5上限、4上限→2上限、5上限→2.5上限，但会造成总武将数统计混乱）'+
				'<br>'+
				'<br>※ 点击获得一个额外的回合<br>- 点击下方<span style="text-decoration: underline;">点击获得一个额外的回合</span>链接按钮，“我”（玩家）获得一个额外的回合，当前角色回合结束后生效；点击1次获得的额外回合+1，无点击次数限制'+
				'<br>'+
				'<br>※ 点击可调整手牌和牌堆功能<br>- 点击下方<span style="text-decoration: underline;">点击可调整手牌和牌堆功能</span>链接按钮，“我”（玩家）可以调整场上所有角色手牌（若开启调整装备区和判定区的牌开关则可调整区域内的牌）和牌堆（牌堆和弃牌堆）；点击1次获得的调整次数+1，无点击次数限制'+
				'<br>'+
				'<br>※ 点击可交换一次位置<br>- 点击下方<span style="text-decoration: underline;">点击可交换一次位置</span>链接按钮，“我”（玩家）可以交换两名角色的座次；点击1次获得的交换次数+1，无点击次数限制'+
				'<br>'+
				'<br>※ 自写功能'+
				'<br>- 场上非玩家角色翻面：除“我”（玩家）外，场上其他角色翻面，不受技能限制，即时生效'+
				'<br>- 解除场上所有角色翻面：不受技能限制，即时生效'+
				'<br>- 场上非玩家角色横置：除“我”（玩家）外，横置场上其他角色，不受技能限制，即时生效'+
				'<br>- 解除场上所有角色横置：不受技能限制，即时生效'+
				'<br>- 清空最近使用武将：清空自由选将对话框“最近”里的武将，即时生效'+
				'<br>- 清空收藏武将：清空自由选将对话框“收藏”里的武将，即时生效；手动重启后移除武将-收藏里的所有武将'+
				'<br>- 更新挑战模式座位号：适用于挑战模式关卡更新后/交换座位后需手动更新座位号的情况，设置boss为一号，即时生效'+
				'<br>- 手动删除Nickname：适用场景如乱斗-幻化之战座位号重复显示等的情况，即时生效'+
				'<br>- 聊天表情-随机发送：场上随机一角色发送（可切换注释，改为“我”（玩家）发送），说话泡泡框延时显示'+
				'<br>- 快捷语音-随机发送：场上随机一角色发送（可切换注释，改为“我”（玩家）发送），语音延时播放及说话泡泡框延时显示'+
				'<br>- 游戏结束-战斗胜利：直接结束游戏，进入游戏结束统计界面（显示战斗胜利），即时生效'+
				'<br>- 游戏结束-战斗失败：直接结束游戏，进入游戏结束统计界面（显示战斗失败），即时生效'+
				'<br>- 游戏结束-平局：直接结束游戏，进入游戏结束统计界面（显示平局），即时生效'+
				'<br>- 修改金币功能（使用前要开启富甲天下扩展）：获得999金币、扣除999金币、金币数量=999、无限金币，即时生效；温馨提示：想要恢复0金币，先将金币数量设为999，再点击扣除999金币'+
				'<br>- 修改招募令和修改金币功能（战棋模式用），用法同上。'+
				'<br>- 重启进入启动页界面：即时生效'+
				'<br>- 查看本体更新内容：修改本体版本号为旧版，自动重启后就能查看更新内容'+
				'<br>- 返回浏览器的版本信息：可通过弹窗显示、命令框（其它-命令）或控制台查看'+
				'<br>- 电脑端启用控制台：快捷键为Ctrl+J'+
				'<br>'+
				'<br>※ 自娱自乐(即时生效)<br>- 开启后玩家将代替所有场上角色行动，即时生效'+
				'<br>'+
				'<br>※ 手牌可视(即时生效)<br>- 开启后，玩家可以看到场上其他所有角色的手牌（手机端可长按/电脑端可右击武将牌查看，拆顺等选择手牌的界面可看到手牌），即时生效'+
				'<br>'+
				'<br>▷ 2-17人扩展：整合自写并魔改的扩展，请点击展开下方2-17人扩展【使用说明】查看↓'+
				'<br>◇ 妙用：局局1v7，教程如下↓<br>① 本扩展八人场身份选择：1主0忠7反0内<br>② 屏蔽身份：忠臣内奸反贼<br>另：如果想自己1人打7个自己，进行同样的设置后，开乱斗-同将模式即可（设置是继承身份模式的）'+
				'<br>'+
				'<br>▷ AI禁将功能'+
				'<br>- 参考自玄武江湖扩展，AI根据性别、势力或武将评级禁选武将，将AI根据势力、武将评级禁选武将改为开关设置，可更加自由地选择配置禁选组合'+
				'<br><span style=\"color:red\">- 和其他扩展的AI禁将功能同时使用可能会导致无法选将，若遇冲突请关闭本选项！</span>'+
				'<br>'+
				'<br>▷ 禁将与解除禁将'+
				'<br>※ 禁将功能'+
				'<br>- 解除所有游戏模式禁将：启用在武将-禁将里的武将（所有游戏模式），相当于将武将资料卡-禁用-所有游戏模式开关开启（全部启用），自动重启后生效'+
				'<br>- 解除非当前模式禁将：启用在武将-禁将里的武将（非当前游戏模式），相当于将武将资料卡-禁用-非当前游戏模式开关开启，自动重启后生效'+
				'<br>- 应用当前禁将到全部：将当前游戏模式禁将应用到非当前游戏模式，相当于将武将-禁将里的当前游戏模式已禁用的武将的资料卡-禁用-所有游戏模式开关关闭（全部禁用），自动重启后生效'+
				'<br>- 所有武将随机选将可用：将武将包仅点将可用开关全部关闭&武将资料卡-禁用-随机选将可用开关全部开启，自动重启后生效'+
				'<br>- 场上所有角色禁将：在已有禁将的基础上继续场上所有角色禁将（当前游戏模式），即把场上所有角色的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭，手动重启后生效；若想解除禁将，请在未手动重启前使用“解除场上所有角色禁将”功能'+
				'<br>- 解除场上所有角色禁将：在已有禁将的基础上解除场上所有角色禁将（当前游戏模式）【前提是已禁将但未手动重启】，即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启，手动重启后生效'+
				'<br>- 场上其他角色禁将：在已有禁将的基础上继续场上其他角色禁将（当前游戏模式），即把场上其他角色的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭，手动重启后生效；若想解除禁将，请在未手动重启前使用“解除场上其他角色禁将”功能'+
				'<br>- 解除场上其他角色禁将：在已有禁将的基础上解除场上其他角色禁将（当前游戏模式）【前提是已禁将但未手动重启】，即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启，手动重启后生效'+
				'<br>'+
				'<br>※ 当前模式禁将<br>- 在当前游戏模式下，在已有禁将的基础上继续禁用武将，即把要禁用的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭，点击选项后自动重启后生效<br>- 若想将当前游戏模式禁将应用到非当前游戏模式可使用禁将功能的应用当前禁将到全部'+
				'<br>'+
				'<br>※ 解除当前模式禁将<br>- 在当前游戏模式下，在已有禁将的基础上解除禁用武将，即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启，点击选项后自动重启后生效<br>- 其他解除禁将的功能可使用禁将功能'+
				'<br>'+
				'<br>◇ 妙用：仅体验本体新增的武将（体验扩展新增的武将同理），教程如下↓'+
				'<br>法1（本体扩展通用，扩展同理，在文件管理器中的操作略有差异）：<br>① 在文件管理器中操作：删除<span style=\"color:#0086FF\">游戏目录</span>/character内的文件，将旧版本体character里的文件放到对应位置<br>② 在无名杀中操作：本扩展点击当前模式禁将-全部禁将<br>③ 在文件管理器中操作：将新版本体character里的文件放到<span style=\"color:#0086FF\">游戏目录</span>/character内<br>④ 重启/重新打开无名杀'+
				'<br>法2（仅适用于本体）：<br>① 安装衍生篇扩展<br>② 在无名杀中操作：衍生篇扩展-本体武将补丁-选择旧版本，本扩展点击当前模式禁将-全部禁将<br>③ 在无名杀中操作：衍生篇扩展-本体武将补丁-选择新版本<br>④ 重启/重新打开无名杀'+
				'<br><span style=\"color:red\">- 由于禁将导致的报错，无需重置无名杀！<br>法一：关闭弹窗后，直接切换至其他的游戏模式（如挑战模式），再开启本体的武将重启即可<br>法二：直接退出游戏，然后从启动页重新进入其他的游戏模式（如挑战模式），再开启本体的武将重启即可</span>'+
				'<br>'+
				'<br>▷ 武将称号&性别'+
				'<br>※ 武将称号补充<br>- 默认开启，开启后在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将称号（缓更中）'+
				'<br>'+
				'<br>※ 武将性别显示<br>- 默认开启，重启后生效。开启后关闭本体的显示角色性别开关，在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将性别（含扩展）；关闭后开启本体的显示角色性别开关（若不想显示武将性别，还需前往本体选项-显示-显示角色性别关闭）'+
				'<br>'+
				'<br>▷ 武将&卡牌引文：代码参考自群英荟萃乀摧林扩展'+
				'<br>'+
				'<br>※ 长按/右击弹出菜单修改<br>- 默认开启，修改手机端长按/电脑端右击武将头像后的武将信息查看界面菜单；新增武将引文接口，开启后才能使用武将引文补充；发送交互表情时间修改；其他修复<br><span style=\"color:red\">- 若遇冲突请关闭本选项！</span>'+
				'<br>'+
				'<br>※ 武将引文补充<br>- 默认开启，开启后在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将引文（缓更中），需先开启右键菜单修改'+
				'<br>'+
				'<br>※ 卡牌引文补充<br>- 默认开启，开启后在手机端长按/电脑端右击武将头像后的卡牌信息查看界面显示卡牌引文（缓更中）'+
				'<br>'+
				'<br>▷ 自由选将增强'+
				'<br>※ 自由选将-搜索功能<br>- 武将搜索代码摘抄自扩展ol（作者Aurora表示代码是公开的，谁都可以借用，无需征得修改许可）<br>- 默认开启，新增一个自由选将搜索框合并武将搜索功能，输入任意关键词即可搜索（无需细分搜索类别）；移动代码以解决自由选将搜索功能存在关闭扩展后不消失的问题；新增确定按钮以修复部分手机可能存在回车无法使用的bug；新增技能台词、阵亡台词、武将称号等搜索选项；新增开关，在搜索技能时，可设置搜索技能、搜索衍生技能、搜索技能+衍生技能；新增任意关键字选项补充设置，可自行配置搜索选项'+
				'<br>'+
				'<br>※ 自由选将-筛选按钮扩充<br>- 默认开启，扩充按钮：男性、女性、双性，可根据性别筛选（统计）武将；主公（可筛选主公武将）；护甲（可筛选带护甲的武将）、不同体力上限筛选，实现更加自由灵活地禁选将'+
				'<br>'+
				'<br>※ 自由选将-随机按钮<br>- 由假装无敌扩展原功能【AI选将】分离而来，开启后，将在自由选将界面添加“随机”筛选按钮，点击该按钮可切换显示全部武将和随机武将，设置为默认开启'+
				'<br>'+
				'<br>▷ 调整卡牌功能'+
				'<br>※ 调整手牌和牌堆功能<br>- 开启后，分发起始手牌后，玩家可以调整手牌和牌堆功能(限身份场、斗地主、国战)<br>- 调整选项（可自行设置）：调整手牌（玩家）、调整手牌（其他角色）、调整牌堆、调整弃牌堆'+
				// '<br>※ 调整装备区和判定区的牌<br>- 开启后，在使用调整手牌和牌堆功能时，可调整区域内的牌（即额外装备区和判定区内的牌）'+
				'<br>◇ 小技巧：如果误操作了，赶紧找到调整选项，随便开/关一个，回来点确定后无事发生'+
				'<br>※ 所有角色使用手气卡<br>- 开启后，分发起始手牌后，玩家可令所有角色使用手气卡(限身份场、斗地主、国战)<br>- 调整选项（可自行设置）：使用手气卡次数、使用手气卡顺序'+
				'<br>'+
				'<br>▷ 游戏模式：详情请点击下方【游戏模式介绍】折叠选项查看'+
				'<br>'+
				'<br>▷ 开关扩展功能'+
				'<br>※ 开关扩展功能<br>- 一键开启或关闭扩展，自动重启后生效'+
				'<br>'+
				'<br>※ 绘制效果图（测试中）<br>- 利用控制台命令代码绘制效果图，即点即用'+
				'<br>'+
				'<br>PART Ⅱ 搬运功能（并魔改）'+
				'<br>'+
				'<br>▷ 导航功能'+
				'<br>※ 选项导航功能<br>- 搬运自扩展ol的选项导航（作者Aurora表示代码是公开的，谁都可以借用，无需征得修改许可）<br>- 输入后回车/确定返回搜索结果，再回车一下/再按一次确定跳转至下一个搜索结果'+
				'<br>'+
				'<br>※ 加入顶部左侧菜单<br>- 将“导”字按钮加入顶部左侧菜单栏，点击后快捷打开扩展界面（参考自特效测试扩展），设置为默认开启'+
				'<br>'+
				'<br>▷ 资料卡功能'+
				'<br>※ 资料卡修改<br>- 修改本体的资料卡，具体请长按/右击选项查看<br><span style=\"color:red\">- 若遇冲突请关闭本选项！</span><br>- 新增是否开启千幻聆音扩展的判断，避免冲突弹窗（若开启千幻聆音扩展则本功能失效）'+
				'<br>※ 资料卡点击查看武将信息<br>- 开启后，点击武将名或武将名注解，可查看武将信息，包括：武将名ID、武将名翻译、所在武将包、所在武将包的分类、武将称号、[姓,名]、武将评级、是否主公武将等（通过弹窗显示、命令框（其它-命令）或控制台查看），即时生效（要先打开资料卡修改开关和选项-显示-显示武将名注解才能生效）'+
				'<br>※ 资料卡点击查看技能信息<br>- 搬运自金庸群侠传扩展（点击查看技能代码）<br>- 开启后，点击技能名注解，可查看技能信息，包括：技能名ID、技能名翻译、技能描述、技能代码等（通过弹窗显示、命令框（其它-命令）或控制台查看），即时生效（要先打开资料卡修改开关和选项-显示-显示技能名注解才能生效）'+
				'<br>※ 资料卡显示台词<br>- 开启后显示台词，关闭后不显示台词，即时生效（要先打开资料卡修改开关才能生效）'+
				'<br>※ 资料卡查看双形态原画<br>- 开启后可查看切换后的双形态原画（含语音台词），关闭后仅可查看初始原画（要先打开资料卡修改开关才能生效）'+
				'<br>※ 资料卡试听衍生技能配音<br>- 开启后，点击技能介绍的技能名，可试听衍生技能配音，即时生效（要先打开资料卡修改开关才能生效）'+
				'<br>※ 资料卡试听阵亡配音<br>- 搬运自金庸群侠传扩展，已征得大熊小猫的修改许可<br>- 开启后，会在资料卡界面添加阵亡按钮，点击后可试听武将阵亡配音，要先打开资料卡修改开关才能生效（默认设为开启，暂不支持扩展阵亡配音试听）<br><span style=\"color:red\">- 若遇冲突请关闭本选项！</span><br>- 新增是否开启千幻聆音扩展的判断，避免冲突弹窗（若开启千幻聆音扩展则本功能失效）'+
				'<br>※ 资料卡试听胜利配音【暂不可用，等本体更新中】<br>- 开启后，会在资料卡界面添加胜利按钮，点击后可试听武将胜利配音（默认设为开启，暂不支持扩展胜利配音试听，要先打开资料卡修改开关才能生效）<br><span style=\"color:red\">- 若遇冲突请关闭本选项！</span><br>- 新增是否开启千幻聆音扩展的判断，避免冲突弹窗（若开启千幻聆音扩展则本功能失效）'+
				'<br>※ 查看不可见武将资料卡<br>- 开启后，可查看不可见武将的资料卡，包括隐匿的武将、暗置的武将等，即时生效（要先打开资料卡修改开关才能生效）'+
				'<br>'+
				'<br>▷ 控制台功能'+
				'<br>※ 控制台-功能加强版<br>- 原作者为诗笺，搬运自蜀汉中兴扩展，已征得修改许可<br>- 本体控制台（选项-其它-控制）的加强版，魔改并新增大量新功能（包括对话框大小位置调整、注释掉记住对话框位置代码、增加选择数值选项、将大量控制台命令代码写入扩展等）<br>- 开启：手动点击下方<span style="text-decoration: underline;">控制台-功能加强版</span>链接按钮开启；若开启加入顶部左侧菜单开关，还可点击顶部左侧菜单栏的“控”字按钮打开控制台<br>- 执行：对话框点击“执”按钮执行控制台命令代码<br>- 关闭：对话框点击“关”按钮关闭'+
				'<br>- 温馨提示：控制台点击“执”按钮可更新玩家状态；可在非托管状态下通过控制台执行重新选将功能(限身份场、斗地主、国战)；自曝身份仅适用于身份模式，不影响AI；显示身份适用于身份模式（不影响AI）和国战模式；清空技能时，带有Charlotte标签的技能无法被清除；横置/翻面受技能限制，强制横置/强制翻面不受技能限制'+
				'<br>'+
				'<br>※ 加入顶部左侧菜单<br>- 将控制台打开方式由界面的“控”字按钮改为加入顶部左侧菜单的“控”字按钮（参考自特效测试扩展），设置为默认开启'+
				'<br>'+
				'<br>▷ 重新选将功能'+
				'<br>※ 重新选将功能<br>- 原作者为清瑶的“徒弟”、神秘喵，搬运自假装无敌扩展，已征得修改许可<br>- 原功能名为【AI选将】，删除原版自由选将搜索功能以避免和自由选将-搜索功能冲突、“仙”势力及其筛选按钮，新增神武将选择势力（若开启）可点击取消了（棘手怀念摧毁一步到位懒人包专属魔改）、修复使用控制台多选武将重新选将对话框的显示问题、重新选将功能可以点击取消按钮取消重新选将了、修复明忠模式点重新选将会暴露主公身份的bug、修复双势力武将无法重新选势力的bug等<br>- 开启后，游戏开始时玩家可以为AI或自己重新选将(限身份场、斗地主、国战)'+
				'<br>'+
				'<br>※ 重选单双将(即时生效)<br>- 游戏开始时或游戏中重新选将时可重选单双将了，即时生效(限身份场、斗地主)<br>- 例如可在单将模式重新选双将，或者在双将模式重新选单将'+
				'<br>'+
				'<br>▷ 交换位置功能'+
				'<br>※ 交换位置功能<br>- 原作者为Helasisy星云，搬运自祖安武将扩展，已征得修改许可<br>- 分离自原功能【游戏自定义工具】，增加限身份场、斗地主、国战<br>- 开启后，游戏开始时玩家可以交换两名角色的座次，从而自定义场上所有角色的位置'+
				'<br>'+
				'<br>▷ 一键导入重启<br>- 原作者为永远的萌新，搬运自特效测试扩展，已征得修改许可<br><span style=\"color:red\">- 【超级好用，强烈推荐！！！】</span><br>- 删除原版导入助手的功能（更多导入方法可下载特效测试扩展体验）<br>- 新增自动一键导入重启功能，默认设为自动开启<br>- 新增当扩展文件夹内缺少extension.js时报错提示<br>- 扩展导入完成后，再次重启时，检测（开启的扩展的）扩展文件夹名是否正确，新增为防出现bug请修正的提示；玩家需按提示逐个修正扩展文件夹名，都修改完成后重启才不会出现弹窗提示<br>- 教程如下，请点击展开下方【一键导入重启】查看↓'+
				'<br>'+
				'<br>▷ 减少报错功能'+
				'<br>※ 取消弹窗警告<br>- 原作者为Sukincen，搬运自群英会扩展，已征得修改许可<br>- 默认关闭此选项，开启此项并重启后取消弹窗警告（自欺欺人），推荐用于忽略报错勉强能玩的场景等'+
				'<br>'+
				'<br>※ 图片懒加载<br>- 原作者为清瑶的“徒弟”、神秘喵，搬运自假装无敌扩展<br>- 开启后，游戏内的武将图片将会开启懒加载，不会一次性全部加载，只有在窗口显示了才会去加载，避免一次性加载太多图片导致游戏卡顿（在自由选将会闪退的时候打开，能解决该问题）'+
				'<br>'+
				'<br>▷ 其他功能'+
				'<br>※ 禁用武将切换功能<br>- 原作者为157，搬运自官将重修扩展<br>- 默认关闭此选项，开启后将在选将时禁用武将切换功能'+
				'<br>'+
				'<br>▷ 其他<br>- 参考将灵重置版扩展、群英荟萃乀摧林扩展，实现选项菜单的折叠'+
				'<br>'+
				'<br>▷ 特效/界面错位解决方案'+
				'<br>※ 特效错位修复<br>- 原作者为梨花喵🐱，搬运自特效修复扩展'+
				'<br>'
				);
				this.parentNode.insertBefore(more,this.nextSibling);
				this.hth_more=more;
				this.innerHTML='<div class="hth_menu">▼更新说明（点击后折叠）</div>';
			}
			else{
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more;
				this.innerHTML='<div class="hth_menu">▶更新说明（点击后展开）</div>';
			};
		},
	},
	
	"byzy_wjtjgn": {
		"name": "<span style='text-decoration: underline;'>武将及卡牌统计功能</span>",
		"clear": true,
		onclick: function() {
			game.wjtjgn(0);
		},
	},
	
	"byzy_hdygewdhh": {
		"name": "<span style='text-decoration: underline;'>点击获得一个额外的回合</span>",
		"clear": true,
		onclick: function() {
			game.zxgn(0);
		},
	},
	
	"byzy_zyysppd": {
		"name": "<span style='text-decoration: underline;'>点击可调整手牌和牌堆功能</span>",
		"clear": true,
		onclick: function() {
			game.tiaozhengshoupai();
		},
	},
	
	"byzy_jhycwz": {
		"name": "<span style='text-decoration: underline;'>点击可交换一次位置</span>",
		"clear": true,
		onclick: function() {
			game.jiaohuanweizhi();
		},
	},
	
	"byzy_zxgn":{
		"name":"自写功能",
		"intro":"将控制台命令代码写入扩展，详情请点击上方更新说明查看。<br>为方便起见，一部分功能点击选项后直接生效（无弹窗说明），需看清楚上方更新说明后选择相应功能；另一部分功能点击选项后请认真看弹窗说明，然后选择【确定】或【取消】。",
		"init":"1",
		"item":{
			"1":"场上非玩家角色翻面",
			"2":"解除场上所有角色翻面",
			"3":"场上非玩家角色横置",
			"4":"解除场上所有角色横置",
			"5":"清空最近使用武将",
			"6":"清空收藏武将",
			"7":"更新挑战模式座位号",
			"8":"手动删除Nickname",
			"9":"聊天表情-随机发送",
			"10":"快捷语音-随机发送",
			"11":"游戏结束-战斗胜利",
			"12":"游戏结束-战斗失败",
			"13":"游戏结束-平局",
			"14":"获得999金币",
			"15":"扣除999金币",
			"16":"金币数量=999",
			"17":"无限金币",
			"18":"(战棋)获得999招募令",
			"19":"(战棋)扣除999招募令",
			"20":"(战棋)招募令数量=999",
			"21":"(战棋)无限招募令",
			"22":"(战棋)获得999金币",
			"23":"(战棋)扣除999金币",
			"24":"(战棋)金币数量=999",
			"25":"(战棋)无限金币",
			"26":"重启进入启动页界面",
			"27":"查看本体更新内容",
			"28":"返回浏览器的版本信息",
			"29":"电脑端启用控制台",
		},
		onclick:function(item){
			if(item == '1'){
				game.zxgn(1);
			}
			if(item == '2'){
				game.zxgn(2);
			}
			if(item == '3'){
				game.zxgn(3);
			}
			if(item == '4'){
				game.zxgn(4);
			}
			if(item == '5'){
				if(confirm("是否清空最近使用武将，即自由选将对话框“最近”里的武将。\n\r继续请点击【确定】，即时生效。")){
					game.zxgn(5);
				};
			}
			if(item == '6'){
				if(confirm("是否清空收藏武将，即自由选将对话框“收藏”里的武将，即时生效（手动重启后移除武将-收藏里的所有武将）。\n\r继续请点击【确定】。")){
					game.zxgn(6);
				};
			}
			if(Number(item) >= 7){
				game.zxgn(Number(item));
			}
		},
	},
	
	"byzy_ziyuzile":{
		"name":"自娱自乐(即时生效)",
		"intro":"开启后玩家将代替所有场上角色行动，即时生效。",
		"init":lib.config.byzy_ziyuzile === undefined ? false : lib.config.byzy_ziyuzile,
		onclick:function(item){
			game.saveConfig('byzy_ziyuzile',item);
			game.saveConfig('extension_搬运自用_byzy_ziyuzile',item);
		}
	},
	
	"byzy_shoupaikeshi":{
		"name":"手牌可视(即时生效)",
		"intro":"开启后，玩家可以看到场上其他所有角色的手牌（手机端可长按/电脑端可右击武将牌查看，拆顺等选择手牌的界面可看到手牌），即时生效。",
		"init":lib.config.byzy_shoupaikeshi === undefined ? false : lib.config.byzy_shoupaikeshi,
		onclick:function(item){
			game.saveConfig('byzy_shoupaikeshi',item);
			game.saveConfig('extension_搬运自用_byzy_shoupaikeshi',item);
		}
	},
	
	// 分割线
	"byzyfgx1":{
		"name":"<font size='4'>------导航功能-------</font>",
		"clear":true,
	},
	
	byzy_fenjiexian1:{
		clear:true,
		name:"<font size='3'><li>鸣谢：扩展ol</font>",
	},
	
	"byzy_xuanxiangdaohang":{
		"name":"<span style='text-decoration: underline'>选项导航功能</span>",
		"clear":true,
		onclick:function(){
			if(_status.kzol_openedkzjm==undefined) _status.kzol_openedkzjm=false;
			if(_status.kzol_openedkzjm==false){
				var div2=this;
				div2.innerHTML="<span  class='bluetext blueauto' style='text-decoration: underline'>选项导航功能</span>";
				var dialog=ui.create.dialog('hidden');
				dialog.classList.add('popped');
				dialog.classList.add('static');
				if(get.is.phoneLayout()){
					dialog.style.height='389px';
					dialog.style.top='17px';
					dialog.style.left='538px';
				}else{
					dialog.style.height='300px';
					dialog.style.top='51.5px';
					dialog.style.left='418px';
				};
				dialog.style.width='160px';
				dialog.style.animation='faderightIn .3s';
				dialog.style['-webkit-animation']='faderightIn .3s';
				dialog.style['z-index']=8;
				dialog.style['overflow-x']='hidden';
				dialog.style['overflow-y']='scroll';
				ui.window.appendChild(dialog);
				lib.setScroll(dialog);
				_status.kzol_openedkzjm=dialog;
				var list=[];
				for(var i=0;i<this.parentNode.childNodes.length;i++){
					var div=this.parentNode.childNodes[i];
					if(div.innerHTML.indexOf('----')!=-1) list.push(div);
				};
				var div1=this.parentNode.parentNode;
				var createDiv=function(str,div,func){
					var div_config=ui.create.div('.menubutton.large');
					div_config.style.height='30px';
					div_config.style.width='140px';
					div_config.style.borderRadius='5px';
					div_config.style['white-space']='nowrap';
					div_config.style.margin='5px';
					div_config.style['text-align']='center';
					div_config.style['line-height']='30px';
					if(str!='search'){
						div_config.style.cursor='pointer';
						if(str.length>4){
							div_config.style['font-size']='20px';
						}else{
							div_config.style['font-size']='23px';
						};
						div_config.style.transition='opacity 0.5s';
						div_config.innerHTML=str;
					}else{
						div_config.style['font-size']='18px';
						div_config.innerHTML='<input type="text" style="width:130px;text-align:center;" value="请输入关键字"></input>';
					};
					if(div!=false) div_config.link=div;
					div_config.link1=div1;
					dialog.add(div_config);
					if(str!='search'){
						if(func==undefined){
							div_config.onclick=function(){
								this.link1.scrollTop=this.link.offsetTop;
							};
						}else{
							div_config.onclick=func;
						};
						div_config.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
							this.style.transform='scale(0.95)';
						});
						div_config.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
							this.style.transform='';
						});
					}else{
						div_config.querySelector('input').onfocus=function(){
							if(this.value=='请输入关键字') this.value='';
						};
						div_config.querySelector('input').onkeydown=function(e){
							e.stopPropagation();
							if(e.keyCode==13){
								var value=this.value;
								if(value&&value.length>0){
									if(this.searching_list==undefined) this.searching_list=[];
									if(this.searching!=value){
										this.searching_list=[];
										for(var i=0;i<div2.parentNode.childNodes.length;i++){
											var div3=div2.parentNode.childNodes[i];
											if(div3.innerText.indexOf(value)!=-1) this.searching_list.push(div3);
										};
										this.searching=value;
										this.searching_num=0;
									};
									if(this.searching_list.length>0){
										if(this.searching_num>=this.searching_list.length) this.searching_num=0;
										var div_target=this.searching_list[this.searching_num];
										div1.scrollTop=div_target.offsetTop+div_target.offsetHeight-div1.offsetHeight/2;
										div_target.style['background-color']='white';
										setTimeout(function(){
											div_target.style['background-color']='';
										},250);
										this.searching_num++;
										if(game.say1){
											game.say1('搜索完成：'+(this.searching_num)+'/'+(this.searching_list.length));
										}else{
											alert('搜索完成：'+(this.searching_num)+'/'+(this.searching_list.length));
										};
									}else{
										if(game.say1){
											game.say1('未找到相关内容');
										}else{
											alert('未找到相关内容');
										};
									};
								}else{
									if(game.say1){
										game.say1('请输入关键字进行搜索');
									}else{
										alert('请输入关键字进行搜索');
									};
								};
							};
						};
					};
				};
				createDiv('search',false);
				createDiv('确定',false,function(){
					// 搜索功能的代码逻辑
					var value = document.querySelector('.menubutton.large input').value;
					// 搬运自上方if(e.keyCode==13){
					if(value&&value.length>0){
						if(this.searching_list==undefined) this.searching_list=[];
						if(this.searching!=value){
							this.searching_list=[];
							for(var i=0;i<div2.parentNode.childNodes.length;i++){
								var div3=div2.parentNode.childNodes[i];
								if(div3.innerText.indexOf(value)!=-1) this.searching_list.push(div3);
							};
							this.searching=value;
							this.searching_num=0;
						};
						if(this.searching_list.length>0){
							if(this.searching_num>=this.searching_list.length) this.searching_num=0;
							var div_target=this.searching_list[this.searching_num];
							div1.scrollTop=div_target.offsetTop+div_target.offsetHeight-div1.offsetHeight/2;
							div_target.style['background-color']='white';
							setTimeout(function(){
								div_target.style['background-color']='';
							},250);
							this.searching_num++;
							if(game.say1){
								game.say1('搜索完成：'+(this.searching_num)+'/'+(this.searching_list.length));
							}else{
								alert('搜索完成：'+(this.searching_num)+'/'+(this.searching_list.length));
							};
						}else{
							if(game.say1){
								game.say1('未找到相关内容');
							}else{
								alert('未找到相关内容');
							};
						};
					}else{
						if(game.say1){
							game.say1('请输入关键字进行搜索');
						}else{
							alert('请输入关键字进行搜索');
						};
					};
				});
				createDiv('关闭',false,function(){
					div2.innerHTML="<span style='text-decoration: underline'>选项导航功能</span>";
					_status.kzol_openedkzjm.delete();
					_status.kzol_openedkzjm=false;
				});
				createDiv('返回顶部',false,function(){
					div1.scrollTop=0;
				});
				createDiv('返回底部',false,function(){
					div1.scrollTop=9999999999;
				});
				for(var i=0;i<list.length;i++){
					var div=list[i];
					// var str=div.innerHTML.match(/[\u4e00-\u9fa5]/g).join("");
					var input = div.innerHTML;
					var regex = /-{2,}([-\u4e00-\u9fa5\w\s!@#$%^&*()_+=-[\]{};:'",.<>/?\\|`~]+?)-{2,}/g;
					var match;
					var str = '';
					while ((match = regex.exec(input)) !== null) {
						var matchedText = match[1];
						var cleanedText = matchedText.replace(/-+$/g, '');
						str += cleanedText;
					}
					createDiv(str,div);
				};
				createDiv('返回顶部',false,function(){
					div1.scrollTop=0;
				});
				createDiv('返回底部',false,function(){
					div1.scrollTop=9999999999;
				});
				createDiv('关闭',false,function(){
					div2.innerHTML="<span style='text-decoration: underline'>选项导航功能</span>";
					_status.kzol_openedkzjm.delete();
					_status.kzol_openedkzjm=false;
				});
				dialog.kzol_interval=setInterval(function(){
					if(
					(div2.parentNode==undefined||
					div2.parentNode.parentNode==undefined||
					div2.parentNode.parentNode.parentNode==undefined||
					div2.parentNode.parentNode.parentNode.parentNode==undefined)||
					ui.menuContainer.classList.contains('hidden')||
					ui.menuContainer.style.display=='none'){
						div2.innerHTML="<span style='text-decoration: underline'>选项导航功能</span>";
						if(dialog.kzol_interval!=undefined){
							clearInterval(dialog.kzol_interval);
							delete dialog.kzol_interval;
						};
						if(_status.kzol_openedkzjm!=false) _status.kzol_openedkzjm.delete();
						_status.kzol_openedkzjm=false;
					};
				},100);
				/*
				var list=[];
				for(var i=0;i<this.parentNode.childNodes.length;i++){
					var div=this.parentNode.childNodes[i];
					if(div.innerHTML.indexOf('---')!=-1) list.push(div);
				};
				for(var i=list.length-1;i>=0;i--){
					var div=list[i];
					if(i==list.length-1){
						var div_config1=ui.create.div();
						for(var j in div.style){
							div_config1.style[j]=div.style[j];
						};
						div_config1.style['margin-top']='0px';
						div_config1.style['line-height']='20px';
						div_config1.style.height='20px';
						div_config1.style.width='calc(100%)';
						div_config1.style.left='0px';
						div_config1.innerHTML='<b><p align=center> ----------------------------</b>';
						div_config1.link_dh=true;
						this.parentNode.insertBefore(div_config1,this.nextSibling);
					};
					var div_config=ui.create.div('.config');
					for(var j in div.style){
						div_config.style[j]=div.style[j];
					};
					div_config.style['margin-top']='0px';
					div_config.style['line-height']='20px';
					div_config.style.height='20px';
					var str='';
					for(var j=0;j<div.innerHTML.length;j++){
						if(div.innerHTML[j]!='-') str+=div.innerHTML[j];
					};
					div_config.innerHTML='<span style="cursor:pointer;">'+str.slice(13,div.innerHTML.length-15)+'</span>';
					div_config.link_dh=true;
					div_config.link=div;
					this.parentNode.insertBefore(div_config,this.nextSibling);
					div_config.onclick=function(){
						this.parentNode.parentNode.scrollTop=this.link.offsetTop;
					};
				};
				*/
			}else{
				this.innerHTML="<span style='text-decoration: underline'>选项导航功能</span>";
				if(_status.kzol_openedkzjm.kzol_interval!=undefined){
					clearInterval(_status.kzol_openedkzjm.kzol_interval);
					delete _status.kzol_openedkzjm.kzol_interval;
				};
				_status.kzol_openedkzjm.delete();
				_status.kzol_openedkzjm=false;
				/*
				for(var i=0;i<this.parentNode.childNodes.length;i++){
					var div=this.parentNode.childNodes[i];
					if(div.link_dh==true){
						this.parentNode.removeChild(div);
						i--;
					};
				};
				*/
			};
		},
	},
	
	"byzy_showdaomenu": {
		"name": "加入顶部左侧菜单",
		"init": true,
		"intro": "将“导”字按钮加入顶部左侧菜单栏，点击后快捷打开扩展界面。",
	},
	
	// 分割线
	"byzyfgx2":{
		"name":"<font size='4'>------2-17人扩展------</font>",
		"clear":true,
	},
	
	ntsgxsm: {
		name:'<div class="hth_menu">▶使用说明（点击后展开）</div>',
		clear:true,
		onclick:function(){
			if(this.hth_more==undefined){
				var more=ui.create.div('.hth_more',
				'<div style="border: 0px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
				'本次魔改：棘手怀念摧毁（暂时没有得到原作者允许）<br>参考（搬运）：尛 苩.魔改的多人运动扩展等'+
				'<br>'+
				'<br>1. 使用方法：<br>①2-8人场<br>自由配置2-8人全部身份选项（身份-标准模式），若无现成的选项可选，则需开启双内奸开关调整身份选项（点击触屏按钮，选项-开始-身份-双内奸，将1反调整为1内）。<br>②9-17人场<br>开启搬运自用扩展，点击触屏按钮，选项-开始-身份/国战-游戏人数-八人以上。<br>③界面缩放比例大小调节<br>法1：本体界面缩放设置选项（点击触屏按钮，选项-选项-外观-界面缩放）。<br>法2：本扩展界面缩放设置选项。<br>注：自动为游戏设置初始界面缩放比例，手机端设为100%界面缩放，电脑端设为135%界面缩放；重启后扩展界面缩放设置与本体界面缩放设置保持一致。'+
				'<br>④触屏按钮位置调整<br>棘手怀念摧毁的自用设置，可调整触屏按钮位置，手动重启后生效，若开启本选项则自动关闭记住按钮位置设置开关（点击触屏按钮，选项-选项-显示-记住按钮位置）；若关闭本选项，则调整触屏按钮位置为默认位置，开启记住按钮位置设置开关（重新开始后触屏按钮将保存的上一局的位置）。<br>注：本扩展接管了本体触屏按钮位置的设置（修改本体代码无效，若想调整触屏按钮位置要修改本扩展默认位置）。'+
				'<br>2. 关闭方法：可直接关闭本扩展，不会报错（关闭扩展后自动将游戏人数恢复为八人）。<br><span style="text-decoration: line-through;">旧版关闭方法：点击触屏按钮，选项-开始-身份/国战-游戏人数-八人及以下，关闭本扩展。<br>注：不按此操作者，报错后无需重置无名杀！而是直接退出游戏，然后重新进入其他非身份和国战的游戏模式（如挑战模式），再执行正确的关闭操作。</span>'+
				'<br>3. 前版更新说明：此扩展代码从《新英魂之忍》《风华绝代》扩展参考并搬运；搬运者：太上大牛。'+
				'<br>'+
				'<br>棘手怀念摧毁（主要）更新内容'+
				'<br>- 新增初始界面缩放比例设置（手机端设为100%界面缩放，电脑端设为135%界面缩放）；为方便调节界面缩放比例大小，本扩展新增界面缩放设置选项。'+
				'<br>- 新增触屏按钮位置选项（自用设置），可调整触屏按钮位置，手动重启后生效。'+
				'<br>- 完善2-8人场的身份选项，新增如1主7反等选项，还可开启双内奸开关调整身份选项（将1反调整为1内）；增加9-17人场身份选项（身份-标准模式，1主+X忠+Y反+Z内）。'+
				'<br>- 9-17人布局调整，配合棘手怀念摧毁的懒人包使用时，手机端建议70%界面缩放，电脑端建议95%界面缩放（非全屏、最大化）。'+
				'<br>- 解决了由于切换界面返回后显示不正常，需重新调缩放比例的问题（后续一步到位懒人包更新无需将搬运自用扩展的界面缩放功能搬入本体中，不用担心本体被其他扩展的界面缩放功能影响）。'+
				'<br>- 解决了原版扩展在游戏人数大于八人时关闭扩展后的报错问题。'+
				'<br>- 完善9-50人国战模式其他-控制界面座位号翻译。'+
				'<br>- 完善使用方法和关闭方法教程说明。'+
				'<br>- 新增本【使用说明】折叠选项，可更方便地展开与折叠查看。'+
				'<br>- 其他魔改内容略。'+
				'<br>'
				);
				this.parentNode.insertBefore(more,this.nextSibling);
				this.hth_more=more;
				this.innerHTML='<div class="hth_menu">▼使用说明（点击后折叠）</div>';
			}
			else{
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more;
				this.innerHTML='<div class="hth_menu">▶使用说明（点击后展开）</div>';
			};
		},
	},
	
	kzjmsf:{
		name:'界面缩放',
		intro: "除本体界面缩放设置选项（点击触屏按钮，选项-选项-外观-界面缩放）外，还可通过本扩展此选项调节界面缩放（即时生效）。<br>重启后扩展界面缩放设置与本体界面缩放设置保持一致（界面缩放比例大小以重启前最后一次选择的选项为准）。",
		item:{
			normalw:'170%',
			normalv:'165%',
			normalu:'160%',
			normalt:'155%',
			normals:'150%',
			normalr:'145%',
			normalq:'140%',
			normalp:'135%',
			normala:'130%',
			normalb:'125%',
			normalc:'120%',
			normald:'115%',
			normale:'110%',
			normalf:'105%',
			normal:'100%',
			normalg:'95%',
			normalh:'90%',
			normali:'85%',
			normalj:'80%',
			normalk:'75%',
			normall:'70%',
			normalm:'65%',
			normaln:'60%',
			normalo:'55%',
		},
		onclick:function(item){
			// 扩展界面缩放设置与本体界面缩放设置保持一致
			lib.configMenu.appearence.config.ui_zoom.onclick(item);
		},
	},
	
	"cpanwztz":{
		"name":"触屏按钮位置",
		"intro":"自用设置，可调整触屏按钮位置，若开启本选项则自动关闭记住按钮位置设置开关，手动重启后生效。<br>①手机：界面缩放100%、界面缩放95%、界面缩放70%。<br>②电脑：全屏（界面缩放135%）、非全屏（最大化，界面缩放130%和95%）。<br>若关闭本选项，则调整触屏按钮位置为默认位置，开启记住按钮位置设置开关（重新开始后触屏按钮将保存的上一局的位置）。",
		"init":lib.config.cpanwztz === undefined ? "off" : lib.config.cpanwztz,
		"item": {
			"off":"关闭",
			"shouji1":"手机-缩放100%",
			"shouji2":"手机-缩放95%",
			"shouji3":"手机-缩放90%",
			"shouji4":"手机-缩放70%",
			"diannao1":"电脑-全屏135%",
			"diannao2":"电脑-非全屏130%",
			"diannao3":"电脑-非全屏95%",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_cpanwztz',item);
			game.saveConfig('cpanwztz',item);
		},
	},
	
	byzy_shenfenchang:{
		clear:true,
		name:"<li>2-17人场（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_shenfenchang==undefined){
				lib.config.byzy_shenfenchang=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>2-17人场（点击后展开）▷";
				lib.config.byzy_shenfenchang.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>2-17人场（点击后折叠）▽";
				lib.config.byzy_shenfenchang.forEach(function(element) {element.show()});
				delete lib.config.byzy_shenfenchang;
			}
		}
	},
	"byzy_shenfenchangkg":{
		"name":"2-17人场开关",
		"intro":"开启后启用2-17人场；关闭后自动将游戏人数恢复为八人，避免报错。<br>若遇冲突请关闭本选项！",
		"init":lib.config.byzy_shenfenchangkg === undefined ? true : lib.config.byzy_shenfenchangkg,
		onclick:function(item){
			game.saveConfig('byzy_shenfenchangkg',item);
			game.saveConfig('extension_搬运自用_byzy_shenfenchangkg',item);
		}
	},
	"two2Man":{"name":"二人场身份","init":"1","item":{"1":"1主0忠1反0内","2":"1主0忠0反1内"}},
	"three3Man":{"name":"三人场身份","init":"1","item":{"1":"1主0忠1反1内","2":"1主1忠1反0内","3":"1主1忠0反1内","4":"1主0忠2反0内","5":"1主0忠0反2内"}},
	"four4Man":{"name":"四人场身份","init":"1","item":{"1":"1主1忠1反1内","2":"1主1忠2反0内","3":"1主2忠1反0内","4":"1主0忠1反2内","5":"1主0忠3反0内","6":"1主0忠0反3内"}},
	"five5Man":{"name":"五人场身份","init":"1","item":{"1":"1主1忠2反1内","2":"1主1忠3反0内","3":"1主1忠0反3内","4":"1主3忠1反0内","5":"1主2忠2反0内","6":"1主2忠0反2内","7":"1主0忠2反2内","8":"1主0忠4反0内","9":"1主0忠0反4内"}},
	"six6Man":{"name":"六人场身份","init":"1","item":{"1":"1主1忠3反1内","2":"1主1忠4反0内","3":"1主1忠1反3内","4":"1主4忠1反0内","5":"1主3忠2反0内","6":"1主3忠0反2内","7":"1主2忠3反0内","8":"1主2忠1反2内","9":"1主0忠3反2内","10":"1主0忠1反4内","11":"1主0忠5反0内","12":"1主0忠0反5内"}},
	"seven7Man":{"name":"七人场身份","init":"1","item":{"1":"1主2忠3反1内","2":"1主2忠4反0内","3":"1主2忠1反3内","4":"1主5忠1反0内","5":"1主4忠2反0内","6":"1主4忠0反2内","7":"1主3忠3反0内","8":"1主3忠1反2内","9":"1主1忠5反0内","10":"1主1忠3反2内","11":"1主1忠1反4内","12":"1主0忠4反2内","13":"1主0忠2反4内","14":"1主0忠6反0内","15":"1主0忠0反6内"}},
	"eight8Man":{"name":"八人场身份","init":"1","item":{"1":"1主2忠4反1内","2":"1主2忠5反0内","3":"1主2忠2反3内","4":"1主2忠0反5内","5":"1主6忠1反0内","6":"1主5忠2反0内","7":"1主5忠0反2内","8":"1主4忠3反0内","9":"1主4忠1反2内","10":"1主3忠4反0内","11":"1主3忠2反2内","12":"1主3忠0反4内","13":"1主1忠6反0内","14":"1主1忠4反2内","15":"1主1忠2反4内","16":"1主1忠0反6内","17":"1主0忠5反2内","18":"1主0忠3反4内","19":"1主0忠1反6内","20":"1主0忠7反0内","21":"1主0忠0反7内"}},
	"nine9Man":{"name":"九人场身份","init":"1","item":{"1":"1主3忠4反1内","2":"1主3忠5反0内","3":"1主4忠4反0内","4":"1主2忠4反2内","5":"1主0忠8反0内","6":"1主0忠0反8内"}},
	"ten10Man":{"name":"十人场身份","init":"1","item":{"1":"1主3忠4反2内","2":"1主3忠5反1内","3":"1主4忠5反0内","4":"1主0忠9反0内","5":"1主0忠0反9内"}},
	"eleven11Man":{"name":"十一人场身份","init":"1","item":{"1":"1主4忠5反1内","2":"1主4忠6反0内","3":"1主5忠5反0内","4":"1主3忠5反2内","5":"1主0忠10反0内","6":"1主0忠0反10内"}},
	"twelve12Man":{"name":"十二人场身份","init":"1","item":{"1":"1主4忠5反2内","2":"1主4忠6反1内","3":"1主5忠6反0内","4":"1主0忠11反0内","5":"1主0忠0反11内"}},
	"thirteen13Man":{"name":"十三人场身份","init":"1","item":{"1":"1主5忠6反1内","2":"1主5忠7反0内","3":"1主6忠6反0内","4":"1主4忠6反2内","5":"1主0忠12反0内","6":"1主0忠0反12内"}},
	"fourteen14Man":{"name":"十四人场身份","init":"1","item":{"1":"1主5忠6反2内","2":"1主5忠7反1内","3":"1主6忠7反0内","4":"1主0忠13反0内","5":"1主0忠0反13内"}},
	"fifteen15Man":{"name":"十五人场身份","init":"1","item":{"1":"1主6忠7反1内","2":"1主6忠8反0内","3":"1主7忠7反0内","4":"1主5忠7反2内","5":"1主0忠14反0内","6":"1主0忠0反14内"}},
	"Sixteen16Man":{"name":"十六人场身份","init":"1","item":{"1":"1主6忠7反2内","2":"1主6忠8反1内","3":"1主7忠8反0内","4":"1主5忠7反3内","5":"1主0忠15反0内","6":"1主0忠0反15内"}},
	"Seventeen17Man":{"name":"十七人场身份","init":"1","item":{"1":"1主7忠8反1内","2":"1主7忠9反0内","3":"1主8忠8反0内","4":"1主6忠8反2内","5":"1主5忠8反3内","6":"1主4忠8反4内","7":"1主0忠16反0内","8":"1主0忠0反16内"}},
	
	byzy_duorenchang:{
		clear:true,
		name:"<li>多人场设置（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_duorenchang==undefined){
				lib.config.byzy_duorenchang=[
					this.nextSibling,
					this.nextSibling.nextSibling,
				];
				this.innerHTML="<li>多人场设置（点击后展开）▷";
				lib.config.byzy_duorenchang.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>多人场设置（点击后折叠）▽";
				lib.config.byzy_duorenchang.forEach(function(element) {element.show()});
				delete lib.config.byzy_duorenchang;
			}
		}
	},
	zuiduoyouxirenshu: {
		name: '最多游戏人数',
		intro: '可设置最多游戏人数（默认为17人），手动重启后生效。',
		init: '17',
		item: {
			'17': '17人',
			'18': '18人',
			'19': '19人',
			'20': '20人',
			'25': '25人',
			'30': '30人',
			'35': '35人',
			'40': '40人',
			'45': '45人',
			'50': '50人',
			'100': '100人',
		},
		onclick:function(item){
			game.saveConfig('zuiduoyouxirenshu',item);
			game.saveConfig('extension_搬运自用_zuiduoyouxirenshu',item);
		}
	},
	bentibuju: {
		name: '使用本体布局',
		intro: "▶当人数不超过8人时：还是用以前的布局（无论本开关是否开启）<br>▶当人数不超过17人时：若开启本开关或关闭2-17人场开关，则使用本体布局；否则是用本扩展的布局<br>▶当人数大于17人时：则使用本体布局（无论本开关是否开启）",
		init: false,
	},
	
	// 分割线
	"byzyfgx3":{
		"name":"<font size='4'>------AI禁将功能------</font>",
		"clear":true,
	},
	
	aijinjiang_fenjiexian1:{
		clear:true,
		name:"<li>性别（点击后折叠）▽",
		onclick:function(){
			if(lib.config.aijinjiang_fenjiexian1==undefined){
				lib.config.aijinjiang_fenjiexian1=[
					this.nextSibling,
				];
				this.innerHTML="<li>性别（点击后展开）▷";
				lib.config.aijinjiang_fenjiexian1[0].hide();
			}else{
				this.innerHTML="<li>性别（点击后折叠）▽";
				lib.config.aijinjiang_fenjiexian1[0].show();
				delete lib.config.aijinjiang_fenjiexian1;
			}
		}
	},
	"aijinjiangxingbie":{
		"name":"AI禁将-性别",
		"intro":"AI根据性别禁选武将【保留选项武将】，手动重启后生效。",
		"init":lib.config.aijinjiangxingbie === undefined ? "off" : lib.config.aijinjiangxingbie,
		"item": {
			"off":"关闭",
			"male":"保留男性武将",
			"female":"保留女性武将",
			"double":"保留双性武将",
			"malefemale":"保留男性和女性",
			"maledouble":"保留男性和双性",
			"femaledouble":"保留女性和双性",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_aijinjiangxingbie',item);
			game.saveConfig('aijinjiangxingbie',item);
		},
	},
	aijinjiang_fenjiexian2:{
		clear:true,
		name:"<li>势力（点击后折叠）▽",
		onclick:function(){
			if(lib.config.aijinjiang_fenjiexian2==undefined){
				lib.config.aijinjiang_fenjiexian2=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>势力（点击后展开）▷";
				lib.config.aijinjiang_fenjiexian2.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>势力（点击后折叠）▽";
				lib.config.aijinjiang_fenjiexian2.forEach(function(element) {element.show()});
				delete lib.config.aijinjiang_fenjiexian2;
			}
		}
	},
	"aijinjiangshiliwei":{
		"name":"AI禁将-保留魏势力武将",
		"intro":"开启后AI禁选非魏势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshiliwei === undefined ? false : lib.config.aijinjiangshiliwei,
		onclick:function(item){
			game.saveConfig('aijinjiangshiliwei',item);
			game.saveConfig('extension_搬运自用_aijinjiangshiliwei',item);
		}
	},
	"aijinjiangshilishu":{
		"name":"AI禁将-保留蜀势力武将",
		"intro":"开启后AI禁选非蜀势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshilishu === undefined ? false : lib.config.aijinjiangshilishu,
		onclick:function(item){
			game.saveConfig('aijinjiangshilishu',item);
			game.saveConfig('extension_搬运自用_aijinjiangshilishu',item);
		}
	},
	"aijinjiangshiliwu":{
		"name":"AI禁将-保留吴势力武将",
		"intro":"开启后AI禁选非吴势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshiliwu === undefined ? false : lib.config.aijinjiangshiliwu,
		onclick:function(item){
			game.saveConfig('aijinjiangshiliwu',item);
			game.saveConfig('extension_搬运自用_aijinjiangshiliwu',item);
		}
	},
	"aijinjiangshiliqun":{
		"name":"AI禁将-保留群势力武将",
		"intro":"开启后AI禁选非群势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshiliqun === undefined ? false : lib.config.aijinjiangshiliqun,
		onclick:function(item){
			game.saveConfig('aijinjiangshiliqun',item);
			game.saveConfig('extension_搬运自用_aijinjiangshiliqun',item);
		}
	},
	"aijinjiangshilijin":{
		"name":"AI禁将-保留晋势力武将",
		"intro":"开启后AI禁选非晋势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshilijin === undefined ? false : lib.config.aijinjiangshilijin,
		onclick:function(item){
			game.saveConfig('aijinjiangshilijin',item);
			game.saveConfig('extension_搬运自用_aijinjiangshilijin',item);
		}
	},
	"aijinjiangshilishen":{
		"name":"AI禁将-保留神势力武将",
		"intro":"开启后AI禁选非神势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshilishen === undefined ? false : lib.config.aijinjiangshilishen,
		onclick:function(item){
			game.saveConfig('aijinjiangshilishen',item);
			game.saveConfig('extension_搬运自用_aijinjiangshilishen',item);
		}
	},
	"aijinjiangshilishuang":{
		"name":"AI禁将-保留双势力武将",
		"intro":"开启后AI禁选非双势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshilishuang === undefined ? false : lib.config.aijinjiangshilishuang,
		onclick:function(item){
			game.saveConfig('aijinjiangshilishuang',item);
			game.saveConfig('extension_搬运自用_aijinjiangshilishuang',item);
		}
	},
	"aijinjiangshilikey":{
		"name":"AI禁将-保留键势力武将",
		"intro":"开启后AI禁选非键势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshilikey === undefined ? false : lib.config.aijinjiangshilikey,
		onclick:function(item){
			game.saveConfig('aijinjiangshilikey',item);
			game.saveConfig('extension_搬运自用_aijinjiangshilikey',item);
		}
	},
	"aijinjiangshiliwestern":{
		"name":"AI禁将-保留西势力武将",
		"intro":"开启后AI禁选非西势力武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshiliwestern === undefined ? false : lib.config.aijinjiangshiliwestern,
		onclick:function(item){
			game.saveConfig('aijinjiangshiliwestern',item);
			game.saveConfig('extension_搬运自用_aijinjiangshiliwestern',item);
		}
	},
	"aijinjiangshiliye":{
		"name":"AI禁将-保留野势力武将",
		"intro":"开启后AI禁选非野势力武将（即保留国战野心家武将），可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangshiliye === undefined ? false : lib.config.aijinjiangshiliye,
		onclick:function(item){
			game.saveConfig('aijinjiangshiliye',item);
			game.saveConfig('extension_搬运自用_aijinjiangshiliye',item);
		}
	},
	aijinjiang_fenjiexian3:{
		clear:true,
		name:"<li>武将评级（点击后折叠）▽",
		onclick:function(){
			if(lib.config.aijinjiang_fenjiexian3==undefined){
				lib.config.aijinjiang_fenjiexian3=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>武将评级（点击后展开）▷";
				lib.config.aijinjiang_fenjiexian3.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>武将评级（点击后折叠）▽";
				lib.config.aijinjiang_fenjiexian3.forEach(function(element) {element.show()});
				delete lib.config.aijinjiang_fenjiexian3;
			}
		}
	},
	"aijinjiangpingjipf":{
		"name":"AI禁将-保留平凡A",
		"intro":"开启后AI禁选非武将评级为平凡A的武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangpingjipf === undefined ? false : lib.config.aijinjiangpingjipf,
		onclick:function(item){
			game.saveConfig('aijinjiangpingjipf',item);
			game.saveConfig('extension_搬运自用_aijinjiangpingjipf',item);
		}
	},
	"aijinjiangpingjipt":{
		"name":"AI禁将-保留普通A+",
		"intro":"开启后AI禁选非武将评级为普通A+的武将（若未为武将评级，则默认为普通武将），可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangpingjipt === undefined ? false : lib.config.aijinjiangpingjipt,
		onclick:function(item){
			game.saveConfig('aijinjiangpingjipt',item);
			game.saveConfig('extension_搬运自用_aijinjiangpingjipt',item);
		}
	},
	"aijinjiangpingjijp":{
		"name":"AI禁将-保留精品S",
		"intro":"开启后AI禁选非武将评级为精品S的武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangpingjijp === undefined ? false : lib.config.aijinjiangpingjijp,
		onclick:function(item){
			game.saveConfig('aijinjiangpingjijp',item);
			game.saveConfig('extension_搬运自用_aijinjiangpingjijp',item);
		}
	},
	"aijinjiangpingjiss":{
		"name":"AI禁将-保留史诗SS",
		"intro":"开启后AI禁选非武将评级为史诗SS的武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangpingjiss === undefined ? false : lib.config.aijinjiangpingjiss,
		onclick:function(item){
			game.saveConfig('aijinjiangpingjiss',item);
			game.saveConfig('extension_搬运自用_aijinjiangpingjiss',item);
		}
	},
	"aijinjiangpingjics":{
		"name":"AI禁将-保留传说SSS",
		"intro":"开启后AI禁选非武将评级为传说SSS的武将，可与其他的禁将选项配合，自由选择配置禁选组合，手动重启后生效。",
		"init":lib.config.aijinjiangpingjics === undefined ? false : lib.config.aijinjiangpingjics,
		onclick:function(item){
			game.saveConfig('aijinjiangpingjics',item);
			game.saveConfig('extension_搬运自用_aijinjiangpingjics',item);
		}
	},
	
	// 分割线
	"byzyfgx4":{
		"name":"<font size='4'>----禁将与解除禁将-----</font>",
		"clear":true,
	},
	
	"byzy_jjgn":{
		"name":"禁将功能",
		"intro":"将控制台命令代码写入扩展，详情请点击上方更新说明查看。<br>点击选项后请认真看弹窗说明，然后选择【确定】或【取消】。",
		"init":"1",
		"item":{
			"1":"解除所有游戏模式禁将",
			"2":"解除非当前模式禁将",
			"3":"应用当前禁将到全部",
			"4":"所有武将随机选将可用",
			"5":"场上所有角色禁将",
			"6":"解除场上所有角色禁将",
			"7":"场上其他角色禁将",
			"8":"解除场上其他角色禁将",
		},
		onclick:function(item){
			if(item == '1'){
				if(confirm("是否解除所有游戏模式禁将，即启用在武将-禁将里的武将（所有游戏模式），相当于将武将资料卡-禁用-所有游戏模式开关开启（全部启用）。\n\r继续请点击【确定】，自动重启后生效。")){
					game.zxgn(1001);
					game.reload();
				};
			}
			if(item == '2'){
				if(confirm("当前游戏模式为："+lib.translate[lib.config.mode]+"\n是否解除非当前游戏模式禁将，即启用在武将-禁将里的武将（非当前游戏模式），相当于将武将资料卡-禁用-非当前游戏模式开关开启。\n\r继续请点击【确定】，自动重启后生效。")){
					game.zxgn(1002);
					game.reload();
				};
			}
			if(item == '3'){
				if(confirm("是否应用当前禁将到全部，即将当前游戏模式禁将应用到非当前游戏模式，相当于将武将-禁将里的当前游戏模式已禁用的武将的资料卡-禁用-所有游戏模式开关关闭（全部禁用）。\n\r继续请点击【确定】，自动重启后生效。")){
					game.zxgn(1003);
					game.reload();
				};
			}
			if(item == '4'){
				if(confirm("是否设置所有武将随机选将可用，即将武将包仅点将可用开关全部关闭&武将资料卡-禁用-随机选将可用开关全部开启。\n\r继续请点击【确定】，自动重启后生效。")){
					game.zxgn(1004);
					game.reload();
				};
			}
			if(item == '5'){
				if(confirm("是否在已有禁将的基础上继续场上所有角色禁将（当前游戏模式），即把场上所有角色的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭。\n\r继续请点击【确定】，手动重启后生效；若想解除禁将，请在未手动重启前使用“解除场上所有角色禁将”功能。")){
					game.zxgn(1005);
				};
			}
			if(item == '6'){
				if(confirm("是否在已有禁将的基础上解除场上所有角色禁将（当前游戏模式）【前提是已禁将但未手动重启】，即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启。\n\r继续请点击【确定】，手动重启后生效。")){
					game.zxgn(1006);
				};
			}
			if(item == '7'){
				if(confirm("是否在已有禁将的基础上继续场上其他角色禁将（当前游戏模式），即把场上其他角色的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭。\n\r继续请点击【确定】，手动重启后生效；若想解除禁将，请在未手动重启前使用“解除场上其他角色禁将”功能。")){
					game.zxgn(1007);
				};
			}
			if(item == '8'){
				if(confirm("是否在已有禁将的基础上解除场上其他角色禁将（当前游戏模式）【前提是已禁将但未手动重启】，即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启。\n\r继续请点击【确定】，手动重启后生效。")){
					game.zxgn(1008);
				};
			}
		},
	},
	
	"byzy_dqmsjj":{
		"name":"当前模式禁将",
		"intro":"在当前游戏模式下，在已有禁将的基础上继续禁用武将，点击选项后自动重启后生效；即把要禁用的武将加入武将-禁将，相当于将武将资料卡-禁用-当前游戏模式开关关闭。<br>若想将当前游戏模式禁将应用到非当前游戏模式可使用禁将功能的应用当前禁将到全部。",
		"init":"1",
		"item":{
			"1":"全部禁将",
			"2":"禁用男性武将",
			"3":"禁用女性武将",
			"4":"禁用双性武将",
			"5":"禁用主公武将",
			"6":"禁用魏势力武将",
			"7":"禁用魏男性武将",
			"8":"禁用魏女性武将",
			"9":"禁用蜀势力武将",
			"10":"禁用蜀男性武将",
			"11":"禁用蜀女性武将",
			"12":"禁用吴势力武将",
			"13":"禁用吴男性武将",
			"14":"禁用吴女性武将",
			"15":"禁用群势力武将",
			"16":"禁用群男性武将",
			"17":"禁用群女性武将",
			"18":"禁用晋势力武将",
			"19":"禁用晋男性武将",
			"20":"禁用晋女性武将",
			"21":"禁用神势力武将",
			"22":"禁用双势力武将",
			"23":"禁用键势力武将",
			"24":"禁用西势力武将",
			"25":"禁用野势力武将",
			"26":"禁用平凡武将A",
			"27":"禁用普通武将A+",
			"28":"禁用精品武将S",
			"29":"禁用史诗武将SS",
			"30":"禁用传说武将SSS",
			"31":"禁用护甲武将",
			"32":"禁用体力≠上限武将",
			"33":"禁用1上限武将",
			"34":"禁用2上限武将",
			"35":"禁用3上限武将",
			"36":"禁用4上限武将",
			"37":"禁用5上限武将",
			"38":"禁用6上限武将",
			"39":"禁用7上限武将",
			"40":"禁用8上限武将",
			"41":"禁用>8上限武将",
		},
		onclick:function(item){
			game.wjtjgn(Number(item));
		},
	},
	
	"byzy_jcdqmsjj":{
		"name":"解除当前模式禁将",
		"intro":"在当前游戏模式下，在已有禁将的基础上解除禁用武将，点击选项后自动重启后生效；即启用在武将-禁将里的武将，相当于将武将资料卡-禁用-当前游戏模式开关开启。<br>其他解除禁将的功能可使用禁将功能。",
		"init":"42",
		"item":{
			"42":"解除全部禁将",
			"43":"解除男性禁将",
			"44":"解除女性禁将",
			"45":"解除双性禁将",
			"46":"解除主公禁将",
			"47":"解除魏势力禁将",
			"48":"解除魏男性武将",
			"49":"解除魏女性武将",
			"50":"解除蜀势力禁将",
			"51":"解除蜀男性武将",
			"52":"解除蜀女性武将",
			"53":"解除吴势力禁将",
			"54":"解除吴男性武将",
			"55":"解除吴女性武将",
			"56":"解除群势力禁将",
			"57":"解除群男性武将",
			"58":"解除群女性武将",
			"59":"解除晋势力禁将",
			"60":"解除晋男性武将",
			"61":"解除晋女性武将",
			"62":"解除神势力禁将",
			"63":"解除双势力禁将",
			"64":"解除键势力禁将",
			"65":"解除西势力禁将",
			"66":"解除野势力禁将",
			"67":"解除平凡A禁将",
			"68":"解除普通A+禁将",
			"69":"解除精品S禁将",
			"70":"解除史诗SS禁将",
			"71":"解除传说SSS禁将",
			"72":"解除护甲武将",
			"73":"解除体力≠上限武将",
			"74":"解除1上限武将",
			"75":"解除2上限武将",
			"76":"解除3上限武将",
			"77":"解除4上限武将",
			"78":"解除5上限武将",
			"79":"解除6上限武将",
			"80":"解除7上限武将",
			"81":"解除8上限武将",
			"82":"解除>8上限武将",
		},
		onclick:function(item){
			game.wjtjgn(Number(item));
		},
	},
	
	// 分割线
	"byzyfgx5":{
		"name":"<font size='4'>------资料卡功能------</font>",
		"clear":true,
	},
	
	byzy_fenjiexian2:{
		clear:true,
		name:"<font size='3'><li>鸣谢：金庸群侠传</font>",
	},
	
	"byzy_zlkxg": {
		"name": "资料卡修改",
		"intro": "修改本体的资料卡（暂时仅支持样式二）：<br>左下角区域（禁将按钮和收藏按钮）可滑动了；<br>左下角区域，新增注解按钮，点击后切换资料卡注解，即时生效；<br>左下角区域，新增台词按钮，点击设置台词是否显示，功能同资料卡显示台词，即时生效；<br>左下角区域，新增切换按钮，点击设置是否查看切换后的双形态原画（含语音台词），功能同资料卡查看双形态原画；<br>左下角区域，新增阵亡按钮和胜利按钮，用于试听配音。<br>其他修改略，要先打开资料卡修改开关才能生效。<br>若遇冲突请关闭本选项！",
		"init": true,
	},
	
	"byzy_zlkwjxx":{
		"name": "资料卡点击查看武将信息",
		"intro": "开启后，点击武将名或武将名注解，可查看武将信息，包括：武将名ID、武将名翻译、所在武将包、所在武将包的分类、武将称号、[姓,名]、武将评级、是否主公武将等（通过弹窗显示、命令框（其它-命令）或控制台查看），即时生效（要先打开资料卡修改开关和选项-显示-显示武将名注解才能生效）。",
		"init":lib.config.byzy_zlkwjxx === undefined ? true : lib.config.byzy_zlkwjxx,
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_zlkwjxx',item);
			game.saveConfig('byzy_zlkwjxx',item);
		},
	},
	
	"byzy_zlkcode":{
		"name": "资料卡点击查看技能信息",
		"intro": "开启后，点击技能名注解，可查看技能信息，包括：技能名ID、技能名翻译、技能描述、技能代码等（通过弹窗显示、命令框（其它-命令）或控制台查看），即时生效（要先打开资料卡修改开关和选项-显示-显示技能名注解才能生效）。",
		"init":lib.config.byzy_zlkcode === undefined ? true : lib.config.byzy_zlkcode,
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_zlkcode',item);
			game.saveConfig('byzy_zlkcode',item);
		},
	},
	
	"byzy_zlkxstc":{
		"name": "资料卡显示台词",
		"intro": "开启后显示台词，关闭后不显示台词，即时生效（要先打开资料卡修改开关才能生效）。",
		"init":lib.config.byzy_zlkxstc === undefined ? true : lib.config.byzy_zlkxstc,
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_zlkxstc',item);
			game.saveConfig('byzy_zlkxstc',item);
		},
	},
	
	"byzy_zlkcksxtyh":{
		"name": "资料卡查看双形态原画",
		"intro": "开启后可查看切换后的双形态原画（含语音台词），关闭后仅可查看初始原画（要先打开资料卡修改开关才能生效）。",
		"init":lib.config.byzy_zlkcksxtyh === undefined ? true : lib.config.byzy_zlkcksxtyh,
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_zlkcksxtyh',item);
			game.saveConfig('byzy_zlkcksxtyh',item);
		},
	},
	
	"byzy_zlkysjnpy":{
		"name": "资料卡试听衍生技能配音",
		"intro": "开启后，点击技能介绍的技能名，可试听衍生技能配音，即时生效（要先打开资料卡修改开关才能生效）。",
		"init":lib.config.byzy_zlkysjnpy === undefined ? true : lib.config.byzy_zlkysjnpy,
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_zlkysjnpy',item);
			game.saveConfig('byzy_zlkysjnpy',item);
		},
	},
	
	"byzy_zwpy": {
		"name": "资料卡试听阵亡配音",
		"intro": "开启后，会在资料卡界面添加阵亡按钮，点击后可试听武将阵亡配音（暂不支持扩展阵亡配音试听，要先打开资料卡修改开关才能生效）。<br>若遇冲突请关闭本选项！",
		"init": true,
	},
	
	"byzy_slpy": {
		"name": "资料卡试听胜利配音",
		"intro": "【暂不可用，等本体更新中】开启后，会在资料卡界面添加胜利按钮，点击后可试听武将胜利配音（暂不支持扩展胜利配音试听，要先打开资料卡修改开关才能生效）。<br>若遇冲突请关闭本选项！",
		"init": false,
	},
	
	"byzy_ckbkjwjzlk": {
		"name": "查看不可见武将资料卡",
		"intro": "开启后，可查看不可见武将的资料卡，包括隐匿的武将、暗置的武将等，即时生效（要先打开资料卡修改开关才能生效）。",
		"init": false,
	},
	
	// 分割线
	"byzyfgx6":{
		"name":"<font size='4'>----武将称号&性别-----</font>",
		"clear":true,
	},
	
	wujiangchenghao: {
		name: '武将称号补充',
		intro: "开启后在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将称号（缓更中）。",
		init: true,
	},
	
	wujiangxingbie: {
		name: '武将性别显示',
		intro: "开启后关闭本体的显示角色性别开关，在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将性别（含扩展）；关闭后开启本体的显示角色性别开关（若不想显示武将性别，还需前往本体选项-显示-显示角色性别关闭）。<br>重启后生效。",
		init: true,
		onclick:function(bool){
			game.saveConfig('wujiangxingbie',bool);
			game.saveConfig('extension_搬运自用_wujiangxingbie',bool);
			// 开启后关闭本体的显示角色性别开关，关闭后开启本体的显示角色性别开关
			if(bool){
				game.saveConfig('show_sex',false);
			}else{
				game.saveConfig('show_sex',true);
			}
		}
	},
	
	// 分割线
	"byzyfgx7":{
		"name":"<font size='4'>----武将&卡牌引文-----</font>",
		"clear":true,
	},
	
	byzy_fenjiexian3:{
		clear:true,
		name:"<font size='3'><li>鸣谢：群英荟萃乀摧林</font>",
	},
	
	youjiancaidan: {
		name: '长按/右击弹出菜单修改',
		intro: "修改手机端长按/电脑端右击武将头像后的武将信息查看界面菜单：<br>新增武将引文接口，开启后才能使用武将引文补充；<br>发送交互表情时间修改；<br>其他修复<br>若遇冲突请关闭本选项！",
		init: true,
	},
	
	wujiangyinwen: {
		name: '武将引文补充',
		intro: "开启后在手机端长按/电脑端右击武将头像后的武将信息查看界面显示武将引文（缓更中），需先开启右键菜单修改。",
		init: true,
	},
	
	kapaiyinwen: {
		name: '卡牌引文补充',
		intro: "开启后在手机端长按/电脑端右击卡牌后的卡牌信息查看界面显示卡牌引文（缓更中）。",
		init: true,
	},
	
	// 分割线
	"byzyfgx8":{
		"name":"<font size='4'>------控制台功能------</font>",
		"clear":true,
	},
	
	byzy_fenjiexian4:{
		clear:true,
		name:"<font size='3'><li>鸣谢：蜀汉中兴</font>",
	},
	
	"byzy_kongzhitaiplus": {
		"name": "<span style='text-decoration: underline;'>控制台-功能加强版</span>",
		"clear": true,
		onclick: function() {
			consoleopen();
		},
	},
	
	"byzy_showkongmenu": {
		"name": "加入顶部左侧菜单",
		"init": true,
		"intro": "将“控”字按钮加入顶部左侧菜单栏，点击后可快捷打开控制台。",
	},
	
	// 分割线
	"byzyfgx9":{
		"name":"<font size='4'>-----自由选将增强-----</font>",
		"clear":true,
	},
	
	zyxjssgn: {
		name: "自由选将-搜索功能",
		intro: "搬运自扩展ol，新增一个自由选将搜索框合并武将搜索功能，输入任意关键词即可搜索（无需细分搜索类别）；新增技能台词、阵亡台词、武将称号等搜索选项；新增开关，在搜索技能时，可设置搜索技能、搜索衍生技能、搜索技能+衍生技能；新增任意关键字选项补充设置，可自行配置搜索选项。",
		init: true,
	},
	
	zyxjssjn: {
		name: "| 搜索技能",
		intro: "自由选将-搜索功能补充设置：开启本开关后，在使用该功能搜索技能时，会搜索技能，即时生效。<li>涉及的选项有：任意关键字、技能名翻译、技能名ID、技能描述、技能台词",
		init: true,
	},
	
	zyxjssysjn: {
		name: "| 搜索衍生技能",
		intro: "自由选将-搜索功能补充设置：开启本开关后，在使用该功能搜索技能时，会搜索衍生技能，即时生效。<li>涉及的选项有：任意关键字、技能名翻译、技能名ID、技能描述、技能台词",
		init: true,
	},
	
	zyxjssgn_fenjiexian1:{
		clear:true,
		name:"<li>任意关键字（点击后折叠）▽",
		onclick:function(){
			if(lib.config.zyxjssgn_fenjiexian1==undefined){
				lib.config.zyxjssgn_fenjiexian1=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>任意关键字（点击后展开）▷";
				lib.config.zyxjssgn_fenjiexian1.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>任意关键字（点击后折叠）▽";
				lib.config.zyxjssgn_fenjiexian1.forEach(function(element) {element.show()});
				delete lib.config.zyxjssgn_fenjiexian1;
			}
		}
	},
	zyxjssgnname0: {
		name: "| 武将名翻译",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索武将名翻译，即时生效。",
		init: true,
	},
	zyxjssgnname1: {
		name: "| 武将名ID",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索武将名ID，即时生效。",
		init: true,
	},
	zyxjssgnskill0: {
		name: "| 技能名翻译",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索技能名翻译，即时生效。",
		init: true,
	},
	zyxjssgnskill1: {
		name: "| 技能名ID",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索技能名ID，即时生效。",
		init: true,
	},
	zyxjssgnskill2: {
		name: "| 技能描述",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索技能描述，即时生效。",
		init: true,
	},
	zyxjssgntaici0: {
		name: "| 技能台词",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索技能台词，即时生效。",
		init: true,
	},
	zyxjssgntaici1: {
		name: "| 阵亡台词",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索阵亡台词，即时生效。",
		init: true,
	},
	zyxjssgnchenghao: {
		name: "| 武将称号",
		intro: "自由选将-搜索功能-任意关键字选项补充设置：开启本开关后，在使用任意关键字选项搜索时，会搜索武将称号，即时生效。",
		init: true,
	},
	
	zyxjsxankz: {
		name: "自由选将-筛选按钮扩充",
		intro: "扩充自由选将筛选按钮：男性、女性、双性，可根据性别筛选（统计）武将；主公（可筛选主公武将）；护甲（可筛选带护甲的武将）、不同体力上限筛选，实现更加自由灵活地禁选将。",
		init: true,
	},
	
	"byzy_anniusuiji": {
		name: '自由选将-随机按钮',
		init: true,
		intro: '由原功能【AI选将】分离而来，开启后，将在自由选将界面添加“随机”筛选按钮，点击该按钮可切换显示全部武将和随机武将。',
	},
	
	// 分割线
	"byzyfgx10":{
		"name":"<font size='4'>-----重新选将功能-----</font>",
		"clear":true,
	},
	
	byzy_fenjiexian5:{
		clear:true,
		name:"<font size='3'><li>鸣谢：假装无敌</font>",
	},
	
	"byzy_AIxuanjiang": {
		name: '重新选将功能',
		init: false,
		intro: '原功能名为【AI选将】，开启后，游戏开始时玩家可以为AI或自己重新选将。(限身份场、斗地主、国战)<br>可通过重选单双将选项设置单双将(限身份场、斗地主)，即时生效。',
	},
	
	"byzy_cxdsj":{
		"name": "重选单双将(即时生效)",
		"intro": "游戏开始时或游戏中重新选将时可重选单双将了，即时生效。(限身份场、斗地主)",
		"init":lib.config.byzy_cxdsj === undefined ? "0" : lib.config.byzy_cxdsj,
		"item":{
			"0":"关闭",
			"1":"单将",
			"2":"双将",
		},
		onclick:function(item){
			game.saveConfig('byzy_cxdsj',item);
			game.saveConfig('extension_搬运自用_byzy_cxdsj',item);
		}
	},
	
	// 分割线
	"byzyfgx11":{
		"name":"<font size='4'>-----交换位置功能-----</font>",
		"clear":true,
	},
	
	byzy_fenjiexian6:{
		clear:true,
		name:"<font size='3'><li>鸣谢：祖安武将</font>",
	},
	
	"byzy_diycharacterskill": {
		name: '交换位置功能',
		init: false,
		intro: '分离自原功能【游戏自定义工具】，开启后，游戏开始时玩家可以交换两名角色的座次，从而自定义场上所有角色的位置。(限身份场、斗地主、国战)',
	},
	
	// 分割线
	"byzyfgx12":{
		"name":"<font size='4'>-----调整卡牌功能-----</font>",
		"clear":true,
	},
	
	byzy_tiaozhengshoupai_fenjiexian1:{
		clear:true,
		name:"<li>调整卡牌（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_tiaozhengshoupai_fenjiexian1==undefined){
				lib.config.byzy_tiaozhengshoupai_fenjiexian1=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>调整卡牌（点击后展开）▷";
				lib.config.byzy_tiaozhengshoupai_fenjiexian1.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>调整卡牌（点击后折叠）▽";
				lib.config.byzy_tiaozhengshoupai_fenjiexian1.forEach(function(element) {element.show()});
				delete lib.config.byzy_tiaozhengshoupai_fenjiexian1;
			}
		}
	},
	"byzy_tiaozhengshoupai": {
		name: '调整手牌和牌堆功能',
		init: false,
		intro: '开启后，分发起始手牌后，玩家可以调整手牌和牌堆功能。(限身份场、斗地主、国战)',
	},
	"byzy_tiaozhengshoupai_wj": {
		name: '| 调整手牌（玩家）',
		init: true,
		intro: '调整选项',
	},
	"byzy_tiaozhengshoupai_qtjs": {
		name: '| 调整手牌（其他角色）',
		init: true,
		intro: '调整选项',
	},
	"byzy_tiaozhengshoupai_pd": {
		name: '| 调整牌堆',
		init: true,
		intro: '调整选项',
	},
	"byzy_tiaozhengshoupai_qpd": {
		name: '| 调整弃牌堆',
		init: true,
		intro: '调整选项',
	},
	
	// "byzy_tiaozhengshoupai_he": {
		// name: '调整装备区和判定区的牌',
		// init: false,
		// intro: '开启后，在使用调整手牌和牌堆功能时，可调整区域内的牌（即额外装备区和判定区内的牌）。',
	// },
	
	// 吧友需求：开自娱自乐左右互搏时用（为显公平）
	byzy_sqkall_fenjiexian1:{
		clear:true,
		name:"<li>使用手气卡（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_sqkall_fenjiexian1==undefined){
				lib.config.byzy_sqkall_fenjiexian1=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>使用手气卡（点击后展开）▷";
				lib.config.byzy_sqkall_fenjiexian1.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>使用手气卡（点击后折叠）▽";
				lib.config.byzy_sqkall_fenjiexian1.forEach(function(element) {element.show()});
				delete lib.config.byzy_sqkall_fenjiexian1;
			}
		}
	},
	"byzy_sqkall": {
		name: '所有角色使用手气卡',
		init: false,
		intro: '开启后，分发起始手牌后，玩家可令所有角色使用手气卡。(限身份场、斗地主、国战)',
	},
	"byzy_sqkallcs":{
		"name": "| 使用手气卡次数",
		"intro": "所有角色使用手气卡的次数设置，即时生效。",
		"init":lib.config.byzy_sqkallcs === undefined ? "1" : lib.config.byzy_sqkallcs,
		"item":{
			"1":"1次",
			"2":"2次",
			"3":"3次",
			"4":"4次",
			"5":"5次",
			"6":"6次",
			"7":"7次",
			"8":"8次",
			"9":"9次",
			"10":"10次",
			"Infinity":"无限",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_sqkallcs',item);
			game.saveConfig('byzy_sqkallcs',item);
		},
	},
	"byzy_sqkallsx":{
		"name": "| 使用手气卡顺序",
		"intro": "所有角色使用手气卡的顺序设置，即时生效。",
		"init":lib.config.byzy_sqkallsx === undefined ? "0" : lib.config.byzy_sqkallsx,
		"item":{
			"0":"顺时针",
			"1":"逆时针",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_sqkallsx',item);
			game.saveConfig('byzy_sqkallsx',item);
		},
	},
	
	// 分割线
	"byzyfgx13":{
		"name":"<font size='4'>-----一键导入重启-----</font>",
		"clear":true,
	},
	
	byzy_fenjiexian7:{
		clear:true,
		name:"<font size='3'><li>鸣谢：特效测试</font>",
	},
	
	byzy_yjdrcqjc: {
		name:'<div class="hth_menu">▶一键导入重启（点击后展开）</div>',
		clear:true,
		onclick:function(){
			if(this.hth_more==undefined){
				var more=ui.create.div('.hth_more',
				'<div style="border: 1px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
				'★ 前言<br>一句话概括无名杀游戏教程：安装客户端，并把代码和素材文件（含扩展）正确放到<span style=\"color:#0086FF\">游戏目录</span>里，开始游戏<br>其中，学会扩展导入更是游戏入门的基本功，在众多扩展导入方法（如万能导入、替身包导入法等）中，自动一键导入重启，是无名杀最好用的扩展导入方法，无需繁琐的步骤，玩家只需将（一至多个）扩展包解压成导入后的样子然后重启即可（扩展会自动完成导入重启）'+
				'<br>'+
				'<br>★ 原理<br>根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启'+
				'<br>'+
				'<br>★ 教程<br>一次可导入一至多个已放入 <span style=\"color:#0086FF\">游戏目录</span>/扩展目录 里的扩展，具体步骤为：'+
				'<br>① 在文件管理器中操作：在 <span style=\"color:#0086FF\">游戏目录</span>/extension内 新建一至多个XXXX文件夹（即要安装的一至多个扩展XXXX，可前往extension.js中查看，通常在前几行，name: "XXXX"，或参考替身包的命名）；将要安装的扩展压缩包解压后的所有文件移入对应的XXXX文件夹内（本层文件夹内要包含extension.js）'+
				'<br>② 在无名杀中操作：若开启自动一键导入重启开关，重启后，自动完成一至多个扩展的安装；若未开启自动一键导入重启开关，则需手动点击下方<span style="text-decoration: underline;">一键导入重启功能</span>链接按钮，一键导入自动重启后，完成一至多个扩展的安装'+
				'<br>'+
				'<br>常用 <span style=\"color:#0086FF\">游戏目录</span> 有：'+
				'<br>① 手机端'+
				'<br>- 无名杀诗笺版<br>/Android/data/com.noname.shijian'+
				'<br>- 安卓玄武版<br>/Android/data/com.noname.xuanwu'+
				'<br>- 无名杀增强版（可选）<br>私有目录<br>/Android/data/com.widget.noname.cola/files/<br>XXXXXXXXXXXXXX<br>SD卡Document目录<br>/Documents/noname/XXXXXXXXXXXXXX'+
				'<br>- 由理版<br>/Android/data/yuri.nakamura.noname_android'+
				'<br>② 电脑端'+
				'<br>- 无名杀Windows64位（棘手怀念摧毁）、由理版<br>/noname/resources/app'+
				'<br>- 无名杀win64位安装程序（诗笺打包）<br>/无名杀/resources/app'+
				'<br>'
				);
				this.parentNode.insertBefore(more,this.nextSibling);
				this.hth_more=more;
				this.innerHTML='<div class="hth_menu">▼一键导入重启（点击后折叠）</div>';
			}
			else{
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more;
				this.innerHTML='<div class="hth_menu">▶一键导入重启（点击后展开）</div>';
			};
		},
	},
	
	byzy_zdyjdrcq: {
		name: "自动一键导入重启",
		intro: "开启后每次重启自动执行一键导入重启功能：只需将一至多个解压好的扩展文件夹（注意检查文件夹名和内部文件结构是否正确）放入<br><span style=\"color:#0086FF\">游戏目录</span>/extension/<br>内，重启后即可自动完成扩展导入。",
		init: true,
	},
	
	"byzy_yjdrcqgn": {
		"name": "<span style='text-decoration: underline;'>一键导入重启功能</span>",
		"clear": true,
		onclick: function() {
			game.yjdrcqgn(true);
		},
	},
	
	// 分割线
	"byzyfgx14":{
		"name":"<font size='4'>-----减少报错功能-----</font><br><font size='2'>通常可开启这些设置减少报错弹窗：<br>① 选项-通用-兼容模式<br>② 选项-通用-无视扩展报错</font>",
		"clear":true,
	},
	
	byzy_fenjiexian8:{
		clear:true,
		name:"<font size='3'><li>鸣谢：群英会</font>",
	},
	
	"byzy_cancelwindow":{
		name:"取消弹窗警告",
		intro:"开启此项后取消弹窗警告（自欺欺人），推荐用于忽略报错勉强能玩的场景等，重启游戏后生效。",
		init:false,
	},
	
	byzy_fenjiexian9:{
		clear:true,
		name:"<font size='3'><li>鸣谢：假装无敌</font>",
	},
	
	"byzy_LoadImageOptimization": {
		name: '图片懒加载',
		init: false,
		intro: '开启后，游戏内的武将图片将会开启懒加载，不会一次性全部加载，只有在窗口显示了才会去加载，避免一次性加载太多图片导致游戏卡顿（在自由选将会闪退的时候打开，能解决该问题）。',
	},
	
	// 分割线
	"byzyfgx15":{
		"name":"<font size='4'>------其他功能-------</font>",
		"clear":true,
	},
	
	byzy_fenjiexian10:{
		clear:true,
		name:"<font size='3'><li>鸣谢：官将重修</font>",
	},
	
	"byzy_jywjqhgn": {
		name: '禁用武将切换功能',
		init: false,
		intro: '开启后，将在选将时禁用武将切换功能。',
	},
	
	// 分割线
	"byzyfgx16":{
		"name":"<font size='4'>------游戏模式-------</font>",
		"clear":true,
	},
	
	byzy_yxmsjieshao: {
		name:'<div class="hth_menu">▶游戏模式介绍（点击后展开）</div>',
		clear:true,
		onclick:function(){
			if(this.hth_more==undefined){
				var more=ui.create.div('.hth_more',
				'<div style="border: 1px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
				'※ 功能(即时生效)：即点即用'+
				'<br>'+
				'<br>※ 游戏模式：游戏开始时进入该模式，重启后生效'+
				'<br>- 复刻模式：场上所有非玩家角色更换武将牌、调整体力和体力上限、改变势力，与“我”（玩家）相同'+
				'<br>- 清空模式：清空场上除“我”（玩家）外的所有角色的技能（带有Charlotte标签的技能无法被清除）'+
				'<br>- 全清空模式：清空场上所有角色的技能（带有Charlotte标签的技能无法被清除）'+
				'<br>- 混乱模式：除“我”（玩家）外，场上其他角色陷入混乱<br>【世人皆“疯”我独醒】'+
				'<br>- 解除混乱模式：场上所有角色解除混乱'+
				'<br>- 破防模式：除“我”（玩家）外，场上其他角色防具技能失效'+
				'<br>- 全破防模式：场上所有角色防具技能失效'+
				'<br>- 解除破防模式：恢复场上所有角色防具技能'+
				'<br>- 封印模式：除“我”（玩家）外，场上其他角色非锁定技失效'+
				'<br>- 全封印模式：场上所有角色非锁定技失效'+
				'<br>- 解除封印模式：恢复场上所有角色的非锁定技'+
				'<br>- 白板模式：除“我”（玩家）外，场上其他角色全变成白板（带有Charlotte标签、持恒技标签的技能不失效）'+
				'<br>- 全白板模式：场上所有角色全变成白板（带有Charlotte标签、持恒技标签的技能不失效）'+
				'<br>- 解除白板模式：恢复场上所有角色技能'+
				'<br>- 潜行模式：“我”（玩家）不能成为其他角色的卡牌的目标（锁定技）'+
				'<br>- 解除潜行模式：场上所有角色可以成为其他角色的卡牌的目标'+
				'<br>- 免疫模式：“我”（玩家）防止一切伤害'+
				'<br>- 解除免疫模式：场上所有角色不再防止一切伤害'+
				'<br>'+
				'<br>※ 同人模式：将场上所有角色的武将牌替换为同一人，限身份场、斗地主，灵感来自“蜀国无大将，狂出诸葛亮”'+
				'<br>'
				);
				this.parentNode.insertBefore(more,this.nextSibling);
				this.hth_more=more;
				this.innerHTML='<div class="hth_menu">▼游戏模式介绍（点击后折叠）</div>';
			}
			else{
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more;
				this.innerHTML='<div class="hth_menu">▶游戏模式介绍（点击后展开）</div>';
			};
		},
	},
	
	"byzy_jdjy":{
		"name":"功能(即时生效)",
		"intro":"游戏模式即点即用的功能，将控制台命令代码写入扩展，详情请点击上方游戏模式介绍查看。",
		"init":"501",
		"item":{
			"501":"复刻模式",
			"502":"清空模式",
			"503":"全清空模式",
			"504":"混乱模式",
			"505":"解除混乱模式",
			"506":"破防模式",
			"507":"全破防模式",
			"508":"解除破防模式",
			"509":"封印模式",
			"510":"全封印模式",
			"511":"解除封印模式",
			"512":"白板模式",
			"513":"全白板模式",
			"514":"解除白板模式",
			"515":"潜行模式",
			"516":"解除潜行模式",
			"517":"免疫模式",
			"518":"解除免疫模式",
		},
		onclick:function(item){
			game.zxgn(Number(item));
		},
	},
	
	byzy_youximoshi:{
		clear:true,
		name:"<li>游戏模式（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_youximoshi==undefined){
				lib.config.byzy_youximoshi=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>游戏模式（点击后展开）▷";
				lib.config.byzy_youximoshi.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>游戏模式（点击后折叠）▽";
				lib.config.byzy_youximoshi.forEach(function(element) {element.show()});
				delete lib.config.byzy_youximoshi;
			}
		}
	},
	
	"byzy_fukemode":{
		name:"复刻模式",
		intro:"见上方游戏模式介绍(游戏开始时进入该模式，限身份场、斗地主)，重启后生效。",
		init:false,
	},
	
	"byzy_qingkongmode":{
		name:"清空模式",
		intro:"见上方游戏模式介绍(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_quanqingkongmode":{
		name:"全清空模式",
		intro:"见上方游戏模式介绍(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_hunluanmode":{
		name:"混乱模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_pofangmode":{
		name:"破防模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_quanpofangmode":{
		name:"全破防模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_fengyinmode":{
		name:"封印模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_quanfengyinmode":{
		name:"全封印模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_baibanmode":{
		name:"白板模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_quanbaibanmode":{
		name:"全白板模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_qianxingmode":{
		name:"潜行模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	"byzy_mianyimode":{
		name:"免疫模式",
		intro:"见上方游戏模式介绍，可使用游戏模式功能(即时生效)解除(游戏开始时进入该模式，限身份场、斗地主、国战)，重启后生效。",
		init:false,
	},
	
	byzy_youximoshitjms:{
		clear:true,
		name:"<li>同人模式（点击后折叠）▽",
		onclick:function(){
			if(lib.config.byzy_youximoshitjms==undefined){
				lib.config.byzy_youximoshitjms=[
					this.nextSibling,
					this.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
					this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling,
				];
				this.innerHTML="<li>同人模式（点击后展开）▷";
				lib.config.byzy_youximoshitjms.forEach(function(element) {element.hide()});
			}else{
				this.innerHTML="<li>同人模式（点击后折叠）▽";
				lib.config.byzy_youximoshitjms.forEach(function(element) {element.show()});
				delete lib.config.byzy_youximoshitjms;
			}
		}
	},
	
	"byzy_tongrenmoshi":{
		"name": "同人模式(即时生效)",
		"intro": "关闭和开启选项是同人模式总开关，使用前先点击开启选项开启，手动重启后生效；生效后，点击开启选项，开启即玩诸葛亮的同人模式。<br>可点击选择其他武将，即点即用，详情请点击上方游戏模式介绍查看。",
		"init":lib.config.byzy_tongrenmoshi === undefined ? "0" : lib.config.byzy_tongrenmoshi,
		"item":{
			"0":"关闭",
			"1":"开启",
		},
		onclick:function(item){
			if (lib.config.byzy_tongrenmoshi!="0"&&lib.config.byzy_tongrenmoshi!=undefined) { game.byzy_tongrenmoshi(item); }
			game.saveConfig('byzy_tongrenmoshi',item);
			game.saveConfig('extension_搬运自用_byzy_tongrenmoshi',item);
		}
	},
	
	"byzy_tongrenmoshikaiguan":{
		name:"同人模式",
		intro:"使用前要先点击同人模式(即时生效)的开启选项开启。<br>本选项开关开启后，游戏开始时进入该模式，限身份场、斗地主，重启后生效。",
		init:false,
	},
	
	"byzy_tongrenmoshixuanjiang":{
		"name":"选将范围",
		"intro":"设置同人模式选将范围，可与“选将范围-AI禁将可选”和“选将范围-禁将可选”搭配使用，手动重启后生效。",
		"init":lib.config.byzy_tongrenmoshixuanjiang === undefined ? "0" : lib.config.byzy_tongrenmoshixuanjiang,
		"item": {
			"0":"武将包开启的武将",
			"1":"所有的武将包武将",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_tongrenmoshixuanjiang',item);
			game.saveConfig('byzy_tongrenmoshixuanjiang',item);
		},
	},
	
	"byzy_tongrenmoshiaijinjiang":{
		name:"| 选将范围-AI禁将可选",
		intro:"同人模式选将范围补充设置：开启本开关后，被设为AI禁选的武将可选，即时生效。<br>注：此处“被设为AI禁选的武将”指通过开启“仅点将可用”开关（即关闭武将资料卡-禁用-随机选将可用开关）等方式设为AI禁选的武将",
		init:false,
	},
	
	"byzy_tongrenmoshijinjiang":{
		name:"| 选将范围-禁将可选",
		intro:"同人模式选将范围补充设置：开启本开关后，被设为禁用的武将可选，即时生效。<br>注：此处“被设为禁用的武将”指通过关闭武将资料卡-禁用-相应游戏模式开关（即加入相应游戏模式武将-禁将）等方式设为禁用的武将",
		init:false,
	},
	
	"byzy_tongrenmoshifenpei":{
		"name":"武将分配",
		"intro":"设置同人模式武将分配规则，手动重启后生效。<br>▶按规则随机分配（设为默认）：<br>从“我”（玩家）开始，依次分配武将牌。<br>①同人武将个数<=场上角色数：当“我”（玩家）从全部同人武将中随机抽取武将牌后，下一名角色从剩下的同人武将中随机抽取武将牌，以此类推；<br>②同人武将个数>场上角色数：当全部同人武将牌已取完，重新取一套全部同人武将牌，根据规则①，重新开始分配。<br>▶全部随机分配：从“我”（玩家）开始，依次分配武将牌，每名角色均从全部同人武将中随机抽取武将牌。",
		"init":lib.config.byzy_tongrenmoshifenpei === undefined ? "0" : lib.config.byzy_tongrenmoshifenpei,
		"item": {
			"0":"按规则随机分配",
			"1":"全部随机分配",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_tongrenmoshifenpei',item);
			game.saveConfig('byzy_tongrenmoshifenpei',item);
		},
	},
	
	"byzy_tongrenmoshixuanxiang":{
		"name":"选项显示",
		"intro":"设置同人模式(即时生效)选项的显示：一人单选项方便选择；一人多选项可查看武将名ID。",
		"init":lib.config.byzy_tongrenmoshixuanxiang === undefined ? "0" : lib.config.byzy_tongrenmoshixuanxiang,
		"item": {
			"0":"一人单选项",
			"1":"一人多选项[武将名ID]",
		},
		onclick:function(item){
			game.saveConfig('extension_搬运自用_byzy_tongrenmoshixuanxiang',item);
			game.saveConfig('byzy_tongrenmoshixuanxiang',item);
		},
	},
	
	// 分割线
	"byzyfgx17":{
		"name":"<font size='4'>-----测试中的功能-----</font>",
		"clear":true,
	},
	
	byzy_fenjiexian11:{
		clear:true,
		name:"<font size='3'><li>绘制效果图</font>",
	},
	
	"byzy_hzxgt":{
		"name":"效果",
		"intro":"利用控制台命令代码绘制效果图，即点即用。",
		"init":"1",
		"item":{
			"1":"懒人包-效果图1",
			// "2":"懒人包-效果图2",
			// "3":"懒人包-效果图(国战双将)",
			"4":"懒人包-女将图",
			"5":"懒人包-女将图(幼年形态)",
			// "6":"懒人包-女将图(双将双形态)",
			"7":"三国24名将-虚拟天团",
			"8":"自定义-可自行添加代码",
		},
		onclick:function(item){
			var gameplayers0=game.me;
			var gameplayers1=game.me.nextSeat;
			var gameplayers2=game.me.nextSeat.nextSeat;
			var gameplayers3=game.me.nextSeat.nextSeat.nextSeat;
			var gameplayers4=game.me.nextSeat.nextSeat.nextSeat.nextSeat;
			var gameplayers5=game.me.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat;
			var gameplayers6=game.me.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat;
			var gameplayers7=game.me.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat.nextSeat;
			if(item == '1'){
				/* 懒人包-效果图1 */
				// 最佳使用时机是“我”为主公，游戏开始后第一回合的摸牌阶段结束时
				// 正常的身份模式（暂定8人场）
				for(var m=0;m<game.dead.length;m++){
					game.dead[m].revive(game.dead[m].maxHp);
				}
				
				gameplayers0.init("shen_diaochan");
				gameplayers1.init("zhongyan");
				gameplayers2.init("wu_zhugeliang");
				gameplayers3.init("tw_niufudongxie");
				gameplayers4.init("yue_daqiao");
				gameplayers5.init("jsrg_lvbu");
				gameplayers6.init("clan_zhonghui");
				gameplayers7.init("sb_huaxiong");
				
				for (var n = 0; n < game.players.length; n++) {
					// 主公加1体力上限和1点体力
					if (game.players[n] == game.zhu) {
						if(!game.players[n].isInitFilter('noZhuHp')){
							game.players[n].maxHp++;
							game.players[n].hp++;
							game.players[n].update();
						}
					}
				}
				
				var card01=get.cardPile(function(card){return get.subtype(card)=='equip1'&&card.name!='zhangba';},'cardPile'); if(card01) gameplayers0.useCard(card01,gameplayers0);
				var card02 = gameplayers0.getCards("h"); gameplayers0.discard(card02);
				var cards03=[];
				for(var i=0;i<1;i++){
					var card03=get.cardPile(function(card){
						return (get.type(card)=='equip')&&(!cards03.includes(card));
					});
					cards03.push(card03);
				}
				gameplayers0.gain(cards03);
				var cards04=[];
				for(var j=0;j<2;j++){
					var card04=get.cardPile(function(card){
						return (get.type(card)=='trick')&&(!cards04.includes(card));
					});
					cards04.push(card04);
				}
				gameplayers0.gain(cards04);
				var cards05=[];
				for(var k=0;k<2;k++){
					var card05=get.cardPile(function(card){
						return (get.type(card)=='basic')&&(!cards05.includes(card));
					});
					cards05.push(card05);
				}
				gameplayers0.gain(cards05);
				
				gameplayers1.classList.add('linked2');
				var card11=get.cardPile(function(card){return get.subtype(card)=='equip3';},'cardPile'); if(card11) gameplayers1.useCard(card11,gameplayers1);
				gameplayers1.chooseToDiscard('h',true,gameplayers1.countCards('h')-1);
				
				var card12=get.cardPile(function(card){return get.subtype(card)=='equip4';},'cardPile'); if(card12) gameplayers2.useCard(card12,gameplayers2);
				
				gameplayers3.classList.add('turnedover');
				gameplayers3.drawTo(5);
				
				gameplayers4.damage(2,gameplayers3);
				
				gameplayers5.die();
				
				var card61=get.cardPile(function(card){return get.subtype(card)=='equip5';},'cardPile'); if(card61) gameplayers6.useCard(card61,gameplayers6);
				gameplayers6.chooseToDiscard('h',true,gameplayers6.countCards('h')-2);
				gameplayers6.hp=2;gameplayers6.update();
				
				var card71=get.cardPile(function(card){return get.type(card)=='delay'&&card.name!='shandian';},'cardPile'); if(card71) gameplayers7.useCard(card71,gameplayers7);
				var card72=get.cardPile(function(card){return get.subtype(card)=='equip2';},'cardPile'); if(card72) gameplayers7.useCard(card72,gameplayers7);
				gameplayers7.chooseToDiscard('h',true,gameplayers7.countCards('h')-3);
			}
			if(item == '2'){
				/* 懒人包-效果图2 */
				
			}
			if(item == '3'){
				/* 懒人包-效果图(国战双将) */
				// 国战模式
				
			}
			if(item == '4'){
				/* 懒人包-女将图 */
				// 正常的身份模式（暂定8人场）
				for(var m=0;m<game.dead.length;m++){
					game.dead[m].revive(game.dead[m].maxHp);
				}
				
				gameplayers0.init("guanyinping");
				gameplayers1.init("zhangqiying");
				gameplayers2.init("zhoufei");
				gameplayers3.init("zhugeguo");
				gameplayers4.init("sp_huaman");
				gameplayers5.init("sunluban");
				gameplayers6.init("wanniangongzhu");
				gameplayers7.init("sunshangxiang");
				
				for (var n = 0; n < game.players.length; n++) {
					// 主公加1体力上限和1点体力
					if (game.players[n] == game.zhu) {
						if(!game.players[n].isInitFilter('noZhuHp')){
							game.players[n].maxHp++;
							game.players[n].hp++;
							game.players[n].update();
						}
					}
				}
			}
			if(item == '5'){
				/* 懒人包-女将图(幼年形态) */
				// 正常的身份模式（暂定8人场）
				for(var m=0;m<game.dead.length;m++){
					game.dead[m].revive(game.dead[m].maxHp);
				}
				
				gameplayers0.init("guanyinping");
				gameplayers1.init("zhangqiying");
				gameplayers2.init("zhoufei");
				gameplayers3.init("zhugeguo");
				gameplayers4.init("huaman");
				gameplayers5.init("sunluban");
				gameplayers6.init("wanniangongzhu");
				gameplayers7.init("sunshangxiang");
				
				for (var n = 0; n < game.players.length; n++) {
					// 主公加1体力上限和1点体力
					if (game.players[n] == game.zhu) {
						if(!game.players[n].isInitFilter('noZhuHp')){
							game.players[n].maxHp++;
							game.players[n].hp++;
							game.players[n].update();
						}
					}
				}
				
				// 暂时先这么写吧，后续会加曹金玉caojinyu 4、张星彩zhangxingcai 7、羊徽瑜yanghuiyu 4、吴苋wuxian 6、杨婉yangwan 8、曹节caojie 8、袁姬yuanji 3、孙茹sunru 1，用map？，改随机生成、同名武将解锁
				var name0="guanyinping",num0=10;
				gameplayers0.node.avatar.setBackgroundImage("image/skin/" + name0 + "/" + num0 + ".jpg");
				var name1="zhangqiying",num1=11;
				gameplayers1.node.avatar.setBackgroundImage("image/skin/" + name1 + "/" + num1 + ".jpg");
				var name2="zhoufei",num2=9;
				gameplayers2.node.avatar.setBackgroundImage("image/skin/" + name2 + "/" + num2 + ".jpg");
				var name3="zhugeguo",num3=8;
				gameplayers3.node.avatar.setBackgroundImage("image/skin/" + name3 + "/" + num3 + ".jpg");
				var name4="sp_huaman",num4=3;
				gameplayers4.node.avatar.setBackgroundImage("image/skin/" + name4 + "/" + num4 + ".jpg");
				var name5="sunluban",num5=11;
				gameplayers5.node.avatar.setBackgroundImage("image/skin/" + name5 + "/" + num5 + ".jpg");
				var name6="wanniangongzhu",num6=4;
				gameplayers6.node.avatar.setBackgroundImage("image/skin/" + name6 + "/" + num6 + ".jpg");
				var name7="sunshangxiang",num7=13;
				gameplayers7.node.avatar.setBackgroundImage("image/skin/" + name7 + "/" + num7 + ".jpg");
			}
			if(item == '6'){
				/* 懒人包-女将图(双将双形态) */
				// 正常的身份模式（暂定8人场），双将、成年形态和幼年形态
				
			}
			if(item == '7'){
				/* 三国24名将-虚拟天团 */
				// 要先开启三国24名将扩展
				if(lib.config.extensions && lib.config.extensions.contains('三国24名将') && lib.config['extension_三国24名将_enable']){
					// 正常的身份模式（暂定8人场）
					for(var m=0;m<game.dead.length;m++){
						game.dead[m].revive(game.dead[m].maxHp);
					}
					
					gameplayers0.init("wms_z_sunshangxiang");
					gameplayers1.init("wms_z_yuanshao");
					gameplayers2.init("wms_z_liushan");
					gameplayers3.init("wms_z_machao");
					gameplayers4.init("wms_z_yuji");
					gameplayers5.init("wms_z_ganning");
					gameplayers6.init("wms_z_dengai");
					gameplayers7.init("wms_z_zhenji");
					
					for (var n = 0; n < game.players.length; n++) {
						// 主公加1体力上限和1点体力
						if (game.players[n] == game.zhu) {
							if(!game.players[n].isInitFilter('noZhuHp')){
								game.players[n].maxHp++;
								game.players[n].hp++;
								game.players[n].update();
							}
						}
					}
					
					// 暂时先这么写吧，后续会加花鬘wms_z_huaman、徐晃wms_z_xuhuang、诸葛亮wms_z_zhugeliang、曹植wms_z_caozhi，改随机生成
					var skin_outcroppedPath='extension/三国24名将/skin_outcropped/standard/';
					var num="虚拟天团";
					var name0="wms_z_sunshangxiang";
					gameplayers0.node.avatar.setBackgroundImage(skin_outcroppedPath + name0 + "/" + num + ".jpg");
					var name1="wms_z_yuanshao";
					gameplayers1.node.avatar.setBackgroundImage(skin_outcroppedPath + name1 + "/" + num + ".jpg");
					var name2="wms_z_liushan";
					gameplayers2.node.avatar.setBackgroundImage(skin_outcroppedPath + name2 + "/" + num + ".jpg");
					var name3="wms_z_machao";
					gameplayers3.node.avatar.setBackgroundImage(skin_outcroppedPath + name3 + "/" + num + ".jpg");
					var name4="wms_z_yuji";
					gameplayers4.node.avatar.setBackgroundImage(skin_outcroppedPath + name4 + "/" + num + ".jpg");
					var name5="wms_z_ganning";
					gameplayers5.node.avatar.setBackgroundImage(skin_outcroppedPath + name5 + "/" + num + ".jpg");
					var name6="wms_z_dengai";
					gameplayers6.node.avatar.setBackgroundImage(skin_outcroppedPath + name6 + "/" + num + ".jpg");
					var name7="wms_z_zhenji";
					gameplayers7.node.avatar.setBackgroundImage(skin_outcroppedPath + name7 + "/" + num + ".jpg");
					
					// 露头皮肤切换
					lib.extensionMenu.extension_三国24名将.wms_z_ltqh.onclick(true);
				}
			}
			if(item == '8'){
				/* 自定义-可自行添加代码 */
				// 比如可以加一些新武将
				
			}
		},
	},
	
	// 分割线
	"byzyfgx18":{
		"name":"<font size='4'>-----开关扩展功能-----</font>",
		"clear":true,
	},
	
	"byzy_kgkzgn":{
		"name":"开关扩展功能",
		"intro":"一键开启或关闭扩展，自动重启后生效。<br>本扩展不关闭。所有扩展（不含搬运自用）如下：<br><li>官方扩展：诸神降临、牌堆补充、五行生克、富甲天下<br><li>懒人包扩展：十周年UI、手杀ui<br><li>其他扩展",
		"init":"1501",
		"item":{
			"1501":"关闭所有扩展",
			"1502":"开启所有扩展",
			"1503":"关闭所有[官方扩展]",
			"1504":"开启所有[官方扩展]",
			"1505":"关闭所有[懒人包扩展]",
			"1506":"开启所有[懒人包扩展]",
			"1507":"关闭所有[其他扩展]",
			"1508":"开启所有[其他扩展]",
			"1509":"关闭所有[官方扩展和懒人包扩展]",
			"1510":"开启所有[官方扩展和懒人包扩展]",
			"1511":"关闭所有[官方扩展和其他扩展]",
			"1512":"开启所有[官方扩展和其他扩展]",
			"1513":"关闭所有[懒人包扩展和其他扩展]",
			"1514":"开启所有[懒人包扩展和其他扩展]",
		},
		onclick:function(item){
			game.zxgn(Number(item));
		},
	},
	
	byzy_fenjiexian12:{
		clear:true,
		name:"<font size='3'><li>新功能开发中，敬请期待......</font>",
	},
	
	// "aiyouhua_btqj":{
		// "name":"本体全局AI修改",
		// "intro":"",
		// "init":lib.config.aiyouhua_btqj === undefined ? true : lib.config.aiyouhua_btqj,
		// onclick:function(item){
			// game.saveConfig('aiyouhua_btqj',item);
			// game.saveConfig('extension_搬运自用_aiyouhua_btqj',item);
		// }
	// },
	// "aiyouhua_btwj":{
		// "name":"本体武将AI修改",
		// "intro":"",
		// "init":lib.config.aiyouhua_btwj === undefined ? true : lib.config.aiyouhua_btwj,
		// onclick:function(item){
			// game.saveConfig('aiyouhua_btwj',item);
			// game.saveConfig('extension_搬运自用_aiyouhua_btwj',item);
		// }
	// },
	// "aiyouhua_btzb":{
		// "name":"本体装备AI修改",
		// "intro":"",
		// "init":lib.config.aiyouhua_btzb === undefined ? true : lib.config.aiyouhua_btzb,
		// onclick:function(item){
			// game.saveConfig('aiyouhua_btzb',item);
			// game.saveConfig('extension_搬运自用_aiyouhua_btzb',item);
		// }
	// },
	// "aiyouhua_btkp":{
		// "name":"本体卡牌AI修改",
		// "intro":"",
		// "init":lib.config.aiyouhua_btkp === undefined ? true : lib.config.aiyouhua_btkp,
		// onclick:function(item){
			// game.saveConfig('aiyouhua_btkp',item);
			// game.saveConfig('extension_搬运自用_aiyouhua_btkp',item);
		// }
	// },
	
},help:{},package:{
	character:{
		character:{
		},
		translate:{
		},
	},
	card:{
		card:{
		},
		translate:{
		},
		list:[],
	},
	skill:{
		skill:{
		},
		translate:{
		},
	},
	intro:"",
	author:"无名玩家<br>自写&搬运：<span class='bluetext'>棘手怀念摧毁</span>",
	diskURL:"",
	forumURL:"",
	version:"1.10.11.3",
},
files:{"character":[],"card":[],"skill":[]}}})

// 备注：
// 武将称号、引文等来自——
// 三国杀官方规则集，链接：https://m.weibo.cn/detail/4341518321802913
// 萌娘百科，链接：https://mzh.moegirl.org.cn/%E4%B8%89%E5%9B%BD%E6%9D%80
// 哔哩哔哩Wiki
// -三国杀ONLINE，链接：https://wiki.biligame.com/sgsol/%E9%A6%96%E9%A1%B5
// -三国杀十周年，链接：https://wiki.biligame.com/sgs/%E9%A6%96%E9%A1%B5
// -三国杀移动版，链接：https://wiki.biligame.com/msgs/%E9%A6%96%E9%A1%B5
// 三国杀Wiki，链接：https://sanguosha.fandom.com/zh/wiki/%E4%B8%89%E5%9B%BD%E6%9D%80_%E7%BB%B4%E5%9F%BA
// ……

// bug修复记录（同人模式/复刻模式等游戏模式、重新选将功能等）：
// -bug：更换武将牌后AI没了（比如不会自动标记身份，不停无懈自己的无懈）
// -原因：因为uninit()把ai也清了
// -修复方案：uninit前先保存ai，之后补ai
// 同理，临时修复谋攻篇模式bug：报错、主公不翻开身份牌等bug

// 等待后续修复：
// 手机端用window.resolveLocalFileSystemURL无法检测文件是否存在，故更改了弹窗内容
// 总双势力武将等统计错误
// 场上所有角色禁将+解除场上其他角色禁将无法禁用“我”（玩家）的武将、禁将名出现undefined
// 选项导航功能的搜索，未输入点确定弹出提示内容不正确，未输入时保持请输入关键字显示
// 资料卡点击查看技能信息的alert显示有问题（部分代码显示错误/显示不全），请到控制台查看没有问题的代码

// 后续更新计划：
// 交换位置AI（参考败移？）
// 完善武将及卡牌统计功能（包括其他势力武将统计等）
// 完善重新选将功能（其他模式）
// 完善一键导入重启功能：检测到扩展文件夹名不正确时，直接修正
// 电脑端扩充界面缩放比例和游戏人数
// 一键关闭国战武将
// game.say1适配界面缩放
// 复盘模式：类似再战，身份座位武将不变，重开一局（灵感来自群友）
// 伤害值或回复值+1模式（例：暴击模式，伤害随机加1到3点）、无次数和距离限制模式、不可被响应模式（灵感来自神邓艾）
// 夫妻模式：双将cp；父子模式:双将父子
// 自由选将-搜索功能、选项导航功能保留搜索历史（可通过选项选择）
// 自由选将-搜索功能内部元素适配dialog宽度（溢出内容显示，超过一行避免和内部其他元素重叠）
// 导航功能不遮挡选项
// 2-17人addPlayer会自动安排布局
// 禁将功能-禁用AI禁用的武将、禁用或启用：无原画武将（剪影原画武将）、双形态原画武将（已放弃）
// AI禁将/禁将：收藏武将，最近武将
// 资料卡修改：可双击原画/皮肤后放大看
// 控制台获得技能按钮，参考神孙权
// 编辑代码功能（资料卡编辑按钮）
// 弹框查看存在list里的各种武将（可视化）
// 真白板模式，真清空模式
// 神将势力没随机选？自由选将没随机选？重新选将，选势力[0]改随机
// 来自群友的需求：悔棋功能、武将胜率

// 升级为选项/武将/卡牌导航功能（其他扩展选项也能导航；添加武将/卡牌搜索导航的功能，搜一下就能跳转到武将/卡牌那里）
// 其他优秀功能搬运（并魔改）：体力翻倍；牌库增添-自定义牌堆；天牢令/笨蛋插件-衍生技能详细显示；测试中的功能搬运AI优化（AI弃牌价值修改）；AI互动；扩展管家-扩展/武将包/卡牌包排序；王者荣耀-发动技能显示台词文本；奇妙工具-卡牌创造（开启后在可以创造卡牌）、添加技能（开启后在游戏进行时给自己加技能）等

// 同人模式后续更新计划及待处理的问题：
// 同人模式及其他游戏模式加入其他模式（如对决-欢乐等）
// 补充游戏模式介绍
// 开关设置，总开关未开启其他无法开启
// 单将模式、双将模式开关（目前替换武将牌后全为单将）
// 主公调整体力和体力上限、斗地主加飞扬跋扈技能（开关，默认开启）
// 控制台打印武将
// 同人模式item改下拉列表？
// 再战问题
// 相同武将名区分，如神孙权
// 同名不同人区分，如马忠、曹节等
// 处理特殊武将（开关，默认开启）
// 添加：
// 诸葛亮 卧龙
// 赵云 高达一号
// ...
// 排除（与get.characterSurname顺便一起改）：
// 卧龙 卧龙凤雏
// 张虎 张虎乐綝
// 大乔 大乔小乔
// 小乔 大乔小乔
// 蒋琬 蒋琬费祎
// 费祎 蒋琬费祎
// 颜良 颜良文丑
// 文丑 颜良文丑
// ...

// 国战自由选将取消后亮将不隐匿
// 重新选将未开启的武将包可选开启、开启后的排序
// 性别不止男性、女性、双性

// 资料卡试听胜利配音【暂不可用，等本体更新中】。思路1：更改游戏结束音效读取路径（随机播放一名胜利阵营角色的胜利配音，优先播放存活的角色）；思路2：更改阵亡配音为胜利配音（但在一些特殊模式无法识别）。可参考假装无敌MVP？
// 懒人包临时修改本体css以适配控制台按钮显示，按钮宽度调整通过修改本体临时修复；非懒人包可开启临时修复开关（请等待后续更新）
// AI优化：卡牌价值修改
// 2-17人教程待完善；多人场布局优化
// 双内奸失效？添加双内奸开关？开民后2-17人自动失效？
// card.nature修改？，包括④教程及说明.txt
// 控制台新增将体力回复至功能；新增更改一名角色的势力功能，用changeGroup；国战模式暗置武将功能；控制台获得基本牌-杀闪桃酒、锦囊牌-伤害类等具体分类
// 露头皮肤效果图、其他选项先关露头皮肤？
// 双击武将切换双形态？
// 特殊处理武将（张郃、神赵云、神关羽等）的资料卡试听技能配音
// 群英荟萃、限定专属、江山如故、四象封印、联动卡等武将称号待补充
// 处理〖妙剑·改〗〖绝情·改〗等技能？：lib.notShowSkillNamePinyin、台词显示
// 阵亡配音待适配写法"die:yujin.mp3"（例：于禁）、旧版台词函数适配"die:xxx"写法；还要改noname/library/element/content.js的die: function () {函数？
// 资料卡点击查看武将信息增加其他rank信息（武将、技能）、场上技能和技能ID查看
// 资料卡切换按钮改成切换原画功能；切换按钮改成即时生效（目前需先关闭资料卡，然后重新打开资料卡）
// 搬运自由/手杀ui新增：蒸蒸日上-多人场牌堆扩充（多副牌）
// 优化调整卡牌功能：调整装备区和判定区的牌（参考kagari_zongsi/移动场上一张牌？）、仅一人换牌函数（加入控制台命令）、点击交换一次手牌等
// chooseToMove支持拖动卡牌加入测试中的功能？
// 控制台从牌堆&弃牌堆获得牌不能选择多名角色
// 绘制效果图获得牌bug fix：改async函数，await game.asyncDelay()？
// 选将时查看资料卡功能，方案一：开启后，在选将时长按/右击武将头像，可查看资料卡；关闭后，恢复原有的长按/右击弹出菜单功能。方案二：双击武将头像，可查看资料卡
// 禁用卡牌功能（类似禁用武将功能）
