import { game } from '../noname.js';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'onlyOL',
		connect:true,
		character:{
			ol_sb_jiangwei:['male','shu',4,['olsbzhuri','olsbranji']],
			ol_caozhang:['male','wei',4,['oljiangchi'],['die_audio:xin_caozhang']],
			ol_jianyong:['male','shu',3,['olqiaoshui','jyzongshi'],['tempname:re_jianyong','die_audio:re_jianyong']],
			ol_lingtong:['male','wu',4,['olxuanfeng'],['die_audio:re_lingtong']],
			ol_sb_guanyu:['male','shu',4,['olsbweilin','olsbduoshou']],
			ol_sb_taishici:['male','wu',4,['olsbdulie','olsbdouchan']],
			ol_gaoshun:['male','qun',4,['olxianzhen','decadejinjiu'],['die_audio:re_gaoshun']],
		},
		characterSort:{
			onlyOL:{
				onlyOL_yijiang1:['ol_jianyong','ol_lingtong','ol_gaoshun'],
				onlyOL_yijiang2:['ol_caozhang'],
				onlyOL_sb:['ol_sb_jiangwei','ol_sb_guanyu','ol_sb_taishici'],
			},
		},
		characterIntro:{
		},
		characterReplace:{
		},
		skill:{
			//界高顺
			olxianzhen:{
				audio:'rexianzhen',
				inherit:'xianzhen',
				async content(event,trigger,player){
					const target=event.target;
					const {result:{bool}}=await player.chooseToCompare(target);
					if(bool){
						player.storage.xinxianzhen=target;
						player.addTempSkill('xinxianzhen2');
					}
					else{
						player.markAuto('olxianzhen_buff',[target]);
						player.addTempSkill('olxianzhen_buff');
					}
				},
				subSkill:{
					buff:{
						charlotte:true,
						onremove:true,
						mod:{
							playerEnabled(card,player,target){
								if(get.name(card,player)=='sha'&&player.getStorage('olxianzhen_buff').includes(target)) return false;
							},
							ignoredHandcard(card,player){
								if(get.name(card,player)=='sha') return true;
							},
							cardDiscardable(card,player,name){
								if(name=='phaseDiscard'&&get.name(card,player)=='sha') return false;
							},
						},
					},
				},
			},
			//新OL谋关羽
			olsbweilin:{
				audio:2,
				enable:'chooseToUse',
				filter(event,player){
					return get.inpileVCardList(info=>{
						const name=info[2];
						if(name!='sha'&&name!='jiu') return false;
						return get.type(name)=='basic';
					}).some(card=>player.hasCard(cardx=>event.filterCard({name:card[2],nature:card[3],cards:[cardx]},player,event),'hes'));
				},
				usable:1,
				chooseButton:{
					dialog(event,player){
						const list=get.inpileVCardList(info=>{
							const name=info[2];
							if(name!='sha'&&name!='jiu') return false;
							return get.type(name)=='basic';
						}).filter(card=>player.hasCard(cardx=>event.filterCard({name:card[2],nature:card[3],cards:[cardx]},player,event),'hes'));
						return ui.create.dialog('威临',[list,'vcard']);
					},
					filter(button,player){
						return _status.event.getParent().filterCard({name:button.link[2],nature:button.link[3]},player,_status.event.getParent());
					},
					check(button){
						if(_status.event.getParent().type!='phase') return 1;
						const player=get.event('player'),value=player.getUseValue({name:button.link[2],nature:button.link[3]});
						if(button.link[2]=='sha'&&!player.getHistory('useCard',evt=>get.type(evt.card)=='basic').length){
							if(value>0) return value+20;
						}
						return value;
					},
					backup(links,player){
						return {
							audio:'olsbweilin',
							filterCard:true,
							popname:true,
							check(card){
								const name=lib.skill.olsbweilin_backup.viewAs.name,color=get.color(card);
								const phase=(_status.event.getParent().type=='phase');
								if(phase&&name=='sha'&&color=='red') return 10-get.value(card);
								if(name=='tao') return 7+[-2,0,2][['black','red','none'].indexOf(color)]-get.value(card);
								return 6-get.value(card);
							},
							position:'hse',
							viewAs:{name:links[0][2],nature:links[0][3]},
							precontent(){
								if(!player.storage.olsbweilin_backup){
									player.storage.olsbweilin_backup=true;
									player.when('useCardToTargeted')
									.filter(evt=>evt.getParent().skill=='olsbweilin_backup'&&evt.getParent().triggeredTargets3.length==evt.targets.length)
									.then(()=>{
										delete player.storage.olsbweilin_backup;
										const targets=trigger.targets.slice().sortBySeat();
										player.line(targets);
										for(const target of targets){
											target.addTempSkill('olsbweilin_wusheng');
											target.markAuto('olsbweilin_wusheng',[get.color(trigger.card)]);
										}
									});
								}
							},
							ai:{
								directHit_ai:true,
								skillTagFilter(player,tag,arg){
									if(get.event('skill')!='olsbweilin_backup') return false;
									return arg&&arg.card&&arg.card.name=='sha'&&get.color(arg.card)=='red';
								},
							},
						}
					},
					prompt(links,player){
						return '将一张牌当作'+(get.translation(links[0][3])||'')+'【'+get.translation(links[0][2])+'】使用';
					}
				},
				hiddenCard(player,name){
					if(!lib.inpile.includes(name)||name!='jiu') return false;
					return get.type(name)=='basic'&&!player.getStat('skill').olsbweilin&&player.countCards('hes');
				},
				ai:{
					fireAttack:true,
					respondSha:true,
					skillTagFilter(player,tag,arg){
						if(arg=='respond') return false;
						if(player.getStat('skill').olsbweilin||!player.countCards('hes')) return false;
					},
					order(item,player){
						if(player&&_status.event.type=='phase'&&player.hasValueTarget({name:'sha'},true,true)){
							let max=0,names=get.inpileVCardList(info=>{
								const name=info[2];
								if(name!='sha'&&name!='jiu') return false;
								return get.type(name)=='basic';
							});
							names=names.map(namex=>{return {name:namex[2],nature:namex[3]}});
							names.forEach(card=>{
								if(player.getUseValue(card)>0){
									let temp=get.order(card);
									if(card.name=='jiu'){
										let cards=player.getCards('hs',cardx=>get.value(cardx)<8);
										cards.sort((a,b)=>get.value(a)-get.value(b));
										if(!cards.some(cardx=>get.name(cardx)=='sha'&&!cards.slice(0,2).includes(cardx))) temp=0;
									}
									if(temp>max) max=temp;
								}
							});
							if(max>0) max+=15;
							return max;
						}
						return 0.5;
					},
					result:{
						player(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						},
					},
				},
				subSkill:{
					backup:{},
					wusheng:{
						charlotte:true,
						onremove:true,
						mod:{
							cardname(card,player){
								if(player.getStorage('olsbweilin_wusheng').includes(get.color(card))) return 'sha';
							},
						},
						intro:{content:'手牌中所有$牌均视为【杀】'},
					},
				},
			},
			olsbduoshou:{
				init(player){
					if(player.getHistory('useCard',evt=>get.color(evt.card)=='red').length) player.addTempSkill('olsbduoshou_used');
				},
				mod:{
					targetInRange(card,player,target){
						if(get.color(card)=='red'&&!player.hasSkill('olsbduoshou_used')) return true;
					},
				},
				audio:2,
				trigger:{
					player:'useCard',
					source:'damageSource',
				},
				filter(event,player){
					if(event.name=='damage') return player.getHistory('sourceDamage').indexOf(event)==0;
					if(get.color(event.card)=='red'&&!player.hasSkill('olsbduoshou_used')) return true;
					return get.type(event.card)=='basic'&&player.getHistory('useCard',evt=>get.type(evt.card)=='basic').indexOf(event)==0;
				},
				forced:true,
				async content(event,trigger,player){
					if(trigger.name=='damage') player.draw();
					else{
						if(get.color(trigger.card)=='red'&&!player.hasSkill('olsbduoshou_used')){
							game.log(trigger.card,'无距离限制');
							player.addTempSkill('olsbduoshou_used');
						}
						if(get.type(trigger.card)=='basic'&&player.getHistory('useCard',evt=>get.type(evt.card)=='basic').indexOf(trigger)==0){
							game.log(trigger.card,'不计入次数上限');
							trigger.addCount=false;
							if(player.stat[player.stat.length-1].card.sha>0) player.stat[player.stat.length-1].card.sha--;
						}
					}
				},
				subSkill:{used:{charlotte:true}},
			},
			//OL谋太史慈
			olsbdulie:{
				audio:2,
				trigger:{target:'useCardToTarget'},
				filter(event,player){
					if(event.player==player||!event.isFirstTarget||event.targets.length!=1) return false;
					if(player.getAttackRange()<=0) return;
					return ['basic','trick'].includes(get.type(event.card));
				},
				prompt2(event,player){
					return '令'+get.translation(event.card)+'额外结算一次，此牌结算完毕后，你摸等同于你攻击范围的牌';
				},
				check(event,player){
					const num=Math.min(5,player.getAttackRange());
					if(get.effect(player,event.card,event.player,player)>0) return true;
					if(event.card.name=='guohe'||event.card.name=='shunshou'||event.card.name=='zhujinqiyuan') return num>(event.effectCount||0);
					if(!get.tag(event.card,'damage')) return true;
					return num>1;
				},
				usable:1,
				async content(event,trigger,player){
					trigger.getParent().effectCount++;
					player.when({global:'useCardAfter'})
					.filter(evt=>evt==trigger.getParent())
					.then(()=>{
						const num=Math.min(5,player.getAttackRange());
						if(num>0) player.draw(num);
					});
				},
			},
			olsbdouchan:{
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				async content(event,trigger,player){
					const card=get.cardPile2(card=>card.name=='juedou');
					if(card) player.gain(card,'gain2');
					else if(player.countMark('olsbdouchan')<game.players.length+game.dead.length) player.addMark('olsbdouchan',1,false);
				},
				mod:{
					attackRange(player,num){
						return num+player.countMark('olsbdouchan');
					},
					cardUsable(card,player,num){
						if(card.name=='sha') return num+player.countMark('olsbdouchan');
					},
				},
				intro:{content:'<li>攻击距离+#<br><li>使用【杀】的次数上限+#'},
			},
			//OL谋关羽
			//可以和手杀谋关羽组成卧龙凤雏了
			olsbfumeng:{
				audio:2,
				trigger:{global:'roundStart'},
				filter(event,player){
					return player.countCards('h',card=>{
						if(_status.connectMode) return true;
						return get.name(card,player)!='sha';
					});
				},
				direct:true,
				async content(event,trigger,player){
					const {result:{bool,cards}}=await player.chooseCard(get.prompt2('olsbfumeng'),[1,Infinity],(card,player)=>{
						return get.name(card,player)!='sha';
					}).set('ai',card=>{
						const player=get.event('player');
						if(player.hasSkill('olsbfumeng')) return 7-get.value(card);
						return 4.5-get.value(card);
					});
					if(!bool) return;
					player.logSkill('olsbfumeng');
					player.addSkill('olsbfumeng_buff');
					player.addGaintag(cards,'olsbfumeng_buff');
				},
				subSkill:{
					buff:{
						charlotte:true,
						mod:{
							cardname:function(card){
								if(get.itemtype(card)=='card'&&card.hasGaintag('olsbfumeng_buff')) return 'sha';
							},
						},
					},
				},
			},
			olsbguidao:{
				audio:2,
				enable:'phaseUse',
				filter(event,player){
					if(event.olsbguidao_num>2) return false;
					const card=new lib.element.VCard({name:'juedou',storage:{olsbguidao:true}});
					return game.hasPlayer(target=>{
						return player.canUse(card,target,false);
					})&&player.countCards('he',cardx=>{
						return player.canRecast(cardx);
					})>=2&&player.countCards('he',cardx=>{
						return get.name(cardx,player)=='sha'&&player.canRecast(cardx);
					})>=event.olsbguidao_num;
				},
				onChooseToUse(event){
					if(!game.online&&!event.olsbguidao_num){
						const player=event.player,history=player.getHistory('custom',evt=>evt.olsbguidao_num);
						if(!history.length) event.set('olsbguidao_num',1);
						else{
							const evt=history[history.length-1];
							event.set('olsbguidao_num',evt.olsbguidao_num);
						}
					}
				},
				filterCard(card,player){
					const num=get.event('olsbguidao_num');
					if(ui.selected.cards.filter(cardx=>get.name(cardx,player)=='sha').length<num&&get.name(card,player)!='sha') return false;
					return player.canRecast(card);
				},
				selectCard:2,
				position:'he',
				check(card){
					const player=get.event('player');
					if(get.name(card,player)=='sha') return 1/(get.value(card)||0.5);
					return 7-get.value(card);
				},
				complexCard:true,
				lose:false,
				discard:false,
				delay:0,
				filterTarget(card,player,target){
					const cardx=new lib.element.VCard({name:'juedou',storage:{olsbguidao:true}});
					return player.canUse(cardx,target,false);
				},
				prompt(){
					let str='重铸两张牌';
					const num=get.event('olsbguidao_num');
					if(num>0) str+='（至少重铸'+get.cnNumber(num)+'张【杀】）';
					str+='并视为使用【决斗】';
					return str;
				},
				async content(event,trigger,player){
					const target=event.target,cards=event.cards;
					player.getHistory('custom').push({olsbguidao_num:cards.filter(card=>get.name(card,player)=='sha').length+1});
					const card=new lib.element.VCard({name:'juedou',storage:{olsbguidao:true}});
					await player.recast(cards);
					player.addTempSkill('olsbguidao_buff');
					if(player.canUse(card,target,false)) player.useCard(card,target,false);
				},
				ai:{
					order(item,player){
						const card=new lib.element.VCard({name:'juedou',storage:{olsbguidao:true}});
						const order=get.order(card,player);
						if(order<=0) return 0;
						return order+0.1;
					},
					result:{
						target(player,target){
							const card=new lib.element.VCard({name:'juedou',storage:{olsbguidao:true}});
							return get.sgn(get.attitude(player,target))*get.effect(target,card,player,player);
						},
					},
				},
				subSkill:{
					buff:{
						charlotte:true,
						trigger:{global:'damageBegin3'},
						filter(event,player){
							if(!event.card||!event.card.storage||!event.card.storage.olsbguidao) return false;
							if(!event.source||event.source!=player) return false;
							const evt=event.getParent('useCard');
							return evt.player==player&&evt.targets.includes(event.player);
						},
						forced:true,
						popup:false,
						async content(event,trigger,player){
							const target=trigger.player;
							const {result:{control}}=await target.chooseControl('【杀】更多','非【杀】更多')
							.set('prompt','归刀：请猜测'+get.translation(player)+'手牌中【杀】与非【杀】牌数哪个更多')
							.set('prompt2','若猜错，则'+get.translation(trigger.card)+'对你造成的伤害+1')
							.set('ai',()=>_status.event.controls.randomGet());
							const goon1=player.countCards('h',card=>get.name(card,player)=='sha')>=player.countCards('h',card=>get.name(card,player)!='sha');
							const goon2=player.countCards('h',card=>get.name(card,player)!='sha')>=player.countCards('h',card=>get.name(card,player)=='sha');
							if((goon1&&control=='【杀】更多')||(goon2&&control=='非【杀】更多')){
								target.popup('判断正确','wood');
								game.log(target,'猜测','#g正确');
							}
							else{
								target.popup('判断错误','fire');
								game.log(target,'猜测','#y错误');
								trigger.increase('num');
							}
						},
					},
				},
			},
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
					const skills = [];
					if(num>=player.getHp()){
						skills.push('kunfen');
						player.storage.kunfen=true;
					}
					if(num<=player.getHp()) skills.push('zhaxiang');
					player.addSkills(skills);
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
							if(num1<0) yield player.drawTo(player.getHandcardLimit());
							else yield player.chooseToDiscard(num1,'h',true);
						}
						else{
							yield player.recover(player.maxHp-player.hp);
						}
					}
					player.addSkill('olsbranji_norecover');
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
			ol_sb_guanyu:'OL谋关羽',
			ol_sb_guanyu_prefix:'OL谋',
			olsbfumeng:'赴梦',
			olsbfumeng_info:'一轮游戏开始时，你可以令任意张手牌的牌名视为【杀】。',
			olsbguidao:'归刀',
			olsbguidao_info:'出牌阶段，你可以重铸两张牌并视为使用一张【决斗】（重铸的【杀】数须比本回合上次发动〖归刀〗重铸的【杀】数多）。目标角色受到此牌伤害时，其须猜测你手牌中牌名为【杀】的牌数量多还是牌名不为【杀】的牌数多，若其猜错，则此【决斗】对其造成的伤害+1。',
			ol_sb_taishici:'OL谋太史慈',
			ol_sb_taishici_prefix:'OL谋',
			olsbdulie:'笃烈',
			olsbdulie_info:'每回合限一次，当你成为其他角色使用基本牌或普通锦囊牌的目标时，你可以令此牌额外结算一次。若如此做，此牌结算完毕后，你摸X张牌（X为你的攻击范围且至多为5）。',
			olsbdouchan:'斗缠',
			olsbdouchan_info:'锁定技，准备阶段，你从牌堆中获得一张【决斗】，若牌堆没有【决斗】，则你的攻击范围和出牌阶段使用【杀】的次数上限+1（增加次数不超过游戏人数）。',
			olsbweilin:'威临',
			olsbweilin_info:'每回合限一次，你可以将一张牌当作任意【杀】或【酒】使用，且你以此法使用的牌指定最后一个目标后，你令所有目标角色本回合与此牌颜色相同的手牌均视为【杀】。',
			olsbduoshou:'夺首',
			olsbduoshou_info:'锁定技。①你每回合使用的第一张红色牌无距离限制。②你每回合使用的第一张基本牌不计入使用次数。③你每回合第一次造成伤害后，你摸一张牌。',
			ol_gaoshun:'OL界高顺',
			ol_gaoshun_prefix:'OL界',
			olxianzhen:'陷阵',
			olxianzhen_info:'出牌阶段限一次，你可以与一名角色拼点。若你赢，本回合你无视该角色的防具且对其使用牌没有次数和距离限制，且当你使用【杀】或普通锦囊牌指定其他角色为唯一目标时可以令该角色也成为此牌的目标；若你没赢，本回合你不能对其使用【杀】且你的【杀】不计入手牌上限。',

			onlyOL_yijiang1:'OL专属·将1',
			onlyOL_yijiang2:'OL专属·将2',
			onlyOL_sb:'OL专属·谋武将',
		},
	};
});
