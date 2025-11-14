import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "old",
		connect: true,
		connectBanned: [
			
		],
		character: {
			old_shen_huangzhong: ["male", "shen", 4, ["old_1！5！", "old_chiren"], ["shu", "die_audio:shen_huangzhong"]],
			junk_zhangjiao: ["male", "shen", 3, ["yizhao", "junksijun", "tianjie"], ["qun", "die_audio:shen_zhangjiao"]],

			old_shixie: ["male", "qun", 3, ["biluan", "lixia"]],
			panfeng: ["male", "qun", 4, ["kuangfu"]],
			old_shen_zhaoyun: ["male", "shen", 2, ["oldjuejing", "oldlonghun"], ["shu"]],
			old_guanyinping: ["female", "shu", 3, ["xueji_old", "oldhuxiao", "oldwuji"]],
			old_caocao: ["male", "shen", 3, ["junkguixin", "feiying"], ["die_audio:shen_caocao"]],
			old_chendao: ["male", "shu", 4, ["drlt_wanglie"]],
			old_liyan: ["male", "shu", 3, ["duliang", "fulin"]],
			old_guanzhang: ["male", "shu", 4, ["old_fuhun"]],
			new_caoren: ["male", "wei", 4, ["moon_jushou", "jiewei"], ["die_audio:caoren"]],
			huangzhong: ["male", "shu", 4, ["liegong"]],
			junk_sunquan: ["male", "shen", 4, ["dili", "yuheng"], ["wei", "die_audio:shen_sunquan"]],
			old_dingfeng: ["male", "wu", 4, ["fenxun", "duanbing"]],
			old_huanghao: ["male", "shu", 3, ["oldqinqing", "oldhuisheng"]],
			oldre_liubiao: ["male", "qun", 3, ["zishou", "zongshi"]],
			old_liubiao: ["male", "qun", 4, ["oldzishou", "zongshi"]],
			old_gaoshun: ["male", "qun", 4, ["xianzhen", "jinjiu"]],
			old_caorui: ["male", "wei", 3, ["huituo", "oldmingjian", "xingshuai"], ["zhu"]],
			old_handang: ["male", "wu", 4, ["oldgongji", "oldjiefan"]],
			old_yangzhi: ["female", "jin", 3, ["wanyi", "maihuo"]],
			old_yangyan: ["female", "jin", 3, ["xuanbei", "xianwan"]],
			madai: ["male", "shu", 4, ["mashu", "oldqianxi"]],
			xuhuang: ["male", "wei", 4, ["gzduanliang"]],
			junk_simayi: [
				"male",
				"jin",
				3,
				["buchen", "smyyingshi", "xiongzhi", "quanbian"],
				["hiddenSkill"],
			],
			fazheng: ["male", "shu", 3, ["enyuan", "xuanhuo"]],
			ol_yuanshu: ["male", "qun", 4, ["wangzun", "tongji"]],
			pangde: ["male", "qun", 4, ["mashu", "mengjin"]],
			ol_huaxiong: ["male", "qun", 6, ["new_reyaowu"]],
			old_wangyun: ["male", "qun", 4, ["wylianji", "moucheng"], ["clan:太原王氏"]],
			old_xiaoqiao: ["female", "wu", 3, ["tianxiang", "hongyan"]],
			weiyan: ["male", "shu", 4, ["kuanggu"]],
			xiahouyuan: ["male", "wei", 4, ["shensu"]],
			old_zhangxingcai: ["female", "shu", 3, ["oldshenxian", "qiangwu"]],
			old_fuhuanghou: ["female", "qun", 3, ["oldzhuikong", "oldqiuyuan"]],
			old_caochong: ["male", "wei", 3, ["oldrenxin", "oldchengxiang"]],
			yuji: ["male", "qun", 3, ["old_guhuo"]],
			zhangjiao: ["male", "qun", 3, ["leiji", "guidao", "huangtian"], ["zhu"]],
			old_zhangfei: ["male", "shu", 4, ["new_repaoxiao", "new_tishen"]],
			old_zhaoyun: ["male", "shu", 4, ["longdan", "new_yajiao"]],
			old_huatuo: ["male", "qun", 3, ["jijiu", "chulao"]],
			old_guanyu: ["male", "shu", 4, ["wusheng", "yijue"]],
			old_caochun: ["male", "wei", 4, ["shanjia"]],
			masu: ["male", "shu", 3, ["xinzhan", "huilei"]],
			xushu: ["male", "shu", 3, ["xswuyan", "jujian"], ["border:wei"]],
			liru: ["male", "qun", 3, ["juece", "mieji", "fencheng"]],
			xin_yujin: ["male", "wei", 4, ["jieyue"], ["die_audio:yujin"]],
			//lusu:['male','wu',3,['haoshi','dimeng']],
			//yuanshao:['male','qun',4,['luanji','xueyi'],['zhu']],
			old_zhonghui: ["male", "wei", 3, ["zzhenggong", "zquanji", "zbaijiang"], ["clan:颍川钟氏"]],
			old_xusheng: ["male", "wu", 4, ["pojun"]],
			old_zhuran: ["male", "wu", 4, ["olddanshou"]],
			old_lingtong: ["male", "wu", 4, ["oldxuanfeng"]],
			old_caoxiu: ["male", "wei", 4, ["taoxi"]],
			old_caozhen: ["male", "wei", 4, ["sidi"]],
			old_maliang: ["male", "shu", 3, ["xiemu", "naman"]],
			old_chenqun: ["male", "wei", 3, ["dingpin", "oldfaen"]],
			old_zhuhuan: ["male", "wu", 4, ["youdi"]],
			old_zhuzhi: ["male", "wu", 4, ["anguo"]],

			old_zhugezhan: ["male", "shu", 3, ["old_zuilun", "old_fuyin"]],
			//ol_manchong:['male','wei',3,['yuce','junxing']],
			old_guanqiujian: ["male", "wei", 4, ["drlt_zhenrong", "drlt_hongju"], []],
			old_wanglang: ["male", "wei", 3, ["gushe", "jici"]],
			old_wangyi: ["female", "wei", 3, ["oldzhenlie", "oldmiji"]],
			re_yujin: ["male", "wei", 4, ["yizhong"], ["die_audio:yujin"]],
		},
		characterSort: {
			old: {
				old_standard: ["ol_yuanshu"],
				old_shenhua_feng: ["yuji", "zhangjiao", "xiahouyuan", "weiyan", "old_xiaoqiao", "huangzhong", "new_caoren"],
				old_shenhua_huo: ["pangde"],
				old_shenhua_lin: ["xuhuang"],
				old_shenhua_lei: ["old_zhugezhan", "old_guanqiujian", "old_chendao"],
				old_yijiang1: [
					"masu",
					"xushu",
					"xin_yujin",
					"old_xusheng",
					"old_lingtong",
					"fazheng",
					"old_gaoshun",
					"re_yujin",
				],
				old_yijiang2: [
					"old_zhonghui",
					"madai",
					"old_handang",
					"old_liubiao",
					"oldre_liubiao",
					"old_guanzhang",
					"old_wangyi",
				],
				old_yijiang3: ["liru", "old_zhuran", "old_fuhuanghou", "old_caochong"],
				old_yijiang4: ["old_caozhen", "old_chenqun", "old_zhuhuan", "old_caorui"],
				old_yijiang5: ["old_caoxiu", "old_zhuzhi"],
				old_yijiang6: ["old_huanghao", "old_liyan"],
				old_refresh: ["old_zhangfei", "old_huatuo", "old_zhaoyun", "ol_huaxiong", "old_guanyu"],
				old_extra: ["old_shen_zhaoyun", "old_caocao", "junk_sunquan", "old_shen_huangzhong", "junk_zhangjiao"],
				old_sp: [
					"old_shixie",
					"panfeng",
					"old_wanglang",
					"old_maliang",
					"old_zhangxingcai",
					"old_wangyun",
					"old_dingfeng",
					"old_guanyinping",
				],
				old_yingbian: ["junk_simayi", "old_yangyan", "old_yangzhi"],
				old_mobile: ["old_caochun"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			
		},
		characterTitle: {
			
		},
		characterFilter: {
			
		},
		characterInitFilter: {
			
		},
		card: {
			
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//初版神黄忠
			"old_1！5！": {
				// 配音临时修改（by 棘手怀念摧毁）
				audio: "dclieqiong",
				// audio: 2,
				trigger: { source: "damageSource" },
				filter(event, player) {
					return event.player.isIn() && event.source != event.player;
				},
				logTarget: "player",
				prompt2: (event, player) => ("获得一个“赤”标记" + player.getStorage("old_1！5！_used").length >= 7 ? "" : "，然后可以击伤其一个部位"),
				async content(event, trigger, player) {
					player.addMark("old_1！5！", 1);
					const target = trigger.player;
					const places = lib.skill["old_1！5！"].derivation
						.slice()
						.filter(i => {
							return !player.getStorage("old_1！5！_used").includes(i) && !target.getStorage("old_1！5！_injury").includes(i);
						})
						.randomGets(player.countMark("old_1！5！"));
					if (!places.length) return;
					
					// 旧版
					/*
					const result = await player
						.chooseButton(["毅武：是否击伤" + get.translation(target) + "的一个部位？", [places.slice().map(skill => [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"]), "textbutton"]])
						.set("ai", () => {
							const player = get.player(),
								target = get.event().getTrigger().player;
							if (get.attitude(player, target) > 0) return 0;
							return Math.random() + 1; //插眼，PZ157
						})
						.forResult();
					*/
					//射击部位-by 鸽子
					//牢萌负责精修断后
					//一个团队要有XX的X，YY的Y，ZZ的Z...
					await Promise.all(event.next);
					event.videoId = lib.status.videoId++;
					if (player.isUnderControl()) game.swapPlayerAuto(player);
					const switchToAuto = function () {
						_status.imchoosing = false;
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
						game.resume();
						return Promise.resolve({
							bool: true,
							hurt: places.randomGet(),
						});
					};
					const chooseButton = (places, target) => {
						const { promise, resolve } = Promise.withResolvers();
						const event = _status.event;
						event.switchToAuto = function () {
							_status.imchoosing = false;
							resolve({
								bool: true,
								hurt: places.randomGet(),
							});
							if (event.dialog) event.dialog.close();
						};
						const dialog = ui.create.dialog("forcebutton", "hidden");
						event.dialog = dialog;
						
						//白底大图不加textPrompt了
						// dialog.textPrompt = dialog.add('<div class="text center">毅武：选择击伤' + get.translation(target) +'的一个部位</div>');
						
						dialog.style.display = "flex";
						dialog.style.justifyContent = "center";
						dialog.style.alignItems = "center";
						dialog.style.position = "relative";
						dialog.style.width = "100%";
						dialog.style.height = "100%";
						dialog.id = "old_1！5！";
						dialog.classList.add("fixed");
						dialog.classList.add("scroll1");
						dialog.classList.add("scroll2");
						dialog.classList.add("center");
						dialog.classList.add("scroll3");
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						
						// 临时修改（by 棘手怀念摧毁）
						ui.arena.classList.add("choose-to-move");
						
						const target_img = document.createElement("div");
						const position = lib.skill["old_1！5！"].derivation;
						target_img.style.width = "50%";
						target_img.style.height = "100%";
						target_img.style.position = "relative";
						target_img.style.overflow = "visible";
						target_img.style.boxSizing = "border-box";
						target_img.style.border = "1px solid black";
						
						// 临时修改（by 棘手怀念摧毁）
						target_img.style.backgroundColor = "rgba(113,70,35,0.95)";
						// target_img.style.backgroundColor = "rgb(255,178,102)";
						
						dialog.appendChild(target_img);
						target_img.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_" + (target.hasSex("male") ? "male" : "female") + ".png)";
						target_img.style.backgroundSize = "cover";
						target_img.style.backgroundRepeat = "no-repeat";
						target_img.style.backgroundSize = "contain";
						target_img.style.backgroundRepeat = "no-repeat";
						target_img.style.backgroundPosition = "center center";
						const number = target.hasSex("male")
							? [
									["7", "1"],
									["5", "3"],
									["4", "7"],
									["9", "5"],
									["9", "13"],
									["7", "3"],
									["7", "6"],
							  ]
							: [
									["7", "1"],
									["8", "3"],
									["4", "7"],
									["9", "5"],
									["9", "13"],
									["6", "3"],
									["6", "6"],
							  ];
						let list = [];
						for (let i = 0; i < position.length; i++) {
							const num_px = document.createElement("div");
							num_px.classList.add("nodeintro");
							num_px.nodeTitle = get.translation(position[i]);
							num_px.nodeContent = get.skillInfoTranslation(position[i]);
							num_px.style.width = "15%";
							num_px.style.height = "15%";
							num_px.id = position[i];
							num_px.style.position = "absolute";
							num_px.style.left = `${number[i][0] * 6}%`;
							num_px.style.top = `${number[i][1] * 6}%`;
							num_px.style.boxSizing = "border-box";
							num_px.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_click.png)";
							num_px.style.backgroundSize = "cover";
							num_px.style.backgroundRepeat = "no-repeat";
							num_px.style.backgroundSize = "contain";
							num_px.style.backgroundRepeat = "no-repeat";
							num_px.style.backgroundPosition = "center center";
							num_px.addEventListener(lib.config.touchscreen ? "touchend" : "click", a => {
								event._result = {
									bool: true,
									hurt: a.target.id,
								};
								dialog.close();
								game.resume();
								_status.imchoosing = false;
								resolve(event._result);
							});
							if (!lib.config.touchscreen) {
								if (lib.config.hover_all) {
									lib.setHover(num_px, ui.click.hoverplayer);
								}
								if (lib.config.right_info) {
									num_px.oncontextmenu = ui.click.rightplayer;
								}
							}
							list.push(num_px);
						}
						const selectedList = list.filter(i => places.includes(i.id)).randomGets(Math.min(places.length, event.player.countMark("old_1！5！")));
						for (const i of selectedList) target_img.appendChild(i);
						dialog.open();
						game.pause();
						game.countChoose();
						return promise;
					};
					let next;
					if (event.isMine()) {
						next = chooseButton(places, target);
					} else if (event.isOnline()) {
						const { promise, resolve } = Promise.withResolvers();
						event.player.send(chooseButton, places, target);
						event.player.wait(async result => {
							if (result == "ai") result = await switchToAuto();
							resolve(result);
						});
						game.pause();
						next = promise;
					} else {
						next = switchToAuto();
					}
					const result = await next;
					game.resume();
					
					// 临时修改（by 棘手怀念摧毁）
					game.broadcastAll(function () {
						ui.arena.classList.remove("choose-to-move");
					});
					
					if (result.bool) {
						player.line(target);
						
						// 旧版
						// const place = result.links[0];
						const place = result.hurt;
						
						player.popup(place, "fire");
						game.log(player, "击伤了", target, "的", "#y" + get.translation(place));
						target.addSkill("old_1！5！_injury");
						target.markAuto("old_1！5！_injury", [place]);
						switch (parseInt(place.slice("old_1！5！_place".length))) {
							case 1:
								if (target.getHp() > 0) await target.loseHp(target.getHp());
								break;
							case 2:
								const cards = target
									.getEquips(1)
									.slice()
									.concat(target.getEquips("equip3_4"))
									.filter(card => lib.filter.canBeDiscarded(card, player, target));
								if (cards.length) await target.discard(cards).set("discarder", player);
								break;
							case 3:
								target.addTempSkill("old_1！5！_maxhand", { player: "phaseEnd" });
								break;
							case 4:
								const cardx = target.getDiscardableCards(target, "h");
								if (cardx.length) await target.discard(cardx.randomGets(2));
								break;
							case 5:
								target.addTempSkill("old_1！5！_damage", { player: "phaseEnd" });
								break;
							case 6:
								target.addTempSkill("old_1！5！_use", { player: "phaseEnd" });
								break;
							case 7:
								target.addTempSkill("old_1！5！_respond", { player: "phaseEnd" });
								break;
						}
					}
				},
				marktext: "赤",
				intro: { content: "mark" },
				frequent: true,
				subfrequent: ["effect"],
				derivation: ["old_1！5！_place1", "old_1！5！_place2", "old_1！5！_place3", "old_1！5！_place4", "old_1！5！_place5", "old_1！5！_place6", "old_1！5！_place7"],
				group: ["old_1！5！_equip", "old_1！5！_effect"],
				subSkill: {
					equip: {
						audio: "old_1！5！",
						trigger: { player: "useCard" },
						filter(event, player) {
							return event.card.name == "sha" && player.getEquips(1).length > 0;
						},
						forced: true,
						locked: false,
						content() {
							trigger.directHit.addArray(game.players);
							game.log(trigger.card, "不可被响应");
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, _, arg) {
								// 临时修改（by 棘手怀念摧毁）
								// return player.getEquips(1).length > 0 && arg.card?.name == "sha";
								return player.getEquips(1).length > 0 && arg && arg.card && arg.card.name == "sha";
							},
						},
					},
					effect: {
						audio: "old_1！5！",
						trigger: { player: "useCardAfter" },
						filter(event, player) {
							// 临时修改（by 棘手怀念摧毁）
							// return event.card.name == "sha" && !player.hasHistory("sourceDamage", evt => evt?.card == event.card);
							return event.card.name == "sha" && !player.hasHistory("sourceDamage", evt => evt && evt.card == event.card);
						},
						frequent: true,
						prompt: "是否发动【毅武】摸两张牌？",
						content() {
							player.draw(2);
						},
					},
					injury: {
						charlotte: true,
						mark: true,
						intro: { content: "$已被击伤" },
					},
					maxhand: {
						charlotte: true,
						mark: true,
						marktext: "伤",
						intro: {
							name: "中伤 - 手部",
							content: "手牌上限变为原来的一半（向下取整）",
						},
						mod: {
							maxHandcard(player, num) {
								if (_status["old_1！5！_maxhand"]) return;
								_status["old_1！5！_maxhand"] = true;
								const numx = player.getHandcardLimit();
								delete _status["old_1！5！_maxhand"];
								return num - Math.ceil(numx);
							},
						},
					},
					damage: {
						charlotte: true,
						mark: true,
						marktext: "伤",
						intro: {
							name: "中伤 - 下肢",
							content: "体力值大于1时，受到的伤害+1",
						},
						trigger: { player: "damageBegin2" },
						filter(event, player) {
							return player.getHp() > 1;
						},
						forced: true,
						popup: false,
						content() {
							trigger.num++;
						},
					},
					use: {
						charlotte: true,
						mark: true,
						marktext: "伤",
						intro: {
							name: "中伤 - 胸部",
							content: (_, player) => (_status.currentPhase === player ? "" : "下回合") + "不能使用伤害牌",
						},
						mod: {
							cardEnabled(card, player) {
								if (_status.currentPhase !== player) return;
								if (get.tag(card, "damage")) return false;
							},
						},
					},
					respond: {
						charlotte: true,
						mark: true,
						marktext: "伤",
						intro: {
							name: "中伤 - 腹部",
							content: (_, player) => "不能使用【闪】和【桃】",
						},
						mod: {
							cardEnabled(card) {
								if (card.name == "shan" || card.name == "tao") return false;
							},
							cardSavable(card) {
								if (card.name == "tao") return false;
							},
						},
					},
				},
			},
			old_chiren: {
				// 配音临时修改（by 棘手怀念摧毁）
				audio: "dczhanjue",
				// audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.countMark("old_1！5！") >= Math.max(1, player.getDamagedHp());
				},
				forced: true,
				async content(event, trigger, player) {
					const num = player.countMark("old_1！5！");
					await player.recoverTo(4);
					player.clearMark("old_1！5！");
					await player.draw(num);
				},
			},
			//山包初版神赵
			oldjuejing: {
				audio: "xinjuejing",
				trigger: { player: "phaseDrawBegin2" },
				filter: function (event, player) {
					return !event.numFixed && player.getHp() < player.maxHp;
				},
				forced: true,
				content: function () {
					trigger.num += player.getDamagedHp();
				},
				mod: {
					maxHandcard: (player, num) => num + 2,
					aiOrder(player, card, num) {
						if (num <= 0 || !player.isPhaseUsing() || !get.tag(card, "recover")) return num;
						if (player.needsToDiscard() > 1) return num;
						return 0;
					},
				},
			},
			oldlonghun: {
				audio: "relonghun",
				inherit: "xinlonghun",
				prompt: () =>
					`将${get.cnNumber(
						Math.max(1, get.player().getHp())
					)}张♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出`,
				selectCard: () => Math.max(1, get.player().getHp()),
				complexCard: true,
				precontent: function () {
					delete event.result.skill;
					player.logSkill("oldlonghun");
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						var name;
						switch (tag) {
							case "respondSha":
								name = "diamond";
								break;
							case "respondShan":
								name = "club";
								break;
							case "save":
								name = "heart";
								break;
						}
						if (!player.countCards("hes", { suit: name })) return false;
					},
					order: function (item, player) {
						if (player && _status.event.type == "phase") {
							var max = 0;
							var list = ["sha", "tao"];
							var map = { sha: "diamond", tao: "heart" };
							for (var i = 0; i < list.length; i++) {
								var name = list[i];
								if (
									player.countCards("hes", function (card) {
										return (
											(name != "sha" || get.value(card) < 5) &&
											get.suit(card, player) == map[name]
										);
									}) >= Math.max(1, player.getHp()) &&
									player.getUseValue({
										name: name,
										nature: name == "sha" ? "fire" : null,
									}) > 0
								) {
									var temp = get.order({
										name: name,
										nature: name == "sha" ? "fire" : null,
									});
									if (temp > max) max = temp;
								}
							}
							max /= 1.1;
							return max;
						}
						return 2;
					},
				},
				hiddenCard: function (player, name) {
					if (name == "wuxie" && _status.connectMode && player.countCards("hes") > 0) return true;
					if (name == "wuxie")
						return (
							player.countCards("hes", { suit: "spade" }) >= Math.max(1, get.player().getHp())
						);
					if (name == "tao")
						return (
							player.countCards("hes", { suit: "heart" }) >= Math.max(1, get.player().getHp())
						);
				},
			},
			//魏武帝
			junkguixin: {
				forbid: ["guozhan"],
				init: function () {
					if (!_status.junkguixin) {
						_status.junkguixin = [];
						if (!_status.characterlist) {
							lib.skill.pingjian.initList();
						}
						for (const name of _status.characterlist) {
							if (!lib.character[name][3]) continue;
							_status.junkguixin.addArray(
								lib.character[name][3].filter((skill) => {
									var info = get.info(skill);
									return info && info.zhuSkill && (!info.ai || !info.ai.combo);
								})
							);
						}
					}
				},
				unique: true,
				audio: "guixin",
				trigger: { player: "phaseEnd" },
				direct: true,
				content: function () {
					"step 0";
					var controls = ["获得技能", "修改势力", "cancel2"];
					if (!_status.junkguixin.some((skill) => !player.hasSkill(skill, null, false, false)))
						controls.shift();
					player
						.chooseControl(controls)
						.set("prompt", get.prompt2("junkguixin"))
						.set("ai", () => (_status.event.controls.length == 3 ? "获得技能" : "cancel2"));
					"step 1";
					if (result.control != "cancel2") {
						var next = game.createEvent("junkguixinx");
						next.player = player;
						next.setContent(lib.skill.junkguixin["content_" + result.control]);
					}
				},
				content_获得技能: function () {
					"step 0";
					var list = _status.junkguixin
						.slice()
						.filter((skill) => !player.hasSkill(skill, null, false, false));
					if (!list.length) {
						event.finish();
						return;
					}
					list = list.map((skill) => {
						return [
							skill,
							'<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' +
								get.translation(skill) +
								"】</div><div>" +
								lib.translate[skill + "_info"] +
								"</div></div>",
						];
					});
					player
						.chooseButton(["归心：选择获得一个主公技", [list, "textbutton"]], true)
						.set("ai", (button) => 1 + Math.random());
					"step 1";
					if (result.bool) {
						player.logSkill("junkguixin");
						player.addSkills(result.links[0]);
					}
				},
				content_修改势力: function () {
					"step 0";
					player
						.chooseTarget(
							"请选择【归心】的目标",
							"更改一名其他角色的势力",
							lib.filter.notMe,
							true
						)
						.set("ai", (target) => 1 + Math.random());
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("junkguixin", target);
						var list = lib.group.slice();
						list.removeArray(["shen", target.group]);
						player
							.chooseControl(list)
							.set("prompt", "请选择" + get.translation(target) + "变更的势力")
							.set("ai", () => _status.event.controls.randomGet());
					} else event.finish();
					"step 2";
					if (result.control) {
						player.popup(get.translation(result.control + "2"));
						target.changeGroup(result.control);
					}
				},
			},
			oldqinqing: {
				audio: "qinqing",
				mode: ["identity", "versus"],
				available: function (mode) {
					if (mode == "versus" && _status.mode != "four") return false;
					if (mode == "identity" && _status.mode == "purple") return false;
				},
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					var zhu = get.zhu(player);
					if (!zhu || !zhu.isZhu) return false;
					return game.hasPlayer(function (current) {
						return current != zhu && current != player && current.inRange(zhu);
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("dcqinqing"), function (card, player, target) {
							var zhu = get.zhu(player);
							return target != player && target.inRange(zhu);
						})
						.set("ai", function (target) {
							var zhu = get.zhu(player);
							var he = target.countCards("he");
							if (get.attitude(_status.event.player, target) > 0) {
								if (target.countCards("h") > zhu.countCards("h") + 1) return 0.1;
							} else {
								if (he > zhu.countCards("h") + 1) return 2;
								if (he > 0) return 1;
							}
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("dcqinqing", target);
						if (target.countDiscardableCards(player, "he"))
							player.discardPlayerCard(target, "he", true);
						target.draw();
					} else {
						event.finish();
					}
					"step 2";
					var zhu = get.zhu(player);
					if (zhu && zhu.isIn()) {
						if (target.countCards("h") > zhu.countCards("h")) player.draw();
					}
				},
			},
			oldhuisheng: {
				audio: "huisheng",
				trigger: { player: "damageBegin4" },
				direct: true,
				filter: function (event, player) {
					if (!player.countCards("he")) return false;
					if (!event.source || event.source == player || !event.source.isIn()) return false;
					if (player.storage.oldhuisheng && player.storage.oldhuisheng.includes(event.source))
						return false;
					return true;
				},
				init: function (player) {
					if (player.storage.oldhuisheng) player.storage.oldhuisheng = [];
				},
				content: function () {
					"step 0";
					if (!player.storage.oldhuisheng) player.storage.oldhuisheng = [];
					player.storage.oldhuisheng.push(trigger.source);
					var att = get.attitude(player, trigger.source) > 0;
					var goon = false;
					if (player.hp == 1) {
						goon = true;
					} else {
						var he = player.getCards("he");
						var num = 0;
						for (var i = 0; i < he.length; i++) {
							if (get.value(he[i]) < 8) {
								num++;
								if (num >= 2) {
									goon = true;
									break;
								}
							}
						}
					}
					player
						.chooseCard(
							"he",
							[1, player.countCards("he")],
							get.prompt2("oldhuisheng", trigger.source)
						)
						.set("ai", function (card) {
							if (_status.event.att) {
								return 10 - get.value(card);
							}
							if (_status.event.goon) {
								return 8 - get.value(card);
							}
							if (!ui.selected.cards.length) {
								return 7 - get.value(card);
							}
							return 0;
						})
						.set("goon", goon)
						.set("att", att);
					"step 1";
					if (result.bool) {
						player.logSkill("oldhuisheng", trigger.source);
						game.delay();
						event.num = result.cards.length;
						var goon = false;
						if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
							goon = true;
						}
						var forced = false;
						var str = "获得其中一张牌并防止伤害";
						if (trigger.source.countCards("he") < event.num) {
							forced = true;
						} else {
							str += "，或取消并弃置" + get.cnNumber(result.cards.length) + "张牌";
						}
						trigger.source
							.chooseButton([str, result.cards], forced)
							.set("ai", function (button) {
								if (_status.event.goon) {
									return get.value(button.link);
								}
								return get.value(button.link) - 8;
							})
							.set("goon", goon);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						var card = result.links[0];
						trigger.source.gain(card, player, "giveAuto", "bySelf");
						trigger.cancel();
					} else {
						trigger.source.chooseToDiscard(event.num, true, "he");
					}
				},
			},
			oldzishou: {
				audio: "zishou",
				audioname: ["re_liubiao"],
				trigger: { player: "phaseDrawBegin2" },
				check: function (event, player) {
					return (
						(player.countCards("h") <= 2 && player.getDamagedHp() >= 2) ||
						player.skipList.includes("phaseUse")
					);
				},
				filter: function (event, player) {
					return !event.numFixed && player.isDamaged();
				},
				content: function () {
					trigger.num += player.getDamagedHp();
					player.skip("phaseUse");
				},
				ai: {
					threaten: 1.5,
				},
			},
			oldgongji: {
				audio: "gongji",
				enable: ["chooseToUse", "chooseToRespond"],
				locked: false,
				filterCard: { type: "equip" },
				position: "hes",
				viewAs: {
					name: "sha",
					storage: { oldgongji: true },
				},
				viewAsFilter: function (player) {
					if (!player.countCards("hes", { type: "equip" })) return false;
				},
				prompt: "将一张装备牌当无距离限制的【杀】使用或打出",
				check: function (card) {
					var val = get.value(card);
					if (_status.event.name == "chooseToRespond") return 1 / Math.max(0.1, val);
					return 5 - val;
				},
				mod: {
					targetInRange: function (card) {
						if (card.storage && card.storage.oldgongji) return true;
					},
				},
				ai: {
					respondSha: true,
					skillTagFilter: function (player) {
						if (!player.countCards("hes", { type: "equip" })) return false;
					},
				},
			},
			oldjiefan: {
				audio: "jiefan",
				trigger: { player: "chooseToUseBegin" },
				filter: function (event, player) {
					return event.type == "dying" && _status.currentPhase !== player;
				},
				direct: true,
				clearTime: true,
				content: function () {
					const list = [event.name, trigger.dying];
					player
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, get.prompt2(...list))
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("complexTarget", true)
						.set("filterTarget", function (card, player, target) {
							if (
								target != _status.currentPhase &&
								!ui.selected.targets.includes(_status.currentPhase)
							)
								return false;
							return lib.filter.filterTarget.apply(this, arguments);
						})
						.set("logSkill", list)
						.set("oncard", function () {
							_status.event.player.addTempSkill("oldjiefan_recover");
						})
						.set("custom", {
							add: {},
							replace: {
								window: () => {
									ui.click.cancel();
								},
							},
						});
				},
				ai: {
					save: true,
					order: 3,
					result: { player: 1 },
				},
				subSkill: {
					recover: {
						// audio:'jiefan',
						trigger: { source: "damageBegin2" },
						filter: function (event, player) {
							return event.getParent(4).name == "oldjiefan";
						},
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							trigger.cancel();
							var evt = event.getParent("_save");
							var card = { name: "tao", isCard: true };
							if (evt && evt.dying && player.canUse(card, evt.dying)) {
								player.useCard(card, evt.dying, "oldjiefan_recover");
							}
						},
					},
				},
			},
			oldmingjian: {
				audio: "mingjian",
				trigger: { player: "phaseUseBefore" },
				filter: function (event, player) {
					return player.countCards("h");
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("oldmingjian"),
							"跳过出牌阶段并将所有手牌交给一名其他角色，你结束此回合，然后其于此回合后获得一个额外的出牌阶段",
							lib.filter.notMe
						)
						.set("ai", (target) => {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.hasSkillTag("nogain")) return 0.01 * att;
							if (player.countCards("h") == player.countCards("h", "du")) return -att;
							if (target.hasJudge("lebu")) att *= 1.25;
							if (get.attitude(player, target) > 3) {
								var basis = get.threaten(target) * att;
								if (
									player == get.zhu(player) &&
									player.hp <= 2 &&
									player.countCards("h", "shan") &&
									!game.hasPlayer(function (current) {
										return (
											get.attitude(current, player) > 3 &&
											current.countCards("h", "tao") > 0
										);
									})
								)
									return 0;
								if (target.countCards("h") + player.countCards("h") > target.hp + 2)
									return basis * 0.8;
								return basis;
							}
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("oldmingjian", target);
						player.give(player.getCards("h"), target);
						trigger.cancel();
					} else event.finish();
					"step 2";
					var evt = trigger.getParent("phase");
					if (evt) {
						game.log(player, "结束了回合");
						evt.finish();
					}
					var next = target.insertPhase();
					next._noTurnOver = true;
					next.phaseList = ["phaseUse"];
					//next.setContent(lib.skill.oldmingjian.phase);
				},
				phase: function () {
					"step 0";
					player.phaseUse();
					"step 1";
					game.broadcastAll(function () {
						if (ui.tempnowuxie) {
							ui.tempnowuxie.close();
							delete ui.tempnowuxie;
						}
					});
				},
			},
			oldshenxian: {
				audio: "shenxian",
				inherit: "shenxian",
			},
			old_guhuo: {
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				hiddenCard: function (player, name) {
					return lib.inpile.includes(name) && player.countCards("hs") > 0;
				},
				filter: function (event, player) {
					if (!player.countCards("hs")) return false;
					for (var i of lib.inpile) {
						var type = get.type(i);
						if (
							(type == "basic" || type == "trick") &&
							event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)
						)
							return true;
						if (i == "sha") {
							for (var j of lib.inpile_nature) {
								if (
									event.filterCard(
										get.autoViewAs({ name: i, nature: j }, "unsure"),
										player,
										event
									)
								)
									return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i of lib.inpile) {
							if (event.type != "phase")
								if (!event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event))
									continue;
							var type = get.type(i);
							if (type == "basic" || type == "trick") list.push([type, "", i]);
							if (i == "sha") {
								if (event.type != "phase")
									if (
										!event.filterCard(
											get.autoViewAs({ name: i, nature: j }, "unsure"),
											player,
											event
										)
									)
										continue;
								for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
							}
						}
						return ui.create.dialog("蛊惑", [list, "vcard"]);
					},
					check: function (button) {
						var player = _status.event.player;
						var order = Math.max(0, get.order(card) + 1);
						var enemyNum = game.countPlayer(function (current) {
							return (
								current != player &&
								(get.realAttitude || get.attitude)(current, player) < 0 &&
								current.hp > 0
							);
						});
						var card = { name: button.link[2], nature: button.link[3] };
						if (
							player.isDying() &&
							!player.hasCard(function (cardx) {
								if (get.suit(cardx) != "heart") return false;
								var mod2 = game.checkMod(cardx, player, "unchanged", "cardEnabled2", player);
								if (mod2 != "unchanged") return mod2;
								var mod = game.checkMod(
									cardx,
									player,
									player,
									"unchanged",
									"cardSavable",
									player
								);
								if (mod != "unchanged") return mod;
								var savable = get.info(cardx).savable;
								if (typeof savable == "function") savable = savable(card, player, player);
								return savable;
							}, "hs")
						) {
							if (
								!player.getStorage("old_guhuo_cheated").includes(card.name + card.nature) &&
								Math.random() < 0.4
							)
								return 1;
							return 0;
						}
						var val = _status.event.getParent().type == "phase" ? player.getUseValue(card) : 1;
						if (
							player.getStorage("old_guhuo_cheated").includes(card.name + card.nature) &&
							!player.hasCard(function (cardx) {
								if (card.name == cardx.name) {
									if (card.name != "sha") return true;
									return get.is.sameNature(card, cardx);
								}
								return false;
							}, "hs") &&
							Math.random() < 0.7
						)
							return 0;
						if (val <= 0) return 0;
						if (enemyNum) {
							if (
								!player.hasCard(function (cardx) {
									if (card.name == cardx.name) {
										if (card.name != "sha") return true;
										return get.is.sameNature(card, cardx);
									}
									return false;
								}, "hs")
							) {
								if (get.value(card, player, "raw") < 6)
									return Math.sqrt(val) * (0.25 + Math.random() / 1.5);
								if (enemyNum <= 2) return Math.sqrt(val) / 1.5 + order * 10;
								return 0;
							}
							return 3 * val + order * 10;
						}
						return val + order * 10;
					},
					backup: function (links, player) {
						return {
							filterCard: function (card, player, target) {
								var result = true;
								var suit = card.suit,
									number = card.number;
								card.suit = "none";
								card.number = null;
								var mod = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
								if (mod != "unchanged") result = mod;
								card.suit = suit;
								card.number = number;
								return result;
							},
							selectCard: 1,
							position: "hs",
							ignoreMod: true,
							aiUse: Math.random(),
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: "none",
								number: null,
							},
							ai1: function (card) {
								var player = _status.event.player;
								var enemyNum = game.countPlayer(function (current) {
									return (
										current != player &&
										(get.realAttitude || get.attitude)(current, player) < 0 &&
										current.hp > 0
									);
								});
								var cardx = lib.skill.old_guhuo_backup.viewAs;
								if (enemyNum) {
									if (
										(card.name == cardx.name &&
											(card.name != "sha" || get.is.sameNature(card, cardx))) ||
										player
											.getStorage("old_guhuo_cheated")
											.includes(card.name + card.nature)
									)
										return (get.suit(card) == "heart" ? 8 : 4) + Math.random() * 3;
									else if (lib.skill.old_guhuo_backup.aiUse < 0.5 && !player.isDying())
										return 0;
								}
								return get.value(cardx) - get.value(card);
							},
							precontent: function () {
								player.logSkill("old_guhuo");
								player.addTempSkill("old_guhuo_guess");
								var card = event.result.cards[0];
								event.result.card.suit = get.suit(card);
								event.result.card.number = get.number(card);
							},
						};
					},
					prompt: function (links, player) {
						return (
							"将一张手牌当做" +
							(links[0][3] ? get.translation(links[0][3]) : "") +
							"【" +
							get.translation(links[0][2]) +
							"】" +
							(_status.event.name == "chooseToRespond" ? "打出" : "使用")
						);
					},
				},
				ai: {
					save: true,
					respondSha: true,
					respondShan: true,
					fireAttack: true,
					skillTagFilter: function (player) {
						if (!player.countCards("hs")) return false;
					},
					threaten: 1.2,
					order: 10,
					result: { player: 1 },
				},
				subSkill: {
					cheated: {
						trigger: {
							player: "gainAfter",
							global: "loseAsyncAfter",
						},
						charlotte: true,
						forced: true,
						silent: true,
						popup: false,
						firstDo: true,
						onremove: true,
						filter: function (event, player) {
							if (event.getParent().name == "draw") return true;
							var cards = event.getg(player);
							if (!cards.length) return false;
							return game.hasPlayer((current) => {
								if (current == player) return false;
								var evt = event.getl(current);
								if (evt && evt.cards && evt.cards.length) return true;
								return false;
							});
						},
						content: function () {
							player.removeSkill("old_guhuo_cheated");
						},
					},
				},
			},
			old_guhuo_guess: {
				audio: "old_guhuo",
				trigger: {
					player: ["useCardBefore", "respondBefore"],
				},
				forced: true,
				silent: true,
				popup: false,
				firstDo: true,
				charlotte: true,
				sourceSkill: "old_guhuo",
				filter: function (event, player) {
					return event.skill && event.skill.indexOf("old_guhuo_") == 0;
				},
				content: function () {
					"step 0";
					event.fake = false;
					event.goon = true;
					event.betrayers = [];
					var card = trigger.cards[0];
					if (
						card.name != trigger.card.name ||
						(card.name == "sha" && !get.is.sameNature(trigger.card, card))
					)
						event.fake = true;
					if (event.fake) {
						player.addSkill("old_guhuo_cheated");
						player.markAuto("old_guhuo_cheated", [trigger.card.name + trigger.card.nature]);
					}
					player.popup(trigger.card.name, "metal");
					player.lose(card, ui.ordering).relatedEvent = trigger;
					trigger.throw = false;
					trigger.skill = "old_guhuo_backup";
					game.log(
						player,
						"声明",
						trigger.targets && trigger.targets.length ? "对" : "",
						trigger.targets || "",
						trigger.name == "useCard" ? "使用" : "打出",
						trigger.card
					);
					event.prompt =
						get.translation(player) +
						"声明" +
						(trigger.targets && trigger.targets.length
							? "对" + get.translation(trigger.targets)
							: "") +
						(trigger.name == "useCard" ? "使用" : "打出") +
						(get.translation(trigger.card.nature) || "") +
						get.translation(trigger.card.name) +
						"，是否质疑？";
					event.targets = game
						.filterPlayer((i) => i != player && i.hp > 0)
						.sortBySeat(_status.currentPhase);

					game.broadcastAll(
						function (card, player) {
							_status.old_guhuoNode = card.copy("thrown");
							if (lib.config.cardback_style != "default") {
								_status.old_guhuoNode.style.transitionProperty = "none";
								ui.refresh(_status.old_guhuoNode);
								_status.old_guhuoNode.classList.add("infohidden");
								ui.refresh(_status.old_guhuoNode);
								_status.old_guhuoNode.style.transitionProperty = "";
							} else {
								_status.old_guhuoNode.classList.add("infohidden");
							}
							_status.old_guhuoNode.style.transform =
								"perspective(600px) rotateY(180deg) translateX(0)";
							player.$throwordered2(_status.old_guhuoNode);
						},
						trigger.cards[0],
						player
					);
					event.onEnd01 = function () {
						_status.old_guhuoNode.removeEventListener(
							"webkitTransitionEnd",
							_status.event.onEnd01
						);
						setTimeout(function () {
							_status.old_guhuoNode.style.transition = "all ease-in 0.3s";
							_status.old_guhuoNode.style.transform = "perspective(600px) rotateY(270deg)";
							var onEnd = function () {
								_status.old_guhuoNode.classList.remove("infohidden");
								_status.old_guhuoNode.style.transition = "all 0s";
								ui.refresh(_status.old_guhuoNode);
								_status.old_guhuoNode.style.transform = "perspective(600px) rotateY(-90deg)";
								ui.refresh(_status.old_guhuoNode);
								_status.old_guhuoNode.style.transition = "";
								ui.refresh(_status.old_guhuoNode);
								_status.old_guhuoNode.style.transform = "";
								_status.old_guhuoNode.removeEventListener("webkitTransitionEnd", onEnd);
							};
							_status.old_guhuoNode.listenTransition(onEnd);
						}, 300);
					};
					if (!event.targets.length) event.goto(3);
					"step 1";
					event.target = event.targets.shift();
					event.target
						.chooseButton([event.prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true)
						.set("ai", function (button) {
							var player = _status.event.player;
							var evt = _status.event.getParent("old_guhuo_guess"),
								evtx = evt.getTrigger();
							if (!evt) return Math.random();
							var card = { name: evtx.card.name, nature: evtx.card.nature, isCard: true };
							var ally = button.link[2] == "reguhuo_ally";
							if (ally && (player.hp <= 1 || get.attitude(player, evt.player) >= 0)) return 1.1;
							if (!ally && get.effect(player, { name: "losehp" }, player, player) >= 0)
								return 10;
							if (!ally && get.attitude(player, evt.player) < 0) {
								if (evtx.name == "useCard") {
									var eff = 0;
									var targetsx = evtx.targets || [];
									for (var target of targetsx) {
										var isMe = target == evt.player;
										eff +=
											get.effect(target, card, evt.player, player) / (isMe ? 1.35 : 1);
									}
									eff /= 1.5 * targetsx.length || 1;
									if (eff > 0) return 0;
									if (eff < -7)
										return (
											(Math.random() + Math.pow(-(eff + 7) / 8, 2)) /
												Math.sqrt(evt.betrayers.length + 1) +
											(player.hp - 3) * 0.05 +
											Math.max(0, 4 - evt.player.hp) * 0.05 -
											(player.hp == 1 && !get.tag(card, "damage") ? 0.2 : 0)
										);
									return (
										Math.pow(
											(get.value(card, evt.player, "raw") - 4) / (eff == 0 ? 3.1 : 10),
											2
										) /
											Math.sqrt(evt.betrayers.length || 1) +
										(player.hp - 3) * 0.05 +
										Math.max(0, 4 - evt.player.hp) * 0.05
									);
								}
								if (
									evt.player
										.getStorage("old_guhuo_cheated")
										.includes(card.name + card.nature)
								)
									return Math.random() + 0.3;
							}
							return Math.random();
						});
					"step 2";
					if (result.links[0][2] == "reguhuo_betray") {
						target.addExpose(0.2);
						game.log(target, "#y质疑");
						target.popup("质疑！", "fire");
						event.betrayers.push(target);
					} else {
						game.log(target, "#g不质疑");
						target.popup("不质疑", "wood");
					}
					if (targets.length) event.goto(1);
					"step 3";
					game.delayx();
					game.broadcastAll(function (onEnd) {
						_status.event.onEnd01 = onEnd;
						if (_status.old_guhuoNode) _status.old_guhuoNode.listenTransition(onEnd, 300);
					}, event.onEnd01);
					"step 4";
					game.delay(2);
					"step 5";
					if (!event.betrayers.length) {
						event.goto(7);
					}
					"step 6";
					if (event.fake) {
						for (var target of event.betrayers) {
							target.popup("质疑正确", "wood");
						}
						event.goon = false;
					} else {
						for (var target of event.betrayers) {
							target.popup("质疑错误", "fire");
							target.loseHp();
						}
						if (get.suit(trigger.cards[0], player) != "heart") {
							event.goon = false;
						}
					}
					"step 7";
					if (!event.goon) {
						game.log(player, "声明的", trigger.card, "作废了");
						trigger.cancel();
						trigger.getParent().goto(0);
						trigger.line = false;
					}
					"step 8";
					game.delay();
					"step 9";
					if (!event.goon) {
						if (event.fake) game.asyncDraw(event.betrayers);
						game.broadcastAll(ui.clear);
					}
				},
			},
			old_zuilun: {
				audio: "xinfu_zuilun",
				subSkill: {
					e: {},
					h: {},
				},
				enable: "phaseUse",
				usable: 2,
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var pos = "he";
					if (player.hasSkill("old_zuilun_h")) pos = "e";
					if (player.hasSkill("old_zuilun_e")) pos = "h";
					return target.countGainableCards(player, pos) > 0;
				},
				content: function () {
					"step 0";
					var pos = "he";
					if (player.hasSkill("old_zuilun_h")) pos = "e";
					if (player.hasSkill("old_zuilun_e")) pos = "h";
					player.gainPlayerCard(target, pos, true);
					"step 1";
					if (result.bool && result.cards && result.cards.length) {
						target.draw();
						var pos = result.cards[0].original;
						if (pos == "h" || pos == "e")
							player.addTempSkill("old_zuilun_" + pos, "phaseUseAfter");
					}
				},
				ai: {
					order: 7,
					result: {
						target: -1,
					},
				},
			},
			old_fuyin: {
				mod: {
					targetEnabled: function (card, player, target) {
						if (
							(card.name == "juedou" || card.name == "sha" || card.name == "huogong") &&
							player != target &&
							player.countCards("h") >= target.countCards("h") &&
							target.hasEmptySlot(2)
						)
							return false;
					},
				},
			},
			old_jijun: {
				marktext: "方",
				audio: "xinfu_jijun",
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				enable: "phaseUse",
				filterCard: true,
				selectCard: [1, Infinity],
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				check: function (card) {
					var player = _status.event.player;
					if (36 - player.getExpansions("old_jijun").length <= player.countCards("h")) return 1;
					return 5 - get.value(card);
				},
				discard: false,
				lose: false,
				content: function () {
					player.addToExpansion(cards, player, "give").gaintag.add("old_jijun");
				},
				ai: {
					order: 1,
					result: {
						player: 1
					},
					combo: "old_fangtong"
				},
			},
			old_fangtong: {
				trigger: {
					player: "phaseJieshuBegin",
				},
				audio: "xinfu_fangtong",
				forced: true,
				skillAnimation: true,
				animationColor: "metal",
				filter: function (event, player) {
					return player.getExpansions("old_jijun").length > 35;
				},
				content: function () {
					var winners = player.getFriends();
					game.over(player == game.me || winners.includes(game.me));
				},
				ai:{
					combo: "oldjijun"
				},
			},
			oldanxu: {
				enable: "phaseUse",
				usable: 1,
				multitarget: true,
				audio: 2,
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var num = target.countCards("h");
					if (ui.selected.targets.length) {
						return num < ui.selected.targets[0].countCards("h");
					}
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (num > players[i].countCards("h")) return true;
					}
					return false;
				},
				selectTarget: 2,
				content: function () {
					"step 0";
					var gainner, giver;
					if (targets[0].countCards("h") < targets[1].countCards("h")) {
						gainner = targets[0];
						giver = targets[1];
					} else {
						gainner = targets[1];
						giver = targets[0];
					}
					gainner.gainPlayerCard(giver, "h", true).set("visible", true);
					"step 1";
					if (result.bool && result.links.length && get.suit(result.links[0]) != "spade") {
						player.draw();
					}
				},
				ai: {
					order: 10.5,
					threaten: 2,
					result: {
						target: function (player, target) {
							var num = target.countCards("h");
							var att = get.attitude(player, target);
							if (ui.selected.targets.length == 0) {
								if (att > 0) return -1;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									var num2 = players[i].countCards("h");
									var att2 = get.attitude(player, players[i]);
									if (att2 >= 0 && num2 < num) return -1;
								}
								return 0;
							} else {
								return 1;
							}
						},
						player: 0.1,
					},
				},
			},
			oldfaen: {
				audio: "faen",
				trigger: { global: ["turnOverAfter", "linkAfter"] },
				filter: function (event, player) {
					if (event.name == "link") return event.player.isLinked();
					return true;
				},
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				logTarget: "player",
				content: function () {
					trigger.player.draw();
				},
				ai: {
					expose: 0.2,
				},
				global: "faen_global",
			},
			oldxuanfeng: {
				audio: "xuanfeng",
				trigger: {
					player: ["loseAfter"],
					global: [
						"equipAfter",
						"addJudgeAfter",
						"gainAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				direct: true,
				filter: function (event, player) {
					var evt = event.getl(player);
					return evt && evt.es && evt.es.length > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("oldxuanfeng"), function (card, player, target) {
							if (target == player) return false;
							return get.distance(player, target) <= 1 || player.canUse("sha", target, false);
						})
						.set("ai", function (target) {
							if (get.distance(player, target) <= 1) {
								return get.damageEffect(target, player, player) * 2;
							} else {
								return get.effect(target, { name: "sha" }, player, player);
							}
						});
					"step 1";
					if (result.bool) {
						player.logSkill("oldxuanfeng", result.targets);
						var target = result.targets[0];
						var distance = get.distance(player, target);
						if (distance <= 1 && player.canUse("sha", target, false)) {
							player.chooseControl("出杀", "造成伤害").set("ai", function () {
								return "造成伤害";
							});
							event.target = target;
						} else if (distance <= 1) {
							target.damage();
							event.finish();
						} else {
							player.useCard({ name: "sha", isCard: true }, target, false).animate = false;
							game.delay();
							event.finish();
						}
					} else {
						event.finish();
					}
					"step 2";
					var target = event.target;
					if (result.control == "出杀") {
						player.useCard({ name: "sha", isCard: true }, target, false).animate = false;
						game.delay();
					} else {
						target.damage();
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "equip") return [1, 3];
						},
					},
					reverseEquip: true,
					noe: true,
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			old_zhangxingcai: "旧张星彩",
			old_zhangxingcai_prefix: "旧",
			old_xusheng: "旧徐盛",
			old_xusheng_prefix: "旧",
			old_lingtong: "旧凌统",
			old_lingtong_prefix: "旧",
			old_zhuran: "旧朱然",
			old_zhuran_prefix: "旧",
			old_caoxiu: "旧曹休",
			old_caoxiu_prefix: "旧",
			old_caozhen: "旧曹真",
			old_caozhen_prefix: "旧",
			old_maliang: "旧马良",
			old_maliang_prefix: "旧",
			old_chenqun: "旧陈群",
			old_chenqun_prefix: "旧",
			old_zhuhuan: "旧朱桓",
			old_zhuhuan_prefix: "旧",
			old_zhuzhi: "旧朱治",
			old_zhuzhi_prefix: "旧",
			old_zhugezhan: "旧诸葛瞻",
			old_zhugezhan_prefix: "旧",
			yuji: "旧于吉",
			yuji_prefix: "旧",
			old_zhangfei: "新杀张飞",
			old_zhangfei_prefix: "新杀",
			old_huatuo: "OL华佗",
			old_huatuo_prefix: "OL",
			old_guanyu: "旧关羽",
			old_guanyu_prefix: "旧",
			ol_liaohua: "OL廖化",
			ol_liaohua_prefix: "OL",
			ol_zhuran: "OL朱然",
			ol_zhuran_prefix: "OL",
			ol_manchong: "OL满宠",
			ol_manchong_prefix: "OL",
			old_fuhuanghou: "旧伏寿",
			old_fuhuanghou_prefix: "旧",
			old_caochong: "旧曹冲",
			old_caochong_prefix: "旧",
			old_guanqiujian: "旧毌丘俭",
			old_guanqiujian_prefix: "旧",
			old_wangyun: "旧王允",
			old_wangyun_prefix: "旧",
			old_zhaoyun: "新杀赵云",
			old_zhaoyun_prefix: "新杀",
			ol_huaxiong: "旧华雄",
			ol_huaxiong_prefix: "旧",
			old_xiaoqiao: "旧小乔",
			old_xiaoqiao_prefix: "旧",
			old_wanglang: "旧王朗",
			old_wanglang_prefix: "旧",
			old_wangyi: "旧王异",
			old_wangyi_prefix: "旧",
			xin_yujin: "节钺于禁",
			xin_yujin_prefix: "节钺",
			re_yujin: "毅重于禁",
			re_yujin_prefix: "毅重",

			old_guhuo: "蛊惑",
			old_guhuo_info:
				"你可以扣置一张手牌当做一张基本牌或普通锦囊牌使用或打出，体力值不为0的其他角色依次选择是否质疑。然后，若有质疑的角色，你展示此牌：若为假，此牌作废，这些角色摸一张牌；若为真，这些角色失去1点体力，且若此牌不为♥，此牌作废。",
			old_guhuo_guess: "蛊惑",
			old_jijun: "集军",
			old_jijun_info: "出牌阶段，你可以将任意张手牌置于武将牌上，称为“方”。",
			old_fangtong: "方统",
			old_fangtong_info: "锁定技。结束阶段，若你的“方”数目不小于36，则以你的阵营胜利结束本局游戏。",
			old_zuilun: "罪论",
			old_zuilun_info:
				"出牌阶段，你可以获得一名其他角色的一张牌（手牌、装备区各一次），然后该角色摸一张牌。",
			old_fuyin: "父荫",
			old_fuyin_info:
				"锁定技。若你的装备区里没有防具牌，你不能成为手牌数不小于你的其他角色使用【杀】、【决斗】或【火攻】的目标。",
			oldanxu: "安恤",
			oldanxu_info:
				"出牌阶段限一次。你可以选择手牌数不相等的两名其他角色，其中手牌少的角色获得手牌多的角色的一张手牌并展示之，然后若此牌不为黑桃，你摸一张牌。",
			oldfaen: "法恩",
			oldfaen_info: "当一名角色翻面或横置后，你可以令其摸一张牌。",
			oldxuanfeng: "旋风",
			oldxuanfeng_info:
				"当你失去装备区里的牌后，你可以选择一项：1.视为对一名其他角色使用一张【杀】；2.对一名距离为1的角色造成1点伤害。",
			ol_yuanshu: "旧袁术",
			ol_yuanshu_prefix: "旧",
			fazheng: "旧法正",
			fazheng_prefix: "旧",
			junk_simayi: "旧晋司马懿",
			junk_simayi_prefix: "旧晋",
			madai: "旧马岱",
			madai_prefix: "旧",
			old_yangzhi: "旧杨芷",
			old_yangzhi_prefix: "旧",
			old_yangyan: "旧杨艳",
			old_yangyan_prefix: "旧",
			old_caorui: "旧曹叡",
			old_caorui_prefix: "旧",
			oldmingjian: "明鉴",
			oldmingjian_info:
				"出牌阶段开始前，你可以跳过此阶段并将所有手牌交给一名其他角色。若如此做，你结束当前回合，然后其获得一个额外的回合（仅包含出牌阶段）。",
			old_handang: "旧韩当",
			old_handang_prefix: "旧",
			oldgongji: "弓骑",
			oldgongji_info: "你可以将一张装备牌当做无距离限制的【杀】使用或打出。",
			oldjiefan: "解烦",
			oldjiefan_info:
				"当一名角色A于你的回合外处于濒死状态时，你可以对当前回合角色使用一张【杀】。当此【杀】造成伤害时，你防止此伤害，视为对A使用一张【桃】。",
			old_gaoshun: "旧高顺",
			old_gaoshun_prefix: "旧",
			old_liubiao: "旧刘表",
			old_liubiao_prefix: "旧",
			oldre_liubiao: "RE刘表",
			oldre_liubiao_prefix: "RE",
			oldzishou: "自守",
			oldzishou_info:
				"摸牌阶段，若你已受伤，你可令额定摸牌数+X（X为你已损失的体力值），然后跳过下一个出牌阶段。",
			old_huanghao: "旧黄皓",
			old_huanghao_prefix: "旧",
			oldqinqing: "寝情",
			oldqinqing_info:
				"结束阶段，你可以选择一名攻击范围内含有主公的其他角色，然后你弃置该角色的一张牌（无牌则不弃），并令其摸一张牌。若该角色的手牌数大于主公，你摸一张牌。",
			oldhuisheng: "贿生",
			oldhuisheng_info:
				"每名角色限一次。当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张并防止此伤害；2.弃置等量的牌。",
			old_dingfeng: "旧丁奉",
			old_dingfeng_prefix: "旧",
			junk_sunquan: "旧神孙权",
			junk_sunquan_prefix: "旧神",
			new_caoren: "旧曹仁",
			new_caoren_prefix: "旧",
			old_liyan: "旧李严",
			old_liyan_prefix: "旧",
			old_chendao: "旧陈到",
			old_chendao_prefix: "旧",
			old_caocao: "旧神曹操",
			old_caocao_prefix: "旧神",
			junkguixin: "归心",
			junkguixin_info:
				"回合结束时，你可以选择一项：①获得剩余武将牌堆的所有主公技的其中一个技能；②更改一名其他角色的势力。",
			old_caochun: "旧曹纯",
			old_caochun_prefix: "旧",
			old_guanyinping: "旧关银屏",
			old_guanyinping_prefix: "旧",
			old_shen_zhaoyun: "旧神赵云",
			old_shen_zhaoyun_prefix: "旧神",
			oldjuejing: "绝境",
			oldjuejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
			oldlonghun: "龙魂",
			oldlonghun_info:
				"你可以将花色相同的Y张牌按下列规则使用或打出：♥当【桃】，♦当火【杀】，♣当【闪】，♠当普【无懈可击】（Y为你的体力值且至少为1）。",
			panfeng: "旧潘凤",
			panfeng_prefix: "旧",
			old_shixie: "旧士燮",
			old_shixie_prefix: "旧",
			
			old_shen_huangzhong: "旧神黄忠",
			old_shen_huangzhong_prefix: "旧神",
			"old_1！5！": "毅武",
			"old_1！5！_info": "①若你的装备区里有武器牌，则你使用【杀】不可被响应。②当你使用【杀】结算完毕后，若你未因此【杀】造成过伤害，则你可以摸两张牌。③当你对一名其他角色造成伤害后，你可以获得1枚“赤”标记，然后从其随机X个未被击伤的部位中选择一个击伤（X为你的“赤”标记数）。",
			"old_1！5！_place1": "头部",
			"old_1！5！_place1_info": "令其失去所有体力。",
			"old_1！5！_place2": "肩部",
			"old_1！5！_place2_info": "令其弃置装备区里的武器牌和坐骑牌。",
			"old_1！5！_place3": "手部",
			"old_1！5！_place3_info": "令其手牌上限视为原来的一半（向下取整）直到其下个回合结束。",
			"old_1！5！_place4": "上肢",
			"old_1！5！_place4_info": "令其随机弃置两张手牌。",
			"old_1！5！_place5": "下肢",
			"old_1！5！_place5_info": "令其体力值大于1时受到的伤害+1直到其下个回合结束。",
			"old_1！5！_place6": "胸部",
			"old_1！5！_place6_info": "令其下个回合不能使用伤害牌。",
			"old_1！5！_place7": "腹部",
			"old_1！5！_place7_info": "令其不能使用【闪】和【桃】直到其下个回合结束。",
			old_chiren: "赤刃",
			old_chiren_info: "锁定技，结束阶段，若你的“赤”标记数大于等于你的已损失体力值，则你将体力值回复至4点，然后移去所有“赤”标记并摸等量的牌。",
			junk_zhangjiao: "OL神张角",
			junk_zhangjiao_prefix: "OL神",

			old_standard: "标准包",
			old_shenhua_feng: "神话再临·风",
			old_shenhua_huo: "神话再临·火",
			old_shenhua_lin: "神话再临·林",
			old_shenhua_lei: "神话再临·雷",
			old_yijiang1: "一将成名2011",
			old_yijiang2: "一将成名2012",
			old_yijiang3: "一将成名2013",
			old_yijiang4: "一将成名2014",
			old_yijiang5: "一将成名2015",
			old_yijiang6: "原创设计2016",
			old_refresh: "界限突破",
			old_extra: "神将",
			old_sp: "SP",
			old_yingbian: "文德武备",
			old_mobile: "移动版",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
