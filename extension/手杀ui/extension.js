game.import('extension', function(lib, game, ui, get, ai, _status) {

	// 避免提示是否下载图片和字体素材（参考SJ Settings扩展）
	if (!lib.config.asset_version) {
		game.saveConfig('asset_version', '无');
	}
	
  return {
    name: "手杀ui",
    content: function(config, pack) {
		// 新增lib.noGlobalSkillBtn，用于临时修复无按钮发动技能（无global的global技能），例如古剑奇谭食物牌（鲈鱼羹、蜜汁藕）
		lib.noGlobalSkillBtn=["luyugeng", "mizhilianou_use"];
		
		// 初始启动页设置
		if (!lib.config["extension_手杀ui_splash_styleinit"]) {
			if(lib.device){
				var item='style2';
			}else{
				var item='style1';
			}
			game.saveConfig('splash_style',item);
			
			// 启动页修改案例
			// lib.extensionMenu['extension_手杀ui'].qidongye.onclick(item);
			// game.saveConfig('extension_手杀ui_qidongye',item);
			// game.saveConfig('qidongye',item);
			
			game.saveConfig('extension_手杀ui_splash_styleinit',true);
		}
		
		// 从lbtn/main.js移至此处
		          lib.skill._uicardupdate = {
			// 技能刷新时机
                trigger: { player: 'changeSkillsAfter',global: 'phaseBefore' },
                forced: true,
                unique: true,
                popup: false,
                silent: true,
                noLose: true,
                noGain: true,
                noDeprive: true,
                priority: -Infinity,
                filter: function (event, player) {
                    return player==game.me
                },
                content: function () {
if(ui.updateSkillControl)   ui.updateSkillControl(game.me, true);
                }
            };
		
		//阶段提示
	 if (config.JDTS) {	
		//回合开始
    lib.skill._jd_hhks={
        trigger:{
            player:'phaseZhunbeiBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/hhks.png','',999);
		},
                     
    };
    
     //判定阶段
     lib.skill._jd_pdjd={
        trigger:{
            player:'phaseJudgeBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/pdjd.png','',999);
		},
                     
    };
    
     //摸牌阶段
     lib.skill._jd_mpjd={
        trigger:{
            player:'phaseDrawBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/mpjd.png','',999);
		},
                     
    };
    
     //出牌阶段
     lib.skill._jd_cpjd={
        trigger:{
            player:'phaseUseBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/cpjd.png','',999);
		},
                     
    };
    
     //弃牌阶段
     lib.skill._jd_qpjd={
        trigger:{
            player:'phaseDiscardBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/qpjd.png','',999);
		},

    };
    
     //回合结束
     lib.skill._jd_hhjs={
        trigger:{
            player:'phaseJieshuBefore',
        },
        filter: function(event, player) {
							return player == game.me && _status.currentPhase == player;
						},
        charlotte: true,
        forced: true,
        content:function(){
			game.as_showImage('extension/手杀ui/lbtn/images/hhjs.png','',999);
		},
                     
    }; 
	
	//回合结束消失、玩家死亡消失
    lib.skill._jd_hhjsxswjswxs={
		trigger:{
            player:'phaseJieshuAfter',
			global:'dieAfter',
        },
		filter: function(event, player) {
            return event.player==game.me;
        },
		forced:true,
		charlotte: true,
		content:function(){
			game.as_removeImage();
		},
	};

