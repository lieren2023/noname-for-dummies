import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "shengxiao",
		connect: true,
		connectBanned: [
			
		],
		character: {
			// 武将顺序按自定义列表排（棘手懒人包）
			ol_zishu: [
				"male",
				"qun",
				3,
				["olzishu"],
			],
			ol_chouniu: [
				"male",
				"qun",
				"1/5",
				["olchouniu"],
			],
			ol_yinhu: [
				"male",
				"qun",
				4,
				["olyinhu"],
			],
			ol_maotu: [
				"female",
				"qun",
				3,
				["olmaotu"],
			],
			ol_chenlong: [
				"male",
				"qun",
				4,
				["olchenlong"],
			],
			ol_sishe: [
				"female",
				"qun",
				3,
				["olsishe"],
			],
			ol_wuma: [
				"male",
				"qun",
				4,
				["olwuma"],
			],
			ol_weiyang: [
				"female",
				"qun",
				3,
				["olweiyang"],
			],
			ol_shenhou: [
				"male",
				"qun",
				3,
				["olshenhou"],
			],
			ol_youji: [
				"male",
				"qun",
				3,
				["olyouji"],
			],
			ol_xugou: [
				"male",
				"qun",
				4,
				["olxugou"],
			],
			ol_haizhu: [
				"male",
				"qun",
				5,
				["olhaizhu"],
			],
			vtb_xiaosha: ["female", "qun", 4, ["vtbguisha", "vtbshuli"]],
			vtb_xiaoshan: ["female", "qun", 4, ["vtbshanwu", "vtbxianli"]],
			vtb_xiaotao: ["female", "qun", 4, ["vtbtaoyan", "vtbyanli"]],
			vtb_xiaojiu: ["female", "qun", 4, ["vtbmeiniang", "vtbyaoli"]],
			vtb_xiaole: ["female", "qun", 4, ["vtbleyu", "vtbyuanli"]],
		},
		characterSort: {
			shengxiao: {
				collab_shengxiao: ["ol_zishu", "ol_chouniu", "ol_yinhu", "ol_maotu", "ol_chenlong", "ol_sishe", "ol_wuma", "ol_weiyang", "ol_shenhou", "ol_youji", "ol_xugou", "ol_haizhu"],
				offline_vtuber: ["vtb_xiaosha", "vtb_xiaoshan", "vtb_xiaotao", "vtb_xiaojiu", "vtb_xiaole"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			zishu: "子鼠，十二生肖之一。",
			chouniu: "丑牛，十二生肖之一。",
			yinhu: "寅虎，十二生肖之一。",
			maotu: "卯兔，十二生肖之一。",
			chenlong: "辰龙，十二生肖之一。",
			sishe: "巳蛇，十二生肖之一。",
			wuma: "午马，十二生肖之一。",
			weiyang: "未羊，十二生肖之一。",
			shenhou: "申猴，十二生肖之一。",
			youji: "酉鸡，十二生肖之一。",
			xugou: "戌狗，十二生肖之一。",
			haizhu: "亥猪，十二生肖之一。",
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
			// 部分武将代码位于offline.js
			
			//十二生肖
			olzishu: {
				audio: true,
				enable: "phaseUse",
				usable: 1,
				selectTarget: 1,
				filter(event, player) {
					return game.hasPlayer(target => get.info("olzishu").filterTarget(null, player, target));
				},
				filterTarget(card, player, target) {
					return target !== player && target.countCards("h") > player.countCards("h");
				},
				async content(event, trigger, player) {
					await player.gainPlayerCard(event.target, "h", true);
					while (game.hasPlayer(target => get.info(event.name).filterTarget(null, player, target)) && !player.isMaxHandcard()) {
						const result = await player
							.chooseTarget("是否继续获得手牌数大于你的一名角色的一张手牌？", get.info(event.name).filterTarget)
							.set("ai", function (target) {
								const player = get.player();
								return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
							})
							.forResult();
						if (result.bool) {
							player.line(result.targets[0]);
							await player.gainPlayerCard(result.targets[0], "h", true);
						} else {
							break;
						}
					}
				},
				ai: {
					order: 0.01,
					result: {
						player(player, target) {
							return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
						},
					},
				},
			},
			olchouniu: {
				audio: true,
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.isMinHp();
				},
				forced: true,
				content() {
					player.recover();
				},
			},
			olyinhu: {
				audio: true,
				enable: "phaseUse",
				filter(event, player) {
					return player.hasCard(card => get.info("olyinhu").filterCard(card, player), "he");
				},
				filterCard(card, player) {
					if (!lib.filter.cardDiscardable(card, player)) {
						return false;
					}
					return !player.getStorage("olyinhu_used").some(cardx => get.type2(cardx[2]) === get.type2(card));
				},
				filterTarget: lib.filter.notMe,
				check(card) {
					return 8 - get.value(card);
				},
				position: "he",
				async content(event, trigger, player) {
					const [card] = event.cards;
					player.addTempSkill("olyinhu_used", "phaseUseAfter");
					player.markAuto("olyinhu_used", [[get.translation(get.type2(card)), "", card.name]]);
					const next = event.target.damage();
					await next;
					if (
						game.getGlobalHistory("everything", evt => {
							return evt.name === "dying" && evt.getParent(next.name) === next;
						}).length > 0
					) {
						player.tempBanSkill("olyinhu");
					}
				},
				ai: {
					order: 7,
					result: {
						player(player, target) {
							return get.damageEffect(target, player, player);
						},
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
						intro: {
							name: "弃置过的牌",
							mark(dialog, content = []) {
								if (content.length) {
									dialog.addSmall([content, "vcard"]);
								}
							},
						},
					},
				},
			},
			olmaotu: {
				audio: true,
				trigger: { global: "dyingAfter" },
				filter(event, player) {
					return !player.hasSkill("olmaotu_effect", null, false, false);
				},
				forced: true,
				content() {
					player.addTempSkill("olmaotu_effect", { player: "phaseBegin" });
				},
				subSkill: {
					effect: {
						charlotte: true,
						mod: {
							targetEnabled(card, player, target) {
								if (player !== target && player.getHp() >= target.getHp()) {
									return false;
								}
							},
						},
						mark: true,
						intro: { content: "不能成为体力值大于等于你的其他角色使用牌的目标" },
					},
				},
			},
			olchenlong: {
				audio: true,
				enable: "phaseUse",
				filterTarget: lib.filter.notMe,
				usable: 1,
				async content(event, trigger, player) {
					player.addTempSkill("olchenlong_temp");
					const result = await player
							.chooseNumbers(get.translation(event.name), [{ prompt: "请选择你要失去的体力值", min: 1, max: 2 }], true)
							.set("processAI", () => {
								const player = get.player();
								let num = Math.min(2, player.getHp() - 1);
								if (!player.hasCard(card => player.canSaveCard(card, player), "hs")) {
									num = Math.min(2, player.getHp());
								}
								return [num];
							})
							.forResult(),
						num = result.numbers?.[0];
					if (num) {
						await player.loseHp(num);
						await event.target.damage(num);
					}
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							if (player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) <= 1) {
								return 0;
							}
							return get.damageEffect(target, player, player);
						},
					},
				},
				subSkill: {
					temp: {
						audio: "olchenlong",
						charlotte: true,
						trigger: { player: "dying" },
						filter(event, player) {
							return event.getParent("loseHp").name === "olchenlong";
						},
						content() {
							player.loseMaxHp();
						},
					},
				},
			},
			olsishe: {
				audio: true,
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return event.source?.isIn();
				},
				check(event, player) {
					return get.damageEffect(event.source, player, player) > 0;
				},
				logTarget: "source",
				content() {
					trigger.source.damage(trigger.num);
				},
				ai: {
					threaten: 0.6,
					maixie: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) {
								return [1, -1.5];
							}
							if (target.hasFriend() && get.tag(card, "damage")) {
								return [1, 0, 0, -0.7];
							}
						},
					},
				},
			},
			olwuma: {
				audio: true,
				trigger: { target: "useCardToTargeted" },
				filter(event, player) {
					return event.player !== player && get.type2(event.card) === "trick";
				},
				forced: true,
				content() {
					player.draw();
				},
				group: ["olwuma_turn", "olwuma_skip"],
				subSkill: {
					turn: {
						audio: "olwuma",
						trigger: { player: "turnOverBefore" },
						filter(event, player) {
							return !player.isTurnedOver();
						},
						forced: true,
						content() {
							trigger.cancel();
						},
					},
					skip: {
						audio: "olwuma",
						trigger: {
							player: ["phaseAnySkipped", "phaseAnyCancelled"],
						},
						forced: true,
						content() {
							game.log(player, "恢复了", trigger.name);
							player[trigger.name]();
						},
					},
				},
			},
			olweiyang: {
				audio: true,
				enable: "phaseUse",
				filter(event, player) {
					if (!player.hasCard(card => lib.filter.cardDiscardable(card, player), "he")) {
						return false;
					}
					return game.hasPlayer(target => target.isDamaged());
				},
				filterCard(card, player) {
					if (!lib.filter.cardDiscardable(card, player)) {
						return false;
					}
					return !ui.selected.cards?.some(cardx => get.type2(card) === get.type2(cardx));
				},
				selectCard: [1, Infinity],
				position: "he",
				complexCard: true,
				check(card) {
					var player = _status.event.player;
					var count = game.filterPlayer(function (current) {
						return current.isDamaged() && get.attitude(player, current) > 2;
					}).length;
					if (ui.selected.cards.length >= count) {
						return -1;
					}
					return 8 - get.value(card);
				},
				filterTarget(card, player, target) {
					return target.isDamaged();
				},
				selectTarget() {
					return ui.selected.cards.length;
				},
				usable: 1,
				content() {
					target.recover();
				},
				ai: {
					order: 6,
					result: {
						player(player, target) {
							return get.recoverEffect(target, player, player);
						},
					},
				},
			},
			olshenhou: {
				audio: true,
				trigger: { target: "useCardToTargeted" },
				filter(event, player) {
					return event.player !== player && event.card.name === "sha";
				},
				check(event, player) {
					return get.effect(player, event.card, event.player, player) <= 0;
				},
				async content(event, trigger, player) {
					const result = await player.judge(card => (get.color(card) === "red" ? 2 : -2)).forResult();
					if (result.bool) {
						trigger.getParent().excluded.add(player);
					}
				},
				ai: {
					effect: {
						target(card) {
							if (card.name === "sha") {
								return [1, 0.4];
							}
						},
					},
				},
			},
			olyouji: {
				audio: true,
				trigger: { player: "phaseDrawBegin2" },
				filter(event, player) {
					return game.roundNumber > 0 && !event.numFixed;
				},
				forced: true,
				content() {
					trigger.num += Math.min(5, game.roundNumber);
				},
			},
			olxugou: {
				mod: {
					targetInRange(card, player, target) {
						if (card.name === "sha" && ["unsure", "red"].includes(get.color(card))) {
							return true;
						}
					},
				},
				audio: true,
				trigger: { player: "useCard" },
				filter(event, player) {
					return event.card.name === "sha" && get.color(event.card) === "red";
				},
				forced: true,
				content() {
					trigger.baseDamage++;
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (card.name === "sha" && get.color(card) === "red") {
								if (get.attitude(player, target) > 0) {
									return [1, -0.5];
								}
								return [1, 0.8];
							}
						},
					},
				},
				group: "olxugou_buff",
				subSkill: {
					buff: {
						audio: "olxugou",
						trigger: { target: "shaBefore" },
						filter(event, player) {
							return get.color(event.card) == "red";
						},
						forced: true,
						content() {
							trigger.cancel();
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (card.name === "sha" && get.color(card) === "red") {
										return "zerotarget";
									}
								},
							},
						},
					},
				},
			},
			olhaizhu: {
				audio: true,
				trigger: {
					player: "phaseZhunbeiBegin",
					global: ["loseAfter", "loseAsyncAfter"],
				},
				filter(event, player) {
					if (event.name === "phaseZhunbei") {
						return player.isMaxHandcard();
					}
					if (event.type !== "discard" || event.getlx === false) {
						return false;
					}
					return game.hasPlayer(target => {
						if (target === player) {
							return false;
						}
						return event.getl?.(target)?.cards2?.some(card => get.color(card) === "black" && get.position(card, true) === "d");
					});
				},
				forced: true,
				// 临时修改（by 棘手怀念摧毁）
				content(event, trigger, player) {
					if (trigger.name === "phaseZhunbei") {
						player.loseHp();
						event.finish();
					}
					if (trigger.delay === false) {
						game.delay();
					}
					player.gain(
						game
							.filterPlayer(target => {
								if (target === player) {
									return false;
								}
								return trigger.getl?.(target)?.cards2?.some(card => get.color(card) === "black" && get.position(card, true) === "d");
							})
							.reduce((list, target) => {
								return list.addArray(trigger.getl(target).cards2.filter(card => get.color(card) === "black" && get.position(card, true) === "d"));
							}, []),
						"gain2"
					);
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			ol_zishu: "子鼠",
			ol_chouniu: "丑牛",
			ol_yinhu: "寅虎",
			ol_maotu: "卯兔",
			ol_chenlong: "辰龙",
			ol_sishe: "巳蛇",
			ol_wuma: "午马",
			ol_weiyang: "未羊",
			ol_shenhou: "申猴",
			ol_youji: "酉鸡",
			ol_xugou: "戌狗",
			ol_haizhu: "亥猪",
			olzishu: "子鼠",
			olzishu_info: "出牌阶段限一次，你可以获得手牌数大于你的其他角色一张手牌，然后你可以重复此流程直到你的手牌数为全场最多。",
			olchouniu: "丑牛",
			olchouniu_info: "锁定技，结束阶段，若你的体力值为全场最低，则你回复1点体力。",
			olyinhu: "寅虎",
			olyinhu_info: "出牌阶段，你可以弃置一张牌（本阶段以此法弃置的牌的类型须各不相同），然后对一名其他角色造成1点伤害。若有角色因此进入濒死状态，则此技能于本回合失效。",
			olmaotu: "卯兔",
			olmaotu_info: "锁定技，一名角色的濒死状态结算完毕后，你不能成为体力值大于等于你的其他角色使用牌的目标直到下个回合开始。",
			olchenlong: "辰龙",
			olchenlong_info: "出牌阶段限一次，你可以失去至多2点体力，对一名其他角色造成等量伤害。若你因此进入濒死状态，则你减1点体力上限。",
			olsishe: "巳蛇",
			olsishe_info: "当你受到伤害后，你可以对伤害来源造成等量伤害。",
			olwuma: "午马",
			olwuma_info: "锁定技。①你不能被翻面。②你的阶段不会被跳过。③当你成为其他角色使用锦囊牌的目标后，你摸一张牌。",
			olweiyang: "未羊",
			olweiyang_info: "出牌阶段限一次，你可以弃置任意张不同类型的牌，然后令至多等量角色回复1点体力。",
			olshenhou: "申猴",
			olshenhou_info: "当你成为【杀】的目标时，你可以进行判定，若结果为红色，则此【杀】对你无效。",
			olyouji: "酉鸡",
			olyouji_info: "锁定技，摸牌阶段，你多摸X张牌（X为游戏轮数且至多为5）。",
			olxugou: "戌狗",
			olxugou_info: "锁定技。①红色【杀】对你无效。②你使用红色【杀】无距离限制且造成的伤害+1。",
			olhaizhu: "亥猪",
			olhaizhu_info: "锁定技。①其他角色的黑色牌因弃置而置入弃牌堆后，你获得这些牌。②准备阶段，若你的手牌数为全场最多，你失去1点体力。",

			collab_shengxiao: "三国杀·十二生肖",
			offline_vtuber: "天书乱斗·虚拟偶像",/*S特别系列*/
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
