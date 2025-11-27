'use strict';
var duilib;
(function(duilib){
	
	duilib.throttle = function (func, timeout, context) {
		var args;
		var timer;
		var previous;
		return function () {
			if (timer)
				clearTimeout(timer);
			
			if (previous == null)
				previous = performance.now();
				
			args = arguments;
			var timestamp = performance.now() - previous;
			if (timestamp >= timeout) {
				timer = null;
				previous = null;
				func.apply(context, args);
			} else {
				timer = setTimeout(function() {
					timer = null;
					previous = null;
					func.apply(context, args);
				}, timeout - timestamp);
			}
		}
	};
	
	duilib.observeSize = (function(){
		if (!self.ResizeObserver)
			return null;
		
		var observer = new ResizeObserver(function(entries){
			var rect;
			var callback;
			for (var i = 0; i < entries.length; i++) {
				callback = observer.callbacks[entries[i].target.observeId];
				if (callback == null)
					continue;
				
				rect = entries[i].contentRect;
				callback({width: rect.width, height: rect.height});
			}
		});
		
		observer.observeId = 0;
		observer.callbacks = {};
		return function (target, callback) {
			var obs = observer;
			target.observeId = obs.observeId++;
			obs.observe(target);
			obs.callbacks[target.observeId] = callback;
		}
	})();
	
	duilib.lerp = function(min, max, fraction){
		return (max - min) * fraction + min;
	};
	
	duilib.ease = function(fraction){
		if (!duilib.b3ease) duilib.b3ease = new duilib.CubicBezierEase(0.25, 0.1, 0.25, 1);
		return duilib.b3ease.ease(fraction);
	},
	
	duilib.CubicBezierEase = (function(){
		function CubicBezierEase (p1x, p1y, p2x, p2y) {
			this.cX = 3 * p1x;
			this.bX = 3 * (p2x - p1x) - this.cX;
			this.aX = 1 - this.cX - this.bX;

			this.cY = 3 * p1y;
			this.bY = 3 * (p2y - p1y) - this.cY;
			this.aY = 1 - this.cY - this.bY;
		};
			
		CubicBezierEase.prototype.getX = function (t) {
			return t * (this.cX + t * (this.bX + t * this.aX));
		};
			
		CubicBezierEase.prototype.getXDerivative = function (t) {
			return this.cX + t * (2 * this.bX + 3 * this.aX * t);
		};
			
		CubicBezierEase.prototype.ease = function (x) {
			var prev,
			t = x;
			do {
				prev = t;
				t = t - ((this.getX(t) - x) / this.getXDerivative(t));
			} while (Math.abs(t - prev) > 1e-4);
			
			
			return t * (this.cY + t * (this.bY + t * this.aY));
		};
			
		return CubicBezierEase;
	})();
	
	duilib.TimeStep = (function(){
		function TimeStep (initParam) {
			this.start = initParam.start;
			this.current = initParam.start;
			this.end = initParam.end;
			this.time = 0;
			this.percent = 0;
			this.duration = initParam.duration;
			this.completed = false;
		};
		
		TimeStep.prototype.update = function (delta) {
			this.time += delta;
			this.percent = duilib.ease(Math.min(this.time / this.duration, 1));
			
			var start, end;
			var isArray = false;
			if (Array.isArray(this.start)) {
				isArray = true;
				start = this.start;
			} else {
				start = [this.start, 0];
			}
			
			if (Array.isArray(this.end)) {
				isArray = true;
				end = this.end;
			} else {
				end = [this.end, 0];
			}
			
			if (isArray) {
				this.current = [duilib.lerp(start[0], end[0], this.percent), duilib.lerp(start[1], end[1], this.percent)];
			} else {
				this.current = duilib.lerp(start[0], end[0], this.percent);
			}
			
			if (this.time >= this.duration) this.completed = true;
		};
		
		return TimeStep;
	})();
	
	duilib.APNode = (function(){
		function APNode(initParam) {
			if (initParam == undefined) initParam = {};
			this.id = undefined;								// 内部属性，不可更改
			this.x = initParam.x;
			this.y = initParam.y;
			this.height = initParam.height;
			this.width = initParam.width;
			this.angle = initParam.angle;
			this.scale = initParam.scale;
			this.opacity = initParam.opacity;
			this.clip = initParam.clip;
			this.hideSlots = initParam.hideSlots;
			this.clipSlots = initParam.clipSlots;
			this.disableMask = initParam.disableMask;
			this.renderX = undefined;							// 内部属性，不可更改
			this.renderY = undefined;							// 内部属性，不可更改
			this.renderAngle = undefined;						// 内部属性，不可更改
			this.renderScale = undefined;						// 内部属性，不可更改
			this.renderOpacity = undefined;						// 内部属性，不可更改
			this.renderClip = undefined;						// 内部属性，不可更改
			this.mvp = new spine.webgl.Matrix4();				// 内部属性，不可更改
			this.skeleton = initParam.skeleton;					// 内部属性，不可更改
			this.name = initParam.name;							// 内部属性，不可更改
			this.action = initParam.action;						// 内部属性，不可更改
			this.loop = initParam.loop;
			this.loopCount = initParam.loopCount;
			this.speed = initParam.speed;
			this.onupdate = initParam.onupdate;
			this.oncomplete = initParam.oncomplete;
			this.completed = true;								// 内部属性，不可更改
			this.referNode = initParam.referNode;				
			this.referFollow = initParam.referFollow;
			this.referBounds = undefined;						// 内部属性，不可更改
			this.timestepMap = {};								// 内部属性，不可更改
			this.flipX = initParam.flipX;
			this.flipY = initParam.flipY;
		};
		
		APNode.prototype.fadeTo = function (opacity, duration) {
			if (opacity != undefined) {
				this.updateTimeStep('opacity', (this.opacity == undefined ? 1 : this.opacity), opacity, duration);
				this.opacity = opacity;
			}
			
			return this;
		}
		
		APNode.prototype.moveTo = function (x, y, duration) {
			if (x != undefined) {
				this.updateTimeStep('x', (this.x == undefined ? [0, 0.5] : this.x), x, duration);
				this.x = x;
			}
			
			if (y != undefined) {
				this.updateTimeStep('y', (this.y == undefined ? [0, 0.5] : this.y), y, duration);
				this.y = y;
			}
			
			return this;
		};
		
		APNode.prototype.scaleTo = function (scale, duration) {
			if (scale != undefined) {
				this.updateTimeStep('scale', (this.scale == undefined ? 1 : this.scale), scale, duration);
				this.scale = scale;
			}
			
			return this;
		};
		
		APNode.prototype.rotateTo = function (angle, duration) {
			if (angle != undefined) {
				this.updateTimeStep('angle', (this.angle == undefined ? 0 : this.angle), angle, duration);
				this.angle = angle;
			}
			
			return this;
		};
		
		APNode.prototype.update = function (e) {
			function calc(value, refer, dpr) {
				if (Array.isArray(value)) {
					return value[0] * dpr + value[1] * refer;
				} else {
					return value * dpr;
				}
			}
			
			var domX, domY, domDefaultX, domDefaultY;
			var dpr = e.dpr;
			var referSize = { width: e.canvas.width, height: e.canvas.height };
			var domNode = this.referNode instanceof HTMLElement ? this.referNode : undefined;
			if (domNode) {
				if (this.referFollow || !this.referBounds) {
					var rect = domNode.getBoundingClientRect();
					this.referBounds = {
						x: rect.left,
						y: decadeUI.get.bodySize().height - rect.bottom,
						width: rect.width,
						height: rect.height,
					};
				}
				
				referSize.height = this.referBounds.height * dpr;
				referSize.width = this.referBounds.width * dpr;
			}
			
			var timestep, percent;
			var renderX, renderY, renderScale, renderScaleX, renderScaleY;
			var skeletonSize = this.skeleton.bounds.size;
			
			timestep = this.timestepMap.x;
			if (timestep != undefined && !timestep.completed) {
				timestep.update(e.delta);
				renderX = calc(timestep.current, referSize.width, dpr);
			} else if (this.x != undefined) {
				renderX = calc(this.x, referSize.width, dpr);
			}
			
			timestep = this.timestepMap.y;
			if (timestep != undefined && !timestep.completed) {
				timestep.update(e.delta);
				renderY = calc(timestep.current, referSize.height, dpr);
			} else if (this.y != undefined) {
				renderY = calc(this.y, referSize.height, dpr);
			}
			
			if (this.width != undefined) renderScaleX = calc(this.width, referSize.width, dpr) / skeletonSize.x;
			if (this.height != undefined) renderScaleY = calc(this.height, referSize.height, dpr) / skeletonSize.y;
			
			if (domNode) {
				if (renderX == undefined) {
					renderX = (this.referBounds.x + this.referBounds.width / 2) * dpr;
				} else {
					renderX += this.referBounds.x * dpr;
				}
				
				if (renderY == undefined) {
					renderY = (this.referBounds.y + this.referBounds.height / 2) * dpr;
				} else {
					renderY += this.referBounds.y * dpr;
				}
			}
			
			this.mvp.ortho2d(0, 0, e.canvas.width, e.canvas.height);
			if (renderX != void 0 && renderY == void 0) {
				this.mvp.translate(renderX, 0, 0);
				this.mvp.setY(0);
			} else if (renderX == void 0 && renderY != void 0) {
				this.mvp.translate(0, renderY, 0);
				this.mvp.setX(0);
			} else if (renderX != void 0 && renderY != void 0) {
				this.mvp.translate(renderX, renderY, 0);
			} else {
				this.mvp.setPos2D(0, 0);
			}
			
			timestep = this.timestepMap.scale;
			if (timestep != undefined && !timestep.completed) {
				timestep.update(e.delta);
				renderScale = timestep.current;
			} else {
				renderScale = (this.scale == undefined ? 1 : this.scale);
			}
			
			if (renderScaleX && !renderScaleY) {
				renderScale *= renderScaleX;
			} else if (!renderScaleX && renderScaleY) {
				renderScale *= renderScaleY;
			} else if (renderScaleX && renderScaleY) {
				renderScale *= Math.min(renderScaleX, renderScaleY);
			} else {
				renderScale *= dpr;
			}
			
			if (renderScale != 1) {
				this.mvp.scale(renderScale, renderScale, 0);
			}
			
			timestep = this.timestepMap.angle;
			if (timestep != undefined && !timestep.completed) {
				timestep.update(e.delta);
				this.renderAngle = timestep.current;
			} else {
				this.renderAngle = this.angle;
			}
			
			if (this.renderAngle) {
				this.mvp.rotate(this.renderAngle, 0, 0, 1);
			}
			
			timestep = this.timestepMap.opacity;
			if (timestep != undefined && !timestep.completed) {
				timestep.update(e.delta);
				this.renderOpacity = timestep.current;
			} else {
				this.renderOpacity = this.opacity;
			}
			
			this.renderX = renderX;	this.renderY = renderY;	this.renderScale = renderScale;
			if (this.clip) {
				this.renderClip = { 
					x: calc(this.clip.x, e.canvas.width, dpr),
					y: calc(this.clip.y, e.canvas.height, dpr),
					width: calc(this.clip.width, e.canvas.width, dpr),
					height: calc(this.clip.height, e.canvas.height, dpr)
				};
			}
			
			if (this.onupdate) this.onupdate();
		};
		
		APNode.prototype.setAction = function (action, transtion) {
			if (this.skeleton && this.skeleton.node == this) {
				if (this.skeleton.data.findAnimation(action) == null) return console.error('setAction: 未找到对应骨骼动作');
				transtion = transtion == undefined ? 0.5 : transtion / 1000;
				var entry = this.skeleton.state.setAnimation(0, action, this.loop);
				entry.mixDuration = transtion;
			} else {
				console.error('setAction: 节点失去关联');
			}
		};
		
		APNode.prototype.resetAction = function (transtion) {
			if (this.skeleton && this.skeleton.node == this) {
				transtion = transtion == undefined ? 0.5 : transtion / 1000;
				var entry = this.skeleton.state.setAnimation(0, this.skeleton.defaultAction, this.loop);
				entry.mixDuration = transtion;
			} else {
				console.error('resetAction: 节点失去关联');
			}
		};
		
		APNode.prototype.complete = function () {
			if (!this.oncomplete)
				return;
			
			if (typeof this.oncomplete == 'string') {
				var code = this.oncomplete;
				var a = code.indexOf('{');
				var b = code.lastIndexOf('}');
				if (a == -1 || b == -1) {
					this.oncomplete = undefined;
					return console.error(this.name + ' 的oncomplete函数语法错误');
				}
				
				this.oncomplete = new Function(code.substring(a + 1, b));
			}
				
			
			if (typeof this.oncomplete == 'function')
				this.oncomplete();
		};
		
		APNode.prototype.updateTimeStep = function (key, start, end, duration) {
			if (duration == undefined || duration == 0)
				return;
			
			var timestep = this.timestepMap[key];
			if (timestep) {
				timestep.start = timestep.completed ? start : timestep.current;
				timestep.end = end;
				timestep.time = 0;
				timestep.percent = 0;
				timestep.completed = false;
				timestep.duration = duration;
			} else {
				timestep = this.timestepMap[key] = new duilib.TimeStep({
					start: start,
					end: end,
					duration: duration,
				});
			}
			
			return timestep;
		}
		
		return APNode;
	})();

	duilib.AnimationPlayer = (function(){
		function AnimationPlayer (pathPrefix, parentNode, elementId) {
			if (!window.spine) return console.error('spine 未定义.');
			
			var canvas;
			if (parentNode === 'offscreen') {
				canvas = elementId
				this.offscreen = true;
			} else {
				canvas = document.createElement('canvas');
				canvas.className = 'animation-player';
				if (elementId != undefined) canvas.id = elementId;
				if (parentNode != undefined) parentNode.appendChild(canvas); 
			}
			
			var config = { alpha: true };
			var gl = canvas.getContext('webgl2', config);
			if (gl == undefined) {
				gl = canvas.getContext('webgl', config) || canvas.getContext('experimental-webgl', config);
			} else {
				gl.isWebgl2 = true;
			}
			
			if (gl) {
				this.spine = {
					shader: spine.webgl.Shader.newTwoColoredTextured(gl),
					batcher: new spine.webgl.PolygonBatcher(gl),
					skeletonRenderer: new spine.webgl.SkeletonRenderer(gl),
					assetManager: new spine.webgl.AssetManager(gl, pathPrefix),
					assets: {},
					skeletons: [],
				}
			} else {
				this.spine = { assets: {} };
				console.error('当前设备不支持 WebGL.');
			}
			
			this.gl = gl;
			this.canvas = canvas;
			this.$canvas = canvas;
			this.frameTime = undefined;
			this.running = false;
			this.resized = false;
			this.dpr = 1;
			this.nodes = [];
			this.BUILT_ID = 0;
			this._dprAdaptive = false;
			
			Object.defineProperties(this, {
				dprAdaptive: {
					get:function(){
						return this._dprAdaptive;
					},
					set:function(value){
						if (this._dprAdaptive == value) return;
						this._dprAdaptive = value;
						this.resized = false;
					},
				},
				useMipMaps: {
					get:function(){
						if (!gl) return;
						return this.gl.useMipMaps;
					},
					set:function(value){
						if (!gl) return;
						this.gl.useMipMaps = value;
					},
				}
			});
			
			if (!this.offscreen) {
				this.canvas.width = canvas.clientWidth;
				this.canvas.height = canvas.clientHeight;
			}
			
			this.check = function () {
				if (!this.gl) {
					function empty(){};
					var key;
					for (key in this.__proto__) {
						if (typeof this.__proto__[key] == 'function') {
							this.__proto__[key] = empty;
						}
					}
					
					for (key in this) {
						if (typeof this[key] == 'function' && key != 'check') {
							this[key] = empty;
						}
					}
					
				}
			};
			
			this.check();
		};
		
		AnimationPlayer.prototype.createTextureRegion = function (image, name) {
			var page = new spine.TextureAtlasPage();
			page.name = name;
			page.uWrap = spine.TextureWrap.ClampToEdge;
			page.vWrap = spine.TextureWrap.ClampToEdge;
			page.texture = this.spine.assetManager.textureLoader(image);
			page.texture.setWraps(page.uWrap, page.vWrap);
			page.width = page.texture.getImage().width;
			page.height = page.texture.getImage().height;
			
			
			
			var region = new spine.TextureAtlasRegion();
			region.page = page;
			region.rotate = false;
			region.width = page.width;
			region.height = page.height;
			region.x = 0;
			region.y = 0;
			region.u = region.x / page.width;
			region.v = region.y / page.height;
			if (region.rotate) {
				region.u2 = (region.x + region.height) / page.width;
				region.v2 = (region.y + region.width) / page.height;
			}
			else {
				region.u2 = (region.x + region.width) / page.width;
				region.v2 = (region.y + region.height) / page.height;
			}
			
			region.originalWidth = page.width;
			region.originalHeight = page.height;
			region.index = -1;
			region.texture = page.texture;
			region.renderObject = region;
			
			return region;
		};
		
		AnimationPlayer.prototype.hasSpine = function (filename) {
			return this.spine.assets[filename] != undefined;
		};
		
		AnimationPlayer.prototype.loadSpine = function (filename, skelType, onload, onerror) {
			skelType = skelType == undefined ? 'skel' : skelType.toLowerCase();
			var thisAnim = this;
			var reader = {
				name: filename,
				filename: filename,
				skelType: skelType,
				onsuccess: onload,
				onfailed: onerror,
				loaded: 0,
				errors: 0,
				toLoad: 2,
				onerror:function(path, msg){
					var _this = reader;
					_this.toLoad--;
					_this.errors++;
					if (_this.toLoad == 0) {
						console.error('loadSpine: [' + _this.filename + '] 加载失败.');
						if (_this.onfailed) _this.onfailed();
					}
				},
				onload:function(path, data){
					var _this = reader;
					_this.toLoad--;
					_this.loaded++;
					if (_this.toLoad == 0) {
						if (_this.errors > 0) {
							console.error('loadSpine: [' + _this.filename + '] 加载失败.');
							if (_this.onfailed) _this.onfailed();
						} else {
							thisAnim.spine.assets[_this.filename] = { name: _this.filename, skelType: _this.skelType };
							if (_this.onsuccess) _this.onsuccess();
						}
					}
				},
				ontextLoad:function(path, data){
					var _this = reader;
					var imageName = null;
					var atlasReader = new spine.TextureAtlasReader(data);
					var prefix = '';
					var a = _this.name.lastIndexOf('/');
					var b = _this.name.lastIndexOf('\\');
					if (a != -1 || b != -1) {
						if (a > b)
							prefix = _this.name.substring(0, a + 1);
						else
							prefix = _this.name.substring(0, b + 1);
					}
					
					while (true) {
						var line = atlasReader.readLine();
						if (line == null) break;
						line = line.trim();
						
						if (line.length == 0) {
							imageName = null;
						} else if (!imageName) {
							imageName = line;
							_this.toLoad++;
							thisAnim.spine.assetManager.loadTexture(prefix + imageName,
								_this.onload, _this.onerror);
						} else {
							continue;
						}
					}
					
					_this.onload(path, data);
				},
			};
			
			if (skelType == 'json') {
				thisAnim.spine.assetManager.loadText(filename + '.json',
					reader.onload, reader.onerror);
			} else {
				thisAnim.spine.assetManager.loadBinary(filename + '.skel',
					reader.onload, reader.onerror);
			}
			
			thisAnim.spine.assetManager.loadText(filename + '.atlas',
				reader.ontextLoad, reader.onerror);
		};
		
		AnimationPlayer.prototype.prepSpine = function (filename, autoLoad) {
			var _this = this;
			var spineAssets = _this.spine.assets;
			if (!spineAssets[filename]) {
				if (autoLoad) {
					_this.loadSpine(filename, 'skel', function(){
						_this.prepSpine(filename);
					});
					return 'loading';
				}
				return console.error('prepSpine: [' + filename + '] 骨骼没有加载');
			}
			
			var skeleton;
			var skeletons = _this.spine.skeletons;
			for (var i = 0; i < skeletons.length; i++) {
				skeleton = skeletons[i];
				if (skeleton.name == filename && skeleton.completed) return skeleton;
			}
			
			var asset = spineAssets[filename];
			var manager = _this.spine.assetManager;
			var skelRawData = asset.skelRawData;
			if (!skelRawData) {
				var prefix = '';
				var a = filename.lastIndexOf('/');
				var b = filename.lastIndexOf('\\');
				if (a != -1 || b != -1) {
					if (a > b)
						prefix = filename.substring(0, a + 1);
					else
						prefix = filename.substring(0, b + 1);
				}
				var atlas = new spine.TextureAtlas(manager.get(filename + '.atlas'), function(path){
					return manager.get(prefix + path);
				});
				
				var atlasLoader = new spine.AtlasAttachmentLoader(atlas);
				if (asset.skelType.toLowerCase() == 'json') {
					skelRawData = new spine.SkeletonJson(atlasLoader);
				} else {
					skelRawData = new spine.SkeletonBinary(atlasLoader);
				}
				
				spineAssets[filename].skelRawData = skelRawData;
				spineAssets[filename].ready = true;
			}
			
			var data = skelRawData.readSkeletonData(manager.get(filename + '.' + asset.skelType));
			skeleton = new spine.Skeleton(data);
			
			skeleton.name = filename;
			skeleton.completed = true;
			skeleton.setSkinByName('default');
			skeleton.setToSetupPose();
			skeleton.updateWorldTransform();
			skeleton.state = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
			skeleton.state.addListener({
				complete:function(track){
					var node = skeleton.node;
					if (node) {
						track.loop = (node.loop == undefined ? false : node.loop);
						if (track.loop && node.loopCount > 0) {
							node.loopCount--;
							if (node.loopCount == 0) track.loop = false;
						}
						skeleton.completed = node.completed = !track.loop;
						if (node.complete) node.complete();
					} else {
						skeleton.completed = !track.loop;
						console.error('skeleton complete: 超出预期的错误');
					}
				}
			});
			skeleton.bounds = { offset: new spine.Vector2(), size: new spine.Vector2() };
			skeleton.getBounds(skeleton.bounds.offset, skeleton.bounds.size, []);
			skeleton.defaultAction = data.animations[0].name;
			skeleton.node = undefined;
			skeletons.push(skeleton);
			return skeleton;
		};
		
		AnimationPlayer.prototype.playSpine = function (sprite, position){
			if (self.duicfg && !self.duicfg.gameAnimationEffect) return;
			if (sprite == undefined) return console.error('playSpine: parameter undefined');
			if (typeof sprite == 'string') sprite = { name: sprite };
			if (!this.hasSpine(sprite.name)) return console.error('playSpine: [' + sprite.name + '] 骨骼没有加载');
			
			var skeletons = this.spine.skeletons;
			var skeleton;
			
			if (!(sprite instanceof duilib.APNode && sprite.skeleton.completed)) {
				for (var i = 0; i < skeletons.length; i++) {
					skeleton = skeletons[i];
					if (skeleton.name == sprite.name && skeleton.completed) break;
					skeleton = null;
				}; if (!skeleton) skeleton = this.prepSpine(sprite.name);
				
				if (!(sprite instanceof duilib.APNode)) {
					var param = sprite;
					sprite = new duilib.APNode(sprite);
					sprite.id = param.id == undefined ? this.BUILT_ID++ : param.id;
					this.nodes.push(sprite);
				}
				
				sprite.skeleton = skeleton;
				skeleton.node = sprite;
			}
			
			sprite.completed = false;
			skeleton.completed = false;
			
			if (position != undefined) {
				sprite.x = position.x;
				sprite.y = position.y;
				sprite.height = position.height;
				sprite.width = position.width;
				sprite.scale = position.scale;
				sprite.angle = position.angle;
				sprite.referNode = position.parent;
				sprite.referFollow = position.follow;
			}
			
			var entry = skeleton.state.setAnimation(0, sprite.action ? sprite.action : skeleton.defaultAction, sprite.loop);
			entry.mixDuration = 0;
			if (this.requestId == undefined) {
				this.running = true;
				if (!this.offscreen) this.canvas.style.visibility = 'visible';
				this.requestId = requestAnimationFrame(this.render.bind(this));
			}
			
			sprite.referBounds = undefined;
			return sprite;
		};
		
		AnimationPlayer.prototype.loopSpine = function (sprite, position) {
			if (typeof sprite == 'string') {
				sprite = {
					name: sprite,
					loop: true,
				}
			} else {
				sprite.loop = true;
			}
			
			return this.playSpine(sprite, position);
		};
		
		AnimationPlayer.prototype.stopSpine = function (sprite) {
			var nodes = this.nodes;
			var id = sprite.id == undefined ? sprite : sprite.id;
			
			for (var i = 0; i < nodes.length; i++) {
				sprite = nodes[i];
				if (sprite.id == id) {
					if (!sprite.completed) {
						sprite.completed = true;
						sprite.skeleton.state.setEmptyAnimation(0);
					}
					return sprite;
				}
			}
			
			return null;
		};
		
		AnimationPlayer.prototype.stopSpineAll = function () {
			var sprite;
			var nodes = this.nodes;
			for (var i = 0; i < nodes.length; i++) {
				sprite = nodes[i];
				if (!sprite.completed) {
					sprite.completed = true;
					sprite.skeleton.state.setEmptyAnimation(0);
				}
			}
		};
		
		AnimationPlayer.prototype.getSpineActions = function (filename) {
			if (!this.hasSpine(filename)) return console.error('getSpineActions: [' + filename + '] 骨骼没有加载');
			
			var skeleton;
			var skeletons = this.spine.skeletons;
			for (var i = 0; i < skeletons.length; i++) {
				skeleton = skeletons[i];
				if (skeleton.name == filename) break;
				skeleton = undefined;
			}
			
			if (skeleton == undefined) skeleton = this.prepSpine(filename);
			var actions = skeleton.data.animations;
			var result = new Array(actions.length);
			for (var i = 0; i < actions.length; i++) result[i] = { name: actions[i].name, duration: actions[i].duration };
			return result;
		};
		
		AnimationPlayer.prototype.getSpineBounds = function (filename) {
			if (!this.hasSpine(filename)) return console.error('getSpineBounds: [' + filename + '] 骨骼没有加载');
			
			if (!this.resized) {
				var dpr = 1;
				if (this.dprAdaptive == true)
					dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
				
				canvas.elementHeight = canvas.clientHeight;
				canvas.elementWidth = canvas.clientWidth;
				canvas.height = canvas.elementHeight * dpr;
				canvas.width = canvas.elementWidth * dpr;
			}
			
			var skeleton;
			var skeletons = this.spine.skeletons;
			for (var i = 0; i < skeletons.length; i++) {
				skeleton = skeletons[i];
				if (skeleton.name == filename) break;
				skeleton = undefined;
			}
			
			if (skeleton == undefined) skeleton = this.prepSpine(filename);
			return skeleton.bounds;
		};
		
		AnimationPlayer.prototype.render = function (timestamp) {
			var canvas = this.canvas;
			var offscreen = this.offscreen;
			var dpr = 1;
			if (this.dprAdaptive) {
				if (offscreen)
					dpr = this.dpr != undefined ? this.dpr : 1;
				else
					dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
			}
			var delta = timestamp - ((this.frameTime == undefined) ? timestamp : this.frameTime);
			this.frameTime = timestamp;
			
			var erase = true;
			var resize = !this.resized || canvas.width == 0 || canvas.height == 0;
			if (resize) {
				this.resized = true;
				if (!offscreen) {
					canvas.width  = dpr * canvas.clientWidth;
					canvas.height = dpr * canvas.clientHeight;
					erase = false;
				} else {
					if (this.width)  {
						canvas.width  = dpr * this.width;
						erase = false;
					}
					if (this.height) {
						canvas.height = dpr * this.height;
						erase = false;
					}
				}
			}
			
			var ea = {
				dpr: dpr,
				delta: delta,
				canvas: canvas,
				frameTime: timestamp,
			};
			
			var nodes = this.nodes;
			for (var i = 0; i < nodes.length; i++) {
				if (!nodes[i].completed) {
					nodes[i].update(ea);
				} else {
					nodes.remove(nodes[i]);i--;
				}
			}
			
			var gl = this.gl;
			gl.viewport(0, 0, canvas.width, canvas.height);
			if (erase) {
				gl.clearColor(0, 0, 0, 0);
				gl.clear(gl.COLOR_BUFFER_BIT);
			}
			
			if (nodes.length == 0) {
				this.frameTime = void 0;
				this.requestId = void 0;
				this.running = false;
				if (!offscreen) this.canvas.style.visibility = 'hidden';
				return;
			}
			
			var sprite, state, skeleton;
			var shader = this.spine.shader;
			var batcher = this.spine.batcher;
			var renderer = this.spine.skeletonRenderer;
			
			gl.enable(gl.SCISSOR_TEST);
			gl.scissor(0, 0, canvas.width, canvas.height);
			
			if (this.bindShader == undefined) {
				this.bindShader = shader;
				shader.bind();
				shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
			}
			
			var speed;
			for (var i = 0; i < nodes.length; i++) {
				sprite = nodes[i];
				if (sprite.renderClip != undefined) {
					gl.clipping = sprite.renderClip;
					gl.scissor(gl.clipping.x, gl.clipping.y, gl.clipping.width, gl.clipping.height);
				}
				
				skeleton = sprite.skeleton;
				state = skeleton.state;
				speed = sprite.speed == undefined ? 1 : sprite.speed;
				skeleton.flipX = sprite.flipX;
				skeleton.flipY = sprite.flipY
				skeleton.opacity = (sprite.renderOpacity == undefined ? 1 : sprite.renderOpacity);
				state.hideSlots = sprite.hideSlots;
				state.update(delta / 1000 * speed);
				state.apply(skeleton);
				skeleton.updateWorldTransform();
				
				shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, sprite.mvp.values);
				batcher.begin(shader);
				renderer.premultipliedAlpha = sprite.premultipliedAlpha;
				renderer.outcropMask = this.outcropMask;
				if (renderer.outcropMask) {
					renderer.outcropX = sprite.renderX;
					renderer.outcropY = sprite.renderY;
					renderer.outcropScale = sprite.renderScale;
					renderer.outcropAngle = sprite.renderAngle;
					renderer.clipSlots = sprite.clipSlots;
				}
				
				renderer.hideSlots = sprite.hideSlots;
				renderer.disableMask = sprite.disableMask;
				renderer.draw(batcher, skeleton);
				batcher.end();
				
				if (gl.clipping) {
					gl.clipping = undefined;
					gl.scissor(0, 0, canvas.width, canvas.height);
				}
			}
			
			gl.disable(gl.SCISSOR_TEST);
			
			this.requestId = requestAnimationFrame(this.render.bind(this));
		};
		
		
		return AnimationPlayer;
	})();
	
	duilib.AnimationPlayerPool = (function(){
		function AnimationPlayerPool(size, pathPrefix, thisName){
			if (!self.spine) return console.error('spine 未定义.');
			
			this.name = thisName;
			this.animations = new Array(size ? size : 1);
			for (var i = 0; i < this.animations.length; i++) this.animations[i] = new duilib.AnimationPlayer(pathPrefix);
			
		};
		
		AnimationPlayerPool.prototype.loadSpine = function (filename, skelType, onload, onerror) {
			var thisAnim = this;
			thisAnim.animations[0].loadSpine(filename, skelType, function(){
				var ap;
				var aps = thisAnim.animations;
				
				for (var i = 1; i < aps.length; i++) {
					ap = aps[i];
					if (window.requestIdleCallback) {
						requestIdleCallback(ap.prepSpine.bind(ap, this.name, true), { timeout: 200 });
					} else {
						setTimeout(function(ap, name){
							ap.prepSpine(name, true);
						}, 50, ap, this.name);
					}
				}
				
				if (onload) onload();
			}, onerror);
		};
		
		AnimationPlayerPool.prototype.playSpineTo = function (element, animation, position) {
			var animations = this.animations;
			if (position && position.parent) {
				position.parent = undefined;
				console.log('playSpineTo: position.parent 参数已忽略');
			}
			if (element._ap && element._ap.canvas.parentNode == element) {
				element._ap.playSpine(animation, position);
				return;
			}
			
			for (var i = 0; i < animations.length; i++) {
				if (!animations[i].running) {
					if (animations[i].canvas.parentNode != element) {
						element._ap = animations[i];
						element.appendChild(animations[i].canvas);
					}
					animations[i].playSpine(animation, position);
					return;
				}
			}
			
			console.error('spine:' + (this.name != null ? this.name : '' + '可用动画播放组件不足'));
			
		};
		
		return AnimationPlayerPool;
	})();
	
	duilib.BUILT_ID = 0;
	duilib.DynamicWorkers = new Array(2);
	duilib.DynamicPlayer = (function(){
		function DynamicPlayer(pathPrefix){
			this.id = duilib.BUILT_ID++;
			this.dpr = 1;
			this.width = 120;
			this.height = 180;
			this.dprAdaptive = false;
			this.BUILT_ID = 0;
			
			var offscreen = self.OffscreenCanvas != undefined;
			if (offscreen) {
				offscreen = false;
				var workers = duilib.DynamicWorkers;
				for (var i = 0; i < workers.length; i++) {
					if (workers[i] == undefined) {
						workers[i] = new Worker(decadeUIPath + 'dynamicWorker.js');
						workers[i].capacity = 0;
					} else if (workers[i].capacity >= 4) {
						continue;
					}
					
					this.renderer = workers[i];
					this.canvas = document.createElement('canvas');
					this.canvas.className = 'animation-player';
					duilib.observeSize(this.canvas, duilib.throttle(function(newSize){
						this.height = Math.round(newSize.height);
						this.width  = Math.round(newSize.width);
						this.update();
					}, 100, this));
					
					var canvas = this.canvas.transferControlToOffscreen();
					workers[i].postMessage({
						message: 'CREATE',
						id: this.id,
						canvas: canvas,
						pathPrefix: pathPrefix,
					}, [canvas]);
					
					workers[i].capacity++;
					this.offscreen = offscreen = true;
					break;
				}
			}
			
			if (!offscreen) {
				var renderer = new duilib.AnimationPlayer(decadeUIPath + pathPrefix);
				this.canvas = renderer.canvas;
				this.renderer = renderer;
				dui.bodySensor.addListener(duilib.throttle(function(){
					this.renderer.resized = false;
				}, 100, this), true);
			}
		}
		
		DynamicPlayer.prototype.play = function (sprite) {
			var sprite = (typeof sprite == 'string') ? { name: sprite } : sprite;
			sprite.id = this.BUILT_ID++;
			sprite.loop = true;
			
			if (this.offscreen) {
				if (!this.initialized) {
					this.initialized = true;
					this.dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
					this.height = this.canvas.clientHeight;
					this.width = this.canvas.clientWidth;
				}
				
				if (typeof sprite.oncomplete == 'function')
					sprite.oncomplete = sprite.oncomplete.toString();
				
				this.renderer.postMessage({
					message: 'PLAY',
					id: this.id,
					dpr: this.dpr,
					dprAdaptive: this.dprAdaptive,
					outcropMask: this.outcropMask,
					useMipMaps: this.useMipMaps,
					width: this.width,
					height: this.height,
					sprite: sprite,
				});
			} else {
				var dynamic = this.renderer;
				dynamic.useMipMaps = this.useMipMaps;
				dynamic.dprAdaptive = this.dprAdaptive;
				dynamic.outcropMask = this.outcropMask;
				var run = function () {
					var t = dynamic.playSpine(sprite);
					t.opacity = 0;
					t.fadeTo(1, 600);
				};
				
				if (dynamic.hasSpine(sprite.name)) {
					run();
				} else {
					dynamic.loadSpine(sprite.name, 'skel', run);
				}
			}
			
			return sprite;
		};
		
		DynamicPlayer.prototype.stop = function (sprite) {
			if (this.offscreen) {
				this.renderer.postMessage({
					message: 'STOP',
					id: this.id,
					sprite: sprite,
				});
				return;
			}
			
			this.renderer.stopSpine(sprite);
		};
		
		DynamicPlayer.prototype.stopAll = function () {
			if (this.offscreen) {
				this.renderer.postMessage({
					message: 'STOPALL',
					id: this.id
				});
				return;
			}
			
			this.renderer.stopSpineAll();
		};
		
		DynamicPlayer.prototype.update = function (force) {
			if (!this.offscreen) {
				this.renderer.resized = false;
				this.renderer.useMipMaps = this.useMipMaps;
				this.renderer.dprAdaptive = this.dprAdaptive;
				this.renderer.outcropMask = this.outcropMask;
				return;
			}
			
			this.dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
			if (force === false)
				return;
			
			this.renderer.postMessage({
				message: 'UPDATE',
				id: this.id,
				dpr: this.dpr,
				dprAdaptive: this.dprAdaptive,
				outcropMask: this.outcropMask,
				useMipMaps: this.useMipMaps,
				width: this.width,
				height: this.height,
			});
		}
		
		return DynamicPlayer;
	})();
	
})(duilib || (duilib = {}));

