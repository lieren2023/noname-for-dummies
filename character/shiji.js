import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "shiji",
		connect: true,
		connectBanned: [
			
		],
		character: {
			liuba: ["male", "shu", 3, ["duanbi", "tongduo"]],
			sp_zhujun: ["male", "qun", 4, ["xinyangjie", "xinjuxiang", "houfeng"]],
			sp_huangfusong: ["male", "qun", 4, ["spzhengjun", "spshiji", "sptaoluan"]],
			sp_lvfan: ["male", "wu", 3, ["mbdiaodu", "mbdiancai", "spyanji"]],
			sp_jiangqing: ["male", "wu", 4, ["spjianyi", "spshangyi"]],
			sp_jiangwan: ["male", "shu", 3, ["spzhenting", "spjincui"]],
			sp_zhangchangpu: ["female", "wei", 3, ["spdifei", "spyanjiao"]],
			sp_cuiyan: ["male", "wei", 3, ["spyajun", "spzundi"]],
			sp_huaman: ["female", "shu", 4, ["spxiangzhen", "spfangzong", "spxizhan"]],
			sp_gaolan: ["male", "qun", 4, ["spjungong", "spdengli"]],
			sunyi: ["male", "wu", 4, ["zaoli"]],
			sp_wangshuang: ["male", "wei", 4, ["yiyong", "shanxie"]],
			sp_zongyu: ["male", "shu", 3, ["zhibian", "yuyan"]],
			yuanhuan: ["male", "wei", 3, ["qingjue", "fengjie"]],
			sp_chendong: ["male", "wu", 4, ["spyilie", "spfenming"]],
			db_wenyang: [
				"male",
				"wei",
				4,
				["dbquedi", "dbzhuifeng", "dbchongjian", "dbchoujue"],
				["doublegroup:wei:wu"],
			],
			sp_yanghu: ["male", "qun", 3, ["mingfa", "rongbei"], ["border:jin"]],
			qiaogong: ["male", "wu", 3, ["yizhu", "luanchou"]],
			liuzhang: ["male", "qun", 3, ["jutu", "yaohu", "rehuaibi"], ["zhu"]],
			sp_zhangwen: ["male", "wu", 3, ["gebo", "spsongshu"]],
			zhangzhongjing: ["male", "qun", 3, ["jishi", "xinliaoyi", "binglun"]],
			sp_xujing: ["male", "shu", 3, ["boming", "ejian"]],
			sp_huaxin: ["male", "wei", 3, ["yuanqing", "shuchen"]],
			xiangchong: ["male", "shu", 4, ["guying", "muzhen"]],
			caizhenji: ["female", "wei", 3, ["sheyi", "tianyin"]],
			sp_kongrong: ["male", "qun", 3, ["xinlirang", "xinmingshi"]],
			zhouchu: ["male", "wu", 4, ["xianghai", "rechuhai"]],
			wangfuzhaolei: ["male", "shu", 4, ["xunyi"]],
			wangling: ["male", "wei", 4, ["xingqi", "xinzifu", "mibei"], ["clan:太原王氏"]],
			wujing: ["male", "wu", 4, ["heji", "liubing"]],
			sp_mifuren: ["female", "shu", 3, ["xinguixiu", "qingyu"]],
			sp_xinpi: ["male", "wei", 3, ["spyinju", "spchijie"]],
			feiyi: ["male", "shu", 3, ["mjshengxi", "fyjianyu"]],
			sp_bianfuren: ["female", "wei", 3, ["spwanwei", "spyuejian"]],
			sp_duyu: ["male", "qun", 4, ["spwuku", "spsanchen"], ["border:jin"]],
			luotong: ["male", "wu", 4, ["qinzheng"]],
			sp_wangcan: ["male", "wei", 3, ["spqiai", "spshanxi"]],
			sp_chenzhen: ["male", "shu", 3, ["shameng"]],
			sp_sunshao: ["male", "wu", 3, ["mjdingyi", "mjzuici", "mjfubi"]],
			sp_xunchen: ["male", "qun", 3, ["mjweipo", "mjchenshi", "mjmouzhi"], ["clan:颍川荀氏"]],
		},
		characterSort: {
			shiji: {
				mobile_shijizhi: [
					"sp_wangcan",
					"sp_chenzhen",
					"sp_sunshao",
					"sp_xunchen",
					"luotong",
					"sp_duyu",
					"sp_bianfuren",
					"feiyi",
				],
				mobile_shijixin: [
					"wujing",
					"sp_mifuren",
					"sp_xinpi",
					"wangling",
					"wangfuzhaolei",
					"zhouchu",
					"sp_kongrong",
					"sp_yanghu",
				],
				mobile_shijiren: [
					"caizhenji",
					"xiangchong",
					"sp_huaxin",
					"sp_xujing",
					"zhangzhongjing",
					"sp_zhangwen",
					"liuzhang",
					"qiaogong",
				],
				mobile_shijiyong: [
					"db_wenyang",
					"sp_chendong",
					"yuanhuan",
					"sp_zongyu",
					"sp_wangshuang",
					"sunyi",
					"sp_gaolan",
					"sp_huaman",
				],
				mobile_shijiyan: [
					"sp_cuiyan",
					"sp_zhangchangpu",
					"sp_jiangwan",
					"sp_jiangqing",
					"sp_lvfan",
					"sp_huangfusong",
					"sp_zhujun",
					"liuba",
				],
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
			//刘巴
			duanbi: {
				unique: true,
				mark: true,
				limited: true,
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					var num1 = 0,
						num2 = 0;
					var count = game.countPlayer(function (current) {
						num1 += current.countCards("h");
						num2++;
						return current != player;
					});
					return count > 0 && num1 > num2 * 2;
				},
				filterTarget: true,
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				skillAnimation: true,
				animationColor: "orange",
				content: function () {
					"step 0";
					player.awakenSkill("duanbi");
					event.num = 0;
					event.cards = [];
					event.targets.sortBySeat();
					event.targets.remove(player);
					"step 1";
					var target = targets[num];
					var num = Math.min(3, Math.floor(target.countCards("h") / 2));
					if (num > 0) target.chooseToDiscard("h", true, num);
					else event._result = { bool: false };
					"step 2";
					if (result.bool && Array.isArray(result.cards)) event.cards.addArray(result.cards);
					event.num++;
					if (event.num < targets.length) event.goto(1);
					"step 3";
					event.cards = cards.filter(function (i) {
						return get.position(i, true) == "d";
					});
					if (!event.cards.length) event.finish();
					else
						player
							.chooseTarget(
								"是否令一名角色" +
									(event.cards.length > 3
										? "随机获得三"
										: "获得" + get.cnNumber(event.cards.length)) +
									"张被弃置的牌？"
							)
							.set("ai", function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) att /= 10;
								if (target.hasJudge("lebu")) att /= 4;
								return att * Math.sqrt(Math.max(1, 5 - target.countCards("h")));
							});
					"step 4";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "fire");
						target.gain(cards.randomGets(3), "gain2");
					}
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (player == target) return 3;
							return -Math.min(3, Math.floor(target.countCards("h") / 2));
						},
					},
				},
			},
			tongduo: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				direct: true,
				usable: 1,
				filter: function (event, player) {
					return (
						player != event.player &&
						event.targets.length == 1 &&
						game.hasPlayer(function (current) {
							return current.countCards("he") > 0;
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("tongduo"),
							"令一名角色重铸一张牌",
							function (card, player, target) {
								return target.hasCard(lib.filter.cardRecastable, "he");
							}
						)
						.set("ai", function (target) {
							return (
								get.attitude(_status.event.player, target) *
								Math.min(3, Math.floor(target.countCards("h", lib.filter.cardRecastable) / 2))
							);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("tongduo", target);
					} else event.finish();
					"step 2";
					if (!target.hasCard(lib.filter.cardRecastable, "he")) event.finish();
					else target.chooseCard("he", true, "请重铸一张牌", lib.filter.cardRecastable);
					"step 3";
					target.recast(result.cards);
				},
			},
			//朱儁
			yangjie: {
				audio: 2,
				group: ["yangjie_add"],
				enable: "phaseUse",
				prompt: "摸一张牌并与一名其他角色进行拼点",
				usable: 1,
				filter: function (event, player) {
					return !player.hasSkillTag("noCompareSource");
				},
				filterTarget: function (card, player, target) {
					return (
						target != player &&
						target.countCards("h") > 0 &&
						!target.hasSkillTag("noCompareTarget")
					);
				},
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					if (player.canCompare(target)) player.chooseToCompare(target).set("small", true);
					else event.finish();
					"step 2";
					if (!result.bool) {
						var cards = [result.player, result.target].filterInD("d");
						if (
							!cards.length ||
							!game.hasPlayer((current) => current != player && current != target)
						)
							event.finish();
						else {
							event.cards = cards;
							player
								.chooseTarget(
									"请选择一名角色",
									"令其获得" +
										get.translation(cards) +
										"，且视为对" +
										get.translation(target) +
										"使用一张火【杀】",
									function (card, player, target) {
										return target != player && target != _status.event.getParent().target;
									}
								)
								.set("ai", function (target) {
									var player = _status.event.player,
										cards = _status.event.getParent().cards,
										target2 = _status.event.getParent().target;
									var val = get.value(cards, target) * get.attitude(player, target);
									if (val <= 0) return 0;
									return val +
										target.canUse(
											{ name: "sha", nature: "fire", isCard: true },
											target2,
											false
										)
										? get.effect(
												target2,
												{ name: "sha", nature: "fire", isCard: true },
												target,
												player
										  )
										: 0;
								});
						}
					} else event.finish();
					"step 3";
					if (result.bool) {
						var source = result.targets[0];
						event.source = source;
						player.line(source);
						source.gain(cards, "gain2");
					} else event.finish();
					"step 4";
					var card = { name: "sha", nature: "fire", isCard: true };
					if (target.isIn() && source.isIn() && source.canUse(card, target, false))
						source.useCard(card, target, false);
				},
				subSkill: {
					add: {
						trigger: { player: "compare" },
						forced: true,
						popup: false,
						filter: function (event, player) {
							return (
								event.getParent().name == "yangjie" && event.num1 > 1 && player.isDamaged()
							);
						},
						content: function () {
							var num = player.getDamagedHp();
							game.log(player, "的拼点牌点数-", num);
							trigger.num1 = Math.max(1, trigger.num1 - num);
						},
					},
				},
				ai: {
					order: 3,
					result: { target: -1.5 },
				},
			},
			zjjuxiang: {
				audio: 2,
				trigger: { global: "dyingAfter" },
				logTarget: "player",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return event.player != player && event.player.isIn();
				},
				check: function (event, player) {
					return get.damageEffect(event.player, player, player) > 0;
				},
				content: function () {
					"step 0";
					player.awakenSkill("zjjuxiang");
					trigger.player.damage();
					"step 1";
					if (trigger.player.maxHp > 0) player.draw(trigger.player.maxHp);
				},
				ai: { expose: 10 },
			},
			xinyangjie: {
				audio: "yangjie",
				enable: "phaseUse",
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return player.canCompare(target);
					});
				},
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				usable: 1,
				content: function () {
					"step 0";
					player.chooseToCompare(target).set("small", true);
					"step 1";
					if (
						!result.bool &&
						game.hasPlayer(function (current) {
							return (
								current != player &&
								current != target &&
								current.canUse({ name: "sha", nature: "fire", isCard: true }, target, false)
							);
						})
					) {
						player
							.chooseTarget(
								"佯解：是否选择另一名其他角色？",
								"令其视为对" + get.translation(target) + "使用一张火【杀】",
								function (card, player, target) {
									return target != player && target != _status.event.getParent().target;
								}
							)
							.set("ai", function (target) {
								var player = _status.event.player,
									target2 = _status.event.getParent().target;
								return get.effect(
									target2,
									{ name: "sha", nature: "fire", isCard: true },
									target,
									player
								);
							});
					} else event.finish();
					"step 2";
					if (result.bool) {
						var source = result.targets[0];
						player.line(source);
						game.log(player, "选择了", source);
						var card = { name: "sha", nature: "fire", isCard: true };
						if (target.isIn() && source.isIn() && source.canUse(card, target, false))
							source.useCard(card, target, false, "noai");
					}
				},
				ai: {
					order: 3,
					result: {
						target: function (player, target) {
							var hs = player.getCards("h").sort(function (a, b) {
								return a.number - b.number;
							});
							var ts = target.getCards("h").sort(function (a, b) {
								return a.number - b.number;
							});
							if (!hs.length || !ts.length) return 0;
							if (hs[0].number <= ts[0].number) return -3;
							if (player.countCards("h") >= target.countCards("h")) return -10;
							return -1;
						},
					},
				},
			},
			xinjuxiang: {
				audio: "zjjuxiang",
				inherit: "zjjuxiang",
				content: function () {
					player.awakenSkill("xinjuxiang");
					trigger.player.damage();
				},
			},
			houfeng: {
				audio: 3,
				group: "houfeng_zhengsu",
				subSkill: {
					zhengsu: {
						audio: "houfeng1",
						trigger: { global: "phaseUseBegin" },
						filter: function (event, player) {
							if (
								!["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].some(
									(i) => !event.player.hasSkill(i)
								)
							)
								return false;
							return player.inRange(event.player);
						},
						check: function (event, player) {
							return get.attitude(player, event.player) > 0;
						},
						prompt2: () => lib.translate.houfeng_info,
						round: 1,
						logTarget: "player",
						content: function () {
							"step 0";
							player
								.chooseButton(
									[
										"选择" + get.translation(trigger.player) + "要进行的整肃类型",
										[
											["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].filter(
												(i) => !trigger.player.hasSkill(i)
											),
											"vcard",
										],
									],
									true
								)
								.set("ai", () => Math.random());
							"step 1";
							if (result.bool) {
								var name = result.links[0][2],
									target = trigger.player;
								target.addTempSkill("houfeng_share", {
									player: ["phaseDiscardAfter", "phaseAfter"],
								});
								target.markAuto("houfeng_share", [player]);
								target.addTempSkill(name, { player: ["phaseDiscardAfter", "phaseAfter"] });
								target.popup(name, "thunder");
								game.delayx();
							}
						},
					},
					share: {
						charlotte: true,
						onremove: true,
						trigger: { player: "phaseDiscardEnd" },
						forced: true,
						popup: false,
						content: function () {
							"step 0";
							if (!lib.skill.zhengsu.filter(trigger, player)) {
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "houfeng3");
								});
								player.popup("整肃失败", "fire");
								game.log(player, "整肃失败");
								event.finish();
								return;
							}
							game.broadcastAll(function () {
								if (lib.config.background_speak) game.playAudio("skill", "houfeng2");
							});
							player.popup("整肃成功", "wood");
							game.log(player, "整肃成功");
							var list = player.getStorage("houfeng_share").filter((i) => i.isIn());
							list.unshift(player);
							event.list = list;
							if (list.some(i => i.isDamaged())) {
								var num1 = 0,
									num2 = 0;
								for (var target of list) {
									num1 += 2 * get.effect(target, { name: "draw" }, player, player);
									num2 += get.recoverEffect(target, player, player);
								}
								trigger.player
									.chooseControl("摸两张牌", "回复体力")
									.set("prompt", "整肃奖励：请选择" + get.translation(list) + "的整肃奖励")
									.set("ai", function () {
										return ["摸两张牌", "回复体力"][_status.event.goon.indexOf(Math.max.apply(Math, _status.event.goon))];
									})
									.set("goon", [num1, num2]);
							}
							else event._result = { control: "摸两张牌" };
							"step 1";
							if (result.control != "cancel2") {
								if (result.control == "摸两张牌") game.asyncDraw(event.list, 2);
								else {
									for (var i of event.list) i.recover();
								}
							} else event.finish();
							"step 2";
							game.delayx();
						},
					},
				},
			},
			houfeng1: { audio: true },
			//手杀皇甫嵩
			spzhengjun: {
				audio: 3,
				group: "spzhengjun_zhengsu",
				subSkill: {
					zhengsu: {
						audio: "spzhengjun1",
						trigger: { player: "phaseUseBegin" },
						filter: function (event, player) {
							return ["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].some(
								(i) => !player.hasSkill(i)
							);
						},
						direct: true,
						content: function () {
							"step 0";
							player
								.chooseButton([
									get.prompt("spzhengjun"),
									[
										["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].filter(
											(i) => !player.hasSkill(i)
										),
										"vcard",
									],
								])
								.set("ai", () => Math.random());
							"step 1";
							if (result.bool) {
								player.logSkill("spzhengjun_zhengsu", player);
								var name = result.links[0][2];
								player.addTempSkill("spzhengjun_share", {
									player: ["phaseDiscardAfter", "phaseAfter"],
								});
								player.addTempSkill(name, { player: ["phaseDiscardAfter", "phaseAfter"] });
								player.popup(name, "thunder");
								game.delayx();
							}
						},
					},
					share: {
						charlotte: true,
						trigger: { player: "phaseDiscardEnd" },
						forced: true,
						popup: false,
						content: function () {
							"step 0";
							if (!lib.skill.zhengsu.filter(trigger, player)) {
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "spzhengjun3");
								});
								player.popup("整肃失败", "fire");
								game.log(player, "整肃失败");
								event.finish();
								return;
							}
							game.broadcastAll(function () {
								if (lib.config.background_speak) game.playAudio("skill", "spzhengjun2");
							});
							player.popup("整肃成功", "wood");
							game.log(player, "整肃成功");
							player.chooseDrawRecover(2, "整肃奖励：摸两张牌或回复1点体力", true);
							"step 1";
							if (result.control == "cancel2") {
								event.finish();
								return;
							}
							player
								.chooseTarget(
									"整军：是否令一名其他角色也回复1点体力或摸两张牌？",
									lib.filter.notMe
								)
								.set("ai", function (target) {
									var player = _status.event.player;
									return Math.max(
										2 * get.effect(target, { name: "draw" }, target, player),
										get.recoverEffect(target, target, player)
									);
								});
							"step 2";
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								var num1 = 2 * get.effect(target, { name: "draw" }, target, player);
								var num2 = get.recoverEffect(target, target, player);
								player.line(target);
								if (target.isHealthy()) result.index = 0;
								else
									player
										.chooseControl("摸牌", "回血")
										.set(
											"prompt",
											"整肃奖励：令" + get.translation(target) + "摸两张牌或回复1点体力"
										)
										.set("ai", function () {
											return _status.event.goon ? 0 : 1;
										})
										.set("goon", num1 >= num2);
							} else event.finish();
							"step 3";
							if (result.index == 0) target.draw(2);
							else target.recover();
						},
					},
				},
			},
			spzhengjun1: { audio: true },
			spshiji: {
				audio: 2,
				trigger: { source: "damageBegin2" },
				logTarget: "player",
				filter: function (event, player) {
					return (
						player != event.player &&
						event.hasNature("linked") &&
						event.player.countCards("h") > 0 &&
						!player.isMaxHandcard(true)
					);
				},
				check: function (event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content: function () {
					var target = trigger.player;
					player.viewHandcards(target);
					var hs = target.getCards("h", { color: "red" });
					if (hs.length) {
						target.discard(hs);
						player.draw(hs.length);
					}
				},
			},
			sptaoluan: {
				audio: 2,
				trigger: { global: "judgeFixing" },
				usable: 1,
				filter: function (event, player) {
					return event.result && event.result.suit == "spade";
				},
				check: function (event, player) {
					return event.result.judge * get.attitude(player, event.player) <= 0;
				},
				content: function () {
					"step 0";
					var evt = trigger.getParent();
					if (evt.name == "phaseJudge") evt.excluded = true;
					else {
						evt.finish();
						evt._triggered = null;
						if (evt.name.startsWith("pre_")) {
							var evtx = evt.getParent();
							evtx.finish();
							evtx._triggered = null;
						}
						var nexts = trigger.next.slice();
						for (var next of nexts) {
							if (next.name == "judgeCallback") trigger.next.remove(next);
						}
						var evts = game.getGlobalHistory("cardMove", function (evt) {
							return evt.getParent(2) == trigger.getParent();
						});
						var cards = [];
						for (var i = evts.length - 1; i >= 0; i--) {
							var evt = evts[i];
							for (var card of evt.cards) {
								if (get.position(card, true) == "o") cards.push(card);
							}
						}
						trigger.orderingCards.addArray(cards);
					}
					var list = [];
					if (get.position(trigger.result.card) == "d") list.push(0);
					if (
						trigger.player.isIn() &&
						player.canUse({ name: "sha", nature: "fire", isCard: true }, trigger.player, false)
					)
						list.push(1);
					if (list.length == 2)
						player
							.chooseControl()
							.set("choiceList", [
								"获得" + get.translation(trigger.result.card),
								"视为对" + get.translation(trigger.player) + "使用一张火【杀】",
							])
							.set(
								"choice",
								get.effect(trigger.player, { name: "sha" }, player, player) > 0 ? 1 : 0
							);
					else if (list.length == 1) event._result = { index: list[0] };
					else event.finish();
					"step 1";
					if (result.index == 0) player.gain(trigger.result.card, "gain2");
					else player.useCard({ name: "sha", nature: "fire", isCard: true }, trigger.player, false);
				},
			},
			//吕范
			spdiaodu: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("spdiaodu"),
							"令一名角色摸一张牌，然后移动其装备区内的一张牌"
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att > 0) {
								if (
									target.hasCard(function (card) {
										if (
											get.value(card, target) <= 0 &&
											game.hasPlayer(function (current) {
												return (
													current != target &&
													current.canEquip(card, false) &&
													get.effect(current, card, player, player) > 0
												);
											})
										)
											return true;
										return false;
									}, "e")
								)
									return 2 * att;
								if (
									!target.hasCard(function (card) {
										return game.hasPlayer(function (current) {
											return current != target && current.canEquip(card);
										});
									}, "e")
								)
									return 1;
							} else if (att < 0) {
								if (
									target.hasCard(function (card) {
										if (
											get.value(card, target) >= 4.5 &&
											game.hasPlayer(function (current) {
												return (
													current != target &&
													current.canEquip(card) &&
													get.effect(current, card, player, player) > 0
												);
											})
										)
											return true;
										return false;
									}, "e")
								)
									return -att;
							}
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("spdiaodu", target);
						target.draw();
					} else event.finish();
					"step 2";
					var es = target.getCards("e", function (card) {
						return game.hasPlayer(function (current) {
							return current != target && current.canEquip(card);
						});
					});
					if (es.length) {
						if (es.length == 1) event._result = { bool: true, links: es };
						else
							player
								.chooseButton(["移动" + get.translation(target) + "的一张装备牌", es], true)
								.set("ai", function (button) {
									var player = _status.event.player,
										target = _status.event.getParent().target,
										card = button.link;
									if (
										game.hasPlayer(function (current) {
											return (
												current != target &&
												current.canEquip(card) &&
												get.effect(current, card, player, player) > 0
											);
										})
									)
										return -get.value(card, target) * get.attitude(player, target);
									return 0;
								});
					} else event.finish();
					"step 3";
					if (result.bool) {
						event.card = result.links[0];
						player
							.chooseTarget(
								true,
								"选择" + get.translation(event.card) + "的移动目标",
								function (card, player, target) {
									return target.canEquip(_status.event.card);
								}
							)
							.set("card", event.card)
							.set("ai", function (target) {
								var evt = _status.event;
								return get.effect(target, evt.getParent().card, evt.player, evt.player);
							});
					} else event.finish();
					"step 4";
					if (result.bool) {
						var target2 = result.targets[0];
						target.line(target2);
						target.$give(card, target2);
						game.delay(0.5);
						target2.equip(card);
					}
				},
			},
			spdiancai: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player != event.player &&
						player.hasHistory("lose", function (evt) {
							return evt.hs && evt.hs.length > 0;
						})
					);
				},
				content: function () {
					"step 0";
					var num = 0;
					player.getHistory("lose", function (evt) {
						if (evt.hs) num += evt.hs.length;
					});
					num = Math.min(num, game.countPlayer());
					player
						.chooseTarget(
							get.prompt("spdiancai"),
							[1, num],
							"令至多" + get.cnNumber(num) + "名角色各摸一张牌"
						)
						.set("ai", function (target) {
							return get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets.sortBySeat(trigger.player);
						player.logSkill("spdiancai", targets);
						if (targets.length == 1) {
							targets[0].draw();
							event.finish();
						} else game.asyncDraw(targets);
					} else event.finish();
					"step 2";
					game.delayx();
				},
			},
			mbdiaodu: {
				audio: "spdiaodu",
				trigger: { player: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return target.countCards("e", function (card) {
							return game.hasPlayer(function (current) {
								return current != player && current != target && current.canEquip(card);
							});
						});
					});
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("mbdiaodu"), function (card, player, target) {
							return target.countCards("e", function (card) {
								return game.hasPlayer(function (current) {
									return current != player && current != target && current.canEquip(card);
								});
							});
						})
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (att > 0) {
								if (
									target.hasCard(function (card) {
										if (
											get.value(card, target) <= 0 &&
											game.hasPlayer(function (current) {
												return (
													current != player &&
													current != target &&
													current.canEquip(card, false) &&
													get.effect(current, card, player, player) > 0
												);
											})
										)
											return true;
										return false;
									}, "e")
								)
									return 2 * att;
							} else if (att < 0) {
								if (
									target.hasCard(function (card) {
										if (
											get.value(card, target) >= 4.5 &&
											game.hasPlayer(function (current) {
												return (
													current != player &&
													current != target &&
													current.canEquip(card) &&
													get.effect(current, card, player, player) > 0
												);
											})
										)
											return true;
										return false;
									}, "e")
								)
									return -att;
							}
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("mbdiaodu", target);
					} else event.finish();
					"step 2";
					var es = target.getCards("e", function (card) {
						return game.hasPlayer(function (current) {
							return current != target && current.canEquip(card);
						});
					});
					if (es.length == 1) event._result = { bool: true, links: es };
					else
						player
							.chooseButton(["移动" + get.translation(target) + "的一张装备牌", es], true)
							.set("ai", function (button) {
								var player = _status.event.player,
									target = _status.event.getParent().target,
									card = button.link;
								if (
									game.hasPlayer(function (current) {
										return (
											current != player &&
											current != target &&
											current.canEquip(card) &&
											get.effect(current, card, player, player) > 0
										);
									})
								)
									return -get.value(card, target) * get.attitude(player, target);
								return 0;
							});
					"step 3";
					if (result.bool) {
						event.card = result.links[0];
						player
							.chooseTarget(
								"请选择" + get.translation(event.card) + "的移动目标",
								true,
								function (card, player, target) {
									return target != player && target.canEquip(_status.event.card);
								}
							)
							.set("card", event.card)
							.set("ai", function (target) {
								var evt = _status.event;
								return get.effect(target, evt.getParent().card, evt.player, evt.player);
							});
					} else event.finish();
					"step 4";
					if (result.bool) {
						var target2 = result.targets[0];
						target.line(target2);
						target.$give(card, target2);
						game.delay(0.5);
						target2.equip(card);
					} else event.finish();
					"step 5";
					target.draw();
				},
			},
			mbdiancai: {
				audio: "spdiancai",
				trigger: { global: "phaseUseEnd" },
				filter: function (event, player) {
					if (_status.currentPhase == player) return false;
					var num = 0;
					player.getHistory("lose", function (evt) {
						if (evt.cards2 && evt.getParent("phaseUse") == event) num += evt.cards2.length;
					});
					return num >= player.hp && player.countCards("h") < player.maxHp;
				},
				frequent: true,
				content: function () {
					var num = player.maxHp - player.countCards("h");
					if (num > 0) player.draw(num);
				},
			},
			spyanji: {
				audio: 3,
				group: "spyanji_zhengsu",
				subSkill: {
					zhengsu: {
						audio: "spyanji",
						trigger: { player: "phaseUseBegin" },
						filter: function (event, player) {
							return ["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].some(
								(i) => !player.hasSkill(i)
							);
						},
						direct: true,
						content: function () {
							"step 0";
							player
								.chooseButton([
									get.prompt("spyanji"),
									[
										["zhengsu_leijin", "zhengsu_bianzhen", "zhengsu_mingzhi"].filter(
											(i) => !player.hasSkill(i)
										),
										"vcard",
									],
								])
								.set("ai", () => Math.random());
							"step 1";
							if (result.bool) {
								player.logSkill("spyanji_zhengsu", player);
								var name = result.links[0][2];
								player.addTempSkill("spyanji_share", {
									player: ["phaseDiscardAfter", "phaseAfter"],
								});
								player.addTempSkill(name, { player: ["phaseDiscardAfter", "phaseAfter"] });
								player.popup(name, "thunder");
								game.delayx();
							}
						},
					},
					share: {
						charlotte: true,
						trigger: { player: "phaseDiscardEnd" },
						forced: true,
						popup: false,
						content: function () {
							if (!lib.skill.zhengsu.filter(trigger, player)) {
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "spyanji3");
								});
								player.popup("整肃失败", "fire");
								game.log(player, "整肃失败");
								event.finish();
								return;
							}
							game.broadcastAll(function () {
								if (lib.config.background_speak) game.playAudio("skill", "spyanji2");
							});
							player.popup("整肃成功", "wood");
							game.log(player, "整肃成功");
							player.chooseDrawRecover(2, "整肃奖励：摸两张牌或回复1点体力");
						},
					},
				},
			},
			spyanji1: { audio: true },
			//蒋钦
			spjianyi: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				forced: true,
				filter: function (event, player) {
					return (
						player != event.player &&
						game.getGlobalHistory("cardMove", function (evt) {
							if (evt.name != "lose" || evt.type != "discard") return false;
							for (var i of evt.cards) {
								if (get.subtype(i, false) == "equip2" && get.position(i, true) == "d")
									return true;
							}
							return false;
						}).length > 0
					);
				},
				content: function () {
					"step 0";
					var cards = [];
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name != "lose" || evt.type != "discard") return false;
						for (var i of evt.cards) {
							if (get.subtype(i, false) == "equip2" && get.position(i, true) == "d")
								cards.push(i);
						}
					});
					player.chooseButton(["俭衣：获得一张防具牌", cards], true).set("ai", function (button) {
						return get.value(button.link, _status.event.player);
					});
					"step 1";
					if (result.bool) player.gain(result.links, "gain2");
				},
			},
			spshangyi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return (
						player.countCards("he") > 0 &&
						game.hasPlayer((current) => lib.skill.spshangyi.filterTarget(null, player, current))
					);
				},
				filterCard: true,
				position: "he",
				check: function (card) {
					return 6 - get.value(card);
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				content: function () {
					target.viewHandcards(player);
					player.gainPlayerCard(target, "h", true, "visible");
				},
				ai: {
					order: 6,
					result: {
						player: 0.5,
						target: function (player, target) {
							if (target.hasSkillTag("noh")) return 0;
							return -1;
						},
					},
				},
			},
			//蒋琬
			spzhenting: {
				audio: 2,
				trigger: { global: "useCardToTarget" },
				usable: 1,
				filter: function (event, player) {
					return (event.card.name == "sha" || get.type(event.card, null, false) == "delay") && event.player != player && !event.targets.includes(player) && player.inRange(event.target);
				},
				logTarget: "target",
				check: function (event, player) {
					var target = event.target,
						source = event.player;
					var eff1 = get.effect(target, event.card, source, player);
					if (eff1 >= 0) return false;
					var eff2 = get.effect(player, event.card, source, player);
					if (eff2 >= 0) return true;
					if (eff1)
						if (event.card.name == "sha") {
							if (player.hasShan()) return true;
							if (eff1 > eff2) return false;
							if (player.hp > 2) return true;
							if (player.hp == 2) return eff2 > eff1 / 3;
							return false;
						}
					if (event.card.name == "shandian" || event.card.name == "bingliang") return true;
					if (event.card.name == "lebu") return !player.needsToDiscard() && target.needsToDiscard();
					return false;
				},
				content: function () {
					"step 0";
					var target = trigger.target,
						evt = trigger.getParent();
					evt.triggeredTargets2.remove(target);
					evt.targets.remove(target);
					evt.triggeredTargets2.add(player);
					evt.targets.add(player);
					game.log(trigger.card, "的目标被改为了", player);
					trigger.untrigger();
					"step 1";
					if (!trigger.player.countDiscardableCards(player, "h")) event._result = { index: 0 };
					else
						player
							.chooseControl()
							.set("choiceList", [
								"摸一张牌",
								"弃置" + get.translation(trigger.player) + "的一张手牌",
							]);
					"step 2";
					if (result.index == 0) player.draw();
					else {
						player.line(trigger.player, "fire");
						player.discardPlayerCard(trigger.player, true, "h");
					}
				},
				ai: {
					threaten: 1.4,
				},
			},
			spjincui: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				changeSeat: true,
				seatRelated: true,
				limited: true,
				skillAnimation: true,
				animationColor: "orange",
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					player.awakenSkill("spjincui");
					game.broadcastAll(
						function (target1, target2) {
							game.swapSeat(target1, target2);
						},
						player,
						target
					);
					"step 1";
					if (player.hp > 0) player.loseHp(player.hp);
				},
				ai: {
					order: 5,
					result: {
						player: function (player, target) {
							if (player.hasUnknown()) return 0;
							if (!player.countCards("h", { name: ["tao", "jiu"] })) return 0;
							var num = 0,
								current = player.next;
							while (true) {
								num -= get.sgn(get.attitude(player, current));
								if (current == target) break;
								current = current.next;
							}
							while (true) {
								if (current == player) break;
								num += get.sgn(get.attitude(player, current)) * 1.1;
								current = current.next;
							}
							if (num < player.hp) return 0;
							return num + 1 - player.hp;
						},
					},
				},
			},
			//张昌蒲
			spdifei: {
				audio: 2,
				trigger: { player: "damageEnd" },
				forced: true,
				usable: 1,
				content: function () {
					"step 0";
					var next = player.chooseToDiscard("h", "抵诽：弃置一张手牌或摸一张牌");
					if (trigger.card) {
						var suit = get.suit(trigger.card, false);
						if (lib.suit.includes(suit)) {
							next.set("suit", suit);
							next.set("prompt2", "然后若没有" + get.translation(suit) + "手牌则回复1点体力");
							next.set("ai", function (card) {
								var player = _status.event.player,
									suit = _status.event.suit;
								if (
									player.hasCard(function (cardx) {
										return cardx != card && get.suit(cardx) == suit;
									}, "h")
								)
									return 0;
								if (
									get.name(card) != "tao" &&
									((get.position(card) == "h" && get.suit(card) == suit) || player.hp == 1)
								)
									return 8 - get.value(card);
								return 5 - get.value(card);
							});
						} else
							next.set("ai", function (card) {
								return -get.value(card);
							});
					}
					"step 1";
					if (!result.bool) player.draw();
					"step 2";
					player.showHandcards();
					if (trigger.card) {
						var suit = get.suit(trigger.card, false);
						if (!lib.suit.includes(suit) || !player.countCards("h", { suit: suit }))
							player.recover();
					}
				},
			},
			spyanjiao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				chooseButton: {
					dialog: function () {
						return ui.create.dialog("###严教###" + get.translation("spyanjiao_info"));
					},
					chooseControl: function (event, player) {
						var map = {},
							hs = player.getCards("h");
						for (var i of hs) map[get.suit(i, player)] = true;
						var list = lib.suit.filter((i) => map[i]);
						list.push("cancel2");
						return list;
					},
					check: function (event, player) {
						var map = {},
							hs = player.getCards("h"),
							min = Infinity,
							min_suit = null;
						for (var i of hs) {
							var suit = get.suit(i, player);
							if (!map[suit]) map[suit] = 0;
							map[suit] += get.value(i);
						}
						for (var i in map) {
							if (map[i] < min) {
								min = map[i];
								min_suit = i;
							}
						}
						return min_suit;
					},
					backup: function (result, player) {
						return {
							audio: "spyanjiao",
							filterCard: { suit: result.control },
							selectCard: -1,
							position: "h",
							filterTarget: lib.filter.notMe,
							discard: false,
							lose: false,
							delay: false,
							content: function () {
								player.addSkill("spyanjiao_draw");
								player.addMark("spyanjiao_draw", cards.length, false);
								player.give(cards, target);
								target.damage("nocard");
							},
							ai: {
								result: {
									target: function (player, target) {
										if (!ui.selected.cards.length) return 0;
										var val = get.value(ui.selected.cards, target);
										if (val < 0) return val + get.damageEffect(target, player, target);
										if (val > 5 || get.value(ui.selected.cards, player) > 5) return 0;
										return get.damageEffect(target, player, target);
									},
								},
							},
						};
					},
					prompt: () => "请选择【严教】的目标",
				},
				subSkill: {
					draw: {
						onremove: true,
						trigger: { player: "phaseBegin" },
						forced: true,
						charlotte: true,
						content: function () {
							player.draw(player.countMark("spyanjiao_draw"));
							player.removeSkill("spyanjiao_draw");
						},
						mark: true,
						intro: { content: "下回合开始时摸#张牌" },
					},
					backup: { audio: "spyanjiao" },
				},
				ai: {
					order: 1,
					result: { player: 1 },
				},
			},
			//崔琰
			spyajun: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					var hs = player.getCards("h");
					return (
						hs.length > 0 &&
						!player.hasSkillTag("noCompareSource") &&
						player.hasHistory("gain", function (evt) {
							for (var i of evt.cards) {
								if (hs.includes(i)) return true;
							}
							return false;
						}) &&
						game.hasPlayer(function (current) {
							return current != player && player.canCompare(current);
						})
					);
				},
				content: function () {
					"step 0";
					var cards = [],
						hs = player.getCards("h");
					player.getHistory("gain", function (evt) {
						cards.addArray(evt.cards);
					});
					cards = cards.filter(function (i) {
						return hs.includes(i);
					});
					player.chooseCardTarget({
						prompt: get.prompt("spyajun"),
						prompt2: "操作提示：选择一张本回合新得到的牌作为拼点牌，然后选择一名拼点目标",
						cards: cards,
						filterCard: function (card) {
							return _status.event.cards.includes(card);
						},
						filterTarget: function (card, player, target) {
							return player.canCompare(target);
						},
						ai1: function (card) {
							return get.number(card) - get.value(card);
						},
						ai2: function (target) {
							return (
								-get.attitude(_status.event.player, target) *
								Math.sqrt(5 - Math.min(4, target.countCards("h"))) *
								(target.hasSkillTag("noh") ? 0.5 : 1)
							);
						},
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("spyajun", target);
						var next = player.chooseToCompare(target);
						if (!next.fixedResult) next.fixedResult = {};
						next.fixedResult[player.playerid] = result.cards[0];
					} else event.finish();
					"step 2";
					if (result.bool) {
						var cards = [result.player, result.target].filterInD("d");
						if (cards.length) {
							player
								.chooseButton(["是否将一张牌置于牌堆顶？", cards])
								.set("ai", function (button) {
									if (get.color(button.link) == "black") return 1;
									return 0;
								});
						} else event.finish();
					} else {
						player.addMark("spyajun_less", 1, false);
						player.addTempSkill("spyajun_less");
						event.finish();
					}
					"step 3";
					if (result.bool) {
						var card = result.links[0];
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						game.updateRoundNumber();
						game.log(player, "将", card, "置于牌堆顶");
					}
				},
				group: "spyajun_draw",
				subSkill: {
					draw: {
						audio: "spyajun",
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							trigger.num++;
						},
					},
					less: {
						onremove: true,
						charlotte: true,
						intro: { content: "手牌上限-#" },
						mod: {
							maxHandcard: function (player, num) {
								return num - player.countMark("spyajun_less");
							},
						},
					},
				},
			},
			spzundi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				filterTarget: true,
				check: function (card) {
					return 7 - get.value(card);
				},
				content: function () {
					"step 0";
					player.judge();
					"step 1";
					switch (result.color) {
						case "black":
							target.draw(3);
							break;

						case "red":
							target.moveCard();
							break;

						default:
							break;
					}
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (target.canMoveCard(true)) return 3;
							return 1;
						},
					},
				},
			},
			//花蔓
			spxiangzhen: {
				trigger: { target: "useCardToBefore" },
				forced: true,
				audio: 2,
				filter: function (event, player) {
					return event.card.name == "nanman";
				},
				content: function () {
					trigger.cancel();
				},
				group: "spxiangzhen_draw",
				subSkill: {
					draw: {
						audio: "spxiangzhen",
						trigger: { global: "useCardAfter" },
						forced: true,
						filter: function (event, player) {
							return (
								event.card.name == "nanman" &&
								game.hasPlayer2(function (current) {
									return current.hasHistory("damage", function (evt) {
										return evt.card == event.card;
									});
								})
							);
						},
						content: function () {
							"step 0";
							let sources = game.filterPlayer(cur => {
								return cur.hasHistory("sourceDamage", evt => {
									return evt.card == trigger.card;
								});
							});
							sources.push(player);
							game.asyncDraw(sources.sortBySeat());
							"step 1";
							game.delayx();
						},
					},
				},
			},
			spfangzong: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					return (
						!player.hasSkill("spxizhan_spfangzong") &&
						player.countCards("h") < Math.min(8, game.countPlayer())
					);
				},
				content: function () {
					player.drawTo(Math.min(8, game.countPlayer()));
				},
				mod: {
					playerEnabled: function (card, player, target) {
						if (
							player == _status.currentPhase &&
							get.tag(card, "damage") > 0 &&
							!player.hasSkill("spxizhan_spfangzong") &&
							player.inRange(target)
						)
							return false;
					},
					targetEnabled: function (card, player, target) {
						if (
							get.tag(card, "damage") > 0 &&
							!target.hasSkill("spxizhan_spfangzong") &&
							player.inRange(target)
						)
							return false;
					},
				},
				ai: {
					combo: "spxizhan",
					halfneg: true
				},
			},
			spxizhan: {
				audio: 5,
				group: "spxizhan_effect",
				locked: false,
				subSkill: {
					spfangzong: { charlotte: true },
					effect: {
						trigger: { global: "phaseBegin" },
						filter: function (event, player) {
							return player != event.player;
						},
						forced: true,
						logTarget: "player",
						content: function () {
							"step 0";
							player
								.chooseToDiscard(
									"he",
									"嬉战：弃置一张牌或失去1点体力",
									"根据弃置的牌对" +
										get.translation(trigger.player) +
										"视为使用如下牌：<br>♠，其使用【酒】；♥，你使用【无中生有】<br>♣，对其使用【铁索连环】；♦：对其使用火【杀】"
								)
								.set("ai", function (card) {
									var player = _status.event.player,
										target = _status.event.getTrigger().player;
									var suit = get.suit(card, player),
										list;
									switch (suit) {
										case "spade":
											list = [{ name: "jiu" }, target, target];
											break;
										case "heart":
											list = [{ name: "wuzhong" }, player, player];
											break;
										case "club":
											list = [{ name: "tiesuo" }, player, target];
											break;
										case "diamond":
											list = [{ name: "sha", nature: "fire" }, player, target];
											break;
									}
									list[0].isCard = true;
									var eff = 0;
									if (list[1].canUse(list[0], list[2], false))
										eff = get.effect(list[2], list[0], list[1], player);
									if (eff >= 0 || suit == "club") eff = Math.max(eff, 5);
									return eff * 1.5 - get.value(card);
								});
							"step 1";
							if (result.bool) {
								player.addTempSkill("spxizhan_spfangzong");
								var target = trigger.player,
									card = result.cards[0],
									suit = get.suit(card, player);
								if (
									!lib.suit.includes(suit) ||
									((!target || !target.isIn()) && suit != "heart")
								)
									return;
								game.broadcastAll(function (suit) {
									if (lib.config.background_speak) game.playAudio("skill", "spxizhan" + [null, "spade", null, "heart", "club", "diamond"].indexOf(suit));
								}, suit);
								switch (suit) {
									case "spade":
										target.chooseUseTarget("jiu", true);
										break;
									case "heart":
										player.chooseUseTarget("wuzhong", true);
										break;
									case "club":
										if (player.canUse("tiesuo", target))
											player.useCard(
												{
													name: "tiesuo",
													isCard: true,
												},
												target
											);
										break;
									case "diamond":
										if (
											player.canUse(
												{
													name: "sha",
													isCard: true,
													nature: "fire",
												},
												target,
												false
											)
										)
											player.useCard(
												{
													name: "sha",
													isCard: true,
													nature: "fire",
												},
												target,
												false
											);
										break;
								}
							} else {
								game.broadcastAll(function () {
									if (lib.config.background_speak) game.playAudio("skill", "spxizhan2");
								});
								player.loseHp();
							}
						},
					},
				},
				ai: {
					halfneg: true
				},
			},
			//高览
			spjungong: {
				enable: "phaseUse",
				filter: function (event, player) {
					var num = player.getStat("skill").spjungong || 0;
					return (
						(num < player.hp || num <= player.countCards("he")) &&
						!player.hasSkill("spjungong_block")
					);
				},
				filterTarget: function (card, player, target) {
					return target != player && player.canUse("sha", target, false);
				},
				filterCard: true,
				position: "he",
				selectCard: function () {
					var player = _status.event.player,
						num = (player.getStat("skill").spjungong || 0) + 1;
					if (ui.selected.cards.length || num > player.hp) return num;
					return [0, num];
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				prompt: function () {
					var player = _status.event.player,
						num = get.cnNumber((player.getStat("skill").spjungong || 0) + 1);
					return "弃置" + num + "张牌或失去" + num + "点体力，视为使用杀";
				},
				content: function () {
					"step 0";
					if (!cards.length) player.loseHp(player.getStat("skill").spjungong || 1);
					player.useCard({ name: "sha", isCard: true }, target, false);
					"step 1";
					if (
						player.hasHistory("sourceDamage", function (evt) {
							var card = evt.card;
							if (!card || card.name != "sha") return false;
							var evtx = evt.getParent("useCard");
							return evtx.card == card && evtx.getParent() == event;
						})
					)
						player.addTempSkill("spjungong_block");
				},
				ai: {
					order: function (item, player) {
						return get.order({ name: "sha" }, player) + 1;
					},
					result: {
						target: function (player, target) {
							if (!ui.selected.cards.length) return 0;
							return get.effect(target, { name: "sha" }, player, target);
						},
					},
				},
				subSkill: { block: { charlotte: true } },
			},
			spdengli: {
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				frequent: true,
				filter: function (event, player) {
					return event.card.name == "sha" && event.player.hp == event.target.hp;
				},
				content: function () {
					player.draw();
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							var hp = player.hp,
								evt = _status.event;
							if (
								evt.name == "chooseToUse" &&
								evt.player == player &&
								evt.skill == "spjungong" &&
								!ui.selected.cards.length
							)
								hp -= (player.getStat("skill").spjungong || 0) + 1;
							if (card && card.name == "sha" && hp == target.hp) return [1, 0.3];
						},
						target: function (card, player, target) {
							if (card && card.name == "sha" && player.hp == target.hp) return [1, 0.3];
						},
					},
				},
			},
			//孙翊
			zaoli: {
				trigger: { player: "phaseBegin" },
				audio: 2,
				forced: true,
				filter: function (event, player) {
					return player.countMark("zaoli") > 0;
				},
				content: function () {
					"step 0";
					event.num = player.storage.zaoli;
					player.removeMark("zaoli", event.num);
					if (player.countCards("he") > 0) {
						player
							.chooseToDiscard(true, "he", [1, Infinity], "躁厉：弃置至少一张牌")
							.set("ai", function (card) {
								if (card.hasGaintag("zaoli")) return 1;
								return 5 - get.value(card);
							});
					}
					"step 1";
					if (result.bool) num += result.cards.length;
					player.draw(num);
					"step 2";
					if (event.num > 2) player.loseHp();
				},
				mod: {
					cardEnabled2: function (card, player) {
						if (
							player == _status.currentPhase &&
							get.itemtype(card) == "card" &&
							card.hasGaintag("zaoli")
						)
							return false;
					},
				},
				group: ["zaoli_add", "zaoli_count"],
				init: function (player) {
					if (player == _status.currentPhase) {
						var hs = player.getCards("h");
						player.getHistory("gain", function (evt) {
							hs.removeArray(evt.cards);
						});
						if (hs.length) player.addGaintag(hs, "zaoli");
					}
				},
				onremove: function (player) {
					player.removeGaintag("zaoli");
					delete player.storage.zaoli;
				},
				intro: { content: "mark" },
				subSkill: {
					add: {
						audio: "zaoli",
						trigger: { player: ["useCard", "respond"] },
						forced: true,
						filter: function (event, player) {
							return (
								player.countMark("zaoli") < 4 &&
								player.hasHistory("lose", function (evt) {
									return evt.hs && evt.hs.length > 0 && evt.getParent() == event;
								})
							);
						},
						content: function () {
							player.addMark("zaoli", 1);
						},
					},
					count: {
						trigger: { global: "phaseBeginStart" },
						forced: true,
						firstDo: true,
						silent: true,
						filter: function (event, player) {
							if (player == event.player) return player.countCards("h") > 0;
							return player.hasCard(function (card) {
								return card.hasGaintag("zaoli");
							}, "h");
						},
						content: function () {
							if (player == trigger.player) {
								player.addGaintag(player.getCards("h"), "zaoli");
							} else player.removeGaintag("zaoli");
						},
					},
				},
			},
			//王双
			yiyong: {
				audio: 2,
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					return (
						event.card &&
						event.card.name == "sha" &&
						event.source &&
						event.source.isIn() &&
						player != event.source &&
						event.cards.filterInD().length > 0 &&
						player.getEquips(1).length > 0
					);
				},
				check: function (event, player) {
					var card = {
							name: "sha",
							cards: event.cards.filterInD(),
						},
						target = event.source;
					return (
						!player.canUse(card, target, false) || get.effect(target, card, player, player) > 0
					);
				},
				content: function () {
					"step 0";
					event.cards = trigger.cards.filterInD();
					player.gain(event.cards, "gain2");
					"step 1";
					var target = trigger.source,
						hs = player.getCards("h");
					if (
						target &&
						target.isIn() &&
						hs.length >= cards.length &&
						cards.filter(function (i) {
							return hs.includes(i);
						}).length == cards.length &&
						player.canUse({ name: "sha", cards: cards }, target, false)
					) {
						var next = player.useCard({ name: "sha" }, cards, target, false);
						if (!target.getEquips(1).length) next.baseDamage = 2;
					}
				},
			},
			shanxie: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				//filterTarget:function(card,player,target){
				//	return target!=player&&target.getEquip(1);
				//},
				//selectTarget:[0,1],
				content: function () {
					var card = get.cardPile2(function (card) {
						return get.subtype(card) == "equip1";
					});
					if (card) player.gain(card, "gain2");
					else {
						var targets = game.filterPlayer(function (current) {
							return current.getEquips(1).length > 0;
						});
						if (targets.length) {
							var target = targets.randomGet();
							player.gain(target.getEquips(1), target, "give", "bySelf");
						}
					}
				},
				content_old: function () {
					"step 0";
					if (!target) {
						var card = get.cardPile2(function (card) {
							return get.subtype(card) == "equip1";
						});
						if (card) player.gain(card, "gain2");
						event.finish();
					} else {
						var card = target.getEquip(1);
						if (card) {
							event.card = card;
							player.gain(card, target, "give");
						} else event.finish();
					}
					"step 1";
					if (player.getCards("h").includes(card) && get.type(card, null, player) == "equip" && player.hasUseTarget(card)) player.chooseUseTarget(card, true, "nopopup");
					"step 2";
					var hs = target.getCards("h", function (card) {
						return target.canUse(get.autoViewAs({ name: "sha" }, [card]), player, false);
					});
					if (hs.length) {
						if (hs.length == 1) event._result = { bool: true, cards: hs };
						else
							target
								.chooseCard(
									"h",
									true,
									"将一张牌当做【杀】对" + get.translation(player) + "使用",
									function (card) {
										return _status.event.cards.includes(card);
									}
								)
								.set("cards", hs)
								.set("ai", function (card) {
									return get.effect(
										_status.event.getParent().player,
										get.autoViewAs({ name: "sha" }, [card]),
										_status.event.player
									);
								});
					} else event.finish();
					"step 3";
					if (result.bool) target.useCard({ name: "sha" }, result.cards, player, false);
				},
				ai: {
					order: 9,
					result: { player: 1 },
				},
				group: ["shanxie_exclude", "shanxie_shan"],
				subSkill: {
					exclude: {
						trigger: { global: "useCard" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							if (event.card.name != "shan" || event.getParent(2).player != player)
								return false;
							var num = get.number(event.card);
							return !num || num <= player.getAttackRange() * 2;
						},
						logTarget: "player",
						content: function () {
							trigger.all_excluded = true;
						},
						sub: true,
					},
					shan: {
						trigger: { player: "useCardToPlayered" },
						filter: function (event, player) {
							return event.target.isAlive() && event.card.name == "sha";
						},
						silent: true,
						content: function () {
							trigger.target.addTempSkill("shanxie_banned");
							trigger.target.storage.shanxie_banned = {
								card: trigger.card,
								num: player.getAttackRange() * 2,
							};
						},
						sub: true,
					},
					banned: {
						init: function (player) {
							player.storage.shanxie_banned = {};
						},
						onremove: function (player) {
							delete player.storage.shanxie_banned;
						},
						trigger: { global: "useCardEnd" },
						filter: function (event, player) {
							return event.card == player.storage.shanxie_banned.card;
						},
						silent: true,
						content: function () {
							player.removeSkill("shanxie_banned");
						},
						ai: {
							effect: {
								player: function (card, player, target) {
									if (get.name(card) == "shan") {
										let num = get.number(card);
										if (!num || num <= player.storage.shanxie_banned.num)
											return "zeroplayertarget";
									}
								},
							},
						},
					},
				},
			},
			//吴景流兵
			liubing: {
				trigger: { player: "useCard1" },
				forced: true,
				filter: function (event, player) {
					if (event.card.name != "sha" || !event.cards || !event.cards.length) return false;
					var evt = event.getParent("phaseUse");
					return (
						evt &&
						evt.player == player &&
						player
							.getHistory("useCard", function (evt2) {
								return (
									evt2.card.name == "sha" &&
									evt2.cards &&
									evt2.cards.length &&
									evt2.getParent("phaseUse") == evt
								);
							})
							.indexOf(event) == 0
					);
				},
				content: function () {
					game.log(player, "将", trigger.card, "的花色改为", "#y♦");
					trigger.card.suit = "diamond";
					trigger.card.color = "red";
				},
				group: "liubing_gain",
				subSkill: {
					gain: {
						trigger: { global: "useCardAfter" },
						forced: true,
						audio: "liubing",
						filter: function (event, player) {
							return (
								event.player != player &&
								event.card.isCard &&
								event.card.name == "sha" &&
								get.color(event.card) == "black" &&
								event.cards.filterInD().length > 0 &&
								event.player.isPhaseUsing() &&
								!event.player.hasHistory("sourceDamage", function (evt) {
									return evt.card == event.card;
								})
							);
						},
						logTarget: "player",
						content: function () {
							player.gain(trigger.cards.filterInD(), "gain2");
						},
					},
				},
			},
			//新刘璋
			jutu: {
				audio: "xiusheng",
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return (
						player.storage.yaohu &&
						game.hasPlayer(function (current) {
							return current.group == player.storage.yaohu;
						})
					);
				},
				content: function () {
					"step 0";
					var cards = player.getExpansions("jutu");
					if (cards.length > 0) {
						player.gain(cards, "gain2");
					}
					"step 1";
					event.num = game.countPlayer(function (current) {
						return current.group == player.storage.yaohu;
					});
					player.draw(event.num + 1);
					if (!event.num) event.finish();
					"step 2";
					var he = player.getCards("he");
					if (!he.length) event.finish();
					else if (he.length < num) event._result = { bool: true, cards: he };
					else player.chooseCard("he", true, num, "选择" + get.cnNumber(num) + "张牌作为生");
					"step 3";
					if (result.bool) {
						var cards = result.cards;
						player.addToExpansion(player, "give", cards).gaintag.add("jutu");
					}
					"step 4";
					game.delayx();
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: { combo: "yaohu" },
			},
			yaohu: {
				audio: "yinlang",
				trigger: { player: "phaseBegin" },
				direct: true,
				forced: true,
				locked: false,
				filter: function (event, player) {
					return (
						!player.hasSkill("yaohu_round") &&
						game.hasPlayer(function (current) {
							return current.group && current.group != "unknown";
						})
					);
				},
				content: function () {
					"step 0";
					var list = [];
					game.countPlayer(function (current) {
						if (current.group && current.group != "unknown") list.add(current.group);
					});
					list.sort(function (a, b) {
						return lib.group.indexOf(a) - lib.group.indexOf(b);
					});
					if (!player.hasSkill("yaohu")) list.push("cancel2");
					player
						.chooseControl(list)
						.set("prompt", "邀虎：请选择一个势力")
						.set("ai", function () {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								var getn = function (group) {
									return game.countPlayer(function (current) {
										if (current.group != group) return false;
										if (player == current) return 2;
										if (get.attitude(current, player) > 0) return 1;
										return 1.3;
									});
								};
								list.sort(function (a, b) {
									return getn(b) - getn(a);
								});
								return list[0];
							})()
						);
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill(
							"yaohu",
							game.filterPlayer(function (current) {
								return current.group == result.control;
							})
						);
						game.log(player, "选择了", "#y" + get.translation(result.control + 2));
						player.storage.yaohu = result.control;
						player.markSkill("yaohu");
					}
				},
				ai: { combo: "jutu" },
				intro: { content: "已选择了$势力" },
				group: "yaohu_gain",
				subSkill: {
					round: {},
					gain: {
						audio: "yinlang",
						trigger: { global: "phaseUseBegin" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (
								event.player != player &&
								event.player.group == player.storage.yaohu &&
								event.player.isIn() &&
								player.getExpansions("jutu").length > 0
							);
						},
						logTarget: "player",
						content: function () {
							"step 0";
							var target = trigger.player;
							event.target = target;
							target
								.chooseButton(["选择获得一张“生”", player.getExpansions("jutu")], true)
								.set("ai", function (button) {
									return get.value(button.link, player);
								});
							"step 1";
							if (result.bool) {
								target.gain(result.links, "give", player, "bySelf");
							}
							"step 2";
							if (
								game.hasPlayer(function (current) {
									return current != player && current != target;
								})
							) {
								player
									.chooseTarget(
										true,
										"选择" + get.translation(target) + "使用【杀】的目标",
										function (card, player, target) {
											return target != player && target != _status.event.source;
										}
									)
									.set("source", target)
									.set("ai", function (target) {
										var evt = _status.event;
										return get.effect(target, { name: "sha" }, evt.source, evt.player);
									});
							} else {
								event._result = { bool: false };
								event.goto(4);
							}
							"step 3";
							var target2 = result.targets[0];
							player.line(target2, "green");
							target
								.chooseToUse(function (card, player, event) {
									if (get.name(card) != "sha") return false;
									return lib.filter.filterCard.apply(this, arguments);
								}, "对" + get.translation(target2) + "使用一张杀，否则交给其两张牌")
								.set("targetRequired", true)
								.set("complexSelect", true)
								.set("filterTarget", function (card, player, target) {
									if (
										target != _status.event.sourcex &&
										!ui.selected.targets.includes(_status.event.sourcex)
									)
										return false;
									return lib.filter.targetEnabled.apply(this, arguments);
								})
								.set("sourcex", target2)
								.set("addCount", false);
							"step 4";
							if (!result.bool) {
								var hs = target.getCards("he");
								if (!hs.length) event.finish();
								else if (hs.length <= 2) event._result = { bool: true, cards: hs };
								else
									target.chooseCard(
										2,
										true,
										"交给" + get.translation(player) + "两张牌",
										"he"
									);
							} else event.finish();
							"step 5";
							if (result.bool) target.give(result.cards, player);
						},
					},
				},
			},
			rehuaibi: {
				audio: "huaibi",
				zhuSkill: true,
				mod: {
					maxHandcard: function (player, num) {
						if (player.storage.yaohu && player.hasZhuSkill("rehuaibi"))
							return (
								num +
								game.countPlayer(function (current) {
									return current.group == player.storage.yaohu;
								})
							);
					},
				},
				ai: { combo: "yaohu" },
			},
			//宗预
			zhibian: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer((current) => current != player && player.canCompare(current));
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							get.prompt("zhibian"),
							"与一名其他角色进行拼点",
							function (card, player, target) {
								return target != player && player.canCompare(target);
							}
						)
						.set("ai", function (target) {
							if (!_status.event.goon) return false;
							var att = get.attitude(player, target);
							if (
								att < 0 &&
								target.countCards("e", function (card) {
									return (
										player.canEquip(card) && get.effect(player, card, target, player) > 0
									);
								})
							)
								return -att / Math.sqrt(target.countCards("h"));
							if (!player.isDamaged()) return false;
							if (att <= 0) return (1 - att) / Math.sqrt(target.countCards("h"));
							return Math.sqrt((2 / att) * Math.sqrt(target.countCards("h")));
						})
						.set(
							"goon",
							(function () {
								if (
									!player.hasCard(function (card) {
										return card.number >= 14 - player.hp && get.value(card) <= 5;
									})
								)
									return false;
								return true;
							})()
						);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("zhibian", target);
						player.chooseToCompare(target);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var list = [],
							list2 = [
								"将" + get.translation(target) + "装备区/判定区中的一张牌移动到你的区域内",
								"回复1点体力",
								"背水！跳过摸牌阶段，并依次执行上述所有选项",
							];
						if (
							target.hasCard(function (card) {
								return player.canEquip(card);
							}, "e") ||
								target.hasCard(function (card) {
									return player.canAddJudge(card);
								}, "j")
						) {
							list.push("选项一");
						}
						if (player.isDamaged()) {
							list.push("选项二");
						}
						if (list.includes("选项一")) list.push("背水！");
						list.push("cancel2");
						player
							.chooseControl(list)
							.set("choiceList", list2)
							.set("ai", function (target) {
								if (
									player.isDamaged() &&
									(player.hp <= 2 ||
										!target.countCards("e", function (card) {
											return (
												player.canEquip(card) &&
												get.value(card, target) >= 4 + player.getDamagedHp()
											);
										}))
								)
									return 1;
								return 0;
							});
					} else {
						player.loseHp();
						event.finish();
					}
					"step 3";
					if (result.control != "cancel2") {
						event.control = result.control;
						if (result.control == "选项一" || result.control == "背水！") {
							player.choosePlayerCard(target, "ej", true).set("ai", get.buttonValue);
						} else event.goto(5);
					} else event.finish();
					"step 4";
					if (result.bool) {
						var card = result.cards[0];
						target.$give(card, player, false);
						game.delayx();
						if (get.position(card) == "e") player.equip(card);
						else player.addJudge(card);
					}
					"step 5";
					if (event.control == "选项二" || event.control == "背水！") {
						player.recover();
					}
					if (event.control == "背水！") player.skip("phaseDraw");
				},
			},
			yuyan: {
				audio: 2,
				trigger: { target: "useCardToTarget" },
				forced: true,
				logTarget: "player",
				filter: function (event, player) {
					return (
						event.card.name == "sha" &&
						event.card.isCard &&
						typeof get.number(event.card) == "number" &&
						player.hp < event.player.hp
					);
				},
				content: function () {
					"step 0";
					var num = get.number(trigger.card);
					if (
						num >= 13 ||
						!trigger.player.hasCard(function (card) {
							if (_status.connectMode && get.position(card) == "h") return true;
							return get.number(card) > num;
						}, "he")
					)
						event._result = { bool: false };
					else
						trigger.player
							.chooseCard(
								"he",
								function (card) {
									return get.number(card) > _status.event.number;
								},
								"交给" +
									get.translation(player) +
									"一张点数大于" +
									get.cnNumber(num) +
									"的牌，或令" +
									get.translation(trigger.card) +
									"对其无效"
							)
							.set("number", num)
							.set("", function (card) {
								if (card.name == "shan" || card.name == "tao" || card.name == "jiu")
									return false;
								return 6 - get.value(card);
							});
					"step 1";
					if (result.bool) {
						trigger.player.give(result.cards, player);
					} else {
						trigger.targets.remove(player);
						trigger.getParent().triggeredTargets2.remove(player);
						trigger.untrigger();
					}
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (
								card.name == "sha" &&
								player.hp > target.hp &&
								get.attitude(player, target) < 0
							) {
								var num = get.number(card);
								if (typeof num != "number") return false;
								var bs = player.getCards("h", function (cardx) {
									return get.number(cardx) > num && !["", "", ""].includes(cardx.name);
								});
								if (bs.length < 2) return 0;
								if (player.hasSkill("jiu") || player.hasSkill("tianxianjiu")) return;
								if (bs.length <= 2) {
									for (var i = 0; i < bs.length; i++) {
										if (get.value(bs[i]) < 6) {
											return [1, 0, 1, -0.5];
										}
									}
									return 0;
								}
								return [1, 0, 1, -0.5];
							}
						},
					},
				},
			},
			//袁涣
			qingjue: {
				audio: 2,
				trigger: { global: "useCardToPlayer" },
				logTarget: "player",
				round: 1,
				filter: function (event, player) {
					return (
						event.player != player &&
						event.target != player &&
						event.player != event.target &&
						event.player.hp > event.target.hp &&
						event.targets.length == 1 &&
						event.player.countCards("h") > 0 &&
						!event.target.isDying() &&
						!event.player.hasSkillTag("noCompareTarget") &&
						!player.hasSkillTag("noCompareSource")
					);
				},
				check: function (event, player) {
					var target = event.target,
						source = event.player;
					var eff1 = get.effect(target, event.card, source, player);
					if (eff1 >= 0) return false;
					var eff2 = get.effect(player, event.card, source, player);
					if (eff2 >= 0) return true;
					if (eff2 > eff1 / 3)
						return player.hasCard(function (card) {
							return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
						});
					if (eff2 > eff1 / 2)
						return player.hasCard(function (card) {
							return card.number > 10 && get.value(card) <= 5;
						});
					return player.hasCard(function (card) {
						return card.number > 11 && get.value(card) <= 5;
					});
				},
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					if (player.canCompare(trigger.player)) player.chooseToCompare(trigger.player);
					else event.finish();
					"step 2";
					trigger.targets.remove(trigger.target);
					trigger.getParent().triggeredTargets1.remove(trigger.target);
					trigger.untrigger();
					if (!result.bool) trigger.targets.push(player);
				},
			},
			fengjie: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return game.hasPlayer((current) => current != player);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(
							"请选择【奉节】的目标",
							"选择一名其他角色并获得如下效果直到你下回合开始：一名角色的结束阶段开始时，你将手牌摸至（至多摸至四张）或弃置至与其体力值相等。",
							lib.filter.notMe,
							true
						)
						.set("ai", function (target) {
							return (target.hp - player.countCards("h")) / get.threaten(target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						game.log(player, "选择了", target);
						player.storage.fengjie2 = target;
						player.addTempSkill("fengjie2", { player: "phaseBegin" });
						game.delayx();
					}
				},
			},
			fengjie2: {
				audio: "fengjie",
				trigger: { global: "phaseJieshuBegin" },
				forced: true,
				charlotte: true,
				onremove: true,
				sourceSkill: "fengjie",
				filter: function (event, player) {
					if (!player.storage.fengjie2 || !player.storage.fengjie2.isIn()) return false;
					var num1 = player.countCards("h"),
						num2 = player.storage.fengjie2.hp;
					return num1 != num2;
				},
				logTarget: (event, player) => player.storage.fengjie2,
				content: function () {
					var num1 = player.countCards("h"),
						num2 = player.storage.fengjie2.hp;
					if (num1 > num2) player.chooseToDiscard("h", true, num1 - num2);
					else player.drawTo(Math.min(4, num2));
				},
			},
			//陈武董袭
			spyilie: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseControl("选项一", "选项二", "背水！", "cancel2")
						.set("choiceList", [
							"本阶段内使用【杀】的次数上限+1",
							"本回合内使用【杀】被【闪】抵消时摸一张牌",
							"背水！失去1点体力并依次执行上述所有选项",
						])
						.set("ai", function () {
							if (
								player.countCards("hs", function (card) {
									return get.name(card) == "sha" && player.hasValueTarget(card);
								}) > player.getCardUsable({ name: "sha" })
							)
								return 0;
							return 1;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("spyilie");
						game.log(player, "选择了", "#g【毅烈】", "的", "#y" + result.control);
						if (result.index % 2 == 0) player.addTempSkill("spyilie_add", "phaseUseEnd");
						if (result.index > 0) player.addTempSkill("spyilie_miss");
						if (result.index == 2) player.loseHp();
					}
				},
				subSkill: {
					add: {
						charlotte: true,
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + 1;
							},
						},
					},
					miss: {
						charlotte: true,
						audio: "spyilie",
						trigger: { player: "shaMiss" },
						forced: true,
						content: function () {
							player.draw();
						},
					},
				},
			},
			spfenming: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: (event, player) =>
					game.hasPlayer((current) => lib.skill.spfenming.filterTarget(null, player, current)),
				filterTarget: function (card, player, target) {
					if (target.hp > player.hp) return false;
					return (
						!target.isLinked() ||
						target.hasCard(
							function (card) {
								return lib.filter.canBeGained(card, player, target);
							},
							target == player ? "e" : "he"
						)
					);
				},
				content: function () {
					if (!target.isLinked()) target.link();
					else player.gainPlayerCard(target, target == player ? "e" : "he", true);
				},
				ai: {
					order: 7,
					result: {
						player: function (player, target) {
							if (!target.isLinked())
								return get.effect(target, { name: "tiesuo" }, player, player);
							return get.effect(target, { name: "shunshou_copy2" }, player, player);
						},
					},
				},
			},
			//周处
			rechuhai: {
				audio: "chuhai",
				dutySkill: true,
				locked: false,
				group: ["rechuhai_add", "rechuhai_achieve", "rechuhai_fail", "rechuhai_chuhai"],
				derivation: "zhangming",
				subSkill: {
					chuhai: {
						audio: ["chuhai", 2],
						inherit: "chuhai",
						prompt: "与一名其他角色进行拼点",
					},
					add: {
						trigger: { player: "compare" },
						forced: true,
						popup: false,
						filter: function (event, player) {
							return (
								event.getParent().name == "rechuhai_chuhai" &&
								event.num1 < 13 &&
								player.countCards("e") < 4
							);
						},
						content: function () {
							var num = 4 - player.countCards("e");
							game.log(player, "的拼点牌点数+", num);
							trigger.num1 = Math.min(13, trigger.num1 + num);
						},
					},
					achieve: {
						audio: ["chuhai", 2],
						trigger: { player: "equipAfter" },
						forced: true,
						skillAnimation: true,
						animationColor: "wood",
						filter: function (event, player) {
							return player.countCards("e") > 2;
						},
						content: function () {
							player.awakenSkill("rechuhai");
							game.log(player, "成功完成使命");
							if (player.isDamaged()) player.recover(player.maxHp - player.hp);
							player.changeSkills(["zhangming"], ["xianghai"]);
						},
					},
					fail: {
						audio: "chuhai3.mp3",
						trigger: { player: "chooseToCompareAfter" },
						forced: true,
						filter: function (event, player) {
							return (
								event.getParent().name == "rechuhai_chuhai" &&
								event.num1 < 7 &&
								!event.result.bool
							);
						},
						content: function () {
							player.awakenSkill("rechuhai");
							game.log(player, "使命失败");
						},
					},
				},
			},
			zhangming: {
				audio: 2,
				trigger: { player: "useCard" },
				forced: true,
				filter: function (event, player) {
					return get.suit(event.card) == "club";
				},
				content: function () {
					trigger.directHit.addArray(
						game.filterPlayer(function (current) {
							return current != player;
						})
					);
				},
				group: "zhangming_damage",
				subSkill: {
					damage: {
						audio: "zhangming",
						trigger: { source: "damageEnd" },
						forced: true,
						usable: 1,
						filter: function (event, player) {
							return player != event.player;
						},
						logTarget: "player",
						content: function () {
							var list = [],
								cards = [],
								target = trigger.player,
								hs = target.getCards("h");
							if (hs.length > 0) {
								var card = hs.randomGet();
								list.push(get.type2(card, target));
								player.showCards(
									card,
									get.translation(player) +
										"对" +
										get.translation(target) +
										"发动了【彰名】"
								);
							}
							target.discard(card);
							for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
								var type = get.type2(ui.cardPile.childNodes[i], false);
								if (!list.includes(type)) {
									list.push(type);
									cards.push(ui.cardPile.childNodes[i]);
								}
							}
							player.gain(cards, "gain2").gaintag.add("zhangming");
							player.addTempSkill("zhangming_keep");
						},
					},
					keep: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("zhangming");
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("zhangming")) {
									return true;
								}
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("zhangming")) {
									return false;
								}
							},
						},
					},
				},
			},
			xianghai: {
				audio: 2,
				global: "xianghai_g",
				mod: {
					cardname: function (card) {
						if (get.type(card, null, false) == "equip") return "jiu";
					},
				},
				ai: {
					threaten: 2,
				},
			},
			xianghai_g: {
				mod: {
					maxHandcard: function (player, num) {
						return (
							num -
							game.countPlayer(function (current) {
								return current != player && current.hasSkill("xianghai");
							})
						);
					},
				},
			},
			chuhai: {
				audio: 3,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer((target) => player.canCompare(target, true));
				},
				filterTarget: function (card, player, target) {
					return player.canCompare(target, true);
				},
				content: function () {
					"step 0";
					player.draw();
					"step 1";
					if (player.canCompare(target)) player.chooseToCompare(target);
					else event.finish();
					"step 2";
					if (result.bool) {
						player.storage.chuhai2 = target;
						player.addTempSkill("chuhai2", "phaseUseEnd");
						if (target.countCards("h") > 0) {
							player.viewHandcards(target);
							var types = [],
								cards = [],
								hs = target.getCards("h");
							for (var i of hs) {
								types.add(get.type2(i, target));
							}
							for (var i of types) {
								var card = get.cardPile(function (card) {
									return get.type2(card, false) == i;
								});
								if (card) cards.push(card);
							}
							if (cards.length) player.gain(cards, "gain2", "log");
						}
					}
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							if (
								player.countCards("hs", function (card) {
									return (
										get.tag(card, "damage") > 0 &&
										player.canUse(card, target, null, true) &&
										get.effect(target, card, player, player) > 0 &&
										player.hasValueTarget(card, null, true)
									);
								}) > 0
							)
								return -3;
							return -1;
						},
					},
				},
			},
			chuhai2: {
				trigger: { source: "damageSource" },
				forced: true,
				charlotte: true,
				onremove: true,
				sourceSkill: "chuhai",
				filter: function (event, player) {
					if (event.player != player.storage.chuhai2) return false;
					for (var i = 1; i < 6; i++) {
						if (player.hasEmptySlot(i)) return true;
					}
					return false;
				},
				content: function () {
					for (var i = 1; i < 7; i++) {
						if (player.hasEmptySlot(i)) {
							var sub = "equip" + i,
								card = get.cardPile(function (card) {
									return (
										get.subtype(card, false) == sub &&
										!get.cardtag(card, "gifts") &&
										player.canEquip(card)
									);
								});
							if (card) {
								player.$gain2(card);
								game.delayx();
								player.equip(card);
								break;
							}
						}
					}
				},
			},
			//文鸯
			dbquedi: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				direct: true,
				usable: 1,
				filter: function (event, player) {
					return (
						(event.card.name == "sha" || event.card.name == "juedou") &&
						event.targets.length == 1 &&
						(event.target.countGainableCards(player, "h") > 0 ||
							player.hasCard(function (i) {
								return _status.connectMode || (get.type(i, null, player) == "basic" && lib.filter.cardDiscardable(i, player, "dbquedi"));
							}, "h"))
					);
				},
				content: function () {
					"step 0";
					var target = trigger.target;
					event.target = target;
					var list = [];
					if (target.countGainableCards(player, "h") > 0) list.push("选项一");
					if (
						player.hasCard(function (i) {
							return get.type(i, null, player) == "basic" && lib.filter.cardDiscardable(i, player, "dbquedi");
						}, "h")
					)
						list.push("选项二");
					list.push("背水！");
					list.push("cancel2");
					player
						.chooseControl(list)
						.set("choiceList", [
							"获得" + get.translation(target) + "的一张手牌",
							"弃置一张基本牌并令" + get.translation(trigger.card) + "伤害+1",
							"背水！减1点体力上限并执行所有选项",
						])
						.set("prompt", get.prompt("dbquedi", target))
						.set("ai", function () {
							var evt = _status.event.getTrigger(),
								player = evt.player,
								target = evt.target,
								card = evt.card;
							if (get.attitude(player, target) > 0) return "cancel2";
							var bool1 = target.countGainableCards(player, "h") > 0;
							var bool2 =
								player.hasCard(function (i) {
									return get.type(i, null, player) == "basic" && lib.filter.cardDiscardable(i, player, "dbquedi") && get.value(card, player) < 5;
								}, "h") &&
								!target.hasSkillTag("filterDamage", null, {
									player: player,
									card: card,
								});
							if (
								bool1 &&
								bool2 &&
								(target.hp <= 2 || (player.isDamaged() && player.maxHp > 3))
							)
								return "背水！";
							if (bool1) return "选项一";
							if (bool2) return "选项二";
							return "cancel2";
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("dbquedi", target);
						event.control = result.control;
						if (event.control == "背水！") player.loseMaxHp();
					} else {
						player.storage.counttrigger.dbquedi--;
						event.finish();
					}
					"step 2";
					if (
						(event.control == "选项一" || event.control == "背水！") &&
						target.countGainableCards(player, "h") > 0
					)
						player.gainPlayerCard(target, true, "h");
					"step 3";
					if (
						(event.control == "选项二" || event.control == "背水！") &&
						player.hasCard(function (i) {
							return get.type(i, null, player) == "basic" && lib.filter.cardDiscardable(i, player, "dbquedi");
						}, "h")
					) {
						player.chooseToDiscard("h", "弃置一张基本牌", { type: "basic" }, true);
					} else event.finish();
					"step 4";
					if (result.bool) trigger.getParent().baseDamage++;
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (
							tag !== "directHit_ai" ||
							!arg ||
							!arg.card ||
							!arg.target ||
							(arg.card.name != "sha" && arg.card.name != "juedou")
						)
							return false;
						if (
							player.storage.counttrigger &&
							player.storage.counttrigger.dbquedi &&
							player.storage.counttrigger.dbquedi > 0
						)
							return false;
						if (
							arg.target.countCards("h") == 1 &&
							(arg.card.name != "sha" ||
								!arg.target.hasSkillTag("freeShan", false, {
									player: player,
									card: arg.card,
								}) ||
								player.hasSkillTag("unequip", false, {
									name: arg.card ? arg.card.name : null,
									target: arg.target,
									card: arg.card,
								}) ||
								player.hasSkillTag("unequip_ai", false, {
									name: arg.card ? arg.card.name : null,
									target: arg.target,
									card: arg.card,
								}))
						)
							return true;
						return false;
					},
				},
			},
			dbzhuifeng: {
				audio: 2,
				groupSkill: true,
				enable: "chooseToUse",
				usable: 2,
				viewAsFilter: function (player) {
					return player.group == "wei" && player.hp > 0;
				},
				viewAs: { name: "juedou", isCard: true },
				filterCard: () => false,
				selectCard: -1,
				log: false,
				precontent: function () {
					"step 0";
					player.logSkill("dbzhuifeng");
					player.loseHp();
					event.forceDie = true;
					"step 1";
					//特殊处理
					if (player.isDead()) {
						player.useResult(event.result, event.getParent()).forceDie = true;
					}
				},
				ai: {
					order: function () {
						return get.order({ name: "juedou" }) - 0.5;
					},
				},
				group: "dbzhuifeng_self",
				subSkill: {
					self: {
						trigger: { player: "damageBegin2" },
						forced: true,
						filter: function (event, player) {
							var evt = event.getParent();
							return evt.skill == "dbzhuifeng" && evt.player == player;
						},
						content: function () {
							trigger.cancel();
							player.getStat().skill.dbzhuifeng = 2;
						},
					},
				},
			},
			dbchongjian: {
				audio: 2,
				groupSkill: true,
				hiddenCard: function (player, name) {
					if (
						player.group == "wu" &&
						(name == "sha" || name == "jiu") &&
						player.hasCard(function (card) {
							return get.type(card) == "equip";
						}, "hes")
					)
						return true;
					return false;
				},
				enable: "chooseToUse",
				filter: function (event, player) {
					return (
						player.group == "wu" &&
						player.hasCard(function (card) {
							return get.type(card) == "equip";
						}, "hes") &&
						(event.filterCard({ name: "sha" }, player, event) ||
							event.filterCard({ name: "jiu" }, player, event))
					);
				},
				locked: false,
				mod: {
					targetInRange: function (card) {
						if (card.storage && card.storage.dbchongjian) return true;
					},
				},
				chooseButton: {
					dialog: function () {
						var list = [];
						list.push(["基本", "", "sha"]);
						for (var i of lib.inpile_nature) list.push(["基本", "", "sha", i]);
						list.push(["基本", "", "jiu"]);
						return ui.create.dialog("冲坚", [list, "vcard"]);
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						return evt.filterCard(
							{ name: button.link[2], nature: button.link[3], isCard: true },
							player,
							evt
						);
					},
					check: function (button) {
						if (_status.event.getParent().type != "phase") return 1;
						var player = _status.event.player;
						if (
							button.link[2] == "jiu" &&
							(player.hasCard(function (card) {
								return get.name(card) == "sha";
							}, "hs") ||
								player.countCards("hes", function (card) {
									if (get.type(card) != "equip") return false;
									if (get.position(card) == "e") {
										if (player.hasSkillTag("noe")) return 10 - get.value(card) > 0;
										var sub = get.subtype(card);
										if (
											player.hasCard(function (card) {
												return (
													get.subtype(card) == sub &&
													player.canUse(card, player) &&
													get.effect(player, card, player, player) > 0
												);
											}, "hs")
										)
											return 10 - get.value(card) > 0;
									}
									return 5 - get.value(card) > 0;
								}) > 1)
						)
							return player.getUseValue({ name: "jiu" }) * 4;
						return player.getUseValue({ name: button.link[2], nature: button.link[3] }, false);
					},
					backup: function (links, player) {
						return {
							audio: "dbchongjian",
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								//isCard:true,
								storage: { dbchongjian: true },
							},
							filterCard: { type: "equip" },
							position: "hes",
							popname: true,
							precontent: function () {
								player.addTempSkill("dbchongjian_effect");
							},
							check: function (card) {
								var player = _status.event.player;
								if (get.position(card) == "e") {
									if (player.hasSkillTag("noe")) return 10 - get.value(card);
									var sub = get.subtype(card);
									if (
										player.hasCard(function (card) {
											return (
												get.subtype(card) == sub &&
												player.canUse(card, player) &&
												get.effect(player, card, player, player) > 0
											);
										}, "hs")
									)
										return 10 - get.value(card);
								}
								return 5 - get.value(card);
							},
						};
					},
					prompt: function (links) {
						return (
							"将一张装备牌当做" +
							(links[0][3] ? get.translation(links[0][3]) : "") +
							"【" +
							get.translation(links[0][2]) +
							"】使用"
						);
					},
				},
				ai: {
					unequip: true,
					respondSha: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "unequip") {
							if (
								player.group != "wu" ||
								!arg ||
								!arg.card ||
								!arg.card.storage ||
								!arg.card.storage.dbchongjian
							)
								return false;
							return true;
						}
						return (
							player.group == "wu" &&
							arg == "use" &&
							player.hasCard(function (card) {
								return get.type(card) == "equip";
							}, "hes")
						);
					},
					order: function (item, player) {
						if (_status.event.type != "phase") return 1;
						var player = _status.event.player;
						if (
							player.hasCard(function (card) {
								if (get.value(card, player) < 0) return true;
								var sub = get.subtype(card);
								return (
									player.hasCard(function (card) {
										return (
											get.subtype(card) == sub &&
											player.canUse(card, player) &&
											get.effect(player, card, player, player) > 0
										);
									}, "hs") > 0
								);
							}, "e")
						)
							return 10;
						if (
							player.countCards("hs", "sha") ||
							player.countCards("he", function (card) {
								return get.type(card) == "equip" && get.value(card, player) < 5;
							}) > 1
						)
							return get.order({ name: "jiu" }) - 0.1;
						return get.order({ name: "sha" }) - 0.1;
					},
					result: { player: 1 },
				},
				subSkill: {
					effect: {
						charlotte: true,
						mod: {
							targetInRange: function (card) {
								if (card.storage && card.storage.dbchongjian) return true;
							},
						},
						trigger: { source: "damageSource" },
						forced: true,
						logTarget: "player",
						filter: function (event, player) {
							return (
								event.parent.skill == "dbchongjian_backup" &&
								event.card.name == "sha" &&
								event.getParent().name == "sha" &&
								event.player.countGainableCards(player, "e") > 0
							);
						},
						content: function () {
							player.gainPlayerCard(trigger.player, "e", true, trigger.num);
						},
					},
				},
			},
			dbchoujue: {
				audio: 2,
				trigger: { source: "dieAfter" },
				forced: true,
				content: function () {
					player.gainMaxHp();
					player.draw(2);
					player.addSkill("counttrigger");
					if (!player.storage.counttrigger) player.storage.counttrigger = {};
					if (!player.storage.counttrigger.dbquedi) player.storage.counttrigger.dbquedi = 0;
					player.storage.counttrigger.dbquedi--;
				},
			},
			//王凌
			xingqi: {
				audio: 2,
				trigger: { player: "useCard" },
				forced: true,
				locked: false,
				filter: function (event, player) {
					return get.type(event.card, null, false) != "delay" && !player.getStorage("xingqi").includes(event.card.name);
				},
				content: function () {
					player.markAuto("xingqi", [trigger.card.name]);
					game.log(player, "获得了一个", "#g【备(" + get.translation(trigger.card.name) + ")】");
				},
				marktext: "备",
				intro: {
					content: "$",
					onunmark: function (storage, player) {
						delete player.storage.xingqi;
					},
				},
				group: "xingqi_gain",
				subSkill: {
					gain: {
						trigger: { player: "phaseJieshuBegin" },
						direct: true,
						filter: function (event, player) {
							return player.getStorage("xingqi").length > 0;
						},
						content: function () {
							"step 0";
							player.removeSkill("mibei_mark");
							player
								.chooseButton([
									"星启：是否获得一张牌？",
									[player.getStorage("xingqi"), "vcard"],
								])
								.set("ai", function (button) {
									var card = { name: button.link[2] },
										player = _status.event.player;
									if (
										!get.cardPile2(function (cardx) {
											return cardx.name == card.name;
										})
									)
										return 0;
									return get.value(card, player) * player.getUseValue(card);
								});
							"step 1";
							if (result.bool) {
								player.logSkill("xingqi");
								var name = result.links[0][2];
								game.log(player, "移去了一个", "#g【备(" + get.translation(name) + ")】");
								player.unmarkAuto("xingqi", [name]);
								var card = get.cardPile2(function (card) {
									return card.name == name;
								});
								if (card) player.gain(card, "gain2");
							}
						},
					},
				},
			},
			xinzifu: {
				audio: "zifu",
				trigger: { player: "phaseUseEnd" },
				forced: true,
				filter: function (event, player) {
					return (
						player.getStorage("xingqi").length > 0 &&
						!player.hasHistory("useCard", function (evt) {
							return evt.getParent("phaseUse") == event;
						})
					);
				},
				content: function () {
					game.log(player, "移去了所有", "#g【备】");
					player.unmarkSkill("xingqi");
					player.addTempSkill("xinzifu_limit");
					player.addMark("xinzifu_limit", 1, false);
				},
				ai: {
					neg: true,
					combo: "xingqi",
				},
				subSkill: {
					limit: {
						charlotte: true,
						markimage: "image/card/handcard.png",
						intro: {
							content: function (storage, player) {
								var num = -player.countMark("xinzifu_limit");
								return "手牌上限" + num;
							},
						},
						mod: {
							maxHandcard: function (player, num) {
								return num - player.countMark("xinzifu_limit");
							},
						},
					},
				},
			},
			mibei: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				dutySkill: true,
				forced: true,
				locked: false,
				direct: true,
				filter: function (event, player) {
					if (!player.storage.xingqi || !player.storage.xingqi.length) return false;
					var map = { basic: 0, trick: 0, equip: 0 };
					for (var i of player.storage.xingqi) {
						var type = get.type(i);
						if (typeof map[type] == "number") map[type]++;
					}
					for (var i in map) {
						if (map[i] < 2) return false;
					}
					return true;
				},
				content: function () {
					"step 0";
					player.logSkill("twmibei_achieve");
					game.log(player, "成功完成使命");
					player.awakenSkill("mibei");
					var list = ["basic", "equip", "trick"],
						cards = [];
					for (var i of list) {
						var card = get.cardPile2(function (card) {
							return get.type(card) == i;
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
					"step 1";
					player.addSkills("xinmouli");
				},
				ai: {
					combo: "xingqi"
				},
				group: ["mibei_fail", "mibei_silent"],
				derivation: "xinmouli",
				subSkill: {
					silent: {
						charlotte: true,
						trigger: { player: "phaseZhunbeiBegin" },
						silent: true,
						lastDo: true,
						filter: function (event, player) {
							return !player.getStorage("xingqi").length;
						},
						content: function () {
							player.addTempSkill("mibei_mark");
						},
					},
					mark: { charlotte: true },
					fail: {
						audio: "mibei2.mp3",
						trigger: { player: "phaseJieshuBegin" },
						filter: function (event, player) {
							return !player.getStorage("xingqi").length && player.hasSkill("mibei_mark");
						},
						forced: true,
						content: function () {
							game.log(player, "使命失败");
							player.awakenSkill("mibei");
							player.loseMaxHp();
						},
					},
				},
			},
			xinmouli: {
				audio: "mouli",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.getStorage("xingqi").length > 0;
				},
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					target
						.chooseButton(
							["谋立：是否获得一张牌？", [player.getStorage("xingqi"), "vcard"]],
							true
						)
						.set("ai", function (button) {
							var card = { name: button.link[2] },
								player = _status.event.player;
							return get.value(card, player);
						});
					"step 1";
					if (result.bool) {
						var name = result.links[0][2];
						game.log(player, "移去了一个", "#g【备(" + get.translation(name) + ")】");
						player.unmarkAuto("xingqi", [name]);
						var card = get.cardPile2(function (card) {
							return card.name == name;
						});
						if (card) target.gain(card, "gain2");
					}
				},
				ai: {
					combo: "xingqi",
					order: 1,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag("nogain")) return 0;
							return 1;
						},
					},
				},
			},
			mouli: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				position: "h",
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: false,
				check: function (card) {
					return 8 - get.value(card);
				},
				content: function () {
					player.give(cards, target);
					if (!target.storage.mouli2) target.storage.mouli2 = [];
					if (!target.storage.mouli3) target.storage.mouli3 = [];
					target.storage.mouli2.add(player);
					target.storage.mouli3.push(player);
					target.addSkill("mouli_effect");
				},
				ai: {
					threaten: 1.2,
					order: 4,
					result: {
						target: 1,
					},
				},
				subSkill: {
					effect: {
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							if (event.card.name != "sha" && event.card.name != "shan") return false;
							for (var i of player.storage.mouli3) {
								if (i.isIn()) return true;
							}
							return false;
						},
						logTarget: function (event, player) {
							return player.storage.mouli3;
						},
						content: function () {
							"step 0";
							game.delayx();
							player.storage.mouli3.sortBySeat();
							if (player.storage.mouli3.length == 1) {
								player.storage.mouli3[0].draw(3);
								player.storage.mouli3.length = 0;
								event.finish();
							} else game.asyncDraw(player.storage.mouli3, 3);
							"step 1";
							player.storage.mouli3.length = 0;
							game.delayx();
						},
						group: ["mouli_sha", "mouli_shan", "mouli_clear"],
						mark: true,
						intro: {
							content: "已因$获得“谋立”效果",
						},
					},
					sha: {
						enable: "chooseToUse",
						viewAs: { name: "sha" },
						filterCard: { color: "black" },
						position: "he",
						prompt: "将一张黑色牌当做杀使用",
						check: function (card) {
							return 6 - get.value(card);
						},
						viewAsFilter: function (player) {
							return player.countCards("he", { color: "black" }) > 0;
						},
						ai: {
							respondSha: true,
							skillTagFilter: function (player) {
								return player.countCards("he", { color: "black" }) > 0;
							},
						},
					},
					shan: {
						enable: "chooseToUse",
						viewAs: { name: "shan" },
						filterCard: { color: "red" },
						position: "he",
						prompt: "将一张红色牌当做闪使用",
						check: function (card) {
							return 7 - get.value(card);
						},
						viewAsFilter: function (player) {
							return player.countCards("he", { color: "red" }) > 0;
						},
						ai: {
							respondShan: true,
							skillTagFilter: function (player) {
								return player.countCards("he", { color: "red" }) > 0;
							},
						},
					},
					clear: {
						trigger: { global: ["phaseBegin", "dieAfter"] },
						forced: true,
						silent: true,
						popup: false,
						lastDo: true,
						forceDie: true,
						filter: function (event, player) {
							if (event.name == "die" && player == event.player) return true;
							return player.storage.mouli2.includes(event.player);
						},
						content: function () {
							if (trigger.name == "die" && player == trigger.player) {
								player.removeSkill("mouli_effect");
								delete player.storage.mouli2;
								delete player.storage.mouli3;
								return;
							}
							player.storage.mouli2.remove(trigger.player);
							while (player.storage.mouli3.includes(trigger.player))
								player.storage.mouli3.remove(trigger.player);
							if (!player.storage.mouli2.length) player.removeSkill("mouli_effect");
						},
					},
				},
			},
			zifu: {
				audio: 2,
				trigger: { global: "dieAfter" },
				forced: true,
				filter: function (event, player) {
					return event.player.storage.mouli2 && event.player.storage.mouli2.includes(player);
				},
				content: function () {
					player.loseMaxHp(2);
				},
				ai: {
					combo: "mouli",
					neg: true,
				},
			},
			//孔融
			xinlirang: {
				audio: "splirang",
				trigger: { global: "phaseDrawBegin2" },
				logTarget: "player",
				filter: function (event, player) {
					return !event.numFixed && event.player != player && player.countMark("xinlirang") == 0;
				},
				prompt2: "获得一枚“谦”并令其多摸两张牌",
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				content: function () {
					trigger.num += 2;
					player.addMark("xinlirang", 1);
					player.addTempSkill("xinlirang_gain");
				},
				marktext: "谦",
				intro: {
					name: "谦",
					content: "mark",
				},
				group: "xinlirang_skip",
				subSkill: {
					gain: {
						audio: "splirang",
						trigger: { global: "phaseDiscardEnd" },
						direct: true,
						filter: function (event, player) {
							return event.player.hasHistory("lose", function (evt) {
								return (
									evt.type == "discard" &&
									evt.cards2.filterInD("d").length > 0 &&
									evt.getParent("phaseDiscard") == event
								);
							});
						},
						content: function () {
							"step 0";
							var cards = [];
							trigger.player.getHistory("lose", function (evt) {
								if (evt.type == "discard" && evt.getParent("phaseDiscard") == trigger)
									cards.addArray(evt.cards2.filterInD("d"));
							});
							player.chooseButton(["礼让：是否获得其中至多两张牌？", cards], [1, 2]);
							"step 1";
							if (result.bool) {
								player.logSkill("xinlirang_gain", trigger.player);
								player.gain(result.links, "gain2");
							}
						},
					},
					skip: {
						audio: "splirang",
						trigger: { player: "phaseDrawBefore" },
						forced: true,
						filter: function (event, player) {
							return player.hasMark("xinlirang");
						},
						content: function () {
							trigger.cancel();
							player.removeMark("xinlirang", player.countMark("xinlirang"));
						},
					},
				},
			},
			xinmingshi: {
				audio: "spmingshi",
				trigger: { player: "damageEnd" },
				forced: true,
				logTarget: "source",
				filter: function (event, player) {
					return event.source && event.source.isIn() && player.hasMark("xinlirang") && event.source.countCards("hej") > 0;
				},
				content: function () {
					"step 0";
					trigger.source
						.discardPlayerCard(trigger.source, "hej", true)
						.set("color", get.attitude(trigger.source, player) > 0 ? "red" : "black")
						.set("ai", function (card) {
							return (get.color(card.link) == _status.event.color ? 4 : 0) - get.value(card.link);
						});
					"step 1";
					if (result.bool && result.cards && result.cards.length) {
						var card = result.cards[0];
						if (get.color(card, trigger.source) == "red") player.recover();
						else if (get.position(card, true) == "d") player.gain(card, "gain2");
					}
				},
				ai: {
					combo: "xinlirang",
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage") && target.hasMark("xinlirang")) {
								var cards = [card];
								if (card.cards && card.cards.length) cards.addArray(card.cards);
								if (ui.selected.cards.length) cards.addArray(ui.selected.cards);
								if (
									!player.countCards("he", function (card) {
										return !cards.includes(card);
									})
								)
									return;
								if (
									!player.countCards("h", function (card) {
										return (
											!cards.includes(card) &&
											get.color(card) == "black" &&
											get.value(card, player) < 6
										);
									})
								)
									return "zerotarget";
								return 0.5;
							}
						},
					},
				},
			},
			spmingshi: {
				audio: 2,
				trigger: { player: "damageEnd" },
				forced: true,
				logTarget: "source",
				filter: function (event, player) {
					return event.source && player != event.source && event.source.countCards("he") > 0;
				},
				content: function () {
					"step 0";
					event.count = trigger.num;
					"step 1";
					event.count--;
					trigger.source.chooseToDiscard("he", true);
					"step 2";
					if (
						event.count > 0 &&
						result.bool &&
						lib.skill.spmingshi.filter(trigger, player) &&
						player.hasSkill("spmingshi")
					)
						event.goto(1);
				},
				ai: {
					threaten: 0.8,
					maixie: true,
					maixie_defend: true,
				},
			},
			splirang: {
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i of hs) {
						if (!lib.filter.cardDiscardable(i, player, "splirang")) return false;
					}
					return true;
				},
				filterCard: true,
				selectCard: -1,
				content: function () {
					"step 0";
					cards = cards.filterInD("d");
					if (!cards.length || player.hp < 1) event.goto(3);
					else
						player
							.chooseButton(
								["将任意张牌交给一名其他角色", cards],
								[1, Math.min(cards.length, player.hp)]
							)
							.set("ai", function (button) {
								return get.value(button.link);
							});
					"step 1";
					if (result.bool) {
						event.cards = result.links;
						player
							.chooseTarget(
								true,
								"令一名角色获得" + get.translation(event.cards),
								lib.filter.notMe
							)
							.set("ai", function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) att /= 10;
								if (target.hasJudge("lebu")) att /= 5;
								return att;
							});
					} else event.goto(3);
					"step 2";
					if (result.targets && result.targets.length) {
						var target = result.targets[0];
						player.line(target, "green");
						target.gain(cards, "gain2");
					}
					"step 3";
					player.draw();
				},
				ai: {
					order: 0.1,
					result: {
						player: function (player) {
							var hs = player.getCards("h");
							if (
								hs.length <= player.hp &&
								game.hasPlayer(function (current) {
									return (
										current != player &&
										get.attitude(player, current) > 0 &&
										!current.hasJudge("lebu") &&
										!current.hasSkillTag("nogain")
									);
								})
							)
								return 1;
							if (get.value(hs, player) < 6) return 1;
							return 0;
						},
					},
				},
			},
			//糜夫人
			xinguixiu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					return player.hp % 2 == 1 || player.isDamaged();
				},
				content: function () {
					if (player.hp % 2 == 1) player.draw();
					else player.recover();
				},
			},
			qingyu: {
				audio: 3,
				dutySkill: true,
				locked: false,
				group: ["qingyu_achieve", "qingyu_fail", "qingyu_defend"],
				subSkill: {
					defend: {
						audio: "qingyu1.mp3",
						trigger: { player: "damageBegin2" },
						filter: function (event, player) {
							return (
								player.countCards("he", function (card) {
									return lib.filter.cardDiscardable(card, player, "qingyu_defend");
								}) > 1
							);
						},
						forced: true,
						content: function () {
							trigger.cancel();
							player.chooseToDiscard(2, "he", true);
						},
					},
					achieve: {
						audio: "qingyu3.mp3",
						trigger: { player: "phaseZhunbeiBegin" },
						forced: true,
						skillAnimation: true,
						animationColor: "fire",
						filter: function (event, player) {
							return player.isHealthy() && player.countCards("h") == 0;
						},
						content: function () {
							game.log(player, "成功完成使命");
							player.awakenSkill("qingyu");
							player.addSkills("xuancun");
						},
					},
					fail: {
						audio: "qingyu2.mp3",
						trigger: { player: "dying" },
						forced: true,
						content: function () {
							game.log(player, "使命失败");
							player.awakenSkill("qingyu");
							player.loseMaxHp();
						},
					},
				},
				derivation: "xuancun",
			},
			xuancun: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				filter: function (event, player) {
					return player != event.player && player.countCards("h") < player.hp;
				},
				logTarget: "player",
				check: function (event, player) {
					return get.attitude(player, event.player) > 0;
				},
				prompt2: function (event, player) {
					return "令其摸" + get.cnNumber(Math.min(2, player.hp - player.countCards("h"))) + "张牌";
				},
				content: function () {
					trigger.player.draw(Math.min(2, player.hp - player.countCards("h")));
				},
			},
			//羊祜
			mingfa: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.storage.mingfa &&
						player.countCards("h") > 0 &&
						player.getCards("he").includes(player.storage.mingfa) &&
						!player.hasSkillTag("noCompareSource") &&
						game.hasPlayer(function (current) {
							return current != player && player.canCompare(current);
						})
					);
				},
				content: function () {
					"step 0";
					event.card = player.storage.mingfa;
					delete player.storage.mingfa;
					player
						.chooseTarget(
							get.prompt("mingfa"),
							"用" + get.translation(event.card) + "和一名其他角色拼点",
							function (card, player, target) {
								return player.canCompare(target);
							}
						)
						.set("ai", function (target) {
							var player = _status.event.player,
								card = _status.event.getParent().card;
							if (
								card.number > 9 ||
								!target.countCards("h", function (cardx) {
									return cardx.number >= card.number + 2;
								})
							)
								return -get.attitude(player, target) / Math.sqrt(target.countCards("h"));
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("mingfa", target);
						var next = player.chooseToCompare(target);
						if (!next.fixedResult) next.fixedResult = {};
						next.fixedResult[player.playerid] = event.card;
					} else {
						player.removeGaintag("mingfa");
						event.finish();
					}
					"step 2";
					if (result.bool) {
						player.gainPlayerCard(target, true, "he");
						if (event.card.number == 1) event.finish();
					} else {
						player.addTempSkill("mingfa_block");
						event.finish();
					}
					"step 3";
					var card = get.cardPile2(function (card) {
						return card.number == event.card.number - 1;
					});
					if (card) player.gain(card, "gain2");
				},
				group: ["mingfa_choose", "mingfa_add", "mingfa_mark"],
				subSkill: {
					block: {
						mod: {
							playerEnabled: function (card, player, target) {
								if (player != target) return false;
							},
						},
					},
					choose: {
						trigger: { player: "phaseJieshuBegin" },
						direct: true,
						filter: function (event, player) {
							return player.countCards("he") > 0;
						},
						content: function () {
							"step 0";
							player
								.chooseCard("he", get.prompt("mingfa"), "选择展示自己的一张牌")
								.set("ai", function (card) {
									return (
										Math.min(13, get.number(card) + 2) /
										Math.pow(Math.min(2, get.value(card)), 0.25)
									);
								});
							"step 1";
							if (result.bool) {
								var card = result.cards[0];
								player.logSkill("mingfa");
								player.removeGaintag("mingfa");
								player.addGaintag(card, "mingfa");
								player.storage.mingfa = card;
								player.showCards(card, get.translation(player) + "发动了【明伐】");
							}
						},
					},
					add: {
						trigger: { player: "compare", target: "compare" },
						filter: function (event, player) {
							if (event.player == player) return !event.iwhile;
							return true;
						},
						forced: true,
						locked: false,
						content: function () {
							if (player == trigger.player) {
								trigger.num1 += 2;
								if (trigger.num1 > 13) trigger.num1 = 13;
							} else {
								trigger.num2 += 2;
								if (trigger.num2 > 13) trigger.num2 = 13;
							}
							game.log(player, "的拼点牌点数+2");
						},
					},
					mark: {
						trigger: { player: "gainEnd" },
						silent: true,
						firstDo: true,
						filter: function (event, player) {
							return (
								player.storage.mingfa &&
								event.cards.includes(player.storage.mingfa) &&
								player.getCards("h").includes(player.storage.mingfa)
							);
						},
						content: function () {
							player.addGaintag(player.storage.mingfa, "mingfa");
						},
					},
				},
			},
			rongbei: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return game.hasPlayer((current) => lib.skill.rongbei.filterTarget(null, player, current));
				},
				filterTarget: function (card, player, target) {
					for (var i = 1; i < 6; i++) {
						if (target.hasEmptySlot(i)) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					event.num = 1;
					player.awakenSkill("rongbei");
					"step 1";
					while (!target.hasEmptySlot(event.num)) {
						event.num++;
						if (event.num > 5) {
							event.finish();
							return;
						}
					}
					var card = get.cardPile2(function (card) {
						return get.subtype(card) == "equip" + event.num && target.canUse(card, target);
					});
					if (card) {
						target.chooseUseTarget(card, true, "nopopup");
					}
					event.num++;
					if (event.num <= 5) event.redo();
				},
				ai: {
					order: 5,
					result: {
						target: function (player, target) {
							return (
								(target.hasSkillTag("noe") ? 2 : 1) *
								(5 - target.countCards("e") - target.countDisabled())
							);
						},
					},
				},
			},
			//桥公
			yizhu: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				locked: false,
				content: function () {
					"step 0";
					player.draw(2);
					"step 1";
					var hs = player.getCards("he");
					if (!hs.length) event.finish();
					else if (hs.length <= 2) event._result = { bool: true, cards: hs };
					else player.chooseCard("he", true, 2, "选择两张牌洗入牌堆");
					"step 2";
					if (result.bool) {
						player.$throw(result.cards.length, 1000);
						player.lose(result.cards, ui.cardPile).insert_index = function () {
							return ui.cardPile.childNodes[get.rand(0, game.players.length * 2 - 2)];
						};
						player.markAuto("yizhu", result.cards);
					} else event.finish();
					"step 3";
					game.updateRoundNumber();
					game.delayx();
				},
				intro: {
					mark: function (dialog, content, player) {
						if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
						else {
							var names = [];
							for (var i of content) names.add(i.name);
							return get.translation(names);
						}
					},
				},
				group: "yizhu_use",
				subSkill: {
					use: {
						audio: "yizhu",
						trigger: { global: "useCardToPlayer" },
						filter: function (event, player) {
							return (
								player.storage.yizhu &&
								player.storage.yizhu.length &&
								event.player != player &&
								event.targets.length == 1 &&
								event.cards.filter(function (i) {
									return player.storage.yizhu.includes(i);
								}).length > 0
							);
						},
						logTarget: "player",
						check: function (event, player) {
							return get.effect(event.targets[0], event.card, event.player, player) < 0;
						},
						prompt2: function (event, player) {
							return "令" + get.translation(event.card) + "无效";
						},
						content: function () {
							trigger.cancel();
							trigger.targets.length = 0;
							trigger.getParent().triggeredTargets1.length = 0;
							var list = trigger.cards.filter(function (i) {
								return player.storage.yizhu.includes(i);
							});
							player.unmarkAuto("yizhu", list);
							game.delayx();
						},
					},
				},
			},
			luanchou: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				selectTarget: 2,
				filterTarget: true,
				multitarget: true,
				multiline: true,
				content: function () {
					game.countPlayer(function (current) {
						var num = current.countMark("luanchou");
						if (num) current.removeMark("luanchou", num);
					});
					targets.sortBySeat();
					for (var i of targets) i.addMark("luanchou", 1);
				},
				global: ["gonghuan", "gonghuan_clear"],
				derivation: "gonghuan",
				marktext: "姻",
				intro: {
					name: "共患",
					content: () => lib.translate.gonghuan_info,
					onunmark: true,
				},
				ai: {
					order: 10,
					expose: 0.2,
					result: {
						target: function (player, target) {
							if (!ui.selected.targets.length) return -Math.pow(target.hp, 3);
							if (target.hp >= ui.selected.targets[0].hp) return 0;
							return Math.pow(ui.selected.targets[0].hp - target.hp, 3);
						},
					},
				},
			},
			gonghuan: {
				audio: 2,
				forceaudio: true,
				trigger: { global: "damageBegin4" },
				usable: 1,
				forced: true,
				logTarget: "player",
				filter: function (event, player) {
					return (
						event.player.hp < player.hp &&
						player.hasMark("luanchou") &&
						event.player.hasMark("luanchou") &&
						game.hasPlayer(function (current) {
							return current.hasSkill("luanchou");
						})
					);
				},
				content: function () {
					trigger._gonghuan_player = trigger.player;
					trigger.player = player;
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (_status.luanchou_judging) return;
							if (get.tag(card, "damage") && target.hasMark("luanchou")) {
								var other = game.findPlayer(function (current) {
									return (
										current != target &&
										current.hasMark("luanchou") &&
										current.hp > target.hp &&
										(!current.storage.counttrigger ||
											!current.storage.counttrigger.gonghuan)
									);
								});
								if (!other) return;
								_status.luanchou_judging = true;
								var eff = [
									0,
									0,
									0,
									get.damageEffect(other, player, player, get.nature(card)) /
										get.attitude(player, player),
								];
								delete _status.luanchou_judging;
								return eff;
							}
						},
					},
				},
				subSkill: {
					clear: {
						trigger: { player: "damageEnd" },
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event._gonghuan_player;
						},
						content: function () {
							player.removeMark("luanchou", player.countMark("luanchou"));
							trigger._gonghuan_player.removeMark(
								"luanchou",
								trigger._gonghuan_player.countMark("luanchou")
							);
						},
					},
				},
			},
			//刘璋
			xiusheng: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return (
						player.storage.yinlang &&
						game.hasPlayer(function (current) {
							return current.group == player.storage.yinlang;
						})
					);
				},
				content: function () {
					"step 0";
					if (player.storage.xiusheng && player.storage.xiusheng.length > 0)
						player.unmarkSkill("xiusheng");
					"step 1";
					event.num = game.countPlayer(function (current) {
						return current.group == player.storage.yinlang;
					});
					if (event.num > 0) player.draw(event.num);
					else event.finish();
					"step 2";
					var he = player.getCards("he");
					if (!he.length) event.finish();
					else if (he.length < num) event._result = { bool: true, cards: he };
					else player.chooseCard("he", true, num, "选择" + get.cnNumber(num) + "张牌作为生");
					"step 3";
					if (result.bool) {
						var cards = result.cards;
						player.markAuto("xiusheng", cards);
						game.log(player, "将", cards, "放在了武将牌上");
						player.lose(cards, ui.special, "toStorage");
					}
					"step 4";
					game.delayx();
				},
				intro: {
					content: "cards",
					onunmark: "throw",
				},
				ai: { combo: "yinlang" },
			},
			yinlang: {
				audio: 2,
				trigger: { player: "phaseBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						!player.hasSkill("yinlang_round") &&
						game.hasPlayer(function (current) {
							return current.group && current.group != "unknown";
						})
					);
				},
				content: function () {
					"step 0";
					var list = [];
					game.countPlayer(function (current) {
						if (current.group && current.group != "unknown") list.add(current.group);
					});
					list.sort(function (a, b) {
						return lib.group.indexOf(a) - lib.group.indexOf(b);
					});
					if (!player.hasSkill("yinlang")) list.push("cancel2");
					player
						.chooseControl(list)
						.set("prompt", "引狼：请选择一个势力")
						.set("ai", function () {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								var getn = function (group) {
									return game.countPlayer(function (current) {
										if (current.group != group) return false;
										if (get.attitude(current, player) > 0) return 1.5;
										if (!current.inRange(player)) return 1;
										return 0.6;
									});
								};
								list.sort(function (a, b) {
									return getn(b) - getn(a);
								});
								return list[0];
							})()
						);
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill(
							"yinlang",
							game.filterPlayer(function (current) {
								return current.group == result.control;
							})
						);
						game.log(player, "选择了", "#y" + get.translation(result.control + 2));
						player.storage.yinlang = result.control;
						player.markSkill("yinlang");
					}
				},
				ai: { combo: "xiusheng" },
				intro: { content: "已选择了$势力" },
				group: "yinlang_gain",
				subSkill: {
					round: {},
					gain: {
						audio: "yinlang",
						trigger: { global: "phaseUseBegin" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (
								event.player.group == player.storage.yinlang &&
								event.player.isIn() &&
								player.getStorage("xiusheng").length > 0
							);
						},
						logTarget: "player",
						content: function () {
							"step 0";
							var str = get.translation(player);
							event.target = trigger.player;
							event.target
								.chooseControl()
								.set("choiceList", [
									"获得" + str + "的一张“生”，然后本阶段使用牌时只能指定其为目标",
									"令" + str + "获得一张“生”",
								])
								.set("ai", function () {
									var evt = _status.event.getParent(),
										player = evt.target,
										target = evt.player;
									if (get.attitude(player, target) > 0) return 1;
									if (
										!player.countCards("hs", function (card) {
											return (
												player.hasValueTarget(card, null, true) &&
												(!player.canUse(card, target, null, true) ||
													get.effect(target, card, player, player) < 0)
											);
										})
									)
										return 0;
									return 1;
								});
							"step 1";
							event.gainner = result.index == 0 ? target : player;
							if (result.index == 0) event.block = true;
							event.gainner.chooseButton(["选择获得一张“生”", player.storage.xiusheng], true);
							"step 2";
							player.unmarkAuto("xiusheng", result.links);
							event.gainner.gain(result.links, "gain2");
							if (event.block) {
								target.markAuto("yinlang_block", [player]);
								target.addTempSkill("yinlang_block", "phaseUseAfter");
							}
						},
					},
					block: {
						mod: {
							playerEnabled: function (card, player, target) {
								var info = get.info(card);
								if (info && info.singleCard && ui.selected.cards.length) return;
								if (!player.getStorage("yinlang_block").includes(target)) return false;
							},
						},
						onremove: true,
					},
				},
			},
			huaibi: {
				audio: 2,
				zhuSkill: true,
				mod: {
					maxHandcard: function (player, num) {
						if (player.storage.yinlang && player.hasZhuSkill("huaibi"))
							return (
								num +
								game.countPlayer(function (current) {
									return current.group == player.storage.yinlang;
								})
							);
					},
				},
				ai: { combo: "yinlang" },
			},
			//张温
			gebo: {
				audio: 2,
				trigger: { global: "recoverAfter" },
				forced: true,
				content: function () {
					game.cardsGotoSpecial(get.cards(), "toRenku");
				},
				ai: {
					combo: "spsongshu"
				},
			},
			spsongshu: {
				audio: 2,
				trigger: { global: "phaseDrawBegin1" },
				logTarget: "player",
				filter: function (event, player) {
					return (
						event.player.hp > player.hp &&
						player.hp > 0 &&
						!event.numFixed &&
						_status.renku.length > 0
					);
				},
				check: function (event, player) {
					var num = Math.min(5, player.hp, _status.renku.length);
					if (num <= event.num) return get.attitude(player, event.player) < 0;
					return false;
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					var num = Math.min(5, player.hp, _status.renku.length);
					trigger.player.chooseButton(
						["选择获得" + get.cnNumber(num) + "张牌", _status.renku],
						true,
						num
					);
					"step 1";
					if (result.bool) {
						var cards = result.links;
						_status.renku.removeArray(cards);
						game.updateRenku();
						trigger.player.gain(cards, "gain2", "fromRenku");
						trigger.player.addTempSkill("spsongshu_block");
					}
				},
				init: function (player) {
					player.storage.renku = true;
				},
				subSkill: {
					block: {
						mod: {
							playerEnabled: function (card, player, target) {
								if (player != target) return false;
							},
						},
						mark: true,
						intro: { content: "不能对其他角色使用牌" },
					},
				},
				ai: {
					combo: "gebo"
				},
			},
			//张机
			jishi: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				forced: true,
				filter: function (event, player) {
					return (
						event.cards.filterInD().length > 0 &&
						!player.getHistory("sourceDamage", function (evt) {
							return evt.card == event.card;
						}).length
					);
				},
				content: function () {
					var cards = trigger.cards.filterInD();
					game.log(player, "将", cards, "置于了仁库");
					game.cardsGotoSpecial(cards, "toRenku");
				},
				init: function (player) {
					player.storage.renku = true;
				},
				group: "jishi_draw",
				subSkill: {
					draw: {
						audio: "jishi",
						trigger: {
							global: ["gainAfter", "cardsDiscardAfter"],
						},
						forced: true,
						filter: function (event, player) {
							return event.fromRenku == true && !event.outRange;
						},
						content: function () {
							player.draw();
						},
					},
				},
				ai: {
					combo: "binglun"
				},
			},
			xinliaoyi: {
				audio: "liaoyi",
				trigger: { global: "phaseBegin" },
				filter: function (event, player) {
					if (player == event.player) return false;
					if (_status.renku.length) return true;
					return event.player.countCards("h") > event.player.hp;
				},
				direct: true,
				content: function () {
					"step 0";
					var target = trigger.player;
					event.target = target;
					var num = Math.max(0, target.countCards("h") - target.hp);
					var choiceList = [
						"令其从仁库中获得一张牌",
						"令其将" + get.cnNumber(num) + "张手牌置入仁库",
					];
					var choices = [];
					if (_status.renku.length) choices.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
					if (target.countCards("h") > target.hp) {
						event.num = num;
						choices.push("选项二");
					} else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					if (!choices.length) event.finish();
					else
						player
							.chooseControl(choices, "cancel2")
							.set("prompt", get.prompt("xinliaoyi", target))
							.set("choiceList", choiceList)
							.set("ai", function () {
								var player = _status.event.player,
									target = _status.event.getTrigger().player;
								var att = get.attitude(player, target);
								if (att > 0) {
									if (_status.renku.length > 0) return "选项一";
									return 0;
								}
								if (target.countCards("h") > target.hp) return "选项二";
								return "cancel2";
							});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("xinliaoyi", target);
						if (result.control == "选项一") {
							target
								.chooseButton(true, ["选择获得一张牌", _status.renku])
								.set("ai", function (button) {
									return get.value(button.link, _status.event.player);
								});
							event.goto(4);
						} else {
							var hs = target.getCards("h");
							if (hs.length <= num) event._result = { bool: true, cards: hs };
							else
								target.chooseCard(
									"h",
									true,
									"将" + get.cnNumber(num) + "张手牌置于仁库中",
									num
								);
						}
					} else event.finish();
					"step 2";
					if (result.bool) {
						target.$throw(result.cards, 1000);
						game.log(target, "将", result.cards, "置入了仁库");
						target.lose(result.cards, ui.special, "toRenku");
					} else event.finish();
					"step 3";
					game.delayx();
					event.finish();
					"step 4";
					var cards = result.links;
					_status.renku.removeArray(cards);
					game.updateRenku();
					target.gain(cards, "gain2", "fromRenku");
				},
				init: function (player) {
					player.storage.renku = true;
				},
				ai: { threaten: 3.4 },
			},
			liaoyi: {
				audio: 2,
				trigger: { global: "phaseBegin" },
				filter: function (event, player) {
					if (player == event.player) return false;
					var num = event.player.hp - event.player.countCards("h");
					if (num < 0) return true;
					return num > 0 && _status.renku.length >= Math.min(4, num);
				},
				logTarget: "player",
				prompt2: function (event, player) {
					var target = event.player,
						num = target.hp - target.countCards("h");
					if (num < 0)
						return (
							"令" +
							get.translation(target) +
							"将" +
							get.cnNumber(Math.min(4, -num)) +
							"张牌置入仁库"
						);
					return (
						"令" +
						get.translation(target) +
						"从仁库中获得" +
						get.cnNumber(Math.min(4, num)) +
						"张牌"
					);
				},
				check: function (event, player) {
					var target = event.player,
						num = target.hp - target.countCards("h"),
						att = get.attitude(player, target);
					if (num < 0) {
						if (
							target.countCards("e", function (card) {
								return get.value(card, target) <= 0;
							}) >=
							-num / 2
						)
							return att > 0;
						return att <= 0;
					}
					return att > 0;
				},
				content: function () {
					"step 0";
					var target = trigger.player,
						num = target.hp - target.countCards("h");
					event.target = target;
					if (num < 0) {
						num = Math.min(4, -num);
						target.chooseCard("he", true, "将" + get.cnNumber(num) + "张牌置于仁库中", num);
					} else {
						num = Math.min(4, num);
						target
							.chooseButton(["选择获得" + get.cnNumber(num) + "张牌", _status.renku], num, true)
							.set("ai", function (button) {
								return get.value(button.link, _status.event.player);
							});
						event.goto(3);
					}
					"step 1";
					if (result.bool) {
						target.$throw(result.cards, 1000);
						game.log(target, "将", result.cards, "置入了仁库");
						target.lose(result.cards, ui.special, "toRenku");
					} else event.finish();
					"step 2";
					game.delayx();
					event.finish();
					"step 3";
					var cards = result.links;
					_status.renku.removeArray(cards);
					game.updateRenku();
					target.gain(cards, "gain2", "fromRenku");
				},
			},
			binglun: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return _status.renku.length > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("病论", _status.renku);
					},
					backup: function (links, player) {
						var obj = lib.skill.binglun_backup;
						obj.card = links[0];
						return obj;
					},
					prompt: () => "请选择【病论】的目标",
				},
				subSkill: {
					backup: {
						audio: "binglun",
						filterCard: () => false,
						selectCard: -1,
						filterTarget: true,
						delay: false,
						content: function () {
							"step 0";
							var card = lib.skill.binglun_backup.card;
							game.log(card, "从仁库进入了弃牌堆");
							player.$throw(card, 1000);
							game.delayx();
							game.cardsDiscard(card).fromRenku = true;
							_status.renku.remove(card);
							game.updateRenku();
							"step 1";
							target
								.chooseControl()
								.set("choiceList", ["摸一张牌", "于自己的下回合结束后回复1点体力"])
								.set("ai", function () {
									if (_status.event.player.isHealthy()) return 0;
									return 1;
								});
							"step 2";
							if (result.index == 0) target.draw();
							else {
								target.addSkill("binglun_recover");
								target.addMark("binglun_recover", 1, false);
							}
						},
						ai: {
							result: {
								target: function (player, target) {
									if (target.isDamaged()) return 1.5;
									return 1;
								},
							},
						},
					},
					recover: {
						trigger: { player: "phaseEnd" },
						forced: true,
						popup: false,
						onremove: true,
						charlotte: true,
						content: function () {
							if (player.isDamaged()) {
								player.logSkill("binglun_recover");
								player.recover(player.countMark("binglun_recover"));
							}
							player.removeSkill("binglun_recover");
						},
						intro: {
							content: "下回合结束时回复#点体力",
						},
						ai: { threaten: 1.7 },
					},
				},
				ai: {
					combo: "jishi",
					order: 2,
					result: {
						player: 1,
					},
				},
			},
			mjweipo: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasSkill("mjweipo_used")) return false;
					return game.hasPlayer(function (current) {
						return !current.hasSkill("mjweipo_effect");
					});
				},
				filterTarget: function (card, player, target) {
					return !target.hasSkill("mjweipo_effect");
				},
				content: function () {
					"step 0";
					player.addTempSkill("mjweipo_used");
					var list = ["binglinchengxiax"];
					list.addArray(get.zhinangs());
					player
						.chooseButton(["危迫：选择一个智囊", [list, "vcard"]], true)
						.set("ai", function (button) {
							return _status.event.getParent().target.getUseValue({ name: button.link[2] });
						});
					"step 1";
					if (result.bool) {
						var name = result.links[0][2];
						game.log(player, "选择了", "#y" + get.translation(name));
						target.storage.mjweipo_effect = name;
						target.storage.mjweipo_source = player;
						target.addSkill("mjweipo_effect");
						game.delayx();
					}
				},
				subSkill: {
					used: {
						charlotte: true,
					},
				},
				ai: {
					order: 7.1,
					result: {
						target: function (player, target) {
							if (target == player) return player.countCards("hs", "sha") > 0 ? 10 : 0.01;
							return (target.countCards("hs", "sha") + 0.5) * Math.sqrt(Math.max(1, target.hp));
						},
					},
				},
			},
			mjweipo_effect: {
				audio: "mjweipo",
				enable: "phaseUse",
				sourceSkill: "mjweipo",
				filter: function (event, player) {
					return player.countCards("h", "sha") > 0;
				},
				prompt: function () {
					return (
						"弃置一张【杀】并获得一张" +
						get.translation(_status.event.player.storage.mjweipo_effect)
					);
				},
				filterCard: { name: "sha" },
				check: function (card) {
					return 6 - get.value(card);
				},
				position: "h",
				popname: true,
				content: function () {
					var name = player.storage.mjweipo_effect,
						card = false;
					if (name == "binglinchengxiax") {
						if (!_status.binglinchengxiax) {
							_status.binglinchengxiax = [
								["spade", 7],
								["club", 7],
								["club", 13],
							];
							game.broadcastAll(function () {
								lib.inpile.add("binglinchengxiax");
							});
						}
						if (_status.binglinchengxiax.length) {
							var info = _status.binglinchengxiax.randomRemove();
							card = game.createCard2("binglinchengxiax", info[0], info[1]);
						}
					}
					if (!card) card = get.cardPile2(name);
					if (card) player.gain(card, "gain2");
					player.removeSkill("mjweipo_effect");
				},
				ai: {
					order: 7,
					result: { player: 1 },
				},
				mark: true,
				marktext: "迫",
				intro: { content: "可弃置一张【杀】并获得【$】" },
				group: "mjweipo_remove",
			},
			mjweipo_remove: {
				trigger: { global: ["phaseBegin", "die"] },
				forced: true,
				firstDo: true,
				popup: false,
				sourceSkill: "mjweipo",
				filter: function (event, player) {
					return event.player == player.storage.mjweipo_source;
				},
				content: function () {
					player.removeSkill("mjweipo_effect");
				},
			},
			mjchenshi: {
				audio: 2,
				global: ["mjchenshi_player", "mjchenshi_target"],
				ai: { combo: "mjweipo" },
			},
			mjchenshi_player: {
				trigger: { player: "useCardToPlayered" },
				direct: true,
				sourceSkill: "mjchenshi",
				filter: function (event, player) {
					if (!event.card || event.card.name != "binglinchengxiax" || !event.isFirstTarget)
						return false;
					return (
						player.countCards("he") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.hasSkill("mjchenshi");
						})
					);
				},
				content: function () {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current != player && current.hasSkill("mjchenshi");
					});
					player.chooseCardTarget({
						prompt:
							"是否交给" +
							get.translation(list) +
							"一张牌，将牌堆顶三张牌中不为【杀】的牌置于弃牌堆？",
						filterCard: true,
						position: "he",
						filterTarget: function (card, player, target) {
							return _status.event.list.includes(target);
						},
						list: list,
						selectTarget: list.length > 1 ? 1 : -1,
						goon: (function () {
							for (var i of list) {
								if (get.attitude(player, i) > 0) return 1;
								return -1;
							}
						})(),
						ai1: function (card) {
							if (_status.event.goon > 0) return 7 - get.value(card);
							return 0.01 - get.value(card);
						},
						ai2: function (target) {
							var card = ui.selected.cards[0];
							return get.value(card, target) * get.attitude(_status.event.player, target);
						},
					});
					"step 1";
					if (result.bool && result.cards.length && result.targets.length) {
						var target = result.targets[0];
						target.logSkill("mjchenshi");
						player.line(target, "green");
						player.give(result.cards, target);
						trigger.getParent().mjchenshi_ai = true;
					} else event.finish();
					"step 2";
					var cards = get.cards(3);
					for (var i = cards.length - 1; i >= 0; i--) {
						if (cards[i].name == "sha") {
							cards[i].fix();
							ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
							cards.splice(i, 1);
						}
					}
					if (cards.length) {
						player.$throw(cards, 1000);
						game.delayx();
						game.cardsDiscard(cards);
						game.log(cards, "进入了弃牌堆");
					}
				},
			},
			mjchenshi_target: {
				trigger: { target: "useCardToTargeted" },
				direct: true,
				sourceSkill: "mjchenshi",
				filter: function (event, player) {
					if (!event.card || event.card.name != "binglinchengxiax") return false;
					return (
						player.countCards("he") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.hasSkill("mjchenshi");
						})
					);
				},
				content: function () {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current != player && current.hasSkill("mjchenshi");
					});
					player.chooseCardTarget({
						prompt:
							"是否交给" +
							get.translation(list) +
							"一张牌，将牌堆顶三张牌中的【杀】置于弃牌堆？",
						filterCard: true,
						position: "he",
						filterTarget: function (card, player, target) {
							return _status.event.list.includes(target);
						},
						list: list,
						selectTarget: list.length > 1 ? 1 : -1,
						goon: (function () {
							if (trigger.getParent().chenshi_ai) return 1;
							for (var i of list) {
								if (get.attitude(player, i) > 0) return 1;
								return -1;
							}
						})(),
						ai1: function (card) {
							if (_status.event.goon > 0) return 7 - get.value(card);
							return 3 - get.value(card);
						},
						ai2: function (target) {
							var card = ui.selected.cards[0];
							return Math.max(
								0.1,
								get.value(card, target) * get.attitude(_status.event.player, target)
							);
						},
					});
					"step 1";
					if (result.bool && result.cards.length && result.targets.length) {
						var target = result.targets[0];
						target.logSkill("mjchenshi");
						player.line(target, "green");
						player.give(result.cards, target);
					} else event.finish();
					"step 2";
					var cards = get.cards(3);
					for (var i = cards.length - 1; i >= 0; i--) {
						if (cards[i].name != "sha") {
							cards[i].fix();
							ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
							cards.splice(i, 1);
						}
					}
					if (cards.length) {
						player.$throw(cards, 1000);
						game.delayx();
						game.cardsDiscard(cards);
						game.log(cards, "进入了弃牌堆");
					}
				},
			},
			mjmouzhi: {
				audio: 2,
				trigger: { player: "damageBegin2" },
				forced: true,
				filter: function (event, player) {
					if (!event.card || get.suit(event.card) == "none") return false;
					var all = player.getAllHistory("damage");
					if (!all.length) return false;
					return (
						all[all.length - 1].card && get.suit(all[all.length - 1].card) == get.suit(event.card)
					);
				},
				content: function () {
					trigger.cancel();
				},
				group: "mjmouzhi_mark",
				intro: { content: "上次受到伤害的花色：$" },
				ai: {
					effect: {
						target: (card, player, target) => {
							if (typeof card === "object" && get.tag(card, "damage")) {
								let suit = get.suit(card);
								if (suit === "none") return;
								let all = target.getAllHistory("damage");
								if (!all.length || !all[all.length - 1].card) return;
								if (get.suit(all[all.length - 1].card) === suit) return "zeroplayertarget";
							}
						},
					},
				},
				subSkill: {
					mark: {
						trigger: { player: "damage" },
						silent: true,
						firstDo: true,
						content: function () {
							if (!trigger.card || get.suit(trigger.card) == "none")
								player.unmarkSkill("mjmouzhi");
							else {
								player.markSkill("mjmouzhi");
								game.broadcastAll(
									function (player, suit) {
										if (player.marks.mjmouzhi)
											player.marks.mjmouzhi.firstChild.innerHTML =
												get.translation(suit);
										player.storage.mjmouzhi = suit;
									},
									player,
									get.suit(trigger.card)
								);
							}
						},
					},
				},
			},
			mjshengxi: {
				audio: "shengxi",
				audioname: ["feiyi"],
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.getHistory("useCard").length > 0 &&
						player.getHistory("sourceDamage").length == 0
					);
				},
				content: function () {
					"step 0";
					var list = get.zhinangs();
					player
						.chooseButton(
							[
								"###" + get.prompt("mjshengxi") + "###获得一张智囊或摸一张牌",
								[list, "vcard"],
								[["摸一张牌", "取消"], "tdnodes"],
							],
							true
						)
						.set("ai", function (card) {
							if (card.link[2]) {
								if (
									!get.cardPile2(function (cardx) {
										return cardx.name == card.link[2];
									})
								)
									return 0;
								return (
									(Math.random() + 1.5) *
									get.value({ name: card.link[2] }, _status.event.player)
								);
							}
							if (card.link == "摸一张牌") return 1;
							return 0;
						});
					"step 1";
					if (result.bool && result.links[0] != "取消") {
						player.logSkill("mjshengxi");
						if (result.links[0] == "摸一张牌") player.draw();
						else {
							var card = get.cardPile2(function (card) {
								return card.name == result.links[0][2];
							});
							if (card) player.gain(card, "gain2");
						}
					}
				},
				group: "mjshengxi_zhunbei",
				subfrequent: ["zhunbei"],
				subSkill: {
					zhunbei: {
						audio: "shengxi",
						audioname: ["feiyi"],
						trigger: { player: "phaseZhunbeiBegin" },
						frequent: true,
						prompt2: "从游戏外或牌堆中获得一张【调剂盐梅】",
						content: function () {
							if (!_status.tiaojiyanmei_suits || _status.tiaojiyanmei_suits.length > 0) {
								if (!lib.inpile.includes("tiaojiyanmei")) lib.inpile.add("tiaojiyanmei");
								if (!_status.tiaojiyanmei_suits)
									_status.tiaojiyanmei_suits = lib.suit.slice(0);
								player.gain(
									game.createCard2(
										"tiaojiyanmei",
										_status.tiaojiyanmei_suits.randomRemove(),
										6
									),
									"gain2"
								);
							} else {
								var card = get.cardPile2(function (card) {
									return card.name == "tiaojiyanmei";
								});
								if (card) player.gain(card, "gain2");
							}
						},
					},
				},
			},
			mjkuanji: {
				audio: "fyjianyu",
				usable: 1,
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				direct: true,
				filter: function (event, player) {
					if (event.type != "discard") return false;
					var evt = event.getl(player);
					return evt.cards2.filterInD("d").length > 0;
				},
				content: function () {
					"step 0";
					var cards = trigger.getl(player).cards2;
					player
						.chooseButton(["宽济：是否将一张牌交给一名其他角色？", cards.filterInD("d")])
						.set("ai", function (button) {
							var player = _status.event.player;
							if (
								game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0;
								})
							)
								return Math.abs(get.value(button.link, "raw")) + 1;
							return -get.value(button.link, "raw");
						});
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						event.card = card;
						player
							.chooseTarget(
								"将" + get.translation(card) + "交给一名其他角色并摸一张牌",
								lib.filter.notMe,
								true
							)
							.set("ai", function (target) {
								var evt = _status.event.getParent();
								return (
									get.attitude(evt.player, target) *
									get.value(evt.card, target) *
									(target.hasSkillTag("nogain") ? 0.1 : 1)
								);
							});
					} else {
						player.storage.counttrigger.mjkuanji--;
						event.finish();
					}
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("mjkuanji", target);
						target.gain(card, "gain2");
						player.draw();
					}
				},
			},
			mjdingyi: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				locked: false,
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				logTarget: function () {
					return game.players;
				},
				content: function () {
					"step 0";
					var list = [];
					for (var i = 0; i < 4; i++) list.push(lib.skill["mjdingyi_" + i].title);
					player
						.chooseControl()
						.set("choiceList", list)
						.set("prompt", "定仪：请选择一个全局效果")
						.set("ai", function (target) {
							var list1 = player.getEnemies().length;
							var list2 = game.players.length - list1;
							if (list2 - list1 > 1) return 0;
							if (game.players.length < 6) return 2;
							return 3;
						});
					"step 1";
					if (typeof result.index == "number") {
						var skill = "mjdingyi_" + result.index;
						game.log(player, "选择了", "#g" + lib.skill[skill].title);
						for (var i of game.players) i.addSkill(skill);
						game.delayx();
					}
				},
				subSkill: {
					0: {
						title: "摸牌阶段的额定摸牌数+1",
						charlotte: true,
						mark: true,
						marktext: "仪",
						trigger: { player: "phaseDrawBegin" },
						forced: true,
						filter: function (event, player) {
							return !event.numFixed;
						},
						content: function () {
							trigger.num += (player.storage.mjdingyi_plus || 0) + 1;
						},
						intro: {
							content: function (storage, player) {
								return (
									"摸牌阶段的额定摸牌数+" + 1 * ((player.storage.mjdingyi_plus || 0) + 1)
								);
							},
						},
					},
					1: {
						title: "手牌上限+2",
						charlotte: true,
						mark: true,
						marktext: "仪",
						mod: {
							maxHandcard: function (player, num) {
								return num + 2 * ((player.storage.mjdingyi_plus || 0) + 1);
							},
						},
						intro: {
							content: function (storage, player) {
								return "手牌上限+" + 2 * ((player.storage.mjdingyi_plus || 0) + 1);
							},
						},
					},
					2: {
						title: "攻击范围+1",
						charlotte: true,
						mark: true,
						marktext: "仪",
						mod: {
							attackRange: function (player, num) {
								return num + ((player.storage.mjdingyi_plus || 0) + 1);
							},
						},
						intro: {
							content: function (storage, player) {
								return "攻击范围+" + ((player.storage.mjdingyi_plus || 0) + 1);
							},
						},
					},
					3: {
						title: "脱离濒死状态后回复1点体力",
						charlotte: true,
						mark: true,
						marktext: "仪",
						trigger: { player: "dyingAfter" },
						forced: true,
						filter: function (event, player) {
							return player.isDamaged();
						},
						content: function () {
							player.recover((player.storage.mjdingyi_plus || 0) + 1);
						},
						intro: {
							content: function (storage, player) {
								return (
									"脱离濒死状态后回复" +
									((player.storage.mjdingyi_plus || 0) + 1) +
									"点体力"
								);
							},
						},
					},
				},
			},
			mjzuici: {
				audio: "zuici",
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					if (!event.source || !event.source.isIn()) return false;
					for (var i = 0; i < 4; i++) {
						if (event.source.hasSkill("mjdingyi_" + i)) return true;
					}
					return false;
				},
				logTarget: "source",
				check: () => false,
				content: function () {
					"step 0";
					var target = trigger.source;
					event.target = target;
					for (var i = 0; i < 4; i++) {
						if (target.hasSkill("mjdingyi_" + i)) target.removeSkill("mjdingyi_" + i);
					}
					"step 1";
					var list = get.zhinangs();
					if (list.length) {
						player.chooseButton(
							["选择要令" + get.translation(target) + "获得的智囊", [list, "vcard"]],
							true
						);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var card = get.cardPile2(function (card) {
							return card.name == result.links[0][2];
						});
						if (card) target.gain(card, "gain2");
					}
				},
				ai: {
					combo: "mjdingyi",
				},
			},
			mjfubi: {
				audio: "fubi",
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasSkill("mjfubi_round")) return false;
					return game.hasPlayer(function (current) {
						for (var i = 0; i < 4; i++) {
							if (current.hasSkill("mjdingyi_" + i)) return true;
						}
					});
				},
				filterCard: true,
				selectCard: [0, 1],
				filterTarget: function (card, player, target) {
					if (ui.selected.cards.length) {
						for (var i = 0; i < 4; i++) {
							if (target.hasSkill("mjdingyi_" + i)) return true;
						}
					}
					var num = 0;
					for (var i = 0; i < 4; i++) {
						if (target.hasSkill("mjdingyi_" + i)) return true;
					}
					return num > 1 && num < 4;
				},
				check: () => false,
				position: "he",
				content: function () {
					"step 0";
					player.addTempSkill("mjfubi_round", "roundStart");
					if (cards.length) {
						player.addSkill("mjfubi_clear");
						player.markAuto("mjfubi_clear", [target]);
						target.addMark("mjdingyi_plus", 1, false);
						game.log(target, "的", "#g【定仪】", "效果增加一倍");
						event.finish();
						return;
					}
					var list = [],
						nums = [];
					for (var i = 0; i < 4; i++) {
						if (!target.hasSkill("mjdingyi_" + i)) {
							list.push(lib.skill["mjdingyi_" + i].title);
							nums.push(i);
						}
					}
					if (list.length) {
						event.nums = nums;
						player
							.chooseControl()
							.set("choiceList", list)
							.set("prompt", "辅弼：请选择为" + get.translation(target) + "更换的〖定仪〗效果")
							.set("ai", function () {
								var player = _status.event.player,
									target = _status.event.getParent().target;
								if (get.attitude(player, target) > 0 && !target.hasSkill("mjdingyi_0"))
									return 0;
								return _status.event.getParent().nums.length - 1;
							});
					} else event.finish();
					"step 1";
					for (var i = 0; i < 4; i++) {
						if (target.hasSkill("mjdingyi_" + i)) target.removeSkill("mjdingyi_" + i);
					}
					target.addSkill("mjdingyi_" + event.nums[result.index]);
					game.log(
						target,
						"的效果被改为",
						"#g" + lib.skill["mjdingyi_" + event.nums[result.index]].title
					);
				},
				ai: {
					order: 10,
					expose: 0,
					result: {
						target: function (player, target) {
							if (target.hasSkill("mjdingyi_0")) return -1;
							return 2;
						},
					},
					combo: "mjdingyi",
				},
				subSkill: {
					round: {},
					clear: {
						trigger: { player: ["phaseBegin", "dieBegin"] },
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							while (player.storage.mjfubi_clear && player.storage.mjfubi_clear.length) {
								var target = player.storage.mjfubi_clear.shift();
								if (target.hasMark("mjdingyi_plus"))
									target.removeMark("mjdingyi_plus", 1, false);
							}
							delete player.storage.mjfubi_clear;
							player.removeSkill("mjfubi_clear");
						},
					},
				},
			},
			boming: {
				audio: 2,
				enable: "phaseUse",
				usable: 2,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				filterCard: true,
				position: "he",
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					player.give(cards, target);
				},
				check: function (card) {
					return 5 - get.value(card);
				},
				ai: {
					order: 10,
					result: {
						target: function (player, target) {
							if (!ui.selected.cards.length) return 0;
							var card = ui.selected.cards[0];
							if (player.hasSkill("ejian") && !player.getStorage("ejian").includes(target)) {
								var dam = get.damageEffect(target, player, target);
								if (dam > 0) return dam;
								var type = get.type(card, target),
									ts = target.getCards("he", function (card) {
										return get.type(card) == type;
									});
								if (ts.length) {
									var val = get.value(ts, target);
									if (val > get.value(card)) return -Math.max(1, val);
									return 0;
								}
							}
							return get.value(card, target) / 1.5;
						},
					},
				},
				group: "boming_draw",
				subSkill: {
					draw: {
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (
								player.getHistory("lose", function (evt) {
									return evt.getParent(2).name == "boming";
								}).length > 1
							);
						},
						content: function () {
							player.draw();
						},
					},
				},
			},
			ejian: {
				audio: 2,
				trigger: { global: "gainAfter" },
				forced: true,
				filter: function (event, player) {
					var evt = event.getParent(),
						target = event.player;
					if (
						evt.name != "boming" ||
						evt.player != player ||
						player.getStorage("ejian").includes(target) ||
						!target.isIn()
					)
						return false;
					var he = target.getCards("he"),
						card = event.cards[0];
					if (!he.includes(card)) return false;
					var type = get.type2(card);
					for (var i of he) {
						if (i != card && get.type2(i) == type) return true;
					}
					return false;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					event.cardType = get.type2(trigger.cards[0]);
					event.target = trigger.player;
					player.markAuto("ejian", [event.target]);
					event.target
						.chooseControl()
						.set("choiceList", [
							"受到1点伤害",
							"展示手牌并弃置所有" + get.translation(event.cardType) + "牌",
						])
						.set("ai", function (event, player) {
							if (get.damageEffect(player, _status.event.getParent().player, player) >= 0)
								return 0;
							var type = _status.event.cardType,
								cards = player.getCards("he", function (card) {
									return get.type2(card) == type;
								});
							if (cards.length == 1) return 1;
							if (cards.length >= 2) {
								for (var i = 0; i < cards.length; i++) {
									if (get.tag(cards[i], "save")) return 0;
								}
							}
							if (player.hp == 1) return 1;
							for (var i = 0; i < cards.length; i++) {
								if (get.value(cards[i]) >= 8) return 0;
							}
							if (cards.length > 2 && player.hp > 2) return 0;
							if (cards.length > 3) return 0;
							return 1;
						})
						.set("cardType", event.cardType);
					"step 1";
					if (result.index == 1) {
						if (target.countCards("h") > 0) target.showHandcards();
					} else {
						target.damage();
						event.finish();
					}
					"step 2";
					target.discard(
						target.getCards("he", function (card) {
							return get.type2(card) == event.cardType;
						})
					);
				},
				ai: { combo: "boming", halfneg: true },
				onremove: true,
				intro: { content: "已对$发动过此技能" },
			},
			yuanqing: {
				audio: 2,
				trigger: { player: "phaseUseEnd" },
				forced: true,
				filter: function (event, player) {
					return player.hasHistory("useCard", function (evt) {
						return evt.getParent("phaseUse") == event;
					});
				},
				content: function () {
					var map = {},
						cards = [];
					player.getHistory("useCard", function (evt) {
						let type = get.type2(evt.card, false);
						if (!map[type]) map[type] = [];
					});
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						var card = ui.discardPile.childNodes[i],
							type = get.type2(card, false);
						if (map[type]) map[type].push(card);
					}
					for (var i in map) {
						if (map[i].length) cards.push(map[i].randomGet());
					}
					if (cards.length) {
						player.$gain2(cards, false);
						game.cardsGotoSpecial(cards, "toRenku");
						game.log(player, "将", cards, "置入了仁库");
						game.delayx();
					}
				},
				init: function (player) {
					player.storage.renku = true;
				},
			},
			shuchen: {
				audio: 2,
				init: function (player) {
					player.storage.renku = true;
				},
				trigger: { global: "dying" },
				forced: true,
				filter: function (event, player) {
					return _status.renku.length > 3;
				},
				logTarget: "player",
				content: function () {
					player.gain(_status.renku, "gain2", "fromRenku");
					_status.renku.length = 0;
					game.updateRenku();
					trigger.player.recover();
				},
				ai: {
					combo: "yuanqing"
				},
			},
			hxrenshi: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return (
						player.countCards("h") > 0 &&
						(!player.storage.hxrenshi2 ||
							game.hasPlayer(function (current) {
								return !player.storage.hxrenshi2.includes(current);
							}))
					);
				},
				filterCard: true,
				filterTarget: function (card, player, target) {
					return !player.storage.hxrenshi2 || !player.storage.hxrenshi2.includes(target);
				},
				position: "h",
				discard: false,
				lose: false,
				delay: false,
				check: function (cardx) {
					var player = _status.event.player;
					if (
						player.getStorage("debao").length == 1 &&
						(!game.hasPlayer(function (current) {
							return (
								get.attitude(player, current) > 0 &&
								current.hp * 1.5 + current.countCards("h") < 4
							);
						}) ||
							game.hasPlayer(function (current) {
								return (
									get.attitude(player, current) <= 0 &&
									current.hp * 1.5 + current.countCards("h") < 4
								);
							}))
					)
						return 0;
					return 5 - get.value(cardx);
				},
				content: function () {
					player.addTempSkill("hxrenshi2", "phaseUseEnd");
					player.markAuto("hxrenshi2", targets);
					player.give(cards, target);
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (ui.selected.cards.length)
								return get.value(ui.selected.cards[0], target) + 0.1;
							return 0;
						},
					},
				},
			},
			hxrenshi2: {
				onremove: true,
			},
			debao: {
				audio: 2,
				trigger: { global: "gainAfter" },
				forced: true,
				filter: function (event, player) {
					if (player == event.player || player.getStorage("debao").length >= player.maxHp)
						return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				content: function () {
					var cards = get.cards();
					player.markAuto("debao", cards);
					player.$gain2(cards[0], false);
					game.cardsGotoSpecial(cards);
					game.log(player, "将", cards[0], "放在了武将牌上");
					game.delayx();
				},
				marktext: "仁",
				intro: { content: "cards", onunmark: "throw" },
				group: "debao_gain",
				subSkill: {
					gain: {
						trigger: { player: "phaseZhunbeiBegin" },
						forced: true,
						filter: function (event, player) {
							return player.getStorage("debao").length > 0;
						},
						content: function () {
							var cards = player.storage.debao;
							player.gain(cards, "gain2", "fromStorage");
							cards.length = 0;
							player.unmarkSkill("debao");
						},
					},
				},
			},
			buqi: {
				audio: 2,
				trigger: { global: "dying" },
				forced: true,
				filter: function (event, player) {
					return player.getStorage("debao").length > 1;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					var cards = player.getStorage("debao");
					if (cards.length == 2) event._result = { bool: true, links: cards.slice(0) };
					else player.chooseButton(["不弃：请选择移去两张“仁”", cards], 2, true);
					"step 1";
					if (result.bool) {
						var cards = result.links;
						player.unmarkAuto("debao", cards);
						player.$throw(cards, 1000);
						game.log(player, "将", cards, "置入了弃牌堆");
						game.delayx();
						game.cardsDiscard(cards);
					} else event.finish();
					"step 2";
					if (trigger.player.isIn() && trigger.player.isDamaged()) trigger.player.recover();
				},
				group: "buqi_die",
				subSkill: {
					die: {
						trigger: { global: "dieAfter" },
						forced: true,
						filter: function (event, player) {
							return player.getStorage("debao").length > 0;
						},
						content: function () {
							player.unmarkSkill("debao");
						},
					},
				},
				ai: {
					neg: true,
					combo: "debao",
				},
			},
			guying: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				forced: true,
				usable: 1,
				filter: function (event, player) {
					if (event.type != "discard") {
						var evt = event.getParent();
						if (evt.name != "useCard" && evt.name != "respond") return false;
					}
					var target = _status.currentPhase,
						evt = event.getl(player);
					if (
						!evt.cards2 ||
						evt.cards2.length != 1 ||
						!target ||
						target == player ||
						!target.isIn()
					)
						return false;
					return get.position(evt.cards2[0]) == "d" || target.countCards("he") < 0;
				},
				logTarget: function () {
					return _status.currentPhase;
				},
				content: function () {
					"step 0";
					if (trigger.delay === false) game.delayx();
					event.target = _status.currentPhase;
					event.card = trigger.getl(player).cards2[0];
					"step 1";
					player.addMark("guying", 1, false);
					event.addIndex = 0;
					var choiceList = [],
						str = get.translation(player);
					if (target.countCards("he") > 0) choiceList.push("随机交给" + str + "一张牌");
					else event.addIndex++;
					if (get.position(card) == "d")
						choiceList.push("令" + str + "收回" + get.translation(card));
					if (choiceList.length == 1) event._result = { index: 0 };
					target
						.chooseControl()
						.set("choiceList", choiceList)
						.set("ai", function () {
							var player = _status.event.player,
								evt = _status.event.getParent();
							if (get.value(evt.card, evt.player) * get.attitude(player, evt.player) > 0)
								return 0;
							return Math.random() > get.value(evt.card, evt.player) / 6 ? 1 : 0;
							//return 1;
						});
					"step 2";
					if (result.index + event.addIndex == 0) {
						target.give(target.getCards("he").randomGet(), player);
						event.finish();
					} else player.gain(card, "gain2");
					"step 3";
					if (player.isIn() && player.getCards("h").includes(card) && get.type(card, null, player) == "equip") player.chooseUseTarget(card, true, "nopopup");
				},
				onremove: true,
				intro: { content: "已发动过#次" },
				group: "guying_discard",
				subSkill: {
					discard: {
						audio: "guying",
						trigger: { player: "phaseZhunbeiBegin" },
						forced: true,
						filter: function (event, player) {
							return player.countMark("guying") > 0;
						},
						content: function () {
							var num = player.countMark("guying");
							player.removeMark("guying", num, false);
							player.chooseToDiscard("he", num, true);
						},
					},
				},
			},
			muzhen: {
				audio: 2,
				enable: "phaseUse",
				usable: 2,
				filter: function (event, player) {
					const list = player.getStorage("muzhen_used");
					if (
						!list.includes("gain") &&
						player.hasCard(i => get.type(i) == "equip", "he") &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") > 0;
						})
					)
						return true;
					if (
						!list.includes("give") &&
						player.countCards("he") > 1 &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("e") > 0;
						})
					)
						return true;
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [
							"将一张装备牌置于其他角色的装备区内并获得其一张手牌",
							"将两张牌交给一名其他角色并获得其装备区内的一张牌",
						];
						var choiceList = ui.create.dialog("睦阵：请选择一项", "hidden");
						choiceList.add([
							list.map((item, i) => {
								return [i, item];
							}),
							"textbutton",
						]);
						return choiceList;
					},
					filter: function (button, player) {
						const list = player.getStorage("muzhen_used");
						if (button.link == 0)
							return (
								!list.includes("gain") &&
								player.hasCard(i => get.type(i) == "equip", "he") &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards("h") > 0;
								})
							);
						return (
							!list.includes("give") &&
							player.countCards("he") > 1 &&
							game.hasPlayer(function (current) {
								return current != player && current.countCards("e") > 0;
							})
						);
					},
					backup: function (links) {
						return {
							audio: "muzhen",
							filterTarget: [
								function (card, player, target) {
									return (
										target.countCards("h") > 0 && target.canEquip(ui.selected.cards[0])
									);
								},
								function (card, player, target) {
									return target.countCards("e") > 0;
								},
							][links[0]],
							filterCard: [
								function (card, player) {
									if (get.type(card) != "equip") return false;
									if (ui.selected.targets.length)
										return ui.selected.targets[0].canEquip(card);
									return game.hasPlayer(function (current) {
										return current.countCards("h") > 0 && current.canEquip(card);
									});
								},
								true,
							][links[0]],
							selectCard: 1 + links[0],
							position: "he",
							discard: false,
							lose: false,
							delay: false,
							content: function () {
								"step 0";
								player.addTempSkill("muzhen_used", "phaseUseEnd");
								if (cards.length == 1) {
									player.markAuto("muzhen_used", "gain");
									player.$giveAuto(cards[0], target);
									game.delayx();
									target.equip(cards[0]);
								} else {
									player.markAuto("muzhen_used", "give");
									player.give(cards, target);
								}
								player.gainPlayerCard(target, cards.length == 2 ? "e" : "h", true);
							},
						};
					},
					prompt: function () {
						return "请选择【睦阵】的牌和目标";
					},
				},
				subSkill: {
					used: {
						onremove: true,
						charlotte: true,
					},
				},
			},
			sheyi2: { charlotte: true },
			sheyi: {
				audio: 2,
				trigger: { global: "damageBegin4" },
				direct: true,
				filter: function (event, player) {
					return (
						!player.hasSkill("sheyi2") &&
						player != event.player &&
						event.player.hp < player.hp &&
						player.countCards("he") >= Math.max(1, player.hp)
					);
				},
				content: function () {
					"step 0";
					var num = Math.max(1, player.hp),
						target = trigger.player;
					player
						.chooseCard(
							"he",
							get.prompt("sheyi", target),
							"交给其至少" +
								get.cnNumber(num) +
								"张牌，防止即将受到的伤害（" +
								trigger.num +
								"点）",
							[num, player.countCards("he")]
						)
						.set(
							"goon",
							(function () {
								if (get.attitude(player, target) < 0) return false;
								if (
									trigger.num < target.hp &&
									get.damageEffect(target, trigger.source, player, trigger.nature) >= 0
								)
									return false;
								if (trigger.num < 2 && target.hp > trigger.num) return 6 / Math.sqrt(num);
								if (target == get.zhu(player)) return 9;
								return 8 / Math.sqrt(num);
							})()
						)
						.set("ai", function (card) {
							if (ui.selected.cards.length >= Math.max(1, _status.event.player.hp)) return 0;
							if (typeof _status.event.goon == "number")
								return _status.event.goon - get.value(card);
							return 0;
						});
					"step 1";
					if (result.bool) {
						var target = trigger.player;
						player.logSkill("sheyi", target);
						player.addTempSkill("sheyi2", "roundStart");
						player.give(result.cards, target);
						trigger.cancel();
					}
				},
			},
			tianyin: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					var list = [];
					player.getHistory("useCard", function (evt) {
						list.add(get.type2(evt.card, false));
					});
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						if (!list.includes(get.type2(ui.cardPile.childNodes[i], false))) return true;
					}
					return false;
				},
				content: function () {
					var list = [],
						cards = [];
					player.getHistory("useCard", function (evt) {
						list.add(get.type2(evt.card, false));
					});
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						var type = get.type2(ui.cardPile.childNodes[i], false);
						if (!list.includes(type)) {
							list.push(type);
							cards.push(ui.cardPile.childNodes[i]);
						}
					}
					player.gain(cards, "gain2");
				},
			},
			//王甫赵累
			xunyi: {
				audio: 2,
				trigger: {
					global: ["phaseBefore", "dieAfter"],
					player: "enterGame",
				},
				intro: { content: "效果目标：$" },
				filter: function (event, player) {
					if (event.name == "die") return player.getStorage("xunyi").includes(event.player);
					return !player.getStorage("xunyi").length && (event.name != "phase" || game.phaseNumber == 0);
				},
				async cost(event, trigger, player) {
					player.removeSkill("xunyi_effect");
					let prompt = trigger.name == "die" ? "是否令一名其他角色获得“义”？" : "令一名其他角色获得“义”";
					event.result = await player
						.chooseTarget(lib.filter.notMe, "殉义", prompt, trigger.name != "die")
						.set("ai", function (target) {
							var player = _status.event.player;
							return Math.max(1 + get.attitude(player, target) * get.threaten(target), Math.random());
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.markAuto("xunyi", event.targets);
					player.addSkill("xunyi_effect");
				},
				subSkill: {
					effect: {
						audio: "xunyi",
						trigger: {
							global: ["damageSource", "damageEnd"],
						},
						forced: true,
						charlotte: true,
						onremove(player) {
							player.unmarkAuto("xunyi", player.getStorage("xunyi"));
						},
						getIndex(event) {
							return event.num;
						},
						filter(event, player, name) {
							if (!player.getStorage("xunyi").length) return false;
							let viewer = event[name == "damageEnd" ? "player" : "source"];
							let list = player.getStorage("xunyi").concat([player]);
							if (!list.includes(viewer)) return false;
							let target = list.find(current => current != viewer);
							if (!target || name == "damageEnd" && !target.countCards("he")) return false;
							return target.isIn() && target != event[name != "damageEnd" ? "player" : "source"];
						},
						logTarget(event, player, name) {
							return player.getStorage("xunyi")[0];
						},
						async content(event, trigger, player) {
							const bool = event.triggername == "damageEnd";
							let viewer = trigger[bool ? "player" : "source"];
							let target = viewer == player ? event.targets[0] : player;
							if (bool) await target.chooseToDiscard("he", true);
							else await target.draw();
						},
					},
				},
			},
			//狗剩
			reduoji: {
				audio: "duoji",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				filterCard: true,
				position: "he",
				filterTarget: lib.filter.notMe,
				discard: false,
				toStorage: true,
				delay: false,
				check: function (card) {
					return 3 - get.value(card);
				},
				content: function () {
					"step 0";
					player.$give(cards[0], target, false);
					target.markAuto("reduoji", cards);
					game.log(player, "将", cards[0], "放在了", target, "的武将牌上");
					"step 1";
					game.delay();
				},
				group: ["reduoji_equip", "reduoji_gain"],
				intro: {
					content: "cards",
					onunmark: "throw",
				},
				ai: {
					order: 1,
					result: { target: -1 },
				},
				subSkill: {
					equip: {
						audio: "duoji",
						trigger: { global: "equipAfter" },
						forced: true,
						filter: function (event, player) {
							if (
								player == event.player ||
								!event.player.getStorage("reduoji").length ||
								!event.player.getCards("e").includes(event.card)
							)
								return false;
							var evt = event.getParent(2);
							return evt.name == "useCard" && evt.player == event.player;
						},
						logTarget: "player",
						content: function () {
							"step 0";
							player.gain(trigger.card, trigger.player, "give", "bySelf");
							"step 1";
							var target = trigger.player,
								storage = target.getStorage("reduoji");
							if (storage.length) {
								var card = storage[0];
								target.$throw(card, 1000);
								target.unmarkAuto("reduoji", [card]);
								game.log(target, "移去了", card);
								game.cardsDiscard(card);
								target.draw();
							}
						},
					},
					gain: {
						audio: "duoji",
						trigger: { global: "phaseEnd" },
						forced: true,
						filter: function (event, player) {
							return event.player.getStorage("reduoji").length > 0;
						},
						logTarget: "player",
						content: function () {
							var target = trigger.player,
								cards = target.storage.reduoji;
							target.$give(cards, player);
							player.gain(cards, "fromStorage");
							cards.length = 0;
							target.unmarkSkill("reduoji");
							game.delay();
						},
					},
				},
			},
			//SP辛毗
			spyinju: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					target
						.chooseToUse(function (card, player, event) {
							if (get.name(card) != "sha") return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "引裾：对" +
							get.translation(player) +
							"使用一张杀，或跳过下回合的出牌阶段和弃牌阶段")
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (
								target != _status.event.sourcex &&
								!ui.selected.targets.includes(_status.event.sourcex)
							)
								return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						})
						.set("sourcex", player);
					"step 1";
					if (!result.bool) target.addSkill("spyinju2");
				},
				ai: {
					order: 1,
					expose: 0.2,
					result: {
						target: -1.5,
						player: function (player, target) {
							if (!target.canUse("sha", player)) return 0;
							if (target.countCards("h") == 0) return 0;
							if (target.countCards("h") == 1) return -0.1;
							if (player.countCards("h", "shan") == 0) return -1;
							if (player.hp < 2) return -2;
							return -0.5;
						},
					},
					threaten: 1.1,
				},
			},
			spyinju2: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				charlotte: true,
				sourceSkill: "spyinju",
				content: function () {
					player.skip("phaseUse");
					player.skip("phaseDiscard");
					player.removeSkill("spyinju2");
					game.log(player, "跳过了出牌阶段");
					game.log(player, "跳过了弃牌阶段");
				},
				mark: true,
				intro: { content: "衣襟被拽住了，下个准备阶段开始时跳过出牌阶段和弃牌阶段" },
			},
			spchijie: {
				audio: 2,
				trigger: { target: "useCardToTarget" },
				usable: 1,
				filter: function (event, player) {
					return event.player != player && event.targets.length == 1;
				},
				check: function (event, player) {
					return get.effect(player, event.card, event.player, player) < 0;
				},
				content: function () {
					"step 0";
					player.judge(function (card) {
						if (get.number(card) > 6) return 2;
						return 0;
					}).judge2 = function (result) {
						return result.bool ? true : false;
					};
					"step 1";
					if (result.bool) {
						trigger.targets.length = 0;
						trigger.getParent().triggeredTargets2.length = 0;
						trigger.cancel();
					}
				},
			},
			//糜夫人
			spcunsi: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return !player.isTurnedOver();
				},
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					player.turnOver();
					"step 1";
					var card = get.cardPile(function (card) {
						return card.name == "sha";
					});
					if (card) target.gain(card, "gain2");
					"step 2";
					target.addSkill("spcunsi2");
					target.addMark("spcunsi2", 1, false);
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							var card = { name: "sha", isCard: true };
							if (
								!target.hasSkillTag("nogain") &&
								game.hasPlayer(function (current) {
									return (
										get.attitude(target, current) < 0 &&
										!current.hasShan() &&
										target.canUse(card, current) &&
										!current.hasSkillTag("filterDamage", null, {
											player: target,
											card: card,
											jiu: true,
										}) &&
										get.effect(current, card, target) > 0
									);
								})
							) {
								return 4;
							}
							return 0;
						},
					},
				},
			},
			spcunsi2: {
				charlotte: true,
				trigger: { player: "useCard1" },
				firstDo: true,
				forced: true,
				popup: false,
				onremove: true,
				sourceSkill: "spcunsi",
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				content: function () {
					trigger.baseDamage += player.countMark("spcunsi2");
					player.removeSkill("spcunsi2");
				},
				marktext: "嗣",
				intro: {
					content: "下一张【杀】的伤害+#",
				},
			},
			spguixiu: {
				trigger: { player: "damageEnd" },
				forced: true,
				filter: function (event, player) {
					if (typeof event.spguixiu == "boolean" && !event.spguixiu) return false;
					return player.isTurnedOver();
				},
				content: function () {
					player.turnOver();
				},
				group: ["spguixiu_draw", "spguixiu_count"],
				subSkill: {
					count: {
						trigger: { player: "damageBegin2" },
						lastDo: true,
						silent: true,
						content: function () {
							event.spguixiu = player.isTurnedOver();
						},
					},
					draw: {
						trigger: { player: "turnOverAfter" },
						forced: true,
						filter: function (event, player) {
							return !player.isTurnedOver();
						},
						content: function () {
							player.draw();
						},
					},
				},
			},
			//那个男人的舅舅
			heji: {
				audio: 2,
				trigger: { global: "useCardAfter" },
				direct: true,
				locked: false,
				filter: function (event, player) {
					if (event.targets.length != 1 || event.targets[0] == player || event.targets[0].isDead())
						return false;
					if (
						event.card.name != "juedou" &&
						(event.card.name != "sha" || get.color(event.card) != "red")
					)
						return false;
					if (_status.connectMode && player.countCards("h") > 0) return true;
					return player.hasSha() || player.hasUsableCard("juedou");
				},
				content: function () {
					player
						.chooseToUse(function (card, player, event) {
							var name = get.name(card);
							if (name != "sha" && name != "juedou") return false;
							return lib.filter.cardEnabled.apply(this, arguments);
						}, "合击：是否对" +
							get.translation(trigger.targets[0]) +
							"使用一张【杀】或【决斗】？")
						.set("logSkill", "heji")
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (
								target != _status.event.sourcex &&
								!ui.selected.targets.includes(_status.event.sourcex)
							)
								return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						})
						.set("sourcex", trigger.targets[0])
						.set("addCount", false);
				},
				group: "heji_gain",
				subSkill: {
					gain: {
						trigger: { player: "useCard" },
						forced: true,
						popup: false,
						filter: function (event, player) {
							return event.card.isCard && event.getParent(2).name == "heji";
						},
						content: function () {
							var card = get.cardPile2(function (card) {
								return get.color(card, false) == "red";
							});
							if (card) player.gain(card, "gain2");
						},
					},
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (get.name(card, player) == "sha" && get.color(card, player) == "red")
							return (
								num +
								0.6 *
									(_status.event.name == "chooseToUse" &&
									player.hasHistory("useCard", function (evt) {
										return evt.card.name == "sha" && evt.cards.length == 1;
									})
										? 1
										: -1)
							);
					},
				},
			},
			//始计篇·智
			refubi: {
				audio: "fubi",
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				direct: true,
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("refubi"), lib.filter.notMe).set("ai", function (target) {
						return 1 + get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("refubi", target);
						target.addMark("refubi", 1);
					}
				},
				intro: {
					content: function (info, player) {
						var str = "已获得“辅弼”标记";
						if (player.storage.refubi_effect0) {
							str += "；本回合使用【杀】的次数上限+";
							str += player.storage.refubi_effect0;
						}
						if (player.storage.refubi_effect1) {
							str += "；本回合的手牌上限+";
							str += player.storage.refubi_effect1 * 3;
						}
						return str;
					},
				},
				marktext: "弼",
				group: "refubi_buff",
				subSkill: {
					buff: {
						trigger: { global: "phaseZhunbeiBegin" },
						direct: true,
						filter: function (event, player) {
							return event.player != player && event.player.hasMark("refubi");
						},
						content: function () {
							"step 0";
							var str = get.translation(trigger.player);
							player
								.chooseControl("cancel2")
								.set("choiceList", [
									"令" + str + "本回合使用【杀】的次数上限+1",
									"令" + str + "本回合的手牌上限+3",
								])
								.set("ai", function () {
									var player = _status.event.player,
										target = _status.event.getTrigger().player;
									if (get.attitude(player, target) <= 0) return "cancel2";
									if (
										!target.hasJudge("lebu") &&
										target.countCards("h", function (card) {
											return (
												get.name(card, target) == "sha" && target.hasValueTarget(card)
											);
										}) > target.getCardUsable("sha")
									)
										return 0;
									return 1;
								});
							"step 1";
							if (result.control != "cancel2") {
								var target = trigger.player;
								player.logSkill("refubi", target);
								var str = "refubi_effect" + result.index;
								target.addTempSkill(str);
								target.addMark(str, 1, false);
								game.log(
									target,
									["本回合使用【杀】的次数上限+1", "本回合的手牌上限+3"][result.index]
								);
							}
						},
					},
					effect0: {
						onremove: true,
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num + player.countMark("refubi_effect0");
							},
						},
					},
					effect1: {
						onremove: true,
						mod: {
							maxHandcard: function (player, num) {
								return num + 3 * player.countMark("refubi_effect1");
							},
						},
					},
				},
			},
			rezuici: {
				audio: "zuici",
				enable: "chooseToUse",
				filter: function (event, player) {
					if (event.type == "phase" || (event.type == "dying" && player == event.dying))
						return player.isDamaged() && player.countCards("e") > 0;
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog(
							"###罪辞###选择废除一个有牌的装备栏，然后回复2点体力，并可移动“辅弼”标记。"
						);
					},
					chooseControl: function (event, player) {
						var list = [];
						for (var i = 1; i < 6; i++) {
							if (player.getEquips(i).length > 0) list.push("equip" + i);
						}
						list.push("cancel2");
						return list;
					},
					check: function (event, player) {
						if (player.hp > 1 && player.getDamagedHp() < 2) return "cancel2";
						var cards = player.getCards("e").sort(function (a, b) {
							return get.value(a) - get.value(b);
						});
						var sub = get.subtype(cards[0], false);
						if (player.hp < 1) return sub;
						var val = get.value(cards[0]);
						if (val < 0) return sub;
						return val < 4 ? sub : "cancel2";
					},
					backup: function (result) {
						var next = get.copy(lib.skill.rezuicix);
						next.position = result.control;
						return next;
					},
				},
				ai: {
					order: 2.7,
					result: {
						player: 1,
					},
					save: true,
					skillTagFilter: function (player, tag, arg) {
						return player == arg;
					},
				},
			},
			rezuicix: {
				audio: "zuici",
				sourceSkill: "rezuici",
				content: function () {
					"step 0";
					player.disableEquip(lib.skill.rezuici_backup.position);
					player.recover(2);
					"step 1";
					var b1 = false,
						b2 = false;
					for (var i of game.players) {
						if (i.hasMark("refubi")) b1 = true;
						else if (i != player) b2 = true;
						if (b1 && b2) break;
					}
					if (b1 && b2) {
						player
							.chooseTarget("是否转移“辅弼”标记？", function (card, player, target) {
								return target != player && !target.hasMark("refubi");
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								return Math.min(att, att - _status.event.preatt);
							})
							.set(
								"preatt",
								get.attitude(
									player,
									game.findPlayer(function (current) {
										return current.hasMark("refubi");
									})
								)
							);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "group");
						game.countPlayer(function (current) {
							var num = current.countMark("refubi");
							if (num) current.removeMark("refubi", 1, false);
						});
						target.addMark("refubi", 1);
					}
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			reshengxi: {
				audio: "shengxi",
				audioname: ["feiyi"],
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				preHidden: true,
				filter: function (event, player) {
					return !player.getHistory("sourceDamage").length;
				},
				content: function () {
					player.draw(2);
				},
			},
			fyjianyu: {
				initSkill: function (skill) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							marktext: "喻",
							intro: {
								markcount: () => 1,
								content: "指定另一名有“喻”的角色为目标时，其摸一张牌",
							},
						};
						lib.translate[skill] = "谏喻";
						lib.translate[skill + "_bg"] = "喻";
					}
				},
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return (
						game.countPlayer(function (current) {
							return !current.hasMark("fyjianyu_" + player.playerid);
						}) > 1
					);
				},
				round: 1,
				filterTarget: function (card, player, target) {
					return !target.hasMark("fyjianyu_" + player.playerid);
				},
				selectTarget: 2,
				content: function () {
					var skill = "fyjianyu_" + player.playerid;
					game.broadcastAll(lib.skill.fyjianyu.initSkill, skill);
					player.addTempSkill("fyjianyu_draw", { player: "phaseBegin" });
					target.addMark(skill, 1);
				},
				ai: {
					order: 0.1,
					result: {
						target: function (player, target) {
							if (!ui.selected.targets.length) return target == player ? 1 : 0;
							if (get.attitude(player, target) < 0)
								return (
									-1.6 *
									(1 +
										target.countCards("h", function (card) {
											return (
												target.hasValueTarget(card) &&
												get.effect(player, card, target, target) > 0
											);
										}) *
											Math.sqrt(target.countCards("h")))
								);
							return (
								0.3 *
								(1 +
									target.countCards("h", function (card) {
										return (
											target.hasValueTarget(card) &&
											get.effect(player, card, target, target) > 0
										);
									}) *
										Math.sqrt(target.countCards("h")))
							);
						},
					},
				},
				subSkill: {
					draw: {
						charlotte: true,
						trigger: { global: "useCardToPlayer" },
						filter: function (event, player) {
							if (!event.player.isPhaseUsing()) return false;
							return (
								event.player != event.target &&
								event.player.hasMark("fyjianyu_" + player.playerid) &&
								event.target.hasMark("fyjianyu_" + player.playerid) &&
								event.target.isIn()
							);
						},
						forced: true,
						logTarget: "target",
						content: function () {
							trigger.target.draw();
						},
						onremove: function (player) {
							game.countPlayer(function (current) {
								var num = current.countMark("fyjianyu_" + player.playerid);
								if (num) current.removeMark("fyjianyu_" + player.playerid);
							});
						},
					},
				},
			},
			spwanwei: {
				audio: 2,
				enable: "chooseToUse",
				filter: function (event, player) {
					if (player.hasSkill("spwanwei2") || player.hp < 1) return false;
					if (event.type == "dying") return event.dying != player;
					if (event.type != "phase") return false;
					return game.hasPlayer(function (current) {
						return current != player && current.isDamaged();
					});
				},
				filterTarget: function (card, player, target) {
					if (_status.event.type == "dying") return target == _status.event.dying;
					return player != target && target.isDamaged();
				},
				selectTarget: function () {
					if (_status.event.type == "dying") return -1;
					return 1;
				},
				content: function () {
					player.addTempSkill("spwanwei2", "roundStart");
					var num = player.hp;
					target.recover(Math.max(num + 1, 1 - target.hp));
					player.loseHp(num);
				},
				ai: {
					save: true,
					skillTagFilter: function (player, tag, target) {
						return player != target;
					},
					expose: 0.5,
					order: 6,
					result: {
						target: function (player, target) {
							if (_status.event.type != "dying") return 0;
							if (get.attitude(player, target) < 4) return 0;
							if (player.countCards("he") < 2 && target != get.zhu(player)) return 0;
							return 1;
						},
					},
				},
			},
			spwanwei2: {},
			spyuejian: {
				mod: {
					maxHandcardBase: function (player) {
						return player.maxHp;
					},
				},
				audio: 2,
				enable: "chooseToUse",
				filter: function (event, player) {
					return event.type == "dying" && player == event.dying && player.countCards("he") > 1;
				},
				selectCard: 2,
				filterCard: true,
				position: "he",
				check: function (card) {
					return 1 / Math.max(0.1, get.value(card));
				},
				content: function () {
					player.recover();
				},
				ai: {
					save: true,
					skillTagFilter: function (player, tag, target) {
						return player == target;
					},
					order: 1.4,
					result: {
						player: 1,
					},
				},
			},
			spwuku: {
				audio: 2,
				trigger: { global: "useCard" },
				forced: true,
				preHidden: true,
				filter: function (event, player) {
					if (get.type(event.card) != "equip") return false;
					var gz = get.mode() == "guozhan";
					if (gz && event.player.isFriendOf(player)) return false;
					return player.countMark("spwuku") < (gz ? 2 : 3);
				},
				content: function () {
					player.addMark("spwuku", 1);
				},
				marktext: "库",
				intro: {
					content: "mark",
				},
				ai: {
					combo: "spmiewu",
					threaten: 3.6,
				},
			},
			spsanchen: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return player.countMark("spwuku") > 2;
				},
				content: function () {
					player.awakenSkill("spsanchen");
					player.gainMaxHp();
					player.recover();
					player.addSkills("spmiewu");
				},
				ai: {
					combo: "spwuku",
				},
				derivation: "spmiewu",
			},
			spmiewu: {
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				filter: function (event, player) {
					if (
						!player.countMark("spwuku") ||
						!player.countCards("hse") ||
						player.hasSkill("spmiewu2")
					)
						return false;
					for (var i of lib.inpile) {
						var type = get.type2(i);
						if (
							(type == "basic" || type == "trick") &&
							event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)
						)
							return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == "sha") {
								if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event))
									list.push(["基本", "", "sha"]);
								for (var nature of lib.inpile_nature) {
									if (
										event.filterCard(
											get.autoViewAs({ name, nature }, "unsure"),
											player,
											event
										)
									)
										list.push(["基本", "", "sha", nature]);
								}
							} else if (
								get.type2(name) == "trick" &&
								event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)
							)
								list.push(["锦囊", "", name]);
							else if (
								get.type(name) == "basic" &&
								event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)
							)
								list.push(["基本", "", name]);
						}
						return ui.create.dialog("灭吴", [list, "vcard"]);
					},
					check: function (button) {
						if (_status.event.getParent().type != "phase") return 1;
						var player = _status.event.player;
						if (
							[
								"wugu",
								"zhulu_card",
								"yiyi",
								"lulitongxin",
								"lianjunshengyan",
								"diaohulishan",
							].includes(button.link[2])
						)
							return 0;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup: function (links, player) {
						return {
							filterCard: true,
							audio: "spmiewu",
							popname: true,
							check: function (card) {
								return 8 - get.value(card);
							},
							position: "hse",
							viewAs: { name: links[0][2], nature: links[0][3] },
							precontent: function () {
								player.addTempSkill("spmiewu2");
								player.removeMark("spwuku", 1);
							},
						};
					},
					prompt: function (links, player) {
						return (
							"将一张牌当做" +
							(get.translation(links[0][3]) || "") +
							get.translation(links[0][2]) +
							"使用"
						);
					},
				},
				hiddenCard: function (player, name) {
					if (!lib.inpile.includes(name)) return false;
					var type = get.type2(name);
					return (
						(type == "basic" || type == "trick") &&
						player.countMark("spwuku") > 0 &&
						player.countCards("she") > 0 &&
						!player.hasSkill("spmiewu2")
					);
				},
				ai: {
					combo: "spwuku",
					fireAttack: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player) {
						if (
							!player.countMark("spwuku") ||
							!player.countCards("hse") ||
							player.hasSkill("spmiewu2")
						)
							return false;
					},
					order: 1,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
			},
			spmiewu2: {
				trigger: { player: ["useCardAfter", "respondAfter"] },
				forced: true,
				charlotte: true,
				popup: false,
				sourceSkill: "spmiewu",
				filter: function (event, player) {
					return event.skill == "spmiewu_backup";
				},
				content: function () {
					player.draw();
				},
			},
			spmiewu_backup: { audio: "spmiewu" },
			qinzheng: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				forced: true,
				filter: function (event, player) {
					var num = player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
					return num % 3 == 0 || num % 5 == 0 || num % 8 == 0;
				},
				content: function () {
					var num = player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
					var cards = [];
					if (num % 3 == 0) {
						var card = get.cardPile2(function (card) {
							return card.name == "sha" || card.name == "shan";
						});
						if (card) cards.push(card);
					}
					if (num % 5 == 0) {
						var card = get.cardPile2(function (card) {
							return ["tao", "jiu", "zong", "xionghuangjiu"].includes(card.name);
						});
						if (card) cards.push(card);
					}
					if (num % 8 == 0) {
						var card = get.cardPile2(function (card) {
							return [
								"juedou",
								"wuzhong",
								"zengbin",
								"sadouchengbing",
								"dongzhuxianji",
								"tongzhougongji",
							].includes(card.name);
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
				},
				group: "qinzheng_count",
				intro: {
					content: function (num) {
						var str = "<li>总次数：";
						str += num;
						str += "<br><li>杀/闪：";
						str += num % 3;
						str += "/3<br><li>桃/酒：";
						str += num % 5;
						str += "/5<br><li>决斗/无中生有：";
						str += num % 8;
						str += "/8";
						return str;
					},
				},
			},
			qinzheng_count: {
				trigger: { player: ["useCard1", "respond"] },
				silent: true,
				firstDo: true,
				noHidden: true,
				sourceSkill: "qinzheng",
				content: function () {
					player.storage.qinzheng =
						player.getAllHistory("useCard").length + player.getAllHistory("respond").length;
					player.markSkill("qinzheng");
				},
			},
			spqiai: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return (
						player.countCards("he", function (card) {
							return get.type(card) != "basic";
						}) > 0
					);
				},
				filterCard: function (card) {
					return get.type(card) != "basic";
				},
				position: "he",
				filterTarget: lib.filter.notMe,
				delay: false,
				discard: false,
				lose: false,
				check: function (card) {
					var player = _status.event.player;
					if (get.position(card) == "e" && card.name == "jinhe") return 10;
					if (player.isHealthy()) return 7 - get.value(card);
					return 9 - get.value(card);
				},
				content: function () {
					"step 0";
					player.give(cards, target, true);
					"step 1";
					if (!target.isIn()) {
						event.finish();
						return;
					}
					if (player.isHealthy()) event._result = { index: 1 };
					else {
						var str = get.translation(player);
						target
							.chooseControl()
							.set("choiceList", ["令" + str + "回复1点体力", "令" + str + "摸两张牌"]);
					}
					"step 2";
					if (result.index == 0) player.recover();
					else player.draw(2);
				},
				ai: {
					order: 8,
					result: {
						player: 1,
						target: function (player, target) {
							if (ui.selected.cards.length) {
								var card = ui.selected.cards[0];
								var val = get.value(card, target);
								if (val < 0) return -1;
								if (target.hasSkillTag("nogain")) return 0;
								var useval = target.getUseValue(card);
								if (val < 1 || useval <= 0) return 0.1;
								return Math.sqrt(useval);
							}
							return 0;
						},
					},
				},
			},
			spshanxi: {
				audio: 2,
				init: function (player) {
					game.addGlobalSkill("spshanxi_bj");
				},
				onremove: function (player) {
					if (!game.hasPlayer((current) => current.hasSkill("spshanxi"), true))
						game.removeGlobalSkill("spshanxi_bj");
				},
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasMark("spshanxi");
					});
				},
				content: function () {
					"step 0";
					var eff = 0;
					var target = game.findPlayer(function (current) {
						return current != player && current.hasMark("spshanxi");
					});
					if (target) eff = -get.attitude(player, target) / Math.sqrt(Math.max(1, target.hp));
					player
						.chooseTarget(
							get.prompt("spshanxi"),
							"令一名其他角色获得“檄”",
							function (card, player, target) {
								return target != player && !target.hasMark("spshanxi");
							}
						)
						.set("ai", function (target) {
							return (
								-get.attitude(_status.event.player, target) /
									Math.sqrt(Math.max(1, target.hp)) -
								_status.event.eff
							);
						})
						.set("eff", eff);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("spshanxi", target);
						game.countPlayer(function (current) {
							if (current == target) current.addMark("spshanxi", 1);
							else {
								var num = current.countMark("spshanxi");
								if (num > 0) current.removeMark("spshanxi", num);
							}
						});
					}
				},
				marktext: "檄",
				intro: {
					name2: "檄",
					content: "已被设下索命檄文",
				},
				group: "spshanxi_suoming",
				ai: { threaten: 3.3 },
			},
			spshanxi_suoming: {
				audio: "spshanxi",
				trigger: { global: "recoverAfter" },
				forced: true,
				sourceSkill: "spshanxi",
				filter: function (event, player) {
					return event.player.hasMark("spshanxi") && event.player.hp > 0;
				},
				logTarget: "player",
				content: function () {
					"step 0";
					if (trigger.player.countCards("he") < 2) event._result = { bool: false };
					else
						trigger.player
							.chooseCard("he", 2, "交给" + get.translation(player) + "两张牌，或失去1点体力")
							.set("ai", function (card) {
								return 9 - get.value(card);
							});
					"step 1";
					if (!result.bool) trigger.player.loseHp();
					else trigger.player.give(result.cards, player);
				},
			},
			spshanxi_bj: {
				trigger: { player: "dieAfter" },
				sourceSkill: "spshanxi",
				filter: function (event, player) {
					for (let i of game.players) {
						if (i.hasSkill("spshanxi_suoming")) return false;
					}
					return true;
				},
				silent: true,
				forceDie: true,
				charlotte: true,
				content: function () {
					game.removeGlobalSkill("spshanxi_bj");
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							let suoming = game.findPlayer((current) => current.hasSkill("spshanxi_suoming"));
							if (
								suoming &&
								_status.event &&
								target === _status.event.dying &&
								target.hasMark("spshanxi")
							) {
								if (target.countCards("he") < 2) return "zerotarget";
								return [1, get.attitude(target, suoming) > 0 ? 0 : -1.2];
							}
						},
					},
				},
			},
			shameng: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					var hs = player.getCards("h");
					if (hs.length < 2) return false;
					var red = 0,
						black = 0;
					for (var i of hs) {
						if (get.color(i, player) == "red") red++;
						else black++;
						if (red > 1 || black > 1) return true;
					}
					return false;
				},
				complexCard: true,
				selectCard: 2,
				filterCard: function (card, player) {
					if (ui.selected.cards.length)
						return get.color(card, player) == get.color(ui.selected.cards[0], player);
					var color = get.color(card, player);
					return (
						player.countCards("h", function (cardx) {
							return cardx != card && color == get.color(cardx, player);
						}) > 0
					);
				},
				filterTarget: lib.filter.notMe,
				check: function (card) {
					return 7 - get.value(card);
				},
				position: "h",
				content: function () {
					target.draw(2);
					player.draw(3);
				},
				ai: {
					order: 6,
					result: { target: 2 },
				},
			},
			fubi: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				direct: true,
				skillAnimation: true,
				animationColor: "wood",
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("fubi"), lib.filter.notMe).set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("fubi", target);
						target.addSkill("fubi2");
						target.storage.fubi2.push(player);
					}
				},
			},
			fubi2: {
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				mod: {
					maxHandcard: function (player, num) {
						var list = player.getStorage("fubi2");
						for (var i of list) {
							if (i.isIn()) num += 3;
						}
						return num;
					},
				},
				mark: true,
				intro: { content: "若$存活，则手牌上限+3" },
			},
			zuici: {
				trigger: { player: "dying" },
				direct: true,
				filter: function (event, player) {
					return player.countCards("e") > 0;
				},
				content: function () {
					"step 0";
					var list = [];
					var cards = player.getCards("e");
					for (var i of cards) list.push(get.subtype(i));
					list.push("cancel2");
					player.chooseControl(list).set("prompt", get.prompt2("zuici"));
					"step 1";
					if (result.control != "cancel2") {
						player.disableEquip(result.control);
					} else event.finish();
					"step 2";
					if (player.hp < 1) player.recover(1 - player.hp);
				},
			},
			jianzhan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return lib.skill.jianzhan.filterTarget(null, player, current);
					});
				},
				filterTarget: function (card, player, target) {
					if (target == player) return false;
					if (ui.selected.targets.length) {
						var targetx = ui.selected.targets[0];
						return (
							targetx != target &&
							targetx.countCards("h") > target.countCards("h") &&
							targetx.inRange(target)
						);
					}
					var num = target.countCards("h");
					return game.hasPlayer(function (current) {
						return (
							current != target &&
							current != player &&
							current.countCards("h") < num &&
							target.inRange(current)
						);
					});
				},
				selectTarget: 2,
				complexTarget: true,
				targetprompt: ["出杀", "被出杀"],
				multitarget: true,
				content: function () {
					"step 0";
					if (!targets[0].canUse("sha", targets[1])) event._result = { index: 1 };
					else
						targets[0]
							.chooseControl()
							.set("choiceList", [
								"视为对" + get.translation(targets[1]) + "使用一张【杀】",
								"令" + get.translation(player) + "摸一张牌",
							])
							.set("ai", function () {
								var evt = _status.event.getParent();
								var eff = get.effect(
									evt.targets[1],
									{ name: "sha", isCard: true },
									evt.targets[0],
									evt.targets[0]
								);
								if (eff > 0) return 0;
								if (eff < 0 || get.attitude(evt.targets[0], evt.player) > 1) return 1;
								return 0;
							});
					"step 1";
					if (result.index == 0)
						targets[0].useCard({ name: "sha", isCard: true }, targets[1], false);
					else player.draw();
				},
				ai: {
					result: {
						target: function (player, target) {
							if (ui.selected.targets.length) {
								var from = ui.selected.targets[0];
								return get.effect(target, { name: "sha" }, from, target);
							}
							var effs = [0, 0];
							game.countPlayer(function (current) {
								if (current != target && target.canUse("sha", current)) {
									var eff = get.effect(current, { name: "sha" }, target, target);
									if (eff > effs[0]) effs[0] = eff;
									if (eff < effs[1]) effs[1] = eff;
								}
							});
							return effs[get.attitude(player, target) > 0 ? 0 : 1];
						},
					},
					order: 8.5,
					expose: 0.2,
				},
			},
			duoji: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				filter: function (event, player) {
					return (
						player.countCards("h") > 1 &&
						game.hasPlayer(function (current) {
							return current != player && current.countGainableCards(player, "e") > 0;
						})
					);
				},
				filterCard: true,
				selectCard: 2,
				filterTarget: function (card, player, target) {
					return target != player && target.countGainableCards(player, "e") > 0;
				},
				check: function (card) {
					return 8 - get.value(card);
				},
				position: "h",
				skillAnimation: true,
				animationColor: "metal",
				content: function () {
					player.awakenSkill("duoji");
					var cards = target.getGainableCards(player, "e");
					player.gain(cards, target, "give", "bySelf");
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							var num = 0,
								es = target.getCards("e"),
								val = 0;
							for (var i of es) {
								num += get.value(i, target);
							}
							for (var i of ui.selected.cards) {
								val += get.value(i, player);
							}
							if (Math.abs(num) > val) return -num;
							return 0;
						},
					},
				},
			},
		},
		characterIntro: {
			yuanhuan:
				"袁涣，字曜卿，陈郡扶乐（今河南省周口市太康县）人。东汉末年官员，出身陈郡袁氏，为东汉司徒袁滂之子。袁涣早年曾任郡功曹，后被公府征辟，相继被举为高第、秀才。汉末战乱时，袁涣流寓江淮一带，初为袁术所用，后投吕布。建安三年（198年），曹操率兵剿灭了吕布，袁涣又转投曹操，拜沛南部都尉，后又任谏议大夫、郎中令等职，在任上尽心尽责，以敢谏直言称名。袁涣恕思而后行，外表温柔而内心能断，处危难则勇气极大。汉末三国时期，唯有程昱、曹仁、袁涣三人被评价为勇冠贲育。",
			qiaogong:
				"桥公，亦作“乔公”，名字不详，是中国汉末三国时期的长者，江东二乔的父亲，三国时期庐江郡皖县（今安徽潜山）人，中国长篇古典名著《三国演义》中称之为“乔国老”。",
			liuzhang:
				"刘璋（生卒年不详），字季玉，江夏竟陵（今湖北省天门市）人。东汉末年宗室、军阀，益州牧刘焉幼子，在父亲刘焉死后继任益州牧。刘璋为人懦弱多疑。汉中张鲁骄纵，不听刘璋号令，于是刘璋杀张鲁母弟，双方成为仇敌，刘璋派庞羲攻击张鲁，战败。后益州内乱，平定后，又有曹操将前来袭击的消息。在内外交逼之下，刘璋听信手下张松、法正之言，迎接刘备入益州，想借刘备之力，抵抗曹操。不料此举乃引狼入室，刘备反手攻击刘璋，又有法正为内应，进至成都。成都吏民都想抵抗刘备，但刘璋为百姓计而开城出降，群下莫不流涕。刘备占据成都后，刘璋以振威将军的身份被迁往荆州居住，关羽失荆州后，刘璋归属东吴，被孙权任命为益州牧，不久后去世，卒年不详。",
			zhangzhongjing:
				"张仲景（约公元150～154年—约公元215～219年），名机，字仲景，南阳涅阳县（今河南省邓州市穰东镇张寨村）人。东汉末年著名医学家，被后人尊称为“医圣”。张仲景广泛收集医方，写出了传世巨著《伤寒杂病论》。它确立的“辨证论治”原则，是中医临床的基本原则，是中医的灵魂所在。在方剂学方面，《伤寒杂病论》也做出了巨大贡献，创造了很多剂型，记载了大量有效的方剂。其所确立的六经辨证的治疗原则，受到历代医学家的推崇。这是中国第一部从理论到实践、确立辨证论治法则的医学专著，是中国医学史上影响最大的著作之一，是后学者研习中医必备的经典著作，广泛受到医学生和临床大夫的重视。",
			xiangchong:
				"向宠（？～240年），左将军向朗之侄，蜀汉重要将领。具有谦和公允的性格品行，对军事通晓畅达，被汉昭烈帝刘备称赞。刘备时，历任牙门将（类似于主将帐下的偏将），诸葛亮北伐时，以向宠为中领军，封都亭侯。诸葛亮北行汉中前，特意在《出师表》中向刘禅推荐向宠。延熙三年（公元240年），南征汉嘉（今四川省雅安市）蛮夷时，遇害，尸体被其部下夺回，送回成都安葬。",
			caizhenji:
				"蔡贞姬，生卒年不详，汉末大儒蔡邕之女。其父蔡邕精于天文数理，妙解音律，是曹操的挚友和老师。生在书香门第的家庭的蔡贞姬，自小耳濡目染，精通书法与音律。后来，其父为避宦竖迫害，便随父亲来泰山依付羊衜一族，在羊衜的元配孔氏死后，便在父亲的做主下与之成亲。夫妻二人婚后生有两子一女：羊承、羊徽瑜、羊祜。在与羊衜成亲之前，羊衜和孔氏生有一子羊发。后来羊发、羊承同时生病，蔡贞姬知道不能两全，就专心照顾羊发，最后羊发痊愈，羊承病死。",
			zhouchu:
				"周处（236—297年），字子隐，吴郡阳羡（今江苏宜兴）人。西晋大臣、将领，东吴鄱阳太守周鲂之子。少时纵情肆欲，为祸乡里。后来改过自新，拜访名人陆机和陆云，浪子回头，发奋读书，留下“周处除三害”的传说，拜东观左丞，迁无难都督，功业胜过父亲。吴国灭亡后，出仕西晋，拜新平太守，转广汉太守，治境有方。入为散骑常侍，迁御史中丞，刚正不阿。得罪梁孝王司马肜。元康七年，出任建威将军，前往关中，讨伐氐羌齐万年叛乱，遇害于沙场。追赠平西将军，谥号为孝。",
			wangfuzhaolei:
				"王甫（？—222年），字国山，广汉郪（今四川三台县）人，三国时期蜀汉重臣。刘璋时，为益州书佐，之后归降刘备，先后担任绵竹令、荆州议曹从事，并在夷陵之战中阵亡。其子王祐，官至尚书右选郎。赵累，蜀汉大将关羽部下都督。后来吴将吕蒙袭取荆州，赵累被吴将潘璋等在临沮擒获。",
			wangling:
				"王凌（172年～251年6月15日），字彦云，太原郡祁县（今山西省祁县）人，三国时期曹魏将领，东汉司徒王允之侄。王凌出身太原王氏祁县房。举孝廉出身，授发干县令，迁中山太守。颇有政绩，迁司空（曹操）掾属。魏文帝曹丕即位，拜散骑常侍、兖州刺史。参加洞口之战，跟从张辽击败吴将吕范，加号建武将军，封宜城亭侯。太和二年（228年），王凌参与石亭之战，跟从曹休征伐东吴，力挽狂澜，历任扬豫二州刺史，治境有方。齐王曹芳继位，拜征东将军，联合孙礼击败吴将全琮，进封南乡侯，授车骑将军、仪同三司，正始九年（248年），代高柔为司空。嘉平元年（249年），代蒋济为太尉。嘉平三年（251年），不满太傅司马懿专擅朝政，联合兖州刺史令狐愚谋立楚王曹彪为帝，事泄自尽，时年八十岁，夷灭三族。",
			wujing: "吴景，本吴郡吴县（今江苏苏州）人，后迁居吴郡钱塘（今浙江杭州），孙坚妻子吴夫人（武烈皇后）之弟，孙策和孙权的舅舅，东汉末年将领。吴景因追随孙坚征伐有功，被任命为骑都尉。袁术上表举荐吴景兼任丹杨太守，讨伐前任太守周昕，占据丹杨。后遭扬州刺史刘繇逼迫，再度依附袁术，袁术任用他为督军中郎将，与孙贲共同进击樊能等人。又在秣陵攻打笮融、薛礼。袁术与刘备争夺徐州时，任吴景为广陵太守。建安二年（197年），吴景放弃广陵东归孙策，孙策任他为丹杨太守。朝廷使者吴景为扬武将军，郡守之职照旧。建安八年（203年），吴景死于任上。",
			feiyi: "费祎（？～253年2月），字文伟，江夏鄳县（今河南省罗山县）人，三国时期蜀汉名臣，与诸葛亮、蒋琬、董允并称为蜀汉四相。深得诸葛亮器重，屡次出使东吴，孙权、诸葛恪、羊茞等人以辞锋刁难，而费祎据理以答，辞义兼备，始终不为所屈。孙权非常惊异于他的才能，加以礼遇。北伐时为中护军，又转为司马。当时魏延与杨仪不和，经常争论，费祎常为二人谏喻，两相匡护，以尽其用。诸葛亮死后，初为后军师，再为尚书令，官至大将军，封成乡侯。费祎主政时，与姜维北伐的主张相左，执行休养生息的政策，为蜀汉的发展尽心竭力。费祎性格谦恭真诚，颇为廉洁，家无余财。后为魏降将郭循（一作郭脩）行刺身死。葬于今广元市昭化古城城西。",
			luotong:
				"骆统（193年－228年），字公绪。会稽郡乌伤县（今浙江义乌）人。东汉末年至三国时期吴国将领、学者，陈国相骆俊之子。骆统二十岁时已任乌程国相，任内有政绩，使得国中民户过万。又迁为功曹，行骑都尉。曾劝孙权尊贤纳士，省役息民。后出任为建忠中郎将。将军凌统逝世后，统领其部曲。因战功迁偏将军，封新阳亭侯，任濡须督。黄武七年（228年），骆统去世，年仅三十六岁。有集十卷，今已佚。",
		},
		characterTitle: {},
		card: {
			binglinchengxiax: {
				enable: true,
				type: "trick",
				derivation: "sp_xunchen",
				fullskin: true,
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					if (!player.isIn() || !target.isIn()) {
						event.finish();
						return;
					}
					event.showCards = get.cards(4);
					game.cardsGotoOrdering(event.showCards);
					player.showCards(event.showCards);
					"step 1";
					if (player.isIn() && target.isIn() && event.showCards.length) {
						for (var i of event.showCards) {
							if (i.name == "sha" && player.canUse(i, target, false)) {
								player.useCard(i, target, false);
								event.showCards.remove(i);
								event.redo();
								break;
							}
						}
					}
					"step 2";
					if (event.showCards.length) {
						while (event.showCards.length)
							ui.cardPile.insertBefore(event.showCards.pop().fix(), ui.cardPile.firstChild);
						game.updateRoundNumber();
					}
				},
				ai: {
					basic: {
						useful: 4,
						value: 3,
					},
					order: 4,
					result: {
						target: function (player, target, card, isLink) {
							if (get.effect(target, { name: "sha" }, player, target) == 0) return 0;
							return -2.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
					},
				},
			},
			tiaojiyanmei: {
				enable: true,
				type: "trick",
				derivation: "feiyi",
				fullskin: true,
				filterTarget: function (card, player, target) {
					var targets = [];
					if (ui.selected.targets.length) targets.addArray(ui.selected.targets);
					var evt = _status.event.getParent("useCard");
					if (evt && evt.card == card) targets.addArray(evt.targets);
					if (targets.length) {
						var hs = target.countCards("h");
						for (var i of targets) {
							if (i.countCards("h") != hs) return true;
						}
						return false;
					}
					return true;
				},
				recastable: true,
				selectTarget: 2,
				postAi: () => true,
				contentBefore: function () {
					if (!targets.length) return;
					var map = {};
					event.getParent().customArgs.default.tiaojiyanmei_map = map;
					var average = 0;
					for (var target of targets) {
						var hs = target.countCards("h");
						map[target.playerid] = hs;
						average += hs;
					}
					map.average = average / targets.length;
				},
				content: function () {
					var map = event.tiaojiyanmei_map,
						num1 = map.average,
						num2 = map[target.playerid];
					if (typeof num2 != "number") num2 = target.countCards("h");
					if (num2 > num1) target.chooseToDiscard("he", true);
					else if (num2 < num1) target.draw();
				},
				contentAfter: function () {
					"step 0";
					if (!player.isIn() || targets.length < 2) {
						event.finish();
						return;
					}
					var num = targets[0].countCards("h");
					for (var i = 1; i < targets.length; i++) {
						if (targets[i].countCards("h") != num) {
							event.finish();
							return;
						}
					}
					var cards = [];
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name == "lose" && evt.type == "discard" && evt.getParent(3).card == card)
							cards.addArray(evt.cards);
					});
					cards = cards.filterInD("d");
					if (cards.length) {
						event.tiaojiyanmei_cards = cards;
						player
							.chooseTarget("是否令一名角色获得" + get.translation(cards) + "？")
							.set("ai", function (target) {
								var evt = _status.event.getParent();
								return (
									get.attitude(evt.player, target) *
									get.value(evt.tiaojiyanmei_cards, target) *
									(target.hasSkillTag("nogain") ? 0.1 : 1)
								);
							});
					} else event.finish();
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "thunder");
						target.gain(event.tiaojiyanmei_cards, "gain2");
					}
				},
				ai: {
					order: 6.1,
					basic: {
						useful: 4,
						value: 3,
					},
					result: {
						target: function (player, target, card, isLink) {
							var targets = [];
							if (ui.selected.targets.length) targets.addArray(ui.selected.targets);
							var evt = _status.event.getParent("useCard");
							if (evt && evt.card == card) targets.addArray(evt.targets);
							if (
								evt &&
								evt.card == card &&
								evt.customArgs &&
								evt.customArgs.tiaojiyanmei_map
							) {
								var map = evt.customArgs.tiaojiyanmei_map,
									num1 = map.average,
									num2 = map[target.playerid];
								if (typeof num2 != "number") num2 = target.countCards("h");
								if (num2 > num1) {
									if (
										target.countCards("e", function (card) {
											return get.value(card) <= 0;
										})
									)
										return 1;
									return -1;
								}
								if (num2 < num1) return 1;
								return 0;
							}
							var cards = [card];
							if (card.cards) cards.addArray(card.cards);
							var fh = function (card) {
								return !cards.includes(card);
							};
							if (!targets.length) {
								if (get.attitude(player, target) < 0) {
									if (
										target.countCards("e", function (card) {
											return get.value(card, target) <= 0;
										})
									)
										return 1;
									if (
										game.hasPlayer(function (current) {
											return (
												current.countCards("h", fh) == target.countCards("h", fh) - 2
											);
										})
									)
										return -2;
									if (
										game.hasPlayer(function (current) {
											return current.countCards("h", fh) < target.countCards("h", fh);
										})
									)
										return -1;
								}
								if (
									target.countCards("e", function (card) {
										return get.value(card, target) <= 0;
									}) &&
									game.hasPlayer(function (current) {
										return current.countCards("h", fh) < target.countCards("h", fh);
									})
								)
									return 1;
								return 0;
							}
							var average = 0;
							for (var i of targets) average += i.countCards("h", fh);
							if (!targets.includes(target)) {
								var th = target.countCards("h", fh);
								average += th;
								average /= targets.length + 1;
								if (th == average) return 0;
								if (th < average) return th == average - 1 ? 2 : 1;
								if (th > average) {
									if (
										target.countCards("e", function (card) {
											return get.value(card) <= 0;
										})
									)
										return 1;
									return -0.5;
								}
								return 0;
							}
							average /= targets.length;
							if (th < average) return 1;
							if (th > average) {
								if (
									target.countCards("e", function (card) {
										return get.value(card) <= 0;
									})
								)
									return 1;
								return -1;
							}
							return 0;
						},
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			liuba_prefix: "手杀",
			sp_zhujun_prefix: "手杀",
			sp_huangfusong_prefix: "手杀",
			sp_zhangchangpu_prefix: "手杀",
			sp_cuiyan_prefix: "手杀",
			sp_huaman_prefix: "手杀",
			sp_gaolan_prefix: "手杀",
			sunyi_prefix: "手杀",
			sp_wangshuang_prefix: "手杀",
			sp_zongyu_prefix: "手杀",
			db_wenyang_prefix: "手杀",
			sp_yanghu_prefix: "手杀",
			sp_zhangwen_prefix: "手杀",
			sp_xujing_prefix: "手杀",
			sp_huaxin_prefix: "手杀",
			zhouchu_prefix: "手杀",
			sp_mifuren_prefix: "手杀",
			sp_xinpi_prefix: "手杀",
			sp_bianfuren_prefix: "手杀",
			sp_duyu_prefix: "手杀",
			luotong_prefix: "手杀",
			sp_wangcan_prefix: "手杀",
			sp_sunshao_prefix: "手杀",
			sp_xunchen_prefix: "手杀",
			sp_kongrong_prefix: "手杀",

			sp_wangcan: "手杀王粲",
			spqiai: "七哀",
			spqiai_info:
				"出牌阶段限一次，你可以将一张非基本牌交给一名其他角色。然后其选择一项：①你回复1点体力。②你摸两张牌。",
			spshanxi: "善檄",
			spshanxi_suoming: "善檄",
			spshanxi_info:
				"出牌阶段开始时，你可令一名其他角色获得“檄”标记并清除场上已有的其他“檄”标记（若有）。有“檄”标记的角色回复体力时，若其体力值大于0，则其需选择一项：①交给你两张牌。②失去1点体力。",
			sp_chenzhen: "陈震",
			shameng: "歃盟",
			shameng_info:
				"出牌阶段限一次，你可弃置两张颜色相同的手牌并选择一名其他角色。其摸两张牌，然后你摸三张牌。",
			sp_sunshao: "手杀孙邵",
			fubi: "辅弼",
			fubi2: "辅弼",
			fubi_info: "游戏开始时，你可选择一名其他角色。该角色的手牌上限于你死亡前+3。",
			zuici: "罪辞",
			zuici_info: "当你进入濒死状态时，你可废除你的一个不为空的装备栏，然后将体力值回复至1点。",
			sp_xunchen: "手杀荀谌",
			jianzhan: "谏战",
			jianzhan_info:
				"出牌阶段限一次，你可选择一名其他角色A和其攻击范围内的另一名手牌数小于其的角色B。A选择一项：①视为对B使用一张【杀】。②令你摸一张牌。",
			duoji: "夺冀",
			duoji_info:
				"限定技，出牌阶段，你可弃置两张手牌并选择一名装备区有牌的其他角色。你获得其装备区里的所有牌。",
			binglinchengxiax: "兵临城下",
			binglinchengxiax_info:
				"出牌阶段，对一名其他角色使用。你亮出牌堆顶的四张牌，依次对其使用其中所有的【杀】，然后将剩余的牌置于牌堆顶。",
			mjweipo: "危迫",
			mjweipo_effect: "危迫",
			mjweipo_remove: "危迫",
			mjweipo_info: "每回合限一次，出牌阶段，你可以选择一个智囊或【兵临城下】，令一名没有〖危迫〗效果的角色获得如下一次性效果直到你下回合开始：其可于出牌阶段弃置一张【杀】，并获得一张你选择的牌。",
			mjchenshi: "陈势",
			mjchenshi_player: "陈势",
			mjchenshi_target: "陈势",
			mjchenshi_info: "当有角色使用【兵临城下】指定第一个目标后，其可交给你一张牌，并将牌堆顶三张牌中所有不为【杀】的牌置入弃牌堆；当有角色成为【兵临城下】的目标后，其可交给你一张牌，然后将牌堆顶三张牌中所有的【杀】置入弃牌堆。",
			mjmouzhi: "谋识",
			mjmouzhi_info:
				"锁定技，当你受到伤害时，若伤害渠道对应的牌和你上次受到的伤害花色相同，则你防止此伤害。",
			luotong: "手杀骆统",
			qinzheng: "勤政",
			qinzheng_info:
				"锁定技，当你使用或打出牌时，若你本局游戏内使用或打出过的牌数和：为3的倍数，你从牌堆中获得一张【杀】或【闪】；为5的倍数，你从牌堆中获得一张【桃】或【酒】；为8的倍数，你从牌堆中获得一张【决斗】或【无中生有】（可获得对应的衍生替换牌）。",
			sp_duyu: "手杀杜预",
			spwuku: "武库",
			spwuku_info: "锁定技，当有角色使用装备牌时，若你的“武库”数小于3，则你获得一个“武库”。",
			spwuku_info_guozhan:
				"锁定技，当有其他势力的角色使用装备牌时，若你的“武库”数小于2，则你获得一个“武库”。",
			spsanchen: "三陈",
			spsanchen_info:
				"觉醒技，结束阶段，若你的“武库”数大于2，则你加1点体力上限并回复1点体力，然后获得〖灭吴〗。",
			spmiewu: "灭吴",
			spmiewu2: "灭吴",
			spmiewu_backup: "灭吴",
			spmiewu_info:
				"每回合限一次。你可弃置一枚“武库”并将一张牌当做任意基本牌或锦囊牌使用，然后摸一张牌。",
			sp_bianfuren: "手杀卞夫人",
			spwanwei: "挽危",
			spwanwei_info:
				"每轮累计限一次。①出牌阶段，你可选择一名其他角色。②当有其他角色处于濒死状态时。你可令该角色回复X+1点体力（至少回复至1），然后你失去X点体力。（X为你的体力值）",
			spyuejian: "约俭",
			spyuejian_info:
				"锁定技，你的手牌上限基数等于你的体力上限。当你处于濒死状态时，你可弃置两张牌，然后回复1点体力。",
			feiyi: "手杀费祎",
			feiyi_prefix: "手杀",
			reshengxi: "生息",
			reshengxi_info: "结束阶段，若你于本回合内未造成过伤害，则你可摸两张牌。",
			fyjianyu: "谏喻",
			fyjianyu_info: "每轮限一次。出牌阶段，你可选择两名角色，令这些角色获得“喻”直到你的下回合开始。当一名有“喻”的角色A于其出牌阶段内使用牌指定另一名有“喻”的角色B为目标时，你令B摸一张牌。",
			mjshengxi: "生息",
			mjshengxi_info:
				"准备阶段，你可以获得一张【调剂盐梅】；结束阶段，若你本回合使用过牌且未造成伤害，则你可以获得一张智囊或摸一张牌。",
			mjkuanji: "宽济",
			mjkuanji_info:
				"每回合限一次。当你因弃置而失去牌后，你可令一名其他角色获得其中的一张牌，然后你摸一张牌。",
			tiaojiyanmei: "调剂盐梅",
			tiaojiyanmei_info:
				"出牌阶段，对两名手牌数不均相同的其他角色使用。若目标角色于此牌使用准备工作结束时的手牌数大于此时所有目标的平均手牌数，其弃置一张牌。若小于则其摸一张牌。此牌使用结束后，若所有目标角色的手牌数均相等，则你可令一名角色获得所有因执行此牌效果而弃置的牌。",
			refubi: "辅弼",
			refubi_info:
				"游戏开始时，你可令一名其他角色获得“辅弼”标记。有“辅弼”标记的角色的准备阶段开始时，你可选择一项：①令其本回合使用【杀】的次数上限+1。②令其本回合的手牌上限+3。",
			rezuici: "罪辞",
			rezuici_backup: "罪辞",
			rezuici_info:
				"出牌阶段，或当你处于濒死状态时，你可以废除一个有牌的装备栏并回复2点体力，然后可以移动“辅弼”标记。",
			mjdingyi: "定仪",
			mjdingyi_info:
				"游戏开始时，你选择一个效果（相同效果不可叠加）并令全场角色获得之：①摸牌阶段额定摸牌数+1。②手牌上限+2。③攻击范围+1。④脱离濒死状态时回复1点体力。",
			mjzuici: "罪辞",
			mjzuici_info:
				"当你受到伤害后，你可令伤害来源失去〖定仪〗效果，然后令其从牌堆中获得一张由你选择的智囊。",
			mjfubi: "辅弼",
			mjfubi_info:
				"每轮限一次。出牌阶段，你可选择一项：①更换一名角色的〖定仪〗效果。②弃置一张牌并令一名角色的〖定仪〗效果翻倍直到你的下回合开始。",
			wujing: "吴景",
			heji: "合击",
			heji_info:
				"当有角色使用的【决斗】或红色【杀】结算完成后，若此牌对应的目标数为1，则你可以对相同的目标使用一张【杀】或【决斗】（无距离和次数限制）。若你以此法使用的牌不为转化牌，则你从牌堆中随机获得一张红色牌。",
			liubing: "流兵",
			liubing_info: "锁定技。①你于出牌阶段使用的第一张非虚拟【杀】的花色视为♦。②其他角色于其出牌阶段内使用的非转化黑色【杀】结算结束后，若此【杀】未造成伤害，则你获得之。",
			sp_mifuren: "手杀糜夫人",
			spcunsi: "存嗣",
			spcunsi2: "存嗣",
			spcunsi_info: "出牌阶段限一次，你可将武将牌翻至背面并选择一名其他角色。其从牌堆或弃牌堆中获得一张【杀】，且下一张【杀】的伤害值基数+1。",
			spguixiu: "闺秀",
			spguixiu_info:
				"锁定技，当你受到伤害后，若你的武将牌背面朝上，则你将武将牌翻至正面。当你的武将牌从背面翻至正面时，你摸一张牌。",
			qingyu: "清玉",
			qingyu_info:
				"使命技。①当你受到伤害时，你弃置两张牌，然后防止此伤害。②使命：准备阶段，若你的体力值等于体力上限且你没有手牌，则你获得〖悬存〗。③失败：当你进入濒死状态时，你减1点体力上限。",
			xuancun: "悬存",
			xuancun_info:
				"其他角色的回合结束时，若你的手牌数小于体力值，则你可以令其摸X张牌（X为你的体力值与手牌数之差且至多为2）。",
			xinlirang: "礼让",
			xinlirang_info:
				"①其他角色的摸牌阶段开始时，若你没有“谦”标记，则你可以获得一枚“谦”标记。若如此做，其额定摸牌数+2，且本回合的弃牌阶段开始时，你可以获得其弃置的至多两张牌。②摸牌阶段开始时，若你有“谦”标记，则你跳过此摸牌阶段并移除“谦”标记。",
			xinmingshi: "名仕",
			xinmingshi_info: "锁定技，当你受到伤害后，若你有“谦”标记，则伤害来源弃置其区域内的一张牌。若此牌为：黑色：你获得之。红色，你回复1点体力。",
			sp_xinpi: "手杀辛毗",
			spyinju: "引裾",
			spyinju2: "引裾",
			spyinju_info:
				"出牌阶段限一次，你可令一名其他角色选择一项：①对你使用一张【杀】（无距离限制）。②其下个回合的准备阶段开始时，跳过出牌阶段和弃牌阶段。",
			spchijie: "持节",
			spchijie_info:
				"每回合限一次。当你成为其他角色使用牌的唯一目标时，你可判定。若结果大于6，则你取消此牌的所有目标。",
			reduoji: "夺冀",
			reduoji_info:
				"出牌阶段限一次，你可将一张牌置于其他角色的武将牌上，称为“冀”。当有装备牌因使用而进入一名角色的装备区后，若该角色有“冀”且其为使用者，则你获得此装备牌，其移去一个“冀”并摸一张牌。一名其他角色的回合结束后，若其有“冀”，则你获得其的所有“冀”。",
			wangling: "王凌",
			mouli: "谋立",
			mouli_info:
				"出牌阶段限一次，你可以将一张手牌交给一名其他角色，其获得如下效果直到你的下回合开始：其可以将黑色牌当做【杀】，红色牌当做【闪】使用。其第一次触发“使用【杀】/【闪】结算完成后”的时机时，你摸三张牌。",
			zifu: "自缚",
			zifu_info: "锁定技，当有角色死亡时，若其因你获得的“谋立”效果未过期，则你减2点体力上限。",
			xingqi: "星启",
			xingqi_info:
				"①当你使用牌时，若此牌不为延时锦囊牌且你没有同名的“备”，则你获得一枚与此牌名称相同的“备”。②结束阶段，你可移去一枚“备”，然后从牌堆中获得一张与此“备”名称相同的牌。",
			xinzifu: "自缚",
			xinzifu_info:
				"锁定技。出牌阶段结束时，若你本阶段内未使用牌，则你移去所有“备”且本回合的手牌上限-1。",
			mibei: "秘备",
			mibei_info:
				"使命技。①使命：当你使用的牌结算完成后，若你的“备”中包含的基本牌，锦囊牌，装备牌数量均大于1，则你从牌堆中获得这三种类型的牌各一张并获得技能“谋立”。②失败：结束阶段开始时，若你没有“备”，且你于本回合的准备阶段开始时也没有“备”，则你减1点体力上限。",
			xinmouli: "谋立",
			xinmouli_info:
				"出牌阶段限一次，你可以指定一名其他角色。其移去你的一个“备”，然后从牌堆中获得一张与此“备”名称相同的牌。",
			wangfuzhaolei: "王甫赵累",
			xunyi: "殉义",
			xunyi2: "殉义",
			xunyi3: "殉义",
			xunyi_info: "①游戏开始时，你令一名其他角色获得“义”；拥有“义”效果的角色死亡后，你可以令另一名其他角色获得“义”。②当你或“义”角色造成/受到1点伤害后，若受伤角色/伤害来源不为另一方，令另一方摸一张牌/弃置一张牌。",
			zhouchu: "手杀周处",
			xianghai: "乡害",
			xianghai_info: "锁定技，其他角色的手牌上限-1。你手牌区的装备牌均视为【酒】。",
			chuhai: "除害",
			chuhai_info:
				"出牌阶段限一次，你可以摸一张牌，然后和一名其他角色拼点。若你赢，则你观看其手牌，并从牌堆/弃牌堆中获得其手牌中包含的类型的牌各一张，且当你于此阶段内对其造成伤害后，你将牌堆/弃牌堆中的一张装备牌置于你的一个空置装备栏内。",
			rechuhai: "除害",
			rechuhai_info:
				"使命技。①出牌阶段限一次，你可以摸一张牌，然后和一名其他角色拼点。若你赢，则你观看其手牌，并从牌堆/弃牌堆中获得其手牌中包含的类型的牌各一张，且当你于此阶段内对其造成伤害后，你将牌堆/弃牌堆中的一张装备牌置于你的一个空置装备栏内。②当你因发动〖除害①〗而展示拼点牌时，你令此牌的点数+X（X=(4-你装备区的牌数)）。③使命：当有装备牌进入你的装备区后，若你的装备区内有至少三张牌，则你将体力值回复至上限，失去〖乡害〗并获得〖彰名〗。④失败：当你因发动〖除害①〗发起的拼点没赢时，若你的最终点数不大于6，则你触发使命失败分支。",
			zhangming: "彰名",
			zhangming_info:
				"锁定技。①你使用的♣牌不能被其他角色响应。②每回合限一次，当你对其他角色造成伤害后，你随机弃置其一张手牌，然后你从牌堆或弃牌堆中获得与其展示牌类型不同类型的牌各一张（若其没有手牌，则你改为从牌堆或弃牌堆中获得所有类型牌各一张），且以此法得到的牌不计入本回合的手牌上限。",
			sp_kongrong: "手杀孔融",
			spmingshi: "名士",
			spmingshi_info: "锁定技，当你受到1点伤害后，伤害来源弃置一张牌。",
			splirang: "礼让",
			splirang_info:
				"出牌阶段限一次，你可以弃置所有手牌，然后将其中的至多X张牌交给一名其他角色（X为你的体力值），之后摸一张牌。",
			caizhenji: "蔡贞姬",
			sheyi: "舍裔",
			sheyi_info:
				"每轮限一次。当有体力值小于你的其他角色受到伤害时，你可以交给其至少X张牌并防止此伤害（X为你的体力值）。",
			tianyin: "天音",
			tianyin_info: "锁定技，结束阶段开始时，你从牌堆中获得每种本回合未使用过的类型的牌各一张。",
			xiangchong: "向宠",
			guying: "固营",
			guying_info:
				"锁定技。每回合限一次，当你于回合外因使用/打出/弃置而失去牌后，若牌数为1，则你获得一枚“固”并令当前回合角色选择一项：①随机交给你一张牌。②令你获得本次失去的牌，若为装备牌，则你使用之。准备阶段开始时，你移去所有“固”并弃置等量的牌。",
			muzhen: "睦阵",
			muzhen_backup: "睦阵",
			muzhen_info: "出牌阶段各限一次。①你可以将两张牌交给一名装备区内有牌的其他角色，然后获得其装备区内的一张牌。②你可以将一张装备牌置于其他角色的装备区内，然后获得其一张手牌。",
			sp_huaxin: "手杀华歆",
			hxrenshi: "仁仕",
			hxrenshi_info: "出牌阶段每名角色限一次。你可以将一张手牌交给一名其他角色。",
			debao: "德保",
			debao_info:
				"锁定技，当其他角色获得你的牌后，若你的“仁”数小于你的体力上限，则你将牌堆顶的一张牌置于你的武将牌上，称为“仁”。准备阶段，你获得所有“仁”。",
			buqi: "不弃",
			buqi_info:
				"锁定技，当有角色进入濒死状态时，若你的“仁”数大于1，则你移去两张“仁”并令其回复1点体力。一名角色死亡后，你将所有“仁”置入弃牌堆。",
			yuanqing: "渊清",
			yuanqing_info: "锁定技，出牌阶段结束时，你随机将弃牌堆中你本回合使用过的牌类型的各一张牌置于仁库中。",
			shuchen: "疏陈",
			shuchen_info:
				"锁定技，当有角色进入濒死状态时，若仁库中的牌数大于三，则你获得仁库中的所有牌，然后其回复1点体力。",
			sp_xujing: "手杀许靖",
			boming: "博名",
			boming_info:
				"出牌阶段限两次，你可以将一张牌交给一名其他角色。结束阶段，若你本回合以此法失去了两张以上的牌，则你摸一张牌。",
			ejian: "恶荐",
			ejian_info:
				"锁定技，每名角色限一次。当有其他角色因〖博名〗而得到了你的牌后，若其拥有与此牌类型相同的其他牌，则你令其选择一项：①受到1点伤害。②展示所有手牌，并弃置所有与此牌类别相同的牌。",
			zhangzhongjing: "张机",
			jishi: "济世",
			jishi_info:
				"锁定技。①当你使用的牌结算完成后，若你未因此牌造成过伤害，则你将此牌对应的所有实体牌置于仁库中。②当有牌不因溢出而离开仁库时，你摸一张牌。",
			liaoyi: "疗疫",
			liaoyi_info:
				"其他角色的回合开始时，若其：①手牌数小于体力值且仁库内牌数大于等于X，则你可令其从仁库中获得X张牌；②手牌数大于体力值，则你可以令其将X张牌置于仁库中（X为其手牌数与体力值之差且至多为4）。",
			xinliaoyi: "疗疫",
			xinliaoyi_info:
				"其他角色的回合开始时，你可选择一项：①令其从仁库中获得一张牌。②若其手牌数大于体力值，则令其将X张手牌置入仁库（X为其手牌数与体力值之差）。",
			binglun: "病论",
			binglun_info:
				"出牌阶段限一次，你可以将仁库中的一张牌置于弃牌堆并选择一名角色。该角色选择一项：①摸一张牌。②于其下回合结束时回复1点体力。",
			sp_zhangwen: "手杀张温",
			gebo: "戈帛",
			gebo_info: "锁定技，当有角色回复体力后，你将牌堆顶的一张牌置入仁库。",
			spsongshu: "颂蜀",
			spsongshu_info:
				"其他角色的摸牌阶段开始时，若其体力值大于你且仁库内有牌，则你可以令其放弃摸牌。其改为获得X张仁（X为你的体力值且至多为5），且本回合内不能使用牌指定其他角色为目标。",
			liuzhang: "刘璋",
			xiusheng: "休生",
			xiusheng_info:
				"锁定技。准备阶段，你将所有“生”置入弃牌堆，然后摸X张牌，并将等量的牌置于武将牌上，称为“生”（X为你因〖引狼〗而选择的势力的存活角色数）。",
			yinlang: "引狼",
			yinlang_info:
				"①每轮限一次。回合开始时，你选择场上的一个势力。②一名角色的出牌阶段开始时，若其势力与你选择的势力相同，则其选择一项：1.获得你的一张“生”，然后其本回合使用牌时不能指定你以外的角色为目标。2.你获得一张“生”。",
			huaibi: "怀璧",
			huaibi_info: "主公技，锁定技。你的手牌上限+X（X为你因〖引狼〗而选择的势力的存活角色数）。",
			jutu: "据土",
			jutu_info:
				"锁定技，准备阶段，你获得所有你武将牌上的“生”，然后摸X+1张牌，然后将X张牌置于你的武将牌上，称为“生”（X为你因〖邀虎〗选择势力的角色数量)。",
			yaohu: "邀虎",
			yaohu_info:
				"每轮限一次，你的回合开始时，你须选择场上一个势力。该势力其他角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：①对你指定的另一名的其他角色使用一张【杀】（无距离和次数限制）；②交给你两张牌。",
			rehuaibi: "怀璧",
			rehuaibi_info: "主公技，锁定技，你的手牌上限+X（X为你因〖邀虎〗选择势力的角色数量)。",
			qiaogong: "桥公",
			yizhu: "遗珠",
			yizhu_info:
				"①结束阶段，你摸两张牌，然后将两张牌随机插入牌堆前2X张牌的位置中（X为角色数，选择牌的牌名对其他角色可见）。②其他角色使用“遗珠”牌指定唯一目标时，你可以取消此目标，然后你清除对应的“遗珠”标记。",
			luanchou: "鸾俦",
			luanchou_info:
				"出牌阶段限一次，你可令两名角色获得“姻”标记并清除原有标记。拥有“姻”标记的角色视为拥有技能〖共患〗。",
			gonghuan: "共患",
			gonghuan_info:
				"锁定技。每回合限一次，一名其他角色受到伤害时，若其拥有“姻”标记且其体力值小于你，则你将伤害转移给自己。此伤害结算结束后，你与其移去“姻”标记。",
			sp_yanghu: "手杀羊祜",
			mingfa: "明伐",
			mingfa_info:
				"①结束阶段，你可展示一张牌并记录为“明伐”。②出牌阶段开始时，若“明伐”牌在你的手牌区或装备区，则你可以使用“明伐”牌与一名其他角色拼点。若你赢：你获得对方一张牌并从牌堆中获得一张点数等于“明伐”牌牌面点数-1的牌。若你没赢：你本回合不能使用牌指定其他角色为目标。③你的拼点牌亮出后，你令此牌的点数+2。",
			rongbei: "戎备",
			rongbei_info:
				"限定技。出牌阶段，你可选择一名有空装备栏的角色。系统为该角色的每个空装备栏选择一张装备牌，然后该角色使用之。",
			db_wenyang: "手杀文鸯",
			dbquedi: "却敌",
			dbquedi_info:
				"每回合限一次。当你使用【杀】或【决斗】指定唯一目标后，你可选择：①获得目标角色的一张手牌。②弃置一张基本牌，并令此牌的伤害值基数+1。③背水：减1点体力上限，然后依次执行上述所有选项。",
			dbzhuifeng: "椎锋",
			dbzhuifeng_info:
				"魏势力技。每回合限两次，你可以失去1点体力并视为使用一张【决斗】（你死亡后仍然结算）。当你因此【决斗】而受到伤害时，你防止此伤害并令此技能失效直到出牌阶段结束。",
			dbchongjian: "冲坚",
			dbchongjian_backup: "冲坚",
			dbchongjian_info:
				"吴势力技。你可以将一张装备牌当做一种【杀】（无距离限制且无视防具）或【酒】使用。当你以此法使用【杀】造成伤害后，你获得目标角色装备区内的X张牌（X为伤害值）。",
			dbchoujue: "仇决",
			dbchoujue_info:
				"锁定技。当你杀死其他角色后，你加1点体力上限并摸两张牌，然后本回合发动【却敌】的次数上限+1。",
			sp_chendong: "手杀陈武董袭",
			sp_chendong_prefix: "手杀",
			spyilie: "毅烈",
			spyilie_info:
				"出牌阶段开始时，你可选择：①本阶段内使用【杀】的次数上限+1。②本回合内使用【杀】被【闪】抵消时，摸一张牌。③背水：失去1点体力，然后依次执行上述所有选项。",
			spfenming: "奋命",
			spfenming_info:
				"出牌阶段限一次，你可以选择一名体力值不大于你的角色。若其：未横置，其横置；已横置，你获得其一张牌。",
			yuanhuan: "袁涣",
			qingjue: "请决",
			qingjue_info: "每轮限一次。当有其他角色A使用牌指定另一名体力值小于A且不处于濒死状态的其他角色B为唯一目标时，你可以摸一张牌，然后与A拼点。若你赢，你取消此目标。若你没赢，你将此牌的目标改为自己。",
			fengjie: "奉节",
			fengjie2: "奉节",
			fengjie_info: "锁定技，准备阶段开始时，你选择一名其他角色并获得如下效果直到你下回合开始：一名角色的结束阶段开始时，你将手牌摸至（至多摸至四张）或弃置至与其体力值相等。",
			sp_zongyu: "手杀宗预",
			zhibian: "直辩",
			zhibian_info:
				"准备阶段，你可以和一名其他角色拼点。若你赢，你可选择：①将其装备区/判定区内的一张牌移动到你的对应区域。②回复1点体力。③背水：跳过下个摸牌阶段，然后依次执行上述所有选项；若你没赢，你失去1点体力。",
			yuyan: "御严",
			yuyan_info:
				"锁定技。当你成为非转换的【杀】的目标时，若使用者的体力值大于你且此【杀】有点数，则你令使用者选择一项：①交给你一张点数大于此【杀】的牌。②取消此目标。",
			sp_wangshuang: "手杀王双",
			yiyong: "异勇",
			yiyong_info:
				"当你受到其他角色造成的渠道为【杀】的伤害后，若你的装备区内有武器牌，则你可以获得此【杀】对应的所有实体牌，然后将这些牌当做【杀】对伤害来源使用（无距离限制）。若其装备区内没有武器牌，则此伤害+1。",
			shanxie: "擅械",
			shanxie_info:
				"①出牌阶段限一次，你可从牌堆中获得一张武器牌。若牌堆中没有武器牌，则你改为随机获得一名角色装备区内的一张武器牌。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
			shanxie_info_old:
				"①出牌阶段限一次，你可选择一项：⒈从牌堆中获得一张武器牌。⒉获得一名其他角色装备区内的一张武器牌并使用，然后其将一张手牌当做【杀】对你使用。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
			sunyi: "手杀孙翊",
			zaoli: "躁厉",
			zaoli_info:
				"锁定技。①你不能于回合内使用或打出你手牌中不为本回合得到的牌。②当你使用或打出手牌时，你获得一个“厉”（至多4个）。③回合开始时，若你有“厉”，则你移去所有“厉”并弃置任意张牌，然后摸X+Y张牌。若X大于2，你失去1点体力（X为你移去的标记数，Y为你弃置的牌数）。",
			sp_gaolan: "手杀高览",
			spjungong: "峻攻",
			spjungong_info:
				"出牌阶段，你可失去X+1点体力或弃置X+1张牌，视为对一名其他角色使用【杀】（不计入次数和距离限制，X为你本回合内发动过〖峻攻〗的次数）。若你因此【杀】造成了伤害，则你令此技能失效直到回合结束。",
			spdengli: "等力",
			spdengli_info:
				"当你使用【杀】指定目标后，或成为【杀】的目标后，若使用者和目标的体力值相等，则你摸一张牌。",
			sp_huaman: "手杀花鬘",
			spxiangzhen: "象阵",
			spxiangzhen_info: "锁定技。①【南蛮入侵】对你无效。②当有角色使用的【南蛮入侵】结算结束后，若有角色因此牌受到过伤害，则你与伤害来源各摸一张牌。",
			spfangzong: "芳踪",
			spfangzong_info:
				"锁定技。①你不能于回合内使用具有伤害标签的牌指定攻击范围内的角色为目标。②攻击范围内包含你的角色不能使用具有伤害标签的牌指定你为目标。③结束阶段，你将手牌摸至X张（X为场上存活人数且至多为8）。",
			spxizhan: "嬉战",
			spxizhan_info:
				"其他角色的回合开始时，你须选择一项：①失去1点体力。②弃置一张牌并令〖芳踪〗于本回合失效，然后若此牌的花色为：♠，其视为使用一张【酒】；♥，你视为使用一张【无中生有】；♣，你视为对其使用【铁索连环】；♦：你视为对其使用火【杀】（无距离限制）。",
			sp_cuiyan: "手杀崔琰",
			spyajun: "雅俊",
			spyajun_info:
				"①摸牌阶段，你令额定摸牌数+1。②出牌阶段开始时，你可以用一张本回合得到的牌与其他角色拼点。若你赢，则你可将其中一张拼点牌置于牌堆顶。若你没赢，你本回合的手牌上限-1。",
			spzundi: "尊嫡",
			spzundi_info:
				"出牌阶段限一次，你可以弃置一张手牌并选择一名角色，然后你进行判定。若结果为：黑色，其摸三张牌；红色，其可以移动场上的一张牌。",
			sp_zhangchangpu: "手杀张昌蒲",
			spdifei: "抵诽",
			spdifei_info:
				"锁定技。每回合限一次，当你受到伤害后，你摸一张牌或弃置一张手牌，然后展示所有手牌。若此伤害的渠道为没有花色的牌或你的手牌中没有与此牌花色相同的牌，则你回复1点体力。",
			spyanjiao: "严教",
			spyanjiao_info:
				"出牌阶段限一次。你可以将手牌中一种花色的所有牌交给一名其他角色，对其造成1点伤害。然后你于自己的下回合开始时摸等量的牌。",
			sp_jiangwan: "手杀蒋琬",
			sp_jiangwan_prefix: "手杀",
			spzhenting: "镇庭",
			spzhenting_info:
				"每回合限一次。当你攻击范围内的角色成为【杀】或延时锦囊的目标时，若你不是此牌的使用者且不是此牌的目标，则你可以将此目标改为自己。然后你选择一项：①弃置使用者的一张手牌。②摸一张牌。",
			spjincui: "尽瘁",
			spjincui_info:
				"限定技。出牌阶段，你可以和一名其他角色交换位置，然后失去X点体力（X为你的体力值）。",
			sp_jiangqing: "蒋钦",
			spjianyi: "俭衣",
			spjianyi_info:
				"锁定技。其他角色的回合结束时，若弃牌堆中有于本回合内因弃置而进入弃牌堆的防具牌，则你获得其中一张。",
			spshangyi: "尚义",
			spshangyi_info:
				"出牌阶段限一次。你可以弃置一张牌并选择一名其他角色。其观看你的手牌，然后你观看其手牌并获得其中的一张。",
			sp_lvfan: "手杀吕范",
			sp_lvfan_prefix: "手杀",
			spdiaodu: "调度",
			spdiaodu_info: "准备阶段，你可令一名角色摸一张牌，然后移动其装备区内的一张牌。",
			spdiancai: "典财",
			spdiancai_info:
				"其他角色的结束阶段开始时，你可以令至多X名角色各摸一张牌（X为你本回合失去的手牌数）。",
			mbdiaodu: "调度",
			mbdiaodu_info: "准备阶段，你可以移动一名角色装备区内的一张牌（不能移动给自己），然后其摸一张牌。",
			mbdiancai: "典财",
			mbdiancai_info:
				"其他角色的出牌阶段阶段结束后，若你本阶段失去的牌数不小于你的体力值，则你可将手牌数补至体力上限。",
			spyanji: "严纪",
			spyanji_info: "出牌阶段开始时，你可以进行“整肃”。",
			sp_huangfusong: "手杀皇甫嵩",
			spzhengjun: "整军",
			spzhengjun_info:
				"①出牌阶段开始时，你可进行“整肃”。②当你因整肃而摸牌或回复体力后，你可令一名其他角色摸两张牌或回复1点体力。",
			spshiji: "势击",
			spshiji_info:
				"当你对其他角色造成属性伤害时，若你的手牌数不为全场唯一最多，则你可以观看其手牌。你令其弃置其中的所有红色牌，然后摸等量的牌。",
			sptaoluan: "讨乱",
			sptaoluan_info:
				"每回合限一次。一名角色的判定结果确定时，若结果的花色为♠，则你可以终止导致此判定发生的上级事件。然后选择一项：①获得判定牌对应的实体牌。②视为对判定角色使用一张火【杀】（无距离和次数限制）。",
			sp_zhujun: "手杀朱儁",
			yangjie: "佯解",
			yangjie_info:
				"出牌阶段限一次，你可以摸一张牌并和一名其他角色A拼点。当你以此法展示你的拼点牌时，你令此牌点数-X（X为你已损失的体力值）。若你没赢，则你可以令另一名其他角色B获得两张拼点牌，然后其视为对A使用一张火【杀】。",
			zjjuxiang: "拒降",
			zjjuxiang_info:
				"限定技。一名其他角色脱离濒死状态时，你可以对其造成1点伤害，然后摸X张牌（X为其体力上限且至多为5）。",
			xinyangjie: "佯解",
			xinyangjie_info:
				"出牌阶段限一次，你可以与一名其他角色A拼点。若你没赢，则你可以令另一名其他角色B视为对A使用一张火【杀】。",
			xinjuxiang: "拒降",
			xinjuxiang_info: "限定技，一名其他角色脱离濒死状态时，你可以对其造成1点伤害。",
			houfeng: "厚俸",
			houfeng_info:
				"每轮限一次。一名其他角色的出牌阶段开始时，若其在你的攻击范围内，则你可以令其进行“整肃”。然后当其于本回合内因整肃而摸牌或回复体力后，你获得相同的整肃奖励。",
			liuba: "手杀刘巴",
			duanbi: "锻币",
			duanbi_info:
				"限定技。出牌阶段，若场上所有角色的手牌数之和大于角色数之和的二倍，则你可以令所有其他角色各弃置X张手牌（X为该角色手牌数的一半且向下取整且至多为3）。然后你可选择一名角色，令其随机获得三张以此法被弃置的牌。",
			tongduo: "统度",
			tongduo_info: "每回合限一次。当你成为其他角色使用牌的唯一目标后，你可令一名角色重铸一张牌。",

			mobile_shijizhi: "始计篇·智",
			mobile_shijixin: "始计篇·信",
			mobile_shijiren: "始计篇·仁",
			mobile_shijiyong: "始计篇·勇",
			mobile_shijiyan: "始计篇·严",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
