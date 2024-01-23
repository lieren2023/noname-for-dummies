'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	decadeUI.content = {
		chooseGuanXing:function(player, cards1, movable1, cards2, movable2, infohide){
			if (get.itemtype(player) != 'player') throw player;
			if (!cards1 && !cards2)  throw arguments;
			
			var guanXing = decadeUI.dialog.create('confirm-box guan-xing');
			
			var properties = {
				caption: undefined,
				tip: undefined,
				header1: undefined,
				header2: undefined,
				cards: [[],[]],
				movables: [movable1 ? movable1 : 0, movable2 ? movable2 : 0],
				selected: undefined,
				callback: undefined,
				infohide: undefined,
				confirmed: undefined,
				doubleSwitch: undefined,
				orderCardsList: [[],[]],
				finishing: undefined,
				finished: undefined,
				finishTime:function(time){
					if (this.finishing || this.finished) return;
					if (typeof time != 'number') throw time;
					this.finishing = true;
					setTimeout(function(dialog){
						dialog.finishing = false;
						dialog.finish();
					}, time, this)
				},
				finish:function(){
					if (this.finishing || this.finished) return;
					this.finishing = true;
					if (this.callback) this.confirmed = this.callback.call(this);
					
					cards = guanXing.cards[0];
					if (cards.length) {
						for (var i = cards.length - 1; i >= 0; i--) {
							cards[i].removeEventListener('click', guanXing._click);
							cards[i].classList.remove('infohidden');
							cards[i].classList.remove('infoflip');
							cards[i].style.cssText = cards[i].rawCssText;
							delete cards[i].rawCssText;
							
							if (!this.callback) ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
						}
					}
					
					cards = guanXing.cards[1];
					for (var i = 0; i < cards.length; i++) {
						cards[i].removeEventListener('click', guanXing._click);
						cards[i].classList.remove('infohidden');
						cards[i].classList.remove('infoflip');
						cards[i].style.cssText = cards[i].rawCssText;
						delete cards[i].rawCssText;
						
						if (!this.callback) ui.cardPile.appendChild(cards[i]);
					}
					
					_status.event.cards1 = this.cards[0];
					_status.event.cards2 = this.cards[1];
					_status.event.num1 = this.cards[0].length;
					_status.event.num2 = this.cards[1].length;
					if (_status.event.result) _status.event.result.bool = this.confirmed === true;
					else _status.event.result = { bool: this.confirmed === true }
					
					game.broadcastAll(function(){
						if (!window.decadeUI && decadeUI.eventDialog) return;
						decadeUI.eventDialog.close();
						decadeUI.eventDialog.finished = true;
						decadeUI.eventDialog.finishing = false;
						decadeUI.eventDialog = undefined;
					});
					decadeUI.game.resume();
				},
				update:function(){
					var x, y;
					for (var i = 0; i < this.cards.length; i++) {
						cards = this.cards[i];
						if (this.orderCardsList[i].length) {
							cards.sort(function(a, b){
								var aIndex = guanXing.orderCardsList[i].indexOf(a);
								var bIndex = guanXing.orderCardsList[i].indexOf(b);
								
								aIndex = aIndex >= 0 ? aIndex : guanXing.orderCardsList[i].length;
								bIndex = bIndex >= 0 ? bIndex : guanXing.orderCardsList[i].length;
								return aIndex - bIndex;
							});
						}
						
						y = 'calc(' + (i * 100) + '% + ' + (i * 10) + 'px)';
						for (var j = 0; j < cards.length; j++) {
							x = 'calc(' + (j * 100) + '% + ' + (j * 10) + 'px)';
							// cards[j].style.transform = 'translate(' + x + ', ' + y + ')';
							// cards[j].style.zIndex = (i * 10 + j + 1);
							cards[j].style.cssText += ';transform:translate(' + x + ', ' + y + '); z-index:' + (i * 10 + j + 1) + ';';
						}
					}
				},
				swap:function(source, target){
					game.broadcast(function(source, target){
						if (!window.decadeUI && decadeUI.eventDialog) return;
						
						decadeUI.eventDialog.swap(source, target);
					}, source, target);
					
					var sourceIndex = this.cardToIndex(source, 0);
					var targetIndex = this.cardToIndex(target, 1)
					
					if (sourceIndex >= 0 && targetIndex >= 0) {
						this.cards[0][sourceIndex] = target;
						this.cards[1][targetIndex] = source;
						this.update();
						this.onMoved();
						return;
					}
					
					sourceIndex = this.cardToIndex(source, 1);
					targetIndex = this.cardToIndex(target, 0);
					
					if (sourceIndex >= 0 && targetIndex >= 0) {
						this.cards[1][sourceIndex] = target;
						this.cards[0][targetIndex] = source;
						this.update();
						this.onMoved();
						return;
					}
					
					if (sourceIndex >= 0) {
						targetIndex = this.cardToIndex(target, 1);
						if (targetIndex < 0) console.error('card not found');

						this.cards[1][sourceIndex] = target;
						this.cards[1][targetIndex] = source;
					} else {
						sourceIndex = this.cardToIndex(source, 0);
						
						if (targetIndex < 0 || sourceIndex < 0) return console.error('card not found');
						this.cards[0][sourceIndex] = target;
						this.cards[0][targetIndex] = source;
					}
					
					this.update();
					this.onMoved();
				},
				switch:function(card){
					game.broadcast(function(card){
						if (!window.decadeUI && decadeUI.eventDialog) return;
						
						decadeUI.eventDialog.switch(card);
					}, card);
					
					var index = this.cardToIndex(card, 0);
					if (index >= 0) {
						if (this.cards[1].length >= this.movables[1]) return;
						
						card = this.cards[0][index];
						this.cards[0].remove(card);
						this.cards[1].push(card);
					} else {
						if (this.cards[0].length >= this.movables[0]) return;
						
						index = this.cardToIndex(card, 1);
						if (index < 0) return console.error('card not found');
						card = this.cards[1][index];
						this.cards[1].remove(card);
						this.cards[0].push(card);
					}
					
					this.update();
					this.onMoved();
				},
				move:function(card, indexTo, moveDown){
					var dim = moveDown ? 1 : 0;
					var dim2 = dim;
					var index = this.cardToIndex(card, dim);
					
					indexTo = Math.max(indexTo, 0);
					if (index < 0) {
						var dim2 = dim == 1 ? 0 : 1;
						index = this.cardToIndex(card, dim2);
						if (index < 0) return console.error('card not found');
						
						if (this.cards[dim].length >= this.movables[dim]) return;
					}
					
					this.cards[dim2].splice(index, 1);
					this.cards[dim].splice(indexTo, 0, card);
					this.onMoved();
					this.update();
				},
				cardToIndex:function(card, cardArrayIndex){
					if (!(card && card.cardid)) return -1;
					var id = card.cardid;
					var cards = this.cards[cardArrayIndex == null ? 0 : cardArrayIndex];
					for (var i = 0; i < cards.length; i++) {
						if (cards[i].cardid == id) return i;
					}
					
					return -1;
				},
				lockCardsOrder:function(isBottom){
					var orders;
					var cards;
					
					if (isBottom) {
						cards = this.cards[1];
						this.orderCardsList[1] = [];
						orders = this.orderCardsList[1];
					} else {
						cards = this.cards[0];
						this.orderCardsList[0] = [];
						orders = this.orderCardsList[0];
					}
					
					if (cards.length) {
						for (var i = 0; i < cards.length; i++) {
							orders.push(cards[i]);
						}
					}
				},
				unlockCardsOrder:function(isBottom){
					if (isBottom) {
						this.orderCardsList[1] = [];
					} else {
						this.orderCardsList[0] = [];
					}
				},
				getCardArrayIndex:function(card){
					var cards = this.cards;
					
					if (cards[0].indexOf(card) >= 0) {
						return 0;
					} else if (cards[1].indexOf(card) >= 0) {
						return 1;
					} else {
						return -1;
					}

				},
				onMoved:function(){
					if (typeof this.callback == 'function') {
						var ok = this.callback.call(this);
						if (!ok) {
							this.classList.add('ok-disable');
							return;
						}
					}
					
					this.classList.remove('ok-disable');
				},
				_click:function(e){
					if (this.finishing || this.finished) return;
					switch (this.objectType) {
						case 'content':
							if (guanXing.selected) {
								var y = (this.offsetHeight * decadeUI.zooms.body * decadeUI.zooms.card) / 2 - (guanXing.cards[0].contains(guanXing.selected) ? 12 : -12);
								var index = e.layerY < y ? 0 : 1;
								if (!guanXing.cards[index].contains(guanXing.selected)) {
									guanXing.switch(guanXing.selected);
								}
							}
							
							guanXing.selected = null;
							break;
						
						case 'card':
							if (guanXing.selected == null) {
								guanXing.selected = this;
								break;
							}
							
							if (guanXing.selected != this) {
								guanXing.swap(guanXing.selected, this);
							} else if (guanXing.doubleSwitch) {
								guanXing.switch(this);
							}
							
							guanXing.selected = null;
							break;
						case 'button ok':
							if (guanXing.classList.contains('ok-disable')) return;
							guanXing.confirmed = true;
							guanXing.finish();
							break;
						
						default:
							guanXing.classList.remove('selecting');
							guanXing.selected = null;
							break;
					}
					
					e.stopPropagation();
				},
				_selected: undefined,
				_caption: decadeUI.dialog.create('caption', guanXing),
				_content: decadeUI.dialog.create('content buttons', guanXing),
				_tip: decadeUI.dialog.create('tip', guanXing), 
				_header1: undefined,
				_header2: undefined,
				_infohide: undefined,
				_callback: undefined,
				
			}
			
			for (var key in properties) {
				guanXing[key] = properties[key];
			}
			
			Object.defineProperties(guanXing, {
				selected: {
					configurable: true,
					get:function(){
						return this._selected;
					},
					set:function(value){
						var current = this._selected;
						if (current == value) return;
						if (current != undefined) current.classList.remove('selected');
						
						this._selected = current = value;
						if (current != undefined) {
							current.classList.add('selected');
							this.classList.add('selecting');
						} else {
							this.classList.remove('selecting');
						}
					},
				},
				caption: {
					configurable: true,
					get:function(){
						return this._caption.innerHTML;
					},
					set:function(value){
						if (this._caption.innerHTML == value) return;
						this._caption.innerHTML = value;
					},
				},
				tip: {
					configurable: true,
					get:function(){
						return this._tip.innerHTML;
					},
					set:function(value){
						if (this._tip.innerHTML == value) return;
						this._tip.innerHTML = value;
					},
				},
				header1: {
					configurable: true,
					get:function(){
						if (this._header1) return this._header1.innerHTML;
						return '';
					},
					set:function(value){
						if (!this._header1 || this._header1.innerHTML == value) return;
						this._header1.innerHTML = value;
					},
				},
				header2: {
					configurable: true,
					get:function(){
						if (this._header2) return this._header2.innerHTML;
						return '';
					},
					set:function(value){
						if (!this._header2 || this._header2.innerHTML == value) return;
						this._header2.innerHTML = value;
					},
				},
				infohide: {
					configurable: true,
					get:function(){
						return this._infohide;
					},
					set:function(value){
						if (this._infohide == value) return;
						this._infohide = value;
						
						for (var i = 0; i < this.cards.length; i++) {
							var cards = this.cards[i];
							for (var j = 0; j < cards.length; j++) {
								if (value) {
									cards[j].classList.add('infohidden');
									cards[j].classList.add('infoflip');
									cards[j].style.backgroundImage = '';
								} else {
									cards[j].classList.remove('infohidden');
									cards[j].classList.remove('infoflip');
									cards[j].style.cssText = cards[j].rawCssText;
								}
							}
						}
					},
				},
				callback: {
					configurable: true,
					get:function(){
						return this._callback;
					},
					set:function(value){
						if (this._callback == value) return;
						this._callback = value;
						this.onMoved();
					},
				}
			});
			
			var content = guanXing._content;
			guanXing.addEventListener('click', guanXing._click, false);
			
			
			if (game.me == player) {
				content.objectType = 'content';
				content.addEventListener('click', guanXing._click, false);
				var button = decadeUI.dialog.create('button ok', guanXing);
				button.innerHTML = '确认';
				button.objectType = 'button ok';
				button.addEventListener('click', guanXing._click, false);
			}
			
			var size = decadeUI.getHandCardSize();
			var height = 0;
			
			if (cards1) {
				guanXing.cards[0] = cards1;
				guanXing.movables[0] = Math.max(cards1.length, guanXing.movables[0]);
			}
			
			if (cards2) {
				guanXing.cards[1] = cards2;
				guanXing.movables[1] = Math.max(cards2.length, guanXing.movables[1]);
			}
			
			if (guanXing.movables[0] > 0) {
				height = size.height;
				guanXing._header1 = decadeUI.dialog.create('header', guanXing._content);
				guanXing._header1.style.top = '0';
				guanXing._header1.innerHTML = '牌堆顶'
			}
			
			if (guanXing.movables[1] > 0) {
				height += height + (height > 0 ? 10 : 0);
				guanXing._header2 = decadeUI.dialog.create('header', guanXing._content);
				guanXing._header2.style.bottom = '0';
				guanXing._header2.innerHTML = '牌堆底'
			}
			
			content.style.height = height + 'px';
			
			var cards;
			for (var i = 0; i < guanXing.cards.length; i++) {
				cards = guanXing.cards[i];
				for (var j = 0; j < cards.length; j++) {
					if (game.me == player) {
						cards[j].objectType = 'card';
						cards[j].removeEventListener('click', ui.click.intro);
						cards[j].addEventListener('click', guanXing._click, false);
					}
					
					cards[j].rawCssText = cards[j].style.cssText;
					cards[j].fix();
					content.appendChild(cards[j]);
				}
			}
			
			decadeUI.game.wait();
			guanXing.infohide = infohide == null ? (game.me == player ? false : true) : infohide;
			guanXing.caption = get.translation(player) + '正在发动【观星】';
			guanXing.tip = '点击2张牌交换位置；点击1张牌再点击上方或下方移动到另一方';
			guanXing.update();
			ui.arena.appendChild(guanXing);
			
			decadeUI.eventDialog = guanXing;
			return guanXing;
		},
	};
});