var decadeModule;
if (decadeModule) decadeModule.import(function(lib, game, ui, get, ai, _status) {
	decadeUI.animation = (function(){
		var animation = new decadeUI.AnimationPlayer(decadeUIPath + 'assets/animation/', document.body, 'decadeUI-canvas');
		decadeUI.bodySensor.addListener(function(){ animation.resized = false; }, true);
		animation.cap = new decadeUI.AnimationPlayerPool(4, decadeUIPath + 'assets/animation/', 'decadeUI.animation');
		
		var fileList = [
			{ name: 'jineng' },
			{ name: '战火_背景' },
			{ name: 'effect_baguazhen' },
			{ name: 'effect_baiyinshizi' },
			{ name: 'effect_cixiongshuanggujian' },
			{ name: 'effect_fangtianhuaji' },
			{ name: 'effect_guanshifu' },
			{ name: 'effect_gudingdao' },
			{ name: 'effect_hanbingjian' },
			{ name: 'effect_qilingong' },
			{ name: 'effect_qinggangjian' },
			{ name: 'effect_qinglongyanyuedao' },
			{ name: 'effect_renwangdun' },
			{ name: 'effect_shoujidonghua' },
			{ name: 'effect_tengjiafangyu' },
			{ name: 'effect_tengjiaranshao' },
			{ name: 'effect_zhangbashemao' },
			{ name: 'effect_zhiliao' },
			{ name: 'effect_zhugeliannu' },
			{ name: 'effect_zhuqueyushan' },
			{ name: 'effect_jinhe' },
			{ name: 'effect_numa' },
			{ name: 'effect_nvzhuang' },
			{ name: 'effect_wufengjian' },
			{ name: 'effect_yajiaoqiang' },
			{ name: 'effect_yinfengjia' },
			{ name: 'effect_zheji' },
			{ name: 'effect_jisha1' },
			{ name: 'effect_zhenwang' },
			{ name: 'effect_lebusishu' },
			{ name: 'effect_bingliangcunduan' },
			{ name: 'effect_nanmanruqin'},
			{ name: 'effect_taoyuanjieyi'},
			{ name: 'effect_shandian' },
			{ name: 'effect_wanjianqifa_full'},
			{ name: 'effect_xianding', fileType: 'json' },
			{ name: 'effect_caochuanjiejian', follow: true },
			{ name: 'effect_guohechaiqiao', follow: true },
			{ name: 'effect_leisha', follow: true },
			{ name: 'effect_heisha', follow: true },
			{ name: 'effect_huosha' , follow: true },
			{ name: 'effect_hongsha', follow: true },
			{ name: 'effect_huogong', follow: true },
			{ name: 'effect_panding', follow: true },
			{ name: 'effect_shan', follow: true },
			{ name: 'effect_tao', follow: true },
			{ name: 'effect_tiesuolianhuan', follow: true },
			{ name: 'effect_jiu', follow: true },
			{ name: 'effect_shunshouqianyang', follow: true },
			{ name: 'effect_shushangkaihua', follow: true },
			{ name: 'effect_wanjianqifa', follow: true},
			{ name: 'effect_wuzhongshengyou', follow: true },
			{ name: 'effect_wuxiekeji', follow: true },
			{ name: 'effect_wugufengdeng', follow: true },
			{ name: 'effect_yuanjiaojingong', follow: true },
			{ name: 'effect_zhijizhibi', follow: true },
			{ name: 'effect_zhulutianxia', follow: true },
		];
		
		var fileNameList = fileList.concat();
		
		var read = function() {
			if (fileNameList.length) {
				var file = fileNameList.shift();
				if (file.follow) {
					//	这个是专门播放追踪卡牌的动画，调用方式 decadeUI.animation.cap.playSpineTo(element, animation, position);
					//	建议非追踪对象的特效不要滥用，因为每次导入1个骨骼会生成4个预制骨骼，资源占用较多
					animation.cap.loadSpine(file.name, file.fileType, function(){
						read();
					});
				} else {
					//	这个是专门播放全屏位置的动画
					animation.loadSpine(file.name, file.fileType, function(){
						read();
						animation.prepSpine(this.name);
					});
				}
			}
		};read();read();
		
		var skillAnimation = (function(){
			var defines = {
				skill:{
					bagua_skill: { skill: 'bagua_skill', name: 'effect_baguazhen', scale: 0.6 },
					baiyin_skill: { skill: 'baiyin_skill', name: 'effect_baiyinshizi', scale: 0.5 },
					bazhen_bagua: { skill: 'bazhen_bagua', name: 'effect_baguazhen', scale: 0.6 },
					cixiong_skill: { skill: 'cixiong_skill', name: 'effect_cixiongshuanggujian', scale: 0.5 },
					fangtian_skill: { skill: 'fangtian_skill', name: 'effect_fangtianhuaji', scale: 0.7 },
					guanshi_skill: { skill: 'guanshi_skill', name: 'effect_guanshifu', scale: 0.7 },
					guding_skill: { skill: 'guding_skill', name: 'effect_gudingdao', scale: 0.6, x: [0, 0.4], y: [1, 0.25] },
					hanbing_skill: { skill: 'hanbing_skill', name: 'effect_hanbingjian', scale: 0.5 },
					linglong_bagua: { skill: 'linglong_bagua', name: 'effect_baguazhen', scale: 0.5 },
					qilin_skill: { skill: 'qilin_skill', name: 'effect_qilingong', scale: 0.5 },
					qinggang_skill: { skill: 'qinggang_skill', name: 'effect_qinggangjian', scale: 0.7 },
					qinglong_skill: { skill: 'qinglong_skill', name: 'effect_qinglongyanyuedao', scale: 0.6 },
					renwang_skill: { skill: 'renwang_skill', name: 'effect_renwangdun', scale: 0.5 },
					tengjia1: { skill: 'tengjia1', name: 'effect_tengjiafangyu', scale: 0.6 },
					tengjia2: { skill: 'tengjia2', name: 'effect_tengjiaranshao', scale: 0.6 },
					tengjia3: { skill: 'tengjia3', name: 'effect_tengjiafangyu', scale: 0.6 },
					zhangba_skill: { skill: 'zhangba_skill', name: 'effect_zhangbashemao', scale: 0.7 },
					zhuge_skill: { skill: 'zhuge_skill', name: 'effect_zhugeliannu', scale: 0.5 },
					zhuque_skill: { skill: 'zhuque_skill', name: 'effect_zhuqueyushan', scale: 0.6 },
					jinhe_lose: { skill: 'jinhe_lose', name: 'effect_jinhe',scale: 0.4 },
					numa: { skill: 'numa', name: 'effect_numa', scale: 0.4 },
					nvzhuang: { skill: 'nvzhuang', name: 'effect_nvzhuang', scale: 0.5 },
					wufengjian_skill: { skill: 'wufengjian_skill', name: 'effect_wufengjian', scale: 0.4 },
					yajiaoqiang_skill: { skill: 'yajiaoqiang_skill', name: 'effect_yajiaoqiang', scale: 0.5 },
					yinfengjia_skill: { skill: 'yinfengjia_skill', name: 'effect_yinfengjia', scale: 0.5 },
					zheji: { skill: 'zheji', name: 'effect_zheji', scale: 0.35 },
					lebu: { skill: 'lebu', name: 'effect_lebusishu', scale: 0.7 },
					bingliang: { skill: 'bingliang', name: 'effect_bingliangcunduan', scale: 0.7 },
					shandian: { skill: 'shandian', name: 'effect_shandian', scale: 0.7 },
				},
				card: {
					nanman: { card: 'nanman', name: 'effect_nanmanruqin', scale: 0.6, y: [0, 0.4] },
					wanjian: { card: 'wanjian', name: 'effect_wanjianqifa_full', scale: 1.5},
					taoyuan: { card: 'taoyuan', name: 'effect_taoyuanjieyi'},
				}
			}
			
			var cardAnimate = function(card){
				var anim = defines.card[card.name];
				if (!anim) return console.error('cardAnimate:' + card.name);
				animation.playSpine(anim.name, { x: anim.x, y: anim.y, scale: anim.scale });
			};
			
			for (var key in defines.card) {
				lib.animate.card[defines.card[key].card] = cardAnimate;
			}
			
			var skillAnimate = function (name) {
				var anim = defines.skill[name];
				if (!anim) return console.error('skillAnimate:' + name);
				animation.playSpine(anim.name, { x: anim.x, y: anim.y, scale: anim.scale, parent:this });
			};
			
			for (var key in defines.skill) {
				lib.animate.skill[defines.skill[key].skill] = skillAnimate;
			}
			
			var trigger = {
				card:{
					nvzhuang:{
						onEquip:function(){
							if (player.sex == 'male' && player.countCards('he', function(cardx){ return cardx != card; })) {
								lib.animate.skill['nvzhuang'].call(player, 'nvzhuang');
								player.chooseToDiscard(true, function(card) {
									return card != _status.event.card;
								}, 'he').set('card', card);
							}
						},
						onLose:function(){
							if (player.sex != 'male') return;
							var next = game.createEvent('nvzhuang_lose');
							event.next.remove(next);
							var evt = event.getParent();
							if (evt.getlx === false) evt = evt.getParent();
							evt.after.push(next);
							next.player = player;
							next.setContent(function() {
								if (player.countCards('he')) {
									lib.animate.skill['nvzhuang'].call(player, 'nvzhuang');
									player.chooseToDiscard(true, 'he');
								}
							});
						}
					},
					zheji:{
						onEquip:function(){
							lib.animate.skill['zheji'].call(player, 'zheji');
						}
					},
					numa:{
						onEquip:function(){
							lib.animate.skill['numa'].call(player, 'numa');
						}
					},
					lebu:{
						effect:function(){
							if (result.bool == false){
								lib.animate.skill['lebu'].call(player, 'lebu');
								player.skip('phaseUse');
							}
						}
					},
					bingliang:{
						effect:function(){
							if (result.bool == false) {
								if (get.is.changban()) {
									player.addTempSkill('bingliang_changban');
								} else {
									lib.animate.skill['bingliang'].call(player, 'bingliang');
									player.skip('phaseDraw');
								}
							}
						}
					},
					shandian:{
						effect:function(){
							if (result.bool == false) {
								lib.animate.skill['shandian'].call(player, 'shandian');
								player.damage(3, 'thunder', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						}
					},
				},
			};
			
			
			for (var j in trigger.card) {
				if (lib.card[j]) {
					for (var k in trigger.card[j]) {
						lib.card[j][k] = trigger.card[j][k];
					}
				}
			}
		})();
		
		return animation;
	})();
	
	decadeUI.backgroundAnimation = (function(){
		var animation = new decadeUI.AnimationPlayer(decadeUIPath + 'assets/dynamic/', document.body, 'decadeUI-canvas-background');
		decadeUI.bodySensor.addListener(function(){ animation.resized = false; }, true);
		
		animation.dprAdaptive = true;
		if (lib.device) {
			// 手机端
			animation.definedAssets  = {
				skin_xiaosha: {
					default: {
						name: 'skin_xiaosha_default',
						x: [ 0, 0.84],
						y: [ 0, 0.015],
						height: [0, 0.4],
					},
				},
				skin_ahao: {
					default: {
						name: 'skin_ahao_default',
						action: 'daiji1',
						x: [ 0, 0.84],
						y: [ 0, 0.05],
						height: [0, 0.55],
					},
				},
				skin_ale: {
					default: {
						name: 'skin_ale_default',
						action: 'daiji1',
						x: [ 0, 0.847],
						y: [ 0, 0.038],
						height: [0, 0.4],
					},
				},
				skin_datong: {
					default: {
						name: 'skin_datong_default',
						action: 'daiji1',
						x: [ 0, 0.852],
						y: [ 0, 0.03],
						height: [0, 0.4],
					},
				},
				skin_liuli: {
					default: {
						name: 'skin_liuli_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.26],
						height: [0, 0.35],
					},
				},
				skin_lulu: {
					default: {
						name: 'skin_lulu_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.05],
						height: [0, 0.38],
					},
				},
				skin_manman: {
					default: {
						name: 'skin_manman_default',
						action: 'daiji1',
						x: [ 0, 0.84],
						y: [ 0, 0.01],
						height: [0, 0.39],
					},
				},
				skin_rui: {
					default: {
						name: 'skin_rui_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.018],
						height: [0, 0.46],
					},
				},
				skin_xiaoxiao: {
					default: {
						name: 'skin_xiaoxiao_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.025],
						height: [0, 0.4],
					},
				},
				skin_xuanwu: {
					default: {
						name: 'skin_xuanwu_default',
						action: 'daiji1',
						x: [ 0, 0.823],
						y: [ 0, 0.043],
						height: [0, 0.39],
					},
				},
				skin_xueren: {
					default: {
						name: 'skin_xueren_default',
						action: 'daiji1',
						x: [ 0, 0.843],
						y: [ 0, 0.02],
						height: [0, 0.375],
					},
				},
				skin_yan: {
					default: {
						name: 'skin_yan_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.015],
						height: [0, 0.55],
					},
				},
				skin_yueer: {
					default: {
						name: 'skin_yueer_default',
						action: 'daiji1',
						x: [ 0, 0.82],
						y: [ 0, 0.025],
						height: [0, 0.45],
					},
				},
				skin_baosanniang: {
					漫花剑俏: {
						name: 'skin_baosanniang_ManHuaJianQiao',
						x: [0, 0.83],
						y: [0, 0.21],
						height: [0, 0.58],
					},
					嫣然一笑: {
						name: 'skin_baosanniang_YanRanYiXiao',
						action: 'DaiJi',
						x: [0, 0.77],
						y: [0, 0.245],
						height: [0, 0.6],
					},
				},
				skin_caiwenji: {
					才颜双绝: {
						name: 'skin_caiwenji_CaiYanShuangJue',
						x: [0, 0.79],
						y: [0, 0.23],
						height: [0, 0.63],
					},
				},
				skin_caojie: {
					凤历迎春: {
						name: 'skin_caojie_FengLiYingChun',
						x: [ 0, 0.79],
						y: [0, 0.31],
						height: [0, 1.21],
					},
					战场绝版: {
						name: 'skin_caojie_ZhanChang',
						x: [ 0, 0.86],
						y: [0, 0.29],
						height: [0, 0.57],
					},
				},
				skin_caoying: {
					巾帼花舞: {
						name: 'fullskin_caoying_JinGuoHuaWu',
						x: [0, 0.76],
						y: [0, 0.222],
						height: [0, 0.81],
						hideSlots: ['caoying_huashang1', 'caoying_huashang3', 'caoying_huashang6'],
					},
				},
				skin_daqiao: {
					清萧清丽: {
						name: 'skin_daqiao_QingXiaoQingLi',
						x: [ 0, 0.82],
						y: [0, 0.24],
						height: [0, 0.6],
					},
					衣垂绿川: {
						name: 'skin_daqiao_YiChuiLvChuan',
						action: 'DaiJi',
						x: [ 0, 0.83],
						y: [0, 0.31],
						height: [0, 0.85],
						disableMask: true,
					},
					战场绝版: {
						name: 'skin_daqiao_ZhanChang',
						x: [ 0, 0.885],
						y: [0, 0.315],
						height: [0, 0.585],
					},
				},
				skin_diaochan: {
					玉婵仙子: {
						name: 'skin_diaochan_YuChanXianZi',
						x: [0, 0.81],
						y: [0, 0.17],
						height: [0, 0.88],
					},
					战场绝版: {
						name: 'skin_diaochan_ZhanChang',
						x: [0, 0.79],
						y: [0, 0.3],
						height: [0, 0.82],
					},
				},
				skin_dongbai: {
					娇俏伶俐: {
						name: 'skin_dongbai_JiaoQiaoLingLi',
						x: [0, 0.83],
						y: [0, 0.18],
						height: [0, 0.7],
					},
				},
				skin_fanyufeng: {
					斟酒入情: {
						name: 'skin_fanyufeng_ZhenJiuRuQing',
						x: [0, 0.77],
						y: [0, 0.27],
						height: [0, 0.88],
					},
				},
				skin_fuhuanghou: {
					万福千灯: {
						name: 'skin_fuhuanghou_WanFuQianDeng',
						x: [0, 0.85],
						y: [0, 0.27],
						height: [0, 0.69],
					},
				},
				skin_guozhao: {
					雍容尊雅: {
						name: 'skin_guozhao_YongRongZunYa',
						x: [0, 0.77],
						y: [0, 0.27],
						height: [0, 0.52],
					},
				},
				skin_hetaihou: {
					蛇蝎为心:{
						name: 'skin_hetaihou_SheXieWeiXin',
						action: 'DaiJi',
						x: [0, 0.81],
						y: [0, 0.23],
						height: [0, 0.61],
					},
					耀紫迷幻:{
						name: 'skin_hetaihou_YaoZiMiHuan',
						x: [0, 0.84],
						y: [0, 0.26],
						height: [0, 0.62],
					},
					鸩毒除患: {
						name: 'skin_hetaihou_ZhenDuChuHuan',
						x: [0, 0.78],
						y: [0, 0.25],
						height: [0, 0.49],
					},
				},
				skin_huaman: {
					经典形象: {
						name: 'skin_huaman_default',
						x: [0, 0.9],
						y: [0, 0.13],
						height: [0, 0.4],
					},
					花俏蛮娇: {
						name: 'skin_huaman_HuaQiaoManJiao',
						x: [0, 0.85],
						y: [0, 0.29],
						height: [0, 0.55],
					}
				},
				skin_huangyueying: {
					花好月圆: {
						name: 'skin_huangyueying_HuaHaoYueYuan',
						x: [0, 0.84],
						y: [0, 0.285],
						height: [0, 0.535],
					},
					持智思耀: {
						name: 'skin_huangyueying_ChiZhiSiYao',
						x: [0, 0.84],
						y: [0, 0.27],
						height: [0, 0.55],
					}
				},
				skin_lukang: {
					毁堰破晋: {
						name: 'skin_lukang_HuiYanPoJin',
						x: [0, 0.82],
						y: [0, 0.28],
						height: [0, 0.87],
					},
				},
				skin_luxun: {
					谋定天下: {
						name: 'skin_luxun_MouDingTianXia',
						x: [0, 0.8],
						y: [0, 0.18],
						height: [0, 0.82],
					},
				},
				skin_mayunlu: {
					战场绝版:{
						name: 'skin_mayunlu_ZhanChang',
						x: [ 0, 0.88],
						y: [0, 0.205],
						height: [0, 0.86],
					},
					烟绚繁星:{
						name: 'skin_mayunlu_YanXuanFanXing',
						x: [ 0, 0.79],
						y: [0, 0.25],
						height: [0, 0.56],
					},
				},
				skin_sunluban: {
					宵靥谜君: {
						name: 'skin_sunluban_XiaoYeMiJun',
						x: [0, 0.81],
						y: [0, 0.32],
						height: [0, 0.55],
					},
				},
				skin_sunluyu: {
					娇俏伶俐: {
						name: 'skin_sunluyu_JiaoQiaoLingLi',
						x: [0, 0.81],
						y: [0, 0.27],
						height: [0, 0.6],
					},
				},
				skin_shuxiangxiang: {
					花好月圆: {
						name: 'skin_shuxiangxiang_HuaHaoYueYuan',
						x: [0, 0.81],
						y: [0, 0.29],
						height: [0, 0.58],
					},
					花曳心牵: {
						name: 'skin_shuxiangxiang_HuaYeXinQian',
						x: [ 0, 0.81],
						y: [0, 0.35],
						height: [0, 0.62],
					},
				},
				skin_wangrong: {
					云裳花容: {
						name: 'skin_wangrong_YunShangHuaRong',
						x: [0, 0.78],
						y: [0, 0.33],
						height: [0, 0.86],
					},
				},
				skin_wangyi: {
					绝色异彩: {
						name: 'skin_wangyi_JueSeYiCai',
						x: [0, 0.82],
						y: [0, 0.27],
						height: [0, 0.58],
					},
					战场绝版: {
						name: 'skin_wangyi_ZhanChang',
						x: [0, 0.79],
						y: [0, 0.3],
						height: [0, 0.84],
					},
				},
				skin_wangyuanji: {
					鼠年冬至: {
						name: 'skin_wangyuanji_ShuNianDongZhi',
						action: 'DaiJi',
						x: [0, 0.77],
						y: [0, 0.36],
						height: [0, 0.53],
					},
				},
				skin_wolongzhuge: {
					隆中陇亩: {
						name: 'skin_wolongzhuge_LongZhongLongMu',
						x: [0, 0.81],
						y: [0, 0.27],
						height: [0, 0.7],
					},
				},
				skin_wuxian: {
					锦运福绵: {
						name: 'skin_wuxian_JinYunFuMian',
						x: [0, 0.76],
						y: [0, 0.28],
						height: [0, 0.69],
					},
					金玉满堂: {
						name: 'fullskin_wuxian_JinYuManTang',
						x: [0, 0.8],
						y: [0, 0.2],
						height: [0, 0.73],
					},
				},
				skin_xiahoushi: {
					端华夏莲: {
						name: 'skin_xiahoushi_DuanHuaXiaLian',
						x: [0, 0.81],
						y: [0, 0.235],
						height: [0, 0.73],
					},
					战场绝版: {
						name: 'skin_xiahoushi_ZhanChang',
						x: [0, 0.81],
						y: [0, 0.32],
						height: [0, 0.57],
					},
				},
				skin_xiaoqiao: {
					采莲江南: {
						name: 'skin_xiaoqiao_CaiLianJiangNan',
						action: 'DaiJi',
						x: [0, 0.86],
						y: [0, 0.29],
						height: [0, 0.85],
						hideSlots: ['guang3_30', 'bghua1', 'bgshitou1', 'bgshitou2', 'hehua1', 
							'hehua2', 'hehua3', 'hehua4', 'shuchong1', 'shuchong2', 'shugan',
							'shui1', 'shui2', 'shuimian', 'shuiwen1', 'shuiwen2', 'shuiwen3', 'qjhehua', 'heye2'],
					},
					花好月圆: {
						name: 'skin_xiaoqiao_HuaHaoYueYuan',
						x: [0, 0.78],
						y: [0, 0.22],
						height: [0, 0.61],
					},
					猪年大雪: {
						name: 'skin_xiaoqiao_ZhuNianDaXue',
						x: [0, 0.82],
						y: [0, 0.24],
						height: [0, 1.13],
					},
				},
				skin_xinxianying: {
					英装素果: {
						name: 'skin_xinxianying_YingZhuangSuGuo',
						x: [0, 0.84],
						y: [0, 0.19],
						height: [0, 0.99],
					},
				},
				skin_xushi: {
					拈花思君: {
						name: 'skin_xushi_NianHuaSiJun',
						x: [0, 0.81],
						y: [0, 0.24],
						height: [0, 0.62],
					},
					为夫弑敌: {
						name: 'skin_xushi_WeiFuShiDi',
						x: [0, 0.81],
						y: [0, 0.285],
						height: [0, 0.7],
						hideSlots: ['xushi_piaodai2', 'xushi_piaodai8'],
					},
				},
				skin_zhangchangpu: {
					钟桂香蒲: {
						name: 'skin_zhangchangpu_ZhongGuiXiangPu',
						x: [0, 0.81],
						y: [0, 0.26],
						height: [0, 0.47],
					},
				},
				skin_zhangchunhua: {
					绰约多姿: {
						name: 'skin_zhangchunhua_ChuoYueDuoZi',
						x: [0, 0.81],
						y: [0, 0.27],
						height: [0, 0.52],
					},
					战场绝版: {
						name: 'skin_zhangchunhua_ZhanChang',
						x: [0, 0.84],
						y: [0, 0.18],
						height: [0, 0.5],
					},
				},
				skin_zhangqiying: {
					岁稔年丰: {
						name: 'skin_zhangqiying_SuiRenNianFeng',
						x: [0, 0.8],
						y: [0, 0.25],
						height: [0, 0.6],
					},
					逐鹿天下: {
						name: 'skin_zhangqiying_ZhuLuTianXia',
						x: [0, 0.78],
						y: [0, 0.28],
						height: [0, 1.02],
					},
				},
				skin_zhangxingcai: {
					凯旋星花: {
						name: 'skin_zhangxingcai_KaiXuanXingHua',
						x: [0, 0.77],
						y: [0, 0.27],
						height: [0, 0.8],
					},
				},
				skin_zhaoxiang: {
					芳芷飒敌: {
						name: 'skin_zhaoxiang_FangZhiSaDi',
						x: [0, 0.78],
						y: [0, 0.29],
						height: [0, 0.5],
					},
				},
				skin_zhenji: {
					才颜双绝: {
						name: 'skin_zhenji_CaiYanShuangJue',
						x: [0, 0.81],
						y: [0, 0.295],
						height: [0, 0.65],
					},
					洛神御水: {
						name: 'skin_zhenji_LuoShenYuShui',
						x: [0, 0.8],
						y: [0, 0.24],
						height: [0, 0.83],
					},
				},
				skin_zhoufei: {
					晴空暖鸢: {
						name: 'skin_zhoufei_QingKongNuanYuan',
						x: [0, 0.83],
						y: [0, 0.25],
						height: [0, 0.76],
					},
				},
				skin_zhouyi: {
					剑舞浏漓: {
						name: 'fullskin_zhouyi_JianWuLiuLi',
						x: [0, 0.81],
						y: [0, 0.255],
						height: [0, 1.13],
					},
				},
				skin_zhugeguo: {
					兰荷艾莲: {
						name: 'skin_zhugeguo_LanHeAiLian',
						x: [0, 0.78],
						y: [0, 0.285],
						height: [0, 0.69],
					},
					仙池起舞: {
						name: 'skin_zhugeguo_XianChiQiWU',
						action: 'DaiJi',
						x: [0, 0.75],
						y: [0, 0.29],
						height: [0, 1.25],
						hideSlots: ['bgshuye1', 'bgshuye4', 'shuye2', 'shuye3', 'hua1', 'hua2'],
					},
					英装素果: {
						name: 'skin_zhugeguo_YingZhuangSuGuo',
						x: [0, 0.76],
						y: [0, 0.27],
						height: [0, 1.1],
					},
				},
				skin_zhugeliang: {
					空城退敌: {
						name: 'skin_zhugeliang_KongChengTuiDi',
						x: [0, 0.78],
						y: [0, 0.28],
						height: [0, 0.65],
					},
				},
				skin_daqiaoxiaoqiao: {
					战场绝版: {
						name: 'skin_daqiaoxiaoqiao_ZhanChang',
						x: [0, 0.8],
						y: [0, 0.26],
						height: [0, 0.565],
					},
				},
				skin_luxunlvmeng: {
					清雨踏春: {
						name: 'skin_luxunlvmeng_QingYuTaChun',
						x: [0, 0.78],
						y: [0, 0.22],
						height: [0, 0.56],
					},
				},
				skin_sundengzhoufei: {
					鹊星夕情: {
						name: 'skin_sundengzhoufei_QueXingXiQing',
						x: [0, 0.83],
						y: [0, 0.27],
						height: [0, 0.79],
					},
				},
				
			};
		} else {
			// 电脑端
			animation.definedAssets  = {
				skin_xiaosha: {
					default: {
						name: 'skin_xiaosha_default',
						x: [ 0, 0.85],
						y: [ 0, 0.014],
						height: [0, 0.3],
					},
				},
				skin_ahao: {
					default: {
						name: 'skin_ahao_default',
						action: 'daiji1',
						x: [ 0, 0.845],
						y: [ 0, 0.04],
						height: [0, 0.43],
					},
				},
				skin_ale: {
					default: {
						name: 'skin_ale_default',
						action: 'daiji1',
						x: [ 0, 0.853],
						y: [ 0, 0.03],
						height: [0, 0.3],
					},
				},
				skin_datong: {
					default: {
						name: 'skin_datong_default',
						action: 'daiji1',
						x: [ 0, 0.855],
						y: [ 0, 0.02],
						height: [0, 0.3],
					},
				},
				skin_liuli: {
					default: {
						name: 'skin_liuli_default',
						action: 'daiji1',
						x: [ 0, 0.849],
						y: [ 0, 0.2],
						height: [0, 0.27],
					},
				},
				skin_lulu: {
					default: {
						name: 'skin_lulu_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.035],
						height: [0, 0.29],
					},
				},
				skin_manman: {
					default: {
						name: 'skin_manman_default',
						action: 'daiji1',
						x: [ 0, 0.845],
						y: [ 0, 0.01],
						height: [0, 0.3],
					},
				},
				skin_rui: {
					default: {
						name: 'skin_rui_default',
						action: 'daiji1',
						x: [ 0, 0.845],
						y: [ 0, 0.017],
						height: [0, 0.39],
					},
				},
				skin_xiaoxiao: {
					default: {
						name: 'skin_xiaoxiao_default',
						action: 'daiji1',
						x: [ 0, 0.855],
						y: [ 0, 0.018],
						height: [0, 0.305],
					},
				},
				skin_xuanwu: {
					default: {
						name: 'skin_xuanwu_default',
						action: 'daiji1',
						x: [ 0, 0.83],
						y: [ 0, 0.03],
						height: [0, 0.31],
					},
				},
				skin_xueren: {
					default: {
						name: 'skin_xueren_default',
						action: 'daiji1',
						x: [ 0, 0.85],
						y: [ 0, 0.018],
						height: [0, 0.285],
					},
				},
				skin_yan: {
					default: {
						name: 'skin_yan_default',
						action: 'daiji1',
						x: [ 0, 0.855],
						y: [ 0, 0.01],
						height: [0, 0.45],
					},
				},
				skin_yueer: {
					default: {
						name: 'skin_yueer_default',
						action: 'daiji1',
						x: [ 0, 0.825],
						y: [ 0, 0.02],
						height: [0, 0.35],
					},
				},
				skin_baosanniang: {
					漫花剑俏: {
						name: 'skin_baosanniang_ManHuaJianQiao',
						x: [0, 0.82],
						y: [0, 0.19],
						height: [0, 0.53],
					},
					嫣然一笑: {
						name: 'skin_baosanniang_YanRanYiXiao',
						action: 'DaiJi',
						x: [0, 0.75],
						y: [0, 0.225],
						height: [0, 0.55],
					},
				},
				skin_caiwenji: {
					才颜双绝: {
						name: 'skin_caiwenji_CaiYanShuangJue',
						x: [0, 0.77],
						y: [0, 0.222],
						height: [0, 0.59],
					},
				},
				skin_caojie: {
					凤历迎春: {
						name: 'skin_caojie_FengLiYingChun',
						x: [ 0, 0.8],
						y: [0, 0.29],
						height: [0, 1.12],
					},
					战场绝版: {
						name: 'skin_caojie_ZhanChang',
						x: [ 0, 0.89],
						y: [0, 0.26],
						height: [0, 0.52],
					},
				},
				skin_caoying: {
					巾帼花舞: {
						name: 'fullskin_caoying_JinGuoHuaWu',
						x: [0, 0.74],
						y: [0, 0.25],
						height: [0, 0.75],
						hideSlots: ['caoying_huashang1', 'caoying_huashang3', 'caoying_huashang6'],
					},
				},
				skin_daqiao: {
					清萧清丽: {
						name: 'skin_daqiao_QingXiaoQingLi',
						x: [ 0, 0.81],
						y: [0, 0.24],
						height: [0, 0.55],
					},
					衣垂绿川: {
						name: 'skin_daqiao_YiChuiLvChuan',
						action: 'DaiJi',
						x: [ 0, 0.87],
						y: [0, 0.29],
						height: [0, 0.79],
						disableMask: true,
					},
					战场绝版: {
						name: 'skin_daqiao_ZhanChang',
						x: [ 0, 0.91],
						y: [0, 0.305],
						height: [0, 0.535],
					},
				},
				skin_diaochan: {
					玉婵仙子: {
						name: 'skin_diaochan_YuChanXianZi',
						x: [0, 0.8],
						y: [0, 0.17],
						height: [0, 0.83],
					},
					战场绝版: {
						name: 'skin_diaochan_ZhanChang',
						x: [0, 0.82],
						y: [0, 0.29],
						height: [0, 0.77],
					},
				},
				skin_dongbai: {
					娇俏伶俐: {
						name: 'skin_dongbai_JiaoQiaoLingLi',
						x: [0, 0.82],
						y: [0, 0.16],
						height: [0, 0.65],
					},
				},
				skin_fanyufeng: {
					斟酒入情: {
						name: 'skin_fanyufeng_ZhenJiuRuQing',
						x: [0, 0.75],
						y: [0, 0.28],
						height: [0, 0.83],
					},
				},
				skin_fuhuanghou: {
					万福千灯: {
						name: 'skin_fuhuanghou_WanFuQianDeng',
						x: [0, 0.84],
						y: [0, 0.3],
						height: [0, 0.64],
					},
				},
				skin_guozhao: {
					雍容尊雅: {
						name: 'skin_guozhao_YongRongZunYa',
						x: [0, 0.77],
						y: [0, 0.25],
						height: [0, 0.47],
					},
				},
				skin_hetaihou: {
					蛇蝎为心:{
						name: 'skin_hetaihou_SheXieWeiXin',
						action: 'DaiJi',
						x: [0, 0.8],
						y: [0, 0.21],
						height: [0, 0.56],
					},
					耀紫迷幻:{
						name: 'skin_hetaihou_YaoZiMiHuan',
						x: [0, 0.82],
						y: [0, 0.27],
						height: [0, 0.62],
					},
					鸩毒除患: {
						name: 'skin_hetaihou_ZhenDuChuHuan',
						x: [0, 0.77],
						y: [0, 0.225],
						height: [0, 0.44],
					},
				},
				skin_huaman: {
					经典形象: {
						name: 'skin_huaman_default',
						x: [0, 0.9],
						y: [0, 0.115],
						height: [0, 0.35],
					},
					花俏蛮娇: {
						name: 'skin_huaman_HuaQiaoManJiao',
						x: [0, 0.85],
						y: [0, 0.27],
						height: [0, 0.5],
					}
				},
				skin_huangyueying: {
					花好月圆: {
						name: 'skin_huangyueying_HuaHaoYueYuan',
						x: [0, 0.82],
						y: [0, 0.275],
						height: [0, 0.485],
					},
					持智思耀: {
						name: 'skin_huangyueying_ChiZhiSiYao',
						x: [0, 0.83],
						y: [0, 0.245],
						height: [0, 0.5],
					}
				},
				skin_lukang: {
					毁堰破晋: {
						name: 'skin_lukang_HuiYanPoJin',
						x: [0, 0.82],
						y: [0, 0.275],
						height: [0, 0.82],
					},
				},
				skin_luxun: {
					谋定天下: {
						name: 'skin_luxun_MouDingTianXia',
						x: [0, 0.8],
						y: [0, 0.21],
						height: [0, 0.77],
					},
				},
				skin_mayunlu: {
					战场绝版:{
						name: 'skin_mayunlu_ZhanChang',
						x: [ 0, 0.88],
						y: [0, 0.19],
						height: [0, 0.81],
					},
					烟绚繁星:{
						name: 'skin_mayunlu_YanXuanFanXing',
						x: [ 0, 0.79],
						y: [0, 0.23],
						height: [0, 0.51],
					},
				},
				skin_sunluban: {
					宵靥谜君: {
						name: 'skin_sunluban_XiaoYeMiJun',
						x: [0, 0.81],
						y: [0, 0.3],
						height: [0, 0.5],
					},
				},
				skin_sunluyu: {
					娇俏伶俐: {
						name: 'skin_sunluyu_JiaoQiaoLingLi',
						x: [0, 0.8],
						y: [0, 0.25],
						height: [0, 0.55],
					},
				},
				skin_shuxiangxiang: {
					花好月圆: {
						name: 'skin_shuxiangxiang_HuaHaoYueYuan',
						x: [0, 0.81],
						y: [0, 0.275],
						height: [0, 0.53],
					},
					花曳心牵: {
						name: 'skin_shuxiangxiang_HuaYeXinQian',
						x: [ 0, 0.8],
						y: [0, 0.33],
						height: [0, 0.57],
					},
				},
				skin_wangrong: {
					云裳花容: {
						name: 'skin_wangrong_YunShangHuaRong',
						x: [0, 0.77],
						y: [0, 0.33],
						height: [0, 0.85],
					},
				},
				skin_wangyi: {
					绝色异彩: {
						name: 'skin_wangyi_JueSeYiCai',
						x: [0, 0.82],
						y: [0, 0.25],
						height: [0, 0.53],
					},
					战场绝版: {
						name: 'skin_wangyi_ZhanChang',
						x: [0, 0.78],
						y: [0, 0.29],
						height: [0, 0.79],
					},
				},
				skin_wangyuanji: {
					鼠年冬至: {
						name: 'skin_wangyuanji_ShuNianDongZhi',
						action: 'DaiJi',
						x: [0, 0.755],
						y: [0, 0.325],
						height: [0, 0.48],
					},
				},
				skin_wolongzhuge: {
					隆中陇亩: {
						name: 'skin_wolongzhuge_LongZhongLongMu',
						x: [0, 0.81],
						y: [0, 0.29],
						height: [0, 0.65],
					},
				},
				skin_wuxian: {
					锦运福绵: {
						name: 'skin_wuxian_JinYunFuMian',
						x: [0, 0.75],
						y: [0, 0.27],
						height: [0, 0.64],
					},
					金玉满堂: {
						name: 'fullskin_wuxian_JinYuManTang',
						x: [0, 0.79],
						y: [0, 0.22],
						height: [0, 0.68],
					},
				},
				skin_xiahoushi: {
					端华夏莲: {
						name: 'skin_xiahoushi_DuanHuaXiaLian',
						x: [0, 0.8],
						y: [0, 0.22],
						height: [0, 0.68],
					},
					战场绝版: {
						name: 'skin_xiahoushi_ZhanChang',
						x: [0, 0.81],
						y: [0, 0.3],
						height: [0, 0.52],
					},
				},
				skin_xiaoqiao: {
					采莲江南: {
						name: 'skin_xiaoqiao_CaiLianJiangNan',
						action: 'DaiJi',
						x: [0, 0.87],
						y: [0, 0.28],
						height: [0, 0.79],
						hideSlots: ['guang3_30', 'bghua1', 'bgshitou1', 'bgshitou2', 'hehua1', 
							'hehua2', 'hehua3', 'hehua4', 'shuchong1', 'shuchong2', 'shugan',
							'shui1', 'shui2', 'shuimian', 'shuiwen1', 'shuiwen2', 'shuiwen3', 'qjhehua', 'heye2'],
					},
					花好月圆: {
						name: 'skin_xiaoqiao_HuaHaoYueYuan',
						x: [0, 0.78],
						y: [0, 0.218],
						height: [0, 0.56],
					},
					猪年大雪: {
						name: 'skin_xiaoqiao_ZhuNianDaXue',
						x: [0, 0.81],
						y: [0, 0.22],
						height: [0, 1.08],
					},
				},
				skin_xinxianying: {
					英装素果: {
						name: 'skin_xinxianying_YingZhuangSuGuo',
						x: [0, 0.84],
						y: [0, 0.17],
						height: [0, 0.94],
					},
				},
				skin_xushi: {
					拈花思君: {
						name: 'skin_xushi_NianHuaSiJun',
						x: [0, 0.79],
						y: [0, 0.23],
						height: [0, 0.57],
					},
					为夫弑敌: {
						name: 'skin_xushi_WeiFuShiDi',
						x: [0, 0.81],
						y: [0, 0.275],
						height: [0, 0.65],
						hideSlots: ['xushi_piaodai2', 'xushi_piaodai8'],
					},
				},
				skin_zhangchangpu: {
					钟桂香蒲: {
						name: 'skin_zhangchangpu_ZhongGuiXiangPu',
						x: [0, 0.81],
						y: [0, 0.24],
						height: [0, 0.42],
					},
				},
				skin_zhangchunhua: {
					绰约多姿: {
						name: 'skin_zhangchunhua_ChuoYueDuoZi',
						x: [0, 0.82],
						y: [0, 0.24],
						height: [0, 0.47],
					},
					战场绝版: {
						name: 'skin_zhangchunhua_ZhanChang',
						x: [0, 0.84],
						y: [0, 0.16],
						height: [0, 0.45],
					},
				},
				skin_zhangqiying: {
					岁稔年丰: {
						name: 'skin_zhangqiying_SuiRenNianFeng',
						x: [0, 0.79],
						y: [0, 0.23],
						height: [0, 0.55],
					},
					逐鹿天下: {
						name: 'skin_zhangqiying_ZhuLuTianXia',
						x: [0, 0.78],
						y: [0, 0.26],
						height: [0, 0.97],
					},
				},
				skin_zhangxingcai: {
					凯旋星花: {
						name: 'skin_zhangxingcai_KaiXuanXingHua',
						x: [0, 0.75],
						y: [0, 0.26],
						height: [0, 0.75],
					},
				},
				skin_zhaoxiang: {
					芳芷飒敌: {
						name: 'skin_zhaoxiang_FangZhiSaDi',
						x: [0, 0.77],
						y: [0, 0.26],
						height: [0, 0.45],
					},
				},
				skin_zhenji: {
					才颜双绝: {
						name: 'skin_zhenji_CaiYanShuangJue',
						x: [0, 0.8],
						y: [0, 0.285],
						height: [0, 0.6],
					},
					洛神御水: {
						name: 'skin_zhenji_LuoShenYuShui',
						x: [0, 0.78],
						y: [0, 0.28],
						height: [0, 0.78],
					},
				},
				skin_zhoufei: {
					晴空暖鸢: {
						name: 'skin_zhoufei_QingKongNuanYuan',
						x: [0, 0.83],
						y: [0, 0.24],
						height: [0, 0.71],
					},
				},
				skin_zhouyi: {
					剑舞浏漓: {
						name: 'fullskin_zhouyi_JianWuLiuLi',
						x: [0, 0.82],
						y: [0, 0.26],
						height: [0, 1.06],
					},
				},
				skin_zhugeguo: {
					兰荷艾莲: {
						name: 'skin_zhugeguo_LanHeAiLian',
						x: [0, 0.775],
						y: [0, 0.27],
						height: [0, 0.64],
					},
					仙池起舞: {
						name: 'skin_zhugeguo_XianChiQiWU',
						action: 'DaiJi',
						x: [0, 0.755],
						y: [0, 0.29],
						height: [0, 1.18],
						hideSlots: ['bgshuye1', 'bgshuye4', 'shuye2', 'shuye3', 'hua1', 'hua2'],
					},
					英装素果: {
						name: 'skin_zhugeguo_YingZhuangSuGuo',
						x: [0, 0.73],
						y: [0, 0.25],
						height: [0, 1.05],
					},
				},
				skin_zhugeliang: {
					空城退敌: {
						name: 'skin_zhugeliang_KongChengTuiDi',
						x: [0, 0.77],
						y: [0, 0.27],
						height: [0, 0.6],
					},
				},
				skin_daqiaoxiaoqiao: {
					战场绝版: {
						name: 'skin_daqiaoxiaoqiao_ZhanChang',
						x: [0, 0.79],
						y: [0, 0.255],
						height: [0, 0.515],
					},
				},
				skin_luxunlvmeng: {
					清雨踏春: {
						name: 'skin_luxunlvmeng_QingYuTaChun',
						x: [0, 0.78],
						y: [0, 0.25],
						height: [0, 0.51],
					},
				},
				skin_sundengzhoufei: {
					鹊星夕情: {
						name: 'skin_sundengzhoufei_QueXingXiQing',
						x: [0, 0.83],
						y: [0, 0.25],
						height: [0, 0.74],
					},
				},
				
			};
		}
		
		animation.stop = animation.stopSpineAll;
		animation.play = function (name, skin) {
			var definedAssets = this.definedAssets;
			if (definedAssets[name] == void 0 || definedAssets[name][skin] == void 0) 
				return console.log('没有预定义[asset:' + name + ', skin:' + skin + ']的动态背景.');
			
			if (this.current && this.current.name == name)
				return;
			
			this.stopSpineAll();
			var playAsset = definedAssets[name][skin];
			if (!this.hasSpine(playAsset.name)) {
				var _this = this;
				_this.loadSpine(playAsset.name, 'skel', function(){
					if (_this.current && _this.current.name == playAsset.name) return;
					_this.current = _this.loopSpine(playAsset);
				});
			} else {
				this.current = this.loopSpine(playAsset);
			}
		};
		
		
		animation.check();
		var background = duicfg.dynamicBackground
		if (background != void 0 && background != 'off') {
			var name = background.split('_');
			var skin = name.splice(name.length - 1, 1)[0];
			animation.play(name.join('_'), skin);
		}
		
		return animation;
	})();
	
	// 下面是我自用的，可能会删掉
	window.dcdAnim = decadeUI.animation;
	window.dcdBackAnim = decadeUI.backgroundAnimation;
	window.game = game;
	window.get = get;
	window.ui = ui;
	window._status = _status;
});