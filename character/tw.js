import { game } from '../noname.js';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'tw',
		connect:true,
		characterSort:{
			tw:{
				tw_sp:['tw_zhangzhao','tw_zhanghong','tw_fuwan','tw_yujin','tw_zhaoxiang','tw_hucheer','tw_hejin','tw_mayunlu','tw_re_caohong','tw_zangba','tw_liuhong','tw_tianyu','jiachong','duosidawang','wuban','yuejiu','tw_caocao','tw_zhangmancheng','tw_caozhao','tw_wangchang','tw_puyangxing','tw_jiangji','tw_niujin','tw_xiahouen','tw_xiahoushang','tw_zhangji','tw_zhangnan','tw_fengxí','tw_furong','tw_liwei','tw_yangyi','tw_daxiaoqiao','tw_dengzhi','tw_baoxin','tw_bingyuan','tw_fanchou','tw_haomeng','tw_huchuquan','tw_jianshuo','tw_jiling','tw_liufuren','tw_liuzhang','tw_mateng','tw_niufudongxie','tw_qiaorui','tw_weixu','tw_yanxiang','tw_yufuluo','tw_zhangning','tw_dengzhi','tw_yangyi','tw_yangang','tw_gongsunfan'],
				tw_yunchouzhi:['tw_wangcan','tw_dongzhao','tw_bianfuren','tw_feiyi','tw_chenzhen','tw_xunchen'],
				tw_yunchouxin:['tw_wangling','tw_huojun','tw_wujing','tw_zhouchu'],
				tw_yunchouren:['tw_xujing','tw_qiaogong'],
				tw_yunchouyong:['tw_zongyu','tw_chendong','tw_sunyi'],
				tw_yunchouyan:['tw_jiangqing'],
				tw_zhu:['tw_beimihu','tw_ol_sunjian','ol_liuyu','tw_menghuo'],
				tw_swordsman:['xia_yuzhenzi','xia_shie','xia_shitao','xia_guanyu','xia_liubei','xia_xiahousone','xia_xiahoudun','xia_zhangwei','xia_xushu','xia_wangyue','xia_liyàn','xia_tongyuan','xia_lusu','xia_dianwei','xia_zhaoe','xia_xiahouzie'],
				tw_mobile:['nashime','tw_gexuan','tw_zhugeguo'],
				tw_mobile2:['tw_chengpu','tw_guohuai','old_quancong','tw_caoxiu','tw_guanqiujian','tw_re_fazheng','tw_madai','tw_zhangfei','tw_guyong','tw_handang','tw_xuezong','tw_yl_luzhi'],
				tw_yijiang:['tw_caoang','tw_caohong','tw_zumao','tw_dingfeng','tw_maliang','tw_xiahouba'],
				tw_english:['kaisa'],
			},
		},
		character:{
			xia_yuzhenzi:['male','qun',3,['twhuajing','twtianshou']],
			xia_shie:['male','wei',4,['twdengjian','twxinshou']],
			xia_shitao:['male','qun',4,['twjieqiu','twenchou']],
			xia_guanyu:['male','qun',4,['twzhongyi','twchue']],
			xia_liubei:['male','shu',4,['twshenyi','twxinghan']],
			xia_xiahousone:['female','qun',3,['twchengxi']],
			xia_xiahoudun:['male','qun',4,['twdanlie']],
			xia_zhangwei:['female','qun',3,['twhuzhong','twfenwang']],
			tw_zhanghong:['male','wu',3,['twquanqian','twrouke']],
			tw_zhangzhao:['male','wu',3,['twlijian','twchungang']],
			tw_ol_sunjian:['male','wu','4/5',['gzyinghun','wulie','twpolu'],['zhu']],
			tw_menghuo:['male','qun',4,['huoshou','rezaiqi','twqiushou'],['zhu']],
			ol_liuyu:['male','qun',2,['zongzuo','zhige','twchongwang'],['zhu']],
			tw_gongsunfan:['male','qun',4,['twhuiyuan','twshoushou']],
			tw_yangang:['male','qun',4,['twzhiqu','twxianfeng']],
			xia_xiahouzie:['female','qun','3/4',['twxuechang','twduoren']],
			xia_zhaoe:['female','qun',3,['twyanshi','twrenchou']],
			xia_lusu:['male','qun',4,['twkaizeng','twyangming']],
			xia_dianwei:['male','qun',4,['twliexi','twshezhong']],
			tw_bingyuan:['male','qun',3,['twbingde','twqingtao']],
			tw_niufudongxie:['double','qun',4,['twjuntun','twxiongxi','twxiafeng']],
			tw_jianshuo:['male','qun',6,['twkunsi']],
			tw_jiangji:['male','wei',3,['twjichou','twjilun']],
			tw_mateng:['male','qun',4,['mashu','twxiongzheng','twluannian'],['zhu']],
			tw_baoxin:['male','qun',4,['twmutao','twyimou']],
			tw_liufuren:['female','qun',3,['twzhuidu','twshigong']],
			tw_yufuluo:['male','qun',6,['twjiekuang','twneirao']],
			tw_fengxí:['male','shu',4,['twqingkou']],
			tw_zhangji:['male','wei',3,['twdingzhen','twyouye']],
			tw_zhangnan:['male','shu',4,['twfenwu']],
			tw_huchuquan:['male','qun',4,['twfupan']],
			tw_liwei:['male','shu',4,['twjiaohua']],
			tw_yanxiang:['male','qun',3,['twkujian','twruilian']],
			tw_xiahouen:['male','wei',5,['twfujian','twjianwei']],
			tw_xiahoushang:['male','wei',4,['twtanfeng']],
			tw_qiaorui:['male','qun',5,['twxiawei','twqiongji']],
			tw_haomeng:['male','qun',4,['twgongge']],
			tw_weixu:['male','qun',4,['twsuizheng','twtuidao']],
			xia_xushu:['male','qun',4,['twjiange','twxiawang']],
			xia_wangyue:['male','qun',4,['twyulong','twjianming']],
			xia_liyàn:['male','qun',4,['twzhenhu','twlvren']],
			xia_tongyuan:['male','qun',4,['twchaofeng','twchuanshu']],
			tw_zhangning:['female','qun',3,['twxingzhui','twjuchen']],
			tw_yangyi:['male','shu',3,['duoduan','twgongsun']],
			tw_dengzhi:['male','shu',3,['twjimeng','shuaiyan']],
			tw_wangling:['male','wei',4,['twmibei','twxingqi'],['clan:太原王氏']],
			tw_zhugeguo:['female','shu',3,['twqirang','twyuhua']],
			tw_fanchou:['male','qun',4,['twxingluan']],
			tw_xujing:['male','shu',3,['twboming','twejian']],
			tw_zhangfei:['male','shu',4,['new_repaoxiao','twxuhe']],
			tw_xuezong:['male','wu',3,['funan','twjiexun']],
			tw_xunchen:['male','qun',3,['twweipo','mjchenshi','twmouzhi']],
			tw_jiangqing:['male','wu',4,['twshangyi','twxiangyu']],
			tw_guyong:['male','wu',3,['twgyshenxing','twbingyi']],
			tw_chendong:['male','wu',4,['twyilie','twfenming']],
			tw_handang:['male','wu',4,['twgongji','twjiefan']],
			tw_jiling:['male','qun',4,['twshuangren']],
			tw_re_fazheng:['male','shu',3,['twxuanhuo','twenyuan']],
			tw_madai:['male','shu',4,['mashu','twqianxi']],
			tw_niujin:['male','wei',4,['twcuorui','twliewei']],
			tw_guanqiujian:['male','wei',3,['twzhengrong','twhongju']],
			tw_daxiaoqiao:['female','wu',3,['twxingwu','twpingting'],['tempname:daxiaoqiao']],
			tw_furong:['male','shu',4,['twxuewei','twliechi']],
			tw_yl_luzhi:['male','qun',3,['twmingren','twzhenliang']],
			tw_liuzhang:['male','qun',3,['jutu','twyaohu','rehuaibi']],
			tw_zongyu:['male','shu',3,['twzhibian','twyuyan']],
			tw_zhouchu:['male','wu',4,['twguoyi','twchuhai']],
			tw_qiaogong:['male','wu',3,['twyizhu','twluanchou']],
			tw_feiyi:['male','shu',3,['twshengxi','twkuanji']],
			tw_bianfuren:['female','wei',3,['twwanwei','twyuejian']],
			tw_chenzhen:['male','shu',3,['twmuyue','twchayi']],
			tw_caoxiu:['male','wei',4,['twqianju','twqingxi']],
			tw_sunyi:['male','wu',4,['twzaoli']],
			tw_puyangxing:['male','wu',4,['twzhengjian','twzhongchi']],
			tw_tianyu:['male','wei',4,['twzhenxi','twyangshi']],
			old_quancong:['male','wu',4,['zhenshan']],
			tw_wujing:['male','wu',4,['twfenghan','twcongji']],
			tw_wangcan:['male','wei',3,['twdianyi','twyingji','twshanghe']],
			tw_wangchang:['male','wei',3,['twkaiji','twshepan'],['clan:太原王氏']],
			tw_caozhao:['male','wei',4,['twfuzuan','twchongqi']],
			tw_guohuai:["male","wei",4,["twjingce","yuzhang"]],
			tw_chengpu:['male','wu',4,['twlihuo','twchunlao']],
			tw_zhangmancheng:['male','qun',4,['twfengji','twyiju','twbudao']],
			tw_caocao:['male','qun',4,['twlingfa']],
			tw_liuhong:['male','qun',4,['twyujue','twgezhi','twfengqi'],['zhu']],
			tw_huojun:['male','shu',4,['twsidai','twjieyu']],
			tw_zangba:['male','wei',4,['twhanyu','twhengjiang']],
			tw_re_caohong:['male','wei',4,['twyuanhu','twjuezhu']],
			tw_mayunlu:['female','shu',4,['mashu','twfengpo']],
			tw_hejin:['male','qun',4,['twmouzhu','twyanhuo']],
			tw_hucheer:['male','qun',4,['twshenxing','twdaoji']],
			tw_yujin:['male','qun',4,['xinzhenjun']],
			tw_fuwan:['male','qun',4,['twmoukui']],
			tw_zhaoxiang:['female','shu',4,['refanghun','twfuhan','twqueshi']],
			yuejiu:['male','qun',4,['cuijin']],
			wuban:['male','shu',4,['jintao'],['clan:陈留吴氏']],
			duosidawang:['male','qun','4/5',['equan','manji']],
			jiachong:['male','qun',3,['beini','dingfa']],
			tw_dongzhao:['male','wei',3,['twmiaolve','twyingjia']],
			tw_gexuan:['male','qun',3,['twdanfa','twlingbao','twsidao']],
			tw_beimihu:['female','qun',3,['zongkui','guju','baijia','bingzhao'],['zhu']],
			nashime:['male','qun',3,['chijie','waishi','renshe']],
			tw_xiahouba:['male','shu',4,['twyanqin','twbaobian']],
			tw_zumao:['male','wu',4,['twtijin']],
			tw_caoang:['male','wei',4,['twxiaolian']],
			tw_dingfeng:['male','wu',4,['twqijia','twzhuchen']],
			tw_caohong:['male','wei',4,['twhuzhu','twliancai']],
			tw_maliang:['male','shu',3,['twrangyi','twbaimei']],
			kaisa:["male","western",4,["zhengfu"]],
		},
		characterIntro:{
			yuzhenzi:'评书三国中的人物，其人有徒弟兼义子童渊、徒弟并州李彦，有徒孙常山赵子龙、北地枪王张绣、张任等人。',
			shie:'三国人物，善剑术。桓、灵间，有虎贲王越以剑术称于京师，阿得其法。魏帝曹丕曾从阿学剑术。曹丕在《典论·自叙》中说：“余又学击剑，阅师多矣，四方之法各异，唯京师为善。桓、灵之间，有虎贲王越善斯术，称於京师。河南史阿言昔与越游，具得其法，余从阿学精熟。尝与平虏将军刘勋、奋威将军邓展等共饮，宿闻展善有手臂，晓五兵，又称其能空手入白刃。余与论剑良久，谓将军非法也，余顾尝好之，又得善术，因求与余对。',
			shitao:'石韬，字广元，即石广元，颍川（今河南禹州）人，仕魏，官拜典农校尉、郡守。初平年间，石韬与徐庶一同来到荆州，在荆州时与诸葛亮和庞统等人相善。与崔州平（名钧）、孟公威（名建）、徐元直（名庶）为“诸葛四友”。',
			xiahousone:'夏侯子萼，游卡桌游《三国杀阵面对决》中虚构的人物。在《阵面对决》中，设定为在貂蝉不在时血婆娑的实际首领。在海外服中，设定为夏侯惇的养女，继承了夏侯紫萼的血婆娑，之后“夏侯紫萼”这个名字就被隐匿于历史之中，而“夏侯子萼”则成为了血婆娑的首领“血蔷薇”的固定名号。',
			zhangwei:'张葳，游卡桌游《三国杀阵面对决》中虚构的人物。在《阵面对决》中，设定为被夏侯子萼救下后加入的血婆娑成员。在海外服中，设定为张奂的养女，张奂为宦官迫害时与其失散，为神秘女子所救并学得武艺，后与夏侯紫萼一起建立血婆娑。在李儒分成时为了保护百姓而牺牲。',
			nashime:'难升米（なしめ，或なんしょうまい）是倭国大夫。景初二年六月，受女王卑弥呼之命，与都市牛利出使魏国，被魏国拜为率善中郎将。',
			jiachong:'贾充（217年—282年），字公闾，平阳襄陵（今山西襄汾）人，三国曹魏至西晋时期大臣，曹魏豫州刺史贾逵之子。西晋王朝的开国元勋。出身平阳贾氏。曾参与镇压淮南二叛和弑杀魏帝曹髦，因此深得司马氏信任，其女儿贾褒（一名荃）及贾南风分别嫁予司马炎弟司马攸及次子司马衷，与司马氏结为姻亲，地位显赫。晋朝建立后，转任车骑将军、散骑常侍、尚书仆射，后升任司空、太尉等要职。更封鲁郡公。咸宁末，为使持节、假黄钺、大都督征讨吴国。吴国平定后，增邑八千户。太康三年（282年），贾充去世。西晋朝廷追赠他为太宰，礼官议谥曰荒，司马炎不采纳，改谥为武。有集五卷。',
			duosidawang:'朵思大王是《三国演义》中人物，南蛮秃龙洞的元帅，孟获弟弟孟优的朋友，据说是南蛮第一智者。',
			wuban:'吴班，字元雄，生卒年不详，兖州陈留郡（治今河南省开封市）人。三国时期蜀汉将领。为领军，随刘备参加伐吴之战，后又随蜀汉丞相诸葛亮参加北伐曹魏的战争，并于公元231年（建兴九年）的北伐中大破司马懿。官至骠骑将军，封绵竹侯。吴班以豪爽侠义著称于当时，又因族妹吴氏是蜀汉穆皇后，在蜀汉将领中有较高的地位。',
			yuejiu:'乐就（？－197），在袁术为攻徐州而大兴七军之际，以督战官之身份担任联络之役。但是，袁术军不幸战败，其也在寿春被曹操军逮捕并遭到斩首。',
			huojun:'霍峻（178年—217年），字仲邈，南郡枝江（今湖北枝江）人，东汉末年刘备麾下名将。其兄霍笃曾在故乡聚部众数百人。后霍笃逝世，刘表以霍峻继承其部曲。208年（建安十三年），刘表病逝，霍峻便率部曲归降刘备，并被任为中郎将。后随刘备入蜀，刘备从葭萌还袭刘璋，留霍峻守葭萌城。张鲁遣将杨帛劝降霍峻，霍峻严词拒绝，杨帛退去。后刘璋将扶禁、向存等率万余人由阆水上，攻围霍峻，城中兵不过数百人，霍峻坚守一年，伺机将其击破。刘备定蜀，嘉霍峻之功，于是分广汉为梓潼郡，以峻为梓潼太守、裨将军。三年后去世，还葬成都。刘备亲率群僚临会吊祭，留宿墓上，当时的人都为他感到荣幸。',
			zhangmancheng:'张曼成（？—184年6月），东汉末年黄巾之乱时南阳黄巾军首领，杀郡守褚贡，一度占据宛城数月，后为秦颉所杀。',
			caozhao:'曹肇（？-244年），字长思，沛国谯县（今安徽亳州）人。三国时期魏国大臣，大司马曹休之子。容貌俊美，有当世才度，深得魏明帝宠信，官至散骑常侍、屯骑校尉。魏明帝临死，与燕王曹宇等托付后事。不果，以长平侯归第。正始五年（244年）卒，追赠为卫将军。',
			wangchang:'王昶（2世纪－259年），字文舒，太原郡晋阳县（今山西太原）人。三国时期曹魏将领，东汉代郡太守王泽之子。出身太原王氏，少有名气，进入曹丕幕府，授太子文学。曹丕即位后，拜散骑侍郎，迁兖州刺史，撰写《治论》、《兵书》，作为朝廷提供施政参考。魏明帝曹叡即位后，升任扬烈将军，封关内侯。齐王曹芳即位，迁徐州刺史，拜征南将军。太傅司马懿掌权后，深得器重，奏请伐吴，在江陵取得重大胜利，升任征南大将军、开府仪同三司，晋爵京陵侯。正元年间（255年），参与平定“淮南三乱”有功，迁骠骑大将军，守司空。甘露四年（259年），去世，赠司徒，谥号为穆。',
			puyangxing:'濮阳兴（？-264年），字子元，陈留（治今河南开封）人，三国时期东吴大臣，吴景帝孙休末年至末帝孙皓初年任丞相。孙权时为上虞县令，后升任尚书左曹、五官中郎将、会稽太守。孙休即位，征召为太常卫将军、平军国事，封外黄侯。永安三年（260年），力主建丹杨湖田，事倍功半，百姓大怨。后升任丞相。永安七年（264年），孙休去世，濮阳兴与张布迎立孙皓。担任侍郎，兼任青州牧。同年被万彧谮毁，流放广州，途中被孙皓派人追杀，并夷三族。',
			re_caohong:'字子廉，沛国谯（今安徽亳县）人，曹操从弟，曾献马并救护曹操。后多随军征伐，平兖州、征刘表、讨祝臂。曹丕即位时封曹洪为骠骑将军。曹叡即位，拜曹洪为后将军，更封乐城侯，后复拜为骠骑将军。曹洪逝世，追谥曰恭侯。',
			jiangji:'蒋济（？—249年5月18日），字子通，楚国平阿（今安徽省怀远县常坟镇孔岗）人。三国后期曹魏名臣，历仕曹操、曹丕、曹睿、曹芳四朝。蒋济在汉末出任九江郡吏、扬州别驾。后被曹操聘为丹杨太守，不久升任丞相府主薄，西曹属，成为曹操的心腹谋士。魏文帝时期，蒋济出任东中郎将，代替曹仁统率大军，后升任尚书。魏明帝时期，蒋济出任中护军，封侯关内，功勋颇多。景初年间担任护军将军、散骑常侍等职。曹芳继位之后，转任领军将军，封昌陵亭侯，又代司马懿为太尉。正始十年（249年），蒋济随司马懿推翻曹爽势力之后，晋封都乡侯，同年卒（一说为蒋济觉得失信于曹爽，不久后自责忧愤而死），谥曰景侯。',
			huchuquan:'呼厨泉（生卒年不详），东汉末年、三国时期匈奴单于。南匈奴羌渠单于之子，于夫罗之弟。于夫罗死后继任成为单于，曾数次依附，又反叛东汉。建安七年（公元202年），呼厨泉统领南匈奴诸部作乱平阳，钟繇率诸军围之。河北袁氏将领高干、郭援等前来增援呼厨泉，与钟繇及关中诸将大战于平阳。最终，呼厨泉惨败，从此归降曹操。建安二十一年（216年），呼厨泉被留在了邺城，南匈奴遂被分为五部。',
			xiahouen:'夏侯恩是古典小说《三国演义》中的人物，为曹操随身之背剑心腹。曹操有宝剑二口：一名“倚天剑”，一名“青釭剑”。倚天剑镇威，青釭剑杀人。倚天剑曹操自佩之，青釭剑令夏侯恩佩之。那青釭剑削铁如泥，锋利无比。《三国演义》第四十一回《刘玄德携民渡江 赵子龙单骑救主》中描写：当时夏侯恩自恃勇力，背着曹操，只顾引人抢夺掳掠。不想撞着赵云，被他一枪刺死。青釭剑自此归赵云所有。',
			xiahoushang:'夏侯尚（？～226年），字伯仁，沛国谯郡（今安徽省亳州市）人。三国时期曹魏将领，征西将军夏侯渊的堂侄。曹操平定冀州，以为军司马、五官将文学，迁黄门侍郎，随曹彰远征乌桓，得胜归来。与魏文帝曹丕亲近友好，以为征南将军，领荆州刺史，假节、都督南方诸军事，攻拔蜀国上庸，平定三郡九县，升为征南大将军；江陵击败吴将诸葛瑾，升为荆州牧，封昌陵乡侯。黄初七年（226年），去世，谥号为悼，其子夏侯玄继嗣。正始四年，配享魏武帝曹操庙庭。',
			zhangnan:'张南（？－公元222年），字文进。三国时期蜀汉将领。刘备攻伐吴国时，张南担任前部。后刘备被陆逊击败，张南兵败战死。',
			fengxí:'冯习（？—222年），字休元，南郡（治今湖北省荆州市公安县）人。三国时期蜀汉将领。随刘备入川，并于刘备攻伐孙吴时担任领军，后在猇亭被吴将陆逊击败，兵败战死。',
			liwei:'李遗，生卒年不详，三国时期蜀汉名臣李恢之子，关羽女儿关银屏之夫。正史鲜有其生平记载，多见于关银屏的民间传说，其名在民间传说中被传为“李蔚”，因为遗为多音字且民间传说为口头相传并不知道具体字形之故，当以史书《三国志》作李遗为正。死后夫妇二人合葬于俞元县（今云南澄江）关三小姐墓。其父去世后，继承了汉兴亭候的爵位。',
			baoxin:'鲍信（151年－192年），泰山平阳（今山东新泰）人。东汉末年济北相，讨伐董卓的诸路人马之一。鲍信受何进征召在外募兵，回到洛阳时适逢董卓进京，鲍信劝袁绍除掉董卓，袁绍不同意。后袁绍、曹操等人起兵对抗董卓，鲍信也起兵响应。后联盟破裂，鲍信劝戒曹操静观其变。青州黄巾军进攻兖州，刺史刘岱不听鲍信所劝贸然出战，兵败战死。鲍信便把曹操迎立为兖州牧。在与黄巾军交战期间，鲍信为救曹操不幸战死，曹操后来追记功绩，赐封其子。',
			bingyuan:'邴原（生卒年不详），字根矩，北海朱虚（今山东临朐东）人。东汉末年名士、大臣。邴原家贫、早孤。初为北海相孔融所举。曹操为司空时，任邴原为东阁祭酒。建安十五年（210年），邴原担任丞相征事，后又代凉茂为五官将长史，闭门自守，非公事不出。随曹操征吴，于途中去世。',
			jianshuo:'蹇硕（？—189年），东汉末宦官。中平五年（188年），蹇硕为上军校尉，汉灵帝以蹇硕壮健而有武略，对其特别信任，并以其为西园军元帅，领导袁绍、曹操等八校尉，以监督司隶校尉以下诸官。蹇硕虽然握有兵权，但对何进非常畏忌，曾和宦官们一起说服灵帝派遣何进西击边章、韩遂。中平六年（189年），灵帝在病重时将刘协托给蹇硕。灵帝去世后，蹇硕想先杀何进再立刘协为天子，但因手下司马潘隐与何进有旧对何进使眼色而失败。刘辩继承帝位后，蹇硕与中常侍赵忠、郭胜等写信欲合谋除去何进兄弟，因郭胜与何进为同郡且何进及何皇后发迹亦有其功劳于是亲信何氏便怂恿赵忠等人不听蹇硕之计，且将蹇硕的书信告知何进，何进于是便派黄门将之诛杀，其部下士兵亦被何进所领。',
			liufuren:'刘夫人，东汉末年军阀袁绍的后妻，袁谭与袁尚的母亲。袁绍的二子中，袁谭年长而贤惠，袁尚年幼相貌美好。袁绍的后妻刘夫人有宠，她偏爱少子袁尚而讨厌长子袁谭，多次称赞袁尚的才能，袁绍也为三子的容貌感到惊奇，想要作为继承人，于是让袁谭做哥哥的后代，出外任青州刺史，后导致二子相争。。',
			niufudongxie:'牛辅，东汉末年武将，东汉相国董卓的女婿。董翓，牛辅之妻，董卓之女。牛辅曾任中郎将，征讨白波军，不能取胜。董卓被杀时，牛辅别屯于陕地。吕布派李肃前去征讨牛辅，被牛辅击败。后来，牛辅营中有士兵半夜背叛出逃，造成内乱，牛辅以为整营皆叛，于是带着金银珠宝，独与亲信胡赤儿等五六人逾城北渡河。赤儿等人以绳索系在牛辅腰间将其从城头放下，但赤儿等因为谋财而在离地面数丈高的地方就松开了绳子使得牛辅重重摔在地上腰部受伤，而后赤儿与诸胡人将牛辅斩首，将其首级送去长安。',
			tw_zhangji:'张既（？—223年），字德容，冯翊高陵（今陕西西安市高陵区）人。汉末三国时期曹魏名臣。举秀才出身，授新丰县令，治绩为三辅第一。河东之战时，劝说马腾参与讨伐高干、张晟叛乱。迁京兆尹，抚民兴政，联合夏侯渊平宋建，定临洮，取狄道，安郡民，迁徙氐人。张鲁投降后，建议曹操迁徙汉中百姓充实三辅，辅助曹洪击败吴兰。魏国建立后，拜尚书。黄初二年（221年），临危受命，拜雍州刺史，平定诸胡叛乱。迁凉州刺史，封西乡侯。在任期间，降苏衡，邻戴众，修工事，安抚百姓，平定西平郡麹光叛乱。一生以惠政闻名，征辟杨阜、胡遵等人，皆有名位。黄初四年（223年）去世。魏明帝曹叡即位后，追谥肃侯，其子张缉为关内侯。',
			qiaorui:'桥蕤（？—197年），东汉末年袁术部下将领，为袁术开拓地盘立下了一定战功。曹操进攻袁术时，担任迎击军的先锋。在寿春与曹操军大战，被夏侯惇杀死。据正史记载，他曾经被袁术任命为大将军。',
			weixu:'魏续，东汉末年吕布帐下名将。与吕布有亲，吕布将高顺兵归续管。汉献帝建安三年（198年），曹操率军攻吕布，围之三月。魏续与侯成、宋宪缚陈宫，降曹。吕布被迫降，被缢杀在白门楼。',
			yanxiang:'阎象，东汉末期人物，袁术的主簿。献帝兴平二年（195），手执玉玺的袁术要称帝时，问于部下，只有阎象引用周文王虽拥有三分之二的天下还向殷称臣的故事进行劝谏。却未被采纳。',
			yufuluo:'东汉时匈奴单于。亦称於夫罗、栾提于夫罗、于扶罗。羌渠单于子，右贤王。前赵刘渊之祖。于东汉中平年间带兵来到中原协助东汉政府镇压起义，赶上本国叛乱，其父被杀，于是留在中原，与白波军联合，在太原、河东等地劫掠。汉末军阀混战之际，于夫罗先后与袁绍、张杨、袁术等人联合，两次与曹操交战，均被击败。后来，于夫罗去世，其弟呼厨泉继任成为单于，其子刘豹被立为左贤王。',
			sp_xunchen:'荀谌，字友若，荀彧之兄（一说荀彧之弟），荀绲之子，颍川人。曾任军阀袁绍的幕僚。帮助袁绍游说韩馥，夺取了冀州。',
			sp_xujing:'许靖（？—222年），字文休。汝南郡平舆县（今河南省平舆县）人。汉末至三国蜀汉时期重臣、名士、评论家。许靖因与从弟许邵俱以品评人物而闻名于世。后被刘翊推举为孝廉，任尚书郎。曾先后投奔孔伷、陈祎、许贡、王朗等人，于孙策攻王朗前与家属俱避难交州，受到交趾太守士燮礼待。其后受益州牧刘璋邀请，相继为巴郡、广汉、蜀郡太守。于刘备包围成都时欲越墙叛逃，为刘璋所获。刘备定蜀后欲将其弃用，在法正的建议下方以其为左将军长史。建安二十三年（218年），刘备称汉中王，任命许靖为汉中王傅。章武元年（221年），刘备称帝，任命许靖为司徒，位列三公。章武二年（222年），去世。有文集二卷。',
			sp_zongyu:'宗预（？－264年），字德艳 ，荆州南阳郡安众县（今河南省南阳市）人。三国时期蜀汉官员、将领。曾随张飞入蜀助平益州，又受辟为丞相诸葛亮手下主簿，升任参军、右中郎将。诸葛亮逝世后，宗预受命出使孙吴，得到孙权的赞赏。迁后将军，出督永安，又升任征西大将军，并受封关内侯。公元258年（景耀元年），因病回成都，受任镇军大将军。蜀汉灭亡后，宗预随后主刘禅徙往洛阳，在中途病逝。宗预为人坦率耿直，多次出使孙吴并深得孙权的敬重，为吴、汉两国同盟的巩固作出了一定的贡献。',
			sp_chendong:'陈武，东吴将领，孙策攻打刘繇，陈武前来相助，孙策非常喜爱陈武，拜为校尉，使作先锋。陈武以十数骑兵力杀敌五十余人。后于赤壁等战役屡立功勋。董袭献上严虎的人头来降孙策。赤壁之战，董袭受周瑜命，分兵去汉阳，合肥会战时接应太史慈，逍遥津支援孙权。濡须口之战时，董袭在船上督战，船覆董袭坚守殉职。',
			xia_wangyue:'王越，东汉末年游侠（生卒年不详），乃辽东燕山人士，擅使剑术， 三国时期史阿的师父，曹丕的师公，官职虎贲将军。在史书《典论》中略有记载。',
			liyàn:'李彦，号称"并州第一戟"，是童渊的师兄。早年间两人在玉真子门下一起习武，后成年出师开枝散叶。同为并州人的吕布在得知李彦的名声后，投入其门下学习武艺。',
			re_fazheng:'字孝直，本为刘璋部下，刘备围成都时劝说刘璋投降，而后又与刘备进取汉中，献计将曹操大将夏侯渊斩首。法正善奇谋，深受刘备信任和敬重。',
			xin_guyong:'为蔡邕之徒。其为人少言语，不饮酒，严厉正大，被张纮推荐仕于孙权。孙权任命他为会稽郡丞，行太守事，后不断升迁，官至吴国丞相。顾雍为官，多进良言，有功于吴。',
			zhaoe:'赵娥，东汉酒泉郡禄福县（即肃州）人。丈夫庞子夏，表氏县（今高台县）人。庞子夏去世后，赵娥在禄福县抚养其子庞淯。她的父亲被李寿杀死。灵帝光和二年（公元179年）二月上旬的一天早晨，赵娥在都亭前与李寿相遇，她奋力挥刀杀死了李寿，随后到了都亭尊长的面前认罪伏法。后来，凉州刺史周洪、酒泉太守刘班等人共同上表朝廷，禀奏赵娥的烈义行为，刻石立碑显其赵家门户。黄门侍郎梁宽还著书追述赵娥的事迹，为其作传。西晋政治家傅玄为其作《秦女休行》诗，加以赞美。',
			xiahouzie:'夏侯紫萼，游卡桌游《三国杀阵面对决》中虚构的人物。幼年因天天帮病种的母亲采紫萼得其名。亲眼目睹母亲被宦官所杀，愤怒之下夺过佩剑斩下宦官的头颅。被神秘人所救，发现了自己的身世，决心与宦官争斗到底。后再闯荡江湖的过程中，与夏侯惇义结金兰，以夏侯家姓氏称呼。',
			yangang:'严纲（163~191年），东汉末年公孙瓒部下的冀州刺史。汉献帝初平二年（191年），袁绍与公孙瓒在界桥交战，严纲为袁绍部下麹义所斩。',
			gongsunfan:'公孙范，辽西令支（今河北迁安）人。东汉末年武将，公孙瓒从弟，官至勃海太守。公孙瓒起兵攻打袁绍之时，袁绍畏惧公孙瓒的势力，将自己的勃海太守印绶给予公孙范，意图和解，结果公孙范反而起勃海之兵帮助公孙瓒。初平二年（191年），公孙范以勃海兵助公孙瓒率二万人大破青、徐黄巾军。最后于界桥之战与公孙瓒一同败走。',
			zhangzhao:'张昭（156年－236年），字子布。徐州彭城县（今江苏省徐州市）人。汉末三国时期孙吴政权重臣。东汉末年，张昭为避战乱而南渡至扬州。孙策创业时，任命其为长史、抚军中郎将，将文武之事都委任于张昭。孙策临终前，将其弟孙权托付给张昭，张昭率群僚辅立孙权，并安抚百姓、讨伐叛军，与周瑜等辅助孙权稳定局势。孙权每次出征，常留张昭镇守后方，领幕府事，并敬称他为“张公”。赤壁之战时，张昭鉴于曹操势大，持主降论，从而被排挤出军政决策中心。孙权代理车骑将军时，任命张昭为军师。孙权被封为吴王后，任绥远将军，封由拳侯。此后曾参与撰定朝仪。孙权两次要设立丞相时，众人都推举张昭，孙权以张昭敢于直谏、性格刚直为由而不用他，先后用孙邵、顾雍。黄龙元年（229年），孙权称帝，张昭以年老多病为由，上还官位及所统领部属，改拜辅吴将军、班亚三司，改封娄侯。晚年时一度不参与政事，在家著书，即使偶有参加朝议，也常与孙权产生激烈冲突。嘉禾五年（236年），张昭去世，享年八十一岁，谥号“文”。张昭容貌严正，敢于直言谏诤，一生以忠于孙氏基业为任，但因其与孙权在个性、军政策略等方面的深层矛盾，使其以“入宫则拜孤，出宫则拜君”的地位，却终身不得任丞相。著有《春秋左氏传解》及《论语注》，今皆佚失。',
			zhanghong:'张纮（153年～212年），字子纲，徐州广陵（江苏省扬州市广陵区人）人。东汉末年文学家、官员，和张昭一起合称“二张”。曾被大将军何进、太尉朱儁、司空荀爽辟为掾属，皆不就，避难江东。孙策平定江东前，亲自多次登门邀请，张纮出仕为官。孙权即位时，建议孙权迁都秣陵。建安十七年（212年），病逝，时年六十岁，孙权为之流涕。',
		},
		card:{
			dz_mantianguohai:{
				fullskin:true,
				type:'trick',
				enable:true,
				derivation:'tw_dongzhao',
				global:['dz_mantianguohai'],
				selectTarget:[1,2],
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('hej')>0;
				},
				content:function(){
					player.gainPlayerCard(target,'hej',true);
				},
				contentAfter:function(){
					'step 0'
					var evtx=event.getParent();
					event.targets=targets.filter(function(target){
						return target.hasHistory('lose',function(evt){
							return evt.getParent(3).name=='dz_mantianguohai'&&evt.getParent(4)==evtx;
						});
					});
					if(!event.targets.length||!player.countCards('he')) event.finish();
					'step 1'
					var target=targets.shift();
					event.target=target;
					var next=player.chooseCard('he',true,'交给'+get.translation(target)+'一张牌');
					if(player.hasSkill('twyingjia')&&player.countUsed('dz_mantianguohai')==1) next.set('ai',function(card){
						if(card.name=='dz_mantianguohai') return -10;
						return -get.value(card,_status.event.getParent().target);
					});
					'step 2'
					if(result.bool){
						player.give(result.cards,target);
					}
					'step 3'
					if(targets.length&&player.countCards('h')>0) event.goto(1);
				},
				ai:{
					order:6,
					tag:{
						lose:1,
						loseCard:1,
					},
					result:{
						target:-0.1,
					},
				},
			},
			gx_lingbaoxianhu:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				derivation:'tw_gexuan',
				distance:{attackFrom:-2},
				ai:{
					basic:{
						equipValue:4.5,
					}
				},
				skills:['gx_lingbaoxianhu']
			},
			gx_taijifuchen:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				derivation:'tw_gexuan',
				distance:{attackFrom:-4},
				ai:{
					basic:{
						equipValue:4.5,
					}
				},
				skills:['gx_taijifuchen']
			},
			gx_chongyingshenfu:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				derivation:'tw_gexuan',
				ai:{
					basic:{
						equipValue:7,
					}
				},
				skills:['gx_chongyingshenfu'],
				loseDelay:false,
			},
			meiyingqiang:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				cardimage:'yinyueqiang',
				derivation:'tw_zhaoxiang',
				distance:{attackFrom:-2},
				ai:{
					basic:{
						equipValue:4.5,
					}
				},
				skills:['meiyingqiang'],
			},
		},
		characterFilter:{
			nashime:function(mode){
				return mode!='guozhan';
			},
			tw_xiahouba:function(mode){
				return mode!='guozhan';
			},
		},
		skill:{
			//玉真子
			twhuajing:{
				audio:2,
				getSkills(player){
					return player.getCards('e',card=>get.subtype(card)=='equip1').reduce((list,card)=>{
						const info=get.info(card);
						if(info&&info.skills) return list.addArray(info.skills);
						return list;
					},[]);
				},
				trigger:{global:'phaseBefore',player:'enterGame'},
				filter(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				forced:true,
				locked:false,
				async content(event,trigger,player){
					const skills=lib.skill.twhuajing.derivation;
					for(const eff of skills){
						player.addMark(eff,1);
						player.unmarkSkill(eff);
					}
					player.markSkill('twhuajing');
				},
				global:'twhuajing_global',
				group:'twhuajing_use',
				derivation:['twhuajing_jian','twhuajing_dao','twhuajing_fu','twhuajing_qiang','twhuajing_ji','twhuajing_gong'],
				marktext:'武',
				intro:{
					markcount(storage,player){
						return lib.skill.twhuajing.derivation.filter(skill=>player.hasMark(skill)).length;
					},
					content(storage,player){
						const skills=lib.skill.twhuajing.derivation.filter(skill=>player.hasMark(skill));
						if(!skills.length) return '功力已消耗殆尽';
						let str='当前武功：';
						for(const eff of skills){
							str+='<br><li>';
							str+=lib.translate[eff];
							str+='：';
							str+=lib.translate[eff+'_info'];
						}
						return str;
					},
				},
				subSkill:{
					global:{
						mod:{
							attackRange(player,num){
								const skills=lib.skill.twhuajing.derivation.filter(skill=>player.hasMark(skill)||player.hasSkill(skill));
								if(skills.length) return num+skills.length*game.countPlayer(target=>target.hasSkill('twhuajing'));
							},
						},
					},
					use:{
						audio:'twhuajing',
						enable:'phaseUse',
						filter(event,player){
							return lib.skill.twhuajing.derivation.some(skill=>player.hasMark(skill));
						},
						filterCard:true,
						selectCard:[1,4],
						position:'h',
						complexCard:true,
						discard:false,
						lose:false,
						delay:false,
						check(card){
							const player=get.event('player'),skills=lib.skill.twhuajing.derivation.filter(skill=>player.hasMark(skill));
							if(ui.selected.cards.some(cardx=>get.suit(cardx,player)==get.suit(card,player))) return 0;
							return skills.length-ui.selected.cards.length;
						},
						usable:1,
						prompt:'展示至多四张手牌，然后根据这些牌含有的花色数于本回合获得等量你拥有的“武”标记的效果',
						async content(event,trigger,player){
							await player.showCards(event.cards,get.translation(player)+'发动了【化境】');
							const skills=lib.skill.twhuajing.derivation.filter(skill=>player.hasMark(skill));
							const gainSkills=skills.randomGets(Math.min(skills.length,event.cards.reduce((list,cardx)=>list.add(get.suit(cardx,player)),[]).length));
							for(const eff of gainSkills) player.popup(eff);
							player.addTempSkill(gainSkills);
							player.addTempSkill('twhuajing_blocker');
							player.getHistory('custom').push({twhuajing_skills:gainSkills});
						},
					},
					jian:{
						charlotte:true,
						mark:true,
						marktext:'剑',
						intro:{
							name:'化境·剑',
							name2:'剑',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_jian_info,
						},
						nopop:true,
						trigger:{player:'useCardToPlayered'},
						filter(event,player){
							return event.card.name=='sha'&&event.target.countCards('he');
						},
						forced:true,
						logTarget:'target',
						async content(event,trigger,player){
							const target=trigger.target;
							const cards=target.getDiscardableCards(player,'he');
							target.discard(cards.randomGets(Math.min(2,cards.length))).discarder=player;
						},
					},
					dao:{
						charlotte:true,
						mark:true,
						marktext:'刀',
						intro:{
							name:'化境·刀',
							name2:'刀',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_dao_info,
						},
						nopop:true,
						inherit:'guding_skill',
						equipSkill:false,
					},
					fu:{
						charlotte:true,
						mark:true,
						marktext:'斧',
						intro:{
							name:'化境·斧',
							name2:'斧',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_fu_info,
						},
						nopop:true,
						trigger:{player:'shaMiss'},
						forced:true,
						logTarget:'target',
						async content(event,trigger,player){
							trigger.target.damage();
						},
						ai:{
							directHit_ai:true,
							skillTagFilter(player,tag,arg){
								if(!arg||!arg.card||arg.card.name!='sha'||!arg.baseDamage||arg.baseDamage<=1) return false;
								return true;
							},
						},
					},
					qiang:{
						charlotte:true,
						mark:true,
						marktext:'枪',
						intro:{
							name:'化境·枪',
							name2:'枪',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_qiang_info,
						},
						nopop:true,
						trigger:{player:'useCardAfter'},
						filter(event,player){
							return event.card.name=='sha'&&get.color(event.card)=='black';
						},
						forced:true,
						async content(event,trigger,player){
							const card=get.cardPile(card=>card.name=='shan');
							if(card) player.gain(card,'gain2');
						},
					},
					ji:{
						charlotte:true,
						mark:true,
						marktext:'戟',
						intro:{
							name:'化境·戟',
							name2:'戟',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_ji_info,
						},
						nopop:true,
						trigger:{source:'damageBegin3'},
						filter(event,player){
							return event.card&&event.card.name=='sha';
						},
						forced:true,
						async content(event,trigger,player){
							player.draw(trigger.num);
						},
					},
					gong:{
						charlotte:true,
						mark:true,
						marktext:'弓',
						intro:{
							name:'化境·弓',
							name2:'弓',
							markcount:()=>0,
							content:()=>lib.translate.twhuajing_gong_info,
						},
						nopop:true,
						trigger:{source:'damageSource'},
						filter(event,player){
							return event.card&&event.card.name=='sha'&&event.player.countDiscardableCards(player,'e');
						},
						forced:true,
						logTarget:'player',
						async content(event,trigger,player){
							trigger.player.discard(trigger.player.getDiscardableCards(player,'e').randomGets(1)).discarder=player;
						},
					},
					blocker:{
						charlotte:true,
						init(player,skill){
							player.disableSkill(skill,lib.skill.twhuajing.getSkills(player));
						},
						onremove(player,skill){
							player.enableSkill(skill);
						},
						mod:{
							attackRange(player,num){
								return num-player.getEquipRange();
							},
						},
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter','phaseBefore'],
						},
						filter(event,player){
							if(event.name=='phase') return true;
							if(event.name=='equip'&&event.player==player&&get.subtype(event.card)=='equip1') return true;
							const evt=event.getl(player);
							return evt&&evt.player==player&&evt.es&&evt.es.some(card=>get.subtype(card)=='equip1');
						},
						forced:true,
						popup:false,
						firstDo:true,
						async content(event,trigger,player){
							player.enableSkill('twhuajing_blocker');
							player.disableSkill('twhuajing_blocker',lib.skill.twhuajing.getSkills(player));
						},
						ai:{unequip_equip1:true},
					},
				},
			},
			twtianshou:{
				audio:2,
				trigger:{player:'phaseEnd'},
				filter(event,player){
					return player.getHistory('sourceDamage',evt=>{
						return evt.card&&evt.card.name=='sha';
					}).length&&player.getHistory('custom',evt=>{
						return evt.twhuajing_skills;
					}).reduce((list,evt)=>list.addArray(evt.twhuajing_skills),[]).some(skill=>player.hasMark(skill));
				},
				forced:true,
				async content(event,trigger,player){
					const {result:{bool,targets}}=await player.chooseTarget(lib.filter.notMe,true)
					.set('prompt','天授：令一名其他角色获得1枚“武”并获得此标记的效果')
					.set('ai',target=>{
						const player=get.event('player'),att=get.attitude(player,target);
						const card=new lib.element.VCard({name:'sha'});
						if(att>0) return game.countPlayer(aim=>{
							return target.canUse(card,target)&&get.effect(aim,card,target,player)>0&&get.effect(aim,card,target,target)>0;
						})+10;
						if(att==0) return 1.5+Math.random();
						return 0.1+Math.random();
					});
					if(bool){
						const target=targets[0];
						const skills=player.getHistory('custom',evt=>{
							return evt.twhuajing_skills;
						}).reduce((list,evt)=>list.addArray(evt.twhuajing_skills),[]).filter(skill=>player.hasMark(skill));
						let choiceList=skills.map(i=>{
							return '<div class="skill">【'+get.translation(lib.translate[i+'_ab']||get.translation(i).slice(0,2))+'】</div>' +
								'<div>'+get.skillInfoTranslation(i,player)+'</div>';
						});
						const {result:{control}}=await player.chooseControl(skills)
						.set('prompt','选择令'+get.translation(target)+'获得的“武”')
						.set('choiceList',choiceList).set('displayIndex',false).set('ai',()=>get.event('controls').randomGet());
						if(control){
							player.removeMark(control,1);
							player.markSkill('twhuajing');
							player.popup(control,'metal');
							target.addTempSkill(control,{player:'phaseAfter'});
							target.addTempSkill('twhuajing_blocker',{player:'phaseAfter'});
							target.getHistory('custom').push({twhuajing_skills:[control]});
							await player.draw();
						}
					}
				},
				ai:{combo:'twhuajing'},
			},
			//史阿
			twdengjian:{
				audio:2,
				trigger:{global:'phaseDiscardEnd'},
				filter(event,player){
					if(player.hasSkill('twdengjian_ban')) return false;
					return event.player!=player&&lib.skill.twdengjian.getCards(player,event.player).length;
				},
				getCards(player,target){
					let cards=target.getHistory('useCard',evt=>{
						return evt.cards&&evt.cards.filterInD('d').some(card=>get.name(card,false)=='sha')&&target.getHistory('sourceDamage',evtx=>{
							return evtx.card&&evtx.card==evt.card;
						}).length;
					}).reduce((list,evt)=>list.addArray(evt.cards.filterInD('d').filter(card=>get.name(card,false)=='sha')),[]);
					if(cards.length){
						const history=player.actionHistory;
						for(let i=history.length-1;i>=0;i--){
							for(let evt of history[i].gain){
								if(evt.getParent().name=='twdengjian'){
									const card=evt.cards[0];
									cards=cards.filter(cardx=>get.color(cardx)!=get.color(card));
									if(!cards.length) break;
								}
							}
							if(history[i].isRound) break;
						}
					}
					return cards;
				},
				direct:true,
				async content(event,trigger,player){
					const cards=lib.skill.twdengjian.getCards(player,trigger.player);
					const {result:{bool}}=await player.chooseToDiscard(get.prompt('twdengjian'),'he')
					.set('prompt2','弃置一张牌并随机获得本回合所有造成伤害的牌对应的实体牌的其中一张与你本轮以此法获得的牌的颜色均不同的【杀】')
					.set('ai',card=>7-get.value(card))
					.set('logSkill','twdengjian');
					if(bool) player.gain(cards.randomGet(),'gain2').gaintag.add('twdengjianx');
				},
				group:'twdengjian_buff',
				subSkill:{
					ban:{charlotte:true},
					buff:{
						mod:{
							aiOrder:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('twdengjianx')) return num+0.1;
							},
						},
						audio:'twdengjian',
						trigger:{player:'useCard1'},
						filter(event,player){
							return event.cards&&event.cards.length==1&&player.getHistory('lose',evt=>{
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('twdengjianx')) return true;
								}
								return false;
							}).length&&event.addCount!==false;
						},
						forced:true,
						locked:false,
						async content(event,trigger,player){
							trigger.addCount=false;
							if(player.stat[player.stat.length-1].card.sha>0) player.stat[player.stat.length-1].card.sha--;
							game.log(trigger.card,'不计入次数限制');
						},
					},
				},
			},
			twdengjianx:{},
			twxinshou:{
				audio:2,
				trigger:{player:'useCard'},
				filter(event,player){
					if(event.card.name!='sha') return false;
					const goon=(!player.getHistory('useCard',evt=>{
						return evt!=event&&evt.card.name=='sha'&&get.color(evt.card)==get.color(event.card);
					}).length&&player.isPhaseUsing());
					if(!player.hasSkill('twxinshou_0')) return goon;
					if(!player.hasSkill('twxinshou_1')) return goon&&game.hasPlayer(target=>target!=player);
					return !player.hasSkill('twdengjian_ban')&&game.hasPlayer(target=>{
						if(target==player) return false;
						return !target.hasSkill('twdengjian',null,false,false);
					})&&player.hasSkill('twdengjian',null,false,false);
				},
				direct:true,
				async content(event,trigger,player){
					if(player.hasSkill('twxinshou_0')&&player.hasSkill('twxinshou_1')){
						const {result:{bool,targets}}=await player.chooseTarget((card,player,target)=>{
							return target!=player&&!target.hasSkill('twdengjian',null,false,false);
						}).set('ai',target=>{
							const player=get.event('player');
							if(get.attitude(player,target)>0){
								if(target.isTurnedOver()) return 0;
								const card=new lib.element.VCard({name:'sha'});
								if(game.hasPlayer(aim=>{
									return target.canUse(card,target)&&get.effect(aim,card,target,player)>0&&get.effect(aim,card,target,target)>0;
								})) return target.countCards('h')-3;
								return 0;
							}
							return 0;
						})
						.set('prompt',get.prompt('twxinshou'))
						.set('prompt2','令【登剑】失效并令一名其他角色获得【登剑】，你的下个回合开始时，其失去【登剑】，若其这期间使用【杀】造成过伤害，则你结束【登剑】的失效状态')
						if(bool){
							const target=targets[0];
							player.logSkill('twxinshou',target);
							player.addSkill('twdengjian_ban');
							target.addAdditionalSkill('twxinshou_'+player.playerid,'twdengjian');
							player.popup('登剑');
							target.popup('登剑');
							game.log(player,'将','#g【登剑】','传授给了',target);
							game.log(player,'的','#g【登剑】','被失效了');
							player.when('phaseBegin').then(()=>{
								target.removeAdditionalSkill('twxinshou_'+player.playerid);
								const history=game.getAllGlobalHistory('everything');
								for(let i=history.length-1;i>=0;i--){
									const evt=history[i];
									if(evt.name=='damage'&&evt.card&&evt.source&&evt.card.name=='sha'&&evt.source==target){
										player.popup('洗具');
										player.removeSkill('twdengjian_ban');
										game.log(player,'结束了','#g【登剑】','的失效状态');
										return;
									}
									if(evt==evtx) break;
								}
								player.popup('杯具');
							}).vars({target:target,evtx:event});
						}
					}
					else{
						let choice=[],choiceList=['摸一张牌','交给一名其他角色一张牌',];
						if(!player.hasSkill('twxinshou_0')) choice.push('摸牌');
						else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
						if(!player.hasSkill('twxinshou_1')&&game.hasPlayer(target=>target!=player)) choice.push('给牌');
						else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
						const {result:{control}}=await player.chooseControl(choice,'cancel2')
						.set('prompt',get.prompt('twxinshou')).set('choiceList',choiceList)
						.set('ai',()=>{
							if(get.event('controls').includes('摸牌')) return '摸牌';
							const player=get.event('player');
							return (game.hasPlayer(target=>{
								if(target==player) return false;
								if(player.countCards('he',card=>card.name=='du')&&get.attitude(player,target)<=0) return true;
								if(player.countCards('he',card=>get.value(card,player)<0&&get.attitude(player,target)*get.value(card,target)>0)) return true;
								return get.attitude(player,target)>0;
							})&&get.event('controls').includes('给牌'))?'给牌':'cancel2';
						});
						if(control=='cancel2') return;
						player.logSkill('twxinshou');
						if(control=='摸牌'){
							player.addTempSkill('twxinshou_0');
							player.draw();
						}
						if(control=='给牌'){
							player.addTempSkill('twxinshou_1');
							const {result:{bool,targets}}=await player.chooseTarget('交给一名其他角色一张牌',lib.filter.notMe,true).set('ai',target=>{
								const player=get.event('player'),att=get.attitude(player,target);
								if(player.countCards('he',card=>card.name=='du')) return -att;
								let cards=player.getCards('he',card=>get.value(card,player)<0);
								if(cards.length){
									cards.sort((a,b)=>get.value(a,player)-get.value(b,player));
									return get.value(cards[0],target)*att;
								}
								return att;
							});
							if(bool){
								const target=targets[0];
								player.line(target);
								player.chooseToGive(target,'he',true);
							}
						}
					}
				},
				subSkill:{
					'0':{charlotte:true},
					'1':{charlotte:true},
				},
			},
			//石韬
			twjieqiu:{
				audio:2,
				enable:'phaseUse',
				filter(event,player){
					return game.hasPlayer(target=>lib.skill.twjieqiu.filterTarget(null,player,target));
				},
				filterTarget(card,player,target){
					return target!=player&&!target.hasDisabledSlot();
				},
				usable:1,
				async content(event,trigger,player){
					const target=event.target,num=target.countCards('e');
					let disables=[];
					for(let i=1;i<=5;i++){
						for(let j=0;j<target.countEnabledSlot(i);j++){
							disables.push(i);
						}
					}
					target.disableEquip(disables);
					if(num) target.draw(num);
					target.addSkill('twjieqiu_buff');
					target.markAuto('twjieqiu_buff',[player]);
					target.when('enableEquipEnd')
					.filter((e,p)=>!p.hasDisabledSlot())
					.then(()=>player.removeSkill('twjieqiu_buff'));
				},
				ai:{
					order:7,
					result:{
						target(player,target){
							return -target.countCards('e')-(get.attitude(player,target)<0?1:0);
						},
					},
				},
				subSkill:{
					used:{charlotte:true},
					buff:{
						charlotte:true,
						onremove:true,
						trigger:{player:'phaseDiscardEnd'},
						filter(event,player){
							return player.hasDisabledSlot()&&event.cards&&event.cards.length;
						},
						forced:true,
						popup:false,
						async content(event,trigger,player){
							const num=trigger.cards.length;
							let list=[],map={};
							for(let i=1;i<6;i++){
								map[get.translation('equip'+i)]=('equip'+i);
								if(player.hasDisabledSlot(i)){
									for(let j=0;j<player.countDisabledSlot(i);j++){
										list.push('equip'+i);
									}
								}
							}
							const transList=list.map(i=>get.translation(i));
							const {result:{bool,links}}=await player.chooseButton([
								'劫囚：请选择你要恢复的装备栏',
								[transList,'tdnodes'],
							],num,true).set('map',map)
							.set('ai',button=>['equip5','equip4','equip1','equip3','equip2'].indexOf(get.event('map')[button.link])+2);
							if(bool) player.enableEquip(links.slice().map(i=>map[i]));
						},
						group:['twjieqiu_end'],
					},
					end:{
						charlotte:true,
						trigger:{player:'phaseEnd'},
						filter(event,player){
							return player.hasDisabledSlot()&&player.getStorage('twjieqiu_buff').some(target=>{
								return target.isIn()&&!target.hasSkill('twjieqiu_used');
							});
						},
						forced:true,
						popup:false,
						async content(event,trigger,player){
							const targets=player.getStorage('twjieqiu_buff').filter(target=>{
								return target.isIn()&&!target.hasSkill('twjieqiu_used');
							}).sortBySeat();
							for(const target of targets){
								target.popup('劫囚');
								target.addTempSkill('twjieqiu_used','roundStart');
								target.insertPhase();
							}
						},
					},
				},
			},
			twenchou:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return game.hasPlayer(current=>lib.skill.twenchou.filterTarget(null,player,current));
				},
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')&&target.hasDisabledSlot();
				},
				usable:1,
				async content(event,trigger,player){
					const target=event.target;
					await player.gainPlayerCard(target,'h',true,'visible');
					let list=[],map={};
					for(let i=1;i<6;i++){
						map[get.translation('equip'+i)]=('equip'+i);
						if(target.hasDisabledSlot(i)){
							list.push('equip'+i);
						}
					}
					const transList=list.map(i=>get.translation(i));
					const {result:{bool,links}}=await player.chooseButton([
						'恩仇：请选择'+get.translation(target)+'要恢复的装备栏',
						[transList,'tdnodes'],
					],true).set('map',map)
					.set('ai',button=>1/(['equip5','equip4','equip1','equip3','equip2'].indexOf(get.event('map')[button.link])+2));
					if(bool) target.enableEquip(links.slice().map(i=>map[i]));
				},
				ai:{
					order:9,
					result:{target:-1},
				},
			},
			//侠关羽
			twzhongyi:{
				mod:{
					targetInRange(card){
						if(card.name=='sha') return true;
					},
				},
				audio:2,
				trigger:{player:'useCardAfter'},
				filter(event,player){
					if(event.card.name!='sha') return false;
					return player.getHistory('sourceDamage',evt=>evt.card&&evt.card==event.card).length;
				},
				forced:true,
				async content(event,trigger,player){
					const num=player.getHistory('sourceDamage',evt=>evt.card&&evt.card==trigger.card).reduce((sum,evt)=>sum+evt.num,0);
					const num2=1+player.getAllHistory('custom',evt=>evt.twzhongyi).length;
					let choice=['摸牌'],choiceList=['摸'+get.cnNumber(num)+'张牌'];
					if(player.isDamaged()){
						choice.addArray(['回血','背水！']);
						choiceList.addArray([
							'回复'+num+'点体力',
							'失去'+num2+'点体力，依次执行以上所有项',
						]);
					}
					const {result:{control}}=await player.chooseControl(choice)
					.set('prompt','忠义：请选择一项').set('choiceList',choiceList)
					.set('ai',()=>{
						const player=get.event('player');
						const num=get.event('num'),num2=get.event('num2');
						if(player.isHealthy()) return '摸牌';
						return (player.hp+player.countCards('hs',card=>player.canSaveCard(card,player))-num2>0&&num>num2)?'背水！':'回血';
					}).set('num',num).set('num2',num2);
					if(control!='cancel2'){
						if(control=='背水！'){
							await player.loseHp(num2);
							player.getHistory('custom').push({twzhongyi:true});
						}
						if(control!='回血') await player.draw(num);
						if(control!='摸牌') await player.recover(num);
					}
				},
			},
			twchue:{
				audio:2,
				trigger:{player:'useCardToPlayer'},
				filter(event,player){
					return event.card.name=='sha'&&event.isFirstTarget&&event.targets.length==1&&game.hasPlayer(target=>!event.targets.includes(target)&&player.canUse(event.card,target));
				},
				prompt2:'失去1点体力，额外指定至多等同于你体力值的目标',
				check(event,player){
					return player.hp+player.countCards('hs',card=>player.canSaveCard(card,player))-1>0;
				},
				async content(event,trigger,player){
					await player.loseHp();
					const targetx=trigger.targets.slice(),num=player.getHp();
					if(!num) return;
					const {result:{bool,targets}}=await player.chooseTarget('额外指定至多'+get.cnNumber(num)+'名目标',[1,num],(card,player,target)=>{
						const trigger=_status.event.getTrigger();
						return !trigger.targets.includes(target)&&player.canUse(trigger.card,target);
					}).set('ai',target=>{
						const player=get.event('player'),trigger=_status.event.getTrigger();
						return get.effect(target,trigger.card,player,player);
					});
					if(!bool) return;
					player.line(targets);
					trigger.targets.addArray(targets);
				},
				group:['twchue_gain','twchue_effect'],
				marktext:'勇',
				intro:{
					name:'勇',
					content:'mark',
				},
				subSkill:{
					gain:{
						audio:'twchue',
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						locked:false,
						async content(event,trigger,player){
							await player.draw();
							player.addMark('twchue',1);
						},
					},
					effect:{
						audio:'twchue',
						trigger:{global:'phaseEnd'},
						filter(event,player){
							const card=new lib.element.VCard({name:'sha'});
							return player.hasUseTarget(card)&&player.getHistory('useSkill',evt=>{
								return evt.skill=='twchue_gain';
							}).length&&player.getHp()&&player.countMark('twchue')>=player.getHp();
						},
						check(event,player){
							return player.hasValueTarget(new lib.element.VCard({name:'sha'}));
						},
						prompt2(event,player){
							const num=player.getHp();
							return '失去'+num+'个“勇”标记，视为使用一张造成的伤害+1且可以额外指定'+num+'个目标的【杀】';
						},
						async content(event,trigger,player){
							const num=player.getHp();
							player.removeMark('twchue',num);
							const card=new lib.element.VCard({name:'sha'});
							player.when('useCard2')
							.filter(evt=>evt.getParent(2)==event&&game.hasPlayer(target=>!evt.targets.includes(target)&&player.canUse(evt.card,target)))
							.assign({
								firstDo:true,
							})
							.then(()=>{
								trigger.baseDamage++;
								player.chooseTarget('额外指定至多'+get.cnNumber(num)+'名目标',[1,num],(card,player,target)=>{
									const trigger=_status.event.getTrigger();
									return !trigger.targets.includes(target)&&player.canUse(trigger.card,target);
								}).set('ai',target=>{
									const player=get.event('player'),trigger=_status.event.getTrigger();
									return get.effect(target,trigger.card,player,player);
								});
							})
							.then(()=>{
								if(result.bool){
									const targets=result.targets;
									player.line(targets);
									trigger.targets.addArray(targets);
								}
							}).vars({num:num});
							player.chooseUseTarget('视为使用造成的伤害+1且可以额外指定'+num+'个目标的【杀】',card,false,true);
						},
					},
				},
			},
			//夏侯惇
			twdanlie:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return game.hasPlayer(target=>player.canCompare(target));
				},
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				usable:1,
				selectTarget:[1,3],
				multitarget:true,
				multiline:true,
				group:'twdanlie_add',
				content:function(){
					'step 0'
					player.chooseToCompare(targets).setContent('chooseToCompareMeanwhile');
					'step 1'
					if(result.winner&&result.winner==player){
						player.line(targets);
						targets.forEach(target=>target.damage());
					}
					else player.loseHp();
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							var att=get.attitude(player,target);
							if(att>=0) return 0;
							if(player.getHp()>2) return -get.damageEffect(target,player,player)-10/target.countCards('h');
							var hs=player.getCards('h').sort((a,b)=>b.number-a.number);
							var ts=target.getCards('h').sort((a,b)=>b.number-a.number);
							if(!hs.length||!ts.length) return 0;
							if(Math.min(13,hs[0].number+player.getDamagedHp())>ts[0].number) return -get.damageEffect(target,player,player);
							return 0;
						},
					},
				},
				subSkill:{
					add:{
						audio:'twdanlie',
						trigger:{player:'compare',target:'compare'},
						filter:function(event,player){
							if(!player.isDamaged()) return false;
							if(player!=event.target&&event.iwhile) return false;
							return true;
						},
						forced:true,
						locked:false,
						content:function(){
							var num=player.getDamagedHp();
							if(player==trigger.player){
								trigger.num1+=num;
								if(trigger.num1>13) trigger.num1=13;
							}
							else{
								trigger.num2+=num;
								if(trigger.num2>13) trigger.num2=13;
							}
							game.log(player,'的拼点牌点数+',num);
						},
					},
				},
			},
			//张葳
			twhuzhong:{
				audio:2,
				trigger:{player:'useCardToPlayer'},
				filter:function(event,player){
					return event.card.name=='sha'&&!game.hasNature(event.card,'linked')&&event.targets.length==1&&player.isPhaseUsing()&&(game.hasPlayer(target=>!event.targets.includes(target)&&player.canUse(event.card,target))||event.target.countCards('h')>0);
				},
				direct:true,
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					var list=['cancel2'];
					var choiceList=[
						'令此【杀】可以额外指定一个目标',
						'弃置其一张手牌，若此【杀】造成伤害，则你摸一张牌且本阶段可以额外使用一张【杀】',
					];
					if(target.countCards('h')) list.unshift('其弃置');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(game.hasPlayer(targetx=>!trigger.targets.includes(targetx)&&player.canUse(trigger.card,targetx))) list.unshift('多指');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					player.chooseControl(list).set('choiceList',choiceList).set('ai',()=>{
						var controls=_status.event.controls;
						var trigger=_status.event.getTrigger();
						var player=trigger.player;
						var target=trigger.target;
						if(controls.includes('其弃置')&&_status.event.goon) return '其弃置';
						if(controls.includes('多指')){
							if(game.hasPlayer(targetx=>!trigger.targets.includes(targetx)&&player.canUse(trigger.card,targetx)&&get.effect(targetx,trigger.card,player,player)>0)) return '你弃置';
						}
						return 'cancel2';
					}).set('goon',function(){
						var d1=true;
						if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')) d1=false;
						if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
							return i.hasGaintag('sha_notshan');
						}))||player.hasSkillTag('directHit_ai',true,{
							target:target,
							card:trigger.card,
						},true)){
							if(!target.hasSkill('gangzhi')) d1=false;
							if(!target.hasSkillTag('filterDamage',null,{
								player:player,
								card:trigger.card,
							})&&get.attitude(player,target)<0) return true;
						}
						if(d1) return get.damageEffect(player,player,player)>0;
						return false;
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twhuzhong',target);
						if(result.control=='其弃置'){
							player.discardPlayerCard(target,'h',true);
							player.when('useCardAfter').filter(evt=>evt==trigger.getParent()).then(()=>{
								if(player.getHistory('sourceDamage',evt=>evt.card==trigger.card).length){
									player.draw();
									player.addTempSkill('twhuzhong_sha','phaseUseAfter');
									player.addMark('twhuzhong_sha',1,false);
								}
							});
							event.finish();
						}
						else{
							player.chooseTarget('请选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
								var trigger=_status.event.getTrigger();
								return !trigger.targets.includes(target)&&player.canUse(trigger.card,target);
							}).set('ai',function(target){
								var player=_status.event.player;
								var trigger=_status.event.getTrigger();
								return get.effect(target,trigger.card,player,player);
							});
						}
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.line(result.targets);
						trigger.getParent().targets.addArray(result.targets);
						game.log(result.targets,'成为了',trigger.card,'的额外目标');
					}
				},
				subSkill:{
					sha:{
						charlotte:true,
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('twhuzhong_sha');
							},
						},
					}
				}
			},
			twfenwang:{
				audio:2,
				trigger:{source:'damageBegin2',player:'damageBegin4'},
				filter:function(event,player,name){
					if(name=='damageBegin2'){
						return !event.hasNature()&&player.countCards('h')>event.player.countCards('h');
					}
					return event.hasNature();
				},
				forced:true,
				content:function(){
					'step 0'
					if(event.triggername=='damageBegin2'){
						player.line(trigger.player);
						trigger.num++;
						event.finish();
					}
					else player.chooseToDiscard('h','弃置一张手牌，或令此伤害+1').set('ai',function(card){
						return 8-get.value(card);
					});
					'step 1'
					if(!result.bool) trigger.num++;
				},
			},
			//夏侯子萼
			//差点和夏侯紫萼搞混
			twchengxi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return game.hasPlayer(target=>lib.skill.twchengxi.filterTarget(null,player,target));
				},
				filterTarget:function(card,player,target){
					if(player.getStorage('twchengxi_used').includes(target)||target==player) return false;
					return !player.hasSkillTag('noCompareSource')&&target.countCards('h')>0&&!target.hasSkillTag('noCompareTarget');
				},
				content:function(){
					'step 0'
					if(!player.storage.twchengxi_used){
						player.when('phaseUseAfter').then(()=>delete player.storage.twchengxi_used);
					}
					player.markAuto('twchengxi_used',[target]);
					player.draw();
					'step 1'
					if(player.canCompare(target)) player.chooseToCompare(target);
					else event.finish();
					'step 2'
					if(result.bool){
						player.addSkill('twchengxi_effect');
					}
					else{
						var card={name:'sha',isCard:true};
						if(target.canUse(card,player,false)) target.useCard(card,player,false);
					}
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(player.hasSkill('twchengxi_effect')) return 0;
							var hs=player.getCards('h').sort((a,b)=>b.number-a.number);
							var ts=target.getCards('h').sort((a,b)=>b.number-a.number);
							if(!hs.length||!ts.length) return 0;
							if(hs[0].number>ts[0].number) return -3;
							if(!target.canUse({name:'sha',isCard:true},player,false)) return -1;
							return 0;
						},
					},
				},
				subSkill:{
					effect:{
						charlotte:true,
						trigger:{player:'useCard1'},
						filter:function(event,player){
							return get.type(event.card)=='basic'||get.type(event.card)=='trick';
						},
						forced:true,
						popup:false,
						content:function(){
							player.removeSkill('twchengxi_effect');
							player.when('useCardAfter').filter(evt=>evt==trigger).then(()=>{
								if(trigger.targets){
									var card={
										name:trigger.card.name,
										isCard:true,
									};
									var targets=trigger.targets.filter(i=>i.isIn()&&player.canUse(card,i,false));
									if(targets.length) player.useCard(card,targets,false);
								}
							});
						},
						mark:true,
						marktext:'袭',
						intro:{content:'使用的下一张基本牌或非延时锦囊牌结算完毕后视为对相同目标再使用一张无次数限制的同名牌'},
					},
				},
			},
			//侠刘备
			twshenyi:{
				audio:2,
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if(!event.player.isIn()) return false;
					if(event.player.getHistory('damage').indexOf(event)!=0) return false;
					return event.player==player||player.inRange(event.player);
				},
				usable:1,
				direct:true,
				content:function*(event,map){
					var player=map.player,trigger=map.trigger;
					var list=get.inpileVCardList(info=>{
						return ['basic','trick','delay'].includes(info[0])&&!player.getStorage('twshenyi').includes(info[2]);
					});
					var dialog=[`###${get.prompt('twshenyi',trigger.player)}###<div class="text center">从牌堆中将一张牌作为“侠义”置于武将牌上${player!=trigger.player&&player.countCards('h')?'，然后将所有手牌交给其':''}</div>`,[list,'vcard']];
					var result=yield player.chooseButton(dialog).set('ai',function(button){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player,name=button.link[2];
						if(!get.cardPile2(card=>card.name==name)) return 0;
						var value=get.value({name:name});
						if(['tao','jiu','caochuan','wuxie'].includes(name)&&get.event().getRand()>0.4) return value*2;
						return value;
					});
					if(result.bool){
						var name=result.links[0][2],nature=result.links[0][3];
						var cardx={name:name,nature:nature};
						player.logSkill('twshenyi',trigger.player);
						player.popup(cardx);
						player.markAuto('twshenyi',[name]);
						game.log(player,'声明了',`#y${get.translation(cardx)}`);
						var card=get.cardPile2(card=>get.name(card,false)==name&&get.nature(card,false)==nature);
						if(card) player.addToExpansion([card],'gain2').gaintag.add('twshenyi');
						else{
							var card=get.cardPile2(card=>get.type2(card)==get.type2(name));
							if(card) player.addToExpansion([card],'gain2').gaintag.add('twshenyi');
							else player.chat('无牌可得？！');
						}
						if(trigger.player!=player&&player.countCards('h')){
							game.delayex();
							var skill='twshenyi_'+player.playerid;
							game.broadcastAll(lib.skill.twshenyi.createGainTag,skill,player.name);
							game.addVideo('skill',player,['twshenyi',[skill,player.name]]);
							var result2=yield player.chooseCard('伸义：是否将任意张牌交给'+get.translation(trigger.player)+'?',[1,player.countCards('h')]).set('ai',card=>{
								if(!_status.event.goon) return 0;
								return 7-get.value(card);
							}).set('goon',get.attitude(player,trigger.player)>0);
							if(result2.bool){
								player.give(result2.cards,trigger.player).gaintag.add(skill);
								player.addSkill('twshenyi_draw');
							}
						}
					}
					else player.storage.counttrigger.twshenyi--;
				},
				video:(player,info)=>lib.skill.twshenyi.createGainTag(info[0],info[1]),
				createGainTag:function(skill,name){
					if(!lib.skill[skill]){
						lib.skill[skill]={charlotte:true};
						lib.translate[skill]='义·'+get.translation(name);
					}
					if(!_status.postReconnect.twshenyi){
						_status.postReconnect.twshenyi=[
							lib.skill.twshenyi.createGainTag,[],[]
						];
					}
					_status.postReconnect.twshenyi[1].add(skill);
					_status.postReconnect.twshenyi[2].add(name);
				},
				marktext:'义',
				intro:{
					name:'侠义',
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					delete player.storage[skill];
					//var cards=player.getExpansions(skill);
					//if(cards.length) player.loseToDiscardpile(cards);
				},
				subSkill:{
					draw:{
						charlotte:true,
						audio:'twshenyi',
						trigger:{
							global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							var skill='twshenyi_'+player.playerid;
							return game.hasPlayer(target=>{
								var evt=event.getl(target);
								if(!evt||!evt.hs||!evt.hs.length) return false;
								for(let i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes(skill)) return true;
								}
								return false;
							});
						},
						forced:true,
						direct:true,
						content:function(){
							var skill='twshenyi_'+player.playerid;
							var num=0;
							var targets=game.filterPlayer(target=>{
								var evt=trigger.getl(target);
								var numx=0;
								if(!evt||!evt.hs||!evt.hs.length) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes(skill)) numx++;
								}
								if(numx>0) return num+=numx;
								return false;
							});
							if(num>0){
								player.logSkill('twshenyi_draw',targets);
								player.draw(num);
							}
						},
					},
				},
			},
			twxinghan:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.getExpansions('twshenyi').length>game.countPlayer();
				},
				check:function(event,player){
					if(player.hp>=3||(player.countCards('h')>=4&&player.getExpansions('twshenyi').every(card=>!player.hasValueTarget(card)||!get.tag(card,'damage')||!lib.skill.xunshi.isXunshi(card)))) return false;
					return player.getExpansions('twshenyi').some(card=>player.hasValueTarget(card));
				},
				direct:true,
				content:function*(event,map){
					var player=map.player;
					var result=yield player.chooseBool().set('createDialog',[
						get.prompt('twxinghan'),
						`<div class="text center">按顺序使用以下“侠义”牌。但是回合结束时你须弃置所有手牌并失去X点体力（X为你的体力值-1且X至少为1）</div>`,
						player.getExpansions('twshenyi').filter(card=>player.hasUseTarget(card)).reverse(),
						'hidden',
					]).set('choice',lib.skill.twxinghan.check(null,player));
					if(!result.bool){
						event.finish();
						return;
					}
					while(true){
						var cards=player.getExpansions('twshenyi').filter(card=>player.hasUseTarget(card)).reverse();
						if(!cards.length) break;
						yield player.chooseUseTarget(true,cards[0],false);
					}
					player.when('phaseEnd').then(()=>{
						if(player.countCards('h')) player.chooseToDiscard(player.countCards('h'),true);
						var num=Math.max(1,player.getHp()-1);
						player.loseHp(num);
					});
				},
				group:'twxinghan_init',
				subSkill:{
					init:{
						audio:'twxinghan',
						trigger:{
							player:['loseEnd','dying','phaseBefore','phaseAfter','dyingAfter','die'],
							global:['equipEnd','addJudgeEnd','gainEnd','loseAsyncEnd','addToExpansionEnd'],
						},
						filter:function(event,player){
							return (player.getExpansions('twshenyi').length&&event.name!='die'&&(_status.currentPhase!=player||player.isDying()))^player.hasSkill('twxinghan_in');
						},
						forced:true,
						firstDo:true,
						silent:true,
						forceDie:true,
						content:function(){
							if(player.getExpansions('twshenyi').length&&trigger.name!='die'&&(_status.currentPhase!=player||player.isDying())){
								var cards=player.getExpansions('twshenyi');
								var cardsx=cards.map(card=>{
									var cardx=ui.create.card();
									cardx.init(get.cardInfo(card));
									cardx._cardid=card.cardid;
									return cardx;
								});
								player.directgains(cardsx,null,'twxinghan');
								player.addSkill('twxinghan_in');
							}
							else player.removeSkill('twxinghan_in');
						},
					},
					in:{
						charlotte:true,
						audio:'twxinghan',
						trigger:{player:'addToExpansionEnd'},
						filter:function(event,player){
							return event.gaintag.includes('twshenyi');
						},
						forced:true,
						locked:false,
						silent:true,
						content:function(){
							'step 0'
							var cards2=player.getCards('s',card=>card.hasGaintag('twxinghan'));
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards2,player);
							}
							cards2.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
							'step 1'
							var cards=player.getExpansions('twshenyi');
							var cardsx=cards.map(card=>{
								var cardx=ui.create.card();
								cardx.init(get.cardInfo(card));
								cardx._cardid=card.cardid;
								return cardx;
							});
							player.directgains(cardsx,null,'twxinghan');
						},
						onremove:function(player){
							var cards2=player.getCards('s',card=>card.hasGaintag('twxinghan'));
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards2,player);
							}
							cards2.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
						},
						group:'twxinghan_use',
					},
					use:{
						charlotte:true,
						trigger:{player:['useCardBefore','respondBefore']},
						filter:function(event,player){
							var cards=player.getCards('s',card=>card.hasGaintag('twxinghan')&&card._cardid);
							return event.cards&&event.cards.some(card=>{
								return cards.includes(card);
							});
						},
						forced:true,
						popup:false,
						firstDo:true,
						content:function(){
							var idList=player.getCards('s',card=>card.hasGaintag('twxinghan')).map(i=>i._cardid);
							var cards=player.getExpansions('twshenyi');
							var cards2=[];
							for(var card of trigger.cards){
								var cardx=cards.find(cardx=>cardx.cardid==card._cardid);
								if(cardx) cards2.push(cardx);
							}
							var cards3=trigger.cards.slice();
							trigger.cards=cards2;
							trigger.card.cards=cards2;
							if(player.isOnline2()){
								player.send(function(cards,player){
									cards.forEach(i=>i.delete());
									if(player==game.me) ui.updatehl();
								},cards3,player);
							}
							cards3.forEach(i=>i.delete());
							if(player==game.me) ui.updatehl();
						},
					},
				},
			},
			//张纮
			twquanqian:{
				audio:2,
				sunbenSkill:true,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('twquanqian_sunben')&&player.countCards('h')&&game.countPlayer()>1;
				},
				filterCard:function(card,player){
					return !ui.selected.cards.some(cardx=>get.suit(cardx,player)==get.suit(card,player));
				},
				selectCard:[1,4],
				check:function(card){
					return 1/(get.value(card)||0.5);
				},
				position:'h',
				complexCard:true,
				discard:false,
				lose:false,
				delay:false,
				filterTarget:lib.filter.notMe,
				usable:1,
				content:function(){
					'step 0'
					player.addSkill('twquanqian_sunben');
					player.give(cards,target);
					if(cards.length<2) event.finish();
					'step 1'
					var card=get.cardPile2(card=>get.type(card)=='equip');
					if(card) player.gain(card,'gain2');
					'step 2'
					if(player.countCards('h')>=target.countCards('h')){
						if(target.countCards('h')) event._result={index:1};
						else event.finish();
					}
					else{
						var str=get.translation(target);
						player.chooseControl().set('choiceList',[
							'将手牌数摸至与'+str+'相同',
							'观看'+str+'的手牌并获得其一种花色的所有手牌',
						]).set('ai',()=>{
							var player=_status.event.player;
							var target=_status.event.target;
							if(target.countCards('h')-player.countCards('h')>target.countCards('h')/4||get.attitude(player,target)>0) return 0;
							return 1;
						}).set('target',target);
					}
					'step 3'
					if(result.index==0){
						player.drawTo(target.countCards('h'));
						event.finish();
						return;
					}
					var list=[];
					var dialog=['劝迁：获得'+get.translation(target)+'一种花色的所有牌'];
					for(var suit of lib.suit.concat('none')){
						if(target.countCards('h',{suit:suit})){
							dialog.push('<div class="text center">'+get.translation(suit+'2')+'牌</div>');
							dialog.push(target.getCards('h',{suit:suit}));
							list.push(suit);
						}
					}
					if(!list.length){
						event.finish();
						return;
					}
					player.chooseControl(list).set('dialog',dialog).set('ai',()=>{
						return _status.event.control;
					}).set('control',(()=>{
						var getv=(cards)=>cards.map(i=>get.value(i)).reduce((p,c)=>p+c,0);
						return list.sort((a,b)=>{
							return getv(target.getCards('h',{suit:b}))-getv(target.getCards('h',{suit:a}));
						})[0];
					})());
					'step 4'
					if(result.control) player.gain(target.getCards('h',{suit:result.control}),target,'give');
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							return target.countCards('h');
						},
					},
				},
				subSkill:{
					sunben:{
						charlotte:true,
						init:function(player){
							player.storage.twquanqian_sunben=0;
						},
						onremove:true,
						mark:true,
						intro:{
							markcount:function(num){
								return (num||0).toString();
							},
							content:'弃牌进度：#/6',
						},
						trigger:{
							player:'loseAfter',
							global:'loseAsyncAfter',
						},
						filter:function(event,player){
							if(event.type!='discard') return false;
							var evt=event.getl(player);
							return evt&&evt.hs&&evt.hs.length;
						},
						forced:true,
						popup:false,
						firstDo:true,
						content:function(){
							'step 0'
							player.addMark('twquanqian_sunben',trigger.getl(player).hs.length,false);
							'step 1'
							if(player.countMark('twquanqian_sunben')>=6){
								player.removeSkill('twquanqian_sunben');
								player.popup('劝迁');
								game.log(player,'恢复了技能','#g【劝迁】');
							}
						},
					},
				},
			},
			twrouke:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter'
				},
				filter:function(event,player){
					var evt=event.getParent('phaseDraw');
					if(evt&&evt.player==player) return false;
					return event.getg(player).length>1;
				},
				forced:true,
				content:function(){
					player.draw();
				},
			},
			//张昭
			twlijian:{
				getCards:function(event){
					var cards=[];
					game.countPlayer2(function(current){
						current.checkHistory('lose',function(evt){
							if(evt.position==ui.discardPile&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards);
						})
					});
					game.checkGlobalHistory('cardMove',function(evt){
						if(evt.name=='cardsDiscard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards);
					});
					return cards.filterInD('d');
				},
				audio:2,
				sunbenSkill:true,
				trigger:{global:'phaseDiscardEnd'},
				filter:function(event,player){
					if(player.hasSkill('twlijian_sunben')) return false;
					if(event.player!=player&&event.player.isIn()){
						return lib.skill.twlijian.getCards(event).length;
					}
					return false;
				},
				prompt2:()=>'选择任意张本阶段进入弃牌堆的牌令其获得，然后你获得剩余的牌，若其获得的牌数大于你，则你可以对其造成1点伤害',
				logTarget:'player',
				content:function(){
					'step 0'
					player.addSkill('twlijian_sunben');
					var cards=lib.skill.twlijian.getCards(trigger),target=trigger.player;
					event.cards=cards;event.target=target;
					player.chooseToMove('力荐：请分配'+get.translation(target)+'和你获得的牌',true).set('list',[
						[get.translation(target)+'获得的牌',cards],
						['你获得的牌'],
					]).set('processAI',function(list){
						var player=_status.event.player;
						var target=_status.event.getTrigger().player;
						var att=get.attitude(player,target);
						var cards=_status.event.cards;
						var cardx=cards.filter(card=>card.name=='du');
						var cardy=cards.removeArray(cardx);
						switch(get.sgn(att)){
							case 1:
								return [cards,[]];
							case 0:
								return [cardx,cardy];
							case -1:
								var num=Math.ceil(cards.length/2)+(cards.length%2==0?1:0);
								if(num>1&&player.hasSkill('twchungang')) num--;
								if(get.damageEffect(target,player,player)<=0||num>2||cardx.length>cardy.length) return [cardx,cardy];
								var num2=cardy.length-cardx.length;
								num2=Math.ceil(num2/2)+(num2%2==0?1:0);
								cardy.sort((a,b)=>get.value(b)-get.value(a));
								cardx.addArray(cardy.slice(num,cardy.length));
								return [cardx,cardy.slice(0,num)];
						}
					}).set('cards',cards);
					'step 1'
					if(result.bool){
						target.gain(result.moved[0],'gain2');
						player.gain(result.moved[1],'gain2');
						if(result.moved[0].length>result.moved[1].length){
							player.chooseBool('是否对'+get.translation(target)+'造成1点伤害？').set('choice',get.damageEffect(target,player,player)>0);
						}
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.line(target);
						target.damage();
					}
				},
				subSkill:{
					sunben:{
						charlotte:true,
						init:function(player){
							player.storage.twlijian_sunben=0;
						},
						onremove:true,
						mark:true,
						intro:{
							markcount:function(num){
								return (num||0).toString();
							},
							content:'弃牌堆进入牌进度：#/8',
						},
						trigger:{global:['loseAfter','cardsDiscardAfter','loseAsyncAfter','equipAfter']},
						filter:function(event,player){
							var cards=event.getd();
							if(!cards.length) return false;
							var list=cards.slice();
							game.checkGlobalHistory('cardMove',function(evt){
								if(evt==event||evt.getParent()==event||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
								if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
								list.removeArray(evt.cards);
							},event);
							return list.length>0;
						},
						forced:true,
						popup:false,
						firstDo:true,
						content:function(){
							'step 0'
							var cards=trigger.getd().slice();
							game.checkGlobalHistory('cardMove',function(evt){
								if(evt==trigger||evt.getParent()==trigger||(evt.name!='lose'&&evt.name!='cardsDiscard')) return false;
								if(evt.name=='lose'&&evt.position!=ui.discardPile) return false;
								cards.removeArray(evt.cards);
							},trigger);
							player.addMark('twlijian_sunben',cards.length,false);
							'step 1'
							if(player.countMark('twlijian_sunben')>=8){
								player.removeSkill('twlijian_sunben');
								player.popup('力荐');
								game.log(player,'恢复了技能','#g【力荐】');
							}
						},
					},
				},
			},
			twchungang:{
				audio:2,
				trigger:{global:['gainAfter','loseAsyncAfter']},
				filter:function(event,player){
					var evt=event.getParent('phaseDraw');
					return game.hasPlayer(target=>{
						if(target==player||(evt&&evt.player==target)) return false;
						return event.getg(target).length>1&&target.countCards('he');
					});
				},
				forced:true,
				logTarget:function(event,player){
					var evt=event.getParent('phaseDraw');
					return game.filterPlayer(target=>{
						if(target==player||evt&&evt.player==target) return false;
						return event.getg(target).length>1&&target.countCards('he');
					});
				},
				content:function(){
					for(var i of lib.skill.twchungang.logTarget(trigger,player)){
						i.chooseToDiscard('he',true);
					}
				},
				ai:{
					//能和一技能有配合，但仍旧搅shi棍技能
					threaten:3,
				},
			},
			//海外主公技
			//张鲁
			twshijun: {
				unique: true,
				global: 'twshijun_global',
				audio: 2,
				zhuSkill: true,
				ai: { combo: 'yishe' },
				subSkill: {
					global: {
						audio: 'twshijun',
						usable: 1,
						enable: 'phaseUse',
						forceaudio: true,
						filter: function (event, player) {
							return player.group == 'qun' && game.hasPlayer(function (current) {
								return current != player && current.hasZhuSkill('twshijun', player) && !current.getExpansions('yishe').length;
							});
						},
						filterTarget: function (card, player, target) {
							return target != player && target.hasZhuSkill('twshijun', player) && !target.getExpansions('yishe').length;
						},
						prompt: '摸一张牌然后将一张牌作为“米”置于主公的武将牌上',
						content: function () {
							'step 0'
							player.draw();
							if (player.countCards('he')) player.chooseCard('将一张牌置于' + get.translation(target) + '的武将牌上', 'he', true);
							else event.finish();
							'step 1'
							if (result.bool) target.addToExpansion(result.cards, player, 'give').gaintag.add('yishe');
						},
						ai: {
							order: 7,
							result: {
								target: 1,
							},
						},
					},
				},
			},
			//张绣
			twjuxiang: {
				unique: true,
				global: 'twjuxiang_global',
				audio: 2,
				zhuSkill: true,
				subSkill: {
					global: {
						audio: 'twjuxiang',
						usable: 1,
						enable: 'phaseUse',
						forceaudio: true,
						filter: function (event, player) {
							return player.countCards('e') && player.group == 'qun' && game.hasPlayer(function (target) {
								return target != player && target.hasZhuSkill('twjuxiang', player) && player.countCards('e',card=>target.hasEmptySlot(get.subtype(card))||target.hasDisabledSlot(get.subtype(card)));
							});
						},
						filterTarget: function (card, player, target) {
							return target != player && target.hasZhuSkill('twjuxiang', player) && (target.hasEmptySlot(get.subtype(ui.selected.cards[0]))||target.hasDisabledSlot(get.subtype(ui.selected.cards[0])));
						},
						filterCard: { type: 'equip' },
						position: 'e',
						check: function (card) {
							return get.value(card);
						},
						prompt: '将装备区中的一张牌置入主公的装备区中或恢复主公的对应装备栏',
						discard: false,
						lose: false,
						content: function () {
							if (target.hasEmptySlot(get.subtype(cards[0]))) {
								player.$give(cards[0], target, false);
								target.equip(cards[0]);
							}
							else {
								target.gain(cards[0], player, 'give');
								target.enableEquip(get.subtype(cards[0]));
							}
						},
						ai: {
							order: 7,
							result: {
								target: 1,
							},
						},
					},
				},
			},
			//孙坚
			twpolu: {
				unique: true,
				audio: 'repolu',
				trigger: { global: ['dieAfter', 'die'] },
				forceDie: true,
				zhuSkill: true,
				filter: function (event, player, name) {
					if (!player.hasZhuSkill('twpolu')) return false;
					if (name == 'dieAfter' && event.source && event.source.group == 'wu') return true;
					if (name == 'die' && event.player.group == 'wu') return true;
					return false;
				},
				direct: true,
				content: function () {
					'step 0'
					if (!player.storage.twpolu) player.storage.twpolu = 0;
					event.num = player.storage.twpolu + 1;
					player.chooseTarget([1, Infinity], get.prompt('twpolu'), '令任意名角色摸' + get.cnNumber(event.num) + '张牌').set('forceDie', true).ai = function (target) {
						return get.attitude(_status.event.player, target);
					};
					'step 1'
					if (result.bool) {
						player.storage.twpolu++;
						result.targets.sortBySeat();
						player.logSkill('repolu', result.targets);
						game.asyncDraw(result.targets, num);
					}
					else event.finish();
					'step 2'
					game.delay();
				},
			},
			//孟获
			twqiushou: {
				unique: true,
				audio: 2,
				trigger: { global: 'useCardAfter' },
				filter: function (event, player) {
					if (event.card.name != 'nanman') return false;
					var num = 0, bool = false;
					for (var i of event.targets) {
						if (!i.isAlive()) bool = true;
						i.getHistory('damage', function (evt) {
							if (evt.getParent(2) == event) num += evt.num;
						});
					}
					return player.hasZhuSkill('twqiushou') && (bool || num > 3);
				},
				zhuSkill: true,
				forced: true,
				logTarget: function (event, player) {
					return game.filterPlayer(function (target) {
						return ['shu', 'qun'].includes(target.group);
					});
				},
				content: function () {
					'step 0'
					game.asyncDraw(lib.skill.twqiushou.logTarget(trigger.player));
					'step 1'
					game.delayx();
				},
			},
			//刘协
			twzhuiting:{
				unique:true,
				zhuSkill:true,
				audio:2,
				global:'twzhuiting_global',
				subSkill:{
					global:{
						hiddenWuxie:function(player,info){
							if(player.group!='wei'&&player.group!='qun') return false;
							const target=info.target,card=info.card;
							if(!target||target==player||!target.hasZhuSkill('twzhuiting')) return false;
							if(_status.connectMode&&player.countCards('hs')>0) return true;
							const color=get.color(card,false);
							if(color=='none') return false;
							return player.hasCard(card=>get.color(card)==color,'hes');
						},
						audio:'twzhuiting',
						forceaudio:true,
						enable:'chooseToUse',
						filter:function(event,player){
							if(event.type!='wuxie'||player.group!='wei'&&player.group!='qun') return false;
							const info=event.info_map,target=info.target,card=info.card;
							if(!target||target==player||!target.hasZhuSkill('twzhuiting')) return false;
							const color=get.color(card,false);
							if(color=='none') return false;
							return player.hasCard(card=>get.color(card)==color,'hes');
						},
						filterCard:function(card){
							const info=_status.event.info_map;
							return info&&get.color(card)==get.color(info.card,false);
						},
						viewAs:{name:'wuxie'},
						position:'hes',
						prompt:function(){
							const info=_status.event.info_map;
							return '将一张'+get.translation(get.color(info.card))+'牌当作【无懈可击】对'+get.translation(info.target)+'使用';
						},
						check:function(card){
							return 8-get.value(card);
						},
					},
				},
			},
			//刘繇
			twniju: {
				unique: true,
				audio: 2,
				zhuSkill: true,
				trigger: { player: 'compare', target: 'compare' },
				filter: function (event, player) {
					return !event.iwhile && player.hasZhuSkill('twniju');
				},
				direct: true,
				content: function () {
					'step 0'
					var list = ['我加', '他加', '我减', '他减', 'cancel2'];
					player.chooseControl(list).set('prompt', get.prompt2('twniju')).set('ai', function () { return ['我加', '他减'].randomGet() });
					'step 1'
					if (result.control != 'cancel2') {
						player.logSkill('twniju');
						var num = game.countPlayer(function (current) {
							return current.group == 'qun';
						});
						event.num = num;
						switch (result.control) {
							case '我加':
								player.popup('+', num);
								if (player == trigger.player) {
									trigger.num1 += num;
									if (trigger.num1 > 13) trigger.num1 = 13;
								}
								else {
									trigger.num2 += num;
									if (trigger.num2 > 13) trigger.num2 = 13;
								}
								game.log(player, '的拼点牌点数+', num);
								break;
							case '他加':
								trigger.target.popup('+', num);
								if (player == trigger.player) {
									trigger.num2 += num;
									if (trigger.num2 > 13) trigger.num2 = 13;
								}
								else {
									trigger.num1 += num;
									if (trigger.num1 > 13) trigger.num1 = 13;
								}
								game.log(trigger.target, '的拼点牌点数+', num);
								break;
							case '我减':
								player.popup('-', num);
								if (player == trigger.player) {
									trigger.num1 -= num;
									if (trigger.num1 < 1) trigger.num1 = 1;
								}
								else {
									trigger.num2 -= num;
									if (trigger.num2 < 1) trigger.num2 = 1;
								}
								game.log(player, '的拼点牌点数-', num);
								break;
							case '他减':
								trigger.target.popup('-', num);
								if (player == trigger.player) {
									trigger.num2 -= num;
									if (trigger.num2 < 1) trigger.num2 = 1;
								}
								else {
									trigger.num1 -= num;
									if (trigger.num1 < 1) trigger.num1 = 1;
								}
								game.log(trigger.target, '的拼点牌点数-', num);
								break;
						}
					}
					else event.finish();
					'step 2'
					if (trigger.num1 == trigger.num2) player.draw(num);
				},
			},
			//刘虞
			twchongwang: {
				init: function (player) {
					player.storage.twchongwang = [];
					player.storage.twchongwangx = [];
				},
				mod: {
					playerEnabled: function (card, player, target) {
						if (!player.hasZhuSkill('twchongwang')) return;
						if (get.tag(card, 'damage') > 0 && player.storage.twchongwangx.includes(target)) return false;
					},
					targetEnabled: function (card, player, target) {
						if (!target.hasZhuSkill('twchongwang')) return;
						if (get.tag(card, 'damage') > 0 && target.storage.twchongwangx.includes(player)) return false;
					},
				},
				locked:false,
				unique: true,
				onremove: true,
				global: 'twchongwang_global',
				group: 'twchongwang_clear',
				audio: 2,
				zhuSkill: true,
				subSkill: {
					clear: {
						charlotte: true,
						trigger: { player: 'phaseAfter' },
						direct: true,
						content: function () {
							player.storage.twchongwangx = [];
						},
					},
					global: {
						trigger: { player: 'phaseUseBegin' },
						filter: function (event, player) {
							return player.group == 'qun' && game.hasPlayer(function (current) {
								return current != player && current.hasZhuSkill('twchongwang', player) && !current.storage.twchongwang.includes(player);
							});
						},
						direct: true,
						content: function () {
							'step 0'
							player.chooseCardTarget({
								prompt: '崇望：是否将一张牌交给主公并获得双重庇护？',
								selectCard: 1,
								filterCard: true,
								filterTarget: function (card, player, target) {
									return target != player && target.hasZhuSkill('twchongwang', player) && !target.storage.twchongwang.includes(player);
								},
								position: 'he',
								ai1: function (card) {
									if (card.name == 'du') return 10;
									else if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
									var player = _status.event.player;
									if (ui.selected.cards.length > 4 || !game.hasPlayer(function (current) {
										return get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
									})) return 0;
									return 1 / Math.max(0.1, get.value(card));
								},
								ai2: function (target) {
									var player = _status.event.player, att = get.attitude(player, target);
									if (ui.selected.cards[0].name == 'du') return -att;
									if (target.hasSkillTag('nogain')) att /= 6;
									return att;
								},
							});
							'step 1'
							if (result.bool) {
								player.logSkill('twchongwang', result.targets[0]);
								result.targets[0].gain(result.cards, player, 'giveAuto');
								result.targets[0].storage.twchongwang.push(player);
								result.targets[0].storage.twchongwangx.push(player);
							}
						},
					},
				},
			},
			//公孙范
			twhuiyuan:{
				audio:2,
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var type=get.type2(event.card);
					return !player.hasHistory('gain',evtx=>{
						if(evtx.getParent('phaseUse')!=evt) return false;
						return evtx.cards.some(card=>get.type2(card)==type);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var prompt2='展示一名角色的一张手牌。若展示牌为'+get.translation(get.type2(trigger.card))+'牌，则你获得之，否则其弃置之并摸一张牌。然后若其在你的攻击范围内，且你不在其攻击范围内，你对其造成1点伤害';
					player.chooseTarget(get.prompt('twhuiyuan'),prompt2,(card,player,target)=>{
						return target.countCards('h');
					}).set('ai',target=>{
						var player=_status.event.player;
						var att=get.attitude(player,target);
						return -att+(player.inRange(target)&&!target.inRange(player)?get.damageEffect(target,player,player)/3:0);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twhuiyuan',target);
						player.choosePlayerCard(target,'h',true,'回援：展示'+get.translation(target)+'一张手牌');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var card=result.cards[0];
						target.showCards([card],get.translation(target)+'【回援】展示');
						if(get.type2(card)==get.type2(trigger.card)){
							if(lib.filter.canBeGained(card,target,player)){
								player.gain(card,target,'giveAuto','bySelf');
							}
						}
						else{
							if(lib.filter.canBeDiscarded(card,target,player)){
								target.discard(card,'notBySelf');
								target.draw();
							}
						}
					}
					else event.finish();
					'step 3'
					if(player.inRange(target)&&!target.inRange(player)){
						game.log(player,'触发了','#y搏击','效果');
						player.line(target);
						target.damage();
					}
				},
				ai:{
					expose:0.2,
					threaten:3,
				}
			},
			twshoushou:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				filter:function(event,player){
					var cards=event.getg(player);
					if(!cards.length) return false;
					return game.hasPlayer(current=>{
						return event.getl(current).cards2.length;
					})&&game.hasPlayer(current=>{
						return current.inRange(player);
					});
				},
				forced:true,
				locked:false,
				group:'twshoushou_damage',
				onremove:function(player){
					if(player.countMark('twshoushou_plus')-player.countMark('twshoushou_minus')==0){
						player.removeSkill('twshoushou_distance');
					}
				},
				content:function(){
					player.addSkill('twshoushou_distance');
					player.addMark('twshoushou_plus',1,false);
				},
				ai:{
					halfneg:true,
				},
				subSkill:{
					damage:{
						trigger:{
							player:'damageEnd',
							source:'damageSource'
						},
						filter:function(event,player){
							return game.hasPlayer(current=>{
								return current!=player&&!current.inRange(player);
							});
						},
						forced:true,
						locked:false,
						content:function(){
							player.addSkill('twshoushou_distance');
							player.addMark('twshoushou_minus',1,false);
						}
					},
					distance:{
						mark:true,
						marktext:'绶',
						intro:{
							markcount:function(storage,player){
								return player.countMark('twshoushou_plus')-player.countMark('twshoushou_minus');
							},
							content:function(storage,player){
								var dis=player.countMark('twshoushou_plus')-player.countMark('twshoushou_minus');
								return '其他角色至你的距离'+(dis>=0?'+':'')+dis;
							}
						},
						mod:{
							globalTo:function(from,to,distance){
								return distance+to.countMark('twshoushou_plus')-to.countMark('twshoushou_minus');
							}
						}
					}
				}
			},
			//严纲
			twzhiqu:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					var count=get.cnNumber(game.countPlayer(current=>{
						return get.distance(player,current)<=1;
					}));
					player.chooseTarget(get.prompt('twzhiqu'),'选择一名其他角色并视为使用牌堆顶'+count+'张牌中的【杀】。若你与其均在对方的攻击范围内，你改为依次对其使用牌堆顶'+count+'张牌中的【杀】或锦囊牌。',lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						return get.effect(target,{name:'sha'},player,player)*(get.distance(player,target)==1?2:1);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twzhiqu',target);
						event.fight=player.inRange(target)&&target.inRange(player);
						if(event.fight) game.log(player,'触发了','#y搏击','效果');
						event.cards=game.cardsGotoOrdering(get.cards(game.countPlayer(current=>{
							return get.distance(player,current)<=1;
						}))).cards.slice();
					}
					else event.finish();
					'step 2'
					if(player.isIn()&&target.isIn()&&cards.length){
						do var card=cards.shift();
						while(get.name(card)!='sha'&&(!event.fight||get.type2(card)!='trick')&&cards.length);
						if(get.name(card)!='sha'&&(!event.fight||get.type2(card)!='trick')) return;
						player.showCards([card],get.translation(player)+'发动了【直取】');
						player.chooseUseTarget(card,true,false,'nodistance').set('filterTarget',function(card,player,target){
							var evt=_status.event;
							if(_status.event.name=='chooseTarget') evt=evt.getParent();
							if(target!=player&&target!=evt.twzhiqu_target) return false;
							return lib.filter.targetEnabledx(card,player,target);
						}).set('twzhiqu_target',target);
						event.redo();
					}
				}
			},
			twxianfeng:{
				audio:2,
				trigger:{source:'damageSource'},
				filter:function(event,player){
					if(!player.isPhaseUsing()) return false;
					if(player==event.player) return false;
					if(!event.player.isIn()) return false;
					if(!event.card) return false;
					return event.card.name=='sha'||get.type(event.card)=='trick'&&get.tag(event.card,'damage');
				},
				logTarget:'player',
				check:function(event,player){
					let att=get.attitude(player,event.player);
					if(att>0) return true;
					if(!player.hasSkill('twzhiqu')) return false;
					let cnt=game.countPlayer(current=>get.distance(player,current)===2);
					if(cnt>2||cnt===2&&Math.abs(att)<2||cnt&&Math.abs(att)<1) return true;
					return false;
				},
				content:function(){
					'step 0'
					var target=trigger.player;
					event.target=target;
					target.chooseControl().set('choiceList',[
						'你摸一张牌，然后直到'+get.translation(player)+'下个回合开始时，其至其他角色的距离-1',
						get.translation(player)+'摸一张牌，然后直到其下个回合开始时，你至其的距离-1',
					]).set('prompt','先锋：请选择一项').set('ai',()=>{
						return _status.event.choice;
					}).set('choice',function(){
						var att=get.attitude(target,player);
						if(att===0) return 0;
						if(player.hasSkill('twzhiqu')){
							var cnt=game.countPlayer(current=>get.distance(player,current)===2);
							if(att>0){
								if(cnt||player.needsToDiscard(1)) return 0;
								return 1;
							}
							if(!cnt) return 0;
							if(cnt>=2||get.distance(target,player,'attack')===2||get.distance(target,player)===2) return 1;
							return 0;
						}
						if(att<0||player.needsToDiscard(1)&&game.hasPlayer(function(current){
							return current!==player&&current!==target&&!player.inRange(current);
						})) return 0;
						return [0,1].randomGet();
					}());
					'step 1'
					if(result.index==0){
						target.draw();
						player.addTempSkill('twxianfeng_me',{player:'phaseBegin'});
						player.addMark('twxianfeng_me',1,false);
					}
					else{
						player.draw();
						target.addSkill('twxianfeng_others');
						if(!target.storage.twxianfeng_others) target.storage.twxianfeng_others={};
						if(typeof target.storage.twxianfeng_others[player.playerid]!='number') target.storage.twxianfeng_others[player.playerid]=0;
						target.storage.twxianfeng_others[player.playerid]++;
					}
				},
				subSkill:{
					me:{
						charlotte:true,
						mark:true,
						intro:{content:'至其他角色的距离-#'},
						mod:{
							globalFrom:function(from,to,distance){
								return distance-from.countMark('twxianfeng_me');
							}
						}
					},
					others:{
						trigger:{global:['phaseBegin','die']},
						filter:function(event,player){
							return player.storage.twxianfeng_others&&player.storage.twxianfeng_others[event.player.playerid];
						},
						charlotte:true,
						mark:true,
						forced:true,
						intro:{
							markcount:function(storage,player){
								var max=0;
								for(var id in storage){
									if(storage[id]>max) max=storage[id];
								}
								return max;
							},
							content:function(storage,player){
								if(!storage) return '';
								var str='';
								var map=(_status.connectMode?lib.playerOL:game.playerMap);
								for(var id in storage){
									str+='至'+get.translation(map[id])+'的距离-'+storage[id]+'、';
								}
								return str.slice(0,-1);
							},
						},
						content:function(){
							delete player.storage.twxianfeng_others[trigger.player.playerid];
							if(get.is.empty(player.storage.twxianfeng_others)) player.removeSkill('twxianfeng_others');
						},
						mod:{
							globalFrom:function(from,to,distance){
								if(from.storage.twxianfeng_others&&typeof from.storage.twxianfeng_others[to.playerid]=='number') return distance-from.storage.twxianfeng_others[to.playerid];
							}
						}
					},
				}
			},
			//夏侯紫萼
			twxuechang:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						if(!target.countGainableCards(player,'he')) event.finish();
						else player.gainPlayerCard(target,'he',true);
					}
					else{
						player.damage(target);
						player.addSkill('twxuechang_add');
						if(!player.storage.twxuechang_add) player.storage.twxuechang_add={};
						if(!player.storage.twxuechang_add[target.playerid]) player.storage.twxuechang_add[target.playerid]=0;
						player.storage.twxuechang_add[target.playerid]++;
						player.markSkill('twxuechang_add');
						event.finish();
					}
					'step 2'
					var card=result.cards[0];
					if(get.type(card)=='equip'){
						var card={name:'sha',isCard:true};
						if(player.canUse(card,target,false)) player.useCard(card,target,'noai',false);
					}
				},
				ai:{
					order:6.5,
					result:{
						target:function(player,target){
							var hs=player.getCards('h').sort(function(a,b){
								return get.number(b)-get.number(a);
							});
							var ts=target.getCards('h').sort(function(a,b){
								return get.number(b)-get.number(a);
							});
							if(!hs.length||!ts.length) return 0;
							if(get.number(hs[0])>get.number(ts[0])||get.number(hs[0])-ts.length>=(9+Math.min(2,player.hp/2))) return get.sgnAttitude(player,target)*get.effect(target,{name:'shunshou_copy2'},player,player);
							return 0;
						}
					}
				},
				subSkill:{
					add:{
						audio:'twxuechang',
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							return player.storage.twxuechang_add&&player.storage.twxuechang_add[event.player.playerid];
						},
						forced:true,
						charlotte:true,
						content:function(){
							trigger.num+=player.storage.twxuechang_add[trigger.player.playerid];
							delete player.storage.twxuechang_add[trigger.player.playerid];
							if(get.is.empty(player.storage.twxuechang_add)) player.removeSkill('twxuechang_add');
							else player.markSkill('twxuechang_add');
						},
						marktext:'偿',
						intro:{
							content:function(storage,player){
								if(!storage) return '';
								var str='';
								var map=(_status.connectMode?lib.playerOL:game.playerMap);
								for(var i in storage){
									str+='<li>下次对'+get.translation(map[i])+'造成的伤害+'+storage[i];
								}
								return str;
							}
						}
					}
				}
			},
			twduoren:{
				audio:2,
				trigger:{source:'dieAfter'},
				check:function(event,player){
					if(player.hp<3&&!player.isDamaged()) return false;
					var skills=event.player.getSkills(null,false,false).filter(skill=>{
						if(player.hasSkill(skill,null,false,false)) return false;
						var info=get.info(skill);
						return info&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte;
					});
					return skills.length>0;
				},
				group:'twduoren_remove',
				prompt2:function(event,player){
					var skills=event.player.getSkills(null,false,false).filter(skill=>{
						if(player.hasSkill(skill,null,false,false)) return false;
						var info=get.info(skill);
						return info&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte;
					});
					var str='';
					for(var i of skills){
						str+='〖'+get.translation(i)+'〗、';
					}
					str=str.slice(0,str.length-1);
					return '减1点体力上限，然后'+(str.length?'获得'+str:'听一句技能配音');
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.loseMaxHp();
					'step 1'
					var skills=trigger.player.getSkills(null,false,false).filter(skill=>{
						if(player.hasSkill(skill,null,false,false)) return false;
						var info=get.info(skill);
						return info&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte;
					});
					if(skills.length){
						for(var i of skills) player.addSkillLog(i);
						player.markAuto('twduoren',skills);
						game.broadcastAll(function(list){
							game.expandSkills(list);
							for(var i of list){
								var info=lib.skill[i];
								if(!info) continue;
								if(!info.audioname2) info.audioname2={};
								info.audioname2.xia_xiahouzie='twduoren';
							}
						},skills);
					}
				},
				subSkill:{
					remove:{
						trigger:{source:'dying'},
						filter:function(event,player){
							return event.player!=player&&player.getStorage('twduoren').some(skill=>{
								return player.hasSkill(skill,null,false,false);
							});
						},
						forced:true,
						locked:false,
						content:function(){
							for(var i of player.getStorage('twduoren')){
								player.removeSkill(i);
								game.log(player,'失去了技能','#g【'+get.translation(i)+'】');
							}
							delete player.storage.twduoren;
						}
					}
				}
			},
			//赵娥
			twyanshi:{
				audio:2,
				trigger:{global:'phaseBefore',player:'enterGame'},
				forced:true,
				locked:false,
				direct:true,
				onremove:true,
				intro:{
					content:'players'
				},
				filter:function(event,player){
					return game.hasPlayer(current=>current!=player)&&(event.name!='phase'||game.phaseNumber==0);
				},
				group:['twyanshi_hurt','twyanshi_damage'],
				content:function(){
					'step 0'
					player.chooseTarget('言誓：选择一名其他角色',lib.filter.notMe,true).set('ai',target=>get.attitude(_status.event.player,target));
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twyanshi',target);
						player.markAuto('twyanshi',[target]);
					}
				},
				mod:{
					targetInRange:function(card,player,target){
						if(target.hasMark('twyanshi_mark')) return true;
					},
				},
				subSkill:{
					hurt:{
						audio:'twyanshi',
						trigger:{
							global:'damageEnd',
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							if(!event.source||!event.source.isIn()) return false;
							return player==event.player&&!player.getStorage('twyanshi').includes(event.source)||player!=event.source&&player.getStorage('twyanshi').includes(event.player);
						},
						content:function(){
							trigger.source.addMark('twyanshi_mark',1);
						}
					},
					damage:{
						audio:'twyanshi',
						trigger:{
							source:['damageBegin1','damageSource'],
						},
						forced:true,
						locked:false,
						filter:function(event,player){
							return event.player.hasMark('twyanshi_mark');
						},
						content:function(){
							'step 0'
							if(event.triggername=='damageBegin1'){
								trigger.num++;
							}
							else{
								player.draw(trigger.num);
								trigger.player.removeMark('twyanshi_mark',trigger.player.countMark('twyanshi_mark'));
							}
						}
					},
					mark:{
						marktext:'誓',
						intro:{
							name:'誓',
							name2:'誓',
							content:'mark'
						},
					}
				}
			},
			twrenchou:{
				audio:2,
				trigger:{global:'die'},
				forced:true,
				forceDie:true,
				filter:function(event,player){
					if(!event.source||!event.source.isIn()) return false;
					if(event.player==player){
						return player.getStorage('twyanshi').some(i=>i.isIn()&&i.hp>0);
					}
					if(player.getStorage('twyanshi').includes(event.player)){
						return player.isIn()&&player.hp>0;
					}
					return false;
				},
				logTarget:'source',
				line:false,
				skillAnimation:true,
				animationColor:'water',
				global:'twrenchou_ai',
				content:function(){
					'step 0'
					var avengers=[];
					if(trigger.player==player){
						avengers=player.getStorage('twyanshi').filter(i=>i.isIn()&&i.hp>0);
					}
					if(player.getStorage('twyanshi').includes(trigger.player)){
						avengers=[player];
					}
					event.avengers=avengers;
					'step 1'
					var avenger=event.avengers.shift();
					avenger.line(trigger.source,'fire');
					trigger.source.damage(avenger,avenger.hp);
					'step 2'
					if(event.avengers.length&&trigger.source.isIn()) event.goto(1);
				},
				ai:{
					combo:'twyanshi',
				},
				subSkill:{
					ai:{
						ai:{
							effect:{
								target:function(card,player,target){
									if(!get.tag(card,'damage')) return;
									if(target.hp>1) return;
									var num=0;
									game.filterPlayer(current=>{
										if(current.getStorage('twyanshi').some(i=>target==i)){
											num+=current.hp;
										}
									});
									var targets=target.getStorage('twyanshi').filter(i=>i.isIn());
									for(var targetx of targets){
										num+=targetx.hp;
									}
									if(num>=player.hp) return 0;
									if(num>0) return [1,0,0,0.5-1.5*num];
								}
							}
						}
					}
				}
			},
			//侠典韦
			twliexi:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return player.countCards('he');
				},
				direct:true,
				content:function(){
					'step 0'
					var list=[[],[]];
					for(var current of game.players){
						if(current==player) continue;
						var cards=[];
						var weapon=false;
						for(var card of player.getCards('he')){
							if(!lib.filter.cardDiscardable(card,player)) continue;
							if(get.subtype(card)=='equip1'&&!ui.selected.cards.some(i=>get.subtype(i)=='equip1')){
								if(16-get.value(card)>0){
									cards.push(card);
									weapon=true;
								}
							}
							if(7-get.value(card)>0) cards.push(card);
						}
						if(cards.length>current.hp){
							var val=0;
							for(var card of cards){
								if(get.subtype(card)!='equip1') val+=get.value(card);
							}
							if(val<30) list[0].push(current);
						}
						if(weapon&&player.hp>2||get.damageEffect(player,current,player)>10) list[1].push(current);
					}
					list[0].sort((a,b)=>{
						return get.damageEffect(b,player,player)-get.damageEffect(a,player,player);
					});
					player.chooseCardTarget({
						filterCard:lib.filter.cardDiscardable,
						selectCard:[1,Infinity],
						position:'he',
						filterTarget:lib.filter.notMe,
						prompt:get.prompt2('twliexi'),
						targetsx:[list[0][0],list[1][0]],
						ai1:function(card){
							var targetx=_status.event.targetsx[0];
							var hasWeapon=ui.selected.cards.some(i=>get.subtype(i)=='equip1');
							if(!targetx){
								var targetx=_status.event.targetsx[1];
								if(get.subtype(card)=='equip1'&&!hasWeapon) return 30-get.value(card);
								return -get.value(card);
							}
							if(ui.selected.cards.length>targetx.hp) return 0;
							if(get.subtype(card)=='equip1'&&!hasWeapon) return 30-get.value(card);
							return 7-get.value(card);
						},
						ai2:function(target){
							var targetx=_status.event.targetsx[0]||_status.event.targetsx[1];
							if(targetx==target) return 10;
							return 0;
						},
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						var cards=result.cards;
						player.logSkill('twliexi',target);
						player.discard(cards);
						if(cards.length>target.hp) target.damage();
						else player.damage(target);
						var goon=false;
						for(var card of cards){
							if(get.subtype(card)=='equip1'){
								goon=true;
								break;
							}
						}
						if(!goon) event.finish();
					}
					else event.finish();
					'step 2'
					game.delayx();
					target.damage();
				}
			},
			twshezhong:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					var damage=player.getHistory('sourceDamage').length;
					if(damage){
						player.chooseTarget(get.prompt('twshezhong'),'令至多'+get.cnNumber(damage)+'名其他角色下个摸牌阶段的摸牌数-1',[1,damage],lib.filter.notMe).set('ai',target=>{
							return -get.attitude(_status.event.player,target);
						});
					}
					else event.goto(2);
					'step 1'
					if(result.bool){
						var targets=result.targets;
						player.logSkill('twshezhong',targets);
						for(var target of targets){
							target.addSkill('twshezhong_minus');
							target.addMark('twshezhong_minus',1,false);
						}
					}
					'step 2'
					var targets=[];
					for(var evt of player.getHistory('damage')){
						if(evt.source&&evt.source.isIn()) targets.add(evt.source);
					}
					if(targets.length){
						player.chooseTarget(get.prompt('twshezhong'),'将手牌摸至一名与一名本回合对你造成过伤害的角色的体力值相同，且至多摸至五张',(card,player,target)=>{
							return _status.event.targets.includes(target);
						}).set('ai',target=>{
							return Math.max(0.1,target.hp-_status.event.player.countCards('h'));
						}).set('targets',targets);
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twshezhong',target);
						var num=Math.min(target.hp,5)-player.countCards('h');
						if(num>0) player.draw(num);
					}
				},
				subSkill:{
					minus:{
						trigger:{player:'phaseDrawBegin'},
						forced:true,
						onremove:true,
						content:function(){
							var num=player.countMark('twshezhong_minus');
							trigger.num-=num;
							game.log(player,'的额定摸牌数','#g-'+num);
							player.removeSkill('twshezhong_minus');
						},
						mark:true,
						intro:{
							content:'额定摸牌数-#',
						},
					}
				}
			},
			//侠鲁肃
			twkaizeng:{
				audio:2,
				global:'twkaizeng_want',
				refuseInfo:['不给','拒绝'],
				subSkill:{
					want:{
						audio:'twkaizeng',
						forceaudio:true,
						enable:'phaseUse',
						usable:1,
						charlotte:true,
						filter:function(event,player){
							return game.hasPlayer(current=>{
								return current!=player&&current.hasSkill('twkaizeng');
							});
						},
						chooseButton:{
							dialog:function(event,player){
								var targets=game.filterPlayer(current=>{
									return current!=player&&current.hasSkill('twkaizeng');
								});
								return ui.create.dialog('###慨赠###'+'选择一种基本牌的牌名或非基本牌的类型，然后令'+get.translation(targets)+(targets.length>1?'中的一人':'')+'选择是否交给你任意张牌');
							},
							chooseControl:function(){
								var list=[];
								var basic=[];
								for(var i=0;i<lib.inpile.length;i++){
									var name=lib.inpile[i];
									var type=get.type(name,'trick');
									if(type=='basic'){
										list.push(name);
										basic.push(name);
									}
									else list.add(type);
								}
								list.push('cancel2');
								return list;
							},
							check:function(event,player){
								if(Math.random()<0.4){
									var list=_status.event.controls.slice();
									list.remove('du');
									return list.randomGet();
								}
								var targets=game.filterPlayer(current=>current!=player&&current.hasSkill('twkaizeng'));
								targets.sort((a,b)=>get.attitude(player,b)-get.attitude(player,a));
								var cards=targets[0].getCards('h');
								var list=[];
								for(var card of cards){
									var type=get.type2(card);
									if(type=='basic') list.add(get.name(card));
									else list.add(type);
								}
								var need=['trick','equip'].randomSort();
								need.addArray(['sha','jiu'].randomSort());
								for(var type of need){
									if(list.includes(type)) return type;
								}
								return list.randomGet();
							},
							backup:function(result,player){
								return {
									audio:'twkaizeng',
									type:result.control,
									log:false,
									delay:false,
									filterTarget:function(card,player,target){
										return target.hasSkill('twkaizeng');
									},
									selectTarget:function(){
										var player=_status.event.player;
										var targets=game.filterPlayer(function(current){
											return current!=player&&current.hasSkill('twkaizeng');
										});
										return targets.length>1?1:-1;
									},
									prepare:function(cards,player,targets){
										targets[0].logSkill('twkaizeng_want',player);
									},
									content:function(){
										'step 0'
										var type=lib.skill.twkaizeng_want_backup.type;
										var isbasic=lib.card[type];
										target.chooseCard('慨赠：是否交给'+get.translation(player)+'任意张手牌？','若你以此法：交给其至少两张牌，你摸一张牌；交给其的牌包含其选择的牌名或类型，你获得一张不为此牌名或类型的牌',[1,Infinity]).set('ai',card=>{
											if(!_status.event.goon) return -get.value(card);
											var player=_status.event.player,target=_status.event.getParent().player;
											if(ui.selected.cards.length>player.countCards('h')/2&&ui.selected.cards.length>=2) return 0;
											var type=_status.event.type;
											var isbasic=lib.card[type];
											var add=0;
											if(!ui.selected.cards.some(i=>get[isbasic?'name':'type2'](i,target)==type)) add+=3;
											if(ui.selected.cards.length<2) add+=3;
											return get.value(card,target)-get.value(card,player)+add;
										}).set('type',type).set('goon',get.attitude(target,player)>0);
										'step 1'
										if(result.bool){
											var cards=result.cards;
											event.cards=cards;
											target.give(cards,player);
										}
										else{
											var refuseInfo=lib.skill.twkaizeng.refuseInfo.slice();
											if(get.attitude(target,player)<0) refuseInfo.push('没门');
											target.chat(refuseInfo.randomGet());
											event.finish();
										}
										'step 2'
										if(cards.length>1) target.draw();
										'step 3'
										var type=lib.skill.twkaizeng_want_backup.type;
										var isbasic=lib.card[type];
										var fn=isbasic?'name':'type2';
										if(cards.some(card=>get[fn](card,player)==type)){
											var card=get.cardPile(cardx=>{
												return get[fn](cardx,target)!=type;
											});
											if(card) target.gain(card,'gain2');
										}
										'step 4'
										game.delayx();
									},
									ai:{
										result:{
											target:1,
										},
									},
								}
							},
							prompt:()=>'请选择一名有【慨赠】的角色',
						},
						ai:{
							order:10,
							result:{
								player:function(player){
									var targets=game.filterPlayer(current=>{
										return current!=player&&current.hasSkill('twkaizeng');
									});
									for(var i of targets) if(get.attitude(player,i)>0) return 1;
									return 0;
								}
							},
						},
					},
					want_backup:{},
				},
				ai:{
					threaten:3
				}
			},
			twyangming:{
				audio:2,
				trigger:{
					player:'phaseUseEnd',
				},
				frequent:true,
				filter:function(event,player){
					return player.hasHistory('useCard',evt=>evt.getParent('phaseUse')==event);
				},
				content:function(){
					var types=[];
					var history=player.getHistory('useCard',evt=>evt.getParent('phaseUse')==trigger);
					for(var evt of history){
						types.add(get.type2(evt.card));
					}
					var num=types.length;
					player.draw(num);
					player.addTempSkill('twyangming_limit');
					player.addMark('twyangming_limit',num,false);
					game.log(player,'本回合的手牌上限','#g+'+num);
				},
				subSkill:{
					limit:{
						charlotte:true,
						onremove:true,
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('twyangming_limit');
							}
						}
					}
				}
			},
			//邴原
			twbingde:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')&&player.getStorage('twbingde_clear').length<4;
				},
				onChooseToUse:function(event){
					if(event.type=='phase'&&!game.online){
						var map={};
						event.player.getHistory('useCard',evt=>{
							var evtx=evt.getParent('phaseUse'),suit=get.suit(evt.card);
							if(!lib.suit.includes(suit)) return;
							if(evtx!=event.getParent('phaseUse')) return;
							if(typeof map[suit]!='number') map[suit]=0;
							map[suit]++;
						});
						event.set('twbingde_map',map);
					}
				},
				chooseButton:{
					dialog:function(event,player){
						var str=get.translation('twbingde_info'),str2='';
						if(event.twbingde_map){
							str2='<div class="text center">本回合使用牌对应花色数：</div>';
							str2+='<div class="text center">';
							for(var suit of lib.suit){
								str2+=get.translation(suit)+'：'+get.cnNumber(event.twbingde_map[suit]||0)+'张；';
							}
							str2=str2.slice(0,str2.length-1)+'</div>';
						}
						return ui.create.dialog('###秉德###'+str,str2);
					},
					chooseControl:function(event,player){
						var list=lib.suit.slice();
						list.removeArray(player.getStorage('twbingde_clear'));
						list.push('cancel2');
						return list;
					},
					check:function(event,player){
						var map=event.twbingde_map;
						var suit=lib.suit.filter(i=>!player.getStorage('twbingde_clear').includes(i)).sort((a,b)=>{
							return map[b]-map[a];
						})[0];
						if(map[suit]==0) return 'cancel2';
						return suit;
					},
					backup:function(result,player){
						return {
							audio:'twbingde',
							filterCard:true,
							selectCard:1,
							position:'he',
							suit:result.control,
							check:function(card){
								var suit=lib.skill.twbingde.suit;
								if(get.suit(card)==suit) return 10-get.value(card);
								return 6-get.value(card);
							},
							content:function(){
								'step 0'
								var suit=lib.skill.twbingde_backup.suit,num=0;
								player.popup(suit+2);
								game.log(player,'选择了','#y'+suit+2);
								player.addTempSkill('twbingde_clear','phaseUseAfter');
								player.markAuto('twbingde_clear',[suit]);
								player.getHistory('useCard',evt=>{
									var evtx=evt.getParent('phaseUse'),suitx=get.suit(evt.card);
									if(!evtx||evtx!=event.getParent('phaseUse')||suit!=suitx) return false;
									num++;
								});
								if(num>0) player.draw(num);
								'step 1'
								if(get.suit(cards[0],player)==lib.skill.twbingde_backup.suit){
									delete player.getStat('skill').twbingde;
								}
							},
							ai:{
								result:{
									player:1,
								},
							},
						}
					},
					prompt:()=>'秉德：弃置一张牌',
				},
				ai:{
					order:2,
					result:{player:1}
				},
				subSkill:{
					backup:{},
					clear:{
						charlotte:true,
						onremove:true,
					}
				},
			},
			twqingtao:{
				audio:2,
				trigger:{player:'phaseDrawEnd'},
				filter:function(event,player){
					return player.countCards('he');
				},
				direct:true,
				group:'twqingtao_jieshu',
				content:function(){
					'step 0'
					player.chooseCard(get.prompt2('twqingtao'),'he',lib.filter.cardRecastable).set('ai',function(card){
						if(card.name=='jiu'||get.type(card)!='basic') return 10-get.value(card);
						return 6-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('twqingtao');
						player.recast(result.cards);
						if(get.name(result.cards[0])=='jiu'||get.type(result.cards[0],false,player)!='basic') player.draw();
					}
				},
				subSkill:{
					jieshu:{
						audio:'twqingtao',
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return player.countCards('he')>0&&!player.hasHistory('useSkill',evt=>evt.skill=='twqingtao');
						},
						direct:true,
						content:function(){
							var next=game.createEvent('twqingtao');
							next.player=player;
							next.setContent(lib.skill.twqingtao.content);
						},
					}
				}
			},
			//牛董
			twjuntun:{
				audio:2,
				trigger:{
					global:['phaseBefore','dieAfter'],
					player:'enterGame',
				},
				init:function(player){lib.skill.baonvezhi.change(player,0)},
				direct:true,
				derivation:['twxiongjun','baonvezhi_faq'],
				group:'twjuntun_extra',
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&game.hasPlayer(current=>{
						return !current.hasSkill('twxiongjun');
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twjuntun'),'令一名角色获得〖凶军〗',(card,player,target)=>{
						return !target.hasSkill('twxiongjun');
					}).set('ai',target=>get.attitude(player,target)-2);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twjuntun',target);
						target.addSkillLog('twxiongjun');
						if(target!=player) player.addExpose(0.25);
					}
				},
				subSkill:{
					extra:{
						audio:2,
						trigger:{global:'damageSource'},
						forced:true,
						locked:false,
						filter:function(event,player){
							return event.source&&event.source.hasSkill('twxiongjun')&&event.source!=player;
						},
						logTarget:'source',
						content:function(){
							lib.skill.baonvezhi.change(player,trigger.num);
						}
					},
				},
			},
			baonvezhi:{
				audio:2,
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				silent:true,
				forced:true,
				charlotte:true,
				baonvezhi_max:5,
				change:function(player,num){
					var baonvezhi_max=lib.skill.baonvezhi.baonvezhi_max;
					player.addSkill('baonvezhi');
					var tmp=player.countMark('baonvezhi');
					if(tmp+num>baonvezhi_max) num=baonvezhi_max-tmp;
					else if(tmp+num<0) num=-tmp;
					if(num===0) return;
					player[num>0?'addMark':'removeMark']('baonvezhi',Math.abs(num),false);
					game.log(player,num>=0?'获得了':'失去了',get.cnNumber(Math.abs(num))+'点<span class="firetext">暴虐值</span>');
					player[player.countMark('baonvezhi')>0?'markSkill':'unmarkSkill']('baonvezhi');
				},
				filter:function(event,player){
					return player.countMark('baonvezhi')<lib.skill.baonvezhi.baonvezhi_max;
				},
				content:function(){
					lib.skill.baonvezhi.change(player,trigger.num);
				},
				marktext:'暴',
				intro:{
					name:'暴虐值',
					content:function(storage,player){
						return get.translation(player)+'的暴虐值为'+(player.storage.baonvezhi||0);
					}
				}
			},
			baonvezhi_faq:{},
			twxiongjun:{
				init:function(player){lib.skill.baonvezhi.change(player,0)},
				trigger:{source:'damageSource'},
				forced:true,
				usable:1,
				content:function(){
					var targets=game.filterPlayer(current=>current.hasSkill('twxiongjun')).sortBySeat();
					player.line(targets,'green');
					game.asyncDraw(targets);
				},
			},
			twxiongxi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				init:function(player){lib.skill.baonvezhi.change(player,0)},
				filterCard:()=>true,
				selectCard:function(){
					return (lib.skill.baonvezhi.baonvezhi_max||5)-_status.event.player.countMark('baonvezhi');
				},
				check:function(card){
					return 6-get.value(card);
				},
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					target.damage();
				},
				ai:{
					expose:0.25,
					order:8,
					result:{
						target:function(player,target){
							return get.damageEffect(target,player,player);
						}
					}
				}
			},
			twxiafeng:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.countMark('baonvezhi')>0;
				},
				init:function(player){lib.skill.baonvezhi.change(player,0)},
				direct:true,
				content:function(){
					'step 0'
					player.chooseButton(['黠凤：选择要消耗的暴虐值',[['tw_bn_1','tw_bn_2','tw_bn_3'],'vcard']],(button)=>{
						var num=player.countCards('hs',card=>get.tag(card,'damage')&&game.hasPlayer(current=>get.effect(current,card,player,player)>0));
						if(num<=0) return 0;
						if(num>=3) num=3;
						if(button.link[2]=='tw_bn_'+num) return 10;
						return 1;
					}).set('filterButton',(button)=>{
						var player=_status.event.player;
						var link=button.link[2];
						if(link[link.length-1]*1>player.storage.baonvezhi) return false;
						return true;
					});
					'step 1'
					if(result.bool){
						player.logSkill('twxiafeng');
						var link=result.links[0][2],num=link[link.length-1]*1;
						player.addTempSkill('twxiafeng_effect');
						player.storage.twxiafeng_effect=num;
						lib.skill.baonvezhi.change(player,-num);
					}
				},
				subSkill:{
					effect:{
						trigger:{player:'useCard'},
						filter:function(event,player){
							return !player.storage.twxiafeng_effect2;
						},
						forced:true,
						content:function(){
							var count=player.getHistory('useCard',evt=>evt.getParent('phaseUse').player==player).length;
							if(count==player.storage.twxiafeng_effect){
								player.storage.twxiafeng_effect2=true;
							}
							if(count<=player.storage.twxiafeng_effect){
								trigger.directHit.addArray(game.players);
								if(trigger.addCount!==false){
									trigger.addCount=false;
									var stat=player.getStat().card,name=trigger.card.name;
									if(typeof stat[name]=='number') stat[name]--;
								}
							}
						},
						onremove:function(player){
							delete player.storage.twxiafeng_effect;
							delete player.storage.twxiafeng_effect2;
						},
						mod:{
							targetInRange:function(card,player,target,now){
								if(!player.storage.twxiafeng_effect2) return true;
							},
							cardUsableTarget:function(card,player,target){
								if(!player.storage.twxiafeng_effect2) return true;
							},
							maxHandcard:function(player,num){
								return num+(player.storage.twxiafeng_effect||0);
							}
						},
					}
				}
			},
			//蒋济
			twjichou:{
				audio:2,
				enable:'chooseToUse',
				group:['twjichou_ban','twjichou_give'],
				filter:function(event,player){
					if(player.hasSkill('twjichou_used')&&player.hasSkill('twjichou_given')) return false;
					if(!player.hasSkill('twjichou_used')){
						var record=player.getStorage('twjichou');
						for(var i of lib.inpile){
							var type=get.type(i);
							if(type=='trick'&&!record.includes(i)&&event.filterCard({name:i,isCard:true},player,event)) return true;
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('急筹');
						if(!player.hasSkill('twjichou_used')&&!player.hasSkill('twjichou_given')&&event.type=='phase'&&player.countCards('h',card=>{
							return player.getStorage('twjichou').includes(get.name(card));
						})){
							dialog._chosenOpt=[];
							var table=document.createElement('div');
							table.classList.add('add-setting');
							table.style.margin='0';
							table.style.width='100%';
							table.style.position='relative';
							var list=['视为使用牌','交出锦囊牌'];
							for(var i of list){
								var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
								td.innerHTML='<span>'+i+'</span>';
								td.link=i;
								if(i==list[0]){
									td.classList.add('bluebg');
									dialog._chosenOpt.add(td);
								}
								td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
									if(_status.dragged) return;
									if(_status.clicked) return;
									if(_status.justdragged) return;
									_status.tempNoButton=true;
									_status.clicked=true;
									setTimeout(function(){
										_status.tempNoButton=false;
									},500);
									var link=this.link;
									if(link=='交出锦囊牌') game.uncheck();
									var current=this.parentNode.querySelector('.bluebg');
									if(current){
										current.classList.remove('bluebg');
										dialog._chosenOpt.remove(current);
									}
									dialog._chosenOpt.add(this);
									this.classList.add('bluebg');
									game.check();
								});
								table.appendChild(td);
								dialog.buttons.add(td);
							}
							dialog.content.appendChild(table);
						}
						var list=[],record=player.getStorage('twjichou');
						for(var name of lib.inpile){
							if(get.type(name)=='trick'&&!record.includes(name)&&event.filterCard({name:name,isCard:true},player,event)) list.push(['锦囊','',name]);
						}
						dialog.add([list,'vcard']);
						return dialog;
					},
					filter:function(button){
						if(_status.event.dialog){
							var opts=_status.event.dialog._chosenOpt;
							if(opts&&opts.length&&opts[0].link=='交出锦囊牌'&&typeof button.link!=typeof opts[0].link){
								return false;
							}
							return true;
						}
						return false;
					},
					select:function(){
						if(_status.event.dialog){
							var opts=_status.event.dialog._chosenOpt;
							return opts&&opts.length&&opts[0].link=='交出锦囊牌'?0:1;
						}
						return 0;
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						var player=_status.event.player;
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) return 0.1;
						return player.getUseValue({name:button.link[2]});
					},
					backup:function(links,player){
						var isUse=links.length==1;
						var backup=get.copy(lib.skill['twjichou_'+(isUse?'use':'give')]);
						if(isUse) backup.viewAs={name:links[0][2],isCard:true};
						return backup;
					},
					prompt:function(links,player){
						var isUse=links.length==1;
						return '急筹：'+(isUse?('视为使用'+get.translation(links[0][2])+''):'选择要交出的牌和要交给的目标');
					}
				},
				hiddenCard:function(player,name){
					if(player.hasSkill('twjichou_used')) return false;
					var type=get.type(name);
					return type=='trick'&&!player.getStorage('twjichou').includes(name);
				},
				marktext:'筹',
				intro:{
					markcount:function(storage,player){
						if(storage&&storage.length) return storage.length;
						return 0;
					},
					content:'已记录牌名：$',
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
				subSkill:{
					backup:{},
					used:{charlotte:true},
					given:{charlotte:true},
					ban:{
						trigger:{global:'useCard1'},
						filter:function(event,player){
							return player.getStorage('twjichou').includes(event.card.name);
						},
						forced:true,
						locked:false,
						silent:true,
						content:function(){
							trigger.directHit.add(player);
						},
						mod:{
							cardEnabled:function(card,player){
								if(player.getStorage('twjichou').includes(card.name)&&(get.position(card)=='h'||card.cards&&card.cards.some(i=>get.position(i)=='h'))) return false;
							},
							cardSavable:function(card,player){
								if(player.getStorage('twjichou').includes(card.name)&&(get.position(card)=='h'||card.cards&&card.cards.some(i=>get.position(i)=='h'))) return false;
							},
							aiValue:function(player,card){
								if(get.type(card)!='trick'||_status.twjichou_give_aiCheck) return;
								if(!player.getFriends().length&&player.getStorage('twjichou').includes(get.name(card))) return 0;
							},
							aiUseful:function(){
								return lib.skill.twjichou_ban.mod.aiValue.apply(this,arguments);
							},
						},
					},
					use:{
						filterCard:()=>false,
						selectCard:-1,
						audio:'twjichou',
						popname:true,
						onuse:function(links,player){
							player.markAuto('twjichou',[links.card.name]);
							player.syncStorage('twjichou');
							player.addTempSkill('twjichou_used');
						},
					},
					give:{
						audio:'twjichou',
						enable:'phaseUse',
						filter:function(event,player){
							return player.hasSkill('twjichou_used')&&!player.hasSkill('twjichou_given')&&player.countCards('h',i=>player.getStorage('twjichou').includes(get.name(i)));
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						filterCard:function(card,player){
							return player.getStorage('twjichou').includes(get.name(card));
						},
						check:function(card){
							_status.twjichou_give_aiCheck=true;
							var val=get.value(card);
							delete _status.twjichou_give_aiCheck;
							return val;
						},
						prompt:()=>'选择要交出的牌和要交给的目标',
						selectCard:1,
						discard:false,
						lose:false,
						delay:false,
						content:function(){
							player.give(cards,target);
							player.addTempSkill('twjichou_given','phaseUseAfter');
						},
						ai:{
							order:0.9,
							result:{
								target:function(player,target){
									if(target.hasSkillTag('nogain')) return 0;
									if(target.hasJudge('lebu')) return 0;
									return target.getCards('h',card=>player.getStorage('twjichou').includes(get.name(card))).reduce((p,c)=>p+(target.getUseValue(c)||1),0);
								}
							},
						}
					},
				}
			},
			twjilun:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					'step 0'
					var num=Math.min(Math.max(1,player.getStorage('twjichou').length),5);
					event.num=num;
					var choices=['选项一'];
					var choiceList=['摸'+get.cnNumber(num)+'张牌','视为使用一张在〖急筹〗记录内且不在〖机论〗记录内的普通锦囊牌'];
					if((!player.getStorage('twjichou').length)||player.getStorage('twjichou').filter(name=>{
						return !player.getStorage('twjilun').includes(name)&&player.hasUseTarget({name:name});
					}).length==0)
						choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					else choices.push('选项二');
					player.chooseControl(choices,'cancel2').set('choiceList',choiceList).set('prompt',get.prompt('twjilun')).set('ai',()=>{
						if(_status.event.choiceList.length==1||!player.getStorage('twjichou').length) return 0;
						var val=_status.event.num>3?Math.min(1.5,1+(_status.event.num-3)*0.1):1;
						for(var name of player.getStorage('twjichou')){
							if(player.getStorage('twjilun').includes(name)) continue;
							if(player.getUseValue({name:name})>4*val) return 1;
						}
						return 0;
					}).set('num',num);
					'step 1'
					if(result.control!='cancel2'){
						if(result.control=='选项一'){
							player.logSkill('twjilun');
							player.draw(num);
							event.finish();
						}
						else{
							var list=[];
							for(var name of player.getStorage('twjichou')){
								if(!player.getStorage('twjilun').includes(name)){
									list.push(['锦囊','',name]);
								}
							}
							player.chooseButton(['###机论###<div class="text center">是否视为使用一张〖急筹〗已记录的普通锦囊牌？</div>',[list,'vcard']]).set('filterButton',button=>{
								return _status.event.player.hasUseTarget({name:button.link[2]});
							}).set('ai',button=>{
								return _status.event.getParent().player.getUseValue({name:button.link[2]},null,true);
							});
						}
					} else event.finish();
					'step 2'
					if(result.bool){
						var card={name:result.links[0][2],isCard:true};
						player.chooseUseTarget(card,true).set('logSkill','twjilun');
						player.markAuto('twjilun',[card.name]);
						player.syncStorage('twjilun');
					} else event.goto(0);
				},
				marktext:'论',
				intro:{
					markcount:function(storage,player){
						if(storage&&storage.length) return storage.length;
						return 0;
					},
					content:'已记录牌名：$',
				},
				ai:{
					maixie:true,
					maixie_defend:true,
					threaten:0.7,
				}
			},
			//蹇硕
			twkunsi:{
				audio:2,
				enable:'phaseUse',
				onremove:true,
				derivation:'twlinglu',
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return player.canUse({name:'sha',isCard:true},current,false)&&current!=player&&!player.getStorage('twkunsi').includes(current);
					});
				},
				filterTarget:function(card,player,target){
					return player.canUse({name:'sha',isCard:true},target,false)&&target!=player&&!player.getStorage('twkunsi').includes(target);
				},
				content:function(){
					'step 0'
					player.markAuto('twkunsi',[target]);
					player.storage.twkunsi.sortBySeat();
					player.markSkill('twkunsi');
					player.useCard({name:'sha',isCard:true},target,false).animate=false;
					'step 1'
					if(!player.hasHistory('sourceDamage',function(evt){
						var card=evt.card;
						if(!card||card.name!='sha') return false;
						var evtx=evt.getParent('useCard');
						return evtx.card==card&&evtx.getParent()==event;
					})){
						player.line(target);
						target.markAuto('twlinglu',[player]);
						target.addAdditionalSkill('twkunsi_temp','twlinglu');
						player.markAuto('twkunsi_clear',[target]);
						player.addTempSkill('twkunsi_clear',{player:'phaseBegin'});
					}
				},
				intro:{content:'已对$发动过〖困兕〗'},
				ai:{
					order:function(){
						return get.order({name:'sha'})-0.1;
					},
					expose:0.2,
					result:{
						target:function(player,target){
							if(target.countCards('h')<=target.hp&&!target.mayHaveShan(player,'use',target.getCards('h',i=>{
								return i.hasGaintag('sha_notshan');
							}))&&get.effect(target,{name:'sha',isCard:true},player,player)>0) return -1;
							else if(target.countCards('h')>target.hp&&target.hp>2&&target.hasShan()) return 1;
							return 0;
						},
					},
				},
				subSkill:{
					clear:{
						forced:true,
						onremove:function(player,skill){
							var targets=player.getStorage(skill);
							for(var target of targets){
								if(target.isIn()){
									target.removeAdditionalSkill('twkunsi_temp');
								}
							}
						},
					},
				},
			},
			twlinglu:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player;
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twlinglu'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(target.countCards('hs')>4&&target.hp>=3) return att;
						if(player.getStorage('twlinglu').includes(target)) return -2*att;
						return -att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twlinglu',target);
						target.addTempSkill('twlinglu_order',{player:'phaseAfter'});
						if(!target.storage.twlinglu_settle) target.storage.twlinglu_settle=[];
						target.storage.twlinglu_settle.unshift([player,1]);
						if(player.getStorage('twlinglu').includes(target)) player.chooseBool('是否令'+get.translation(target)+'于〖令戮〗失败时进行两次结算？').set('ai',function(){return true});
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.storage.twlinglu_settle[0][1]++;
						game.log(target,'于本次强令失败时进行两次结算');
					}
				},
				ai:{expose:0.2},
				subSkill:{
					order:{
						audio:2,
						trigger:{source:'damageSource'},
						group:'twlinglu_settle',
						silent:true,
						charlotte:true,
						onremove:true,
						mark:true,
						marktext:'令',
						intro:{
							content:function(storage,player){
								return '<li>任务目标：于你下回合结束前造成的伤害不小于2点<br><li>已造成'+player.countMark('twlinglu_order')+'点伤害';
							}
						},
						content:function(){
							player.addMark('twlinglu_order',trigger.num,false);
						},
					},
					settle:{
						audio:'twlinglu_order',
						trigger:{player:'phaseEnd'},
						charlotte:true,
						silent:true,
						onremove:true,
						filter:function(event,player){
							return player.getStorage('twlinglu_settle').length>0;
						},
						content:function(){
							'step 0'
							var list=player.getStorage('twlinglu_settle').shift();
							var target=list[0],count=list[1]||1;
							event.target=target; event.count=count;
							'step 1'
							if(player.countMark('twlinglu_order')>=2){
								game.log(player,'成功完成了',target,'发布的','#g【令戮】','强令');
								player.popup('强令成功','wood');
								player.draw(2);
								event.finish();
							}
							else{
								game.log(player,'未完成',target,'发布的','#g【令戮】','强令');
								player.popup('强令失败','fire');
							}
							'step 2'
							if(player.countMark('twlinglu_order')>=2){
								game.delayx();
							}
							else{
								event.count--;
								player.loseHp();
							}
							'step 3'
							if(event.count>0) event.goto(2);
							'step 4'
							if(player.getStorage('twlinglu_settle').length>0){
								event.goto(0);
								game.delayx();
							}
						},
					}
				},
			},
			//马腾
			twxiongzheng:{
				audio:2,
				onremove:true,
				trigger:{global:'roundStart'},
				direct:true,
				content:function(){
					'step 0'
					var target=player.storage.twxiongzheng_target;
					delete player.storage.twxiongzheng_target;
					if(!target){event.goto(4);return;}
					event.target=target;
					var list=[],list2=[];
					var history=target.actionHistory;
					if(history.length<2){event.goto(4);return;}
					for(var i=history.length-2;i>=0;i--){
						for(var evt of history[i].damage){
							if(evt.source) list.add(evt.source);
						}
						if(history[i].isRound) break;
					}
					var list2=game.filterPlayer(i=>i!=player).removeArray(list);
					event.list=list; event.list2=list2;
					var choiceList=[
						'视为对任意名上一轮未对'+get.translation(target)+'造成过伤害的角色使用一张【杀】',
						'令任意名上一轮对'+get.translation(target)+'造成过伤害的角色摸两张牌'
					];
					var choices=[];
					if(list2.length){
						choices.push('选项一');
						choiceList[0]+='（'+get.translation(list2)+'）';
					}
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(list.length){
						choices.push('选项二');
						choiceList[1]+='（'+get.translation(list)+'）';
					}
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					choices.push('cancel2');
					player.chooseControl(choices).set('prompt','雄争：是否选择一项？').set('choiceList',choiceList).set('ai',function(){
						var player=_status.event.player;
						var list=_status.event.getParent().list,list2=_status.event.getParent().list2;
						var eff=list.map(target=>{
							if(target==player) return 0;
							return get.effect(target,{name:'sha'},player,player);
						}).reduce((p,c)=>p+c,0),eff2=list2.map(target=>2*get.effect(target,{name:'draw'},player,player)).reduce((p,c)=>p+c,0);
						if(_status.event.controls.includes('选项二')&&eff2>eff) return '选项二';
						if(eff>0) return 0;
						return 'cancel2';
					});
					'step 1'
					if(result.control=='选项一'){
						event.bool=true;
						if(event.list2.length) player.chooseTarget('雄争：请选择任意名满足条件的角色，你视为依次对这些角色使用一张杀',[1,Infinity],true,function(card,player,target){
							return player.canUse('sha',target,false,false)&&_status.event.getParent().list2.includes(target);
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'sha'},player,player);
						});
						else event.finish();
					}
					else if(result.control=='选项二'){
						event.bool=false;
						if(event.list.length) player.chooseTarget('雄争：请选择任意名满足条件的角色，这些角色摸两张牌',[1,Infinity],true,function(card,player,target){
							return _status.event.getParent().list.includes(target);
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'draw'},player,player);
						});
						else event.finish();
					}
					else event.goto(3);
					'step 2'
					result.targets.sortBySeat();
					player.logSkill('twxiongzheng',result.targets);
					if(event.bool){
						for(var i of result.targets) player.useCard({name:'sha',isCard:true},i,false);
					}
					else game.asyncDraw(result.targets,2);
					'step 3'
					if(!game.hasPlayer(function(current){
						return !player.getStorage('twxiongzheng').includes(current);
					})) event.finish();
					else game.delayx();
					'step 4'
					player.chooseTarget(get.prompt('twxiongzheng'),'选择一名未选择过的角色，称为“雄争”角色',function(card,player,target){
						return !player.getStorage('twxiongzheng').includes(target);
					}).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target);
						if(game.roundNumber<=1&&player.hasUnknown()) return 0;
						return -att;
					});
					'step 5'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twxiongzheng',target);
						player.markAuto('twxiongzheng',[target]);
						player.storage.twxiongzheng_target=target;
						player.addTempSkill('twxiongzheng_mark','roundStart');
						target.addTempSkill('twxiongzheng_threaten','roundStart');
						game.delayx();
					}
				},
				subSkill:{
					mark:{
						intro:{
							content:'$参与了〖雄争〗的争斗',
							onunmark:true,
						},
						charlotte:true,
						onremove:true,
						trigger:{global:'damage'},
						firstDo:true,
						direct:true,
						filter:function(event,player){
							return event.player==player.storage.twxiongzheng_target&&get.itemtype(event.source)=='player';
						},
						content:function(){
							player.markAuto('twxiongzheng_mark',[trigger.source]);
						},
					},
					threaten:{
						mark:true,
						intro:{content:'本轮〖雄争〗目标'},
						ai:{threaten:10},
					},
				},
			},
			twluannian:{
				audio:2,
				global:'twluannian_global',
				unique:true,
				zhuSkill:true,
				subSkill:{
					global:{
						audio:'twluannian',
						enable:'phaseUse',
						usable:1,
						forceaudio:true,
						onChooseToUse:function(event){
							if(!game.online){
								var num=1;
								game.countPlayer2(current=>{
								var history=current.actionHistory;
									for(var i=history.length-1;i>=0;i--){
										for(var evt of history[i].useSkill){
											if(evt.skill=='twluannian_global') num++;
										}
										if(history[i].isRound) break;
									}
								});
								event.set('twluannian_num',num);
							}
						},
						filter:function(event,player){
							if(!event.twluannian_num) return false;
							return player.group=='qun'&&player.countCards('he')>=event.twluannian_num&&game.hasPlayer(function(current){
								var target=current.storage.twxiongzheng_target;
								return target&&target.isIn()&&current!=player&&current.hasZhuSkill('twluannian',player)
							})
						},
						filterCard:true,
						position:'he',
						prompt:function(){
							var player=_status.event.player;
							var num=_status.event.twluannian_num
							var list=game.filterPlayer(function(current){
								return current.hasZhuSkill('twluannian',player);
							}).map(i=>i.storage.twxiongzheng_target).sortBySeat();
							return '弃置'+get.cnNumber(num)+'张牌，对'+get.translation(list)+(list.length>1?'中的一人':'')+'造成1点伤害';
						},
						selectCard:function(){
							return _status.event.twluannian_num;
						},
						complexSelect:true,
						complexCard:true,
						filterTarget:function(card,player,target){
							return game.filterPlayer(function(current){
								return current.hasZhuSkill('twluannian',player);
							}).map(i=>i.storage.twxiongzheng_target).includes(target);
						},
						selectTarget:function(){
							return game.filterPlayer(function(current){
								return current.hasZhuSkill('twluannian',_status.event.player);
							}).map(i=>i.storage.twxiongzheng_target).filter(i=>i&&i.isIn()).length>1?1:-1;
						},
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							target.damage();
						},
						ai:{
							order:7,
							result:{
								target:function(player,target){
									return get.damageEffect(target,player,target);
								}
							},
							expose:0.25,
						},
					},
				},
			},
			//鲍信
			twmutao:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.countCards('h');
				},
				content:function(){
					'step 0'
					event.togive=target.getNext();
					var cards=target.getCards('h',{name:'sha'});
					if(!cards.length){
						game.log('但',target,'没有','#y杀','！');
						event.finish();
					}
					'step 1'
					var cards=target.getCards('h',{name:'sha'}),card=cards.randomRemove(1)[0];
					target.give(card,event.togive);
					if(cards.length){
						event.togive=event.togive.getNext();
						event.redo();
					}
					'step 2'
					target.line(event.togive);
					event.togive.damage(Math.min(2,event.togive.countCards('h',{name:'sha'})),target);
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							var num=0,numx=target.countCards('h',{name:'sha'}),targetx=target;
							for(var i=0; i<numx; i++){
								targetx=targetx.next;
								if(targetx==player) targetx=targetx.next;
							}
							var att1=get.attitude(player,target),att2=get.attitude(player,targetx);
							if(att1>0&&att2<0) num=0.25;
							if(att1<0&&att2<0) num=4;
							return att1*num*numx*(targetx.countCards('h',{name:'sha'})+1);
						},
					},
				},
			},
			twyimou:{
				audio:2,
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					return event.player.isIn()&&get.distance(player,event.player)<=1;
				},
				logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				content:function(){
					'step 0'
					if(trigger.player!=player) player.addExpose(0.3);
					var target=get.translation(trigger.player);
					var choiceList=[
						'令'+target+'获得牌堆里的一张【杀】',
						'令'+target+'将一张牌交给另一名角色，然后'+target+'摸两张牌',
						'背水！'+(trigger.player!=player?'将所有手牌交给'+target+'，然后':'')+'依次执行以上所有选项',
					];
					var list=['选项一'];
					if(trigger.player.countCards('h')) list.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(player.countCards('h')) list.push('背水！');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+'</span>';
					player.chooseControl(list).set('prompt','毅谋：请选择一项').set('choiceList',choiceList).set('ai',function(){
						var evt=_status.event.getTrigger(),list=_status.event.list;
						var player=_status.event.player;
						var target=evt.player;
						if((target.hp>=target.countCards('h')+2||target==player)&&list.includes('背水！')) return '背水！';
						if(target.countCards('h')&&list.includes('选项二')) return '选项二';
						return '选项一';
					}).set('list',list);
					'step 1'
					event.choice=result.control;
					if(event.choice=='背水！'&&player!=trigger.player) player.give(player.getCards('h'),trigger.player);
					'step 2'
					if(event.choice!='选项二'){
						var card=get.cardPile2(function(card){
							return card.name=='sha';
						});
						if(card) trigger.player.gain(card,'gain2');
						else game.log('但牌堆里已经没有','#y杀','了！');
						if(event.choice=='选项一') event.finish();
					}
					'step 3'
					if(event.choice!='选项一'){
						if(trigger.player.countCards('h')) trigger.player.chooseCardTarget({
							prompt:'将一张手牌交给另一名其他角色并摸两张牌',
							filterCard:true,
							forced:true,
							filterTarget:lib.filter.notMe,
							ai1:function(card){
								return 1/Math.max(0.1,get.value(card));
							},
							ai2:function(target){
								var player=_status.event.player,att=get.attitude(player,target);
								if(target.hasSkillTag('nogain')) att/=9;
								return 4+att;
							},
						});
						else event.finish();
					}
					'step 4'
					var target=result.targets[0];
					trigger.player.line(target);
					trigger.player.give(result.cards,target);
					trigger.player.draw(2);
				},
				ai:{
					threaten:2.5,
				},
			},
			//刘夫人
			twzhuidu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.isDamaged();
					});
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return target.isDamaged();
				},
				chooseButton:{
					dialog:function(event,player){
						var name=get.translation(event.result.targets[0]);
						var dialog=ui.create.dialog('追妒：选择一项','hidden');
						dialog.add([[
							['damage','对'+name+'造成1点伤害'],
							['discard','弃置'+name+'装备区里的一张牌'],
							['both','背水！若该角色为女性，弃置一张牌，然后依次执行以上所有选项'],
						],'textbutton']);
						return dialog;
					},
					filter:function(button,player){
						var target=_status.event.getParent().result.targets[0];
						var link=button.link;
						if(link=='damage') return true;
						if(link=='discard') return target.countCards('e');
						return target.hasSex('female')&&player.countDiscardableCards(player,'he')>0;
					},
					check:function(button){
						switch (button.link){
							case 'damage':
								return 10;
							case 'discard':
								return 1;
							case 'both':
								return 15;
						}
					},
					backup:function(links){
						var backup={
							audio:'twzhuidu',
							target:_status.event.result.targets[0],
							choice:links[0],
							filterTarget:function(card,player,target){
								return target==lib.skill.twzhuidu_backup.target;
							},
							selectTarget:-1,
							content:function(){
								var target=lib.skill.twzhuidu_backup.target;
								var choice=lib.skill.twzhuidu_backup.choice;
								if(choice!='discard') target.damage();
								if(choice!='damage') player.discardPlayerCard(target,'e',true);
							}
						}
						if(links[0]=='both'){
							backup.filterCard=true;
							backup.position='he';
						}
						return backup;
					},
					prompt:function(links){
						var name=get.translation(_status.event.result.targets[0]);
						switch (links[0]){
							case 'damage':
								return '对'+name+'造成1点伤害';
							case 'discard':
								return '弃置'+name+'装备区里的一张牌';
							case 'both':
								return '背水！弃置一张牌，然后对'+name+'造成1点伤害并弃置其装备区里的一张牌';
						}
					},
				},
				subSkill:{
					backup:{},
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(target.hasSex('female')&&target.countCards('e')&&player.countCards('he')) return -2;
							return -1;
						},
					},
				},
			},
			twshigong:{
				audio:2,
				trigger:{player:'dying'},
				filter:function(event,player){
					var target=_status.currentPhase;
					return player.hp<=0&&target&&target.isIn()&&target!=player;
				},
				skillAnimation:true,
				animationColor:'gray',
				limited:true,
				logTarget:function(event,player){
					return _status.currentPhase;
				},
				content:function(){
					'step 0'
					player.awakenSkill('twshigong');
					var target=_status.currentPhase;
					if(target.hp<=0) event._result={bool:false};
					else target.chooseToDiscard('h',target.hp,get.translation(player)+'对你发动了【示恭】，是否弃置'+get.cnNumber(target.hp)+'张手牌？','若如此做，其将体力回复至1点；或者点击“取消”加1点体力上限并回复1点体力，摸一张牌，然后其将体力回复至体力上限').set('ai',card=>{
						if(!_status.event.goon) return 0;
						return 7-get.value(card);
					}).set('goon',get.attitude(target,player)>=0);
					'step 1'
					var target=_status.currentPhase;
					if(result.bool){
						var num=1-player.hp;
						if(num>0) player.recover(num);
						event.finish();
					}
					else{
						target.gainMaxHp();
						target.recover();
						target.draw();
					}
					'step 2'
					var num=player.maxHp-player.hp;
					if(num>0) player.recover(num);
				},
			},
			//王淩
			twmibei:{
				audio:'mibei',
				trigger:{player:'useCardAfter'},
				group:['twmibei_mark','twmibei_fail'],
				forced:true,
				locked:false,
				direct:true,
				dutySkill:true,
				derivation:'twmouli',
				filter:function(event,player){
					var map={basic:0,trick:0,equip:0};
					for(var name of player.getStorage('twmibei')){
						var type=get.type2(name);
						if(typeof map[type]=='number') map[type]++;
					}
					for(var i in map){
						if(map[i]<2) return false;
					}
					return true;
				},
				content:function(){
					player.awakenSkill('twmibei');
					player.logSkill('twmibei_achieve');
					game.log(player,'成功完成使命');
					player.addSkillLog('twmouli');
				},
				intro:{content:'已使用牌名：$'},
				subSkill:{
					achieve:{
						audio:'mibei1',
						skillAnimation:true,
						animationColor:'water',
					},
					mark:{
						trigger:{player:'useCard1'},
						filter:function(event,player){
							return !player.getStorage('twmibei').includes(event.card.name);
						},
						charlotte:true,
						forced:true,
						silent:true,
						dutySkill:true,
						content:function(){
							player.markAuto('twmibei',[trigger.card.name]);
						},
					},
					fail:{
						audio:'mibei2',
						trigger:{player:'phaseUseEnd'},
						forced:true,
						filter:function(event,player){
							return !player.getHistory('useCard').length;
						},
						content:function(){
							game.log(player,'使命失败');
							delete player.storage.twmibei;
							player.addTempSkill('twmibei_less');
							player.addMark('twmibei_less',1,false);
						},
					},
					less:{
						charlotte:true,
						marktext:'缚',
						intro:{content:'本回合手牌上限-#'},
						mod:{
							maxHandcard:function(player,num){
								return num-player.countMark('twmibei_less');
							},
						},
					},
				},
			},
			twxingqi:{
				audio:'xingqi',
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var num=0;
					game.countPlayer(function(current){
						num+=current.countCards('ej');
					});
					return num>player.hp;
				},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					player.awakenSkill('twxingqi');
					player.recover();
					if(!player.awakenedSkills.includes('twmibei')){
						var list=['basic','equip','trick'],cards=[];
						for(var i of list){
							var card=get.cardPile2(function(card){
								return get.type(card)==i;
							});
							if(card) cards.push(card);
						}
						if(cards.length) player.gain(cards,'gain2');
					}
					else player.addSkill('twxingqi_range');
				},
				subSkill:{
					range:{
						charlotte:true,
						mark:true,
						marktext:'启',
						mod:{
							targetInRange:()=>true,
						},
						intro:{content:'使用牌无距离限制'},
					},
				},
			},
			twmouli:{
				audio:'mouli',
				enable:'chooseToUse',
				filter:function(event,player){
					if(event.type=='wuxie') return false;
					if(player.hasSkill('twmouli_used')) return false;
					if(!Array.isArray(event.twmouli)) return false;
					for(var card of event.twmouli){
						if(event.filterCard(card,player,event)) return true;
					}
					return false;
				},
				onChooseToUse:function(event){
					if(game.online||!event.player.hasSkill('twmouli')) return;
					var cards=[];
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						var card=ui.cardPile.childNodes[i];
						if(get.type(card)=='basic') cards.push(card);
					}
					event.set('twmouli',cards);
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('谋立','hidden');
						if(event.twmouli&&event.twmouli.length) dialog.add(event.twmouli);
						else dialog.addText('牌堆里没有基本牌');
						return dialog;
					},
					filter:function(button,player){
						var evt=_status.event.getParent(),card=button.link;
						if(evt&&evt.filterCard) return evt.filterCard(card,player,evt);
						return false;
					},
					check:function(button){
						var player=_status.event.player,card=button.link;
						if(_status.event.type!='phase') return 1;
						if(_status.event.dying) return get.attitude(player,_status.event.dying);
						if(card.name=='jiu') return player.getUseValue(card);
						return player.getUseValue(card)/4;
					},
					backup:function(links,player){
						return {
							audio:'mouli',
							filterCard:()=>false,
							selectCard:-1,
							viewAs:{name:links[0].name,isCard:true,cards:[links[0]]},
							popname:true,
							precontent:function(){
								player.logSkill('twmouli');
								player.addTempSkill('twmouli_used');
								delete event.result.skill;
								var name=event.result.card.name;
								event.result.cards=event.result.card.cards;
								event.result.card=get.autoViewAs(event.result.cards[0]);
								event.result.card.name=name;
								var next=game.createEvent('twmouli_update');
								event.next.remove(next);
								event.getParent().after.push(next);
								next.setContent(function(){game.updateRoundNumber()});
							},
						}
					},
					prompt:function(links,player){
						return '使用牌堆中的'+get.translation(links);
					},
				},
				hiddenCard:function(player,name){
					return get.type(name)=='basic'&&!player.getStat('skill').twmouli;
				},
				subSkill:{
					used:{charlotte:true},
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						},
					},
					order:11,
					respondSha:true,
					respondShan:true,
					fireAttack:true,
					skillTagFilter:function(player,tag,arg){
						if(arg=='respond') return false;
						var list=[];
						for(var i=0;i<ui.cardPile.childNodes.length;i++){
							var card=ui.cardPile.childNodes[i];
							if(get.type(card,player)=='basic'&&!list.includes(card.name)) list.push(card.name);
						}
						if(tag=='respondSha') return list.includes('sha');
						if(tag=='respondShan') return list.includes('shan');
						return !player.getStat('skill').twmouli;
					},
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				}
			},
			//诸葛果
			twqirang:{
				audio:'qirang',
				trigger:{player:'equipEnd'},
				frequent:true,
				content:function(){
					var card=get.cardPile(function(card){
						return get.type2(card)=='trick';
					});
					if(card) {
						player.gain(card,'gain2').gaintag.add('twqirang');
						player.addTempSkill('twqirang_use');
						player.addTempSkill('twqirang_clear',['phaseZhunbeiAfter','phaseDrawAfter','phaseUseAfter','phaseDiscardAfter','phaseJieshuAfter','phaseAfter']);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},
				},
				subSkill:{
					clear:{
						charlotte:true,
						onremove:function(player){
							player.removeGaintag('twqirang');
						},
					},
					use:{
						audio:'qirang',
						trigger:{player:'useCard2'},
						forced:true,
						filter:function(event,player){
							if(get.type2(event.card)!='trick') return false;
							if(!player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('twqirang')) return true;
								}
								return false;
							})) return false;
							return true;
						},
						content:function(){
							'step 0'
							game.log(trigger.card,'不可被响应');
							trigger.directHit.addArray(game.players);
							var info=get.info(trigger.card);
							if(info.allowMultiple==false) event.finish();
							else if(trigger.targets){
								if(!info.multitarget&&!game.hasPlayer(function(current){
									return !trigger.targets.includes(current)&&lib.filter.targetEnabled2(trigger.card,player,current);
								})) event.finish();
							}
							else event.finish();
							'step 1'
							var prompt2='为'+get.translation(trigger.card)+'增加或减少一个目标'
							player.chooseTarget(get.prompt('twqirang'),function(card,player,target){
								var player=_status.event.player;
								if(_status.event.targets.includes(target)) return true;
								return lib.filter.targetEnabled2(_status.event.card,player,target);
							}).set('prompt2',prompt2).set('ai',function(target){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								return get.effect(target,trigger.card,player,player)*(_status.event.targets.includes(target)?-1:1);
							}).set('targets',trigger.targets).set('card',trigger.card);
							'step 2'
							if(result.bool){
								if(!event.isMine()&&!event.isOnline()) game.delayx();
								event.targets=result.targets;
							}
							else event.finish();
							'step 3'
							if(event.targets){
								player.line(event.targets);
								if(trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
								else trigger.targets.addArray(event.targets);
							}
						},
						mod:{
							targetInRange:function(card,player,target){
								if(!card.cards) return;
								for(var i of card.cards){
									if(i.hasGaintag('twqirang')) return true;
								}
							},
						},
					},
				},
			},
			twyuhua:{
				audio:'yuhua',
				frequent:true,
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(event.name=='gain'&&player==event.player) return false;
					var evt=event.getl(player);
					if(!evt||!evt.cards2||!evt.cards2.length) return false;
					for(var i of evt.cards2){
						if(get.type(i,player)!='basic') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=0,evt=trigger.getl(player);
					for(var i of evt.cards2){
						if(get.type(i,player)!='basic'&&num<5) num++;
					}
					player.chooseToGuanxing(num);
					player.chooseBool('羽化：是否摸'+get.cnNumber(num)+'张牌？').set('frequentSkill','twyuhua');
					event.num=num;
					'step 1'
					if(result.bool) player.draw(num);
				},
				mod:{
					ignoredHandcard:function(card,player){
						if(get.type(card)!='basic') return true;
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
					},
				},
			},
			//樊稠
			twxingluan:{
				audio:'xinfu_xingluan',
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				content:function(){
					'step 0'
					event.cards=game.cardsGotoOrdering(get.cards(6)).cards;
					event.list=[];
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto) str='兴乱：选择分配一种类别的牌';
						else str='兴乱';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['兴乱',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					'step 1'
					var list=['basic','trick','equip'].filter(type=>cards.some(card=>get.type2(card)==type));
					player.chooseControl(list).set('ai',function(){
						var listy=['basic','trick','equip'],listz=[0,0,0];
						var num=0,numx=0,num2=0,numx2=0;
						for(var i of _status.event.getParent().cards){
							for(var j=0;j<2;j++){
								if(get.type2(i)==listy[j]) listz[j]++;
							}
						}
						for(var k=0;k<2;k++){
							if(listz[k]>num){
								num=listz[k];
								numx=k;
							}
							if(listz[k]<num2){
								num2=listz[k];
								numx2=k;
							}
						}
						if(!_status.event.player.hasFriend()&&player.hp>2) return listy[numx2];
						return listy[numx];
					});
					'step 2'
					game.broadcastAll('closeDialog',event.videoId);
					event.cardsx=[];
					var type=result.control;
					for(var j of cards){
						if(type==get.type2(j)) event.cardsx.push(j);
					}
					var time=1000-(get.utc()-event.time);
					if(time>0) game.delay(0,time);
					player.$gain2(event.cardsx,false);
					game.delayx();
					if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
					event.given_map={};
					event.num=0;
					'step 3'
					if(event.cardsx.length>1){
						player.chooseCardButton('兴乱：请选择要分配的牌',true,event.cardsx,[1,Math.min(3,event.cardsx.length)]).set('ai',function(button){
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(event.cardsx.length==1){
						event._result={links:event.cardsx.slice(0),bool:true};
					}
					else{
						event.goto(6);
					}
					'step 4'
					if(result.bool){
						var cards=result.links;
						event.togive=cards.slice(0);
						player.chooseTarget('选择获得'+get.translation(cards)+'的角色',event.cardsx.length==1,(card,player,target)=>{
							var map=_status.event.getParent().given_map;
							var togive=_status.event.getParent().togive;
							return (map[target.playerid]||[]).length+togive.length<=3;
						}).set('ai',function(target){
							var player=_status.event.player,att=get.attitude(player,target);
							var map=_status.event.getParent().given_map;
							var togive=_status.event.getParent().togive;
							var num=(map[player.playerid]||[]).length,num2=(map[target.playerid]||[]).length;
							var value=_status.event.value,eff=get.effect(target,{name:'losehp'},player,player);
							if(num2+togive.length==num&&player!=target) return value*Math.sign(att)+eff+1000;
							else{
								if(value<0) return -att+1000;
								else if(att>0) return 1.5*att/(1+target.countCards('h'))+(player==target?eff/3:0)+1000;
								else return att/100+1000;
							}
						}).set('value',cards.reduce((p,c)=>p+get.value(c,player,'raw'),0));
					}
					'step 5'
					if(result.bool){
						event.cardsx.removeArray(event.togive);
						if(result.targets.length){
							var id=result.targets[0].playerid,map=event.given_map;
							if(!map[id]) map[id]=[];
							map[id].addArray(event.togive);
						}
						if(event.cardsx.length>0) event.goto(3);
					}
					else event.goto(3);
					'step 6'
					if(_status.connectMode){
						game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
					}
					var list=[];
					for(var i in event.given_map){
						var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
						if(player==source) event.num+=event.given_map[i].length;
						player.line(source,'green');
						game.log(source,'获得了',event.given_map[i]);
						list.push([source,event.given_map[i]]);
					}
					game.loseAsync({
						gain_list:list,
						giver:player,
						animate:'gain2',
					}).setContent('gaincardMultiple');
					'step 7'
					var list=[];
					for(var i in event.given_map){
						var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
						if(event.given_map[i].length>=num) list.push(source);
					}
					list.sortBySeat();
					player.line(list);
					for(var i of list){
						i.loseHp();
					}
				},
			},
			//许靖
			twboming:{
				audio:'boming',
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					return player.countCards('he');
				},
				filterCard:true,
				position:'he',
				filterTarget:lib.filter.notMe,
				discard:false,
				lose:false,
				delay:false,
				content:function(){
					player.give(cards,target);
				},
				check:function(card){
					return 5-get.value(card);
				},
				ai:{
					order:10,
					result:{
						target:function(player,target){
							if(!ui.selected.cards.length) return 0;
							var card=ui.selected.cards[0];
							if(get.attitude(player,target)<0&&player.hasSkill('twejian')){
								var dam=get.damageEffect(target,player,target);
								if(dam>0) return dam;
								var type=get.type(card,target),ts=target.getCards('he',function(card){
									return get.type(card)==type;
								});
								if(ts.length){
									var val=get.value(ts,target);
									if(val>get.value(card)) return -Math.max(1,val);
									return 0;
								}
							}
							return get.value(card,target)/1.5;
						},
					},
				},
				group:'twboming_draw',
				subSkill:{
					draw:{
						audio:'boming',
						trigger:{player:'phaseJieshuBegin'},
						forced:true,
						locked:false,
						filter:function(event,player){
							var num=0;
							for(var target of game.filterPlayer(i=>i!=player)){
								target.getHistory('gain',evt=>num+=evt.cards.length);
								if(num>1) return true;
							}
							return false;
						},
						content:function(){
							player.draw(2);
						},
					},
				},
			},
			twejian:{
				audio:'ejian',
				trigger:{
					global:['gainAfter','loseAsyncAfter']
				},
				filter:function(event,player){
					if(event.name=='gain'){
						var cards=event.getg(event.player);
						if(!cards.length) return false;
						var cards2=event.getl(player).cards2;
						for(var i of cards2){
							if(cards.includes(i)&&event.player.countCards('he',card=>{
								return card!=i&&get.type2(card)==get.type2(i);
							})) return true;
						}
						return false;
					}
					else{
						if(event.type!='gain') return false;
						var cards=event.getl(player).cards2;
						if(!cards.length) return false;
						return game.hasPlayer(current=>{
							if(current==player) return false;
							var cardsx=event.getg(current);
							for(var i of cardsx){
								if(cards.includes(i)&&current.countCards('he',card=>{
									return card!=i&&get.type2(card)==get.type2(i);
								})) return true;
							}
							return false;
						});
					}
				},
				logTarget:function(event,player){
					if(event.name=='gain') return event.player;
					else{
						var cards=event.getl(player).cards2;
						return game.filterPlayer(current=>{
							if(current==player) return false;
							var cardsx=event.getg(current);
							for(var i of cardsx){
								if(cards.includes(i)&&current.countCards('he',card=>{
									return card!=i&&get.type2(card)==get.type2(i);
								})) return true;
							}
							return false;
						});
					}
				},
				direct:true,
				content:function(){
					'step 0'
					if(trigger.name=='gain') event.targets=[trigger.player];
					else{
						var cards=trigger.getl(player).cards2;
						event.targets=game.filterPlayer(current=>{
							if(current==player) return false;
							var cardsx=trigger.getg(current);
							for(var i of cardsx){
								if(cards.includes(i)&&current.countCards('he',card=>{
									return card!=i&&get.type2(card)==get.type2(i);
								})) return true;
							}
							return false;
						});
					}
					'step 1'
					var target=event.targets.shift();
					event.target=target;
					player.chooseBool(get.prompt('twejian',target),'当其他角色得到你的牌后，若其有其他与此牌类型相同的牌，你可以令其选择一项：1.受到你造成的1点伤害；2.弃置这些牌').set('ai',()=>{
						return get.attitude(player,_status.event.getParent().target)<0;
					});
					'step 2'
					if(result.bool){
						player.logSkill('twejian',target);
						var cards=trigger.getg(target);
						event.cards=cards;
						event.cardType=[];
						for(var card of cards){
							event.cardType.add(get.type(card,'trick',target));
						}
						var list=['选项一','选项二'];
						target.chooseControl(list).set('prompt','恶荐：请选择一项').set('choiceList',[
							'受到1点伤害',
							'弃置所有除'+get.translation(cards)+'外的'+get.translation(event.cardType)+'牌',
						]).set('ai',function(){
							var player=_status.event.player;
							var types=_status.event.cardType,cards=player.getCards('he',function(card){
								return types.includes(get.type2(card));
							});
							if(cards.length==1) return '选项二';
							if(cards.length>=2){
								for(var i=0; i<cards.length; i++){
									if(get.tag(cards[i],'save')) return '选项一';
								}
							}
							if(player.hp==1) return '选项二';
							for(var i=0; i<cards.length; i++){
								if(get.value(cards[i])>=8) return '选项一';
							}
							if(cards.length>2&&player.hp>2) return '选项一';
							if(cards.length>3) return '选项一';
							return '选项二';
						}).set('cardType',event.cardType);
					}
					else event.goto(4);
					'step 3'
					if(result.control=='选项一') target.damage();
					else target.discard(target.getCards('he',card=>{
						return event.cardType.includes(get.type2(card))&&!cards.includes(card);
					}));
					'step 4'
					if(event.targets.length>0) event.goto(1);
					else event.finish();
				},
				ai:{
					expose:0.3,
				},
			},
			//张飞
			twxuhe:{
				audio:'retishen',
				trigger:{player:'shaMiss'},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				logTarget:'target',
				content:function(){
					'step 0'
					trigger.target.chooseControl().set('choiceList',[
						'受到'+get.translation(player)+'对你造成的1点伤害',
						'令'+get.translation(player)+'使用的下一张牌对你造成的伤害+2'
					]).set('ai',function(){
						var target=_status.event.player,player=_status.event.getParent().player;
						if(target.hp<=3&&target.hp>1&&player.countCards('hs',function(card){
							return get.tag(card,'damage')&&player.canUse(card,target);
						})>0) return 0;
						return 1;
					});
					'step 1'
					var target=trigger.target;
					switch (result.index){
						case 0:
							player.line(target,'fire');
							target.damage();
							break;
						case 1:
							target.line(player,'fire');
							player.storage.twxuhe_damage=target;
							trigger.getParent().twxuhe=true;
							player.addTempSkill('twxuhe_damage');
							break;
					}
				},
				subSkill:{
					damage:{
						charlotte:true,
						onremove:true,
						mark:true,
						intro:{content:'本回合使用的下一张牌对$造成伤害时，此伤害+2'},
						trigger:{
							source:'damageBegin1',
							player:'useCardAfter',
						},
						direct:true,
						filter:function(event,player){
							if(event.name=='useCard') return !event.twxuhe;
							if(!event.card) return false;
							var evt=event.getParent(2);
							var history=player.getHistory('useCard');
							return evt.name=='useCard'&&history[history.indexOf(evt)-1].twxuhe;
						},
						content:function(){
							if(trigger.name!='useCard') trigger.num+=2;
							player.removeSkill('twxuhe_damage');
						},
					}
				},
			},
			//薛综
			twjiexun:{
				intro:{content:'已发动#次'},
				audio:'jiexun',
				trigger:{player:'phaseJieshuBegin'},
				onremove:true,
				direct:true,
				derivation:['twfunanx','twjiexunx'],
				content:function(){
					'step 0'
					var suits={};
					game.countPlayer(current=>{
						for(var card of current.getCards('ej')) {
							if(typeof suits[get.suit(card)]!='number') suits[get.suit(card)]=0;
							suits[get.suit(card)]++;
						}
					});
					var choices=lib.suit.slice();
					choices.push('cancel2');
					var str=lib.suit.map(suit=>{
						return get.translation(suit)+'：'+get.cnNumber(suits[suit]||0)+'张'
					}).join('；');
					player.chooseControl(choices).set('prompt',get.prompt('twjiexun')+'（已发动过'+get.cnNumber(player.countMark('twjiexun'))+'次）').set('ai',function(){
						var player=_status.event.player;
						var map={};
						game.countPlayer(current=>{
							for(var card of current.getCards('ej')) {
								if(typeof map[get.suit(card)]!='number') map[get.suit(card)]=0;
								map[get.suit(card)]++;
							}
						});
						for(var suit in map) map[suit]=Math.abs(map[suit]);
						var bool=game.hasPlayer(current=>get.attitude(player,current)>0&&player!=current);
						var list=lib.suit.slice().sort((a,b)=>(bool?1:-1)*((map[b]||0)-(map[a]||0)));
						if(bool&&map[list[0]]>0||!bool||player.hasMark('twjiexun')) return list[0];
						return 'cancel2';
					}).set('prompt2',get.skillInfoTranslation('twjiexun',player)+'<br>'+str);
					'step 1'
					if(result.control!='cancel2'){
						var suit=result.control;
						event.suit=suit;
						var num1=game.countPlayer(function(current){
							return current.countCards('ej',{suit:suit});
						});
						var num2=player.countMark('twjiexun');
						event.num1=num1;
						event.num2=num2;
						var str='令一名其他角色摸'+get.cnNumber(num1)+'张牌';
						if(num2) str+='，然后弃置'+get.cnNumber(num2)+'张牌';
						player.chooseTarget('请选择【诫训】的目标',str,lib.filter.notMe).set('ai',function(target){
							var player=_status.event.player,att=get.attitude(player,target);
							return _status.event.eff*get.sgn(att)+att/114514;
						}).set('eff',num1>=num2&&num1>0?1:-1);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twjiexun',target);
						if(player.hasMark('twjiexun')||event.num1) player.addExpose(0.2);
						player.popup(event.suit);
						game.log(player,'选择了','#y'+get.translation(event.suit));
						player.addMark('twjiexun',1,false);
						if(event.num1) target.draw(event.num1);
					}
					else event.finish();
					'step 3'
					if(event.num2) target.chooseToDiscard(event.num2,true,'he');
					else event.finish();
					'step 4'
					if(result.bool&&result.autochoose&&result.cards.length==result.rawcards.length&&!player.hasSkill('funan_jiexun')){
						player.chooseControl().set('choiceList',[
							'摸'+get.cnNumber(event.num2)+'张牌，将【诫训】的发动次数归零',
							'修改【复难】和【诫训】'
						]).set('ai',()=>_status.event.choice).set('prompt','诫训：选择一项').set('choice',event.num2>=4?0:(event.num2<=1?1:[0,1].randomGet()));
					}
					else event.finish();
					'step 5'
					if(result.index==0){
						player.draw(event.num2);
						player.removeMark('twjiexun',player.countMark('twjiexun'),false);
						game.log(player,'归零了','#g【诫训】','的发动次数');
					}
					else {
						game.log(player,'修改了','#g【复难】','和','#g【诫训】');
						player.addSkill('funan_jiexun');
					}
				},
			},
			//张宁
			twxingzhui:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				mahouSkill:true,
				filter:function(event,player){
					return !player.hasSkill('twxingzhui_mahou');
				},
				content:function(){
					'step 0'
					player.loseHp();
					player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
						return 2;
					});
					'step 1'
					player.storage.twxingzhui_mahou=[result.index+1,result.index+1];
					player.addTempSkill('twxingzhui_mahou',{player:'die'});
				},
				ai:{
					order:2,
					result:{
						player:function(player,target){
							if(!player.hasFriend()) return 0;
							if(player.hp>1) return 1;
							return 0;
						},
					},
				},
				subSkill:{
					mahou:{
						trigger:{global:'phaseEnd'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							'step 0'
							var list=player.storage.twxingzhui_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的','#g星坠','魔法生效');
								player.logSkill('twxingzhui');
								var num=list[0];
								event.num=num;
								var cards=game.cardsGotoOrdering(get.cards(num*2)).cards;
								event.cards=cards;
								player.showCards(cards,get.translation(player)+'发动了【星坠】');
								player.removeSkill('twxingzhui_mahou');
							}
							else{
								game.log(player,'的','#g星坠','魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twxingzhui_mahou');
								event.finish();
							}
							'step 1'
							var cards2=[];
							for(var card of event.cards){
								if(get.color(card,false)=='black') cards2.push(card);
							}
							if(!cards2.length) event.finish();
							else{
								event.cards2=cards2;
								var str='令一名其他角色获得其中的黑色牌（'+get.translation(cards2)+'）';
								if(cards2.length>=event.num) str+='，然后对其造成'+get.cnNumber(event.num)+'点伤害';
								player.chooseTarget('请选择〖星坠〗的目标',str,lib.filter.notMe).set('ai',function(target){
									var player=_status.event.player;
									if(_status.event.getParent().cards2.length>=_status.event.getParent().num) return get.damageEffect(target,player,player,'thunder');
									return get.attitude(player,target);
								});
							}
							'step 2'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								target.gain(event.cards2,'gain2');
								if(event.cards2.length>=num) target.damage(event.num,'thunder');
							}
						},
						mark:true,
						onremove:true,
						marktext:'♗',
						intro:{
							name:'施法：星坠',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage) return '经过'+storage[1]+'个“回合结束时”后，亮出牌堆顶的'+get.cnNumber(storage[0]*2)+'张牌并执行后续效果';
								return '未指定施法效果';
							},
						},
					},
				},
			},
			twjuchen:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>player.countCards('h');
					})&&game.hasPlayer(function(current){
						return current!=player&&current.hp>player.hp;
					});
				},
				logTarget:function(event,player){
					return game.players.sortBySeat(player);
				},
				content:function(){
					'step 0'
					event.num=0;
					event.cards=[];
					event.targets=game.players.sortBySeat(player);
					'step 1'
					var target=targets[num];
					if(target.countCards('he')) target.chooseToDiscard('he',true);
					else event._result={bool:false};
					'step 2'
					if(result.bool&&Array.isArray(result.cards)) event.cards.addArray(result.cards);
					event.num++;
					if(event.num<targets.length) event.goto(1);
					else game.delayx();
					'step 3'
					var cards=cards.filter(function(i){
						return get.position(i,true)=='d'&&get.color(i,false)=='red';
					});
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			//于夫罗
			twjiekuang:{
				audio:2,
				trigger:{global:'useCardToTargeted'},
				filter:function(event,player){
					if(!event.target||event.targets.length>1) return false;
					if(_status.dying.length) return false;
					if(player==event.player) return false;
					if(event.target.hp>=player.hp) return false;
					if(!['basic','trick'].includes(get.type(event.card))) return false;
					return true;
				},
				usable:1,
				direct:true,
				content:function(){
					'step 0'
					player.chooseControl('失去体力','减体力上限','cancel2').set('prompt',get.prompt2('twjiekuang',trigger.target)).set('ai',function(card){
						if(_status.event.aisave){
							if(player.isDamaged()) return '减体力上限';
							return '失去体力';
						}
						return 'cancel2';
					}).set('aisave',function(){
						var save=false;
						if(get.attitude(player,trigger.target)>2){
							if(trigger.card.name=='sha'){
								if(player.countCards('h','shan')||player.getEquip(2) ||
									trigger.target.hp==1||player.hp>trigger.target.hp+1){
									if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
										save=true;
									}
								}
							}
							else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
								save=true;
							}
							else if(trigger.card.name=='shunshou' &&
								get.attitude(player,trigger.player)<0 &&
								get.attitude(trigger.player,trigger.target)<0){
								save=true;
							}
						}
						return save;
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twjiekuang',trigger.target);
						player[result.control=='失去体力'?'loseHp':'loseMaxHp']();
						player.addTempSkill('twjiekuang_after');
						trigger.getParent().twjiekuang=true;
						trigger.getParent().targets.remove(trigger.target);
						trigger.getParent().triggeredTargets4.remove(trigger.target);
						trigger.getParent().targets.push(player);
						trigger.untrigger();
						game.delayx();
						trigger.player.line(player);
					}
					else player.storage.counttrigger.twjiekuang--;
				},
				subSkill:{
					after:{
						charlotte:true,
						trigger:{global:'useCardAfter'},
						filter:function(event,player){
							return event.twjiekuang;
						},
						direct:true,
						content:function(){
							player.removeSkill('twjiekuang_after');
							var card=get.autoViewAs({
								name:trigger.card.name,
								nature:trigger.card.nature,
								isCard:true
							});
							if(!game.countPlayer2(current=>{
								return current.hasHistory('damage',evt=>evt.card==trigger.card);
							})&&player.canUse(card,trigger.player,false)){
								player.useCard(card,trigger.player,false);
							}
						},
					},
				},
			},
			twneirao:{
				audio:2,
				derivation:'twluanlve',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return Math.max(0,player.hp)+player.maxHp<=9;
				},
				content:function(){
					'step 0'
					player.awakenSkill('twneirao');
					player.removeSkill('twjiekuang');
					game.log(player,'失去了技能','#g【竭匡】');
					'step 1'
					var num=player.countCards('he'),cards=[];
					player.discard(player.getCards('he'));
					for(var i=0;i<num;i++){
						var card=get.cardPile(function(card){
							return card.name=='sha'&&!cards.includes(card);
						});
						if(card) cards.push(card);
					}
					if(cards.length) player.gain(cards,'gain2');
					'step 2'
					player.addSkillLog('twluanlve');
				},
			},
			twluanlve:{
				audio:2,
				enable:'phaseUse',
				onremove:true,
				locked:false,
				viewAs:{
					name:'shunshou',
					storage:{twluanlve:true}
				},
				viewAsFilter:function(player){
					return player.isPhaseUsing()&&player.countCards('hs',{name:'sha'})>=player.countMark('twluanlve');
				},
				filterCard:function(card,player){
					if(player.countMark('twluanlve')==0) return false;
					return card.name=='sha';
				},
				selectCard:function(){
					var player=_status.event.player;
					if(player.countMark('twluanlve')==0) return -1;
					return player.countMark('twluanlve');
				},
				onChooseToUse:function(event){
					if(!game.online&&event.type=='phase'){
						var targets=[];
						game.countPlayer2(current=>{
							var history=current.getHistory('useCard');
							if(!history.length) return false;
							for(var evt of history){
								if(evt.card&&evt.card.name=='shunshou'){
									targets.addArray(evt.targets);
								}
							}
						});
						event.set('twluanlve_ban',targets);
					}
				},
				position:'hs',
				log:false,
				group:['twluanlve_directHit'],
				precontent:function(){
					player.logSkill('twluanlve');
					player.addMark('twluanlve',1,false);
				},
				ai:{
					order:function(){
						return get.order({name:'shunshou'})+1;
					},
				},
				mod:{
					playerEnabled:function(card,player,target){
						if(!_status.event.twluanlve_ban||!Array.isArray(_status.event.twluanlve_ban)) return;
						if(player.isPhaseUsing()&&card.name=='shunshou'&&card.storage&&card.storage.twluanlve&&_status.event.twluanlve_ban.includes(target)) return false;
					},
				},
				subSkill:{
					directHit:{
						trigger:{player:'useCard'},
						filter:function(event,player){
							return event.card.name=='shunshou';
						},
						direct:true,
						content:function(){
							trigger.directHit.addArray(game.players);
							game.log(trigger.card,'不可被响应');
						},
						ai:{
							directHit_ai:true,
							skillTagFilter:function(player,tag,arg){
								return arg&&arg.card&&arg.card.name=='shunshou';
							},
						},
					}
				},
			},
			//冯习
			twqingkou:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return player.canUse('juedou',current,false);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twqingkou'),'视为对一名其他角色使用一张【决斗】',function(card,player,target){
						return player.canUse('juedou',target,false);
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'juedou'},player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twqingkou',target);
						player.useCard({name:'juedou',isCard:true,storage:{twqingkou:true}},target,false);
						player.addTempSkill('twqingkou_after');
					}
				},
				subSkill:{
					after:{
						trigger:{global:'useCardAfter'},
						filter:function(event,player){
							return event.card.storage&&event.card.storage.twqingkou;
						},
						charlotte:true,
						direct:true,
						content:function(){
							var targets=game.filterPlayer(current=>{
								return current.hasHistory('sourceDamage',function(evt){
									return evt.card==trigger.card;
								});
							}).sortBySeat();
							for(var target of targets){
								target.draw();
								if(target==player){
									player.skip('phaseJudge');
									game.log(player,'跳过了','#y判定阶段');
									player.skip('phaseDiscard');
									game.log(player,'跳过了','#y弃牌阶段');
								}
							}
						},
					},
				},
			},
			//张既
			twdingzhen:{
				audio:2,
				trigger:{global:'roundStart'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return get.distance(player,current)<=Math.max(0,player.hp);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twdingzhen'),[1,Infinity],function(card,player,target){
						return get.distance(player,target)<=player.hp;
					}).set('ai',function(target){
						var player=_status.event.player;
						if(target==player) return 0;
						return Math.max(-get.attitude(player,target),1);
					});
					'step 1'
					if(result.bool){
						result.targets.sortBySeat();
						var targets=result.targets;
						event.targets=targets;
						player.logSkill('twdingzhen',targets);
						event.num=0;
					}
					else event.finish();
					'step 2'
					var target=targets[num];
					event.target=target;
					target.chooseToDiscard('h',{name:'sha'},'定镇：弃置一张【杀】，或本轮你于回合内使用的第一张牌不能指定'+get.translation(player)+'为目标').set('ai',function(card){
						if(_status.event.goon) return 1;
						return 0;
					}).set('goon',get.attitude(target,player)<0&&player.countCards('hs')<=3&&target.countCards('hs',card=>{
						return target.hasValueTarget(card);
					})>1);
					'step 3'
					if(result.bool) target.addExpose(0.1);
					else{
						target.addSkill('twdingzhen_target');
						target.markAuto('twdingzhen_target',[player]);
					}
					'step 4'
					if(event.num<event.targets.length-1){
						event.num++;
						event.goto(2);
					}
				},
				subSkill:{
					target:{
						charlotte:true,
						onremove:true,
						mark:true,
						silent:true,
						trigger:{global:'roundStart'},
						firstDo:true,
						content:function(){
							player.removeSkill('twdingzhen_target');
						},
						intro:{
							markcount:()=>0,
							content:'回合内使用的第一张牌不能指定$为目标',
						},
						mod:{
							playerEnabled:function(card,player,target){
								if(_status.currentPhase==player&&!player.countUsed()&&player.getStorage('twdingzhen_target').includes(target)) return false;
							},
						},
					},
				},
			},
			twyouye:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return event.player!=player&&!event.player.getHistory('sourceDamage',function(evt){
						return evt.player==player;
					}).length&&player.getExpansions('twyouye').length<5;
				},
				forced:true,
				group:'twyouye_give',
				content:function(){
					player.addToExpansion(get.cards(),'gain2').gaintag.add('twyouye');
				},
				marktext:'蓄',
				intro:{
					name:'蓄(攸业)',
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				subSkill:{
					give:{
						audio:'twyouye',
						trigger:{source:'damageSource',player:'damageEnd'},
						filter:function(event,player){
							return player.getExpansions('twyouye').length;
						},
						forced:true,
						content:function(){
							'step 0'
							event.boolx=_status.currentPhase&&_status.currentPhase.isIn();
							event.cards=player.getExpansions('twyouye');
							if(_status.connectMode) game.broadcastAll(function(){_status.noclearcountdown=true});
							event.given_map={};
							'step 1'
							if(event.cards.length>1){
								player.chooseCardButton('攸业：请选择要分配的牌',true,event.cards,[1,event.cards.length]).set('ai',function(button){
									if(ui.selected.buttons.length) return 0;
									return get.value(button.link,_status.event.player);
								});
							}
							else if(event.cards.length==1) event._result={links:event.cards.slice(0),bool:true};
							else event.finish();
							'step 2'
							if(result.bool){
								var cards=result.links;
								event.cards2=cards;
								player.chooseTarget('选择一名角色获得'+get.translation(cards),function(card,player,target){
									var evt=_status.event.getParent();
									var cards=evt.cards,cards2=evt.cards2.slice();
									if(cards.removeArray(cards2).length>0||!evt.boolx) return true;
									return target==_status.currentPhase;
								},event.cards.length==1).set('ai',function(target){
									var att=get.attitude(_status.event.player,target);
									if(_status.event.enemy) return Math.max(0.01,100-att);
									else if(att>0) return Math.max(0.1,att/(1+target.countCards('h')+(_status.event.getParent().given_map[target.playerid]||0)));
									else return Math.max(0.01,(100+att)/100);
								}).set('enemy',get.value(cards[0],player,'raw')<0);
							}
							'step 3'
							if(result.bool){
								var cards=event.cards2;
								event.cards.removeArray(cards);
								event.togive=cards.slice(0);
								if(result.targets.length){
									if(result.targets[0]==_status.currentPhase) event.boolx=false;
									var id=result.targets[0].playerid,map=event.given_map;
									if(!map[id]) map[id]=[];
									map[id].addArray(event.togive);
								}
								if(event.cards.length>0) event.goto(1);
							}
							else event.goto(1);
							'step 4'
							if(_status.connectMode) game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
							var list=[];
							for(var i in event.given_map){
								var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
								player.line(source,'green');
								list.push([source,event.given_map[i]]);
								game.log(source,'获得了',event.given_map[i]);
							}
							game.loseAsync({
								gain_list:list,
								giver:player,
								animate:'gain2',
							}).setContent('gaincardMultiple');
						},
					},
				},
			},
			//荀谌
			twweipo:{
				audio:'mjweipo',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('he');
					});
				},
				filterTarget:function(card,player,target){
					return target.countCards('he');
				},
				content:function(){
					'step 0'
					target.chooseToDiscard('he',true);
					'step 1'
					var list=['binglinchengxiax'];
					list.addArray(get.zhinangs());
					player.chooseButton(['危迫：令其获得一张智囊牌或【兵临城下】',[list,'vcard']],true).set('ai',function(button){
						return _status.event.getParent().target.getUseValue({name:button.link[2]});
					});
					'step 2'
					if(result.bool){
						var name=result.links[0][2],card=false;
						game.log(player,'选择了','#y'+get.translation(name));
						if(name=='binglinchengxiax'){
							if(!_status.binglinchengxiax){
								_status.binglinchengxiax=[
									['spade',7],
									['club',7],
									['club',13],
								];
								game.broadcastAll(function(){lib.inpile.add('binglinchengxiax')});
							}
							if(_status.binglinchengxiax.length){
								var info=_status.binglinchengxiax.randomRemove();
								card=game.createCard2('binglinchengxiax',info[0],info[1]);
							}
						}
						if(!card) card=get.cardPile(name);
						if(card) target.gain(card,'gain2');
					}
				},
				ai:{
					order:7.1,
					result:{
						target:function(player,target){
							if(target==player) return player.countCards('he')?10:0.01;
							return (target.countCards('he')+0.5)*Math.sqrt(Math.max(1,target.hp));
						},
					},
				},
			},
			twmouzhi:{
				audio:'mjmouzhi',
				intro:{content:'上次受到伤害的颜色：$'},
				trigger:{player:'damageBegin4'},
				forced:true,
				group:'twmouzhi_mark',
				filter:function(event,player){
					if(!event.card||get.color(event.card)=='none') return false;
					var all=player.getAllHistory('damage');
					if(!all.length) return false;
					return all[all.length-1].card&&get.color(all[all.length-1].card)==get.color(event.card);
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:(card,player,target)=>{
							if(typeof card==='object'&&get.tag(card,'damage')){
								let color=get.color(card);
								if(color==='none') return;
								let all=target.getAllHistory('damage');
								if(!all.length||!all[all.length-1].card) return;
								if(get.color(all[all.length-1].card)===color) return 'zeroplayertarget';
							}
						},
					},
				},
				subSkill:{
					mark:{
						trigger:{player:'damage'},
						silent:true,
						firstDo:true,
						content:function(){
							if(!trigger.card||get.color(trigger.card)=='none') player.unmarkSkill('twmouzhi');
							else {
								player.markSkill('twmouzhi');
								player.storage.twmouzhi=get.color(trigger.card);
								game.broadcastAll(function(player,color){
									if(player.marks.twmouzhi){
										player.marks.twmouzhi.firstChild.innerHTML='<font color='+color+'>谋</font>';
									}
									player.storage.twmouzhi=color;
								},player,player.storage.twmouzhi)
							}
						},
					},
				},
			},
			//蒋钦
			twshangyi:{
				audio:'shangyi',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h');
					});
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				filterCard:true,
				position:'he',
				content:function(){
					'step 0'
					target.viewHandcards(player);
					var chooseButton;
					if(player.countCards('h')) chooseButton=player.chooseButton([1,2],['###尚义###<div class="text center">选择'+get.translation(target)+'的一张手牌以弃置，或选择你与其的各一张牌以交换</div>','<div class="text center">'+get.translation(target)+'的手牌</div>',target.getCards('h'),'<div class="text center">你的手牌</div>',player.getCards('h')],true);
					else chooseButton=player.chooseButton(['###尚义###<div class="text center">弃置'+get.translation(target)+'的一张手牌</div>','<div class="text center">'+get.translation(target)+'的手牌</div>',target.getCards('h')],true);
					chooseButton.set('target',target);
					chooseButton.set('ai',function(button){
						var player=_status.event.player,owner=get.owner(button.link),color=get.color(button.link,owner),value=get.value(button.link,owner);
						if(player.countCards('h')){
							if(!ui.selected.buttons.length){
								if(player.countCards('h',function(card){
									return get.color(card,player)=='red'&&get.value(card)<6;
								})&&color=='red'&&value>7) return value*3;
								return value;
							}
							else {
								if(get.value(ui.selected.buttons[0].link)<4) return 0;
								return 4+(get.color(ui.selected.buttons[0].link,get.owner(ui.selected.buttons[0].link))=='red'?3:1)-value;
							}
						}
						else {
							if(color=='black') return value*1.5;
							return value;
						}
					});
					chooseButton.set('filterButton',function(button){
						if(get.itemtype(button.link)!='card') return false;
						if(!ui.selected.buttons.length&&get.owner(button.link)!=_status.event.target) return false;
						if(ui.selected.buttons.length&&get.owner(ui.selected.buttons[0].link)==get.owner(button.link)) return false;
						return true;
					});
					'step 1'
					if(result.bool){
						if(result.links.length==1){
							target.discard(result.links[0]).discarder=player;
							if(get.color(result.links[0],target)!='black') event.finish();
						}
						else {
							var links=result.links.slice();
							if(get.owner(links[0])!=player) links.reverse();
							var card1=links[0],card2=links[1];
							player.swapHandcards(target,[card1],[card2]);
							if(get.color(card1,player)!='red'||get.color(card2,target)!='red') event.finish();
						}
					}
					else event.finish();
					'step 2'
					player.draw();
				},
				ai:{
					order:10,
					result:{target:-1},
				},
			},
			twxiangyu:{
				group:'twxiangyu_lose',
				shaRelated:true,
				audio:'zniaoxiang',
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&get.distance(player,event.player)<player.getAttackRange();
				},
				forced:true,
				logTarget:'target',
				init:function(player){
					var target=_status.currentPhase;
					if(!target||!target!=player) return;
					if(!player.getStorage('twxiangyu_range').length){
						var targets=game.filterPlayer(current=>{
							return current.getHistory('lose').length;
						});
						if(targets.length){
							player.addTempSkill('twxiangyu_range');
							player.markAuto('twxiangyu_range',targets);
						}
					}
				},
				content:function(){
					var id=trigger.target.playerid;
					var map=trigger.getParent().customArgs;
					if(!map[id]) map[id]={};
					if(typeof map[id].shanRequired=='number'){
						map[id].shanRequired++;
					}
					else map[id].shanRequired=2;
				},
				mod:{
					attackRange:function(player,num){
						return num+Math.min(5,player.getStorage('twxiangyu_range').length);
					},
				},
				subSkill:{
					lose:{
						trigger:{
							global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							return player==_status.currentPhase&&game.hasPlayer(function(current){
								if(player.getStorage('twxiangyu_range').includes(current)) return false;
								var evt=event.getl(current);
								return evt&&evt.cards2&&evt.cards2.length>0;
							});
						},
						silent:true,
						charlotte:true,
						content:function(){
							player.addTempSkill('twxiangyu_range');
							player.markAuto('twxiangyu_range',game.filterPlayer(function(current){
								if(player.getStorage('twxiangyu_range').includes(current)) return false;
								var evt=trigger.getl(current);
								return evt&&evt.cards2&&evt.cards2.length>0;
							}));
							player.syncStorage('twxiangyu_range');
						},
					},
					range:{
						marktext:'羽',
						intro:{
							content:function(storage,player){
								var num=Math.min(5,storage?storage.length:0);
								return '攻击范围+'+num;
							},
						},
						charlotte:true,
						onremove:true,
					},
				},
			},
			//顾雍
			twgyshenxing:{
				audio:'xinshenxing',
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('he')>=Math.min(2,player.countMark('twgyshenxing'));
				},
				selectCard:function(){
					return Math.min(2,_status.event.player.countMark('twgyshenxing'));
				},
				prompt:function(){
					return '弃置'+get.cnNumber(Math.min(2,_status.event.player.countMark('twgyshenxing')))+'张牌并摸一张牌';
				},
				check:function(card){
					var num=_status.event.player.countCards('h',{color:get.color(card)});
					if(get.position(card)=='e') num++;
					return (Math.max(4,7.1-num)-get.value(card))/num;
				},
				filterCard:true,
				position:'he',
				content:function(){
					player.draw();
					player.addMark('twgyshenxing',1);
				},
				marktext:'慎',
				intro:{content:'已发动过#次'},
				ai:{
					order:function(item,player){
						if(!player.hasMark('twgyshenxing')) return 10;
						return 1;
					},
					result:{player:1},
				},
			},
			twbingyi:{
				audio:'bingyi_xin_guyong',
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.countCards('h');
				},
				filterx:function(event,player){
					var cards=player.getCards('h');
					if(cards.length==1) return true;
					var color=get.color(cards[0],player),type=get.type2(cards[0],player);
					for(var i=1; i<cards.length; i++){
						if(color&&get.color(cards[i],player)!=color) color=false;
						if(type&&get.type2(cards[i],player)!=type) type=false;
						if(!color&&!type) return false;
					}
					return true;
				},
				filtery:function(event,player){
					var cards=player.getCards('h');
					if(player.countCards('h')<=1) return false;
					var color=get.color(cards[0],player),type=get.type2(cards[0],player);
					var colorx=true,typex=true;
					for(var i=1; i<cards.length; i++){
						if(color&&get.color(cards[i],player)!=color) colorx=false;
						if(type&&get.type2(cards[i],player)!=type) typex=false;
					}
					return colorx&&typex;
				},
				direct:true,
				content:function(){
					'step 0'
					event.boolx=false;
					if(lib.skill.twbingyi.filtery(trigger,player)) event.boolx=true;
					if(lib.skill.twbingyi.filterx(trigger,player)){
						player.chooseTarget(get.prompt('twbingyi'),'选择至多'+get.cnNumber(player.countCards('h'))+'名角色，你展示所有手牌，这些角色各摸一张牌'+(event.boolx?'，然后你移去所有“慎”':''),[0,player.countCards('h')]).set('ai',function(target){
							return get.attitude(_status.event.player,target);
						}).animate=false;
					}
					else player.chooseBool(get.prompt('twbingyi'),'展示所有手牌').ai=function(){return false};
					'step 1'
					if(result.bool){
						player.logSkill('twbingyi');
						player.showHandcards(get.translation(player)+'发动了【秉壹】');
						event.targets=result.targets;
					}
					else event.finish();
					'step 2'
					if(targets&&targets.length){
						player.line(targets,'green');
						targets.sortBySeat();
						game.asyncDraw(targets);
					}
					'step 3'
					if(event.boolx){
						player.removeMark('twgyshenxing',player.countMark('twgyshenxing'));
					}
				},
				ai:{expose:0.1},
			},
			bingyi_xin_guyong:{audio:2},
			//陈武董袭
			twyilie:{
				audio:'spyilie',
				trigger:{player:'phaseUseBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseControl('选项一','选项二','背水！','cancel2').set('choiceList',[
						'本阶段内使用【杀】的次数上限+1',
						'本回合内使用【杀】指定处于连环状态的目标后，或使用【杀】被【闪】抵消时，摸一张牌',
						'背水！失去1点体力并依次执行上述所有选项',
					]).set('ai',function(){
						if(player.countCards('hs',function(card){
							return get.name(card)=='sha'&&player.hasValueTarget(card);
						})>player.getCardUsable({name:'sha'})){
							return player.hp>2?2:0;
						}
						return 1;
					}).set('prompt',get.prompt('twyilie'));
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twyilie');
						game.log(player,'选择了','#g【毅烈】','的','#y'+result.control);
						if(result.index%2==0) player.addTempSkill('twyilie_add','phaseUseEnd');
						if(result.index>0) player.addTempSkill('twyilie_miss');
						if(result.index==2) player.loseHp();
					}
				},
				subSkill:{
					add:{
						charlotte:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+1;
							},
						},
						mark:true,
						intro:{content:'本阶段使用【杀】的次数上限+1'},
					},
					miss:{
						charlotte:true,
						audio:'spyilie',
						trigger:{player:['useCardToTargeted','shaMiss']},
						filter:function(event,player,name){
							if(name=='useCardToTargeted') return event.card.name=='sha'&&event.target.isLinked();
							return true;
						},
						forced:true,
						content:function(){
							player.draw();
						},
					},
				},
			},
			twfenming:{
				audio:'spfenming',
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target!=player&&(target.countCards('he')||!target.isLinked());
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twfenming'),function(card,player,target){
						return target!=player&&(target.countCards('he')||!target.isLinked());
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twfenming',target);
						var list=[],choiceList=[
							'令'+get.translation(target)+'弃置一张牌',
							'令'+get.translation(target)+'横置',
							'背水！横置并依次令'+get.translation(target)+'执行上述所有选项',
						];
						if(target.countCards('he')) list.push('选项一');
						else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
						if(!target.isLinked()) list.push('选项二');
						else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
						if(target.countCards('he')&&!target.isLinked()&&!player.isLinked()) list.push('背水！');
						else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+'</span>';
						if(list.length==1) event._result={control:list[0]};
						else player.chooseControl(list).set('choiceList',choiceList).set('ai',function(){
							var list=_status.event.controls;
							if(list.includes('背水！')) return '背水！';
							if(list.includes('选项一')) return '选项一';
							return '选项二';
						}).set('prompt','奋命：请选择一项');
					}
					else event.finish();
					'step 2'
					game.log(player,'选择了','#y'+result.control);
					if(result.control=='背水！'&&!player.isLinked()) player.link(true);
					if(result.control!='选项二') target.chooseToDiscard('he',true);
					if(result.control!='选项一'&&!target.isLinked()) target.link(true);
				},
			},
			//韩当
			twgongji:{
				audio:'regongji',
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:true,
				locked:false,
				filter:function(event,player){
					return player.countCards('he');
				},
				check:function(card){
					var base=0,player=_status.event.player,suit=get.suit(card,player),added=false,added2=false,added3;
					if(get.type(card)=='equip'&&game.hasPlayer(function(target){
						var att=get.attitude(player,target);
						if(att>=0) return 0;
						if(target.countCards('he',function(card){
							return get.value(card)>5;
						})) return -att;
					})) base+=6;
					var hs=player.getCards('h');
					var muniu=player.getEquip('muniu');
					if(muniu&&card!=muniu&&muniu.cards) hs=hs.concat(muniu.cards);
					for(var i of hs){
						if(i!=card&&get.name(i)=='sha'){
							if(get.suit(i,player)==suit){
								if(player.hasValueTarget(i,false)){
									added3=true;
									base+=5.5;
								}
							}
							else {
								if(player.hasValueTarget(i,false)) added2=true;
								if(!added&&!player.hasValueTarget(i,null,true)&&player.hasValueTarget(i,false,true)){
									base+=4;
									added=true;
								}
							}
						}
					}
					if(added3&&!added2) base-=4.5;
					return base-get.value(card);
				},
				content:function(){
					'step 0'
					player.addTempSkill('twgongji2');
					player.markAuto('twgongji2',[get.suit(cards[0],player)]);
					'step 1'
					if(get.type(cards[0],null,cards[0].original=='h'?player:false)=='equip'){
						player.chooseTarget('是否弃置一名角色的一张牌？',function(card,player,target){
							return player!=target&&target.countCards('he');
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'guohe_copy2'},player,player);
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.line(result.targets,'green');
						player.discardPlayerCard(result.targets[0],'he',true);
					}
				},
				mod:{
					attackRangeBase:function(){
						return Infinity;
					},
				},
				ai:{
					order:4.5,
					result:{player:1},
				},
			},
			twgongji2:{
				charlotte:true,
				onremove:true,
				mark:true,
				intro:{content:'使用$花色的杀无任何次数限制'},
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(_status.currentPhase==player&&event.card.name=='sha'&&
					player.getStorage('twgongji2').includes(get.suit(event.card))&&event.addCount!==false) return true;
					return false;
				},
				forced:true,
				locked:false,
				popup:false,
				firstDo:true,
				content:function(){
					trigger.addCount=false;
					if(player.stat[player.stat.length-1].card.sha>0){
						player.stat[player.stat.length-1].card.sha--;
					}
				},
				mod:{
					cardUsable:function(card,player){
						if(card.name=='sha'&&player.getStorage('twgongji2').includes(get.suit(card))) return Infinity;
					},
					aiOrder:function(player,card,num){
						if(get.name(card)=='sha'&&!player.getStorage('twgongji2').includes(get.suit(card))) return num+1;
					},
				},
			},
			twjiefan:{
				skillAnimation:true,
				animationColor:'wood',
				audio:'jiefan_re_handang',
				limited:true,
				enable:'phaseUse',
				filterTarget:true,
				content:function(){
					'step 0'
					player.awakenSkill('twjiefan');
					event.players=game.filterPlayer(function(current){
						return current!=target&&current.inRange(target);
					});
					event.players.sortBySeat();
					'step 1'
					if(event.players.length){
						event.current=event.players.shift();
						event.current.addTempClass('target');
						player.line(event.current,'green');
						if(!event.current.countCards('he')||!target.isIn()) event._result={bool:false};
						else{
							event.current.chooseToDiscard({subtype:'equip1'},'he','解烦：弃置一张武器牌，或令'+get.translation(target)+'摸一张牌').set('ai',function(card){
								if(!_status.event.target.isIn()) return 0;
								if(get.attitude(_status.event.player,_status.event.target)<0) return 7-get.value(card);
								return -1;
							}).set('target',target);
						}
					}
					else {
						player.addSkill('twjiefan2');
						player.markAuto('twjiefan2',[target]);
						event.finish();
					}
					'step 2'
					if(!result.bool&&target.isIn()) target.draw();
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							if(player.hp>2&&game.phaseNumber<game.players.length*2) return 0;
							var num=0,players=game.filterPlayer();
							for(var i=0; i<players.length; i++){
								if(players[i]!=target&&players[i].inRange(target)){
									num++;
								}
							}
							return num;
						}
					}
				}
			},
			twjiefan2:{
				charlotte:true,
				onremove:true,
				trigger:{global:'dying'},
				filter:function(event,player){
					return player.getStorage('twjiefan2').includes(event.player);
				},
				forced:true,
				popup:false,
				content:function(){
					player.removeSkill('twjiefan2');
					player.restoreSkill('twjiefan');
				},
			},
			jiefan_re_handang:{audio:2},
			//纪灵
			twshuangren:{
				audio:'shuangren',
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player,name){
					if(!player.countCards('h')) return false;
					if(name=='phaseUseEnd') return !player.hasHistory('sourceDamage',function(evt){
						return evt.card.name=='sha'&&event.getParent('phaseUse')==evt;
					});
					return true;
				},
				direct:true,
				group:'twshuangren_end',
				preHidden:true,
				content:function(){
					'step 0'
					var forced=event.getParent(2).name=='twshuangren_end'&&game.hasPlayer(current=>{
						return player.canCompare(current);
					});
					var str='与一名角色拼点，若你：赢，你可以视为对至多两名至其的距离不大于1的角色使用一张【杀】；没赢，其可以视为对你使用一张【杀】';
					player.chooseTarget(forced?'双刃：选择一名角色':get.prompt('twshuangren'),str,forced,(card,player,target)=>{
						return player.canCompare(target);
					}).set('ai',target=>{
						if(_status.event.goon) return get.effect(target,{name:'sha'},_status.event.player);
						return 0;
					}).set('goon',event.triggername!='phaseUseBegin'||(player.countCards('hs','sha')>0&&player.hasValueTarget({name:'sha'})));
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twshuangren',target);
						if(player.canCompare(target)) player.chooseToCompare(target);
						else event.finish();
					}
					else event.finish();
					'step 2'
					if(result.bool){
						event.sha=true;
						player.chooseTarget([1,2],'请选择【杀】的目标',true,function(card,player,target){
							if(!player.canUse('sha',target,false,false)) return false;
							return get.distance(target,_status.event.targetx)<=1;
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'sha'},player,player);
						}).set('targetx',target);
					}
					else target.chooseBool('双刃：是否视为对'+get.translation(player)+'使用一张杀？').set('choice',get.effect(player,{name:'sha'},target,target)>0);
					'step 3'
					if(result.bool){
						if(event.sha==true) {
							result.targets.sortBySeat();
							for(var i of result.targets){
								player.useCard({name:'sha',isCard:true},i,false);
							}
						}
						else target.useCard({name:'sha',isCard:true},player,false);
					}
				},
				subSkill:{
					end:{
						audio:'shuangren',
						trigger:{player:'phaseUseEnd'},
						filter:function(event,player,name){
							if(!player.countCards('h')) return false;
							return !player.hasHistory('useSkill',function(evt){
								return evt.skill=='twshuangren';
							})&&!player.hasHistory('sourceDamage',function(evt){
								return evt.card.name=='sha';
							});
						},
						direct:true,
						preHidden:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('twshuangren'),'弃置一张牌发动〖双刃〗','he').set('ai',function(card){
								if(_status.event.goon) return 5-get.value(card);
								return 0;
							}).set('goon',function(){
								return player.hasCard(function(card){
									if(player.needsToDiscard()>1) return card.number>10&&get.value(card)<=5;
									return (card.number>=9&&get.value(card)<=5)||get.value(card)<=3;
								});
							}()).setHiddenSkill('twshuangren').set('logSkill','twshuangren');
							'step 1'
							if(result.bool){
								player.useSkill('twshuangren');
							}
						}
					}
				}
			},
			//法正
			twxuanhuo:{
				audio:'rexuanhuo',
				trigger:{player:'phaseDrawEnd'},
				filter:function(event,player){
					return player.countCards('he')>1&&game.countPlayer()>2;
				},
				direct:true,
				content:function(){
					'step 0'
					var ai2=function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)<=0) return 0;
						var list=['sha','juedou'];
						var num=Math.max.apply(Math,list.map(function(i){
							return target.getUseValue({name:i,isCard:true},false);
						}));
						if(target.hasSkillTag('nogain')) num/=4;
						return num;
					};
					player.chooseCardTarget({
						prompt:get.prompt2('twxuanhuo'),
						filterCard:true,
						selectCard:2,
						position:'he',
						filterTarget:lib.filter.notMe,
						goon:game.hasPlayer(function(current){
							return current!=player&&ai2(player,current)>0;
						}),
						ai1:function(card){
							if(!_status.event.goon) return 0;
							return 7-get.value(card);
						},
						ai2:ai2,
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twxuanhuo',target);
						player.give(result.cards,target);
					}
					else event.finish();
					'step 2'
					if(game.hasPlayer(function(current){
						return current!=player&&current!=target;
					})) player.chooseTarget(function(card,player,target){
						return target!=player&&target!=_status.event.target;
					},'选择'+get.translation(target)+'使用【杀】或【决斗】的目标',true).set('target',target).set('ai',function(target){
						var evt=_status.event;
						var list=['sha','juedou'];
						return Math.max.apply(Math,list.map(function(i){
							var card={name:i,isCard:true};
							if(!evt.target.canUse(card,target,false)) return 0;
							return get.effect(target,card,evt.target,evt.player);
						}));
					});
					else event.finish();
					'step 3'
					var target2=result.targets[0];
					event.target2=target2;
					player.line(target2);
					var vcards=[];
					if(target.canUse({name:'sha',isCard:true},target2,false)) vcards.push(['基本','','sha']);
					if(target.canUse({name:'juedou',isCard:true},target2,false)) vcards.push(['锦囊','','juedou']);
					if(!vcards.length){
						if(!target.countCards('h')) event.finish();
						else event._result={index:1};
					}
					else if(!target.countCards('h')){
						event.vcards=vcards;
						event._result={index:0};
					}
					else {
						event.vcards=vcards;
						target.chooseControl().set('choiceList',[
							'视为对'+get.translation(target2)+'使用一张【杀】或【决斗】',
							'令'+get.translation(player)+'获得你的两张牌',
						]);
					}
					'step 4'
					if(result.index==0){
						if(event.vcards.length==1) event._result={links:event.vcards,bool:true};
						else target.chooseButton(['请选择要对'+get.translation(event.target2)+'使用的牌',[event.vcards,'vcard']],true).set('ai',function(button){
							var player=_status.event.player;
							return get.effect(_status.event.getParent().target2,{name:button.link[2],isCard:true},player,player);
						});
					}
					else {
						player.gainPlayerCard(target,2,'he',true);
						event.finish();
					}
					'step 5'
					if(result.bool) target.useCard({name:result.links[0][2],isCard:true},false,event.target2);
				},
				ai:{
					expose:0.15,
				},
			},
			twenyuan:{
				audio:'reenyuan',
				group:['twenyuan1','twenyuan2'],
			},
			twenyuan1:{
				audio:'reenyuan',
				trigger:{
					global:['gainAfter','loseAsyncAfter']
				},
				direct:true,
				filter:function(event,player){
					var cards=event.getg(player);
					if(!cards.length||cards.length<2) return false;
					return game.countPlayer(current=>{
						if(current==player) return false;
						var evt=event.getl(current);
						if(evt&&evt.cards&&evt.cards.filter(card=>cards.includes(card)).length>=2) return true;
						return false;
					});
				},
				check:function(event,player){
					var cards=event.getg(player);
					var target=game.filterPlayer(current=>{
						if(current==player) return false;
						var evt=event.getl(current);
						if(evt&&evt.cards&&evt.cards.filter(card=>cards.includes(card)).length>=2) return true;
						return false;
					})[0];
					return get.attitude(player,target)>0;
				},
				logTarget:function(event,player){
					var cards=event.getg(player);
					return game.filterPlayer(current=>{
						if(current==player) return false;
						var evt=event.getl(current);
						if(evt&&evt.cards&&evt.cards.filter(card=>cards.includes(card)).length>=2) return true;
						return false;
					});
				},
				content:function(){
					'step 0'
					var target=lib.skill.twenyuan1.logTarget(trigger,player)[0];
					event.target=target;
					var list=['摸一张牌'];
					var prompt2='令'+get.translation(target)+'摸一张牌';
					if((!target.countCards('h')||!target.countCards('e'))&&target.isDamaged()){
						list.push('回复1点体力');
						prompt2+='或回复1点体力';
					}
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('twenyuan',target)).set('prompt2',prompt2).set('ai',()=>_status.event.choice).set('choice',function(){
						if(get.attitude(player,target)>0){
							if(target.hp<=2&&list.includes('回复1点体力')) return '回复1点体力';
							return 0;
						}
						return 'cancel2';
					}());
					'step 1'
					if(result.control=='cancel2'){
						event.finish(); return;
					}
					player.logSkill('twenyuan1',target);
					if(result.control=='回复1点体力') target.recover();
					else target.draw();
				},
			},
			twenyuan2:{
				audio:'reenyuan',
				trigger:{player:'damageEnd'},
				logTarget:'source',
				filter:function(event,player){
					return event.source&&event.source.isIn();
				},
				check:function(event,player){
					var att=get.attitude(player,event.source);
					var num=event.source.countCards('h');
					if(att<=0) return true;
					if(get.effect(event.source,{name:'losehp'},player,event.source)>0) return true;
					if(num>2) return true;
					if(num) return att<4;
					return false;
				},
				prompt2:'令其选择一项：1.失去1点体力；2.交给你一张手牌，若此牌的花色不为♥，你摸一张牌。',
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					var target=trigger.source;
					event.count--;
					if(!target.countCards('h')) event._result={bool:false};
					else target.chooseCard('h','恩怨：将一张手牌交给'+get.translation(player)+'，或失去1点体力').set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							if(get.suit(card)!='heart') return 15-get.value(card);
							return 11-get.value(card);
						}
						else {
							var num=12-_status.event.player.hp*2;
							if(get.suit(card)!='heart') num-=2;
							return num-get.value(card);
						}
					});
					'step 2'
					var target=trigger.source;
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						target.give(card,player);
					}
					else{
						target.loseHp();
						event.goto(4);
					}
					'step 3'
					if(get.suit(card)!='heart') player.draw();
					'step 4'
					var target=trigger.source;
					if(target.isIn()&&event.count>0&&player.hasSkill('twenyuan')) player.chooseBool(get.prompt('twenyuan',target),lib.skill.twenyuan2.prompt2).set('ai',function(){
						var evt=_status.event.getTrigger();
						return lib.skill.twenyuan2.check(evt,evt.player);
					});
					else event.finish();
					'step 5'
					if(result.bool){
						player.logSkill('twenyuan2',trigger.source);
						event.goto(1);
					}
				},
			},
			//马岱
			twqianxi:{
				audio:'qianxi',
				trigger:{player:'phaseZhunbeiBegin'},
				preHidden:true,
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(player.hasCard((card)=>lib.filter.cardDiscardable(card,player,'tweqianxi'),'he')) player.chooseToDiscard('he',true);
					else event.finish();
					'step 2'
					if(!result.bool||!game.hasPlayer(target=>{
						return player!=target&&get.distance(player,target)<=1;
					})){
						event.finish();
						return;
					}
					event.color=get.color(result.cards[0],player);
					player.chooseTarget(function(card,player,target){
						return player!=target&&get.distance(player,target)<=1;
					},true).set('ai',function(target){
						return get.effect(target,{name:'sha'},_status.event.player,_status.event.player)+5;
					});
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.storage.twqianxi2=event.color;
						target.addTempSkill('twqianxi2');
						player.addTempSkill('twqianxi_self');
						player.markAuto('twqianxi_self',[target]);
					}
				},
				subSkill:{
					self:{
						audio:'qianxi',
						charlotte:true,
						onremove:true,
						forced:true,
						trigger:{player:'phaseJieshuBegin'},
						filter:function(event,player){
							return player.hasHistory('sourceDamage',evt=>{
								if(!evt.card||evt.card.name!='sha'||!evt.player.isIn()) return false;
								if(player.getStorage('twqianxi_self').includes(evt.player)) return true;
								return false;
							});
						},
						content:function(){
							'step 0'
							var targets=[];
							player.getHistory('sourceDamage',evt=>{
								if(!evt.card||evt.card.name!='sha') return false;
								if(player.getStorage('twqianxi_self').includes(evt.player)){
									targets.add(evt.player);
								}
								return false;
							});
							player.line(targets);
							for(var target of targets){
								target.storage.twqianxi3=target.storage.twqianxi2;
								target.addTempSkill('twqianxi3',{player:'phaseAfter'});
							}
						}
					}
				}
			},
			twqianxi2:{
				mark:true,
				charlotte:true,
				onremove:true,
				intro:{
					markcount:()=>0,
					content:function(storage){
						return '不能使用或打出'+get.translation(storage)+'手牌';
					},
				},
				mod:{
					cardEnabled2:function(card,player){
						if(get.itemtype(card)=='card'&&get.color(card)==player.getStorage('twqianxi2')&&get.position(card)=='h') return false;
					},
				},
			},
			twqianxi3:{
				mod:{
					cardEnabled2:function(card,player){
						if(get.itemtype(card)=='card'&&get.color(card)!=player.getStorage('twqianxi3')&&get.position(card)=='h') return false;
					},
				},
				mark:true,
				intro:{
					content:function(storage){
						return '不能使用或打出非'+get.translation(storage)+'手牌';
					},
				},
				charlotte:true,
				onremove:true,
			},
			//牛金
			twcuorui:{
				audio:'cuorui',
				limited:true,
				skillAnimation:true,
				animationColor:'thunder',
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('h')>player.countCards('h');
					});
				},
				check:function(event,player){
					var num=0;
					for(var target of game.players){
						if(target!=player&&target.countCards('h')>num) num=target.countCards('h');
					}
					num=Math.min(num,5+player.countCards('h'));
					return num-player.countCards('h')>=2;
				},
				prompt:function(event,player){
					var num=0;
					for(var target of game.players){
						if(target!=player&&target.countCards('h')>num) num=target.countCards('h');
					}
					num=Math.min(num,5+player.countCards('h'));
					return get.prompt('twcuorui')+'（可摸'+get.cnNumber(num-player.countCards('h'))+'张牌）';
				},
				content:function(){
					'step 0'
					player.awakenSkill('twcuorui');
					var num=0;
					for(var target of game.players){
						if(target!=player&&target.countCards('h')>num) num=target.countCards('h');
					}
					num=Math.min(num,5+player.countCards('h'));
					player.drawTo(num);
					if(!player.isDisabledJudge()){
						player.disableJudge();
						event.finish();
					}
					else player.chooseTarget('挫锐：是否对一名其他角色造成1点伤害？',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						player.line(result.targets[0]);
						result.targets[0].damage();
					}
				},
			},
			twliewei:{
				audio:'liewei',
				trigger:{source:'dieAfter'},
				forced:true,
				content:function(){
					'step 0'
					if(!player.hasSkill('twcuorui',null,null,false)||!player.awakenedSkills.includes('twcuorui')) event._result={index:0};
					else player.chooseControl().set('prompt','裂围：请选择一项').set('choiceList',[
						'摸两张牌',
						'重置〖挫锐〗'
					]).set('ai',function(){
						return 1;
					});
					'step 1'
					if(result.index==0) player.draw(2);
					else player.restoreSkill('twcuorui');
				},
			},
			//母兵脸
			twzhengrong:{
				audio:'drlt_zhenrong',
				trigger:{player:'useCardAfter',source:'damageSource'},
				filter:function(event,player){
					if(!event.isPhaseUsing(player)) return false;
					if(event.name=='damage') return player.getHistory('sourceDamage',evt=>{
						return evt.getParent('phaseUse')==event.getParent('phaseUse');
					}).indexOf(event)==0;
					if(!event.targets||event.targets.every(target=>target==player)) return false;
					return player.getAllHistory('useCard',function(evt){
						if(!evt.isPhaseUsing(player)) return false;
						if(evt.targets.every(target=>target==player)) return false;
						return true;
					}).indexOf(event)%2==1;
				},
				direct:true,
				content:function(){
					'step 0'
					if(!game.hasPlayer(function(target){
						return target!=player&&target.countCards('he');
					})){
						event.finish();
						return;
					}
					player.chooseTarget(get.prompt('twzhengrong'),'将一名其他角色的一张牌置于武将牌上，称为“荣”',function(card,player,target){
						return target!=player&&target.countCards('he');
					}).set('ai',function(target){
						return get.effect(target,{name:'guohe_copy2'},_status.event.player,_status.event.player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=result.targets[0];
						player.logSkill('twzhengrong',target);
						player.choosePlayerCard(target,'he',true);
					}
					else event.finish();
					'step 2'
					if(result.bool) player.addToExpansion(result.links,target,'give').gaintag.add('twzhengrong');
				},
				marktext:'荣',
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				}
			},
			twhongju:{
				derivation:['twqingce','twsaotao'],
				audio:'drlt_hongju',
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.getExpansions('twzhengrong').length>=3;
				},
				content:function(){
					'step 0'
					player.awakenSkill('twhongju');
					player.draw(player.getExpansions('twzhengrong').length);
					'step 1'
					if(player.countCards('h')==0) event.goto(3);
					else{
						var next=player.chooseToMove('鸿举：请选择要交换的手牌和“荣”');
						next.set('list',[
							[get.translation(player)+'（你）的“荣”',player.getExpansions('twzhengrong'),'twzhengrong_tag'],
							['手牌区',player.getCards('h')],
						]);
						next.set('filterMove',function(from,to){
							return typeof to!='number';
						});
						next.set('processAI',function(list){
							var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
								return player.getUseValue(a)-player.getUseValue(b);
							}),cards2=cards.splice(0,player.getExpansions('twzhengrong').length);
							return [cards2,cards];
						});
					}
					'step 2'
					if(result.bool){
						var pushs=result.moved[0],gains=result.moved[1];
						pushs.removeArray(player.getExpansions('twzhengrong'));
						gains.removeArray(player.getCards('h'));
						if(!pushs.length||pushs.length!=gains.length) return;
						player.addToExpansion(pushs,player,'giveAuto').gaintag.add('twzhengrong');
						game.log(player,'将',pushs,'作为“荣”置于武将牌上');
						player.gain(gains,'gain2');
					}
					'step 3'
					player.addSkillLog('twqingce');
					player.chooseBool('是否减1点体力上限并获得〖扫讨〗？').set('ai',()=>_status.event.bool).set('bool',player.isDamaged()&&player.countCards('h')>=3?(Math.random()<0.5?true:false):false);
					'step 4'
					if(result.bool){
						player.loseMaxHp();
						player.addSkillLog('twsaotao');
						game.delayx();
					}
				},
			},
			twqingce:{
				enable:'phaseUse',
				audio:'drlt_qingce',
				filter:function(event,player){
					return player.getExpansions('twzhengrong').length>0;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('清侧：请选择要移去的“荣”',player.getExpansions('twzhengrong'),'hidden');
					},
					backup:function(links,player){
						return {
							card:links[0],
							filterCard:function(){return false},
							selectCard:-1,
							filterTarget:function(card,player,target){
								return target.countDiscardableCards(player,'hej')>0;
							},
							delay:false,
							audio:'drlt_qingce',
							content:lib.skill.twqingce.contentx,
							ai:{
								result:{
									target:function(player,target){
										return get.effect(target,{name:'guohe'},player,target);
									},
								},
							},
						}
					},
					prompt:()=>'弃置一名角色区域内的一张牌',
				},
				contentx:function(){
					'step 0'
					var card=lib.skill.twqingce_backup.card;
					player.loseToDiscardpile([card]);
					'step 1'
					if(target.countDiscardableCards(player,'hej')>0) player.discardPlayerCard('hej',true,target);
				},
				ai:{
					order:8,
					result:{
						player:function(player){
							if(game.hasPlayer(function(target){
								return get.effect(target,{name:'guohe'},player,player)>4*Math.max(0,5-player.getExpansions('twzhengrong').length);
							})) return 1;
							return 0;
						},
					},
				},
			},
			twsaotao:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card.name=='sha'||get.type(event.card)=='trick';
				},
				forced:true,
				content:function(){
					trigger.directHit.addArray(game.players);
				},
				ai:{directHit_ai:true},
			},
			//大小乔
			twxingwu:{
				audio:'xingwu',
				trigger:{player:'phaseDiscardBegin'},
				filter:function(event,player){
					return player.countCards('he');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt('twxingwu'),'将一张牌置于武将牌上作为“星舞”').set('ai',function(card){
						if(_status.event.goon) return 20-get.value(card);
						return 7-get.value(card);
					}).set('goon',player.needsToDiscard()||player.getExpansions('twxingwu').length>1);
					'step 1'
					if(result.bool){
						player.logSkill('twxingwu');
						var cards=result.cards;
						player.addToExpansion(cards,player,'give').gaintag.add('twxingwu');
					}
					else event.finish();
					'step 2'
					game.delayx();
					if(player.getExpansions('twxingwu').length<3||!game.hasPlayer(current=>current!=player)) event.finish();
					'step 3'
					player.chooseButton(['是否移去三张“星舞”牌并发射核弹？',player.getExpansions('twxingwu')],3).set('ai',function(button){
						if(_status.event.goon) return 1;
						return 0;
					}).set('goon',game.hasPlayer(current=>get.damageEffect(current,player,player)<0));
					'step 4'
					if(result.bool) player.loseToDiscardpile(result.links);
					else event.finish();
					'step 5'
					player.chooseTarget('星舞：选择一名其他角色','弃置其装备区内的所有牌。然后对其造成2点伤害（若其性别包含女性则改为1点）',true,lib.filter.notMe).set('ai',function(target){
						return get.damageEffect(target,player,player)*Math.sqrt(4+target.countCards('e',function(card){
							return get.value(card,target)>0;
						}))*(target.hasSex('female')?1:2);
					});
					'step 6'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(target,'green');
						var num=target.countCards('e');
						if(num) player.discardPlayerCard(target,'e',num,true);
						target.damage(target.hasSex('female')?1:2);
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
					onunmark:function(storage,player){
						if(player.hasSkill('twpingting')) return;
						player.removeAdditionalSkill('twpingting');
					},
				},
				onremove:function(player,skill){
					if(player.hasSkill('twpingting')) return;
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
			},
			twpingting:{
				audio:2,
				trigger:{global:['roundStart','dying']},
				init:function(player,skill){
					if(player.getExpansions('twxingwu').length) player.addAdditionalSkill(skill,['tianxiang','liuli']);
					else player.removeAdditionalSkill(skill);
				},
				filter:function(event,player){
					if(event.name=='dying') return player==_status.currentPhase&&event.player!=player;
					return true;
				},
				forced:true,
				group:'twpingting_update',
				derivation:['tianxiang','liuli'],
				content:function(){
					'step 0'
					player.draw();
					player.chooseCard('he','娉婷：将一张牌置于武将牌上，称为“星舞”',true).set('ai',function(card){
						return -get.value(card);
					});
					'step 1'
					if(result.bool){
						var cards=result.cards;
						player.addToExpansion(cards,player,'give').gaintag.add('twxingwu');
					}
				},
				onremove:function(player,skill){
					if(player.hasSkill('twxingwu')) return;
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				subSkill:{
					update:{
						trigger:{player:['loseAfter','loseAsyncAfter','addToExpansionAfter']},
						filter:function(event,player){
							var cards=player.getExpansions('twxingwu'),skills=player.additionalSkills.twpingting;
							return !((cards.length&&skills&&skills.length)||(!cards.length&&(!skills||!skills.length)));
						},
						forced:true,
						silent:true,
						content:function(){
							lib.skill.twpingting.init(player,'twpingting');
						}
					}
				}
			},
			tianxiang_daxiaoqiao:{audio:2,inherit:'tianxiang'},
			liuli_daxiaoqiao:{audio:2,inherit:'liuli'},
			//傅肜
			twxuewei:{
				audio:'xuewei',
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return event.player!=player&&game.players.length>2&&!player.hasSkill('twxuewei_round');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twxuewei'),function(card,player,target){
						return target!=player&&target!=_status.event.getTrigger().player;
					}).set('ai',function(target){
						if(get.attitude(player,_status.event.getTrigger().player)>=0) return 0;
						return get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twxuewei',trigger.player,false);
						player.addTempSkill('twxuewei_round','roundStart');
						player.line2([trigger.player,target]);
						trigger.player.chooseControl('选项一','选项二').set('choiceList',[
							'本回合不能对'+get.translation(target)+'使用【杀】且手牌上限-2',
							'令'+get.translation(player)+'视为对你使用一张【决斗】',
						]).set('ai',function(){
							var player=_status.event.player,source=_status.event.getParent().player;
							if(get.effect(player,{name:'juedou'},source,player)>0) return 1;
							if(player.hp-player.countCards('h')>2||player.hp<=2) return 0;
							return 1;
						});
					}
					else event.finish();
					'step 2'
					game.log(trigger.player,'选择了','#g【血卫】','的','#y'+result.control);
					if(result.control=='选项一'){
						trigger.player.markAuto('twxuewei_block',[target]);
						trigger.player.addTempSkill('twxuewei_block');
					}
					else player.useCard({name:'juedou',isCard:true},trigger.player,false);
				},
				subSkill:{
					round:{charlotte:true},
					block:{
						charlotte:true,
						onremove:true,
						locked:true,
						mark:true,
						marktext:'卫',
						intro:{
							content:function(storage,player){
								if(!storage||!storage.length) return;
								return '不能对'+get.translation(storage)+'使用【杀】；手牌上限-'+(2*storage.length);
							}
						},
						mod:{
							maxHandcard:function(player,num){
								return num-2*player.getStorage('twxuewei_block').length;
							},
							playerEnabled:function(card,player,target){
								if(card.name=='sha'&&player.getStorage('twxuewei_block').includes(target)) return false;
							},
						},
					},
				},
			},
			twliechi:{
				audio:'liechi',
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return event.source&&event.source.hp>=player.hp&&(event.source.countCards('h')>player.countCards('h')||event.source.countCards('he'));
				},
				direct:true,
				content:function(){
					'step 0'
					var num=trigger.source.countCards('h')-player.countCards('h');
					event.num=num;
					var list=[],choiceList=[
						'令'+get.translation(trigger.source)+'弃置'+get.cnNumber(num)+'张手牌',
						'弃置'+get.translation(trigger.source)+'一张牌',
						'背水！弃置一张装备牌，然后依次执行以上所有选项',
					];
					if(trigger.source.countCards('h')>player.countCards('h')) list.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(trigger.source.countCards('he')) list.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(trigger.source.countCards('h')>player.countCards('h')&&trigger.source.countCards('he')&&player.countCards('he',{type:'equip'})&&game.getGlobalHistory('changeHp',evt=>{
						return evt.player==player&&evt.getParent()._dyinged;
					}).length) list.push('背水！');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+'（未进入过濒死状态）</span>';
					player.chooseControl(list,'cancel2').set('prompt',get.prompt('twliechi',trigger.source)).set('choiceList',choiceList).set('ai',()=>_status.event.choice).set('choice',function(){
						if(get.attitude(player,trigger.source)>0) return 'cancel2';
						if(list.includes('背水！')) return '背水！';
						if(num>1) return '选项一';
						return '选项二';
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twliechi',trigger.source);
						game.log(player,'选择了','#g【烈斥】','的','#y'+result.control);
						if(result.control=='背水！') player.chooseToDiscard('he',{type:'equip'},true);
						if(result.control!='选项二') trigger.source.chooseToDiscard('h',num,true);
						if(result.control!='选项一') player.discardPlayerCard(trigger.source,'he',true);
					}
				}
			},
			//卢植
			twmingren:{
				marktext:'任',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				group:'twmingren_change',
				audio:'nzry_mingren_1',
				trigger:{global:'phaseBefore',player:'enterGame'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&!player.getExpansions('twmingren').length;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					if(!player.countCards('h')) event.finish();
					else player.chooseCard('h','明任：将一张手牌置于武将牌上，称为“任”',true).set('ai',function(card){
						return 6-get.value(card);
					});
					'step 2'
					if(result.bool) player.addToExpansion(result.cards[0],player,'give','log').gaintag.add('twmingren');
				},
				subSkill:{
					change:{
						audio:'nzry_mingren_1',
						trigger:{player:['phaseUseBegin','phaseUseEnd']},
						filter:function(event,player){
							return player.countCards('he')&&player.getExpansions('twmingren').length;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard('he',get.prompt('twmingren'),'用一张牌替换“任”（'+get.translation(player.getExpansions('twmingren')[0])+'）').set('ai',function(card){
								var player=_status.event.player;
								var color=get.color(card);
								if(color==get.color(player.getExpansions('twmingren')[0])) return false;
								var num=0;
								var list=[];
								player.countCards('he',function(cardx){
									if(cardx!=card||get.color(cardx)!=color) return false;
									if(list.includes(cardx.name)) return false;
									list.push(cardx.name);
									switch (cardx.name){
										case 'wuxie':num+=(game.countPlayer()/2.2); break;
										case 'caochuan':num+=1.1; break;
										case 'shan':num+=1; break;
									}
								});
								return num*(30-get.value(card));
							});
							'step 1'
							if(result.bool){
								player.logSkill('twmingren');
								player.addToExpansion(result.cards[0],'log','give',player).gaintag.add('twmingren');
								var card=player.getExpansions('twmingren')[0];
								if(card) player.gain(card,'gain2');
							}
						},
					},
				},
			},
			twzhenliang:{
				group:['twzhenliang_1','twzhenliang_2'],
				audio:'nzry_zhenliang_1',
				mark:true,
				zhuanhuanji:true,
				marktext:'☯',
				intro:{
					content:function(storage,player,skill){
						if(player.storage.twzhenliang==true) return '当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。';
						return '出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。';
					},
				},
				subSkill:{
					1:{
						audio:'nzry_zhenliang_1',
						enable:'phaseUse',
						filter:function(event,player){
							if(player.storage.twzhenliang) return false;
							return game.hasPlayer(function(current){
								return player.inRange(current);
							});
						},
						position:'he',
						filterCard:true,
						filterTarget:function(card,player,target){
							return player.inRange(target);
						},
						check:function(card){
							var player=_status.event.player,cardx=player.getExpansions('twmingren')[0];
							if(cardx&&get.color(cardx,player)==get.color(card,player)) return 10-get.value(card);
							return 7-get.value(card);
						},
						prompt:'弃置一张牌并对攻击范围内的一名角色造成1点伤害',
						content:function(){
							'step 0'
							player.changeZhuanhuanji('twzhenliang');
							var cardx=player.getExpansions('twmingren')[0];
							target.damage('nocard');
							if(!cardx||get.color(cards[0],player)!=get.color(cardx,player)) event.finish();
							'step 1'
							player.draw();
						},
						ai:{
							order:5,
							result:{
								player:function(player,target){
									return get.damageEffect(target,player,player);
								},
							},
						},
					},
					2:{
						audio:'nzry_zhenliang_1',
						trigger:{global:'damageBegin4'},
						filter:function(event,player){
							if(_status.currentPhase==player||!player.storage.twzhenliang) return false;
							return player.countCards('he')&&event.num>0&&(event.player==player||player.inRange(event.player));
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard('he',get.prompt('twzhenliang',trigger.player),'弃置一张牌令此伤害-1').set('ai',function(card){
								if(_status.event.goon){
									var player=_status.event.player,cardx=player.getExpansions('twmingren')[0];
									if(cardx&&get.color(cardx,player)==get.color(card,player)) return 10-get.value(card);
									return 6-get.value(card);
								}
								return 0;
							}).set('goon',get.attitude(player,trigger.player)>0).logSkill=['twzhenliang',trigger.player];
							'step 1'
							if(result.bool){
								player.changeZhuanhuanji('twzhenliang');
								var cardx=player.getExpansions('twmingren')[0];
								if(cardx&&get.color(result.cards[0],player)==get.color(cardx,player)) player.draw();
								trigger.num--;
							}
						},
					},
				},
			},
			//张南
			twfenwu:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&player.canUse('sha',current,false,false);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					var list=[];
					player.getHistory('useCard',function(evt){
						if(get.type(evt.card)!='basic') return;
						var name=evt.card.name,nature=game.hasNature(evt.card)?get.nature(evt.card):'';
						if(!list.includes(name+nature)) list.push(name+nature);
					});
					event.addDamage=list.length>1;
					player.chooseTarget(get.prompt('twfenwu'),'失去1点体力并视为使用一张无距离限制的【杀】'+(event.addDamage?'（伤害基数+1）':''),function(card,player,target){
						return target!=player&&player.canUse('sha',target,false,false);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(player.hp+player.countCards('hs',{name:['tao','jiu']})<=1) return -1;
						var num=1;
						if((!target.mayHaveShan(player,'use',target.getCards('h',i=>{
							return i.hasGaintag('sha_notshan');
						}))||player.hasSkillTag('directHit_ai',true,{
							target:target,
							card:{name:'sha'},
						},true))&&!target.hasSkillTag('filterDamage',null,{
							player:player,
							card:{name:'sha'},
						})){
							num=1.3;
						}
						return get.effect(target,{name:'sha'},player,player)*num;
					});
					'step 1'
					if(result.bool){
						var num=1;
						var target=result.targets[0];
						player.logSkill('twfenwu',target);
						player.loseHp();
						if(event.addDamage){
							num=2;
							game.log('#y杀','的伤害基数+1');
						}
						player.useCard({name:'sha',isCard:true},target,false).baseDamage=num;
					}
				},
			},
			//呼厨泉
			twfupan:{
				audio:3,
				trigger:{
					player:'damageEnd',
					source:'damageSource'
				},
				check:()=>true,
				onremove:true,
				content:function(){
					'step 0'
					if(!player.storage.twfupan) player.storage.twfupan={};
					player.draw(trigger.num);
					'step 1'
					if(player.countCards('he')&&game.hasPlayer(current=>{
						return !(player.storage.twfupan[current.playerid]>=2)&&player!=current;
					})){
						player.chooseCardTarget({
							filterCard:true,
							selectCard:1,
							position:'he',
							forced:true,
							targetprompt:function(target){
								return !_status.event.player.storage.twfupan[target.playerid]?'你摸两张牌':'对其<br>造成伤害';
							},
							filterTarget:function(card,player,target){
								return !(player.storage.twfupan[target.playerid]>=2)&&player!=target;
							},
							ai1:function(card){
								var player=_status.event.player;
								if(get.value(card,false,'raw')<0) return 20*get.value(card);
								if(player==_status.currentPhase) return 20-player.getUseValue(card);
								return 20-get.value(card);
							},
							ai2:function(target){
								var player=_status.event.player;
								var att=get.attitude(player,target);
								if(ui.selected.cards.length&&get.value(ui.selected.cards[0],false,'raw')<0){
									return -0.1-att;
								}
								if(player.storage.twfupan[target.playerid]===undefined) return 5;
								else if(player.storage.twfupan[target.playerid]===1) return get.damageEffect(target,player,player);
								return 1;
							},
							prompt:'请选择要交出的卡牌和目标角色'
						});
					}else event.finish();
					'step 2'
					if(result.bool){
						var cards=result.cards,target=result.targets[0];
						player.line(target,'green');
						player.give(cards,target);
						event.target=target;
						if(!player.storage.twfupan[target.playerid]){
							player.storage.twfupan[target.playerid]=1;
							player.draw(2);
							event.finish();
						}else{
							player.chooseBool('复叛：是否对'+get.translation(target)+'造成1点伤害？','然后你不能再因此技能交给其牌').set('ai',()=>_status.event.bool).set('bool',get.damageEffect(target,player,player)>0);
						}
					}
					'step 3'
					if(result.bool){
						player.line(target,'fire');
						target.damage();
						player.storage.twfupan[target.playerid]++;
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.9,
				}
			},
			//刘璋
			twyaohu:{
				audio:'yinlang',
				trigger:{player:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return !player.hasSkill('twyaohu_round')&&game.hasPlayer(function(current){
						return current.group&&current.group!='unknown';
					});
				},
				content:function(){
					'step 0'
					var list=[];
					game.countPlayer(function(current){
						if(current.group&&current.group!='unknown') list.add(current.group);
					});
					list.sort(function(a,b){
						return lib.group.indexOf(a)-lib.group.indexOf(b);
					});
					if(!player.hasSkill('twyaohu')) list.push('cancel2');
					player.chooseControl(list).set('prompt','邀虎：请选择一个势力').set('ai',function(){
						return _status.event.choice;
					}).set('choice',function(){
						var getn=function(group){
							return game.countPlayer(function(current){
								if(current.group!=group) return false;
								if(player==current) return 2;
								if(get.attitude(current,player)>0) return 1;
								return 1.3;
							});
						}
						list.sort(function(a,b){
							return getn(b)-getn(a);
						});
						return list[0];
					}());
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twyaohu',game.filterPlayer(function(current){
							return current.group==result.control;
						}));
						game.log(player,'选择了','#y'+get.translation(result.control+2));
						player.storage.yaohu=result.control;
						player.storage.twyaohu=result.control;
						player.markSkill('twyaohu');
					}
				},
				ai:{combo:'jutu'},
				intro:{content:'已选择了$势力'},
				group:'twyaohu_gain',
				subSkill:{
					round:{},
					gain:{
						audio:'yinlang',
						trigger:{global:'phaseUseBegin'},
						filter:function(event,player){
							return event.player.group==player.storage.yaohu&&event.player.isIn()&&player.getExpansions('jutu').length>0;
						},
						forced:true,
						locked:false,
						logTarget:'player',
						content:function(){
							'step 0'
							var target=trigger.player;
							event.target=target;
							target.chooseButton(['选择获得一张“生”',player.getExpansions('jutu')],true).set('ai',function(button){
								return get.value(button.link,player);
							});
							'step 1'
							if(result.bool){
								target.gain(result.links,'give',player);
							}
							'step 2'
							if(game.hasPlayer(function(current){
								return current!=player&&current!=target;
							})){
								player.chooseTarget(true,'选择'+get.translation(target)+'使用【杀】的目标',function(card,player,target){
									return target!=player&&target!=_status.event.source;
								}).set('source',target).set('ai',function(target){
									var evt=_status.event;
									return get.effect(target,{name:'sha'},evt.source,evt.player);
								});
							}
							else {
								event._result={bool:false};
								event.goto(4);
							}
							'step 3'
							var target2=result.targets[0];
							player.line(target2,'green');
							target.chooseToUse(function(card,player,event){
								if(get.name(card)!='sha') return false;
								return lib.filter.filterCard.apply(this,arguments);
							},'对'+get.translation(target2)+'使用一张杀，否则本回合使用伤害牌指定'+get.translation(player)+'为目标时须交给'+get.translation(player)+'两张牌，否则此牌对'+get.translation(player)+'无效').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
								if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
								return lib.filter.targetEnabled.apply(this,arguments);
							}).set('sourcex',target2).set('addCount',false);
							'step 4'
							if(!result.bool) player.addTempSkill('twyaohu_effect');
						},
					},
					effect:{
						audio:'yinlang',
						trigger:{global:'useCardToPlayer'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return event.target==player&&get.tag(event.card,'damage');
						},
						logTarget:'player',
						content:function(){
							'step 0'
							var hs=trigger.player.getCards('he');
							if(hs.length<2) event._result={bool:false};
							else trigger.player.chooseCard(2,'交给'+get.translation(player)+'两张牌，否则取消'+get.translation(trigger.card)+'对其的目标','he').set('ai',card=>{
								if(_status.event.goon) return 5-get.value(card);
								return 0;
							}).set('goon',get.effect(player,trigger.card,trigger.player,trigger.player)>0);
							'step 1'
							if(result.bool){
								trigger.player.give(result.cards,player);
							}else{
								trigger.untrigger();
								trigger.targets.remove(player);
								trigger.getParent().triggeredTargets1.remove(player);
							}
						},
					}
				},
			},
			//李遗
			twjiaohua:{
				audio:2,
				trigger:{global:'gainAfter'},
				filter:function(event,player){
					if(event.getParent().name!='draw') return false;
					if(event.player!=player&&!event.player.isMinHp()) return false;
					var cards=event.cards,list=['basic','trick','equip'];
					for(var card of cards) if(list.includes(get.type2(card))) list.remove(get.type2(card));
					for(var type of event.player.getStorage('twjiaohua_gained')) if(list.includes(type)) list.remove(type);
					return list.length>0;
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				prompt2:function(event,player){
					var cards=event.cards,list=['basic','trick','equip'];
					for(var card of cards) if(list.includes(get.type2(card))) list.remove(get.type2(card));
					for(var type of event.player.getStorage('twjiaohua_gained')) if(list.includes(type)) list.remove(type);
					var name=event.player==player?'你':get.translation(event.player);
					return '令'+name+'从牌堆或弃牌堆中获得一张'+(event.player.isUnderControl(true)?list.map(i=>get.translation(i)+'牌').join('、').replace(/(.*)、/, '$1或'):'本次未获得的类别的牌');
				},
				logTarget:'player',
				content:function(){
					trigger.player.addTempSkill('twjiaohua_gained');
					var cards=trigger.cards,list=['basic','trick','equip'];
					for(var card of cards) if(list.includes(get.type2(card))) list.remove(get.type2(card));
					for(var type of trigger.player.getStorage('twjiaohua_gained')) if(list.includes(type)) list.remove(type);
					list.randomSort();
					var card=get.cardPile(function(card){
						return list.includes(get.type2(card));
					});
					if(card){
						trigger.player.gain(card,'gain2');
						trigger.player.markAuto('twjiaohua_gained',[get.type2(card)]);
					}
				},
				subSkill:{
					gained:{onremove:true,charlotte:true}
				}
			},
			//阎象
			twkujian:{
				audio:3,
				enable:'phaseUse',
				filterCard:true,
				selectCard:[1,3],
				usable:1,
				discard:false,
				lose:false,
				delay:false,
				filterTarget:lib.filter.notMe,
				global:'twkujian_ai',
				check:function(card){
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
					if(player.hp==player.maxHp||player.storage.jsprende<0||player.countCards('h')<=1){
						var players=game.filterPlayer();
						for(var i=0; i<players.length; i++){
							if(players[i].hasSkill('haoshi') &&
								!players[i].isTurnedOver() &&
								!players[i].hasJudge('lebu') &&
								get.attitude(player,players[i])>=3 &&
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
				content:function(){
					player.give(cards,target).gaintag.add('twkujianx');
					player.addSkill('twkujian_draw');
					player.addSkill('twkujian_discard');
				},
				ai:{
					expose:0.2,
					order:7,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nogain')) return 0;
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if(target.hasJudge('lebu')) return 0;
							var nh=target.countCards('h');
							var np=player.countCards('h');
							if(player.hp==player.maxHp||player.storage.jsprende<0||player.countCards('h')<=1){
								if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
							}
							return Math.max(1,5-nh);
						},
					},
					effect:{
						target:function(card,player,target){
							if(player==target&&get.type(card)=='equip'){
								if(player.countCards('e',{subtype:get.subtype(card)})){
									if(game.hasPlayer(function(current){
										return current!=player&&get.attitude(player,current)>0;
									})){
										return 0;
									}
								}
							}
						},
					},
				},
				subSkill:{
					draw:{
						audio:'twkujian',
						trigger:{global:['useCardAfter','respondAfter']},
						forced:true,
						logTarget:'player',
						charlotte:true,
						filter:function(event,player){
							return event.player.hasHistory('lose',evt=>{
								if(event!=evt.getParent()) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('twkujianx')) return true;
								}
							});
						},
						content:function(){
							'step 0'
							game.asyncDraw([player,trigger.player]);
							'step 1'
							game.delayx();
						}
					},
					discard:{
						audio:'twkujian',
						trigger:{global:['loseAfter','equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter']},
						forced:true,
						logTarget:function(event,player){
							return game.filterPlayer(function(current){
								var evt=event.getl(current);
								if(!evt||!evt.hs||!evt.hs.length) return false;
								if(event.name=='lose'){
									var name=event.getParent().name;
									if(name=='useCard'||name=='respond') return false;
									for(var i in event.gaintag_map){
										if(event.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								}
								return current.hasHistory('lose',function(evt){
									if(event!=evt.getParent()) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								});
							});
						},
						charlotte:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								var evt=event.getl(current);
								if(!evt||!evt.hs||!evt.hs.length) return false;
								if(event.name=='lose'){
									var name=event.getParent().name;
									if(name=='useCard'||name=='respond') return false;
									for(var i in event.gaintag_map){
										if(event.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								}
								return current.hasHistory('lose',function(evt){
									if(event!=evt.getParent()) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								});
							});
						},
						content:function(){
							'step 0'
							var event=trigger;
							var targets=game.filterPlayer(function(current){
								var evt=event.getl(current);
								if(!evt||!evt.hs||!evt.hs.length) return false;
								if(event.name=='lose'){
									var name=event.getParent().name;
									if(name=='useCard'||name=='respond') return false;
									for(var i in event.gaintag_map){
										if(event.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								}
								return current.hasHistory('lose',function(evt){
									if(event!=evt.getParent()) return false;
									for(var i in evt.gaintag_map){
										if(evt.gaintag_map[i].includes('twkujianx')) return true;
									}
									return false;
								});
							});
							targets.add(player);
							targets.sortBySeat();
							_status.event.targets=targets;
							'step 1'
							var target=targets.shift();
							if(target.countCards('he')>0) target.chooseToDiscard('he',true);
							if(targets.length>0) event.redo();
						}
					},
					ai:{
						charlotte:true,
						ai:{
							effect:{
								player_use:function(card,player,target){
									if(card.cards&&card.cards.some(i=>i.hasGaintag('twkujianx'))&&game.hasPlayer(current=>{
										return get.attitude(player,current)>0;
									})) return [1,1];
								},
							},
						},
						mod:{
							aiOrder:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('twkujianx')&&game.hasPlayer(current=>{
									return get.attitude(player,current)>0;
								})) return num+0.5;
							},
							aiValue:function(player,card,num){
								if(get.itemtype(card)=='card'&&card.hasGaintag('twkujianx')&&game.hasPlayer(current=>{
									return get.attitude(player,current)>0;
								})) return num+0.5;
							}
						}
					}
				}
			},
			twruilian:{
				audio:2,
				trigger:{global:'roundStart'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twruilian')).set('ai',function(target){
						var player=_status.event.player,att=get.attitude(player,target),eff=att/(player==target?2:1)+1;
						if(att>=0){
							if(target.hasSkill('yongsi')) return eff*5;
							if(target.hasSkill('zhiheng')||target.hasSkill('rezhiheng')) return eff*4;
							if(target.hasSkill('rekurou')) return eff*3;
							if(target.hasSkill('xinlianji')||target.hasSkill('dclianji')) return eff*2;
							if(target.needsToDiscard()) return eff*1.5;
							return eff;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twruilian',target);
						player.markAuto('twruilian2',[target]);
						player.addSkill('twruilian2');
					}
				},
			},
			twruilian2:{
				trigger:{global:'phaseEnd'},
				direct:true,
				charlotte:true,
				onremove:true,
				filter:function(event,player){
					return player.getStorage('twruilian2').includes(event.player);
				},
				intro:{content:'已选择$'},
				content:function(){
					'step 0'
					player.removeSkill('twruilian2');
					var target=trigger.player;
					event.target=target;
					var cards=[];
					target.getHistory('lose',function(evt){
						if(evt.type=='discard') cards.addArray(evt.cards2);
					});
					if(cards.length<2) event.finish();
					else event.cards=cards;
					'step 1'
					var list=[];
					for(var type of ['basic','trick','equip']){
						for(var card of event.cards){
							if(get.type2(card)==type){
								list.push(type);
								break;
							}
						}
					}
					list.push('cancel2');
					player.chooseControl(list).set('prompt','睿敛：是否与'+get.translation(target)+'各获得一种类型的牌？').set('ai',function(){
						var player=_status.event.player,list=_status.event.controls;
						if(player.hp<=3&&!player.countCards('h',{name:['shan','tao']})&&list.includes('basic')) return 'basic';
						if(player.countCards('he',{type:'equip'})<2&&list.includes('equip')) return 'equip';
						if(list.includes('trick')) return 'trick';
						return list.remove('cancel2').randomGet();
					});
					'step 2'
					if(result.control!='cancel2'){
						player.logSkill('twruilian2',target);
						var type=result.control;
						var list=[target,player].sortBySeat(_status.currentPhase),cards=[];
						for(var current of list){
							var card=get.discardPile(function(card){
								return get.type2(card)==type&&!cards.includes(card);
							});
							if(card){
								cards.push(card);
								current.gain(card,'gain2');
							}
						}
					}
				},
			},
			//夏侯恩
			twfujian:{
				audio:2,
				group:'twfujian_lose',
				trigger:{
					global:'phaseBefore',
					player:['enterGame','phaseZhunbeiBegin']
				},
				filter:function(event,player){
					if(player.getEquips(1).length) return false;
					return event.name!='phase'||game.phaseNumber==0;
				},
				forced:true,
				content:function(){
					var card=get.cardPile2(function(card){
						return get.type(card)=='equip'&&get.subtype(card)=='equip1';
					});
					event.card=card;
					if(card) player.equip(card);
					else{
						game.log('但是牌堆中没有武器牌了！');
						event.finish();
					}
				},
				subSkill:{
					lose:{
						audio:'twfujian',
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						filter:function(event,player){
							if(player==_status.currentPhase) return false;
							if(event.name=='gain'&&event.player==player) return false;
							var evt=event.getl(player);
							if(evt&&evt.cards2&&evt.cards2.some(i=>get.subtype(i)=='equip1')) return true;
							return false;
						},
						forced:true,
						content:function(){
							player.loseHp();
						},
					},
				},
			},
			twjianwei:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					if(!player.getEquips(1).length) return false;
					return game.hasPlayer(function(current){
						return player.inRange(current)&&player.canCompare(current);
					});
				},
				pindianCheck:function(player,target){
					var hs=player.getCards('h').sort(function(a,b){
						return b.number-a.number;
					});
					var ts=target.getCards('h').sort(function(a,b){
						return b.number-a.number;
					});
					if(!hs.length||!ts.length) return 0;
					if(Math.min(13,hs[0].number+player.getAttackRange())>ts[0].number||ts[0].number>9&&get.value(ts[0])<=5||target.countCards('j')) return true;
					return false;
				},
				direct:true,
				locked:false,
				group:['twjianwei_pindian','twjianwei_zhaocha'],
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twjianwei'),'与攻击范围内的一名角色拼点。若你赢，你获得其每个区域里的一张牌；若其赢，其获得你装备区里的武器牌',function(card,player,target){
						return player.inRange(target)&&player.canCompare(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(lib.skill.twjianwei.pindianCheck(player,target)) return -5*get.attitude(player,target);
						return -get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twjianwei',target);
						player.chooseToCompare(target);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var num=0;
						if(target.countCards('h')) num++;
						if(target.countCards('e')) num++;
						if(target.countCards('j')) num++;
						if(num){
							player.gainPlayerCard(target,num,'hej',true).set('filterButton',function(button){
								for(var i=0; i<ui.selected.buttons.length; i++){
									if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
								}
								return true;
							});
						}
					}
					else if(!result.tie){
						var card=player.getEquips(1);
						if(card.length) target.gain(card,player,'give');
					}
				},
				mod:{
					aiValue:function(player,card,num){
						if(card.name=='qinggang'||card.name=='qibaodao') return num/5;
					},
				},
				ai:{
					unequip:true,
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(!arg||!arg.card||arg.card.name!='sha'||!player.getEquip(1)) return false;
					},
				},
				subSkill:{
					pindian:{
						audio:'twjianwei',
						trigger:{player:'compare',target:'compare'},
						filter:function(event,player){
							if(!player.getEquips(1).length||player.getAttackRange()<=0) return false;
							if(event.player==player) return !event.iwhile;
							return true;
						},
						forced:true,
						locked:false,
						content:function(){
							var num=player.getAttackRange();
							if(player==trigger.player){
								trigger.num1+=num;
								if(trigger.num1>13) trigger.num1=13;
							}
							else {
								trigger.num2+=num;
								if(trigger.num2>13) trigger.num2=13;
							}
							game.log(player,'的拼点牌点数+'+num);
						},
					},
					//你是故意找茬是不是
					zhaocha:{
						trigger:{global:'phaseZhunbeiBegin'},
						filter:function(event,player){
							if(event.player==player) return false;
							return event.player.canCompare(player);
						},
						direct:true,
						content:function(){
							'step 0'
							trigger.player.chooseBool('剑威：是否与'+get.translation(player)+'拼点？','若你赢，你获得其装备区里的武器牌；若其赢，其获得你每个区域里的一张牌').set('ai',()=>_status.event.choice).set('choice',get.attitude(trigger.player,player)<0&&!lib.skill.twjianwei.pindianCheck(player,trigger.player));
							'step 1'
							if(result.bool){
								trigger.player.logSkill('twjianwei',player);
								trigger.player.chooseToCompare(player);
							}
							else event.finish();
							'step 2'
							if(!result.tie){
								if(result.bool){
									var card=player.getEquips(1);
									if(card.length) trigger.player.gain(card,player,'give');
								}
								else {
									var num=0;
									if(trigger.player.countCards('h')) num++;
									if(trigger.player.countCards('e')) num++;
									if(trigger.player.countCards('j')) num++;
									if(num) player.gainPlayerCard(trigger.player,num,'hej',true).set('filterButton',function(button){
										for(var i=0; i<ui.selected.buttons.length; i++){
											if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
										}
										return true;
									});
								}
							}
						},
					},
				},
			},
			//夏侯尚
			twtanfeng:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countDiscardableCards(player,'hej')>0;
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twtanfeng'),function(card,player,target){
						return target!=player&&target.countDiscardableCards(player,'hej')>0;
					}).set('ai',function(target){
						var player=_status.event.player,num=1;
						if(get.attitude(player,target)>0) num=3;
						else if(!target.countCards('he')||!target.canUse('sha',player)){
							if(target.hp+target.countCards('hs',{name:['tao','jiu']})<=1) num=2;
							else num=1.2;
						}
						return get.effect(target,{name:'guohe'},player,player)*num*((player.hp<=1&&get.attitude(player,target)<=0)?0:1);
					}).setHiddenSkill(event.name);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twtanfeng',target);
						player.discardPlayerCard(target,'hej',true);
					}
					else event.finish();
					'step 2'
					target.chooseCardTarget({
						position:'hes',
						prompt:'选择一张牌当做【杀】对'+get.translation(player)+'使用',
						prompt2:'或点击“取消”，受到其造成的1点火焰伤害，并令其跳过本回合的一个阶段（准备阶段和结束阶段除外）',
						filterCard:function(card,player){
							return player.canUse(get.autoViewAs({name:'sha'},[card]),_status.event.getParent().player,false);
						},
						filterTarget:function(card,player,target){
							var source=_status.event.getParent().player;
							if(target!=source&&!ui.selected.targets.includes(source)) return false;
							card=get.autoViewAs({name:'sha'},[card]);
							return lib.filter.filterTarget.apply(this,arguments);
						},
						selectTarget:function(){
							var card=get.card(),player=get.player();
							if(!card) return;
							card=get.autoViewAs({name:'sha'},[card]);
							var range=[1,1];
							game.checkMod(card,player,range,'selectTarget',player);
							return range;
						},
						ai1:function(card){
							var player=_status.event.player,target=_status.event.getParent().player;
							var eff=get.effect(target,get.autoViewAs({name:'sha'},[card]),player,player);
							var eff2=get.damageEffect(player,target,player,'fire');
							if(eff<0||eff2>0||eff2>eff||get.tag(card,'recover')) return 0;
							return (player.hp==1?10:6)-get.value(card);
						},
						ai2:function(target){
							if(target==_status.event.getParent().player) return 100;
							return get.effect(target,{name:'sha'},_status.event.player);
						}
					});
					'step 3'
					if(result.bool){
						var cards=result.cards,targets=result.targets;
						var cardx=get.autoViewAs({name:'sha'},cards);
						target.useCard(cardx,cards,targets,false);
						event.finish();
					}
					else{
						player.line(target,'fire');
						target.damage(1,'fire');
					}
					'step 4'
					if(!target.isIn()){
						event.finish(); return;
					}
					var list=[];
					var list2=[];
					event.map={phaseJudge:'判定阶段',phaseDraw:'摸牌阶段',phaseUse:'出牌阶段',phaseDiscard:'弃牌阶段'};
					for(var i of ['phaseJudge','phaseDraw','phaseUse','phaseDiscard']){
						if(!player.skipList.includes(i)){
							i=event.map[i];
							list.push(i);
							if(i!='判定阶段'&&i!='弃牌阶段') list2.push(i);
						}
					}
					target.chooseControl(list).set('prompt','探锋：令'+get.translation(player)+'跳过一个阶段').set('ai',function(){
						return _status.event.choice;
					}).set('choice',function(){
						var att=get.attitude(target,player);
						var num=player.countCards('j');
						if(att>0){
							if(list.includes('判定阶段')&&num>0) return '判定阶段';
							return '弃牌阶段';
						}
						if(list.includes('摸牌阶段')&&player.hasJudge('lebu')) return '摸牌阶段';
						if(list.includes('出牌阶段')&&player.hasJudge('bingliang')||player.needsToDiscard()>0) return '出牌阶段';
						return list2.randomGet();
					}());
					'step 5'
					for(var i in event.map){
						if(event.map[i]==result.control) player.skip(i);
					}
					target.popup(result.control);
					target.line(player);
					game.log(player,'跳过了','#y'+result.control);
				},
			},
			//宗预
			twzhibian:{
				audio:'zhibian',
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return game.hasPlayer((current)=>(current!=player&&player.canCompare(current)));
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twzhibian'),'与一名其他角色拼点',function(card,player,target){
						return target!=player&&player.canCompare(target);
					}).set('ai',function(target){
						if(!_status.event.goon) return false;
						var att=get.attitude(player,target);
						if(att<0&&(target.countCards('h')>1||target.countCards('e',function(card){
							return player.canEquip(card)&&get.effect(player,card,target,player)>0;
						}))) return -att/Math.sqrt(target.countCards('h'));
						if(!player.isDamaged()) return false;
						if(att<=0) return (1-att)/Math.sqrt(target.countCards('h'));
						return Math.sqrt(2/att*Math.sqrt(target.countCards('h')));
					}).set('goon',function(){
						if(!player.hasCard(function(card){
							return (card.number>=14-player.hp&&get.value(card)<=5);
						})) return false;
						return true;
					}());
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twzhibian',target);
						player.chooseToCompare(target);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var list=[],list2=[
							'将'+get.translation(target)+'区域中的一张牌移动到你的区域内',
							'回复1点体力',
							'背水！弃置一张非基本牌，并依次执行上述所有选项',
						];
						if(target.countCards('h')||target.hasCard(function(card){
							return player.canEquip(card);
						},'e')||target.hasCard(function(card){
							return player.canAddJudge(card);
						},'j')) list.push('选项一');
						else list2[0]='<span style="opacity:0.5">'+list2[0]+'</span>';
						if(player.isDamaged()) list.push('选项二');
						else list2[1]='<span style="opacity:0.5">'+list2[1]+'</span>';
						if(!list.length){event.finish(); return;}
						if(player.countCards('he',card=>get.type(card)!='basic')) list.push('背水！')
						else list2[2]='<span style="opacity:0.5">'+list2[2]+'</span>';
						list.push('cancel2');
						player.chooseControl(list).set('prompt','直辩：选择一项').set('choiceList',list2).set('ai',function(){
							var target=_status.event.getParent().target;
							if(_status.event.controls.includes('背水！')&&player.isDamaged()&&(target.countCards('h')||target.countCards('e',function(card){
								return player.canEquip(card)&&get.value(card,target)>=4+player.getDamagedHp();
							}))) return 2;
							if(player.isDamaged()&&(player.hp<=2||(!target.countCards('h')&&!target.countCards('e',function(card){
								return player.canEquip(card)&&get.value(card,target)>=4+player.getDamagedHp();
							})))) return 1;
							return 0;
						});
					}
					else {
						player.loseHp();
						event.finish();
					}
					'step 3'
					if(result.control!='cancel2'){
						event.control=result.control;
						if(result.control=='背水！'&&player.countCards('he',function(card){
							return get.type(card)!='basic';
						})) player.chooseToDiscard('he',true,function(card){
							return get.type(card)!='basic';
						});
					}
					else event.finish();
					'step 4'
					if(event.control=='选项一'||event.control=='背水！'){
						player.choosePlayerCard(target,'hej',true).set('ai',get.buttonValue);
					}
					else event.goto(6);
					'step 5'
					if(result.bool){
						var card=result.cards[0];
						switch (get.position(card)){
							case 'h':player.gain(card,target,'giveAuto'); break;
							case 'e':target.$give(card,player,false); player.equip(card); break;
							case 'j':target.$give(card,player,false); player.addJudge(card); break;
						}
					}
					'step 6'
					if(event.control=='选项二'||event.control=='背水！') player.recover();
				},
			},
			twyuyan:{
				audio:'yuyan',
				trigger:{target:'useCardToTarget'},
				filter:function(event,player){
					return event.card.name=='sha'&&event.card.isCard&&player.hp<event.player.hp;
				},
				forced:true,
				logTarget:'player',
				content:function(){
					'step 0'
					var num=get.number(trigger.card),str='';
					if(typeof num=='number') str='点数大于'+get.cnNumber(num)+'的';
					else str='非基本';
					if((typeof num=='number'&&(num>=13||!trigger.player.hasCard(function(card){
						if(_status.connectMode&&get.position(card)=='h') return true;
						return get.number(card)>num;
					},'he')))||(typeof num!='number'&&!trigger.player.hasCard(function(card){
						if(_status.connectMode&&get.position(card)=='h') return true;
						return get.type(card)!='basic';
					},'he'))) event._result={bool:false};
					else trigger.player.chooseCard('he',function(card){
						if(typeof _status.event.number=='number') return get.number(card)>_status.event.number;
						return get.type(card)!='basic';
					},'交给'+get.translation(player)+'一张'+str+'牌，或取消'+get.translation(trigger.card)+'对其的目标').set('number',num).set('ai',function(card){
						if(card.name=='shan'||card.name=='tao'||card.name=='jiu') return false;
						return 6-get.value(card);
					});
					'step 1'
					if(result.bool) trigger.player.give(result.cards,player);
					else{
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.untrigger();
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&player.hp>target.hp&&get.attitude(player,target)<0){
								var num=get.number(card);
								var bs=player.getCards('h',function(cardx){
									return (typeof num=='number'?(get.number(cardx)>num):(get.type(cardx)!='basic'))&&!['','',''].includes(cardx.name);
								});
								if(bs.length<2) return 0;
								if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
								if(bs.length<=2){
									for(var i=0; i<bs.length; i++){
										if(get.value(bs[i])<6){
											return [1,0,1,-0.5];
										}
									}
									return 0;
								}
								return [1,0,1,-0.5];
							}
						},
					},
				},
			},
			//周处
			twguoyi:{
				audio:'zhangming',
				trigger:{player:'useCardToTargeted'},
				filter:function(event,player){
					if(event.target==player||(event.card.storage&&event.card.storage.twguoyi)) return false;
					return (event.card.name=='sha'||get.type(event.card)=='trick')&&(event.target.isMaxHp()||event.target.isMaxHandcard()||player.countCards('h')<=player.getDamagedHp()+1);
				},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				logTarget:'target',
				group:'twguoyi_reuse',
				content:function(){
					'step 0'
					event.bool1=false;
					event.bool2=false;
					if(trigger.target.isMaxHp()||trigger.target.isMaxHandcard()) event.bool1=true;
					if(player.countCards('h')<=player.getDamagedHp()+1) event.bool2=true;
					if(!trigger.target.countCards('he')) event._result={index:0};
					else trigger.target.chooseControl().set('choiceList',[
						'本回合不能使用或打出手牌',
						'弃置'+get.cnNumber(player.getDamagedHp()+1)+'张牌'
					]).set('ai',function(){
						var player=_status.event.player;
						if(player.countCards('h')<=player.getHandcardLimit()) return 0;
						return 1;
					});
					'step 1'
					player.addTempSkill('twguoyi_'+result.index);
					if(result.index==0) trigger.target.addTempSkill('twguoyi_hand');
					else trigger.target.chooseToDiscard('he',player.getDamagedHp()+1,true);
					'step 2'
					if((event.bool1&&event.bool2)||(player.hasSkill('twguoyi_0')&&player.hasSkill('twguoyi_1'))){
						if(!trigger.getParent().twguoyi_reuse) trigger.getParent().twguoyi_reuse={
							name:trigger.card.name,
							nature:trigger.card.nature,
							isCard:true,
							storage:{twguoyi:true},
						};
					}
				},
				subSkill:{
					0:{charlotte:true},
					1:{charlotte:true},
					hand:{
						charlotte:true,
						mark:true,
						intro:{content:'不能使用或打出手牌'},
						mod:{
							cardEnabled2:function(card){
								if(get.position(card)=='h') return false;
							},
						},
					},
					reuse:{
						charlotte:true,
						trigger:{player:'useCardAfter'},
						filter:function(event,player){
							return event.twguoyi_reuse;
						},
						direct:true,
						content:function(){
							var card=trigger.twguoyi_reuse;
							for(var i of trigger.targets){
								if(!i.isIn()||!player.canUse(card,i,false)) return;
							}
							if(trigger.addedTarget&&!trigger.addedTarget.isIn()) return;
							if(trigger.addedTargets&&trigger.addedTargets.length){
								for(var i of trigger.addedTargets){
									if(!i.isIn()) return;
								}
							}
							var next=player.useCard(get.copy(card),trigger.targets,false);
							if(trigger.addedTarget) next.addedTarget=trigger.addedTarget;
							if(trigger.addedTargets&&trigger.addedTargets.length) next.addedTargets=trigger.addedTargets.slice(0);
						},
					},
				},
			},
			twchuhai:{
				audio:'chuhai',
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					var targets=[];
					player.getHistory('sourceDamage',evt=>{
						if(player!=evt.player&&evt._dyinged) targets.add(evt.player);
					});
					return targets.length>=2;
				},
				forced:true,
				locked:false,
				dutySkill:true,
				skillAnimation:true,
				animationColor:'wood',
				group:'twchuhai_lose',
				content:function(){
					'step 0'
					game.log(player,'成功完成使命');
					player.awakenSkill('twchuhai');
					if(!player.isDisabledJudge()) player.disableJudge();
					event.current=player.next;
					'step 1'
					if(!event.current.countCards('he')) event.goto(3);
					else event.current.chooseCard('交给'+get.translation(player)+'一张牌','he',true).set('ai',get.disvalue2);
					'step 2'
					if(result.bool&&result.cards&&result.cards.length) event.current.give(result.cards,player);
					'step 3'
					event.current=event.current.next;
					if(event.current!=player) event.goto(1);
				},
				subSkill:{
					lose:{
						audio:'chuhai',
						trigger:{
							global:['gainAfter','loseAsyncAfter']
						},
						forced:true,
						dutySkill:true,
						filter:function(event,player){
							var cards=event.getg(player);
							if(!cards.length) return false;
							return game.hasPlayer(current=>{
								if(current==player) return false;
								var evt=event.getl(current);
								if(evt&&evt.cards&&evt.cards.length) return true;
								return false;
							});
						},
						content:function(){
							'step 0'
							var cards=trigger.getg(player);
							if(!cards.length){
								event.finish();
								return;
							}
							player.chooseCard('h','除害：将其中一张得到的牌置入弃牌堆',true,function(card){
								return _status.event.cards.includes(card);
							}).set('ai',function(card){
								return -get.value(card);
							}).set('cards',cards);
							'step 1'
							if(result.bool) player.loseToDiscardpile(result.cards);
						},
					},
				},
			},
			//桥公
			twyizhu:{
				audio:'yizhu',
				group:['twyizhu_use','twyizhu_discard'],
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				locked:false,
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					var hs=player.getCards('he');
					if(!hs.length) event.finish();
					else if(hs.length<=2) event._result={bool:true,cards:hs};
					else player.chooseCard('he',true,2,'选择两张牌洗入牌堆');
					'step 2'
					if(result.bool){
						player.$throw(result.cards.length,1000);
						player.lose(result.cards,ui.cardPile).insert_index=function(){
							return ui.cardPile.childNodes[get.rand(0,game.players.length*2-2)];
						}
						player.markAuto('twyizhu',result.cards);
					}
					else event.finish();
					'step 3'
					game.updateRoundNumber();
					game.delayx();
				},
				intro:{
					mark:function(dialog,content,player){
						if(player==game.me||player.isUnderControl()) dialog.addAuto(content);
						else {
							var names=[];
							for(var i of content) names.add(i.name);
							return get.translation(names);
						}
					},
				},
				subSkill:{
					use:{
						audio:'yizhu',
						trigger:{global:'useCardToPlayer'},
						filter:function(event,player){
							return player.getStorage('twyizhu').length&&
								event.player!=player&&event.targets.length==1&&
								event.cards.filter(function(i){
									return player.getStorage('twyizhu').includes(i);
								}).length>0;
						},
						logTarget:'player',
						forced:true,
						locked:false,
						content:function(){
							'step 0'
							var list=[];
							if(!game.hasPlayer(function(current){
								return current!=trigger.target&&lib.filter.targetEnabled2(trigger.card,trigger.player,current);
							})) event.goto(3);
							var filter=function(event,player){
								var card=event.card,info=get.info(card);
								if(info.allowMultiple==false) return false;
								if(!info.multitarget){
									return game.hasPlayer(current=>lib.filter.targetEnabled2(card,player,current));
								}
								return false;
							}
							var enable=filter(trigger.getParent(),trigger.player);
							var prompt2='操作提示：';
							if(enable) prompt2+='选择一名合法的其他角色，以增加其为目标；或';
							prompt2+='选择目标角色（'+get.translation(trigger.target)+'）和另一名合法的角色，以取消前者为目标并增加后者为目标';
							player.chooseTarget('遗珠：是否'+(enable?'增加或':'')+'修改目标？',prompt2,[enable?1:2,2],(card,player,target)=>{
								var evt=_status.event.getTrigger(),card=evt.card;
								if(target==evt.target) return true;
								if(ui.selected.targets.length&&ui.selected.targets[0]!=evt.target) return false;
								return lib.filter.targetEnabled2(card,evt.player,target);
							}).set('targetprompt',target=>{
								return target==_status.event.targetx?'取消目标':'增加目标';
							}).set('filterOk',()=>{
								if(ui.selected.targets.length==1&&ui.selected.targets[0]==_status.event.targetx) return false;
								return true;
							}).set('ai',target=>{
								var evt=_status.event.getTrigger(),card=evt.card,player=_status.event.player;
								if(target==evt.target&&get.effect(evt.target,card,evt.player,player)<0) return 100;
								if(target==evt.target) return -100;
								return get.effect(target,card,evt.player,player);
							}).set('targetx',trigger.target).set('card',trigger.card);
							'step 1'
							if(result.bool){
								var target=result.targets[result.targets[0]==trigger.target?1:0];
								if(result.targets.length>1) {
									player.line2([trigger.target,target]);
									trigger.targets.remove(trigger.target);
									trigger.getParent().triggeredTargets1.remove(trigger.target);
									trigger.untrigger();
								}
								else player.line(target);
								trigger.targets.push(target);
							}
							'step 2'
							var list=trigger.cards.filter(function(i){
								return player.getStorage('twyizhu').includes(i);
							});
							player.unmarkAuto('twyizhu',list);
							player.draw();
							game.delayx();
						},
					},
					discard:{
						trigger:{
							global:['loseAfter','cardsDiscardAfter','loseAsyncAfter','equipAfter'],
						},
						silent:true,
						forced:true,
						locked:false,
						filter:function(event,player){
							return player.getStorage('twyizhu').length&&event.getd().filter(function(i){
								return player.getStorage('twyizhu').includes(i);
							}).length>0;
						},
						content:function(){
							var list=trigger.getd().filter(function(i){
								return player.getStorage('twyizhu').includes(i);
							});
							player.unmarkAuto('twyizhu',list);
						},
					},
				},
			},
			twluanchou:{
				audio:'luanchou',
				enable:'phaseUse',
				usable:1,
				selectTarget:2,
				filterTarget:true,
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					game.countPlayer(function(current){
						current.removeSkill('twgonghuan');
					});
					'step 1'
					targets.sortBySeat();
					for(var i of targets) i.addSkillLog('twgonghuan');
				},
				derivation:'twgonghuan',
				ai:{
					order:10,
					expose:0.2,
					result:{
						target:function(player,target){
							return Math.max(0.1,target.hp)*(get.attitude(player,target)+20);
						},
					},
				},
			},
			twgonghuan:{
				audio:'gonghuan',
				trigger:{global:'damageBegin4'},
				usable:1,
				filter:function(event,player){
					if(event.player==player) return false;
					return !event.twgonghuan&&event.player.hp<=player.hp&&event.player.hasSkill('twgonghuan');
				},
				check:function(event,player){
					if(get.damageEffect(event.player,event.source,player)>0||(get.attitude(player,event.player)>0&&get.damageEffect(event.player,event.source,event.player)>0)) return false;
					return get.attitude(player,event.player)>0&&event.player.hp<player.hp&&((['君','主'].includes(lib.translate[event.player.identity])&&!['野','内'].includes(lib.translate[player.identity]))||player.hp+player.hujia-event.num>0);
				},
				logTarget:'player',
				content:function(){
					trigger.cancel();
					player.damage(trigger.source?trigger.source:'nosource',trigger.nature,trigger.num).set('card',trigger.card).set('cards',trigger.cards).twgonghuan=true;
				},
			},
			//桥蕤
			twxiawei:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				locked:false,
				group:['twxiawei_init','twxiawei_lose','twxiawei_unmark'],
				content:function(){
					'step 0'
					player.chooseControl('1','2','3','4','cancel2').set('prompt',get.prompt('twxiawei')).set('prompt2','妄行：将X+1张牌置于武将牌上，称为“威”').set('ai',function(){
						var player=_status.event.player;
						if(player.maxHp>3) return 3;
						return Math.min(3,player.countCards('he')+1);
					});
					'step 1'
					if(result.control!='cancel2'){
						var num=result.index+1,cards=get.cards(num+1);
						player.logSkill('twxiawei');
						player.addTempSkill('wangxing');
						player.addMark('wangxing',num,false);
						player.$gain2(cards,false);
						game.log(player,'将',cards,'作为“威”置于了武将牌上');
						player.loseToSpecial(cards,'twxiawei').visible=true;
					}
					else event.finish();
					'step 2'
					player.markSkill('twxiawei');
					game.delayx();
				},
				marktext:'威',
				intro:{
					mark:function(dialog,storage,player){
						var cards=player.getCards('s',function(card){
							return card.hasGaintag('twxiawei');
						});
						if(!cards||!cards.length) return;
						dialog.addAuto(cards);
					},
					markcount:function(storage,player){
						return player.countCards('s',function(card){
							return card.hasGaintag('twxiawei');
						});
					},
					onunmark:function(storage,player){
						var cards=player.getCards('s',function(card){
							return card.hasGaintag('twxiawei');
						});
						if(cards.length){
							player.loseToDiscardpile(cards);
						}
					},
				},
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('twxiawei')) return num+0.5;
					},
				},
				subSkill:{
					init:{
						audio:'twxiawei',
						trigger:{global:'phaseBefore',player:'enterGame'},
						filter:function(event,player){
							return event.name!='phase'||game.phaseNumber==0;
						},
						forced:true,
						locked:false,
						content:function(){
							'step 0'
							var cards=[];
							for(var i=1;i<=2;i++){
								var card=get.cardPile2(function(card){
									return !cards.includes(card)&&get.type(card)=='basic';
								});
								if(card) cards.push(card);
							}
							if(cards.length){
								player.$gain2(cards,false);
								game.log(player,'将',cards,'作为“威”置于了武将牌上');
								player.loseToSpecial(cards,'twxiawei').visible=true;
							}
							else event.finish();
							'step 1'
							player.markSkill('twxiawei');
							game.delayx();
						},
					},
					lose:{
						audio:'twxiawei',
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.countCards('s',function(card){
								return card.hasGaintag('twxiawei');
							});
						},
						forced:true,
						locked:false,
						content:function(){
							var cards=player.getCards('s',function(card){
								return card.hasGaintag('twxiawei');
							});
							player.loseToDiscardpile(cards);
						},
					},
					unmark:{
						trigger:{player:'loseAfter'},
						filter:function(event,player){
							if(!event.ss||!event.ss.length) return false;
							return !player.countCards('s',function(card){
								return card.hasGaintag('twxiawei');
							});
						},
						charlotte:true,
						forced:true,
						silent:true,
						content:function(){
							player.unmarkSkill('twxiawei');
						},
					},
				},
			},
			wangxing:{
				trigger:{player:'phaseEnd'},
				charlotte:true,
				onremove:true,
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.countMark('wangxing')>0;
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he',player.countMark('wangxing'),'妄行：请弃置'+get.cnNumber(player.countMark('wangxing'))+'张牌，或减1点体力上限').set('ai',function(card){
						var player=_status.event.player;
						if(player.maxHp==1) return 100-get.value(card);
						return 5+Math.max(0,5-player.maxHp)-get.value(card);
					});
					'step 1'
					if(!result.bool) player.loseMaxHp();
				},
				intro:{content:'回合结束时，你须弃置#张牌，否则减1点体力上限'},
			},
			twqiongji:{
				audio:2,
				trigger:{player:['useCardAfter','respondAfter','damageBegin3']},
				filter:function(event,player){
					if(event.name=='damage') return !player.countCards('s',function(card){
						return card.hasGaintag('twxiawei');
					});
					return !player.hasSkill('twqiongji_silent')&&player.getHistory('lose',function(evt){
						if(evt.getParent()!=event) return false;
						for(var i in evt.gaintag_map){
							if(evt.gaintag_map[i].includes('twxiawei')) return true;
						}
						return false;
					}).length>0;
				},
				forced:true,
				content:function(){
					if(trigger.name=='damage') trigger.num++;
					else {
						player.draw();
						player.addTempSkill('twqiongji_silent');
					}
				},
				ai:{combo:'twxiawei'},
				subSkill:{silent:{charlotte:true}},
			},
			//卞夫人
			twwanwei:{
				audio:'wanwei',
				trigger:{global:'damageBegin4'},
				filter:function(event,player){
					return event.player.isMinHp();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0&&event.player.hp<player.hp;
				},
				usable:1,
				logTarget:'player',
				prompt2:function(event,player){
					if(player!=event.player){
						return '防止'+get.translation(event.player)+'即将受到的'+event.num+'点伤害，然后你失去1点体力';
					}
					else if(event.player==player||!game.hasPlayer(function(current){
						return current!=player&&current.maxHp>player.maxHp
					})){
						return '于当前回合的结束阶段获得牌堆顶的牌并展示牌堆底的牌，若展示的牌能被使用，你使用之';
					}
				},
				content:function(){
					if(trigger.player!=player){
						trigger.cancel();
						player.loseHp();
					}
					if(trigger.player==player||!game.hasPlayer(function(current){
						return current!=player&&current.maxHp>player.maxHp
					})) player.addTempSkill('twwanwei_effect');
				},
				subSkill:{
					effect:{
						audio:'wanwei',
						charlotte:true,
						trigger:{global:'phaseJieshuBegin'},
						prompt2:'获得牌堆顶的牌并展示牌堆底的牌，若展示的牌能被使用，你使用之',
						content:function(){
							'step 0'
							var card=get.cards()[0];
							player.gain(card,'gain2');
							'step 1'
							var card=get.bottomCards()[0];
							ui.cardPile.appendChild(card);
							game.updateRoundNumber();
							player.showCards([card],get.translation(player)+'挽危：牌堆底的牌');
							if(player.hasUseTarget(card)) player.chooseUseTarget(card,true);
						},
					},
				},
			},
			twyuejian:{
				audio:'yuejian',
				enable:'phaseUse',
				filterCard:true,
				selectCard:function(){
					var player=_status.event.player;
					var num=Math.max(1,player.countCards('h')-player.getHandcardLimit());
					return [1,num];
				},
				complexCard:true,
				discard:false,
				loseTo:'cardPile',
				insert:true,
				visible:true,
				delay:false,
				position:'he',
				usable:1,
				check:function(card){
					if(ui.selected.cards.length>=3) return 0;
					var player=_status.event.player;
					var num=Math.max(1,player.countCards('h')-player.getHandcardLimit());
					if(num>=3) return 5-get.value(card);
					if(num>=2&&player.isDamaged()&&ui.selected.cards.length<1) return 7-get.value(card);
					if(num>=1&&player.isDamaged()&&!ui.selected.cards.length) return 6-get.value(card);
					return 0;
				},
				content:function(){
					'step 0'
					player.$throw(cards.length);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','约俭：将这些牌置于牌堆顶或牌堆底');
					next.set('processAI',function(list){
						var cards=list[0][1],player=_status.event.player;
						var target=player.next;
						var att=get.sgn(get.attitude(player,target));
						var top=[];
						var judges=target.getCards('j');
						var stopped=false;
						if(player!=target||!target.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return (judge(b)-judge(a))*att;
								});
								if(judge(cards[0])*att<0){
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
								return (get.value(b,player)-get.value(a,player))*att;
							});
							while(cards.length){
								if((get.value(cards[0],player)<=5)==(att>0)) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards.sort(function(a,b){
							return player.getUseValue(a)-player.getUseValue(b);
						});
						return [top,bottom];
					});
					'step 1'
					var top=result.moved[0];
					var bottom=result.moved[1];
					top.reverse();
					for(var i=0;i<top.length;i++){
						top[i].fix();
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						bottom[i].fix();
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.updateRoundNumber();
					game.delayx();
					'step 2'
					if(cards.length>=3) player.gainMaxHp();
					'step 3'
					if(cards.length>=2) player.recover();
					'step 4'
					if(cards.length>=1){
						player.addSkill('twyuejian_effect');
						player.addMark('twyuejian_effect',1,false);
					}
				},
				ai:{
					order:5,
					result:{player:1},
				},
				subSkill:{
					effect:{
						charlotte:true,
						onremove:true,
						marktext:'俭',
						intro:{
							content:'手牌上限+#',
						},
						mod:{
							maxHandcard:function(player,num){
								return num+player.countMark('twyuejian_effect');
							},
						},
					},
				},
			},
			//陈震
			twmuyue:{
				audio:1,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')||player.hasSkill('twmuyue_effect');
				},
				chooseButton:{
					dialog:function(){
						var list=[];
						for(var i of lib.inpile){
							var type=get.type(i);
							if(type=='basic'||type=='trick') list.push([type,'',i]);
						}
						return ui.create.dialog('睦约',[list,'vcard']);
					},
					check:function(button){
						if(!get.cardPile2(function(cardx){
							return cardx.name==button.link[2];
						})) return 0;
						return get.value({name:button.link[2]});
					},
					backup:function(links,player){
						return{
							audio:'twmuyue',
							filterCard:function(card,player,target){
								return !player.hasSkill('twmuyue_effect');
							},
							selectCard:function(){
								var player=_status.event.player;
								return player.hasSkill('twmuyue_effect')?-1:1;
							},
							check:function(card){
								return 7-get.value(card);
							},
							position:'he',
							card:links[0],
							filterTarget:true,
							content:function(){
								'step 0'
								var card=lib.skill.twmuyue_backup.card;
								event.card=card;
								player.removeSkill('twmuyue_effect');
								var cardx=get.cardPile2(function(cardx){
									return cardx.name==card[2];
								});
								player.line(target,'green');
								if(cardx) target.gain(cardx,'gain2');
								else{
									player.chat('无牌可得了吗？！');
									game.log('但是牌堆中已经没有','#g【'+get.translation(card[2])+'】','了！');
								}
								'step 1'
								if(cards&&cards.length&&get.name(cards[0],player)==card[2]) player.addSkill('twmuyue_effect');
							},
							ai:{
								result:{
									target:function(player,target){
										var att=Math.abs(get.attitude(player,target));
										if(target.hasSkill('nogain')) att/=10;
										return att/Math.sqrt(get.distance(player,target,'absolute'));
									}
								}
							},
						}
					},
					prompt:function(links,player){
						return (player.hasSkill('twmuyue_effect')?'':'弃置一张牌，')+'令一名角色从牌堆中获得一张【'+get.translation(links[0][2])+'】';
					}
				},
				ai:{
					order:3,
					result:{player:1},
				},
				subSkill:{
					effect:{
						charlotte:true,
						mark:true,
						intro:{content:'下一次发动【睦约】无需弃牌'},
					},
					backup:{},
				},
			},
			twchayi:{
				audio:1,
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twchayi'),lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						return -get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twchayi',target);
						if(!target.countCards('h')) event._result={index:1};
						else target.chooseControl().set('choiceList',[
							'展示手牌',
							'下一次使用牌时候弃一张牌',
						]);
					}
					else event.finish();
					'step 2'
					target.storage.twchayi_re=[result.index,target.countCards('h')];
					target.addSkill('twchayi_re');
					target.markSkill('twchayi_re');
					if(result.index==0) target.showCards(target.getCards('h'),get.translation(target)+'的手牌');
					else{
						target.addMark('twchayi_effect',1,false);
						target.addSkill('twchayi_effect');
					}
				},
				subSkill:{
					effect:{
						intro:{content:'使用下一张牌时弃置&张牌'},
						charlotte:true,
						onremove:true,
						audio:'twchayi',
						trigger:{player:'useCard'},
						forced:true,
						content:function(){
							player.chooseToDiscard('he',true,player.countMark('twchayi_effect'));
							player.removeSkill('twchayi_effect');
						},
					},
					re:{
						charlotte:true,
						onremove:true,
						audio:'twchayi',
						trigger:{player:'phaseEnd'},
						direct:true,
						filter:function(event,player){
							return player.storage.twchayi_re;
						},
						content:function(){
							if(player.countCards('h')!=player.storage.twchayi_re[1]){
								player.popup('察异');
								if(player.storage.twchayi_re[0]==0){
									player.addMark('twchayi_effect',1,false);
									player.addSkill('twchayi_effect');
								}
								else player.showCards(player.getCards('h'),get.translation(player)+'的手牌');
							}
							player.removeSkill('twchayi_re');
						},
						marktext:'异',
						intro:{
							markcount:function(storage,player){
								if(!storage||!storage.length) return 0;
								return storage[1];
							},
							content:function(storage,player){
								if(!storage||!storage.length) return;
								return '下个回合结束时，若你的手牌数不为'+storage[1]+'，你'+(storage[0]==0?'下次使用牌时弃置一张牌':'展示所有手牌');
							}
						}
					},
				},
			},
			//费祎
			twshengxi:{
				audio:'shengxi_feiyi',
				trigger:{player:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.getHistory('useCard').length>0&&player.getHistory('sourceDamage').length==0;
				},
				direct:true,
				content:function(){
					'step 0'
					var list=get.zhinangs();
					player.chooseButton(['###'+get.prompt('twshengxi')+'###获得一张智囊并摸一张牌',[list,'vcard']]).set('ai',function(card){
						return (Math.random()+0.5)*get.value({name:card.link[2]},_status.event.player)
					});
					'step 1'
					if(result.bool){
						player.logSkill('twshengxi');
						var card=get.cardPile2(function(card){
							return card.name==result.links[0][2];
						});
						if(card) player.gain(card,'gain2');
						player.draw();
					}
				},
				group:'twshengxi_zhunbei',
				subfrequent:['zhunbei'],
				subSkill:{
					zhunbei:{
						audio:'shengxi_feiyi',
						trigger:{player:'phaseZhunbeiBegin'},
						frequent:true,
						prompt2:'从游戏外或牌堆中获得一张【调剂盐梅】',
						content:function(){
							if(!_status.tiaojiyanmei_suits||_status.tiaojiyanmei_suits.length>0){
								if(!lib.inpile.includes('tiaojiyanmei')){
									game.broadcastAll(function(){lib.inpile.add('tiaojiyanmei')});
								}
								if(!_status.tiaojiyanmei_suits) _status.tiaojiyanmei_suits=lib.suit.slice(0);
								player.gain(game.createCard2('tiaojiyanmei',_status.tiaojiyanmei_suits.randomRemove(),6),'gain2');
							}
							else {
								var card=get.cardPile2(function(card){
									return card.name=='tiaojiyanmei';
								});
								if(card) player.gain(card,'gain2');
							}
						},
					},
				},
			},
			twkuanji:{
				audio:'fyjianyu',
				trigger:{
					player:'loseAfter',
					global:['cardsDiscardAfter','loseAsyncAfter','equipAfter'],
				},
				filter:function(event,player){
					if(event.name!='cardsDiscard'){
						return event.getd(player,'cards2').length>0;
					}
					else{
						if(event.cards.filterInD('d').length<=0) return false;
						var evt=event.getParent();
						if(evt.name!='orderingDiscard') return false;
						var evtx=(evt.relatedEvent||evt.getParent());
						if(evtx.player!=player) return false;
						if(evtx.name=='useCard') return false;
						return player.hasHistory('lose',evtxx=>{
							return evtx==(evtxx.relatedEvent||evtxx.getParent());
						});
					}
				},
				usable:1,
				direct:true,
				content:function(){
					'step 0'
					var cards=[];
					if(trigger.name!='cardsDiscard'){
						cards=trigger.getd(player,'cards2');
					}
					else cards=trigger.cards.filterInD('d');
					player.chooseButton(['宽济：是否将一张牌交给一名其他角色？',cards]).set('ai',function(button){
						var player=_status.event.player;
						if(game.hasPlayer(function(current){
							return current!=player&&get.attitude(player,current)>0;
						})) return Math.abs(get.value(button.link,'raw'))+1;
						return -get.value(button.link,'raw');
					});
					'step 1'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						player.chooseTarget('请选择【宽济】的目标','令一名其他角色获得'+get.translation(card),lib.filter.notMe).set('ai',function(target){
							var player=_status.event.player;
							return get.attitude(player,target)*get.value(_status.event.getParent().card,target)*(target.hasSkillTag('nogain')?0.1:1);
						});
					}
					else{
						player.storage.counttrigger.twkuanji--;
						event.finish();
					}
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twkuanji',target);
						target.gain(card,'gain2');
					}
				},
			},
			shengxi_feiyi:{audio:2},
			//王越
			twyulong:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					if(!event.isFirstTarget) return false;
					if(event.card.name!='sha') return false;
					return event.targets.some(target=>player.canCompare(target));
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twyulong'),(card,player,target)=>{
						return _status.event.getTrigger().targets.includes(target)&&player.canCompare(target);
					}).set('ai',target=>{
						if(player.hasCard(card=>get.value(card)<6,'h')) return -get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twyulong',target);
						if(player.canCompare(target)){
							player.chooseToCompare(target);
						}
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var color=get.color(result.player,false);
						if(color=='black') trigger.getParent().baseDamage++;
						else if(color=='red') trigger.directHit.addArray(game.players);
						trigger.getParent().twyulong=true;
						player.addTempSkill('twyulong_addCount');
					}
				},
				subSkill:{
					addCount:{
						charlotte:true,
						forced:true,
						trigger:{source:'damageSource'},
						filter:function(event,player){
							if(!event.card||event.card.name!='sha') return false;
							var evt=event.getParent(2);
							if(evt.name!='useCard'||!evt.twyulong) return false;
							return true;
						},
						content:function(){
							var evt=trigger.getParent(2);
							if(evt.addCount!==false){
								evt.addCount=false;
								if(player.stat[player.stat.length-1].card.sha>0){
									player.stat[player.stat.length-1].card.sha--;
								}
							}
						}
					}
				}
			},
			twjianming:{
				audio:2,
				trigger:{player:['useCard','respond']},
				filter:function(event,player){
					if(event.card.name!='sha'||!lib.suit.includes(get.suit(event.card))) return false;
					var list=[];
					player.getHistory('useCard',function(evt){
						if(evt.card.name=='sha'){
							if(event.card!=evt.card) list.push(get.suit(evt.card));
						}
					});
					player.getHistory('respond',function(evt){
						if(evt.card.name=='sha'){
							if(event.card!=evt.card) list.push(get.suit(evt.card));
						}
					});
					return !list.includes(get.suit(event.card));
				},
				forced:true,
				content:function(){
					player.draw();
				},
			},
			//李彦
			twzhenhu:{
				audio:2,
				trigger:{player:'useCardToPlayer'},
				filter:function(event,player){
					if(!event.isFirstTarget||!get.tag(event.card,'damage')) return false;
					return !player.hasSkillTag('noCompareSource')&&game.hasPlayer(target=>{
						return player.canCompare(target,true);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twzhenhu'),[1,3],function(card,player,target){
						return player.canCompare(target,true);
					}).set('ai',function(target){
						var player=_status.event.player,targets=_status.event.getTrigger().targets;
						var num=0;
						if(player.hasSkill('twlvren')) num+=2*(ui.selected.targets.length+1);
						if(player.hasSkill('twchuanshu_effect')) num+=3;
						var hs=player.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
						if(hs.length==0) return -1;
						var ts=target.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
						if(Math.min(13,get.number(hs[0])+num)<=get.number(ts[0])) return -1;
						return get.effect(target,{name:'guohe_copy2'},player,player)/2+(targets.includes(target)?get.damageEffect(target,player,player):0);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						event.targets=targets;
						player.logSkill('twzhenhu',targets);
						player.draw();
					}
					else event.finish();
					'step 2'
					player.chooseToCompare(targets,function(card){
						return get.number(card);
					}).setContent('chooseToCompareMeanwhile');
					'step 3'
					if(result.winner&&result.winner==player){
						event.targets.remove(result.winner);
						player.line(event.targets,trigger.card.nature);
						player.addTempSkill('twzhenhu_add');
						if(!trigger.card.storage) trigger.card.storage={};
						trigger.card.storage.twzhenhu=event.targets;
					}
					else player.loseHp();
				},
				subSkill:{
					add:{
						charlotte:true,
						onremove:true,
						forced:true,
						popup:false,
						trigger:{global:'damageBegin1'},
						filter:function(event,player){
							if(!event.card||!event.card.storage) return false;
							var targets=event.card.storage.twzhenhu;
							return targets&&targets.includes(event.player);
						},
						content:function(){
							trigger.num++;
						},
					},
				},
			},
			twlvren:{
				audio:2,
				trigger:{source:'damageBegin3'},
				filter:function(event,player){
					return event.player!=player&&event.player.isIn()&&!event.player.hasMark('twlvren');
				},
				logTarget:'player',
				forced:true,
				locked:false,
				group:['twlvren_more','twlvren_add'],
				content:function(){
					trigger.player.addMark('twlvren',1);
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(target&&target.hasMark('twlvren')) return 0.33;
						}
					}
				},
				marktext:'刃',
				intro:{name2:'刃',content:'mark'},
				subSkill:{
					more:{
						audio:'twlvren',
						trigger:{player:'useCard2'},
						filter:function(event,player){
							var card=event.card,info=get.info(card);
							if(info.allowMultiple==false) return false;
							if(event.targets&&!info.multitarget){
								return get.tag(card,'damage')&&event.targets&&game.hasPlayer(function(target){
									return target.hasMark('twlvren')&&!event.targets.includes(target)&&lib.filter.targetEnabled2(card,player,target);
								});
							}
							return false;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('twlvren'),'为'+get.translation(trigger.card)+'额外指定一个有“刃”的角色为目标',function(card,player,target){
								var evt=_status.event.getTrigger();
								return target.hasMark('twlvren')&&!evt.targets.includes(target)&&lib.filter.targetEnabled2(evt.card,player,target);
							}).set('ai',function(target){
								return get.effect(target,_status.event.getTrigger().card,_status.event.player);
							});
							'step 1'
							if(result.bool){
								var targets=result.targets;
								player.logSkill('twlvren',targets);
								player.line(targets,trigger.card.nature);
								trigger.targets.addArray(targets);
								for(var i of targets) i.removeMark('twlvren',i.countMark('twlvren'),false);
							}
						},
					},
					add:{
						audio:'twlvren',
						trigger:{player:'compare',target:'compare'},
						filter:function(event,player){
							if(player!=event.target&&event.iwhile) return false;
							return true;
						},
						forced:true,
						locked:false,
						content:function(){
							var num=2*trigger.lose_list.length;
							if(player==trigger.player){
								trigger.num1+=num;
								if(trigger.num1>13) trigger.num1=13;
							}
							else{
								trigger.num2+=num;
								if(trigger.num2>13) trigger.num2=13;
							}
							game.log(player,'的拼点牌点数+',num);
						},
					},
				},
			},
			//童渊
			twchaofeng:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(!['sha','shan'].includes(name)) return false;
					return player.hasCard(function(card){
						const name2=get.name(card);
						return (name2=='sha'||name2=='shan')&&name!=name2;
					},'hs');
				},
				filter:function(event,player){
					const names=[];
					if(event.filterCard({name:'sha'},player,event)) names.push('shan');
					if(event.filterCard({name:'shan'},player,event)) names.push('sha');
					return names.length>0&&player.hasCard(function(card){
						return names.includes(get.name(card));
					},'hs');
					//return false;
				},
				group:'twchaofeng_compare',
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						if(event.filterCard({name:'sha'},player,event)){
							list.push(['基本','','sha']);
							for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
						}
						if(event.filterCard({name:'shan'},player,event)){
							list.push(['基本','','shan']);
						}
						var dialog=ui.create.dialog('朝凤',[list,'vcard'],'hidden');
						dialog.direct=true;
						return dialog;
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						if(_status.event.getParent().type!='phase'||game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch (button.link[2]){
								case 'shan':return 5;
								case 'sha':
									if(button.link[3]=='fire') return 2.95;
									else if(button.link[3]=='thunder'||button.link[3]=='ice') return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup:function(links,player){
						return {
							audio:'twchaofeng',
							name:links[0][2],
							filterCard:function(card,player,target){
								if(lib.skill.twchaofeng_backup.name=='sha') return get.name(card)=='shan';
								else return get.name(card)=='sha';
							},
							selectCard:1,
							check:function(card,player,target){
								return 6-get.value(card);
							},
							viewAs:{name:links[0][2],nature:links[0][3]},
							position:'hs',
							popname:true,
						}
					},
					prompt:function(links,player){
						var view,use;
						if(links[0][2]=='sha'){
							use='【闪】';
							view=get.translation(links[0][3]||'')+'【'+get.translation(links[0][2])+'】';
						}
						else{
							use='【杀】';
							view='【闪】';
						}
						return '将一张'+use+'当做'+view+(_status.event.name=='chooseToUse'?'使用':'打出');
					},
				},
				ai:{
					skillTagFilter:function(player,tag){
						var name;
						switch (tag){
							case 'respondSha':name='shan'; break;
							case 'respondShan':name='sha'; break;
						}
						if(!player.countCards('hs',name)) return false;
					},
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							if(player.countCards('hs','shan')>0&&lib.inpile_nature.some(i=>player.getUseValue({name:'sha',nature:i})>0)){
								var temp=get.order({name:'sha'});
								if(temp>max) max=temp;
							}
							if(max>0) max+=0.3;
							return max;
						}
						return 4;
					},
					result:{
						player:1,
					},
					respondSha:true,
					respondShan:true,
					fireAttack:true,
				},
				subSkill:{
					compare:{
						audio:'twchaofeng',
						trigger:{player:'phaseUseBegin'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('twchaofeng'),'选择至多三名角色共同拼点。赢的角色视为对所有没赢的角色使用一张火【杀】',[1,3],(card,player,target)=>{
								return player.canCompare(target);
							}).set('ai',function(target){
								var player=_status.event.player,targets=_status.event.getTrigger().targets;
								var num=0,card={name:'sha',nature:'fire',isCard:true};
								if(target.hasSkill('twlvren')) num+=2*(ui.selected.targets.length+1);
								if(target.hasSkill('twchuanshu_effect')) num+=3;
								var hs=player.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
								var ts=target.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
								if(get.number(hs[0])<=Math.min(13,get.number(ts[0])+num)){
									return 6+get.effect(player,card,target,target);
								}
								return get.effect(target,{name:'guohe_copy2'},player,player)/2+get.effect(target,card,player,player);
							});
							'step 1'
							if(result.bool){
								event.targets=result.targets;
								player.logSkill('twchaofeng_compare',event.targets);
								player.chooseToCompare(event.targets).setContent('chooseToCompareMeanwhile');
							}
							'step 2'
							if(result.winner){
								var targets=[player].addArray(event.targets).sortBySeat(player);
								targets.remove(result.winner);
								var card={name:'sha',nature:'fire',isCard:true};
								var targetsx=targets.filter(function(target){
									return result.winner.canUse(card,target,false);
								});
								if(targetsx.length) result.winner.useCard(card,targetsx,'noai').set('addCount',false);
							}
						}
					}
				}
			},
			twchuanshu:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				limited:true,
				skillAnimation:true,
				animationColor:'qun',
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twchuanshu')).set('ai',target=>get.attitude(_status.event.player,target));
					'step 1'
					if(result.bool){
						player.awakenSkill('twchuanshu');
						var target=result.targets[0];
						player.logSkill('twchuanshu',target);
						target.addMark('twchuanshu_mark',1,false);
						target.addSkill('twchuanshu_effect');
						target.markAuto('twchuanshu_effect',[player]);
						player.addSkill('twchuanshu_clear');
						player.markAuto('twchuanshu_clear',[target]);
					}
				},
				subSkill:{
					mark:{
						charlotte:true,
					},
					effect:{
						audio:'twchuanshu',
						trigger:{
							player:'compare',
							target:'compare',
						},
						direct:true,
						forced:true,
						charlotte:true,
						nopop:true,
						mark:true,
						intro:{
							content:function(storage,player){
								var shisyou=player.getStorage('twchuanshu_effect').filter(i=>i.isIn());
								var str='<li>拼点牌点数+3；'
								if(player.hasMark('twchuanshu_mark')){
									str+='<li>使用的下一张【杀】对除'+get.translation(shisyou)+'外的角色造成伤害时，此伤害+'+player.countMark('twchuanshu_mark')+'；';
									if(!shisyou.includes(player)){
										str+='<li>使用的下一张【杀】结算结束后，'+get.translation(shisyou)+'摸等同于伤害值的牌；';
									}
								}
								str=str.slice(0,-1)+'。';
								return str;
							}
						},
						filter:function(event,player,name){
							if(event.player==player&&event.iwhile>0) return false;
							return (player==event.player?event.num1:event.num2)<13;
						},
						content:function(){
							game.log(player,'的拼点牌点数+3');
							if(player==trigger.player) trigger.num1=Math.min(13,trigger.num1+3);
							else trigger.num2=Math.min(13,trigger.num2+3);
						},
						group:'twchuanshu_damage',
					},
					damage:{
						charlotte:true,
						trigger:{player:['useCard','useCardAfter'],source:'damageBegin1'},
						filter:function(event,player,name){
							if(name=='useCard') return (event.card.name=='sha'&&player.hasMark('twchuanshu_mark'));
							if(name=='damageBegin1') return event.card&&event.card.twchuanshu_mark&&!player.getStorage('twchuanshu_effect').includes(event.player);
							return event.card.twchuanshu_mark&&player.hasHistory('sourceDamage',function(evt){
								return evt.card==event.card;
							})&&player.getStorage('twchuanshu_effect').filter(function(target){
								return target.isIn()&&target!=player;
							}).length;
						},
						forced:true,
						content:function(){
							var name=event.triggername;
							if(name=='useCard'){
								var num=player.countMark('twchuanshu_mark');
								trigger.card.twchuanshu_mark=num;
								player.removeMark('twchuanshu_mark',num,false);
							}
							else if(name=='damageBegin1') trigger.num++;
							else{
								var num1=trigger.card.twchuanshu_mark;
								var num2=0;
								player.getHistory('sourceDamage',function(evt){
									if(evt.card==trigger.card) num2+=evt.num;
								});
								var targets=player.getStorage('twchuanshu_effect').filter(function(target){
									return target.isIn()&&target!=player;
								});
								if(targets.length==1) targets[0].draw(num1*num2);
								else game.asyncDraw(targets,num1*num2);
							}
						},
					},
					clear:{
						charlotte:true,
						onremove:true,
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.getStorage('twchuanshu_clear').length;
						},
						forced:true,
						silent:true,
						content:function(){
							'step 0'
							var targets=player.getStorage('twchuanshu_clear');
							for(var target of targets){
								target.unmarkAuto('twchuanshu_effect',[player]);
								if(!target.getStorage('twchuanshu_effect').length) target.removeSkill('twchuanshu_effect');
							}
							'step 1'
							player.removeSkill('twchuanshu_clear');
						},
					},
				},
			},
			//徐庶
			twjiange:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				filterCard:function(card,player){
					return get.type(card)!='basic';
				},
				usable:1,
				locked:false,
				viewAs:{name:'sha',storage:{twjiange:true}},
				viewAsFilter:function(player){
					if(!player.countCards('hes',function(card){
						return get.type(card)!='basic';
					})) return false;
				},
				position:'hes',
				selectCard:function(){
					return _status.event.skill=='twjiange'?1:Infinity;
				},
				precontent:function(){
					if(player!=_status.currentPhase){
						player.when({player:['useCard','respond']})
						.filter(evt=>evt.skill=='twjiange')
						.then(()=>player.draw());
					}
					event.getParent().addCount=false;
				},
				prompt:'将一张非基本牌当杀使用或打出',
				check:function(card){
					var val=get.value(card);
					if(_status.event.name=='chooseToRespond') return 1/Math.max(0.1,val);
					return 6-val;
				},
				ai:{
					order:function(item,player){
						var target=_status.currentPhase;
						if(!target||target!=player) return 7;
						return 1;
					},
					respondSha:true,
					skillTagFilter:function(player){
						if(!player.countCards('hes',function(card){
							return get.type(card)!='basic';
						})) return false;
					},
				},
				mod:{
					targetInRange:function(card){
						if(card.storage&&card.storage.twjiange) return true;
					},
					cardUsable:function(card,player,num){
						if(card.storage&&card.storage.twjiange) return Infinity;
					},
				}
			},
			twxiawang:{
				audio:2,
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if(!event.source||get.distance(player,event.player)>1||!player.canUse('sha',event.source,false,false)) return false;
					return player.countCards('h')>0;
				},
				direct:true,
				content:function(){
					player.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'侠望：是否对'+get.translation(trigger.source)+'使用一张杀？').set('logSkill','twxiawang').set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',trigger.source);
					player.addTempSkill('twxiawang_damage');
				},
				subSkill:{
					damage:{
						trigger:{player:'useCardAfter'},
						forced:true,
						popup:false,
						charlotte:true,
						filter:function(event,player){
							if(event.card.name!='sha') return false;
							if(event.getParent(2).name!='twxiawang') return false;
							if(!player.hasHistory('sourceDamage',evt=>evt.card==event.card)) return false;
							for(var phase of lib.phaseName){
								var evt=event.getParent(phase);
								if(evt&&evt.name==phase) return true;
							}
							return false;
						},
						content:function(){
							player.popup()
							player.removeSkill('twjiange_damage');
							for(var phase of lib.phaseName){
								var evt=event.getParent(phase);
								if(evt&&evt.name==phase){
									var name=['准备','判定','摸牌','出牌','弃牌','结束'][lib.phaseName.indexOf(phase)];
									game.log(player,'令',_status.currentPhase,'结束了'+name+'阶段');
									player.line(_status.currentPhase,'thunder');
									evt.skipped=true;
								}
							}
						}
					}
				},
			},
			//好萌
			twgongge:{
				audio:3,
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					if(!event.isFirstTarget||!event.targets) return false;
					return get.tag(event.card,'damage');
				},
				direct:true,
				usable:1,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twgongge'),function(card,player,target){
						var trigger=_status.event.getTrigger();
						return trigger.targets.includes(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						var att=get.attitude(player,target);
						var damageNum=trigger.getParent().baseDamage;
						var map=trigger.getParent().customArgs,id=target.playerid;
						if(map[id]){
							if(typeof map[id].baseDamage=='number') damageNum=map[id].baseDamage;
							if(typeof map[id].extraDamage=='number') damageNum+=map[id].extraDamage;
						}
						if(target.hasSkillTag('filterDamage',null,{
							player:trigger.player,
							card:trigger.card,
						})) damageNum=1;
						var num=target.getSkills(null,false,false).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.charlotte;
						}).length+1;
						var list=[0,0,0];
						var player=_status.event.player;
						list[0]=num;
						list[1]=(get.effect(target,{name:'guohe_copy2'},player,player)>0?((target.hp-damageNum<player.hp)?num:(num-Math.min(player.getCards('he'),num-1))):0);
						if(_status.event.yimie(trigger,player,target,damageNum)) list[2]=(get.recoverEffect(target,player,player)>get.damageEffect(target,player,player)?(Math.min(num-1,target.getDamagedHp())):(num-1))*2;
						return Math.max.apply(Math,list);
					}).set('yimie',function(trigger,player,target,damageNum){
						var hit=true;
						var att=get.attitude(player,target);
						if(get.type(trigger.card)=='trick'&&trigger.player.countCards('hs',{name:'wuxie'})) hit=false;
						if(trigger.card.name=='huogong'&&trigger.player.countCards('h',function(card){
							var list=[];
							for(var i of player.getCards('h')) list.push(get.suit(i));
							return !list.includes(get.suit(card));
						})) hit=false;
						var key;
						switch (trigger.card.name){
							case 'sha':case 'wanjian':key=['shan']; break;
							case 'juedou':case 'nanman':case 'jiedao':key=['sha']; break;
							default:key=[]; break;
						}
						if(get.type(trigger.card)=='trick') key.push('wuxie');
						key.push('caochuan');
						var bool1=((get.recoverEffect(target,player,player)>0)?1:-1);
						var bool2=(((att>0&&!hit)||(target.countCards('hs',{name:key})&&!trigger.getParent().directHit.includes(target)))?1:-1);
						if(att<=0&&target.hp-damageNum>0) return false;
						return bool1=bool2&&att!=0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twgongge',target);
						var num=target.getSkills(null,false,false).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.charlotte;
						}).length+1;
						event.num=num;
						var list=[];
						var choiceList=[
							'摸'+get.cnNumber(num)+'张牌，若'+get.translation(target)+'响应此牌，则你跳过下个摸牌阶段',
							'弃置'+get.translation(target)+get.cnNumber(num)+'张牌，此牌结算完毕后，若'+get.translation(target)+'的体力值不小于你，你交给'+get.translation(target)+get.cnNumber(num-1)+'张牌',
							'令此牌对'+get.translation(target)+'造成的伤害+'+(num-1)+'，此伤害结算完成后，其回复等量的体力值'
						];
						list.push('摸牌');
						if(target.countDiscardableCards(player,'he')) list.push('拆牌');
						else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
						list.push('加伤');
						player.chooseControl(list).set('prompt','攻阁：请选择一项（'+get.translation(target)+'对应X值：'+(num-1)+'）').set('ai',()=>_status.event.choice).set('choice',function(){
							var att=get.attitude(player,target);
							var damageNum=trigger.getParent().baseDamage;
							var map=trigger.getParent().customArgs,id=target.playerid;
							if(map[id]){
								if(typeof map[id].baseDamage=='number') damageNum=map[id].baseDamage;
								if(typeof map[id].extraDamage=='number') damageNum+=map[id].extraDamage;
							}
							if(target.hasSkillTag('filterDamage',null,{
								player:trigger.player,
								card:trigger.card,
							})) damageNum=1;
							var yimie=function(){
								var hit=true;
								if(get.type(trigger.card)=='trick'&&trigger.player.countCards('hs',{name:'wuxie'})) hit=false;
								if(trigger.card.name=='huogong'&&trigger.player.countCards('h',function(card){
									var list=[];
									for(var i of player.getCards('h')) list.push(get.suit(i));
									return !list.includes(get.suit(card));
								})) hit=false;
								var key;
								switch (trigger.card.name){
									case 'sha':case 'wanjian':key=['shan']; break;
									case 'juedou':case 'nanman':case 'jiedao':key=['sha']; break;
									default:key=[]; break;
								}
								key.push('caochuan');
								var bool1=((get.recoverEffect(target,player,player)>0)?1:-1);
								var bool2=(((att>0&&!hit)||(target.countCards('hs',{name:key})&&!trigger.getParent().directHit.includes(target)))?1:-1);
								if(att<=0&&target.hp-damageNum>0) return false;
								return bool1=bool2&&att!=0;
							};
							if(yimie()) return '加伤';
							if(list.includes('拆牌')&&get.effect(target,{name:'guohe_copy2'},player,player)>0&&target.hp-damageNum<player.hp) return '拆牌';
							return '摸牌';
						}()).set('choiceList',choiceList);
					}
					else{
						player.storage.counttrigger.twgongge--;
						event.finish();
					}
					'step 2'
					game.log(player,'选择了','#y'+result.control);
					switch(result.control){
						case '摸牌':
							player.draw(num);
							player.addTempSkill('twgongge_buff1');
							var evt={
								card:trigger.card,
								target:target,
							};
							player.storage.twgongge_buff1=evt;
							break;
						case '拆牌':
							player.discardPlayerCard(num,target,'he',true);
							player.addTempSkill('twgongge_buff2');
							var evt={
								card:trigger.card,
								target:target,
								num:num-1,
							};
							player.storage.twgongge_buff2=evt;
							break;
						case '加伤':
							player.addTempSkill('twgongge_buff3');
							var evt={
								card:trigger.card,
								target:target,
								num:num-1,
							};
							player.storage.twgongge_buff3=evt;
							break;
					}
				},
				subSkill:{
					//摸牌后续
					buff1:{
						charlotte:true,
						onremove:true,
						trigger:{global:['useCard','respond']},
						filter:function(event,player){
							if(player.skipList.includes('phaseDraw')) return false;
							if(!Array.isArray(event.respondTo)||player!=event.respondTo[0]) return false;
							var evt=player.storage.twgongge_buff1;
							if(evt.target==event.player&&evt.card==event.respondTo[1]) return true;
							return false;
						},
						direct:true,
						popup:false,
						content:function(){
							player.skip('phaseDraw');
							game.log(player,'跳过了下个','#g摸牌阶段');
							player.addTempSkill('twgongge_buff1_mark','phaseDrawSkipped');
						},
					},
					//拆牌后续
					buff2:{
						charlotte:true,
						onremove:true,
						trigger:{player:'useCardAfter'},
						filter:function(event,player){
							if(!player.countCards('he')) return false;
							var evt=player.storage.twgongge_buff2;
							if(evt.card==event.card&&evt.target.isIn()&&evt.target.hp>=player.hp) return true;
							return false;
						},
						direct:true,
						popup:false,
						content:function(){
							'step 0'
							var evt=player.storage.twgongge_buff2;
							var target=evt.target,num=evt.num;
							event.target=target;
							if(player.countCards('he')<=num) event._result={bool:true,cards:player.getCards('he')};
							else player.chooseCard('he',num,'攻阁：交给'+get.translation(target)+get.cnNumber(num)+'张牌',true);
							'step 1'
							if(result.bool) player.give(result.cards,target);
						},
					},
					//加伤后续
					buff3:{
						charlotte:true,
						onremove:true,
						trigger:{source:'damageBegin1',player:'useCardAfter'},
						filter:function(event,player){
							if(!event.card) return false;
							var evt=player.storage.twgongge_buff3;
							if(evt.card==event.card&&evt.target.isIn()&&(event.name=='useCard'||event.player==evt.target)) return true;
							return false;
						},
						direct:true,
						popup:false,
						content:function(){
							var evt=player.storage.twgongge_buff3;
							if(trigger.name=='damage') trigger.num+=evt.num;
							else if(evt.target.isIn()) evt.target.recover(evt.num);
						},
					},
					buff1_mark:{
						mark:true,
						intro:{
							content:'跳过下一个摸牌阶段',
						},
					}
				},
			},
			//魏续
			twsuizheng:{
				audio:3,
				trigger:{global:'phaseBefore',player:'enterGame'},
				filter:function(event,player){
					return game.hasPlayer(current=>current!=player)&&(event.name!='phase'||game.phaseNumber==0);
				},
				forced:true,
				content:function(){
					'step 0'
					player.chooseTarget('请选择【随征】的目标',lib.translate.twsuizheng_info,lib.filter.notMe,true).set('ai',function(target){
						var player=_status.event.player;
						return Math.max(1+get.attitude(player,target)*get.threaten(target),Math.random());
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						game.log(player,'选择了',target,'作为','“随征”角色');
						player.markAuto('twsuizheng',[target]);
						player.addSkill('twsuizheng_draw');
						player.addSkill('twsuizheng_xianfu');
					}
				},
				ai:{expose:0.3},
				intro:{content:'已选择$为“随征”角色'},
				subSkill:{
					draw:{
						charlotte:true,
						audio:'twsuizheng',
						trigger:{global:'damageSource'},
						filter:function(event,player){
							return player.getStorage('twsuizheng').includes(event.source);
						},
						forced:true,
						logTarget:'source',
						content:function(){
							player.draw();
						},
					},
					xianfu:{
						audio:'twsuizheng',
						trigger:{global:'damageEnd'},
						filter:function(event,player){
							return player.getStorage('twsuizheng').includes(event.player)&&event.player.isIn();
						},
						forced:true,
						charlotte:true,
						logTarget:'player',
						content:function(){
							'step 0'
							player.chooseToDiscard(2,'随征：弃置两张基本牌','若你弃牌，你令'+get.translation(trigger.player)+'回复1点体力；或点击“取消”失去1点体力，令'+get.translation(trigger.player)+'获得一张【杀】或【决斗】',{type:'basic'}).set('ai',function(card){
								if(_status.event.refuse) return -1;
								return 6-get.value(card);
							}).set('refuse',get.attitude(player,trigger.player)<=0||get.effect(player,{name:'losehp'})>=0);
							'step 1'
							if(result.bool) trigger.player.recover();
							else {
								player.loseHp();
								var card=get.cardPile(function(card){
									return card.name=='sha'||card.name=='juedou';
								});
								if(card) trigger.player.gain(card,'gain2');
							}
						},
					},
				},
			},
			twtuidao:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var targets=player.getStorage('twsuizheng');
					if(!targets.length) return false;
					return targets.some(target=>target.hp<=2||!target.isIn());
				},
				check:function(event,player){
					var targets=player.getStorage('twsuizheng');
					var val=0;
					for(var target of targets){
						if(target.hp<=2&&target.isIn()) val-=get.attitude(player,target);
						else if(!target.isIn()) val+=6;
					}
					return val>0;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.awakenSkill('twtuidao');
					var list1=['equip3','equip4'].map(i=>get.translation(i)),list2=['basic','trick','equip'].map(i=>get.translation(i));
					var targets=player.getStorage('twsuizheng'),str=get.translation(targets);
					if(targets.length) str='与'+str;
					player.chooseButton(2,true,[
						'颓盗：废除你'+str+'的一个坐骑栏废除并选择一个类别',
						'坐骑栏',
						[list1,'tdnodes'],
						'类别',
						[list2,'tdnodes'],
					]).set('filterButton',function(button){
						var list=_status.event.list,link=button.link;
						if(ui.selected.buttons.length){
							if(list.includes(ui.selected.buttons[0].link)&&list.includes(link)) return false;
							if(!list.includes(ui.selected.buttons[0].link)&&!list.includes(link)) return false;
						}
						return true;
					}).set('ai',function(button){
						var player=_status.event.player;
						var list=_status.event.list,link=button.link;
						if(list.includes(link)){
							if(player.hasDisabledSlot(4)) return '攻击马';
							if(player.hasDisabledSlot(3)) return '防御马';
							return '攻击马';
						}
						if(!list.includes(link)){
							var player=_status.event.player;
							var targets=player.getStorage('twsuizheng');
							for(var target of targets){
								if(target.isIn()){
									var listx=[0,0,0],list2=['basic','trick','equip'].map(i=>get.translation(i));
									for(var i of target.getCards('he')) listx[list2.indexOf(get.translation(get.type2(i)))]++;
									return list2[listx.indexOf(Math.max.apply(Math,listx))];
								}
							}
							return 1+Math.random();
						}
					}).set('list',list1);
					'step 1'
					if(result.links[0].indexOf('马')==-1) result.links.reverse();
					var subtype=result.links[0]=='防御马'?'equip3':'equip4',type={基本:'basic',锦囊:'trick',装备:'equip'}[result.links[1]];
					player.disableEquip(subtype);
					var targets=player.getStorage('twsuizheng')
					for(var target of targets){
						if(target&&target.isIn()){
							target.disableEquip(subtype);
							var cards=target.getCards('he',card=>get.type2(card)==type);
							player.gain(cards,target,'give');
							event.gainners=cards;
						}
						else{
							var cards=[];
							for(var i=1; i<=2; i++){
								var card=get.cardPile2(function(card){
									return !cards.includes(card)&&get.type2(card)==type;
								});
								if(card) cards.push(card);
								else break;
							}
							player.gain(cards,'gain2');
							event.gainners=cards;
						}
					}
					'step 2'
					player.chooseTarget('请重新选择【随征】目标',true,function(card,player,target){
						return !player.getStorage('twsuizheng').includes(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						return Math.max(1+get.attitude(player,target)*get.threaten(target),Math.random());
					});
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						game.log(player,'选择了',target,'作为','“随征”角色');
						delete player.storage.twsuizheng
						player.markAuto('twsuizheng',[target]);
					}
				},
				ai:{combo:'twsuizheng'},
			},
			//曹休
			twqianju:{
				audio:2,
				trigger:{source:'damageSource'},
				filter:function(event,player){
					return get.distance(player,event.player)<=1&&player.countCards('e')<5;
				},
				forced:true,
				usable:1,
				content:function(){
					var card=get.cardPile(function(card){
						return get.type(card)=='equip'&&player.canEquip(card);
					});
					if(card){
						player.$gain2(card);
						game.delayx();
						player.equip(card);
					}
				},
				mod:{
					globalFrom:function(from,to,distance){
						return distance-from.countCards('e');
					},
				},
			},
			twqingxi:{
				audio:'xinqingxi',
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&player.getHistory('useCard',evt=>evt.card.name=='sha').indexOf(event.getParent())==0;
				},
				check:function(event,player){
					return true;
				},
				logTarget:'target',
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					if(!target.countCards('e')) event._result={index:0};
					else target.chooseControl().set('ai',function(){
						if(_status.event.goon||player.hp>2) return 0;
						return 1;
					}).set('choiceList',[
						'令'+get.translation(player)+'摸'+get.cnNumber(Math.max(1,player.countCards('e')))+'张牌，且此【杀】不可被响应',
						'弃置装备区中的所有牌并弃置'+get.translation(player)+'装备区等量的牌，此【杀】造成的伤害+1'
					]).set('goon',get.attitude(target,player)>0);
					'step 1'
					if(result.index==0){
						player.draw(Math.max(1,player.countCards('e')));
						trigger.getParent().directHit.add(target);
						game.log(trigger.card,'不可被',target,'响应');
						event.finish();
					}
					else{
						var num=target.countCards('e');
						target.discard(target.getCards('e'));
						target.discardPlayerCard(player,'e',num,true);
					}
					'step 2'
					var map=trigger.customArgs;
					var id=target.playerid;
					if(!map[id]) map[id]={};
					if(!map[id].extraDamage) map[id].extraDamage=0;
					map[id].extraDamage++;
					game.log(trigger.card,'对',target,'造成的伤害+1');
					game.delayx();
				},
			},
			//孙翊
			twzaoli:{
				audio:'zaoli',
				trigger:{player:'phaseUseBegin'},
				init:function(player){
					if(player.isPhaseUsing()){
						var hs=player.getCards('h');
						player.getHistory('gain',function(evt){
							hs.removeArray(evt.cards);
						});
						if(hs.length) player.addGaintag(hs,'twzaoli');
					}
				},
				filter:function(event,player){
					return player.countCards('he');
				},
				forced:true,
				group:'twzaoli_mark',
				content:function(){
					'step 0'
					if(player.countCards('h',card=>get.type(card)!='equip')){
						player.chooseCard('h',[1,Infinity],true,'躁厉：请选择至少一张非装备手牌，你弃置这些牌和所有装备牌',(card,player)=>{
							return get.type(card)!='equip'&&lib.filter.cardDiscardable(card,player,'twzaoli');
						}).set('ai',function(card){
							if(!card.hasGaintag('twzaoli_temp')) return 5-get.value(card);
							return 1;
						});
					}
					'step 1'
					var cards=player.getCards('he',{type:'equip'});
					var subtype=[];
					event.subtype=subtype.addArray(cards.map(card=>get.subtype(card)));
					cards.addArray(result.cards||[]);
					if(cards.length) player.discard(cards);
					event.cards=cards;
					'step 2'
					player.draw(cards.length);
					'step 3'
					var num=0;
					if(event.subtype.length){
						for(var i of event.subtype){
							var card=get.cardPile2(function(card){
								return get.type(card)=='equip'&&get.subtype(card)==i;
							});
							if(card){
								num++;
								player.$gain2(card);
								game.delayx();
								player.equip(card);
							}
						}
					}
					if(num<=2) event.finish();
					'step 4'
					player.loseHp();
				},
				onremove:function(player){
					player.removeGaintag('twzaoli');
				},
				mod:{
					cardEnabled2:function(card,player){
						if(player.isPhaseUsing()&&get.itemtype(card)=='card'&&card.hasGaintag('twzaoli')) return false;
					},
				},
				subSkill:{
					mark:{
						trigger:{player:['phaseUseBegin','phaseUseAfter','phaseAfter']},
						filter:function(event,player){
							return player.countCards('h');
						},
						direct:true,
						firstDo:true,
						content:function(){
							if(event.triggername=='phaseUseBegin'){
								var hs=player.getCards('h');
								player.getHistory('gain',function(evt){
									hs.removeArray(evt.cards);
								});
								if(hs.length) player.addGaintag(hs,'twzaoli');
							}
							else{
								player.removeGaintag('twzaoli');
							}
						},
					}
				},
			},
			//邓芝
			twjimeng:{
				audio:'jimeng',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countGainableCards(player,'he')>0;
					})
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countGainableCards(player,'hej')>0;
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(target,'hej',true);
					'step 1'
					var hs=player.getCards('he');
					if(hs.length){
						if(hs.length==1) event._result={bool:true,cards:hs};
						else player.chooseCard(true,'交给'+get.translation(target)+'一张牌','he',true);
					}
					else event.finish();
					'step 2'
					player.give(result.cards,target);
					'step 3'
					if(target.hp>=player.hp) player.draw();
				},
				ai:{
					order:8,
					result:{
						player:function(player,target){
							if(target.hp>=player.hp) return 1;
							return 0;
						},
						target:function(player,target){
							return get.effect(target,{name:'shunshou'},player,target)/10;
						}
					}
				}
			},
			//杨仪
			twgongsun:{
				audio:'gongsun',
				trigger:{player:'phaseUseBegin'},
				forced:true,
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(current=>player.inRange(current));
				},
				content:function(){
					'step 0'
					player.chooseTarget('共损：请选择一名攻击范围内的角色',lib.translate.twgongsun_info,true,function(card,player,target){
						return player!=target&&player.inRange(target);
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)*(1+target.countCards('h'));
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twgongsun',target);
						player.addTempSkill('twgongsun_shadow',{player:['phaseBegin','die']});
						player.chooseControl(lib.suit).set('prompt','共损：请选择一个花色').set('ai',function(button){
							return lib.suit.randomGet();
						});
					}
					else event.finish();
					'step 2'
					var suit=result.control;
					player.popup(suit+2,'soil');
					game.log(player,'选择了',suit+2);
					player.storage.twgongsun_shadow.push([target,suit]);
					player.markSkill('twgongsun_shadow');
				},
			},
			twgongsun_shadow:{
				global:'twgongsun_shadow2',
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				marktext:'损',
				onremove:true,
				intro:{
					content:function(shadow){
						var str='';
						for(var i=0;i<shadow.length;i++){
							if(i>0) str+='<br>'
							str+=get.translation(shadow[i][0]);
							str+='：';
							str+=get.translation(shadow[i][1]);
						}
						return str;
					},
				},
				mod:{
					cardEnabled:function(card,player){
						var list=player.storage.twgongsun_shadow;
						for(var i=0;i<list.length;i++){
							if(list[i][1]==card.suit) return false;
						}
					},
					cardRespondable:function(card,player){
						var list=player.storage.twgongsun_shadow;
						for(var i=0;i<list.length;i++){
							if(list[i][1]==card.suit) return false;
						}
					},
					cardSavable:function(card,player){
						var list=player.storage.twgongsun_shadow;
						for(var i=0;i<list.length;i++){
							if(list[i][1]==card.suit) return false;
						}
					},
					cardDiscardable:function(card,player){
						var list=player.storage.twgongsun_shadow;
						for(var i=0;i<list.length;i++){
							if(list[i][1]==card.suit) return false;
						}
					},
				},
			},
			twgongsun_shadow2:{
				mod:{
					cardEnabled:function(card,player){
						if(game.hasPlayer(function(current){
							var list=current.storage.twgongsun_shadow;
							if(!list) return false;
							for(var i=0;i<list.length;i++){
								if(list[i][0]==player&&list[i][1]==card.suit) return true;
							}
							return false;
						})) return false;
					},
					cardSavable:function(card,player){
						if(game.hasPlayer(function(current){
							var list=current.storage.twgongsun_shadow;
							if(!list) return false;
							for(var i=0;i<list.length;i++){
								if(list[i][0]==player&&list[i][1]==card.suit) return true;
							}
							return false;
						})) return false;
					},
					cardRespondable:function(card,player){
						if(game.hasPlayer(function(current){
							var list=current.storage.twgongsun_shadow;
							if(!list) return false;
							for(var i=0;i<list.length;i++){
								if(list[i][0]==player&&list[i][1]==card.suit) return true;
							}
							return false;
						})) return false;
					},
					cardDiscardable:function(card,player){
						if(game.hasPlayer(function(current){
							var list=current.storage.twgongsun_shadow;
							if(!list) return false;
							for(var i=0;i<list.length;i++){
								if(list[i][0]==player&&list[i][1]==card.suit) return true;
							}
							return false;
						})) return false;
					},
				},
			},
			//濮阳兴
			twzhengjian:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					if(event.name=='phase'&&game.phaseNumber!=0) return false;
					return !player.hasSkill('twzhengjian_eff0')&&!player.hasSkill('twzhengjian_eff1')
				},
				content:function(){
					'step 0'
					player.chooseControl().set('prompt','征建：请选择一种效果').set('choiceList',[
						'令“出牌阶段内未使用过非基本牌”的其他角色受到惩罚',
						'令“出牌阶段内未得到过牌”的其他角色受到惩罚',
					]).set('ai',()=>Math.random()<=0.5?0:1);
					'step 1'
					player.addSkill('twzhengjian_eff'+result.index);
					game.log(player,'获得了','#g【征建】','的','#y效果'+get.cnNumber(result.index+1,true));
					game.delayx();
				},
				onremove:true,
				subSkill:{
					eff0:{
						audio:'twzhengjian',
						trigger:{global:'phaseUseEnd'},
						forced:true,
						charlotte:true,
						marktext:'建',
						mark:true,
						filter:function(event,player){
							if(event.player==player||event._twzhengjian||!event.player.isIn()) return false;
							if(event.player.hasHistory('useCard',function(evt){
								return evt.getParent('phaseUse')==event&&get.type(evt.card)!='basic';
							})) return false;
							return player.storage.twzhengjian||event.player.countCards('he')>0;
						},
						logTarget:'player',
						content:function(){
							'step 0'
							trigger._twzhengjian=true;
							var target=trigger.player;
							event.target=target;
							if(player.storage.twzhengjian){
								player.chooseBool('征建：是否对'+get.translation(target)+'造成1点伤害？').set('ai',()=>_status.event.goon).set('goon',get.damageEffect(target,player,_status.event.player)>0);
							}
							else{
								target.chooseCard('he',true,'交给'+get.translation(player)+'一张牌');
							}
							'step 1'
							if(result.bool){
								if(result.cards&&result.cards.length){
									target.give(result.cards,player).type='twzhengjian';
								}
								else target.damage();
							}
							player.chooseBool('是否变更【征建】的效果？').set('ai',()=>Math.random()>0.5);
							'step 2'
							if(result.bool){
								player.removeSkill('twzhengjian_eff0');
								player.addSkill('twzhengjian_eff1');
								game.log(player,'将','#g【征建】','的效果变更为','#y效果二');
							}
						},
						intro:{
							content:function(storage,player){
								if(player.storage.twzhengjian) return '其他角色的出牌阶段结束时，若其本阶段内未使用过非基本牌，则你可对其造成1点伤害，然后你可失去此效果并获得〖征建〗的效果二。';
								return '其他角色的出牌阶段结束时，若其本阶段内未使用过非基本牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果二。';
							},
						},
					},
					eff1:{
						audio:'twzhengjian',
						trigger:{global:'phaseUseEnd'},
						forced:true,
						charlotte:true,
						marktext:'征',
						mark:true,
						filter:function(event,player){
							if(event.player==player||event._twzhengjian||!event.player.isIn()) return false;
							if(event.player.hasHistory('gain',function(evt){
								return evt.getParent('phaseUse')==event;
							})) return false;
							return player.storage.twzhengjian||event.player.countCards('he')>0;
						},
						logTarget:'player',
						content:function(){
							'step 0'
							trigger._twzhengjian=true;
							var target=trigger.player;
							event.target=target;
							if(player.storage.twzhengjian){
								player.chooseBool('征建：是否对'+get.translation(target)+'造成1点伤害？').set('ai',()=>_status.event.goon).set('goon',get.damageEffect(target,player,_status.event.player)>0);
							}
							else{
								target.chooseCard('he',true,'交给'+get.translation(player)+'一张牌');
							}
							'step 1'
							if(result.bool){
								if(result.cards&&result.cards.length){
									target.give(result.cards,player).type='twzhengjian';
								}
								else target.damage();
							}
							player.chooseBool('是否变更【征建】的效果？').set('ai',()=>Math.random()>0.5);
							'step 2'
							if(result.bool){
								player.removeSkill('twzhengjian_eff1');
								player.addSkill('twzhengjian_eff0');
								game.log(player,'将','#g【征建】','的效果变更为','#y效果一');
							}
						},
						intro:{
							content:function(storage,player){
								if(player.storage.twzhengjian) return '其他角色的出牌阶段结束时，若其本阶段内未得到过牌，则你可对其造成1点伤害，然后你可失去此效果并获得〖征建〗的效果一。';
								return '其他角色的出牌阶段结束时，若其本阶段内未得到过牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果一。';
							},
						},
					},
				},
			},
			twzhongchi:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				forced:true,
				skillAnimation:true,
				animationColor:'wood',
				filter:function(event,player){
					if(player.storage.twzhengjian||!player.hasSkill('twzhengjian',null,null,false)||!event.getg(player).length) return false;
					var num1=game.countPlayer2();
					var list=[];
					player.getAllHistory('gain',function(evt){
						if(evt.type=='twzhengjian') list.add(evt.source);
					});
					return list.length>=Math.ceil(num1/2);
				},
				content:function(){
					'step 0'
					player.awakenSkill('twzhongchi');
					'step 1'
					player.recover(2);
					player.addSkill('twzhongchi_effect');
					player.storage.twzhengjian=true;
					'step 2'
					game.delayx();
				},
				subSkill:{
					effect:{
						mark:true,
						marktext:'斥',
						intro:{content:'受到渠道为【杀】的伤害+1'},
						trigger:{player:'damageBegin1'},
						forced:true,
						filter:function(event,player){
							return event.card&&event.card.name=='sha';
						},
						content:function(){
							trigger.num++;
						},
					},
				},
			},
			//田豫
			twzhenxi:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					var target=event.target;
					return event.card.name=='sha'&&(target.countCards('h')>0||target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canEquip(card);
						})
					},'e')||target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canAddJudge(card);
						})
					},'j'));
				},
				usable:1,
				content:function(){
					'step 0'
					var target=trigger.target;
					event.target=target;
					var str=get.translation(target);
					var list=[
						'弃置'+str+'的'+get.cnNumber(get.distance(player,target))+'张手牌',
						'将'+str+'装备区或判定区内的一张牌移动到另一名角色的对应区域内',
					];
					var choices=[];
					if(target.countCards('h')>0) choices.push('选项一');
					else list[0]='<span style="opacity:0.5">'+list[0]+'</span>';
					if(target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canEquip(card);
						})
					},'e')||target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canAddJudge(card);
						})
					},'j')) choices.push('选项二');
					else list[1]='<span style="opacity:0.5">'+list[1]+'</span>';
					if(choices.length==2&&(target.hp>player.hp||target.isMaxHp())) choices.push('全部执行');
					choices.push('cancel2');
					player.chooseControl(choices).set('choiceList',list).set('prompt',get.prompt('twzhenxi',target)).set('ai',function(){
						var player=_status.event.player,target=_status.event.getTrigger().target;
						var eff1=0,eff2=0;
						var choices=_status.event.controls.slice(0);
						if(choices.includes('选项一')){
							eff1=-get.distance(player,target)*get.attitude(player,target);
						}
						if(choices.includes('选项二')){
							var equip=0,judge=0,att=get.attitude(player,target);
							var es=target.getCards('e'),js=target.getCards('j');
							for(var i of es){
								var val=get.value(i);
								if(att>0){
									if(val<=Math.min(0,equip)&&game.hasPlayer(function(current){
										return current!=target&&current.canEquip(i)&&get.effect(current,i,player,player)>0;
									})) equip=val;
								}
								else{
									if(val>Math.max(0,equip)&&game.hasPlayer(function(current){
										return current!=target&&current.canEquip(i)&&get.effect(current,i,player,player)>0;
									})) equip=val;
								}
							}
							for(var i of js){
								var card={name:i.viewAs||i.name};
								var effect=get.effect(target,card,player,player);
								if(effect<0){
									game.countPlayer(function(current){
										if(current!=target&&current.canAddJudge(i)){
											var eff=get.effect(current,card,player,player);
											judge=Math.max(eff,judge);
										}
									});
								}
							}
							eff2=Math.max(-equip*att,judge);
						}
						if(eff1>0){
							if(eff2>0){
								if(choices.includes('全部执行')) return '全部执行';
								else if(eff2>=eff1) return '选项二';
							}
							return '选项一';
						}
						else if(eff2>0) return '选项二';
						return 'cancel2';
					});
					'step 1'
					if(result.control=='cancel2'){
						event.finish();
						return;
					}
					player.logSkill('twzhenxi',target);
					event.control=result.control;
					if(event.control!='选项二') player.discardPlayerCard(target,true,'h',get.distance(player,target));
					if(event.control=='选项一') event.finish();
					'step 2'
					if(event.control!='选项一'&&(target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canEquip(card);
						})
					},'e')||target.hasCard(function(card){
						return game.hasPlayer(function(current){
							return current!=target&&current.canAddJudge(card);
						})
					},'j'))){
						player.chooseTarget(true,'将'+get.translation(target)+'区域内的一张牌移动给另一名角色',function(card,player,target){
							var source=_status.event.preTarget;
							if(source==target) return false;
							return source.hasCard(function(card){
								return target.canEquip(card);
							},'e')||source.hasCard(function(card){
								return target.canAddJudge(card);
							},'j');
						}).set('preTarget',target).set('ai',function(target){
							var player=_status.event.player,source=_status.event.preTarget;
							var att=get.attitude(player,source);
							var es=source.getCards('e',function(card){
								return target.canEquip(card);
							}),js=source.getCards('j',function(card){
								return target.canAddJudge(card);
							});
							var eff=0;
							for(var i of es){
								var val=get.value(i,source);
								if(att>0?val<=0:val>0){
									eff=Math.max(eff,get.effect(target,i,player,player));
								}
							}
							for(var i of js){
								var card={name:i.viewAs||i.name};
								if(get.effect(source,card,player,player)<0){
									eff=Math.max(eff,get.effect(target,card,player,player));
								}
							}
							return eff;
						});
					}
					else event.finish();
					'step 3'
					if(result.bool){
						var target2=result.targets[0];
						event.target2=target2;
						player.choosePlayerCard('ej',true,function(button){
							var player=_status.event.player;
							var targets0=_status.event.targets0;
							var targets1=_status.event.targets1;
							if(get.attitude(player,targets0)>0&&get.attitude(player,targets1)<0){
								if(get.position(button.link)=='j') return 12;
								if(get.value(button.link,targets0)<0&&get.effect(targets1,button.link,player,targets1)>0) return 10;
								return 0;
							}
							else{
								if(get.position(button.link)=='j') return -10;
								return get.value(button.link)*get.effect(targets1,button.link,player,targets1);
							}
						},target).set('targets0',target).set('targets1',target2).set('filterButton',function(button){
							var targets1=_status.event.targets1;
							if(get.position(button.link)=='j'){
								return targets1.canAddJudge(button.link);
							}
							else{
								return targets1.canEquip(button.link);
							}
						}).set('ai',function(button){
							var player=_status.event.player,target=_status.event.targets1,source=_status.event.targets0;
							var att=get.attitude(player,source);
							var card=button.link;
							if(get.position(card)=='e'){
								var val=get.value(card);
								if(att>0?val>0:val<=0) return 0;
								return get.effect(target,card,player,player);
							}
							var cardx={name:card.viewAs||card.name};
							if(get.effect(source,cardx,player,player)>=0) return 0;
							return get.effect(target,cardx,player,player)
						});
					}
					else{
						event.finish();
					}
					'step 4'
					if(result.bool&&result.links.length){
						var link=result.links[0];
						if(get.position(link)=='e'){
							event.target2.equip(link);
						}
						else if(link.viewAs){
							event.target2.addJudge({name:link.viewAs},[link]);
						}
						else{
							event.target2.addJudge(link);
						}
						target.$give(link,event.target2,false);
						game.log(target,'的',link,'被移动给了',event.target2);
						game.delay();
					}
				},
				ai:{
					unequip_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(!arg||!arg.name||arg.name!='sha') return false;
						if(player.storage.counttrigger&&player.storage.counttrigger.twzhenxi) return false;
						if(!arg.target) return false;
						var card=arg.target.getEquip(2);
						return card&&get.value(card)>0&&game.hasPlayer(function(current){
							return current!=arg.target&&current.canEquip(card)&&get.effect(current,card,player,player)>0;
						})
					},
				},
			},
			twyangshi:{
				audio:2,
				trigger:{player:'damageEnd'},
				forced:true,
				content:function(){
					if(game.hasPlayer(function(current){
						return current!=player&&!player.inRange(current);
					})){
						player.addSkill('twyangshi_distance');
						player.addMark('twyangshi_distance',1,false);
					}
					else{
						var card=get.cardPile2(function(card){
							return card.name=='sha';
						});
						if(card) player.gain(card,'gain2');
						else game.log('但是牌堆里已经没有杀了！');
					}
				},
				subSkill:{
					distance:{
						charlotte:true,
						onremove:true,
						mod:{
							attackRange:function(player,num){
								return num+player.countMark('twyangshi_distance');
							},
						},
						intro:{
							content:'攻击范围+#',
						},
					},
				},
			},
			//全琮
			zhenshan:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					if(event.type=='wuxie'||player.hasSkill('zhenshan_used')) return false;
					var nh=player.countCards('h');
					if(!game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')<nh;
					})){
						return false;
					}
					for(var i of lib.inpile){
						if(get.type(i)!='basic') continue;
						var card={name:i,isCard:true};
						if(event.filterCard(card,player,event)) return true;
						if(i=='sha'){
							for(var j of lib.inpile_nature){
								card.nature=j;
								if(event.filterCard(card,player,event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];for(var i of lib.inpile){
						if(get.type(i)!='basic') continue;
						var card={name:i,isCard:true};
						if(event.filterCard(card,player,event)) list.push(['基本','',i]);
						if(i=='sha'){
							for(var j of lib.inpile_nature){
								card.nature=j;
								if(event.filterCard(card,player,event)) list.push(['基本','',i,j]);
							}
						}
					}
						return ui.create.dialog('振赡',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						if(card.name=='jiu') return 0;
						if(game.hasPlayer(function(current){
							return get.effect(current,card,player,player)>0;
						})){
							if(card.name=='sha'){
								var eff=player.getUseValue(card);
								if(eff>0) return 2.9+eff/10;
								return 0;
							}
							else if(card.name=='tao'||card.name=='shan'){
								return 4;
							}
						}
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false},
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
							},
							selectCard:-1,
							precontent:function(){
								'step 0'
								player.chooseTarget('选择一名手牌数小于你的角色交换手牌',function(card,player,target){
									return target!=player&&target.countCards('h')<player.countCards('h')
								},true).set('ai',function(target){
									return get.attitude(player,target)*Math.sqrt(target.countCards('h')+1);
								});
								'step 1'
								if(result.bool){
									player.logSkill('zhenshan',result.targets);
									player.addTempSkill('zhenshan_used');
									player.swapHandcards(result.targets[0]);
									delete event.result.skill;
								}
								else event.finish();
								'step 2'
								game.delayx();
							},
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][3]||'')+'【'+get.translation(links[0][2])+'】的目标';
					}
				},
				subSkill:{
					used:{charlotte:true},
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						var event=_status.event;
						var nh=player.countCards('h');
						if(game.hasPlayer(function(current){
							return get.attitude(player,current)>0&&current.countCards('h')<nh;
						})){
							if(event.type=='dying'){
								if(event.filterCard({name:'tao'},player,event)){
									return 0.5;
								}
							}
							else{
								if(event.filterCard({name:'tao'},player,event)||event.filterCard({name:'shan'},player,event)){
									return 4;
								}
								if(event.filterCard({name:'sha'},player,event)){
									return 2.9;
								}
							}
						}
						return 0;
					},
					save:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(player.hasSkill('zhenshan_used')) return false;
						var nh=player.countCards('h');
						return game.hasPlayer(function(current){
							return current!=player&&current.countCards('h')<nh;
						});
					},
					result:{
						player:function(player){
							if(_status.event.type=='dying'){
								return get.attitude(player,_status.event.dying);
							}
							else{
								return 1;
							}
						}
					}
				}
			},
			//吴景
			twfenghan:{
				audio:2,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				usable:1,
				filter:function(event,player){
					return event.isFirstTarget&&event.targets.length>0&&(event.card.name=='sha'||get.type(event.card,false)=='trick'&&get.tag(event.card,'damage')>0);
				},
				content:function(){
					'step 0'
					var num=trigger.targets.length;
					player.chooseTarget([1,num],get.prompt('twfenghan'),'令至多'+get.cnNumber(num)+'名角色各摸一张牌').set('ai',function(target){
						return Math.sqrt(5-Math.min(4,target.countCards('h')))*get.attitude(_status.event.player,target)*(target.hasSkillTag('nogain')?0.1:1);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('twfenghan',targets);
						if(targets.length>1) game.asyncDraw(targets);
						else{
							targets[0].draw();
							event.finish();
						}
					}
					else{
						player.storage.counttrigger.twfenghan--;
						event.finish();
					}
					'step 2'
					game.delayx();
				},
			},
			twcongji:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:'loseAsyncAfter',
				},
				direct:true,
				filter:function(event,player){
					if(player==_status.currentPhase||event.type!='discard'||event.getlx===false||!game.hasPlayer((current)=>current!=player)) return false;
					var evt=event.getl(player);
					for(var i of evt.cards2){
						if(get.color(i,player)=='red'&&get.position(i,true)=='d') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var cards=[],cards2=trigger.getl(player).cards2;
					for(var i of cards2){
						if(get.color(i,player)=='red'&&get.position(i,true)=='d') cards.push(i);
					}
					player.chooseButton(['从击：选择任意张牌交给其他角色',cards],[1,cards.length]).set('goon',game.hasPlayer(function(current){
						return current!=player&&get.attitude(player,current)>0;
					})).set('ai',function(button){
						if(_status.event.goon) return get.value(button.link);
						return button.link.name=='du'?1:0;
					});
					'step 1'
					if(result.bool){
						event.cards=result.links;
						player.chooseTarget('选择一名角色获得以下牌：',get.translation(cards),true,lib.filter.notMe).set('ai',function(target){
							var player=_status.event.player,cards=_status.event.getParent().cards;
							if(cards[0].name=='du') return -get.attitude(player,target);
							var att=get.attitude(player,target);
							if(att<=0) return 0;
							if(target.hasSkillTag('nogain')) att/=10;
							if(target.hasJudge('lebu')) att/=4;
							return get.value(cards,target)*att;
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twcongji',target);
						target.gain(cards,'gain2');
					}
				},
			},
			//王粲
			twdianyi:{
				audio:2,
				trigger:{player:'phaseEnd'},
				forced:true,
				filter:function(event,player){
					if(!player.getHistory('sourceDamage').length) return player.countCards('h')!=4;
					return player.countCards('h')>0;
				},
				content:function(){
					var num=player.countCards('h');
					if(player.getHistory('sourceDamage').length) player.chooseToDiscard('h',true,num);
					else if(num>4) player.chooseToDiscard('h',true,num-4);
					else player.drawTo(4);
				},
			},
			twyingji:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					return player!=_status.currentPhase&&lib.inpile.includes(name)&&player.countCards('h')==0;
				},
				filter:function(event,player){
					if(player==_status.currentPhase||player.countCards('h')>0) return false;
					for(var i of lib.inpile){
						if(i=='wuxie') continue;
						var type=get.type(i);
						if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)) return true;
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
						var list=[];
						for(var i of lib.inpile){
							if(i=='wuxie') continue;
							var type=get.type(i);
							if(type=='basic'||type=='trick'){
								var card={name:i,isCard:true};
								if(event.filterCard(card,player,event)) list.push([type,'',i]);
								if(i=='sha'){
									for(var j of lib.inpile_nature){
										card.nature=j;
										if(event.filterCard(card,player,event)) list.push(['基本','','sha',j]);
									}
								}
							}
						}
						return ui.create.dialog('应机',[list,'vcard']);
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						var val=_status.event.getParent().type=='phase'?player.getUseValue(card):1;
						return val;
					},
					backup:function(links,player){
						return {
							viewAs:{
								name:links[0][2],
								nature:links[0][3],
								isCard:true,
							},
							filterCard:()=>false,
							selectCard:-1,
							precontent:function(){
								player.logSkill('twyingji');
								player.draw('nodelay');
								delete event.result.skill;
							},
						}
					},
					prompt:function(links){
						return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					fireAttack:true,
					respondShan:true,
					respondSha:true,
					skillTagFilter:function(player){
						if(player==_status.currentPhase||player.countCards('h')>0) return false;
					},
					order:10,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying)>0;
							return 1;
						},
					},
				},
				group:['twyingji_wuxie'],
			},
			twyingji_wuxie:{
				enable:'chooseToUse',
				viewAs:{
					name:'wuxie',
					isCard:true,
				},
				viewAsFilter:function(player){
					return player!=_status.currentPhase&&player.countCards('h')==0;
				},
				filterCard:()=>false,
				prompt:'视为使用【无懈可击】并摸一张牌',
				selectCard:[0,1],
				check:()=>1,
				precontent:function(){
					player.logSkill('twyingji');
					player.draw('nodelay');
					delete event.result.skill;
				},
				ai:{
					order:4,
				},
			},
			twshanghe:{
				trigger:{player:'dying'},
				limited:true,
				audio:2,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('he')>0;
					})
				},
				prompt:'是否发动【觞贺】？',
				skillAnimation:true,
				animationColor:'soil',
				logTarget:(event,player)=>game.filterPlayer((current)=>current!=player),
				content:function(){
					"step 0"
					player.awakenSkill('twshanghe');
					event.targets=game.filterPlayer((current)=>current!=player);
					event.num=0;
					event.jiu=false;
					"step 1"
					event.current=targets[num];
					if(!event.current.countCards('he')) event.goto(3);
					else event.current.chooseCard('交给'+get.translation(player)+'一张牌','he',true).set('ai',function(card){
						var evt=_status.event.getParent();
						return 100-get.value(card);
					});
					"step 2"
					if(result.bool&&result.cards&&result.cards.length){
						event.current.give(result.cards,player);
						if(!event.jiu&&get.name(result.cards[0],player)=='jiu') event.jiu=true;
					}
					"step 3"
					event.num++;
					if(event.num<targets.length) event.goto(1);
					else if(!event.jiu&&player.hp<1) player.recover(1-player.hp);
				},
			},
			//王昶
			twkaiji:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				content:function(){
					'step 0'
					var num=1+player.getStorage('twkaiji').length;
					player.chooseTarget([1,num],get.prompt('twkaiji'),'令至多'+get.cnNumber(num)+'名角色各摸一张牌').set('ai',function(target){
						return Math.sqrt(5-Math.min(4,target.countCards('h')))*get.attitude(_status.event.player,target)*(target.hasSkillTag('nogain')?0.1:1);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						event.targets=targets;
						player.logSkill('twkaiji',targets);
						if(targets.length==1) targets[0].draw();
						else game.asyncDraw(targets);
					}
					else event.finish();
					'step 2'
					if(targets.length>1) game.delayx();
					if(game.hasPlayer(function(current){
						return targets.includes(current)&&current.hasHistory('gain',function(evt){
							return evt.getParent(2)==event&&get.type(evt.cards[0],current)!='basic';
						})
					})) player.draw();
				},
				group:'twkaiji_count',
				subSkill:{
					count:{
						trigger:{global:'dying'},
						forced:true,
						firstDo:true,
						silent:true,
						popup:false,
						charlotte:true,
						filter:function(event,player){
							return !player.getStorage('twkaiji').includes(event.player);
						},
						content:function(){
							player.markAuto('twkaiji',[trigger.player]);
						},
					},
				},
			},
			twshepan:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				usable:1,
				direct:true,
				filter:function(event,player){
					return player!=event.player;
				},
				content:function(){
					'step 0'
					var target=trigger.player;
					event.target=target;
					var choiceList=[
						'摸一张牌',
						'将'+get.translation(target)+'区域内的一张牌置于牌堆顶',
					];
					var choices=['选项一'];
					if(target.countCards('hej')>0) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					choices.push('cancel2');
					player.chooseControl(choices).set('choiceList',choiceList).set('choice',function(){
						if(choices.length>2&&get.effect(target,{name:'guohe_copy'},player,player)>0) return 1;
						return 0;
					}())
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twshepan',target);
						if(result.index==1) player.choosePlayerCard(target,'hej',true);
						else{
							player.draw();
							event.goto(3);
						}
					}
					else{
						player.storage.counttrigger.twshepan--;
						event.finish();
					}
					'step 2'
					var card=result.cards[0];
					target.$throw(get.position(card)=='h'?1:card,1000);
					target.lose(card,ui.cardPile,'insert');
					'step 3'
					game.delayx();
					if(target.isIn()&&player.countCards('h')==target.countCards('h')){
						player.storage.counttrigger.twshepan--;
						player.chooseBool('是否令'+get.translation(trigger.card)+'对自己无效？').set('ai',function(){
							var evt=_status.event.getTrigger();
							return get.effect(evt.target,evt.card,evt.player,evt.target)<0;
						});
					}
					else event.finish();
					'step 4'
					if(result.bool) trigger.excluded.add(player);
				},
			},
			//曹肇
			twfuzuan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.getSkills(null,false,false).filter(function(i){
							var info=get.info(i);
							return info&&info.zhuanhuanji;
						}).length>0;
					});
				},
				filterTarget:function(card,player,target){
					return target.getSkills(null,false,false).filter(function(i){
						var info=get.info(i);
						return info&&info.zhuanhuanji;
					}).length>0;
				},
				content:function(){
					'step 0'
					var list=target.getSkills(null,false,false).filter(function(i){
						var info=get.info(i);
						return info&&info.zhuanhuanji;
					});
					if(list.length==1){
						event._result={control:list[0]};
					}
					else player.chooseControl(list).set('prompt','选择变更'+get.translation(target)+'一个技能的状态').set('choice',list.includes('twfeifu')?'twfeifu':0).set('ai',()=>_status.event.choice);
					'step 1'
					var skill=result.control;
					target.changeZhuanhuanji(skill);
					target.popup(skill,'wood');
					game.log(target,'的','#g【'+get.translation(skill)+'】','发生了状态变更');
					game.delayx();
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(!target.hasSkill('twfeifu')) return 0;
							return target.storage.twfeifu?-1:1;
						},
					},
				},
				group:'twfuzuan_damage',
				subSkill:{
					damage:{
						audio:'twfuzuan',
						trigger:{
							player:'damageEnd',
							source:'damageSource',
						},
						direct:true,
						filter:function(event,player){
							return game.hasPlayer(function(current){
								return current.getSkills(null,false,false).filter(function(i){
									var info=get.info(i);
									return info&&info.zhuanhuanji;
								}).length>0;
							});
						},
						content:function(){
							'step 0'
							player.chooseTarget(lib.skill.twfuzuan.filterTarget,get.prompt('twfuzuan'),'变更一名角色的一个转换技的状态').set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,'twfuzuan',player,player);
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('twfuzuan',target);
								var next=game.createEvent('twfuzuan');
								next.player=player;
								next.target=target;
								next.setContent(lib.skill.twfuzuan.content);
							}
						},
					},
				},
			},
			twchongqi:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				logTarget:()=>game.filterPlayer().sortBySeat(),
				content:function(){
					'step 0'
					game.countPlayer(function(current){
						current.addSkill('twfeifu');
					});
					game.log(player,'令所有其他角色获得了技能','#g【非服】')
					game.delayx();
					'step 1'
					player.chooseTarget('是否减1点体力上限，并令一名其他角色获得技能【复纂】？',lib.filter.notMe).set('ai',function(target){
						var player=_status.event.player;
						if(player.hasUnknown()&&!target.isZhu) return 0;
						if(player.getEnemies().includes(target)) return 0;
						return get.attitude(player,target);
					});
					'step 2'
					if(result.bool){
						player.loseMaxHp();
						var target=result.targets[0];
						player.line(target,'fire');
						target.addSkillLog('twfuzuan');
						game.delayx();
					}
				},
				derivation:'twfeifu',
			},
			twfeifu:{
				audio:2,
				trigger:{
					player:'useCardToPlayered',
					target:'useCardToTargeted',
				},
				zhuanhuanji:true,
				forced:true,
				mark:true,
				marktext:'☯',
				intro:{
					content:function(storage,player){
						return (storage?'当你使用【杀】指定唯一目标后':'当你成为【杀】的唯一目标后')+'目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。';
					},
				},
				filter:function(event,player,name){
					return event.card.name=='sha'&&event.targets.length==1
						&&event.player.isIn()&&event.target.countCards('he')>0&&
						(name=='useCardToPlayered')==Boolean(player.storage.twfeifu);
				},
				logTarget:function(event,player){
					return player.storage.twfeifu?event.target:event.player;
				},
				content:function(){
					'step 0'
					player.changeZhuanhuanji('twfeifu');
					trigger.target.chooseCard('he',true,'非服：交给'+get.translation(trigger.player)+'一张牌','若选择装备牌，则其可以使用此牌');
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						trigger.target.give(card,trigger.player);
					}
					else event.finish();
					'step 2'
					var target=trigger.player;
					if(target.getCards('h').includes(card)&&get.type(card,target)=='equip'&&target.hasUseTarget(card)) target.chooseUseTarget(card,'nopopup');
				},
			},
			//Powered by @污言噫对
			twjingce:{
				marktext:"策",
				intro:{
					name:"策",
					content:"mark",
				},
				audio:2,
				trigger:{player:"useCardAfter"},
				filter:function(event,player){
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var history=player.getHistory('useCard',function(evtx){
						return evtx.getParent('phaseUse')==evt;
					});
					return history&&history.indexOf(event)==player.hp-1;
				},
				frequent:true,
				content:function(){
					'step 0'
					player.draw(2);
					'step 1'
					if(player.getHistory('sourceDamage').length||player.getHistory('gain',function(evt){
						return evt.getParent('phaseUse')==trigger.getParent('phaseUse')&&evt.getParent().name=='draw';
					}).length>1) player.addMark('twjingce',1);
				},
			},
			yuzhang:{
				audio:2,
				trigger:{
					player:"damageEnd",
				},
				filter:function(event,player){
					return event.source&&player.hasMark('twjingce');
				},
				direct:true,
				content:function(){
					'step 0'
					var choiceList=['令'+get.translation(trigger.source)+'本回合不能再使用或打出牌'];
					if (trigger.source.countCards('he')) choiceList.push('令'+get.translation(trigger.source)+'弃置两张牌');
					player.chooseControl('cancel2').set('prompt2',get.prompt2('yuzhang')).set('choiceList',choiceList).set('ai',function(){
						var player=_status.event.player,source=_status.event.source;
						if(get.attitude(player,source)>=0) return 'cancel2';
						if(source.hasSkillTag('noh')||source.hasSkillTag('noe')||source.countCards('h')>=4) return 0;
						if(source.hp>1&&source.countCards('he')>1) return 1;
						return [0,1].randomGet();
					}).set('source',trigger.source);
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('yuzhang',trigger.source);
						player.removeMark('twjingce',1);
						if(result.index==0) trigger.source.addTempSkill('yuzhang_dontuse');
						else trigger.source.chooseToDiscard('he',2,true);
					}
				},
				group:"yuzhang_skip",
				subSkill:{
					skip:{
						audio:'yuzhang',
						trigger:{
							player:['phaseZhunbeiBefore',"phaseJudgeBefore","phaseDrawBefore","phaseUseBefore","phaseDiscardBefore",'phaseJieshuBefore'],
						},
						filter:function(event,player){
							return player.hasMark('twjingce');
						},
						prompt2:function(event,player){
							var str='弃置一枚“策”并跳过';
							var list=lib.skill.yuzhang.subSkill.skip.trigger.player.slice();
							list=list.map(i=>i.slice(0,-6));
							str+=['准备','判定','摸牌','出牌','弃牌','结束'][list.indexOf(event.name)];
							str+='阶段';
							return str;
						},
						check:function(event,player){
							if(event.name=='phaseDiscard') return player.needsToDiscard();
							if(event.name=='phaseJudge') return player.countCards('j');
							return false;
						},
						content:function(){
							player.removeMark('twjingce',1);
							trigger.cancel();
						},
					},
					dontuse:{
						charlotte:true,
						mark:true,
						mod:{
							cardEnabled2:function(card){
								return false;
							},
						},
						intro:{
							content:"不能使用或打出牌",
						},
					},
				},
			},
			twlihuo:{
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(event.card.name=='sha'&&!game.hasNature(event.card)) return true;
					return false;
				},
				audio:'lihuo',
				prompt2:function(event){
					return '将'+get.translation(event.card)+'改为火属性';
				},
				audioname:['re_chengpu'],
				check:function(event,player){
					return game.hasPlayer(function(current){
						return !event.targets.includes(current)&&player.canUse(event.card,current)&&get.effect(current,{name:'sha',nature:'fire',cards:event.cards.slice(0)},player,player)>0;
					});
				},
				content:function(){
					game.setNature(trigger.card,'fire');
					trigger.card.twlihuo_buffed=true;
				},
				group:['twlihuo2','twlihuo3'],
				ai:{
					fireAttack:true,
				},
			},
			twlihuo2:{
				trigger:{player:'useCard2'},
				filter:function(event,player){
					if(event.card.name!='sha'||!game.hasNature(event.card,'fire')) return false;
					return game.hasPlayer(function(current){
						return !event.targets.includes(current)&&player.canUse(event.card,current);
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twlihuo'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
						return !_status.event.sourcex.includes(target)&&player.canUse(_status.event.card,target);
					}).set('sourcex',trigger.targets).set('card',trigger.card).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,_status.event.card,player,player);
					});
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('twlihuo',event.target);
					trigger.targets.push(event.target);
				},
			},
			twlihuo3:{
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					return event.card.twlihuo_buffed=true&&player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card&&evt._dyinged;
					}).length>0;
				},
				forced:true,
				audio:'lihuo',
				audioname:['re_chengpu'],
				content:function(){
					player.loseHp();
				}
			},
			twchunlao:{
				audio:'chunlao',
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('hej')>0;
					})&&!game.hasPlayer(function(current){
						return current.getExpansions('twchunlao').length>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('twchunlao'),'将一名角色区域内的一张牌作为“醇”置于其武将牌上',function(card,player,target){
						return target.countCards('hej')>0;
					}).set('ai',function(target){
						return (get.attitude(_status.event.player,target))*(player==target?1:2);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('twchunlao',target);
						player.choosePlayerCard(target,'hej',true);
					}
					else event.finish();
					'step 2'
					if(result.bool){
						target.addToExpansion(result.cards,target,'give').gaintag.add('twchunlao');
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				group:['twchunlao_sha','twchunlao_dying'],
				subSkill:{
					sha:{
						trigger:{global:'useCard'},
						direct:true,
						filter:function(event,player){
							return event.card.name=='sha'&&event.player.countCards('he')>0&&event.player.getExpansions('twchunlao').length>0;
						},
						content:function(){
							'step 0'
							event.target=trigger.player;
							event.target.chooseCard('he','醇醪：是否交给'+get.translation(player)+'一张牌，令'+get.translation(trigger.card)+'的伤害值基数+1？').set('ai',function(card){
								if(!_status.event.goon) return 3.5-get.value(card);
								return 7-get.value(card);
							}).set('goon',function(){
								if(get.attitude(target,player)<0) return false;
								var d1=true;
								if(trigger.player.hasSkill('jueqing')||trigger.player.hasSkill('gangzhi')) d1=false;
								for(var target of trigger.targets){
									if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
										return i.hasGaintag('sha_notshan');
									}))||trigger.player.hasSkillTag('directHit_ai',true,{
										target:target,
										card:trigger.card,
									},true)){
										if(!target.hasSkill('gangzhi')) d1=false;
										if(!target.hasSkillTag('filterDamage',null,{
											player:trigger.player,
											card:trigger.card,
										})&&get.attitude(player,target)<0) return true;
									}
								}
								return d1;
							}());
							if(!event.target.isUnderControl(true)&&!event.target.isOnline()) game.delayx();
							'step 1'
							if(result.bool){
								target.logSkill('twchunlao',player);
								if(!target.hasSkill('twchunlao')) game.trySkillAudio('twchunlao',player);
								if(player!=target) target.give(result.cards,player,'giveAuto');
								trigger.baseDamage++;
							}
						},
					},
					dying:{
						audio:'chunlao',
						trigger:{global:'dying'},
						logTarget:'player',
						filter:function(event,player){
							return event.player.getExpansions('twchunlao').length>0;
						},
						prompt2:(event,player)=>('移去'+get.translation(event.player)+'武将牌上的“醇”并摸一张牌，然后令其回复1点体力'),
						check:function(event,player){
							return get.attitude(player,event.player)>0;
						},
						content:function(){
							var target=trigger.player,cards=target.getExpansions('twchunlao');
							if(cards.length) target.loseToDiscardpile(cards);
							player.draw();
							target.recover();
						},
					},
				},
			},
			//张曼成
			twfengji:{
				audio:2,
				mahouSkill:true,
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return !player.getExpansions('twfengji').length&&!player.hasSkill('twfengji_mahou')&&player.countCards('he');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt2('twfengji')).set('ai',function(card){
						var name=card.name,num=0;
						for(var i=0;i<ui.cardPile.childNodes.length;i++){
							if(ui.cardPile.childNodes[i].name==name) num++;
						}
						if(num<2) return false;
						return 8-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('twfengji');
						player.addToExpansion(result.cards,player,'giveAuto').gaintag.add('twfengji');
						player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
							var player=_status.event.player;
							var safe=Math.min(player.getHandcardLimit(),player.countCards('h','shan'));
							if(safe<Math.min(3,game.countPlayer())){
								var next=player.next;
								while(next!=player&&get.attitude(next,player)>0){
									safe++;
									next=next.next;
								}
							}
							return Math.max(2,Math.min(safe,3,game.countPlayer()))-1;
						});
					}
					else event.finish();
					'step 2'
					player.storage.twfengji_mahou=[result.index+1,result.index+1];
					player.addTempSkill('twfengji_mahou',{player:'die'});
				},
				marktext:'示',
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				subSkill:{
					mahou:{
						trigger:{global:'phaseEnd'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							var list=player.storage.twfengji_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的“蜂集”魔法生效');
								player.logSkill('twfengji');
								var cards=player.getExpansions('twfengji');
								if(cards.length){
									var cards2=[],num=list[0];
									for(var card of cards){
										for(var i=0;i<num;i++){
											var card2=get.cardPile2(function(cardx){
												return cardx.name==card.name&&!cards2.includes(cardx);
											});
											if(card2) cards2.push(card2);
											else break;
										}
									}
									game.delayx();
									if(cards2.length) player.gain(cards2,'gain2');
									player.loseToDiscardpile(cards);
								}
								player.removeSkill('twfengji_mahou');
							}
							else{
								game.log(player,'的“蜂集”魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twfengji_mahou');
							}
						},
						ai:{threaten:2.5},
						mark:true,
						onremove:true,
						//该图标为灵魂宝石
						marktext:'♗',
						intro:{
							name:'施法：蜂集',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage){
									return '经过'+storage[1]+'个“回合结束时”后，若有“示”，则从牌堆中获得'+storage[0]+'张和“示”名称相同的牌';
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			twyiju:{
				audio:2,
				locked:false,
				mod:{
					attackRangeBase:function(player,num){
						if(player.getExpansions('twfengji').length) return player.hp;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&player.getExpansions('twfengji').length) return num-1+player.hp;
					},
				},
				trigger:{player:'damageBegin3'},
				filter:function(event,player){
					return player.getExpansions('twfengji').length>0;
				},
				forced:true,
				content:function(){
					trigger.num++;
					var cards=player.getExpansions('twfengji');
					if(cards.length) player.loseToDiscardpile(cards);
				},
				ai:{
					halfneg:true,
					combo:'twfengji',
				},
			},
			twbudao:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				derivation:['twzhouhu','twharvestinori','twzuhuo','twzhouzu','twhuangjin','twguimen','twdidao'],
				limited:true,
				skillAnimation:true,
				animationColor:'metal',
				check:function(event,player){
					return !player.hasUnknown()||!player.hasFriend();
				},
				skillValue:{
					twzhouhu:(target)=>Math.random()<0.6?0.1:1,
					twzuhuo:(target,player)=>get.damageEffect(target,player,player)>0?0.1:1,
					twharvestinori:(target)=>0.9+Math.random()/5,
					twhuangjin:(target)=>Math.random()/5,
					twguimen:(target)=>Math.sqrt(Math.min(3,target.countCards('he',{suit:'spade'})))*0.09,
					twzhouzu:(target)=>{
						var rand=Math.random();
						if(rand<0.8) return 1-Math.sqrt(0.8-rand);
						return 1;
					},
					twdidao:(target,player)=>{
						if([target,player].some(current=>current.getSkills().some(skill=>{
							var info=get.info(skill);
							if(!info||!info.ai||!info.ai.rejudge) return false;
							return true;
						}))){
							return 0.05;
						}
						return 0.85+Math.random()/5;
					}
				},
				content:function(){
					'step 0'
					player.awakenSkill('twbudao');
					player.loseMaxHp();
					player.recover();
					var skills=lib.skill.twbudao.derivation,map=lib.skill.twbudao.skillValue;
					skills=skills.randomGets(3);
					var target=game.filterPlayer().sort((a,b)=>get.attitude(player,b)-get.attitude(player,a))[0];
					if(player.identity=='nei'||get.attitude(player,target)<6) target=player;
					player.chooseControl(skills).set('choiceList',skills.map(function(i){
						return '<div class="skill">【'+get.translation(lib.translate[i+'_ab']||get.translation(i).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(i,player)+'</div>';
					})).set('displayIndex',false).set('prompt','布道：选择获得一个技能').set('ai',()=>{
						return _status.event.choice;
					}).set('choice',skills.sort((a,b)=>(map[b](target,player)||0.5)-(map[a](target,player)||0.5))[0]);
					'step 1'
					var skill=result.control;
					player.addSkillLog(skill);
					event.twbudao_skill=skill;
					player.chooseTarget(lib.filter.notMe,'是否令一名其他角色也获得【'+get.translation(skill)+'】？').set('ai',function(target){
						var player=_status.event.player;
						if(player.identity=='nei') return 0;
						return get.attitude(player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						target.addSkillLog(event.twbudao_skill);
						var cards=target.getCards('he');
						if(!cards.length) event.finish();
						else if(cards.length==1) event._result={bool:true,cards:cards};
						else target.chooseCard('he',true,'交给'+get.translation(player)+'一张牌作为学费');
					}
					else event.finish();
					'step 3'
					if(result.bool) target.give(result.cards,player);
				},
			},
			twzhouhu:{
				audio:2,
				mahouSkill:true,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.hasSkill('twzhouhu_mahou')&&player.countCards('h',lib.skill.twzhouhu.filterCard)>0;
				},
				filterCard:{color:'red'},
				check:function(card){
					if(_status.event.player.isHealthy()) return 0;
					return 7-get.value(card);
				},
				content:function(){
					'step 0'
					player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
						var player=_status.event.player;
						var safe=1;
						if(safe<Math.min(3,game.countPlayer(),player.getDamagedHp())){
							var next=player.next;
							while(next!=player&&get.attitude(next,player)>0){
								safe++;
								next=next.next;
							}
						}
						return Math.max(1,Math.min(safe,3,game.countPlayer(),player.getDamagedHp()))-1;
					});
					'step 1'
					player.storage.twzhouhu_mahou=[result.index+1,result.index+1];
					player.addTempSkill('twzhouhu_mahou',{player:'die'});
				},
				ai:{
					order:2,
					result:{
						player:1,
					},
				},
				subSkill:{
					mahou:{
						trigger:{global:'phaseEnd'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							var list=player.storage.twzhouhu_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的“咒护”魔法生效');
								player.logSkill('twzhouhu');
								var num=list[0];
								player.recover(num);
								player.removeSkill('twzhouhu_mahou');
							}
							else{
								game.log(player,'的“咒护”魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twzhouhu_mahou');
							}
						},
						mark:true,
						onremove:true,
						marktext:'♗',
						intro:{
							name:'施法：咒护',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage){
									return '经过'+storage[1]+'个“回合结束时”后，回复'+storage[0]+'点体力';
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			twharvestinori:{
				audio:2,
				mahouSkill:true,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.hasSkill('twharvestinori_mahou')&&player.countCards('h',lib.skill.twharvestinori.filterCard)>0;
				},
				filterCard:{color:'black'},
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
						var player=_status.event.player;
						var safe=player.hp;
						if(safe<Math.min(3,game.countPlayer())){
							var next=player.next;
							while(next!=player&&get.attitude(next,player)>0){
								safe++;
								next=next.next;
							}
						}
						return Math.max(1,Math.min(safe,3,game.countPlayer()))-1;
					});
					'step 1'
					player.storage.twharvestinori_mahou=[result.index+1,result.index+1];
					player.addTempSkill('twharvestinori_mahou',{player:'die'});
				},
				ai:{
					order:8,
					result:{
						player:1,
					},
				},
				subSkill:{
					mahou:{
						trigger:{global:'phaseEnd'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							var list=player.storage.twharvestinori_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的“丰祈”魔法生效');
								player.logSkill('twharvestinori');
								var num=list[0]*2;
								player.draw(num);
								player.removeSkill('twharvestinori_mahou');
							}
							else{
								game.log(player,'的“丰祈”魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twharvestinori_mahou');
							}
						},
						mark:true,
						onremove:true,
						marktext:'♗',
						intro:{
							name:'施法：丰祈',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage){
									return '经过'+storage[1]+'个“回合结束时”后，摸'+storage[0]*2+'张牌';
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			twzuhuo:{
				audio:2,
				mahouSkill:true,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return !player.hasSkill('twzuhuo_mahou')&&player.countCards('he',lib.skill.twzuhuo.filterCard)>0;
				},
				filterCard:function(card){
					return get.type(card)!='basic';
				},
				position:'he',
				check:function(card){
					return 7-get.value(card);
				},
				content:function(){
					'step 0'
					player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
						var player=_status.event.player;
						var safe=Math.min(player.getHandcardLimit(),player.countCards('h','shan'));
						if(safe<Math.min(3,game.countPlayer())){
							var next=player.next;
							while(next!=player&&get.attitude(next,player)>0){
								safe++;
								next=next.next;
							}
						}
						return Math.max(2,Math.min(safe,3,game.countPlayer()))-1;
					});
					'step 1'
					player.storage.twzuhuo_mahou=[result.index+1,result.index+1];
					player.addTempSkill('twzuhuo_mahou',{player:'die'});
				},
				ai:{
					order:2,
					result:{
						player:1,
					},
				},
				subSkill:{
					mahou:{
						trigger:{global:'phaseEnd'},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							var list=player.storage.twzuhuo_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的“阻祸”魔法生效');
								player.logSkill('twzuhuo');
								var num=list[0];
								player.addSkill('twzuhuo_effect');
								player.addMark('twzuhuo_effect',num,false);
								player.removeSkill('twzuhuo_mahou');
							}
							else{
								game.log(player,'的“阻祸”魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twzuhuo_mahou');
							}
						},
						mark:true,
						onremove:true,
						marktext:'♗',
						intro:{
							name:'施法：阻祸',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage){
									return '经过'+storage[1]+'个“回合结束时”后，获得'+storage[0]+'层“防止一次伤害”的效果';
								}
								return '未指定施法效果';
							},
						},
					},
					effect:{
						charlotte:true,
						onremove:true,
						trigger:{player:'damageBegin2'},
						forced:true,
						filter:function(event,player){
							return player.hasMark('twzuhuo_effect');
						},
						content:function(){
							trigger.cancel();
							player.removeMark('twzuhuo_effect',1,false);
							if(!player.countMark('twzuhuo_effect')) player.removeSkill('twzuhuo_effect');
						},
						marktext:'阻︎',
						intro:{
							onremove:true,
							content:'防止接下来的#次伤害',
						},
					},
				},
			},
			twzhouzu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				mahouSkill:true,
				filter:function(event,player){
					return !player.hasSkill('twzhouzu_mahou');
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				line:false,
				delay:false,
				content:function(){
					'step 0'
					player.chooseControl('1回合','2回合','3回合').set('prompt','请选择施法时长').set('ai',function(){
						var player=_status.event.player;
						var safe=1;
						if(safe<Math.min(3,game.countPlayer())){
							var next=player.next;
							while(next!=player&&get.attitude(next,player)>0){
								safe++;
								next=next.next;
							}
						}
						return Math.max(2,Math.min(safe,3,game.countPlayer()))-1;
					});
					'step 1'
					player.storage.twzhouzu_mahou=[result.index+1,result.index+1,target];
					player.addTempSkill('twzhouzu_mahou',{player:'die'});
				},
				subSkill:{
					mahou:{
						trigger:{
							global:'phaseEnd',
						},
						forced:true,
						popup:false,
						charlotte:true,
						content:function(){
							var list=player.storage.twzhouzu_mahou;
							list[1]--;
							if(list[1]==0){
								game.log(player,'的“咒诅”魔法生效');
								var num=list[0],target=list[2];
								player.logSkill('twzhouzu',target);
								target.chooseToDiscard(get.translation(player)+'对你的“咒诅”魔法生效，请弃置'+get.cnNumber(list[0])+'张牌',list[0],true);
								target.damage('thunder');
								player.removeSkill('twzhouzu_mahou');
							}
							else{
								game.log(player,'的“咒阻”魔法剩余','#g'+(list[1])+'回合');
								player.markSkill('twzhouzu_mahou');
							}
						},
						mark:true,
						onremove:true,
						marktext:'♗',
						intro:{
							name:'施法：咒诅',
							markcount:function(storage){
								if(storage) return storage[1];
								return 0;
							},
							content:function(storage){
								if(storage){
									return '经过'+storage[1]+'个“回合结束时”后，你令'+get.translation(storage[2])+'弃置'+get.cnNumber(storage[0])+'张牌，然后你对其造成1点雷电伤害';
								}
								return '未指定施法效果';
							},
						}
					},
				},
				ai:{
					order:1,
					result:{
						target:-5,
					},
				}
			},
			twhuangjin:{
				audio:2,
				trigger:{target:'useCardToTarget'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					return event.card.name=='sha'&&typeof get.number(event.card)=='number';
				},
				content:function(){
					'step 0'
					player.judge(function(result){
						var evt=_status.event.getTrigger();
						if(Math.abs(get.number(result)-get.number(evt.card))<=1) return 2;
						return -1;
					}).judge2=function(result){
						return result.bool;
					};
					'step 1'
					if(result.bool){
						trigger.getParent().excluded.add(player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current,isLink){
							if(card.name=='sha'&&!isLink) return 0.8;
						},
					},
				},
			},
			twguimen:{
				audio:2,
				trigger:{
					player:'loseAfter',
					global:'loseAsyncAfter',
				},
				direct:true,
				filter:function(event,player){
					if(event.type!='discard') return false;
					var evt=event.getl(player);
					for(var card of evt.cards2){
						if(get.suit(card,player)=='spade') return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					'step 0'
					var cards=[];
					var evt=trigger.getl(player);
					for(var card of evt.cards2){
						if(get.suit(card,player)=='spade') cards.push(card);
					}
					if(!cards.length) event.finish();
					else event.cards=cards;
					'step 1'
					if(event.cards.length==1){
						event._result={bool:true,links:event.cards};
					}
					else{
						player.chooseButton(['鬼门：选择一张♠牌，为其进行判定',event.cards],true);
					}
					'step 2'
					if(result.bool&&result.links){
						event.judgingSpade=result.links[0];
						event.cards.remove(event.judgingSpade);
						game.log(player,'选择','#y'+get.translation(event.judgingSpade),'进行判定');
						player.judge(function(result){
							var card=_status.event.getParent().judgingSpade;
							if(Math.abs(get.number(result)-get.number(card))<=1) return 4;
							return -1;
						}).judge2=function(result){
							return result.bool;
						};
					} else event.finish();
					'step 3'
					if(result.bool&&game.hasPlayer(current=>current!=player)){
						player.chooseTarget('选择一名其他角色，对其造成2点雷电伤害',lib.filter.notMe,true).set('ai',target=>get.damageEffect(target,player,player,'thunder'));
					}
					'step 4'
					if(result.bool){
						player.line(result.targets[0],'thunder');
						result.targets[0].damage(2,'thunder');
					}
					if(event.cards.length) event.goto(1);
				}
			},
			twdidao:{
				audio:2,
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('hes');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为' +
						get.translation(trigger.player.judging[0])+'，'+get.prompt('twdidao'),'hes',function(card){
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
							if(attitude==0||result==0){
								if(trigger.player!=player) return 0;
								var checkx=get.color(card,player)==get.color(judging);
								if(checkx>0) return checkx;
								return 0;
							}
							return result*(attitude>0?1:-1);
						}).set('judging',trigger.player.judging[0]);
					'step 1'
					if(result.bool){
						player.respond(result.cards,'highlight','twdidao','noOrdering');
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						var card=result.cards[0];
						if(get.color(card,player)==get.color(trigger.player.judging[0])) player.draw('nodelay');
						trigger.player.judging[0]=result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
					}
					'step 3'
					game.delay(2);
				},
				ai:{
					rejudge:true,
					tag:{
						rejudge:1
					}
				}
			},
			//群曹操
			twlingfa:{
				audio:2,
				trigger:{global:'roundStart'},
				direct:true,
				content:function(){
					'step 0'
					if(game.roundNumber<3||!player.hasSkill('twlingfa')){
						var str;
						switch(game.roundNumber){
							case 1:str='获得如下效果直到本轮结束：其他角色使用【杀】时，若其有牌，则其需弃置一张牌，否则受到你造成的1点伤害。';break;
							case 2:str='获得如下效果直到本轮结束：其他角色使用【桃】结算结束后，若其有牌，则其需交给你一张牌，否则受到你造成的1点伤害。';break;
							default:str='失去【令法】并获得【治暗】';break;
						}
						player.chooseBool(get.prompt('twlingfa'),str);
					}
					else event._result={bool:true};
					'step 1'
					if(result.bool){
						switch(game.roundNumber){
							case 1:
								player.logSkill('twlingfa',game.filterPlayer((current)=>current!=player).sortBySeat());
								player.addTempSkill('twlingfa_sha','roundStart');
								break;
							case 2:
								player.logSkill('twlingfa',game.filterPlayer((current)=>current!=player).sortBySeat());
								player.addTempSkill('twlingfa_tao','roundStart');
								break;
							default:
								player.logSkill('twlingfa');
								player.removeSkill('twlingfa');
								game.log(player,'失去了技能','#g【令法】');
								player.addSkillLog('twzhian');
								break;
						}
					}
				},
				subSkill:{
					sha:{
						audio:'twlingfa',
						trigger:{global:'useCard'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player!=event.player&&event.card.name=='sha'&&event.player.countCards('he')>0;
						},
						logTarget:'player',
						content:function(){
							'step 0'
							game.delayx();
							trigger.player.chooseToDiscard('he','令法：弃置一张牌，或受到来自'+get.translation(player)+'的1点伤害').set('goon',get.damageEffect(trigger.player,player,trigger.player)<0).set('ai',function(card){
								if(!_status.event.goon) return 0;
								return 8-get.value(card);
							});
							'step 1'
							if(!result.bool){
								trigger.player.damage();
							}
						},
						mark:true,
						marktext:'<span style="text-decoration: line-through;">杀</span>',
						intro:{content:'其他角色使用【杀】时，若其有牌，则其需弃置一张牌，否则受到你造成的1点伤害。'},
					},
					tao:{
						audio:'twlingfa',
						trigger:{global:'useCard'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return player!=event.player&&event.card.name=='tao'&&event.player.countCards('he')>0;
						},
						logTarget:'player',
						content:function(){
							'step 0'
							game.delayx();
							trigger.player.chooseCard('he','令法：交给'+get.translation(player)+'一张牌，否则受到来自其的1点伤害').set('goon',get.damageEffect(trigger.player,player,trigger.player)<0).set('ai',function(card){
								if(!_status.event.goon) return 0;
								return 8-get.value(card);
							});
							'step 1'
							if(!result.bool){
								trigger.player.damage();
							}
							else trigger.player.give(result.cards,player);
						},
						mark:true,
						marktext:'<span style="text-decoration: line-through;">桃</span>',
						intro:{content:'其他角色使用【桃】结算结束后，若其有牌，则其需交给你一张牌，否则受到你造成的1点伤害。'},
					},
				},
				derivation:'twzhian',
			},
			twzhian:{
				audio:2,
				init:function(player){
					game.addGlobalSkill('twzhian_ai');
				},
				onremove:function(player){
					if(!game.hasPlayer((current)=>current.hasSkill('twzhian'),true)) game.removeGlobalSkill('twzhian_ai');
				},
				usable:1,
				trigger:{global:'useCardAfter'},
				direct:true,
				filter:function(event,player){
					var type=get.type(event.card);
					if(type!='delay'&&type!='equip') return false;
					if(event.cards.length!=1) return false;
					var position=get.position(event.cards[0]);
					if(position=='e'||position=='j') return true;
					return event.player.isIn();
				},
				content:function(){
					'step 0'
					var str=get.translation(trigger.cards[0]),owner=get.owner(trigger.cards[0]);
					var choiceList=[
						'弃置'+(owner?(get.translation(owner)+'区域内的'):'')+str,
						'弃置一张手牌并获得'+str,
						'对'+get.translation(trigger.player)+'造成1点伤害',
					];
					var choices=[];
					if(owner&&lib.filter.canBeDiscarded(card,player,owner)) choices.push('选项一');
					else choiceList[0]='<span style="opacity:0.5">'+choiceList[0]+'</span>';
					if(owner&&player.hasCard(function(card){
						return lib.filter.cardDiscardable(card,player,'twzhian');
					},'h')&&lib.filter.canBeGained(card,player,owner)) choices.push('选项二');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					if(trigger.player.isIn()) choices.push('选项三');
					else choiceList[2]='<span style="opacity:0.5">'+choiceList[2]+'</span>';
					player.chooseControl(choices,'cancel2').set('choiceList',choiceList).set('prompt',get.prompt('twzhian')).set('ai',function(){
						var player=_status.event.player,choices=_status.event.controls.slice(0);
						var card=_status.event.getTrigger().cards[0],owner=get.owner(card);
						var getEffect=function(choice){
							if(choice=='cancel2') return 0.1;
							if(choice=='选项三'){
								return get.damageEffect(_status.event.getTrigger().player,player,player);
							}
							var result;
							if(get.position(card)=='j'){
								result=-get.effect(player,{
									name:card.viewAs||card.name,
									cards:[card],
								},player,player)*get.sgn(get.attitude(player,owner));
							}
							else result=-(get.value(card,owner)-0.01)*get.sgn(get.attitude(player,owner));
							if(choice=='选项一') return result;
							if(player.hasCard(function(cardx){
								return lib.filter.cardDiscardable(cardx,player,'twzhian')&&get.value(cardx,player)<get.value(card,player);
							},'h')) return result*1.2;
							return 0;
						}
						choices.sort(function(a,b){
							return getEffect(b)-getEffect(a);
						});
						return choices[0];
					});
					'step 1'
					if(result.control!='cancel2'){
						var card=trigger.cards[0],owner=get.owner(card);
						switch(result.control){
							case '选项一':
								player.logSkill('twzhian',owner);
								owner.discard(card,'notBySelf');
								event.finish();
								break;
							case '选项二':
								player.chooseToDiscard('h',true).logSkill=['twzhian',owner];
								event.target=owner;
								break;
							case '选项三':
								player.logSkill('twzhian',trigger.player);
								trigger.player.damage();
								event.finish();
								break;
						}
					}
					else player.storage.counttrigger.twzhian--;
					'step 2'
					if(result.bool&&target.getCards('ej').includes(trigger.cards[0])) player.gain(trigger.cards,target,'give','bySelf');
				},
				subSkill:{
					ai:{
						trigger:{player:'dieAfter'},
						filter:function(event,player){
							return !game.hasPlayer((current)=>current.hasSkill('twzhian'),true);
						},
						silent:true,
						forceDie:true,
						content:function(){
							game.removeGlobalSkill('twzhian_ai');
						},
						ai:{
							effect:{
								player:function(card,player,target){
									if(get.type(card)!=='delay'&&get.type(card)!=='equip') return 1;
									let za=game.findPlayer((cur)=>cur.hasSkill('twzhian')&&(!cur.storage.counttrigger||!cur.storage.counttrigger.twzhian)&&get.attitude(player,cur)<=0);
									if(za) return [0.5,-0.8];
								}
							}
						}
					}
				}
			},
			twyujue:{
				audio:2,
				global:'twyujue_give',
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				direct:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					var cards=event.getg(player);
					if(!cards.length) return false;
					return game.hasPlayer(function(current){
						if(current==player) return false;
						var evt=event.getl(current);
						if(!evt||!evt.cards2||!evt.cards2.filter((card)=>cards.includes(card)).length) return false;
						return (!current.hasSkill('twyujue_effect0'))||(!current.hasSkill('twyujue_effect1'));
					})
				},
				content:function(){
					'step 0'
					var cards=trigger.getg(player);
					var list=game.filterPlayer(function(current){
						if(current==player) return false;
						var evt=trigger.getl(current);
						if(!evt||!evt.cards2||!evt.cards2.filter((card)=>cards.includes(card)).length) return false;
						return (!current.hasSkill('twyujue_effect0'))||(!current.hasSkill('twyujue_effect1'));
					}).sortBySeat();
					event.targets=list;
					'step 1'
					var target=event.targets.shift();
					if(target.isIn()){
						event.target=target;
						var num=2;
						if(target.hasSkill('twyujue_effect0')) num--;
						if(target.hasSkill('twyujue_effect1')) num--;
						var cards=trigger.getg(player);
						num=Math.min(num,trigger.getl(target).cards2.filter(i=>cards.includes(i)).length);
						if(num>0) event.count=num;
						else if(targets.length>0) event.redo();
						else event.finish();
					}
					else if(targets.length>0) event.redo();
					else event.finish();
					'step 2'
					event.count--;
					player.chooseBool(get.prompt('twyujue',target),'可令其选择本回合内未选择过的一项：⒈弃置攻击范围内一名角色的一张牌。⒉下一次使用牌时，从牌堆中获得一张同类别的牌。').set('ai',function(){
						var evt=_status.event.getParent();
						return get.attitude(evt.player,evt.target)>0;
					});
					'step 3'
					if(result.bool){
						player.logSkill('twyujue',target);
						var list=[0,1];
						if(target.hasSkill('twyujue_effect0')) list.remove(0);
						if(target.hasSkill('twyujue_effect1')) list.remove(1);
						if(!list.length) event.goto(6);
						else if(list.length==1) event._result={index:list[0]};
						else target.chooseControl().set('choiceList',['弃置攻击范围内一名角色的一张牌','下一次使用牌时，从牌堆中获得一张同类别的牌']).set('ai',function(){
							var player=_status.event.player;
							if(game.hasPlayer(function(current){
								return player.inRange(current)&&current.countDiscardableCards(player,'he')>0&&get.effect(current,{name:'guohe_copy2'},player,player)>0;
							})) return 0;
							return 1;
						});
					}
					else event.goto(6);
					'step 4'
					target.addTempSkill('twyujue_effect'+result.index);
					if(result.index==0){
						if(game.hasPlayer(function(current){
							return target.inRange(current)&&current.countDiscardableCards(target,'he')>0;
						})){
							target.chooseTarget('弃置攻击范围内一名角色的一张牌',true,function(card,player,target){
								return player.inRange(target)&&target.countDiscardableCards(player,'he')>0;
							}).set('ai',function(target){
								var player=_status.event.player;
								return get.effect(target,{name:'guohe_copy2'},player,player)
							});
						}
						else event.goto(6);
					}
					else event.goto(6);
					'step 5'
					if(result.bool){
						var target2=result.targets[0];
						target.line(target2,'green');
						target.discardPlayerCard(target2,'he',true);
					}
					'step 6'
					game.delayx();
					if(event.count>0) event.goto(2);
					else if(targets.length) event.goto(1);
				},
				subSkill:{
					clear:{
						onremove:true,
					},
					effect0:{charlotte:true},
					effect1:{
						charlotte:true,
						trigger:{player:'useCard'},
						usable:1,
						forced:true,
						popup:false,
						content:function(){
							player.unmarkSkill('twyujue_effect1');
							var type2=get.type2(trigger.card,false);
							var card=get.cardPile2(function(card){
								return get.type2(card,false)==type2;
							});
							if(card) trigger.player.gain(card,'gain2');
						},
						mark:true,
						marktext:'爵',
						intro:{content:'使用下一张牌时，从牌堆中获得一张类型相同的牌'},
					},
				},
			},
			twyujue_give:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					if(!player.countCards('he')) return false;
					var targets=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill('twyujue');
					});
					if(!targets.length) return false;
					for(var target of targets){
						var num=2;
						if(player.group=='qun'&&target.hasZhuSkill('twfengqi',player)) num=4;
						if(target.countMark('twyujue_clear')<num) return true;
					}
					return false;
				},
				selectCard:function(){
					var player=_status.event.player;
					var targets=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill('twyujue');
					});
					return [1,Math.max.apply(Math,targets.map(function(target){
						var num=2;
						if(player.group=='qun'&&target.hasZhuSkill('twfengqi',player)) num=4;
						return num-target.countMark('twyujue_clear');
					}))];
				},
				filterCard:true,
				filterTarget:function(card,player,target){
					if(!target.hasSkill('twyujue')) return false;
					var num=2;
					if(player.group=='qun'&&target.hasZhuSkill('twfengqi',player)) num=4;
					return (num-target.countMark('twyujue_clear'))>=Math.max(1,ui.selected.cards.length);
				},
				selectTarget:function(){
					var player=_status.event.player;
					var targets=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill('twyujue');
					});
					return targets.length>1?1:-1;
				},
				complexSelect:true,
				prompt:function(){
					var player=_status.event.player;
					var targets=game.filterPlayer(function(current){
						return current!=player&&current.hasSkill('twyujue');
					});
					return '将任意张牌交给'+get.translation(targets)+(targets.length>1?'中的一人':'');
				},
				position:'he',
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(ui.selected.cards.length) return 0;
					var player=_status.event.player;
					if(game.hasPlayer(function(current){
						return lib.skill.twyujue_give.filterTarget(null,player,current)&&get.attitude(player,current)>0;
					})){
						var val=get.value(card);
						if(val<=0&&get.position(card)=='e') return 100-val;
						if(!player.hasSkill('twyujue_effect1')&&player.hasCard(function(cardx){
							return cardx!=card&&player.getUseValue(cardx,null,true)>0;
						},'hs')) return 6-get.value(card);
						if(!player.hasSkill('twyujue_effect0')&&game.hasPlayer(function(current){
							return player.inRange(current)&&current.countDiscardableCards(player,'he')>0&&get.effect(current,{name:'guohe_copy2'},player,player)>0;
						})) return 5.5-get.value(card);
					}
					return 0;
				},
				content:function(){
					game.trySkillAudio('twyujue',target);
					player.give(cards,target);
					target.addTempSkill('twyujue_clear');
					target.addMark('twyujue_clear',cards.length,false);
				},
				ai:{
					order:10,
					result:{target:1},
				},
			},
			twgezhi:{
				audio:2,
				trigger:{player:'useCard'},
				direct:true,
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var type=get.type2(event.card,false);
					return !player.hasHistory('useCard',function(evtx){
						return evtx!=event&&get.type2(evtx.card,false)==type&&evtx.getParent('phaseUse')==evt;
					},event);
				},
				content:function(){
					'step 0'
					if(!event.isMine()&&!event.isOnline()) game.delayx();
					player.chooseCard('是否发动【革制】重铸一张牌？',lib.filter.cardRecastable).set('ai',function(card){
						return 5.5-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('twgezhi');
						player.recast(result.cards);
					}
				},
				group:'twgezhi_buff',
				subSkill:{
					buff:{
						audio:'twgezhi',
						trigger:{player:'phaseUseEnd'},
						direct:true,
						filter:function(event,player){
							return player.getHistory('lose',function(evt){
								return evt.getParent(3).name=='twgezhi'&&evt.getParent('phaseUse')==event;
							}).length>1;
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('twgezhi'),'你可以令一名角色选择获得一个其未获得过的效果：⒈攻击范围+2；⒉手牌上限+2；⒊加1点体力上限。',function(card,player,target){
								return !target.hasSkill('twgezhi_选项一')||!target.hasSkill('twgezhi_选项二')||!target.hasSkill('twgezhi_选项三');
							}).set('ai',function(target){
								return get.attitude(_status.event.player,target);
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								event.target=target;
								player.logSkill('twgezhi',target);
								var list=[];
								for(var i=1;i<=3;i++){
									var str='选项'+get.cnNumber(i,true);
									if(!target.hasSkill('twgezhi_'+str)) list.push(str);
								}
								if(list.length==1) event._result={control:list[0]};
								else target.chooseControl(list).set('choiceList',['令自己的攻击范围+2','令自己的手牌上限+2','令自己的体力上限+1']).set('ai',function(){
									var player=_status.event.player,controls=_status.event.controls;
									if(controls.includes('选项一')&&game.hasPlayer(function(current){
										return (get.realAttitude||get.attitude)(player,current)<0&&get.distance(player,current,'attack')>1;
									})) return '选项一';
									if(controls.includes('选项二')&&player.needsToDiscard()) return '选项二';
									if(controls.includes('选项三')) return '选项三';
									return controls.randomGet();
								});
							}
							else{
								event._triggered=null;
								event.finish();
							}
							'step 2'
							target.addSkill('twgezhi_'+result.control);
							if(result.control=='选项三') target.gainMaxHp();
							'step 3'
							game.delayx();
						},
					},
					选项一:{
						charlotte:true,
						mod:{
							attackFrom:function(from,to,distance){
								return distance-2;
							},
						},
						mark:true,
						marktext:' +2 ',
						intro:{content:'攻击范围+2'},
					},
					选项二:{
						charlotte:true,
						mod:{
							maxHandcard:function(player,num){
								return num+2;
							},
						},
						mark:true,
						marktext:' +2 ',
						intro:{content:'手牌上限+2'},
					},
					选项三:{
						charlotte:true,
						mark:true,
						marktext:' +1 ',
						intro:{content:'体力上限+1'},
					},
				},
			},
			twfengqi:{
				audio:2,
				zhuSkill:true,
				trigger:{player:'twgezhi_buffAfter'},
				direct:true,
				filter:function(event,player){
					if(!event.target||!event.target.isIn()||!player.hasZhuSkill('twfengqi',event.target)) return false;
					var target=event.target;
					return target.getStockSkills(true,true).some(skill=>{
						if(target.hasSkill(skill)) return false;
						var info=get.info(skill);
						return info&&info.zhuSkill;
					});
				},
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					event.target=trigger.target;
					event.target.chooseBool(get.prompt('twfengqi'),'获得武将牌上的所有主公技');
					'step 1'
					if(result.bool){
						target.logSkill('twfengqi',player);
						var skills=target.getStockSkills(true,true).filter(skill=>{
							if(target.hasSkill(skill)) return false;
							var info=get.info(skill);
							return info&&info.zhuSkill;
						});
						for(var i of skills) target.addSkillLog(i);
					}
				},
			},
			twsidai:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				locked:false,
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				filter:function(event,player){
					var cards=player.getCards('h',{type:'basic'});
					if(!cards.length) return false;
					for(var i of cards){
						if(!game.checkMod(i,player,'unchanged','cardEnabled2',player)) return false;
					}
					return event.filterCard(get.autoViewAs({name:'sha',storage:{twsidai:true}},cards),player,event);
				},
				viewAs:{name:'sha',storage:{twsidai:true}},
				filterCard:{type:'basic'},
				selectCard:-1,
				check:()=>1,
				onuse:function(result,player){
					player.awakenSkill('twsidai');
					player.addTempSkill('twsidai_effect');
				},
				ai:{
					order:2.9,
					result:{
						target:function(player,target){
							var cards=ui.selected.cards.slice(0);
							var names=[];
							for(var i of cards) names.add(i.name);
							if(names.length<player.hp) return 0;
							if(player.hasUnknown()&&(player.identity!='fan'||!target.isZhu)) return 0;
							if(get.attitude(player,target)>=0) return -20;
							return lib.card.sha.ai.result.target.apply(this,arguments);
						},
					},
				},
				mod:{
					cardUsable:function(card){
						if(card.storage&&card.storage.twsidai) return Infinity;
					},
					targetInRange:function(card){
						if(card.storage&&card.storage.twsidai) return true;
					},
				},
				subSkill:{
					effect:{
						charlotte:true,
						trigger:{source:'damageBegin1'},
						filter:function(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.twsidai||event.getParent().type!='card') return false;
							for(var i of event.cards){
								if(i.name=='jiu') return true;
							}
							return false;
						},
						forced:true,
						popup:false,
						content:function(){
							trigger.num*=2;
							game.log(trigger.card,'的伤害值','#y×2');
						},
						group:['twsidai_tao','twsidai_shan'],
					},
					tao:{
						trigger:{source:'damageSource'},
						filter:function(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.twsidai||!event.player.isIn()) return false;
							for(var i of event.cards){
								if(i.name=='tao') return true;
							}
							return false;
						},
						forced:true,
						popup:false,
						content:function(){
							trigger.player.loseMaxHp();
						},
					},
					shan:{
						trigger:{player:'useCardToPlayered'},
						filter:function(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.twsidai||!event.target.isIn()) return false;
							for(var i of event.cards){
								if(i.name=='shan') return true;
							}
							return false;
						},
						forced:true,
						popup:false,
						content:function(){
							'step 0'
							trigger.target.chooseToDiscard('h',{type:'basic'},'弃置一张基本牌，否则不能响应'+get.translation(trigger.card)).set('ai',function(card){
								var player=_status.event.player;
								if(player.hasCard('hs',function(cardx){
									return cardx!=card&&get.name(cardx,player)=='shan';
								})) return 12-get.value(card);
								return 0;
							});
							'step 1'
							if(!result.bool) trigger.directHit.add(trigger.target);
						},
					},
				},
			},
			twjieyu:{
				audio:2,
				trigger:{player:['phaseJieshuBegin','damageEnd']},
				round:1,
				filter:function(event,player){
					if(event.name!='phaseJieshu'){
						var history=player.getHistory('damage');
						for(var i of history){
							if(i==event) break;
							return false;
						}
						var all=player.actionHistory;
						for(var i=all.length-2;i>=0;i--){
							if(all[i].damage.length) return false;
							if(all[i].isRound) break;
						}
					}
					return player.countCards('h')>0&&!player.hasCard(function(card){
						return !lib.filter.cardDiscardable(card,player,'twjieyu');
					},'h')
				},
				check:function(event,player){
					var cards=[],names=[];
					for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var card=ui.discardPile.childNodes[i];
						if(get.type(card,false)=='basic'&&!names.includes(card.name)){
							cards.push(card);
							names.push(card.name);
						}
					}
					if(!names.includes('shan')||!names.includes('tao')) return false;
					if(player.countCards('h','shan')<2&&player.countCards('h','tao')<1) return true;
					return false;
				},
				content:function(){
					'step 0'
					player.discard(player.getCards('h'));
					'step 1'
					var cards=[],names=[];
					for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var card=ui.discardPile.childNodes[i];
						if(get.type(card,false)=='basic'&&!names.includes(card.name)){
							cards.push(card);
							names.push(card.name);
						}
					}
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			twhanyu:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				content:function(){
					var cards=[],types=['basic','trick','equip'];
					for(var i of types){
						var card=get.cardPile2(function(card){
							return get.type2(card,false)==i;
						});
						if(card) cards.push(card);
					}
					if(cards.length) player.gain(cards,'gain2');
				},
			},
			twhengjiang:{
				audio:'hengjiang',
				trigger:{player:'useCardToPlayer'},
				filter:function(event,player){
					return !player.hasSkill('twhengjiang2')&&event.targets.length==1&&['basic','trick'].includes(get.type(event.card,false))&&player.isPhaseUsing()&&game.hasPlayer(function(current){
						return player.inRange(current)&&lib.filter.targetEnabled2(event.card,player,current);
					});
				},
				prompt:'是否发动【横江】？',
				prompt2:function(event,player){
					return '将'+get.translation(event.card)+'的目标改为'+get.translation(lib.skill.twhengjiang.logTarget(event,player));
				},
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						return player.inRange(current)&&lib.filter.targetEnabled2(event.card,player,current);
					}).sortBySeat();
				},
				check:function(event,player){
					var effect1=get.effect(event.target,event.card,player,player);
					var effect2=0,targets=lib.skill.twhengjiang.logTarget(event,player);
					for(var i of targets) effect2+=get.effect(i,event.card,player,player);
					return effect2>effect1;
				},
				content:function(){
					var targets=lib.skill.twhengjiang.logTarget(trigger,player);
					trigger.targets.length=0;
					trigger.targets.addArray(targets);
					trigger.getParent().triggeredTargets1.length=0;
					trigger.getParent().twhengjiang_buffed=true;
					player.addTempSkill('twhengjiang2','phaseUseAfter');
				},
			},
			twhengjiang2:{
				charlotte:true,
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.twhengjiang_buffed&&game.hasPlayer2(function(current){
						return current!=player&&(current.hasHistory('useCard',function(evt){
							return evt.respondTo&&evt.respondTo[1]==event.card;
						})||current.hasHistory('respond',function(evt){
							return evt.respondTo&&evt.respondTo[1]==event.card;
						}))
					});
				},
				content:function(){
					player.draw(game.countPlayer2(function(current){
						return current!=player&&(current.hasHistory('useCard',function(evt){
							return evt.respondTo&&evt.respondTo[1]==trigger.card;
						})||current.hasHistory('respond',function(evt){
							return evt.respondTo&&evt.respondTo[1]==trigger.card;
						}))
					}));
				},
			},
			twyuanhu:{
				audio:'yuanhu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasCard({type:'equip'},'eh');
				},
				filterCard:{type:'equip'},
				filterTarget:function(card,player,target){
					var card=ui.selected.cards[0];
					return target.canEquip(card);
				},
				discard:false,
				lose:false,
				prepare:'give',
				position:'he',
				check:function(card){
					if(get.position(card)=='h') return 9-get.value(card);
					return 7-get.value(card);
				},
				content:function(){
					'step 0'
					target.equip(cards[0]);
					'step 1'
					event.goto(3);
					switch(get.subtype(cards[0])){
						case 'equip1':
							if(game.hasPlayer(function(current){
								return current!=target&&get.distance(target,current)==1&&current.countCards('hej')>0;
							})){
								player.chooseTarget(true,'弃置一名距离'+get.translation(target)+'为1的角色区域内的一张牌',function(card,player,target){
									var current=_status.event.current;
									return current!=target&&get.distance(current,target)==1&&current.countCards('hej')>0;
								}).set('current',target).set('ai',function(target){
									var player=_status.event.player;
									return get.effect(target,{name:'guohe_copy'},player,player);
								});
								event.goto(2);
							}
							break;
						case 'equip2':
							target.draw();
							break;
						case 'equip3': case 'equip4': case 'equip5':
							target.recover();
							break;
					}
					'step 2'
					var target=result.targets[0];
					player.line(target);
					player.discardPlayerCard(target,true,'hej');
					'step 3'
					if(target.hp<=player.hp||target.countCards('h')<=player.countCards('h')){
						player.draw();
						player.addTempSkill('twyuanhu_end');
					}
				},
				ai:{
					order:10,
					result:{
						player:function(player,target){
							if(get.attitude(player,target)==0) return 0;
							if(!ui.selected.cards.length) return;
							var eff=get.effect(target,ui.selected.cards[0],player,player),sub=get.subtype(ui.selected.cards[0],false);
							if(target==player) eff+=4;
							else{
								var hp=player.hp,hs=player.countCards('h',(card)=>card!=ui.selected.cards[0]);
								var tp=target.hp,ts=target.countCards('h');
								if(sub=='equip2') ts++;
								if(tp<target.maxHp&&(sub=='equip3'||sub=='equip4'||sub=='equip5')) tp++;
								if(tp<=hp||ts<=hs) eff+=2;
							}
							if(sub=='equip1'){
								var list=game.filterPlayer(function(current){
									return current!=target&&get.distance(target,current)==1&&current.countCards('hej')<0;
								}).map(function(i){
									return get.effect(i,{name:'guohe_copy'},player,player);
								}).sort((a,b)=>b-a);
								if(list.length) eff+=list[0];
							}
							return eff;
						},
						target:function(player,target){
							if(!ui.selected.cards.length) return 0;
							var sub=get.subtype(ui.selected.cards[0],false);
							var eff=get.effect(target,ui.selected.cards[0],player,target);
							if(sub=='equip2') eff+=(get.effect(target,{name:'draw'},target,target));
							if(target.isDamaged()&&(sub=='equip3'||sub=='equip4'||sub=='equip5')) eff+=get.recoverEffect(target,player,player);
							return eff;
						},
					},
				},
				subSkill:{
					end:{
						trigger:{player:'phaseJieshuBegin'},
						direct:true,
						charlotte:true,
						filter:function(event,player){
							return player.hasSkill('twyuanhu')&&player.hasCard({type:'equip'},'eh');
						},
						content:function(){
							'step 0'
							player.chooseCardTarget({
								prompt:get.prompt('twyuanhu'),
								prompt2:'将一张装备牌置入一名角色的装备区内。若此牌为：武器牌，你弃置与其距离为1的另一名角色区域的一张牌；防具牌，其摸一张牌；坐骑牌或宝物牌，其回复1点体力。然后若其体力值或手牌数不大于你，则你摸一张牌。',
								filterCard:lib.skill.twyuanhu.filterCard,
								filterTarget:lib.skill.twyuanhu.filterTarget,
								position:'he',
								ai1:lib.skill.twyuanhu.check,
								ai2:function(target){
									var player=_status.event.player;
									return get.effect(target,'twyuanhu',player,player);
								},
							});
							'step 1'
							if(result.bool){
								result.skill='twyuanhu';
								player.useResult(result,event);
							}
						},
					},
				},
			},
			twjuezhu:{
				audio:2,
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				direct:true,
				filter:function(event,player){
					return player.hasEnabledSlot(3)||player.hasEnabledSlot(4);
				},
				skillAnimation:true,
				animationColor:'water',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('twjuezhu'),[1,2],function(card,player,target){
						return !ui.selected.targets.length&&!target.hasSkill('feiying');
					}).set('promptbar','none').set('ai',function(target){
						if(player.hasUnknown()) return false;
						return get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						event.target=result.targets[0];
						var list=[];
						if(player.hasEnabledSlot(3)) list.push('equip3');
						if(player.hasEnabledSlot(4)) list.push('equip4');
						if(list.length==1) event._result={control:list[0]};
						else player.chooseControl(list).set('prompt','选择废除一个坐骑栏');
					}
					else event.finish();
					'step 2'
					player.logSkill('twjuezhu',target);
					player.awakenSkill('twjuezhu');
					player.disableEquip(result.control);
					target.disableJudge();
					player.markAuto('twjuezhu_restore',[[target,result.control]]);
					player.addSkill('twjuezhu_restore');
					target.addSkill('feiying');
				},
				subSkill:{
					restore:{
						trigger:{global:'die'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							for(var i of player.getStorage('twjuezhu_restore')){
								if(i[0]==event.player&&player.hasDisabledSlot(i[1])) return true;
							}
							return false;
						},
						content:function(){
							var list=[];
							for(var i of player.getStorage('twjuezhu_restore')){
								if(i[0]==trigger.player&&player.hasDisabledSlot(i[1])) list.push(i[1]);
							}
							player.enableEquip(list);
						},
					},
				},
				derivation:'feiying',
			},
			twfengpo:{
				audio:'fengpo',
				trigger:{player:'useCardToPlayered'},
				logTarget:'target',
				filter:function(event,player){
					return (event.card.name=='sha'||event.card.name=='juedou')&&event.targets.length==1&&event.target.countCards('h')>0;
				},
				onremove:true,
				content:function(){
					'step 0'
					event.target=trigger.target;
					player.viewHandcards(trigger.target);
					'step 1'
					var num=target.countCards('h',player.storage.twfengpo?{color:'red'}:{suit:'diamond'});
					if(!num){
						event.finish();
						return;
					}
					event.num=num;
					player.chooseControl().set('choiceList',[
						'摸'+num+'张牌',
						'令'+get.translation(trigger.card)+'的伤害值基数+'+num,
					]);
					'step 2'
					if(result.index==0) player.draw(num);
					else trigger.getParent().baseDamage+=num;
				},
				group:'twfengpo_kill',
				subSkill:{
					kill:{
						audio:'fengpo',
						trigger:{source:'die'},
						forced:true,
						filter:(event,player)=>!player.storage.twfengpo,
						skillAnimation:true,
						animationColor:'fire',
						content:function(){
							player.storage.twfengpo=true;
							player.popup('凤魄');
							game.log(player,'恢复了技能','#g【凤魄】');
						},
					},
				},
			},
			twmouzhu:{
				audio:'mouzhu',
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				contentBefore:function(){
					var target=targets[0],evt=event.getParent();
					evt._target=target;
					var list=game.filterPlayer(function(current){
						return current!=player&&current!=target&&current.hp<=player.hp;
					});
					if(!list.length){
						player.loseHp();
						evt.finish();
					}
					else{
						evt.targets=list.sortBySeat();
						player.line(list);
					}
				},
				content:function(){
					'step 0'
					target.chooseCard('he','是否交给'+get.translation(player)+'一张牌？').set('ai',function(card){
						if(_status.event.goon) return 7-get.value(card);
						return 0;
					}).set('goon',get.attitude(target,player)>0);
					'step 1'
					if(result.bool){
						target.give(result.cards,player);
					}
					else{
						game.log(target,'拒绝给牌');
					}
				},
				contentAfter:function(){
					'step 0'
					var num=0,par=event.getParent();
					player.getHistory('gain',function(evt){
						if(evt.getParent(2)==par) num+=evt.cards.length;
					});
					if(!num){
						player.loseHp();
						for(var i of targets) i.loseHp();
						event.finish();
					}
					else{
						var target=event.getParent()._target;
						event.target=target;
						event.num=num;
						var bool1=player.canUse('sha',target,false),bool2=player.canUse('juedou',target,false);
						if(bool1&&bool2) target.chooseControl('sha','juedou').set('prompt','谋诛：视为被'+get.translation(player)+'使用一张…').set('prompt2','（伤害值基数：'+num+'）').set('ai',function(){
							var target=_status.event.player,player=_status.event.getParent().player;
							if(target.hasShan()||get.effect(target,{name:'sha'},player,target)>0) return 'sha';
							if(get.effect(target,{name:'juedou'},player,target)>0) return 'juedou';
							return 'sha';
						});
						else if(bool1) event._result={control:'sha'};
						else if(bool2) event._result={control:'juedou'};
						else event.finish();
					}
					'step 1'
					if(result.control&&lib.card[result.control]) player.useCard({
						name:result.control,
						isCard:true,
					},false,target).baseDamage=num;
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)>=0) return 0;
							var list=game.filterPlayer(function(current){
								return current!=player&&current!=target&&current.hp<=player.hp;
							});
							if(!list.length) return 0;
							return -Math.min(-get.effect(target,{name:'sha'},player,target),-get.effect(target,{name:'juedou'},player,target))*list.reduce(function(num,current){
								return num+(2+get.sgn(get.attitude(current,player)));
							},0);
						},
					},
				},
			},
			twyanhuo:{
				audio:'yanhuo',
				trigger:{player:'die'},
				direct:true,
				forceDie:true,
				skillAnimation:true,
				animationColor:'thunder',
				filter:function(event,player){
					return player.countCards('he')>0&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>0;
					});
				},
				content:function(){
					'step 0'
					var num=player.countCards('he'),str=get.cnNumber(num);
					event.num1=num;
					event.num2=1;
					var list=['令一名其他角色弃置'+str+'张牌'];
					if(num>1){
						list.push('令至多'+str+'名其他角色各弃置一张牌');
					}
					player.chooseControl('cancel2').set('choiceList',list).set('prompt',get.prompt('twyanhuo')).set('forceDie',true);
					'step 1'
					if(result.control!='cancel2'){
						if(result.index==0){
							event.num2=event.num1;
							event.num1=1;
						}
						player.chooseTarget([1,event.num1],true,'请选择【延祸】的目标',function(card,player,target){
							return target!=player&&target.countCards('he')>0;
						}).set('forceDie',true).set('ai',function(target){
							return -get.attitude(_status.event.player,target)
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var targets=result.targets.sortBySeat();
						player.logSkill('twyanhuo',targets);
						for(var i of targets) i.chooseToDiscard(true,'he',event.num2);
					}
				},
			},
			twshenxing:{
				mod:{
					globalFrom:function(player,target,distance){
						var es=player.getCards('e',function(card){
							return !ui.selected.cards.includes(card);
						});
						for(var i of es){
							var type=get.subtype(i);
							if(type=='equip3'||type=='equip4'||type=='equip6') return distance;
						}
						return distance-1;
					},
					maxHandcard:function(player,distance){
						var es=player.getCards('e',function(card){
							return !ui.selected.cards.includes(card);
						});
						for(var i of es){
							var type=get.subtype(i);
							if(type=='equip3'||type=='equip4'||type=='equip6') return distance;
						}
						return distance+1;
					},
				},
			},
			twdaoji:{
				audio:'daoji',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.hasCard(lib.skill.twdaoji.filterCard,'he');
				},
				filterCard:function(card){
					return get.type(card)!='basic';
				},
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player&&player.inRange(target)&&target.hasCard((card)=>lib.filter.canBeGained(card,target,player),'he');
				},
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(target,'he',true);
					'step 1'
					if(result.bool&&result.cards&&result.cards.length==1){
						var card=result.cards[0];
						if(player.getCards('h').includes(card)){
							var type=get.type(card);
							if(type=='basic') player.draw();
							else if(type=='equip'){
								if(player.hasUseTarget(card)) player.chooseUseTarget(card,'nopopup',true);
								target.damage('nocard');
							}
						}
					}
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var eff=get.effect(target,{name:'shunshou_copy2'},player,target);
							if(target.countCards('e')>0) eff+=get.damageEffect(target,player,target);
							return eff;
						},
					},
				},
			},
			xinzhenjun:{
				audio:2,
				trigger:{
					player:'phaseUseBegin'
				},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						filterCard:true,
						filterTarget:lib.filter.notMe,
						position:'he',
						prompt:get.prompt2('xinzhenjun'),
						ai1:function(card){
							var player=_status.event.player;
							if(card.name=='sha'&&get.color(card)=='red'){
								for(var i=0;i<game.players.length;i++){
									var current=game.players[i];
									if(current!=player&&get.attitude(player,current)>0&&current.hasValueTarget(card)) return 7;
								}
								return 0;
							}
							return 7-get.value(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							var card=ui.selected.cards[0];
							var att=get.attitude(player,target);
							if(get.value(card)<0) return -att*2;
							if(target.countCards('h',{name:'sha',color:'red'})||target.hasSkill('wusheng')||target.hasSkill('new_rewusheng')||target.hasSkill('wushen')||(card.name=='sha'&&get.color(card)=='red'&&target.hasValueTarget(card))) return att*2;
							var eff=0;
							game.countPlayer(function(current){
								if(target!=current&&get.distance(target,current,'attack')>1) return;
								var eff2=get.damageEffect(current,player,player);
								if(eff2>eff) eff=eff2;
							});
							if(att>0&&eff>0) eff+=2*att;
							return eff;
						},
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('xinzhenjun',target);
						player.give(result.cards,target)
					}
					else event.finish();
					'step 2'
					target.chooseToUse({
						filterCard:function(card){
							return get.name(card)=='sha'&&get.color(card)!='black'&&lib.filter.cardEnabled.apply(this,arguments);
						},
						prompt:'请使用一张不为黑色的【杀】，否则'+get.translation(player)+'可以对你或你攻击范围内的一名其他角色造成1点伤害',
					});
					'step 3'
					if(result.bool){
						var num=1;
						game.countPlayer2(function(current){
							current.getHistory('damage',function(evt){
								if(evt.getParent(evt.notLink()?4:8)==event) num+=evt.num;
							});
						});
						player.draw(num);
						event.finish();
					}
					else{
						player.chooseTarget('是否对'+get.translation(target)+'或其攻击范围内的一名角色造成1点伤害？',function(card,player,target){
							return target==_status.event.targetx||_status.event.targetx.inRange(target);
						}).set('targetx',event.target).ai=function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player)
						};
					}
					'step 4'
					if(result.bool){
						player.line(result.targets);
						result.targets[0].damage('nocard');
					}
				},
			},
			twmoukui:{
				audio:'moukui',
				trigger:{player:'useCardToPlayered'},
				direct:true,
				preHidden:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';
				},
				content:function(){
					'step 0'
					var list=['选项一'];
					if(trigger.target.countDiscardableCards(player,'he')>0) list.push('选项二');
					list.push('背水！');
					list.push('cancel2');
					player.chooseControl(list).set('choiceList',[
						'摸一张牌',
						'弃置'+get.translation(trigger.target)+'的一张牌',
						'背水！依次执行以上两项。然后若此【杀】未令其进入濒死状态，则其弃置你的一张牌。',
					]).set('prompt',get.prompt('twmoukui',trigger.target)).setHiddenSkill('twmoukui');
					'step 1'
					if(result.control!='cancel2'){
						var target=trigger.target;
						player.logSkill('twmoukui',target);
						if(result.control=='选项一'||result.control=='背水！') player.draw();
						if(result.control=='选项二'||result.control=='背水！') player.discardPlayerCard(target,true,'he');
						if(result.control=='背水！'){
							player.addTempSkill('twmoukui_effect');
							var evt=trigger.getParent();
							if(!evt.twmoukui_effect) evt.twmoukui_effect=[];
							evt.twmoukui_effect.add(target);
						}
					}
				},
				subSkill:{
					effect:{
						trigger:{player:'useCardAfter'},
						charlotte:true,
						forced:true,
						filter:function(event,player){
							return event.twmoukui_effect&&event.twmoukui_effect.filter(function(current){
								return current.isIn()&&!current.hasHistory('damage',function(evt){
									return evt._dyinged&&evt.card==event.card;
								});
							}).length>0;
						},
						content:function(){
							var list=trigger.twmoukui_effect.filter(function(current){
								return current.isIn()&&!current.hasHistory('damage',function(evt){
									return evt._dyinged&&evt.card==event.card;
								});
							}).sortBySeat();
							for(var i of list){
								i.discardPlayerCard(player,true,'he').boolline=true;
							}
						},
					},
				},
			},
			twfuhan:{
				audio:'fuhan',
				trigger:{player:'phaseZhunbeiBegin'},
				unique:true,
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				forceunique:true,
				filter:function(event,player){
					return player.countMark('fanghun')>0;
				},
				prompt:function(event,player){
					var num=Math.max(2,player.storage.fanghun);
					num=Math.min(num,8);
					return get.prompt('twfuhan')+'（体力上限：'+num+'）';
				},
				check:function(event,player){
					if(player.storage.fanghun>=Math.min(4,player.maxHp)) return true;
					if(player.hp<=2&&player.storage.fanghun>=3) return true;
					return false;
				},
				content:function(){
					'step 0'
					var num=Math.max(2,player.storage.fanghun);
					num=Math.min(num,8);
					event.num=num;
					player.removeMark('fanghun',player.storage.fanghun);
					player.awakenSkill('twfuhan');
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][1]=='shu') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][1]!='shu';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[1]=='shu';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					list.remove('zhaoxiang');
					player.chooseButton(['扶汉：选择获得一张武将牌上的所有技能',[list.randomGets(5),'character']],true);
					'step 1'
					if(result.bool){
						var name=result.links[0];
						player.flashAvatar('twhuashen',name);
						game.log(player,'获得了','#y'+get.translation(name),'的所有技能');
						player.addSkill(lib.character[name][3])
					}
					'step 2'
					var num=event.num-player.maxHp;
					if(num>0) player.gainMaxHp(num);
					else player.loseMaxHp(-num);
					player.recover();
					'step 3'
					var card=get.cardPile('meiyingqiang','field');
					if(card){
						player.gain(card,'gain2','log');
					}
				},
			},
			twqueshi:{
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&player.hasEquipableSlot(1);
				},
				content:function(){
					if(!lib.inpile.includes('meiyingqiang')){
						lib.inpile.push('meiyingqiang');
						player.equip(game.createCard('meiyingqiang','diamond',12));
					}
					else{
						var card=get.cardPile(function(card){
							return card.name=='meiyingqiang'&&!player.getEquips(1).includes(card);
						},'field');
						if(card) player.equip(card);
					}
				},
			},
			meiyingqiang:{
				equipSkill:true,
				trigger:{
					player:['loseAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					var evt=event.getl(player);
					if(!evt||!evt.cards2||!evt.cards2.length) return false;
					var list=player.getHistory('lose',function(evt){
						return evt.cards2&&evt.cards2.length;
					});
					if(event.name=='lose'){
						if(list.indexOf(event)!=0) return false;
					}
					else{
						if(!player.hasHistory('lose',function(evt){
							return evt.getParent()==event&&list.indexOf(evt)==0;
						})) return false;
					}
					return _status.connectMode||!lib.config.skip_shan||player.hasSha();
				},
				direct:true,
				content:function(){
					if(trigger.delay===false) game.delayx();
					player.chooseToUse('梅影枪：是否使用一张【杀】？',function(card){
						if(get.name(card)!='sha') return false;
						return lib.filter.cardEnabled.apply(this,arguments);
					}).set('addCount',false).logSkill='meiyingqiang';
				},
			},
			cuijin:{
				trigger:{global:'useCard'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&(event.player==player||player.inRange(event.player))&&player.countCards('he')>0;
				},
				checkx(event,player){
					let d1=true,e=false;
					if(event.player.hasSkill('jueqing')||event.player.hasSkill('gangzhi')) d1=false;
					for(let tar of event.targets){
						if(!tar.mayHaveShan(player,'use',tar.getCards('h',i=>{
							return i.hasGaintag('sha_notshan');
						}))||event.player.hasSkillTag('directHit_ai',true,{
							target:tar,
							card:event.card,
						},true)){
							if(!tar.hasSkill('gangzhi')) d1=false;
							if(!tar.hasSkillTag('filterDamage',null,{
								player:event.player,
								card:event.card,
							})){
								let att=get.attitude(_status.event.player,tar);
								if(att>0) return false;
								if(att<0) e=true;
							}
						}
					}
					if(e) return true;
					if(d1) return get.damageEffect(event.player,player,_status.event.player)>0;
					return false;
				},
				content:function(){
					'step 0'
					if(player!=game.me&&!player.isOnline()) game.delayx();
					var target=trigger.player;
					event.target=target;
					player.chooseToDiscard('he',get.prompt('cuijin',target),'弃置一张牌并令'+get.translation(trigger.player)+'使用的【杀】伤害+1，但若其未造成伤害，则你对其造成1点伤害。').set('ai',function(card){
						if(_status.event.goon) return 7-get.value(card);
						return 0;
					}).set('goon',lib.skill.cuijin.checkx(trigger,player)).logSkill=['cuijin',target];
					'step 1'
					if(result.bool){
						if(typeof trigger.baseDamage!='number') trigger.baseDamage=1;
						trigger.baseDamage++;
						player.addTempSkill('cuijin_damage');
						player.markAuto('cuijin_damage',[trigger.card]);
					}
				},
				subSkill:{
					damage:{
						trigger:{global:'useCardAfter'},
						forced:true,
						popup:false,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.storage.cuijin_damage.includes(event.card);
						},
						content:function(){
							player.storage.cuijin_damage.remove(trigger.card);
							if(!player.storage.cuijin_damage.length) player.removeSkill('cuijin_damage');
							if(trigger.player.isIn()&&!game.hasPlayer2(function(current){
								return current.hasHistory('damage',function(evt){
									return evt.card==trigger.card;
								});
							})){
								player.line(trigger.player,'green');
								trigger.player.damage();
							}
						},
					},
				},
			},
			jintao:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					},
					targetInRange:function(card){
						if(card.name=='sha') return true;
					},
				},
				audio:2,
				trigger:{player:'useCard'},
				forced:true,
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					var evt=event.getParent('phaseUse');
					if(!evt||evt.player!=player) return false;
					var index=player.getHistory('useCard',function(evtx){
						return evtx.card.name=='sha'&&evtx.getParent('phaseUse')==evt;
					}).indexOf(event);
					return index==0||index==1;
				},
				content:function(){
					var evt=trigger.getParent('phaseUse');
					var index=player.getHistory('useCard',function(evtx){
						return evtx.card.name=='sha'&&evtx.getParent('phaseUse')==evt;
					}).indexOf(trigger);
					if(index==0){
						game.log(trigger.card,'伤害+1');
						if(typeof trigger.baseDamage!='number') trigger.baseDamage=1;
						trigger.baseDamage++;
					}
					else{
						game.log(trigger.card,'不可被响应');
						trigger.directHit.addArray(game.players);
					}
				},
			},
			equan:{
				audio:2,
				trigger:{global:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return player==_status.currentPhase&&event.player.isIn();
				},
				logTarget:'player',
				content:function(){
					trigger.player.addMark('equan',trigger.num,false);
				},
				group:['equan_block','equan_lose'],
				marktext:'毒',
				intro:{
					name:'恶泉(毒)',
					name2:'毒',
				},
				subSkill:{
					lose:{
						audio:'equan',
						trigger:{player:'phaseZhunbeiBegin'},
						forced:true,
						filter:function(){
							return game.hasPlayer(function(current){
								return current.hasMark('equan');
							});
						},
						logTarget:function(){
							return game.filterPlayer(function(current){
								return current.hasMark('equan');
							});
						},
						content:function(){
							game.countPlayer(function(current){
								var num=current.countMark('equan');
								if(num){
									current.removeMark('equan',num);
									current.loseHp(num);
								}
							});
						},
					},
					block:{
						trigger:{global:'dyingBegin'},
						forced:true,
						logTarget:'player',
						filter:function(event,player){
							var evt=event.getParent(2);
							return evt.name=='equan_lose'&&evt.player==player;
						},
						content:function(){
							trigger.player.addTempSkill('baiban');
						},
					},
				},
			},
			manji:{
				audio:2,
				trigger:{global:'loseHpAfter'},
				forced:true,
				filter:function(event,player){
					return player!=event.player&&(player.hp>=event.player.hp||player.isDamaged());
				},
				logTarget:'player',
				content:function(){
					if(player.hp<=trigger.player.hp) player.recover();
					if(player.hp>=trigger.player.hp) player.draw();
				},
			},
			beini:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					var str=get.translation(target);
					player.chooseControl().set('choiceList',[
						'摸两张牌，然后令'+str+'视为对自己使用【杀】',
						'令'+str+'摸两张牌，然后视为对其使用【杀】',
					]).set('ai',function(){
						var evt=_status.event.getParent(),player=evt.player,target=evt.target;
						var card={name:'sha',isCard:true},att=get.attitude(player,target)>0;
						if(!target.canUse(card,player,false)||get.effect(player,card,target,player)>=0) return 0;
						if(att&&(!player.canUse(card,target,false)||get.effect(target,card,player,player)>=0)) return 1;
						if(target.hasSkill('nogain')&&player.canUse(card,target,false)&&get.effect(target,card,player,player)>0) return 1;
						if(player.hasShan()) return 0;
						if(att&&target.hasShan()) return 1;
						return 0;
					});
					'step 1'
					var list=[player,target];
					if(result.index==1) list.reverse();
					event.list=list;
					list[0].draw(2);
					'step 2'
					var list=event.list;
					if(list[1].isIn()&&list[0].isIn()&&list[1].canUse('sha',list[0],false)) list[1].useCard({name:'sha',isCard:true},list[0],false,'noai');
				},
				ai:{
					order:5,
					expose:0,
					result:{
						player:function(player,target){
							var card={name:'sha',isCard:true},att=get.attitude(player,target)>0;
							if(!target.canUse(card,player,false)||get.effect(player,card,target,player)>=0) return 2;
							if(att&&(!player.canUse(card,target,false)||get.effect(target,card,player,player)>=0)) return 2;
							if(target.hasSkill('nogain')&&player.canUse(card,target,false)) return get.effect(target,card,player,player)
							if(player.hasShan()) return 1;
							if(att&&target.hasShan()) return 1;
							return 0;
						},
					},
				},
			},
			dingfa:{
				audio:2,
				trigger:{player:'phaseDiscardAfter'},
				direct:true,
				filter:function(event,player){
					var num=0;
					player.getHistory('lose',function(evt){
						num+=evt.cards2.length;
					});
					return num>=player.hp;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('dingfa'),'操作提示：选择自己以回复体力，或选择其他角色以造成伤害',function(card,player,target){
						return target==player?player.isDamaged():true;
					}).set('ai',function(target){
						return target!=player?get.damageEffect(target,player,player):get.recoverEffect(player,player,player)
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('dingfa',target);
						if(target==player) player.recover();
						else target.damage();
					}
				},
			},
			dz_mantianguohai:{
				mod:{
					ignoredHandcard:function(card,player){
						if(get.name(card)=='dz_mantianguohai') return true;
					},
					cardDiscardable:function(card,player,name){
						if(name=='cardsDiscard'&&get.name(card)=='dz_mantianguohai') return false;
					},
				},
			},
			twmiaolve:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				filter:function(event,player){
					return event.name!='phase'||game.phaseNumber==0;
				},
				forced:true,
				locked:false,
				content:function(){
					if(!lib.inpile.includes('dz_mantianguohai')) lib.inpile.add('dz_mantianguohai');
					if(!_status.dz_mantianguohai_suits) _status.dz_mantianguohai_suits=lib.suit.slice(0);
					var list=_status.dz_mantianguohai_suits.randomRemove(2).map(function(i){
						return game.createCard2('dz_mantianguohai',i,5);
					});
					if(list.length) player.gain(list,'gain2','log');
				},
				group:'twmiaolve_damage',
				subSkill:{
					damage:{
						trigger:{player:'damageEnd'},
						direct:true,
						content:function(){
							'step 0'
							event.count=trigger.num;
							'step 1'
							event.count--;
							var list=['dz_mantianguohai'];
							list.addArray(get.zhinangs());
							player.chooseButton([get.prompt('twmiaolve'),[list,'vcard']]).set('ai',function(button){
								if(button.link[2]=='dz_mantianguohai'&&player.countCards('hs','dz_mantianguohai')<2) return 10;
								return get.value({name:button.link[2]});
							});
							'step 2'
							if(result.bool){
								player.logSkill('twmiaolve');
								var name=result.links[0][2];
								if(name=='dz_mantianguohai'){
									if(!lib.inpile.includes('dz_mantianguohai')) lib.inpile.add('dz_mantianguohai');
									if(!_status.dz_mantianguohai_suits) _status.dz_mantianguohai_suits=lib.suit.slice(0);
									if(_status.dz_mantianguohai_suits.length) player.gain(game.createCard2('dz_mantianguohai',_status.dz_mantianguohai_suits.randomRemove(),5),'gain2');
									else{
										var card=get.cardPile(function(card){
											return card.name==name;
										});
										if(card) player.gain(card,'gain2');
									}
									player.draw();
								}
								else{
									var card=get.cardPile(function(card){
										return card.name==name;
									});
									if(card) player.gain(card,'gain2');
								}
								if(event.count>0&&player.hasSkill('twmiaolve')) event.goto(1);
							}
						},
					},
				},
			},
			twyingjia:{
				audio:2,
				trigger:{global:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					if(!player.countCards('he')) return false;
					var history=player.getHistory('useCard'),map={};
					for(var i of history){
						if(get.type2(i.card)=='trick'){
							if(!map[i.card.name]) map[i.card.name]=true;
							else return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:get.prompt('twyingjia'),
						prompt2:'弃置一张牌并令一名角色进行一个额外回合',
						filterCard:lib.filter.cardDiscardable,
						filterTarget:true,
						ai1:function(card){
							return 8-get.value(card);
						},
						ai2:function(target){
							if(target.hasJudge('lebu')) return -1;
							var player=_status.event.player;
							if(get.attitude(player,target)>4){
								return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
							}
							return -1;
						},
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('twyingjia',target);
						player.discard(result.cards);
						target.insertPhase();
					}
				},
			},
			gx_lingbaoxianhu:{
				trigger:{
					source:'damageSource',
					global:'dieAfter',
				},
				forced:true,
				equipSkill:true,
				filter:function(event,player){
					if(event.name=='damage') return event.num>1;
					return true;
				},
				content:function(){
					player.gainMaxHp();
					player.recover();
				},
			},
			gx_taijifuchen:{
				trigger:{player:'useCardToPlayered'},
				forced:true,
				equipSkill:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';
				},
				logTarget:'target',
				content:function(){
					'step 0'
					var suit=get.suit(trigger.card);
					var num=trigger.target.countCards('h','shan');
					var next=trigger.target.chooseToDiscard('弃置一张牌，或不能响应'+get.translation(trigger.card),'he').set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return (get.suit(card)!=_status.event.suit?9:6)-get.value(card);
					}).set('num',num);
					if(lib.suit.includes(suit)){
						next.set('prompt2','若弃置的是'+get.translation(suit)+'牌，则改为'+get.translation(player)+'获得之');
						next.set('suit',suit);
					}
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						if(get.suit(card,trigger.target)==get.suit(trigger.card,false)&&get.position(card)=='d') player.gain(card,'gain2');
					}
					else trigger.directHit.add(trigger.target);
				},
			},
			gx_chongyingshenfu:{
				trigger:{player:'damageEnd'},
				forced:true,
				equipSkill:true,
				filter:function(event,player){
					if(!event.card||!event.card.name||player.getStorage('gx_chongyingshenfu_effect').includes(event.card.name)) return false;
					if(player.hasSkillTag('unequip2')) return false;
					if(event.source.hasSkillTag('unequip',false,{
						name:event.card.name,
						target:player,
						card:event.card,
					})) return false;
					return true;
				},
				content:function(){
					player.markAuto('gx_chongyingshenfu_effect',[trigger.card.name]);
				},
				group:'gx_chongyingshenfu_effect',
				subSkill:{
					effect:{
						trigger:{player:'damageBegin4'},
						forced:true,
						equipSkill:true,
						filter:function(event,player){
							if(!event.card||!event.card.name||!player.storage.gx_chongyingshenfu_effect||!player.getStorage('gx_chongyingshenfu_effect').includes(event.card.name)) return false;
							if(player.hasSkillTag('unequip2')) return false;
							if(event.source.hasSkillTag('unequip',false,{
								name:event.card.name,
								target:player,
								card:event.card,
							})) return false;
							return true;
						},
						content:function(){
							trigger.num--;
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(typeof card=='object'&&target.storage.gx_chongyingshenfu_effect&&target.getStorage('gx_chongyingshenfu_effect').includes(card.name)&&!target.hasSkillTag('unequip2')&&
										(get.itemtype(player)!=='player'||!player.hasSkillTag('jueqing',false,target)&&!player.hasSkillTag('unequip',false,{
										name:card.name,
										target:target,
										card:card,
									}))){
										if(player&&player.hasSkillTag('damageBonus',true,{
											target:target,
											card:card
										})) return 0.5;
										return 'zeroplayertarget';
									}
								}
							}
						},
						onremove:true,
						intro:{
							content:'受到$造成的伤害-1',
						},
					},
				},
			},
			twdanfa:{
				audio:2,
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt('twdanfa'),'将一张牌作为“丹”置于武将牌上').set('ai',function(card){
						if(player.storage.twdanfa){
							var suit=get.suit(card);
							for(var i of player.storage.twdanfa){
								if(get.suit(i,false)==suit) return 4-get.value(card);
							}
						}
						return 5.5-get.value(card);
					});
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						player.logSkill('twdanfa');
						game.log(player,'将',card,'放在了武将牌上');
						player.$give(card,player,false);
						player.lose(card,ui.special,'toStorage');
						player.markAuto('twdanfa',result.cards);
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
				mark:true,
				intro:{
					content:'cards',
					onunmark:'throw',
				},
				group:'twdanfa_draw',
				subSkill:{
					draw:{
						audio:'twdanfa',
						trigger:{player:'useCard'},
						forced:true,
						locked:false,
						filter:function(event,player){
							if(!player.storage.twdanfa||!player.storage.twdanfa.length) return false;
							var suit=get.suit(event.card,false);
							if(suit=='none'||player.storage.twdanfa_count&&player.storage.twdanfa_count.includes(suit)) return false;
							for(var i of player.storage.twdanfa){
								if(get.suit(i,false)==suit) return true;
							}
							return false;
						},
						content:function(){
							player.draw();
							player.addTempSkill('twdanfa_count');
							if(!player.storage.twdanfa_count) player.storage.twdanfa_count=[];
							player.storage.twdanfa_count.push(get.suit(trigger.card,false));
						},
					},
					count:{onremove:true},
				},
			},
			twlingbao:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var list=player.getStorage('twdanfa');
					if(list.length<2) return false;
					var suit=get.suit(list[0],false);
					for(var i=1;i<list.length;i++){
						if(get.suit(list[i],false)!=suit) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('灵宝',player.storage.twdanfa);
					},
					filter:function(button,player){
						if(!ui.selected.buttons.length) return true;
						return get.suit(button.link)!=get.suit(ui.selected.buttons[0].link);
					},
					select:2,
					backup:function(links){
						var obj=get.copy(lib.skill['twlingbao_'+get.color(links)]);
						obj.cards=links;
						obj.audio='twlingbao';
						obj.filterCard=()=>false;
						obj.selectCard=-1;
						return obj;
					},
					prompt:function(links){
						return lib.skill['twlingbao_'+get.color(links)].prompt;
					},
					check:function(button){
						var storage=_status.event.player.storage.twdanfa.slice(0);
						storage.remove(button.link);
						if(storage.filter(function(card){
							return card.suit==button.link.suit;
						}).length) return 1+Math.random();
						return 0;
					},
				},
				subSkill:{
					red:{
						filterTarget:function(card,player,target){
							return target.isDamaged();
						},
						delay:false,
						prompt:'令一名角色回复1点体力',
						content:function(){
							'step 0'
							var cards=lib.skill.twlingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('twdanfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							target.recover();
						},
						ai:{
							tag:{
								recover:1,
							},
							result:{
								target:1.5,
							},
						},
					},
					black:{
						filterTarget:function(card,player,target){
							return target.countDiscardableCards(player,'hej')>0;
						},
						delay:false,
						prompt:'弃置一名角色区域内至多两张区域不同的牌',
						content:function(){
							'step 0'
							var cards=lib.skill.twlingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('twdanfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							var num=0;
							if(target.countDiscardableCards(player,'h')) num++;
							if(target.countDiscardableCards(player,'e')) num++;
							if(target.countDiscardableCards(player,'j')) num++;
							if(num){
								player.discardPlayerCard(target,[1,Math.max(2,num)],'hej',true).set('filterButton',function(button){
									for(var i=0;i<ui.selected.buttons.length;i++){
										if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
									}
									return true;
								});
							}
						},
						ai:{
							tag:{
								lose:1.5,
								loseCard:1.5,
								discard:1.5,
							},
							result:{
								target:function(player,target){
									if(get.attitude(player,target)>0&&target.countCards('e',function(card){
										return get.value(card,target)<=0;
									})>0&&target.countCards('j',function(card){
										return get.effect(target,card,target,target)<0;
									})>8) return 3;
									if(target.countCards('h')>0&&target.countCards('e',function(card){
										return get.value(card,target)>0;
									})>0) return -2;
									return 0;
								},
							},
						},
					},
					none:{
						selectTarget:2,
						filterTarget:function(card,player,target){
							if(!ui.selected.targets.length) return true;
							return target.countCards('he')>0;
						},
						complexSelect:true,
						targetprompt:['摸牌','弃牌'],
						delay:false,
						prompt:'令一名角色摸一张牌并令另一名角色弃置一张牌',
						multitarget:true,
						multiline:true,
						content:function(){
							'step 0'
							var cards=lib.skill.twlingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('twdanfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							targets[0].draw();
							targets[1].chooseToDiscard('he',true);
						},
						ai:{
							result:{
								target:function(player,target){
									if(!ui.selected.targets.length) return 1;
									if(target.countCards('e',function(card){
										return get.value(card,target)<=0;
									})>0) return 1;
									return -1;
								},
							},
						},
					},
					backup:{audio:'twlingbao'},
				},
				ai:{
					order:1,
					result:{player:1},
				},
			},
			twsidao:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&!player.storage.twsidao;
				},
				content:function(){
					'step 0'
					player.chooseButton(['请选择你的初始法宝',[['gx_lingbaoxianhu','gx_taijifuchen','gx_chongyingshenfu'],'vcard']],true).set('ai',function(button){
						return button.link[2]=='gx_chongyingshenfu'?2:1;
					});
					'step 1'
					if(result.bool){
						var card=game.createCard2(result.links[0][2]);
						lib.inpile.add(result.links[0][2]);
						player.storage.twsidao=card;
						player.chooseUseTarget(card,'nopopup',true);
					}
				},
				group:'twsidao_equip',
				subSkill:{
					equip:{
						audio:'twsidao',
						trigger:{player:'phaseZhunbeiBegin'},
						forced:true,
						filter:function(event,player){
							var card=player.storage.twsidao;
							return card&&card.isInPile()&&player.hasUseTarget(card);
						},
						content:function(){
							player.chooseUseTarget(player.storage.twsidao,'nopopup',true);
						},
					},
				},
			},
			twrangyi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:lib.filter.notMe,
				delay:0,
				content:function(){
					'step 0'
					event.cards=player.getCards('h');
					player.give(event.cards,target).gaintag.add('twrangyi');
					target.addTempSkill('twrangyi2');
					'step 1'
					target.chooseToUse({
						prompt:'请使用得到的一张牌，或者受到来自'+get.translation(player)+'的1点伤害',
						filterCard:function(card,player){
							if(get.itemtype(card)!='card'||!card.hasGaintag('twrangyi')) return false;
							return lib.filter.filterCard(card,player,event);
						},
						cards:cards,
					});
					'step 2'
					target.removeSkill('twrangyi2');
					if(!result.bool) target.damage('nocard');
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								var hi=hs[i];
								if(hi.name=='tao'||target.hasValueTarget(hi,null,true)) return 1;
							}
							return get.damageEffect(target,player,target);
						},
					},
				},
			},
			twrangyi2:{
				trigger:{player:'useCard'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					var evt=event.getParent(2);
					return evt.name=='twrangyi'&&evt.player.isIn()&&player.countCards('h',function(card){
						return card.hasGaintag('twrangyi');
					})>0;
				},
				content:function(){
					var cards=player.getCards('h',function(card){
						return card.hasGaintag('twrangyi');
					});
					game.delayx();
					player.give(cards,trigger.getParent(2).player);
				},
				onremove:function(player){
					player.removeGaintag('twrangyi');
				},
			},
			twbaimei:{
				audio:2,
				trigger:{
					player:"damageBegin4",
				},
				forced:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					if(event.hasNature()) return true;
					return get.type(event.card,'trick')=='trick';
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.countCards('h')) return;
							if(get.tag(card,'natureDamage')) return 'zeroplayertarget';
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						},
					},
				},
			},
			twhuzhu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(e,player){
					return player.countCards('e')>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0
				},
				content:function(){
					'step 0'
					target.chooseCard('交给'+get.translation(player)+'一张手牌','h',true);
					'step 1'
					target.give(result.cards,player);
					'step 2'
					if(player.countGainableCards(player,'e')) target.gainPlayerCard(player,'e',true);
					'step 3'
					if(target.isDamaged()&&target.hp<=player.hp){
						player.chooseBool('是否令'+get.translation(target)+'回复1点体力？').set('ai',function(){
							return get.recoverEffect(target,player,player);
						});
					}
					'step 4'
					if(result.bool) target.recover();
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							var eff=(target.isDamaged()&&target.hp<=player.hp)?get.recoverEffect(target,player,target):0;
							if(eff<=0&&!player.countGainableCards(target,'e')) return -1;
							return eff;
						},
					},
				},
			},
			twliancai:{
				audio:2,
				trigger:{player:['turnOverEnd','phaseJieshuBegin']},
				filter:function(card,player,target){
					return target=='phaseJieshuBegin'||player.countCards('h')<player.hp;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countGainableCards(player,'e')>0;
				},
				check:function(card,player){
					if(card.name=='turnOver') return true;
					if(player.isTurnedOver()) return true;
					if(player.hp-player.countCards('h')>1) return true;
					return game.hasPlayer(function(current){
						return lib.skill.twliancai.filterTarget(null,player,current)&&lib.skill.twliancai.filterAI(current);
					});
				},
				filterAI:function(target){
					var player=_status.event.player;
					var att=get.attitude(player,target);
					if(target.isDamaged()&&target.countCards('e','baiyin')&&att>0) return 2*att;
					return -att;
				},
				prompt2:function(card,player,target){
					return card.name=='phaseJieshu'?'将武将牌翻面，然后获得一名其他角色装备区内的一张牌':'将手牌摸至与体力值相同';
				},
				content:function(){
					'step 0'
					if(event.triggername=='phaseJieshuBegin') player.turnOver();
					else{
						player.draw(player.hp-player.countCards('h'));
						event.finish();
					}
					'step 1'
					player.chooseTarget('获得一名角色装备区内的一张牌',lib.skill.twliancai.filterTarget).ai=lib.skill.twliancai.filterAI;
					'step 2'
					if(result.bool){
						player.line(result.targets,'thunder');
						player.gainPlayerCard('e',true,result.targets[0]);
					}
				},
			},
			twqijia:{
				//group:'twqijia_alka',
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('e',function(card){
						return !player.getStorage('twqijia_alka').includes(get.subtype(card));
					});
				},
				filterTarget:function(card,player,target){
					return target!=player&&player.canUse({name:'sha'},target);
				},
				position:'e',
				filterCard:function(card,player){
					return !player.getStorage('twqijia_alka').includes(get.subtype(card));
				},
				content:function(){
					'step 0'
					player.addTempSkill('twqijia_alka');
					player.storage.twqijia_alka.push(get.subtype(cards[0]));
					player.useCard({name:'sha'},target,false);
				},
				subSkill:{
					alka:{
						charlotte:true,
						onremove:function(player){
							delete player.storage.twqijia_alka;
							delete player.storage.twzhuchen;
							player.unmarkSkill('twzhuchen');
						},
						init:function(player,skill){
							if(!player.storage[skill]) player.storage[skill]=[];
							if(!player.storage.twzhuchen) player.storage.twzhuchen=[];
						},
						mod:{
							globalFrom:function(from,to,distance){
								if(from.storage.twzhuchen&&from.storage.twzhuchen.includes(to)) return -Infinity;
							}
						},
					},
				},
				check:function(card){
					return 7-get.value(card);
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})-0.2;
					},
					result:{
						target:function(player,target){
							return get.effect(target,{name:'sha'},player,player);
						},
					},
				},
			},
			twzhuchen:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h',lib.skill.twzhuchen.filterCard)>0;
				},
				filterCard:function(card,player){
					var name=get.name(card,player);
					return name=='tao'||name=='jiu';
				},
				filterTarget:lib.filter.notMe,
				content:function(){
					player.addTempSkill('twqijia_alka');
					player.storage.twzhuchen.add(target);
					player.markSkill('twzhuchen');
				},
				intro:{
					content:function(content,player){
						return '至'+get.translation(content)+'的距离视为1';
					},
				},
			},
			twxiaolian:{
				audio:2,
				trigger:{global:'useCardToTarget'},
				logTarget:'target',
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.player!=player&&
					event.targets.length==1&&event.targets[0]!=player;
				},
				check:function(event,player){
					return get.effect(event.targets[0],event.card,event.player,player)<=get.effect(player,event.card,event.player,player);
				},
				content:function(){
					trigger.getParent().twxiaolian=trigger.targets[0];
					trigger.targets.length=0;
					trigger.getParent().triggeredTargets2.length=0;
					trigger.targets.push(player);
				},
				group:'twxiaolian_damage',
				subSkill:{
					distance:{
						sub:true,
						charlotte:true,
						init:function(player,skill){
							if(!player.storage[skill]) player.storage[skill]=[];
						},
						mark:true,
						marktext:'马',
						intro:{
							content:'cards',
							onunmark:'throw',
						},
						mod:{
							globalTo:function(from,to,distance){
								if(from!=to&&to.storage.twxiaolian_distance) return distance+to.storage.twxiaolian_distance.length;
							},
						},
					},
					damage:{
						sub:true,
						trigger:{player:'damageEnd'},
						direct:true,
						filter:function(event,player){
							return event.getParent(2).twxiaolian!=undefined;
						},
						content:function(){
							'step 0'
							var target=trigger.getParent(2).twxiaolian;
							event.target=target;
							player.chooseCard('是否将一张牌当做【马】置于'+get.translation(target)+'的武将牌旁？','he').ai=function(card){
								if(get.attitude(_status.event.player,_status.event.getParent('twxiaolian_damage').target)>2) return 7-get.value(card);
								return 0;
							};
							'step 1'
							if(result.bool){
								player.logSkill('twxiaolian',target);
								player.lose(result.cards,ui.special,'toStorage');
								target.addSkill('twxiaolian_distance');
								target.storage.twxiaolian_distance.addArray(result.cards);
								target.markSkill('twxiaolian_distance');
							}
						},
					},
				},
			},
			twtijin:{
				audio:2,
				trigger:{global:'useCardToPlayer'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.player!=player&&event.target!=player&&
					event.targets.length==1&&event.player.inRange(player);
				},
				logTarget:'target',
				check:function(event,player){
					return get.effect(event.targets[0],event.card,event.player,player)<=get.effect(player,event.card,event.player,player);
				},
				content:function(){
					'step 0'
					trigger.targets.length=0;
					trigger.getParent().triggeredTargets1.length=0;
					trigger.targets.push(player);
					var next=game.createEvent('twtijin_discard',null,trigger.getParent(2));
					next.player=player;
					next.target=trigger.player;
					next.setContent(function(){
						if(target.isDead()||!target.countCards('he')) return;
						player.line(target,'green');
						player.discardPlayerCard(target,true,'he');
					});
				},
			},
			twyanqin:{
				forbid:['guozhan'],
				audio:2,
				trigger:{player:'phaseBegin'},
				direct:true,
				content:function(){
					'step 0'
					var list=[];
					if(player.group!='wei') list.push('wei2');
					if(player.group!='shu') list.push('shu2');
					list.push('cancel2');
					player.chooseControl(list).set('ai',function(){
						return list.randomGet();
					}).set('prompt',get.prompt2('twyanqin'));
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('twyanqin');
						var group=result.control.slice(0,3);
						player.changeGroup(group);
					}
				},
			},
			twbaobian:{
				audio:2,
				trigger:{source:'damageBegin2'},
				filter:function(event,player){
					var card=event.card;
					if(!card||(card.name!='sha'&&card.name!='juedou')) return false;
					return event.player.group==player.group||event.player.countCards('h')>event.player.hp
				},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					if(event.player.group==player.group) return att>0;
					return att<0;
				},
				logTarget:'player',
				content:function(){
					var target=trigger.player;
					if(target.group==player.group){
						trigger.cancel();
						var num=target.maxHp-target.countCards('h');
						if(num) target.draw(num);
					}
					else{
						player.discardPlayerCard(target,'h',true,target.countCards('h')-target.hp)
					}
				},
			},
			chijie:{
				audio:true,
				forbid:['guozhan'],
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				direct:true,
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0)&&game.hasPlayer(function(current){
						return current.group!=player.group&&lib.group.includes(current.group);
					});
				},
				content:function(){
					'step 0'
					var list=lib.group.filter(function(group){
						return group!=player.group&&game.hasPlayer(function(current){
							return current.group==group;
						});
					});
					list.push('cancel2');
					player.chooseControl(list).set('prompt',get.prompt('chijie')).set('prompt2','将自己的势力变更为场上存在的一个势力').set('ai',function(){
						return list.randomGet();
					});
					'step 1'
					if(result.control!='cancel2'){
						player.logSkill('chijie');
						player.changeGroup(result.control);
					}
				},
			},
			waishi:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					let used=player.getStat('skill').waishi;
					if(used&&used>player.countMark('waishi_remover')) return false;
					return player.countCards('he')>0&&game.hasPlayer(target=>target!=player&&target.countCards('h')>0);
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>=ui.selected.cards.length;
				},
				filterCard:true,
				position:'he',
				check:function(card){
					if(!game.hasPlayer(function(current){
						return current!=_status.event.player&&current.countCards('h')>ui.selected.cards.length;
					})) return 0;
					return 6-get.value(card);
				},
				selectCard:function(){
					if(!ui.selected.targets.length) return [1,game.countGroup()];
					return [1,Math.min(ui.selected.targets[0].countCards('h'),game.countGroup())];
				},
				discard:false,
				lose:false,
				delay:0,
				content:function(){
					'step 0'
					player.choosePlayerCard(target,true,'h',cards.length);
					'step 1'
					player.swapHandcards(target,cards,result.cards);
					game.delayex();
					'step 2'
					if(target.countCards('h')>player.countCards('h')||player.group==target.group) player.draw();
				},
				ai:{
					order:7,
					result:{
						player:function(player,target){
							if(player.countCards('h')<target.countCards('h')||player.group==target.group) return 1;
							return 0.1;
						},
					},
				},
				subSkill:{
					remover:{
						charlotte:true,
						onremove:function(player){
							player.clearMark('waishi_remover',false);
						},
						intro:{
							content:'〖外使〗的发动次数+#',
						},
					},
				}
			},
			renshe:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					'step 0'
					var choiceList=[
						'将势力变更为场上现存的一个其他势力',
						'令〖外使〗的发动次数+1直到下个出牌阶段结束',
						'与另一名其他角色各摸一张牌',
					];
					var controls=['选项二'];
					if(game.hasPlayer(current=>{
						return current.group!=player.group&&lib.group.includes(current.group);
					})) controls.unshift('选项一');
					if(game.hasPlayer(current=>current!=player)) controls.push('选项三');
					player.chooseControl(controls,'cancel2').set('prompt',get.prompt('renshe')).set('choiceList',choiceList).set('ai',function(){
						if(game.hasPlayer(function(current){
							return get.attitude(player,current)>0||current.hasSkillTag('nogain');
						})) return '选项三'
						return '选项二';
					});
					'step 1'
					if(result.control=='cancel2') event.finish();
					else{
						player.logSkill('renshe');
						switch(result.control){
							case '选项一':
								event.goto(3);
								break;
							case '选项二':
								player.addMark('waishi_remover',1,false);
								player.addTempSkill('waishi_remover',{player:'phaseUseAfter'});
								event.finish();
								break;
							case '选项三':
								player.chooseTarget('请选择一名角色，与其各摸一张牌',lib.filter.notMe,true).set('ai',function(target){
									if(target.hasSkillTag('nogain')) return 0.1;
									return get.attitude(_status.event.player,target);
								})
						}
					}
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						game.asyncDraw([player,target].sortBySeat());
					}
					game.delayex();
					event.finish();
					'step 3'
					var list=lib.group.filter(function(group){
						return group!=player.group&&game.hasPlayer(function(current){
							return current.group==group;
						});
					});
					player.chooseControl(list).set('prompt',get.prompt('chijie')).set('prompt2','将自己的势力变更为场上存在的一个势力').set('ai',function(){
						return list.randomGet();
					});
					'step 4'
					player.changeGroup(result.control);
				},
			},
			//英文版特典武将凯撒
			zhengfu:{
				trigger:{
					player:"useCardToPlayered",
				},
				check:function (event,player){
					return get.attitude(player,event.target)<0;
				},
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:"target",
				line:false,
				content:function(){
					'step 0'
					player.line(trigger.target,{color:[220, 90, 139]});
					player.chooseControl(['basic','trick','equip']).set('ai',function(){
						var player=_status.event.target;
						if(!player.countCards('h','sha')&&player.countCards('h','shan')) return 'trick';
						return 'basic';
					}).set('prompt','请选择一种牌的类别').set('target',trigger.target);
					'step 1'
					trigger.target.chooseCard('he','交给'+get.translation(player)+'一张'+get.translation(result.control)+'牌，否则此【杀】不可被闪避',function(card){
						return get.type2(card)==_status.event.control;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',trigger.target.countCards('h','shan')).set('control',result.control);
					'step 2'
					if(result.bool){
						var cards=result.cards;
						trigger.target.give(cards,player);
					}
					else{
						trigger.getParent().directHit.add(trigger.target);
						game.delay();
					}
				}
			}
		},
		perfectPair:{
			tw_liufuren:['yuanshao'],
			tw_xiahoushang:['caopi'],
		},
		characterReplace:{
			tw_caocao:['tw_caocao','jsrg_caocao','yj_caocao'],
			mateng:['tw_mateng','mateng'],
			xiahouen:['tw_xiahouen','jsrg_xiahouen'],
			jiangji:['tw_jiangji','jiangji'],
			baoxin:['tw_baoxin','baoxin'],
			yanxiang:['yanxiang','tw_yanxiang'],
			liwei:['liwei','tw_liwei'],
		},
		dynamicTranslate:{
			twfeifu:function(player){
				var str='锁定技，转换技。';
				if(!player.storage.twfeifu) str+='<span class="bluetext">';
				str+='阴：当你成为【杀】的唯一目标后；';
				if(!player.storage.twfeifu) str+='</span>';
				if(player.storage.twfeifu) str+='<span class="bluetext">';
				str+='阳：当你使用【杀】指定唯一目标后；';
				if(player.storage.twfeifu) str+='</span>';
				str+='目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。';
				return str;
			},
			twfengpo:function(player){
				if(player.storage.twfengpo) return '当你使用【杀】或【决斗】指定唯一目标后，你可观看目标角色的手牌并选择一项：⒈摸X张牌。⒉令此牌的伤害值基数+X（X为其手牌中的红色牌数）。';
				return '①当你使用【杀】或【决斗】指定唯一目标后，你可观看目标角色的手牌并选择一项：⒈摸X张牌。⒉令此牌的伤害值基数+X（X为其手牌中的♦数）。②当你杀死一名角色后，你将〖凤魄①〗中的“♦数”改为“红色牌数”。';
			},
			twjiexun:function(player){
				return lib.translate[player.hasSkill('funan_jiexun')?'twjiexunx_info':'twjiexun_info'];
			},
			twzhenliang: function (player) {
				if(player.storage.twzhenliang) return '转换技。阴：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。<span class="bluetext">阳：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。</span>';
				return '转换技。<span class="bluetext">阴：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。</span>阳：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。<span class="bluetext">然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。</span>';
			},
			twdengjian:function(player){
				let str='①其他角色的弃牌阶段结束时，你可以弃置一张牌并随机获得本回合所有造成伤害的牌对应的实体牌的其中一张与你本轮以此法获得的牌的颜色均不同的【杀】，称为“剑法”。';
				if(player.hasSkill('twdengjian_ban')) str='<span style="opacity:0.5">'+str+'</span>';
				str+='②你使用“剑法”牌不计入次数限制。';
				return str;
			},
		},
		translate:{
			tw_beimihu:'TW卑弥呼',
			tw_beimihu_prefix:'TW',
			nashime:'难升米',
			tw_xiahouba:'TW夏侯霸',
			tw_xiahouba_prefix:'TW',
			tw_zumao:'TW祖茂',
			tw_zumao_prefix:'TW',
			tw_caoang:'TW曹昂',
			tw_caoang_prefix:'TW',
			tw_dingfeng:'TW丁奉',
			tw_dingfeng_prefix:'TW',
			tw_caohong:'TW将曹洪',
			tw_caohong_prefix:'TW将',
			tw_maliang:'TW马良',
			tw_maliang_prefix:'TW',

			twyanqin:'姻亲',
			twyanqin_info:'准备阶段，你可以将势力变更为魏或蜀。',
			twbaobian:'豹变',
			twbaobian_info:'当你使用【杀】或【决斗】造成伤害时，若目标角色的势力与你相同，则你可以防止此伤害，然后其将手牌数补充至与体力值相同。若不同且其手牌数大于体力值，则你可以将其手牌弃置至与其体力值相同。',
			twtijin:'替巾',
			twtijin_info:'当你攻击范围内的一名其他角色使用【杀】指定另一名其他角色为目标时，你可以将此【杀】的目标改为你。若如此做，此【杀】结算完成后，你弃置该角色的一张牌。',
			twxiaolian:'孝廉',
			twxiaolian_info:'当一名其他角色使用【杀】指定另一名其他角色为目标时，你可以将此【杀】的目标改为你。若如此做，当你受到此【杀】的伤害后，你可以将一张牌置于此【杀】原目标的武将牌旁，称为“马”，且令其获得如下效果：其他角色计算至其的距离+X（X为其武将牌旁的“马”数）。',
			twqijia:'弃甲',
			twqijia_info:'出牌阶段，你可以弃置一张装备区内的牌（每种类型的装备牌限一次），然后视为对攻击范围内的一名其他角色使用了一张【杀】。',
			twzhuchen:'诛綝',
			twzhuchen_info:'出牌阶段，你可以弃置一张【桃】或【酒】并选择一名其他角色。你与其的距离视为1直到此阶段结束。',
			twhuzhu:'护主',
			twhuzhu_info:'出牌阶段限一次，若你的装备区内有牌，则你可以令一名其他角色交给你一张手牌，然后获得你装备区内的一张牌。若其体力值不大于你，则你可以令其回复1点体力。',
			twliancai:'敛财',
			twliancai_info:'结束阶段，你可以将武将牌翻面，然后获得一名其他角色装备区内的一张牌。当你的武将牌翻面时，你可以将手牌补至与体力值相同。',
			twrangyi:'攘夷',
			twrangyi2:'攘夷',
			twrangyi_info:'出牌阶段限一次，你可以将所有手牌交给一名其他角色，然后令其选择一项：1.使用其中的一张牌，并于此牌被使用时将其余的牌交还给你。2.受到来自你的1点伤害。',
			twbaimei:'白眉',
			twbaimei_info:'锁定技，若你没有手牌，则防止你受到的所有属性伤害和锦囊牌造成的伤害。',
			chijie:'持节',
			chijie_info:' 游戏开始时，你可以选择一个现存势力，你的势力视为该势力。',
			waishi:'外使',
			waishi_info:' 出牌阶段限一次，你可以用至多X张牌交换一名其他角色等量的手牌（X为现存势力数），然后若其与你势力相同或手牌多于你，你摸一张牌。',
			renshe:'忍涉',
			renshe_info:'当你受到伤害后，你可以选择一项：将势力改为现存的另一个势力；或可以额外发动一次“外使”直到你的下个出牌阶段结束；或与另一名其他角色各摸一张牌。',
			tw_gexuan:'TW葛玄',
			tw_gexuan_prefix:'TW',
			twdanfa:'丹法',
			twdanfa_info:'准备阶段或结束阶段开始时，你可将一张牌置于武将牌上，称为“丹”。每回合每种花色限一次，当你使用牌时，若“丹”中有与此牌花色相同的牌，则你摸一张牌。',
			twlingbao:'灵宝',
			twlingbao_info:'出牌阶段限一次，你可以将两张花色不同的“丹”置入弃牌堆。若这两张牌：均为红色，你令一名其他角色回复1点体力；均为黑色，你弃置一名其他角色区域内至多两张区域不同牌；颜色不同，则你令一名角色摸一张牌，并令另一名角色弃置一张牌。',
			twsidao:'司道',
			twsidao_info:'游戏开始时，你选择一张“法宝”置入装备区。准备阶段，若你以此法选择的法宝在牌堆/弃牌堆中，则你使用之。',
			gx_lingbaoxianhu:'灵宝仙壶',
			gx_lingbaoxianhu_info:'锁定技，当你造成点数大于1的伤害后，或有角色死亡后，你加1点体力上限并回复1点体力。',
			gx_taijifuchen:'太极拂尘',
			gx_taijifuchen_info:'锁定技，当你使用【杀】指定目标后，你令目标角色选择一项：①弃置一张牌，若此牌和【杀】花色相同，则你获得之。②其不可响应此【杀】。',
			gx_chongyingshenfu:'冲应神符',
			gx_chongyingshenfu_info:'锁定技。①当你受到牌造成的伤害后，你记录此牌的名称。②当你受到〖冲应神符①〗记录过的牌造成的伤害时，你令此牌伤害-1。',
			tw_dongzhao:'TW董昭',
			tw_dongzhao_prefix:'TW',
			twmiaolve:'妙略',
			twmiaolve_info:'游戏开始时，你获得两张【瞒天过海】。当你受到1点伤害后，你可选择：①获得一张【瞒天过海】并摸一张牌。②获得一张智囊。',
			twyingjia:'迎驾',
			twyingjia_info:'一名角色的回合结束时，若你本回合内使用过两张或更多的同名锦囊牌，则你可弃置一张手牌并令一名角色进行一个额外回合。',
			dz_mantianguohai:'瞒天过海',
			dz_mantianguohai_info:'此牌不计入拥有者的手牌上限。出牌阶段，对一至两名区域内有牌的其他角色使用。你获得目标角色一张牌，然后依次交给每名目标角色各一张牌。',
			jiachong:'TW贾充',
			jiachong_prefix:'TW',
			beini:'悖逆',
			beini_info:'出牌阶段限一次，你可以选择一名体力值不小于你的角色，令你或其摸两张牌，然后未摸牌的角色视为对摸牌的角色使用一张【杀】。',
			dingfa:'定法',
			dingfa_info:'弃牌阶段结束时，若本回合你失去的牌数不小于你的体力值，你可以选择一项：1、回复1点体力；2、对一名其他角色造成1点伤害。',
			duosidawang:'朵思大王',
			equan:'恶泉',
			equan_info:'锁定技。①当有角色于你的回合内受到伤害后，其获得X枚“毒”（X为伤害值）。②准备阶段，你令所有拥有“毒”标记的角色移去所有“毒”标记并失去等量的体力。③当有角色因〖恶泉②〗进入濒死状态时，你令其所有技能失效直到回合结束。',
			manji:'蛮汲',
			manji_info:'锁定技。其他角色失去体力后，若你的体力值：不大于该角色，你回复1点体力；不小于该角色，你摸一张牌。',
			wuban:'TW吴班',
			wuban_prefix:'TW',
			jintao:'进讨',
			jintao_info:'锁定技，你使用【杀】无距离限制且次数上限+1。你于出牌阶段内使用的第一张【杀】伤害+1，第二张【杀】不可被响应。',
			yuejiu:'TW乐就',
			yuejiu_prefix:'TW',
			cuijin:'催进',
			cuijin_info:'当你或你攻击范围内的角色使用【杀】时，你可以弃置一张牌并获得如下效果：此【杀】的伤害值基数+1，且当此【杀】结算结束后，若未造成过伤害，则你对使用者造成1点伤害。',
			tw_zhaoxiang:'TW赵襄',
			tw_zhaoxiang_prefix:'TW',
			twfuhan:'扶汉',
			twfuhan_info:'限定技。准备阶段开始时时，你可以移去所有"梅影"标记，然后从五张未登场的蜀势力武将牌中选择一名获得其所有技能，将体力上限数调整为以此技能移去所有“梅影”标记的数量（最少为2，最多为8）并回复1点体力，然后从牌堆/弃牌堆/场上获得【梅影枪】。',
			twqueshi:'鹊拾',
			twqueshi_info:'游戏开始时，你将【梅影枪】置于你的装备区。',
			meiyingqiang:'梅影枪',
			meiyingqiang_info:'当你于其他角色的回合内第一次失去牌时，你可以使用一张【杀】。',
			tw_fuwan:'TW伏完',
			tw_fuwan_prefix:'TW',
			twmoukui:'谋溃',
			twmoukui_info:'当你使用【杀】指定目标后，你可以选择一项：①摸一张牌；②弃置该角色的一张牌；③背水：若此【杀】未因造成伤害而令该角色进入过濒死状态，则该角色弃置你的一张牌。',
			tw_yujin:'SP于禁',
			tw_yujin_prefix:'SP',
			xinzhenjun:'镇军',
			xinzhenjun_info:'出牌阶段开始时，你可以将一张牌交给一名其他角色，令其选择是否使用一张不为黑色的【杀】。若其选择是，则你于此【杀】结算完成后摸1+X张牌(X为此【杀】造成的伤害总点数)。若其选择否，则你对其或其攻击范围内的一名其他角色造成1点伤害。',
			tw_hucheer:'TW胡车儿',
			tw_hucheer_prefix:'TW',
			twshenxing:'神行',
			twshenxing_info:'锁定技。若你的装备区内没有坐骑牌，则你至其他角色的距离-1且手牌上限+1。',
			twdaoji:'盗戟',
			twdaoji_info:'出牌阶段限一次，你可以弃置一张非基本牌并选择一名攻击范围内的角色，获得其一张牌。若你以此法得到的牌为：基本牌，你摸一张牌；装备牌，你使用此牌并对其造成1点伤害。',
			tw_hejin:'TW何进',
			tw_hejin_prefix:'TW',
			twmouzhu:'谋诛',
			twmouzhu_info:'出牌阶段限一次，你可以选择一名其他角色A。你令除A外所有体力值小于等于你的其他角色依次选择是否交给你一张牌。若你以此法得到的牌数X：等于0，你和所有进行选择的角色依次失去1点体力。大于0，你令A选择由你视为对其使用一张伤害值基数为X的【杀】或【决斗】。',
			twyanhuo:'延祸',
			twyanhuo_info:'当你死亡时，你可以选择一项：①令一名其他角色弃置X张牌。②令X名其他角色依次弃置一张牌。（X为你的牌数）',
			tw_mayunlu:'TW马云禄',
			tw_mayunlu_prefix:'TW',
			twfengpo:'凤魄',
			twfengpo_info:'①当你使用【杀】或【决斗】指定唯一目标后，你可观看目标角色的手牌并选择一项：⒈摸X张牌。⒉令此牌的伤害值基数+X（X为其手牌中的♦数）。②当你杀死一名角色后，你将〖凤魄①〗中的“♦数”改为“红色牌数”。',
			tw_re_caohong:'TW曹洪',
			tw_re_caohong_prefix:'TW',
			twyuanhu:'援护',
			twyuanhu_info:'出牌阶段限一次。你可将一张装备牌置入一名角色的装备区内。若此牌为：武器牌，你弃置与其距离为1的另一名角色区域的一张牌；防具牌，其摸一张牌；坐骑牌或宝物牌，其回复1点体力。然后若其体力值或手牌数不大于你，则你摸一张牌，且你可以于本回合的结束阶段发动一次〖援护〗。',
			twjuezhu:'决助',
			twjuezhu_info:'限定技。准备阶段，你可废除一个坐骑栏，令一名角色获得〖飞影〗并废除判定区。该角色死亡后，你恢复以此法废除的装备栏。',
			tw_zangba:'TW臧霸',
			tw_zangba_prefix:'TW',
			twhanyu:'捍御',
			twhanyu_info:'锁定技。游戏开始时，你获得牌堆中的基本牌，锦囊牌，装备牌各一张。',
			twhengjiang:'横江',
			twhengjiang_info:'出牌阶段限一次，当你使用基本牌或普通锦囊牌指定唯一目标后，你可将此牌的目标改为攻击范围内的所有合法目标，然后你于此牌结算结束后摸X张牌（X为因响应此牌而使用或打出过牌的角色数）。',
			tw_huojun:'TW霍峻',
			tw_huojun_prefix:'TW',
			twsidai:'伺怠',
			twsidai_info:'限定技。出牌阶段，你可以将手牌区内的所有基本牌当做【杀】使用（无距离和次数限制）。若此牌对应的实体牌中：包含【闪】，则目标角色成为此牌的目标后，需弃置一张基本牌，否则不可响应此牌；包含【桃】，则当目标角色受到此牌的伤害后，其减1点体力上限；包含【酒】，则当目标角色受到此牌的伤害时，此伤害×2。',
			twjieyu:'竭御',
			twjieyu_info:'每轮限一次。结束阶段开始时，或当你于一轮内第一次受到伤害后，你可以弃置所有手牌，然后从弃牌堆中获得不同牌名的基本牌各一张。',
			tw_liuhong:'TW刘宏',
			tw_liuhong_prefix:'TW',
			twyujue:'鬻爵',
			twyujue_give:'鬻爵',
			twyujue_info:'①其他角色的出牌阶段内，可以交给你任意张牌（每阶段上限为两张）。②当你于回合外获得其他角色的一张牌后，你可令其选择本回合内未选择过的一项：⒈弃置攻击范围内一名角色的一张牌。⒉下一次使用牌时，从牌堆中获得一张同类别的牌。',
			twgezhi:'革制',
			twgezhi_info:'①当你于出牌阶段内首次使用某种类别的牌时，你可以重铸一张手牌。②出牌阶段结束时，若你本阶段内因〖革制①〗失去过至少两张牌，则你可以令一名角色选择获得一个其未获得过的效果：⒈攻击范围+2；⒉手牌上限+2；⒊加1点体力上限。',
			twfengqi:'烽起',
			twfengqi_info:'主公技，锁定技。①其他群势力角色发动〖鬻爵①〗时，将每阶段上限改为四张。②以其他角色为目标的〖革制②〗结算结束后，目标角色可以获得其武将牌上的主公技。',
			tw_caocao:'TW曹操',
			tw_caocao_prefix:'TW',
			twlingfa:'令法',
			twlingfa_info:'①第一轮游戏开始时，你可选择获得如下效果直到本轮结束：其他角色使用【杀】时，若其有牌，则其需弃置一张牌，否则受到你造成的1点伤害。②第二轮游戏开始时，你可选择获得如下效果直到本轮结束：其他角色使用【桃】结算结束后，若其有牌，则其需交给你一张牌，否则受到你造成的1点伤害。③第三轮游戏开始时，你失去〖令法〗并获得〖治暗〗。',
			twzhian:'治暗',
			twzhian_info:'每回合限一次。一名角色使用装备牌或延时锦囊牌后，你可选择：⒈弃置位于场上的此牌。⒉弃置一张手牌并获得位于场上的此牌。⒊对其造成1点伤害。',
			tw_zhangmancheng:'TW张曼成',
			tw_zhangmancheng_prefix:'TW',
			twfengji:'蜂集',
			twfengji_info:'出牌阶段开始时，若你没有“示”，则你可以将一张牌作为“示”置于武将牌上并施法：从牌堆中获得X张与“示”牌名相同的牌，然后移去“示”。',
			twyiju:'蚁聚',
			twyiju_info:'非锁定技。若你的武将牌上有“示”，则：①你使用【杀】的次数上限和攻击范围的基数改为你的体力值。②当你受到伤害时，你移去“示”，且令此伤害+1。',
			twbudao:'布道',
			twbudao_info:'限定技。准备阶段，你可减1点体力上限，回复1点体力并选择获得一个〖布道〗技能池里的技能（三选一）。然后你可以令一名其他角色也获得此技能并交给你一张牌。',
			twzhouhu:'咒护',
			twzhouhu_info:'出牌阶段限一次。你可以弃置一张红色手牌并施法：回复X点体力。',
			twharvestinori:'丰祈',
			twharvestinori_info:'出牌阶段限一次。你可以弃置一张黑色手牌并施法：摸2X张牌。',
			twzuhuo:'阻祸',
			twzuhuo_info:'出牌阶段限一次。你可以弃置一张非基本牌并施法：防止你受到的下X次伤害。',
			twzhouzu:'咒诅',
			twzhouzu_info:'出牌阶段限一次。你可以对一名其他角色施法：其弃置X张牌，然后你对其造成1点雷电伤害。',
			twhuangjin:'黄巾',
			twhuangjin_info:'锁定技。当你一名角色使用【杀】指定你为目标时，若此【杀】有点数，你判定，若点数与此【杀】点数差值不大于1，则此【杀】对你无效。',
			twguimen:'鬼门',
			twguimen_info:'锁定技。当你弃置牌时，若其中有♠牌，你为每一张♠牌判定，若此牌点数与结果之差不大于1，你对一名其他角色造成2点雷电伤害。',
			twdidao:'地道',
			twdidao_info:'一名角色的判定牌生效前，你可以打出一张牌作为判定牌并获得原判定牌。若你以此法打出的牌与原判定牌颜色相同，你摸一张牌。',
			tw_chengpu:'TW程普',
			tw_chengpu_prefix:'TW',
			twlihuo:'疠火',
			twlihuo2:'疠火',
			twlihuo3:'疠火',
			twlihuo_info:'①当你声明使用普【杀】后，你可以将此【杀】改为火【杀】。此牌使用结算结束后，若有角色因此【杀】造成的伤害进入过濒死状态，则你失去1点体力。②当你使用火【杀】选择目标后，你可为此牌增加一个目标。',
			twchunlao:'醇醪',
			twchunlao_info:'①准备阶段，若场上没有“醇”，则你可将一名角色区域内的一张牌置于其武将牌上，称为“醇”。②一名角色使用【杀】时，若其有“醇”，则其可以交给你一张牌，令此【杀】的伤害值基数+1。③一名角色进入濒死状态时，若其有“醇”，则你可以移去“醇”并摸一张牌，然后令其回复1点体力。',
			tw_guohuai:'TW郭淮',
			tw_guohuai_prefix:'TW',
			twjingce:"精策",
			twjingce_info:"当你于出牌阶段使用第X张牌结算完毕后，你可以摸两张牌（X为你的体力值）。若此阶段你此前已摸过牌或本回合造成过伤害，你获得一枚“策”标记。",
			yuzhang:"御嶂",
			yuzhang_info:"你可以弃置一枚“策”标记，然后跳过一个阶段。当你受到伤害后，你可弃置一枚“策”标记，然后选择一项：⒈令伤害来源弃置两张牌；⒉令伤害来源本回合不能再使用或打出牌。",
			tw_caozhao:'曹肇',
			twfuzuan:'复纂',
			twfuzuan_info:'出牌阶段限一次/当你受到伤害后/当你对其他角色造成伤害后，你可选择一名拥有转换技的角色，变更其的一个转换技的的状态。',
			twchongqi:'宠齐',
			twchongqi_info:'锁定技。游戏开始时，你令所有角色获得〖非服〗。然后你可减1点体力上限，令一名其他角色获得〖复纂〗。',
			twfeifu:'非服',
			twfeifu_info:'锁定技，转换技。阴：当你成为【杀】的唯一目标后；阳：当你使用【杀】指定唯一目标后；目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。',
			tw_wangchang:'TW王昶',
			tw_wangchang_prefix:'TW',
			twkaiji:'开济',
			twkaiji_info:'准备阶段，你可令至多X名角色各摸一张牌（X为本局游戏内进入过濒死状态的角色数+1）。若有角色以此法获得了非基本牌，则你摸一张牌。',
			twshepan:'慑叛',
			twshepan_info:'每回合限一次。当你成为其他角色使用牌的目标后，你可选择一项：⒈摸一张牌。⒉将其区域内的一张牌置于牌堆顶。然后若你的手牌数与其相等，则你将此技能的发动次数归零，且可以令此牌对你无效。',
			tw_wangcan:'TW王粲',
			tw_wangcan_prefix:'TW',
			twdianyi:'典仪',
			twdianyi_info:'锁定技。你的回合结束时，若你本回合内：造成过伤害，你弃置所有手牌；未造成过伤害，你将手牌数调整至四张。',
			twyingji:'应机',
			twyingji_wuxie:'应机',
			twyingji_info:'当你于回合外需要使用或打出一张基本牌或普通锦囊牌时，若你没有手牌，则你可摸一张牌，然后视为使用或打出此牌。',
			twshanghe:'觞贺',
			twshanghe_info:'限定技。当你进入濒死状态时，你可令所有其他角色依次交给你一张牌；若这些牌中没有【酒】，则你将体力回复至1点。',
			tw_wujing:'TW吴景',
			tw_wujing_prefix:'TW',
			twfenghan:'锋捍',
			twfenghan_info:'每回合限一次。当你使用【杀】或伤害类锦囊牌指定第一个目标后，你可令至多X名角色各摸一张牌（X为此牌的目标数）。',
			twcongji:'从击',
			twcongji_info:'当你的红色牌于回合外因弃置而进入弃牌堆后，你可令一名其他角色获得这些牌。',
			old_quancong:'TW全琮',
			old_quancong_prefix:'TW',
			zhenshan:'振赡',
			zhenshan_info:'每回合限一次，当你需要使用或打出一张基本牌时，你可以与一名手牌数少于你的角色交换手牌，视为使用或打出此牌。',
			tw_tianyu:'TW田豫',
			tw_tianyu_prefix:'TW',
			gz_tw_tianyu:'田豫',
			twzhenxi:'震袭',
			twzhenxi_info:'每回合限一次。当你使用【杀】指定目标后，你可选择一项：⒈弃置其X张手牌（X为你至其的距离）；⒉将其装备区或判定区内的一张牌移动到另一名角色的装备区或判定区内。若其体力值大于你或其体力值为全场最高，则你可以改为依次执行以上两项。',
			twyangshi:'扬师',
			twyangshi_info:'锁定技。当你受到伤害后，若场上有不在你攻击范围内的其他角色，则你令攻击范围+1；若没有，则你从牌堆中获得一张【杀】。',
			tw_puyangxing:'濮阳兴',
			twzhengjian:'征建',
			twzhengjian_info:'游戏开始时，你可选择获得一项效果：⒈其他角色的出牌阶段结束时，若其本阶段内未使用过非基本牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果二。⒉其他角色的出牌阶段结束时，若其本阶段内未得到过牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果一。',
			twzhongchi:'众斥',
			twzhongchi_info:'锁定技，限定技。当你因〖征建〗而得到牌后，若已经有至少X名角色因〖征建〗而交给你过牌（X为游戏人数的一半且向上取整），则你回复2点体力，且于本局游戏内受到渠道为【杀】的伤害+1，且你将〖征建〗中的“其须交给你一张牌”改为“你可对其造成1点伤害”。',
			tw_bingyuan:'邴原',
			twbingde:'秉德',
			twbingde_info:'出牌阶段限一次。你可以选择一个本阶段未选择过的花色并弃置一张牌，你摸等同于本阶段你使用此花色的牌数，然后若你以此法弃置的牌的花色与你选择的花色相同，你令你〖秉德〗于此阶段发动的次数上限+1。',
			twqingtao:'清滔',
			twqingtao_info:'①摸牌阶段结束时，你可以重铸一张牌。若此牌为【酒】或非基本牌，你摸一张牌。②结束阶段，若你本回合未发动〖清滔①〗，你可以发动〖清滔①〗。',
			tw_jiangji:'TW蒋济',
			tw_jiangji_prefix:'TW',
			twjichou:'急筹',
			twjichou_info:'①每回合限一次。你可以视为使用一张未被〖急筹①〗记录过的普通锦囊牌并记录此牌。②你无法响应或{使用对应实体牌包含你的手牌的}〖急筹①〗记录过的锦囊牌。③出牌阶段限一次。你可将手牌中的一张〖急筹①〗记录过的锦囊牌交给其他角色。',
			twjilun:'机论',
			twjilun_info:'当你受到伤害后，你可以摸X张牌（X为〖急筹①〗记录数且至少为1，至多为5），或视为使用一张〖急筹①〗记录过且未被〖机论〗记录过的普通锦囊牌并记录此牌。',
			tw_niufudongxie:'牛辅董翓',
			baonvezhi_faq:'关于暴虐值',
			baonvezhi_faq_info:'<br><li>当你造成或受到伤害后，你获得等量的暴虐值；<li>暴虐值的上限为5。',
			twjuntun:'军屯',
			twjuntun_info:'①游戏开始时或当其他角色死亡后，你可令一名角色获得〖凶军〗。②当其他角色造成伤害后，若其拥有〖凶军〗，你获得等同于此次伤害值的暴虐值。',
			twxiongxi:'凶袭',
			twxiongxi_info:'出牌阶段限一次。你可以弃置X张牌对一名其他角色造成1点伤害（X为你的暴虐值与暴虐值上限之差）。',
			twxiafeng:'黠凤',
			twxiafeng_info:'出牌阶段开始时，你可消耗至多3点暴虐值并获得如下效果直到回合结束：你使用的前X张牌没有距离和次数限制且不可被响应，你的手牌上限+X（X为你以此法消耗的暴虐值）。',
			tw_bn_1:'一点',
			tw_bn_2:'两点',
			tw_bn_3:'三点',
			tw_bn_1_bg:'一',
			tw_bn_2_bg:'二',
			tw_bn_3_bg:'三',
			twxiongjun:'凶军',
			twxiongjun_info:'锁定技，每回合限一次。当你造成伤害后，所有拥有〖凶军〗的角色摸一张牌。',
			tw_jianshuo:'蹇硕',
			twkunsi:'困兕',
			twkunsi_info:'出牌阶段，你可以视为对一名未以此法选择过的其他角色使用一张【杀】。若此【杀】未造成伤害，其获得〖令戮〗直到你下回合开始，且当你成为其〖令戮〗的目标后，其可令你于〖令戮〗失败时进行两次结算。',
			twlinglu:'令戮',
			twlinglu_info:'强令：①任务：执行角色于其下回合结束前造成的伤害不小于2点。②成功：其摸两张牌。③失败：其失去1点体力。',
			tw_mateng:'TW马腾',
			tw_mateng_prefix:'TW',
			twxiongzheng:'雄争',
			twxiongzheng_info:'一轮游戏开始时，①若你上一轮发动过〖雄争〗且选择过“雄争”角色，你可以选择一项：1.视为对任意名上一轮内未对“雄争”角色造成过伤害的角色依次使用一张【杀】；2.令任意名上一轮对“雄争”角色造成过伤害的角色摸两张牌。②你可以选择一名未以此法选择过的角色，称为“雄争”角色。',
			twluannian:'乱年',
			twluannian_info:'主公技。其他群势力角色的出牌阶段限一次。其可以弃置X张牌并对“雄争”角色造成1点伤害（X为所有角色于本轮发动〖乱年〗的次数+1）。',
			tw_baoxin:'TW鲍信',
			tw_baoxin_prefix:'TW',
			twmutao:'募讨',
			twmutao_info:'出牌阶段限一次。你可以选择一名角色，令其将手牌中所有的【杀】依次交给其下家开始的每一名角色。然后其对最后一名以此法获得【杀】的角色A造成X点伤害（X为A手牌中【杀】的数量且至多为2）。',
			twyimou:'毅谋',
			twyimou_info:'当一名角色受到伤害后，若其存活且你至其的距离不大于1，你可以选择一项：1.令其从牌堆中获得一张【杀】；2.令其将一张手牌交给另一名角色并摸两张牌；3.背水：将所有手牌交给其（若受伤角色为你则跳过此步骤），然后依次执行上述所有选项。',
			tw_liufuren:'刘夫人',
			twzhuidu:'追妒',
			twzhuidu_info:'出牌阶段限一次。你可以选择一名已受伤的其他角色并选择一项：1.对其造成1点伤害；2.弃置其装备区里的一张牌；3.背水：若该角色为女性，弃置一张牌，然后依次执行上述所有选项。',
			twshigong:'示恭',
			twshigong_info:'限定技。当你于回合外进入濒死状态时，你可以令当前回合角色选择一项：1.加1点体力上限并回复1点体力，摸一张牌，然后令你将体力回复至体力上限；2.弃置X张手牌，然后令你将体力回复至1点（X为其体力值）。',
			tw_wangling:'TW王淩',
			tw_wangling_prefix:'TW',
			twmibei:'秘备',
			twmibei_info:'使命技。①使命：使用每种类型且牌名不同的牌各两张。②成功：当你使用牌后，若你于本次事件完成了〖秘备①〗的使命，你获得〖谋立〗。③失败：出牌阶段结束时，若你本回合未使用过牌，你本回合手牌上限-1并重置〖秘备〗。',
			twxingqi:'星启',
			twxingqi_info:'觉醒技。准备阶段，若场上的牌数大于你的体力值，你回复1点体力，然后若〖秘备〗：未完成，你从牌堆中获得每种类型的牌各一张；已完成，本局游戏你使用牌无距离限制。',
			twmouli:'谋立',
			twmouli_backup:'谋立',
			twmouli_info:'每回合限一次。你可以使用牌堆中的一张基本牌。',
			tw_zhugeguo:'TW诸葛果',
			tw_zhugeguo_prefix:'TW',
			twqirang:'祈禳',
			twqirang_info:'当有装备牌进入你的装备区时，你可以从牌堆中获得一张锦囊牌，你本阶段使用此牌无距离限制且不可被响应，且当你使用此牌时，你可以为这张牌增加或减少一个目标。',
			twyuhua:'羽化',
			twyuhua_info:'锁定技。①你的非基本牌不计入手牌上限。②当你于回合外失去牌后，若其中有非基本牌，你可以卜算X，然后你可以摸X张牌（X为其中非基本牌数且至多为5）。',
			tw_fanchou:'TW樊稠',
			tw_fanchou_prefix:'TW',
			twxingluan:'兴乱',
			twxingluan_info:'结束阶段，你可以亮出牌堆顶的六张牌，然后你可以选择一种类型的牌并分配给任意角色（每名角色至多三张）。然后所有以此法得到过牌且得到的牌数不少于你的角色失去1点体力。',
			tw_xujing:'TW许靖',
			tw_xujing_prefix:'TW',
			twboming:'博名',
			twboming_info:'①出牌阶段限两次。你可以将一张牌交给一名其他角色。②结束阶段，若所有其他角色于此回合得到的牌数之和大于1，你摸两张牌。',
			twejian:'恶荐',
			twejian_info:'当其他角色得到你的牌后，若其有其他与此牌类型相同的牌，你可以令其选择一项：1.受到你造成的1点伤害；2.弃置这些牌。',
			tw_zhangfei:'TW张飞',
			tw_zhangfei_prefix:'TW',
			twxuhe:'虚吓',
			twxuhe_info:'当你使用的【杀】被【闪】抵消时，你可以令其选择一项：1.受到你造成的1点伤害；2.本回合你使用的下一张牌对其造成伤害时，此伤害+2。',
			tw_xuezong:'TW薛综',
			tw_xuezong_prefix:'TW',
			twjiexun:'诫训',
			twjiexun_info:'结束阶段，你可以选择一个花色并令一名其他角色摸等同于场上此花色牌数张牌，然后其弃置X张牌。若其以此法弃置了所有牌，你选择一项：1.摸X张牌，然后将X归零；2.修改〖复难〗和〖诫训〗（X为此前〖诫训〗的发动次数）。',
			twfunanx:'复难·改',
			twjiexunx:'诫训·改',
			twfunanx_info:'当其他角色使用或打出牌响应你使用的牌时，你可获得其使用或打出的牌。',
			twjiexunx_info:'结束阶段，你可选择一个花色并令一名其他角色摸等同于场上此花色牌数张牌，然后其弃置X张牌（X为此前〖诫训〗的发动次数）。',
			tw_zhangning:'TW张宁',
			tw_zhangning_prefix:'TW',
			twxingzhui:'星坠',
			twxingzhui_info:'出牌阶段限一次。你可以失去1点体力并施法：亮出牌堆顶2X张牌，若其中有黑色牌，则你可令一名其他角色获得这些黑色牌。若黑色牌的数量不小于X，则你对其造成X点雷电伤害。',
			twjuchen:'聚尘',
			twjuchen_info:'结束阶段，若你的手牌数和体力值均不为全场最多，则你可以令所有角色弃置一张牌，然后你获得其中的红色牌。',
			tw_yufuluo:'于夫罗',
			twjiekuang:'竭匡',
			twjiekuang_info:'每回合限一次。当一名体力值小于你的角色成为其他角色使用基本牌或普通锦囊牌的唯一目标后，若没有角色处于濒死状态，你可以失去1点体力或减1点体力上限，将此牌的目标转移给你。然后此牌结算结束后，若此牌未造成伤害且此牌的使用者是你使用此牌名的牌的合法目标，你视为对此牌的使用者使用一张同名牌。',
			twneirao:'内扰',
			twneirao_info:'觉醒技。准备阶段，若你的体力值与体力上限之和不大于9，你失去〖竭匡〗，弃置所有牌并从牌堆或弃牌堆中获得等量的【杀】，然后获得〖乱掠〗。',
			twluanlve:'乱掠',
			twluanlve_info:'①出牌阶段，你可以将X张【杀】当做【顺手牵羊】对一名本阶段未成为过【顺手牵羊】的目标的角色使用（X为你以此法使用【顺手牵羊】的次数）。②当你使用牌时，若此牌为【顺手牵羊】，你令此牌不能被响应。',
			tw_fengxí:'冯习',
			twqingkou:'轻寇',
			twqingkou_info:'准备阶段，你可以视为对一名其他角色使用一张【决斗】。然后此牌的伤害来源摸一张牌，若伤害来源包括你，你跳过本回合的判定阶段和弃牌阶段。',
			tw_zhangji:'张既',
			twdingzhen:'定镇',//丁真
			twdingzhen_info:'一轮游戏开始时，你可以选择任意名你至其距离不大于X的角色（X为你的体力值），这些角色选择一项：1.弃置一张【杀】；2.本轮其于回合内使用的第一张牌不能指定你为目标。',
			twyouye:'攸业',
			twyouye_info:'锁定技。①其他角色的结束阶段，若其本回合未对你造成过伤害且“蓄”数小于5，你将牌堆顶的牌置于武将牌上，称为“蓄”。②当你造成或受到伤害后，若你有“蓄”，你将所有“蓄”分配给任意角色（若当前回合角色存活，则你至少为当前回合角色分配一张）。',
			tw_xunchen:'TW荀谌',
			tw_xunchen_prefix:'TW',
			twweipo:'危迫',
			twweipo_info:'出牌阶段限一次。你可以令一名角色弃置一张牌，然后令其获得一张【兵临城下】或一张由你选择的智囊牌。',
			twmouzhi:'谋识',
			twmouzhi_info:'锁定技。当你受到伤害时，若伤害渠道对应的牌和你上次受到的伤害渠道对应的牌颜色相同，则你防止此伤害。',
			tw_jiangqing:'TW蒋钦',
			tw_jiangqing_prefix:'TW',
			twshangyi:'尚义',
			twshangyi_info:'出牌阶段限一次。你可以弃置一张牌并选择一名有手牌的其他角色，你令其观看你的手牌，然后你观看其手牌并选择一项：1.弃置其中一张牌；2.与其交换一张手牌。若你以此法弃置了其的黑色牌，或你与其交换的两张牌均为红色，你摸一张牌。',
			twxiangyu:'翔羽',
			twxiangyu_info:'锁定技。①你于回合内的攻击范围+X（X为本回合失去过牌的角色数且至多为5）。②当你使用【杀】指定目标后，若你至目标角色的距离小于你的攻击范围，你令此目标角色抵消此【杀】所需使用的【闪】数+1。',
			twgyshenxing:'慎行',
			twgyshenxing_info:'出牌阶段，你可以弃置X张牌，然后摸一张牌并获得1枚“慎”标记（X为你的“慎”数且至多为2）。',
			tw_guyong:'TW顾雍',
			tw_guyong_prefix:'TW',
			twbingyi:'秉壹',
			twbingyi_info:'结束阶段，你可以展示所有手牌，若这些牌的颜色均相同或类别均相同，你可以令至多Y名角色各摸一张牌（Y为你的手牌数）。若你以此法展示的牌数大于1且这些牌的颜色均相同且类别均相同，你移去所有“慎”。',
			twyilie:'毅烈',
			twyilie_info:'出牌阶段开始时，你可以选择一项：1.本阶段内使用【杀】的次数上限+1；2.本回合内使用【杀】指定处于连环状态的目标后，或使用【杀】被【闪】抵消时，摸一张牌；3.背水：失去1点体力，然后依次执行上述所有选项。',
			tw_chendong:'TW陈武董袭',
			tw_chendong_prefix:'TW',
			twfenming:'奋命',
			twfenming_info:'准备阶段，你可以选择一名其他角色并选择一项：1.令其弃置一张牌；2.令其横置；3.背水：横置，然后依次执行上述所有选项。',
			tw_handang:'TW韩当',
			tw_handang_prefix:'TW',
			twgongji:'弓骑',
			twgongji2:'弓骑',
			twgongji_info:'①你的攻击范围无限。②出牌阶段限一次，你可以弃置一张牌，然后你使用与此牌花色相同的【杀】无任何次数限制直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。',
			twjiefan:'解烦',
			twjiefan_info:'限定技。出牌阶段，你可以选择一名角色，令攻击范围内含有其的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。然后当其第一次进入濒死状态后，你重置〖解烦〗。',
			tw_jiling:'TW纪灵',
			tw_jiling_prefix:'TW',
			twshuangren:'双刃',
			twshuangren_info:'①出牌阶段开始时，你可以与一名角色拼点。若你：赢，你可以视为对至多两名至其的距离不大于1的角色依次使用一张【杀】；没赢，其可以视为对你使用一张【杀】。②出牌阶段结束时，若你本回合未发动过〖双刃①〗且未造成过渠道为【杀】的伤害，你可以弃置一张牌发动〖双刃①〗。',
			tw_re_fazheng:'TW法正',
			tw_re_fazheng_prefix:'TW',
			twxuanhuo:'眩惑',
			twxuanhuo_info:'摸牌阶段结束时，你可以交给一名其他角色两张牌，然后其选择一项：1.视为对你选择的另一名其他角色使用一张【杀】或【决斗】，2.令你获得其两张牌。',
			twenyuan:'恩怨',
			twenyuan1:'恩怨',
			twenyuan2:'恩怨',
			twenyuan_info:'①当你获得一名其他角色的至少两张牌后，你可以令其摸一张牌，若其手牌区或装备区没有牌，则你可以改为令其回复1点体力。②当你受到1点伤害后，你可令伤害来源选择一项：1.失去1点体力；2.交给你一张手牌，若此牌的花色不为♥，你摸一张牌。',
			tw_madai:'TW马岱',
			tw_madai_prefix:'TW',
			twqianxi:'潜袭',
			twqianxi2:'潜袭',
			twqianxi3:'潜袭',
			twqianxi2_bg:'潜',
			twqianxi3_bg:'袭',
			twqianxi_info:'准备阶段，你可以摸一张牌并弃置一张牌，令一名距离为1的角色本回合不能使用或打出与你弃置的牌颜色相同的手牌。然后本回合的结束阶段，若你本回合对其造成过渠道为【杀】的伤害，你令其不能使用或打出与你以此法弃置的牌颜色不同的牌直到其下回合结束。',
			tw_niujin:'TW牛金',
			tw_niujin_prefix:'TW',
			twcuorui:'挫锐',
			twcuorui_info:'限定技。准备阶段，你可以将手牌摸至X张（X为场上角色手牌数最多的角色的手牌数，且至多摸5张）。然后若你的判定区：未废除，你废除判定区；已废除，你可以对一名其他角色造成1点伤害。',
			twliewei:'裂围',
			twliewei_info:'锁定技。当你杀死一名角色后，你选择一项：1.摸两张牌；2.若你拥有〖挫锐〗且〖挫锐〗已发动过，重置〖挫锐〗。',
			tw_guanqiujian:'TW毌丘俭',
			tw_guanqiujian_prefix:'TW',
			twzhengrong:'征荣',
			twzhengrong_tag:'荣',
			twzhengrong_info:'当你于出牌阶段使用牌结算结束后，若此牌为你于本局游戏你的出牌阶段内使用的第偶数张指定了其他角色为目标的牌，或你于出牌阶段第一次造成伤害后，你可以将一名其他角色的一张牌置于你的武将牌上，称为“荣”。',
			twhongju:'鸿举',
			twhongju_info:'觉醒技。准备阶段，若你的“荣”数不小于3，你摸等同于“荣”数的牌，且可以用任意手牌交换等量的“荣”，获得〖清侧〗，然后可以减1点体力上限并获得〖扫讨〗。',
			twqingce:'清侧',
			twqingce_backup:'清侧',
			twqingce_info:'出牌阶段，你可以将一张“荣”置入弃牌堆并选择一名区域内有牌的角色，你弃置其区域里的一张牌。',
			twsaotao:'扫讨',
			twsaotao_info:'锁定技。你使用【杀】和普通锦囊牌不能被响应。',
			tw_daxiaoqiao:'TW大乔小乔',
			tw_daxiaoqiao_prefix:'TW',
			twxingwu:'星舞',
			twxingwu_info:'弃牌阶段开始时，你可以将一张牌置于武将牌上，称为“星舞”。然后你可移去三张“星舞”，弃置一名其他角色装备区里的所有牌，然后对其造成2点伤害（若其性别包含女性则改为1点伤害）。',
			twpingting:'娉婷',
			twpingting_info:'锁定技。①一轮游戏开始时或其他角色于你的回合内进入濒死状态时，你摸一张牌并将一张牌置于武将牌上，称为“星舞”。②若你有“星舞”，你视为拥有〖天香〗和〖流离〗。',
			tw_furong:'TW傅肜',
			tw_furong_prefix:'TW',
			twxuewei:'血卫',
			twxuewei_info:'每轮限一次。一名其他角色A的出牌阶段开始时，你可以选择另一名其他角色B，然后你令A选择一项：1.本回合不能对B使用【杀】且手牌上限-2；2.你视为对A使用一张【决斗】。',
			twliechi:'烈斥',
			twliechi_info:'当你受到伤害后，若伤害来源的体力值不小于你，你可以选择一项：1.令其将手牌数弃置至与你的手牌数相同；2.弃置其一张牌；3.背水：若你本回合进入过濒死状态，弃置一张装备牌，然后依次执行上述所有选项。',
			tw_yl_luzhi:'TW卢植',
			tw_yl_luzhi_prefix:'TW',
			twmingren:'明任',
			twmingren_info:'①游戏开始时，你摸一张牌，然后将一张手牌置于武将牌上，称为“任”。②出牌阶段开始时或出牌阶段结束时，你可以用一张牌替换“任”。',
			twzhenliang:'贞良',
			twzhenliang_info:'转换技。阴：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。阳：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。',
			tw_zhangnan:'张南',
			twfenwu:'奋武',
			twfenwu_info:'结束阶段，你可以失去1点体力并视为使用一张无距离限制的【杀】。若本回合你使用过的基本牌种数大于1，此【杀】伤害基数+1。',
			tw_huchuquan:'呼厨泉',
			twfupan:'复叛',
			twfupan_info:'当你造成或受到伤害后，你可以摸X张牌并将一张牌交给一名其他角色（X为伤害值）。若你此前：未以此法交给过该角色牌，你摸两张牌；以此法交给过该角色牌，你可{对其造成1点伤害，然后你不能再以此法交给其牌}。',
			tw_liuzhang:'TW刘璋',
			tw_liuzhang_prefix:'TW',
			twyaohu:'邀虎',
			twyaohu_info:'每轮限一次。回合开始时，你须选择场上的一个势力。该势力的角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：1.对你指定的另一名的其他角色使用一张【杀】（无距离限制）；2.本回合其使用伤害牌指定你为目标时须交给你两张牌，否则取消此目标。',
			tw_liwei:'TW李遗',
			tw_liwei_prefix:'TW',
			twjiaohua:'教化',
			twjiaohua_info:'当你或体力值最小的其他角色因摸牌而得到牌后，你可以令该角色从牌堆或弃牌堆中获得一张本次未获得的类别的牌（每种类别每回合限一次）。',
			tw_yanxiang:'TW阎象',
			tw_yanxiang_prefix:'TW',
			twkujian:'苦谏',
			twkujianx:'谏',
			twkujian_info:'出牌阶段限一次。你可以将至多三张手牌交给一名其他角色，称为“谏”，你获得以下效果：当其他角色使用或打出牌后，若其中有“谏”，你与其各摸一张牌；当其他角色不因使用或打出而失去牌后，若其中有“谏”，你与其各弃置一张牌。',
			twruilian:'睿敛',
			twruilian2:'睿敛',
			twruilian_info:'一轮游戏开始时，你可以选择一名角色。其下回合结束时，若其本回弃置过至少两张其的牌，你可以选择其本回合弃置过的一种类别，你与其各从弃牌堆中获得一张此类别的牌。',
			tw_xiahouen:'夏侯恩',
			twfujian:'负剑',
			twfujian_info:'锁定技。①游戏开始时或准备阶段，若你的装备区里没有武器牌，你随机将牌堆中的一张武器牌置入装备区。②当你于回合外失去武器牌后，你失去1点体力。',
			twjianwei:'剑威',
			twjianwei_info:'①若你的装备区里有武器牌，你使用【杀】无视防具且拼点牌点数+X（X为你的攻击范围）。②{其他角色的准备阶段，其可以与你拼点}/{准备阶段，你可以与攻击范围内的一名角色拼点}。若你赢，你获得其每个区域内的各一张牌；若其赢，其获得你装备区里的武器牌。',
			tw_xiahoushang:'夏侯尚',
			twtanfeng:'探锋',
			twtanfeng_info:'准备阶段，你可以弃置一名其他角色区域内的一张牌，然后其选择一项：1.受到你造成的1点火焰伤害，然后令你跳过本回合的一个阶段（准备阶段和结束阶段除外）；2.将一张牌当做【杀】对你使用（有距离限制）。',
			tw_zongyu:'TW宗预',
			tw_zongyu_prefix:'TW',
			twzhibian:'直辩',
			twzhibian_info:'出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以选择一项：{1.将其区域里的一张牌移动到你的对应区域；2.回复1点体力；3.背水：弃置一张非基本牌，然后依次执行上述所有选项}；若你没赢，你失去1点体力。',
			twyuyan:'御严',
			twyuyan_info:'锁定技。当你成为体力值大于你的角色使用的【杀】的目标时，你令使用者选择一项：1.交给你一张点数大于此【杀】的牌（若此【杀】无点数则改为非基本牌）。2.取消此目标。',
			tw_zhouchu:'TW周处',
			tw_zhouchu_prefix:'TW',
			twguoyi:'果毅',
			twguoyi_info:'当你不因〖果毅〗使用【杀】或普通锦囊牌指定一名其他角色为目标后，若其体力值或手牌数最大，或你的手牌数不大于X（X为你已损失的体力值+1），你可令其选择一项：1.本回合不能使用或打出手牌；2.弃置X张牌。若条件均满足，或其于本回合两个选项均已选择过，则你于此牌结算结束后依次视为对此牌的所有目标使用一张名称和属性相同的牌。',
			twchuhai:'除害',
			twchuhai_info:'使命技。①使命：令至少两名其他角色进入濒死状态。②成功：一名角色的回合结束时，若你于本回合完成了〖除害①〗的使命，你废除判定区，然后每名其他角色依次交给你一张牌。③当你获得其他角色的牌后，你须将其中的一张牌置入弃牌堆。',
			tw_qiaogong:'TW桥公',
			tw_qiaogong_prefix:'TW',
			twyizhu:'遗珠',
			twyizhu_info:'①结束阶段，你摸两张牌，然后将两张牌随机插入牌堆前2X张牌的位置中，称为“遗珠”（X为角色数，选择牌的牌名对其他角色可见）。②当有其他角色使用“遗珠”指定唯一目标时，你可以选择一项：1.增加一个目标；2.取消此目标，增加一个目标。然后移除此牌对应的“遗珠”记录并摸一张牌。',
			twluanchou:'鸾俦',
			twluanchou_info:'出牌阶段限一次。你可以令两名角色获得〖共患〗直到你下次发动此技能。',
			twgonghuan:'共患',
			twgonghuan_info:'每回合限一次。当其他角色受到伤害时，若其拥有〖共患〗且其体力值不大于你，你可以将此伤害转移给你（不触发〖共患〗）。',
			tw_qiaorui:'TW桥蕤',
			tw_qiaorui_prefix:'TW',
			wangxing:'妄行',
			twxiawei:'狭威',
			twxiawei_info:'①游戏开始时，你将牌堆中的两张基本牌置于武将牌上，称为“威”。②回合开始时，你将所有“威”置入弃牌堆。③你可以将“威”如手牌般使用或打出。④妄行：准备阶段，你可以将牌堆顶的X+1张牌置于武将牌上，称为“威”。',
			twqiongji:'穷技',
			twqiongji_info:'锁定技。①每回合限一次。当你使用或打出“威”后，你摸一张牌。②当你受到伤害时，若你没有“威”，此伤害+1。',
			tw_bianfuren:'TW卞夫人',
			tw_bianfuren_prefix:'TW',
			twwanwei:'挽危',
			twwanwei_info:'每回合限一次。当一名体力值最小的角色受到伤害时：若该角色不为你，你可以防止此伤害，然后失去1点体力；若该角色为你，或你的体力上限最大，你可以于当前回合的结束阶段获得牌堆顶的牌并展示牌堆底的牌，若展示的牌能被使用，你使用之。',
			twyuejian:'约俭',
			twyuejian_info:'出牌阶段限一次。你可以将X张牌置于牌堆顶或牌堆底（X为你的手牌数减你的手牌上限且至少为1）。若你以此法失去的牌数：不小于3，你的体力上限+1；不小于2，你回复1点体力；不小于1，你的手牌上限+1。',
			tw_chenzhen:'TW陈震',
			tw_chenzhen_prefix:'TW',
			twmuyue:'睦约',
			twmuyue_info:'出牌阶段限一次。你可以弃置一张牌并选择一个基本牌或普通锦囊牌的牌名，然后令一名角色从牌堆中获得一张此牌名的牌。若你以此法弃置的牌的牌名与你选择的牌名相同，你下次发动〖睦约〗无需弃牌。',
			twchayi:'察异',
			twchayi_info:'结束阶段，你可以选择一名其他角色，令其选择一项：1.展示所有手牌；2.下次使用牌时弃置一张牌。该角色的下个回合结束时，若其手牌数与其上一次成为〖察异〗目标后的手牌数不相同，其执行另一项。',
			tw_feiyi:'TW费祎',
			tw_feiyi_prefix:'TW',
			twshengxi:'生息',
			twshengxi_info:'①准备阶段，你可以获得一张【调剂盐梅】。②结束阶段，若你本回合使用过牌且未造成伤害，则你可以获得一张智囊并摸一张牌。',
			twkuanji:'宽济',
			twkuanji_info:'每回合限一次。当你的牌不因使用而进入弃牌堆后，你可以令一名其他角色获得其中的一张牌。',
			xia_wangyue:'王越',
			twyulong:'驭龙',
			twyulong_info:'当你使用【杀】指定第一个目标后，你可以与一名目标角色拼点。若你赢，且你此次的拼点牌为：黑色，此【杀】伤害+1；红色，此【杀】不可被响应。当此【杀】造成伤害后，若你赢，你令此【杀】不计入次数。',
			twjianming:'剑鸣',
			twjianming_info:'锁定技。每回合每种花色限一次，当你使用或打出【杀】时，你摸一张牌。',
			xia_liyàn:'李彦',
			twzhenhu:'震虎',
			twzhenhu_info:'当你使用伤害牌指定第一个目标时，你可以摸一张牌并与至多三名其他角色共同拼点。若你赢，此牌对所有本次拼点没赢的角色造成的伤害+1；若你没赢，你失去1点体力。',
			twlvren:'履刃',
			twlvren_info:'①当你对其他角色造成伤害时，你令其获得1枚“刃”标记。②当你使用伤害牌时，你可以额外指定一名有“刃”的角色并移去其所有“刃”。③你的拼点牌点数+2X（X为参与此次拼点的角色数）。',
			xia_tongyuan:'侠童渊',
			xia_tongyuan_prefix:'侠',
			twchaofeng:'朝凤',
			twchaofeng_backup:'朝凤',
			twchaofeng_info:'①你可以将一张【杀】当做【闪】、【闪】当做任意一种【杀】使用或打出。②出牌阶段开始时，你可以与至多三名角色共同拼点。赢的角色视为对所有没赢的角色使用一张火【杀】。',
			twchuanshu:'传术',
			twchuanshu_info:'限定技。准备阶段，你可以选择一名角色。直到你的下回合开始，其获得以下效果：1.当其拼点牌亮出时，此牌点数+3；2.其使用的下一张【杀】对除你外的角色造成伤害时，此伤害+1；3.若其不为你，其使用的下一张【杀】结算结束后，你摸等同于其因此【杀】造成的伤害值数的牌。',
			xia_xushu:'侠徐庶',
			xia_xushu_prefix:'侠',
			twjiange:'剑歌',
			twjiange_info:'每回合限一次。你可以将一张非基本牌当做【杀】使用或打出（无距离和次数限制，且不计入次数）。若此时不为你的回合，你摸一张牌。',
			twxiawang:'侠望',
			twxiawang_info:'当一名角色受到伤害后，若你至其的距离不大于1，你可以对伤害来源使用一张【杀】。当此【杀】结算结束后，若你造成过渠道为此牌的伤害，结束当前阶段。',
			tw_haomeng:'TW郝萌',
			tw_haomeng_prefix:'TW',
			twgongge:'攻阁',
			twgongge_info:'摧坚：你可以选择一项：1.摸X+1张牌。其响应此牌后，跳过你的下一个摸牌阶段；2.弃置其X+1张牌。此牌结算结束后，若其体力值不小于你，你交给其X张牌；3.此牌对其造成的伤害+X。此牌结算结束后，其回复X点体力。',
			tw_weixu:'魏续',
			twsuizheng:'随征',
			twsuizheng_info:'锁定技。游戏开始时，你选择一名其他角色，称为“随征”角色。你获得以下效果：当“随征”角色造成伤害后，你摸一张牌；当“随征”角色受到伤害后，你选择一项：1.失去1点体力，令其从牌堆或弃牌堆中获得一张【杀】或【决斗】；2.弃置两张基本牌，令其回复1点体力。',
			twtuidao:'颓盗',
			twtuidao_info:'限定技。准备阶段，若“随征”角色的体力值不大于2或“随征”角色已死亡，你可以废除你与其的一个坐骑栏并选择一个类别，然后若“随征”角色存活，你获得其所有此类别的牌，否则你从牌堆中获得两张此类别的牌。然后你将“随征”角色改为另一名角色。',
			tw_caoxiu:'TW曹休',
			tw_caoxiu_prefix:'TW',
			twqianju:'千驹',
			twqianju_info:'锁定技。①你计算与其他角色的距离-X（X为你装备区的牌数）。②每回合限一次。当你对距离为1以内的角色造成伤害后，若你的装备区存在空置装备栏，你从牌堆或弃牌堆中将一张你空置装备栏对应副类别的装备牌置于你的装备区。',
			twqingxi:'倾袭',
			twqingxi_info:'当你使用张【杀】指定目标后，若此牌为你于本回合使用的第一张【杀】，你可以令目标角色选择一项：1.令你摸Y张牌，此【杀】不可被其响应（Y为你装备区的牌数且至少为1）；2.若其装备区里有牌，弃置装备区里的所有牌，然后弃置你装备区里的等量张牌，令此【杀】对其造成的伤害+1。',
			tw_sunyi:'TW孙翊',
			tw_sunyi_prefix:'TW',
			twzaoli:'躁厉',
			twzaoli_info:'锁定技。①出牌阶段，你只能使用或打出你本回合得到的手牌。②出牌阶段开始时，你须弃置你区域内的所有装备牌并弃置任意张非装备手牌，你摸等量的牌，从牌堆中将你此次弃置的装备牌对应副类别的装备牌置入装备区。若你以此法置入了超过两张装备牌，你失去1点体力。',
			tw_yangyi:'TW杨仪',
			tw_yangyi_prefix:'TW',
			twgongsun:'共损',
			twgongsun_shadow:'共损',
			twgongsun_info:'锁定技。出牌阶段开始时，你选择攻击范围内的一名其他角色并选择一种花色，直至你的下个回合开始前或你死亡时，你与其均无法使用、打出或弃置该花色的手牌。',
			tw_dengzhi:'TW邓芝',
			tw_dengzhi_prefix:'TW',
			twjimeng:'急盟',
			twjimeng_info:'出牌阶段限一次。你可以获得一名其他角色区域内的一张牌，然后交给其一张牌。若其体力值不小于你，你摸一张牌。',
			xia_lusu:'侠鲁肃',
			xia_lusu_prefix:'侠',
			twkaizeng:'慨赠',
			twkaizeng_info:'其他角色的出牌阶段限一次。其可以选择一种基本牌的牌名或非基本牌的类型，然后令你选择是否交给其任意张手牌。若你以此法：交给其至少两张牌，你摸一张牌；交给其的牌中包含其选择的牌名或类型的牌，你获得一张与此牌名或类型不同的牌。',
			twyangming:'扬名',
			twyangming_info:'出牌阶段结束时，你可以摸X张牌，且令本回合的手牌上限+X（X为你本阶段使用过的牌的类型数）。',
			xia_dianwei:'侠典韦',
			xia_dianwei_prefix:'侠',
			twliexi:'烈袭',
			twliexi_info:'准备阶段，你可以弃置任意张牌并选择一名其他角色。若你以此法弃置的牌数大于其体力值，你对其造成1点伤害；否则其对你造成1点伤害。然后若你弃置的牌中有武器牌，你对其造成1点伤害。',
			twshezhong:'慑众',
			twshezhong_info:'结束阶段，若你：本回合对其他角色造成过伤害，你可以令至多X名其他角色下个摸牌阶段的额定摸牌数-1（X为你本回合造成的伤害值）；本回合受到过伤害，你可以将手牌摸至与其中一名伤害来源的体力值相同（至多摸至5）。',
			xia_zhaoe:'赵娥',
			twyanshi:'言誓',
			twyanshi_info:'①游戏开始时，你选择一名其他角色，称为“言誓”角色。②当你或“言誓”角色受到二者之外角色造成的伤害后，伤害来源获得1枚“誓”标记。③你对有“誓”的角色使用牌无距离限制。④当你对有“誓”的角色造成伤害时，此伤害+1，且当你对这些角色造成伤害后，你摸等同于伤害值的牌并移去其所有“誓”。',
			twrenchou:'刃仇',
			twrenchou_info:'锁定技。当你或“言誓”角色死亡时，若二者中的另一名角色A存活，A对杀死你或其的角色造成X点伤害（X为A的体力值）。',
			xia_xiahouzie:'夏侯紫萼',
			twxuechang:'血偿',
			twxuechang_info:'出牌阶段限一次。你可以与一名其他角色拼点。若你：赢，你获得其一张牌，若此牌为装备牌，你视为对其使用一张【杀】；没赢，其对你造成1点伤害，且你下次对其造成的伤害+1。',
			twduoren:'夺刃',
			twduoren_info:'①当你杀死角色后，你可以减1点体力上限，然后获得其所有的非主公技和非隐匿技。②当你令其他角色进入濒死状态时，你失去因〖夺刃①〗获得的技能。',
			tw_yangang:'严纲',
			twzhiqu:'直取',
			twzhiqu_info:'结束阶段，你可以选择一名其他角色并依次使用牌堆顶X张牌中的【杀】。搏击：依次使用牌堆顶X张牌中的锦囊牌（X为你距离不大于1内的角色数，且你或其以外的角色不是你以此法使用牌的合法目标）。',
			twxianfeng:'先锋',
			twxianfeng_info:'当你于出牌阶段使用【杀】或伤害类锦囊牌对其他角色造成伤害后，你可以令受伤角色选择一项：1.其摸一张牌，然后直到你下个回合开始时，你至其他角色的距离-1；2.你摸一张牌，然后直到你下个回合开始时，其至你的距离-1。',
			tw_gongsunfan:'公孙范',
			twhuiyuan:'回援',
			twhuiyuan_info:'当你于出牌阶段使用牌结算结束后，若你未于此阶段获得过此类型的牌，你可以展示一名角色的一张手牌，若此牌与你使用的牌类型相同，你获得此牌，否则你弃置此牌，然后其摸一张牌。游击：对其造成1点伤害。',
			twshoushou:'收绶',
			twshoushou_info:'①当你获得其他角色的牌时，若你在任意角色的攻击范围内，其他角色至你的距离+1。②当你造成或受到伤害后，若你不在任意其他角色的攻击范围内，其他角色至你的距离-1。',
			twshijun:'师君',
			twshijun_info:'主公技，其他群势力角色出牌阶段限一次，若你没有“米”，其可以摸一张牌，然后将一张牌置于你的武将牌上，称为“米”。',
			twjuxiang:'踞襄',
			twjuxiang_info:'主公技，其他群势力角色出牌阶段限一次，其可以选择其装备区的一张牌移动到你的装备区中，若你对应的装备栏已被废除，则改为交给你此装备牌，然后恢复你的对应装备栏。',
			tw_ol_sunjian:'TW孙坚',
			tw_ol_sunjian_prefix:'TW',
			twpolu:'破虏',
			twpolu_info:'主公技，当吴势力角色杀死一名角色或死亡后，你可以令任意名角色各摸X张牌（X为你此前发动过此技能的次数+1）。',
			tw_menghuo:'TW孟获',
			tw_menghuo_prefix:'TW',
			twqiushou:'酋首',
			twqiushou_info:'主公技，锁定技，当一张【南蛮入侵】结算结束后，若此牌造成的伤害大于3点或有角色因此死亡，所有蜀势力和群势力角色各摸一张牌。',
			twzhuiting:'坠廷',
			twzhuiting_info:'主公技，当一张锦囊牌即将对你生效时，其他魏势力角色和群势力角色可将一张与此牌颜色相同的牌当作【无懈可击】使用。',
			twniju:'逆拒',
			twniju_info:'主公技，当你的拼点牌亮出后，你可以令其中一张拼点牌的点数+X或-X，然后若这两张牌的点数相等，你摸X张牌（X为场上群势力角色数）。',
			ol_liuyu:'TW刘虞',
			ol_liuyu_prefix:'TW',
			twchongwang:'崇望',
			twchongwang_info:'主公技，其他群势力角色的出牌阶段开始时，其可以交给你一张牌，然后你与其使用【杀】或伤害性锦囊牌指定目标时不能指定对方为目标直至你的下回合结束（每名角色限发动一次）。',
			tw_zhangzhao:'张昭',
			twlijian:'力荐',
			twlijian_info:'昂扬技。其他角色的弃牌阶段结束时，你可以令其获得任意本阶段进入弃牌堆的牌（可不选），然后你获得其余的牌，若其得到的牌数大于你，你可以对其造成1点伤害。<br>激昂：八张牌进入弃牌堆。',
			twchungang:'纯刚',
			twchungang_info:'锁定技。一名其他角色于摸牌阶段外得到超过一张牌时，你令其弃置一张牌。',
			tw_zhanghong:'张纮',
			twquanqian:'劝迁',
			twquanqian_info:'昂扬技。出牌阶段限一次，你可以将至多四张花色各不相同的手牌交给一名其他角色，然后若你交出的牌数大于1，则你从牌堆中获得一张装备牌，然后选择一项：①将手牌数摸至与其相同；②观看其手牌并获得其一种花色的所有牌。<br>激昂：你弃置六张手牌。',
			twrouke:'柔克',
			twrouke_info:'锁定技。当你于摸牌阶段外得到超过一张牌时，你摸一张牌。',
			kaisa:"凯撒",
			zhengfu:"征服",
			zhengfu_info:"当你使用【杀】指定目标时，你可以选择一种牌的类别，然后除非目标角色交给你一种该类别的牌，否则其不能闪避此【杀】。",
			xia_xiahoudun:'侠夏侯惇',
			xia_xiahoudun_prefix:'侠',
			twdanlie:'胆烈',
			twdanlie_info:'①出牌阶段限一次。你可以与至多三名其他角色共同拼点。若你赢，你对没赢的角色依次造成1点伤害；若你没赢，你失去1点体力。②你的拼点牌点数+X（X为你已损失的体力值）。',
			xia_zhangwei:'张葳',
			twhuzhong:'护众',
			twhuzhong_info:'当你于出牌阶段使用无属性【杀】指定唯一目标角色时，你可以选择一项：①为此牌额外选择一个目标；②弃置其一张手牌，此牌结算完毕后，若此牌造成过伤害，则你摸一张牌且本阶段可以额外使用一张【杀】。',
			twfenwang:'焚亡',
			twfenwang_info:'锁定技。①当你受到属性伤害时，你须弃置一张牌或令此伤害+1。②当你对其他角色造成非属性伤害时，若你的手牌数大于其，则此伤害+1。',
			xia_xiahousone:'夏侯子萼',
			twchengxi:'承袭',
			twchengxi_info:'出牌阶段每名角色限一次，你可以摸一张牌并与一名其他角色拼点。若你赢，你使用的下一张基本牌或非延时锦囊牌结算完毕后，你视为对原目标使用一张无次数限制的同名牌；若你没赢，其视为对你使用一张无距离限制的【杀】。',
			xia_liubei:'侠刘备',
			xia_liubei_prefix:'侠',
			twshenyi:'伸义',
			twshenyi_info:'每回合限一次，当你或你攻击范围内的一名角色于一回合内首次受到伤害后，你可以声明一种基本牌或锦囊牌（每种牌名限一次），然后从牌堆中将一张同名牌（若没有同名牌则改为同类型的牌）称为“侠义”置于武将牌上。若受伤角色不为你，则你可以将任意张手牌交给其，且当其失去一张你以此法交给其的牌后，你摸一张牌。',
			twxinghan:'兴汉',
			twxinghan_info:'①你的回合外或你处于濒死状态时，你可以如手牌般使用或打出“侠义”牌。②准备阶段，若“侠义”牌数大于存活角色数，则你可以依次使用其中所有可以使用的牌。然后你获得如下效果：回合结束时，你弃置所有手牌并失去X点体力（X为你的体力值-1且X至少为1）。',
			xia_guanyu:'侠关羽',
			xia_guanyu_prefix:'侠',
			twzhongyi:'忠义',
			twzhongyi_info:'锁定技。①你使用【杀】无距离限制。②当你使用【杀】结算完毕后，你选择一项：⒈摸X张牌；⒉回复X点体力；⒊背水：失去Y点体力，依次执行以上两项（X为此牌造成的伤害值，Y为你本局游戏此前选择此项的次数+1）。',
			twchue:'除恶',
			twchue_info:'①当你使用【杀】指定唯一目标时，你可以失去1点体力，为此牌额外指定Z个目标。②当你受到伤害或失去体力后，你摸一张牌并获得1个“勇”标记。③回合结束时，若你本回合发动过〖除恶②〗，则你可以失去Z个“勇”标记，视为使用一张伤害+1且可以额外指定Z个目标的【杀】。（Z为你的体力值）',
			xia_shitao:'石韬',
			twjieqiu:'劫囚',
			twjieqiu_info:'出牌阶段限一次，你可以选择一名装备区没有废除栏的其他角色，废除其所有装备栏，然后其摸X张牌（X为其废除装备栏前的装备区牌数），直到其恢复所有装备栏前：其弃牌阶段结束时，其恢复等同于其弃置牌数的装备栏；其回合结束时，若其仍有已废除的装备栏，则你执行一个额外回合（每轮限一次）。',
			twenchou:'恩仇',
			twenchou_info:'出牌阶段限一次，你可以观看一名存在废除装备栏的其他角色的手牌并获得其中一张牌，然后你恢复其一个装备栏。',
			xia_shie:'史阿',
			twdengjian:'登剑',
			twdengjianx:'剑法',
			twdengjian_info:'①其他角色的弃牌阶段结束时，你可以弃置一张牌并随机获得本回合所有造成伤害的牌对应的实体牌的其中一张与你本轮以此法获得的牌的颜色均不同的【杀】，称为“剑法”。②你使用“剑法”牌不计入次数限制。',
			twxinshou:'心授',
			twxinshou_info:'①当你于出牌阶段使用【杀】时，若此【杀】与你本回合使用的所有其他【杀】的颜色均不相同，则你可以选择执行以下一项本回合未执行过的项：⒈摸一张牌；⒉交给一名其他角色一张牌。②当你使用【杀】时，若〖心授①〗的两项本回合均已被你选择过，则你可以令〖登剑①〗失效并令一名其他角色获得〖登剑〗，你的下个回合开始时，其失去〖登剑〗，若其这期间使用【杀】造成过伤害，则你结束〖登剑①〗的失效状态。',
			xia_yuzhenzi:'玉真子',
			twhuajing:'化境',
			twhuajing_info:'①游戏开始时，你获得6个效果各不相同的无效果“武”标记。②一名拥有“武”标记的角色的攻击范围+X（X为其拥有的“武”标记数）。③出牌阶段限一次，你可以展示至多四张手牌，然后根据这些牌含有的花色数于本回合获得等量你拥有的“武”标记的效果。④拥有“武”标记效果的角色的武器牌失效（武器牌不提供攻击范围且武器技能失效）。',
			twhuajing_jian:'剑',
			twhuajing_jian_info:'当你使用【杀】指定目标后，你随机弃置目标角色两张牌。',
			twhuajing_dao:'刀',
			twhuajing_dao_info:'当你使用【杀】对没有手牌的目标角色造成伤害时，此伤害+1。',
			twhuajing_fu:'斧',
			twhuajing_fu_info:'当你使用的【杀】被【闪】响应后，你对目标角色造成1点伤害。',
			twhuajing_qiang:'枪',
			twhuajing_qiang_info:'当你使用黑色【杀】结算完毕后，你从牌堆或弃牌堆中获得一张【闪】。',
			twhuajing_ji:'戟',
			twhuajing_ji_info:'当你使用【杀】造成伤害时，你摸一张牌。',
			twhuajing_gong:'弓',
			twhuajing_gong_info:'当你使用【杀】造成伤害后，你随机弃置受伤角色装备区里的一张牌。',
			twtianshou:'天授',
			twtianshou_info:'锁定技，回合结束时，若你本回合使用【杀】造成过伤害，且你拥有本回合获得过效果的“武”标记，则你须将其中一个“武”标记交给一名其他角色并令其获得此标记的效果直到其回合结束，然后你摸一张牌。',

			tw_mobile:'海外服·稀有专属',
			tw_yunchouzhi:'运筹帷幄·智',
			tw_yunchouxin:'运筹帷幄·信',
			tw_yunchouren:'运筹帷幄·仁',
			tw_yunchouyong:'运筹帷幄·勇',
			tw_yunchouyan:'运筹帷幄·严',
			tw_zhu:'海外服·主公',
			tw_sp:'海外服·SP',
			tw_swordsman:'海外服·武侠篇',
			tw_mobile2:'海外服·异构',
			tw_yijiang:'一将成名TW',
			tw_english:'英文版',
		},
		pinyins:{
			凯撒:['Caesar'],
			难升米:['Nashime']
		}
	};
});
