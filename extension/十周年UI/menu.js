'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	// 临时修复扩展的武将包在武将界面不显示的bug
	// 活动武将
	// if (lib.config.extensions && lib.config.extensions.contains('活动武将') && lib.config['extension_活动武将_enable']) {
		// lib.config.all.characters.push('FaDongCharacter');
		// lib.config.all.characters.push('NianShouCharacter');
		// lib.config.all.characters.push('hezongkangqincharacter');
		// lib.config.all.characters.push('decadeQiHuan');
		// lib.config.all.characters.push('decadeZhuoGui');
		// lib.config.all.characters.push('decadeKuiBa');
		// lib.config.all.characters.push('HD_chaoshikong');
		// lib.config.all.characters.push('MiNikill');
		// lib.config.all.characters.push('WeChatkill');
		// lib.config.all.characters.push('MX_feihongyinxue');
		// lib.config.all.characters.push('huodongcharacter');
	// }
	
	// 修改game.js的函数menu:function(connectMenu){
	// 将所有出现的 game.documentZoom 或 1.3 字符串替换为 1
	
	// 注：暂时先用旧代码，未适配新本体代码
	// game.menuZoom = 1;
	
	ui.create.menu=function(connectMenu){
		var menuTimeout = null;
		if (!connectMenu && !game.syncMenu) {
			menuTimeout = setTimeout(lib.init.reset, 1000);
		}
		var menu, menuContainer;
		var startButton;
		var popupContainer;
		var closeMenu = function () {
			if (popupContainer.noclose) {
				popupContainer.noclose = false;
				return;
			}
			popupContainer.classList.add('hidden');
			if (popupContainer.onclose) {
				popupContainer.onclose();
			}
		};
		popupContainer = ui.create.div('.popup-container.hidden', ui.window, closeMenu);

		var openMenu = function (node, e, onclose) {
			popupContainer.innerHTML = '';
			// 界面错位修复
			if (game.getChromeVersion && game.getChromeVersion() >= 128) {
				var left = Math.round(e.clientX / 1.3);
			} else {
				var left = Math.round(e.clientX);
			}
			/*
			// var left = Math.round(e.clientX / game.documentZoom);
			// var zoom = get.is.phoneLayout() ? 1.3 : 1;
			var left = Math.round(e.clientX);
			*/
			var zoom = get.is.phoneLayout() ? 1 : 1;
			popupContainer.appendChild(node);
			// var rect=node.getBoundingClientRect();
			if (node.classList.contains('visual')) {
				// var num=node.querySelectorAll('.menu.visual>div').length;
				// node.style.top=(e.y-node.offsetHeight/2+30)+'px';
				for (var i = 0; i < node.childElementCount; i++) {
					if (node.childNodes[i].update) {
						node.childNodes[i].update();
					}
				}
				// if(node.offsetTop<10){
				// 	node.style.top='10px';
				// }
			}
			// else if(get.is.phoneLayout()&&rect.top*1.3+rect.height*1.3+20>ui.window.offsetHeight){
			// 	node.style.top=(ui.winheightdow.offsetHeight-20-rect.height*1.3)/1.3+'px';
			// }
			// if(e){
			var height = node.offsetHeight;
			// 界面错位修复
			if (game.getChromeVersion && game.getChromeVersion() >= 128) {
				var idealtop = e.clientY / 1.3;
			} else {
				var idealtop = e.clientY;
			}
			/*
			// var idealtop = e.clientY / game.documentZoom;
			var idealtop = e.clientY;
			*/
			if (idealtop < 10) {
				idealtop = 10;
			}
			else if ((idealtop + height) * zoom + 10 > ui.window.offsetHeight) {
				idealtop = (ui.window.offsetHeight - 10) / zoom - height;
			}
			node.style.top = idealtop + 'px';
			node.style.left = left + 'px';
			// }

			popupContainer.classList.remove('hidden');
			popupContainer.onclose = onclose;
		};
		var clickToggle = function () {
			if (this.classList.contains('disabled')) return;
			this.classList.toggle('on');
			var config = this._link.config;
			if (config.onclick) {
				if (config.onclick.call(this, this.classList.contains('on')) === false) {
					this.classList.toggle('on');
				}
			}
			if (config.update) {
				config.update();
			}
		};
		var clickSwitcher = function () {
			if (this.classList.contains('disabled')) return;
			var node = this;
			this.classList.add('on');
			if (this._link.menu) {
				var pos1 = this.lastChild.getBoundingClientRect();
				var pos2 = ui.window.getBoundingClientRect();
				if (this._link.menu.classList.contains('visual')) {
					openMenu(this._link.menu, {
						clientX: pos1.left + pos1.width + 5 - pos2.left,
						// clientY: pos1.top - pos2.top
						clientY: Math.min((ui.window.offsetHeight-400)/20,pos1.top-pos2.top)
					}, function () {
						node.classList.remove('on');
					});
				}
				// else if (this._link.menu.childElementCount > 10) {
				else if (this._link.menu.childElementCount > 5) {
					openMenu(this._link.menu, {
						clientX: pos1.left + pos1.width + 5 - pos2.left,
						clientY: Math.min((ui.window.offsetHeight - 400) / 2, pos1.top - pos2.top)
					}, function () {
						node.classList.remove('on');
					});
					lib.setScroll(this._link.menu);
				}
				else {
					openMenu(this._link.menu, {
						clientX: pos1.left + pos1.width + 5 - pos2.left,
						clientY: pos1.top - pos2.top
					}, function () {
						node.classList.remove('on');
					});
				}
			}
		};
		var clickContainer = function () {
			menuContainer.classList.add('hidden');
			if (connectMenu) {
				if (_status.enteringroom) {
					_status.enteringroom = false;
				}
				if (_status.creatingroom) {
					_status.creatingroom = false;
				}
				ui.window.classList.remove('shortcutpaused');
			}
			else {
				game.resume2();
				if (game.onresume2) {
					game.onresume2();
				}
				ui.arena.classList.remove('menupaused');
				ui.historybar.classList.remove('menupaused');
				ui.window.classList.remove('touchinfohidden');
				ui.config2.classList.remove('pressdown2');
			}
		};
		var clickMenuItem = function () {
			var node = this.parentNode._link;
			var config = node._link.config;
			node._link.current = this.link;
			var tmpName = node.lastChild.innerHTML;
			node.lastChild.innerHTML = config.item[this._link];
			if (config.onclick) {
				if (config.onclick.call(node, this._link, this) === false) {
					node.lastChild.innerHTML = tmpName;
				}
			}
			if (config.update) {
				config.update();
			}
		};
		var createMenu = function (tabs, config) {
			var createPage = function (position) {
				var node = ui.create.div(position);
				lib.setScroll(ui.create.div('.left.pane', node));
				lib.setScroll(ui.create.div('.right.pane', node));
				return node;
			};
			var menu = ui.create.div('.main.menu.dialog.popped.static', config.position, function (e) {
				e.stopPropagation();
			});
			if (connectMenu) {
				menu.classList.add('center');
				menuContainer.classList.add('centermenu');
			}
			var menuTab = ui.create.div('.menu-tab', menu);
			var menuTabBar = ui.create.div('.menu-tab-bar', menu);
			menuTabBar.style.left = (config.bar || 0) + 'px';
			// if (Math.round(2 * game.documentZoom) < 2) {
				// menuTabBar.style.height = '3px';
			// }
			var menuContent = ui.create.div('.menu-content', menu);
			var clickTab = function () {
				if (this.classList.contains('disabled')) return;
				var active = this.parentNode.querySelector('.active');
				if (active) {
					active.classList.remove('active');
					active._link.remove();
				}
				this.classList.add('active');
				// 界面错位修复
				if (game.getChromeVersion && game.getChromeVersion() >= 128) {
					menuTabBar.style.transform = 'translateX(' + (this.getBoundingClientRect().left - this.parentNode.firstChild.getBoundingClientRect().left) / 1.3 + 'px)';
				} else {
					menuTabBar.style.transform = 'translateX(' + (this.getBoundingClientRect().left - this.parentNode.firstChild.getBoundingClientRect().left) + 'px)';
				}
				/*
				// menuTabBar.style.transform = 'translateX(' + (this.getBoundingClientRect().left - this.parentNode.firstChild.getBoundingClientRect().left) / game.documentZoom + 'px)';
				menuTabBar.style.transform = 'translateX(' + (this.getBoundingClientRect().left - this.parentNode.firstChild.getBoundingClientRect().left) + 'px)';
				*/
				menuContent.appendChild(this._link);
			};
			ui.click.menuTab = function (tab) {
				for (var i = 0; i < menuTab.childNodes.length; i++) {
					if (menuTab.childNodes[i].innerHTML == tab) {
						clickTab.call(menuTab.childNodes[i]);
						return;
					}
				}
			};
			var pages = [];
			for (var i = 0; i < tabs.length; i++) {
				var active = (i === (config.init || 0));
				pages[i] = createPage(active ? menuContent : null);
				ui.create.div(active ? '.active' : '', tabs[i], menuTab, clickTab)._link = pages[i];
			}
			return {
				menu: menu,
				pages: pages
			};
		};
		var createConfig = function (config, position) {
			var node = ui.create.div('.config', config.name);
			node._link = { config: config };
			if (!config.clear) {
				if (config.name != '开启') {
					if (config.name == '屏蔽弱将') {
						config.intro = '强度过低的武将（孙策除外）不会出现在选将框，也不会被AI选择';
					}
					else if (config.name == '屏蔽强将') {
						config.intro = '强度过高的武将不会出现在选将框，也不会被AI选择';
					}
					else if (!config.intro) {
						config.intro = '设置' + config.name;
					}
					lib.setIntro(node, function (uiintro) {
						if (lib.config.touchscreen) _status.dragged = true;
						// 更改弹出框的宽度（手机端长按/电脑端右击菜单选项）
						uiintro.style.width = '240px';
						var str = config.intro;
						if (typeof str == 'function') {
							str = str();
						}
						uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + str + '</div>');
					});
				}
			}
			else {
				node.innerHTML = '<span>' + config.name + '</span>';
				if (!config.nopointer) {
					node.classList.add('pointerspan');
				}
			}
			if (config.item) {
				if (typeof config.item == 'function') {
					config.item = config.item();
				}
				if (Array.isArray(config.init)) {
					void 0;
				}
				else {
					node.classList.add('switcher');
					node.listen(clickSwitcher);
					node._link.choosing = ui.create.div('', config.item[config.init], node);
					node._link.menu = ui.create.div('.menu');
					if (config.visualMenu) {
						node._link.menu.classList.add('visual');
						var updateVisual = function () {
							config.visualMenu(this, this._link, config.item[this._link], config);
						};
						var createNode = function (i, before) {
							var visualMenu = ui.create.div();
							if (config.visualBar) {
								if (before) {
									node._link.menu.insertBefore(visualMenu, before);
								}
								else {
									node._link.menu.insertBefore(visualMenu, node._link.menu.lastChild);
								}
							}
							else {
								node._link.menu.appendChild(visualMenu);
							}
							ui.create.div('.name', get.verticalStr(config.item[i]), visualMenu);
							visualMenu._link = i;
							if (config.visualMenu(visualMenu, i, config.item[i], config) !== false) {
								visualMenu.listen(clickMenuItem);
							}
							visualMenu.update = updateVisual;
						};
						if (config.visualBar) {
							var visualBar = ui.create.div(node._link.menu, function () {
								this.parentNode.parentNode.noclose = true;
							});
							node._link.menu.classList.add('withbar');
							config.visualBar(visualBar, config.item, createNode, node);
							visualBar.update = function () {
								config.visualBar(visualBar, config.item, createNode, node);
							};
						}
						for (var i in config.item) {
							createNode(i);
						}
						lib.setScroll(node._link.menu);
						node._link.menu.updateBr = function () {
							var br = Array.from(this.querySelectorAll('.menu.visual>br'));
							while (br.length) {
								br.shift().remove();
							}
							var split = [];
							for (var i = 1; i < this.childElementCount; i++) {
								if (i % 3 == 0) {
									split.push(this.childNodes[i]);
								}
							}
							for (var i = 0; i < split.length; i++) {
								this.insertBefore(ui.create.node('br'), split[i]);
							}
						};
						node._link.menu.updateBr();
					}
					else {
						for (var i in config.item) {
							var textMenu = ui.create.div('', config.item[i], node._link.menu, clickMenuItem);
							textMenu._link = i;
							if (config.textMenu) {
								config.textMenu(textMenu, i, config.item[i], config);
							}
							lib.setScroll(node._link.menu);
						}
					}
					node._link.menu._link = node;
					node._link.current = config.init;
				}
			}
			else if (config.range) {
				void 0;
			}
			else if (config.clear) {
				if (node.innerHTML.length >= 15) node.style.height = 'auto';
				node.listen(clickToggle);
			}
			else if (config.input) {
				node.classList.add('switcher');
				var input = ui.create.div(node);
				if (!config.fixed) {
					input.contentEditable = true;
					input.style.webkitUserSelect = 'text';
				}
				input.style.minWidth = '10px';
				input.style.maxWidth = '60%';
				input.style.overflow = 'hidden';
				input.style.whiteSpace = 'nowrap';
				input.onkeydown = function (e) {
					if (e.keyCode == 13) {
						e.preventDefault();
						e.stopPropagation();
						input.blur();
					}
				};
				if (config.name == '联机昵称') {
					input.innerHTML = config.init || '无名玩家';
					input.onblur = function () {
						input.innerHTML = input.innerHTML.replace(/<br>/g, '');
						if (!input.innerHTML || get.is.banWords(input.innerHTML)) {
							input.innerHTML = '无名玩家';
						}
						input.innerHTML = input.innerHTML.slice(0, 12);
						game.saveConfig('connect_nickname', input.innerHTML);
						game.saveConfig('connect_nickname', input.innerHTML, 'connect');
					};
				}
				else if (config.name == '联机大厅') {
					input.innerHTML = config.init || lib.hallURL;
					input.onblur = function () {
						if (!input.innerHTML) {
							input.innerHTML = lib.hallURL;
						}
						input.innerHTML = input.innerHTML.replace(/<br>/g, '');
						game.saveConfig('hall_ip', input.innerHTML, 'connect');
					};
				}
				else {
					input.innerHTML = config.init;
					input.onblur = config.onblur;
				}
			}
			else {
				node.classList.add('toggle');
				node.listen(clickToggle);
				ui.create.div(ui.create.div(node));
				if (config.init == true) {
					node.classList.add('on');
				}
			}
			if (position) {
				position.appendChild(node);
			}
			return node;
		};
		var updateActive, updateActiveCard;
		var menuUpdates = [];
		menuContainer = ui.create.div('.menu-container.hidden', ui.window, clickContainer);
		var menux;
		if (!connectMenu) {
			ui.menuContainer = menuContainer;
			ui.click.configMenu = function () {
				ui.click.shortcut(false);
				if (menuContainer.classList.contains('hidden')) {
					ui.config2.classList.add('pressdown2');
					ui.arena.classList.add('menupaused');
					ui.historybar.classList.add('menupaused');
					ui.window.classList.add('touchinfohidden');
					menuContainer.classList.remove('hidden');
					for (var i = 0; i < menuUpdates.length; i++) {
						menuUpdates[i]();
					}
				}
				else {
					clickContainer.call(menuContainer);
				}
			};
			menux = createMenu(['开始', '选项', '武将', '卡牌', '扩展', '其它'], {
				position: menuContainer, bar: 40
			});
		}
		else {
			ui.connectMenuContainer = menuContainer;
			ui.click.connectMenu = function () {
				if (menuContainer.classList.contains('hidden')) {
					if (_status.waitingForPlayer) {
						startButton.innerHTML = '设';
						var start = menux.pages[0].firstChild;
						for (var i = 0; i < start.childNodes.length; i++) {
							if (start.childNodes[i].mode != lib.configOL.mode) {
								start.childNodes[i].classList.add('unselectable');
								start.childNodes[i].classList.remove('active');
								if (start.childNodes[i].link) start.childNodes[i].link.remove();
							}
							else {
								start.childNodes[i].classList.add('active');
								if (start.childNodes[i].link) start.nextSibling.appendChild(start.childNodes[i].link);
								else console.log(start.nextSibling, start.childNodes[i]);
							}
						}
					}
					ui.window.classList.add('shortcutpaused');
					menuContainer.classList.remove('hidden');
					for (var i = 0; i < menuUpdates.length; i++) {
						menuUpdates[i]();
					}
				}
				else {
					clickContainer.call(menuContainer);
				}
			};

			menux = createMenu(['模式', '武将', '卡牌'], {
				position: menuContainer, bar: 123
			});
			menu = menux.menu;
		}
		var menuxpages = menux.pages.slice(0);

		var copyObj = get.copy;

		(function () {
			var start = menuxpages.shift();
			var rightPane = start.lastChild;

			startButton = ui.create.div('.menubutton.round.highlight', '启', start, function () {
				if (this.animating || this.classList.contains('dim')) {
					return;
				}
				var active = this.parentNode.querySelector('.active');
				if (active) {
					if (connectMenu) {
						if (_status.waitingForPlayer) {
							var config = {};
							for (var i in lib.mode[lib.configOL.mode].connect) {
								if (i == 'update') continue;
								config[i.slice(8)] = get.config(i, lib.configOL.mode);
							}
							config.zhinang_tricks = lib.config.connect_zhinang_tricks;
							if (game.online) {
								if (game.onlinezhu) {
									game.send('changeRoomConfig', config);
								}
							}
							else {
								game.broadcastAll(function (config) {
									for (var i in config) {
										lib.configOL[i] = config[i];
									}
								}, config);
								if (lib.configOL.mode == 'identity' && lib.configOL.identity_mode == 'zhong' && game.connectPlayers) {
									for (var i = 0; i < game.connectPlayers.length; i++) {
										game.connectPlayers[i].classList.remove('unselectable2');
									}
									lib.configOL.number = 8;
									game.updateWaiting();
								}
								if (game.onlineroom) {
									game.send('server', 'config', lib.configOL);
								}
								game.connectPlayers[0].chat('房间设置已更改');
							}
						}
						else if (_status.enteringroom || _status.creatingroom) {
							lib.configOL.mode = active.mode;
							if (_status.enteringroomserver) {
								game.saveConfig('connect_mode', lib.configOL.mode);

								var config = {};
								for (var i in lib.mode[lib.configOL.mode].connect) {
									if (i == 'update') continue;
									config[i.slice(8)] = get.config(i, lib.configOL.mode);
								}
								config.zhinang_tricks = lib.config.connect_zhinang_tricks;

								config.characterPack = lib.connectCharacterPack.slice(0);
								config.cardPack = lib.connectCardPack.slice(0);
								for (var i = 0; i < lib.config.connect_characters.length; i++) {
									config.characterPack.remove(lib.config.connect_characters[i]);
								}
								for (var i = 0; i < lib.config.connect_cards.length; i++) {
									config.cardPack.remove(lib.config.connect_cards[i]);
								}
								config.banned = lib.config['connect_' + active.mode + '_banned'];
								config.bannedcards = lib.config['connect_' + active.mode + '_bannedcards'];
								game.send('server', 'create', game.onlineKey, get.connectNickname(), lib.config.connect_avatar, config, active.mode);
							}
							else {
								game.send('server', 'create', game.onlineKey, get.connectNickname(), lib.config.connect_avatar);
							}
						}
						else {
							localStorage.setItem(lib.configprefix + 'directstart', true);
							game.saveConfig('directstartmode', active.mode);
							game.saveConfig('mode', 'connect');
							ui.exitroom = ui.create.system('退出房间', function () {
								game.saveConfig('directstartmode');
								game.reload();
							}, true);
							game.switchMode(active.mode);
						}
						clickContainer.call(menuContainer);
					}
					else {
						game.saveConfig('mode', active.mode);
						localStorage.setItem(lib.configprefix + 'directstart', true);
						game.reload();
					}
				}
			});

			var clickMode = function () {
				if (this.classList.contains('unselectable')) return;
				var active = this.parentNode.querySelector('.active');
				if (active === this) {
					return;
				}
				active.classList.remove('active');
				active.link.remove();
				active = this;
				this.classList.add('active');
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
				if (connectMenu) {
					if (updateActive) updateActive();
					if (updateActiveCard) updateActiveCard();
				}
			};

			var createModeConfig = function (mode, position) {
				var info = lib.mode[mode];
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', info.name, position, clickMode);
				node.mode = mode;
				var connectDisplayMap = {
					connect_player_number: null,
					connect_versus_mode: null,
				};
				var updateConnectDisplayMap = function () {
					if (_status.waitingForPlayer) {
						if (connectDisplayMap.connect_player_number) {
							connectDisplayMap.connect_player_number.style.display = 'none';
						}
						if (connectDisplayMap.connect_versus_mode) {
							connectDisplayMap.connect_versus_mode.style.display = 'none';
						}
					}
				};
				if (connectMenu) {
					menuUpdates.push(updateConnectDisplayMap);
					if (mode == lib.config.connect_mode) {
						node.classList.add('active');
					}
				}
				else {
					if (mode == lib.config.mode) {
						node.classList.add('active');
					}
				}
				node._initLink = function () {
					node.link = page;
					//“更多”下的内容
					var map = {};
					var infoconfig = connectMenu ? info.connect : info.config;
					if (infoconfig) {
						var hiddenNodes = [];
						var config = lib.config.mode_config[mode] || {};
						if (connectMenu) {
							infoconfig.connect_choose_timeout = {
								name: '出牌时限',
								init: '30',
								item: {
									'10': '10秒',
									'15': '15秒',
									'30': '30秒',
									'60': '60秒',
									'90': '90秒',
								},
								connect: true,
								frequent: true
							};
							infoconfig.connect_observe = {
								name: '允许旁观',
								init: true,
								connect: true
							};
							infoconfig.connect_observe_handcard = {
								name: '允许观看手牌',
								init: false,
								connect: true
							};
							infoconfig.connect_mount_combine = {
								name: '合并坐骑栏',
								init: false,
								connect: true
							};
						}
						for (var j in infoconfig) {
							if (j === 'update') {
								continue;
							}
							var cfg = copyObj(infoconfig[j]);
							cfg._name = j;
							cfg.mode = mode;
							if (j in config) {
								cfg.init = config[j];
							}
							else {
								game.saveConfig(j, cfg.init, mode);
							}
							if (!cfg.onclick) {
								cfg.onclick = function (result) {
									var cfg = this._link.config;
									game.saveConfig(cfg._name, result, mode);
									if (cfg.onsave) {
										cfg.onsave.call(this, result);
									}
									if (!_status.connectMode || game.online) {
										if (typeof cfg.restart == 'function') {
											if (cfg.restart()) {
												startButton.classList.add('glowing');
											}
										}
										else if (cfg.restart) {
											startButton.classList.add('glowing');
										}
									}
								};
							}
							if (infoconfig.update) {
								cfg.update = function () {
									infoconfig.update(config, map);
								};
							}
							var cfgnode = createConfig(cfg);
							map[j] = cfgnode;
							if (cfg.frequent) {
								page.appendChild(cfgnode);
							}
							else {
								cfgnode.classList.add('auto-hide');
								hiddenNodes.push(cfgnode);
							}
						}
						if (!connectMenu) {
							var move = ui.create.div('.auto-hide.config', '<div style="margin-right:10px" class="pointerdiv">上移↑</div><div class="pointerdiv">下移↓</div>');
							move.firstChild.listen(function () {
								if (node.previousSibling) {
									node.parentNode.insertBefore(node, node.previousSibling);
									var order = [];
									for (var i = 0; i < node.parentNode.childNodes.length; i++) {
										order.push(node.parentNode.childNodes[i].mode);
									}
									game.saveConfig('modeorder', order);
								}
							});
							move.lastChild.listen(function () {
								if (node.nextSibling) {
									if (node.nextSibling.nextSibling) {
										node.parentNode.insertBefore(node, node.nextSibling.nextSibling);
									}
									else {
										node.parentNode.insertBefore(node.nextSibling, node);
									}
									var order = [];
									for (var i = 0; i < node.parentNode.childNodes.length; i++) {
										order.push(node.parentNode.childNodes[i].mode);
									}
									game.saveConfig('modeorder', order);
								}
							});
							hiddenNodes.push(move);
						}
						var expanded = false;
						var hasexpand = true;
						if (hiddenNodes.length) {
							if (lib.config.fold_mode) {
								var clickmore = function (type) {
									if (type === 'expand' && expanded) return;
									if (type === 'unexpand' && !expanded) return;
									if (expanded) {
										this.classList.remove('on');
										this.parentNode.classList.remove('expanded');
									}
									else {
										this.classList.add('on');
										this.parentNode.classList.add('expanded');
									}
									expanded = !expanded;
								};
								var morenodes = ui.create.div('.config.more', '更多 <div>&gt;</div>', page);
								morenodes.listen(clickmore);
								morenodes._onclick = clickmore;
								page.morenodes = morenodes;
							}
							else {
								page.classList.add('expanded');
								if (!connectMenu) {
									page.classList.add('expanded2');
								}
							}
							for (var k = 0; k < hiddenNodes.length; k++) {
								page.appendChild(hiddenNodes[k]);
							}
						}
						else {
							hasexpand = false;
						}
						if (!connectMenu) {
							var hidemode = ui.create.div('.config.pointerspan', '<span>隐藏此模式</span>', page, function () {
								if (this.firstChild.innerHTML == '隐藏此模式') {
									this.firstChild.innerHTML = '此模式将在重启后隐藏';
									lib.config.hiddenModePack.add(mode);
									if (!lib.config.prompt_hidepack) {
										alert('隐藏的扩展包可通过选项-其它-重置隐藏内容恢复');
										game.saveConfig('prompt_hidepack', true);
									}
								}
								else {
									this.firstChild.innerHTML = '隐藏此模式';
									lib.config.hiddenModePack.remove(mode);
								}
								game.saveConfig('hiddenModePack', lib.config.hiddenModePack);
							});
							if (hasexpand) {
								hidemode.classList.add('auto-hide');
							}
						}
						if (infoconfig.update) {
							infoconfig.update(config, map);
							node.update = function () {
								infoconfig.update(config, map);
							};
						}
					}
					if (connectMenu) {
						connectDisplayMap.connect_player_number = map.connect_player_number;
						connectDisplayMap.connect_versus_mode = map.connect_versus_mode;
						updateConnectDisplayMap();
					}
				};
				if (!get.config('menu_loadondemand')) node._initLink();
				return node;
			};
			var modeorder = lib.config.modeorder || [];
			for (var i in lib.mode) {
				modeorder.add(i);
			}
			for (var i = 0; i < modeorder.length; i++) {
				if (connectMenu) {
					if (!lib.mode[modeorder[i]].connect) continue;
					if (!lib.config['connect_' + modeorder[i] + '_banned']) {
						lib.config['connect_' + modeorder[i] + '_banned'] = [];
					}
					if (!lib.config['connect_' + modeorder[i] + '_bannedcards']) {
						lib.config['connect_' + modeorder[i] + '_bannedcards'] = [];
					}
				}
				if (lib.config.all.mode.includes(modeorder[i])) {
					createModeConfig(modeorder[i], start.firstChild);
				}
			}
			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				active.classList.add('active');
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);
			if (lib.config.fold_mode) {
				rightPane.addEventListener('mousewheel', function (e) {
					var morenodes = this.firstChild.morenodes;
					if (morenodes) {
						if (e.wheelDelta < 0) {
							morenodes._onclick.call(morenodes, 'expand');
						}
						else if (this.scrollTop == 0) {
							morenodes._onclick.call(morenodes, 'unexpand');
						}
					}
				}, { passive: true });
			}
		}());

		(function () {
			if (connectMenu) return;
			var start = menuxpages.shift();
			var rightPane = start.lastChild;

			var clickMode = function () {
				var active = this.parentNode.querySelector('.active');
				if (active === this) {
					return;
				}
				active.classList.remove('active');
				active.link.remove();
				active = this;
				active.classList.add('active');
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
			};

			var clickAutoSkill = function (bool) {
				var name = this._link.config._name;
				var list = lib.config.autoskilllist;
				if (bool) {
					list.remove(name);
				}
				else {
					list.add(name);
				}
				game.saveConfig('autoskilllist', list);
			};
			var skilllistexpanded = game.expandSkills(lib.skilllist);
			for (var i in lib.skill) {
				if (!skilllistexpanded.includes(i)) continue;
				if (lib.skill[i].frequent && lib.translate[i]) {
					lib.configMenu.skill.config[i] = {
						name: lib.translate[i + '_noconf'] || lib.translate[i],
						init: true,
						type: 'autoskill',
						onclick: clickAutoSkill,
						intro: lib.translate[i + '_info']
					};
				}
			}
			var clickBanSkill = function (bool) {
				var name = this._link.config._name;
				var list = lib.config.forbidlist;
				if (bool) {
					list.remove(name);
				}
				else {
					list.add(name);
				}
				game.saveConfig('forbidlist', list);
			};
			var forbid = lib.config.forbid;
			if (!lib.config.forbidlist) {
				game.saveConfig('forbidlist', []);
			}
			for (var i = 0; i < forbid.length; i++) {
				var skip = false;
				var str = '';
				var str2 = '';
				var str3 = '';
				for (var j = 0; j < forbid[i].length; j++) {
					if (!lib.skilllist.includes(forbid[i][j])) {
						skip = true;
						break;
					}
					str += get.translation(forbid[i][j]) + '+';
					str2 += forbid[i][j] + '+';
					str3 += get.translation(forbid[i][j]) + '：' + lib.translate[forbid[i][j] + '_info'];
					if (j < forbid[i].length - 1) {
						str3 += '<div class="placeholder slim" style="display:block;height:8px"></div>';
					}
				}
				if (skip) continue;
				str = str.slice(0, str.length - 1);
				str2 = str2.slice(0, str2.length - 1);

				lib.configMenu.skill.config[str2] = {
					name: str,
					init: true,
					type: 'banskill',
					onclick: clickBanSkill,
					intro: str3
				};
			}

			var updateView = null;
			var updateAppearence = null;
			var createModeConfig = function (mode, position) {
				var info = lib.configMenu[mode];
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', info.name, position, clickMode);
				node.mode = mode;
				// node._initLink=function(){
				node.link = page;
				var map = {};
				if (info.config) {
					var hiddenNodes = [];
					var autoskillNodes = [];
					var banskillNodes = [];
					var custombanskillNodes = [];
					var banskill;

					if (mode == 'skill') {
						var autoskillexpanded = false;
						var banskillexpanded = false;
						ui.create.div('.config.more', '自动发动 <div>&gt;</div>', page, function () {
							if (autoskillexpanded) {
								this.classList.remove('on');
								for (var k = 0; k < autoskillNodes.length; k++) {
									autoskillNodes[k].style.display = 'none';
								}
							}
							else {
								this.classList.add('on');
								for (var k = 0; k < autoskillNodes.length; k++) {
									autoskillNodes[k].style.display = '';
								}
							}
							autoskillexpanded = !autoskillexpanded;
						});
						banskill = ui.create.div('.config.more', '双将禁配 <div>&gt;</div>', page, function () {
							if (banskillexpanded) {
								this.classList.remove('on');
								for (var k = 0; k < banskillNodes.length; k++) {
									banskillNodes[k].style.display = 'none';
								}
							}
							else {
								this.classList.add('on');
								for (var k = 0; k < banskillNodes.length; k++) {
									banskillNodes[k].style.display = '';
								}
							}
							banskillexpanded = !banskillexpanded;
						});

						var banskilladd = ui.create.div('.config.indent', '<span class="pointerdiv">添加...</span>', page, function () {
							this.nextSibling.classList.toggle('hidden');
						});
						banskilladd.style.display = 'none';
						banskillNodes.push(banskilladd);

						var banskilladdNode = ui.create.div('.config.indent.hidden.banskilladd', page);
						banskilladdNode.style.display = 'none';
						banskillNodes.push(banskilladdNode);

						var matchBanSkill = function (skills1, skills2) {
							if (skills1.length != skills2.length) return false;
							for (var i = 0; i < skills1.length; i++) {
								if (!skills2.includes(skills1[i])) return false;
							}
							return true;
						};
						var deleteCustomBanSkill = function () {
							for (var i = 0; i < lib.config.customforbid.length; i++) {
								if (matchBanSkill(lib.config.customforbid[i], this.parentNode.link)) {
									lib.config.customforbid.splice(i--, 1);
									break;
								}
							}
							game.saveConfig('customforbid', lib.config.customforbid);
							this.parentNode.remove();
						};
						var createCustomBanSkill = function (skills) {
							var node = ui.create.div('.config.indent.toggle');
							node.style.display = 'none';
							node.link = skills;
							banskillNodes.push(node);
							custombanskillNodes.push(node);
							var str = get.translation(skills[0]);
							for (var i = 1; i < skills.length; i++) {
								str += '+' + get.translation(skills[i]);
							}
							node.innerHTML = str;
							var span = document.createElement('span');
							span.classList.add('cardpiledelete');
							span.innerHTML = '删除';
							span.onclick = deleteCustomBanSkill;
							node.appendChild(span);
							page.insertBefore(node, banskilladdNode.nextSibling);
							return node;
						};
						for (var i = 0; i < lib.config.customforbid.length; i++) {
							createCustomBanSkill(lib.config.customforbid[i]);
						}
						(function () {
							var list = [];
							for (var i in lib.character) {
								if (lib.character[i][3].length)
									list.push([i, lib.translate[i]]);
							}

							// 修复由于禁将导致的报错（武将数为零报错）
							if (!list.length) {
								return;
							}

							list.sort(function (a, b) {
								a = a[0]; b = b[0];
								var aa = a, bb = b;
								var firstUnderscoreIndexAA = aa.indexOf('_');
								var firstUnderscoreIndexBB = bb.indexOf('_');
								var secondUnderscoreIndexAA = firstUnderscoreIndexAA != -1 ? aa.indexOf('_', firstUnderscoreIndexAA + 1) : -1;
								var secondUnderscoreIndexBB = firstUnderscoreIndexBB != -1 ? bb.indexOf('_', firstUnderscoreIndexBB + 1) : -1;
								
								if (secondUnderscoreIndexAA != -1) {
									aa = aa.slice(secondUnderscoreIndexAA + 1);
								} else if (firstUnderscoreIndexAA != -1) {
									aa = aa.slice(firstUnderscoreIndexAA + 1);
								}
								
								if (secondUnderscoreIndexBB != -1) {
									bb = bb.slice(secondUnderscoreIndexBB + 1);
								} else if (firstUnderscoreIndexBB != -1) {
									bb = bb.slice(firstUnderscoreIndexBB + 1);
								}
								
								if (aa != bb) {
									return aa > bb ? 1 : -1;
								}
								return a > b ? 1 : -1;
							});

							var list2 = [];
							var skills = lib.character[list[0][0]][3];
							for (var i = 0; i < skills.length; i++) {
								list2.push([skills[i], lib.translate[skills[i]]]);
							}

							var selectname = ui.create.selectlist(list, list[0], banskilladdNode);
							selectname.onchange = function () {
								var skills = lib.character[this.value][3];
								skillopt.innerHTML = '';
								for (var i = 0; i < skills.length; i++) {
									var option = document.createElement('option');
									option.value = skills[i];
									option.innerHTML = lib.translate[skills[i]];
									skillopt.appendChild(option);
								}
							};
							selectname.style.maxWidth = '85px';
							var skillopt = ui.create.selectlist(list2, list2[0], banskilladdNode);

							var span = document.createElement('span');
							span.innerHTML = '＋';
							banskilladdNode.appendChild(span);
							var br = document.createElement('br');
							banskilladdNode.appendChild(br);

							var selectname2 = ui.create.selectlist(list, list[0], banskilladdNode);
							selectname2.onchange = function () {
								var skills = lib.character[this.value][3];
								skillopt2.innerHTML = '';
								for (var i = 0; i < skills.length; i++) {
									var option = document.createElement('option');
									option.value = skills[i];
									option.innerHTML = lib.translate[skills[i]];
									skillopt2.appendChild(option);
								}
							};
							selectname2.style.maxWidth = '85px';
							var skillopt2 = ui.create.selectlist(list2, list2[0], banskilladdNode);
							var confirmbutton = document.createElement('button');
							confirmbutton.innerHTML = '确定';
							banskilladdNode.appendChild(confirmbutton);

							confirmbutton.onclick = function () {
								var skills = [skillopt.value, skillopt2.value];
								if (skills[0] == skills[1]) {
									skills.shift();
								}
								if (!lib.config.customforbid) return;
								for (var i = 0; i < lib.config.customforbid.length; i++) {
									if (matchBanSkill(lib.config.customforbid[i], skills)) return;
								}
								lib.config.customforbid.push(skills);
								game.saveConfig('customforbid', lib.config.customforbid);
								createCustomBanSkill(skills).style.display = '';
							};
						}());
						page.style.paddingBottom = '10px';
					}
					var config = lib.config;
					if (mode == 'appearence') {
						updateAppearence = function () {
							info.config.update(config, map);
						};
					}
					else if (mode == 'view') {
						updateView = function () {
							info.config.update(config, map);
						};
					}
					for (var j in info.config) {
						if (j === 'update') {
							continue;
						}
						var cfg = copyObj(info.config[j]);
						cfg._name = j;
						if (j in config) {
							cfg.init = config[j];
						}
						else if (cfg.type != 'autoskill' && cfg.type != 'banskill') {
							game.saveConfig(j, cfg.init);
						}
						if (!cfg.onclick) {
							cfg.onclick = function (result) {
								var cfg = this._link.config;
								game.saveConfig(cfg._name, result);
								if (cfg.onsave) {
									cfg.onsave.call(this, result);
								}
							};
						}
						if (info.config.update) {
							if (mode == 'appearence' || mode == 'view') {
								cfg.update = function () {
									if (updateAppearence) {
										updateAppearence();
									}
									if (updateView) {
										updateView();
									}
								};
							}
							else {
								cfg.update = function () {
									info.config.update(config, map);
								};
							}
						}
						var cfgnode = createConfig(cfg);
						if (cfg.type == 'autoskill') {
							autoskillNodes.push(cfgnode);
							// cfgnode.style.transition='all 0s';
							cfgnode.classList.add('indent');
							// cfgnode.hide();
							cfgnode.style.display = 'none';
						}
						else if (cfg.type == 'banskill') {
							banskillNodes.push(cfgnode);
							// cfgnode.style.transition='all 0s';
							cfgnode.classList.add('indent');
							// cfgnode.hide();
							cfgnode.style.display = 'none';
						}
						if (j == 'import_data_button') {
							ui.import_data_button = cfgnode;
							cfgnode.hide();
							cfgnode.querySelector('button').onclick = function () {
								var fileToLoad = this.previousSibling.files[0];
								if (fileToLoad) {
									var fileReader = new FileReader();
									fileReader.onload = function (fileLoadedEvent) {
										var data = fileLoadedEvent.target.result;
										if (!data) return;
										try {
											data = JSON.parse(lib.init.decode(data));
											if (!data || typeof data != 'object') {
												throw ('err');
											}
											if (lib.db && (!data.config || !data.data)) {
												throw ('err');
											}
										}
										catch (e) {
											console.log(e);
											alert('导入失败');
											return;
										}
										alert('导入成功');
										if (!lib.db) {
											var noname_inited = localStorage.getItem('noname_inited');
											var onlineKey = localStorage.getItem(lib.configprefix + 'key');
											localStorage.clear();
											if (noname_inited) {
												localStorage.setItem('noname_inited', noname_inited);
											}
											if (onlineKey) {
												localStorage.setItem(lib.configprefix + 'key', onlineKey);
											}
											for (var i in data) {
												localStorage.setItem(i, data[i]);
											}
										}
										else {
											for (var i in data.config) {
												game.putDB('config', i, data.config[i]);
												lib.config[i] = data.config[i];
											}
											for (var i in data.data) {
												game.putDB('data', i, data.data[i]);
											}
										}
										lib.init.background();
										game.reload();
									};
									fileReader.readAsText(fileToLoad, "UTF-8");
								}
							};
						}
						else if (j == 'import_music') {
							cfgnode.querySelector('button').onclick = function () {
								if (_status.music_importing) return;
								_status.music_importing = true;
								var fileToLoad = this.previousSibling.files[0];
								if (fileToLoad) {
									if (!lib.config.customBackgroundMusic) lib.config.customBackgroundMusic = {};
									var name = fileToLoad.name;
									if (name.includes('.')) {
										name = name.slice(0, name.indexOf('.'));
									}
									var link = (game.writeFile ? 'cdv_' : 'custom_') + name;
									if (lib.config.customBackgroundMusic[link]) {
										if (!confirm('已经存在文件名称相同的背景音乐，是否仍然要继续导入？')) { _status.music_importing = false; return; }
										for (var i = 1; i < 1000; i++) {
											if (!lib.config.customBackgroundMusic[link + '_' + i]) {
												link = link + '_' + i; break;
											}
										}
									}
									var callback = function () {
										var nodexx = ui.background_music_setting;
										var nodeyy = nodexx._link.menu;
										var nodezz = nodexx._link.config;
										var musicname = link.slice(link.indexOf('_') + 1);
										game.prompt('###请输入音乐的名称###' + musicname, true, function (str) {
											if (str) musicname = str;
											lib.config.customBackgroundMusic[link] = musicname;
											lib.config.background_music = link;
											lib.config.all.background_music.add(link);
											game.saveConfig('background_music', link);
											game.saveConfig('customBackgroundMusic', lib.config.customBackgroundMusic);
											nodezz.item[link] = lib.config.customBackgroundMusic[link];
											var textMenu = ui.create.div('', lib.config.customBackgroundMusic[link], nodeyy, clickMenuItem, nodeyy.childElementCount - 2);
											textMenu._link = link;
											nodezz.updatex.call(nodexx, []);
											_status.music_importing = false;
											if (!_status._aozhan) game.playBackgroundMusic();
										});
									};
									if (game.writeFile) {
										game.writeFile(fileToLoad, 'audio/background', link + '.mp3', callback);
									}
									else {
										game.putDB('audio', link, fileToLoad, callback);
									}
								}
							};
						}
						else if (j == 'extension_source') {
							ui.extension_source = cfgnode;
							cfgnode.updateInner = function () {
								this._link.choosing.innerHTML = lib.config.extension_source;
							};
						}
						map[j] = cfgnode;
						if (!cfg.unfrequent) {
							if (cfg.type == 'autoskill') {
								page.insertBefore(cfgnode, banskill);
							}
							else {
								page.appendChild(cfgnode);
							}
						}
						else {
							// cfgnode.classList.add('auto-hide');
							hiddenNodes.push(cfgnode);
						}
					}
					var expanded = false;
					if (hiddenNodes.length) {
						// ui.create.div('.config.more','更多 <div>&gt;</div>',page,function(){
						//     if(expanded){
						//      			this.classList.remove('on');
						//      			this.parentNode.classList.remove('expanded');
						//     }
						//     else{
						//      			this.classList.add('on');
						//      			this.parentNode.classList.add('expanded');
						//     }
						//     expanded=!expanded;
						// });
						page.classList.add('morenodes');
						for (var k = 0; k < hiddenNodes.length; k++) {
							page.appendChild(hiddenNodes[k]);
						}
					}
					if (info.config.update) {
						info.config.update(config, map);
					}
				}
				// };
				// if(!get.config('menu_loadondemand')) node._initLink();
				return node;
			};

			for (var i in lib.configMenu) {
				if (i != 'others') createModeConfig(i, start.firstChild);
			}
			(function () {
				if (!game.download && !lib.device) return;
				var page = ui.create.div('#create-extension');
				var node = ui.create.div('.menubutton.large', '文件', start.firstChild, clickMode);
				node.mode = 'create';
				node._initLink = function () {
					node.link = page;
					var pageboard = ui.create.div(page);

					var importextensionexpanded = false;
					var importExtension;
					var extensionnode = ui.create.div('.config.more', '导入素材包 <div>&gt;</div>', pageboard, function () {
						if (importextensionexpanded) {
							this.classList.remove('on');
							importExtension.style.display = 'none';
						}
						else {
							this.classList.add('on');
							importExtension.style.display = '';
						}
						importextensionexpanded = !importextensionexpanded;
					});
					extensionnode.style.padding = '13px 33px 4px';
					extensionnode.style.left = '0px';
					importExtension = ui.create.div('.new_character.export.import', pageboard);
					importExtension.style.padding = '0px 33px 10px';
					importExtension.style.display = 'none';
					importExtension.style.width = '100%';
					importExtension.style.textAlign = 'left';
					ui.create.div('', '<input type="file" accept="application/zip" style="width:153px"><button>确定</button>', importExtension);
					var promptnode = ui.create.div('', '<div style="width:153px;font-size:small;margin-top:8px">', importExtension);
					promptnode.style.display = 'none';
					importExtension.firstChild.lastChild.onclick = function () {
						if (promptnode.style.display != 'none') return;
						var fileToLoad = this.previousSibling.files[0];
						if (fileToLoad) {
							promptnode.style.display = '';
							promptnode.firstChild.innerHTML = '正在解压...';
							var fileReader = new FileReader();
							fileReader.onload = function (fileLoadedEvent) {
								var data = fileLoadedEvent.target.result;
								var loadData = function () {
									var zip = new JSZip();
									zip.load(data);
									var images = [], audios = [], fonts = [], directories = {}, directoryList = [];
									Object.keys(zip.files).forEach(file => {
										const parsedPath = lib.path.parse(file), directory = parsedPath.dir, fileExtension = parsedPath.ext.toLowerCase();
										if (directory.startsWith('audio') && (fileExtension == '.mp3' || fileExtension == '.ogg')) audios.push(file);
										else if(directory.startsWith('font')&&(fileExtension=='.ttf'||fileExtension=='.woff2')) fonts.push(file);
										else if (directory.startsWith('image') && (fileExtension == '.jpg' || fileExtension == '.png')) images.push(file);
										else return;
										if (!directories[directory]) {
											directories[directory] = [];
											directoryList.push(directory);
										}
										directories[directory].push(parsedPath.base);
									});
									if (audios.length || fonts.length || images.length) {
										var str = '';
										if (audios.length) {
											str += audios.length + '个音频文件';
										}
										if (fonts.length) {
											if (str.length) str += '、';
											str += fonts.length + '个字体文件';
										}
										if (images.length) {
											if (str.length) str += '、';
											str += images.length + '个图片文件';
										}
										var filelist = audios.concat(fonts).concat(images);
										if (filelist.length > 200) {
											str += '，导入时间可能较长';
										}
										var assetLoaded = function () {
											promptnode.firstChild.innerHTML = '导入成功。<span class="hrefnode">重新启动</span><span class="closenode">×</span>';
											promptnode.firstChild.querySelectorAll('span')[0].onclick = game.reload;
											promptnode.firstChild.querySelectorAll('span')[1].onclick = function () {
												promptnode.style.display = 'none';
											};
										};
										if (confirm('本次将导入' + str + '，是否继续？')) {
											promptnode.firstChild.innerHTML = '正在导入... <span class="hrefnode">详细信息</span>';
											promptnode.firstChild.querySelector('span.hrefnode').onclick = ui.click.consoleMenu;
											if (lib.node && lib.node.fs) {
												var writeFile = function () {
													if (filelist.length) {
														var str = filelist.shift();
														game.print(str.slice(str.lastIndexOf('/') + 1));
														lib.node.fs.writeFile(__dirname + '/' + str, zip.files[str].asNodeBuffer(), null, writeFile);
													}
													else {
														assetLoaded();
													}
												};
												game.ensureDirectory(directoryList, writeFile);

											}
											else {
												var getDirectory = function () {
													if (directoryList.length) {
														var dir = directoryList.shift();
														var filelist = directories[dir];
														window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + dir, function (entry) {
															var writeFile = function () {
																if (filelist.length) {
																	var filename = filelist.shift();
																	game.print(filename);
																	entry.getFile(filename, { create: true }, function (fileEntry) {
																		fileEntry.createWriter(function (fileWriter) {
																			fileWriter.onwriteend = writeFile;
																			fileWriter.onerror = function (e) {
																				game.print('Write failed: ' + e.toString());
																			};
																			fileWriter.write(zip.files[dir + '/' + filename].asArrayBuffer());
																		});
																	});
																}
																else {
																	getDirectory();
																}
															};
															writeFile();
														});
													}
													else {
														assetLoaded();
													}
												};
												game.ensureDirectory(directoryList, getDirectory);
											}
										}
										else {
											promptnode.style.display = 'none';
										}
									}
									else {
										alert('没有检测到素材');
									}
								};
								if (!window.JSZip) {
									lib.init.js(lib.assetURL + 'game', 'jszip', loadData);
								}
								else {
									loadData();
								}
							};
							fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
						}
					};

					var dashboard = ui.create.div(pageboard);
					var clickDash = function () {
						ui.create.templayer();
						pageboard.hide();
						this.link.show();
						if (this.link.init) {
							this.link.init();
						}
					};
					var createDash = function (str1, str2, node) {
						var dash = ui.create.div('.menubutton.large.dashboard');
						dashboard.appendChild(dash);
						page.appendChild(node);
						dash.link = node;
						node.link = dash;
						dash.listen(clickDash);
						lib.setScroll(node);
						ui.create.div('', str1, dash);
						ui.create.div('', str2, dash);
					};
					var createDash2 = function (str1, str2, path, page) {
						var dash = ui.create.div('.menubutton.large.dashboard.dashboard2');
						page.appendChild(dash);
						dash.listen(function () {
							page.path = path;
							enterDirectory(page, path);
						});
						ui.create.div('', str1, dash);
						ui.create.div('', str2, dash);
					};
					var removeFile = function (selected, page) {
						if (lib.node && lib.node.fs) {
							var unlink = function () {
								if (selected.length) {
									lib.node.fs.unlink(__dirname + '/' + selected.shift().path, unlink);
								}
								else {
									enterDirectory(page, page.currentpath);
								}
							};
							unlink();
						}
						else {
							window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + page.currentpath, function (entry) {
								var unlink = function () {
									if (selected.length) {
										entry.getFile(selected.shift().filename, { create: false }, function (fileEntry) {
											fileEntry.remove(unlink);
										});
									}
									else {
										enterDirectory(page, page.currentpath);
									}
								};
								unlink();
							});
						}
					};
					var clickDirectory = function () {
						if (_status.dragged) return;
						var page = this.parentNode.parentNode.parentNode;
						if (page.deletebutton.classList.contains('active')) {
							if (confirm('确认删除' + this.innerHTML + '文件夹？（此操作不可撤销）')) {
								if (lib.node && lib.node.fs) {
									try {
										var removeDirectory = function (path, callback) {
											lib.node.fs.readdir(__dirname + '/' + path, function (err, list) {
												if (err) {
													console.log(err);
													return;
												}
												var removeFile = function () {
													if (list.length) {
														var filename = list.shift();
														var url = __dirname + '/' + path + '/' + filename;
														if (lib.node.fs.statSync(url).isDirectory()) {
															removeDirectory(path + '/' + filename, removeFile);
														}
														else {
															lib.node.fs.unlink(url, removeFile);
														}
													}
													else {
														lib.node.fs.rmdir(__dirname + '/' + path, callback);
													}
												};
												removeFile();
											});
										};
										removeDirectory(this.path, function () {
											enterDirectory(page, page.currentpath);
										});
									}
									catch (e) {
										console.log(e);
									}
								}
								else {
									window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + this.path, function (entry) {
										entry.removeRecursively(function () {
											enterDirectory(page, page.currentpath);
										});
									});
								}
							}
							return;
						}
						enterDirectory(page, this.path);
					};
					var clickFile = function () {
						if (_status.dragged) return;
						var page = this.parentNode.parentNode.parentNode;
						if (page.deletebutton.classList.contains('active')) {
							if (confirm('确认删除' + this.innerHTML + '？（此操作不可撤销）')) {
								removeFile([this], page);
							}
							return;
						}
						this.classList.toggle('thundertext');
						page.clicked = true;
						if (this.ext == 'jpg' || this.ext == 'png') {
							if (this.classList.contains('thundertext')) {
								if (!this.previewnode) {
									this.previewnode = document.createElement('img');
									this.previewnode.src = lib.assetURL + this.path;
									this.previewnode.width = '60';
									this.previewnode.style.maxHeight = '120px';
									this.parentNode.appendChild(this.previewnode);
								}
							}
							else {
								if (this.previewnode) {
									this.previewnode.remove();
									delete this.previewnode;
								}
							}
						}
						else if (this.ext == 'mp3' || this.ext == 'ogg') {
							if (this.classList.contains('thundertext')) {
								if (!this.previewnode) {
									this.previewnode = game.playAudio(this.path.slice(6));
								}
							}
							else {
								if (this.previewnode) {
									this.previewnode.remove();
									delete this.previewnode;
								}
							}
						}
					};
					var clickFileList = function () {
						if (!this.parentNode) return;
						if (this.parentNode.clicked) {
							this.parentNode.clicked = false;
						}
						else {
							var selected = Array.from(this.querySelectorAll('span.thundertext'));
							for (var i = 0; i < selected.length; i++) {
								selected[i].classList.remove('thundertext');
								if (selected[i].previewnode) {
									selected[i].previewnode.remove();
									delete selected[i].previewnode;
								}
							}
						}
					};
					var enterDirectory = function (page, path) {
						page.innerHTML = '';
						page.currentpath = path;
						var backbutton = ui.create.div('.menubutton.round', '返', page, function () {
							page.clicked = false;
							clickFileList.call(filelist);
							if (page.path == path) {
								page.reset();
							}
							else {
								if (path.indexOf('/') == -1) {
									enterDirectory(page, '');
								}
								else {
									enterDirectory(page, path.slice(0, path.lastIndexOf('/')));
								}
							}
						});
						backbutton.style.zIndex = 1;
						backbutton.style.right = '10px';
						backbutton.style.bottom = '15px';


						var refresh = function () {
							enterDirectory(page, path);
						};
						var addbutton = ui.create.div('.menubutton.round', '添', page, function () {
							var pos1 = this.getBoundingClientRect();
							var pos2 = ui.window.getBoundingClientRect();
							openMenu(this.menu, {
								clientX: pos1.left + pos1.width + 5 - pos2.left,
								clientY: pos1.top - pos2.top
							});
						});
						addbutton.menu = ui.create.div('.menu');
						ui.create.div('', '添加文件', addbutton.menu, function () {
							popupContainer.noclose = true;
						});
						var createDir = function (str) {
							if (lib.node && lib.node.fs) {
								lib.node.fs.mkdir(__dirname + '/' + path + '/' + str, refresh);
							}
							else {
								window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + path, function (entry) {
									entry.getDirectory(str, { create: true }, refresh);
								});
							}
						};
						ui.create.div('', '添加目录', addbutton.menu, function () {
							ui.create.templayer();
							game.prompt('输入目录名称', function (str) {
								if (str) {
									createDir(str);
								}
							});
						});
						var input = document.createElement('input');
						input.className = 'fileinput';
						input.type = 'file';
						input.onchange = function () {
							var fileToLoad = input.files[0];
							game.print(fileToLoad.name);
							if (fileToLoad) {
								var fileReader = new FileReader();
								fileReader.onload = function (e) {
									game.writeFile(e.target.result, path, fileToLoad.name, refresh);
								};
								fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
							}
						};
						addbutton.menu.firstChild.appendChild(input);
						addbutton.style.zIndex = 1;
						addbutton.style.right = '10px';
						addbutton.style.bottom = '80px';

						var deletebutton = ui.create.div('.menubutton.round', '删', page, function () {
							if (!this.parentNode) return;
							if (!this.classList.contains('active')) {
								var selected = Array.from(filelist.querySelectorAll('span.thundertext'));
								if (selected.length) {
									if (confirm('一共要删除' + selected.length + '个文件，此操作不可撤销，是否确定？')) {
										removeFile(selected, page);
									}
								}
								else {
									this.classList.add('active');
								}
							}
							else {
								this.classList.remove('active');
							}
						});
						deletebutton.style.zIndex = 1;
						deletebutton.style.right = '10px';
						deletebutton.style.bottom = '145px';

						page.backbutton = backbutton;
						page.addbutton = addbutton;
						page.deletebutton = deletebutton;
						var filelist = ui.create.div(page);
						filelist.classList.add('file-container');
						filelist.listen(clickFileList);
						lib.setScroll(filelist);
						game.getFileList(path, function (folders, files) {
							var sort = function (a, b) {
								if (a > b) return 1;
								if (a < b) return -1;
								return 0;
							};
							folders.sort(sort);
							files.sort(sort);
							var parent = path;
							if (parent) {
								parent += '/';
							}
							for (var i = 0; i < folders.length; i++) {
								if (!page.path && folders[i] == 'app') continue;
								var entry = ui.create.div('', '<span>' + folders[i], filelist);
								entry.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickDirectory);
								entry.firstChild.path = parent + folders[i];
							}
							for (var i = 0; i < files.length; i++) {
								if (!page.path) {
									if (files[i] == 'app.html') continue;
									if (files[i] == 'main.js') continue;
									if (files[i] == 'package.json') continue;
								}
								var entry = ui.create.div('', '<span>' + files[i], filelist);
								entry.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickFile);
								entry.firstChild.ext = files[i].slice(files[i].lastIndexOf('.') + 1);
								entry.firstChild.path = parent + files[i];
								entry.firstChild.filename = files[i];
							}
						});
					};
					var dash1 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						page.reset = function () {
							page.innerHTML = '';
							var backbutton = ui.create.div('.menubutton.round', '返', page, function () {
								ui.create.templayer();
								page.hide();
								pageboard.show();
							});
							backbutton.style.zIndex = 1;
							backbutton.style.right = '10px';
							backbutton.style.bottom = '15px';
							var placeholder = ui.create.div('.placeholder', page);
							placeholder.style.position = 'relative';
							placeholder.style.display = 'block';
							placeholder.style.width = '100%';
							placeholder.style.height = '14px';
							createDash2('将', '武将图片', 'image/character', page);
							createDash2('肤', '皮肤图片', 'image/skin', page);
							createDash2('卡', '卡牌图片', 'image/card', page);
							createDash2('模', '模式图片', 'image/mode', page);
							createDash2('始', '开始图片', 'image/splash', page);
							createDash2('景', '背景图片', 'image/background', page);
						};
						page.reset();
						return page;
					}());
					var dash2 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						page.reset = function () {
							page.innerHTML = '';
							var backbutton = ui.create.div('.menubutton.round', '返', page, function () {
								ui.create.templayer();
								page.hide();
								pageboard.show();
							});
							backbutton.style.zIndex = 1;
							backbutton.style.right = '10px';
							backbutton.style.bottom = '15px';
							var placeholder = ui.create.div('.placeholder', page);
							placeholder.style.position = 'relative';
							placeholder.style.display = 'block';
							placeholder.style.width = '100%';
							placeholder.style.height = '14px';
							createDash2('技', '技能配音', 'audio/skill', page);
							createDash2('卡', '男性卡牌', 'audio/card/male', page);
							createDash2('牌', '女性卡牌', 'audio/card/female', page);
							createDash2('亡', '阵亡配音', 'audio/die', page);
							createDash2('效', '游戏音效', 'audio/effect', page);
							createDash2('景', '背景音乐', 'audio/background', page);
						};
						page.reset();
						return page;
					}());
					var dash3 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						page.path = 'font';
						page.reset = function () {
							ui.create.templayer();
							page.hide();
							pageboard.show();
						};
						page.init = function () {
							enterDirectory(page, 'font');
						};
						return page;
					}());
					var dash4 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						page.path = '';
						page.reset = function () {
							ui.create.templayer();
							page.hide();
							pageboard.show();
						};
						page.init = function () {
							enterDirectory(page, '');
						};
						return page;
					}());
					createDash('图', '图片文件', dash1);
					createDash('音', '音频文件', dash2);
					createDash('字', '字体文件', dash3);
					createDash('全', '全部文件', dash4);
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());
			createModeConfig('others', start.firstChild);

			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				active.classList.add('active');
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);
		}());

		(function () {
			var start = menuxpages.shift();
			var rightPane = start.lastChild;

			var clickMode = function () {
				var active = this.parentNode.querySelector('.active');
				if (active) {
					if (active === this) {
						return;
					}
					active.classList.remove('active');
					active.link.remove();
				}
				this.classList.add('active');
				updateActive(this);
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
			};
			updateActive = function (node) {
				if (!node) {
					node = start.firstChild.querySelector('.active');
					if (!node) {
						return;
					}
				}
				if (!node.link) {
					node._initLink();
				}
				for (var i = 0; i < node.link.childElementCount; i++) {
					if (node.link.childNodes[i].updateBanned) {
						node.link.childNodes[i].updateBanned();
					}
				}
			};
			var updateNodes = function () {
				for (var i = 0; i < start.firstChild.childNodes.length; i++) {
					var node = start.firstChild.childNodes[i];
					if (node.mode) {
						if (node.mode.startsWith("mode_")) {
							// 扩展武将包开启逻辑
							if (node.mode.startsWith("mode_extension")) {
								const extName = node.mode.slice(15);
								if (!game.hasExtension(extName) || !game.hasExtensionLoaded(extName)) continue;
								if (lib.config[`extension_${extName}_characters_enable`] == true) {
									node.classList.remove("off");
									if (node.link) node.link.firstChild.classList.add("on");
								} else {
									node.classList.add("off");
									if (node.link) node.link.firstChild.classList.remove("on");
								}
							}
							continue;
						}
						if (node.mode == 'custom') continue;
						if (connectMenu) {
							if (!lib.config.connect_characters.includes(node.mode)) {
								node.classList.remove('off');
								if (node.link) node.link.firstChild.classList.add('on');
							}
							else {
								node.classList.add('off');
								if (node.link) node.link.firstChild.classList.remove('on');
							}
						}
						else {
							if (lib.config.characters.includes(node.mode)) {
								node.classList.remove('off');
								if (node.link) node.link.firstChild.classList.add('on');
							}
							else {
								node.classList.add('off');
								if (node.link) node.link.firstChild.classList.remove('on');
							}
						}
					}
				}
			};
			var togglePack = function (bool) {
				var name = this._link.config._name;
				// 扩展武将包开启逻辑
				if (name.startsWith("mode_extension")) {
					const extName = name.slice(15);
					if (!game.hasExtension(extName) || !game.hasExtensionLoaded(extName)) return false;
					game.saveExtensionConfig(extName, "characters_enable", bool);
				}
				// 原逻辑
				else {
					if (connectMenu) {
						if (!bool) {
							lib.config.connect_characters.add(name);
						}
						else {
							lib.config.connect_characters.remove(name);
						}
						game.saveConfig('connect_characters', lib.config.connect_characters);
					}
					else {
						if (bool) {
							lib.config.characters.add(name);
						}
						else {
							lib.config.characters.remove(name);
						}
						game.saveConfig('characters', lib.config.characters);
					}
				}
				updateNodes();
			};

			var createModeConfig = function (mode, position, position2) {
				var _info = lib.characterPack[mode];
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', lib.translate[mode + '_character_config'], position, clickMode);
				// 更改菜单按钮字体
				if (node.innerHTML.length >= 5) {
					if (node.textContent.replace(/[^\u4e00-\u9fa5]/g, "").length >= 6) {
						node.classList.add('minifont');
					} else node.classList.add('smallfont');
				}
				if (position2) {
					position.insertBefore(node, position2);
				}
				node.mode = mode;
				node._initLink = function () {
					node.link = page;
					page.node = node;
					var list = [];
					var boolAI = true;
					var alterableSkills = [];
					var alterableCharacters = [];
					var charactersToAlter = [];
					for (var i in _info) {
						if (_info[i][4] && _info[i][4].includes('unseen')) continue;
						if (connectMenu && lib.connectBanned.includes(i)) continue;
						list.push(i);
						if (boolAI && !lib.config.forbidai_user.includes(i)) boolAI = false;
						for (var j = 0; j < _info[i][3].length; j++) {
							if (!lib.skill[_info[i][3][j]]) {
								continue;
							}
							if (lib.skill[_info[i][3][j]].alter) {
								alterableSkills.add(_info[i][3][j]);
								alterableCharacters.add(i);
								if (lib.config.vintageSkills.includes(_info[i][3][j])) {
									charactersToAlter.add(i);
								}
							}
						}
					}
					alterableCharacters.sort();
					// 武将顺序按自定义列表排（本人扩展：三国24名将、棘手懒人包：特殊武将），检测到吕布/子鼠时不排序
					if(!(list.includes("wms_z_lvbu") || list.includes("ol_zishu")))
					list.sort(lib.sort.character);
					var list2 = list.slice(0);
					var cfgnode = createConfig({
						name: '开启',
						_name: mode,
						init: (() => {
							// 扩展武将包开启逻辑
							if (mode.startsWith("mode_extension")) {
								const extName = mode.slice(15);
								if (!game.hasExtension(extName) || !game.hasExtensionLoaded(extName)) return false;
								// 这块或许应该在加载扩展时候写
								if (lib.config[`extension_${extName}_characters_enable`] === undefined) {
									game.saveExtensionConfig(extName, "characters_enable", true);
								}
								return lib.config[`extension_${extName}_characters_enable`] === true;
							}
							// 原逻辑
							else {
								return connectMenu
									? !lib.config.connect_characters.includes(mode)
									: lib.config.characters.includes(mode);
							}
						})(),
						onclick: togglePack
					});
					var cfgnodeAI = createConfig({
						name: '仅点将可用',
						_name: mode,
						init: boolAI,
						intro: '将该武将包内的武将全部设置为仅点将可用',
						onclick(bool) {
							if (bool) {
								for (var i = 0; i < list.length; i++) {
									lib.config.forbidai_user.add(list[i]);
								}
							}
							else {
								for (var i = 0; i < list.length; i++) {
									lib.config.forbidai_user.remove(list[i]);
								}
							}
							game.saveConfig('forbidai_user', lib.config.forbidai_user);
						},
					});
					if (!mode.startsWith('mode_')) {
						cfgnodeAI.style.marginTop = '0px';
						page.appendChild(cfgnode);
						page.appendChild(cfgnodeAI);
						if (alterableCharacters.length) {
							var cfgnode2 = createConfig({
								name: '新版替换',
								_name: mode,
								init: charactersToAlter.length == 0,
								intro: '以下武将将被修改：' + get.translation(alterableCharacters),
								onclick(bool) {
									if (bool) {
										for (var i = 0; i < alterableSkills.length; i++) {
											lib.config.vintageSkills.remove(alterableSkills[i]);
											lib.translate[alterableSkills[i] + '_info'] = lib.translate[alterableSkills[i] + '_info_alter'];
										}
									}
									else {
										for (var i = 0; i < alterableSkills.length; i++) {
											lib.config.vintageSkills.add(alterableSkills[i]);
											lib.translate[alterableSkills[i] + '_info'] = lib.translate[alterableSkills[i] + '_info_origin'];
										}
									}
									game.saveConfig('vintageSkills', lib.config.vintageSkills);
								}
							});
							cfgnode2.style.marginTop = '0px';
							page.appendChild(cfgnode2);
						}
					}
					else if (mode.startsWith('mode_extension')) {
						// 扩展武将包开启逻辑
						// 排除4个基本扩展，再排除剑阁武将包
						// 给扩展的武将包加一个开启关闭的功能
						if (
							!lib.config.all.stockextension.includes(mode.slice(15)) &&
							mode != "mode_extension_jiange"
						) {
							page.appendChild(cfgnode);
							cfgnodeAI.style.marginTop = '0px';
						}
						page.appendChild(cfgnodeAI);
					}
					else {
						page.style.paddingTop = '8px';
					}
					var banCharacter = function (e) {
						if (_status.clicked) {
							_status.clicked = false;
							return;
						}
						if (mode.startsWith('mode_') && !mode.startsWith('mode_extension_') &&
							mode != 'mode_favourite' && mode != 'mode_banned') {
							if (!connectMenu && lib.config.show_charactercard) {
								ui.click.charactercard(this.link, this, mode == 'mode_guozhan' ? 'guozhan' : true);
							}
							return;
						}
						ui.click.touchpop();
						this._banning = connectMenu ? 'online' : 'offline';
						if (!connectMenu && lib.config.show_charactercard) {
							ui.click.charactercard(this.link, this);
						}
						else {
							ui.click.intro.call(this, e);
						}
						_status.clicked = false;
						delete this._banning;
					};
					var updateBanned = function () {
						var _list;
						if (connectMenu) {
							var mode = menux.pages[0].firstChild.querySelector('.active');
							if (mode && mode.mode) {
								_list = lib.config['connect_' + mode.mode + '_banned'];
							}
						}
						else {
							_list = lib.config[get.mode() + '_banned'];
						}
						if (_list && _list.includes(this.link)) {
							this.classList.add('banned');
						}
						else {
							this.classList.remove('banned');
						}
					};
					if (lib.characterSort[mode]) {
						var listb = [];
						if (!connectMenu) {
							listb = lib.config[get.mode() + '_banned'] || [];
						}
						else {
							var modex = menux.pages[0].firstChild.querySelector('.active');
							if (modex && modex.mode) {
								listb = lib.config['connect_' + modex.mode + '_banned'];
							}
						}
						for (var pak in lib.characterSort[mode]) {
							var info = lib.characterSort[mode][pak];
							var listx = [];
							var boolx = false;
							for (var ii = 0; ii < list2.length; ii++) {
								if (info.includes(list2[ii])) {
									listx.add(list2[ii]);
									if (!listb.includes(list2[ii])) boolx = true;
									list2.splice(ii--, 1);
								}
							}
							if (listx.length) {
								var cfgnodeY = {
									name: lib.translate[pak],
									intro: lib.translate[pak + "_info"] || false,
									_name: pak,
									init: boolx,
									onclick(bool) {
										var banned = [];
										if (connectMenu) {
											var modex = menux.pages[0].firstChild.querySelector('.active');
											if (modex && modex.mode) {
												banned = lib.config['connect_' + modex.mode + '_banned'];
											}
										}
										else if (_status.connectMode) return;
										else banned = lib.config[get.mode() + '_banned'] || [];
										var listx = lib.characterSort[mode][this._link.config._name];
										if (bool) {
											for (var i = 0; i < listx.length; i++) {
												banned.remove(listx[i]);
											}
										}
										else {
											for (var i = 0; i < listx.length; i++) {
												banned.add(listx[i]);
											}
										}
										game.saveConfig(connectMenu ? ('connect_' + modex.mode + '_banned') : (get.mode() + '_banned'), banned);
										updateActive();
									},
								};
								if (mode.startsWith('mode_') && !mode.startsWith('mode_extension_') && !mode.startsWith('mode_guozhan')) {
									cfgnodeY.clear = true;
									delete cfgnodeY.onclick;
								}
								var cfgnodeX = createConfig(cfgnodeY);
								page.appendChild(cfgnodeX);
								var buttons = ui.create.buttons(listx, 'character', page);
								for (var i = 0; i < buttons.length; i++) {
									buttons[i].classList.add('noclick');
									buttons[i].listen(banCharacter);
									ui.create.rarity(buttons[i]);
									buttons[i].node.hp.style.transition = 'all 0s';
									buttons[i].node.hp._innerHTML = buttons[i].node.hp.innerHTML;
									if (mode != 'mode_banned') {
										buttons[i].updateBanned = updateBanned;
									}
								}
							}
						}
						if (list2.length) {
							var boolx=false;
							for(var i=0;i<list2.length;i++){
								if(!listb.contains(list2[i])) boolx=true;
							}
							var cfgnodeY={
								name:'等待分包',
								_name:'others',
								init:boolx,
								onclick:function(bool){
									var banned=[];
									if(connectMenu){
										var modex=menux.pages[0].firstChild.querySelector('.active');
										if(modex&&modex.mode){
											banned=lib.config['connect_'+modex.mode+'_banned'];
										}
									}
									else if(_status.connectMode) return;
									else banned=lib.config[get.mode()+'_banned']||[];
									if(bool){
										for(var i=0;i<list2.length;i++){
											banned.remove(list2[i]);
										}
									}
									else{
										for(var i=0;i<list2.length;i++){
											banned.add(list2[i]);
										}
									}
									game.saveConfig(connectMenu?('connect_'+modex.mode+'_banned'):(get.mode()+'_banned'),banned);
									updateActive();
								},
							};
							if(mode.startsWith('mode_')&&!mode.startsWith('mode_extension_')&&!mode.startsWith('mode_guozhan')){
								cfgnodeY.clear=true;
								delete cfgnodeY.onclick;
							}
							var cfgnodeX=createConfig(cfgnodeY);
							page.appendChild(cfgnodeX);
							var buttons = ui.create.buttons(list2, 'character', page);
							for (var i = 0; i < buttons.length; i++) {
								buttons[i].classList.add('noclick');
								buttons[i].listen(banCharacter);
								ui.create.rarity(buttons[i]);
								buttons[i].node.hp.style.transition = 'all 0s';
								buttons[i].node.hp._innerHTML = buttons[i].node.hp.innerHTML;
								if (mode != 'mode_banned') {
									buttons[i].updateBanned = updateBanned;
								}
							}
						}
					}
					else {
						var buttons = ui.create.buttons(list, 'character', page);
						for (var i = 0; i < buttons.length; i++) {
							buttons[i].classList.add('noclick');
							ui.create.rarity(buttons[i]);
							buttons[i].listen(banCharacter);
							buttons[i].node.hp.style.transition = 'all 0s';
							buttons[i].node.hp._innerHTML = buttons[i].node.hp.innerHTML;
							if (mode != 'mode_banned') {
								buttons[i].updateBanned = updateBanned;
							}
						}
					}
					page.classList.add('menu-buttons');
					page.classList.add('leftbutton');
					if (!connectMenu) {
						if (lib.config.all.sgscharacters.includes(mode)) {
							ui.create.div('.config.pointerspan', '<span style="opacity:0.5">该武将包不可被隐藏</span>', page);
						}
						else if (!mode.startsWith('mode_')) {
							ui.create.div('.config.pointerspan', '<span>隐藏武将包</span>', page, function () {
								if (this.firstChild.innerHTML == '隐藏武将包') {
									if (confirm('真的要隐藏“' + get.translation(mode + '_character_config') + '”武将包吗？\n建议使用“关闭”而不是“隐藏”功能，否则将会影响其他相关武将包的正常运行！')) {
										this.firstChild.innerHTML = '武将包将在重启后隐藏';
										lib.config.hiddenCharacterPack.add(mode);
										if (!lib.config.prompt_hidepack) {
											alert('隐藏的扩展包可通过选项-其它-重置隐藏内容恢复');
											game.saveConfig('prompt_hidepack', true);
										}
									}
								}
								else {
									this.firstChild.innerHTML = '隐藏武将包';
									lib.config.hiddenCharacterPack.remove(mode);
								}
								game.saveConfig('hiddenCharacterPack', lib.config.hiddenCharacterPack);
							});
						}
					}
				};
				if (!get.config('menu_loadondemand')) node._initLink();
				return node;
			};
			if (lib.config.show_favourite_menu && !connectMenu && Array.isArray(lib.config.favouriteCharacter)) {
				lib.characterPack.mode_favourite = {};
				for (var i = 0; i < lib.config.favouriteCharacter.length; i++) {
					var favname = lib.config.favouriteCharacter[i];
					if (lib.character[favname]) {
						lib.characterPack.mode_favourite[favname] = lib.character[favname];
					}
				}
				var favouriteCharacterNode = createModeConfig('mode_favourite', start.firstChild);
				if (!favouriteCharacterNode.link) favouriteCharacterNode._initLink();
				ui.favouriteCharacter = favouriteCharacterNode.link;
				if (get.is.empty(lib.characterPack.mode_favourite)) {
					ui.favouriteCharacter.node.style.display = 'none';
				}
				delete lib.characterPack.mode_favourite;
			}
			if (!connectMenu && lib.config.show_ban_menu) {
				lib.characterPack.mode_banned = {};
				for (var i = 0; i < lib.config.all.mode.length; i++) {
					var banned = lib.config[lib.config.all.mode[i] + '_banned'];
					if (banned) {
						for (var j = 0; j < banned.length; j++) {
							if (lib.character[banned[j]]) {
								lib.characterPack.mode_banned[banned[j]] = lib.character[banned[j]];
							}
						}
					}
				}
				var bannednode = createModeConfig('mode_banned', start.firstChild);
				if (get.is.empty(lib.characterPack.mode_banned)) {
					bannednode.style.display = 'none';
				}
				delete lib.characterPack.mode_banned;
			}
			var characterlist = connectMenu ? lib.connectCharacterPack : lib.config.all.characters;
			for (var i = 0; i < characterlist.length; i++) {
				createModeConfig(characterlist[i], start.firstChild);
			}
			
			// 剑阁和挑战武将包排最后
			/*
			if (!connectMenu) Object.keys(lib.characterPack).forEach(key => {
				if (key.startsWith('mode_')) createModeConfig(key, start.firstChild);
			});
			*/
			if (!connectMenu) {
				// 获取所有以 'mode_' 开头的键
				const modeKeys = Object.keys(lib.characterPack).filter(key => key.startsWith('mode_'));
				
				// 定义指定顺序的 key 列表（按从前到后）
				const specificOrder = [
					"mode_extension_jiange",
					"mode_extension_boss",
					"mode_versus",
					"mode_boss",
					"mode_guozhan"
				];
				
				// 创建 Set 用于快速查找（提高性能）
				const modeKeySet = new Set(modeKeys);
				
				// 1. 先处理非指定的 mode_ 键
				const otherModeKeys = modeKeys.filter(key => !specificOrder.includes(key));
				otherModeKeys.forEach(key => {
					createModeConfig(key, start.firstChild);
				});
				
				// 2. 再处理指定的 mode_ 键
				specificOrder.forEach(key => {
					if (modeKeySet.has(key)) {
						createModeConfig(key, start.firstChild);
					}
				});
			}
			
			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				if (active.style.display == 'none') {
					active = active.nextSibling;
					if (active.style.display == 'none') {
						active = active.nextSibling;
					}
				}
				active.classList.add('active');
				updateActive(active);
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);

			if (!connectMenu) {
				// 扩展武将包开启逻辑
				// 非联机框架武将包全部开启true、非联机框架武将包全部关闭false
				var extcharacters = function (bool) {
					Object.keys(lib.characterPack).forEach(key => {
						if (key.startsWith('mode_extension')) {
							const extName = key.slice(15);
							if (!(!game.hasExtension(extName) || !game.hasExtensionLoaded(extName))) {
								game.saveExtensionConfig(extName, "characters_enable", bool);
							}
						}
					});
				};
				
				lib.config.nocharacters=[];
				lib.config.defaultcharacters=['standard','shenhua','sp','sp2','yijiang','refresh','xinghuoliaoyuan','mobile','extra','yingbian','sb','tw','offline','clan','collab','xianding','huicui','shiji','jsrg','sxrm','onlyOL','sixiang','bingshi','sbfm','mdtx','shengxiao','old'];
				lib.config.notdefaultcharacters=['diy','ddd','key','yxs','hearth','gwent','mtg','ow','swd','gujian','xianjian'];
				lib.config.benticharacters=lib.config.defaultcharacters.concat(lib.config.notdefaultcharacters);
				var node1 = ui.create.div('.lefttext', '全部开启', start.firstChild, function () {
					extcharacters(true);
					game.saveConfig('characters', lib.config.all.characters);
					updateNodes();
				});
				var node2 = ui.create.div('.lefttext', '恢复默认', start.firstChild, function () {
					extcharacters(false);
					game.saveConfig('characters', lib.config.defaultcharacters);
					updateNodes();
				});
				var node3=ui.create.div('.lefttext','全部关闭',start.firstChild,function(){
					extcharacters(false);
					game.saveConfig('characters',lib.config.nocharacters);
					updateNodes();
				});
				var node4=ui.create.div('.lefttext','默认&扩展',start.firstChild,function(){
					extcharacters(true);
					game.saveConfig('characters',lib.config.all.characters.filter(item=>!lib.config.notdefaultcharacters.includes(item)));
					updateNodes();
				});
				var node5=ui.create.div('.lefttext','全部扩展',start.firstChild,function(){
					extcharacters(true);
					game.saveConfig('characters',lib.config.all.characters.filter(item=>!lib.config.benticharacters.includes(item)));
					updateNodes();
				});
				var node6=ui.create.div('.lefttext','全部本体',start.firstChild,function(){
					extcharacters(false);
					game.saveConfig('characters',lib.config.benticharacters);
					updateNodes();
				});
				var node7=ui.create.div('.lefttext','本体非默认',start.firstChild,function(){
					extcharacters(false);
					game.saveConfig('characters',lib.config.notdefaultcharacters);
					updateNodes();
				});
				var node8=ui.create.div('.lefttext','全部非默认',start.firstChild,function(){
					extcharacters(true);
					game.saveConfig('characters',lib.config.all.characters.filter(item=>!lib.config.defaultcharacters.includes(item)));
					updateNodes();
				});
				node1.style.marginTop = '12px';
				node2.style.marginTop = '7px';
				node3.style.marginTop='7px';
				node4.style.marginTop='7px';
				node5.style.marginTop='7px';
				node6.style.marginTop='7px';
				node7.style.marginTop='7px';
				node8.style.marginTop='7px';
			}

			updateNodes();
		}());

		(function () {
			var start = menuxpages.shift();
			var rightPane = start.lastChild;
			var pileCreated = false;
			var recreatePile = function () {
				lib.config.customcardpile['当前牌堆'] = [lib.config.bannedpile, lib.config.addedpile];
				game.saveConfig('customcardpile', lib.config.customcardpile);
				game.saveConfig('cardpilename', '当前牌堆', true);
				pileCreated = false;
			};

			var clickMode = function () {
				var active = this.parentNode.querySelector('.active');
				if (active === this) {
					return;
				}
				active.classList.remove('active');
				active.link.remove();
				active = this;
				this.classList.add('active');
				updateActiveCard(this);
				if (this.mode == 'cardpile') {
					this.create();
				}
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
			};
			updateActiveCard = function (node) {
				if (!node) {
					node = start.firstChild.querySelector('.active');
					if (!node) {
						return;
					}
				}
				if (!node.link) node._initLink();
				for (var i = 0; i < node.link.childElementCount; i++) {
					if (node.link.childNodes[i].updateBanned) {
						node.link.childNodes[i].updateBanned();
					}
				}
			};
			var updateNodes = function () {
				for (var i = 0; i < start.firstChild.childNodes.length; i++) {
					var node = start.firstChild.childNodes[i];
					if (node.mode) {
						if (node.mode.startsWith('mode_')) continue;
						if (node.mode == 'custom') continue;
						if (node.mode == 'cardpile') continue;
						if (connectMenu) {
							if (!lib.config.connect_cards.includes(node.mode)) {
								node.classList.remove('off');
								if (node.link) node.link.firstChild.classList.add('on');
							}
							else {
								node.classList.add('off');
								if (node.link) node.link.firstChild.classList.remove('on');
							}
						}
						else {
							if (lib.config.cards.includes(node.mode)) {
								node.classList.remove('off');
								if (node.link) node.link.firstChild.classList.add('on');
							}
							else {
								node.classList.add('off');
								if (node.link) node.link.firstChild.classList.remove('on');
							}
						}
					}
				}
			};
			var togglePack = function (bool) {
				var name = this._link.config._name;
				if (connectMenu) {
					if (!bool) {
						lib.config.connect_cards.add(name);
					}
					else {
						lib.config.connect_cards.remove(name);
					}
					game.saveConfig('connect_cards', lib.config.connect_cards);
				}
				else {
					if (bool) {
						lib.config.cards.add(name);
					}
					else {
						lib.config.cards.remove(name);
					}
					game.saveConfig('cards', lib.config.cards);
				}
				updateNodes();
			};
			var toggleCardPile = function (bool) {
				var name = this._link.config._name;
				var number = this._link.config._number;
				if (!lib.config.bannedpile[name]) {
					lib.config.bannedpile[name] = [];
				}
				if (bool) {
					lib.config.bannedpile[name].remove(number);
				}
				else {
					lib.config.bannedpile[name].add(number);
				}
				recreatePile();
			};

			var createModeConfig = function (mode, position) {
				var info = lib.cardPack[mode];
				let cardPack = lib.cardPackInfo[mode];
				if (!lib.cardPile[mode] && cardPack && cardPack.list && Array.isArray(cardPack.list)) lib.cardPile[mode]=cardPack.list;
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', lib.translate[mode + '_card_config'], position, clickMode);
				// 更改菜单按钮字体
				if (node.innerHTML.length >= 5) {
					if (node.textContent.replace(/[^\u4e00-\u9fa5]/g, "").length >= 6) {
						node.classList.add('minifont');
					} else node.classList.add('smallfont');
				}
				node.mode = mode;
				node._initLink = function () {
					node.link = page;
					var list = [];
					for (var i = 0; i < info.length; i++) {
						if (!lib.card[info[i]] || (lib.card[info[i]].derivation && mode != 'mode_derivation')) continue;
						// 不用修改√ or 修改×
						list.push([get.translation(get.type(info[i], 'trick')), '', info[i]]);
						// list.push(['',get.translation(get.type(info[i],'trick')),info[i]]);
					}
					var sortCard = function (card) {
						var type = lib.card[card[2]].type;
						var subtype = lib.card[card[2]].subtype;
						if (lib.cardType[subtype]) {
							return lib.cardType[subtype];
						}
						if (lib.cardType[type]) {
							return lib.cardType[type];
						}
						switch (type) {
							case 'basic': return 0;
							case 'chess': return 1.5;
							case 'trick': return 2;
							case 'delay': return 3;
							case 'equip': {
								switch (lib.card[card[2]].subtype) {
									case 'equip1': return 4.1;
									case 'equip2': return 4.2;
									case 'equip3': return 4.3;
									case 'equip4': return 4.4;
									case 'equip5': return 4.5;
									default: return 4;
								}
							}
							case 'zhenfa': return 5;
							default: return 6;
						}
					};
					// 卡牌顺序按自定义列表排（本人扩展：怪物猎人），检测到大剑时不排序
					if(list[0] && list[0][2] && !(list[0][2].includes("m_h_dajian") || list[0][2].includes("wms_z_deluge")))
					list.sort(function (a, b) {
						var sort1 = sortCard(a);
						var sort2 = sortCard(b);
						if (sort1 == sort2) {
							return (b[2] < a[2]) ? 1 : -1;
						}
						else if (sort1 > sort2) {
							return 1;
						}
						else {
							return -1;
						}
					});
					var cfgnode = createConfig({
						name: '开启',
						_name: mode,
						init: lib.config.cards.includes(mode),
						onclick: togglePack
					});
					if (!mode.startsWith('mode_') || (cardPack && cardPack.closeable)) {
						page.appendChild(cfgnode);
					}
					else {
						page.style.paddingTop = '8px';
					}
					var banCard = function (e) {
						if (_status.clicked) {
							_status.clicked = false;
							return;
						}
						if (mode.startsWith('mode_') && !mode.startsWith('mode_extension_') && mode != 'mode_banned') {
							return;
						}
						ui.click.touchpop();
						this._banning = connectMenu ? 'online' : 'offline';
						ui.click.intro.call(this, e);
						_status.clicked = false;
						delete this._banning;
					};
					var updateBanned = function () {
						var list;
						if (connectMenu) {
							var mode = menux.pages[0].firstChild.querySelector('.active');
							if (mode && mode.mode) {
								list = lib.config['connect_' + mode.mode + '_bannedcards'];
							}
						}
						else {
							list = lib.config[get.mode() + '_bannedcards'];
						}
						if (list && list.includes(this.link[2])) {
							this.classList.add('banned');
						}
						else {
							this.classList.remove('banned');
						}
					};
					var buttons = ui.create.buttons(list, 'vcard', page);
					for (var i = 0; i < buttons.length; i++) {
						buttons[i].classList.add('noclick');
						
						// 菜单卡牌的显示美化
						buttons[i].classList.add('menusize');
						buttons[i].node.suitnum.classList.add('menusize');
						buttons[i].node.image.classList.add('menusize');
						buttons[i].$name.classList.add('menusize');
						
						buttons[i].listen(banCard);
						if (mode != 'mode_banned') {
							buttons[i].updateBanned = updateBanned;
						}
					}
					page.classList.add('menu-buttons');
					page.classList.add('leftbutton');
					if (!connectMenu && !lib.config.all.sgscards.includes(mode) && !mode.startsWith('mode_')) {
						ui.create.div('.config.pointerspan', '<span>隐藏卡牌包</span>', page, function () {
							if (this.firstChild.innerHTML == '隐藏卡牌包') {
								this.firstChild.innerHTML = '卡牌包将在重启后隐藏';
								lib.config.hiddenCardPack.add(mode);
								if (!lib.config.prompt_hidepack) {
									alert('隐藏的扩展包可通过选项-其它-重置隐藏内容恢复');
									game.saveConfig('prompt_hidepack', true);
								}
							}
							else {
								this.firstChild.innerHTML = '隐藏卡牌包';
								lib.config.hiddenCardPack.remove(mode);
							}
							game.saveConfig('hiddenCardPack', lib.config.hiddenCardPack);
						});
					}
					if ((!mode.startsWith('mode_') || (cardPack && cardPack.closeable)) && lib.cardPile[mode]) {
						var cardpileNodes = [];
						var cardpileexpanded = false;
						if (!lib.config.bannedpile[mode]) {
							lib.config.bannedpile[mode] = [];
						}
						if (!lib.config.addedpile[mode]) {
							lib.config.addedpile[mode] = [];
						}
						ui.create.div('.config.more.pile', '编辑牌堆 <div>&gt;</div>', page, function () {
							if (cardpileexpanded) {
								this.classList.remove('on');
								for (var k = 0; k < cardpileNodes.length; k++) {
									cardpileNodes[k].style.display = 'none';
								}
							}
							else {
								this.classList.add('on');
								for (var k = 0; k < cardpileNodes.length; k++) {
									cardpileNodes[k].style.display = '';
								}
							}
							cardpileexpanded = !cardpileexpanded;
						});
						var cfgnode = ui.create.div(page, '.config.pointerspan.cardpilecfg.toggle');
						var cfgaddcard = ui.create.node('button', '', '添加卡牌', cfgnode, function () {
							this.parentNode.nextSibling.classList.toggle('hidden');
						});
						var cfgbancard = ui.create.node('button', '', '全部关闭', cfgnode, function () {
							for (var i = 0; i < cardpileNodes.length; i++) {
								if (cardpileNodes[i].type == 'defaultcards' && cardpileNodes[i].classList.contains('on')) {
									clickToggle.call(cardpileNodes[i]);
								}
							}
						});
						var cfgenablecard = ui.create.node('button', '', '全部开启', cfgnode, function () {
							for (var i = 0; i < cardpileNodes.length; i++) {
								if (cardpileNodes[i].type == 'defaultcards' && !cardpileNodes[i].classList.contains('on')) {
									clickToggle.call(cardpileNodes[i]);
								}
							}
						});
						cfgbancard.style.marginLeft = '5px';
						cfgenablecard.style.marginLeft = '5px';
						cardpileNodes.push(cfgnode);
						cfgnode.style.display = 'none';
						cfgnode.classList.add('cardpilecfg');
						cfgnode.classList.add('toggle');
						cfgnode.style.marginTop = '5px';
						page.appendChild(cfgnode);

						var cardpileadd = ui.create.div('.config.toggle.hidden.cardpilecfg.cardpilecfgadd', page);
						var pileaddlist = [];
						for (var i = 0; i < lib.config.cards.length; i++) {
							if (!lib.cardPack[lib.config.cards[i]]) continue;
							for (var j = 0; j < lib.cardPack[lib.config.cards[i]].length; j++) {
								var cname = lib.cardPack[lib.config.cards[i]][j];
								pileaddlist.push([cname, get.translation(cname)]);
								if (cname == 'sha') {
									pileaddlist.push(['huosha', '火杀']);
									pileaddlist.push(['leisha', '雷杀']);
									pileaddlist.push(['icesha', '冰杀']);
									pileaddlist.push(['cisha', '刺杀']);
								}
							}
						}
						var cardpileaddname = ui.create.selectlist(pileaddlist, null, cardpileadd);
						cardpileaddname.style.width = '75px';
						cardpileaddname.style.marginRight = '2px';
						cardpileaddname.style.marginLeft = '-1px';
						var cardpileaddsuit = ui.create.selectlist([
							['heart', '红桃'],
							['diamond', '方片'],
							['club', '梅花'],
							['spade', '黑桃'],
						], null, cardpileadd);
						cardpileaddsuit.style.width = '53px';
						cardpileaddsuit.style.marginRight = '2px';
						var cardpileaddnumber = ui.create.selectlist([
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
						], null, cardpileadd);
						cardpileaddnumber.style.width = '43px';
						cardpileaddnumber.style.marginRight = '2px';
						var button = document.createElement('button');
						button.innerHTML = '确定';
						button.style.width = '40px';
						var deletecard = function () {
							this.parentNode.remove();
							var info = this.parentNode._info;
							var list = lib.config.addedpile[mode];
							for (var i = 0; i < list.length; i++) {
								if (list[i][0] == info[0] && list[i][1] == info[1] && list[i][2] == info[2]) {
									list.splice(i, 1); break;
								}
							}
							recreatePile();
						};
						button.onclick = function () {
							var card = [
								cardpileaddsuit.value,
								cardpileaddnumber.value,
								cardpileaddname.value,
							];
							lib.config.addedpile[mode].push(card);
							recreatePile();
							var cfgnode = ui.create.div('.config.toggle.cardpilecfg');
							cfgnode._info = card;
							cfgnode.innerHTML = get.translation(card[2]) + ' ' + get.translation(card[0]) + get.strNumber(card[1]);
							var cfgnodedelete = document.createElement('span');
							cfgnodedelete.classList.add('cardpiledelete');
							cfgnodedelete.innerHTML = '删除';
							cfgnodedelete.onclick = deletecard;
							cfgnode.appendChild(cfgnodedelete);
							page.insertBefore(cfgnode, cardpileadd.nextSibling);
						};
						cardpileadd.appendChild(button);
						cardpileadd.style.whiteSpace = 'nowrap';
						cardpileNodes.push(cardpileadd);

						for (var i = 0; i < lib.config.addedpile[mode].length; i++) {
							var card = lib.config.addedpile[mode][i];
							var cfgnode = ui.create.div('.config.toggle.cardpilecfg');
							cfgnode._info = card;
							cfgnode.innerHTML = get.translation(card[2]) + ' ' + get.translation(card[0]) + card[1];
							var cfgnodedelete = document.createElement('span');
							cfgnodedelete.classList.add('cardpiledelete');
							cfgnodedelete.innerHTML = '删除';
							cfgnodedelete.onclick = deletecard;
							cfgnode.appendChild(cfgnodedelete);
							cfgnode.style.display = 'none';
							cardpileNodes.push(cfgnode);
							page.appendChild(cfgnode);
						}

						for (var i = 0; i < lib.cardPile[mode].length; i++) {
							var card = lib.cardPile[mode][i];
							var cfgnode = createConfig({
								name: ((card[2] == 'sha' && card[3]) ? (get.translation(card[3])) : '') + get.translation(card[2]) + ' ' + get.translation(card[0]) + get.strNumber(card[1]),
								_number: i,
								_name: mode,
								init: !lib.config.bannedpile[mode].includes(i),
								onclick: toggleCardPile
							});
							cfgnode.type = 'defaultcards';
							cardpileNodes.push(cfgnode);
							cfgnode.style.display = 'none';
							cfgnode.classList.add('cardpilecfg');
							page.appendChild(cfgnode);
						}
						ui.create.div('.menuplaceholder', page);
					}
				};
				if (!get.config('menu_loadondemand')) node._initLink();
				return node;
			};
			if (!connectMenu && lib.config.show_ban_menu) {
				lib.cardPack.mode_banned = [];
				for (var i = 0; i < lib.config.all.mode.length; i++) {
					var banned = lib.config[lib.config.all.mode[i] + '_bannedcards'];
					if (banned) {
						for (var j = 0; j < banned.length; j++) {
							lib.cardPack.mode_banned.add(banned[j]);
						}
					}
				}
				var bannednode = createModeConfig('mode_banned', start.firstChild);
				if (lib.cardPack.mode_banned.length == 0) {
					bannednode.style.display = 'none';
				}
				delete lib.cardPack.mode_banned;
			}
			for (var i = 0; i < lib.config.all.cards.length; i++) {
				if (connectMenu && !lib.connectCardPack.includes(lib.config.all.cards[i])) continue;
				createModeConfig(lib.config.all.cards[i], start.firstChild);
			}
			if (!connectMenu) Object.keys(lib.cardPack).forEach(key => {
				if (key.startsWith('mode_')) createModeConfig(key, start.firstChild);
			});
			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				if (active.style.display == 'none') {
					active = active.nextSibling;
				}
				active.classList.add('active');
				updateActiveCard(active);
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);

			(function () {
				if (connectMenu) return;
				var page = ui.create.div('.menu-buttons');
				var node = ui.create.div('.menubutton.large', '牌堆', clickMode);
				start.firstChild.insertBefore(node, start.firstChild.querySelector('.lefttext'));
				node.link = page;
				node.mode = 'cardpile';
				node.create = function () {
					if (pileCreated) return;
					pileCreated = true;
					page.innerHTML = '';

					var pileList = null;
					var createList = function () {
						if (pileList) {
							pileList.remove();
						}
						var list = ['默认牌堆'];
						if (lib.config.customcardpile['当前牌堆']) {
							list.push('当前牌堆');
						}
						for (var i in lib.config.customcardpile) {
							list.add(i);
						}
						var currentpile = get.config('cardpilename');
						if (!currentpile) {
							if (list.includes('当前牌堆')) {
								currentpile = '当前牌堆';
							}
							else {
								currentpile = '默认牌堆';
							}
						}
						pileList = ui.create.selectlist(list, currentpile, pileChoose, function (e) {
							game.saveConfig('cardpilename', this.value, true);
							restart.style.display = '';
						});
						pileList.style.float = 'right';
					};
					var pileChoose = ui.create.div('.config.toggle.cardpilecfg.nomarginleft', '选择牌堆', page);
					createList();

					var pileDel = function () {
						delete lib.config.customcardpile[this.parentNode.link];
						this.parentNode.remove();
						game.saveConfig('customcardpile', lib.config.customcardpile);
						for (var i in lib.config.mode_config) {
							if (i == 'global') continue;
							if (lib.config.mode_config[i].cardpilename == this.parentNode.link) {
								game.saveConfig('cardpilename', null, i);
							}
						}
						createList();
					};

					var restart = ui.create.div('.config.more', '重新启动', game.reload, page);
					restart.style.display = 'none';
					var createPileNode = function (name) {
						var node = ui.create.div('.config.toggle.cardpilecfg.nomarginleft', name);
						node.link = name;
						var del = document.createElement('span');
						del.innerHTML = '删除';
						del.classList.add('cardpiledelete');
						del.onclick = pileDel;
						node.appendChild(del);
						if (name == '当前牌堆') {
							page.insertBefore(node, pileChoose.nextSibling);
						}
						else {
							page.insertBefore(node, restart);
						}
					};
					for (var i in lib.config.customcardpile) {
						createPileNode(i);
					}
					var exportCardPile;
					ui.create.div('.config.more', '保存当前牌堆 <div>&gt;</div>', page, function () {
						this.classList.toggle('on');
						if (this.classList.contains('on')) {
							exportCardPile.classList.remove('hidden');
						}
						else {
							exportCardPile.classList.add('hidden');
						}
					});
					exportCardPile = ui.create.div('.config.cardpileadd.indent', page);
					exportCardPile.classList.add('hidden');
					ui.create.div('', '名称：<input type="text"><button>确定</button>', exportCardPile);
					var input = exportCardPile.firstChild.lastChild.previousSibling;
					input.value = '自定义牌堆';
					input.style.marginRight = '3px';
					input.style.width = '120px';
					exportCardPile.firstChild.lastChild.onclick = function () {
						var name = input.value;
						var ok = true;
						if (lib.config.customcardpile[name] || name == '默认牌堆' || name == '当前牌堆') {
							for (var i = 1; i <= 1000; i++) {
								if (!lib.config.customcardpile[name + '(' + i + ')']) {
									name = name + '(' + i + ')';
									break;
								}
							}
						}
						lib.config.customcardpile[name] = [lib.config.bannedpile, lib.config.addedpile];
						delete lib.config.customcardpile['当前牌堆'];
						for (var i in lib.mode) {
							if (lib.config.mode_config[i] &&
								(lib.config.mode_config[i].cardpilename == '当前牌堆' || !lib.config.mode_config[i].cardpilename)) {
								game.saveConfig('cardpilename', name, i);
							}
						}
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].link == '当前牌堆') {
								page.childNodes[i].remove();
								break;
							}
						}
						game.saveConfig('customcardpile', lib.config.customcardpile);
						createPileNode(name);
						createList();
					};
				};
			}());

			if (!connectMenu) {
				lib.config.nocards=[];
				lib.config.defaultcards=['standard','extra'];
				lib.config.notdefaultcards=['sp','guozhan','zhulu','yingbian','yongjian','zhenfa','yunchou','swd','gujian','hearth','gwent','mtg','huanlekapai','xianxia'];
				lib.config.benticards=lib.config.defaultcards.concat(lib.config.notdefaultcards);
				var node1 = ui.create.div('.lefttext', '全部开启', start.firstChild, function () {
					game.saveConfig('cards', lib.config.all.cards);
					updateNodes();
				});
				var node2 = ui.create.div('.lefttext', '恢复默认', start.firstChild, function () {
					game.saveConfig('cards', lib.config.defaultcards);
					updateNodes();
				});
				var node3=ui.create.div('.lefttext','全部关闭',start.firstChild,function(){
					game.saveConfig('cards',lib.config.nocards);
					updateNodes();
				});
				var node4=ui.create.div('.lefttext','默认&扩展',start.firstChild,function(){
					game.saveConfig('cards',lib.config.all.cards.filter(item=>!lib.config.notdefaultcards.includes(item)));
					updateNodes();
				});
				var node5=ui.create.div('.lefttext','全部扩展',start.firstChild,function(){
					game.saveConfig('cards',lib.config.all.cards.filter(item=>!lib.config.benticards.includes(item)));
					updateNodes();
				});
				var node6=ui.create.div('.lefttext','全部本体',start.firstChild,function(){
					game.saveConfig('cards',lib.config.benticards);
					updateNodes();
				});
				var node7=ui.create.div('.lefttext','本体非默认',start.firstChild,function(){
					game.saveConfig('cards',lib.config.notdefaultcards);
					updateNodes();
				});
				var node8=ui.create.div('.lefttext','全部非默认',start.firstChild,function(){
					game.saveConfig('cards',lib.config.all.cards.filter(item=>!lib.config.defaultcards.includes(item)));
					updateNodes();
				});
				node1.style.marginTop = '12px';
				node2.style.marginTop = '7px';
				node3.style.marginTop='7px';
				node4.style.marginTop='7px';
				node5.style.marginTop='7px';
				node6.style.marginTop='7px';
				node7.style.marginTop='7px';
				node8.style.marginTop='7px';
			}

			updateNodes();
		}());

		(function () {
			if (connectMenu) return;
			var start = menuxpages.shift();
			var rightPane = start.lastChild;

			var clickMode = function () {
				if (this.mode == 'get') {
					this.update();
				}
				var active = this.parentNode.querySelector('.active');
				if (active === this) {
					return;
				}
				active.classList.remove('active');
				active.link.remove();
				active = this;
				this.classList.add('active');
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
				updateNodes();
			};
			ui.click.extensionTab = function (name) {
				ui.click.menuTab('扩展');
				for (var i = 0; i < start.firstChild.childElementCount; i++) {
					if (start.firstChild.childNodes[i].innerHTML == name) {
						clickMode.call(start.firstChild.childNodes[i]);
						break;
					}
				}
			};
			var updateNodes = function () {
				for (var i = 0; i < start.firstChild.childNodes.length; i++) {
					var node = start.firstChild.childNodes[i];
					if (node.mode == 'get') continue;
					if (node.mode == 'create') continue;
					if (node.mode && node.mode.startsWith('extension_')) {
						if (lib.config[node.mode + '_enable']) {
							node.classList.remove('off');
							if (node.link) node.link.firstChild.classList.add('on');
						}
						else {
							node.classList.add('off');
							if (node.link) node.link.firstChild.classList.remove('on');
						}
					}
					else {
						if (lib.config.plays.includes(node.mode)) {
							node.classList.remove('off');
							if (node.link) node.link.firstChild.classList.add('on');
						}
						else {
							node.classList.add('off');
							if (node.link) node.link.firstChild.classList.remove('on');
						}
					}
				}
			};
			var togglePack = function (bool) {
				var name = this._link.config._name;
				if (name.startsWith('extension_')) {
					if (bool) {
						game.saveConfig(name, true);
					}
					else {
						game.saveConfig(name, false);
					}
				}
				else {
					name = name.slice(0, name.indexOf('_enable_playpackconfig'));
					if (bool) {
						lib.config.plays.add(name);
					}
					else {
						lib.config.plays.remove(name);
					}
					game.saveConfig('plays', lib.config.plays);
				}
				if (this.onswitch) {
					this.onswitch(bool);
				}
				updateNodes();
			};

			var createModeConfig = function (mode, position) {
				var page = ui.create.div('');
				page.style.paddingBottom = '10px';
				var node;
				if (mode.startsWith('extension_')) {
					node = ui.create.div('.menubutton.large', mode.slice(10), position, clickMode);
				}
				else {
					node = ui.create.div('.menubutton.large', lib.translate[mode + '_play_config'], position, clickMode);
				}
				// 更改菜单按钮字体
				if (node.innerHTML.length >= 5) {
					if (node.textContent.replace(/[^\u4e00-\u9fa5]/g, "").length >= 6) {
						node.classList.add('minifont');
					} else node.classList.add('smallfont');
				}
				node.mode = mode;
				// node._initLink=function(){
				node.link = page;
				for (var i in lib.extensionMenu[mode]) {
					if (i == 'game') continue;
					var cfg = copyObj(lib.extensionMenu[mode][i]);
					var j;
					if (mode.startsWith('extension_')) {
						j = mode + '_' + i;
					}
					else {
						j = mode + '_' + i + '_playpackconfig';
					}
					cfg._name = j;
					if (j in lib.config) {
						cfg.init = lib.config[j];
					}
					else {
						game.saveConfig(j, cfg.init);
					}

					if (i == 'enable') {
						cfg.onclick = togglePack;
					}
					else if (!lib.extensionMenu[mode][i].onclick) {
						cfg.onclick = function (result) {
							var cfg = this._link.config;
							game.saveConfig(cfg._name, result);
						};
					}
					var cfgnode = createConfig(cfg);
					if (cfg.onswitch) {
						cfgnode.onswitch = cfg.onswitch;
					}
					page.appendChild(cfgnode);
				}
				// };
				// if(!get.config('menu_loadondemand')) node._initLink();
				return node;
			};
			let extensionsInMenu = Object.keys(lib.extensionMenu);
			if(lib.config.extensionSort && Array.isArray(lib.config.extensionSort)){
				extensionsInMenu.sort((a,b)=>{
					return lib.config.extensionSort.indexOf(a) - lib.config.extensionSort.indexOf(b);
				});
			}
			for (let i of extensionsInMenu) {
				if (lib.config.all.stockextension.includes(i) && !lib.config.all.plays.includes(i)) continue;
				if (lib.config.hiddenPlayPack.includes(i)) continue;
				createModeConfig(i, start.firstChild);
			}
			(function () {
				if (!lib.device && !lib.db) return;
				if (lib.config.show_extensionmaker == false) return;
				var page = ui.create.div('#create-extension');
				var node = ui.create.div('.menubutton.large', '制作扩展', start.firstChild, clickMode);
				node.mode = 'create';
				game.editExtension = function (name) {
					node._initLink();
					game.editExtension(name);
				};
				node._initLink = function () {
					node.link = page;
					var pageboard = ui.create.div(page);
					var inputExtLine = ui.create.div(pageboard);
					inputExtLine.style.transition = 'all 0s';
					inputExtLine.style.padding = '10px';
					inputExtLine.style.height = '22px';
					inputExtLine.style.lineHeight = '22px';
					inputExtLine.style.whiteSpace = 'nowrap';
					inputExtLine.style.overflow = 'visible';
					var inputExtSpan = document.createElement('span');
					inputExtSpan.innerHTML = '扩展名：';
					inputExtLine.appendChild(inputExtSpan);
					var inputExtName = document.createElement('input');
					inputExtName.type = 'text';
					inputExtName.value = '无名扩展';
					inputExtName.style.width = '80px';
					inputExtName.style.textAlign = 'center';
					inputExtLine.appendChild(inputExtName);

					var buttonConfirmOnclick = function () {
						buttonConfirm.style.display = 'none';
						inputExtSpan.style.display = 'none';
						inputExtName.style.display = 'none';
						authorExtLine.style.display = 'none';
						introExtLine.style.display = 'none';
						forumExtLine.style.display = 'none';
						diskExtLine.style.display = 'none';
						versionExtLine.style.display = 'none';
						okExtLine.style.display = 'none';
						inputExtLine.style.padding = '10px';
						buttonRename.style.display = '';
						buttonSave.style.display = '';
						buttonReset.style.display = '';
						buttonExport.style.display = '';
						inputExtSpan.innerHTML = '扩展名称：';
						inputExtName.style.width = '100px';
						inputExtName.style.textAlign = '';

						dashboard.style.display = '';
					};
					var createExtLine = function (str, str2) {
						var infoExtLine = ui.create.div(pageboard);
						infoExtLine.style.display = 'none';
						infoExtLine.style.padding = '0 10px 10px 10px';
						infoExtLine.style.height = '22px';
						infoExtLine.style.lineHeight = '22px';
						infoExtLine.style.whiteSpace = 'nowrap';
						infoExtLine.style.overflow = 'visible';
						if (typeof str == 'boolean') {
							var inputConfirm = document.createElement('button');
							inputConfirm.innerHTML = '确定';
							inputConfirm.onclick = buttonConfirmOnclick;
							infoExtLine.appendChild(inputConfirm);
							return infoExtLine;
						}
						var infoExtSpan = document.createElement('span');
						infoExtSpan.innerHTML = str + '：';
						infoExtLine.appendChild(infoExtSpan);
						var infoExtName = document.createElement('input');
						infoExtName.type = 'text';
						infoExtName.style.width = '100px';
						infoExtName.value = str2 || '';
						infoExtLine.appendChild(infoExtName);
						return infoExtLine;
					};
					var authorExtLine = createExtLine('扩展作者', get.connectNickname());
					var introExtLine = createExtLine('扩展描述');
					var versionExtLine = createExtLine('扩展版本', '1.0');
					var diskExtLine = createExtLine('网盘地址');
					var forumExtLine = createExtLine('讨论地址');
					var okExtLine = createExtLine(true);

					game.editExtension = function (name) {
						page.currentExtension = name || '无名扩展';
						inputExtName.value = page.currentExtension;
						if (name && lib.extensionPack[name]) {
							authorExtLine.querySelector('input').value = lib.extensionPack[name].author || '';
							introExtLine.querySelector('input').value = lib.extensionPack[name].intro || '';
							diskExtLine.querySelector('input').value = lib.extensionPack[name].diskURL || '';
							forumExtLine.querySelector('input').value = lib.extensionPack[name].forumURL || '';
							versionExtLine.querySelector('input').value = lib.extensionPack[name].version || '';
						}
						else {
							authorExtLine.querySelector('input').value = get.connectNickname() || '';
							introExtLine.querySelector('input').value = '';
							diskExtLine.querySelector('input').value = '';
							forumExtLine.querySelector('input').value = '';
							versionExtLine.querySelector('input').value = '1.0';
						}
						if (name) {
							inputExtName.disabled = true;
							buttonConfirm.style.display = 'none';
							inputExtSpan.style.display = 'none';
							inputExtName.style.display = 'none';
							buttonRename.style.display = '';
							buttonSave.style.display = '';
							buttonReset.style.display = '';
							buttonExport.style.display = '';
						}
						else {
							inputExtName.disabled = false;
							buttonConfirm.style.display = '';
							inputExtSpan.innerHTML = '扩展名：';
							inputExtName.style.width = '80px';
							inputExtName.style.textAlign = 'center';
							inputExtSpan.style.display = '';
							inputExtName.style.display = '';
							buttonRename.style.display = 'none';
							buttonSave.style.display = 'none';
							buttonReset.style.display = 'none';
							buttonExport.style.display = 'none';
						}

						dashboard.style.display = '';

						exportExtLine.style.display = 'none';
						shareExtLine.style.display = 'none';
						authorExtLine.style.display = 'none';
						introExtLine.style.display = 'none';
						forumExtLine.style.display = 'none';
						diskExtLine.style.display = 'none';
						versionExtLine.style.display = 'none';
						okExtLine.style.display = 'none';
						inputExtLine.style.padding = '10px';
						dash1.reset(name);
						dash2.reset(name);
						dash3.reset(name);
						dash4.reset(name);
						dash1.link.classList.remove('active');
						dash2.link.classList.remove('active');
						dash3.link.classList.remove('active');
						dash4.link.classList.remove('active');
						var active = node.parentNode.querySelector('.active');
						if (active === node) {
							return;
						}
						active.classList.remove('active');
						active.link.remove();
						node.classList.add('active');
						rightPane.appendChild(node.link);
					};
					var processExtension = function (exportext) {
						if (page.currentExtension) {
							if (page.currentExtension != inputExtName.value && !exportext) {
								game.removeExtension(page.currentExtension);
							}
						}
						inputExtName.disabled = true;
						setTimeout(function () {
							var ext = {};
							var config = null, help = null;
							for (var i in dash4.content) {
								try {
									if (i == 'content' || i == 'precontent') {
										eval('ext[i]=' + dash4.content[i]);
										if (typeof ext[i] != 'function') {
											throw ('err');
										}
										else {
											ext[i] = ext[i].toString();
										}
									}
									else {
										eval(dash4.content[i]);
										eval('ext[i]=' + i);
										if (ext[i] == null || typeof ext[i] != 'object') {
											throw ('err');
										}
										else {
											ext[i] = JSON.stringify(ext[i]);
										}
									}
								}
								catch (e) {
									console.log(e);
									delete ext[i];
								}
							}
							page.currentExtension = inputExtName.value || '无名扩展';
							var str = '{name:"' + page.currentExtension + '"';
							for (var i in ext) {
								str += ',' + i + ':' + ext[i];
							}
							dash2.content.pack.list = [];
							for (var i = 0; i < dash2.pile.childNodes.length; i++) {
								dash2.content.pack.list.push(dash2.pile.childNodes[i].link);
							}
							str += ',package:' + get.stringify({
								//替换die audio，加上扩展名
								character: (pack => {
									var character = pack.character;
									for (var key in character) {
										var info = character[key];
										if (Array.isArray(info[4])) {
											var tag = info[4].find(tag => /^die:.+$/.test(tag));
											if (tag) {
												info[4].remove(tag);
												if (typeof game.readFile == 'function') {
													info[4].push('die:ext:' + page.currentExtension + '/audio/die/' + tag.slice(tag.lastIndexOf('/') + 1));
												} else {
													info[4].push('die:db:extension-' + page.currentExtension + ':audio/die/' + tag.slice(tag.lastIndexOf('/') + 1));
												}
											}
										}
									}
									return pack;
								})(dash1.content.pack),
								card: dash2.content.pack,
								skill: dash3.content.pack,
								intro: introExtLine.querySelector('input').value || '',
								author: authorExtLine.querySelector('input').value || '',
								diskURL: diskExtLine.querySelector('input').value || '',
								forumURL: forumExtLine.querySelector('input').value || '',
								version: versionExtLine.querySelector('input').value || '',
							});
							var files = { character: [], card: [], skill: [], audio: [] };
							for (var i in dash1.content.image) {
								files.character.push(i);
							}
							for (var i in dash1.content.audio) {
								files.audio.push('audio/die/' + i);
							}
							for (var i in dash2.content.image) {
								files.card.push(i);
							}
							for (var i in dash3.content.audio) {
								files.skill.push(i);
							}
							str += ',files:' + JSON.stringify(files);
							str += '}';
							var extension = { 'extension.js': 'game.import("extension",function(lib,game,ui,get,ai,_status){return ' + str + '})' };
							for (var i in dash1.content.image) {
								extension[i] = dash1.content.image[i];
							}
							for (var i in dash1.content.audio) {
								extension['audio/die/' + i] = dash1.content.audio[i];
							}
							for (var i in dash2.content.image) {
								extension[i] = dash2.content.image[i];
							}
							var callback = () => {
								if (exportext) {
									var proexport = function () {
										game.importExtension(extension, null, page.currentExtension, {
											intro: introExtLine.querySelector('input').value || '',
											author: authorExtLine.querySelector('input').value || '',
											netdisk: diskExtLine.querySelector('input').value || '',
											forum: forumExtLine.querySelector('input').value || '',
											version: versionExtLine.querySelector('input').value || '',
										});
									};
									if (game.getFileList) {
										game.getFileList('extension/' + page.currentExtension, function (folders, files) {
											extension._filelist = files;
											proexport();
										});
									}
									else {
										proexport();
									}
								}
								else {
									game.importExtension(extension, function () {
										exportExtLine.style.display = '';
									});
								}
							};
							//兼容网页版情况
							// if (typeof game.readFile == "function") {
								// game.readFile('LICENSE', function (data) {
									// extension['LICENSE'] = data;
									// game.writeFile(data, 'extension/' + page.currentExtension, 'LICENSE', function () { });
									// callback();
								// }, function () {
									// alert('许可证文件丢失，无法导出扩展');
								// });
							// } else {
								callback();
							// }
						}, 500);
					};
					var buttonConfirm = document.createElement('button');
					buttonConfirm.innerHTML = '确定';
					buttonConfirm.style.marginLeft = '5px';
					buttonConfirm.onclick = buttonConfirmOnclick;
					inputExtLine.appendChild(buttonConfirm);
					var buttonRename = document.createElement('button');
					buttonRename.innerHTML = '选项';
					buttonRename.style.marginLeft = '2px';
					buttonRename.style.marginRight = '2px';
					buttonRename.style.display = 'none';
					buttonRename.onclick = function () {
						inputExtSpan.style.display = '';
						inputExtName.style.display = '';
						authorExtLine.style.display = '';
						introExtLine.style.display = '';
						forumExtLine.style.display = '';
						diskExtLine.style.display = '';
						versionExtLine.style.display = '';
						okExtLine.style.display = 'block';
						inputExtLine.style.padding = '20px 10px 10px 10px';
						inputExtName.disabled = false;
						buttonRename.style.display = 'none';
						buttonSave.style.display = 'none';
						buttonReset.style.display = 'none';
						buttonExport.style.display = 'none';
						inputExtSpan.innerHTML = '扩展名称：';
						inputExtName.style.width = '100px';
						inputExtName.style.textAlign = '';

						dashboard.style.display = 'none';
					};
					inputExtLine.appendChild(buttonRename);
					var buttonReset = document.createElement('button');
					buttonReset.innerHTML = '重置';
					buttonReset.style.marginLeft = '2px';
					buttonReset.style.marginRight = '2px';
					buttonReset.style.display = 'none';
					buttonReset.onclick = function () {
						if (confirm('当前扩展将被清除，是否确定？')) {
							game.editExtension();
						}
					};
					inputExtLine.appendChild(buttonReset);
					var buttonSave = document.createElement('button');
					buttonSave.innerHTML = '保存';
					buttonSave.style.marginLeft = '2px';
					buttonSave.style.marginRight = '2px';
					buttonSave.style.display = 'none';
					buttonSave.onclick = function () {
						dash1.link.classList.remove('active');
						dash2.link.classList.remove('active');
						dash3.link.classList.remove('active');
						dash4.link.classList.remove('active');
						processExtension();
					};
					inputExtLine.appendChild(buttonSave);
					var buttonExport = document.createElement('button');
					buttonExport.innerHTML = '导出';
					buttonExport.style.marginLeft = '2px';
					buttonExport.style.marginRight = '2px';
					buttonExport.style.display = 'none';
					buttonExport.onclick = function () {
						function oldExport() {
							processExtension(true);
							if (lib.config.show_extensionshare) {
								shareExtLine.style.display = '';
							}
						}
						if (typeof game.readFile == 'function' &&
							window.noname_shijianInterfaces &&
							typeof window.noname_shijianInterfaces.shareExtensionWithPassWordAsync == 'function' &&
							confirm('是否使用诗笺版自带的导出功能来导出扩展？')) {
							const extName = inputExtName.value;
							if (!extName) {
								alert('未检测到扩展名，将使用无名杀自带的导出功能');
								oldExport();
								return;
							}
							game.readFile(`extension/${extName}/extension.js`, () => {
								const pwd = prompt("请输入压缩包密码，不设密码直接点确定");
								let result;
								if (pwd === '' || pwd === null) {
									window.noname_shijianInterfaces.shareExtensionAsync(extName);
								} else {
									window.noname_shijianInterfaces.shareExtensionWithPassWordAsync(extName, pwd);
								}
							}, () => {
								alert('未检测到扩展文件，将使用无名杀自带的导出功能');
								oldExport();
							});
						} else {
							oldExport();
						}
					};
					inputExtLine.appendChild(buttonExport);
					var exportExtLine = ui.create.div(pageboard);
					exportExtLine.style.display = 'none';
					exportExtLine.style.width = 'calc(100% - 40px)';
					exportExtLine.style.textAlign = 'left';
					exportExtLine.style.marginBottom = '5px';
					if (lib.device == 'ios') {
						exportExtLine.innerHTML = '已保存。退出游戏并重新打开后生效<span class="closenode">×</span>';
						exportExtLine.querySelectorAll('span')[0].onclick = function () {
							exportExtLine.style.display = 'none';
						};
					}
					else {
						exportExtLine.innerHTML = '重启后生效。<span class="hrefnode">立即重启</span><span class="closenode">×</span>';
						exportExtLine.querySelectorAll('span')[0].onclick = game.reload;
						exportExtLine.querySelectorAll('span')[1].onclick = function () {
							exportExtLine.style.display = 'none';
						};
					}


					var shareExtLine = ui.create.div(pageboard);
					shareExtLine.style.display = 'none';
					shareExtLine.style.width = 'calc(100% - 40px)';
					shareExtLine.style.textAlign = 'left';
					shareExtLine.style.marginBottom = '5px';
					shareExtLine.innerHTML = '已导出扩展。<span class="hrefnode">分享扩展</span><span class="closenode">×</span>';
					shareExtLine.querySelectorAll('span')[0].onclick = function () {
						//这个链接404了
						//game.open('https://tieba.baidu.com/p/5439380222');
						//无名杀贴吧首页
						game.open('https://tieba.baidu.com/f?ie=utf-8&kw=%E6%97%A0%E5%90%8D%E6%9D%80');
					};
					shareExtLine.querySelectorAll('span')[1].onclick = function () {
						shareExtLine.style.display = 'none';
					};

					var dashboard = ui.create.div(pageboard);
					var clickDash = function () {
						ui.create.templayer();
						pageboard.hide();
						this.link.show();
						if (this.link.init) {
							this.link.init();
						}
					};
					var createDash = function (str1, str2, node) {
						var dash = ui.create.div('.menubutton.large.dashboard');
						dashboard.appendChild(dash);
						page.appendChild(node);
						dash.link = node;
						node.link = dash;
						dash.listen(clickDash);
						lib.setScroll(node);
						ui.create.div('', str1, dash);
						ui.create.div('', str2, dash);
					};
					var dash1 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						var currentButton = null;
						page.init = function () {
							if (!page.querySelector('.button.character')) {
								toggle.classList.add('on');
								newCharacter.style.display = '';
							}
						};
						var updateButton = function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								editnode.classList.add('disabled');
								return;
							}
							name = name.split('|');
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.character[name] || page.content.pack.character[name]) {
										editnode.classList.add('disabled');
										return;
									}
								}
							}
							else {
								if (lib.character[name] || page.content.pack.character[name]) {
									editnode.classList.add('disabled');
									return;
								}
							}
							if (!fakeme.image) {
								if (!page.content.image[name + '.jpg']) {
									editnode.classList.add('disabled');
									return;
								}
							}
							editnode.classList.remove('disabled');
						};
						var clickButton = async function () {
							if (currentButton == this) {
								resetEditor();
								return;
							}
							resetEditor();
							currentButton = this;
							toggle.classList.add('on');
							newCharacter.style.display = '';
							fakeme.classList.add('inited');
							fakeme.style.backgroundImage = this.style.backgroundImage;
							if (page.content.pack.translate[this.link] != this.link) {
								newCharacter.querySelector('.new_name').value = this.link + '|' + page.content.pack.translate[this.link];
							}
							else {
								newCharacter.querySelector('.new_name').value = this.link;
							}
							var info = page.content.pack.character[this.link];
							newCharacter.querySelector('.new_hp').value = info[2];
							sexes.value = info[0];
							groups.value = info[1];
							if (info[4]) {
								for (var i = 0; i < options.childNodes.length - 1; i++) {
									if (options.childNodes[i].lastChild && info[4].includes(options.childNodes[i].lastChild.name)) {
										options.childNodes[i].lastChild.checked = true;
									}
									else if (options.childNodes[i].lastChild) {
										options.childNodes[i].lastChild.checked = false;
									}
								}
								for (var i = 0; i < info[4].length; i++) {
									if (info[4][i].startsWith('des:')) {
										newCharacter.querySelector('.new_des').value = info[4][i].slice(4);
									}
									if (info[4][i].startsWith('die:')) {
										var dieaudionode = newCharacter.querySelector('.die_audio');
										dieaudionode.file = {
											name: info[4][i].slice(info[4][i].lastIndexOf('/') + 1)
										};
										await new Promise((resolve) => {
											if (typeof game.readFile == 'function') {
												game.readFile(info[4][i].slice(4).replace('ext:', 'extension/'), arraybuffer => {
													dieaudionode.arrayBuffer = arraybuffer;
													resolve();
												}, () => {
													console.warn(`未找到${info[4][i].slice(4).replace('ext:', 'extension/')}阵亡配音`);
													resolve();
												});
											} else {
												game.getDB('image', info[4][i].slice(7)).then(octetStream => {
													dieaudionode.arrayBuffer = octetStream;
													resolve();
												}, () => {
													console.warn(`未找到${info[4][i].slice(4)}阵亡配音`);
													resolve();
												});
											}
										});
									}
								}
							}

							var skills = info[3];
							for (var i = 0; i < skills.length; i++) {
								var node = document.createElement('button');
								node.skill = skills[i];
								node.onclick = deletenode;
								node.innerHTML = lib.translate[skills[i]];
								skillList.firstChild.appendChild(node);
							}

							toggle.innerHTML = '编辑武将 <div>&gt;</div>';
							editnode.innerHTML = '编辑武将';
							editnode.classList.remove('disabled');
							delnode.innerHTML = '删除';
							delnode.button = this;
						};
						var createButton = function (name, image) {
							var button = ui.create.div('.button.character');
							button.link = name;
							button.image = image;
							button.style.backgroundImage = 'url(' + image + ')';
							button.style.backgroundSize = 'cover';
							button.listen(clickButton);
							button.classList.add('noclick');
							button.nodename = ui.create.div(button, '.name', get.verticalStr(page.content.pack.translate[name]));
							button.nodename.style.top = '8px';
							page.insertBefore(button, page.childNodes[1]);
						};
						page.reset = function (name) {
							resetEditor();
							var buttons = page.querySelectorAll('.button.character');
							var list = [];
							for (var i = 0; i < buttons.length; i++) {
								list.push(buttons[i]);
							}
							for (var i = 0; i < list.length; i++) {
								list[i].remove();
							}
							if (lib.extensionPack[name]) {
								page.content.pack = lib.extensionPack[name].character || {
									character: {},
									translate: {}
								};
								page.content.image = {};
								for (var i in page.content.pack.character) {
									var file = i + '.jpg';
									var loadImage = function (file, data) {
										var img = new Image();
										img.crossOrigin = 'Anonymous';
										img.onload = function () {
											var canvas = document.createElement('CANVAS');
											var ctx = canvas.getContext('2d');
											var dataURL;
											canvas.height = this.height;
											canvas.width = this.width;
											ctx.drawImage(this, 0, 0);
											canvas.toBlob(function (blob) {
												var fileReader = new FileReader();
												fileReader.onload = function (e) {
													page.content.image[file] = e.target.result;
												};
												fileReader.readAsArrayBuffer(blob, "UTF-8");
											});
										};
										img.src = data;
									};
									if (game.readFile) {
										var url = lib.assetURL + 'extension/' + name + '/' + file;
										createButton(i, url);
										if (lib.device == 'ios' || lib.device == 'android') {
											window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + 'extension/' + name, function (entry) {
												entry.getFile(file, {}, function (fileEntry) {
													fileEntry.file(function (fileToLoad) {
														var fileReader = new FileReader();
														fileReader.onload = function (e) {
															page.content.image[file] = e.target.result;
														};
														fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
													});
												});
											});
										}
										else {
											loadImage(file, url);
										}
									}
									else game.getDB('image', `extension-${name}:${file}`).then(value => {
										createButton(i, value);
										loadImage(file, value);
									});
								}
							}
							else {
								page.content = {
									pack: {
										character: {},
										translate: {}
									},
									image: {},
									audio: {}
								};
								toggle.classList.add('on');
								newCharacter.style.display = '';
							}
						};
						ui.create.div('.config.more', '<div style="transform:none;margin-right:3px">←</div>返回', page, function () {
							ui.create.templayer();
							page.hide();
							pageboard.show();
						});
						page.content = {
							pack: {
								character: {},
								translate: {}
							},
							image: {},
							audio: {}
						};
						var newCharacter;
						var toggle = ui.create.div('.config.more.on', '创建武将 <div>&gt;</div>', page, function () {
							this.classList.toggle('on');
							if (this.classList.contains('on')) {
								newCharacter.style.display = '';
							}
							else {
								newCharacter.style.display = 'none';
							}
						});
						var resetEditor = function () {
							currentButton = null;
							toggle.classList.remove('on');
							newCharacter.style.display = 'none';
							fakeme.classList.remove('inited');
							delete fakeme.image;
							delete fakeme.image64;
							fakeme.style.backgroundImage = '';
							var inputs = newCharacter.querySelectorAll('input');
							for (var i = 0; i < inputs.length; i++) {
								inputs[i].value = '';
							}
							inputs = newCharacter.querySelectorAll('textarea');
							for (var i = 0; i < inputs.length; i++) {
								inputs[i].value = '';
							}
							skillList.firstChild.innerHTML = '';
							toggle.innerHTML = '创建武将 <div>&gt;</div>';
							editnode.innerHTML = '创建武将';
							editnode.classList.add('disabled');
							delnode.innerHTML = '取消';
							delete delnode.button;
						};

						newCharacter = ui.create.div('.new_character', page);
						var fakeme = ui.create.div('.avatar', newCharacter);

						var input = document.createElement('input');
						input.type = 'file';
						input.accept = 'image/*';
						input.className = 'fileinput';
						input.onchange = function () {
							var fileToLoad = input.files[0];
							if (fileToLoad) {
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									fakeme.style.backgroundImage = 'url(' + data + ')';
									fakeme.image64 = data;
									fakeme.classList.add('inited');
									var fileReader = new FileReader();
									fileReader.onload = function (fileLoadedEvent) {
										fakeme.image = fileLoadedEvent.target.result;
										updateButton();
									};
									fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							}
						};
						fakeme.appendChild(input);

						ui.create.div('.select_avatar', '选择头像', fakeme);

						ui.create.div('.indent', '姓名：<input class="new_name" type="text">', newCharacter).style.paddingTop = '8px';
						ui.create.div('.indent', '介绍：<input class="new_des" type="text">', newCharacter).style.paddingTop = '8px';
						ui.create.div('.indent', '体力：<input class="new_hp" type="text" placeholder="体/限/甲">', newCharacter).style.paddingTop = '8px';
						newCharacter.querySelector('input.new_name').onblur = updateButton;
						var sexes = ui.create.selectlist([
							['male', '男'],
							['female', '女'],
							['double', '双性'],
							['none', '无']
						], null, ui.create.div('.indent', '性别：', newCharacter));
						var grouplist = lib.group.map((group, i) => [lib.group[i], get.translation(lib.group[i])]);
						var groups = ui.create.selectlist(grouplist, null, ui.create.div('.indent', '势力：', newCharacter));
						var dieaudio = ui.create.div('.die_audio', newCharacter, { textAlign: 'left' });
						var dieaudiolabel = ui.create.node('label', '阵亡配音:', dieaudio);
						var dieaudioUpload = dieaudio.appendChild(document.createElement('input'));
						dieaudioUpload.type = 'file';
						dieaudioUpload.accept = 'audio/*';
						dieaudioUpload.style.width = 'calc(100% - 100px)';
						dieaudioUpload.onchange = function () {
							var fileToLoad = dieaudioUpload.files[0];
							if (fileToLoad) {
								console.log(fileToLoad);
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									var blob = new Blob([data]);
									dieaudio.file = fileToLoad;
									dieaudio.arrayBuffer = data;
									dieaudio.blob = blob;
									var new_name = newCharacter.querySelector('input.new_name');
									dieaudioUpload.style.display = 'none';
									dieaudiopreview.style.display =
										dieaudiocancel.style.display = '';
									dieaudiotag.src = window.URL.createObjectURL(blob);
								};
								fileReader.readAsArrayBuffer(fileToLoad);
							}
						};
						var dieaudiotag = ui.create.node('audio', dieaudio);
						var dieaudiopreview = ui.create.node('button', dieaudio, () => {
							if (dieaudiotag.error) {
								alert('您使用的客户端不支持预览此音频！');
							} else dieaudiotag.play();
						});
						dieaudiopreview.innerHTML = '播放';
						dieaudiopreview.style.display = 'none';
						var dieaudiocancel = ui.create.node('button', dieaudio, () => {
							dieaudiopreview.style.display = 'none';
							dieaudiocancel.style.display = 'none';
							if (dieaudio.blob) {
								window.URL.revokeObjectURL(dieaudio.blob);
								dieaudiotag.src = null;
								delete dieaudio.file;
								delete dieaudio.arrayBuffer;
								delete dieaudio.blob;
							}
							dieaudioUpload.value = '';
							dieaudioUpload.style.display = '';
						});
						dieaudiocancel.innerHTML = '取消';
						dieaudiocancel.style.display = 'none';
						var options = ui.create.div('.add_skill.options', '<span>主公<input type="checkbox" name="zhu"></span><span>BOSS<input type="checkbox" name="boss"></span><span>仅点将可用<input type="checkbox" name="forbidai"></span><br><span>隐匿技<input type="checkbox" name="hiddenSkill"></span><br>', newCharacter);
						var addSkill = ui.create.div('.add_skill', '添加技能<br>', newCharacter);
						var list = [];
						for (var i in lib.character) {
							if (lib.character[i][3].length) {
								list.push([i, lib.translate[i]]);
							}
						}
						list.sort(function (a, b) {
							a = a[0]; b = b[0];
							var aa = a, bb = b;
							var firstUnderscoreIndexAA = aa.indexOf('_');
							var firstUnderscoreIndexBB = bb.indexOf('_');
							var secondUnderscoreIndexAA = firstUnderscoreIndexAA != -1 ? aa.indexOf('_', firstUnderscoreIndexAA + 1) : -1;
							var secondUnderscoreIndexBB = firstUnderscoreIndexBB != -1 ? bb.indexOf('_', firstUnderscoreIndexBB + 1) : -1;
							
							if (secondUnderscoreIndexAA != -1) {
								aa = aa.slice(secondUnderscoreIndexAA + 1);
							} else if (firstUnderscoreIndexAA != -1) {
								aa = aa.slice(firstUnderscoreIndexAA + 1);
							}
							
							if (secondUnderscoreIndexBB != -1) {
								bb = bb.slice(secondUnderscoreIndexBB + 1);
							} else if (firstUnderscoreIndexBB != -1) {
								bb = bb.slice(firstUnderscoreIndexBB + 1);
							}
							
							if (aa != bb) {
								return aa > bb ? 1 : -1;
							}
							return a > b ? 1 : -1;
						});
						var list2 = [];
						var skills = lib.character[list[0][0]][3];
						for (var i = 0; i < skills.length; i++) {
							list2.push([skills[i], lib.translate[skills[i]]]);
						}
						list.unshift(['current_extension', '此扩展']);

						var selectname = ui.create.selectlist(list, list[1], addSkill);
						page.selectname = selectname;
						selectname.onchange = function () {
							skillopt.innerHTML = '';
							if (this.value == 'current_extension') {
								for (var i in dash3.content.pack.skill) {
									var option = document.createElement('option');
									option.value = i;
									option.innerHTML = dash3.content.pack.translate[i];
									skillopt.appendChild(option);
								}
							}
							else {
								var skills = lib.character[this.value][3];
								for (var i = 0; i < skills.length; i++) {
									var option = document.createElement('option');
									option.value = skills[i];
									option.innerHTML = lib.translate[skills[i]];
									skillopt.appendChild(option);
								}
							}
						};
						selectname.style.maxWidth = '85px';
						var skillopt = ui.create.selectlist(list2, list2[0], addSkill);
						skillopt.style.maxWidth = '60px';
						page.skillopt = skillopt;
						var addSkillButton = document.createElement('button');
						addSkillButton.innerHTML = '添加';
						addSkill.appendChild(addSkillButton);
						page.addSkillButton = addSkillButton;
						var deletenode = function () {
							this.remove();
						};
						addSkillButton.onclick = function () {
							for (var i = 0; i < skillList.firstChild.childNodes.length; i++) {
								if (skillList.firstChild.childNodes[i].skill == skillopt.value) return alert(selectname.value == 'current_extension' ? '此扩展还未添加技能' : '此武将没有技能可添加');
							}
							//无技能时
							if (!skillopt.value || skillopt.childElementCount == 0) return;
							var node = document.createElement('button');
							node.skill = skillopt.value;
							node.onclick = deletenode;
							for (var i = 0; i < skillopt.childElementCount; i++) {
								if (skillopt.childNodes[i].value == skillopt.value) {
									node.innerHTML = skillopt.childNodes[i].innerHTML; break;
								}
							}
							skillList.firstChild.appendChild(node);
						};
						var createSkillButton = document.createElement('button');
						createSkillButton.innerHTML = '创建';
						createSkillButton.style.marginLeft = '3px';
						addSkill.appendChild(createSkillButton);
						createSkillButton.onclick = function () {
							ui.create.templayer();
							page.hide();
							dash3.show();
							dash3.fromchar = 'add';
							dash3.toggle.classList.add('on');
							dash3.newSkill.style.display = '';
						};
						page.updateSkill = function () {
							for (var i = 0; i < skillList.firstChild.childNodes.length; i++) {
								var node = skillList.firstChild.childNodes[i];
								var skill = skillList.firstChild.childNodes[i].skill;
								if (dash3.content.pack.skill[skill]) {
									node.innerHTML = dash3.content.pack.translate[skill];
								}
								else if (lib.skill[skill]) {
									node.innerHTML = lib.translate[skill];
								}
								else {
									node.remove(); i--;
								}
							}
						};
						var skillList = ui.create.div('.skill_list', newCharacter);
						ui.create.div(skillList);
						var editnode = ui.create.div('.menubutton.large.disabled', '创建武将', ui.create.div(skillList), function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								alert('请填写武将名\n提示：武将名格式为id+|+中文名，其中id必须惟一');
								return;
							}
							name = name.split('|');
							var translate = name[1] || name[0];
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.character[name] || page.content.pack.character[name]) {
										alert('武将名与现有武将重复，请更改\n提示：武将名格式为id+|+中文名，其中id必须惟一');
										return;
									}
									page.content.image[name + '.jpg'] = page.content.image[currentButton.link + '.jpg'];
									delete page.content.image[currentButton.link + '.jpg'];
									delete page.content.pack.character[currentButton.link];
									delete page.content.pack.translate[currentButton.link];
									currentButton.link = name;
								}
							}
							else {
								if (lib.character[name] || page.content.pack.character[name]) {
									alert('武将名与现有武将重复，请更改\n提示：武将名格式为id+|+中文名，其中id必须惟一');
									return;
								}
							}
							if (fakeme.image) {
								page.content.image[name + '.jpg'] = fakeme.image;
							}
							else {
								if (!page.content.image[name + '.jpg']) {
									alert('请选择武将头像');
									return;
								}
							}
							var hp = page.querySelector('input.new_hp').value;
							//体力支持‘Infinity,∞,无限’表示无限
							if (['Infinity', '∞', '无限'].includes(hp)) hp = Infinity;
							else if (hp.indexOf('/') == -1) hp = parseInt(hp) || 1;
							var skills = [];
							for (var i = 0; i < skillList.firstChild.childNodes.length; i++) {
								skills.add(skillList.firstChild.childNodes[i].skill);
							}
							var tags = [];
							for (var i = 0; i < options.childNodes.length - 1; i++) {
								if (options.childNodes[i].lastChild && options.childNodes[i].lastChild.checked) {
									tags.push(options.childNodes[i].lastChild.name);
								}
							}
							if (tags.includes('boss')) {
								tags.add('bossallowed');
							}
							var des = page.querySelector('input.new_des').value;
							if (des) {
								tags.add('des:' + des);
							}
							//阵亡配音
							if (dieaudio.file && dieaudio.arrayBuffer) {
								var audioname = name + dieaudio.file.name.slice(dieaudio.file.name.indexOf('.'));
								tags.add(`die:${typeof game.readFile == 'function' ? 'ext' : 'db'}:audio/die/${audioname}`);
								page.content.audio[audioname] = dieaudio.arrayBuffer;
							}

							page.content.pack.translate[name] = translate;
							page.content.pack.character[name] = [sexes.value, groups.value, hp, skills, tags];
							if (this.innerHTML == '创建武将') {
								createButton(name, fakeme.image64);
							}
							else if (currentButton) {
								if (fakeme.image64) {
									currentButton.image = fakeme.image64;
									currentButton.style.backgroundImage = 'url(' + fakeme.image64 + ')';
								}
								currentButton.nodename.innerHTML = get.verticalStr(translate);
							}
							resetEditor();
							dash1.link.classList.add('active');
						});
						var delnode = ui.create.div('.menubutton.large', '取消', editnode.parentNode, function () {
							if (this.innerHTML == '删除') {
								this.button.remove();
								var name = this.button.link;
								delete dash1.content.pack.character[name];
								delete dash1.content.pack.translate[name];
								delete dash1.content.image[name];
								delete dash1.content.audio[name];
								dash1.link.classList.add('active');
							}
							resetEditor();
						});
						delnode.style.marginLeft = '13px';

						return page;
					}());
					var dash2 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						var currentButton = null;
						page.init = function () {
							if (!page.querySelector('.button.card')) {
								toggle.classList.add('on');
								newCard.style.display = '';
							}
						};
						var updateButton = function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								editnode.classList.add('disabled');
								return;
							}
							name = name.split('|');
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.card[name] || page.content.pack.card[name]) {
										editnode.classList.add('disabled');
										return;
									}
								}
							}
							else {
								if (lib.card[name] || page.content.pack.card[name]) {
									editnode.classList.add('disabled');
									return;
								}
							}
							if (!fakeme.image && !fakeme.classList.contains('inited')) {
								editnode.classList.add('disabled');
								return;
							}
							editnode.classList.remove('disabled');
						};
						var clickButton = function () {
							if (currentButton == this) {
								resetEditor();
								return;
							}
							resetEditor();
							currentButton = this;
							toggle.classList.add('on');
							newCard.style.display = '';
							fakeme.classList.add('inited');
							delete fakeme.image;
							delete fakeme.image64;
							if (this.classList.contains('fullskin')) {
								fakeme.imagenode.style.backgroundImage = this.imagenode.style.backgroundImage;
								fakeme.classList.add('fullskin');
							}
							else {
								fakeme.style.backgroundImage = this.style.backgroundImage;
								fakeme.classList.remove('fullskin');
							}
							if (page.content.pack.translate[this.link] != this.link) {
								newCard.querySelector('.new_name').value = this.link + '|' + page.content.pack.translate[this.link];
							}
							else {
								newCard.querySelector('.new_name').value = this.link;
							}
							newCard.querySelector('.new_description').value = page.content.pack.translate[this.link + '_info'];
							var info = page.content.pack.card[this.link];
							container.code = 'card=' + get.stringify(info);

							toggle.innerHTML = '编辑卡牌 <div>&gt;</div>';
							editnode.innerHTML = '编辑卡牌';
							editnode.classList.remove('disabled');
							delnode.innerHTML = '删除';
							delnode.button = this;
						};
						var createButton = function (name, image, fullskin) {
							var button = ui.create.div('.button.card');
							button.link = name;
							button.image = image;
							button.imagenode = ui.create.div('.image', button);
							if (image) {
								if (fullskin) {
									button.imagenode.style.backgroundImage = 'url(' + image + ')';
									button.style.backgroundImage = '';
									button.style.backgroundSize = '';
									button.classList.add('fullskin');
								}
								else {
									button.style.color = 'white';
									button.style.textShadow = 'black 0 0 2px';
									button.imagenode.style.backgroundImage = '';
									button.style.backgroundImage = 'url(' + image + ')';
									button.style.backgroundSize = 'cover';
								}
							}
							button.listen(clickButton);
							button.classList.add('noclick');
							button.nodename = ui.create.div(button, '.name', get.verticalStr(page.content.pack.translate[name]));
							page.insertBefore(button, page.childNodes[1]);
						};
						page.reset = function (name) {
							resetEditor();
							var buttons = page.querySelectorAll('.button.card');
							var list = [];
							for (var i = 0; i < buttons.length; i++) {
								list.push(buttons[i]);
							}
							for (var i = 0; i < list.length; i++) {
								list[i].remove();
							}
							if (lib.extensionPack[name]) {
								page.content.pack = lib.extensionPack[name].card || {
									card: {},
									translate: {}
								};
								page.content.image = {};
								if (Array.isArray(page.content.pack.list)) {
									for (var i = 0; i < page.content.pack.list.length; i++) {
										var card = page.content.pack.list[i];
										var node = document.createElement('button');
										node.innerHTML = page.content.pack.translate[card[2]] + ' ' + lib.translate[card[0]] + card[1];
										node.name = card[2];
										node.link = card;
										pile.appendChild(node);
										node.onclick = function () {
											this.remove();
										};
									}
								}
								for (var i in page.content.pack.card) {
									var file;
									var fullskin = page.content.pack.card[i].fullskin ? true : false;
									if (fullskin) {
										file = i + '.png';
									}
									else {
										file = i + '.jpg';
									}
									var loadImage = function (file, data) {
										var img = new Image();
										img.crossOrigin = 'Anonymous';
										img.onload = function () {
											var canvas = document.createElement('CANVAS');
											var ctx = canvas.getContext('2d');
											var dataURL;
											canvas.height = this.height;
											canvas.width = this.width;
											ctx.drawImage(this, 0, 0);
											canvas.toBlob(function (blob) {
												var fileReader = new FileReader();
												fileReader.onload = function (e) {
													page.content.image[file] = e.target.result;
												};
												fileReader.readAsArrayBuffer(blob, "UTF-8");
											});
										};
										img.src = data;
									};
									if (game.readFile) {
										var url = lib.assetURL + 'extension/' + name + '/' + file;
										createButton(i, url, fullskin);
										if (lib.device == 'ios' || lib.device == 'android') {
											window.resolveLocalFileSystemURL(localStorage.getItem('noname_inited') + 'extension/' + name, function (entry) {
												entry.getFile(file, {}, function (fileEntry) {
													fileEntry.file(function (fileToLoad) {
														var fileReader = new FileReader();
														fileReader.onload = function (e) {
															page.content.image[file] = e.target.result;
														};
														fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
													});
												});
											});
										}
										else {
											loadImage(file, url);
										}
									}
									else game.getDB('image', `extension-${name}:${file}`).then(value => {
										createButton(i, value, fullskin);
										loadImage(file, value);
									});
								}
							}
							else {
								page.content = {
									pack: {
										card: {},
										translate: {}
									},
									image: {}
								};
								toggle.classList.add('on');
								newCard.style.display = '';
							}
							updatePile();
						};
						ui.create.div('.config.more.margin-bottom', '<div style="transform:none;margin-right:3px">←</div>返回', page, function () {
							ui.create.templayer();
							page.hide();
							pageboard.show();
						});
						page.content = {
							pack: {
								card: {},
								translate: {},
								list: []
							},
							image: {}
						};
						var newCard;
						var toggle = ui.create.div('.config.more.on', '创建卡牌 <div>&gt;</div>', page, function () {
							this.classList.toggle('on');
							if (this.classList.contains('on')) {
								newCard.style.display = '';
							}
							else {
								newCard.style.display = 'none';
							}
						});
						var resetEditor = function () {
							currentButton = null;
							toggle.classList.remove('on');
							newCard.style.display = 'none';
							fakeme.classList.remove('inited');
							fakeme.classList.add('fullskin');
							delete fakeme.image;
							delete fakeme.image64;
							fakeme.style.backgroundImage = '';
							fakeme.imagenode.style.backgroundImage = '';
							var inputs = newCard.querySelectorAll('input');
							for (var i = 0; i < inputs.length; i++) {
								inputs[i].value = '';
							}
							toggle.innerHTML = '创建卡牌 <div>&gt;</div>';
							editnode.innerHTML = '创建卡牌';
							editnode.classList.add('disabled');
							delnode.innerHTML = '取消';
							delete delnode.button;
							container.code = 'card={\n    \n}\n\n/*\n示例：\ncard={\n    type:"basic",\n    enable:true,\n    filterTarget:true,\n    content:function(){\n        target.draw()\n    },\n    ai:{\n        order:1,\n        result:{\n            target:1\n        }\n    }\n}\n此例的效果为目标摸一张牌\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
						};

						newCard = ui.create.div('.new_character', page);
						newCard.style.height = '173px';
						var fakeme = ui.create.div('.card.fullskin', newCard);

						var input = document.createElement('input');
						input.type = 'file';
						input.accept = 'image/*';
						input.className = 'fileinput';
						input.onchange = function () {
							var fileToLoad = input.files[0];
							if (fileToLoad) {
								var fileReader = new FileReader();
								var fullimage = (fileToLoad.name.includes('.jpg'));
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									if (fullimage) {
										fakeme.imagenode.style.backgroundImage = '';
										fakeme.style.backgroundImage = 'url(' + data + ')';
										fakeme.classList.remove('fullskin');
									}
									else {
										fakeme.style.backgroundImage = '';
										fakeme.imagenode.style.backgroundImage = 'url(' + data + ')';
										fakeme.classList.add('fullskin');
									}
									fakeme.image64 = data;
									fakeme.classList.add('inited');
									var fileReader = new FileReader();
									fileReader.onload = function (fileLoadedEvent) {
										fakeme.image = fileLoadedEvent.target.result;
										updateButton();
									};
									fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							}
						};
						fakeme.appendChild(input);

						fakeme.imagenode = ui.create.div('.image', fakeme);
						ui.create.div('.name', '选择背景', fakeme);

						ui.create.div('.indent', '名称：<input class="new_name" type="text">', newCard).style.paddingTop = '8px';
						ui.create.div('.indent', '描述：<input class="new_description" type="text">', newCard).style.paddingTop = '6px';
						newCard.querySelector('input.new_name').onblur = updateButton;
						var codeButton = document.createElement('button');
						newCard.appendChild(codeButton);
						codeButton.innerHTML = '编辑代码';
						codeButton.style.left = '123px';
						codeButton.style.top = '66px';
						codeButton.style.position = 'absolute';

						var citeButton = document.createElement('button');
						newCard.appendChild(citeButton);
						citeButton.innerHTML = '引用代码';
						citeButton.style.left = '123px';
						citeButton.style.top = '90px';
						citeButton.style.position = 'absolute';
						citeButton.onclick = function () {
							codeButton.style.display = 'none';
							citeButton.style.display = 'none';
							selectname.style.display = '';
							confirmcontainer.style.display = '';
						};

						var list = [];
						for (var i in lib.card) {
							if (lib.translate[i]) {
								list.push([i, lib.translate[i]]);
							}
						}
						list.sort(function (a, b) {
							a = a[0]; b = b[0];
							var aa = a, bb = b;
							var firstUnderscoreIndexAA = aa.indexOf('_');
							var firstUnderscoreIndexBB = bb.indexOf('_');
							var secondUnderscoreIndexAA = firstUnderscoreIndexAA != -1 ? aa.indexOf('_', firstUnderscoreIndexAA + 1) : -1;
							var secondUnderscoreIndexBB = firstUnderscoreIndexBB != -1 ? bb.indexOf('_', firstUnderscoreIndexBB + 1) : -1;
							
							if (secondUnderscoreIndexAA != -1) {
								aa = aa.slice(secondUnderscoreIndexAA + 1);
							} else if (firstUnderscoreIndexAA != -1) {
								aa = aa.slice(firstUnderscoreIndexAA + 1);
							}
							
							if (secondUnderscoreIndexBB != -1) {
								bb = bb.slice(secondUnderscoreIndexBB + 1);
							} else if (firstUnderscoreIndexBB != -1) {
								bb = bb.slice(firstUnderscoreIndexBB + 1);
							}
							
							if (aa != bb) {
								return aa > bb ? 1 : -1;
							}
							return a > b ? 1 : -1;
						});
						var selectname = ui.create.selectlist(list, list[0], newCard);
						selectname.style.left = '123px';
						selectname.style.top = '66px';
						selectname.style.position = 'absolute';
						selectname.style.display = 'none';

						var confirmcontainer = ui.create.div(newCard);
						confirmcontainer.style.left = '123px';
						confirmcontainer.style.top = '90px';
						confirmcontainer.style.position = 'absolute';
						confirmcontainer.style.display = 'none';

						var citeconfirm = document.createElement('button');
						citeconfirm.innerHTML = '引用';
						confirmcontainer.appendChild(citeconfirm);
						citeconfirm.onclick = function () {
							codeButton.style.display = '';
							citeButton.style.display = '';
							selectname.style.display = 'none';
							confirmcontainer.style.display = 'none';
							container.code = 'card=' + get.stringify(lib.card[selectname.value]);
							codeButton.onclick.call(codeButton);
							if (lib.translate[selectname.value + '_info']) {
								newCard.querySelector('input.new_description').value = lib.translate[selectname.value + '_info'];
							}
						};

						var citecancel = document.createElement('button');
						citecancel.innerHTML = '取消';
						citecancel.style.marginLeft = '3px';
						confirmcontainer.appendChild(citecancel);
						citecancel.onclick = function () {
							codeButton.style.display = '';
							citeButton.style.display = '';
							selectname.style.display = 'none';
							confirmcontainer.style.display = 'none';
						};

						codeButton.onclick = function () {
							var node = container;
							ui.window.classList.add('shortcutpaused');
							ui.window.classList.add('systempaused');
							window.saveNonameInput = saveInput;
							if (node.aced) {
								ui.window.appendChild(node);
								node.editor.setValue(node.code, 1);
							}
							else if (lib.device == 'ios') {
								ui.window.appendChild(node);
								if (!node.textarea) {
									var textarea = document.createElement('textarea');
									editor.appendChild(textarea);
									node.textarea = textarea;
									lib.setScroll(textarea);
								}
								node.textarea.value = node.code;
							}
							else {
								if (!window.CodeMirror) {
									import('../../game/codemirror.js').then(() => {
										lib.codeMirrorReady(node, editor);
									});
									lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
								}
								else {
									lib.codeMirrorReady(node, editor);
								}
							}
						};

						var container = ui.create.div('.popup-container.editor');
						var saveInput = function () {
							var code;
							if (container.editor) {
								code = container.editor.getValue();
							}
							else if (container.textarea) {
								code = container.textarea.value;
							}
							try {
								var card = null;
								eval(code);
								if (card == null || typeof card != 'object') {
									throw ('err');
								}
							}
							catch (e) {
								if (e == 'err') {
									alert('代码格式有错误，请对比示例代码仔细检查');
								}
								else {
									var tip = lib.getErrorTip(e) || '';
									alert('代码语法有错误，请仔细检查（' + e + '）' + tip);
								}
								window.focus();
								if (container.editor) {
									container.editor.focus();
								}
								else if (container.textarea) {
									container.textarea.focus();
								}
								return;
							}
							dash2.link.classList.add('active');
							ui.window.classList.remove('shortcutpaused');
							ui.window.classList.remove('systempaused');
							container.delete();
							container.code = code;
							delete window.saveNonameInput;
						};
						var editor = ui.create.editor(container, saveInput);
						container.code = 'card={\n    \n}\n\n/*\n示例：\ncard={\n    type:"basic",\n    enable:true,\n    filterTarget:true,\n    content:function(){\n        target.draw()\n    },\n    ai:{\n        order:1,\n        result:{\n            target:1\n        }\n    }\n}\n此例的效果为目标摸一张牌\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';

						var editnode = ui.create.div('.menubutton.large.new_card.disabled', '创建卡牌', newCard, function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								alert('请填写卡牌名\n提示：卡牌名格式为id+|+中文名，其中id必须惟一');
								return;
							}
							name = name.split('|');
							var translate = name[1] || name[0];
							var info = page.querySelector('input.new_description').value;
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.card[name] || page.content.pack.card[name]) {
										alert('卡牌名与现有卡牌重复，请更改\n提示：卡牌名格式为id+|+中文名，其中id必须惟一');
										return;
									}
									var extname;
									if (currentButton.classList.contains('fullskin')) {
										extname = '.png';
									}
									else {
										extname = '.jpg';
									}
									page.content.image[name + extname] = page.content.image[currentButton.link + extname];
									delete page.content.image[currentButton.link + extname];
									delete page.content.pack.card[currentButton.link];
									delete page.content.pack.translate[currentButton.link];
									delete page.content.pack.translate[currentButton.link + '_info'];
									currentButton.link = name;
								}
							}
							else {
								if (lib.card[name] || page.content.pack.card[name]) {
									alert('卡牌名与现有卡牌重复，请更改\n提示：卡牌名格式为id+|+中文名，其中id必须惟一');
									return;
								}
							}
							if (fakeme.image) {
								if (fakeme.classList.contains('fullskin')) {
									page.content.image[name + '.png'] = fakeme.image;
									delete page.content.image[name + '.jpg'];
								}
								else {
									page.content.image[name + '.jpg'] = fakeme.image;
									delete page.content.image[name + '.png'];
								}
							}
							else if (!fakeme.classList.contains('inited')) {
								alert('请选择一个卡牌背景');
								return;
							}
							page.content.pack.translate[name] = translate;
							page.content.pack.translate[name + '_info'] = info;
							try {
								var card = null;
								eval(container.code);
								if (card == null || typeof card != 'object') {
									throw ('err');
								}
								page.content.pack.card[name] = card;
							}
							catch (e) {
								page.content.pack.card[name] = {};
							}
							if (fakeme.classList.contains('inited')) {
								if (fakeme.classList.contains('fullskin')) {
									page.content.pack.card[name].fullskin = true;
									delete page.content.pack.card[name].fullimage;
								}
								else {
									page.content.pack.card[name].fullimage = true;
									delete page.content.pack.card[name].fullskin;
								}
							}
							if (this.innerHTML == '创建卡牌') {
								createButton(name, fakeme.image64, fakeme.classList.contains('fullskin'));
							}
							else if (currentButton) {
								if (fakeme.image64) {
									if (fakeme.classList.contains('fullskin')) {
										currentButton.style.color = '';
										currentButton.style.textShadow = '';
										currentButton.imagenode.style.backgroundImage = 'url(' + fakeme.image64 + ')';
										currentButton.style.backgroundImage = '';
										currentButton.style.backgroundSize = '';
										currentButton.classList.add('fullskin');
									}
									else {
										currentButton.style.color = 'white';
										currentButton.style.textShadow = 'black 0 0 2px';
										currentButton.imagenode.style.backgroundImage = '';
										currentButton.style.backgroundImage = 'url(' + fakeme.image64 + ')';
										currentButton.style.backgroundSize = 'cover';
										currentButton.classList.remove('fullskin');
									}
								}
								currentButton.nodename.innerHTML = get.verticalStr(translate);
							}
							resetEditor();
							updatePile();
							dash2.link.classList.add('active');
						});
						var delnode = ui.create.div('.menubutton.large.new_card_delete', '取消', editnode.parentNode, function () {
							if (this.innerHTML == '删除') {
								this.button.remove();
								var name = this.button.link;
								delete dash2.content.pack.card[name];
								delete dash2.content.pack.translate[name];
								delete dash2.content.pack.translate[name + '_info'];
								delete dash2.content.image[name];
								updatePile();
								dash2.link.classList.add('active');
							}
							resetEditor();
						});

						var editPile;
						var toggle2 = ui.create.div('.config.more', '编辑牌堆 <div>&gt;</div>', page, function () {
							this.classList.toggle('on');
							if (this.classList.contains('on')) {
								editPile.style.display = '';
							}
							else {
								editPile.style.display = 'none';
							}
						});

						editPile = ui.create.div('.edit_pile', page);
						editPile.style.display = 'none';


						var cardpileadd = ui.create.div('.config.toggle.cardpilecfg.cardpilecfgadd', editPile);
						var pile = ui.create.div(editPile);
						page.pile = pile;
						var cardpileaddname = document.createElement('select');
						var updatePile = function () {
							cardpileaddname.innerHTML = '';
							var list = [];
							var list2 = [];
							for (var i in page.content.pack.card) {
								list.push([i, page.content.pack.translate[i]]);
								list2.push(i);
							}
							if (list.length) {
								toggle2.style.display = '';
								if (toggle2.classList.contains('on')) {
									editPile.style.display = '';
								}
								else {
									editPile.style.display = 'none';
								}
								for (var i = 0; i < list.length; i++) {
									var option = document.createElement('option');
									option.value = list[i][0];
									option.innerHTML = list[i][1];
									cardpileaddname.appendChild(option);
								}
								for (var i = 0; i < pile.childNodes.length; i++) {
									if (!list2.includes(pile.childNodes[i].name)) {
										pile.childNodes[i].remove(); i--;
									}
								}
							}
							else {
								toggle2.style.display = 'none';
								editPile.style.display = 'none';
								pile.innerHTML = '';
							}
						};
						updatePile();
						cardpileadd.appendChild(cardpileaddname);
						cardpileaddname.style.width = '75px';
						cardpileaddname.style.marginRight = '2px';
						cardpileaddname.style.marginLeft = '-1px';
						var cardpileaddsuit = ui.create.selectlist([
							['heart', '红桃'],
							['diamond', '方片'],
							['club', '梅花'],
							['spade', '黑桃'],
						], null, cardpileadd);
						cardpileaddsuit.style.width = '53px';
						cardpileaddsuit.style.marginRight = '2px';
						var cardpileaddnumber = ui.create.selectlist([
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
						], null, cardpileadd);
						cardpileaddnumber.style.width = '43px';
						cardpileaddnumber.style.marginRight = '2px';
						var button = document.createElement('button');
						button.innerHTML = '确定';
						button.style.width = '40px';
						button.onclick = function () {
							var card = [
								cardpileaddsuit.value,
								cardpileaddnumber.value,
								cardpileaddname.value,
							];
							var node = document.createElement('button');
							node.innerHTML = page.content.pack.translate[card[2]] + ' ' + lib.translate[card[0]] + card[1];
							node.name = card[2];
							node.link = card;
							pile.appendChild(node);
							node.onclick = function () {
								this.remove();
							};
						};
						cardpileadd.appendChild(button);
						cardpileadd.style.whiteSpace = 'nowrap';
						cardpileadd.style.position = 'relative';
						cardpileadd.style.right = '-4px';

						return page;
					}());
					var dash3 = (function () {
						var page = ui.create.div('.hidden.menu-buttons.new_skill');
						var updateButton = function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								editnode.classList.add('disabled');
								return;
							}
							name = name.split('|');
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.skill[name] || page.content.pack.skill[name]) {
										editnode.classList.add('disabled');
										return;
									}
								}
							}
							else {
								if (lib.skill[name] || page.content.pack.skill[name]) {
									editnode.classList.add('disabled');
									return;
								}
							}
							editnode.classList.remove('disabled');
						};
						page.init = function () {
							if (!page.querySelector('.menubutton:not(.large)')) {
								toggle.classList.add('on');
								newSkill.style.display = '';
							}
						};
						page.reset = function (name) {
							resetEditor();
							var buttons = page.querySelectorAll('.menubutton:not(.large)');
							var list = [];
							for (var i = 0; i < buttons.length; i++) {
								list.push(buttons[i]);
							}
							for (var i = 0; i < list.length; i++) {
								list[i].remove();
							}
							if (lib.extensionPack[name]) {
								page.content.pack = lib.extensionPack[name].skill || {
									skill: {},
									translate: {}
								};
								page.content.audio = {};
								for (var i in page.content.pack.skill) {
									createButton(i);
								}
								dash1.updateSkill();
							}
							else {
								page.content = {
									pack: {
										skill: {},
										translate: {}
									},
									audio: {}
								};
								toggle.classList.add('on');
								newSkill.style.display = '';
							}
						};
						ui.create.div('.config.more.margin-bottom', '<div style="transform:none;margin-right:3px">←</div>返回', page, function () {
							ui.create.templayer();
							page.hide();
							if (page.fromchar) {
								dash1.show();
								delete page.fromchar;
							}
							else {
								pageboard.show();
							}
						});
						var currentButton = null;
						var clickButton = function () {
							if (currentButton == this) {
								resetEditor();
								return;
							}
							resetEditor();
							currentButton = this;
							toggle.classList.add('on');
							newSkill.style.display = '';
							if (page.content.pack.translate[this.link] != this.link) {
								newSkill.querySelector('.new_name').value = this.link + '|' + page.content.pack.translate[this.link];
							}
							else {
								newSkill.querySelector('.new_name').value = this.link;
							}
							newSkill.querySelector('.new_description').value = page.content.pack.translate[this.link + '_info'];
							var info = page.content.pack.skill[this.link];
							container.code = 'skill=' + get.stringify(Object.defineProperty({ ...info }, '_priority', { enumerable: false, writable: true, configurable: true }));
							toggle.innerHTML = '编辑技能 <div>&gt;</div>';
							editnode.innerHTML = '编辑技能';
							editnode.classList.remove('disabled');
							delnode.button = this;
							delnode.innerHTML = '删除';
						};
						var createButton = function (name) {
							var button = ui.create.div('.menubutton');
							button.link = name;
							button.innerHTML = page.content.pack.translate[name];
							button.listen(clickButton);
							page.insertBefore(button, page.childNodes[1]);
						};
						var newSkill;
						var toggle = ui.create.div('.config.more.on', '创建技能 <div>&gt;</div>', page, function () {
							this.classList.toggle('on');
							if (this.classList.contains('on')) {
								newSkill.style.display = '';
							}
							else {
								newSkill.style.display = 'none';
							}
						});
						page.toggle = toggle;
						var resetEditor = function () {
							currentButton = null;
							toggle.classList.remove('on');
							newSkill.style.display = 'none';
							var inputs = newSkill.querySelectorAll('input');
							for (var i = 0; i < inputs.length; i++) {
								inputs[i].value = '';
							}
							var inputs = newSkill.querySelectorAll('textarea');
							for (var i = 0; i < inputs.length; i++) {
								inputs[i].value = '';
							}
							toggle.innerHTML = '创建技能 <div>&gt;</div>';
							editnode.innerHTML = '创建技能';
							editnode.classList.add('disabled');
							delnode.innerHTML = '取消';
							delete delnode.button;
							container.code = 'skill={\n    \n}\n\n/*\n示例：\nskill={\n    trigger:{player:"phaseJieshuBegin"},\n    frequent:true,\n    content:function(){\n        player.draw()\n    }\n}\n此例为闭月代码\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
							if (page.fromchar == 'add') {
								page.fromchar = true;
							}
						};

						newSkill = ui.create.div('.new_character.new_skill', page);
						page.newSkill = newSkill;
						var namenode = ui.create.div('.config', '名称：<input class="new_name" type="text" style="width:120px"></input>', newSkill);
						var descnode = ui.create.div('.config', '描述：<input class="new_description" type="text" style="width:120px"></input>', newSkill);
						namenode.querySelector('input.new_name').onblur = updateButton;
						var commandline = ui.create.div('.config', newSkill);
						var editbutton = document.createElement('button');
						editbutton.innerHTML = '编辑代码';
						commandline.appendChild(editbutton);
						editbutton.onclick = function () {
							var node = container;
							ui.window.classList.add('shortcutpaused');
							ui.window.classList.add('systempaused');
							window.saveNonameInput = saveInput;
							if (node.aced) {
								ui.window.appendChild(node);
								node.editor.setValue(node.code, 1);
							}
							else if (lib.device == 'ios') {
								ui.window.appendChild(node);
								if (!node.textarea) {
									var textarea = document.createElement('textarea');
									editor.appendChild(textarea);
									node.textarea = textarea;
									lib.setScroll(textarea);
								}
								node.textarea.value = node.code;
							}
							else {
								if (!window.CodeMirror) {
									import('../../game/codemirror.js').then(() => {
										lib.codeMirrorReady(node, editor);
									});
									lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
								}
								else {
									lib.codeMirrorReady(node, editor);
								}
							}
						};

						var container = ui.create.div('.popup-container.editor');
						var saveInput = function () {
							var code;
							if (container.editor) {
								code = container.editor.getValue();
							}
							else if (container.textarea) {
								code = container.textarea.value;
							}
							try {
								var skill = null;
								eval(code);
								if (skill == null || typeof skill != 'object') {
									throw ('err');
								}
							}
							catch (e) {
								if (e == 'err') {
									alert('代码格式有错误，请对比示例代码仔细检查');
								}
								else {
									var tip = lib.getErrorTip(e) || '';
									alert('代码语法有错误，请仔细检查（' + e + '）' + tip);
								}
								window.focus();
								if (container.editor) {
									container.editor.focus();
								}
								else if (container.textarea) {
									container.textarea.focus();
								}
								return;
							}
							dash3.link.classList.add('active');
							ui.window.classList.remove('shortcutpaused');
							ui.window.classList.remove('systempaused');
							container.delete();
							container.code = code;
							delete window.saveNonameInput;
						};
						var editor = ui.create.editor(container, saveInput);
						container.code = 'skill={\n    \n}\n\n/*\n示例：\nskill={\n    trigger:{player:"phaseJieshuBegin"},\n    frequent:true,\n    content:function(){\n        player.draw()\n    }\n}\n此例为闭月代码\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';

						var citebutton = document.createElement('button');
						citebutton.innerHTML = '引用代码';
						commandline.appendChild(citebutton);
						citebutton.onclick = function () {
							editbutton.style.display = 'none';
							citebutton.style.display = 'none';
							selectname.style.display = '';
							skillopt.style.display = '';
							addSkillButton.style.display = '';
							cancelSkillButton.style.display = '';
						};

						var list = [];
						for (var i in lib.character) {
							if (lib.character[i][3].length) {
								list.push([i, lib.translate[i]]);
							}
						}
						list.sort(function (a, b) {
							a = a[0]; b = b[0];
							var aa = a, bb = b;
							var firstUnderscoreIndexAA = aa.indexOf('_');
							var firstUnderscoreIndexBB = bb.indexOf('_');
							var secondUnderscoreIndexAA = firstUnderscoreIndexAA != -1 ? aa.indexOf('_', firstUnderscoreIndexAA + 1) : -1;
							var secondUnderscoreIndexBB = firstUnderscoreIndexBB != -1 ? bb.indexOf('_', firstUnderscoreIndexBB + 1) : -1;
							
							if (secondUnderscoreIndexAA != -1) {
								aa = aa.slice(secondUnderscoreIndexAA + 1);
							} else if (firstUnderscoreIndexAA != -1) {
								aa = aa.slice(firstUnderscoreIndexAA + 1);
							}
							
							if (secondUnderscoreIndexBB != -1) {
								bb = bb.slice(secondUnderscoreIndexBB + 1);
							} else if (firstUnderscoreIndexBB != -1) {
								bb = bb.slice(firstUnderscoreIndexBB + 1);
							}
							
							if (aa != bb) {
								return aa > bb ? 1 : -1;
							}
							return a > b ? 1 : -1;
						});
						list.push(['others', '其它']);
						var list2 = [];
						var skills = lib.character[list[0][0]][3];
						for (var i = 0; i < skills.length; i++) {
							list2.push([skills[i], lib.translate[skills[i]]]);
						}
						var selectname = ui.create.selectlist(list, list[0], commandline);
						var list3 = [];
						for (var i in lib.skill) {
							if (i != 'global' && !get.is.empty(lib.skill[i]) && !lib.skilllist.includes(i)) {
								list3.push(i);
							}
						}
						list3.sort(function (a, b) {
							return a > b ? 1 : -1;
						});
						selectname.onchange = function () {
							var skills;
							skillopt.innerHTML = '';
							if (this.value == 'others') {
								skills = list3;
								for (var i = 0; i < skills.length; i++) {
									var option = document.createElement('option');
									option.value = skills[i];
									option.innerHTML = skills[i];
									skillopt.appendChild(option);
								}
							}
							else {
								skills = lib.character[this.value][3];
								for (var i = 0; i < skills.length; i++) {
									var option = document.createElement('option');
									option.value = skills[i];
									option.innerHTML = lib.translate[skills[i]];
									skillopt.appendChild(option);
								}
							}
						};
						selectname.style.display = 'none';
						selectname.style.maxWidth = '80px';
						var skillopt = ui.create.selectlist(list2, list2[0], commandline);
						skillopt.style.display = 'none';
						skillopt.style.maxWidth = '60px';
						var addSkillButton = document.createElement('button');
						addSkillButton.style.display = 'none';
						addSkillButton.innerHTML = '引用';
						commandline.appendChild(addSkillButton);
						addSkillButton.onclick = function () {
							editbutton.style.display = '';
							citebutton.style.display = '';
							selectname.style.display = 'none';
							skillopt.style.display = 'none';
							addSkillButton.style.display = 'none';
							cancelSkillButton.style.display = 'none';
							container.code = 'skill=' + get.stringify(Object.defineProperty({ ...lib.skill[skillopt.value] }, '_priority', { enumerable: false, writable: true, configurable: true }));
							editbutton.onclick.call(editbutton);
							if (lib.translate[skillopt.value + '_info']) {
								newSkill.querySelector('input.new_description').value = lib.translate[skillopt.value + '_info'];
							}
						};
						var cancelSkillButton = document.createElement('button');
						cancelSkillButton.style.display = 'none';
						cancelSkillButton.innerHTML = '取消';
						commandline.appendChild(cancelSkillButton);
						cancelSkillButton.onclick = function () {
							editbutton.style.display = '';
							citebutton.style.display = '';
							selectname.style.display = 'none';
							skillopt.style.display = 'none';
							addSkillButton.style.display = 'none';
							cancelSkillButton.style.display = 'none';
						};

						var editnode = ui.create.div('.menubutton.large.new_skill.disabled', '创建技能', function () {
							var name = page.querySelector('input.new_name').value;
							if (!name) {
								alert('请填写技能名\n提示：技能名格式为id+|+中文名，其中id必须惟一');
								return;
							}
							name = name.split('|');
							var translate = name[1] || name[0];
							var info = page.querySelector('input.new_description').value;
							name = name[0];
							if (currentButton) {
								if (currentButton.link != name) {
									if (lib.skill[name] || page.content.pack.skill[name]) {
										alert('技能名与现有技能重复，请更改\n提示：技能名格式为id+|+中文名，其中id必须惟一');
										return;
									}
									delete page.content.pack.skill[currentButton.link];
									delete page.content.pack.translate[currentButton.link];
									delete page.content.pack.translate[currentButton.link + '_info'];
									currentButton.link = name;
								}
							}
							else {
								if (lib.skill[name] || page.content.pack.skill[name]) {
									alert('技能名与现有技能重复，请更改\n提示：技能名格式为id+|+中文名，其中id必须惟一');
									return;
								}
							}
							page.content.pack.translate[name] = translate;
							page.content.pack.translate[name + '_info'] = info;
							try {
								var skill = null;
								eval(container.code);
								if (skill == null || typeof skill != 'object') {
									throw ('err');
								}
								page.content.pack.skill[name] = skill;
							}
							catch (e) {
								page.content.pack.skill[name] = {};
							}
							dash1.selectname.value = 'current_extension';
							dash1.selectname.onchange.call(dash1.selectname);
							if (this.innerHTML == '创建技能') {
								createButton(name);
								if (page.fromchar == 'add') {
									ui.create.templayer();
									page.hide();
									dash1.show();
									dash1.skillopt.value = name;
									dash1.addSkillButton.onclick();
									delete page.fromchar;
								}
							}
							else if (currentButton) {
								currentButton.innerHTML = translate;
							}
							resetEditor();
							dash3.link.classList.add('active');
							dash1.updateSkill();
						}, newSkill);
						var delnode = ui.create.div('.menubutton.large.new_card_delete', '取消', editnode.parentNode, function () {
							if (this.innerHTML == '删除') {
								this.button.remove();
								var name = this.button.link;
								delete dash3.content.pack.skill[name];
								delete dash3.content.pack.translate[name];
								delete dash3.content.pack.translate[name + '_info'];
								dash3.link.classList.add('active');
								if (get.is.empty(dash3.content.pack.skill)) {
									dash1.selectname.value = dash1.selectname.childNodes[1].value;
								}
								dash1.selectname.onchange.call(dash1.selectname);
								dash1.updateSkill();
								resetEditor();
							}
							else if (page.fromchar == 'add') {
								ui.create.templayer();
								page.hide();
								dash1.show();
								delete page.fromchar;
								setTimeout(resetEditor, 600);
							}
							else {
								resetEditor();
							}
						});

						page.content = {
							pack: {
								skill: {},
								translate: {}
							},
							audio: {}
						};
						return page;
					}());
					var dash4 = (function () {
						var page = ui.create.div('.hidden.menu-buttons');
						ui.create.div('.config.more.margin-bottom', '<div style="transform:none;margin-right:3px">←</div>返回', page, function () {
							ui.create.templayer();
							page.hide();
							pageboard.show();
						});
						page.reset = function (name) {
							page.content = {};
							if (lib.extensionPack[name]) {
								for (var i in dashes) {
									dashes[i].node.code = '';
								}
								for (var i in lib.extensionPack[name].code) {
									switch (typeof lib.extensionPack[name].code[i]) {
										case 'function': page.content[i] = lib.extensionPack[name].code[i].toString(); break;
										case 'object': page.content[i] = i + '=' + get.stringify(lib.extensionPack[name].code[i]); break;
									}
								}
								for (var i in page.content) {
									dashes[i].node.code = page.content[i] || '';
								}
							}
							else {
								dashes.content.node.code = 'function(config,pack){\n    \n}\n\n/*\n函数执行时机为游戏数据加载之后、界面加载之前\n参数1扩展选项（见选项代码）；参数2为扩展定义的武将、卡牌和技能等（可在此函数中修改）\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
								dashes.precontent.node.code = 'function(){\n    \n}\n\n/*\n函数执行时机为游戏数据加载之前，且不受禁用扩展的限制\n除添加模式外请慎用\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
								dashes.config.node.code = 'config={\n    \n}\n\n/*\n示例：\nconfig={\n    switcher_example:{\n    name:"示例列表选项",\n        init:"3",\n        item:{"1":"一","2":"二","3":"三"}\n    },\n    toggle_example:{\n        name:"示例开关选项",\n        init:true\n    }\n}\n此例中传入的主代码函数的默认参数为{switcher_example:"3",toggle_example:true}\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
								dashes.help.node.code = 'help={\n    \n}\n\ns/*\n示例：\nhelp={\n    "帮助条目":"<ul><li>列表1-条目1<li>列表1-条目2</ul><ol><li>列表2-条目1<li>列表2-条目2</ul>"\n}\n帮助内容将显示在菜单－选项－帮助中\n导出时本段代码中的换行、缩进以及注释将被清除\n*/';
							}
						};
						var dashes = {};
						var createCode = function (str1, str2, sub, func, link, str) {
							var dash = ui.create.div('.menubutton.large.dashboard');
							dashes[link] = dash;
							sub.appendChild(dash);
							dash.listen(func);
							dash.link = link;
							ui.create.div('', str1, dash);
							ui.create.div('', str2, dash);
							var container = ui.create.div('.popup-container.editor');
							var saveInput = function () {
								var code;
								if (container.editor) {
									code = container.editor.getValue();
								}
								else if (container.textarea) {
									code = container.textarea.value;
								}
								try {
									if (link == 'content' || link == 'precontent') {
										var func = null;
										eval('func=' + code);
										if (typeof func != 'function') {
											throw ('err');
										}
									}
									else if (link == 'config') {
										var config = null;
										eval(code);
										if (config == null || typeof config != 'object') {
											throw ('err');
										}
									}
									else if (link == 'help') {
										var help = null;
										eval(code);
										if (help == null || typeof help != 'object') {
											throw ('err');
										}
									}
								}
								catch (e) {
									if (e == 'err') {
										alert('代码格式有错误，请对比示例代码仔细检查');
									}
									else {
										var tip = lib.getErrorTip(e) || '';
										alert('代码语法有错误，请仔细检查（' + e + '）' + tip);
									}
									window.focus();
									if (container.editor) {
										container.editor.focus();
									}
									else if (container.textarea) {
										container.textarea.focus();
									}
									return;
								}
								dash4.link.classList.add('active');
								ui.window.classList.remove('shortcutpaused');
								ui.window.classList.remove('systempaused');
								container.delete();
								container.code = code;
								page.content[link] = code;
								delete window.saveNonameInput;
							};
							var editor = ui.create.editor(container, saveInput);
							container.code = str;
							dash.editor = editor;
							dash.node = container;
							dash.saveInput = saveInput;
							page.content[link] = str;
						};
						var clickCode = function () {
							var node = this.node;
							ui.window.classList.add('shortcutpaused');
							ui.window.classList.add('systempaused');
							window.saveNonameInput = this.saveInput;
							if (node.aced) {
								ui.window.appendChild(node);
								node.editor.setValue(node.code, 1);
							}
							else if (lib.device == 'ios') {
								ui.window.appendChild(node);
								if (!node.textarea) {
									var textarea = document.createElement('textarea');
									this.editor.appendChild(textarea);
									node.textarea = textarea;
									lib.setScroll(textarea);
								}
								node.textarea.value = node.code;
							}
							else {
								if (!window.CodeMirror) {
									import('../../game/codemirror.js').then(() => {
										lib.codeMirrorReady(node, this.editor);
									});
									lib.init.css(lib.assetURL + 'layout/default', 'codemirror');
								}
								else {
									lib.codeMirrorReady(node, this.editor);
								}
							}
						};
						page.content = {};
						createCode('主', '主代码', page, clickCode, 'content', 'function(config,pack){\n    \n}\n\n/*\n函数执行时机为游戏数据加载之后、界面加载之前\n参数1扩展选项（见选项代码）；参数2为扩展定义的武将、卡牌和技能等（可在此函数中修改）\n导出时本段代码中的换行、缩进以及注释将被清除\n*/');
						createCode('启', '启动代码', page, clickCode, 'precontent', 'function(){\n    \n}\n\n/*\n函数执行时机为游戏数据加载之前，且不受禁用扩展的限制\n除添加模式外请慎用\n导出时本段代码中的换行、缩进以及注释将被清除\n*/');
						createCode('选', '选项代码', page, clickCode, 'config', 'config={\n    \n}\n\n/*\n示例：\nconfig={\n    switcher_example:{\n        name:"示例列表选项",\n        init:"3",\n     	  item:{"1":"一","2":"二","3":"三"}\n    },\n    toggle_example:{\n        name:"示例开关选项",\n        init:true\n    }\n}\n此例中传入的主代码函数的默认参数为{switcher_example:"3",toggle_example:true}\n导出时本段代码中的换行、缩进以及注释将被清除\n*/');
						createCode('帮', '帮助代码', page, clickCode, 'help', 'help={\n    \n}\n\n/*\n示例：\nhelp={\n    "帮助条目":"<ul><li>列表1-条目1<li>列表1-条目2</ul><ol><li>列表2-条目1<li>列表2-条目2</ul>"\n}\n帮助内容将显示在菜单－选项－帮助中\n导出时本段代码中的换行、缩进以及注释将被清除\n*/');

						return page;
					}());
					createDash('将', '编辑武将', dash1);
					createDash('卡', '编辑卡牌', dash2);
					createDash('技', '编辑技能', dash3);
					createDash('码', '编辑代码', dash4);
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());
			(function () {
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '获取扩展', start.firstChild, clickMode);
				node.mode = 'get';
				var _thisUpdate = false;
				node.update = function () {
					_thisUpdate = true;
				};
				node._initLink = function () {
					node.link = page;
					page.listen(function () {
						if (!page.currenttimeout) {
							var active = page.querySelector('.videonode.current');
							if (active) {
								active.classList.remove('current');
							}
						}
					});
					var importextensionexpanded = false;
					page.style.paddingBottom = '10px';
					var importExtension;
					var extensionNode = ui.create.div('.config.more', '导入扩展 <div>&gt;</div>', page, function () {
						if (importextensionexpanded) {
							this.classList.remove('on');
							importExtension.style.display = 'none';
						}
						else {
							this.classList.add('on');
							importExtension.style.display = '';
						}
						importextensionexpanded = !importextensionexpanded;
					});
					importExtension = ui.create.div('.new_character.export.import', page);
					importExtension.style.marginLeft = '5px';
					importExtension.style.marginTop = '5px';
					importExtension.style.marginBottom = '5px';
					importExtension.style.display = 'none';
					importExtension.style.width = '100%';
					importExtension.style.textAlign = 'left';
					ui.create.div('', '<input type="file" accept="application/zip" style="width:153px"><button>确定</button>', importExtension);
					ui.create.div('.config', '修改下载地址', page, function () {
						alert('您可以在“设置→通用→获取扩展地址”中，修改下载扩展时所采用的地址。');
					});

					var extensionURL;
					var source = lib.config.extension_sources, index = lib.config.extension_source;
					if (source && source[index]) extensionURL = source[index];
					else extensionURL = lib.updateURL.replace(/noname/g, 'noname-extension') + '/master/';

					var reloadnode = ui.create.div('.config.toggle.pointerdiv', '重新启动', page, game.reload);
					reloadnode.style.display = 'none';
					var placeholder = ui.create.div('.config.toggle', page);
					placeholder.style.height = 0;
					placeholder.style.marginTop = '5px';

					importExtension.firstChild.lastChild.onclick = function () {
						const fileToLoad = this.previousSibling.files[0];
						if (!fileToLoad) return;
						new Promise((resolve, reject) => {
							const fileReader = new FileReader();
							fileReader.onerror = reject;
							fileReader.onload = resolve;
							fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
						}).then(async (progressEvent) => {
							if (await game.importExtension(progressEvent.target.result, () => {
								extensionNode.innerHTML = '导入成功，3秒后将重启';
								new Promise(resolve => setTimeout(resolve, 1)).then(() => {
									extensionNode.innerHTML = '导入成功，2秒后将重启';
									return new Promise(resolve => setTimeout(resolve, 1));
								}).then(() => {
									extensionNode.innerHTML = '导入成功，1秒后将重启';
									return new Promise(resolve => setTimeout(resolve, 1));
								}).then(game.reload);
							}) !== false) importExtension.style.display = 'none';
						});
					};

					var clickExtension = function () {
						var active = this.parentNode.querySelector('.videonode.current');
						if (active && active != this) {
							active.classList.remove('current');
						}
						this.classList.add('current');
						clearTimeout(page.currenttimeout);
						page.currenttimeout = setTimeout(function () {
							delete page.currenttimeout;
						}, 200);
					};
					var downloadExtension = function (e) {
						if ((this.innerHTML != '下载扩展' && this.innerHTML != '更新扩展') || !window.JSZip) return;
						this.classList.remove('update');
						if (e) {
							e.stopPropagation();
						}
						node.updated = true;
						var that = this;
						var list = [];
						var size = parseFloat(this.info.size) || 0;
						if (size) {
							if (this.info.size.includes('MB')) {
								size *= 1024 * 1024;
							}
							else if (this.info.size.includes('KB')) {
								size *= 1024;
							}
						}

						this.innerHTML = '<span>正在下载</span><div>正在下载</div>';
						this.classList.add('nopointer');
						this.classList.add('button-downloading');
						var progress = ui.create.div('.button-progress', this);
						ui.create.div(progress);
						var url = extensionURL + this.info.name + '.zip';
						var onprogress = function (byte, total) {
							if (total) {
								size = total;
							}
							if (byte == -1) {
								byte = size;
							}
							progress.firstChild.style.width = Math.round(100 * byte / size) + '%';
						};
						var files = this.info.files || [];
						for (var i = 0; i < files.length; i++) {
							files[i] = 'extension/' + that.info.name + '/' + files[i];
						}
						game.checkFileList(files, function () {
							files.unshift('extension/' + that.info.name + '/extension.js');
							for (var i = 0; i < files.length; i++) {
								files[i] = extensionURL + that.info.name + '/' + files[i].slice(10 + that.info.name.length + 1);
							}
							var n1 = 0, n2 = files.length;
							game.multiDownload(files, function () {
								n1++;
								onprogress(n1, n2);
							}, function (e) {
								game.print('下载失败：' + e.source);
							}, function () {
								onprogress(-1);
								_status.importingExtension = true;
								window.game = game;
								lib.init.js(lib.assetURL + 'extension/' + that.info.name, 'extension', function () {
									if (!lib.config.dev) delete window.game;
									if (game.importedPack) {
										var extname = game.importedPack.name;
										if (lib.config.extensions.includes(extname)) {
											game.removeExtension(extname, true);
										}
										lib.config.extensions.add(extname);
										game.saveConfig('extensions', lib.config.extensions);
										game.saveConfig('extension_' + extname + '_enable', true);
										game.saveConfig('extension_' + extname + '_version', that.info.version);
										for (var i in game.importedPack.config) {
											if (game.importedPack.config[i] && 'init' in game.importedPack.config[i]) {
												game.saveConfig('extension_' + extname + '_' + i, game.importedPack.config[i].init);
											}
										}
										reloadnode.style.display = '';
										that.childNodes[0].innerHTML = '安装成功';
										that.childNodes[1].innerHTML = '安装成功';
										that.classList.remove('active');
										that.classList.remove('highlight');
										delete game.importedPack;
									}
									else {
										that.innerHTML = '安装失败';
										that.classList.add('nopointer');
									}
									_status.importingExtension = false;
								}, function () {
									that.innerHTML = '下载失败';
									that.classList.add('nopointer');
									_status.importingExtension = false;
								});
							}, function (current) {
								return 'extension/' + current.slice(extensionURL.length);
							});
						});
					};

					node.update = function () {
						if (this.updated) return;
						if (!window.JSZip) {
							lib.init.js(lib.assetURL + 'game', 'jszip');
						}
						var toremove = [];
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].classList.contains('menubutton') || page.childNodes[i].classList.contains('loading')) {
								toremove.push(page.childNodes[i]);
							}
						}
						for (var i = 0; i < toremove.length; i++) {
							toremove[i].remove();
						}

						var loading = ui.create.div('.loading.config.toggle', '载入中...', page);
						var loaded = function () {
							var list = [];
							var extension = window.extension;
							for (var i in extension) {
								extension[i].name = i;
								list.push(extension[i]);
							}
							list.randomSort();
							delete window.extension;
							loading.style.display = 'none';
							for (var i = 0; i < list.length; i++) {
								var node = ui.create.div('.videonode.menubutton.extension.large', page, clickExtension);
								ui.create.div('.caption', list[i].name, node);
								ui.create.div('.text.author', '作者：' + list[i].author + '<span>(' + list[i].size + ')</span>', node);
								ui.create.div('.text', '更新日期：' + list[i].date, node);
								ui.create.div('.text', list[i].intro, node);
								var download = ui.create.div('.menubutton.text.active', '下载扩展', node.firstChild, { 'zIndex': '5' });
								if (game.download) {
									if (list[i].netdisk) {
										var linknode = ui.create.div('.text', node);
										ui.create.node('span.hrefnode', '网盘链接', function () {
											game.open(this.link);
										}, linknode).link = list[i].netdisk;
										if (list[i].forum) {
											ui.create.node('span', linknode).style.marginRight = '10px';
											ui.create.node('span.hrefnode', '参与讨论', function () {
												game.open(this.link);
											}, linknode).link = list[i].forum;
										}
									}
									else if (list[i].forum) {
										var linknode = ui.create.div('.text', node);
										ui.create.node('span.hrefnode', '参与讨论', function () {
											game.open(this.link);
										}, linknode).link = list[i].forum;
									}
									download.listen(downloadExtension);
									if (lib.config.extensions.includes(list[i].name)) {
										download.classList.remove('active');
										if (lib.extensionPack[list[i].name] && lib.extensionPack[list[i].name].version == list[i].version) {
											download.classList.add('transparent2');
											download.classList.remove('active');
											download.innerHTML = '已安装';
										}
										else if (lib.config['extension_' + list[i].name + '_version'] != list[i].version) {
											download.innerHTML = '更新扩展';
											download.classList.add('highlight');
											download.classList.add('update');
										}
										else {
											download.classList.add('transparent2');
											download.classList.remove('active');
											download.innerHTML = '已安装';
										}
									}
									download.info = list[i];
								}
								else {
									if (list[i].forum) {
										var linknode = ui.create.div('.text', node);
										ui.create.node('span', linknode);
										ui.create.node('span.hrefnode', '参与讨论', function () {
											game.open(this.link);
										}, linknode).link = list[i].forum;
									}
									download.listen(function () {
										game.open(this.link);
									});
									download.link = list[i].netdisk;
								}
							}
						};
						window.extension = {};
						fetch(`${extensionURL}catalog.js`, {
							referrerPolicy: 'no-referrer'
						}).then(response => response.text()).then(eval).then(loaded).catch(reason => {
							console.log(reason);
							delete window.extension;
							loading.innerHTML = '连接失败:' + (reason instanceof Error ? reason.message : String(reason));
						});
					};
					if (_thisUpdate) node.update();
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());
			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				active.classList.add('active');
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);
			updateNodes();
		}());

		(function () {
			if (connectMenu) return;
			var start = menuxpages.shift();
			var rightPane = start.lastChild;
			var cheatButton = ui.create.div('.menubutton.round.highlight', '作', start);
			cheatButton.style.display = 'none';
			var runButton = ui.create.div('.menubutton.round.highlight', '执', start);
			runButton.style.display = 'none';
			var clearButton = ui.create.div('.menubutton.round.highlight', '清', start);
			clearButton.style.display = 'none';
			clearButton.style.left = '275px';
			var playButton = ui.create.div('.menubutton.round.highlight.hidden', '播', start);
			playButton.style.display = 'none';
			playButton.style.left = '215px';
			playButton.style.transition = 'opacity 0.3s';
			var deleteButton = ui.create.div('.menubutton.round.highlight.hidden', '删', start);
			deleteButton.style.display = 'none';
			deleteButton.style.left = '275px';
			deleteButton.style.transition = 'opacity 0.3s';
			var saveButton = ui.create.div('.menubutton.round.highlight.hidden', '存', start);
			saveButton.style.display = 'none';
			saveButton.style.transition = 'opacity 0.3s';


			var clickMode = function () {
				if (this.classList.contains('off')) return;
				var active = this.parentNode.querySelector('.active');
				if (active === this) {
					return;
				}
				if (active) {
					active.classList.remove('active');
					active.link.remove();
				}
				active = this;
				this.classList.add('active');
				if (this.link) rightPane.appendChild(this.link);
				else {
					this._initLink();
					rightPane.appendChild(this.link);
				}
				if (this.type == 'cheat') {
					cheatButton.style.display = '';
				}
				else {
					cheatButton.style.display = 'none';
				}
				if (this.type == 'cmd') {
					runButton.style.display = '';
					clearButton.style.display = '';
				}
				else {
					runButton.style.display = 'none';
					clearButton.style.display = 'none';
				}
				if (this.type == 'video') {
					playButton.style.display = '';
					saveButton.style.display = '';
					deleteButton.style.display = '';
				}
				else {
					playButton.style.display = 'none';
					saveButton.style.display = 'none';
					deleteButton.style.display = 'none';
				}
			};

			ui.click.consoleMenu = function () {
				ui.click.menuTab('其它');
				clickMode.call(ui.commandnode);
			};
			//更新菜单有本体函数赋值，就不要懒加载了
			(function () {
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '更新', start.firstChild, clickMode);
				node.link = page;
				page.classList.add('menu-help');
				var ul = document.createElement('ul');
				var li1 = document.createElement('li');
				var li2 = document.createElement('li');
				var li3 = document.createElement('li');
				const trimURL = url => {
					const updateURLS = lib.updateURLS;
					for (const key in updateURLS) {
						const updateURL = updateURLS[key];
						if (url == updateURL) return lib.configMenu.general.config.update_link.item[key];
					}
					let index = url.indexOf('://');
					if (index != -1) url = url.slice(index + 3);
					index = url.indexOf('/');
					if (index != -1) url = url.slice(0, index);
					if (url.length > 15) {
						const list = url.split('.');
						if (list.length > 1) list.shift();
						url = list.join('.');
					}
					if (url.length > 15) {
						const list = url.split('.');
						if (list.length > 1) list.pop();
						url = list.join('.');
					}
					return url;
				};
				li1.innerHTML = '游戏版本：' + lib.version + '<p style="margin-top:8px;white-space:nowrap"></p>';
				li2.innerHTML = '素材版本：' + (lib.config.asset_version || '无') + '<p style="margin-top:8px"></p>';
				li3.innerHTML = '更新地址：<span>' + trimURL(lib.config.updateURL || lib.updateURL) + '</span><p style="margin-top:8px"></p>';
				li3.style.whiteSpace = 'nowrap';
				li3.style.display = 'none';// coding

				var button1, button2, button3, button4, button5;

				game.checkForUpdate = function (forcecheck, dev) {
					if (!dev && button1.disabled) {
						return;
					}
					else if (dev && button3.disabled) {
						return;
					}
					else if (!game.download) {
						alert('此版本不支持游戏内更新，请手动更新');
						return;
					}
					else {
						if (dev) {
							button3.innerHTML = '正在检查更新';
						}
						else {
							button1.innerHTML = '正在检查更新';
						}
						button3.disabled = true;
						button1.disabled = true;

						var goupdate = function (files, update) {
							lib.version = update.version;
							if (update.dev && !lib.config.debug) {
								dev = 'nodev';
							}
							lib.init.req('game/source.js', function () {
								try {
									eval(this.responseText);
									if (!window.noname_source_list) {
										throw ('err');
									}
								}
								catch (e) {
									alert('更新地址有误');
									console.log(e);
									return;
								}

								var updates = window.noname_source_list;
								delete window.noname_source_list;
								if (Array.isArray(files)) {
									files.add('game/update.js');
									var files2 = [];
									for (var i = 0; i < files.length; i++) {
										var str = files[i].indexOf('*');
										if (str != -1) {
											str = files[i].slice(0, str);
											files.splice(i--, 1);
											for (var j = 0; j < updates.length; j++) {
												if (updates[j].startsWith(str)) {
													files2.push(updates[j]);
												}
											}
										}
									}
									updates = files.concat(files2);
								}
								for (var i = 0; i < updates.length; i++) {
									if (updates[i].startsWith('theme/') && !updates[i].includes('.css')) {
										updates.splice(i--, 1);
									}
									else if (updates[i].startsWith('node_modules/') && !update.node) {
										updates.splice(i--, 1);
									}
								}

								if (!ui.arena.classList.contains('menupaused')) {
									ui.click.configMenu();
									ui.click.menuTab('其它');
								}
								var p = button1.parentNode;
								button1.remove();
								button3.remove();
								var span = document.createElement('span');
								var n1 = 0;
								var n2 = updates.length;
								span.innerHTML = '正在下载文件（' + n1 + '/' + n2 + '）';
								p.appendChild(span);
								var finish = function () {
									span.innerHTML = '游戏更新完毕（' + n1 + '/' + n2 + '）';
									p.appendChild(document.createElement('br'));
									var button = document.createElement('button');
									button.innerHTML = '重新启动';
									button.onclick = game.reload;
									button.style.marginTop = '8px';
									p.appendChild(button);
								};
								game.multiDownload(updates, function () {
									n1++;
									span.innerHTML = '正在下载文件（' + n1 + '/' + n2 + '）';
								}, function (e) {
									game.print('下载失败：' + e.source);
								}, function () {
									setTimeout(finish, 500);
								}, null, dev);
							}, function () {
								alert('更新地址有误');
							}, true);
						};

						lib.init.req('game/update.js', function () {
							try {
								eval(this.responseText);
								if (!window.noname_update) {
									throw ('err');
								}
							}
							catch (e) {
								alert('更新地址有误');
								console.log(e);
								return;
							}

							var update = window.noname_update;
							delete window.noname_update;
							if (forcecheck === false) {
								if (update.version == lib.config.check_version) {
									return;
								}
							}
							game.saveConfig('check_version', update.version);
							var goon = true;
							if (!dev) {
								if (update.version.includes('beta') || update.version == lib.version) {
									goon = false;
								}
							}
							if (goon) {
								var files = null;
								var version = lib.version;
								if (Array.isArray(update.dev) && dev) {
									files = update.dev;
								}
								else if (Array.isArray(update.files) && update.update && !dev) {
									var version1 = version.split('.');
									var version2 = update.update.split('.');
									for (var i = 0; i < version1.length && i < version2.length; i++) {
										if (version2[i] > version1[i]) {
											files = false; break;
										}
										else if (version1[i] > version2[i]) {
											files = update.files.slice(0); break;
										}
									}
									if (files === null) {
										if (version1.length >= version2.length) {
											files = update.files.slice(0);
										}
									}
								}
								var str;
								if (dev) {
									str = '开发版仅供测试使用，可能存在风险，是否确定更新？';
								}
								else {
									str = '有新版本' + update.version + '可用，是否下载？';
								}
								if (navigator.notification && navigator.notification.confirm) {
									var str2;
									if (dev) {
										str2 = str;
										str = '更新到开发版';
									}
									else {
										str2 = update.changeLog[0];
										for (var i = 1; i < update.changeLog.length; i++) {
											if (update.changeLog[i].indexOf('://') == -1) {
												str2 += '；' + update.changeLog[i];
											}
										}
									}
									navigator.notification.confirm(
										str2,
										function (index) {
											if (index == 1) {
												goupdate(files, update);
											}
											else {
												button1.disabled = false;
												button1.innerHTML = '检查游戏更新';
												button3.disabled = false;
												button3.innerHTML = '更新到开发版';
											}
										},
										str,
										['确定', '取消']
									);
								}
								else {
									if (confirm(str)) {
										goupdate(files, update);
									}
									else {
										button1.disabled = false;
										button1.innerHTML = '检查游戏更新';
										button3.disabled = false;
										button3.innerHTML = '更新到开发版';
									}
								}
							}
							else {
								alert('当前版本已是最新');
								button1.disabled = false;
								button1.innerHTML = '检查游戏更新';
								button3.disabled = false;
								button3.innerHTML = '更新到开发版';
							}
						}, function () {
							if (forcecheck === false) {
								return;
							}
							alert('连接失败');
							button1.disabled = false;
							button1.innerHTML = '检查游戏更新';
							button3.disabled = false;
							button3.innerHTML = '更新到开发版';
						}, true);
					}
				};
				game.checkForAssetUpdate = function (type) {
					if (button2.disabled) {
						return;
					}
					else if (game.download) {
						button2.innerHTML = '正在检查更新';
						button2.disabled = true;
						lib.init.req('game/asset.js', function () {
							try {
								eval(this.responseText);
								if (!window.noname_asset_list || !window.noname_skin_list) {
									throw ('err');
								}
							}
							catch (e) {
								alert('更新地址有误');
								console.log(e);
								return;
							}

							var updates = window.noname_asset_list;
							delete window.noname_asset_list;
							var skins = window.noname_skin_list;
							delete window.noname_skin_list;
							var asset_version = updates.shift();

							var skipcharacter = [], skipcard = ['tiesuo_mark', 'shield'];
							if (!lib.config.asset_full) {
								for (var i = 0; i < lib.config.all.sgscharacters.length; i++) {
									var pack = lib.characterPack[lib.config.all.sgscharacters[i]];
									for (var j in pack) {
										skipcharacter.add(j);
									}
								}
								for (var i = 0; i < lib.config.all.sgscards.length; i++) {
									var pack = lib.cardPack[lib.config.all.sgscards[i]];
									if (pack) {
										skipcard = skipcard.concat(pack);
									}
								}
							}
							for (var i = 0; i < updates.length; i++) {
								switch (updates[i].slice(0, 5)) {
									case 'image': {
										if (!lib.config.asset_full) {
											if (!lib.config.asset_image) {
												updates.splice(i--, 1);
											}
											else {
												if (updates[i].startsWith('image/character')) {
													if (updates[i].indexOf('jun_') != 16 && updates[i].indexOf('gz_') != 16 && !skipcharacter.includes(updates[i].slice(16, updates[i].lastIndexOf('.')))) {
														updates.splice(i--, 1);
													}
												}
												else if (updates[i].startsWith('image/card')) {
													let cardname = updates[i].slice(11, updates[i].lastIndexOf('.'));
													if (lib.card[cardname] && !skipcard.includes(cardname)) {
														updates.splice(i--, 1);
													}
												}
												else if (updates[i].startsWith('image/mode/stone')) {
													updates.splice(i--, 1);
												}
											}
										}
										break;
									}
									case 'audio': {
										if (!lib.config.asset_audio) {
											updates.splice(i--, 1);
										}
										break;
									}
									case 'font/': {
										if (!lib.config.asset_font) {
											updates.splice(i--, 1);
										}
									}
								}
							}
							if (lib.config.asset_skin) {
								for (var i in skins) {
									for (var j = 1; j <= skins[i]; j++) {
										updates.push('image/skin/' + i + '/' + j + '.jpg');
									}
								}
							}
							if (!ui.arena.classList.contains('menupaused')) {
								ui.click.configMenu();
								ui.click.menuTab('其它');
							}

							var proceed = function () {
								if (updates.length == 0) {
									game.print(updates);
									game.saveConfig('asset_version', asset_version);
									alert('素材已是最新');
									button2.disabled = false;
									button2.innerHTML = '检查素材更新';
									return;
								}
								var p = button2.parentNode;
								button2.remove();
								var span = document.createElement('span');
								span.style.whiteSpace = 'nowrap';
								var n1 = 0;
								var n2 = updates.length;
								span.innerHTML = '正在下载素材（' + n1 + '/' + n2 + '）';
								span1.remove();
								span2.remove();
								span2_check.remove();
								span3.remove();
								span3_check.remove();
								span4.remove();
								span4_check.remove();
								span5.remove();
								span5_check.remove();
								span6.remove();
								span6_check.remove();
								span2_br.remove();
								span3_br.remove();
								span4_br.remove();
								span5_br.remove();
								span6_br.remove();
								p.appendChild(span);

								var br6 = ui.create.node('br');
								var span7 = ui.create.div('.hrefnode', '详细信息');
								span7.style.marginTop = '6px';
								span7.listen(ui.click.consoleMenu);
								p.appendChild(br6);
								p.appendChild(span7);

								var finish = function () {
									if (n1 == n2) {
										game.saveConfig('asset_version', asset_version);
									}
									span.innerHTML = '素材更新完毕（' + n1 + '/' + n2 + '）';
									p.appendChild(document.createElement('br'));
									var button = document.createElement('button');
									button.innerHTML = '重新启动';
									button.onclick = game.reload;
									button.style.marginTop = '8px';
									p.appendChild(button);
								};
								game.multiDownload(updates, function () {
									n1++;
									span.innerHTML = '正在下载素材（' + n1 + '/' + n2 + '）';
								}, function (e) {
									game.print('下载失败：' + e.source);
								}, function () {
									setTimeout(finish, 500);
								});
							};
							game.checkFileList(updates, proceed);
						}, function () {
							alert('连接失败');
							button2.disabled = false;
							button2.innerHTML = '检查素材更新';
						}, true);
					}
					else {
						alert('此版本不支持游戏内更新素材，请手动更新');
					}
				};

				// button1 = document.createElement('button');
				// button1.innerHTML = '检查游戏更新';
				// button1.onclick = game.checkForUpdate;
				// li1.lastChild.appendChild(button1);

				button3 = document.createElement('button');
				button3.innerHTML = '更新到开发版';
				button3.style.marginLeft = '5px';
				button3.onclick = function () {
					game.checkForUpdate(null, true);
				};
				// if(lib.config.dev){
				//     li1.lastChild.appendChild(button3);
				// }

				(function () {
					var updatep1 = li1.querySelector('p');
					var updatep2 = li2;
					var updatep3 = li3;
					var updatep4 = node;
					var updatepx = ui.create.node('p');
					li1.appendChild(updatepx);
					updatepx.style.display = 'none';
					updatepx.style.whiteSpace = 'nowrap';
					updatepx.style.marginTop = '8px';
					var buttonx = ui.create.node('button', '访问项目主页', function () {
						window.open('https://github.com/libccy/noname');
					});
					updatepx.appendChild(buttonx);
					ui.updateUpdate = function () {
						if (!game.download) {
							updatep1.style.display = 'none';
							updatep2.style.display = 'none';
							updatep3.style.display = 'none';
							updatepx.style.display = '';
							updatep4.innerHTML = '关于';
						}
						else {
							updatep1.style.display = '';
							updatep2.style.display = '';
							updatep3.style.display = 'none'; // coding
							updatepx.style.display = 'none';
							updatep4.innerHTML = '更新';
						}
					};
					ui.updateUpdate();
				}());

				button4 = document.createElement('button');
				button4.innerHTML = '设置更新地址';
				button4.onclick = function () {
					game.prompt('设置更新地址', function (str) {
						if (str) {
							game.saveConfig('updateURL', str);
							li3.querySelector('span').innerHTML = trimURL(str);
							button5.style.display = '';
							button6.style.display = 'none';
						}
					});
				};
				// li3.lastChild.appendChild(button4);

				var button6 = document.createElement('button');
				button6.innerHTML = '设为备用镜像';
				button6.style.display = 'none';// coding
				// button6.style.marginLeft='5px';
				button6.onclick = function () {
					game.saveConfig('updateURL', lib.mirrorURL);
					button5.style.display = '';
					button6.style.display = 'none';
					li3.querySelector('span').innerHTML = trimURL(lib.mirrorURL);
				};
				li3.lastChild.appendChild(button6);

				button5 = document.createElement('button');
				button5.innerHTML = '设为默认镜像';
				// button5.style.marginLeft='5px';
				button5.onclick = function () {
					game.saveConfig('updateURL');
					button5.style.display = 'none';
					button6.style.display = '';
					li3.querySelector('span').innerHTML = trimURL(lib.updateURL);
				};
				li3.lastChild.appendChild(button5);
				if (!lib.config.updateURL) {
					button5.style.display = 'none';
				}
				else {
					button6.style.display = 'none';
				}

				button2 = document.createElement('button');
				button2.innerHTML = '检查素材更新';
				button2.onclick = game.checkForAssetUpdate;
				li2.lastChild.appendChild(button2);

				var span1 = ui.create.div('.config.more', '选项 <div>&gt;</div>');
				span1.style.fontSize = 'small';
				span1.style.display = 'inline';
				span1.toggle = function () {
					if (!this.classList.toggle('on')) {
						game.saveConfig('asset_toggle_off', true);
						span2.style.display = 'none';
						span2_br.style.display = 'none';
						span2_check.style.display = 'none';
						span3.style.display = 'none';
						span3_br.style.display = 'none';
						span3_check.style.display = 'none';
						span4.style.display = 'none';
						span4_br.style.display = 'none';
						span4_check.style.display = 'none';
						span5.style.display = 'none';
						span5_br.style.display = 'none';
						span5_check.style.display = 'none';
						span6.style.display = 'none';
						span6_br.style.display = 'none';
						span6_check.style.display = 'none';
					}
					else {
						game.saveConfig('asset_toggle_off');
						span2.style.display = '';
						span2_br.style.display = '';
						span2_check.style.display = '';
						span3.style.display = '';
						span3_br.style.display = '';
						span3_check.style.display = '';
						span4.style.display = '';
						span4_br.style.display = '';
						span4_check.style.display = '';
						span5.style.display = '';
						span5_br.style.display = '';
						span5_check.style.display = '';
						span6.style.display = '';
						span6_br.style.display = '';
						span6_check.style.display = '';
					}
				};
				span1.listen(span1.toggle);
				li2.lastChild.appendChild(span1);

				var span6_br = ui.create.node('br');
				li2.lastChild.appendChild(span6_br);

				var span5 = ui.create.div('', '图片素材（精简，126MB）');
				span5.style.fontSize = 'small';
				span5.style.lineHeight = '16px';
				var span5_check = document.createElement('input');
				span5_check.type = 'checkbox';
				span5_check.style.marginLeft = '5px';
				if (lib.config.asset_image) {
					span5_check.checked = true;
				}
				span5_check.onchange = function () {
					game.saveConfig('asset_image', this.checked);
				};
				var span2_br = ui.create.node('br');

				var span4 = ui.create.div('', '字体素材（48MB）');
				span4.style.fontSize = 'small';
				span4.style.lineHeight = '16px';
				li2.lastChild.appendChild(span4);
				var span4_check = document.createElement('input');
				span4_check.type = 'checkbox';
				span4_check.style.marginLeft = '5px';
				if (lib.config.asset_font) {
					span4_check.checked = true;
				}
				span4_check.onchange = function () {
					game.saveConfig('asset_font', this.checked);
				};
				li2.lastChild.appendChild(span4_check);
				var span3_br = ui.create.node('br');
				li2.lastChild.appendChild(span3_br);

				var span3 = ui.create.div('', '音效素材（125MB）');
				span3.style.fontSize = 'small';
				span3.style.lineHeight = '16px';
				li2.lastChild.appendChild(span3);
				var span3_check = document.createElement('input');
				span3_check.type = 'checkbox';
				span3_check.style.marginLeft = '5px';
				if (lib.config.asset_audio) {
					span3_check.checked = true;
				}
				span3_check.onchange = function () {
					game.saveConfig('asset_audio', this.checked);
				};
				li2.lastChild.appendChild(span3_check);
				var span4_br = ui.create.node('br');
				li2.lastChild.appendChild(span4_br);

				var span2 = ui.create.div('', '皮肤素材（351MB）');
				span2.style.fontSize = 'small';
				span2.style.lineHeight = '16px';
				li2.lastChild.appendChild(span2);
				var span2_check = document.createElement('input');
				span2_check.type = 'checkbox';
				span2_check.style.marginLeft = '5px';
				if (lib.config.asset_skin) {
					span2_check.checked = true;
				}
				span2_check.onchange = function () {
					game.saveConfig('asset_skin', this.checked);
				};
				li2.lastChild.appendChild(span2_check);
				var span5_br = ui.create.node('br');
				li2.lastChild.appendChild(span5_br);


				li2.lastChild.appendChild(span5);
				li2.lastChild.appendChild(span5_check);
				li2.lastChild.appendChild(span2_br);

				var span6 = ui.create.div('', '图片素材（完整，203MB）');
				span6.style.fontSize = 'small';
				span6.style.lineHeight = '16px';
				li2.lastChild.appendChild(span6);
				var span6_check = document.createElement('input');
				span6_check.type = 'checkbox';
				span6_check.style.marginLeft = '5px';
				if (lib.config.asset_full) {
					span6_check.checked = true;
				}
				span6_check.onchange = function () {
					game.saveConfig('asset_full', this.checked);
				};
				li2.lastChild.appendChild(span6_check);

				span2.style.display = 'none';
				span2_br.style.display = 'none';
				span2_check.style.display = 'none';
				span3.style.display = 'none';
				span3_br.style.display = 'none';
				span3_check.style.display = 'none';
				span4.style.display = 'none';
				span4_br.style.display = 'none';
				span4_check.style.display = 'none';
				span5.style.display = 'none';
				span5_br.style.display = 'none';
				span5_check.style.display = 'none';
				span6.style.display = 'none';
				span6_br.style.display = 'none';
				span6_check.style.display = 'none';

				ul.appendChild(li1);
				// ul.appendChild(li2);
				// ul.appendChild(li3);
				page.appendChild(ul);


				if (!lib.config.asset_toggle_off) {
					span1.toggle();
				}
			}());
			(function () {
				var norow2 = function () {
					var node = currentrow1;
					if (!node) return false;
					return node.innerHTML == '横置' || node.innerHTML == '翻面' || node.innerHTML == '换人' || node.innerHTML == '复活';
				};
				var checkCheat = function () {
					if (norow2()) {
						for (var i = 0; i < row2.childElementCount; i++) {
							row2.childNodes[i].classList.remove('selectedx');
							row2.childNodes[i].classList.add('unselectable');
						}
					}
					else {
						for (var i = 0; i < row2.childElementCount; i++) {
							row2.childNodes[i].classList.remove('unselectable');
						}
					}
					if (currentrow1 && currentrow1.innerHTML == '复活') {
						for (var i = 0; i < row3.childNodes.length; i++) {
							if (row3.childNodes[i].dead) {
								row3.childNodes[i].style.display = '';
							}
							else {
								row3.childNodes[i].style.display = 'none';
								row3.childNodes[i].classList.remove('glow');
							}
							row3.childNodes[i].classList.remove('unselectable');
						}
					}
					else {
						for (var i = 0; i < row3.childElementCount; i++) {
							if (currentrow1 && currentrow1.innerHTML == '换人' && row3.childNodes[i].link == game.me) {
								row3.childNodes[i].classList.add('unselectable');
							}
							else {
								row3.childNodes[i].classList.remove('unselectable');
							}
							if (!row3.childNodes[i].dead) {
								row3.childNodes[i].style.display = '';
							}
							else {
								row3.childNodes[i].style.display = 'none';
								row3.childNodes[i].classList.remove('glow');
							}
						}
					}
					if (currentrow1 && (currentrow2 || norow2()) && row3.querySelector('.glow')) {
						cheatButton.classList.add('glowing');
						return true;
					}
					else {
						cheatButton.classList.remove('glowing');
						return false;
					}
				};
				cheatButton.listen(function () {
					if (checkCheat()) {
						var num;
						if (currentrow2) {
							switch (currentrow2.innerHTML) {
								case '一': num = 1; break;
								case '二': num = 2; break;
								case '三': num = 3; break;
								case '四': num = 4; break;
								case '五': num = 5; break;
							}
						}
						var targets = [];
						var buttons = row3.querySelectorAll('.glow');
						for (var i = 0; i < buttons.length; i++) {
							targets.push(buttons[i].link);
						}
						while (targets.length) {
							var target = targets.shift();
							if (currentrow1.innerHTML=='伤害' && num==5){
								target.damage(num+994,'nosource');
							} else
							switch (currentrow1.innerHTML) {
								case '伤害': target.damage(num, 'nosource'); break;
								case '回复': target.recover(num, 'nosource'); break;
								case '摸牌': target.draw(num); break;
								case '弃牌': target.discard(target.getCards('he').randomGets(num)); break;
								case '横置': target.link(); break;
								case '翻面': target.turnOver(); break;
								case '复活': target.revive(target.maxHp); break;
								case '换人': {
									if (_status.event.isMine()) {
										if (!ui.auto.classList.contains('hidden')) {
											setTimeout(function () {
												ui.click.auto();
												setTimeout(function () {
													ui.click.auto();
													game.swapPlayer(target);
												}, 500);
											});
										}
									}
									else {
										game.swapPlayer(target);
									}
									break;
								}
							}
						}
						if (ui.coin) {
							game.changeCoin(-20);
						}
						clickContainer.call(menuContainer);
					}
				});

				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '控制', start.firstChild, clickMode);
				node.link = page;
				node.type = 'cheat';
				page.classList.add('menu-sym');

				var currentrow1 = null;
				var row1 = ui.create.div('.menu-cheat', page);
				var clickrow1 = function () {
					if (this.classList.contains('unselectable')) return;
					if (currentrow1 == this) {
						this.classList.remove('selectedx');
						currentrow1 = null;
					}
					else {
						this.classList.add('selectedx');
						if (currentrow1) {
							currentrow1.classList.remove('selectedx');
						}
						currentrow1 = this;
						if (this.innerHTML == '换人') {
							for (var i = 0; i < row3.childNodes.length; i++) {
								row3.childNodes[i].classList.remove('glow');
							}
						}
					}
					checkCheat();
				};
				var nodedamage = ui.create.div('.menubutton', '伤害', row1, clickrow1);
				var noderecover = ui.create.div('.menubutton', '回复', row1, clickrow1);
				var nodedraw = ui.create.div('.menubutton', '摸牌', row1, clickrow1);
				var nodediscard = ui.create.div('.menubutton', '弃牌', row1, clickrow1);
				var nodelink = ui.create.div('.menubutton', '横置', row1, clickrow1);
				var nodeturnover = ui.create.div('.menubutton', '翻面', row1, clickrow1);
				var noderevive = ui.create.div('.menubutton', '复活', row1, clickrow1);
				var nodereplace = ui.create.div('.menubutton', '换人', row1, clickrow1);
				if (!game.canReplaceViewpoint || !game.canReplaceViewpoint()) {
					nodereplace.classList.add('unselectable');
				}

				var currentrow2 = null;
				var row2 = ui.create.div('.menu-cheat', page);
				var clickrow2 = function () {
					if (this.classList.contains('unselectable')) return;
					if (currentrow2 == this) {
						this.classList.remove('selectedx');
						currentrow2 = null;
					}
					else {
						this.classList.add('selectedx');
						if (currentrow2) {
							currentrow2.classList.remove('selectedx');
						}
						currentrow2 = this;
					}
					checkCheat();
				};
				var nodex1 = ui.create.div('.menubutton', '一', row2, clickrow2);
				var nodex2 = ui.create.div('.menubutton', '二', row2, clickrow2);
				var nodex3 = ui.create.div('.menubutton', '三', row2, clickrow2);
				var nodex4 = ui.create.div('.menubutton', '四', row2, clickrow2);
				var nodex5 = ui.create.div('.menubutton', '五', row2, clickrow2);

				var row3 = ui.create.div('.menu-buttons.leftbutton.commandbutton', page);
				row3.style.marginTop = '3px';
				var clickrow3 = function () {
					if (this.classList.contains('unselectable')) return;
					this.classList.toggle('glow');
					if (currentrow1 && currentrow1.innerHTML == '换人' && this.classList.contains('glow')) {
						if (this.link == game.me) {
							this.classList.remove('glow');
						}
						for (var i = 0; i < row3.childElementCount; i++) {
							if (row3.childNodes[i] != this) {
								row3.childNodes[i].classList.remove('glow');
							}
						}
					}
					checkCheat();
				};
				menuUpdates.push(function () {
					if (_status.video || _status.connectMode) {
						node.classList.add('off');
						if (node.classList.contains('active')) {
							node.classList.remove('active');
							node.link.remove();
							active = start.firstChild.firstChild;
							active.classList.add('active');
							rightPane.appendChild(active.link);
						}

						page.remove();
						cheatButton.remove();
						if (_status.video) node.remove();
						return;
					}
					var list = [];
					for (var i = 0; i < game.players.length; i++) {
						if (lib.character[game.players[i].name] || game.players[i].name1) {
							list.push(game.players[i]);
						}
					}
					for (var i = 0; i < game.dead.length; i++) {
						if (lib.character[game.dead[i].name] || game.dead[i].name1) {
							list.push(game.dead[i]);
						}
					}
					if (list.length) {
						row1.show();
						row2.show();
						row3.innerHTML = '';
						var buttons = ui.create.buttons(list, 'player', row3, true);
						for (var i = 0; i < buttons.length; i++) {
							buttons[i].listen(clickrow3);
							if (game.dead.includes(buttons[i].link)) {
								buttons[i].dead = true;
							}
						}
						checkCheat();
					}
					else {
						row1.hide();
						row2.hide();
					}
					if (lib.config.mode == 'identity' || lib.config.mode == 'guozhan' || lib.config.mode == 'doudizhu') {
						if (game.notMe || (game.me && (game.me._trueMe || game.hasPlayer(function (current) {
							return current._trueMe == game.me;
						}))) || !game.phaseNumber || _status.qianlidanji) {
							nodereplace.classList.add('unselectable');
						}
						else if (_status.event.isMine() && ui.auto.classList.contains('hidden')) {
							nodereplace.classList.add('unselectable');
						}
						else {
							nodereplace.classList.remove('unselectable');
						}
					}
					if (game.dead.length == 0) {
						noderevive.classList.add('unselectable');
					}
					else {
						noderevive.classList.remove('unselectable');
					}
					checkCheat();
				});
			}());
			(function () {
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '命令', start.firstChild, clickMode);
				ui.commandnode = node;
				node.type = 'cmd';
				menuUpdates.push(function () {
					if (_status.connectMode) {
						node.classList.add('off');
						if (node.classList.contains('active')) {
							node.classList.remove('active');
							if (node.link) node.link.remove();
							active = start.firstChild.firstChild;
							active.classList.add('active');
							rightPane.appendChild(active.link);
						}
					}
				});
				node._initLink = function () {
					node.link = page;
					page.classList.add('menu-sym');

					const text = document.createElement('div');
					text.css({
						'width': '194px',
						'height': '124px',
						'padding': '3px',
						'borderRadius': '2px',
						'boxShadow': 'rgba(0, 0, 0, 0.2) 0 0 0 1px',
						'textAlign': 'left',
						'webkitUserSelect': 'initial',
						'overflow': 'scroll',
						'position': 'absolute',
						'left': '30px',
						'top': '50px',
						'wordBreak': 'break-all'
					});

					const pre = ui.create.node('pre.fullsize', text);
					text.css.call(pre, {
						'margin': '0',
						'padding': '0',
						'position': 'relative',
						'webkitUserSelect': 'text',
						'userSelect': 'text'
					});
					lib.setScroll(pre);
					page.appendChild(text);

					const text2 = document.createElement('input');
					text.css.call(text2, {
						'width': '200px',
						'height': '20px',
						'padding': '0',
						'position': 'absolute',
						'top': '15px',
						'left': '30px',
						'resize': 'none',
						'border': 'none',
						'borderRadius': '2px',
						'boxShadow': 'rgba(0, 0, 0, 0.2) 0 0 0 1px'
					});

					const g = {};
					const logs = [];
					let logindex = -1;
					let proxyWindow = Object.assign({}, window, {
						_status: _status,
						lib: lib,
						game: game,
						ui: ui,
						get: get,
						ai: ai,
						cheat: lib.cheat
					});
					Object.defineProperties(proxyWindow, {
						'_status': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'lib': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'game': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'ui': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'get': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'ai': {
							configurable: false,
							enumerable: true,
							writable: false
						},
						'cheat': {
							configurable: false,
							enumerable: true,
							writable: false
						}
					});
					proxyWindow = new Proxy(proxyWindow, {
						set(target, prop, newValue) {
							if (!['_status', 'lib', 'game', 'ui', 'get', 'ai', 'cheat'].includes(prop)) {
								Reflect.set(window, prop, newValue);
							}
							return Reflect.set(target, prop, newValue);
						}
					});
					//使用new Function隔绝作用域，避免在控制台可以直接访问到runCommand等变量
					/**
					 * @type { (value:string)=>any }
					 */
					const fun = (new Function('window', `
								const _status=window._status;
								const lib=window.lib;
								const game=window.game;
								const ui=window.ui;
								const get=window.get;
								const ai=window.nonameAI;
								const cheat=window.lib.cheat;
								//使用正则匹配绝大多数的普通obj对象，避免解析成代码块。
								const reg=${/^\{([^{}]+:\s*([^\s,]*|'[^']*'|"[^"]*"|\{[^}]*\}|\[[^\]]*\]|null|undefined|([a-zA-Z$_][a-zA-Z0-9$_]*\s*:\s*)?[a-zA-Z$_][a-zA-Z0-9$_]*\(\)))(?:,\s*([^{}]+:\s*(?:[^\s,]*|'[^']*'|"[^"]*"|\{[^}]*\}|\[[^\]]*\]|null|undefined|([a-zA-Z$_][a-zA-Z0-9$_]*\s*:\s*)?[a-zA-Z$_][a-zA-Z0-9$_]*\(\))))*\}$/};
								return function(value){ 
									"use strict";
									return eval(reg.test(value)?('('+value+')'):value);
								}
							`))(proxyWindow);
					const runCommand = () => {
						if (text2.value && !['up', 'down'].includes(text2.value)) {
							logindex = -1;
							logs.unshift(text2.value);
						}
						if (text2.value == 'cls') {
							pre.innerHTML = '';
							text2.value = '';
						}
						else if (text2.value == 'up') {
							if (logindex + 1 < logs.length) {
								text2.value = logs[++logindex];
							}
							else {
								text2.value = '';
							}
						}
						else if (text2.value == 'down') {
							if (logindex >= 0) {
								logindex--;
								if (logindex < 0) {
									text2.value = '';
								}
								else {
									text2.value = logs[logindex];
								}
							}
							else {
								text2.value = '';
							}
						}
						else if (text2.value.includes('无天使') && (text2.value.includes('无神佛') || text2.value.includes('无神') && text2.value.includes('无佛'))) {
							game.print('密码正确！欢迎来到死后世界战线！');
							_status.keyVerified = true;
							text2.value = '';
						}
						else {
							if (!game.observe && !game.online) {
								try {
									let value = text2.value.trim();
									if (value.endsWith(";")) value = value.slice(0, -1).trim();
									game.print(fun(value));
								}
								catch (e) {
									game.print(e);
								}
							}
							text2.value = '';
						}
					};
					text2.addEventListener('keydown', e => {
						if (e.keyCode == 13) {
							runCommand();
						}
						else if (e.keyCode == 38) {
							if (logindex + 1 < logs.length) {
								text2.value = logs[++logindex];
							}
						}
						else if (e.keyCode == 40) {
							if (logindex >= 0) {
								logindex--;
								if (logindex < 0) {
									text2.value = '';
								}
								else {
									text2.value = logs[logindex];
								}
							}
						}
					});
					page.appendChild(text2);
					game.print = function () {
						const args = [...arguments];
						const printResult = args.map(arg => {
							if (typeof arg != 'string') {
								const parse = (obj) => {
									if (Array.isArray(obj)) {
										return `[${obj.map(v => parse(v))}]`;
									} else if (typeof obj == 'function') {
										return `[Function ${obj.name}]`;
									} else if (typeof obj != 'string') {
										if (obj instanceof Error) {
											return `<span style="color:red;">${String(obj)}</span>`;
										}
										return String(obj);
									} else {
										return `'${String(obj)}'`;
									}
								};
								if (typeof arg == 'function') {
									let argi;
									try {
										argi = get.stringify(arg);
										if (argi === '') argi = arg.toString();
									} catch (_) {
										argi = arg.toString();
									}
									return argi.replace(/&/g, '&amp;')
										.replace(/</g, '&lt;')
										.replace(/>/g, '&gt;')
										.replace(/"/g, '&quot;')
										.replace(/'/g, '&#39;');
								}
								else if (typeof arg == 'object') {
									let msg = '';
									for (const name of Object.getOwnPropertyNames(arg)) {
										msg += `${name}: ${parse(arg[name])}<br>`;
									}
									return `<details><summary>${parse(arg)}</summary>${msg}</details>`;
								} else {
									return parse(arg);
								}
							} else {
								const str = String(arg);
								if (!/<[a-zA-Z]+[^>]*?\/?>.*?(?=<\/[a-zA-Z]+[^>]*?>|$)/.exec(str)) return str
									.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/>/g, '&gt;')
									.replace(/"/g, '&quot;')
									.replace(/'/g, '&#39;');
								else return str;
							}
						}).join(' ');
						pre.innerHTML += printResult + '<br>';
						text.scrollTop = text.scrollHeight;
					};
					if (_status.toprint) {
						game.print(..._status.toprint);
						delete _status.toprint;
					}
					runButton.listen(runCommand);
					clearButton.listen(() => {
						pre.innerHTML = '';
					});
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());
			(function () {
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '战绩', start.firstChild, clickMode);
				node.type = 'rec';
				node._initLink = function () {
					node.link = page;
					page.style.paddingBottom = '10px';
					var reset = function () {
						if (this.innerHTML == '重置') {
							this.innerHTML = '确定';
							var that = this;
							setTimeout(function () {
								that.innerHTML = '重置';
							}, 1000);
						}
						else {
							this.parentNode.previousSibling.remove();
							this.parentNode.remove();
							lib.config.gameRecord[this.parentNode.link] = { data: {} };
							game.saveConfig('gameRecord', lib.config.gameRecord);
						}
					};
					for (var i = 0; i < lib.config.all.mode.length; i++) {
						if (!lib.config.gameRecord[lib.config.all.mode[i]]) continue;
						if (lib.config.gameRecord[lib.config.all.mode[i]].str) {
							ui.create.div('.config.indent', lib.translate[lib.config.all.mode[i]], page).style.marginBottom = '-5px';
							var item = ui.create.div('.config.indent', lib.config.gameRecord[lib.config.all.mode[i]].str + '<span>重置</span>', page);
							item.style.height = 'auto';
							item.lastChild.addEventListener('click', reset);
							item.lastChild.classList.add('pointerdiv');
							item.link = lib.config.all.mode[i];
						}
					}
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());
			(function () {
				if (!window.indexedDB || window.nodb) return;
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', '录像', start.firstChild, clickMode);
				node.type = 'video';
				lib.videos = [];
				ui.create.videoNode = (video, before) => {
					lib.videos.remove(video);
					lib.videos[before === true ? 'unshift' : 'push'](video);
				};
				node._initLink = function () {
					node.link = page;
					var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
					store.openCursor().onsuccess = function (e) {
						var cursor = e.target.result;
						if (cursor) {
							lib.videos.push(cursor.value);
							cursor.continue();
						}
						else {
							lib.videos.sort(function (a, b) {
								return parseInt(b.time) - parseInt(a.time);
							});
							var clickcapt = function () {
								var current = this.parentNode.querySelector('.videonode.active');
								if (current && current != this) {
									current.classList.remove('active');
								}
								if (this.classList.toggle('active')) {
									playButton.show();
									deleteButton.show();
									saveButton.show();
								}
								else {
									playButton.hide();
									deleteButton.hide();
									saveButton.hide();
								}
							};
							var staritem = function () {
								this.parentNode.classList.toggle('starred');
								var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
								if (this.parentNode.classList.contains('starred')) {
									this.parentNode.link.starred = true;
								}
								else {
									this.parentNode.link.starred = false;
								}
								store.put(this.parentNode.link);
							};
							var createNode = function (video, before) {
								var node = ui.create.div('.videonode.menubutton.large', clickcapt);
								node.link = video;
								var nodename1 = ui.create.div('.menubutton.videoavatar', node);
								nodename1.setBackground(video.name1, 'character');
								if (video.name2) {
									var nodename2 = ui.create.div('.menubutton.videoavatar2', node);
									nodename2.setBackground(video.name2, 'character');
								}
								var date = new Date(video.time);
								var str = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + (date.getDate()) + ' ' +
									date.getHours() + ':';
								var minutes = date.getMinutes();
								if (minutes < 10) {
									str += '0';
								}
								str += minutes;
								ui.create.div('.caption', video.name[0], node);
								ui.create.div('.text', str + '<br>' + video.name[1], node);
								if (video.win) {
									ui.create.div('.victory', '胜', node);
								}

								if (before) {
									page.insertBefore(node, page.firstChild);
								}
								else {
									page.appendChild(node);
								}
								ui.create.div('.video_star', '★', node, staritem);
								if (video.starred) {
									node.classList.add('starred');
								}
							};
							for (var i = 0; i < lib.videos.length; i++) {
								createNode(lib.videos[i]);
							}
							ui.create.videoNode = createNode;
							var importVideoNode = ui.create.div('.config.switcher.pointerspan',
								'<span class="underlinenode slim ">导入录像...</span>', function () {
									this.nextSibling.classList.toggle('hidden');
								}, page);
							importVideoNode.style.marginLeft = '12px';
							importVideoNode.style.marginTop = '3px';
							var importVideo = ui.create.div('.config.hidden', page);
							importVideo.style.whiteSpace = 'nowrap';
							importVideo.style.marginBottom = '80px';
							importVideo.style.marginLeft = '13px';
							importVideo.style.width = 'calc(100% - 30px)';
							importVideo.innerHTML = '<input type="file" accept="*/*" style="width:calc(100% - 40px)">' +
								'<button style="width:40px">确定</button>';
							importVideo.lastChild.onclick = function () {
								var fileToLoad = importVideo.firstChild.files[0];
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									if (!data) return;
									try {
										data = JSON.parse(lib.init.decode(data));
									}
									catch (e) {
										console.log(e);
										alert('导入失败');
										return;
									}
									var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
									var videos = lib.videos.slice(0);
									for (var i = 0; i < videos.length; i++) {
										if (videos[i].starred) {
											videos.splice(i--, 1);
										}
									}
									for (var deletei = 0; deletei < 5; deletei++) {
										if (videos.length >= parseInt(lib.config.video) && videos.length) {
											var toremove = videos.pop();
											lib.videos.remove(toremove);
											store.delete(toremove.time);
											for (var i = 0; i < page.childNodes.length; i++) {
												if (page.childNodes[i].link == toremove) {
													page.childNodes[i].remove();
													break;
												}
											}
										}
										else {
											break;
										}
									}
									for (var i = 0; i < lib.videos.length; i++) {
										if (lib.videos[i].time == data.time) {
											alert('录像已存在');
											return;
										}
									}
									lib.videos.unshift(data);
									store.put(data);
									createNode(data, true);
								};
								fileReader.readAsText(fileToLoad, "UTF-8");
							};

							playButton.listen(function () {
								var current = this.parentNode.querySelector('.videonode.active');
								if (current) {
									game.playVideo(current.link.time, current.link.mode);
								}
							});
							deleteButton.listen(function () {
								var current = this.parentNode.querySelector('.videonode.active');
								if (current) {
									lib.videos.remove(current.link);
									var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
									store.delete(current.link.time);
									current.remove();
								}
							});
							saveButton.listen(function () {
								var current = this.parentNode.querySelector('.videonode.active');
								if (current) {
									game.export(lib.init.encode(JSON.stringify(current.link)),
										'无名杀 - 录像 - ' + current.link.name[0] + ' - ' + current.link.name[1]);
								}
							});

							ui.updateVideoMenu = function () {
								var active = start.firstChild.querySelector('.active');
								if (active) {
									active.classList.remove('active');
									active.link.remove();
								}
								node.classList.add('active');
								rightPane.appendChild(page);
								playButton.style.display = '';
								deleteButton.style.display = '';
								saveButton.style.display = '';
							};
						}
					};
				};
				if (!get.config('menu_loadondemand')) node._initLink();
			}());


			for (var i in lib.help) {
				var page = ui.create.div('');
				var node = ui.create.div('.menubutton.large', i, start.firstChild, clickMode);
				node.type = 'help';
				node.link = page;
				node.style.display = 'none';
				page.classList.add('menu-help');
				page.innerHTML = lib.help[i];
			}

			if (!connectMenu) {
				var node = ui.create.div('.menubutton.large', '帮助', start.firstChild, function () {
					var activex = start.firstChild.querySelector('.active');
					if (this.innerHTML == '帮助') {
						cheatButton.style.display = 'none';
						runButton.style.display = 'none';
						clearButton.style.display = 'none';
						playButton.style.display = 'none';
						saveButton.style.display = 'none';
						deleteButton.style.display = 'none';

						this.innerHTML = '返回';
						for (var i = 0; i < start.firstChild.childElementCount; i++) {
							var nodex = start.firstChild.childNodes[i];
							if (nodex == node) continue;
							if (nodex.type == 'help') {
								nodex.style.display = '';
								if (activex && activex.type != 'help') {
									activex.classList.remove('active');
									activex.link.remove();
									activex = null;
									nodex.classList.add('active');
									rightPane.appendChild(nodex.link);
								}
							}
							else {
								nodex.style.display = 'none';
							}
						}
					}
					else {
						this.innerHTML = '帮助';
						for (var i = 0; i < start.firstChild.childElementCount; i++) {
							var nodex = start.firstChild.childNodes[i];
							if (nodex == node) continue;
							if (nodex.type != 'help') {
								nodex.style.display = '';
								if (activex && activex.type == 'help') {
									activex.classList.remove('active');
									activex.link.remove();
									activex = null;
									clickMode.call(nodex);
								}
							}
							else {
								nodex.style.display = 'none';
							}
						}
					}
				});
			}

			var active = start.firstChild.querySelector('.active');
			if (!active) {
				active = start.firstChild.firstChild;
				active.classList.add('active');
			}
			if (!active.link) active._initLink();
			rightPane.appendChild(active.link);
		}());

		if (menuTimeout) {
			clearTimeout(menuTimeout);
			delete window.resetExtension;
			localStorage.removeItem(lib.configprefix + 'disable_extension', true);
		}
	};
});

