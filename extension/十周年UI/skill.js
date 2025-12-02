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
							if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);
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
							if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);
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
									if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);
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
								if (finished) dialog.finishTime(cards.length <= 1 ? 250 : 1000);
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
				var num = 1 + player.countCards('e');
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
			locked: true,
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
						// 修改开始
						'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"])>*,' +
						'.handcards.nsanruo>.card[data-card-name="sha"]>*{visibility:hidden !important;}',
						'.handcards.nsanruo>.card[data-card-type="trick"]:not(*[data-card-multitarget="1"]),' +
						'.handcards.nsanruo>.card[data-card-name="sha"]{background-image: url('+lib.assetURL+'image/character/ns_liuzhang.jpg'+') !important;background-position: center;background-size: cover !important;}'
						// 修改结束
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
					return ['sp_zhugeliang','re_sp_zhugeliang','ol_sp_zhugeliang','prp_zhugeliang'].includes(current.name)||['sp_zhugeliang','re_sp_zhugeliang','ol_sp_zhugeliang','prp_zhugeliang'].includes(current.name2);
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
					return ['re_pangtong','pangtong','ol_pangtong'].includes(current.name)||['re_pangtong','pangtong','ol_pangtong'].includes(current.name2);
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
					return ['re_xushu','xin_xushu','xushu','dc_xushu'].includes(current.name)||['re_xushu','xin_xushu','xushu','dc_xushu'].includes(current.name2);
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
								if(!get.subtypes(button.link,false).includes('equip2')) return false;
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
			audio: 5,
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
						audio: "xinfu_pingcai1.mp3",
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
		huashen:{
			audio:'huashen2',
			unique:true,
			init:function(player){
				if(!player.storage.huashen){
					player.storage.huashen={
						owned:{}
					};
				}
				player.when('dieBegin').then(()=>{
					const name=player.name?player.name:player.name1;
					if(name){
						const sex=get.character(name,0);
						const group=get.character(name,1);
						if(player.sex!=sex){
							game.broadcastAll((player,sex)=>{
								player.sex=sex;
							},player,sex);
							game.log(player,'将性别变为了','#y'+get.translation(sex)+'性');
						}
						if(player.group!=group) player.changeGroup(group);
					}
				});
			},
			intro:{
				// 修改开始
				markcount: storage => Object.keys(storage.owned).length,
				// 修改结束
				content:function(storage,player){
					var str='';
					var list=Object.keys(storage.owned);
					if(list.length){
						str+=get.translation(list[0]);
						for(var i=1;i<list.length;i++){
							str+='、'+get.translation(list[i]);
						}
					}
					var skill=player.storage.huashen.current2;
					if(skill){
						str+='<p>当前技能：'+get.translation(skill);
					}
					return str;
				},
				onunmark:function(storage,player){
					_status.characterlist.addArray(Object.keys(storage.owned));
					storage.owned=[];
				},
				mark:function(dialog,content,player){
					var list=Object.keys(content.owned);
					if(list.length){
						var skill=player.storage.huashen.current2;
						var character=player.storage.huashen.current;
						if(skill&&character){
							dialog.addSmall([[character],(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
							dialog.add('<div><div class="skill">【'+get.translation(lib.translate[skill+'_ab']||get.translation(skill).slice(0,2))+'】</div>'+
							'<div>'+get.skillInfoTranslation(skill,player)+'</div></div>');
						}
						if(player.isUnderControl(true)){
							dialog.addSmall([list,(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
						}
						else{
							dialog.addText('共有'+get.cnNumber(list.length)+'张“化身”');
						}
					}
					else{
						return '没有化身';
					}
				}
			},
			addHuashen:function(player){
				if(!player.storage.huashen) return;
				if(!_status.characterlist){
					lib.skill.pingjian.initList();
				}
				_status.characterlist.randomSort();
				for(var i=0;i<_status.characterlist.length;i++){
					let name=_status.characterlist[i];
					if(name.indexOf('zuoci')!=-1||name.indexOf('key_')==0||name.indexOf('sp_key_')==0||lib.skill.rehuashen.banned.includes(name)||player.storage.huashen.owned[name]) continue;
					let skills=lib.character[name][3].filter(skill=>{
						const categories = get.skillCategoriesOf(skill, player);
						return !categories.some(type=>lib.skill.rehuashen.bannedType.includes(type));
					})
					if(skills.length){
						player.storage.huashen.owned[name]=skills;
						_status.characterlist.remove(name);
						return name;
					}
				}
			},
			addHuashens:function(player,num){
				var list=[];
				for(var i=0;i<num;i++){
					var name=lib.skill.huashen.addHuashen(player);
					if(name) list.push(name);
				}
				if(list.length){
					player.syncStorage('huashen');
					player.markSkill('huashen');
					game.log(player,'获得了',get.cnNumber(list.length)+'张','#g化身');
					lib.skill.rehuashen.drawCharacter(player,list);
				}
			},
			trigger:{
				global:'phaseBefore',
				player:['enterGame','phaseBegin','phaseEnd'],
			},
			filter:function(event,player,name){
				if(event.name!='phase') return true;
				if(name=='phaseBefore') return game.phaseNumber==0;
				return !get.is.empty(player.storage.huashen.owned);
			},
			direct:true,
			content:function(){
				'step 0'
				var name=event.triggername;
				if(trigger.name!='phase'||(name=='phaseBefore'&&game.phaseNumber==0)){
					player.logSkill('huashen');
					lib.skill.huashen.addHuashens(player,2);
					event.logged=true;
				}
				var cards=[];
				var skills=[];
				for(var i in player.storage.huashen.owned){
					cards.push(i);
					skills.addArray(player.storage.huashen.owned[i]);
				}
				var cond=event.triggername=='phaseBegin'?'in':'out';
				skills.randomSort();
				skills.sort(function(a,b){
					return get.skillRank(b,cond)-get.skillRank(a,cond);
				});
				if(player.isUnderControl()){
					game.swapPlayerAuto(player);
				}
				var switchToAuto=function(){
					_status.imchoosing=false;
					var skill=skills[0],character;
					for(var i in player.storage.huashen.owned){
						if(player.storage.huashen.owned[i].includes(skill)){
							character=i; break;
						}
					}
					event._result={
						bool:true,
						skill:skill,
						character:character
					};
					if(event.dialog) event.dialog.close();
					if(event.control) event.control.close();
				};
				var chooseButton=function(player,list,forced){
					var event=_status.event;
					player=player||event.player;
					if(!event._result) event._result={};
					var prompt=forced?'化身：选择获得一项技能':get.prompt('huashen');
					var dialog=ui.create.dialog(prompt,[list,(item,type,position,noclick,node)=>lib.skill.rehuashen.$createButton(item,type,position,noclick,node)]);
					event.dialog=dialog;
					event.forceMine=true;
					event.button=null;
					for(var i=0;i<event.dialog.buttons.length;i++){
						event.dialog.buttons[i].classList.add('pointerdiv');
						event.dialog.buttons[i].classList.add('selectable');
					}
					event.dialog.open();
					event.custom.replace.button=function(button){
						if(!event.dialog.contains(button.parentNode)) return;
						if(event.control) event.control.style.opacity=1;
						if(button.classList.contains('selectedx')){
							event.button=null;
							button.classList.remove('selectedx');
							if(event.control){
								event.control.replacex(['cancel2']);
							}
						}
						else{
							if(event.button){
								event.button.classList.remove('selectedx');
							}
							button.classList.add('selectedx');
							event.button=button;
							if(event.control&&button.link){
								event.control.replacex(player.storage.huashen.owned[button.link]);
							}
						}
						game.check();
					}
					event.custom.replace.window=function(){
						if(event.button){
							event.button.classList.remove('selectedx');
							event.button=null;
						}
						event.control.replacex(['cancel2']);
					}

					event.switchToAuto=function(){
						var cards=[];
						var skills=[];
						for(var i in player.storage.huashen.owned){
							cards.push(i);
							skills.addArray(player.storage.huashen.owned[i]);
						}
						var cond=event.triggername=='phaseBegin'?'in':'out';
						skills.randomSort();
						skills.sort(function(a,b){
							return get.skillRank(b,cond)-get.skillRank(a,cond);
						});
						_status.imchoosing=false;
						var skill=skills[0],character;
						for(var i in player.storage.huashen.owned){
							if(player.storage.huashen.owned[i].includes(skill)){
								character=i; break;
							}
						}
						event._result={
							bool:true,
							skill:skill,
							character:character
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					}
					var controls=[];
					event.control=ui.create.control();
					event.control.replacex=function(){
						var args=Array.from(arguments)[0];
						if(args.includes('cancel2')&&forced){
							args.remove('cancel2');
							this.style.opacity='';
						}
						args.push(function(link){
							var result=event._result;
							if(link=='cancel2') result.bool=false;
							else{
								if(!event.button) return;
								result.bool=true;
								result.skill=link;
								result.character=event.button.link;
							}
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						return this.replace.apply(this,args);
					}
					if(!forced){
						controls.push('cancel2');
						event.control.style.opacity=1;
					}
					event.control.replacex(controls);
					game.pause();
					game.countChoose();
				};
				if(event.isMine()){
					chooseButton(player,cards,event.logged);
				}
				else if(event.isOnline()){
					event.player.send(chooseButton,event.player,cards,event.logged);
					event.player.wait();
					game.pause();
				}
				else{
					switchToAuto();
				}
				'step 1'
				var map=event.result||result;
				if(map.bool){
					if(!event.logged) player.logSkill('huashen');
					var skill=map.skill,character=map.character;
					if(character!=player.storage.huashen.current){
						const old=player.storage.huashen.current;
						player.storage.huashen.current=character;
						player.markSkill('huashen');
						game.broadcastAll(function(player,character,old){
							player.tempname.remove(old);
							player.tempname.add(character);
							player.sex=lib.character[character][0];
							//player.group=lib.character[character][1];
							//player.node.name.dataset.nature=get.groupnature(player.group);
							// 修改开始
							/*
							var mark=player.marks.huashen;
							if(mark){
								mark.style.transition='all 0.3s';
								setTimeout(function(){
									mark.style.transition='all 0s';
									ui.refresh(mark);
									mark.setBackground(character,'character');
									if(mark.firstChild){
										mark.firstChild.remove();
									}
									setTimeout(function(){
										mark.style.transition='';
										mark.show();
									},50);
								},200);
							}
							*/
							// 修改结束
						},player,character,old);
						game.log(player,'将性别变为了','#y'+get.translation(lib.character[character][0])+'性');
						player.changeGroup(lib.character[character][1]);
					}
					player.storage.huashen.current2=skill;
					if(!player.additionalSkills.huashen||!player.additionalSkills.huashen.includes(skill)){
						player.addAdditionalSkills('huashen',skill);
						player.flashAvatar('huashen',character);
						player.syncStorage('huashen');
						player.updateMarks('huashen');
						// lib.skill.rehuashen.createAudio(character,skill,'zuoci');
					}
				}
			}
		},
		huashen2:{audio:2},
		
		
		// 棘手怀念摧毁修改（搬运本体代码并修复，若后续本体更新后需要校对该部分代码是否更改，若更改需重新搬运并修复这些代码）
		// 另：若写在extension.js中，则需将shanshen:{},改为lib.skill.shanshen = {};

		// 龙魂配音与技能效果一一对应
		// 新版修改代码
		xinlonghun: {
			audio: 4,
			// audio: "longhun",
			mod: {
				aiOrder(player, card, num) {
					if (num <= 0 || !player.isPhaseUsing() || player.needsToDiscard() < 2) {
						return num;
					}
					let suit = get.suit(card, player);
					if (suit === "heart") {
						return num - 3.6;
					}
				},
				aiValue(player, card, num) {
					if (num <= 0) {
						return num;
					}
					let suit = get.suit(card, player);
					if (suit === "heart") {
						return num + 3.6;
					}
					if (suit === "club") {
						return num + 1;
					}
					if (suit === "spade") {
						return num + 1.8;
					}
				},
				aiUseful(player, card, num) {
					if (num <= 0) {
						return num;
					}
					let suit = get.suit(card, player);
					if (suit === "heart") {
						return num + 3;
					}
					if (suit === "club") {
						return num + 1;
					}
					if (suit === "spade") {
						return num + 1;
					}
				},
			},
			locked: false,
			enable: ["chooseToUse", "chooseToRespond"],
			prompt: "将一张♠手牌当做【无懈可击】，♣手牌当做【闪】，♥手牌当做【桃】，将♦手牌当做火【杀】使用或打出",
			// prompt: "将♦手牌当做火【杀】，♥手牌当做【桃】，♣手牌当做【闪】，♠手牌当做【无懈可击】使用或打出",
			viewAs(cards, player) {
				if (cards.length) {
					var name = false,
						nature = null;
					switch (get.suit(cards[0], player)) {
						case "club":
							name = "shan";
							break;
						case "diamond":
							name = "sha";
							nature = "fire";
							break;
						case "spade":
							name = "wuxie";
							break;
						case "heart":
							name = "tao";
							break;
					}
					if (name) {
						return { name: name, nature: nature };
					}
				}
				return null;
			},
			check(card) {
				var player = _status.event.player;
				if (_status.event.type == "phase") {
					var max = 0;
					var name2;
					var list = ["sha", "tao"];
					var map = { sha: "diamond", tao: "heart" };
					for (var i = 0; i < list.length; i++) {
						var name = list[i];
						if (
							player.countCards("hs", function (card) {
								return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
							}) > 0 &&
							player.getUseValue({ name: name, nature: name == "sha" ? "fire" : null }) > 0
						) {
							var temp = get.order({ name: name, nature: name == "sha" ? "fire" : null });
							if (temp > max) {
								max = temp;
								name2 = map[name];
							}
						}
					}
					if (name2 == get.suit(card, player)) {
						return name2 == "diamond" ? 5 - get.value(card) : 20 - get.value(card);
					}
					return 0;
				}
				return 1;
			},
			position: "hs",
			filterCard(card, player, event) {
				event = event || _status.event;
				var filter = event._backup.filterCard;
				var name = get.suit(card, player);
				if (name == "club" && filter({ name: "shan", cards: [card] }, player, event)) {
					return true;
				}
				if (name == "diamond" && filter({ name: "sha", cards: [card], nature: "fire" }, player, event)) {
					return true;
				}
				if (name == "spade" && filter({ name: "wuxie", cards: [card] }, player, event)) {
					return true;
				}
				if (name == "heart" && filter({ name: "tao", cards: [card] }, player, event)) {
					return true;
				}
				return false;
			},
			filter(event, player) {
				var filter = event.filterCard;
				if (filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player, event) && player.countCards("hs", { suit: "diamond" })) {
					return true;
				}
				if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player, event) && player.countCards("hs", { suit: "club" })) {
					return true;
				}
				if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player, event) && player.countCards("hs", { suit: "heart" })) {
					return true;
				}
				if (filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player, event) && player.countCards("hs", { suit: "spade" })) {
					return true;
				}
				return false;
			},
			logAudio(event, player) {
				return "xinlonghun" + (4 - ["diamond", "heart", "club", "spade"].indexOf(get.suit(event.cards[0], player))) + ".ogg";
				// return "longhun" + (4 - lib.suit.indexOf(get.suit(event.cards[0], player))) + ".mp3";
			},
			ai: {
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag) {
					var name;
					switch (tag) {
						case "respondSha":
							name = "diamond";
							break;
						case "respondShan":
							name = "club";
							break;
						case "save":
							name = "heart";
							break;
					}
					if (!player.countCards("hs", { suit: name })) {
						return false;
					}
				},
				order(item, player) {
					if (player && _status.event.type == "phase") {
						var max = 0;
						var list = ["sha", "tao"];
						var map = { sha: "diamond", tao: "heart" };
						for (var i = 0; i < list.length; i++) {
							var name = list[i];
							if (
								player.countCards("hs", function (card) {
									return (name != "sha" || get.value(card) < 5) && get.suit(card, player) == map[name];
								}) > 0 &&
								player.getUseValue({
									name: name,
									nature: name == "sha" ? "fire" : null,
								}) > 0
							) {
								var temp = get.order({
									name: name,
									nature: name == "sha" ? "fire" : null,
								});
								if (temp > max) {
									max = temp;
								}
							}
						}
						max /= 1.1;
						return max;
					}
					return 2;
				},
			},
			hiddenCard(player, name) {
				if (name == "wuxie" && _status.connectMode && player.countCards("hs") > 0) {
					return true;
				}
				if (name == "wuxie") {
					return player.countCards("hs", { suit: "spade" }) > 0;
				}
				if (name == "tao") {
					return player.countCards("hs", { suit: "heart" }) > 0;
				}
			},
		},
		// 旧版修改代码（资料卡无法试听配音）
		/*
		xinlonghun:{
			audio:true,
			mod: {
				aiOrder(player, card, num) {
					if (num <= 0 || !player.isPhaseUsing() || player.needsToDiscard() < 2) return num;
					let suit = get.suit(card, player);
					if (suit === "heart") return num - 3.6;
				},
				aiValue(player, card, num) {
					if (num <= 0) return num;
					let suit = get.suit(card, player);
					if (suit === "heart") return num + 3.6;
					if (suit === "club") return num + 1;
					if (suit === "spade") return num + 1.8;
				},
				aiUseful(player, card, num) {
					if (num <= 0) return num;
					let suit = get.suit(card, player);
					if (suit === "heart") return num + 3;
					if (suit === "club") return num + 1;
					if (suit === "spade") return num + 1;
				},
			},
			locked: false,
			enable:['chooseToUse','chooseToRespond'],
			prompt:'将一张♠牌当做【无懈可击】，♣牌当做【闪】，♥牌当做【桃】，♦牌当做火【杀】使用或打出',
			viewAs:function(cards,player){
				if(cards.length){
					var name=false;
					var nature=null;
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='fire';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					if(name) return {name:name,nature:nature};
				}
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
				if(filter(get.autoViewAs({name:'sha',nature:'fire'},'unsure'),player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
				if(filter(get.autoViewAs({name:'shan'},'unsure'),player,event)&&player.countCards('hes',{suit:'club'})) return true;
				if(filter(get.autoViewAs({name:'tao'},'unsure'),player,event)&&player.countCards('hes',{suit:'heart'})) return true;
				if(filter(get.autoViewAs({name:'wuxie'},'unsure'),player,event)&&player.countCards('hes',{suit:'spade'})) return true;
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
		*/
		
		// 修复于吉、旧于吉蛊惑牌跑到左上角的bug
		guhuo_guess: {
			audio: 2,
			trigger: {
				player: ["useCardBefore", "respondBefore"],
			},
			forced: true,
			silent: true,
			popup: false,
			firstDo: true,
			charlotte: true,
			filter(event, player) {
				return (
					event.skill &&
					(event.skill.indexOf("guhuo_") == 0 || event.skill.indexOf("xinfu_guhuo_") == 0)
				);
			},
			content() {
				"step 0";
				player.addTempSkill("guhuo_phase");
				event.fake = false;
				event.betrayer = null;
				var card = trigger.cards[0];
				if (
					card.name != trigger.card.name ||
					(card.name == "sha" && !get.is.sameNature(trigger.card, card))
				)
					event.fake = true;
				player.popup(trigger.card.name, "metal");
				player.lose(card, ui.ordering).relatedEvent = trigger;
				// player.line(trigger.targets,trigger.card.nature);
				trigger.throw = false;
				trigger.skill = "xinfu_guhuo_backup";
				game.log(
					player,
					"声明",
					trigger.targets && trigger.targets.length ? "对" : "",
					trigger.targets || "",
					trigger.name == "useCard" ? "使用" : "打出",
					trigger.card
				);
				event.prompt =
					get.translation(player) +
					"声明" +
					(trigger.targets && trigger.targets.length
						? "对" + get.translation(trigger.targets)
						: "") +
					(trigger.name == "useCard" ? "使用" : "打出") +
					(get.translation(trigger.card.nature) || "") +
					get.translation(trigger.card.name) +
					"，是否质疑？";
				event.targets = game
					.filterPlayer(function (current) {
						return current != player && !current.hasSkill("chanyuan");
					})
					.sortBySeat(_status.currentPhase);

				game.broadcastAll(
					function (card, player) {
						_status.guhuoNode = card.copy("thrown");
						if (lib.config.cardback_style != "default") {
							_status.guhuoNode.style.transitionProperty = "none";
							ui.refresh(_status.guhuoNode);
							_status.guhuoNode.classList.add("infohidden");
							ui.refresh(_status.guhuoNode);
							_status.guhuoNode.style.transitionProperty = "";
						} else {
							_status.guhuoNode.classList.add("infohidden");
						}
						_status.guhuoNode.style.transform =
							"perspective(600px) rotateY(180deg) translateX(0)";
						player.$throwordered2(_status.guhuoNode);
					},
					trigger.cards[0],
					player
				);
				// 修复开始
				event.onEnd01 = function () {
					_status.guhuoNode.removeEventListener("webkitTransitionEnd", _status.event.onEnd01);
					setTimeout(function () {
						_status.guhuoNode.style.transition = "all ease-in 0.3s";
						// _status.guhuoNode.style.transform = "perspective(600px) rotateY(270deg)";
						var onEnd = function () {
							_status.guhuoNode.classList.remove("infohidden");
							_status.guhuoNode.style.transition = "all 0s";
							// ui.refresh(_status.guhuoNode);
							// _status.guhuoNode.style.transform = "perspective(600px) rotateY(-90deg)";
							// ui.refresh(_status.guhuoNode);
							// _status.guhuoNode.style.transition = "";
							// ui.refresh(_status.guhuoNode);
							// _status.guhuoNode.style.transform = "";
							_status.guhuoNode.removeEventListener("webkitTransitionEnd", onEnd);
						};
						_status.guhuoNode.listenTransition(onEnd);
					}, 300);
				};
				// 修复结束
				if (!event.targets.length) event.goto(3);
				"step 1";
				event.target = event.targets.shift();
				event.target
					.chooseButton([event.prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true)
					.set("ai", function (button) {
						var player = _status.event.player;
						var evt = _status.event.getParent("guhuo_guess"),
							evtx = evt.getTrigger();
						if (!evt) return Math.random();
						var card = { name: evtx.card.name, nature: evtx.card.nature, isCard: true };
						var ally = button.link[2] == "reguhuo_ally";
						if (ally && (player.hp <= 1 || get.attitude(player, evt.player) >= 0)) return 1.1;
						if (!ally && get.attitude(player, evt.player) < 0 && evtx.name == "useCard") {
							var eff = 0;
							var targetsx = evtx.targets || [];
							for (var target of targetsx) {
								var isMe = target == evt.player;
								eff += get.effect(target, card, evt.player, player) / (isMe ? 1.5 : 1);
							}
							eff /= 1.5 * targetsx.length || 1;
							if (eff > 0) return 0;
							if (eff < -7) return Math.random() + Math.pow(-(eff + 7) / 8, 2);
							return Math.pow(
								(get.value(card, evt.player, "raw") - 4) / (eff == 0 ? 5 : 10),
								2
							);
						}
						return Math.random();
					});
				"step 2";
				if (result.links[0][2] == "reguhuo_betray") {
					target.addExpose(0.2);
					game.log(target, "#y质疑");
					target.popup("质疑！", "fire");
					event.betrayer = target;
				} else {
					game.log(target, "#g不质疑");
					target.popup("不质疑", "wood");
					if (targets.length) event.goto(1);
				}
				"step 3";
				game.delayx();
				game.broadcastAll(function (onEnd) {
					_status.event.onEnd01 = onEnd;
					if (_status.guhuoNode) _status.guhuoNode.listenTransition(onEnd, 300);
				}, event.onEnd01);
				"step 4";
				game.delay(2);
				"step 5";
				if (!event.betrayer) event.finish();
				"step 6";
				if (event.fake) {
					event.betrayer.popup("质疑正确", "wood");
					game.log(player, "声明的", trigger.card, "作废了");
					trigger.cancel();
					trigger.getParent().goto(0);
					trigger.line = false;
				} else {
					event.betrayer.popup("质疑错误", "fire");
					event.betrayer.addSkills("chanyuan");
				}
				"step 7";
				game.delay(2);
				"step 8";
				if (event.fake) game.broadcastAll(ui.clear);
			},
		},
		old_guhuo_guess: {
			audio: "old_guhuo",
			trigger: {
				player: ["useCardBefore", "respondBefore"],
			},
			forced: true,
			silent: true,
			popup: false,
			firstDo: true,
			charlotte: true,
			sourceSkill: "old_guhuo",
			filter: function (event, player) {
				return event.skill && event.skill.indexOf("old_guhuo_") == 0;
			},
			content: function () {
				"step 0";
				event.fake = false;
				event.goon = true;
				event.betrayers = [];
				var card = trigger.cards[0];
				if (
					card.name != trigger.card.name ||
					(card.name == "sha" && !get.is.sameNature(trigger.card, card))
				)
					event.fake = true;
				if (event.fake) {
					player.addSkill("old_guhuo_cheated");
					player.markAuto("old_guhuo_cheated", [trigger.card.name + trigger.card.nature]);
				}
				player.popup(trigger.card.name, "metal");
				player.lose(card, ui.ordering).relatedEvent = trigger;
				trigger.throw = false;
				trigger.skill = "old_guhuo_backup";
				game.log(
					player,
					"声明",
					trigger.targets && trigger.targets.length ? "对" : "",
					trigger.targets || "",
					trigger.name == "useCard" ? "使用" : "打出",
					trigger.card
				);
				event.prompt =
					get.translation(player) +
					"声明" +
					(trigger.targets && trigger.targets.length
						? "对" + get.translation(trigger.targets)
						: "") +
					(trigger.name == "useCard" ? "使用" : "打出") +
					(get.translation(trigger.card.nature) || "") +
					get.translation(trigger.card.name) +
					"，是否质疑？";
				event.targets = game
					.filterPlayer((i) => i != player && i.hp > 0)
					.sortBySeat(_status.currentPhase);

				game.broadcastAll(
					function (card, player) {
						_status.old_guhuoNode = card.copy("thrown");
						if (lib.config.cardback_style != "default") {
							_status.old_guhuoNode.style.transitionProperty = "none";
							ui.refresh(_status.old_guhuoNode);
							_status.old_guhuoNode.classList.add("infohidden");
							ui.refresh(_status.old_guhuoNode);
							_status.old_guhuoNode.style.transitionProperty = "";
						} else {
							_status.old_guhuoNode.classList.add("infohidden");
						}
						_status.old_guhuoNode.style.transform =
							"perspective(600px) rotateY(180deg) translateX(0)";
						player.$throwordered2(_status.old_guhuoNode);
					},
					trigger.cards[0],
					player
				);
				event.onEnd01 = function () {
					_status.old_guhuoNode.removeEventListener(
						"webkitTransitionEnd",
						_status.event.onEnd01
					);
					// 修复开始
					setTimeout(function () {
						_status.old_guhuoNode.style.transition = "all ease-in 0.3s";
						// _status.old_guhuoNode.style.transform = "perspective(600px) rotateY(270deg)";
						var onEnd = function () {
							_status.old_guhuoNode.classList.remove("infohidden");
							_status.old_guhuoNode.style.transition = "all 0s";
							// ui.refresh(_status.old_guhuoNode);
							// _status.old_guhuoNode.style.transform = "perspective(600px) rotateY(-90deg)";
							// ui.refresh(_status.old_guhuoNode);
							// _status.old_guhuoNode.style.transition = "";
							// ui.refresh(_status.old_guhuoNode);
							// _status.old_guhuoNode.style.transform = "";
							_status.old_guhuoNode.removeEventListener("webkitTransitionEnd", onEnd);
						};
						_status.old_guhuoNode.listenTransition(onEnd);
					}, 300);
					// 修复结束
				};
				if (!event.targets.length) event.goto(3);
				"step 1";
				event.target = event.targets.shift();
				event.target
					.chooseButton([event.prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true)
					.set("ai", function (button) {
						var player = _status.event.player;
						var evt = _status.event.getParent("old_guhuo_guess"),
							evtx = evt.getTrigger();
						if (!evt) return Math.random();
						var card = { name: evtx.card.name, nature: evtx.card.nature, isCard: true };
						var ally = button.link[2] == "reguhuo_ally";
						if (ally && (player.hp <= 1 || get.attitude(player, evt.player) >= 0)) return 1.1;
						if (!ally && get.effect(player, { name: "losehp" }, player, player) >= 0)
							return 10;
						if (!ally && get.attitude(player, evt.player) < 0) {
							if (evtx.name == "useCard") {
								var eff = 0;
								var targetsx = evtx.targets || [];
								for (var target of targetsx) {
									var isMe = target == evt.player;
									eff +=
										get.effect(target, card, evt.player, player) / (isMe ? 1.35 : 1);
								}
								eff /= 1.5 * targetsx.length || 1;
								if (eff > 0) return 0;
								if (eff < -7)
									return (
										(Math.random() + Math.pow(-(eff + 7) / 8, 2)) /
											Math.sqrt(evt.betrayers.length + 1) +
										(player.hp - 3) * 0.05 +
										Math.max(0, 4 - evt.player.hp) * 0.05 -
										(player.hp == 1 && !get.tag(card, "damage") ? 0.2 : 0)
									);
								return (
									Math.pow(
										(get.value(card, evt.player, "raw") - 4) / (eff == 0 ? 3.1 : 10),
										2
									) /
										Math.sqrt(evt.betrayers.length || 1) +
									(player.hp - 3) * 0.05 +
									Math.max(0, 4 - evt.player.hp) * 0.05
								);
							}
							if (
								evt.player
									.getStorage("old_guhuo_cheated")
									.includes(card.name + card.nature)
							)
								return Math.random() + 0.3;
						}
						return Math.random();
					});
				"step 2";
				if (result.links[0][2] == "reguhuo_betray") {
					target.addExpose(0.2);
					game.log(target, "#y质疑");
					target.popup("质疑！", "fire");
					event.betrayers.push(target);
				} else {
					game.log(target, "#g不质疑");
					target.popup("不质疑", "wood");
				}
				if (targets.length) event.goto(1);
				"step 3";
				game.delayx();
				game.broadcastAll(function (onEnd) {
					_status.event.onEnd01 = onEnd;
					if (_status.old_guhuoNode) _status.old_guhuoNode.listenTransition(onEnd, 300);
				}, event.onEnd01);
				"step 4";
				game.delay(2);
				"step 5";
				if (!event.betrayers.length) {
					event.goto(7);
				}
				"step 6";
				if (event.fake) {
					for (var target of event.betrayers) {
						target.popup("质疑正确", "wood");
					}
					event.goon = false;
				} else {
					for (var target of event.betrayers) {
						target.popup("质疑错误", "fire");
						target.loseHp();
					}
					if (get.suit(trigger.cards[0], player) != "heart") {
						event.goon = false;
					}
				}
				"step 7";
				if (!event.goon) {
					game.log(player, "声明的", trigger.card, "作废了");
					trigger.cancel();
					trigger.getParent().goto(0);
					trigger.line = false;
				}
				"step 8";
				game.delay();
				"step 9";
				if (!event.goon) {
					if (event.fake) game.asyncDraw(event.betrayers);
					game.broadcastAll(ui.clear);
				}
			},
		},
		
		// - 武将技能临时修复：
		// 26神黄月英化朽
		zc26_huaxiu: {
			// 临时修改（by 棘手怀念摧毁）
			derivation: ["zc26_zhuge_skill", "zc26_bagua_skill", "zc26_lingling_skill"],
			
			usable: 1,
			enable: "phaseUse",
			onChooseToUse(event) {
				if (game.online) {
					return;
				}
				event.set(
					"zc26_huaxiu",
					["duanjian", "serafuku", "yonglv"].filter(i => i in lib.card)
				);
			},
			filter(event, player) {
				return event.zc26_huaxiu?.length;
			},
			async content(event, trigger, player) {
				const list = event.getParent(2).zc26_huaxiu.map(name => [get.type(name), "", name]);
				const { result } = await player.chooseButton(true, ["化朽", "选择要升级的装备", [list, "vcard"]]).set("ai", button => {
					const player = get.player(),
						name = button.link[2];
					const num = game.countPlayer(current => {
						// 临时修改（by 棘手怀念摧毁）
						const hs = current.countCards("h", card => name == card.name),
							es = current.countCards("e", card => name == card.name),
							js = current.countCards("j", card => get.type(card) == "delay" && card.storage.equipEnable && name == get.name(card, false));
						// const hs = current.countVCards("h", card => name == card.name),
							// es = current.countVCards("e", card => name == card.name),
							// js = current.countVCards("j", card => get.type(card) == "delay" && card.storage.equipEnable && name == get.name(card, false));
						return get.sgnAttitude(player, current) * (es + js + current == player ? hs : 0);
					});
					return num;
				});
				if (result?.bool && result.links?.length) {
					const name = result.links[0][2],
						map = {
							duanjian: "zc26_zhuge",
							serafuku: "zc26_bagua",
							yonglv: "zc26_lingling",
						};
					game.log(player, "将", `#y${get.translation({ name })}`, "升级为", `#y${get.translation({ name: map[name] })}`);
					
					// 修改
					player.markSkill("zc26_huaxiu_" + map[name] + "_mark");
					
					player.addTempSkill("zc26_huaxiu_restore", { player: "phaseBegin" });
					game.broadcastAll(
						function (name, player, map) {
							if (!_status.zc26_huaxiu_origin) {
								_status.zc26_huaxiu_origin = {};
								for (let name of ["duanjian", "serafuku", "yonglv"]) {
									_status.zc26_huaxiu_origin[name] = { info: lib.card[name], translate: lib.translate[name], translate2: lib.translate[`${name}_info`] };
								}
							}
							lib.card[name] = lib.card[map[name]];
							lib.translate[name] = lib.translate[map[name]];
							lib.translate[`${name}_info`] = lib.translate[`${map[name]}_info`];
							// 临时修改（by 棘手怀念摧毁）
							if (_status.zc26_huaxiu == null) _status.zc26_huaxiu = {};
							if (_status.zc26_huaxiu[name] == null) _status.zc26_huaxiu[name] = [];
							// _status.zc26_huaxiu ??= {};
							// _status.zc26_huaxiu[name] ??= [];
							_status.zc26_huaxiu[name].add(player);
							lib.init.sheet(`
								.card[data-card-name = "${name}"]>.image {
									background-image: url(${lib.assetURL}image/card/${map[name]}.png) !important;
								}
							`);
						},
						name,
						player,
						map
					);
					function check(name, target, method) {
						if (method == "e") {
							// 临时修改（by 棘手怀念摧毁）
							return target.hasCard({ name }, "e");
							// return target.hasVCard({ name }, "e");
						} else if (method == "j") {
							// 临时修改（by 棘手怀念摧毁）
							return target.hasCard(card => {
							// return target.hasVCard(card => {
								if (!card.storage?.equipEnable) {
									return false;
								}
								return card.cards.some(cardx => cardx.name == name);
							}, "j");
						}
						return false;
					}
					const removeSkill = get.skillsFromEquips([{ name }]),
						addSkill = get.skillsFromEquips([{ name: map[name] }]);
					for (let current of game.players) {
						let keepSkills = Object.values(current.additionalSkills).flat(),
							removeSkill2 = removeSkill.slice().removeArray(keepSkills);
						if (removeSkill2.length) {
							current.removeSkill(removeSkill2);
						}
						if (check(name, current, "j")) {
							current.addSkill(addSkill);
						}
						if (check(name, current, "e")) {
							current.addEquipTrigger({ name: map[name] });
						}
						// 临时修改（by 棘手怀念摧毁）
						let vcards = current.getCards("e", { name });
						// let vcards = current.getVCards("e", { name });
						while (vcards.length) {
							let vcard = vcards.shift();
							// 临时修改（by 棘手怀念摧毁）
							// current.$addVirtualEquip(vcard, vcard.cards);
						}
					}
				}
			},
			subSkill: {
				// 修改
				zc26_zhuge_mark: {
					charlotte: true,
					mark: true,
					marktext: "折戟",
					intro: {
						content() { return "“藏巧”装备牌【折戟】的效果修改为【魂·诸葛连弩】：<br>" + get.translation("zc26_zhuge_info") },
					},
				},
				zc26_bagua_mark: {
					charlotte: true,
					mark: true,
					marktext: "女装",
					intro: {
						content() { return "“藏巧”装备牌【女装】的效果修改为【魂·八卦阵】：<br>" + get.translation("zc26_bagua_info") },
					},
				},
				zc26_lingling_mark: {
					charlotte: true,
					mark: true,
					marktext: "庸驴",
					intro: {
						content() { return "“藏巧”装备牌【庸驴】的效果修改为【軨軨】：<br>" + get.translation("zc26_lingling_info") },
					},
				},
				
				restore: {
					charlotte: true,
					onremove(player, skill) {
						get.info(skill).contentx.apply(this, [null, null, player]);
					},
					trigger: { player: "phaseBegin" },
					filter(event, player) {
						for (let name of ["duanjian", "serafuku", "yonglv"]) {
							if (_status.zc26_huaxiu?.[name]?.includes(player)) {
								return true;
							}
						}
						return false;
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						get.info(event.name).contentx.apply(this, arguments);
					},
					contentx(event, trigger, player) {
						game.broadcastAll(function (player) {
							for (let name of ["duanjian", "serafuku", "yonglv"]) {
								if (_status.zc26_huaxiu?.[name]?.includes(player)) {
									_status.zc26_huaxiu[name].remove(player);
									lib.init.sheet(`
										.card[data-card-name = "${name}"]>.image {
											background-image: url(${lib.assetURL}image/card/${name}.png) !important;
										}
									`);
								}
							}
						}, player);
						function check(name, target, method) {
							if (method == "e") {
								// 临时修改（by 棘手怀念摧毁）
								return target.hasCard({ name }, "e");
								// return target.hasVCard({ name }, "e");
							} else if (method == "j") {
								// 临时修改（by 棘手怀念摧毁）
								return target.hasCard(card => {
								// return target.hasVCard(card => {
									if (!card.storage?.equipEnable) {
										return false;
									}
									return card.cards.some(cardx => cardx.name == name);
								}, "j");
							}
							return false;
						}
						const map = {
							duanjian: "zc26_zhuge",
							serafuku: "zc26_bagua",
							yonglv: "zc26_lingling",
						};
						for (let name of ["duanjian", "serafuku", "yonglv"]) {
							if (name in _status.zc26_huaxiu && !_status.zc26_huaxiu[name].length) {
								game.log(`#y${get.translation({ name })}`, "的效果还原了");
								
								// 修改
								player.unmarkSkill("zc26_huaxiu_" + map[name] + "_mark");
								
								game.broadcastAll(function (name) {
									delete _status.zc26_huaxiu[name];
								}, name);
								lib.card[name] = _status.zc26_huaxiu_origin[name].info;
								lib.translate[name] = _status.zc26_huaxiu_origin[name].translate;
								lib.translate[`${name}_info`] = _status.zc26_huaxiu_origin[name].translate2;
								const addSkill = get.skillsFromEquips([{ name }]),
									removeSkill = get.skillsFromEquips([{ name: map[name] }]);
								for (let current of game.players) {
									let keepSkills = Object.values(current.additionalSkills).flat(),
										removeSkill2 = removeSkill.slice().removeArray(keepSkills);
									if (removeSkill2.length) {
										current.removeSkill(removeSkill2);
									}
									if (check(name, current, "j")) {
										current.addSkill(addSkill);
									} else if (check(name, current, "e")) {
										current.addEquipTrigger({ name });
									}
									// 临时修改（by 棘手怀念摧毁）
									let vcards = current.getCards("e", { name });
									// let vcards = current.getVCards("e", { name });
									while (vcards.length) {
										let vcard = vcards.shift();
										// 临时修改（by 棘手怀念摧毁）
										// current.$addVirtualEquip(vcard, vcard.cards);
									}
								}
							}
						}
					},
				},
			},
			ai: {
				order: 10,
				result: {
					player: 1,
				},
			},
		},
		
		// ※ 司敌（手杀曹真彩蛋）技能描述及代码修改
		// ※ 神曹丕〖天行〗技能修改（含技能描述修改）：行动→放权
		disordersidi:{audio:2},
		discretesidi:{
			audio:'disordersidi',
			trigger:{player:'useCardAfter'},
			direct:true,
			filter:function(event,player){
				return get.type(event.card, null, false)!='delay'&&game.hasPlayer(function(current){
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
						if(get.type(event.card, null, false)!='delay'){
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
						if(get.type(event.card, null, false)=='delay'||!player.storage.discretesidi||event.targets.length!=1) return false;
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
				player.addSkills(['tianxing','new_rejianxiong']);
				player.loseMaxHp();
				player.gain(player.getExpansions('chuyuan'),'gain2','fromStorage');
			},
			ai: {
				combo: "chuyuan",
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
				player.removeSkills('chuyuan');
				player.chooseControl('rerende','rezhiheng','olluanji','olfangquan').set('prompt','选择获得一个技能').set('ai',function(){
					var player=_status.event.player;
					if(!player.hasSkill('luanji')&&!player.hasSkill('olluanji')&&player.getUseValue({name:'wanjian'})>4) return 'olluanji';
					if(!player.hasSkill('rezhiheng')) return 'rezhiheng';
					if(!player.hasSkill('olfangquan')) return 'olfangquan';
					return 'rerende';
				});
				'step 2'
				player.addSkills(result.control);
			},
			ai: {
				combo: "chuyuan",
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
				if (lib.skill.jxlianpo.getMax(event.player).length <= 1) return false;
				return event.source&&event.source.isIn();
			},
			forced:true,
			logTarget:'source',
			getMax: (dead) => {
				let curs = game.players.slice(0);
				if (get.itemtype(dead) === "player" && !curs.includes(dead)) curs.push(dead);
				const map={
					zhu: curs.filter(current => {
						const identity=current.identity;
						let num=0;
						if(identity=='zhu'||identity=='zhong'||identity=='mingzhong') num++;
						num+=current.countMark('jxlianpo_mark_zhong');
						return num;
					}).length,
					fan: curs.filter(current => {
						let num=0;
						if(current.identity=='fan') num++;
						num+=current.countMark('jxlianpo_mark_fan');
						return num;
					}).length,
					nei: curs.filter(current => {
						let num=0;
						if(current.identity=='nei') num++;
						num+=current.countMark('jxlianpo_mark_nei');
						return num;
					}).length,
					commoner: curs.filter(current => {
						let num=0;
						if(current.identity=='commoner') num++;
						num+=current.countMark('jxlianpo_mark_commoner');
						return num;
					}).length,
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
				source.chooseDrawRecover(2, true);
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
		
		// 修复部分杯具洗具彩蛋
		// 本体已保留足够多的彩蛋了（个人建议总数不超过10个）
		yanxi:{
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return target!=player&&target.countCards('h')>0;
			},
			filter:function(event,player){
				return game.hasPlayer(function(current){
					return current!=player&&current.countCards('h')>0;
				});
			},
			content:function(){
				'step 0'
				event.card=target.getCards('h').randomGet();
				var cards;
				cards=get.cards(2);
				event.cards=cards.concat([event.card]);
				while(cards.length){
					ui.cardPile.insertBefore(cards.pop().fix(),ui.cardPile.firstChild);
				}
				if(get.mode()=='guozhan'){
					var num=ui.cardPile.childElementCount;
					var num1=get.rand(1,num-1),num2=get.rand(1,num-1);
					if(num1==num2){
						if(num1==0) num2++;
						else num1--;
					}
					event.cards=[event.card,ui.cardPile.childNodes[num1],ui.cardPile.childNodes[num2]];
				}
				game.updateRoundNumber();
				event.cards.randomSort();
				game.log(player,'展示了',event.cards);
				event.videoId=lib.status.videoId++;
				var str=get.translation(player)+'对'+get.translation(target)+'发动了【宴戏】';
				game.broadcastAll(function(str,id,cards){
					var dialog=ui.create.dialog(str,cards);
					dialog.videoId=id;
				},str,event.videoId,event.cards);
				game.addVideo('showCards',player,[str,get.cardsInfo(event.cards)]);
				game.delay(2);
				'step 1'
				var func=function(id,target){
					var dialog=get.idDialog(id);
					if(dialog) dialog.content.firstChild.innerHTML='猜猜哪张是'+get.translation(target)+'的手牌？';
				};
				if(player==game.me) func(event.videoId,target);
				else if(player.isOnline()) player.send(func,event.videoId,target);
				'step 2'
				var next=player.chooseButton(true);
				next.set('dialog',event.videoId);
				next.set('ai',function(button){
					if(_status.event.answer) return button.link==_status.event.answer?1:0;
					return get.value(button.link,_status.event.player);
				});
				if(player.hasSkillTag('viewHandcard',null,target,true)) next.set('answer',card);
				'step 3'
				game.broadcastAll('closeDialog',event.videoId);
				player.addTempSkill('yanxi2');
				var card2=result.links[0];
				if(card2==card){
					player.popup('猜对了');
					cards.remove(card2);
					player.$gain2(cards);
					player.gain(cards,'log').gaintag.add('yanxi');
					player.gain(card,target,'bySelf','give').gaintag.add('yanxi');
				}
				else{
					player.popup('猜错了');
					player.gain(card2,'gain2').gaintag.add('yanxi');
				}
			},
			ai:{
				order:6,
				result:{
					player:1,
					target:-0.6,
				},
			},
		},
		
		zhenfeng:{
			audio:2,
			trigger:{global:'useCard'},
			usable:1,
			filter:function(event,player){
				return event.player!=player&&event.player==_status.currentPhase&&event.player.countCards('h')<=event.player.getHp();
			},
			check:function(event,player){
				var type=get.type2(event.card,event.player);
				if(type=='equip'&&event.player.hasCard(card=>event.player.hasValueTarget(card))) return false;
				if(get.attitude(player,event.player)>0&&event.player.getHp()+event.player.countCards('hs',['shan','caochuan'])<=3) return false;
				return true;
			},
			onremove:true,
			logTarget:'player',
			content:function(){
				'step 0'
				var choices=Array.from({length:trigger.player.countCards('h')+1}).map((_,i)=>get.cnNumber(i,true));
				var type=get.type2(trigger.card,trigger.player);
				player.chooseControl(choices).set('prompt','镇锋：猜测其手牌中的'+get.translation(type)+'牌数').set('ai',()=>{
					return _status.event.choice;
				}).set('choice',function(){
					var num=trigger.player.countCards('h',card=>get.type2(card)==type);
					var knownNum = trigger.player.countKnownCards(_status.event.player,card=>get.type2(card)==type);
					if(trigger.player.isAllCardsKnown(_status.event.player)){
						return knownNum;
					}
					var restNum = num - knownNum;
					var numx;
					if(type=='basic') numx=num+Math.floor(Math.random()*restNum+1);
					else if(type=='trick'){
						if(num>2) numx=2;
						else numx=1;
						if(Math.random()<0.5){
							numx+=Math.random()>0.5?1:-1;
						}
					}
					else{
						numx=[0,1].randomGet();
					}
					if(numx<knownNum) numx=knownNum;
					else if(numx>=choices.length) numx=choices.length-1;
					return numx;
				}());
				'step 1'
				var guessedNum=result.index;
				player.chat('我猜'+get.cnNumber(guessedNum)+'张');
				game.log(player,'猜测',trigger.player,'有',get.cnNumber(guessedNum)+'张'+get.translation(type)+'牌');
				event.guessedNum=guessedNum;
				game.delay();
				'step 2'
				var type=get.type2(trigger.card,trigger.player);
				var count=trigger.player.countCards('h',card=>get.type2(card)==type);
				var guessedNum=event.guessedNum;
				if(count==guessedNum){
					player.popup('猜测正确','wood');
					game.log(player,'猜测','#g正确');
					if(player.countMark('zhenfeng')<5) player.addMark('zhenfeng',1,false);
					player.draw(player.countMark('zhenfeng'));
					if(player.canUse('sha',trigger.player,false)) player.useCard({name:'sha',isCard:true},trigger.player);
				}
				else{
					player.popup('猜测错误','fire');
					game.log(player,'猜测','#y错误');
					player.clearMark('zhenfeng');
					if(Math.abs(count-guessedNum)>1&&trigger.player.canUse('sha',player,false)){
						trigger.player.useCard({name:'sha',isCard:true},player,false,'noai');
					}
				}
			},
			intro:{
				content:'已连续猜对#次',
			},
		},
		
		wylianji:{
			enable:'phaseUse',
			audio:2,
			usable:1,
			filter:function(event,player){
				return player.hasCard(lib.skill.wylianji.filterCard);
			},
			check:function(card){
				if(card.name=='sha') return 1;
				else{
					if(get.tag(card,'damage')){
						if(get.tag(card,'multineg')) return 5;
						return 2;
					}
				}
				return 0;
			},
			filterCard:function(card){
				return get.name(card)=='sha'||(get.type(card,'trick')=='trick'&&get.color(card)=='black'&&!get.info(card).multitarget)&&get.info(card).enable;
			},
			filterTarget:function(card,player,target){
				return target!=player&&!target.isMin()&&
				(player.canUse(card,target,false)||game.hasPlayer(function(current){
					return current!=player&&target.canUse(card,current);
				}));
			},
			discard:false,
			lose:true,
			delay:false,
			content:function(){
				'step 0'
				player.showCards(get.translation(player)+'对'+get.translation(target)+'发动了【连计】',cards);
				'step 1'
				var equip1=get.cardPile2(function(card){
					return get.subtype(card)=='equip1';
				});
				if(!equip1){
					player.popup('连计失败');
					game.log('牌堆中无装备');
					event.finish();
					return;
				}
				if(equip1.name=='qinggang'&&!lib.inpile.includes('qibaodao')){
					equip1.remove();
					equip1=game.createCard2('qibaodao',equip1.suit,equip1.number);
				}
				target.$draw(equip1);
				target.chooseUseTarget(true,equip1,'nothrow','nopopup');
				game.delay();
				'step 2'
				game.updateRoundNumber();
				var card=cards[0];
				var bool1=game.hasPlayer(function(current){
					return current!=player&&target.canUse(card,current);
				});
				var bool2=player.canUse(card,target,false);
				if(bool1&&bool2){
					target.chooseControl(function(){
						return 0;
					}).set('choiceList',[
						'对除'+get.translation(player)+'以外的角色使用'+get.translation(cards)+'，并将装备区里的武器牌交给该牌的一个目标角色',
						'视为'+get.translation(player)+'对你使用'+get.translation(cards)+'，并将装备区内的武器牌交给'+get.translation(player)
					]);
				}
				else if(bool1){
					event.directindex=0;
				}
				else if(bool2){
					event.directindex=1;
				}
				else{
					event.finish();
				}
				'step 3'
				var card=cards[0];
				if(result&&typeof event.directindex!='number'){
					event.directindex=result.index;
				}
				if(event.directindex==1){
					event.insert(lib.skill.wylianji.content_use,{
						player:player,
						target:target,
						card:card
					})
				}
				else{
					event.insert(lib.skill.wylianji.content_give,{
						player:target,
						card:card,
						targets:game.filterPlayer(function(current){
							return current!=player;
						})
					});
				}
			},
			content_use:function(){
				'step 0'
				player.useCard(card,target);
				'step 1'
				if(!get.owner(card)){
					target.gain(card,'gain2');
				}
				'step 2'
				var equip1=target.getEquips(1);
				if(equip1.length){
					game.delay();
					target.give(equip1,player);
					target.line(player);
				}
			},
			content_give:function(){
				'step 0'
				var select=get.select(get.info(card).selectTarget);
				if(select[1]==-1){
					for(var i=0;i<targets.length;i++){
						if(!player.canUse(card,targets[i])){
							targets.splice(i--,1);
						}
					}
					if(targets.length){
						player.useCard(card,targets);
					}
					event.list=targets.slice(0);
					event.goto(2);
				}
				else{
					player.chooseTarget(select,'选择'+get.translation(card)+'的目标',true,function(cardx,player,target){
						var card=_status.event.card;
						return _status.event.targets.includes(target)&&player.canUse(card,target);
					}).set('ai',function(target){
						var card=_status.event.card;
						var player=_status.event.player;
						return get.effect(target,card,player,player);
					}).set('targets',targets).set('card',card);
				}
				'step 1'
				if(result.bool){
					player.useCard(card,result.targets);
					event.list=result.targets.slice(0);
				}
				'step 2'
				var equip1=player.getEquips(1);
				if(equip1.length){
					for(var i=0;i<event.list.length;i++){
						if(event.list[i].isDead()) event.list.splice(i--,1);
					}
					if(event.list.length>1){
						player.chooseTarget(true,'将'+get.translation(equip1)+'交给一名角色',function(card,player,target){
							return _status.event.list.includes(target);
						}).set('ai',function(target){
							return get.attitude(player,target);
						}).set('list',_status.event.list);
						event.equip1=equip1;
					}
					else{
						if(event.list.length==1){
							player.give(equip1,event.list[0]);
							player.line(event.list);
						}
						event.finish();
					}
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool&&result.targets.length&&event.equip1){
					player.give(event.equip1,result.targets[0]);
					player.line(result.targets);
				}
			},
			ai:{
				order:7,
				result:{
					target:function(player,target){
						if(ui.selected.cards.length){
							var card=ui.selected.cards[0];
							var bool=(card.name!='sha');
							if(game.hasPlayer(function(current){
								return target.canUse(card,current,bool)&&get.effect(current,card,target,player)>0;
							})){
								var num=1;
								if(target.getEquip(1)){
									num=0.6;
								}
								if(target.hasSkillTag('noe')) 2*num;
								return num;
							}
						}
						return 0;
					}
				}
			}
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
		
		olweijie:{
			audio:2,
			enable:['chooseToUse','chooseToRespond'],
			filter(event,player){
				if(!game.hasPlayer(target=>{
					return get.distance(player,target)==1&&target.countCards('h');
				})||_status.currentPhase===player||event.olweijie) return false;
				return get.inpileVCardList(info=>{
					const name=info[2];
					return get.type(name)=='basic';
				}).some(card=>event.filterCard({name:card[2],nature:card[3],isCard:true},player,event));
			},
			chooseButton:{
				dialog(event,player){
					const list=get.inpileVCardList(info=>{
						const name=info[2];
						return get.type(name)=='basic';
					}).filter(card=>event.filterCard({name:card[2],nature:card[3],isCard:true},player,event));
					return ui.create.dialog('诿解',[list,'vcard']);
				},
				filter(button,player){
					return get.event().getParent().filterCard({name:button.link[2],nature:button.link[3],isCard:true},player,_status.event.getParent());
				},
				check(button){
					if(get.event().getParent().type!='phase') return 1;
					return get.event('player').getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
				},
				backup(links,player){
					return {
						viewAs:{
							name:links[0][2],
							nature:links[0][3],
							isCard:true,
						},
						filterCard:()=>false,
						selectCard:-1,
						*precontent(event,map){
							delete event.result.skill;
							const player=map.player;
							let stop=false;
							const result=yield player.chooseTarget('请选择一名距离为1的角色','弃置其一张手牌，若此牌牌名为【'+get.translation(event.result.card.name)+'】，则视为你使用/打出之',(card,player,target)=>{
								return get.distance(player,target)==1&&target.countCards('h');
							}).set('ai',target=>1-get.sgn(get.attitude(get.event('player'),target)));
							if(result.bool){
								const target=result.targets[0];
								player.logSkill('olweijie',target);
								player.tempBanSkill('olweijie',null,false);
								const result2=yield player.discardPlayerCard(target,'h',true).set('prompt2','若弃置的牌名为【'+get.translation(event.result.card.name)+'】，则视为你使用/打出之').set('ai',button=>{
									if(button.link.isKnownBy(get.event('player'))&&button.link.name==get.event('namex')) return 114514;
									return 1+Math.random();
								}).set('namex',event.result.card.name);
								if(result2.bool){
									const card=result2.cards[0];
									if(get.name(card,target)==event.result.card.name){
										player.popup('诿解成功');
										stop=true;
									}
									else player.popup('诿解失败');
								}
							}
							if(!stop){
								const evt=event.getParent();
								evt.set('olweijie',true);
								evt.goto(0);
								delete evt.openskilldialog;
								return;
							}
						},
					}
				},
				prompt(links,player){
					const nature=(get.translation(links[0][3])||'');
					const name='【'+get.translation(links[0][2])+'】';
					return '弃置距离为1的一名角色的一张手牌，若此牌牌名为'+name+'，则你视为使用'+nature+name;
				},
			},
			ai:{
				order:10,
				respondSha:true,
				respondShan:true,
				skillTagFilter(player,tag){
					const name=(tag=='respondSha'?'sha':'shan');
					return lib.skill.olweijie.hiddenCard(player,name);
				},
				result:{
					player(player){
						if(_status.event.dying&&get.attitude(player,_status.event.dying)<=0) return 0;
						return game.hasPlayer(target=>{
							if(get.attitude(player,target)>0) return false;
							return get.distance(player,target)==1&&target.countCards('h');
						})?1:0;
					},
				},
			},
			hiddenCard(player,name){
				if(!lib.inpile.includes(name)||_status.currentPhase===player||player.isTempBanned('olweijie')) return false;
				return get.type(name)=='basic'&&game.hasPlayer(target=>{
					return get.distance(player,target)==1&&target.countCards('h');
				});
			},
		},
		// 修改丁原义子标记彩蛋，最强神话（包括暴怒战神、神鬼无前）有此彩蛋，副将位吕布无此彩蛋
		cixiao:{
			audio:2,
			trigger:{player:'phaseZhunbeiBegin'},
			direct:true,
			filter:function(event,player){
				if(!game.hasPlayer(function(current){
					return current.hasSkill('panshi');
				})) return true;
				return player.countCards('he')>=1&&game.hasPlayer(function(current){
					return current!=player&&!current.hasSkill('panshi');
				});
			},
			content:function(){
				'step 0'
				if(game.hasPlayer(function(current){
					return current.hasSkill('panshi');
				})) event.goto(2);
				else player.chooseTarget(lib.filter.notMe,get.prompt('cixiao'),'令一名其他角色获得「义子」标记').set('ai',function(target){
					var player=_status.event.player;
					var att=-get.attitude(player,target);
					return att*target.countCards('h');
				});
				'step 1'
				if(result.bool){
					var target=result.targets[0];
					player.logSkill('cixiao',target);
					target.addSkills('panshi');
					// 彩蛋
					var str;
					if(target.name.includes('lvbu')&&(get.translation(target.name).includes('吕布')||['最强神话','暴怒战神','神鬼无前'].includes(get.translation(target.name)))){
						str='公若不弃，布愿拜为义父';
					} else if(target.sex=='male'){
						str='我是'+get.translation(player)+'的义子';
					} else if(target.sex=='female'){
						str='我是'+get.translation(player)+'的义女';
					} else str='我们是'+get.translation(player)+'的义子和义女';
					target.storage.panshi=str;
				}
				event.finish();
				'step 2'
				var list=game.filterPlayer(function(current){
					return current.hasSkill('panshi');
				});
				player.chooseCardTarget({
					prompt:get.prompt('cixiao'),
					prompt2:('弃置一张牌并将'+get.translation(list)+'的「义子」标记转移给其他角色'),
					position:'he',
					filterTarget:function(card,player,target){
						return player!=target&&!target.hasSkill('panshi');
					},
					filterCard:lib.filter.cardDiscardable,
					ai1:function(card){
						if(_status.event.goon) return 5-get.value(card);
						return 0;
					},
					ai2:function(target){
						var player=_status.event.player;
						var att=-get.attitude(player,target);
						return att*target.countCards('h');
					},
					goon:function(target){
						var att=-get.attitude(player,target);
						return att*target.countCards('h')<=0;
					}(list[0]),
				});
				'step 3'
				if(result.bool){
					var target=result.targets[0];
					player.logSkill('cixiao');
					player.discard(result.cards).delay=false;
					player.line2(game.filterPlayer(function(current){
						if(current.hasSkill('panshi')){
							current.removeSkills('panshi');
							return true;
						}
					}).concat(result.targets),'green');
					target.addSkills('panshi');
					// 彩蛋
					var str;
					if(target.name.includes('lvbu')&&(get.translation(target.name).includes('吕布')||['最强神话','暴怒战神','神鬼无前'].includes(get.translation(target.name)))){
						str='公若不弃，布愿拜为义父';
					} else if(target.sex=='male'){
						str='我是'+get.translation(player)+'的义子';
					} else if(target.sex=='female'){
						str='我是'+get.translation(player)+'的义女';
					} else str='我们是'+get.translation(player)+'的义子和义女';
					target.storage.panshi=str;
				}
				else event.finish();
				'step 4'
				game.delayx();
			},
			derivation:'panshi',
			ai:{threaten:8},
		},
		panshi:{
			trigger:{player:'phaseZhunbeiBegin'},
			forced:true,
			filter:function(event,player){
				return player.countCards('h')>0&&game.hasPlayer(function(current){
					return current!=player&&current.hasSkill('cixiao');
				});
			},
			content:function(){
				'step 0'
				var targets=game.filterPlayer(function(current){
					return current!=player&&current.hasSkill('cixiao');
				});
				if(targets.length==1){
					event.target=targets[0];
					player.chooseCard('h',true,'叛弑：将一张手牌交给'+get.translation(targets));
				}
				else player.chooseCardTarget({
					prompt:'叛弑：将一张手牌交给'+get.translation(targets)+'中的一名角色',
					filterCard:true,
					position:'h',
					targets:targets,
					forced:true,
					filterTarget:function(card,player,target){
						return _status.event.targets.includes(target);
					},
				});
				'step 1'
				if(result.bool){
					if(!target) target=result.targets[0];
					player.line(target);
					player.give(result.cards,target);
				}
			},
			mark:true,
			marktext:'义子',
			intro:{
				name:'义子',
				content:'$',
			},
			group:'panshi_damage',
			ai: {
				halfneg: true
			},
		},
		panshi_damage:{
			trigger:{source:'damageBegin1'},
			forced:true,
			logTarget:'player',
			sourceSkill: "panshi",
			filter:function(event,player){
				return player.isPhaseUsing()&&event.card&&event.card.name=='sha'&&event.player.hasSkill('cixiao');
			},
			content:function(){
				trigger.num++;
				// 彩蛋
				if(trigger.source.name.includes('lvbu')&&(get.translation(trigger.source.name).includes('吕布')||['最强神话','暴怒战神','神鬼无前'].includes(get.translation(trigger.source.name)))){
					trigger.source.storage.panshi='吾堂堂丈夫，安肯为汝子乎！';
					trigger.source.chat('吾堂堂丈夫，安肯为汝子乎！');
				}
				var evt=event.getParent('phaseUse');
				if(evt&&evt.player==player) evt.skipped=true;
			},
		},
		
		
		// 武将发动技能顺序调整，临时方案（神诸葛亮先发动大雾后发动狂风、神司马懿先发动忍戒后发动放逐）
		kuangfeng: {
			unique: true,
			audio: 2,
			priority: -1,//修改
			trigger: { player: "phaseJieshuBegin" },
			direct: true,
			filter(event, player) {
				return player.getExpansions("qixing").length;
			},
			content() {
				"step 0";
				player.chooseTarget(get.prompt("kuangfeng"), "令一名角色获得“狂风”标记").ai = function (
					target
				) {
					return -1;
				};
				"step 1";
				if (result.bool) {
					var targets = result.targets.sortBySeat();
					player.logSkill("kuangfeng", targets, "fire");
					var length = targets.length;
					targets.forEach((target) => {
						target.addAdditionalSkill(`kuangfeng_${player.playerid}`, "kuangfeng2");
						target.markAuto("kuangfeng2", [player]);
					});
					player.addTempSkill("kuangfeng3", { player: "phaseBeginStart" });
					player.chooseCardButton(
						"选择弃置" + get.cnNumber(length) + "张“星”",
						length,
						player.getExpansions("qixing"),
						true
					);
				} else {
					event.finish();
				}
				"step 2";
				player.loseToDiscardpile(result.links);
			},
			ai: { combo: "qixing" },
		},
		kuangfeng2: {
			charlotte: true,
			intro: {
				content(storage) {
					return `共有${storage.length}枚标记`;
				},
			},
			ai: {
				effect: {
					target(card, player, target, current) {
						if (get.tag(card, "fireDamage") && current < 0) return 1.5;
					},
				},
			},
		},
		kuangfeng3: {
			trigger: { global: "damageBegin3" },
			sourceSkill: "kuangfeng",
			filter(event, player) {
				return event.hasNature("fire") && event.player.getStorage("kuangfeng2").includes(player);
			},
			charlotte: true,
			forced: true,
			logTarget: "player",
			content() {
				trigger.num++;
			},
			onremove(player) {
				game.countPlayer2((current) => {
					if (current.getStorage("kuangfeng2").includes(player)) {
						current.unmarkAuto("kuangfeng2", player);
						current.removeAdditionalSkill(`kuangfeng_${player.playerid}`);
					}
				}, true);
			},
		},
		jilue_fangzhu: {
			audio: 1,
			trigger: { player: "damageEnd" },
			direct: true,
			priority: -1,//修改
			filter(event, player) {
				return player.hasMark("renjie");
			},
			content() {
				"step 0";
				player
					.chooseTarget("是否弃置一枚“忍”，并发动【放逐】？", function (card, player, target) {
						return player != target;
					})
					.set("ai", (target) => {
						if (target.hasSkillTag("noturn")) return 0;
						var player = _status.event.player;
						var current = _status.currentPhase;
						var dis = current ? get.distance(current, target, "absolute") : 1;
						var draw = player.getDamagedHp();
						var att = get.attitude(player, target);
						if (att == 0)
							return target.hasJudge("lebu")
								? Math.random() / 3
								: Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2;
						if (att > 0) {
							if (target.isTurnedOver()) return att + draw;
							if (draw < 4) return -1;
							if (current && target.getSeatNum() > current.getSeatNum())
								return att + draw / 3;
							return (
								(10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) +
								dis / (2 * game.countPlayer())
							);
						} else {
							if (target.isTurnedOver()) return att - draw;
							if (draw >= 5) return -1;
							if (current && target.getSeatNum() <= current.getSeatNum())
								return -att + draw / 3;
							return (
								(4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) +
								(2 * game.countPlayer()) / dis
							);
						}
					});
				"step 1";
				if (result.bool) {
					player.removeMark("renjie", 1);
					player.logSkill("jilue_fangzhu", result.targets);
					result.targets[0].draw(player.maxHp - player.hp);
					result.targets[0].turnOver();
				}
			},
		},
		
		
		// 临时删除谋弈提示，等对策加提示后加回
		sbtieji: {
			audio: ["sbtieji1.mp3", "sbtieji_true1.mp3", "sbtieji_true2.mp3", "sbtieji_false.mp3"],
			trigger: { player: "useCardToPlayered" },
			logTarget: "target",
			logAudio: () => "sbtieji1.mp3",
			filter: function (event, player) {
				return player != event.target && event.card.name == "sha" && event.target.isIn();
			},
			check: function (event, player) {
				return get.attitude(player, event.target) < 0;
			},
			content: function () {
				"step 0";
				var target = trigger.target;
				event.target = target;
				target.addTempSkill("fengyin");
				trigger.directHit.add(target);
				player
					.chooseToDuiben(target)
					.set("title", "谋弈")
					.set("namelist", ["出阵迎战", "拱卫中军", "直取敌营", "扰阵疲敌"])
					// .set("translationList", [
						// `以防止${get.translation(player)}摸2张牌`,
						// `以防止${get.translation(player)}获得你1张牌`,
						// `若成功，你获得${get.translation(target)}1张牌`,
						// `若成功，你摸2张牌`,
					// ])
					.set("ai", (button) => {
						var source = get.event().getParent().player,
							target = get.event().getParent().target;
						if (!target.countCards("he") && button.link[2] == "db_def2") return 10;
						if (
							!target.countCards("he") &&
							get.attitude(target, source) <= 0 &&
							button.link[2] == "db_atk1"
						)
							return 10;
						return 1 + Math.random();
					});
				"step 1";
				if (result.bool) {
					if (result.player == "db_def1") player.gainPlayerCard(target, "he", true);
					else player.draw(2);
				}
			},
			ai: {
				ignoreSkill: true,
				skillTagFilter: function (player, tag, arg) {
					if (tag == "directHit_ai") {
						return get.attitude(player, arg.target) <= 0;
					}
					if (!arg || arg.isLink || !arg.card || arg.card.name != "sha") return false;
					if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
					if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || lib.skill[arg.skill].persevereSkill || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
				},
				directHit_ai: true,
			},
			subSkill: {
				true1: { audio: true },
				true2: { audio: true },
				false: { audio: true },
			},
		},
		sbduanliang: {
			audio: ["sbduanliang1.mp3", "sbduanliang_true1.mp3", "sbduanliang_true2.mp3", "sbduanliang_false.mp3"],
			enable: "phaseUse",
			usable: 1,
			logAudio: () => "sbduanliang1.mp3",
			filterTarget: lib.filter.notMe,
			content: function () {
				"step 0";
				player
					.chooseToDuiben(target)
					.set("title", "谋弈")
					.set("namelist", ["固守城池", "突出重围", "围城断粮", "擂鼓进军"])
					// .set("translationList", [
						// `以防止${get.translation(player)}通过此技能对你使用【决斗】`,
						// `以防止${get.translation(player)}通过此技能对你使用【兵粮寸断】`,
						// `若成功，将牌堆顶的牌当做【兵粮寸断】对${get.translation(target)}使用`,
						// `若成功，视为对${get.translation(target)}使用【决斗】`,
					// ])
					.set("ai", (button) => {
						var source = _status.event.getParent().player,
							target = _status.event.getParent().target;
						if (
							get.effect(target, { name: "juedou" }, source, source) >= 10 &&
							button.link[2] == "db_def2" &&
							Math.random() < 0.5
						)
							return 10;
						return 1 + Math.random();
					});
				"step 1";
				if (result.bool) {
					if (result.player == "db_def1") {
						if (target.hasJudge("bingliang")) player.gainPlayerCard(target, "he", true);
						else {
							if (ui.cardPile.childNodes.length > 0) {
								if (
									player.canUse(
										get.autoViewAs({ name: "bingliang" }, [ui.cardPile.firstChild]),
										target,
										false
									)
								) {
									player.useCard({ name: "bingliang" }, target, get.cards());
								}
							}
						}
					} else {
						var card = { name: "juedou", isCard: true };
						if (player.canUse(card, target)) player.useCard(card, target);
					}
				}
			},
			ai: {
				threaten: 1.2,
				order: 5.5,
				result: {
					player: 1,
					target: -1,
				},
			},
			subSkill: {
				true1: { audio: true },
				true2: { audio: true },
				false: { audio: true },
			},
		},
		xinwurong: {
			audio: 3,
			enable: "phaseUse",
			usable: 1,
			filterTarget: lib.filter.notMe,
			content: function () {
				"step 0";
				player
					.chooseToDuiben(target)
					.set("title", "谋弈")
					.set("namelist", ["反抗", "归顺", "镇压", "安抚"])
					// .set("translationList", [
						// `对方选择镇压：${get.translation(player)}对你造成1点伤害，然后其摸1张牌<br>对方选择安抚：${get.translation(player)}受到1点伤害，然后其摸2张牌`,
						// `对方选择镇压：${get.translation(player)}获得你1张牌，然后其交给你2张牌<br>对方选择安抚：你须交给${get.translation(player)}两张牌（若你牌数不足2张，则改为其令你跳过你下个摸牌阶段）`,
						// `对方选择反抗：你对${get.translation(target)}造成1点伤害，然后你摸1张牌<br>对方选择归顺：你获得${get.translation(target)}1张牌，然后你交给其2张牌`,
						// `对方选择反抗：你受到1点伤害，然后你摸2张牌<br>对方选择归顺：${get.translation(target)}须交给你两张牌（若其牌数不足两张，则改为令其跳过其下个摸牌阶段）`,
					// ])
					.set("ai", (button) => 1 + Math.random());
				"step 1";
				if (result.bool) {
					if (result.player == "db_def1") {
						target.damage();
						player.draw();
						event.finish();
					} else {
						var cards = target.getCards("he");
						if (cards.length < 2) {
							target.skip("phaseDraw");
							target.addTempSkill("xinwurong_skip", { player: "phaseDrawSkipped" });
							event.finish();
						} else if (cards.length == 2) event._result = { bool: true, cards: cards };
						else
							target.chooseCard(
								"怃戎：交给" + get.translation(player) + "两张牌",
								2,
								true,
								"he"
							);
					}
				} else {
					if (result.player == "db_def1") {
						player.gainPlayerCard(target, "he", true);
						event.goto(3);
					} else {
						player.damage();
						player.draw(2);
						event.finish();
					}
				}
				"step 2";
				if (result.bool) player.gain(result.cards, target, "giveAuto");
				event.finish();
				"step 3";
				var cards = player.getCards("he");
				if (!cards.length) event.finish();
				else if (cards.length <= 2) event._result = { bool: true, cards: cards };
				else player.chooseCard("怃戎：交给" + get.translation(target) + "两张牌", 2, true, "he");
				"step 4";
				if (result.bool) target.gain(result.cards, player, "giveAuto");
			},
			ai: {
				order: 7,
				result: {
					player: 1,
					target: -1,
				},
			},
			subSkill: {
				skip: {
					charlotte: true,
					mark: true,
					intro: { content: "跳过下个摸牌阶段" },
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
		
		// 临时修复旧丁奉奋迅弹窗
		fenxun2:{
			// mark:'character',
			onremove:true,
			intro:{
				content:'到$的距离视为1'
			},
			mod:{
				globalFrom:function(from,to){
					if(from.getStorage('fenxun2').includes(to)){
						return -Infinity;
					}
				}
			}
		},
		
		// 谋黄盖苦肉适配护甲上限修改
		sbkurou: {
			audio: 2,
			trigger: { player: "phaseUseBegin" },
			direct: true,
			group: "sbkurou_gain",
			content: function () {
				"step 0";
				player.chooseCardTarget({
					prompt: get.prompt("sbkurou"),
					prompt2:
						"交给其他角色一张牌，若此牌为【桃】或【酒】，你失去2点体力，否则你失去1点体力",
					filterCard: true,
					position: "he",
					filterTarget: lib.filter.notMe,
					ai1: function (card) {
						if ((player.hp <= 1 && !player.canSave(player)) || player.hujia >= 5) return 0;
						if (
							get.value(card, player) > 6 &&
							!game.hasPlayer((current) => {
								return (
									current != player &&
									get.attitude(current, player) > 0 &&
									!current.hasSkillTag("nogain")
								);
							})
						)
							return 0;
						if (
							player.hp >= 2 &&
							(card.name == "tao" ||
								(card.name == "jiu" &&
									player.countCards("hs", (cardx) => {
										return cardx != card && get.tag(cardx, "save");
									}))) &&
							player.hujia <= 1
						)
							return 10;
						if (player.hp <= 1 && !player.canSave(player)) return 0;
						return 1 / Math.max(0.1, get.value(card));
					},
					ai2: function (target) {
						var player = _status.event.player,
							att = get.attitude(player, target);
						if (ui.selected.cards.length) {
							var val = get.value(ui.selected.cards[0]);
							att *= val >= 0 ? 1 : -1;
						}
						if (target.hasSkillTag("nogain")) att /= 9;
						return 15 + att;
					},
				});
				"step 1";
				if (result.bool) {
					var target = result.targets[0],
						card = result.cards[0];
					player.logSkill("sbkurou", target);
					if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.15);
					player.give(card, target);
					player.loseHp(["tao", "jiu"].includes(get.name(card, target)) ? 2 : 1);
				}
			},
			ai: {
				nokeep: true,
				skillTagFilter: function (player, tag, arg) {
					if (tag === "nokeep")
						return (
							(!arg || (arg.card && get.name(arg.card) === "tao")) &&
							player.hp <= 0 &&
							player.isPhaseUsing()
						);
				},
			},
			subSkill: {
				gain: {
					audio: "sbkurou",
					trigger: { player: "loseHpEnd" },
					forced: true,
					locked: false,
					filter: function (event, player) {
						// 修改
						var hujiashangxian = lib.config['extension_十周年UI_hujiashangxian'];
						var limit = 5;
						if(hujiashangxian != undefined) limit = Number(hujiashangxian);
						return player.isIn() && player.hujia < limit;
						// return player.isIn() && player.hujia < 5;
					},
					content: function () {
						"step 0";
						event.count = trigger.num;
						"step 1";
						player.changeHujia(2, null, true);
						"step 2";
						if (--event.count > 0) {
							player.logSkill("sbkurou_gain");
							event.goto(1);
						}
					},
					ai: {
						maihp: true,
						effect: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, 1];
								return 1.2;
							}
							if (get.tag(card, "loseHp")) {
								if (target.hp <= 1 || target.hujia >= 5) return;
								return [1, 1];
							}
						},
					},
				},
			},
		},
		
		// 归心（junkguixin）技能显示排序
		//魏武帝
		junkguixin: {
			forbid: ["guozhan"],
			init: function () {
				if (!_status.junkguixin) {
					_status.junkguixin = [];
					if (!_status.characterlist) {
						lib.skill.pingjian.initList();
					}
					for (const name of _status.characterlist) {
						if (!lib.character[name][3]) continue;
						_status.junkguixin.addArray(
							lib.character[name][3].filter((skill) => {
								var info = get.info(skill);
								return info && info.zhuSkill && (!info.ai || !info.ai.combo);
							})
						);
					}
				}
			},
			unique: true,
			audio: "guixin",
			trigger: { player: "phaseEnd" },
			direct: true,
			content: function () {
				"step 0";
				var controls = ["获得技能", "修改势力", "cancel2"];
				if (!_status.junkguixin.some((skill) => !player.hasSkill(skill, null, false, false)))
					controls.shift();
				player
					.chooseControl(controls)
					.set("prompt", get.prompt2("junkguixin"))
					.set("ai", () => (_status.event.controls.length == 3 ? "获得技能" : "cancel2"));
				"step 1";
				if (result.control != "cancel2") {
					var next = game.createEvent("junkguixinx");
					next.player = player;
					next.setContent(lib.skill.junkguixin["content_" + result.control]);
				}
			},
			content_获得技能: function () {
				"step 0";
				var list = _status.junkguixin
					.slice()
					.filter((skill) => !player.hasSkill(skill, null, false, false));
				if (!list.length) {
					event.finish();
					return;
				}
				// 排序（按技能名翻译的拼音）
				list.sort(function (a, b) {
					var aa = get.pinyin(get.translation(a)),
						bb = get.pinyin(get.translation(b));
					if (aa > bb) return 1;
					if (aa < bb) return -1;
					return 0;
				});
				list = list.map((skill) => {
					return [
						skill,
						'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' +
							get.translation(skill) +
							"】</div><div>" +
							lib.translate[skill + "_info"] +
							"</div></div>",
					];
				});
				player
					.chooseButton(["归心：选择获得一个主公技", [list, "textbutton"]], true)
					.set("ai", (button) => 1 + Math.random());
				"step 1";
				if (result.bool) {
					player.logSkill("junkguixin");
					player.addSkills(result.links[0]);
				}
			},
			content_修改势力: function () {
				"step 0";
				player
					.chooseTarget(
						"请选择【归心】的目标",
						"更改一名其他角色的势力",
						lib.filter.notMe,
						true
					)
					.set("ai", (target) => 1 + Math.random());
				"step 1";
				if (result.bool) {
					var target = result.targets[0];
					event.target = target;
					player.logSkill("junkguixin", target);
					var list = lib.group.slice();
					list.removeArray(["shen", target.group]);
					player
						.chooseControl(list)
						.set("prompt", "请选择" + get.translation(target) + "变更的势力")
						.set("ai", () => _status.event.controls.randomGet());
				} else event.finish();
				"step 2";
				if (result.control) {
					player.popup(get.translation(result.control + "2"));
					target.changeGroup(result.control);
				}
			},
		},
		
		// 侠鲁肃临时修复，lib.card[type]与卡牌美化（加fullskin）冲突，例如曹婴凌人
		twkaizeng: {
			audio: 2,
			global: "twkaizeng_want",
			refuseInfo: ["不给", "拒绝"],
			subSkill: {
				want: {
					audio: "twkaizeng",
					forceaudio: true,
					enable: "phaseUse",
					usable: 1,
					charlotte: true,
					filter: function (event, player) {
						if (player.hasSkill("twkaizeng_used")) return false;
						return game.hasPlayer((current) => {
							return current != player && current.hasSkill("twkaizeng");
						});
					},
					chooseButton: {
						dialog: function (event, player) {
							var targets = game.filterPlayer((current) => {
								return current != player && current.hasSkill("twkaizeng");
							});
							return ui.create.dialog(
								"###慨赠###" +
									"选择一种基本牌的牌名或非基本牌的类型，然后令" +
									get.translation(targets) +
									(targets.length > 1 ? "中的一人" : "") +
									"选择是否交给你任意张牌"
							);
						},
						chooseControl: function () {
							var list = [];
							var basic = [];
							for (var i = 0; i < lib.inpile.length; i++) {
								var name = lib.inpile[i];
								var type = get.type(name, "trick");
								if (type == "basic") {
									list.push(name);
									basic.push(name);
								} else list.add(type);
							}
							list.push("cancel2");
							return list;
						},
						check: function (event, player) {
							if (Math.random() < 0.4) {
								var list = _status.event.controls.slice();
								list.remove("du");
								return list.randomGet();
							}
							var targets = game.filterPlayer(
								(current) => current != player && current.hasSkill("twkaizeng")
							);
							targets.sort((a, b) => get.attitude(player, b) - get.attitude(player, a));
							var cards = targets[0].getCards("h");
							var list = [];
							for (var card of cards) {
								var type = get.type2(card);
								if (type == "basic") list.add(get.name(card));
								else list.add(type);
							}
							var need = ["trick", "equip"].randomSort();
							need.addArray(["sha", "jiu"].randomSort());
							for (var type of need) {
								if (list.includes(type)) return type;
							}
							return list.randomGet();
						},
						backup: function (result, player) {
							return {
								audio: "twkaizeng",
								type: result.control,
								log: false,
								delay: false,
								filterTarget: function (card, player, target) {
									return target.hasSkill("twkaizeng");
								},
								selectTarget: function () {
									var player = _status.event.player;
									var targets = game.filterPlayer(function (current) {
										return current != player && current.hasSkill("twkaizeng");
									});
									return targets.length > 1 ? 1 : -1;
								},
								prepare: function (cards, player, targets) {
									targets[0].logSkill("twkaizeng_want", player);
								},
								content: function () {
									"step 0";
									player.addTempSkill("twkaizeng_used");
									var type = lib.skill.twkaizeng_want_backup.type;
									// 临时修复
									var isbasic = (type == "equip" || type == "trick") ? undefined : lib.card[type];
									// var isbasic = lib.card[type];
									target
										.chooseCard(
											"慨赠：是否交给" + get.translation(player) + "任意张手牌？",
											"若你以此法：交给其至少两张牌，你摸一张牌；交给其的牌包含其选择的牌名或类型，你获得一张不为此牌名或类型的牌",
											[1, Infinity]
										)
										.set("ai", (card) => {
											if (!_status.event.goon) return -get.value(card);
											var player = _status.event.player,
												target = _status.event.getParent().player;
											if (
												ui.selected.cards.length > player.countCards("h") / 2 &&
												ui.selected.cards.length >= 2
											)
												return 0;
											var type = _status.event.type;
											// 临时修复
											var isbasic = (type == "equip" || type == "trick") ? undefined : lib.card[type];
											// var isbasic = lib.card[type];
											var add = 0;
											if (
												!ui.selected.cards.some(
													(i) =>
														get[isbasic ? "name" : "type2"](i, target) == type
												)
											)
												add += 3;
											if (ui.selected.cards.length < 2) add += 3;
											return (
												get.value(card, target) - get.value(card, player) + add
											);
										})
										.set("type", type)
										.set("goon", get.attitude(target, player) > 0);
									"step 1";
									if (result.bool) {
										var cards = result.cards;
										event.cards = cards;
										target.give(cards, player);
									} else {
										var refuseInfo = lib.skill.twkaizeng.refuseInfo.slice();
										if (get.attitude(target, player) < 0) refuseInfo.push("没门");
										target.chat(refuseInfo.randomGet());
										event.finish();
									}
									"step 2";
									if (cards.length > 1) target.draw();
									"step 3";
									var type = lib.skill.twkaizeng_want_backup.type;
									// 临时修复
									var isbasic = (type == "equip" || type == "trick") ? undefined : lib.card[type];
									// var isbasic = lib.card[type];
									var fn = isbasic ? "name" : "type2";
									if (cards.some((card) => get[fn](card, player) == type)) {
										var card = get.cardPile((cardx) => {
											return get[fn](cardx, target) != type;
										});
										if (card) target.gain(card, "gain2");
									}
									"step 4";
									game.delayx();
								},
								ai: {
									result: {
										target: 1,
									},
								},
							};
						},
						prompt: () => "请选择一名有【慨赠】的角色",
					},
					ai: {
						order: 10,
						result: {
							player: function (player) {
								var targets = game.filterPlayer((current) => {
									return current != player && current.hasSkill("twkaizeng");
								});
								for (var i of targets) if (get.attitude(player, i) > 0) return 1;
								return 0;
							},
						},
					},
				},
				want_backup: {},
				used: {},
			},
			ai: {
				threaten: 3,
			},
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

