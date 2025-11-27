import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "mdtx",
		connect: true,
		connectBanned: [
			
		],
		character: {
			dc_sb_chenlin: ["male", "qun", 3, ["dcsbyaozuo", "dcsbzhuanwen"]],
			dc_sb_jushou: ["male", "qun", 3, ["dcsbzuojun", "dcsbmuwang"]],
			dc_sb_chengyu: ["male", "wei", 3, ["dcshizha", "dcgaojian"]],
			yj_sb_guojia: ["male", "wei", 3, ["xianmou", "lunshi"]],
			dc_sb_zhangxiu: ["male", "qun", 4, ["dcsbfuxi", "dcsbhaoyi"]],
			dc_sb_hucheer: ["male", "qun", 4, ["dcsbkongwu"]],
			dc_sb_guanping: ["male", "shu", 4, ["dcsbwuwei"]],
			dc_sb_caoang: ["male", "wei", 4, ["dcsbfengmin", "dcsbzhiwang"]],
			dc_sb_dianwei: ["male", "wei", "4/5", ["dcsbkuangzhan", "dcsbkangyong"]],
			dc_caoshuang: ["male", "wei", 4, ["dcjianzhuan", "dcfanshi"]],
			dc_simashi: ["male", "wei", 3, ["dcsanshi", "dczhenrao", "dcchenlve"], ["border:jin"]],
			dc_wangling: ["male", "wei", 4, ["dcjichou", "dcmouli"], ["clan:太原王氏"]],
			dc_jiangji: ["male", "wei", 3, ["dcshiju", "dcyingshi"]],
			dc_sb_zhugejin: ["male", "wu", 3, ["dcsbtaozhou", "dcsbhoude"]],
			dc_sb_jiaxu: ["male", "qun", 3, ["dcsbsushen", "dcsbfumou"]],
			dc_sb_simayi: ["male", "wei", 3, ["dcsbquanmou", "dcsbpingliao"]],
			dc_sb_zhouyu: ["male", "wu", 4, ["dcsbronghuo", "dcsbyingmou"]],
			dc_sb_lusu: ["male", "wu", 3, ["dcsbmingshi", "dcsbmengmou"]],
		},
		characterSort: {
			mdtx: {
				mdtx_mouding: ["dc_sb_jiaxu", "dc_sb_lusu", "dc_sb_zhouyu", "dc_sb_simayi", "yj_sb_guojia"],
				mdtx_zhonghu: ["dc_jiangji", "dc_wangling", "dc_simashi", "dc_caoshuang"],
				mdtx_zijing: ["dc_sb_zhugejin", "dc_sb_guanping"],
				mdtx_dushi: ["dc_sb_caoang", "dc_sb_zhangxiu", "dc_sb_dianwei", "dc_sb_hucheer"],
				mdtx_zhoulang: ["dc_sb_chengyu"],
				mdtx_qizuo: ["dc_sb_jushou", "dc_sb_chenlin"],
				// mdtx_wangzuo: [],
				// mdtx_youlin: [],
				// mdtx_boyan: [],
				
				// mdtx_waitforsort: [],
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
			// 部分武将代码位于xianding.js
			
			//谋陈琳
			dcsbyaozuo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				selectTarget: -1,
				multiline: true,
				multitarget: true,
				chooseCard(boss, current) {
					const next = current.chooseCard("he");
					next.set("prompt", "是否交给" + get.translation(boss) + "一张牌？");
					next.set("_global_waiting", true);
					next.set("ai", card => {
						if (get.event("att") > 0) return 6 - get.value(card);
						return 1 - get.value(card);
					});
					next.set("att", get.attitude(current, boss));
					return next;
				},
				async content(event, trigger, player) {
					const targets = event.targets;
					let humans = targets.filter(current => current === game.me || current.isOnline());
					let locals = targets.slice(0).randomSort();
					locals.removeArray(humans);
					const eventId = get.id();
					const send = (boss, current, eventId) => {
						lib.skill.dcsbyaozuo.chooseCard(boss, current, eventId);
						game.resume();
					};
					event._global_waiting = true;
					let time = 10000;
					let giver = [];
					if (lib.configOL && lib.configOL.choose_timeout) time = parseInt(lib.configOL.choose_timeout) * 1000;
					targets.forEach(current => current.showTimer(time));
					if (humans.length > 0) {
						const solve = (result, chooser) => {
							if (result && result.bool) giver.add([chooser, result.cards]);
						};
						await Promise.all(
							humans.map(current => {
								return new Promise((resolve, reject) => {
									if (current.isOnline()) {
										current.send(send, player, current);
										current.wait((result, player) => {
											solve(result, player);
											resolve(void 0);
										});
									} else if (current == game.me) {
										const next = lib.skill.dcsbyaozuo.chooseCard(player, current);
										const solver = (result, player) => {
											solve(result, player);
											resolve(void 0);
										};
										if (_status.connectMode) {
											game.me.wait(solver);
										}
										return next.forResult().then(result => {
											if (_status.connectMode) {
												game.me.unwait(result, current);
											} else {
												solver(result, current);
											}
										});
									}
								});
							})
						);
					}
					if (locals.length > 0) {
						for (const current of locals) {
							const result = await lib.skill.dcsbyaozuo.chooseCard(player, current).forResult();
							if (result && result.bool) giver.add([current, result.cards]);
						}
					}
					delete event._global_waiting;
					for (const i of targets) {
						i.hideTimer();
						if (giver.some(key => i == key[0])) i.popup("交给", "wood");
						else {
							i.popup("拒绝", "fire");
							player.addTempSkill("dcsbyaozuo_effect");
							player.markAuto("dcsbyaozuo_effect", [i]);
						}
					}
					// 临时修改（by 棘手怀念摧毁）
					await game.asyncDelay();
					// await game.delay();
					if (!giver.length) return;
					const first = giver[0][0],
						cards = [];
					for (const key of giver) {
						key[0].$giveAuto(key[1], player, false);
						cards.addArray(key[1]);
						game.log(key[0], "交给了", player, "一张牌");
					}
					await player.gain(cards);
					if (first && first.isIn()) {
						game.log(first, "第一个写出了文章");
						// 临时修改（by 棘手怀念摧毁）
						await game.asyncDelay();
						// await game.delay();
						if (!game.hasPlayer(current => ![first, player].includes(current))) return;
						const result = await first
							.chooseTarget("令" + get.translation(player) + "对一名其他角色发动〖撰文〗", true, function (card, player, target) {
								return !get.event("targets").includes(target);
							})
							.set("targets", [first, player])
							.set("ai", target => {
								const player = get.player(),
									hs = target.countCards("h");
								if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
								return hs;
							})
							.forResult();
						if (result.bool) {
							const targets = result.targets;
							first.line(targets, "green");
							await player.useSkill("dcsbzhuanwen", null, targets);
						}
					}
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
				subSkill: {
					effect: {
						audio: "dcsbyaozuo",
						onremove: true,
						charlotte: true,
						mark: true,
						intro: {
							content: "本回合下次对$造成的伤害+1",
						},
						trigger: {
							source: "damageBegin1",
						},
						filter(event, player) {
							return player.getStorage("dcsbyaozuo_effect").includes(event.player);
						},
						logTarget: "player",
						forced: true,
						async content(event, trigger, player) {
							trigger.num++;
							player.unmarkAuto(event.name, [trigger.player]);
						},
					},
				},
			},
			dcsbzhuanwen: {
				audio: 2,
				trigger: {
					player: "phaseJieshuBegin",
				},
				filter(event, player) {
					return game.hasPlayer(current => current != player && current.countCards("h"));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), function (card, player, target) {
							return target != player && target.countCards("h");
						})
						.set("ai", target => {
							const player = get.player(),
								hs = target.countCards("h");
							if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
							return hs;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					if (!target.countCards("h")) {
						game.log(target, "没有手牌");
						return;
					}
					let cards = game.cardsGotoOrdering(get.cards(Math.min(5, target.countCards("h")))).cards;
					await player.showCards(cards, get.translation(player) + "发动了〖撰文〗");
					let damages = cards.filter(card => get.tag(card, "damage") && player.canUse(card, target, false)),
						nodamages = cards.filter(card => !get.tag(card, "damage"));
					const list = [`依次对${get.translation(target)}使用${damages.length ? get.translation(damages) : "空气"}`, `令${get.translation(target)}获得${nodamages.length ? get.translation(nodamages) : "空气"}`];
					const result = await player
						.chooseControl("使用伤害牌", "获得非伤害牌")
						.set("choiceList", list)
						.set("prompt", "撰文：请选择一项")
						.set(
							"effect",
							(function () {
								let eff = 0;
								for (let card of damages) eff += get.effect(target, card, player, player);
								for (let card of nodamages) eff -= get.value(card, target) * get.attitude(player, target);
								return eff;
							})()
						)
						.set("ai", () => {
							if (get.event("effect") > 0) return "使用伤害牌";
							return "获得非伤害牌";
						})
						.forResult();
					if (result.control == "使用伤害牌") {
						while (damages.length) {
							let card;
							if (damages.length == 1) card = damages[0];
							else {
								const result2 = await player
									.chooseButton([`选择要对${get.translation(target)}使用的牌`, damages], true)
									.set("ai", button => {
										const { player, target } = get.event();
										return get.effect(target, button.link, player, player);
									})
									.set("target", target)
									.forResult();
								card = result2.links[0];
							}
							if (player.canUse(card, target, false)) await player.useCard(card, target, false);
							cards.remove(card);
							damages = damages.filter(cardx => card != cardx && player.canUse(cardx, target, false));
						}
					} else {
						cards.removeArray(nodamages);
						await target.gain(nodamages, "gain2");
					}
					// 临时修改（by 棘手怀念摧毁）
					if(cards.length) await game.cardsGotoPile(cards.reverse(), "insert");
				},
			},
			//这是俺拾嘞
			dcsbkongwu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				selectCard() {
					const player = get.player();
					return [1, player.maxHp];
				},
				position: "he",
				zhuanhuanji: true,
				marktext: "☯",
				mark: true,
				intro: {
					content: function (storage, player) {
						return "出牌阶段限一次，你可以弃置至多体力上限张牌并选择一名其他角色，" + (storage ? "视为对其使用等量张【杀】" : "弃置其等量张牌。") + "若此阶段结束时其手牌数和体力值均不大于你，其下回合摸牌阶段少摸一张牌且装备技能失效。";
					},
				},
				filterTarget: lib.filter.notMe,
				async content(event, trigger, player) {
					const target = event.target;
					player.changeZhuanhuanji(event.name);
					if (player.storage.dcsbkongwu) {
						const num = Math.min(event.cards.length, target.countCards("he"));
						if (num > 0) await player.discardPlayerCard("he", target, true, num);
					}
					else {
						let used = 0,
							card = { name: "sha", isCard: true };
						while (used < event.cards.length && target.isIn() && player.canUse(card, target, false)) {
							used++;
							await player.useCard(card, target, false);
						}
					}
					player.when("phaseUseEnd").then(() => {
						if (target.isIn() && target.hp <= player.hp && target.countCards("h") <= player.countCards("h")) {
							player.line(target, "green");
							target.addTempSkill("dcsbkongwu_effect", { player: "phaseEnd" });
						}
					}).vars({ target: target });
				},
				//这里需要写ai，但是地方太小我写不下
				check(card) {
					return 4 - get.value(card);
				},
				ai: {
					order: 5,
					result: {
						target: -1,
					},
				},
				getSkills(player) {
					return player
						.getCards("e")
						.reduce((list, card) => {
							const info = get.info(card);
							if (info && info.skills) return list.addArray(info.skills);
							return list;
						}, []);
				},
				subSkill: {
					effect: {
						trigger: {
							player: ["phaseDrawBegin", "phaseBegin", "equipAfter"],
						},
						direct: true,
						forced: true,
						charlotte: true,
						filter(event, player) {
							if (event.name == "phaseDraw") return !event.numFixed;
							return true;
						},
						content() {
							if (trigger.name == "phaseDraw") {
								trigger.num--;
								player.logSkill(event.name);
							}
							else player.disableSkill(event.name, lib.skill.dcsbkongwu.getSkills(player));
						},
						onremove(player, skill) {
							player.enableSkill(skill);
						},
						mark: true,
						marktext: "※",
						intro: {
							content: "摸牌阶段少摸一张牌，装备牌失效",
						},
						mod: {
							attackRange(player, num) {
								if (player != _status.currentPhase) return;
								return num + 1 - player.getEquipRange();
							},
							globalFrom(from, to, distance) {
								if (from != _status.currentPhase) return;
								let num = 0;
								// 临时修改（by 棘手怀念摧毁）
								for (let i of from.getCards("e")) {
								// for (let i of from.getVCards("e")) {
									const info = get.info(i).distance;
									if (!info) continue;
									if (info.globalFrom) num += info.globalFrom;
								}
								return distance - num;
							},
							globalTo(from, to, distance) {
								if (to != _status.currentPhase) return;
								let num = 0;
								// 临时修改（by 棘手怀念摧毁）
								for (let i of to.getCards("e")) {
								// for (let i of to.getVCards("e")) {
									const info = get.info(i).distance;
									if (!info) continue;
									if (info.globalTo) num += info.globalTo;
									if (info.attackTo) num += info.attackTo;
								}
								return distance - num;
							},
						},
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			dc_sb_hucheer: "新杀谋胡车儿",
			dc_sb_hucheer_prefix: "新杀谋",
			dcsbkongwu: "孔武",
			dcsbkongwu_info: "转换技，出牌阶段限一次，你可以弃置至多体力上限张牌，选择一名其他角色：阴，弃置其至多等量张牌；阳，视为对其使用等量张【杀】。此阶段结束时，若其手牌数和体力值均不大于你，其下回合摸牌阶段摸牌数-1且装备区里的所有牌失效。",
			dc_sb_chenlin: "新杀谋陈琳",
			dc_sb_chenlin_prefix: "新杀谋",
			dcsbyaozuo: "邀作",
			dcsbyaozuo_info: "出牌阶段限一次，你令所有其他角色同时选择是否交给你一张牌，未交给你牌的角色，本回合你对其下次造成伤害+1；然后你令最快交给你牌的角色选择另一名其他角色，你对该角色发动一次〖撰文〗。",
			dcsbzhuanwen: "撰文",
			dcsbzhuanwen_info: "结束阶段，你可选择一名其他角色，展示牌堆顶X张牌并选择一项：1.对其使用其中的伤害牌；2.令其获得其中的非伤害牌。然后将剩余牌置于牌堆顶（X为其手牌数且至多为5）。",

			mdtx_mouding: "谋定天下",
			mdtx_zhonghu: "冢虎狼顾",
			mdtx_zijing: "子敬邀刀",
			mdtx_dushi: "毒士鸩计",
			mdtx_zhoulang: "周郎将计",
			mdtx_qizuo: "奇佐论胜",
			mdtx_wangzuo: "王佐倡义",
			mdtx_youlin: "幼麟绝战",
			mdtx_boyan: "伯言绽火",
			
			mdtx_waitforsort: "等待分包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
