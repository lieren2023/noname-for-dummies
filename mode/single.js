'use strict';
game.import('mode',function(lib,game,ui,get,ai,_status){
	return {
		name:'single',
		changbanCharacter:[
			"key_rei","key_yoshino","key_noda","key_nagisa",
			"re_caocao","re_caozhang","re_diaochan","re_ganning","re_gongsunzan","re_guojia","re_huangyueying","re_lidian","re_lvbu",
			"re_simayi","sunquan","re_xiahoudun","re_xushu","yuanshu","xf_yiji","re_zhangfei","re_zhangliao","re_xuzhu",
			"re_zhaoyun","re_zhouyu","re_zhugeliang","ol_xiahouyuan","re_huangzhong","re_weiyan","dianwei","te_yanwen","re_pangde",
			"re_zhurong","re_sunjian","jiaxu","dengai","re_jiangwei","re_sunben","wangji","wangping","guanqiujian","chendao","ol_yujin",
			"re_caozhi","xin_masu","re_lingtong","xusheng","re_gaoshun","xunyou","guanzhang","madai","handang","caochong",
			"re_guohuai","guanping","liufeng","re_zhuran","xin_liru","hanhaoshihuan","guyong","zhuhuan","caoxiu","liuchen","re_zhangyi",
			"re_quancong","sunxiu","sundeng","guohuanghou","re_jikang","xuezong","qinmi","lvdai","re_zhangliang","lingcao",
			"sunru","zhuling","sp_caoren","fanchou","fuwan","sp_ganning","guanyinping","guosi","heqi","sp_jiangwei","litong",
			"re_panfeng","sp_pangde","xf_sufei","xf_tangzi","xiahouba","xujing","yuejin","sp_zhangfei","zhangji","zhangyì","dongcheng",
		],
		singlePile:[
			['spade',5,'sha'],
			['spade',7,'sha'],
			['spade',8,'sha'],
			['spade',10,'sha'],
			['heart',10,'sha'],
			['heart',11,'sha'],
			['club',4,'sha'],
			['club',5,'sha'],
			['club',6,'sha'],
			['club',8,'sha'],
			['club',9,'sha'],
			['club',10,'sha'],
			['club',11,'sha'],
			['diamond',6,'sha'],
			['diamond',9,'sha'],
			['diamond',11,'sha'],
			['heart',2,'shan'],
			['heart',5,'shan'],
			['diamond',2,'shan'],
			['diamond',3,'shan'],
			['diamond',7,'shan'],
			['diamond',8,'shan'],
			['diamond',10,'shan'],
			['diamond',11,'shan'],
			['heart',3,'tao'],
			['heart',4,'tao'],
			['heart',9,'tao'],
			['diamond',12,'tao'],
			['club',12,'bingliang'],
			['spade',3,'guohe'],
			['diamond',12,'guohe'],
			['club',3,'guohe'],
			['club',1,'juedou'],
			['spade',1,'juedou'],
			['heart',6,'lebu'],
			['spade',1,'nanman'],
			['club',7,'shuiyanqijunx'],
			['spade',4,'shunshou'],
			['spade',11,'shunshou'],
			['diamond',4,'shunshou'],
			['heart',1,'wanjian'],
			['heart',5,'wuxie'],
			['club',5,'wuxie'],
			['heart',7,'wuzhong'],
			['heart',8,'wuzhong'],
			['diamond',5,'guanshi'],
			['spade',9,'hanbing'],
			['spade',6,'qinggang'],
			['spade',12,'zhangba'],
			['diamond',1,'zhuge'],
			['spade',2,'bagua'],
			['club',2,'renwang'],
		],
		characterSingle:{
			caocao:['male','wei',4,['jianxiong'],['zhu']],
			simayi:['male','wei',3,['fankui','guicai']],
			xiahoudun:['male','wei',4,['ganglie']],
			zhangliao:['male','wei',4,['retuxi']],
			xuzhu:['male','wei',4,['luoyi','xiechan']],
			guojia:['male','wei',3,['tiandu','yiji']],
			zhenji:['female','wei',3,['luoshen','sgqingguo']],
			liubei:['male','shu',4,['sgrenwang'],['zhu']],
			guanyu:['male','shu',4,['wusheng','huwei']],
			zhangfei:['male','shu',4,['paoxiao']],
			zhugeliang:['male','shu',3,['guanxing','kongcheng']],
			zhaoyun:['male','shu',4,['longdan']],
			machao:['male','shu',4,['xiaoxi','tieji']],
			huangyueying:['female','shu',3,['jizhi','cangji']],
			sunquan:['male','wu',4,['sgzhiheng'],['zhu']],
			ganning:['male','wu',4,['qixi']],
			lvmeng:['male','wu',4,['shenju','botu']],
			huanggai:['male','wu',4,['kurou']],
			zhouyu:['male','wu',3,['yingzi','fanjian']],
			daqiao:['female','wu',3,['guose','wanrong']],
			luxun:['male','wu',3,['qianxun','lianying']],
			sunshangxiang:['female','wu',3,['xiaoji','yinli']],
			//huatuo:['male','qun',3,['qingnang','jijiu']],
			lvbu:['male','qun',4,['wushuang']],
			diaochan:['female','qun',3,['pianyi','biyue']],

			xiahouyuan:['male','wei',4,['shensu','suzi']],
			old_caoren:['male','wei',4,['jushou']],
			huangzhong:['male','shu',4,['liegong']],
			weiyan:['male','shu',4,['sgkuanggu']],
			xiaoqiao:['female','wu',3,['tianxiang','hongyan']],
			old_zhoutai:['male','wu',4,['gzbuqu']],
			zhangjiao:['male','qun',3,['leiji','guidao'],['zhu']],

			dianwei:['male','wei',4,['qiangxi']],
			yanwen:['male','qun',4,['shuangxiong']],
			pangde:['male','qun',4,['xiaoxi','mengjin']],

			menghuo:['male','shu',4,['manyi','zaiqi']],
			zhurong:['female','shu',4,['manyi','lieren']],
			xuhuang:['male','wei',4,['sgduanliang']],
			sunjian:['male','wu',4,['gzyinghun']],

			jiangwei:['male','shu',4,['tiaoxin']],

			hejin:['male','qun',4,['mouzhu','yanhuo']],
			hansui:['male','qun',4,['xiaoxi','niluan']],
			niujin:['male','wei',4,['cuorui','liewei']],

			jin_zhangchunhua:['female','jin',3,['huishi','qingleng']],
			jin_simayi:['male','jin',3,['smyyingshi','xiongzhi','quanbian']],
			jin_wangyuanji:['female','jin',3,['yanxi']],
			jin_simazhao:['male','jin',3,['choufa','zhaoran']],
			jin_xiahouhui:['female','jin',3,['jyishi','shiduo']],
			jin_simashi:['male','jin','3/4',['yimie','tairan']],
			zhanghuyuechen:['male','jin',4,['xijue']],
			duyu:['male','jin',4,['sanchen','zhaotao']],
		},
		startBefore:function(){

		},
		onreinit:function(){
			_status.mode=_status.connectMode?lib.configOL.single_mode:get.config('single_mode');
			if(_status.mode!='normal') return;
			for(var i in lib.characterSingle){
				lib.character[i]=lib.characterSingle[i];
				if(!lib.character[i][4]){
					lib.character[i][4]=[];
				}
			}
			for(var j in lib.singleTranslate) lib.translate[j]=lib.singleTranslate[j];
		},
		start:function(){
			"step 0"
			_status.mode=_status.connectMode?lib.configOL.single_mode:get.config('single_mode');
			var playback=localStorage.getItem(lib.configprefix+'playback');
			if(playback){
				ui.create.me();
				ui.arena.style.display='none';
				ui.system.style.display='none';
				_status.playback=playback;
				localStorage.removeItem(lib.configprefix+'playback');
				var store=lib.db.transaction(['video'],'readwrite').objectStore('video');
				store.get(parseInt(playback)).onsuccess=function(e){
					if(e.target.result){
						game.playVideoContent(e.target.result.video);
					}
					else{
						alert('播放失败：找不到录像');
						game.reload();
					}
				}
				event.finish();
			}
			else if(!_status.connectMode){
				game.prepareArena(2);
			}
			"step 1"
			if(_status.connectMode){
				game.waitForPlayer(function(){
						lib.configOL.number=2;
				});
			}
			"step 2"
			if(_status.mode=='normal'){
				lib.card.list=lib.singlePile.slice(0);
				game.fixedPile=true;
				game.broadcastAll(function(singleTranslate,characterSingle,jin){
					_status.mode='normal';
					for(var j in singleTranslate) lib.translate[j]=singleTranslate[j];
					_status.characterlist=[];
					for(var i in characterSingle){
						if(!jin&&characterSingle[i][1]=='jin') continue;
						lib.character[i]=characterSingle[i];
						if(!lib.character[i][4]){
							lib.character[i][4]=[];
						}
						_status.characterlist.push(i);
					}
				},lib.singleTranslate,lib.characterSingle,_status.connectMode?lib.configOL.enable_jin:get.config('enable_jin'));
			}
			else if(_status.mode=='changban'){
				_status.characterlist=[];
				for(var i=0;i<lib.changbanCharacter.length;i++){
					var name=lib.changbanCharacter[i];
					if(lib.character[name]&&!lib.filter.characterDisabled(name)) _status.characterlist.push(name);
				}
				game.broadcastAll(function(){
					_status.mode='changban';
					lib.translate.bingliang_info='目标角色判定阶段进行判定：若判定结果不为梅花，则跳过该角色的摸牌阶段。';
					lib.translate.zhuge_info='锁定技，出牌阶段，你使用杀的次数上限+3';
				});
				for(var i=0;i<lib.card.list.length;i++){
					var card=lib.card.list[i];
					if(card[2]=='muniu'||card[2]=='shandian'||card[2]=='tengjia'&&card[0]=='club'||
					card[2]=='wuxie'&&card[0]=='diamond'&&card[1]==12) lib.card.list.splice(i--,1);
				}
			}
			if(_status.connectMode){
				lib.configOL.number=2;
				game.randomMapOL();
			}
			else{
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
				}
				if(_status.brawl&&_status.brawl.chooseCharacterBefore){
					_status.brawl.chooseCharacterBefore();
				}
				game.chooseCharacter();
			}
			"step 3"
			if(ui.coin){
				_status.coinCoeff=get.coinCoeff([game.me.name]);
			}

			game.syncState();
			event.trigger('gameStart');

			var players=get.players(lib.sort.position);
			var info=[];
			for(var i=0;i<players.length;i++){
				info.push({
					name:players[i].name1,
					name2:players[i].name2,
					identity:players[i].identity
				});
			}
			_status.videoInited=true;
			game.addVideo('init',null,info);

			game.gameDraw(game.zhu,function(player){
				if(_status.mode=='dianjiang') return 4;
				if(_status.mode=='normal') return player==game.zhu?3:4;
				if(_status.mode=='changban') return player==game.fan?5:4;
				if(player.hasSkill('cuorui')){
					player.logSkill('cuorui');
					return 2+_status.characterChoice[player.identity].length;
				}
				return player.maxHp;
			});
			game.phaseLoop(game.zhu);
		},
		game:{
			canReplaceViewpoint:()=>true,
			addRecord:function(bool){
				if(typeof bool=='boolean'){
					var mode=_status.mode;
					var data=lib.config.gameRecord.single.data;
					if(!get.is.object(data[mode])) data[mode]={};
					var data2=data[mode]
					var identity=game.me.identity;
					if(!data2[identity]){
						data2[identity]=[0,0];
					}
					if(bool){
						data2[identity][0]++;
					}
					else{
						data2[identity][1]++;
					}
					var list=['zhu','fan'];
					var str='';
					for(var j in data){
						str+=get.translation(j+2)+'：<br>';
						for(var i=0;i<list.length;i++){
							if(data[j][list[i]]){
								str+=lib.translate[list[i]+'2']+'：'+data[j][list[i]][0]+'胜'+' '+data[j][list[i]][1]+'负<br>';
							}
						}
					}
					lib.config.gameRecord.single.str=str;
					game.saveConfig('gameRecord',lib.config.gameRecord);
				}
			},
			getState:function(){
				var state={};
				for(var i in lib.playerOL){
					var player=lib.playerOL[i];
					state[i]={identity:player.identity};
				}
				return state;
			},
			updateState:function(state){
				for(var i in state){
					var player=lib.playerOL[i];
					if(player){
						player.identity=state[i].identity;
					}
				}
			},
			getRoomInfo:function(uiintro){
				if(lib.configOL.single_mode=='normal') uiintro.add('<div class="text chat">晋势力武将：'+(lib.configOL.enable_jin?'开启':'关闭'));
				if(lib.configOL.bannedcards.length){
					uiintro.add('<div class="text chat">禁用卡牌：'+get.translation(lib.configOL.bannedcards));
				}
				uiintro.style.paddingBottom='8px';
			},
			getVideoName:function(){
				var str=get.translation(game.me.name);
				if(game.me.name2){
					str+='/'+get.translation(game.me.name2);
				}
				var name=[
					str,
					get.translation(_status.mode+2)+' - '+lib.translate[game.me.identity+'2']
				];
				return name;
			},
			showIdentity:function(){},
			checkResult:function(){
				game.over((game.me._trueMe||game.me).isAlive());
			},
			checkOnlineResult:function(player){
				return player.isAlive();
			},
			chooseCharacterDianjiang:function(){
				var next=game.createEvent('chooseCharacter');
				next.showConfig=true;
				next.setContent(function(){
					"step 0"
					ui.arena.classList.add('choose-character');
					lib.init.onfree();
					"step 1"
					game.me.chooseControl('先手','后手').prompt='请选择自己的行动顺序';
					"step 2"
					var map=result.control=='先手'?['zhu','fan']:['fan','zhu'];
					game.me.identity=map[0];
					game.me.next.identity=map[1];
					game.me.showIdentity();
					game.me.next.showIdentity();
					"step 3"
					event.flipassign=true;
					event.videoId=lib.status.videoId++;
					var list=[];
					for(var i in lib.character){
						if(lib.filter.characterDisabled(i)) continue;
						list.push(i);
					}
					_status.characterlist=list;
					var filter=function(name){
						return !_status.characterlist.includes(name);
					};
					var dialog=ui.create.characterDialog('heightset',filter).open();
					dialog.videoId=event.videoId;

					game.me.chooseButton(true).set('ai',function(button){
						return Math.random();
					}).set('dialog',event.videoId);
					"step 4"
					game.me.init(result.links[0]);
					_status.characterlist.remove(result.links[0]);
					game.addRecentCharacter(result.links[0]);
					game.me.chooseButton(true).set('ai',function(button){
						return Math.random();
					}).set('dialog',event.videoId);
					"step 5"
					game.broadcastAll('closeDialog',event.videoId);
					game.me.next.init(result.links[0]);
					_status.characterlist.remove(result.links[0]);
					game.addRecentCharacter(result.links[0]);
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				});
			},
			chooseCharacter:function(){
				if(_status.mode=='dianjiang'){
					game.chooseCharacterDianjiang();
					return;
				}
				var next=game.createEvent('chooseCharacter');
				next.showConfig=true;
				next.setContent(function(){
					"step 0"
					ui.arena.classList.add('choose-character');
					var num=[0,1].randomGet();
					game.players[num].identity='zhu';
					game.players[1-num].identity='fan';
					game.broadcastAll(function(p,t){
						p.enemy=t;t.enemy=p;
					},game.players[0],game.players[1]);
					for(var i=0;i<game.players.length;i++){
						game.players[i].showIdentity();
					}
					"step 1"
					_status.characterChoice={
						zhu:_status.characterlist.randomRemove(3),
						fan:_status.characterlist.randomRemove(3),
						all:_status.characterlist.randomRemove(6),
					};
					event.videoIdx=lib.status.videoId++;
					game.broadcastAll(function(id,list){
						var dialog=ui.create.dialog('选择武将',[list.all,'character'],'起始武将',[list[game.me.identity],'character']);
						dialog.videoId=id;
					},event.videoIdx,_status.characterChoice);
					"step 2"
					var next=game.fan.chooseButton(true,1);
					next.filterButton=function(button){
						return _status.event.canChoose.includes(button.link);
					};
					next.set('onfree',true);
					next.dialog=event.videoIdx;
					next.canChoose=_status.characterChoice.all;
					next.ai=function(){return Math.random()};
					"step 3"
					_status.characterChoice.fan.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.fan,true,event.videoIdx);
					var next=game.zhu.chooseButton(true,2);
					next.filterButton=function(button){
						return _status.event.canChoose.includes(button.link);
					};
					next.dialog=event.videoIdx;
					next.canChoose=_status.characterChoice.all;
					next.ai=function(){return Math.random()};
					"step 4"
					_status.characterChoice.zhu.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.zhu,false,event.videoIdx);
					var next=game.fan.chooseButton(true,2);
					next.filterButton=function(button){
						return _status.event.canChoose.includes(button.link);
					};
					next.dialog=event.videoIdx;
					next.canChoose=_status.characterChoice.all;
					next.ai=function(){return Math.random()};
					"step 5"
					_status.characterChoice.fan.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.fan,true,event.videoIdx);
					var next=game.zhu.chooseButton(true);
					next.filterButton=function(button){
						return _status.event.canChoose.includes(button.link);
					};
					next.dialog=event.videoIdx;
					next.canChoose=_status.characterChoice.all;
					next.ai=function(){return Math.random()};
					"step 6"
					_status.characterChoice.zhu.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.zhu,false,event.videoIdx);
					"step 7"
					game.broadcastAll('closeDialog',event.videoIdx);
					"step 8"
					game.me.chooseButton(true,['请选择出场武将',[_status.characterChoice[game.me.identity],'character']],_status.mode=='changban'?2:1);
					"step 9"
					game.me.init(result.links[0],_status.mode=='changban'?result.links[1]:null);
					_status.characterChoice[game.me.identity].removeArray(result.links);
					var list=_status.characterChoice[game.me.enemy.identity].randomRemove(_status.mode=='changban'?2:1);
					game.me.enemy.init(list[0],list[1]);
					"step 10"
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				});
			},
			chooseCharacterDianjiangOL:function(){
				var next=game.createEvent('chooseCharacter');
				next.showConfig=true;
				next.setContent(function(){
					"step 0"
					var map=Math.random()<0.5?['zhu','fan']:['fan','zhu'];
					game.me.identity=map[0];
					game.me.next.identity=map[1];
					game.me.showIdentity();
					game.me.next.showIdentity();
					"step 1"
					//event.flipassign=true;
					event.videoId=lib.status.videoId++;
					var list=[];
					var libCharacter={};
					for(var i=0;i<lib.configOL.characterPack.length;i++){
						var pack=lib.characterPack[lib.configOL.characterPack[i]];
						for(var j in pack){
							if(lib.character[j]) libCharacter[j]=pack[j];
						}
					}
					for(i in libCharacter){
						if(lib.filter.characterDisabled(i,libCharacter)) continue;
						list.push(i);
					}
					game.broadcastAll(function(list,id){
						_status.characterlist=list;
						var filter=function(name){
							return !_status.characterlist.includes(name);
						};
						var dialog=ui.create.characterDialog('heightset',filter).open();
						dialog.videoId=id;
						ui.arena.classList.add('choose-character');
					},list,event.videoId);
					game.zhu.chooseButton(true).set('ai',function(button){
						return Math.random();
					}).set('dialog',event.videoId);
					"step 2"
					game.broadcastAll(function(player,character,id){
						player.init(character);
						_status.characterlist.remove(character);
						if(player==game.me) game.addRecentCharacter(character);
					},game.zhu,result.links[0]);
					game.fan.chooseButton(true).set('ai',function(button){
						return Math.random();
					}).set('dialog',event.videoId);
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					game.broadcastAll(function(player,character,id){
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.close();
						}
						player.init(character);
						_status.characterlist.remove(character);
						if(player==game.me) game.addRecentCharacter(character);
						setTimeout(function(){
							ui.arena.classList.remove('choose-character');
						},500);
					},game.fan,result.links[0],event.videoId);
				});
			},
			chooseCharacterOL:function(){
				if(_status.mode=='dianjiang'){
					game.chooseCharacterDianjiangOL();
					return;
				}
				var next=game.createEvent('chooseCharacter');
				next.setContent(function(){
					"step 0"
					ui.arena.classList.add('choose-character');
					var num=[0,1].randomGet();
					game.players[num].identity='zhu';
					game.players[1-num].identity='fan';
					game.broadcastAll(function(p,t){
						p.enemy=t;t.enemy=p;
					},game.players[0],game.players[1]);
					for(var i=0;i<game.players.length;i++){
						game.players[i].showIdentity();
					}
					"step 1"
					_status.characterChoice={
						zhu:_status.characterlist.randomRemove(3),
						fan:_status.characterlist.randomRemove(3),
						all:_status.characterlist.randomRemove(6),
					};
					event.videoIdx=lib.status.videoId++;
					game.broadcastAll(function(id,list){
						var dialog=ui.create.dialog(game.me.identity=='fan'?'选择武将':'请等待对手选择武将',[list.all,'character'],'起始武将',[list[game.me.identity],'character']);
						dialog.videoId=id;
					},event.videoIdx,_status.characterChoice);
					"step 2"
					var next=game.fan.chooseButton(true,1);
					next.set('filterButton',function(button){
						return _status.event.canChoose.includes(button.link);
					});
					next.set('dialog',event.videoIdx);
					next.set('canChoose',_status.characterChoice.all);
					next.ai=function(){return Math.random()};
					"step 3"
					_status.characterChoice.fan.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.fan,true,event.videoIdx);
					var next=game.zhu.chooseButton(true,2);
					next.set('filterButton',function(button){
						return _status.event.canChoose.includes(button.link);
					});
					next.set('dialog',event.videoIdx);
					next.set('canChoose',_status.characterChoice.all);
					next.ai=function(){return Math.random()};
					"step 4"
					_status.characterChoice.zhu.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.zhu,false,event.videoIdx);
					var next=game.fan.chooseButton(true,2);
					next.set('filterButton',function(button){
						return _status.event.canChoose.includes(button.link);
					});
					next.set('dialog',event.videoIdx);
					next.set('canChoose',_status.characterChoice.all);
					next.ai=function(){return Math.random()};
					"step 5"
					_status.characterChoice.fan.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.fan,true,event.videoIdx);
					var next=game.zhu.chooseButton(true);
					next.set('filterButton',function(button){
						return _status.event.canChoose.includes(button.link);
					});
					next.set('dialog',event.videoIdx);
					next.set('canChoose',_status.characterChoice.all);
					next.ai=function(){return Math.random()};
					"step 6"
					_status.characterChoice.zhu.addArray(result.links);
					_status.characterChoice.all.removeArray(result.links);
					game.broadcastAll(function(link,choosing,first,id){
						var dialog=get.idDialog(id);
						if(dialog){
							if(choosing==game.me){
								choosing='你';
							}
							else{
								choosing='对手';
							}
							dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
							for(var i=0;i<dialog.buttons.length;i++){
								if(link.includes(dialog.buttons[i].link)){
									if(first){
										dialog.buttons[i].classList.add('selectedx');
									}
									else{
										dialog.buttons[i].classList.add('glow');
									}
								}
							}
						}
					},result.links,game.zhu,false,event.videoIdx);
					"step 7"
					game.broadcastAll('closeDialog',event.videoIdx);
					"step 8"
					var num=_status.mode=='changban'?2:1;
					var list=[
					[game.zhu,num,true,['选择出场角色',[_status.characterChoice.zhu,'character']]],
					[game.fan,num,true,['选择出场角色',[_status.characterChoice.fan,'character']]]
					];
					game.me.chooseButtonOL(list,function(player,result){
						if(game.online||player==game.me) player.init(result.links[0],result.links[1]);
					});
					"step 9"
					for(var i in result){
						var current=lib.playerOL[i];
						if(result[i]=='ai'){
							result[i]=_status.characterChoice[current.identity].randomGets(_status.mode=='changban'?2:1);
						}
						else{
							result[i]=result[i].links;
						}
						_status.characterChoice[current.identity].removeArray(result[i]);
						if(!current.name){
							current.init(result[i][0],result[i][1]);
						}
					}
					game.broadcast(function(result){
						for(var i in result){
							if(!lib.playerOL[i].name){
								lib.playerOL[i].init(result[i][0],result[i][1]);
							}
						}
						setTimeout(function(){
							ui.arena.classList.remove('choose-character');
						},500);
					},result);
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				});
			},
		},
		element:{
			player:{
				dieAfter:function(){
					if(_status.mode!='normal'||_status.characterChoice[this.identity].length<=3) game.checkResult();
				},
				dieAfter2:function(){
					if(_status.mode!='normal') return;
					var next=game.createEvent('replacePlayerSingle',false,_status.event.getParent());
					next.player=this;
					next.forceDie=true;
					next.setContent(function(){
						"step 0"
						game.delay();
						"step 1"
						player.chooseButton(true,['请选择一名出场武将',[_status.characterChoice[player.identity].slice(0),'character']]).set('forceDie',true);
						"step 2"
						var source=player;
						var name=result.links[0];
						var color=source.node.identity.dataset.color;

						game.broadcastAll(function(source,name,color){
							source.revive(null,false);
							source.uninit();
							source.init(name);
							source.node.identity.dataset.color=color;
						},source,name,color);
						game.log(source,'出场');

						var num=_status.mode == 'normal' ? 4 : source.maxHp;
						if(player.hasSkill('cuorui')){
							player.logSkill('cuorui');
							num=2+_status.characterChoice[player.identity].length;
						}
						source.draw(num);
						var evt=event.getParent('dying');
						if(evt&&evt.parent) evt.parent.untrigger(false,source);
						game.addVideo('reinit',source,[name,color]);
						game.triggerEnter(source);
						_status.characterChoice[player.identity].remove(name);
					});
				},
				logAi:function(targets,card){},
				showIdentity:function(){
					game.broadcastAll(function(player,identity){
						player.identity=identity;
						game[identity]=player;
						player.side=identity=='zhu';
						player.node.identity.classList.remove('guessing');
						player.identityShown=true;
						player.ai.shown=1;
						player.setIdentity();
						if(player.identity=='zhu'){
							player.isZhu=true;
						}
						if(_status.clickingidentity){
							for(var i=0;i<_status.clickingidentity[1].length;i++){
								_status.clickingidentity[1][i].delete();
								_status.clickingidentity[1][i].style.transform='';
							}
							delete _status.clickingidentity;
						}
					},this,this.identity);
				}
			}
		},
		get:{
			attitude:function(from,to){
				if(from.identity==to.identity) return 10;
				return -10;
			},
		},
		skill:{
			wanrong:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				frequent:true,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				content:function(){
					player.draw();
				},
			},
			sgzhiheng:{
				audio:'zhiheng',
				inherit:'zhiheng',
				selectCard:[1,2],
				prompt:'弃置至多两张牌并摸等量的牌',
			},
			xiechan:{
				audio:2,
				limited:true,
				enable:'phaseUse',
				skillAnimation:true,
				animationColor:'water',
				filterTarget:function(card,player,target){
					return target!=player&&player.canCompare(target);
				},
				content:function(){
					'step 0'
					player.awakenSkill('xiechan');
					player.chooseToCompare(target);
					'step 1'
					if(result.bool) player.useCard({name:'juedou'},target,'noai');
					else target.useCard({name:'juedou'},player,'noai');
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player.countCards('h',function(card){
								return get.value(card)<=5&&get.number(card)>=12;
							})&&get.effect(target,{name:'juedou'},player,player)>0) return -1;
							return 0;
						},
					},
				},
			},
			huwei:{
				audio:2,
				trigger:{
					player:'enterGame',
					global:'gameDrawAfter',
				},
				direct:true,
				content:function(){
					player.chooseUseTarget('shuiyanqijunx',get.prompt('huwei'),'视为使用一张【水淹七军】').logSkill='huwei';
				},
			},
			sgkuanggu:{
				audio:'kuanggu',
				trigger:{source:'damageSource'},
				frequent:true,
				filter:function(event,player){
					return player.isDamaged();
				},
				content:function(){
					'step 0'
					player.judge(function(result){
						return get.color(result)=='black'?2:-2;
					});
					'step 1'
					if(result.bool==true) player.recover();
				},
			},
			suzi:{
				inherit:'xingshang',
			},
			cangji:{
				trigger:{player:'die'},
				filter:function(event,player){
					return player.countCards('e')>0;
				},
				forceDie:true,
				skillAnimation:true,
				animationColor:'orange',
				content:function(){
					var cards=player.getCards('e');
					player.cangji_yozuru=cards;
					player.lose(cards,ui.special);
					player.addSkill('cangji_yozuru');
				},
				subSkill:{
					yozuru:{
						sub:true,
						charlotte:true,
						superCharlotte:true,
						trigger:{player:'enterGame'},
						forced:true,
						popup:false,
						//onremove:true,
						content:function(){
							var cards=player.cangji_yozuru.slice(0);
							for(var i=0;i<cards.length;i++){
								player.equip(cards[i]);
							}
							player.removeSkill('cangji_yozuru');
							delete player.cangji_yozuru;
						},
					},
				},
			},
			sgrenwang:{
				audio:2,
				trigger:{target:'useCardToTargeted'},
				direct:true,
				filter:function(event,player){
					return event.player!=player&&event.player.isPhaseUsing()&&(event.card.name=='sha'||get.type(event.card)=='trick');
				},
				content:function(){
					if(!player.hasSkill('sgrenwang_one')) player.addTempSkill('sgrenwang_one','phaseUseEnd');
					else if(trigger.player.countDiscardableCards(player,'he')){
						player.discardPlayerCard(trigger.player,'he',get.prompt('sgrenwang')).logSkill=['sgrenwang',trigger.player];
					}
				},
			},
			sgrenwang_one:{},
			sgduanliang:{
				group:'sgduanliang_gdm',
				audio:'duanliang1',
				enable:'chooseToUse',
				filterCard:function(card){
					if(get.type(card)!='basic'&&get.type(card)!='equip') return false;
					return get.color(card)=='black';
				},
				filter:function(event,player){
					return player.hasSkill('sgduanliang_sss')&&player.countCards('he',{type:['basic','equip'],color:'black'})
				},
				position:'he',
				viewAs:{name:'bingliang'},
				prompt:'将一黑色的基本牌或装备牌当兵粮寸断使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					order:9
				},
				subSkill:{
					gdm:{
						trigger:{player:'useCardToPlayered'},
						forced:true,
						silent:true,
						popup:false,
						content:function(){
							if(trigger.target!=player) player.addTempSkill('sgduanliang_sss');
						},
					},
					sss:{},
				},
			},
			sgqingguo:{
				audio:'qingguo',
				enable:['chooseToRespond','chooseToUse'],
				filterCard:true,
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('e')) return false;
				},
				prompt:'将一张装备区中的牌当闪使用或打出',
				position:'e',
				check:function(){return 1},
				ai:{
					order:0.5,
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('e')) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(target.countCards('e')&&get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
			pianyi:{
				audio:2,
				trigger:{player:'enterGame'},
				forced:true,
				filter:function(event,player){
					return event.getParent('phase').player==player.enemy;
				},
				content:function(){
					var evt=_status.event.getParent('phase');
					if(evt){
						game.log(player,'结束了',evt.player,'的回合');
						game.resetSkills();
						_status.event=evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				},
			},
			yinli:{
				audio:2,
				trigger:{global:'loseEnd'},
				filter:function(event,player){
					if(event.player==player||event.player!=_status.currentPhase||event.getParent().name=='useCard') return false;
					for(var i=0;i<event.cards.length;i++){
						if(get.type(event.cards[i])=='equip'&&get.position(event.cards[i])=='d') return true;
					}
					return false;
				},
				frequent:true,
				content:function(){
					var list=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.type(trigger.cards[i])=='equip'&&get.position(trigger.cards[i])=='d') list.push(trigger.cards[i]);
					}
					if(list.length) player.gain(list,'gain2');
				},
			},
			shenju:{
				audio:2,
				mod:{
					maxHandcard:function(player,num){
						if(player.enemy&&player.enemy.hp) return num+player.enemy.hp;
					}
				},
			},

			_changeHandcard:{
				trigger:{global:'gameDrawAfter'},
				silent:true,
				popup:false,
				filter:function(event,player){
					return _status.mode=='changban'&&player.maxHp<=3;
				},
				content:function(){
					'step 0'
					player.chooseBool('是否更换手牌？').ai=function(){
						var hs=player.getCards('h');
						return get.value(hs,'raw')<6*hs;
					};
					'step 1'
					if(result.bool){
						var hs=player.getCards('h');
						player.lose(hs,ui.special);
						event.hs=hs;
					}
					else event.finish();
					'step 2'
					var hs=event.hs;
					player.draw(hs.length,'nodelay');
					for(var i=0;i<hs.length;i++){
						hs[i].fix();
						ui.cardPile.insertBefore(hs[i],ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
					}
				},
			},
		},
		singleTranslate:{
			xiahouyuan:'夏侯渊',
			huangzhong:'黄忠',
			weiyan:'魏延',
			xiaoqiao:'小乔',
			xuhuang:'徐晃',
			pangde:'庞德',
			zhangjiao:'张角',
			old_caoren:'曹仁',
			old_zhoutai:'周泰',
			shuiyanqijunx_info:'出牌阶段，对一名其他角色使用。目标角色选择一项：1、弃置装备区里的所有牌；2、受到你造成的1点伤害。',
			guohe_info:'出牌阶段，对有牌的一名其他角色使用。你选择一项：①弃置其装备区里的一张牌。②观看其手牌并弃置其中的一张。',
			shunshou_info:'出牌阶段，对距离为1且有牌的一名其他角色使用。你获得其的一张牌。',
		},
		translate:{
			zhu:"先",
			fan:"后",
			zhu2:"先手",
			fan2:"后手",
			normal2:'新1v1',
			changban2:'血战长坂坡',
			dianjiang2:'点将单挑',

			wanrong:'婉容',
			wanrong_info:'当你成为【杀】的目标后，你可以摸一张牌。',
			sgzhiheng:'制衡',
			sgzhiheng_info:'出牌阶段限一次，你可以弃置至多两张牌，然后摸等量的牌。',
			xiechan:'挟缠',
			xiechan_info:'限定技，出牌阶段，你可以和对手拼点。若你赢/没赢，你/其视为对其/你使用一张【决斗】。',
			huwei:'虎威',
			huwei_info:'当你登场时，你可以视为使用一张【水淹七军】。',
			sgkuanggu:'狂骨',
			sgkuanggu_info:'当你造成伤害后，若你已受伤，你可以进行判定：若结果为黑色，你回复1点体力。',
			suzi:'肃资',
			cangji:'藏机',
			cangji_info:'当你死亡时，你可以将装备区内的所有牌移动到游戏外。若如此做，你的下一名角色登场时，你将这些牌置入你的装备区。',
			sgrenwang:'仁望',
			sgrenwang_info:'当你于一名其他角色的出牌阶段内成为该角色使用的【杀】或普通锦囊牌的目标后，若此牌不是其本阶段内对你使用的第一张【杀】或普通锦囊牌，则你可以弃置该角色的一张牌。',
			sgduanliang:'断粮',
			sgduanliang_info:'出牌阶段，若你本回合内使用牌指定过其他角色为目标，则你可以将一张黑色基本牌或装备牌当做【兵粮寸断】使用。',
			sgqingguo:'倾国',
			sgqingguo_info:'你可以将一张装备区内的牌当做【闪】使用或打出。',
			pianyi:'翩仪',
			pianyi_info:'锁定技，当你于对手的回合内登场时，你结束此回合。',
			yinli:'姻礼',
			yinli_info:'其他角色的装备牌于其回合内进入弃牌堆后，你可以获得之。',
			shenju:'慎拒',
			shenju_info:'锁定技，你的手牌上限+X（X为你对手的体力值）。',
		},
		help:{
		'血战长坂':'<div style="margin:10px">游戏规则</div><ul style="margin-top:0"><li>选将阶段<br>双方在游戏开始时由系统随机分配身份。分配到先手身份的玩家优先出牌，分配到后手身份的玩家优先选将。<br>双方各自随机获得3名暗置武将，同时从将池中随机选出6名明置武将，由后手玩家开始，按照一次1张-2张-2张-1张的顺序，轮流选择获得明置武将。之后双方各从自己的6名武将中选择2名分别作为主将和副将进行游戏。<li>胜利条件<br>对方死亡。'+
			'<li>双将规则<br>双将主将决定角色的性别和势力，体力上限为主副将体力上限的平均值，向下取整。体力上限为3的角色可在游戏开始后更换一次起始手牌。<li>牌堆<br>牌堆中移除【木牛流马】【闪电】，♣花色的【藤甲】和【无懈可击 ♦️Q】️</ul>',
		}
	};
});
