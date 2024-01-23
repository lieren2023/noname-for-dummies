'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'onlyOL',
		connect:true,
		character:{
			ol_sb_jiangwei:['male','shu',4,['olsbzhuri','olsbranji']],
			ol_caozhang:['male','wei',4,['oljiangchi'],['die_audio:xin_caozhang']],
			ol_jianyong:['male','shu',3,['olqiaoshui','jyzongshi'],['tempname:re_jianyong','die_audio:re_jianyong']],
			ol_lingtong:['male','wu',4,['olxuanfeng'],['die_audio:re_lingtong']],
		},
		characterSort:{
			onlyOL:{
				onlyOL_yijiang1:['ol_jianyong','ol_lingtong'],
				onlyOL_yijiang2:['ol_caozhang'],
				onlyOL_sb:['ol_sb_jiangwei'],
			},
		},
		characterIntro:{
		},
		characterReplace:{
		},
		skill:{
			//OL谋姜维
			olsbzhuri:{
				audio:2,
				trigger:{player:['phaseZhunbeiEnd','phaseJudgeEnd','phaseDrawEnd','phaseUseEnd','phaseDiscardEnd','phaseJieshuEnd']},
				filter:function(event,player){
					if(player.hasSkill('olsbzhuri_block')) return false;
					if(!game.hasPlayer(target=>player.canCompare(target))) return false;
					return player.getHistory('gain',evt=>evt.getParent(event.name)==event).length+player.getHistory('lose',evt=>evt.getParent(event.name)==event&&evt.hs.length).length;
				},
				direct:true,
				content:function*(event,map){
					var player=map.player;
					var trigger=map.trigger;
					var result=yield player.chooseTarget(get.prompt('olsbzhuri'),'与一名角色进行拼点，若你赢，你可以使用其中的一张拼点牌；若你没赢，你失去1点体力或令此技能于本回合失效',(card,player,target)=>{
						return player.canCompare(target);
					}).set('ai',target=>{
						var player=_status.event.player;
						var ts=target.getCards('h').sort((a,b)=>get.number(a)-get.number(b));
						if(get.attitude(player,target)<0){
							var hs=player.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
							var ts=target.getCards('h').sort((a,b)=>get.number(b)-get.number(a));
							if(get.number(hs[0])>get.number(ts[0])) return 1;
							if(get.effect(player,{name:'losehp'},player,player)>0) return Math.random()+0.2;
							if(player.getHp()>2) return Math.random()-0.5;
							return 0;
						}
						return 0;
					});
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('olsbzhuri',target);
						var result2=yield player.chooseToCompare(target);
						if(result2.bool){
							var cards=[result2.player,result2.target].filterInD('d');
							cards=cards.filter(card=>player.hasUseTarget(card));
							if(cards.length){
								var result3=yield player.chooseButton(['是否使用其中的牌？',cards]).set('ai',button=>_status.event.player.getUseValue(button.link));
								if(result3.bool){
									var card=result3.links[0];
									player.$gain2(card,false);
									game.delayx();
									player.chooseUseTarget(true,card,false);
								}
							}
						}
						else{
							var list=lib.skill.olsbranji.getList(trigger);
							var result3=yield player.chooseControl('失去体力','技能失效').set('prompt','逐日：失去1点体力，或令此技能于本回合失效').set('ai',()=>{
								var player=_status.event.player;
								if(player.getHp()>2){
									var list=_status.event.list;
									list.removeArray(player.skipList);
									if(list.includes('phaseDraw')||list.includes('phaseUse')) return '失去体力';
								}
								if(get.effect(player,{name:'losehp'},player,player)>0) return '失去体力';
								return '技能失效';
							}).set('list',list.slice(trigger.getParent().num,list.length));
							player[result3.control=='失去体力'?'loseHp':'addTempSkill'](result3.control=='失去体力'?1:'olsbzhuri_block');
						}
					}
				},
				subSkill:{
					block:{
						charlotte:true,
						mark:true,
						marktext:'<span style="text-decoration: line-through;">日</span>',
						intro:{content:'追不动太阳了'},
					},
				},
			},
			olsbranji:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				prompt2:function(event,player){
					var str='获得技能';
					var num=lib.skill.olsbranji.getNum(event,player);
					if(num>=player.getHp()) str+='【困奋】';
					if(num==player.getHp()) str+='和';
					if(num<=player.getHp()) str+='【诈降】';
					str+='，然后';
					var num1=(player.countCards('h')-player.getHandcardLimit());
					if(num1||player.isDamaged()){
						if(num1) str+=(num1<0?'摸'+get.cnNumber(-num1)+'张牌':'弃置'+get.cnNumber(num1)+'张牌');
						if(num1&&player.isDamaged()) str+='或';
						if(player.isDamaged()) str+=('回复'+player.getDamagedHp()+'点体力');
						str+='，最后';
					}
					str+='你不能回复体力直到你杀死角色。';
					return str;
				},
				check:function(event,player){
					var num=lib.skill.olsbranji.getNum(event,player);
					if(num==player.getHp()) return true;
					return player.getHandcardLimit()-player.countCards('h')>=3||player.getDamagedHp()>=2;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'fire',
				content:function*(event,map){
					var player=map.player;
					var trigger=map.trigger;
					player.awakenSkill('olsbranji');
					var num=lib.skill.olsbranji.getNum(trigger,player);
					if(num>=player.getHp()){
						player.addSkillLog('kunfen');
						player.storage.kunfen=true;
					}
					if(num<=player.getHp()) player.addSkillLog('zhaxiang');
					if(player.countCards('h')!=player.getHandcardLimit()||player.isDamaged()){
						var result,num1=player.countCards('h')-player.getHandcardLimit();
						if(!num1) result={index:1};
						else if(player.isHealthy()) result={index:0};
						else{
							result=yield player.chooseControl('手牌数','体力值').set('choiceList',[
								num1<0?'摸'+get.cnNumber(-num1)+'张牌':'弃置'+get.cnNumber(num1)+'张牌',
								'回复'+(player.getDamagedHp())+'点体力',
							]).set('ai',()=>{
								var player=_status.event.player;
								var list=_status.event.list;
								var num1=get.effect(player,{name:'draw'},player,player);
								var num2=get.recoverEffect(player,player,player);
								return num1*list[0]>num2*list[1]?0:1;
							}).set('list',[-num1,player.getDamagedHp()]);
						}
						if(result.index==0){
							if(num1<0) player.drawTo(player.getHandcardLimit());
							else player.chooseToDiscard(num1,'h',true);
						}
						else{
							player.recover(player.maxHp-player.hp);
						}
					}
					player.when('olsbranjiAfter').then(()=>player.addSkill('olsbranji_norecover'));
					player.when({source:'dieAfter'}).then(()=>player.removeSkill('olsbranji_norecover'));
				},
				derivation:['kunfenx','zhaxiang'],
				getList:function(event){
					return event.getParent().phaseList.map(list=>list.split('|')[0]);
				},
				getNum:function(event,player){
					return lib.skill.olsbranji.getList(event).slice(0,event.getParent().num).filter(name=>player.getHistory('useCard',evt=>evt.getParent(name).name==name).length).length;
				},
				subSkill:{
					norecover:{
						charlotte:true,
						mark:true,
						intro:{content:'不能回复体力'},
						trigger:{player:'recoverBefore'},
						forced:true,
						firstDo:true,
						content:function(){
							trigger.cancel();
						},
						ai:{
							effect:{
								target:function(card,player,target){
									if(get.tag(card,'recover')) return 'zeroplayertarget';
								},
							},
						},
					},
				},
			},
			//界曹彰
			oljiangchi:{
				audio:'rejiangchi',
				trigger:{player:'phaseDrawEnd'},
				direct:true,
				content:function*(event,map){
					var player=map.player;
					var choiceList=[
						'摸一张牌，本回合使用【杀】的次数上限-1，且【杀】不计入手牌上限。',
						'重铸一张牌，本回合使用【杀】无距离限制，且使用【杀】的次数上限+1。',
					],list=['cancel2'];
					if(player.countCards('he',card=>player.canRecast(card))) list.unshift('重铸，+1');
					else choiceList[1]='<span style="opacity:0.5">'+choiceList[1]+'</span>';
					list.unshift('摸牌，-1');
					var result=yield player.chooseControl(list).set('ai',()=>{
						var player=_status.event.player;
						var controls=_status.event.controls.slice();
						if(controls.includes('重铸，+1')&&player.countCards('hs',card=>get.name(card)=='sha'&&player.hasValueTarget(card))>=2) return '重铸，+1';
						return '摸牌，-1';
					}).set('choiceList',choiceList).set('prompt',get.prompt('oljiangchi'));
					if(result.control!='cancel2'){
						player.logSkill('oljiangchi');
						if(result.control=='摸牌，-1'){
							player.draw();
							player.addTempSkill('oljiangchi_less');
							player.addMark('oljiangchi_less',1,false);
						}
						else{
							var result2=yield player.chooseCard('he','将驰：请重铸一张牌',true,(card,player)=>player.canRecast(card));
							if(result2.bool){
								player.recast(result2.cards);
								player.addTempSkill('oljiangchi_more');
								player.addMark('oljiangchi_more',1,false);
							}
						}
					}
				},
				subSkill:{
					less:{
						charlotte:true,
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num-player.countMark('oljiangchi_less');
							},
							ignoredHandcard:function(card,player){
								if(card.name=='sha') return true;
							},
							cardDiscardable:function(card,player,name){
								if(name=='phaseDiscard'&&card.name=='sha') return false;
							},
						},
					},
					more:{
						charlotte:true,
						onremove:true,
						mod:{
							cardUsable:function(card,player,num){
								if(card.name=='sha') return num+player.countMark('oljiangchi_more');
							},
							targetInRange:function (card,player){
								if(card.name=='sha') return true;
							},
						},
					},
				},
			},
			//界简雍
			olqiaoshui:{
				audio:'reqiaoshui',
				inherit:'reqiaoshui',
				filter:function(event,player){
					return player.countCards('h')>0&&!player.hasSkill('olqiaoshui_used');
				},
				content:function(){
					'step 0'
					player.chooseToCompare(target);
					'step 1'
					if(result.bool) player.addTempSkill('qiaoshui3',{player:'phaseUseAfter'});
					else{
						player.addTempSkill('qiaoshui2');
						player.addTempSkill('olqiaoshui_used');
					}
				},
				subSkill:{
					used:{
						charlotte:true,
						mark:true,
						marktext:'<span style="text-decoration: line-through;">说</span>',
						intro:{content:'被迫闭嘴'},
					},
				},
			},
			//界凌统
			olxuanfeng:{
				audio:'xuanfeng',
				audioname:['boss_lvbu3'],
				audioname2:{
					lingtong:'xuanfeng',
					ol_lingtong:'xuanfeng_re_lingtong',
				},
				trigger:{
					player:['loseAfter'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
				},
				filter:function(event,player){
					var evt=event.getl(player);
					return evt&&(evt.es.length||evt.cards2.length>1);
				},
				direct:true,
				content:function(){
					'step 0'
					event.count=2;
					event.logged=false;
					'step 1'
					player.chooseTarget(get.prompt('olxuanfeng'),'弃置一名其他角色的一张牌',function(card,player,target){
						if(player==target) return false;
						return target.countDiscardableCards(player,'he');
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						if(!event.logged){
							player.logSkill('olxuanfeng',result.targets);
							event.logged=true;
						}
						else player.line(result.targets[0],'green');
						player.discardPlayerCard(result.targets[0],'he',true);
						event.count--;
					}
					else event.finish();
					'step 3'
					if(event.count) event.goto(1);
				},
				ai:{
					reverseEquip:true,
					noe:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						},
					},
				},
			},
			xuanfeng_re_lingtong:{audio:2},
		},
		dynamicTranslate:{
		},
		translate:{
			ol_lingtong:'OL界凌统',
			ol_lingtong_prefix:'OL界',
			olxuanfeng:'旋风',
			olxuanfeng_info:'当你一次性失去至少两张牌后，或失去装备区的牌后，你可以依次弃置一至两名其他角色的共计两张牌。',
			ol_jianyong:'OL界简雍',
			ol_jianyong_prefix:'OL界',
			olqiaoshui:'巧说',
			olqiaoshui_info:'出牌阶段，你可与一名其他角色拼点。若你赢，你使用的下一张基本牌或普通锦囊牌可以额外指定任意一名其他角色为目标或减少指定一个目标；若你没赢，此技能于本回合失效且本回合你不能使用锦囊牌。',
			ol_caozhang:'OL界曹彰',
			ol_caozhang_prefix:'OL界',
			oljiangchi:'将驰',
			oljiangchi_info:'摸牌阶段结束时，你可以选择一项：①摸一张牌，本回合使用【杀】的次数上限-1，且【杀】不计入手牌上限。②重铸一张牌，本回合使用【杀】无距离限制，且使用【杀】的次数上限+1。',
			ol_sb_jiangwei:'OL谋姜维',
			ol_sb_jiangwei_prefix:'OL谋',
			olsbzhuri:'逐日',
			olsbzhuri_info:'你的阶段结束时，若你本阶段失去过手牌或得到过牌，则你可以与一名角色拼点。若你赢，你可以使用其中一张拼点牌；若你没赢，你失去1点体力或令此技能于本回合无效。',
			olsbranji:'燃己',
			olsbranji_info:'限定技，结束阶段。若你本回合使用过牌的阶段数大于等于/小于等于体力值，你可以获得技能〖困奋〗/〖诈降〗（同时满足则都获得，以此法获得的〖困奋〗直接修改为非锁定技）。若如此做，你将手牌数调整至手牌上限或将体力值回复至体力上限，然后你不能回复体力直到你杀死角色。',
			kunfenx:'困奋',
			kunfenx_info:'结束阶段开始时，你可以失去1点体力，然后摸两张牌。',

			onlyOL_yijiang1:'OL专属·将1',
			onlyOL_yijiang2:'OL专属·将2',
			onlyOL_sb:'OL专属·上兵伐谋',
		},
	};
});
