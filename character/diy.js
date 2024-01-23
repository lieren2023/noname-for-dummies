'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'diy',
		connect:true,
		connectBanned:['diy_tianyu','diy_yangyi','diy_lukang','ns_huamulan','ns_yuji','ns_duangui','ns_liuzhang','key_yuu'],
		character:{
			noname:["female","key",3,["noname_zhuyuan","noname_duocai"]],
			sp_key_yuri:['female','qun',4,['mubing','ziqu','diaoling'],['border:key']],
			key_lucia:['female','key','2/3',['lucia_duqu','lucia_zhenren']],
			key_kyousuke:['male','key',4,['nk_shekong','key_huanjie']],
			key_yuri:['female','key',3,['yuri_xingdong','key_huanjie','yuri_wangxi'],['zhu']],
			key_haruko:['female','key',4,['haruko_haofang','haruko_zhuishi']],
			key_umi:['female','key',3,['umi_chaofan','umi_lunhui','umi_qihuan']],
			key_umi2:['female','key',3,[],['unseen']],
			key_rei:['male','key',4,['xiandeng','shulv','xisheng']],
			key_komari:['female','key',3,['komari_tiankou','komari_xueshang']],
			key_yukine:['female','key',3,['yukine_wenzhou']],
			key_yusa:['female','key',3,['yusa_yanyi','yusa_misa','dualside'],['dualside:key_misa']],
			key_misa:['female','key',3,['misa_yehuo','misa_yusa','dualside'],['unseen']],
			key_masato:['male','key','4/8',['masato_baoquan']],
			key_iwasawa:['female','key',3,['iwasawa_yinhang','iwasawa_mysong']],
			key_kengo:['male','key',4,['kengo_weishang','kengo_guidui']],
			key_yoshino:['male','key',4,['yoshino_jueyi']],
			key_yui:['female','key',3,['yui_jiang','yui_lieyin','yui_takaramono']],
			key_tsumugi:['female','key',3,['tsumugi_mugyu','tsumugi_huilang']],
			key_saya:['female','key',3,['saya_shouji','saya_powei']],
			key_harukakanata:['female','key',3,['haruka_shuangche']],
			key_inari:['female','key',2,['inari_baiwei','inari_huhun']],
			key_shiina:['female','key',3,['shiina_qingshen','shiina_feiyan']],
			key_sunohara:['double','key','3/3/2',['sunohara_chengshuang','sunohara_tiaoyin','sunohara_jianren']],
			key_rin:['female','key',3,['rin_baoqiu']],
			key_sasami:['female','key',3,['sasami_miaobian']],
			key_akane:['female','key',3,['akane_jugu','akane_quanqing','akane_yifu'],['zhu']],
			key_doruji:['female','key',16,['doruji_feiqu']],
			key_yuiko:['female','key',3,['yuiko_fenglun','yuiko_dilve']],
			key_riki:['double','key',3,['riki_spwenji','riki_nvzhuang','riki_mengzhong']],
			key_hisako:['female','key',3,['hisako_yinbao','hisako_zhuanyun']],
			key_hinata:['male','key',4,['hinata_qiulve','hinata_ehou']],
			key_noda:['male','key',4,['noda_fengcheng','noda_xunxin']],
			key_tomoya:['male','key',4,['tomoya_shangxian','tomoya_wangjin']],
			key_nagisa:['female','key',3,['nagisa_tiandu','nagisa_fuxin']],
			key_ayato:['male','key',3,['ayato_jianshen','ayato_zonghuan']],
			key_ao:['female','key',3,['ao_xishi','ao_kuihun','ao_shixin']],
			key_yuzuru:['male','key',5,['yuzuru_wuxin','yuzuru_deyi']],
			sp_key_kanade:['female','key',3,['kanade_mapo','kanade_benzhan']],
			key_mio:['female','key',3,['mio_tuifu','mio_tishen']],
			key_midori:['female','key',3,['midori_nonghuan','midori_tishen']],
			key_kyoko:['female','key',3,['kyoko_juwu','kyoko_zhengyi']],
			key_shizuru:['female','key',3,['shizuru_nianli','shizuru_benzhan']],
			key_shiorimiyuki:['female','key',3,['shiorimiyuki_banyin','shiorimiyuki_tingxian']],
			key_miki:['female','key',3,['miki_shenqiang','miki_huanmeng','miki_zhiluo']],
			key_shiori:['female','key','2/3',['shiori_huijuan']],
			key_kaori:['female','key','3/4',['kaori_siyuan']],
			key_akiko:['female','key',3,['akiko_dongcha']],
			key_abyusa:['female','key',3,['abyusa_jueqing','abyusa_dunying']],
			key_godan:['male','key',6,['godan_yuanyi','godan_feiqu','godan_xiaoyuan']],
			key_yuu:['male','key',3,['yuu_lveduo']],
			key_ryoichi:['male','key',4,['ryoichi_baoyi','ryoichi_tuipi']],
			key_kotori:['female','key',3,['kotori_yumo','kotori_huazhan']],
			key_jojiro:['male','key',4,['jojiro_shensu','jojiro_shunying']],
			key_shiroha:['female','key',3,['shiroha_yuzhao','shiroha_guying','shiroha_jiezhao']],
			key_shizuku:['female','key',3,['shizuku_sizhi','shizuku_biyi','shizuku_sanhua']],
			key_hiroto:['male','key',3,['hiroto_huyu','hiroto_tuolao']],
			key_sakuya:['male','key',3,['youlong','luanfeng','sakuya_junbu']],
			key_youta:['male','key',4,[]],
			key_rumi:['female','key','3/4',['rumi_shuwu']],
			key_chihaya:['female','key',3,['chihaya_liewu','chihaya_youfeng']],
			key_yukito:['male','key',4,['yukito_kongwu','yukito_yaxiang']],
			key_crow:['male','key',4,[],['unseen']],
			key_asara:['female','key',3,['asara_shelu','asara_yingwei']],
			key_kotomi:['female','key',3,['kotomi_qinji','kotomi_chuanxiang']],
			key_mia:['female','key',3,['mia_shihui','mia_qianmeng']],
			key_kano:['female','key',3,['kano_liezhen','kano_poyu']],
			db_key_liyingxia:['female','shu',3,['liyingxia_sanli','liyingxia_zhenjun','liyingxia_wumai'],['doublegroup:shu:key']],
			key_erika:['female','key','3/3/2',['erika_shisong','erika_yousheng']],
			key_satomi:['female','key',3,['satomi_luodao','satomi_daohai']],
			key_iriya:['female','key',3,['iriya_yinji','iriya_haozhi']],
			key_fuuko:['female','key',3,['fuuko_xingdiao','fuuko_chuanyuan']],

			key_kud:['female','key',3,['kud_qiaoshou','kud_buhui']],
			key_misuzu:['female','key',3,['misuzu_hengzhou','misuzu_nongyin','misuzu_zhongxing']],
			key_kamome:['female','key',3,['kamome_yangfan','kamome_huanmeng','kamome_jieban']],
			key_nao:['female','key',3,['nao_duyin','nao_wanxin','nao_shouqing']],
			key_yuuki:['female','key',3,['yuuki_yicha']],
			key_kotarou:['male','key',3,['kotarou_rewrite','kotarou_aurora']],
			key_tenzen:['male','key',4,['tenzen_fenghuan','tenzen_retianquan']],
			key_kyouko:['female','key',3,['kyouko_rongzhu','kyouko_gongmian']],
			key_kyou:['female','key',3,['kyou_zhidian','kyou_duanfa']],
			key_seira:['female','key',3,['seira_xinghui','seira_yuanying']],
			key_kiyu:['female','key',3,['kiyu_yuling','kiyu_rexianyu']],
			key_tomoyo:['female','key',4,['tomoyo_wuwei','tomoyo_zhengfeng']],
			key_minagi:['female','key',3,['minagi_peiquan','minagi_huanliu']],
			key_michiru:['female','key',3,['michiru_sheyuan']],

			ns_huangchengyan:['male','shu',3,['nslongyue','nszhenyin']],
			ns_sunchensunjun:['male','wu',5,['nsxianhai','nsxingchu']],
			ns_yuanxi:['male','qun',4,['nsshengyan','nsdaizhan']],
			ns_caoshuang:['male','wei',4,['nsjiquan','nsfuwei']],
			ns_sunyi:['male','wu',4,['nsguolie']],
			ns_huangwudie:['female','shu',4,['nsdiewu','nslingying','nspojian']],
			ns_chentai:['male','wei',4,['nsweiyuan','nsjuxian']],
			ns_zhangning:['female','qun',3,['nsfuzhou','nsguidao','nstaiping']],
			ns_yanghu:['male','jin',3,['nsbizhao','nsqingde','nsyidi'],['hiddenSkill']],
			ns_zanghong:['male','qun',4,['nsshimeng']],
			ns_ruanji:['male','wei',3,['nsshizui','nsxiaoye']],
			ns_limi:['male','jin',3,['nstuilun']],
			ns_zhonglimu:['male','wu',4,['nskuanhuai','nsdingbian']],
			prp_zhugeliang:['male','shu',3,['nsxingyun','nshanlang']],

			ns_zhangwei:['female','shu',3,['nsqiyue','nsxuezhu']],
			diy_wenyang:['male','wei','4/6',['lvli','choujue']],
			// diy_caocao:['male','wei',4,['xicai','diyjianxiong','hujia']],
			diy_hanlong:['male','wei',4,['siji','ciqiu']],
			diy_feishi:['male','shu',3,['nsshuaiyan','moshou']],
			diy_liuyan:['male','qun',3,['juedao','geju']],
			// diy_luxun:['male','wu',3,['shaoying','zonghuo']],
			diy_yuji:['male','qun',3,['diyguhuo','diychanyuan']],
			// diy_zhouyu:['male','wu',3,['jieyan','honglian']],
			// diy_zhouyu:['male','wu',3,['xiongzi','yaliang']],
			diy_caiwenji:['female','qun',3,['beige','guihan']],
			diy_lukang:['male','wu',4,['luweiyan','qianxun']],
			// diy_xuhuang:['male','wei',4,['diyduanliang']],
			// diy_dianwei:['male','wei',4,['diyqiangxi']],
			// diy_huangzhong:['male','shu',4,['liegong','fuli']],
			// diy_weiyan:['male','shu',4,['diykuanggu']],
			diy_zhenji:['female','wei',3,['diy_jiaoxia','yiesheng']],
			// diy_menghuo:['male','shu',4,['huoshou','zaiqix']],
			//re_huangyueying:['female','shu',3,['rejizhi','qicai']],

			diy_liufu:['male','wei',3,['zhucheng','duoqi']],
			diy_xizhenxihong:['male','shu',4,['fuchou','jinyan']],
			diy_liuzan:['male','wu',4,['kangyin']],
			diy_zaozhirenjun:['male','wei',3,['liangce','jianbi','diyjuntun']],
			diy_yangyi:['male','shu',3,['choudu','liduan']],
			diy_tianyu:['male','wei',4,['chezhen','youzhan']],

			ns_zuoci:['male','qun',3,['nsxinsheng','nsdunxing']],
			ns_lvzhi:['female','qun',3,['nsnongquan','nsdufu']],
			ns_wangyun:["male","qun",4,["liangji","jugong","chengmou"]],
			ns_nanhua:["male","qun",3,["nshuanxian","nstaiping_nh","nsshoudao"]],
			ns_nanhua_left:["male","qun",2,[],['unseen']],
			ns_nanhua_right:["female","qun",2,[],['unseen']],
			ns_huamulan:['female','qun',3,['nscongjun','xiaoji','gongji']],
			ns_huangzu:['male','qun',4,['nsjihui','nsmouyun']],
			ns_jinke:['male','qun',4,['nspinmin','nsshishou']],
			ns_yanliang:['male','qun',4,['nsduijue','nsshuangxiong','dualside'],['dualside:ns_wenchou']],
			ns_wenchou:['male','qun',2,['nsguanyong','dualside'],['unseen']],

			ns_caocao:['male','wei',4,['nscaiyi','nsgefa','nshaoling']],
			ns_caocaosp:['male','qun',3,['nsjianxiong','nsxionglue']],
			ns_zhugeliang:['male','shu',3,['nsguanxing','kongcheng','nsyunxing']],
			ns_wangyue:['male','qun',4,['nsjianshu','nscangjian']],
			ns_yuji:['male','qun',3,['nsyaowang','nshuanhuo']],
			ns_xinxianying:['female','wei',3,['nsdongcha','nscaijian','nsgongjian']],
			ns_guanlu:['male','wei',3,['nsbugua','nstuiyan','nstianji']],
			ns_simazhao:['male','wei',3,['nszhaoxin','nsxiuxin','nsshijun']],
			ns_sunjian:['male','wu',4,['nswulie','nshunyou','nscangxi']],

			ns_duangui:['male','qun',3,['nscuanquan','nsjianning','nschangshi','nsbaquan']],
			ns_zhangbao:['male','qun',3,['nsfuhuo','nswangfeng']],
			ns_masu:['male','shu',3,['nstanbing','nsxinzhan']],
			ns_zhangxiu:['male','qun',4,['nsbaiming','nsfuge']],
			ns_lvmeng:['male','wu',3,['nsqinxue','nsbaiyi']],
			ns_shenpei:['male','qun',3,['nshunji','shibei']],

			ns_yujisp:['male','qun',3,['nsguhuo']],
			ns_yangyi:['male','shu',3,['nsjuanli','nsyuanchou']],
			ns_liuzhang:['male','qun',3,['nsanruo','nsxunshan','nskaicheng']],
			// ns_zhaoyun:['male','qun',3,[]],
			// ns_lvmeng:['male','qun',3,[]],
			// ns_zhaoyunshen:['male','qun',3,[]],
			// ns_lisu:['male','qun',3,[]],
			// ns_sunhao:['male','qun',3,[]],
			ns_xinnanhua:['male','qun',3,['ns_xiandao','ns_xiuzheng','ns_chuanshu']],
			ns_caimao:['male','qun',4,['nsdingzhou']],
			ns_luyusheng:['female','wu',3,['nshuaishuang','nsfengli']],
			ns_chengpu:['male','wu',4,['decadelihuo','decadechunlao']],
			ns_sundeng:['male','wu',4,['xinkuangbi']],
			ns_duji:['male','wei',3,['xinfu_andong','xinyingshi']],
			old_majun:["male","wei",3,["xinfu_jingxie1","xinfu_qiaosi"]],
			ns_mengyou:['male','qun',4,['nsmanzhi']],

			old_jiakui:['male','wei',4,['tongqu','xinwanlan']],
			ol_guohuai:['male','wei',3,['rejingce']],
			junk_zhangrang:['male','qun',3,['junktaoluan'],['sex:male_castrated']],
			old_bulianshi:['female','wu',3,['anxu','zhuiyi']],
			ol_maliang:['male','shu',3,['zishu','xinyingyuan']],
			junk_liubei:['male','shu',4,['junkrende','jijiang'],['zhu']],
			junk_huangyueying:['female','shu',3,['junkjizhi','junkqicai']],
			junk_lidian:['male','wei',3,['xunxun','junkwangxi']],
			junk_duanwei:['male','qun',4,['junklangmie']],
			junk_xuyou:["male","qun",3,["nzry_chenglve","junkshicai","nzry_cunmu"]],
		},
		characterFilter:{
			key_jojiro:function(mode){
				return mode=='chess'||mode=='tafang';
			},
			key_yuu:function(mode){
				return mode=='identity'||mode=='doudizhu'||mode=='single'||(mode=='versus'&&_status.mode!='standard'&&_status.mode!='three');
			},
			key_tomoya:function(mode){
				return mode!='chess'&&mode!='tafang'&&mode!='stone';
			},
			key_sunohara:function(mode){
				return mode!='guozhan';
			},
			ns_duangui:function(mode){
				return mode=='identity'&&_status.mode=='normal';
			},
			diy_liuyan:function(mode){
				return mode!='chess'&&mode!='tafang';
			}
		},
		characterSort:{
			diy:{
				diy_yijiang:["key_kud","key_misuzu","key_kamome","key_nao",
				"ns_huangchengyan","ns_sunchensunjun","ns_yuanxi","ns_caoshuang"],
				diy_yijiang2:["key_yuuki","key_tenzen","key_kyouko","key_kotarou","key_kyou",
				"ns_chentai","ns_huangwudie","ns_sunyi","ns_zhangning","ns_yanghu"],
				diy_yijiang3:['ns_ruanji','ns_zanghong','ns_limi','ns_zhonglimu','prp_zhugeliang','key_seira','key_kiyu','key_tomoyo','key_minagi','key_michiru'],
				diy_tieba:["ns_zuoci","ns_lvzhi","ns_wangyun","ns_nanhua","ns_nanhua_left","ns_nanhua_right","ns_huamulan","ns_huangzu","ns_jinke","ns_yanliang","ns_wenchou","ns_caocao","ns_caocaosp","ns_zhugeliang","ns_wangyue","ns_yuji","ns_xinxianying","ns_guanlu","ns_simazhao","ns_sunjian","ns_duangui","ns_zhangbao","ns_masu","ns_zhangxiu","ns_lvmeng","ns_shenpei","ns_yujisp","ns_yangyi","ns_liuzhang","ns_xinnanhua","ns_luyusheng"],
				diy_fakenews:["diy_wenyang","ns_zhangwei","ns_caimao","ns_chengpu",'ns_sundeng','ns_duji','ns_mengyou'],
				diy_xushi:["diy_feishi","diy_hanlong","diy_liufu","diy_liuyan","diy_liuzan","diy_tianyu","diy_xizhenxihong","diy_yangyi","diy_zaozhirenjun"],
				diy_default:["diy_yuji","diy_caiwenji","diy_lukang","diy_zhenji","old_majun"],
				diy_noname:['noname'],
				diy_key:["key_lucia","key_kyousuke","key_yuri","key_haruko","key_umi","key_rei","key_komari","key_yukine","key_yusa","key_misa","key_masato","key_iwasawa","key_kengo","key_yoshino","key_yui","key_tsumugi","key_saya","key_harukakanata","key_inari","key_shiina","key_sunohara","key_rin","key_sasami","key_akane","key_doruji","key_yuiko","key_riki","key_hisako","key_hinata","key_noda","key_tomoya","key_nagisa","key_ayato","key_ao","key_yuzuru","sp_key_kanade","key_mio","key_midori","key_kyoko","key_shizuru","key_shiorimiyuki","key_miki","key_shiori","key_kaori","sp_key_yuri","key_akiko","key_abyusa","key_godan","key_yuu","key_ryoichi","key_kotori","key_jojiro","key_shiroha","key_shizuku","key_hiroto","key_sakuya","key_youta","key_rumi","key_chihaya","key_yukito","key_asara","key_kotomi","key_mia","key_kano","db_key_liyingxia","key_erika","key_satomi","key_iriya","key_fuuko"],
				diy_trashbin:['old_jiakui','ol_guohuai','junk_zhangrang','old_bulianshi','junk_sunquan','ol_maliang','junk_liubei','junk_huangyueying','junk_lidian','junk_duanwei','junk_xuyou'],
			},
		},
		characterIntro:{
			noname:'无名杀的吉祥物。<br>画师：空城<br>技能设计：李木子',
			diy_hanlong:'韩龙，魏国刺客。他孤身一人深入到了长城外的敌人领地，成功刺杀了敌方首领轲比能，瓦解了鲜卑民族，曹魏边境因此获得了几十年的安稳。',
			ns_zhangwei:'血骑教习·张葳，三国杀集换式卡牌游戏《阵面对决》中的帝畿系列卡牌。游卡桌游官方原创的三国时期女性角色。',
			diy_feishi:'字公举，生卒年不详，益州犍为郡南安县（今四川省乐山市）人。刘璋占据益州时，以费诗为绵竹县县令。刘备进攻刘璋夺取益州，费诗举城而降，后受拜督军从事，转任牂牁郡太守，再为州前部司马。',
			diy_lukang:'字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。',
			diy_liufu:'字元颖，沛国相县（今安徽濉溪县西北）人。东汉末年名守。在汉末避难于淮南，说服袁术将戚寄和秦翊率部投奔曹操，曹操大悦，使司徒辟其为掾属。',
			diy_xizhenxihong:'习珍，襄阳人。三国时蜀汉将领。先主刘备时曾任零陵北部都尉，加裨将军。建安二十四年，关羽率荆州大军攻打樊城，唯有习珍据城不降。被困月余，直到箭尽粮绝，拔剑自刎而死。习宏，生卒年不详，习珍之弟。曾在东吴入侵蜀汉时建议哥哥习珍伪降，约樊胄举兵。习珍死后，弟弟习宏落在东吴，有问必不答，终身不为孙权发一言。',
			diy_zaozhirenjun:'枣祗，生卒年月不详，东汉末年颍川阳翟（今河南省禹州市）人。曾任东阿令、羽林监、屯田都尉、陈留太守等职。任峻（？—204年），字伯达，河南郡中牟县人。曹操每次出征，任峻通常在后方补给军队。后来发生饥荒，枣祗建议实施屯田，任峻被任命为典农中郎将，招募百姓在许下屯田，结果连年丰收，积谷足以装满全部粮仓。',
			diy_yangyi:'字威公，襄阳（今湖北襄阳）人，三国时期蜀汉政治家。最初，为荆州刺史傅群的主簿，后投奔关羽，任为功曹。羽遣其至成都，大受刘备赞赏，擢为尚书。建兴三年（225年）任丞相参军，此后一直跟随诸葛亮战斗。亮卒，他部署安全退军。亮生前定蒋琬继己任，仪仅拜中军师。建兴十三年（235年），因多出怨言，被削职流放至汉嘉郡。但杨仪仍不自省，又上书诽谤，言辞激烈，最后下狱，自杀身亡。',
			diy_tianyu:'字国让，渔阳雍奴（今天津市武清区东北）人。三国时期曹魏将领。初从刘备，因母亲年老回乡，后跟随公孙瓒，公孙瓒败亡，劝说鲜于辅加入曹操。曹操攻略河北时，田豫正式得到曹操任用，历任颖阴、郎陵令、弋阳太守等。',
			chentai:'陈泰（200年～260年），字玄伯，颍川许昌（今河南省许昌市）人。三国时期魏国名将，司空陈群之子。陈泰早年起家员外散骑侍郎，其父陈群死后袭封颍阴侯，历任游击将军、并州、雍州刺史、尚书等职，高平陵政变发生时，陈泰力劝大将军曹爽投降，因此得到掌权的司马氏信任，此后为了回避朝廷的争斗，陈泰主动请求外调雍州任职，任内成功防御蜀将姜维的多次进攻。甘露元年（256年），陈泰被调回朝中任尚书右仆射，曾随司马昭两度抵抗东吴的进攻，后改任左仆射。甘露五年（260年），魏帝曹髦被弑杀，陈泰闻讯后悲痛过度，呕血而死，享年六十一岁。追赠司空，赐谥为穆。',
			huangwudie:'黄舞蝶是在现代三国作品中出场的虚拟人物，设定为蜀汉大将黄忠之女，跟随父亲一同投效刘备，在游戏中是一名不错的女将。',
			sunyi:'孙翊（184年～204年），又名孙俨，字叔弼，是孙坚的第三子，孙策、孙权的弟弟。曾被大臣推荐为继承者。孙权继位后，孙翊任丹杨太守，后被身边的人边鸿刺杀。',
			zhangning:'《三国杀·阵面对决》中登场的角色。张角之女，能呼雷掣电。',
			yanghu:'羊祜（221年－278年12月27日），字叔子，泰山郡南城县人。西晋时期杰出的战略家、政治家、文学家，曹魏上党太守羊衜的儿子，名儒蔡邕的女儿蔡文姬的外甥。出身“泰山羊氏”，博学能文，清廉正直。曹魏时期，接受公车征辟，出任中书郎，迁给事黄门侍郎。姐姐嫁给大将军司马师，投靠司马氏家族，仕途平步青云。魏元帝曹奂即位，出任秘书监、相国从事中郎、中领军，统领御林军，兼管内外政事，册封钜平县子，迁。西晋建立后，迁中军将军、散骑常侍、郎中令，册封钜平侯。泰始五年（269年），出任车骑将军、荆州都督，加任开府仪同三司坐镇襄阳，屯田兴学，以德怀柔，深得军民之心；扩充军备，训练士兵，全力准备灭亡孙吴，累迁征南大将军，册封南城侯。咸宁四年，去世，临终前举荐杜预接任职务，获赠侍中、太傅，谥号为“成”。唐宋时期，配享武庙。',
			ns_wangyue:'王越，东汉末年游侠（生卒年不详），乃辽东燕山人士，擅使剑术， 三国时期史阿的师父，曹丕的师公，官职虎贲将军。在史书《典论》中略有记载。',
		},
		characterTitle:{
			key_satomi:'#rHeaven Burns Red',
			key_erika:'#rHeaven Burns Red',
			db_key_liyingxia:'#rHeaven Burns Red',
			key_kano:'#bAIR',
			key_mia:'#bLoopers',
			key_kotomi:'#gClannad',
			key_asara:'#bRewrite',
			key_yukito:'#bAIR',
			key_chihaya:'#bRewrite',
			key_rumi:'#rONE ~輝く季節へ~',
			key_youta:'#b神様になった日',
			key_sakuya:'#bRewrite',
			key_hiroto:'#b神様になった日',
			key_shizuku:'#bSummer Pockets',
			key_shiroha:'#bSummer Pockets',
			key_jojiro:'#bCharlotte<br>战棋专属角色',
			key_kotori:'#bRewrite',
			key_ryoichi:'#bSummer Pockets',
			key_yuu:'#bCharlotte',
			key_godan:'#rAngel Beats!',
			key_abyusa:'#rAngel Beats!',
			key_akiko:'#bKanon',
			key_kaori:'#bKanon',
			key_shiori:'#bKanon',
			key_miki:'#bSummer Pockets',
			key_shiorimiyuki:'#rAngel Beats!',
			key_shizuru:'#bRewrite',
			key_kyoko:'#bSummer Pockets',
			sp_key_kanade:'#rAngel Beats!',
			key_yuzuru:'#rAngel Beats!',
			key_tsumugi:'#bSummer Pockets',
			key_ayato:'#rAngel Beats!',
			key_nagisa:'#gClannad',
			key_tomoya:'#gClannad',
			key_noda:'#rAngel Beats!',
			key_hinata:'#rAngel Beats!',
			key_hisako:'#rAngel Beats!',
			key_doruji:'#bLittle Busters!',
			key_riki:'#bLittle Busters!',
			key_yuiko:'#bLittle Busters!',
			key_akane:'#bRewrite',
			key_sasami:'#bLittle Busters!',
			key_rin:'#bLittle Busters!',
			key_shiina:'#rAngel Beats!',
			key_inari:'#bSummer Pockets',
			key_saya:'#bLittle Busters!',
			key_harukakanata:'#bLittle Busters!',
			key_yui:'#rAngel Beats!',
			key_yoshino:'#bRewrite',
			key_kengo:'#bLittle Busters!',
			key_iwasawa:'#rAngel Beats!',
			key_masato:'#bLittle Busters!',
			key_yusa:'#bCharlotte',
			key_misa:'#rCharlotte',
			key_yukine:'#gClannad',
			key_komari:'#bLittle Busters!',
			key_umi:'#bSummer Pockets',
			key_rei:'#gHarmonia',
			key_lucia:'#bRewrite',
			key_kyousuke:'#bLittle Busters!',
			key_yuri:'#rAngel Beats!',
			key_haruko:'#bAIR',
			sp_key_yuri:'#bAngel Beats!',
			key_fuuko:'#gClannad',

			key_kud:'#b千夜',
			key_misuzu:'#b长发及腰黑长直',
			key_kamome:'#b仿生纱',
			key_nao:'#b潮鸣',
			key_kyou:'#b长发及腰黑长直',
			key_yuuki:'#b4399司命',
			key_kyouko:'#b阿阿阿687',
			key_tenzen:'#b皋耳击',
			key_kotarou:'#bb1154486224',
			key_seira:'#b阿开木木W🍀',
			key_kiyu:'#b无面◎隐者',
			key_tomoyo:'#b长发及腰黑长直',
			key_minagi:'#b无面◎隐者',

			ns_huangchengyan:'#g竹邀月',
			ns_sunchensunjun:'#gVenusjeu',
			ns_yuanxi:'#g食茸二十四',
			ns_caoshuang:'#g荬庀芬兰',
			ns_chentai:'#g荀彧III荀文若',
			ns_huangwudie:'#g你爸爸来了164',
			ns_sunyi:'#g无民氏4251',
			ns_zhangning:'#g如颍隋行1314',
			ns_yanghu:'#ginCenv',
			ns_ruanji:'#g伯约的崛起',
			ns_zanghong:'#g阿七',
			ns_limi:'#g-心若困兽-',
			ns_zhonglimu:'#gJG赛文♠7',
			prp_zhugeliang:'#g阿开木木W🍀',

			ns_luyusheng:'#g猫咪大院 - 魚と水',
			ns_caimao:'#gP尔号玩家◆',
			diy_wenyang:'#g最粗的梦想XD',
			ns_zuoci:'#bskystarwuwei',
			ns_lvzhi:'#bskystarwuwei',
			ns_wangyun:'#rSukincen',
			ns_guanlu:'#rSukincen',
			ns_xinnanhua:'#rSukincen',
			ns_nanhua:'#g戒除联盟',
			ns_shenpei:'#g戒除联盟',
			ns_huamulan:'#p哎别管我是谁',
			ns_jinke:'#p哎别管我是谁',
			ns_huangzu:'#r小芯儿童鞋',
			ns_lisu:'#r小芯儿童鞋',
			ns_yanliang:'#r丶橙续缘',
			ns_wenchou:'#r丶橙续缘',
			ns_caocao:'#r一瞬间丶遗忘',
			ns_caocaosp:'#g希望教主',
			ns_zhugeliang:'#p死不死什么的',
			ns_xinxianying:'#b扶苏公子',
			ns_zhangbao:'#b扶苏公子',
			ns_wangyue:'#p废城君',
			ns_sunjian:'#b兔子两只2',
			ns_lvmeng:'#b兔子两只2',
			ns_yujisp:'#b兔子两只2',
			ns_yuji:'#g蔚屿凉音',
			ns_simazhao:'#r一纸载春秋',
			ns_duangui:'#b宝宝酱紫萌萌哒',
			ns_masu:'#g修女',
			ns_zhangxiu:'#p本因坊神策',
			ns_yangyi:'#p本因坊神策',
			ns_liuzhang:'#r矮子剑薄荷糖',
			ns_mengyou:'#g残昼厄夜',
		},
		card:{
			kano_paibingbuzhen:{
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:true,
				selectTarget:[1,3],
				derivation:'key_kano',
				content:function(){
					'step 0'
					target.draw();
					'step 1'
					var hs=target.getCards('he');
					if(!hs.length) event.finish();
					else if(hs.length==1) event._result={bool:true,cards:hs};
					else target.chooseCard('he',true,'选择一张牌置入仁库');
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						target.$throw(card,1000);
						target.lose(card,'toRenku');
					}
				},
				contentAfter:function(){
					if(player.isIn()&&_status.renku.length&&function(){
						var cards=_status.renku;
						if(cards.length==1) return true;
						var color=get.color(cards[0],false),type=get.type(cards[0],false);
						for(var i=1;i<cards.length;i++){
							if(color&&get.color(cards[i],false)!=color) color=false;
							if(type&&get.type(cards[i],false)!=type) type=false;
							if(!color&&!type) return false;
						}
						return true;
					}()) player.draw();
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							if(player.hasSkill('kano_poyu')) return 2;
							return 0;
						},
						target:0.1,
					},
				},
			},
			kamome_suitcase:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				derivation:'key_kamome',
				skills:['kamome_suitcase'],
				ai:{
					equipValue:function(card){
						return 7;
					},
					basic:{
						equipValue:7
					}
				}
			},
			miki_hydrogladiator:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				derivation:'key_miki',
				skills:['miki_hydrogladiator_skill'],
				distance:{
					attackFrom:-5,
				},
				ai:{
					equipValue:function(card){
						return 7;
					},
					basic:{
						equipValue:7
					},
				},
			},
			miki_binoculars:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				derivation:'key_miki',
				skills:['miki_binoculars'],
				ai:{
					equipValue:function(card){
						return 7;
					},
					basic:{
						equipValue:7
					},
				},
			},
			nsfuzhou_card:{
				fullskin:true,
				type:'delay',
				wuxieable:false,
				modTarget:function(card,player,target){
					return lib.filter.judge(card,player,target);
				},
				enable:function(card,player){
					return player.canAddJudge(card);
				},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player==target);
				},
				judge:function(card){
					if(get.color(card)=='red') return 0;
					return -4;
				},
				effect:function(){
					var source=cards[0].storage.nsfuzhou_source;
					if(!source||!source.isIn()) return;
					source.line(player,'thunder');
					if(result.color=='black'){
						player.damage(source,source.storage.nsfuzhou_damage?2:1,'thunder');
						player.chooseToDiscard('he',true);
					}
					else{
						source.draw(2);
						if(typeof player.storage.nsfuzhou_num!='number') player.storage.nsfuzhou_num=0;
						if(source.storage.nsfuzhou_draw){
							player.recover();
							player.draw();
							player.storage.nsfuzhou_num++;
						}
						else player.storage.nsfuzhou_num--;
						player.addTempSkill('nsfuzhou_num');
						player.markSkill('nsfuzhou_num');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:0,
						value:0,
					},
					result:{
						target:-1,
					},
					tag:{
						// damage:1,
						// natureDamage:1,
						// thunderDamage:1,
					}
				}
			},
		},
		perfectPair:{
			yuji:['zuoci'],
			key_riki:['key_rin','key_saya','key_kyousuke','key_kud'],
			key_kud:['key_harukakanata'],
			key_komari:['key_rin','key_sasami'],
			key_masato:['key_kengo'],
			key_yuiko:['key_harukakanata'],
			key_doruji:['key_rin'],
			key_tomoya:['key_nagisa','key_sunohara','key_kotomi'],
			key_ao:['key_inari'],
			key_shiroha:['key_umi'],
			key_shizuku:['key_tsumugi'],
			key_yuzuru:['key_hinata','key_kanade','key_ayato'],
			key_yuri:['key_kanade','key_abyusa'],
			key_hinata:['key_yui'],
			key_iwasawa:['key_hisako'],
			key_yuu:['key_nao'],
			key_jojiro:['key_yusa'],
			key_kaori:['key_shiori'],
			key_chihaya:['key_sakuya'],
			key_lucia:['key_shizuru'],
		},
		skill:{
			//伊吹风子
			fuuko_xingdiao:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:event=>{
					return event.name!='phase'||game.phaseNumber==0;
				},
				content:function(){
					'step 0'
					player.drawTo(8);
					'step 1'
					var hs=player.getCards('h');
					if(hs.length>0) player.addShownCards(hs,'visible_fuuko_xingdiao');
				},
				mod:{
					ignoredHandcard:function(card){
						if(card.hasGaintag('visible_fuuko_xingdiao')){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&card.hasGaintag('visible_fuuko_xingdiao')){
							return false;
						}
					},
				},
				onremove:true,
				global:'fuuko_xingdiao_gain',
				subSkill:{
					gain:{
						enable:'phaseUse',
						filter:(event,player)=>{
							return game.hasPlayer(current=>lib.skill.fuuko_xingdiao_gain.filterTarget(null,player,current));
						},
						filterTarget:(card,player,target)=>{
							return target!=player&&target.hasCard(card=>card.hasGaintag('visible_fuuko_xingdiao'),'h')
								&&!target.getStorage('fuuko_xingdiao').includes(player)&&target.hasSkill('fuuko_xingdiao');
						},
						selectTarget:()=>{
							const num=game.countPlayer(current=>lib.skill.fuuko_xingdiao_gain.filterTarget(null,_status.event.player,current));
							return num>1?1:-1;
						},
						content:function(){
							'step 0'
							target.markAuto('fuuko_xingdiao',[player]);
							var cards=target.getCards('h',card=>card.hasGaintag('visible_fuuko_xingdiao'));
							if(!cards.length) event.finish();
							else if(cards.length==1) event._result={bool:true,links:cards};
							else player.chooseButton(true,['选择获得'+get.translation(target)+'的一张“星”',cards]);
							'step 1'
							if(result.bool){
								player.gain(result.links,target,'give');
								target.draw();
							}
						},
						ai:{
							order:6,
							result:{
								target:1,
							},
						},
					},
				},
			},
			fuuko_chuanyuan:{
				trigger:{
					player:'loseAfter',
					global:['gainAfter','equipAfter','addJudgeAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					const evt=event.getl(player);
					if(!evt.hs.length) return false;
					for(let i in evt.gaintag_map){
						if(evt.gaintag_map[i].includes('visible_fuuko_xingdiao')) return true;
					}
					return false;
				},
				content:function(){
					var evt=trigger.getl(player),gains=[],draws=0;
					var map=evt.gaintag_map;
					var cards=evt.hs.filter(card=>{
						return map[card.cardid]&&map[card.cardid].includes('visible_fuuko_xingdiao');
					});
					cards.forEach(card=>{
						var suit=get.suit(card,player),num=get.number(card,player);
						var card2=get.cardPile2(function(card){
							if(gains.includes(card)) return false;
							return get.suit(card,player)==suit&&get.number(card,player)==num;
						});
						if(card2) gains.push(card2);
						else draws++;
					});
					if(gains.length) player.gain(gains,'gain2').gaintag.add('fuuko_chuanyuan');
					if(draws) player.draw(draws).gaintag=['fuuko_chuanyuan'];
					player.addSkill('fuuko_chuanyuan_effect');
				},
				subSkill:{
					effect:{
						mod:{
							targetInRange:function(card){
								if(!card.cards||!card.cards.length) return;
								for(var i of card.cards){
									if(!i.hasGaintag('fuuko_chuanyuan')) return;
								}
								return true;
							},
							cardUsable:function(card){
								if(!card.cards||!card.cards.length) return;
								for(var i of card.cards){
									if(!i.hasGaintag('fuuko_chuanyuan')) return;
								}
								return Infinity;
							},
						},
						charlotte:true,
						trigger:{player:'useCard1'},
						forced:true,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							if(event.addCount===false) return false;
							return player.hasHistory('lose',evt=>{
								if(evt.getParent()!=event) return false;
								for(let i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('fuuko_chuanyuan')) return true;
								}
							});
							//return false;
						},
						content:function(){
							trigger.addCount=false;
							player.getStat('card')[trigger.card.name]--;
						},
					},
				},
			},
			//伊莉雅
			iriya_yinji:{
				trigger:{player:'phaseUseBegin'},
				forced:true,
				filter:function(event,player){
					return player.countCards('h')<17;
				},
				content:function(){
					player.drawTo(17).gaintag=['iriya_yinji_tag'];
					player.addSkill('iriya_yinji_tag');
				},
				subSkill:{
					tag:{
						charlotte:true,
						mod:{
							cardEnabled:function(card){
								if(get.itemtype(card)=='card'){
									if(card.hasGaintag('iriya_yinji_tag')) return false;
								}
								else if(card.isCard&&card.cards){
									if(card.cards.some(card=>card.hasGaintag('iriya_yinji_tag'))) return false;
								}
							},
							aiValue:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('iriya_yinji_tag')) return num/10000;
							},
							aiUseful:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('iriya_yinji_tag')) return num/10000;
							},
						},
					},
				},
			},
			iriya_haozhi:{
				enable:'phaseUse',
				filterCard:true,
				selectCard:[2,Infinity],
				promptfunc:()=>'出牌阶段，你可以按照斗地主牌型弃置至少两张牌，且其他角色可以依次对其进行一轮响应。最后一名进行响应的角色可以根据对应牌型执行对应效果。',
				position:'he',
				getType:function(cards,player){
					var nums=cards.map(card=>{
						var num=get.number(card,player);
						if(num<=2) return num+13;
						return num;
					}).sort((a,b)=>(a-b)),len=nums.length;
					if(len==1) return ['单张',nums[0],1];
					if(len==2) return nums[1]==nums[0]?['对子',nums[0],1]:null;
					var map={};
					for(var i=0;i<len;i++){
						var count=get.numOf(nums,nums[i]);
						if(!map[count]) map[count]=[];
						map[count].push(nums[i]);
						i+=(count-1);
					}
					if(len==3){
						if(map[3]) return ['三张',nums[0],1];
						return null;
					}
					if(map[len]){
						return ['炸弹',nums[0],length];
					}
					if(map[1]){
						if(map[1].length==len&&len>4){
							for(var i=0;i<map[1].length-1;i++){
								if(map[1][i+1]-map[1][i]!=1) return null;
								if(map[1][i+1]==15) return null;
							}
							return ['单顺',nums[0],len];
						}
						else if(map[1].length==2&&map[4]&&len==6){
							return ['四带二',map[4][0],1]
						}
						else if(map[3]&&map[1].length==map[3].length&&len==map[1].length*4){
							if(map[3].length==1) return ['三带一',map[3][0],1];
							for(var i=0;i<map[3].length-1;i++){
								if(map[3][i+1]-map[3][i]!=1) return null;
							}
							return ['单带飞机',map[3][0],map[3].length];
						}
						return null;
					}
					if(map[2]){
						if(map[2].length*2==len&&len>5){
							for(var i=0;i<map[2].length-1;i++){
								if(map[2][i+1]-map[2][i]!=1) return null;
								if(map[2][i+1]==15) return null;
							}
							return ['双顺',nums[0],len];
						}
						else if(map[4]&&len==6){
							return ['四带二',map[4][0],1]
						}
						else if(map[3]&&map[2].length==map[3].length&&len==map[2].length*5){
							if(map[3].length==1) return ['三带二',map[3][0],1];
							for(var i=0;i<map[3].length-1;i++){
								if(map[3][i+1]-map[3][i]!=1) return null;
								if(map[3][i+1]==15) return null;
							}
							return ['双带飞机',map[3][0],map[3].length];
						}
						return null;
					}
					if(map[3]){
						if(map[3].length*3==len&&len>5){
							for(var i=0;i<map[3].length-1;i++){
								if(map[3][i+1]-map[3][i]!=1) return null;
								if(map[3][i+1]==15) return null;
							}
							return ['三顺',nums[0],len];
						}
						return null;
					}
					return null;
				},
				filterOk:function(){
					return Array.isArray(lib.skill.iriya_haozhi.getType(ui.selected.cards,_status.event.player));
				},
				check:function(card){
					var player=_status.event.player;
					//收益都一样 多一牌不如少一牌
					var types=['炸弹','三顺','单顺','双顺','三张','对子'];
					var getNum=function(card,player){
						var num=get.number(card,player);
						if(num<=2) return num+13;
						return num;
					},hasEnemy=game.hasPlayer(current=>get.attitude(player,current)<0);
					//所有手牌
					var nums=player.getCards('he',function(card){
						return lib.filter.cardDiscardable(card,player);
					}).map(card=>getNum(card,player));
					var numu=ui.selected.cards.map(card=>getNum(card,player));
					var num=getNum(card,player);
					if(!_status.event._iriya_haozhi_type){
						for(var type of types){
							switch(type){
								case '炸弹':
									if(!hasEnemy) break;
									for(var i of nums){
										if(get.numOf(nums,i)>=4){
											_status.event._iriya_haozhi_type='炸弹';
											break;
										}
									}
									break;
								case '三顺':
									if(!hasEnemy) break;
									for(var i of nums){
										if(i<14&&get.numOf(nums,i)>=3&&get.numOf(nums,i+1)>=3){
											_status.event._iriya_haozhi_type='三顺';
											break;
										}
									}
									break;
								case '双顺':
									if(!hasEnemy) break;
									for(var i of nums){
										if(i<13&&get.numOf(nums,i)>=2){
											for(var j=1;j<3;j++){
												if(get.numOf(nums,i+j)<2) break;
												if(j==2) _status.event._iriya_haozhi_type='双顺';
											}
										}
									}
									break;
								case '单顺':
									if(!hasEnemy) break;
									for(var i of nums){
										if(i<11){
											for(var j=1;j<5;j++){
												if(!nums.includes(i+j)) break;
												if(j==4) _status.event._iriya_haozhi_type='单顺';
											}
										}
									}
									break;
								case '三张':
									if(!hasEnemy) break;
									for(var i of nums){
										if(get.numOf(nums,i)>=3){
											_status.event._iriya_haozhi_type='三张';
											break;
										}
									}
									break;
								case '对子':
									for(var i of nums){
										if(get.numOf(nums,i)>=2){
											_status.event._iriya_haozhi_type='对子';
											break;
										}
									}
									break;
							}
							if(_status.event._iriya_haozhi_type) break;
						}
						if(!_status.event._iriya_haozhi_type) _status.event._iriya_haozhi_type='要不起';
					}
					if(_status.event._iriya_haozhi_type=='要不起') return 0;
					//复用响应AI
					if(!ui.selected.cards.length){
						var count=get.numOf(nums,num);
						switch(_status.event._iriya_haozhi_type){
							case '炸弹':
								if(count>=4) return 15;
								break;
							case '对子':
								if(count>1&&player.hasCard(function(cardx){
									return cardx!=card&&getNum(cardx,player)==num&&cardx.hasGaintag('iriya_yinji_tag');
								},'he')) return 4-get.value(card);
								break;
							case '三张':
								if(count>2) return 8-get.value(card);
								break;
							case '单顺':
								if(num>10) return 0;
								for(var i=1;i<5;i++){
									if(get.numOf(nums,num+i)<1) return 0;
								}
								return 9-get.value(card);
							case '双顺':
								if(count<2||num>12) return 0;
								for(var i=1;i<3;i++){
									if(get.numOf(nums,num+i)<2) return 0;
								}
								return 9-get.value(card);
							case '三顺':
								if(count<3||num>13) return 0;
								for(var i=1;i<2;i++){
									if(get.numOf(nums,num+i)<2) return 0;
								}
								return 12-get.value(card);
						}
						return 0;
					}
					else{
						switch(_status.event._iriya_haozhi_type){
							case '炸弹':
								if(numu.length>=4) return 0;
								if(num==numu[0]) return 15;
								return 0;
							case '对子':
								if(numu.length>=2) return 0;
								if(num==numu[0]) return 3-get.value(card);
								return 0;
							case '三张':
								if(numu.length>=3) return 0;
								if(num==numu[0]) return 9-get.value(card);
								return 0;
							case '单顺': case '双顺': case '三顺':
								var map={
									单顺:[5,0],
									双顺:[3,1],
									三顺:[2,2],
								},len=map[_status.event._iriya_haozhi_type][0],addNum=map[_status.event._iriya_haozhi_type][1];
								if(numu.length>=len) return 0;
								var numt=numu[numu.length-1]+(numu.length%(1+addNum)==0?1:0);
								if(num==numt) return 10+addNum-get.value(card);
								return 0;
						}
					}
				},
				//响应AI
				respondAI:function(card){
					if(!_status.event.goon) return 0;
					var type=_status.event.type,player=_status.event.player;
					var getNum=function(card,player){
						var num=get.number(card,player);
						if(num<=2) return num+13;
						return num;
					},nums=player.getCards('he',function(card){
						return lib.filter.cardDiscardable(card,player,'iriya_haozhi');
					}).map(card=>getNum(card,player));
					var num=getNum(card,player);
					if(!ui.selected.cards.length){
						var count=get.numOf(nums,num);
						if(count>=4&&(type[0]!='炸弹'||num>type[1]||count>type[2])) return 15;
						switch(type[0]){
							case '对子':
								if(count>1&&num>type[1]) return 8-get.value(card);
								break;
							case '三张': case '三带一': case '三带二':
								if(count>2&&num>type[1]) return 9-get.value(card);
								break;
							case '单顺':
								if(num<=type[1]||num>(15-type[2])) return 0;
								for(var i=1;i<type[2];i++){
									if(get.numOf(nums,num+i)<1) return 0;
								}
								return 10-get.value(card);
							case '双顺':
								if(num<=type[1]||count<2||num>(15-type[2]/2)) return 0;
								for(var i=1;i<type[2]/2;i++){
									if(get.numOf(nums,num+i)<2) return 0;
								}
								return 11-get.value(card);
							case '三顺': case '单带飞机': case '双带飞机':
								var size=3+['三顺','单带飞机','双带飞机'].indexOf(type[0]);
								if(num<=type[1]||count<3||num>(15-type[2]/size)) return 0;
								for(var i=1;i<type[2]/size;i++){
									if(get.numOf(nums,num+i)<2) return 0;
								}
								return 12-get.value(card);
						}
						return 0;
					}
					else{
						var numu=ui.selected.cards.map(card=>getNum(card,player))
						var numx=numu[0];
						if(num==numx){
							var count=get.numOf(nums,numx);
							if(count>=4&&(type[0]!='炸弹'||num>type[1]||count>type[2])&&(numu.length<(type[0]=='炸弹'?type2:4))) return 15;
						}
						switch(type[0]){
							case '对子':
								if(numu.length>=2) return 0;
								if(num==numu[0]) return 8-get.value(card);
								return 0;
							case '三张':
								if(numu.length>=3) return 0;
								if(num==numu[0]) return 9-get.value(card);
								return 0;
							case '三带一':
								if(numu.length==3||num==numu[0]) return 9-get.value(card);
								return 0;
							case '三带二':
								if(numu.length>=5) return false;
								if(numu.length==3){
									if(num==numu[0]||get.numOf(nums,num)<2) return 0;
								}
								else if(numu.length==4){
									return num==numu[3]?9-get.value(card):0;
								}
								if(num==numu[0]) return 9-get.value(card);
								return 0;
							case '单顺': case '双顺': case '三顺':
								if(numu.length>=type[2]) return 0;
								var addNum=['单顺','双顺','三顺'].indexOf(type[0]);
								var numt=numu[numu.length-1]+(numu.length%(1+addNum)==0?1:0);
								if(num==numt) return 10+addNum-get.value(card);
								return 0;
							case '单带飞机':
								if(numu.length>=type[2]) return 0;
								var len=type[2]/4*3;
								if(numu.length<len){
									var numt=numu[numu.length-1]+(numu.length%(3)==0?1:0);
									if(num==numt) return 12-get.value(card);
								}
								else{
									if(num>=numu[0]||num<=numu[len-1]) return 0;
									return 12-get.value(card);
								}
								return 0;
							case '双带飞机':
								if(numu.length>=type[2]) return 0;
								var len=type[2]/5*3;
								if(numu.length<len){
									var numt=numu[numu.length-1]+(numu.length%(3)==0?1:0);
									if(num==numt) return 12-get.value(card);
								}
								else{
									if((numu.length-len)%2==0){
										if(numu.includes(num)||get.numOf(nums,num)<2) return 0;
										return 12-get.value(card);
									}
									else{
										return num==numu[numu.length-1]?12-get.value(card):0;
									}
								}
								return 0;
						}
					}
				},
				content:function(){
					'step 0'
					var players=game.filterPlayer().sortBySeat(player.getNext());
					event.players=players;
					event.current=player;
					event.current_type=lib.skill.iriya_haozhi.getType(cards,player);
					event.current_cards=cards.slice(0);
					if(!event.current_type) event.finish();
					'step 1'
					var target=event.players.shift();
					if((target!=player||event.current!=player)&&target.isIn()&&target.countCards('h')>=Math.min(cards.length,4)){
						event.target=target;
						target.addTempSkill('iriya_haozhi_temp',{global:['discardBefore','chooseToDiscardEnd','phaseAfter']});
						var trans=get.translation(event.current);
						var cardsn=function(cards,player){
							var getn=(card,player)=>{
								var num=get.number(card,player);
								if(num<=2) return num+13;
								return num;
							};
							cards.sort(function(a,b){
								var numa=getn(a,player),numb=getn(b,player);
								if(numa!=numb) return numa-numb;
								return lib.suit.indexOf(get.suit(a,player)-get.suit(b,player));
							});
							var str='';
							for(var i of cards){
								str+=',';
								str+=get.strNumber(get.number(i,player));
								str+=get.translation(get.suit(i,player));
							}
							return str.slice(1);
						}(event.current_cards,event.current);
						var next=target.chooseToDiscard(
							'是否响应'+trans+'的'+get.translation(event.current_type[0])+'？',
							trans+'的牌组为'+cardsn+'。您此时可以点击“整理手牌”，将手牌按点数排序。',[2,Infinity],'he');
						next.set('type',event.current_type);
						next.set('filterOk',function(){
							var type=lib.skill.iriya_haozhi.getType(ui.selected.cards,_status.event.player);
							if(!type) return false;
							var ptype=_status.event.type;
							if(type[0]=='炸弹'){
								if(ptype[0]=='炸弹'){
									if(type[2]>ptype[2]) return true;
									return type[1]>ptype[1]&&type[2]==ptype[2];
								}
								return true;
							}
							return type[0]==ptype[0]&&type[2]==ptype[2]&&type[1]>ptype[1];
						});
						next.set('goon',get.attitude(target,event.current)<0);
						next.set('ai',lib.skill.iriya_haozhi.respondAI);
					}
					else if(event.players.length>0) event.redo();
					else event.goto(3);
					'step 2'
					if(result.bool){
						event.current=target;
						event.current_type=lib.skill.iriya_haozhi.getType(result.cards.slice(0),target);
						event.current_cards=result.cards.slice(0);
						if(!event.current_type) event.finish();
						event.current.addExpose(0.5);
					}
					if(event.players.length>0) event.goto(1);
					'step 3'
					var current=event.current,type=0;
					if(!current.isIn()) return;
					switch(event.current_type[0]){
						case '对子':
							type=1;break;
						case '三张': case '三带一': case '三带二':
							type=2;break;
						case '单顺':
							type=3;break;
						case '双顺':
							type=4;break;
						case '三顺': case '单带飞机': case '双带飞机':
							type=5;break;
						case '炸弹': case'四带二':
							type=6;break;
					}
					/*if(type==2){
						current.addSkill('iriya_haozhi_extra');
						current.addMark('iriya_haozhi_extra',1,false);
					}
					else */
					if(type>0){
						var next=game.createEvent('iriya_haozhi_effect',false);
						next.player=current;
						next.setContent(lib.skill.iriya_haozhi['content'+type]);
					}
				},
				content1:function(){
					'step 0'
					player.chooseTarget([1,2],'是否令至多两名角色各摸一张牌？').set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.hasSkillTag('nogain')) att/=10;
						return att;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets);
						game.delayex();
					}
				},
				content2:function(){
					'step 0'
					player.chooseTarget([1,3],'是否弃置至多三名角色的各一张牌？',function(card,player,target){
						return target!=player&&target.hasCard(function(card){
							return lib.filter.canBeDiscarded(card,player,target);
						},'he')
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'guohe_copy2'},player,player);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets,'green');
						for(var target of targets){
							player.discardPlayerCard(target,true,'he');
						}
					}
					'step 2'
					//player.recover();
					player.draw();
				},
				content3:function(){
					'step 0'
					event.count=0;
					'step 1'
					var next=player.chooseTarget('是否弃置一名其他角色的一张牌？',function(card,player,target){
						return target!=player&&target.hasCard(function(card){
							return lib.filter.canBeDiscarded(card,player,target);
						},'he');
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'guohe_copy2'},player,player);
					});
					if(event.color) next.set('prompt2','若你弃置的牌为'+get.translation(event.color)+'，则你可以重复此流程');
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						player.discardPlayerCard(target,true,'he');
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						event.count++;
						var card=result.cards[0],color=get.color(card,false);
						if(!event.color){
							event.color=color;
							event.goto(1);
						}
						else if(color==event.color) event.goto(1);
					}
					'step 4'
					if(event.count>0) player.draw(event.count);
				},
				content4:function(){
					'step 0'
					event.count=0;
					'step 1'
					var next=player.chooseTarget('是否获得一名其他角色的一张牌？',function(card,player,target){
						return target!=player&&target.hasCard(function(card){
							return lib.filter.canBeGained(card,player,target);
						},'he');
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'shunshou_copy2'},player,player);
					});
					if(event.color) next.set('prompt2','若你得到的牌为'+get.translation(event.color)+'，则你可以重复此流程');
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						player.gainPlayerCard(target,true,'he');
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						event.count++;
						var card=result.cards[0],color=get.color(card,false);
						if(!event.color){
							event.color=color;
							event.goto(1);
						}
						else if(color==event.color) event.goto(1);
						//player.draw();
					}
					'step 4'
					if(event.count>0) player.recover(event.count);
				},
				content5:function(){
					'step 0'
					player.chooseTarget([1,3],'是否令至多三名其他角色翻面？',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.isTurnedOver()) return 10*att;
						return -6*att;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.line(targets,'thunder');
						event.targets=targets;
						for(var target of targets) target.turnOver();
					}
					'step 2'
					player.chooseTarget('是否对一名目标角色造成1点火属性伤害？',function(card,player,target){
						return _status.event.getParent().targets.includes(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player,'fire');
					});
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'fire');
						target.damage('fire');
					}
				},
				content6:function(){
					'step 0'
					player.chooseTarget('是否对一名其他角色进行核打击？','你对该角色造成2点雷属性伤害，然后该角色翻面，弃置装备区内的所有牌和四张手牌。',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.isTurnedOver()) return -6*att*Math.sqrt(2+target.countCards('he'));
						return -att*Math.sqrt(2+target.countCards('he'));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'thunder');
						target.damage('thunder',2);
						target.turnOver();
					}
					else event.finish();
					'step 2'
					var num=target.countCards('e');
					if(num>0) target.chooseToDiscard('e',true,num);
					'step 3'
					var num=target.countCards('h');
					if(num>0) target.chooseToDiscard('h',true,Math.min(4,num));
				},
				ai:{
					sortCardByNum:true,
					order:13,
					result:{
						player:1,
					},
				},
				subSkill:{
					extra:{
						charlotte:true,
						mod:{
							targetInRange:()=>true,
							cardUsable:()=>Infinity,
						},
						trigger:{player:'useCard2'},
						forced:true,
						onremove:true,
						content:function(){
							'step 0'
							var num=player.countMark('iriya_haozhi_extra');
							player.removeSkill('iriya_haozhi_extra');
							var card=trigger.card;
							if(trigger.addCount!==false){
								trigger.addCount=false;
								var stat=player.getStat().card;
								if(stat[card.name]&&stat[card.name]>0) stat[card.name]--;
							}
							var info=get.info(card);
							if(info.allowMultiple==false) event.finish();
							if(trigger.targets&&!info.multitarget){
								if(game.hasPlayer(function(current){
									return !trigger.targets.includes(current)&&lib.filter.targetEnabled2(card,player,current);
								})){
									var prompt2='为'+get.translation(card)+'增加'+(num>1?'至多':'')+get.cnNumber(num)+'个目标'
									player.chooseTarget(get.prompt('iriya_haozhi_extra'),[1,num],function(card,player,target){
										var player=_status.event.player;
										return !_status.event.targets.includes(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
									}).set('prompt2',prompt2).set('ai',function(target){
										var trigger=_status.event.getTrigger();
										var player=_status.event.player;
										return get.effect(target,trigger.card,player,player);
									}).set('card',trigger.card).set('targets',trigger.targets);
								}
							}
							'step 1'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayx();
								event.targets=result.targets;
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.targets){
								player.logSkill('iriya_haozhi_extra',event.targets);
								trigger.targets.addArray(event.targets);
							}
						},
						intro:{content:'使用下一张牌无距离和次数限制，且可以增加#个目标'},
					},
					temp:{
						ai:{sortCardByNum:true},
						charlotte:true,
					}
				},
			},
			//远野美凪&远野小满
			minagi_peiquan:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.hasCard((card)=>card.hasGaintag('minagi_tag'),'h');
				},
				filterCard:function(card){
					return card.hasGaintag('minagi_tag');
				},
				position:'h',
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:false,
				promptfunc:()=>'出牌阶段，你可以赠予一张“米券”，然后执行一项本回合内未被选择过的效果：⒈对其造成1点伤害；⒉摸两张牌；⒊弃置其的两张牌；⒋亮出牌堆顶的一张牌，然后你可以使用之。',
				check:card=>{
					const player=_status.event.player;
					return get.type(card,false)=='equip'&&game.hasPlayer(current=>player.canGift(card,current,true)&&!current.refuseGifts(card,player)&&get.effect(current,card,player,player)>0)?2:1+Math.random();
				},
				content:function(){
					'step 0'
					player.gift(cards,target);
					'step 1'
					var list=player.getStorage('minagi_peiquan_yukito');
					if(list.length>=4) event.finish();
					else{
						var yukito=get.translation(target);
						player.chooseButton([
							'配券：请选择一项执行',
							[[
								['damage','选项一：对'+yukito+'造成1点伤害'],
								['draw','选项二：摸两张牌'],
								['discard','选项三：弃置'+yukito+'的两张牌'],
								['use','选项四：亮出牌堆顶的一张牌，然后可以使用之'],
							],'textbutton']
						],true).set('list',list).set('filterButton',function(button){
							return !_status.event.list.includes(button.link);
						}).set('ai',function(button){
							var player=_status.event.player,target=_status.event.getParent().target;
							switch(button.link){
								case 'damage':return get.damageEffect(target,player,player);
								case 'draw':return 2*get.effect(player,{name:'draw'},player,player)
								case 'discard':return get.effect(target,{name:'guohe_copy2'},player,player)*Math.min(1.6,target.countCards('he'));
								case 'use':return _status.event.getRand('minagi_peiquan')*4;
							}
						});
					}
					'step 2'
					player.markAuto('minagi_peiquan_yukito',result.links);
					player.addTempSkill('minagi_peiquan_yukito');
					switch(result.links[0]){
						case 'damage':target.damage('nocard');break;
						case 'draw':player.draw(2);break;
						case 'discard':player.discardPlayerCard(target,2,'he',true);break;
					}
					if(result.links[0]!='use') event.finish();
					'step 3'
					var card=get.cards()[0];
					game.cardsGotoOrdering(card);
					player.showCards(card);
					player.chooseUseTarget(card,'是否使用'+get.translation(card)+'？');
				},
				ai:{
					order:4,
					result:{
						player:(player,target)=>{
							const giftEffects=ui.selected.cards.map(value=>player.getGiftEffect(value,target));
							const baseEffect=Math.min(3,giftEffects.reduce((previousValue,currentValue)=>previousValue+currentValue,0)/giftEffects.length);
							const choices=['damage','draw','discard','use'];
							choices.removeArray(player.getStorage('minagi_peiquan_yukito'));
							if(choices.length<=0) return baseEffect;
							return baseEffect+Math.max(...choices.map(choice=>{
								switch(choice){
									case 'damage':return get.damageEffect(target,player,player);
									case 'draw':return 2*get.effect(player,{name:'draw'},player,player);
									case 'discard':return get.effect(target,{name:'guohe_copy2'},player,player)*Math.min(1.6,target.countCards('he'));
									case 'use':return _status.event.getRand('minagi_peiquan')*4;
								}
							}));
						}
					}
				},
				group:'minagi_peiquan_umareta',
				subSkill:{
					yukito:{charlotte:true,onremove:true},
					umareta:{
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						filter:function(event,player){
							return (event.name!='phase'||game.phaseNumber==0)&&player.countCards('h')>0;
						},
						content:function(){
							var hs=player.getCards('h');
							player.addGaintag(hs,'minagi_tag');
						},
					},
				},
			},
			minagi_huanliu:{
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(lib.filter.notMe,get.prompt('minagi_huanliu'),'和一名其他角色进行“协力”，并获得“远野小满”的所有对应技能').set('ai',function(target){
						return get.threaten(target)*Math.sqrt(1+target.countCards('h'))*((target.isTurnedOver()||target.hasJudge('lebu'))?0.1:1);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('minagi_huanliu',target);
						player.chooseCooperationFor(target,'minagi_huanliu').set('ai',function(button){
							var base=0;
							switch(button.link){
								case 'cooperation_damage':base=0.1;break;
								case 'cooperation_draw':base=0.6;break;
								case 'cooperation_discard':base=0.1;break;
								case 'cooperation_use':base=0.3;break;
							}
							return base+Math.random();
						});
						player.addAdditionalSkill('cooperation',['minagi_huanliu_effect','michiru_sheyuan']);
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
				subSkill:{
					effect:{
						charlotte:true,
						trigger:{global:'phaseJieshuBegin'},
						forced:true,
						logTarget:'player',
						filter:function(event,player){
							return player.checkCooperationStatus(event.player,'minagi_huanliu')&&player.countCards('h')>0;
						},
						content:function(){
							game.log(player,'和',trigger.player,'的协力成功');
							var hs=player.getCards('h');
							player.addGaintag(hs,'minagi_tag');
							game.delayx();
						},
					},
				},
				derivation:'michiru_sheyuan',
			},
			michiru_sheyuan:{
				charlotte:true,
				enable:'chooseToUse',
				filter:function(event,player){
					if(player.hasSkill('michiru_sheyuan_round')) return false;
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i of hs){
						if(i.hasGaintag('minagi_tag')) return false;
						if(!game.checkMod(i,player,'unchanged','cardEnabled2',player)) return false;
					}
					for(var name of lib.inpile){
						var type=get.type(name);
						if(type!='basic'&&type!='trick') return false;
						var card=get.autoViewAs({name:name},hs)
						if(event.filterCard(card,player,event)) return true;
						if(name=='sha'){
							for(var nature of lib.inpile_nature){
								card.nature=nature;
								if(event.filterCard(card,player,event)) return true;
							}
						}
					}
					return false;
				},
				hiddenCard:function(player,name){
					var type=get.type(name);
					if(type!='basic'&&type!='trick') return false;
					if(player.hasSkill('michiru_sheyuan_round')) return false;
					var hs=player.getCards('h');
					if(!hs.length) return false;
					if(_status.connectMode) return true;
					for(var i of hs){
						if(i.hasGaintag('minagi_tag')) return false;
						if(!game.checkMod(i,player,'unchanged','cardEnabled2',player)) return false;
					}
					return true;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[],hs=player.getCards('h');
						for(var name of lib.inpile){
							var type=get.type(name);
							if(type!='basic'&&type!='trick') continue;
							var card=get.autoViewAs({name:name},hs);
							if(event.filterCard(card,player,event)) list.push([type,'',name]);
							if(name=='sha'){
								for(var nature of lib.inpile_nature){
									card.nature=nature;
									if(event.filterCard(card,player,event)) list.push([type,'',name,nature]);
								}
							}
						}
						return ui.create.dialog('舍愿',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						var card={
							name:button.link[2],
							nature:button.link[3],
						};
						if(_status.event.getParent().type=='phase') return player.getUseValue(card,null,true);
						return 1;
					},
					backup:function(links,player){
						return {
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
							},
							filterCard:true,
							position:'h',
							selectCard:-1,
							onuse:function(result,player){
								player.addTempSkill('michiru_sheyuan_round','roundStart');
							},
						}
					},
					prompt:function(links,player){
						return '将所有手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用，然后摸等量的牌';
					},
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						return lib.skill.michiru_sheyuan.hiddenCard(player,'s'+tag.slice(8));
					},
					order:1,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
				subSkill:{
					round:{
						charlotte:true,
						trigger:{player:'useCardAfter'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.skill=='michiru_sheyuan_backup';
						},
						content:function(){
							player.draw(trigger.cards.length);
						},
					},
					backup:{},
				},
			},
			//坂上智代
			tomoyo_wuwei:{
				enable:['chooseToUse','chooseToRespond'],
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					var storage=player.getStorage('tomoyo_wuwei_mark');
					return player.hasCard(function(card){
						return !storage.includes(get.suit(card));
					},'hs');
				},
				position:'hs',
				filterCard:function(card,player){
					var storage=player.getStorage('tomoyo_wuwei_mark');
					return !storage.includes(get.suit(card));
				},
				check:function(card){
					return 5-get.value(card);
				},
				onuse:function(result,player){
					player.markAuto('tomoyo_wuwei_mark',[get.suit(result.card,false)]);
					player.addTempSkill('tomoyo_wuwei_mark');
				},
				onrespond:function(event,player){
					player.markAuto('tomoyo_wuwei_mark',[get.suit(event.card,false)]);
					player.addTempSkill('tomoyo_wuwei_mark');
				},
				group:'tomoyo_wuwei_combo',
				subSkill:{
					mark:{
						charlotte:true,
						onremove:true,
					},
					combo:{
						trigger:{global:'useCardAfter'},
						direct:true,
						filter:function(event,player){
							return event.card.name=='shan'&&player.inRangeOf(event.player)&&player.canUse('sha',event.player,false);
						},
						content:function(){
							player.chooseToUse('武威：是否对'+get.translation(trigger.player)+'使用一张【杀】？',function(card,player,event){
								if(get.name(card)!='sha') return false;
								return lib.filter.filterCard.apply(this,arguments);
							},trigger.player,-1).set('addCount',false).logSkill='tomoyo_wuwei_combo';
						},
					},
				},
			},
			tomoyo_zhengfeng:{
				dutySkill:true,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer((current)=>player.inRange(current));
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('tomoyo_zhengfeng'),'令一名攻击范围内的角色进行判定。其于你的下回合开始前使用与判定结果颜色相同的牌时，你摸一张牌。',function(card,player,target){
						return player.inRange(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(player.hp<=1&&!player.countCards('h')) return 0;
						var hs=target.countCards('h'),thr=get.threaten(target);
						if(target.hasJudge('lebu')) return 0;
						return Math.sqrt(1+hs)*Math.sqrt(Math.max(1,1+thr));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('tomoyo_zhengfeng',target);
						target.judge();
					}
					'step 2'
					player.addTempSkill('tomoyo_zhengfeng_tomoyo',{player:'phaseBeginStart'});
					player.markAuto('tomoyo_zhengfeng_tomoyo',[{
						target:target,
						color:result.color,
					}]);
				},
				group:'tomoyo_zhengfeng_after',
				subSkill:{
					tomoyo:{
						charlotte:true,
						onremove:true,
						mod:{
							inRangeOf:function(source,player){
								var list=player.getStorage('tomoyo_zhengfeng_tomoyo');
								for(var obj of list){
									if(obj.target==source) return true;
								}
							},
						},
						trigger:{global:'useCard'},
						forced:true,
						filter:function(event,player){
							var color=get.color(event.card);
							if(color=='none') return false;
							var list=player.getStorage('tomoyo_zhengfeng_tomoyo');
							for(var obj of list){
								if(obj.target==event.player&&color==obj.color) return true;
							}
							return false;
						},
						content:function(){
							player.draw();
						},
						intro:{
							mark:function(dialog,students,player){
								if(!students||!students.length) return '全校风纪良好！';
								var str='';
								for(var i of students){
									if(str.length>0) str+='<br>';
									str+=get.translation(i.target);
									str+='：';
									str+=get.translation(i.color);
								}
								dialog.addText(str);
							},
						},
					},
					after:{
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return !player.hasHistory('useSkill',function(evt){
								return evt.skill=='tomoyo_zhengfeng';
							});
						},
						prompt:'整风：是否放弃使命？',
						prompt2:'你可以减1点体力上限并失去〖武威〗，摸两张牌并回复1点体力，然后获得技能〖长誓〗。',
						skillAnimation:true,
						animationColor:'gray',
						check:function(event,player){
							return (player.hp*1.1+player.countCards('h'))<3;
						},
						content:function(){
							'step 0'
							game.log(player,'放弃了身为学生会长的使命');
							player.awakenSkill('tomoyo_zhengfeng');
							player.loseMaxHp();
							'step 1'
							player.removeSkill('tomoyo_wuwei');
							'step 2'
							player.draw(2);
							player.recover();
							'step 3'
							player.addSkill('tomoyo_changshi');
						},
					},
				},
			},
			tomoyo_changshi:{
				trigger:{
					global:['gainAfter','loseAsyncAfter'],
				},
				forced:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&event.getg(current).length>1&&player.inRangeOf(current);
					});
				},
				content:function(){
					player.draw();
				},
				group:'tomoyo_changshi_recover',
				subSkill:{
					recover:{
						trigger:{global:'recoverAfter'},
						forced:true,
						filter:function(event,player){
							return event.player.isAlive()&&player.inRangeOf(event.player);
						},
						content:function(){
							player.changeHujia(1);
						},
					},
				},
			},
			//天宫希优
			kiyu_yuling:{
				mod:{
					targetEnabled:function(card){
						var info=get.info(card);
						if(!info||(info.type!='trick'&&info.type!='delay')) return;
						if(info.range) return false;
					},
				},
				trigger:{target:'useCardToTargeted'},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.player.countCards('he')>0;
				},
				logTarget:'player',
				content:function(){
					trigger.player.chooseToDiscard('he',true,get.distance(trigger.player,player));
				},
				ai:{
					threaten:0.7,
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha') return 0.7;
						},
					},
				},
			},
			kiyu_rexianyu:{
				trigger:{player:'phaseUseEnd'},
				charlotte:true,
				unique:true,
				filter:function(event,player){
					return !player.hasSkill('kiyu_rexianyu_round',null,null,false)&&player.hasHistory('useCard',function(evt){
						var type=get.type(evt.card);
						if(type!='basic'&&type!='trick') return false;
						return evt.getParent('phaseUse')==event;
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var history=player.getHistory('useCard',function(evt){
						var type=get.type(evt.card);
						if(type!='basic'&&type!='trick') return false;
						return evt.getParent('phaseUse')==trigger;
					});
					var list=[];
					event.list=list;
					for(var i=0;i<Math.min(history.length,3);i++){
						var card=history[i].card;
						list.push({name:card.name,isCard:true});
						if(card.nature) list[i].nature=card.nature;
					}
					player.chooseTarget(
						get.prompt('kiyu_rexianyu'),
						'将以下使用结果告知于一名其他角色：'+get.translation(list),
						function(card,player,target){
							return target!=player&&!target.hasSkill('kiyu_rexianyu_lastrun',null,null,false);
						}
					).set('ai',function(target){
						return get.attitude(_status.event.player,target)*get.threaten(target)*Math.sqrt(1+target.countCards('h'))*((target.isTurnedOver()||target.hasJudge('lebu'))?0.1:1);
					});
					'step 1'
					if(result.bool){
						player.addTempSkill('kiyu_rexianyu_round','roundStart');
						var tabito=result.targets[0];
						player.logSkill('kiyu_rexianyu',tabito);
						game.delayx();
						tabito.storage.kiyu_rexianyu_lastrun=event.list;
						tabito.storage.amamiya_kiyu=player;
						tabito.addTempSkill('kiyu_rexianyu_lastrun',{
							player:['phaseUseAfter'],
							global:['roundStart'],
						});
					}
				},
				subSkill:{
					round:{charlotte:true},
					lastrun:{
						enable:'chooseToUse',
						onChooseToUse:function(event){
							if(!game.online&&event.type=='phase'){
								var evtx=event.getParent();
								var num=event.player.getHistory('useCard',function(evt){
									return evt.getParent('phaseUse')==evtx;
								}).length;
								event.set('rexianyu_num',num);
							}
						},
						filter:function(event,player){
							if(!player.countCards('hs')) return false;
							var num=event.rexianyu_num,list=player.storage.kiyu_rexianyu_lastrun;
							if(!Array.isArray(list)||typeof num!='number'||list.length<=num) return false;
							var card=get.copy(list[num]);
							delete card.isCard;
							if(event.filterCard(card,player,event)) return true;
							return false;
						},
						onremove:true,
						viewAs:function(cards,player){
							var num=_status.event.rexianyu_num,list=player.storage.kiyu_rexianyu_lastrun;
							if(!Array.isArray(list)||typeof num!='number'||list.length<=num) return {name:'sha'};
							var card=get.copy(list[num]);
							delete card.isCard;
							return card;
						},
						prompt:function(){
							var player=_status.event.player;
							var num=_status.event.rexianyu_num,list=player.storage.kiyu_rexianyu_lastrun;
							if(!Array.isArray(list)||typeof num!='number'||list.length<=num) return '无可用牌';
							var card=list[num];
							var str='将一张牌当做'+get.translation(card);
							var kiyu=player.storage.amamiya_kiyu;
							if(kiyu&&kiyu.isAlive()) str+=('；然后'+get.translation(kiyu)+'摸一张牌，且你本回合的手牌上限+1');
							return str;
						},
						filterCard:true,
						position:'h',
						popname:true,
						check:function(card){
							var player=_status.event.player;
							var num=_status.event.rexianyu_num,list=player.storage.kiyu_rexianyu_lastrun;
							return player.getUseValue(list[num],null,true)-player.getUseValue(card,null,true);
						},
						group:'kiyu_rexianyu_earthbound',
						mark:true,
						intro:{content:'已记录：$'},
						ai:{
							order:12,
							result:{
								player:function(player){
									var lunarq=player.storage.amamiya_kiyu;
									if(lunarq&&get.attitude(player,lunarq)<=0) return -1;
									return 1;
								},
							}
						},
					},
					earthbound:{
						trigger:{player:'useCardAfter'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							if(event.skill!='kiyu_rexianyu_lastrun') return false;
							var lunarq=player.storage.amamiya_kiyu;
							return get.itemtype(lunarq)=='player'&&lunarq.isAlive();
						},
						content:function(){
							var lunarq=player.storage.amamiya_kiyu;
							lunarq.draw();
							player.addTempSkill('kiyu_rexianyu_wolf');
							player.addMark('kiyu_rexianyu_wolf',1,false);
						},
					},
					wolf:{
						charlotte:true,
						onremove:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('kiyu_rexianyu_wolf');
							},
						},
						markimage:'image/card/handcard.png',
						intro:{content:'手牌上限+#'},
					},
				},
			},
			kiyu_xianyu:{
				trigger:{global:'phaseUseBegin'},
				charlotte:true,
				round:1,
				filter:function(event,player){
					return event.player.countCards('h')>0;
				},
				logTarget:'player',
				check:function(event,player){
					var target=event.player;
					var next=target.next;
					if(target.getSeatNum()>next.getSeatNum()) return true;
					if(target.countCards('h')<4&&target.countCards('h',function(card){
						return target.hasUseTarget(card,null,true);
					})<2) return false;
					return true;
				},
				content:function(){
					'step 0'
					var target=trigger.player,cards=target.getCards('h');
					var next=player.chooseToMove('先预：预测'+get.translation(target)+'使用牌的顺序',true);
					next.set('list',[
						[get.translation(target)+'的手牌',cards]
					]);
					next.set('processAI',function(list){
						var cards=list[0][1].slice(0);
						var target=_status.event.getTrigger().player;
						cards.sort(function(a,b){
							return get.order(b,target)-get.order(a,target);
						});
						return [cards];
					});
					'step 1'
					if(result.bool){
						var list=result.moved[0];
						player.storage.kiyu_xianyu_lastrun=list;
						player.addTempSkill('kiyu_xianyu_lastrun',list);
					}
				},
				subSkill:{
					lastrun:{
						trigger:{global:'phaseUseAfter'},
						forced:true,
						charlotte:true,
						onremove:true,
						content:function(){
							var num=0,index=-1,target=trigger.player;
							var cards=player.getStorage('kiyu_xianyu_lastrun');
							var history=target.getHistory('useCard',function(event){
								return event.getParent('phaseUse')==trigger;
							});
							for(var evt of history){
								var goon=false;
								for(var card of evt.cards){
									var index2=cards.indexOf(card);
									if(index2>index){
										goon=true;
										index=index2;
									}
								}
								if(goon) num++;
							}
							if(num>0){
								num=Math.min(3,num);
								player.draw(num);
								if(target.isIn()){
									target.addTempSkill('kiyu_xianyu_effect');
									target.addMark('kiyu_xianyu_effect',num,false);
								}
							}
						},
					},
					effect:{
						charlotte:true,
						onremove:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('kiyu_xianyu_effect');
							},
						},
					},
				},
			},
			//樱庭星罗
			seira_xinghui:{
				trigger:{player:'phaseZhunbeiBegin'},
				check:function(event,player){
					return !player.getExpansions('seira_xinghui').length;
				},
				content:function(){
					'step 0'
					game.delayx();
					'step 1'
					if(get.isLuckyStar(player)){
						event.num=6;
						player.throwDice(6);
					}
					else player.throwDice();
					'step 2'
					var cards=get.cards(num);
					event.cards=cards;
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('prompt','星辉：选择要作为“星屑”的牌（先选择的在上）');
					next.set('list',[
						['置于武将牌上',cards],
						['置入弃牌堆'],
					]);
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var top=[];
						var judges=player.getCards('j');
						var stopped=false;
						if(!player.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return judge(b)-judge(a);
								});
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return get.value(b,player)-get.value(a,player);
							});
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					'step 3'
					if(result.bool&&result.moved&&result.moved[0].length){
						event.cards=result.moved[0];
						player.chooseTarget(true,'将以下牌置于一名角色的武将牌上',get.translation(event.cards),function(card,player,target){
							return !target.getExpansions('seira_xinghui').length;
						}).set('ai',function(target){
							return target==_status.event.player?1:0;
						});
						event.cards.reverse();
					}
					else event.finish();
					'step 4'
					var target=result.targets[0];
					player.line(target,{color:[253, 153, 182]});
					target.addToExpansion(cards).gaintag.add('seira_xinghui');
					game.log(player,'将'+get.cnNumber(cards.length)+'张牌置于',target,'的武将牌上')
					target.addSkill('seira_xinghui_hoshikuzu');
				},
				intro:{
					markcount:'expansion',
					content:function(storage,player){
						return '共有'+get.cnNumber(player.getExpansions('seira_xinghui').length)+'张牌';
					},
					onunmark:function(storage,player){
						player.removeSkill('seira_xinghui_hoshikuzu');
					},
				},
				subSkill:{
					hoshikuzu:{
						trigger:{source:'damageBegin1'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return player.getExpansions('seira_xinghui').length>0;
						},
						content:function(){
							trigger.num++;
							game.log(player,'造成了','#y暴击伤害');
						},
						group:['seira_xinghui_draw','seira_xinghui_judge'],
					},
					draw:{
						trigger:{player:'drawBefore'},
						forced:true,
						filter:function(event,player){
							return player.getExpansions('seira_xinghui').length>0;
						},
						content:function(){
							var cards=player.getExpansions('seira_xinghui');
							var num=Math.min(cards.length,trigger.num);
							trigger.num-=num;
							player.gain(cards.slice(0,num),'draw');
							if(trigger.num==0) trigger.cancel();
						},
					},
					judge:{
						trigger:{player:'judgeBegin'},
						forced:true,
						filter:function(event,player){
							return player.getExpansions('seira_xinghui').length>0;
						},
						content:function(){
							trigger.directresult=player.getExpansions('seira_xinghui')[0];
						},
					},
				},
			},
			seira_yuanying:{
				enable:'phaseUse',
				usable:1,
				filterTarget:true,
				selectTarget:2,
				multitarget:true,
				multiline:true,
				line:{color:[253, 153, 182]},
				content:function(){
					game.countPlayer(function(current){
						if(!targets.includes(current)){
							current.removeSkill('seira_yinyuan');
						}
						else{
							current.addSkillLog('seira_yinyuan');
						}
					});
					game.delayx();
				},
				ai:{
					order:1,
					result:{target:1},
					expose:0.1,
				},
				derivation:'seira_yinyuan',
			},
			seira_yinyuan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.hasSkill('seira_yinyuan',null,null,false)&&target.countCards('hej')>0;
				},
				content:function(){
					player.gainPlayerCard(target,true,'hej');
					target.recover();
				},
				mark:true,
				intro:{content:'你的手牌对其他“姻缘者”可见。出牌阶段限一次，你可以获得一名其他“姻缘者”区域内的一张牌，然后其回复1点体力。'},
				ai:{
					order:9,
					viewHandcard:true,
					skillTagFilter:function(player,tag,arg){
						if(player==arg) return false;
						return player.hasSkill('seira_yinyuan')&&arg.hasSkill('seira_yinyuan');
					},
					result:{
						player:function(player,target){
							var effect=get.effect(target,{name:'shunshou_copy'},player,player);
							if(target.isDamaged()){
								if(effect<0) effect/=2;
								effect+=get.recoverEffect(target,player,player);
							}
							return effect;
						},
					},
				},
			},
			//派对浪客
			nsxingyun:{
				audio:2,
				enable:'chooseToUse',
				getSixiang:function(card){
					if(typeof card=='string') card={name:card};
					if(card.name=='shan') return '玄武';
					var type=get.type(card,null,false);
					if(type=='delay') return '朱雀';
					if(get.tag(card,'damage')) return '白虎';
					if(get.tag(card,'recover')) return '玄武';
					if(type=='trick') return '青龙';
					return false;
				},
				filter:function(event,player){
					if(player.hasSkill('nsxingyun_round')) return false;
					var list=player.getStorage('nsxingyun');
					if(list.length>=4) return false;
					for(var i of lib.inpile){
						var type=lib.skill.nsxingyun.getSixiang(i);
						if(!type||list.includes(type)) continue;
						if(event.filterCard({name:i},player,event)) return true;
						if(i=='sha'){
							for(var j of lib.inpile_nature){
								if(event.filterCard({name:i,nature:j},player,event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var map={青龙:[],朱雀:[],白虎:[],玄武:[]};
						var list=player.getStorage('nsxingyun');
						for(var i of lib.inpile){
							var type=lib.skill.nsxingyun.getSixiang(i);
							if(!type||list.includes(type)) continue;
							if(event.filterCard({name:i},player,event)) map[type].push([get.type2(i,false),'',i]);
							if(i=='sha'){
								for(var j of lib.inpile_nature){
									if(event.filterCard({name:i,nature:j},player,event)) map[type].push([get.type2(i,false),'',i,j]);
								}
							}
						}
						var dialog=['星陨','hidden'];
						for(var i in map){
							if(map[i].length>0){
								dialog.push('<div class="text center">'+i+'</div>');
								dialog.push([map[i],'vcard']);
							}
						}
						return ui.create.dialog.apply(ui.create,dialog);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({
							name:button.link[2],
							nature:button.link[3],
						},player,_status.event.getParent());
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						return _status.event.player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						},false);
					},
					backup:function(links,player){
						return {
							selectCard:1,
							filterCard:true,
							popname:true,
							position:'hs',
							check:function(card){
								return 7-get.value(card);
							},
							viewAs:{name:links[0][2],nature:links[0][3]},
							precontent:function(){
								player.addTempSkill('nsxingyun_round');
							},
						}
					},
					prompt:function(links,player){
						return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					threaten:2.6,
					order:1,
					result:{player:1},
				},
				group:'nsxingyun_clear',
				derivation:['nsxingyun_faq','bazhen'],
				subSkill:{
					backup:{},
					clear:{
						trigger:{player:'useCardAfter'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.skill=='nsxingyun_backup'&&event.cards.length==1
								&&lib.skill.nsxingyun.getSixiang(event.card)!=lib.skill.nsxingyun.getSixiang(event.cards[0])&&!player.getStorage('nsxingyun').includes(lib.skill.nsxingyun.getSixiang(event.card));
						},
						content:function(){
							'step 0'
							player.draw(2);
							player.markAuto('nsxingyun',[lib.skill.nsxingyun.getSixiang(trigger.card)]);
							'step 1'
							if(player.getStorage('nsxingyun').length>=4) player.addSkillLog('bazhen');
						},
					},
					round:{
						charlotte:true,
						onremove:true,
					},
				},
			},
			nshanlang:{
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(
						(current)=>player!=current&&player.canCompare(current)
					);
				},
				content:function(){
					'step 0'
					var goon=player.hasCard(function(card){
						return get.value(card)<=7;
					},'h');
					player.chooseTarget([1,3],get.prompt('nshanlang'),'和至多三名角色进行拼点',function(card,player,target){
						return target!=player&&player.canCompare(target);
					}).set('ai',function(target){
						if(!_status.event.goon) return false;
						var att=get.attitude(_status.event.player,target);
						if(att>=0) return 0;
						if(target.hasSkillTag('noh')) att/=3;
						return -att/Math.sqrt(target.countCards('h'));
					}).set('goon',goon);
					'step 1'
					if(result.bool){
						event.max_num=0;
						var targets=result.targets.sortBySeat();
						player.logSkill('nshanlang',targets);
						player.chooseToCompare(targets).callback=lib.skill.nshanlang.callback;
					}
					else event.finish();
					'step 2'
					if(event.target){
						player.chooseBool('是否令'+get.translation(target)+'获得一张牌？').set('goon',get.attitude(player,target)>0).set('ai',()=>_status.event.goon);
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var card=get.cardPile2(function(card){
							return !lib.skill.nsxingyun.getSixiang(card);
						});
						if(card) target.gain(card,'gain2');
					}
				},
				callback:function(){
					var list=[[player,event.num1],[target,event.num2]],evt=event.getParent(2);
					for(var i of list){
						if(i[1]>evt.max_num){
							evt.max_num=i[1];
							evt.target=i[0];
						}
						else if(evt.target&&i[1]==evt.max_num&&i[0]!=evt.target){
							delete evt.target;
						}
					}
				},
			},
			//钟离牧
			nskuanhuai:{
				trigger:{player:'phaseUseBegin'},
				content:function(){
					'step 0'
					var card=get.discardPile(function(card){
						return get.type(card)!='basic';
					});
					if(card) player.gain(card,'gain2');
					'step 1'
					player.addTempSkill('nskuanhuai_blocker','phaseUseAfter');
					player.addTempSkill('nskuanhuai_effect');
				},
				subSkill:{
					blocker:{
						charlotte:true,
						mod:{
							cardEnabled:function(card){
								if(get.type(card)=='basic') return false;
							},
							cardSavable:function(card){
								if(get.type(card)=='basic') return false;
							},
						},
					},
					effect:{
						trigger:{player:'phaseDiscardEnd'},
						charlotte:true,
						direct:true,
						filter:function(event,player){
							return player.hasHistory('lose',function(evt){
								if(evt.type!='discard'||evt.getParent('phaseDiscard')!=event) return false;
								for(var i of evt.cards2){
									if(get.type(i,false)=='basic'&&get.position(i,true)=='d'&&player.hasUseTarget(i)) return true;
								}
								return false;
							});
						},
						content:function(){
							'step 0'
							var cards=[];
							player.getHistory('lose',function(evt){
								if(evt.type!='discard'||evt.getParent('phaseDiscard')!=trigger) return false;
								for(var i of evt.cards2){
									if(get.type(i,false)=='basic'&&get.position(i,true)=='d') cards.push(i);
								}
								return false;
							});
							event.cards=cards;
							'step 1'
							var cards2=event.cards.filter(function(i){
								return get.position(i,true)=='d'&&player.hasUseTarget(i);
							});
							if(cards2.length){
								player.chooseButton(['宽怀：是否使用其中一张牌？',cards2]);
							}
							else event.finish();
							'step 2'
							if(result.bool){
								var card=result.links[0];
								cards.remove(card);
								player.chooseUseTarget(card,true);
								if(cards.length>0) event.goto(1);
							}
						},
					},
				},
			},
			nsdingbian:{
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					return get.type(event.card)!='basic';
				},
				content:function(){
					'step 0'
					player.addTempSkill('nsdingbian_mark');
					player.addMark('nsdingbian_mark',1,false);
					var storage=player.getStorage('nsdingbian_ignore');
					var goon=false;
					for(var i of lib.inpile){
						if(get.type(i)=='basic'&&!storage.includes(i)){
							goon=true;
							break;
						}
					}
					if(goon) player.chooseControl().set('choiceList',[
						'从牌堆中获得一张基本牌',
						'令一种基本牌于本回合内不计入手牌上限',
					]).set('prompt','定边：请选择一项').set('ai',function(){
						var player=_status.event.player;
						var list=['tao','shan'],list2=player.getStorage('nsdingbian_ignore');
						list.removeArray(list2);
						if(!list.length) return 0;
						var num1=player.countCards('hs',function(card){
							return get.type(card)!='basic'&&player.hasValueTarget(card,null,true);
						}),num2=player.getHandcardLimit();
						if(player.countCards('h',list)<=num2-num1) return 0;
						return 1;
					});
					else event._result={index:0};
					'step 1'
					if(result.index==0){
						var card=get.cardPile2(function(card){
							return get.type(card,false)=='basic';
						});
						if(card) player.gain(card,'gain2');
						event.finish();
					}
					else{
						var list=[],storage=player.getStorage('nsdingbian_ignore');
						for(var i of lib.inpile){
							if(get.type(i)=='basic'&&!storage.includes(i)){
								list.push(i);
							}
						}
						player.chooseButton(['令一种基本牌于本回合内不计入手牌上限',[list,'vcard']],true).set('ai',function(button){
							var name=button.link[2],player=_status.event.player;
							if(name=='sha') return 0;
							var cards=player.getCards('h',name);
							if(!cards.length) return 0;
							return get.value(cards,player);
						});
					}
					'step 2'
					player.markAuto('nsdingbian_ignore',[result.links[0][2]]);
				},
				subSkill:{
					mark:{
						onremove:function(player){
							delete player.storage.nsdingbian_mark;
							delete player.storage.nsdingbian_ignore;
						},
						mod:{
							maxHandcard:(player,num)=>num-player.countMark('nsdingbian_mark'),
							ignoredHandcard:function(card,player){
								if(player.getStorage('nsdingbian_ignore').includes(get.name(card,player))){
									return true;
								}
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&player.getStorage('nsdingbian_ignore').includes(get.name(card,player))){
									return false;
								}
							},
						},
						intro:{content:'手牌上限-#'},
					},
				},
			},
			//李密
			nstuilun:{
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.hp>1&&player.countCards('h')>1&&player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'nstuilun');
					},'h');
				},
				prompt2:'失去任意点体力（至多失去至1点）并弃置任意张手牌（至多弃置至一张）。',
				check:function(event,player){
					if(game.hasPlayer(function(current){
						return current!=player&&current.hp>=player.hp;
					})) return true;
					return false;
				},
				content:function(){
					'step 0'
					if(player.hp==2) event._result={index:0};
					else{
						var list=[];
						for(var i=1;i<player.hp;i++){
							list.push(i+'点');
						}
						player.chooseControl(list).set('prompt','请选择失去体力的量');
					}
					'step 1'
					player.loseHp(1+result.index);
					'step 2'
					if(player.countCards('h')>1&&player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'nstuilun');
					},'h')){
						player.chooseToDiscard('h',true,[1,player.countCards('h')-1]);
					}
					else game.delayx();
					'step 3'
					player.addTempSkill('nstuilun_effect',{player:'phaseBeginStart'});
				},
				subSkill:{
					effect:{
						charlotte:true,
						trigger:{global:'phaseBegin'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.hp<event.player.hp||(player.hp>0&&player.countCards('h')<event.player.countCards('h'));
						},
						content:function(){
							'step 0'
							if(player.hp<trigger.player.hp){
								player.chooseTarget('退论：是否令一名角色回复或失去1点体力？').set('ai',function(target){
									var eff=get.effect(target,{name:'losehp'},player,player);
									if(target.isDamaged()) eff=Math.max(eff,get.recoverEffect(target,player,player));
									return eff;
								});
							}
							else event.goto(3);
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								event.target=target;
								player.logSkill('nstuilun_effect',target);
								if(target.isHealthy()) event._result={index:1};
								else player.chooseControl('回复1点体力','失去1点体力').set('prompt','令'+get.translation(target)+'…').set('ai',function(){
									var player=_status.event.player,target=_status.event.getParent().target;
									if(get.recoverEffect(target,player,player)>=get.effect(target,{name:'losehp'},player,player)) return 0;
									return 1;
								});
							}
							else event.goto(3);
							'step 2'
							if(result.index==0) target.recover();
							else target.loseHp();
							'step 3'
							if(trigger.player.countCards('h')>player.countCards('h')){
								var str=get.cnNumber(player.hp);
								player.chooseTarget('退论：是否令一名角色摸一张牌或弃置一张牌？').set('ai',function(target){
									var player=_status.event.player;
									var att=get.attitude(player,target);
									if(att>0||target.countCards('he')==0) return get.effect(target,{name:'draw'},player,player);
									return get.effect(target,{name:'guohe_copy2'},target,player);
								});
							}
							else event.finish();
							'step 4'
							if(result.bool){
								var target=result.targets[0];
								event.target=target;
								player.logSkill('nstuilun_effect',target);
								if(!target.countCards('he')) event._result={index:0};
								else player.chooseControl('摸一张牌','弃置一张牌').set('prompt','令'+get.translation(target)+'…').set('ai',function(player){
									var evt=_status.event;
									return get.attitude(evt.player,evt.getParent().target)>0?0:1;
								});
							}
							else event.finish();
							'step 5'
							if(result.index==0) target.draw();
							else target.chooseToDiscard('he',true);
						},
					},
				},
			},
			//阮籍
			nsshizui:{
				trigger:{target:'useCardToTargeted'},
				usable:1,
				direct:true,
				filter:function(event,player){
					var type=get.type(event.card,null,false);
					return (type=='basic'||type=='trick')&&player.countCards('he')>0&&player.hasUseTarget({name:'jiu'},null,true);
				},
				content:function(){
					'step 0'
					var suit=get.suit(trigger.card),cards=trigger.cards.filterInD();
					var str='弃置一张牌并视为使用一张【酒】';
					if(lib.suit.includes(suit)) str+=('；若弃置'+get.translation(suit)+'牌，则'+get.translation(trigger.card)+'对你无效');
					if(cards.length) str+=('；若弃置♣牌则获得'+get.translation(cards));
					str+='。';
					var next=player.chooseToDiscard('he',get.prompt('nsshizui'),str);
					next.set('val1',cards.length?get.value(cards,player):0);
					next.set('val2',-get.effect(player,trigger.card,trigger.player,player));
					next.set('suit',suit);
					next.set('ai',function(card){
						var base=2,suit=get.suit(card);
						if(suit=='club') base+=_status.event.val1;
						if(suit==_status.event.suit) base+=_status.event.val2;
						return base-get.value(card);
					}).logSkill='nsshizui';
					'step 1'
					if(result.bool){
						event.suit1=get.suit(result.cards[0],player);
						player.chooseUseTarget('jiu',true);
					}
					else{
						player.storage.counttrigger.nsshizui--;
						event.finish();
					}
					'step 2'
					var suit1=event.suit1,suit2=get.suit(trigger.card,false);
					if(suit1==suit2&&lib.suit.includes(suit1)) trigger.excluded.add(player);
					if(suit1=='club'){
						var cards=trigger.cards.filterInD();
						if(cards.length>0) player.gain(cards,'gain2');
					}
				},
			},
			nsxiaoye:{
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.hasHistory('useCard',function(evt){
						return evt.card.name=='jiu';
					})&&event.player.hasHistory('useCard',function(evt){
						return (evt.card.name=='sha'||get.type(evt.card)=='trick')&&player.hasUseTarget({
							name:evt.card.name,
							nature:evt.card.nature,
							isCard:true,
						});
					})
				},
				content:function(){
					'step 0'
					var list=[];
					trigger.player.getHistory('useCard',function(evt){
						if(evt.card.name!='sha'&&get.type(evt.card)!='trick') return;
						if(evt.card.name=='sha'&&evt.card.nature) list.add('sha:'+evt.card.nature);
						else list.add(evt.card.name);
					});
					for(var i=0;i<list.length;i++){
						if(list[i].indexOf('sha:')==0) list[i]=['基本','','sha',list[i].slice(4)];
						else list[i]=[get.type(list[i]),'',list[i]];
					}
					player.chooseButton([get.prompt('nsxiaoye'),[list,'vcard']]).set('filterButton',function(button){
						return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
					}).set('ai',function(button){
						return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
					});
					'step 1'
					if(result.bool){
						player.logSkill('nsxiaoye');
						player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3],isCard:true});
					}
				},
			},
			//臧洪
			nsshimeng:{
				enable:'phaseUse',
				usable:1,
				selectTarget:[1,Infinity],
				filterTarget:true,
				contentBefore:function(){
					event.getParent()._nsshimeng_count=[0,0];
				},
				content:function(){
					'step 0'
					if(!target.isIn()){
						event.finish();
						return;
					}
					target.chooseToUse('使用一张【杀】，或摸一张牌',function(card,player){
						if(get.name(card)!='sha') return false;
						return lib.filter.cardEnabled.apply(this,arguments);
					}).set('addCount',false);
					'step 1'
					if(result.bool){
						event.getParent()._nsshimeng_count[0]++;
					}
					else{
						event.getParent()._nsshimeng_count[1]++;
						target.draw();
					}
				},
				contentAfter:function(){
					var list=event.getParent()._nsshimeng_count;
					if(list[0]<list[1]){
						player.changeHujia(1);
						player.loseHp();
					}
				},
				ai:{
					order:3.05,
					result:{
						player:function(player,target){
							var att=get.attitude(player,target);
							if(att<=0) return 0;
							if(player.hp>1||player.countCards('hs',['tao','jiu'])) return 1;
							if(!ui.selected.targets.length){
								if(target!=player) return 0;
								if(player.hasSha()) return 1;
								return 0;
							}
							if(ui.selected.targets.length>1&&!target.hasSha()) return 0;
							return 1;
						},
					},
				},
			},
			tenzen_fenghuan:{
				trigger:{global:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(player==event.player||event.targets.length!=1||event.targets[0]!=player||!event.player.isIn()||
						(event.card.name!='sha'&&(get.type(event.card,null,false)!='trick'||!get.tag(event.card,'damage')))) return false;
					if(!player.canUse({
						name:event.card.name,
						nature:event.card.nature,
						isCard:true,
					},event.player,false)) return false;
					var num=get.number(event.card);
					if(typeof num!='number') return false;
					num*=2;
					var hs=player.getCards('he');
					for(var i of hs){
						num-=get.number(i);
						if(num<=0) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=get.number(trigger.card)*2;
					var card={
						name:trigger.card.name,
						nature:trigger.card.nature,
						isCard:true,
					};
					player.chooseToDiscard('he',get.prompt('tenzen_fenghuan',trigger.player),'弃置任意张点数之和不小于'+num+'的牌，然后视为对其使用一张'+get.translation(card)).set('selectCard',function(){
						var cards=ui.selected.cards,num=_status.event.cardNumber;
						for(var i of cards){
							num-=get.number(i);
							if(num<=0) return [cards.length,cards.length+1];
						}
						return [cards.length+1,cards.length+1];
					}).set('cardNumber',num).set('logSkill',['tenzen_fenghuan',trigger.player]).set('effect',get.effect(trigger.player,card,player,player)).set('ai',function(card){
						var eff=_status.event.effect;
						if(eff<=0) return 0;
						for(var i of ui.selected.cards) eff-=get.value(i)/Math.sqrt(get.number(i)/3);
						return eff-get.value(card)/Math.sqrt(get.number(card)/3);
					});
					'step 1'
					if(result.bool){
						var card={
							name:trigger.card.name,
							nature:trigger.card.nature,
							isCard:true,
						},target=trigger.player;
						if(target.isIn()&&player.canUse(card,target,false)) player.useCard(card,target,false);
					}
				},
			},
			tenzen_retianquan:{
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&(player.hp>0||player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'tenzen_retianquan');
					},'he'));
				},
				logTarget:'target',
				usable:1,
				check:function(event,player){
					if(get.attitude(player,event.target)>=0) return false;
					if(player.hp>player.maxHp/2) return true;
					if(player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'tenzen_retianquan')&&get.value(card)<6;
					},'he')) return true;
					return true;
				},
				prompt2:'你可失去1点体力或弃置一张牌，展示牌堆顶的三张牌（若你的体力值小于体力上限的50%，则改为展示五张牌）。每有一张基本牌，其所需使用的【闪】的数量便+1。然后若此牌造成过伤害，则你获得展示牌中的所有非基本牌。',
				content:function(){
					'step 0'
					player.chooseToDiscard('弃置一张牌，或点「取消」失去1点体力','he').set('goon',(player.hp>player.maxHp/2)).set('ai',function(card){
						var val=get.value(card);
						if(_status.event.goon) return 0.1-val;
						return 6-val;
					});
					'step 1'
					if(!result.bool) player.loseHp();
					'step 2'
					var cards=get.cards(player.hp<=player.maxHp/2?5:3);
					player.showCards(cards,get.translation(player)+'发动了【天全】');
					game.cardsGotoOrdering(cards).relatedEvent=trigger.getParent();
					var num=cards.filter(function(card){
						return get.type(card,false)=='basic';
					}).length;
					if(num){
						if(trigger.card.name=='sha'){
							var id=trigger.target.playerid;
							var map=trigger.getParent().customArgs;
							if(!map[id]) map[id]={};
							if(typeof map[id].shanRequired=='number'){
								map[id].shanRequired+=num;
							}
							else{
								map[id].shanRequired=1+num;
							}
						}
					}
					if(num<5){
						var next=game.createEvent('tenzen_retianqua_gain');
						next.cards=cards;
						next.player=player;
						event.next.remove(next);
						trigger.getParent().after.push(next);
						next.setContent(function(){
							if(player.getHistory('sourceDamage',function(evt){
								return evt.card==event.parent.card;
							}).length>0) player.gain(cards.filter(function(card){
								return get.type(card,false)!='basic';
							}),'gain2');
						});
					}
				},
			},
			satomi_luodao:{
				trigger:{player:'useCardToPlayered'},
				logTarget:'target',
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					target.showHandcards(get.translation(player)+'对'+get.translation(target)+'发动了【落刀】');
					'step 1'
					if(target.hasCard(function(card){
						return get.name(card,target)=='shan';
					},'h')){
						player.discardPlayerCard(target,true,'h','visible').set('filterButton',function(button){
							return get.name(button.link)=='shan';
						});
					}
					else if(player.countCards('he')>0) player.chooseToDiscard('he',true);
				},
			},
			satomi_daohai:{
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.hasHistory('lose',function(evt){
						return evt.type=='discard'&&evt.cards2.length>0;
					})&&player.hasUseTarget({name:'wugu'});
				},
				check:function(event,player){
					return player.getUseValue({name:'wugu'})+player.getUseValue({name:'lebu'})>0;
				},
				content:function(){
					'step 0'
					player.chooseUseTarget('wugu',true);
					'step 1'
					if(result.bool){
						var cards=[];
						player.getHistory('gain',function(evt){
							if(evt.getParent().name=='wugu'&&evt.getParent(4)==event){
								cards.addArray(evt.cards);
							}
						});
						cards=cards.filter(function(card){
							return player.getCards('h').includes(card)&&game.checkMod(card,player,'unchanged','cardEnabled2',player);
						});
						if(cards.length){
							player.chooseCardTarget({
								prompt:'是否将得到的牌当做【乐不思蜀】使用？',
								filterCard:function(card){
									return _status.event.cards.includes(card);
								},
								cards:cards,
								filterTarget:function(card,player,target){
									var card=get.autoViewAs({name:'lebu'},ui.selected.cards);
									return player.canUse(card,target);
								},
								ai1:()=>1,
								ai2:function(target){
									var player=_status.event.player,card=get.autoViewAs({name:'lebu'},ui.selected.cards);
									return get.effect(target,{name:'lebu'},player,player);
								},
							})
						}
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.useCard({name:'lebu'},result.cards,result.targets[0]);
					}
				},
			},
			erika_shisong:{
				trigger:{player:'useCard'},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					var index=player.getHistory('useCard').indexOf(event),history=player.actionHistory;
					for(var i=history.length-2;i>=0;i--){
						if(history[i].isMe){
							var evt=history[i].useCard[index];
							return evt&&get.type2(evt.card)==get.type(event.card);
						}
					}
					return false;
				},
				content:function(){
					player.draw();
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.hujia;
					},
				},
			},
			erika_yousheng:{
				dutySkill:true,
				group:['erika_yousheng_achieve','erika_yousheng_fail','erika_yousheng_mamori'],
				trigger:{global:'useCardToTarget'},
				direct:true,
				filter:function(event,player){
					return player.getStorage('erika_yousheng').includes(event.target)&&
						(event.card.name=='sha'||(get.type2(event.card,false)=='trick'&&get.tag(event.card,'damage')>0))&&
						(player.countMark('erika_yousheng_ruka')+1)<=player.countCards('he');
				},
				intro:{
					content:'已保护$',
				},
				content:function(){
					'step 0'
					var num=(player.countMark('erika_yousheng_ruka')+1);
					player.chooseToDiscard('he',num,get.prompt('erika_yousheng',trigger.target),'弃置'+(num)+'张牌，并转移'+get.translation(trigger.card)).logSkill=['erika_yousheng',trigger.target];
					'step 1'
					if(result.bool){
						var ruka=trigger.target,evt=trigger.getParent();
						evt.targets.remove(ruka);
						evt.triggeredTargets2.remove(ruka);
						evt.targets.push(player);
						evt.triggeredTargets2.push(player);
						player.addTempSkill('erika_yousheng_ruka');
						var str='erika_yousheng_'+player.playerid;
						if(!evt[str]) evt[str]=[];
						evt[str].add(ruka);
					}
				},
				subSkill:{
					achieve:{
						trigger:{player:'changeHujiaAfter'},
						forced:true,
						skillAnimation:'legend',
						animationColor:'water',
						filter:function(event,player){
							return player.storage.erika_yousheng&&event.num<0&&!player.hujia;
						},
						content:function(){
							'step 0'
							player.awakenSkill('erika_yousheng');
							game.log(player,'成功完成使命');
							var list=[player];
							list.addArray(player.storage.erika_yousheng);
							list.sortBySeat();
							list=list.filter(function(current){
								return current.isAlive();
							});
							player.line(list,'green');
							game.asyncDraw(list,3);
							'step 1'
							game.delayx();
						},
					},
					fail:{
						trigger:{global:'damageEnd'},
						forced:true,
						filter:function(event,player){
							return player.getStorage('erika_yousheng').includes(event.player)&&event.card&&(event.card.name=='sha'||(get.type2(event.card,false)=='trick'&&get.tag(event.card,'damage')>0));
						},
						content:function(){
							player.awakenSkill('erika_yousheng');
							game.log(player,'使命失败');
							var num=player.hujia;
							if(num>0){
								player.changeHujia(-num);
								player.chooseToDiscard(num,true,'he');
							}
						},
					},
					mamori:{
						trigger:{global:'roundStart'},
						skillAnimation:true,
						animationColor:'wood',
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('erika_yousheng'),[1,2],lib.filter.notMe,'选择至多两名其他角色。你减2点体力上限并获得3点护甲。').set('ai',function(ruka){
								return -1;
							});
							'step 1'
							if(result.bool){
								player.logSkill('erika_yousheng_mamori',result.targets);
								player.awakenSkill('erika_yousheng_mamori');
								player.markAuto('erika_yousheng',result.targets);
								player.loseMaxHp(2);
								player.changeHujia(3);
							}
						},
					},
					ruka:{
						trigger:{global:'useCardAfter'},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return event['erika_yousheng_'+player.playerid]&&event.cards.filterInD().length>0;
						},
						content:function(){
							'step 0'
							player.chooseTarget('是否令一名原目标角色获得'+get.translation(trigger.cards.filterInD())+'？',function(card,player,target){
								return _status.event.targets.includes(target);
							}).set('targets',trigger['erika_yousheng_'+player.playerid]);
							'step 1'
							if(result.bool){
								var ruka=result.targets[0];
								player.line(ruka,'green');
								ruka.gain(trigger.cards.filterInD(),'gain2');
							}
						},
					},
				},
			},
			liyingxia_sanli:{
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					if(event.player==player||event.player!=_status.currentPhase) return false;
					var index=event.player.getHistory('useCard',function(evt){
						return evt.targets.includes(player);
					}).indexOf(event.getParent());
					if(index==2) return event.player.isIn()&&player.countCards('he')>0;
					return index<2&&index>-1;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var index=trigger.player.getHistory('useCard',function(evt){
						return evt.targets.includes(player);
					}).indexOf(trigger.getParent());
					if(index==2){
						player.chooseCard('he',true,'三礼：交给'+get.translation(trigger.player)+'一张牌');
					}
					else{
						player.draw();
						event.finish();
					}
					'step 1'
					if(result.bool){
						player.give(result.cards,trigger.player);
					}
				},
			},
			liyingxia_zhenjun:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.group=='key';
				},
				content:function(){
					'step 0'
					var num=player.getHistory('useCard',function(evt){
						return evt.card.name=='sha'||(get.type(evt.card)=='trick'&&get.tag(evt.card,'damage')>0);
					}).length+1;
					player.chooseTarget(get.prompt('liyingxia_zhenjun'),[1,num],'令至多'+get.cnNumber(num)+'名角色各摸一张牌').set('ai',(serafu)=>get.attitude(_status.event.player,serafu));
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('liyingxia_zhenjun',targets);
						game.asyncDraw(targets);
						for(var i of targets) i.addTempSkill('liyingxia_zhenjun_enhance',{player:player==i?'phaseJieshuBegin':'phaseAfter'});
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
				subSkill:{
					enhance:{
						trigger:{source:'damageBegin1'},
						forced:true,
						charlotte:true,
						mark:true,
						filter:(event,player)=>(player==_status.currentPhase),
						intro:{content:'下回合首次造成的伤害+1'},
						content:function(){
							trigger.num++;
							player.removeSkill(event.name);
						},
					},
				},
			},
			liyingxia_wumai:{
				trigger:{global:'roundStart'},
				direct:true,
				filter:function(event,player){
					return player.group=='shu'&&(player.getStorage('liyingxia_wumai').length<4||game.hasPlayer((current)=>current.isDamaged()));
				},
				content:function(){
					'step 0'
					var list=lib.skill.liyingxia_wumai.derivation.slice(0);
					list.removeArray(player.getStorage('liyingxia_wumai'));
					if(list.length){
						player.chooseControl(list,'cancel2').set('prompt',get.prompt('liyingxia_wumai')).set('prompt2','获得一个技能直到本轮结束');
					}
					else{
						event.num=Math.min(3,game.countPlayer((current)=>current.isDamaged()));
						player.chooseBool(get.prompt('liyingxia_wumai')+'（可摸'+get.cnNumber(event.num)+'张牌）')
						event.goto(2);
					}
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('liyingxia_wumai');
						player.markAuto('liyingxia_wumai',[result.control]);
						player.addTempSkill(result.control,'roundStart');
						game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】')
					}
					event.finish();
					'step 2'
					if(result.bool){
						player.logSkill('liyingxia_wumai');
						player.draw(num);
					}
				},
				derivation:['bazhen','rejizhi','reguanxing','youlong'],
			},
			kano_liezhen:{
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.getHistory('useCard').length>0;
				},
				direct:true,
				frequent:true,
				content:function(){
					'step 0'
					var history=player.getHistory('useCard');
					if(history.length>1){
						var type=get.type2(history[0].card,false);
						for(var i=1;i<history.length;i++){
							if(get.type2(history[i].card,false)!=type){
								player.chooseButton(['列阵：是否视为使用其中一种牌？',[['kano_paibingbuzhen'].concat(get.zhinangs()),'vcard']]).set('filterButton',function(button){
									return _status.event.player.hasUseTarget({name:button.link[2],isCard:true});
								}).set('ai',function(button){
									return _status.event.player.getUseValue({name:button.link[2],isCard:true});
								});
								event.goto(2);
								return;
							}
						}
					}
					var str=_status.renku.length?'获得仁库中的所有牌':'摸两张牌';
					player.chooseBool(get.prompt('kano_liezhen'),str).set('frequentSkill','kano_liezhen');
					'step 1'
					if(result.bool){
						player.logSkill('kano_liezhen');
						if(_status.renku.length){
							player.gain(_status.renku,'gain2','fromRenku');
							_status.renku.length=0;
							game.updateRenku();
						}
						else player.draw(2);
					}
					event.finish();
					'step 2'
					if(result.bool) player.chooseUseTarget(result.links[0][2],true).logSkill='kano_liezhen';
				},
				init:function(player){
					player.storage.renku=true;
				},
			},
			kano_poyu:{
				trigger:{target:'useCardToTargeted'},
				charlotte:true,
				filter:function(event,player){
					return _status.renku.length>0&&(event.card.name=='sha'||get.type(event.card)=='trick'&&get.tag(event.card,'damage')>0);
				},
				check:function(trigger,player){
					return get.effect(player,trigger.card,trigger.player,player)<0;
				},
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					var bool=false,type=get.type2(result.card.name);
					for(var i of _status.renku){
						if(get.suit(i)==result.suit||get.type2(i)==type){
							bool=true;break;
						}
					}
					if(bool){
						player.chooseButton(['是否移去一张牌，令'+get.translation(trigger.card)+'对你无效？',_status.renku]).set('types',[result.suit,type]).set('filterButton',function(button){
							var types=_status.event.types;
							return get.suit(button.link,false)==types[0]||get.type2(button.link,false)==types[1];
						}).set('ai',()=>1);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.links[0];
						player.$throw(card,1000);
						_status.renku.remove(card);
						game.cardsDiscard(card).fromRenku=true;
						game.log(player,'将',card,'置入了弃牌堆');
						trigger.excluded.add(player);
						game.updateRenku();
					}
				},
				init:function(player){
					player.storage.renku=true;
				},
			},
			mia_shihui:{
				trigger:{player:'phaseDrawBegin1'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.changeToZero();
					var num=0;all=player.getAllHistory();
					if(all.length>1){
						for(var i=all.length-2;i>=0;i--){
							if(all[i].isMe){
								for(var evt of all[i].lose){
									if(evt.type=='discard') num+=evt.cards2.length;
								}
								break;
							}
						}
					}
					player.draw(1+num);
				},
				group:'mia_shihui_recover',
				subSkill:{
					recover:{
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						filter:function(event,player){
							return player.isDamaged()||player.countCards('he')>0;
						},
						content:function(){
							player.chooseToDiscard('he',true);
							player.recover();
						},
					},
				},
			},
			mia_qianmeng:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				dutySkill:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.countCards('he')>0){
						player.chooseCard('he',true,'潜梦：选择一张牌置于牌堆中');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						player.storage.mia_qianmeng=card;
						player.$throw(card,1000);
						player.lose(card,ui.cardPile).insert_index=function(){
							return ui.cardPile.childNodes[Math.ceil(ui.cardPile.childNodes.length/2)];
						};
					}
					else event.finish();
					'step 3'
					game.delayx();
				},
				onremove:true,
				group:['mia_qianmeng_achieve','mia_qianmeng_fail'],
				subSkill:{
					achieve:{
						trigger:{
							global:['gainAfter','loseAsyncAfter'],
						},
						forced:true,
						filter:function(event,player){
							var card=player.storage.mia_qianmeng;
							if(event.name=='gain'){
								var source=event.player,cards=event.getg(source);
								return cards.includes(card)&&source.getCards('hejsx').includes(card);
							}
							else{
								if(event.type!='gain') return false;
								var owner=get.owner(card);
								return owner&&event.getg(owner).includes(card);
							}
						},
						skillAnimation:true,
						animationColor:'key',
						content:function(){
							'step 0'
							game.log(player,'成功完成使命');
							player.awakenSkill('mia_qianmeng');
							var card=player.storage.mia_qianmeng,owner=get.owner(card);
							if(owner&&owner!=player) owner.give(card,player);
							'step 1'
							if(player.hp<player.maxHp) player.recover(player.maxHp-player.hp);
							player.removeSkill('mia_shihui');
							player.addSkill('mia_fengfa');
						},
					},
					fail:{
						trigger:{player:'die'},
						direct:true,
						forceDie:true,
						filter:function(event,player){
							return get.itemtype(player.storage.mia_qianmeng)=='card';
						},
						content:function(){
							'step 0'
							game.log(player,'使命失败');
							player.chooseTarget(get.prompt('mia_qianmeng'),'令一名角色获得牌堆中所有点数为'+player.storage.mia_qianmeng.number+'的牌',lib.filter.notMe);
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('mia_qianmeng_fail',target);
								var num=player.storage.mia_qianmeng.number,suit=player.storage.mia_qianmeng.suit,cards=[];
								for(var i=0;i<ui.cardPile.childNodes.length;i++){
									var card=ui.cardPile.childNodes[i];
									if(card.number==num&&card.suit==suit) cards.push(card);
								}
								if(cards.length) target.gain(cards,'gain2');
							}
						},
					},
				},
			},
			mia_fengfa:{
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					var num=0;all=player.getAllHistory();
					if(all.length>1){
						for(var i=all.length-2;i>=0;i--){
							if(all[i].isMe){
								num+=all[i].useCard.length;
								break;
							}
						}
					}
					trigger.num+=num;
				},
			},
			kyou_zhidian:{
				locked:false,
				mod:{
					targetInRange:function(card){
						if(card.kyou_zhidian) return true;
					},
					aiOrder:function(player,card,numx){
						var num=_status.event._kyou_zhidian_baseValue;
						if(num>0&&get.type2(card)=='trick'&&player.getUseValue(card)<num) return numx/10;
					},
				},
				enable:'chooseToUse',
				filter:function(event,player){
					return player.countCards('hs',(card)=>get.type2(card)=='trick')>0;
				},
				filterCard:function(card){
					return get.type2(card)=='trick';
				},
				onChooseToUse:function(event){
					event._kyou_zhidian_baseValue=event.player.getUseValue({name:'sha'});
				},
				check:function(card){
					var num=_status.event._kyou_zhidian_baseValue,player=_status.event.player;
					return num-player.getUseValue(card);
				},
				prompt:'将一张锦囊牌当做【杀】使用',
				viewAs:{
					name:'sha',
					kyou_zhidian:true,
				},
				group:'kyou_zhidian_aim',
				ai:{
					respondSha:true,
					skillTagFilter:(player)=>player.countCards('hs',(card)=>get.type2(card)=='trick')>0,
				},
				subSkill:{
					aim:{
						trigger:{
							player:'useCardToPlayered',
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							return event.isFirstTarget&&event.card.name=='sha';
						},
						logTarget:'target',
						content:function(){
							'step 0'
							var list=['不可被响应','无视防具','伤害+1','不计入次数'];
							list.remove(player.storage.kyou_zhidian);
							player.chooseControl(list).set('prompt','掷典：请为'+get.translation(trigger.card)+'选择一种效果').set('choice',function(){
								if(list.includes('不计入次数')&&player.hasSha()) return '不计入次数';
								if(list.includes('不可被响应')&&trigger.target.mayHaveShan()) return '不可被响应';
								if(list.includes('伤害+1')) return '伤害+1';
								return list.randomGet();
							}()).set('ai',()=>_status.event.choice);
							'step 1'
							var target=trigger.target;
							player.storage.kyou_zhidian=result.control;
							game.log(player,'对',target,'的',trigger.card,'#g'+result.control);
							switch(result.control){
								case '不可被响应':
									trigger.directHit.add(target);
									break;
								case '无视防具':
									target.addTempSkill('qinggang2');
									target.storage.qinggang2.add(trigger.card);
									break;
								case '伤害+1':
									var map=trigger.customArgs;
									var id=target.playerid;
									if(!map[id]) map[id]={};
									if(!map[id].extraDamage) map[id].extraDamage=0;
									map[id].extraDamage++;
									break;
								case '不计入次数':
									var evt=trigger.getParent();
									if(evt.addCount!==false){
										evt.addCount=false;
										player.getStat().card.sha--;
									}
									break;
							}
						},
					}
				},
			},
			kyou_duanfa:{
				trigger:{player:'damageBegin2'},
				limited:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.hp<=event.num;
				},
				content:function(){
					player.awakenSkill('kyou_duanfa');
					if(player.countCards('h')>0) player.chooseToDiscard('h',true,player.countCards('h'));
					player.recover();
					trigger.cancel();
					player.addTempSkill('kyou_duanfa_draw',{player:'phaseBeginStart'});
				},
				subSkill:{
					draw:{
						trigger:{target:'useCardToTargeted'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							if(event.card.name=='sha') return true;
							return get.type(event.card,false)=='trick'&&get.tag(event.card,'damage')>0;
						},
						content:function(){
							player.draw();
						},
					},
				},
			},
			kotarou_aurora:{
				trigger:{
					player:['damageEnd','loseHpEnd','gainMaxHpEnd']
				},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return player.hasEnabledSlot(1);
				},
				content:function(){
					if(player.hasEmptySlot(1)){
						var card=get.cardPile2(function(card){
							return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts')&&player.canUse(card,player);
						});
						if(card) player.chooseUseTarget(card,true);
					}
					else player.chooseUseTarget('sha',true,false);
				},
			},
			kotarou_rewrite:{
				enable:'phaseUse',
				charlotte:true,
				filter:function(event,player){
					return !player.hasSkill('kotarou_rewrite_block');
				},
				content:function(){
					'step 0'
					player.getHistory('custom').push({kotarou_rewrite:true});
					player.chooseControl().set('choiceList',[
						'视为使用一张本局游戏没有以此法使用过的基本牌或普通锦囊牌',
						'移动场上的一张牌',
						'增加1点体力上限并失去1点体力',
						'本回合内下一次造成的伤害+1',
						'本回合内下一次回复体力时，额外回复1点体力',
						'本回合内手牌上限和【杀】的使用次数+1 　　　　　　　　　　　　　　　　　　　　　　　　',
					]).set('ai',function(){
						var player=_status.event.player;
						if(player.hp>2&&player.getUseValue({name:'sha'})>0) return 2;
						return 0;
					});
					'step 1'
					lib.skill.kotarou_rewrite.rewrites[result.index](player,event);
					if(result.index!=0) event.goto(3);
					'step 2'
					if(result.bool){
						player.storage.kotarou_rewrite.push(result.links[0][2]);
						player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3],isCard:true});
					}
					'step 3'
					if(player.getHistory('custom',function(evt){
						return evt&&evt.kotarou_rewrite==true;
					}).length>=3) player.addTempSkill('kotarou_rewrite_block');
				},
				onremove:true,
				rewrites:[
					function(player,event){
						var list=[];
						if(!player.storage.kotarou_rewrite) player.storage.kotarou_rewrite=[];
						for(var i of lib.inpile){
							if(player.storage.kotarou_rewrite.includes(i)) continue;
							var type=get.type(i);
							if((type=='basic'||type=='trick')) list.push([type,'',i]);
							if(i=='sha'){
								for(var j of lib.inpile_nature) list.push([type,'',i,j]);
							}
						}
						if(list.length){
							player.chooseButton(['改写：视为使用一张基本牌或普通锦囊牌',[list,'vcard']],true).set('filterButton',function(button){
								return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true},null,true);
							}).set('ai',function(button){
								return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
							});
						}
						else event._result={bool:false};
					},
					function(player,event){
						player.moveCard(true);
					},
					function(player,event){
						if(player.maxHp<5) player.gainMaxHp();
						player.loseHp();
					},
					function(player,event){
						player.addSkill('kotarou_rewrite_damage');
						player.addMark('kotarou_rewrite_damage',1,false);
						game.log(player,'本回合下次造成的伤害','#y+1');
					},
					function(player,event){
						player.addSkill('kotarou_rewrite_recover');
						player.addMark('kotarou_rewrite_recover',1,false);
						game.log(player,'本回合下次回复的体力','#y+1');
					},
					function(player,event){
						player.addSkill('kotarou_rewrite_sha');
						player.addMark('kotarou_rewrite_sha',1,false);
						game.log(player,'本回合的手牌上限和使用【杀】的次数上限','#y+1');
					},
				],
				ai:{
					order:4,
					result:{
						player:function(player){
							if(player.getHistory('custom',function(evt){
								return evt&&evt.kotarou_rewrite==true;
							}).length>=2) return 0;
							return 1;
						},
					}
				},
			},
			kotarou_rewrite_damage:{
				onremove:true,
				trigger:{source:'damageBegin1'},
				forced:true,
				content:function(){
					trigger.num+=player.countMark('kotarou_rewrite_damage');
					player.removeSkill('kotarou_rewrite_damage');
				},
				charlotte:true,
				intro:{content:'下一次造成的伤害+#'},
			},
			kotarou_rewrite_recover:{
				onremove:true,
				trigger:{player:'recoverBegin'},
				forced:true,
				content:function(){
					trigger.num+=player.countMark('kotarou_rewrite_recover');
					player.removeSkill('kotarou_rewrite_recover');
				},
				charlotte:true,
				intro:{content:'下一次回复的体力+#'},
			},
			kotarou_rewrite_sha:{
				onremove:true,
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('kotarou_rewrite_sha');
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.countMark('kotarou_rewrite_sha');
					}
				},
				charlotte:true,
				intro:{content:'手牌上限和出杀次数+#'},
			},
			kotarou_rewrite_block:{
				trigger:{player:'phaseEnd'},
				forced:true,
				charlotte:true,
				content:function(){
					player.removeSkill('kotarou_rewrite');
					player.removeSkill('kotarou_aurora');
					if(player.maxHp>3) player.loseMaxHp(player.maxHp-3)
				},
			},
			tenzen_yixing:{
				trigger:{
					global:'damageEnd',
				},
				filter:function(event,player){
					if(!event.card||(event.card.name!='sha'&&event.card.name!='juedou')) return false;
					var hairi=event.source;
					if(hairi&&(hairi==player||player.inRangeOf(hairi))&&hairi.isIn()&&(hairi.name1!='key_shizuku'&&hairi.name2!='key_shizuku')) return true;
					hairi=event.player;
					return (hairi&&(hairi==player||player.inRange(hairi))&&hairi.isIn()&&(hairi.name1!='key_shizuku'&&hairi.name2!='key_shizuku'));
				},
				frequent:true,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.countCards('he')>0){
						player.chooseCard('he',true,'将一张牌作为“兴”置于武将牌上');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var cards=result.cards;
						player.addToExpansion(cards,player,'give').gaintag.add('tenzen_yixing');
					}
				},
				intro:{
					content:'expansion',
					onunmark:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				group:'tenzen_yixing_counter',
				subSkill:{
					counter:{
						trigger:{target:'useCardToTargeted'},
						filter:function(event,player){
							if(player==event.player||!player.getExpansions('tenzen_yixing').length) return false;
							return event.targets.length==1&&(event.card.name=='sha'||get.type(event.card)=='trick');
						},
						prompt2:function(event){
							return '获得一张“兴”，且'+get.translation(event.card)+'结算完成后可以弃置两张牌，视为对'+get.translation(event.player)+'使用一张同名牌';
						},
						check:function(event,player){
							if(!player.storage.tenzen_lingyu&&player.getExpansions('tenzen_yixing').length<3) return false;
							var card={
								name:event.card.name,
								nature:event.card.nature,
								isCard:true,
							}
							return player.canUse(card,event.player,false)&&get.effect(event.player,card,player,player)>0;
						},
						content:function(){
							'step 0'
							player.chooseButton(['选择获得一张“兴”',player.getExpansions('tenzen_yixing')],true);
							'step 1'
							if(result.bool){
								player.gain(result.links,'gain2');
							}
							var next=game.createEvent('tenzen_yixing_insert');
							event.next.remove(next);
							trigger.getParent().after.push(next);
							next.player=player;
							next.target=trigger.player;
							next.setContent(lib.skill.tenzen_yixing.content_extra);
						},
					},
				},
				content_extra:function(){
					'step 0'
					var card=event.getParent().card;
					event.card={
						name:card.name,
						nature:card.nature,
						isCard:true,
					};
					if(player.countCards('he')>1&&target&&target.isIn()&&player.canUse(event.card,target,false)){
						player.chooseToDiscard('he',2,'是否弃置两张牌，视为对'+get.translation(target)+'使用'+get.translation(event.card)+'？').set('ai',function(card){
							return 5-get.value(card);
						});
					}
					else event.finish();
					'step 1'
					if(result.bool) player.useCard(card,target,false,'tenzen_yixing');
				},
			},
			tenzen_lingyu:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player.getExpansions('tenzen_yixing').length>=player.hp;
				},
				content:function(){
					player.awakenSkill('tenzen_lingyu');
					player.storage.tenzen_lingyu=true;
					player.loseMaxHp();
					if(player.isHealthy()) player.draw(2);
					player.addSkill('tenzen_tianquan');
				},
			},
			tenzen_tianquan:{
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return (event.card.name=='sha'||event.card.name=='juedou')&&event.targets.length==1&&player.getExpansions('tenzen_yixing').length>1;
				},
				logTarget:'target',
				usable:1,
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				content:function(){
					'step 0'
					//player.viewHandcards(trigger.target);
					player.chooseButton(['选择移去两张“兴”',player.getExpansions('tenzen_yixing')],true,2);
					'step 1'
					if(result.bool){
						player.loseToDiscardpile(result.links);
						var cards=get.cards(5);
						player.showCards(cards,get.translation(player)+'发动了【天全】');
						game.cardsGotoOrdering(cards).relatedEvent=trigger.getParent();
						var num=cards.filter(function(card){
							return get.type(card,false)=='basic';
						}).length;
						if(num){
							if(trigger.card.name=='sha'){
								var id=trigger.target.playerid;
								var map=trigger.getParent().customArgs;
								if(!map[id]) map[id]={};
								if(typeof map[id].shanRequired=='number'){
									map[id].shanRequired+=num;
								}
								else{
									map[id].shanRequired=1+num;
								}
							}
							else{
								var idt=trigger.target.playerid;
								var map=trigger.getParent().customArgs;
								if(!map[idt]) map[idt]={};
								if(!map[idt].shaReq) map[idt].shaReq={};
								if(!map[idt].shaReq[idt]) map[idt].shaReq[idt]=1;
								map[idt].shaReq[idt]++;
							}
						}
						if(num<5){
							var next=game.createEvent('tenzen_lingyu_gain');
							next.cards=cards;
							next.player=player;
							event.next.remove(next);
							trigger.getParent().after.push(next);
							next.setContent(function(){
								if(player.getHistory('sourceDamage',function(evt){
									return evt.card==event.parent.card;
								}).length>0) player.gain(cards.filter(function(card){
									return get.type(card,false)!='basic';
								}),'gain2');
							});
						}
					}
				},
			},
			kyouko_rongzhu:{
				trigger:{global:'gainEnd'},
				filter:function(event,player){
					if(player==event.player||event.getParent().name=='kyouko_rongzhu') return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					var target=trigger.player;
					if(player.countCards('he')>0&&target.isIn()){
						player.chooseCard('he',true,'将一张牌交给'+get.translation(target));
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.give(result.cards,trigger.player);
						var target=_status.currentPhase;
						var name;
						if(target==player){
							name='kyouko_rongzhu_me';
							player.addTempSkill(name);
							player.addMark(name,1,false);
						}
						else if(target==trigger.player){
							name='kyouko_rongzhu_notme';
							player.addTempSkill(name);
							player.addMark(name,1,false);
						}
					}
				},
				subSkill:{
					me:{
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('kyouko_rongzhu_me');
							},
						},
						intro:{content:'手牌上限+#'},
						onremove:true,
					},
					notme:{
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('kyouko_rongzhu_notme');
							},
						},
						intro:{content:'使用杀的次数上限+#'},
						onremove:true,
					},
				},
			},
			kyouko_gongmian:{
				enable:'phaseUse',
				prompt:'出牌阶段，你可以选择一名未以此法选择过的角色，若其手牌：大于你，你获得其一张牌，然后交给其一张牌；小于你，其交给你一张牌，然后你交给其一张牌；等于你，你与其各摸一张牌。',
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&lib.skill.kyouko_gongmian.filterTarget(null,player,current);
					});
				},
				filterTarget:function(card,kyouko,hina){
					if(kyouko==hina||kyouko.getStorage('kyouko_gongmian').includes(hina)) return false;
					var hs=hina.countCards('he');
					if(hs==0) return kyouko.countCards('h')==0;
					return true;
				},
				content:function(){
					'step 0'
					player.markAuto('kyouko_gongmian',targets);
					var hs=player.countCards('h'),ts=target.countCards('h');
					player.getHistory('custom').push({kyouko_gongmian:true});
					if(hs>ts){
						event.utype=1;
						target.chooseCard('he',true,'交给'+get.translation(player)+'一张牌');
					}
					else if(hs==ts){
						game.asyncDraw([player,target]);
						event.utype=2;
					}
					else{
						event.utype=3;
						player.gainPlayerCard(target,true,'he');
					}
					'step 1'
					if(event.utype==2){
						game.delayx();
						event.finish();
					}
					else if(!result.bool) event.finish();
					else if(event.utype==1) target.give(result.cards,player);
					'step 2'
					if(player.countCards('he')>0){
						player.chooseCard('he',true,'交给'+get.translation(target)+'一张牌');
					}
					else event.finish();
					'step 3'
					if(result.bool) player.give(result.cards,target);
				},
				intro:{
					content:'已与$共勉',
				},
				group:['kyouko_gongmian_use','kyouko_gongmian_discard'],
				ai:{
					order:6,
					result:{
						target:function(player,target){
							if(player.getHistory('custom',function(evt){
								return evt.kyouko_gongmian==true;
							}).length) return 0;
							return 1;
						},
					},
				},
			},
			kyouko_gongmian_use:{
				trigger:{player:'phaseUseEnd'},
				direct:true,
				filter:function(event,player){
					return player.getHistory('custom',function(evt){
						return evt.kyouko_gongmian==true;
					}).length>0&&game.hasPlayer(function(current){
						return current!=player&&current.countGainableCards(player,'hej')>0;
					});
				},
				content:function(){
					'step 0'
					event.num=player.getHistory('custom',function(evt){
						return evt.kyouko_gongmian==true;
					}).length;
					player.chooseTarget(get.prompt('kyouko_gongmian'),'获得一名其他角色的至多'+get.cnNumber(event.num)+'张牌，然后交给其等量的牌',function(card,player,target){
						return target!=player&&target.countGainableCards(player,'hej')>0;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(att>0) return att;
						var he=player.getCards('he');
						if(target.countCards('he',function(card){
							return get.value(card,target)>7;
						})&&he.length>0) return -att+5-Math.min.apply(Math,he.map(function(card){
							return get.value(card,player);
						}));
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('kyouko_gongmian',target);
						player.gainPlayerCard(target,'hej',true,[1,num]);
					}
					else event.finish();
					'step 2'
					if(target.isIn()&&result.bool&&result.cards&&result.cards.length&&player.countCards('he')>0){
						var num=result.cards.length,hs=player.getCards('he');
						if(hs.length<=num) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,num,'交给'+get.translation(target)+get.cnNumber(num)+'张牌');
					}
					else event.finish();
					'step 3'
					if(result.bool&&result.cards&&result.cards.length){
						player.give(result.cards,target);
					}
				},
			},
			kyouko_gongmian_discard:{
				trigger:{player:'phaseDiscardBegin'},
				direct:true,
				filter:function(event,player){
					var hs=player.countCards('h');
					return hs>0&&player.getHistory('custom',function(evt){
						return evt.kyouko_gongmian==true;
					}).length>=player.hp&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')<hs;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('kyouko_gongmian'),'获得一名其他角色的所有手牌，然后将一半的牌交给该角色（向上取整）',function(card,player,target){
						return target!=player&&target.countCards('h')<player.countCards('h');
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('kyouko_gongmian',target);
						var hs=target.getCards('h');
						if(hs.length>0) player.gain(hs,target,'giveAuto','bySelf');
					}
					else event.finish();
					'step 2'
					if(target.isIn()&&player.countCards('h')>0){
						var hs=player.getCards('h'),num=Math.ceil(hs.length/2);
						if(hs.length<=num) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,num,'交给'+get.translation(target)+get.cnNumber(num)+'张牌');
					}
					else event.finish();
					'step 3'
					if(result.bool&&result.cards&&result.cards.length){
						player.give(result.cards,target);
					}
				},
			},
			yuuki_yicha:{
				trigger:{player:'phaseUseBegin'},
				frequent:true,
				createDialog:function(id){
					var dialog=ui.create.dialog('hidden');
					(dialog.textPrompt=dialog.add('异插')).style.textAlign='center';
					dialog.cards=[];
					dialog.rawButtons=[];
					dialog.videoId=id;
					var cards=[];
					for(var i=0;i<3;i++){
						var card=ui.create.card(null,null,true);
						card.pos=i;
						card.pos_x=i;
						card.pos_y=0;
						cards.push(card);
						dialog.rawButtons.push(card);
					}
					dialog.add(cards);
					cards=[];
					for(var i=0;i<3;i++){
						var card=ui.create.card(null,null,true);
						card.pos=i+3;
						card.pos_x=i;
						card.pos_y=1;
						cards.push(card);
						dialog.rawButtons.push(card);
					}
					dialog.add(cards);
					for(var i of dialog.buttons){
						i.pos_x=i.link.pos_x;
						i.pos_y=i.link.pos_y;
						i.link=i.link.pos;
					}
					dialog.open();
				},
				addCard:function(card,id,pos){
					var dialog=get.idDialog(id);
					if(!dialog) return;
					for(var i=0;i<dialog.buttons.length;i++){
						var button=dialog.buttons[i];
						if(button.link==pos){
							var card2=ui.create.button(card,'card');
							card2.pos=button.link;
							card2.pos_x=button.pos_x;
							card2.pos_y=button.pos_y;
							card2.classList.add('noclick');
							button.parentNode.insertBefore(card2,button);
							dialog.cards.push(card2);
							button.remove();
							dialog.buttons.splice(i,1);
							break;
						}
					}
				},
				changePrompt:function(str,id){
					var dialog=get.idDialog(id);
					if(!dialog) return;
					dialog.textPrompt.innerHTML=str;
				},
				content:function(){
					'step 0'
					var next=game.createEvent('cardsGotoOrdering');
					next.cards=[];
					next.setContent('cardsGotoOrdering');
					event.videoId=lib.status.videoId++;
					event.forceDie=true;
					event.cards=[];
					event.positions=[0,1,2,3,4,5];
					game.broadcastAll(function(id){
						lib.skill.yuuki_yicha.createDialog(id);
					},event.videoId);
					player.judge().set('callback',function(){
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					'step 1'
					if(get.position(result.card,true)=='o'){
						var pos=event.positions.randomRemove();
						event._first_pos=pos;
						game.broadcastAll(function(card,id,player,pos){
							lib.skill.yuuki_yicha.addCard(card,id,pos);
							lib.skill.yuuki_yicha.changePrompt(get.translation(player)+'放置了'+get.translation(card),id);
						},result.card,event.videoId,player,pos);
						cards.push(result.card);
						game.delay(2);
					}
					player.judge().set('callback',function(){
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					'step 2'
					if(get.position(result.card,true)=='o'){
						var list=event.positions;
						if(get.isLuckyStar(player)){
							var index=(get.color(cards[0],false)==get.color(result.card,false)?0:1);
							list=list.filter(function(i){
								return Math.abs(i%2-event._first_pos%2)==index;
							})
						}
						var pos=list.randomRemove();
						game.broadcastAll(function(card,id,player,pos){
							lib.skill.yuuki_yicha.addCard(card,id,pos);
							lib.skill.yuuki_yicha.changePrompt(get.translation(player)+'放置了'+get.translation(card),id);
						},result.card,event.videoId,player,pos);
						cards.push(result.card);
						game.delay(2);
					}
					if(cards.length) event.count=4;
					else{
						game.broadcastAll('closeDialog',event.videoId);
						event.finish();
					}
					'step 3'
					event.count--;
					player.judge().set('callback',function(){
						event.getParent().orderingCards.remove(event.judgeResult.card);
						event.getParent(2).orderingCards.add(event.judgeResult.card);
					});
					'step 4'
					var card=result.card;
					event.card=card;
					var str='请选择一个位置放置'+get.translation(card);
					if(player==game.me||player.isUnderControl()){
						lib.skill.yuuki_yicha.changePrompt(str,event.videoId);
					}
					else if(player.isOnline()){
						player.send(function(str,id){
							lib.skill.yuuki_yicha.changePrompt(str,event.videoId);
						},str,id);
					}
					player.chooseButton().set('dialog',event.videoId).set('filterButton',function(button){
						var posx=button.pos_x,posy=button.pos_y;
						var list=[],cards=ui.dialog.cards;
						for(var i of cards){
							if(i.pos_x==posx&&Math.abs(i.pos_y-posy)==1) list.push(i.link);
							if(i.pos_y==posy&&Math.abs(i.pos_x-posx)==1) list.push(i.link);
						}
						if(list.length>0){
							var color=get.color(list[0],false);
							if(list.length>1){
								for(var i=1;i<list.length;i++){
									if(get.color(list[i])!=color) return false;
								}
							}
							return get.color(_status.event.card,false)!=color;
						}
						return false;
					}).set('card',card);
					'step 5'
					if(result.bool){
						cards.push(card);
						event.positions.remove(result.links[0]);
						game.broadcastAll(function(card,id,pos,player){
							lib.skill.yuuki_yicha.addCard(card,id,pos);
							lib.skill.yuuki_yicha.changePrompt(get.translation(player)+'放置了'+get.translation(card),id);
						},card,event.videoId,result.links[0],player);
						game.delay(2);
					}
					if(event.count>0) event.goto(3);
					'step 6'
					game.broadcastAll('closeDialog',event.videoId);
					player.chooseTarget('令一名角色获得'+get.translation(cards),true).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 7'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						target.gain(cards,'gain2');
					}
				},
			},
			kotomi_qinji:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.hasUseTarget('wanjian');
				},
				direct:true,
				content:function(){
					player.addTempSkill('kotomi_qinji2');
					player.chooseUseTarget({name:'wanjian',isCard:true},get.prompt('kotomi_qinji'),'视为使用一张【万箭齐发】').logSkill='kotomi_qinji';
				},
			},
			kotomi_qinji2:{
				trigger:{source:'damageBefore'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.getParent().skill=='kotomi_qinji';
				},
				content:function(){
					trigger.cancel();
					trigger.player.loseHp(trigger.num);
				},
			},
			kotomi_chuanxiang:{
				global:'kotomi_chuanxiang2',
			},
			kotomi_chuanxiang2:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.hasSkill('kotomi_chuanxiang')&&player.countCards('e',lib.skill.kotomi_chuanxiang2.filterCard)>0;
				},
				filterCard:function(card,player){
					if(!player) player=_status.event.player;
					return game.hasPlayer(function(current){
						return current!=player&&current.canEquip(card);
					});
				},
				position:'e',
				filterTarget:function(card,player,target){
					return target!=player&&target.canEquip(ui.selected.cards[0]);
				},
				check:function(card){
					if(get.value(card)<=0) return 10;
					var player=_status.event.player;
					if(game.hasPlayer(function(current){
						return current.hasSkill('kotomi_chuanxiang')&&get.attitude(player,current)>0;
					})){
						var subtype=get.subtype(card,false);
						if(player.countCards('hs',function(cardx){
							return get.type(cardx)=='equip'&&get.subtype(cardx,false)==subtype&&player.canUse(cardx,player)&&get.effect(player,cardx,player,player)>0;
						})) return 8;
						return 7/Math.max(1,get.value(card));
					}
					return 0;
				},
				promptfunc:function(){
					var players=game.filterPlayer(function(current){
						return current.hasSkill('kotomi_chuanxiang');
					});
					return '将一张装备牌传给其他角色，然后令'+get.translation(players)+'摸一张牌。若传给该角色，则其改为摸两张牌。'
				},
				prepare:'give',
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					target.equip(cards[0]);
					var list=game.filterPlayer(function(current){
						return current.hasSkill('kotomi_chuanxiang');
					});
					game.asyncDraw(list,function(targetx){
						return targetx==target?2:1;
					});
					'step 1'
					game.delayx();
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(!card) return 0;
							var eff=get.effect(target,card,player,target);
							if(target.hasSkill('kotomi_chuanxiang')) eff++;
							return eff;
						},
					},
				},
			},
			asara_shelu:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>0;
					});
				},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					if(!target.countCards('h')) event.finish();
					else player.choosePlayerCard(target,'h',true);
					'step 1'
					player.showCards(result.cards);
					event.cards2=result.cards;
					'step 2'
					target.$give(event.cards2,player,false);
					target.loseToSpecial(event.cards2,'asara_yingwei',player).visible=true;
					var card1=cards[0],card2=event.cards2[0];
					if(card1.suit==card2.suit) player.draw(2);
					if(card1.number==card2.number) player.recover();
				},
				ai:{
					order:6,
					result:{
						target:-1,
					},
				},
			},
			asara_yingwei:{
				trigger:{player:'yingbian'},
				forced:true,
				filter:(event,player)=>event.card.isCard&&player.hasHistory('lose',evt=>evt.getParent()==event&&Object.values(evt.gaintag_map).some(value=>value.includes('asara_yingwei'))),
				content:()=>{
					trigger.forceYingbian=true;
				}
			},
			yukito_kongwu:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					"step 0"
					if(_status.connectMode) event.time=lib.configOL.choose_timeout;
					event.videoId=lib.status.videoId++;
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						game.pause();
						game.countChoose();
						setTimeout(function(){
							_status.imchoosing=false;
							event._result={
								bool:true,
								score:get.rand(1,5),
							};
							if(event.dialog) event.dialog.close();
							if(event.control) event.control.close();
							game.resume();
						},5000);
					};
					var createDialog=function(player,id){
						if(_status.connectMode) lib.configOL.choose_timeout='30';
						if(player==game.me) return;
						var str=get.translation(player)+'正在表演《小空飞天》...<br>';
						ui.create.dialog(str).videoId=id;
					};
					var chooseButton=function(){lib.skill.yufeng.$playFlappyBird(5,'小空飞天')};
					//event.switchToAuto=switchToAuto;
					game.broadcastAll(createDialog,player,event.videoId);
					if(event.isMine()){
						chooseButton();
					}
					else if(event.isOnline()){
						event.player.send(chooseButton);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					"step 1"
					game.broadcastAll(function(id,time){
						if(_status.connectMode) lib.configOL.choose_timeout=time;
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.close();
						}
					},event.videoId,event.time);
					var result=event.result||result;
					game.log(player,'获得了','#g'+result.score+'分');
					if(!result.score){
						player.chooseToDiscard(2,true,'he');
						event.finish();
						return;
					}
					var list=[];
					var list2=[];
					for(var i=0;i<5;i++){
						if(lib.skill.yukito_kongwu.moves[i].filter(player,true)) list.push(i);
						else list2.push(i);
					}
					if(list.length>=result.score) list=list.randomGets(result.score);
					else list.addArray(list2.randomGets(result.score-list.length));
					list.sort();
					var next=player.chooseButton([
						'控物：请选择一项',
						[list.map(i=>{
							return [i,lib.skill.yukito_kongwu.moves[i].prompt];
						}),'textbutton'],
					]);
					next.set('forced',true);
					next.set('filterButton',function(button){
						return lib.skill.yukito_kongwu.moves[button.link].filter(_status.event.player);
					});
					next.set('ai',function(button){
						if(lib.skill.yukito_kongwu.moves[button.link].filter(_status.event.player,true)) return 1+Math.random();
						return Math.random();
					});
					"step 2"
					var num=result.links[0];
					switch(num){
						case 0:event.goto(3);break;
						case 1:event.goto(5);break;
						case 2:event.goto(7);break;
						case 3:event.goto(9);break;
						case 4:player.moveCard(true);event.finish();break;
					}
					"step 3"
					player.chooseTarget(true,'令一名角色摸两张牌').set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
						if(target.hasSkillTag('nogain')) att/=10;
						return att;
					});
					"step 4"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.draw(2);
					}
					event.finish();
					"step 5"
					player.chooseTarget(true,'对一名角色造成1点伤害').set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					"step 6"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.damage();
					}
					event.finish();
					"step 7"
					player.chooseTarget(true,'令一名已受伤的角色回复1点体力',function(card,player,target){
						return target.isDamaged();
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.recoverEffect(target,player,player);
					});
					"step 8"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.recover();
					}
					event.finish();
					"step 9"
					player.chooseTarget(true,'弃置一名角色区域内的两张牌',function(card,player,target){
						return target.countDiscardableCards(player,'hej')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 10"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.discardPlayerCard(target,'hej',true,2);
					}
					event.finish();
				},
				moves:[
					{
						prompt:'令一名角色摸两张牌',
						filter:()=>true,
					},
					{
						prompt:'对一名角色造成1点伤害',
						filter:function(player,ai){
							if(!ai) return true;
							return game.hasPlayer(function(current){
								return get.damageEffect(current,player,player)>0;
							});
						},
					},
					{
						prompt:'令一名已受伤的角色回复1点体力',
						filter:function(player,ai){
							return game.hasPlayer(function(current){
								if(current.isDamaged()) return !ai||get.recoverEffect(current,player,player)>0;
							});
						}
					},
					{
						prompt:'弃置一名角色区域内的两张牌',
						filter:function(player,ai){
							return game.hasPlayer(function(current){
								return current.countDiscardableCards(player,'hej',function(card){
									if(!ai) return true;
									return get.buttonValue({link:card})*get.attitude(player,current)>0;
								})>=(ai?1:Math.min(2,current.countDiscardableCards(player,'hej')));
							});
						},
					},
					{
						prompt:'移动场上的一张牌',
						filter:function(player,ai){
							return player.canMoveCard(ai);
						},
					},
				],
				ai:{
					order:10,
					result:{player:1},
					threaten:3.2,
				}
			},
			yukito_yaxiang:{
				enable:'chooseToUse',
				limited:true,
				filter:function(event,player){
					return event.type=='dying'&&(player.name1=='key_yukito'||player.name2=='key_yukito');
				},
				filterTarget:function(card,player,target){
					return target==_status.event.dying;
				},
				selectTarget:-1,
				skillAnimation:true,
				animationColor:'key',
				content:function(){
					'step 0'
					player.awakenSkill('yukito_yaxiang');
					player.reinit('key_yukito','key_crow');
					'step 1'
					if(target.hp<3) target.recover(3-target.hp);
					'step 2'
					var cards=target.getCards('j');
					if(cards.length) target.discard(cards);
					'step 3'
					target.addSkill('misuzu_zhongyuan');
				},
				derivation:'misuzu_zhongyuan',
				ai:{
					save:true,
					order:4,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)<4) return false;
							if(player.countCards('h',function(card){
								var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
								if(mod2!='unchanged') return mod2;
								var mod=game.checkMod(card,player,target,'unchanged','cardSavable',player);
								if(mod!='unchanged') return mod;
								var savable=get.info(card).savable;
								if(typeof savable=='function') savable=savable(card,player,target);
								return savable;
							})>=1-target.hp) return false;
							if(target==player||target==get.zhu(player)) return true;
							return !player.hasUnknown();
						},
					},
				},
			},
			misuzu_zhongyuan:{
				trigger:{player:'judge'},
				skillAnimation:true,
				animationColor:'key',
				direct:true,
				content:function(){
					'step 0'
					var str='你的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，是否发动【终愿】修改判定结果？';
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:false,
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(player,str){
						var event=_status.event;
						player=player||event.player;
						if(!event._result) event._result={};
						var dialog=ui.create.dialog(str,'forcebutton','hidden');
						event.dialog=dialog;
						dialog.addText('花色');
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						var listi=['spade','heart','club','diamond'];
						for(var i=0;i<listi.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=listi[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(listi[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								var current=this.parentNode.querySelector('.bluebg');
								if(current){
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								event._result.suit=link;
							});
						}
						dialog.content.appendChild(table);
						dialog.addText('点数');
						var table2=document.createElement('div');
						table2.classList.add('add-setting');
						table2.style.margin='0';
						table2.style.width='100%';
						table2.style.position='relative';
						for(var i=1;i<14;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=i;
							table2.appendChild(td);
							var num=i;
							td.innerHTML='<span>'+get.strNumber(num)+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								var current=this.parentNode.querySelector('.bluebg');
								if(current){
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								event._result.number=link;
							});
						}
						dialog.content.appendChild(table2);
						dialog.add('　　');
						event.dialog.open();
						event.switchToAuto=function(){
							event._result={
								bool:false,
							};
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
						event.control=ui.create.control('ok','cancel2',function(link){
							var result=event._result;
							if(link=='cancel2') result.bool=false;
							else{
								if(!result.number||!result.suit) return;
								result.bool=true;
							}
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.pause();
						game.countChoose();
					};
					if(event.isMine()){
						chooseButton(player,str);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,event.player,str);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					'step 1'
					var map=event.result||result;
					if(map.bool){
						player.awakenSkill('misuzu_zhongyuan');
						player.logSkill('misuzu_zhongyuan',player);
						game.log(player,'将判定结果修改为了','#g'+get.translation(result.suit+2)+get.strNumber(result.number));
						trigger.fixedResult={
							suit:result.suit,
							color:get.color({suit:result.suit}),
							number:result.number,
						};
						player.popup(get.translation(result.suit+2)+get.strNumber(result.number),'thunder');
						event.getParent('arrangeTrigger').finish();
					}
				},
			},
			chihaya_liewu:{
				derivation:'chihaya_huairou',
				mod:{
					cardUsable:function(card){
						if(card.name=='sha') return Infinity;
					},
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					var card=event.card;
					var info=get.info(card);
					if(info.type!='trick'||info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.includes(current)&&lib.filter.targetEnabled2(card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'增加一个目标';
					player.chooseTarget(get.prompt('chihaya_liewu'),function(card,player,target){
						var player=_status.event.player;
						return !_status.event.targets.includes(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('card',trigger.card).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						if(!event.isMine()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('chihaya_liewu',event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				group:'chihaya_liewu2',
			},
			chihaya_liewu2:{
				trigger:{player:'disableEquipAfter'},
				forced:true,
				filter:function(event,player){
					return !player.hasEnabledSlot()&&!player._chihaya_liewu;
				},
				skillAnimation:true,
				animationColor:'orange',
				content:function(){
					player._chihaya_liewu=true;
					player.loseMaxHp(4);
					player.addSkill('chihaya_huairou');
				},
			},
			chihaya_huairou:{
				audio:2,
				enable:"phaseUse",
				position:'he',
				filter:(event,player)=>player.hasCard(card=>lib.skill.chihaya_huairou.filterCard(card,player),lib.skill.chihaya_huairou.position),
				filterCard:(card,player)=>get.type(card)=='equip'&&player.canRecast(card),
				check:function(card){
					if(!_status.event.player.hasEquipableSlot(get.subtype(card))) return 5;
					return 3-get.value(card);
				},
				content:function(){
					player.recast(cards);
				},
				discard:false,
				lose:false,
				delay:false,
				prompt:"将一张装备牌置入弃牌堆并摸一张牌",
				ai:{
					order:10,
					result:{
						player:1
					}
				}
			},
			chihaya_youfeng:{
				enable:'chooseToUse',
				zhuanhuanji:true,
				mark:true,
				intro:{
					content:function(storage,player){
						return storage?'每轮限一次，你可以废除你的一个装备栏，视为使用一张基本牌。':'每轮限一次，你可以加1点体力上限，视为使用一张普通锦囊牌。';
					},
				},
				marktext:'☯',
				init:function(player){
					player.storage.chihaya_youfeng=false;
				},
				hiddenCard:function(player,name){
					if(player.storage.chihaya_youfeng&&!player.hasEnabledSlot()) return false;
					if(player.hasSkill('chihaya_youfeng_'+(player.storage.chihaya_youfeng||false))) return false;
					var type=get.type(name);
					if(player.storage.chihaya_youfeng) return type=='basic';
					return type=='trick';
				},
				filter:function(event,player){
					if(player.storage.chihaya_youfeng&&!player.hasEnabledSlot()) return false;
					if(player.hasSkill('chihaya_youfeng_'+(player.storage.chihaya_youfeng||false))) return false;
					var type=player.storage.chihaya_youfeng?'basic':'trick';
					for(var name of lib.inpile){
						if(get.type(name)!=type) continue;
						if(event.filterCard({name:name,isCard:true},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						const dialog=ui.create.dialog('游凤','hidden');
						const equips=[];
						if(player.storage.chihaya_youfeng){
							for(let i=1;i<6;i++){
								if(!player.hasEnabledSlot(i)) continue;
								equips.push([i,get.translation('equip'+i)]);
							}
							if(equips.length>0) dialog.add([equips,'tdnodes'])
						}
						const type=player.storage.chihaya_youfeng?'basic':'trick';
						const list=[];
						for(const name of lib.inpile){
							if(get.type(name)!=type) continue;
							if(event.filterCard({name:name,isCard:true},player,event)){
								list.push([type,'',name]);
								if(name=='sha'){
									for(let j of lib.inpile_nature) list.push([type,'',name,j]);
								}
							}
						}
						dialog.add([list,'vcard']);
						return dialog;
					},
					filter:function(button){
						if(ui.selected.buttons.length&&typeof button.link==typeof ui.selected.buttons[0].link) return false;
						return true;
					},
					select:function(){
						if(_status.event.player.storage.chihaya_youfeng) return 2;
						return 1;
					},
					check:function(button){
						var player=_status.event.player;
						if(typeof button.link=='number'){
							if(!player.hasEmptySlot(button.link)){
								var card=player.getEquip(button.link);
								if(card){
									var val=get.value(card);
									if(val>0) return 0;
									return 5-val;
								}
							}
							switch(button.link){
								case 3:return 4.5;
								case 4:return 4.4;
								case 5:return 4.3;
								case 2:return (3-player.hp)*1.5;
								case 1:{
									if(game.hasPlayer(function(current){
										return (get.realAttitude||get.attitude)(player,current)<0&&get.distance(player,current)>1;
									})) return 0;
									return 3.2;
								}
							}
						}
						var name=button.link[2];
						var evt=_status.event.getParent();
						if(get.type(name)=='basic'){
							if(name=='shan') return 2;
							if(evt.type=='dying'){
								if(get.attitude(player,evt.dying)<2) return false;
								if(name=='jiu') return 2.1;
								return 1.9;
							}
							if(evt.type=='phase') return player.getUseValue({name:name,nature:button.link[3],isCard:true});
							return 1;
						}
						if(!['chuqibuyi','shuiyanqijunx','juedou','nanman','wanjian','shunshou','zhujinqiyuan'].includes(name)) return 0;
						var card={name:name,isCard:true};
						if(['shunshou','zhujinqiyuan'].includes(card.name)){
							if(!game.hasPlayer(function(current){
								return get.attitude(player,current)!=0&&get.distance(player,current)<=1&&player.canUse(card,current)&&get.effect(current,card,player,player)>0;
							})) return 0;
							return player.getUseValue(card)-7;
						}
						return player.getUseValue(card)-4;
					},
					backup:function(links,player){
						if(links.length==1) return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
							},
							popname:true,
							precontent:function(){
								player.logSkill('chihaya_youfeng');
								player.gainMaxHp();
								delete event.result.skill;
								player.addTempSkill('chihaya_youfeng_'+(player.storage.chihaya_youfeng||false),'roundStart');
								player.changeZhuanhuanji('chihaya_youfeng');
							},
						}
						if(typeof links[1]=='number') links.reverse();
						var equip=links[0];
						var name=links[1][2];
						var nature=links[1][3];
						return {
							filterCard:function(){return false},
							selectCard:-1,
							equip:equip,
							viewAs:{
								name:name,
								nature:nature,
								isCard:true,
							},
							popname:true,
							precontent:function(){
								player.logSkill('chihaya_youfeng');
								player.disableEquip(lib.skill.chihaya_youfeng_backup.equip);
								delete event.result.skill;
								player.addTempSkill('chihaya_youfeng_'+(player.storage.chihaya_youfeng||false),'roundStart');
								player.changeZhuanhuanji('chihaya_youfeng');
							},
						}
					},
					prompt:function(links,player){
						if(links.length==1) return '增加1点体力上限，视为使用'+(get.translation(links[0][3])||'')+get.translation(links[0][2]);
						if(typeof links[1]=='number') links.reverse();
						var equip='equip'+links[0];
						var name=links[1][2];
						var nature=links[1][3];
						return '废除自己的'+get.translation(equip)+'栏，视为使用'+(get.translation(nature)||'')+get.translation(name);
					},
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(arg=='respond') return false;
						if(!player.storage.chihaya_youfeng||player.hasSkill('chihaya_youfeng_true')) return false;
					},
					order:1,
					result:{
						player:1,
					},
				},
			},
			chihaya_youfeng_true:{charlotte:true},
			chihaya_youfeng_false:{charlotte:true},
			rumi_shuwu:{
				mod:{
					cardUsable:function(card){
						if(card.name=='sha') return Infinity;
					},
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					var card=event.card;
					var info=get.info(card);
					if(info.type!='trick'||info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.includes(current)&&lib.filter.targetEnabled2(card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var prompt2='为'+get.translation(trigger.card)+'增加一个目标';
					player.chooseTarget(get.prompt('rumi_shuwu'),function(card,player,target){
						var player=_status.event.player;
						return !_status.event.targets.includes(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('card',trigger.card).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						if(!event.isMine()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('rumi_shuwu',event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				group:'rumi_shuwu2',
			},
			rumi_shuwu2:{
				trigger:{player:'phaseUseEnd'},
				forced:true,
				filter:function(event,player){
					if(player.hp<=3) return true;
					if(player.getHistory('useCard',function(evt){
						return evt.card.name=='sha'&&evt.addCount!==false&&evt.getParent('phaseUse')==event;
					}).length<=1) return true;
					if(player.getHistory('sourceDamage',function(evt){
						return get.type(evt.card,false)=='trick'&&evt.getParent('phaseUse')==event;
					}).length==0) return true;
					return false;
				},
				content:function(){
					var num=0;
					if(player.hp<=3) num++;
					if(player.getHistory('useCard',function(evt){
						return evt.card.name=='sha'&&evt.addCount!==false&&evt.getParent('phaseUse')==trigger;
					}).length<=1) num++;
					if(player.getHistory('sourceDamage',function(evt){
						return get.type(evt.card,false)=='trick'&&evt.getParent('phaseUse')==trigger;
					}).length==0) num++;
					player.draw(num);
					player.addTempSkill('rumi_shuwu3');
					player.addMark('rumi_shuwu3',num,false);
				},
			},
			rumi_shuwu3:{
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('rumi_shuwu3');
					},
				},
				onremove:true,
			},
			sakuya_junbu:{
				mod:{
					targetInRange:function(card,player){
						if(player.countDisabledSlot()>=1) return true;
					},
					cardUsable:function(card,player){
						if(player.countDisabledSlot()>=2) return Infinity;
					},
				},
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					if(player.countDisabledSlot()>=4) return true;
					return lib.skill.sakuya_junbu.filter2.apply(this,arguments);
				},
				filter2:function(event,player){
					if(player.countDisabledSlot()<3) return false;
					var card=event.card;
					var info=get.info(card);
					if(info.allowMultiple==false) return false;
					if(event.targets&&!info.multitarget){
						if(game.hasPlayer(function(current){
							return !event.targets.includes(current)&&lib.filter.targetEnabled2(card,player,current);
						})){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					if(player.countDisabledSlot()>=4){
						trigger.directHit.addArray(game.players);
						if(!lib.skill.sakuya_junbu.filter2(trigger,player)){
							event.finish();
							return;
						}
					}
					var prompt2='为'+get.translation(trigger.card)+'增加一个目标';
					player.chooseTarget(get.prompt('sakuya_junbu'),function(card,player,target){
						var player=_status.event.player;
						return !_status.event.targets.includes(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
					}).set('prompt2',prompt2).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					}).set('card',trigger.card).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						if(!event.isMine()) game.delayx();
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets){
						player.logSkill('sakuya_junbu',event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				group:'sakuya_junbu_damage',
				subSkill:{
					damage:{
						trigger:{source:'damageBegin1'},
						forced:true,
						sub:true,
						filter:function(event,player){
							return !player.hasEnabledSlot()&&event.getParent().type=='card';
						},
						logTarget:'player',
						content:function(){
							player.loseHp();
							trigger.num++;
						},
					},
				},
			},
			hiroto_huyu:{
				trigger:{global:'phaseUseEnd'},
				direct:true,
				noHidden:true,
				filter:function(event,player){
					return player!=event.player&&player.hasSkill('hiroto_huyu')&&!player.hasSkill('hiroto_zonglve')&&event.player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					trigger.player.chooseCard(2,'h','是否对'+get.translation(player)+'发动【虎驭】？','将两张手牌交给该角色，然后令其获得〖纵略〗并于下回合获得该角色得到的所有牌').set('goon',function(){
						var source=trigger.player;
						if(get.attitude(source,player)>0) return 7;
						if(source.hp>2) return 4;
						return 0;
					}()).set('ai',function(card){
						return _status.event.goon-get.value(card);
					});
					'step 1'
					if(result.bool){
						var target=trigger.player;
						player.logSkill('hiroto_huyu',target);
						target.give(result.cards,player);
						player.storage.hiroto_huyu2=target;
						player.addSkill('hiroto_zonglve');
						player.addSkill('hiroto_huyu2');
					}
				},
				derivation:'hiroto_zonglve',
			},
			hiroto_huyu2:{
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				charlotte:true,
				content:function(){
					player.removeSkill('hiroto_huyu2');
					player.removeSkill('hiroto_zonglve');
					player.removeGaintag('hiroto_huyu2');
					var target=player.storage.hiroto_huyu2;
					if(target&&target.isIn()){
						var cards=[];
						player.getHistory('gain',function(evt){
							cards.addArray(evt.cards);
						});
						var he=player.getCards('he');
						cards=cards.filter(function(card){
							return he.includes(card);
						});
						if(cards.length) target.gain(cards,player,'giveAuto','bySelf');
					}
				},
				mark:'character',
				intro:{content:'已成为$的工具人'},
				group:'hiroto_huyu_gain',
			},
			hiroto_huyu_gain:{
				trigger:{player:'gainBegin'},
				silent:true,
				filter:function(event,player){
					if(player==_status.currentPhase) event.gaintag.add('hiroto_huyu2');
					return false;
				},
			},
			hiroto_zonglve:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>0;
					});
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				filterCard:true,
				delay:false,
				charlotte:true,
				position:'h',
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					player.choosePlayerCard(true,target,'h');
					'step 1'
					event.card=result.cards[0];
					player.$compare(cards[0],target,event.card);
					game.log(player,'展示了',cards[0]);
					game.log(target,'展示了',event.card)
					game.delay(3.5);
					'step 2'
					game.broadcastAll(ui.clear);
					if(get.color(cards[0],player)==get.color(card,target)){
						target.damage('nocard');
						target.discard(card).animate=false;
					}
					else player.gainPlayerCard(target,true,2,'hej');
				},
				mod:{
					maxHandcard:function(player,num){
						return num+3;
					},
				},
				ai:{
					order:7,
					result:{
						target:-1,
					},
				},
			},
			hiroto_tuolao:{
				trigger:{player:'phaseAfter'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player.phaseNumber>1&&!player.getHistory('lose',function(evt){
						return evt.getParent(2).name=='hiroto_huyu2';
					}).length;
				},
				content:function(){
					player.awakenSkill('hiroto_tuolao');
					player.draw(3);
					player.removeSkill('hiroto_huyu');
					player.addSkill('hiroto_zonglve');
				},
			},
			shizuku_sizhi:{
				audio:2,
				enable:'phaseUse',
				getResult:function(cards){
					var l=cards.length;
					var all=Math.pow(l,2);
					var list=[];
					for(var i=1;i<all;i++){
						var array=[];
						for(var j=0;j<l;j++){
							if(Math.floor((i%Math.pow(2,j+1))/Math.pow(2,j))>0) array.push(cards[j])
						}
						var num=0;
						for(var k of array){
							num+=get.number(k);
						}
						if(num==13) list.push(array);
					}
					if(list.length){
						list.sort(function(a,b){
							if(a.length!=b.length) return b.length-a.length;
							return get.value(a)-get.value(b);
						});
						return list[0];
					}
					return list;
				},
				usable:1,
				filterCard:function(card){
					var num=0;
					for(var i=0;i<ui.selected.cards.length;i++){
						num+=get.number(ui.selected.cards[i]);
					}
					return get.number(card)+num<=13;
				},
				complexCard:true,
				selectCard:function(){
					var num=0;
					for(var i=0;i<ui.selected.cards.length;i++){
						num+=get.number(ui.selected.cards[i]);
					}
					if(num==13) return ui.selected.cards.length;
					return ui.selected.cards.length+2;
				},
				check:function(card){
					var evt=_status.event;
					if(!evt.shizuku_sizhi_choice) evt.shizuku_sizhi_choice=lib.skill.shizuku_sizhi.getResult(evt.player.getCards('he'));
					if(!evt.shizuku_sizhi_choice.includes(card)) return 0;
					return 1;
				},
				position:'he',
				content:function(){
					player.draw(cards.length*2).gaintag=['shizuku_sizhi2'];
					player.addTempSkill('shizuku_sizhi2');
				},
				ai:{
					order:5,
					result:{player:1},
				},
			},
			shizuku_sizhi2:{
				onremove:function(player){
					player.removeGaintag('shizuku_sizhi2');
				},
				mod:{
					targetInRange:function(card){
						if(!card.cards||!card.cards.length) return;
						for(var i of card.cards){
							if(!i.hasGaintag('shizuku_sizhi2')||get.color(i)!='black') return;
						}
						return true;
					},
					cardUsable:function(card){
						if(!card.cards||!card.cards.length) return;
						for(var i of card.cards){
							if(!i.hasGaintag('shizuku_sizhi2')||get.color(i)!='black') return;
						}
						return Infinity;
					},
					ignoredHandcard:function(card,player){
						if(card.hasGaintag('shizuku_sizhi2')&&get.color(card)=='red'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&card.hasGaintag('shizuku_sizhi2')&&get.color(card)=='red'){
							return false;
						}
					},
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('shizuku_sizhi2')&&get.color(card)=='black') return num-0.1;
					},
				},
			},
			shizuku_biyi:{
				trigger:{player:'damageEnd'},
				frequent:true,
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					var num=result.number;
					var next=player.chooseToDiscard('是否弃置任意张点数之和为'+get.cnNumber(num)+'的牌并回复1点体力？',function(card){
						var num=0;
						for(var i=0;i<ui.selected.cards.length;i++){
							num+=get.number(ui.selected.cards[i]);
						}
						return get.number(card)+num<=_status.event.num;
					},'he');
					next.set('num',num);
					next.set('complexCard',true);
					next.set('selectCard',function(){
						var num=0;
						for(var i=0;i<ui.selected.cards.length;i++){
							num+=get.number(ui.selected.cards[i]);
						}
						if(num==_status.event.num) return ui.selected.cards.length;
						return ui.selected.cards.length+2;
					});
					next.set('cardResult',function(){
						var cards=player.getCards('he');
						var l=cards.length;
						var all=Math.pow(l,2);
						var list=[];
						for(var i=1;i<all;i++){
							var array=[];
							for(var j=0;j<l;j++){
								if(Math.floor((i%Math.pow(2,j+1))/Math.pow(2,j))>0) array.push(cards[j])
							}
							var numx=0;
							for(var k of array){
								numx+=get.number(k);
							}
							if(numx==num) list.push(array);
						}
						if(list.length){
							list.sort(function(a,b){
								return get.value(a)-get.value(b);
							});
							return list[0];
						}
						return list;
					}());
					next.set('ai',function(card){
						if(!_status.event.cardResult.includes(card)) return 0;
						return 6-get.value(card);
					});
					'step 2'
					if(result.bool) player.recover();
				},
			},
			shizuku_sanhua:{
				trigger:{player:'die'},
				forceDie:true,
				skillAnimation:true,
				animationColor:'thunder',
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('shizuku_sanhua'),lib.filter.notMe).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('shizuku_sanhua',target);
						var names=[];
						var cards=[];
						while(cards.length<4){
							var card=get.cardPile2(function(card){
								return !cards.includes(card)&&!names.includes(card.name)&&get.type(card)=='basic';
							});
							if(card){
								cards.push(card);
								names.push(card.name);
							}
							else break;
						}
						if(cards.length) target.gain(cards,'gain2');
					}
				},
			},
			shiroha_yuzhao:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					player.addToExpansion(get.cards(game.countGroup()),'draw').gaintag.add('shiroha_yuzhao');
				},
				marktext:'兆',
				intro:{
					markcount:'expansion',
					mark:function(dialog,content,player){
						var content=player.getExpansions('shiroha_yuzhao');
						if(content&&content.length){
							if(player==game.me||player.isUnderControl()){
								dialog.addAuto(content);
							}
							else{
								return '共有'+get.cnNumber(content.length)+'张牌';
							}
						}
					},
					content:function(content,player){
						var content=player.getExpansions('shiroha_yuzhao');
						if(content&&content.length){
							if(player==game.me||player.isUnderControl()){
								return get.translation(content);
							}
							return '共有'+get.cnNumber(content.length)+'张牌';
						}
					}
				},
				group:'shiroha_yuzhao_umi',
			},
			shiroha_yuzhao_umi:{
				trigger:{global:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.getExpansions('shiroha_yuzhao').length>0&&get.distance(event.player,player)<=1;
				},
				content:function(){
					'step 0'
					event.num=game.countGroup();
					player.addToExpansion(get.cards(event.num)).gaintag.add('shiroha_yuzhao');
					'step 1'
					var next=player.chooseToMove(),num=game.countGroup();
					next.set('prompt','预兆：将'+get.cnNumber(num)+'张牌置于牌堆顶');
					next.set('num',num);
					next.set('forced',true);
					next.set('filterOk',function(moved){
						return moved[1].length==_status.event.num;
					});
					next.set('filterMove',function(from,to,moved){
						if(to!=1) return true;
						return moved[1].length<_status.event.num;
					});
					next.set('list',[
						[get.translation(player)+'（你）的“兆”',player.getExpansions('shiroha_yuzhao')],
						['牌堆顶'],
					]);
					next.set('processAI',function(list){
						var cards=list[0][1],cards2=cards.randomRemove(_status.event.num);
						return [cards,cards2];
					});
					'step 2'
					if(result&&result.bool){
						var cards=result.moved[1];
						player.lose(cards,ui.cardPile,'insert');
					}
					game.updateRoundNumber();
				},
			},
			shiroha_guying:{
				derivation:'shiroha_guying_rewrite',
				trigger:{
					player:'damageBegin3',
					source:'damageBegin1',
				},
				direct:true,
				filter:function(event,player,name){
					if(!player.storage.shiroha_jiezhao&&player.hasSkill('shiroha_guying_temp')) return false;
					if(name=='damageBegin3') return true;
					return player!=event.player;
				},
				locked:function(skill,player){
					if(!player||!player.storage.shiroha_jiezhao) return true;
					return false;
				},
				content:function(){
					'step 0'
					var num=event.triggername=='damageBegin3'?-1:1;
					event.num=num;
					if(player.storage.shiroha_jiezhao||!player.hasSkill('shiroha_guying')){
						if(num>0) player.chooseBool(get.prompt('shiroha_guying',trigger.player),'进行判定。若判定结果为黑色，则即将对其造成的伤害+1');
						else player.chooseBool(get.prompt('shiroha_guying'),'进行判定。若判定结果为红色，则即将受到的伤害-1');
					}
					else event._result={bool:true};
					'step 1'
					if(result.bool){
						player.addTempSkill('shiroha_guying_temp');
						player.judge(function(card){
							return (get.color(card)==(_status.event.getParent('shiroha_guying').num>0?'black':'red'))?2:0;
						}).judge2=function(result){
							return result.bool?true:false;
						};
					}
					else event.finish();
					'step 2'
					if(result.bool) trigger.num+=num;
				},
			},
			shiroha_guying_temp:{charlotte:true},
			shiroha_jiezhao:{
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('shiroha_yuzhao').length&&event.player.isIn();
				},
				content:function(){
					"step 0"
					var list=player.getExpansions('shiroha_yuzhao');
					player.chooseButton([get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+
						'，'+get.prompt('shiroha_jiezhao'),list,'hidden'],function(button){
						var card=button.link;
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						return result*attitude;
					}).set('judging',trigger.player.judging[0]).set('filterButton',function(button){
						var player=_status.event.player;
						var card=button.link;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					});
					"step 1"
					if(result.bool){
						event.forceDie=true;
						player.respond(result.links,'shiroha_jiezhao','highlight','noOrdering');
						result.cards=result.links;
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
					"step 3"
					if(!player.getExpansions('shiroha_yuzhao').length){
						player.storage.shiroha_jiezhao=true;
						player.gainMaxHp();
						player.recover();
						var list=['umi_chaofan','ao_xishi','tsumugi_mugyu','kamome_jieban'];
						var skill=list.randomGet();
						player.addSkillLog(skill);
						player.flashAvatar('shiroha_jiezhao','key_'+skill.split('_')[0]);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:0.6
					}
				},
				derivation:['umi_chaofan','ao_xishi','tsumugi_mugyu','kamome_jieban'],
			},
			jojiro_shensu:{
				group:['jojiro_shensu1','jojiro_shensu2','jojiro_shensu4'],
				charlotte:true,
			},
			jojiro_shensu1:{
				trigger:{player:'phaseJudgeBefore'},
				direct:true,
				content:function(){
					"step 0"
					var check= player.countCards('h')>2;
					player.chooseTarget(get.prompt("jojiro_shensu"),"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target,false);
					}).set('check',check).set('ai',function(target){
						if(!_status.event.check) return 0;
						return get.effect(target,{name:'sha'},_status.event.player);
					});
					"step 1"
					if(result.bool){
						player.logSkill('jojiro_shensu',result.targets);
						player.useCard({name:'sha',isCard:true},result.targets[0],false);
						trigger.cancel();
						player.skip('phaseDraw');
					}
				}
			},
			jojiro_shensu2:{
				trigger:{player:'phaseUseBefore'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})>0;
				},
				content:function(){
					"step 0"
					var check=player.needsToDiscard();
					player.chooseCardTarget({
						prompt:get.prompt('jojiro_shensu'),
						prompt2:"弃置一张装备牌并跳过出牌阶段，视为对一名其他角色使用一张【杀】",
						filterCard:function(card,player){
							return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
						},
						position:'he',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							return player.canUse({name:'sha'},target,false);
						},
						ai1:function(card){
							if(_status.event.check) return 0;
							return 6-get.value(card);
						},
						ai2:function(target){
							if(_status.event.check) return 0;
							return get.effect(target,{name:'sha'},_status.event.player);
						},
						check:check
					});
					"step 1"
					if(result.bool){
						player.logSkill('jojiro_shensu',result.targets);
						player.discard(result.cards[0]);
						player.useCard({name:'sha',isCard:true},result.targets[0]);
						trigger.cancel();
					}
				}
			},
			jojiro_shensu4:{
				trigger:{player:'phaseDiscardBefore'},
				direct:true,
				content:function(){
					"step 0"
					var check=player.needsToDiscard()||player.isTurnedOver()||(player.hasSkill('shebian')&&player.canMoveCard(true,true));
					player.chooseTarget(get.prompt('jojiro_shensu'),"跳过弃牌阶段并将武将牌翻面，视为对一名其他角色使用一张【杀】",function(card,player,target){
						if(player==target) return false;
						return player.canUse({name:'sha'},target,false);
					}).set('check',check).set('ai',function(target){
						if(!_status.event.check) return 0;
						return get.effect(target,{name:'sha'},_status.event.player,_status.event.player);
					});
					"step 1"
					if(result.bool){
						player.logSkill('jojiro_shensu',result.targets);
						player.turnOver();
						player.useCard({name:'sha',isCard:true},result.targets[0],false);
						trigger.cancel();
					}
				}
			},
			jojiro_shunying:{
				trigger:{player:'phaseEnd'},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return player.getHistory('skipped').length>0;
				},
				content:function(){
					'step 0'
					var num=player.getHistory('skipped').length;
					event.num=num;
					player.chooseToMoveChess(num,'瞬影：移动至多'+get.cnNumber(num)+'格或失去1点体力');
					'step 1'
					if(!result.bool) player.loseHp();
					else player.draw(num);
				},
			},
			kotori_yumo:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					var list=['wei','shu','wu','qun','jin'];
					for(var i of list){
						if(!player.hasMark('kotori_yumo_'+i)){
							player.addMark('kotori_yumo_'+i,1,false);
							game.log(player,'获得了一个',lib.translate['kotori_yumo_'+i].replace(/魔物/g,'【魔物】'));
						}
					}
				},
				group:['kotori_yumo_damage','kotori_yumo_gain'],
			},
			kotori_yumo_damage:{
				trigger:{global:'damageEnd'},
				forced:true,
				filter:function(event,player){
					var name='kotori_yumo_'+event.player.group;
					return lib.skill[name]&&!player.hasMark(name);
				},
				popup:false,
				content:function(){
					game.log(player,'对',trigger.player,'发动了','#g【驭魔】');
					var group=trigger.player.group;
					player.popup('驭魔',get.groupnature(group));
					player.addMark('kotori_yumo_'+group,1,false);
					game.log(player,'获得了一个',lib.translate['kotori_yumo_'+group].replace(/魔物/g,'【魔物】'));
				},
			},
			kotori_yumo_gain:{
				trigger:{player:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					var list=['wei','shu','wu','qun','key','jin'];
					for(var i in list){
						if(player.hasMark('kotori_yumo_'+list[i]))	return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var list=['wei','shu','wu','qun','key','jin'];
					var list2=[];
					for(var i of list){
						if(player.hasMark('kotori_yumo_'+i))	list2.push('kotori_skill_'+i);
					}
					list2.push('cancel2');
					player.chooseControl(list2).set('prompt','###是否发动【驭魔】？###弃置对应的标记并获得下列技能中的一个，或点取消，不获得技能').set('choice',function(){
						if(list2.includes('kotori_skill_shu')&&player.countCards('h',function(card){
							return get.name(card,player)=='sha'&&player.getUseValue(card)>0;
						})>1) return 'kotori_skill_shu';
						if(list2.includes('kotori_skill_key')&&player.hp>1) return 'kotori_skill_key';
						if(list2.includes('kotori_skill_qun')&&player.isDamaged()&&player.needsToDiscard()>1) return 'kotori_skill_qun';
						return 'cancel2';
					}()).set('ai',function(){
						return _status.event.choice;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('kotori_yumo');
						var name='kotori_yumo_'+result.control.slice(13);
						player.removeMark(name,1,false);game.log(player,'移去了一个',lib.translate[name].replace(/魔物/g,'【魔物】'));
						player.addTempSkill(result.control);
						game.log(player,'获得了技能',lib.translate[name].replace(/魔物/g,'【'+get.translation(result.control)+'】'));
					}
				},
			},
			kotori_skill_wei:{
				trigger:{player:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:get.prompt2(event.name),
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						position:'he',
						ai1:function(card){
							return 6-get.value(card);
						},
						ai2:function(target){
							return 1/(1+target.countCards('he'))*-get.attitude(_status.event.player,target);
						},
					});
					'step 1'
					if(result.bool){
						player.logSkill(event.name,result.targets);
						player.discard(result.cards);
						result.targets[0].chooseToDiscard('弃置一张牌，或令'+get.translation(player)+'摸一张牌','he').ai=lib.skill.zhiheng.check;
					}
					else event.finish();
					'step 2'
					if(!result.bool) player.draw();
				},
			},
			kotori_skill_shu:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
				},
				trigger:{player:'phaseUseEnd'},
				forced:true,
				filter:function(event,player){
					return player.getHistory('useCard',function(evt){
						return evt.card&&evt.card.name=='sha'&&evt.getParent('phaseUse')==event;
					}).length>1;
				},
				content:function(){player.draw()},
			},
			kotori_skill_wu:{
				trigger:{player:'phaseEnd'},
				forced:true,
				filter:function(event,player){
					return player.countCards('h')!=player.hp;
				},
				content:function(){player.draw()},
			},
			kotori_skill_qun:{
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				filter:function(event,player){
					return (player.getDamagedHp()>1||player.countCards('h')-player.getHp()>1);
				},
				content:function(){
					var num=0;
					if(player.getDamagedHp()>1) num++;
					if(player.countCards('h')-player.getHp()>1) num++;
					player.addMark('kotori_qunxin_temp',num,false);
					player.addTempSkill('kotori_qunxin_temp','phaseDiscardEnd');
				},
			},
			kotori_skill_key:{
				enable:'phaseUse',
				usable:1,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					player.changeHujia(1);
					"step 2"
					var evt=event.getParent('phase');
					if(evt&&evt.after){
						var next=player.loseHp();
						event.next.remove(next);
						evt.after.push(next);
					}
				},
				ai:{
					order:10,
					result:{
						player:function(player){
							return player.hp-1;
						},
					},
				},
			},
			kotori_skill_jin:{
				trigger:{player:'phaseDrawEnd'},
				filter:function(event,player){
					var hs=player.getCards('h');
					return hs.length>0&&player.getHistory('gain',function(evt){
						if(evt.getParent().name!='draw'||evt.getParent('phaseDraw')!=event) return false;
						for(var i of evt.cards){
							if(hs.includes(i)) return true;
						}
						return false;
					}).length>0;
				},
				check:function(event,player){
					var hs=player.getCards('h'),cards=[],suits=[];
					player.getHistory('gain',function(evt){
						if(evt.getParent().name!='draw'||evt.getParent('phaseDraw')!=event) return false;
						for(var i of evt.cards){
							if(hs.includes(i)){
								cards.add(i);
								suits.add(get.suit(i,player));
							}
						}
					});
					return cards.length==suits.length;
				},
				content:function(){
					var hs=player.getCards('h'),cards=[],suits=[];
					player.getHistory('gain',function(evt){
						if(evt.getParent().name!='draw'||evt.getParent('phaseDraw')!=trigger) return false;
						for(var i of evt.cards){
							if(hs.includes(i)){
								cards.add(i);
								suits.add(get.suit(i,player));
							}
						}
					});
					player.showCards(cards,get.translation(player)+'发动了【晋势】');
					if(cards.length==suits.length) player.draw();
				},
			},
			kotori_qunxin_temp:{
				onremove:true,
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('kotori_qunxin_temp');
					},
				},
			},
			kotori_yumo_wei:{
				marktext:'<span class="thundertext">魔</span>',
				intro:{name:'<span class="thundertext">魔物</span>',content:'mark'},
			},
			kotori_yumo_shu:{
				marktext:'<span class="firetext">魔</span>',
				intro:{name:'<span class="firetext">魔物</span>',content:'mark'},
			},
			kotori_yumo_wu:{
				marktext:'<span class="greentext">魔</span>',
				intro:{name:'<span class="greentext">魔物</span>',content:'mark'},
			},
			kotori_yumo_qun:{
				marktext:'<span class="yellowtext">魔</span>',
				intro:{name:'<span class="yellowtext">魔物</span>',content:'mark'},
			},
			kotori_yumo_key:{
				marktext:'<span class="legendtext">魔</span>',
				intro:{name:'<span class="legendtext">魔物</span>',content:'mark'},
			},
			kotori_yumo_jin:{
				marktext:'<span class="icetext">魔</span>',
				intro:{name:'<span class="icetext">魔物</span>',content:'mark'},
			},
			kotori_huazhan:{
				charlotte:true,
				enable:'chooseToUse',
				filter:function(event,player){
					var bool=false;
					var list=['wei','shu','wu','qun','key','jin'];
					for(var i of list){
						if(player.hasMark('kotori_yumo_'+i)&&!player.getStorage('kotori_huazhan2').includes('kotori_yumo_'+i)){
							bool=true;break;
						}
					}
					return	bool&&event.filterCard({name:'kaihua',isCard:true},player,event);
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('###花绽###'+lib.translate.kotori_huazhan_info);
					},
					chooseControl:function(event,player){
						var list=['wei','shu','wu','qun','key','jin'];
						var list2=[];
						for(var i of list){
							if(player.hasMark('kotori_yumo_'+i)&&!player.getStorage('kotori_huazhan2').includes('kotori_yumo_'+i))	list2.push('kotori_yumo_'+i);
						}
						list2.push('cancel2');
						return list2;
					},
					check:function(){
						var player=_status.event.player;
						var list=['wei','shu','wu','qun','key','jin'];
						var list2=[];
						for(var i of list){
							if(player.hasMark('kotori_yumo_'+i)&&!player.getStorage('kotori_huazhan2').includes('kotori_yumo_'+i))	list2.push('kotori_yumo_'+i);
						}
						if(list2.includes('kotori_yumo_wei')) return 'kotori_yumo_wei';
						if(list2.includes('kotori_yumo_wu')) return 'kotori_yumo_wu';
						if(list2.includes('kotori_yumo_qun')) return 'kotori_yumo_qun';
						if(list2.includes('kotori_yumo_key')) return 'kotori_yumo_key';
						if(list2.includes('kotori_yumo_shu')&&game.hasPlayer(function(current){
							return current.group=='shu';
						})) return 'kotori_yumo_shu';
						return 'cancel2';
					},
					backup:function(result,player){
						return {
							markname:result.control,
							viewAs:{name:'kaihua',isCard:true},
							filterCard:function(){return false},
							selectCard:-1,
							precontent:function(){
								delete event.result.skill;
								var name=lib.skill.kotori_huazhan_backup.markname;
								if(!player.storage.kotori_huazhan2) player.storage.kotori_huazhan2=[];
								player.storage.kotori_huazhan2.push(name);
								player.addTempSkill('kotori_huazhan2');
								player.popup('花绽',get.groupnature(name.slice(12)));
								game.log(player,'发动了技能',lib.translate[name].replace(/魔物/g,'【花绽】'));
								player.removeMark(name,1,false);
								game.log(player,'移去了一个',lib.translate[name].replace(/魔物/g,'【魔物】'));
							},
						}
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(player.countCards('he',function(card){
								if(get.type(card,player)=='equip') return get.value(card)<6;
								return get.value(card)<5;
							})<2) return 0;
							return player.getUseValue({name:'kaihua'});
						},
					},
				},
			},
			kotori_huazhan2:{onremove:true},
			ryoichi_baoyi:{
				trigger:{
					player:'loseAfter',
					global:['gainAfter','equipAfter','addJudgeAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filterTarget:function(card,player,target){
					return target!=player&&(target.hasSex('female')||target.countCards('hej')>0);
				},
				filter:function(event,player){
					var evt=event.getl(player);
					return evt&&evt.es&&evt.es.length>0&&game.hasPlayer(function(target){
						return lib.skill.ryoichi_baoyi.filterTarget;
					});
				},
				forced:true,
				content:function(){
					'step 0'
					event.count=trigger.getl(player).es.length;
					player.draw(event.count);
					'step 1'
					event.count--;
					if(game.hasPlayer(function(target){
						return lib.skill.ryoichi_baoyi.filterTarget(null,player,target);
					})){
						player.chooseTarget(true,lib.skill.ryoichi_baoyi.filterTarget,'请选择【爆衣】的目标').set('ai',function(target){
							return -get.attitude(_status.event.player,target);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						if(target.hasSex('female')) target.loseHp();
						else player.discardPlayerCard(target,2,'hej',true);
					}
					else event.finish();
					'step 3'
					if(event.count&&game.hasPlayer(function(target){
						return lib.skill.ryoichi_baoyi.filterTarget(null,player,target);
					})) event.goto(1);
				},
			},
			ryoichi_tuipi:{
				mod:{
					targetEnabled:function(card){
						if(card.name=='shunshou'||card.name=='guohe') return false;
					},
				},
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				content:function(){
					trigger.setContent(lib.skill.ryoichi_tuipi.phaseDiscardContent);
				},
				phaseDiscardContent:function(){
					"step 0"
					event.num=Math.max(0,player.countCards('he',card=>!player.canIgnoreHandcard(card))-player.getHandcardLimit());
					if(event.num<=0) event.finish();
					else{
						if(lib.config.show_phase_prompt){
							player.popup('弃牌阶段');
						}
					}
					event.trigger('phaseDiscard');
					"step 1"
					player.chooseToDiscard(num,true,'he');
					"step 2"
					event.cards=result.cards;
				},
			},
			yuu_lveduo:{
				mod:{
					cardEnabled:function(card,player){
						if(player.isTurnedOver()) return false;
					},
					cardRespondable:function(card,player){
						if(player.isTurnedOver()) return false;
					},
					cardSavable:function(card,player){
						if(player.isTurnedOver()) return false;
					},
				},
				trigger:{global:'phaseBeginStart'},
				filter:function(event,player){
					return player!=event.player&&!event.player._trueMe&&!player.getStorage('yuu_lveduo').includes(event.player)&&!player.isTurnedOver()&&!player.hasSkill('yuu_lveduo4');
				},
				charlotte:true,
				check:function(event,player){
					if(get.attitude(player,event.player)>0) return false;
					if(event.player.hasJudge('lebu')||!event.player.needsToDiscard()) return false;
					return true;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.turnOver();
					'step 1'
					if(player.isTurnedOver()){
						player.addTempSkill('yuu_lveduo4','roundStart')
						if(!player.storage.yuu_lveduo) player.storage.yuu_lveduo=[];
						player.storage.yuu_lveduo.push(trigger.player);
						trigger.player._trueMe=player;
						game.addGlobalSkill('autoswap');
						if(trigger.player==game.me){
							game.notMe=true;
							if(!_status.auto) ui.click.auto();
						}
						player.addSkill('yuu_lveduo2');
						trigger.player.addSkill('yuu_lveduo3');
					}
				},
			},
			yuu_lveduo2:{
				trigger:{
					player:'turnOverEnd',
				},
				lastDo:true,
				charlotte:true,
				forceDie:true,
				forced:true,
				silent:true,
				filter:function(event,player){
					return !player.isTurnedOver();
				},
				content:function(){
					var target=game.findPlayer(function(current){
						return current._trueMe==player;
					});
					if(target){
						if(target==game.me){
							if(!game.notMe) game.swapPlayerAuto(target._trueMe)
							else delete game.notMe;
							if(_status.auto) ui.click.auto();
						}
						delete target._trueMe;
						target.removeSkill('yuu_lveduo3');
						var skills=target.getStockSkills(true,true).filter(function(skill){
							var info=get.info(skill);
							return info&&info.charlotte==true;
						});
						if(skills.length){
							target.removeSkill(skills);
							player.addSkill(skills);
							lib.translate.yuu_lveduo_info=lib.translate.yuu_lveduo_full_info;
						}
						if(target.name=='key_yusa'){
							delete target.storage.dualside;
							target.storage.dualside_over=true;
							target.unmarkSkill('dualside');
							target.removeSkill('dualside');
						}
						else if(target.name=='key_misa'){
							delete target.storage.dualside;
							target.storage.dualside_over=true;
							target.unmarkSkill('dualside');
							target.reinit('key_misa','key_yusa');
							target.removeSkill('yusa_misa');
							target.removeSkill('dualside');
							target.turnOver(false);
						}
					}
					player.removeSkill('yuu_lveduo2');
				},
			},
			yuu_lveduo3:{
				trigger:{
					player:['phaseAfter','dieAfter'],
					global:'phaseBefore',
				},
				lastDo:true,
				charlotte:true,
				forceDie:true,
				forced:true,
				silent:true,
				content:function(){
					player.removeSkill('yuu_lveduo3');
				},
				onremove:function(player){
					if(player._trueMe&&player._trueMe.isTurnedOver()) player._trueMe.turnOver();
				},
			},
			yuu_lveduo4:{charlotte:true},
			godan_yuanyi:{
				trigger:{player:'phaseBegin'},
				forced:true,
				content:function(){
					'step 0'
					var num=game.roundNumber;
					if(num&&typeof num=='number') player.draw(Math.min(3,num));
					'step 1'
					trigger.phaseList.splice(trigger.num,0,'phaseUse|godan_yuanyi');
				},
			},
			godan_feiqu:{
				inherit:'doruji_feiqu',
			},
			godan_xiaoyuan:{
				trigger:{player:'changeHp'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'soil',
				filter:function(event,player){
					return event.num<0&&player.hp<4;
				},
				content:function(){
					player.awakenSkill('godan_xiaoyuan');
					player.loseMaxHp(3);
					player.draw(3);
					player.removeSkill('godan_feiqu');
				},
			},
			abyusa_jueqing:{
				audio:2,
				trigger:{source:'damageBegin2'},
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player!=event.player&&!player.storage.abyusa_jueqing_rewrite;
				},
				prompt2:function(event,player){
					var num=get.cnNumber(2*event.num,true);
					return '令即将对其造成的伤害翻倍至'+num+'点，并令自己失去'+get.cnNumber(event.num)+'点体力';
				},
				check:function(event,player){
					return player.hp>event.num&&event.player.hp>event.num&&!event.player.hasSkillTag('filterDamage',null,{
						player:player,
						card:event.card,
					})&&get.attitude(player,event.player)<0;
				},
				locked:function(skill,player){
					return player&&player.storage.abyusa_jueqing_rewrite;
				},
				logTarget:'player',
				content:function(){
					player.loseHp(trigger.num);
					trigger.num*=2;
					player.storage.abyusa_jueqing_rewrite=true;
				},
				derivation:'abyusa_jueqing_rewrite',
				group:'abyusa_jueqing_rewrite',
				subSkill:{
					rewrite:{
						audio:'abyusa_jueqing',
						trigger:{source:'damageBefore'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return player.storage.abyusa_jueqing_rewrite==true;
						},
						check:function(){return false;},
						content:function(){
							trigger.cancel();
							trigger.player.loseHp(trigger.num);
						},
						ai:{
							jueqing:true,
							skillTagFilter:function(player){
								return player.storage.abyusa_jueqing_rewrite==true;
							},
						}
					}
				},
			},
			akiko_dongcha:{
				trigger:{global:'phaseBefore'},
				forced:true,
				filter:function(event,player){
					return get.mode()=='identity'&&game.phaseNumber==0;
				},
				content:function(){
					var func=function(){
						game.countPlayer(function(current){
							current.setIdentity();
						});
					};
					if(player==game.me) func();
					else if(player.isOnline()) player.send(func);
					if(!player.storage.zhibi) player.storage.zhibi=[];
					player.storage.zhibi.addArray(game.players);
				},
				ai:{
					viewHandcard:true,
					skillTagFilter:function(player,tag,arg){
						if(player==arg) return false;
					},
				},
			},
			abyusa_dunying:{
				audio:2,
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				forced:true,
				filter:function(event,player){
					return player.isDamaged();
				},
				content:function(){
					player.draw(player.getDamagedHp());
				},
				mod:{
					globalTo:function(from,to,num){
						return num+to.getDamagedHp();
					},
				},
			},
			kaori_siyuan:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he',lib.skill.kaori_siyuan.filterCard);
				},
				filterCard:function(card){
					return ['equip','delay'].includes(get.type(card,false));
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var card=ui.selected.cards[0];
					if(get.type(card,false)=='delay') return target.canAddJudge({name:card.name});
					return target.canEquip(card);
				},
				discard:false,
				lose:false,
				prepare:'give',
				content:function(){
					'step 0'
					var card=cards[0];
					if(get.type(card,false)=='equip') target.equip(card);
					else target.addJudge(card);
					'step 1'
					var list=[];
					for(var i of lib.inpile){
						var type=get.type(i);
						if(type=='basic'||type=='trick') list.push([type,'',i]);
						if(i=='sha'){
							for(var j of lib.inpile_nature) list.push([type,'',i,j]);
						}
					}
					player.chooseButton(['是否视为使用一张基本牌或普通锦囊牌？',[list,'vcard']]).set('filterButton',function(button){
						return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
					}).set('ai',function(button){
						return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
					});
					'step 2'
					if(result.bool){
						player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3],isCard:true});
					}
				},
				ai:{
					basic:{
						order:10
					},
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(card) return get.effect(target,card,target,target);
							return 0;
						},
					},
				}
			},
			shiori_huijuan:{
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				locked:true,
				filter:function(event,player){
					return event.player!=player&&event.player.getHistory('useCard',function(evt){
						return evt.isPhaseUsing()&&['basic','trick'].includes(get.type(evt.card))&&player.hasUseTarget({
							name:evt.card.name,
							nature:evt.card.nature,
							isCard:true,
						});
					}).length>0;
				},
				content:function(){
					'step 0'
					var list=[];
					trigger.player.getHistory('useCard',function(evt){
						if(!evt.isPhaseUsing()||!['basic','trick'].includes(get.type(evt.card))) return;
						if(evt.card.name=='sha'&&evt.card.nature) list.add('sha:'+evt.card.nature);
						else list.add(evt.card.name);
					});
					for(var i=0;i<list.length;i++){
						if(list[i].indexOf('sha:')==0) list[i]=['基本','','sha',list[i].slice(4)];
						else list[i]=[get.type(list[i]),'',list[i]];
					}
					player.chooseButton([get.prompt('shiori_huijuan'),[list,'vcard']]).set('filterButton',function(button){
						return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
					}).set('ai',function(button){
						return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
					});
					'step 1'
					if(result.bool){
						player.logSkill('shiori_huijuan');
						player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3],isCard:true});
						player.getStat('skill').shiori_huijuan=1;
					}
				},
				group:'shiori_huijuan_discard',
			},
			shiori_huijuan_discard:{
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var num=0;
					var stat=player.stat;
					for(var i=stat.length-2;i--;i>=0){
						if(stat[i].isMe) break;
						if(stat[i].skill&&stat[i].skill.shiori_huijuan) num++;
					}
					return num>=Math.max(2,game.countPlayer()/2);
				},
				forced:true,
				content:function(){
					'step 0'
					if(!player.countDiscardableCards(player,'ej')) event._result={bool:false};
					else player.discardPlayerCard(player,'ej').set('ai',function(button){
						var card=button.link;
						var player=_status.event.player;
						if(get.position(card)=='j') return 7+Math.random();
						return 4+player.needsToDiscard()-get.value(card);
					});
					'step 1'
					if(!result.bool) player.skip('phaseUse');
				},
			},
			miki_shenqiang:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					player.equip(game.createCard2('miki_hydrogladiator','club',6));
					player.equip(game.createCard2('miki_binoculars','diamond',6));
				},
				mod:{
					canBeDiscarded:function(card){
						if(get.position(card)=='e'&&['equip1','equip5'].includes(get.subtype(card))) return false;
					},
				},
			},
			miki_huanmeng:{
				inherit:'kamome_huanmeng',
			},
			miki_zhiluo:{
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					return !event.player.countCards('e')&&player.inRange(event.player);
				},
				direct:true,
				locked:true,
				content:function(){
					'step 0'
					if(!player.canUse('sha',trigger.player,false)) event._result={index:0};
					else player.chooseControl().set('prompt','制裸：请选择一项').set('choiceList',[
						'摸一张牌',
						'视为对'+get.translation(trigger.player)+'使用一张【杀】',
					]).set('ai',function(){
						if(get.effect(_status.event.getTrigger().player,{name:'sha'},_status.event.player)>0) return 1;
						return 0;
					});
					'step 1'
					if(result.index==0){
						player.logSkill('miki_zhiluo');
						player.draw();
					}
					else player.useCard({name:'sha',isCard:true},trigger.player,'miki_zhiluo');
				},
			},
			miki_hydrogladiator_skill:{
				trigger:{
					source:'damageSource',
				},
				direct:true,
				locked:true,
				popup:'海德洛',
				filter:function(event,player){
					return event.getParent().name=='sha'&&game.hasPlayer(function(current){
						return (current==event.player||current!=player&&get.distance(current,event.player)<=1)&&current.countDiscardableCards(player,'he')>0;
					});
				},
				content:function(){
					'step 0'
					var list=[];
					var choiceList=[];
					if(trigger.player.countDiscardableCards(player,'he')>0){
						list.push(true);
						choiceList.push('弃置'+get.translation(trigger.player)+'的两张牌');
					}
					if(game.hasPlayer(function(current){
						return current!=player&&get.distance(current,trigger.player)<=1;
					})){
						list.push(false);
						choiceList.push('弃置所有至'+get.translation(trigger.player)+'距离为1的角色的各一张牌');
					}
					event.list=list;
					if(list.length==1) event._result={index:0};
					else{
						player.chooseControl().set('choiceList',choiceList).set('prompt','海德洛格拉迪尔特·改').set('ai',function(){
							var player=_status.event.player;
							var source=_status.event.getTrigger().player;
							var num=game.countPlayer(function(current){
								if(current!=player&&get.distance(current,source)<=1&&current.countDiscardableCards(player,'he')>0) return -get.sgn(get.attitude(player,current));
							});
							if(num>Math.min(2,source.countDiscardableCards(player,'he'))) return 1;
							return 0;
						});
					}
					'step 1'
					if(event.list[result.index]){
						player.logSkill(['miki_hydrogladiator_skill','海德洛'],trigger.player);
						player.discardPlayerCard(trigger.player,'he',2,true);
						event.finish();
					}
					else{
						event.targets=game.filterPlayer(function(current){
							return current!=player&&get.distance(current,trigger.player)<=1;
						}).sortBySeat();
						player.logSkill(['miki_hydrogladiator_skill','海德洛'],event.targets);
					}
					'step 2'
					var target=targets.shift();
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true);
					if(targets.length) event.redo();
				},
			},
			miki_binoculars:{
				locked:true,
				ai:{
					viewHandcard:true,
					skillTagFilter:function(player,tag,arg){
						if(player==arg) return false;
					},
				},
			},
			kud_qiaoshou:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.getExpansions('kud_qiaoshou_equip').length&&player.countCards('h')>0;
				},
				chooseButton:{
					dialog:function(){
						var list=[];
						var list2=['pyzhuren_heart','pyzhuren_diamond','pyzhuren_club','pyzhuren_spade','pyzhuren_shandian','rewrite_zhuge'];
						list2.addArray(lib.inpile);
						for(var i of list2){
							var sub=get.subtype(i);
							if(['equip1','equip4'].includes(sub)) list.push([sub,'',i]);
						}
						return ui.create.dialog('巧手：选择一种装备牌',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						var name=button.link[2];
						if(get.subtype(name)=='equip4'||player.getEquip(name)) return 0;
						var sha=player.countCards('h','sha');
						switch(name){
							case 'rewrite_zhuge':
								return sha-player.getCardUsable('sha');
							case 'guding':
								if(sha>0&&game.hasPlayer(function(current){
									return get.attitude(player,current)<0&&!current.countCards('h')&&player.canUse('sha',current)&&get.effect(current,{name:'sha'},player)>0;
								})) return 1.4+Math.random();
								return 0;
							case 'guanshi':
								if(sha>0) return 0.7+Math.random();
								return 0;
							case 'qinggang':
								if(sha>0) return 0.4+Math.random();
								return 0;
							case 'zhuque':
								if(game.hasPlayer(function(current){
									return get.attitude(player,current)<0&&current.getEquip('tengjia')&&get.effect(current,{name:'sha',nature:'fire'},player)>0;
								})) return 1.2+Math.random();
								return 0;
							default: return 0;
						}
					},
					backup:function(links){
						var next=get.copy(lib.skill.kud_qiaoshou_backupx);
						next.cardname=links[0][2];
						return next;
				},
					prompt:function(links){
						return '将一张手牌置于武将牌上，然后视为装备'+get.translation(links[0][2]);
					},
				},
				group:'kud_qiaoshou_end',
				ai:{
					notemp:true,
					order:5,
					result:{
						player:1,
					},
				},
			},
			kud_qiaoshou_backupx:{
				filterCard:true,
				discard:false,
				lose:false,
				delay:false,
				check:function(event,player){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					player.addToExpansion(cards,player,'give').gaintag.add('kud_qiaoshou_equip');
					'step 1'
					if(!player.getExpansions('kud_qiaoshou_equip').length) return;
					player.addTempSkill('kud_qiaoshou_equip',{player:['phaseUseEnd','phaseZhunbeiBegin']});
					var name=lib.skill.kud_qiaoshou_backup.cardname;
					player.storage.kud_qiaoshou_equip2=name;
					var info=lib.card[name].skills;
					if(info&&info.length) player.addAdditionalSkill('kud_qiaoshou_equip',info);
					player.draw();
					game.log(player,'声明了','#y'+get.translation(name));
				},
				ai:{
					result:{
						player:1,
					},
				},
			},
			kud_qiaoshou_equip:{
				charlotte:true,
				mod:{
					globalFrom:function(from,to,distance){
						var info=lib.card[from.storage.kud_qiaoshou_equip2];
						if(info&&info.distance&&info.distance.globalFrom) return distance+info.distance.globalFrom;
					},
					globalTo:function(from,to,distance){
						var info=lib.card[to.storage.kud_qiaoshou_equip2];
						if(info&&info.distance&&info.distance.globalTo) return distance+info.distance.globalTo;
					},
					attackRange:function(from,distance){
						var info=lib.card[from.storage.kud_qiaoshou_equip2];
						if(info&&info.distance&&info.distance.attackFrom) return distance-info.distance.attackFrom;
					},
					attackTo:function(from,to,distance){
						var info=lib.card[to.storage.kud_qiaoshou_equip2];
						if(info&&info.distance&&info.distance.attackTo) return distance+info.distance.attackTo;
					},
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					markcount:'expansion',
					mark:function(dialog,storage,player){
						dialog.add(player.getExpansions('kud_qiaoshou_equip'));
						dialog.addText('当前装备：'+get.translation(player.storage.kud_qiaoshou_equip2));
						var str2=lib.translate[player.storage.kud_qiaoshou_equip2+'_info'];
						if(str2){
							if(str2.length>=12) dialog.addText(str2,false);
							else dialog.addText(str2);
						}
					},
					onunmark:function(storage,player){
						player.removeAdditionalSkill('kud_qiaoshou_equip');
						delete player.storage.kud_qiaoshou_equip2;
						player.addEquipTrigger();
					},
				},
			},
			kud_qiaoshou_end:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&!player.getExpansions('kud_qiaoshou_equip').length;
				},
				content:function(){
					'step 0'
					var list=[];
					var list2=['rewrite_bagua','rewrite_renwang','rewrite_tengjia','rewrite_baiyin'];
					list2.addArray(lib.inpile);
					for(var i of list2){
						var sub=get.subtype(i);
						if(['equip2','equip3'].includes(sub)) list.push([sub,'',i]);
					}
					player.chooseButton([get.prompt('kud_qiaoshou'),[list,'vcard']]).set('ai',function(button){
						var player=_status.event.player;
						var name=button.link[2];
						if(get.subtype(name)=='equip3'||player.getEquip(name)) return false;
						switch(name){
							case 'yexingyi':
								if(player.hp>2||player.getEquip('bagua')||player.getEquip('tengjia')) return 1.5+Math.random();
								return 0.5+Math.random();
							case 'rewrite_bagua':case 'rewrite_renwang':
								if(player.getEquip('bagua')||player.getEquip('tengjia')||player.getEquip('renwang')) return Math.random();
								return 1.2+Math.random();
							case 'rewrite_tengjia':
								if(player.getEquip('baiyin')) return 1.3+Math.random();
								return Math.random();
							case 'rewrite_baiyin':
								return 0.4+Math.random();
							default: return 0;
						}
					});
					'step 1'
					if(result.bool){
						player.logSkill('kud_qiaoshou');
						event.cardname=result.links[0][2];
						player.chooseCard('h',true,'将一张手牌置于武将牌上，然后视为装备'+get.translation(event.cardname));
					}
					else event.finish();
					'step 2'
					var cards=result.cards;
					player.addToExpansion(cards,player,'give').gaintag.add('kud_qiaoshou_equip');
					'step 3'
					if(!player.getExpansions('kud_qiaoshou_equip').length) return;
					player.addTempSkill('kud_qiaoshou_equip',{player:['phaseUseEnd','phaseZhunbeiBegin']});
					var name=event.cardname;
					player.storage.kud_qiaoshou_equip2=name;
					player.markAuto('kud_qiaoshou_equip',cards);
					var info=lib.card[name].skills;
					if(info&&info.length) player.addAdditionalSkill('kud_qiaoshou_equip',info);
					player.draw();
					game.log(player,'声明了','#y'+get.translation(name));
				},
			},
			kud_buhui:{
				enable:'chooseToUse',
				filter:function(event,player){
					return event.type=='dying'&&player==event.dying&&(player.getExpansions('kud_qiaoshou_equip').length+player.countCards('e'))>0;
				},
				skillAnimation:true,
				limited:true,
				animationColor:'gray',
				content:function(){
					'step 0'
					player.awakenSkill('kud_buhui');
					var cards=player.getCards('e').concat(player.getExpansions('kud_qiaoshou_equip'));
					if(cards.length) player.discard(cards);
					player.removeSkill('kud_qiaoshou_equip');
					player.draw(cards.length);
					player.addSkill('kud_chongzhen');
					'step 1'
					var num=2-player.hp;
					if(num) player.recover(num);
				},
				derivation:'riki_chongzhen',
				ai:{
					order:0.5,
					result:{
						player:1,
					},
					save:true,
					skillTagFilter:function(player,tag,target){
						return player==target;
					},
				},
			},
			kud_chongzhen:{
				inherit:'riki_chongzhen',
			},
			misuzu_hengzhou:{
				trigger:{player:['phaseJieshuBegin','recoverEnd','damageEnd','phaseDrawBegin2','phaseZhunbeiBegin']},
				forced:true,
				character:true,
				filter:function(event,player){
					if(event.name=='phaseZhunbei') return true;
					if(['damage','recover'].includes(event.name)) return event.num>0;
					var num=player.countMark('misuzu_hengzhou');
					if(event.name=='phaseDraw') return num>0&&!event.numFixed;
					return num>3;
				},
				content:function(){
					var num=player.countMark('misuzu_hengzhou');
					if(trigger.name=='phaseDraw') trigger.num+=num;
					else if(trigger.name=='phaseJieshu'){
						player.removeMark('misuzu_hengzhou',num);
						player.loseHp();
					}
					else player.addMark('misuzu_hengzhou',trigger.num||1);
				},
				intro:{
					name:'诅咒',
					name2:'诅咒',
					content:'mark',
				},
				marktext:'诅',
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('misuzu_hengzhou');
					},
				},
				ai:{
					notemp:true,
				},
			},
			misuzu_nongyin:{
				enable:'chooseToUse',
				viewAs:{
					name:'tao',
					isCard:true,
				},
				viewAsFilter:function(player){
					return !player.hasJudge('lebu')&&player.countCards('hes',function(card){
						return get.color(card)=='red'&&get.type(card,'trick')!='trick';
					});
				},
				filterCard:function(card){
					return get.color(card)=='red'&&get.type(card,'trick')!='trick';
				},
				check:function(card){
					return 7+(_status.event.dying||_status.event.player).getDamagedHp()-get.value(card);
				},
				ignoreMod:true,
				position:'hes',
				precontent:function(){
					player.logSkill('misuzu_nongyin');
					player.$throw(event.result.cards);
					player.addJudge({name:'lebu'},event.result.cards);
					event.result.card.cards=[];
					event.result.cards=[];
					delete event.result.skill;
					delete event.result.card.suit;
					delete event.result.card.number;
				},
				ai:{
					result:0.5,
				},
			},
			misuzu_zhongxing:{
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function(event,player){
					var evt=event.getl(player);
					return evt&&evt.js&&evt.js.length>0&&!player.hasSkill('misuzu_zhongxing_haruko');
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('misuzu_zhongxing'),'令一名角色选择摸两张牌或回复1点体力').set('ai',function(card){
						return get.attitude(_status.event.player,card);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('misuzu_zhongxing',target);
						player.addTempSkill('misuzu_zhongxing_haruko');
						target.chooseDrawRecover(2,true);
					}
				},
			},
			misuzu_zhongxing_haruko:{charlotte:true},
			kamome_suitcase:{
				trigger:{player:['phaseJudgeBefore','phaseDiscardBefore','turnOverBefore']},
				forced:true,
				popup:false,
				equipSkill:true,
				content:function(){
					trigger.cancel();
				},
			},
			kamome_yangfan:{
				trigger:{
					player:['loseAfter','enterGame'],
					global:['equipAfter','addJudgeAfter','phaseBefore','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				forced:true,
				filter:function(event,player){
					if(typeof event.getl!='function') return (event.name!='phase'||game.phaseNumber==0);
					var evt=event.getl(player);
					return evt&&evt.player==player&&evt.es&&evt.es.length;
				},
				content:function(){
					if(trigger.getl) player.draw(2*trigger.getl(player).es.length);
					else player.equip(game.createCard2('kamome_suitcase','spade',1));
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					}
				}
			},
			kamome_huanmeng:{
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					"step 0"
					var num=1+player.countCards('e');
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','幻梦：点击将牌移动到牌堆顶或牌堆底');
					next.processAI=function(list){
						var cards=list[0][1],player=_status.event.player;
						var top=[];
						var judges=player.getCards('j');
						var stopped=false;
						if(!player.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return judge(b)-judge(a);
								});
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return get.value(b,player)-get.value(a,player);
							});
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						return [top,bottom];
					}
					"step 1"
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
				},
				ai:{
					threaten:1.2
				}
			},
			kamome_jieban:{
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				direct:true,
				zhuanhuanji:true,
				marktext:'☯',
				mark:true,
				intro:{
					content:function(storage,player){
						return '转换技。每回合限一次，当你受到或造成伤害后，'+(!storage?'你可将两张牌交给一名其他角色，然后其交给你一张牌。':'你可将一张牌交给一名其他角色，然后其交给你两张牌。');
					},
				},
				filter:function(event,player){
					var num=player.storage.kamome_jieban?1:2;
					return player.countCards('he')>=num&&!player.hasSkill('kamome_jieban_phase');
				},
				content:function(){
					'step 0'
					event.num=player.storage.kamome_jieban?1:2;
					player.chooseCardTarget({
						position:'he',
						filterCard:true,
						filterTarget:lib.filter.notMe,
						selectCard:event.num,
						prompt:get.prompt('kamome_jieban'),
						prompt2:event.num==2?'将两张牌交给一名其他角色，然后其交给你一张牌。':'将一张牌交给一名其他角色，然后其交给你两张牌。',
						ai1:function(card){
							if(card.name=='du') return 20;
							var val=get.value(card);
							var player=_status.event.player;
							if(get.position(card)=='e'){
								if(val<=0) return 10;
								return 10/val;
							}
							return 6-val;
						},
						ai2:function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(ui.selected.cards[0].name=='du') return -2*att;
							if(att>0) return 1.5*att;
							var num=get.select(_status.event.selectCard)[1];
							if(att<0&&num==1) return -0.7*att;
							return att;
						},
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('kamome_jieban',target);
						player.addTempSkill('kamome_jieban_phase');
						player.give(result.cards,target);
						player.changeZhuanhuanji('kamome_jieban');
					}
					else event.finish();
					'step 2'
					var num=3-event.num;
					var hs=target.getCards('he');
					if(hs.length){
						if(hs.length<=num) event._result={bool:true,cards:hs};
						else{
							target.chooseCard('he',true,'交给'+get.translation(player)+get.cnNumber(num)+'张牌',num).set('ai',function(card){
								var player=_status.event.player;
								var target=_status.event.getParent().player;
								if(get.attitude(player,target)>0){
									if(!target.hasShan()&&card.name=='shan') return 10;
									if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')&&target.hasUseTarget(card)) return 10-get.value(card);
									return 6-get.value(card);
								}
								return -get.value(card);
							});
						}
					}
					else event.finish();
					'step 3'
					target.give(result.cards,player);
				},
			},
			kamome_jieban_phase:{charlotte:true},
			nao_duyin:{
				trigger:{global:'phaseBegin'},
				filter:function(event,player){
					return event.player!=player&&(!player.storage.nao_duyin||!player.storage.nao_duyin.includes(event.player));
				},
				logTarget:'player',
				charlotte:true,
				check:function(){
					return false;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he','弃置一张牌，或将武将牌翻面').set('ai',function(card){
						if(_status.event.player.isTurnedOver()) return 0;
						return 6-get.value(card);
					});
					'step 1'
					if(!result.bool) player.turnOver();
					player.addTempSkill('nao_duyin2',{player:'phaseAfter'});
					if(!player.storage.nao_duyin) player.storage.nao_duyin=[];
					player.storage.nao_duyin.push(trigger.player);
					if(!player.storage.nao_duyin2) player.storage.nao_duyin2=[];
					player.storage.nao_duyin2.push(trigger.player);
					player.markSkill('nao_duyin2');
				},
			},
			nao_duyin2:{
				intro:{
					content:'$不能使用牌指定你为目标，对$使用牌没有距离和次数限制',
				},
				mod:{
					targetEnabled:function(card,player,target){
						if(target.storage.nao_duyin2&&target.storage.nao_duyin2.includes(player)) return false;
					},
					targetInRange:function(card,player,target){
						if(player.storage.nao_duyin2&&player.storage.nao_duyin2.includes(target)) return true;
					},
				},
				trigger:{player:'useCardEnd'},
				firstDo:true,
				silent:true,
				onremove:true,
				filter:function(event,player){
					if(player.storage.nao_duyin2){
						for(var i of player.storage.nao_duyin2){
							if(event.targets.includes(i)) return true;
						}
					}
					return false;
				},
				content:function(){
					if(trigger.addCount!==false){
						trigger.addCount=false;
						var stat=player.getStat();
						if(stat&&stat.card&&stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
					}
				},
			},
			nao_wanxin:{
				trigger:{global:'phaseEnd'},
				hasHistory:function(player){
					return player.getHistory('damage').length>0;
				},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return lib.skill.nao_wanxin.hasHistory(current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nao_wanxin'),function(card,player,target){
						return _status.event.yuus.includes(target);
					}).set('yuus',game.filterPlayer(function(current){
						return lib.skill.nao_wanxin.hasHistory(current);
					})).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('nao_wanxin',target);
						target.draw(2);
					}
					else event.finish();
					'step 2'
					player.turnOver(false);
					'step 3'
					player.link(false);
					if(target==player) event.finish();
					'step 4'
					target.turnOver(false);
					'step 5'
					target.link(false);
				},
			},
			nao_shouqing:{
				global:'nao_shouqing2',
			},
			nao_shouqing2:{
				enable:'phaseUse',
				viewAs:function(){
					return {name:'tao'}
				},
				filterCard:{name:'tao'},
				ignoreMod:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.isDamaged()&&target.hasSkill('nao_shouqing');
				},
				selectTarget:function(){
					return game.countPlayer(function(current){
						return lib.skill.nao_shouqing2.filterTarget(null,_status.event.player,current);
					})>1?1:-1;
				},
				filter:function(event,player){
					return player.countCards('hs','tao')&&game.hasPlayer(function(current){
						return lib.skill.nao_shouqing2.filterTarget(null,player,current)
					});
				},
				position:'hs',
				onuse:function(links,player){
					player.addSkill('nao_shouqing3');
					player.addMark('nao_shouqing3',1,false);
				},
				prompt:function(){
					var list=game.filterPlayer(function(current){
						return lib.skill.nao_shouqing2.filterTarget(null,_status.event.player,current);
					});
					var str='对'+get.translation(list);
					if(list.length>1) str+='中的一名角色';
					str+='使用一张【桃】';
					return str;
				},
			},
			nao_shouqing3:{
				intro:{
					content:'手牌上限+#',
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('nao_shouqing3');
					},
				},
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.skill=='nao_shouqing2';
				},
				content:function(){
					player.draw();
				},
			},
			shiorimiyuki_banyin:{
				audio:2,
				trigger:{player:['damageEnd','recoverEnd']},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.isDamaged();
					})
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('shiorimiyuki_banyin'),'令一名其他角色回复1点体力',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						return get.recoverEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('shiorimiyuki_banyin',target);
						target.recover();
					}
				},
			},
			shiorimiyuki_tingxian:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseControl('一张','两张','三张','cancel2').set('prompt',get.prompt2('shiorimiyuki_tingxian')).set('ai',function(){
						var player=_status.event.player;
						var max=Math.min(player.hp+1,player.maxHp)
						var min=Math.min(Math.max(max-2,max-player.hp),3);
						if(min) return min-1;
						return 3;
					});
					'step 1'
					if(result.control=='cancel2') return;
					player.logSkill('shiorimiyuki_tingxian1');
					var num=1+result.index;
					player.draw(num).gaintag=['shiorimiyuki_tingxian'];
					player.recover();
					player.addTempSkill('shiorimiyuki_tingxian2');
				},
				group:'shiorimiyuki_tingxian1',
			},
			shiorimiyuki_tingxian1:{audio:true},
			shiorimiyuki_tingxian2:{
				audio:true,
				trigger:{player:'phaseUseEnd'},
				forced:true,
				charlotte:true,
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('shiorimiyuki_tingxian')) return num+2;
					},
					aiValue:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('shiorimiyuki_tingxian')) return 0;
					},
				},
				filter:function(event,player){
					return player.countCards('h',function(card){
						return card.hasGaintag('shiorimiyuki_tingxian');
					})>0;
				},
				content:function(){
					player.loseHp(player.countCards('h',function(card){
						return card.hasGaintag('shiorimiyuki_tingxian');
					}));
					player.removeGaintag('shiorimiyuki_tingxian');
				},
			},
			shizuru_nianli:{
				enable:'chooseToUse',
				charlotte:true,
				prompt:'展示一张♦/♣/♥/♠手牌，然后视为使用一张雷杀/闪/桃/无懈可击',
				viewAs:function(cards,player){
					var name=false;
					var nature=null;
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='thunder';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					if(name) return {name:name,nature:nature,isCard:true};
					return null;
				},
				check:function(card){
					var player=_status.event.player;
					if(_status.event.type=='phase'){
						var max=0;
						var name2;
						var list=['sha','tao'];
						var map={sha:'diamond',tao:'heart'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
							if(player.countCards('h',function(card){
								return get.suit(card,player)==map[name];
							})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
								var temp=get.order({name:name,nature:name=='sha'?'fire':null});
								if(temp>max){
									max=temp;
									name2=map[name];
								}
							}
						}
						if(name2==get.suit(card,player)) return 1;
						return 0;
					}
					return 1;
				},
				ignoreMod:true,
				filterCard:function(card,player,event){
					event=event||_status.event;
					var filter=event._backup.filterCard;
					var name=get.suit(card,player);
					if(name=='club'&&filter({name:'shan'},player,event)) return true;
					if(name=='diamond'&&filter({name:'sha',nature:'thunder'},player,event)) return true;
					if(name=='spade'&&filter({name:'wuxie'},player,event)) return true;
					if(name=='heart'&&filter({name:'tao'},player,event)) return true;
					return false;
				},
				filter:function(event,player){
					if(player.hasSkill('shizuru_nianli_round')) return false;
					var filter=event.filterCard;
					if(filter({name:'sha',nature:'thunder'},player,event)&&player.countCards('h',{suit:'diamond'})) return true;
					if(filter({name:'shan'},player,event)&&player.countCards('h',{suit:'club'})) return true;
					if(filter({name:'tao'},player,event)&&player.countCards('h',{suit:'heart'})) return true;
					if(filter({name:'wuxie'},player,event)&&player.countCards('h',{suit:'spade'})) return true;
					return false;
				},
				precontent:function(){
					player.logSkill('shizuru_nianli');
					player.addTempSkill('shizuru_nianli_round','roundStart');
					player.showCards(get.translation(player)+'发动了【念力】',event.result.cards.slice(0));
					event.result.card.cards=[];
					event.result.cards=[];
					delete event.result.skill;
					delete event.result.card.suit;
					delete event.result.card.number;
					event.getParent().addCount=false;
					event.getParent().shizuru_nianli=true;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						if(player.hasSkill('shizuru_nianli_round')) return false;
						var name;
						switch(tag){
							case 'respondSha':name='diamond';break;
							case 'respondShan':name='club';break;
							case 'save':name='heart';break;
						}
						if(!player.countCards('h',{suit:name})) return false;
					},
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							var list=['sha','tao'];
							var map={sha:'diamond',tao:'heart'}
							for(var i=0;i<list.length;i++){
								var name=list[i];
								if(player.countCards('h',function(card){
									return get.suit(card,player)==map[name];
								})>0&&player.getUseValue({name:name,nature:name=='sha'?'thunder':null})>0){
									var temp=get.order({name:name,nature:name=='sha'?'thunder':null});
									if(temp>max) max=temp;
								}
							}
							max/=1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard:function(player,name){
					if(name=='wuxie') return player.countCards('h',function(card){
						return _status.connectMode||get.suit(card)=='spade';
					})>0&&!player.hasSkill('shizuru_nianli_round');
					if(name=='tao') return player.countCards('h',{suit:'heart'})>0&&!player.hasSkill('shizuru_nianli_round');
					return false;
				},
				group:'shizuru_nianli_clear',
				subSkill:{
					round:{
						mark:true,
						intro:{content:'本轮已发动'},
					},
					clear:{
						trigger:{player:'useCardAfter'},
						lastDo:true,
						silent:true,
						filter:function(event,player){
							return event.getParent().shizuru_nianli==true;
						},
						content:function(){
							player.getHistory('useCard').remove(trigger);
						},
					},
				},
			},
			shizuru_benzhan:{
				trigger:{global:['useCard','respond']},
				usable:1,
				direct:true,
				filter:function(event,player){
					return Array.isArray(event.respondTo)&&event.respondTo[0]!=event.player&&[event.respondTo[0],event.player].includes(player);
				},
				content:function(){
					'step 0'
					event.type=get.type(trigger.card)=='basic';
					var prompt=event.type?'令一名角色摸两张牌或弃置两张牌':'令一名角色回复1点体力或对其造成1点伤害';
					player.chooseTarget(get.prompt('shizuru_benzhan'),prompt).set('ai',function(target){
						var player=_status.event.player;
						if(_status.event.getParent().type){
							var att=get.attitude(player,target);
							if(target.hasSkillTag('nogain')) return -att;
							if(target.countCards('he')==1&&att<0) att/=2;
							return Math.abs(att)*(1+0.1*(Math.min(0,5-target.countCards('h'))))
						}
						return Math.max(get.recoverEffect(target,player,player),get.damageEffect(target,player,player))
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('shizuru_benzhan',target,'thunder');
						var trans=get.translation(target);
						var list;
						if(event.type){
							if(!target.countCards('he')) event._result={index:0};
							else list=['令'+trans+'摸两张牌','令'+trans+'弃置两张牌'];
						}
						else{
							if(target.isHealthy()) event._result={index:1};
							else list=['令'+trans+'回复1点体力','对'+trans+'造成1点伤害'];
						}
						player.chooseControl().set('choiceList',list).set('choice',function(){
							if(event.type) return (get.attitude(player,target)>0)?0:1;
							return (get.recoverEffect(target,player,player)>get.damageEffect(target,player,player))?0:1;
						}()).set('ai',function(){
							return _status.event.choice;
						});
					}
					else{
						player.storage.counttrigger[event.name]--;
						event.finish();
					}
					'step 2'
					player.addExpose(0.2);
					if(event.type){
						if(result.index==0) target.draw(2);
						else target.chooseToDiscard(2,'he',true);
					}
					else{
						if(result.index==0) target.recover();
						else target.damage();
					}
				},
			},
			kyoko_juwu:{
				trigger:{global:['loseAfter','cardsDiscardAfter','loseAsyncAfter','equipAfter']},
				direct:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					var cards=event.getd();
					if(!cards.length) return false;
					cards.removeArray(event.getd(player));
					for(var card of cards){
						if(get.position(card,true)=='d'&&get.type(card,null,false)=='equip') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					if(trigger.delay==false) game.delay();
					'step 1'
					var cards=trigger.getd();
					cards.removeArray(trigger.getd(player));
					cards=cards.filter(function(card){
						if(get.position(card,true)=='d'&&get.type(card,null,false)=='equip') return true;
					});
					player.chooseButton([get.prompt('kyoko_juwu'),cards],[1,cards.length]).set('ai',function(){return 1});
					'step 2'
					if(result.bool){
						player.gain(result.links,'gain2','log');
						player.logSkill('kyoko_juwu');
					}
				},
			},
			kyoko_zhengyi:{
				group:['kyoko_jingce','kyoko_shelie','kyoko_zhiheng'],
				count:function(player){
					var list=[];
					player.countCards('e',function(card){
						list.add(get.suit(card,player));
					});
					return list.length;
				},
			},
			kyoko_jingce:{
				trigger:{player:['phaseUseEnd','phaseJieshuBegin']},
				filter:function(event,player){
					var num=lib.skill.kyoko_zhengyi.count(player);
					if(!num||(event.name=='phaseUse')==(num>3)) return false;
					return player.getHistory('useCard',function(evt){
						return event.name!='phaseUse'||evt.getParent('phaseUse')==event;
					}).length>=player.hp;
				},
				frequent:true,
				content:function(){
					'step 0'
					if(trigger.name=='phaseUse'){
						player.draw(2);
						event.finish();
						return;
					}
					var list=[],history=player.getHistory('useCard');
					for(var i of history){
						list.add(get.suit(i.card));
						if(list.length>=player.hp) break;
					}
					if(list.length>=player.hp) event.goon=true;
					else player.chooseControl('摸牌阶段','出牌阶段').set('prompt','精策：选择要执行的额外阶段');
					'step 1'
					if(event.goon||result.index==0){
						var next=player.phaseDraw();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
					if(event.goon||result.index==1){
						var next=player.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					}
				},
			},
			kyoko_shelie:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed&&lib.skill.kyoko_zhengyi.count(player)>1;
				},
				content:function(){
					"step 0"
					trigger.changeToZero();
					event.cards=get.cards(5);
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='涉猎：获取花色各不相同的牌';
						}
						else{
							str='涉猎';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['涉猎',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([0,5],true);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
						}
						return true;
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					"step 2"
					if(result.bool&&result.links){
						event.cards2=result.links;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log','gain2');
				},
			},
			kyoko_zhiheng:{
				enable:'phaseUse',
				usable:1,
				position:'he',
				filter:function(event,player){
					return lib.skill.kyoko_zhengyi.count(player)>2;
				},
				prompt:function(){
					var str='弃置任意张牌并摸等量的牌';
					if(lib.skill.kyoko_zhengyi.count(_status.event.player)>3) str+='，若弃置了所有手牌则多摸一张牌。';
					return str;
				},
				filterCard:lib.filter.cardDiscardable,
				discard:false,
				lose:false,
				delay:false,
				selectCard:[1,Infinity],
				check:function(card){
					var player=_status.event.player;
					if(get.position(card)=='h'){
						return 8-get.value(card);
					}
					return 6-get.value(card)
				},
				content:function(){
					'step 0'
					player.discard(cards);
					event.num=1;
					var hs=player.getCards('h');
					if(!hs.length||lib.skill.kyoko_zhengyi.count(player)<4) event.num=0;
					else for(var i=0;i<hs.length;i++){
						if(!cards.includes(hs[i])){
							event.num=0;break;
						}
					}
					'step 1'
					player.draw(event.num+cards.length);
				},
				ai:{
					order:1,
					result:{
						player:1
					},
				},
			},
			yuzuru_bujin:{
				global:'yuzuru_bujin2',
				trigger:{global:'phaseDrawBegin'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					return event.player!=player&&event.player.isFriendOf(player);
				},
				content:function(){trigger.num++},
			},
			yuzuru_bujin2:{
				mod:{
					globalFrom:function(from,to,num){
						return num-game.countPlayer(function(current){
							return current!=from&&current.hasSkill('yuzuru_bujin')&&current.isFriendOf(from);
						});
					},
				},
			},
			mio_tuifu:{
				trigger:{global:'damageBegin1'},
				forced:true,
				filter:function(event,player){
					return event.source&&event.source.sameSexAs(event.player)
				},
				content:function(){
					player.draw();
				},
			},
			mio_tishen:{
				trigger:{player:'phaseZhunbeiBegin'},
				limited:true,
				unique:true,
				charlotte:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player.isDamaged();
				},
				check:function(event,player){
					return player.hp<=1||player.getDamagedHp()>1;
				},
				content:function(){
					player.awakenSkill(event.name);
					var num=player.maxHp-player.hp;
					player.recover(num);
					player.draw(num);
					if(_status.characterlist&&_status.characterlist.includes('key_midori')){
						player.reinit('key_mio','key_midori',false);
						_status.characterlist.remove('key_midori');
						_status.characterlist.add('key_mio');
					}
				},
			},
			midori_nonghuan:{
				enable:'phaseUse',
				charlotte:true,
				filter:function(event,player){
					return (player.getStat('skill').midori_nonghuan||0)<player.hp;
				},
				filterTarget:function(card,player,target){
					var stat=player.getStat('midori_nonghuan');
					return target!=player&&(!stat||!stat.includes(target))&&target.countGainableCards(player,'hej')>0;
				},
				content:function(){
					'step 0'
					var stat=player.getStat();
					if(!stat.midori_nonghuan) stat.midori_nonghuan=[];
					stat.midori_nonghuan.push(target);
					player.gainPlayerCard(target,'hej',true);
					player.draw();
					'step 1'
					if(player.countCards('he')>0) player.chooseCard('he',true,'交给'+get.translation(target)+'一张牌');
					else event.goto(3);
					'step 2'
					player.give(result.cards,target);
					'step 3'
					var history=game.getGlobalHistory('cardMove');
					for(var i=0;i<history.length;i++){
						if(history[i].getParent('midori_nonghuan')==event) history.splice(i--,1);
					}
					game.countPlayer2(function(current){
						var history=current.getHistory('lose');
						for(var i=0;i<history.length;i++){
							if(history[i].getParent('midori_nonghuan')==event) history.splice(i--,1);
						}
						var history=current.getHistory('gain');
						for(var i=0;i<history.length;i++){
							if(history[i].getParent('midori_nonghuan')==event) history.splice(i--,1);
						}
					});
				},
				ai:{
					order:9,
					result:{
						player:function(){
							return lib.card.shunshou.ai.result.player.apply(this,arguments);
						},
						target:function(){
							return lib.card.shunshou.ai.result.target.apply(this,arguments);
						},
					},
				},
			},
			midori_tishen:{
				trigger:{player:'phaseZhunbeiBegin'},
				limited:true,
				charlotte:true,
				unique:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return player.isDamaged();
				},
				check:function(event,player){
					return player.hp<=1||player.getDamagedHp()>1;
				},
				content:function(){
					player.awakenSkill(event.name);
					var num=player.maxHp-player.hp;
					player.recover(num);
					player.draw(num);
					if(_status.characterlist&&_status.characterlist.includes('key_mio')){
						player.reinit('key_midori','key_mio',false);
						_status.characterlist.remove('key_mio');
						_status.characterlist.add('key_midori');
					}
				},
			},
			kanade_mapo:{
				audio:2,
				derivation:'mapodoufu',
				enable:'chooseToUse',
				viewAs:{name:'mapodoufu'},
				filterCard:{suit:'heart'},
				viewAsFilter:function(player){
					return player.countCards('hes',{suit:'heart'})>0;
				},
				position:'hes',
				mod:{
					selectTarget:function(card,player,range){
						if(card.name=='mapodoufu'&&range[1]!=-1) range[1]++;
					},
				},
				check:function(card){
					var player=_status.event.player;
					if(game.countPlayer(function(current){
						return player.canUse('mapodoufu',current)&&get.effect(current,{name:'mapodoufu'},player,player)>0;
					})>1) return 6-get.value(card);
					return 4-get.value(card);
				},
			},
			kanade_benzhan:{
				audio:3,
				trigger:{global:['useCard','respond']},
				direct:true,
				usable:1,
				filter:function(event,player){
					return Array.isArray(event.respondTo)&&event.respondTo[0]!=event.player&&[event.respondTo[0],event.player].includes(player);
				},
				content:function(){
					'step 0'
					event.type=get.type(trigger.card)=='basic';
					var prompt=event.type?'令一名角色摸两张牌或弃置两张牌':'令一名角色回复1点体力或对其造成1点伤害';
					player.chooseTarget(get.prompt('kanade_benzhan'),prompt).set('ai',function(target){
						var player=_status.event.player;
						if(_status.event.getParent().type){
							var att=get.attitude(player,target);
							if(target.hasSkillTag('nogain')) return -att;
							if(target.countCards('he')==1&&att<0) att/=2;
							return Math.abs(att)*(1+0.1*(Math.min(0,5-target.countCards('h'))))
						}
						return Math.max(get.recoverEffect(target,player,player),get.damageEffect(target,player,player))
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('kanade_benzhan',target,'thunder');
						var trans=get.translation(target);
						var list;
						if(event.type){
							if(!target.countCards('he')) event._result={index:0};
							else list=['令'+trans+'摸两张牌','令'+trans+'弃置两张牌'];
						}
						else{
							if(target.isHealthy()) event._result={index:1};
							else list=['令'+trans+'回复1点体力','对'+trans+'造成1点伤害'];
						}
						player.chooseControl().set('choiceList',list).set('choice',function(){
							if(event.type) return (get.attitude(player,target)>0)?0:1;
							return (get.recoverEffect(target,player,player)>get.damageEffect(target,player,player))?0:1;
						}()).set('ai',function(){
							return _status.event.choice;
						});
					}
					else{
						player.storage.counttrigger[event.name]--;
						event.finish();
					}
					'step 2'
					player.addExpose(0.2);
					if(event.type){
						if(result.index==0) target.draw(2);
						else target.chooseToDiscard(2,'he',true);
					}
					else{
						if(result.index==0) target.recover();
						else target.damage();
					}
				},
			},
			yuzuru_wuxin:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCardTarget({
						filterTarget:function(){
							if(ui.selected.cards.length) return false;
							return true;
						},
						filterCard:function(){
							if(ui.selected.targets.length) return false;
							return lib.filter.cardDiscardable.apply(this,arguments);
						},
						selectTarget:function(){
							if(!ui.selected.cards.length) return [1,1];
							return [0,0];
						},
						selectCard:function(){
							if(ui.selected.targets.length) return [0,0];
							if(!ui.selected.cards.length) return [0,2];
							return [2,2];
						},
						prompt:get.prompt2('yuzuru_wuxin'),
						complexCard:true,
						complexTarget:true,
						ai1:function(card){
							var player=_status.event.player;
							if(player.hp>3) return 0;
							return (player.getDamagedHp()*2)-get.value(card);
						},
						ai2:function(target){
							if(player.hp<4||target.hasSkillTag('nogain')) return 0;
							return get.attitude(_status.event.player,target);
						},
					});
					'step 1'
					if(result.bool){
						if(result.cards.length){
							player.logSkill('yuzuru_wuxin');
							player.discard(result.cards);
							player.recover();
						}
						else{
							var target=result.targets[0];
							player.logSkill('yuzuru_wuxin',target,{color:[194,117,92]});
							player.loseHp();
							target.draw(2);
						}
					}
				},
			},
			yuzuru_deyi:{
				derivation:['yuzuru_kunfen','yuzuru_quji','yuzuru_wangsheng','yuzuru_kunfen_rewrite','yuzuru_quji_rewrite'],
				trigger:{global:'dieAfter'},
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'orange',
				content:function(){
					player.awakenSkill('yuzuru_deyi');
					player.removeSkill('yuzuru_wuxin');
					player.addSkillLog('yuzuru_kunfen');
					player.addSkillLog('yuzuru_quji');
					player.addSkillLog('yuzuru_wangsheng');
					player.loseMaxHp();
					player.recover();
				},
			},
			yuzuru_kunfen:{
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				content:function(){
					'step 0'
					if(!player.storage._yuzuru_sss) player.loseHp();
					player.draw(2);
					'step 1'
					if(player.countCards('he')<2) event.finish();
					else{
						player.chooseCardTarget({
							selectCard:2,
							filterTarget:lib.filter.notMe,
							prompt:'是否交给一名其他角色两张牌？',
							position:'he',
							ai1:function(card){
								var player=_status.event.player;
								if(player.maxHp-player.hp==1&&card.name=='du') return 30;
								var check=player.countCards('h')-2;
								if(check<1) return 0;
								if(player.hp>1&&check<2) return 0;
								return get.unuseful(card)+9;
							},
							ai2:function(target){
								var att=get.attitude(_status.event.player,target);
								if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
								return att-2;
							},
						});
					}
					'step 2'
					if(result.bool) player.give(result.cards,result.targets[0]);
				},
			},
			yuzuru_quji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:true,
				selectCard:function(){
					var player=_status.event.player;
					return player.getDamagedHp();
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.hp<target.maxHp;
				},
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				selectTarget:function(){
					return [1,ui.selected.cards.length];
				},
				complexSelect:true,
				check:function(card){
					if(!_status.event.player.storage._yuzuru_sss&&get.color(card)=='black') return -1;
					return 9-get.value(card);
				},
				line:{color:[194,117,92]},
				content:function(){
					"step 0"
					target.recover();
					"step 1"
					if(target==targets[targets.length-1]&&!player.storage._yuzuru_sss){
						for(var i=0;i<cards.length;i++){
							if(get.color(cards[i],player)=='black'){
								player.loseHp();
								break;
							}
						}
					}
				},
				ai:{
					result:{
						target:1
					},
					order:6
				}
			},
			yuzuru_wangsheng:{
				trigger:{player:'dieBegin'},
				forced:true,
				juexingji:true,
				unique:true,
				skillAnimation:true,
				animationColor:'soil',
				content:function(){
					'step 0'
					trigger.cancel();
					player.awakenSkill('yuzuru_wangsheng');
					player.storage._yuzuru_sss=true;
					if(player.countCards('he')>0){
						player.chooseCardTarget({
							selectCard:[1,Infinity],
							filterTarget:lib.filter.notMe,
							prompt:'将任意张牌交给一名其他角色，或点【取消】。',
							position:'he',
							ai1:function(card){
								var player=_status.event.player;
								if(get.suit(card,false)=='heart'&&game.hasPlayer(function(current){
									return current.hasSkill('kanade_mapo')&&get.attitude(player,current)>0;
								})) return 1;
								return 0;
							},
							ai2:function(kanade){
								if(kanade.hasSkill('kanade_mapo')&&get.attitude(_status.event.player,kanade)>0) return 2;
								return 0;
							},
						});
					}
					else event.goto(2);
					'step 1'
					if(result.bool) player.give(result.cards,result.targets[0]);
					'step 2'
					player.loseMaxHp();
					'step 3'
					if(player.hp<2) player.recover(2-player.hp);
				},
			},
			ao_xishi:{
				trigger:{
					player:['useCard','respond'],
					target:'useCardToTargeted',
				},
				forced:true,
				filter:function(event,player,name){
					return (name=='useCard'||name=='respond'||event.player!=player)&&get.suit(event.card)=='diamond';
				},
				content:function(){player.draw()},
			},
			ao_kuihun:{
				trigger:{global:'dying'},
				logTarget:'player',
				line:'thunder',
				filter:function(event,player){
					return player!=event.player;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(!trigger.player.countCards('h')) event.finish();
					else player.chooseButton(['选择一张牌作为「蝶」',trigger.player.getCards('h')]).set('ai',function(button){
						var val=get.buttonValue(button);
						if(get.attitude(_status.event.player,get.owner(button.link))<=0) return 10+val;
						if(val<=0) return 20;
						if(button.link.name=='tao'||button.link.name=='jiu') return 0;
						return 1/val;
					});
					'step 2'
					if(result.bool){
						player.addToExpansion(result.links,trigger.player,'give').set('log',false).gaintag.add('ao_diegui');
						game.log(result.links,'飞向了',player);
					}
				},
				locked:false,
				mod:{
					targetInRange:function(card,player){
						var list=player.getExpansions('ao_diegui');
						for(var i=0;i<list.length;i++){
							if(get.suit(list[i],false)==get.suit(card,false)) return true;
						}
					},
					cardUsable:function(card,player){
						var list=player.getExpansions('ao_diegui');
						for(var i=0;i<list.length;i++){
							if(get.suit(list[i],false)==get.suit(card,false)) return Infinity;
						}
					},
					maxHandcard:function(player,num){
						return num+player.getExpansions('ao_diegui').length;
					},
				},
			},
			ao_shixin:{
				derivation:'ao_diegui',
				trigger:{player:'phaseZhunbeiBegin'},
				juexingji:true,
				forced:true,
				skillAnimation:true,
				animationColor:'key',
				unique:true,
				filter:function(event,player){
					var list=player.getExpansions('ao_diegui');
					var list2=[];
					for(var i=0;i<list.length;i++){
						list2.add(get.suit(list[i],false));
					}
					return list2.length>2;
				},
				content:function(){
					player.awakenSkill('ao_shixin');
					player.removeSkill('ao_kuihun');
					player.addSkill('ao_diegui');
					player.gainMaxHp();
					player.recover();
				},
			},
			ao_diegui:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.getExpansions('ao_diegui').length>0;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('蝶归',player.getExpansions('ao_diegui'),'hidden');
					},
					backup:function(links,player){
						return {
							card:links,
							filterCard:function(){return false},
							selectCard:-1,
							filterTarget:true,
							delay:false,
							content:lib.skill.ao_diegui.contentx,
							line:'thunder',
							ai:{
								result:{
									target:function(player,target){
										if(target!=player&&target.hasSkillTag('nogain')) return 0;
										var num=1;
										if(target.isTurnedOver()) num+=2;
										if(target.isLinked()) num+=0.5;
										return num;
									},
								}
							},
						}
					},
					prompt:function(links,player){
						return '选择一名角色，令其获得'+get.translation(links[0])+'，摸两张牌并将武将牌复原。'
					},
				},
				contentx:function(){
					'step 0'
					player.give(lib.skill.ao_diegui_backup.card,target,'visible');
					target.draw(2);
					'step 1'
					target.link(false);
					'step 2'
					target.turnOver(false);
				},
				intro:{
					name:'七影蝶',
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				ai:{order:1,result:{player:1}},
			},
			ayato_jianshen:{
				mod:{
					cardnature:function(card,player){
						if(get.name(card)=='sha') return 'kami';
					},
				},
				ai:{threaten:3},
			},
			ayato_zonghuan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseButton(['请选择'+get.translation(target)+'的一张手牌',target.getCards('h')],true).set('ai',get.buttonValue);
					'step 1'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						if(!lib.filter.cardEnabled(card,target)) event._result={bool:false};
						else{
							var targets=game.players.slice(0);
							var info=get.info(card);
							var range;
							if(!info.notarget){
								var select=get.copy(info.selectTarget);
								if(select==undefined){
									range=[1,1];
								}
								else if(typeof select=='number') range=[select,select];
								else if(get.itemtype(select)=='select') range=select;
								else if(typeof select=='function') range=select(card,player);
								game.checkMod(card,target,range,'selectTarget',target);
							}
							if(info.notarget||range[1]==-1){
								if(range[1]==-1){
									for(var i=0;i<targets.length;i++){
										if(!target.canUse(card,targets[i])){
											targets.splice(i--,1);
										}
									}
									if(targets.length){
										event.targets2=targets;
									}
									else{
										event.finish();
										return;
									}
								}
								else event.targets2=[];
								var next=player.chooseBool();
								next.set('prompt',event.prompt||('是否令'+get.translation(target)+(event.targets2.length?'对':'')+get.translation(event.targets2)+'使用'+get.translation(card)+'?'));
								next.set('prompt2','或点「取消」，令其将此牌置入弃牌堆');
								next.ai=function(){
									var eff=0;
									for(var i=0;i<event.targets2.length;i++){
										eff+=get.effect(event.targets2[i],card,target,player);
									}
									return eff>0;
								};
							}
							else{
								var next=player.chooseTarget();
								next.set('_get_card',card);
								next.set('source',target);
								next.set('filterTarget',function(card,player,target){
									return lib.filter.filterTarget(_status.event._get_card,_status.event.source,target);
								});
								next.set('ai',function(target){
									var evt=_status.event;
									return get.effect(target,evt._get_card,evt.source,evt.player)
								});
								next.set('selectTarget',function(){
									var card=get.card(),player=_status.event.source;
									if(card==undefined) return;
									var range;
									var select=get.copy(get.info(card).selectTarget);
									if(select==undefined){
										if(get.info(card).filterTarget==undefined) return[0,0];
										range=[1,1];
									}
									else if(typeof select=='number') range=[select,select];
									else if(get.itemtype(select)=='select') range=select;
									else if(typeof select=='function') range=select(card,player);
									game.checkMod(card,player,range,'selectTarget',player);
									return range;
								});
								next.set('prompt',event.prompt||('选择'+get.translation(target)+'使用'+get.translation(card)+'的目标'));
								next.set('prompt2','或点「取消」令其将此牌置入弃牌堆');
							}
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.useCard(card,event.targets2||result.targets,false,'noai');
						player.draw();
					}
					else{
						target.lose(card,ui.discardPile);
						target.$throw(card);
						game.log(target,'将',card,'置入了弃牌堆');
					}
				},
				ai:{order:10,result:{target:-1}},
			},
			nagisa_tiandu:{
				trigger:{player:'judgeEnd'},
				charlotte:true,
				frequent:function(event){
					if(event.result.card.name=='du') return false;
					return true;
				},
				check:function(event){
					if(event.result.card.name=='du') return false;
					return true;
				},
				filter:function(event,player){
					return get.position(event.result.card,true)=='o';
				},
				content:function(){
					player.gain(trigger.result.card,'gain2');
				}
			},
			nagisa_fuxin:{
				trigger:{
					global:['gainAfter','loseAfter','loseAsyncAfter','damageEnd'],
				},
				filter:function(event,player){
					var source=_status.currentPhase;
					if(event.name=='damage'){
						return event.player.isAlive()&&event.player!=source;
					}
					else if(event.name=='lose'){
						if(event.type!='discard'||event.player==source||event.player.isDead()) return false;
						if((event.discarder||event.getParent(2).player)==event.player) return false;
						if(!event.getl(event.player).hs.length) return false;
						return true;
					}
					else if(event.name=='gain'){
						if(event.giver||event.getParent().name=='gift') return false;
						var cards=event.getg(event.player);
						if(!cards.length) return false;
						return game.hasPlayer(function(current){
							if(current==event.player||current==source) return false;
							var hs=event.getl(current).hs;
							for(var i of hs){
								if(cards.includes(i)) return true;
							}
							return false;
						});
					}
					else if(event.type=='gain'){
						if(event.giver||!event.player||event.player==source||event.player.isDead()) return false;
						var hs=event.getl(event.player);
						return game.hasPlayer(function(current){
							if(current==event.player) return false;
							var cards=event.getg(current);
							for(var i of cards){
								if(hs.includes(i)) return true;
							}
						});
					}
					else if(event.type=='discard'){
						if(!event.discarder) return false;
						return game.hasPlayer(function(current){
							return current!=source&&current!=event.discarder&&event.getl(current).hs.length>0;
						});
					}
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var targets=[],source=_status.currentPhase;
					if(trigger.name=='gain'){
						var cards=trigger.getg(trigger.player);
						targets.addArray(game.filterPlayer(function(current){
							if(current==trigger.player||current==source) return false;
							var hs=trigger.getl(current).hs;
							for(var i of hs){
								if(cards.includes(i)) return true;
							}
							return false;
						}));
					}
					else if(trigger.name=='loseAsync'&&trigger.type=='discard'){
						targets.addArray(game.filterPlayer(function(current){
							return current!=trigger.discarder&&current!=source&&trigger.getl(current).hs.length>0;
						}));
					}
					else targets.push(trigger.player);
					event.targets=targets.sortBySeat();
					if(!event.targets.length) event.finish();
					'step 1'
					var target=targets.shift();
					event.target=target;
					if(target.isAlive()) player.chooseBool(get.prompt2('nagisa_fuxin',target)).set('ai',function(){
						var evt=_status.event.getParent();
						return get.attitude(evt.player,evt.target)>0&&get.attitude(evt.player,_status.currentPhase)<=0;
					});
					else{
						if(targets.length>0) event.goto(1);
						else event.finish();
					}
					'step 2'
					if(result.bool){
						player.logSkill('nagisa_fuxin',target);
						target.judge();
					}
					else{
						if(targets.length>0) event.goto(1);
						else event.finish();
					}
					'step 3'
					if(result.color=='red') target.draw();
					else{
						var source=_status.currentPhase;
						if(source){
							source.chooseToDiscard('he',true);
						}
					}
					if(targets.length>0) event.goto(1);
				},
				ai:{expose:0.2},
			},
			tomoya_shangxian:{
				trigger:{player:'phaseUseBegin'},
				mark:true,
				locked:true,
				intro:{
					content:function(s){
						return '计算与其他角色的距离时始终从'+(s?'逆':'顺')+'时针计算'
					},
				},
				content:function(){
					player.draw();
					player.storage.tomoya_shangxian=!player.storage.tomoya_shangxian;
				},
				ai:{
					left_hand:true,
					right_hand:true,
					skillTagFilter:function(player,tag){
						return (player.storage.tomoya_shangxian==true)==(tag=='left_hand');
					},
				},
			},
			tomoya_wangjin:{
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return player!=event.player&&!player.hasSkill('tomoya_wangjin_'+player.inRange(event.player));
				},
				logTarget:'player',
				check:function(event,player){
					var target=event.player;
					var bool=player.inRange(target);
					if(!bool){
						if(target.hp>player.hp) return get.effect(target,{name:'sha',isCard:true},player,player)>0;
						var temp=target;
						while(true){
							temp=temp.getNext();
							if(temp==target||temp==_status.roundStart) return true;
							if(temp==player) continue;
							if(temp.hp>player.hp&&!player.inRange(temp)&&get.effect(temp,{name:'sha',isCard:true},player,player)>0) return false;
						}
					}
					if(get.attitude(player,target)<2) return false;
					if(target.hp<player.hp&&!target.hasSkillTag('nogain')) return true;
					var temp=target;
					while(true){
						temp=temp.getNext();
						if(temp==target||temp==_status.roundStart) return true;
						if(temp==player) continue;
						if(temp.hp<player.hp&&player.inRange(temp)&&get.attitude(player,target)>=2&&!temp.hasSkillTag('nogain')) return false;
					}
				},
				content:function(){
					'step 0'
					event.bool=player.inRange(trigger.player);
					player.addTempSkill('tomoya_wangjin_'+event.bool,'roundStart');
					if(event.bool){
						trigger.player.draw();
					}
					else player.draw(2);
					'step 1'
					if(event.bool){
						if(trigger.player.hp<player.hp) player.draw();
						else event.finish();
					}
					else{
						if(player.countDiscardableCards(trigger.player,'h')>0) trigger.player.discardPlayerCard(player,'h',true);
						else event.finish();
					}
					'step 2'
					if(event.bool){
						player.chooseCard('h','是否交给'+get.translation(trigger.player)+'一张牌？');
					}
					else{
						event.finish();
						if(player.hp>=trigger.player.hp) return;
						var card={name:'sha',isCard:true};
						if(player.canUse(card,trigger.player,false)) player.useCard(card,trigger.player,false);
					}
					'step 3'
					if(result.bool) player.give(result.cards,target);
				},
				subSkill:{true:{charlotte:true},false:{charlotte:true}},
				ai:{expose:0.2},
			},
			noda_fengcheng:{
				audio:2,
				trigger:{
					player:"gainAfter",
				},
				forced:true,
				filter:function(event,player){
					return get.itemtype(event.source)=='player'&&event.bySelf!=true;
				},
				check:function(event,player){
					return get.attitude(player,event.source)>0;
				},
				logTarget:"source",
				content:function(){
					trigger.source.draw();
				},
			},
			noda_xunxin:{
				audio:2,
				enable:'phaseUse',
				viewAs:{name:'juedou'},
				filter:function(event,player){
					return (player.getStat('skill').noda_xunxin||0)<player.hp;
				},
				filterTarget:function(event,player,target){
					if(target.hp<player.hp) return false;
					return lib.filter.filterTarget.apply(this,arguments);
				},
				selectCard:-1,
				filterCard:function(){return false},
				group:'noda_xunxin2',
			},
			noda_xunxin2:{
				trigger:{player:'juedouAfter'},
				popup:false,
				forced:true,
				filter:function(event,player){
					if(event.target.isDead()) return false;
					return event.turn&&event.turn.countCards('he')>0;
				},
				content:function(){
					'step 0'
					event.giver=trigger.turn;
					event.gainner=event.giver==player?trigger.target:player;
					event.giver.chooseCard('he',true,'交给'+get.translation(event.gainner)+'一张牌');
					'step 1'
					event.giver.give(result.cards,event.gainner);
				},
			},
			hinata_qiulve:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				viewAsFilter:function(player){
					return player.countCards('hes',function(card){
						return get.type(card)!='basic';
					})>0;
				},
				viewAs:{name:'sha'},
				filterCard:function(card,player){
					return get.type(card)!='basic';
				},
				locked:false,
				position:'hes',
				check:function(card){
					var val=get.value(card);
					if(val>=6) return 0;
					if(get.color(card)=='black') return 12-val;
					return 6-val;
				},
				mod:{
					targetInRange:function(card,player,target){
						if(_status.event.skill=='hinata_qiulve') return true;
					},
				},
				group:'hinata_qiulve_clear',
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.countCards('hes',function(card){
							return get.type(card)!='basic';
						})>0;
					},
				},
			},
			hinata_qiulve_clear:{
				trigger:{player:'useCard1'},
				firstDo:true,
				silent:true,
				filter:function(event,player){
					return event.skill=='hinata_qiulve';
				},
				content:function(){
					if(get.color(trigger.card)=='red') trigger.directHit.addArray(game.players);
					else if(trigger.addCount!==false){
						trigger.addCount=false;
						var stat=player.getStat().card;
						if(stat.sha) stat.sha--;
					}
				},
			},
			hinata_ehou:{
				audio:2,
				trigger:{global:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					return player!=event.player&&event.targets&&event.targets.includes(player)&&(_status.connectMode||player.hasSha());
				},
				content:function(){
					'step 0'
					player.chooseToUse({
						logSkill:'hinata_ehou',
						preTarget:trigger.player,
						prompt:'是否发动【扼喉】，对'+get.translation(trigger.player)+'使用一张【杀】？',
						filterCard:function(card,player){
							return get.name(card)=='sha'&&lib.filter.filterCard.apply(this,arguments);
						},
						filterTarget:function(card,player,target){
							return target==_status.event.preTarget&&lib.filter.filterTarget.apply(this,arguments);
						},
						addCount:false,
					});
					'step 1'
					if(result.bool&&player.getHistory('sourceDamage',function(evt){
						return evt.getParent(4)==event;
					}).length) player.draw();
				},
			},
			hisako_yinbao:{
				audio:2,
				trigger:{player:['damageEnd','recoverAfter']},
				content:function(){
					'step 0'
					player.judge(function(card){
						return get.suit(card)=='spade'?2:-2;
					}).judge2=function(result){
						return result.bool;
					};
					'step 1'
					if(result.bool&&game.hasPlayer(current=>current!=player)){
						player.chooseTarget(lib.filter.notMe,true,'选择一名其他角色，对其造成1点雷属性伤害').set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player,'thunder');
						});
					}
					else event.finish();
					'step 2'
					var target=result.targets[0];
					player.addExpose(0.2);
					player.line(target,'thunder');
					target.damage('thunder');
				},
			},
			hisako_zhuanyun:{
				trigger:{player:'judgeBegin'},
				forced:true,
				charlotte:true,
				silent:true,
				filter:function(event,player){
					return !event.directresult;
				},
				content:function(){
					var tempcard=false,temp=-Infinity;
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						var card=ui.cardPile.childNodes[i];
						var temp2=trigger.judge(card);
						if(temp2>temp){
							tempcard=card;
							temp=temp2;
						}
					}
					if(tempcard) trigger.directresult=tempcard;
				},
				ai:{luckyStar:true},
			},
			riki_spwenji:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('he');
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('riki_spwenji'),function(card,player,target){
						return target!=player&&target.countCards('he');
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att>0) return Math.sqrt(att)/10;
						return 5-att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('riki_spwenji',target);
						target.chooseCard('he',true,'问计：将一张牌交给'+get.translation(player));
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.addTempSkill('riki_spwenji_respond');
						player.storage.riki_spwenji_respond=get.type2(result.cards[0],target);
						event.target.give(result.cards,player,true);
					}
				},
				ai:{expose:0.2},
				subSkill:{
					respond:{
						onremove:true,
						trigger:{player:'useCard'},
						forced:true,
						charlotte:true,
						audio:'riki_spwenji',
						filter:function(event,player){
							return get.type2(event.card)==player.storage.riki_spwenji_respond;
						},
						content:function(){
							trigger.directHit.addArray(game.players);
						},
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								return get.type2(arg.card)==player.storage.riki_spwenji_respond;
							},
						},
					}
				}
			},
			riki_nvzhuang:{
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				content:function(){
					player.draw(player.countCards('h')==0?2:1);
				},
			},
			riki_mengzhong:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				derivation:'riki_chongzhen',
				juexingji:true,
				unique:true,
				skillAnimation:true,
				animationColor:'key',
				filter:function(event,player){
					var num=0;
					player.getAllHistory('gain',function(evt){
						if(evt.getParent().name=='riki_spwenji') num+=evt.cards.length;
					});
					return num>=3;
				},
				content:function(){
					player.awakenSkill('riki_mengzhong');
					player.removeSkill('riki_spwenji');
					player.gainMaxHp();
					player.recover();
					player.addSkill('riki_chongzhen');
				},
			},
			riki_chongzhen:{
				trigger:{
					player:"phaseUseBegin",
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('riki_chongzhen'),function(card,player,target){
						return player.canCompare(target);
					}).set('ai',function(target){
						return -get.attitude(player,target)*(1+target.countCards('e'))/(1+target.countCards('j'));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('riki_chongzhen',target);
						player.chooseToCompare(target);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var num=0;
						if(target.countCards('h')) num++;
						if(target.countCards('e')) num++;
						if(target.countCards('j')) num++;
						if(num){
							player.gainPlayerCard(target,num,'hej',true).set('filterButton',function(button){
								for(var i=0;i<ui.selected.buttons.length;i++){
									if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
								}
								return true;
							});
						}
					}
					else{
						player.addTempSkill('zishou2','phaseEnd');
					}
				},
				ai:{expose:0.2},
			},
			yuiko_fenglun:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(function(current){
						return player.canCompare(current);
					});
				},
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool) player.addTempSkill('yuiko_fenglun2','phaseUseEnd');
				},
				ai:{
					order:10,
					result:{target:-1},
				},
			},
			yuiko_fenglun2:{
				mod:{
					cardUsable:function(){return Infinity},
					targetInRange:function(){return true},
				},
			},
			yuiko_dilve:{
				enable:"chooseCard",
				check:function(){
					return 20;
				},
				filter:function(event){
					return event.type=='compare'&&!event.directresult;
				},
				onCompare:function(player){
					return game.cardsGotoOrdering(get.bottomCards()).cards;
				},
				group:'yuiko_dilve_gain',
				subSkill:{
					gain:{
						trigger:{
							player:['chooseToCompareAfter','compareMultipleAfter'],
							target:['chooseToCompareAfter','compareMultipleAfter']
						},
						filter:function(event,player){
							if(event.preserve) return false;
							return [event.card1,event.card2].filterInD('od').length>0;
						},
						prompt2:function(event,player){
							return '获得'+get.translation([event.card1,event.card2].filterInD('od'));
						},
						content:function(){
							player.gain([trigger.card1,trigger.card2].filterInD('od'),'gain2','log');
						}
					},
				},
			},
			doruji_feiqu:{
				trigger:{
					player:'useCard',
					target:'useCardToTargeted',
				},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				content:function(){
					if(trigger.name=='useCard') trigger.directHit.addArray(game.players);
					else trigger.directHit.add(player);
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.card.name=='sha';
					},
				},
				global:'doruji_feiqu_ai',
			},
			doruji_feiqu_ai:{
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return arg.card.name=='sha'&&(arg.target.hasSkill('doruji_feiqu')||arg.target.hasSkill('godan_feiqu'));
					},
				},
			},
			akane_jugu:{
				audio:2,
				mod:{
					maxHandcard:function(player,num){
						return num+player.maxHp;
					}
				},
				trigger:{global:'phaseBefore',player:'enterGame'},
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					player.draw(player.maxHp);
				}
			},
			akane_quanqing:{
				enable:'phaseUse',
				filterCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&player.inRange(target);
				},
				position:'he',
				check:function(card){
					var val=get.value(card);
					var num=card.number;
					if(num>10) return 8-val;
					var player=_status.event.player;
					if(player.getUseValue(card,null,true)>player.getUseValue({name:'guohe'})) return 0;
					if(num>6) return 6-val;
					return 3-val;
				},
				content:function(){
					'step 0'
					var num=cards[0].number;
					var trans=get.translation(target);
					var list=['令'+trans+'摸一张牌'];
					event.addIndex=0;
					if(num>6){
						if(target.countDiscardableCards(player,'hej')>0) list.push('弃置'+trans+'区域内的一张牌');
						else event.addIndex++;
					}
					if(num>10) list.push('对'+trans+'造成1点伤害');
					if(list.length==1) event._result={index:0};
					else player.chooseControl().set('choiceList',list).set('index',list.length-1).set('ai',function(){return _status.event.index});
					'step 1'
					if(result.index>0) result.index+=event.addIndex;
					switch(result.index){
						case 0:target.draw();break;
						case 1:player.discardPlayerCard(target,'hej',true);break;
						case 2:target.damage('nocard');break;
					}
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(card){
								if(card.number>10) return get.damageEffect(target,player,target);
								if(card.number>6) return lib.card.guohe.ai.result.target.apply(this,arguments);
								return 1;
							}
						},
					},
				},
			},
			akane_yifu:{
				unique:true,
				global:'akane_yifu2',
				zhuSkill:true,
			},
			akane_yifu2:{
				audio:2,
				enable:'phaseUse',
				discard:false,
				line:true,
				log:false,
				delay:false,
				lose:false,
				prepare:function(cards,player,targets){
					targets[0].logSkill('akane_yifu');
				},
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(target){
						return target!=player&&target.hasZhuSkill('akane_yifu',player);
					});
					var str='将一张手牌交给'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				filter:function(event,player){
					if(player.group!='key') return false;
					if(player.countCards('h')==0) return 0;
					return game.hasPlayer(function(target){
						return target!=player&&target.hasZhuSkill('akane_yifu',player)&&!target.hasSkill('akane_yifu3');
					});
				},
				filterCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.hasZhuSkill('akane_yifu',player)&&!target.hasSkill('akane_yifu3');
				},
				content:function(){
					'step 0'
					player.give(cards,target);
					target.addTempSkill('akane_yifu3','phaseUseEnd');
					target.draw();
					'step 1'
					if(target.countCards('h')>0) target.chooseCard('h',true,'交给'+get.translation(player)+'一张牌').set('ai',function(card){
						return 14-get.value(card);
					});
					else event.finish();
					'step 2'
					target.give(result.cards,player);
				},
				ai:{
					expose:0.3,
					order:10,
					result:{
						target:5
					}
				}
			},
			akane_yifu3:{charlotte:true},
			sasami_miaobian:{
				derivation:['sasami_gongqing','sasami_funan','sasami_baoqiu'],
				init2:function(player){
					if(player.hp<=3) player.addSkill('sasami_gongqing');
					if(player.hp<=2) player.addSkill('sasami_funan');
					if(player.hp<=1) player.addSkill('sasami_baoqiu');
				},
				trigger:{player:'changeHp'},
				firstDo:true,
				silent:true,
				content:function(){
					lib.skill.sasami_miaobian.init2(player);
				},
			},
			sasami_baoqiu:{
				line:{color:[173,149,206]},
				inherit:'rin_baoqiu'
			},
			"sasami_gongqing":{
				audio:true,
				trigger:{
					player:["damageBegin3","damageBegin4"],
				},
				forced:true,
				filter:function (event,player,name){
					if(!event.source) return false;
					var range=event.source.getAttackRange();
					if(name=='damageBegin3') return range>3;
					return event.num>1&&range<3;
				},
				content:function (){
					trigger.num=event.triggername=='damageBegin4'?1:trigger.num+1;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.player){
							if(arg.player.hasSkillTag('jueqing',false,player)) return false;
							if(arg.player.getAttackRange()<3) return true;
						}
						return false;
					}
				},
			},
			sasami_funan:{
				audio:2,
				trigger:{global:['respond','useCard']},
				line:{color:[173,149,206]},
				filter:function(event,player){
					if(!event.respondTo) return false;
					if(event.player==player) return false;
					if(player!=event.respondTo[0]) return false;
					if(!player.hasSkill('sasami_funan_jiexun')){
						var cards=[]
						if(get.itemtype(event.respondTo[1])=='card') cards.push(event.respondTo[1]);
						else if(event.respondTo[1].cards) cards.addArray(event.respondTo[1].cards);
						return cards.filterInD('od').length>0;
					}
					else return event.cards.filterInD('od').length>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					if(!player.hasSkill('sasami_funan_jiexun')){
						var cards=[]
						if(get.itemtype(trigger.respondTo[1])=='card') cards.push(trigger.respondTo[1]);
						else if(trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
						cards=cards.filterInD('od');
						trigger.player.gain(cards,'gain2','log').gaintag.add('sasami_funan');
						trigger.player.addTempSkill('sasami_funan_use');
					}
					'step 1'
					var cards=trigger.cards.filterInD('od');
					player.gain(cards,'log','gain2');
				},
				subSkill:{
					use:{
						onremove:function(player){
							player.removeGaintag('sasami_funan');
						},
						charlotte:true,
						mod:{
							cardEnabled2:function(card,player){
								if(get.itemtype(card)=='card'&&card.hasGaintag('sasami_funan')){
									return false;
								}
							}
						}
					}
				}
			},
			rin_baoqiu:{
				mod:{
					attackRange:function(rin,ball){
						return ball+2;
					},
				},
				trigger:{player:'useCardToPlayered'},
				forced:true,
				logTarget:'target',
				filter:function(event,player){
					return event.card.name=='sha';
				},
				line:{color:[194,117,92]},
				content:function(){
					'step 0'
					player.judge(function(){return 0});
					'step 1'
					var target=trigger.target;
					var map=trigger.customArgs;
					var id=target.playerid;
					if(!map[id]) map[id]={};
					if(result.color=='red'){
						if(!map[id].extraDamage) map[id].extraDamage=0;
						map[id].extraDamage++;
					}
					if(result.color=='black'){
						trigger.directHit.add(target);
					}
					if(result.suit=='spade'||result.suit=='heart'){
						var evt=trigger.getParent();
						if(evt.addCount!==false){
							evt.addCount=false;
							player.getStat().card.sha--;
						}
						player.draw();
					}
					if(result.suit=='diamond'||result.suit=='club'){
						target.addTempSkill('fengyin');
						if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true);
					}
				},
			},
			sunohara_chengshuang:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				group:'sunohara_chengshuang_phase',
				forced:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					var evt=event.getParent('phase');
					if(evt&&evt.player==player) evt.sunohara_chengshuang=true;
					player.chooseControl('male','female').set('prompt','成双：请选择自己的性别');
					'step 1'
					var sex=result.control;
					game.broadcastAll(function(player,sex){
						player.sex=sex;
						if(player.marks&&player.marks.sunohara_chengshuang) player.marks.sunohara_chengshuang.firstChild.innerHTML=sex=='male'?'♂':'♀';
					},player,sex);
					game.log(player,'将性别变更为','#g'+get.translation(sex)+'性');
				},
				mark:true,
				intro:{
					content:function(storage,player){
						if(player.sex=='unknown'||player.sex=='double') return '当前性别未确定';
						return '当前性别：'+get.translation(player.sex);
					},
				},
			},
			sunohara_chengshuang_phase:{
				trigger:{
					player:'phaseBegin',
				},
				filter:function(event,player){
					if(event.sunohara_chengshuang) return false;
					return game.phaseNumber>1;
				},
				prompt2:function(event,player){
					if(player.sex=='unknown'||player.sex=='double') return '选择自己的性别';
					return '将自己的性别变更为'+(player.sex=='male'?'女性':'男性');
				},
				content:function(){
					'step 0'
					if(player.sex=='unknown'||player.sex=='double') player.chooseControl('male','female').set('prompt','成双：请选择自己的性别');
					else event._result={control:player.sex=='male'?'female':'male'};
					'step 1'
					var sex=result.control;
					game.broadcastAll(function(player,sex){
						player.sex=sex;
						if(player.marks&&player.marks.sunohara_chengshuang) player.marks.sunohara_chengshuang.firstChild.innerHTML=sex=='male'?'♂':'♀';
					},player,sex);
					game.log(player,'将性别变更为','#g'+get.translation(sex)+'性');
				},
			},
			sunohara_tiaoyin:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countGainableCards(player,'hej')>0;
				},
				selectCard:[1,4],
				filterCard:function(card){
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==get.suit(card)) return false;
					}
					return true;
				},
				complexSelect:true,
				complexCard:true,
				complexTarget:true,
				selectTarget:function(){
					return [ui.selected.cards.length,ui.selected.cards.length];
				},
				line:{color:[239,204,96]},
				content:function(){
					if(target.countGainableCards(player,'hej')>0) player.gainPlayerCard(target,'hej','visible');
				},
				contentAfter:function(){
					var bool=false;
					for(var i=0;i<targets.length;i++){
						if(targets[i].differentSexFrom(player)){
							bool=true;break;
						}
					}
					if(bool) player.loseHp();
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							return lib.card.shunshou.ai.result.target.apply(this,arguments);
						},
						player:function(player,target){
							if(target.sameSexAs(player)) return 0;
							for(var i=0;i<ui.selected.targets.length;i++){
								if(ui.selected.targets[i].differentSexFrom(player)) return 0;
							}
							return (get.attitude(player,target)<0&&target.countCards('h','tao')>0)?1:-2;
						},
					}
				},
			},
			sunohara_jianren:{
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					'step 0'
					event.num=(!trigger.source||trigger.source.isDead()||trigger.source.differentSexFrom(player))?3:1;
					player.chooseTarget(get.prompt('sunohara_jianren'),'令一名角色摸'+get.cnNumber(event.num)+'张牌。').set('ai',function(target){
						var att=get.attitude(player,target);
						if(att<=0) return 0;
						if(target.hasSkillTag('nogain')&&target!=_status.currentPhase) return 0.1;
						return att/(1+0.1*target.countCards('h'));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('sunohara_jianren',target,{color:[145,149,179]});
						target.draw(event.num);
					}
				},
			},
			shiina_qingshen:{
				audio:1,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				filter:function(event,player){
					return event.cards&&event.cards.filterInD().length>0;
				},
				frequent:true,
				content:function(){
					'step 0'
					var cards=trigger.cards.filterInD('od');
					player.gain(cards,'gain2','log');
					event.count=cards.length;
					'step 1'
					var cards=player.getCards('he');
					if(cards.length==0){
						event.finish();
						return;
					}
					else if(cards.length<=event.count){
						event._result={bool:true,cards:cards};
					}
					else player.chooseCard(true,'he',event.count,'请选择要置于武将牌上的牌');
					'step 2'
					if(result.bool&&result.cards.length){
						var cards=result.cards;
						player.addToExpansion(cards,player,'give').gaintag.add('shiina_qingshen');
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				mod:{
					attackRange:function(from,num){
						return num+from.getExpansions('shiina_qingshen').length;
					},
					maxHandcard:function(from,num){
						return num+from.getExpansions('shiina_qingshen').length;
					},
				},
				ai:{
					notemp:true,
				},
			},
			shiina_feiyan:{
				audio:1,
				animalList:['key_inari','key_doruji'],
				trigger:{global:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					if(lib.skill.shiina_feiyan.animalList.includes(event.player.name)) return false;
					return player.getExpansions('shiina_qingshen').length>0&&player.inRange(event.player);
				},
				content:function(){
					'step 0'
					player.chooseButton([get.prompt('shiina_feiyan',trigger.player),player.getExpansions('shiina_qingshen')]).set('goon',get.attitude(player,trigger.player)<0?1:-1).set('ai',function(){return _status.event.goon});
					'step 1'
					if(result.bool){
						var cards=result.links;
						player.loseToDiscardpile(cards);
						event.card={name:'sha',isCard:true};
						if(lib.filter.targetEnabled(event.card,player,trigger.player)){
							event.card=player.useCard(event.card,trigger.player,'shiina_feiyan').card;
						}
						else player.logSkill('shiina_feiyan',trigger.player);
					}
					else event.finish();
					'step 2'
					if(!player.getHistory('sourceDamage',function(evt){
						return event.card==evt.card;
					}).length) player.draw();
				},
				group:'shiina_retieji',
				ai:{
					notemp:true,
					combo:'shiina_feiyan'
				},
			},
			shiina_retieji:{
				audio:1,
				shaRelated:true,
				trigger:{player:'useCardToPlayered'},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				filter:function(event,player){
					return event.card.name=='sha'&&event.getParent().skill=='shiina_feiyan';
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.judge(function(){return 0});
					if(!trigger.target.hasSkill('fengyin')){
						trigger.target.addTempSkill('fengyin');
					}
					"step 1"
					var suit=get.suit(result.card);
					var target=trigger.target;
					var num=target.countCards('h','shan');
					target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
						return get.suit(card)==_status.event.suit;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',num).set('suit',suit);
					"step 2"
					if(!result.bool){
						trigger.getParent().directHit.add(trigger.target);
					}
				}
			},
			inari_baiwei:{
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					return name!='du'&&get.type(name)=='basic'&&player.countCards('hes',{suit:'diamond'})>0;
				},
				filter:function(event,player){
					if(event.type=='wuxie'||!player.countCards('hse',{suit:'diamond'})) return false;
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];
						if(name!='du'&&name!='shan'&&get.type(name)=='basic'&&event.filterCard({name:name},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=='du'||name=='shan') continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								for(var j of lib.inpile_nature) list.push(['基本','',name,j]);
							}
							else if(get.type(name)=='basic'){
								list.push(['基本','',name]);
							}
						}
						return ui.create.dialog('摆尾',[list,'vcard'],'hidden');
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						if(_status.event.getParent().type=='phase'){
							var player=_status.event.player;
							var fakecard={name:button.link[2],nature:button.link[3]};
							if(player.getUseValue(fakecard)>0) return get.order(fakecard);
							return 0;
						}
						return 1;
					},
					backup:function(links,player){
						return {
							selectCard:1,
							filterCard:{suit:'diamond'},
							popname:true,
							check:function(card){
								if(get.type(card)=='basic') return 6;
								return 1/Math.max(0.1,get.value(card));
							},
							position:'hse',
							viewAs:{name:links[0][2],nature:links[0][3]},
						}
					},
					prompt:function(links,player){
						return '将一张♦牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用或打出';
					}
				},
				ai:{
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0
							for(var i=0;i<lib.inpile.length;i++){
								var name=lib.inpile[i];
								if(get.type(name)=='basic'&&player.getUseValue({name:name})>0){
									var temp=get.order({name:name});
									if(temp>max) max=temp;
								}
							}
							if(max>0) max+=0.5;
							return max;
						}
						return 4;
					},
					result:{
						player:1,
					},
					respondSha:true,
					fireAttack:true,
					skillTagFilter:function(player,tag){
						return tag=='fireAttack'||player.countCards('he',{suit:'diamond'})>0;
					},
				},
				group:['inari_baiwei_shan','inari_baiwei_draw'],
			},
			inari_baiwei_shan:{
				prompt:'将一张♦牌当做闪使用或打出',
				enable:['chooseToRespond','chooseToUse'],
				viewAs:{name:'shan'},
				selectCard:1,
				filterCard:{suit:'diamond'},
				popname:true,
				check:function(card){
					return 1/Math.max(0.1,get.value(card));
				},
				position:'hse',
				ai:{
					order:10,
					result:{player:1},
					respondShan:true,
					skillTagFilter:function(player){
						return player.countCards('hse',{suit:'diamond'})>0;
					},
				},
			},
			inari_baiwei_draw:{
				trigger:{player:['useCardAfter','respondAfter']},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.skill&&event.skill.indexOf('inari_baiwei')==0;
				},
				content:function(){player.draw()},
			},
			inari_huhun:{
				mod:{
					suit:function(card,suit){
						if(suit=='club') return 'diamond';
					},
					maxHandcard:function(player,num){
						return num+1;
					},
				}
			},
			saya_powei:{
				audio:2,
				trigger:{player:'phaseAfter'},
				direct:true,
				locked:true,
				limited:true,
				unique:true,
				skillAnimation:true,
				animationColor:'metal',
				filter:function(event,player){
					return event.type!='saya_powei'&&game.hasPlayer(function(current){
						return current.hp>player.hp;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('saya_powei'),function(card,saya,kyousuke){
						return kyousuke.hp>saya.hp;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att>=-2) return 0;
						if(target!=get.zhu(target)&&player.hasUnknown()) return 0;
						if(target.getEquip(3)&&!player.getEquip(4)) att/=2;
						if(player.hp<=1) att*=1.5;
						return -att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('saya_powei',target);
						player.awakenSkill('saya_powei');
						game.delay(3);
						var next=game.createEvent('saya_powei_loop',false,trigger);
						next.playertrue=player;
						next.playerfalse=target;
						next.setContent(lib.skill.saya_powei.content2);
					}
				},
				content2:function(){
					'step 0'
					event.count=0;
					event.stat=true;
					event.current=event['player'+event.stat];
					game.countPlayer2(function(current){
						if(current!=event.playertrue&&current!=event.playerfalse) current.addSkill('saya_nodis');
					});
					event.playertrue.addSkill('saya_judge');
					'step 1'
					event.count++;
					event.current.phase().set('type','saya_powei');
					'step 2'
					if(event.count==9||event.playertrue.isDead()||event.playerfalse.isDead()){
						game.countPlayer2(function(current){
							current.removeSkill('saya_nodis');
							current.removeSkill('saya_judge');
						});
					}
					else{
						event.stat=!event.stat;
						event.current=event['player'+event.stat];
						event.goto(1);
					}
				}
			},
			saya_nodis:{
				group:'undist',
				mark:true,
				intro:{content:'不计入距离和座次的计算'},
			},
			saya_judge:{
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.type=='saya_powei'&&player==event.getParent().playertrue;
				},
				content:function(){
					'step 0'
					player.judge(function(card){
						return get.color(card)=='red'?5:0;
					}).judge2=function(result){
						return result.bool?true:false;
					};
					'step 1'
					if(result.bool){
						player.line(trigger.getParent().playerfalse);
						trigger.getParent().playerfalse.damage();
					}
				},
			},
			saya_shouji:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return !player.getStat('skill').saya_shouji&&event.cards.filterInD().length>0;
				},
				direct:true,
				content:function(){
					'step 0'
					var goon=function(){
						var num=0;
						var cards=trigger.cards.filterInD();
						for(var i=0;i<cards.length;i++){
							num+=player.getUseValue(cards[i]);
						}
						return player.countCards('h',function(card){
							return player.getUseValue(card,null,true)>num;
						})==0;
					}();
					player.chooseTarget(get.prompt2('saya_shouji'),lib.filter.notMe).set('ai',function(target){
						if(!_status.event.goon) return 0;
						var player=_status.event.player;
						var cards=_status.event.getTrigger().cards.filterInD();
						var att=get.attitude(player,target);
						var num=0;
						for(var i=0;i<cards.length;i++){
							num+=target.getUseValue(cards[i]);
						}
						return Math.max(num,0.1)*att;
					}).set('goon',goon);
					'step 1'
					if(result.bool){
						player.getStat('skill').saya_shouji=1;
						event.cards=trigger.cards.filterInD();
						var target=result.targets[0];
						event.target=target;
						player.logSkill('saya_shouji',target);
						target.gain(event.cards,'gain2','log');
					}
					else event.finish();
					'step 2'
					target.chooseToUse({
						cards:cards,
						filterCard:function(card){
							if(get.itemtype(card)!='card'||!_status.event.cards||!_status.event.cards.includes(card)) return false;
							return lib.filter.filterCard.apply(this,arguments);
						},
						prompt:'是否使用得到的牌中的一张？',
					});
					'step 3'
					if(result.bool) player.draw();
				},
			},
			haruka_shuangche:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('haruka_kanata');
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=='boss_mengpohuihun') continue;
							if(name=='sha'){
								list.push(['基本','','sha']);
								for(var j of lib.inpile_nature) list.push(['基本','',name,j]);
							}
							else if(get.type(name)=='trick') list.push(['锦囊','',name]);
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}
						return ui.create.dialog('双掣',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						if(player.countCards('h',button.link[2])>0) return 0;
						if(['wugu','zhulu_card'].includes(button.link[2])) return 0;
						var effect=player.getUseValue(button.link[2]);
						if(effect>0) return effect;
						return 0;
					},
					backup:function(links,player){
						return {
							audio:'haruka_shuangche',
							filterCard:function(){return false},
							selectCard:-1,
							popname:true,
							check:function(card){
								return 6-get.value(card);
							},
							position:'he',
							viewAs:{name:links[0][2],nature:links[0][3],isCard:true},
						}
					},
					prompt:function(links,player){
						return '请选择'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'的目标';
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var cards=player.getCards('he').sort(function(a,b){
								return get.value(a)-get.value(b);
							});
							var num=(player.getStat('skill').haruka_shuangche||0)+1;
							if(player.needsToDiscard()>=num) return 1;
							if(player.hp>2) return 1;
							if(cards.length>=num){
								var val=0;
								for(var i=0;i<cards.length;i++){
									val+=get.value(cards[i]);
								}
								return 12-val;
							}
							return 0;
						}
					},
					fireAttack:true,
				},
				group:'kanata_shuangche',
			},
			kanata_shuangche:{
				trigger:{player:'useCardAfter'},
				forced:true,
				filter:function(event,player){
					return event.skill=='haruka_shuangche_backup';
				},
				content:function(){
					'step 0'
					var num=player.getStat('skill').haruka_shuangche||1;
					player.chooseToDiscard('###双掣：请选择一项###选择弃置'+get.cnNumber(num)+'张牌，或失去1点体力且令〖双掣〗失效至回合结束',num,'he').set('ai',function(card){
						var total=12;
						for(var i=0;i<ui.selected.cards.length;i++){
							total-=get.value(ui.selected.cards[i]);
						}
						return total-get.value(card);
					});
					'step 1'
					if(!result.bool){
						player.addTempSkill('haruka_kanata');
						player.loseHp();
					}
				},
			},
			haruka_kanata:{charlotte:true},
			tsumugi_mugyu:{
				audio:5,
				trigger:{target:'useCardToTargeted'},
				frequent:true,
				filter:function(event,player){
					return player.countCards('h')<player.maxHp;
				},
				content:function(){
					player.draw();
				},
			},
			tsumugi_huilang:{
				trigger:{player:'phaseEnd'},
				charlotte:true,
				line:{color:[253, 198, 116]},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('he',[1,player.countCards('he')],get.prompt2('tsumugi_huilang')).set('ai',function(card){
						if(get.position(card)!='h') return -1;
						if(!['shan','wuxie','caochuan'].includes(get.name(card))) return 9;
						return 5-get.value(card);
					});
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.logSkill('tsumugi_huilang');
						player.addSkill('tsumugi_huilang2');
						player.addToExpansion('giveAuto',cards,player).gaintag.add('tsumugi_huilang2');
					}
				},
			},
			tsumugi_huilang2:{
				charlotte:true,
				marktext:'隐',
				intro:{content:'隐藏于回廊之牌',markcount:'expansion'},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.getExpansions('tsumugi_huilang2').length>0;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('tsumugi_huilang2');
					event.num=cards.length;
					player.gain(cards,'draw');
					'step 1'
					player.chooseTarget([1,num],'是否令至多'+get.cnNumber(num)+'名角色各摸一张牌？').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						player.line(targets,lib.skill.tsumugi_huilang.line);
						targets.sortBySeat();
						game.asyncDraw(targets);
					}
					else event.finish();
					'step 3'
					game.delay();
				},
			},
			yui_jiang:{
				shaRelated:true,
				audio:2,
				audioname:['sp_lvmeng','re_sunben','re_sunce'],
				trigger:{
					player:'useCardToPlayered',
					target:'useCardToTargeted',
				},
				filter:function(event,player){
					if(!(event.card.name=='juedou'||(event.card.name=='sha'&&get.color(event.card)=='red'))) return false;
					return player==event.target||event.getParent().triggeredTargets3.length==1;
				},
				frequent:true,
				content:function(){
					player.draw();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
						},
						player:function(card,player,target){
							if(card.name=='sha'&&get.color(card)=='red') return [1,1];
						}
					}
				}
			},
			yui_lieyin:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				locked:true,
				content:function(){
					'step 0'
					var list=[];
					if(player.storage._ichiban_no_takaramono) list.push('cancel2');
					player.chooseControl.apply(player,list).set('choiceList',[
						'令此阶段内的所有红色牌视为【杀】',
						'令此阶段内的所有【杀】视为【决斗】'
					]).set('prompt',player.storage._ichiban_no_takaramono?get.prompt('yui_lieyin'):'烈音：请选择一项').set('ai',function(){
						var player=_status.event.player;
						var shas=player.countCards('h','sha')
						if(shas>0){
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&player.canUse('juedou',current)&&!current.hasSha()&&get.effect(current,{name:'juedou'},player,player)>0;
							})) return 1;
							if(player.storage._ichiban_no_takaramono) return 'cancel2';
						}
						if(player.countCards('h',function(card){
							return get.color(card)=='red'&&card.name!='sha'&&player.hasValueTarget(card);
						})==0) return 0;
						if(player.storage._ichiban_no_takaramono) return 'cancel2';
						return 1;
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('yui_lieyin');
						player.addTempSkill('yui_lieyin'+result.index,'phaseUseEnd')
					}
				},
			},
			yui_lieyin0:{
				mod:{
					cardname:function(card){
						if(get.color(card)=='red') return 'sha';
					},
				},
			},
			yui_lieyin1:{
				mod:{
					cardname:function(card){
						if(card.name=='sha') return 'juedou';
					},
				},
			},
			yui_takaramono:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'key',
				filter:function(event,player){
					var num=0;
					if(player.hp<=1) num++;
					if(game.dead.length>0) num++;
					if(num!=1) return num>1;
					var draw=0;
					player.getAllHistory('gain',function(evt){
						if(evt.getParent(2).name=='yui_jiang') draw+=evt.cards.length;
					});
					return draw>=3;
				},
				content:function(){
					player.awakenSkill('yui_takaramono');
					player.addSkill('yui_yinhang');
					player.storage._ichiban_no_takaramono=true;
					player.gainMaxHp();
					player.recover();
				},
				derivation:'yui_yinhang',
			},
			yui_yinhang:{
				trigger:{player:'changeHp'},
				locked:true,
				direct:true,
				line:{color:[253, 153, 182]},
				content:function(){
					'step 0'
					event.count=Math.abs(trigger.num);
					'step 1'
					event.count--;
					player.chooseTarget([1,2],get.prompt('yui_yinhang'),'令至多两名角色各摸一张牌').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.logSkill('yui_yinhang',targets,lib.skill.yui_yinhang.line);
						game.asyncDraw(targets);
					}
					else event.finish();
					'step 3'
					game.delay();
					if(event.count>0) event.goto(1);
				},
			},
			yoshino_jueyi:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(lib.filter.notMe,get.prompt2('yoshino_jueyi')).set('ai',function(target){
						var player=_status.event.player;
						if(get.damageEffect(target,player,player)<0) return 0;
						var att=get.attitude(player,target);
						if(att>0) return 0;
						if(att==0) return 0.1;
						var eff=0;
						var hs=player.getCards('h');
						for(var i=0;i<hs.length;i++){
							if(player.canUse(hs[i],target)){
								var eff2=get.effect(target,hs[i],player,player);
								if(eff2>0) eff+=eff2;
							}
						}
						return -att/(1+eff);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('yoshino_jueyi',target);
						player.draw();
					}
					else event.finish();
					'step 2'
					player.chooseToPSS(target);
					'step 3'
					if(result.tie) event.goto(2);
					else if(result.bool) target.damage();
					else target.addTempSkill('yoshino_fail','phaseUseEnd');
				},
			},
			yoshino_fail:{
				mod:{
					targetEnabled:function(card,player,target){
						if(player==_status.currentPhase) return false;
					},
				},
			},
			kengo_weishang:{
				locked:false,
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&player.hasDisabledSlot(1)) return num+1;
					},
					globalFrom:function(from,to,distance){
						if(from.hasDisabledSlot(4)) return distance-1;
					},
					globalTo:function(from,to,distance){
						if(to.hasDisabledSlot(3)) return distance+1;
					},
				},
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var list=['equip1','equip2','equip3','equip4','equip5'];
					for(var i=0;i<list.length;i++){
						if(player.hasEnabledSlot(list[i])&&(!player.storage.kengo_guidui2||!player.storage.kengo_guidui2.includes(list[i]))) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var list=['equip1','equip2','equip3','equip4','equip5'];
					for(var i=0;i<list.length;i++){
						if(!player.hasEnabledSlot(list[i])||player.storage.kengo_guidui2&&player.storage.kengo_guidui2.includes(list[i])) list.splice(i--,1);
					}
					player.chooseControl(list).set('prompt','请选择废除一个装备栏').ai=function(){
						if(list.includes('equip1')&&player.hasEmptySlot('equip1')&&player.countCards('h',function(card){
							return card.name=='sha'&&player.getUseValue(card)>0
						})) return 'equip1';
						if(list.includes('equip3')&&player.hasEmptySlot('equip3')) return 'equip3';
						if(list.includes('equip4')&&player.hasEmptySlot('equip4')) return 'equip4';
						if(list.includes('equip5')&&player.hasEmptySlot('equip5')) return 'equip5';
						if(list.includes('equip2')&&player.hasEmptySlot('equip2')) return 'equip2';
						return list.randomGet();
					};
					'step 1'
					player.disableEquip(result.control);
					player.draw(2);
				},
				group:['kengo_weishang_sha','kengo_weishang_shan'],
				ai:{
					order:10,
					result:{player:1},
				},
			},
			kengo_weishang_sha:{
				trigger:{player:'useCardToPlayered'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&player.hasDisabledSlot(1)&&event.target.countCards('he')>0;
				},
				logTarget:'target',
				content:function(){
					trigger.target.chooseToDiscard('he',true);
				},
			},
			kengo_weishang_shan:{
				enable:['chooseToUse','chooseToRespond'],
				viewAs:{name:'shan'},
				filterCard:true,
				position:'hes',
				prompt:'将一张牌当做闪使用或打出',
				viewAsFilter:function(player){
					return player.hasDisabledSlot(2)&&player.countCards('hes')>0;
				},
				check:function(card){
					return 1/Math.max(0.1,get.value(card));
				},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						return player.hasDisabledSlot(2)&&player.countCards('he')>0;
					},
				},
			},
			kengo_guidui:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return player.countDisabledSlot()>0;
				},
				content:function(){
					var list=[];
					for(var i=1;i<=5;i++){
						for(var j=0;j<player.countDisabledSlot(i);j++){
							list.push('equip'+i)
						}
					}
					player.enableEquip(list);
					if(!player.storage.kengo_guidui2) player.storage.kengo_guidui2=[];
					player.storage.kengo_guidui2.addArray(list);
				},
			},
			kengo_guidui2:{onremove:true},
			iwasawa_yinhang:{
				trigger:{player:'changeHp'},
				locked:true,
				direct:true,
				line:{color:[235, 96, 138]},
				content:function(){
					'step 0'
					event.count=Math.abs(trigger.num);
					'step 1'
					event.count--;
					player.chooseTarget([1,2],get.prompt('iwasawa_yinhang'),'令至多两名角色各摸一张牌').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var targets=result.targets;
						targets.sortBySeat();
						player.logSkill('iwasawa_yinhang',targets,lib.skill.iwasawa_yinhang.line);
						game.asyncDraw(targets);
					}
					else event.finish();
					'step 3'
					game.delay();
					if(event.count>0) event.goto(1);
				},
			},
			iwasawa_mysong:{
				trigger:{player:['phaseBeginStart','phaseAfter','dyingBefore']},
				forced:true,
				filter:function(event,player){
					return event.name=='dying'||player.hp<1;
				},
				content:function(){
					if(trigger.name=='dying') trigger.cancel();
					else if(event.triggername=='phaseBeginStart') player.addTempSkill('iwasawa_fenyin');
					else player.die();
				},
				nobracket:true,
				derivation:'iwasawa_fenyin',
			},
			iwasawa_refenyin:{
				audio:2,
				audioname2:{
					wufan:'refenyin_wufan',
				},
				trigger:{global:['loseAfter','cardsDiscardAfter','equipAfter']},
				forced:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					var cards=event.getd();
					var list=[];
					for(var i=0;i<cards.length;i++){
						var card=cards[i];
						list.add(card.suit);
					}
					game.getGlobalHistory('cardMove',function(evt){
						if(evt==event||evt.getParent()==event||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
						if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
						for(var i=0;i<evt.cards.length;i++){
							var card=evt.cards[i];
							list.remove(card.suit);
						}
					});
					return list.length>0;
				},
				content:function(){
					var list=[];
					var list2=[];
					var cards=trigger.getd();
					for(var i=0;i<cards.length;i++){
						var card=cards[i];
						var suit=card.suit;
						list.add(suit);
						list2.add(suit);
					}
					game.getGlobalHistory('cardMove',function(evt){
						if(evt==trigger||evt.getParent()==trigger||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
						if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
						for(var i=0;i<evt.cards.length;i++){
							var card=evt.cards[i];
							var suit=card.suit;
							list.remove(suit);
							list2.add(suit);
						}
					});
					list2.sort();
					player.draw(list.length);
					player.storage.iwasawa_refenyin_mark=list2;
					player.addTempSkill('iwasawa_refenyin_mark');
					player.markSkill('iwasawa_refenyin_mark');
				},
				subSkill:{
					mark:{
						onremove:true,
						intro:{
							content:function(s){
								var str='本回合已经进入过弃牌堆的卡牌的花色：';
								for(var i=0;i<s.length;i++){
									str+=get.translation(s[i]);
								}
								return str;
							},
						},
					},
				},
			},
			iwasawa_fenyin:{
				mod:{
					aiOrder:function(player,card,num){
						if(typeof card=='object'&&player==_status.currentPhase){
							var evt=player.getLastUsed();
							if(evt&&evt.card&&get.color(evt.card)!='none'&&get.color(card)!='none'&&get.color(evt.card)!=get.color(card)){
								return num+10;
							}
						}
					},
				},
				audio:2,
				trigger:{player:'useCard'},
				frequent:true,
				//usable:3,
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					var evt=player.getLastUsed(1);
					if(!evt) return false;
					var color1=get.color(evt.card);
					var color2=get.color(event.card);
					return color1&&color2&&color1!='none'&&color2!='none'&&color1!=color2;
				},
				content:function(){
					player.draw();
				},
				ai:{
					threaten:function(player,target){
						if(target.hp<1) return 3;
						return 1;
					},
				},
			},
			masato_baoquan:{
				trigger:{source:'damageBefore'},
				forced:true,
				content:function(){
					'step 0'
					player.chooseControl('防止伤害','增加伤害').set('prompt','暴拳：防止即将对'+get.translation(trigger.player)+'造成的伤害，或失去1点体力上限并令此伤害+2').set('choice',get.attitude(player,trigger.player)>=0?0:1).set('ai',function(){return _status.event.choice});
					'step 1'
					if(result.control=='增加伤害'){
						player.loseMaxHp();
						trigger.num+=2;
					}
					else trigger.cancel();
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(target&&get.attitude(player,target)>0&&get.tag(card,'damage')) return 'zeroplayertarget';
						},
					},
				},
			},
			yusa_yanyi:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return get.distance(player,target)<=player.hp;
				},
				selectTarget:function(){
					return [1,Math.max(_status.event.player.getAttackRange())];
				},
				line:'thunder',
				content:function(){
					'step 0'
					if(target.isHealthy()){
						player.draw();
						event.finish();
					}
					else{
						var name=get.translation(player);
						target.chooseControl().set('choiceList',[
							'令'+name+'摸一张牌',
							'回复1点体力，然后交给'+name+'一张牌',
						]).set('ai',function(){
							return 1;
						});
					}
					'step 1'
					if(result.index==0){
						player.draw();
						event.finish();
					}
					else{
						target.recover();
					}
					'step 2'
					if(target!=player&&target.countCards('he')>0){
						target.chooseCard('交给'+get.translation(player)+'一张牌','he',true);
					}
					else event.finish();
					'step 3'
					target.give(result.cards,player,'giveAuto');
				},
				ai:{
					order:10,
					result:{
						player:function(player,target){
							return target.isHealthy()?1:0;
						},
						target:function(player,target){
							if(target.isHealthy()) return 0;
							return get.recoverEffect(target,player,target);
						},
					},
				},
			},
			yusa_misa:{
				charlotte:true,
				trigger:{player:'useSkillAfter'},
				filter:function(event,player){
					return event.skill=='yusa_yanyi'&&!player.storage.dualside_over&&Array.isArray(player.storage.dualside);
				},
				content:function(){
					player.turnOver();
				},
			},
			misa_yusa:{
				charlotte:true,
				trigger:{player:'misa_yehuoAfter'},
				filter:function(event,player){
					return event.bool===true&&!player.storage.dualside_over&&Array.isArray(player.storage.dualside);
				},
				content:function(){
					player.turnOver();
				},
			},
			misa_yehuo:{
				charlotte:true,
				trigger:{global:'phaseDrawBegin1'},
				direct:true,
				locked:true,
				line:{color:[236,137,52]},
				filter:function(event,player){
					var target=event.player;
					return player.inRange(target)&&player.countCards('he')>=get.distance(player,target);
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he',get.distance(player,trigger.player)||1,get.prompt2('misa_yehuo',trigger.player));
					next.set('logSkill',['misa_yehuo',trigger.player,'fire']);
					next.set('ai',function(card){
						var val=_status.event.val;
						for(var i=0;i<ui.selected.cards.length;i++){
							val-=get.value(ui.selected.cards[i]);
						}
						return val-get.value(card);
					});
					next.set('val',-2*get.attitude(player,trigger.player))
					'step 1'
					if(result.bool){
						event.bool=true;
						if(trigger.numFixed) event._result={index:0};
						else{
							var name=get.translation(trigger.player);
							player.chooseControl().set('choiceList',[
								'对'+name+'造成1点火属性伤害',
								'令'+name+'此出牌阶段的额定摸牌数改为0'
							]);
						}
					}
					else event.finish();
					'step 2'
					if(result.index==0) trigger.player.damage('fire');
					else trigger.changeToZero();
				},
				ai:{
					fireAttack:true,
				},
			},
			nsqiyue:{
				trigger:{global:['turnOverEnd','linkEnd','showCharacterEnd','hideCharacterEnd','removeCharacterEnd']},
				forced:true,
				content:function(){player.draw()},
			},
			nsxuezhu:{
				trigger:{player:'damageEnd',source:'damageSource'},
				filter:function(event,player){
					return event.player.isIn();
				},
				logTarget:'player',
				content:function(){
					trigger.player.draw(2);
					trigger.player.turnOver();
				},
				check:function(event,player){
					return !event.player.isTurnedOver()||get.attitude(player,event.player)>0;
				},
			},
			yukine_wenzhou:{
				trigger:{global:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return event.player.countCards('he')>0;
				},
				content:function(){
					"step 0"
					event.forceDie=true;
					var ask=trigger.player.chooseCard('he',get.prompt('yukine_wenzhou'));
					if(player==trigger.player){
						ask.set('prompt2','选择一张牌，然后从牌堆中获得一张与此牌类型相同的牌。本回合内使用与此牌类型相同的牌时不可被其他角色响应。');
					}
					else ask.set('prompt2','将一张牌交给'+get.translation(player)+'然后其可以选择：交给你一张牌；或令你从牌堆中获得一张与此牌类型相同的牌，且你本回合内使用与此牌类型相同的牌时不可被响应。');
					ask.set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0) return 10-get.value(card);
						return -1;
					});
					"step 1"
					if(result.bool){
						player.logSkill('yukine_wenzhou',trigger.player);
						event.type=get.type(result.cards[0],'trick');
						if(trigger.player!=player) trigger.player.give(result.cards,player,'giveAuto');
					}
					else event.finish();
					"step 2"
					if(player==trigger.player||player.countCards('he')==0){
						event._result={index:1};
					}
					else{
						player.chooseControl().set('choiceList',[
							'将一张牌交给'+get.translation(trigger.player),
							'令'+get.translation(trigger.player)+'从牌堆中获得一张'+get.translation(event.type)+'牌，且其本回合内使用与此牌名称相同的牌时不可被响应',
						]).set('forceDie',true).set('ai',function(){
							if(get.attitude(_status.event.player,_status.event.getTrigger().player)>0) return 1;
							return 0;
						});
					}
					"step 3"
					event.index=result.index;
					if(result.index==1){
						var magic=get.cardPile2(function(card){
							return get.type(card,'trick')==event.type;
						});
						if(magic){
							trigger.player.addTempSkill('yukine_magic','phaseUseEnd');
							trigger.player.storage.yukine_magic.add(magic.name);
							trigger.player.gain(magic,'draw');
						}
						else event.finish();
					}
					else player.chooseCard('he',true,'选择要交给'+get.translation(trigger.player)+'的牌').set('ai',function(card){
						return -get.value(card,_status.event.getTrigger().player);
					});
					"step 4"
					if(event.index==1) game.updateRoundNumber();
					else if(result.bool) player.give(result.cards,trigger.player,'giveAuto');
				},
			},
			yukine_magic:{
				trigger:{player:'useCard'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return player.storage.yukine_magic&&player.storage.yukine_magic.includes(event.card.name);
				},
				content:function(){
					trigger.directHit.addArray(game.filterPlayer(function(current){
						if(player!=current) return true;
						return !player.hasSkill('yukine_wenzhou');
					}));
				},
				onremove:true,
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						return player.storage.yukine_magic&&player.storage.yukine_magic.includes(arg.card.name);
					},
				},
			},
			komari_tiankou:{
				trigger:{
					player:'useCard2',
					target:'useCardToTarget',
				},
				forced:true,
				filter:function(event,player,name){
					if(name=='useCardToTarget'&&player==event.player) return false;
					if(get.color(event.card)!='red') return false;
					if(get.tag(event.card,'damage')) return false;
					return ['basic','trick'].includes(get.type(event.card));
				},
				content:function(){
					'step 0'
					var info=get.info(trigger.card);
					var bool=true;
					if(info.multitarget||info.allowMultiple===false) bool=false;
					else{
						var list=game.filterPlayer(function(current){
							return !trigger.targets.includes(current)&&lib.filter.targetEnabled2(trigger.card,trigger.player,current);
						})
						if(!list.length) bool=false;
					}
					if(bool) player.chooseTarget('甜口：为'+get.translation(trigger.card)+'增加一个额外目标，或点【取消】摸一张牌。',function(candy,komari,rin){
						return _status.event.rin_chan.includes(rin);
					}).set('rin_chan',list).set('ai',function(target){
						var evt=_status.event;
						return get.effect(target,evt.candy,evt.source,evt.player);
					}).set('candy',trigger.card).set('',trigger.player);
					else event._result={bool:false};
					'step 1'
					if(result.bool){
						var rin=result.targets[0];
						trigger.targets.push(rin);
						player.line(rin,{color:[255, 224,172]});
					}
					else player.draw();
				},
			},
			komari_xueshang:{
				trigger:{global:'die'},
				forced:true,
				skillAnimation:true,
				chargingSkill:true,
				filter:function(event,player){
					return player.hp>0;
				},
				animationColor:'metal',
				content:function(){
					'step 0'
					player.addSkill('riki_xueshang');
					var map={};
					var list=[];
					for(var i=1;i<=player.hp;i++){
						var cn=get.cnNumber(i,true);
						map[cn]=i;
						list.push(cn);
					}
					event.map=map;
					player.chooseControl(list,function(){
						return '一';
					}).set('prompt','血殇：请选择自己受到的伤害的点数');
					'step 1'
					var num=event.map[result.control]||1;
					event.num=num>1?2:1;
					event.list=game.filterPlayer(function(current){
						return current!=player;
					}).sortBySeat();
					player.damage(num);
					player.line(event.list,{color:[255, 224,172]});
					'step 2'
					if(!player.hasSkill(event.name)) return;
					else{
						event.list.shift().damage(num);
						if(event.list.length) event.redo();
					}
				},
			},
			riki_xueshang:{
				trigger:{global:'dying'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return event.getParent(2).name=='komari_xueshang'&&event.getParent(2).player==player;
				},
				content:function(){
					player.removeSkill('komari_xueshang');
					player.gainMaxHp(true);
					player.recover();
				},
			},
			umi_chaofan:{
				enable:'phaseUse',
				usable:1,
				selectCard:2,
				complexCard:true,
				filter:function(summer,umi){
					return umi.countCards('h')>1;
				},
				check:function(ingredient){
					return 7-get.value(ingredient);
				},
				filterCard:function(ingredient){
					if(ui.selected.cards.length) return get.suit(ingredient)!=get.suit(ui.selected.cards[0]);
					return true;
				},
				line:{color:[251, 193, 217]},
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.hp>2) target.recover();
					else if(player.hp==2) target.draw(2);
					else target.damage('fire','nosource');
				},
				ai:{
					order:2,
					result:{
						target:function(umi,takahara){
							if(umi.hp>2&&takahara.isDamaged()) return 2.2;
							if(umi.hp==2&&!takahara.hasSkillTag('nogain')) return 2;
							if(umi.hp<2) return get.damageEffect(takahara,umi,umi,'fire');
						},
					},
				},
			},
			umi_lunhui:{
				trigger:{global:'phaseAfter'},
				filter:function(summer,umi){
					return summer.player!=umi&&umi.countCards('h')<umi.hp;
				},
				line:{color:[251, 193, 217]},
				logTarget:'player',
				charlotte:true,
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'
					player.draw(2);
					player.insertPhase();
					player.storage.umi_shiroha=trigger.player;
					player.addTempSkill('umi_shiroha');
				},
			},
			umi_shiroha:{
				mark:'character',
				intro:{
					content:'到$的距离视为1',
				},
				onremove:true,
				charlotte:true,
				mod:{
					globalFrom:function(umi,shiroha){
						if(umi.storage.umi_shiroha==shiroha) return -Infinity;
					},
				},
			},
			umi_qihuan:{
				enable:'chooseToUse',
				filter:function(summer,umi){
					return summer.type=='dying'&&umi.isDying();
				},
				limited:true,
				skillAnimation:true,
				charlotte:true,
				animationColor:'key',
				content:function(){
					'step 0'
					player.awakenSkill('umi_qihuan');
					player.reinit('key_umi','key_umi2');
					player.recover(game.countGroup()||1);
					if(!game.dead.length) event.finish();
					'step 1'
					var chara=[];
					var skills=[];
					for(var i=0;i<game.dead.length;i++){
						var name=game.dead[i].name;
						var name2=game.dead[i].name2;
						var skill=[];
						if(name&&lib.character[name]) skill.addArray(lib.character[name][3]);
						if(name2&&lib.character[name2]) skill.addArray(lib.character[name2][3]);
						if(skill.length){
							chara.push(game.dead[i]);
							skills.push(skill);
						}
					}
					if(!chara.length) event.finish();
					event.chara=chara;
					event.skills=skills;
					event.chosen=[];
					'step 2'
					var next=player.chooseTarget('是否获得一名已死亡角色的一个技能？');
					next.set('chara',event.chara);
					next.set('skills',event.skills);
					next.set('chosen',event.chosen);
					next.set('filterTarget',function(card,player,target){
						if(target.isAlive()) return false;
						var evt=_status.event;
						if(!evt.chosen.length) return true;
						var skills=evt.skills[evt.chara.indexOf(target)];
						if(skills.length==1&&skills[0]==evt.chosen[0]) return false;
						return true;
					});
					next.set('deadTarget',true);
					next.set('ai',function(){return Math.random()});
					'step 3'
					if(!result.bool) event.finish();
					else{
						event.temp=result.targets[0];
						var list=event.skills[event.chara.indexOf(result.targets[0])];
						result.targets[0].line(player,{color:[251, 193, 217]})
						list.removeArray(event.chosen);
						player.chooseControl(list).set('prompt','选择获得一个技能');
					}
					'step 4'
					player.addSkill(result.control,get.groupnature(event.temp.group)||'key');
					player.addSkill(result.control);
					var info=get.info(result.control);
					if(info.zhuSkill){
						if(!player.storage.zhuSkill_umi_qihuan) player.storage.zhuSkill_umi_qihuan=[];
						player.storage.zhuSkill_umi_qihuan.push(result.control);
					}
					event.chosen.push(result.control);
					if(event.chosen.length<2) event.goto(2);
				},
				ai:{
					order:10,
					save:true,
					skillTagFilter:function(player,tag,target){
						return player==target;
					},
					result:{
						player:1,
					},
				},
			},
			haruko_haofang:{
				mod:{
					cardname:function(card,player,name){
						if(lib.card[card.name].type=='delay') return 'wuzhong';
					},
				},
				trigger:{player:'drawBefore'},
				forced:true,
				filter:function(event,player){
					return event.getParent().name=='wuzhong';
				},
				content:function(){trigger.num+=2},
			},
			haruko_zhuishi:{
				trigger:{global:'phaseJudgeBegin'},
				filter:function(misuzu){
					return misuzu.player.countCards('j')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.player)>1;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.gain(trigger.player.getCards('j'),trigger.player,'give','bySelf');
					'step 1'
					if(player.hp>1) player.loseHp();
				},
			},
			yuri_xingdong:{
				audio:3,
				group:'yuri_xingdong_gain',
				subSkill:{
					mark:{
						mark:true,
						marktext:'令',
						intro:{
							content:'跳过下个回合的判定阶段和摸牌阶段',
						},
					},
					gain:{
						audio:2,
						trigger:{player:'phaseUseBegin'},
						forced:true,
						content:function(){
							'step 0'
							var card=get.cardPile(function(card){
								return card.name=='sha'||get.type(card)=='trick';
							});
							if(card) player.gain(card,'gain2','log');
							'step 1'
							game.updateRoundNumber();
						},
					},
				},
				enable:'phaseUse',
				usable:1,
				locked:true,
				filter:function(event,player){
					return player.countCards('h',lib.skill.yuri_xingdong.filterCard);
				},
				filterCard:function(card){
					return card.name=='sha'||get.type(card)=='trick';
				},
				check:function(card){return 1},
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:0,
				content:function(){
					'step 0'
					player.give(cards,target);
					'step 1'
					if(!target.getCards('h').includes(cards[0])) event._result={bool:false};
					else target.chooseUseTarget(cards[0],game.filterPlayer(function(current){
						return current!=player;
					}),'请使用得到的牌，或者跳过下回合的判定阶段和摸牌阶段');
					'step 2'
					if(result.bool) game.asyncDraw([player,target]);
					else{
						target.addTempSkill('yuri_xingdong_mark','phaseJudgeSkipped');
						target.skip('phaseJudge');
						target.skip('phaseDraw');
						target.addTempSkill('zhengjing3',{player:'phaseAfter'});
						event.finish();
					}
					'step 3'
					game.delay();
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							var card=ui.selected.cards[0];
							if(target.hasSkill('pingkou')) return 1;
							if(!card) return 0;
							var info=get.info(card);
							if(info.selectTarget==-1){
								var eff=0;
								game.countPlayer(function(current){
									if(current!=player&&target.canUse(card,current)) eff+=get.effect(current,card,target,target);
								});
								if(eff>0||get.value(card)<3) return eff;
								return 0;
							}
							else if(game.hasPlayer(function(current){
								return current!=player&&target.canUse(card,current)&&get.effect(current,card,target,target)>0
							})) return 1.5;
							else if(get.value(card)<3) return -1;
							return 0;
						},
					},
				},
			},
			yuri_wangxi:{
				audio:2,
				trigger:{global:'dieAfter'},
				direct:true,
				limited:true,
				mark:false,
				init:function(player){
					if(player.hasZhuSkill('yuri_wangxi')){
						player.markSkill('yuri_wangxi');
						player.storage.yuri_wangxi=false;
					}
				},
				zhuSkill:true,
				unique:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					if(get.mode()!='identity') return false;
					if(!player.hasZhuSkill('yuri_wangxi')) return false;
					if(event.player.isIn()) return false;
					if(event.player.identity=='mingzhong') return false;
					var evt=event.getParent('yuri_xingdong');
					return evt&&evt.name=='yuri_xingdong'&&evt.player==player;
				},
				content:function(){
					'step 0'
					trigger.player.chooseBool('是否发动'+get.translation(player)+'的【忘隙】？').forceDie=true;
					'step 1'
					if(result.bool){
						player.logSkill('yuri_wangxi',trigger.player);
						player.awakenSkill('yuri_wangxi');
						var identity='zhong';
						if(_status.mode=='purple'){
							if(['rNei','bNei'].includes(player.identity)) identity=player.identity;
							else if(['rZhu','rZhong','bNei'].includes(player.identity)) identity='rZhong';
							else identity='bZhong';
						}
						game.broadcastAll(function(source,identity){
							if(source.node.dieidentity){
								source.node.dieidentity.innerHTML=get.translation(identity+2);
							}
							source.revive(2,false);
							source.identity=identity;
							source.setIdentity();
						},trigger.player,identity);
						trigger.player.changeGroup(player.group);
						trigger.player.draw();
						var evt=trigger.getParent('damage');
						if(evt.untrigger) evt.untrigger(false,trigger.player);
						game.addVideo('setIdentity',trigger.player,'zhong');
					}
				},
			},
			nk_shekong:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:true,
				selectCard:function(){
					if(ui.selected.targets.length) return [1,ui.selected.targets[0].countCards('he')];
					return [1,Infinity];
				},
				filterTarget:function(event,player,target){
					return target!=player&&target.countCards('he')>=Math.max(1,ui.selected.cards.length);
				},
				check:function(card){
					if(!game.hasPlayer(function(current){
					return current!=_status.event.player&&get.attitude(_status.event.player,current)<0&&current.countCards('he')>ui.selected.cards.length;
				})) return 0;
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					event.cardsx=cards.slice(0);
					var num=get.cnNumber(cards.length);
					var trans=get.translation(player);
					var prompt=('弃置'+num+'张牌，然后'+trans+'摸一张牌');
					if(cards.length>1) prompt+=('；或弃置一张牌，然后'+trans+'摸'+num+'张牌');
					var next=target.chooseToDiscard(prompt,'he',true);
					next.numx=cards.length;
					next.selectCard=function(){
						if(ui.selected.cards.length>1) return _status.event.numx;
						return [1,_status.event.numx];
					};
					next.complexCard=true;
					next.ai=function(card){
						if(ui.selected.cards.length==0||(_status.event.player.countCards('he',function(cardxq){
							return get.value(cardxq)<7;
						})>=_status.event.numx)) return 7-get.value(card);
						return -1;
					};
					'step 1'
					if(result.bool){
						if(result.cards.length==cards.length) player.draw();
						else player.draw(cards.length);
						event.cardsx.addArray(result.cards);
						for(var i=0;i<event.cardsx.length;i++){
							if(get.position(event.cardsx[i])!='d') event.cardsx.splice(i--,1);
						}
					}
					else event.finish();
					'step 2'
					if(event.cardsx.length){
						player.chooseButton(['请按顺序将卡牌置于牌堆顶（先选择的在上）',event.cardsx],true,event.cardsx.length);
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var cardsx=result.links;
						while(cardsx.length){
							var card=cardsx.pop();
							card.fix();
							ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
						}
					}
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
				},
			},
			key_huanjie:{
				trigger:{player:['drawBegin','judgeBegin']},
				forced:true,
				silent:true,
				popup:false,
				lastDo:true,
				filter:function(event){
					return event.name=='draw'||!event.directresult;
				},
				content:function(){
					if(trigger.name=='draw'){
						if(trigger.bottom) trigger.bottom=false;
						else trigger.bottom=true;
					}
					else trigger.directresult=get.bottomCards()[0];
				},
			},
			lucia_duqu:{
				trigger:{
					player:['damage','loseHpBefore','useCardBefore'],
					source:'damage',
				},
				forced:true,
				charlotte:true,
				filter:function(event,player,onrewrite){
					if(onrewrite=='loseHpBefore'){
						return event.type=='du';
					}
					return event.source!=undefined&&event.source!=event.player;
				},
				content:function(){
					var onrewrite=event.triggername;
					if(onrewrite=='loseHpBefore'){
						trigger.cancel();
						player.recover(trigger.num);
					}
					else{
						var another=trigger[trigger.source==player?'player':'source'];
						player.line(another,{color:[220, 90, 139]});
						another.gain(game.createCard2('du'),'gain2');
					}
				},
				ai:{
					usedu:true,
				},
			},
			lucia_zhenren:{
				trigger:{global:'phaseJieshuBegin'},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					return player.countCards('e')>0;
				},
				content:function(){
					'step 0'
					var es=player.getCards('e');
					event.count=es.length;
					player.discard(es);
					'step 1'
					event.count--;
					if(game.hasPlayer(function(current){
						return current.countDiscardableCards(player,'ej')>0;
					})){
						player.chooseTarget('请选择一名角色，弃置其装备区或判定区内的一张牌。',true,function(card,player,target){
							return target.countDiscardableCards(player,'ej')>0;
						}).ai=function(target){
							var att=get.attitude(_status.event.player,target);
							if(target.countCards('j')&&att>0) return att*1.5;
							return -att;
						};
					}
					else event.finish();
					'step 2'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,{color:[220, 90, 139]});
						player.discardPlayerCard(target,'ej',true);
						if(event.count) event.goto(1);
					}
				},
			},
			noname_zhuyuan:{
				enable:"phaseUse",
				position:"he",
				selectCard:4,
				complexCard:true,
				charlotte:true,
				prompt:"将4张花色各不同的牌交一名角色并令你与其获得【铁骑】和【激昂】直到各自回合结束",
				check:function(card){
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
					if(player.hp==player.maxHp||player.countCards('h')<=1){
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hasSkill('haoshi')&&
								!players[i].isTurnedOver()&&
								!players[i].hasJudge('lebu')&&
								get.attitude(player,players[i])>=3&&
								get.attitude(players[i],player)>=3){
								return 11-get.value(card);
							}
						}
						if(player.countCards('h')>player.hp) return 10-get.value(card);
						if(player.countCards('h')>2) return 6-get.value(card);
						return -1;
					}
					return 10-get.value(card);
				},
				filterCard:function(card,player){
					var suit=get.suit(card,player);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i],player)==suit) return false;
					}
					return true;
				},
				filter:function(event,player){
					var suits=[];
					player.countCards('he',function(card){
						if(suits.length<4) suits.add(get.suit(card,player));
					});
					if(suits.length<4) return false;
					var stat=player.getStat();
					if(!stat.noname_zhuyuan) return true;
					return game.hasPlayer(function(current){
						return current!=player&&!stat.noname_zhuyuan.includes(current);
					});
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var stat=player.getStat();
					if(!stat.noname_zhuyuan) return true;
					return !stat.noname_zhuyuan.includes(target);
				},
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					"step 0"
					var stat=player.getStat();
					if(!stat.noname_zhuyuan) stat.noname_zhuyuan=[];
					stat.noname_zhuyuan.push(target);
					player.give(cards,target,'visible');
					"step 1"
					game.log(player,'获得了技能','#g【铁骑】');
					player.addTempSkill('noname_retieji',{player:'phaseAfter'});
					game.log(player,'获得了技能','#g【激昂】');
					player.addTempSkill('noname_jiang',{player:'phaseAfter'});
					game.log(target,'获得了技能','#g【铁骑】');
					target.addTempSkill('noname_retieji',{player:'phaseAfter'});
					game.log(target,'获得了技能','#g【激昂】');
					target.addTempSkill('noname_jiang',{player:'phaseAfter'});
				},
				mod:{
					targetInRange:function(card,player){
						var stat=player.getStat();
						if(stat.noname_zhuyuan) return true;
					},
					cardUsable:function(card,player){
						var stat=player.getStat();
						if(!stat.noname_zhuyuan) return Infinity;
					},
				},
				ai:{
					order:5,
					result:{
						target:10,
					},
				},
			},
			noname_retieji:{
				inherit:"retieji",
				mark:true,
				marktext:"<img style=width:21px src="+lib.assetURL+"image/character/noname_machao.png>",
				intro:{
					name:"小无·铁骑",
					content:"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
				},
			},
			noname_jiang:{
				inherit:"jiang",
				mark:true,
				marktext:"<img style=width:21px src="+lib.assetURL+"image/character/noname_sunce.png>",
				intro:{
					name:"小无·激昂",
					content:"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
				},
			},
			noname_duocai:{
				trigger:{
					global:["loseAfter","loseAsyncAfter"],
				},
				filter:function(event,player){
					if(event.type!='discard'||event.getlx===false) return false;
					var evt=event.getl(player);
					var cards=event.cards.slice(0);
					if(evt&&evt.cards) cards.removeArray(evt.cards);
					return cards.filterInD('d').length>0&&!player.hasSkill('noname_duocai2');
				},
				direct:true,
				charlotte:true,
				content:function(){
					"step 0"
					if(trigger.delay==false&&player!=game.me&&!player.isOnline()) game.delay();
					var evt=trigger.getl(player);
					var cards=trigger.cards.slice(0);
					cards.removeArray(evt.cards);
					player.chooseButton([get.prompt('noname_duocai'),cards],[1,cards.length]);
					"step 1"
					if(result.bool){
						player.logSkill('noname_duocai');
						player.addTempSkill('noname_duocai2');
						player.gain(result.links,'gain2');
						if(result.links.length>2){
							var filterTarget=function(card,player,target){
								return target!=player&&target.countDiscardableCards(player,'hej')>0;
							};
							if(game.hasPlayer(function(current){
								return filterTarget(null,player,current);
							})){
								player.chooseTarget('弃置一名其他角色区域内的一张牌',true,filterTarget).set('ai',function(target){
									var player=_status.event.player;
									return get.effect(target,{name:'guohe'},player,player);
								});
							}
							else event.finish();
						}
						else{
							if(result.links.length==2) player.draw();
							else player.recover();
							event.finish();
						}
					}
					else event.finish();
					"step 2"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.discardPlayerCard(target,'hej',true);
					}
				},
			},
			noname_duocai2:{charlotte:true},
			nsbizhao:{
				trigger:{player:'showCharacterAfter'},
				forced:true,
				hiddenSkill:true,
				filter:function(event,player){
					return event.toShow&&event.toShow.includes('ns_yanghu')&&player!=_status.currentPhase;
				},
				content:function(){
					player.addTempSkill('nsbizhao2',{player:'phaseBeginStart'});
				},
			},
			nsbizhao2:{
				charlotte:true,
				mark:true,
				intro:{content:'其他角色至自己的距离+1'},
				mod:{
					globalTo:function(source,player,distance){
						return distance+1;
					},
				},
			},
			nsqingde:{
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				usable:1,
				filter:function(event,player){
					if(!event.card||!event.cards||event.player==event.source||(event.card.name!='sha'&&
						get.type(event.card)!='trick')||event.cards.filterInD().length!=1) return false;
					var target=lib.skill.nsqingde.logTarget(event,player);
					if(player.hasSkillTag('noCompareSource')||target.hasSkillTag('noCompareTarget')) return false;
					return target.countCards('h')>0;
				},
				logTarget:function(event,player){
					if(player==event.source) return event.player;
					return event.source;
				},
				check:function(event,player){
					var target=lib.skill.nsqingde.logTarget(event,player);
					return get.attitude(player,target)<=0;
				},
				content:function(){
					'step 0'
					var target=lib.skill.nsqingde.logTarget(trigger,player);
					event.target=target
					var next=player.chooseToCompare(target);
					if(event.triggername=='damageSource') next.set('small',true);
					if(!next.fixedResult) next.fixedResult={};
					next.fixedResult[player.playerid]=trigger.cards.filterInD()[0];
					'step 1'
					if(result.tie){
						event.finish();
						return;
					}
					var i=result.bool;
					if(event.triggername=='damageSource') i=!i;
					event.target2=i?player:target;
					if(event.triggername=='damageSource') event.goto(3);
					else if(event.target2.isDamaged()) player.chooseBool('是否令'+get.translation(event.target2)+'回复1点体力？').set('ai',function(){
						var evt=_status.event.getParent();
						return get.attitude(evt.player,evt.target2)>0;
					});
					else event.finish();
					'step 2'
					if(result.bool) event.target2.recover();
					event.finish();
					'step 3'
					player.chooseBool('是否令'+get.translation(event.target2)+'摸两张牌？').set('ai',function(){
						var evt=_status.event.getParent();
						return get.attitude(evt.player,evt.target2)>0;
					});
					'step 4'
					if(result.bool) event.target2.draw(2);
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.storage.counttrigger&&target.storage.counttrigger.nsqingde) return;
							var num=get.number(card);
							if(typeof num=='number'){
								if(target.hasSkillTag('noCompareSource')||player.hasSkillTag('noCompareTarget')) return;
								var hs=player.getCards('h');
								if(card.cards) hs.removeArray(card.cards);
								if(ui.selected.cards) hs.removeArray(ui.selected.cards);
								if(!hs.length) return;
								for(var i of hs){
									if(get.number(i)>=num) return;
									if(player.hasSkill('tianbian')&&get.suit(card)=='heart') return;
								}
								return 'zerotarget';
							}
						},
					},
				},
			},
			nsyidi:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:true,
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					var player=_status.event.player;
					if(get.type(card,player)=='basic'){
						if(game.hasPlayer(function(current){
							return get.attitude(current,player)>0&&current.getUseValue(card)>player.getUseValue(card,null,true);
						})) return 5+Math.random();
						return 0;
					}
					if(game.hasPlayer(function(current){
						return get.attitude(current,player)>0&&!current.hasJudge('lebu')&&current.getUseValue(card)>player.getUseValue(card);
					})) return 4.7+Math.random();
					if(card.name=='wuxie'&&game.hasPlayer(function(current){
						return get.attitude(current,player)>0;
					})) return 5+Math.random();
					return 4-get.value(card);
				},
				content:function(){
					'step 0'
					player.give(cards,target,'visible');
					if(get.type(cards[0],player)!='basic'){
						player.draw();
						event.finish();
					}
					'step 1'
					if(target.getCards('h').includes(cards[0])&&target.hasUseTarget(cards[0])) target.chooseUseTarget(cards[0]);
				},
				ai:{
					order:7,
					result:{
						player:function(player,target){
							if(!ui.selected.cards.length||get.type(ui.selected.cards[0],player)=='basic') return 0;
							if(get.value(ui.selected.cards[0])<4) return 2;
							return 0.5;
						},
						target:1,
					},
				},
			},
			nsfuzhou:{
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					if(!player.storage.nstaiping&&player.getStat('skill').nsfuzhou) return false;
					return player.countCards('he',{color:'black'})>0;
				},
				filterCard:{color:'black'},
				filterTarget:function(card,player,target){
					return !target.hasJudge('nsfuzhou_card');
				},
				check:function(card){
					return 8-get.value(card);
				},
				prepare:'give',
				position:'he',
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					'step 0'
					target.addJudge({name:'nsfuzhou_card'},cards[0]);
					cards[0].storage.nsfuzhou_source=player;
					'step 1'
					game.delayx();
				},
				ai:{
					order:5,
						result:{
						target:function(player,target){
							if(player.storage.nsfuzhou_draw){
								if(get.attitude(player,target)>0&&player.countCards('he',function(card){
									return get.color(card)=='red';
								})){
									return 1;
								}
								return 0;
							}
							if(player.storage.nsfuzhou_damage) return -2;
							return -1.5;
						},
					},
				},
			},
			nsfuzhou_num:{
				charlotte:true,
				onremove:true,
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.nsfuzhou_num;
					},
				},
				intro:{
					content:function(num){
						return '手牌上限'+(num<0?'':'+')+num;
					},
				}
			},
			nsguidao:{
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('hes',function(card){
						if(player.storage.nstaiping||(_status.connectMode&&get.position(card)!='e')) return true;
						return get.color(card)=='black';
					})>0;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('nsguidao'),'hes',function(card,player){
						if(!player.storage.nstaiping&&get.color(card)!='black') return false;
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result;
						}
						else{
							return -result;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight','nsguidao','noOrdering');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1
					}
				}
			},
			nstaiping:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.getAllHistory('sourceDamage',function(evt){
						return evt.getParent().name=='nsfuzhou_card';
					}).length>1||player.getAllHistory('gain',function(evt){
						return evt.getParent(2).name=='nsfuzhou_card';
					}).length>1;
				},
				content:function(){
					player.awakenSkill('nstaiping');
					player.storage.nstaiping=true;
					if(player.getAllHistory('sourceDamage',function(evt){
						return evt.getParent().name=='nsfuzhou_card';
					}).length>1) player.storage.nsfuzhou_damage=true;
					if(player.getAllHistory('gain',function(evt){
						return evt.getParent(2).name=='nsfuzhou_card';
					}).length>1) player.storage.nsfuzhou_draw=true;
				},
				derivation:['nsfuzhou_damage','nsfuzhou_draw'],
			},
			nsweiyuan:{
				trigger:{player:'useCardToTargeted'},
				direct:true,
				filter:function(event,player){
					return player!=event.target&&event.targets&&event.targets.length==1&&event.target.isIn()
					&&player.isPhaseUsing()&&!player.hasSkill('nsweiyuan2')&&game.hasPlayer(function(current){
						return current!=player&&current!=event.target;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsweiyuan'),function(card,player,target){
						return target!=player&&target!=_status.event.getTrigger().target;
					}).set('ai',function(target){
						return Math.max(Math.random(),get.attitude(player,target));
					});
					'step 1'
					if(result.bool){
						player.addTempSkill('nsweiyuan2','phaseUseAfter');
						var target=result.targets[0];
						event.target=target;
						player.logSkill('nsweiyuan',target);
						target.chooseCard('he','交给'+get.translation(trigger.target)+'一张牌并受到1点伤害，或令'+get.translation(player)+'摸一张牌且可以重复使用牌').set('ai',function(card){
							if(_status.event.goon) return Math.random();
							return 0;
						}).set('goon',function(){
							if(get.attitude(target,player)>0) return false;
							return Math.random()>0.5;
						}());
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.gain(result.cards,trigger.target);
						target.damage();
					}
					else{
						player.addTempSkill('nsweiyuan_use');
						player.draw();
					}
				},
			},
			nsweiyuan2:{charlotte:true},
			nsweiyuan_use_backup:{},
			nsweiyuan_use:{
				enable:'phaseUse',
				charlotte:true,
				mod:{
					cardUsable:function(){
						if(_status.event.skill=='nsweiyuan_use_backup') return Infinity;
					},
					targetInRange:function(){
						if(_status.event.skill=='nsweiyuan_use_backup') return true;
					},
				},
				onChooseToUse:function(event){
					if(game.online||event.type!='phase') return;
					var list=[];
					event.player.getHistory('useCard',function(evt){
						var name=evt.card.name;
						var type=get.type(name);
						if(type!='basic'&&type!='trick') return;
						if(name=='sha'){
							var nature=evt.card.nature;
							switch(nature){
								case 'fire':name='huosha';break;
								case 'thunder':name='leisha';break;
								case 'kami':name='kamisha';break;
								case 'ice':name='icesha';break;
							}
						}
						list.add(type+'咕咕'+name);
					});
					event.set('nsweiyuan_list',list);
				},
				filter:function(event,player){
					return player.countCards('h')>0&&event.nsweiyuan_list&&event.nsweiyuan_list.length>0;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('围援',[event.nsweiyuan_list.map(function(i){
							return i.split('咕');
						}),'vcard']);
					},
					filter:function(button,player){
						return lib.filter.cardEnabled({
							name:button.link[2],
							nature:button.link[3],
						},player);
					},
					check:function(button){
						return _status.event.player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						},false);
					},
					backup:function(links,player){
						return {
							popname:true,
							position:'h',
							filterCard:true,
							ai1:function(card){
								return 7-get.value(card);
							},
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
							},
							onuse:function(links,player){
								player.removeSkill('nsweiyuan_use');
							},
						}
					},
					prompt:function(links,player){
						return '将一张手牌当做'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					order:1,
					result:{
						player:1,
					},
				},
			},
			nsjuxian:{
				trigger:{player:'damageBegin2'},
				filter:function(event,player){
					return !player.hasSkill('nsjuxian2');
				},
				check:function(event,player){
					if(player.countCards('h')+2>=player.maxHp) return !event.source||!event.source.countCards('he')||get.attitude(player,event.source)>0;
					return true;
				},
				content:function(){
					'step 0'
					player.addSkill('nsjuxian2');
					player.draw(2);
					'step 1'
					var target=trigger.source;
					if(player.countCards('h')>=player.maxHp&&target&&target.countCards('he')){
						player.line(target,'green');
						target.chooseToDiscard('he',true);
					}
				},
			},
			nsjuxian2:{
				trigger:{player:'phaseDrawBefore'},
				forced:true,
				charlotte:true,
				content:function(){
					player.removeSkill('nsjuxian2');
					trigger.cancel();
					game.log(player,'跳过了','#y摸牌阶段');
				},
			},
			nsdiewu:{
				trigger:{
					player:['damageEnd','gainAfter'],
					global:'loseAsyncAfter',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					if(event.name!='damage') return event.getg(player).length>1;
					return true;
				},
				content:function(){
					player.addMark('nsdiewu',1);
				},
				intro:{
					content:'mark',
				},
				group:['nsdiewu_sha','nsdiewu_shan','nsdiewu_draw'],
				subSkill:{
					sha:{
						enable:'chooseToUse',
						viewAs:{name:'sha',isCard:true},
						prompt:'视为使用一张【杀】',
						viewAsFilter:function(player){
							return player.countMark('nsdiewu')>0;
						},
						filterCard:()=>false,
						selectCard:-1,
						onuse:function(links,player){
							player.removeMark('nsdiewu',1);
						},
						ai:{
							order:function(){
								var player=_status.event.player;
								if(!player.storage.nspojian&&player.countMark('nsdiewu')<=player.hp) return 0;
								return get.order({name:'sha'})+0.1;
							},
						},
					},
					shan:{
						enable:'chooseToUse',
						viewAs:{name:'shan',isCard:true},
						viewAsFilter:function(player){
							return player.countMark('nsdiewu')>0&&!player.storage.nspojian;
						},
						filterCard:()=>false,
						selectCard:-1,
						onuse:function(links,player){
							player.removeMark('nsdiewu',1);
						},
						ai:{
						order:function(){
								var player=_status.event.player;
								if(player.hp>1&&player.countMark('nsdiewu')<=player.hp) return 0;
								return get.order({name:'shan'})-0.2;
							},
						},
					},
					draw:{
						trigger:{source:'damageEnd'},
						forced:true,
						popup:false,
						filter:function(event,player){
							var evt=event.getParent();
							return evt&&evt.type=='card'&&evt.skill=='nsdiewu_sha';
						},
						content:function(){
							player.draw();
						},
					},
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						if(tag=='respondShan'&&player.storage.nspojian) return false;
						return player.countMark('nsdiewu')>0;
					},
				},
			},
			nslingying:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
			},
			nspojian:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'fire',
				filter:function(event,player){
					return player.countMark('nsdiewu')>=player.hp;
				},
				content:function(){
					player.awakenSkill('nspojian');
					player.storage.nspojian=true;
					player.loseMaxHp();
					player.draw(2);
					player.addSkill('nsliegong');
				},
				derivation:'nsliegong',
			},
			nsliegong:{
				inherit:'xinliegong',
			},
			nsguolie:{
				trigger:{player:'phaseDrawBefore'},
				check:function(event,player){
					var h1=player.getUseValue({name:'sha'},false);
					var h2=player.getUseValue({name:'guohe'});
					return player.countCards('h',function(card){
						if(get.color(card)=='red') return h1>0;
						return h2>0;
					})>2;
				},
				content:function(){
					trigger.cancel();
					player.addTempSkill('nsguolie2');
				},
			},
			nsguolie2:{
				mod:{
					cardname:function(card,player){
						var color=get.color(card,player);
						if(color=='red') return 'sha';
						if(color=='black') return 'guohe';
					},
					cardnature:function(){
						return false;
					},
					cardUsable:function(){
						return Infinity;
					},
					targetInRange:function(){
						return true;
					},
				},
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					var cards=[];
					game.getGlobalHistory('cardMove',function(evt){
						if(evt.player==player) return;
						for(var i of evt.cards){
							if(get.position(i,true)=='d') cards.push(i);
						}
					});
					return cards.length>0;
				},
				content:function(){
					var cards=[];
					game.getGlobalHistory('cardMove',function(evt){
						if(evt.player==player) return;
						if(evt.name=='cardsDiscard'&&evt.parent.name=='orderingDiscard') return;
						for(var i of evt.cards){
							if(get.position(i,true)=='d') cards.push(i);
						}
					});
					player.gain(cards,'gain2');
				},
			},
			nslongyue:{
				init:()=>{
					game.addGlobalSkill('nslongyue_ai');
				},
				onremove:()=>{
					if(!game.hasPlayer(i=>i.hasSkill('nslongyue'),true)) game.removeGlobalSkill('nslongyue_ai');
				},
				trigger:{global:'useCard'},
				filter:function(event,player){
					return get.type(event.card,'trick')=='trick'&&event.player.getHistory('useCard').indexOf(event)==0;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					trigger.player.draw();
				},
				ai:{
					expose:0.2,
				}
			},
			nslongyue_ai:{
				mod:{
					aiOrder:function(player,card,num){
						if(!player.getHistory('useCard').length&&get.type(card)=='trick'&&game.hasPlayer(function(current){
							return current.hasSkill('nslongyue')&&get.attitude(player,current)>=0;
						})) return num+6;
					},
				},
				trigger:{player:'dieAfter'},
				filter:()=>{
					return !game.hasPlayer(i=>i.hasSkill('nslongyue'),true);
				},
				silent:true,
				forceDie:true,
				content:()=>{
					game.removeGlobalSkill('nslongyue_ai');
				}
			},
			nszhenyin:{
				trigger:{global:'judge'},
				usable:1,
				filter:function(event,player){
					return _status.currentPhase&&_status.currentPhase.countCards('h')>0;
				},
				logTarget:function(){
					return _status.currentPhase;
				},
				check:function(event,player){
					var target=_status.currentPhase;
					var judge=event.judge(event.player.judging[0]);
					var max=0;
					var hs=target.getCards('h',function(card){
						var mod2=game.checkMod(card,target,'unchanged','cardEnabled2',target);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,target,'unchanged','cardRespondable',target);
						if(mod!='unchanged') return mod;
						return true;
					});
					for(var i of hs){
						var num=event.judge(i)-judge;
						if(num>max) max=num;
					}
					var att=get.attitude(player,target);
					if(att>0) return max>0;
					if(att<0) return max<=0;
					return false;
				},
				content:function(){
					"step 0"
					if(!_status.currentPhase.countCards('h',function(card){
						var player=_status.currentPhase;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					})){
						event.finish();
						return;
					}
					_status.currentPhase.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，请打出一张手牌进行改判','h',true,function(card){
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result/Math.max(0.1,get.value(card));
						}
						else{
							return -result/Math.max(0.1,get.value(card));
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						_status.currentPhase.respond(result.cards,'highlight').nopopup=true;
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function(card){
								if(card.clone){
									card.clone.classList.remove('thrownhighlight');
								}
							},trigger.player.judging[0]);
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1,
					}
				}
			},
			nsxianhai:{
				trigger:{global:'damageSource'},
				filter:function(event,player){
					return event.source&&event.source!=player&&event.source.isIn()&&event.source==_status.currentPhase&&
					(event.source.getStat('damage')||0)>(player.getLastStat('damage')||0)&&
					!player.hasSkill('nsxianhai_round');
				},
				check:function(event,player){
					return player.maxHp>1&&get.attitude(player,event.source)<-4;
				},
				logTarget:'source',
				content:function(){
					'step 0'
					player.addTempSkill('nsxianhai_round','roundStart');
					player.loseMaxHp();
					var list=[];
					for(var i=1;i<6;i++){
						if(trigger.source.hasEnabledSlot(i)) list.add('equip'+((i==3||i==4)?'3_4':i));
					}
					if(list.length){
						player.chooseControl(list).set('prompt','选择废除'+get.translation(trigger.source)+'的一种装备栏').set('ai',function(){
							var target=_status.event.getTrigger().source;
							if(list.includes('equip6')&&target.getEquip('equip3')&&target.getEquip('equip4')) return 'equip6';
							if(list.includes('equip2')&&target.getEquip(2)&&get.value(target.getEquip(2),target)>0) return 'equip2';
							if(list.includes('equip5')&&target.getEquip(5)&&get.value(target.getEquip(5),target)>0) return 'equip5';
							return 0;
						});
					}
					else event.goto(2);
					'step 1'
					if(result.control!='equip3_4') trigger.source.disableEquip(result.control);
					else{
						trigger.source.disableEquip(3,4);
					}
					'step 2'
					if(player.awakenedSkills.includes('nsxingchu')){
						var next=game.createEvent('nsxianhai_clear');
						event.next.remove(next);
						event.getParent('phase').after.push(next);
						next.player=player;
						next.setContent(function(){
							player.restoreSkill('nsxingchu');
						});
					}
					'step 3'
					if(trigger.source){
						var hs=trigger.source.getCards('h','shan');
						if(hs.length) trigger.source.discard(hs);
					}
				},
			},
			nsxianhai_round:{charlotte:true},
			nsxingchu:{
				trigger:{global:'die'},
				forceDie:true,
				filter:function(event,player){
					return player==event.player||player==event.source;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'wood',
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsxingchu')).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					}).set('forceDie',true);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('nsxingchu',target);
						player.awakenSkill('nsxingchu');
						var he=trigger.player.getCards('he');
						if(he.length) target.gain(he,trigger.player,'giveAuto','bySelf');
						target.gainMaxHp();
					}
				},
			},
			nsshengyan:{
				trigger:{player:'judgeEnd'},
				forced:true,
				filter:function(event,player){
					return _status.currentPhase&&_status.currentPhase.isIn()&&(!player.storage.nsshengyan2||!player.storage.nsshengyan2.includes(event.result.suit));
				},
				logTarget:function(){
					return _status.currentPhase;
				},
				content:function(){
					player.addTempSkill('nsshengyan2');
					if(!player.storage.nsshengyan2) player.storage.nsshengyan2=[];
					_status.currentPhase.addTempSkill('nsshengyan3');
					player.storage.nsshengyan2.add(trigger.result.suit);
					_status.currentPhase.addMark('nsshengyan3',2,false);
				},
			},
			nsshengyan2:{onremove:true},
			nsshengyan3:{
				mod:{
					maxHandcard:function(player,num){
						return num+player.countMark('nsshengyan3');
					},
				},
				onremove:true,
				intro:{
					content:'本回合手牌上限+#',
				},
				marktext:'筵',
			},
			nsdaizhan:{
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return (!player.hasJudge('lebu')||!player.hasJudge('bingliang'))&&player.countCards('he',function(card){
						if(_status.connectMode) return true;
						return get.type(card,'trick')!='trick';
					});
				},
				content:function(){
					var next=player.chooseToUse();
					next.set('norestore',true);
					next.set('_backupevent','nsdaizhanx');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('nsdaizhanx');
				},
			},
			nsdaizhanx:{
				chooseButton:{
					dialog:function(){
						var list=['lebu','bingliang'];
						var list2=[];
						for(var i of list){
							list2.push(['延时锦囊','',i]);
						}
						return ui.create.dialog(get.prompt('nsdaizhan'),[list2,'vcard'],'hidden');
					},
					filter:function(button,player){
						return !player.hasJudge(button.link[2])
					},
					check:function(button){
						if(button.link[2]=='lebu') return 0;
						var player=_status.event.player;
						var delta=player.getHandcardLimit()+player.countCards('j')*2+2-player.hp;
						if(delta>=2) return 1+Math.random();
						if(delta>=0&&!player.countCards('h',function(card){
							return player.hasValueTarget(card);
						})) return Math.random();
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:function(card,player){
								return get.itemtype(card)=='card'&&get.type(card,'trick')!='trick'&&player.canAddJudge({name:links[0][2],cards:[card]});
							},
							filterTarget:function(card,player,target){
								return player==target;
							},
							check:function(card){
								return 8-get.value(card);
							},
							viewAs:{name:links[0][2]},
							position:'he',
							precontent:function(){
								player.addTempSkill('nsdaizhany');
								event.result.skill='nsdaizhan';
							},
							ai:{
								result:{
									target:1,
								},
							},
						};
					},
					prompt:function(links){
						return '将一张牌当做'+get.translation(links[0][2])+'对自己使用';
					},
				},
			},
			nsdaizhany:{
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.countCards('h')<player.getHandcardLimit();
				},
				content:function(){
					player.drawTo(player.getHandcardLimit());
				},
				ai:{
					nowuxie_judge:true,
				},
			},
			nsjiquan:{
				trigger:{
					global:['damageEnd','damageSource'],
				},
				direct:true,
				filter:function(event,player,name){
					var target=(name=='damageSource'?event.source:event.player);
					return target&&target!=player&&get.distance(player,target)<=1&&target.countCards('hej')>0;
				},
				locked:function(skill,player){
					return player&&player.storage.nsfuwei;
				},
				content:function(){
					'step 0'
					var target=(event.triggername=='damageSource'?trigger.source:trigger.player);
					event.target=target;
					player.choosePlayerCard(target,'hej',player.storage.nsfuwei?true:1).set('ai',function(button){
						var val=get.buttonValue(button);
						if(get.attitude(_status.event.player,get.owner(button.link))>0) return -val;
						return val;
					});
					'step 1'
					if(result.bool){
						player.logSkill('nsjiquan',target);
						player.addToExpansion(result.cards,target,'give').gaintag.add('nsjiquan_mark');
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+player.getExpansions('nsjiquan_mark').length;
					},
				},
			},
			nsjiquan_mark:{
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				marktext:'威',
			},
			nsfuwei:{
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				unique:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.getExpansions('nsjiquan_mark').length>4;
				},
				content:function(){
					player.awakenSkill('nsfuwei');
					player.storage.nsfuwei=true;
					player.addSkill('nsdiemou');
					player.addSkill('nszhihuang');
					player.gainMaxHp(2);
				},
				derivation:['nsdiemou','nszhihuang'],
			},
			nsdiemou:{
				trigger:{player:'phaseUseBegin'},
				forced:true,
				filter:function(event,player){
					return player.getExpansions('nsjiquan_mark').length>game.players.length;
				},
				content:function(){
					var cards=player.getExpansions('nsjiquan_mark');
					player.draw(cards.length);
					player.loseMaxHp();
					player.loseToDiscardpile(cards);
					if(cards.length>4) player.turnOver();
				},
			},
			nszhihuang:{
				group:'nszhihuang_damage',
				trigger:{global:'useCard'},
				usable:1,
				filter:function(event,player){
					return event.player==get.zhu(player)&&player.getExpansions('nsjiquan_mark').length>0&&event.cards&&event.cards.filterInD().length>0;
				},
				prompt2:function(event){
					return '移去一张“威”并获得'+get.translation(event.cards.filterInD());
				},
				check:function(event,player){
					if(['equip','delay'].includes(get.type(event.card))) return get.attitude(player,event.player)<0;
					return get.value(event.cards.filterInD())>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var cards=player.getExpansions('nsjiquan_mark');
					if(cards.length==1) event._result={
						bool:true,
						links:cards.slice(0),
					}
					else player.chooseButton(['选择移去一张“威”',cards],true);
					'step 1'
					player.loseToDiscardpile(result.links);
					player.gain(trigger.cards.filterInD(),'gain2','log');
				},
			},
			nszhihuang_damage:{
				trigger:{source:'damageBegin1'},
				forced:true,
				filter:function(event,player){
					var zhu=get.zhu(player);
					return zhu&&player.countCards('h')>zhu.countCards('h')&&event.getParent().type=='card';
				},
				content:function(){
					trigger.num++;
				},
			},
			//手杀削弱版许攸
			junkshicai:{
				audio:'nzry_shicai_2',
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					if(!event.cards.filterInD('oe').length) return false;
					return player.getHistory('useCard',evt=>get.type2(evt.card)==get.type2(event.card)).indexOf(event)==0;
				},
				prompt2:function(event,player){
					const cards=event.cards.filterInD('oe');
					return '你可以将'+get.translation(cards)+(cards.length>1?'以任意顺序':'')+'置于牌堆顶，然后摸一张牌';
				},
				content:function(){
					'step 0'
					event.cards=trigger.cards.filterInD('oe');
					var lose_list=[];
					event.cards.forEach(card=>{
						var owner=get.owner(card);
						if(owner){
							var arr=lose_list.find(i=>i[0]==owner);
							if(arr) arr[1].push(card);
							else lose_list.push([owner,[card]]);
						}
					});
					if(lose_list.length){
						game.loseAsync({
							lose_list:lose_list,
						}).setContent('chooseToCompareLose');
					}
					'step 1'
					if(cards.length>1){
						var next=player.chooseToMove('恃才：将牌按顺序置于牌堆顶');
						next.set('list',[['牌堆顶',cards]]);
						next.set('reverse',((_status.currentPhase&&_status.currentPhase.next)?get.attitude(player,_status.currentPhase.next)>0:false));
						next.set('processAI',function(list){
							var cards=list[0][1].slice(0);
							cards.sort(function(a,b){
								return (_status.event.reverse?1:-1)*(get.value(b)-get.value(a));
							});
							return [cards];
						});
					}
					'step 2'
					if(result.bool&&result.moved&&result.moved[0].length) cards=result.moved[0].slice(0);
					cards.reverse();
					game.cardsGotoPile(cards,'insert');
					game.log(player,'将',cards,'置于了牌堆顶');
					player.draw();
				},
				ai:{
					reverseOrder:true,
					skillTagFilter:function(player){
						if(player.getHistory('useCard',function(evt){
							return get.type(evt.card)=='equip';
						}).length>0) return false;
					},
				},
			},
			//削弱版段煨
			junklangmie:{
				audio:'langmie',
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					if(player==event.player||player.countCards('he')==0) return false;
					var num=0;
					if(event.player.hasHistory('sourceDamage',function(evt){
						num+=evt.num;
						return num>=2;
					})) return true;
					var map={};
					return event.player.hasHistory('useCard',function(i){
						var name=get.type2(i.card,false);
						if(!map[name]){
							map[name]=true;
							return false;
						}
						return true;
					});
				},
				content:function(){
					'step 0'
					var list=[],num=0,target=trigger.player;
					event.target=target;
					event.choices=[];
					var map={};
					if(target.hasHistory('useCard',function(i){
						var name=get.type2(i.card,false);
						if(!map[name]){
							map[name]=true;
							return false;
						}
						return true;
					})){
						list.push('弃置一张牌，然后摸两张牌');
						event.choices.push('draw');
					}
					if(target.hasHistory('sourceDamage',function(evt){
						num+=evt.num;
						return num>=2;
					})){
						list.push('弃置一张牌，对'+get.translation(target)+'造成1点伤害');
						event.choices.push('damage');
					}
					player.chooseControl('cancel2').set('choiceList',list).set('ai',function(){
						var player=_status.event.player;
						var choices=_status.event.getParent().choices.slice(0);
						choices.push('cancel');
						choicex=choices.slice(0);
						var getx=function(a){
							switch(a){
								case 'draw':return 2*get.effect(player,{name:'draw'},player,player);
								case 'damage':return get.damageEffect(_status.event.getParent().target,player,player);
								default:return 0;
							}
						}
						choices.sort(function(a,b){
							return getx(b)-getx(a);
						});
						return choicex.indexOf(choices[0]);
					}).set('prompt',get.prompt('junklangmie',target));
					'step 1'
					if(result.control=='cancel2') event.finish();
					else{
						event.choice=event.choices[result.index];
						player.chooseToDiscard('he').set('ai',card=>(7-get.value(card))).logSkill=(event.choice=='draw'?'junklangmie':['junklangmie',target]);
					}
					'step 2'
					if(result.bool){
						if(event.choice=='draw') player.draw(2);
						else target.damage();
					}
				},
			},
			//李典光速通渠传说
			junkwangxi:{
				audio:'wangxi',
				trigger:{player:'damageEnd',source:'damageSource'},
				filter:function(event){
					if(event._notrigger.includes(event.player)) return false;
					return event.num&&event.source&&event.player&&
					event.player.isIn()&&event.source.isIn()&&event.source!=event.player;
				},
				check:function(event,player){
					if(player.isPhaseUsing()) return true;
					if(event.player==player) return get.attitude(player,event.source)>-5;
					return get.attitude(player,event.player)>-5;
				},
				logTarget:function(event,player){
					if(event.player==player) return event.source;
					return event.player;
				},
				preHidden:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					event.target=lib.skill.junkwangxi.logTarget(trigger,player);
					'step 1'
					player.draw(2).gaintag=['junkwangxi_tag'];
					event.count--;
					'step 2'
					var cards=player.getCards('he',(card)=>card.hasGaintag('junkwangxi_tag'));
					if(cards.length>0&&target.isIn()){
						if(cards.length==1) event._result={bool:true,cards:cards};
						else player.chooseCard('he','忘隙：交给'+get.translation(target)+'一张牌',true,function(card){
							return card.hasGaintag('junkwangxi_tag');
						});
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						player.give(result.cards,target);
					}
					'step 4'
					player.removeGaintag('junkwangxi_tag');
					if(event.count&&target.isIn()&&player.hasSkill('junkwangxi')){
						player.chooseBool(get.prompt2('junkwangxi',target));
					}
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('junkwangxi',target);
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true
				}
			},
			//2013标准包双蜀黑
			junkjizhi:{
				audio:'jizhi',
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event,player){
					return get.type(event.card)=='trick'&&event.card.isCard;
				},
				content:function(){
					'step 0'
					var card=get.cards()[0];
					event.card=card;
					game.cardsGotoOrdering(card);
					player.showCards(card,get.translation(player)+'发动了【集智】');
					if(get.type(card)!='basic'){
						player.gain(card,'gain2');
						event.finish();
					}
					else if(!player.countCards('h')) event.finish();
					'step 1'
					player.chooseCard('h','是否用一张手牌交换'+get.translation(card)+'？','若选择「取消」，则'+get.translation(card)+'将被置入弃牌堆。');
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						player.$throw(card,1000);
						game.log(player,'将',card,'置于牌堆顶');
						player.lose(card,ui.cardPile,'visible','insert');
						player.gain(event.card,'gain2');
					}
				},
			},
			junkqicai:{
				mod:{
					targetInRange:function(card,player,target,now){
						var type=get.type(card);
						if(type=='trick'||type=='delay') return true;
					},
					canBeDiscarded:function(card){
						if(get.position(card)=='e'&&!['equip3','equip4','equip6'].includes(get.subtype(card))) return false;
					},
				},
			},
			junkrende:{
				audio:'rende',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:lib.filter.notMe,
				filterCard:true,
				selectCard:[1,Infinity],
				position:'h',
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					'step 0'
					event.num=cards.length;
					event.targets=targets.slice(0);
					player.give(cards,target);
					if(event.num>1) player.recover();
					'step 1'
					if(player.countCards('h')>0&&game.hasPlayer(current=>(current!=player&&!targets.includes(current)))){
						player.chooseCardTarget({
							prompt:'是否继续分配剩余的手牌',
							prompt2:'操作提示：请先选择要分配的手牌，然后再选择一名角色，该角色将获得你选择的所有手牌。',
							filterCard:true,
							selectCard:[1,Infinity],
							filterTarget:function(card,player,target){
								return target!=player&&!_status.event.getParent().targets.includes(target);
							},
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0],cards=result.cards;
						player.line(target,'green');
						player.give(cards,target);
						targets.add(target);
						event.num+=cards.length;
						if(num<2&&event.num>1) player.recover();
						event.goto(1);
					}
				},
			},
			//十周年削弱版张让
			junktaoluan:{
				hiddenCard:function(player,name){
					return !player.getStorage('junktaoluan').includes(name)&&player.countCards('hes',card=>!player.getStorage('junktaoluan2').includes(get.suit(card)))>0&&!player.hasSkill('junktaoluan3')&&lib.inpile.includes(name);
				},
				audio:'taoluan',
				enable:'chooseToUse',
				filter:function(event,player){
					return !player.hasSkill('junktaoluan3')&&player.countCards('hes',card=>{
						return lib.inpile.some(name=>{
							if(player.getStorage('junktaoluan2').includes(get.suit(card))) return false;
							if(player.getStorage('junktaoluan').includes(name)) return false;
							if(get.type(name)!='basic'&&get.type(name)!='trick') return false;
							if(event.filterCard({name:name,isCard:true,cards:[card]},player,event)) return true;
							if(name=='sha'){
								for(var nature of lib.inpile_nature){
									if(event.filterCard({name:name,nature:nature,isCard:true,cards:[card]},player,event)) return true;
								}
							}
							return false;
						});
					})>0;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var name of lib.inpile){
							if(get.type(name)=='basic'||get.type(name)=='trick'){
								if(player.getStorage('junktaoluan').includes(name)) continue;
								list.push([get.translation(get.type(name)),'',name]);
								if(name=='sha'){
									for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
								}
							}
						}
						return ui.create.dialog('滔乱',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						if(player.countCards('hes',cardx=>cardx.name==card.name)) return 0;
						return _status.event.getParent().type=='phase'?player.getUseValue(card):1;
					},
					backup:function(links,player){
						return {
							filterCard:function(card,player){
								return !player.getStorage('junktaoluan2').includes(get.suit(card));
							},
							audio:'taoluan',
							popname:true,
							check:function(card){
								return 7-get.value(card);
							},
							position:'hse',
							viewAs:{name:links[0][2],nature:links[0][3]},
							onuse:function(result,player){
								player.markAuto('junktaoluan2',[get.suit(result.cards[0],player)]);
								var evt=_status.event.getParent('phase');
								if(evt&&evt.name=='phase'&&!evt.junktaoluan){
									evt.junktaoluan=true;
									var next=game.createEvent('taoluan_clear');
									_status.event.next.remove(next);
									evt.after.push(next);
									next.player=player;
									next.setContent(function(){
										delete player.storage.junktaoluan2;
									});
								}
								player.markAuto('junktaoluan',[result.card.name]);
							},
						}
					},
					prompt:function(links,player){
						return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:4,
					save:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(!player.countCards('hes',card=>!player.getStorage('junktaoluan2').includes(get.suit(card)))||player.hasSkill('taoluan3')) return false;
						if(tag=='respondSha'||tag=='respondShan'){
							if(arg=='respond') return false;
							return !player.getStorage('taoluan').includes(tag=='respondSha'?'sha':'shan');
						}
						return !player.getStorage('taoluan').includes('tao')||(!player.getStorage('taoluan').includes('jiu')&&arg==player);
					},
					result:{
						player:function(player){
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&players[i].countCards('he')&&get.attitude(player,players[i])>0){
									return 1;
								}
							}
							return 0;
						}
					},
					threaten:1.9,
				},
				group:'junktaoluan2',
			},
			junktaoluan2:{
				trigger:{player:['useCardAfter','respondAfter']},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					if(!game.hasPlayer(current=>current!=player)) return false;
					return event.skill=='junktaoluan_backup';
				},
				content:function(){
					'step 0'
					player.chooseTarget(true,function(card,player,target){
						return target!=player;
					},'###滔乱###令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力').set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0){
							if(get.attitude(target,player)>0){
								return target.countCards('h');
							}
							return target.countCards('h')/2;
						}
						return 0;
					});
					'step 1'
					var target=result.targets[0];
					event.target=target;
					player.line(target,'green');
					var type=get.type(trigger.card,'trick');
					target.chooseCard('###滔乱###交给'+get.translation(player)+'一张不为'+get.translation(type)+'牌的牌，或令其失去1点体力且滔乱无效直到回合结束','he',num,function(card,player,target){
						return get.type(card,'trick')!=_status.event.cardType;
					}).set('cardType',type).set('ai',function(card){
						if(_status.event.att){
							return 11-get.value(card);
						}
						return 0;
					}).set('att',get.attitude(target,player)>0);
					'step 2'
					if(result.bool){
						target.give(result.cards,player,'visible');
					}
					else{
						player.addTempSkill('junktaoluan3');
					}
				}
			},
			junktaoluan3:{
				charlotte:true,
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				content:function(){
					player.loseHp();
				},
			},
			junktaoluan_backup:{charlotte:true},

			nshuaishuang:{
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				content:function(){
					'step 0'
					var card=get.cardPile(function(card){
						return card.name=='tao';
					});
					if(card){
						player.gain(card,'gain2');
					}
					else event.finish();
					'step 1'
					game.updateRoundNumber();
					player.loseHp();
				},
			},
			nsfengli:{
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(function(current){
						return current!=player&&!current.hasSkill('nsfengli_use');
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsfengli'),function(card,player,target){
						return target!=player&&!target.hasSkill('nsfengli_use');
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target)/(5+target.countCards('h'));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('nsfengli',target);
						var cards=player.getCards('h');
						player.addShownCards(cards,'visible_nsfengli');
						player.addSkill('nsfengli2');
						target.addSkill('nsfengli_use');
						target.storage.nsfengli_use=player;
					}
				},
				group:['nsfengli_draw','nsfengli_clear'],
				onremove:function(player){
					player.removeSkill('nsfengli2');
				},
			},
			nsfengli_draw:{
				trigger:{
					player:['loseAfter','hideShownCardsAfter'],
					global:['gainAfter','equipAfter','addJudgeAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				charlotte:true,
				filter:function(event,player,name){
					if(event.name=='hideShownCards'){
						const hs=player.countCards('h');
						return game.hasPlayer(current=>current.countCards('h')<hs);
					}
					var num=0;
					var evt=event.getl(player);
					if(!evt||!evt.gaintag_map) return false;
					var bool=false;
					for(var i in evt.gaintag_map){
						if(evt.gaintag_map[i].some(tag=>tag.indexOf('visible_')==0)) num++;
					}
					if(event.getg){
						if(event.name=='gain'){
							if(event.getlx===false&&event.gaintag.some(tag=>tag.indexOf('visible_')==0)) num-=event.cards.length;
						}
						else{
							player.checkHistory('gain',function(evt){
								if(evt.parent==event&&evt.gaintag.some(tag=>tag.indexOf('visible_')==0)){
									num-=evt.cards.length;
								}
							});
						}
					}
					if(num>0){
						const hs=player.countCards('h');
						return game.hasPlayer(current=>current.countCards('h')<hs);
					}
				},
				content:function(){
					'step 0'
					player.chooseTarget('奉礼：是否令一名手牌数小于你的其他角色摸一张牌？',function(card,player,target){
						return target!=player&&target.countCards('h')<player.countCards('h');
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
						if(target.hasSkillTag('nogain')) att/=10;
						return att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('nsfengli',target);
						target.draw();
					}
				},
			},
			nsfengli_clear:{
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.hasSkill('nsfengli2');
				},
				content:function(){
					var cards=player.getShownCards();
					if(cards.length>0) player.hideShownCards(cards);
					player.removeSkill('nsfengli2');
				},
			},
			nsfengli2:{
				onremove:function(player){
					player.removeGaintag('nsfengli2');
					game.countPlayer(function(current){
						if(current.storage.nsfengli_use==player) current.removeSkill('nsfengli_use');
					})
				},
			},
			nsfengli_use:{
				hiddenCard:function(player,name){
					if(player==_status.currentPhase) return false;
					var target=player.storage.nsfengli_use;
					var cards=target.getShownCards();
					for(var i of cards){
						if(get.name(i,target)==name) return true;
					}
					return false;
				},
				enable:['chooseToUse','chooseToRespond'],
				charlotte:true,
				onremove:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					var target=player.storage.nsfengli_use;
					var cards=target.getShownCards();
					for(var i of cards){
						if(event.filterCard({
							name:get.name(i,target),
							nature:get.nature(i,target),
							isCard:true,
						},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var target=player.storage.nsfengli_use;
						var cards=target.getShownCards();
						return ui.create.dialog('奉礼',cards);
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						var target=player.storage.nsfengli_use;
						return evt.filterCard({
							name:get.name(button.link,target),
							nature:get.nature(button.link,target),
							isCard:true,
						},player,evt);
					},
					check:function(button){
						var player=_status.event.player;
						var evt=_status.event.getParent();
						if(evt.dying) return get.attitude(player,evt.dying);
						return 1;
					},
					backup:function(links,player){
						var target=player.storage.nsfengli_use;
						return {
							viewAs:{
								name:get.name(links[0],target),
								nature:get.nature(links[0],target),
								isCard:true,
							},
							card:links[0],
							filterCard:()=>false,
							selectCard:-1,
							precontent:function(){
								var card=lib.skill.nsfengli_use_backup.card;
								var target=player.storage.nsfengli_use;
								event.target=target;
								player.logSkill('nsfengli',target);
								delete event.result.skill;
								player.showCards(card,get.translation(player)+'发动了【奉礼】');
								target.hideShownCards(card);
							},
						};
					},
					ai:{
						hasSha:true,
						hasShan:true,
						skillTagFilter:function(player,tag){
							var name='s'+tag.slice(4);
							return lib.skill.nsfengli_use.hiddenCard(player,name);
						},
					},
				},
				ai:{
					order:8,
					result:{
						player:1,
					},
				},
			},
			ns_chuanshu:{
				audio:["xingshuai",2],
				trigger:{
					global:"dying",
				},
				priority:8,
				unique:true,
				skillAnimation:true,
				animationColor:"water",
				filter:function (event,player){
					return event.player.hp<=0&&event.player!=player;
				},
				check:function (event,player){
					return get.attitude(player,event.player)>0;
				},
				logTarget:"player",
				content:function (){
					'step 0'
					trigger.player.chooseControl('releiji','guidao').set('prompt',''+get.translation(trigger.player)+'获得一项技能');
					goon=true;
					if(!goon){
						event.finish();
					}
					'step 1'
					trigger.player.addSkillLog(result.control);
					trigger.player.recover(1-trigger.player.hp);
					trigger.player.draw(2);
					trigger.player.storage.ns_chuanshu2=player;
					trigger.player.addSkill('ns_chuanshu2');
					player.awakenSkill('ns_chuanshu');
				},
			},
			ns_xiandao1:{
				audio:["huashen",2],
				forced:true,
				//noLose:true,
				//locked:true,
				//noRemove:true,
				//noDisable:true,
				priority:10,
				trigger:{
					global:"gameStart",
					player:["phaseEnd","enterGame"],
				},
				//filter:function (event,player){
				//	return player.isAlive();
				//},
				content:function (){
					var n=[1,2].randomGet();
					if(n==1){
						player.addTempSkill("releiji",{player:"phaseUseBegin"});
						player.markSkill("releiji",{player:"phaseUseBegin"});
					}
					if(n==2){
						player.addTempSkill("guidao",{player:"phaseUseBegin"});
						player.markSkill("guidao",{player:"phaseUseBegin"});
					}
				},
			},
			ns_xiandao2:{
				audio:["huashen",2],
				forced:true,
				//noLose:true,
				//locked:true,
				//noRemove:true,
				//noDisable:true,
				trigger:{
					player:"damageBefore",
				},
				filter:function (event,player){
					if(!event.nature) return false;
					return true;
				},
				content:function (){
					trigger.cancel();
					//event.finish();
				},
			},
			ns_xiandao:{
				forced:true,
				//noLose:true,
				//locked:true,
				noRemove:true,
				//noDisable:true,
				group:["ns_xiandao1","ns_xiandao2"],
			},
			ns_chuanshu2:{
				audio:["songwei",2],
				mark:"character",
				intro:{
					content:"当你造成或受到一次伤害后，$摸一张牌",
				},
				nopop:true,
				trigger:{
					source:"damageEnd",
					player:"damageEnd",
				},
				forced:true,
				popup:false,
				filter:function (event,player){
					return player.storage.ns_chuanshu2&&player.storage.ns_chuanshu2.isIn()&&event.num>0;
				},
				content:function (){
					'step 0'
					game.delayx();
					'step 1'
					var target=player.storage.ns_chuanshu2;
					player.line(target,'green');
					target.draw();
					game.delay();
				},
				onremove:true,
				group:"ns_chuanshu3",
			},
			ns_chuanshu3:{
				audio:1,
				trigger:{
					player:"dieBegin",
				},
				silent:true,
				onremove:true,
				filter:function (event,player){
					return player.storage.ns_chuanshu2&&player.storage.ns_chuanshu2.isIn();
				},
				content:function (){
						'step 0'
					game.delayx();
					'step 1'
					var target=player.storage.ns_chuanshu2;
					player.line(target,'green');
					//target.addSkill('ns_chuanshu');
					target.restoreSkill('ns_chuanshu');
					target.update();
				},
				forced:true,
				popup:false,
			},
			ns_xiuzheng:{
				audio:["xinsheng",2],
				enable:"phaseUse",
				usable:1,
				priority:10,
				filter:function (event,player){
					return (ui.cardPile.childElementCount+ui.discardPile.childElementCount)>=2;
				},
				filterTarget:function (card,player,target){
					return player!=target;
				},
				content:function (){
					"step 0"
					event.cards=get.cards(2);
					player.showCards(event.cards);
					"step 1"
					if(get.color(event.cards[0])=='red'&&get.color(event.cards[1])=='red'){
						target.damage('fire');
					}
					if(get.color(event.cards[0])!=get.color(event.cards[1])){
						player.discardPlayerCard(target,"he",true);
					}
					if(get.color(event.cards[0])=='black'&&get.color(event.cards[1])=='black'){
						target.damage('thunder');
					}
					"step 2"
					if(event.cards.length){
						player.gain(event.cards,'gain2');
						game.delay();
					}
					"step 3"
					player.chooseToDiscard(2,'he','请弃置两张牌',true);
				},
				ai:{
					threaten:0.5,
					order:13,
					result:{
						target:function (player,target){
							return get.damageEffect(target,player);
						},
					},
				},
			},
			nsanruo:{
				unique:true,
				init:function(player){
					if(!player.node.handcards1.cardMod){
						player.node.handcards1.cardMod={};
					}
					if(!player.node.handcards2.cardMod){
						player.node.handcards2.cardMod={};
					}
					var cardMod=function(card){
						if(get.info(card).multitarget) return;
						if(card.name=='sha'||get.type(card)=='trick') return ['暗弱','杀或普通锦囊牌对你不可见'];
					};
					player.node.handcards1.cardMod.nsanruo=cardMod;
					player.node.handcards2.cardMod.nsanruo=cardMod;
					player.node.handcards1.classList.add('nsanruo');
					player.node.handcards2.classList.add('nsanruo');
					if(!ui.css.nsanruo){
						ui.css.nsanruo=lib.init.sheet(
							'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"])>*,'+
							'.handcards.nsanruo>.card[data-card-name="sha"]>*{visibility:hidden !important}'
						);
					}
				},
				onremove:function(player){
					player.node.handcards1.classList.remove('nsanruo');
					player.node.handcards2.classList.remove('nsanruo');
					delete player.node.handcards1.cardMod.nsanruo;
					delete player.node.handcards2.cardMod.nsanruo;
				},
				ai:{
					neg:true
				}
			},
			nsxunshan:{
				mod:{
					selectTarget:function(card,player,range){
						if(!player.hasSkill('nsanruo')) return;
						if(_status.auto) return;
						if(get.position(card)!='h'||get.owner(card)!=player) return;
						if(get.info(card).multitarget) return;
						if(card.name=='sha'||get.type(card)=='trick') range[1]=game.countPlayer();
					},
					// playerEnabled:function(card,player,target,current){
					// 	if(current==false) return;
					// 	var filter=get.info(card).modTarget;
					// 	if(typeof filter=='boolean'&&filter) return 'forceEnable';
					// 	if(typeof filter=='function'&&filter(card,player,target)) return 'forceEnable';
					// }
					// targetInRange:function(card,player){
					// 	if(_status.auto) return;
					// 	if(get.position(card)!='h'||get.owner(card)!=player) return;
					// 	if(get.info(card).multitarget) return;
					// 	if(card.name=='sha'||get.type(card)=='trick') return true;
					// }
				},
				ai:{
					combo:'nsanruo'
				}
			},
			nskaicheng:{
				enable:'phaseUse',
				usable:1,
				zhuSkill:true,
				unique:true,
				filter:function(event,player){
					if(!player.hasZhuSkill('nskaicheng')) return false;
					if(!player.hasCard(function(card){
						if(get.info(card).multitarget) return false;
						return card.name=='sha'||get.type(card)=='trick';
					})){
						return false;
					}
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='qun';
					});
				},
				filterCard:function(card){
					if(get.info(card).multitarget) return false;
					return card.name=='sha'||get.type(card)=='trick';
				},
				filterTarget:function(card,player,target){
					return player!=target&&target.group=='qun';
				},
				lose:false,
				content:function(){
					'step 0'
					target.chooseBool(function(){
						return get.attitude(target,player)>0;
					},'是否将'+get.translation(cards)+'告知'+get.translation(player));
					'step 1'
					if(!player.hasUseTarget(cards[0])){
						if(result.bool){
							player.chooseControl('确定').set('prompt','你展示的手牌为'+get.translation(cards));
						}
						else{
							event.hidden=true;
							player.chooseControl('确定').set('prompt',get.translation(target)+'拒绝告知你卡牌信息');
						}
					}
					else{
						if(result.bool){
							player.chooseBool('是否使用展示的牌？','你展示的手牌为'+get.translation(cards)+'。如果你使用此牌，则在结算后摸一张牌；如果你不使用此牌，则结束出牌阶段');
						}
						else{
							event.hidden=true;
							player.chooseBool('是否使用展示的牌？',get.translation(target)+'拒绝告知你卡牌信息。如果你使用此牌，则在结算后摸一张牌；如果你不使用此牌，则结束出牌阶段');
						}
					}
					'step 2'
					if(result.bool){
						player.chooseUseTarget(true,cards[0],event.hidden?'选择此牌的目标':null);
					}
					else{
						var evt=_status.event.getParent('phaseUse');
						if(evt){
							evt.skipped=true;
						}
						event.finish();
					}
					'step 3'
					player.draw();
				},
				ai:{
					combo:'nsanruo'
				}
			},
			nsjuanli:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				filter:function(event,player){
					return player.countCards('h');
				},
				init:function(player){
					player.storage.nsjuanli_win=[];
					player.storage.nsjuanli_lose=[];
				},
				intro:{
					content:function(storage,player){
						var str='';
						if(player.storage.nsjuanli_win.length){
							str+=get.translation(player.storage.nsjuanli_win)+'与你距离-1直到与你下次赌牌';
						}
						if(player.storage.nsjuanli_lose.length){
							if(str.length){
								str+='；';
							}
							str+=get.translation(player.storage.nsjuanli_lose)+'与你距离+1直到与你下次赌牌';
						}
						return str;
					}
				},
				onremove:['nsjuanli_win','nsjuanli_lose'],
				content:function(){
					'step 0'
					player.storage.nsjuanli_win.remove(target);
					player.storage.nsjuanli_lose.remove(target);
					event.prompt2='赌牌的两名角色分别亮开一张手牌，若花色相同则赌牌平局，若花色不同，则依次展示牌堆顶的牌直到翻开的牌与其中一人亮出牌的花色相同，则该角色获得赌牌的胜利';
					player.chooseCard('h',true).set('prompt2',event.prompt2);
					'step 1'
					if(result.bool){
						event.card1=result.cards[0];
						target.chooseCard('h',true).set('prompt2',event.prompt2);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						event.card2=result.cards[0];
					}
					else{
						event.finish();
					}
					'step 3'
					player.$compare(event.card1,event.target,event.card2);
					game.delay(0,1500);
					game.log(player,'亮出的牌为',event.card1);
					game.log(target,'亮出的牌为',event.card2);
					'step 4'
					var suit1=get.suit(event.card1);
					var suit2=get.suit(event.card2);
					if(suit1==suit2){
						game.broadcastAll(function(str){
							var dialog=ui.create.dialog(str);
							dialog.classList.add('center');
							setTimeout(function(){
								dialog.close();
							},1000);
						},'平局');
						game.delay(2);
						if(!player.storage.nsjuanli_win.length&&!player.storage.nsjuanli_lose.length){
							player.unmarkSkill('nsjuanli');
						}
					}
					else{
						var cards=[];
						for(var i=0;i<1000;i++){
							var current=get.cards();
							if(current&&current.length){
								current=current[0];
								current.discard();
								cards.push(current);
								var suit=get.suit(current);
								if(suit==suit1){
									player.showCards(cards,get.translation(player)+'赌牌获胜');
									player.storage.nsjuanli_win.add(target);
									target.loseHp();
									player.markSkill('nsjuanli');
									break;
								}
								else if(suit==suit2){
									player.showCards(cards,get.translation(target)+'赌牌获胜');
									player.storage.nsjuanli_lose.add(target);
									target.recover();
									player.markSkill('nsjuanli');
									break;
								}
							}
							else{
								break;
							}
						}
					}
				},
				mod:{
					globalTo:function(from,to,distance){
						if(to.storage.nsjuanli_win&&to.storage.nsjuanli_win.includes(from)){
							return distance-1;
						}
						if(to.storage.nsjuanli_lose&&to.storage.nsjuanli_lose.includes(from)){
							return distance+1;
						}
					}
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							if(target.isHealthy()){
								return -1/(1+target.hp);
							}
							else{
								return -0.3/(1+target.hp);
							}
						}
					}
				}
			},
			nsyuanchou:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:15,
				check:function(event,player){
					return get.effect(event.target,event.card,event.player,player)<0;
				},
				filter:function(event,player){
					return get.type(event.card,'trick')=='trick'&&get.distance(event.player,player)>1;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card,'trick')=='trick'&&get.distance(player,target)>1) return 'zeroplayertarget';
						},
					}
				}
			},
			nsguhuo:{
				trigger:{player:'useCardAfter'},
				forced:true,
				usable:2,
				filter:function(event,player){
					if(event.parent.name=='nsguhuo') return false;
					if(event.card==event.cards[0]){
						var type=get.type(event.card,'trick');
						var names=[];
						if(get.cardPile(function(card){
							if(get.type(card,'trick')!=type) return false;
							if(get.info(card).multitarget) return false;
							if(names.includes(card.name)) return false;
							if(player.hasUseTarget(card)){
								return true;
							}
							else{
								names.add(card.name);
								return false;
							}
						})){
							return true;
						}
					}
					return true;
				},
				content:function(){
					var type=get.type(trigger.card,'trick');
					var names=[];
					var card=get.cardPile(function(card){
						if(get.type(card,'trick')!=type) return false;
						if(get.info(card).multitarget) return false;
						if(names.includes(card.name)) return false;
						if(player.hasUseTarget(card)){
							return true;
						}
						else{
							names.add(card.name);
							return false;
						}
					});
					if(card){
						var info=get.info(card);
						var targets=game.filterPlayer(function(current){
							return lib.filter.filterTarget(card,player,current);
						});
						if(targets.length){
							targets.sort(lib.sort.seat);
							var select=get.select(info.selectTarget);
							if(select[0]==-1||select[1]==-1){
								player.useCard(card,targets,'noai');
							}
							else if(targets.length>=select[0]){
								var num=select[0]+Math.floor(Math.random()*(select[1]-select[0]+1));
								player.useCard(card,targets.randomGets(num),'noai');
							}
						}
					}
				}
			},
			nsbaiyi:{
				trigger:{player:'phaseDiscardBefore'},
				forced:true,
				filter:function(event,player){
					return player.storage.nsqinxue&&player.storage.nsqinxue.length;
				},
				content:function(){
					'step 0'
					trigger.cancel();
					var num=player.storage.nsqinxue.length;
					player.chooseToDiscard('白衣：请弃置'+get.cnNumber(num)+'张牌','he',true,num);
					'step 1'
					if(result.bool&&result.cards.length){
						event.goon=true;
						if(result.cards.length==3){
							var type=[];
							for(var i=0;i<result.cards.length;i++){
								type.add(get.type(result.cards[i],'trick'));
							}
							if(type.length==3&&trigger.getParent().skill!='nsbaiyi'){
								event.goon=false;
								player.insertPhase();
							}
						}
						if(event.goon){
							var cards=get.cards(result.cards.length);
							event.cards=cards;
							player.chooseCardButton(cards,'获得一张牌',true);
						}
					}
					'step 2'
					if(event.goon&&result.bool&&result.links.length){
						player.gain(result.links,'draw');
						for(var i=0;i<event.cards.length;i++){
							if(!result.links.includes(event.cards[i])){
								event.cards[i].discard();
							}
						}
					}
				},
				ai:{
					threaten:1.5,
					combo:'nsqinxue'
				}
			},
			nsqinxue:{
				trigger:{player:'useCard'},
				init:function(player){
					player.storage.nsqinxue=[];
				},
				forced:true,
				filter:function(event,player){
					var type=get.type(event.card,'trick');
					if(player.storage.nsqinxue.includes(type)) return false;
					return ['basic','trick','equip'].includes(type);
				},
				content:function(){
					var type=null;
					var type0=get.type(trigger.card,'trick');
					switch(type0){
						case 'basic':type='trick';break;
						case 'trick':type='equip';break;
						case 'equip':type='basic';break;
					}
					var card=get.cardPile(function(card){
						return get.type(card,'trick')==type;
					});
					if(card){
						player.gain(card,'gain2');
						player.storage.nsqinxue.push(type0);
					}
				},
				group:'nsqinxue_clear',
				subSkill:{
					clear:{
						trigger:{global:'phaseAfter'},
						silent:true,
						content:function(){
							player.storage.nsqinxue=[];
						}
					}
				}
			},
			nsfuge:{
				trigger:{player:'phaseAfter'},
				filter:function(event,player){
					return !player.storage.nsfuge;
				},
				init:function(player){
					lib.onwash.push(function(){
						delete player.storage.nsfuge;
					});
				},
				skillAnimation:true,
				check:function(event,player){
					return player.hp==1||player.maxHp-player.hp>=2;
				},
				content:function(){
					player.storage.nsfuge=true;
					player.insertPhase();
				},
				group:'nsfuge_draw',
				subSkill:{
					draw:{
						trigger:{player:'phaseDrawBegin'},
						silent:true,
						filter:function(event,player){
							var evt=event.getParent('phase');
							return evt&&evt.skill=='nsfuge';
						},
						content:function(){
							trigger.num+=player.maxHp-player.hp;
						}
					}
				}
			},
			nsbaiming:{
				trigger:{player:'useCard'},
				direct:true,
				filter:function(event,player){
					if(player.additionalSkills.nsbaiming) return false;
					return event.card&&event.card.name=='sha'&&player.storage.nsbaiming&&player.storage.nsbaiming.length>0;
				},
				group:'nsbaiming_clear',
				init:function(player){
					var check=function(list){
						for(var i=0;i<list.length;i++){
							var info=lib.skill[list[i]];
							if(info&&info.shaRelated) return true;
							if(info&&info.trigger){
								for(var j in info.trigger){
									var cond=info.trigger[j];
									if(typeof cond=='string'){
										cond=[cond];
									}
									if(j=='player'||j=='global'){
										if(cond.indexOf('shaBefore')!=-1) return true;
										if(cond.indexOf('shaBegin')!=-1) return true;
										if(cond.indexOf('shaEnd')!=-1) return true;
										if(cond.indexOf('shaAfter')!=-1) return true;
									}
									if(j=='source'||j=='global'){
										if(cond.indexOf('damageBefore')!=-1) return true;
										if(cond.indexOf('damageBegin')!=-1) return true;
										if(cond.indexOf('damageBegin1')!=-1) return true;
										if(cond.indexOf('damageBegin2')!=-1) return true;
										if(cond.indexOf('damageEnd')!=-1) return true;
										if(cond.indexOf('damageSource')!=-1) return true;
										if(cond.indexOf('damageAfter')!=-1) return true;
									}
								}
							}
						}
						return false;
					};
					player.storage.nsbaiming=get.gainableSkills(function(info,skill){
						var list=[skill];
						game.expandSkills(list);
						return check(list);
					},player);
				},
				content:function(){
					'step 0'
					var list=player.storage.nsbaiming.slice(0);
					event.skillai=function(){
						return get.max(list,get.skillRank,'item');
					};
					if(event.isMine()){
						var dialog=ui.create.dialog('forcebutton');
						dialog.add(get.prompt('nsbaiming'));
						var clickItem=function(){
							_status.event._result=this.link;
							dialog.close();
							game.resume();
						};
						for(var i=0;i<list.length;i++){
							if(lib.translate[list[i]+'_info']){
								var translation=get.translation(list[i]);
								if(translation[0]=='新'&&translation.length==3){
									translation=translation.slice(1,3);
								}
								else{
									translation=translation.slice(0,2);
								}
								var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
								translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
								item.firstChild.addEventListener('click',clickItem);
								item.firstChild.link=list[i];
							}
						}
						dialog.add(ui.create.div('.placeholder'));
						event.switchToAuto=function(){
							event._result=event.skillai();
							dialog.close();
							game.resume();
						};
						event.confirm=ui.create.confirm('c');
						event.custom.replace.confirm=function(){
							event._result=null;
							dialog.close();
							game.resume();
						};
						_status.imchoosing=true;
						game.pause();
					}
					else{
						event._result=event.skillai();
					}
					'step 1'
					_status.imchoosing=false;
					if(event.confirm){
						event.confirm.close();
					}
					if(typeof result=='string'){
						player.logSkill('nsbaiming');
						var link=result;
						player.addAdditionalSkill('nsbaiming',link);
						player.logSkill('nsbaiming');
						player.popup(link);
						game.log(player,'获得了技能','【'+get.translation(link)+'】');
						game.delay();
						player.storage.nsbaiming.remove(link);
						trigger.nsbaiming=true;
					}
				},
				subSkill:{
					clear:{
						trigger:{player:'useCardAfter'},
						silent:true,
						filter:function(event){
							return event.nsbaiming==true;
						},
						content:function(){
							player.removeAdditionalSkill('nsbaiming');
						}
					}
				}
			},
			nsxinzhan:{
				enable:'phaseUse',
				filterCard:[1,Infinity],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				usable:1,
				selectCard:[1,Infinity],
				check:function(card){
					var player=_status.event.player;
					if(player.countCards('h')>=8&&game.hasPlayer(function(current){
						return current.isDamaged()&&get.attitude(player,current)>3;
					})){
						if(ui.selected.cards.length>=6){
							return 0;
						}
						return 1;
					}
					else{
						if(ui.selected.cards.length>=2){
							return 0;
						}
						if(player.countCards('h',function(card){
							return get.value(card)<0;
						})){
							return 8-get.value(card,player,'raw');
						}
						else{
							return 4-get.value(card,player,'raw');
						}
					}
				},
				discard:false,
				prepare:'give2',
				content:function(){
					target.gain(cards,player);
					var num=Math.floor(cards.length/2);
					if(num>=3){
						target.loseMaxHp(true);
					}
					else if(num){
						target.loseHp(num);
					}
				},
				filterTarget:function(card,player,target){
					return target!=player;
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							if(ui.selected.cards.length>=6){
								if(target.isDamaged()) return 2;
								return 1;
							}
							if(ui.selected.cards.length==1){
								return 1;
							}
							return -1;
						}
					}
				}
			},
			nstanbing:{
				trigger:{player:'phaseDrawBegin'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard('h',get.prompt2('nstanbing')).set('ai',function(card){
						if(!player.needsToDiscard(1)){
							return get.translation(card.name).length-1;
						}
						return 0;
					}).logSkill='nstanbing';
					'step 1'
					if(result.bool){
						player.draw(get.translation(result.cards[0].name).length);
						player.addTempSkill('nstanbing_sha');
					}
				},
				subSkill:{
					sha:{
						mod:{
							cardEnabled:function(card,player){
								if(card.name=='sha'){
									return false;
								}
							},
							cardUsable:function(card,player){
								if(card.name=='sha'){
									return false;
								}
							},
						}
					}
				}
			},
			nswangfeng:{
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('he',{color:'red'})>0;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+get.prompt('nswangfeng'),'he',function(card){
						return get.color(card)=='red';
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result;
						}
						else{
							return -result;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.logSkill('nswangfeng');
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						if(!get.owner(result.cards[0],'judge')){
							trigger.position.appendChild(result.cards[0]);
						}
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai:{
					tag:{
						rejudge:1
					}
				}
			},
			nsfuhuo:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				filterTarget:function(card,player,target){
					return player!=target&&!target.hasSkill('nsfuhuo2');
				},
				prepare:'throw',
				discard:false,
				content:function(){
					target.$gain2(cards);
					target.storage.nsfuhuo2=cards[0];
					target.addSkill('nsfuhuo2');
					target.storage.nsfuhuo3=player;
					ui.special.appendChild(cards[0]);
					target.syncStorage('nsfuhuo2');
				},
				check:function(card){
					return 6-get.value(card)
				},
				ai:{
					expose:0.1,
					order:4,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('maixie')) return 0;
							return -1;
						}
					}
				},
				group:['nsfuhuo_die','nsfuhuo_gain'],
				subSkill:{
					die:{
						trigger:{player:'dieBegin'},
						silent:true,
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].hasSkill('nsfuhuo2')&&game.players[i].storage.nsfuhuo3==player){
									game.players[i].removeSkill('nsfuhuo2');
								}
							}
						}
					},
					gain:{
						trigger:{player:'phaseBegin'},
						silent:true,
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].hasSkill('nsfuhuo2')&&game.players[i].storage.nsfuhuo3==player){
									var card=game.players[i].storage.nsfuhuo2;
									game.players[i].removeSkill('nsfuhuo2');
									game.players[i].$give(card,player);
									player.gain(card);
								}
							}
						}
					}
				}
			},
			nsfuhuo2:{
				trigger:{player:['respondAfter','useCardAfter']},
				forced:true,
				priority:10,
				mark:'card',
				popup:false,
				filter:function(event,player){
					return event.card&&event.card.name=='shan'&&player.storage.nsfuhuo3&&player.storage.nsfuhuo3.isIn();
				},
				content:function(){
					'step 0'
					player.storage.nsfuhuo3.logSkill('nsfuhuo',player);
					player.judge(function(card){
						var suit=get.suit(card);
						if(suit=='heart'||suit=='diamond'){
							return -1;
						}
						else{
							return 0;
						}
					});
					'step 1'
					var source=player.storage.nsfuhuo3;
					if(result.suit=='diamond'){
						player.damage('fire',source);
						if(player.countCards('h')){
							player.randomDiscard('h');
						}
					}
					else if(result.suit=='heart'){
						player.damage('fire',2,source);
					}
				},
				intro:{
					content:'card'
				},
				onremove:function(player){
					player.storage.nsfuhuo2.discard();
					delete player.storage.nsfuhuo2;
					delete player.storage.nsfuhuo3;
				},
				ai:{
					noShan:true
				}
			},
			nshunji:{
				enable:'phaseUse',
				viewAs:{name:'wanjian'},
				usable:1,
				delay:0,
				selectCard:0,
				group:['nshunji_damage','nshunji_draw'],
				subSkill:{
					draw:{
						trigger:{player:'useCard'},
						silent:true,
						filter:function(event){
							return event.skill=='nshunji';
						},
						content:function(){
							player.draw();
						}
					},
					damage:{
						trigger:{global:'damageAfter'},
						silent:true,
						filter:function(event){
							return event.getParent(2).skill=='nshunji';
						},
						content:function(){
							'step 0'
							if(player.countCards('he')){
								trigger.player.discardPlayerCard(player,'混击','he').set('boolline',true).set('prompt2','弃置'+get.translation(player)+'的一张牌，或取消并摸一张牌');
							}
							else{
								trigger.player.draw();
								event.finish();
							}
							'step 1'
							if(!result.bool){
								trigger.player.draw();
							}
						}
					}
				}
			},
			nsbaquan:{
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				check:function(event,player){
					if(player.hasShan()||player.hujia>0) return false;
					var nh=player.countCards('h');
					if(player.hp==1){
						return nh<=3;
					}
					if(player.hp==2){
						return nh<=1;
					}
					return false;
				},
				content:function(){
					var cards=player.getCards('h');
					player.discard(cards);
					player.changeHujia(cards.length);
					player.storage.nsbaquan=true;
				},
				group:'nsbaquan_clear',
				subSkill:{
					clear:{
						trigger:{player:'phaseBegin'},
						forced:true,
						filter:function(event,player){
							return player.storage.nsbaquan&&player.hujia>0;
						},
						content:function(){
							player.changeHujia(-player.hujia);
							game.log(player,'失去了所有护甲');
							delete player.storage.nsbaquan;
						}
					}
				}
			},
			nschangshi:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.identity=='fan';
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(ui.selected.targets.length){
						return target.hp!=ui.selected.targets[0].hp;
					}
					return true;
				},
				multitarget:true,
				selectTarget:2,
				content:function(){
					var tmp=targets[0].hp;
					targets[0].hp=targets[1].hp;
					targets[1].hp=tmp;
					targets[0].update();
					targets[1].update();
					if(Math.abs(targets[0].hp-targets[1].hp)==1){
						player.loseHp();
					}
					//else{
						//player.die();
					//}
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							if(target==game.zhu) return -1;
							if(get.attitude(player,target)>3){
								var num=game.zhu.hp-target.hp;
								if(num==1){
									return 1;
								}
								if(num>1){
									if(player.hp==1) return num;
									if(target.hp==1) return num;
									if(num>=3) return num;
								}
							}
							return 0;
						}
					}
				}
			},
			nsjianning:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.identity=='nei';
				},
				filterTarget:function(card,player,target){
					return target.countCards('h')<player.countCards('h');
				},
				content:function(){
					'step 0'
					player.swapHandcards(target);
					'step 1'
					target.damage();
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							if(!player.countCards('h',function(card){
								return get.value(card)>=8;
							})&&player.countCards('h')-target.countCards('h')<=1){
								if(target.hp==1||player.countCards('h',function(card){
									return get.value(card)<0;
								})){
									return get.damageEffect(target,player,target);
								}
							}
							return 0;
						}
					}
				}
			},
			nscuanquan:{
				init:function(player){
					player.storage.nscuanquan=0;
				},
				forced:true,
				unique:true,
				forceunique:true,
				skillAnimation:true,
				animationColor:'thunder',
				trigger:{player:'damageAfter'},
				filter:function(event,player){
					return player.identity=='zhong'&&player.storage.nscuanquan==3&&game.zhu&&game.zhu.isZhu;
				},
				group:'nscuanquan_count',
				subSkill:{
					count:{
						trigger:{player:'damageEnd'},
						silent:true,
						content:function(){
							player.storage.nscuanquan++;
						}
					}
				},
				logTarget:function(){
					return [game.zhu];
				},
				content:function(){
					player.awakenSkill('nscuanquan');
					var tmp=player.maxHp;
					player.identity='zhu';
					player.maxHp=game.zhu.hp;
					player.showIdentity();
					player.update();
					game.zhu.identity='zhong';
					game.zhu.maxHp=tmp;
					game.zhu.showIdentity();
					game.zhu.update();
					game.zhu=player;
				}
			},
			nstianji:{
				trigger:{global:'dying'},
				priority:6,
				unique:true,
				skillAnimation:true,
				animationColor:'water',
				filter:function(event,player){
					return event.player.hp<=0&&event.player!=player;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>1;
				},
				content:function(){
					'step 0'
					player.awakenSkill('nstianji');
					player.loseMaxHp();
					'step 1'
					trigger.player.recover(1-trigger.player.hp);
					'step 2'
					trigger.player.gainMaxHp();
				}
			},
			nsbugua:{
				group:'nsbugua_use',
				ai:{
					threaten:1.4,
				},
				subSkill:{
					use:{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						check:function(card){
							return 9-get.value(card);
						},
						filter:function(event,player){
							// if(!player.storage.nstuiyan2_done&&player.getStat().skill.nsbugua_use){
							// 	return false;
							// }
							return player.countCards('he');
						},
						position:'he',
						ai:{
							order:9.5,
							result:{
								player:1
							}
						},
						content:function(){
							'step 0'
							player.throwDice();
							'step 1'
							var cards=get.cards(6);
							var cards2=cards.slice(0);
							var card=(cards2.splice(event.num-1,1))[0];
							player.showCards(get.translation(player)+'亮出了'+get.translation(card),cards).set('hiddencards',cards2);
							card.discard();
							var name=null;
							switch(get.suit(card)){
								case 'club':{
									if(card.number%2==0){
										name='guohe';
									}
									else{
										name='jiedao';
									}
									break;
								}
								case 'spade':{
									if(card.number%2==0){
										name='nanman';
									}
									else{
										name='juedou';
									}
									break;
								}
								case 'diamond':{
									if(card.number%2==0){
										name='shunshou';
									}
									else{
										name='huogong';
									}
									break;
								}
								case 'heart':{
									if(card.number%2==0){
										name='wuzhong';
									}
									else{
										name='wanjian';
									}
									break;
								}
							}
							var togain=get.cardPile(name,'cardPile');
							if(togain){
								player.gain(togain,'gain2');
							}
							else{
								player.draw();
							}
							event.list=cards2;
							'step 2'
							player.chooseCardButton(event.list,true,'按顺序将牌置于牌堆顶（先选择的在上）',event.list.length);
							'step 3'
							var list=result.links.slice(0);
							while(list.length){
								ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
							}
						},
					},
					twice:{}
				}
			},
			nstuiyan:{
				trigger:{player:'useCard'},
				filter:function(event,player){
					return _status.currentPhase==player&&event.getParent('phaseUse',true)&&!player.hasSkill('nstuiyan_fail')&&
						typeof player.storage.nstuiyan=='number'&&event.card.number>player.storage.nstuiyan;
				},
				frequent:true,
				priority:2,
				content:function(){
					player.draw();
				},
				onremove:function(player){
					delete player.storage.nstuiyan;
					delete player.storage.nstuiyan_done;
					delete player.storage.nstuiyan2;
					delete player.storage.nstuiyan2_done;
				},
				intro:{
					mark:function(dialog,content,player){
						if(player.storage.nstuiyan_done){
							dialog.addText('推演摸牌已结束');
						}
						else{
							dialog.addText('上一张点数：'+player.storage.nstuiyan);
						}
						if(player.storage.nstuiyan2_done){
							dialog.addText('总点数8的倍数已达成');
						}
						else{
							dialog.addText('总点数：'+player.storage.nstuiyan2);
						}
					},
					content:function(storage,player){
						var str='';
						if(player.storage.nstuiyan_done){
							str+='推演摸牌已结束；'
						}
						else{
							str+='上一张牌点数：'+storage+'；';
						}
						if(player.storage.nstuiyan2_done){
							str+='总点数8的倍数已达成';
						}
						else{
							str+='总点数：'+player.storage.nstuiyan2;
						}
						return str;
					},
					markcount:function(storage,player){
						if(player.storage.nstuiyan2_done){
							if(player.storage.nstuiyan_done){
								return 0;
							}
							else{
								return player.storage.nstuiyan;
							}
						}
						else{
							return player.storage.nstuiyan2;
						}
					}
				},
				group:['nstuiyan_use','nstuiyan_clear'],
				subSkill:{
					bugua:{
						trigger:{player:'useCardAfter'},
						direct:true,
						filter:function(event,player){
							return player.countCards('h');
						},
						content:function(){
							'step 0'
							player.removeSkill('nstuiyan_bugua');
							player.chooseToDiscard('he','推演：是否发动一次【卜卦】？').set('ai',function(card){
								return 8-get.value(card);
							}).set('logSkill','nstuiyan');
							'step 1'
							if(result.bool){
								event.insert(lib.skill.nsbugua.subSkill.use.content,{player:player});
							}
						}
					},
					use:{
						trigger:{player:'useCard'},
						silent:true,
						priority:-1,
						filter:function(event,player){
							return _status.currentPhase==player&&event.getParent('phaseUse',true)&&typeof event.card.number=='number';
						},
						content:function(){
							if(typeof player.storage.nstuiyan2!='number'){
								player.storage.nstuiyan2=0;
							}
							if(!player.hasSkill('nstuiyan_fail')&&
								(trigger.card.number<=player.storage.nstuiyan||typeof trigger.card.number!='number')){
									player.storage.nstuiyan_done=true;
									player.addTempSkill('nstuiyan_fail');
								}
							player.storage.nstuiyan=trigger.card.number;
							player.storage.nstuiyan2+=trigger.card.number;
							if(player.storage.nstuiyan2%8==0&&!player.storage.nstuiyan2_done){
								player.storage.nstuiyan2_done=true;
								player.addTempSkill('nstuiyan_bugua');
							}
							player.markSkill('nstuiyan');
						}
					},
					clear:{
						trigger:{player:['phaseUseAfter','phaseAfter']},
						silent:true,
						content:function(){
							delete player.storage.nstuiyan;
							delete player.storage.nstuiyan_done;
							delete player.storage.nstuiyan2;
							delete player.storage.nstuiyan2_done;
							player.unmarkSkill('nstuiyan');
						}
					},
					fail:{}
				},
				ai:{
					threaten:1.4
				}
			},
			nsshijun:{
				trigger:{source:'damageBegin'},
				forced:true,
				content:function(){
					trigger.num++;
					trigger.nsshijun=true;
				},
				subSkill:{
					hp:{
						trigger:{source:'damageAfter'},
						silent:true,
						filter:function(event){
							return event.nsshijun;
						},
						content:function(){
							player.loseHp();
						}
					}
				},
				group:'nsshijun_hp'
			},
			nszhaoxin:{
				mark:true,
				intro:{
					mark:function(dialog,content,player){
						var hs=player.getCards('h');
						if(hs.length){
							dialog.addSmall(hs);
						}
						else{
							dialog.addText('无手牌');
						}
					},
					content:function(content,player){
						var hs=player.getCards('h');
						if(hs.length){
							return get.translation(hs);
						}
						else{
							return '无手牌';
						}
					}
				},
			},
			nsxiuxin:{
				mod:{
					targetEnabled:function(card,player,target){
						var suit=get.suit(card);
						if(suit&&!target.countCards('h',{suit:suit})){
							return false;
						}
					}
				}
			},
			nscangxi:{
				unique:true,
				global:'nscangxi2',
				zhuSkill:true,
				init:function(player){
					player.storage.nscangxi=0;
				},
				intro:{
					content:'手牌上限+#'
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.nscangxi;
					}
				}
			},
			nscangxi2:{
				trigger:{player:'phaseDiscardEnd'},
				filter:function(event,player){
					if(!event.cards||event.cards.length<=1) return false;
					if(player.group!='wu') return false;
					return game.hasPlayer(function(target){
						return player!=target&&target.hasZhuSkill('nscangxi',player);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var list=game.filterPlayer(function(current){
						return current!=player&&current.hasZhuSkill('nscangxi',player);
					});
					list.sortBySeat();
					event.list=list;
					'step 1'
					if(event.list.length){
						var current=event.list.shift();
						event.current=current;
						player.chooseBool(get.prompt('nscangxi',current)).set('choice',get.attitude(player,current)>0);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.logSkill('nscangxi',event.current);
						player.judge(function(card){
							return _status.event.att*(get.color(card)=='black'?1:0);
						}).set('att',get.sgnAttitude(player,event.current));
					}
					else{
						event.goto(1);
					}
					'step 3'
					if(result.color=='black'){
						var name=get.translation(event.current.name);
						var att=0;
						if(event.current.needsToDiscard()){
							att=1;
						}
						player.chooseControlList(['令'+name+'摸一张牌展示','令'+name+'手牌上永久+1','弃置一张牌并令'+name+'获得一张本回进入弃牌堆的牌'],function(){
							return _status.event.att;
						}).set('att',att);
					}
					else{
						event.goto(1);
					}
					'step 4'
					switch(result.index){
						case 0: event.current.draw('visible');break;
						case 1: {
							if(typeof event.current.storage.nscangxi!='number'){
								event.current.storage.nscangxi=0;
							}
							event.current.storage.nscangxi++;
							event.current.syncStorage('nscangxi');
							event.current.markSkill('nscangxi');
							break;
						}
						case 2: {
							player.chooseToDiscard(true,'he');
							break;
						}
					}
					if(result.index!=2){
						event.goto(1);
					}
					'step 5'
					if(result.bool){
						var discarded=get.discarded();
						if(discarded.length){
							event.current.chooseCardButton('选择一张获得之',discarded,true).set('ai',function(button){
								return get.value(button.link);
							});
						}
						else{
							event.goto(1);
						}
					}
					else{
						event.goto(1);
					}
					'step 6'
					if(result.bool&&result.links&&result.links.length){
						event.current.gain(result.links,'gain2');
					}
					event.goto(1);
				}
			},
			nswulie:{
				trigger:{player:'phaseBegin'},
				skillAnimation:true,
				animationColor:'metal',
				unique:true,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return ui.discardPile.childElementCount>0;
				},
				content:function(){
					'step 0'
					player.awakenSkill('nswulie');
					player.loseMaxHp();
					'step 1'
					player.chooseCardButton(Array.from(ui.discardPile.childNodes),'将至多3张任意顺置于牌堆顶（先选择的在上）',true,[1,3]);
					'step 2'
					if(result.bool){
						var cards=result.links.slice(0);
						while(cards.length){
							ui.cardPile.insertBefore(cards.pop(),ui.cardPile.firstChild);
						}
						player.addTempSkill('nswulie_end');
					}
				},
				subSkill:{
					end:{
						trigger:{player:'phaseEnd'},
						check:function(){
							return false;
						},
						filter:function(event,player){
							return ui.discardPile.childElementCount>0;
						},
						content:function(){
							'step 0'
							player.loseMaxHp();
							'step 1'
							player.chooseCardButton(Array.from(ui.discardPile.childNodes),'将至多3张任意顺置于牌堆顶（先选择的在上）',true,[1,3]);
							'step 2'
							if(result.bool){
								var cards=result.links.slice(0);
								while(cards.length){
									ui.cardPile.insertBefore(cards.pop(),ui.cardPile.firstChild);
								}
							}
						}
					}
				}
			},
			nshunyou:{
				enable:'phaseUse',
				usable:1,
				filterCard:{type:'basic'},
				filter:function(event,player){
					return player.countCards('h',{type:'basic'});
				},
				content:function(){
					'step 0'
					var equip=null, trick=null;
					for(var i=0;i<ui.discardPile.childElementCount;i++){
						var type=get.type(ui.discardPile.childNodes[i],'trick');
						if(type=='trick'){
							trick=ui.discardPile.childNodes[i];
						}
						else if(type=='equip'){
							equip=ui.discardPile.childNodes[i];
						}
						if(trick&&equip){
							break;
						}
					}
					var list=[];
					if(trick) list.push(trick);
					if(equip) list.push(equip);
					if(!list.length){
						player.draw(Math.min(3,1+player.maxHp-player.hp));
					}
					else{
						player.gain(list,'gain2');
						event.equip=equip;
					}
					'step 1'
					if(event.equip&&get.owner(event.equip)==player){
						player.chooseTarget('是否将'+get.translation(event.equip)+'装备给一其角色？',function(card,player,target){
							return target!=player
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(att>1){
								if(!target.getEquip(_status.event.subtype)) return att;
							}
							return 0;
						}).set('subtype',get.subtype(event.equip));
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.line(result.targets,'green');
						player.$give(event.equip,result.targets[0]);
						player.lose(event.equip,ui.special);
					}
					else{
						event.finish();
					}
					'step 3'
					game.delay(0.5);
					'step 4'
					result.targets[0].equip(event.equip);
					'step 5'
					game.delay();
				},
				check:function(card){
					return 7-get.value(card);
				},
				ai:{
					order:7,
					result:{
						player:1
					}
				}
			},
			nsgongjian:{
				trigger:{player:'phaseDiscardEnd'},
				forced:true,
				filter:function(event,player){
					if(event.cards&&event.cards.length>0){
						return game.hasPlayer(function(current){
							return current.hp>player.hp;
						});
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget('恭俭：将置的牌交给一名体力值大于你的角色',function(card,player,target){
						return target.hp>player.hp;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target)/Math.sqrt(target.countCards('h')+1);
					});
					'step 1'
					if(result.bool){
						player.line(result.targets,'green');
						result.targets[0].gain(trigger.cards,'gain2');
					}
				},
			},
			nscaijian:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var nh=player.countCards('h');
					return nh&&nh<=player.maxHp;
				},
				content:function(){
					'step 0'
					player.showHandcards();
					event.num=player.countCards('h');
					'step 1'
					player.directgain(get.cards(event.num));
					player.chooseCard('将'+get.cnNumber(event.num)+'张手牌以按顺序置于牌堆顶（先选择的在上）',event.num,true).set('ai',function(card){
						return -get.value(card);
					});
					'step 2'
					if(result.bool){
						player.lose(result.cards,ui.special)._triggered=null;
						event.cards=result.cards.slice(0);
					}
					else{
						event.finish();
					}
					'step 3'
					if(player==game.me&&_status.auto){
						game.delay();
					}
					'step 4'
					while(event.cards.length){
						var current=event.cards.pop();
						current.fix();
						ui.cardPile.insertBefore(current,ui.cardPile.firstChild);
					}
				},
				ai:{
					order:10,
					result:{
						player:1
					}
				}
			},
			nsdongcha:{
				trigger:{player:'damageBefore'},
				forced:true,
				priority:15,
				filter:function(event,player){
					if(get.type(event.card,'trick')=='trick'){
						if(event.getParent(2).name=='useCard'){
							return event.getParent(2).targets.length==1;
						}
						return true;
					}
					return false;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					notrick:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')&&!get.tag(card,'multitarget')){
								return 'zeroplayertarget';
							}
						}
					}
				},
				group:'nsdongcha_cancel',
				subSkill:{
					cancel:{
						trigger:{target:'useCardToAfter'},
						silent:true,
						filter:function(event,player){
							return get.type(event.card,'trick')=='trick'&&_status.currentPhase==event.player&&event.player!=player;
						},
						content:function(){
							player.addTempSkill('nsdongcha_disable');
						}
					},
					disable:{
						trigger:{target:'useCardToBefore'},
						forced:true,
						priority:15,
						onremove:true,
						filter:function(event,player){
							return (event.player==_status.currentPhase&&get.type(event.card,'trick')=='trick');
						},
						content:function(){
							trigger.cancel();
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.type(card,'trick')=='trick'&&_status.currentPhase==player) return 'zeroplayertarget';
								}
							}
						}
					}
				}
			},
			nsjianxiong:{
				trigger:{target:'useCardToBefore'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToUse(function(card){
						return !get.info(card).multitarget;
					},get.prompt('nsjianxiong',trigger.player),trigger.player,-1);
					'step 1'
					if(event.damaged){
						trigger.cancel();
						if(get.color(trigger.card)=='black'){
							player.draw();
						}
					}
				},
				subSkill:{
					damage:{
						trigger:{source:'damageAfter'},
						silent:true,
						filter:function(event,player){
							return event.getParent(4).name=='nsjianxiong';
						},
						content:function(){
							trigger.getParent(4).damaged=true;
						}
					}
				},
				group:'nsjianxiong_damage',
				ai:{
					effect:{
						player:function(card,player,target){
							if(_status.currentPhase!=player) return;
							if(get.tag(card,'damage')&&!player.needsToDiscard(1)&&target.hp>1){
								return 'zeroplayertarget';
							}
						}
					}
				}
			},
			nsxionglue:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',{color:'black'});
				},
				check:function(card){
					return 7-get.value(card);
				},
				filterCard:{color:'black'},
				content:function(){
					'step 0'
					var list=get.inpile('trick');
					list=list.randomGets(3);
					for(var i=0;i<list.length;i++){
						list[i]=['锦囊','',list[i]];
					}
					var dialog=ui.create.dialog('选择一张锦囊牌加入你的手牌',[list,'vcard'],'hidden');
					player.chooseButton(dialog,true).set('ai',function(button){
						var card={name:button.link[2]};
						var value=get.value(card);
						return value;
					});
					'step 1'
					if(result.bool){
						player.gain(game.createCard(result.buttons[0].link[2]),'draw');
					}
				},
				ai:{
					order:9,
					result:{
						player:1
					}
				}
			},
			nshuanhuo:{
				trigger:{player:['loseHpAfter','damageAfter']},
				filter:function(event,player){
					if(game.countPlayer(function(current){
						return current!=player&&!current.isUnseen(2);
					})<2) return false;
					if(event.name=='damage') return event.num>1;
					return true;
				},
				direct:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.chooseTarget(2,get.prompt2('nshuanhuo'),function(card,player,target){
						return target!=player&&!target.isUnseen(2);
					}).set('ai',function(target){
						var att=get.attitude(player,target);
						if(ui.selected.targets.length){
							if(att<0){
								return get.rank(target,true)-get.rank(ui.selected.targets[0],true);
							}
						}
						else{
							if(att>=0){
								return 1/(1+get.rank(target,true));
							}
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('nshuanhuo',result.targets);
					}
					else{
						event.finish();
					}
					'step 2'
					var name1=result.targets[0].name;
					var name2=result.targets[1].name;
					result.targets[0].reinit(name1,name2,false);
					result.targets[1].reinit(name2,name1,false);
				}
			},
			nsyaowang:{
				trigger:{player:'phaseBegin'},
				direct:true,
				createDialog:function(player,target,onlylist){
					var names=[];
					var list=[];
					if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
					if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
					var pss=player.getSkills();
					for(var i=0;i<names.length;i++){
						var info=lib.character[names[i]];
						if(info){
							var skills=info[3];
							for(var j=0;j<skills.length;j++){
								if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
									!lib.skill[skills[j]].unique&&
									!pss.includes(skills[j])){
									list.add(skills[j]);
								}
							}
						}
					}
					if(onlylist) return list;
					var dialog=ui.create.dialog('forcebutton');
					dialog.add('选择获得一项技能');
					_status.event.list=list;
					var clickItem=function(){
						_status.event._result=this.link;
						game.resume();
					};
					for(i=0;i<list.length;i++){
						if(lib.translate[list[i]+'_info']){
							var translation=get.translation(list[i]);
							if(translation[0]=='新'&&translation.length==3){
								translation=translation.slice(1,3);
							}
							else{
								translation=translation.slice(0,2);
							}
							var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
							translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
							item.firstChild.addEventListener('click',clickItem);
							item.firstChild.link=list[i];
						}
					}
					dialog.add(ui.create.div('.placeholder'));
					return dialog;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsyaowang'),function(card,player,target){
						var names=[];
						if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
						if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
						var pss=player.getSkills();
						for(var i=0;i<names.length;i++){
							var info=lib.character[names[i]];
							if(info){
								var skills=info[3];
								for(var j=0;j<skills.length;j++){
									if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
										!lib.skill[skills[j]].unique&&!pss.includes(skills[j])){
										return true;
									}
								}
							}
							return false;
						}
					}).set('ai',function(target){
						if(get.attitude(_status.event.player,target)>0) return Math.random();
						return 0;
					});
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						player.logSkill('nsyaowang',event.target);
					}
					else{
						event.finish();
					}
					'step 2'
					event.skillai=function(list){
						return get.max(list,get.skillRank,'item');
					};
					if(event.isMine()){
						event.dialog=lib.skill.nsyaowang.createDialog(player,target);
						event.switchToAuto=function(){
							event._result=event.skillai(event.list);
							game.resume();
						};
						_status.imchoosing=true;
						game.pause();
					}
					else{
						event._result=event.skillai(lib.skill.nsyaowang.createDialog(player,target,true));
					}
					'step 3'
					_status.imchoosing=false;
					if(event.dialog){
						event.dialog.close();
					}
					player.addTempSkill(result);
					player.popup(result);
					game.log(player,'获得了','【'+get.translation(result)+'】');
					var names=[];
					for(var i=0;i<game.players.length;i++){
						names.add(game.players[i].name);
						names.add(game.players[i].name1);
						names.add(game.players[i].name2);
					}
					for(var i=0;i<game.dead.length;i++){
						names.add(game.dead[i].name);
						names.add(game.dead[i].name1);
						names.add(game.dead[i].name2);
					}
					var list=get.gainableSkills(function(info,skill,name){
						if(names.includes(name)) return false;
						return true;
					});
					var skill=list.randomGet();
					target.popup(skill);
					target.addTempSkill(skill,{player:'phaseAfter'});
					game.log(target,'获得了','【'+get.translation(skill)+'】');
				}
			},
			nsjianshu:{
				trigger:{player:'shaBegin'},
				forced:true,
				filter:function(event,player){
					return !event.directHit&&player.getEquip(1);
				},
				priority:-1,
				content:function(){
					if(typeof trigger.shanRequired=='number'){
						trigger.shanRequired++;
					}
					else{
						trigger.shanRequired=2;
					}
				}
			},
			nscangjian:{
				trigger:{source:'damageEnd'},
				direct:true,
				filter:function(event){
					return event.player.isIn()&&event.player.countCards('e');
				},
				content:function(){
					player.gainPlayerCard(trigger.player,'e',get.prompt('nscangjian',trigger.player)).logSkill=['nscangjian',trigger.player];
				}
			},
			nsyunxing:{
				trigger:{global:'dieAfter'},
				forced:true,
				check:function(event,player){
					return event.player.group=='wei'||(event.player.group=='wu'&&player.hp==1);
				},
				filter:function(event,player){
					return ['wei','shu','wu','qun'].includes(event.player.group);
				},
				content:function(){
					'step 0'
					switch(trigger.player.group){
						case 'wei':player.draw();break;
						case 'shu':player.loseHp();break;
						case 'wu':player.recover();break;
						case 'qun':{
							var evt=_status.event.getParent('phaseUse');
							if(evt&&evt.name=='phaseUse'){
								evt.skipped=true;
							}
							var evt=_status.event.getParent('phase');
							if(evt&&evt.name=='phase'){
								evt.finish();
							}
							break;
						}
					}
					if(trigger.player.group!='wei'||!game.hasPlayer(function(current){
						return current.countCards('h');
					})){
						event.finish();
					}
					'step 1'
					player.chooseTarget('弃置一名角色的一张手牌',true,function(card,player,target){
						return target.countCards('h');
					}).set('ai',function(target){
						if(target.hasSkillTag('noh')) return 0;
						return -get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.discardPlayerCard(target,true,'h');
						player.line(target,'green');
					}
				},
				group:'nsyunxing_self',
				subSkill:{
					self:{
						trigger:{player:'dieBegin'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('nsyunxing'),function(card,player,target){
								return target!=player;
							}).set('prompt2','令一名其他角色翻面').set('ai',function(target){
								var att=get.attitude(_status.event.player,target);
								if(target.isTurnedOver()){
									if(att>2){
										return att*2;
									}
									else{
										return att;
									}
								}
								else{
									return -att;
								}
							});
							'step 1'
							if(result.bool){
								player.logSkill('nsyunxing',result.targets);
								result.targets[0].turnOver();
							}
						}
					}
				}
			},
			nsguanxing:{
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.hp>0;
				},
				content:function(){
					'step 0'
					event.cards=get.cards(game.countPlayer());
					event.chosen=[];
					event.num=player.hp;
					'step 1'
					var js=player.getCards('j');
					var pos;
					var choice=-1;
					var getval=function(card,pos){
						if(js[pos]){
							return (get.judge(js[pos]))(card);
						}
						else{
							return get.value(card);
						}
					};
					for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
						var max=getval(event.cards[pos],pos);
						for(var j=pos+1;j<event.cards.length;j++){
							var current=getval(event.cards[j],pos);
							if(current>max){
								choice=j;
								max=current;
							}
						}
						if(choice!=-1){
							break;
						}
					}
					player.chooseCardButton('观星：选择要移动的牌（还能移动'+event.num+'张）',event.cards).set('filterButton',function(button){
						return !_status.event.chosen.includes(button.link);
					}).set('chosen',event.chosen).set('ai',function(button){
						return button.link==_status.event.choice?1:0;
					}).set('choice',event.cards[choice]);
					event.pos=pos;
					'step 2'
					if(result.bool){
						var card=result.links[0];
						var index=event.cards.indexOf(card);
						event.card=card;
						event.chosen.push(card);
						event.cards.remove(event.card);
						var buttons=event.cards.slice(0);
						player.chooseControl(function(){
							return _status.event.controlai;
						}).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
					}
					else{
						event.goto(4);
					}
					'step 3'
					if(typeof result.index=='number'){
						if(result.index>event.cards.length){
							ui.cardPile.appendChild(event.card);
						}
						else{
							event.cards.splice(result.index,0,event.card);
						}
						event.num--;
						if(event.num>0){
							event.goto(1);
						}
					}
					'step 4'
					while(event.cards.length){
						ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
					}
					var js=player.getCards('j');
					if(js.length==1){
						if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
							player.addTempSkill('guanxing_fail');
						}
					}
				},
				ai:{
					guanxing:true
				}
			},
			nshaoling:{
				skillAnimation:true,
				animationColor:'water',
				unique:true,
				limited:true,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					player.awakenSkill('nshaoling');
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.remove(target);
					event.targets.sortBySeat();
					"step 1"
					if(event.targets.length){
						event.current=event.targets.shift();
						if(event.current.countCards('he')&&target.isAlive()){
							event.current.chooseToUse({name:'sha'},target,-1,'号令').set('prompt2','选择一项：1. 对'+get.translation(event.current)+'使用一张杀；2. 取消并交给'+get.translation(player)+'一张牌，然后视'+get.translation(player)+'为对你使用一张杀');
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool==false){
						if(event.current.countCards('he')){
							event.current.chooseCard('he',true,'交给'+get.translation(player)+'一张牌');
						}
						else{
							event.goto(4);
						}
					}
					else{
						event.goto(1);
					}
					"step 3"
					if(result.bool){
						event.current.give(result.cards,player);
					}
					"step 4"
					player.useCard({name:'sha'},event.current,false);
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							var players=game.filterPlayer();
							if(player.hp>1){
								if(game.phaseNumber<game.players.length) return 0;
								if(player.hasUnknown()) return 0;
							}
							var effect=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=target&&players[i]!=player&&players[i].countCards('he'))
								effect+=get.effect(target,{name:'sha'},players[i],target);
							}
							return effect;
						}
					}
				}
			},
			nsgefa:{
				enable:'chooseToUse',
				filter:function(event,player){
					return player.hp<=0;
				},
				filterCard:{suit:'club'},
				position:'hse',
				viewAs:{name:'tao'},
				prompt:'将一张梅花牌当桃使用',
				check:function(card){return 15-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('hes',{suit:'club'})>0;
					},
					threaten:1.5,
					save:true,
					respondTao:true,
				}
			},
			nscaiyi:{
				trigger:{global:'drawAfter'},
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(get.effect(event.player,{name:'sha'},player,player)<=0) return false;
					if(get.effect(player,{name:'sha'},event.player,player)>=0) return true;
					return player.hasShan()&&player.hp>=event.player.hp;
				},
				filter:function(event,player){
					return player!=event.player&&Array.isArray(event.result)&&event.result.length>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.viewCards(get.translation(trigger.player)+'摸到的牌',trigger.result);
					if(!event.isMine()){
						game.delayx();
					}
					'step 1'
					var list=[];
					for(var i=0;i<trigger.result.length;i++){
						if(trigger.result[i].name=='sha'){
							list.push(trigger.result[i]);
						}
					}
					if(list.length){
						player.useCard({name:'sha'},trigger.player);
					}
					else{
						trigger.player.useCard({name:'sha'},player);
					}
				}
			},
			nspinmin:{
				trigger:{player:'dieBefore'},
				forced:true,
				filter:function(event,player){
					return player.maxHp>0;
				},
				content:function(){
					trigger.cancel();
					player.hp=1;
					player.update();
					if(_status.currentPhase==player){
						var num=4;
						// if(game.countPlayer()>=7){
						// 	num=5;
						// }
						if(!player.hasSkill('nspinmin_used')&&player.maxHp<num){
							player.gainMaxHp(true);
							player.addTempSkill('nspinmin_used');
						}
					}
					else{
						player.loseMaxHp(true);
					}
				},
				subSkill:{
					used:{}
				}
			},
			nsshishou:{
				trigger:{player:'loseEnd'},
				forced:true,
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'
					player.draw();
				},
				group:'nsshishou_use',
				subSkill:{
					use:{
						mod:{
							cardEnabled:function(card,player){
								if(_status.currentPhase!=player) return;
								if(get.cardCount(true,player)>=4){
									return false;
								}
							}
						}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'save')){
								if(_status.currentPhase==player) return 0;
								if(target.maxHp>1&&player!=target) return 0;
							}
							if(get.tag(card,'recover')){
								if(_status.currentPhase==player) return 0;
							}
						}
					}
				}
			},
			nsduijue:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h');
				},
				content:function(){
					"step 0"
					var color={
						black:player.countCards('h',function(card){
							return get.color(card)=='red'&&get.value(card)<8;
						}),
						red:player.countCards('h',function(card){
							return get.color(card)=='black'&&get.value(card)<8;
						})
					};
					player.chooseToDiscard(get.prompt2('nsduijue')).set('ai',function(card){
						var num=_status.event.color[get.color(card)];
						if(_status.event.goon&&num>=1){
							return 7+num-get.value(card);
						}
					}).set('goon',game.hasPlayer(function(current){
						return get.effect(current,{name:'juedou'},player,player)>0;
					})).set('color',color).set('logSkill','nsduijue');
					"step 1"
					if(result.bool){
						player.addTempSkill('nsduijue_use');
						player.storage.nsduijue_use=get.color(result.cards[0]);
					}
				},
				subSkill:{
					use:{
						enable:'phaseUse',
						viewAs:{name:'juedou'},
						usable:2,
						filter:function(event,player){
							return player.hasCard(function(card){
								return get.color(card)!=player.storage.nsduijue_use;
							},'hs');
						},
						position:'hs',
						filterCard:function(card,player){
							return get.color(card)!=player.storage.nsduijue_use;
						},
						check:function(card){
							return 8-get.value(card);
						},
						ai:{
							basic:{
								order:10
							}
						}
					}
				}
			},
			nsshuangxiong:{
				trigger:{player:'juedouBegin',target:'juedouBegin'},
				check:function(event,player){
					return player.isTurnedOver();
				},
				content:function(){
					player.turnOver();
				}
			},
			nsguanyong:{
				enable:'chooseToRespond',
				filterCard:true,
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('hs')) return false;
				},
				position:'hs',
				prompt:'将一张手牌当杀打出',
				check:function(card){return 7-get.value(card)},
				ai:{
					respondSha:true,
					skillTagFilter:function(player,tag,arg){
						if(arg!='respond') return false;
						if(!player.countCards('hs')) return false;
					},
				}
			},
			nsjihui:{
				trigger:{global:'discardAfter'},
				filter:function(event,player){
					return event.cards.length>=3;
				},
				content:function(){
					player.insertPhase();
					player.storage.nsjihui_use=_status.currentPhase;
					player.addSkill('nsjihui_use');
				},
				subSkill:{
					use:{
						mark:'character',
						intro:{
							content:'使用牌只能指定自己与$为目标'
						},
						trigger:{player:'phaseAfter'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.skill=='nsjihui';
						},
						onremove:true,
						content:function(){
							player.removeSkill('nsjihui_use');
						},
						mod:{
							playerEnabled:function(card,player,target){
								if(player!=target&&player.storage.nsjihui_use!=target) return false;
							}
						}
					}
				}
			},
			nsmouyun:{
				enable:'phaseUse',
				round:2,
				filterTarget:function(card,player,target){
					return target.isMinHp()&&target!=player&&target.isDamaged();
				},
				content:function(){
					if(target.isDamaged()){
						player.discardPlayerCard(target,'hej',target.maxHp-target.hp,true);
					}
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							return target.hp-target.maxHp;
						}
					}
				}
			},
			nscongjun:{
				forbid:['guozhan'],
				unique:true,
				forceunique:true,
				init:function(player){
					if(player.storage.nscongjun_show) return false;
					var change=function(target){
						if(target==player){
							var list;
							if(_status.connectMode){
								list=get.charactersOL(function(i){
									return lib.character[i][0]!='male';
								});
							}
							else{
								list=get.gainableCharacters(function(info){
									return info[0]=='male';
								});
							}
							var name=list.randomGet();
							target.reinit('ns_huamulan',name,'nosmooth');
							target.storage.nscongjun_show=name;
							target.addSkill('nscongjun_show');
							player._inits.remove(change);
							player.hp=player.maxHp;
							player.update();
						}
					}
					if(!player._inits){
						player._inits=[];
					}
					player._inits.push(change);
				},
				subSkill:{
					show:{
						trigger:{global:'useCard'},
						filter:function(event,player){
							return player.getEnemies().includes(event.player)&&event.card.name=='wuxie'&&event.getRand()<0.1;
						},
						direct:true,
						skillAnimation:true,
						animationColor:'thunder',
						content:function(){
							'step 0'
							game.delay(0.5);
							'step 1'
							player.reinit(player.storage.nscongjun_show,'ns_huamulan','nosmooth');
							player.logSkill('nscongjun_show');
							'step 2'
							player.removeSkill('nscongjun_show');
							player.line(trigger.player,'green');
							trigger.player.damage(2);
						}
					}
				}
			},
			nstaiping_nh:{
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return !event.nshuanxian&&player.getSubPlayers('nshuanxian').length;
				},
				direct:true,
				priority:-0.1,
				ai:{
					maixie:true,
					maixie_hp:true
				},
				content:function(){
					'step 0'
					event.num=trigger.num;
					'step 1'
					var left=player.storage.nshuanxian_left;
					var right=player.storage.nshuanxian_right;
					var list=[];
					var choice=0;
					var hpleft=0;
					var maxleft=0;
					if(left&&player.hasSkill(left)){
						if(player.storage[left].hp<player.storage[left].maxHp){
							list.push('令幻身·左回复1点体力');
							hpleft=player.storage[left].hp;
						}
						list.push('令幻身·左增加1点体力上限');
						maxleft=player.storage[left].hp;
					}
					if(left&&player.hasSkill(right)){
						if(player.storage[right].hp<player.storage[right].maxHp){
							list.push('令幻身·右回复1点体力');
							if(!hpleft||player.storage[right].hp<hpleft||
								(player.storage[right].hp==hpleft&&Math.random()<0.5)){
								choice=list.length-1;
							}
						}
						list.push('令幻身·右增加1点体力上限');
						if(!hpleft&&maxleft&&choice==0){
							if(player.storage[right].maxHp<maxleft||
								(player.storage[right].maxHp==maxleft&&Math.random()<0.5)){
								choice=list.length-1;
							}
						}
					}
					if(!list.length){
						event.finish();
						return;
					}
					event.map={};
					for(var i=0;i<list.length;i++){
						event.map['选项'+get.cnNumber(i+1,true)]=list[i];
					}
					player.chooseControlList(list,function(){
						return _status.event.choice;
					}).set('prompt',get.prompt('nstaiping_nh')).set('choice',choice);
					'step 2'
					var left=player.storage.nshuanxian_left;
					var right=player.storage.nshuanxian_right;
					if(result.control!='cancel2'){
						player.logSkill('nstaiping_nh');
						switch(event.map[result.control]){
							case '令幻身·左回复1点体力':player.storage[left].hp++;break;
							case '令幻身·左增加1点体力上限':player.storage[left].maxHp++;break;
							case '令幻身·右回复1点体力':player.storage[right].hp++;break;
							case '令幻身·右增加1点体力上限':player.storage[right].maxHp++;break;
						}
						game.log(player,event.map[result.control].replace(/一/,'了一'));
					}
					'step 3'
					if(event.num>1){
						event.num--;
						event.goto(1);
					}
				}
			},
			nsshoudao:{
				group:['nsshoudao_gain','nsshoudao_die'],
				subSkill:{
					gain:{
						trigger:{player:'subPlayerDie'},
						forced:true,
						filter:function(event,player){
							var left=player.storage.nshuanxian_left;
							if(left&&player.hasSkill(left)) return false;
							var right=player.storage.nshuanxian_right;
							if(right&&player.hasSkill(right)) return false;
							if(!player.storage.nshuanxian_damage) return false;
							return true;
						},
						content:function(){
							player.addSkill('releiji');
							player.addSkill('guidao');
						}
					},
					die:{
						trigger:{player:'dieBegin'},
						direct:true,
						filter:function(event,player){
							if(game.countPlayer()<=2) return false;
							var left=player.storage.nshuanxian_left;
							if(left&&player.hasSkill(left)) return true;
							var right=player.storage.nshuanxian_right;
							if(right&&player.hasSkill(right)) return true;
							return false;
						},
						content:function(){
							'step 0'
							var str;
							var left=player.storage.nshuanxian_left;
							var right=player.storage.nshuanxian_right;
							if(left&&player.hasSkill(left)&&right&&player.hasSkill(right)){
								str='令一名其他角色获得技能【雷击】和【鬼道】';
							}
							else{
								str='令一名其他角色获得技能【雷击】或【鬼道】';
							}
							if(trigger.source){
								str+='（'+get.translation(trigger.source)+'除外）';
							}
							player.chooseTarget(function(card,player,target){
								return target!=player&&target!=_status.event.source;
							},get.prompt('nsshoudao')).set('ai',function(target){
								if(target.hasSkill('releiji')) return 0;
								return get.attitude(_status.event.player,target);
							}).set('source',trigger.source).set('prompt2',str);
							'step 1'
							var goon=false;
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('nsshoudao',target);
								var left=player.storage.nshuanxian_left;
								var right=player.storage.nshuanxian_right;
								if(left&&player.hasSkill(left)&&right&&player.hasSkill(right)){
									target.addSkillLog('releiji');
									target.addSkillLog('guidao');
								}
								else{
									event.target=target;
									player.chooseControl('releiji','guidao').set('prompt','令'+get.translation(target)+'获得一项技能');
									goon=true;
								}
							}
							if(!goon){
								event.finish();
							}
							'step 2'
							event.target.addSkillLog(result.control);
						}
					}
				}
			},
			nshuanxian:{
				trigger:{global:'gameStart',player:'enterGame'},
				forced:true,
				nosub:true,
				unique:true,
				group:['nshuanxian_left','nshuanxian_right','nshuanxian_damage','nshuanxian_swap','nshuanxian_draw'],
				content:function(){
					player.storage.nshuanxian_right=player.addSubPlayer({
						name:'ns_nanhua_right',
						skills:['nshuanxian_left','nshuanxian_draw','nshuanxian_swap'],
						hp:2,
						maxHp:2,
						hs:get.cards(2),
						skill:'nshuanxian',
						intro:'你的本体回合结束后，切换至此随从并进行一个额外的回合；若你的上家与下家不同，在你的下家的准备阶段，切换至此随从',
						intro2:'当前回合结束后切换回本体',
						onremove:function(player){
							delete player.storage.nshuanxian_right;
						}
					});
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(!target.hasFriend()) return;
								if(target.hp<=2) return;
								if(!target.storage.nshuanxian_damage){
									if(get.attitude(player,target)<0||get.tag(card,'multineg')) return [0,1];
									return [1,1];
								}
							}
						}
					}
				},
				// mod:{
				// 	globalFrom:function(from,to,distance){
				//
				// 	},
				// 	globalTo:function(from,to,distance){
				//
				// 	}
				// },
				// global:'nshuanxian_choose',
				subSkill:{
					chosen:{},
					leftdist:{
						mod:{
							globalFrom:function(from,to,distance){
							},
							globalTo:function(from,to,distance){
							}
						}
					},
					rightdist:{
						mod:{
							globalFrom:function(from,to,distance){
							},
							globalTo:function(from,to,distance){
							}
						}
					},
					swap:{
						trigger:{global:'phaseBegin'},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.player!=player;
						},
						priority:20,
						content:function(){
							var next=player.getNext();
							var prev=player.getPrevious();
							var left=player.storage.nshuanxian_left;
							var right=player.storage.nshuanxian_right;
							if(prev==next||(trigger.player!=next&&trigger.player!=prev)){
								if(player.hasSkill('subplayer')){
									player.exitSubPlayer();
								}
							}
							else if(prev==trigger.player&&player.name!=left&&left){
								if(!player.hasSkill('subplayer')){
									player.callSubPlayer(left);
								}
								else{
									player.toggleSubPlayer(left);
								}
							}
							else if(next==trigger.player&&player.name!=right&&right){
								if(!player.hasSkill('subplayer')){
									player.callSubPlayer(right);
								}
								else{
									player.toggleSubPlayer(right);
								}
							}
						}
					},
					damage:{
						trigger:{player:'damageEnd'},
						forced:true,
						filter:function(event,player){
							return !player.storage.nshuanxian_damage;
						},
						content:function(){
							player.storage.nshuanxian_damage=true;
							player.storage.nshuanxian_left=player.addSubPlayer({
								name:'ns_nanhua_left',
								skills:['nshuanxian_middle','nshuanxian_draw','nshuanxian_swap'],
								hp:2,
								maxHp:2,
								hs:get.cards(2),
								skill:'nshuanxian',
								intro:'你的本体回合开始前，切换至此随从并进行一个额外的回合；若你的上家与下家不同，在你的上家的准备阶段，切换至此随从',
								intro2:'当前回合结束后切换回本体',
								onremove:function(player){
									delete player.storage.nshuanxian_left;
								}
							});
							trigger.nshuanxian=true;
						}
					},
					draw:{
						trigger:{player:'phaseDrawBegin'},
						silent:true,
						filter:function(event){
							return event.num>0;
						},
						content:function(){
							trigger.num--;
						}
					},
					left:{
						trigger:{player:'phaseBefore'},
						forced:true,
						popup:false,
						priority:40,
						filter:function(event,player){
							if(event.skill=='nshuanxian_middle') return false;
							if(event.skill=='nshuanxian_right') return false;
							var left=player.storage.nshuanxian_left;
							if(player.hasSkill('subplayer')){
								if(!left) return player.name==player.storage.nshuanxian_right;
								return player.storage.subplayer.skills.includes(left);
							}
							else{
								if(!left) return false;
								return player.hasSkill(left);
							}
						},
						content:function(){
							if(player.hasSkill('subplayer')){
								var left=player.storage.nshuanxian_left;
								if(left&&player.storage.subplayer.skills.includes(left)){
									player.toggleSubPlayer(player.storage.nshuanxian_left);
								}
								else{
									player.exitSubPlayer();
								}
							}
							else{
								player.callSubPlayer(player.storage.nshuanxian_left);
							}
						}
					},
					middle:{
						trigger:{player:['phaseAfter','phaseCancelled']},
						forced:true,
						popup:false,
						priority:-40,
						filter:function(event,player){
							if(player.hasSkill('nshuanxian_chosen')) return false;
							return true;
						},
						content:function(){
							player.exitSubPlayer();
							player.insertPhase(null,true);
						}
					},
					right:{
						trigger:{player:['phaseAfter','phaseCancelled']},
						forced:true,
						popup:false,
						priority:-40,
						filter:function(event,player){
							if(player.hasSkill('nshuanxian_chosen')) return false;
							if(player.hasSkill('subplayer')) return false;
							var right=player.storage.nshuanxian_right;
							if(!right) return false;
							return player.hasSkill(right);
						},
						content:function(){
							player.callSubPlayer(player.storage.nshuanxian_right);
							player.insertPhase(null,true);
							player.addTempSkill('nshuanxian_chosen',['phaseBegin','phaseCancelled']);
						}
					},
					end:{
						trigger:{player:['phaseAfter','phaseCancelled']},
						forced:true,
						popup:false,
						priority:-40,
						filter:function(event,player){
							if(player.hasSkill('nshuanxian_chosen')) return false;
							return true;
						},
						content:function(){
							if(player.hasSkill('subplayer')){
								player.exitSubPlayer();
							}
						},
						content_old:function(){
							'step 0'
							var controls=['本体'];
							var left=player.storage.nshuanxian_left;
							var right=player.storage.nshuanxian_right;
							if(player.hasSkill('subplayer')){
								if(player.storage.subplayer.skills.includes(left)){
									controls.unshift('幻身·左');
								}
								if(player.storage.subplayer.skills.includes(right)){
									controls.push('幻身·右');
								}
							}
							else{
								if(player.hasSkill(left)){
									controls.unshift('幻身·左');
								}
								if(player.hasSkill(right)){
									controls.push('幻身·右');
								}
							}
							if(controls.length>1){
								player.chooseControl(controls,function(event,player){
									return Math.floor(Math.random()*_status.event.num);
								}).set('prompt','选择一个形态直到下一回合开始').set('num',controls.length);
							}
							else{
								event.finish();
							}
							'step 1'
							switch(result.control){
								case '幻身·左':{
									if(!player.hasSkill('subplayer')){
										player.callSubPlayer(player.storage.nshuanxian_left);
									}
									else{
										player.toggleSubPlayer(player.storage.nshuanxian_left);
									}
									break;
								}
								case '幻身·右':{
									if(!player.hasSkill('subplayer')){
										player.callSubPlayer(player.storage.nshuanxian_right);
									}
									break;
								}
								default:{
									if(player.hasSkill('subplayer')){
										player.exitSubPlayer();
									}
									break;
								}
							}
							player.addTempSkill('nshuanxian_chosen','phaseBegin');
						}
					}
				}
			},
			nsnongquan:{
				enable:'phaseUse',
				// usable:4,
				filter:function(event,player){
					return player.countCards('h')==1&&player.canUse('wuzhong',player);
				},
				direct:true,
				delay:0,
				content:function(){
					player.useCard({name:'wuzhong'},player.getCards('h'),player,'nsnongquan');
				},
				ai:{
					order:10,
					result:{
						player:function(player,target){
							return 10-get.value(player.getCards('h')[0]);
						}
					}
				}
			},
			nsdufu:{
				trigger:{source:'damageBefore'},
				check:function(event,player){
					return event.player.hasSkillTag('maixie');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsdufu'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						if(_status.event.bool){
							return -get.attitude(_status.event.player,target);
						}
						return 0;
					}).set('bool',trigger.player.hasSkillTag('maixie_defend'));
					'step 1'
					if(result.bool){
						player.logSkill('nsdufu',result.targets);
						trigger.source=result.targets[0];
					}
				}
			},
			yiesheng:{
				enable:'phaseUse',
				filterCard:{color:'black'},
				filter:function(event,player){
					return player.countCards('h',{color:'black'})>0;
				},
				selectCard:[1,Infinity],
				prompt:'弃置任意张黑色手牌并摸等量的牌',
				check:function(card){return 5-get.value(card)},
				content:function(){
					player.draw(cards.length);
				},
				ai:{
					order:1,
					result:{
						player:1
					},
				},
			},
			liangji:{
				audio:["liangji",2],
				enable:"phaseUse",
				usable:1,
				filterTarget:function (card,player,target){
					return target!=player&&!target.hasSkill('liangji_1');
				},
				content:function (){
					'step 0'
					player.chooseCard('h','环计：将一张牌置于'+get.translation(target)+'的武将牌上',true).set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							return 7-get.value(card);
						}
						return -get.value(card);
					});
					'step 1'
					if(result.bool){
						player.$give(result.cards,target);
						player.lose(result.cards,ui.special);
						target.storage.liangji_1=result.cards;
						target.storage.liangji_1_source=target;
						target.syncStorage('liangji_1');
						target.addSkill('liangji_1');
					}
				},
				ai:{
					order:1,
					result:{
						target:function (player,target){
							if(get.attitude(player,target)>0){
								return Math.sqrt(target.countCards('he'));
							}
							return 0;
						},
						player:1,
					},
				},
				subSkill:{
					"1":{
						trigger:{
							player:"phaseDrawBegin",
						},
						forced:true,
						mark:true,
						intro:{
							content:"cards",
						},
						content:function (){
							'step 0'
							var cards=player.storage.liangji_1;
							if(cards){
								player.gain(cards,'gain2');
							}
							player.storage.liangji_1=0;
							'step 1'
							if(player.sex=='male')player.addTempSkill('wushuang');
							if(player.sex=='female')player.addTempSkill('lijian');
							player.removeSkill('liangji_1');
						},
						sub:true,
					},
				},
			},
			jugong:{
				audio:["jingong",2],
				trigger:{
					global:"damageEnd",
				},
				usable:1,
				frequent:true,
				locked:false,
				notemp:true,
				marktext:"功",
				init:function (player){
					player.storage.jugong=[];
				},
				filter:function (event,player){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink()
					&&_status.currentPhase!=player;
				},
				content:function (){
					"step 0"
					player.draw();
					"step 1"
					if(player.countCards('h')){
						player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“功”',1,true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length){
						player.lose(result.cards,ui.special);
						player.storage.jugong=player.storage.jugong.concat(result.cards);
						player.syncStorage('jugong');
						player.markSkill('jugong');
						game.log(player,'将',result.cards,'置于武将牌上作为“功”');
					}
				},
				intro:{
					content:"cards",
				},
				group:"jugong_1",
				subSkill:{
					"1":{
						trigger:{
							player:"damageBegin",
						},
						filter:function (event,player){
							return player.storage.jugong.length>1;
						},
						content:function (){
							"step 0"
							player.chooseCardButton('移去两张“功”',2,player.storage.jugong,true);
							"step 1"
							if(event.directresult||result.bool){
								player.logSkill('jugong');
								var links=event.directresult||result.links;
								for(var i=0;i<links.length;i++){
									player.storage.jugong.remove(links[i]);
								}
								player.syncStorage('jugong');
								if(!player.storage.jugong.length){
									player.unmarkSkill('jugong');
								}
								else{
									player.markSkill('jugong');
								}
								player.$throw(links);
								game.log(player,'被移去了',links);
								for(var i=0;i<links.length;i++){
									ui.discardPile.appendChild(links[i]);
								}
							}
							"step 2"
							trigger.cancel();
						},
						sub:true,
					},
				},
				ai:{
					effect:{
						target:function (card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
								if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [0.5,get.tag(card,'damage')*0.2];
								if(target.hp==2) return [0.1,get.tag(card,'damage')*0.1];
							}
						},
					},
				},
			},
			chengmou:{
				audio:["moucheng",2],
				trigger:{
					player:"phaseDrawBegin",
				},
				frequent:true,
				filter:function (event,player){
					return player.storage.jugong.length>0;
				},
				content:function (){
					'step 0'
					if(player.storage.jugong.length>2) player.loseHp();
					'step 1'
					var cards=player.storage.jugong;
					if(cards){
						player.gain(cards,'gain2');
					}
					player.storage.jugong=[];
					'step 2'
					trigger.cancel();
				},
			},
			nsxinsheng:{
				trigger:{source:'damageEnd'},
				frequent:true,
				filter:function(event,player){
					return player.isHealthy();
				},
				content:function(){
					player.gainMaxHp(trigger.num,true);
					player.draw(trigger.num);
				}
			},
			nsdunxing:{
				trigger:{player:'damageBefore'},
				filter:function(event,player){
					return player.isDamaged();
				},
				content:function(){
					trigger.cancel();
					player.loseMaxHp(trigger.num,true);
					player.draw(trigger.num);
				}
			},
			liangce:{
				enable:'phaseUse',
				viewAs:{name:'wugu'},
				usable:1,
				filterCard:{type:'basic'},
				position:'hs',
				filter:function(event,player){
					return player.countCards('hs',{type:'basic'})>0;
				},
				check:function(card){
					return 6-get.value(card);
				},
				group:'liangce2'
			},
			liangce2:{
				trigger:{global:'wuguRemained'},
				direct:true,
				filter:function(event){
					return event.remained.filterInD().length>0;
				},
				content:function(){
					'step 0'
					var du=0;
					for(var i=0;i<trigger.remained.length;i++){
						if(trigger.remained[i].name=='du') du++;
					}
					var dialog=ui.create.dialog(get.prompt('liangce'),trigger.remained,'hidden');
					dialog.classList.add('noselect');
					player.chooseTarget(dialog).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(du>=trigger.remained.length/2) return -att;
						return att;
					});
					'step 1'
					if(result.bool){
						player.logSkill('liangce',result.targets);
						result.targets[0].gain(trigger.remained.slice(0),'gain2','log');
						trigger.remained.length=0;
					}
				}
			},
			jianbi:{
				trigger:{target:'useCardToTargeted'},
				priority:5,
				filter:function(event,player){
					if(get.type(event.card)!='trick') return false;
					if(get.info(event.card).multitarget) return false;
					if(event.targets.length<2) return false;
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('jianbi'),
						[1,1],function(card,player,target){
						return _status.event.getTrigger().targets.includes(target);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var eff=-get.effect(target,trigger.card,trigger.player,_status.event.player);
						if(trigger.card.name=='wugu'&&eff==0&&get.attitude(player,target)<0){
							return 0.01;
						}
						return eff;
					});
					"step 1"
					if(result.bool){
						event.targets=result.targets;
						if(event.isMine()){
							player.logSkill('jianbi',event.targets);
							event.finish();
						}
						for(var i=0;i<result.targets.length;i++){
							trigger.getParent().excluded.add(result.targets[i]);
						}
						game.delay();
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill('jianbi',event.targets);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'multineg')){
								return 'zerotarget';
							}
							if(get.tag(card,'multitarget')){
								var info=get.info(card);
								if(info.selectTarget==-1&&!info.multitarget){
									return [1,Math.min(3,1+target.maxHp-target.hp)];
								}
							}
						}
					}
				}
			},
			diyjuntun:{
				enable:'phaseUse',
				filter:(event,player)=>player.hasCard(card=>lib.skill.diyjuntun.filterCard(card,player),'he'),
				position:'he',
				filterCard:(card,player)=>get.type(card)=='equip'&&player.canRecast(card),
				check:function(card){
					var player=_status.event.player;
					var he=player.getCards('he');
					var subtype=get.subtype(card);
					var value=get.equipValue(card);
					for(var i=0;i<he.length;i++){
						if(he[i]!=card&&get.subtype(he[i])==subtype&&get.equipValue(he[i])>=value){
							return 10;
						}
					}
					if(!player.needsToDiscard()){
						return 4-get.equipValue(card);
					}
					return 0;
				},
				content:function(){
					player.recast(cards);
				},
				discard:false,
				lose:false,
				delay:false,
				prompt:'将一张装备牌置入弃牌堆并摸一张牌',
				ai:{
					basic:{
						order:8.5
					},
					result:{
						player:1
					}
				}
			},
			choudu:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					return lib.filter.cardEnabled({name:'diaobingqianjiang'},target);
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					var list=game.filterPlayer();
					list.sortBySeat(target);
					target.useCard({name:'diaobingqianjiang'},list);
				},
				ai:{
					order:1,
					result:{
						player:function(player,target){
							if(get.attitude(player,target)<=1) return 0;
							return game.countPlayer(function(current){
								return get.effect(current,{name:'diaobingqianjiang'},target,player);
							});
						}
					}
				}
			},
			liduan:{
				trigger:{global:'gainAfter'},
				filter:function(event,player){
					if(event.player==player) return false;
					if(_status.currentPhase==event.player) return false;
					if(event.cards.length!=1) return false;
					return get.type(event.cards[0])=='equip'&&get.position(event.cards[0])=='h'&&event.player.hasUseTarget(event.cards[0]);
				},
				logTarget:'player',
				check:function(event,player){
					var att=get.attitude(player,event.player);
					var subtype=get.subtype(event.cards[0]);
					if(att>0){
						if(event.player.countCards('h')>=player.countCards('h')+2) return true;
						return event.player.countCards('e',{subtype:subtype})==0;
					}
					else{
						return event.player.countCards('e',{subtype:subtype})>0;
					}
				},
				content:function(){
					'step 0'
					var bool=false;
					var subtype=get.subtype(trigger.cards[0]);
					var current=trigger.player.getEquip('e',parseInt(subtype[5]));
					var att=get.attitude(trigger.player,player);
					if(current){
						if(att>0){
							bool=true;
						}
						else{
							if(get.equipValue(current)>get.equipValue(trigger.cards[0])){
								bool=true;
							}
						}
					}
					trigger.player.chooseCard('立断').set('prompt2','将一张手牌交给'+get.translation(player)+'，或取消并使用'+get.translation(trigger.cards)).ai=function(card){
						if(bool){
							if(att>0){
								return 8-get.value(card);
							}
							else{
								return 4-get.value(card);
							}
						}
						else{
							if(att<=0) return -get.value(card);
							return 0;
						}
					}
					'step 1'
					if(result.bool){
						player.gain(result.cards,trigger.player);
						trigger.player.$give(1,player);
					}
					else{
						trigger.player.chooseUseTarget(trigger.cards[0],true);
					}
				}
			},
			jinyan:{
				mod:{
					cardEnabled:function(card,player){
						if(_status.event.skill!='jinyan'&&player.hp<=2&&get.type(card,'trick')=='trick'&&get.color(card)=='black') return false;
					},
					cardUsable:function(card,player){
						if(_status.event.skill!='jinyan'&&player.hp<=2&&get.type(card,'trick')=='trick'&&get.color(card)=='black') return false;
					},
					cardRespondable:function(card,player){
						if(_status.event.skill!='jinyan'&&player.hp<=2&&get.type(card,'trick')=='trick'&&get.color(card)=='black') return false;
					},
					cardSavable:function(card,player){
						if(_status.event.skill!='jinyan'&&player.hp<=2&&get.type(card,'trick')=='trick'&&get.color(card)=='black') return false;
					},
				},
				enable:['chooseToUse','chooseToRespond'],
				filterCard:function(card){
					return get.type(card,'trick')=='trick'&&get.color(card)=='black';
				},
				viewAsFilter:function(player){
					if(player.hp>2) return false;
					if(!player.hasCard(function(card){
						return get.type(card,'trick')=='trick'&&get.color(card)=='black';
					})) return false;
				},
				viewAs:{name:'sha'},
				prompt:'将一张黑色锦囊牌当作杀使用或打出',
				check:function(){return 1},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						if(player.hp>2) return false;
						if(!player.hasCard(function(card){
							return get.type(card,'trick')=='trick'&&get.color(card)=='black';
						})) return false;
					}
				}
			},
			fuchou:{
				trigger:{target:'shaBefore'},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				direct:true,
				content:function(){
					'step 0'
					var bool=false;
					if(!player.hasShan()&&get.effect(player,trigger.card,trigger.player,player)<0){
						bool=true;
					}
					player.chooseCard('he',get.prompt('fuchou',trigger.player)).set('ai',function(card){
						var player=_status.event.player;
						if(bool){
							if(player.hp<=1){
								if(get.tag(card,'save')) return 0;
								return 8-get.value(card);
							}
							return 6-get.value(card);
						}
						return -get.value(card);
					});
					'step 1'
					if(result.bool){
						trigger.cancel();
						player.logSkill('fuchou',trigger.player);
						trigger.player.gain(result.cards,player);
						if(get.position(result.cards[0])=='h'){
							player.$give(1,trigger.player);
						}
						else{
							player.$give(result.cards,trigger.player);
						}
						player.storage.fuchou2.add(trigger.player);
					}
				},
				group:'fuchou2'
			},
			fuchou2:{
				init:function(player){
					player.storage.fuchou2=[];
				},
				forced:true,
				trigger:{global:'phaseAfter'},
				filter:function(event,player){
					for(var i=0;i<player.storage.fuchou2.length;i++){
						if(player.storage.fuchou2[i].isAlive()) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					if(player.storage.fuchou2.length){
						var target=player.storage.fuchou2.shift();
						if(target.isAlive()){
							player.draw();
							if(player.canUse('sha',target,false)&&player.hasSha()){
								player.chooseToUse({name:'sha'},target,-1,'对'+get.translation(target)+'使用一张杀，或失去1点体力');
							}
							else{
								player.loseHp();
								event.redo();
							}
						}
					}
					else{
						event.finish();
					}
					'step 1'
					if(!result.bool){
						player.loseHp();
					}
					event.goto(0);
				}
			},
			chezhen:{
				mod:{
					globalFrom:function(from,to,distance){
						if(from.countCards('e')) return distance-1;
					},
					globalTo:function(from,to,distance){
						if(!to.countCards('e')) return distance+1;
					}
				}
			},
			youzhan:{
				trigger:{global:'shaBefore'},
				direct:true,
				filter:function(event,player){
					return get.distance(player,event.target)<=1&&player.countCards('he',{type:'equip'});
				},
				content:function(){
					'step 0'
					var bool=(get.attitude(player,trigger.player)<0&&get.attitude(player,trigger.target)>0);
					var next=player.chooseToDiscard('he',{type:'equip'},get.prompt('youzhan',trigger.target));
					next.ai=function(card){
						if(bool){
							return 7-get.value(card);
						}
						return 0;
					};
					next.logSkill=['youzhan',trigger.target];
					'step 1'
					if(result.bool){
						event.youdiinfo={
							source:trigger.player,
							evt:trigger
						}
						trigger.target.useCard({name:'youdishenru'});
					}
				}
			},
			kangyin:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'
					player.discardPlayerCard(target,true);
					'step 2'
					if(player.isDamaged()&&result.links&&result.links.length){
						if(get.type(result.links[0])=='basic'){
							player.chooseTarget([1,player.maxHp-player.hp],
							'选择至多'+get.cnNumber(player.maxHp-player.hp)+'名角色各摸一张牌').set('ai',function(target){
								return get.attitude(_status.event.player,target);
							});
						}
						else{
							player.storage.kangyin2=player.maxHp-player.hp;
							player.addTempSkill('kangyin2');
							event.finish();
						}
					}
					else{
						event.finish();
					}
					'step 3'
					if(result.targets&&result.targets.length){
						result.targets.sort(lib.sort.seat);
						player.line(result.targets,'green');
						game.asyncDraw(result.targets);
					}
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(player.hp>=4) return -1;
							if(player.hp==3&&!player.needsToDiscard()) return -1;
							return 0;
						}
					}
				}
			},
			kangyin2:{
				mark:true,
				intro:{
					content:'到其他角色的距离-#；使用【杀】的额外目标数上限+#'
				},
				onremove:true,
				mod:{
					globalFrom:function(from,to,distance){
						return distance-from.storage.kangyin2;
					},
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]+=player.storage.kangyin2;
					},
				}
			},
			duoqi:{
				trigger:{global:'discardAfter'},
				filter:function(event,player){
					if(_status.currentPhase==player) return false;
					if(!player.storage.zhucheng||!player.storage.zhucheng.length) return false;
					var evt=event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse') return true;
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var bool=false;
					if(get.attitude(player,trigger.player)<0&&trigger.player.needsToDiscard()){
						bool=true;
					}
					player.chooseCardButton(get.prompt('zhucheng',_status.currentPhase),player.storage.zhucheng).set('ai',function(button){
						return _status.event.bool?1:0;
					}).set('bool',bool);
					'step 1'
					if(result.bool){
						player.logSkill('zhucheng',_status.currentPhase);
						player.$throw(result.links[0]);
						player.storage.zhucheng.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage('zhucheng');
						if(player.storage.zhucheng.length==0){
							player.unmarkSkill('zhucheng');
						}
						else{
							player.updateMarks();
						}
						var evt=trigger.getParent('phaseUse');
						if(evt&&evt.name=='phaseUse'){
							evt.skipped=true;
						}
					}
				},
				ai:{
					expose:0.2
				}
			},
			zhucheng:{
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					return !player.storage.zhucheng||!player.storage.zhucheng.length;
				},
				check:function(event,player){
					if(player.storage.zhucheng&&player.storage.zhucheng.length){
						if(!player.hasShan()) return false;
						if(player.storage.zhucheng.length>=2) return false;
					}
					return true;
				},
				intro:{
					content:'cards'
				},
				content:function(){
					if(player.storage.zhucheng&&player.storage.zhucheng.length){
						player.gain(player.storage.zhucheng,'gain2');
						delete player.storage.zhucheng;
						player.unmarkSkill('zhucheng');
					}
					else{
						var cards=get.cards(Math.max(1,player.maxHp-player.hp));
						player.$gain2(cards);
						player.storage.zhucheng=cards;
						player.markSkill('zhucheng');
					}
				},
				ai:{
					target:function(card,player,target,current){
						if(card.name=='sha'&&player.storage.zhucheng&&player.storage.zhucheng.length){
							if(player.storage.zhucheng.length>=2){
								if(!player.hasFriend()&&player.countCards('he')-2<player.storage.zhucheng.length) return 'zeroplayertarget';
								return 0.1;
							}
							else{
								var he=player.getCards('he');
								var sha=false;
								for(var i=0;i<he.length;i++){
									if(he[i]=='sha'&&!sha){
										sha=true;
									}
									else{
										if(get.value(he[i])<=6){
											return [1,0,1,-0.5];
										}
									}
								}
								return 'zeroplayertarget';
							}
						}
					}
				},
				group:'zhucheng2'
			},
			zhucheng2:{
				trigger:{target:'shaBefore'},
				check:function(event,player){
					if(get.attitude(event.player,player)<=0) return true;
					return get.effect(player,event.card,event.player,player)<=0;
				},
				filter:function(event,player){
					return player.storage.zhucheng&&player.storage.zhucheng.length>0;
				},
				content:function(){
					'step 0'
					var bool=false;
					if(get.effect(player,trigger.card,trigger.player,trigger.player)>=0){
						bool=true;
					}
					var num=player.storage.zhucheng.length;
					trigger.player.chooseToDiscard('弃置'+get.cnNumber(num)+'张牌，或令杀无效','he',num).set('ai',function(card){
						if(_status.event.bool){
							return 10-get.value(card);
						}
						return 0;
					}).set('bool',bool);
					'step 1'
					if(!result.bool){
						trigger.cancel();
					}
				}
			},
			diy_jiaoxia:{
				//audio:['jiaoxia',2],
				trigger:{target:'useCardToBegin'},
				filter:function(event,player){
					return event.card&&get.color(event.card)=='red';
				},
				frequent:true,
				content:function(){
					player.draw();
				},
				ai:{
					effect:function(card,player,target){
						if(get.color(card)=='red') return [1,1];
					},
				}
			},
			zaiqix:{
				trigger:{player:'phaseDrawBefore'},
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				check:function(event,player){
					if(1+player.maxHp-player.hp<2){
						return false;
					}
					else if(1+player.maxHp-player.hp==2){
						return player.countCards('h')>=2;
					}
					return true;
				},
				content:function(){
					"step 0"
					trigger.cancel();
					event.cards=get.cards(player.maxHp-player.hp+1);
					player.showCards(event.cards);
					"step 1"
					var num=0;
					for(var i=0;i<event.cards.length;i++){
						if(get.suit(event.cards[i])=='heart'){
							num++;
							event.cards[i].discard();
							event.cards.splice(i--,1);
						}
					}
					if(num){
						player.recover(num);
					}
					"step 2"
					if(event.cards.length){
						player.gain(event.cards);
						player.$gain2(event.cards);
						game.delay();
					}
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 2;
						if(target.hp==2) return 1.5;
						return 1;
					},
				}
			},
			batu:{
				trigger:{player:'phaseEnd'},
				frequent:true,
				filter:function(event,player){
					return player.countCards('h')<game.countGroup();
				},
				content:function(){
					player.draw(game.countGroup()-player.countCards('h'));
				},
				ai:{
					threaten:1.3
				}
			},
			diyzaiqi:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				content:function(){
					trigger.num+=player.maxHp-player.hp;
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						if(target.hp==2) return 1.8;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(target.hp==target.maxHp) return [0,1];
							}
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
			diykuanggu:{
				trigger:{source:'damageEnd'},
				forced:true,
				content:function(){
					if(get.distance(trigger.player,player,'attack')>1){
						player.draw(trigger.num);
					}
					else{
						player.recover(trigger.num);
					}
				}
			},
			diyduanliang:{
				group:['diyduanliang1','diyduanliang2'],
				ai:{
					threaten:1.2
				}
			},
			diyduanliang1:{
				enable:'phaseUse',
				usable:1,
				discard:false,
				filter:function(event,player){
					var cards=player.getCards('he',{color:'black'});
					for(var i=0;i<cards.length;i++){
						var type=get.type(cards[i]);
						if(type=='basic') return true;
					}
					return false;
				},
				prepare:'throw',
				position:'he',
				filterCard:function(card){
					if(get.color(card)!='black') return false;
					var type=get.type(card);
					return type=='basic';
				},
				filterTarget:function(card,player,target){
					return lib.filter.filterTarget({name:'bingliang'},player,target);
				},
				check:function(card){
					return 7-get.value(card);
				},
				content:function(){
					player.useCard({name:'bingliang'},target,cards).animate=false;
					player.draw();
				},
				ai:{
					result:{
						target:function(player,target){
							return get.effect(target,{name:'bingliang'},player,target);
						}
					},
					order:9,
				}
			},
			diyduanliang2:{
				mod:{
					targetInRange:function(card,player,target){
						if(card.name=='bingliang'){
							if(get.distance(player,target)<=2) return true;
						}
					}
				}
			},
			guihan:{
				unique:true,
				enable:'chooseToUse',
				skillAnimation:'epic',
				limited:true,
				filter:function(event,player){
					if(event.type!='dying') return false;
					if(player!=event.dying) return false;
					return true;
				},
				filterTarget:function(card,player,target){
					return target.hasSex('male')&&player!=target;
				},
				content:function(){
					"step 0"
					player.awakenSkill('guihan');
					player.recover();
					"step 1"
					player.draw(2);
					"step 2"
					target.recover();
					"step 3"
					target.draw(2);
					// if(lib.config.mode=='identity'){
					// 	player.node.identity.style.backgroundColor=get.translation('weiColor');
					// 	player.group='wei';
					// }
				},
				ai:{
					skillTagFilter:function(player){
						if(player.storage.guihan) return false;
						if(player.hp>0) return false;
					},
					save:true,
					result:{
						player:4,
						target:function(player,target){
							if(target.hp==target.maxHp) return 2;
							return 4;
						}
					},
					threaten:function(player,target){
						if(!target.storage.guihan) return 0.8;
					}
				}
			},
			luweiyan:{
				enable:'phaseUse',
				usable:1,
				filterCard:function(card){
					return get.type(card)!='basic';
				},
				position:'hse',
				filter:function(event,player){
					return player.hasCard(function(card){
						return get.type(card)!='basic';
					},'hes');
				},
				viewAs:{name:'shuiyanqijun'},
				prompt:'将一张非基本牌当水淹七军使用',
				check:function(card){return 8-get.value(card)},
				group:'luweiyan2'
			},
			luweiyan2:{
				trigger:{player:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					if(event.skill!='luweiyan') return false;
					for(var i=0;i<event.targets.length;i++){
						if(player.canUse('sha',event.targets[i],false)){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseTarget('是否视为使用一张杀？',function(card,player,target){
						return _status.event.targets.includes(target)&&player.canUse('sha',target,false);
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'sha'},player,player);
					}).set('targets',trigger.targets);
					'step 1'
					if(result.bool){
						player.useCard({name:'sha'},result.targets,false);
					}
				}
			},
			yaliang:{
				inherit:'wangxi'
			},
			xiongzi:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				content:function(){
					trigger.num+=1+Math.floor(player.countCards('e')/2);
				}
			},
			honglian:{
				trigger:{player:'damageEnd'},
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				filter:function(event,player){
					return event.source&&event.source!=player&&event.source.countCards('he',{color:'red'})>0;
				},
				content:function(){
					trigger.source.discard(trigger.source.getCards('he',{color:'red'}));
				},
				ai:{
					expose:0.1,
					result:{
						threaten:0.8,
						target:function(card,player,target){
							if(get.tag(card,'damage')&&get.attitude(target,player)<0){
								return [1,0,0,-player.countCards('he',{color:'red'})];
							}
						}
					}
				}
			},
			diyguhuo:{
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.countCards('hej')>0;
				},
				content:function(){
					"step 0"
					player.draw(2);
					"step 1"
					var next=player.discardPlayerCard(player,'hej',2,true);
					next.ai=function(button){
						if(get.position(button.link)=='j') return 10;
						return -get.value(button.link);
					};
					next.filterButton=function(button){
						return lib.filter.cardDiscardable(button.link,player);
					}
				},
				ai:{
					effect:{
						target:function(card){
							if(get.type(card)=='delay') return [0,0.5];
						}
					}
				}
			},
			diychanyuan:{
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event){
					return event.source!=undefined;
				},
				content:function(){
					trigger.source.loseMaxHp(true);
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 0.2;
					},
					result:{
						target:function(card,player,target,current){
							if(target.hp<=1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-5];
								return [1,0,0,-2];
							}
						}
					}
				}
			},
			zonghuo:{
				trigger:{source:'damageBefore'},
				direct:true,
				priority:10,
				filter:function(event){
					return event.nature!='fire';
				},
				content:function(){
					"step 0"
					player.chooseToDiscard(get.prompt('zonghuo')).ai=function(card){
						var att=get.attitude(player,trigger.player);
						if(trigger.player.hasSkillTag('nofire')){
							if(att>0) return 8-get.value(card);
							return -1;
						}
						if(att<0){
							return 7-get.value(card);
						}
						return -1;
					}
					"step 1"
					if(result.bool){
						player.logSkill('zonghuo',trigger.player,'fire');
						trigger.nature='fire';
					}
				}
			},
			shaoying:{
				trigger:{source:'damageAfter'},
				direct:true,
				filter:function(event){
					return event.nature=='fire';
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('shaoying'),function(card,player,target){
						return get.distance(trigger.player,target)<=1&&trigger.player!=target;
					}).ai=function(target){
						return get.damageEffect(target,player,player,'fire');
					}
					"step 1"
					if(result.bool){
						var card=get.cards()[0];
						card.discard();
						player.showCards(card);
						event.bool=get.color(card)=='red';
						event.target=result.targets[0];
						player.logSkill('shaoying',event.target,false);
						trigger.player.line(event.target,'fire');
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.bool){
						event.target.damage('fire');
					}
				}
			},
			tiangong:{
				group:['tiangong2'],
				trigger:{player:'damageBefore'},
				filter:function(event){
					if(event.nature=='thunder') return true;
				},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='tiesuo') return 0;
							if(get.tag(card,'thunderDamage')) return 0;
						}
					},
					threaten:0.5
				}
			},
			tiangong2:{
				trigger:{source:'damageAfter'},
				filter:function(event){
					if(event.nature=='thunder') return true;
				},
				forced:true,
				popup:false,
				priority:1,
				content:function(){
					player.draw();
				},
			},
			xicai:{
				inherit:'jianxiong'
			},
			diyjianxiong:{
				mode:['identity'],
				trigger:{global:'dieBefore'},
				forced:true,
				filter:function(event,player){
					return event.player!=game.zhu&&_status.currentPhase==player;
				},
				content:function(){
					trigger.player.identity='fan';
					trigger.player.setIdentity('fan');
					trigger.player.identityShown=true;
				}
			},
			nsshuaiyan:{
				trigger:{global:'recoverAfter'},
				filter:function(event,player){
					return event.player!=player&&_status.currentPhase!=player;
				},
				logTarget:'player',
				content:function(){
					"step 0"
					var att=get.attitude(trigger.player,player);
					var bool=0;
					if(att<0){
						if(trigger.player.countCards('e')==0&&trigger.player.countCards('h')>2) bool=1;
						else if(trigger.player.countCards('he')==0) bool=1;
					}
					else if(att==0&&trigger.player.countCards('he')==0){
						bool=1;
					}
					trigger.player.chooseControl(function(){
						return _status.event.bool;
					}).set('prompt','率言').set('bool',bool).set('choiceList',['令'+get.translation(player)+'摸一张牌','令'+get.translation(player)+'弃置你一张牌']);
					"step 1"
					if(result.control=='选项一'){
						player.draw();
						event.finish();
					}
					else if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,true,'he');
					}
					else{
						event.finish();
					}
				},
				ai:{
					threaten:1.2
				}
			},
			moshou:{
				mod:{
					targetEnabled:function(card,player,target,now){
						if(card.name=='bingliang'||card.name=='lebu') return false;
					}
				},
			},
			siji:{
				trigger:{player:'phaseDiscardEnd'},
				frequent:true,
				filter:function(event,player){
					if(event.cards){
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].name=='sha') return true;
						}
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].name=='sha') num++;
					}
					player.draw(2*num);
				}
			},
			ciqiu:{
				trigger:{source:"damageBegin1"},
				forced:true,
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.player.isHealthy();
				},
				content:function(){
					"step 0"
					trigger.num++;
					if(trigger.num>=trigger.player.hp){
						trigger.player.addTempSkill('ciqiu_dying');
						player.removeSkill('ciqiu')
					}
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(card.name=='sha'&&target.isHealthy()&&get.attitude(player,target)>0){
							return [1,-2];
							}
						},
					},
				},
			},
			ciqiu_dying:{
				trigger:{player:"dyingBegin"},
				forced:true,
				silent:true,
				firstDo:true,
				content:function(){
					player.die();
				},
				popup:false,
			},
			juedao:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.isLinked()==false;
				},
				filterCard:true,
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					if(player.isLinked()==false) player.link();
				},
				ai:{
					link:true,
					order:2,
					result:{
						player:function(player){
							if(player.isLinked()) return 0;
							return 1;
						},
					},
					effect:{
						target:function(card,player,target){
							if(card.name=='tiesuo'){
								if(target.isLinked()){
									return [0,-0.5];
								}
								else{
									return [0,0.5];
								}
							}
						}
					}
				},
				mod:{
					globalFrom:function(from,to,distance){
						if(from.isLinked()) return distance+1;
					},
					globalTo:function(from,to,distance){
						if(to.isLinked()) return distance+1;
					},
				}
			},
			geju:{
				trigger:{player:'phaseBegin'},
				frequent:true,
				filter:function(event,player){
					var list=[];
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(player!=players[i]) list.add(players[i].group);
					}
					list.remove('unknown');
					for(var i=0;i<players.length;i++){
						if(players[i]!=player){
							if(lib.filter.targetInRange({name:'sha'},players[i],player)){
								list.remove(players[i].group);
							}
						}
					}
					return list.length>0;
				},
				content:function(){
					var list=[];
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(player!=players[i]) list.add(players[i].group);
					}
					list.remove('unknown');
					for(var i=0;i<players.length;i++){
						if(players[i]!=player){
							if(lib.filter.targetInRange({name:'sha'},players[i],player)){
								list.remove(players[i].group);
							}
						}
					}
					if(list.length>0) player.draw(list.length);
				}
			},
			diyqiangxi:{
				enable:'phaseUse',
				usable:1,
				filterCard:function(card){
					return get.subtype(card)=='equip1';
				},
				selectCard:[0,1],
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target,'attack')<=1;
				},
				content:function(){
					"step 0"
					if(cards.length==0){
						player.loseHp();
					}
					"step 1"
					target.damage();
					"step 2"
					if(target.isAlive()&&target.countCards('he')){
						player.discardPlayerCard(target);
					}
				},
				check:function(card){
					return 10-get.value(card);
				},
				position:'he',
				ai:{
					order:8,
					result:{
						player:function(player,target){
							if(ui.selected.cards.length) return 0;
							if(player.hp>=target.hp) return -0.9;
							if(player.hp<=2) return -10;
							return -2;
						},
						target:function(player,target){
							if(player.hp<=1) return 0;
							return get.damageEffect(target,player);
						}
					}
				},
				threaten:1.3
			},
			nsdingzhou:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('hej')>0;
				},
				content:function(){
					'step 0'
					var cards=target.getCards('hej');
					if(get.isLuckyStar(player)){
						var cardx=ui.cardPile.firstChild;
						if(cardx){
							var color=get.color(card),cardsx=cards.filter(function(i){
								return get.color(i)==color;
							});
							if(cardsx.length>0) cards=cardsx;
						}
					}
					var card=cards.randomGet();
					event.card=card;
					player.gain(card,target,'giveAuto','bySelf');
					player.draw();
					'step 1'
					if(Array.isArray(result)&&get.color(card)!=get.color(result[0])) player.loseHp();
				},
				ai:{
					order:7,
					result:{target:-1},
				},
			},
			//比原版更令人难以吐槽的神孙权
			junkyuheng:{
				audio:'yuheng',
				trigger:{player:'phaseBegin'},
				forced:true,
				keepSkill:true,
				filter:function(event,player){
					return player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'junkyuheng');
					},'he');
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',true,[1,4],function(card,player){
						if(!ui.selected.cards.length) return true;
						var suit=get.suit(card,player);
						for(var i of ui.selected.cards){
							if(get.suit(i,player)==suit) return false;
						}
						return true;
					}).set('complexCard',true).set('ai',function(card){
						if(!player.hasValueTarget(card)) return 5;
						return 5-get.value(card);
					});
					'step 1'
					if(result.bool){
						var skills=lib.skill.junkyuheng.derivation.randomGets(result.cards.length);
						player.addAdditionalSkill('junkyuheng',skills);
						game.log(player,'获得了以下技能：','#g'+get.translation(skills));
					}
				},
				group:'junkyuheng_remove',
				derivation:['olbingyi','shenxing','xiashu','old_anxu','rezhiheng','xinanguo','lanjiang','xinfu_guanwei','dimeng','xindiaodu','xingxue','jiexun','olhongyuan','xinfu_youdi','bizheng'],
				subSkill:{
					remove:{
						audio:'yuheng',
						trigger:{player:'phaseEnd'},
						forced:true,
						filter:function(event,player){
							return player.additionalSkills.junkyuheng&&player.additionalSkills.junkyuheng.length>0;
						},
						content:function(){
							player.draw(player.additionalSkills.junkyuheng.length);
							game.log(player,'失去了以下技能：','#g'+get.translation(player.additionalSkills.junkyuheng));
							player.removeAdditionalSkill('junkyuheng');
						},
					},
				},
			},
			junkdili:{
				audio:'dili',
				trigger:{player:'logSkill'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'wood',
				filter:function(event,player){
					if(event.skill!='junkyuheng') return false;
					var skills=player.getSkills(null,false,false).filter(function(i){
						var info=get.info(i);
						return info&&!info.charlotte;
					});
					return skills.length>player.maxHp;
				},
				content:function(){
					'step 0'
					player.awakenSkill('junkdili');
					player.loseMaxHp();
					'step 1'
					var skills=player.getSkills(null,false,false).filter(function(i){
						if(i=='junkdili') return false;
						var info=get.info(i);
						return info&&!info.charlotte;
					});
					var list=[];
					for(var skill of skills){
						list.push([
							skill,
							'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【'+get.translation(skill)+'】</div><div>'+lib.translate[skill+'_info']+'</div></div>',
						])
					}
					var next=player.chooseButton([
						'请选择失去任意个技能',
						[list,'textbutton'],
					]);
					next.set('forced',true);
					next.set('selectButton',[1,skills.length]);
					next.set('ai',function(button){
						var skill=button.link,skills=_status.event.skills.slice(0);
						skills.removeArray(['xinanguo','lanjiang','rezhiheng','junkyuheng']);
						switch(ui.selected.buttons.length){
							case 0:
								if(skills.includes(skill)) return 2;
								if(skill=='junkyuheng') return 1;
								return Math.random();
							case 1:
								if(skills.length<2) return 0;
								if(skills.includes(skill)) return 2;
								if(skill=='junkyuheng') return 1;
								return 0
							case 2:
								if(skills.includes(skill)) return 2;
								if(skill=='junkyuheng') return 1;
								return 0;
							default: return 0;
						}
					});
					next.set('skills',skills)
					'step 2'
					if(result.bool){
						var skills=result.links;
						game.log(player,'失去了以下技能：','#g'+get.translation(skills));
						player.removeSkill(skills.slice(0));
					}
					var list=lib.skill.junkdili.derivation;
					for(var i=0;i<Math.min(skills.length,list.length);i++){
						player.addSkillLog(list[i]);
					}
				},
				derivation:['junkshengzhi','junkquandao','junkchigang'],
			},
			junkshengzhi:{
				audio:'dili_shengzhi',
				trigger:{player:['logSkill','useSkillAfter']},
				forced:true,
				filter:function(event,player){
					if(event.type!='player') return false;
					var skill=event.sourceSkill||event.skill;
					if(get.is.locked(skill)) return false;
					var info=get.info(skill);
					return !info.charlotte;
				},
				content:function(){
					player.addTempSkill('junkshengzhi_effect');
				},
				subSkill:{
					effect:{
						mod:{
							cardUsable:()=>Infinity,
							targetInRange:()=>true,
						},
						trigger:{player:'useCard1'},
						forced:true,
						charlotte:true,
						popup:false,
						firstDo:true,
						content:function(){
							if(trigger.addCount!==false){
								trigger.addCount=false;
								player.getStat().card[trigger.card.name]--;
							}
							player.removeSkill('junkshengzhi_effect');
						},
						mark:true,
						intro:{content:'使用下一张牌无距离和次数限制'},
					},
				},
			},
			junkquandao:{
				audio:'dili_quandao',
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'||get.type(event.card,null,false)=='trick';
				},
				content:function(){
					'step 0'
					var filter1=function(card){
						return get.name(card)=='sha';
					},filter2=function(card){
						return get.type(card)=='trick';
					};
					var num1=player.countCards('h',filter1),num2=player.countCards('h',filter2);
					if(num1!=num2){
						var delta=num1-num2;
						player.chooseToDiscard('h',true,Math.abs(delta),delta>0?filter1:filter2,'驭衡：请弃置'+get.cnNumber(Math.abs(delta))+'张'+(delta>0?'【杀】':'普通锦囊牌'));
					}
					'step 1'
					player.draw();
				},
			},
			junkchigang:{
				audio:'dili_chigang',
				trigger:{player:'phaseJudgeBefore'},
				forced:true,
				zhuanhuanji:true,
				mark:true,
				marktext:'☯',
				content:function(){
					player.changeZhuanhuanji('junkchigang');
					trigger.cancel();
					var next=player[player.storage.junkchigang?'phaseDraw':'phaseUse']();
					event.next.remove(next);
					trigger.getParent().next.push(next);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.type(card)=='delay') return 'zerotarget';
						},
					},
				},
				intro:{
					content:function(storage){
						return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的'+(storage?'出牌阶段':'摸牌阶段')+'。'
					},
				},
			},
			nsmanzhi:{
				audio:'dcmanzhi',
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				direct:true,
				filter:function(event,player){
					var nums=[];
					game.countPlayer(current=>{
						nums.add(current.hp);
						nums.add(current.maxHp);
						nums.add(current.countCards('h'));
						nums.add(current.countCards('e'));
						nums.add(current.countCards('j'));
					});
					for(var a of nums){
						for(var b of nums){
							if((0.5*a*a)+(2.5*b)-game.roundNumber==game.countPlayer()) return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var nums=[];
					game.countPlayer(current=>{
						nums.add(current.hp);
						nums.add(current.maxHp);
						nums.add(current.countCards('h'));
						nums.add(current.countCards('e'));
						nums.add(current.countCards('j'));
					});
					nums.sort((a,b)=>a-b);
					var a=null,b=null,goon=false;
					for(a of nums){
						for(b of nums){
							if((0.5*a*a)+(2.5*b)-game.roundNumber==game.countPlayer()){
								goon=true;
								break;
							}
						}
						if(goon) break;
					}
					player.chooseButton(2,[
						'蛮智：请选择让下列等式成立的A与B的值',
						'<div class="text center">目标等式</div>',
						`0.5 × A² + 2.5 × B - ${game.roundNumber} = ${game.countPlayer()}`,
						'<div class="text center">A的可选值</div>',
						[nums.map(i=>{
							return [
								`A|${i}`,
								i==a?(`<span class="yellowtext">${i}</span>`):i,
							]
						}),'tdnodes'],
						'<div class="text center">B的可选值</div>',
						[nums.map(i=>{
							return [
								`B|${i}`,
								i==b?(`<span class="yellowtext">${i}</span>`):i,
							]
						}),'tdnodes'],
					]).set('filterButton',function(button){
						if(!ui.selected.buttons.length) return true;
						return button.link[0]!=ui.selected.buttons[0].link[0];
					}).set('filterOk',function(){
						if(ui.selected.buttons.length!=2) return false;
						var a,b;
						for(var i of ui.selected.buttons){
							if(i.link[0]=='A') a=parseInt(i.link.slice(2));
							else b=parseInt(i.link.slice(2));
						}
						return (0.5*a*a)+(2.5*b)-game.roundNumber==game.countPlayer();
					}).set('choice',[a,b]).set('ai',(button)=>{
						var choice=_status.event.choice;
						if(button.link==`A|${choice[0]}`||button.link==`B|${choice[1]}`) return 1;
						return 0;
					});
					'step 1'
					if(result.bool){
						var a,b;
						for(var i of result.links){
							if(i[0]=='A') a=parseInt(i.slice(2));
							else b=parseInt(i.slice(2));
						}
						equals=`0.5×${a}²+2.5×${b}-${game.roundNumber}=${game.countPlayer()}`;
						player.logSkill('nsmanzhi');
						player.chat(equals);
						game.log(player,'的计算结果为',equals);
						player.draw(game.countPlayer());
					}
				},
			},
		},
		dynamicTranslate:{
			nsjiquan:function(player){
				if(player.storage.nsfuwei) return '锁定技，与你距离1以内的其他角色造成或受到伤害后，你将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。';
				return '与你距离1以内的其他角色造成或受到伤害后，你可以将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。';
			},
			abyusa_jueqing:function(player){
				if(player.storage.abyusa_jueqing_rewrite) return '锁定技，你即将造成的伤害均视为失去体力。';
				return '当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。';
			},
			tomoya_shangxian:function(player){
				if(player.storage.tomoya_shangxian) return '锁定技，你计算与其他角色的距离时始终从顺时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。';
				return '锁定技，你计算与其他角色的距离时始终从逆时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。';
			},
			yui_lieyin:function(player){
				if(player.storage._ichiban_no_takaramono) return '锁定技，出牌阶段开始时，你可选择一项：①本阶段内的红色牌均视为【杀】；②本阶段内的【杀】均视为【决斗】。';
				return '锁定技，出牌阶段开始时，你选择一项：①本阶段内的红色牌均视为【杀】；②本阶段内的【杀】均视为【决斗】。';
			},
			yuzuru_kunfen:function(player){
				if(player.storage._yuzuru_sss) return '锁定技，结束阶段，你摸两张牌。然后你可以将两张牌交给一名其他角色。';
				return '锁定技，结束阶段，你失去1点体力并摸两张牌。然后你可以将两张牌交给一名其他角色。';
			},
			yuzuru_quji:function(player){
				if(player.storage._yuzuru_sss) return '出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。（X为你已损失的体力值）';
				return '出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。若你以此法弃置了黑色牌，则你失去1点体力。（X为你已损失的体力值）';
			},
			kamome_jieban:function(player){
				if(player.storage.kamome_jieban) return '转换技。每回合限一次，当你受到或造成伤害后，阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。<span class="bluetext">阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。</span>';
				return '转换技。每回合限一次，当你受到或造成伤害后，<span class="bluetext">阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。</span>阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。';
			},
			shiroha_guying:function(player){
				var str='当你受到伤害/对其他角色造成伤害时，你';
				if(!player.storage.shiroha_jiezhao) str='锁定技，每回合限一次，'+str;
				if(player.storage.shiroha_jiezhao) str+='可';
				str+='进行判定。若结果为红色/黑色，此伤害-1/+1。';
				return str;
			},
			nsdiewu:function(player){
				if(player.storage.nspojian) return '当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】。当你以此法使用【杀】造成伤害后，则你摸一张牌。';
				return '当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】或【闪】。当你以此法使用【杀】造成伤害后，则你摸一张牌。';
			},
			nsfuzhou:function(player){
				var str='出牌阶段限';
				str+=(player.storage.nstaiping?'两':'一');
				str+='次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到';
				str+=(player.storage.nsfuzhou_damage?'两':'一');
				str+='点雷属性伤害并弃置一张牌；红色，你摸两张牌，';
				str+=(player.storage.nsfuzhou_draw?'该角色回复1点体力并摸一张牌，且本回合的手牌上限+1。':'且该角色本回合手牌上限减1。');
				return str;
			},
			nsguidao:function(player){
				if(player.storage.nstaiping) return '一名角色的判定牌生效前，你可以打出一张牌替换之。';
				return '一名角色的判定牌生效前，你可以打出一张黑色牌替换之。';
			},
			junkchigang:function(player){
				if(player.storage.junkchigang) return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阴，摸牌阶段；<span class="bluetext">阳，出牌阶段。</span>';
				return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：<span class="bluetext">阴，摸牌阶段</span>；阳，出牌阶段。';
			},
		},
		characterReplace:{
			key_yuri:['key_yuri','sp_key_yuri'],
			kanade:['sp_key_kanade','kanade'],
		},
		translate:{
			diy_liufu:'刘馥',
			diy_xizhenxihong:'习珍习宏',
			diy_liuzan:'留赞',
			diy_zaozhirenjun:'枣祗任峻',
			diy_yangyi:'杨仪',
			diy_tianyu:'田豫',

			// diy_caocao:'曹操',
			diy_menghuo:'孟获',
			diy_huangzhong:'黄汉升',
			diy_xuhuang:'徐公明',
			diy_dianwei:'新典韦',
			diy_weiyan:'魏文长',
			xicai:'惜才',
			diyjianxiong:'奸雄',
			diy_feishi:'费诗',
			nsshuaiyan:'率言',
			moshou:'墨守',
			diy_hanlong:'韩龙',
			diy_luxun:'陆伯言',
			diy_yuji:'于吉',
			diy_zhouyu:'周公瑾',
			diy_lukang:'陆抗',
			diy_caiwenji:'蔡昭姬',
			diy_zhenji:'甄宓',

			ns_zuoci:'左慈',
			ns_wangyun:'王允',
			ns_lvzhi:'吕后',
			ns_nanhua:'南华',
			ns_nanhua_left:'幻身·左',
			ns_nanhua_right:'幻身·右',
			ns_huamulan:'SP花木兰',
			ns_huamulan_prefix:'SP',
			ns_huangzu:'黄祖',
			ns_yanliang:'颜良',
			ns_wenchou:'文丑',
			ns_jinke:'荆轲',

			ns_caocao:'曹操',
			ns_zhugeliang:'诸葛亮',
			ns_wangyue:'王越',
			ns_yuji:'于吉',
			ns_caocaosp:'SP曹操',
			ns_caocaosp_prefix:'SP',
			ns_xinxianying:'辛宪英',
			ns_sunjian:'孙坚',
			ns_simazhao:'司马昭',
			ns_guanlu:'管辂',

			ns_duangui:'段珪',
			ns_shenpei:'审配',
			ns_zhangbao:'张宝',
			ns_masu:'马谡',
			ns_zhangxiu:'张绣',
			ns_lvmeng:'吕蒙',

			ns_yujisp:'于吉',
			ns_lisu:'李肃',
			ns_yangyi:'杨仪',
			ns_liuzhang:'刘璋',
			ns_xinnanhua:'南华老仙',
			ns_luyusheng:'陆郁生',

			sp_key_yuri:'SP仲村由理',
			sp_key_yuri_prefix:'SP',
			key_lucia:'此花露西娅',
			key_kyousuke:'枣恭介',
			key_yuri:'仲村由理',
			key_haruko:'神尾晴子',
			key_umi:'加藤うみ',
			key_umi2:'鹰原羽未',
			key_rei:'零',
			key_komari:'神北小毬',
			key_yukine:'宫泽有纪宁',
			key_yusa:'西森柚咲',
			key_misa:'黑羽美砂',
			key_masato:'井之原真人',
			key_iwasawa:'岩泽雅美',
			key_kengo:'宫泽谦吾',
			key_yoshino:'吉野晴彦',
			key_yui:'由依',
			key_tsumugi:'紬文德斯',
			key_saya:'朱鹭户沙耶',
			key_harukakanata:'三枝叶留佳&二木佳奈多',
			key_harukakanata_ab:'三枝二木',
			key_inari:'稻荷',
			key_shiina:'椎名',
			key_sunohara:'春原阳平&春原芽衣',
			key_sunohara_ab:'阳平芽衣',
			//该武将国战模式下不可用
			key_rin:'枣铃',
			key_sasami:'笹濑川佐佐美',
			key_akane:'千里朱音',
			key_doruji:'多鲁基',
			key_yuiko:'来谷唯湖',
			key_riki:'直枝理树'/*+'子'*/,
			key_hisako:'高桥久子',
			key_hinata:'日向秀树',
			key_noda:'野田',
			key_tomoya:'冈崎朋也',
			key_nagisa:'古河渚',
			key_ayato:'直井文人',
			key_ao:'空门苍',
			key_yuzuru:'音无结弦',
			sp_key_kanade:'SP立华奏',
			sp_key_kanade_prefix:'SP',
			key_mio:'西园美鱼',
			key_midori:'西园美鸟',
			key_kyoko:'岬镜子',
			key_shizuru:'中津静流',
			key_shiorimiyuki:'关根诗织&入江美雪',
			key_shiorimiyuki_ab:'关根入江',
			key_miki:'野村美希',
			key_shiori:'美坂栞',
			key_kaori:'美坂香里',
			key_akiko:'水濑秋子',
			key_abyusa:'游佐',
			key_godan:'松下护騨',
			key_yuu:'乙坂有宇',
			key_ryoichi:'三谷良一',
			key_kotori:'神户小鸟',
			key_jojiro:'高城丈士朗',
			key_shiroha:'鸣濑白羽',
			key_shizuku:'水织静久',
			key_hiroto:'铃木央人',
			key_sakuya:'凤咲夜',
			key_youta:'成神阳太',
			key_rumi:'七濑留美',
			key_chihaya:'凤千早',
			key_yukito:'国崎往人',
			key_crow:'小空',
			key_asara:'井上晶',
			key_kotomi:'一之濑琴美',
			key_mia:'藤川米娅',
			key_kano:'雾岛佳乃',
			db_key_liyingxia:'李映夏',
			key_erika:'苍井绘梨花',
			key_satomi:'藏里见',
			key_iriya:'喵呜·喵呼',
			key_iriya_ab:'喵呜喵呼',
			key_fuuko:'伊吹风子',
			lucia_duqu:'毒躯',
			lucia_duqu_info:'锁定技，①当你对其他角色造成伤害或受到其他角色的伤害时，你令对方获得一张花色点数随机的【毒】。<br>②当你因【毒】失去体力时，你改为回复等量的体力。',
			lucia_zhenren:'振刃',
			lucia_zhenren_info:'锁定技，每个结束阶段，若你的装备区内有牌，则你弃置之。然后，你依次弃置场上的X张牌。（X为你以此法弃置的牌数）',
			nk_shekong:'设控',
			nk_shekong_info:'出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色（不能超过该角色的牌数），然后令其选择一项：弃置一张牌并令你摸X张牌，或弃置X张牌并令你摸一张牌。然后，你将你与其弃置的且位于弃牌堆中的牌以任意顺序置于牌堆顶。',
			key_huanjie:'幻界',
			key_huanjie_info:'锁定技，当你进行判定或摸牌时，你改为从牌堆的另一端获取相应的牌。',
			yuri_xingdong:'行动',
			yuri_xingdong_info:'锁定技，出牌阶段开始时，你获得一张【杀】或普通锦囊牌。出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。',
			//目标角色跳过阶段的同时 该回合不能发动〖整经(郑玄)〗
			yuri_wangxi:'忘隙',
			yuri_wangxi_info:'主公技，限定技，当有角色因你发动的【行动】而死亡后，若其身份不为【明忠】，则其可以将身份改为忠臣并重新加入游戏，然后将势力改为与你相同，将体力值回复至2点并摸一张牌。',
			haruko_haofang:'豪放',
			haruko_haofang_info:'锁定技，你的延时锦囊牌视为【无中生有】。当你因执行【无中生有】的效果而摸牌时，你令摸牌数+2。',
			haruko_zhuishi:'追逝',
			haruko_zhuishi_info:'一名角色的判定阶段开始时，若其判定区内有牌，则你可以获得其判定区内的所有牌。若你的体力值大于1，你失去1点体力。',
			umi_chaofan:'炒饭',
			umi_chaofan_info:'出牌阶段限一次，你可以弃置两张花色不同的手牌并选择一名其他角色。你摸一张牌，若你的体力值：大于2，目标角色回复1点体力；等于2，目标角色摸两张牌；小于2，目标角色受到1点无来源且对应渠道为这两张牌的火焰伤害。',
			umi_lunhui:'轮回',
			umi_lunhui_info:'一名其他角色的回合结束时，若你的手牌数小于体力值，则你可以失去1点体力。若如此做，你摸两张牌并进行一个额外回合，且你于此回合内计算与此角色的距离视为1。',
			umi_shiroha:'轮回 - 延时效果',
			umi_qihuan:'七幻',
			umi_qihuan_info:'限定技，当你处于濒死状态时，你可以移去此武将牌。若如此做，你回复X点体力（X为场上势力数）。然后，你可获得场上已死亡角色武将牌上的至多两个技能。',
			komari_tiankou:'甜口',
			komari_tiankou_info:'锁定技，当你使用红色的非伤害性基本牌/锦囊牌选择目标时，或成为其他角色使用的这些牌的目标时，你选择一项：1.摸一张牌；2.为此牌增加一个目标。',
			komari_xueshang:'血殇',
			komari_xueshang_info:'锁定技，蓄能技，当有角色死亡时，你对自己造成<span class=yellowtext>1</span>点伤害，然后对所有其他角色依次造成<span class=firetext>1</span>点伤害。当有角色因此法进入濒死状态时，你加1点体力上限并回复1点体力，然后失去此技能并终止此技能的所有后续结算。',
			yukine_wenzhou:'问咒',
			yukine_wenzhou_info:'一名角色的出牌阶段开始时，其可以交给你一张牌。若如此做，你选择一项：交给其一张牌，或令其从牌堆中获得一张与此牌类型相同的牌，且其于此阶段内使用与此牌牌名相同的牌时无法被响应。',
			//如果对自己发动【问咒】，则自己可以响应这些牌。但其他角色发动【问咒】时，该角色自己并不能响应
			yusa_yanyi:'演艺',
			yusa_yanyi_info:'出牌阶段限一次，你可以指定至多X名与你距离不大于你的体力值的角色。这些角色选择一项：①令你摸一张牌。②回复1点体力，然后交给你一张牌。（X为你的攻击范围且至少为1）',
			misa_yehuo:'业火',
			misa_yehuo_info:'一名角色的摸牌阶段开始时，若其在你的攻击范围内，你可以弃置X张牌并选择一项：①对其造成1点火属性伤害。②令其于此摸牌阶段放弃摸牌。（X为你与其的的距离）',
			yusa_misa:'通灵',
			yusa_misa_info:'当你发动的〖演艺〗结算完成之后，你可以将武将牌翻面。',
			misa_yusa:'归魂',
			misa_yusa_info:'当你发动的〖业火〗结算完成后，你可以将武将牌翻面。',
			masato_baoquan:'暴拳',
			masato_baoquan_info:'锁定技，当你即将造成伤害时，你选择一项：1.令此伤害+2并减1点体力上限。2.防止此伤害。',
			iwasawa_yinhang:'引吭',
			iwasawa_yinhang_info:'锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。',
			iwasawa_mysong:'My Song',
			iwasawa_mysong_info:'锁定技，当你即将进行濒死结算时，取消之。回合开始时，若你的体力值小于1，则你获得技能〖奋音〗直到回合结束。回合结束时，若你的体力值小于1，你死亡。',
			iwasawa_fenyin:'奋音',
			iwasawa_fenyin_info:'你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌的颜色不同，则你可以摸一张牌。',
			iwasawa_refenyin:'奋音',
			iwasawa_refenyin_info:'锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。',
			//卡牌花色的计算不受〖红颜〗等技能的影响
			kengo_weishang:'伪伤',
			kengo_weishang_sha:'伪伤',
			kengo_weishang_shan:'伪伤',
			kengo_weishang_info:'出牌阶段限一次，你可以废除一个装备栏并摸两张牌。若你的武器栏已废除，则你使用【杀】的次数上限+1，且当你使用【杀】指定目标后，目标角色弃置一张牌；若你的防具栏已废除，则你可以将一张牌当做【闪】使用或打出；若你的攻击/防御坐骑栏已废除，则你至其他角色的距离-1/其他角色至你的距离-1。',
			kengo_guidui:'归队',
			kengo_guidui_info:'锁定技，准备阶段，若你有已废除的装备栏，则你恢复这些装备栏，且本局游戏内发动【伪伤】时不能废除这些装备栏。',
			yoshino_jueyi:'决义',
			yoshino_jueyi_info:'出牌阶段开始时，你可以选择一名其他角色。你摸一张牌并与其猜拳（平局则重来）。若你赢，你对其造成1点伤害。若你没赢，你本阶段内使用牌时不能指定其为目标。',
			yui_jiang:'激昂',
			yui_jiang_info:'每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。',
			yui_lieyin:'烈音',
			yui_lieyin_info:'锁定技，出牌阶段开始时，你选择一项：①本阶段内的红色牌均视为【杀】；②本阶段内的【杀】均视为【决斗】。',
			yui_takaramono:'珍宝',
			yui_takaramono_info:'觉醒技，准备阶段，若你满足以下条件中的至少两个：①体力值不大于1；②场上有已死亡的角色；③已因〖激昂〗累计获得过至少三张牌；则你获得技能〖引吭〗，将〖烈音〗描述中的「你选择」改为「你可选择」，然后加1点体力上限并回复1点体力。',
			//ユイ/孙笨双将组合时，孙笨的〖激昂〗不计入〖珍宝〗的次数统计
			yui_yinhang:'引吭',
			yui_yinhang_info:'锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。',
			tsumugi_mugyu:'姆啾',
			tsumugi_mugyu_info:'当你成为牌的目标后，若你的手牌数小于体力上限，则你可以摸一张牌。',
			tsumugi_huilang:'回廊',
			tsumugi_huilang2:'回廊',
			tsumugi_huilang_info:'回合结束时，你可以将任意张牌扣置于武将牌下（均称为「隐」）。回合开始时，你获得所有「隐」，然后可令等量的角色各摸一张牌。',
			//〖回廊〗涉及的所有卡牌移动的结算不会触发〖良姻〗
			haruka_shuangche:'双掣',
			kanata_shuangche:'双掣',
			haruka_shuangche_backup:'双掣',
			haruka_shuangche_info:'出牌阶段，你可以视为使用任意基本牌或普通锦囊牌。此牌结算完成后，你选择一项：1.弃置X张牌。2.失去1点体力且本回合内不能再发动〖双掣〗。（X为你于此回合内发动过〖双掣〗的次数）',
			//你不能以此法使用〖回魂〗
			saya_shouji:'授计',
			saya_shouji_info:'每回合限一次，当你使用的牌结算完成后，你可以将此牌对应的所有实体牌交给一名其他角色。其可以使用这些牌中的一张，若如此做，你摸一张牌。',
			saya_powei:'破围',
			saya_powei_info:'限定技，回合结束后，你可以选择一名体力值大于你的其他角色。你与其交替进行额外回合，直到你与其中的一名角色死亡或进行到九个回合。你于回合开始时进行判定，若结果为红色，则你对其造成1点伤害。此过程中其他角色不计入距离和座次计算。',
			saya_judge:'破围',
			saya_nodis:'破围',
			//〖破围〗不会因为〖铁骑〗无效
			inari_baiwei:'摆尾',
			inari_baiwei_draw:'摆尾',
			inari_baiwei_info:'你可以将一张♦牌当做任意基本牌使用或打出。此牌结算完成后，你摸一张牌。',
			//你不能以此法使用【毒】
			inari_baiwei_backup:'摆尾',
			inari_baiwei_sha:'摆尾',
			inari_baiwei_shan:'摆尾',
			inari_huhun:'狐魂',
			inari_huhun_info:'锁定技，你的♣牌的花色均视为♦。你的手牌上限+1。',
			shiina_qingshen:'轻身',
			shiina_qingshen_info:'当你受到或造成伤害后，你可以获得此次伤害的渠道对应的实体牌，然后将等量的牌置于你的武将牌上，称为「轻」。锁定技，你的手牌上限和攻击范围+X（X为「轻」数）。',
			shiina_feiyan:'飞燕',
			shiina_feiyan_info:'一名其他角色的回合开始时，若其在你的攻击范围内，则你可以将一张「轻」置于弃牌堆，然后视为对其使用一张【杀】。若此【杀】未造成伤害，你摸一张牌。你于此【杀】的结算流程中视为拥有技能〖铁骑〗。',
			shiina_retieji:'铁骑',
			//你不能对稻荷和多鲁基发动〖飞燕〗
			sunohara_chengshuang:'成双',
			sunohara_chengshuang_phase:'成双',
			sunohara_chengshuang_info:'锁定技，游戏开始时，你选择你的性别。回合开始时，你可以切换你的性别。',
			sunohara_tiaoyin:'挑引',
			sunohara_tiaoyin_info:'出牌阶段限一次，你可以弃置任意张花色各不相同的手牌，然后获得等量角色区域内的各一张牌。若你以此法获得了异性角色区域内的牌，则你失去1点体力。',
			sunohara_jianren:'坚忍',
			sunohara_jianren_info:'当你受到伤害后，你可以令一名角色摸一张牌。若伤害无来源或来源与你性别不同，则改为摸三张牌。',
			rin_baoqiu:'暴球',
			rin_baoqiu_info:'锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。',
			sasami_miaobian:'喵变',
			sasami_miaobian_info:'当你的体力值变为：3以下时，你获得技能〖公清〗，2以下时，你获得技能〖复难〗，1以下时，你获得技能〖暴球〗。',
			sasami_gongqing:"公清",
			sasami_gongqing_info:"锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
			sasami_funan:'复难',
			sasami_funan_info:'其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。',
			sasami_baoqiu:'暴球',
			sasami_baoqiu_info:'锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。',
			akane_jugu:'巨贾',
			akane_jugu_info:'锁定技，1.你的手牌上限+X。2.游戏开始时，你摸X张牌（X为你的体力上限）。',
			akane_quanqing:'权倾',
			akane_quanqing_info:'出牌阶段，你可选择：1.弃置一张点数大于10的牌并对攻击范围内的一名其他角色造成1点伤害；2.弃置一张点数大于6的牌并弃置攻击范围内的一名其他角色区域内的一张牌。3.弃置一张牌并令攻击范围内的一名其他角色摸一张牌。',
			akane_yifu:'蚁附',
			akane_yifu2:'蚁附',
			akane_yifu_info:'主公技，其他键势力角色的出牌阶段限一次，其可交给你一张手牌。然后你摸一张牌，并将一张手牌交给该角色。',
			doruji_feiqu:'肥躯',
			doruji_feiqu_info:'锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。',
			yuiko_fenglun:'锋论',
			yuiko_fenglun_info:'出牌阶段限一次，你可以和一名其他角色拼点。若你赢，你本阶段内使用牌没有次数和距离限制。',
			yuiko_dilve:'底略',
			yuiko_dilve_info:'你可以使用牌堆底的一张牌进行拼点。当你拼点后，你可以获得两张拼点牌。',
			riki_spwenji:'问计',
			riki_spwenji_info:'出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌名称相同的牌时不能被其他角色响应。',
			riki_nvzhuang:'女装',
			riki_nvzhuang_info:'锁定技，此武将牌视为包含女性性别。结束阶段，若你：有手牌，你摸一张牌；没有手牌，你摸两张牌。',
			riki_mengzhong:'梦终',
			riki_mengzhong_info:'觉醒技，准备阶段，若你已因〖问计〗获得了三张或更多的牌，则你加1点体力上限并回复1点体力，失去〖问计〗并获得〖重振〗。',
			riki_chongzhen:'重振',
			riki_chongzhen_info:'出牌阶段开始时，你可以与一名角色拼点。若你赢，你获得该角色手牌区，装备区，判定区的各一张牌；若你没赢，你于此阶段内使用牌时不能指定其他角色为目标。',
			hisako_yinbao:'音爆',
			hisako_yinbao_info:'当你受到伤害/回复体力后，你可以判定。若结果为♠，则你对一名其他角色造成1点雷属性伤害。',
			hisako_zhuanyun:'转运',
			hisako_zhuanyun_info:'锁定技，你的判定会朝向对你有利的方向倾斜。',
			hinata_qiulve:'球略',
			hinata_qiulve_info:'你可以将一张非基本牌当做【杀】使用或打出（无距离限制）。你以此法使用的红色【杀】不可被响应，黑色【杀】不计入使用次数限制。',
			hinata_ehou:'扼喉',
			hinata_ehou_info:'其他角色对你使用的牌结算完成后，你可对其使用一张【杀】。若此【杀】造成伤害，则你摸一张牌。',
			noda_fengcheng:'奉承',
			noda_fengcheng_info:'锁定技，其他角色交给你牌后，其摸一张牌。',
			noda_xunxin:'寻衅',
			noda_xunxin2:'寻衅',
			noda_xunxin_info:'出牌阶段限X次，你可以视为对一名体力值不小于你的角色使用【决斗】。若如此做，此【决斗】结算完成后，没赢的角色交给赢的角色一张牌。（X为你的体力值）',
			tomoya_shangxian:'伤弦',
			tomoya_shangxian_info:'锁定技，你计算与其他角色的距离时始终从逆时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。',
			tomoya_wangjin:'往今',
			tomoya_wangjin_info:'每项每轮各限一次。一名其他角色的回合结束时，若其：在你的攻击范围内，你可令其摸一张牌。若其的体力值小于你，则你摸一张牌，并可交给其一张牌。不在你的攻击范围内，则你摸两张牌，并令其弃置你的一张手牌。若其的体力值大于你，则你视为对其使用一张【杀】（无距离限制）。',
			nagisa_tiandu:'天妒',
			nagisa_tiandu_info:'当你的判定牌生效后，你可以获得此牌。',
			nagisa_fuxin:'抚心',
			nagisa_fuxin_info:'当一名角色于回合外受到伤害，或其手牌被其他角色弃置或获得后，你可以令其判定。若结果为：红色，其摸一张牌。黑色，当前回合角色弃置一张牌。',
			ayato_jianshen:'僭神',
			ayato_jianshen_info:'锁定技，你手牌中的【杀】均视为神属性。',
			ayato_zonghuan:'纵幻',
			ayato_zonghuan_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，然后选择一项：将其中的一张牌置入弃牌堆，或以该角色的视角使用其中的一张，然后摸一张牌。',
			ao_xishi:'习事',
			ao_xishi_info:'锁定技，当你使用或打出♦牌时，或其他角色使用♦牌指定你为目标后，你摸一张牌。',
			ao_kuihun:'窥魂',
			ao_kuihun_info:'其他角色进入濒死状态时，你可以摸一张牌，然后观看其手牌并将其中一张牌置于你的武将牌上，称为「蝶」。你使用与一张「蝶」花色相同的牌时无距离和次数限制。你的手牌上限+X（X为蝶数）。',
			ao_shixin:'释心',
			ao_shixin_info:'觉醒技，准备阶段，若你的「蝶」中包含至少三种花色，则你加1点体力上限并回复1点体力，失去〖窥魂〗并获得〖蝶归〗。',
			ao_diegui:'蝶归',
			ao_diegui_backup:'蝶归',
			ao_diegui_info:'出牌阶段限一次，你可以将一张「蝶」交给一名角色，该角色摸两张牌并复原武将牌。',
			yuzuru_wuxin:'无心',
			yuzuru_wuxin_info:'结束阶段，你可以选择一项：失去1点体力并令一名角色摸两张牌，或弃置两张牌并回复1点体力。',
			yuzuru_deyi:'得义',
			yuzuru_deyi_info:'觉醒技，当有其他角色死亡后，你减1点体力上限并回复1点体力，失去技能〖无心〗，获得技能〖往生〗〖困奋〗和〖去疾〗。',
			yuzuru_wangsheng:'往生',
			yuzuru_wangsheng_info:'觉醒技，当你即将死亡时，你防止此次死亡。你可以将任意张牌交给一名其他角色，然后减1点体力上限并将体力回复至2点，修改技能〖困奋〗和〖去疾〗。',
			yuzuru_kunfen:'困奋',
			yuzuru_kunfen_info:'锁定技，结束阶段，你失去1点体力并摸两张牌。然后你可以将两张牌交给一名其他角色。',
			yuzuru_quji:'去疾',
			yuzuru_quji_info:'出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。若你以此法弃置了黑色牌，则你失去1点体力。（X为你已损失的体力值）',
			yuzuru_kunfen_rewrite:'困奋·改',
			yuzuru_kunfen_rewrite_info:'锁定技，结束阶段，你摸两张牌。然后你可以将两张牌交给一名其他角色。',
			yuzuru_quji_rewrite:'去疾·改',
			yuzuru_quji_rewrite_info:'出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。（X为你已损失的体力值）',
			yuzuru_bujin:'步进',
			yuzuru_bujin_info:'锁定技，己方其他角色计算与其他角色的距离-1且摸牌阶段的额定摸牌数+1。',
			kanade_mapo:'麻婆',
			kanade_mapo_info:'你可以将一张♥牌当做【麻婆豆腐】使用。你使用的【麻婆豆腐】可以多指定一个目标。',
			kanade_benzhan:'奔战',
			kanade_benzhan_info:'每回合限一次。当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置两张牌或令一名角色摸两张牌；非基本牌，你可对一名角色造成1点伤害或令一名其他角色回复1点体力。',
			mio_tuifu:'推腐',
			mio_tuifu_info:'锁定技，当一名角色对一名同性角色造成伤害时，你摸一张牌。',
			mio_tishen:'替身',
			mio_tishen_info:'限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鸟】。',
			midori_nonghuan:'弄幻',
			midori_nonghuan_info:'出牌阶段限X次（X为你的体力值），你可以获得一名本阶段内未选择过的其他角色的区域内的一张牌。你摸一张牌，然后将一张牌交给该角色。然后你清除此技能结算过程中所有卡牌移动事件的移动记录。',
			//即技能结算完成后，所有涉及到的牌移动事件不会再被getHistory获取
			midori_tishen:'替身',
			midori_tishen_info:'限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鱼】。',
			kyoko_juwu:'聚物',
			kyoko_juwu_info:'你的回合外，当有装备牌进入弃牌堆后，若这些牌不是从你的区域移动的，则你可以获得这些牌。',
			kyoko_zhengyi:'整遗',
			kyoko_zhengyi_info:'锁定技，若你装备区的花色数：大于等于1，你视为拥有〖精策〗；大于等于2，你视为拥有〖涉猎〗：大于等于3，你视为拥有〖制衡〗；大于等于4，你将〖精策〗和〖制衡〗改为界限突破版本。',
			kyoko_jingce:'精策',
			kyoko_shelie:'涉猎',
			kyoko_zhiheng:'制衡',
			shizuru_nianli:'念力',
			shizuru_nianli_info:'每轮限一次，你可以展示一张♦/♣/♥/♠手牌，然后视为使用一张不计入次数限制和记录的雷【杀】/【闪】/【桃】/【无懈可击】。',
			shizuru_benzhan:'奔战',
			shizuru_benzhan_info:'每回合限一次。当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置两张牌或令一名角色摸两张牌；非基本牌，你可对一名角色造成1点伤害或令一名其他角色回复1点体力。',
			shiorimiyuki_banyin:'伴音',
			shiorimiyuki_banyin_info:'当你受到伤害或回复体力后，你可令一名其他角色回复1点体力。',
			shiorimiyuki_tingxian:'铤险',
			shiorimiyuki_tingxian_info:'出牌阶段开始时，你可以摸至多三张牌。若如此做，你回复1点体力，且此阶段结束时你失去X点体力。（X为你得到的牌中仍在手牌区的牌的数量）',
			shiorimiyuki_tingxian2:'铤险',
			miki_shenqiang:'神枪',
			miki_shenqiang_info:'锁定技，游戏开始时，你将一张【海德洛格拉迪尔特·改】和一张【望远镜】置入你的装备区。你装备区内的武器牌和宝物牌不能被其他角色弃置。',
			miki_huanmeng:'幻梦',
			miki_huanmeng_info:'准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）',
			miki_zhiluo:'治裸',
			miki_zhiluo_info:'锁定技，一名其他角色的回合结束时，若其在你的攻击范围内且其装备区内没有牌，则你选择：①摸一张牌。②视为对其使用一张【杀】。',
			miki_hydrogladiator:'海德洛',
			miki_hydrogladiator_info:'全名为【海德洛格拉迪尔特·改】。锁定技，当你因执行【杀】的效果而对目标角色造成伤害后，你弃置所有至目标角色距离为1的其他角色的一张牌或弃置其两张牌。',
			miki_hydrogladiator_skill:'海德洛格拉迪尔特·改',
			miki_binoculars:'望远镜',
			miki_binoculars_info:'锁定技，其他角色的手牌对你可见。',
			shiori_huijuan:'绘卷',
			shiori_huijuan_discard:'绘卷',
			shiori_huijuan_info:'锁定技，其他角色的结束阶段开始时，你可以视为使用一张该角色本回合出牌阶段内使用过的基本牌或普通锦囊牌。准备阶段开始时，若你自上个回合起以此法使用的牌数不小于X，则你选择一项：①弃置装备区或判定区内的一张牌。②跳过本回合的出牌阶段。（X为场上玩家数的一半且至少为2）',
			kaori_siyuan:'思愿',
			kaori_siyuan_info:'出牌阶段，你可以将一张装备牌或延时锦囊牌置于一名其他角色的装备区内，然后可以视为使用一张基本牌或普通锦囊牌。',
			akiko_dongcha:'洞察',
			akiko_dongcha_info_identity:'锁定技，其他角色的手牌对你可见。游戏开始时，你令其他角色的身份牌对你可见。',
			akiko_dongcha_info:'锁定技，其他角色的手牌对你可见。',
			abyusa_jueqing:'绝情',
			abyusa_jueqing_info:'当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。',
			abyusa_jueqing_1st:'绝情',
			abyusa_jueqing_rewrite:'绝情·改',
			abyusa_jueqing_rewrite_info:'锁定技，你即将造成的伤害均视为失去体力。',
			abyusa_dunying:'遁影',
			abyusa_dunying_info:'锁定技，其他角色计算与你的距离时+X。准备阶段和结束阶段，你摸X张牌（X为你已损失的体力值）。',
			godan_yuanyi:'远忆',
			godan_yuanyi_info:'锁定技，回合开始时，你摸X张牌并进行一个额外的出牌阶段。（X为游戏轮数且至多为3）',
			godan_feiqu:'肥躯',
			godan_feiqu_info:'锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。',
			godan_xiaoyuan:'消元',
			godan_xiaoyuan_info:'觉醒技，当你扣减体力时，若你的体力值小于4，则你减3点体力上限并摸三张牌，失去【肥躯】。',
			yuu_lveduo:'掠夺',
			yuu_lveduo_info:'每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。',
			yuu_lveduo_full_info:'每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面，获得该角色武将牌上所有的带有「Charlotte」标签的技能，且该角色失去这些技能。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。',
			ryoichi_baoyi:'爆衣',
			ryoichi_baoyi_info:'锁定技，当你失去装备区内的一张牌后，你摸一张牌，然后选择一项：①令一名其他女性角色失去1点体力。②弃置一名其他非女性角色区域内的两张牌。',
			ryoichi_tuipi:'褪皮',
			ryoichi_tuipi_info:'锁定技，你不是【顺手牵羊】和【过河拆桥】的合法目标。你装备区的牌于弃牌阶段内计入手牌上限。',
			kotori_yumo:'驭魔',
			kotori_yumo_damage:'驭魔',
			kotori_yumo_gain:'驭魔',
			kotori_yumo_info:'锁定技，游戏开始时，你获得蓝色、红色、绿色、黄色、灰色魔物各一个。当有角色受到伤害后，若你没有对应的标记，你根据其势力获得一个对应魔物：魏：蓝、蜀：红、吴：绿、群：黄、灰：晋、键：紫。回合开始时，你可以弃置一个对应的魔物并获得以下技能之一直到回合结束：蓝：魏业、红：蜀义、绿：吴耀、黄：群心、灰：晋势、紫：键魂。',
			kotori_skill_wei:'魏业',
			kotori_skill_wei_info:'回合开始时，你可以弃置一张牌并指定一名其他角色，该角色须弃置一张牌，否则你摸一张牌。',
			kotori_skill_shu:'蜀义',
			kotori_skill_shu_info:'你使用【杀】上限+1；出牌阶段结束时，若你于此阶段使用【杀】次数不少于2，摸一张牌。',
			kotori_skill_wu:'吴耀',
			kotori_skill_wu_info:'回合结束时，若你的手牌数不等于你的体力值，则你摸一张牌。',
			kotori_skill_qun:'群心',
			kotori_skill_qun_info:'锁定技，弃牌阶段开始时，若你的手牌数比体力值多2或更多，你本回合手牌上限+1；若你已损失体力值大于1，你手牌上限+1。',
			kotori_skill_key:'键魂',
			kotori_skill_key_info:'出牌阶段限一次，你可以摸一张牌并获得1点护甲。若如此做，你于当前回合结束时失去1点体力。',
			kotori_skill_jin:'晋势',
			kotori_skill_jin_info:'摸牌阶段结束时，你可以展示你于此阶段内因摸牌而得到的牌。若这些牌的花色均不同，则你摸一张牌。',
			kotori_yumo_wei:'<span class="thundertext">魔物</span>',
			kotori_yumo_shu:'<span class="firetext">魔物</span>',
			kotori_yumo_wu:'<span class="greentext">魔物</span>',
			kotori_yumo_qun:'<span class="yellowtext">魔物</span>',
			kotori_yumo_key:'<span class="legendtext">魔物</span>',
			kotori_yumo_jin:'<span class="icetext">魔物</span>',
			kotori_huazhan:'花绽',
			kotori_huazhan_info:'每回合每种魔物限一次，你可将一个蓝色/红色/绿色/黄色/紫色/灰色魔物当做【树上开花】使用。',
			jojiro_shensu:'神速',
			jojiro_shensu_info:'你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张没有距离限制的【杀】。',
			jojiro_shensu1:'神速',
			jojiro_shensu2:'神速',
			jojiro_shensu4:'神速',
			jojiro_shunying:'瞬影',
			jojiro_shunying_info:'锁定技，回合结束时，若你本回合内跳过了阶段，则你选择一项：1.失去1点体力。2.移动至多X格并摸X张牌（X为你本回合内跳过的阶段数）。',
			shiroha_yuzhao:'预兆',
			shiroha_yuzhao_umi:'预兆',
			shiroha_yuzhao_info:'锁定技，游戏开始时，你将牌堆顶的X张牌扣置于你的武将牌上，称为「兆」。一名角色的回合开始时，若你有「兆」且其至你的距离不大于1，则你将牌堆顶的X张牌扣置为「兆」，然后将等量的「兆」置于牌堆顶。（X为势力数）',
			shiroha_guying:'孤影',
			shiroha_guying_info:'锁定技，每回合限一次，当你受到伤害/对其他角色造成伤害时，你进行判定。若结果为红色/黑色，此伤害-1/+1。',
			shiroha_guying_rewrite:'孤影·改',
			shiroha_guying_rewrite_info:'当你受到伤害/对其他角色造成伤害时，你可进行判定。若结果为红色/黑色，此伤害-1/+1。',
			shiroha_jiezhao:'解兆',
			shiroha_jiezhao_info:'一名角色的判定牌生效前，你可打出一张「兆」代替之。当你以此法移去最后一张「兆」后，你加1点体力上限并回复1点体力，然后修改〖孤影〗并随机获得以下技能中的一个：〖炒饭〗/〖习事〗/〖呣啾〗/〖结伴〗。',
			//猴年马月爆料再利用
			shizuku_sizhi:'思智',
			shizuku_sizhi2:'思智',
			shizuku_sizhi_info:'出牌阶段限一次，你可以弃置任意张点数之和为13的牌，然后摸两倍数量的牌。以此法得到的牌中，黑色牌本回合无距离和次数限制，红色牌本回合不计入手牌上限。',
			shizuku_biyi:'避忆',
			shizuku_biyi_info:'当你受到伤害后，你可以进行一次判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复1点体力。',
			shizuku_sanhua:'散花',
			shizuku_sanhua_info:'当你死亡时，你可令一名其他角色从牌堆中获得四张名称各不相同的基本牌。',
			hiroto_huyu:'虎驭',
			hiroto_huyu2:'虎驭',
			hiroto_huyu_info:'其他角色的出牌阶段结束时，若你没有技能〖纵略〗，则其可将两张手牌交给你。若如此做，你获得〖纵略〗。你的下回合结束时，你失去〖纵略〗并将本回合内得到的所有牌交给该角色。',
			hiroto_zonglve:'纵略',
			hiroto_zonglve_info:'锁定技，你的手牌上限+3。出牌阶段限一次，你可以将一张手牌背面朝下放置，并展示一名其他角色的一张手牌。若这两张牌：颜色相同，你对其造成1点伤害并弃置其展示的牌。颜色不同，你获得该角色区域内的两张牌。',
			hiroto_tuolao:'脱牢',
			hiroto_tuolao_info:'觉醒技，回合结束后，若此回合不是你的第一个回合且你本轮内未因〖虎驭〗失去过牌，则你摸三张牌，失去〖虎驭〗并获得〖纵略〗。',
			sakuya_junbu:'均步',
			sakuya_junbu_info:'锁定技，若你已废除的装备栏数量：≥1，你使用牌无距离限制。≥2，你使用牌无次数限制。≥3，你使用牌时可以多指定一个目标。≥4，你使用的牌不可被响应。≥5，你使用牌造成伤害时失去1点体力，令此伤害+1。',
			rumi_shuwu:'淑武',
			rumi_shuwu2:'淑武',
			rumi_shuwu_info:'锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。出牌阶段结束时，你令X=0，且每满足一项便令X+1：①你于本阶段内使用【杀】的次数不大于1。②你于本阶段内未使用锦囊牌造成过伤害。③你的体力值不大于3。你摸X张牌，且本回合手牌上限+X。',
			chihaya_liewu:'烈武',
			chihaya_liewu2:'烈武',
			chihaya_liewu_info:'锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。当你首次废除最后一个装备栏后，你减4点体力上限并获得技能〖怀柔〗。',
			chihaya_youfeng:'游凤',
			chihaya_youfeng_info:'转换技，阴，每轮限一次，你可以加1点体力上限，视为使用一张普通锦囊牌；阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张基本牌。',
			chihaya_huairou:'怀柔',
			chihaya_huairou_info:'出牌阶段，你可以重铸装备牌。',
			yukito_kongwu:'控物',
			yukito_kongwu_info:'出牌阶段限一次，你可以表演《小空飞天》。若如此做，你从以下项目中随机选择X项，并执行其中的一项：①令一名角色摸两张牌。②对一名角色造成1点伤害。③令一名已受伤的角色回复1点体力。④弃置一名角色区域内的两张牌。⑤移动场上的一张牌。若X=0，则你弃置两张牌。（X为你的得分）',
			yukito_yaxiang:'鸦翔',
			yukito_yaxiang_info:'限定技，当有角色进入濒死状态时，你可移去此武将牌，然后令该角色将体力值回复至3点，弃置判定区的所有牌并获得技能〖终愿〗。',
			misuzu_zhongyuan:'终愿',
			misuzu_zhongyuan_info:'限定技。当你的判定结果生效时，你可将判定结果改为任意花色和点数并结束此时机。',
			asara_shelu:'摄录',
			asara_shelu_info:'出牌阶段限一次，你可以弃置一张牌，然后展示一名其他角色的一张手牌并将其置于你的武将牌上，称为“影”。若你以此法弃置的牌和展示的牌：花色相同，则你摸两张牌。点数相同，则你回复1点体力。',
			asara_yingwei:'影威',
			asara_yingwei_info:'你可以如手牌般使用或打出“影”。锁定技，当你使用“影”时，强制触发对应的应变效果。',
			kotomi_qinji:'琴击',
			kotomi_qinji_info:'出牌阶段开始时，你可视为使用使用【万箭齐发】。你以此法使用【万箭齐发】造成的伤害视为失去体力。',
			kotomi_chuanxiang:'传箱',
			kotomi_chuanxiang2:'传箱',
			kotomi_chuanxiang_info:'其他角色的出牌阶段限一次，其可以将装备区内的一张牌移动到另一名角色的装备区内，然后你摸一张牌。若你是目标角色，则你改为摸两张牌。',
			mia_shihui:'时迴',
			mia_shihui_info:'锁定技，摸牌阶段，你改为摸X+1张牌（X为你上回合弃置的牌数）；结束阶段，你弃置一张牌并回复1点体力。',
			mia_qianmeng:'潜梦',
			mia_qianmeng_info:'使命技。①游戏开始时，你摸一张牌，然后将一张牌置于牌堆的正中央。②使命：当有角色获得“潜梦”牌时，其将此牌交给你。你将体力值回复至上限，失去〖时迴〗并获得〖风发〗。③失败：当你死亡时，你可令一名角色获得牌堆中所有与“潜梦”牌花色点数相同的牌。',
			mia_fengfa:'风发',
			mia_fengfa_info:'锁定技。摸牌阶段，你多摸X张牌（X为你上回合使用过的牌数）。',
			kano_liezhen:'列阵',
			kano_liezhen_info:'结束阶段，若你本回合内使用过牌且这些牌的类型：不均相同，你可视为使用【排兵布阵】或智囊；均相同，你获得仁库中的所有牌（没有则改为摸两张牌）。',
			kano_paibingbuzhen:'排兵布阵',
			kano_paibingbuzhen_info:'出牌阶段，对至多三名角色使用。目标角色摸一张牌，然后将一张牌置入仁库。若仁库中的牌类型或颜色均相同，则你摸一张牌。',
			kano_poyu:'破羽',
			kano_poyu_info:'当你成为【杀】或伤害性锦囊牌的目标后，若仁库中有牌，你可判定。然后你可从仁库中移去一张与此牌类型或花色相同的牌，令此牌对你无效。',
			liyingxia_sanli:'三礼',
			liyingxia_sanli_info:'锁定技。其他角色于其回合内前两次使用牌指定你为目标后，你摸一张牌；第三次使用牌指定你为目标后，你交给其一张牌。',
			liyingxia_zhenjun:'振军',
			liyingxia_zhenjun_info:'键势力技。结束阶段，你可以令至多X+1名角色各摸一张牌，且这些角色于自己的下个回合内第一次造成的伤害+1（X为你本回合内使用【杀】和伤害性锦囊牌的次数）。',
			liyingxia_wumai:'武脉',
			liyingxia_wumai_info:'蜀势力技。一轮游戏开始时，你可以选择获得其中一个未选择过的技能直到本轮结束：〖八阵〗/〖集智〗/〖观星〗/〖游龙〗。若均已选择过，则你可以摸X张牌（X为场上已受伤的角色数且至多为3）。',
			erika_shisong:'识诵',
			erika_shisong_info:'锁定技。①你的手牌上限+X（X为你的护甲数）。②当你于回合内使用第Y张牌时，若此牌与你上回合使用的第Y张牌类型相同，则你摸一张牌。',
			erika_yousheng:'佑生',
			erika_yousheng_info:'使命技。①限定技。一轮游戏开始时，你可以选择至多两名其他角色。你减2点体力上限并增加3点护甲。②当你〖佑生①〗选择的角色成为【杀】或伤害类锦囊牌的目标时，你可以弃置X张牌并将此目标转移给自己（X为你本轮内发动过〖佑生②〗的次数）。此牌结算结束后，你可令一名原目标角色获得此牌。③成功：当你失去最后的护甲后，若你已发动过〖佑生①〗，则你和所有〖佑生①〗选择的角色各摸三张牌。④失败：当一名〖佑生①〗选择的角色因【杀】或伤害类锦囊牌而受到伤害时，你失去所有护甲并弃置等量的牌。',
			erika_yousheng_append:'<span style="font-family: yuanli">Death is not the end of life, but the completion of life.</span>',
			satomi_luodao:'落刀',
			satomi_luodao_info:'当你使用【杀】指定目标后，你可以展示目标角色的所有手牌。若其中：有【闪】，则你弃置其中的一张【闪】；没有【闪】，则你弃置一张牌。',
			satomi_daohai:'稻海',
			satomi_daohai_info:'结束阶段，若你本回合内弃置过牌，则你可以视为使用一张【五谷丰登】。然后你可以将你于此【五谷丰登】中得到的牌当做【乐不思蜀】使用。',
			satomi_daohai_append:'<span style="font-family: yuanli">五穀豊穣、刈り入れ時だね！</span>',
			tenzen_fenghuan:'封还',
			tenzen_fenghuan_info:'其他角色使用的【杀】或伤害性锦囊牌结算结束后，若你是此牌的唯一目标，则你可以弃置任意张点数之和大于等于此牌点数两倍的牌，然后视为对其使用一张名称相同的牌。',
			tenzen_retianquan:'天全',
			tenzen_retianquan_info:'每回合限一次。当你使用【杀】指定目标后，你可失去1点体力或弃置一张牌，然后展示牌堆顶的三张牌（若你的体力值小于体力上限的50%，则改为展示五张牌）。这些牌中每有一张基本牌，响应此牌所需的【闪】的数量便+1。此牌结算结束后，若此牌造成过伤害，则你获得展示牌中的所有非基本牌。',
			iriya_yinji:'殷极',
			iriya_yinji_info:'锁定技。出牌阶段开始时，你将手牌摸至17张。你不能直接使用以此法得到的牌。',
			iriya_haozhi:'豪掷',
			iriya_haozhi_info:'出牌阶段，你可以按照斗地主牌型弃置至少两张牌，且其他角色可以依次对其进行一轮响应。最后一名进行响应的角色可以根据对应牌型执行对应效果。'
			+'对子：其可以令至多两名角色各摸一张牌。'
			+'三带：其可以弃置至多三名其他角色的各一张牌，然后摸一张牌。'
			+'单顺：其可以弃置一名其他角色的一张牌。若其未以此法弃置过颜色相同的牌，则其可以重复此流程。然后其摸等量的牌。'
			+'双顺：其可以获得一名其他角色的一张牌。若其未以此法获得过颜色相同的牌，则其可以重复此流程。然后其回复等量的体力。'
			+'三顺/飞机：其可以令至多3名其他角色翻面，然后对其中一名角色造成1点火属性伤害。'
			+'炸弹/四带二：其可以对一名角色造成2点雷属性伤害，然后目标角色翻面，弃置装备区的所有牌和四张手牌。',
			visible_fuuko_xingdiao:'<span data-nature="soilmm">星</span>',
			fuuko_xingdiao:'星雕',
			fuuko_xingdiao_info:'锁定技。游戏开始时，你将手牌摸至8张，然后将所有手牌明置（称为“星”，不计入手牌上限）。每名其他角色限一次，其可以于出牌阶段选择获得你的一张“星”，然后你摸一张牌。',
			fuuko_chuanyuan:'传愿',
			fuuko_chuanyuan_info:'锁定技。当你失去一张“星”后，你回复1点体力，然后从牌堆中获得一张和“星”花色点数相同的牌（没有则改为摸一张牌，且使用此牌无距离和次数限制）。',

			key_kud:'库特莉亚芙卡',
			kud_qiaoshou:'巧手',
			kud_qiaoshou_equip:'巧手',
			kud_qiaoshou_end:'巧手',
			kud_qiaoshou_backup:'巧手',
			kud_qiaoshou_info:'出牌阶段/结束阶段，若你没有“巧”，则你可以将一张手牌作为“巧”置于武将牌上并摸一张牌，且视为装备了一张你选择的武器牌或进攻坐骑/防具牌或防御坐骑直到“巧”进入弃牌堆。出牌阶段结束时/准备阶段开始时，你将“巧”置入弃牌堆。',
			kud_buhui:'不悔',
			kud_buhui_info:'限定技，当你进入濒死状态时，你可以弃置“巧”和装备区内的所有牌（至少一张）并摸等量的牌，将体力回复至2点，获得技能〖重振〗。',
			key_misuzu:'神尾观铃',
			misuzu_hengzhou:'恒咒',
			misuzu_hengzhou_info:'锁定技，准备阶段开始时，或当你受到1点伤害或回复1点体力后，你获得一个“诅咒”标记。你的手牌上限和摸牌阶段的额定摸牌数+X。结束阶段开始时，若X大于3，则你移去所有“诅咒”标记并失去1点体力。（X为“诅咒”标记数）',
			misuzu_nongyin:'浓饮',
			misuzu_nongyin_info:'当你需要使用【桃】时，你可将一张红色非锦囊牌当做【乐不思蜀】置入自己的判定区，然后视为使用一张【桃】。',
			misuzu_zhongxing:'终幸',
			misuzu_zhongxing_info:'每回合限一次，当你判定区的牌移动到其他区域后，你可令一名角色回复1点体力或摸两张牌。',
			key_kamome:'久岛鸥',
			kamome_yangfan:'扬帆',
			kamome_yangfan_info:'锁定技，游戏开始时，你将一张【旅行箱】置入你的装备区。当你失去装备区内的一张牌后，你摸两张牌。',
			kamome_huanmeng:'幻梦',
			kamome_huanmeng_info:'准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）',
			kamome_jieban:'结伴',
			kamome_jieban_info:'转换技。每回合限一次，当你受到或造成伤害后，阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。',
			kamome_suitcase:'旅行箱',
			kamome_suitcase_info:'锁定技，你跳过你的判定阶段和弃牌阶段；当你即将翻面时，取消之。',
			key_nao:'友利奈绪',
			nao_duyin:'独隐',
			nao_duyin2:'独隐',
			nao_duyin_info:'一名其他角色的回合开始时，若你本局游戏内未对其发动过〖独隐〗，则你可以弃置一张牌或将武将牌翻面。若如此做，你不能成为其使用牌的目标，且对其使用牌没有距离限制且不计入使用次数直到你的下回合结束。',
			nao_wanxin:'挽心',
			nao_wanxin_info:'一名角色的回合结束时，你可以令一名本回合内受到过伤害的角色摸两张牌，然后你与其将武将牌重置。',
			nao_shouqing:'守情',
			nao_shouqing2:'守情',
			nao_shouqing3:'守情',
			nao_shouqing_info:'其他角色的出牌阶段内可以对你使用【桃】。若如此做，其摸一张牌且本局游戏内的手牌上限+1。',
			key_yuuki:'冰室忧希',
			yuuki_yicha:'异插',
			yuuki_yicha_info:'出牌阶段开始时，你可依次进行两次判定并将判定牌依次置入两行三列方阵的两个随机位置中。然后你依次进行四次判定，每次可将当前判定牌置入空方格，且须与相邻方格的牌颜色均不同。若如此做，你令一名角色获得方阵内的所有牌。',
			key_kyouko:'伊座并杏子',
			kyouko_rongzhu:'容助',
			kyouko_rongzhu_info:'其他角色不因此技能而得到你的牌后，你可摸一张牌，然后交给其一张牌。若其是当前回合角色，则其本回合使用【杀】的次数上限+1；若你是当前回合角色，则你本回合的手牌上限+1。',
			kyouko_gongmian:'共勉',
			kyouko_gongmian_use:'共勉',
			kyouko_gongmian_exchange:'共勉',
			kyouko_gongmian_info:'①出牌阶段，你可以选择一名未以此法选择过的角色，若其手牌：大于你，你获得其一张牌，然后交给其一张牌；小于你，其交给你一张牌，然后你交给其一张牌；等于你，你与其各摸一张牌。②出牌阶段结束时，你可以获得一名其他角色区域内的至多X张牌，然后交给其等量的牌。③弃牌阶段开始时，若X不小于你的体力值，你可以获得一名手牌数少于你的角色的所有手牌，然后将手牌数的一半（向上取整）交给该角色。（X为你本回合内发动过〖共勉①〗的次数）',
			key_tenzen:'加纳天善',
			tenzen_yixing:'弈兴',
			tenzen_yixing_info:'当有角色因【杀】或【决斗】而受到伤害后，若其在你的攻击范围内或你在伤害来源的攻击范围内，你可以摸一张牌，然后将一张牌置于武将牌上，称为“兴”。当你成为其他角色使用【杀】或普通锦囊牌的唯一目标后，你可以获得一张“兴”，并可于此牌结算完成后弃置两张牌，视为对其使用一张名称相同的牌。',
			//若对方为水织静久则无法触发〖弈兴〗
			tenzen_lingyu:'领域',
			tenzen_lingyu_info:'觉醒技，准备阶段，若你的“兴”不小于你的体力值，则你减1点体力上限并获得技能〖天全〗。若你以此法失去了体力，则你摸两张牌。',
			tenzen_tianquan:'天全',
			tenzen_tianquan_info:'每回合限一次，当你使用【杀】或【决斗】指定唯一目标后，你可以移去两张“兴”并展示牌堆顶的五张牌。这些牌中每有一张基本牌，响应此牌需要的【闪】/【杀】的数量便+1。此牌结算完成后，若此牌造成过伤害，则你获得这些牌中的非基本牌。',
			key_kotarou:'天王寺瑚太朗',
			kotarou_aurora:'丝刃',
			kotarou_aurora_info:'锁定技，当扣减体力或增加体力上限后，若你的装备区内：有武器牌，你视为使用一张【杀】；没有武器牌，你使用牌堆中的一张不为赠物的武器牌。',
			kotarou_rewrite:'改写',
			kotarou_rewrite_damage:'改写',
			kotarou_rewrite_recover:'改写',
			kotarou_rewrite_sha:'改写',
			kotarou_rewrite_block:'改写',
			kotarou_rewrite_info:'出牌阶段，你可选择：①视为使用一张本局游戏没有以此法使用过的基本牌或普通锦囊牌；②移动场上的一张牌；③增加1点体力上限并失去1点体力（体力上限至多为5）；④下一次造成的伤害+1；⑤下一次回复的体力值+1；⑥本回合内的手牌上限和使用【杀】的使用次数+1。若你于本回合内发动过〖改写〗的次数超过两次，则你令此技能失效，且于回合结束后将体力上限降至3点，失去〖丝刃〗和〖改写〗。',
			key_kyou:'藤林杏',
			kyou_zhidian:'掷典',
			kyou_zhidian_info:'你可以将一张锦囊牌当做【杀】使用（无距离限制）。当你使用【杀】指定第一个目标后，你选择一个与上次不同的选项：①此【杀】不可被响应。②此【杀】无视防具。③此【杀】伤害+1。④此【杀】不计入次数限制。',
			kyou_duanfa:'断发',
			kyou_duanfa_info:'限定技，当你受到伤害时，若伤害值不小于你的体力值，则你可弃置所有手牌，防止此伤害并回复1点体力；且当你于你的下回合开始前成为【杀】或伤害性锦囊牌的目标后，你摸一张牌。',
			key_seira:'樱庭星罗',
			seira_xinghui:'星辉',
			seira_xinghui_info:'准备阶段，你可以投掷一枚骰子，观看牌堆顶的X张牌（X为投掷点数）并以任意顺序扣置于一名没有“星屑”的角色的武将牌上，称为“星屑”。有“星屑”的角色造成的伤害+1，且当其从牌堆顶摸牌或取得判定牌时，改为从“星屑”中获取。',
			seira_yuanying:'缘映',
			seira_yuanying_info:'出牌阶段限一次，你可选择两名角色。这两名角色成为“姻缘者”且获得〖姻缘〗直到你下次发动〖缘映〗。',
			seira_yinyuan:'姻缘',
			seira_yinyuan_info:'你的手牌对其他“姻缘者”可见。出牌阶段限一次，你可以获得一名其他“姻缘者”区域内的一张牌，然后其回复1点体力。',
			key_kiyu:'露娜Ｑ',
			kiyu_yuling:'玉灵',
			kiyu_yuling_info:'锁定技。你不是有距离限制的锦囊牌的合法目标；你成为【杀】的目标后，使用者需弃置X张牌（X为其至你的距离）。',
			kiyu_xianyu:'先预',
			kiyu_xianyu_info:'每轮限一次。一名角色的出牌阶段开始时，你可观看其手牌并预测其使用这些牌的顺序。此出牌阶段结束时，你摸X张牌，且其本回合的手牌上限+X（X为你的预测与其实际使用顺序的吻合数且至多为3）。',
			kiyu_rexianyu:'先预',
			kiyu_rexianyu_info:'每轮限一次。出牌阶段结束时，你可以选择一名其他角色。该角色于下个出牌阶段内使用第X张牌时，其可以将一张牌当做你本阶段内使用的第X张基本牌或普通锦囊牌使用（X至多为3）；若如此做，你摸一张牌，且其本回合的手牌上限+1。',
			key_tomoyo:'坂上智代',
			tomoyo_wuwei:'武威',
			tomoyo_wuwei_info:'①每回合每种花色限一次。你可以将一张手牌当做【杀】使用或打出。②当有角色使用【闪】后，若你在其攻击范围内，你可以对其使用一张【杀】（无距离限制）。',
			tomoyo_zhengfeng:'整风',
			tomoyo_zhengfeng_info:'使命技。①准备阶段，你可以令攻击范围内的一名角色进行判定。若如此做，你获得如下效果直到下回合开始：你视为在该角色的攻击范围内，且当该角色使用与判定牌颜色相同的牌时，你摸一张牌。②失败：结束阶段，若你于本回合内未发动过〖整风①〗，则你可以减1点体力上限。你失去〖武威〗，摸两张牌并回复1点体力，然后获得〖长誓〗。',
			tomoyo_changshi:'长誓',
			tomoyo_changshi_info:'锁定技。一名攻击范围内包含你的角色回复体力后，你获得1点护甲；一名攻击范围内包含你的角色一次性获得至少两张牌后，你摸一张牌。',
			key_minagi:'远野美凪',
			minagi_peiquan:'配券',
			minagi_peiquan_info:'锁定技。①游戏开始时，你将你所有的手牌记录为“米券”。②出牌阶段，你可以赠予一张“米券”，然后执行一项本回合内未被选择过的效果：⒈对其造成1点伤害；⒉摸两张牌；⒊弃置其的两张牌；⒋亮出牌堆顶的一张牌，然后你可以使用之。',
			minagi_huanliu:'幻流',
			minagi_huanliu_info:'准备阶段开始时，你可与一名其他角色进行协力，并获得“远野小满”的所有技能直到目标角色的结束阶段开始。若“协力”成功，则你可以将所有手牌记录为“米券”。',
			key_michiru:'远野小满',
			michiru_sheyuan:'舍愿',
			michiru_sheyuan_info:'每轮限一次。若你没有“米券”，则你可以将所有手牌当做任意基本牌或普通锦囊牌使用，然后摸等量的牌。',
			minagi_tag:'米券',

			noname:"小无",
			noname_zhuyuan:"祝愿",
			noname_zhuyuan_info:"①每回合每名角色限一次。出牌阶段，你可以将四张花色各不相同的牌交给一名其他角色。你与其获得技能〖铁骑〗和〖激昂〗至各自的回合结束。②锁定技，若你于当前回合内：未发动过〖祝愿〗，则你使用牌无次数限制；发动过〖祝愿〗，则你使用牌无距离限制。",
			noname_duocai:"多彩",
			noname_duocai_info:"每回合限一次。其他角色区域内的牌因弃置而进入弃牌堆后，你可以获得之。若你以此法得到的牌数：大于2，你弃置一名角色区域内的一张牌；等于2，你摸一张牌；小于2，你回复1点体力。",
			ns_huangchengyan:'黄承彦',
			nslongyue:'龙岳',
			nslongyue_info:'当一名角色使用锦囊牌时，若此牌是其本回合内使用的第一张牌，则你可令其摸一张牌。',
			nszhenyin:'阵引',
			nszhenyin_info:'每回合限一次。一名角色的判定牌生效前，你可令当前回合角色打出一张手牌代替之。',
			ns_sunchensunjun:'孙綝孙峻',
			nsxianhai:'险害',
			nsxianhai_info:'每轮限一次，当一名其他角色于回合内造成伤害后，若其此回合内造成过的伤害总和大于你上一回合内造成的伤害总和，则你可以减1点体力上限，令其废除一种装备栏并弃置手牌中所有的【闪】。若〖兴黜〗已发动，此回合结束后视为该限定技未发动过。',
			nsxingchu:'兴黜',
			nsxingchu_info:'限定技，当你杀死一名角色/你死亡时，你可以令一名角色获得其/你的所有牌并增加1点体力上限。',
			ns_yuanxi:'袁熙',
			nsshengyan:'盛筵',
			nsshengyan3:'盛筵',
			nsshengyan_info:'锁定技，你的判定牌生效后，若结果花色与你本回合内其他判定结果的花色均不同，则你令当前回合角色本回合的手牌上限+2。',
			nsdaizhan:'怠战',
			nsdaizhany:'怠战',
			nsdaizhan_info:'准备阶段，你可以将一张非锦囊牌当做【兵粮寸断】或【乐不思蜀】对自己使用。若如此做，回合结束时，你将手牌摸至手牌上限。',
			ns_caoshuang:'曹爽',
			nsjiquan:'集权',
			nsjiquan_mark:'集权',
			nsjiquan_info:'与你距离1以内的其他角色造成或受到伤害后，你可以将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。',
			nsfuwei:'附位',
			nsfuwei_info:'觉醒技，结束阶段开始时，若“威”数大于4，则你加2点体力上限，获得〖喋谋〗和〖制皇〗，并将〖集权〗改为锁定技。',
			nsdiemou:'喋谋',
			nsdiemou_info:'锁定技，出牌阶段开始时，若“威”大于全场角色数，你移去所有“威”，减1点体力上限并摸X张牌。若X大于4，你翻面。（X为移去的“威”数）',
			nszhihuang:'制皇',
			nszhihuang_damage:'制皇',
			nszhihuang_info:'每回合限一次，当主公使用牌时，你可以移去一张“威”，然后获得此牌。锁定技，若你的手牌数大于主公，则你使用牌造成的伤害+1。',
			ns_chentai:'陈泰',
			nsweiyuan:'围援',
			nsweiyuan_use:'围援',
			nsweiyuan_use_backup:'围援',
			nsweiyuan_info:'出牌阶段限一次，当你使用牌指定其他角色A为唯一目标后，你可以令一名除该角色外的其他角色B选择一项：①交给A一张牌：然后你对B造成1点伤害；②你摸一张牌，且可以将一张手牌当做本回合使用过的一张基本牌/普通锦囊牌使用（无次数距离限制）。',
			nsjuxian:'据险',
			nsjuxian2:'据险',
			nsjuxian_info:'当你受到伤害时，你可以摸两张并跳过下一个摸牌阶段，且在此之前不能再次发动〖据险〗。然后若你的手牌数不小于体力上限，则伤害来源弃置一张牌。',
			ns_huangwudie:'黄舞蝶',
			nsdiewu:'蝶舞',
			nsdiewu_info:'当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】或【闪】。当你以此法使用【杀】造成伤害后，则你摸一张牌。',
			nslingying:'灵影',
			nslingying_info:'锁定技，你使用【杀】无距离限制，且你使用【杀】的次数上限+1。',
			nspojian:'破茧',
			nspojian_info:'觉醒技，准备阶段，若你的"蝶舞"标记的数量不小于你的体力值，则你减1点体力上限并摸两张牌，删除〖蝶舞〗中使用【闪】的部分并获得技能〖烈弓〗。',
			ns_sunyi:'孙翊',
			nsguolie:'果烈',
			nsguolie2:'果烈',
			nsguolie_info:'摸牌阶段开始前，你可跳过此阶段。若如此做，你的红色牌均视为【杀】，黑色牌均视为【过河拆桥】且均无视距离与次数直到回合结束，且结束阶段，你获得本回合从你以外的区域内进入弃牌堆的所有牌。',
			ns_zhangning:'张宁',
			nsfuzhou:'符咒',
			nsfuzhou_card:'符咒',
			nsfuzhou_card_info:'此牌不可被【无懈可击】响应。若判定结果为：黑色，你受到使用者造成的1点雷属性伤害且弃置一张牌；红色，使用者摸两张牌，且你本回合的手牌上限-1。',
			nsfuzhou_num:'符咒',
			nsfuzhou_info:'出牌阶段限一次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限减1。',
			nsguidao:'鬼道',
			nsguidao_info:'一名角色的判定牌生效前，你可以打出一张黑色牌替换之。',
			nstaiping:'太平',
			nstaiping_info:'觉醒技。准备阶段，若你：已因〖符咒〗造成了两次或更多的伤害，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·邪〗；若你已因〖符咒〗摸了两次或更多的牌，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·正〗。',
			nsfuzhou_damage:'符咒·邪',
			nsfuzhou_damage_info:'出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限-1。',
			nsfuzhou_draw:'符咒·正',
			nsfuzhou_draw_info:'出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，该角色回复1点体力并摸一张牌，且本回合的手牌上限+1。',
			ns_yanghu:'羊祜',
			nsbizhao:'避召',
			nsbizhao2:'避召',
			nsbizhao_info:'隐匿技，锁定技，当你于回合外明置此武将牌后，其他角色计算与你的距离+1直至你的回合开始。',
			nsqingde:'清德',
			nsqingde_info:'每回合限一次，当你使用【杀】或普通锦囊牌对其他角色造成伤害后，你可使用该牌与受到伤害的角色拼点。你可令输的角色摸两张牌；当你受到其他角色使用【杀】或普通锦囊牌造成的伤害后，可使用该牌与伤害来源拼点。你可令赢的角色回复1点体力。',
			nsyidi:'遗敌',
			nsyidi_info:'出牌阶段限一次，你可展示一张手牌，然后将其交给一名其他角色。若为基本牌，该角色可使用此牌；若不为基本牌，你摸一张牌。',

			diy_wenyang:'文鸯',
			ns_zhangwei:'张葳',
			nshuaishuang:'怀霜',
			nshuaishuang_info:'锁定技，结束阶段，你从牌堆/弃牌堆获得一张【桃】，然后失去1点体力。',
			nsfengli:'奉礼',
			nsfengli2:'奉礼',
			nsfengli_draw:'奉礼',
			nsfengli_clear:'奉礼',
			nsfengli_use:'奉礼',
			visible_nsfengli:'奉礼',
			nsfengli_info:'回合结束时，你可以选择一名其他角色并展示所有手牌直到你的下回合开始。当该角色于回合外需要使用或打出牌时，其可暗置你的一张明置手牌，然后视为使用或打出之。当你的明置手牌减少时，你可令一名手牌数小于你的角色摸一张牌。',
			nsqiyue:'骑钺',
			nsqiyue_info:'锁定技，当有角色的武将牌状态改变后，你摸一张牌。',
			nsxuezhu:'血逐',
			nsxuezhu_info:'当你受到伤害或造成伤害后，你可以令受到伤害的角色摸两张牌并翻面。',
			ns_chuanshu:'传术',
			ns_chuanshu_info:'<span class=yellowtext>限定技</span> 当一名其他角色进入濒死状态时，你可以令其选择获得技能〖雷击〗或〖鬼道〗，其回复体力至1并摸两张牌。当该被【传术】的角色造成或受到一次伤害后，你摸一张牌。其阵亡后，你重置技能〖传术〗。',
			ns_xiandao1:'仙道',
			ns_xiandao1_info:'<font color=#f00>锁定技</font> 游戏开始和回合结束阶段，你随机获得技能〖雷击〗或〖鬼道〗，直到下个出牌阶段开始。',
			ns_xiandao2:'仙道',
			ns_xiandao2_info:'<font color=#f00>锁定技</font> 你防止受到任何属性伤害。',
			ns_xiandao:'仙道',
			ns_xiandao_info:'<font color=#f00>锁定技</font> 游戏开始、你进入游戏时和回合结束阶段，你随机获得技能〖雷击〗或〖鬼道〗，直到下个出牌阶段阶段开始。你防止受到任何属性伤害。',
			ns_chuanshu2:'术',
			ns_chuanshu2_info:'<font color=#f00>锁定技</font> 当你造成或受到一次伤害后，南华老仙摸一张牌。',
			ns_chuanshu3:'术',
			ns_chuanshu3_info:'<font color=#f00>锁定技</font> 当你【传术】的角色阵亡后，你重置技能〖传术〗。',
			ns_xiuzheng:'修真',
			ns_xiuzheng_info:'出牌阶段限一次，你可选择一名其他角色，然后展示牌堆顶的两张牌，若同为红色，则其受到1点火焰伤害；若同为黑色，其受到1点雷电伤害；若颜色不相同，你弃置其一张牌。然后你获得这两张展示的牌后再弃置两张牌。',
			nsanruo:'暗弱',
			nsanruo_info:'锁定技，你手牌中的【杀】和普通锦囊牌(借刀杀人等带有指向目标的锦囊除外)均对你不可见。但你可以正常使用之。',
			nsxunshan:'循善',
			nsxunshan_info:'锁定技，你使用【暗弱】牌可以为其指定任意名合法目标（托管无效）。',
			nskaicheng:'开城',
			nskaicheng_info:'主公技，你的回合内，你可以将一张【暗弱】牌交给一名群势力其他角色观看，其可以选择是否告诉你此牌的名字。然后你选择一项：使用这张牌并摸一张牌；或结束此回合。',
			nsjuanli:'狷戾',
			nsjuanli_info:'出牌阶段限一次，你可以和一名有手牌的其他角色进行赌牌，若你赢，目标角色失去1点体力且该角色与你距离-1直到与你下次赌牌，若你没赢，目标角色回复1点体力，且该角色与你距离+1直到与你的下次赌牌。（赌牌:赌牌的两名角色分别亮开一张手牌，若花色相同则赌牌平局，若花色不同，则依次展示牌堆顶的牌直到翻开的牌与其中一人亮出牌的花色相同，则该角色获得赌牌的胜利）',
			nsyuanchou:'远筹',
			nsyuanchou_info:'锁定技，当你成为锦囊牌的目标时，若来源角色与你的距离大于1，则取消之。',
			nsguhuo:'蛊惑',
			nsguhuo_info:'锁定技，你在一个回合中使用前两张牌时，你对一名随机角色从牌堆(牌堆无则从弃牌堆)随机使用一张同类别卡牌。',
			nsqinxue:'勤学',
			nsqinxue_info:'每个效果每回合只能使用一次。①当你使用一张基本牌时，你从牌堆随机获得一张锦囊牌；②当你使用一张锦囊牌时，你从牌堆随机获得一张装备牌；③当你使用一张装备牌时，你从牌堆随机获得一张基本牌。',
			nsbaiyi:'白衣',
			nsbaiyi_info:'锁定技，若你本回合发动过勤学，你跳过弃牌阶段，改为弃置X张牌（X为本回合发动勤学次数）；若你弃置了3张类别不同的牌，你获得一个额外回合（不可连续获得回合），否则你观看牌堆顶的X张牌并获得其中一张。',
			nsbaiming:'百鸣',
			nsbaiming_info:'当你使用【杀】时，你可以获得一项未获得过且与杀或伤害相关的技能，此【杀】结算完毕后，你失去以此法获得的技能。',
			nsfuge:'覆戈',
			nsfuge_info:'你的回合结束后，你可以执行一个额外的回合，此回合的摸牌阶段，你于摸牌阶段额外摸X张牌（X为你已损失的体力值）；若如此做，直到洗牌前，你不能再发动此技能。',
			nstanbing:'谈兵',
			nstanbing_info:'摸牌阶段开始时，你可弃置一张手牌，然后摸X张牌(X为你弃置牌的名称字数)，若如此做，本回合你不可使用或打出【杀】。',
			nsxinzhan:'心战',
			nsxinzhan_info:'出牌阶段限一次，你可将任意张手牌交给一名其他角色，若如此做，该角色失去X点体力(X为你交给其的牌张数的一半，向下取整)，若你给的牌达到六张，则改为该角色失去1点体力上限。',
			nsfuhuo:'符火',
			nsfuhuo2:'符火',
			nsfuhuo_info:'出牌阶段限一次，你可将一张手牌置于一名武将牌上没有“符”的角色的武将牌上，称为“符”，若如此做，其回合外使用或打出【闪】时，你可令其判定，若结果为：红桃，你对其造成2点火焰伤害；方块，你弃置其一张手牌，然后对其造成1点火焰伤害。你的下个回合开始时，你获得其武将牌上的“符”。',
			nswangfeng:'望风',
			nswangfeng_info:'在判定牌生效前，你可以打出一张红色牌替换之。',
			nshunji:'混击',
			nshunji_info:'出牌阶段限一次，你可以摸一张牌，视为使用一张【万箭齐发】。此【万箭齐发】造成伤害时，受伤害角色选择一项：①弃置你一张牌；②摸一张牌。',
			nscuanquan:'篡权',
			nscuanquan_info:'锁定技，如果你的身份为忠臣，则在受伤三次后与主公，互换身份和体力上限。',
			nsjianning:'奸佞',
			nsjianning_info:'出牌阶段限一次，如果你的身份为内奸，你可以与一名手牌数比你少的角色交换手牌，并对其造成1点伤害。',
			nschangshi:'常仕',
			nschangshi_info:'出牌阶段限一次，如果你的身份为反贼，你可以指定两名其他角色互换体力；如果两名角色体力之差等于1，你失去1点体力。',
			nsbaquan:'霸权',
			nsbaquan_info:'回合结束时，你可以弃置所有手牌，并获得相应点数的护甲，你的新一回合开始时清除所有护甲。',
			nsbugua:'卜卦',
			nsbugua_use_info:'弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数随机获得牌堆中相应的一张牌。',
			nsbugua_info:'出牌阶段限一次，你可以弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数按以下规则随机获得牌堆中相应的一张牌：乾（红桃偶数）：无中生有；坤（黑桃奇数）：决斗；震（黑桃偶数）：南蛮入侵；巽（红桃奇数）：万箭齐发；坎（梅花偶数）：过河拆桥、兑（梅花奇数）：借刀杀人、艮（方片偶数）：顺手牵羊、离（方片奇数）：火攻。若牌堆中无此牌则摸一张牌，然后你观看未展示的另外五张牌并按任意顺序将其置于牌堆顶。',
			nstuiyan:'推演',
			nstuiyan_info:'出牌阶段，若你使用的牌点数比上一张使用的牌点数大，你可以摸一张牌，反之你本回合不能再以此法摸牌；当你使用的牌点数首次达到8的倍数时，你可以在结算后立即发动一次【卜卦】。',
			nstianji:'天机',
			nstianji_info:'限定技，当一名其他角色进入濒死状态，你可自减1点体力上限，令其回复体力至1并增加1点体力上限。',
			nszhaoxin:'昭心',
			nszhaoxin_info:'锁定技，你始终展示手牌。',
			nsxiuxin:'修穆',
			nsxiuxin_info:'锁定技，若你没有某种花色的手牌，你不能成为这种花色的牌的目标。',
			nsshijun:'弑君',
			nsshijun_info:'锁定技，你造成伤害时，你令此伤害+1，并在结算后失去1点体力。',
			nshunyou:'魂佑',
			nshunyou_info:'出阶段限一次，你可以弃置一张基本牌，获得弃牌堆底的一张装备牌和一张锦囊牌，然后你可以将那张装备牌装备给一名角色（允许替换）。如果弃牌堆没有装备以及锦囊牌，则改为摸X张牌，X为损失的体力加一（最多3张）。',
			nswulie:'武烈',
			nswulie_info:'限定技，准备阶段，你可以失去1点体力上限，从弃牌堆选择最多三张牌以任意顺序放置于牌堆顶。若如此做，此回合的结束阶段，你可以重复此操作。',
			nscangxi:'藏玺',
			nscangxi2:'藏玺',
			nscangxi_info:'主公技，其他吴势力角色的弃牌阶段结束时，若其弃置了至少两张牌，则可以选择判定，若是黑色，则其选择一项，1，令主公摸一张并且展示；2，主公手牌上限永久加一；3，额外弃置一张牌，令主公获得本回合进入弃牌堆的一张牌。',
			nsdongcha:'洞察',
			nsdongcha_info:'锁定技，单体锦囊牌无法对你造成伤害。其它角色于其回合内第二次使用锦囊牌指定你为目标时，取消之。',
			nscaijian:'才鉴',
			nscaijian_info:'出牌阶段限一次，若你的手牌数不大于你的体力上限，则你可以展示你的手牌，观看牌堆顶相同数量的牌并以任意方式交换之。',
			nsgongjian:'恭俭',
			nsgongjian_info:'锁定技，弃牌阶段，你须将弃牌交给一名体力值大于你的其它角色。',
			nsjianxiong:'奸雄',
			nsjianxiong_info:'当你成为一名角色牌的目标后你可以对该角色使用一张牌，若此牌对其造成伤害，则该角色的牌失效。若失效的为黑色牌，则你摸一张牌。',
			nsxionglue:'雄略',
			nsxionglue_info:'出牌阶段限一次，你可以弃置一张黑色手牌，然后发现一张锦囊牌。',
			nsyaowang:'妖妄',
			nsyaowang_info:'回合开始阶段你可以选择一名角色然后获得其其中一项技能直到回合结束，然后该角色随机获得一项未上场武将的其中一项技能直到其回合结束。',
			nshuanhuo:'幻惑',
			nshuanhuo_info:'每当你失去1点体力或受到一次大于2的伤害时，你可以交换除你之外的两名角色的武将牌（体力及体力上限不变）。',
			nsjianshu:'剑术',
			nsjianshu_info:'锁定技：每当你的装备区有武器时，你使用【杀】指定一个目标后，该角色需要依次使用两张【闪】才能抵消此【杀】。',
			nscangjian:'藏剑',
			nscangjian_info:'每当你对一名角色造成伤害，你可以获得其装备区一张牌。',
			nsyunxing:'陨星',
			nsyunxing_info:'锁定技，当场上一名角色死亡，若为蜀，你失去1点体力；若为吴，你回复1点体力；若为魏，你摸一张牌并弃置一名角色的手牌；若为群，你强制结束当前回合；若为你，你可以使一名角色翻面。',
			nsguanxing:'观星',
			nsguanxing_info:'锁定技，准备阶段，你观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)。',
			nscaiyi:'猜疑',
			nscaiyi_info:'其他角色摸牌后，你可以观看其摸到的牌，若其中有【杀】，则视为你对其使用一张【杀】，若其中没有【杀】，则视为其对你使用一张【杀】（计入出杀次数）。',
			nsgefa:'割发',
			nsgefa_info:'当你的体力值等于0或更低时，你可以将任意一张♣牌当【桃】使用。',
			nshaoling:'号令',
			nshaoling_info:'限定技，出牌阶段，你可以指定一名其他角色，令另外所有其他角色角色选择一项：1、对该角色使用一张【杀】；2、交给你一张牌，然后视为你对其使用一张【杀】。',
			nspinmin:'拼命',
			nspinmin_info:'锁定技，当你于回合内死亡时，你不死亡并增加1点体力上限（每回合最多增加1点且不能超过4）；当你于回合外死亡时，你不死亡并减少1点体力上限（体力上限为0会导致你死亡）。',
			nsshishou:'失手',
			nsshishou_info:'锁定技，当你于回合内失去手牌时，你失去1点体力并摸一张牌；你回合内使用的牌数不能超过4。',
			nsduijue:'对决',
			nsduijue_info:'出牌阶段开始时，你可以弃置一张手牌，若如此做，此阶段你可以将一张与此牌颜色不同的手牌当作【决斗】使用（限2次）。',
			nsshuangxiong:'双雄',
			nsshuangxiong_info:'当你使用【决斗】或被使用【决斗】时，你可以将武将牌翻面。',
			nsshuangxiong_append:'背面武将：文丑，2体力，你可以将一张牌当【杀】打出。',
			nsguanyong:'冠勇',
			nsguanyong_info:'你可以将一张手牌当【杀】打出。',
			nsjihui:'急恚',
			nsjihui_info:'锁定技，每当一名角色一次弃置了三张或更多的牌，你获得一个额外回合；你的额外回合内，你使用牌只能指定你与上一回合角色为目标。',
			nsmouyun:'谋运',
			nsmouyun_info:'每两轮限一次，你可以弃置场上体力值最少的一名其他角色区域内的X张牌。（X为其损失的体力值）',
			nscongjun:'从军',
			nscongjun_info:'锁定技，游戏开始时，你变身为一名随机男性角色；当一名敌方角色使用无懈可击时，你有小概率亮出此武将并变回花木兰，然后对该角色造成2点伤害。',
			nshuanxian:'幻仙',
			nshuanxian_info:'锁定技，游戏开始时，你获得随从“幻身·右”，当你首次受到伤害时，你获得随从“幻身·左”（体力上限2，初始手牌2）；你与幻身在摸牌阶段均少摸一张牌；在你的回合中（如果有对应幻身），你以【幻身·左-本体-幻身·右】的顺序进行3个连续回合。',
			nstaiping_nh:'太平',
			nstaiping_nh_info:'当你受到1点伤害后（首次伤害除外），你可以选择一项: ①令一个“幻身”增加1点体力上限。②令一个“幻身”回复1点体力。',
			nsshoudao:'授道',
			nsshoudao_info:'当左右“幻身”全部死亡时，你获得技能“雷击”和“鬼道”。当你死亡时，若此时有两个“幻身”，你可以令一名其他角色获得技能“雷击”和“鬼道”。若有一个“幻身”，你可以令一名其他角色获得技能“雷击”或“鬼道”。(杀死你的角色除外)',
			nsnongquan:'弄权',
			nsnongquan_info:'出牌阶段，你可以将最后一张手牌当作【无中生有】使用。',
			nsdufu:'毒妇',
			nsdufu_info:'每当你即将造成一次伤害时，你可以为此伤害重新指定伤害来源。',
			yiesheng:'回雪',
			yiesheng_info:'出牌阶段，你可以弃置任意数量的黑色手牌，然后摸等量的牌。',
			liangji:'环计',
			liangji_info:'出牌阶段限一次，你可以选择一名未以此法放置牌的其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能〖无双〗，若其为女性角色，则获得技能〖离间〗，直到回合结束。',
			chengmou:'逞谋',
			chengmou_info:'摸牌阶段开始时，若你有“功”牌，你获得之并跳过摸牌阶段，若你所获得的“功”牌多于两张，你须失去1点体力。',
			jugong:'居功',
			jugong_info:'回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。',
			nsxinsheng:'新生',
			nsxinsheng_info:'每当你对其他角色造成伤害后，若你未受伤，则你可以增加X点体力上限并摸X张牌，X为伤害点数。',
			nsdunxing:'遁形',
			nsdunxing_info:'每当你即将受到其他角色造成的伤害时，若你已受伤，则你可以防止此伤害，改为失去X点体力上限并摸X张牌，X为伤害点数。',
			liangce:'粮策',
			liangce_info:'①出牌阶段限一次，你可以将一张基本牌当【五谷丰登】使用。②当因执行【五谷丰登】的效果而亮出的牌因效果执行完毕而置入弃牌堆后，你可以选择一名角色，令该角色获取之。',
			jianbi:'坚壁',
			jianbi_info:'当你成为锦囊牌的目标时，若此牌的目标包括其他角色，你可以令此牌对1个目标无效。',
			diyjuntun:'军屯',
			diyjuntun_info:'出牌阶段，你可以重铸装备牌。',
			choudu:'筹度',
			choudu_info:'出牌阶段限一次，你可以弃置一张牌，并指定一名角色视为其使用一张调兵遣将。',
			liduan:'立断',
			liduan_info:'当一名其他角色于其回合外得到牌后，若其此次得到的牌数为1且为装备牌（无论是否可见），你可以令该角色选择一项：1.使用此牌；2.将一张手牌交给你。',
			fuchou:'负仇',
			fuchou2:'负仇',
			fuchou_info:'当你成为【杀】的目标时，你可以将一张牌交给此【杀】的使用者，令此【杀】对你无效且你到其的距离于当前回合内视为1，若如此做，此回合的结束阶段开始时，其令你摸一张牌，然后你需对其使用【杀】，否则失去1点体力。',
			jinyan:'噤言',
			jinyan_info:'锁定技。若你的体力值不大于2，你的黑色锦囊牌视为【杀】。',
			chezhen:'车阵',
			chezhen_info:'锁定技。若你的装备区里：没有牌，你的防御距离+1；有牌，你的进攻距离+1。',
			youzhan:'诱战',
			youzhan_info:'当以你距离不大于1的角色为目标的【杀】的使用结算开始时，你可以弃置一张装备牌，令该角色视为使用【诱敌深入】。',
			kangyin:'亢音',
			kangyin2:'亢音',
			kangyin_info:'出牌阶段限一次，你可以失去1点体力并选择一名其他角色，弃置该角色的一张牌。若此牌：为基本牌，你可以令一至X名角色各摸一张牌；不为基本牌，于此回合内：你的进攻距离+X，且你使用【杀】的额外目标数上限+X。（X为你已损失的体力值）',
			zhucheng:'筑城',
			zhucheng2:'筑城',
			zhucheng_info:'①结束阶段开始时，若没有“筑”，你可以将牌堆顶的X张牌置于你的武将牌上〔称为“筑”〕（X为你已损失的体力值与1中的较大值），否则你可以获取所有“筑”。②当你成为【杀】的目标时，若有“筑”，你可以令此杀的使用者弃置X张牌（X为“筑”的数量），否则杀对你无效。',
			duoqi:'夺气',
			duoqi_info:'当一名角色于除你之外的角色的出牌阶段内因弃置而失去牌后，你可以移去一张“筑”，并结束此出牌阶段。',

			siji:'伺机',
			ciqiu:'刺酋',
			ciqiu_dying:'刺酋',
			diy_liuyan:'刘焉',
			juedao:'绝道',
			geju:'割据',
			shaoying:'烧营',
			zonghuo:'纵火',
			diychanyuan:'缠怨',
			diyguhuo:'蛊惑',
			jieyan:'劫焰',
			honglian:'红莲',
			xiongzi:'雄姿',
			luweiyan:'围堰',
			guihan:'归汉',
			diyduanliang:'断粮',
			diyduanliang1:'断粮',
			diyduanliang2:'断粮',
			diyqiangxi:'强袭',
			diykuanggu:'狂骨',
			diyzaiqi:'再起',
			batu:'霸图',
			zaiqix:'再起',
			diy_jiaoxia:'皎霞',
			yaliang:'雅量',
			yaliang_info:'每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。',
			diy_jiaoxia_info:'每当你成为红色牌的目标，你可以摸一张牌。',
			zaiqix_info:'摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X+1张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。',
			batu_info:'结束阶段，你可以将手牌数补至X，X为现存的势力数。',
			diyzaiqi_info:'锁定技，你摸牌阶段额外摸X张牌，X为你已损失的体力值。',
			diykuanggu_info:'锁定技，每当你造成1点伤害，你在其攻击范围内，你回复1点体力，否则你摸一张牌。',
			diyqiangxi_info:'出牌阶段，你可以自减1点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成1点伤害并弃置其一张牌，每回合限一次。',
			diyduanliang_info:'出牌阶段限一次，你可以将一张黑色的基本牌当兵粮寸断对一名角色使用，然后摸一张牌。你的兵粮寸断可以指定距离2以内的角色作为目标。',
			guihan_info:'限定技，当你进入濒死状态时，可以指定一名男性角色与其各回复1点体力并摸两张牌。',
			luweiyan_info:'出牌阶段限一次，你可以将一张非基本牌当作水攻使用；结算后你可以视为对其中一个目标使用一张不计入出杀次数的【杀】。',
			xiongzi_info:'锁定技，你于摸牌阶段额外摸X+1张牌，X为你装备区牌数的一半，向下取整。',
			honglian_info:'每当你受到来自其他角色的伤害，可以弃置伤害来源的所有红色牌。',
			jieyan_info:'出牌阶段限一次，你可以弃置一张红色手牌令场上所有角色受到1点火焰伤害。',
			diyguhuo_info:'锁定技，准备阶段，你摸两张牌，然后弃置区域内的两张牌。',
			diychanyuan_info:'锁定技，杀死你的角色失去1点体力上限。',
			zonghuo_info:'你可弃置一张牌将你即将造成的伤害变为火焰伤害。',
			shaoying_info:'每当你造成一次火焰伤害，可指定距离受伤害角色1以内的另一名角色，并展示牌堆顶的一张牌，若此牌为红色，该角色受到1点火焰伤害。',
			juedao_info:'出牌阶段，你可以弃置一张手牌，横置你的武将牌；锁定技，若你的武将牌横置，则你计算至其他角色的距离和其他角色计算至你的距离均+1。',
			geju_info:'准备阶段开始时，你可以摸X张牌（X为攻击范围内不含有你的势力数）。',
			siji_info:'弃牌阶段结束后，你可以摸2X张牌（X为你于此阶段内弃置的【杀】的数量）。',
			ciqiu_info:'锁定技，每当你使用【杀】对目标角色造成伤害时，若该角色未受伤，你令此伤害+1；若其因此进入濒死状态，你令其死亡，然后你失去“刺酋”。',
			nsshuaiyan_info:'每当其他角色于你的回合外回复体力后，你可以令该角色选择一项：1.令你摸一张牌；2.令你弃置其一张牌。',
			moshou_info:'锁定技，你不能成为乐不思蜀和兵粮寸断的目标。',
			xicai_info:'你可以立即获得对你造成伤害的牌。',
			diyjianxiong_info:'锁定技，在身份局中，在你回合内死亡的角色均视为反贼，国战中，在你回合内死亡的角色若与你势力相同则随机改为另一个势力。',

			ns_zanghong:'臧洪',
			nsshimeng:'誓盟',
			nsshimeng_info:'出牌阶段限一次，你可以选择任意名角色。这些角色依次选择一项：⒈摸一张牌。⒉使用一张【杀】。然后若选择前者角色数大于选择后者的角色数，则你获得1点护甲并失去1点体力。',
			ns_ruanji:'阮籍',
			nsshizui:'酾醉',
			nsshizui_info:'每回合限一次。当你成为基本牌或普通锦囊牌的目标后，你可以弃置一张牌，然后视为使用一张【酒】。若你弃置的牌与其使用的牌花色相同，则此牌对你无效；若你弃置的牌为♣，则你获得其使用的牌。',
			nsxiaoye:'啸野',
			nsxiaoye_info:'一名角色的结束阶段开始时，若你于当前回合内使用过【酒】，则你可以视为使用一张其于本回合内使用过的【杀】或普通锦囊牌。',
			ns_limi:'李密',
			nstuilun:'退论',
			nstuilun_info:'结束阶段，你可以失去任意点体力（至多失去至1点）并弃置任意张手牌（至多弃置至一张）。若如此做，你获得如下效果直到你下回合开始：其他角色的回合开始时，若你的体力值小于该角色，则你可以令一名角色回复或失去1点体力；若你的手牌数小于该角色，则你可以令一名角色摸一张牌或弃置一张牌。',
			ns_zhonglimu:'钟离牧',
			nskuanhuai:'宽怀',
			nskuanhuai_info:'出牌阶段开始时，你可以从弃牌堆中获得一张非基本牌。若如此做：你本阶段内不能使用基本牌，且本回合的弃牌阶段结束时，你可以依次使用本阶段内弃置的基本牌。',
			nsdingbian:'定边',
			nsdingbian_info:'锁定技。当你于回合内使用锦囊牌或装备牌后，你令自己本回合的手牌上限-1且选择一项：⒈从牌堆获得一张基本牌。⒉令一种基本牌于本回合内不计入手牌上限。',
			prp_zhugeliang_ab:'诸葛亮',
			prp_zhugeliang:'派对浪客',
			nsxingyun:'星陨',
			nsxingyun_info:'每回合限一次。你可以将一张手牌当做任意一张符合“四象天阵”的牌使用。然后若这两张牌的类型不同，则你删除此“四象天阵”并摸两张牌。当你删除“四象天阵”中的最后一个项目后，你获得技能〖八阵〗。',
			nsxingyun_faq:'四象天阵',
			nsxingyun_faq_info:'青龙：无标签普通锦囊牌<br>朱雀：延时锦囊牌<br>白虎：伤害类卡牌<br>玄武：【闪】/回复类卡牌',
			nshanlang:'酣浪',
			nshanlang_info:'准备阶段，你可以和至多三名角色拼点。然后若这些角色中有拼点牌唯一最大的角色，则你可以令该角色从牌堆中获得一张不符合“四象天阵”的牌。',

			junktaoluan:'滔乱',
			junktaoluan_backup:'滔乱',
			junktaoluan_info:'你可将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌，且每回合每种花色限一次），然后你令一名其他角色选择一项：1.交给你一张与“滔乱”声明的牌类别不同的牌；2.本回合“滔乱”失效且回合结束时你失去1点体力。',
			ns_caimao:'蔡瑁',
			nsdingzhou:'定州',
			nsdingzhou_info:'出牌阶段限一次，你可以选择一名区域内有牌的其他角色。你随机获得其区域内的一张牌，然后摸一张牌。若你以此法获得了两张颜色不同的牌，则你失去1点体力。',
			junkyuheng:'驭衡',
			junkyuheng_info:'锁定技。①回合开始时，你须弃置任意张花色不同的牌，从<span style="font-family: yuanli">东吴命运线·改</span>中随机获得等量的技能。②回合结束时，你失去所有因〖驭衡①〗获得的技能，然后摸等量的牌。',
			junkdili:'帝力',
			junkdili_info:'觉醒技。当你发动〖驭衡①〗后，若你拥有的技能数大于你的体力上限，则你减1点体力上限，选择失去任意个其他技能，然后获得以下技能中的前等量个：〖圣质〗/〖权道〗/〖持纲〗。',
			junkshengzhi:'圣质',
			junkshengzhi_info:'锁定技。当你发动非锁定技后，你令你本回合使用的下一张牌无距离和次数限制。',
			junkquandao:'权道',
			junkquandao_info:'锁定技。当你使用【杀】或普通锦囊牌时，若你手牌中的【杀】或普通锦囊牌的数量之差X不为0，则你弃置X张数量较多的一种牌，然后你摸一张牌。',
			junkchigang:'持纲',
			junkchigang_info:'转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阴，摸牌阶段；阳，出牌阶段。',
			junkrende:'仁德',
			junkrende_info:'出牌阶段限一次，你可以将任意张手牌交给其他角色。若你给出的牌多于一张，则你回复1点体力。',
			junkjizhi:'集智',
			junkjizhi_info:'当你使用非转化的普通锦囊牌时，你可以展示牌堆顶的一张牌A。若A不为基本牌，则你获得A。否则你选择一项：⒈将A置入弃牌堆。⒉将一张手牌置于牌堆顶，然后获得A。',
			junkqicai:'奇才',
			junkqicai_info:'锁定技。①你使用锦囊牌无距离限制。②你装备区内的非坐骑牌不能被其他角色弃置。',
			junkwangxi:'忘隙',
			junkwangxi_info:'当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可以摸两张牌，然后交给其其中一张牌。',
			junkwangxi_tag:'invisible',
			junklangmie:'狼灭',
			junklangmie_info:'其他角色的结束阶段开始时，你可以选择一项：⒈若其本回合内使用过某种类型的牌超过一张，则你弃置一张牌并摸两张牌。⒉若其本回合累计造成过的伤害大于1，则你弃置一张牌，然后对其造成1点伤害。',
			junkshicai:"恃才",
			junkshicai_info:"当你使用牌结束完毕后，若此牌与你本回合使用的牌类型均不同，则你可以将此牌置于牌堆顶，然后摸一张牌。",
			junk_zhangrang:'新杀张让',
			junk_zhangrang_prefix:'新杀',
			old_jiakui:'手杀贾逵',
			old_jiakui_prefix:'手杀',
			ol_guohuai:'OL郭淮',
			ol_guohuai_prefix:'OL',
			old_bulianshi:'RE步练师',
			old_bulianshi_prefix:'RE',
			ol_maliang:'OL马良',
			ol_maliang_prefix:'OL',
			junk_lidian:'OL李典',
			junk_lidian_prefix:'OL',
			junk_duanwei:'新杀段煨',
			junk_duanwei_prefix:'新杀',
			junk_xuyou:'手杀许攸',
			junk_xuyou_prefix:'手杀',
			junk_liubei:'旧界刘备',
			junk_liubei_prefix:'旧界',
			junk_huangyueying:'旧界黄月英',
			junk_huangyueying_prefix:'旧界',
			old_majun:'骰子马钧',
			old_majun_prefix:'骰子',
			ns_mengyou:'数学孟优',
			ns_mengyou_prefix:'数学',
			ns_mengyou_ab:'孟优',
			nsmanzhi:'蛮智',
			nsmanzhi_info:'准备阶段或结束阶段开始时，你可以将场上出现的数字代入等式中的A和B。若此等式成立，你摸Y张牌。（等式为Y=0.5A²+2.5B-X，其中X为游戏轮数，Y为存活人数）',
			ns_chengpu:'铁索程普',
			ns_chengpu_prefix:'铁索',
			ns_chengpu_ab:'程普',
			ns_sundeng:'画饼孙登',
			ns_sundeng_prefix:'画饼',
			ns_sundeng_ab:'孙登',
			ns_duji:'画饼杜畿',
			ns_duji_prefix:'画饼',
			ns_duji_ab:'杜畿',

			diy_tieba:'吧友设计',
			diy_xushi:'玩点论杀·虚实篇',
			diy_default:'常规',
			diy_noname:'无名专属',
			diy_key:'论外',
			diy_yijiang:'设计比赛2020',
			diy_yijiang2:'设计比赛2021',
			diy_yijiang3:'设计比赛2022',
			diy_fakenews:'杀海流言',
			diy_trashbin:'垃圾桶',
		},
		pinyins:{
			加藤うみ:['Kato','Umi'],
			仲村由理:['Nakamura','Yuri'],
			此花露西娅:['Konohana','Lucia'],
			枣恭介:['Natsume','Kyousuke'],
			神尾晴子:['Kamio','Haruko'],
			神北小毬:['Kamikita','Komari'],
			宫泽有纪宁:['Miyazawa','Yukine'],
			西森柚咲:['Nishimori','Yusa'],
			黑羽美砂:['Kurobane','Misa'],
			井之原真人:['Inohara','Masato'],
			岩泽雅美:['Iwasawa','Masami'],
			宫泽谦吾:['Miyazawa','Kengo'],
			吉野晴彦:['Yoshino','Haruhiko'],
			由依:['Yui'],
			紬文德斯:['Tsumugi','Wenders'],
			朱鹭户沙耶:['Tokido','Saya'],
			'三枝叶留佳&二木佳奈多':['Saigusa','Haruka','Futaki','Kanata'],
			三枝二木:['Saigusa','Haruka','Futaki','Kanata'],
			稻荷:['Inari'],
			椎名:['Shiina'],
			'春原阳平&春原芽衣':['Sunohara','Youhei','Sunohara','Mei'],
			阳平芽衣:['Sunohara','Youhei','Sunohara','Mei'],
			枣铃:['Natsume','Rin'],
			笹濑川佐佐美:['Sasasegawa','Sasami'],
			千里朱音:['Senri','Akane'],
			多鲁基:['Dorj'],
			来谷唯湖:['Kurugaya','Yuiko'],
			直枝理树:['Naoe','Riki'],
			高桥久子:['Takahashi','Hisako'],
			日向秀树:['Hinata','Hideki'],
			野田:['Noda'],
			冈崎朋也:['Okazaki','Tomoya'],
			古河渚:['Furukawa','Nagisa'],
			直井文人:['Naoi','Ayato'],
			空门苍:['Sorakado','Ao'],
			音无结弦:['Otonashi','Yuzuru'],
			立华奏:['Tachibana','Kanade'],
			西园美鱼:['Nishizono','Mio'],
			西园美鸟:['Nishizono','Midori'],
			岬镜子:['Misaki','Kyoko'],
			中津静流:['Nakatsu','Shizuru'],
			'关根诗织&入江美雪':['Sekine','Shiori','Irie','Miyuki'],
			关根入江:['Sekine','Shiori','Irie','Miyuki'],
			野村美希:['Nomura','Miki'],
			美坂栞:['Misaka','Shiori'],
			美坂香里:['Misaka','Kaori'],
			水濑秋子:['Minase','Akiko'],
			游佐:['Yusa'],
			松下护騨:['Matsushita','Godan'],
			乙坂有宇:['Otosaka','Yuu'],
			三谷良一:['Mitani','Ryoichi'],
			神户小鸟:['Kanbe','Kotori'],
			高城丈士朗:['Takajyo','Jyojirou'],
			鸣濑白羽:['Naruse','Shiroha'],
			水织静久:['Mizuori','Shizuku'],
			铃木央人:['Suzuki','Hiroto'],
			凤咲夜:['Ootori','Sakuya'],
			成神阳太:['Narukami','Youta'],
			七濑留美:['Nanase','Rumi'],
			凤千早:['Ootori','Chihaya'],
			国崎往人:['Kunisaki','Yukito'],
			井上晶:['Inoue','Asara'],
			一之濑琴美:['Ichinose','Kotomi'],
			藤川米娅:['Fujikawa','Mia'],
			雾岛佳乃:['Kirishima','Kano'],
			苍井绘梨花:['Aoi','Erika'],
			藏里见:['Kura','Satomi'],
			'喵呜·喵呼':['Myau','Mya-fu'],
			喵呜喵呼:['Myau','Mya-fu'],
			伊吹风子:['Ibuki','Fuuko'],
			久岛鸥:['Kushima','Kamome'],
			库特莉亚芙卡:['Noumi','Kudryavka'],
			神尾观铃:['Kamio','Misuzu'],
			友利奈绪:['Tomori','Nao'],
			天王寺瑚太朗:['Tennouji','Kotarou'],
			藤林杏:['Fujibayashi','Kyou'],
			伊座并杏子:['Izanami','Kyouko'],
			加纳天善:['Kano','Tenzen'],
			冰室忧希:['Himuro','Yuuki'],
			露娜Ｑ:['Lunar','Q'],
			远野小满:['Toono','Michiru'],
			远野美凪:['Toono','Minagi'],
			樱庭星罗:['Sakuraba','Seira'],
			坂上智代:['Sakagami','Tomoyo'],
			冈崎汐:['Okazaki','Ushio'],
			神山识:['Kamiyama','Shiki'],
			佐藤雏:['Satou','Hina'],
		},
	};
});