// 换人后消失（伪）
lib.skill._jd_hrhxs={
		trigger:{
            player:['phaseZhunbeiAfter','phaseJudgeAfter','phaseDrawAfter','phaseUseAfter','phaseDiscardAfter'],
        },
		filter: function(event, player) {
            return _status.currentPhase != game.me;
        },
		forced:true,
		charlotte: true,
		content:function(){
			game.as_removeImage();
		},
	};
	
    //游戏结束消失
    lib.onover.push(function(bool){
        game.as_removeImage();
    });
	
	}	
    
       if (get.mode() != 'connect' && lib.config.jindutiao != "off" && (lib.config.jindutiao == "jieshutg" || lib.config.jindutiao == "jieshubtg")) {

//游戏结束消失
lib.onover.push(function(bool){        
if (document.getElementById("jindutiao")) {
									document.getElementById("jindutiao").remove()
}

}); 
				
    lib.skill._jindutiao = {
			trigger: {
							player: ['phaseZhunbeiBefore','phaseJudgeBefore','phaseDrawBefore','phaseUseBefore','phaseDiscardBefore','phaseJieshuBefore','useCardAfter','useSkillAfter']
						},
    	filter: function(event, player) {
							return player == game.me && _status.currentPhase == player && _status.auto == false;
						},
						forced: true,
        
    	content: function() {

							if (window.timer) {
								clearInterval(window.timer);
							}

							if (document.getElementById("jindutiao")) {
								document.getElementById("jindutiao").remove()
							}

							// var boxContent = document.createElement('div')
							var boxContent = ui.create.div('.boxContent', ui.arena);
							boxContent.setAttribute('id', 'jindutiao');
							// boxContent.style.cssText =
								// "background-color: rgba(0,0,0,0.5);width: 450px;height:9px;border-radius: 10px;box-shadow:0px 0px 5px #ccc inset,0px 0px 5px #FFFFD5;overflow: hidden;border:1px solid #41351D;position: fixed;bottom:133.5px;display: block;margin: 0 30.5% !important;"
							// var boxTime = document.createElement('div')
							if (lib.device) {
								// 手机端
								boxContent.style.cssText = "bottom:calc(23% + 13px);left:calc(50% - 216px);";
							} else {
								// 电脑端
								boxContent.style.cssText = "bottom:calc(19% + 11px);left:calc(50% - 220px);";
							}
							var boxTime = ui.create.div('.boxTime', ui.arena);
							boxTime.data = 450;
							boxTime.style.cssText =
								"background-image: linear-gradient(#F7B952, #C61520, #F7B952);width: 450px;height:9px;";
							boxContent.appendChild(boxTime);
							// document.body.appendChild(boxContent)
							window.timer = setInterval(() => {
								if(_status.paused2 == false && !ui.window.classList.contains('shortcutpaused')) {
									boxTime.data--
									boxTime.style.width = boxTime.data + 'px'
									if (boxTime.data == 0) {
										clearInterval(window.timer);
										boxContent.remove();
										if (lib.config.jindutiao == "jieshutg") {
											ui.click.auto();
										}
									}
								}
							}, /*进度条时间*/100);

						},
        	group: ['_jindutiao_jieshu'],
					subSkill: {
						jieshu: {
							trigger:{
								player:['choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin','chooseToMoveBegin','phaseJieshuAfter','useCardBegin','useSkillBegin'],
								global:'dieAfter',
							},
							filter: function(event, player) {
								return event.player==game.me;
							},
							forced: true,
							content: function() {
								if (window.timer) {
									clearInterval(window.timer);
								}

								if (document.getElementById("jindutiao")) {
									document.getElementById("jindutiao").remove()
								}
							},
						},
					},
		}
     }
    /*
    		lib.skill._wuxie = {
				
			}
			
			lib.skill._gifting = {
				
			}
    */
      // return function(next) {
        // app.waitAllFunction([
          // function(_next) {
            // lib.init.css(lib.assetURL + 'extension/' + app.name, 'extension', _next);
          // },
          // function(_next) {
            // app.loadPlugins(function () {
              // var plugins = app.plugins.slice(0);
              // var runNext = function () {
                // var item = plugins.shift();
                // if (!item) return _next();
                // if (item.filter && !item.filter()) return runNext();
                // if (item.content) return item.content(runNext);
                // runNext();
              // };
              // Object.assign(runNext, app.element.runNext);
              // runNext();
            // });
          // },
        // ], next);
      // };
		
		// 加载js
		lib.init.jsSync(lib.assetURL +'extension/手杀ui/skill','main',function(){},function(){});
		lib.init.jsSync(lib.assetURL +'extension/手杀ui/lbtn','main',function(){},function(){});
    },
    precontent: function() {
		// 加载css
		lib.init.css(lib.assetURL + 'extension/手杀ui/skill', 'main');
		lib.init.css(lib.assetURL + 'extension/手杀ui/lbtn', 'main');
		lib.init.css(lib.assetURL + 'extension/手杀ui', 'extension');
		
		  var app = {
    name: '手杀ui',
    each: function(obj, fn, node) {
      if (!obj) return node;
      if (typeof obj.length === 'number') {
        for (var i = 0; i < obj.length; i++) {
          if (fn.call(node, obj[i], i) === false) {
            break;
          }
        }
        return node;
      }
      for (var i in obj) {
        if (fn.call(node, obj[i], i) === false) {
          break;
        }
      }
      return node;
    },
    isFunction: function(fn) {
      return typeof fn === 'function';
    },
    event: {
      listens: {},
      on: function(name, listen, remove) {
        if (!this.listens[name]) {
          this.listens[name] = [];
        }
        this.listens[name].push({
          listen: listen,
          remove: remove,
        });
        return this;
      },
      off: function(name, listen) {
        return app.each(this.listens[name], function(item, index) {
          if (listen === item || listen === item.listen) {
            this.listens[name].splice(index, 1);
          }
        }, this);
      },
      // emit: function(name) {
        // var args = Array.from(arguments).slice(1);
        // return app.each(this.listens[name], function(item) {
          // item.listen.apply(null, args);
          // item.remove && this.off(name, item);
        // }, this);
      // },
      once: function(name, listen) {
        return this.on(name, listen, true);
      },
    },
    create: {},
    listens: {},
    plugins: [],
    pluginsMap: {},
    // path: {
      // ext: function(path, ext) {
        // ext = ext || app.name;
        // return lib.assetURL + 'extension/' + ext + '/' + path;
      // },
    // },
    on: function(event, listen) {
      if (!app.listens[event]) {
        app.listens[event] = [];
      }
      app.listens[event].add(listen);
    },
    once: function(event, listen) {
      if (!app.listens[event]) {
        app.listens[event] = [];
      }
      app.listens[event].push({
        listen: listen,
        remove: true,
      });
    },
    off: function(event, listen) {
      var listens = app.listens[event] || [];
      var filters = listen ? listens.filter(function(item) {
        return item === listen || item.listen === listen;
      }) : listens.slice(0);
      filters.forEach(function(item) {
        listens.remove(item);
      });
    },
    // emit: function(event) {
      // var args = Array.from(arguments).slice(1);
      // var listens = app.listens[event] || [];
      // listens.forEach(function(item) {
        // if (typeof item === 'function') {
          // item.apply(null, args);
        // } else if (typeof item.listen === 'function') {
          // item.listen.apply(null, args);
          // item.remove && listens.remove(item);
        // }
      // });
    // },
    import: function(fn) {
      var obj = fn(lib, game, ui, get, ai, _status, app);
      if (obj) {
        if (obj.name) app.pluginsMap[obj.name] = obj;
        if (obj.precontent && (!obj.filter || obj.filter())) obj.precontent();
      }
      app.plugins.push(obj);
    },
    // importPlugin: function(data, setText) {
      // if (!window.JSZip) {
        // var args = arguments;
        // lib.init.js(lib.assetURL + 'game', 'jszip', function() {
          // app.importPlugin.apply(app, args);
        // });
        // return;
      // }
      // setText = typeof setText === 'function' ? setText : function() {};
      // var zip = new JSZip(data);
      // var dirList = [], fileList = [];
      // for (var i in zip.files) {
        // if (/\/$/.test(i)) {
          // dirList.push('extension/' + app.name + '/' + i);
        // } else if(!/^extension\.(js|css)$/.test(i)) {
          // fileList.push({
            // id: i,
            // path: 'extension/' + app.name + '/' + i.split('/').reverse().slice(1).reverse().join('/'),
            // name: i.split('/').pop(),
            // target: zip.files[i],
          // });
        // }
      // }

      // var total = dirList.length + fileList.length;
      // var finish = 0;
      // var isNode = lib.node && lib.node.fs;

      // var writeFile = function () {
        // var file = fileList.shift();
        // if (file) {
          // setText('正在导入(' + (++finish) + '/' + total + ')...')
          // game.writeFile(isNode ? file.target.asNodeBuffer() : file.target.asArrayBuffer(), file.path, file.name, writeFile);
        // } else {
          // alert('导入完成');
          // setText('导入插件');
        // }
      // };
      // var ensureDir = function () {
        // if (dirList.length) {
          // setText('正在导入(' + (++finish) + '/' + total + ')...')
          // game.ensureDirectory(dirList.shift(), ensureDir);
        // } else {
          // writeFile();
        // }
      // };
      // ensureDir();
    // },
    // loadPlugins: function(callback) {
      // game.getFileList('extension/' + app.name, function(floders) {
        // var total = floders.length;
        // var current = 0;
        // if (total === current) {
          // callback();
          // return;
        // }
        // var loaded = function() {
          // if (++current === total) {
            // callback();
          // }
        // };
        // floders.forEach(function(dir) {
          // game.readFile('extension/' + app.name + '/' + dir + '/main.js', function(data) {
            // var binarry = new Uint8Array(data);
            // var blob = new Blob([binarry]);
            // var reader = new FileReader();
            // reader.readAsText(blob);
            // reader.onload = function() {
              // eval(reader.result);
              // loaded();
            // };
          // }, function(e) {
            // console.info(e);
            // loaded();
          // });
        // });
      // });
    // },
    reWriteFunction: function(target, name, replace, str) {
      if (name && typeof name === 'object') {
        return app.each(name, function(item, index) {
          app.reWriteFunction(target, index, item[0], item[1]);
        }, target);
      }

      var plugins = app.pluginsMap;
      if ((typeof replace === 'string' || replace instanceof RegExp) &&
        (typeof str === 'string' || str instanceof RegExp)) {
        var funcStr = target[name].toString().replace(replace, str);
        eval('target.' + name + ' = ' + funcStr);
      } else {
        var func = target[name];
        target[name] = function() {
          var result, cancel;
          var args = Array.from(arguments);
          var args2 = Array.from(arguments);
          if (typeof replace === 'function') cancel = replace.apply(this, [args].concat(args));
          if (typeof func === 'function' && !cancel) result = func.apply(this, args);
          if (typeof str === 'function') str.apply(this, [result].concat(args2));
          return cancel || result;
        };
      }
      return target[name];
    },
    reWriteFunctionX: function (target, name, replace, str) {
      if (name && typeof name === 'object') {
        return app.each(name, function (item, index) {
          app.reWriteFunction(target, index, item);
        }, target);
      }

      if (Array.isArray(replace)) {
        var item1 = replace[0];
        var item2 = replace[1];
        var item3 = replace[2];
        if (item3 === 'append') {
          item2 = item1 + item2;
        } else if (item3 === 'insert') {
          item2 = item2 + item1;
        }
        if (typeof item1 === 'string') {
          item1 = RegExp(item1);
        }
        if (item1 instanceof RegExp && typeof item2 === 'string') {
          var funcStr = target[name].toString().replace(item1, item2);
          eval('target.' + name + ' = ' + funcStr);
        } else {
          var func = target[name];
          target[name] = function () {
            var arg1 = Array.from(arguments);
            var arg2 = Array.from(arguments);
            var result;
            if (app.isFunction(item1)) result = item1.apply(this, [arg1].concat(arg1));
            if (app.isFunction(func) && !result) result = func.apply(this, arg1);
            if (app.isFunction(item2)) item2.apply(this, [result].concat(arg2));
            return result;
          };
        }
      } else {
        console.info(arguments);
      }
      return target[name];
    },
    // waitAllFunction: function(fnList, callback) {
      // var list = fnList.slice(0);
      // var runNext = function() {
        // var item = list.shift();
        // if (typeof item === 'function') {
          // item(runNext);
        // } else if (list.length === 0) {
          // callback();
        // } else {
          // runNext();
        // }
      // };
      // runNext();
    // },
    // element: {
      // runNext: {
        // setTip: function(tip) {
          // console.info(tip);
        // },
      // },
    // },
    get: {
      playerSkills: function(node, arg1, arg2) {
        var skills = node.getSkills(arg1, arg2).slice(0);
        skills.addArray(Object.keys(node.forbiddenSkills));
        skills.addArray(Object.keys(node.disabledSkills).filter(function(k) {
          return !node.hiddenSkills.contains(k) && 
            node.disabledSkills[k].length &&
            node.disabledSkills[k][0] === k + '_awake';
        }));
        return skills;
      },
      skillInfo: function(skill, node) {
        var obj = {};
        obj.id = skill;
        if (lib.translate[skill + '_ab']) {
          obj.name = lib.translate[skill + '_ab'];
          obj.nameSimple = lib.translate[skill + '_ab'];
        } else if (lib.translate[skill]) {
          obj.name = lib.translate[skill];
          obj.nameSimple = lib.translate[skill].slice(0, 2);
        }
        obj.info = lib.skill[skill];
        if (node) {
          if (node.forbiddenSkills[skill]) obj.forbidden = true;
          if (node.disabledSkills[skill]) obj.disabled = true;
          if (obj.info.temp || !node.skills.contains(skill)) obj.temp = true;
          if (obj.info.frequent || obj.info.subfrequent) obj.frequent = true;
          if (obj.info.clickable && node.isIn() && node.isUnderControl(true)) obj.clickable = true;
          if (obj.info.nobracket) obj.nobracket = true;
        }
        obj.translation = get.skillInfoTranslation(skill);
        obj.translationSource = lib.translate[skill + '_info'];
        obj.translationAppend = lib.translate[skill + '_append'];
        if (obj.info && obj.info.enable) {
          obj.type = 'enable';
        } else {
          obj.type = 'trigger';
        }
        return obj;
      },
    },
    listen: function(node, func) {
      node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', func);
      return function() {
        node.removeEventLisnter(lib.config.touchscreen ? 'touchend' : 'click', func);
      };
    },
    mockTouch: function(node) {
      var event = new Event(lib.config.touchscreen ? 'touchend' : 'click');
      node.dispatchEvent(event);
      return node;
    },
    // nextTick: function(func, time) {
      // var funcs;
      // if (Array.isArray(func)) funcs = func;
      // else funcs = [func];
      // var next = function() {
        // var item = funcs.shift();
        // if (item) {
          // setTimeout(function() {
            // item();
            // next();
          // }, time || 0);
        // }
      // };
      // next();
    // },
  };
  
      // if (lib.config.dev) {
        window.app = app;
      // }
		
	// 自动牌序功能，从lbtn/main.js移至此处
	if (lib.config.ssuispzdpx!='off') {
		// content: function () {中排序函数魔改自lbtn/main.js中compare: {和paixu: function() {
		lib.skill._ssuispzdpx = {
			trigger:{
				player:"gainAfter",
			},
			direct: true,
			charlotte: true,
			firstDo: true,
			priority: Infinity,
			filter: function (event, player) {
				// 适配新版本体
				return player==game.me&&!player.hasSkillTag("noSortCard")&&(lib.config.ssuispzdpx=='shunxu1'||lib.config.ssuispzdpx=='shunxu2'||lib.config.ssuispzdpx=='shunxu3'||lib.config.ssuispzdpx=='shunxu4'||lib.config.ssuispzdpx=='shunxu5'||lib.config.ssuispzdpx=='shunxu6')
			},
			content: function () {
				var compare = {
					type: function(a, b) {
					if (a === b) return 0;
						if(lib.config.ssuispzdpx=='shunxu1'){
							var types = ['basic', 'trick', 'delay', 'equip'].addArray([a, b]);
						}
						if(lib.config.ssuispzdpx=='shunxu2'){
							var types = ['basic', 'equip', 'trick', 'delay'].addArray([a, b]);
						}
						if(lib.config.ssuispzdpx=='shunxu3'){
							var types = ['trick', 'delay', 'basic', 'equip'].addArray([a, b]);
						}
						if(lib.config.ssuispzdpx=='shunxu4'){
							var types = ['trick', 'delay', 'equip', 'basic'].addArray([a, b]);
						}
						if(lib.config.ssuispzdpx=='shunxu5'){
							var types = ['equip', 'basic', 'trick', 'delay'].addArray([a, b]);
						}
						if(lib.config.ssuispzdpx=='shunxu6'){
							var types = ['equip', 'trick', 'delay', 'basic'].addArray([a, b]);
						}
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
				};
				
				// if (!game.me) return;
				// var cards = game.me.getCards('hs');
				// 若想将特殊区域内的牌（如木牛流马等）加入排序则启用上一行代码，注释掉下一行代码
				var cards = game.me.getCards('h');
				if (!cards.reverse().length) return;
				
				// var same;
				// if (plugin._paixu && plugin._paixu.length) {
					// same = true;
					// if (plugin._paixu.length !== cards.length) {
					// same = false;
					// } else {
					// for (var i = 0; i < plugin._paixu.length; i++) {
						// if (cards[i] !== plugin._paixu[i]) {
						// console.info(cards[i], plugin._paixu[i], i);
						// same = false;
						// break;
						// }
					// }
					// }
				// }
				
				// if (same) {
					// cards = cards.reverse();
				// } else {
					var compares = ['type', 'name', 'nature', 'suit', 'number'];
					cards.sort(function (a, b) {
					for (var i = 0; i < compares.length; i++) {
						var value1 = get[compares[i]](a);
						var value2 = get[compares[i]](b);
						if (value2 !== value1) {
						return compare[compares[i]](value2, value1);
						}
					}
					return 0;
					});
				// }

				cards.forEach(function(item) {
				  item.goto(ui.special);
				});
				game.me.directgain(cards, false);
				// ui.updatehl();
				// plugin._paixu = cards;
			},
		};
	}
   
  // 身份提示功能，从lbtn/main.js移至此处
  game.ui_identityShow_update=function(){
    var identityShow=game.ui_identityShow;
    var str='';
    if(lib.config.mode=='guozhan'||(lib.config.mode=='versus'&&get.config('versus_mode')=='siguo')||(lib.config.mode=='versus'&&get.config('versus_mode')=='jiange')){
      // var list=['unknown'].concat(lib.group);
      // for(var i=0;i<list.length;i++){
        // var num=game.countPlayer(function(current){
          // return current.identity==list[i];
        // });
        // if(num) str+=get.translation(list[i])+' x '+num+'  '
      // }
	  var unknown=game.countPlayer(function(current){
        return current.identity=='unknown';
      })
      var wei=game.countPlayer(function(current){
        return current.identity=='wei';
      })
      var shu=game.countPlayer(function(current){
        return current.identity=='shu';
      })
      var wu=game.countPlayer(function(current){
        return current.identity=='wu';
      })
      var qun=game.countPlayer(function(current){
        return current.identity=='qun';
      })
	  var jin=game.countPlayer(function(current){
        return current.identity=='jin';
      })
	  var western=game.countPlayer(function(current){
        return current.identity=='western';
      })
      var ye=game.countPlayer(function(current){
        return current.identity=='ye';
      })
	  var key=game.countPlayer(function(current){
        return current.identity=='key';
      })
	  var key1=game.countPlayer(function(current){
        return current.identity=='夏';
      })
	  var key2=game.countPlayer(function(current){
        return current.identity=='商';
      })
	  var key3=game.countPlayer(function(current){
        return current.identity=='周';
      })
	  var key4=game.countPlayer(function(current){
        return current.identity=='秦';
      })
	  var key5=game.countPlayer(function(current){
        return current.identity=='汉';
      })
	  var key6=game.countPlayer(function(current){
        return current.identity=='隋';
      })
	  var key7=game.countPlayer(function(current){
        return current.identity=='唐';
      })
	  var key8=game.countPlayer(function(current){
        return current.identity=='宋';
      })
	  var key9=game.countPlayer(function(current){
        return current.identity=='辽';
      })
	  var key10=game.countPlayer(function(current){
        return current.identity=='金';
      })
	  var key11=game.countPlayer(function(current){
        return current.identity=='元';
      })
	  var key12=game.countPlayer(function(current){
        return current.identity=='明';
      })
	  if(unknown>0) str+='<font color="#FFFFDE">'+get.translation('unknown')+'</font> x '+unknown+'  ';
	  if(wei>0) str+='<font color="#0075FF">'+get.translation('wei')+'</font> x '+wei+'  ';
	  if(shu>0) str+='<font color="#ff0000">'+get.translation('shu')+'</font> x '+shu+'  ';
	  if(wu>0) str+='<font color="#00ff00">'+get.translation('wu')+'</font> x '+wu+'  ';
	  if(qun>0) str+='<font color="#ffff00">'+get.translation('qun')+'</font> x '+qun+'  ';
	  if(jin>0) str+='<font color="#9e00ff">'+get.translation('jin')+'</font> x '+jin+'  ';
	  if(western>0) str+='<font color="#9e00ff">'+get.translation('western')+'</font> x '+western+'  ';
	  if(ye>0) str+='<font color="#9e00ff">'+get.translation('ye')+'</font> x '+ye+'  ';
	  if(key>0) str+='<font color="#9e00ff">'+get.translation('key')+'</font> x '+key+'  ';
	  if(key1>0) str+='<font color="#9e00ff">'+'夏'+'</font> x '+key1+'  ';
	  if(key2>0) str+='<font color="#9e00ff">'+'商'+'</font> x '+key2+'  ';
	  if(key3>0) str+='<font color="#9e00ff">'+'周'+'</font> x '+key3+'  ';
	  if(key4>0) str+='<font color="#9e00ff">'+'秦'+'</font> x '+key4+'  ';
	  if(key5>0) str+='<font color="#9e00ff">'+'汉'+'</font> x '+key5+'  ';
	  if(key6>0) str+='<font color="#9e00ff">'+'隋'+'</font> x '+key6+'  ';
	  if(key7>0) str+='<font color="#9e00ff">'+'唐'+'</font> x '+key7+'  ';
	  if(key8>0) str+='<font color="#9e00ff">'+'宋'+'</font> x '+key8+'  ';
	  if(key9>0) str+='<font color="#9e00ff">'+'辽'+'</font> x '+key9+'  ';
	  if(key10>0) str+='<font color="#9e00ff">'+'金'+'</font> x '+key10+'  ';
	  if(key11>0) str+='<font color="#9e00ff">'+'元'+'</font> x '+key11+'  ';
	  if(key12>0) str+='<font color="#9e00ff">'+'明'+'</font> x '+key12+'  ';
    }
	else if(lib.config.mode=='versus'&&get.config('versus_mode')=='two'){
	  var enemy=game.countPlayer(function(current){
        return current.isEnemyOf(game.me);
      })
      var friend=game.countPlayer(function(current){
        return current.isFriendOf(game.me);
      })
	  if(enemy>0) str+='<font color="#ff0000">'+'敌'+'</font> x '+enemy+'  ';
	  if(friend>0) str+='<font color="#00ff00">'+'友'+'</font> x '+friend+'  ';
    }
	else if(lib.config.mode=='versus'&&get.config('versus_mode')=='three'){
		// 暖色
		var zhu1=game.countPlayer(function(current){
        return game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhu';
      })
      var zhong1=game.countPlayer(function(current){
        return game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhong';
      })
		var zhu2=game.countPlayer(function(current){
        return game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhu';
      })
      var zhong2=game.countPlayer(function(current){
        return game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhong';
      })
		if(zhu1>0) str+='<font color="#ff0000">'+'帅'+'</font> x '+zhu1+'  ';
		if(zhong1>0) str+='<font color="#ff0000">'+'锋'+'</font> x '+zhong1+'  ';
		if(zhu2>0) str+='<font color="#0075FF">'+'帅'+'</font> x '+zhu2+'  ';
		if(zhong2>0) str+='<font color="#0075FF">'+'锋'+'</font> x '+zhong2+'  ';
		// 冷色
		var zhu3=game.countPlayer(function(current){
        return !game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhu';
      })
      var zhong3=game.countPlayer(function(current){
        return !game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhong';
      })
		var zhu4=game.countPlayer(function(current){
        return !game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhu';
      })
      var zhong4=game.countPlayer(function(current){
        return !game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhong';
      })
		if(zhu3>0) str+='<font color="#ff0000">'+'帅'+'</font> x '+zhu3+'  ';
		if(zhong3>0) str+='<font color="#ff0000">'+'锋'+'</font> x '+zhong3+'  ';
		if(zhu4>0) str+='<font color="#0075FF">'+'帅'+'</font> x '+zhu4+'  ';
		if(zhong4>0) str+='<font color="#0075FF">'+'锋'+'</font> x '+zhong4+'  ';
    }
	else if(lib.config.mode=='versus'&&(get.config('versus_mode')=='four'||get.config('versus_mode')=='guandu')){
		// 暖色
		var zhu1=game.countPlayer(function(current){
        return game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhu';
      })
      var zhong1=game.countPlayer(function(current){
        return game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhong';
      })
		var zhu2=game.countPlayer(function(current){
        return game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhu';
      })
      var zhong2=game.countPlayer(function(current){
        return game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhong';
      })
		if(zhu1>0) str+='<font color="#ff0000">'+get.translation('zhu')+'</font> x '+zhu1+'  ';
		if(zhong1>0) str+='<font color="#ff0000">'+get.translation('zhong')+'</font> x '+zhong1+'  ';
		if(zhu2>0) str+='<font color="#0075FF">'+get.translation('zhu')+'</font> x '+zhu2+'  ';
		if(zhong2>0) str+='<font color="#0075FF">'+get.translation('zhong')+'</font> x '+zhong2+'  ';
		// 冷色
		var zhu3=game.countPlayer(function(current){
        return !game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhu';
      })
      var zhong3=game.countPlayer(function(current){
        return !game.me.side&&current.isEnemyOf(game.me)&&current.identity=='zhong';
      })
		var zhu4=game.countPlayer(function(current){
        return !game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhu';
      })
      var zhong4=game.countPlayer(function(current){
        return !game.me.side&&current.isFriendOf(game.me)&&current.identity=='zhong';
      })
		if(zhu3>0) str+='<font color="#ff0000">'+get.translation('zhu')+'</font> x '+zhu3+'  ';
		if(zhong3>0) str+='<font color="#ff0000">'+get.translation('zhong')+'</font> x '+zhong3+'  ';
		if(zhu4>0) str+='<font color="#0075FF">'+get.translation('zhu')+'</font> x '+zhu4+'  ';
		if(zhong4>0) str+='<font color="#0075FF">'+get.translation('zhong')+'</font> x '+zhong4+'  ';
    }
    else{
      var zhu=game.countPlayer(function(current){
        return current.identity=='zhu'||current.identity=='rZhu'||current.identity=='bZhu';
      })
      var zhong=game.countPlayer(function(current){
        return current.identity=='zhong'||current.identity=='rZhong'||current.identity=='bZhong'||current.identity=='mingzhong';
      })
      var fan=game.countPlayer(function(current){
        return current.identity=='fan'||current.identity=='rYe'||current.identity=='bYe';
      })
      var nei=game.countPlayer(function(current){
        return current.identity=='nei'||current.identity=='rNei'||current.identity=='bNei';
      })
      var commoner=game.countPlayer(function(current){
        return current.identity=='commoner';
      })
	  if(lib.config.mode=='doudizhu'){
		if(zhu>0) str+='<font color="#ff0000">'+'主'+'</font> x '+zhu+'  ';
		if(fan>0) str+='<font color="#00ff00">'+'农'+'</font> x '+fan+'  ';
	  }
	  else if(lib.config.mode=='single'){
		  if(zhu>0) str+='<font color="#ff0000">'+'先'+'</font> x '+zhu+'  ';
		  if(fan>0) str+='<font color="#00ff00">'+'后'+'</font> x '+fan+'  ';
	  }
	  else if(lib.config.mode=='boss'){
      var cai=game.countPlayer(function(current){
        return current.identity=='cai';
      })
		  if(zhu>0) str+='<font color="#ff0000">'+get.translation('zhu')+'</font> x '+zhu+'  ';
		  if(zhong>0) str+='<font color="#ffff00">'+'从'+'</font> x '+zhong+'  ';
		  if(cai>0) str+='<font color="#0075FF">'+get.translation('cai')+'</font> x '+cai+'  ';
	  }
	  else if(lib.config.mode=='identity'&&get.config('identity_mode')=='purple'){
	  if(zhu>0) str+='<font color="#ff0000">'+get.translation('zhu')+'</font> x '+zhu+'  ';
		if(zhong>0) str+='<font color="#ffff00">'+'锋'+'</font> x '+zhong+'  ';
		if(nei>0) str+='<font color="#9e00ff">'+get.translation('nei')+'</font> x '+nei+'  ';
        if(fan>0) str+='<font color="#9e00ff">'+'野'+'</font> x '+fan+'  ';
      }
	  else{
		if(zhu>0) str+='<font color="#ff0000">'+get.translation('zhu')+'</font> x '+zhu+'  ';
		if(zhong>0) str+='<font color="#ffff00">'+get.translation('zhong')+'</font> x '+zhong+'  ';
		if(fan>0) str+='<font color="#00ff00">'+get.translation('fan')+'</font> x '+fan+'  ';
		if(nei>0) str+='<font color="#9e00ff">'+get.translation('nei')+'</font> x '+nei+'  ';
		if(commoner>0) str+='<font color="#909090">'+get.translation('commoner')+'</font> x '+commoner+'  ';
      }
	}
    str+='<br>'+get.translation(game.me.identity+'_win_option');
    identityShow.innerHTML='<span style="font-family:shousha; font-size: 15px; color: #FFFFDE; -webkit-text-stroke:0px #000000; text-shadow:1px 1px 1px #000000">'+str+'</span>';
  }
  game.ui_identityShow_init=function(){
    if(game.ui_identityShow==undefined){
		if(lib.config.mode=='brawl'){
			game.ui_identityShow=ui.create.div('','请选择子游戏模式');
		}else{
      game.ui_identityShow=ui.create.div('','身份加载中......');
	  }
      game.ui_identityShow.style.top='calc(-1% - 0.5px)';
      game.ui_identityShow.style.left='40px';
      ui.arena.appendChild(game.ui_identityShow);
    }
  }
  lib.arenaReady.push(function(){
    if(lib.config.mode=='identity'||lib.config.mode=='doudizhu'||lib.config.mode=='single'||lib.config.mode=='boss'||lib.config.mode=='guozhan'||(lib.config.mode=='versus'&&get.config('versus_mode')=='two')||(lib.config.mode=='versus'&&get.config('versus_mode')=='three')||(lib.config.mode=='versus'&&(get.config('versus_mode')=='four'||get.config('versus_mode')=='guandu'))||(lib.config.mode=='versus'&&get.config('versus_mode')=='siguo')||(lib.config.mode=='versus'&&get.config('versus_mode')=='jiange')||lib.config.mode=='brawl'){
      if(lib.config.mode=='doudizhu'){
        //斗地主
        var translate={
          zhu:'击败农民',
          fan:'击败地主',
          undefined:'未选择阵营',
        }
      }
	  else if(lib.config.mode=='single'){
	     //单挑
        var translate={
          zhu:'击败对手',
          fan:'击败对手',
          undefined:'未选择阵营',
        }
	  }
	  else if(lib.config.mode=='boss'){
	     //挑战
        var translate={
          zhu:'击败盟军',
          zhong:'协助击败盟军',
          cai:'击败神祇',
          undefined:'未选择阵营',
        }
	  }
      else if(lib.config.mode=='guozhan'){
        //国战
        var translate={
          undefined:'未选择势力',
          unknown:'保持隐蔽',
          ye:'击败场上<br>所有其他角色',
		  western:'击败所有<br>非西势力角色',
		  key:'击败所有<br>非键势力角色',
		  夏:'击败所有<br>非夏势力角色',
		  商:'击败所有<br>非商势力角色',
		  周:'击败所有<br>非周势力角色',
		  秦:'击败所有<br>非秦势力角色',
		  汉:'击败所有<br>非汉势力角色',
		  隋:'击败所有<br>非隋势力角色',
		  唐:'击败所有<br>非唐势力角色',
		  宋:'击败所有<br>非宋势力角色',
		  辽:'击败所有<br>非辽势力角色',
		  金:'击败所有<br>非金势力角色',
		  元:'击败所有<br>非元势力角色',
		  明:'击败所有<br>非明势力角色',
        }
        for(var i=0;i<lib.group.length;i++){
          translate[lib.group[i]]='击败所有<br>非'+get.translation(lib.group[i])+'势力角色';
        }
      }
      else if(lib.config.mode=='identity'&&get.config('identity_mode')=='purple'){
        //身份-3v3v2
        var translate={
          rZhu:'击败冷方主帅<br>与所有野心家',
          rZhong:'保护暖方主帅<br>击败冷方主帅<br>与所有野心家',
          rYe:'联合冷方野心家<br>击败其他角色',
          rNei:'协助冷方主帅<br>击败暖方主帅<br>与所有野心家',
          bZhu:'击败暖方主帅<br>与所有野心家',
          bZhong:'保护冷方主帅<br>击败暖方主帅<br>与所有野心家',
          bYe:'联合暖方野心家<br>击败其他角色',
          bNei:'协助暖方主帅<br>击败冷方主帅<br>与所有野心家',
        }
      }
	  else if(lib.config.mode=='versus'&&get.config('versus_mode')=='two'&&!get.config('replace_character_two')){
        //对决-欢乐成双
        var translate={
          undefined:'协同队友<br>击败所有敌人',
        }
      }
      else if(lib.config.mode=='versus'&&get.config('versus_mode')=='two'&&get.config('replace_character_two')){
        //对决-欢乐成双（替补模式）
        var translate={
          undefined:'抢先击败敌人<br>所有上场角色',
        }
      }
	  else if(lib.config.mode=='versus'&&get.config('versus_mode')=='three'){
        //对决-统率三军
        var translate={
          zhu:'统率己方前锋<br>抢先击败对方主帅',
          zhong:'保护己方主帅<br>抢先击败对方主帅',
        }
      }
	  else if(lib.config.mode=='versus'&&(get.config('versus_mode')=='four'||get.config('versus_mode')=='guandu')){
        //对决-对抗、官渡
        var translate={
          zhu:'协同己方忠臣<br>击败对方主公',
          zhong:'保护己方主公<br>击败对方主公',
        }
      }
      else if(lib.config.mode=='versus'&&get.config('versus_mode')=='jiange'){
        //对决-剑阁
        var translate={
          	wei:'击败所有<br>蜀势力角色',
          	shu:'击败所有<br>魏势力角色',
        }
      }
       else if(lib.config.mode=='versus'&&get.config('versus_mode')=='siguo'){
        //对决-四国（同舟共济）
        var translate={
        
        }
        for(var i=0;i<lib.group.length;i++){
          translate[lib.group[i]]='夺得龙船或击败<br>非'+get.translation(lib.group[i])+'势力角色';
        }
      }
	  else if(lib.config.mode=='brawl'){
        //乱斗（待完善，需先根据乱斗的子游戏模式选择并设置好对应的身份/国战/对决的子游戏模式）
        var translate={
          zhu:'推测场上身份<br>击败反贼内奸',
          zhong:'保护主公<br>取得最后胜利',
          fan:'找出反贼队友<br>全力击败主公',
          nei:'找出反贼忠臣<br>最后击败主公',
		  mingzhong:'保护主公<br>取得最后胜利',
		  commoner:'保护好自己<br>共同取得胜利',
          rZhu:'击败冷方主帅<br>与所有野心家',
          rZhong:'保护暖方主帅<br>击败冷方主帅<br>与所有野心家',
          rYe:'联合冷方野心家<br>击败其他角色',
          rNei:'协助冷方主帅<br>击败暖方主帅<br>与所有野心家',
          bZhu:'击败暖方主帅<br>与所有野心家',
          bZhong:'保护冷方主帅<br>击败暖方主帅<br>与所有野心家',
          bYe:'联合暖方野心家<br>击败其他角色',
          bNei:'协助暖方主帅<br>击败冷方主帅<br>与所有野心家',
          unknown:'保持隐蔽',
          ye:'击败场上<br>所有其他角色',
		  key:'击败所有<br>非键势力角色',
          undefined:'乱斗模式',
        }
        for(var i=0;i<lib.group.length;i++){
          translate[lib.group[i]]='击败所有<br>非'+get.translation(lib.group[i])+'势力角色';
        }
      }
      else{
        //身份-标准、明忠、谋攻
        var translate={
          zhu:'推测场上身份<br>击败反贼内奸',
          zhong:'保护主公<br>取得最后胜利',
          fan:'找出反贼队友<br>全力击败主公',
          nei:'找出反贼忠臣<br>最后击败主公',
		  mingzhong:'保护主公<br>取得最后胜利',
		  commoner:'保护好自己<br>共同取得胜利',
		  undefined:'胜利条件',
        }
      }
      for(var i in translate){
        lib.translate[i+'_win_option']=translate[i];
      }
      game.ui_identityShow_init();
      setInterval(function(){
		if(game.me){
          game.ui_identityShow_update();
		}
      },1000);
    }
  });

// 房间号显示功能，从lbtn/main.js移至此处
  // var head = ui.create.node('img');
			// head.src= lib.assetURL + "extension/手杀ui/lbtn/images/button.png"
			// head.style.cssText="display: block;width: 105px;height: 81px;position: absolute;top: 0px;right: 0px;background-color: transparent;z-index:1"

		// head.onclick = function() {
				// head.remove()
				// if(!ui.click.configMenu) return;
				// game.closePopped();
				// game.pause2();
				// ui.click.configMenu();
				// ui.system1.classList.remove('shown');
				// ui.system2.classList.remove('shown');
			// }
		    // document.body.appendChild(head);
		    
  	// var head = ui.create.node('div');
			// head. innerText="房间号:"
            // head.style.cssText="display: block;position: absolute;top: 100px;right: 135px;font-size:18px;font-family:shousha;background-color: transparent;z-index:1; text-shadow: black 1px 1px 3px, black 1px -1px 3px,black -1px 1px 3px, black -1px -1px 3px;"
		    // document.body.appendChild(head);
	
	// var head = ui.create.node('div');
			// head. innerText="无名杀扩展交流"
            // head.style.cssText="display: block;position: absolute;top: 102px;right: 15px;font-size:15px;font-family:shousha;color:#CCBBAB;background-color: transparent;text-shadow:1px 1px 1px #000000;z-index:1"
		    // document.body.appendChild(head);	    
    // var head = ui.create.node('img');
			// head.src= lib.assetURL + "extension/手杀ui/lbtn/images/shenfen.png"
			// head.style.cssText="display: block;width: 350px;height: 46px;position: absolute;top: -4px;left: -50px;background-color: transparent;z-index:-1"

		    // document.body.appendChild(head);
		    
        /*var head = ui.create.node('img');
			head.src= lib.assetURL + "extension/手杀ui/lbtn/images/auto.png"
			head.style.cssText="display: block;width: 120px;height: 88px;position: absolute;bottom: 0px;left: 0%;background-color: transparent;z-index:3"
			head.onclick = function() {
				 head.onclick=ui.click.auto;
			}
		    document.body.appendChild(head);
		    
*/

		
		// FPS显示，搬运自扩展ol
		game.ssui_showFps=function(id){
			var requestAnimationFrame=window.requestAnimationFrame||
			window.webkitRequestAnimationFrame||
			window.mozRequestAnimationFrame||
			window.oRequestAnimationFrame||
			window.msRequestAnimationFrame||
			function(callback){
				window.setTimeout(callback,1000/60);
			};
			var div;
			if(document.getElementById(id)==undefined){
				// div=document.createElement('div');
				div=ui.create.div('.ssui_showFps', ui.arena);
				div.setAttribute('id','ssui_showFps');
				// div.style.zIndex=999;
				div.style['pointer-events']='none';
				div.style.right='220px';
				div.style.top='-5.8px';
				// ui.window.appendChild(div);
			}else{
				div=document.getElementById(id);
			};
			var fps=0;
			var last=Date.now();
			var offset;
			var step=function(){
				offset=Date.now()-last;
				fps+=1;
				if(offset>=1000){
					last+=offset;
					if(fps>60) fps=60;
					div.innerHTML='FPS:'+fps;
					fps=0;
				}
				requestAnimationFrame(step);
			};
			step();
		};
		lib.arenaReady.push(function(){
			if(lib.config.ssuishowFPS){
				game.ssui_showFps('document.getElementById(id)');
			};
		});
	
	//阶段提示框架（俺杀）
    //自定义播放图片
    game.as_showImage=function(url,pos,time){
        if(!url) return false;
		/*
		笨办法（已放弃）：增加识别手机端和电脑端设备判断，从而调整对应位置
		<br>建议使用2-17人扩展，并在这些界面缩放比例下开启本选项（其他界面缩放比例下阶段提示的大小位置存在偏差）：<br>▶手机-界面缩放95%<br>▶手机-界面缩放90%<br>▶电脑-全屏-界面缩放135%<br>▶电脑-非全屏（最大化）-界面缩放130%<br>▶电脑-非全屏（最大化）-界面缩放95%
        if(!pos||!Array.isArray(pos)){
			if (lib.device) {
				// 手机端
				if (lib.config.ui_zoom == 'normalh') {//手机-界面缩放90%
					pos=[93.78,56,6.632,6.632];
				} else {
					pos=[93.46,53.7,7,7];//手机-界面缩放95%
				}
			} else {
				// 电脑端
				if (lib.config.ui_zoom == 'normala') {//电脑-非全屏（最大化）-界面缩放130%
					pos=[93.69,60.19,6.74,6.74];
				} else if (lib.config.ui_zoom == 'normalg') {//电脑-非全屏（最大化）-界面缩放95%
					pos=[95.4,70.8,4.926,4.926];
				} else {
					pos=[93.45,61.28,7,7];//电脑-全屏-界面缩放135%
				}
			}
        }
        if(!time||isNaN(time)) time=3;
        if(_status.as_showImage){
            _status.as_showImage.remove();
            delete _status.as_showImage;
        }
        
        var div=ui.create.div('','',ui.arena);
        div.style.cssText='z-index:-1; left:'+(pos[0]+pos[2]/2)+'%; top:'+pos[1]+'%; width:0%; height:'+pos[3]+'%; position:absolute; background-size:100% 100%; background-position:center center; background-image:url('+lib.assetURL+url+'); transition-property:all; transition-duration:1';
        _status.as_showImage=div;
        
        setTimeout(function(){
            div.style.left=pos[0]+'%';
            div.style.width=pos[2]+'%';
        },1);
		*/
		// 新办法：参考EngEX扩展添加侍灵按钮的方法
		if(!time||isNaN(time)) time=3;
		if(_status.as_showImage){
			_status.as_showImage.remove();
			delete _status.as_showImage;
		}
		var div=ui.create.div('','',ui.arena);
		div.style.cssText='z-index:1; left:calc(50% - 12px); bottom:111%; width:24px; height:34px; position:absolute; display:block; background-size:100% 100%; background-image:url('+lib.assetURL+url+'); transition-property:all; transition-duration:1';
		var shoushaUI = document.getElementsByClassName("lbtn-controls");
		div.classList.add("lbtn-control");
		shoushaUI[0].firstChild.appendChild(div);
		_status.as_showImage=div;
		setTimeout(function(){
			div.style.left='calc(50% - 33px)';
			div.style.width='66px';
		},1);
		
        setTimeout(function(){
            if(_status.as_showImage){
                _status.as_showImage.remove();
                delete _status.as_showImage;
            }
        },time*1000);
        
        return true;
    };

game.as_removeImage=function(){
        if(_status.as_showImage){
            _status.as_showImage.remove();
            delete _status.as_showImage;
        }
    }	

    },
    config: {
		ssuigxsm: {
			name:'<div class="hth_menu">▶更新说明（点击后展开）</div>',
			clear:true,
			onclick:function(){
				if(this.hth_more==undefined){
					var more=ui.create.div('.hth_more',
					'<div style="border: 0px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
					'前一次魔改：꧁꫞꯭✨fly✨꯭꫞꧂<br><br>本次魔改：棘手怀念摧毁（暂时没有得到原作者允许）（新版更新内容已得到无中一无中的修改许可）<br>重点参考（搬运）：꧁꫞꯭✨fly✨꯭꫞꧂魔改版、尋魔改版、零二魔改版和萌新（转型中）修复版等'+
					'<br>'+
					'<br>棘手怀念摧毁（主要）更新内容'+
					'<br>- 本魔改特色：手杀UI界面左手布局。'+
					'<br>PS：新版十周年、右手布局或其他样式可自行寻找其他魔改版本替换（替换是删除原目录内的所有文件，再将新的文件复制进去，而不是直接覆盖；另外扩展更新亦建议使用替换）。'+
					'<br>- 新增牌堆切换功能，通过设置卡牌包的开关切换牌堆，自动重启后生效。'+
					'<br>- 新增自动牌序选项，玩家获得手牌后，系统将按玩家选择的牌序对手牌自动排序（按照类型/牌名/属性/花色/点数自动整理手牌），即时生效。'+
					'<br>- 进度条与阶段提示（更新搬运）功能完善，包括增加烧条结束后是否托管选项（开启后可在游戏中切换，即时生效）、进度条会暂停烧条了（游戏暂停时、呼出菜单时、点击触屏按钮后、查看武将资料卡时、长按/右键弹出菜单显示信息时等）、进度条与阶段提示触发时机调整、阶段提示适配界面缩放等。'+
					'<br>- 新增FPS显示开关，搬运自扩展ol（作者Aurora表示代码是公开的，谁都可以借用，无需征得修改许可），FPS字体上色。'+
					'<br>- 初始启动页设置（手机端：选项-外观-启动页-样式二，电脑端：选项-外观-启动页-样式一）。'+
					'<br>- 完善身份提示功能，包括国战模式势力着色，身份启用平民，身份-明忠、身份-3v3v2、对决-对抗、对决-统率、对决-欢乐（含替补模式）、对决-官渡、对决-剑阁、对决-四国（同舟共济）、挑战、斗地主、单挑、乱斗（待完善，需先根据乱斗的子游戏模式选择并设置好对应的身份/国战/对决的子游戏模式）等模式的存活角色身份数量提示和胜利条件提示，其他扩展新增的游戏模式可参考魔改记录自行添加身份提示。'+
					'<br>- 右下角点击切换托管的聊天按钮（聊天气泡图标）在游戏托管后会变灰了。'+
					'<br>- 右上角点击牌堆图标可打开记牌器了（可统计牌堆/弃牌堆，点击标题切换）；记牌器功能搬运自本体 添加记牌器 by Curpond。'+
					'<br>- 重写布局、CSS样式修改：增加识别手机端和电脑端设备判断，从而调整位置，适配不同客户端的不同缩放比例；适配出牌记录栏、改善图层显示效果等；包括问号图片、加号图片、进度条、阶段提示、FPS显示等。'+
					'<br>- 参考SJ Settings扩展实现避免提示是否下载图片和字体素材（后续一步到位懒人包更新无需再魔改本体）。'+
					// '<br>- 适配新版本体：参考【本体game/game.js】进行修复，笨办法：函数覆写，延时调用（可自行调整时间，保证加载到位）。'+
					'<br>- 手杀ui更新搬运（无中一无中）：包括修复国战模式无法在暗置时使用技能的bug（感谢明月栖木）、修复技能不显示的bug（感谢萌新（转型中））等。'+
					'<br>- 素材（含自绘）补充/替换/更改/删减。'+
					'<br>- 新增本【更新说明】折叠选项，可更方便地展开与折叠查看；扩展设置选项分类调整。'+
					'<br>- 其他魔改内容（和bug修复）略。'+
					'<br>'+
					'<br>注意：目前，棘手怀念摧毁魔改的十周年UI与手杀ui属于捆绑销售，需要同时打开两个扩展，才能实现效果图的样子。'+
					'<br>更详细的更新说明请参看懒人包中棘手怀念摧毁写的【自用版手杀UI魔改记录——从入门到放弃.pdf】。'+
					'<br>'
					);
					this.parentNode.insertBefore(more,this.nextSibling);
					this.hth_more=more;
					this.innerHTML='<div class="hth_menu">▼更新说明（点击后折叠）</div>';
				}
				else{
					this.parentNode.removeChild(this.hth_more);
					delete this.hth_more;
					this.innerHTML='<div class="hth_menu">▶更新说明（点击后展开）</div>';
				};
			},
		},
		"paiduiqiehuan":{
			"name":"牌堆切换",
			"intro":"通过设置卡牌包的开关切换牌堆，自动重启后生效。<br>▶军争篇（161张） 开启标准、军争<br>▶应变篇（161张） 开启应变篇、关闭标准和军争<br>▶用间篇（160张） 开启用间篇和标准、关闭军争<br>▶标准版（108张，含标准版EX卡牌4张） 开启标准、关闭军争",
			"init":lib.config.paiduiqiehuan === undefined ? "junzheng" : lib.config.paiduiqiehuan,
			"item": {
				"junzheng":"军争篇（161张）",
				"yingbian":"应变篇（161张）",
				"yongjian":"用间篇（160张）",
				"standard":"标准版（108张）",
			},
			onclick:function(item){
				game.saveConfig('extension_手杀ui_paiduiqiehuan',item);
				game.saveConfig('paiduiqiehuan',item);
				if(item == 'junzheng'){
					var list=['standard','extra'];game.saveConfig('cards',list);game.reload();
				}
				if(item == 'yingbian'){
					var list=['yingbian'];game.saveConfig('cards',list);game.reload();
				}
				if(item == 'yongjian'){
					var list=['standard','yongjian'];game.saveConfig('cards',list);game.reload();
				}
				if(item == 'standard'){
					var list=['standard'];game.saveConfig('cards',list);game.reload();
				}
			},
		},
		"ssuispzdpx":{
			"name":"自动牌序",
			"intro":"玩家获得手牌后，系统将按玩家选择的牌序对手牌自动排序（按照类型/牌名/属性/花色/点数自动整理手牌），即时生效。",
			"init":lib.config.ssuispzdpx === undefined ? "off" : lib.config.ssuispzdpx,
			"item": {
				"off":"关闭",
				"shunxu1":"牌序1-基本锦囊装备",
				"shunxu2":"牌序2-基本装备锦囊",
				"shunxu3":"牌序3-锦囊基本装备",
				"shunxu4":"牌序4-锦囊装备基本",
				"shunxu5":"牌序5-装备基本锦囊",
				"shunxu6":"牌序6-装备锦囊基本",
			},
			onclick:function(item){
				game.saveConfig('ssuispzdpx',item);
				game.saveConfig('extension_手杀ui_ssuispzdpx',item);
			}
		},
		"jindutiao": {
			"name": "进度条(回合内)",
			"intro": "自己回合内显示进度条，可选择烧条结束后是否托管，手动重启后生效。<br>注意：开启后可在游戏中切换烧条结束后是否托管，即时生效。",
			"init":lib.config.jindutiao === undefined ? "off" : lib.config.jindutiao,
			"item": {
				"off":"关闭",
				"jieshutg":"烧条结束托管",
				"jieshubtg":"烧条结束不托管",
			},
			onclick:function(item){
				game.saveConfig('extension_手杀ui_jindutiao',item);
				game.saveConfig('jindutiao',item);
			},
		},
		JDTS: {
			name: "阶段提示(回合内)",
			intro: "自己回合内显示对应阶段图片提示，手动重启后生效。",
			init: false,
		},
		"ssuishowFPS":{
			"name":"FPS显示",
			"intro":"开启后在屏幕右上角位置显示FPS，手动重启后生效（搬运自扩展ol）。",
			"init":lib.config.ssuishowFPS === undefined ? false : lib.config.ssuishowFPS,
			onclick:function(item){
				game.saveConfig('ssuishowFPS',item);
				game.saveConfig('extension_手杀ui_ssuishowFPS',item);
			}
		},
	},

	package:{
    character:{
        character:{
        },
        translate:{
        }
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[]
    },
    skill:{
        skill:{
        },
        translate:{
        }
    },
    intro:"",
    author:"橙续缘<br>魔改：<span class='bluetext'>棘手怀念摧毁</span>",
    diskURL:"",
    forumURL:"",
    version:"",
	},
	
    // editable: false,
  };
});

/*
※手杀ui扩展

更新历史：
旧版更新内容：
感谢俺杀提供身份显示代码。感谢呲牙哥提供进度条代码。感谢风雪迷漫，喋血长歌等热心群友的帮助。
于9月15号补全游戏胜负条件提示。添加进度条功能开关。extension文件搜索进度条可自行更改时间。
新版更新内容：
于12月2日更新进度条样式（十周年）优化进度条读条方式（呲牙哥）。加入阶段提示小功能（俺杀）。
于12月4日更新进度条样式切换开关，（可以选择样式：十周年or手杀）优化进度条读条方式（呲牙哥）。完善阶段提示小功能（俺杀，某靓仔）。
于12月11日完善十周年游戏界面，添加整理手牌，换肤按钮（点击打开武将资料页）。特别感谢，大佬神秘喵提供技术指导。感谢群友【只叹年华未央】的热心帮助。新增一种阶段提示样式，现在提示可以自由切换了。新增一种进度条样式，可以在游戏中即时切换。优化进度条，和阶段提示，在游戏结束时会消失了。
2022年1月25日及以后更新内容：略。
*/