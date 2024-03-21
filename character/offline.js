import { game } from '../noname.js';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'offline',
		connect:true,
		connectBanned:['zhangliang'],
		characterSort:{
			offline:{
				offline_star:['jsp_ganfuren',"sp_xiahoushi","jsp_zhaoyun","huangjinleishi","sp_pangtong","sp_daqiao","sp_ganning","sp_xiahoudun","sp_lvmeng","sp_zhangfei","sp_liubei","old_machao","zhangliang","jsp_caoren"],
				offline_sticker:['sp_gongsunzan','sp_simazhao','sp_wangyuanji','sp_xinxianying','sp_liuxie'],
				offline_yijiang:['ol_xinxianying'],
				offline_luanwu:["ns_lijue","ns_zhangji","ns_fanchou"],
				offline_yongjian:["ns_chendao","yj_caoang","yj_caocao",'yj_liru','yj_caohong','yj_zhangfei','yongjian_ganning','yj_dongzhuo','yj_xuyou','yj_jiaxu','yj_zhenji'],
				offline_piracyE:['shen_jiaxu','pe_wangyun','pe_zhonghui','pe_sunchen','pe_mengda','pe_wenqin','ns_caoanmin','jiangqing','kongrong','jiling','tianfeng','mateng'],
				offline_piracyS:['ns_jiaxu','longyufei','ps_guanyu','ps1059_guojia','ps2070_guojia','ps2063_zhaoyun','ps2067_zhaoyun','ps1062_zhouyu','ps2080_zhouyu','ps_caozhi','ps_jin_simayi','ps_caopi','ps_simayi','ps2068_simayi','ps_machao','ps_zhugeliang','ps2066_zhugeliang','ps_jiaxu','ps_lvbu','ps_shen_machao','jsp_liubei'],
				offline_piracyK:['pk_sp_duyu'],
				offline_vtuber:['vtb_xiaosha','vtb_xiaoshan','vtb_xiaotao','vtb_xiaole','vtb_xiaojiu'],
				//offline_others:[""],
			},
		},
		character:{
			jsp_ganfuren:['female','shu',3,['shushen','shenzhi'],['character:gz_ganfuren']],
			ol_xinxianying:['female','wei',3,['xincaishi','xinzhongjian']],
			zhangliang:["male","qun",4,["old_jijun","old_fangtong"]],
			jsp_caoren:['male','wei',4,['kuiwei','yanzheng']],
			old_machao:['male','qun',4,['zhuiji','oldcihuai']],
			vtb_xiaosha:['female','qun',4,['vtbguisha','vtbshuli']],
			vtb_xiaoshan:['female','qun',4,['vtbshanwu','vtbxianli']],
			vtb_xiaotao:['female','qun',4,['vtbtaoyan','vtbyanli']],
			vtb_xiaole:['female','qun',4,['vtbleyu','vtbyuanli']],
			vtb_xiaojiu:['female','qun',4,['vtbmeiniang','vtbyaoli']],
			ps_shen_machao:['male','shen',4,['psshouli','pshengwu'],['qun']],
			mateng:['male','qun',4,['mashu','xiongyi']],
			tianfeng:['male','qun',3,['sijian','gzsuishi']],
			jiling:['male','qun',4,['shuangren']],
			kongrong:['male','qun',3,['zymingshi','lirang']],
			jiangqing:['male','wu',4,['zyshangyi']],
			pk_sp_duyu:['male','qun',4,['pkwuku','pksanchen']],
			ps_lvbu:['male','qun',4,['wushuang','pssheji']],
			ps_jiaxu:['male','qun',4,['wansha','psqupo','psbaoquan']],
			ps_machao:['male','shu',4,['mashu','tieji','psweihou']],
			ps2066_zhugeliang:['male','shu',3,['pszhiji','psjiefeng','kongcheng']],
			ps_zhugeliang:['male','shu',3,['psguanxing','pslongyin']],
			ps_simayi:['male','wei',3,['reguicai','pshuxiao']],
			ps2068_simayi:['male','wei',3,['refankui','reguicai','pszhonghu']],
			ps_caopi:['male','wei',3,['psjianwei','fangzhu','songwei'],['zhu']],
			ps_jin_simayi:['male','jin',3,['smyyingshi','psquanyi']],
			ps_caozhi:['male','wei',3,['psliushang','psqibu']],
			ps1062_zhouyu:['male','wu',3,['yingzi','psoldshiyin']],
			ps2080_zhouyu:['male','wu',3,['psshiyin','psquwu','psliaozou']],
			ps2063_zhaoyun:['male','shu',4,['psqijin','psqichu','pslongxin']],
			ps2067_zhaoyun:['male','shu',4,['longdan','pshuiqiang','pshuntu']],
			ps1059_guojia:['male','wei',3,['tiandu','psqizuo']],
			ps2070_guojia:['male','wei',3,['yiji','psquanmou']],
			ps_guanyu:['male','shu',4,['wusheng','pszhonghun','nuzhan']],
			pe_wenqin:['male','wei',4,['gzjinfa']],
			pe_sunchen:['male','wu',4,['zyshilu','zyxiongnve']],
			pe_mengda:['male','wei',4,['qiuan','liangfan']],
			pe_zhonghui:['male','wei',4,['zyquanji','zypaiyi'],['clan:颍川钟氏']],
			pe_wangyun:['male','qun',3,['zylianji','zymoucheng'],['clan:太原王氏']],
			shen_jiaxu:['male','shen',3,['weimu','zybishi','zyjianbing'],['qun']],
			yj_zhenji:['female','wei',3,['yjluoshen','qingguo']],
			yj_jiaxu:['male','wei',3,['yjzhenlve','yjjianshu','yjyongdi']],
			yj_xuyou:['male','qun',3,['yjshicai','yjchenggong','yjzezhu']],
			yj_dongzhuo:['male','qun',7,['yjtuicheng','yjyaoling','yjshicha','yjyongquan'],['zhu']],
			yongjian_ganning:['male','wu',4,['yjjielve']],
			yj_zhangfei:['male','shu',4,['yjmangji']],
			yj_caohong:['male','wei',4,['yjlifeng']],
			yj_liru:['male','qun',3,['yjdumou','yjweiquan','yjrenwang']],
			yj_caocao:['male','qun',4,['yjxiandao','yjsancai','yjyibing']],
			longyufei:['female','shu',3,['longyi','zhenjue']],
			sp_liubei:['male','shu',4,['zhaolie','shichou'],['zhu']],
			sp_zhangfei:['male','shu',4,['jie','dahe']],
			sp_lvmeng:['male','wu',3,['tanhu','mouduan']],
			sp_xiahoudun:['male','wei',4,['fenyong','xuehen'],['die_audio']],
			sp_ganning:['male','qun',4,['yinling','junwei']],
			sp_daqiao:['female','wu',3,['yanxiao','anxian']],
			sp_pangtong:['male','qun',3,['xinmanjuan','zuixiang']],
			huangjinleishi:['female','qun',3,['fulu','fuji']],
			jsp_zhaoyun:['male','qun',3,['chixin','reyicong','suiren']],
			sp_xiahoushi:["female","shu",3,["xinfu_yanyu","xinfu_xiaode"]],
			sp_gongsunzan:['male','qun',4,['spyicong','sptuji']],
			sp_simazhao:['male','wei',3,['spzhaoxin','splanggu']],
			sp_wangyuanji:['female','wei',3,['spfuluan','spshude']],
			sp_xinxianying:['female','wei',3,['spmingjian','spyinzhi']],
			sp_liuxie:['male','qun',3,['sphuangen','sphantong']],
			ns_lijue:['male','qun','4/6',['nsfeixiong','nscesuan']],
			ns_zhangji:['male','qun',4,['nslulve']],
			ns_fanchou:['male','qun',4,['nsyangwu']],
			ns_jiaxu:['male','qun',3,['nsyice','luanwu']],
			ns_chendao:['male','shu',4,['nsjianglie']],
			yj_caoang:['male','wei',4,['yjxuepin']],
			ns_caoanmin:['male','wei',4,['nskuishe']],
			jsp_liubei:['male','qun',4,['jsprende']],
		},
		characterIntro:{
			huangjinleishi:"黄巾军中负责施法的女祭司二人组。",
			longyufei:'《三国杀·阵面对决》中的虚构角色，设定是由刘备之女夏侯岚、关羽之女关银屏、张飞之女张星彩三人在与吕布之魔魂战斗时，释放雅典娜的惊叹而召唤出来的精元化神。',
			pk_sp_duyu:'杜预（222年－285年），字元凯，京兆郡杜陵县（今陕西西安）人，中国魏晋时期军事家、经学家、律学家，曹魏散骑常侍杜恕之子。杜预初仕曹魏，任尚书郎，后成为权臣司马昭的幕僚，封丰乐亭侯。西晋建立后，历任河南尹、安西军司、秦州刺史、度支尚书等职。咸宁四年（278年）接替羊祜出任镇南大将军，镇守荆州。他积极备战，支持晋武帝司马炎对孙吴作战，并在咸宁五年（279年）成为晋灭吴之战的统帅之一。战后因功进封当阳县侯，仍镇荆州。太康五年（285年），杜预被征入朝，拜司隶校尉，途中于邓县逝世，终年六十三岁。获赠征南大将军、开府仪同三司，谥号为成。杜预耽思经籍，博学多通，多有建树，时誉为“杜武库”。著有《春秋左氏传集解》及《春秋释例》等。为明朝之前唯一一个同时进入文庙和武庙之人。',
			ps_shen_machao:'字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。',
			xiaosha:'2021年「虚拟天团」Vtuber企划中推出的虚拟偶像之一，该企划原定培养12位虚拟偶像，然而企划由于各方面原因暴死，现虚拟偶像仅存在于各武将的皮肤中。<br>设定上为三国杀新手菜鸡，误打误撞参加了三国杀组织的《三国之星》选秀大赛，没想到一路靠着颜值和风风火火的爽快性格过关斩将吸粉无数，获得了冠军，成为官方签约的形象代言人。<br>小杀现于B站还存在<style type="text/css">#slash_bilibili:link, #slash_bilibili:visited {color:white;}</style><a id="slash_bilibili" href="https://space.bilibili.com/686179867" target="_blank">对应账号</a>，但早已荒废。',
			xiaoshan:'2021年「虚拟天团」Vtuber企划中推出的虚拟偶像之一，该企划原定培养12位虚拟偶像，然而企划由于各方面原因暴死，现虚拟偶像仅存在于各武将的皮肤中。<br>设定上为小杀同系不同班的同学，由于本身性格比较安静，所以和风风火火的小杀有些不对盘。知道小杀也玩三国杀后，外表高冷、内心傲娇的她偷偷也去玩了游戏，立志要在游戏里碾压她。<br>小闪对应B站账号已销号。',
			xiaotao:'2021年「虚拟天团」Vtuber企划中推出的虚拟偶像之一，该企划原定培养12位虚拟偶像，然而企划由于各方面原因暴死，现虚拟偶像仅存在于各武将的皮肤中。<br>设定上为小杀的亲妹妹，陪姐姐去拍摄代言宣传照的时候，被导演看中，觉得三国美貌姐妹花是非常好的噱头，于是一并签下。正所谓“三国姐妹花，永远不分家！”。<br>小桃对应B站账号已销号。',
			xiaole:'2021年「虚拟天团」Vtuber企划中推出的虚拟偶像之一，该企划原定培养12位虚拟偶像，然而企划由于各方面原因暴死，现虚拟偶像仅存在于各武将的皮肤中。<br>设定上小乐家与小桃小杀家是世交，三人从小就认识。和小闪是同班同学，小乐很喜欢安静的小闪。和小酒是小杀介绍认识的，大家都是打三国杀的网友，在打游戏时候比较依赖小酒——躺赢人躺赢魂，躺赢都是人上人。<br>小乐对应B站账号已销号。',
			xiaojiu:'2021年「虚拟天团」Vtuber企划中推出的虚拟偶像之一，该企划原定培养12位虚拟偶像，然而企划由于各方面原因暴死，现虚拟偶像仅存在于各武将的皮肤中。<br>设定上为非人类，是一只年龄成迷的神兽，真身是白泽。是小杀网上玩游戏认识的网友，爱好是喝酒，和小杀也有好酒友的关系。<br>小酒对应B站账号已销号。',
		},
		characterTitle:{
			jsp_liubei:'S1019',
			ns_caoanmin:'S1023',
			longyufei:'S1044',
			ps1059_guojia:'S1059',
			ps_lvbu:'S1061',
			ps1062_zhouyu:'S1062',
			ps_jiaxu:'S1066',
			ps_jin_simayi:'S1067',
			ps_guanyu:'S2065',
			ps2063_zhaoyun:'S2063',
			ps2066_zhugeliang:'S2066',
			ps2067_zhaoyun:'S2067',
			ps2068_simayi:'S2068',
			ps_machao:'S2069',
			ps2070_guojia:'S2070',
			ps_simayi:'S2073',
			ps_zhugeliang:'S2073',
			ps_caopi:'S2075',
			ns_jiaxu:'S2079',
			ps2080_zhouyu:'S2080',
			ps_caozhi:'S2081',
			ps_shen_machao:'SX015',
		},
		perfectPair:{},
		card:{
			yanxiao_card:{
				type:'special_delay',
				fullimage:true,
				noEffect:true,
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:1
					},
				}
			},
		},
		characterFilter:{
		},
		skill:{
			//天书乱斗虚拟偶像线下化
			//小杀
			vtbguisha:{
				audio:1,
				trigger:{global:'useCard'},
				direct:true,
				shaRelated:true,
				filter:function(event,player){
					return event.player!=player&&event.card.name=='sha'&&player.countCards('he')>0&&event.player.isPhaseUsing();
				},
				content:function(){
					'step 0'
					var go=false,d1=false;
					if(get.attitude(player,trigger.player)>0){
						d1=true;
						if(trigger.player.hasSkill('jueqing')||trigger.player.hasSkill('gangzhi')) d1=false;
						for(var target of trigger.targets){
							if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
								return i.hasGaintag('sha_notshan');
							}))||trigger.player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:trigger.card,
							},true)){
								if(!target.hasSkill('gangzhi')) d1=false;
								if(target.hasSkillTag('filterDamage',null,{
									player:trigger.player,
									card:trigger.card,
								})||get.attitude(player,target)>=0) d1=false;
							}
						}
						if(trigger.addCount===false||!trigger.player.isPhaseUsing()) go=false;
						else if(!trigger.player.hasSkill('paoxiao')&&
							!trigger.player.hasSkill('tanlin3')&&
							!trigger.player.hasSkill('zhaxiang2')&&
							!trigger.player.hasSkill('fengnu')&&
							!trigger.player.getEquip('zhuge')){
							var nh=trigger.player.countCards('h');
							if(player==trigger.player){
								go=(player.countCards('h','sha')>0);
							}
							else if(nh>=4){
								go=true;
							}
							else if(player.countCards('h','sha')){
								if(nh==3){
									go=Math.random()<0.8;
								}
								else if(nh==2){
									go=Math.random()<0.5;
								}
							}
							else if(nh>=3){
								if(nh==3){
									go=Math.random()<0.5;
								}
								else if(nh==2){
									go=Math.random()<0.2;
								}
							}
						}
					}
					go=go*Math.random()+d1*Math.random()>0.4;
					//AI停顿
					if(go&&!event.isMine()&&!event.isOnline()&&player.hasCard(function(card){
						return get.value(card)<6&&lib.filter.cardDiscardable(card,player,event.name);
					},'he')){
						game.delayx();
					}
					var next=player.chooseToDiscard(get.prompt('vtbguisha'),'弃置一张牌，令'+get.translation(trigger.player)+'本次使用的【杀】不计入使用次数，且对'+get.translation(trigger.targets)+'造成的伤害+1','he');
					next.logSkill=['vtbguisha',trigger.player];
					next.set('ai',function(card){
						if(_status.event.go){
							return 6-get.value(card);
						}
						return 0;
					});
					next.set('go',go);
					'step 1'
					if(result.bool){
						if(trigger.addCount!==false){
							trigger.addCount=false;
							trigger.player.getStat().card.sha--;
						}
						trigger.player.addTempSkill('vtbguisha_bonus');
						if(!trigger.card.storage) trigger.card.storage={};
						trigger.card.storage.vtbguisha_targets=trigger.targets;
					}
				},
				ai:{
					expose:0.2
				},
				subSkill:{
					bonus:{
						trigger:{
							source:'damageBegin1',
						},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&event.card.storage&&event.card.storage.vtbguisha_targets&&event.card.storage.vtbguisha_targets.includes(event.player);
						},
						content:function(){
							trigger.num++;
						}
					}
				}
			},
			vtbshuli:{
				audio:1,
				trigger:{
					global:'damageSource',
				},
				usable:2,
				filter:function(event,player){
					return event.source&&event.source!=player&&event.card&&event.card.name=='sha'&&event.source.isIn();
				},
				check:function(event,player){
					return get.attitude(player,event.source)>=0||get.attitude(player,event.source)>=-4
						&&get.distance(_status.currentPhase,player,'absolute')>get.distance(_status.currentPhase,event.source,'absolute');
				},
				content:function(){
					'step 0'
					var drawers=[trigger.source,player].sortBySeat(_status.currentPhase);
					game.asyncDraw(drawers);
				},
			},
			//小闪
			vtbshanwu:{
				audio:1,
				trigger:{
					global:'useCardToTarget',
				},
				filter:function(event,player){
					return event.card.name=='sha'&&event.target!=player&&event.isFirstTarget&&player.hasCard(card=>{
						return get.name(card)=='shan'||_status.connectMode;
					});
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt('vtbshanwu'),'弃置一张【闪】，取消此【杀】对'+get.translation(trigger.targets)+'的目标',{name:'shan'}).set('logSkill','vtbshanwu').set('ai',card=>{
						if(_status.event.goon) return 6-get.value(card);
						return 0;
					}).set('goon',function(){
						var effect=0;
						for(var target of trigger.targets){
							var eff=get.effect(target,trigger.card,trigger.player,player);
							if(!target.mayHaveShan(player,'use',target.getCards('h',i=>{
								return i.hasGaintag('sha_notshan');
							}))||trigger.player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:trigger.card,
							},true)){
								eff*=1.25;
							}
							if(target.hp<=2) eff*=1.1;
							effect+=eff;
						}
						return effect<0;
					}());
					'step 1'
					if(result.bool){
						game.log(player,'取消了',trigger.card,'的所有目标');
						trigger.targets.length=0;
						trigger.getParent().triggeredTargets2.length=0;
						trigger.untrigger();
					}
				},
				ai:{
					expose:0.2
				}
			},
			vtbxianli:{
				audio:1,
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				usable:2,
				filter:function(event,player){
					if(!_status.currentPhase||!_status.currentPhase.isIn()||!_status.currentPhase.countGainableCards(player,'he')) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.some(card=>{
						return get.name(card,false)=='shan';
					});
				},
				check:function(event,player){
					return get.effect(_status.currentPhase,{name:'shunshou_copy2'},player,player)>0;
				},
				prompt2:function(event,player){
					return '获得'+get.translation(_status.currentPhase)+'的一张牌';
				},
				logTarget:()=>_status.currentPhase,
				content:function(){
					'step 0'
					player.gainPlayerCard(_status.currentPhase,'he',true);
				},
				ai:{
					expose:0.15,
				}
			},
			//小桃
			vtbtaoyan:{
				audio:1,
				trigger:{
					player:'phaseBegin',
				},
				direct:true,
				content:function(){
					'step 0'
					if(!_status.vtbtaoyan_count){
						_status.vtbtaoyan_count=5;
					}
					player.chooseTarget(get.prompt('vtbtaoyan'),'令一或两名其他角色摸一张牌并从游戏外获得一张【桃】（♥6）',lib.filter.notMe,[1,2]).set('ai',target=>{
						var player=_status.event.player;
						return get.recoverEffect(target,player,player)/2+get.attitude(player,target);
					});
					'step 1'
					if(result.bool){
						var targets=result.targets.slice();
						targets.sortBySeat();
						player.logSkill('vtbtaoyan',targets);
						game.broadcastAll(function(){
							if(!lib.inpile.includes('tao')){
								lib.inpile.add('tao');
							}
						});
						player.addSkill('vtbtaoyan_remove');
						for(var target of targets){
							target.draw();
							if(!_status.vtbtaoyan_count) continue;
							if(!_status.vtbtaoyan_cards) _status.vtbtaoyan_cards=[];
							_status.vtbtaoyan_count--;
							var card=game.createCard('tao','heart',6);
							_status.vtbtaoyan_cards.push(card.cardid);
							target.gain(card,'gain2');
						}
					}
				},
				ai:{
					expose:0.3,
					threaten:3.2,
				},
				subSkill:{
					remove:{
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
						},
						forced:true,
						charlotte:true,
						popup:false,
						firstDo:true,
						forceDie:true,
						filter:function(event,player){
							if(typeof _status.vtbtaoyan_count!='number') return false;
							var cards=event.getd();
							return cards.some(card=>{
								return _status.vtbtaoyan_cards.includes(card.cardid);
							});
						},
						content:function(){
							var cards=trigger.getd(),remove=[];
							for(var card of cards){
								if(_status.vtbtaoyan_cards.includes(card.cardid)){
									_status.vtbtaoyan_cards.remove(card.cardid);
									remove.push(card);
								}
							}
							if(remove.length){
								remove.forEach(i=>{
									i.remove();
									_status.vtbtaoyan_count++;
								});
								game.log(remove,'被移出了游戏');
							}
						},
					}
				}
			},
			vtbyanli:{
				audio:1,
				trigger:{
					global:'dying',
				},
				filter:function(event,player){
					if(player.hasSkill('vtbyanli_used')) return false;
					if(_status.currentPhase==player) return false;
					return event.player.hp<=0;
				},
				check:function(event,player){
					return get.recoverEffect(event.player,player,player)>0;
				},
				content:function(){
					'step 0'
					player.addTempSkill('vtbyanli_used','roundStart');
					trigger.player.recover(1-trigger.player.hp);
					trigger.player.draw();
				},
				subSkill:{
					used:{
						charlotte:true,
					}
				}
			},
			//小乐
						vtbleyu:{
								audio:1,
								trigger:{
										global:'phaseBegin',
								},
								direct:true,
								filter:function(event,player){
										return player.countCards('he')>=3;
								},
								content:function(){
										'step 0'
										player.chooseToDiscard(get.prompt2('vtbleyu',trigger.player),3,'he').set('ai',card=>{
												if(ui.selected.cards.length==2) return 10-get.value(card);
												if(_status.event.effect>0){
														return 6-get.value(card);
												}
												return 0;
										}).set('effect',trigger.player.hasJudge('lebu')?0:get.effect(trigger.player,{name:'lebu'},player,player)).set('logSkill',['vtbleyu',trigger.player]);
										'step 1'
										if(result.bool){
												trigger.player.judge(lib.card.lebu.judge).judge2=lib.card.lebu.judge2;
										} else event.finish();
										'step 2'
										if(!result.bool){
												trigger.player.skip('phaseUse');
										}
								},
								ai:{
										expose:0.3,
					threaten:2.9,
								},
						},
						vtbyuanli:{
								audio:1,
								trigger:{global:['phaseUseSkipped','phaseUseCancelled']},
								direct:true,
								content:function(){
										'step 0'
										player.chooseTarget(get.prompt2('vtbyuanli'),lib.filter.notMe).set('ai',target=>get.attitude(_status.event.player,target)+1);
										'step 1'
										if(result.bool){
												player.logSkill('vtbyuanli',result.targets[0]);
												game.asyncDraw([player,result.targets[0]].sortBySeat(_status.currentPhase));
										}
								},
								ai:{
										expose:0.1,
								},
						},
						vtbmeiniang:{
								audio:1,
								trigger:{global:'phaseUseBegin'},
								filter:function(event,player){
										return event.player!=player;
								},
								check:function(event,player){
										return get.attitude(player,event.player)>0&&event.player.getUseValue('jiu')>=0;
								},
								logTarget:'player',
								content:function(){
										trigger.player.chooseUseTarget('jiu',true,false);
								}
						},
						vtbyaoli:{
								audio:1,
								trigger:{global:'useCardAfter'},
								filter:function(event,player){
										return event.card.name=='jiu'&&event.player!=player&&event.player.isPhaseUsing();
								},
								logTarget:'player',
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
								content:function(){
										trigger.player.addTempSkill('vtbyaoli_effect');
										trigger.player.addMark('vtbyaoli_effect',1,false);
								},
								ai:{
										expose:0.15,
								},
								subSkill:{
										effect:{
												audio:'vtbyaoli',
												charlotte:true,
												trigger:{player:'useCard2'},
												forced:true,
												popup:false,
												onremove:true,
												nopop:true,
												filter:function(event,player){
														return event.card.name=='sha'&&player.countMark('vtbyaoli_effect')>0;
												},
												content:function(){
														'step 0'
														trigger.directHit.addArray(game.filterPlayer());
														var num=player.countMark('vtbyaoli_effect');
														if(!game.hasPlayer(current=>{
																return !trigger.targets.includes(current)&&lib.filter.targetEnabled2(trigger.card,player,current);
														})) event.finish();
														else player.chooseTarget('媱丽：是否为'+get.translation(trigger.card)+'额外指定'+(num>1?'至多':'')+get.cnNumber(num)+'个目标？',num==1?1:[1,num],(card,player,target)=>{
																return !_status.event.sourcex.includes(target)&&player.canUse(_status.event.card,target);
														}).set('sourcex',trigger.targets).set('ai',target=>{
																var player=_status.event.player;
																return get.effect(target,_status.event.card,player,player);
														}).set('card',trigger.card);
														'step 1'
														if(result.bool){
																if(!event.isMine()&&!event.isOnline()) game.delayx();
																event.targets=result.targets;
														}
														else {
																event.finish();
														}
														'step 2'
														player.logSkill('vtbyaoli_effect',event.targets);
														trigger.targets.addArray(event.targets);
														player.removeSkill('vtbyaoli_effect');
												},
												marktext:'媱',
												intro:{
														content:'下一张【杀】不可被响应且可以额外指定&个目标',
												},
												ai:{
														directHit_ai:true,
														skillTagFilter:function(player,tag,arg){
																return arg.card.name=='sha';
														},
												}
										}
								}
						},
			//官盗S特015神马超
			psshouli:{
				audio:'shouli',
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player!=_status.currentPhase&&(name=='sha'||name=='shan')) return true;
				},
				filter:function(event,player){
					if(event.responded||event.psshouli||event.type=='wuxie') return false;
					if(game.hasPlayer(function(current){
						return current.getEquips(4).length>0;
					})&&event.filterCard(get.autoViewAs({
						name:'sha',
						storage:{psshouli:true},
					},'unsure'),player,event)) return true;
					if(game.hasPlayer(function(current){
						return current.getEquips(3).length>0;
					})&&event.filterCard(get.autoViewAs({
						name:'shan',
						storage:{psshouli:true},
					},'unsure'),player,event)) return true;
					return false;
				},
				delay:false,
				locked:true,
				filterTarget:function(card,player,target){
					var event=_status.event,evt=event;
					if(event._backup) evt=event._backup;
					var equip3=target.getCards('e',card=>get.is.defendingMount(card,false));
					var equip4=target.getCards('e',card=>get.is.attackingMount(card,false));
					if(equip3.length&&equip3.some(card=>evt.filterCard(get.autoViewAs({
						name:'shan',
						storage:{psshouli:true},
					},[card]),player,event))) return true;
					return equip4.some(card=>{
						var sha=get.autoViewAs({
							name:'sha',
							storage:{psshouli:true},
						},[card]);
						if(evt.filterCard(sha,player,event)){
							if(!evt.filterTarget) return true;
							return game.hasPlayer(function(current){
								return evt.filterTarget(sha,player,current);
							})
						}
					})
				},
				prompt:'将场上的一张坐骑牌当做【杀】或【闪】使用或打出',
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('psshouli',true);
					var list=[];
					var equip3=target.getCards('e',card=>get.is.defendingMount(card,false));
					var equip4=target.getCards('e',card=>get.is.attackingMount(card,false));
					var backupx=_status.event;
					_status.event=evt;
					try{
						if(equip3.length&&equip3.some(card=>{
							var shan=get.autoViewAs({
								name:'shan',
								storage:{psshouli:true},
							},[card]);
							if(evt.filterCard(shan,player,event)) return true;
							return false;
						})){
							list.push('shan');
						}
						if(equip4.length&&equip4.some(card=>{
							var sha=get.autoViewAs({
								name:'sha',
								storage:{psshouli:true},
							},[card]);
							if(evt.filterCard(sha,player,evt)&&(!evt.filterTarget||game.hasPlayer(function(current){
								return evt.filterTarget(sha,player,current);
							}))) return true;
							return false;
						})){
							list.push('sha');
						}
					}catch(e){game.print(e)}
					_status.event=backupx;
					if(list.length==1){
						event.cardName=list[0];
						var cards=list[0]=='shan'?equip3:equip4;
						if(cards.length==1) event._result={
							bool:true,
							links:[cards[0]],
						}
						else player.choosePlayerCard(true,target,'e').set('filterButton',function(button){
							return _status.event.cards.includes(button.link);
						}).set('cards',cards)
					}
					else player.choosePlayerCard(true,target,'e').set('filterButton',function(button){
						var card=button.link;
						return get.is.attackingMount(card)||get.is.defendingMount(card);
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=(event.cardName||(get.is.attackingMount(result.links[0])?'sha':'shan'));
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.psshouli_backup.viewAs={
									name:name,
									cards:[result],
									storage:{psshouli:true},
								};
								lib.skill.psshouli_backup.prompt=('选择'+get.translation(name)+'（'+get.translation(result)+'）的目标');
							},result.links[0],name);
							evt.set('_backupevent','psshouli_backup');
							evt.backup('psshouli_backup');
							evt.set('openskilldialog','选择'+get.translation(name)+'（'+get.translation(result.links[0])+'）的目标');
							evt.set('norestore',true);
							evt.set('custom',{
								add:{},
								replace:{window:function(){}}
							});
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs({
								name:name,
								cards:[result.links[0]],
								storage:{psshouli:true},
							},result.links);
							evt.result.cards=[result.links[0]];
							target.$give(result.links[0],player,false);
							if(player!=target) target.addTempSkill('fengyin');
							target.addTempSkill('psshouli_thunder');
							player.addTempSkill('psshouli_thunder');
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag){
						var func=get.is[tag=='respondSha'?'attackingMount':'defendingMount'];
						return game.hasPlayer(function(current){
							return current.hasCard(card=>func(card,false),'e');
						});
					},
					order:2,
					result:{
						player:function(player,target){
							var att=Math.max(8,get.attitude(player,target));
							if(_status.event.type!='phase') return 9-att;
							if(!player.hasValueTarget({name:'sha'})) return 0;
							return 9-att;
						},
					},
				},
				group:'psshouli_init',
				subSkill:{
					thunder:{
						charlotte:true,
						trigger:{player:'damageBegin1'},
						forced:true,
						mark:true,
						content:function(){
							trigger.num++;
							game.setNature(trigger,'thunder');
						},
						marktext:'⚡',
						intro:{
							content:'受到的伤害+1且改为雷属性',
						},
						ai:{
							effect:{
								target:(card,player,target)=>{
									if(!get.tag(card,'damage')) return;
									if(target.hasSkillTag('nodamage')||target.hasSkillTag('nothunder')) return 'zeroplayertarget';
									if(target.hasSkillTag('filterDamage',null,{
										player:player,
										card:new lib.element.VCard({
											name:card.name,
											nature:'thunder'
										},[card])
									})) return;
									return 2;
								}
							}
						}
					},
					init:{
						audio:'psshouli',
						trigger:{
							global:'phaseBefore',
							player:'enterGame',
						},
						forced:true,
						filter:function(event,player){
							return event.name!='phase'||game.phaseNumber==0;
						},
						logTarget:()=>game.filterPlayer(),
						equips:[
							['heart',5,'chitu'],
							['diamond',13,'zixin'],
							['spade',5,'jueying'],
							['diamond',13,'hualiu'],
							['club',5,'dilu'],
							['spade',13,'dawan'],
							['heart',13,'zhuahuang'],
							['heart',3,'jingfanma']
						],
						content:function(){
							'step 0'
							event.targets=game.filterPlayer().sortBySeat(_status.firstAct2||game.zhong||game.zhu||_status.firstAct||player);
							event.target=event.targets.shift();
							game.delayx();
							'step 1'
							player.line(target,'green');
							target.chooseToUse('狩骊：使用一张坐骑牌并摸一张牌，或使用一张坐骑牌指示物',function(card,player,event){
								if(get.subtype(card)!='equip3'&&get.subtype(card)!='equip4'&&get.subtype(card)!='equip6') return false;
								return lib.filter.filterCard.apply(this,arguments);
							}).set('ai',()=>1);
							'step 2'
							if(result.bool) target.draw();
							else{
								var cardx=lib.skill.psshouli_init.equips.randomRemove();
								if(!cardx) return;
								cardx={
									suit:cardx[0],
									number:cardx[1],
									name:cardx[2],
								}
								var card=game.createCard(cardx);
								if(!_status.psshouli_equips) _status.psshouli_equips=[];
								_status.psshouli_equips.push(card.cardid);
								if(card){
									target.chooseUseTarget(card,true,'nopopup','noanimate');
									player.addSkill('psshouli_remove');
								}
							}
							'step 3'
							event.target=event.targets.shift();
							if(event.target){
								event.goto(1);
							}
						},
					},
					remove:{
						trigger:{
							global:['loseAfter','loseAsyncAfter','cardsDiscardAfter','equipAfter'],
						},
						forced:true,
						charlotte:true,
						popup:false,
						firstDo:true,
						forceDie:true,
						filter:function(event,player){
							if(!_status.psshouli_equips||!_status.psshouli_equips.length) return false;
							var cards=event.getd();
							return cards.filter(i=>_status.psshouli_equips.includes(i.cardid)).length;
						},
						content:function(){
							var cards=trigger.getd(),remove=[];
							for(var card of cards){
								if(_status.psshouli_equips.includes(card.cardid)){
									_status.psshouli_equips.remove(card.cardid);
									remove.push(card);
								}
							}
							if(remove.length){
								game.cardsGotoSpecial(remove);
								lib.skill.psshouli_init.equips.addArray(remove.map(i=>[i.suit,i.number,i.name]));
								game.log('坐骑指示物',remove,'被移出了游戏');
							}
						},
					}
				},
			},
			psshouli_backup:{
				sourceSkill:'psshouli',
				precontent:function(){
					'step 0'
					delete event.result.skill;
					event.result._apply_args={'throw':false};
					var cards=event.result.card.cards;
					event.result.cards=cards;
					var owner=get.owner(cards[0]);
					event.target=owner;
					owner.$throw(cards[0]);
					player.popup(event.result.card.name,'metal');
					game.delayx();
					event.getParent().addCount=false;
					'step 1'
					if(player!=target) target.addTempSkill('fengyin');
					target.addTempSkill('psshouli_thunder');
					player.addTempSkill('psshouli_thunder');
				},
				filterCard:function(){return false},
				prompt:'请选择【杀】的目标',
				selectCard:-1,
			},
			pshengwu:{
				audio:'hengwu',
				mod:{
					aiOrder:(player,card,num)=>{
						if(num>0&&get.tag(card,'draw')&&ui.cardPile.childNodes.length+ui.discardPile.childNodes.length<20) return 0;
					},
					aiValue:(player,card,num)=>{
						if(num>0&&card.name==='zhuge') return 20;
					},
					aiUseful:(player,card,num)=>{
						if(num>0&&card.name==='zhuge') return 10;
					}
				},
				trigger:{player:['useCard','respond']},
				direct:true,
				locked:false,
				filter:function(event,player){
					return game.hasPlayer(i=>i.countCards('ej',cardx=>get.type(cardx)=='equip'&&get.suit(event.card)==get.suit(cardx)));
				},
				content:function(){
					'step 0'
					var suit=get.suit(trigger.card),extra=game.filterPlayer().map(i=>i.countCards('ej',cardx=>{
						return get.type(cardx)=='equip'&&get.suit(trigger.card)==get.suit(cardx);
					})).reduce((p,c)=>p+c);
					var prompt2='弃置任意张'+get.translation(suit)+'手牌，然后摸X张牌（X为你弃置的牌数+'+extra+'）';
					player.chooseToDiscard('h',[1,player.countCards('h',{suit:suit})],{suit:suit}).set('prompt',get.prompt('pshengwu')).set('prompt2',prompt2).set('ai',card=>{
						if(_status.event.tie) return 0;
						let player=_status.event.player;
						if(_status.event.goon) return 12-get.value(card);
						if(player==_status.currentPhase){
							if(['shan','caochuan','tao','wuxie'].includes(card.name)) return 8-get.value(card);
							return 6-get.value(card);
						}
						return 5.5-get.value(card);
					}).set('goon',player.countCards('h',{suit:suit})==1).set('tie',extra>ui.cardPile.childNodes.length+ui.discardPile.childNodes.length).set('logSkill','pshengwu');
					'step 1'
					if(result.bool){
						var num=result.cards.length;
						player.draw(num+game.filterPlayer().map(i=>i.countCards('ej',cardx=>get.type(cardx)=='equip'&&get.suit(trigger.card)==get.suit(cardx))).reduce((p,c)=>p+c));
					}
				},
				ai:{
					threaten:100,
					reverseEquip:true,
					effect:{
						player:(card,player,target)=>{
							if(typeof card!=='object') return;
							let suit=get.suit(card);
							if(!lib.suit.includes(suit)||player.hasCard(function(i){
								return get.suit(i,player)==suit;
							},'h')) return;
							return [1,game.countPlayer(current=>{
								return current.countCards('e',card=>{
									return get.suit(card,current)==suit;
								});
							})];
						},
						target:(card,player,target)=>{
							if(card.name==='sha'&&!player.hasSkillTag('directHit_ai',true,{
								target:target,
								card:card
							},true)&&game.hasPlayer(current=>{
								return current.hasCard(cardx=>{
									return get.subtype(cardx)==='equip3';
								},'e');
							})) return [0, -0.5];
						}
					}
				}
			},
			//战役篇田丰
			gzsuishi:{
				audio:'suishi',
				preHidden:['gzsuishi2'],
				trigger:{global:'dying'},
				forced:true,
				//priority:6.5,
				check:function(){
					return false;
				},
				filter:function(event,player){
					return event.player!=player&&event.parent.name=='damage'&&event.parent.source&&event.parent.source.isFriendOf(player);
				},
				content:function(){
					player.draw();
				},
				group:'gzsuishi2'
			},
			gzsuishi2:{
				audio:'suishi',
				trigger:{global:'dieAfter'},
				forced:true,
				check:function(){return false},
				filter:function(event,player){
					return event.player.isFriendOf(player);
				},
				content:function(){
					player.loseHp();
				}
			},
			//战役篇孔融
			zymingshi:{
				audio:'mingshi',
				forced:true,
				trigger:{target:'useCardToBefore'},
				priority:15,
				filter:function(event,player){
					if(!player.hasEmptySlot(2)) return false;
					if(event.card.name!='sha') return false;
					return game.hasNature(event.card);
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name==='sha'&&game.hasNature(card)&&target.hasEmptySlot(2)) return 'zeroplayertarget';
							if(get.subtype(card)=='equip2'&&target.isEmpty(2)) return [0.6,-0.8];
						}
					}
				}
			},
			//战役篇蒋钦
			zyshangyi:{
				audio:'shangyi',
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					'step 0'
					target.viewHandcards(player);
					'step 1'
					if(!target.countCards('h')) event.finish();
					else player.chooseCardButton(target,target.getCards('h'));
					'step 2'
					if(result.bool){
						target.discard(result.links[0]);
					}
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							return -target.countCards('h');
						}
					},
					threaten:1.1
				},
			},
			//官盗K系列杜预
			pkwuku:{
				audio:'spwuku',
				trigger:{global:'useCard'},
				forced:true,
				preHidden:true,
				filter:function(event,player){
					if(get.type(event.card)!='equip') return false;
					return player.countMark('pkwuku')<3;
				},
				content:function(){
					player.addMark('pkwuku',1);
				},
				marktext:'库',
				intro:{
					content:'mark',
				},
				ai:{
					combo:'pksanchen',
					threaten:3.6,
				},
			},
			pksanchen:{
				audio:'spsanchen',
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return player.countMark('pkwuku')>2;
				},
				content:function(){
					player.awakenSkill('pksanchen');
					player.gainMaxHp();
					player.recover();
					player.addSkills('pkmiewu');
				},
				ai:{
					combo:'wuku',
				},
				derivation:'pkmiewu',
			},
			pkmiewu:{
				audio:'spmiewu',
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					if(!player.countMark('pkwuku')||player.hasSkill('pkmiewu2')) return false;
					for(var i of lib.inpile){
						var type=get.type(i);
						if((type=='basic'||type=='trick')&&event.filterCard(get.autoViewAs({name:i},'unsure'),player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=='sha'){
								if(event.filterCard(get.autoViewAs({name},'unsure'),player,event)) list.push(['基本','','sha']);
								for(var nature of lib.inpile_nature){
									if(event.filterCard(get.autoViewAs({name,nature},'unsure'),player,event)) list.push(['基本','','sha',nature]);
								}
							}
							else if(get.type(name)=='trick'&&event.filterCard(get.autoViewAs({name},'unsure'),player,event)) list.push(['锦囊','',name]);
							else if(get.type(name)=='basic'&&event.filterCard(get.autoViewAs({name},'unsure'),player,event)) list.push(['基本','',name]);
						}
						return ui.create.dialog('灭吴',[list,'vcard']);
					},
					//これ　要らない（そよりん声线）
					//filter:function(button,player){
					//	return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					//},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						var player=_status.event.player;
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) return 0;
						return player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						});
					},
					backup:function(links,player){
						return {
							audio:'spmiewu',
							filterCard:()=>false,
							selectCard:-1,
							popname:true,
							viewAs:{name:links[0][2],nature:links[0][3]},
							precontent:function(){
								player.addTempSkill('pkmiewu2');
								player.removeMark('pkwuku',1);
							},
						}
					},
					prompt:function(links,player){
						return '视为使用'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'并摸一张牌';
					}
				},
				hiddenCard:function(player,name){
					if(!lib.inpile.includes(name)) return false;
					var type=get.type(name);
					return (type=='basic'||type=='trick')&&player.countMark('pkwuku')>0&&!player.hasSkill('pkmiewu2');
				},
				ai:{
					combo:'pkwuku',
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countMark('pkwuku')||player.hasSkill('pkmiewu2')) return false;
					},
					order:1,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
			},
			pkmiewu2:{
				trigger:{player:['useCardAfter','respondAfter']},
				forced:true,
				charlotte:true,
				popup:false,
				filter:function(event,player){
					return event.skill=='pkmiewu_backup';
				},
				content:function(){
					player.draw();
				},
			},
			pkmiewu_backup:{audio:'pkmiewu'},
			//官盗S系列关羽
			pszhonghun:{
				audio:'zhongyi',
				trigger:{player:['useCard','respond']},
				filter:function(event,player){
					return get.color(event.card)=='red';
				},
				frequent:true,
				content:function(){
					'step 0'
					var card=game.cardsGotoOrdering(get.cards()).cards[0];
					event.card=card;
					game.updateRoundNumber();
					player.showCards(card,get.translation(player)+'发动了【忠魂】');
					'step 1'
					if(get.color(card)=='red') player.gain(card,'gain2');
				}
			},
			//官盗S系列郭嘉·一版
			psqizuo:{
				audio:2,
				trigger:{global:['damageBegin1','damageBegin3']},
				filter:function(event,player,name){
					return name=='damageBegin1'&&event.source&&event.source.isIn()&&player.inRange(event.source)||name=='damageBegin3'&&event.player&&event.player.isIn()&&player.inRange(event.player);
				},
				direct:true,
				content:function(){
					'step 0'
					var name=event.triggername;
					var source=get.translation(trigger.source),target=get.translation(trigger.player),num=trigger.num;
					var targetx=trigger[name=='damageBegin1'?'source':'player'];
					var str=name=='damageBegin1'?(source+'即将对'+target+'造成'+num+'点伤害'):(target+'即将受到'+source+'造成的'+num+'点伤害');
					player.chooseToDiscard(get.prompt('psqizuo',targetx),str+'，是否弃置一张牌并判定，若结果颜色与此牌相同，你可以令此伤害+1或-1？','he').set('ai',card=>{
						if(_status.event.goon) return 5.25-get.value(card)+(get.color(card)==get.color(_status.pileTop)?0.75:0);
						return 0;
					}).set('goon',function(){
						var eff=get.damageEffect(trigger.player,trigger.source,player);
						if(eff>5&&!trigger.player.hasSkillTag('filterDamage',null,{
							player:player,
							card:trigger.card,
						})) return true;
						if(eff<-5) return true;
						return false;
					}()).set('logSkill',['psqizuo',targetx]);
					'step 1'
					if(result.bool){
						event.color=get.color(result.cards[0],player);
						player.judge(function(card){
							if(get.color(card)==_status.event.getParent('psqizuo').color) return 1;
							return 0;
						});
					}
					else event.finish();
					'step 2'
					if(result.bool){
						player.chooseControl('+1','-1','cancel2').set('prompt','是否令此伤害+1或-1？').set('ai',()=>{
							if(_status.event.eff<0) return 1;
							return 0;
						}).set('eff',get.damageEffect(trigger.player,trigger.source,player));
					}
					else event.finish();
					'step 3'
					if(result.index==0){
						trigger.num++;
						player.popup(' +1 ','fire');
						game.log(player,'令此伤害+1');
					}
					if(result.index==1){
						trigger.num--;
						player.popup(' -1 ','water');
						game.log(player,'令此伤害-1');
					}
				},
				ai:{
					threaten:0.8
				}
			},
			//官盗S系列郭嘉·二版
			psquanmou:{
				audio:2,
				trigger:{
					global:'useCardAfter',
				},
				direct:true,
				filter:function(event,player){
					return get.type2(event.card)=='trick'&&event.player!=player&&event.targets&&event.targets.includes(player)&&event.cards.filterInD('odj').length&&player.countCards('h');
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt('psquanmou'),'弃置一张'+get.translation(get.color(trigger.card))+'手牌，获得'+get.translation(trigger.cards),'h',(card,player)=>{
						return get.color(card)==_status.event.color;
					}).set('ai',card=>{
						return _status.event.value-get.value(card);
					}).set('logSkill','psquanmou').set('value',get.value(trigger.cards,player)).set('color',get.color(trigger.card));
					'step 1'
					if(result.bool){
						var cards=trigger.cards.filterInD('odj');
						if(cards.filterInD('od').length) player.gain(cards.filterInD('od'),'gain2');
						if(cards.filterInD('j').length) player.gain(cards.filterInD('j'),get.owner(cards.filterInD('j')[0]),'give');
					}
				}
			},
			//官盗S赵云·一版
			pshuiqiang:{
				audio:2,
				trigger:{player:['shaMiss','eventNeutralized']},
				direct:true,
				filter:function(event,player){
					if(!event.card||event.card.name!='sha') return false;
					return event.target.isIn()&&player.canUse('sha',event.target,false)&&(player.hasSha()||_status.connectMode&&player.countCards('h'));
				},
				content:function(){
					"step 0"
					player.chooseToUse(get.prompt2('pshuiqiang',trigger.target),function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},trigger.target,-1).set('addCount',false).logSkill='pshuiqiang';
				}
			},
			pshuntu:{
				audio:2,
				trigger:{source:'damageSource'},
				usable:1,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.getParent(2).player==player&&event.notLink()&&player.isPhaseUsing();
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToUse(get.prompt2('pshuntu',trigger.player),function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},trigger.player,-1).set('addCount',false).logSkill='pshuntu';
					'step 1'
					if(!result.bool) player.storage.counttrigger.pshuntu--;
				}
			},
			//官盗S赵云·二版
			psqijin:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					'step 0'
					trigger.changeToZero();
					event.cards=get.cards(7);
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str='七进';
						if(player==game.me&&!_status.auto) str+='：获得一种颜色的所有牌';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['七进',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					'step 1'
					var list=[];
					for(var i of cards) list.add(get.color(i,false));
					list.sort();
					var next=player.chooseControl(list);
					next.set('ai',function(){
						return _status.event.choice;
					}).set('choice',function(){
						if(list.length==0) return list[0];
						var color=list[0];
						var cards1=cards.filter(i=>get.color(i)==color),cards2=cards.filter(i=>get.color(i)==list[1]);
						if(get.value(cards1)*cards1.length>get.value(cards2)*cards2.length) return list[0];
						return list[1];
					}());
					'step 2'
					event.color=result.control;
					var time=1000-(get.utc()-event.time);
					if(time>0) game.delay(0,time);
					'step 3'
					game.broadcastAll('closeDialog',event.videoId);
					player.gain(cards.filter(i=>get.color(i,false)==event.color),'gain2');
				},
				ai:{
					threaten:1.5
				}
			},
			psqichu:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player!=_status.currentPhase&&!player.hasSkill('psqichu_used')&&get.type(name)=='basic'&&lib.inpile.includes(name)) return true;
				},
				filter:function(event,player){
					if(event.responded||player==_status.currentPhase||player.hasSkill('psqichu_used')) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				delay:false,
				content:function(){
					'step 0'
					player.addTempSkill('psqichu_used');
					var evt=event.getParent(2);
					var cards=get.cards(2);
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i].fix(),ui.cardPile.firstChild);
					}
					var aozhan=player.hasSkill('aozhan');
					player.chooseButton(['七出：选择要'+(evt.name=='chooseToUse'?'使用':'打出')+'的牌',cards]).set('filterButton',function(button){
						return _status.event.cards.includes(button.link);
					}).set('cards',cards.filter(function(card){
						if(get.type(card)!='basic') return false;
						if(aozhan&&card.name=='tao'){
							return evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)||evt.filterCard({
								name:'shan',isCard:true,cards:[card],
							},evt.player,evt);
						}
						return evt.filterCard(card,evt.player,evt);
					})).set('ai',function(button){
						var evt=_status.event.getParent(3);
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=(evt.ai||event.ai1)(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=result.links[0].name,aozhan=(player.hasSkill('aozhan')&&name=='tao');
						if(aozhan){
							name=evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)?'sha':'shan';
						}
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.psqichu_backup.viewAs={name:name,cards:[result],isCard:true};
								lib.skill.psqichu_backup.prompt='选择'+get.translation(result)+'的目标';
							},result.links[0],name);
							evt.set('_backupevent','psqichu_backup');
							evt.backup('psqichu_backup');
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs(result.links[0]);
							if(aozhan) evt.result.card.name=name;
							evt.result.cards=[result.links[0]];
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(target.hasSkill('psqichu_used')) return;
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
					order:11,
					respondShan:true,
					respondSha:true,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				},
				subSkill:{
					backup:{
						precontent:function(){
							delete event.result.skill;
							var name=event.result.card.name;
							event.result.cards=event.result.card.cards;
							event.result.card=get.autoViewAs(event.result.cards[0]);
							event.result.card.name=name;
						},
						filterCard:function(){return false},
						selectCard:-1,
					},
					used:{charlotte:true},
				}
			},
			pslongxin:{
				audio:2,
				trigger:{player:'phaseJudgeBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('j')&&player.countCards('h');
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('pslongxin'),{type:'equip'},'he').set('logSkill','pslongxin').set('ai',card=>{
						if(_status.event.goon) return 15-get.value(card);
						return 0;
					}).set('goon',player.hasCard(card=>{
						var cardj=card.viewAs?{name:card.viewAs}:card;
						return get.effect(player,cardj,player,player)<0;
					},'j'));
					'step 1'
					if(result.bool){
						player.discardPlayerCard(player,'j',true);
					}
				},
			},
			//官盗S周瑜·一版
			psoldshiyin:{
				audio:2,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				frequent:true,
				filter:function(event,player){
					if(player!=_status.currentPhase) return false;
					return event.getg(player).filter(i=>get.owner(i)==player).length>0;
				},
				content:function(){
					'step 0'
					player.showCards(trigger.getg(player).filter(i=>get.owner(i)==player),get.translation(player)+'发动了【识音】');
					'step 1'
					var suits=[],cards=trigger.getg(player).filter(i=>get.owner(i)==player);
					for(var card of cards) suits.add(get.suit(card,player));
					player.addTempSkill('psoldshiyin_effect');
					if(!player.storage.psoldshiyin_effect) player.storage.psoldshiyin_effect=0;
					player.storage.psoldshiyin_effect=Math.max(player.storage.psoldshiyin_effect,suits.length);
					if(suits.length>=2) player.addMark('psoldshiyin_damage',1,false);
				},
				subSkill:{
					effect:{
						trigger:{player:'useCard'},
						charlotte:true,
						forced:true,
						onremove:['psoldshiyin_effect','psoldshiyin_damage'],
						content:function(){
							var num=player.countMark('psoldshiyin_effect');
							if(num>=1) trigger.directHit.addArray(game.players);
							if(num>=2&&get.tag(trigger.card,'damage')) trigger.baseDamage+=player.countMark('psoldshiyin_damage');
							if(num>=3) player.draw();
							player.removeSkill('psoldshiyin_effect');
						},
						mod:{
							aiOrder:function(player,card,num){
								var numx=player.countMark('psoldshiyin_effect');
								if(numx>=2&&get.tag(card,'damage')) return num+10;
							},
						}
					}
				}
			},
			//官盗S周瑜·二版
			psshiyin:{
				audio:2,
				trigger:{
					global:'phaseBefore',
					player:'enterGame',
				},
				forced:true,
				locked:false,
				direct:true,
				group:'psshiyin_change',
				filter:function(event,player){
					return (event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					player.chooseCard(get.prompt('psshiyin'),'将一张手牌置于武将牌上，称为“杂音”牌').set('ai',card=>20-get.value(card));
					'step 1'
					if(result.bool){
						player.logSkill('psshiyin');
						player.addToExpansion(result.cards,player,'give').gaintag.add('psshiyin');
					}
				},
				marktext:'音',
				intro:{
					name:'杂音',
					name2:'杂音',
					content:'expansion',
					markcount:'expansion',
				},
				subSkill:{
					change:{
						trigger:{player:'phaseUseBegin'},
						direct:true,
						filter:function(event,player){
							return player.getExpansions('psshiyin').length&&player.countCards('h');
						},
						content:function(){
							'step 0'
							var card=player.getExpansions('psshiyin')[0];
							player.chooseCard(get.prompt('psshiyin'),'用一张手牌替换“杂音”牌（'+get.translation(card)+'）').set('ai',card=>{
								if(_status.event.suit&&get.suit(card)==_status.event.suit) return 8-get.value(card);
								return 0;
							}).set('suit',function(){
								var suits=lib.suit.slice().map(i=>[i,(get.suit(card)==i?1:0)+player.countCards('h',{suit:i})]).filter(i=>i[1]>0);
								suits.sort((a,b)=>a[1]-b[1]);
								if(suits.length>0) return suits[0][0];
								return null;
							}());
							'step 1'
							if(result.bool){
								player.logSkill('psshiyin');
								player.addToExpansion(result.cards[0],'give',player).gaintag.add('psshiyin');
								var card=player.getExpansions('psshiyin')[0];
								if(card) player.gain(card,'gain2');
							}
						},
					}
				}
			},
			psquwu:{
				audio:2,
				forced:true,
				trigger:{target:'useCardToBefore'},
				filter:function(event,player){
					return player.getExpansions('psshiyin').length&&get.suit(player.getExpansions('psshiyin')[0])==get.suit(event.card);
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					threaten:1.1,
					combo:'psshiyin',
					effect:{
						target:function(card,player,target,current){
							var list=target.getExpansions('psshiyin');
							for(var cardx of list){
								if(get.suit(cardx)==get.suit(card)) return 'zeroplayertarget';
							}
						},
					}
				},
				mod:{
					cardEnabled2:function(card,player){
						var list=player.getExpansions('psshiyin');
						for(var cardx of list){
							if(get.suit(cardx)==get.suit(card)) return false;
						}
					},
					cardRespondable:function(card,player){
						var list=player.getExpansions('psshiyin');
						for(var cardx of list){
							if(get.suit(cardx)==get.suit(card)) return false;
						}
					},
					cardSavable:function(card,player){
						var list=player.getExpansions('psshiyin');
						for(var cardx of list){
							if(get.suit(cardx)==get.suit(card)) return false;
						}
					},
				}
			},
			psliaozou:{
				audio:2,
				enable:'phaseUse',
				locked:false,
				filter:function(event,player){
					return !player.hasSkill('psliaozou_blocker',null,null,false)&&player.getExpansions('psshiyin').length>0;
				},
				content:function(){
					'step 0'
					player.showHandcards(get.translation(player)+'发动了【聊奏】');
					'step 1'
					var cards=player.getExpansions('psshiyin'),bool=true;
					for(var card of cards){
						var suit=get.suit(card);
						if(player.hasCard(cardx=>get.suit(cardx)==suit)){
							bool=false; break;
						}
					}
					if(bool) player.draw();
					else player.addTempSkill('psliaozou_blocker',{player:['useCard1','useSkillBegin','phaseUseEnd']});
				},
				subSkill:{
					blocker:{charlotte:true}
				},
				mod:{
					aiValue:function(player,card,num){
						var suit=get.suit(card);
						if(player.isPhaseUsing()&&player.getExpansions('psshiyin').some(i=>get.suit(i)==suit)) return num/5;
					},
					aiUseful:function(){
						return lib.skill.psliaozou.mod.aiValue.apply(this,arguments);
					},
				},
				ai:{
					order:9.9,
					result:{
						player:function(player){
							var cards=player.getExpansions('psshiyin'),bool=true;
							for(var card of cards){
								var suit=get.suit(card);
								if(player.hasCard(cardx=>get.suit(cardx)==suit)) return 0;
							}
							return 1;
						}
					}
				}
			},
			//官盗S武将传晋司马
			psquanyi:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				group:'psquanyi_tianbian',
				content:function(){
					'step 0'
					player.chooseToCompare(target,function(card){
						if(typeof card=='string'&&lib.skill[card]){
							var ais=lib.skill[card].check||function(){return 0};
							return ais();
						}
						var player=get.owner(card);
						var getn=function(card){
							if(player.hasSkill('tianbian')&&get.suit(card)=='heart') return 13;
							return get.number(card);
						}
						var event=_status.event.getParent();
						var to=(player==event.player?event.target:event.player);
						var addi=(get.value(card)>=8&&get.type(card)!='equip')?-6:0;
						if(card.name=='du') addi-=5;
						if(get.color(card)=='black') addi-=6;
						if(player==event.player){
							if(event.small){
								return -getn(card)-get.value(card)/2+addi;
							}
							return getn(card)-get.value(card)/2+addi;
						}
						else{
							if((get.attitude(player,to)<=0)==Boolean(event.small)){
								return -getn(card)-get.value(card)/2+addi;
							}
							return getn(card)-get.value(card)/2+addi;
						}
					});
					'step 1'
					if(result.tie) event.finish();
					else{
						var targets=[player,target];
						if(!result.bool) targets.reverse();
						var suits=[result.player,result.target].map(i=>get.suit(i,false));
						event.targets=targets;
						event.suits=suits;
					}
					'step 2'
					if(event.suits.includes('heart')){
						if(targets[1].countGainableCards('hej',targets[0])>0){
							targets[0].gainPlayerCard(targets[1],'hej',true);
						}
					}
					'step 3'
					if(event.suits.includes('diamond')){
						targets[1].damage(targets[0]);
					}
					'step 4'
					if(event.suits.includes('spade')){
						targets[0].loseHp();
					}
					'step 5'
					if(event.suits.includes('club')){
						if(targets[0].countDiscardableCards(targets[0],'he')){
							targets[0].chooseToDiscard(2,true,'he');
						}
					}
				},
				ai:{
					order:6,
					result:{
						target:-1
					}
				},
				subSkill:{
					tianbian:{
						audio:'psquanyi',
						enable:'chooseCard',
						check:function(event){
							var player=_status.event.player;
							if(player.hasSkill('smyyingshi')){
								var card=ui.cardPile.childNodes[0];
								if(get.color(card)=='black'&&get.number(card)<=4||get.color(card)=='red'&&get.number(card)>=11) return 20;
							}
							return (!player.hasCard(function(card){
								var val=get.value(card);
								return val<0||(get.color(card)=='black'&&val<=4||get.color(card)=='red'&&get.number(card)>=11);
							},'h'))?20:0;
						},
						filter:function(event){
							return event.type=='compare'&&!event.directresult;
						},
						onCompare:function(player){
							return game.cardsGotoOrdering(get.cards()).cards;
						},
					}
				}
			},
			//官盗S曹植
			psliushang:{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				forced:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				group:'psliushang_give',
				content:function(){
					'step 0'
					trigger.changeToZero();
					player.draw(1+Math.max(3,game.countPlayer()));
					event.targets=game.filterPlayer(i=>i!=player);
					'step 1'
					var current=targets.shift();
					if(!player.countCards('h')) event.finish();
					else player.chooseCardTarget({
						prompt:'流殇：将一张牌置于'+get.translation(current)+'武将牌上',
						current:current,
						filterCard:true,
						forced:true,
						filterTarget:function(card,player,target){
							return target==_status.event.current;
						},
						selectTarget:-1,
						ai1:function(card){
							var current=_status.event.current;
							return get.value(card,current)*get.attitude(_status.event.player,current);
						},
						ai2:()=>1
					});
					'step 2'
					if(result.bool){
						result.targets[0].addToExpansion(result.cards,player,'give').gaintag.add('psliushang');
					}
					if(targets.length) event.goto(1);
				},
				marktext:'殇',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				subSkill:{
					give:{
						trigger:{global:'phaseZhunbeiBegin'},
						filter:function(event,player){
							return event.player!=player&&event.player.getExpansions('psliushang').length;
						},
						forced:true,
						logTarget:'player',
						content:function(){
							'step 0'
							var cards=trigger.player.getExpansions('psliushang'),name=get.translation(cards);
							event.cards=cards;
							trigger.player.chooseControl().set('choiceList',[
								'获得'+name+'，且于本回合防止对'+get.translation(player)+'的伤害',
								'将'+name+'置入弃牌堆'
							]).set('ai',()=>{
								return _status.event.choice;
							}).set('choice',function(){
								if(get.damageEffect(player,trigger.player,trigger.player)<=0) return 0;
								if(get.value(cards,trigger.player)<0) return 1;
								if(trigger.player.hasCard(card=>{
									return get.tag(card,'damage')&&trigger.player.canUse(card,player)&&get.effect(player,card,trigger.player,trigger.player)>0;
								},'hs')) return 1;
								return 0;
							}());
							'step 1'
							if(result.index==0){
								trigger.player.gain(cards,'gain2');
								trigger.player.addTempSkill('psliushang_prevent');
								trigger.player.markAuto('psliushang_prevent',[player]);
							}
							else{
								trigger.player.loseToDiscardpile(cards);
							}
							'step 2'
							game.delayx();
						}
					},
					prevent:{
						trigger:{source:'damageBegin2'},
						filter:function(event,player){
							return player.getStorage('psliushang_prevent').includes(event.player);
						},
						forced:true,
						onremove:true,
						charlotte:true,
						logTarget:'player',
						content:function(){
							trigger.cancel();
						},
						ai:{
							effect:{
								target:function (card,player,target,current){
									if(player.getStorage('psliushang_prevent').includes(target)&&get.tag(card,'damage')){
										return 'zeroplayertarget';
									}
								},
							},
						}
					}
				}
			},
			psqibu:{
				trigger:{player:'dying'},
				filter:function(event,player){
					return player.hp<=0;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'water',
				content:function(){
					'step 0'
					player.awakenSkill('psqibu');
					var cards=game.cardsGotoOrdering(get.cards(7)).cards;
					game.updateRoundNumber();
					event.cards=cards;
					player.showCards(cards,get.translation(player)+'发动了【流殇】');
					'step 1'
					var num=cards.filter(i=>get.suit(i)=='heart').length;
					var gains=cards.filter(i=>get.suit(i)=='club');
					if(num>0) player.recover(num);
					if(gains.length) player.gain(gains,'gain2');
				}
			},
			//官盗S曹丕
			psjianwei:{
				audio:2,
				trigger:{player:'phaseBegin'},
				skillAnimation:true,
				animationColor:'water',
				limited:true,
				direct:true,
				filter:function(event,player){
					return player.hp>=1;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('psjianwei'),lib.filter.notMe).set('ai',target=>{
						var player=_status.event.player;
						if(player.hp==1&&!player.canSave(player)) return 0;
						var sgn=get.sgnAttitude(player,target);
						var valMine=[0,0],valHis=[0,0];
						player.getCards('hej',card=>{
							if(get.position(card)=='j'){
								valMine[0]+=get.effect(player,card,player);
								valMine[1]+=get.effect(target,card,player);
							}
							else{
								valMine[0]+=get.value(card,player);
								valMine[1]+=get.value(card,target)*sgn;
							}
						});
						target.getCards('hej',card=>{
							if(get.position(card)=='j'){
								valHis[0]+=get.effect(player,card,player);
								valHis[1]+=get.effect(target,card,player);
							}
							else{
								valHis[0]+=get.value(card,player);
								valHis[1]+=get.value(card,target)*sgn;
							}
						});
						return valMine[1]-valMine[0]+valHis[0]-valHis[1]>=60;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('psjianwei',target);
						player.awakenSkill('psjianwei');
						player.loseHp();
					}
					else event.finish();
					'step 2'
					if(player.isIn()&&target.isIn()){
						var next=game.createEvent('psjianwei_swap');
						next.player=player;
						next.target=target;
						next.set('cards1',player.getCards('hej'));
						next.set('cards2',target.getCards('hej'));
						next.setContent(lib.skill.psjianwei.swapRegioncards);
					}
				},
				swapRegioncards:function(){
					'step 0'
					player.$giveAuto(event.cards1,target);
					target.$giveAuto(event.cards2,player);
					'step 1'
					event.h1=event.cards1.filter(i=>get.position(i)=='h');
					event.e1=event.cards1.filter(i=>get.position(i)=='e');
					event.j1=event.cards1.filter(i=>get.position(i)=='j');
					event.h2=event.cards2.filter(i=>get.position(i)=='h');
					event.e2=event.cards2.filter(i=>get.position(i)=='e');
					event.j2=event.cards2.filter(i=>get.position(i)=='j');
					game.loseAsync({
						lose_list:[
							[player,event.cards1],
							[target,event.cards2]
						]
					}).setContent('chooseToCompareLose');
					'step 2'
					var todis=[];
					for(var i=0;i<event.j1.length;i++){
						if(target.isDisabledJudge()||target.hasJudge(event.j1[i].viewAs||event.j1[i].name)) todis.push(event.j1[i]);
					}
					for(var i=0;i<event.j2.length;i++){
						if(player.isDisabledJudge()||player.hasJudge(event.j2[i].viewAs||event.j2[i].name)) todis.push(event.j2[i]);
					}
					if(todis.length) game.cardsDiscard(todis);
					'step 3'
					game.loseAsync({
						gain_list:[
							[player,event.h2.filter(i=>get.position(i,true)=='o')],
							[target,event.h1.filter(i=>get.position(i,true)=='o')]
						],
					}).setContent('gaincardMultiple');
					for(var i=0;i<event.e2.length;i++){
						if(get.position(event.e2[i],true)=='o') player.equip(event.e2[i]);
					}
					for(var i=0;i<event.e1.length;i++){
						if(get.position(event.e1[i],true)=='o') target.equip(event.e1[i]);
					}
					for(var i=0;i<event.j2.length;i++){
						if(get.position(event.j2[i],true)=='o') player.addJudge(event.j2[i]);
					}
					for(var i=0;i<event.j1.length;i++){
						if(get.position(event.j1[i],true)=='o') target.addJudge(event.j1[i]);
					}
					'step 4'
					game.delayx();
				}
			},
			//官盗S司马懿
			pszhonghu:{
				audio:2,
				trigger:{global:'dieAfter'},
				global:'pszhonghu_skip',
				filter:function(event,player){
					return player!=_status.currentPhase;
				},
				content:function(){
					'step 0'
					var evt=trigger.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
					var evt=trigger.getParent('phase');
					if(evt&&evt.name=='phase'){
						game.log(evt.player,'结束了回合');
						evt.finish();
						evt.untrigger(true);
					}
					_status._pszhonghu=player;
				},
				subSkill:{
					skip:{
						trigger:{player:'phaseBeforeStart'},
						forced:true,
						priority:Infinity,
						popup:false,
						firstDo:true,
						filter:function(event,player){
							if(_status._pszhonghu&&!_status._pszhonghu.isIn()||event.player==_status._pszhonghu) delete _status._pszhonghu;
							return _status._pszhonghu&&event.player!=_status._pszhonghu;
						},
						content:function(){
							trigger.cancel(null,null,'notrigger');
						}
					}
				}
			},
			//官盗S虎啸龙吟司马懿&诸葛亮
			pshuxiao:{
				audio:2,
				trigger:{player:'phaseBegin'},
				frequent:true,
				content:function(){
					'step 0'
					player.judge(function(card){
						if(get.type(card)=='basic'||get.type(card)=='trick') return 3;
						return -1;
					});
					'step 1'
					if(result.bool){
						player.addTempSkill('pshuxiao_use');
						player.storage.pshuxiao_use={card:{name:result.name,nature:result.card.nature},number:result.number,suit:result.suit};
					}
				},
				subSkill:{
					use:{
						charlotte:true,
						onremove:true,
						enable:'chooseToUse',
						popname:true,
						position:'hs',
						hiddenCard:function(player,name){
							return player.storage.pshuxiao_use.card.name==name;
						},
						filter:function(event,player){
							if(!player.storage.pshuxiao_use) return false;
							if(!player.countCards('h')) return false;
							return event.filterCard(player.storage.pshuxiao_use.card,player,event);
						},
						viewAs:function(cards,player){
							return player.storage.pshuxiao_use.card;
						},
						filterCard:function(card,player){
							return get.number(card)==player.storage.pshuxiao_use.number||get.suit(card)==player.storage.pshuxiao_use.suit;
						},
						prompt:function(event){
							var player=_status.event.player;
							return '将一张'+get.translation(player.storage.pshuxiao_use.suit)+'牌或点数为'+get.strNumber(player.storage.pshuxiao_use.number)+'的牌当作'+get.translation(player.storage.pshuxiao_use.card)+'使用';
						}
					}
				}
			},
			psguanxing:{
				audio:'guanxing',
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				preHidden:true,
				content:function(){
					"step 0"
					var num=5;
					var cards=get.cards(num);
					game.cardsGotoOrdering(cards);
					var next=player.chooseToMove();
					next.set('list',[
						['牌堆顶',cards],
						['牌堆底'],
					]);
					next.set('prompt','观星：点击将牌移动到牌堆顶或牌堆底');
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
			pslongyin:{
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					if(!player.countCards('hse')||player.hasSkill('pslongyin_used')) return false;
					for(var i of lib.inpile){
						var type=get.type(i);
						if((type=='basic'||type=='trick')&&event.filterCard(get.autoViewAs({name:i},'unsure'),player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(name=='sha'){
								if(event.filterCard({name:name},player,event)) list.push(['基本','','sha']);
								for(var j of lib.inpile_nature){
									if(event.filterCard({name:name,nature:j},player,event)) list.push(['基本','','sha',j]);
								}
							}
							else if(get.type(name)=='trick'&&event.filterCard({name:name},player,event)) list.push(['锦囊','',name]);
							else if(get.type(name)=='basic'&&event.filterCard({name:name},player,event)) list.push(['基本','',name]);
						}
						return ui.create.dialog('虎啸',[list,'vcard']);
					},
					filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2],nature:button.link[3]},player,_status.event.getParent());
					},
					check:function(button){
						if(_status.event.getParent().type!='phase') return 1;
						var player=_status.event.player;
						if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].includes(button.link[2])) return 0;
						return player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						});
					},
					backup:function(links,player){
						return {
							filterCard:function(card,player){
								var num=0;
								for(var i=0;i<ui.selected.cards.length;i++){
									num+=get.number(ui.selected.cards[i]);
								}
								return get.number(card)+num<=13;
							},
							selectCard:[1,Infinity],
							filterOk:function(){
								var num=0;
								for(var i=0;i<ui.selected.cards.length;i++){
									num+=get.number(ui.selected.cards[i]);
								}
								return num==13;
							},
							audio:'pslongyin',
							popname:true,
							complexCard:true,
							check:function(card){
								var num=0;
								for(var i=0;i<ui.selected.cards.length;i++){
									num+=get.number(ui.selected.cards[i]);
								}
								if(num+get.number(card)==13) return 5.5-get.value(card);
								if(ui.selected.cards.length==0){
									var cards=_status.event.player.getCards('h');
									for(var i=0;i<cards.length;i++){
										for(var j=i+1;j<cards.length;j++){
											if(get.number(cards[i])+get.number(cards[j])==13){
												if(cards[i]==card||cards[j]==card) return 6-get.value(card);
											}
										}
									}
								}
								return 0;
							},
							position:'hes',
							viewAs:{name:links[0][2],nature:links[0][3]},
							precontent:function(){
								player.addTempSkill('pslongyin_used');
							},
						}
					},
					prompt:function(links,player){
						return '将任意张点数和为13牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
					}
				},
				hiddenCard:function(player,name){
					if(!lib.inpile.includes(name)) return false;
					var type=get.type(name);
					return (type=='basic'||type=='trick')&&player.countCards('she')>0&&!player.hasSkill('pslongyin_used');
				},
				ai:{
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('hse')||player.hasSkill('pslongyin_used')) return false;
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
					used:{charlotte:true}
				}
			},
			//官盗S武将传诸葛亮
			pszhiji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(!ui.selected.targets.length) return true;
					return target.group!=ui.selected.targets[0].group;
				},
				selectTarget:2,
				complexTarget:true,
				multitarget:true,
				multiline:true,
				filterCard:true,
				selectCard:2,
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					targets.sortBySeat();
					if(targets[0].canUse('sha',targets[1],false)) targets[0].useCard({name:'sha',isCard:true},targets[1],false,'noai');
					'step 1'
					if(targets[1].canUse('sha',targets[0],false)) targets[1].useCard({name:'sha',isCard:true},targets[0],false,'noai');
				},
				ai:{
					order:2.5,
					result:{
						player:1,
						target:function(player,target){
							if(ui.selected.targets.length){
								var targetx=ui.selected.targets[0];
								if(get.effect(targetx,{name:'sha'},target,player)+get.effect(target,{name:'sha'},targetx,player)<0) return 0;
								return -1;
							}
							return -1;
						}
					}
				}
			},
			psjiefeng:{
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				selectCard:2,
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					var cards=game.cardsGotoOrdering(get.cards(5)).cards;
					event.cards=cards;
					player.showCards(cards,get.translation(player)+'发动了【借风】');
					'step 1'
					if(cards.filter(i=>get.color(i)=='red').length>=2){
						player.chooseUseTarget('wanjian',true);
					}
				},
				ai:{
					order:9,
					result:{
						player:function(player){
							if(player.getUseValue({name:'wanjian'})<0) return 0;
							return 1;
						}
					}
				}
			},
			//官盗S马超
			psweihou:{
				trigger:{player:'judgeBegin'},
				filter:function(event,player){
					return !event.directresult;
				},
				content:function(){
					'step 0'
					var cards=get.cards(2);
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i],ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
					event.cards=cards;
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto) str='威侯：选择一张作为本次判定结果';
						else str=get.translation(player)+'发动了【威侯】';
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					game.addVideo('showCards',player,['威侯',get.cardsInfo(event.cards)]);
					if(!event.isMine()&&!event.isOnline()) game.delayx();
					'step 1'
					player.chooseButton(['威侯：选择一张作为本次判定结果',cards],true).set('ai',button=>{
						return _status.event.getTrigger().judge(button.link);
					}).set('dialog',event.videoId);
					'step 2'
					game.broadcastAll('closeDialog',event.videoId);
					if(result.bool){
						trigger.directresult=result.links[0];
						game.cardsDiscard(cards.removeArray(result.links).filter(i=>get.position(i)=='c'));
					}
					'step 3'
					game.updateRoundNumber();
				}
			},
			//官盗S1066★贾诩
			psqupo:{
				audio:2,
				trigger:{global:'phaseBegin'},
				filter:function(event,player){
					return player.countCards('he');
				},
				direct:true,
				content:function(){
					'step 0'
					var cards=player.getCards('he');
					var current=trigger.player;
					var ai1=function(card){
						var player=_status.event.player,current=_status.event.current;
						var card=get.color(card);
						if(color=='black'){
							if(!current.hasSha()||!current.hasUseTarget({name:'sha'})) return 0;
							if(targets.length) return 5.5-get.value(card);
						}
						else if(color=='red'){
							if(get.attitude(player,current)<=0) return 0;
							if(current.hasCard(card=>{
								if(!get.tag(card,'damage')) return false;
								var targetsx=game.filterPlayer(currentx=>{
									if(currentx==current||current==player) return false;
									return current.canUse(card,currentx)&&get.effect(currentx,card,current,player)>0;
								});
								targets2.addArray(targetsx);
								return targetsx.length;
							},'hs')) return 5.5-get.value(card);
						}
						return 0;
					}
					var targets=game.filterPlayer(currentx=>{
						if(currentx==current||current==player) return false;
						return !current.canUse('sha',currentx)||get.effect(currentx,{name:'sha'},current,player)>0&&get.attitude(player,currentx)>-3;
					});
					targets.sort((a,b)=>get.attitude(player,b)-get.attitude(player,a));
					var targets2=[];
					var cardx=cards.sort((a,b)=>ai1(b)-ai1(a))[0];
					targets2.sort((a,b)=>get.threaten(b,current)-get.threaten(a,current));
					var next=player.chooseCardTarget({
						filterCard:true,
						prompt:get.prompt2('psqupo'),
						current:trigger.player,
						filterTarget:function(card,player,target){
							return player!=target&&target!=_status.event.current;
						},
						ai1:function(card){
							return card==_status.event.cardx?1:0;
						},
						ai2:function(target){
							return target==_status.event.targetx?1:0;
						},
					});
					if(ai1(cardx)>0){
						next.cardx=cardx;
						if(get.color(cardx)=='black'){
							if(targets.length) next.targetx=targets[0];
						}
						else{
							if(targets2.length) next.targetx=targets2[0];
						}
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0],cards=result.cards;
						player.logSkill('psqupo',target);
						player.give(cards,target);
						var color=get.color(cards[0]);
						if(color=='black'){
							_status.currentPhase.addTempSkill('psqupo_black');
							_status.currentPhase.markAuto('psqupo_black',[target]);
						}
						else if(color=='red'){
							target.addTempSkill('psqupo_red');
							target.addMark('psqupo_red',1,false);
						}
					}
				},
				subSkill:{
					black:{
						trigger:{player:'useCardToTarget'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							if(event.card.name!='sha') return false;
							var targets=player.getStorage('psqupo_black').slice();
							targets.remove(event.target);
							return targets.length;
						},
						content:function(){
							var targets=player.getStorage('psqupo_black').slice();
							targets.remove(trigger.target);
							player.loseHp(targets.length);
						}
					},
					red:{
						trigger:{player:'damageBegin3'},
						charlotte:true,
						forced:true,
						onremove:true,
						content:function(){
							player.loseHp(player.countMark('psqupo_red'));
							player.removeSkill('psqupo_red');
						}
					}
				}
			},
			psbaoquan:{
				audio:2,
				trigger:{player:'damageBegin4'},
				filter:function(event,player){
					return player.countCards('h',{type:['trick','delay']})||_status.connectMode;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard(get.prompt2('psbaoquan'),{type:['trick','delay']}).set('logSkill','psbaoquan').set('ai',card=>{
						if(_status.event.goon) return 7-get.value(card);
						return 0;
					}).set('goon',get.damageEffect(player,trigger.source,player)<-5);
					'step 1'
					if(result.bool){
						trigger.cancel();
					}
				}
			},
			//官盗S吕布
			pssheji:{
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				selectCard:-1,
				position:'h',
				locked:false,
				filter:function(event,player){
					if(player.hasSkill('pssheji_used')) return false;
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var card of hs){
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2===false) return false;
					}
					return event.filterCard(get.autoViewAs({name:'sha'},hs));
				},
				viewAs:{
					name:'sha',
					storage:{pssheji:true}
				},
				onuse:function(links,player){
					player.addTempSkill('pssheji_used','phaseUseAfter');
				},
				ai:{
					order:1,
					threaten:1.1,
				},
				mod:{
					targetInRange:function(card,player,target){
						if(card.storage&&card.storage.pssheji) return true;
					}
				},
				subSkill:{
					used:{
						audio:'pssheji',
						trigger:{source:'damageSource'},
						charlotte:true,
						forced:true,
						popup:false,
						logTarget:'player',
						filter:function(event,player){
							return event.card.storage&&event.card.storage.pssheji&&event.player.hasCard(card=>{
								if(!lib.filter.canBeGained(card,player,event.player)) return false;
								return ['equip1','equip3','equip4','equip6'].includes(get.subtype(card));
							},'e');
						},
						content:function(){
							var cards=trigger.player.getCards('e',card=>{
								if(!lib.filter.canBeGained(card,player,trigger.player)) return false;
								return ['equip1','equip3','equip4','equip6'].includes(get.subtype(card));
							});
							if(cards.length) player.gain(cards,'giveAuto',trigger.player);
						}
					}
				},
			},
			//战役篇国战将转身份
			//钟会
			zyquanji:{
				audio:'gzquanji',
				trigger:{
					player:'damageEnd',
					source:'damageSource',
				},
				frequent:true,
				filter:function(event,player,name){
					if(name=='damageEnd') return true;
					var evt=event.getParent();
					if(evt.player!=player) return false;
					return evt.card&&evt.type=='card'&&evt.targets.length==1;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					var hs=player.getCards('he');
					if(hs.length>0){
						if(hs.length==1) event._result={bool:true,cards:hs};
						else player.chooseCard('he',true,'选择一张牌作为“权”');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var cs=result.cards;
						player.addToExpansion(cs,player,'give').gaintag.add('zyquanji');
					}
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				locked:false,
				mod:{
					maxHandcard:function(player,num){
						return num+player.getExpansions('zyquanji').length;
					},
				},
			},
			zypaiyi:{
				audio:'gzpaiyi',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.getExpansions('zyquanji').length>0;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('排异',player.getExpansions('zyquanji'),'hidden')
					},
					backup:function(links,player){
						return {
							audio:'gzpaiyi',
							filterTarget:true,
							filterCard:function(){return false},
							selectCard:-1,
							card:links[0],
							delay:false,
							content:lib.skill.zypaiyi.contentx,
							ai:{
								order:10,
								result:{
									target:function(player,target){
										if(target!=player) return 0;
										if(player.getExpansions('zyquanji').length<=1||(player.needsToDiscard()&&!player.getEquip('zhuge')&&!player.hasSkill('new_paoxiao'))) return 0;
										return 1;
									}
								},
							},
						}
					},
					prompt:function(){return '请选择【排异】的目标'},
				},
				contentx:function(){
					"step 0"
					var card=lib.skill.zypaiyi_backup.card;
					player.loseToDiscardpile(card);
					"step 1"
					var num=player.getExpansions('zyquanji').length;
					if(num>0) target.draw(Math.min(7,num));
					"step 2"
					if(target.countCards('h')>player.countCards('h')){
						target.damage();
					}
				},
				ai:{
					order:function(item,player){
						var num=player.getExpansions('zyquanji').length;
						if(num==1) return 8;
						return 1;
					},
					result:{
						player:1,
					},
				},
			},
			//孙綝
			zyshilu:{
				audio:'gzshilu',
				preHidden:true,
				trigger:{global:'dieAfter'},
				prompt2:function(event,player){
					return '将其的所有武将牌'+(player==event.source?'及武将牌库里的一张随机武将牌':'')+'置于武将牌上作为“戮”';
				},
				logTarget:'player',
				content:function(){
					var list=[],target=trigger.player;
					if(target.name1&&!target.isUnseen(0)&&target.name1.indexOf('gz_shibing')!=0&&_status.characterlist.includes(target.name1)) list.push(target.name1);
					if(target.name2&&!target.isUnseen(1)&&target.name2.indexOf('gz_shibing')!=0&&_status.characterlist.includes(target.name1)) list.push(target.name2);
					_status.characterlist.removeArray(list);
					if(player==trigger.source) list.addArray(_status.characterlist.randomRemove(1));
					if(list.length){
						player.markAuto('zyshilu',list);
						game.log(player,'将','#g'+get.translation(list),'置于武将牌上作为','#y“戮”');
						game.broadcastAll(function(player,list){
							var cards=[];
							for(var i=0;i<list.length;i++){
								var cardname='huashen_card_'+list[i];
								lib.card[cardname]={
									fullimage:true,
									image:'character:'+list[i]
								}
								lib.translate[cardname]=get.rawName2(list[i]);
								cards.push(game.createCard(cardname,'',''));
							}
							player.$draw(cards,'nobroadcast');
						},player,list);
					}
				},
				marktext:'戮',
				intro:{
					content:'character',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							_status.characterlist.addArray(storage)
							storage.length=0;
						}
					},
					mark:function(dialog,storage,player){
						if(storage&&storage.length){
							dialog.addSmall([storage,'character']);
						}
						else{
							return '没有“戮”';
						}
					},
					// content:function(storage,player){
					// 	return '共有'+get.cnNumber(storage.length)+'张“戮”';
					// },
				},
				group:'zyshilu_zhiheng',
				subSkill:{
					zhiheng:{
						audio:'zyshilu',
						trigger:{player:'phaseZhunbeiBegin'},
						filter:function(event,player){
							return player.getStorage('zyshilu').length>0&&player.countCards('he')>0;
						},
						direct:true,
						content:function(){
							'step 0'
							var num=Math.min(player.getStorage('zyshilu').length,player.countCards('he'));
							player.chooseToDiscard('he',get.prompt('zyshilu'),'弃置至多'+get.cnNumber(num)+'张牌并摸等量的牌',[1,num]).logSkill='zyshilu_zhiheng';
							'step 1'
							if(result.bool&&result.cards&&result.cards.length) player.draw(result.cards.length);
						},
					},
				},
			},
			zyxiongnve:{
				audio:'gzxiongnve',
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.getStorage('zyshilu').length>0;
				},
				content:function(){
					'step 0'
					player.chooseButton([get.prompt('zyxiongnve'),[player.storage.zyshilu,'character']]).set('ai',function(button){
						if(!_status.event.goon) return 0;
						return 1;
					}).set('goon',player.countCards('hs',function(card){
						return get.tag(card,'damage')&&player.hasValueTarget(card);
					})>1);
					'step 1'
					if(result.bool){
						player.logSkill('zyxiongnve');
						lib.skill.zyxiongnve.throwCharacter(player,result.links);
						game.delayx();
						player.chooseControl().set('prompt','选择获得一项效果').set('choiceList',[
							'本回合造成的伤害+1',
							'本回合造成伤害时，获得其一张牌',
							'本回合使用牌没有次数限制',
						]).set('ai',function(){
							var player=_status.event.player;
							if(player.countCards('hs',function(card){
								return get.name(card)=='sha'&&player.hasValueTarget(card);
							})>player.getCardUsable('sha')) return 0;
							return get.rand(1,2);
						});
					}
					else event.finish();
					'step 2'
					var skill='zyxiongnve_effect'+result.index;
					player.addTempSkill(skill);
					game.log(player,'本回合','#g'+lib.skill[skill].promptx)
				},
				group:'zyxiongnve_end',
				throwCharacter:function(player,list){
					player.unmarkAuto('zyshilu',list);
					_status.characterlist.addArray(list);
					game.log(player,'从','#y“戮”','中移去了','#g'+get.translation(list));
					game.broadcastAll(function(player,list){
						var cards=[];
						for(var i=0;i<list.length;i++){
							var cardname='huashen_card_'+list[i];
							lib.card[cardname]={
								fullimage:true,
								image:'character:'+list[i]
							}
							lib.translate[cardname]=get.rawName2(list[i]);
							cards.push(game.createCard(cardname,'',''));
						}
						player.$throw(cards,1000,'nobroadcast');
					},player,list);
				},
				subSkill:{
					effect0:{
						promptx:'造成的伤害+1',
						charlotte:true,
						onremove:true,
						audio:'zyxiongnve',
						intro:{
							content:'当你造成伤害时，此伤害+1',
						},
						trigger:{source:'damageBegin1'},
						forced:true,
						logTarget:'player',
						content:function(){
							trigger.num++;
						},
					},
					effect1:{
						promptx:'造成伤害后，获得其一张牌',
						charlotte:true,
						onremove:true,
						audio:'zyxiongnve',
						intro:{
							content:'对其他角色造成伤害时，获得其一张牌',
						},
						trigger:{source:'damageBegin1'},
						forced:true,
						filter:function(event,player){
							return player!=event.player&&event.player.countGainableCards(player,'he')>0;
						},
						logTarget:'player',
						content:function(){
							player.gainPlayerCard(trigger.player,true,'he');
						}
					},
					effect2:{
						promptx:'使用牌没有次数限制',
						charlotte:true,
						onremove:true,
						intro:{
							content:'使用牌没有次数限制',
						},
						mod:{
							cardUsable:()=>Infinity
						},
					},
					effect3:{
						charlotte:true,
						audio:'zyxiongnve',
						mark:true,
						intro:{
							content:'受到的伤害-1',
						},
						trigger:{player:'damageBegin4'},
						forced:true,
						filter:function(event,player){
							return event.source!=player&&event.source&&event.source.isIn();
						},
						content:function(){
							trigger.num--;
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(player.hasSkillTag('jueqing',false,target)) return;
									var num=get.tag(card,'damage');
									if(num){
										if(num>1) return 0.5;
										return 0;
									}
								}
							}
						},
					},
					end:{
						trigger:{player:'phaseUseEnd'},
						direct:true,
						filter:function(event,player){
							return player.getStorage('zyshilu').length>1;
						},
						content:function(){
							'step 0'
							player.chooseButton(['凶虐：是否移去两张“戮”获得减伤？',[player.storage.zyshilu,'character']],2).set('ai',function(button){
								var player=_status.event.player;
								if(game.countPlayer()*1.5+player.storage.zyshilu.length/2>8) return 1;
								if(player.hp<=2) return 1;
								return 0;
							});
							'step 1'
							if(result.bool){
								player.logSkill('zyxiongnve');
								lib.skill.zyxiongnve.throwCharacter(player,result.links);
								player.addTempSkill('zyxiongnve_effect3',{player:'phaseBegin'});
								game.delayx();
							}
						},
					},
				},
			},
			//孟达
			qiuan:{
				audio:2,
				trigger:{player:'damageBegin4'},
				filter:function(event,player){
					return event.cards&&event.cards.filterInD().length>0&&!player.getExpansions('qiuan').length;
				},
				check:function(event,player){
					if(get.damageEffect(player,event.source||player,player,event.nature)>=0) return false;
					return true;
				},
				preHidden:true,
				content:function(){
					var cards=trigger.cards.filterInD();
					player.addToExpansion('gain2',cards).gaintag.add('qiuan');
					trigger.cancel();
				},
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				marktext:'函',
			},
			liangfan:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				filter:function(event,player){
					return player.getExpansions('qiuan').length>0;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('qiuan');
					player.gain(cards,'gain2').gaintag.add('liangfan');
					player.addTempSkill('liangfan2');
					'step 1'
					player.loseHp();
				},
			},
			liangfan2:{
				audio:'liangfan',
				mark:true,
				mod:{
					aiOrder:function(player,card,num){
						if(get.itemtype(card)=='card'&&card.hasGaintag('liangfan')) return num+0.1;
					},
				},
				intro:{content:'使用“量反”牌造成伤害后，可获得目标角色的一张牌'},
				trigger:{source:'damageEnd'},
				logTarget:'player',
				charlotte:true,
				onremove:function(player){
					player.removeGaintag('liangfan');
				},
				prompt:(event)=>('量反：是否获得'+get.translation(event.player)+'的一张牌？'),
				filter:function(event,player){
					var evt=event.getParent(2);
					if(evt.name!='useCard'||evt.card!=event.card) return false;
					if(!event.player.countGainableCards(player,'he')) return false;
					return player.getHistory('lose',function(evt2){
						if(evt2.getParent()!=evt) return false;
						for(var i in evt2.gaintag_map){
							if(evt2.gaintag_map[i].includes('liangfan')) return true;
						}
						return false;
					}).length>0;
				},
				marktext:'反',
				content:function(){
					player.gainPlayerCard(trigger.player,true,'he');
				},
			},
			//文钦
			gzjinfa:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he')>0&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('he')>0;
					})
				},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					target.chooseCard('he','交给'+get.translation(player)+'一张装备牌，或令其获得你的一张牌',{type:'equip'}).set('ai',function(card){
						if(_status.event.goon&&get.suit(card)=='spade') return 8-get.value(card);
						return 5-get.value(card);
					}).set('goon',target.canUse('sha',player,false)&&get.effect(player,{name:'sha'},target,target)>0);
					'step 1'
					if(!result.bool){
						player.gainPlayerCard(target,'he',true);
						event.finish();
					}
					else target.give(result.cards,player);
					'step 2'
					if(result.bool&&result.cards&&result.cards.length&&
					target.isIn()&&player.isIn()&&get.suit(result.cards[0],target)=='spade'&&target.canUse('sha',player,false)) target.useCard({name:'sha',isCard:true},false,player);
				},
				ai:{
					order:6,
					result:{
						player:function(player,target){
							if(target.countCards('e',function(card){
								return get.suit(card)=='spade'&&get.value(card)<8;
							})&&target.canUse('sha',player,false)) return get.effect(player,{name:'sha'},target,player);
							return 0;
						},
						target:function(player,target){
							var es=target.getCards('e').sort(function(a,b){
								return get.value(b,target)-get.value(a,target);
							});
							if(es.length) return -Math.min(2,get.value(es[0]))
							return -2;
						},
					},
				},
			},
			//一战成名·群雄逐鹿·长安之战专属神贾诩
			zybishi:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				filter:function(event,player){
					return event.card.name=='sha'&&event.player!=player;
				},
				check:function(event,player){
					var effect=0;
					if(event.targets&&event.targets.length){
						for(var i=0; i<event.targets.length; i++){
							effect+=get.effect(event.targets[i],event.card,event.player,player);
						}
					}
					if(effect<0){
						var target=event.targets[0];
						if(target==player){
							return !player.countCards('h','shan');
						}
						else {
							return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
						}
					}
					return false;
				},
				content:function(){
					player.line(trigger.player,'green');
					trigger.player.draw();
					var evt=trigger.getParent();
					evt.targets.length=0;
					evt.all_excluded=true;
					game.log(evt.card,'被无效了');
				},
			},
			zyjianbing:{
				audio:2,
				trigger:{global:'damageBegin3'},
				logTarget:'player',
				filter:function(event,player){
					return event.player!=player&&event.player.isIn()&&event.card&&event.card.name=='sha'&&event.player.countGainableCards(player,'he')>0;
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(trigger.player,true,'he');
					'step 1'
					if(result.bool&&result.cards&&result.cards.length){
						var card=result.cards[0];
						if(get.suit(card,trigger.player)=='heart'){
							trigger.player.recover();
						}
					}
				},
			},
			//战役篇改王允
			zylianji:{
				audio:'wylianji',
				trigger:{player:'phaseUseEnd'},
				filter:function(event,player){
					return player.hasHistory('useCard',evt=>evt.getParent('phaseUse')==event);
				},
				direct:true,
				content:function(){
					'step 0'
					var types=[];
					player.getHistory('useCard',evt=>{
						if(evt.getParent('phaseUse')!=trigger) return false;
						types.add(get.type2(evt.card));
					});
					event.num=types.length;
					event.logged=false;
					player.chooseTarget(get.prompt('zylianji'),'令一名角色摸一张牌').set('ai',target=>{
						var player=_status.event.player;
						if(target==player&&player.needsToDiscard(1)) return 1;
						return get.effect(target,{name:'draw'},player,player);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						if(!event.logged){event.logged=true;player.logSkill('zylianji',target);}
						target.draw();
					}
					if(event.num<=1) event.finish();
					'step 2'
					if(player.isHealthy()) event._result={bool:false};
					else player.chooseBool(get.prompt('zylianji'),'回复1点体力').set('ai',()=>true);
					'step 3'
					if(result.bool){
						if(!event.logged){event.logged=true;player.logSkill('zylianji');}
						player.recover();
					}
					if(event.num<=2) event.finish();
					'step 4'
					player.chooseTarget(get.prompt('zylianji'),'跳过本回合的剩余阶段，然后令一名其他角色执行这些阶段',lib.filter.notMe).set('ai',target=>{
						var att=get.attitude(_status.event.player,target),num=target.needsToDiscard(),numx=player.needsToDiscard();
						if(att<0&&num>0) return -att*Math.sqrt(num)/3+numx;
						var skills=target.getSkills();
						var val=0;
						for(var skill of skills){
							var info=get.info(skill);
							if(info.trigger&&info.trigger.player&&(info.trigger.player.indexOf('phaseJieshu')==0||Array.isArray(info.trigger.player)&&info.trigger.player.some(i=>i.indexOf('phaseJieshu')==0))){
								var threaten=info.ai&&info.ai.threaten?info.ai.threaten:1;
								if(info.ai&&info.ai.neg) val-=3*threaten;
								else if(info.ai&&info.ai.halfneg) val-=1.5*threaten;
								else val+=threaten;
							}
						}
						return att*val/2+numx;
					});
					'step 5'
					if(result.bool){
						var target=result.targets[0];
						if(!event.logged){event.logged=true;player.logSkill('zylianji',target);}
						else player.line(target);
						player.addTempSkill('zylianji_skip');
						player.storage.zylianji_insert=target;
					}
				},
				subSkill:{
					skip:{
						trigger:{
							player:['phaseZhunbeiBefore','phaseJudgeBefore','phaseDrawBefore','phaseUseBefore','phaseDiscardBefore','phaseJieshuBefore'],
						},
						init:function(player){
							if(!player.storage.zylianji_skip) player.storage.zylianji_skip=[];
						},
						forced:true,
						charlotte:true,
						group:'zylianji_insert',
						onremove:true,
						content:function(){
							trigger.cancel();
							player.storage.zylianji_skip.push(trigger.name);
						}
					},
					insert:{
						trigger:{player:'phaseEnd'},
						filter:function(event,player){
							return player.storage.zylianji_skip&&player.storage.zylianji_skip.length&&player.storage.zylianji_insert&&player.storage.zylianji_insert.isIn();
						},
						forced:true,
						charlotte:true,
						onremove:true,
						getStr:function(str){
							switch(str){
								case 'phaseDraw':
									return 'player.phaseDraw();if(!player.noPhaseDelay){if(player==game.me){game.delay()}else{game.delayx()}}';
								case 'phaseDiscard':
									return 'game.broadcastAll(function(){if(ui.tempnowuxie){ui.tempnowuxie.close();delete ui.tempnowuxie;}});player.phaseDiscard();if(!player.noPhaseDelay){game.delayx()};delete player._noSkill;';
								default:
									return 'player.'+str+'();';
							}
						},
						content:function(){
							'step 0'
							var func='';
							for(var i=0;i<player.storage.zylianji_skip.length;i++){
								var phase=player.storage.zylianji_skip[i];
								func+="\n'step"+" "+i+"'\n";
								func+=lib.skill.zylianji_insert.getStr(phase);
							}
							player.line(player.storage.zylianji_insert);
							player.storage.zylianji_insert.insertPhase().setContent(new Function(func))._noTurnOver=true;
						},
					}
				}
			},
			zymoucheng:{
				enable:'phaseUse',
				usable:1,
				viewAs:{name:'jiedao'},
				filterCard:{color:'black'},
				position:'he',
				check:function(card){
					return 4.5-get.value(card);
				}
			},
			//用间篇豪华版盒子甄姬
			yjluoshen:{
				audio:'luoshen',
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					'step 0'
					event.cards=[];
					'step 1'
					var next=player.judge(function(card){
						var color=get.color(card);
						var evt=_status.event.getParent('yjluoshen');
						if(evt){
							if(!evt.color) evt.color=color;
							else if(evt.color!=color) return -1;
						}
						return 1;
					});
					next.judge2=function(result){
						return result.bool;
					};
					if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
						if(get.position(card,true)=='o') player.gain(card,'gain2');
					});
					else next.set('callback',function(){
						event.getParent().orderingCards.remove(card);
					});
					'step 2'
					if(result.judge>0){
						event.cards.push(result.card);
						player.chooseBool('是否再次发动【洛神】？').set('frequentSkill','yjluoshen');
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
						event.finish();
					}
					'step 3'
					if(result.bool){
						event.goto(1);
					}
					else{
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
					}
				}
			},
			//用间篇豪华版盒子贾诩
			yjzhenlve:{
				audio:'zhenlue',
				inherit:'zhenlue',
				content:function(){
					trigger.directHit.addArray(game.players);
				}
			},
			yjjianshu:{
				audio:'jianshu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(ui.selected.targets.length){
						return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
						&&!target.hasSkillTag('noCompareTarget');
					}
					return true;
				},
				filterCard:true,
				discard:false,
				lose:false,
				delay:false,
				check:function(card){
					if(_status.event.player.hp==1) return 8-get.value(card);
					return 6-get.value(card);
				},
				selectTarget:2,
				targetprompt:['发起者','拼点对象'],
				multitarget:true,
				content:function(){
					'step 0'
					player.give(cards,targets[0],'give');
					'step 1'
					targets[0].chooseToCompare(targets[1]);
					'step 2'
					if(result.bool){
						targets[1].loseHp();
					}
					else if(result.tie){
						targets[0].loseHp()
						targets[1].loseHp()
					}
					else{
						targets[0].loseHp();
					}
				},
				ai:{
					expose:0.4,
					order:4,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length) return -1;
							return -0.5;
						}
					}
				}
			},
			yjyongdi:{
				audio:'yongdi',
				unique:true,
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				animationColor:'thunder',
				skillAnimation:'legend',
				mark:true,
				intro:{
					content:'limited'
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('yjyongdi'),function(card,player,target){
						return target.hasSex('male')||target.name=='key_yuri';
					}).set('ai',function(target){
						if(!_status.event.goon) return 0;
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<=1) return 0;
						var mode=get.mode();
						if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
							if(target.name&&lib.character[target.name]){
								for(var i=0;i<lib.character[target.name][3].length;i++){
									if(lib.skill[lib.character[target.name][3][i]].zhuSkill){
										return att*2;
									}
								}
							}
						}
						return att;
					}).set('goon',!player.hasUnknown());
					'step 1'
					if(result.bool){
						player.awakenSkill('yjyongdi');
						player.logSkill('yjyongdi',result.targets);
						var target=result.targets[0];
						target.gainMaxHp(true);
						target.recover();
						var mode=get.mode();
						if(mode=='identity'||(mode=='versus'&&_status.mode=='four')||mode=='doudizhu'){
							if(target.name&&lib.character[target.name]){
								var skills=lib.character[target.name][3];
								target.storage.zhuSkill_yjyongdi=[];
								for(var i=0;i<skills.length;i++){
									var info=lib.skill[skills[i]];
									if(info.zhuSkill){
										target.storage.zhuSkill_yjyongdi.push(skills[i]);
										if(info.init){
											info.init(target);
										}
										if(info.init2){
											info.init2(target);
										}
									}
								}
							}
						}
					}
				},
				ai:{
					expose:0.2
				}
			},
			//用间篇豪华版盒子许攸
			yjshicai:{
				audio:'spshicai',
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				position:'he',
				prompt:function(){
					var str='弃置一张牌，然后获得';
					if(get.itemtype(_status.pileTop)=='card') str+=get.translation(_status.pileTop);
					else str+='牌堆顶的一张牌';
					return str;
				},
				check:function(card){
					var player=_status.event.player;
					var cardx=_status.pileTop;
					if(get.itemtype(cardx)!='card') return 0;
					var val=player.getUseValue(cardx,null,true);
					if(!val) return 0;
					var val2=player.getUseValue(card,null,true);
					return (val-val2)/Math.max(0.1,get.value(card));
				},
				group:['yjshicai_mark'],
				content:function(){
					var card=get.cards()[0];
					player.gain(card,'gain2').gaintag.add('yjshicai_clear');
					player.addTempSkill('yjshicai_clear','phaseUseAfter');
				},
				ai:{
					order:3,
					result:{player:1},
				},
				subSkill:{
					mark:{
						trigger:{player:'phaseBegin'},
						silent:true,
						firstDo:true,
						content:function(){
							player.addTempSkill('spshicai2');
						},
					},
					clear:{
						trigger:{
							player:'loseAfter',
							global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
						},
						onremove:function(player,skill){
							player.removeGaintag(skill);
						},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							if(event.name=='lose'){
								for(var i in event.gaintag_map){
									if(event.gaintag_map[i].includes('yjshicai_clear')) return true;
								}
								return false;
							}
							return player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].includes('yjshicai_clear')) return true;
								}
							});
						},
						content:function(){
							delete player.getStat('skill').yjshicai;
						}
					},
				}
			},
			yjchenggong:{
				audio:'chenggong',
				trigger:{
					global:'useCardToPlayered',
				},
				filter:function(event,player){
					return event.isFirstTarget&&event.targets.length>1&&event.player.isIn();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				logTarget:'player',
				content:function(){
					trigger.player.draw();
				},
				ai:{expose:0.2}
			},
			yjzezhu:{
				audio:'zezhu',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var zhu=get.mode()=='identity'?get.zhu(player):game.filterPlayer(i=>i.getSeatNum()==1)[0];
					if(!zhu) return false;
					return zhu.countGainableCards(player,zhu==player?'ej':'hej');
				},
				filterTarget:function(card,player,target){
					var zhu=get.mode()=='identity'?get.zhu(player):game.filterPlayer(i=>i.getSeatNum()==1)[0];
					return target==zhu;
				},
				selectTarget:1,
				content:function(){
					'step 0'
					player.gainPlayerCard(target,player==target?'ej':'hej',true);
					'step 1'
					if(!player.countCards('he')||player==target) event.finish();
					else player.chooseCard('择主：交给'+get.translation(target)+'一张牌','he',true);
					'step 2'
					player.give(result.cards,target);
				},
				ai:{
					order:2.9,
					result:{player:1}
				}
			},
			//用间beta董卓
			yjtuicheng:{
				audio:2,
				enable:'phaseUse',
				viewAs:{name:'tuixinzhifu',isCard:true},
				filterCard:()=>false,
				selectCard:-1,
				log:false,
				precontent:function(){
					player.logSkill('yjtuicheng');
					player.loseHp();
				},
				ai:{
					effect:{
						player:function(card,player){
							if(get.name(card)!='tuixinzhifu'||_status.event.skill!='yjtuicheng') return;
							if(player.hp<3) return 'zeroplayertarget';
							if(player.hasSkill('yjshicha')&&!player.hasHistory('useSkill',evt=>evt.skill=='yjtuicheng')) return [1,2];
							return 'zeroplayertarget';
						}
					}
				}
			},
			yjyaoling:{
				audio:2,
				trigger:{
					player:'phaseUseEnd',
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('yjyaoling'),'减1点体力上限，选择一名其他角色A和一名角色B，令A选择对B使用杀或被你弃牌',2,(card,player,target)=>{
						if(!ui.selected.targets.length) return target!=player;
						return ui.selected.targets[0].canUse('sha',target,false);
					}).set('targetprompt',['打人','被打']).set('complexSelect',true).set('ai',target=>{
						var player=_status.event.player;
						if(!ui.selected.targets.length) return get.effect(target,{name:'guohe_copy2'},player,player);
						var targetx=ui.selected.targets[0];
						return get.effect(target,{name:'sha'},targetx,player)+5;
					});
					'step 1'
					if(result.bool){
						var targets=result.targets;
						event.targets=targets;
						player.logSkill('yjyaoling',targets,false);
						player.line2(targets);
						player.loseMaxHp();
						targets[0].chooseToUse(function(card,player,event){
							if(get.name(card)!='sha') return false;
							return lib.filter.filterCard.apply(this,arguments);
						},'耀令：对'+get.translation(targets[1])+'使用一张杀，或令'+get.translation(player)+'弃置你的一张牌').set('targetRequired',true).set('filterTarget',function(card,player,target){
							if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
							return lib.filter.filterTarget.apply(this,arguments);
						}).set('sourcex',targets[1]);
					}
					else event.finish();
					'step 2'
					if(!result.bool&&targets[0].countDiscardableCards(player,'he')){
						player.discardPlayerCard(targets[0],'he',true);
					}
				}
			},
			yjshicha:{
				audio:2,
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				filter:function(event,player){
					var tuicheng=false,yaoling=false;
					player.getHistory('useSkill',evt=>{
						if(evt.skill=='yjtuicheng') tuicheng=true;
						if(evt.skill=='yjyaoling') yaoling=true;
					});
					return !(tuicheng&&yaoling);
				},
				content:function(){
					player.addTempSkill('yjshicha_limit');
				},
				subSkill:{
					limit:{
						charlotte:true,
						mark:true,
						intro:{content:'本回合手牌上限为1'},
						mod:{
							maxHandcard:()=>1
						}
					}
				},
			},
			yjyongquan:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				zhuSkill:true,
				filter:function(event,player){
					return player.hasZhuSkill('yjyongquan')&&game.hasPlayer(current=>{
						return current!=player&&player.hasZhuSkill(current)&&current.group=='qun';
					});
				},
				logTarget:function(event,player){
					return game.filterPlayer(current=>{
						return current!=player&&player.hasZhuSkill(current)&&current.group=='qun';
					});
				},
				content:function(){
					'step 0'
					var targets=lib.skill.yjyongquan.logTarget(trigger,player);
					event.targets=targets;
					'step 1'
					var target=targets.shift();
					event.target=target;
					target.chooseCard('拥权：是否交给'+get.translation(player)+'一张牌？','he').set('ai',card=>{
						if(_status.event.goon) return 4.5-get.value(card);
						return 0;
					}).set('goon',get.attitude(target,player)>3);
					'step 2'
					if(result.bool){
						target.line(player);
						target.give(result.cards,player);
					}
					'step 3'
					if(targets.length) event.goto(1);
				}
			},
			//用间beta甘宁的新版
			yjjielve:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.hasSkill('yjjielve_ban');
				},
				viewAs:{name:'chenghuodajie'},
				filterCard:function(card,player){
					if(ui.selected.cards.length) return get.color(card)==get.color(ui.selected.cards[0]);
					var cards=player.getCards('hes');
					for(var cardx of cards){
						if(card!=cardx&&get.color(card)==get.color(cardx)) return true;
					}
					return false;
				},
				position:'hes',
				selectCard:2,
				complexCard:true,
				check:function(card){
					return 5-get.value(card);
				},
				onuse:function(links,player){
					player.addTempSkill('yjjielve_check');
				},
				subSkill:{
					check:{
						trigger:{source:'damageSource'},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							return event.card&&event.card.name=='chenghuodajie'&&event.getParent().skill=='yjjielve';
						},
						content:function(){
							player.addTempSkill('yjjielve_ban');
						}
					},
					ban:{charlotte:true}
				}
			},
			//用间beta张飞
			yjmangji:{
				audio:2,
				forced:true,
				trigger:{
					player:['loseAfter','damageEnd','loseHpEnd','recoverEnd'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				direct:true,
				filter:function (event,player){
					if(player.hp<1||!player.countDiscardableCards(player,'h')) return false;
					if(['damage','loseHp','recover'].includes(event.name)) return true;
					var evt=event.getl(player);
					if(event.name=='equip'&&event.player==player) return !evt||evt.cards.length!=1;
					if(!evt||!evt.es.length) return false;
					return game.hasPlayer(current=>player.canUse('sha',current,false));
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						prompt:'莽击：弃置一张手牌，视为对一名其他角色使用一张【杀】',
						forced:true,
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							return player.canUse('sha',target,false);
						},
						ai2:function(target){
							return get.effect(target,{name:'sha'},_status.event.player);
						},
					})
					'step 1'
					if(result.bool){
						var target=result.targets[0],cards=result.cards;
						player.logSkill('yjmangji',target);
						player.discard(cards);
						if(player.canUse('sha',target,false)) player.useCard({name:'sha',isCard:true},target,false);
					}
				},
			},
			//用间beta曹洪
			yjlifeng:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				locked:false,
				filter:function(event,player){
					for(var card of ui.discardPile.childNodes){
						if(get.type(card)=='equip') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var cards=Array.from(ui.discardPile.childNodes).filter(i=>get.type(i)=='equip');
					player.chooseButton(['厉锋：获得一张装备牌',cards],cards.length>0).set('ai',get.buttonValue);
					'step 1'
					if(result.bool){
						var card=result.links[0];
						player.gain(card,'gain2');
					}
				},
				ai:{
					order:10,
					result:{player:1},
					effect:{
						target:function(card,player,target){
							if(card&&get.type(card)=='equip'&&_status.event.skill=='_gifting') return 0;
						},
					},
				},
				mod:{
					cardGiftable:function(card,player){
						return get.type(card)=='equip';
					}
				}
			},
			//用间篇李儒
			yjdumou:{
				audio:2,
				forced:true,
				mod:{
					cardname:function(card,player,name){
						if(player==_status.currentPhase&&card.name=='du') return 'guohe';
					},
					aiValue:function(player,card,num){
						if(card.name=='du') return get.value({name:'guohe'});
					},
				},
				init:()=>{
					game.addGlobalSkill('yjdumou_du');
				},
				onremove:()=>{
					if(!game.hasPlayer(i=>i.hasSkill('yjdumou'),true)) game.removeGlobalSkill('yjdumou_du');
				},
				subSkill:{
					du:{
						mod:{
							cardname:function(card,player,name){
								if(_status.currentPhase&&player!=_status.currentPhase&&_status.currentPhase.hasSkill('yjdumou')&&get.color(card)=='black') return 'du';
							},
							aiValue:function(player,card,num){
								if(get.name(card)=='du'&&card.name!='du') return get.value({name:card.name});
							},
						},
						trigger:{player:'dieAfter'},
						filter:()=>{
							return !game.hasPlayer(i=>i.hasSkill('yjdumou'),true);
						},
						silent:true,
						forceDie:true,
						content:()=>{
							game.removeGlobalSkill('yjdumou_du');
						}
					}
				},
				ai:{threaten:2.1}
			},
			yjweiquan:{
				audio:2,
				enable:'phaseUse',
				skillAnimation:true,
				animationColor:'soil',
				filterTarget:true,
				limited:true,
				selectTarget:()=>[1,game.roundNumber],
				contentBefore:function(){
					'step 0'
					player.awakenSkill('yjweiquan');
					player.chooseTarget('威权：选择获得牌的角色',true).set('ai',target=>{
						var att=get.attitude(_status.event.player,target),num=target.needsToDiscard(targets.filter(i=>i!=target&&i.countCards('h')).length);
						if(att>0&&num<=2) return 0;
						if(att<0&&target.needsToDiscard(-5)) return -att-Math.sqrt(num);
						return att-Math.sqrt(num);
					});
					'step 1'
					event.getParent()._yjweiquan=result.targets[0];
				},
				content:function(){
					'step 0'
					var targetx=event.getParent()._yjweiquan;
					if(target==targetx||!target.countCards('h')) event.finish();
					else target.chooseCard('威权：将一张手牌交给'+get.translation(targetx),true);
					'step 1'
					if(result.bool){
						var targetx=event.getParent()._yjweiquan;
						target.give(result.cards,targetx);
					}
				},
				contentAfter:function(){
					var targetx=event.getParent()._yjweiquan;
					if(targetx.countCards('h')>targetx.hp){
						var next=targetx.phase();
						event.next.remove(next);
						event.getParent().after.push(next);
						next.player=targetx;
						next._noTurnOver=true;
						next._triggered=null;
						next.setContent(function(){
							game.broadcastAll(function(){
								if(ui.tempnowuxie){
									ui.tempnowuxie.close();
									delete ui.tempnowuxie;
								}
							});
							player.phaseDiscard();
							if(!player.noPhaseDelay) game.delayx();
							delete player._noSkill;
						});
					}
				},
				ai:{
					order:6,
					result:{
						player:function(player){
							var num=game.countPlayer(current=>get.attitude(player,current)<0&&current.countCards('h'));
							if(game.roundNumber<num&&player.hp>2||!game.hasPlayer(current=>{
								return get.attitude(player,current)>0&&current.needsToDiscard(num)<2||get.attitude(player,current)<0&&current.needsToDiscard(-5);
							})) return -10;
							return 1;
						},
						target:-1,
					}
				}
			},
			yjrenwang:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					for(var card of ui.discardPile.childNodes){
						if(get.color(card)=='black'&&get.type(card)=='basic') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var cards=Array.from(ui.discardPile.childNodes).filter(i=>get.color(i)=='black'&&get.type(i)=='basic');
					player.chooseButton(['人望：选择一张黑色基本牌',cards],cards.length>0).set('ai',get.buttonValue);
					'step 1'
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						player.chooseTarget('选择一名角色获得'+get.translation(card),true).set('ai',target=>get.attitude(_status.event.player,target));
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.gain(card,'gain2');
					}
				},
				ai:{
					order:10,
					result:{player:1}
				}
			},
			//群曹操
			yjxiandao:{
				trigger:{player:'giftAccepted'},
				usable:1,
				forced:true,
				locked:false,
				filter:(event,player)=>event.target!=player&&event.target.isIn(),
				logTarget:'target',
				content:function(){
					'step 0'
					event.target=trigger.target;
					event.card=trigger.card;
					event.target.markAuto('yjxiandao_block',[get.suit(event.card,false)]);
					event.target.addTempSkill('yjxiandao_block');
					'step 1'
					var type=get.type(card,false);
					if(type=='trick') player.draw(2);
					if(type=='equip'){
						if(target.countGainableCards(player,'he',function(cardx){
							return cardx!=card;
						})>0) player.gainPlayerCard(target,'he',true).set('card',card).set('filterButton',function(button){
							return button.link!=_status.event.card;
						});
						if(get.subtype(card,false)=='equip1') target.damage();
					}
				},
				subSkill:{
					block:{
						charlotte:true,
						onremove:true,
						mod:{
							cardEnabled:function(card,player){
								if(player.getStorage('yjxiandao_block').includes(get.suit(card))) return false;
							},
							cardRespondable:function(card,player){
								if(player.getStorage('yjxiandao_block').includes(get.suit(card))) return false;
							},
							cardSavable:function(card,player){
								if(player.getStorage('yjxiandao_block').includes(get.suit(card))) return false;
							},
						},
						mark:true,
						intro:{content:'不能使用或打出$牌'},
					},
				},
			},
			yjsancai:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.showHandcards();
					var hs=player.getCards('h');
					if(hs.length>1){
						var type=get.type2(hs[0],player);
						for(var i=1;i<hs.length;i++){
							if(get.type(hs[i])!=type){
								event.finish();
								return;
							}
						}
					}
					'step 1'
					player.chooseCardTarget({
						prompt:'是否赠予一张手牌？',
						filterCard:true,
						filterTarget:lib.filter.notMe,
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.gift(result.cards,target);
					}
				}
			},
			yjyibing:{
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				direct:true,
				filter:function(event,player){
					if(event.getParent().name=='gift') return false;
					if(event.getParent('yjyibing').player==player) return false;
					var evt=event.getParent('phaseDraw'),hs=player.getCards('h'),cards=event.getg(player);
					return cards.length>0&&(!evt||evt.player!=player)&&cards.filter(function(card){
						return hs.includes(card)&&game.checkMod(card,player,'unchanged','cardEnabled2',player)!==false;
					}).length==cards.length&&player.hasUseTarget({
						name:'sha',
						cards:event.cards,
					},false);
				},
				content:function(){
					var cards=trigger.getg(player);
					player.chooseUseTarget(get.prompt('yjyibing'),'将'+get.translation(cards)+'当做【杀】使用','sha',cards,false,'nodistance').logSkill='yjyibing';
				},
			},
			//龙羽飞
			longyi:{
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					if(event.type=='wuxie') return false;
					var hs=player.getCards('h');
					if(!hs.length) return false;
					for(var i of hs){
						if(game.checkMod(i,player,'unchanged','cardEnabled2',player)===false) return false;
					}
					for(var i of lib.inpile){
						if(i!='du'&&get.type(i)=='basic'&&event.filterCard({name:i,cards:hs},player,event)) return true;
						if(i=='sha'){
							var list=['fire','thunder','ice'];
							for(var j of list){
								if(event.filterCard({name:i,nature:j,cards:hs},player,event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var vcards=[],hs=player.getCards('h');
						for(var i of lib.inpile){
							if(i!='du'&&get.type(i)=='basic'&&event.filterCard({name:i,cards:hs},player,event)) vcards.push(['基本','',i]);
							if(i=='sha'){
								for(var j of lib.inpile_nature){
									if(event.filterCard({name:i,nature:j,cards:hs},player,event)) vcards.push(['基本','',i,j]);
								}
							}
						}
						return ui.create.dialog('龙裔',[vcards,'vcard']);
					},
					check:function(button,player){
						if(_status.event.getParent().type!='phase') return 1;
						return _status.event.player.getUseValue({name:button.link[2],nature:button.link[3]});
					},
					backup:function(links,player){
						return {
							audio:'longyi',
							popname:true,
							viewAs:{name:links[0][2],nature:links[0][3]},
							filterCard:true,
							selectCard:-1,
							position:'h',
						}
					},
					prompt:function(links,player){
						return '将所有手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用或打出';
					}
				},
				hiddenCard:function(player,name){
					return name!='du'&&get.type(name)=='basic'&&player.countCards('h')>0;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player){
						return player.countCards('h')>0;
					},
					order:0.5,
					result:{
						player:function(player){
							if(_status.event.dying){
								return get.attitude(player,_status.event.dying);
							}
							if(_status.event.type=='respondShan') return 1;
							var val=0,hs=player.getCards('h'),max=0;
							for(var i of hs){
								val+=get.value(i,player);
								if(get.type(i,player)=='trick') max+=5;
							}
							if(player.hasSkill('zhenjue')) max+=7;
							return val<=max?1:0;
						},
					},
				},
				group:'longyi_effect',
				subSkill:{
					effect:{
						trigger:{player:['useCard','respond']},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							if(event.skill!='longyi_backup') return false;
							for(var i of event.cards){
								var type=get.type2(i,player);
								if(type=='equip'||type=='trick') return true;
							}
							return false;
						},
						content:function(){
							var map={};
							for(var i of trigger.cards){
								map[get.type2(i,player)]=true;
							}
							if(map.trick) player.draw();
							if(map.equip&&trigger.directHit) trigger.directHit.addArray(game.players);
						},
					},
					backup:{},
				},
			},
			zhenjue:{
				trigger:{global:'phaseJieshuBegin'},
				filter:function(event,player){
					return player.countCards('h')==0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					trigger.player.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
						if(_status.event.goon) return 7-get.value(card);
						return -get.value(card);
					}).set('goon',get.attitude(trigger.player,player)<0);
					'step 1'
					if(!result.bool) player.draw();
				},
			},
			//群刘备
			jsprende:{
				audio:'rerende',
				enable:'phaseUse',
				filterCard:true,
				selectCard:[1,Infinity],
				discard:false,
				lose:false,
				delay:false,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				onremove:true,
				check:function(card){
					if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
					if(!ui.selected.cards.length&&card.name=='du') return 20;
					var player=get.owner(card);
					if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
					if(player.hp==player.maxHp||player.storage.jsprende<0||player.countCards('h')<=1){
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
				content:function(){
					'step 0'
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'&&!evt.jsprende){
						var next=game.createEvent('jsprende_clear');
						_status.event.next.remove(next);
						evt.after.push(next);
						evt.jsprende=true;
						next.player=player;
						next.setContent(function(){
							delete player.storage.jsprende;
						});
					}
					player.give(cards,target);
					if(typeof player.storage.jsprende!='number'){
						player.storage.jsprende=0;
					}
					if(player.storage.jsprende>=0){
						player.storage.jsprende+=cards.length;
						if(player.storage.jsprende>=2){
							var list=[];
							if(lib.filter.cardUsable({name:'sha',isCard:true},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('sha',current);
							})){
								list.push(['基本','','sha']);
							}
							for(var i of lib.inpile_nature){
								if(lib.filter.cardUsable({name:'sha',nature:i,isCard:true},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
										return player.canUse({name:'sha',nature:i,isCard:true},current);
									})){
									list.push(['基本','','sha',i]);
								}
							}
							if(lib.filter.cardUsable({name:'tao',isCard:true},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('tao',current);
							})){
								list.push(['基本','','tao']);
							}
							if(lib.filter.cardUsable({name:'jiu',isCard:true},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
								return player.canUse('jiu',current);
							})){
								list.push(['基本','','jiu']);
							}
							if(list.length){
								player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
									var player=_status.event.player;
									var card={name:button.link[2],nature:button.link[3],isCard:true};
									if(card.name=='tao'){
										if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
											return 5;
										}
										return 1;
									}
									if(card.name=='sha'){
										if(game.hasPlayer(function(current){
											return player.canUse(card,current)&&get.effect(current,card,player,player)>0
										})){
											if(card.nature=='fire') return 2.95;
											if(card.nature=='thunder'||card.nature=='ice') return 2.92;
											return 2.9;
										}
										return 0;
									}
									if(card.name=='jiu'){
										return 0.5;
									}
									return 0;
								});
							}
							else{
								event.finish();
							}
							player.storage.jsprende=-1;
						}
						else{
							event.finish();
						}
					}
					else{
						event.finish();
					}
					'step 1'
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],nature:result.links[0][3],isCard:true};
						player.chooseUseTarget(card,true);
					}
				},
				ai:{
					fireAttack:true,
					order:function(skill,player){
						if(player.hp<player.maxHp&&player.storage.jsprende<2&&player.countCards('h')>1){
							return 10;
						}
						return 4;
					},
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
						}
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
						}
					},
					threaten:0.8
				}
			},
			//曹安民
			nskuishe:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(target,'he',true).set('ai',get.buttonValue);
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						event.card=card;
						player.chooseTarget('将'+get.translation(target)+'的'+(get.position(card)=='h'&&!player.hasSkillTag('viewHandcard',null,target,true)?'手牌':get.translation(card))+'交给一名角色',true,function(target){
							return target!=_status.event.getParent().target;
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.du){
								if(target.hasSkillTag('nodu')) return 0;
								return -att;
							}
							if(target.hasSkillTag('nogain')) return 0.1;
							if(att>0){
								return att+Math.max(0,5-target.countCards('h'));
							}
							return att;
						}).set('du',event.card.name=='du');
					}
					else event.finish();
					'step 2'
					if(result.bool){
						var target2=result.targets[0];
						target.line(target2,'green');
						target2.gain(target,card,'giveAuto').giver=player;
					}
					else event.finish();
					'step 3'
					target.chooseToUse(function(card,player,event){
						if(get.name(card)!='sha') return false;
						return lib.filter.filterCard.apply(this,arguments);
					},'是否对'+get.translation(player)+'使用一张杀？').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
						if(target!=_status.event.sourcex&&!ui.selected.targets.includes(_status.event.sourcex)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set('sourcex',player);
				},
				ai:{
					order:6,
					expose:0.2,
					result:{
						target:-1.5,
						player:function(player,target){
							if(!target.canUse('sha',player)) return 0;
							if(target.countCards('h')==1) return 0.1;
							if(player.hasShan()) return -0.5;
							if(player.hp<=1) return -2;
							if(player.hp<=2) return -1;
							return 0;
						}
					},
				},
			},
			//文和乱武
			nsyangwu:{
				enable:'phaseUse',
				usable:1,
				filterCard:{suit:'heart'},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>player.countCards('h');
				},
				filter:function(event,player){
					var info=lib.skill.nsyangwu;
					return player.countCards('h',info.filterCard)&&game.hasPlayer(function(target){
						return info.filterTarget(null,player,target);
					});
				},
				check:function(card){
					var num=0;
					var player=_status.event.player;
					game.countPlayer(function(current){
						if(current!=player&&get.attitude(player,current)<0) num=Math.max(num,current.countCards('h')-player.countCards('h'));
					});
					return Math.ceil((num+1)/2)*2+4-get.value(card);
				},
				content:function(){
					var num=Math.ceil((target.countCards('h')-player.countCards('h'))/2);
					if(num) player.gainPlayerCard(target,true,'h',num,'visible');
				},
				ai:{
					order:4,
					result:{
						target:function(player,target){
							return player.countCards('h')-target.countCards('h');
						},
					},
				},
			},
			nslulve:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current.countCards('e')>0&&current.countCards('e')<=player.countCards('he');
					});
				},
				filterCard:function(){
					if(ui.selected.targets.length) return false;
					return true;
				},
				position:'he',
				selectCard:[1,Infinity],
				complexSelect:true,
				complexCard:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('e')>0&&ui.selected.cards.length==target.countCards('e');
				},
				check:function(card){
					var player=_status.event.player;
					if(game.hasPlayer(function(current){
						return current!=player&&current.countCards('e')>0&&ui.selected.cards.length==current.countCards('e')&&get.damageEffect(current,player,player)>0;
					})) return 0;
					switch(ui.selected.cards.length){
						case 0:return 8-get.value(card);
						case 1:return 6-get.value(card);
						case 2:return 3-get.value(card);
						default:return 0;
					}
				},
				content:function(){
					target.damage('nocard');
				},
				ai:{
					damage:true,
					order:2,
					result:{
						target:function(player,target){
							return get.damageEffect(target,player);
						}
					},
					expose:0.3
				}
			},
			nsfeixiong:{
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer(function(current){
						return current!=player&&player.canCompare(current);
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('nsfeixiong'),function(card,player,target){
						return player!=target&&player.canCompare(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						var hs=player.getCards('h').sort(function(a,b){
							return b.number-a.number;
						});
						var ts=target.getCards('h').sort(function(a,b){
							return b.number-a.number;
						});
						if(!hs.length||!ts.length) return 0;
						if(hs[0].number>ts[0].number) return get.damageEffect(target,player,player);
						return 0;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('nsfeixiong',target);
						if(get.mode()!=='identity'||player.identity!=='nei') player.addExpose(0.2);
						player.chooseToCompare(target);
					}
					else event.finish();
					'step 2'
					if(!result.tie){
						var targets=[player,target];
						if(result.bool) targets.reverse();
						targets[0].damage(targets[1]);
					}
				},
			},
			nscesuan:{
				trigger:{player:'damageBegin3'},
				forced:true,
				content:function(){
					'step 0'
					trigger.cancel();
					event.lose=player.loseMaxHp();
					'step 1'
					if(event.lose&&event.lose.loseHp) player.draw();
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.player){
							if(arg.player.hasSkillTag('jueqing',false,player)) return false;
						}
					},
				},
			},
			//S贾诩
			nsyice:{
				trigger:{
					player:'loseAfter',
					global:['cardsDiscardAfter','loseAsyncAfter'],
				},
				filter:function(event,player){
					if(event.name!='cardsDiscard'){
						if(event.type!='discard') return false;
						var evt=event.getl(player);
						return evt.cards2&&evt.cards2.filterInD('d').length>0;
					}
					else{
						var evt=event.getParent();
						if(evt.name!='orderingDiscard'||!evt.relatedEvent||evt.relatedEvent.player!=player||!['useCard','respond'].includes(evt.relatedEvent.name)) return false;
						return event.cards.filterInD('d').length>0;
					}
				},
				forced:true,
				content:function(){
					'step 0'
					var evt=trigger.getParent().relatedEvent;
					if((trigger.name=='discard'&&!trigger.delay)||evt&&evt.name=='respond') game.delayx();
					'step 1'
					var cards;
					if(trigger.getl) cards=trigger.getl(player).cards2.filterInD('d');
					else cards=trigger.cards.filterInD('d');
					if(cards.length==1) event._result={bool:true,links:cards};
					else{
						var dialog=['遗策：选择要放置的卡牌','<div class="text center">（从左到右为从旧到新，后选择的后置入）</div>',cards];
						var cards2=player.getExpansions('nsyice');
						cards2.reverse();
						if(cards2.length){
							dialog.push('<div class="text center">原有“策”</div>');
							dialog.push(cards2);
						}
						player.chooseButton(dialog,true,cards.length).set('filterButton',function(button){
							return _status.event.cards.includes(button.link);
						}).set('cards',cards);
					}
					'step 2'
					player.addToExpansion(result.links,'gain2').gaintag.add('nsyice');
					'step 3'
					var storage=player.getExpansions('nsyice');
					var bool=false;
					for(var i=0;i<storage.length;i++){
						for(var j=storage.length-1;j>i;j--){
							if(get.number(storage[i])==get.number(storage[j])){
								bool=true;
								break;
							}
						}
						if(bool) break;
					}
					if(bool){
						event.cards=storage.splice(i,j-i+1);
					}
					else event.finish();
					'step 4'
					var cardsx=[];
					cardsx.push(cards.shift());
					cardsx.push(cards.pop());
					if(cards.length) player.gain(cards,'gain2');
					event.cards=cardsx;
					'step 5'
					player.chooseButton(['将一张牌置于牌堆顶，将另一张牌置于牌堆底',cards],true);
					'step 6'
					player.lose(event.cards,ui.cardPile).set('topper',result.links[0]).insert_index=function(event,card){
						if(card==event.topper) return ui.cardPile.firstChild;
						return null;
					};
					if(_status.dying.length) event.finish();
					'step 7'
					player.chooseTarget('对一名角色造成1点伤害',true).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 8'
					if(result.bool){
						var target=result.targets[0];
						player.line(target);
						target.damage('nocard');
					}
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				marktext:'策',
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
			},
			//用间篇
			yjxuepin:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(event,player,target){
					return player.inRange(target)&&target.countDiscardableCards(player,'he')>0;
				},
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,2,'he',true);
					else event.finish();
					'step 2'
					if(result.bool&&result.cards.length==2&&get.type2(result.cards[0],result.cards[0].original=='h'?target:false)==get.type2(result.cards[1],result.cards[1].original=='h'?target:false)) player.recover();
				},
				ai:{
					order:4,
					result:{
						player:function(player,target){
							if(player.hp==1) return -8;
							if(target.countCards('e')>1) return 0;
							if(player.hp>2||target.countCards('h')>1) return -0.5;
							return -2;
						},
						target:function(player,target){
							if(target.countDiscardableCards(player,'he')<2) return 0;
							return -2;
						},
					},
				},
			},
			nsjianglie:{
				trigger:{player:'useCardToPlayered'},
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.countCards('h')>0;
				},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				logTarget:'target',
				content:function(){
					'step 0'
					trigger.target.showHandcards();
					'step 1'
					var cards=trigger.target.getCards('h');
					var list=[];
					for(var i=0;i<cards.length;i++){
						list.add(get.color(cards[i]));
					}
					if(list.length==1) event._result={control:list[0]};
					else{
						list.sort();
						trigger.target.chooseControl(list).set('prompt','选择弃置一种颜色的所有手牌').set('ai',function(){
							var player=_status.event.player;
							if(get.value(player.getCards('h',{color:'red'}))>=get.value(player.getCards('h',{color:'black'}))) return 'black';
							return 'red';
						});
					}
					'step 2'
					trigger.target.discard(trigger.target.getCards('h',{color:result.control}));
				},
			},
			//桌游志贴纸
			spyinzhi:{
				trigger:{player:'damageEnd'},
				frequent:true,
				content:function(){
					'step 0'
					event.count=trigger.num;
					'step 1'
					event.count--;
					var cards=game.cardsGotoOrdering(get.cards(2)).cards;
					player.showCards(cards);
					event.count2=0;
					for(var i=0;i<cards.length;i++){
						if(get.suit(cards[i])=='spade'){
							event.count2++;
							cards.splice(i--,1);
						}
					}
					event.cards=cards;
					if(!event.count2||!trigger.source) event.goto(4);
					'step 2'
					event.count2--;
					if(trigger.source.countCards('h')>0){
						player.chooseTarget('令一名角色获得'+get.translation(trigger.source)+'的一张手牌',function(card,player,target){
							var source=_status.event.source;
							return target!=source&&source.countGainableCards(target,'h')>0;
						}).set('source',trigger.source);
					}
					else event.goto(4);
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						player.line([trigger.source,target],'green');
						target.gainPlayerCard(trigger.source,'h',true);
						if(event.count2) event.goto(2)
					}
					'step 4'
					if(cards.length) player.gain(cards,'gain2','log');
					'step 5'
					if(event.count>0&&player.hasSkill(event.name)&&!get.is.blocked(event.name,player)){
						player.chooseBool(get.prompt2('spyinzhi')).set('frequentSkill',event.name);
					}
					else event.finish();
					'step 6'
					if(result.bool){
						player.logSkill('spyinzhi');
						event.goto(1);
					}
				},
			},
			spmingjian:{
				trigger:{global:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseCard(get.prompt2('spmingjian',trigger.player),'he');
					next.set('ai',function(card){
						var target=_status.event.getTrigger().player;
						var player=_status.event.player;
						if(get.attitude(player,target)>0&&target.countCards('j')>0) return 5-get.value(card);
						return -1;
					});
					next.set('filterCard',function(card,player){
						if(get.position(card)=='e') return lib.filter.cardDiscardable.apply(this,arguments);
						return true;
					});
					//next.set('logSkill',['spmingjian',trigger.player]);
					'step 1'
					if(result.bool){
						player.logSkill('spmingjian',trigger.player);
						var card=result.cards[0];
						event.card=card;
						if(get.position(card)=='e') event._result={index:0};
						else if(!lib.filter.cardDiscardable(card,player,event)) event._result={index:1};
						else{
							var name=get.translation(trigger.player);
							player.chooseControl().set('choiceList',[
								'令'+name+'跳过本回合的判定阶段',
								'令'+name+'于本回合的判定中不触发「判定结果生效前」的时机',
							]).set('ai',function(){return 0});
						}
					}
					else event.finish();
					'step 2'
					if(result.index==0){
						player.discard(card);
						trigger.player.skip('phaseJudge');
					}
					else{
						trigger.player.addToExpansion(card,player,'giveAuto').gaintag.add('spmingjian_charlotte');
						trigger.player.addSkill('spmingjian_charlotte');
					}
				},
				ai:{
					expose:0.25,
				},
			},
			spmingjian_charlotte:{
				trigger:{player:['judgeBefore','phaseAfter']},
				forced:true,
				firstDo:true,
				silent:true,
				popup:false,
				charlotte:true,
				content:function(){
					if(trigger.name=='phase') player.removeSkill(event.name);
					else trigger.noJudgeTrigger=true;
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				marktext:'鉴',
				intro:{
					name:'明鉴',
					content:'expansion',
					markcount:'expansion',
				},
			},
			spshude:{
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				filter:function(event,player){
					return player.countCards('h')<player.maxHp;
				},
				content:function(){
					player.drawTo(player.maxHp);
				},
			},
			spfuluan:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.inRange(target);
				},
				selectCard:3,
				position:'he',
				check:function(card){
					return 5-get.value(card);
				},
				complexCard:true,
				filterCard:function(card,player){
					if(!ui.selected.cards.length) return player.countCards('he',{suit:get.suit(card)})>2;
					return get.suit(card)==get.suit(ui.selected.cards[0]);
				},
				content:function(){
					target.turnOver();
					player.addTempSkill('spfuluan2');
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(target.isTurnedOver()) return 2;
							return -1;
						},
					},
				},
			},
			spfuluan2:{
				mod:{
					cardEnabled:function(card){
						if(card.name=='sha') return false;
					},
				},
			},
			spzhaoxin:{
				trigger:{player:'phaseDrawEnd'},
				check:function(event,player){
					return player.getUseValue({name:'sha',isCard:true})>0;
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.showHandcards();
					'step 1'
					player.chooseUseTarget('sha',false);
				},
			},
			splanggu:{
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return get.itemtype(event.source)=='player';
				},
				logTarget:'source',
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					if(trigger.source.countCards('h')>0){
						var next=player.discardPlayerCard(trigger.source,'h',[1,Infinity]);
						next.set('suit',result.suit);
						next.set('filterButton',function(button){
							return get.suit(button.link)==_status.event.suit;
						});
						next.set('visible',true);
					}
				},
				group:'splanggu_rewrite',
			},
			splanggu_rewrite:{
				trigger:{player:'judge'},
				filter:function (event,player){
					return player.countCards('hs')>0&&event.getParent().name=='splanggu';
				},
				direct:true,
				content:function (){
					"step 0"
					player.chooseCard('狼顾的判定结果为'+
					get.translation(trigger.player.judging[0])+'，是否打出一张手牌进行代替？','hs',function(card){
						var player=_status.event.player;
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
						if(mod!='unchanged') return mod;
						return true;
					}).set('ai',function(card){
						return -1;
					});
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight','splanggu','noOrdering');
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
			},
			sphantong:{
				trigger:{
					player:'loseEnd',
				},
				frequent:true,
				filter:function(event,player){
					return event.type=='discard'&&event.getParent(3).name=='phaseDiscard'&&event.cards.filterInD('d').length>0;
				},
				content:function(){
					if(!player.storage.sphantong) player.storage.sphantong=[];
					var cards=trigger.cards.filterInD('d');
					player.storage.sphantong.addArray(cards);
					player.$gain2(cards);
					game.log(player,'将',cards,'置于武将牌上');
					player.markSkill('sphantong');
				},
				group:['sphantong_gain'],
				derivation:['hujia','jijiang','jiuyuan','xueyi'],
				marktext:'诏',
				intro:{
					content:'cards',
					onunmark:'throw',
				},
			},
			sphantong_gain:{
				trigger:{global:'phaseBegin'},
				direct:true,
				filter:function(event,player){
					return player.storage.sphantong&&player.storage.sphantong.length>0;
				},
				content:function(){
					'step 0'
					player.chooseButton([get.prompt('sphantong'),player.storage.sphantong],function(button){
						var player=_status.event.player;
						if(_status.currentPhase==player){
							//血裔
							if((player.hasJudge('lebu')||player.skipList.includes('phaseUse'))&&game.hasPlayer(function(current){
								return current!=player&&current.group=='qun';
							})) return 1;
							//激将
							if(!player.hasJudge('lebu')&&!player.skipList.includes('phaseUse')&&game.hasPlayer(function(current){
								return current!=player&&current.group=='shu'&&current.hasSha()&&get.attitude(player,current)>0&&get.attitude(current,player)>0;
							})&&game.hasPlayer(function(target){
								return player.canUse({name:'sha'},target)&&get.effect(target,{name:'sha'},player,player)>0;
							})) return 1;
						}
						//护驾
						else if(!player.hasShan()&&game.hasPlayer(function(current){
							return current!=player&&current.group=='wei'&&current.mayHaveShan(player,'respond')&&get.attitude(player,current)>0&&get.attitude(current,player)>0;
						})) return 1;
						return -1;
					});
					'step 1'
					if(result.bool){
						player.logSkill('sphantong');
						var card=result.links[0];
						player.$throw(card);
						game.log(player,'将',card,'置入了弃牌堆');
						player.storage.sphantong.remove(card);
						player[player.storage.sphantong.length>0?'markSkill':'unmarkSkill']('sphantong');
						game.cardsDiscard(card);
						var list=['hujia','jijiang','jiuyuan','xueyi'];
						for(var i=0;i<list.length;i++){
							if(player.hasSkill(list[i])) list.splice(i--,1);
						}
						if(list.length){
							player.chooseControl(list).set('prompt','选择获得以下技能中的一个').set('ai',function(){
								var player=_status.event.player;
								if(_status.currentPhase==player){
									//血裔
									if((player.hasJudge('lebu')||player.skipList.includes('phaseUse'))&&game.hasPlayer(function(current){
										return current!=player&&current.group=='qun';
									})) return 'xueyi';
									//激将
									if(!player.hasJudge('lebu')&&!player.skipList.includes('phaseUse')&&game.hasPlayer(function(current){
										return current!=player&&current.group=='shu'&&current.hasSha()&&get.attitude(player,current)>0&&get.attitude(current,player)>0;
									})&&game.hasPlayer(function(target){
										return player.canUse({name:'sha'},target)&&get.effect(target,{name:'sha'},player,player)>0;
									})) return 'jijiang';
								}
								//护驾
								else if(!player.hasShan()&&game.hasPlayer(function(current){
									return current!=player&&current.group=='wei'&&current.mayHaveShan(player,'respond')&&get.attitude(player,current)>0&&get.attitude(current,player)>0;
								})) return 'hujia';
							});
						}
						else event.finish();
					}
					else event.finish();
					'step 2'
					var skill=result.control;
					player.addTempSkills(skill);
					// player.popup(skill,'wood');
					// game.log(player,'获得了技能','#g【'+get.translation(skill)+'】');
				},
			},
			sphuangen:{
				trigger:{global:'useCardToPlayered'},
				filter:function(event,player){
					if(!event.isFirstTarget) return false;
					if(get.type(event.card)!='trick') return false;
					if(get.info(event.card).multitarget) return false;
					if(event.targets.length<2) return false;
					return player.hp>0;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('sphuangen'),
						[1,Math.min(player.hp,trigger.targets.length)],function(card,player,target){
						return _status.event.targets.includes(target);
					}).set('ai',function(target){
						return -get.effect(target,trigger.card,trigger.player,_status.event.player);
					}).set('targets',trigger.targets);
					"step 1"
					if(result.bool){
						player.logSkill('sphuangen',result.targets);
						trigger.excluded.addArray(result.targets);
						player.draw();
					}
				},
			},
			spyicong:{
				trigger:{player:'phaseDiscardEnd'},
				direct:true,
				locked:false,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.chooseCard('he',[1,player.countCards('he')],get.prompt2('spyicong')).set('ai',function(card){
						if(card.name=='du') return 10;
						if(ui.selected.cards.length) return -1;
						return 4-get.value(card);
					});
					'step 1'
					if(result.bool){
						player.logSkill('spyicong');
						player.addToExpansion(result.cards,player,'give').gaintag.add('spyicong');
					}
				},
				mod:{
					globalTo:function(from,to,num){
						return num+to.getExpansions('spyicong').length;
					},
				},
				marktext:'扈',
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				intro:{
					name:'义从',
					content:function(storage,player){
						return '共有'+get.cnNumber(player.getExpansions('spyicong').length)+'张“扈”';
					},
					markcount:'expansion',
				},
			},
			sptuji:{
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return player.getExpansions('spyicong').length>0;
				},
				content:function(){
					var cards=player.getExpansions('spyicong');
					var num=cards.length;
					player.addMark('sptuji2',num,false);
					player.addTempSkill('sptuji2');
					player.loseToDiscardpile(cards);
					if(num<=1) player.draw();
				},
			},
			sptuji2:{
				onremove:true,
				charlotte:true,
				mod:{
					globalFrom:function(from,to,num){
						return num-from.countMark('sptuji2');
					},
				},
				marktext:'突',
				intro:{
					name:'突骑',
					content:'至其他角色的距离-#',
				},
			},
			xinfu_yanyu:{
				trigger:{
					global:"phaseUseBegin",
				},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToDiscard(get.prompt('xinfu_yanyu'),get.translation('xinfu_yanyu_info'),'he').set('logSkill','xinfu_yanyu');
					if(player==trigger.player){
						next.set('goon',function(){
							var map={
								basic:0,
								trick:0.1,
							};
							var hs=trigger.player.getCards('h');
							var sha=false;
							var jiu=false;
							for(var i=0;i<hs.length;i++){
								if(trigger.player.hasValueTarget(hs[i])){
									if(hs[i].name=='sha'&&!sha){
										sha=true;
										map.basic+=2;
									}
									if(hs[i].name=='tao') map.basic+=6;
									if(hs[i].name=='jiu'){jiu=true;map.basic+=2.5;}
									if(get.type(hs[i])=='trick') map.trick+=get.value(hs[i],player,'raw');
								}
							}
							return map;
						}());
						next.set('ai',function(card){
							var map=_status.event.goon;
							var type=get.type(card,'trick');
							if(!map[type]) return -1;
							return map[type]-get.value(card);
						});
					}
					else{
						next.set('ai',function(cardx){
							var map={
								basic:0,
								trick:0,
							};
							var hs=trigger.player.getCards('h');
							var sha=false;
							var jiu=false;
							for(var i=0;i<hs.length;i++){
								if(hs[i]!=cardx&&trigger.player.hasValueTarget(hs[i])){
									if(hs[i].name=='sha'&&!sha){
										sha=true;
										map.basic+=2;
									}
									if(hs[i].name=='tao') map.basic+=6;
									if(hs[i].name=='jiu'){jiu=true;map.basic+=3;}
									if(get.type(hs[i])=='trick') map.trick+=player.getUseValue(hs[i]);
								}
							}
							var type=get.type(cardx,'trick');
							if(!map[type]) return -get.value(cardx);
							return map[type]-get.value(cardx);
						});
					}
					'step 1'
					if(result.bool){
						player.storage.xinfu_yanyu=get.type(result.cards[0],'trick');
						player.addTempSkill('xinfu_yanyu2','phaseUseAfter');
					}
				},
			},
			"xinfu_yanyu2":{
				init:function (player,skill){
					player.storage[skill]=0;
				},
				onremove:function (player,skill){
					delete player.storage.xinfu_yanyu;
					delete player.storage.xinfu_yanyu2;
				},
				trigger:{
					global:["loseAfter","cardsDiscardAfter","loseAsyncAfter","equipAfter"],
				},
				direct:true,
				filter:function(event,player){
					if(player.storage.xinfu_yanyu2>=3) return false;
					var type=player.storage.xinfu_yanyu,cards=event.getd();
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i],'trick')==type&&get.position(cards[i],true)=='d') return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					event.logged=false;
					event.cards=[];
					var type=player.storage.xinfu_yanyu;
					var cards=trigger.getd();
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i],'trick')==type&&get.position(cards[i],true)=='d') event.cards.push(cards[i]);
					}
					'step 1'
					if(player.storage.xinfu_yanyu2>=3) event.finish();
					else player.chooseCardButton(event.cards,'【燕语】：是否将其中的一张牌交给一名角色？').ai=function(card){
						if(card.name=='du') return 10;
						return get.value(card);
					};
					'step 2'
					if(result.bool){
						player.storage.xinfu_yanyu2++;
						if(!event.logged){
							player.logSkill('xinfu_yanyu');
							player.addExpose(0.25);
							event.logged=true;
						}
						event.togain=result.links[0];
						event.cards.remove(event.togain);
						player.chooseTarget(true,'请选择要获得'+get.translation(event.togain)+'的角色').set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							var card=_status.event.card;
							var val=get.value(card);
							if(player.storage.xinfu_yanyu2<3&&target==_status.currentPhase&&target.hasValueTarget(card,null,true)) att=att*5;
							else if(target==player&&!player.hasJudge('lebu')&&get.type(card)=='trick') att=att*3;
							if(target.hasSkillTag('nogain')) att/=10;
							return att*val;
						}).set('card',event.togain);
					}
					else event.finish();
					'step 3'
					var target=result.targets[0];
					player.line(target,'green');
					target.gain(event.togain,'gain2');
					if(event.cards.length) event.goto(1);
				},
			},
			"xinfu_xiaode":{
				subSkill:{
					remove:{
						unique:true,
						charlotte:true,
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						popup:false,
						content:function(){
							player.removeAdditionalSkill('xinfu_xiaode');
							player.removeSkill('xinfu_xiaode_remove');
						},
					},
				},
				trigger:{
					global:"dieAfter",
				},
				direct:true,
				filter:function (skill,event){
					return !event.hasSkill('xinfu_xiaode_remove');
				},
				content:function (){
					'step 0'
					var list=[];
					var listm=[];
					var listv=[];
					if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
					else listm=lib.character[trigger.player.name][3];
					if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
					listm=listm.concat(listv);
					var func=function(skill){
						var info=get.info(skill);
						if(info.charlotte||info.zhuSkill||(info.unique&&!info.limited)||info.juexingji||info.dutySkill||info.hiddenSkill) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					if(list.length){
						player.chooseControl(list,'cancel2').set('prompt',get.prompt('xinfu_xiaode')).set('prompt2',get.translation('xinfu_xiaode_info')).set('ai',function(){
							return list.randomGet();
						});
					}
					else event.finish();
					'step 1'
					if(result.control&&result.control!='cancel2'){
						player.logSkill('xinfu_xiaode');
						player.popup(result.control,'thunder');
						game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
						player.addAdditionalSkill('xinfu_xiaode',[result.control]);
						player.addSkill('xinfu_xiaode_remove');
					}
				},
			},
			chixin:{
				group:['chixin1','chixin2'],
				mod:{
					cardUsableTarget:function(card,player,target){
						if(card.name=='sha'&&!target.hasSkill('chixin3')&&player.inRange(target)) return true;
					},
				},
				trigger:{player:'useCardToPlayered'},
				silent:true,
				firstDo:true,
				locked:false,
				content:function(){
					trigger.target.addTempSkill('chixin3');
				}
			},
			chixin1:{
				enable:['chooseToRespond','chooseToUse'],
				filterCard:{suit:'diamond'},
				position:'hes',
				viewAs:{name:'sha'},
				prompt:'将一张♦牌当杀使用或打出',
				check:function(card){return 5-get.value(card)},
				ai:{
					respondSha:true,
				}
			},
			chixin2:{
				enable:['chooseToUse','chooseToRespond'],
				filterCard:{suit:'diamond'},
				viewAs:{name:'shan'},
				position:'hes',
				prompt:'将一张♦牌当闪使用或打出',
				check:function(card){return 5-get.value(card)},
				ai:{
					respondShan:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.8
						}
					},
				}
			},
			chixin3:{charlotte:true},
			suiren:{
				trigger:{player:'phaseZhunbeiBegin'},
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return !player.storage.suiren;
				},
				intro:{
					content:'limited',
				},
				mark:true,
				direct:true,
				unique:true,
				limited:true,
				content:function(){
					"step 0"
					var check=(player.hp==1||(player.hp==2&&player.countCards('h')<=1));
					player.chooseTarget(get.prompt2('suiren')).set('ai',function(target){
						if(!_status.event.check) return 0;
						return get.attitude(_status.event.player,target);
					}).set('check',check);
					"step 1"
					if(result.bool){
						player.storage.suiren=true;
						player.awakenSkill('suiren');
						player.logSkill('suiren',result.targets);
						player.removeSkills('reyicong');
						player.gainMaxHp();
						player.recover();
						result.targets[0].draw(3);
					}
				}
			},
			xinmanjuan:{
				audio:'manjuan',
				forced:true,
				trigger:{
					player:'gainAfter',
					global:'loseAsyncAfter',
				},
				filter:function(event,player){
					var hs=player.getCards('h');
					return event.type!='xinmanjuan'&&event.getg(player).filter(function(card){
						return hs.includes(card);
					}).length>0;
				},
				content:function(){
					"step 0"
					var hs=player.getCards('h'),cards=trigger.getg(player).filter(function(card){
						return hs.includes(card);
					});
					event.cards=cards;
					event.rawCards=cards.slice(0);
					player.loseToDiscardpile(cards);
					if(_status.currentPhase!=player) event.finish();
					"step 1"
					event.card=event.cards.shift();
					event.togain=[];
					var number=get.number(event.card);
					for(var i=0;i<ui.discardPile.childNodes.length;i++){
						var current=ui.discardPile.childNodes[i];
						if((!event.rawCards.includes(current))&&get.number(current)==number) event.togain.push(current);
					}
					if(!event.togain.length) event.goto(4);
					"step 2"
					player.chooseButton(['是否获得其中的一张牌？',event.togain]).ai=function(button){
						return get.value(button.link);
					};
					"step 3"
					if(result.bool){
						player.gain(result.links[0],'gain2').type='xinmanjuan';
					}
					"step 4"
					if(event.cards.length) event.goto(1);
				},
				ai:{
					threaten:4.2,
					nogain:1,
					skillTagFilter:function(player){
						return player!=_status.currentPhase;
					},
				},
			},
			manjuan:{
				audio:true,
				trigger:{global:'loseAfter'},
				filter:function(event,player){
					if(event.type!='discard') return false;
					if(event.player==player) return false;
					if(!player.countCards('he')) return false;
					for(var i=0;i<event.cards2.length;i++){
						if(get.position(event.cards2[i],true)=='d'){
							return true;
						}
					}
					return false;
				},
				direct:true,
				unique:true,
				gainable:true,
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					"step 1"
					var cards=[];
					var suits=['club','spade','heart','diamond']
					for(var i=0;i<trigger.cards2.length;i++){
						if(get.position(trigger.cards2[i],true)=='d'){
							cards.push(trigger.cards2[i]);
							suits.remove(get.suit(trigger.cards2[i]));
						}
					}
					if(cards.length){
						var maxval=0;
						for(var i=0;i<cards.length;i++){
							var tempval=get.value(cards[i]);
							if(tempval>maxval){
								maxval=tempval;
							}
						}
						maxval+=cards.length-1;
						var next=player.chooseToDiscard('he',{suit:suits});
						next.set('ai',function(card){
							return _status.event.maxval-get.value(card);
						});
						next.set('maxval',maxval);
						next.set('dialog',[get.prompt(event.name),'hidden',cards])
						next.logSkill=event.name;
						event.cards=cards;
					}
					"step 2"
					if(result.bool){
						player.gain(event.cards,'gain2','log');
					}
				},
				ai:{
					threaten:1.3
				}
			},
			zuixiang:{
				skillAnimation:true,
				animationColor:'gray',
				audio:true,
				unique:true,
				limited:true,
				trigger:{player:'phaseZhunbeiBegin'},
				content:function(){
					'step 0'
					player.awakenSkill('zuixiang');
					event.cards=player.showCards(get.cards(3)).cards;
					player.addToExpansion(event.cards,'gain2').gaintag.add('zuixiang2');
					'step 1'
					if(lib.skill.zuixiang.filterSame(cards)){
						player.gain(cards,'gain2').type='xinmanjuan';
					}
					else{
						trigger._zuixiang=true;
						player.addSkill('zuixiang2');
					}
				},
				filterSame:function(c){
					for(var i=0;i<c.length;i++){
						for(var j=i+1;j<c.length;j++){
							if(get.number(c[i])==get.number(c[j])) return true;
						}
					}
					return false;
				},
			},
			zuixiang2:{
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				mod:{
					cardEnabled:function(card,player){
						var type=get.type2(card);
						var list=player.getExpansions('zuixiang2');
						for(var i of list){
							if(get.type2(i,false)==type) return false;
						}
					},
					cardRespondable:function(){
						return lib.skill.zuixiang2.mod.cardEnabled.apply(this,arguments)
					},
					cardSavable:function(){
						return lib.skill.zuixiang2.mod.cardEnabled.apply(this,arguments);
					},
				},
				trigger:{
					player:'phaseZhunbeiBegin',
					target:'useCardToBefore',
				},
				forced:true,
				charlotte:true,
				filter:function(event,player){
					if(event.name=='phaseZhunbei') return !event._zuixiang;
					var type=get.type2(event.card);
					var list=player.getExpansions('zuixiang2');
					for(var i of list){
						if(get.type2(i)==type) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					if(event.triggername=='useCardToBefore'){
						trigger.cancel();
						event.finish();
						return;
					}
					var cards=get.cards(3);
					player.addToExpansion('gain2',cards).gaintag.add('zuixiang2');
					'step 1'
					var cards=player.getExpansions('zuixiang2');
					player.showCards(cards);
					if(lib.skill.zuixiang.filterSame(cards)){
						player.gain(cards,'gain2','log').type='xinmanjuan';
						player.removeSkill('zuixiang2');
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							var type=get.type2(card);
							var list=target.getExpansions('zuixiang2');
							for(var i of list){
								if(get.type2(i)==type) return 'zeroplayertarget';
							}
						},
					},
				},
			},
			yanxiao:{
				audio:2,
				enable:'phaseUse',
				filterCard:{suit:'diamond'},
				filterTarget:function(card,player,target){
					return target.canAddJudge({name:'yanxiao_card'});
				},
				check:function(card){
					return 7-get.value(card);
				},
				position:'he',
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>0;
				},
				discard:false,
				lose:false,
				delay:false,
				prepare:'give',
				content:function(){
					'step 0'
					game.addGlobalSkill('yanxiao_global');
					target.addJudge({name:'yanxiao_card'},cards);
					'step 1'
					game.delay();
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(target.countCards('j',function(card){
								return get.effect(target,{
									name:card.viewAs||card.name,
									cards:[card],
								},target,target)<0;
							})) return 1;
							return 0;
						}
					}
				}
			},
			yanxiao_global:{
				trigger:{player:'phaseJudgeBegin'},
				forced:true,
				filter:function(event,player){
					return player.countCards('j')>0&&player.hasJudge('yanxiao_card');
				},
				content:function(){
					player.gain(player.getCards('j'),'gain2');
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.type(card)=='delay'&&target.hasJudge('yanxiao_card')) return [0,0,0,0.1];
						}
					}
				}
			},
			anxian:{
				audio:2,
				group:['anxian_source','anxian_target'],
				subSkill:{
					source:{
						audio:"anxian",
						trigger:{source:'damageBegin2'},
						filter:function(event,player){
							return event.card&&event.card.name=='sha';
						},
						check:function(event,player){
							if(get.damageEffect(event.player,player,player)<=0) return true;
							return false;
						},
						content:function(){
							'step 0'
							if(trigger.player.countCards('h')){
								trigger.player.chooseToDiscard(true);
							}
							'step 1'
							player.draw();
							trigger.cancel();
						}
					},
					target:{
						audio:"anxian",
						trigger:{target:'useCardToTargeted'},
						direct:true,
						filter:function(event,player){
							return event.card.name=='sha'&&player.countCards('h');
						},
						content:function(){
							"step 0"
							var next=player.chooseToDiscard(get.prompt2('anxian'));
							next.set('ai',function(card){
								var player=_status.event.player;
								var trigger=_status.event.getTrigger();
								if(get.attitude(player,trigger.player)>0){
									return 9-get.value(card);
								}
								if(player.countCards('h',{name:'shan'})) return -1;
								return 7-get.value(card);
							});
							next.logSkill='anxian';
							"step 1"
							if(result.bool){
								trigger.player.draw();
								trigger.getParent().excluded.push(player);
							}
						},
					}
				}
			},
			junwei:{
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.getExpansions('yinling').length>=3;
				},
				content:function(){
					'step 0'
					var cards=player.getExpansions('yinling');
					if(cards.length>3){
						player.chooseButton(3,[get.prompt('junwei'),'hidden',cards]).set('ai',function(button){
							return 1;
						});
					}
					else{
						player.chooseBool().set('createDialog',[get.prompt('junwei'),'hidden',cards]).set('dialogselectx',true).set('choice',true);
						event.cards=cards.slice(0);
					}
					'step 1'
					if(result.bool){
						player.logSkill('junwei');
						var cards=event.cards||result.links;
						player.loseToDiscardpile(cards);
						player.chooseTarget(true,function(card,player,target){
							return player!=target;
						}).set('ai',function(target){
							return -get.attitude(_status.event.player,target)/Math.sqrt(1+target.hp);
						});
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line(result.targets);
						event.target=target;
						var nshan=target.countCards('h',function(card){
							if(_status.connectMode) return true;
							return card.name=='shan';
						});
						if(nshan==0){
							event.directfalse=true;
						}
						else{
							target.chooseCard('交给'+get.translation(player)+'一张【闪】，或失去1点体力',function(card){
								return card.name=='shan';
							}).set('ai',function(card){
								if(_status.event.nshan>1) return 1;
								if(_status.event.player.hp>=3) return 0;
								return 1;
							}).set('nshan',nshan);
						}
					}
					else{
						event.finish();
					}
					'step 3'
					if(!event.directfalse&&result.bool) game.delay();
					ui.clear();
					'step 4'
					if(!event.directfalse&&result.bool){
						event.cards=result.cards;
						event.target.$throw(result.cards);
						player.chooseTarget('将'+get.translation(event.cards)+'交给一名角色',true,function(card,player,target){
							return target!=_status.event.getParent().target;
						}).set('ai',function(target){
							return get.attitude(_status.event.player,target)/(target.countCards('h','shan')+1);
						});
					}
					else{
						event.target.loseHp();
						delete event.cards;
					}
					'step 5'
					if(event.cards){
						player.line(result.targets,'green');
						result.targets[0].gain(event.cards,'gain2').giver=player;
						game.log(player,'将',event.cards,'交给',result.targets[0]);
						event.finish();
					}
					else{
						if(event.target.countCards('e')){
							player.choosePlayerCard('e','将'+get.translation(event.target)+'的一张装备牌移出游戏',true,event.target);
						}
						else{
							event.finish();
						}
					}
					'step 6'
					if(result.bool){
						var card=result.links[0];
						target.addToExpansion(card,target,'give').gaintag.add('junwei2');
						target.addSkill('junwei2');
					}
				}
			},
			junwei2:{
				mark:true,
				intro:{
					content:'expansion',
					markcount:'expansion',
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				charlotte:true,
				content:function(){
					'step 0'
					var cards=player.getExpansions('junwei2').filter(function(card){
						return player.canEquip(card,true);
					});
					if(cards.length){
						player.$give(cards[0],player,false);
						game.delay(0.5);
						player.equip(cards[0]);
						event.redo();
					}
					'step 1'
					player.removeSkill('junwei2');
				}
			},
			yinling:{
				enable:'phaseUse',
				filterCard:{color:'black'},
				position:'he',
				marktext:'锦',
				intro:{
					content:'expansion',
					markcount:'expansion'
				},
				onremove:function(player,skill){
					var cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				filter:function(event,player){
					return player.countCards('he',{color:'black'})>0&&player.getExpansions('yinling').length<4;
				},
				filterTarget:function(card,player,target){
					return target.countCards('he')>0&&target!=player;
				},
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					'step 0'
					player.choosePlayerCard('hej',target,true);
					'step 1'
					if(result.bool&&result.links&&result.links.length){
						player.addToExpansion(result.links,target,'give').gaintag.add('yinling');
					}
				},
				ai:{
					order:10.1,
					expose:0.1,
					result:{
						target:function(player,target){
							if(target.hasSkill('tuntian')) return 0;
							var es=target.getCards('e');
							var nh=target.countCards('h');
							var noe=(es.length==0||target.hasSkillTag('noe'));
							var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
							var noh=(nh==0||target.hasSkillTag('noh'));
							if(noh&&noe) return 0;
							if(noh&&noe2) return 0.01;
							if(get.attitude(player,target)<=0) return (target.countCards('he'))?-1.5:1.5;
							var js=target.getCards('j');
							if(js.length){
								var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
								if(jj.name=='guohe') return 3;
								if(js.length==1&&get.effect(target,jj,target,player)>=0){
									return -1.5;
								}
								return 2;
							}
							return -1.5;
						},
					},
				}
			},
			fenyong:{
				audio:2,
				trigger:{player:'damageEnd'},
				content:function(){
					player.addTempSkill('fenyong2');
				}
			},
			fenyong2:{
				audio:'fenyong',
				mark:true,
				intro:{
					content:'防止你受到的所有伤害'
				},
				trigger:{player:'damageBegin3'},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')) return [0,0];
						}
					},
				}
			},
			xuehen:{
				audio:2,
				trigger:{global:'phaseJieshuBegin'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return player.hasSkill('fenyong2')&&event.player.isIn();
				},
				content:function(){
					'step 0'
					player.removeSkill('fenyong2');
					player.chooseControl('弃牌','出杀',function(){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(player,trigger.player)<0){
							var he=trigger.player.countCards('he');
							if(he<2) return '出杀';
							if(player.maxHp-player.hp>=2&&he<=3){
								return '弃牌';
							}
							if(player.maxHp-player.hp>=3&&he<=5){
								return '弃牌';
							}
							if(player.maxHp-player.hp>3){
								return '弃牌';
							}
							return '出杀';
						}
						return '出杀';
					}).set('prompt','弃置'+get.translation(trigger.player)+get.cnNumber(player.maxHp-player.hp)+'张牌，或对任意一名角色使用一张杀');
					'step 1'
					if(result.control=='弃牌'){
						player.line(trigger.player,'green');
						if(player.hp<player.maxHp&&trigger.player.countCards('he')){
							player.discardPlayerCard(trigger.player,true,'he',player.maxHp-player.hp);
						}
					}
					else{
						player.chooseUseTarget({name:'sha'},true,false,'nodistance');
					}
				}
			},
			mouduan:{
				audio:1,
				init2:function(player){
					game.broadcastAll(function(player){
						player._mouduan_mark=player.mark('武',{
							content:'拥有技能【激昂】、【谦逊】'
						});
					},player);
					player.addAdditionalSkill('mouduan',['jiang','qianxun']);
				},
				onremove:function(player){
					game.broadcastAll(function(player){
						if(player._mouduan_mark){
							player._mouduan_mark.delete();
							delete player._mouduan_mark;
						}
					},player);
					player.removeAdditionalSkills('mouduan');
				},
				trigger:{player:'loseEnd'},
				forced:true,
				locked:false,
				filter:function(event,player){
					return player._mouduan_mark&&player._mouduan_mark.name=='武'&&player.countCards('h')<=2;
				},
				content:function(){
					game.broadcastAll(function(player){
						if(!player._mouduan_mark) return;
						player._mouduan_mark.name='文';
						player._mouduan_mark.skill='文';
						player._mouduan_mark.firstChild.innerHTML='文';
						player._mouduan_mark.info.content='拥有技能【英姿】、【克己】';
					},player);
					player.addAdditionalSkills('mouduan',['yingzi','keji']);
				},
				group:'mouduan2'
			},
			mouduan2:{
				audio:1,
				trigger:{global:'phaseZhunbeiBegin'},
				//priority:5,
				filter:function(event,player){
					return player._mouduan_mark&&player._mouduan_mark.name=='文'&&player.countCards('h')>2;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseToDiscard('he','谋断：是否弃置一张牌将标记变为“武”？').ai=function(){
						return -1;
					}
					'step 1'
					if(result.bool&&player.countCards('h')>2){
						game.broadcastAll(function(player){
							if(!player._mouduan_mark) return;
							player._mouduan_mark.name='武';
							player._mouduan_mark.skill='武';
							player._mouduan_mark.firstChild.innerHTML='武';
							player._mouduan_mark.info.content='拥有技能【激昂】、【谦逊】';
						},player);
						player.addAdditionalSkills('mouduan',['jiang','qianxun']);
					}
				}
			},
			tanhu:{
				audio:1,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool){
						target.addTempSkill('tanhu2');
					}
				},
				ai:{
					result:{
						target:function(player,target){
							var hs=player.getCards('h');
							if(hs.length<3) return 0;
							var bool=false;
							for(var i=0;i<hs.length;i++){
								if(hs[i].number>=9&&get.value(hs[i])<7){
									bool=true;
									break;
								}
							}
							if(!bool) return 0;
							return -1;
						}
					},
					order:9,
				},
				group:'tanhu3'
			},
			tanhu2:{
				mark:true,
				intro:{
					content:'已成为探虎目标'
				}
			},
			tanhu3:{
				mod:{
					globalFrom:function(from,to){
						if(to.hasSkill('tanhu2')) return -Infinity;
					},
					wuxieRespondable:function(card,player,target){
						if(target&&target.hasSkill('tanhu2')) return false;
					}
				}
			},
			jie:{
				audio:1,
				trigger:{source:'damageBegin1'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
				},
				forced:true,
				content:function(){
					trigger.num++;
				}
			},
			dahe:{
				audio:true,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target).set('preserve','win');
					'step 1'
					if(result.bool&&result.target){
						event.type=true;
						event.card=result.target;
						player.chooseTarget('将'+get.translation(result.target)+'交给一名角色',function(card,player,target){
							return target.hp<=player.hp;
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.du) return -att;
							return att;
						}).set('du',event.card.name=='du');
						target.addTempSkill('dahe2');
					}
					else{
						event.type=false;
						if(player.countCards('h')){
							player.showHandcards();
							player.chooseToDiscard('h',true);
						}
					}
					'step 2'
					if(event.type){
						if(result.bool){
							player.line(result.targets,'green');
							result.targets[0].gain(event.card,'gain2');
						}
					}
				},
				ai:{
					result:{
						target:function(player,target){
							var hs=player.getCards('h');
							if(hs.length<3) return 0;
							var bool=false;
							for(var i=0;i<hs.length;i++){
								if(hs[i].number>=9&&get.value(hs[i])<7){
									bool=true;
									break;
								}
							}
							if(!bool) return 0;
							if(player.canUse('sha',target)&&(player.countCards('h','sha'))){
								return -2;
							}
							return -0.5;
						}
					},
					order:9,
				}
			},
			dahe2:{
				mark:true,
				intro:{
					content:'非红桃闪无效'
				},
				mod:{
					cardRespondable:function(card,player){
						if(card.name=='shan'){
							const suit=get.suit(card);
							if(suit!='heart'&&suit!='unsure') return false;
						}
					},
					cardEnabled:function(card,player){
						if(card.name=='shan'){
							const suit=get.suit(card);
							if(suit!='heart'&&suit!='unsure') return false;
						}
					},
				}
			},
			shichou:{
				//audio:1,
				skillAnimation:true,
				animationColor:'orange',
				unique:true,
				limited:true,
				mark:false,
				trigger:{player:'phaseZhunbeiBegin'},
				zhuSkill:true,
				direct:true,
				filter:function(event,player){
					if(!player.hasZhuSkill('shichou'))return false;
					if(player.countCards('he')<2) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					});
				},
				init:function(player){
					if(player.hasZhuSkill('shichou')){
						player.markSkill('shichou');
						player.storage.shichou=false;
					}
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						prompt:get.prompt2('shichou'),
						selectCard:2,
						filterTarget:function(card,player,target){
							return target.group=='shu'&&target!=player;
						},
						filterCard:true,
						position:'he',
						ai1:function(card){
							return 7-get.value(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							if(player.hasUnknown()) return 0;
							var att=get.attitude(player,target);
							if(att<=0){
								if(target.hp==1) return (10-att)/2;
								return 10-att;
							}
							else{
								if(target.hp==1) return 0;
								return (10-att)/4;
							}
						},
					});
					"step 1"
					if(!result.bool) return;
					var target=result.targets[0];
					var cards=result.cards;
					player.storage.shichou=true;
					player.logSkill('shichou',target);
					player.awakenSkill('shichou');
					player.give(cards,target);
					player.storage.shichou_target=target;
					player.addSkill('shichou2');
					target.markSkillCharacter('shichou',player,'誓仇','代替'+get.translation(player)+'承受伤害直到首次进入濒死状态');
				},
				intro:{
					content:'limited'
				},
			},
			shichou2:{
				group:'shichou3',
				trigger:{player:'damageBegin3'},
				forced:true,
				popup:false,
				content:function(){
					trigger.player=player.storage.shichou_target;
					trigger.shichou4=true;
					trigger.player.addSkill('shichou4');
					player.logSkill('shichou2',player.storage.shichou_target);
					game.delay(0.5);
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(get.attitude(player,target)>0) return [0,0];
								var eff=get.damageEffect(target.storage.shichou_target,player,target);
								if(eff>0){
									return [0,1];
								}
								else if(eff<0){
									return [0,-2];
								}
								else{
									return [0,0];
								}
							}
						}
					}
				}
			},
			shichou3:{
				trigger:{global:['dying','dieBegin']},
				forced:true,
				popup:false,
				//priority:10,
				filter:function(event,player){
					return event.player==player.storage.shichou_target;
				},
				content:function(){
					trigger.player.unmarkSkill('shichou');
					delete player.storage.shichou_target;
					player.removeSkill('shichou2');
				}
			},
			shichou4:{
				trigger:{player:['damageAfter','damageCancelled']},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					if(!trigger.shichou4) return;
					if(event.triggername=='damageAfter'&&trigger.num){
						player.draw(trigger.num);
					}
					player.removeSkill('shichou4');
				}
			},
			zhaolie:{
				trigger:{player:'phaseDrawBegin2'},
				direct:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('zhaolie'),function(card,player,target){
						return target!=player&&player.inRange(target);
					}).set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0) return 0;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						trigger.num--;
						player.storage.zhaolie=result.targets[0];
						player.logSkill('zhaolie',result.targets);
						player.addTempSkill('zhaolie2','phaseDrawAfter');
					}
				}
			},
			zhaolie2:{
				trigger:{player:'phaseDrawEnd'},
				forced:true,
				popup:false,
				content:function(){
					'step 0'
					event.cards=get.cards(3);
					player.showCards(event.cards);
					'step 1'
					event.basic=[];
					event.nonbasic=[];
					event.todis=[];
					for(var i=0;i<event.cards.length;i++){
						if(get.type(event.cards[i])=='basic'){
							if(event.cards[i].name=='tao'){
								event.todis.push(event.cards[i]);
							}
							else{
								event.basic.push(event.cards[i]);
							}
						}
						else{
							event.todis.push(event.cards[i]);
							event.nonbasic.push(event.cards[i]);
						}
					}
					game.cardsDiscard(event.todis);
					var num=event.nonbasic.length;
					if(num==0){
						if(event.basic.length==0){
							event.finish();
							return;
						}
						player.storage.zhaolie.chooseTarget(function(card,player,target){
							var source=_status.event.source;
							return target==source||target==source.storage.zhaolie;
						},true,'选择一个目标获得'+get.translation(event.basic)).set('ai',function(target){
							return get.attitude(_status.event.player,target);
						}).set('source',player);
					}
					else{
						player.storage.zhaolie.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+
						'张牌并令'+get.translation(player)+'拿牌，或受到'+get.cnNumber(num)+'点伤害并拿牌').set('ai',function(card){
							var player=_status.event.player;
							switch(_status.event.num){
								case 1:return player.hp>1?0:7-get.value(card);
								case 2:return 8-get.value(card);
								case 3:return 10-get.value(card);
								default:return 0;
							}
						}).set('num',num);
					}
					'step 2'
					var num=event.nonbasic.length;
					var undone=false;
					if(num==0){
						if(event.basic.length){
							result.targets[0].gain(event.basic,'gain2','log');
						}
					}
					else{
						if(result.bool){
							if(event.basic.length){
								player.gain(event.basic,'gain2','log');
							}
						}
						else{
							player.storage.zhaolie.damage(num);
							if(event.basic.length){
								undone=true;
							}
						}
					}
					if(!undone){
						delete player.storage.zhaolie;
						event.finish();
					}
					'step 3'
					if(player.storage.zhaolie.isIn()){
						player.storage.zhaolie.gain(event.basic,'gain2','log');
					}
					else{
						game.cardsDiscard(event.basic);
					}
					delete player.storage.zhaolie;
				}
			},
			fulu:{
				trigger:{player:'useCard1'},
				filter:function(event,player){
					if(event.card.name=='sha'&&!game.hasNature(event.card)) return true;
				},
				audio:true,
				check:function(event,player){
					var eff=0;
					for(var i=0;i<event.targets.length;i++){
						var target=event.targets[i];
						var eff1=get.damageEffect(target,player,player);
						var eff2=get.damageEffect(target,player,player,'thunder');
						eff+=eff2;
						eff-=eff1;
					}
					return eff>=0;
				},
				content:function(){
					game.setNature(trigger.card,'thunder');
					if(get.itemtype(trigger.card)=='card'){
						var next=game.createEvent('fulu_clear');
						next.card=trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function(){
							game.setNature(card,[]);
						});
					}
				}
			},
			fuji:{
				trigger:{global:'damageBegin1'},
				filter:function(event){
					return event.source&&event.source.isIn()&&event.hasNature('thunder');
				},
				check:function(event,player){
					return get.attitude(player,event.source)>0&&get.attitude(player,event.player)<0;
				},
				prompt:function(event){
					return get.translation(event.source)+'即将对'+get.translation(event.player)+'造成伤害，'+get.prompt('fuji');
				},
				logTarget:'source',
				content:function(){
					trigger.source.judge().callback=lib.skill.fuji.callback;
				},
				callback:function(){
					var evt=event.getParent(2);
					if(event.judgeResult.color=='black'){
						//game.cardsDiscard(card);
						evt._trigger.num++;
					}
					else{
						evt._trigger.source.gain(card,'gain2');
					}
				},
			},
		},
		characterReplace:{},
		dynamicTranslate:{
		},
		translate:{
			sp_gongsunzan:'SP公孙瓒',
			sp_gongsunzan_prefix:'SP',
			sp_simazhao:'SP司马昭',
			sp_simazhao_prefix:'SP',
			sp_wangyuanji:'SP王元姬',
			sp_wangyuanji_prefix:'SP',
			sp_xinxianying:'SP辛宪英',
			sp_xinxianying_prefix:'SP',
			sp_liuxie:'SP刘协',
			sp_liuxie_prefix:'SP',
			spyicong_info:'弃牌阶段结束时，你可以将任意张牌置于你的武将牌上，称为「扈」。每有一张「扈」，其他角色与你计算距离时便+1。',
			spyicong:'义从',
			sptuji:'突骑',
			sptuji_info:'准备开始时，你将所有「扈」置于弃牌堆，然后你本回合内计算与其他角色的距离时-X。若X不大于1，你摸一张牌。（X为以此法进入弃牌堆的「扈」的数量）',
			sphuangen:'皇恩',
			sphuangen_info:'一名角色使用锦囊牌指定目标时，若此牌的目标数大于1，则你可以令此牌对其中的至多X个目标无效，然后摸一张牌。（X为你的体力值）',
			sphantong:'汉统',
			sphantong_gain:'汉统',
			sphantong_info:'当你的牌因弃牌阶段的游戏规则要求而进入弃牌堆后，你可以将这些牌置于你的武将牌上，称为「诏」。一名角色的回合开始时，你可以弃置一张「诏」并获得〖护驾〗/〖激将〗/〖救援〗/〖血裔〗中的一个技能直至当前回合结束。',
			spzhaoxin:'昭心',
			spzhaoxin_info:'摸牌阶段结束时，你可以展示所有手牌，然后视为使用一张【杀】。',
			splanggu:'狼顾',
			splanggu_rewrite:'狼顾',
			splanggu_info:'当你受到有来源的伤害后，你可以进行判定（此判定结果生效前，你可以打出一张手牌替换判定牌）。然后你可以观看伤害来源的手牌并弃置其中的任意张与判定结果花色相同的牌。',
			spfuluan:'扶乱',
			spfuluan_info:'出牌阶段限一次，你可以弃置三张花色相同的牌并选择攻击范围内的一名角色。若如此做，该角色翻面且你不能使用【杀】直到回合结束。',
			spshude:'淑德',
			spshude_info:'结束阶段开始时，你可以将手牌补至体力上限。',
			spmingjian:'明鉴',
			spmingjian_info:'一名角色的回合开始时，你可以选择一项：①弃置一张牌，然后其跳过本回合的判定阶段。②将一张手牌置于其武将牌上，然后其本回合内进行判定时不触发「判定结果生效前」的时机，且其回合结束时将此牌置入弃牌堆。',
			spyinzhi:'隐智',
			spyinzhi_info:'当你受到1点伤害后，你可以展示牌堆顶的两张牌。若其中有黑桃牌，则你可以进行至多X次「令一名角色获得伤害来源的一张手牌」的步骤。然后获得其余的牌。（X为其中黑桃牌的数量）',
			yj_caoang:'用间曹昂',
			yj_caoang_prefix:'用间',
			yjxuepin:'血拼',
			yjxuepin_info:'出牌阶段限一次，你可以选择攻击范围内的一名角色并失去1点体力。你弃置其两张牌。若这两张牌类型相同，你回复1点体力。',
			ns_chendao:'用间陈到',
			ns_chendao_prefix:'用间',
			nsjianglie:'将烈',
			nsjianglie_info:'当你使用【杀】指定目标后，你可以令其展示所有手牌，然后弃置其中一种颜色的牌。',
			ns_jiaxu:'★贾诩',
			ns_jiaxu_prefix:'★',
			nsyice:'遗策',
			nsyice_info:'锁定技，当你使用/打出/弃置的牌进入弃牌堆后，你将这些牌以任意顺序置于你的武将牌上，称为“策”。若这些“策”中有点数相同的牌，则你获得这两张牌中的所有牌，将这两张牌置于牌堆两端。若场上没有处于濒死状态的角色，则你对一名角色造成1点伤害。',
			ns_lijue:'SP李傕',
			ns_lijue_prefix:'SP',
			ns_zhangji:'SP张济',
			ns_zhangji_prefix:'SP',
			nsfeixiong:'飞熊',
			nsfeixiong_info:'出牌阶段开始时，你可以和一名其他角色拼点。赢的角色对没赢的角色造成1点伤害。',
			nscesuan:'策算',
			nscesuan_info:'锁定技，当你受到伤害时，你防止此伤害并失去1点体力上限。若你因以此法失去体力上限导致体力值减少，则你摸一张牌。',
			nslulve:'掳掠',
			nslulve_info:'出牌阶段限一次，你可以弃置X张牌并选择一名装备区内有牌的其他角色，然后对其造成1点伤害（X为其装备区内的牌数）。',
			ns_fanchou:'SP樊稠',
			ns_fanchou_prefix:'SP',
			nsyangwu:'扬武',
			nsyangwu_info:'出牌阶段限一次，你可以弃置一张♥手牌并选择一名手牌数大于你的其他角色。你观看其手牌并获得其中的X张牌（X为其与你手牌数之差的一半且向上取整）。',
			jsp_liubei:'★刘备',
			jsp_liubei_prefix:'★',
			jsprende:'仁德',
			jsprende_info:'出牌阶段，你可以将至少一张手牌交给其他角色；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌。',
			ns_caoanmin:'战役篇曹安民',
			ns_caoanmin_prefix:'战役篇',
			nskuishe:'窥舍',
			nskuishe_info:'出牌阶段限一次，你可以选择一名其他角色A的一张牌，并将此牌交给不为A的一名角色。然后A可以对你使用一张【杀】。',
			sp_xiahoushi:"SP夏侯氏",
			sp_xiahoushi_prefix:'SP',
			xinfu_yanyu:"燕语",
			xinfu_yanyu_info:"一名角色的出牌阶段开始时，你可以弃置一张牌。若如此做，则该出牌阶段内限三次，当一张与你弃置的牌类别相同的其他牌进入弃牌堆后，你可令任意一名角色获得此牌。",
			xinfu_yanyu2:"燕语",
			xinfu_xiaode:"孝德",
			xinfu_xiaode_info:"其他角色死亡后，你可以声明该角色武将牌上的一个技能（主公技、觉醒技、隐匿技、使命技除外）。若如此做，你获得此技能且不能再发动〖孝德〗直到你的回合结束。",
			jsp_zhaoyun:'J.SP赵云',
			jsp_zhaoyun_prefix:'J.SP',
			chixin:'赤心',
			chixin1:'赤心',
			chixin2:'赤心',
			chixin_info:'你可以将♦牌当作【杀】或【闪】使用或打出。出牌阶段，你对在你攻击范围内且本回合内未成为过你使用的【杀】的目标的角色使用的【杀】没有次数限制。',
			suiren:'随仁',
			suiren_info:'限定技，准备阶段开始时，你可以失去技能〖义从〗，然后加1点体力上限并回复1点体力，然后令一名角色摸三张牌。',
			huangjinleishi:'黄巾雷使',
			fulu:'符箓',
			fulu_info:'当你声明使用普通【杀】后，你可以将此【杀】改为雷【杀】。',
			fuji:'助祭',
			fuji_info:'当一名角色造成雷属性伤害时，你可以令其进行判定，若结果为黑色，此伤害+1；若结果为红色，该角色获得判定牌。',
			sp_pangtong:'☆SP庞统',
			sp_pangtong_prefix:'☆SP',
			manjuan:'漫卷',
			manjuan_info:'其他角色的牌因弃置而进入弃牌堆后，你可以弃置一张花色与之不同的牌，然后获得此牌。',
			xinmanjuan:'漫卷',
			xinmanjuan_info:'锁定技，当你不因〖漫卷〗或〖醉乡〗而得到牌时，你将此牌置入弃牌堆。然后若此时处于你的回合内，则你可以从弃牌堆中选择获得一张与此牌点数相同的其他牌。',
			zuixiang:'醉乡',
			zuixiang2:'醉乡',
			zuixiang_info:'限定技。准备阶段开始时，你可以展示牌堆顶的三张牌并置于你的武将牌上。你不能使用或打出与该些牌同类的牌，所有同类牌对你无效。之后的每个准备阶段，你须重复展示一次，直到这些牌中任意两张点数相同。然后，你获得这些牌。',
			sp_daqiao:'☆SP大乔',
			sp_daqiao_prefix:'☆SP',
			yanxiao:'言笑',
			yanxiao_info:'出牌阶段，你可以将一张♦牌置于一名角色的判定区内。判定区内有〖言笑〗牌的角色下个判定阶段开始时，其获得判定区里的所有牌。',
			anxian:'安娴',
			anxian_info:'当你使用【杀】对目标角色造成伤害时，你可以防止此伤害，令其弃置一张手牌，然后你摸一张牌；当你成为【杀】的目标后，你可以弃置一张手牌，令此【杀】对你无效，然后此【杀】的使用者摸一张牌。',
			sp_ganning:'☆SP甘宁',
			sp_ganning_prefix:'☆SP',
			yinling:'银铃',
			yinling_bg:'锦',
			yinling_info:'出牌阶段，若你的“锦”小于四张，你可以弃置一张黑色牌并指定一名其他角色。若如此做，你将其的一张牌置于你的武将牌上，称为“锦”。',
			junwei:'军威',
			junwei2:'军威',
			junwei_info:'结束阶段开始时，你可以移去三张“锦”。若如此做，你须指定一名角色并令其选择一项：1.展示一张【闪】，然后你将此【闪】交给一名其他角色。2.该角色失去1点体力，然后你将其装备区内的一张牌移出游戏。该角色的回合结束后，将以此法移出游戏的装备牌移回原处。',
			sp_xiahoudun:'☆SP夏侯惇',
			sp_xiahoudun_prefix:'☆SP',
			fenyong:'愤勇',
			fenyong2:'愤勇',
			fenyong2_bg:'勇',
			fenyong_info:'每当你受到一次伤害后，你可以获得一枚「愤勇」标记；当你拥有「愤勇」标记时，防止你受到的所有伤害。',
			xuehen:'雪恨',
			xuehen_info:'每个角色的结束阶段开始时，若你有愤勇标记，你弃置之，然后选择一项：1.弃置当前回合角色X张牌（X为你已损失的体力值）；2.视为对一名任意角色使用一张【杀】。',
			sp_lvmeng:'☆SP吕蒙',
			sp_lvmeng_prefix:'☆SP',
			tanhu:'探虎',
			tanhu2:'探虎',
			tanhu3:'探虎',
			tanhu_info:'出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你获得以下效果直到回合结束：你与该角色的距离为1，你对该角色使用的普通锦囊牌不能被【无懈可击】响应。',
			mouduan:'谋断',
			mouduan_info:'游戏开始时，你获得标记“武”并获得技能〖激昂〗和〖谦逊〗。当你失去手牌后，若手牌数不大于2，你须将你的标记变为“文”，将这两项技能改为〖英姿〗和〖克己〗。一名角色的回合开始前，你可弃一张牌将标记翻回。',
			sp_zhangfei:'☆SP张飞',
			sp_zhangfei_prefix:'☆SP',
			jie:'嫉恶',
			jie_info:'锁定技，当你使用红色【杀】造成伤害时，此伤害+1。',
			dahe:'大喝',
			dahe2:'大喝',
			dahe2_bg:'喝',
			dahe_info:'出牌阶段限一次，你可以与一名其他角色拼点。若你赢，该角色不能使用或打出不为♥花色的【闪】直到回合结束，且你可将该角色拼点的牌交给场上一名体力不多于你的角色。若你没赢，你须展示手牌并弃置其中的一张。',
			sp_liubei:'☆SP刘备',
			sp_liubei_prefix:'☆SP',
			zhaolie:'昭烈',
			zhaolie_info:'摸牌阶段摸牌时，你可以少摸一张牌并指定攻击范围内的一名角色。你展示牌堆顶的三张牌，将其中的非基本牌和【桃】置于弃牌堆，然后该角色选择一项：1.你对其造成X点伤害，然后其获得这些基本牌；2.其弃置X张牌，然后你获得这些基本牌。（X为其中非基本牌的数量）',
			shichou:'誓仇',
			shichou2:'誓仇',
			shichou_info:'主公技，限定技，准备阶段，你可指定一名蜀势力角色并交给其两张牌。本局游戏中，当你受到伤害时，改为该角色受到等量的伤害并摸等量的牌，直至该角色第一次进入濒死状态。',
			longyufei:'龙羽飞',
			longyi:'龙裔',
			longyi_info:'你可将所有手牌当做任意基本牌使用或打出。若此牌对应的实体牌中：有锦囊牌，你摸一张牌；有装备牌，此牌不可被响应。',
			zhenjue:'阵绝',
			zhenjue_info:'一名角色的结束阶段开始时，若你没有手牌，则你可以令其选择一项：①弃置一张牌。②令你摸一张牌。',
			//用间
			yj_caocao:'用间曹操',
			yj_caocao_prefix:'用间',
			yjxiandao:'献刀',
			yjxiandao_info:'每回合限一次。当你赠予其他角色一张牌后，你令其不能使用或打出与本次赠予移动的牌A花色相同的牌直到回合结束。然后若牌A：为锦囊牌，你摸两张牌。为装备牌，你获得其一张不为A的牌。为武器牌，你对其造成1点伤害。',
			yjsancai:'散财',
			yjsancai_info:'出牌阶段限一次，你可以展示所有手牌。若这些牌的类别均相同，则你可以赠予一名其他角色一张手牌。',
			yjyibing:'义兵',
			yjyibing_info:'当你不因赠予且不因〖义兵〗的嵌套结算而于摸牌阶段外得到牌时，你可以将此次得到的所有牌当做【杀】使用（无距离限制且不计入使用次数）。',
			yj_caohong:'用间曹洪',
			yj_caohong_prefix:'用间',
			yjlifeng:'厉锋',
			yjlifeng_info:'①出牌阶段限一次。你可以获得弃牌堆里的一张装备牌。②你发动〖赠予〗可以选择手牌区里的装备牌或装备区里的牌。',
			yj_zhangfei:'用间张飞',
			yj_zhangfei_prefix:'用间',
			yjmangji:'莽击',
			yjmangji_info:'锁定技。当你装备区里的牌数或体力值变化后，若你的体力值不小于1，你弃置一张手牌并视为使用一张【杀】。',
			yongjian_ganning:'用间甘宁',
			yongjian_ganning_prefix:'用间',
			yjjielve:'劫掠',
			yjjielve_info:'你可以将两张颜色相同的牌当【趁火打劫】使用，若你以此法造成伤害，此技能于本回合失效。',
			//什么？孙鲁班？谁会做这种离谱的东西
			yj_dongzhuo:'用间董卓',
			yj_dongzhuo_prefix:'用间',
			yjtuicheng:'推诚',
			yjtuicheng_info:'你可以失去1点体力并视为使用一张【推心置腹】。',
			yjyaoling:'耀令',
			yjyaoling_info:'出牌阶段结束时，你可以减1点体力上限并选择一名其他角色A和一名角色B，你令A选择一项：1.对B使用一张【杀】；2.你弃置其一张牌。',
			yjshicha:'失察',
			yjshicha_info:'锁定技。弃牌阶段开始时，若你本回合未发动过〖推诚〗或〖耀令〗之一，你本回合的手牌上限为1。',
			yjyongquan:'拥权',
			yjyongquan_info:'主公技。结束阶段，其他群势力角色依次可以交给你一张牌。',
			yj_liru:'用间李儒',
			yj_liru_prefix:'用间',
			yjdumou:'毒谋',
			yjdumou_info:'锁定技。你的回合内，其他角色的黑色手牌均视为【毒】，你的【毒】均视为【过河拆桥】。',
			yjweiquan:'威权',
			yjweiquan_info:'限定技。出牌阶段，你可以选择至多X名角色（X为游戏轮数），然后选择一名角色A，这些角色依次将一张手牌交给A。然后若A的手牌数大于体力值，其插入执行一个仅有弃牌阶段的回合。',
			yjrenwang:'人望',
			yjrenwang_info:'出牌阶段限一次。你可以选择弃牌堆中的一张黑色基本牌，令一名角色获得之。',
			yj_xuyou:'用间许攸',
			yj_xuyou_prefix:'用间',
			yjshicai:'恃才',
			yjshicai_info:'①回合内，牌堆顶的一张牌对你可见。②出牌阶段限一次。你可以弃置一张牌，展示并获得牌堆顶的一张牌。当此牌离开你的手牌区后，重置〖恃才②〗。',
			yjchenggong:'逞功',
			yjchenggong_info:'当一名角色使用牌指定第一个目标后，若此牌目标数大于1，你可以令其摸一张牌。',
			yjzezhu:'择主',
			yjzezhu_info:'出牌阶段限一次。你可以获得主公区域内的一张牌，然后交给其一张牌。',
			yj_jiaxu:'用间贾诩',
			yj_jiaxu_prefix:'用间',
			yjzhenlve:'缜略',
			yjzhenlve_info:'锁定技。①你使用的普通锦囊牌不能被响应。②你不能成为延时锦囊牌的目标。',
			yjjianshu:'间书',
			yjjianshu_info:'出牌阶段限一次。你可以将一张手牌交给一名其他角色，令其与你选择的另一名其他角色拼点，没赢的角色失去1点体力。',
			yjyongdi:'拥嫡',
			yjyongdi_info:'限定技。准备阶段，你可以令一名男性角色加1点体力上限并回复1点体力，然后若其武将牌上有主公技且其不为主公，其获得此主公技。',
			yj_zhugedan:'用间诸葛诞',
			yj_zhugedan_prefix:'用间',
			yj_zhenji:'用间甄宓',
			yj_zhenji_prefix:'用间',
			yjluoshen:'洛神',
			yjluoshen_info:'准备阶段，你可以判定并获得判定牌，且可重复此流程直到结果的颜色不同。',
			//线下E系列 一战成名 战役篇官盗
			shen_jiaxu:'战役篇神贾诩',
			shen_jiaxu_prefix:'战役篇神',
			zybishi:'避世',
			zybishi_info:'当你成为【杀】的目标后，你可以令使用者摸一张牌，然后令此【杀】无效。',
			zyjianbing:'谏兵',
			zyjianbing_info:'当一名其他角色受到执行【杀】的效果而受到伤害时，你可以获得其一张牌。若此牌花色为♥，其回复1点体力。',
			pe_wangyun:'战役篇王允',
			pe_wangyun_prefix:'战役篇',
			zylianji:'连计',
			zylianji_info:'出牌阶段结束时，若你于此阶段使用牌的类别数达到：1，你可以令一名角色摸一张牌；2，你可以回复1点体力；3，你可以跳过本回合剩余阶段，然后令一名其他角色执行一个仅有你于此回合未执行过的阶段的回合。',
			zymoucheng:'谋逞',
			zymoucheng_info:'每回合限一次。你可以将一张黑色牌当【借刀杀人】使用。',
			pe_zhonghui:'战役篇钟会',
			pe_zhonghui_prefix:'战役篇',
			zyquanji:'权计',
			zyquanji_info:'①当你受到伤害后或使用牌对唯一目标造成伤害后，你可以摸一张牌并将一张牌置于武将上，称为“权”。②你的手牌上限+X（X为“权”数）。',
			zypaiyi:'排异',
			zypaiyi_backup:'排异',
			zypaiyi_info:'出牌阶段限一次。你可以移去一张“权”并令一名角色摸X张牌（X为“权”数，且至多为7），然后若其手牌数大于你，你对其造成1点伤害。',
			pe_mengda:'战役篇孟达',
			pe_mengda_prefix:'战役篇',
			qiuan:'求安',
			qiuan_info:'当你受到伤害后，若此伤害的渠道有对应的实体牌且你的武将牌上没有“函”，则你可以防止此伤害并将这些牌置于你的武将牌上，称为“函”。',
			liangfan:'量反',
			liangfan2:'量反',
			liangfan_info:'锁定技，准备阶段开始时，若你的武将牌上有“函”，则你获得这些牌，然后失去1点体力。当你于此回合内因使用实体牌中包含“函”的牌且执行这些牌的效果而造成伤害后，你可以获得目标角色的一张牌。',
			pe_sunchen:'战役篇孙綝',
			pe_sunchen_prefix:'战役篇',
			zyshilu:'嗜戮',
			zyshilu_info:'①一名角色死亡后，你可以将其武将牌置于你的武将牌上，称为“戮”，若杀死其的角色是你，你将一张武将牌堆里的牌置为“戮”。②回合开始时，你可以弃置至多X张牌，然后摸等量的牌（X为“戮”数）。',
			zyxiongnve:'凶虐',
			zyxiongnve_info:'①出牌阶段开始时，你可以将一张“戮”置入武将牌堆并选择一项直到回合结束：1.当你造成伤害时，此伤害+1；2.当你对其他角色造成伤害时，获得其一张牌；3.你使用牌无次数限制。②出牌阶段结束时，你可以将两张“戮”置入武将牌堆，然后当你于下回合开始前受到其他角色造成的伤害时，此伤害-1。',
			pe_wenqin:'战役篇文钦',
			pe_wenqin_prefix:'战役篇',
			gzjinfa:'矜伐',
			gzjinfa_info:'出牌阶段限一次。你可以弃置一张牌，令一名其他角色选择一项：1.令你获得其一张牌；2.交给你一张装备牌，若此牌花色为♠，其视为对你使用一张【杀】。',
			zyshangyi:'尚义',
			zyshangyi_info:'出牌阶段限一次。你可以令一名其他角色观看你的手牌，然后你观看其手牌并可以弃置其中一张牌。',
			zymingshi:'名士',
			zymingshi_info:'锁定技。若你有空置的防具栏，属性【杀】对你无效。',
			gzsuishi:'随势',
			gzsuishi2:'随势',
			gzsuishi_info:'锁定技，其他角色进入濒死状态时，若伤害来源与你势力相同，你摸一张牌；其他角色死亡时，若其与你势力相同，你失去1点体力。',
			//线下S系列
			ps_guanyu:'★关羽',
			ps_guanyu_prefix:'★',
			pszhonghun:'忠魂',
			pszhonghun_info:'当你使用或打出红色牌时，你可以亮出牌堆顶的一张牌。若此牌为红色，你获得之。',
			ps2070_guojia:'★郭嘉',
			ps2070_guojia_prefix:'★',
			psquanmou:'全谋',
			psquanmou_info:'当其他角色使用锦囊牌结算结束后，若你是此牌目标，你可以弃置一张与此牌颜色相同的手牌并获得之。',
			ps1059_guojia:'★郭嘉',
			ps1059_guojia_prefix:'★',
			psqizuo:'奇佐',
			psqizuo_info:'当你攻击范围内的角色造成或受到伤害时，你可以弃置一张牌并判定，若此牌颜色与结果相同，你可以令此伤害+1或-1。',
			ps2063_zhaoyun:'★赵云',
			ps2063_zhaoyun_prefix:'★',
			psqijin:'七进',
			psqijin_info:'摸牌阶段，你可以改为亮出牌堆顶的七张牌，并获得其中一种颜色的所有牌。',
			psqichu:'七出',
			psqichu_info:'每回合限一次。当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌。若其中有此牌，你可以使用或打出之。',
			pslongxin:'龙心',
			pslongxin_info:'判定阶段开始时，你可以弃置一张装备牌，然后弃置你判定区里的一张牌。',
			ps2080_zhouyu:'★周瑜',
			ps2080_zhouyu_prefix:'★',
			psshiyin:'识音',
			psshiyin_info:'①游戏开始时，你可以将一张手牌置于武将牌上，称为“杂音”牌。②出牌阶段开始时，你可以用一张手牌替换“杂音”牌。',
			psquwu:'曲误',
			psquwu_info:'锁定技。你不能使用或打出与“杂音”牌花色相同的牌，且这些牌对你无效。',
			psliaozou:'聊奏',
			psliaozou_info:'出牌阶段，你可以展示所有手牌，若其中没有与“杂音”牌花色相同的牌，你摸一张牌。',
			ps1062_zhouyu:'★周瑜',
			ps1062_zhouyu_prefix:'★',
			psoldshiyin:'识音',
			psoldshiyin_info:'当你于回合内得到牌后，你可以展示之，然后根据你展示的牌包含的花色数令你本回合使用的下一张牌获得对应效果：不小于1，不能被响应；不小于2，造成的伤害+1；不小于3，使用时摸一张牌。',
			ps_caozhi:'★曹植',
			ps_caozhi_prefix:'★',
			psliushang:'流殇',
			psliushang_info:'锁定技。①摸牌阶段，你改为摸X+1张牌，然后依次将一张手牌置于所有其他角色的武将牌上，称为“流殇”牌（X为场上角色数且至少为3）。②其他角色的准备阶段，其选择一项：1.获得其“流殇”牌，且当其于本回合对你造成伤害时，防止此伤害；2.将其“流殇”牌置入弃牌堆。',
			psqibu:'七步',
			psqibu_info:'限定技。当你进入濒死状态时，你可以亮出牌堆顶的七张牌，回复等同于其中♥牌数的体力，并获得所有♣牌。',
			ps_jin_simayi:'★司马懿',
			ps_jin_simayi_prefix:'★',
			psquanyi:'权奕',
			psquanyi_info:'①出牌阶段限一次。你可以与一名角色拼点，赢的角色根据所有拼点牌的花色执行以下效果：♥，其获得没赢的角色区域里的一张牌；♦其对没赢的角色造成1点伤害；♠，其失去1点体力；♣，其弃置两张牌。②当你拼点时，你可以选择牌堆顶的牌作为拼点牌。',
			ps2067_zhaoyun:'武将传赵云',
			ps2067_zhaoyun_prefix:'武将传',
			pshuiqiang:'回枪',
			pshuiqiang_info:'当你使用的【杀】被【闪】抵消后，你可以对其使用一张【杀】。',
			pshuntu:'魂突',
			pshuntu_info:'出牌阶段限一次。当你使用【杀】对目标角色造成伤害后，你可以对其使用一张【杀】。',
			ps_caopi:'★曹丕',
			ps_caopi_prefix:'★',
			psjianwei:'僭位',
			psjianwei_info:'限定技。回合开始时，你可以失去1点体力，然后与一名其他角色交换区域里的所有牌。',
			ps2068_simayi:'★司马懿',
			ps2068_simayi_prefix:'★',
			pszhonghu:'冢虎',
			pszhonghu_info:'当一名角色于你的回合外死亡后，你可以结束此回合，然后令所有角色于其回合开始前跳过此回合直到你的回合开始前。',
			ps_simayi:'★司马懿',
			ps_simayi_prefix:'★',
			pshuxiao:'虎啸',
			pshuxiao_info:'回合开始时，你可以判定。若结果为基本牌或普通锦囊牌，你于本回合内获得如下效果：你可以将与结果点数或花色相同的手牌当与判定牌牌名和属性相同的牌使用。',
			ps_zhugeliang:'★诸葛亮',
			ps_zhugeliang_prefix:'★',
			psguanxing:'观星',
			psguanxing_info:'准备阶段，你可以观看牌堆顶的五张牌，并将其以任意顺序置于牌堆项或牌堆底。',
			pslongyin:'龙吟',
			pslongyin_info:'每回合限一次。你可以将任意张点数和为13的牌当做任意一张基本牌或普通锦囊牌使用或打出。',
			ps2066_zhugeliang:'武将传诸葛亮',
			ps2066_zhugeliang_prefix:'武将传',
			pszhiji:'智激',
			pszhiji_info:'出牌阶段限一次。你可以弃置两张手牌并选择两名势力不同的角色，视为这两名角色依次视为对对方使用一张【杀】。',
			psjiefeng:'借风',
			psjiefeng_info:'出牌阶段，你可以弃置两张手牌，然后亮出牌堆顶五张牌。若其中有至少两张红色牌，你视为使用一张【万箭齐发】。',
			ps_machao:'★马超',
			ps_machao_prefix:'★',
			psweihou:'威侯',
			psweihou_info:'当你判定前，你可以展示牌堆顶的两张牌，选择其中一张作为你的本次判定结果，然后将另一张置入弃牌堆。',
			ps_lvbu:'★吕布',
			ps_lvbu_prefix:'★',
			pssheji:'射戟',
			pssheji_info:'出牌阶段限一次。你可以将所有手牌当一张无距离限制的【杀】使用，然后当此【杀】对目标角色造成伤害后，你获得其装备区里的所有武器牌和坐骑牌。',
			ps_jiaxu:'★贾诩',
			ps_jiaxu_prefix:'★',
			psqupo:'驱魄',
			psqupo_info:'一名角色A的回合开始时，你可以将一张牌交给另一名其他角色B。若此牌为：黑色，当A使用【杀】指定不为B的角色为目标时，A失去1点体力；红色，当B于本回合下一次受到伤害时，B失去1点体力。',
			psbaoquan:'保全',
			psbaoquan_info:'当你受到伤害时，你可以弃置一张锦囊牌并防止此伤害。',
			//S特
			ps_shen_machao:'S特神马超',
			ps_shen_machao_prefix:'S特神',
			psshouli:'狩骊',
			psshouli_info:'锁定技。①游戏开始时，所有角色依次选择一项：1.使用一张坐骑牌，然后摸一张牌；2.随机从游戏外的八张坐骑牌指示物中使用一张。②你可以将场上一张进攻坐骑当【杀】，防御坐骑当【闪】使用或打出，若此坐骑牌的拥有者不为你，则其非锁定技于本回合内失效。且当你或其于本回合内受到伤害时，此伤害+1且改为雷属性。',
			pshengwu:'横骛',
			pshengwu_info:'当你使用或打出牌时，若场上有该花色的装备牌，你可以弃置任意张该花色的手牌，然后摸X张牌（X为你弃置的牌数与场上与此牌花色相同的装备牌数之和）。',
			//线下K系列木盒
			pk_sp_duyu:'K系列杜预',
			pk_sp_duyu_prefix:'K系列',
			pkwuku:'武库',
			pkwuku_info:'锁定技。当有角色使用装备牌时，若你的“武库”数小于3，则你获得1枚“武库”。',
			pksanchen:'三陈',
			pksanchen_info:'觉醒技。结束阶段，若你的“武库”数大于2，则你加1点体力上限并回复1点体力，然后获得〖灭吴〗。',
			pkmiewu:'灭吴',
			pkmiewu2:'灭吴',
			pkmiewu_info:'每回合限一次。你可移去1枚“武库”，视为使用或打出任意一张基本牌或普通锦囊牌，然后摸一张牌。',
			//天书乱斗虚拟偶像
			vtb_xiaosha:'小杀',
			vtbguisha:'瑰杀',
			vtbguisha_info:'当其他角色使用【杀】时，你可以弃置一张牌令此【杀】不计入次数，且此【杀】对目标角色造成的伤害+1。',
			vtbshuli:'淑丽',
			vtbshuli_info:'每回合限两次。当其他角色使用【杀】造成伤害后，你可以与其各摸一张牌。',
			vtb_xiaoshan:'小闪',
			vtbshanwu:'闪舞',
			vtbshanwu_info:'当其他角色成为【杀】的第一个目标时，你可以弃置一张【闪】，然后取消此【杀】的所有目标。',
			vtbxianli:'娴丽',
			vtbxianli_info:'每回合限两次。当你失去牌后，若其中有【闪】，你可以获得当前回合角色的一张牌。',
			vtb_xiaotao:'小桃',
			vtbtaoyan:'桃宴',
			vtbtaoyan_info:'回合开始时，你可以令至多两名其他角色摸一张牌并于游戏外获得一张【桃】（共五张且均为♥6）。',
			vtbyanli:'妍丽',
			vtbyanli_info:'每轮限一次。一名角色于你的回合外进入濒死状态时，你可以令其回复至1点体力，然后其摸一张牌。',
			vtb_xiaole:'小乐',
			vtbleyu:'乐虞',
			vtbleyu_info:'一名角色的回合开始时，你可以弃置三张牌令其判定。若结果不为♥，其跳过本回合的出牌阶段。',
			vtbyuanli:'媛丽',
			vtbyuanli_info:'一名角色跳过出牌阶段后，你可以与一名其他角色各摸一张牌。',
			vtb_xiaojiu:'小酒',
			vtbmeiniang:'美酿',
			vtbmeiniang_info:'其他角色的出牌阶段开始时，你可以令其视为使用一张无次数限制且不计入次数的【酒】。',
			vtbyaoli:'媱丽',
			vtbyaoli_info:'其他角色于其出牌阶段内使用【酒】后，你可以令其于本回合内使用的下一张【杀】不能被响应且可以额外指定一个目标。',
			old_machao:'J.SP马超',
			old_machao_prefix:'J.SP',
			jsp_caoren:'☆SP曹仁',
			jsp_caoren_prefix:'☆SP',
			jsp_ganfuren:'SP甘夫人',
			jsp_ganfuren_prefix:'SP',
			zhangliang:'SP张梁',
			zhangliang_prefix:'SP',
			ol_xinxianying:'将辛宪英',
			ol_xinxianying_prefix:'将',
			jiangqing:'战役篇蒋钦',
			jiangqing_prefix:'战役篇',
			tianfeng:'战役篇田丰',
			tianfeng_prefix:'战役篇',
			jiling:'战役篇纪灵',
			jiling_prefix:'战役篇',
			kongrong:'战役篇孔融',
			kongrong_prefix:'战役篇',
			mateng:'战役篇马腾',
			mateng_prefix:'战役篇',

			offline_star:'桌游志·SP',
			offline_sticker:'桌游志·贴纸',
			offline_yijiang:'一将成名',
			offline_luanwu:'文和乱武',
			offline_yongjian:'用间篇',
			offline_yongjian_prefix:'用间',
			offline_feihongyingxue:'飞鸿映雪',
			offline_piracyE:'官盗E系列·战役篇',
			offline_piracyS:'官盗S系列',
			offline_vtuber:'天书乱斗·虚拟偶像',
			offline_piracyK:'官盗K系列',
			offline_others:'线下其他系列',
		},
	};
});
