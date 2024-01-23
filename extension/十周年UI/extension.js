/*jshint esversion: 6 */
game.import("extension", function(lib,game,ui,get,ai,_status){ 
	// 适配新版本体
	Array.prototype.contains = Array.prototype.includes;//懒得一个个改了，直接用这个消去报错。
	
	// 自动换肤修改
	// 关闭扩展后自动将还原默认设置
	if(!game.getExtensionConfig('十周年UI','enable') && lib.config.zidonghuanfuxg!=false){
		game.saveConfig('change_skin_auto','off');
		game.saveConfig('zidonghuanfuxg',false);
	}
return {
name:"十周年UI",
content:function(config, pack){
	'use strict';
	
	var extensionName = '十周年UI';
	var extension = lib.extensionMenu['extension_' + extensionName];
	var extensionPath = lib.assetURL + 'extension/' + extensionName + '/';
	
    if (!(extension && extension.enable && extension.enable.init)) return;
	
	// 其他-帮助-关于游戏内容添加提示
	lib.help['关于游戏']=
		'<div style="margin:10px">无名杀简介</div><ul style="margin-top:0"><li>无名杀是一款基于JavaScript、CSS和HTML开发的开源卡牌游戏，<span style=\"color:red\">完全免费且不做任何商业用途！！！</span><br>'+
		'<li>中文名：无名杀<br><li>英文名：noname<br><li>开发者：水乎（于2013年底发布）<br><li>现更新者：苏婆玛丽奥<br><li>客户端平台：安卓Android、苹果iOS、鸿蒙HarmonyOS、Windows、Mac、Linux以及支持web内核的浏览器版本等<br>'+
		'<li>无名杀内置多种游戏模式和武将（及卡牌）包，拥有智能AI且可以实现单机、（弱）联机和局域网联机等多种游戏方式，并能通过扩展功能实现各种DIY设计，包括但不限于武将技能（含台词、配音）和卡牌设计、游戏模式设计、UI界面美化（含皮肤、特效）、功能扩展等<br>'+
		'<li>主要交流平台——微信公众号：无名杀扩展交流、无名杀；百度贴吧：无名杀吧（现吧主：诗笺）；无名杀QQ群和QQ频道（略）；无名杀官网（略）等<br>'+
		'<li>最重要的是：<span style=\"color:red\">看教程，看教程，看教程</span></ul>'+
		'<div style="margin:10px">关于无名杀官方</div><ul style="margin-top:0"><li>无名杀官方发布地址仅有GitHub仓库！<br><a href="https://github.com/libccy/noname">点击前往Github仓库</a><br><li>无名杀基于GPLv3开源协议。<br><a href="https://www.gnu.org/licenses/gpl-3.0.html">点击查看GPLv3协议</a><br><li>其他所有的所谓“无名杀”社群（包括但不限于绝大多数“官方”QQ群、QQ频道等）均为玩家自发组织，与无名杀官方无关！'+
		'<li>【无名杀】属于个人开发软件且【完全免费】，如非法倒卖用于牟利将承担法律责任，开发团队将追究到底！';
	
	// Show-K修复版搬运
	const Mixin = window.Mixin = {
		/**
		 * @overload
		 * @param {string} method
		 * @param {...[string | RegExp | Function][]} args
		 */
		replace(method) {
			method = method.split(/\s*\|\s*/).find(currentMethod => {
				try {
					return eval(`typeof ${currentMethod}`) != 'undefined';
				} catch (error) {
					return false;
				}
			});
			if (!method) return;
			/**
			 * @type {(string | RegExp)[]}
			 */
			const ats = [];
			/**
			 * @type {(string | Function?)[]}
			 */
			const callbacks = [];
			Array.from(arguments).forEach((argument, index) => {
				if (!index) return;
				if (index % 2) ats.push(argument);
				else callbacks.push(argument);
			});
			/**
			 * @type {string}
			 */
			const redirectingMethod = eval(`${method}.toString();`);
			let redirectedMethod = redirectingMethod;
			ats.forEach((at, index) => {
				if (typeof at == 'string' ? !redirectedMethod.includes(at) : !redirectedMethod.match(at)) return;
				const callback = callbacks[index];
				redirectedMethod = redirectedMethod.replace(at, callback ? `\n${callback.toString().replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>\s*([\s\S]*))/i, '$2$3$4').trim()}` : '');
			});
			if (redirectedMethod == redirectingMethod) return;
			const regExpMatchArray = redirectedMethod.match(/^\S+(?=\s*\([\s\S]*?\))/);
			if (regExpMatchArray && regExpMatchArray[0] != 'function') redirectedMethod = redirectedMethod.replace(/^\S+(?=\s*\([\s\S]*?\))/, 'function');
			eval(`${method} = ${redirectedMethod}`);
		}
	};
	
	// 删除乱入武将，然后在武将-DIY添加乱入武将，代码参考自配音扩展
	delete lib.characterSort.extra.extra_key;
	delete lib.characterPack.extra.key_kagari;
	delete lib.character.key_kagari;
	delete lib.characterPack.extra.key_shiki;
	delete lib.character.key_shiki;
	delete lib.characterPack.extra.db_key_hina;
	delete lib.character.db_key_hina;
	if(get.mode()=='guozhan') delete lib.characterPack.mode_guozhan.gz_key_ushio;
	if(get.mode()=='guozhan') delete lib.character.gz_key_ushio;
	// 修复DIY武将包被隐藏后将神山识等乱入武将移至武将-DIY-乱入产生的bug
	if(lib.characterSort.diy){
		lib.characterSort.diy.luanru_key=['key_kagari','key_shiki','db_key_hina'];
		if(get.mode()=='guozhan') lib.characterSort.diy.luanru_key.push('key_ushio');
		lib.characterPack.diy.key_kagari=['female','shen',3,['kagari_zongsi'],['key']];
		lib.characterPack.diy.key_shiki=['female','shen','3/5',['shiki_omusubi'],['key']];
		lib.characterPack.diy.db_key_hina=['female','key',3,['hina_shenshi','hina_xingzhi'],['doublegroup:key:shen']];
		if(get.mode()=='guozhan') lib.characterPack.diy.key_ushio=['female','key',3,['ushio_huanxin','ushio_xilv'],['doublegroup:key:wei:shu:wu:qun:jin']];
		if(get.mode()=='guozhan') lib.translate.key_ushio='冈崎汐';
		if(lib.config.characters.contains('diy')){
		lib.character.key_kagari=['female','shen',3,['kagari_zongsi'],['key']];
		lib.character.key_shiki=['female','shen','3/5',['shiki_omusubi'],['key']];
		lib.character.db_key_hina=['female','key',3,['hina_shenshi','hina_xingzhi'],['doublegroup:key:shen']];
		if(get.mode()=='guozhan') lib.character.key_ushio=['female','key',3,['ushio_huanxin','ushio_xilv'],['doublegroup:key:wei:shu:wu:qun:jin']];
		}
		lib.translate.luanru_key='乱入';
	}
	
	// 自动换肤修改
	game.saveConfig('zidonghuanfuxg',true);
	lib.arenaReady.push(function(){
		lib.configMenu.appearence.config.change_skin_auto={
			name:'自动换肤',
			init:'off',
			item:{
				'off':'关闭',
				'5000':'5秒',
				'10000':'10秒',
				'15000':'15秒',
				'20000':'20秒',
				'25000':'25秒',
				'30000':'半分钟',
				'60000':'一分钟',
				'120000':'两分钟',
				'300000':'五分钟',
			},
			intro:'游戏每进行一段时间自动为一个随机角色更换皮肤',
			onclick:function(item){
				// 扩展自动换肤设置与本体自动换肤设置保持一致
				game.saveConfig('extension_十周年UI_zidonghuanfu',item);
				game.saveConfig('change_skin_auto',item);
				clearTimeout(_status.skintimeout);
				if(item!='off'){
					_status.skintimeout=setTimeout(ui.click.autoskin,parseInt(item));
				}
			}
		};
	});
	lib.skill._change_skin_auto={
		trigger:{global:'gameDrawBefore'},
		forced:true,
		popup:false,
		silent:true,
		priority:1,
		firstDo:true,
		filter:function(event,player){
			return player===game.me&&(lib.config.change_skin_auto!='off'||lib.config['extension_十周年UI_zidonghuanfu']!='off');
		},
		content:function(){
			clearTimeout(_status.skintimeout);
			if(lib.config['extension_十周年UI_zidonghuanfu']!='off'){
				_status.skintimeout=setTimeout(ui.click.autoskin,parseInt(lib.config['extension_十周年UI_zidonghuanfu']));
			}else _status.skintimeout=setTimeout(ui.click.autoskin,parseInt(lib.config.change_skin_auto));
		},
	};
	
	// 重置新手向导修改
	lib.arenaReady.push(function(){
		lib.configMenu.others.config.reset_tutorial={
			name:'重置新手向导',
			onclick:function(){
				if(this.firstChild.innerHTML!='已重置'){
					this.firstChild.innerHTML='已重置'
					game.saveConfig('new_tutorial',false);
					game.saveConfig('prompt_hidebg');
					game.saveConfig('prompt_hidepack');
					
					// 关闭所有非官方扩展，window.resetExtension();
					for(var i=0;i<lib.config.extensions.length;i++){
						game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',false);
					}
					localStorage.setItem(lib.configprefix+'disable_extension',true);
					
					var that=this;
					setTimeout(function(){
						that.firstChild.innerHTML='重置新手向导';
						
						// 开启所有非官方扩展，并重启
						for(var i=0;i<lib.config.extensions.length;i++){
							game.saveConfig('extension_'+lib.config.extensions[i]+'_enable',true);
						}
						localStorage.setItem(lib.configprefix+'disable_extension',false);
						game.reload();
						
					},500);
				}
			},
			clear:true
		};
	});
	
	// 自动检查游戏更新修改（为避免报错，设为即使开启但重启后自动关闭）
	lib.arenaReady.push(function(){
		lib.configMenu.general.config.auto_check_update={
			name:'自动检查游戏更新',
			intro:'进入游戏时检查更新',
			init:false,
			unfrequent:true,
			onclick:function(){
				lib.config.auto_check_update=false;
			},
		};
	});
	
	// 修改game.js的函数identityCard:function(identity,position,noclick){
	//创建身份牌实例
	ui.create.identityCard=function(identity,position,noclick){
		const card=ui.create.card(position,'noclick',noclick);
		card.removeEventListener(lib.config.touchscreen?'touchend':'click',ui.click.card);
		card.classList.add('button');
		card._customintro=uiintro=>uiintro.add(`${get.translation(`${identity}${2}`)}的身份牌`);
		const fileName=`extension/十周年UI/image/card/identity_${identity}.webp`;
		new Promise((resolve,reject)=>{
			const image=new Image();
			image.onload=resolve;
			image.onerror=reject;
			image.src=`${lib.assetURL}${fileName}`;
		}).then(()=>{
			card.classList.add('fullskin');
			card.node.image.setBackgroundImage(fileName);
			
			card.node.image.style.top='0';
			card.node.image.style.left='0';
			card.node.image.style.width='100%';
			card.node.image.style.height='100%';
			
		},()=>card.node.background.innerHTML=get.translation(identity)[0]);
		return card;
	};
	
	// 旧版发送交互表情函数
	// 修改game.js的函数$throwEmotion(target,name,rotate){、throwEmotion(target,emotion,rotate){和throwEmotion:function(target,emotion,rotate){
	if(lib.config['extension_十周年UI_jiubanjhbq']){
		lib.element.player.$throwEmotion=function(target,name){
			game.addVideo('throwEmotion',this,[target.dataset.position,name]);
			var getLeft=function(player){
				if(player==game.me&&!ui.fakeme&&!ui.chess) return player.getLeft()+player.node.avatar.offsetWidth/2;
				return player.getLeft()+player.offsetWidth/2;
			}
			var player=this;
			var emotion=ui.create.div('','<div style="text-align:center"> <img src="'+lib.assetURL+'image/emotion/throw_emotion/'+name+'1.png"> </div>',game.chess?ui.chess:ui.window);
			emotion.style.width='60px';
			emotion.style.height='60px';
			var width=emotion.offsetWidth/2;
			var height=emotion.offsetHeight/2;
			if(game.chess) width+=60;
			var left=getLeft(player)-width;
			var top=player.getTop()+player.offsetHeight/3-height;
			emotion.style.left=left+'px';
			emotion.style.top=top+'px';
			var left2=getLeft(target)-width;
			var top2=target.getTop()+target.offsetHeight/3-height;
			emotion.style['z-index']=10;
			emotion.style.transform='translateY('+(top2-top)+'px) translateX('+(left2-left)+'px)';
			if(lib.config.background_audio) game.playAudio('effect','throw_'+name+get.rand(1,2));
			setTimeout(function(){
				emotion.innerHTML=('<div style="text-align:center"> <img src="'+lib.assetURL+'image/emotion/throw_emotion/'+name+'2.png"> </div>');
				setTimeout(function(){
					emotion.delete();
				},1200);
			},600);
		};
		lib.element.player.throwEmotion=function(target,emotion){
			game.broadcastAll(function(player,target,emotion){
				player.$throwEmotion(target,emotion);
			},this,target,emotion);
		};
		lib.message.server.throwEmotion=function(target,emotion){
			if(lib.node.observing.contains(this)) return;
			var player=lib.playerOL[this.id];
			if(player){
				player.throwEmotion(target,emotion);
			}
		};
	}
	
	// 发送交互表情时间修改
	// 修改game.js的函数nodeintro:(node,simple,evt)=>{
	get.nodeintro=function(node,simple,evt){
		var uiintro=ui.create.dialog('hidden','notouchscroll');
		if(node.classList.contains('player')&&!node.name){
			return uiintro;
		}
		var i,translation,intro,str;
		if(node._nointro) return;
		if(typeof node._customintro=='function'){
			if(node._customintro(uiintro,evt)===false) return;
			if(evt)lib.placePoppedDialog(uiintro,evt);
		}
		else if(Array.isArray(node._customintro)){
			var caption=node._customintro[0];
			var content=node._customintro[1];
			if(typeof caption=='function'){
				caption=caption(node);
			}
			if(typeof content=='function'){
				content=content(node);
			}
			uiintro.add(caption);
			uiintro.add('<div class="text center" style="padding-bottom:5px">'+content+'</div>');
		}
		else if(node.classList.contains('player')||node.linkplayer){
			if(node.linkplayer){
				node=node.link;
			}
			let capt=get.translation(node.name);
			const characterInfo=get.character(node.name),sex=node.sex||characterInfo[0];
			if(sex&&sex!='unknown'&&lib.config.show_sex) capt+=`&nbsp;&nbsp;${sex=='none'?'无':get.translation(sex)}`;
			const group=node.group;
			if(group&&group!='unknown'&&lib.config.show_group) capt+=`&nbsp;&nbsp;${get.translation(group)}`;
			uiintro.add(capt);

			if(lib.characterTitle[node.name]){
				uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
			}

			if(!node.noclick){
				const allShown=(node.isUnderControl()||(!game.observe&&game.me&&game.me.hasSkillTag('viewHandcard',null,node,true)));
				const shownHs=node.getShownCards();
				if(shownHs.length){
					uiintro.add('<div class="text center">明置的手牌</div>');
					uiintro.addSmall(shownHs);
					if(allShown){
						var hs=node.getCards('h');
						hs.removeArray(shownHs)
						if(hs.length){
							uiintro.add('<div class="text center">其他手牌</div>');
							uiintro.addSmall(hs);
						}
					}
				}
				else if(allShown){
					var hs=node.getCards('h');
					if(hs.length){
						uiintro.add('<div class="text center">手牌</div>');
						uiintro.addSmall(hs);
					}
				}
			}

			var skills=node.getSkills(null,false,false).slice(0);
			var skills2=game.filterSkills(skills,node);
			if(node==game.me&&node.hiddenSkills.length){
				skills.addArray(node.hiddenSkills);
			}
			for(var i in node.disabledSkills){
				if(node.disabledSkills[i].length==1&&
					node.disabledSkills[i][0]==i+'_awake'&&
					!node.hiddenSkills.contains(i)){
					skills.add(i);
				}
			}
			for(i=0;i<skills.length;i++){
				if(lib.skill[skills[i]]&&(lib.skill[skills[i]].nopop||lib.skill[skills[i]].equipSkill)) continue;
				if(lib.translate[skills[i]+'_info']){
					if(lib.translate[skills[i]+'_ab']) translation=lib.translate[skills[i]+'_ab'];
					else{
						translation=get.translation(skills[i]);
						if(!lib.skill[skills[i]].nobracket) translation=translation.slice(0,2);
					}

					if(node.forbiddenSkills[skills[i]]){
						var forbidstr='<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>';
						if(node.forbiddenSkills[skills[i]].length){
							forbidstr+='（与'+get.translation(node.forbiddenSkills[skills[i]])+'冲突）<br>';
						}
						else{
							forbidstr+='（双将禁用）<br>';
						}
						forbidstr+=get.skillInfoTranslation(skills[i],node)+'</div></div>'
						uiintro.add(forbidstr);
					}
					else if(!skills2.contains(skills[i])){
						if(lib.skill[skills[i]].preHidden&&get.mode()=='guozhan'){
							uiintro.add('<div><div class="skill" style="opacity:0.5">【'+translation+'】</div><div><span style="opacity:0.5">'+get.skillInfoTranslation(skills[i],node)+'</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
							var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
							if(_status.prehidden_skills.contains(skills[i])){
								underlinenode.classList.remove('on');
							}
							underlinenode.link=skills[i];
							underlinenode.listen(ui.click.hiddenskill);
						}
						else uiintro.add('<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
					}
					else if(lib.skill[skills[i]].temp||!node.skills.contains(skills[i])||lib.skill[skills[i]].thundertext){
						if(lib.skill[skills[i]].frequent||lib.skill[skills[i]].subfrequent){
							uiintro.add('<div><div class="skill thundertext thunderauto">【'+translation+'】</div><div class="thundertext thunderauto">'+get.skillInfoTranslation(skills[i],node)+'<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
							var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
							if(lib.skill[skills[i]].frequent){
								if(lib.config.autoskilllist.contains(skills[i])){
									underlinenode.classList.remove('on');
								}
							}
							if(lib.skill[skills[i]].subfrequent){
								for(var j=0;j<lib.skill[skills[i]].subfrequent.length;j++){
									if(lib.config.autoskilllist.contains(skills[i]+'_'+lib.skill[skills[i]].subfrequent[j])){
										underlinenode.classList.remove('on');
									}
								}
							}
							if(lib.config.autoskilllist.contains(skills[i])){
								underlinenode.classList.remove('on');
							}
							underlinenode.link=skills[i];
							underlinenode.listen(ui.click.autoskill2);
						}
						else{
							uiintro.add('<div><div class="skill thundertext thunderauto">【'+translation+'】</div><div class="thundertext thunderauto">'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
						}
					}
					else if(lib.skill[skills[i]].frequent||lib.skill[skills[i]].subfrequent){
						uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
						var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
						if(lib.skill[skills[i]].frequent){
							if(lib.config.autoskilllist.contains(skills[i])){
								underlinenode.classList.remove('on');
							}
						}
						if(lib.skill[skills[i]].subfrequent){
							for(var j=0;j<lib.skill[skills[i]].subfrequent.length;j++){
								if(lib.config.autoskilllist.contains(skills[i]+'_'+lib.skill[skills[i]].subfrequent[j])){
									underlinenode.classList.remove('on');
								}
							}
						}
						if(lib.config.autoskilllist.contains(skills[i])){
							underlinenode.classList.remove('on');
						}
						underlinenode.link=skills[i];
						underlinenode.listen(ui.click.autoskill2);
					}
					else if(lib.skill[skills[i]].clickable&&node.isIn()&&node.isUnderControl(true)){
						var intronode=uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
						if(!_status.gameStarted||(lib.skill[skills[i]].clickableFilter&&!lib.skill[skills[i]].clickableFilter(node))){
							intronode.classList.add('disabled');
							intronode.style.opacity=0.5;
						}
						else{
							intronode.link=node;
							intronode.func=lib.skill[skills[i]].clickable;
							intronode.classList.add('pointerdiv');
							intronode.listen(ui.click.skillbutton);
						}
					}
					else{
						uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
					}
					if(lib.translate[skills[i]+'_append']){
						uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
					}
				}
			}
			// if(get.is.phoneLayout()){
			//     var storage=node.storage;
			//     for(i in storage){
			//      			if(get.info(i)&&get.info(i).intro){
			//      						 intro=get.info(i).intro;
			//      						 if(node.getSkills().concat(lib.skill.global).contains(i)==false&&!intro.show) continue;
			//      						 var name=intro.name?intro.name:get.translation(i);
			//      						 if(typeof name=='function'){
			//      									  name=name(storage[i],node);
			//      						 }
			//      						 translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
			//      						 var stint=get.storageintro(intro.content,storage[i],node,null,i);
			//      						 if(stint){
			//      									  translation+=stint+'</div></div>';
			//      									  uiintro.add(translation);
			//      						 }
			//      			}
			//     }
			// }

			if(lib.config.right_range&&_status.gameStarted){
				uiintro.add(ui.create.div('.placeholder'));
				var table,tr,td;
				table=document.createElement('table');
				tr=document.createElement('tr');
				table.appendChild(tr);
				td=document.createElement('td');
				td.innerHTML='距离';
				tr.appendChild(td);
				td=document.createElement('td');
				td.innerHTML='手牌';
				tr.appendChild(td);
				td=document.createElement('td');
				td.innerHTML='行动';
				tr.appendChild(td);
				td=document.createElement('td');
				td.innerHTML='伤害';
				tr.appendChild(td);

				tr=document.createElement('tr');
				table.appendChild(tr);
				td=document.createElement('td');
				if(node==game.me||!game.me||!game.me.isIn()){
					td.innerHTML='-';
				}
				else{
					var dist1=get.numStr(Math.max(1,game.me.distanceTo(node)));
					var dist2=get.numStr(Math.max(1,node.distanceTo(game.me)));
					if(dist1==dist2){
						td.innerHTML=dist1;
					}
					else{
						td.innerHTML=dist1+'/'+dist2;
					}
				}
				tr.appendChild(td);
				td=document.createElement('td');
				let handcardLimit=node.getHandcardLimit();
				td.innerHTML=`${node.countCards('h')}/${handcardLimit>=114514?'∞':handcardLimit}`;
				tr.appendChild(td);
				td=document.createElement('td');
				td.innerHTML=node.phaseNumber;
				tr.appendChild(td);
				td=document.createElement('td');

				(function(){
					num=0;
					for(var j=0;j<node.stat.length;j++){
						if(typeof node.stat[j].damage=='number') num+=node.stat[j].damage;
					}
					td.innerHTML=num;
				}());
				tr.appendChild(td);
				table.style.width='calc(100% - 20px)';
				table.style.marginLeft='10px';

				uiintro.content.appendChild(table);
				if(!lib.config.show_favourite){
					table.style.paddingBottom='5px'
				}
			}
			if(!simple||get.is.phoneLayout()){
				var es=node.getCards('e');
				for(var i=0;i<es.length;i++){
					var cardinfo=lib.card[es[i].name];
					if(cardinfo&&cardinfo.cardPrompt) uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+cardinfo.cardPrompt(es[i])+'</div></div>');
					else uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+lib.translate[es[i].name+'_info']+'</div></div>');
					uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
					
					if(lib.translate[es[i].name+'_append']){
						uiintro.add('<div class="text">'+lib.translate[es[i].name+'_append']+'</div>');
					}
				}
				var js=node.getCards('j');
				for(var i=0;i<js.length;i++){
					if(js[i].viewAs&&js[i].viewAs!=js[i].name){
						uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].viewAs]+'：'+lib.translate[js[i].viewAs+'_info']+'</div></div>');
					}
					else{
						uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].name+'_info']+'</div></div>');
					}
					uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
				}
				if(get.is.phoneLayout()){
					var markCoutainer=ui.create.div('.mark-container.marks');
					for(var i in node.marks){
						var nodemark=node.marks[i].cloneNode(true);
						nodemark.classList.add('pointerdiv');
						nodemark.link=node.marks[i];
						nodemark.style.transform='';
						markCoutainer.appendChild(nodemark);
						nodemark.listen(function(){
							uiintro.noresume=true;
							var rect=this.link.getBoundingClientRect();
							ui.click.intro.call(this.link,{
								clientX:rect.left+rect.width,
								clientY:rect.top+rect.height/2,
							});
							if(lib.config.touchscreen){
								uiintro._close();
							}
						});
					}
					if(markCoutainer.childElementCount){
						uiintro.addText('标记');
						uiintro.add(markCoutainer);
					}
				}
			}
			if(!game.observe&&_status.gameStarted&&game.me&&node!=game.me){
				ui.throwEmotion=[];
				uiintro.addText('发送交互表情');
				var click=function(){
					if(_status.dragged) return;
					if(_status.justdragged) return;
					if(_status.throwEmotionWait) return;
					var emotion=this.link;
					if(game.online){
						game.send('throwEmotion',node,emotion);
					}
					else game.me.throwEmotion(node,emotion);
					uiintro._close();
					_status.throwEmotionWait=true;
					setTimeout(function(){
						_status.throwEmotionWait=false;
						if(ui.throwEmotion){
							for(var i of ui.throwEmotion) i.classList.remove('exclude');
						}
					},(emotion=='flower'||emotion=='egg')?5:10)
				};
				var td;
				var table=document.createElement('div');
				table.classList.add('add-setting');
				table.style.margin='0';
				table.style.width='100%';
				table.style.position='relative';
				var listi=['flower','egg'];
				for(var i=0;i<listi.length;i++){
					td=ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
					ui.throwEmotion.add(td);
					if(_status.throwEmotionWait) td.classList.add('exclude');
					td.link=listi[i];
					table.appendChild(td);
					td.innerHTML='<span>'+get.translation(listi[i])+'</span>';
					td.addEventListener(lib.config.touchscreen?'touchend':'click',click);
				}
				uiintro.content.appendChild(table);
				table=document.createElement('div');
				table.classList.add('add-setting');
				table.style.margin='0';
				table.style.width='100%';
				table.style.position='relative';
				var listi=['wine','shoe'];
				if(game.me.storage.zhuSkill_shanli) listi=['yuxisx','jiasuo'];
				for(var i=0;i<listi.length;i++){
					td=ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
					ui.throwEmotion.add(td);
					if(_status.throwEmotionWait) td.classList.add('exclude');
					td.link=listi[i];
					table.appendChild(td);
					td.innerHTML='<span>'+get.translation(listi[i])+'</span>';
					td.addEventListener(lib.config.touchscreen?'touchend':'click',click);
				}
				uiintro.content.appendChild(table);
			}
			var modepack=lib.characterPack['mode_'+get.mode()];
			if(lib.config.show_favourite&&lib.character[node.name]&&game.players.contains(node)&&
				(!modepack||!modepack[node.name])&&(!simple||get.is.phoneLayout())){
				var addFavourite=ui.create.div('.text.center.pointerdiv');
				addFavourite.link=node.name;
				if(lib.config.favouriteCharacter.contains(node.name)){
					addFavourite.innerHTML='移除收藏';
				}
				else{
					addFavourite.innerHTML='添加收藏';
				}
				addFavourite.listen(ui.click.favouriteCharacter)
				uiintro.add(addFavourite);
			}
			if(!simple||get.is.phoneLayout()){
				if((lib.config.change_skin||lib.skin)&&!node.isUnseen()){
					var num=1;
					var introadded=false;
					var createButtons=function(num,avatar2){
						if(!introadded){
							introadded=true;
							uiintro.add('<div class="text center">更改皮肤</div>');
						}
						var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
						lib.setMousewheel(buttons);
						var nameskin=(avatar2?node.name2:node.name1);
						var nameskin2=nameskin;
						var gzbool=false;
						if(nameskin.startsWith('gz_shibing')){
							nameskin=nameskin.slice(3,11);
						}
						else if(nameskin.startsWith('gz_')){
							nameskin=nameskin.slice(3);
							gzbool=true;
						}
						for(var i=0;i<=num;i++){
							var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
								if(this._link){
									if(avatar2){
										lib.config.skin[nameskin]=this._link;
										node.node.avatar2.style.backgroundImage=this.style.backgroundImage;
									}
									else{
										lib.config.skin[nameskin]=this._link;
										node.node.avatar.style.backgroundImage=this.style.backgroundImage;
									}
								}
								else{
									delete lib.config.skin[nameskin];
									if(avatar2){
										if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2,'character');
										else node.node.avatar2.setBackground(nameskin,'character');
									}
									else{
										if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2,'character');
										else node.node.avatar.setBackground(nameskin,'character');
									}
								}
								game.saveConfig('skin',lib.config.skin);
							});
							button._link=i;
							if(i){
								button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
							}
							else{
								if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2,'character','noskin');
								else button.setBackground(nameskin,'character','noskin');
							}
						}
						uiintro.add(buttons);
					};
					var loadImage=function(avatar2){
						var img=new Image();
						img.onload=function(){
							num++;
							loadImage(avatar2);
						}
						img.onerror=function(){
							num--;
							if(num){
								createButtons(num,avatar2);
							}
							if(!avatar2){
								if(!node.classList.contains('unseen2')&&node.name2){
									num=1;
									loadImage(true);
								}
							}
						}
						var nameskin=(avatar2?node.name2:node.name1);
						var nameskin2=nameskin;
						var gzbool=false;
						if(nameskin.startsWith('gz_shibing')){
							nameskin=nameskin.slice(3,11);
						}
						else if(nameskin.startsWith('gz_')){
							nameskin=nameskin.slice(3);
							gzbool=true;
						}
						img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
					}
					if(lib.config.change_skin){
						if(!node.isUnseen(0)){
							loadImage();
						}
						else if(node.name2){
							loadImage(true);
						}
					}
					else{
						setTimeout(function(){
							var nameskin1=node.name1;
							var nameskin2=node.name2;
							if(nameskin1&&nameskin1.startsWith('gz_')){
								nameskin1=nameskin1.slice(3);
							}
							if(nameskin2&&nameskin2.startsWith('gz_')){
								nameskin2=nameskin2.slice(3);
							}
							if(!node.isUnseen(0)&&lib.skin[nameskin1]){
								createButtons(lib.skin[nameskin1]);
							}
							if(!node.isUnseen(1)&&lib.skin[nameskin2]){
								createButtons(lib.skin[nameskin2],true);
							}
						});
					}
				}
			}

			uiintro.add(ui.create.div('.placeholder.slim'));
		}
		else if(node.classList.contains('mark')&&node.info&&
			node.parentNode&&node.parentNode.parentNode&&node.parentNode.parentNode.classList.contains('player')){
			var info=node.info;
			var player=node.parentNode.parentNode;
			if(info.name){
				if(typeof info.name=='function'){
					var named=info.name(player.storage[node.skill],player);
					if(named){
						uiintro.add(named);
					}
				}
				else{
					uiintro.add(info.name);
				}
			}
			else if(info.name!==false){
				uiintro.add(get.translation(node.skill));
			}
			if(typeof info.id=='string'&&info.id.startsWith('subplayer')&&
				player.isUnderControl(true)&&player.storage[info.id]&&!_status.video){
				var storage=player.storage[info.id];
				uiintro.addText('当前体力：'+storage.hp+'/'+storage.maxHp);
				if(storage.hs.length){
					uiintro.addText('手牌区');
					uiintro.addSmall(storage.hs);
				}
				if(storage.es.length){
					uiintro.addText('装备区');
					uiintro.addSmall(storage.es);
				}
			}
			if(typeof info.mark=='function'){
				var stint=info.mark(uiintro,player.storage[node.skill],player);
				if(stint){
					var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
					if(!stint.startsWith('<div class="skill"')){
						uiintro._place_text=placetext;
					}
					// if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
			}
			else{
				var stint=get.storageintro(info.content,player.storage[node.skill],player,uiintro,node.skill);
				if(stint){
					if(stint[0]=='@'){
						uiintro.add('<div class="caption">'+stint.slice(1)+'</div>');
					}
					else{
						var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
						if(!stint.startsWith('<div class="skill"')){
							uiintro._place_text=placetext;
						}
					}
					// else if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
			}
			uiintro.add(ui.create.div('.placeholder.slim'));
		}
		else if(node.classList.contains('card')){
			//卡牌长按介绍
			if(ui.arena.classList.contains('observe')&&node.parentNode.classList.contains('handcards')){
				return;
			}
			var name=node.name;
			if(node.parentNode.cardMod){
				var moded=false;
				for(var i in node.parentNode.cardMod){
					var item=node.parentNode.cardMod[i](node);
					if(Array.isArray(item)){
						moded=true;
						uiintro.add(item[0]);
						uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+item[1]+'</div>');
					}
				}
				if(moded) return uiintro;
			}
			if(node.link&&node.link.name&&lib.card[node.link.name]){
				name=node.link.name;
			}
			if(get.position(node)=='j'&&node.viewAs&&node.viewAs!=name){
				uiintro.add(get.translation(node.viewAs));
				uiintro.add('<div class="text center">（'+get.translation(get.translation(node))+'）</div>');
				// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
				uiintro.nosub=true;
				name=node.viewAs;
			}
			else{
				uiintro.add(get.translation(node));
			}
			if(node._banning){
				var clickBanned=function(){
					var banned=lib.config[this.bannedname]||[];
					if(banned.contains(name)){
						banned.remove(name);
					}
					else{
						banned.push(name);
					}
					game.saveConfig(this.bannedname,banned);
					this.classList.toggle('on');
					if(node.updateBanned){
						node.updateBanned();
					}
				};
				var modeorder=lib.config.modeorder||[];
				for(var i in lib.mode){
					modeorder.add(i);
				}
				var list=[];
				uiintro.contentContainer.listen(function(e){
					ui.click.touchpop();
					e.stopPropagation();
				});
				for(var i=0;i<modeorder.length;i++){
					if(node._banning=='online'){
						if(!lib.mode[modeorder[i]].connect) continue;
					}
					else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
						continue;
					}
					if(lib.config.all.mode.contains(modeorder[i])){
						list.push(modeorder[i]);
					}
				}
				if(lib.card[name]&&lib.card[name].type=='trick') list.push('zhinang_tricks');
				var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
				var banall=false;
				for(var i=0;i<list.length;i++){
					var cfg=ui.create.div('.config',list[i]=='zhinang_tricks'?'设为智囊':(lib.translate[list[i]]+'模式'),page);
					cfg.classList.add('toggle');
					if(list[i]=='zhinang_tricks'){
						cfg.bannedname=((node._banning=='offline')?'':'connect_')+'zhinang_tricks';
					}
					else if(node._banning=='offline'){
						cfg.bannedname=list[i]+'_bannedcards';
					}
					else{
						cfg.bannedname='connect_'+list[i]+'_bannedcards';
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned=lib.config[cfg.bannedname]||[];
					if(banned.contains(name)==(list[i]=='zhinang_tricks')){
						cfg.classList.add('on');
						banall=true;
					}
				}
				ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
					if(this.innerHTML=='全部禁用'){
						for(var i=0;i<page.childElementCount;i++){
							if(page.childNodes[i].bannedname.indexOf('zhinang_tricks')==-1&&page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML='全部启用';
					}
					else{
						for(var i=0;i<page.childElementCount;i++){
							if(page.childNodes[i].bannedname.indexOf('zhinang_tricks')==-1&&page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML='全部禁用';
					}
				}).style.marginTop='-10px';
				ui.create.div('.placeholder.slim',uiintro.content);
			}
			else{
				if(lib.translate[name+'_info']){
					if(!uiintro.nosub){
						if(lib.card[name]&&lib.card[name].derivation){
							if(typeof lib.card[name].derivation=='string'){
								uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivation)+'</div>');
							}
							else if(lib.card[name].derivationpack){
								uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivationpack+'_card_config')+'包</div>');
							}
						}
						let typeinfo='';
						if(lib.card[name].unique){
							typeinfo+=('特殊'+get.translation(lib.card[name].type)+'牌');
						}
						else if(lib.card[name].type&&lib.translate[lib.card[name].type]){
							typeinfo+=(get.translation(lib.card[name].type)+'牌');
						}
						if(get.subtype(name,false)){
							typeinfo+=('-'+get.translation(get.subtype(name,false)));
						}
						if(typeinfo){
							uiintro.add('<div class="text center">'+typeinfo+'</div>');
						}
						if(lib.card[name].unique&&lib.card[name].type=='equip'){
							if(lib.cardPile.guozhan&&lib.cardPack.guozhan.contains(name)){
								uiintro.add('<div class="text center">专属装备</div>').style.marginTop='-5px';
							}
							else{
								uiintro.add('<div class="text center">特殊装备</div>').style.marginTop='-5px';
							}
						}
						if(lib.card[name]&&lib.card[name].addinfomenu){
							uiintro.add('<div class="text center">'+lib.card[name].addinfomenu+'</div>');
						}
						if(get.subtype(name,false)=='equip1'){
							var added=false;
							if(lib.card[node.name]&&lib.card[node.name].distance){
								var dist=lib.card[node.name].distance;
								if(dist.attackFrom){
									added=true;
									uiintro.add('<div class="text center">攻击范围：'+(-dist.attackFrom+1)+'</div>');
								}
							}
							if(!added){
								uiintro.add('<div class="text center">攻击范围：1</div>');
							}
						}
					}
					if(lib.card[name].cardPrompt){
						var str=lib.card[name].cardPrompt(node.link||node),placetext=uiintro.add('<div class="text" style="display:inline">'+str+'</div>');
						if(!str.startsWith('<div class="skill"')){
							uiintro._place_text=placetext;
						}
					}
					else if(lib.translate[name+'_info']){
						var placetext=uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_info']+'</div>');
						if(!lib.translate[name+'_info'].startsWith('<div class="skill"')){
							uiintro._place_text=placetext;
						}
					}
					if(get.is.yingbianConditional(node.link||node)){
						const yingbianEffects=get.yingbianEffects(node.link||node);
						if(!yingbianEffects.length){
							const defaultYingbianEffect=get.defaultYingbianEffect(node.link||node);
							if(lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
						}
						if(yingbianEffects.length) uiintro.add(`<div class="text" style="font-family: yuanli">应变：${yingbianEffects.map(value=>lib.yingbian.prompt.get(value)).join('；')}</div>`);
					}
					if(lib.translate[name+'_append']){
						uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_append']+'</div>');
					}
				}
				uiintro.add(ui.create.div('.placeholder.slim'));
			}
		}
		else if(node.classList.contains('character')){
			const character=node.link,characterInfo=get.character(node.link);
			let capt=get.translation(character);
			if(characterInfo){
				const infoSex=characterInfo[0];
				if(infoSex&&lib.config.show_sex) capt+=`&nbsp;&nbsp;${infoSex=='none'?'无':lib.translate[infoSex]}`;
				const infoGroup=characterInfo[1];
				if(infoGroup&&lib.config.show_group){
					const group=get.is.double(character,true);
					if(group) capt+=`&nbsp;&nbsp;${group.map(value=>get.translation(value)).join('/')}`;
					else capt+=`&nbsp;&nbsp;${lib.translate[infoGroup]}`;
				}
			}
			uiintro.add(capt);

			if(lib.characterTitle[node.link]){
				uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
			}

			if(node._banning){
				var clickBanned=function(){
					var banned=lib.config[this.bannedname]||[];
					if(banned.contains(character)){
						banned.remove(character);
					}
					else{
						banned.push(character);
					}
					game.saveConfig(this.bannedname,banned);
					this.classList.toggle('on');
					if(node.updateBanned){
						node.updateBanned();
					}
				};
				var modeorder=lib.config.modeorder||[];
				for(var i in lib.mode){
					modeorder.add(i);
				}
				var list=[];
				uiintro.contentContainer.listen(function(e){
					ui.click.touchpop();
					e.stopPropagation();
				});
				for(var i=0;i<modeorder.length;i++){
					if(node._banning=='online'){
						if(!lib.mode[modeorder[i]].connect) continue;
						if(!lib.config['connect_'+modeorder[i]+'_banned']){
							lib.config['connect_'+modeorder[i]+'_banned']=[];
						}
					}
					else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
						continue;
					}
					if(lib.config.all.mode.contains(modeorder[i])){
						list.push(modeorder[i]);
					}
				}
				var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
				var banall=false;
				for(var i=0;i<list.length;i++){
					var cfg=ui.create.div('.config',lib.translate[list[i]]+'模式',page);
					cfg.classList.add('toggle');
					if(node._banning=='offline'){
						cfg.bannedname=list[i]+'_banned';
					}
					else{
						cfg.bannedname='connect_'+list[i]+'_banned';
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned=lib.config[cfg.bannedname]||[];
					if(!banned.contains(character)){
						cfg.classList.add('on');
						banall=true;
					}
				}
				if(node._banning=='offline'){
					var cfg=ui.create.div('.config','随机选将可用',page);
					cfg.classList.add('toggle');
					cfg.listen(function(){
						this.classList.toggle('on');
						if(this.classList.contains('on')){
							lib.config.forbidai_user.remove(character);
						}
						else{
							lib.config.forbidai_user.add(character);
						}
						game.saveConfig('forbidai_user',lib.config.forbidai_user);
					});
					ui.create.div(ui.create.div(cfg));
					if(!lib.config.forbidai_user.contains(character)){
						cfg.classList.add('on');
					}
				}
				ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
					if(this.innerHTML=='全部禁用'){
						for(var i=0;i<page.childElementCount;i++){
							if(page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML='全部启用';
					}
					else{
						for(var i=0;i<page.childElementCount;i++){
							if(page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML='全部禁用';
					}
				}).style.marginTop='-10px';
				ui.create.div('.placeholder.slim',uiintro.content);
			}
			else{
				var infoitem=get.character(character);
				var skills=infoitem[3];
				for(i=0;i<skills.length;i++){
					if(lib.translate[skills[i]+'_info']){
						if(lib.translate[skills[i]+'_ab']) translation=lib.translate[skills[i]+'_ab'];
						else{
							translation=get.translation(skills[i]);
							if(!lib.skill[skills[i]].nobracket) translation=translation.slice(0,2);
						}

						uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');

						if(lib.translate[skills[i]+'_append']){
							uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
						}
					}
				}
				var modepack=lib.characterPack['mode_'+get.mode()];
				if(lib.config.show_favourite&&
				lib.character[node.link]&&(!modepack||!modepack[node.link])&&(!simple||get.is.phoneLayout())){
					var addFavourite=ui.create.div('.text.center.pointerdiv');
					addFavourite.link=node.link;
					addFavourite.style.marginBottom='15px';
					if(lib.config.favouriteCharacter.contains(node.link)){
						addFavourite.innerHTML='移除收藏';
					}
					else{
						addFavourite.innerHTML='添加收藏';
					}
					addFavourite.listen(ui.click.favouriteCharacter)
					uiintro.add(addFavourite);
				}
				else{
					uiintro.add(ui.create.div('.placeholder.slim'));
				}
				var addskin=false;
				if(node.parentNode.classList.contains('menu-buttons')){
					addskin=!lib.config.show_charactercard;
				}
				else{
					addskin=lib.config.change_skin||lib.skin;
				}
				if(addskin&&(!simple||get.is.phoneLayout())){
					var num=1;
					var introadded=false;
					var nameskin=node.link;
					var nameskin2=nameskin;
					var gzbool=false;
					if(nameskin.startsWith('gz_shibing')){
						nameskin=nameskin.slice(3,11);
					}
					else if(nameskin.startsWith('gz_')){
						nameskin=nameskin.slice(3);
						gzbool=true;
					}
					var createButtons=function(num){
						if(!num) return;
						if(!introadded){
							introadded=true;
							uiintro.add('<div class="text center">更改皮肤</div>');
						}
						var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
						lib.setMousewheel(buttons);
						for(var i=0;i<=num;i++){
							var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
								if(this._link){
									lib.config.skin[nameskin]=this._link;
									node.style.backgroundImage=this.style.backgroundImage;
									game.saveConfig('skin',lib.config.skin);
								}
								else{
									delete lib.config.skin[nameskin];
									if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2,'character');
									else node.setBackground(nameskin,'character');
									game.saveConfig('skin',lib.config.skin);
								}
							});
							button._link=i;
							if(i){
								button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
							}
							else{
								if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2,'character','noskin');
								else button.setBackground(nameskin,'character','noskin');
							}
						}
						uiintro.add(buttons);
					};
					var loadImage=function(){
						var img=new Image();
						img.onload=function(){
							num++;
							loadImage();
						}
						img.onerror=function(){
							num--;
							createButtons(num);
						}
						img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
					}
					if(lib.config.change_skin){
						loadImage();
					}
					else{
						setTimeout(function(){
							createButtons(lib.skin[nameskin]);
						});
					}
				}
			}
		}
		else if(node.classList.contains('equips')&&ui.arena.classList.contains('selecting')){
			(function(){
				uiintro.add('选择装备');
				uiintro.addSmall(Array.from(node.childNodes).filter(node=>!node.classList.contains('feichu')),true);
				uiintro.clickintro=true;
				ui.control.hide();
				uiintro._onclose=function(){
					ui.control.show();
				}
				var confirmbutton;
				for(var i=0;i<uiintro.buttons.length;i++){
					var button=uiintro.buttons[i];
					button.classList.add('pointerdiv');
					if(button.link.classList.contains('selected')){
						button.classList.add('selected');
					}
					button.listen(function(e){
						ui.click.card.call(this.link,'popequip');
						ui.click.window.call(ui.window,e);
						if(this.link.classList.contains('selected')){
							this.classList.add('selected');
						}
						else{
							this.classList.remove('selected');
						}
						if(ui.confirm&&ui.confirm.str&&ui.confirm.str.includes('o')){
							confirmbutton.classList.remove('disabled');
						}
						else{
							confirmbutton.classList.add('disabled');
						}
					});
				}
				var buttoncontainer=uiintro.add(ui.create.div());
				buttoncontainer.style.display='block';
				confirmbutton=ui.create.div('.menubutton.large.pointerdiv','确定',function(){
					if(ui.confirm&&ui.confirm.str&&ui.confirm.str.includes('o')){
						uiintro._clickintro();
						ui.click.ok(ui.confirm.firstChild);
					}
				},buttoncontainer);
				confirmbutton.style.position='relative';
				setTimeout(function(){
					if(ui.confirm&&ui.confirm.str&&ui.confirm.str.includes('o')){
						confirmbutton.classList.remove('disabled');
					}
					else{
						confirmbutton.classList.add('disabled');
					}
				},300);
			}());
		}
		else if(node.classList.contains('identity')&&node.dataset.career){
			var career=node.dataset.career;
			uiintro.add(get.translation(career));
			uiintro.add('<div class="text center" style="padding-bottom:5px">'+lib.translate['_'+career+'_skill_info']+'</div>');
		}
		else if(node.classList.contains('skillbar')){
			if(node==ui.friendBar){
				uiintro.add('友方怒气值');
				uiintro.add('<div class="text center" style="padding-bottom:5px">'+_status.friendRage+'/100</div>');
			}
			else if(node==ui.enemyBar){
				uiintro.add('敌方怒气值');
				uiintro.add('<div class="text center" style="padding-bottom:5px">'+_status.enemyRage+'/100</div>');
			}
		}
		else if(node.parentNode==ui.historybar){
			if(node.dead){
				if(!node.source||node.source==node.player){
					uiintro.add('<div class="text center">'+get.translation(node.player)+'阵亡</div>');
					uiintro.addSmall([node.player]);
				}
				else{
					uiintro.add('<div class="text center">'+get.translation(node.player)+'被'+get.translation(node.source)+'杀害</div>');
					uiintro.addSmall([node.source]);
				}
			}
			if(node.skill){
				uiintro.add('<div class="text center">'+get.translation(node.skill,'skill')+'</div>');
				uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+get.translation(node.skill,'info')+'</div>');
			}
			if(node.targets&&get.itemtype(node.targets)=='players'){
				uiintro.add('<div class="text center">目标</div>');
				uiintro.addSmall(node.targets);
			}
			if(node.players&&node.players.length>1){
				uiintro.add('<div class="text center">使用者</div>');
				uiintro.addSmall(node.players);
			}
			if(node.cards&&node.cards.length){
				uiintro.add('<div class="text center">卡牌</div>');
				uiintro.addSmall(node.cards);
			}
			for(var i=0;i<node.added.length;i++){
				uiintro.add(node.added[i]);
			}
			if(node.added.length){
				uiintro.add(ui.create.div('.placeholder.slim'));
			}
			if(uiintro.content.firstChild){
				uiintro.content.firstChild.style.paddingTop='3px';
			}
		}
		if(lib.config.touchscreen){
			lib.setScroll(uiintro.contentContainer);
		}
		return uiintro;
	};
	
	// 调色及前缀修改
	// 更改势力字体颜色-神
	// lib.groupnature.shen='metal';
	// 更改势力字体颜色-群
	// lib.groupnature.qun='metal';
	
	// 先删除再添加
	lib.namePrefix.delete('经典')
	lib.namePrefix.set('经典',{
		showName:'经典',
	});
	lib.namePrefix.delete('骰子')
	lib.namePrefix.set('骰子',{
		
	});
	lib.namePrefix.delete('手杀')
	lib.namePrefix.set('手杀',{
		getSpan:(prefix,name)=>{
			const simple=lib.config.buttoncharacter_prefix=='simple',span=document.createElement('span');
			if(simple) span.textContent='手杀';
			else{
				span.style.fontFamily='NonameSuits';
				span.textContent='';
			}
			return span.outerHTML;
		},
	});
	// 修改game.js的函数prefixSpan:(prefix,name)=>{
	// 注：暂未适配新本体代码
	get.prefixSpan=function(prefix,name){
		let color='#ffffff',nature=false;
		const map=lib.namePrefix.get(prefix),config=lib.config.buttoncharacter_prefix;
		if(config=='off') return '';
		if(map){
			if(map.getSpan) return map.getSpan(prefix,name);
			if(map.color) color=map.color;
			if(map.nature) nature=map.nature;
			if(map.showName) prefix=map.showName;
		}
		if(config=='simple') return `<span>${prefix}</span>`
		// return `<span style="color: ${color};"${nature?(`data-nature="${nature}"`):''}>${prefix}</span>`
		return '<span style="font-weight:bold">'+prefix+'</span>'
	};
	
	// 国战魔改
	if(config.guozhanmogai){
		// 在国战模式，若开启“使用国战武将”开关时，勾玉改为阴阳鱼，武将体力以阴阳鱼为单位，体力上限相加向下取整
		// 为避免新版千幻聆音（手杀/十周年UI套装）/扩展使用国战武将后与国战魔改的冲突，新增是否开启千幻聆音扩展/扩展是否使用国战武将的判断，以解决本扩展对本体魔改导致的兼容问题（即国战模式-“使用国战武将”开启时，开启千幻聆音扩展后/扩展使用国战武将后国战魔改失效）
		if(lib.config.mode=='guozhan' && get.config('onlyguozhan') && !(lib.config.extensions && lib.config.extensions.contains('千幻聆音') && lib.config['extension_千幻聆音_enable']) && lib.characterGuozhanFilter.length<2){
			lib.configMenu.appearence.config.hp_style.onclick('round');
			lib.config.mode_config.guozhan.double_hp='xjxxqz';
			// 武将体力修改（参考自体力翻倍扩展，已征得子琪·🍀☀🐳的修改许可）
			for (var i in lib.characterPack.mode_guozhan) {
				if (typeof lib.characterPack.mode_guozhan[i][2] == typeof 0) {
					// 体力=体力上限且不带护甲
					lib.characterPack.mode_guozhan[i][2] *= 0.5;
				} else if (typeof lib.characterPack.mode_guozhan[i][2] == typeof "") {
					var list = lib.characterPack.mode_guozhan[i][2].split('/');
					// 体力除以2
					var hp1 = 0.5 * Number(list[0]);
					// 体力上限除以2
					var hp2 = 0.5 * Number(list[1]);
					// 护甲为0
					var hp3 = 0;
					if (list.length == 3) {
						// 护甲不改
						var hp3 = Number(list[2]);
					}
					var hpx = hp1 + '/' + hp2 + '/' + hp3;
					lib.characterPack.mode_guozhan[i][2] = hpx;
				}
			}
			// 修复了国战魔改时替换君主体力上限调整错误，如君张角弹窗等
			// 修改guozhan.js的函数_mingzhi1:{
			lib.skill._mingzhi1 = {
				trigger:{player:'phaseBeginStart'},
				//priority:19,
				ruleSkill:true,
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.isUnseen(2)&&!player.hasSkillTag('nomingzhi',false,null,true);
				},
				content:function(){
					'step 0'
					if(player.phaseNumber==1&&player.isUnseen(0)&&(_status.connectMode?lib.configOL.junzhu:get.config('junzhu'))){
						var name=player.name1;
						if(name.indexOf('gz_')!=0||!lib.junList.contains(name.slice(3))){
							event.goto(3);
						}
						else{
							event.junzhu_name='gz_jun_'+name.slice(3);
							player.chooseBool('是否将主武将牌替换为“'+get.translation(event.junzhu_name)+'”？');
						}
					}
					else event.goto(3);
					'step 1'
					if(result.bool){
						var to=event.junzhu_name;
						event.maxHp=player.maxHp;
						// player.reinit(player.name1,to,4);
						player.reinitjun(player.name1,to,4/2);
						if(lib.skill[to]) game.trySkillAudio(to,player);
						player.showCharacter(0);
						var group=lib.character[to][1];
						var yelist=game.filterPlayer(function(current){
							if(current.identity!='ye') return false;
							if(current==player) return true;
							return current.group==group;
						});
						if(yelist.length>0){
							player.line(yelist,'green');
							game.log(yelist,'失去了野心家身份');
							game.broadcastAll(function(list,group){
								for(var i=0;i<list.length;i++){
									list[i].identity=group;
									list[i].group=group;
									list[i].setIdentity();
								}
							},yelist,player.group);
						}
						game.tryResult();
					}
					else event.goto(3);
					'step 2'
					if(player.maxHp>event.maxHp) player.recover(player.maxHp-event.maxHp);
					'step 3'
					var choice=1;
					for(var i=0;i<player.hiddenSkills.length;i++){
						if(lib.skill[player.hiddenSkills[i]].ai){
							var mingzhi=lib.skill[player.hiddenSkills[i]].ai.mingzhi;
							if(mingzhi==false){
								choice=0;break;
							}
							if(typeof mingzhi=='function'&&mingzhi(trigger,player)==false){
								choice=0;break;
							}
						}
					}
					if(player.isUnseen()){
						var group=lib.character[player.name1][1];
						player.chooseControl('bumingzhi','明置'+get.translation(player.name1),
							'明置'+get.translation(player.name2),'tongshimingzhi',true).ai=function(event,player){
							if(player.hasSkillTag('mingzhi_yes')) return get.rand(1,2);
							if(player.hasSkillTag('mingzhi_no')) return 0;
							var popu=get.population(lib.character[player.name1][1])
							if(popu>=2||(popu==1&&game.players.length<=4)){
								return Math.random()<0.5?3:(Math.random()<0.5?2:1);
							}
							if(choice==0) return 0;
							if(get.population(group)>0&&player.wontYe()){
								return Math.random()<0.2?(Math.random()<0.5?3:(Math.random()<0.5?2:1)):0;
							}
							var nming=0;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player&&game.players[i].identity!='unknown'){
									nming++;
								}
							}
							if(nming==game.players.length-1) return Math.random()<0.5?(Math.random()<0.5?3:(Math.random()<0.5?2:1)):0;
							return (Math.random()<0.1*nming/game.players.length)?(Math.random()<0.5?3:(Math.random()<0.5?2:1)):0;
						};
					}
					else{
						if(Math.random()<0.5) choice=0;
						if(player.isUnseen(0)){
							player.chooseControl('bumingzhi','明置'+get.translation(player.name1),true).choice=choice;
						}
						else if(player.isUnseen(1)){
							player.chooseControl('bumingzhi','明置'+get.translation(player.name2),true).choice=choice;
						}
						else{
							event.finish();
						}
					}
					'step 4'
					switch(result.control){
						case '明置'+get.translation(player.name1):player.showCharacter(0);break;
						case '明置'+get.translation(player.name2):player.showCharacter(1);break;
						case 'tongshimingzhi':player.showCharacter(2);break;
					}
				}
			};
			// 修改guozhan.js的函数chooseCharacter:function(){
			game.chooseCharacter=function(){
				var next=game.createEvent('chooseCharacter');
				next.showConfig=true;
				next.addPlayer=true;
				next.ai=function(player,list,back){
					if(_status.brawl&&_status.brawl.chooseCharacterAi){
						if(_status.brawl.chooseCharacterAi(player,list,back)!==false){
							return;
						}
					}
					var filterChoice=function(name1,name2){
						if(_status.separatism) return true;
						var group1=lib.character[name1][1];
						var group2=lib.character[name2][1];
						var doublex=get.is.double(name1,true);
						if(doublex){
							var double=get.is.double(name2,true);
							if(double) return doublex.some(group=>double.contains(group));
							return doublex.contains(group2);
						}
						else{
							if(group1=='ye') return group2!='ye';
							var double=get.is.double(name2,true);
							if(double) return double.contains(group1);
							return group1==group2;
						}
					};
					for(var i=0;i<list.length-1;i++){
						for(var j=i+1;j<list.length;j++){
							if(filterChoice(list[i],list[j])||filterChoice(list[j],list[i])){
								var mainx=list[i];
								var vicex=list[j];
								if(!filterChoice(mainx,vicex)||(filterChoice(vicex,mainx)&&get.guozhanReverse(mainx,vicex))){
									mainx=list[j];
									vicex=list[i];
								}
								player.init(mainx,vicex,false);
								if(get.is.double(mainx,true)){
									if(!get.is.double(vicex,true)) player.trueIdentity=lib.character[vicex][1];
									else if(get.is.double(mainx,true).removeArray(get.is.double(vicex,true)).length==0||get.is.double(vicex,true).removeArray(get.is.double(mainx,true)).length==0) player.trueIdentity=get.is.double(vicex,true).filter(group=>get.is.double(mainx,true).contains(group)).randomGet();
									else player.trueIdentity=get.is.double(mainx,true).find(group=>get.is.double(vicex,true).contains(group));
								}
								else if(lib.character[mainx][1]=='ye'&&get.is.double(vicex,true)) player.trueIdentity=get.is.double(vicex,true).randomGet();
								if(back){
									list.remove(player.name1);
									list.remove(player.name2);
									for(var i=0;i<list.length;i++){
										back.push(list[i]);
									}
								}
								return;
							}
						}
					}
				}
				next.setContent(function(){
					"step 0"
					ui.arena.classList.add('choose-character');
					var addSetting=function(dialog){
						dialog.add('选择座位').classList.add('add-setting');
						var seats=document.createElement('table');
						seats.classList.add('add-setting');
						seats.style.margin='0';
						seats.style.width='100%';
						seats.style.position='relative';
						for(var i=1;i<=game.players.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML='<span>'+get.cnNumber(i,true)+'</span>';
							td.link=i-1;
							seats.appendChild(td);
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								if(_status.cheat_seat){
									_status.cheat_seat.classList.remove('bluebg');
									if(_status.cheat_seat==this){
										delete _status.cheat_seat;
										return;
									}
								}
								this.classList.add('bluebg');
								_status.cheat_seat=this;
							});
						}
						dialog.content.appendChild(seats);
						if(game.me==game.zhu){
							seats.previousSibling.style.display='none';
							seats.style.display='none';
						}

						dialog.add(ui.create.div('.placeholder.add-setting'));
						dialog.add(ui.create.div('.placeholder.add-setting'));
						if(get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
					};
					var removeSetting=function(){
						var dialog=_status.event.dialog;
						if(dialog){
							dialog.style.height='';
							delete dialog._scrollset;
							var list=Array.from(dialog.querySelectorAll('.add-setting'));
							while(list.length){
								list.shift().remove();
							}
							ui.update();
						}
					};
					event.addSetting=addSetting;
					event.removeSetting=removeSetting;

					var chosen=lib.config.continue_name||[];
					game.saveConfig('continue_name');
					event.chosen=chosen;

					var i;
					event.list=[];
					for(i in lib.character){
						if(i.indexOf('gz_shibing')==0) continue;
						if(chosen.contains(i)) continue;
						if(lib.filter.characterDisabled(i)) continue;
						if(get.config('onlyguozhan')){
							if(!lib.characterGuozhanFilter.some(pack=>lib.characterPack[pack][i])) continue;
							if(get.is.jun(i)) continue;
						}
						if(lib.character[i][4].contains('hiddenSkill')) continue;
						if(lib.character[i][2]==3||lib.character[i][2]==4||lib.character[i][2]==5||lib.character[i][2]==3/2||lib.character[i][2]==4/2||lib.character[i][2]==5/2)
						event.list.push(i);
					}
					_status.characterlist=event.list.slice(0);
					_status.yeidentity=[];
					if(_status.brawl&&_status.brawl.chooseCharacterFilter){
						event.list=_status.brawl.chooseCharacterFilter(event.list);
					}
					event.list.randomSort();
					// var list=event.list.splice(0,parseInt(get.config('choice_num')));
					var list;
					if(_status.brawl&&_status.brawl.chooseCharacter){
						list=_status.brawl.chooseCharacter(event.list,game.me);
					}
					else{
						list=game.getCharacterChoice(event.list,parseInt(get.config('choice_num')));
					}
					if(_status.auto){
						event.ai(game.me,list);
						lib.init.onfree();
					}
					else if(chosen.length){
						game.me.init(chosen[0],chosen[1],false);
						lib.init.onfree();
					}
					else{
						var dialog=ui.create.dialog('选择角色','hidden',[list,'character']);
						if(!_status.brawl||!_status.brawl.noAddSetting){
							if(get.config('change_identity')){
								addSetting(dialog);
							}
						}
						var next=game.me.chooseButton(dialog,true,2).set('onfree',true);
						next.filterButton=function(button){
							if(ui.dialog.buttons.length<=10){
								for(var i=0;i<ui.dialog.buttons.length;i++){
									if(ui.dialog.buttons[i]!=button){
										if(lib.element.player.perfectPair.call({
											name1:button.link,
											name2:ui.dialog.buttons[i].link,
										},true)){
											button.classList.add('glow2');
										}
									}
								}
							}
							if(lib.character[button.link][4].contains('hiddenSkill')) return false;
							var filterChoice=function(name1,name2){
								if(_status.separatism) return true;
								var group1=lib.character[name1][1];
								var group2=lib.character[name2][1];
								var doublex=get.is.double(name1,true);
								if(doublex){
									var double=get.is.double(name2,true);
									if(double) return doublex.some(group=>double.contains(group));
									return doublex.contains(group2);
								}
								else{
									if(group1=='ye') return group2!='ye';
									var double=get.is.double(name2,true);
									if(double) return double.contains(group1);
									return group1==group2;
								}
							};
							if(!ui.selected.buttons.length){
								return ui.dialog.buttons.some(but=>{
									if(but==button) return false;
									return filterChoice(button.link,but.link);
								});
							}
							return filterChoice(ui.selected.buttons[0].link,button.link);
						};
						next.switchToAuto=function(){
							event.ai(game.me,list);
							ui.arena.classList.remove('selecting');
						};
						var createCharacterDialog=function(){
							event.dialogxx=ui.create.characterDialog('heightset',function(i){
								if(i.indexOf('gz_shibing')==0) return true;
								if(get.config('onlyguozhan')){
									if(!lib.characterGuozhanFilter.some(pack=>lib.characterPack[pack][i])) return true;
									if(get.is.jun(i)) return true;
								}
							},get.config('onlyguozhanexpand')?'expandall':undefined,get.config('onlyguozhan')?'onlypack:mode_guozhan':undefined);
							if(ui.cheat2){
								ui.cheat2.addTempClass('controlpressdownx',500);
								ui.cheat2.classList.remove('disabled');
							}
						};
						if(lib.onfree){
							lib.onfree.push(createCharacterDialog);
						}
						else{
							createCharacterDialog();
						}
						ui.create.cheat2=function(){
							ui.cheat2=ui.create.control('自由选将',function(){
								if(this.dialog==_status.event.dialog){
									if(game.changeCoin){
										game.changeCoin(50);
									}
									this.dialog.close();
									_status.event.dialog=this.backup;
									this.backup.open();
									delete this.backup;
									game.uncheck();
									game.check();
									if(ui.cheat){
										ui.cheat.addTempClass('controlpressdownx',500);
										ui.cheat.classList.remove('disabled');
									}
								}
								else{
									if(game.changeCoin){
										game.changeCoin(-10);
									}
									this.backup=_status.event.dialog;
									_status.event.dialog.close();
									_status.event.dialog=_status.event.parent.dialogxx;
									this.dialog=_status.event.dialog;
									this.dialog.open();
									game.uncheck();
									game.check();
									if(ui.cheat){
										ui.cheat.classList.add('disabled');
									}
								}
							});
							if(lib.onfree){
								ui.cheat2.classList.add('disabled');
							}
						}
						ui.create.cheat=function(){
							_status.createControl=ui.cheat2;
							ui.cheat=ui.create.control('更换',function(){
								if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
									return;
								}
								if(game.changeCoin){
									game.changeCoin(-3);
								}
								event.list=event.list.concat(list);
								event.list.randomSort();
								// list=event.list.splice(0,parseInt(get.config('choice_num')));
								list=game.getCharacterChoice(event.list,parseInt(get.config('choice_num')));
								var buttons=ui.create.div('.buttons');
								var node=_status.event.dialog.buttons[0].parentNode;
								_status.event.dialog.buttons=ui.create.buttons(list,'character',buttons);
								_status.event.dialog.content.insertBefore(buttons,node);
								buttons.addTempClass('start');
								node.remove();
								game.uncheck();
								game.check();
							});
							delete _status.createControl;
						}
						if(!_status.brawl||!_status.brawl.chooseCharacterFixed){
							if(!ui.cheat&&get.config('change_choice'))
							ui.create.cheat();
							if(!ui.cheat2&&get.config('free_choose'))
							ui.create.cheat2();
						}
					}
					"step 1"
					if(ui.cheat){
						ui.cheat.close();
						delete ui.cheat;
					}
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					}
					if(result.buttons){
						var name1=result.buttons[0].link,name2=result.buttons[1].link;
						event.choosen=[name1,name2];
						if(get.is.double(name1,true)){
							if(!get.is.double(name2,true)) event._result={control:lib.character[name2][1]};
							else if(get.is.double(name1,true).removeArray(get.is.double(name2,true)).length==0||get.is.double(name2,true).removeArray(get.is.double(name1,true)).length==0) game.me.chooseControl(get.is.double(name2,true).filter(group=>get.is.double(name1,true).contains(group))).set('prompt','请选择你代表的势力').set('ai',()=>_status.event.controls.randomGet());
							else event._result={control:get.is.double(name1,true).find(group=>get.is.double(name2,true).contains(group))};
						}
						else if(lib.character[name1][1]=='ye'&&get.is.double(name2,true)) game.me.chooseControl(get.is.double(name2,true)).set('prompt','请选择副将代表的势力').set('ai',()=>_status.event.controls.randomGet());
					}
					'step 2'
					if(result&&result.control) game.me.trueIdentity=result.control;
					if(event.choosen){
						game.me.init(event.choosen[0],event.choosen[1],false);
						game.addRecentCharacter(event.choosen[0],event.choosen[1]);
					}
					event.list.remove(game.me.name1);
					event.list.remove(game.me.name2);
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=game.me){
							event.ai(game.players[i],game.getCharacterChoice(event.list,parseInt(get.config('choice_num'))),event.list);
						}
					}
					for(var i=0;i<game.players.length;i++){
						game.players[i].classList.add('unseen');
						game.players[i].classList.add('unseen2');
						_status.characterlist.remove(game.players[i].name);
						_status.characterlist.remove(game.players[i].name2);
						if(game.players[i]!=game.me){
							game.players[i].node.identity.firstChild.innerHTML='猜';
							game.players[i].node.identity.dataset.color='unknown';
							game.players[i].node.identity.classList.add('guessing');
						}
						game.players[i].hiddenSkills=lib.character[game.players[i].name1][3].slice(0);
						var hiddenSkills2=lib.character[game.players[i].name2][3];
						for(var j=0;j<hiddenSkills2.length;j++){
							game.players[i].hiddenSkills.add(hiddenSkills2[j]);
						}
						for(var j=0;j<game.players[i].hiddenSkills.length;j++){
							if(!lib.skill[game.players[i].hiddenSkills[j]]){
								game.players[i].hiddenSkills.splice(j--,1);
							}
						}
						game.players[i].group='unknown';
						game.players[i].sex='unknown';
						game.players[i].name1=game.players[i].name;
						game.players[i].name='unknown';
						game.players[i].identity='unknown';
						game.players[i].node.name.show();
						game.players[i].node.name2.show();
						for(var j=0;j<game.players[i].hiddenSkills.length;j++){
							game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j],true);
						}
					}
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				});
			};
			// 修改game.js的函数init(character,character2,skill,update){
			lib.element.player.init=function(character,character2,skill,update){
				if(typeof character=='string'&&!lib.character[character]){
					lib.character[character]=get.character(character);
				}
				if(typeof character2=='string'&&!lib.character[character2]){
					lib.character[character2]=get.character(character2);
				}
				if(!lib.character[character]) return;
				if(get.is.jun(character2)){
					var tmp=character;
					character=character2;
					character2=tmp;
				}
				if(character2==false){
					skill=false;
					character2=null;
				}
				var info=lib.character[character];
				if(!info){
					info=['','',1,[],[]];
				}
				if(!info[4]){
					info[4]=[];
				}
				var skills=info[3].slice(0);
				this.clearSkills(true);

				var hp1=get.infoHp(info[2]);
				var maxHp1=get.infoMaxHp(info[2]);
				var hujia1=get.infoHujia(info[2]);
				
				this.name=character;
				this.name1=character;
				this.sex=info[0];
				this.group=info[1];
				this.hp=hp1;
				this.maxHp=maxHp1;
				this.hujia=hujia1;
				this.node.intro.innerHTML=lib.config.intro;
				this.node.name.dataset.nature=get.groupnature(this.group);
				lib.setIntro(this);
				this.node.name.innerHTML=get.slimName(character);
				if(this.classList.contains('minskin')&&this.node.name.querySelectorAll('br').length>=4){
					this.node.name.classList.add('long');
				}
				if(info[4].contains('hiddenSkill')&&!this.noclick){
					if(!this.hiddenSkills) this.hiddenSkills=[];
					this.hiddenSkills.addArray(skills);
					skills=[];
					this.name='unknown';
					this.sex='male';
					this.storage.nohp=true;
					skills.add('g_hidden_ai');
				}
				if(character2&&lib.character[character2]){
					var info2=lib.character[character2];
					if(!info2){
						info2=['','',1,[],[]];
					}
					if(!info2[4]){
						info2[4]=[];
					}

					this.name2=character2;
					var hp2=get.infoHp(info2[2]);
					var maxHp2=get.infoMaxHp(info2[2]);
					var hujia2=get.infoHujia(info2[2]);
					this.hujia+=hujia2;
					var double_hp;
					if(_status.connectMode||get.mode()=='single'){
						double_hp='pingjun';
					}
					else{
						double_hp=get.config('double_hp');
					}
					switch(double_hp){
						case 'pingjun':{
							this.maxHp=Math.floor((maxHp1+maxHp2)/2);
							this.hp=Math.floor((hp1+hp2)/2);
							this.singleHp=((maxHp1+maxHp2)%2===1);
							break;
						}
						case 'zuidazhi':{
							this.maxHp=Math.max(maxHp1,maxHp2);
							this.hp=Math.max(hp1,hp2);
							break;
						}
						case 'zuixiaozhi':{
							this.maxHp=Math.min(maxHp1,maxHp2);
							this.hp=Math.min(hp1,hp2);
							break;
						}
						case 'zonghe':{
							this.maxHp=maxHp1+maxHp2;
							this.hp=hp1+hp2;
							break;
						}
						case 'xjxxqz':{
							this.maxHp=Math.floor(maxHp1+maxHp2);
							this.hp=Math.floor(hp1+hp2);
							this.singleHp=(((maxHp1+maxHp2)*2)%2===1);
							break;
						}
						default:{
							this.maxHp=maxHp1+maxHp2-3;
							this.hp=hp1+hp2-3;
						}
					}
					if(info2[4].contains('hiddenSkill')&&!this.noclick){
						if(!this.hiddenSkills) this.hiddenSkills=[];
						this.hiddenSkills.addArray(info2[3]);
						this.storage.nohp=true;
						skills.add('g_hidden_ai');
					}
					else skills=skills.concat(info2[3]);
				}
				if(this.storage.nohp){
					this.storage.rawHp=this.hp;
					this.storage.rawMaxHp=this.maxHp;
					this.hp=1;
					this.maxHp=1;
					this.node.hp.hide();
				}
				if(skill!=false){
					skills=skills.filter(skill=>{
						var info=get.info(skill);
						if(info&&info.zhuSkill&&!this.isZhu2()) return false;
						return true;
					});
					for(var i=0;i<skills.length;i++){
						this.addSkill(skills[i],null,true);
					}
					this.checkConflict();
				}
				lib.group.add(this.group);

				this.$init(character,character2);

				if(this.inits){
					for(var i=0;i<this.inits.length;i++){
						this.inits[i](this);
					}
				}
				if(this._inits){
					for(var i=0;i<this._inits.length;i++){
						this._inits[i](this);
					}
				}
				if(update!==false) this.$update();
				return this;
			};
			// reinitjun函数参考自game.js的函数reinit(from,to,maxHp,online){，凑出结果
			lib.element.player.reinitjun=function(from,to,maxHp,online){
				var info1=lib.character[from];
				var info2=lib.character[to];
				var smooth=true,replaced=null;
				if(maxHp=='nosmooth'){
					smooth=false;
					maxHp=null;
				}
				if(this.name2==from){
					this.name2=to;
				}
				else if(this.name==from||this.name1==from){
					if(this.name1==from){
						this.name1=to;
					}
					if(!this.isUnseen(1)){
						this.name=to;
						this.sex=info2[0];
					}
				}
				else{
					return this;
				}
				if(online){
					return;
				}
				for(var i=0;i<info1[3].length;i++){
					this.removeSkill(info1[3][i]);
				}
				for(var i=0;i<info2[3].length;i++){
					var info=get.info(info2[3][i]);
					if(info&&info.zhuSkill&&!this.isZhu2()) continue;
					this.addSkill(info2[3][i]);
				}
				if(Array.isArray(maxHp)){
					this.maxHp=maxHp[1];
					this.hp=maxHp[0];
				}
				else{
					var num;
					if(maxHp===false){
						num=0;
					}
					else{
						if(typeof maxHp!='number'){
							maxHp=get.infoMaxHp(info2[2]);
						}
						num=maxHp-get.infoMaxHp(info1[2]);
					}
					if(typeof this.singleHp=='boolean'){
						if(num%2!=0){
							if(this.singleHp){
								this.maxHp+=(num*2+1)/2;
								this.singleHp=false;
							}
							else{
								this.maxHp+=(num*2-1)/2;
								this.singleHp=true;
								if(!game.online){
									this.doubleDraw();
								}
							}
						}
						else{
							this.maxHp+=num/2;
						}
					}
					else{
						this.maxHp+=num;
					}
				}
				game.broadcast(function(player,from,to,skills){
					player.reinit(from,to,null,true);
					player.applySkills(skills);
				},this,from,to,get.skillState(this));
				game.addVideo('reinit3',this,{
					from:from,
					to:to,
					hp:this.maxHp,
					avatar2:this.name2==to
				});

				this.$reinit(from,to,maxHp,online);
				this.update();
			};
			lib.arenaReady.push(function(){
				lib.mode.guozhan.config.double_hp={
					name:'双将体力上限',
					init:'pingjun',
					item:{
						hejiansan:'和减三',
						pingjun:'平均值',
						zuidazhi:'最大值',
						zuixiaozhi:'最小值',
						zonghe:'相加',
						xjxxqz:'相加向下取整',
					},
					restart:true,
				};
			});
			
		} else lib.configMenu.appearence.config.hp_style.onclick('glass'); 
		
	}
	// 国战其他魔改
	if(lib.config.mode=='guozhan'){
		// 鏖战模式删除左上角提示
		// 修改guozhan.js的函数_aozhan_judge:{
		lib.skill._aozhan_judge = {
			trigger:{
				player:"phaseBefore",
			},
			forced:true,
			priority:22,
			filter:function(event,player){
				if(get.mode()!='guozhan') return false;
				if(_status.connectMode&&!lib.configOL.aozhan) return false;
				else if(!_status.connectMode&&!get.config('aozhan')) return false;
				if(_status._aozhan) return false;
				if(game.players.length>4) return false;
				if(game.players.length>3&&game.players.length+game.dead.length<=7) return false;
				for(var i=0;i<game.players.length;i++){
					for(var j=i+1;j<game.players.length;j++){
						if(game.players[i].isFriendOf(game.players[j])) return false;
					}
				}
				return true;
			},
			content:function(){
				var color=get.groupnature(player.group,"raw");
				if(player.isUnseen()) color='fire';
				player.$fullscreenpop('鏖战模式',color); 
				game.broadcastAll(function(){
				_status._aozhan=true;
				ui.aozhan=ui.create.div('.touchinfo.left',ui.window);
				ui.aozhan.innerHTML='';
				if(ui.time3) ui.time3.style.display='none';
				ui.aozhanInfo=ui.create.system('鏖战模式',null,true);
				lib.setPopped(ui.aozhanInfo,function(){
					var uiintro=ui.create.dialog('hidden');
					uiintro.add('鏖战模式');
					var list=[
						'当游戏中仅剩四名或更少角色时（七人以下游戏时改为三名或更少），若此时全场没有超过一名势力相同的角色，则从一个新的回合开始，游戏进入鏖战模式直至游戏结束。',
						'在鏖战模式下，任何角色均不是非转化的【桃】的合法目标。【桃】可以被当做【杀】或【闪】使用或打出。',
						'进入鏖战模式后，即使之后有两名或者更多势力相同的角色出现，仍然不会取消鏖战模式。'
					];
					var intro='<ul style="text-align:left;margin-top:0;width:450px">';
					for(var i=0;i<list.length;i++){
						intro+='<li>'+list[i];
					}
					intro+='</ul>'
					uiintro.add('<div class="text center">'+intro+'</div>');
					var ul=uiintro.querySelector('ul');
					if(ul){
						ul.style.width='180px';
					}
					uiintro.add(ui.create.div('.placeholder'));
					return uiintro;
				},250);
				game.playBackgroundMusic();
				});
				game.countPlayer(function(current){current.addSkill('aozhan')});
			},
		};
		
		// 国战军令卡牌删除“军令”文字显示
		// 修改guozhan.js的函数chooseJunlingFor:function(){
		lib.element.content.chooseJunlingFor=function(){
			'step 0'
			var list=['junling1','junling2','junling3','junling4','junling5','junling6'];
			list=list.randomGets(event.num).sort();
			for(var i=0;i<list.length;i++) list[i]=['','',list[i]];
			var prompt=event.prompt||'选择一张军令牌';
			if(target!=undefined&&!event.prompt){
				var str=target==player?'（你）':'';
				prompt+='，令'+get.translation(target)+str+'选择是否执行';
			}
			player.chooseButton([prompt,[list,'vcard']],true).set('ai',function(button){
				return get.junlingEffect(_status.event.player,button.link[2],_status.event.getParent().target,[],_status.event.player);
			});
			'step 1'
			event.result={
				junling:result.links[0][2],
				targets:[],
			};
			if(result.links[0][2]=='junling1') player.chooseTarget('选择一名角色，做为若该军令被执行，受到伤害的角色',true).set('ai',function(_target){
				return get.damageEffect(_target,target,player);
			});
			'step 2'
			if(result.targets.length){
				player.line(result.targets,'green');
				event.result.targets=result.targets;
			}
		};
	}
	
	// 修复对决-自由模式选将时按钮偏上的异常
	// 修改versus.js的函数chooseCharacter:function(){
	if(lib.config.mode=='versus'){
		game.chooseCharacter=function(){
			var next=game.createEvent('chooseCharacter');
			next.showConfig=true;
			next.setContent(function(){
				"step 0"
				if(lib.config.continue_name_versus){
					_status.friend=lib.config.continue_name_versus.friend;
					_status.enemy=lib.config.continue_name_versus.enemy;
					_status.color=lib.config.continue_name_versus.color;
					game.additionaldead=[];
					event.goto(1);
					game.saveConfig('continue_name_versus');
					lib.init.onfree();
					return;
				}
				event.check=function(){
					this.dialog.classList.add('fullwidth');
					this.dialog.classList.add('fullheight');
					this.dialog.classList.add('noslide');
					for(var i=0;i<this.dialog.buttons.length;i++) this.dialog.buttons[i].style.opacity=1;
					this.dialog.add('选项');
					this.dialog.versus_zhu=this.dialog.add(ui.create.switcher('versus_zhu',lib.storage.zhu)).querySelector('.toggle');
					// this.dialog.versus_only_zhu=this.dialog.add(ui.create.switcher('versus_only_zhu',lib.storage.only_zhu)).querySelector('.toggle');
					this.dialog.versus_main_zhu=this.dialog.add(ui.create.switcher('versus_main_zhu',lib.storage.main_zhu)).querySelector('.toggle');
					if(lib.storage.zhu){
						// this.dialog.versus_only_zhu.parentNode.classList.remove('disabled');
						this.dialog.versus_main_zhu.parentNode.classList.remove('disabled');
					}
					else{
						// this.dialog.versus_only_zhu.parentNode.classList.add('disabled');
						this.dialog.versus_main_zhu.parentNode.classList.add('disabled');
					}
					// this.dialog.versus_cross_seat=this.dialog.add(ui.create.switcher('versus_cross_seat',lib.storage.cross_seat)).querySelector('.toggle');
					// this.dialog.versus_random_seat=this.dialog.add(ui.create.switcher('versus_random_seat',lib.storage.random_seat)).querySelector('.toggle');
					this.dialog.versus_noreplace_end=this.dialog.add(ui.create.switcher('versus_noreplace_end',lib.storage.noreplace_end)).querySelector('.toggle');
					this.dialog.versus_assign_enemy=this.dialog.add(ui.create.switcher('versus_assign_enemy',lib.storage.assign_enemy)).querySelector('.toggle');
					this.dialog.versus_single_control=this.dialog.add(ui.create.switcher('versus_single_control',lib.storage.single_control)).querySelector('.toggle');
					this.dialog.versus_first_less=this.dialog.add(ui.create.switcher('versus_first_less',get.config('first_less'))).querySelector('.toggle');
					this.dialog.versus_reward=this.dialog.add(ui.create.switcher('versus_reward',[0,1,2,3,4],lib.storage.versus_reward)).querySelector('.toggle');
					this.dialog.versus_punish=this.dialog.add(ui.create.switcher('versus_punish',['弃牌','无','摸牌'],lib.storage.versus_punish)).querySelector('.toggle');
					this.dialog.versus_seat_order=this.dialog.add(ui.create.switcher('seat_order',['对阵','交叉','随机'],lib.storage.seat_order)).querySelector('.toggle');
					this.dialog.versus_number=this.dialog.add(ui.create.switcher('versus_number',[1,2,3],lib.storage.number)).querySelector('.toggle');
					this.dialog.replace_number=this.dialog.add(ui.create.switcher('replace_number',[0,1,2,3,5,7,9,17],lib.storage.replace_number)).querySelector('.toggle');
					this.dialog.choice=this.dialog.add(ui.create.switcher('choice',[12,16,20,24,40,'∞'],lib.storage.choice)).querySelector('.toggle');

					// if(lib.storage.cross_seat){
					// 	this.dialog.versus_random_seat.parentNode.classList.add('disabled');
					// }
					// else{
					// 	this.dialog.versus_random_seat.parentNode.classList.remove('disabled');
					// 	if(lib.storage.random_seat){
					// 		this.dialog.versus_cross_seat.parentNode.classList.add('disabled');
					// 	}
					// 	else{
					// 		this.dialog.versus_cross_seat.parentNode.classList.remove('disabled');
					// 	}
					// }
				};
				event.confirm=function(){
					var dialog=event.dialog;
					var num=lib.storage.number+lib.storage.replace_number;
					_status.friend.splice(num);
					_status.enemy.splice(num);
					dialog.close();
					if(ui.confirm) ui.confirm.close();
					game.resume();
				};
				ui.control.style.transition='all 0s';
				if(get.is.phoneLayout()){
					ui.control.style.top='calc(100% - 60px)';
				}
				else if(game.layout=='newlayout'){
					ui.control.style.top='calc(100% - 30px)';
				}
				else{
					ui.control.style.top='calc(100% - 70px)';
				}
				_status.friend=[];
				_status.enemy=[];
				game.additionaldead=[];
				_status.color=Math.random()<0.5;
				var i,list=[];
				for(i in lib.character){
					// if(lib.config.forbidversus.contains(i)) continue;
					if(lib.filter.characterDisabled(i)) continue;
					list.push(i);
				}
				var groupSort=function(name){
					if(lib.character[name][1]=='wei') return 0;
					if(lib.character[name][1]=='shu') return 1;
					if(lib.character[name][1]=='wu') return 2;
					if(lib.character[name][1]=='qun') return 3;
				}
				var sortByGroup=function(a,b){
					var del=groupSort(a)-groupSort(b);
					if(del!=0) return del;
					if(a.indexOf('_')!=-1){
						a=a.slice(a.indexOf('_')+1);
					}
					if(b.indexOf('_')!=-1){
						b=b.slice(b.indexOf('_')+1);
					}
					return a>b?1:-1;
				}
				if(lib.storage.choice=='∞'){
					list.sort(sortByGroup);
				}
				else{
					list.randomSort();
				}
				_status.list=list;
				var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;
				event.dialog=ui.create.dialog('选择角色',[list.slice(0,choice),'character']);
				event.dialog.classList.add('fixed');
				// for(var i=0;i<event.dialog.buttons.length;i++){
				// 	event.dialog.buttons[i].style.transform='scale(0.95)';
				// }
				event.check();
				ui.create.cheat=function(){
					_status.createControl=event.fill;
					ui.cheat=ui.create.control('更换',function(){
						if(_status.choosefinished){
							return;
						}
						if(lib.storage.choice=='∞'){
							list.sort(sortByGroup);
						}
						else{
							list.randomSort();
						}
						_status.friend.length=0;
						_status.enemy.length=0;
						var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;

						ui.dialog.content.firstChild.innerHTML='选择角色';
						var buttons=ui.create.div('.buttons');
						var node=_status.event.dialog.buttons[0].parentNode;
						_status.event.dialog.buttons=ui.create.buttons(list.slice(0,choice),'character',buttons);
						_status.event.dialog.content.insertBefore(buttons,node);
						buttons.addTempClass('start');
						node.remove();

						// event.check();
					});
					delete _status.createControl;
				}
				if(!ui.cheat&&get.config('change_choice'))
				ui.create.cheat();
				if(lib.config.test_game){
					setTimeout(function(){
						event.switchToAuto();
					},500);
				}
				event.switchToAuto=function(){
					delete _status.choosefinished;
					event.fill.close();
					var buttons=_status.event.dialog.buttons.slice(0);
					buttons.randomSort();
					for(var i=0;i<buttons.length;i++){
						if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
							buttons.splice(i,1);i--;
						}
					}
					var dialog=_status.event.dialog;
					var max=dialog.versus_number.link+dialog.replace_number.link;
					for(var i=0;i<buttons.length;i++){
						if(_status.friend.length<max){
							_status.friend.push(buttons[i].link);
						}
						else if(_status.enemy.length<max){
							_status.enemy.push(buttons[i].link);
						}
						else{
							break;
						}
					}
					_status.friend.splice(max);
					_status.enemy.splice(max);
					dialog.close();
					if(ui.confirm) ui.confirm.close();
					game.resume();
				};
				event.fill=ui.create.control('补全',event.switchToAuto);
				event.custom.replace.button=function(button){
					if(_status.choose_enemy){
						if(button.classList.contains('glow')||button.classList.contains('selectedx')||_status.choosefinished) return;
						_status.choose_enemy=false;
						if(!_status.color){
							button.classList.add('selectedx');
							// button.style.transform='rotate(-3deg)';
						}
						else{
							button.classList.add('glow');
							// button.style.transform='rotate(-3deg)';
						}
						_status.enemy.push(button.link);
						var buttons=_status.event.dialog.buttons.slice(0);
						for(var i=0;i<buttons.length;i++){
							if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
								buttons.splice(i,1);i--;
							}
						}
					}
					else{
						if(button.classList.contains('glow')||button.classList.contains('selectedx')||_status.choosefinished) return;
						if(_status.color){
							button.classList.add('selectedx');
							// button.style.transform='rotate(-3deg)';
						}
						else{
							button.classList.add('glow');
							// button.style.transform='rotate(-3deg)';
						}
						_status.friend.push(button.link);
						var buttons=_status.event.dialog.buttons.slice(0);
						for(var i=0;i<buttons.length;i++){
							if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
								buttons.splice(i,1);i--;
							}
						}
						if(lib.storage.assign_enemy){
							_status.choose_enemy=true;
						}
						else{
							var button2=buttons[Math.floor(Math.random()*buttons.length)];
							if(_status.color){
								button2.classList.add('glow');
								// button2.style.transform='rotate(-3deg)';
							}
							else{
								button2.classList.add('selectedx');
								// button2.style.transform='rotate(-3deg)';
							}
							_status.enemy.push(button2.link);
							_status.event.dialog.content.firstChild.innerHTML='对方选择了'+get.translation(button2.link);
						}
					}
				};
				event.custom.add.window=function(){
					var dialog=_status.event.dialog;
					if(_status.friend.length==_status.enemy.length&&_status.friend.length>=dialog.versus_number.link+dialog.replace_number.link){
						event.fill.firstChild.innerHTML='开始';
						_status.choosefinished=true;
						if(ui.cheat){
							ui.cheat.close();
							delete ui.cheat;
						}
					}
					game.save('zhu',dialog.versus_zhu.link);
					if(lib.storage.zhu){
						// dialog.versus_only_zhu.parentNode.classList.remove('disabled');
						dialog.versus_main_zhu.parentNode.classList.remove('disabled');
					}
					else{
						// dialog.versus_only_zhu.parentNode.classList.add('disabled');
						dialog.versus_main_zhu.parentNode.classList.add('disabled');
					}
					// game.save('only_zhu',dialog.versus_only_zhu.link);
					game.save('main_zhu',dialog.versus_main_zhu.link);
					game.save('assign_enemy',dialog.versus_assign_enemy.link);
					game.save('seat_order',dialog.versus_seat_order.link);
					// game.save('cross_seat',dialog.versus_cross_seat.link);
					game.save('noreplace_end',dialog.versus_noreplace_end.link);
					game.save('single_control',dialog.versus_single_control.link);
					switch(lib.storage.seat_order){
						case '交叉':lib.storage.cross_seat=true;lib.storage.random_seat=false;break;
						case '随机':lib.storage.cross_seat=false;lib.storage.random_seat=true;break;
						default:lib.storage.cross_seat=false;lib.storage.random_seat=false;
					}
					game.saveConfig('first_less',dialog.versus_first_less.link,true);
					game.save('number',dialog.versus_number.link);
					game.save('versus_reward',dialog.versus_reward.link);
					game.save('versus_punish',dialog.versus_punish.link);
					game.save('replace_number',dialog.replace_number.link);
					game.save('choice',dialog.choice.link);
					var count,i;
					if(dialog.buttons.length>lib.storage.choice){
						count=dialog.buttons.length-lib.storage.choice;
						var removed=[];
						for(i=dialog.buttons.length-1;i>=0&&count>0;i--){
							if(dialog.buttons[i].classList.contains('target')==false&&
								dialog.buttons[i].classList.contains('glow')==false){
								dialog.buttons[i].remove();
								_status.list.remove(dialog.buttons[i].link);
								removed.push(dialog.buttons[i].link)
								dialog.buttons.splice(i,1);
								count--;
							}
						}
						for(i=0;i<removed.length;i++) _status.list.splice(lib.storage.choice,0,removed[i]);
					}
					else if(dialog.buttons.length<lib.storage.choice||lib.storage.choice=='∞'){
						var list=_status.list;
						var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;
						var buttons=dialog.querySelector('.buttons');
						var button;
						for(i=dialog.buttons.length;i<choice;i++){
							button=ui.create.button(list[i],'character',buttons).addTempClass('zoom')
							dialog.buttons.push(button);
							button.style.opacity=1;
						}
					}
				};
				game.pause();
				lib.init.onfree();
				"step 1"
				_status.friendBackup=_status.friend.slice(0);
				_status.enemyBackup=_status.enemy.slice(0);

				_status.friendDied=[];
				_status.enemyDied=[];
				_status.totalCount=_status.friend.length;
				_status.coinCoeff=get.coinCoeff(_status.friend);

				// ui.auto.show();
				ui.wuxie.show();
				ui.control.style.display='none';
				setTimeout(function(){
					ui.control.style.top='';
					ui.control.style.display='';
					ui.control.style.transition='';
				},500);
				if(ui.cheat){
					ui.cheat.close();
					delete ui.cheat;
				}
				delete _status.list;
				var num=lib.storage.number;
				ui.create.players(num*2);
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
					game.players[i].node.action.innerHTML='行动';
				}
				if(lib.storage.single_control&&game.players.length>=4){
					ui.arena.setNumber(parseInt(ui.arena.dataset.number)+1);
					for(var i=0;i<game.players.length;i++){
						game.players[i].dataset.position=parseInt(game.players[i].dataset.position)+1;
					}
					game.singleHandcard=true;
					ui.arena.classList.add('single-handcard');
					ui.window.classList.add('single-handcard');
					ui.fakeme=ui.create.div('.fakeme.avatar');
					// ui.fakeme.line=lib.element.player.line;
					// ui.fakemebg=ui.create.div('.avatar',ui.fakeme).hide();
				}
				_status.prepareArena=true;
				ui.create.me();
				if(ui.fakeme){
					ui.me.appendChild(ui.fakeme);
				}
				var position,i;
				if(lib.storage.zhu&&lib.storage.only_zhu) position=Math.ceil(num/2)-1;
				else position=Math.floor(Math.random()*num)
				game.friend=[];
				game.enemy=[];
				if(lib.storage.random_seat){
					var players=game.players.slice(0);
					game.friend.push(game.me);
					players.remove(game.me);
					for(i=0;i<num-1;i++){
						game.friend.push(players.randomRemove());
					}
					for(i=0;i<num;i++){
						game.enemy.push(players.randomRemove());
					}
				}
				else{
					for(var i in lib.skill){
						if(lib.skill[i].changeSeat){
							lib.skill[i]={};
							if(lib.translate[i+'_info']){
								lib.translate[i+'_info']='固定位置时不可用';
							}
						}
					}
					if(lib.storage.cross_seat){
						for(i=0;i<game.players.length;i++){
							if(i%2==0){
								game.friend.push(game.players[i]);
							}
							else{
								game.enemy.push(game.players[i]);
							}
						}
					}
					else{
						for(i=0;i<position;i++){
							game.friend.push(game.players[i-position+num*2]);
						}
						for(i=position;i<num;i++){
							game.friend.push(game.players[i-position]);
						}
						for(i=0;i<num;i++){
							game.enemy.push(game.players[num-position+i]);
						}
					}
				}
				if(((position==Math.ceil(num/2)-1&&lib.storage.zhu)||(lib.storage.zhu&&lib.storage.single_control))){
					var dialog=ui.create.dialog('按顺序选择出场角色',[_status.friend,'character']);
					game.me.chooseButton(dialog,num,true);
				}
				if(lib.storage.random_seat&&lib.storage.zhu){
					if(lib.storage.only_zhu){
						game.friendZhu=game.me;
					}
					else{
						game.friendZhu=game.friend.randomGet();
					}
					game.enemyZhu=game.enemy.randomGet();
				}
				for(i=0;i<num;i++){
					game.friend[i].side=_status.color;
					game.enemy[i].side=!_status.color;
					if(lib.storage.random_seat&&lib.storage.zhu){
						if(game.friendZhu==game.friend[i]){
							game.friend[i].identity='zhu';
							game.friend[i].setIdentity(_status.color+'Zhu');
						}
						else{
							game.friend[i].identity='zhong';
							game.friend[i].setIdentity(_status.color+'Zhong');
						}
						if(game.enemyZhu==game.enemy[i]){
							game.enemy[i].identity='zhu';
							game.enemy[i].setIdentity(!_status.color+'Zhu');
						}
						else{
							game.enemy[i].identity='zhong';
							game.enemy[i].setIdentity(!_status.color+'Zhong');
						}
					}
					else{
						if(game.me==game.friend[i]&&lib.storage.zhu){
							game.friend[i].identity='zhu';
							game.friend[i].setIdentity(_status.color+'Zhu');
							game.friendZhu=game.friend[i];
						}
						else{
							game.friend[i].identity='zhong';
							game.friend[i].setIdentity(_status.color+'Zhong');

						}
						if(lib.storage.zhu&&get.distance(game.enemy[i],game.me,'pure')==num){
							game.enemy[i].identity='zhu';
							game.enemy[i].setIdentity(!_status.color+'Zhu');
							game.enemyZhu=game.enemy[i];
						}
						else{
							game.enemy[i].identity='zhong';
							game.enemy[i].setIdentity(!_status.color+'Zhong');
						}
					}
					game.friend[i].node.identity.dataset.color=get.translation(_status.color+'Color');
					game.enemy[i].node.identity.dataset.color=get.translation(!_status.color+'Color');
					// game.friend[i].node.identity.style.backgroundColor=get.translation(_status.color+'Color');
					// game.enemy[i].node.identity.style.backgroundColor=get.translation(!_status.color+'Color');
				}
				if(lib.storage.zhu&&!game.enemyZhu){
					game.enemy[0].identity='zhu';
					game.enemy[0].setIdentity(!_status.color+'Zhu');
					game.enemyZhu=game.enemy[0];
				}
				"step 2"
				var num=lib.storage.number;
				if(result&&result.buttons){
					var list=[];
					for(i=0;i<result.buttons.length;i++){
						list.push(result.buttons[i].link);
						_status.friend.remove(result.buttons[i].link);
					}
					_status.friend=list.concat(_status.friend);
				}
				for(i=0;i<num;i++){
					game.friend[i].init(_status.friend[i]);
					game.enemy[i].init(_status.enemy[i]);

					game.friend[i].node.identity.dataset.color=get.translation(_status.color+'Color');
					game.enemy[i].node.identity.dataset.color=get.translation(!_status.color+'Color');
				}
				if(lib.storage.zhu&&lib.storage.main_zhu){
					game.friendZhu.maxHp++;
					game.friendZhu.hp++;
					game.friendZhu.update();

					game.enemyZhu.maxHp++;
					game.enemyZhu.hp++;
					game.enemyZhu.update();
				}
				_status.friend.splice(0,num);
				_status.enemy.splice(0,num);
				if(lib.storage.single_control&&game.players.length>=4){
					// ui.fakemebg.show();
					game.onSwapControl();
				}
			});
		};
	}
	
	// 挑战模式神将按钮删除乱入武将
	// 修改boss.js的函数boss_taowu:{
	if(lib.config.mode=='boss'){
		lib.boss.boss_taowu = {
			chongzheng:0,
			loopFirst:function(){
				return game.boss.nextSeat.nextSeat;
			},
			gameDraw:function(player){
				return player==game.boss?8:4;
			},
			minion:{
				'2':'boss_zhuyin',
				'8':'boss_zhuyin',
			},
			randchoice:function(name,list){
				if(Math.random()>1/3){
					return name;
				}
				else{
					var arr=['shen_caocao','shen_simayi','shen_guanyu','shen_zhugeliang','shen_zhaoyun','shen_zhouyu','shen_lvmeng','shen_lvbu','shen_liubei','shen_luxun','shen_ganning','ol_zhangliao','shen_zhenji','shen_caopi'];
					arr.removeArray(list);
					return arr.randomGet();
				}
			},
			controlid:'shenwuzaishi',
			control:function(type,control){
				if(type=='cancel'){
					if(!control.classList.contains('glow')) return;
					var dialog=control.dialog;
					dialog.content.removeChild(control.backup1);
					dialog.buttons.removeArray(control.backup2);

					game.uncheck();
					game.check();
				}
				else{
					var control=ui.create.control('神将',function(){
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
							return;
						}
						var dialog=_status.event.dialog;
						this.dialog=dialog;
						if(this.classList.contains('glow')){
							this.backup1.remove();
							dialog.buttons.removeArray(this.backup2);
						}
						else{
							var links=[];
							for(var i=0;i<dialog.buttons.length;i++){
								links.push(dialog.buttons[i].link);
							}
							for(var i=0;i<this.backup2.length;i++){
								if(links.contains(this.backup2[i].link)){
									this.backup2[i].style.display='none';
								}
								else{
									this.backup2[i].style.display='';
								}
							}
							dialog.content.insertBefore(this.backup1,dialog.buttons[0].parentNode);
							dialog.buttons.addArray(this.backup2);
						}
						this.classList.toggle('glow');

						game.uncheck();
						game.check();
					});
					control.backup1=ui.create.div('.buttons');
					control.backup2=ui.create.buttons(['shen_caocao','shen_simayi','shen_guanyu','shen_zhugeliang','shen_zhaoyun','shen_zhouyu','shen_lvmeng','shen_lvbu','shen_liubei','shen_luxun','shen_ganning','ol_zhangliao','shen_zhenji','shen_caopi'],'character',control.backup1);
					return control;
				}
			},
			init:function(){
				game.addGlobalSkill('boss_shenwuzaishi');
				game.addGlobalSkill('TheDayIBecomeAGod');
				game.addGlobalSkill('thedayibecomeagod');
				var list=['lebu','bingliang'];
				for(var i=0;i<game.players.length;i++){
					switch(game.players[i].name1){
						case 'shen_guanyu':{
							game.players[i].equip(game.createCard2('guilongzhanyuedao','spade',5));
							lib.inpile.add('guilongzhanyuedao');
							list.push('qinglong');
							break;
						}
						case 'shen_zhugeliang':{
							game.players[i].equip(game.createCard2('qimenbagua','spade',2));
							list.push('bagua');
							lib.inpile.add('qimenbagua');
							break;
						}
						case 'shen_zhouyu':{
							game.players[i].equip(game.createCard2('chiyanzhenhunqin','diamond',1));
							list.push('zhuque');
							lib.inpile.add('chiyanzhenhunqin');
							break;
						}
						case 'shen_caocao':{
							game.players[i].equip(game.createCard2('juechenjinge','spade',5));
							list.push('jueying');
							lib.inpile.add('juechenjinge');
							break;
						}
						case 'shen_zhaoyun':{
							game.players[i].equip(game.createCard2('chixueqingfeng','spade',6));
							list.push('qinggang');
							lib.inpile.add('chixueqingfeng');
							break;
						}
						case 'shen_lvbu':{
							game.players[i].equip(game.createCard2('xiuluolianyuji','diamond',12));
							list.push('fangtian');
							lib.inpile.add('xiuluolianyuji');
							break;
						}
						case 'shen_simayi':{
							game.players[i].equip(game.createCard2('xuwangzhimian','diamond',4));
							lib.inpile.add('xuwangzhimian');
							break;
						}
						case 'shen_liubei':{
							game.players[i].equip(game.createCard2('longfenghemingjian','spade',2));
							lib.inpile.add('longfenghemingjian');
							list.push('cixiong');
							break;
						}
						case 'shen_lvmeng':{
							game.players[i].equip(game.createCard2('guofengyupao','diamond',3));
							lib.inpile.add('guofengyupao');
							break;
						}
						case 'shen_luxun':{
							game.players[i].equip(game.createCard2('qicaishenlu','diamond',3));
							lib.inpile.add('qicaishenlu');
							break;
						}
						case 'shen_ganning':case 'key_iwasawa':{
							game.players[i].equip(game.createCard2('jinwuluorigong','heart',5));
							lib.inpile.add('jinwuluorigong');
							list.push('qilin');
							break;
						}
						case 'ol_zhangliao':case 'key_noda':{
							game.players[i].equip(game.createCard2('xingtianpojunfu','diamond',5));
							lib.inpile.add('xingtianpojunfu');
							list.push('guanshi');
							break;
						}
						case 'shen_zhenji':{
							game.players[i].equip(game.createCard2('lingsheji','club',12));
							lib.inpile.add('lingsheji');
							break;
						}
						case 'shen_caopi':{
							game.players[i].equip(game.createCard2('shanrangzhaoshu','spade',13));
							lib.inpile.add('shanrangzhaoshu');
							break;
						}
						case 'key_kagari':{
							game.players[i].equip(game.createCard2('goujiangdesidai','heart',1));
							lib.inpile.add('goujiangdesidai');
							break;
						}
						case 'key_shiki':{
							game.players[i].equip(game.createCard2('niaobaidaowenha','diamond',13));
							lib.inpile.add('niaobaidaowenha');
							break;
						}
						case 'db_key_hina':{
							game.players[i].equip(game.createCard2('shenzhixiunvfu','spade',13));
							lib.inpile.add('shenzhixiunvfu');
							break;
						}
					}
				}
				lib.inpile.remove('wuzhong');
				lib.inpile.remove('jiedao');
				lib.inpile.add('sadouchengbing');
				lib.inpile.add('yihuajiemu');
				lib.inpile.add('gubuzifeng');
				for(var i=0;i<ui.cardPile.childElementCount;i++){
					var node=ui.cardPile.childNodes[i];
					if(node.name=='wuzhong'){
						node.init([node.suit,node.number,'sadouchengbing']);
					}
					else if(node.name=='jiedao'){
						node.init([node.suit,node.number,'yihuajiemu']);
					}
					else if(list.contains(node.name)){
						lib.inpile.remove(node.name);
						node.remove();
					}
				}
				var cards=[
					game.createCard2('gubuzifeng','club',5),
					game.createCard2('gubuzifeng','diamond',7)
				];
				while(cards.length>0){
					ui.cardPile.insertBefore(cards.shift(),ui.cardPile.childNodes[get.rand(0,ui.cardPile.childElementCount-1)]);
				}
				lib.inpile.sort(lib.sort.card);
			}
		};
	}
	
	// 神贾诩限制使用修改
	lib.characterFilter.le_shen_jiaxu=function(mode){
		if(lib.config.extensions && lib.config.extensions.contains('搬运自用') && lib.config['extension_搬运自用_enable']){
			var mapping=new Map([
				['2','two2Man'],
				['3','three3Man'],
				['4','four4Man'],
				['5','five5Man'],
				['6','six6Man'],
				['7','seven7Man'],
				['8','eight8Man'],
				['9','nine9Man'],
				['10','ten10Man'],
			]);
			var current=mapping.get(ui.arena.dataset.number);
			if(lib.config.byzy_shenfenchangkg != false && lib.config['extension_搬运自用_'+current] != '1') return false;
		}
		return mode=='identity'&&_status.mode!='purple'&&ui.arena.dataset.number<=10;
	};
	lib.translate.jxlianpo_faq = "关于本武将的使用";
	lib.translate.jxlianpo_faq_info = "<br>本武将仅在正常的身份模式且不超过10人场使用（即按照线下面杀的规则），其他例如1主7反这些非常规的身份模式不能使用。<br><li>温馨提示1：线下面杀一套三国杀里面统一给10张身份牌，即主1、忠3、反4、内2<br><li>温馨提示2：若安装了搬运自用扩展，请关闭2-17人场开关或将2-17人场身份场配置设为正常的身份模式（第一个选项）后才能使用本武将";
	
	// 初版神孙权国战势力为魏是彩蛋修正
	if(lib.character.junk_sunquan){
		lib.character.junk_sunquan[4].remove('wei');
		lib.character.junk_sunquan[4].push('wu');
	}
	// 修改孙悟空等神话传说武将势力为神
	if(lib.character.sunwukong){
		lib.character.sunwukong[1] = 'shen';
	}
	if(lib.character.longwang){
		lib.character.longwang[1] = 'shen';
	}
	if(lib.character.taoshen){
		lib.character.taoshen[1] = 'shen';
	}
	if(lib.character.nezha){
		lib.character.nezha[1] = 'shen';
	}
	// 修复关闭武将包后不生效的bug
	if(lib.characterPack.collab){
		lib.characterPack.collab.sunwukong[1] = 'shen';
	}
	if(lib.characterPack.collab){
		lib.characterPack.collab.longwang[1] = 'shen';
	}
	if(lib.characterPack.collab){
		lib.characterPack.collab.taoshen[1] = 'shen';
	}
	if(lib.characterPack.collab){
		lib.characterPack.collab.nezha[1] = 'shen';
	}
	
	// 伤害音效配置，修改game.js的函数damage:function(){
	// 注：配置2-4暂未适配新本体代码
	lib.element.content.damage=function(){
		"step 0"
		event.forceDie=true;
		if(event.unreal){event.goto(4); return;}
		event.trigger('damageBegin1');
		"step 1"
		event.trigger('damageBegin2');
		"step 2"
		event.trigger('damageBegin3');
		"step 3"
		event.trigger('damageBegin4');
		"step 4"
		//moved changeHujia to changeHp
		if(lib.config['extension_十周年UI_jiubanshanghai']=='1'){
			// 配置1（新版）
			// 新本体代码
			if(player.hujia>0 && !player.hasSkillTag('nohujia')){
				var damageAudioInfo = lib.natureAudio.hujia_damage[event.nature];
				if(!damageAudioInfo || damageAudioInfo == 'normal'){
					damageAudioInfo = 'effect/hujia_damage'+(num>1?'2':'')+'.mp3';
				}else if(damageAudioInfo == 'default'){
					damageAudioInfo = 'effect/hujia_damage_'+event.nature+(num>1?'2':'')+'.mp3';
				}else{
					damageAudioInfo = damageAudioInfo[num >1 ?2:1];
				}
				game.broadcastAll(function(damageAudioInfo){
					if(lib.config.background_audio) game.playAudio(damageAudioInfo);
				},damageAudioInfo);
			}else{
				var damageAudioInfo = lib.natureAudio.damage[event.nature];
				if(!damageAudioInfo || damageAudioInfo == 'normal'){
					damageAudioInfo = 'effect/damage'+(num>1?'2':'')+'.mp3';
				}else if(damageAudioInfo == 'default'){
					damageAudioInfo = 'effect/damage_'+event.nature+(num>1?'2':'')+'.mp3';
				}else{
					damageAudioInfo = damageAudioInfo[num >1 ?2:1];
				}
				game.broadcastAll(function(damageAudioInfo){
					if(lib.config.background_audio) game.playAudio(damageAudioInfo);
				},damageAudioInfo);
			}
			// 旧本体代码
			/*
			if(['fire','thunder','ice'].contains(event.nature)){
				if(player.hujia>0&&!player.hasSkillTag('nohujia')&&event.nature!='ice'){
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('effect','hujia_damage_'+event.nature+(num>1?'2':''));
					},num);
				}
				else{
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('effect','damage_'+event.nature+(num>1?'2':''));
					},num);
				}
			}
			else{
				if(player.hujia>0&&!player.hasSkillTag('nohujia')){
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('effect','hujia_damage'+(num>1?'2':''));
					},num);
				}
				else{
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('effect','damage'+(num>1?'2':''));
					},num);
				}
			}
			*/
		}else if(lib.config['extension_十周年UI_jiubanshanghai']=='2'){
			// 配置2（旧版）
			if(lib.config.background_audio){
				game.playAudio('..', 'extension', '十周年UI/audio/effect','old_damage'+(num>1?'2':''));
			}
			game.broadcast(function(num){
				if(lib.config.background_audio){
					game.playAudio('..', 'extension', '十周年UI/audio/effect','old_damage'+(num>1?'2':''));
				}
			},num);
		}else if(lib.config['extension_十周年UI_jiubanshanghai']=='3'){
			// 配置3
			if(['fire','thunder','ice'].contains(event.nature)){
				if(player.hujia>0&&!player.hasSkillTag('nohujia')&&event.nature!='ice'){
					if(lib.config.background_audio){
						game.playAudio('..', 'extension', '十周年UI/audio/effect','old_damage'+(num>1?'2':''));
					}
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('..', 'extension', '十周年UI/audio/effect','damage'+(num>1?'2':''));
					},num);
				}
				else{
					game.broadcastAll(function(num){
						if(lib.config.background_audio) game.playAudio('effect','damage_'+event.nature+(num>1?'2':''));
					},num);
				}
			}
			else{
				if(lib.config.background_audio){
					game.playAudio('..', 'extension', '十周年UI/audio/effect','old_damage'+(num>1?'2':''));
				}
				game.broadcastAll(function(num){
					if(lib.config.background_audio) game.playAudio('..', 'extension', '十周年UI/audio/effect','damage'+(num>1?'2':''));
				},num);
			}
		}else{
			// 配置4
			if(['fire','thunder','ice'].contains(event.nature)){
				game.broadcastAll(function(num){
					if(lib.config.background_audio) game.playAudio('effect','damage_'+event.nature+(num>1?'2':''));
				},num);
			}
			else{
				if(lib.config.background_audio){
					game.playAudio('..', 'extension', '十周年UI/audio/effect','old_damage'+(num>1?'2':''));
				}
				game.broadcastAll(function(num){
					if(lib.config.background_audio) game.playAudio('..', 'extension', '十周年UI/audio/effect','damage'+(num>1?'2':''));
				},num);
			}
		}
		var str=event.unreal?'视为受到了':'受到了';
		if(source) str+='来自<span class="bluetext">'+(source==player?'自己':get.translation(source))+'</span>的';
		str+=get.cnNumber(num)+'点';
		if(event.nature) str+=get.translation(event.nature)+'属性';
		str+='伤害';
		game.log(player,str);
		if(player.stat[player.stat.length-1].damaged==undefined){
			player.stat[player.stat.length-1].damaged=num;
		}
		else{
			player.stat[player.stat.length-1].damaged+=num;
		}
		if(source){
			source.getHistory('sourceDamage').push(event);
			if(source.stat[source.stat.length-1].damage==undefined){
				source.stat[source.stat.length-1].damage=num;
			}
			else{
				source.stat[source.stat.length-1].damage+=num;
			}
		}
		player.getHistory('damage').push(event);
		if(!event.unreal){
			if(event.notrigger){
				player.changeHp(-num,false)._triggered=null;
			}
			else{
				player.changeHp(-num,false);
			}
		}
		if(event.animate!==false){
			player.$damage(source);
			var natures=(event.nature||'').split(lib.natureSeparator);
			game.broadcastAll(function(natures,player){
				if(lib.config.animation&&!lib.config.low_performance){
					if(natures.includes('fire')){
						player.$fire();
					}
					if(natures.includes('thunder')){
						player.$thunder();
					}
				}
			},natures,player);
			// var numx=player.hasSkillTag('nohujia')?num:Math.max(0,num-player.hujia);
			var numx=player.hasSkillTag('nohujia')||lib.config['extension_十周年UI_hujiashixiao']?num:Math.max(0,num-player.hujia);
			player.$damagepop(-numx,natures[0]);
		}
		if(event.unreal) event.goto(6)
		if(!event.notrigger){
			if(num==0){
				event.trigger('damageZero');
				event._triggered=null;
			}
			else{
				event.trigger('damage');
			}
		}
		"step 5"
		if(player.hp<=0&&player.isAlive()&&!event.nodying){
			game.delayx();
			event._dyinged=true;
			player.dying(event);
		}
		if(source&&lib.config.border_style=='auto'){
			var dnum=0;
			for(var j=0;j<source.stat.length;j++){
				if(source.stat[j].damage!=undefined) dnum+=source.stat[j].damage;
			}
			if(dnum>=2){
				if(lib.config.autoborder_start=='silver'){
					dnum+=4;
				}
				else if(lib.config.autoborder_start=='gold'){
					dnum+=8;
				}
			}
			if(lib.config.autoborder_count=='damage'){
				source.node.framebg.dataset.decoration='';
				if(dnum>=10){
					source.node.framebg.dataset.auto='gold';
					if(dnum>=12) source.node.framebg.dataset.decoration='gold';
				}
				else if(dnum>=6){
					source.node.framebg.dataset.auto='silver';
					if(dnum>=8) source.node.framebg.dataset.decoration='silver';
				}
				else if(dnum>=2){
					source.node.framebg.dataset.auto='bronze';
					if(dnum>=4) source.node.framebg.dataset.decoration='bronze';
				}
				if(dnum>=2){
					source.classList.add('topcount');
				}
			}
			else if(lib.config.autoborder_count=='mix'){
				source.node.framebg.dataset.decoration='';
				switch(source.node.framebg.dataset.auto){
					case 'bronze':if(dnum>=4) source.node.framebg.dataset.decoration='bronze';break;
					case 'silver':if(dnum>=8) source.node.framebg.dataset.decoration='silver';break;
					case 'gold':if(dnum>=12) source.node.framebg.dataset.decoration='gold';break;
				}
			}
		}
		"step 6"
		if(!event.notrigger) event.trigger('damageSource');
	};
	
	// 护甲上限修改
	// 修改game.js的函数changeHujia(num,type,limit){
	lib.element.player.changeHujia=function(num,type,limit){
		var next=game.createEvent('changeHujia');
		if(typeof num!='number'){
			num=1;
		}
		var hujiashangxian = lib.config['extension_十周年UI_hujiashangxian'];
		if(limit===true) limit=Number(hujiashangxian);
		if(typeof limit=='number'&&this.hujia+num>parseInt(limit)){
			num=Math.max(0, parseInt(limit)-this.hujia);
		}
		if(typeof type!='string'){
			if(num>0) type='gain';
			else if(num<0) type='lose';
			else type='null';
		}
		next.num=num;
		next.player=this;
		next.type=type;
		next.setContent('changeHujia');
		return next;
	};
	
	// 旧版配音系统
	if(lib.config['extension_十周年UI_jiubanpeiyin']){
		// 修改game.js的卡牌配音播放函数，playCardAudio:function(card,sex){
		game.playCardAudio=function(card,sex){
			// 新版
			/*
			if(typeof card === 'string'){
				card = {name:card};
			}
			if(get.itemtype(sex) === 'player'){
				sex = (sex.sex == 'female'?'female':'male');
			}else if(typeof sex == 'string'){
				sex = (sex == 'female'?'female':'male');
			}
			if(!lib.config.background_audio||get.type(card)=='equip'&&!lib.config.equip_audio) return;
			var nature=get.natureList(card)[0];
			if(lib.natureAudio[card.name]){
				let useAudio = lib.natureAudio[card.name][nature];
				if(useAudio === 'default'){
					game.playAudio('card',sex,`${card.name}_${nature}`);
					return;
				}else if(useAudio && useAudio[sex]){
					game.playAudio(useAudio[sex]);
					return;
				}
			}
			const audio=lib.card[card.name].audio;
			if(typeof audio=='string'){
				const audioInfo=audio.split(':');
				if(audio.startsWith('db:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,audioInfo[2],`${card.name}_${sex}.${audioInfo[3]||'mp3'}`);
				else if(audio.startsWith('ext:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,`${card.name}_${sex}.${audioInfo[2]||'mp3'}`);
				else game.playAudio('card',sex,`${audioInfo[0]}.${audioInfo[1]||'mp3'}`);
			}
			else game.playAudio('card',sex,card.name);
			*/
			// 旧版
			if(lib.config.background_audio){
				if(typeof card === 'string'){
					card = {name:card};
				}
				if(get.itemtype(sex) === 'player'){
					sex = (sex.sex == 'female'?'female':'male');
				}else if(typeof sex == 'string'){
					sex = (sex == 'female'?'female':'male');
				}
				var audioinfo=lib.card[card.name].audio;
				if(get.type(card)=='equip'&&!lib.config.equip_audio) return;
				if(card.name=='sha'&&(card.nature=='fire'||card.nature=='thunder'||card.nature=='ice'||card.nature=='stab')){
					game.playAudio('card',sex,card.name+'_'+card.nature);
				}
				else{
					if(typeof audioinfo=='string'){
						if(audioinfo.indexOf('ext:')==0) game.playAudio('..','extension',audioinfo.slice(4),card.name+'_'+sex);
						else game.playAudio('card',sex,audioinfo);
					}
					else{
						game.playAudio('card',sex,card.name);
					}
				}
			}
			// 原版
			// 修改game.js的卡牌使用函数，useCard:function(){
			/*
			if(cardaudio) game.broadcastAll((player,card)=>{
				if(!lib.config.background_audio||get.type(card)=='equip'&&!lib.config.equip_audio) return;
				const sex=player.sex=='female'?'female':'male';
				var nature=get.natureList(card)[0];
				if(card.name=='sha'&&['fire','thunder','ice','stab'].includes(nature)){
					game.playAudio('card',sex,`${card.name}_${nature}`);
					return;
				}
				const audio=lib.card[card.name].audio;
				if(typeof audio=='string'){
					const audioInfo=audio.split(':');
					if(audio.startsWith('db:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,audioInfo[2],`${card.name}_${sex}.${audioInfo[3]||'mp3'}`);
					else if(audio.startsWith('ext:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,`${card.name}_${sex}.${audioInfo[2]||'mp3'}`);
					else game.playAudio('card',sex,`${audioInfo[0]}.${audioInfo[1]||'mp3'}`);
				}
				else game.playAudio('card',sex,card.name);
			},player,card);
			*/
			// 有bug，先用旧版
			/*
			if(cardaudio){
				game.broadcastAll(function(player,card){
					if(lib.config.background_audio){
						if(get.type(card)=='equip'&&!lib.config.equip_audio) return;
						var sex=player.sex=='female'?'female':'male';
						var audioinfo=lib.card[card.name].audio;
						// if(audioinfo||true){
							if(card.name=='sha'&&(card.nature=='fire'||card.nature=='thunder'||card.nature=='ice'||card.nature=='stab')){
								game.playAudio('card',sex,card.name+'_'+card.nature);
							}
							else{
								if(typeof audioinfo=='string'){
									if(audioinfo.indexOf('ext:')==0) game.playAudio('..','extension',audioinfo.slice(4),card.name+'_'+sex);
									else game.playAudio('card',sex,audioinfo);
								}
								else{
									game.playAudio('card',sex,card.name);
								}
							}
						// }
						// else if(get.type(card)!='equip'){
						// 	game.playAudio('card/default');
						// }
					}
				},player,card);
			}
			*/
			// 修改game.js的卡牌打出函数，respond:function(){
			/*
			if(cardaudio&&event.getParent(3).name=='useCard') game.broadcastAll((player,card)=>{
				if(!lib.config.background_audio) return;
				const sex=player.sex=='female'?'female':'male',audio=lib.card[card.name].audio;
				if(typeof audio=='string'){
					const audioInfo=audio.split(':');
					if(audio.startsWith('db:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,audioInfo[2],`${card.name}_${sex}.${audioInfo[3]||'mp3'}`);
					else if(audio.startsWith('ext:')) game.playAudio(`${audioInfo[0]}:${audioInfo[1]}`,`${card.name}_${sex}.${audioInfo[2]||'mp3'}`);
					else game.playAudio('card',sex,`${audioInfo[0]}.${audioInfo[1]||'mp3'}`);
				}
				else game.playAudio('card',sex,card.name);
			},player,card);
			*/
			// 有bug，先用旧版
			/*
			if(cardaudio&&event.getParent(3).name=='useCard'){
				game.broadcastAll(function(player,card){
					if(lib.config.background_audio){
						var sex=player.sex=='female'?'female':'male';
						var audioinfo=lib.card[card.name].audio;
						// if(audioinfo||true){
							if(typeof audioinfo=='string'&&audioinfo.indexOf('ext:')==0){
								game.playAudio('..','extension',audioinfo.slice(4),card.name+'_'+sex);
							}
							else{
								game.playAudio('card',sex,card.name);
							}
						// }
						// else{
						// 	game.playAudio('card/default');
						// }
					}
				},player,card);
			}
			*/
		};
		
		// 修改game.js的播放函数，playAudio:function(){
		game.playAudio=function(){
			if(_status.video&&arguments[1]!='video') return;
			var str='';
			var onerror=null;
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i]==='string'||typeof arguments[i]=='number'){
					str+='/'+arguments[i];
				}
				else if(typeof arguments[i]=='function'){
					onerror=arguments[i]
				}
				if(_status.video) break;
			}
			if(!lib.config.repeat_audio&&_status.skillaudio.contains(str)) return;
			_status.skillaudio.add(str);
			game.addVideo('playAudio',null,str);
			setTimeout(function(){
				_status.skillaudio.remove(str);
			},1000);
			var audio=document.createElement('audio');
			audio.autoplay=true;
			audio.volume=lib.config.volumn_audio/8;
			if(str.split('/').pop().split('.').length>1){
				audio.src=lib.assetURL+'audio'+str;
			}
			else{
				audio.src=lib.assetURL+'audio'+str+'.mp3';
			}
			audio.addEventListener('ended',function(){
				this.remove();
			});
			audio.onerror=function(e){
				if(this._changed){
					this.remove();
					if(onerror){
						onerror(e);
					}
				}
				else{
					this.src=lib.assetURL+'audio'+str+'.ogg';
					this._changed=true;
				}
			};
			//Some browsers do not support "autoplay", so "oncanplay" listening has been added
			audio.oncanplay=function(){
				Promise.resolve(this.play()).catch(()=>void 0);
			};
			ui.window.appendChild(audio);
			return audio;
		};
		
		// 修改game.js的播放函数，trySkillAudio:function(skill,player,directaudio,nobroadcast/*,index*/){
		// 旧版trySkillAudio函数已知bug：audioname2不适配国战武将
		game.trySkillAudio=function(skill,player,directaudio){
			game.broadcast(game.trySkillAudio,skill,player,directaudio);
			var info=get.info(skill);
			if(!info) return;
			if(info.direct&&!directaudio) return;
			if(!lib.config.background_speak) return;
			if(lib.skill.global.contains(skill)&&!lib.skill[skill].forceaudio) return;
			var audioname=skill;
			var audioinfo=info.audio;
			var fixednum;
			if(info.audioname2&&info.audioname2[player.name]){
				audioname=info.audioname2[player.name];
				audioinfo=lib.skill[audioname].audio;
			}
			var history=[];
			while(true){//可以嵌套引用了
				if(history.contains(audioname)) break;
				history.push(audioname);
				if(typeof audioinfo=='string'&&lib.skill[audioinfo]){
					audioname=audioinfo;
					audioinfo=lib.skill[audioname].audio;
					continue;
				}
				if(Array.isArray(audioinfo)){
					audioname=audioinfo[0];
					if(!fixednum) fixednum=audioinfo[1];//数组会取第一个指定语音数
					audioinfo=lib.skill[audioname].audio;
					continue;
				}
				break;
			}
			if(Array.isArray(info.audioname)&&player){
				if(info.audioname.contains(player.name)) audioname+='_'+player.name;
				else if(info.audioname.contains(player.name1)) audioname+='_'+player.name1;
				else if(info.audioname.contains(player.name2)) audioname+='_'+player.name2;
			}
			if(typeof audioinfo=='string'){
				if(audioinfo.indexOf('ext:')!=0) return;
				audioinfo=audioinfo.split(':');
				if(audioinfo.length!=3) return;
				if(audioinfo[2]=='true') game.playAudio('..','extension',audioinfo[1],audioname);
				else{
					audioinfo[2]=parseInt(audioinfo[2]);
					if(fixednum) audioinfo[2]=Math.min(audioinfo[2],fixednum);
					if(!audioinfo[2]) return;
					game.playAudio('..','extension',audioinfo[1],audioname+Math.ceil(audioinfo[2]*Math.random()));
				}
			}
			else if(typeof audioinfo=='number'){
				if(fixednum) audioinfo=Math.min(audioinfo, fixednum);
				game.playAudio('skill',audioname+Math.ceil(audioinfo*Math.random()));
			}
			else if(audioinfo) game.playAudio('skill',audioname);
			else if(info.audio!==false) game.playSkillAudio(audioname);
		};
	}
	
	// 标记修改（可能与其他同样魔改本体武将技能的扩展存在兼容问题）
	if(lib.config['extension_十周年UI_biaojixiugai']){
		// 神姜维九伐标记改文字
		// 法一
		if(lib.skill.jiufa != undefined){
			lib.skill.jiufa.marktext = "九伐";
		}
		// 法二
		// delete lib.skill.jiufa.marktext;
		// 手杀马日磾六经标记修改
		if(lib.skill.chengye != undefined){
			lib.skill.chengye.marktext = "六经";
		}
		// 神吕布暴怒标记修改
		if(lib.skill.baonu != undefined){
			lib.skill.baonu.marktext = "暴怒";
		}
		// 神貂蝉魅惑标记修改
		if(lib.skill.huoxin != undefined){
			lib.skill.huoxin.marktext = "魅惑";
		}
		// 陆凯卜筮标记修改
		if(lib.skill.lkbushi != undefined){
			lib.skill.lkbushi.marktext = "卜筮";
		}
		// 手杀杜预武库标记修改
		if(lib.skill.spwuku != undefined){
			lib.skill.spwuku.marktext = "武库";
		}
		// K系列杜预武库标记修改
		if(lib.skill.pkwuku != undefined){
			lib.skill.pkwuku.marktext = "武库";
		}
		// OL杜预三陈标记修改
		if(lib.skill.sanchen != undefined){
			lib.skill.sanchen.marktext = "三陈";
		}
		// 戏志才先辅标记修改
		if(lib.skill.xianfu_mark != undefined){
			lib.skill.xianfu_mark.marktext = "先辅";
		}
		// 滕胤陈见标记修改
		if(lib.skill.chenjian != undefined){
			lib.skill.chenjian.marktext = "陈见";
		}
		// 刘虞自牧标记修改
		if(lib.skill.dczimu != undefined){
			lib.skill.dczimu.marktext = "自牧";
		}
		// 郝昭镇骨标记修改
		if(lib.skill.drlt_zhenggu_mark != undefined){
			lib.skill.drlt_zhenggu_mark.marktext = "镇骨";
		}
		// OL董昭造王标记修改
		if(lib.skill.olzaowang2 != undefined){
			lib.skill.olzaowang2.marktext = "造王";
		}
		// 陈琳笔伐标记修改
		if(lib.skill.bifa2 != undefined){
			lib.skill.bifa2.marktext = "笔伐";
		}
		// 张昌蒲严教标记修改
		if(lib.skill.yanjiao2 != undefined){
			lib.skill.yanjiao2.marktext = "严教";
		}
		// 程昱伏兵标记修改
		if(lib.skill.shefu != undefined){
			lib.skill.shefu.marktext = "伏兵";
		}
		// 祖茂引兵标记修改
		if(lib.skill.yinbing != undefined){
			lib.skill.yinbing.marktext = "引兵";
		}
		// 界刘禅思蜀标记修改
		if(lib.skill.sishu2 != undefined){
			lib.skill.sishu2.marktext = "思蜀";
		}
		// 旧皇甫嵩奋钺标记修改
		if(lib.skill.fenyue2 != undefined){
			lib.skill.fenyue2.marktext = "奋钺";
		}
		// 手杀荀谌危迫标记修改
		if(lib.skill.mjweipo_effect != undefined){
			lib.skill.mjweipo_effect.marktext = "危迫";
		}
		// ☆SP夏侯惇愤勇标记修改
		if(lib.skill.fenyong2 != undefined){
			lib.skill.fenyong2.marktext = "愤勇";
		}
		// 夏侯令女浮萍标记修改
		if(lib.skill.fuping != undefined){
			lib.skill.fuping.marktext = "浮萍";
		}
		// 族荀粲分钗标记修改
		if(lib.skill.clanfenchai != undefined){
			lib.skill.clanfenchai.marktext = "分钗";
		}
		// 族荀淑神君标记修改
		if(lib.skill.clanshenjun != undefined){
			lib.skill.clanshenjun.marktext = "神君";
		}
		// 谋法正眩惑标记修改
		if(lib.skill.sbxuanhuo != undefined){
			lib.skill.sbxuanhuo.marktext = "眩惑";
		}
		// 张世平行贾标记修改
		if(lib.skill.olxinggu != undefined){
			lib.skill.olxinggu.marktext = "行贾";
		}
		// 谋曹操治世标记修改
		if(lib.skill.sbjianxiong != undefined){
			lib.skill.sbjianxiong.marktext = "治世";
		}
		// 经典曹操奸雄标记修改
		if(lib.skill.dcjianxiong != undefined){
			lib.skill.dcjianxiong.marktext = "奸雄";
		}
		// 谋刘备仁望标记修改
		if(lib.skill.sbrende != undefined){
			lib.skill.sbrende.marktext = "仁望";
		}
		// 马承骋烈标记修改
		if(lib.skill.olchenglie != undefined){
			lib.skill.olchenglie.marktext = "骋烈";
		}
		// 张楚信众标记修改
		if(lib.skill.dcjizhong != undefined){
			lib.skill.dcjizhong.marktext = "信众";
		}
		// 岑昏极奢标记修改
		if(lib.skill.jishe2 != undefined){
			lib.skill.jishe2.marktext = "极奢";
		}
		// 谋张角道兵标记修改
		if(lib.skill.sbguidao != undefined){
			lib.skill.sbguidao.marktext = "道兵";
		}
		// 起许劭访客标记修改
		if(lib.skill.sbyingmen != undefined){
			lib.skill.sbyingmen.marktext = "访客";
		}
		// 罗宪带砺标记修改
		if(lib.skill.oldaili != undefined){
			lib.skill.oldaili.marktext = "带砺";
		}
		// 神张辽夺锐标记修改
		if(lib.skill.drlt_duorui1 != undefined){
			lib.skill.drlt_duorui1.marktext = "夺锐";
		}
		// SP公孙瓒突骑标记修改
		if(lib.skill.sptuji2 != undefined){
			lib.skill.sptuji2.marktext = "突骑";
		}
		// ☆曹植流殇标记修改
		if(lib.skill.psliushang != undefined){
			lib.skill.psliushang.marktext = "流殇";
		}
		// 节钺于禁节标记修改
		if(lib.skill.jieyue2 != undefined){
			lib.skill.jieyue2.marktext = "节";
		}
		// 大乔小乔舞标记修改
		if(lib.skill.new_xingwu != undefined){
			lib.skill.new_xingwu.marktext = "舞";
		}
		// 张虎乐綝爵标记修改
		if(lib.skill.xijue != undefined){
			lib.skill.xijue.marktext = "爵";
		}
		// 刘璋生标记修改
		if(lib.skill.jutu != undefined){
			lib.skill.jutu.marktext = "生";
		}
		// 马元义兵标记修改
		if(lib.skill.jibing != undefined){
			lib.skill.jibing.marktext = "兵";
		}
		// 费祎喻标记修改
		if(lib.skill.fyjianyux != undefined){
			lib.skill.fyjianyux.marktext = "喻";
		}
		// 蹋顿乱标记修改
		if(lib.skill.reluanzhan != undefined){
			lib.skill.reluanzhan.marktext = "乱";
		}
		// 卞喜钝标记修改
		if(lib.skill.dunxi != undefined){
			lib.skill.dunxi.marktext = "钝";
		}
		// 傅佥绝标记修改
		if(lib.skill.jueyong != undefined){
			lib.skill.jueyong.marktext = "绝";
		}
		// 李采薇异标记修改
		if(lib.skill.yijiao != undefined){
			lib.skill.yijiao.marktext = "异";
		}
		// 周妃箜标记修改
		if(lib.skill.olkongsheng != undefined){
			lib.skill.olkongsheng.marktext = "箜";
		}
		// 向宠固标记修改
		if(lib.skill.guying != undefined){
			lib.skill.guying.marktext = "固";
		}
		// 司马昭望标记修改
		if(lib.skill.xinfu_zhaoxin != undefined){
			lib.skill.xinfu_zhaoxin.marktext = "望";
		}
		// 曹性流标记修改
		if(lib.skill.cxliushi2 != undefined){
			lib.skill.cxliushi2.marktext = "流";
		}
		// 郑玄经标记修改
		if(lib.skill.zhengjing2 != undefined){
			lib.skill.zhengjing2.marktext = "经";
		}
		// 穆顺劲标记修改
		if(lib.skill.dcjinjian != undefined){
			lib.skill.dcjinjian.marktext = "劲";
		}
		// 手杀苏飞诤标记修改
		if(lib.skill.zhengjian_mark != undefined){
			lib.skill.zhengjian_mark.marktext = "诤";
		}
		// 李丰粮标记修改
		if(lib.skill.tunchu != undefined){
			lib.skill.tunchu.marktext = "粮";
		}
		// 旱魃焚标记修改
		if(lib.skill.fentian != undefined){
			lib.skill.fentian.marktext = "焚";
		}
		// 手杀孙翊厉标记修改
		if(lib.skill.zaoli != undefined){
			lib.skill.zaoli.marktext = "厉";
		}
		// 谋陈宫策（彩蛋）标记修改
		if(lib.skill.sbmingce != undefined){
			lib.skill.sbmingce.marktext = "策";
		}
		// 张媱怨标记修改、其他角色怨语标记修改
		if(lib.skill.yuanyu != undefined){
			lib.skill.yuanyu.marktext = "怨";
			lib.skill.yuanyu.subSkill.mark.mark = true;
		}
		// 赵襄、TW赵襄梅影标记修改
		if(lib.skill.fanghun != undefined){
			lib.skill.fanghun.marktext = "梅影";
		}
		// 徐荣暴戾、凶镬标记修改
		if(lib.skill.xionghuo != undefined){
			lib.skill.xionghuo.marktext = "暴戾";
		}
		if(lib.skill.xionghuo_disable != undefined){
			lib.skill.xionghuo_disable.marktext = "凶镬";
		}
		if(lib.skill.xionghuo_low != undefined){
			lib.skill.xionghuo_low.marktext = "凶镬";
		}
		// 王朗、OL王朗饶舌标记修改
		if(lib.skill.regushe != undefined){
			lib.skill.regushe.marktext = "饶舌";
		}
		if(lib.skill.gushe != undefined){
			lib.skill.gushe.marktext = "饶舌";
		}
		// 手杀杨仪、TW杨仪共损标记修改
		if(lib.skill.gongsun_shadow != undefined){
			lib.skill.gongsun_shadow.marktext = "共损";
		}
		if(lib.skill.twgongsun_shadow != undefined){
			lib.skill.twgongsun_shadow.marktext = "共损";
		}
		// 神诸葛亮狂风、大雾标记修改
		if(lib.skill.kuangfeng2 != undefined){
			lib.skill.kuangfeng2.marktext = "狂风";
		}
		if(lib.skill.dawu2 != undefined){
			lib.skill.dawu2.marktext = "大雾";
		}
		// 夏侯杰裂、壮胆标记修改
		if(lib.skill.liedan != undefined){
			lib.skill.liedan.marktext = "裂";
		}
		if(lib.skill.zhuangdan_mark != undefined){
			lib.skill.zhuangdan_mark.marktext = "壮胆";
		}
		// 王粲七哀、登楼标记修改
		if(lib.skill.xinfu_qiai != undefined){
			lib.skill.xinfu_qiai.marktext = "七哀";
		}
		if(lib.skill.xinfu_denglou != undefined){
			lib.skill.xinfu_denglou.marktext = "登楼";
		}
		// 蒋济急筹、机论标记修改
		if(lib.skill.twjichou != undefined){
			lib.skill.twjichou.marktext = "急筹";
		}
		if(lib.skill.twjilun != undefined){
			lib.skill.twjilun.marktext = "机论";
		}
		// 界张飞咆标记修改
		if(lib.skill.olpaoxiao2 != undefined){
			lib.skill.olpaoxiao2.marktext = "咆";
		}
		// ☆SP张飞大喝标记修改
		if(lib.skill.dahe2 != undefined){
			lib.skill.dahe2.marktext = "大喝";
		}
		// 袁谭袁尚内伐标记修改
		if(lib.skill.neifa_basic != undefined){
			lib.skill.neifa_basic.marktext = "内伐";
		}
		if(lib.skill.neifa_nobasic != undefined){
			lib.skill.neifa_nobasic.marktext = "内伐";
		}
		// 袁谭袁尚袁熙内伐标记修改
		if(lib.skill.dcneifa_basic != undefined){
			lib.skill.dcneifa_basic.marktext = "内伐";
		}
		if(lib.skill.dcneifa_trick != undefined){
			lib.skill.dcneifa_trick.marktext = "内伐";
		}
		// 陆抗决堰标记修改
		if(lib.skill.drlt_jueyan1 != undefined){
			lib.skill.drlt_jueyan1.marktext = "决堰";
		}
		if(lib.skill.drlt_jueyan2 != undefined){
			lib.skill.drlt_jueyan2.marktext = "决堰";
		}
		if(lib.skill.drlt_jueyan3 != undefined){
			lib.skill.drlt_jueyan3.marktext = "决堰";
		}
		// 周群签标记修改
		if(lib.skill.tiansuan2_0 != undefined){
			lib.skill.tiansuan2_0.marktext = "签";
		}
		if(lib.skill.tiansuan2_1 != undefined){
			lib.skill.tiansuan2_1.marktext = "签";
		}
		if(lib.skill.tiansuan2_2 != undefined){
			lib.skill.tiansuan2_2.marktext = "签";
		}
		if(lib.skill.tiansuan2_3 != undefined){
			lib.skill.tiansuan2_3.marktext = "签";
		}
		if(lib.skill.tiansuan2_4 != undefined){
			lib.skill.tiansuan2_4.marktext = "签";
		}
		// 程普、界程普、手杀程普、TW程普醇标记修改
		if(lib.skill.chunlao != undefined){
			lib.skill.chunlao.marktext = "醇";
		}
		if(lib.skill.rechunlao != undefined){
			lib.skill.rechunlao.marktext = "醇";
		}
		if(lib.skill.twchunlao != undefined){
			lib.skill.twchunlao.marktext = "醇";
		}
		// 许贡、手杀许贡表、业仇标记修改
		if(lib.skill.biaozhao != undefined){
			lib.skill.biaozhao.marktext = "表";
		}
		if(lib.skill.rebiaozhao != undefined){
			lib.skill.rebiaozhao.marktext = "表";
		}
		if(lib.skill.yechou2 != undefined){
			lib.skill.yechou2.marktext = "业仇";
		}
		// OL张宝、张宝咒标记修改
		if(lib.skill.rezhoufu2 != undefined){
			lib.skill.rezhoufu2.marktext = "咒";
		}
		if(lib.skill.xinzhoufu2 != undefined){
			lib.skill.xinzhoufu2.marktext = "咒";
		}
		// 界曹真司标记修改
		if(lib.skill.residi != undefined){
			lib.skill.residi.marktext = "司";
		}
		if(lib.skill.residi2 != undefined){
			lib.skill.residi2.marktext = "司";
		}
		// 神司马懿忍标记修改
		if(lib.skill.renjie != undefined){
			// lib.skill.renjie.mark = true;
			lib.skill.renjie.marktext = "忍";
		}
		// 兀突骨燃标记修改
		if(lib.skill.ranshang != undefined){
			// lib.skill.ranshang.mark = true;
			lib.skill.ranshang.marktext = "燃";
		}
		// 丁原义子标记修改
		if(lib.skill.panshi != undefined){
			lib.skill.panshi.marktext = "义子";
			lib.skill.panshi.intro.content = "我是义子";
		}
		// 谋华雄扬威标记修改
		if(lib.skill.sbyangwei != undefined){
			lib.skill.sbyangwei.subSkill.effect.marktext = "扬威";
		}
		// 起孙坚平讨标记修改
		if(lib.skill.jsrgpingtao != undefined){
			lib.skill.jsrgpingtao.subSkill.sha.marktext = "平讨";
		}
		// 蹇硕令戮标记修改
		if(lib.skill.twlinglu != undefined){
			lib.skill.twlinglu.subSkill.order.marktext = "令戮";
		}
		// 孙茹撷翠标记修改
		if(lib.skill.xiecui != undefined){
			lib.skill.xiecui.subSkill.effect.marktext = "撷翠";
		}
		// 张曼成阻祸标记修改
		if(lib.skill.twzuhuo != undefined){
			lib.skill.twzuhuo.subSkill.effect.marktext = "阻祸";
		}
		// 手杀吴懿奔袭标记修改
		if(lib.skill.sbbenxi != undefined){
			lib.skill.sbbenxi.subSkill.effect2.marktext = "奔袭";
		}
		// 族韩融连和标记修改
		if(lib.skill.clanlianhe != undefined){
			lib.skill.clanlianhe.subSkill.effect.marktext = "连和";
		}
		// TW卞夫人约俭标记修改
		if(lib.skill.twyuejian != undefined){
			lib.skill.twyuejian.subSkill.effect.marktext = "约俭";
		}
		// 界黄忠没矢标记修改
		if(lib.skill.remoshi != undefined){
			lib.skill.remoshi.subSkill.stuck.marktext = "没矢";
		}
		// 谋姜维北伐标记修改
		if(lib.skill.sbzhiji != undefined){
			lib.skill.sbzhiji.subSkill.beifa.marktext = "北伐";
		}
		// 谋吕蒙夺荆标记修改
		if(lib.skill.sbduojing != undefined){
			lib.skill.sbduojing.subSkill.add.marktext = "夺荆";
		}
		// 傅肜傅佥血卫标记修改
		if(lib.skill.dcxuewei != undefined){
			lib.skill.dcxuewei.subSkill.shelter.marktext = "血卫";
		}
		// 手杀朱治安国标记修改
		if(lib.skill.sbanguo != undefined){
			lib.skill.sbanguo.subSkill.mark.marktext = "安国";
		}
		// 牛辅熊扰标记修改
		if(lib.skill.xiongrao != undefined){
			lib.skill.xiongrao.subSkill.blocker.marktext = "熊扰";
		}
		// 蔡阳寻嫉标记修改
		if(lib.skill.dcxunji != undefined){
			lib.skill.dcxunji.subSkill.mark.marktext = "寻嫉";
		}
		// 经典孙权制衡标记修改
		if(lib.skill.dczhiheng != undefined){
			lib.skill.dczhiheng.subSkill.hit.marktext = "制衡";
		}
		// 周不疑十计标记修改
		if(lib.skill.dcshiji != undefined){
			lib.skill.dcshiji.subSkill.used.marktext = "十计";
		}
		// 郤正文灿标记修改
		if(lib.skill.dcwencan != undefined){
			lib.skill.dcwencan.subSkill.paoxiao.marktext = "文灿";
		}
		// 黄承彦解阵标记修改
		if(lib.skill.dcjiezhen != undefined){
			lib.skill.dcjiezhen.subSkill.blocker.marktext = "解阵";
		}
		// 神孙策平定标记修改
		if(lib.skill.yingba != undefined){
			lib.skill.yingba.subSkill.mark.marktext = "平定";
		}
		// TW蒋钦翔羽标记修改
		if(lib.skill.twxiangyu != undefined){
			lib.skill.twxiangyu.subSkill.range.marktext = "翔羽";
		}
		// 周宣寤寐标记修改
		if(lib.skill.dcwumei != undefined){
			lib.skill.dcwumei.subSkill.wake.marktext = "寤寐";
		}
		// TW傅肜血卫标记修改
		if(lib.skill.twxuewei != undefined){
			lib.skill.twxuewei.subSkill.block.marktext = "血卫";
		}
		// TW陈震察异标记修改
		if(lib.skill.twchayi != undefined){
			lib.skill.twchayi.subSkill.re.marktext = "察异";
		}
		// 夏侯紫萼血偿标记修改
		if(lib.skill.twxuechang != undefined){
			lib.skill.twxuechang.subSkill.add.marktext = "血偿";
		}
		// 谋大乔流离标记修改
		if(lib.skill.sbliuli != undefined){
			lib.skill.sbliuli.subSkill.dangxian.marktext = "流离";
		}
		// 龙王大雾标记修改
		if(lib.skill.dcsitian != undefined){
			lib.skill.dcsitian.subSkill.dawu.marktext = "大雾";
		}
		// 涛神怒涛标记修改
		if(lib.skill.dcnutao != undefined){
			lib.skill.dcnutao.subSkill.sha.marktext = "怒涛";
		}
		// 孙瑜劝守标记修改
		if(lib.skill.dcquanshou != undefined){
			lib.skill.dcquanshou.subSkill.sha.marktext = "劝守";
		}
		// 牵招势吓标记修改
		if(lib.skill.mbshihe != undefined){
			lib.skill.mbshihe.subSkill.prevent.marktext = "势吓";
		}
		// 朱建平相面标记修改
		if(lib.skill.olddcxiangmian != undefined){
			lib.skill.olddcxiangmian.subSkill.countdown.marktext = "相面";
		}
		// 小酒媱丽标记修改
		if(lib.skill.vtbyaoli != undefined){
			lib.skill.vtbyaoli.subSkill.effect.marktext = "媱丽";
		}
		// 公孙范收绶标记修改
		if(lib.skill.twshoushou != undefined){
			lib.skill.twshoushou.subSkill.distance.marktext = "收绶";
		}
		// 吕虔虏标记修改
		if(lib.skill.xinfu_weilu != undefined){
			lib.skill.xinfu_weilu.subSkill.effect.marktext = "虏";
		}
		// ☆周瑜杂音标记修改
		if(lib.skill.psshiyin != undefined){
			lib.skill.psshiyin.marktext = "杂音";
		}
		// 谋周瑜英姿标记修改
		if(lib.skill.sbyingzi != undefined){
			lib.skill.sbyingzi.subSkill.limit.marktext = "英姿";
		}
		// 司马徽龙印、凤印标记修改
		if(lib.skill.jianjie != undefined){
			lib.skill.jianjie.subSkill.huoji.marktext = "龙印";
			lib.skill.jianjie.subSkill.lianhuan.marktext = "凤印";
		}
		// 神曹丕储、行动标记修改
		if(lib.skill.chuyuan != undefined){
			lib.skill.chuyuan.marktext = "储";
		}
		if(lib.skill.caopi_xingdong != undefined){
			lib.skill.caopi_xingdong.subSkill.mark.marktext = "行动";
		}
		// 马岱、界马岱、TW马岱潜袭标记修改
		if(lib.skill.qianxi2 != undefined){
			lib.skill.qianxi2.marktext = "潜袭";
		}
		if(lib.skill.reqianxi != undefined){
			lib.skill.reqianxi.subSkill.effect.marktext = "潜袭";
		}
		lib.translate.twqianxi2_bg = "潜袭";
		lib.translate.twqianxi3_bg = "潜袭";
		// 嵇康绝响、手杀嵇康残韵标记修改
		if(lib.skill.juexiang != undefined){
			lib.skill.juexiang.subSkill.club.marktext = "绝响";
		}
		if(lib.skill.new_canyun != undefined){
			lib.skill.new_canyun.marktext = "残韵";
		}
		// TW神关羽梦魇标记修改
		if(lib.skill.twwuhun != undefined){
			lib.skill.twwuhun.marktext = "梦魇";
		}
		// 周群骤雨、烈暑、严霜、凝雾标记修改
		if(lib.skill.oltianhou != undefined){
			lib.skill.oltianhou.subSkill.spade.marktext = "骤雨";
			lib.skill.oltianhou.subSkill.heart.marktext = "烈暑";
			lib.skill.oltianhou.subSkill.club.marktext = "严霜";
			lib.skill.oltianhou.subSkill.diamond.marktext = "凝雾";
		}
		// OL羊祜怀远标记修改
		if(lib.skill.huaiyuan != undefined){
			lib.skill.huaiyuan.subSkill.effect0.marktext = "怀远";
			lib.skill.huaiyuan.subSkill.effect1.marktext = "怀远";
		}
		// 雷薄私掠标记修改
		if(lib.skill.dcsilve != undefined){
			lib.skill.dcsilve.subSkill.self.marktext = "私掠";
			lib.skill.dcsilve.subSkill.target.marktext = "私掠";
		}
		// 严畯观潮标记修改
		if(lib.skill.xinfu_guanchao != undefined){
			lib.skill.xinfu_guanchao.subSkill.dizeng.marktext = "观潮";
			lib.skill.xinfu_guanchao.subSkill.dijian.marktext = "观潮";
		}
		// 葛玄丹血、札标记修改
		if(lib.skill.gxlianhua != undefined){
			lib.skill.gxlianhua.marktext = "丹血";
		}
		if(lib.skill.gxlianhua != undefined){
			lib.skill.zhafu.subSkill.hf.marktext = "札";
		}
		// TW葛玄丹标记修改
		if(lib.skill.twdanfa != undefined){
			lib.skill.twdanfa.marktext = "丹";
		}
		// 丁尚涴抚悼、决裂标记修改
		if(lib.skill.dcfudao != undefined){
			lib.skill.dcfudao.subSkill.effect.marktext = "抚悼";
			lib.skill.dcfudao.subSkill.deadmark.marktext = "决裂";
		}
		// 王濬战舰、长驱、统业标记修改
		if(lib.skill.dcchangqu != undefined){
			lib.skill.dcchangqu.subSkill.warship.marktext = "战舰";
			lib.skill.dcchangqu.subSkill.add.marktext = "长驱";
		}
		if(lib.skill.dctongye != undefined){
			lib.skill.dctongye.subSkill.buff.marktext = "统业";
		}
		// 赵直武勇、刚硬、多谋、果决、仁智标记修改
		if(lib.skill.dctongguan != undefined){
			lib.skill.dctongguan.subSkill.wuyong.marktext = "武勇";
			lib.skill.dctongguan.subSkill.gangying.marktext = "刚硬";
			lib.skill.dctongguan.subSkill.duomou.marktext = "多谋";
			lib.skill.dctongguan.subSkill.guojue.marktext = "果决";
			lib.skill.dctongguan.subSkill.renzhi.marktext = "仁智";
		}
		// 孟节乐泉、藿溪、瘴气、芸香标记修改
		if(lib.skill.dcyinlu != undefined){
			lib.skill.dcyinlu.subSkill.lequan.marktext = "乐泉";
			lib.skill.dcyinlu.subSkill.huoxi.marktext = "藿溪";
			lib.skill.dcyinlu.subSkill.zhangqi.marktext = "瘴气";
			lib.skill.dcyinlu.subSkill.yunxiang.marktext = "芸香";
		}
		// 手杀孙邵定仪标记修改
		if(lib.skill.mjdingyi != undefined){
			lib.skill.mjdingyi.subSkill[0].marktext = "定仪";
			lib.skill.mjdingyi.subSkill[1].marktext = "定仪";
			lib.skill.mjdingyi.subSkill[2].marktext = "定仪";
			lib.skill.mjdingyi.subSkill[3].marktext = "定仪";
		}
		// TW刘宏鬻爵标记修改
		if(lib.skill.twyujue != undefined){
			lib.skill.twyujue.subSkill.effect1.marktext = "鬻爵";
		}
		// 协力标记修改
		if(lib.skill.cooperation != undefined){
			lib.skill.cooperation.subSkill.damage.marktext = "同仇";
			lib.skill.cooperation.subSkill.draw.marktext = "并进";
			lib.skill.cooperation.subSkill.discard.marktext = "疏财";
			lib.skill.cooperation.subSkill.use.marktext = "戮力";
		}
		// 木牛标记修改
		if(lib.skill.muniu_skill != undefined){
			lib.skill.muniu_skill.marktext = "木牛";
		}
		// 青釭剑破防标记修改
		if(lib.skill.qinggang2 != undefined){
			lib.skill.qinggang2.marktext = "破防";
		}
		// 赤血青锋破防标记修改
		if(lib.skill.chixueqingfeng2 != undefined){
			lib.skill.chixueqingfeng2.marktext = "破防";
		}
		// 杨修、（国战）杨修鸡肋标记修改
		if(lib.skill.jilei2 != undefined){
			lib.skill.jilei2.marktext = "鸡肋";
		}
		// 战役篇孟达、（国战）孟达量反标记修改
		if(lib.skill.liangfan2 != undefined){
			lib.skill.liangfan2.marktext = "量反";
		}
		// 钟会、手杀钟会、界钟会、战役篇钟会、（国战）钟会权标记修改
		if(lib.skill.quanji != undefined){
			lib.skill.quanji.marktext = "权";
		}
		if(lib.skill.requanji != undefined){
			lib.skill.requanji.marktext = "权";
		}
		if(lib.skill.xinquanji != undefined){
			lib.skill.xinquanji.marktext = "权";
		}
		if(lib.skill.zyquanji != undefined){
			lib.skill.zyquanji.marktext = "权";
		}
		if(lib.skill.gzquanji != undefined){
			lib.skill.gzquanji.marktext = "权";
		}
		// 黄权劝谏标记修改
		if(lib.skill.dcquanjian != undefined){
			lib.skill.dcquanjian.subSkill.effect.marktext = "劝谏";
			lib.skill.dcquanjian.subSkill.disable.marktext = "劝谏";
		}
		// （国战）黄权点虎标记修改
		if(lib.skill.gzdianhu != undefined){
			lib.skill.gzdianhu.subSkill.mark.marktext = "点虎";
		}
		// （国战）杨婉追还标记修改
		if(lib.skill.gzzhuihuan != undefined){
			lib.skill.gzzhuihuan.subSkill.damage.marktext = "追还";
			lib.skill.gzzhuihuan.subSkill.discard.marktext = "追还";
		}
		// （国战）王平将略标记修改
		if(lib.skill.jianglue != undefined){
			lib.skill.jianglue.marktext = "将略";
		}
		// （国战）于吉千幻标记修改
		if(lib.skill.qianhuan != undefined){
			lib.skill.qianhuan.marktext = "千幻";
		}
		// （国战）君刘备激诏标记修改
		if(lib.skill.jizhao != undefined){
			lib.skill.jizhao.marktext = "激诏";
		}
		// （国战）张鲁义舍标记修改
		if(lib.skill.gzrebushi != undefined){
			lib.skill.gzrebushi.marktext = "义舍";
		}
		// （国战）结盟标记修改
		if(lib.skill.yexinjia_friend != undefined){
			lib.skill.yexinjia_friend.marktext = "结盟";
		}
		// （国战）诏书标记修改
		if(lib.skill.zhaoshu_skill != undefined){
			lib.skill.zhaoshu_skill.marktext = "诏书";
		}
		// （国战）军令标记修改
		if(lib.skill.junling4_eff != undefined){
			lib.skill.junling4_eff.marktext = "军令";
		}
		if(lib.skill.junling5_eff != undefined){
			lib.skill.junling5_eff.marktext = "军令";
		}
		// （对决-剑阁）天侯孔明大雾、狂风标记修改
		if(lib.skill.boss_biantian2 != undefined){
			lib.skill.boss_biantian2.marktext = "大雾";
		}
		if(lib.skill.boss_biantian3 != undefined){
			lib.skill.boss_biantian3.marktext = "狂风";
		}
		// （对决-四国）唐咨兴棹标记修改
		if(lib.skill.xingzhao != undefined){
			lib.skill.xingzhao.marktext = "兴棹";
		}
		// （对决-四国）龙船标记修改
		if(lib.skill.longchuanzhibao != undefined){
			lib.skill.longchuanzhibao.marktext = "龙船";
		}
		// （斗地主-兵临）樊城标记修改
		if(lib.skill.zhuSkill_fancheng0 != undefined){
			lib.skill.zhuSkill_fancheng0.marktext = "樊城";
		}
		if(lib.skill.zhuSkill_fancheng1 != undefined){
			lib.skill.zhuSkill_fancheng1.marktext = "樊城";
		}
		// 来莺儿沙标记修改
		lib.translate.shawu_bg = "沙";
		// 技能含round:XXX,的标记修改
		// 袁涣请决标记修改
		lib.translate.qingjue_bg = "请决";
		// 手杀朱儁厚俸标记修改
		lib.translate.houfeng_bg = "厚俸";
		// 赵昂忠节标记修改
		lib.translate.dczhongjie_bg = "忠节";
		// 张嫙奢葬标记修改
		lib.translate.shezang_bg = "奢葬";
		// TW霍峻竭御标记修改
		lib.translate.twjieyu_bg = "竭御";
		// （国战）司马师夷灭标记修改
		lib.translate.gzyimie_bg = "夷灭";
		// 军师、大将、贼首标记修改
		lib.translate.identity_junshi_bg = "军师";
		lib.translate.identity_dajiang_bg = "大将";
		lib.translate.identity_zeishou_bg = "贼首";
	}
	// 解除本体AI禁将
	lib.config.forbidai.remove('ns_liuzhang');
	
	// 武魂配音临时修复
	lib.skill.wuhun21={
		audio:true,
		skillAnimation:true,
		animationColor:'soil',
	};
	lib.skill.wuhun22={
		audio:true,
		skillAnimation:true,
		animationColor:'soil',
	};
	lib.skill.wuhun23={
		audio:true,
		skillAnimation:true,
		animationColor:'soil',
	};
	lib.skill.new_wuhun={
		audio:"wuhun21",
		group:["new_wuhun_mark","new_wuhun_die","wuhun22","wuhun23"],
		trigger:{
			player:"damageEnd",
		},
		forced:true,
		filter:function (event,player){
			return event.source!=undefined;
		},
		content:function (){
		trigger.source.addMark('new_wuhun_mark',trigger.num);
		},
		subSkill:{
			die:{
				//audio:"wuhun2",
				skillAnimation:true,
				animationColor:'soil',
				trigger:{
					player:"die",
				},
				forced:true,
				forceDie:true,
				direct:true,
				filter:function (event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.hasMark('new_wuhun_mark');
					});
				},
				content:function (){
					"step 0"
					var num=0;
					for(var i=0;i<game.players.length;i++){
						var current=game.players[i];
						if(current!=player&&current.countMark('new_wuhun_mark')>num){
							num=current.countMark('new_wuhun_mark');
						}
					}
					player.chooseTarget(true,'请选择【武魂】的目标','令其进行判定，若判定结果不为【桃】或【桃园结义】，则其死亡',function(card,player,target){
						return target!=player&&target.countMark('new_wuhun_mark')==_status.event.num;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					}).set('forceDie',true).set('num',num);
					"step 1"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						event.target=target;
						player.line(target,{color:[255, 255, 0]});
						game.delay(2);
					}
					"step 2"
					target.judge(function(card){
						if(['tao','taoyuan'].contains(card.name)) return 10;
						return -10;
					}).judge2=function(result){
						return result.bool==false?true:false;
					};
					"step 3"
					if(!result.bool){
						player.logSkill('wuhun22',target);
						lib.element.Player.prototype.die.apply(target,[]);
					} else player.logSkill('wuhun23',target);
				},
				sub:true,
			},
			mark:{
				marktext:"梦魇",
				intro:{
					name:"梦魇",
					content:"mark",
				},
				sub:true,
			},
		},
		ai:{
			threaten:0.01,
			notemp:true,
		},
	};
	lib.skill.wuhun={
		trigger:{
			player:"damageEnd",
		},
		//alter:true,
		filter:function (event,player){
			if(event.source==undefined) return false;
			if(!get.is.altered('wuhun')) return false	
			return true;
		},
		forced:true,
		content:function (){
			if(!trigger.source.storage.wuhun_mark){
				trigger.source.storage.wuhun_mark=0;
			}				 
			trigger.source.storage.wuhun_mark+=trigger.num;
			trigger.source.syncStorage('wuhun_mark');
			trigger.source.markSkill('wuhun_mark');
		},
		global:["wuhun_mark"],
		subSkill:{
			mark:{
				marktext:"梦魇",
				intro:{
					content:"mark",
				},
				sub:true,
			},
		},
			group:["wuhun2","wuhun4","wuhun5"],
	};
	lib.skill.wuhun2={
		trigger:{
		player:'dieBegin',
		},
		forced:true,
		popup:false,
		filter:function (event,player){
			for(var i=0;i<game.players.length;i++){
				if(game.players[i].storage.wuhun_mark) return true;
			}
			return false;
		},
		content:function (){
			"step 0"
			player.chooseTarget(true,get.prompt('wuhun2'),function(card,player,target){
				if(player==target) return false;
				if(!target.storage.wuhun_mark) return false;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.wuhun_mark>target.storage.wuhun_mark){
						return false;
					}
				}
				return true;
			}).set('ai',function(target){
				return -ai.get.attitude(_status.event.player,target);
			});
			"step 1"
				player.line(result.targets[0],'fire');
				result.targets[0].addSkill('wuhun3')
		},
		ai:{
			threaten:0.5,
			effect:{
				target:function (card,player,target,current){
					if(get.tag(card,'damage')){
						if(player.hasSkill('jueqing')) return [1,-5];
						var hasfriend=false;
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=target&&ai.get.attitude(game.players[i],target)>=0){
								hasfriend=true;break;
							}
						}
						if(!hasfriend) return;
						if(player.hp>2&&ai.get.attitude(player,target)<=0) return [0,2];
						return [1,0,0,-player.hp];
					}
				},
			},
		},
	};
	lib.skill.wuhun3={
		audio:3,
		trigger:{
			global:'dieAfter',
		},
		forced:true,
		content:function (){
			"step 0"
			player.judge(function(card){
				if(card.name=='tao'||card.name=='taoyuan') return 2;
				return -2;
			})
			"step 1"
			if(result.judge==-2){
				player.die();
			}
			player.removeSkill('wuhun3');
		},
	};
	lib.skill.wuhun4={
		trigger:{
			player:'dieAfter',
		},
		forced:true,
		popup:false,
		content:function (){
			for(var i=0;i<game.players.length;i++){
				if(game.players[i].storage.wuhun_mark){
					game.players[i].storage.wuhun_mark=0;
					game.players[i].unmarkSkill('wuhun_mark');
				}
			}
		},
	};
	lib.skill.wuhun5={
		trigger:{player:'dieBegin'},
		forced:true,
		popup:false,
		filter:function(event){
			if(event.source!=player&&event.source!=undefined&&!get.is.altered('wuhun')) return true							 
			return false;
		},
		content:function(){
			trigger.source.addSkill('wuhun6');
		},
		ai:{
			threaten:function(player,target){
				if(target.hp==1) return 0.5;
			},
			effect:{
				target:function(card,player,target,current){
					if(target.hp<=1&&get.tag(card,'damage')){
						if(player.hasSkillTag('jueqing',false,target)) return [1,-5];
						if(!target.hasFriend()) return;
						if(player.hp>2&&get.attitude(player,target)<=0) return [0,2];
						return [1,0,0,-player.hp];
					}
				}
			}
		}
	};
	lib.skill.wuhun6={
		audio:3,
		trigger:{global:'dieAfter'},
		forced:true,
		content:function(){
			if(player.hp<Infinity){
				player.loseHp(player.hp);
			}
			player.removeSkill('wuhun6');
		}
	};
	
	lib.arenaReady.push(function(){
		// 不显示“托管中...”文字和阴影
		if (config.notuoguanzhong){
			ui.autonode.remove();
		}
		// 花色none（无色）的翻译修改为空格（UI表现为不显示花色）
		lib.translate.none = " ";
		// 大键角色图→水转百戏图
		lib.translate.qiaosi_map = "水转百戏图";
		// 挟令卡牌完整翻译
		lib.translate.xietianzi = "挟天子以令诸侯";
		// 司敌（手杀曹真彩蛋）技能描述修改
		lib.translate.discretesidi_info = "①你使用除延时锦囊以外的牌结算结束后，可以选择一名还未指定“司敌”目标的其他角色，并为其指定一名“司敌”目标角色（仅你可见）。②其使用的第一张除延时锦囊以外的牌仅指定“司敌”目标为唯一目标时（否则清除你为其指定的“司敌”目标角色。）你根据以下情况执行效果：若目标为你，你摸一张牌；若目标不为你，你选择一项：⒈取消之，然后若此时场上没有任何角色处于濒死状态，你对其造成1点伤害；⒉你摸两张牌。然后清除你为其指定的“司敌”目标角色。";
		// 天行技能描述修改
		lib.translate.tianxing_info = "觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：〖仁德〗/〖制衡〗/〖乱击〗/〖放权〗。";
		// 神裁技能描述修改
		lib.translate.shencai_info = "出牌阶段限一次，你可以令一名其他角色进行判定。你获得此判定牌，然后若此判定牌：包含以下要素中的任意一个，则其失去已有的下列效果，并获得对应的效果：{⒈“笞”-体力：当其受到伤害后，其失去等量的体力、⒉“杖”-武器：其不能使用牌响应【杀】、⒊“徒”-打出：当其失去手牌后，其再随机弃置一张手牌（不嵌套触发）、⒋“流”-距离：其的结束阶段开始时，其翻面}；若均不包含，你获得其区域里的一张牌，其获得一枚“死”并获得如下效果：其的角色手牌上限-X、其的回合结束时，若X大于场上存活人数，则其死亡（X为其“死”标记数）。";
		// 巡使技能描述修改
		lib.translate.xunshi_info = "锁定技。①你手牌区内所有的多目标锦囊牌均视为花色为无色的普通【杀】。②你使用颜色为无色的牌无距离和次数限制。③当你使用无颜色的牌选择目标后，你令你的〖神裁〗的发动次数上限+1（至多为5），然后可以为此牌增加任意个目标。";
		// 巧思技能描述修正
		lib.translate.qiaosi_info = "出牌阶段限一次，你可以表演「水转百戏图」并根据表演结果获得相应的牌。然后，你选择一项：1.弃置X张牌。2.将X张牌交给一名其他角色。（X为你以此法得到的牌数）";
		lib.translate.qiaosi_map_info = "<br><li>王：锦囊牌*2<br><li>商：装备牌/【杀】/【酒】*1<br><li>工：【杀】/【酒】*1<br><li>农：【闪】/【桃】*1<br><li>士：锦囊牌/【闪】/【桃】*1<br><li>将：装备牌*2";
		// 高达一号技能描述修改
		lib.translate.zhanjiang_info = "准备阶段开始时，如果其他角色的装备区内有【青釭剑】，你可以获得之。";
		lib.translate.xinlonghun_info = "你可以将你的牌按下列规则使用或打出：黑桃当【无懈可击】，梅花当【闪】，红桃当【桃】，方块当火【杀】。";
		// 凌人、整肃、蛊惑、军令、协力卡牌显示修复
		lib.card.basic = {fullskin:true};
		lib.card.equip = {fullskin:true};
		lib.card.trick = {fullskin:true};
		lib.card.zhengsu_leijin = {fullskin:true};
		lib.card.zhengsu_mingzhi = {fullskin:true};
		lib.card.zhengsu_bianzhen = {fullskin:true};
		lib.card.reguhuo_ally = {fullskin:true};
		lib.card.reguhuo_betray = {fullskin:true};
		lib.card.junling1 = {fullskin:true};
		lib.card.junling2 = {fullskin:true};
		lib.card.junling3 = {fullskin:true};
		lib.card.junling4 = {fullskin:true};
		lib.card.junling5 = {fullskin:true};
		lib.card.junling6 = {fullskin:true};
		lib.card.cooperation_damage = {fullskin:true,cardimage:'cooperation_damage',};
		lib.card.cooperation_draw = {fullskin:true,cardimage:'cooperation_draw',};
		lib.card.cooperation_discard = {fullskin:true,cardimage:'cooperation_discard',};
		lib.card.cooperation_use = {fullskin:true,cardimage:'cooperation_use',};
		// 修复界孙笨的彩蛋
		lib.translate.re_sunben = "界孙策";
		// 本体配音修复
		lib.skill.jie.audio = 2;
		lib.skill.kuiwei.audio = true;
		lib.skill.yanzheng.audio = true;
		lib.skill.zhengfu.audio = 3;
		lib.skill.yeyan.audio = 2;
		lib.skill.zuoxing.audio = 3;
		lib.skill.huamu.audio = 6;
		lib.skill.boss_juejing.audio = true;
		delete lib.skill.boss_juejing2.audio;
		delete lib.skill.twwushen.audio;
		lib.skill.twwushen.audio = 2;
		lib.skill.twwuhun.audio = true;
		lib.skill.twwuhun.subSkill.gain.audio = 2;
		lib.translate.wuhun21 = "武魂";
		lib.translate.wuhun22 = "武魂";
		lib.translate.wuhun23 = "武魂";
		lib.translate.wuhun2 = "武魂";
		lib.translate.wuhun3 = "武魂";
		// 本体用间篇卡牌名魔改
		lib.translate.duanjian = "折戟";
		lib.translate.serafuku = "女装";
		
		// 武将名过长时减小字体大小
		lib.translate.yuantanyuanxiyuanshang_ab = '<span style="font-size: 12.7px">袁谭袁尚袁熙</span>';
		lib.translate.ganfurenmifuren_ab = '<span style="font-size: 12.7px">甘夫人糜夫人</span>';
		lib.translate.jsrg_sunlubansunluyu_ab = '<span style="font-size: 12.5px;font-weight: bold">合</span><span style="font-size: 12.5px">孙鲁班孙鲁育</span>';
		lib.translate.jsrg_weiwenzhugezhi_ab = '<span style="font-size: 12.7px;font-weight: bold">合</span><span style="font-size: 12.7px">卫温诸葛直</span>';
		
	});
	
	// 非战棋/塔防/炉石模式，弹出使用<新版>布局提示
	if(!['chess','tafang','stone'].contains(get.mode()) && lib.config.layout!='nova'){
        alert('十周年UI提醒您，请使用<新版>布局以获得良好体验（在选项-选项-外观-布局中调整）。');
    }
	// 战棋/塔防/炉石模式，弹出关闭十周年UI和手杀ui扩展提示
	if(['chess','tafang','stone'].contains(get.mode())){
        alert('温馨提示：为获得良好体验，请关闭十周年UI和手杀ui扩展（在选项-扩展中关闭）。');
    }
	
	// 定义duicfg，加强对其他扩展的兼容
	// 可兼容其他扩展此种写法了（不推荐这种写法）：if (duicfg&&duicfg.showJieMark) {
	// 其他扩展若想兼容旧版十周年则需改成（推荐这种写法）：if (lib.config['extension_十周年UI_showJieMark']) {
	window.duicfg = config;
	window.dui = window.decadeUI = {
		init:function(){
			this.extensionName = extensionName;
			
			var sensor = decadeUI.element.create('sensor', document.body);
			sensor.id = 'decadeUI-body-sensor';
			this.bodySensor = new decadeUI.ResizeSensor(sensor);
			
			var SVG_NS = 'http://www.w3.org/2000/svg';
			var svg = document.body.appendChild(document.createElementNS(SVG_NS, 'svg'));
			var defs = svg.appendChild(document.createElementNS(SVG_NS, 'defs'));
			var solo = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duol = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duor = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var dskin = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			
			// 手杀
			var soloss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duolss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duorss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			// 新手杀
			var soloxss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duolxss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			var duorxss = defs.appendChild(document.createElementNS(SVG_NS, 'clipPath'));
			
			solo.id = 'solo-clip';
			duol.id = 'duol-clip';
			duor.id = 'duor-clip';
			dskin.id = 'dskin-clip';
			
			// 手杀
			soloss.id = 'soloss-clip';
			duolss.id = 'duolss-clip';
			duorss.id = 'duorss-clip';
			// 新手杀
			soloxss.id = 'soloxss-clip';
			duolxss.id = 'duolxss-clip';
			duorxss.id = 'duorxss-clip';
			
			solo.setAttribute('clipPathUnits', 'objectBoundingBox');
			duol.setAttribute('clipPathUnits', 'objectBoundingBox');
			duor.setAttribute('clipPathUnits', 'objectBoundingBox');
			dskin.setAttribute('clipPathUnits', 'objectBoundingBox');
			
			// 手杀
			soloss.setAttribute('clipPathUnits', 'objectBoundingBox');
			duolss.setAttribute('clipPathUnits', 'objectBoundingBox');
			duorss.setAttribute('clipPathUnits', 'objectBoundingBox');
			// 新手杀
			soloxss.setAttribute('clipPathUnits', 'objectBoundingBox');
			duolxss.setAttribute('clipPathUnits', 'objectBoundingBox');
			duorxss.setAttribute('clipPathUnits', 'objectBoundingBox');
			
			var soloPath = solo.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoLPath = duol.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoRPath = duor.appendChild(document.createElementNS(SVG_NS, 'path'));
			var dskinPath = dskin.appendChild(document.createElementNS(SVG_NS, 'path'));
			soloPath.setAttribute('d', 'M0 0 H1 Q1 0.065 0.9 0.065 Q1 0.065 1 0.11 V0.96 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.11 Q0 0.065 0.1 0.065 Q0 0.065 0 0 Z');
			duoLPath.setAttribute('d', 'M0 0 H1 V1 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.11 Q0 0.065 0.1 0.065 Q0 0.065 0 0 Z');
			duoRPath.setAttribute('d', 'M0 0 H1 Q1 0.065 0.9 0.065 Q1 0.065 1 0.11 V0.96 Q1 1 0.9 1 H0 Z');
			dskinPath.setAttribute('d', 'M0 0 H1 Q1 0.065 0.9 0.065 Q1 0.065 1 0.11 V0.96 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.11 Q0 0.065 0.1 0.065 Q0 0.065 0 0 Z');
			
			// 手杀
			var solossPath = soloss.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoLssPath = duolss.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoRssPath = duorss.appendChild(document.createElementNS(SVG_NS, 'path'));
			solossPath.setAttribute('d', 'M0 0 H1 Q1 0.121 0.9 0.121 Q1 0.121 1 0.15 V0.96 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.15 Q0 0.121 0.1 0.121 Q0 0.121 0 0 Z');
			duoLssPath.setAttribute('d', 'M0 0 H1 V1 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.15 Q0 0.121 0.1 0.121 Q0 0.121 0 0 Z');
			duoRssPath.setAttribute('d', 'M0 0 H1 Q1 0.121 0.9 0.121 Q1 0.121 1 0.15 V0.96 Q1 1 0.9 1 H0 Z');
			// 新手杀
			var soloxssPath = soloxss.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoLxssPath = duolxss.appendChild(document.createElementNS(SVG_NS, 'path'));
			var duoRxssPath = duorxss.appendChild(document.createElementNS(SVG_NS, 'path'));
			soloxssPath.setAttribute('d', 'M0 0 H1 Q1 0.125 0.9 0.125 Q1 0.125 1 0.16 V0.96 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.16 Q0 0.125 0.1 0.125 Q0 0.125 0 0 Z');
			duoLxssPath.setAttribute('d', 'M0 0 H1 V1 Q1 1 0.9 1 H0.1 Q0 1 0 0.96 V0.16 Q0 0.125 0.1 0.125 Q0 0.125 0 0 Z');
			duoRxssPath.setAttribute('d', 'M0 0 H1 Q1 0.125 0.9 0.125 Q1 0.125 1 0.16 V0.96 Q1 1 0.9 1 H0 Z');
			
			document.addEventListener('click', function(e){ dui.set.activeElement(e.target); }, true);
			this.initOverride();
			return this;
		},
		initOverride:function(){
			function override (dest, src) {
				var ok = true;
				var key;
				for (key in src) {
					if (dest[key]) {
						ok = override(dest[key], src[key]);
						if (ok) {
							dest[key] = src[key];
						}
					} else {
						dest[key] = src[key];
					}
					ok = false;
				}
				
				return ok;
			};
			
			var base = {
				ui:{
					create:{
						card: ui.create.card,
						cards: ui.create.cards,
						confirm: ui.create.confirm,
						volume: ui.create.volume,
						chat: ui.create.chat,
						// button: ui.create.button,
						menu: ui.create.menu,
						player: ui.create.player,
						selectlist: ui.create.selectlist,
					},
					
					update: ui.update,
					updatec: ui.updatec,
				},
				get:{
					infoHp: get.infoHp,
					infoMaxHp: get.infoMaxHp,
					objtype: get.objtype,
					skillState: get.skillState,
				},
				game:{
					check: game.check,
					expandSkills: game.expandSkills,
					uncheck: game.uncheck,
					loop: game.loop,
					over: game.over,
					updateRoundNumber: game.updateRoundNumber,
					phaseLoop: game.phaseLoop,
					bossPhaseLoop: game.bossPhaseLoop,
					gameDraw: game.gameDraw,
					swapSeat:game.swapSeat,
				},
				lib:{
					element:{
						card:{
							init: lib.element.card.init,
						}, 
						
						content:{
							chooseButton: lib.element.content.chooseButton,
							turnOver: lib.element.content.turnOver,
						},
						
						control:{
							add: lib.element.control.add,
							open: lib.element.control.open,
							close: lib.element.control.close,
						},
						
						player:{
							getState: lib.element.player.getState,
							init: lib.element.player.init,
							uninit: lib.element.player.uninit,
							setModeState: lib.element.player.setModeState,
							$compare: lib.element.player.$compare,
							// $disableEquip: lib.element.player.$disableEquip,
							$syncDisable: lib.element.player.$syncDisable,
							$damage: lib.element.player.$damage,
							$damagepop: lib.element.player.$damagepop,
							$dieAfter: lib.element.player.$dieAfter,
							$skill: lib.element.player.$skill,
							setSeatNum: lib.element.player.setSeatNum,
							$syncExpand: lib.element.player.$syncExpand
						},
						event:{
							send: lib.element.event.send,
						},
					},
				},
			};
			
			var ride = {};
			ride.lib = {
				element:{
					dialog:{
						open:function(){
							if (this.noopen) return;
							for (var i = 0; i < ui.dialogs.length; i++) {
								if (ui.dialogs[i] == this) {
									this.show();
									this.refocus();
									ui.dialogs.remove(this);
									ui.dialogs.unshift(this);
									ui.update();
									return this;
								}
								if (ui.dialogs[i].static) ui.dialogs[i].unfocus();
								else ui.dialogs[i].hide();
							}
							ui.dialog = this;
							ui.arena.appendChild(this);
							ui.dialogs.unshift(this);
							ui.update();
							if (!this.classList.contains('prompt')) {
								this.style.animation = 'open-dialog 0.5s';
							}
							
							return this;
						},
					},
					
					card:{
						/**
						 * @param {[string, number, string, string] | {
						 * suit: string;
						 * number: number;
						 * name: string;
						 * nature: string;
						 * }} card
						 */
						init:function(card){
							if (Array.isArray(card)) {
								if (card[2] == 'huosha') {
									card[2] = 'sha';
									card[3] = 'fire';
								}
								else if (card[2] == 'leisha') {
									card[2] = 'sha';
									card[3] = 'thunder';
								}
								else if (card[2] == 'kamisha') {
									card[2] = 'sha';
									card[3] = 'kami';
								}
								else if (card[2] == 'icesha') {
									card[2] = 'sha';
									card[3] = 'ice';
								}
								else if (card[2] == 'cisha') {
									card[2] = 'sha';
									card[3] = 'stab';
								}
								else if(card[2].length>3){
									let prefix=card[2].slice(0,card[2].lastIndexOf('sha'));
									if(lib.nature.has(prefix)){
										if(prefix.length+3==card[2].length){
											card[2]='sha';
											card[3]=prefix;
										}
									}
									if(card[2].startsWith('sha_')){
										let suffix=card[2].slice(4);
										let natureList=suffix.split('_');
										card[2]='sha';
										card[3]=get.nature(natureList);
									}
								}
							} else if (typeof card == 'object') {
								card = [card.suit, card.number, card.name, card.nature];
							}
							
							var cardnum = card[1] || '';
							var cardsuit = get.translation(card[0]);
							if (parseInt(cardnum) == cardnum) cardnum = parseInt(cardnum);
							if (!lib.card[card[2]]) lib.card[card[2]] = {};
							var info = lib.card[card[2]];
							if (info.global && !this.classList.contains('button')) {
								if (Array.isArray(info.global)) {
									while (info.global.length) {
										game.addGlobalSkill(info.global.shift());
									}
								} else if (typeof info.global == 'string') {
									game.addGlobalSkill(info.global);
								}
								delete info.global;
							}
							
							this.suit = card[0];
							this.number = parseInt(card[1]) || 0;
							this.name = card[2];
							
							if(info.destroy&&(typeof info.destroy!='boolean'&&!lib.skill[info.destroy])){
								this.destroyed=info.destroy;
							}
							
							if (_status.connectMode && !game.online && lib.cardOL && !this.cardid) {
								this.cardid = get.id();
								lib.cardOL[this.cardid] = this;
							}
							
							if (!_status.connectMode && !_status.video) this.cardid = get.id();
							
							this.$init(card);
							
							if (this.inits) {
								for (var i = 0; i < this.inits.length; i++) {
									this.inits[i](this);
								}
							}
							if (typeof info.init == 'function') info.init();
							
							return this;
						},
						/**
						 * @param {[string, number, string, string]} card
						*/
						$init:function(card){
							var cardnum = card[1] || '';
							var cardsuit = get.translation(card[0]);
							if (parseInt(cardnum) == cardnum) cardnum = parseInt(cardnum);
							// if (!lib.card[card[2]]) lib.card[card[2]] = {};
							var info = lib.card[card[2]];
							if (cardnum > 0 && cardnum < 14) {
								cardnum = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'][cardnum - 1];
							}
							if (this.name) {
								this.classList.remove('epic');
								this.classList.remove('legend');
								this.classList.remove('gold');
								this.classList.remove('unique');
								this.style.background = '';
								var subtype=get.subtype(this,false);
								if (subtype) {
									this.classList.remove(subtype);
								}
							}
							if (info.epic) {
								this.classList.add('epic');
							} else if (info.legend) {
								this.classList.add('legend');
							} else if (info.gold) {
								this.classList.add('gold');
							} else if (info.unique) {
								this.classList.add('unique');
							}
							var bg = card[2];
							if (info.cardimage) {
								bg = info.cardimage;
							}
							var img = lib.card[bg].image;
							if (img) {
								if(img.startsWith('db:')){
									img = img.slice(3);
								} else if(!img.startsWith('ext:')){
									img = null;
								}
							}
							this.classList.remove('fullskin');
							this.classList.remove('fullimage');
							this.classList.remove('fullborder');
							this.dataset.cardName = card[2];
							this.dataset.cardType = info.type || '';
							this.dataset.cardSubype = info.subtype || '';
							this.dataset.cardMultitarget = info.multitarget ? '1': '0';
							if (this.node.name.dataset.nature) this.node.name.dataset.nature = '';
							if (!lib.config.hide_card_image && lib.card[bg].fullskin) {
								this.classList.add('fullskin');
								if (img) {
									if(img.startsWith('ext:')){
										this.node.image.setBackgroundImage(img.replace(/^ext:/, 'extension/'));
									} else {
										this.node.image.setBackgroundDB(img);
									}
								} else {
									if (lib.card[bg].modeimage) {
										this.node.image.setBackgroundImage('image/mode/' + lib.card[bg].modeimage + '/card/' + bg + '.png');
									} else {
										do{
											let nature=card[3];
											if(bg=='sha'&&typeof nature=='string'){
												let natures=get.natureList(nature),_bg;
												for(const n of natures) if(lib.natureBg.has(n)) _bg=n;
												if(_bg){
													this.node.image.setBackgroundImage(lib.natureBg.get(_bg));
													break;
												}
											}
											this.node.image.setBackgroundImage('image/card/'+bg+'.png');
										}
										while(0);
									}
								}
							} else if (lib.card[bg].fullimage) {
								this.classList.add('fullimage');
								if (img) {
									if(img.startsWith('ext:')){
										this.setBackgroundImage(img.replace(/^ext:/, 'extension/'));
										this.style.backgroundSize = 'cover';
									} else {
										this.setBackgroundDB(img);
									}
								} else if (lib.card[bg].image) {
									if(lib.card[bg].image.startsWith('character:')){
										this.setBackground(lib.card[bg].image.slice(10), 'character');
									} else {
										this.setBackground(lib.card[bg].image);
									}
								} else {
									var cardPack = lib.cardPack['mode_' + get.mode()];
									if (Array.isArray(cardPack) && cardPack.contains(bg)) {
										this.setBackground('mode/' + get.mode() + '/card/' + bg);
									} else {
										this.setBackground('card/' + bg);
									}
								}
							} else if (lib.card[bg].fullborder) {
								this.classList.add('fullborder');
								if (lib.card[bg].fullborder == 'gold') {
									this.node.name.dataset.nature = 'metalmm';
								} else if (lib.card[bg].fullborder == 'silver') {
									this.node.name.dataset.nature = 'watermm';
								}
								if (!this.node.avatar) {
									this.node.avatar = ui.create.div('.cardavatar');
									this.insertBefore(this.node.avatar, this.firstChild);
								}
								if (!this.node.framebg) {
									this.node.framebg = ui.create.div('.cardframebg');
									this.node.framebg.dataset.auto = lib.card[bg].fullborder;
									this.insertBefore(this.node.framebg, this.firstChild);
								}
								if (img) {
									if(img.startsWith('ext:')){
										this.node.avatar.setBackgroundImage(img.replace(/^ext:/, 'extension/'));
										this.node.avatar.style.backgroundSize = 'cover';
									} else {
										this.node.avatar.setBackgroundDB(img);
									}
								} else if (lib.card[bg].image) {
									if(lib.card[bg].image.startsWith('character:')){
										this.node.avatar.setBackground(lib.card[bg].image.slice(10), 'character');
									} else {
										this.node.avatar.setBackground(lib.card[bg].image);
									}
								} else {
									var cardPack = lib.cardPack['mode_' + get.mode()];
									if (Array.isArray(cardPack) && cardPack.contains(bg)) {
										this.node.avatar.setBackground('mode/' + get.mode() + '/card/' + bg);
									} else {
										this.node.avatar.setBackground('card/' + bg);
									}
								}
							} else if (lib.card[bg].image == 'card') {
								if(card[3]) this.setBackground(bg+'_'+get.natureList(card[3])[0],'card');
								else this.setBackground(bg, 'card');
							} else if (typeof lib.card[bg].image == 'string' && !lib.card[bg].fullskin) {
								if (img) {
									if(img.startsWith('ext:')){
										this.setBackgroundImage(img.replace(/^ext:/, 'extension/'));
										this.style.backgroundSize = 'cover';
									} else {
										this.setBackgroundDB(img);
									}
								} else {
									this.setBackground(lib.card[bg].image);
								}
							} else {
								this.node.background.innerHTML = lib.translate[bg + '_cbg'] || lib.translate[bg + '_bg'] || get.translation(bg)[0];
								// if (this.node.background.innerHTML.length > 1) this.node.background.classList.add('tight');
								// else this.node.background.classList.remove('tight');
							}
							if (!lib.card[bg].fullborder && this.node.avatar && this.node.framebg) {
								this.node.avatar.remove();
								this.node.framebg.remove();
								this.node.avatar = undefined;
								this.node.framebg = undefined;
							}
							if (info.noname && !this.classList.contains('button')) {
								this.node.name.style.display = 'none';
							}
							if (info.addinfo) {
								if (!this.node.addinfo) {
									this.node.addinfo = ui.create.div('.range', this);
								}
								this.node.addinfo.innerHTML = info.addinfo;
							} else if (this.node.addinfo) {
								this.node.addinfo.remove();
								delete this.node.addinfo;
							}
							
							if (card[0] == 'heart' || card[0] == 'diamond') {
								this.node.info.classList.add('red');
							}
							
							this.node.image.className = 'image';
							
							var filename = card[2];
							// var vertname = '';
							var cardname = get.translation(card[2]);
							this.dataset.suit = card[0];
							this.$suitnum.$num.textContent = cardnum;
							this.$suitnum.$suit.textContent = cardsuit;
							
							if (card[2] == 'sha') {
								if (card[3] == 'fire') {
									cardname = '火' + cardname;
									filename = 'huosha';
									this.node.image.classList.add('fire');
								} else if (card[3] == 'thunder') {
									cardname = '雷' + cardname;
									filename = 'leisha';
									this.node.image.classList.add('thunder');
								} else if (card[3] == 'kami') {
									cardname = '神' + cardname;
									this.node.image.classList.add('kami');
								} else if (card[3] == 'ice') {
									cardname = '冰' + cardname;
									filename = 'bingsha';
									this.node.image.classList.add('ice');
								} else if (card[3] == 'stab') {
									name = '刺' + name;
									filename = 'cisha';
								}
								else {
									name='';
									let nature=card[3];
									if(nature){
										let natures=get.natureList(nature);
										natures.sort(lib.sort.nature);
										for(let nature of natures){
											name+=lib.translate['nature_'+nature]||lib.translate[nature]||'';
											// 多属性【杀】文件名（例如sha_fire_thunder.webp）
											filename += `_${nature}`;
											if(nature!='stab') this.node.image.classList.add(nature);
										}
									}
									name+='杀';
								}
							}
							
							// for (var i = 0; i < cardname.length; i++) vertname += cardname[i] + '<br>';
							this.$name.innerHTML = cardname;
							// this.$vertname.innerHTML = vertname;
							this.$vertname.innerHTML = cardname;
							this.$equip.$suitnum.innerHTML = '<span data-suit="' + card[0] + '">' + cardsuit + cardnum + '</span>' + '<span>&nbsp' + '</span>';
							this.$equip.$name.innerHTML = ' ' + cardname;
							
							this.classList.add('card');
							if (card[3]) {
								let natures=get.natureList(card[3]);
								natures.forEach(n=>{if(n) this.classList.add(n)});
								this.nature=natures.filter(n=>lib.nature.has(n)).sort(lib.sort.nature).join(lib.natureSeparator);
							} else if (this.nature) {
								this.classList.remove(this.nature);
								delete this.nature;
							}
							if (info.subtype) this.classList.add(info.subtype);
							
							switch(get.subtype(this,false)){
								case 'equip1':
									var added = false;
									if (lib.card[this.name] && lib.card[this.name].distance) {
										var dist = lib.card[this.name].distance;
										if (dist.attackFrom) {
											added = true;
											this.$range.textContent = '范围: ' + ( - dist.attackFrom + 1);
											this.$equip.$name.textContent += ( - dist.attackFrom + 1);
										}
									}
									if (!added) {
										this.$range.textContent = '范围: 1';
										this.$equip.$name.textContent += '1';
									}
									break;
								case 'equip3':
									if (info.distance && info.distance.globalTo) {
										this.$range.textContent = '防御: ' + info.distance.globalTo;
										this.$equip.$name.textContent += '+';
									}
									break;
								case 'equip4':
									if (info.distance && info.distance.globalFrom) {
										this.$range.textContent = '进攻: ' + ( - info.distance.globalFrom);
										this.$equip.$name.textContent += '-';
									}
									break;
								default:
									this.$range.textContent = '';
									break;
							}
							
							var tags = [];
							if (Array.isArray(card[4])) tags.addArray(card[4]);
							
							if (this.cardid) {
								if (!_status.cardtag) _status.cardtag = {};
								for (var i in _status.cardtag) if (_status.cardtag[i].contains(this.cardid)) { tags.add(i); }
								if (tags.length) {
									var tagText = '';
									for (var i = 0; i < tags.length; i++) {
										var tag = tags[i];
										if (!_status.cardtag[tag]) {
											_status.cardtag[tag] = [];
										}
										_status.cardtag[tag].add(this.cardid);
										tagText += lib.translate[tag + '_tag'];
									}
									
									this.$range.textContent = tagText;
									this.$range.classList.add('card-tag');
								}
							}
							
							// Show-K修复版搬运
							if (decadeUI.config.cardPrettify) {
								const decadeExtCardImage = lib.decade_extCardImage || (lib.decade_extCardImage = {});
								let decadeCardSource = decadeExtCardImage[filename];
								if (!decadeCardSource && card[2] != filename) decadeCardSource = decadeExtCardImage[card[2]];
								if (decadeCardSource) {
									this.classList.add('decade-card');
									if (!this.classList.contains('infohidden')) this.style.backgroundImage = `url('${this.decadeCardSource = decadeCardSource}')`;
									if (this.node.avatar) this.node.avatar.remove();
									if (this.node.framebg) this.node.framebg.remove();
									new MutationObserver(mutationRecords => mutationRecords.forEach(mutationRecord => {
										const target = mutationRecord.target, informationHidden = target.classList.contains('infohidden');
										if (informationHidden == mutationRecord.oldValue.split(' ').includes('infohidden')) return;
										if (informationHidden) target.style.removeProperty('background-image');
										else target.style.backgroundImage = `url('${target.decadeCardSource}')`;
									})).observe(this, {
										attributeFilter: ['class'],
										attributeOldValue: true
									});
								}
							}
							
							return this;
						},
						
						updateTransform:function(bool, delay){
							if (delay) {
								var that = this;
								setTimeout(function() {
									that.updateTransform(that.classList.contains('selected'));
								}, delay);
							} else {
								if (_status.event.player != game.me) return;
								if (this._transform && this.parentNode && this.parentNode.parentNode && 
									this.parentNode.parentNode.parentNode == ui.me && (!_status.mousedown || _status.mouseleft)) {
									if (bool) {
										this.style.transform = this._transform + ' translateY(-' + (decadeUI.isMobile() ? 15: 20) + 'px)';
									} else {
										this.style.transform = this._transform || '';
									}
								}
							}
						},
					},
					
					content:{
						changeHp:function(){
							//add to GlobalHistory
							game.getGlobalHistory().changeHp.push(event);
							//changeHujia moved here
							if(num<0&&player.hujia>0&&event.getParent().name=='damage'&&!player.hasSkillTag('nohujia')&&!lib.config['extension_十周年UI_hujiashixiao']){
								event.hujia=Math.min(-num,player.hujia);
								event.getParent().hujia=event.hujia;
								event.num+=event.hujia;
								//log moved to changeHujia
								//game.log(player,'的护甲抵挡了'+get.cnNumber(event.hujia)+'点伤害');
								player.changeHujia(-event.hujia).type='damage';
							}
							//old part
							num=event.num;
							player.hp += num;
							if (isNaN(player.hp)) player.hp = 0;
							if (player.hp > player.maxHp) player.hp = player.maxHp;
							player.update();
							if (event.popup !== false) {
								player.$damagepop(num, 'water');
							}
							if (_status.dying.contains(player) && player.hp > 0) {
								_status.dying.remove(player);
								game.broadcast(function(list) {
									_status.dying = list;
								},
								_status.dying);
								var evt = event.getParent('_save');
								if (evt && evt.finish) evt.finish();
								evt = event.getParent('dying');
								if (evt && evt.finish) evt.finish()
							}
							event.trigger('changeHp');
							decadeUI.delay(68);
						},
						
						turnOver:function(){
							game.log(player,'翻面');
							player.classList.toggle('turnedover');
							game.broadcast(function(player){
								player.classList.toggle('turnedover');
							},player);
							game.addVideo('turnOver', player, player.classList.contains('turnedover'));
							player.style.animation = 'turned-over 0.5s linear';
							setTimeout(function(player){
								player.style.animation = '';
							}, 500, player)
							
							return result;
						},
					},
					
					control:{
						add:function(item){
							var node = document.createElement('div');
							node.link = item;
							node.innerHTML = get.translation(item);
							node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.control);
							this.appendChild(node);
							this.updateLayout();
						},
						
						open:function(){
							ui.control.insertBefore(this, _status.createControl || ui.confirm);
							ui.controls.unshift(this);
							return this;
						},
						
						close:function(){
							ui.controls.remove(this);
							if (this.parentNode) this.parentNode.removeChild(this);
							if(ui.confirm==this) delete ui.confirm;
							if(ui.skills==this) delete ui.skills;
							if(ui.skills2==this) delete ui.skills2;
							if(ui.skills3==this) delete ui.skills3;
						},
						
						replace:function(){
							var items;
							var index = 0;
							var nodes = this.childNodes;
							
							if (Array.isArray(arguments[0])) {
								items = arguments[0];
							} else {
								items = arguments;
							}
							
							this.custom = undefined;
							
							for (var i = 0; i < items.length; i++){
								if (typeof items[i] == 'function') {
									this.custom = items[i];
								} else {
									if (index < nodes.length) {
										nodes[i].link = items[i];
										nodes[i].innerHTML = get.translation(items[i]);
									} else {
										this.add(items[i]);
									}
									
									index++;
								}
							}
							
							while (index < nodes.length) {
								nodes[index].remove();
							}
							
							this.updateLayout();
							ui.updatec();
							return this;
						},
						
						updateLayout:function(){
							var nodes = this.childNodes;
							if (nodes.length >= 2) {
								this.classList.add('combo-control');
								for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('control');
							} else {
								this.classList.remove('combo-control');
								if (nodes.length == 1) nodes[0].classList.remove('control');
							}
						},
					},
					
					player:{
						mark:function(item, info, skill){
							if (get.itemtype(item) == 'cards') {
								var marks = new Array(item.length);
								for (var i = 0; i < item.length; i++) marks.push(this.mark(item[i], info));
								return marks;
							}
							
							var mark;
							if (get.itemtype(item) == 'card') {
								mark = item.copy('mark');
								mark.suit = item.suit;
								mark.number = item.number;
								if (item.classList.contains('fullborder')) {
									mark.classList.add('fakejudge');
									mark.classList.add('fakemark'); 
									if (!mark.node.mark) mark.node.mark = mark.querySelector('.mark-text') || decadeUI.element.create('mark-text', mark);
									mark.node.mark.innerHTML = lib.translate[name.name + '_bg'] || get.translation(name.name)[0];
								}
								item = item.name;
							} else {
								mark = ui.create.div('.card.mark');
								if(lib.skill[item]&&lib.skill[item].markimage){
									mark.text = decadeUI.element.create('mark-text', mark);
									// if(decadeUI.config.playerMarkStyle == 'decade'){
										mark.text.innerHTML = "<img src='"+lib.assetURL+lib.skill[item].markimage+"' style='width:12px;height:12px;'/>";
									// }else{
										// mark.text.innerHTML = " ";
										// mark.text.setBackgroundImage(lib.skill[item].markimage);
									// }
									mark.text.style['box-shadow']='none';
									mark.text.style.backgroundPosition = 'center';
									mark.text.style.backgroundSize = 'contain';
									mark.text.style.backgroundRepeat = 'no-repeat';
								}else{
									var markText = lib.translate[item + '_bg'];
									if (!markText || markText[0] == '+' || markText[0] == '-') {
										markText = get.translation(item).substr(0, 2);
										if (decadeUI.config.playerMarkStyle != 'decade') {
											markText = markText[0];
										}
									}
									mark.text = decadeUI.element.create('mark-text', mark);
									if (markText.length == 2) mark.text.classList.add('small-text');
									mark.text.innerHTML = markText;
								}
							}
							
							mark.name = item;
							mark.skill = skill || item;
							if (typeof info == 'object') {
								mark.info = info;
							} else if (typeof info == 'string') {
								mark.markidentifer = info;
							}
							
							mark.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.card);
							if (!lib.config.touchscreen) {
								if (lib.config.hover_all) {
									lib.setHover(mark, ui.click.hoverplayer);
								}
								if (lib.config.right_info) {
									mark.oncontextmenu = ui.click.rightplayer;
								}
							}
							
							this.node.marks.appendChild(mark);
							this.updateMarks();
							ui.updatem(this);
							return mark;
						},
						
						markCharacter:function(name, info, learn, learn2){
							if (typeof name == 'object') name = name.name;
							
							var nodeMark = ui.create.div('.card.mark');
							var nodeMarkText = ui.create.div('.mark-text', nodeMark);
							
							if (!info) info = {};
							if (!info.name) info.name = get.translation(name);
							if (!info.content) info.content = get.skillintro(name, learn, learn2);
							
							if(name.startsWith('unknown')){
								nodeMarkText.innerHTML = get.translation(name)[0];
							} else {
								if (!lib.character[name]) return console.error(name);
								var text = info.name.substr(0, 2);
								if (text.length == 2) nodeMarkText.classList.add('small-text');
								nodeMarkText.innerHTML = text;
							}
							
							nodeMark.name = name + '_charactermark';
							nodeMark.info = info;
							nodeMark.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.card);
							if (!lib.config.touchscreen) {
								if (lib.config.hover_all) {
									lib.setHover(nodeMark, ui.click.hoverplayer);
								}
								if (lib.config.right_info) {
									nodeMark.oncontextmenu = ui.click.rightplayer;
								}
							}
							
							this.node.marks.appendChild(nodeMark);
							ui.updatem(this);
							return nodeMark;
						},
						setSeatNum:function(){
							base.lib.element.player.setSeatNum.apply(this,arguments);
							this.seat = this.getSeatNum();
							this.node.seat.innerHTML = get.cnNumber(this.seat, true);
						},
						
						markSkillCharacter:function(id, target, name, content, nobroadcast){
							if (typeof target == 'object') target = target.name;
							const func=function(player, target, name, content, id) {
								if (player.marks[id] && !window.decadeUI) {
									player.marks[id].name = name + '_charactermark';
									player.marks[id]._name = target;
									player.marks[id].info = {
										name: name,
										content: content,
										id: id
									};
									player.marks[id].setBackground(target, 'character');
									game.addVideo('changeMarkCharacter', player, {
										id: id,
										name: name,
										content: content,
										target: target
									});
								} else {
									player.marks[id] = player.markCharacter(target, {
										name: name,
										content: content,
										id: id
									});
									player.marks[id]._name = target;
									game.addVideo('markCharacter', player, {
										name: name,
										content: content,
										id: id,
										target: target
									});
								}
							}
							func(this,target,name,content,id);
							if(!nobroadcast) game.broadcast(func,this,target,name,content,id);
							return this;
						},
						
						playDynamic:function(animation, deputy){
							deputy = deputy === true;
							if (animation == undefined) return console.error('playDynamic: 参数1不能为空');
							var dynamic = this.dynamic;
							if (!dynamic) {
								dynamic = new duilib.DynamicPlayer('assets/dynamic/');
								dynamic.dprAdaptive = true;
								this.dynamic = dynamic;
								this.$dynamicWrap.appendChild(dynamic.canvas);
							} else {
								if (deputy && dynamic.deputy) {
									dynamic.stop(dynamic.deputy);
									dynamic.deputy = null;
								} else if (dynamic.primary) {
									dynamic.stop(dynamic.primary);
									dynamic.primary = null;
								}
							}
							
							if (typeof animation == 'string') animation = { name: animation };
							if (this.doubleAvatar) {
								if (Array.isArray(animation.x)) {
									animation.x = animation.x.concat();
									animation.x[1] += deputy ? 0.25 : -0.25;
								} else {
									if (animation.x == undefined) {
										animation.x = [0, deputy ? 0.75 : 0.25];
									} else {
										animation.x = [animation.x, deputy ? 0.25 : -0.25];
									}
								}
								
								animation.clip = { 
									x: [0, deputy ? 0.5 : 0],
									y: 0,
									width: [0, 0.5], 
									height:[0, 1], 
									clipParent: true
								};
							}
							
							if (this.$dynamicWrap.parentNode != this) this.appendChild(this.$dynamicWrap);
							
							dynamic.outcropMask = duicfg.dynamicSkinOutcrop;
							var avatar = dynamic.play(animation);
							if (deputy === true) {
								dynamic.deputy = avatar;
							} else {
								dynamic.primary = avatar;
							}
							
							this.classList.add(deputy ? 'd-skin2' : 'd-skin');
						},
						
						stopDynamic:function(primary, deputy){
							var dynamic = this.dynamic;
							if (!dynamic) return;
							
							primary = primary === true;
							deputy  = deputy  === true;
							
							if (primary && dynamic.primary) {
								dynamic.stop(dynamic.primary);
								dynamic.primary = null;
							} else if (deputy && dynamic.deputy) {
								dynamic.stop(dynamic.deputy);
								dynamic.deputy = null;
							} else if (!primary && !deputy) {
								dynamic.stopAll();
								dynamic.primary = null;
								dynamic.deputy = null;
							}
							
							if (!dynamic.primary && !dynamic.deputy) {
								this.classList.remove('d-skin');
								this.classList.remove('d-skin2');
								this.$dynamicWrap.remove();
							}
						},
						
						say:function(str){
							str = str.replace(/##assetURL##/g, lib.assetURL);
							
							if (!this.$chatBubble) {
								this.$chatBubble = decadeUI.element.create('chat-bubble');
							} 
							
							var bubble = this.$chatBubble;
							bubble.innerHTML = str;
							if (this != bubble.parentNode) this.appendChild(bubble);
							bubble.classList.remove('removing');
							bubble.style.animation = 'fade-in 0.3s';
							
							if (bubble.timeout) clearTimeout(bubble.timeout)
							bubble.timeout = setTimeout(function(bubble) {
								bubble.timeout = undefined;
								bubble.delete();
							}, 2000, bubble);
							
							var name = get.translation(this.name);
							var info = [name ? (name + '[' + this.nickname + ']') : this.nickname, str];
							lib.chatHistory.push(info);
							if (_status.addChatEntry) {
								if (_status.addChatEntry._origin.parentNode) {
									_status.addChatEntry(info, false);
								} else {
									_status.addChatEntry = undefined;
								}
							}
							if (lib.config.background_speak && lib.quickVoice.indexOf(str) != -1) {
								game.playAudio('voice', (this.sex == 'female' ? 'female': 'male'), lib.quickVoice.indexOf(str));
							}
						},
						
						updateMark:function(name, storage){
							if (!this.marks[name]) {
								if (lib.skill[name] && lib.skill[name].intro && (this.storage[name] || lib.skill[name].intro.markcount)) {
									this.markSkill(name);
									if (!this.marks[name]) return this;
								} else {
									return this;
								}
							}
							
							var mark = this.marks[name];
							if (storage && this.storage[name]) this.syncStorage(name);
							if (lib.skill[name] && lib.skill[name].intro && !lib.skill[name].intro.nocount && (this.storage[name] || lib.skill[name].intro.markcount || name == 'ghujia')) {
								var num = 0;
								if (typeof lib.skill[name].intro.markcount == 'function') {
									num = lib.skill[name].intro.markcount(this.storage[name], this);
								} else if(lib.skill[name].intro.markcount=='expansion'){
									num=this.countCards('x',(card)=>card.hasGaintag(name));																
								} else if (typeof this.storage[name + '_markcount'] == 'number') {
									num = this.storage[name + '_markcount'];
								} else if (name == 'ghujia') {
									num = this.hujia;
								} else if (typeof this.storage[name] == 'number') {
									num = this.storage[name];
								} else if (Array.isArray(this.storage[name])) {
									num = this.storage[name].length;
								} else if (typeof this.storage[name] == 'boolean') {
									if (decadeUI.config.playerMarkStyle != 'decade') {
										num = this.storage[name] ? '+' : '-';
									} else num = this.storage[name] ? '' : '';
								}
								
								if (num) {
									if (!mark.markcount) mark.markcount = decadeUI.element.create('mark-count', mark);
									mark.markcount.textContent = num;
								} else if (mark.markcount) {
									mark.markcount.delete();
									mark.markcount = undefined;
								}
							} else {
								if (mark.markcount) {
									mark.markcount.delete();
									mark.markcount = undefined;
								}
								
								if (lib.skill[name].mark == 'auto') {
									this.unmarkSkill(name);
								}
							}
							
							return this;
						},
						
						$damage:function(source){
							if (get.itemtype(source) == 'player') {
								game.addVideo('damage', this, source.dataset.position);
							} else {
								game.addVideo('damage', this);
							}
							game.broadcast(function(player, source){
								player.$damage(source);
							}, this, source);
							
							this.style.animation = 'player-hurt 0.3s';
							setTimeout(function(player){
								player.style.animation = '';
							}, 310, this)
							
						},
						
						$dieAfter:function(){
							// 阵亡后仍播放动皮
							// this.stopDynamic();
							
							if (!decadeUI.config.playerDieEffect) {
								if (base.lib.element.player.$dieAfter) base.lib.element.player.$dieAfter.apply(this, arguments);
								return;
							}
							
							if(!this.node.dieidentity) this.node.dieidentity = ui.create.div('died-identity', this);
							this.node.dieidentity.classList.add('died-identity');
							
							var that = this;
							var image = new Image();
							var identity = decadeUI.getPlayerIdentity(this);
							var url = extensionPath + 'image/decoration/dead_' + identity + '.png';
							image.onerror = function(){
								that.node.dieidentity.innerHTML = decadeUI.getPlayerIdentity(that, that.identity, true) + '<br>阵亡';
							};
							
							that.node.dieidentity.innerHTML = '';
							that.node.dieidentity.style.backgroundImage = 'url("' + url + '")';
							image.src = url;
							setTimeout(function(){
								var rect = that.getBoundingClientRect();
								decadeUI.animation.playSpine('effect_zhenwang', {
									x: rect.left + rect.width / 2 - 7,
									y: document.body.offsetHeight - rect.top - rect.height / 2 + 1,
									scale: 0.8,
								});
							}, 250);
						},
						
						$skill:function(name, type, color, avatar){
							if (!decadeUI.config.gameAnimationEffect || !decadeUI.animation.gl) return base.lib.element.player.$skill.apply(this, arguments);
							var _this = this;
							if (typeof type != 'string') type = 'legend';
							
							game.addVideo('skill', this, [name, type, color, avatar]);
							game.broadcastAll(function(player, type, name, color, avatar){
									if (window.decadeUI == void 0) {
										game.delay(2.5);
										if (name) player.$fullscreenpop(name, color, avatar);
										return;
									}
									
									decadeUI.delay(2500);
									if (name) decadeUI.effect.skill(player, name, avatar);
							}, _this, type, name, color, avatar);
						},
						
						// 显示扩展装备区状态时，同步更新装备栏布局
						$syncExpand: function (map) {
							if (base.lib.element.player.$syncExpand) base.lib.element.player.$syncExpand.apply(this, arguments);
							if (!lib.config['extension_十周年UI_equipLayout']) ui.arena.dataset.equipLayout = 'on'
						}
					},
					
				}
			};

			ride.ui = {
				updatec:function(){
					/*
					var controls = ui.control.childNodes;
					var stayleft;
					var offsetLeft;
					for (var i = 0; i < controls.length; i++) {
						if (!stayleft && controls[i].stayleft) {
							stayleft = controls[i];
						} else if (!offsetLeft) {
							offsetLeft = controls[i].offsetLeft;
						}
						
						if (stayleft && offsetLeft) break;
					}
					
					if (stayleft) {
						if (ui.$stayleft != stayleft) {
							stayleft._width = stayleft.offsetWidth
							ui.$stayleft = stayleft;
						}
						
						if (offsetLeft < stayleft._width) {
							stayleft.style.position = 'static';
						} else {
							stayleft.style.position = 'absolute';
						}
					}
					*/
				},
				
				updatej:function(player){
					if (!player) return;
				
					var judges = player.node.judges.childNodes;
					for (var i = 0; i < judges.length; i++){
						if (judges[i].classList.contains('removing'))
							continue;
						
						judges[i].classList.remove('drawinghidden');
						if (_status.connectMode) {
							if (judges[i].viewAs){
								judges[i].node.judgeMark.node.judge.innerHTML = get.translation(judges[i].viewAs)[0];
							} else {
								judges[i].node.judgeMark.node.judge.innerHTML = get.translation(judges[i].name)[0];
							}
						}
					}
				},
				
				updatem:function(player){
					// 不需要
				},
				
				updatez:function(){
					document.body.style.zoom = game.documentZoom;
					document.body.style.width = '100%';
					document.body.style.height = '100%';
					document.body.style.transform = '';
					// var width = document.documentElement.offsetWidth;
					// var height = document.documentElement.offsetHeight;
					// var zoom = game.documentZoom;
					// decadeUI.zooms.body = zoom;
					
					// if(zoom != 1){
						// width = Math.round(width / zoom);
						// height = Math.round(height / zoom);
						// document.body.style.width = width + 'px';
						// document.body.style.height = height + 'px'
						// document.body.style.zoom = zoom;
						// document.body.style.transform = '';
					// }else{
						// document.body.style.width = width + 'px';
						// document.body.style.height = height + 'px';
						// document.body.style.zoom = 1;
						// document.body.style.transform = '';
					// }
				},
				
				update:function(){
					for (var i = 0; i < ui.updates.length; i++) ui.updates[i]();
					if (ui.dialog == undefined || ui.dialog.classList.contains('noupdate')) return;
					if (game.chess) return base.ui.update();
	
					if ((!ui.dialog.buttons || !ui.dialog.buttons.length) && !ui.dialog.forcebutton && ui.dialog.classList.contains('fullheight') == false && get.mode() != 'stone') {
						ui.dialog.classList.add('prompt');
					} else {
						ui.dialog.classList.remove('prompt');
						ui.dialog.style.height = Math.min(decadeUI.get.bodySize().height * 0.6, ui.dialog.content.offsetHeight) + 'px';
					}
					
					if (!ui.dialog.forcebutton && !ui.dialog._scrollset) {
						ui.dialog.classList.remove('scroll1');
						ui.dialog.classList.remove('scroll2');
					} else {
						ui.dialog.classList.add('scroll1');
						ui.dialog.classList.add('scroll2');
					}
				},
				
				create:{
					rarity:function(button){
						// 可通过关闭本体选项-显示-显示武将评级开关关闭武将评级了，参考自萌新（转型中）修复版
						if (!lib.config.show_rarity) return;
						var rarity = game.getRarity(button.link);
						var intro = button.node.intro;
						intro.classList.add('showintro');
						intro.classList.add('rarity');
						if (intro.innerText)
							intro.innerText = '';
						
						intro.style.backgroundImage = 'url("' + decadeUIPath + 'assets/image/rarity_' + rarity + '.png")';
						/*if ((button.link == 'xushu' || button.link == 'xin_xushu' || button.link == 'jsrg_guanyu') && button.node && button.node.name && button.node.group){
							if (button.classList.contains('newstyle')) {
								button.node.name.dataset.nature = 'watermm';
								button.node.group.dataset.nature = 'water';
							} else {
								button.node.group.style.backgroundColor = get.translation('weiColor');
							}
						}*/
					},
					
					buttonPresets:{
						character:function(item, type, position, noclick, node){
							// if (type != 'character' && type != 'characterx') {
								// return base.ui.create.button.apply(this, arguments);
							// }
							
							if (node) {
								node.classList.add('button');
								node.classList.add('character');
								node.classList.add('decadeUI');
								node.style.display = '';
							} else {
								node = ui.create.div('.button.character.decadeUI',position);
							}
							
							node._link = item;
							if(_status.noReplaceCharacter&&type=='characterx') type='character';
							if(type=='characterx'){
								if(lib.characterReplace[item]&&lib.characterReplace[item].length) item=lib.characterReplace[item].randomGet();
							}
							
							node.link = item;
							// var doubleCamp = get.is.double(node._link, true);
							var character = dui.element.create('character', node);
							
							// if (doubleCamp) node._changeGroup = true;
							var double=get.is.double(node._link,true);
							if(double) node._changeGroup=true;
							if (type=='characterx' && lib.characterReplace[node._link] && lib.characterReplace[node._link].length > 1) {
								node._replaceButton = true;
							}
							
							var func = function(node, item){
								node.setBackground(item, 'character');
								if (node.node) {
									node.node.name.remove();
									node.node.hp.remove();
									node.node.group.remove();
									node.node.intro.remove();
									if (node.node.replaceButton) node.node.replaceButton.remove();
								}
								node.node = {
									name: decadeUI.element.create('name', node),
									hp: decadeUI.element.create('hp', node),
									group: decadeUI.element.create('identity', node),
									intro: decadeUI.element.create('intro', node),
								};
								var infoitem = lib.character[item];
								if (!infoitem) {
									for (var itemx in lib.characterPack) {
										if (lib.characterPack[itemx][item]) {
											infoitem = lib.characterPack[itemx][item];
											break;
										}
									}
								}
								
								node.node.name.innerHTML = get.slimName(item);
								if(lib.config.buttoncharacter_style=='default'||lib.config.buttoncharacter_style=='simple'){
									if(lib.config.buttoncharacter_style=='simple'){
										node.node.group.style.display='none';
									}
									// node.node.name.dataset.nature=get.groupnature(infoitem[1]);
									// node.node.group.dataset.nature=get.groupnature(infoitem[1],'raw');
									node.classList.add('newstyle');
									// if(double&&double.length){
										// node.node.name.dataset.nature=get.groupnature(double[0]);
										// node.node.group.dataset.nature=get.groupnature(double[double.length==2?1:0]);
									// }
									node.node.name.dataset.nature=get.groupnature(get.bordergroup(infoitem));
									node.node.group.dataset.nature=get.groupnature(get.bordergroup(infoitem),'raw');
									ui.create.div(node.node.hp);
									var hp=get.infoHp(infoitem[2]),maxHp=get.infoMaxHp(infoitem[2]),hujia=get.infoHujia(infoitem[2]);
									var str=get.numStr(hp);
									if(hp!=maxHp){
										str+='/';
										str+=get.numStr(maxHp);
									}
									var textnode=ui.create.div('.text',str,node.node.hp);
									if(infoitem[2]==0){
										node.node.hp.hide();
									}
									else if(get.infoHp(infoitem[2])<=3){
										node.node.hp.dataset.condition='mid';
									}
									else{
										node.node.hp.dataset.condition='high';
									}
									if(hujia>0){
										ui.create.div(node.node.hp,'.shield');
										ui.create.div('.text',get.numStr(hujia),node.node.hp);
									}
								}
								else{
									var hp=get.infoHp(infoitem[2]);
									var maxHp=get.infoMaxHp(infoitem[2]);
									var shield=get.infoHujia(infoitem[2]);
									if(maxHp>14){
										if(typeof infoitem[2]=='string') node.node.hp.innerHTML=infoitem[2];
										else node.node.hp.innerHTML=get.numStr(infoitem[2]);
										node.node.hp.classList.add('text');
									}
									else{
										for(var i=0;i<maxHp;i++){
											var next=ui.create.div('',node.node.hp);
											if(i>=hp) next.classList.add('exclude');
										}
										for(var i=0;i<shield;i++){
											ui.create.div(node.node.hp,'.shield');
										}
									}
								}
								if (node.node.hp.childNodes.length == 0) {
									node.node.name.style.top = '8px';
								}
								if (node.node.name.querySelectorAll('br').length >= 4) {
									node.node.name.classList.add('long');
									if (lib.config.buttoncharacter_style == 'old') {
										node.addEventListener('mouseenter', ui.click.buttonnameenter);
										node.addEventListener('mouseleave', ui.click.buttonnameleave);
									}
								}
								
								node.node.intro.innerHTML = lib.config.intro;
								if (!noclick) lib.setIntro(node);
								if (infoitem[1]) {
									// if (doubleCamp) {
										// var text = '';
										// if (doubleCamp.length == 2) {
											// for (var i = 0; i < doubleCamp.length; i++) text += get.translation(doubleCamp[i]);
										// } else {
											// text = get.translation(doubleCamp[0]);
										// }
										// node.node.group.innerText = text;
									// } else {
										// node.node.group.innerText = get.translation(infoitem[1]);
									// } 
									// node.node.group.style.backgroundColor = get.translation(infoitem[1] + 'Color');
									if(double){
										node.node.group.innerHTML=double.reduce((previousValue,currentValue)=>`${previousValue}<div data-nature="${get.groupnature(currentValue)}">${get.translation(currentValue)}</div>`,'');
										if(double.length>4) if(new Set([5,6,9]).has(double.length)) node.node.group.style.height='48px';
										else node.node.group.style.height='64px';
									}
									else node.node.group.innerHTML=`<div>${get.translation(infoitem[1])}</div>`;
									node.node.group.style.backgroundColor=get.translation(`${get.bordergroup(infoitem)}Color`);							
								} else {
									node.node.group.style.display = 'none';
								}
								if (node._replaceButton) {
									var intro = ui.create.div('.button.replaceButton', node);
									node.node.replaceButton = intro;
									intro.innerHTML = '切换';
									intro._node = node;
									intro.addEventListener(lib.config.touchscreen ? 'touchend': 'click', function() {
										_status.tempNoButton = true;
										var node = this._node;
										var list = lib.characterReplace[node._link];
										var link = node.link;
										var index = list.indexOf(link);
										if (index == list.length - 1) index = 0;
										else index++;
										link = list[index];
										node.link = link;
										node.refresh(node, link);
										setTimeout(function(_status) { _status.tempNoButton = undefined; }, 200, _status);
									});
								}
							};
							node.refresh=func;
							node.refresh(node, item);
							// if (!noclick) {
								// node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
							// } else {
								// node.classList.add('noclick');
								// if (node.querySelector('.intro')) {
									// node.querySelector('.intro').remove();
								// }
							// }
							
							// for (var i in lib.element.button) node[i] = lib.element.button[i];
							// if (position) position.appendChild(node);
							
							return node;
						},
					},
					
					buttons:function(list, type, position, noclick, zoom){
						var buttons = [];
						var pre=(typeof type=='string'&&type.slice(0,3)=='pre');
						if (pre) {
							if (!_status.prebutton) {
								_status.prebutton = [];
								lib.onfree.push(function(){
									for (var i = 0; i < _status.prebutton.length; i++) {
										if (_status.prebutton[i].activate) {
											_status.prebutton[i].activate();
										}
									}
									_status.prebutton = undefined;
								});
							}
						}
						
						var fragment = document.createDocumentFragment();
						for (var i = 0; i < list.length; i++) {
							if (pre) {
								buttons.push(fragment.appendChild(ui.create.prebutton(list[i], type.slice(3), null, noclick)));
							} else {
								buttons.push(fragment.appendChild(ui.create.button(list[i], type, null, noclick)));
							}
						}
						
						if (position && fragment.childElementCount) position.appendChild(fragment);
						
						fragment = undefined;
						return buttons;
					},
					
		/*			confirm:function(str, func){
						if (ui.confirm && ui.confirm.str == str) return;
						
						switch (str) {
							case 'o':
								if (ui.confirm) {
									ui.confirm.replace('ok');
								} else {
									ui.confirm = ui.create.control('ok');
								}
								break;
								
							case 'oc':
							case 'co':
								if (ui.confirm) {
									ui.confirm.replace('ok', 'cancel');
								} else {
									ui.confirm = ui.create.control('ok', 'cancel');
								}
								break;
								
							case 'c':
								if (ui.confirm) {
									ui.confirm.replace('cancel');
								} else {
									ui.confirm = ui.create.control('cancel');
								}
								break;
								
							default:
								if (ui.confirm) {
									ui.confirm.close();
									ui.confirm = undefined;
								}
								break;
						}
						
						if (ui.confirm) {
							ui.confirm.str = str;
							if (func) {
								ui.confirm.custom = func;
							} else {
								ui.confirm.custom = undefined;
							}
						}
					},
					*/
					control:function(){
						var i, controls;
						var nozoom = false;
						if (Array.isArray(arguments[0])) {
							controls = arguments[0];
						} else {
							controls = arguments;
						}
						
						var control = document.createElement('div');
						control.className = 'control';
						control.style.opacity = 1;
						
						// for (i in lib.element.control) control[i] = lib.element.control[i];
						// 适配新版本体
						Object.setPrototypeOf(control,lib.element.Control.prototype);
						
						for (i = 0; i < controls.length; i++) {
							if (typeof controls[i] == 'function') {
								control.custom = controls[i];
							} else if (controls[i] == 'nozoom') {
								nozoom = true;
							} else if (controls[i] == 'stayleft') {
								control.stayleft = true;
								control.classList.add('stayleft');
							} else {
								control.add(controls[i]);
							}
						}
						ui.controls.unshift(control);
						ui.control.insertBefore(control, _status.createControl || ui.confirm);
						control.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.control2);
						return control;
					},
					
					/*
					dialog:function(){
						var i;
						var hidden = false;
						var notouchscroll = false;
						var forcebutton = false;
						var noforcebutton=false;
						var dialog = decadeUI.element.create('dialog');
						dialog.contentContainer = decadeUI.element.create('content-container', dialog);
						dialog.content = decadeUI.element.create('content', dialog.contentContainer);
						// dialog.contentContainer = decadeUI.element.create('dui-container', dialog);
						// dialog.content = decadeUI.element.create('dui-content', dialog.contentContainer);
						dialog.buttons = [];
						for (i in lib.element.dialog) dialog[i] = lib.element.dialog[i];
						for (i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == 'boolean') dialog.static = arguments[i];
							else if (arguments[i] == 'hidden') hidden = true;
							else if (arguments[i] == 'notouchscroll') notouchscroll = true;
							else if (arguments[i] == 'forcebutton') forcebutton = true;
							else if(arguments[i]=='noforcebutton') noforcebutton=true;
							else dialog.add(arguments[i]);
						}
						if (!hidden) dialog.open();
						if (!lib.config.touchscreen) dialog.contentContainer.onscroll = ui.update;
						if (!notouchscroll) {
							dialog.contentContainer.ontouchstart = ui.click.dialogtouchStart;
							dialog.contentContainer.ontouchmove = ui.click.touchScroll;
							dialog.contentContainer.style.WebkitOverflowScrolling = 'touch';
							dialog.ontouchstart = ui.click.dragtouchdialog;
						}
						if(noforcebutton){
							dialog.noforcebutton=true;
						}
						else if (forcebutton) {
							dialog.forcebutton = true;
							dialog.classList.add('forcebutton');
						}
						return dialog;
					},
					*/
					
					selectlist:function(list, init, position, onchange){
						var select = document.createElement('select');
						for (var i = 0; i < list.length; i++) {
							var option = document.createElement('option');
							if (Array.isArray(list[i])) {
								option.value = list[i][0];
								option.innerText = list[i][1];
							} else {
								option.value = list[i];
								option.innerText = list[i];
							}
							if (init == option.value) option.selected = 'selected';
							select.appendChild(option);
						}
						if (position) position.appendChild(select);
						if (onchange) select.onchange = onchange;
						return select;
					},
				},
				
				click:{
					card:function(e){
						delete this._waitingfordrag;
						if (_status.dragged) return;
						if (_status.clicked) return;
						if (ui.intro) return;
						_status.clicked = true;
						if (this.parentNode && (this.parentNode.classList.contains('judges') || this.parentNode.classList.contains('dui-marks'))) {
							if (!(e && e instanceof MouseEvent)) {
								var rect = this.getBoundingClientRect();
								e = {
									clientX: (rect.left + 10) * game.documentZoom,
									clientY: (rect.top+ 10) * game.documentZoom,
								};
							}
							
							ui.click.touchpop();
							ui.click.intro.call(this, e);
							_status.clicked = false;
							return;
						}
						var custom = _status.event.custom;
						if (custom.replace.card) {
							custom.replace.card(this);
							return;
						}
						if (this.classList.contains('selectable') == false) return;
						if (this.classList.contains('selected')) {
							ui.selected.cards.remove(this);
							if (_status.multitarget || _status.event.complexSelect) {
								game.uncheck();
								game.check();
							} else {
								this.classList.remove('selected');
								this.updateTransform();
							}
						} else {
							ui.selected.cards.add(this);
							this.classList.add('selected');
							this.updateTransform(true);
						}
						if (game.chess && get.config('show_range') && !_status.event.skill && this.classList.contains('selected') && _status.event.isMine() && _status.event.name == 'chooseToUse') {
							var player = _status.event.player;
							var range = get.info(this).range;
							if (range) {
								if (typeof range.attack === 'number') {
									player.createRangeShadow(Math.min(8, player.getAttackRange(true) + range.attack - 1));
								} else if (typeof range.global === 'number') {
									player.createRangeShadow(Math.min(8, player.getGlobalFrom() + range.global));
								}
							}
						}
						if (custom.add.card) {
							custom.add.card();
						}
						game.check();

						if (lib.config.popequip && get.is.phoneLayout() && arguments[0] != 'popequip' && ui.arena && ui.arena.classList.contains('selecting') && this.parentNode.classList.contains('popequip')) {
							var rect = this.getBoundingClientRect();
							ui.click.touchpop();
							ui.click.intro.call(this.parentNode, {
								clientX: rect.left + 18,
								clientY: rect.top + 12
							});
						}
					},
				},
				
				
			};
			
			ride.game = {
				addOverDialog:function(dialog, result){
					var sprite = decadeUI.backgroundAnimation.current;
					if (!(sprite && (sprite.name == 'skin_xiaosha_default'||sprite.name == 'skin_ahao_default'||sprite.name == 'skin_ale_default'||sprite.name == 'skin_datong_default'||sprite.name == 'skin_liuli_default'||sprite.name == 'skin_lulu_default'||sprite.name == 'skin_manman_default'||sprite.name == 'skin_rui_default'||sprite.name == 'skin_xiaoxiao_default'||sprite.name == 'skin_xuanwu_default'||sprite.name == 'skin_xueren_default'||sprite.name == 'skin_yan_default'||sprite.name == 'skin_yueer_default'))) return;
					
					decadeUI.backgroundAnimation.canvas.style.zIndex = 7;
					switch (result) {
						case '战斗胜利':
							if (sprite.name == 'skin_xiaosha_default'){
								sprite.setAction('shengli');
							}
							if (sprite.name == 'skin_ahao_default'){
								sprite.setAction('daiji3');
							}
							if (sprite.name == 'skin_ale_default'){
								sprite.setAction('jinnang1');
							}
							if (sprite.name == 'skin_datong_default'){
								sprite.setAction('jinnang1');
							}
							if (sprite.name == 'skin_liuli_default'){
								sprite.setAction('daiji2');
							}
							if (sprite.name == 'skin_lulu_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_manman_default'){
								sprite.setAction('daiji3');
							}
							if (sprite.name == 'skin_rui_default'){
								sprite.setAction('daiji2');
							}
							if (sprite.name == 'skin_xiaoxiao_default'){
								sprite.setAction('daiji3');
							}
							if (sprite.name == 'skin_xuanwu_default'){
								sprite.setAction('jinnang1');
							}
							if (sprite.name == 'skin_xueren_default'){
								sprite.setAction('daiji2');
							}
							if (sprite.name == 'skin_yan_default'){
								sprite.setAction('jinnang1');
							}
							if (sprite.name == 'skin_yueer_default'){
								sprite.setAction('jinnang1');
							}
							break;
						case '平局':
						case '战斗失败':
							if (sprite.name == 'skin_xiaosha_default'){
								sprite.setAction('gongji');
							}
							if (sprite.name == 'skin_ahao_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_ale_default'){
								sprite.setAction('shouji2');
							}
							if (sprite.name == 'skin_datong_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_liuli_default'){
								sprite.setAction('shouji2');
							}
							if (sprite.name == 'skin_lulu_default'){
								sprite.setAction('gongji1');
							}
							if (sprite.name == 'skin_manman_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_rui_default'){
								sprite.setAction('jinnang1');
							}
							if (sprite.name == 'skin_xiaoxiao_default'){
								sprite.setAction('shouji2');
							}
							if (sprite.name == 'skin_xuanwu_default'){
								sprite.setAction('gongji1');
							}
							if (sprite.name == 'skin_xueren_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_yan_default'){
								sprite.setAction('shouji1');
							}
							if (sprite.name == 'skin_yueer_default'){
								sprite.setAction('shouji1');
							}
							break;
					}
				},
				
				expandSkills:function(skills){
					var expands = [];
					var info;
					for(var i = 0; i < skills.length; i++){
						info = get.info(skills[i]);
						if (info) {
							if(info.group) {
								expands.add(info.group);
							}
						} else{
							console.log(skills[i]);
						}
					}
					
					var i, j;
					for (i = 0; i < expands.length; i++) {
						if (Array.isArray(expands[i])) {
							for (j = 0; j < expands[i].length; j++) {
								skills.add(expands[i][j]);
							}
						} else {
							skills.add(expands[i]);
						}
					}
					return skills;
				},
				
				gameDraw:function(){
					decadeUI.delay(100);
					return base.game.gameDraw.apply(game, arguments);
				},
				
				/*
				loop:function(){
					if (game.loopLocked) return;
					if (decadeUI.eventDialog) {
						decadeUI.game.wait();
						return;
					}
					
					game.loopLocked = true;
					var loop;
					do {
						loop = decadeUI.game.loop(_status);
						game.looping = false;
					} while (loop);
					game.loopLocked = false;
				},
				*/
			};
			
			ride.get = {
				objtype:function(obj){
					obj = Object.prototype.toString.call(obj);
					switch (obj) {
						case '[object Array]':
							return 'array';
						case '[object Object]':
							return 'object';
						case '[object HTMLDivElement]':
							return 'div';
						case '[object HTMLTableElement]':
							return 'table';
						case '[object HTMLTableRowElement]':
							return 'tr';
						case '[object HTMLTableCellElement]':
							return 'td';
						case '[object HTMLBodyElement]':
							return 'td';
					}
				},
			}
			
			override(lib, ride.lib);
			override(ui, ride.ui);
			override(game, ride.game);
			override(get, ride.get);
			
			decadeUI.get.extend(decadeUI, duilib);
			if (decadeModule.modules)
				for (var i = 0; i < decadeModule.modules.length; i++)
					decadeModule.modules[i](lib, game, ui, get, ai, _status);

			var getNodeIntro = get.nodeintro;
			var gameLinexyFunction = game.linexy;
		    var gameUncheckFunction = game.uncheck;
			var swapControlFunction = game.swapControl;
		    var swapPlayerFunction = game.swapPlayer;
			var baseChooseCharacter = game.chooseCharacter;
		    var createArenaFunction = ui.create.arena;
			var createPauseFunction = ui.create.pause;
			var createMenuFunction = ui.create.menu;
			var initCssstylesFunction = lib.init.cssstyles;
			var initLayoutFunction = lib.init.layout;
			
			var cardCopyFunction = lib.element.card.copy;
			var playerInitFunction = lib.element.player.init;
			var playerUninitFunction = lib.element.player.uninit;
			var playerAddSkillFunction = lib.element.player.addSkill;
			var playerRemoveSkillFunction = lib.element.player.removeSkill
			var playerUpdateFunction = lib.element.player.update;
			var playerChooseTargetFunction = lib.element.player.chooseTarget;
			var playerThrowFunction = lib.element.player.$throw;
			var playerDrawFunction = lib.element.player.$draw;
			var playerDieFlipFunction = lib.element.player.$dieflip;
			
			
			ui.updatehl = decadeUI.layout.updateHand;
			
			ui.updatejm = function (player, nodes, start, inv) {
				if (typeof start != 'number') start = 0;
				
				for (var i = 0; i < nodes.childElementCount; i++) {
					var node = nodes.childNodes[i];
					if (i < start) {
						node.style.transform = '';
					} else if (node.classList.contains('removing')) {
						start++;
					} else {
						// ui.refresh(node);
						node.classList.remove('drawinghidden');
						// node._transform = 'translateY(' + ((i - start) * 28) + 'px)';
						// node.style.transform = node._transform;
						// 采用新布局了
					}
				}
			};
			
			ui.updatexr = function(){
				if (ui._updatexr) {
					clearTimeout(ui._updatexr);
				}
				
				ui._updatexr = setTimeout(ui.updatex, 100);
			};
			
			
			document.body.onresize = ui.updatexr;

			
			get.infoHp = function(hp){
				if (typeof hp == 'number') {
					return hp;
				} else if (typeof hp == 'string') {
					var index = hp.indexOf('/');
					if (index >= 0) hp = hp.slice(0, hp.indexOf('/'));
					if (hp == 'Infinity' || hp == '∞') {
						return Infinity;
					} else {
						return parseInt(hp);
					}
						
				}

				return 0;
			};
			
			get.infoMaxHp = function(hp){
				if (typeof hp == 'number') {
					return hp;
				} else if (typeof hp == 'string') {
					var index = hp.indexOf('/');
					if (index >= 0) hp = hp.slice(hp.indexOf('/') + 1);
					if (hp == 'Infinity' || hp == '∞') {
						return Infinity;
					} else {
						return parseInt(hp);
					}
						
				}

				return 0;
			};
			
			get.skillState = function(player){
				var skills = base.get.skillState.apply(this, arguments);
				if (game.me != player) {
					var global = skills.global = skills.global.concat();
					for (var i = global.length - 1; i >= 0; i--) {
						if (global[i].indexOf('decadeUI') >= 0) global.splice(i, 1);
					}
				}
				
				return skills;
			};
			
			
if(!(lib.config.extensions.contains("手杀ui")&&lib.config.extension_手杀ui_enable)){
			game.updateRoundNumber = function(){
				game.broadcastAll(function(num1, num2, top) {
					_status.pileTop = top;
					if (ui.cardPileNumber && window.decadeUI) ui.cardPileNumber.innerHTML = '牌堆' + num2 + ' 第' + num1 + '轮';
					else if (ui.cardPileNumber) ui.cardPileNumber.innerHTML = num1 + '轮 剩余牌: ' + num2;
				}, game.roundNumber, ui.cardPile.childNodes.length, ui.cardPile.firstChild);
			};
}
			
			// 挑战模式无座位号，本函数的座位号在关卡更新后/交换座位后会出错，介意的可临时注释掉此代码，待修复后再添加
			game.bossPhaseLoop = function(){
				game.broadcastAll(function(firstAction){
					var cur;
					for (var i = 0; i < game.players.length; i++) {
						cur = game.players[i];
						if (!cur.node.seat) cur.node.seat = decadeUI.element.create('seat', cur);
						cur.node.seat.innerHTML = get.cnNumber(get.distance(firstAction, cur, 'absolute') + 1, true);
					}
				}, game.boss);
				
				return base.game.bossPhaseLoop.apply(this, arguments);
			};
			
			game.phaseLoop = function(player){
				game.broadcastAll(function(firstAction){
					var cur;
					for (var i = 0; i < game.players.length; i++) {
						cur = game.players[i];
						if (!cur.node.seat) cur.node.seat = decadeUI.element.create('seat', cur);
						
						cur.seat = cur.getSeatNum();
						cur.node.seat.innerHTML = get.cnNumber(cur.seat, true);
					}
				}, player);
				
				return base.game.phaseLoop.apply(this, arguments);
			};
			game.swapSeat = function(player1,player2,prompt,behind,noanimate){
				base.game.swapSeat.apply(this,arguments);
				player1.seat = player1.getSeatNum();
				if(player1.node.seat)player1.node.seat.innerHTML = get.cnNumber(player1.seat, true);
				player2.seat = player2.getSeatNum();
				if(player2.node.seat)player2.node.seat.innerHTML = get.cnNumber(player2.seat, true);
			};
			
			lib.config.low_performance = true;

			game.check = function(event){
				var i, j, range;
				if (event == undefined) event = _status.event;
				event._checked=true;
				var custom = event.custom || {};
				var ok = true,
				auto = true;
				var player = event.player;
				var auto_confirm = lib.config.auto_confirm;
				var players = game.players.slice(0);
				if (event.deadTarget) players.addArray(game.dead);
				if (!event.filterButton && !event.filterCard && !event.filterTarget && (!event.skill || !event._backup)) {
					if (event.choosing) {
						_status.imchoosing = true;
					}
					return;
				}
				player.node.equips.classList.remove('popequip');
				if (event.filterButton) {
					var dialog = event.dialog;
					range = get.select(event.selectButton);
					var selectableButtons = false;
					if (event.forceAuto && ui.selected.buttons.length == range[1]) auto = true;
					else if (range[0] != range[1] || range[0] > 1) auto = false;
					for (i = 0; i < dialog.buttons.length; i++) {
						if (dialog.buttons[i].classList.contains('unselectable')) continue;
						if (event.filterButton(dialog.buttons[i], player) && lib.filter.buttonIncluded(dialog.buttons[i])) {
							if (ui.selected.buttons.length < range[1]) {
								dialog.buttons[i].classList.add('selectable');
							} else if (range[1] <= -1) {
								dialog.buttons[i].classList.add('selected');
								ui.selected.buttons.add(dialog.buttons[i]);
							} else {
								dialog.buttons[i].classList.remove('selectable');
							}
						} else {
							dialog.buttons[i].classList.remove('selectable');
							if (range[1] <= -1) {
								dialog.buttons[i].classList.remove('selected');
								ui.selected.buttons.remove(dialog.buttons[i]);
							}
						}
						if (dialog.buttons[i].classList.contains('selected')) {
							dialog.buttons[i].classList.add('selectable');
						} else if (!selectableButtons && dialog.buttons[i].classList.contains('selectable')) {
							selectableButtons = true;
						}
					}
					if (ui.selected.buttons.length < range[0]) {
						if (!event.forced || selectableButtons) {
							ok = false;
						}
						if (event.complexSelect || event.getParent().name == 'chooseCharacter' || event.getParent().name == 'chooseButtonOL') {
							ok = false;
						}
					}
					if (custom.add.button) {
						custom.add.button();
					}
				}
				if (event.filterCard) {
					if (ok == false) {
						game.uncheck('card');
					} else {
						var cards = player.getCards(event.position);
						var firstCheck = false;
						range = get.select(event.selectCard);
						if (!event._cardChoice && typeof event.selectCard != 'function' && !event.complexCard && range[1] > -1 && !lib.config.compatiblemode) {
							event._cardChoice = [];
							firstCheck = true;
						}
						if (event.isMine() && event.name == 'chooseToUse' && event.parent.name == 'phaseUse' && !event.skill && !event._targetChoice && !firstCheck && window.Map && !lib.config.compatiblemode) {
							event._targetChoice = new Map();
							for (var i = 0; i < event._cardChoice.length; i++) {
								if (!lib.card[event._cardChoice[i].name].complexTarget) {
									var targets = [];
									for (var j = 0; j < players.length; j++) {
										if (event.filterTarget(event._cardChoice[i], player, players[j])) {
											targets.push(players[j]);
										}
									}
									event._targetChoice.set(event._cardChoice[i], targets);
								}
							}
						}
						
						var selectableCards = false;
						if (range[0] != range[1] || range[0] > 1) auto = false;
						for (i = 0; i < cards.length; i++) {
							if (lib.config.cardtempname != 'off') {
								var cardname = get.name(cards[i]);
								var cardnature = get.nature(cards[i]);
								var cardsuit = get.suit(cards[i]);
								var cardnumber = get.number(cards[i]);
								// 特殊区域（如木牛流马）内的牌不加标签
								if (get.position(cards[i]) != 's' && ((cards[i].name != cardname) || (!get.is.sameNature(cardnature,cards[i].nature,true)) || (cards[i].suit!=cardsuit) || (cards[i].number!=cardnumber))) {
									if (!cards[i]._tempName) cards[i]._tempName = ui.create.div('.temp-name', cards[i]);
									var tempname = '';
									if(cards[i].suit!=cardsuit){
										var suitData = {
											'heart':"<span style='color:red;font-family:shousha'>♥</span>",
											'diamond':"<span style='color:red;font-family:shousha'>♦</span>",
											'spade':"<span style='color:black;font-family:shousha'>♠</span>",
											'club':"<span style='color:black;font-family:shousha'>♣</span>",
											'none':"无色",
											'undefined':"",
										};
										tempname += suitData[cardsuit];
									}
									if(cards[i].number!=cardnumber){
										var numberData = {
											'1': "A",
											'11': "J",
											'12': "Q",
											'13': "K",
											'undefined':"",
											'null':"",
										};
										tempname += numberData[cardnumber];
									}
									if((cards[i].name != cardname) || (!get.is.sameNature(cardnature,cards[i].nature,true))){
										var tempname2 = get.translation(cardname);
										// 若带花色/点数牌的标签字符总长度大于4且牌名翻译字符长度大于2，则牌名翻译保留前2个字符
										if(((cards[i].suit!=cardsuit)||(cards[i].number!=cardnumber)) && tempname.length+tempname2.length>4 && tempname2.length>2) {tempname2=tempname2.substring(0,2);}
										if (cardnature) {
											cards[i]._tempName.dataset.nature = cardnature;
											if (cardname == 'sha') {
												tempname2 = get.translation(cardnature) + tempname2;
											}
										}
										tempname += "<b> </b>"+tempname2;
									}
									
									cards[i]._tempName.innerHTML = tempname;
									cards[i]._tempName.tempname = tempname;
								}
							}
							
							var nochess = true;
							if (!lib.filter.cardAiIncluded(cards[i])) {
								nochess = false;
							} else if (event._cardChoice && !firstCheck) {
								if (!event._cardChoice.contains(cards[i])) {
									nochess = false;
								}
							} else {
								if (player.isOut() || !lib.filter.cardRespondable(cards[i], player) || cards[i].classList.contains('uncheck') || !event.filterCard(cards[i], player)) {
									nochess = false;
								}
							}
							if (nochess) {
								if (ui.selected.cards.length < range[1]) {
									cards[i].classList.add('selectable');
									if (event._cardChoice && firstCheck) {
										event._cardChoice.push(cards[i]);
									}
								} else if (range[1] <= -1) {
									cards[i].classList.add('selected');
									cards[i].updateTransform(true);
									ui.selected.cards.add(cards[i]);
								} else {
									cards[i].classList.remove('selectable');
								}
							} else {
								cards[i].classList.remove('selectable');
								if (range[1] <= -1) {
									cards[i].classList.remove('selected');
									cards[i].updateTransform();
									ui.selected.cards.remove(cards[i]);
								}
							}
							if (cards[i].classList.contains('selected')) {
								cards[i].classList.add('selectable');
							} else if (!selectableCards && cards[i].classList.contains('selectable')) {
								selectableCards = true;
							}
						}
						if (ui.selected.cards.length < range[0]) {
							if (!event.forced || selectableCards || event.complexSelect) {
								ok = false;
							}
						}

						// if (lib.config.popequip && get.is.phoneLayout() && typeof event.position == 'string' && event.position.indexOf('e') != -1 && player.node.equips.querySelector('.card.selectable')) {
							// player.node.equips.classList.add('popequip');
							// auto_confirm = false;
						// }
					}
					if (custom.add.card) {
						custom.add.card();
					}
				}
				if (event.filterTarget) {
					if (ok == false) {
						game.uncheck('target');
					} else {
						var card = get.card();
						var firstCheck = false;
						range = get.select(event.selectTarget);
						var selectableTargets = false;
						if (range[0] != range[1] || range[0] > 1) auto = false;
						for (i = 0; i < players.length; i++) {
							var nochess = true;
							if (game.chess && !event.chessForceAll && player && get.distance(player, players[i], 'pure') > 7) {
								nochess = false;
							} else if (players[i].isOut()) {
								nochess = false;
							} else if (event._targetChoice && event._targetChoice.has(card)) {
								var targetChoice = event._targetChoice.get(card);
								if (!Array.isArray(targetChoice) || !targetChoice.contains(players[i])) {
									nochess = false;
								}
							} else if (!event.filterTarget(card, player, players[i])) {
								nochess = false;
							}
							if (nochess) {
								if (ui.selected.targets.length < range[1]) {
									players[i].classList.add('selectable');
									if (Array.isArray(event._targetChoice)) {
										event._targetChoice.push(players[i]);
									}
								} else if (range[1] <= -1) {
									players[i].classList.add('selected');
									ui.selected.targets.add(players[i]);
								} else {
									players[i].classList.remove('selectable');
								}
							} else {
								players[i].classList.remove('selectable');
								if (range[1] <= -1) {
									players[i].classList.remove('selected');
									ui.selected.targets.remove(players[i]);
								}
							}
							
							if (players[i].classList.contains('selected')) {
								players[i].classList.add('selectable');
							} else if (!selectableTargets && players[i].classList.contains('selectable')) {
								selectableTargets = true;
							}
							
							if (players[i].classList.contains('selected') || players[i].classList.contains('selectable')) {
								players[i].classList.remove('un-selectable');
							} else {
								players[i].classList.add('un-selectable');
							}
							
							if (players[i].instance) {
								if (players[i].classList.contains('selected')) {
									players[i].instance.classList.add('selected');
								} else {
									players[i].instance.classList.remove('selected');
								}
								if (players[i].classList.contains('selectable')) {
									players[i].instance.classList.add('selectable');
								} else {
									players[i].instance.classList.remove('selectable');
								}
							}
						}
						if (ui.selected.targets.length < range[0]) {
							if (!event.forced || selectableTargets || event.complexSelect) {
								ok = false;
							}
						}
						if (range[1] <= -1 && ui.selected.targets.length == 0 && event.targetRequired) {
							ok = false;
						}
					}
					if (custom.add.target) {
						custom.add.target();
					}
				}
				if (!event.skill && get.noSelected() && !_status.noconfirm) {
					var skills = [],
					enable,
					info;
					var skills2;
					if (event._skillChoice) {
						skills2 = event._skillChoice;
						for (var i = 0; i < skills2.length; i++) {
							if (event.isMine() || !event._aiexclude.contains(skills2[i])) {
								skills.push(skills2[i]);
							}
						}
					} else {
						var skills2;
						if (get.mode() == 'guozhan' && player.hasSkillTag('nomingzhi', false, null, true)) {
							skills2 = player.getSkills(false, true, false);
						} else {
							skills2=player.getSkills('invisible',true,false);
						}
						skills2 = game.filterSkills(skills2.concat(lib.skill.global), player, player.getSkills('e').concat(lib.skill.global));
						event._skillChoice = [];
						game.expandSkills(skills2);
						for (i = 0; i < skills2.length; i++) {
							info = get.info(skills2[i]);
							enable = false;
							if (typeof info.enable == 'function') enable = info.enable(event);
							else if(Array.isArray(info.enable)) enable = info.enable.contains(event.name);
							else if (info.enable == 'phaseUse') enable = (event.type == 'phase');
							else if (typeof info.enable == 'string') enable = (info.enable == event.name);
							
							if (enable) {
								if(!game.expandSkills(player.getSkills(false).concat(lib.skill.global)).contains(skills2[i])&&(info.noHidden||get.mode()!='guozhan'||player.hasSkillTag('nomingzhi',false,null,true))) enable=false;
								if(info.filter && !info.filter(event,player)) enable=false;
								if (info.viewAs && typeof info.viewAs != 'function' && event.filterCard && !event.filterCard(info.viewAs, player, event)) enable = false;
								if (info.viewAs && typeof info.viewAs != 'function' && info.viewAsFilter && info.viewAsFilter(player) == false) enable = false;
								
								if (info.usable && get.skillCount(skills2[i]) >= info.usable) enable = false;
								if (info.chooseButton && _status.event.noButton) enable = false;
								if (info.round && (info.round - (game.roundNumber - player.storage[skills2[i] + '_roundcount']) > 0)) enable = false;
								if(player.storage[`temp_ban_${skills2[i]}`]===true) enable=false;
							}
							
							if (enable) {
								if (event.isMine() || !event._aiexclude.contains(skills2[i])) {
									skills.add(skills2[i]);
								}
								event._skillChoice.add(skills2[i]);
							}
						}
					}

					var globalskills = [];
					var globallist = lib.skill.global.slice(0);
					game.expandSkills(globallist);
					for (var i = 0; i < skills.length; i++) {
						if (globallist.contains(skills[i])) {
							globalskills.push(skills.splice(i--, 1)[0]);
						}
					}
					var equipskills = [];
					var ownedskills=player.getSkills('invisible',false);
					game.expandSkills(ownedskills);
					for (var i = 0; i < skills.length; i++) {
						if (!ownedskills.contains(skills[i])) {
							equipskills.push(skills.splice(i--, 1)[0]);
						}
					}
					if (equipskills.length) {
						ui.create.skills3(equipskills);
					} else if (ui.skills3) {
						ui.skills3.close();
					}
					if (skills.length) {
						ui.create.skills(skills);
					} else if (ui.skills) {
						ui.skills.close();
					}
					if (globalskills.length) {
						ui.create.skills2(globalskills);
					} else if (ui.skills2) {
						ui.skills2.close();
					}
				} else {
					if (ui.skills) {
						ui.skills.close()
					}
					if (ui.skills2) {
						ui.skills2.close()
					}
					if (ui.skills3) {
						ui.skills3.close()
					}
				}
				_status.multitarget = false;
				var skillinfo = get.info(_status.event.skill);
				if (_status.event.name == 'chooseToUse') {
					if (skillinfo && skillinfo.multitarget && !skillinfo.multiline) {
						_status.multitarget = true;
					}
					if ((skillinfo && skillinfo.viewAs && typeof skillinfo.viewAs != 'function') || !_status.event.skill) {
						var cardinfo = get.info(get.card());
						if (cardinfo && (cardinfo.multitarget||cardinfo.complexSelect) && !cardinfo.multiline) {
							_status.multitarget = true;
						}
					}
				} else if (_status.event.multitarget) {
					_status.multitarget = true;
				}
				if (event.isMine()) {
					if (game.chess && game.me && get.config('show_distance')) {
						for (var i = 0; i < players.length; i++) {
							if (players[i] == game.me) {
								players[i].node.action.hide();
							} else {
								players[i].node.action.show();
								var dist = get.distance(game.me, players[i], 'pure');
								var dist2 = get.distance(game.me, players[i]);
								players[i].node.action.innerHTML = '距离：' + dist2 + '/' + dist;
								if (dist > 7) {
									players[i].node.action.classList.add('thunder');
								} else {
									players[i].node.action.classList.remove('thunder');
								}
							}
						}
					}
					if (ok && (!event.filterOk || event.filterOk()) && auto && (auto_confirm || (skillinfo && skillinfo.direct)) && (!_status.mousedragging || !_status.mouseleft) && !_status.mousedown && !_status.touchnocheck) {
						if (ui.confirm) {
							if (!skillinfo || !skillinfo.preservecancel) {
								ui.confirm.close();
							}
						}
						if (skillinfo && skillinfo.preservecancel && !ui.confirm) {
							ui.create.confirm('c');
						}
						if (event.skillDialog == true) event.skillDialog = false;
						ui.click.ok();
						_status.mousedragging = null;
					} else {
						ui.arena.classList.add('selecting');
						if (event.filterTarget && (!event.filterCard || !event.position || (typeof event.position == 'string' && event.position.indexOf('e') == -1))) {
							ui.arena.classList.add('tempnoe');
						}
						game.countChoose();
						if (!_status.noconfirm && !_status.event.noconfirm) {
							if (!_status.mousedown || _status.mouseleft) {
								var str = '';
								if (ok && (!event.filterOk || event.filterOk())) str += 'o';
								if (!event.forced && !event.fakeforce && get.noSelected()) str += 'c';
								ui.create.confirm(str);
							}
						}
					}
					if (ui.confirm && ui.confirm.lastChild.link == 'cancel') {
						if (_status.event.type == 'phase' && !_status.event.skill) {
							ui.confirm.lastChild.innerHTML = '结束';
						} else {
							ui.confirm.lastChild.innerHTML = '取消';
						}
					}
				}
				return ok;
			};
			
			game.uncheck = function(){
				var i, j;
				if (game.chess) {
					var shadows = ui.chessContainer.getElementsByClassName('playergrid temp');
					while (shadows.length) {
						shadows[0].remove();
					}
				}
				
				var args = new Array(arguments.length);
				for (var i = 0; i < args.length; i++) args[i] = arguments[i];
				if ((args.length == 0 || args.contains('card')) && _status.event.player) {
					var cards = _status.event.player.getCards('hejsx');
					for (j = 0; j < cards.length; j++) {
						cards[j].classList.remove('selected');
						cards[j].classList.remove('selectable');
						if (cards[j]._tempName) {
							//cards[j]._tempName.textContent = '';
							// cards[j]._tempName.innerHTML = '';
							cards[j]._tempName.delete();
							delete cards[j]._tempName;
						}
						cards[j].updateTransform();
					}
					ui.selected.cards.length = 0;
					_status.event.player.node.equips.classList.remove('popequip');
				}
				var players = game.players.slice(0);
				if (_status.event.deadTarget) players.addArray(game.dead);
				if ((args.length == 0 || args.contains('target'))) {
					for (j = 0; j < players.length; j++) {
						players[j].classList.remove('selected');
						players[j].classList.remove('selectable');
						players[j].classList.remove('un-selectable');
						if (players[j].instance) {
							players[j].instance.classList.remove('selected');
							players[j].instance.classList.remove('selectable');
						}
					}
					ui.selected.targets.length = 0;
				}
				if ((args.length == 0 || args.contains('button')) && _status.event.dialog && _status.event.dialog.buttons) {
					for (j = 0; j < _status.event.dialog.buttons.length; j++) {
						_status.event.dialog.buttons[j].classList.remove('selectable');
						_status.event.dialog.buttons[j].classList.remove('selected');
					}
					ui.selected.buttons.length = 0;
				}
				if (args.length == 0) {
					ui.arena.classList.remove('selecting');
					ui.arena.classList.remove('tempnoe');
					_status.imchoosing = false;
					_status.lastdragchange.length = 0;
					_status.mousedragging = null;
					_status.mousedragorigin = null;

					while (ui.touchlines.length) {
						ui.touchlines.shift().delete();
					}
				}
				// ui.canvas.width = ui.arena.offsetWidth;
				// ui.canvas.height = ui.arena.offsetHeight;
				for (var i = 0; i < players.length; i++) {
					players[i].unprompt();
				}
				for (var i = 0; i < _status.dragline.length; i++) {
					if (_status.dragline[i]) _status.dragline[i].remove();
				}
				ui.arena.classList.remove('dragging');
				_status.dragline.length = 0;
			};
			
			game.swapPlayer = function(player, player2){
			    var result = swapPlayerFunction.call(this, player, player2);
    			// if (game.me && game.me != ui.equipSolts.me) {
			        // ui.equipSolts.me.appendChild(ui.equipSolts.equips);
			        // ui.equipSolts.me = game.me;
				    // ui.equipSolts.equips = game.me.node.equips;
					// ui.equipSolts.appendChild(game.me.node.equips);
			    // }
			    
			    return result;
			};
			
			game.swapControl = function(player){
    			var result = swapControlFunction.call(this, player);
    			// if (game.me && game.me != ui.equipSolts.me) {
			        // ui.equipSolts.me.appendChild(ui.equipSolts.equips);
			        // ui.equipSolts.me = game.me;
				    // ui.equipSolts.equips = game.me.node.equips;
					// ui.equipSolts.appendChild(game.me.node.equips);
			    // }
			    return result;
			};
			
			game.linexy = function(path){
				if (!decadeUI.config.playerLineEffect) return gameLinexyFunction.apply(this, arguments);
				decadeUI.effect.line(path);
			};
			
			ui.click.intro = function(e){
				if (this.classList.contains('infohidden') || _status.dragged) return;
                _status.clicked = true;
                if (this.classList.contains('player') && !this.name) return;
                if (this.parentNode == ui.historybar){
                    if (ui.historybar.style.zIndex == '22'){
                        if (_status.removePop){
                            if (_status.removePop(this) == false) return;
                        } else {
                            return;
                        }
                    }
                    ui.historybar.style.zIndex = 22;
                }
				
                var uiintro = uiintro || get.nodeintro(this, false, e);
                if (!uiintro) return;
                uiintro.classList.add('popped');
                uiintro.classList.add('static');
                ui.window.appendChild(uiintro);
                var layer = ui.create.div('.poplayer', ui.window);
                var clicklayer = function(e){
                    if (_status.touchpopping) return;
                    delete _status.removePop;
                    uiintro.delete();
                    this.remove();
                    ui.historybar.style.zIndex = '';
                    delete _status.currentlogv;
                    if (!ui.arena.classList.contains('menupaused') && !uiintro.noresume) game.resume2();
                    if (e && e.stopPropagation) e.stopPropagation();
                    if (uiintro._onclose){
                        uiintro._onclose();
                    }
                    return false;
                };
                
                layer.addEventListener(lib.config.touchscreen ? 'touchend': 'click', clicklayer);
                if (!lib.config.touchscreen) layer.oncontextmenu = clicklayer;
                if (this.parentNode == ui.historybar && lib.config.touchscreen){
                    var rect = this.getBoundingClientRect();
                    e = {
                        clientX: 0,
                        clientY: rect.top + 30
                    };
                }
				
				lib.placePoppedDialog(uiintro, e, this);
				if (this.parentNode == ui.historybar){
					if (lib.config.show_history == 'right'){
						uiintro.style.left = (ui.historybar.offsetLeft - 230) + 'px';
					} else {
						uiintro.style.left = (ui.historybar.offsetLeft + 60) + 'px';
					}
				}
				
				uiintro.style.zIndex = 21;
                var clickintro = function(){
                    if (_status.touchpopping) return;
                    delete _status.removePop;
                    layer.remove();
                    this.delete();
                    ui.historybar.style.zIndex = '';
                    delete _status.currentlogv;
                    if (!ui.arena.classList.contains('menupaused') && !uiintro.noresume) game.resume2();
                    if (uiintro._onclose){
                        uiintro._onclose();
                    }
                };
                var currentpop = this;
                _status.removePop = function(node){
                    if (node == currentpop) return false;
                    layer.remove();
                    uiintro.delete();
                    _status.removePop = null;
                    return true;
                };
                if (uiintro.clickintro){
                    uiintro.listen(function(){
                        _status.clicked = true;
                    });
                    uiintro._clickintro = clicklayer;
                } else if (!lib.config.touchscreen){
                    uiintro.addEventListener('mouseleave', clickintro);
                    uiintro.addEventListener('click', clickintro);
                } else if (uiintro.touchclose){
                    uiintro.listen(clickintro);
                }
                uiintro._close = clicklayer;
            
                game.pause2();
                return uiintro;
            };
            
            ui.click.identity = function(e){
                if (_status.dragged || !game.getIdentityList || _status.video || this.parentNode.forceShown) return;
				_status.clicked = true;
                var identityList = game.getIdentityList(this.parentNode);
                if (!identityList) return;
				
				if (lib.config.mark_identity_style == 'click') {
					var getNext = false;
					var theNext;
					var key;
					var current = this.firstChild.innerText;
					
					for (key in identityList) {
						if (theNext == null || getNext) {
							theNext = key;
							if (getNext) break;
						}
						
						if (current == identityList[key]) getNext = true;
					}
					
					this.parentNode.setIdentity(theNext);
					
                } else {
                    if (get.mode() == 'guozhan') {
                        identityList = {
                            wei: '魏',
                            shu: '蜀',
                            wu: '吴',
                            qun: '群',
							jin: '晋',
							ye: '野',
							unknown: '未知',
                        };
						if (_status.forceKey) identityList.key = '键';
                    }
                    
					if (!dui.$identityMarkBox) {
						dui.$identityMarkBox = decadeUI.element.create('identity-mark-box');
						
						// 国战势力标记框位置调整
						if (get.mode() == 'guozhan') {
							dui.$identityMarkBox.style.top = '-2%';
							dui.$identityMarkBox.style.left = '23.5%';
						}
						// 谋攻篇模式或启用平民时身份标记框位置调整
						if ((lib.config.mode=='identity'&&get.config('identity_mode')=='stratagem')||get.config('enable_commoner')) {
							// if (game.zhu&&game.zhu.isZhu&&game.zhu.identityShown||game.me.identity=='zhu') {
								// dui.$identityMarkBox.style.top = '11%';
							// } else {
								dui.$identityMarkBox.style.top = '-2%';
							// }
						}
						
						dui.$identityMarkBox.ondeactive = function(){
							dui.$identityMarkBox.remove();
							_status.clicked = false;
							if (!ui.arena.classList.contains('menupaused')) game.resume2();
						}
					}
					
					var index = 0;
					var node;
					var nodes = dui.$identityMarkBox.childNodes;
					for (key in identityList) {
						node = nodes[index];
						if (!node) {
							node = decadeUI.element.create('identity-mark-item', dui.$identityMarkBox);
							node.addEventListener(lib.config.touchscreen ? 'touchend': 'click', function(){
								this.player.setIdentity(this.link);
								dui.$identityMarkBox.remove();
								_status.clicked = false;
							});
						} else {
							node.style.display = '';
						}
						
						var extensionPath = lib.assetURL + 'extension/十周年UI/';
          var url = extensionPath + 'image/decoration/identity_' + key + '.png';
          if (get.mode() == 'guozhan') url = extensionPath + 'image/decoration/name_' + key + '.png';
             node.style.backgroundImage ='url("' + url + '")';
						node.link = key;
						node.player = this.parentNode;
					//	node.innerText = identityList[key];
						index++;
					}
					
					while (index < nodes.length) {
						nodes[index].style.display = 'none';
						index++;
					}
					
					game.pause2();
					setTimeout(function(player){ 
						player.appendChild(dui.$identityMarkBox);
						dui.set.activeElement(dui.$identityMarkBox); 
					}, 0, this.parentNode);
				}
				
				
            };
			
			ui.click.volumn = function(){
				var setting = ui.create.dialog('hidden');
				setting.listen(function(e) {
					e.stopPropagation();
				});
				
				var backVolume = decadeUI.component.slider(0, 8, parseInt(lib.config.volumn_background));
				var gameVolume = decadeUI.component.slider(0, 8, parseInt(lib.config.volumn_audio));
				
				backVolume.onchange = function(){
					game.saveConfig('volumn_background', backVolume.value);
					ui.backgroundMusic.volume = backVolume.value / 8;
				};
				
				gameVolume.onchange = function(){
					game.saveConfig('volumn_audio', gameVolume.value);
				};
				
				setting.add('背景音量');
				setting.content.appendChild(backVolume);
				setting.add('游戏音量');
				setting.content.appendChild(gameVolume);
				setting.add(ui.create.div('.placeholder'));
				return setting;
			};
			
			ui.create.pause = function(){
				var dialog = createPauseFunction.call(this);
				dialog.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
				return dialog;
			};
				
			ui.clear = function(){
				game.addVideo('uiClear');
				var nodes = document.getElementsByClassName('thrown');
				for(var i = nodes.length - 1; i >= 0; i--){
				    if (nodes[i].fixed)
				        continue;
				    
				    if (nodes[i].classList.contains('card')){
				        decadeUI.layout.clearout(nodes[i]);
					}else{
					    nodes[i].delete();
					}
				}
			};
			
			if ((typeof ui.create.menu) == 'function') {
				var str = ui.create.menu.toString();
				str = str.substring(str.indexOf('{'));
				str = str.replace(/game\.documentZoom|1\.3/g, '1');
				createMenuFunction = new Function('connectMenu', '_status','lib','game','ui','get','ai', str);
			}
			
			ui.create.menu = function(connectMenu){
				return createMenuFunction.call(this, connectMenu, _status, lib, game, ui, get, ai);
			};
			
			ui.create.arena = function(){
				ui.updatez();
				var result = createArenaFunction.apply(this, arguments);
				ui.arena.classList.remove('slim_player'); 
				ui.arena.classList.remove('uslim_player');
				ui.arena.classList.remove('mslim_player');
				ui.arena.classList.remove('lslim_player');
				ui.arena.classList.remove('oldlayout');
				ui.arena.classList.remove('mobile');
				ui.arena.classList.add('decadeUI');
				ui.control.id = 'dui-controls';
				
				decadeUI.config.update();
				
				
				// ui.arena.appendChild(ui.cardPile);
			    return result;
			};
			
			ui.create.me = function(hasme){
				ui.arena.dataset.layout = game.layout;
				
				ui.mebg = ui.create.div('#mebg', ui.arena);
				ui.me = ui.create.div('.hand-wrap', ui.arena);
				ui.handcards1Container = decadeUI.element.create('hand-cards', ui.me);
				ui.handcards1Container.onmousewheel = decadeUI.handler.handMousewheel;
				
				ui.handcards2Container = ui.create.div('#handcards2');
				ui.arena.classList.remove('nome');
				
				var equipSolts  = ui.equipSolts = decadeUI.element.create('equips-wrap');
				equipSolts.back = decadeUI.element.create('equips-back', equipSolts);
				
				// decadeUI.element.create('icon icon-treasure', decadeUI.element.create('equip0', equipSolts.back));
				// decadeUI.element.create('icon icon-saber', decadeUI.element.create('equip1', equipSolts.back));
				// decadeUI.element.create('icon icon-shield', decadeUI.element.create('equip2', equipSolts.back));
				// decadeUI.element.create('icon icon-mount', decadeUI.element.create('equip3', equipSolts.back));
				// decadeUI.element.create('icon icon-mount', decadeUI.element.create('equip4', equipSolts.back));
				for (let repetition = 0; repetition < 5; repetition++) {
					decadeUI.element.create(null, equipSolts.back);
				}
				
				ui.arena.insertBefore(equipSolts, ui.me);
				decadeUI.bodySensor.addListener(decadeUI.layout.resize);
				decadeUI.layout.resize();
				
				ui.handcards1Container.ontouchstart = ui.click.touchStart;
				ui.handcards2Container.ontouchstart = ui.click.touchStart;
				ui.handcards1Container.ontouchmove = ui.click.touchScroll;
				ui.handcards2Container.ontouchmove = ui.click.touchScroll;
				ui.handcards1Container.style.WebkitOverflowScrolling = 'touch';
				ui.handcards2Container.style.WebkitOverflowScrolling = 'touch';

				if(hasme && game.me){
					ui.handcards1 = game.me.node.handcards1;
					ui.handcards2 = game.me.node.handcards2;
					ui.handcards1Container.appendChild(ui.handcards1);
					ui.handcards2Container.appendChild(ui.handcards2);
				}
				else if(game.players.length){
					game.me = game.players[0];
					ui.handcards1 = game.me.node.handcards1;
					ui.handcards2 = game.me.node.handcards2;
					ui.handcards1Container.appendChild(ui.handcards1);
					ui.handcards2Container.appendChild(ui.handcards2);
				}
				
				// if (game.me){
				    // equipSolts.me = game.me;
				    // equipSolts.equips = game.me.node.equips;
					// equipSolts.appendChild(game.me.node.equips);
				// }
			};
			
			ui.create.player = function(position, noclick){
				var player = ui.create.div('.player', position);
				var playerExtend = {
					node: {
						avatar: ui.create.div('.avatar', player, ui.click.avatar).hide(),
						avatar2: ui.create.div('.avatar2', player, ui.click.avatar2).hide(),
						turnedover: decadeUI.element.create('turned-over', player),
						framebg: ui.create.div('.framebg', player),
						intro: ui.create.div('.intro', player),
						identity: ui.create.div('.identity', player),
						hp: ui.create.div('.hp', player),
						name: ui.create.div('.name', player),
						name2: ui.create.div('.name.name2', player),
						nameol: ui.create.div('.nameol', player),
						count: ui.create.div('.card-count', player),
						equips: ui.create.div('.equips', player).hide(),
						judges: ui.create.div('.judges', player),
						marks: decadeUI.element.create('dui-marks', player),
						chain: decadeUI.element.create('chain', player),
						handcards1: ui.create.div('.handcards'),
						handcards2: ui.create.div('.handcards'),
						expansions:ui.create.div('.expansions'),
					},
					phaseNumber: 0,
					skipList: [],
					skills: [],
					invisibleSkills: [],
					initedSkills: [],
					additionalSkills: {},
					disabledSkills: {},
					hiddenSkills: [],
					awakenedSkills: [],
					forbiddenSkills: {},
					popups: [],
					damagepopups: [],
					judging: [],
					stat: [{
						card: {},
						skill: {}
					}],
					actionHistory: [{
						useCard: [],
						respond: [],
						skipped: [],
						lose: [],
						gain: [],
						sourceDamage: [],
						damage: [],
						custom: [],
						useSkill: []
					}],
					tempSkills: {},
					storage: {},
					marks: {},
					expandedSlots: {},
					disabledSlots: {},
					ai: {
						friend: [],
						enemy: [],
						neutral: [],
						handcards: {
							global: [],
							source: [],
							viewed: []
						}
					},
					queueCount: 0,
					outCount: 0,
				};
				
				var chainImg = new Image();
				chainImg.onerror = function() {
					var node = decadeUI.element.create('chain-back', player.node.chain);
					for (var i = 0; i < 40; i++) decadeUI.element.create('cardbg', node).style.transform = 'translateX(' + (i * 5 - 5) + 'px)';
					chainImg.onerror = undefined;
				};
				chainImg.src = decadeUIPath + 'assets/image/tie_suo.png';
				
				var extend = {
					$cardCount: playerExtend.node.count,
					$dynamicWrap: decadeUI.element.create('dynamic-wrap'),
				}
				
				decadeUI.get.extend(player, extend);
				decadeUI.get.extend(player, playerExtend);
				
				// decadeUI.get.extend(player, lib.element.player);
				// 适配新版本体
				Object.setPrototypeOf(player,lib.element.Player.prototype);
				
				player.node.action = ui.create.div('.action', player.node.avatar);
				var realIdentity = ui.create.div(player.node.identity);
				realIdentity.player = player;
				
				Object.defineProperties(realIdentity, {
					innerHTML:{
						configurable: true,
						get:function(){
							return this.innerText;
						},
						set:function(value){
							if (get.mode() == 'guozhan' || _status.mode == 'jiange' || _status.mode == 'siguo') {
								this.style.display = 'none';
								this.innerText = value;
								this.parentNode.classList.add('guozhan-mode');
								return;
							}
							
							// var trans = {
								// '主':{
									// default: 'zhu',
									// identity_purple: function(player, color){
										// if (color[0] == 'b') {
											// player.classList.add('opposite-camp');
											// return 'zhushuai_blue';
										// }
										
										// return 'zhushuai';
									// },
									
									// versus_default: function(player, color){
										// if (get.translation(player.side + 'Color') == 'wei') {
											// player.classList.add('opposite-camp');
											// return 'zhu_blue';
										// }
										
										// return 'zhu';
									// },
									// doudizhu_normal: 'dizhu',
								// }
							// };
							
							var fileName;
							var checked;
							var identity = this.parentNode.dataset.color;
							var gameMode = get.mode();
							switch (value) {
								case '猜':
									fileName = 'cai';
									if (_status.mode == 'purple') {
										fileName = identity == 'cai' ? 'cai_blue' : 'cai_red';
										checked = true;
									}
									break;
								case '友':
									fileName = 'friend';
									break;
								case '敌':
									fileName = 'enemy';
									break;
								case '民':
									fileName = 'commoner';
									break;
								case '反':
									fileName = 'fan';
									if (get.mode() == 'doudizhu') {
										fileName = 'nongmin';
										checked = true;
									}
									break;
								case '主':
									fileName = 'zhu';
									if (get.mode() == 'versus') { 
										fileName = get.translation(player.side + 'Color') == 'wei' ? 'zhu_blue' : 'zhu_red';
										this.player.classList.add('opposite-camp');
										checked = true;
									} else if (get.mode() == 'doudizhu') {
										fileName = 'dizhu';
										checked = true;
									} else if (_status.mode == 'purple') {
										fileName = identity == 'bZhu' ? 'zhushuai_blue' : 'zhushuai';
										checked = true;
									}
									break;
								case '忠':
									fileName = 'zhong';
									if (gameMode == 'identity' && _status.mode == 'purple') {
										fileName = 'qianfeng';
									} else if (get.mode() == 'versus') { 
										fileName = get.translation(player.side + 'Color') == 'wei' ? 'zhong_blue' : 'zhong_red';
										this.player.classList.add('opposite-camp');
										checked = true;
									}
									break;
								case '内':
									if (_status.mode == 'purple') { 
										fileName = identity == 'rNei' ? 'xizuo' : 'xizuo_blue';
										checked = true;
									} else {
										fileName = 'nei';
									}
									break;
								case '野':
									fileName = 'ye';
									break;
								case '首':
									fileName = 'zeishou';
									break;
								case '贼首':
									fileName = 'zeishou';
									break;
								case '帅':
									fileName = 'zhushuai';
									break;
								case '将':
									fileName = 'dajiang';
									if (_status.mode == 'three' || get.translation(player.side + 'Color') == 'wei') {
										fileName = 'zhushuai_blue';
										checked = true;
									}
									break;
								case '大将':
									fileName = 'dajiang';
									if (_status.mode == 'three' || get.translation(player.side + 'Color') == 'wei') {
										fileName = 'zhushuai_blue';
										checked = true;
									}
									break;
								case '兵':
								case '卒':
									fileName = this.player.side === false ? 'qianfeng_blue' : 'qianfeng';
									checked = true;
									break;
								case '师':
									fileName = 'junshi';
									break;
								case '军师':
									fileName = 'junshi';
									break;
								case '盟':
									fileName = 'mengjun';
									break;
								case '神':
									fileName = 'boss';
									break;
								case '从':
									fileName = 'suicong';
									break;
								case '先':
									fileName = 'xianshou';
									break;
								case '后':
									fileName = 'houshou';
									break;
								default:
									this.innerText = value;
									this.style.opacity = 1;
									this.parentNode.style.backgroundImage = '';
									return;
							}
							
							if (!checked && this.parentNode.dataset.color) {
								if (this.parentNode.dataset.color[0] == 'b') {
									fileName += '_blue';
									this.player.classList.add('opposite-camp');
								}
							}
							
							this.innerText = value;
							if (decadeUI.config.campIdentityImageMode) {
								this.style.opacity = 0;
								var image = new Image();
								image.node = this;
								image.onerror = function() { this.node.style.opacity = 1; };
								
								image.src = extensionPath + 'image/decoration/identity_' + fileName + '.png';
								this.parentNode.style.backgroundImage = 'url("' + image.src + '")';
							} else {
								this.style.opacity = 1;
							}
						}
					}
				});
				
				Object.defineProperties(player.node.count, {
					innerHTML:{
						configurable: true,
						get:function(){
							return this.textContent;
						},
						set:function(value){
							if (this.textContent == value) return;
							this.textContent = value;
							this.dataset.text = value;
						}
					}
				});
				
				if (!noclick) {
					player.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.target);
					player.node.identity.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.identity);
					if (lib.config.touchscreen) {
						player.addEventListener('touchstart', ui.click.playertouchstart);
					}
				} else {
					player.noclick = true;
				}

				var campWrap = decadeUI.element.create('camp-wrap');
				var hpWrap = decadeUI.element.create('hp-wrap');
				
				player.insertBefore(campWrap, player.node.name);
				player.insertBefore(hpWrap, player.node.hp);
				player.node.campWrap = campWrap;
				player.node.hpWrap = hpWrap;
				hpWrap.appendChild(player.node.hp);
				
				var campWrapExtend = {
					node:{
						back: decadeUI.element.create('camp-back', campWrap),
						border: decadeUI.element.create('camp-border', campWrap),
						campName: decadeUI.element.create('camp-name', campWrap),
						avatarName: player.node.name,
						avatarDefaultName: decadeUI.element.create('avatar-name-default', campWrap),
					}
				};
				
				decadeUI.get.extend(campWrap, campWrapExtend);
				
				campWrap.appendChild(player.node.name);
				campWrap.node.avatarName.className = 'avatar-name';
				campWrap.node.avatarDefaultName.innerHTML = '';
				
				var node = {
					mask: player.insertBefore(decadeUI.element.create('mask'), player.node.identity),
					gainSkill: decadeUI.element.create('gain-skill', player),
				}
				
				var properties = {
					gainSkill:{
						player: player,
						gain:function(skill){
							var sender = this;
							
							if (!sender.skills) sender.skills = [];
							if (!sender.skills.contains(skill) && lib.translate[skill]) {
								var info = lib.skill[skill];
								if(!info || info.charlotte || info.sub || (info.mark && !info.limited) || (info.nopop || info.popup === false)) return;
								if (info.onremove && game.me != this.player.storage[skill]) return;
							
								sender.skills.push(skill);
								var html = '';
								for (var i = 0; i < sender.skills.length; i++) {
									html += '[' + lib.translate[sender.skills[i]] + ']';
								}
								
								sender.innerHTML = html;
							}
						},
						lose:function(skill){
							var sender = this;
							var index = sender.skills.indexOf(skill);
							if (index >= 0) {
								sender.skills.splice(index, 1);
								var html = '';
								for (var i = 0; i < sender.skills.length; i++) {
									html += '[' + get.translation(sender.skills[i]) + ']';
								}
								
								sender.innerHTML = html;
							}
						},
					},
				};
				
				decadeUI.get.extend(node.gainSkill, properties.gainSkill);
				decadeUI.get.extend(player.node, node);
				
				Object.defineProperties(player, {
					group: {
						configurable: true,
						get:function(){
							// return this.node.campWrap.dataset.camp;
							return this._group;
						},
						set:function(value){
							// this.node.campWrap.dataset.camp = value;
							this._group = value;
							this.node.campWrap.dataset.camp = get.bordergroup(this.name, true) || value;
							
							if (value){
								if (decadeUI.config.campIdentityImageMode){
								    var that = this;
									var image = new Image();
									var url = extensionPath + 'image/decoration/name2_' + value + '.png';
								    that._finalGroup = value;
									
								    image.onerror = function(){
								        that.node.campWrap.node.campName.innerHTML = that._finalGroup ? get.translation(that._finalGroup)[0] : '';
								    };
								    
								    that.node.campWrap.node.campName.innerHTML = '';
								    that.node.campWrap.node.campName.style.backgroundImage = 'url("' + url + '")';
									image.src = url;
									
								    return;
								}
								
								this.node.campWrap.node.campName.innerHTML = value ? get.translation(value)[0] : '';
							}
						}
					}
				});
				
				return player;
			};
			
			ui.create.card = function(position, info, noclick){
				var card = ui.create.div('.card');
				card.node = {
					image: ui.create.div('.image', card),
					info: ui.create.div('.info'),
					suitnum: decadeUI.element.create('suit-num', card),
					name: ui.create.div('.name', card),
					name2: ui.create.div('.name2', card),
					background: ui.create.div('.background', card),
					intro: ui.create.div('.intro', card),
					range: ui.create.div('.range', card),
					gaintag: decadeUI.element.create('gaintag info', card),
					judgeMark: decadeUI.element.create('judge-mark', card),
					usedInfo: decadeUI.element.create('used-info', card),
					cardMask: decadeUI.element.create('card-mask', card),
				};
				
				var extend = {
					$name: decadeUI.element.create('top-name', card),
					$vertname: card.node.name,
					$equip: card.node.name2,
					$suitnum: card.node.suitnum,
					$range: card.node.range,
					$gaintag: card.node.gaintag,
					$usedinfo: card.node.usedInfo,
				};
				
				
				for (var i in extend) card[i] = extend[i];
				
				// for (var i in lib.element.card) card[i] = lib.element.card[i];
				// 适配新版本体
				Object.setPrototypeOf(card,lib.element.Card.prototype);
				
				card.node.intro.innerText = lib.config.intro;
				if (!noclick) lib.setIntro(card);
				
				card.storage = {};
				card.vanishtag = [];
				card.gaintag = [];
				card._uncheck = [];
				if (info != 'noclick') {
					card.addEventListener(lib.config.touchscreen ? 'touchend': 'click', ui.click.card);
					if (lib.config.touchscreen) {
						card.addEventListener('touchstart', ui.click.cardtouchstart);
						card.addEventListener('touchmove', ui.click.cardtouchmove);
					}
					if (lib.cardSelectObserver) {
						lib.cardSelectObserver.observe(card, {
							attributes: true
						});
					}
				}
				
				
				card.$suitnum.$num = decadeUI.element.create(null, card.$suitnum, 'span');
				card.$suitnum.$br  = decadeUI.element.create(null, card.$suitnum, 'br');
				card.$suitnum.$suit = decadeUI.element.create('suit', card.$suitnum, 'span');
				card.$equip.$suitnum = decadeUI.element.create(null, card.$equip, 'span');
				card.$equip.$name = decadeUI.element.create(null, card.$equip, 'span');
				// 修复了因其他字体的点数花色导致破坏十周年UI卡牌点数花色布局的异常
				// card.$suitnum.$num.style.fontFamily = '"STHeiti","SimHei","Microsoft JhengHei","Microsoft YaHei","WenQuanYi Micro Hei",Helvetica,Arial,sans-serif';
				// card.$suitnum.$suit.style.fontFamily = '"STHeiti","SimHei","Microsoft JhengHei","Microsoft YaHei","WenQuanYi Micro Hei",Helvetica,Arial,sans-serif';
				card.$suitnum.$suit.style.fontFamily = 'shousha';
				if (lib.device) {
					// 手机端
					card.$suitnum.$suit.style.fontSize = '23px';
				} else {
					// 电脑端
					card.$suitnum.$suit.style.fontSize = '21px';
				}
				
				card.node.judgeMark.node = {
					back: decadeUI.element.create('back', card.node.judgeMark),
					mark: decadeUI.element.create('mark', card.node.judgeMark),
					judge: decadeUI.element.create('judge', card.node.judgeMark)
				};
				
				if (position) position.appendChild(card);
				return card;
			};
			
			ui.create.cards = function(){
				var result = base.ui.create.cards.apply(this, arguments);
				game.updateRoundNumber();
				return result;
			};
			
			// 不联机就不用
			// ui.create.chat = function(){
				// var chatBox = ui.arena.appendChild(decadeUI.component.chatBox());
				// for (var i = 0; i < lib.chatHistory.length; i++) {
					// chatBox.addEntry(lib.chatHistory[i]);
				// }
				
				// _status.addChatEntry = chatBox.addEntry;
				// Object.defineProperties(_status, {
					// addChatEntry: {
						// configurable: true,
						// get:function(){
							// return chatBox.addEntry;
						// },
						// set:function(value){
							// chatBox.overrideEntry = value;
						// }
					// },
				// });
				
				// var retVal = base.ui.create.chat.apply(this, arguments);
				// chatBox.addEntry._origin = chatBox;
				// return retVal;
			// };
			
			lib.init.cssstyles = function(){
			    var temp = lib.config.glow_phase;
			    lib.config.glow_phase = '';
			    initCssstylesFunction.call(this);
			    lib.config.glow_phase = temp;
				ui.css.styles.sheet.insertRule('.avatar-name, .avatar-name-default { font-family: "' + (lib.config.name_font || 'xinkai') + '", "xinwei" }', 0);
			};

			lib.init.layout = function(layout, nosave){
			    if (!nosave) game.saveConfig('layout',layout);
				game.layout = layout;

				var relayout = function(){
					ui.arena.dataset.layout = game.layout;
					if(get.is.phoneLayout()){
						ui.css.phone.href = lib.assetURL + 'layout/default/phone.css';
						ui.arena.classList.add('phone');
					}
					else{
						ui.css.phone.href = '';
						ui.arena.classList.remove('phone');
					}
					
					for (var i = 0; i < game.players.length; i++) {
						if (get.is.linked2(game.players[i])) {
							if (game.players[i].classList.contains('linked')) {
								game.players[i].classList.remove('linked');
								game.players[i].classList.add('linked2');
							}
						} else {
							if (game.players[i].classList.contains('linked2')) {
								game.players[i].classList.remove('linked2');
								game.players[i].classList.add('linked');
							}
						}
					}
					
					ui.updatej();
					ui.updatem();
					setTimeout(function(){
						if (game.me) game.me.update();
						setTimeout(function(){
							ui.updatex();
						}, 500);
						
						setTimeout(function(){
							ui.updatec();
						}, 1000);
					}, 100);
				};
				
				setTimeout(relayout, 500);
			};
			
			lib.skill._usecard = {
				trigger: { global: 'useCardAfter' },
				forced: true,
				popup: false,
				priority: -100,
				filter:function(event){
					return ui.clear.delay === 'usecard' && event.card.name != 'wuxie';
				},
				content:function(){
					ui.clear.delay = false;
    				game.broadcastAll(function(){
    					ui.clear();
    				});
				}
			};
			
			lib.skill._decadeUI_usecardBegin = {
				trigger:{ global:'useCardBegin' },
				forced: true,
				popup: false,
				priority: -100,
				filter:function(event){
				    return !ui.clear.delay && event.card.name != 'wuxie';
				},
				content:function(){
					ui.clear.delay = 'usecard';
				}
			};
	        
			/*
	        lib.skill._discard = {
				trigger:{ global: ['discardAfter', 'loseToDiscardpileAfter', 'loseAsyncAfter'] },
				forced: true,
				popup: false,
				priority: -100,
				filter:function(event){
					return ui.todiscard[event.discardid] ? true : false;
				},
				content:function(){
					game.broadcastAll(function(id){
    					if (window.decadeUI){
    					    ui.todiscard = [];
    					    ui.clear();
    					    return;
    					}
    						
    					var todiscard = ui.todiscard[id];
    					delete ui.todiscard[id];
    					if (todiscard){
    						var time = 1000;
    						if (typeof todiscard._discardtime == 'number'){
    							time += todiscard._discardtime - get.time();
    						}
    						if (time < 0){
    							time = 0;
    						}
    						setTimeout(function(){
    							for (var i = 0; i < todiscard.length; i++){
    								todiscard[i].delete();
    							}
    						},
    						time);
    					}
    				}, trigger.discardid);
				}
			};
			*/
			
			lib.skill._decadeUI_gameStartEffect = {
				trigger:{ global:'gameDrawAfter' },
				forced: true,
				popup: false,
				priority: -100,
				filter:function(){
					return lib.skill._decadeUI_gameStartEffect.played == void 0;
				},
				content:function(){
					lib.skill._decadeUI_gameStartEffect.played = true;
					decadeUI.effect.gameStart();
				}
			};
			
			lib.skill._decadeUI_dieKillEffect = {
				trigger:{ source:['dieBegin'] },
				forced: true,
				popup: false,
				priority: -100,
				lastDo: true,
				content:function(){
					if (!(trigger.source && trigger.player)) return;
					game.broadcastAll(function(source, player){
						if (!window.decadeUI) return;
						if (!decadeUI.config.playerKillEffect) return;
						decadeUI.effect.kill(source, player);
					}, trigger.source, trigger.player);
				}
			};
			
			lib.element.content.addJudge = function(){
				"step 0";
				if (cards){
					var owner = get.owner(cards[0]);
					if (owner) {
						event.relatedLose = owner.lose(cards, 'visible', ui.special).set('getlx', false);
					} else if (get.position(cards[0]) == 'c') event.updatePile = true;
				};
				"step 1";
				if (cards[0].destroyed){
					if(cards[0].willBeDestroyed('judge',player,event)){
						cards[0].selfDestroy(event);
					// if (player.hasSkill(cards[0].destroyed)){
						// delete cards[0].destroyed;
					// } else {
						event.finish();
						return;
					}
				}
				else if(event.relatedLose){
					var owner=event.relatedLose.player;
					if(owner.getCards('hejsx').contains(card)){
						event.finish();
						return;
					}
				}
				cards[0].fix();
				cards[0].style.transform = '';
				cards[0].classList.remove('drawinghidden');
				cards[0]._transform = null;
				
				var viewAs = typeof card == 'string' ? card: card.name;
				if (!lib.card[viewAs] || (!lib.card[viewAs].effect && !lib.card[viewAs].noEffect) ) {
					game.cardsDiscard(cards[0]);
				} else {
					cards[0].style.transform = '';
					player.node.judges.insertBefore(cards[0], player.node.judges.firstChild);
					if (_status.discarded){
						_status.discarded.remove(cards[0]);
					}
					ui.updatej(player);
					game.broadcast(function(player, card, viewAs){
						card.fix();
						card.style.transform = '';
						card.classList.add('drawinghidden');
						card.viewAs = viewAs;
						if (viewAs && viewAs != card.name){
							if (window.decadeUI){
								card.classList.add('fakejudge');
								card.node.judgeMark.node.judge.innerHTML = get.translation(viewAs)[0];
								
							}else if (card.classList.contains('fullskin') || card.classList.contains('fullborder')){
								card.classList.add('fakejudge');
								card.node.background.innerHTML = lib.translate[viewAs+'_bg'] || get.translation(viewAs)[0];
							}
						} else {
							card.classList.remove('fakejudge');
							if (window.decadeUI) card.node.judgeMark.node.judge.innerHTML = get.translation(card.name)[0];
						}
						
						player.node.judges.insertBefore(card, player.node.judges.firstChild);
						ui.updatej(player);
						if (card.clone && (card.clone.parentNode == player.parentNode || card.clone.parentNode == ui.arena)){
							card.clone.moveDelete(player);
							game.addVideo('gain2', player, get.cardsInfo([card]));
						}
					}, player, cards[0], viewAs);
					
					if (cards[0].clone && (cards[0].clone.parentNode == player.parentNode || cards[0].clone.parentNode == ui.arena)){
						cards[0].clone.moveDelete(player);
						game.addVideo('gain2', player, get.cardsInfo(cards));
					}

					if (get.itemtype(card) != 'card'){
						if (typeof card == 'string') cards[0].viewAs = card;
						else cards[0].viewAs = card.name;
					} else {
						cards[0].viewAs = null;
					}
					
					if (cards[0].viewAs && cards[0].viewAs != cards[0].name){
						cards[0].classList.add('fakejudge');
						cards[0].node.judgeMark.node.judge.innerHTML = get.translation(cards[0].viewAs)[0];
						if(lib.card[viewAs].blankCard){
							game.log(player, '被扣置了<span class="yellowtext">' + get.translation(cards[0].viewAs) + '</span>');
						}
						else {
							game.log(player, '被贴上了<span class="yellowtext">' + get.translation(cards[0].viewAs) + '</span>（', cards, '）');
						}
					} else {
						cards[0].classList.remove('fakejudge');
						cards[0].node.judgeMark.node.judge.innerHTML = get.translation(cards[0].name)[0];
						game.log(player, '被贴上了', cards);
					}
					
					// 分离兵乐闪电标记图标，增加牌名判断区分兵临城下和兵粮寸断标记（该方法可用于分离类似“兵”冲突的情况）
					if(
						// 转化后的牌名判断
						cards[0].viewAs=='bingliang' || cards[0].viewAs=='lebu' || cards[0].viewAs=='shandian'
						// 非转化的牌名判断
						|| cards[0].name=='bingliang' || cards[0].name=='lebu' || cards[0].name=='shandian'
					){
						var judgeText=cards[0].node.judgeMark.node.judge.innerHTML;
						var map={
							"兵":'bingliang',
							"乐":'lebu',
							"闪":'shandian',
						}
						if(
							judgeText=="兵" || judgeText=="乐" || judgeText=="闪"
						){
							cards[0].node.judgeMark.node.judge.innerHTML="";
							// var name = cards[0].node.judgeMark.node.judge.parentElement.parentElement.getAttribute("data-card-name");
							cards[0].node.judgeMark.node.judge.classList.add("newjudge");
							cards[0].node.judgeMark.node.judge.style.backgroundImage='url("'+lib.assetURL+"extension/十周年UI/assets/image/"+ map[judgeText] +".png"+'")';
						/* cards[0].node.judgeMark.node.judge.style.height = '50px';
							cards[0].node.judgeMark.node.judge.style.width = '50px';
							cards[0].node.judgeMark.node.judge.style.zIndex = '99'; */
							cards[0].node.judgeMark.node.judge.parentElement.children[0].style.background="none";
							cards[0].node.judgeMark.node.judge.parentElement.children[0].style.display="none";
						}
					}
					// 若有素材后可增加对应代码，即：binglinchengxia.png等素材添加至【十周年UI\assets\image内】
					// if(
						// cards[0].viewAs=='binglinchengxia' || cards[0].viewAs=='caomu' || cards[0].viewAs=='fulei' || cards[0].viewAs=='hongshui' || cards[0].viewAs=='huoshan'
						// || cards[0].name=='binglinchengxia' || cards[0].name=='caomu' || cards[0].name=='fulei' || cards[0].name=='hongshui' || cards[0].name=='huoshan'
					// ){
						// var judgeText=cards[0].node.judgeMark.node.judge.innerHTML;
						// var map={
							// "兵":'binglinchengxia',
							// "草":'caomu',
							// "浮":'fulei',
							// "洪":'hongshui',
							// "火":'huoshan',
						// }
						// if(
							// judgeText=="兵" || judgeText=="草" || judgeText=="浮" || judgeText=="洪" || judgeText=="火"
						// ){
							// cards[0].node.judgeMark.node.judge.innerHTML="";
							// cards[0].node.judgeMark.node.judge.classList.add("newjudge");
							// cards[0].node.judgeMark.node.judge.style.backgroundImage='url("'+lib.assetURL+"extension/十周年UI/assets/image/"+ map[judgeText] +".png"+'")';
							// cards[0].node.judgeMark.node.judge.parentElement.children[0].style.background="none";
							// cards[0].node.judgeMark.node.judge.parentElement.children[0].style.display="none";
						// }
					// }
					// 卡牌-天灾包（本人扩展：三国24名将）
					// if(
						// cards[0].viewAs=='wms_z_deluge' || cards[0].viewAs=='wms_z_typhoon' || cards[0].viewAs=='wms_z_earthquake' || cards[0].viewAs=='wms_z_volcano' || cards[0].viewAs=='wms_z_mudslide'
						// || cards[0].name=='wms_z_deluge' || cards[0].name=='wms_z_typhoon' || cards[0].name=='wms_z_earthquake' || cards[0].name=='wms_z_volcano' || cards[0].name=='wms_z_mudslide'
					// ){
						// var judgeText=cards[0].node.judgeMark.node.judge.innerHTML;
						// var map={
							// "洪":'wms_z_deluge',
							// "台":'wms_z_typhoon',
							// "地":'wms_z_earthquake',
							// "火":'wms_z_volcano',
							// "泥":'wms_z_mudslide',
						// }
						// if(
							// judgeText=="洪" || judgeText=="台" || judgeText=="地" || judgeText=="火" || judgeText=="泥"
						// ){
							// cards[0].node.judgeMark.node.judge.innerHTML="";
							// cards[0].node.judgeMark.node.judge.classList.add("newjudge");
							// cards[0].node.judgeMark.node.judge.style.backgroundImage='url("'+lib.assetURL+"extension/十周年UI/assets/image/"+ map[judgeText] +".png"+'")';
							// cards[0].node.judgeMark.node.judge.parentElement.children[0].style.background="none";
							// cards[0].node.judgeMark.node.judge.parentElement.children[0].style.display="none";
						// }
					// }

					game.addVideo('addJudge', player, [get.cardInfo(cards[0]), cards[0].viewAs]);
				}
				if (event.updatePile) game.updateRoundNumber();
			};
			
		if (lib.config.dhkmh!='off') {
		if (lib.config.dhkmh=='pindian'||lib.config.dhkmh=='guanxinghepindian') {
			lib.element.content.chooseToCompare = function(){
				"step 0"
				if (((!event.fixedResult || !event.fixedResult[player.playerid]) 
					&& player.countCards('h') == 0) || ((!event.fixedResult || !event.fixedResult[target.playerid]) 
					&& target.countCards('h') == 0)) {
					event.result = {
						cancelled: true,
						bool: false
					}
					event.finish();
					return;
				}
				game.log(player, '对', target, '发起拼点');
				event.lose_list = [];
				
				// 更新拼点框
				if (event.parent.name == null || event.parent.name == 'trigger') {
					event.compareName = event.name;
				} else {
					event.compareName = event.parent.name;
				}
				
				game.broadcastAll(function(player, target, eventName){
					if (!window.decadeUI) return;
					
					var dialog = decadeUI.create.compareDialog();
					dialog.caption = get.translation(eventName) + '拼点';
					dialog.player = player;
					dialog.target = target;
					dialog.open();
					
					decadeUI.delay(400);
					ui.dialogs[eventName] = dialog;
				}, player, target, event.compareName);
				
				"step 1"
				var sendback = function() {
					if (_status.event != event) {
						return function() {
							event.resultOL = _status.event.resultOL;
						};
					}
				};
				
				if (event.fixedResult && event.fixedResult[player.playerid]) {
					event.card1 = event.fixedResult[player.playerid];
					event.lose_list.push([player, event.card1]);//共同丢失逻辑。
				} else if (player.isOnline()) {
					player.wait(sendback);
					event.ol = true;
					player.send(function(ai) {
						game.me.chooseCard('请选择拼点牌', true).set('prompt', false).set('type', 'compare').ai = ai;
						game.resume();
					}, event.ai);
				} else {
					event.localPlayer = true;
					player.chooseCard('请选择拼点牌', true).set('prompt', false).set('type', 'compare').ai = event.ai;
				}
				
				if (event.fixedResult && event.fixedResult[target.playerid]) {
					event.card2 = event.fixedResult[target.playerid];
					event.lose_list.push([target, event.card2]);//共同丢失逻辑。
				} else if (target.isOnline()) {
					target.wait(sendback);
					event.ol = true;
					target.send(function(ai) {
						game.me.chooseCard('请选择拼点牌', true).set('prompt', false).set('type', 'compare').ai = ai;
						game.resume();
					},
					event.ai);
				} else {
					event.localTarget = true;
				}
				
				"step 2"
				if (event.localPlayer) {
					if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
						result.cards = lib.skill[result.skill].onCompare(player);
						player.logSkill(result.skill);
					} else {
						event.lose_list.push([player, result.cards[0]]);
					}
					event.card1 = result.cards[0];
					// 更新拼点框
					game.broadcastAll(function(eventName){
						if (!window.decadeUI) return;

						var dialog = ui.dialogs[eventName];
						dialog.$playerCard.classList.add('infohidden');
						dialog.$playerCard.classList.add('infoflip');
					}, event.compareName);
				}
				if (event.localTarget) {
					target.chooseCard('请选择拼点牌', true).set('prompt', false).set('type', 'compare').ai = event.ai;
				}
				
				"step 3"			
				if (event.localTarget) {
					if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
						target.logSkill(result.skill);
						result.cards = lib.skill[result.skill].onCompare(target);
					} else {
						event.lose_list.push([target,result.cards[0]]);
					}

					event.card2 = result.cards[0];
					
					// 更新拼点框
					game.broadcastAll(function(eventName){
						if (!window.decadeUI) return;
						
						var dialog = ui.dialogs[eventName];
						dialog.$targetCard.classList.add('infohidden');
						dialog.$targetCard.classList.add('infoflip');
					}, event.compareName);
				}
				if (!event.resultOL && event.ol) {
					game.pause();
				}
				
				"step 4"
				try {
					if (!event.card1) {
						if (event.resultOL[player.playerid].skill && lib.skill[event.resultOL[player.playerid].skill] && lib.skill[event.resultOL[player.playerid].skill].onCompare) {
							player.logSkill(event.resultOL[player.playerid].skill);
							event.resultOL[player.playerid].cards = lib.skill[event.resultOL[player.playerid].skill].onCompare(player);
						} else{
							event.lose_list.push([player, event.resultOL[player.playerid].cards[0]]);
						} 
						event.card1 = event.resultOL[player.playerid].cards[0];
						
						// 更新拼点框
						game.broadcastAll(function(eventName){
							if (!window.decadeUI) return;
							
							var dialog = ui.dialogs[eventName];
							dialog.$playerCard.classList.add('infohidden');
							dialog.$playerCard.classList.add('infoflip');
						}, event.compareName);
					}
					if (!event.card2) {
						if (event.resultOL[target.playerid].skill && lib.skill[event.resultOL[target.playerid].skill] && lib.skill[event.resultOL[target.playerid].skill].onCompare) {
							target.logSkill(event.resultOL[target.playerid].skill);
							event.resultOL[target.playerid].cards = lib.skill[event.resultOL[target.playerid].skill].onCompare(player);
						} else {
							event.lose_list.push([target, event.resultOL[target.playerid].cards[0]]);
						}
						event.card2 = event.resultOL[target.playerid].cards[0];
						// 更新拼点框
						game.broadcastAll(function(eventName){
							if (!window.decadeUI) return;
							
							var dialog = ui.dialogs[eventName];
							dialog.$targetCard.classList.add('infohidden');
							dialog.$targetCard.classList.add('infoflip');
						}, event.compareName);
					}
					if (!event.card1 || !event.card2) {
						throw ('err');
					}
				} catch(e) {
					console.log(e);
					game.print(e);
					event.finish();
					return;
				}
				if (event.card2.number >= 10 || event.card2.number <= 4) {
					if (target.countCards('h') > 2) {
						event.addToAI = true;
					}
				}
				if (event.lose_list.length) {
					game.loseAsync({
						lose_list: event.lose_list,
					}).setContent('chooseToCompareLose');
				}
				
				"step 5"
				event.trigger('compareCardShowBefore');
				"step 6"
				// 更新拼点框
				game.broadcastAll(function(eventName, player, target, playerCard, targetCard){
					if (!window.decadeUI) {
						ui.arena.classList.add('thrownhighlight');
						player.$compare(playerCard, target, targetCard);
						return;
					}
					
					var dialog = ui.dialogs[eventName];
					dialog.playerCard = playerCard.copy();
					dialog.targetCard = targetCard.copy();
				}, event.compareName, player, target, event.card1, event.card2);

				game.log(player, '的拼点牌为', event.card1);
				game.log(target, '的拼点牌为', event.card2);
				
				var getNum=function(card){
						for(var i of event.lose_list){
							if(i[1]==card) return get.number(card,i[0]);
						}
						return get.number(card,false);
					}
				event.num1=getNum(event.card1);
				event.num2=getNum(event.card2);
				event.trigger('compare');
				decadeUI.delay(400);
				
				"step 7"
				event.result = {
					player: event.card1,
					target: event.card2,
					num1: event.num1,
					num2: event.num2
				}
				var str;
				if (event.num1 > event.num2) {
					event.result.bool = true;
					event.result.winner = player;
					str = get.translation(player) + '拼点成功';
					player.popup('胜');
					target.popup('负');
				} else {
					event.result.bool = false;
					str = get.translation(player) + '拼点失败';
					if (event.num1 == event.num2) {
						event.result.tie = true;
						player.popup('平');
						target.popup('平');
					} else {
						event.result.winner = target;
						player.popup('负');
						target.popup('胜');
					}
				}
				
				// 更新拼点框
				game.broadcastAll(function(str, eventName, result) {
					if (!window.decadeUI) {
						var dialog = ui.create.dialog(str);
						dialog.classList.add('center');
						setTimeout(function(dialog) {
							dialog.close();
						}, 1000, dialog);
						return;
					}
					
					var dialog = ui.dialogs[eventName];
					dialog.$playerCard.dataset.result = result ? '赢' : '没赢';
					
					setTimeout(function(dialog, eventName){
						dialog.close();
						setTimeout(function(dialog){
							dialog.player.$throwordered2(dialog.playerCard, true);
							dialog.target.$throwordered2(dialog.targetCard, true);
						}, 180, dialog);
						ui.dialogs[eventName] = undefined;
						
					}, 1400, dialog, eventName);
					
				}, str, event.compareName, event.result.bool);
				decadeUI.delay(1800);
				
				"step 8"
				if (typeof event.target.ai.shown == 'number' && event.target.ai.shown <= 0.85 && event.addToAI) {
					event.target.ai.shown += 0.1;
				}
				game.broadcastAll(function() {
					if (!window.decadeUI) ui.arena.classList.remove('thrownhighlight');
				});
				game.addVideo('thrownhighlight2');
				if (event.clear !== false) {
					game.broadcastAll(ui.clear);
				}
				if (typeof event.preserve == 'function') {
					event.preserve = event.preserve(event.result);
				} else if (event.preserve == 'win') {
					event.preserve = event.result.bool;
				} else if (event.preserve == 'lose') {
					event.preserve = !event.result.bool;
				}
			};
			
			lib.element.content.chooseToCompareMultiple = function(){
				"step 0"
				event.forceDie = true;
				if (player.countCards('h') == 0) {
					event.result = {
						cancelled: true,
						bool: false
					}
					event.finish();
					return;
				}
				for (var i = 0; i < targets.length; i++) {
					if (targets[i].countCards('h') == 0) {
						event.result = {
							cancelled: true,
							bool: false
						}
						event.finish();
						return;
					}
				}
				if (!event.multitarget) {
					targets.sort(lib.sort.seat);
				}
				game.log(player, '对', targets, '发起拼点');
				
				// 更新拼点框
				if (event.parent.name == null || event.parent.name == 'trigger') {
					event.compareName = event.name;
				} else {
					event.compareName = event.parent.name;
				}
				
				game.broadcastAll(function(player, target, eventName){
					if (!window.decadeUI) return;
					
					var dialog = decadeUI.create.compareDialog();
					dialog.caption = get.translation(eventName) + '拼点';
					dialog.player = player;
					dialog.target = target;
					dialog.open();
					
					decadeUI.delay(400);
					ui.dialogs[eventName] = dialog;
				}, player, targets[0], event.compareName);
				
				"step 1"
				event._result = [];
				event.list = targets.filter(function(current) {
					return ! event.fixedResult || !event.fixedResult[current.playerid];
				});
				
				if (event.list.length || !event.fixedResult || !event.fixedResult[player.playerid]) {
					if (!event.fixedResult || !event.fixedResult[player.playerid]) event.list.unshift(player);
					player.chooseCardOL(event.list, '请选择拼点牌', true).set('type', 'compare').set('ai', event.ai).set('source', player).aiCard = function(target) {
						var hs = target.getCards('h');
						var event = _status.event;
						event.player = target;
						hs.sort(function(a, b) {
							return event.ai(b) - event.ai(a);
						});
						delete event.player;
						return {
							bool: true,
							cards: [hs[0]]
						};
					};
				}
				
				"step 2"
				var cards = [];
				var lose_list = [];
				if (event.fixedResult && event.fixedResult[player.playerid]) {
					event.list.unshift(player);
					result.unshift({
						bool: true,
						cards: [event.fixedResult[player.playerid]]
					});
					lose_list.push([player, [event.fixedResult[player.playerid]]]);
				} else {
					if (result[0].skill && lib.skill[result[0].skill] && lib.skill[result[0].skill].onCompare) {
						player.logSkill(result[0].skill);
						result[0].cards = lib.skill[result[0].skill].onCompare(player)
					} else lose_list.push([player, result[0].cards]);
				}
				for (var j = 0; j < targets.length; j++) {
					if (event.list.contains(targets[j])) {
						var i = event.list.indexOf(targets[j]);
						if (result[i].skill && lib.skill[result[i].skill] && lib.skill[result[i].skill].onCompare) {
							event.list[i].logSkill(result[i].skill);
							result[i].cards = lib.skill[result[i].skill].onCompare(event.list[i]);
						} else lose_list.push([targets[j], result[i].cards]);
						cards.push(result[i].cards[0]);
					} else if (event.fixedResult && event.fixedResult[targets[j].playerid]) {
						cards.push(event.fixedResult[targets[j].playerid]);
						lose_list.push([targets[j], [event.fixedResult[targets[j].playerid]]]);
					}
				}
				if (lose_list.length) {
					game.loseAsync({
						lose_list: lose_list,
					}).setContent('chooseToCompareLose');
				}
				event.lose_list=lose_list;
				event.getNum=function(card){
					for(var i of event.lose_list){
						if(i[1].contains&&i[1].contains(card)) return get.number(card,i[0]);
					}
					return get.number(card,false);
				}
				event.cardlist = cards;
				event.cards = cards;
				event.card1 = result[0].cards[0];
				event.num1=event.getNum(event.card1);
				event.iwhile = 0;
				event.result = {
					player: event.card1,
					targets: event.cardlist.slice(0),
					num1: [],
					num2: [],
				};
				"step 3"
				event.trigger('compareCardShowBefore');
				"step 4"
				game.log(player,'的拼点牌为',event.card1);
				
				// 更新拼点框
				game.broadcastAll(function(eventName, playerCard){
					if (!window.decadeUI) return;

					var dialog = ui.dialogs[eventName];
					dialog.playerCard = playerCard.copy();
				}, event.compareName, event.card1);
				
				"step 5"
				if (event.iwhile < targets.length) {
					event.target = targets[event.iwhile];
					// event.target.animate('target');
					// player.animate('target');
					event.card2 = event.cardlist[event.iwhile];
					event.num2=event.getNum(event.card2);
					game.log(event.target, '的拼点牌为', event.card2);
					player.line(event.target);
					
					// 更新拼点框
					game.broadcastAll(function(eventName, player, target, playerCard, targetCard){
						if (!window.decadeUI) {
							player.$compare(playerCard, target, targetCard);
							return;
						}
						
						var dialog = ui.dialogs[eventName];
						dialog.show();
						dialog.target = target;
						dialog.targetCard = targetCard.copy();
					}, event.compareName, player, event.target, event.card1, event.card2);
					event.trigger('compare');
					decadeUI.delay(400);
				} else {
					// 更新拼点框
					game.broadcastAll(function(eventName){
						if (!window.decadeUI) return;
						
						var dialog = ui.dialogs[eventName];
						dialog.close();
						setTimeout(function(dialog){
							dialog.player.$throwordered2(dialog.playerCard, true);
						}, 110, dialog);
						
					}, event.compareName);
					event.goto(9);
				}
				"step 6"
				event.result.num1[event.iwhile] = event.num1;
				event.result.num2[event.iwhile] = event.num2;
				
				var str, result;
				if (event.num1 > event.num2) {
					result = true;
					str = get.translation(player) + '拼点成功';
					player.popup('胜');
					target.popup('负');
				} else {
					result = false;
					str = get.translation(player) + '拼点失败';
					if (event.num1 == event.num2) {
						player.popup('平');
						target.popup('平');
					} else {
						player.popup('负');
						target.popup('胜');
					}
				}
				
				// 更新拼点框
				game.broadcastAll(function(str, eventName, result) {
					if (!window.decadeUI) {
						var dialog = ui.create.dialog(str);
						dialog.classList.add('center');
						setTimeout(function(dialog) {
							dialog.close();
						}, 1000, dialog);
						return;
					}
					
					var dialog = ui.dialogs[eventName];
					dialog.$playerCard.dataset.result = result ? '赢' : '没赢';
					
					setTimeout(function(dialog, eventName){
						dialog.hide();
						dialog.$playerCard.dataset.result = '';
						setTimeout(function(dialog){
							dialog.target.$throwordered2(dialog.targetCard, true);
						}, 180, dialog);
					}, 1400, dialog, eventName);
					
				}, str, event.compareName, result);
				decadeUI.delay(1800);
				
				"step 7"
				if (event.callback) {
					game.broadcastAll(function(card1, card2) {
						if (!window.decadeUI) {
							if (card1.clone) card1.clone.style.opacity = 0.5;
							if (card2.clone) card2.clone.style.opacity = 0.5;
						}
					}, event.card1, event.card2);
					var next = game.createEvent('compareMultiple');
					next.player = player;
					next.target = event.target;
					next.card1 = event.card1;
					next.card2 = event.card2;
					next.num1 = event.num1;
					next.num2 = event.num2;
					next.setContent(event.callback);
					event.compareMultiple=true;
				}
				
				"step 8"
				event.iwhile++;
				event.goto(5);
				"step 9"
				game.broadcastAll(ui.clear);
				event.cards.add(event.card1);
			};
		}
			
		if (lib.config.dhkmh=='guanxinghepindian') {
			lib.element.content.chooseToGuanxing = function(){
				"step 0"
				if (player.isUnderControl()) {
					game.modeSwapPlayer(player);
				}
				
				var cards = get.cards(num);
				var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
				if (this.getParent() && this.getParent().name && get.translation(this.getParent().name) != this.getParent().name) {
					guanxing.caption = '【' + get.translation(this.getParent().name) + '】';
				} else {
					guanxing.caption = "请按顺序排列牌。";
				}
				game.broadcast(function(player, cards, callback){
					if (!window.decadeUI) return;
					var guanxing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
					guanxing.caption = '【观星】';
					guanxing.callback = callback;
				}, player, cards, guanxing.callback);
				
				event.switchToAuto = function(){
					var cards = guanxing.cards[0].concat();
					var cheats = [];
					var judges = player.node.judges.childNodes;

					if (judges.length) cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
					if (cards.length) {
						for (var i = 0; i >= 0 && i < cards.length; i++) {
							if (get.value(cards[i], player) >= 5) {
								cheats.push(cards[i]);
								cards.splice(i, 1)
							}
						}
					}
					
					var time = 500;
					for (var i = 0; i < cheats.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 0);
							if (finished) guanxing.finishTime(1000);
						}, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
						time += 500;
					}
					
					for (var i = 0; i < cards.length; i++) {
						setTimeout(function(card, index, finished){
							guanxing.move(card, index, 1);
							if (finished) guanxing.finishTime(1000);
						}, time, cards[i], i, (i >= cards.length - 1));
						time += 500;
					}
				}
				
				if (event.isOnline()) {
					event.player.send(function(){
						if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
					}, event.player);
					
					event.player.wait();
					decadeUI.game.wait();
				} else if (!event.isMine()) {
					event.switchToAuto();
				}
				"step 1"
				game.addCardKnower(top,player);
				game.addCardKnower(bottom,player);
				
				player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
				game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
				game.updateRoundNumber()
			};
		}
		}
			
			lib.element.player.init = function(character, character2, skill){
				this.doubleAvatar = (character2 && lib.character[character2]) != undefined;
				
				var CUR_DYNAMIC = decadeUI.CUR_DYNAMIC;
				var MAX_DYNAMIC = decadeUI.MAX_DYNAMIC;
				if (CUR_DYNAMIC == undefined) {
					CUR_DYNAMIC = 0;
					decadeUI.CUR_DYNAMIC = CUR_DYNAMIC;
				}
				
				if (MAX_DYNAMIC == undefined) {
					MAX_DYNAMIC = decadeUI.isMobile() ? 2 : 10;
					if (window.OffscreenCanvas)
						MAX_DYNAMIC += 8;
					decadeUI.MAX_DYNAMIC = MAX_DYNAMIC;
				}
				
				if (this.dynamic)
					this.stopDynamic();
				var showDynamic = (this.dynamic || CUR_DYNAMIC < MAX_DYNAMIC) && duicfg.dynamicSkin;
				if (showDynamic && _status.mode != null) {
					var skins;
					var dskins = decadeUI.dynamicSkin;
					var avatars = this.doubleAvatar ? [character, character2] : [character];
					var increased;
					
					for (var i = 0; i < avatars.length; i++) {
						skins = dskins[avatars[i]];
						if (skins == undefined)
							continue;
						
						var keys = Object.keys(skins);
						if (keys.length == 0) {
							console.error('player.init: ' + avatars[i] + ' 没有设置动皮参数');
							continue;
						}
						
						var skin = skins[Object.keys(skins)[0]];
						if (skin.speed == undefined)
							skin.speed = 1;
						this.playDynamic({
							name: skin.name,		//	string 骨骼文件名，一般是assets/dynamic 下的动皮文件，也可以使用.. 来寻找其他文件目录
							action: skin.action,	// string 播放动作 不填为默认
							loop: true,				// boolean 是否循环播放
							loopCount: -1,			// number 循环次数，只有loop为true时生效
							speed: skin.speed,	 	// number 播放速度
							filpX: undefined,	 	// boolean 水平镜像
							filpY: undefined,	 	// boolean 垂直翻转
							opacity: undefined,	 	// 0~1		不透明度
							x: skin.x,				// 相对于父节点坐标x，不填为居中
													// (1) x: 10, 相当于 left: 10px；
													// (2) x: [10, 0.5], 相当于 left: calc(50% + 10px)；
							y: skin.y,				// 相对于父节点坐标y，不填为居中
													// (1) y: 10，相当于 top: 10px；
													// (2) y: [10, 0.5]，相当于 top: calc(50% + 10px)；
							scale: skin.scale,		// 缩放
							angle: skin.angle,		// 角度
							hideSlots: skin.hideSlots,	// 隐藏不需要的部件，想知道具体部件名称请使用SpineAltasSplit工具查看
							clipSlots: skin.clipSlots,	// 剪掉超出头的部件，仅针对露头动皮，其他勿用
						}, i == 1);
						
						this.$dynamicWrap.style.backgroundImage = 'url("' + extensionPath + 'assets/dynamic/' + skin.background + '")';
						if (!increased) {
							increased = true;
							decadeUI.CUR_DYNAMIC++;
						}
					}
				}
				
				// var jie;
				// if (character && duicfg.showJieMark) {
					// if (lib.characterPack.refresh)
						// jie = lib.characterPack.refresh[character];
					// if (jie == null) {
						// jie = character.substr(0, 3);
						// jie == 're_' || jie == 'ol_' || jie == 'xin' || jie == 'old';
					// }
						
					// if (jie != null) {
						// jie = lib.translate[character][0];
						// if (jie == '界') {
							// if (this.$jieMark == undefined)
								// this.$jieMark = dui.element.create('jie-mark', this);
							// else
								// this.appendChild(this.$jieMark);
						// }
					// }
				// }
				
				// var result = this._super.init.apply(this, arguments);
				// if (jie == '界') {
					// var text = result.node.name.innerText;
					// if (text[1] == '\n')
						// text = text.substr(2);
					// else 
						// text = text.substr(1);
					
					// result.node.name.innerText = text;
				// }
				
				// return result;
				return base.lib.element.player.init.apply(this, arguments);
			};
			
			lib.element.player.uninit = function(){
			    // if (this.$jieMark)
					// this.$jieMark.remove();
				
				this.stopDynamic();
				this.doubleAvatar = false;
				this.node.campWrap.dataset.camp = null;
				this.node.campWrap.node.campName.innerHTML = '';
				this.node.campWrap.node.campName.style.backgroundImage = '';
				this.node.name2.innerHTML = '';
				
				// for (var i = 1; i < 6; i++) if (this.isDisabled(i)) this.$enableEquip('equip' + i);
				
				this.expandedSlots = {};
				this.disabledSlots = {};
				
				this.name = undefined;
				this.name1 = undefined;
				this.sex = undefined;
				this.group = undefined;
				this.hp = undefined;
				this.maxHp = undefined;
				this.hujia = undefined;
				
				this.clearSkills(true);
				
				if (this.name2) {
					this.singleHp = undefined;
					this.name2 = undefined;
				}
				
				for (var mark in this.marks) this.marks[mark].remove();
				ui.updatem(this);
				
				this.skipList = [];
				this.skills=this.skills.filter(skill=>{
					return lib.skill[skill]&&lib.skill[skill].superCharlotte;
				});
				this.invisibleSkills = [];
				this.initedSkills = [];
				this.additionalSkills = {};
				this.disabledSkills = {};
				this.hiddenSkills = [];
				this.awakenedSkills = [];
				this.forbiddenSkills = {};
				this.phaseNumber = 0;
				this.stat = [{
					card: {},
					skill: {}
				}];
				this.tempSkills = {};
				this.storage = {};
				this.marks = {};
				this.ai = {
					friend: [],
					enemy: [],
					neutral: []
				};
				
				this.$uninit();
				
				return this;
			};
			lib.element.player.$uninit = function(){
				this.$syncDisable();
				if (this.isDisabledJudge()) {
					game.broadcastAll(function(player) {
						player.storage._disableJudge = false;
						for (var i = 0; i < player.node.judges.childNodes.length; i++) {
							if (player.node.judges.childNodes[i].name == 'disable_judge') {
								player.node.judges.removeChild(player.node.judges.childNodes[i]);
								break;
							}
						}
					}, this);
				}
				this.node.avatar.hide();
				this.node.count.hide();
				if (this.node.wuxing) {
					this.node.wuxing.hide();
				}
				if (this.node.name_seat) {
					this.node.name_seat.remove();
					this.node.name_seat = undefined;
				}
				
				this.node.hp.show();
				this.classList.remove('unseen');
				this.classList.remove('unseen2');
				
				this.node.identity.style.backgroundColor = '';
				this.node.intro.innerHTML = '';
				this.node.name.innerHTML = '';
				this.node.hp.innerHTML = '';
				this.node.count.innerHTML = '0';
				
				this.node.avatar2.hide();
				this.node.name2.innerHTML = '';
				this.classList.remove('fullskin2');
				
				// this.node.count.classList.remove('p2');
				
				for (var mark in this.marks) this.marks[mark].remove();
				ui.updatem(this);
			};
			
			lib.element.player.update = function(count, hp, hpMax, hujia){
				if (!_status.video) {
					if (this.hp >= this.maxHp) this.hp = this.maxHp;
					count = this.countCards('h');
					hp = this.hp;
					hpMax = this.maxHp;
					
					game.broadcast(function(player, hp, maxHp, hujia) {
						player.hp = hp;
						player.maxHp = maxHp;
						player.hujia = hujia;
						player.$update();
					}, this, hp, hpMax, this.hujia);
					this.$update(...arguments);
					
					game.addVideo('update', this, [count, hp, hpMax, this.hujia]);
				} else {
					// 虽然上面的 game.addVideo 提供了好几个参数，但是没啥用，因为videoContent里的update缺只给了1个参数。
					if (!count) count = this.countCards('h');
					hp = this.hp;
					hpMax = this.maxHp;
				}
			};
			lib.element.player.$update = function(count, hp, hpMax, hujia){
				if (this.hp >= this.maxHp) this.hp = this.maxHp;
				count = this.countCards('h');
				hp = this.hp;
				hpMax = this.maxHp;
				
				if (!_status.video) {
					if (this.hujia) {
						this.markSkill('ghujia');
					} else {
						this.unmarkSkill('ghujia');
					}
				}
				
				var hpNode = this.node.hp;
				if (!this.storage.nohp) {
					if (hpMax > 5) {
						hpNode.innerHTML = (isNaN(hp) ? '×' : (hp == Infinity ? '∞' : hp)) + '<br>/<br>'
							+ (isNaN(hpMax) ? '×' : (hpMax == Infinity ? '∞' : hpMax)) + '<div></div>';
						if (hp == 0) hpNode.lastChild.classList.add('lost');
						hpNode.classList.add('textstyle');
					} else {
						hpNode.innerHTML = '';
						hpNode.classList.remove('textstyle');
						while (hpMax > hpNode.childNodes.length) ui.create.div(hpNode);
						while (hpNode.childNodes.length && hpMax < hpNode.childNodes.length) hpNode.lastChild.remove();

						for (var i = 0; i < hpMax; i++) {
							var index = i;
							if (get.is.newLayout()) {
								index = hpMax - i - 1;
							}
							if (i < hp) {
								hpNode.childNodes[index].classList.remove('lost');
							} else {
								hpNode.childNodes[index].classList.add('lost');
							}
						}
					}
					
					if (hpNode.classList.contains('room')) {
						hpNode.dataset.condition = 'high';
					} else if (hp == 0) {
						hpNode.dataset.condition = '';
					} else if (hp > Math.round(hpMax / 2) || hp === hpMax) {
						hpNode.dataset.condition = 'high';
					} else if (hp > Math.floor(hpMax / 3)) {
						hpNode.dataset.condition = 'mid';
					} else {
						hpNode.dataset.condition = 'low';
					}
				}
				
				this.node.count.innerHTML = count;
				if (count >= 10) {
					this.node.count.dataset.condition = 'low';
				} else if (count > 5) {
					this.node.count.dataset.condition = 'higher';
				} else if (count > 2) {
					this.node.count.dataset.condition = 'high';
				} else if (count > 0) {
					this.node.count.dataset.condition = 'mid';
				} else {
					this.node.count.dataset.condition = 'none';
				}
				
				this.dataset.maxHp = hpMax;
				this.updateMarks();
				
				if (this.updates) {
					for (var i = 0; i < this.updates.length; i++) {
						this.updates[i](this);
					}
				}
				
				return this;
			};

			lib.element.player.setIdentity = function(identity){
				if (!identity) identity = this.identity;
				
				this.node.identity.dataset.color = identity;
				if (get.mode() == 'guozhan') {
					if (identity == 'ye' && get.is.jun(this)) this.identity = identity = lib.character[this.name1][1];
					this.group = identity;
					this.node.identity.firstChild.innerHTML = get.translation(identity);
					return this;
				}
				 
				if (get.is.jun(this)) {
					this.node.identity.firstChild.innerHTML = '君';
				} else {
					this.node.identity.firstChild.innerHTML = get.translation(identity);
				}
				
				return this;
				
				// if(!identity) identity = this.identity;
				
				// var identityColor = identity;
				// var identityNode = this.node.identity;
				
				// switch(get.mode()){
				    // case 'identity':
						// if (_status.mode == 'purple' && identity.indexOf('cai') >= 0) {
							// if (this.identity[0] == 'r') {
								// identity = 'cai';
							// } else {
								// identity = 'cai2';
								// this.classList.add('opposite-camp');
								// this.finalSide = false;
							// }
							
						// }
						// break;
					
					// case 'guozhan':
				        // if (identity == 'ye' && get.is.jun(this)) {
							// this.identity = identity = lib.character[this.name1][1];
						// }
						// this.group = identity;
				        // break;
				    // case 'versus':
						// this.finalSide = this.side;
						// if (this.side === false) this.classList.add('opposite-camp');
				        // break;
				// }
				
				// this.finalShownIdentity = identity;
				// identityNode.dataset.color = identityColor;
				// if (lib.huanhuazhizhan) return this;
				
				// if (decadeUI.config.campIdentityImageMode){
					// var that = this;
					// var image = new Image();
					// var url = extensionPath + 'image/decoration/identity_' + decadeUI.getPlayerIdentity(that, identity) + '.png';
				    // that.finalShownIdentity = identity;
					
					// image.identity = identity;
				    // image.onerror = function(){
						// if (this.identity != that.finalShownIdentity) return;
						
						// that.node.identity.firstChild.style.opacity = '';
						// that.node.identity.firstChild.innerHTML = get.mode() == 'boss' ? get.translation(that.finalShownIdentity) :
							// decadeUI.getPlayerIdentity(that, that.finalShownIdentity, true, true);
				    // };
				    
					// that.node.identity.firstChild.innerHTML = '';
					// that.node.identity.firstChild.style.opacity = '0';
					// that.node.identity.style.backgroundImage = 'url("' + url + '")';
					// image.src = url;
					
				// } else {
				    // this.node.identity.firstChild.innerHTML = get.is.jun(this) ? '君' : get.translation(identity);
				// }
				
				// return this;
			};
			
			lib.element.player.addSkill = function(skill){
				var skill = playerAddSkillFunction.apply(this, arguments);
				if (!Array.isArray(skill)) {
					var character1 = lib.character[this.name];
					var character2 = lib.character[this.name2];
					if ((!character1 || !character1[3].contains(skill)) && (!character2 || !character2[3].contains(skill))) {
						this.node.gainSkill.gain(skill);
					}
				}

				return skill;
			};
			
			lib.element.player.removeSkill = function(skill){
				var skill = playerRemoveSkillFunction.apply(this, arguments);
				if (!Array.isArray(skill)) {
					if (this.node.gainSkill.skills && this.node.gainSkill.skills.contains(skill)) {
						this.node.gainSkill.lose(skill);
					}
				}

				return skill;
			};
			
			lib.element.player.getState = function(){
				var state = base.lib.element.player.getState.apply(this, arguments);
				state.seat = this.seat;
				return state;
			};
			
			lib.element.player.setModeState = function(info){
				if (info && info.seat) {
					if (!this.node.seat) this.node.seat = decadeUI.element.create('seat', this);
					this.node.seat.innerHTML = get.cnNumber(info.seat, true);
				}
				
				if (base.lib.element.player.setModeState) {
					return base.lib.element.player.setModeState.apply(this, arguments);
				} else {
					return this.init(info.name, info.name2);
				}
			};
			
			lib.element.player.prompt = function (str, nature) {
				var node;
				if (this.node.prompt) {
					node = this.node.prompt;
					node.innerHTML = '';
					node.className = 'damage normal-font damageadded';
				} else {
					node = ui.create.div('.damage.normal-font', this);
					this.node.prompt = node;
					ui.refresh(node);
					node.classList.add('damageadded');
				}
				node.innerHTML = str;
				node.dataset.text = node.innerText;
				node.dataset.nature = nature || 'soil';
				node.style.animation = 'open-fade-in 0.6s';
			};
			
			lib.element.player.$damagepop = function(num, nature, font, nobroadcast){
				if (typeof num == 'number' || typeof num == 'string') {
					game.addVideo('damagepop', this, [num, nature, font]);
					if (nobroadcast !== false) {
						game.broadcast(function(player, num, nature, font) {
							player.$damagepop(num, nature, font);
						}, this, num, nature, font);
					}
					
					var node;
					if (this.popupNodeCache && this.popupNodeCache.length) {
						node = this.popupNodeCache.shift();
					} else {
						node = decadeUI.element.create('damage');
					}
					
					if (font) {
						node.classList.add('normal-font');
					} else {
						node.classList.remove('normal-font');
					}
					
					if (typeof num == 'number') {
						node.popupNumber = num;
						if (num == Infinity) {
							num = '+∞'
						} else if (num == -Infinity) {
							num = '-∞';
						} else if (num > 0) {
							num = '+' + num;
						}
						
					} else {
						node.popupNumber = null;
					}
					
					// 挟天子以令诸侯特殊处理
					if (num=='挟天子以令诸侯') {
						num='挟天子'+'<br>'+'以令诸侯';
						node.style.position = 'relative';
						node.style.top = 'calc(50% - 30px)';
					} else {
						node.style.position = '';
						node.style.top = '';
					}
					
					// 修复了lib.element.player.$damagepop中因使用textContent导致无法解析HTML的异常（举例：神邓艾）
					node.innerHTML = num;
					node.dataset.text = node.innerText;
					node.nature = nature || 'soil';
					// node.dataset.nature = nature || 'soil';
					this.damagepopups.push(node);
				}
				
				if (this.damagepopups.length && !this.damagepopLocked) {
					var node = this.damagepopups.shift();
					this.damagepopLocked = true;
					if (this != node.parentNode) this.appendChild(node);
					
					var player = this;
					if (typeof node.popupNumber == 'number') {
						var popupNum = node.popupNumber;
						if (popupNum < 0) {
							switch (node.nature) {
								case 'thunder':
									if (popupNum <= -2) {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play6' }, { scale: 0.8, parent: player });
									} else {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play5' }, { scale: 0.8, parent: player });
									}
									break;
								case 'fire':
									if (popupNum <= -2) {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play4' }, { scale: 0.8, parent: player });
									} else {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play3' }, { scale: 0.8, parent: player });
									}
									break;
								case 'water':
									break;
								default:
									if (popupNum <= -2) {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play2' }, { scale: 0.8, parent: player });
									} else {
										decadeUI.animation.playSpine({ name:'effect_shoujidonghua', action: 'play1' }, { scale: 0.8, parent: player });
									}
									break;
							}
						} else {
							if (node.nature == 'wood') {
								decadeUI.animation.playSpine('effect_zhiliao', { scale: 0.7, parent: player });
							}
						}
					} else {// 转圈特效，除受伤和回复外都会转圈（待完善）
						if (config.jinengeffect){
							// if () {
								decadeUI.animation.playSpine("jineng", { scale: 1.5, parent: player });
							// }
						};
					}
					
					node.style.animation = 'open-fade-in-out 1.2s';
					setTimeout(function(player, node){
						if (!player.popupNodeCache) player.popupNodeCache = [];
						node.style.animation = '';
						player.popupNodeCache.push(node);
					}, 1210, player, node);
				
					setTimeout(function(player) {
						player.damagepopLocked = false;
						player.$damagepop();
					}, 500, player);
				}
			};
			
			lib.element.player.$throw = function(card, time, init, nosource){
				time = void 0;
				var throwns;
				var itemtype = get.itemtype(card);
				if (typeof card == 'number') {
					throwns = [];
					var c;
					while (card--) {
						c = decadeUI.element.create('card infohidden infoflip');
						c.moveTo = lib.element.card.moveTo;
						c.moveDelete = lib.element.card.moveDelete;
						throwns.push(c);
					}
					throwns.flip = true;
				} else if (itemtype == 'cards') {
					throwns = card.concat();
				} else if (itemtype == 'card') {
					throwns = [card];
				} else {
					return;
				}
				
				if (init !== false) {
					if (init !== 'nobroadcast') {
						game.broadcast(function(player, cards, time, init, nosource) {
							player.$throw(cards, time, init, nosource);
						}, this, throwns, time, init, nosource);
					}
					
					game.addVideo('throw', this, [get.cardsInfo(throwns), time, nosource]);
				}
				
				if (!throwns.flip) {
					for (var i = 0; i < throwns.length; i++) {
						throwns[i] = throwns[i].copy('thrown');
					}
				}
				
				for (var i = 0; i < throwns.length; i++) {
					if (game.chess) {
						this.chessFocus();
					}
					
					this.$throwordered2(throwns[i], nosource);
				}
				
				return throwns[throwns.length - 1];
			};
			
			lib.element.player.$throwordered2 = function(card, nosource, usedText){
				if (_status.connectMode) ui.todiscard = [];
				card.classList.add('thrown');
				card.classList.add('transition-none');
				
				var inserted = false;
				
				if (!card.fixed){
    				for (var i = 0; i < ui.thrown; i++){
    			        if (ui.thrown[i].parentNode == ui.arena){
    			            ui.arena.insertBefore(card, ui.thrown[i]);
    			            inserted = true;
    			            break;
    			        }
    			    }
				}
				
				if (!inserted) ui.arena.appendChild(card);
				if (!card.fixed) ui.thrown.splice(0, 0, card);
				var $parent = ui.arena;
				var x, y;
				
				if (!decadeUI.dataset.discardDataUpdated) {
					decadeUI.dataset.discardDataUpdated = true;
					decadeUI.dataset.discardData = {
						card:{
							width: card.offsetWidth,
							height: card.offsetHeight,
							scale: decadeUI.getCardBestScale(),
						},
						width: $parent.offsetWidth,
						height: $parent.offsetHeight,
					};
				}
				
				var discardData = decadeUI.dataset.discardData;
				
				if (nosource){
					x = ((discardData.width - discardData.card.width) / 2 - discardData.width * 0.08) + 'px';
					y = ((discardData.height - discardData.card.height) / 2) + 'px';
				}else{
					x = ((this.offsetWidth - discardData.card.width) / 2 + this.offsetLeft) + 'px';
					y = ((this.offsetHeight - discardData.card.height) / 2 + this.offsetTop) + 'px';
				}

				card.style.transform = 'translate(' + x + ', ' + y + ')' + 'scale(' + decadeUI.getCardBestScale() + ')';
				ui.refresh(card);
				card.classList.remove('transition-none');
				card.scaled = true;
				if (card.fixed) return;
				decadeUI.layout.invalidateDiscard();
				var usedTextNode = card.querySelector('.used-info');
				if (!usedTextNode) return card;
				if (usedText) {
					usedTextNode.textContent = usedText;
					return card;
				}
				
				var infoText = '';
				var showPlayerName = true;
				var event = _status.event;
				
				switch(event.name){
				    case 'useCard':
				        if (event.targets.length == 1){
				            if (event.targets[0] == this){
				                infoText = '对自己';
				            }else{
				                infoText = '对' + get.translation(event.targets[0]);
				            }
				        }else{
				            infoText = '使用';
				        }
						
						var cardname = event.card.name;
						var cardnature = event.card.nature;
						var cardsuit = event.card.suit;
						var cardnumber = event.card.number;
						if (lib.config.cardtempname != 'off') {
							// 特殊区域（如木牛流马）内的牌不加标签
							if (get.position(card) != 's' && ((card.name != cardname) || (!get.is.sameNature(cardnature,card.nature,true)) || (card.suit!=cardsuit) || (card.number!=cardnumber))) {
								if (!card._tempName) card._tempName = ui.create.div('.temp-name', card);
								var tempname = '';
								if(card.suit!=cardsuit){
									var suitData = {
										'heart':"<span style='color:red;font-family:shousha'>♥</span>",
										'diamond':"<span style='color:red;font-family:shousha'>♦</span>",
										'spade':"<span style='color:black;font-family:shousha'>♠</span>",
										'club':"<span style='color:black;font-family:shousha'>♣</span>",
										'none':"无色",
										'undefined':"",
									};
									tempname += suitData[cardsuit];
								}
								if(card.number!=cardnumber){
									var numberData = {
										'1': "A",
										'11': "J",
										'12': "Q",
										'13': "K",
										'undefined':"",
										'null':"",
									};
									tempname += numberData[cardnumber];
								}
								if((card.name != cardname) || (!get.is.sameNature(cardnature,card.nature,true))){
									var tempname2 = get.translation(cardname);
									// 若带花色/点数牌的标签字符总长度大于4且牌名翻译字符长度大于2，则牌名翻译保留前2个字符
									if(((card.suit!=cardsuit)||(card.number!=cardnumber)) && tempname.length+tempname2.length>4 && tempname2.length>2) {tempname2=tempname2.substring(0,2);}
									if (cardnature) {
										card._tempName.dataset.nature = cardnature;
										if (cardname == 'sha') {
											tempname2 = get.translation(cardnature) + tempname2;
										}
									}
									tempname += "<b> </b>"+tempname2;
								}
								
								card._tempName.innerHTML = tempname;
								card._tempName.tempname = tempname;
							}
						}
						
						if (decadeUI.config.cardUseEffect && event.card && event.card.cards && event.card.cards.length == 1) {
							var name = event.card.name;
							var nature = event.card.nature;
							
							switch (name) {
								case 'effect_caochuanjiejian':
									decadeUI.animation.cap.playSpineTo(card, 'effect_caochuanjiejian');
									break;
								case 'sha':
									switch (nature) {
										case 'thunder':
											decadeUI.animation.cap.playSpineTo(card, 'effect_leisha');
											break;
										case 'fire':
											decadeUI.animation.cap.playSpineTo(card, 'effect_huosha');
											break;
										default:
											if (get.color(card) == 'red') {
												decadeUI.animation.cap.playSpineTo(card, 'effect_hongsha');
											} else {
												decadeUI.animation.cap.playSpineTo(card, 'effect_heisha');
											}
											break;
									}
									break;
								case 'shan':
									decadeUI.animation.cap.playSpineTo(card, 'effect_shan');
									break;
								case 'tao':
									decadeUI.animation.cap.playSpineTo(card, 'effect_tao', { scale: 0.9 });
									break;
								case 'tiesuo':
									decadeUI.animation.cap.playSpineTo(card, 'effect_tiesuolianhuan', { scale: 0.9 });
									break;
								case 'jiu':
									decadeUI.animation.cap.playSpineTo(card, 'effect_jiu', { y:[-30, 0.5] });
									break;
								case 'kaihua':
									decadeUI.animation.cap.playSpineTo(card, 'effect_shushangkaihua');
									break;
								case 'wuzhong':
									decadeUI.animation.cap.playSpineTo(card, 'effect_wuzhongshengyou');
									break;
								case 'wuxie':
									decadeUI.animation.cap.playSpineTo(card, 'effect_wuxiekeji', { y:[10, 0.5], scale: 0.9 });
									break;
								// case 'nanman':
									// decadeUI.animation.cap.playSpineTo(card, 'effect_nanmanruqin', { scale: 0.45 });
									// break;
								case 'wanjian':
									decadeUI.animation.cap.playSpineTo(card, 'effect_wanjianqifa', { scale: 0.78 });
									break;
								case 'wugu':
									decadeUI.animation.cap.playSpineTo(card, 'effect_wugufengdeng', { y:[10, 0.5] });
									break;
								// case 'taoyuan':
									// decadeUI.animation.cap.playSpineTo(card, 'effect_taoyuanjieyi', { y:[10, 0.5] });
									// break;
								case 'shunshou':
									decadeUI.animation.cap.playSpineTo(card, 'effect_shunshouqianyang');
									break;
								case 'huogong':
									decadeUI.animation.cap.playSpineTo(card, 'effect_huogong', { x:[8, 0.5], scale: 0.5 });
									break;
								case 'guohe':
									decadeUI.animation.cap.playSpineTo(card, 'effect_guohechaiqiao', { y:[10, 0.5] });
									break;
								case 'yuanjiao':
									decadeUI.animation.cap.playSpineTo(card, 'effect_yuanjiaojingong');
									break;
								case 'zhibi':
									decadeUI.animation.cap.playSpineTo(card, 'effect_zhijizhibi');
									break;
								case 'zhulu_card':
									decadeUI.animation.cap.playSpineTo(card, 'effect_zhulutianxia');
									break;
							}
							// if (name == 'sha' || name == 'shan') {
								// if (!card.animation) card.animation = decadeUI.element.create('animation', card);
								// if (get.color(card) == 'red') card.animation.style.color = 'rgb(200,0,0)';
								// else card.animation.style.color = 'black';
								// card.animation.innerHTML = get.translation(name);
								// card.animation.dataset.nature = nature;
								// card.animation.style.webkitAnimation = 'use-card 2.5s forwards';
							// }
						}
				        break;
				    case 'respond':
				        infoText = '打出';
						
						// 搬运自上方case 'useCard':，注意同步更新
						var cardname = event.card.name;
						var cardnature = event.card.nature;
						var cardsuit = event.card.suit;
						var cardnumber = event.card.number;
						if (lib.config.cardtempname != 'off') {
							// 特殊区域（如木牛流马）内的牌不加标签
							if (get.position(card) != 's' && ((card.name != cardname) || (!get.is.sameNature(cardnature,card.nature,true)) || (card.suit!=cardsuit) || (card.number!=cardnumber))) {
								if (!card._tempName) card._tempName = ui.create.div('.temp-name', card);
								var tempname = '';
								if(card.suit!=cardsuit){
									var suitData = {
										'heart':"<span style='color:red;font-family:shousha'>♥</span>",
										'diamond':"<span style='color:red;font-family:shousha'>♦</span>",
										'spade':"<span style='color:black;font-family:shousha'>♠</span>",
										'club':"<span style='color:black;font-family:shousha'>♣</span>",
										'none':"无色",
										'undefined':"",
									};
									tempname += suitData[cardsuit];
								}
								if(card.number!=cardnumber){
									var numberData = {
										'1': "A",
										'11': "J",
										'12': "Q",
										'13': "K",
										'undefined':"",
										'null':"",
									};
									tempname += numberData[cardnumber];
								}
								if((card.name != cardname) || (!get.is.sameNature(cardnature,card.nature,true))){
									var tempname2 = get.translation(cardname);
									// 若带花色/点数牌的标签字符总长度大于4且牌名翻译字符长度大于2，则牌名翻译保留前2个字符
									if(((card.suit!=cardsuit)||(card.number!=cardnumber)) && tempname.length+tempname2.length>4 && tempname2.length>2) {tempname2=tempname2.substring(0,2);}
									if (cardnature) {
										card._tempName.dataset.nature = cardnature;
										if (cardname == 'sha') {
											tempname2 = get.translation(cardnature) + tempname2;
										}
									}
									tempname += "<b> </b>"+tempname2;
								}
								
								card._tempName.innerHTML = tempname;
								card._tempName.tempname = tempname;
							}
						}
						
				        break;
				    case 'useSkill':
				        infoText = '发动';
				        break;
				    case 'die':
				        card.classList.add('invalided');
				        decadeUI.layout.delayClear();
				        infoText = '弃置';
				        break;
				    case 'lose':
						if (event.parent && event.parent.name == 'discard' && event.parent.parent) {
							var skillEvent = event.parent.parent.parent;
							if (skillEvent) {
								infoText = lib.translate[skillEvent.name != 'useSkill' ? skillEvent.name : skillEvent.skill];
								if (infoText == null) infoText = '';
								infoText += '弃置';
								break;
							}
						}
				    case 'discard':
				        infoText = '弃置';
				        break;
				    case 'phaseJudge':
				        infoText = '即将生效';
						break;
				    case 'judge':
						showPlayerName = false;
						infoText = event.judgestr + '的判定牌';
				        if (!lib.element.content['throwJudgeCallback']){
				            lib.element.content['throwJudgeCallback'] = function(event,step,source,player,target,targets,card,cards,skill,forced,num,trigger,result,_status,lib,game,ui,get,ai){
    				            var callback = event.parent.overrides.callback;
    				            if (callback){
    				                if (!callback._parsed){
    				                    event.parent.overrides.callback = lib.init.parsex(callback);
    				                    event.parent.overrides.callback._parsed = true;
    				                    callback = event.parent.overrides.callback;
    				                    var steps = callback.toString().match(/case(.*?)(?=:)/g);
    				                    
    				                    if (steps && steps.length){
    				                        event.parent.overrides.step = parseInt(steps[steps.length - 1].replace('case', '')) + 1;
    				                    }
    				                    
    				                }
    				            }
    				            
    				            if (event.parent.overrides.step == step){
    				                event.finish();
									return;
    				            }
    				            
    				            if (callback) callback.apply(this, arguments);
    				            var card = event.judgeResult.card.clone;
								var apcard = event.parent.apcard;
    				            card.node.usedTextNode = card.querySelector('.used-info');
								
								var action;
								var judgeValue;
								var getEffect = event.parent.judge2;
								if (getEffect) {
									judgeValue = getEffect(event.parent.result);
								} else {
									judgeValue = decadeUI.get.judgeEffect(event.parent.judgestr, event.judgeResult.judge);
								}
								
								if ((typeof judgeValue == 'boolean')) {
									judgeValue = judgeValue ? 1 : -1;
								} else {
									judgeValue = event.judgeResult.judge;
								}
								
								if (judgeValue >= 0) {
									action = 'play4';
									infoText = '判定生效';
								} else {
									action = 'play5';
									infoText = '判定失效';
								}
								
								if (apcard && apcard._ap) apcard._ap.stopSpineAll();
								if (apcard && apcard._ap && apcard == card) {
									apcard._ap.playSpine({
										name: 'effect_panding',
										action: action
									});
								} else {
									decadeUI.animation.cap.playSpineTo(card, {
										name: 'effect_panding',
										action: action
									});
								}
								
								event.parent.apcard = undefined;
								card.node.usedTextNode.innerHTML = get.translation(event.parent.judgestr) + infoText;
				            };
				            
				            lib.element.content['throwJudgeCallback']._parsed = true;
				        }
				        
						if (decadeUI.config.cardUseEffect) {
							decadeUI.animation.cap.playSpineTo(card, {
								name: 'effect_panding',
								action: 'play',
								loop: true
							});
							
							event.apcard = card;
						}
						
				        if (!event.overrides) event.overrides = { };
				        event.overrides.callback = event.callback;
				        event.overrides.step = 1;
				        event.callback = 'throwJudgeCallback';
				        break;
				    default:
						infoText = get.translation(event.name);
						if (infoText == event.name) infoText = '';
				        break;
				}
				
				usedTextNode.textContent = (showPlayerName ? get.translation(this) : '') + infoText;
				return card;
			};
			
			lib.element.player.$dieflip = function(){
				if (!decadeUI.config.playerDieEffect && playerDieFlipFunction) playerDieFlipFunction.apply(this, arguments);
			};
			
			Object.defineProperties(lib.element.player, {
				$dieAfter: {
					configurable: true,
					get:function(){
						return ride.lib.element.player.$dieAfter;
					},
					set:function(value){
						base.lib.element.player.$dieAfter = value;
					}
				}
			});	
			
			lib.element.player.$compare = function(card1, target, card2){
				game.broadcast(function(player, target, card1, card2) {
					player.$compare(card1, target, card2);
				}, this, target, card1, card2);
				game.addVideo('compare', this, [get.cardInfo(card1), target.dataset.position, get.cardInfo(card2)]);
				var player = this;
				target.$throwordered2(card2.copy(false));
				player.$throwordered2(card1.copy(false));
			};
			
			/*
			lib.element.player.$disableEquip = function(skill){
				game.broadcast(function(player, skill) {
					player.$disableEquip(skill);
				}, this, skill);
				var player = this;
				if (!player.storage.disableEquip) player.storage.disableEquip = [];
				player.storage.disableEquip.add(skill);
				player.storage.disableEquip.sort();
				var pos = {
					equip1: '武器栏',
					equip2: '防具栏',
					equip3: '+1马栏',
					equip4: '-1马栏',
					equip5: '宝物栏'
				} [skill];
				if (!pos) return;
				var card = game.createCard('feichu_' + skill, pos, '');
				card.fix();
				card.style.transform = '';
				card.classList.remove('drawinghidden');
				card.classList.add('feichu');
				delete card._transform;
				
				
				var iconName = {
					equip1: 'icon feichu icon-saber',
					equip2: 'icon feichu icon-shield',
					equip3: 'icon feichu icon-mount',
					equip4: 'icon feichu icon-mount',
					equip5: 'icon feichu icon-treasure'
				}[skill];
				
				if (iconName) {
					var icon = decadeUI.element.create(iconName, card);
					icon.style.zIndex = '1';
				}
				
				var equipNum = get.equipNum(card);
				var equipped = false;
				for (var i = 0; i < player.node.equips.childNodes.length; i++) {
					if (get.equipNum(player.node.equips.childNodes[i]) >= equipNum) {
						player.node.equips.insertBefore(card, player.node.equips.childNodes[i]);
						equipped = true;
						break;
					}
				}
				if (!equipped) {
					player.node.equips.appendChild(card);
					if (_status.discarded) {
						_status.discarded.remove(card);
					}
				}
				
				// 修改装备栏武器已废除后不添加攻击范围
				var elef = card.getElementsByClassName("name2");
				if (!(elef.length > 1)) {
					var ef = elef[0].children;
					var subype = card.getAttribute("data-card-subype");
					if (subype == "equip1") ef[1].textContent = "已废除";
				}
				
				return player;
			};
			*/
			
			// 修改game.js的函数$syncDisable(map){
			//同步装备区废除牌显示状态
			lib.element.player.$syncDisable = function(map){
				const player=this;
				const suits={equip3:'+1马栏',equip4:'-1马栏',equip6:'特殊栏'};
				if(get.is.mountCombined()) suits.equip3='坐骑栏';
				if(!map){
					map=(player.disabledSlots||{});
				}
				game.addVideo('$syncDisable',player,get.copy(map))
				game.broadcast(function(player,map){
					player.disabledSlots=map;
					player.$syncDisable(map);
				},player,map)
				const map2=get.copy(map);
				const cards=Array.from(player.node.equips.childNodes);
				for(const card of cards){
					if(card.name.startsWith('feichu_')){
						const index=card.name.slice(7);
						if(!map2[index]) map2[index]=0;
						map2[index]--;
					}
				}
				for(const index in map2){
					if(!index.startsWith('equip')||!(parseInt(index.slice(5))>0)) continue;
					const num=map2[index];
					if(num>0){
						for(let i=0;i<num;i++){
							const card=game.createCard('feichu_'+index,(suits[index]||(get.translation(index)+'栏')),'');
							card.fix();
							card.style.transform='';
							card.classList.remove('drawinghidden');
							card.classList.add('feichu');
							delete card._transform;
							const equipNum=get.equipNum(card);
							let equipped=false;
							for(let j=0;j<player.node.equips.childNodes.length;j++){
								if(get.equipNum(player.node.equips.childNodes[j])>=equipNum){
									player.node.equips.insertBefore(card,player.node.equips.childNodes[j]);
									equipped=true;
									break;
								}
							}
							if(!equipped){
								player.node.equips.appendChild(card);
								if(_status.discarded){
									_status.discarded.remove(card);
								}
							}
							
							// 修改装备栏武器已废除后不添加攻击范围
							var elef = card.getElementsByClassName("name2");
							if (!(elef.length > 1)) {
								var ef = elef[0].children;
								var subype = card.getAttribute("data-card-subype");
								if (subype == "equip1") ef[1].textContent = "已废除";
							}
							
						}
					}
					else if(num<0){
						for(let i=0;i>num;i--){
							const card=cards.find(card=>card.name=='feichu_'+index);
							if(card){
								player.node.equips.removeChild(card);
								cards.remove(card);
							}
						}
					}
				}
			};
			
			// Show-K修复版搬运
			Mixin.replace(
				'lib.element.card.copy',
				/(?=\s*node\s*\.\s*classList\s*\.\s*remove\s*\(\s*'hidden'\s*\)\s*;)/,
				function (node) {
					node.decadeCardSource = this.decadeCardSource;
				},
				/(?=\s*return\s*node\s*;)/,
				function (clone, node) {
					if (clone && node.classList.contains('decade-card')) new MutationObserver(mutationRecords => mutationRecords.forEach(mutationRecord => {
						const target = mutationRecord.target, informationHidden = target.classList.contains('infohidden');
						if (informationHidden == mutationRecord.oldValue.split(' ').includes('infohidden')) return;
						if (informationHidden) target.style.removeProperty('background-image');
						else target.style.backgroundImage = `url('${target.decadeCardSource}')`;
					})).observe(node, {
						attributeFilter: ['class'],
						attributeOldValue: true
					});
				}
			);
			Mixin.replace(
				'lib.skill._discard.content',
				/(?=\s*var\s*todiscard\s*=\s*ui\s*\.\s*todiscard\s*\[\s*id\s*\]\s*;)/,
				() => {
					if (window.decadeUI) {
						ui.todiscard = [];
						ui.clear();
						return;
					}
				}
			);
			Mixin.replace(
				'ui.create.dialog',
				/\s*dialog\s*\.\s*bar\d*\s*=\s*ui\s*\.\s*create\s*\.\s*div\s*\([\s\S]*?\)\s*;/g
			);
			
			lib.element.card.moveTo = function(player){
                if (!player) return;
                
                this.fixed = true;
                this.moving = true;
                var x = Math.round((player.offsetWidth - this.offsetWidth) / 2 + player.offsetLeft);
                var y = Math.round((player.offsetHeight - this.offsetHeight) / 2 + player.offsetTop);
                var scale = decadeUI.getCardBestScale();
                this.style.transform = 'translate(' + x + 'px,' + y + 'px)scale(' + scale + ')';
                return this;
            };
            
            lib.element.card.moveDelete = function(player, handUpdate){
				this.fixed = true;
				this.moving = true;
				if(!this._listeningEnd || this._transitionEnded){
					this.moveTo(player);
					if (!handUpdate && ui.thrown.indexOf(this) != -1){
					    decadeUI.layout.invalidateDiscard();
					}
					
					setTimeout(function(card){
						card.delete();
					}, 330, this);
				}
				else{
					this._onEndMoveDelete = player;
				}
			};
			
			lib.element.player.$draw = function(num, init, config){
                if (game.chess) return playerDrawFunction.call(this, num, init, config);
                if (init !== false && init !== 'nobroadcast'){
                    game.broadcast(function(player, num, init, config){
                        player.$draw(num, init, config);
                    }, this, num, init, config);
                }
                
                var cards;
                if (get.itemtype(num) == 'cards'){
                    cards = num;
                    num = cards.length;
                } else if (get.itemtype(num) == 'card'){
                    cards = [num];
                    num = 1;
                } else if (num == null){
					num = 1;
				}
                
                if (init !== false){
                    if (cards){
                        game.addVideo('drawCard', this, get.cardsInfo(cards));
                    } else {
                        game.addVideo('draw', this, num);
                    }
                }				
                
                var nodes = [];
                for (var i = 0; i < num; i++){
                    var card = cards ? cards[i].copy('thrown', 'drawingcard') : ui.create.div('.card.thrown.drawingcard');
                    card.fixed = true;
                    card.hide();
                    card.classList.add('transition-none');
                    this.parentNode.appendChild(card);
                    nodes.push(card);
                }

                var parentNode = this.parentNode;
                var scale = decadeUI.getCardBestScale();
				var cardWidth = nodes[0].offsetWidth * scale;
				var x;
				var y = Math.round((parentNode.offsetHeight - nodes[0].offsetHeight) / 2);
				var margin = (parentNode.offsetWidth - this.offsetWidth) / 2 - (nodes[0].offsetWidth - cardWidth) / 2;
				var marginOffset = Math.round(margin - this.offsetLeft + (nodes[0].offsetWidth - cardWidth) / 2);
				var offset = this.offsetWidth - cardWidth * nodes.length;
				var overflow = offset < 0;
				if (overflow){
					offset = Math.abs(offset) / (nodes.length - 1);
				}else{
					offset /= 2;
				}
                
                var tx, ty, time = 50;
                for (var i = 0; i < nodes.length; i++){
                    var node = nodes[i];
					if (overflow){
						x = Math.round((i * (cardWidth - offset) + margin));
					}else{
						x = Math.round((offset + i * cardWidth + margin));
					}
					
					node.style.transform = 'translate(' + x + 'px,' + y + 'px)scale(' + scale + ')';
					
                    tx = x - marginOffset;
                    ty = (this.offsetHeight - node.offsetHeight) / 2 + this.offsetTop;
                    
                    setTimeout(function(mnode, mnodes, mtx, mty, mscale){
                        mnode.show();
                        mnode.classList.remove('transition-none');
                        ui.refresh(mnode);
                        mnode.style.transform = 'translate(' + mtx + 'px, ' + mty + 'px)' + 'scale(' + mscale + ')';
                        
                        if (mnode == mnodes[mnodes.length - 1]){
                            mnode.deletes = mnodes;
                            
							var time = getComputedStyle(mnode).transitionDuration;
							if (time) {
								if (time.lastIndexOf('ms') != -1){
								time = parseInt(time.replace(/ms/, ''));
								}else if(time.lastIndexOf('s') != -1){
									time = parseFloat(time.replace(/s/, '')) * 1000;
								}
							} else {
								time = 500;
							}
							
							setTimeout(function(){
								var deletes = mnode.deletes;
                                if (!deletes) return;
                                
                                for (var i = 0; i < deletes.length; i++){
                                    deletes[i].style.transitionDuration = '0.3s';
                                    deletes[i].delete();
                                }
								
                                mnode.deletes = null;
							}, time);                           
                        }
                    }, time, node, nodes, tx, ty, scale);
                    
                    time += 50;
				}
            };
            
            lib.element.player.$give = function(card, player, log, init) {
                if (init !== false) {
                    game.broadcast(function(source, card, player, init) {
                        source.$give(card, player, false, init);
                    },
                    this, card, player, init);
                    if ((typeof card == 'number') && card >= 0) {
                        game.addVideo('give', this, [card, player.dataset.position]);
                    } else {
                        if (get.itemtype(card) == 'card') {
                            card = [card];
                        }
                        if (get.itemtype(card) == 'cards') {
                            game.addVideo('giveCard', this, [get.cardsInfo(card), player.dataset.position]);
                        }
                    }
                }
                
                if (get.itemtype(card) == 'cards') {
                    if (log != false && !_status.video) {
                        game.log(player, '从', this, '获得了', card);
                    }
                    if (this.$givemod) {
                        this.$givemod(card, player);
                    } else {
                        for (var i = 0; i < card.length; i++) {
                            this.$give(card[i], player, false, false);
                        }
                    }
                } else if ((typeof card == 'number') && card >= 0) {
                    if (log != false && !_status.video) {
                        game.log(player, '从', this, '获得了' + get.cnNumber(card) + '张牌');
                    }
                    if (this.$givemod) {
                        this.$givemod(card, player);
                    } else {
                        while (card--) this.$give('', player, false, false);
                    }
                } else {
                    if (log != false && !_status.video) {
                        if (get.itemtype(card) == 'card' && log != false) {
                            game.log(player, '从', this, '获得了', card);
                        } else {
                            game.log(player, '从', this, '获得了一张牌');
                        }
                    }
                    if (this.$givemod) {
                        this.$givemod(card, player);
                    } else {
                        var node;
                        if (get.itemtype(card) == 'card') {
                            node = card.copy('card', 'thrown', false);
                        } else {
                            node = ui.create.div('.card.thrown');
                        }
                        
                        node.fixed = true;
                        this.$throwordered2(node);
                        node.moveTo = lib.element.card.moveTo;
                        node.moveDelete = lib.element.card.moveDelete;
                        node.moveDelete(player);
                    }
                }
            };
            
            lib.element.player.$gain2 = function(cards, log){
                if (log === true) game.log(this, '获得了', cards);
                
                game.broadcast(function(player, cards){
                    player.$gain2(cards);
                }, this, cards);
                
                switch(get.itemtype(cards)){
                    case 'card':
                        cards = [cards];
                        break;
						
                    case 'cards':
                        cards = cards;
                        break;
						
                    default:
                        if (cards.cards) {
							cards = cards.cards;
							break;
						}
						
						return;
                }
                
                var list = [], list2 = [];
                var update = false;
                
                for (var i = 0; i < cards.length; i++){
                    if (cards[i].clone && (cards[i].clone.parentNode == this.parentNode || cards[i].clone.parentNode == ui.arena)){
                        if (!update){
                            update = ui.thrown.indexOf(cards[i].clone) != -1;
                        }
                        
                        cards[i].clone.moveDelete(this, true);
                        list2.push(cards[i].clone);
                    } else {
                        list.push(cards[i]);
                    }
                }
                
                if (update){
                    ui.clear();
                    decadeUI.layout.invalidateDiscard();
                }
                
                if (list2.length){
                    game.addVideo('gain2', this, get.cardsInfo(list2));
                }
                
                if (list.length){
                    this.$draw(list, 'nobroadcast');
                    return true;
                }
			};
		
		},
		dialog:{
			create:function(className, parentNode, tagName){
				var element = !tagName ? document.createElement('div') : document.createElement(tagName);
				for(var i in decadeUI.dialog){
					if (decadeUI.dialog[i]) element[i] = decadeUI.dialog[i];
				}
				
				element.listens = {};
				for(var i in decadeUI.dialog.listens){
					if (decadeUI.dialog.listens[i]) element.listens[i] = decadeUI.dialog.listens[i];
				}
					
				element.listens._dialog = element;
				element.listens._list = [];
				
				if (className) element.className = className;
				if (parentNode) parentNode.appendChild(element);
				
				return element;
			},
			open:function(){
				if (this == decadeUI.dialog) return console.error('undefined');
			},
			show:function(){
				if (this == decadeUI.dialog) return console.error('undefined');
				
				this.classList.remove('hidden');
			},
			hide:function(){
				if (this == decadeUI.dialog) return console.error('undefined');
				
				this.classList.add('hidden');
			},
			animate:function(property, duration, toArray, fromArrayOptional){
				if (this == decadeUI.dialog) return console.error('undefined');
				if (property == null || duration == null || toArray == null) return console.error('arguments');
				
				var propArray = property.replace(/\s*/g, '').split(',');
				if (!propArray || propArray.length == 0) return console.error('property');
				
				var realDuration = 0;
				if (duration.lastIndexOf('s') != -1){
					if (duration.lastIndexOf('ms') != -1){
						duration = duration.replace(/ms/, '');
						duration = parseInt(duration);
						if (isNaN(duration)) return console.error('duration');
						realDuration = duration;
					}else{
						duration = duration.replace(/s/, '');
						duration = parseFloat(duration);
						if (isNaN(duration)) return console.error('duration');
						realDuration = duration * 1000;
					}
				}else {
					duration = parseInt(duration);
					if (isNaN(duration)) return console.error('duration');
					realDuration = duration;
				}
				
				if (fromArrayOptional){
					for (var i = 0; i < propArray.length; i++){
						this.style.setProperty(propArray[i], fromArrayOptional[i]);
					}
				}
				
				var duraBefore = this.style.transitionDuration;
				var propBefore = this.style.transitionProperty;
				this.style.transitionDuration = realDuration + 'ms';
				this.style.transitionProperty = property;
				
				ui.refresh(this);
				for (var i = 0; i < propArray.length; i++){
					this.style.setProperty(propArray[i], toArray[i]);
				}
				
				var restore = this;
				setTimeout(function(){
					restore.style.transitionDuration = duraBefore;
					restore.style.transitionProperty = propBefore;
				}, realDuration);
			},
			close:function(delayTime, fadeOut){
				if (this == decadeUI.dialog) return console.error('undefined');
				this.listens.clear();
				
				if (!this.parentNode) return;
				
				if (fadeOut === true && delayTime) {
					this.animate('opacity', delayTime, 0);
				}
				
				if (delayTime) {
					var remove = this;
					delayTime = (typeof delayTime == 'number') ? delayTime : parseInt(delayTime);
					setTimeout(function(){ 
						if (remove.parentNode) remove.parentNode.removeChild(remove);
					}, delayTime);
					return;
				}
				
				this.parentNode.removeChild(this);
				return;
			},
			listens:{
				add:function(listenElement, event, func, useCapture){
					if (!this._dialog || !this._list) return console.error('undefined');
					if (!(listenElement instanceof HTMLElement) || !event || (typeof func !== 'function')) return console.error('arguments');
					
					this._list.push(new Array(listenElement, event, func));
					listenElement.addEventListener(event, func);
				}, 
				remove:function(listenElementOptional, eventOptional, funcOptional){
					if (!this._dialog || !this._list) return console.error('undefined');
					
					var list = this._list;
					if (listenElementOptional && eventOptional && funcOptional){
						var index = list.indexOf(new Array(listenElementOptional, eventOptional, funcOptional));
						if (index != -1){
							list[index][0].removeEventListener(list[index][1], list[index][2]);
							list.splice(index, 1);
							return;
						}
					}else if (listenElementOptional && eventOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][0] == listenElementOptional && list[i][1] == eventOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}else if (listenElementOptional && funcOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][0] == listenElementOptional && list[i][2] == funcOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}else if (eventOptional && funcOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][1] == eventOptional && list[i][2] == funcOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}else if (listenElementOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][0] == listenElementOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}else if (eventOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][1] == eventOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}else if (funcOptional){
						for (var i = list.length - 1; i >= 0; i--){
							if (list[i][2] == funcOptional){
								list[i][0].removeEventListener(list[i][1], list[i][2]);
								list.splice(i, 1);
							}
						}
					}
				},
				clear:function(){
					if (!this._dialog || !this._list) return console.error('undefined');
					
					var list = this._list;
					for (var i = list.length - 1; i >= 0; i--){
						list[i][0].removeEventListener(list[i][1], list[i][2]);
						list[i] = undefined;
					}
					list.length = 0;
				}
			}
		},
		animate:{
			check:function(){
				if (!this.frames) this.frames = [];
				
				if (!ui.arena) {
					console.log('ui.arena is not created.');
					return;
				}
				
				if (!this.arena) {
					this.arena = ui.arena.appendChild(document.createElement('canvas'));
					this.arena.id = 'decadeUI-animate-arena'
					this.frames[2] = { 
						updates: [],
						canvas: this.arena,
					};
				}
			},
			add:function(funcOrObejct){
				if (typeof funcOrObejct != 'function') throw 'funcOrObejct';
				this.check();

				var obj = {
					inits: [],
					update: funcOrObejct,
					id: decadeUI.getRandom(0, 100),
				};
				
				if (arguments.length > 2) {
					obj.inits = new Array(arguments.length - 2);
					for (var i = 2; i < arguments.length; i++) {
						obj.inits[i - 2] = arguments[i];
					}
				}
				
				this.frames[2].updates.push(obj);
				if (!this.frameId) this.update();
				return obj;
			},
			remove:function(obj){
				if (!obj) throw obj;
				this.check();
				
				var index;
				var frames = this.frames;
				
				for (var i = 0; i < frames.length; i++) {
					index = frames[i].updates.indexOf(obj);
					if (index >= 0) {
						frames[i].updates.splice(index, 1);
						if (frames[i].updates.length == 0) frames[i].canvas.height = frames[i].canvas.height;
						break;
					}
				}
				
				var cancel = true;
				for (var i = 0; i < frames.length; i++) {
					if (frames[i].updates.length != 0) cancel = false;
				}
				
				if (cancel) this.cancel();
			},
			update:function(){
				decadeUI.animate.check();
				decadeUI.animate.cancel();

				var nowTime= new Date();
				var lastTime = decadeUI.animate.lastUpdatedTime ? decadeUI.animate.lastUpdatedTime : nowTime;
				
				var e = {
					canvas: undefined,
					context: undefined,
					deltaTime: (nowTime - lastTime),
					lerp:function(min, max, fraction){
						return (max - min) * fraction + min;
					},
					save:function(){
						this.context.save();
						return this.context;
					},
					restore:function(){
						this.context.restore();
						return this.context;
					},
					drawLine:function(x1, y1, x2, y2, color, lineWidth){
						if (x1 == null || y1 == null) throw 'arguments';
						
						var context = this.context;
						context.beginPath();
						
						if (color) context.strokeStyle = color;
						if (lineWidth) context.lineWidth = lineWidth;
						
						if (x2 == null || y2 == null) {
							context.lineTo(x1, y1);
						} else {
							context.moveTo(x1, y1);
							context.lineTo(x2, y2);
						}
						
						context.stroke();
					},
					drawRect:function(x, y , width, height, color, lineWidth){
						if (x == null || y == null || width == null || height == null) throw 'arguments';
						
						var ctx = this.context;
						ctx.beginPath();
						
						if (color) ctx.strokeStyle = color;
						if (lineWidth) ctx.lineWidth = lineWidth;
						ctx.rect(x, y, width, height);
						ctx.stroke();
					},
					drawText:function(text, font, color, x, y, textAlign, textBaseline, stroke){
						if (!text) return;
						if (x == null || y == null) throw 'x or y';
						var context = this.context;
						
						if (font) context.font = font;
						if (textAlign) context.textAlign = textAlign;
						if (textBaseline) context.textBaseline = textBaseline;
						if (color) {
							if (!stroke) context.fillStyle = color;
							else context.strokeStyle = color;
						}
						
						if (!stroke) context.fillText(text, x, y);
						else context.strokeText(text, x, y);
					},
					drawStrokeText:function(text, font, color, x, y, textAlign, textBaseline){
						this.drawText(text, font, color, x, y, textAlign, textBaseline, true);
					},
					fillRect:function(x, y , width, height, color){
						if (color) this.context.fillStyle = color;
						this.context.fillRect(x, y , width, height);
					},
				}
				
				var args;
				var frames;
				var cancel = 0;
				
				frames = decadeUI.animate.frames;
				for (var i = frames.length - 1; i >= 0; i--) {
					if (frames[i] && frames[i].updates.length) {
						e.canvas = frames[i].canvas;
						if (!decadeUI.dataset.animSizeUpdated) {
							decadeUI.dataset.animSizeUpdated = true;
							e.canvas.width = e.canvas.parentNode.offsetWidth;
							e.canvas.height = e.canvas.parentNode.offsetHeight;
						}
						
						e.canvas.height = e.canvas.height
						e.context = e.canvas.getContext('2d');
						
						for (var j = 0; j < frames[i].updates.length; j++) {
							if (frames[i].updates[j]) {
								args = Array.from(frames[i].updates[j].inits);
								args.push(e);
								e.save();
								if (frames[i].updates[j].update.apply(frames[i].updates[j], args)) frames[i].updates.splice(j--, 1);
								e.restore();
							}
							
							if (frames[i].updates.length == 0) { 
								cancel++;
								break;
							}
						}
					} else {
						cancel++;
					}
				}
				
				if (frames.length == cancel) {
					decadeUI.animate.lastUpdatedTime = null;
					return;
				}
				
				decadeUI.animate.lastUpdatedTime = nowTime;
				decadeUI.animate.frameId = requestAnimationFrame(decadeUI.animate.update);
			},
			cancel:function(){
				if (this.frameId == null) return;
				// clearTimeout(this.frameId);
				cancelAnimationFrame(this.frameId);
				this.frameId = null;
			},
			pause:function(){
				
			},
			resume:function(){
				
			},
		},
		ResizeSensor:(function(){
			function ResizeSensor(element) {
				this.element = element;
				this.width = element.clientWidth || 1;
				this.height = element.clientHeight || 1;
				this.maximumWidth = 10000 * (this.width);
				this.maximumHeight = 10000 * (this.height);
				this.events = [];
				
				var expand = document.createElement('div');
				expand.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;z-index=-10000;overflow:hidden;visibility:hidden;transition:all 0s;';
				var shrink = expand.cloneNode(false);

				var expandChild = document.createElement('div');
				expandChild.style.cssText = 'transition: all 0s !important; animation: none !important;';
				var shrinkChild = expandChild.cloneNode(false);

				expandChild.style.width = this.maximumWidth + 'px';
				expandChild.style.height = this.maximumHeight + 'px';
				shrinkChild.style.width = '250%';
				shrinkChild.style.height = '250%';
				
				expand.appendChild(expandChild);
				shrink.appendChild(shrinkChild);
				element.appendChild(expand);
				element.appendChild(shrink);
				if (expand.offsetParent != element){
					element.style.position = 'relative';
				}
				
				expand.scrollTop = shrink.scrollTop = this.maximumHeight;
				expand.scrollLeft = shrink.scrollLeft = this.maximumWidth;
				
				var sensor = this;
				sensor.onscroll = function (e) {
					sensor.w = sensor.element.clientWidth || 1;
					sensor.h = sensor.element.clientHeight || 1;
					
					if (sensor.w != sensor.width || sensor.h != sensor.height){
						sensor.width = sensor.w;
						sensor.height = sensor.h;
						if (sensor.requestFrame) {
							requestAnimationFrame(sensor.dispatchEvent.bind(sensor));
						} else {
							sensor.dispatchEvent();
						}
					}
					
					expand.scrollTop = shrink.scrollTop = sensor.maximumHeight;
					expand.scrollLeft = shrink.scrollLeft = sensor.maximumWidth;
				};
				
				expand.addEventListener('scroll', sensor.onscroll);
				shrink.addEventListener('scroll', sensor.onscroll);
				sensor.expand = expand;
				sensor.shrink = shrink;
			}
			
			ResizeSensor.prototype.addListener = function (callback, capture) {
				if (this.events == undefined) this.events = [];
				this.events.push({
					callback: callback,
					capture: capture,
				});
			};
			
			ResizeSensor.prototype.dispatchEvent = function () {
				var capture = true;
				var evt;
				
				for (var i = 0; i < this.events.length; i++) {
					evt = this.events[i];
					if (evt.capture) {
						evt.callback();
					} else {
						capture = false;
					}
				}
				
				if (!capture) {
					requestAnimationFrame(this.dispatchFrameEvent.bind(this));
				}
			};
			
			ResizeSensor.prototype.dispatchFrameEvent = function () {
				var evt;
				for (var i = 0; i < this.events.length; i++) {
					evt = this.events[i];
					if (!evt.capture) evt.callback();
				}
			};
			
			ResizeSensor.prototype.close = function(){
				this.expand.removeEventListener('scroll', this.onscroll);
				this.shrink.removeEventListener('scroll', this.onscroll);
				
				if (!this.element){
					this.element.removeChild(this.expand);
					this.element.removeChild(this.shrink);
				}
				
				this.events = null;
			};
			
			return ResizeSensor;
		})(),
		sheet:{
			init:function(){
				if (!this.sheetList){
					this.sheetList = [];
					for (var i = 0; i < document.styleSheets.length; i++){
						if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf('extension/' + encodeURI(extensionName)) != -1){
							this.sheetList.push(document.styleSheets[i]);
						}
					}
				}
				
				if (this.sheetList) delete this.init;
			},
			getStyle:function(selector, cssName){
				if (!this.sheetList) this.init();
				if (!this.sheetList) throw 'sheet not loaded';
				if ((typeof selector != 'string') || !selector) throw 'parameter "selector" error';
				if (!this.cachedSheet) this.cachedSheet = {};
				if (this.cachedSheet[selector]) return this.cachedSheet[selector];
				
				
				var sheetList = this.sheetList;
				var sheet;
				var shouldBreak = false;
				
				for (var j = sheetList.length - 1; j >= 0; j--) {
					if (typeof cssName == 'string') {
						cssName = cssName.replace(/.css/, '') + '.css';
						for (var k = j; k >= 0; k--) {
							if (sheetList[k].href.indexOf(cssName) != -1) {
								sheet = sheetList[k];
							}
						}
						
						shouldBreak = true;
						if (!sheet) throw 'cssName not found';
					} else {
						sheet = sheetList[j];
					}

					if(sheet&&sheet.cssRules){
						for (var i = 0; i < sheet.cssRules.length; i++) {
							if (!(sheet.cssRules[i] instanceof CSSMediaRule)) {
								if (sheet.cssRules[i].selectorText == selector) {
									this.cachedSheet[selector] = sheet.cssRules[i].style;
									return sheet.cssRules[i].style;
								}
							} else {
								var rules = sheet.cssRules[i].cssRules;
								for (var j = 0; j < rules.length; j++) {
									if (rules[j].selectorText == selector) {
										return rules[j].style;
									}
								}
							}
						}
					}
					
					if (shouldBreak) break;
				}
				
				return null;
			},
			insertRule:function(rule, index, cssName){
				if (!this.sheetList) this.init();
				if (!this.sheetList) throw 'sheet not loaded';
				if ((typeof rule != 'string') || !rule) throw 'parameter "rule" error';
				
				var sheet;
				if (typeof cssName == 'string') {
					for (var j = sheetList.length - 1; j >= 0; j--) {
						cssName = cssName.replace(/.css/, '') + '.css';
						if (sheetList[j].href.indexOf(cssName) != -1) {
							sheet = sheetList[k];
						}
					}
					
					if (!sheet) throw 'cssName not found';
				}
				
				if (!sheet) sheet = this.sheetList[this.sheetList.length - 1];
				var inserted = 0;
				if (typeof index == 'number'){
					inserted = sheet.insertRule(rule, index);
				} else {
					inserted = sheet.insertRule(rule, sheet.cssRules.length);
				}
				
				return sheet.cssRules[inserted].style;
			}
		},
		layout:{
			update:function(){
				this.updateHand();
				this.updateDiscard();

			},
			updateHand:function(){
				if (!game.me || !ui.handcards1Container) return;
				var handNode = ui.handcards1Container.firstChild;
				if (!handNode) return console.error('hand undefined');
				
				
				
				var card, cards = [];
				var count = handNode.childElementCount;
				for (var i = 0; i < count; i++) {
					card = handNode.childNodes[i];
					if (!card.classList.contains('removing')) {
						cards.push(card);
					} else {
						card.scaled = void 0;
					}
				}
				
				if (!cards.length) return;
				if (!decadeUI.dataset.handDataUpdated) {
					decadeUI.dataset.handDataUpdated = true;
					decadeUI.dataset.handData = {
						card: {
							width: cards[0].offsetWidth,
							height: cards[0].offsetHeight,
							scale: decadeUI.getCardBestScale(),
						},
						width: ui.handcards1Container.offsetWidth,
						height: ui.handcards1Container.offsetHeight,
					};
				}
				
				var handData = decadeUI.dataset.handData;
				var handW = handData.width;
				var handH = handData.height;
				
				
				var spacing = 1;
				var cardW = handData.card.width;
				var cardH = handData.card.height;
				var scale = handData.card.scale;
				
				var x;
				var y = ((cardH * scale - cardH) / 2) + 'px';

				var scaleOffset = (cardW - cardW * scale) / 2;
				var xMin = 82 * scale;
				cardW = cardW * scale + spacing * 2;
				var foldCardMinWidth = lib.config['extension_十周年UI_foldCardMinWidth'];
				if (foldCardMinWidth == 'cardW') {
					xMin = cardW;
				}
				if (foldCardMinWidth == '62'||foldCardMinWidth == '72'||foldCardMinWidth == '82'||foldCardMinWidth == '92'){
					xMin = foldCardMinWidth * scale;
				}
				
				var offset = handW - cardW * cards.length;
				var overflow = offset < 0;
				if (overflow) {
					cardW -= spacing * 2;
					offset = Math.min(Math.abs(offset + spacing * 2 * cards.length) / (cards.length - 1), cardW - xMin);
				} else {
					offset = 0;
					/*手牌居中offset /= 2 手牌靠右offset /= 1 手牌靠左offset = 0*/														
				}
				
				var transform, handRequireWidth;
				for (var i = 0; i < cards.length; i++) {
					card = cards[i];
					if (!card.scaled) {
						card.classList.add('transition-none');
						x = -Math.round(scaleOffset);
						card.style.transform = 'translate(' + x + 'px,' + y + ')scale(' + scale + ')';
						card.scaled = true;
						ui.refresh(card);
						card.classList.remove('transition-none');
					}
					
					if (overflow){
						x = Math.round((i * (cardW - offset) - scaleOffset));
					}else{
						x = Math.round((offset + i * cardW + spacing - scaleOffset));
					}
					
					
					transform = 'translate(' + x + 'px,' + y + ')scale(' + scale + ')';
					card._transform = transform;
					card.classList.remove('drawinghidden');
					if (card.style.transform !== transform) {
						card.style.transform = transform;
					}
					
					handRequireWidth = x + cardW;
				}
				
				if (handRequireWidth >= (handW + 2)) {
					ui.handcards1Container.classList.add('scrollh');
					ui.handcards1Container.style.overflowX = 'scroll';
					ui.handcards1Container.style.overflowY = 'hidden';
				} else {
					ui.handcards1Container.classList.remove('scrollh');
				}
				
				handNode.style.width = handRequireWidth + 'px';
			},
			updateDiscard:function(){
				if (!ui.thrown) ui.thrown = [];
				for (var i = ui.thrown.length - 1; i >= 0; i--){
					if (ui.thrown[i].classList.contains('drawingcard') ||
					   ui.thrown[i].classList.contains('removing') ||
					   ui.thrown[i].parentNode != ui.arena || ui.thrown[i].moving){
						ui.thrown.splice(i, 1);
					}else{
					    ui.thrown[i].classList.remove('removing');
					}
				}
				
				if (!ui.thrown.length) return;
				var discards = ui.thrown;
				var $parent = discards[0].parentNode;
				
				if (!decadeUI.dataset.discardDataUpdated) {
					decadeUI.dataset.discardDataUpdated = true;
					decadeUI.dataset.discardData = {
						card:{
							width: discards[0].offsetWidth,
							height: discards[0].offsetHeight,
							scale: decadeUI.getCardBestScale(),
						},
						width: $parent.offsetWidth,
						height: $parent.offsetHeight,
					};
				}
				
				var margin = 1;
				var discardData     = decadeUI.dataset.discardData;
				var scale           = discardData.card.scale;
				var cardOrignWidth  = discardData.card.width;
				var cardScaleWidth  = discardData.card.width * scale + margin * 2;
				var cardOrignHeight = discardData.card.height;
				
				var x, beginX;
				var y = Math.round((discardData.height - cardOrignHeight) / 2) + 'px';
				
				var beginOffset = (1 - scale) * cardOrignWidth / 2;
				var remainWidth = discardData.width - cardScaleWidth * discards.length;
				
				var overflow = (remainWidth < 0);
				if (overflow){
					cardScaleWidth -= margin * 2;
					beginX = Math.abs(remainWidth + margin * 2 * discards.length) / (discards.length - 1);
				}else{
					beginX = remainWidth / 2;
				}
				
				
				for(var i = 0; i < discards.length; i++){
					if (!discards[i].scaled){
					    discards[i].classList.add('transition-none');
					    x = ((discardData.width - cardOrignWidth) / 2 - discardData.width * 0.08) + 'px';
					    discards[i].style.transform = 'translate(' + x + ',' + y + ')scale(' + scale + ')';
					    ui.refresh(discards[i]);
					    discards[i].scaled = true;
					    discards[i].classList.remove('transition-none');
					}
					
					if (overflow){
						x = Math.round((i * (cardScaleWidth - beginX) - beginOffset)) + 'px';
					}else{
						x = Math.round((beginX + i * cardScaleWidth + margin - beginOffset)) + 'px';
					}
					discards[i].style.transform = 'translate(' + x + ',' + y + ') scale(' + scale + ')';
					discards[i]._transthrown = null;
				}
			},
			clearout:function(card){
			    if (!card) throw card;
			    if (card.classList.contains('drawingcard') ||
			       card.classList.contains('removing') ||
			       card.fixed || card.moving) return;
			    
				if (ui.thrown.indexOf(card) == -1){
					ui.thrown.splice(0, 0, card);
					card.style.left = 'auto';
					card.style.top = 'auto';
					decadeUI.layout.updateDiscard();
				}
				
				if (!card.classList.contains('invalided')){
				    var event = _status.event;
    				var judging = event.triggername == 'judge' || event.name == 'judge';
    				if (event.name == 'judge' && !ui.clear.delay){
    				    ui.clear.delay = 'judge';
    				    Object.defineProperties(event.parent, {
        					finished: {
        						configurable: true,
        						get:function(){
        							return this._finished;
        						},
        						set:function(value){
        							this._finished = value;
        							if (this._finished == true && ui.clear.delay == 'judge'){
        							    ui.clear.delay = false;
        							    ui.clear();
        							}
        						}
        					},
        					_finished: {
        					    value: false,
        					    writable: true
        					}
        				});
    				}
    				
    				if (ui.clear.delay || (judging && !event.finished)) return;
				}
				
				card.classList.add('invalided');
				setTimeout(function(card){
					if (card.parentNode != null){
					    card.parentNode.removeChild(card);
						card.classList.add('removing');
					}
					
					card = null;
					decadeUI.layout.invalidateDiscard();
				}, 2333, card);
			},
			delayClear:function(){
			    var timestamp = 500;
			    var nowTime = new Date().getTime();
			    if (this._delayClearTimeout){
			        clearTimeout(this._delayClearTimeout);
			        timestamp = nowTime - this._delayClearTimeoutTime;
			        if (timestamp > 1000){
			            this._delayClearTimeout = null;
			            this._delayClearTimeoutTime = null;
			            ui.clear();
			            return;
			        }
			    }else{
			        this._delayClearTimeoutTime = nowTime;
			    }
			    
			    this._delayClearTimeout = setTimeout(function(){
			        decadeUI.layout._delayClearTimeout = null;
			        decadeUI.layout._delayClearTimeoutTime = null;
			        ui.clear();
			    }, timestamp);
			},
			invalidate:function(){
			    this.invalidateHand();
			    this.invalidateDiscard();
			},
			invalidateHand:function(debugName){
			    //和上下面的有点重复，有空合并
			    var timestamp = 40;
			    var nowTime = new Date().getTime();
			    if (this._handcardTimeout){
			        clearTimeout(this._handcardTimeout);
			        timestamp = nowTime - this._handcardTimeoutTime;
			        if (timestamp > 180){
			            this._handcardTimeout = null;
			            this._handcardTimeoutTime = null;
			            this.updateHand();
			            return;
			        }
			    }else{
			        this._handcardTimeoutTime = nowTime;
			    }
			    
			    this._handcardTimeout = setTimeout(function(){
			        decadeUI.layout._handcardTimeout = null;
			        decadeUI.layout._handcardTimeoutTime = null;
			        decadeUI.layout.updateHand();
			    }, timestamp);
			},
			invalidateDiscard:function(){
			    var timestamp = (ui.thrown && ui.thrown.length > 15) ? 80 : 40;
			    var nowTime = new Date().getTime();
			    if (this._discardTimeout){
			        clearTimeout(this._discardTimeout);
			        timestamp = nowTime - this._discardTimeoutTime;
			        if (timestamp > 180){
			            this._discardTimeout = null;
			            this._discardTimeoutTime = null;
			            this.updateDiscard();
			            return;
			        }
			    }else{
			        this._discardTimeoutTime = nowTime;
			    }
			    
			    this._discardTimeout = setTimeout(function(){
			        decadeUI.layout._discardTimeout = null;
			        decadeUI.layout._discardTimeoutTime = null;
			        decadeUI.layout.updateDiscard();
			    }, timestamp);
			},
			resize:function(){
				if (decadeUI.isMobile()) {
					ui.arena.classList.add('dui-mobile');
					ui.window.classList.add('dui-mobile');
				}
				else {
					ui.arena.classList.remove('dui-mobile');
					ui.window.classList.remove('dui-mobile');
				}
				
				var set = decadeUI.dataset;
				set.animSizeUpdated = false;
				set.handDataUpdated = false;
				set.discardDataUpdated = false;
				set.bodySize.updated = false;
				
				var buttonsWindow = decadeUI.sheet.getStyle('#window > .dialog.popped .buttons:not(.smallzoom)');
				if (!buttonsWindow) {
					buttonsWindow = decadeUI.sheet.insertRule('#window > .dialog.popped .buttons:not(.smallzoom) { zoom: 1; }');
				}
				
				var buttonsArena = decadeUI.sheet.getStyle('#arena:not(.choose-character) .buttons:not(.smallzoom)');
				if (!buttonsArena){
				    buttonsArena = decadeUI.sheet.insertRule('#arena:not(.choose-character) .buttons:not(.smallzoom) { zoom: 1; }');
				}
				
				decadeUI.zooms.card = decadeUI.getCardBestScale();
				if (ui.me) {
					var height = Math.round(decadeUI.getHandCardSize().height * decadeUI.zooms.card + 30.4) + 'px';
					// ui.control.style.bottom = height;
					ui.me.style.height = height;
				}
				
				if (buttonsArena) {
					buttonsArena.zoom = decadeUI.zooms.card;
				}
				
				if (buttonsWindow) {
					buttonsWindow.zoom = decadeUI.zooms.card;
				}
				
			    decadeUI.layout.invalidate();
			},
			
		},
		handler:{
			handMousewheel:function(e){
				if (!ui.handcards1Container) return console.error('ui.handcards1Container');
				
				var hand = ui.handcards1Container;
				if (hand.scrollNum == void 0) hand.scrollNum = 0;
				if (hand.lastFrameTime == void 0) hand.lastFrameTime = performance.now();
				
				function handScroll () {
					var now = performance.now();
					var delta = now - hand.lastFrameTime;
					var num = Math.round(delta / 16 * 16);
					hand.lastFrameTime = now;
					
					if (hand.scrollNum > 0) {
						num = Math.min(hand.scrollNum, num);
						hand.scrollNum -= num;
					} else {
						num = Math.min(-hand.scrollNum, num);
						hand.scrollNum += num;
						num = -num;
					}
					
					if (hand.scrollNum == 0) {
						hand.frameId = void 0;
						hand.lastFrameTime = void 0;
					} else {
						hand.frameId = requestAnimationFrame(handScroll);
						ui.handcards1Container.scrollLeft += num;
					}
				}
				
				if (e.wheelDelta > 0) {
					hand.scrollNum -= 84;
				} else {
					hand.scrollNum += 84;
				}
				
				if (hand.frameId == void 0) {
					hand.frameId = requestAnimationFrame(handScroll);
				}
			},
		},
		zooms:{
			body: 1,
			card: 1,
		},
		isMobile:function(){
		    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent));
		},
		delay:function(milliseconds){
		    if (typeof milliseconds != 'number') throw 'milliseconds is not number';
		    if(_status.paused) return;
			game.pause();
			_status.timeout = setTimeout(game.resume, milliseconds);
		},
		getRandom:function(min, max) {
			if (min == null) {
				min = -2147483648;
			}
			
			if (max == null) {
				max = 2147483648;
			}
			
			if (min > max) {
				min = min + max;
				max = min - max;
				min = min - max;
			}
			
			var diff = 0;
			if (min < 0) {
				diff = min;
				min = 0;
				max -= diff;
			}
			
			return Math.floor(Math.random() * (max + 1 - min)) + min + diff;
		},
		getCardBestScale:function(size){
			if (!(size && size.height)) size = decadeUI.getHandCardSize();
			
			var bodySize = decadeUI.get.bodySize();
			return Math.min(bodySize.height * (decadeUI.isMobile() ? 0.23 : 0.18) / size.height, 1);
		},
		getHandCardSize:function(canUseDefault){
			var style = decadeUI.sheet.getStyle('.media_defined > .card');
			if (style == null) style = decadeUI.sheet.getStyle('.hand-cards > .handcards > .card');
			if (style == null) return canUseDefault ? { width: 108, height: 150 } : { width: 0, height: 0 };
			var size = { width: parseFloat(style.width), height: parseFloat(style.height) };
			return size;
		},
		getMapElementPos:function(elementFrom, elementTo){
			if (!(elementFrom instanceof HTMLElement) || !(elementTo instanceof HTMLElement)) return console.error('arguments');
			var rectFrom = elementFrom.getBoundingClientRect();
			var rectTo = elementTo.getBoundingClientRect();
			var pos = { x: rectFrom.left - rectTo.left, y: rectFrom.top - rectTo.top };
			pos.left = pos.x;
			pos.top = pos.y;
			return pos;
		},
		getPlayerIdentity:function(player, identity, chinese, isMark){
			if (!(player instanceof HTMLElement && get.itemtype(player) == 'player')) throw 'player';
			if (!identity) identity = player.identity;
			if (!identity) identity = player.node.identity.dataset.color;//咸鱼：修复回放录像弹窗（但内置录像功能仍无法录制部分美化UI，待完善）
			
			var mode = get.mode();
			var translated = false;
			if (!chinese) {
				switch (mode) {
					case 'identity':
						if (!player.isAlive() || player.identityShown || player == game.me) {
							identity = (player.special_identity ? player.special_identity : identity).replace(/identity_/, '');
						}
						
						break;
					
					case 'guozhan':
						if (identity == 'unknown') {
							identity = player.wontYe() ? lib.character[player.name1][1] : 'ye';
						}
						
						if (get.is.jun(player)) identity += 'jun';
						break;
						
					case 'versus':
						if (!game.me) break;
						switch (_status.mode) {
							case 'standard':
								switch (identity) {
									case 'trueZhu': return 'shuai';
									case 'trueZhong': return 'bing';
									case 'falseZhu': return 'jiang';
									case 'falseZhong': return 'zu';
								}
								break;
							case 'three':
							case 'four':
							case 'guandu':
								if (get.translation(player.side + 'Color') == 'wei') identity += '_blue';
								break;
								
							case 'two':
								var side = player.finalSide ? player.finalSide : player.side;
								identity = game.me.side == side ? 'friend' : 'enemy';
								break;
						}
						
						break;
					case 'doudizhu':
						identity = identity == 'zhu' ? 'dizhu' : 'nongmin';
						break;
					case 'single':
						identity = identity == 'zhu' ? 'xianshou' : 'houshou';
						break;
					case 'boss':
						switch (identity) {
							case 'zhu': identity = 'boss'; break;
							case 'zhong': identity = 'cong'; break;
							case 'cai': identity = 'meng'; break;
						}
						break;
				}
			} else {
				switch(mode){
					case 'identity':
						if (identity.indexOf('cai') < 0) {
							if (isMark) {
								if (player.special_identity) identity = player.special_identity + '_bg';
							} else {
								identity = player.special_identity ? player.special_identity : identity + '2';
							}
						}
						
						// ok
						break;
						
					case 'guozhan':
						if (identity == 'unknown') {
							identity = player.wontYe() ? lib.character[player.name1][1] : 'ye';
						}
						
						if (get.is.jun(player)) {
							identity = isMark ? '君' : get.translation(identity) + '君';
						} else {
							identity = identity == 'ye' ? '野心家' : (identity == 'qun' ? '群雄' : get.translation(identity) + '将');
						}
						translated = true;
						break;
						
					case 'versus':
						translated = true;
						if (!game.me) break;
						switch (_status.mode) {
							case 'three':
							case 'standard':
							case 'four':
							case 'guandu':
								switch (identity) {
									case 'zhu': identity = '主公'; break;
									case 'zhong': identity = '忠臣'; break;
									case 'fan': identity = '反贼'; break;
									default: translated = false; break;
								}
								break;
								
							case 'two':
								var side = player.finalSide ? player.finalSide : player.side;
								identity = game.me.side == side ? '友方' : '敌方';
								break;
							
							case 'siguo':
							case 'jiange':
								identity = get.translation(identity) + '将';
								break;
								
							default:
								translated = false;
								break;
						}
						break;
						
					case 'doudizhu':
						identity += '2';
						break;
					case 'boss':
						translated = true;
						switch (identity) {
							case 'zhu': identity = 'BOSS'; break;
							case 'zhong': identity = '仆从'; break;
							case 'cai': identity = '盟军'; break;
							default: translated = false; break;
						}
						break;
				}
				
				if (!translated) identity = get.translation(identity);
				if (isMark) identity = identity[0];
			}
			
			return identity;
		},
		
		create:{
			skillDialog:function(){
				var dialog = document.createElement('div');
				dialog.className = 'skill-dialog';
				
				var extend = {
					caption: undefined,
					tip: undefined,
					
					open:function(customParent){
						if (!customParent) {
							var size = decadeUI.get.bodySize();
							this.style.minHeight = (parseInt(size.height * 0.42)) + 'px';
							if (this.parentNode != ui.arena) ui.arena.appendChild(this);
						}
						
						this.style.animation = 'open-dialog 0.4s';
						return this;
					},
					show:function(){
						this.style.animation = 'open-dialog 0.4s';
					},
					hide:function(){
						this.style.animation = 'close-dialog 0.1s forwards';
					},
					close:function(){
						var func = function(e){
							if (e.animationName != 'close-dialog') return;
							this.remove();
							this.removeEventListener('animationend', func);
						};
						
						var animation = 'close-dialog';
						if (this.style.animationName == animation) {
							setTimeout(function(dialog){
								dialog.remove();
							}, 100, this);
						} else {
							this.style.animation = animation + ' 0.1s forwards';
							this.addEventListener('animationend', func);
						}
					},
					
					appendControl:function(text, clickFunc){
						var control = document.createElement('div');
						control.className = 'control-button';
						control.textContent = text;
						if (clickFunc) {
							control.addEventListener('click', clickFunc);
						}
						
						return this.$controls.appendChild(control);
					},
					
					$caption: decadeUI.element.create('caption', dialog),
					$content: decadeUI.element.create('content', dialog),
					$tip: decadeUI.element.create('tip', dialog),
					$controls: decadeUI.element.create('controls', dialog),
				}; decadeUI.get.extend(dialog, extend);
				
				Object.defineProperties(dialog, {
					caption: {
						configurable: true,
						get:function(){
							return this.$caption.innerHTML;
						},
						set:function(value){
							if (this.$caption.innerHTML == value) return;
							this.$caption.innerHTML = value;
						},
					},
					tip: {
						configurable: true,
						get:function(){
							return this.$tip.innerHTML;
						},
						set:function(value){
							if (this.$tip.innerHTML == value) return;
							this.$tip.innerHTML = value;
						},
					},
				});
				
				return dialog;
			},
			
			compareDialog:function(player, target){
				var dialog = decadeUI.create.skillDialog();
				dialog.classList.add('compare');
				dialog.$content.classList.add('buttons');
				
				var extend = {
					player: undefined,
					target: undefined,
					playerCard: undefined,
					targetCard: undefined,
					
					$player: decadeUI.element.create('player-character player1', dialog.$content),
					$target: decadeUI.element.create('player-character player2', dialog.$content),
					$playerCard: decadeUI.element.create('player-card', dialog.$content),
					$targetCard: decadeUI.element.create('target-card', dialog.$content),
					$vs: decadeUI.element.create('vs', dialog.$content),
				}; decadeUI.get.extend(dialog, extend);
				
				decadeUI.element.create('image', dialog.$player),
				decadeUI.element.create('image', dialog.$target),
				
				Object.defineProperties(dialog, {
					player: {
						configurable: true,
						get:function(){
							return this._player;
						},
						set:function(value){
							if (this._player == value) return;
							this._player = value;

							if (value == null || value.isUnseen()) {
								this.$player.firstChild.style.backgroundImage = '';
							} else {
								this.$player.firstChild.style.backgroundImage = (value.isUnseen(0) ? value.node.avatar2 : value.node.avatar).style.backgroundImage;
							}
							
							if (value) this.$playerCard.dataset.text = get.translation(value) + '发起';
						},
					},
					target: {
						configurable: true,
						get:function(){
							return this._target;
						},
						set:function(value){
							if (this._target == value) return;
							this._target = value;
							if (value == null || value.isUnseen()) {
								this.$target.firstChild.style.backgroundImage = '';
							} else {
								this.$target.firstChild.style.backgroundImage = (value.isUnseen(0) ? value.node.avatar2 : value.node.avatar).style.backgroundImage;
							}
							
							if (value) this.$targetCard.dataset.text = get.translation(value);
						},
					},
					playerCard: {
						configurable: true,
						get:function(){
							return this._playerCard;
						},
						set:function(value){
							if (this._playerCard == value) return;
							if (this._playerCard) this._playerCard.remove();
							this._playerCard = value;
							if (value) this.$playerCard.appendChild(value);
						},
					},
					targetCard: {
						configurable: true,
						get:function(){
							return this._targetCard;
						},
						set:function(value){
							if (this._targetCard == value) return;
							if (this._targetCard) this._targetCard.remove();
							this._targetCard = value;
							if (value) this.$targetCard.appendChild(value);
						},
					},
				});
				
				if (player) dialog.player = player;
				if (target) dialog.target = target;
				
				return dialog;
			},
		
		},
		
		get:{
			judgeEffect:function(name, value){
				switch (name) {
					case 'caomu':		case '草木皆兵':
					case 'fulei': 		case '浮雷':
					case 'shandian': 	case '闪电':
					case 'bingliang':	case '兵粮寸断':
					case 'lebu':		case '乐不思蜀':
						return value < 0 ? true : false;
				}
				
				return value;
			},
			
			isWebKit:function(){
				return document.body.style.webkitBoxShadow !== undefined;
			},
			
			extend:function(target, source){
				if (source === null || typeof source !== 'object') return target;
				
				var keys = Object.keys(source);
				var i = keys.length;
				while (i--) {
					target[keys[i]] = source[keys[i]];
				}

				return target;
			},
			
			bodySize:function(){
				var size = decadeUI.dataset.bodySize;
				if (!size.updated) {
					var body = document.body;
					size.updated = true;
					size.height = body.clientHeight;
					size.width = body.clientWidth;
				}
				
				return size;
			},
			
			bestValueCards:function(cards, player){
				if (!player) player = _status.event.player;
				
				var matchs = [];
				var basics = [];
				var equips = [];
				var hasEquipSkill = player.hasSkill('xiaoji');
				cards.sort(function(a, b){
					return get.value(b, player) - get.value(a, player);
				});
				
				for (var i = 0; i >= 0 && i < cards.length; i++) {
					var limited = false;
					switch (get.type(cards[i])) {
						case 'basic':
							for (var j = 0; j < basics.length; j++) {
								if (!cards[i].toself && basics[j].name == cards[i].name) {
									limited = true;
									break;
								}
							}
							
							if (!limited) basics.push(cards[i]);
							break;
						
						case 'equip':
							if (hasEquipSkill) break;
							for (var j = 0; j < equips.length; j++) {
								if (get.subtype(equips[j]) == get.subtype(cards[i])) {
									limited = true;
									break;
								}
							}
							
							if (!limited) equips.push(cards[i]);
							break;
					}
					
					if (!limited) {
						matchs.push(cards[i]);
						cards.splice(i--, 1);
					}
				}
				
				cards.sort(function(a, b){
					return get.value(b, player) - get.value(a, player);
				});
				
				cards = matchs.concat(cards);
				return cards;
			},
			cheatJudgeCards:function(cards, judges, friendly){
				if (!cards || !judges) throw arguments;
				
				var cheats = [];
				var judgeCost;
				for(var i = 0; i < judges.length; i++){
					var judge = get.judge(judges[i]);
					if(typeof judge != 'function'){
						judge = function(){
							return 1;
						};
					}
					cards.sort(function(a, b) {
						return friendly ? judge(b) - judge(a) : judge(a) - judge(b);
					});
					
					judgeCost = judge(cards[0]);
					if ((friendly && judgeCost >= 0) || (!friendly && judgeCost < 0)) {
						cheats.push(cards.shift());
					} else {
						break;
					}
				}
				
				return cheats;
			},
			elementLeftFromWindow:function(element){
				var left = element.offsetLeft;
				var current = element.offsetParent;
				
				while (current != null) {
					left += current.offsetLeft;
					current = current.offsetParent;
				}
				
				return left;
			},
			elementTopFromWindow:function(element){
				var top = element.offsetTop;
				var current = element.offsetParent;
				
				while (current != null) {
					top += current.offsetTop;
					current = current.offsetParent;
				}
				
				return top;
			},
		},
		
		set:{
			activeElement:function(element){
				var deactive = dui.$activeElement;
				dui.$activeElement = element;
				if (deactive && deactive != element && (typeof deactive.ondeactive == 'function')) {
					deactive.ondeactive();
				}
				
				if (element && element != deactive && (typeof element.onactive == 'function')) {
					element.onactive();
				}
			}
		},
		
		dataset:{
			animSizeUpdated: false,
			handDataUpdated: false,
			bodySizeUpdated: false,
			bodySize: {
				height: 1,
				width: 1,
				updated: false,
			}
		},
	};
	
	decadeUI.element = {
		base:{
			removeSelf:function(milliseconds){
				var remove = this;
				if (milliseconds) {
					milliseconds = (typeof milliseconds == 'number') ? milliseconds : parseInt(milliseconds);
					setTimeout(function(){ 
						if (remove.parentNode) remove.parentNode.removeChild(remove);
					}, milliseconds);
					return;
				}
				
				if (remove.parentNode) remove.parentNode.removeChild(remove);
				return;
			}
		},
		create:function(className, parentNode, tagName){
			var tag = tagName == void 0 ? 'div' : tagName;
			var element = document.createElement(tag);
			element.view = {};
			
			for(var key in this.base){
				element[key] = this.base[key];
			}
			
			if (className)
				element.className = className;
			
			if (parentNode)
				parentNode.appendChild(element);
			
			return element;
		},
		clone:function(element){
			
		},
	};
	
	decadeUI.game = {
		/*
		loop:function(){
			if (game.looping) return false; 
			game.looping = true;
			var event = _status.event;
			var step = event.step;
			var source = event.source;
			var player = event.player;
			var target = event.target;
			var targets = event.targets;
			var card = event.card;
			var cards = event.cards;
			var skill = event.skill;
			var forced = event.forced;
			var num = event.num;
			var trigger = event._trigger;
			var result = event._result;
			if (decadeUI.eventDialog) {
				decadeUI.game.wait();
				return false;
			}
			
			if (!game.loopTime) game.loopTime = performance.now();
			if ((_status.paused2 || _status.imchoosing) && !lib.status.dateDelaying) {
				lib.status.dateDelaying = new Date();
			}
			
			if (_status.paused || _status.paused2 || _status.over) {
				game.loopTime = undefined;
				return false;
			}
			
			if (_status.paused3) {
				_status.paused3 = 'paused';
				game.loopTime = undefined;
				return false;
			}
			if (lib.status.dateDelaying) {
				lib.status.dateDelayed += lib.getUTC(new Date()) - lib.getUTC(lib.status.dateDelaying);
				lib.status.dateDelaying = undefined;
			}
			
			if (event.next.length > 0) {
				var next = event.next.shift();
				if (next.player && next.player.skipList.contains(next.name)) {
					event.trigger(next.name + 'Skipped');
					next.player.skipList.remove(next.name);
					if (lib.phaseName.contains(next.name)) next.player.getHistory('skipped').add(next.name);
				} else {
					next.parent = event;
					_status.event = next;
					game.getGlobalHistory('everything').push(next);
				}
			} else if (event.finished) {
				if (event._triggered == 1) {
					if (event.type == 'card') event.trigger('useCardToOmitted');
					event.trigger(event.name + 'Omitted');
					event._triggered = 4;
				} else if (event._triggered == 2) {
					if (event.type == 'card') event.trigger('useCardToEnd');
					event.trigger(event.name + 'End');
					event._triggered = 3;
				} else if (event._triggered == 3) {
					if (event.type == 'card') event.trigger('useCardToAfter');
					event.trigger(event.name + 'After');
					event._triggered++;
				} else if (event.after && event.after.length) {
					var next = event.after.shift();
					if (next.player && next.player.skipList.contains(next.name)) {
						event.trigger(next.name + 'Skipped');
						next.player.skipList.remove(next.name);
						if (lib.phaseName.contains(next.name)) next.player.getHistory('skipped').add(next.name)
					} else {
						next.parent = event;
						_status.event = next;
					}
				} else {
					if (event.parent) {
						if (event.result) event.parent._result = event.result;
						_status.event = event.parent;
					} else {
						game.loopTime = undefined;
						game.loopLocked = false;
						return false;
					}
				}
			} else {
				if (event._triggered == 0) {
					if (event.type == 'card') event.trigger('useCardToBefore');
					event.trigger(event.name + 'Before');
					event._triggered++;
				} else if (event._triggered == 1) {
					if (event.type == 'card') event.trigger('useCardToBegin');
					// if (event.name == 'phase' && !event._begun) {
						// var next = game.createEvent('phasing', false, event);
						// next.player = event.player;
						// next.skill = event.skill;
						// next.setContent('phasing');
						// event._begun = true;
					// } else {
						event.trigger(event.name + 'Begin');
						event._triggered++;
					// }
				} else {
					event.callHandler(event.getDefaultHandlerType(),event,{
						state:'begin'
					});
					if(player&&player.classList.contains('dead')&&!event.forceDie&&event.name!='phaseLoop'){
						game.broadcastAll(function(){
							while(_status.dieClose.length){
								_status.dieClose.shift().close();
							}
						});
						if(event._oncancel){
							event._oncancel();
						}
						event.finish();
					}
					else if(player&&player.removed&&event.name!='phaseLoop'){
						event.finish();
					}
					else if(player&&player.isOut()&&event.name!='phaseLoop'&&!event.includeOut){
						if(event.name=='phase'&&player==_status.roundStart&&!event.skill){
							_status.roundSkipped=true;
						}
						event.finish();
					}
					else{
						const GeneratorFunction=(function*(){}).constructor;
						if(_status.withError||lib.config.compatiblemode||(_status.connectMode&&!lib.config.debug)){
							try{
								if(event.content instanceof GeneratorFunction){
									if(!event.debugging){
										if(event.generatorContent) event.generatorContent.return();
										event.generatorContent=event.content(event,step,source,player,target,targets,
											card,cards,skill,forced,num,trigger,result,
											_status,lib,game,ui,get,ai);
									}else{
										delete event.debugging;
									}
									var next=event.generatorContent.next();
									if(typeof next.value=='function'&&next.value.toString()=='code=>eval(code)'){
										//触发debugger
										var inputCallback=inputResult=>{
											if(inputResult===false){
												event.debugging=true;
												game.resume2();
											}else{
												alert(get.stringify(next.value(inputResult)));
												game.prompt('','debugger调试',inputCallback);
											}
										}
										game.prompt('','debugger调试',inputCallback);
										return game.pause2();
									}
									if(event.finished) event.generatorContent.return();
								}else{
									event.content(event,step,source,player,target,targets,
										card,cards,skill,forced,num,trigger,result,
										_status,lib,game,ui,get,ai);
								}
							}
							catch(e){
								game.print('游戏出错：'+event.name);
								game.print(e.toString());
								console.log(e);
							}
						}
						else{
							if(event.content instanceof GeneratorFunction){
								if(!event.debugging){
									if(event.generatorContent) event.generatorContent.return();
									event.generatorContent=event.content(event,step,source,player,target,targets,
										card,cards,skill,forced,num,trigger,result,
										_status,lib,game,ui,get,ai);
								}else{
									delete event.debugging;
								}
								var next=event.generatorContent.next();
								if(typeof next.value=='function'&&next.value.toString()=='code=>eval(code)'){
									//触发debugger
									var inputCallback=inputResult=>{
										if(inputResult===false){
											event.debugging=true;
											game.resume2();
										}else{
											alert(get.stringify(next.value(inputResult)));
											game.prompt('','debugger调试',inputCallback);
										}
									}
									game.prompt('','debugger调试',inputCallback);
									return game.pause2();
								}
								if(event.finished) event.generatorContent.return();
							}else{
								event.content(event,step,source,player,target,targets,
									card,cards,skill,forced,num,trigger,result,
									_status,lib,game,ui,get,ai);
							}
						}
					}
					event.clearStepCache();
					event.callHandler(event.getDefaultHandlerType(),event,{
						state:'end'
					});
					if(typeof event.step=="number") ++event.step;
				}
			}
			
			var delta = performance.now() - game.loopTime;
			if (delta > 10 && decadeUI.config.smoothMode) {
				game.loopTime = undefined;
				setTimeout(game.loop, 0);
				return false;
			}
			
			return true;
		},
		*/
		
		wait:function(){
			game.pause();
		},
		
		resume:function(){
			if (!game.loopLocked) {
				var ok = false;
				try {
					if (decadeUI.eventDialog && !decadeUI.eventDialog.finished && !decadeUI.eventDialog.finishing) {
						decadeUI.eventDialog.finish();
						decadeUI.eventDialog = undefined;
						ok = true;
					}
				} finally {
					if (!ok) game.resume();
				}
			} else {
				_status.paused = false;
			}
		},
		
	};

	
	decadeUI.config = config;
	decadeUI.config.update = function(){
	    var menuConfig = lib.extensionMenu['extension_' + extensionName];
		for (var key in menuConfig) {
			if (menuConfig[key] && (typeof menuConfig[key] == 'object')) {
				if (menuConfig[key].update) {
					menuConfig[key].update();
				}
			}
		}
	};
	
	// window.dui = decadeUI;
	// window.lib = lib;
	decadeUI.init();
	console.timeEnd('十周年UI');
},
precontent:function(){
	console.time('十周年UI');
	
	if (window.require) {
		const { versions } = process;
		const electronVersion = parseFloat(versions.electron);
		let remote;
		if (electronVersion >= 14) {
			remote = require('@electron/remote');
		} else {
			remote = require('electron').remote;
		}
		window.appPath = remote.app.getAppPath();
	}
	
	var extensionName = '十周年UI';
	var extension = lib.extensionMenu['extension_' + extensionName];
	window.decadeUIPath = lib.assetURL + 'extension/' + extensionName + '/';
	
	if (lib.config['extension_' + extensionName + '_eruda']) {
	    var script = document.createElement('script');
        script.src = decadeUIPath + 'eruda.js'; 
        document.body.appendChild(script); 
        script.onload = function(){ eruda.init(); };
	}
	
	if (!(extension && extension.enable && extension.enable.init)) return;
	
	lib.configMenu.appearence.config.layout.visualMenu = function(node, link){
		node.className = 'button character themebutton ' + lib.config.theme;
		node.classList.add(link);
		if (!node.created) {
			node.created = true;
			node.style.overflow = 'scroll';
			
			var list = ['re_caocao', 're_liubei', 'sp_zhangjiao', 'sunquan'];
			for (var i = 0; i < 4; i++) {
				var player = ui.create.div('.seat-player.fakeplayer', node);
				ui.create.div('.avatar', player).setBackground(list.randomRemove(), 'character');
			}
		}
	};
	
	if (ui.css.layout) {
		if (!ui.css.layout.href || ui.css.layout.href.indexOf('long2') < 0) {
			ui.css.layout.href = lib.assetURL + 'layout/long2/layout.css';
		}
	}
	
	var decadePack = this;
	window.decadeModule = (function(decadeModule){
		if (ui.css.layout) {
			if (!ui.css.layout.href || ui.css.layout.href.indexOf('long2') < 0)
				ui.css.layout.href = lib.assetURL + 'layout/long2/layout.css';
		}
		
		if (ui.css.fontsheet) ui.css.fontsheet.remove();
		// 字体加载优化
		ui.css.fontsheet=lib.init.sheet();
		const fontSheet=ui.css.fontsheet.sheet,suitsFont=lib.config.suits_font;
		// 花色、前缀
		if(suitsFont) fontSheet.insertRule(`@font-face {font-family: 'Suits'; src: url('${lib.assetURL}font/suits.ttf');}`,0);
		fontSheet.insertRule(`@font-face {font-family: 'NonameSuits'; src: url('${lib.assetURL}font/suits.ttf');}`,0);
		fontSheet.insertRule(`@font-face {font-family: 'MotoyaLMaru'; src: url('${lib.assetURL}font/motoyamaru.ttf');}`,0)
		// 合并font.css
		// 你也可以自行修改下面local里的字体，但得确保你已经安装该字体；
		// 以下的名称参照github.com/libccy/noname/tree/master/font列表；
		// 如果你安装完以下字体后需要重启无名杀APP；
		if (lib.config['extension_十周年UI_zitijiazai']=='local') {
			/*手杀*/
			fontSheet.insertRule(`@font-face {font-family: 'shousha';src: local('方正隶变_GBK'), url('${lib.assetURL}font/shousha.ttf');}`,0);
			/*黄草*/
			fontSheet.insertRule(`@font-face {font-family: 'huangcao';src: local('方正黄草_GBK'), url('${lib.assetURL}font/huangcao.ttf');}`,0);
			/*小篆*/
			fontSheet.insertRule(`@font-face {font-family: 'xiaozhuan';src: local('方正小篆体'), url('${lib.assetURL}font/xiaozhuan.ttf');}`,0);
			/*行楷*/
			fontSheet.insertRule(`@font-face {font-family: 'xingkai';src: local('方正行楷_GBK'), url('${lib.assetURL}font/xingkai.ttf');}`,0);
			/*新魏*/
			fontSheet.insertRule(`@font-face {font-family: 'xinwei';src: local('华文新魏_GBK'), url('${lib.assetURL}font/xinwei.ttf');}`,0);
			/*楷体*/
			fontSheet.insertRule(`@font-face {font-family: 'yuanli';src: local('方正北魏楷书_GBK'), url('${lib.assetURL}font/yuanli.ttf');}`,0);
			/*用于主动技的字体*/
			fontSheet.insertRule(`@font-face {font-family: 'HYZLSJ';src: local('汉仪中隶书简'), url('${lib.assetURL}font/HYZLSJ.ttf');}`,0);
		}else{
			/*手杀*/
			fontSheet.insertRule(`@font-face {font-family: 'shousha';src: url('${lib.assetURL}font/shousha.ttf');}`,0);
			/*黄草*/
			fontSheet.insertRule(`@font-face {font-family: 'huangcao';src: url('${lib.assetURL}font/huangcao.ttf');}`,0);
			/*小篆*/
			fontSheet.insertRule(`@font-face {font-family: 'xiaozhuan';src: url('${lib.assetURL}font/xiaozhuan.ttf');}`,0);
			/*行楷*/
			fontSheet.insertRule(`@font-face {font-family: 'xingkai';src: url('${lib.assetURL}font/xingkai.ttf');}`,0);
			/*新魏*/
			fontSheet.insertRule(`@font-face {font-family: 'xinwei';src: url('${lib.assetURL}font/xinwei.ttf');}`,0);
			/*楷体*/
			fontSheet.insertRule(`@font-face {font-family: 'yuanli';src: url('${lib.assetURL}font/yuanli.ttf');}`,0);
			/*用于主动技的字体*/
			fontSheet.insertRule(`@font-face {font-family: 'HYZLSJ';src: url('${lib.assetURL}font/HYZLSJ.ttf');}`,0);
		}
		
		decadeModule.init = function () {
			// this.css(decadeUIPath + 'font.css');
			this.css(decadeUIPath + 'layout.css');
			this.css(decadeUIPath + 'decadeLayout.css');
			this.css(decadeUIPath + 'player.css');
			this.css(decadeUIPath + 'equip.css');
			
			this.js(decadeUIPath + 'spine.js');
			this.js(decadeUIPath + 'component.js');
			this.js(decadeUIPath + 'skill.js');
			this.js(decadeUIPath + 'content.js');
			this.js(decadeUIPath + 'effect.js');
			this.js(decadeUIPath + 'animation.js');
			this.js(decadeUIPath + 'dynamicSkin.js');
			this.js(decadeUIPath + 'menu.js');
			
			// Show-K修复版搬运
			const decadeExtCardImage = lib.decade_extCardImage || (lib.decade_extCardImage = {});
			if(lib.node&&lib.node.fs) new Promise((resolve, reject) => lib.node.fs.readdir(`${__dirname}/${decadeUIPath}image/card/`, (errnoException, files) => {
				if (errnoException) reject(errnoException);
				else resolve(files);
			})).then(files => files.forEach(file => {
				const fileName = lib.path.parse(file).name;
				if (!decadeExtCardImage[fileName]) decadeExtCardImage[fileName] = `${decadeUIPath}image/card/${file}`;
			}));
			else if (typeof resolveLocalFileSystemURL == 'function') new Promise((resolve, reject) => {
				resolveLocalFileSystemURL(`${decadeUIPath}image/card/`, resolve, reject);
			}).then(directoryEntry => new Promise((resolve, reject) => {
				directoryEntry.createReader().readEntries(resolve, reject);
			})).then(entries => entries.forEach(entry => {
				const entryName = entry.name, fileName = lib.path.parse(entryName).name;
				if (!decadeExtCardImage[fileName]) decadeExtCardImage[fileName] = `${decadeUIPath}image/card/${entryName}`;
			}));
			
			return this;
		};
		decadeModule.js = function (path) {
			if (!path) return console.error('path');
			
			var _this = this;
			var script = document.createElement('script');
			script.onload = function () {
				this.remove();
			};
			script.onerror = function () {
				this.remove();
				console.error(this.src + 'not found');
			};
			script.src = path + '?v=' + decadePack.package.version;
			document.head.appendChild(script);
			return script;
		};
		decadeModule.css = function (path) {
			if (!path) return console.error('path');
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = path + '?v=' + decadePack.package.version;
			document.head.appendChild(link);
			return link;
		};
		decadeModule.import = function (module) {
			if (!this.modules) this.modules = [];
			if (typeof module != 'function') return console.error('import failed');
			this.modules.push(module);
		};
		return decadeModule.init();
	})({})
	
	Object.defineProperties(_status, {
		connectMode: {
			configurable: true,
			get:function(){
				return this._connectMode;
			},
			set:function(value){
				this._connectMode = value;
				if (value && lib.extensions) {
					var decadeExtension;
					var startBeforeFunction = lib.init.startBefore;

					for (var i = 0; i < lib.extensions.length; i++) {
						if (lib.extensions[i][0] == extensionName) {
							decadeExtension = lib.extensions[i];
							break;
						}
					}
					
					if (!decadeExtension) return;

					lib.init.startBefore = function(){
						try {
							_status.extension = decadeExtension[0];
							_status.evaluatingExtension = decadeExtension[3];
							decadeExtension[1](decadeExtension[2], decadeExtension[4]);
							delete _status.extension;
							delete _status.evaluatingExtension;
							console.log('%c' + extensionName + ': 联机成功', 'color:blue');
						} catch(e) {
							console.log(e);
						}
						
						if (startBeforeFunction) startBeforeFunction.apply(this, arguments);
					};
				}
			}
		},
		_connectMode: {
			value: false,
			writable: true
		}
	});
	
},help:{},
config:{
	sznuigxsm: {
		name:'<div class="hth_menu">▶更新说明（点击后展开）</div>',
		clear:true,
		onclick:function(){
			if(this.hth_more==undefined){
				var more=ui.create.div('.hth_more',
				'<div style="border: 0px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">'+
				'本次魔改（并搬运部分新版更新内容）：棘手怀念摧毁（已得到原作者的修改许可）<br>重点参考（搬运）：꧁꫞꯭✨fly✨꯭꫞꧂魔改版、尋魔改版、零二魔改版、Show-K修复版、萌新（转型中）修复版等'+
				'<br>'+
				'<br><有bug先检查其他扩展，不行再关闭UI重试，最后再联系棘手怀念摧毁反馈>'+
				'<br>'+
				'<br>棘手怀念摧毁（主要）更新内容'+
				'<br>- 本魔改特色：手杀UI界面左手布局。'+
				'<br>PS：新版十周年、右手布局或其他样式可自行寻找其他魔改版本替换（替换是删除原目录内的所有文件，再将新的文件复制进去，而不是直接覆盖；另外扩展更新亦建议使用替换）。'+
				'<br>- 新增护甲上限修改选项，可修改护甲上限（默认为5上限），即时生效；新增护甲失效开关，开启后护甲失效，关闭后护甲生效，即时生效。'+
				'<br>- 新增怒气上限修改选项，可修改怒气上限（默认为3上限），即时生效。'+
				'<br>- 新增国战魔改开关（默认开启，在国战模式，若开启 使用国战武将 开关时，勾玉改为阴阳鱼，武将体力以阴阳鱼为单位，体力上限相加向下取整），虽然取平均值效果一样，但对于国战而言，勾玉和阴阳鱼寓意上是不一样的，故特做此魔改；为避免冲突，国战模式-“使用国战武将”开启时，开启千幻聆音扩展后/扩展使用国战武将后国战魔改失效。'+
				'<br>- 国战其他魔改：鏖战模式删除左上角提示；国战军令卡牌删除“军令”文字显示。'+
				'<br>- 新增标记修改开关选项，修改标记使之符合技能描述，默认开启，可能与其他同样魔改本体武将技能的扩展存在兼容问题。'+
				'<br>- 新增旧版发送交互表情开关选项，开启后，将启用旧版发送交互表情函数（默认开启）。'+
				'<br>- 新增自动换肤选项，增加自动换肤选项；修复bug：选将后，若游戏时间超过换肤时间无法自动换肤；除本体自动换肤选项（点击触屏按钮，选项-选项-外观-自动换肤）外，还可通过本扩展自动换肤选项设置自动换肤；重启后扩展自动换肤设置与本体自动换肤设置保持一致。'+
				'<br>- 音效修改：'+
				'<br>① 新增伤害音效配置选项，可设置新版和旧版伤害音效的使用，即时生效。（手机端可长按/电脑端可右击选项查看配置）'+
				'<br>② 新增旧版配音系统开关选项，开启后，将启用旧版配音系统，支持.ogg格式配音播放（默认开启）。'+
				'<br>- 新增露头皮肤高度调整开关选项，可根据露头皮肤素材直接调整对应的露头皮肤高度（包括选将框、拼点框），即时生效。'+
				'<br>- 新增座位布局调整开关选项，可调整座位布局（2-8人），即时生效。'+
				'<br>- 新增折叠手牌开关选项，设置当手牌过多时，是否折叠手牌，即时生效；修复折叠手牌后手牌区可上下移动的bug。'+
				'<br>- 新增对话框美化开关选项（因短歌修改技能不全，为使对话框样式统一，并为避免旧代码出bug，设置默认关闭），可自行选用短歌修改的对话框美化，手动重启后生效。<br>① 拼点美化：开启后，启用chooseToCompare函数和chooseToCompareMultiple函数，美化拼点对话框。<br>② 观星美化：开启后，启用chooseToGuanxing函数和部分技能中的chooseGuanXing对话框，涉及观星、卜算类技能<br>注意：旧代码可能存在bug，若有问题请选择关闭选项。'+
				'<br>- 新增装备栏布局调整开关选项，开启后将装备改成由下至上堆叠的布局（用于扩展装备栏），即时生效；显示扩展装备区状态时，同步更新装备栏布局。'+
				'<br>- 新增不显示托管文字开关（默认开启，托管时不显示“托管中...”文字和阴影），并调整托管区域大小位置。'+
				'<br>- 新增转圈特效开关（开启后，除受伤和回复外都会转圈，素材来自特效测试扩展），若使用特效测试扩展要记得关闭本开关。'+
				'<br>- 调色：带属性标签字体颜色修改；觉醒技、限定技等技能特效字体颜色修改；更改势力字体颜色；修改武将前缀及其颜色等。'+
				'<br>- 使用战火（骨骼动画）替换游戏开始特效。'+
				'<br>- 兵乐闪电标记魔改（参考零二魔改和光同尘的兵乐闪电标记使用方法）；增加牌名判断区分兵临城下和兵粮寸断标记（该方法可用于分离类似“兵”冲突的情况）。'+
				'<br>- 新增（及搬运）动态背景人物/动态皮肤若干并调整大小位置；新增小杀和侍灵动态背景的彩蛋（战斗胜利/失败动画），侍灵素材来自EpicFX扩展；动态背景人物增加识别手机端和电脑端设备判断，从而调整对应大小位置。'+
				'<br>- 搬运并魔改部分新版更新内容（作者短歌、寰宇星城、Show-K、萌新（转型中）等大佬的更新），内容包括但不限于：'+
				'<br>① 新增字体加载优化选项，优化字体加载功能（仅在电脑端测试有效）。'+
				'<br>② 新增menu.js以魔改本体菜单。'+
				'<br>③ 可通过关闭本体选项-显示-显示武将评级开关关闭武将评级了。'+
				'<br>④ 搬运并魔改新版十周年UI的骨骼播放和动皮功能，加强对其他扩展的兼容。'+
				'<br>⑤ 适配新版本体：参考大佬们的修复文件和【本体game/game.js】等进行修复（含搬运和魔改）。'+
				'<br>⑥ Mixin注入改写搬运：包括重写卡牌美化功能并修复显示问题等。'+
				'<br>- 其他关于懒人包本体的修复及魔改（懒人包更新无需再魔改本体，若后续本体更新则需参考本体魔改扩展即可）等略。'+
				'<br>- 素材（含自绘）补充/替换/更改/删减；特别感谢七.等提供的彩色手牌素材。'+
				'<br>- 新增本【更新说明】折叠选项，可更方便地展开与折叠查看；扩展设置选项分类调整（已注释掉右手布局开关、玩家边框等阶等选项）。'+
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
	hujiashangxian: {
		name: '护甲上限修改(即时生效)',
		intro: '可修改护甲上限（默认为5上限），即时生效',
		init: '5',
		item: {
			'0': '0上限',
			'1': '1上限',
			'2': '2上限',
			'3': '3上限',
			'4': '4上限',
			'5': '5上限',
			'6': '6上限',
			'7': '7上限',
			'8': '8上限',
			'9': '9上限',
			'10': '10上限',
			'15': '15上限',
			'20': '20上限',
			'25': '25上限',
			'30': '30上限',
			'35': '35上限',
			'40': '40上限',
			'45': '45上限',
			'50': '50上限',
			'Infinity': '无限',
		},
	},
	hujiashixiao: {
		name: '护甲失效(即时生效)',
		intro: "开启后护甲失效，关闭后护甲生效，即时生效",
		init: false,
	},
	nuqishangxian: {
		name: '怒气上限修改(即时生效)',
		intro: '可修改怒气上限（默认为3上限），即时生效',
		init: '3',
		item: {
			'0': '0上限',
			'1': '1上限',
			'2': '2上限',
			'3': '3上限',
			'4': '4上限',
			'5': '5上限',
			'6': '6上限',
			'7': '7上限',
			'8': '8上限',
			'9': '9上限',
			'10': '10上限',
			'15': '15上限',
			'20': '20上限',
			'25': '25上限',
			'30': '30上限',
			'35': '35上限',
			'40': '40上限',
			'45': '45上限',
			'50': '50上限',
			'Infinity': '无限',
		},
		onclick:function(item){
			game.saveConfig('nuqishangxian',item);
			game.saveConfig('extension_十周年UI_nuqishangxian',item);
			_status.stratagemFuryMax=Number(item);
		}
	},
	guozhanmogai: {
		name: '国战魔改',
		intro: "开启后，在国战模式，若开启 使用国战武将 开关时，勾玉改为阴阳鱼，武将体力以阴阳鱼为单位，体力上限相加向下取整<br>（注：为避免冲突，国战模式-“使用国战武将”开启时，开启千幻聆音扩展后/扩展使用国战武将后国战魔改失效）",
		init: true,
	},
	biaojixiugai: {
		name: '标记修改',
		intro: "修改标记使之符合技能描述，默认开启，可能与其他同样魔改本体武将技能的扩展存在兼容问题",
		init: true,
	},
	jiubanjhbq: {
		name: '旧版发送交互表情',
		intro: "开启后，将启用旧版发送交互表情函数",
		init: true,
	},
	zidonghuanfu: {
		name: '自动换肤',
		intro: "修复本体自动换肤功能，增加选项<br>除本体自动换肤选项（点击触屏按钮，选项-选项-外观-自动换肤）外，还可通过本扩展自动换肤选项设置自动换肤<br>重启后扩展自动换肤设置与本体自动换肤设置保持一致",
		init:'off',
		item:{
			'off':'关闭',
			'3000':'3秒',
			'5000':'5秒',
			'10000':'10秒',
			'15000':'15秒',
			'20000':'20秒',
			'25000':'25秒',
			'30000':'半分钟',
			'60000':'一分钟',
			'120000':'两分钟',
			'300000':'五分钟',
		},
		onclick:function(item){
			// 扩展自动换肤设置与本体自动换肤设置保持一致
			game.saveConfig('change_skin_auto',item);
			game.saveConfig('extension_十周年UI_zidonghuanfu',item);
			clearTimeout(_status.skintimeout);
			if(item!='off'){
				_status.skintimeout=setTimeout(ui.click.autoskin,parseInt(item));
			}
		}
	},
	szn_fenjiexian1:{
		clear:true,
		name:"<font size='3'><li>字体相关修改</font>",
	},
	zitijiazai: {
		name: '字体加载优化',
		intro: '优化字体加载功能<br><li>电脑端：当前设备如果已经安装local里的字体，请选择不优化选项，可以极致提升游戏字体加载速度；若未安装字体，请选择不优化选项，将加载本体路径下的字体文件<br><li>手机端：第一次加载后会缓存字体，所以有没有都无所谓',
		init: 'local',
		item:{
			'local' : '优化',
			'url' : '不优化',
		},
	},
	szn_fenjiexian2:{
		clear:true,
		name:"<font size='3'><li>音效相关修改</font>",
	},
	jiubanshanghai: {
		name: '伤害音效配置(即时生效)',
		intro: "可设置新版（4种）和旧版（1种）伤害音效的使用，即时生效<br>▶配置1：<br>造成无属性伤害 新版、<br>造成属性伤害 新版、<br>护甲抵挡无属性伤害 新版、<br>护甲抵挡属性伤害 新版<br>▶配置2：<br>造成无属性伤害 旧版、<br>造成属性伤害 旧版、<br>护甲抵挡无属性伤害 旧版、<br>护甲抵挡属性伤害 旧版<br>▶配置3：<br>造成无属性伤害 旧版、<br>造成属性伤害 新版、<br>护甲抵挡无属性伤害 旧版、<br>护甲抵挡属性伤害 旧版<br>▶配置4：<br>造成无属性伤害 旧版、<br>造成属性伤害 新版、<br>护甲抵挡无属性伤害 旧版、<br>护甲抵挡属性伤害 新版（造成属性伤害）",
		init: '4',
		item: {
			'1': '配置1',
			'2': '配置2',
			'3': '配置3',
			'4': '配置4',
		},
	},
	jiubanpeiyin: {
		name: '旧版配音系统',
		intro: "开启后，将启用旧版配音系统，支持.ogg格式配音播放（机制是若读不到.mp3格式配音，则转向读取.ogg格式配音）<br>注：部分配音可能存在bug",
		init: true,
	},
	// 分割线
	"sznuifengexian":{
		"name":"<font size='4'>------美化与样式------</font>",
		"clear":true,
	},
	/*
	rightLayout:{
        name: '右手布局',
        init: false,
		update:function(){
			if (window.decadeUI) ui.arena.dataset.rightLayout = lib.config['extension_十周年UI_rightLayout'] ? 'on' : 'off';
		}
    },
	*/
	dynamicBackground:{
		name: '动态背景',
		init: 'skin_zhenji_才颜双绝',
		item:{
			off: '关闭',
			skin_xiaosha_default: 				'小杀',
			skin_ahao_default: 					'侍灵-阿豪',
			skin_ale_default: 					'侍灵-阿乐',
			skin_datong_default: 				'侍灵-大桶',
			skin_liuli_default: 				'侍灵-琉璃',
			skin_lulu_default: 					'侍灵-鲁鲁',
			skin_manman_default: 				'侍灵-蠻蠻',
			skin_rui_default: 					'侍灵-瑞',
			skin_xiaoxiao_default: 				'侍灵-枭枭',
			skin_xuanwu_default: 				'侍灵-玄武',
			skin_xueren_default: 				'侍灵-雪人',
			skin_yan_default: 					'侍灵-焱',
			skin_yueer_default: 				'侍灵-玥儿',
			skin_baosanniang_漫花剑俏: 			'鲍三娘-漫花剑俏',
			skin_baosanniang_舞剑铸缘: 			'鲍三娘-舞剑铸缘',
			skin_caiwenji_才颜双绝: 			'蔡文姬-才颜双绝',
			skin_caojie_凤历迎春: 				'曹节-凤历迎春',
			skin_caojie_战场绝版: 				'曹节-战场绝版',
			skin_caoying_巾帼花舞: 				'曹婴-巾帼花舞',
			skin_daqiao_清萧清丽: 				'大乔-清萧清丽',
			skin_daqiao_衣垂绿川:				'大乔-衣垂绿川',
			skin_daqiao_战场绝版: 				'大乔-战场绝版',
			skin_daqiaoxiaoqiao_战场绝版: 		'大乔小乔-战场绝版',
			skin_diaochan_玉婵仙子: 			'貂蝉-玉婵仙子',
			skin_diaochan_战场绝版: 			'貂蝉-战场绝版',
			skin_dongbai_娇俏伶俐: 				'董白-娇俏伶俐',
			skin_fanyufeng_斟酒入情: 			'樊玉凤-斟酒入情',
			skin_fuhuanghou_万福千灯: 			'伏皇后-万福千灯',
			skin_guozhao_雍容尊雅: 				'郭照-雍容尊雅',
			skin_hetaihou_鸩毒除患: 			'何太后-鸩毒除患',
			skin_hetaihou_蛇蝎为心: 			'何太后-蛇蝎为心',
			skin_hetaihou_耀紫迷幻: 			'何太后-耀紫迷幻',
			skin_huaman_经典形象: 				'花鬘-经典形象',
			skin_huaman_花俏蛮娇: 				'花鬘-花俏蛮娇',
			skin_huangyueying_花好月圆: 		'黄月英-花好月圆',
			skin_huangyueying_持智思耀: 		'黄月英-持智思耀',
			skin_lukang_毁堰破晋: 				'陆抗-毁堰破晋',
			skin_luxun_谋定天下: 				'陆逊-谋定天下',
			skin_luxunlvmeng_清雨踏春: 			'陆逊吕蒙-清雨踏春',
			skin_mayunlu_战场绝版: 				'马云騄-战场绝版',
			skin_mayunlu_烟绚繁星: 				'马云騄-烟绚繁星',
			skin_shuxiangxiang_花好月圆: 		'蜀香香-花好月圆',
			skin_shuxiangxiang_花曳心牵:		'蜀香香-花曳心牵',
			skin_sundengzhoufei_鹊星夕情: 		'孙登周妃-鹊星夕情',
			skin_sunluban_宵靥谜君: 			'孙鲁班-宵靥谜君',
			skin_sunluyu_娇俏伶俐: 				'孙鲁育-娇俏伶俐',
			skin_wangrong_云裳花容: 			'王荣-云裳花容',
			skin_wangyi_绝色异彩: 				'王异-绝色异彩',
			skin_wangyi_战场绝版: 				'王异-战场绝版',
			skin_wangyuanji_鼠年冬至: 			'王元姬-鼠年冬至',
			skin_wolongzhuge_隆中陇亩: 			'卧龙诸葛-隆中陇亩',
			skin_wuxian_锦运福绵: 				'吴苋-锦运福绵',
			skin_wuxian_金玉满堂: 				'吴苋-金玉满堂',
			skin_xiahoushi_端华夏莲: 			'夏侯氏-端华夏莲',
			skin_xiahoushi_战场绝版: 			'夏侯氏-战场绝版',
			skin_xiaoqiao_采莲江南: 			'小乔-采莲江南',
			skin_xiaoqiao_花好月圆: 			'小乔-花好月圆',
			skin_xiaoqiao_猪年大雪: 			'小乔-猪年大雪',
			skin_xinxianying_英装素果: 			'辛宪英-英装素果',
			skin_xushi_拈花思君: 				'徐氏-拈花思君',
			skin_xushi_为夫弑敌: 				'徐氏-为夫弑敌',
			skin_zhangchangpu_钟桂香蒲: 		'张昌蒲-钟桂香蒲',
			skin_zhangchunhua_花好月圆: 		'张春华-花好月圆',
			skin_zhangchunhua_战场绝版: 		'张春华-战场绝版',
			skin_zhangqiying_岁稔年丰: 			'张琪瑛-岁稔年丰',
			skin_zhangqiying_逐鹿天下: 			'张琪瑛-逐鹿天下',
			skin_zhangxingcai_凯旋星花: 		'张星彩-凯旋星花',
			skin_zhaoxiang_芳芷飒敌: 			'赵襄-芳芷飒敌',
			skin_zhenji_才颜双绝: 				'甄姬-才颜双绝',
			skin_zhenji_洛神御水: 				'甄姬-洛神御水',
			skin_zhoufei_晴空暖鸢: 				'周妃-晴空暖鸢',
			skin_zhouyi_剑舞浏漓: 				'周夷-剑舞浏漓',
			skin_zhugeguo_兰荷艾莲: 			'诸葛果-兰荷艾莲',
			skin_zhugeguo_仙池起舞: 			'诸葛果-仙池起舞',
			skin_zhugeguo_英装素果: 			'诸葛果-英装素果',
			skin_zhugeliang_空城退敌: 			'诸葛亮-空城退敌',
		},
		update:function(){
			if (!window.decadeUI) return;
			
			var item = lib.config['extension_十周年UI_dynamicBackground'];
			if (!item || item == 'off') {
				decadeUI.backgroundAnimation.stopSpineAll();
			} else {
				var name = item.split('_');
				var skin = name.splice(name.length - 1, 1)[0]
				name = name.join('_')
				decadeUI.backgroundAnimation.play(name, skin);
			}
		}
	},
	outcropSkin:{
		name: '露头皮肤(需对应素材)',
        init: false,
		update:function(){
			if (window.decadeUI) ui.arena.dataset.outcropSkin = lib.config['extension_十周年UI_outcropSkin'] ? 'on' : 'off';
		}
	},
	outcropSkingdtz:{
		name: '露头皮肤高度调整',
		intro: "可根据露头皮肤素材直接调整对应的露头皮肤高度（包括选将框、拼点框），即时生效<br>注意：若关闭本选项，则露头皮肤高度调整为原版，是否切换露头皮肤由露头皮肤开关控制",
		init: 'off',
		item: {
			off:'关闭',
			shizhounianpc:'十周年-电脑',
			shizhounianmobile:'十周年-手机',
			shousha:'手杀',
			xinshousha:'新手杀',
		},
		update:function(){
			if (window.decadeUI) ui.arena.dataset.outcropSkingdtz = lib.config['extension_十周年UI_outcropSkingdtz'];
		}
	},
	zwbjtz:{
		name: '座位布局调整',
		intro: "可调整座位布局（2-8人），即时生效<br>注意：若关闭本选项，则座位布局调整为原版",
		init: 'off',
		item: {
			off:'关闭',
			// shizhounianpc:'十周年-电脑',
			// shizhounianmobile:'十周年-手机',
			shousha:'手杀',
			// xinshousha:'新手杀',
		},
		update:function(){
			if (window.decadeUI) ui.arena.dataset.zwbjtz = lib.config['extension_十周年UI_zwbjtz'];
		}
	},
	foldCardMinWidth: {
		name: '折叠手牌',
		intro: '设置当手牌过多时，是否折叠手牌，即时生效<br>注意：若折叠手牌，可选露出部分的最小宽度；若不折叠手牌，露出部分的最小宽度为卡牌宽度',
		init: '82',
		item: {
			'62': '折叠-露出宽度小',
			'72': '折叠-露出宽度中',
			'82': '折叠-露出宽度大',
			'92': '折叠-露出宽度特大',
			'cardW': '不折叠',
		},
		update: function () {
			if (window.decadeUI) decadeUI.layout.updateHand();
		}
	},
	cardPrettify:{
        name: '卡牌美化(需重启)',
		init: true,
        // init: 'webp',
		// item: {
			// off: '关闭',
			// webp: 'WEBP素材',
			// png:  'PNG 素材',
		// }
    },
	campIdentityImageMode:{
        name: '势力身份美化',
        init: true,
    },
	"dhkmh":{
		"name":"对话框美化",
		"intro":"可自行选用短歌修改的对话框美化，手动重启后生效<br>①拼点美化：开启后，启用相关函数，美化拼点对话框<br>②观星美化：开启后，启用相关函数和部分技能中的chooseGuanXing对话框，涉及观星、卜算类技能<br>注意：旧代码可能存在bug，若有问题请选择关闭选项",
		"init":lib.config.dhkmh === undefined ? "off" : lib.config.dhkmh,
		"item": {
			"off":"关闭",
			"pindian":"拼点美化",
			"guanxinghepindian":"观星和拼点美化",
		},
		onclick:function(item){
			game.saveConfig('extension_十周年UI_dhkmh',item);
			game.saveConfig('dhkmh',item);
		},
	},
	equipLayout:{
		name: '装备栏布局调整',
		intro: "开启后将装备改成由下至上堆叠的布局（用于扩展装备栏），即时生效",
		init: false,
		update:function(){
			if (window.decadeUI) ui.arena.dataset.equipLayout = lib.config['extension_十周年UI_equipLayout'] ? 'on' : 'off';
		}
	},
	playerMarkStyle:{
        name: '人物标记样式',
        init: 'decade',
        item:{
			decade: '十周年',
			yellow:'黄色',
            red:'红色',
        },
		update:function(){
			if (window.decadeUI) ui.arena.dataset.playerMarkStyle = lib.config['extension_十周年UI_playerMarkStyle'];
		}
    },
	gainSkillsVisible:{
		name: '获得技能显示',
        init: 'off',
        item:{
			off: '不显示',
            on: '显示',
			othersOn : '显示他人',
        },
		update:function(){
			if (window.decadeUI) ui.arena.dataset.gainSkillsVisible = lib.config['extension_十周年UI_gainSkillsVisible'];
		}
	},
	cardAlternateNameVisible:{
        name: '牌名辅助显示',
        init: false,
		update:function(){
			if (window.decadeUI) ui.window.dataset.cardAlternateNameVisible = lib.config['extension_十周年UI_cardAlternateNameVisible'] ? 'on' : 'off';
		}
    },
	notuoguanzhong: {
		name: '不显示托管文字',
		intro: "开启后托管时不显示“托管中...”文字和阴影",
		init: true,
	},
	/*
	borderLevel:{
		name: '玩家边框等阶',
        init: 'one',
        item:{
            one:'一阶',
			two:'二阶',
			three:'三阶',
			four:'四阶',
			five:'五阶',
        },
		update:function(){
			if (window.decadeUI) ui.arena.dataset.borderLevel = lib.config['extension_十周年UI_borderLevel'];
		}
	},
	*/
	// 分割线
	"sznuifengexian1":{
		"name":"<font size='4'>------特效与动皮------</font>",
		"clear":true,
	},
	jinengeffect: {
		name: '转圈特效',
		intro: "除受伤和回复外都会转圈，素材来自特效测试扩展（若使用特效测试扩展要记得关闭本开关）",
		init: true,
	},
	gameAnimationEffect:{
		name: '游戏动画特效',
        init: true,
	},
	playerDieEffect:{
		name: '玩家阵亡特效',
        init: true,
		onclick:function(value){
            game.saveConfig('extension_十周年UI_playerDieEffect', value);
			if (window.decadeUI) decadeUI.config.playerDieEffect = value;
        },
	},
	playerLineEffect:{
		name: '玩家指示线特效',
        init: true,
		onclick:function(value){
            game.saveConfig('extension_十周年UI_playerLineEffect', value);
			if (window.decadeUI) decadeUI.config.playerLineEffect = value;
        },
	},
	playerKillEffect:{
		name: '玩家击杀特效',
        init: false,
		onclick:function(value){
            game.saveConfig('extension_十周年UI_playerKillEffect', value);
            if (window.decadeUI) decadeUI.config.playerKillEffect = value;
        },
	},
	cardUseEffect:{
		name: '卡牌使用特效',
        init: false,
		onclick:function(value){
            game.saveConfig('extension_十周年UI_cardUseEffect', value);
			if (window.decadeUI) decadeUI.config.cardUseEffect = value;
        },
	},
	dynamicSkin:{
        name: '动态皮肤',
        init: false,
    },
	dynamicSkinOutcrop:{
		name: '动皮露头',
        init: false,
		update:function(){
			if (window.decadeUI) {
				ui.arena.dataset.dynamicSkinOutcrop = lib.config['extension_十周年UI_dynamicSkinOutcrop'] ? 'on' : 'off';
				var players = game.players;
				if (!players) return;
				for (var i = 0; i < players.length; i++) {
					if (players[i].dynamic) {
						players[i].dynamic.sizeUpdated = false;
					}
				}
			}
		}
	},
	// dynamicAdaptiveHD:{
		// name: '动皮高清自适应',
		// init: 'on',
		// item:{
			// on: '开启',
			// off: '关闭',
		// },
		// update:function(){
			// if (!window.decadeUI) return;
			// var item = lib.config['extension_十周年UI_dynamicAdaptiveHD'];
			// decadeUI.config.dynamicAdaptiveHD = item;
			// var adaptiveDPR = item && (item == 'on');
			// var players = game.players;
			// if (players) {
				// for (var i = 0; i < players.length; i++) {
					// if (players[i].dynamic) {
						// players[i].dynamic.adaptiveDPR = adaptiveDPR;
						// players[i].dynamic.sizeUpdated = false;
					// }
				// }
			// }
			
			// decadeUI.backgroundAnimation.adaptiveDPR = adaptiveDPR;
			// decadeUI.backgroundAnimation.sizeUpdated = false;
		// },
	// },
	// 分割线
	"sznuifengexian2":{
		"name":"<font size='4'>------其他的设置------</font>",
		"clear":true,
	},
	eruda:{
        name: '调试助手(开发用)',
        init: false,
    },
    // smoothMode: {
		// name: '流畅模式',
		// init: true,
	// },
	
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
    author:"短歌<br>魔改：<span class='bluetext'>棘手怀念摧毁</span>",
    diskURL:"",
    forumURL:"",
    version:"",
},
files:{
    "character":[],
    "card":[],
    "skill":[]
},
// editable: false
};
});

/*
※十周年UI扩展
作者：短歌 QQ464598631
当前版本：1.9.110.9.2.3
更新日期：2021-10-16

更新历史：
1.9.97.6.2：修复不是本扩展卡牌图片溢出，因判定不能及时清理弃牌区，更正势力颜色，技能按钮位置。
1.9.97.6.3：修复类似邓小艾这种判定没有标记的bug，对决模式可能正常换装备了。新增自定义势力字图，直接放到(十周年UI/image/decoration/name_你的势力名.webp)，如果不存自动用字体代替。
1.9.97.6.5：修复国战模式势力名显示错误，新增新版布局。
1.9.97.9.1：新增身份面具，identity_你的身份名.webp，暂时关闭pc版判定牌的信息(有bug没电脑)。
1.9.97.9.2：优化对决模式中的对抗4v4显示身份面具一样，另一个命名为identity_身份名_false.webp。
1.9.98.1.1：修复游戏原版的界面缩放问题，以便更好的适配布局。增加红色技能标记。
1.9.98.1.2：修正了在新版布局未亮明武将牌的情况下装备不能正常显示，以及调整角色背景，可以自定义透明图片了，适当调宽其他玩家装备显示。
1.9.98.1.3：修复因缺少素材而造成显示身份名不正确的bug。
1.9.98.1.4：新增卡牌素材开关，卡牌左边辅助名称开关。
1.9.98.1.5：现在游戏1.8版本也能用了，不过我发现没有1.9版本流畅。
1.9.98.1.6：修复缩放问题。
1.9.98.1.7：修复PC版判定牌，新增缩放防抖动（但会模糊点）。
1.9.98.1.8：新增秃头皮肤使用开关（必须有秃头皮肤），双将默认为左右布局；调整缩放后造成的画面抖动，修正展示手牌过大的问题，修复势力名素材无法正确加载的问题。
1.9.98.1.9：修复：菜单栏显示偏移，武将选择框小；新增：人名字体自由设置，扩展联机可用。
1.9.98.1.10：修复：因联机引起的扩展加载错误。
1.9.98.1.11：
- 新增可变关闭的击杀特效、死亡特效，边框可以自由选择等阶；
- 血条框现在根据血量上限自动变化；
- 无限血量现在正常显示为 ∞ / ∞;
- 卡牌美化素材增加：国战、衍生；
- 修正只明置单将的情况下显示错误；
- 修正卡牌辅助名称上下的间距过大；
- 修正张宝符咒的技能标记显示错误；
1.9.98.1.12：
- 修复1.8版本特效失效。
1.9.98.1.13：
- 修复1.8版本特效失效。
1.9.98.2.4.1：
- 新增指示线特效（可关闭）；
- 玩家击杀自己时不再会显示击杀动画；
- 任意一方玩家没有明置的武将不再会触发击杀动画；
- 国战君主阵亡文字正常显示，玩家阵亡复活后阵亡文字仍显示修复；
1.9.98.2.4.2：
- 新增拼点框特效；
- 其他玩家装备位置修正；
- 替换卡牌的素材只需要在扩展目录正确命名即可；
1.9.98.2.4.3：
- 修复武将不能点击查看详情；
- 修复无法正常加载卡牌素材；
1.9.98.2.4.4：
- 修复bug；
1.9.98.3.2.1：
- 视为某牌、联机进度条、菜单栏、标记菜单位置调整，指示线速度调整；
1.9.98.3.2.2：
- 增加获得的技能显示（如幻化之战、合纵抗秦）；
- 修复王朗拼点、刘璋卡牌显示、阵法卡牌摸牌错误等其他BUG；
- 修正特殊坐骑牌位置；
- 修正标记的显示位置；
1.9.98.3.2.3：
- 又㕛叒叕修复标记偏移了；
- 武将获得的技能显示可以关闭；
- 有想试试观星效果的可以再准备阶段（下次估计会更改方法= =）：
- var cads = get.cards(5)；
- decadeUI.content.chooseGuanXing(player, cards, 5, null, 5);
1.9.98.3.2.4：
- 没更新啥内容，小修了下观星；
- 以及可能修复了笨战万里的不能选择；
1.9.98.3.2.5：
- 调整及修复观星界面；
1.9.98.3.2.6：
- 优化观星界面；
1.9.98.3.2.7：
- 修复观星托管BUG；
1.9.98.4.2.1：
- 修复类似【严教】技能的BUG；
1.9.98.4.2.2：
- 增加【杀】【闪】出牌特效（可关闭）；
- 【视为牌】雷属性增加闪电背景；
- 修复结算、标记卡牌大小；
- 修复移动端无法选择装备；
1.9.98.4.3.1：
- 修复【视为牌】的杀闪特效显示；
1.9.98.4.4.1：
- 移植演示观星UI的几个技能（联机模式关闭），替换的是【界观星】、【称象】、【罪论】、【恂恂】、【点化】、【纵玄】；
1.9.98.4.4.2：
- 新增修复原版【木牛流马】不能很好使用的问题，如改判、丈八等（测试阶段中。。）；
- 修复观星UI的几个技能音效问题；
1.9.98.4.4.3：
- 调整【木牛流马】用牌的规则；
1.9.98.4.4.4：
- 增加老【观星】的UI；
- 修复联机模式判定区未显示标记；
- 修复联机对抗模式自动开始的BUG；
- 修复武将详情标记文字偏移；
- 修复挑战模式的弹窗；
1.9.98.4.5.1:
- 修复联机模式其他玩家没有【十周年UI】扩展不能出牌的BUG；
- 修正联机模式进度条显示位置；
1.9.98.5.0.1:
- 增加唐咨【恂恂】、国战君张角【悟心】的UI；
- 修复类似荀攸【奇策】、刘堪【战绝】会弃掉【木牛流马】里的牌的BUG；
- 修复【木牛流马】有牌自己没有手牌，也能发动类似曹睿【明鉴】的技能的BUG；
- 修复【木牛流马】有牌自己没有手牌，敌方也对自己释放【火攻】的BUG；
- 调整类似【对策】拼牌的动画为丢牌动画；
- 调整联机模式中击杀特效由客机自己控制；
1.9.98.5.1.1:
- 增加了角色座位号显示(联机模式下只有房主有UI才显示)；
- 修复技能动画会让【木牛流马】显示的BUG；
- 修复身份模式特殊身份【军师】技能只显示牌堆顶的BUG；
- 优化【纵玄】AI无脑发动，现在根据会根据情况发动了；
1.9.98.5.1.2:
- 优化了常用的字体预加载；
- 修正了血条显示，如3/Infinity，3/∞，NaN显示为×；
- 修正出牌记录阻挡牌堆牌数记录显示；
1.9.98.7.0.1:
- 新增联机模式聊天框（暂时没弄表情），美化音量条；
- 修复国战诸葛亮师徒观星牌数问题；
- 修复【纵玄】其他人能观看移动的牌问题；
- 修复类似陈琳【颂词】AI因【木牛流马】计算目标手牌不正常的问题；
- 可能修复先亮的野副将，后变成君主将还是野的问题；
1.9.98.7.0.2:
- 修复联机模式创建房间自动开始的BUG；
1.9.99.2.0.1:
- 新增了曹植【落英】技能显示框；
- 修复了国战野势力仍为原势力问题；
- 修正了圆角大小会影响角色；
- 优化了幻化之战目标信息遮挡；
- 优化了AI观星技能没有合适的改判牌不全下的问题；
1.9.99.2.0.2:
- 新增了枣恭介(DIY包)技能【设控】、界曹植【落英】的UI； 
- 修复了曹植【落英】技能因游戏速度过快而不能获得牌的问题；
- 修正了1点血量上限血条框的高度问题；
1.9.99.3.0.1:
- 修复界/曹植的【落英】AI不获得牌的问题；
- 修复界曹植的【落英】配音；
- 修复视为卡牌名称的问题；
1.9.100.0.0.1:
- 修复新版引起的技能BUG；
1.9.100.2.0.1:
- 修复【落英】AI引起的界面卡住问题；
1.9.100.4.2.1:
- 优化带了有观星类UI技能的AI排序牌的问题；
- 修复界太史慈拼点，官渡许攸BUG，键枣宗介的【设控】AI弹窗；
- 调整界/曹植的落英获得牌操作顺序；
1.9.103.4.0.1:
- 修复了某些情况扩展已经载入无法使用的BUG；
- 修复了发动【拼点】时在发动拼点窗口不会消失的BUG（由寰宇星城提供代码，未验证）；
- 增加了主玩家空装备的五个武器图标；
- 增加了【默认】布局；
1.9.105.1.0.1:
- 增加了[游戏开始、诸葛连弩、八卦阵、仁王盾]动画
- 修复了默认布局主玩家受伤动画错位的BUG
1.9.105.1.0.2:
- 优化了动画的预加载，提升流畅度；
- 增加了[藤甲、白银狮子、麒麟弓、丈八蛇矛、青龙偃月刀、寒冰剑、古锭刀、贯石斧、方天画戟、雌雄双股剑]动画；
1.9.105.3.0.1:
- 修复动画多次绘制的BUG；
- 修复[藤甲、贯石斧]不能播放动画的BUG；
- 修复了某些设备不支持"webgl"导致不能加载本扩展的BUG；
- 增加了[朱雀羽扇]动画；
- 增加了[伤害、治疗]动画；
- 优化了[游戏开始]动画的加载时机；
1.9.105.4.0.1:
- 修复了失去体力时也会播放[伤害]动画的BUG；
- 增加了[逐鹿天下]包相关装备的动画(有几个播放不了，等待游戏修复而修复)；
- 优化了所有动画的大小；
1.9.105.4.0.2:
- 修复了装备牌[女装、折戟、驽马]动画播放问题；
- 增加了基本牌[黑杀、红杀、雷杀、火杀、闪、桃、酒]的相关动画；
1.9.105.5.0.1:
- 优化了[击杀特效]动画；
- 增加了[阵亡破碎、南蛮入侵、乐不思蜀、闪电、兵粮寸断、无懈可击、万箭齐发、桃园结义、顺手牵羊、火攻、过河拆桥、五谷丰登]动画；
- 新增动态背景[马云禄、曹节、大乔、鲍三娘、小杀]；
- 将受伤动画调整为数字一并显示；
1.9.105.5.1.1:
- 修复[兵粮思蜀]的BUG；
- 修复默认布局标记显示错位；
- 动态背景只加载所选资源；
- 优化界面一丢丢性能问题；
1.9.105.6.1.3:
- 优化主玩家手牌显示(滚动拖动)；
- 优化击杀特效的显示时机；
- 新增很多个动态人物背景；
1.9.105.7.0.1:
- 修复不能导入扩展的BUG；
- 再次的再次优化击杀特效；
- 新增发动[限定技]的动画；
- 稍微延时游戏开始时机，提升流畅度；
1.9.105.9.0.1:
- 将张琪瑛的[点化]调整为最新版本；
- 将武将评级替换为A、S、SS、SSS图标；
- 修复翻面牌移动的BUG；
- 修复限定动画资源缓存的BUG；
- 修复已经修复过的BUG；
1.9.105.9.1.1:
- 优化选将露头皮肤显示；
- 修复重复修复的BUG；
1.9.105.9.1.2:
- 将[南蛮入侵]大象腿特效替换为原卡牌的特效；
- 修复选将预览切换皮肤不更新显示的BUG；
1.9.105.10.0.1:
- 增加【身在曹营心在汉】的彩蛋
- 优化[落英]AI拿牌显示时的速度；
1.9.106.0.0.1:
- 增加[流畅模式]功能，可能略微降低游戏出牌速度；
- 增加[花鬘-花俏蛮娇]、[花鬘-经典形象]动态背景；
- 修复最新版不显示出牌特效的BUG（临时打磨）；
1.9.108.4.1.1:
- 新增[辛宪英-英装素果]、[诸葛果-英装素果]、[张春华-战场绝版]、[大乔小乔-战场绝版]、[伏皇后-万福千灯]、[吴苋-锦运福绵]动态背景；
- 新增DIY包久岛欧/野村美希的【幻梦】、应变篇【洞烛先机】的显示UI；
- 修复chooseTuUse代码；
1.9.108.4.1.5:(星城代耕)
- 适配最新无名杀版本，修改木牛流马。,
- 增加装备栏在左边的新样式。,
- 修复了国战无法标记晋势力的问题,
- 修复了晋势力颜色,
- 其它BUG的修复
1.9.110.1.1.0:
- 修正木牛流马；
- 修复晋势力异常显示；
- 新增[大乔-清萧清丽]、[孙鲁育-娇俏伶俐]、[何太后-鸩毒除患]、[张星彩-凯旋星花]、[张琪瑛-岁稔年丰]、[夏侯氏-战场绝版]、[孙鲁班-宵靥谜君]、[董白-娇俏伶俐]、[郭照-雍容尊雅]、[周妃-晴空暖鸢]、[樊玉凤-斟酒入情]；
- 拼点按照无名杀本体的要求，添加同时失去牌的机制。
- 增加边框随击杀数改变的设置。
1.9.110.8.5.1：
- 新增卡牌[知己知彼]、[铁锁连环]、[逐鹿天下]、[树上开花]、[草船借箭]、[远交近攻]的使用特效；
- 新增武将翻面动画及素材，铁索素材，判定特效；
- 新增卡牌美化图片格式选项[关闭、WEBP、PNG]；
- 将部分图片素材的格式统一改为PNG(以后也是)，为了兼容如IOS系统；
- 优化人物边框阴影发光，以及受伤动画；
- 优化部分代码，提升加载速度及流畅度；
- 优化界面操作按钮的布局与对应素材图；
- 优化原有颜色标记的样式，增加动画性；(转换技显示+-)
- 修复了身份面具在对应模式不显示问题；
- 修复界面出牌提示文字被操作按钮遮住；
- 修复spine 读取多张素材图出错的问题(spine 部分函数名已更换)；
- 预计下个版本增加可选的动态皮肤功能；
1.9.110.9.1：
- 优化身份标记框界面；
- 优化拼点框发动界面；
- 优化聊天泡泡框界面；
- 适配新版的判断生效；(judge2)
- 修复出牌特效过快引起的问题；
- 修复其他模式阵亡身份的显示问题；
- 增加了动态皮肤功能，目前只考虑了单武将，后续慢慢优化，相关示例请打开动态皮肤示例开关，如没有显示请检查assets/dynamic下的动皮文件是否完整。
  动态皮肤功能后续只做优化，具体全动皮实现自行解决或者由其他皮肤扩展实现；
1.9.110.9.2.2：
- 增加使用过的牌转换显示；
- 增加动态皮肤的露头开关，默认预览武将为张琪瑛，相关配置文件为dynamicSkin.js；
- 调整卡牌的发光阴影为指定素材显示；
- 优化卡名辅助显示，范围显示可一同控制；
- 修复结束回合按钮不靠左的问题；
- 修复对话框中不可选中的卡牌的显示样式；
- 修复阵亡身份变灰、不正确显示翻面的问题；
1.9.110.9.2.3：
- 新增动态背景[何太后-蛇蝎为心]；
- 新增默认动皮武将有界马超、鲍三娘、魏蔡文姬、大乔、小乔、大乔小乔、貂蝉、郭照、黄月英、何太后、
  花鬘、陆郁生、马云禄、潘淑、孙鲁班、孙鲁育、孙尚香、蜀香香、王元姬、王异、吴苋、夏侯氏、小乔、
  辛宪英、徐氏、杨婉、张菖蒲、张星彩、甄姬、周妃、诸葛果，以及界限突破后的(非界马超除外)。
- 新增动皮高清自适应开关(移动端效果显著)；
- 更新 game.check 函数代码；
- 修复某些动皮白边显示问题；
- 修复初次导入扩展弹窗问题；
- 修复弃牌堆不是转换牌也显示的问题；
- 修复开启动皮后阵亡、翻面不显示问题；
1.9.110.9.3.5：
- 新增动态背景[大　乔-衣垂绿川]、[小　乔-采莲江南]、[蜀香香-花曳心牵];
- 新增动态背景小杀的彩蛋；
- 新增双武将动态皮肤支持；
- 优化动画相关的布局逻辑;
- 优化动皮的显示过度动画；
- 优化代码，提升加载速度；
- 优化手机端窗口过小问题；
- 修复手机端按钮大小问题；
- 修复部分卡牌的判断显示；
- 修复受伤时动画与体力条未同步的问题；
- 修复替换武将后动皮未正确显示的问题；
- 由于动态皮肤过多会导致特效丢失，因此作出以下数量限制；
  chrome 69 及以上的内核版本，手机端限制在10个，PC端限制在18个；
  chrome 69 　以下的内核版本，手机端限制在 2个，PC端限制在10个；
  在控制台输入代码：navigator.appVersion，会返回你的chrome版本；
- windows端闪屏的请使用诗笺的64位版(chrome 91~)，或者原版的win由里版(chrome 51)，或者自行
  打包electron 10.4.7(chrome 85) ~ 4.0.0(chrome 69);
1.1.0.211130：
- 新增动皮[诸葛果仙池起舞]及其背景；
- 新增界武将标记显示及其对应的开关；
- 优化字体加载，配置font.css后秒开；
- 优化卡牌素材加载时机，提升流畅度；
- 优化出牌阶段与技能使用时文本提示；
- 优化武将的发光阴影时机并改为动图；
- 优化露头动皮其他特效部件显示范围；
  优化露头动皮有：大乔-衣垂绿川、小乔-采莲江南、何太后-蛇蝎为心、徐氏-为夫弑敌；
- 调整高清动皮自适应功能默认为开启；
- 修复在低内核版本下动皮的模糊问题；
- 修复挑战模式下BOSS图片消失的问题；
- 修复对决模式下选将图片消失的问题；
- 关于动皮数量限制，手机端请把chrome 内核更新到90及以上；
1.2.0.220114:
- 新增动皮及背景：[曹节-凤历迎春]、[曹婴-巾帼花舞]、[貂蝉-战场绝版]、[何太后-耀紫迷幻]、[王荣-云裳花容]、[吴苋-金玉满堂]、[周夷-剑舞浏漓]；
- 新增动皮oncomplete支持(函数内部只能调用this.xxx代码)；
- 优化了主玩家攻击指示线的位置显示；
- 优化了主玩家出牌摸牌相关呈现动画；
- 优化折叠手牌，开关跟随系统的设置；
- 优化部分代码，提升游戏整体流畅度；
- 修复关闭界包后因界标记弹窗的问题；
- 修复挑战模式下界武将名丢失的问题；
- 修复挑战模式下动皮异常拉伸的问题；
- 修复了加载其他目录的特效文件问题；
- 修复低版本窗口改动后动皮模糊问题；

新版更新内容略
*/