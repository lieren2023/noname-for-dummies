app.import(function(lib, game, ui, get, ai, _status, app) {
  var plugin = {
    name: 'skill',
    filter: function() {
		// 解除战棋/塔防/炉石模式不显示的限制
		return true
      // return !['chess', 'tafang', 'stone'].contains(get.mode());
    },
    content: function(next) {
      // app.waitAllFunction([
        // function(next) {
          // lib.init.css(lib.assetURL + 'extension/' + app.name + '/' + plugin.name, 'main', next);
        // },
      // ], next);
    },
    precontent: function() {

      Object.assign(ui.create, {
        skills: function(skills) {
          ui.skills = plugin.createSkills(skills, ui.skills);
          ui.skillControl.update();
          return ui.skills;
        },
        skills2: function(skills) {
          ui.skills2 = plugin.createSkills(skills, ui.skills2);
          ui.skillControl.update();
          return ui.skills2;
        },
        skills3: function(skills) {
          ui.skills3 = plugin.createSkills(skills, ui.skills3);
          ui.skillControl.update();
          return ui.skills3;
        },
        skillControl: function(clear) {
          if (!ui.skillControl) {
            var node = ui.create.div('.skill-control', ui.arena);
            node.node = {
              enable: ui.create.div('.enable', node),
              trigger: ui.create.div('.trigger', node),
            };
            for (var i in plugin.controlElement) {
              node[i] = plugin.controlElement[i];
            }
            ui.skillControl = node;
          }
          if (clear) {
            ui.skillControl.node.enable.innerHTML = '';
            ui.skillControl.node.trigger.innerHTML = '';
          }
          return ui.skillControl;
        },
      });

      Object.assign(ui, {
        updateSkillControl: function(player, clear) {
          var eSkills = player.getSkills('e', true, false).slice(0);
          // var skills = app.get.playerSkills(player);
		  // 修复国战模式无法在暗置时使用技能的bug（感谢明月栖木）
          var skills = app.get.playerSkills(player, true);
		// 修复搬运：魔改十周年 萌修版
		for (var i = 0; i < skills.length; i++) {
			var info = get.info(skills[i]);
			if (info&&info.nopop) skills.splice(i--, 1);
		}
		
		var iSkills = player.invisibleSkills.slice(0);
		game.expandSkills(iSkills);
		skills.addArray(iSkills.filter(function(skill){
			var info=get.info(skill);
			// return info&&info.enable;
			// 修复不显示被动技能的bug
			return info;
		}));
/*if (ui.skills2 && ui.skills2.skills.length) {
   var gSkills = ui.skills2.skills
          
        }*/
          /*for (var i = 0; i < skills.length; i++) {
            var info = lib.skill[skills[i]];
            if (!info || info.zhuSkill && !player.hasZhuSkill(skills[i])) {
              skills.splice(i--, 1);
            }
          }*/

          if (player === game.me) {
            var skillControl = ui.create.skillControl(clear);
            skillControl.add(skills, eSkills);
            /*if(gSkills) skillControl.add(gSkills);*/
            skillControl.update();
            game.addVideo('updateSkillControl', player, clear);
          }

          var juexingji = {};
          var xiandingji = {};
		// 修复搬运：魔改十周年 萌修版
          app.get.playerSkills(player).forEach(function (skill) {
            var info = get.info(skill);
            if (!info) return;
            if (info.zhuSkill && !player.hasZhuSkill(skill)) return;
            if (info.limited || (info.intro && info.intro.content === 'limited')) {
              xiandingji[skill] = player.awakenedSkills.contains(skill);
            }
            if (info.juexingji) juexingji[skill] = player.awakenedSkills.contains(skill);
          });
          
        },
      });

      app.reWriteFunction(lib.element.player, {
        addSkill: [null, function() {
          ui.updateSkillControl(this, true);
        }],
        removeSkill: [null, function() {
          ui.updateSkillControl(this, true);
        }],
        addSkillTrigger: [null, function() {
          ui.updateSkillControl(this, true);
        }],
        removeSkillTrigger: [null, function() {
          ui.updateSkillControl(this, true);
        }],
        awakenSkill: [null, function() {
          ui.updateSkillControl(this);
        }],
        restoreSkill: [null, function() {
          ui.updateSkillControl(this);
        }],
      });
      app.reWriteFunction(lib.element.control, {
        close: [null, function() {
          if (this.classList.contains('skillControl')) {
            ui.skillControl.update();
          }
        }],
      });

      app.reWriteFunction(game, {
        loop: [function () {
          if (game.boss && !ui.skillControl) {
            ui.updateSkillControl(game.me);
          }
          if (ui.skillControl) {
            ui.skillControl.update();
          }
        }, null],
        swapControl: [null, function() {
          ui.updateSkillControl(game.me, true);
        }],
        swapPlayer: [null, function () {
          ui.updateSkillControl(game.me, true);
        }],
      });

      Object.assign(game.videoContent, {
        updateSkillControl: function(player, clear) {
          ui.updateSkillControl(player, clear);
        },
      });
      ui.skillControlArea = ui.create.div();
    },
    controlElement: {
      add: function(skill, eSkills) {
        if (Array.isArray(skill)) {
          var node = this;
          skill.forEach(function(item) {
            node.add(item, eSkills);
          });
          return this;
        }

        var self = this;
        var skills = game.expandSkills([skill]).map(function(item) {
          return app.get.skillInfo(item);
        });
        var hasSame = false;
        var enableSkills = skills.filter(function(item) {
          if (item.type !== 'enable') return false;
          if (item.name === skills[0].name) hasSame = true;
          return true;
        });

        if (!hasSame) enableSkills.unshift(skills[0]);
        var showSkills = enableSkills.length ? enableSkills : skills;
        showSkills.forEach(function(item) {
          var node = self.querySelector('[data-id="' + item.id + '"]');
          if (node) return;
          if (item.type === 'enable') {
            node = ui.create.div('.skillitem', self.node.enable, item.name);
            node.dataset.id = item.id;
            app.listen(node, plugin.clickSkill);
            return;
          }
          if (!item.info) return;
          if (!item.translation) return;
          if (eSkills && eSkills.contains(item.id)) return;
          node = ui.create.div('.skillitem', self.node.trigger, item.name);
          node.dataset.id = item.id;
        });
        return this;
      },
      update: function() {
        var skills = [];
        if (ui.skills) skills.addArray(ui.skills.skills);
        if (ui.skills2) skills.addArray(ui.skills2.skills);
        if (ui.skills3) skills.addArray(ui.skills3.skills);
	
        Array.from(this.node.enable.childNodes).forEach(function(item) {
        
          if (skills.contains(item.dataset.id)) {
            item.classList.add('usable');
            
          } else {
            item.classList.remove('usable');
          }

          if (_status.event.skill === item.dataset.id) {
            item.classList.add('select');
          } else {
            item.classList.remove('select');
          }
        });
        
        ui.skillControl.node.enable.style.width = ui.skillControl.node.enable.childNodes.length > 2
          ? '160px' : ui.skillControl.node.enable.childNodes.length > 0
          ? '80px' : '0px';



        var level1 = Math.min(4, this.node.trigger.childNodes.length);
        var level2 = this.node.enable.childNodes.length > 2
          ? 4 : this.node.enable.childNodes.length > 0
          ? 2 : 0;
        var level = Math.max(level1, level2);
        ui.arena.dataset.sclevel = level;
      },
    },
    checkSkill: function(skill) {

      var info = lib.skill[skill];
      if (!info) return -1;
      if (info.enable) return 1;
      return 0;
    },
    clickSkill: function(e) {
      if (this.classList.contains('usable')) {
        var skill = this.dataset.id;
        var item = ui.skillControlArea.querySelector('[data-id="' + skill + '"]');
        item && app.mockTouch(item);
      }
    },
    createSkills: function(skills, node) {
      var same = true;
      if (node) {
        if (skills && skills.length) {
          for (var i = 0; i < node.skills.length; i++) {
            if (node.skills[i] !== skills[i]) {
              same = false;
              break;
            }
          }
        }
        if (same) return node;
        node.close();
        node.delete();
      }
      if (!skills && !skills.length) return;

      node = ui.create.div('.control.skillControl', ui.skillControlArea);
      Object.assign(node, lib.element.control);
      skills.forEach(function(skill) {
        var item = ui.create.div(node);
        item.link = skill;
        item.dataset.id = skill;
        item.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.control);
      });
      node.skills = skills;
      node.custom = ui.click.skill;
      return node;
    },
 
  };
  return plugin;
});
