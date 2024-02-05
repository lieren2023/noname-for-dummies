// @ts-nocheck
import { Get as get } from '../get/index.js';
import { Library as lib } from '../library/index.js';
import { Game as game } from '../game/index.js';
import { status as _status } from '../status/index.js';
import { UI as ui } from '../ui/index.js';

// 废弃覆盖原型的HTMLDivElement.prototype.animate
// 改为HTMLDivElement.prototype.addTempClass
HTMLDivElement.prototype.animate = function (keyframes, options) {
	if (typeof keyframes == 'string') {
		console.trace(this, '无名杀开发者修改的animate方法已废弃，请改为使用addTempClass方法');
		return HTMLDivElement.prototype.addTempClass.call(this, keyframes, options);
	}
	else return HTMLElement.prototype.animate.call(this, keyframes, options);
};

HTMLDivElement.prototype.addTempClass = function (name, time = 1000) {
	let that = get.is.mobileMe(this) && name == 'target' ? ui.mebg : this;
	that.classList.add(name);
	setTimeout(() => {
		that.classList.remove(name);
	}, time);
	return this;
};
HTMLDivElement.prototype.hide = function () {
	this.classList.add('hidden');
	return this;
};
HTMLDivElement.prototype.unfocus = function () {
	if (lib.config.transparent_dialog) this.classList.add('transparent');
	return this;
};
HTMLDivElement.prototype.refocus = function () {
	this.classList.remove('transparent');
	return this;
};
HTMLDivElement.prototype.show = function () {
	this.classList.remove('hidden');
	return this;
};
HTMLDivElement.prototype.delete = function (time, callback) {
	if (this.timeout) {
		clearTimeout(this.timeout);
		delete this.timeout;
	}
	if (!this._listeningEnd || this._transitionEnded) {
		if (typeof time != 'number') time = 500;
		this.classList.add('removing');
		var that = this;
		this.timeout = setTimeout(function () {
			that.remove();
			that.classList.remove('removing');
			if (typeof callback == 'function') {
				callback();
			}
		}, time);
	}
	else {
		this._onEndDelete = true;
	}
	return this;
};
HTMLDivElement.prototype.goto = function (position, time) {
	if (this.timeout) {
		clearTimeout(this.timeout);
		delete this.timeout;
	}

	if (typeof time != 'number') time = 500;
	this.classList.add('removing');

	var that = this;
	this.timeout = setTimeout(function () {
		if (!that._selfDestroyed) {
			position.appendChild(that);
		}
		that.classList.remove('removing');
		delete that.destiny;
	}, time);
	this.destiny = position;
	return this;
};
HTMLDivElement.prototype.fix = function () {
	clearTimeout(this.timeout);
	delete this.timeout;
	delete this.destiny;
	this.classList.remove('removing');
	return this;
};
Reflect.defineProperty(HTMLDivElement.prototype, 'setBackground', {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (name, type, ext, subfolder) {
		if (!name) return;
		let src;
		if (ext == 'noskin') ext = '.jpg';
		ext = ext || '.jpg';
		subfolder = subfolder || 'default';
		if (type) {
			let dbimage = null, extimage = null, modeimage = null, nameinfo, gzbool = false;
			const mode = get.mode();
			if (type == 'character') {
				if (lib.characterPack[`mode_${mode}`] && lib.characterPack[`mode_${mode}`][name]) {
					if (mode == 'guozhan') {
						nameinfo = lib.character[name];
						if (name.startsWith('gz_shibing')) name = name.slice(3, 11);
						else {
							if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
							name = name.slice(3);
						}
					}
					else modeimage = mode;
				}
				else if (name.includes('::')) {
					name = name.split('::');
					modeimage = name[0];
					name = name[1];
				}
				else {
					nameinfo = get.character(name);
				}
			}
			if (!modeimage && nameinfo && nameinfo[4]) for (const value of nameinfo[4]) {
				if (value.startsWith('ext:')) {
					extimage = value;
					break;
				}
				else if (value.startsWith('db:')) {
					dbimage = value;
					break;
				}
				else if (value.startsWith('mode:')) {
					modeimage = value.slice(5);
					break;
				}
				else if (value.startsWith('character:')) {
					name = value.slice(10);
					break;
				}
			}
			if (extimage) src = extimage.replace(/^ext:/, 'extension/');
			else if (dbimage) {
				this.setBackgroundDB(dbimage.slice(3));
				return this;
			}
			else if (modeimage) src = `image/mode/${modeimage}/character/${name}${ext}`;
			else if (type == 'character' && lib.config.skin[name] && arguments[2] != 'noskin') src = `image/skin/${name}/${lib.config.skin[name]}${ext}`;
			else if (type == 'character') {
				src = `image/character/${gzbool ? 'gz_' : ''}${name}${ext}`;
			}
			else src = `image/${type}/${subfolder}/${name}${ext}`;
		}
		else src = `image/${name}${ext}`;
		this.setBackgroundImage(src);
		this.style.backgroundPositionX = 'center';
		this.style.backgroundSize = 'cover';
		if (type === 'character') {
			const nameinfo = get.character(name);
			const sex = nameinfo ? nameinfo[0] : 'male';
			this.style.backgroundImage = [
				this.style.backgroundImage,
				`url("${lib.assetURL}${lib.characterDefaultPicturePath}${sex}${ext}")`,
				`url("${lib.assetURL}${lib.characterDefaultPicturePath}male${ext}")`,
			].join(",");
		}
		return this;
	}
});
HTMLDivElement.prototype.setBackgroundDB = function (img) {
	return game.getDB('image', img).then(src => {
		this.style.backgroundImage = `url('${src}')`;
		this.style.backgroundSize = "cover";
		return this;
	});
};
HTMLDivElement.prototype.setBackgroundImage = function (img) {
	this.style.backgroundImage = `url("${lib.assetURL}${img}")`;
	return this;
};
HTMLDivElement.prototype.listen = function (func) {
	if (lib.config.touchscreen) {
		this.addEventListener('touchend', function (e) {
			if (!_status.dragged) {
				func.call(this, e);
			}
		});
		var fallback = function (e) {
			if (!_status.touchconfirmed) {
				func.call(this, e);
			}
			else {
				this.removeEventListener('click', fallback);
			}
		}
		this.addEventListener('click', fallback);
	}
	else {
		this.addEventListener('click', func);
	}
	return this;
};
HTMLDivElement.prototype.listenTransition = function (func, time) {
	let done = false;
	const callback = () => {
		if (!done) {
			done = true;
			func.call(this);
		}
		clearTimeout(timer);
		this.removeEventListener('webkitTransitionEnd', callback);
	};
	const timer = setTimeout(callback, time || 1000);
	this.addEventListener('webkitTransitionEnd', callback);
	return timer;
};
HTMLDivElement.prototype.setPosition = function () {
	var position;
	if (arguments.length == 4) {
		position = [];
		for (var i = 0; i < arguments.length; i++) position.push(arguments[i]);
	}
	else if (arguments.length == 1 && Array.isArray(arguments[0]) && arguments[0].length == 4) {
		position = arguments[0];
	}
	else {
		return this;
	}
	var top = 'calc(' + position[0] + '% ';
	if (position[1] > 0) top += '+ ' + position[1] + 'px)';
	else top += '- ' + Math.abs(position[1]) + 'px)';
	var left = 'calc(' + position[2] + '% ';
	if (position[3] > 0) left += '+ ' + position[3] + 'px)';
	else left += '- ' + Math.abs(position[3]) + 'px)';
	this.style.top = top;
	this.style.left = left;
	return this;
};
HTMLDivElement.prototype.css = function (style) {
	for (var i in style) {
		if (i == 'innerHTML') {
			this.innerHTML = style[i];
		}
		else {
			this.style[i] = style[i];
		}
	}
	return this;
};
HTMLTableElement.prototype.get = function (row, col) {
	if (row < this.childNodes.length) {
		return this.childNodes[row].childNodes[col];
	}
};
/*处理lib.nature等从array改为map的兼容性问题*/
const mapHasFunc = function (item) {
	console.trace(this, '已经从array改为map，请改为使用has方法');
	return this.has(item);
}
Object.defineProperty(Map.prototype, "contains", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: mapHasFunc
});
Object.defineProperty(Map.prototype, "includes", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: mapHasFunc
});
const mapAddFunc = function (item) {
	console.trace(this, '已经从array改为map，请改为使用set方法');
	this.set(item, 0);
	return this;
}
Object.defineProperty(Map.prototype, "add", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: mapAddFunc
});
Object.defineProperty(Map.prototype, "push", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: mapAddFunc
});
Object.defineProperty(Map.prototype, "addArray", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (arr) {
		for (let i = 0; i < arr.length; i++) {
			this.add(arr[i]);
		}
		return this;
	}
});
Object.defineProperty(Map.prototype, "remove", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (item) {
		console.trace(this, '已经从array改为map，请改为使用delete方法');
		this.delete(item);
		return this;
	}
});
/*Map prototype end*/
Object.defineProperty(Array.prototype, "filterInD", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (pos) {
		if (typeof pos != 'string') pos = 'o';
		return this.filter(card => pos.includes(get.position(card, true)));
	}
});
Object.defineProperty(Array.prototype, "someInD", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (pos) {
		if (typeof pos != 'string') pos = 'o';
		return this.some(card => pos.includes(get.position(card, true)));
	}
});
Object.defineProperty(Array.prototype, "everyInD", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (pos) {
		if (typeof pos != 'string') pos = 'o';
		return this.every(card => pos.includes(get.position(card, true)));
	}
});
/**
*@legacy Use {@link Array#includes} instead.
 */
