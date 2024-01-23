'use strict';
importScripts('spine.js', 'animation.js');

Array.prototype.remove = function (item) {
	var index = this.indexOf(item); 
	if (index >= 0) return this.splice(index, 1);  
	return item; 
}

var window = self;
var devicePixelRatio = 1;
var documentZoom = 1;
var HTMLCanvasElement = function(){ return 'HTMLCanvasElement'; };
var HTMLElement       = function(){ return 'HTMLElement';       };
var dynamics = [];
dynamics.getById = function (id) {
	for (var i = 0; i < this.length; i++) {
		if (this[i].id == id) return this[i];
	}
	
	return null;
};

onmessage = function (e) {
	var data = e.data;
	switch (data.message) {
		case 'CREATE':
			if (dynamics.length >= 4) return;
			
			var dynamic = new duilib.AnimationPlayer(data.pathPrefix, 'offscreen', data.canvas);
			dynamic.id = data.id;
			dynamics.push(dynamic);
			break;
		case 'PLAY':
			var dynamic = dynamics.getById(data.id);
			if (!dynamic) return;
			
			update(dynamic, data);
			var sprite = (typeof data.sprite == 'string') ? { name: data.sprite } : data.sprite;
			sprite.loop = true;
			
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
			break;
			
		case 'STOP':
			var dynamic = dynamics.getById(data.id);
			if (!dynamic) return;
			
			dynamic.stopSpine(data.sprite);
			break;
		
		case 'STOPALL':
			var dynamic = dynamics.getById(data.id);
			if (!dynamic) return;
			
			dynamic.stopSpineAll();
			break;
			
		case 'UPDATE':
			var dynamic = dynamics.getById(data.id);
			if (!dynamic) return;
			
			update(dynamic, data);
			break;
	}
};

function update (dynamic, data) {
	dynamic.resized = false;
	if (data.dpr != null)
		dynamic.dpr = data.dpr;
	if (data.dprAdaptive != null)
		dynamic.dprAdaptive = data.dprAdaptive;
	if (data.outcropMask != null)
		dynamic.outcropMask = data.outcropMask;
	if (data.useMipMaps != null)
		dynamic.useMipMaps = data.useMipMaps;
	if (data.width != null)
		dynamic.width = data.width;
	if (data.height != null)
		dynamic.height = data.height;
}