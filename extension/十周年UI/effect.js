'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	decadeUI.effect = {
		dialog:{
			create:function(titleText){
				return decadeUI.dialog.create('effect-dialog dui-dialog');
			},
			compare:function(source, target){
				var dialog = this.create();
				
				dialog.characters = [
					decadeUI.dialog.create('player1 character', dialog),
					decadeUI.dialog.create('player2 character', dialog)
				];
				
				decadeUI.dialog.create('back', dialog.characters[0]),
				decadeUI.dialog.create('back', dialog.characters[1]),
				
				dialog.content = decadeUI.dialog.create('content', dialog),
				dialog.buttons = decadeUI.dialog.create('buttons', dialog.content)
				
				dialog.cards = [
					decadeUI.dialog.create('player1 card', dialog.buttons),
					decadeUI.dialog.create('player2 card', dialog.buttons)
				];
				
				dialog.names = [
					decadeUI.dialog.create('player1 name', dialog.buttons),
					decadeUI.dialog.create('player2 name', dialog.buttons)
				];

				dialog.buttons.vs = decadeUI.dialog.create('vs', dialog.buttons);
				dialog.names[0].innerHTML = get.translation(source) + '发起';
				dialog.names[1].innerHTML = get.translation(target);
				
				dialog.set = function(attr, value){
					switch (attr) {
						case 'player1':
						case 'source':
							if (get.itemtype(value) != 'player' || value.isUnseen()) {
								dialog.characters[0].firstChild.style.backgroundImage = '';
								dialog.names[0].innerHTML = get.translation(value) + '发起';
								return false;
							} 
							
							var avatar = value.isUnseen(0) ? value.node.avatar2 : value.node.avatar;
							dialog.characters[0].firstChild.style.backgroundImage =  avatar.style.backgroundImage;
							dialog.names[0].innerHTML = get.translation(value) + '发起';
							break;
						
						case 'player2':
						case 'target':
							if (get.itemtype(value) != 'player' || value.isUnseen()) {
								dialog.characters[1].firstChild.style.backgroundImage = '';
								dialog.names[1].innerHTML = get.translation(value);
								return false;
							} 
							
							var avatar = value.isUnseen(0) ? value.node.avatar2 : value.node.avatar;
							dialog.characters[1].firstChild.style.backgroundImage =  avatar.style.backgroundImage;
							dialog.names[1].innerHTML = get.translation(value);
							break;
						
						case 'card1':
						case 'sourceCard':
							if (dialog.cards[0].firstChild) dialog.cards[0].removeChild(dialog.cards[0].firstChild);
							dialog.cards[0].appendChild(value);
							break;
						
						case 'card2':
						case 'targetCard':
							if (dialog.cards[1].firstChild) dialog.cards[1].removeChild(dialog.cards[1].firstChild);
							dialog.cards[1].appendChild(value);
							break;
						
						default:
							return false;
					}
					
					return true;
				},
				
				dialog.set('source', source);
				dialog.set('target', target);
				return dialog;
			},
		},
		gameStart:function(){
			game.playAudio('../extension', decadeUI.extensionName, 'audio/game_start.mp3');
			var animation = decadeUI.animation;
			var bounds = animation.getSpineBounds('战火_背景');
			if (bounds == null) return;
			var sz = bounds.size;
			var scale = Math.min(animation.canvas.width / sz.x, animation.canvas.height / sz.y) * 1;
			animation.playSpine({
				name:'战火_背景',
				scale: scale
			});
		},
		
		line:function(dots){
			decadeUI.animate.add(function(source, target, e){
				var ctx = e.context;
				ctx.shadowColor = 'yellow';
				ctx.shadowBlur = 2;
				
				if (!this.head) this.head = 0;
				if (!this.tail) this.tail = -1;
				
				this.head += 0.07 * (e.deltaTime / 17);
				if (this.head >= 1) {
					this.head = 1;
					this.tail += (0.07 * (e.deltaTime / 17));
				}
				
				var tail = this.tail < 0 ? 0 : this.tail;
				var head = this.head;
				if (this.tail <= 1) {
					var x1 = e.lerp(source.x, target.x, tail);
					var y1 = e.lerp(source.y, target.y, tail);
					var x2 = e.lerp(source.x, target.x, head);
					var y2 = e.lerp(source.y, target.y, head);
					e.drawLine(x1, y1, x2, y2, 'rgb(250,220,140)', 2.5);
					return false;
				} else {
					return true;
				}
			}, true, { x: dots[0], y: dots[1] }, { x: dots[2], y: dots[3] });
		},
		
		kill:function(source, target){
			if (get.itemtype(source) != 'player' || get.itemtype(target) != 'player') throw 'arguments';
			if (source == target) return;
			
			if (source.isUnseen() || target.isUnseen()) return;
			
			var sourceAvatar = source.isUnseen(0) ? source.node.avatar2 : source.node.avatar;
			var targetAvatar = target.isUnseen(0) ? target.node.avatar2 : target.node.avatar;
			
			var effect = decadeUI.dialog.create('effect-window');
			var killerWarpper = decadeUI.dialog.create('killer-warpper', effect);
			killerWarpper.killer = decadeUI.dialog.create('killer', killerWarpper);
			killerWarpper.killer.style.backgroundImage = sourceAvatar.style.backgroundImage;
			
			
			var victim = decadeUI.dialog.create('victim', effect);
			victim.back = decadeUI.dialog.create('back', victim);
			victim.back.part1 = decadeUI.dialog.create('part1', victim.back);
			victim.back.part2 = decadeUI.dialog.create('part2', victim.back);
			victim.back.part1.style.backgroundImage = targetAvatar.style.backgroundImage;
			victim.back.part2.style.backgroundImage = targetAvatar.style.backgroundImage;
			
			effect.style.backgroundColor = 'rgba(0,0,0,0.7)';
			effect.style.transition = 'all 4s';
			effect.style.zIndex = 7;
			
			var anim = decadeUI.animation;
			var bounds = anim.getSpineBounds('effect_jisha1');
			
			game.playAudio('../extension', decadeUI.extensionName, 'audio/kill_effect_sound.mp3');
			if (bounds == void 0) {
				var lightLarge = decadeUI.dialog.create('li-big', effect);
				victim.rout = decadeUI.dialog.create('rout', victim);
				victim.rout2 = decadeUI.dialog.create('rout', victim);
				victim.rout.innerHTML = '破敌';
				victim.rout2.innerHTML = '破敌';
				victim.rout2.classList.add('shadow');
				ui.window.appendChild(effect);
				var height = ui.window.offsetHeight;
				var x, y , scale;
				for (var i = 0; i < 10; i++) {
					x = decadeUI.getRandom(0, 100) + 'px';
					y = decadeUI.getRandom(0, height / 4) + 'px';
					x = decadeUI.getRandom(0, 1) == 1 ? x : '-' + x;
					y = decadeUI.getRandom(0, 1) == 1 ? y : '-' + y;
					scale = decadeUI.getRandom(1, 10) / 10;
					
					setTimeout(function(mx, my, mscale, meffect){
						var light = decadeUI.dialog.create('li', meffect);
						light.style.transform = 'translate(' + mx + ', ' + my + ')' + 'scale(' + mscale + ')';
					}, decadeUI.getRandom(50, 300), x, y, scale, effect);
				}
			} else {
				var sz = bounds.size;
				var scale = anim.canvas.width / sz.x * 1.2;
				anim.playSpine('effect_jisha1', { scale: scale });
				ui.window.appendChild(effect);
				ui.refresh(effect);
			}
			
			decadeUI.delay(2000);
			effect.style.backgroundColor = 'rgba(0,0,0,0)';
			effect.close(3000);
			effect = null;
		},
		
		skill:function(player, skillName, vice){
			if (get.itemtype(player) != 'player') return console.error('player');
			
			var animation = decadeUI.animation;
			var asset = animation.spine.assets['effect_xianding'];
			if (!asset) return console.error('[effect_xianding]特效未加载');
			if (!asset.ready) animation.prepSpine('effect_xianding');
			
			var camp = player.group;
			var playerName, playerAvatar;
			if (vice === 'vice') {
				playerName = get.translation(player.name2);
				playerAvatar = player.node.avatar2;
			} else {
				playerName = get.translation(player.name);
				playerAvatar = player.node.avatar;
			}
			
			var url = getComputedStyle(playerAvatar).backgroundImage;
			var image = new Image();
			var bgImage = new Image();
			
			image.onload = function () {
				bgImage.onload = function () {
					var animation = decadeUI.animation;
					var sprite = animation.playSpine('effect_xianding');
					var skeleton = sprite.skeleton;
					var slot = skeleton.findSlot('shilidipan');
					var attachment = slot.getAttachment();
					var region;
					
					if (attachment.camp !== camp) {
						if (!attachment.cached) attachment.cached = {};
						
						if (!attachment.cached[camp]) {
							region = animation.createTextureRegion(bgImage);
							attachment.cached[camp] = region;
						} else {
							region = attachment.cached[camp];
						}
						
						attachment.width = region.width;
						attachment.height = region.height;
						attachment.setRegion(region);
						attachment.updateOffset();
						attachment.camp = camp;
					}
					
					slot = skeleton.findSlot('wujiang');
					attachment = slot.getAttachment();
					region = animation.createTextureRegion(image);
					
					var scale = Math.min(288 / region.width, 378 / region.height);
					attachment.width = region.width * scale;
					attachment.height = region.height * scale;
					attachment.setRegion(region);
					attachment.updateOffset();
					
					
					var size = skeleton.bounds.size;
					sprite.scale = Math.max(animation.canvas.width / size.x, animation.canvas.height / size.y);

					var effect = decadeUI.element.create('effect-window');
					effect.view.skillName = decadeUI.element.create('skill-name', effect);
					effect.view.skillName.innerHTML = skillName;
					effect.view.skillName.style.top = 'calc(50% + ' + 165 * sprite.scale + 'px)';
					
					// 字体颜色跟随势力
					if (camp=='wei') {effect.view.skillName.style.color = "#507CBC";}
					if (camp=='shu') {effect.view.skillName.style.color = "#C13134";}
					if (camp=='wu') {effect.view.skillName.style.color = "#408E36";}
					if (camp=='qun') {effect.view.skillName.style.color = "#B4B4B2";}
					if (camp=='shen') {effect.view.skillName.style.color = "#D3A227";}
					if (camp=='jin'||camp=='ye'||camp=='key'||camp=='western') {effect.view.skillName.style.color = "#906FC4";}
					
					animation.canvas.parentNode.insertBefore(effect, animation.canvas.nextSibling);
					effect.removeSelf(2180);
				};
				
				bgImage.onerror = function () {
					bgImage.onerror = void 0;
					bgImage.src = decadeUIPath + 'assets/image/bg_xianding_qun.png';
				};
				
				bgImage.src = decadeUIPath + 'assets/image/bg_xianding_' + camp + '.png';
			};
			
			// 修复无图角色发动skillAnimation为true的特效不显示的bug
			// 露头皮肤待适配
			image.onerror = function () {
				image.onerror = void 0;
				image.src = lib.assetURL + 'image/character/default_silhouette_' + player.sex + '.jpg';
			};
			
			// image.src = url.slice(5, -2);
			if(url.indexOf("url(\"") == 0){
				image.src = url.slice(5, url.indexOf("\")"));
			}else if(url.indexOf("url('") == 0){
				image.src = url.slice(5, url.indexOf("\')"));
			}
		},

	};
});

