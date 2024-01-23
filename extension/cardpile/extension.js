'use strict';
game.import('play',function(lib,game,ui,get,ai,_status){
	return {
		name:'cardpile',
		arenaReady:function(){
			var data={
				total:160,
				sha:{
					diamond:6,
					club:14,
					heart:3,
					spade:7,
				},
				huosha:{
					diamond:2,
					heart:3
				},
				leisha:{
					spade:5,
					club:4
				},
				shan:{
					heart:6,
					diamond:18
				},
				jiu:{
					diamond:1,
					spade:2,
					club:2
				},
				tao:{
					heart:9,
					diamond:3,
				},
				wanjian:{
					heart:1,
				},
				nanman:{
					spade:2,
					club:1,
				},
				guohe:{
					spade:3,
					club:2,
					heart:1
				},
				shunshou:{
					spade:3,
					diamond:2
				},
				wuxie:{
					heart:2,
					diamond:1,
					spade:2,
					club:2
				},
				tiesuo:{
					spade:2,
					club:4
				}
			}
			var rand=function(){
				return Math.ceil(Math.random()*13);
			};
			var getn=function(i,j){
				return Math.round(data[i][j]*parseFloat(lib.config['cardpile_'+i+'_playpackconfig']));
			};
			var num=0;
			for(var i in data){
				for(var j in data[i]){
					num+=getn(i,j);
				}
			}
			var dn=num*(lib.card.list.length-data.total)/(data.total-num);
			if(dn>1000) dn=1000;
			if(dn>0){
				var p=0;
				for(var i in data){
					for(var j in data[i]){
						var n=Math.round(dn*getn(i,j)/num);
						while(n--){
							if(i=='huosha'){
								lib.card.list.push([j,rand(),'sha','fire']);
							}
							else if(i=='leisha'){
								lib.card.list.push([j,rand(),'sha','thunder']);
							}
							else{
								lib.card.list.push([j,rand(),i]);
							}
						}
					}
				}
			}
		},
	};
});
