import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "sbfm",
		connect: true,
		connectBanned: [
			
		],
		character: {
			ol_sb_huaxiong: ["male", "qun", 6, ["olsbbojue", "olsbyangwei"]],
			ol_sb_yuanshu: ["male", "qun", 4, ["olsbjinming", "olsbxiaoshi", "olsbyanliang"], ["zhu"]],
			ol_sb_sunjian: ["male", "wu", "4/5", ["olsbhulie", "olsbyipo"]],
			ol_sb_jiangwei: ["male", "shu", 4, ["olsbzhuri", "olsbranji"]],
			ol_sb_guanyu: ["male", "shu", 4, ["olsbweilin", "olsbduoshou"]],
			ol_sb_taishici: ["male", "wu", 4, ["olsbdulie", "olsbdouchan"]],
			ol_sb_yuanshao: [
				"male",
				"qun",
				4,
				["olsbhetao", "olsbshenli", "olsbyufeng", "olsbshishou"],
				["zhu"],
			],
			ol_sb_pangtong: ["male", "shu", 3, ["olsbhongtu", "olsbqiwu"], ["die_audio:ol_sb_pangtong:ol_sb_pangtong2:ol_sb_pangtong3"]],
			ol_sb_kongrong: ["male", "qun", 4, ["olsbliwen", "olsbzhengyi"]],
		},
		characterSort: {
			sbfm: {
				sbfm_sb_mouding: ["ol_sb_jiangwei", "ol_sb_pangtong"],
				sbfm_sb_wudong: ["ol_sb_guanyu"],
				sbfm_sb_fenwu: ["ol_sb_taishici", "ol_sb_yuanshao", "ol_sb_sunjian", "ol_sb_huaxiong"],
				sbfm_sb_shiren: ["ol_sb_kongrong"],
				sbfm_sb_daquan: ["ol_sb_yuanshu"],
				// sbfm_sb_jichu: [],
				// sbfm_sb_huahao: [],
				
				// sbfm_waitingforsort: [],
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
			// 部分武将代码位于onlyOL.js
			
			//谋华雄
			olsbbojue: {
				audio: 2,
				enable: "phaseUse",
				filterTarget: lib.filter.notMe,
				usable: 2,
				async content(event, trigger, player) {
					const target = event.target,
						targets = [player, target],
						total = player.countCards("h") + target.countCards("h");
					let map = {},
						locals = targets.slice();
					let humans = targets.filter(current => current === game.me || current.isOnline());
					locals.removeArray(humans);
					const eventId = get.id();
					const send = (current, eventId) => {
						lib.skill.olsbbojue.chooseCard(current, targets, eventId);
						game.resume();
					};
					event._global_waiting = true;
					let time = 10000;
					if (lib.configOL && lib.configOL.choose_timeout) time = parseInt(lib.configOL.choose_timeout) * 1000;
					targets.forEach(current => current.showTimer(time));
					if (humans.length > 0) {
						const solve = function (resolve, reject) {
							return function (result, player) {
								if (result?.bool && result.cards?.length) {
									map[player.playerid] = result.cards[0];
									resolve();
								} else reject();
							};
						};
						await Promise.any(
							humans.map(current => {
								return new Promise(async (resolve, reject) => {
									if (current.isOnline()) {
										current.send(send, current, eventId);
										current.wait(solve(resolve, reject));
									} else {
										const next = lib.skill.olsbbojue.chooseCard(current, targets, eventId);
										const solver = solve(resolve, reject);
										if (_status.connectMode) game.me.wait(solver);
										const result = await next.forResult();
										if (_status.connectMode) game.me.unwait(result, current);
										else solver(result, current);
									}
								});
							})
						).catch(() => {});
						game.broadcastAll("cancel", eventId);
					}
					if (locals.length > 0) {
						for (const current of locals) {
							const result = await lib.skill.olsbbojue.chooseCard(current, targets).forResult();
							if (result?.bool && result.cards?.length) map[current.playerid] = result.cards[0];
						}
					}
					delete event._global_waiting;
					for (const i of targets) {
						i.hideTimer();
						i.popup(map[i.playerid] ? "弃牌" : "摸牌");
					}
					switch (Object.keys(map).length) {
						case 0:
							await player.draw("nodelay");
							await target.draw();
							break;
						case 2:
							await game
								.loseAsync({
									lose_list: [
										[player, [map[player.playerid]]],
										[target, [map[target.playerid]]],
									],
								})
								.setContent("discardMultiple");
							break;
						default:
							for (const current of [player, target]) {
								if (map[current.playerid]) await current.discard([map[current.playerid]]);
								else await current.draw();
							}
							break;
					}
					// 临时修改（by 棘手怀念摧毁）
					await game.asyncDelay(0.5);
					// await game.delay(0.5);
					switch (Math.abs(total - player.countCards("h") - target.countCards("h"))) {
						case 0:
							for (const current of [player, target]) {
								const aim = current === player ? target : player;
								if (current.isIn()) {
									current.line(aim);
									await current.discardPlayerCard(aim, "he", true);
								}
							}
							break;
						case 2:
							for (const current of [player, target]) {
								const aim = current === player ? target : player;
								const sha = new lib.element.VCard({ name: "sha" });
								if (current.isIn() && current.canUse(sha, aim, false)) {
									current.line(aim);
									await current.useCard(sha, aim, false, "noai");
								}
							}
							break;
					}
				},
				ai: {
					order: 4,
					result: {
						player(player, target) {
							return get.effect(target, { name: "sha" }, player, player) - get.effect(player, { name: "sha" }, target, player);
						},
					},
				},
				chooseCard(player, targets, eventId) {
					const str = get.translation(targets[0] == player ? targets[1] : targets[0]);
					return player
						.chooseCard("he", (card, player) => {
							return lib.filter.cardDiscardable(card, player, "olsbbojue");
						})
						.set("prompt", "搏决：弃置一张牌，或点击“取消”摸一张牌")
						.set("prompt2", "若你与" + str + "的手牌数之和的变化值为：0，你与其依次弃置对方一张牌；2，你与其依次视为对对方使用一张【杀】")
						.set("ai", card => {
							return 10 * Math.random() - get.value(card); //插眼，PZ157
						})
						.set("id", eventId)
						.set("_global_waiting", true);
				},
			},
			olsbyangwei: {
				audio: 2,
				trigger: { player: "gainAfter" },
				getIndex(event, player) {
					if (event.getParent().name !== "draw" || event.getParent("phaseDraw").player === player) return false;
					let history = player.getHistory(
						"gain",
						evt => {
							return evt.getParent().name === "draw" && evt.getParent("phaseDraw").player !== player;
						},
						event
					);
					history = history
						.slice()
						.map(evt => evt.cards)
						.flat();
					for (let i = history.length; i >= 0; i--) {
						if (i % 2 === 0) history.remove(history[i]);
					}
					return history.filter(card => event.cards.includes(card)).length;
				},
				forced: true,
				content() {
					player.addSkill("olsbyangwei_attack");
					player.addMark("olsbyangwei_attack", 1, false);
				},
				group: "olsbyangwei_discard",
				subSkill: {
					discard: {
						audio: "olsbyangwei",
						trigger: {
							player: "loseAfter",
							global: "loseAsyncAfter",
						},
						getIndex(event, player) {
							if (event.type != "discard" || event.getlx === false || event.getParent("phaseDiscard").player === player) return false;
							if (!event.getl(player)?.cards2?.length) return false;
							let history = game.getGlobalHistory(
								"everything",
								evt => {
									if (evt.name !== "loseAsync" && (event.name !== "lose" || evt.player !== player)) return false;
									if (evt.type != "discard" || evt.getlx === false || evt.getParent("phaseDiscard").player === player) return false;
									return evt.getl(player)?.cards2?.length > 0;
								},
								event
							);
							history = history
								.slice()
								.map(evt => evt.getl(player).cards2)
								.flat();
							for (let i = history.length; i >= 0; i--) {
								if (i % 2 === 0) history.remove(history[i]);
							}
							return history.filter(card => event.getl(player).cards2.includes(card)).length;
						},
						forced: true,
						content() {
							player.addSkill("olsbyangwei_defend");
							player.addMark("olsbyangwei_defend", 1, false);
						},
					},
					attack: {
						charlotte: true,
						onremove: true,
						trigger: { source: "damageBegin1" },
						forced: true,
						content() {
							trigger.num += player.countMark(event.name);
							player.removeSkill(event.name);
						},
						markimage: "image/card/pss_stone.png",
						intro: {
							name: "扬威 - 增伤",
							content: "本回合下次造成的伤害+#",
						},
					},
					defend: {
						charlotte: true,
						onremove: true,
						trigger: { player: "damageBegin2" },
						forced: true,
						content() {
							trigger.num += player.countMark(event.name);
							player.removeSkill(event.name);
						},
						markimage: "image/card/pss_paper.png",
						intro: {
							name: "扬威 - 受伤",
							content: "本回合下次受到的伤害+#",
						},
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			ol_sb_huaxiong: "OL谋华雄",
			ol_sb_huaxiong_prefix: "OL谋",
			olsbbojue: "搏决",
			olsbbojue_info: "出牌阶段限两次，你可以选择一名其他角色，然后同时与其选择摸一张牌或弃置一张牌，然后若你与其的手牌数之和的变化值为：0，你与其依次弃置对方一张牌；2，你与其依次视为对对方使用一张【杀】。",
			olsbyangwei: "扬威",
			olsbyangwei_info: "锁定技。①当你于一回合不因摸牌阶段获得至少两张牌后，你下次造成的伤害+1。②当你于一回合不因弃牌阶段弃置至少两张牌后，你下次受到的伤害+1。",

			sbfm_sb_mouding: "谋定天下",
			sbfm_sb_wudong: "武动乾坤",
			sbfm_sb_fenwu: "奋勇扬威",
			sbfm_sb_shiren: "施仁布德",
			sbfm_sb_daquan: "达权通变",
			sbfm_sb_jichu: "计出万全",
			sbfm_sb_huahao: "花好月圆",
			
			sbfm_waitingforsort: "等待分包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
