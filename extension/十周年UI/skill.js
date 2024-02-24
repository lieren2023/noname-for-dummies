'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	decadeUI.skill = {
		// 短歌修改
		guanxing:{
			audio: 2,
			audioname: ['jiangwei', 're_jiangwei', 're_zhugeliang','ol_jiangwei'],
			trigger: {
				player: 'phaseZhunbeiBegin'
			},
			frequent: true,
			content: function() {
				'step 0'
				if (player.isUnderControl()) {
					game.modeSwapPlayer(player);
				}
				
				var num = Math.min(5, game.countPlayer());
				if (player.hasSkill('yizhi') && player.hasSkill('guanxing')) {
					num = 5;
				}
				var player = event.player;
				if(player.isUnderControl()) game.modeSwapPlayer(player);
				
				var cards = get.cards(num);
				var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				game.broadcast(function(player, cards){
					if (!window.decadeUI) return;
					decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				}, player, cards);
				
				event.switchToAuto = function(){
					var cards = guanXing.cards[0].concat();
					var cheats = [];
					var judges = player.node.judges.childNodes;

					if (judges.length) {
						cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
					}
					
					if (cards.length && cheats.length == judges.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (get.value(cards[i], player) >= 5) {
								cheats.push(cards[i]);
								cards.splice(i, 1)
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							guanXing.move(card, index, 0);
							if (finished) guanXing.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							guanXing.move(card, index, 1);
							if (finished) guanXing.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				};
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				'step 1'
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber()
			},
			ai: {
				threaten: 1.2
			}
		},
		reguanxing:{
			audio: 'guanxing',
			audioname: ['jiangwei','re_jiangwei','re_zhugeliang','gexuan','ol_jiangwei'],
			frequent:true,
			trigger: {
				player:['phaseZhunbeiBegin','phaseJieshuBegin']
			},
			filter:function(event, player, name) {
				if (name == 'phaseJieshuBegin') {
					return player.hasSkill('reguanxing_on');
				}
				return true;
			},
			content:function(){
				'step 0'
				var player = event.player;
				if(player.isUnderControl()) game.modeSwapPlayer(player);
				
				var cards = get.cards(game.countPlayer() < 4 ? 3 : 5);
				var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				game.broadcast(function(player, cards){
					if (!window.decadeUI) return;
					decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				}, player, cards);
				
				event.switchToAuto = function(){
					var cheats = [];
					var cards = guanXing.cards[0].concat();
					var judges;
					
					var next = player.getNext();
					var friend = player;
					if (event.triggername == 'phaseJieshuBegin') {
						friend = next;
						judges = friend.node.judges.childNodes;
						if (get.attitude(player, friend) < 0) friend = null;
					} else {
						judges = player.node.judges.childNodes;
					}
					
					if (judges.length) {
						cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
					}
						
					if (cards.length && cheats.length == judges.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (friend) {
								if (get.value(cards[i], friend) >= 5) {
									cheats.push(cards[i]);
									cards.splice(i, 1)
								}
							} else {
								if (get.value(cards[i], next) < 4) {
									cheats.push(cards[i]);
									cards.splice(i, 1)
								}
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							guanXing.move(card, index, 0);
							if (finished) guanXing.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							guanXing.move(card, index, 1);
							if (finished) guanXing.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				};
				
				if (event.isOnline()) {
					// 判断其他玩家是否有本扩展，否则直接给他结束，不知道有没有效果
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					// 等待其他玩家操作
					event.player.wait();
					// 暂停主机端游戏
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
					/*
					注释说明
					var guanXing = decadeUI.content.chooseGuanXing(
						控制观星的玩家,            	  	// 必选
						[顶部初始化的牌],            	// 必选，可为null，但底部不能为null
						顶部允许控制的牌数范围,        	// 可选，不填根据初始化的牌数量
						[底部初始化的牌],            	// 必选，可为null，但顶部不能为null
						底部允许控制的牌数范围,        	// 可选，不填根据初始化的牌数量
						第一个参数的玩家是否可见);      	// 可选，不设置则根据控制观星的玩家来显示
					
					// undefined 均为可设置，其他为只读或调用
					var properties = {
						caption: undefined,        	// 设置标题
						header1: undefined,			// 牌堆顶的文字
						header2: undefined,			// 牌堆底的文字
						cards: [[],[]],            	// 获取当前观星的牌，不要瞎改
						callback: undefined,    	// 回调函数，返回 true 表示可以点击【确认】按钮，例：guanXing.callback = function(){ return guanXing.cards[1].length == 1; }
													// 注意：此值一旦设置，观星finish后不会自己置顶牌堆顶和牌堆底，需要自行实现
						infohide: undefined,    	// 设置上面第1个参数的玩家是否可见观星的牌
						confirmed: undefined,		// 是否按下确认按钮
						doubleSwitch: undefined,	// 双击切换牌
						finishTime:function(time),	// 指定的毫秒数后完成观星
						finish:function(),        	// 观星完成，在下一个step 中，可以通过 event.cards1 与 event.cards2 访问观星后的牌
						swap:function(s, t),    	// 交换观星中的两个牌
						switch:function(card),   	// 将观星中的牌切换到另一方
						move:function(card, index, moveDown)	// 移动观星的牌到指定的一方位置
					}
					*/
				}
				'step 1'
				if(event.triggername == 'phaseZhunbeiBegin' && event.num1 == 0) player.addTempSkill('reguanxing_on');
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber();
			},
			subSkill:{
				on:{}
			},
		},
		chengxiang:{
			audio: 2,
			frequent: true,
			trigger: {
				player: 'damageEnd'
			},
			content: function() {
				'step 0'
                var chengxiangNum=(event.name=='oldchengxiang'?12:13);
				var cards = get.cards(4);
				var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, 4, false);
				guanXing.doubleSwitch = true;
				guanXing.caption = '【称象】';
				guanXing.header2 = '获得的牌';
				guanXing.callback = function(){
					var num = 0;
					for (var i = 0; i < this.cards[1].length; i++) {
						num += get.number(this.cards[1][i]);
					}
					
					return num > 0 && num <= chengxiangNum;
				};
				
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, 4, false);
					guanXing.caption = '【称象】';
					guanXing.header2 = '获得的牌';
					guanXing.callback = callback;
				}, player, cards, guanXing.callback);
				
				var player = event.player;
				event.switchToAuto = function(){
					var cards = guanXing.cards[0];
					var num, sum, next;
					var index = 0;
					var results = [];
					
					for (var i = 0; i < cards.length; i++) {
						num = 0;
						sum = 0;
						next = i + 1;
						for (var j = i; j < cards.length; j++) {
							if (j != i && j < next)
								continue;
							
							num = sum + get.number(cards[j]);
							if (num <= chengxiangNum) {
								sum = num;
								if (!results[index]) results[index] = [];
								results[index].push(cards[j]);
							}
							
							if (j >= cards.length - 1) index++;
						}
						
						if (results[index] && results[index].length == cards.length) break;
					}
					
					var costs = [];
					for (var i = 0; i < results.length; i++) {
						costs[i] = {
							value: 0,
							index: i,
						};
						for (var j = 0; j < results[i].length; j++) {
							costs[i].value += get.value(results[i][j], player);
							// 如果有队友且有【仁心】且血量不低，优先选择装备牌
							if (player.hasFriend() && player.hasSkill('renxin') && get.type(results[i][j]) == 'equip' && player.hp > 1) {
								costs[i].value += 5;
							}
							
							// 如果自己有延时牌且没有无懈可击，优先选择无懈可击
							if (player.node.judges.childNodes.length > 0 && !player.hasWuxie() && results[i][j] == 'wuxie') {
								costs[i].value += 5;
							}
						}
					}
					
					costs.sort(function(a, b) {
						return b.value - a.value;
					});
					
					var time = 500;
					var result = results[costs[0].index];
					
					for (var i = 0; i < result.length; i++) {
						setTimeout(function(move, finished){
							guanXing.move(move, guanXing.cards[1].length, 1);
							if (finished) guanXing.finishTime(1000);
						}, time, result[i], (i >= result.length - 1));
						time += 500;
					}
				};
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				'step 1'
				if (event.result && event.result.bool) {
					game.cardsDiscard(event.cards1);
					player.gain(event.cards2, 'log', 'gain2');
				}
			},
			ai: {
				maixie: true,
				maixie_hp: true,
				effect: {
					target: function(card, player, target) {
						if (get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							if (target.hp >= 4) return [1, 2];
							if (target.hp == 3) return [1, 1.5];
							if (target.hp == 2) return [1, 0.5];
						}
					}
				}
			}
		},
		xinfu_zuilun: {
			audio: 2,
			trigger: {
				player: 'phaseJieshuBegin',
			},
			check:function(event, player) {
				var num = 0;
				if (player.getHistory('lose', function(evt){
					return evt.type == 'discard';
				}).length) num++;
				if (!player.isMinHandcard()) num++;
				if (!player.getStat('damage')) num++;
				if (num == 3) return player.hp >= 2;
				return true;
			},
			prompt:function(event, player) {
				var num = 3;
				if (player.getHistory('lose', function(evt){
					return evt.type == 'discard';
				}).length) num--;
				if (!player.isMinHandcard()) num--;
				if (!player.getStat('damage')) num--;
				return get.prompt('xinfu_zuilun') + '（可获得' + get.cnNumber(num) + '张牌）'
			},
			content:function() {
				'step 0'
				event.num = 0;
				event.cards = get.cards(3);
				if (player.getHistory('lose', function(evt){
					return evt.type == 'discard';
				}).length) event.num++;
				if (!player.isMinHandcard()) event.num++;
				if (!player.getStat('damage')) event.num++;
				'step 1'
				if (event.num == 0) {
					player.gain(event.cards, 'draw');
					event.finish();
					return;
				} 

				var cards = event.cards;
				var gains = cards.length - event.num;
				
				var zuiLun = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, gains);
				zuiLun.caption = '【罪论】';
				zuiLun.header2 = '获得的牌';
				zuiLun.tip = '可获得' + gains + '张牌<br>' + zuiLun.tip;
				zuiLun.callback = function(){
					return this.cards[1].length == gains; 
				};
				
				game.broadcast(function(player, cards, gains, callback){
					if (!window.decadeUI) return;
					var zuiLun = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, gains);
					zuiLun.caption = '【罪论】';
					zuiLun.header2 = '获得的牌';
					zuiLun.tip = '可获得' + gains + '张牌<br>' + zuiLun.tip;
					zuiLun.callback = callback;
				}, player, cards, gains, zuiLun.callback);
				
				var player = event.player;
				event.switchToAuto = function(){
					var cheats = [];
					var cards = zuiLun.cards[0].concat();
					var stopped = false;
					
					var next = player.getNext();
					var hasFriend = get.attitude(player, next) > 0;
					
					// 判断下家是不是队友，令其生效或者失效
					var judges = next.node.judges.childNodes;
					if (judges.length > 0) cheats = decadeUI.get.cheatJudgeCards(cards, judges, hasFriend);
						
					// 如果有【父荫】优先把好牌给队友
					if (hasFriend && player.hasSkill('xinfu_fuyin')) {
						cards = decadeUI.get.bestValueCards(cards, next);
					} else {
						cards.sort(function(a, b){
							return get.value(a, player) - get.value(b, player);
						});
					}
					
					cards = cheats.concat(cards);
					var time = 500;
					var gainNum = gains;
					for (var i = cards.length - 1; i >= 0; i--) {
						setTimeout(function(card, index, finished, moveDown){
							zuiLun.move(card, index, moveDown ? 1 : 0);
							if (finished) zuiLun.finishTime(1000);
						}, time, cards[i], i, i == 0, gainNum > 0);
						time += 500;
						gainNum--;
					}
				};
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				'step 2'
				event.cards = event.cards2
				if (event.result && event.result.bool) {
					var cards = event.cards1;
					var first = ui.cardPile.firstChild;
					for (var i = 0; i < cards.length; i++) {
						ui.cardPile.insertBefore(cards[i], first);
					}
				}
				'step 3'
				game.updateRoundNumber();
				if (event.cards.length) {
					player.gain(event.cards, 'draw');
					event.finish();
				} else {
					player.chooseTarget('请选择一名角色，与其一同失去1点体力', true, function(card, player, target) {
						return target != player;
					}).ai = function(target) {
						return - get.attitude(_status.event.player, target);
					};
				}
				'step 4'
				player.line(result.targets[0], 'fire');
				player.loseHp();
				result.targets[0].loseHp();
			},
		},
		xunxun: {
			audio: 2,
			trigger: {
				player: 'phaseDrawBegin1'
			},
			content:function(){
				'step 0'
				var cards = get.cards(4);
				var player = event.player;
				var xunxun = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, 2);
				xunxun.caption = '【恂恂】';
				xunxun.header1 = '牌堆底';
				xunxun.header2 = '牌堆顶';
				xunxun.callback = function(){
					return this.cards[0].length == 2 && this.cards[1].length == 2;
				};
				
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var xunxun = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, 2);
					xunxun.caption = '【恂恂】';
					xunxun.header1 = '牌堆底';
					xunxun.header2 = '牌堆顶';
					xunxun.callback = callback;
				}, player, cards, xunxun.callback);

				event.switchToAuto = function(){
					var cards = decadeUI.get.bestValueCards(xunxun.cards[0].concat(), player);
					var time = 500;
					for (var i = 0; i < 2; i++) {
						setTimeout(function(card, index, finished){
							xunxun.move(card, index, 1);
							if (finished) xunxun.finishTime(1000);
						}, time, cards[i], i, i >= 1);
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				
				'step 1'
				var first = ui.cardPile.firstChild;
				var cards = event.cards2;
				for (var i = 0; i < cards.length; i++) {
					ui.cardPile.insertBefore(cards[i], first);
				}
				
				cards = event.cards1;
				for (var i = 0; i < cards.length; i++) {
					ui.cardPile.appendChild(cards[i]);
				}
			},

		},
		
		xinfu_dianhua: {
			audio: 2,
			frequent: true,
			trigger: {
				player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
			},
			filter:function(event, player){
				for (var i = 0; i < lib.suit.length; i++) {
					if (player.hasMark('xinfu_falu_' + lib.suit[i])) return true;
				}
				return false;
			},
			content:function(){
				'step 0'
				var num = 0;
				var player = event.player;
				for (var i = 0; i < lib.suit.length; i++) {
					if (player.hasMark('xinfu_falu_' + lib.suit[i])) num++;
				}
				
				var cards = get.cards(num);
				var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				dialog.caption = '【点化】';
				game.broadcast(function(player, cards){
					if (!window.decadeUI) return;
					decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length).caption = '【点化】';
				}, player, cards);
				
				event.switchToAuto = function(){
					var cheats = [];
					var cards = dialog.cards[0].concat();
					var judges;
					
					var next = player.getNext();
					var friend = player;
					if (event.triggername == 'phaseJieshuBegin') {
						friend = next;
						judges = friend.node.judges.childNodes;
						if (get.attitude(player, friend) < 0) friend = null;
					} else {
						judges = player.node.judges.childNodes;
					}
					
					if (judges.length) {
						cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
					}
						
					if (cards.length && cheats.length == judges.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (friend) {
								if (get.value(cards[i], friend) >= 5) {
									cheats.push(cards[i]);
									cards.splice(i, 1)
								}
							} else {
								if (get.value(cards[i], next) < 4) {
									cheats.push(cards[i]);
									cards.splice(i, 1)
								}
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							dialog.move(card, index, 0);
							if (finished) dialog.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							dialog.move(card, index, 1);
							if (finished) dialog.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				};
				// var dianhua = decadeUI.content.chooseGuanXing(player, cards, cards.length);
				// dianhua.caption = '【点化】';
				// game.broadcast(function(player, cards, callback){
					// if (!window.decadeUI) return;
					// var dianhua = decadeUI.content.chooseGuanXing(player, cards, cards.length);
					// dianhua.caption = '【点化】';
					// dianhua.callback = callback;
				// }, player, cards, dianhua.callback);
				
				// event.switchToAuto = function(){
					// var cards = dianhua.cards[0].concat();
					// var cheats = [];
					// var judges;
					
					// var next = player.getNext();
					// var friend = player;
					// if (event.triggername == 'phaseJieshuBegin') {
						// friend = next;
						// judges = friend.node.judges.childNodes;
						// if (get.attitude(player, friend) < 0) friend = null;
					// } else {
						// judges = player.node.judges.childNodes;
					// }
					
					// if (judges.length > 0) cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
					
					// if (friend) {
						// cards = decadeUI.get.bestValueCards(cards, friend);
					// } else {
						// cards.sort(function(a, b){
							// return get.value(a, next) - get.value(b, next);
						// });
					// }

					// cards = cheats.concat(cards);
					// var time = 500;
					// for (var i = 0; i < cards.length; i++) {
						// setTimeout(function(card, index, finished){
							// dianhua.move(card, index, 0);
							// if (finished) dianhua.finishTime(1000);
						// }, time, cards[i], i, i >= cards.length - 1);
						// time += 500;
					// }
				// }
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				
				'step 1'
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber();
			},
			ai:{
				threaten:2.2
			},
		},
		zongxuan: {
			audio: 2,
			frequent: false,
			trigger: {
				player: 'loseAfter'
			},
			check:function(event){
				var cards = [];
				for (var i = 0; i < event.cards2.length; i++) {
					if (get.position(event.cards2[i]) == 'd') {
						cards.push(event.cards2[i]);
					}
				}
				
				var player = event.player;
				
				if (_status.currentPhase == player) {
					for (var i = 0; i < cards.length; i++) {
						if (get.value(cards[i], event.player) > 4) return true; 
					}
				} else if (_status.currentPhase) {
					var next = _status.currentPhase.getNext();
					var judges = next.node.judges.childNodes;
					if (get.attitude(player, next) > 0) {
						if (judges.length > 0) {
							for (var j = 0; j < judges.length; j++) {
								var judge = get.judge(judges[j]);
								for (var i = 0; i < cards.length; i++) {
									if (judge(cards[i]) >= 0) return true;
								}
							}
						} else {
							for (var i = 0; i < cards.length; i++) if (get.value(cards[i], next) > 4) return true; 
						}
					} else {
						if (judges.length > 0) {
							for (var j = 0; j < judges.length; j++) {
								var judge = get.judge(judges[j]);
								for (var i = 0; i < cards.length; i++) {
									if (judge(cards[i]) < 0) return true;
								}
							}
						} else {
							for (var i = 0; i < cards.length; i++) if (get.value(cards[i], next) < 4) return true;
						}
						
					}
				}
				
				return false;
			},
			filter:function(event, player) {
				if (event.type != 'discard') return false;
				for (var i = 0; i < event.cards2.length; i++) {
					if (get.position(event.cards2[i]) == 'd') {
						return true;
					}
				}
				return false;
			},
			content:function() {
				'step 0'
				var cards = [];
				for (var i = 0; i < trigger.cards2.length; i++) {
					var card = trigger.cards2[i];
					if (get.position(card, true) == 'd') {
						cards.push(card);
						clearTimeout(card.timeout);
						card.classList.remove('removing');
						// 防止因为限制结算速度，而导致牌提前进入弃牌堆
					}
				}
				
				if (!cards.length) return;
				var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				dialog.caption = '【纵玄】';
				dialog.header1 = '弃牌堆';
				dialog.header2 = '牌堆顶';
				dialog.lockCardsOrder(0);
				dialog.callback = function(){ return this.cards[1].length > 0; };
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var zongxuan = decadeUI.content.chooseGuanXing(player, cards, cards.length);
					dialog.caption = '【纵玄】';
					dialog.header1 = '弃牌堆';
					dialog.header2 = '牌堆顶';
					dialog.lockCardsOrder(0);
					dialog.callback = callback;
				}, player, cards, dialog.callback);
				
				event.switchToAuto = function(){
					var parent = event.parent;
					while (parent != null && parent.name != 'phaseDiscard') parent = parent.parent;
					
					var cards = dialog.cards[0].concat();
					var cheats = [];
					var next = player.getNext();
					var hasFriend = get.attitude(player, next) > 0;
					
					if (parent) {
						var hasZhiYan = player.hasSkill('zhiyan');	//如果有【直言】，AI 1000%肯定会用这个技能
						var judges = next.node.judges.childNodes;
						if (judges > 0 && hasZhiYan && cards.length > 1) {
							cheats = decadeUI.get.cheatJudgeCards(cards, judges, hasFriend);
						}
					}
					
					if (cards.length > 0) {
						cards.sort(function(a, b){
							return get.value(b, player) - get.value(a, player);
						});
						cheats.splice(0, 0, cards.shift());
						
						var cost;
						for (var i = 0; i < cards.length; i++) {
							if (hasFriend) {
								if (get.value(cards[i], next) >= 5) cheats.push(cards[i]);
							} else {
								if (get.value(cards[i], next) < 5) cheats.push(cards[i]);
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							dialog.move(card, index, 1);
							if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);;
						}, time, cheats[i], i, (i >= cheats.length - 1));
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				
				'step 1'
				var first = ui.cardPile.firstChild;
				var cards = event.cards2;
				for (var i = 0; i < cards.length; i++) {
					ui.cardPile.insertBefore(cards[i], first);
				}
				
				cards = event.cards1;
				for (var i = 0; i < cards.length; i++) {
					ui.discardPile.appendChild(cards[i]);
				}
				
				game.log(player, '将' + get.cnNumber(event.num2) + '张牌置于牌堆顶');
			},
		},
		identity_junshi: {
			name:'军师',
			mark:true,
			silent:true,
			intro:{ content:'准备阶段开始时，可以观看牌堆顶的三张牌，然后将这些牌以任意顺序置于牌堆顶或牌堆底' },
			trigger:{
				player:'phaseZhunbeiBegin'
			},
			content:function(){
				"step 0"
				if (player.isUnderControl()) {
					game.modeSwapPlayer(player);
				}
				var num = 3;
				var cards = get.cards(num);
				var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				guanxing.caption = '【军师】';
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
					guanxing.caption = '【军师】';
					guanxing.callback = callback;
				}, player, cards, guanxing.callback);
				
				event.switchToAuto = function(){
					var cards = guanxing.cards[0].concat();
					var cheats = [];
					var judges = player.node.judges.childNodes;

					if (judges.length) cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
					if (cards.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (get.value(cards[i], player) >= 5) {
								cheats.push(cards[i]);
								cards.splice(i, 1)
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 0);
							if (finished) guanxing.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 1);
							if (finished) guanxing.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				"step 1"
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber();
			},
		},
		wuxin:{
			audio: 2,
			trigger:{ 
				player:'phaseDrawBegin1' 
			},
			content:function(){
				var num = get.population('qun');
				if (player.hasSkill('huangjintianbingfu')) {
					num+=player.getExpansions('huangjintianbingfu').length;
				}
				
				var cards = get.cards(num);
				var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
				dialog.caption = '【悟心】';
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
					dialog.caption = '【悟心】';
					dialog.callback = callback;
				}, player, cards, dialog.callback);
				
				event.switchToAuto = function(){
					var cards = dialog.cards[0].concat();
					var cheats = [];
					
					var next = player.getNext();
					var friend = player;
					var judges = friend.node.judges.childNodes;
					if (judges.length > 0) cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
					
					if (friend) {
						cards = decadeUI.get.bestValueCards(cards, friend);
					} else {
						cards.sort(function(a, b){
							return get.value(a, next) - get.value(b, next);
						});
					}

					cards = cheats.concat(cards);
					var time = 500;
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							dialog.move(card, index, 0);
							if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);;
						}, time, cards[i], i, i >= cards.length - 1);
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
			},
		},
		luoying: {
			group: ['luoying_discard', 'luoying_judge'],
			subfrequent: ['judge'],
			subSkill: {
				discard: {
					audio: 2,
					trigger: {
						global: 'loseAfter'
					},
					filter: function(event, player) {
						if (event.type != 'discard') return false;
						if (event.player == player) return false;
						for (var i = 0; i < event.cards2.length; i++) {
							if (get.suit(event.cards2[i], event.player) == 'club' && get.position(event.cards2[i], true) == 'd') {
								return true;
							}
						}
						return false;
					},
					// direct: true,
					content: function() {
						"step 0"
						if (trigger.delay == false) game.delay();
						"step 1"
						var cards = [];
						for (var i = 0; i < trigger.cards2.length; i++) {
							var card = trigger.cards2[i];
							if (get.suit(card, trigger.player) == 'club' && get.position(card, true) == 'd') {
								cards.push(card);
								clearTimeout(card.timeout);
								card.classList.remove('removing');
								// 防止因为限制结算速度，而导致牌提前进入弃牌堆
							}
						}
						
						var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
						dialog.caption = '【落英】';
						dialog.header1 = '弃牌堆';
						dialog.header2 = '获得牌';
						dialog.tip = '请选择要获得的牌';
						dialog.lockCardsOrder(0);
						dialog.cards[1] = dialog.cards[0];
						dialog.cards[0] = [];
						dialog.update();
						dialog.onMoved();
						dialog.callback = function(){ return true; };
						game.broadcast(function(player, cards, callback){
							if (!window.decadeUI) return;
							var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
							dialog.caption = '【落英】';
							dialog.header1 = '弃牌堆';
							dialog.header2 = '获得牌';
							dialog.tip = '请选择要获得的牌';
							dialog.lockCardsOrder(0);
							dialog.cards[1] = dialog.cards[0];
							dialog.cards[0] = [];
							dialog.update();
							dialog.onMoved();
							dialog.callback = callback;
						}, player, cards, dialog.callback);
						
						event.switchToAuto = function(){
							var cards = dialog.cards[1].concat();
							var time = 500;
							
							if (cards.length) {
								var discards = [];
								for (var i = 0; i < cards.length; i++) {
									if (get.value(cards[i]) < 0) {
										discards.push(cards[i]);
									}
								}
								
								if (discards.length) {
									for (var i = 0; i < discards.length; i++) {
										setTimeout(function(card, index, finished){
											dialog.move(card, index, 0);
											if (finished) dialog.finishTime(1000);
										}, time, discards[i], i, i >= discards.length - 1);
										time += 500;
									}
								} else {
									dialog.finishTime(1000);
								}
								
							} else {
								dialog.finishTime(1000);
							}
						}
						
						if (event.isOnline()) {
							event.player.send(function(){
								if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
							}, event.player);
							
							event.player.wait();
							decadeUI.game.wait();
						} else if (!event.isMine()) {
							event.switchToAuto();
						}
						"step 2"
						game.cardsDiscard(event.cards1);
						if (event.cards2) {
							// player.logSkill(event.name);
							player.gain(event.cards2, 'gain2', 'log');
						}
					},
				},
				judge: {
					audio: 2,
					trigger: {
						global: 'cardsDiscardAfter'
					},
					// direct: true,
					check: function(event, player) {
						return event.cards[0].name != 'du';
					},
					filter: function(event, player) {
						var evt = event.getParent().relatedEvent;
						if (!evt || evt.name != 'judge') return;
						if (evt.player == player) return false;
						if (get.position(event.cards[0], true) != 'd') return false;
						return (get.suit(event.cards[0]) == 'club');
					},
					content: function() {
						"step 0"
						var cards = trigger.cards;
						
						var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
						dialog.caption = '【落英】';
						dialog.header1 = '弃牌堆';
						dialog.header2 = '获得牌';
						dialog.tip = '请选择要获得的牌';
						dialog.lockCardsOrder(0);
						dialog.callback = function(){ return true; };
						game.broadcast(function(player, cards, callback){
							if (!window.decadeUI) return;
							var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
							dialog.caption = '【落英】';
							dialog.header1 = '弃牌堆';
							dialog.header2 = '获得牌';
							dialog.tip = '请选择要获得的牌';
							dialog.lockCardsOrder(0);
							dialog.callback = callback;
						}, player, cards, dialog.callback);
						
						event.switchToAuto = function(){
							var cards = dialog.cards[0].concat();
							var time = 500;
							for (var i = 0; i < cards.length; i++) {
								if (get.value(cards[i], player) < 0) continue;
								setTimeout(function(card, index, finished){
									dialog.move(card, index, 1);
									if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);;
								}, time, cards[i], i, i >= cards.length - 1);
								time += 500;
							}
						}
						
						if (event.isOnline()) {
							event.player.send(function(){
								if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
							}, event.player);
							
							event.player.wait();
							decadeUI.game.wait();
						} else if (!event.isMine()) {
							event.switchToAuto();
						}
						"step 1"
						game.cardsDiscard(event.cards1);
						if (event.cards2) {
							// player.logSkill(event.name);
							player.gain(event.cards2, 'gain2', 'log');
						}
					}
				},
			}
		},
		
	};
	
	decadeUI.inheritSkill = {
		// 短歌修改
		xz_xunxun: {
			audio: 2,
			trigger: {
				player: 'phaseDrawBegin1'
			},
			filter:function (event,player){
				var num = game.countPlayer(function(current){
					return current.isDamaged();
				});
				return num >= 1 && !player.hasSkill('xunxun');
			},
			content: decadeUI.skill.xunxun.content,
		},
		reluoying: {
			subSkill: {
				discard: {
					audio: 'reluoying',
					trigger: {
						global: 'loseAfter'
					},
					filter: decadeUI.skill.luoying.subSkill.discard.filter,
					// direct: true,
					content: decadeUI.skill.luoying.subSkill.discard.content,
				},
				judge: {
					audio: 'reluoying',
					trigger: {
						global: 'cardsDiscardAfter'
					},
					// direct: true,
					check: decadeUI.skill.luoying.subSkill.judge.check,
					filter: decadeUI.skill.luoying.subSkill.judge.filter,
					content: decadeUI.skill.luoying.subSkill.judge.content,
				}
			}
		},
		nk_shekong: {
			content:function(){
				'step 0'
				event.cardsx = cards.slice(0);
				var num = get.cnNumber(cards.length);
				var trans = get.translation(player);
				var prompt = ('弃置' + num + '张牌，然后' + trans + '摸一张牌');
				if (cards.length > 1) prompt += ('；或弃置一张牌，然后' + trans + '摸' + num + '张牌');
				var next = target.chooseToDiscard(prompt, 'he', true);
				next.numx = cards.length;
				next.selectCard = function() {
					if (ui.selected.cards.length > 1) return _status.event.numx;
					return [1, _status.event.numx];
				};
				next.complexCard = true;
				next.ai = function(card) {
					if (ui.selected.cards.length == 0 || (_status.event.player.countCards('he',
					function(cardxq) {
						return get.value(cardxq) < 7;
					}) >= _status.event.numx)) return 7 - get.value(card);
					return - 1;
				};
				'step 1'
				if (result.bool) {
					if (result.cards.length == cards.length) player.draw();
					else player.draw(cards.length);
					event.cardsx.addArray(result.cards);
					for (var i = 0; i < event.cardsx.length; i++) {
						if (get.position(event.cardsx[i]) != 'd') event.cardsx.splice(i--, 1);
					}
				} else event.finish();
				'step 2'
				if (event.cardsx.length) {
					var cards = event.cardsx;
					var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
					dialog.caption = '【设控】';
					game.broadcast(function(player, cards, callback){
						if (!window.decadeUI) return;
						var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length);
						dialog.caption = '【设控】';
						dialog.callback = callback;
					}, player, cards, dialog.callback);
					
					event.switchToAuto = function(){
						var cards = dialog.cards[0].concat();
						var cheats = [];
						var judges;
						
						var next = player.getNext();
						var friend = (get.attitude(player, next) < 0) ? null : next;
						judges = next.node.judges.childNodes;
						
						if (judges.length > 0) cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
						
						if (friend) {
							cards = decadeUI.get.bestValueCards(cards, friend);
						} else {
							cards.sort(function(a, b){
								return get.value(a, next) - get.value(b, next);
							});
						}

						cards = cheats.concat(cards);
						var time = 500;
						for (var i = 0; i < cards.length; i++) {
							setTimeout(function(card, index, finished){
								dialog.move(card, index, 0);
								if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);;
							}, time, cards[i], i, i >= cards.length - 1);
							time += 500;
						}
					}
					
					if (event.isOnline()) {
						event.player.send(function(){
							if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
						}, event.player);
						
						event.player.wait();
						decadeUI.game.wait();
					} else if (!event.isMine()) {
						event.switchToAuto();
					}
				} else event.finish();
			}
		},
		kamome_huanmeng:{
			content:function(){
				"step 0"
				if (player.isUnderControl()) {
					game.modeSwapPlayer(player);
				}
				var num = 1 + player.countCards('e');;
				var cards = get.cards(num);
				var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				guanxing.caption = '【幻梦】';
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
					guanxing.caption = '【幻梦】';
					guanxing.callback = callback;
				}, player, cards, guanxing.callback);
				
				event.switchToAuto = function(){
					var cards = guanxing.cards[0].concat();
					var cheats = [];
					var judges = player.node.judges.childNodes;

					if (judges.length) cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
					if (cards.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (get.value(cards[i], player) >= 5) {
								cheats.push(cards[i]);
								cards.splice(i, 1)
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 0);
							if (finished) guanxing.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 1);
							if (finished) guanxing.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				"step 1"
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber()
			},
		},
		
	};
	
	decadeUI.skill_new = {
		// Show-K修改
		nsanruo: {
			unique: true,
			init: function (player) {
				if (!player.node.handcards1.cardMod) {
					player.node.handcards1.cardMod = {};
				}
				if (!player.node.handcards2.cardMod) {
					player.node.handcards2.cardMod = {};
				}
				var cardMod = function (card) {
					if (get.info(card).multitarget) return;
					if (card.name == 'sha' || get.type(card) == 'trick') return ['暗弱', '杀或普通锦囊牌对你不可见'];
				};
				player.node.handcards1.cardMod.nsanruo = cardMod;
				player.node.handcards2.cardMod.nsanruo = cardMod;
				player.node.handcards1.classList.add('nsanruo');
				player.node.handcards2.classList.add('nsanruo');
				if (!ui.css.nsanruo) {
					ui.css.nsanruo = lib.init.sheet(
						'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"])>*,' +
						'.handcards.nsanruo>.card[data-card-name="sha"]>*{visibility:hidden !important;}',
						'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"]),' +
						'.handcards.nsanruo>.card[data-card-name="sha"]{background-image: url('+lib.assetURL+'image/character/ns_liuzhang.jpg'+') !important;background-position: center;background-size: cover !important;}'
					);
				}
			},
			onremove: function (player) {
				player.node.handcards1.classList.remove('nsanruo');
				player.node.handcards2.classList.remove('nsanruo');
				delete player.node.handcards1.cardMod.nsanruo;
				delete player.node.handcards2.cardMod.nsanruo;
			},
			ai: {
				neg: true
			}
		},
		
		xinfu_pingcai:{
			subSkill:{backup:{}},
			wolong_card:function(){
				'step 0'
				var ingame=game.hasPlayer(function(current){
					return ['sp_zhugeliang','re_sp_zhugeliang','ol_sp_zhugeliang','prp_zhugeliang'].contains(current.name)||['sp_zhugeliang','re_sp_zhugeliang','ol_sp_zhugeliang','prp_zhugeliang'].contains(current.name2);
				})?true:false;
				var prompt='请选择';
				prompt+=ingame?'至多两名':'一名';
				prompt+='角色，对其造成1点火焰伤害';
				var range=ingame?[1,2]:[1,1]
				player.chooseTarget(prompt,range).set('ai',function(target){
					var player=_status.event.player;
					return get.damageEffect(target,player,player,'fire');
				});
				'step 1'
				if(result.bool&&result.targets.length){
					player.line(result.targets,'fire');
					result.targets.sortBySeat();
					for(var i=0;i<result.targets.length;i++){
						result.targets[i].damage('fire');
					}
				}
			},
			fengchu_card:function(){
				'step 0'
				var ingame=game.hasPlayer(function(current){
					return ['re_pangtong','pangtong','ol_pangtong'].contains(current.name)||['re_pangtong','pangtong','ol_pangtong'].contains(current.name2);
				})?true:false;
				var prompt='请选择';
				prompt+=ingame?'至多四名':'至多三名';
				prompt+='要横置的角色';
				var range=ingame?[1,4]:[1,3]
				player.chooseTarget(prompt,range).set('ai',function(target){
					var player=_status.event.player;
					return get.effect(target,{name:'tiesuo'},player,player)
				});
				'step 1'
				if(result.bool&&result.targets.length){
					player.line(result.targets,'green');
					result.targets.sortBySeat();
					for(var i=0;i<result.targets.length;i++){
						result.targets[i].link();
					}
				}
			},
			xuanjian_card:function(){
				'step 0'
				event.ingame=game.hasPlayer(function(current){
					return ['re_xushu','xin_xushu','xushu','dc_xushu'].contains(current.name)||['re_xushu','xin_xushu','xushu','dc_xushu'].contains(current.name2);
				})?true:false;
				var prompt='请选择一名角色，令其回复1点体力并摸一张牌';
				prompt+=event.ingame?'，然后你摸一张牌。':'。';
				player.chooseTarget(prompt).set('ai',function(target){
					var player=_status.event.player;
					return get.attitude(player,target)*(target.isDamaged()?2:1);
				});
				'step 1'
				if(result.bool&&result.targets.length){
					var target=result.targets[0];
					player.line(target,'thunder');
					target.draw();
					target.recover();
					if(event.ingame) player.draw();
				}
			},
			shuijing_card:function(){
				'step 0'
				event.ingame=game.hasPlayer(function(current){
					return current.name=='simahui'||current.name2=='simahui';
				})?true:false;
				var prompt='将一名角色装备区中的';
				prompt+=event.ingame?'一张牌':'防具牌';
				prompt+='移动到另一名角色的装备区中';
				var next=player.chooseTarget(2,function(card,player,target){
					if(ui.selected.targets.length){
						if(!_status.event.ingame){
							var cards=ui.selected.targets[0].getEquips(2);
							return cards.some(card=>target.canEquip(card))
						}
						var from=ui.selected.targets[0];
						if(target.isMin()) return false;
						var es=from.getCards('e');
						for(var i=0;i<es.length;i++){
							if(target.canEquip(es[i])) return true;
						}
						return false;
					}
					else{
						if(!event.ingame){
							if(target.getEquips(2).length) return true;
							return false;
						}
						return target.countCards('e')>0;
					}
				});
				next.set('ingame',event.ingame)
				next.set('ai',function(target){
					var player=_status.event.player;
					var att=get.attitude(player,target);
					if(ui.selected.targets.length==0){
						if(att<0){
							if(game.hasPlayer(function(current){
								if(get.attitude(player,current)>0){
									var es=target.getCards('e');
									for(var i=0;i<es.length;i++){
										if(current.canEquip(es[i])) return true;
									}
									return false;
								}
							}))	return -att;
						}
						return 0;
					}
					if(att>0){
						var es=ui.selected.targets[0].getCards('e');
						var i;
						for(i=0;i<es.length;i++){
							if(target.canEquip(es[i])) break;
						}
						if(i==es.length) return 0;
					}
					return -att*get.attitude(player,ui.selected.targets[0]);
				});
				next.set('multitarget',true);
				next.set('targetprompt',['被移走','移动目标']);
				next.set('prompt',prompt);
				'step 1'
				if(result.bool){
					player.line2(result.targets,'green');
					event.targets=result.targets;
				}
				else event.finish();
				'step 2'
				game.delay();
				'step 3'
				if(targets.length==2){
					if(!event.ingame){
						var cards=targets[0].getEquips(2);
						if(cards.length==1) event._result={
							bool:true,
							links:cards,
						}
						else{
							player.choosePlayerCard('e',true,function(button){
								return get.equipValue(button.link);
							},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
								if(!get.subtypes(button.link,false).contains('equip2')) return false;
								var targets1=_status.event.targets1;
								return targets1.canEquip(button.link);
							});
						}
					}
					else{
						player.choosePlayerCard('e',true,function(button){
							return get.equipValue(button.link);
						},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
							var targets1=_status.event.targets1;
							return targets1.canEquip(button.link);
						});
					}
				}
				else event.finish();
				'step 4'
				if(result.bool&&result.links.length){
					var link=result.links[0];
					if(get.position(link)=='e')	event.targets[1].equip(link);
					else if(link.viewAs) event.targets[1].addJudge({name:link.viewAs},[link]);
					else event.targets[1].addJudge(link);
					event.targets[0].$give(link,event.targets[1],false)
					game.delay();
				}
			},
			audio:true,
			enable:"phaseUse",
			usable:1,
			chooseButton:{
				dialog:function(){
					var list=["wolong","fengchu","xuanjian","shuijing"];
					for(var i=0;i<list.length;i++){
						list[i]=['','',list[i]+'_card'];
					}
					return ui.create.dialog('评才',[list,'vcard']);
				},
				check:function(button){
					var name=button.link[2];
					var player=_status.event.player;
					if(name=='xuanjian_card'){
						if(game.hasPlayer(function(current){
							return current.isDamaged()&&current.hp<3&&get.attitude(player,current)>1;
						})) return 1+Math.random();
						else return 1;
					}
					else if(name=='wolong_card'){
						if(game.hasPlayer(function(current){
							return get.damageEffect(current,player,player,'fire')>0;
						})) return 1.2+Math.random();
						else return 0.5;
					}
					else return 0.6;
				},
				backup:function(links,player){
					return {
						audio:'xinfu_pingcai',
						filterCard:()=>false,
						selectCard:-1,
						takara:links[0][2],
						content:lib.skill.xinfu_pingcai.contentx,
					}
				},
			},
			contentx:function(){
				"step 0"
				event.pingcai_delayed=true;
				var name=lib.skill.xinfu_pingcai_backup.takara;
				event.cardname=name;
				event.videoId=lib.status.videoId++;
				if(player.isUnderControl()){
					game.swapPlayerAuto(player);
				}
				var switchToAuto=function(){
					game.pause();
					game.countChoose();
					event.timeout=setTimeout(function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
						};
						game.resume();
					},9000);
				};
				var createDialog=function(player,id,name){
					if(player==game.me) return;
					var dialog=ui.create.dialog('forcebutton','hidden');
					var str=get.translation(player)+'正在擦拭宝物上的灰尘…';
					var canSkip=(!_status.connectMode);
					if(canSkip) str+='<br>（点击宝物可以跳过等待AI操作）';
					dialog.textPrompt=dialog.add('<div class="text center">'+str+'</div>');
					dialog.classList.add('fixed');
					dialog.classList.add('scroll1');
					dialog.classList.add('scroll2');
					dialog.classList.add('fullwidth');
					dialog.classList.add('fullheight');
					dialog.classList.add('noupdate');
					dialog.videoId=id;
					
					var canvas2=document.createElement('canvas');
					dialog.canvas_viewer=canvas2;
					dialog.appendChild(canvas2);
					canvas2.classList.add('grayscale');
					canvas2.style.position="absolute";
					canvas2.style.width='249px';
					canvas2.style.height='249px';
					canvas2.style['border-radius']='6px';
					canvas2.style.left="calc(50% - 125px)";
					canvas2.style.top="calc(50% - 125px)";
					canvas2.width=249;
					canvas2.height=249;
					canvas2.style.border='3px solid';
					
					var ctx2=canvas2.getContext('2d');
					var img=new Image();
					img.src=lib.assetURL+'image/card/'+name+'.png';
					img.onload=function(){
						ctx2.drawImage(this,0,0,this.width,this.height,0,0,canvas2.width,canvas2.height);
					}
					if(canSkip){
						var skip=function(){
							if(event.pingcai_delayed){
								delete event.pingcai_delayed;
								clearTimeout(event.timeout);
								event._result={
									bool:true,
								};
								game.resume();
								canvas2.removeEventListener(lib.config.touchscreen?'touchend':'click',skip);
							}
						};
						canvas2.addEventListener(lib.config.touchscreen?'touchend':'click',skip);
					}
					dialog.open();
				};
				var chooseButton=function(id,name){
					var event=_status.event;
					_status.xinfu_pingcai_finished=false;
					
					var dialog=ui.create.dialog('forcebutton','hidden');
					dialog.textPrompt=dialog.add('<div class="text center">擦拭掉宝物上的灰尘吧！</div>');
					event.switchToAuto=function(){
						event._result={
							bool:_status.xinfu_pingcai_finished,
						};
						game.resume();
						_status.imchoosing=false;
						_status.xinfu_pingcai_finished=true;
					};
					dialog.classList.add('fixed');
					dialog.classList.add('scroll1');
					dialog.classList.add('scroll2');
					dialog.classList.add('fullwidth');
					dialog.classList.add('fullheight');
					dialog.classList.add('noupdate');
					dialog.videoId=id;
					
					var canvas=document.createElement('canvas');
					var canvas2=document.createElement('canvas');
					
					dialog.appendChild(canvas2);
					dialog.appendChild(canvas);
					
					canvas.style.position="absolute";
					canvas.style.width='249px';
					canvas.style.height='249px';
					canvas.style['border-radius']='6px';
					canvas.style.left="calc(50% - 125px)";
					canvas.style.top="calc(50% - 125px)";
					canvas.width=249;
					canvas.height=249;
					canvas.style.border='3px solid';
					
					canvas2.style.position="absolute";
					canvas2.style.width='249px';
					canvas2.style.height='249px';
					canvas2.style['border-radius']='6px';
					canvas2.style.left="calc(50% - 125px)";
					canvas2.style.top="calc(50% - 125px)";
					canvas2.width=249;
					canvas2.height=249;
					canvas2.style.border='3px solid';
					
					var ctx=canvas.getContext('2d');
					var ctx2=canvas2.getContext('2d');
					
					var img=new Image();
					img.src=lib.assetURL+'image/card/'+name+'.png';
					img.onload=function(){
						ctx2.drawImage(this,0,0,this.width,this.height,0,0,canvas2.width,canvas2.height);
					}
					
					ctx.fillStyle='lightgray';
					ctx.fillRect(0,0,canvas.width,canvas.height);
					
					// 适配手机和电脑不同缩放比例：/ game.documentZoom
					canvas.onmousedown=function(ev){
						//if(_status.xinfu_pingcai_finished) return;
						canvas.onmousemove=function(e){
							if(_status.xinfu_pingcai_finished) return;
							ctx.beginPath();
							ctx.clearRect(e.offsetX / game.documentZoom - 16, e.offsetY / game.documentZoom - 16, 32, 32);
							var data=ctx.getImageData(canvas.width*0.1,canvas.height*0.1,canvas.width*0.8,canvas.height*0.8).data;
							var sum=0;
							for(var i=3;i<data.length;i+=4){
								if(data[i]==0){
									sum++;
								}
							}
							if(sum>=(canvas.width*canvas.height)*0.6){
								//ctx.clearRect(0,0,canvas.width,canvas.height);
								if(!_status.xinfu_pingcai_finished){
									_status.xinfu_pingcai_finished=true;
									event.switchToAuto();
								}
							}
						}
					}
					
					// 适配手机和电脑不同缩放比例：/ game.documentZoom
					canvas.ontouchstart=function(ev){
						//if(_status.xinfu_pingcai_finished) return;
						canvas.ontouchmove=function(e){
							if(_status.xinfu_pingcai_finished) return;
							ctx.beginPath();
							var rect=canvas.getBoundingClientRect();
							var X = ((e.touches[0].clientX / game.documentZoom - rect.left) / rect.width * canvas.width);
							var Y = ((e.touches[0].clientY / game.documentZoom - rect.top) / rect.height * canvas.height);
							ctx.clearRect(X-16,Y-16,32,32);
							var data=ctx.getImageData(canvas.width*0.1,canvas.height*0.1,canvas.width*0.8,canvas.height*0.8).data;
							var sum=0;
							for(var i=3;i<data.length;i+=4){
								if(data[i]==0){
									sum++;
								}
							}
							if(sum>=(canvas.width*canvas.height)*0.6){
								if(!_status.xinfu_pingcai_finished){
									_status.xinfu_pingcai_finished=true;
									event.switchToAuto();
								}
							}
						}
					}
					canvas.onmouseup=function(ev){
						canvas.onmousemove=null;
					}
					canvas.ontouchend=function(ev){
						canvas.ontouchmove=null;
					}
					
					dialog.open();
					
					game.pause();
					game.countChoose();
				};
				//event.switchToAuto=switchToAuto;
				game.broadcastAll(createDialog,player,event.videoId,name);
				if(event.isMine()){
					chooseButton(event.videoId,name);
				}
				else if(event.isOnline()){
					event.player.send(chooseButton,event.videoId,name);
					event.player.wait();
					game.pause();
				}
				else{
					switchToAuto();
				}
				"step 1"
				var result=event.result||result;
				if(!result) result={bool:false};
				event._result=result;
				game.broadcastAll(function(id,result,player){
					_status.xinfu_pingcai_finished=true;
					var dialog=get.idDialog(id);
					if(dialog){
						dialog.textPrompt.innerHTML='<div class="text center">'+(get.translation(player)+'擦拭宝物'+(result.bool?'成功！':'失败…'))+'</div>';
						if(result.bool&&dialog.canvas_viewer) dialog.canvas_viewer.classList.remove('grayscale');
					}
					if(!_status.connectMode) delete event.pingcai_delayed;
				},event.videoId,result,player);
				game.delay(2.5);
				"step 2"
			game.broadcastAll('closeDialog',event.videoId);
				if(result.bool){
					player.logSkill('pcaudio_'+event.cardname);
					event.insert(lib.skill.xinfu_pingcai[event.cardname],{
						player:player,
					});
				}
			},
			ai:{
				order:7,
				fireAttack:true,
				threaten:1.7,
				result:{
					player:1,
				},
			},
		},
		
		// 萌新（转型中）修改
		
		// 棘手怀念摧毁修改（搬运本体代码并修复，若后续本体更新后需要校对该部分代码是否更改，若更改需重新搬运并修复这些代码）
		// 曹金玉技能按钮魔改
		// 另：若写在extension.js中，则需将shanshen:{},改为lib.skill.shanshen = {};
		shanshen:{
			audio:2,
			trigger:{global:'die'},
			direct:true,
			content:function(){
				'step 0'
				event.goon=!player.hasAllHistory('sourceDamage',function(evt){
					return evt.player==trigger.player;
				});
				var list=lib.skill.yuqi.getInfo(player);
				player.chooseControl('蓝色('+list[0]+')','红色('+list[1]+')','绿色('+list[2]+')','黄色('+list[3]+')','cancel2').set('prompt',get.prompt('shanshen')).set('prompt2','令〖隅泣〗中的一个数字+2'+(event.goon?'并回复1点体力':'')).set('ai',function(){
					var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
					if(info[0]<info[3]&&game.countPlayer(function(current){
						return get.distance(player,current)<=info[0];
					})<Math.min(3,game.countPlayer())) return 0;
					if(info[3]<info[1]-1) return 3;
					if(info[1]<5) return 1;
					if(info[0]<5&&game.hasPlayer(function(current){
						return current!=player&&get.distance(player,current)>info[0];
					})) return 0;
					return 2;
				});
				'step 1'
				if(result.control!='cancel2'){
					player.logSkill('shanshen',trigger.player);
					var list=lib.skill.yuqi.getInfo(player);
					list[result.index]=Math.min(5,list[result.index]+2);
					game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
					player.markSkill('yuqi');
					if(event.goon) player.recover();
				}
			},
		},
		xianjing:{
			audio:2,
			trigger:{player:'phaseZhunbeiBegin'},
			direct:true,
			content:function(){
				'step 0'
				var list=lib.skill.yuqi.getInfo(player);
				player.chooseControl('蓝色('+list[0]+')','红色('+list[1]+')','绿色('+list[2]+')','黄色('+list[3]+')','cancel2').set('prompt',get.prompt('xianjing')).set('prompt2','令〖隅泣〗中的一个数字+1').set('ai',function(){
					var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
					if(info[0]<info[3]&&game.countPlayer(function(current){
						return get.distance(player,current)<=info[0];
					})<Math.min(3,game.countPlayer())) return 0;
					if(info[3]<info[1]-1) return 3;
					if(info[1]<5) return 1;
					if(info[0]<5&&game.hasPlayer(function(current){
						return current!=player&&get.distance(player,current)>info[0];
					})) return 0;
					return 2;
				});
				'step 1'
				if(result.control!='cancel2'){
					player.logSkill('xianjing');
					var list=lib.skill.yuqi.getInfo(player);
					list[result.index]=Math.min(5,list[result.index]+1);
					game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
					player.markSkill('yuqi');
					if(player.isDamaged()) event.finish();
				}
				else event.finish();
				'step 2'
				var list=lib.skill.yuqi.getInfo(player);
				player.chooseControl('蓝色('+list[0]+')','红色('+list[1]+')','绿色('+list[2]+')','黄色('+list[3]+')','cancel2').set('prompt','是否令〖隅泣〗中的一个数字+1？').set('ai',function(){
					var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
					if(info[0]<info[3]&&game.countPlayer(function(current){
						return get.distance(player,current)<=info[0];
					})<Math.min(3,game.countPlayer())) return 0;
					if(info[3]<info[1]-1) return 3;
					if(info[1]<5) return 1;
					if(info[0]<5&&game.hasPlayer(function(current){
						return current!=player&&get.distance(player,current)>info[0];
					})) return 0;
					return 2;
				});
				'step 3'
				if(result.control!='cancel2'){
					var list=lib.skill.yuqi.getInfo(player);
					list[result.index]=Math.min(5,list[result.index]+1);
					game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
					player.markSkill('yuqi');
				}
			},
		},
		
		// 龙魂配音与技能效果一一对应
		xinlonghun:{
			audio:true,
			enable:['chooseToUse','chooseToRespond'],
			prompt:'将一张♠牌当做【无懈可击】，♣牌当做【闪】，♥牌当做【桃】，♦牌当做火【杀】使用或打出',
			viewAs:function(cards,player){
				var name=false;
				var nature=null;
				switch(get.suit(cards[0],player)){
					case 'club':name='shan';break;
					case 'diamond':name='sha';nature='fire';break;
					case 'spade':name='wuxie';break;
					case 'heart':name='tao';break;
				}
				if(name) return {name:name,nature:nature};
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
						if(player.countCards('hes',function(card){
							return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
						})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
							var temp=get.order({name:name,nature:name=='sha'?'fire':null});
							if(temp>max){
								max=temp;
								name2=map[name];
							}
						}
					}
					if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
					return 0;
				}
				return 1;
			},
			position:'hes',
			filterCard:function(card,player,event){
				event=event||_status.event;
				var filter=event._backup.filterCard;
				var name=get.suit(card,player);
				if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
				if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
				if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
				if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
				return false;
			},
			filter:function(event,player){
				var filter=event.filterCard;
				if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
				if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
				if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
				if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
				return false;
			},
			// 此法同样可使龙魂配音与技能效果一一对应，但发动技能时配音会和卡牌配音一起播放
			// precontent:function(){
				// delete event.result.skill;
				// player.logSkill('longhun'+(4-lib.suit.indexOf(get.suit(event.result.cards[0],player))));
			// },
			ai:{
				respondSha:true,
				respondShan:true,
				skillTagFilter:function(player,tag){
					var name;
					switch(tag){
						case 'respondSha':name='diamond';break;
						case 'respondShan':name='club';break;
						case 'save':name='heart';break;
					}
					if(!player.countCards('hes',{suit:name})) return false;
				},
				order:function(item,player){
					if(player&&_status.event.type=='phase'){
						var max=0;
						var list=['sha','tao'];
						var map={sha:'diamond',tao:'heart'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
							if(player.countCards('hes',function(card){
								return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
							})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
								var temp=get.order({name:name,nature:name=='sha'?'fire':null});
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
				if(name=='wuxie'&&_status.connectMode&&player.countCards('hes')>0) return true;
				if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
				if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
			},
			group:['xinlonghun_audio1','xinlonghun_audio2','xinlonghun_audio3','xinlonghun_audio4'],
			subSkill:{
				audio1:{
					trigger:{player:['useCardBegin','respondBegin']},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player,name){
						return (name=='useCardBegin'||name=='respondBegin'||event.player!=player)&&event.skill=='xinlonghun'&&event.card.name=='wuxie';
					},
					content:function(){
						game.playAudio('..', 'audio', 'skill', 'xinlonghun1');
					}
				},
				audio2:{
					trigger:{player:['useCardBegin','respondBegin']},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player,name){
						return (name=='useCardBegin'||name=='respondBegin'||event.player!=player)&&event.skill=='xinlonghun'&&event.card.name=='shan';
					},
					content:function(){
						game.playAudio('..', 'audio', 'skill', 'xinlonghun2');
					}
				},
				audio3:{
					trigger:{player:['useCardBegin','respondBegin']},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player,name){
						return (name=='useCardBegin'||name=='respondBegin'||event.player!=player)&&event.skill=='xinlonghun'&&event.card.name=='tao';
					},
					content:function(){
						game.playAudio('..', 'audio', 'skill', 'xinlonghun3');
					}
				},
				audio4:{
					trigger:{player:['useCardBegin','respondBegin']},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player,name){
						return (name=='useCardBegin'||name=='respondBegin'||event.player!=player)&&event.skill=='xinlonghun'&&event.card.name=='sha';
					},
					content:function(){
						game.playAudio('..', 'audio', 'skill', 'xinlonghun4');
					}
				}
			}
		},
		
		// - 武将技能临时修复：
		// ※ 司敌（手杀曹真彩蛋）技能描述及代码修改
		// ※ 神曹丕〖天行〗技能修改（含技能描述修改）：行动→放权
		disordersidi:{audio:2},
		discretesidi:{
			audio:'disordersidi',
			trigger:{player:'useCardAfter'},
			direct:true,
			filter:function(event,player){
				return get.type(event.card,false)!='delay'&&game.hasPlayer(function(current){
					return player!=current&&(!player.storage.discretesidi||!player.storage.discretesidi.contains(current));
				});
			},
			content:function(){
				'step 0'
				player.chooseTarget(get.prompt('discretesidi'),'选择两名角色a,b，组成&lt;a,b&gt;；或仅选择一名角色，组成&lt;a,a&gt;<br>其中，第一角色a：还未为其指定“司敌”目标的其他角色；第二角色b：为a指定的“司敌”目标角色，对其他角色不可见',[1,2],function(card,player,target){
					if(ui.selected.targets.length) return true;
					return target!=player&&(!player.storage.discretesidi||!player.storage.discretesidi.contains(target));
				}).set('complexTarget',true).set('complexSelect',true).set('targetprompt',['第一角色','第二角色']).set('ai',function(target){
					var player=_status.event.player;
					if(!ui.selected.targets.length){
						if(target.getEnemies().length==1) return 2+Math.random();
						return 1+Math.random();
					}
					var targetx=ui.selected.targets[0];
					if(targetx.getEnemies().contains(target)&&targetx.inRange(target)) return Math.random()-0.5;
					return 0;
				}).animate=false;
				'step 1'
				if(result.bool&&result.targets.length){
					var targets=result.targets;
					player.logSkill('discretesidi',targets[0]);
					if(targets.length==1) targets.push(targets[0]);
					if(!player.storage.discretesidi) player.storage.discretesidi=[];
					if(!player.storage.discretesidi2) player.storage.discretesidi2=[];
					player.storage.discretesidi.push(targets[0]);
					player.storage.discretesidi2.push(targets[1]);
					player.markSkill('discretesidi');
					game.delayx();
				}
			},
			intro:{
				content:function(storage,player){
					if((player==game.me||player.isUnderControl())&&!game.observe){
						var str='{ ';
						for(var i=0;i<storage.length;i++){
							str+=('&lt;'+get.translation(storage[i])+', '+get.translation(player.storage.discretesidi2[i])+'&gt;');
							if(i<storage.length-1) str+=', ';
						}
						str+=' }'
						return str;
					}
					return '已指定'+get.translation(storage)+'为目标';
				},
			},
			onremove:function(player){
				delete player.storage.discretesidi;
				delete player.storage.discretesidi2;
			},
			group:['discretesidi_clear','discretesidi_exec'],
			subSkill:{
				clear:{
					trigger:{global:['useCardToPlayered','die']},
					forced:true,
					popup:false,
					locked:false,
					filter:function(event,player){
						if(!player.storage.discretesidi||!player.storage.discretesidi.contains(event.player)) return false;
						if(event.name=='die') return true;
						if(get.type(event.card,false)!='delay'){
							var index=player.storage.discretesidi.indexOf(event.player);
							return index!=-1&&(player.storage.discretesidi2[index]!=event.target||event.targets.length!=1);
						}
						return false;
					},
					content:function(){
						player.storage.discretesidi2.splice(player.storage.discretesidi.indexOf(trigger.player),1);
						player.unmarkAuto('discretesidi',[trigger.player]);
					},
				},
				exec:{
					audio:'disordersidi',
					trigger:{global:'useCardToPlayered'},
					forced:true,
					locked:false,
					filter:function(event,player){
						if(get.type(event.card,false)=='delay'||!player.storage.discretesidi||event.targets.length!=1) return false;
						var index=player.storage.discretesidi.indexOf(event.player);
						return index!=-1&&player.storage.discretesidi2[index]==event.target;
					},
					logTarget:'player',
					content:function(){
						'step 0'
						player.storage.discretesidi2.splice(player.storage.discretesidi.indexOf(trigger.player),1);
						player.unmarkAuto('discretesidi',[trigger.player])
						if(trigger.target==player){
							player.draw();
							event.finish();
							return;
						}
						var target=trigger.player;
						event.target=target;
						player.chooseControl('cancel2').set('choiceList',[
							'取消'+get.translation(trigger.card)+'的所有目标并对'+get.translation(target)+'造成1点伤害',
							'摸两张牌',
						]).set('ai',function(){
							var player=_status.event.player,evt=_status.event.getTrigger();
							if(get.damageEffect(evt.player,player,player)>0&&get.effect(evt.target,evt.card,evt.player,player)<0) return 0;
							return 1;
						});
						'step 1'
						if(result.index==0){
							trigger.cancel();
							trigger.targets.length=0;
							trigger.getParent().triggeredTargets1.length=0;
							if(!_status.dying.length) target.damage();
						}
						else if(result.index==1) player.draw(2);
					},
				},
			}
		},
		
		dengji:{
			audio:2,
			derivation:['tianxing','new_rejianxiong','rerende','rezhiheng','olluanji','olfangquan'],
			trigger:{player:'phaseZhunbeiBegin'},
			forced:true,
			unique:true,
			juexingji:true,
			skillAnimation:true,
			animationColor:'water',
			filter:function(event,player){
				return player.getExpansions('chuyuan').length>=3;
			},
			content:function(){
				player.awakenSkill(event.name);
				player.addSkill('tianxing');
				player.addSkill('new_rejianxiong');
				player.loseMaxHp();
				player.gain(player.getExpansions('chuyuan'),'gain2','fromStorage');
			},
		},
		tianxing:{
			audio:2,
			trigger:{player:'phaseZhunbeiBegin'},
			forced:true,
			unique:true,
			juexingji:true,
			skillAnimation:true,
			animationColor:'thunder',
			filter:function(event,player){
				return player.getExpansions('chuyuan').length>=3;
			},
			content:function(){
				'step 0'
				player.awakenSkill(event.name);
				player.loseMaxHp();
				player.gain(player.getExpansions('chuyuan'),'gain2','fromStorage');
				"step 1"
				player.removeSkill('chuyuan');
				player.chooseControl('rerende','rezhiheng','olluanji','olfangquan').set('prompt','选择获得一个技能').set('ai',function(){
					var player=_status.event.player;
					if(!player.hasSkill('luanji')&&!player.hasSkill('olluanji')&&player.getUseValue({name:'wanjian'})>4) return 'olluanji';
					if(!player.hasSkill('rezhiheng')) return 'rezhiheng';
					if(!player.hasSkill('olfangquan')) return 'olfangquan';
					return 'rerende';
				});
				'step 2'
				player.addSkillLog(result.control);
			},
		},
		
		// 神贾诩限制使用修改
		jxlianpo:{
			audio:2,
			derivation:['jxlianpo_faq'],
			init:()=>{
				game.addGlobalSkill('jxlianpo_global');
			},
			onremove:()=>{
				if(!game.hasPlayer(i=>i.hasSkill('jxlianpo'),true)) game.removeGlobalSkill('jxlianpo_global');
			},
			trigger:{global:'dieAfter'},
			filter(event,player){
				if(lib.skill.jxlianpo.getMax().length<=1) return false;
				return event.source&&event.source.isIn();
			},
			forced:true,
			logTarget:'source',
			getMax:()=>{
				const map={
					zhu:game.countPlayer(current=>{
						const identity=current.identity;
						let num=0;
						if(identity=='zhu'||identity=='zhong'||identity=='mingzhong') num++;
						num+=current.countMark('jxlianpo_mark_zhong');
						return num;
					}),
					fan:game.countPlayer(current=>{
						let num=0;
						if(current.identity=='fan') num++;
						num+=current.countMark('jxlianpo_mark_fan');
						return num;
					}),
					nei:game.countPlayer(current=>{
						let num=0;
						if(current.identity=='nei') num++;
						num+=current.countMark('jxlianpo_mark_nei');
						return num;
					}),
					commoner:game.countPlayer(current=>{
						let num=0;
						if(current.identity=='commoner') num++;
						num+=current.countMark('jxlianpo_mark_commoner');
						return num;
					}),
				};
				let population=0,identities=[];
				for(let i in map){
					let curPopulation=map[i]
					if(curPopulation>=population){
						if(curPopulation>population) identities=[];
						identities.add(i);
						population=curPopulation;
					}
				}
				return identities;
			},
			group:'jxlianpo_show',
			*content(event,map){
				var source=map.trigger.source;
				source.draw(2);
				source.recover();
			},
			mark:true,
			intro:{
				content:()=>`场上最大阵营为${lib.skill.jxlianpo.getMax().map(i=>{
					if(i=='zhu') return '主忠';
					return get.translation(i+'2');
				}).join('、')}`,
			},
			$createButton(item,type,position,noclick,node){
				node=ui.create.identityCard(item,position,noclick);
				node.link=item;
				return node;
			},
			subSkill:{
				show:{
					audio:'jxlianpo',
					trigger:{global:'roundStart'},
					filter(event,player){
						// var list=lib.config.mode_config.identity.identity.lastItem.slice();
						var list=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'];
						list.removeArray(game.filterPlayer().map(i=>{
							let identity=i.identity;
							if(identity=='mingzhong') identity='zhong';
							return identity;
						}));
						return list.length;
					},
					forced:true,
					content(){
						'step 0'
						// var list=lib.config.mode_config.identity.identity.lastItem.slice();
						var list=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'];
						list.removeArray(game.filterPlayer().map(i=>{
							var identity=i.identity;
							return identity=='mingzhong'?'zhong':identity;
						})).unique();
						player.chooseButton([
							'###炼魄：请选择一个身份###<div class="text center">你选择的身份对应的阵营角色数于本轮内视为+1</div>',
							[list,function(item,type,position,noclick,node){
								return lib.skill.jxlianpo.$createButton(item,type,position,noclick,node);
							}],
						],true);
						'step 1'
						var choice=result.links[0],mark=`jxlianpo_mark_${choice}`;
						player.when({global:'roundStart'})
							.assign({
								firstDo:true,
							})
							.filter(evt=>evt!=trigger)
							.then(()=>{
								for(var i in player.storage){
									if(i.startsWith('jxlianpo_mark_')){
										player.clearMark(i);
									}
								}
							});
						player.addMark(mark,1,false);
						event.videoId=lib.status.videoId++;
						var createDialog=function(player,identity,id){
							var dialog=ui.create.dialog(`${get.translation(player)}展示了“${get.translation(identity+'2')}”的身份牌<br>`,'forcebutton');
							dialog.videoId=id;
							ui.create.spinningIdentityCard(identity,dialog);
						};
						game.broadcastAll(createDialog,player,choice,event.videoId);
						var color='';
						if(choice=='zhong') color='#y';
						else if(choice=='fan') color='#g';
						else if(choice=='nei') color='#b';
						game.log(player,'展示了',`${color}${get.translation(choice+'2')}`,'的身份牌');
						game.delay(3);
						'step 2'
						game.broadcastAll('closeDialog',event.videoId);
					}
				},
				global:{
					mod:{
						maxHandcard(player,num){
							if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
							return num-game.countPlayer(current=>{
								return current!=player&&current.hasSkill('jxlianpo');
							});
						},
						cardUsable(card,player,num){
							if(card.name=='sha'){
								if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
								return num+game.countPlayer(current=>{
									return current.hasSkill('jxlianpo');
								});
							}
						},
						attackRange(player,num){
							if(!lib.skill.jxlianpo.getMax().includes('fan')) return;
							return num+game.countPlayer(current=>{
								return current.hasSkill('jxlianpo');
							});
						},
						cardSavable(card,player,target){
							if(card.name=='tao'&&!player.hasSkill('jxlianpo')){
								if(!lib.skill.jxlianpo.getMax().includes('zhu')) return;
								if(player==target) return;
								return false;
							}
						},
						playerEnabled(card,player,target){
							if(card.name=='tao'&&!player.hasSkill('jxlianpo')){
								if(!lib.skill.jxlianpo.getMax().includes('zhu')) return;
								if(player==target) return;
								return false;
							}
						}
					},
					trigger:{player:'dieAfter'},
					filter:()=>{
						return !game.hasPlayer(i=>i.hasSkill('jxlianpo'),true);
					},
					silent:true,
					forceDie:true,
					content:()=>{
						game.removeGlobalSkill('jxlianpo_global');
					}
				},
			},
		},
		
		// 临时修复洛神卡死的bug
		// 注：暂时先用旧代码，未适配新本体代码（async content）
		luoshen:{
			audio:2,
			trigger:{player:'phaseZhunbeiBegin'},
			frequent:true,
			preHidden:true,
			content:function(){
				"step 0"
				if(event.cards==undefined) event.cards=[];
				var next=player.judge(function(card){
					if(get.color(card)=='black') return 1.5;
					return -1.5;
				});
				next.judge2=function(result){
					return result.bool;
				};
				if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
					if(event.judgeResult.color=='black'&&get.position(card,true)=='o') player.gain(card,'gain2');
				});
				else next.set('callback',function(){
					if(event.judgeResult.color=='black') event.getParent().orderingCards.remove(card);
				});
				"step 1"
				if(result.judge>0){
					event.cards.push(result.card);
					player.chooseBool('是否再次发动【洛神】？').set('frequentSkill','luoshen');
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
				"step 2"
				if(result.bool){
					event.goto(0);
				}
				else{
					if(event.cards.length){
						player.gain(event.cards,'gain2');
					}
				}
			}
		},
		
	};
	
	// if (!_status.connectMode) {
		if (lib.config.dhkmh=='guanxinghepindian') {
			for (var key in decadeUI.skill) {
				if (lib.skill[key]) lib.skill[key] = decadeUI.skill[key];
			}
			
			for (var key in decadeUI.inheritSkill) {
				if (lib.skill[key]) {
					 for (var j in decadeUI.inheritSkill[key]) {
						lib.skill[key][j] = decadeUI.inheritSkill[key][j];
					 }
				}
			}
		}
		
		for (var key in decadeUI.skill_new) {
			if (lib.skill[key]) lib.skill[key] = decadeUI.skill_new[key];
		}
	// }
	
});

