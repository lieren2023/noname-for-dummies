'use strict';
game.import('play',function(lib,game,ui,get,ai,_status){
	return {
		name:'wuxing',
		arenaReady:function(){
			if(_status.connectMode) return;
			lib.card.list.splice(Math.floor(lib.card.list.length*Math.random()),0,['spade',5,'wuxingpan']);
			if(!_status.video){
				lib.video.push({
					type:'play',
					name:'wuxing'
				});
			}
		},
		video:function(){
			for(var i in this.translate){
				lib.translate[i]=this.translate[i];
			}
			for(var i in this.card){
				lib.card[i]=this.card[i];
			}
			for(var i in this.skill){
				lib.skill[i]=this.skill[i];
			}
		},
		element:{
			player:{
				init:function(player){
					if(player.node.wuxing){
						player.node.wuxing.remove();
					}
					if(_status.video||_status.connectMode) return;
					var node=ui.create.div('.wunature',player);
					var list=['metal','wood','water','fire','soil'];
					var nature=list.randomGet();
					player.wunature=nature;
					node.dataset.nature=nature;
					node.innerHTML=get.translation(nature);
					player.node.wuxing=node;
				}
			},
			card:{
				init:function(card){
					if(_status.video||_status.connectMode) return;
					if(card.name=='wuxingpan') return;
					if(card.wunature) return;
					if(Math.random()>(parseFloat(lib.config.wuxing_num_playpackconfig)||0)) return;
					var node=ui.create.div('.wunature',card);
					var list=['metal','wood','water','fire','soil'];
					var nature=list.randomGet();
					card.wunature=nature;
					node.dataset.nature=nature;
					node.innerHTML=get.translation(nature);
					card.node.wuxing=node;
					if(!card.suit||!card.number){
						card.node.wuxing.style.display='none';
					}
				}
			}
		},
		skill:{
			_shengke:{
				trigger:{target:'useCardToBegin'},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(_status.connectMode) return false;
					return event.card.wunature&&player.wunature;
				},
				content:function(){
					switch(trigger.card.wunature){
						case 'metal':
						switch(player.wunature){
							case 'wood':
								if(player.countCards('he')){
								game.log(player,'被'+get.translation(trigger.card.wunature)+'属性的卡牌克制');
								player.chooseToDiscard('你被金属性卡牌克制，需弃置一张牌',true,'he').ai=get.disvalue;player.popup('金克木')}return;
							case 'water':
								game.log(player,'得到'+get.translation(trigger.card.wunature)+'属性卡牌的加成');
								player.draw();player.popup('金生水');
								return;
						}
						return;
						case 'wood':
						switch(player.wunature){
							case 'soil':
								if(player.countCards('he')){
								game.log(player,'被'+get.translation(trigger.card.wunature)+'属性的卡牌克制');
								player.chooseToDiscard('你被木属性卡牌克制，需弃置一张牌',true,'he').ai=get.disvalue;player.popup('木克土')}return;
							case 'fire':
								game.log(player,'得到'+get.translation(trigger.card.wunature)+'属性卡牌的加成');
								player.draw();player.popup('木生火');
								return;
						}
						return;
						case 'water':
						switch(player.wunature){
							case 'fire':
								if(player.countCards('he')){
								game.log(player,'被'+get.translation(trigger.card.wunature)+'属性的卡牌克制');
								player.chooseToDiscard('你被水属性卡牌克制，需弃置一张牌',true,'he').ai=get.disvalue;player.popup('水克火')}return;
							case 'wood':
								game.log(player,'得到'+get.translation(trigger.card.wunature)+'属性卡牌的加成');
								player.draw();player.popup('水生木');
								return;
						}
						return;
						case 'fire':
						switch(player.wunature){
							case 'metal':
								if(player.countCards('he')){
								game.log(player,'被'+get.translation(trigger.card.wunature)+'属性的卡牌克制');
								player.chooseToDiscard('你被火属性卡牌克制，需弃置一张牌',true,'he').ai=get.disvalue;player.popup('火克金')}return;
							case 'soil':
								game.log(player,'得到'+get.translation(trigger.card.wunature)+'属性卡牌的加成');
								player.draw();player.popup('火生土');
								return;
						}
						return;
						case 'soil':
						switch(player.wunature){
							case 'water':
								if(player.countCards('he')){
								game.log(player,'被'+get.translation(trigger.card.wunature)+'属性的卡牌克制');
								player.chooseToDiscard('你被土属性卡牌克制，需弃置一张牌',true,'he').ai=get.disvalue;player.popup('土克水')}return;
							case 'metal':
								game.log(player,'得到'+get.translation(trigger.card.wunature)+'属性卡牌的加成');
								player.draw();player.popup('土生金');
								return;
						}
						return;
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							switch(card.wunature){
								case 'metal':
								switch(target.wunature){
									case 'wood':if(current!=0) return [1,-0.3];return;
									case 'water':if(current!=0) return [1,0.3];return;
								}
								return;
								case 'wood':
								switch(target.wunature){
									case 'soil':if(current!=0) return [1,-0.3];return;
									case 'fire':if(current!=0) return [1,0.3];return;
								}
								return;
								case 'water':
								switch(target.wunature){
									case 'fire':if(current!=0) return [1,-0.3];return;
									case 'wood':if(current!=0) return [1,0.3];return;
								}
								return;
								case 'fire':
								switch(target.wunature){
									case 'metal':if(current!=0) return [1,-0.3];return;
									case 'soil':if(current!=0) return [1,0.3];return;
								}
								return;
								case 'soil':
								switch(target.wunature){
									case 'water':if(current!=0) return [1,-0.3];return;
									case 'metal':if(current!=0) return [1,0.3];return;
								}
								return;
							}
						}
					}
				}
			},
			wuxingpan_skill:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				lose:false,
				prompt:'选择一张手牌永久改变其五行属性',
				content:function(){
					"step 0"
					player.chooseControl('metal','wood','water','fire','soil');
					"step 1"
					var card=cards[0];
					if(!card.node.wuxing){
						card.node.wuxing=ui.create.div('.wunature',card);
					}


					card.wunature=result.control;
					card.node.wuxing.dataset.nature=result.control;
					card.node.wuxing.innerHTML=get.translation(result.control);
				}
			}
		},
		card:{
			wuxingpan:{
				type:'equip',
				subtype:'equip5',
				skills:['wuxingpan_skill'],
				fullskin:true
			}
		},
		translate:{
			metal:'金',
			wood:'木',
			water:'水',
			soil:'土',
			goldColor:'rgb(236,236,130)',
			woodColor:'rgb(149,202,147)',
			waterColor:'rgb(150,88,201)',
			fireColor:'rgb(236,132,106)',
			soilColor:'rgb(201,159,98)',
			goldColor2:'rgba(236,236,57,0.3)',
			woodColor2:'rgba(33,155,10,0.3)',
			waterColor2:'rgba(29,156,255,0.3)',
			fireColor2:'rgba(255,51,0,0.3)',
			soilColor2:'rgba(163,98,0,0.3)',
			wuxingpan:'五行盘',
			wuxingpan_skill:'五行',
			wuxingpan_skill_info:'出牌阶段限一次，你可以永久改变一张手牌的五行属性',
			wuxingpan_info:'出牌阶段限一次，你可以永久改变一张手牌的五行属性',
		},
		help:{
			'五行生克':'<ul><li>每名角色在游戏开始时随机获得一个属性<li>牌堆中三分之一的牌会随机获得一个属性<li>当一名成为相克属性卡牌的目标时，'+
			'须弃置一张牌<li>当一名角色成为相生的卡牌的目标时，须摸一张牌'+
			'<li>金克木，金生水；<br>木克土，木生火；<br>水克火，水生木；<br>火克金，火生土；<br>土克水，土生金'
		}
	};
});
