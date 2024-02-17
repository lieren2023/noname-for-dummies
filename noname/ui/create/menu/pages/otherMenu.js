import {
	menuContainer,
	popupContainer,
	updateActive,
	setUpdateActive,
	updateActiveCard,
	setUpdateActiveCard,
	menux,
	menuxpages,
	menuUpdates,
	openMenu,
	clickToggle,
	clickSwitcher,
	clickContainer,
	clickMenuItem,
	createMenu,
	createConfig
} from "../index.js";
import { ui, game, get ,ai ,lib, _status } from "../../../../../noname.js";

export const otherMenu = function (connectMenu) {
	if (connectMenu) return;
	/**
	 * 由于联机模式会创建第二个菜单，所以需要缓存一下可变的变量
	 */
	const cacheMenuContainer = menuContainer;
	// const cachePopupContainer = popupContainer;
	// const cacheMenux = menux;
	const cacheMenuxpages = menuxpages;
	/** @type { HTMLDivElement } */
	// @ts-ignore
	var start = cacheMenuxpages.shift();
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

		button1 = document.createElement('button');
		button1.innerHTML = '检查游戏更新';
		button1.onclick = game.checkForUpdate;
		li1.lastChild.appendChild(button1);

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
		ul.appendChild(li2);
		ul.appendChild(li3);
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
				clickContainer.call(cacheMenuContainer, connectMenu);
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
				const ai=window.ai;
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
};