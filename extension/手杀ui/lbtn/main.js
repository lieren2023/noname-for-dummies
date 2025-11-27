app.import(function (lib, game, ui, get, ai, _status, app) {
  var plugin = {
    name: 'lbtn',
    filter: function () {
		// 解除战棋/塔防/炉石模式不显示的限制
		return true
      // return !['chess', 'tafang', 'stone'].contains(get.mode());
    },
    content: function (next) {
    
/*    var head = ui.create.node('img');
			head.src= lib.assetURL + "extension/手杀ui/lbtn/images/按钮.png"
			head.style.cssText="display: block;width: 135px;height: 98px;position: absolute;top: 0px;right: 0px;background-color: transparent;z-index:1"
		head.onclick = function() {
		
		
		if(lib.extensionMenu.extension_概念武将.zyile_skin_Menu){	lib.extensionMenu.extension_概念武将.zyile_skin_Menu.onclick();
			}else{	
				// head.remove()
				game.closePopped();
				game.pause2();
				ui.click.configMenu();
				ui.system1.classList.remove('shown');
				ui.system2.classList.remove('shown');}
			}
	head.onclick = function() {
        //ui.menuContainer.show()
			}
		    document.body.appendChild(head);
		    
 */
		    
		    
   
      
      // app.waitAllFunction([
        // function(next) {
        
          // game.saveConfig('custom_button', false);
          // next();
        // },
        // function (next) {
          // lib.init.css(lib.assetURL + 'extension/' + app.name + '/' + plugin.name, 'main', next);
        // },
      // ], next);
      
    },
    precontent: function () {
    app.reWriteFunction(game, {
        updateRoundNumber: [function() {
       if (ui.cardRoundTime) {
            ui.cardRoundTime.updateRoundCard();
            
            
          }          
        }],
      });
      Object.assign(game.videoContent, {
        createCardRoundTime: function() {
          ui.cardRoundTime = plugin.create.cardRoundTime();
        },
        createhandcardNumber: function() {
          ui.handcardNumber = plugin.create.handcardNumber();
        },
        updateCardRoundTime: function(opts) {
          if (!ui.cardRoundTime) return;
          ui.cardRoundTime.node.roundNumber.innerHTML = '<span>第' + game.roundNumber + '轮</span>';
          ui.cardRoundTime.setNumberAnimation(opts.cardNumber);
        },
        updateCardnumber: function(opts) {
          if (!ui.handcardNumber) return;
          
         // ui.handcardNumber.setNumberAnimation(opts.cardNumber);
        },
        
      });
      app.reWriteFunction(ui.create, {
        me: [function() {
          plugin.create.control();
        }, null],
        arena: [null, function() {
          if (ui.time3) {
            clearInterval(ui.time3.interval);
              ui.time3.delete();
         }
          if (ui.cardPileNumber) ui.cardPileNumber.delete();
          ui.cardRoundTime = plugin.create.cardRoundTime();
          ui.handcardNumber = plugin.create.handcardNumber();
        }],
        cards: [null, function() {
          if (ui.cardRoundTime) {
            ui.cardRoundTime.updateRoundCard();
            
          }
        }],
        
        
        
      });      
      app.reWriteFunction(lib.configMenu.appearence.config, {
        update: [null, function(res, config, map) {
          map.control_style.hide();
          map.custom_button.hide();
          map.custom_button_system_top.hide();
          map.custom_button_system_bottom.hide();
          map.custom_button_control_top.hide();
          map.custom_button_control_bottom.hide();
          map.radius_size.hide();
        }],
      });


ui.click.menubut = function() {
				// head.remove()
				if(!ui.click.configMenu) return;
				game.closePopped();
				game.pause2();
				ui.click.configMenu();
				ui.system1.classList.remove('shown');
				ui.system2.classList.remove('shown');
			}
            
  ui.create.confirm = function(str, func) {
        var confirm = ui.confirm;
        if (!confirm) {
          confirm = ui.confirm = plugin.create.confirm();
        }
        confirm.node.ok.classList.add('disabled');
        confirm.node.cancel.classList.add('disabled');
          if (_status.event.endButton) {
               ui.confirm.node.cancel.classList.remove('disabled');
            }
        if (str) {
          if (str.indexOf('o') !== -1) {
            confirm.node.ok.classList.remove('disabled');
          }
          if (str.indexOf('c') !== -1) {
            confirm.node.cancel.classList.remove('disabled');
          }
          confirm.str = str;
        }

        if (func) {
          confirm.custom = func;
        }
        ui.updatec();
        confirm.update();
      };      
    },
    create: {
      control: function() {
      
      },
                   confirm: function () {
          
        var confirm = ui.create.control('<span>确定</span>', 'cancel');
        confirm.classList.add('lbtn-confirm');
        confirm.node = {
          ok: confirm.firstChild,
          cancel: confirm.lastChild,
        };
		if(_status.event.endButton){
			_status.event.endButton.close();
			// delete event.endButton;
		}
        confirm.node.ok.link = 'ok';
        confirm.node.ok.classList.add('primary');
        // confirm.node.cancel.classList.add('primary2');
        confirm.custom = plugin.click.confirm;
        app.reWriteFunction(confirm, {
          close: [function() {       
            this.classList.add('closing');
          }],
        });
        for (var k in confirm.node) {
         confirm.node[k].classList.add('disabled');          
          confirm.node[k].removeEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.control);          
          confirm.node[k].addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('disabled')) {
              if (this.link === 'cancel' && this.dataset.type === 'endButton' && _status.event.endButton) {
         
                _status.event.endButton.custom();                         
              ui.confirm.close();
              //  ui.updatec();
              }
              return;
            }
            
            if (this.parentNode.custom) {
				// 修复攻守进退（最终）取消后按钮消失的bug
				if (this.link === 'cancel') {
					if (window.confirmskills2) {
						if (_status.event.skill && _status.event.skill !== confirm.dataset.skill) {
							confirm.dataset.skill = _status.event.skill;
							window.confirmskills2.forEach(function (item) {
							item.remove();
							});
							ui.updatec();
						} else if (!_status.event.skill && confirm.dataset.skill) {
							delete confirm.dataset.skill;
							window.confirmskills2.forEach(function (item) {
							confirm.insertBefore(item, confirm.firstChild);
							});
							ui.updatec();
						}
					}
				}
				
              this.parentNode.custom(this.link, this);
            }
          });
        }
		
		// 新增lib.noGlobalSkillBtn，用于临时修复无按钮发动技能（无global的global技能），例如古剑奇谭食物牌（鲈鱼羹、蜜汁藕）
		if (
			(ui.skills2 && ui.skills2.skills.length)
			|| (ui.skills && ui.skills.skills.length && lib.noGlobalSkillBtn.some(item => ui.skills.skills.includes(item)))
		) {
			var skills = (ui.skills2 && ui.skills2.skills.length) ? ui.skills2.skills : [];
			if (ui.skills && ui.skills.skills.length){
				for (var j = 0; j < lib.noGlobalSkillBtn.length; j++) {
					if (ui.skills.skills.includes(lib.noGlobalSkillBtn[j])) skills.push(lib.noGlobalSkillBtn[j]);
				}
			}
		
        // if (ui.skills2 && ui.skills2.skills.length) {
          // var skills = ui.skills2.skills;
          window.confirmskills2 = [];
          for (var i = 0; i < skills.length; i++) {
            var item = document.createElement('div');
            item.link = skills[i];
            item.innerHTML = get.translation(skills[i]);
            item.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function(e) {
              e.stopPropagation();
              ui.click.skill(this.link);
            });
            
            item.dataset.type = 'skill2';
			window.confirmskills2.push(item);
			/*if(ui.updateSkillControl)   ui.updateSkillControl(game.me, true);*/
            confirm.insertBefore(item, confirm.firstChild);
          }
        }

        confirm.update = function() {
			// 结束回合按钮重复显示修复（例：战棋/塔防模式-移动）
			if(_status.event.endButton){
				_status.event.endButton.close();
				// delete event.endButton;
			}
          if (window.confirmskills2) {
            if (_status.event.skill && _status.event.skill !== confirm.dataset.skill) {
              confirm.dataset.skill = _status.event.skill;
              window.confirmskills2.forEach(function (item) {
                item.remove();
              });
              ui.updatec();
            } else if (!_status.event.skill && confirm.dataset.skill) {
              delete confirm.dataset.skill;
              window.confirmskills2.forEach(function (item) {
                confirm.insertBefore(item, confirm.firstChild);
              });
              ui.updatec();
            }
          }
          if(ui.updateSkillControl)   ui.updateSkillControl(game.me, true);
        };
        return confirm;
      },

 
            handcardNumber: function() {
                 var node3 = ui.create.div('.settingButton', ui.arena, plugin.click.setting);
         var node2 = ui.create.div('.lbtn-controls', ui.arena);
      ui.create.div('.lbtn-control', node2, '牌序', plugin.click.paixu);
      ui.create.div('.lbtn-control', node2, '记录', ui.click.pause);
        var node4 = ui.create.div('.tuoguanButton', ui.arena, ui.click.auto);
		// 加个id
		node4.setAttribute('id', 'tuoguanButton');
		// 定义全局变量
		window.xianshiliaotiantupian = false;
		
		setInterval(function() {
			// 聊天按钮（聊天气泡图标）在游戏托管后会变灰了
			// 新办法：嵌入游戏时间的更新函数中，随游戏时间更新而更新
			// 笨办法（已放弃）：穷举触发时机lib.skill._liaotianbianhui = {
			if(_status.auto == true && window.xianshiliaotiantupian == false){
				// if (document.getElementById("tuoguanButton")) {
					document.getElementById("tuoguanButton").setBackgroundImage('extension/手杀ui/lbtn/images/liaotian.png');
					window.xianshiliaotiantupian = true;
				// }
			}
			if(_status.auto == false && window.xianshiliaotiantupian == true){
				// if (document.getElementById("tuoguanButton")) {
					document.getElementById("tuoguanButton").setBackgroundImage('extension/手杀ui/lbtn/images/auto.png');
					window.xianshiliaotiantupian = false;
				// }
			}
		}, 200);
		
var node5 = ui.create.div('.menuButton', ui.arena, ui.click.menubut);
var node6= ui.create.div('.shenfenpic', ui.arena);       
        
        var node = ui.create.div('.handcardNumber', ui.arena).hide();
        node.node = {
          cardPicture: ui.create.div('.cardPicture', node),
          cardNumber: ui.create.div('.cardNumber', node),
          
        };
        node.updateCardnumber = function() {
        if (!game.me) return;
          
        var cardNumber2 = game.me.countCards('h') || 0;
          var cardNumber = game.me.getHandcardLimit() || 0;
          // var numbercolor ='#1d721d';
          // if(cardNumber2>cardNumber) numbercolor ='#991c22';
          if(cardNumber == Infinity) cardNumber = '∞';
          this.node.cardNumber.innerHTML = '<span>' + '<font size=5>' + cardNumber2 + '</font>' + '/' + cardNumber + '</span>';
    //      this.setNumberAnimation(cardNumber);
          this.show();
          
          game.addVideo('updateCardnumber', null, {
            cardNumber: cardNumber,
          });
        };
        node.node.cardNumber.interval =  setInterval(function() {
          ui.handcardNumber.updateCardnumber()
        }, 1000);           
    //    game.addVideo('createCardRoundTime');
    game.addVideo('createhandcardNumber');
        return node;
      },
      cardRoundTime: function() {
        var node = ui.create.div('.cardRoundNumber', ui.arena).hide();
        node.node = {
			// 记牌器#1837
			cardPileNumber: ui.create.div('.cardPileNumber', node, plugin.paidui),
          // cardPileNumber: ui.create.div('.cardPileNumber', node),
          roundNumber: ui.create.div('.roundNumber', node),
          time: ui.create.div('.time', node),
        };

        node.updateRoundCard = function() {
          var cardNumber = ui.cardPile.childNodes.length || 0;
          var roundNumber = game.roundNumber || 0;
          this.node.roundNumber.innerHTML = '<span>第' + game.roundNumber + '轮</span>';
          this.setNumberAnimation(cardNumber);
          this.show();
          game.addVideo('updateCardRoundTime', null, {
            cardNumber: cardNumber,
            roundNumber: roundNumber,
          });
        };

        node.setNumberAnimation = function(num, step) {
          var item = this.node.cardPileNumber;
          clearTimeout(item.interval);
          if (!item._num) {
            item.innerHTML = '<span>' + num + '</span>';
            item._num = num;
          } else {
            if (item._num !== num) {
              if (!step) step = 500 / Math.abs(item._num - num);
              if (item._num > num) item._num--;
              else item._num++;
              item.innerHTML = '<span>' + item._num + '</span>';
              if (item._num !== num) {
                item.interval = setTimeout(function () {
                  node.setNumberAnimation(num, step);
                }, step);
              }
            }
          }
        };

        ui.time4 = node.node.time;
		// 修复游戏时间显示少1s的bug
        ui.time4.sec = 1;
        ui.time4.interval = setInterval(function() {
          var min = Math.floor(ui.time4.sec / 60);
          var sec = ui.time4.sec % 60;
          if (min < 10) min = '0' + min;
          if (sec < 10) sec = '0' + sec;
          ui.time4.innerHTML = '<span>' + min + ':' + sec + '</span>';
          ui.time4.sec++;
        }, 1000);
        game.addVideo('createCardRoundTime');
        return node;
      },
    },
    click: {
      setting: function() {
      	if(lib.extensionMenu.extension_概念武将.zyile_skin_Menu){
      		lib.extensionMenu.extension_概念武将.zyile_skin_Menu.onclick();
			}else{	
				// head.remove()
				game.closePopped();
				game.pause2();
				ui.click.configMenu();
				ui.system1.classList.remove('shown');
				ui.system2.classList.remove('shown');
				}
	    },
      
      paixu: function() {
		// 适配新版本体
        if (!game.me || game.me.hasSkillTag("noSortCard")) return;
        var cards = game.me.getCards('h').reverse();
        if (!cards.length) return;


        var same;
        if (plugin._paixu && plugin._paixu.length) {
          same = true;
          if (plugin._paixu.length !== cards.length) {
            same = false;
          } else {
            for (var i = 0; i < plugin._paixu.length; i++) {
              if (cards[i] !== plugin._paixu[i]) {
                console.info(cards[i], plugin._paixu[i], i);
                same = false;
                break;
              }
            }
          }
        }

        if (same) {
          cards = cards.reverse();
        } else {
          var compares = ['type', 'name', 'nature', 'suit', 'number'];
          cards.sort(function (a, b) {
            for (var i = 0; i < compares.length; i++) {
              var value1 = get[compares[i]](a);
              var value2 = get[compares[i]](b);
              if (value2 !== value1) {
                return plugin.compare[compares[i]](value2, value1);
              }
            }
            return 0;
          });
        }

        cards.forEach(function(item) {
          item.goto(ui.special);
        });
        game.me.directgain(cards, false);
        ui.updatehl();
        plugin._paixu = cards;
      },
      confirm: function(link, target) {
        if (link === 'ok') {
          ui.click.ok(target);
        } else if (link === 'cancel') {
          ui.click.cancel(target);
        } else if (target.custom) {
          target.custom(link);
        }
      },
    },
    compare: {
      type: function(a, b) {
        if (a === b) return 0;
        var types = ['basic', 'trick', 'delay', 'equip'].addArray([a, b]);
        return types.indexOf(a) - types.indexOf(b);
      },
      name: function(a, b) {
        if (a === b) return 0;
        return a > b ? 1 : -1;
      },
      nature: function(a, b) {
        if (a === b) return 0;
        var nature = [undefined, 'fire', 'thunder', 'ice', 'stab'].addArray([a, b]);
        return nature.indexOf(a) - nature.indexOf(b);
      },
      suit: function(a, b) {
        if (a === b) return 0;
        var suit = ['heart' ,'diamond', 'spade', 'club'].addArray([a, b]);
        return suit.indexOf(a) - suit.indexOf(b);
      },
      number: function(a, b) {
        return a - b;
      },
    },
	
		// 记牌器#1837，功能搬运自本体 添加记牌器 by Curpond
		paidui: function () {
			// 临时修改（by 棘手怀念摧毁）
			// if (!_status.gameStarted) return;
			
			game.pause2();
			let drawPile = ui.cardPile.children;
			let discardPile = ui.discardPile.children;
			let popupContainer = ui.create.div(".popupContainer.deckMonitor", ui.window, function () {
				this.delete(400);
				game.resume2();
			});
			let container = ui.create.div(".deckMonitor", popupContainer, function (e) {
				e.stopPropagation();
			});
			let flag = true;
			let titleContainer = ui.create.div(".title", container, function (e) {
				if (flag) {
					statistic(discardPile, "弃牌堆");
				} else {
					statistic(drawPile, "牌堆");
				}
				flag = !flag;
			});
			let contentContainer = ui.create.div(".contentContainer", container);
			statistic(drawPile, "牌堆");
			function statistic(cards, title) {
				titleContainer.innerHTML = `${title}【${cards.length}张】 <span>(点击切换牌堆/弃牌堆)</span>`;
				contentContainer.innerHTML = "";
				renderNumberColumn();
				renderSuitColumn();
				renderTypeColumns();
				function renderNumberColumn() {
					let numberResult = Object.groupBy(cards, card => get.number(card));
					for (let i = 1; i <= 13; i++) {
						if (!numberResult[i]) numberResult[i] = [];
					}
					createColumnContainer(numberResult, "点数", cards.length);
				}
				function renderSuitColumn() {
					// 临时修改（by 棘手怀念摧毁）
					let suitResult = Object.groupBy(cards, card => {if (get.suit(card) != "none") return get.suit(card)});
					Object.assign(
						suitResult,
						// 临时修改（by 棘手怀念摧毁）
						Object.groupBy(cards, card => {
							if (get.suit(card) == "none") {
								return "无色";
							}
							if (get.suit(card) == "heart" || get.suit(card) == "diamond") {
								return "红色♥︎♦︎";
							}
							if (get.suit(card) == "spade" || get.suit(card) == "club") {
								return "黑色♠♣︎";
							}
						}),
					);
					Object.assign(
						suitResult,
						// 临时修改（by 棘手怀念摧毁）
						Object.groupBy(cards, card => {
							if (get.number(card) <= 9 && get.number(card) >= 2) {
								if (get.suit(card) == "spade") {
									return "♠2-9";
								}
								if (get.suit(card) == "heart") {
									return "♥︎2-9";
								}
								if (get.suit(card) == "club") {
									return "♣︎2-9";
								}
								if (get.suit(card) == "diamond") {
									return "♦︎2-9";
								}
							}
						})
					);
					// @ts-ignore
					delete suitResult[void 0];
					for (let suit of lib.suit) {
						if (!suitResult[suit]) suitResult[suit] = [];
					}
					createColumnContainer(suitResult, "花色", cards.length);
				}
				function renderTypeColumns() {
					let typeResult = Object.groupBy(cards, card => get.type(card));
					
					// 临时修改（by 棘手怀念摧毁）
					typeResult.basic = (typeResult.basic!=null && typeResult.basic!=undefined)?typeResult.basic:[];
					typeResult.trick = (typeResult.trick!=null && typeResult.trick!=undefined)?typeResult.trick:[];
					typeResult.equip = (typeResult.equip!=null && typeResult.equip!=undefined)?typeResult.equip:[];
					typeResult.delay = (typeResult.delay!=null && typeResult.delay!=undefined)?typeResult.delay:[];
					// typeResult.basic ??= [];
					// typeResult.trick ??= [];
					// typeResult.equip ??= [];
					// typeResult.delay ??= [];
					
					for (let key of Object.keys(typeResult).sort((a, b) => {
						let arr = ["basic", "trick", "delay", "equip", "jiqi", "spell", "zhenfa", "food", "jiguan", "land"];
						return arr.indexOf(a) - arr.indexOf(b);
					})) {
						let result = Object.groupBy(typeResult[key], card => get.name(card));
						if (key == "basic") {
							Object.assign(
								result,
								Object.groupBy(typeResult[key], card => {
									if (get.name(card) !== "sha") return;
									let perfix = get.translation(get.nature(card));
									if (perfix == "") perfix = "普通";
									return perfix + "杀";
								})
							);
							Object.assign(
								result,
								Object.groupBy(typeResult[key], card => {
									if (get.name(card) !== "sha") return;
									return get.translation(get.color(card)) + "杀";
								})
							);
							// @ts-ignore
							delete result[void 0];
							createColumnContainer(result, get.translation(key), typeResult[key].length);
						} else {
							createColumnContainer(result, get.translation(key), typeResult[key].length);
						}
					}
				}
				function createColumnContainer(result, title, count) {
					let column = ui.create.div(".columnContainer", contentContainer);
					let subtitle = ui.create.div(".subtitle", column);
					subtitle.textContent = `${title}(${count})`;
					let itemContainer = ui.create.div(".itemContainer", column);
					for (let key in result) {
						let item = ui.create.div(".item", itemContainer);
						let tip = ui.create.div(".tip", item);
						tip.innerHTML = handleColor(
							result[key].reduce((a, c) => {
								return a + `${get.translation(get.suit(c))}${get.number(c)} `;
							}, "")
						);
						item.addEventListener("mouseenter", function (e) {
							if (tip.innerHTML == "") return;
							tip.style.display = "block";
							// 修复点开查看牌时向上弹出方向无法完全显示的bug，现均向下弹出（by 棘手怀念摧毁）
							// let rect = item.getBoundingClientRect();
							// if (rect.top < window.innerHeight / 2) {
								tip.style.top = "110%";
							// } else {
								// tip.style.bottom = "110%";
							// }
						});
						item.addEventListener("mouseleave", function (e) {
							tip.style.display = "none";
						});
						let itemName = ui.create.div(".itemName", item);
						let itemCount = ui.create.div(".itemCount", item);
						itemName.innerHTML = handleColor(get.translation(key));
						itemCount.textContent = `×${result[key].length}`;
					}
					function handleColor(str) {
						let red = `[${get.translation("diamond")}${get.translation("heart")}]`;
						let black = `[${get.translation("club")}${get.translation("spade")}]`;
						return str.replace(new RegExp(red, "g"), '<span style="color:red">$&</span>').replace(new RegExp(black, "g"), '<span style="color:black">$&</span>');
					}
				}
			}
		},
  };
  return plugin;
});
