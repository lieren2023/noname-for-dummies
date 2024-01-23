'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	decadeUI.component = {
		slider:function(min, max, value){
			var slider = document.createElement('input');
			var onchange = function(){
				var percent = ((slider.value -  slider.min) / (slider.max -  slider.min)) * 100;
				slider.style.backgroundSize = percent + '% ' + '100%';
			};
			
			var valueProp = Object.getOwnPropertyDescriptor(slider.__proto__, 'value');
			Object.defineProperties(slider, {
				value: {
					configurable: true,
					get:function(){
						return valueProp.get.call(this);
					},
					set:function(value){
						valueProp.set.call(this, value);
						onchange();
					}
				}
			});
			
			slider.className = 'slider';
			slider.type = 'range';
			slider.addEventListener('input', onchange);
			
			slider.min = (typeof min == 'number') ? min : 0;
			slider.max = (typeof max == 'number') ? max : 100;
			slider.value = (typeof value == 'number') ? value : ((max - min) * 0.5);
			return slider;
		},
		chatBox:function(){
			var box = decadeUI.dialog.create('chat-box folded');
			box.container = decadeUI.dialog.create('container', box);
			box.operation = decadeUI.dialog.create('operation', box);
			box.content = decadeUI.dialog.create('content', box.container);
			
			box.operation.fold = decadeUI.dialog.create('fold-button', box.operation, 'button');
			box.operation.input = decadeUI.dialog.create('chat-input', box.operation, 'input');
			box.operation.sticker = decadeUI.dialog.create('sticker-button', box.operation, 'button');
			box.operation.send = decadeUI.dialog.create('send-button', box.operation, 'button');
			
			box.operation.fold.innerHTML = '…';
			box.operation.sticker.innerHTML = '表情';
			box.operation.send.innerHTML = '发送';
			
			box.addEntry = function(info){
				var text = decadeUI.dialog.create('chat-text', box.content);
				text.innerHTML = '<span class="sender">' + info[0] + '</span>:' + '<span class="text">' + info[1] + '</span>';
				if (box.overrideEntry) box.overrideEntry(info);
				box.content.scrollTop = box.content.scrollHeight;
			};
			
			box.addEntry._origin = box;
			
			box.sendInputText = function(){
				if (input.value) {
					var player = game.me;
					var str = input.value;
					if (!player) {
						if (game.connectPlayers) {
							if (game.online) {
								for (var i = 0; i < game.connectPlayers.length; i++) {
									if (game.connectPlayers[i].playerid == game.onlineID) {
										player = game.connectPlayers[i];
										break;
									}
								}
							} else {
								player = game.connectPlayers[0];
							}
						}
					}
					if (!player) return;
					if (game.online) {
						game.send('chat', game.onlineID, str);
					} else {
						lib.element.player.chat.call(player, str);
					}
					input.value = '';
					_status.chatValue = '';
				}
			};
			
			var input = box.operation.input;

			box.operation.fold.addEventListener('click', function(){
				if (box.classList.contains('folded')) {
					box.operation.fold.innerHTML = '<<';
					box.classList.remove('folded');
				} else {
					box.operation.fold.innerHTML = '…';
					box.classList.add('folded');
				}
			});
			
			box.operation.send.addEventListener('click', function(){
				box.sendInputText();
				input.focus();
			});
			
			input.addEventListener('change', function(e){
				_status.chatValue = input.value;
			});
			
			input.addEventListener('keydown', function(e){
				if (e.keyCode == 13) box.sendInputText();
				e.stopPropagation();
			});
			
			return box;
		},
	};
});