Object.defineProperty(Array.prototype, "contains", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (...args) {
		console.warn(this, 'Array的contains方法已废弃，请使用includes方法');
		return this.includes(...args);
	}
});
Object.defineProperty(Array.prototype, "containsSome", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		return Array.from(arguments).some(i => this.includes(i));
	}
});
Object.defineProperty(Array.prototype, "containsAll", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		return Array.from(arguments).every(i => this.includes(i));
	}
});

Object.defineProperty(Array.prototype, "add", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		for (const arg of arguments) {
			if (this.includes(arg)) continue;
			this.push(arg);
		}
		return this;
	}
});
Object.defineProperty(Array.prototype, "addArray", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		for (const arr of arguments) {
			for (const item of arr) this.add(item);
		}
		return this;
	}
});
Object.defineProperty(Array.prototype, "remove", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		for (const item of arguments) {
			let pos = -1;
			if (typeof item == 'number' && isNaN(item)) {
				pos = this.findIndex(v => isNaN(v))
			} else {
				pos = this.indexOf(item);
			}
			if (pos == -1) continue;
			this.splice(pos, 1);
		}
		return this;
	}
});
Object.defineProperty(Array.prototype, "removeArray", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		for (const i of Array.from(arguments)) this.remove(...i);
		return this;
	}
});
Object.defineProperty(Array.prototype, "unique", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		let uniqueArray = [...new Set(this)];
		this.length = uniqueArray.length;
		for (let i = 0; i < uniqueArray.length; i++) this[i] = uniqueArray[i];
		return this;
	}
});
Object.defineProperty(Array.prototype, "toUniqued", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		return [...new Set(this)];
	}
});
Object.defineProperty(Array.prototype, "randomGet", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		let arr = this.slice(0);
		arr.removeArray(Array.from(arguments));
		return arr[Math.floor(Math.random() * arr.length)];
	}
});
Object.defineProperty(Array.prototype, "randomGets", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (num) {
		if (num > this.length) num = this.length;
		let arr = this.slice(0);
		let list = [];
		for (let i = 0; i < num; i++) {
			list.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
		}
		return list;
	}
});
Object.defineProperty(Array.prototype, "randomRemove", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (num) {
		if (typeof num == 'number') {
			let list = [];
			for (let i = 0; i < num; i++) {
				if (!this.length) break;
				list.push(this.randomRemove());
			}
			return list;
		}
		return this.splice(Math.floor(Math.random() * this.length), 1)[0];
	}
});
Object.defineProperty(Array.prototype, "randomSort", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function () {
		let list = [];
		while (this.length) {
			list.push(this.randomRemove());
		}
		for (let i = 0; i < list.length; i++) {
			this.push(list[i]);
		}
		return this;
	}
});
Object.defineProperty(Array.prototype, "sortBySeat", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (target) {
		lib.tempSortSeat = target;
		this.sort(lib.sort.seat);
		delete lib.tempSortSeat;
		return this;
	}
});
/**
*@description 从数组中寻找某个特征最大的，且通过筛选的第一个元素
 */
Object.defineProperty(Array.prototype, "maxBy", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (sortBy, filter) {
		let list = this.filter(filter || (() => true));
		if (sortBy && typeof sortBy == 'function') list.sort((a, b) => sortBy(a) - sortBy(b));
		else list.sort();
		return list[list.length - 1];
	}
});
Object.defineProperty(Array.prototype, "minBy", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: function (sortBy, filter) {
		let list = this.filter(filter || (() => true));
		if (sortBy && typeof sortBy == 'function') list.sort((a, b) => sortBy(a) - sortBy(b));
		else list.sort();
		return list[0];
	}
});
