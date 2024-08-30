import { get } from "../../get/index.js";
import { game } from "../../game/index.js";
import { lib } from "../index.js";
import { _status } from "../../status/index.js";
import { ui } from "../../ui/index.js";

/**
 * @type { SMap<((event: GameEventPromise, trigger: GameEventPromise, player: Player) => Promise<any>)[]> }
 */
export const Contents = {
	phase: [
		async (event) => {
			//规则集中的“回合开始后③（处理“游戏开始时”的时机）”
			//提前phaseBefore时机解决“游戏开始时”时机和“一轮开始时”先后
			event.trigger("phaseBefore");
		},
		async (event, _trigger, player) => {
			// 初始化阶段列表
			if (!event.phaseList) {
				event.phaseList = [
					"phaseZhunbei",
					"phaseJudge",
					"phaseDraw",
					"phaseUse",
					"phaseDiscard",
					"phaseJieshu",
				];
			}

			if (typeof event.num != "number") {
				event.num = 0;
			}

			// 规则集中的“回合开始后①”，更新游戏轮数，触发“一轮游戏开始时”
			let isRound = false;
			if (!event.skill) {
				isRound = _status.roundSkipped;
				if (_status.isRoundFilter) {
					isRound = _status.isRoundFilter(event, player);
				} else if (_status.seatNumSettled) {
					var seatNum = player.getSeatNum();
					if (seatNum != 0) {
						// @ts-ignore
						if (
							get.itemtype(_status.lastPhasedPlayer) != "player" ||
							seatNum < _status.lastPhasedPlayer.getSeatNum()
						)
							isRound = true;
						_status.lastPhasedPlayer = player;
					}
				} else if (player == _status.roundStart) isRound = true;
				if (isRound) {
					delete _status.roundSkipped;
					game.roundNumber++;
					event._roundStart = true;
					game.updateRoundNumber();
					for (var i = 0; i < game.players.length; i++) {
						// @ts-ignore
						if (game.players[i].isOut() && game.players[i].outCount > 0) {
							// @ts-ignore
							game.players[i].outCount--;
							if (game.players[i].outCount == 0 && !game.players[i].outSkills) {
								game.players[i].in();
							}
						}
					}
					event.trigger("roundStart");
				}
			}

			_status.globalHistory.push({
				cardMove: [],
				custom: [],
				useCard: [],
				changeHp: [],
				everything: [],
			});

			const players = game.players.slice(0).concat(game.dead);
			for (const current of players) {
				// @ts-ignore
				current.actionHistory.push({
					useCard: [],
					respond: [],
					skipped: [],
					lose: [],
					gain: [],
					sourceDamage: [],
					damage: [],
					custom: [],
					useSkill: [],
				});
				// @ts-ignore
				current.stat.push({ card: {}, skill: {} });
				if (isRound) {
					current.getHistory().isRound = true;
					current.getStat().isRound = true;
				}
			}

			if (isRound) {
				// @ts-ignore
				game.getGlobalHistory().isRound = true;
			}
		},
		async (event) => {
			//规则集中的“回合开始后②（1v1武将登场专用）”
			event.trigger("phaseBeforeStart");
		},
		async (event) => {
			//规则集中的“回合开始后④（卑弥呼〖纵傀〗的时机）”
			event.trigger("phaseBeforeEnd");
		},
		async (event, _trigger, player) => {
			//规则集中的“回合开始后⑤”，进行翻面检测
			if (player.isTurnedOver() && !event._noTurnOver) {
				event.cancel();
				player.turnOver();
				player.phaseSkipped = true;
				var players = game.players.slice(0).concat(game.dead);
				for (var i = 0; i < players.length; i++) {
					var current = players[i];
					current.getHistory().isSkipped = true;
					current.getStat().isSkipped = true;
				}
			} else {
				player.phaseSkipped = false;
				player.getHistory().isMe = true;
				player.getStat().isMe = true;
			}
		},
		async (event, _trigger, player) => {
			// 规则集中的“回合开始后⑥”，更新“当前回合角色”
			// @ts-ignore
			while (ui.dialogs.length) {
				// @ts-ignore
				ui.dialogs[0].close();
			}

			++game.phaseNumber;
			++player.phaseNumber;

			// @ts-ignore
			game.broadcastAll(
				(player, num, popup) => {
					if (lib.config.glow_phase) {
						player.classList.add("glow_phase");
					}
					player.phaseNumber = num;
					_status.currentPhase = player;
					if (popup && lib.config.show_phase_prompt) player.popup("回合开始", null, false);
				},
				player,
				player.phaseNumber,
				!player.noPhaseDelay
			);

			_status.currentPhase = player;
			_status.discarded = [];

			game.syncState();
			// @ts-ignore
			game.addVideo("phaseChange", player);

			if (game.phaseNumber == 1) {
				delete player._start_cards;
				if (lib.configOL.observe) {
					lib.configOL.observeReady = true;
					game.send("server", "config", lib.configOL);
				}
			}

			game.log();
			game.log(player, "的回合开始");
			player._noVibrate = true;

			if (
				get.config("identity_mode") != "zhong" &&
				get.config("identity_mode") != "purple" &&
				!_status.connectMode
			) {
				let num;
				switch (get.config("auto_identity")) {
					case "one":
						num = 1;
						break;
					case "two":
						num = 2;
						break;
					case "three":
						num = 3;
						break;
					case "always":
						num = -1;
						break;
					default:
						num = 0;
						break;
				}
				// @ts-ignore
				if (
					num &&
					!_status.identityShown &&
					game.phaseNumber > game.players.length * num &&
					game.showIdentity
				) {
					if (!_status.video) player.popup("显示身份");
					_status.identityShown = true;
					// @ts-ignore
					game.showIdentity(false);
				}
			}
			player.ai.tempIgnore = [];
			// @ts-ignore
			if (ui.land && ui.land.player == player) {
				// @ts-ignore
				game.addVideo("destroyLand");
				// @ts-ignore
				ui.land.destroy();
			}
		},
		async (event) => {
			//规则集中的“回合开始后⑦”，国战武将明置武将牌
			event.trigger("phaseBeginStart");
		},
		async (event) => {
			//规则集中的“回合开始后⑨”，进行当先，化身等操作
			//没有⑧ 因为⑧用不到
			event.trigger("phaseBegin");
		},
		async (event, _trigger, player) => {
			if (event.num < event.phaseList.length) {
				//规则集中没有的新时机 可以用来插入额外阶段啥的
				if (player.isIn()) event.trigger("phaseChange");
			} else event.goto(11);
		},
		async (event, _trigger, player) => {
			if (player.isIn() && event.num < event.phaseList.length) {
				const phase = event.phaseList[event.num].split("|");
				event.currentPhase = phase[0];
				if (event.currentPhase == "phaseDraw" || event.currentPhase == "phaseDiscard") {
					if (!player.noPhaseDelay) {
						// @ts-ignore
						if (player == game.me) {
							await game.asyncDelay();
							// game.delay();
						} else {
							await game.asyncDelayx();
							// game.delayx();
						}
					}
				}
				const next = player[event.currentPhase]();
				next.phaseIndex = event.num;
				if (phase.length > 1) {
					next._extraPhaseReason = phase[1];
				}
				return await next;
			}
		},
		async (event, _trigger, player) => {
			if (event.currentPhase === "phaseUse") {
				// @ts-ignore
				game.broadcastAll(() => {
					// @ts-ignore
					if (ui.tempnowuxie) {
						// @ts-ignore
						ui.tempnowuxie.close();
						// @ts-ignore
						delete ui.tempnowuxie;
					}
				});
				delete player._noSkill;
			}
			++event.num;
		},
		async (event) => {
			if (event.num < event.phaseList.length) {
				event.goto(8);
			} else if (!event._phaseEndTriggered) {
				event._phaseEndTriggered = true;
				event.trigger("phaseEnd");
				event.redo();
			}
		},
		async (event) => {
			event.trigger("phaseAfter");
		},
		async ({ player }) => {
			//删除当前回合角色 此时处于“不属于任何角色的回合”的阶段
			// @ts-ignore
			game.broadcastAll((player) => {
				player.classList.remove("glow_phase");
				delete _status.currentPhase;
			}, player);
		},
	],
	phaseDraw: [
		async (event, _trigger, player) => {
			game.log(player, "进入了摸牌阶段");
			event.trigger("phaseDrawBegin1");
		},
		async (event) => {
			event.trigger("phaseDrawBegin2");
		},
		async (event, _trigger, player) => {
			// @ts-ignore
			if (game.modPhaseDraw) {
				// @ts-ignore
				return game.modPhaseDraw(player, event.num);
			} else {
				if (event.num > 0) {
					let num = event.num;
					if (event.attachDraw) {
						for (let i = 0; i < event.attachDraw.length; i++) {
							// @ts-ignore
							ui.cardPile.insertBefore(event.attachDraw[i], ui.cardPile.firstChild);
						}
						num += event.attachDraw.length;
					}
					const next = player.draw(num);
					if (event.attachDraw) {
						next.minnum = event.attachDraw.length;
					}
					return next;
				}
			}
		},
		async (event, _trigger, _player, { result }) => {
			if (Array.isArray(result)) {
				event.cards = result;
			}
		},
	],
	changeSkills: [
		async (event, trigger, player) => {
			//获取玩家当前已有的技能
			const ownedSkills = player.getSkills(true, false, false);
			//去重检查
			event.addSkill.unique();
			event.removeSkill.unique();
			//避免失去还没拥有的技能
			event.removeSkill = event.removeSkill.filter((skill) => ownedSkills.includes(skill));
			const duplicatedSkills = event.addSkill.filter((skill) => event.removeSkill.includes(skill));
			if (duplicatedSkills.length) {
				event.addSkill.removeArray(duplicatedSkills);
				event.removeSkill.removeArray(duplicatedSkills);
			}
			//if (!event.addSkill.length&&!event.removeSkill.length) return;
			//手动触发时机
			await event.trigger("changeSkillsBefore");
		},
		async (event, trigger, player) => {
			await event.trigger("changeSkillsBegin");
		},
		async (event, trigger, player) => {
			//处理失去和获得的技能
			if (event.$handle) {
				event.$handle(player, event.addSkill, event.removeSkill, event);
			} else {
				if (event.addSkill.length) {
					player.addSkill(event.addSkill);
					game.log(
						player,
						"获得了技能",
						...event.addSkill.map((i) => {
							return "#g【" + get.translation(i) + "】";
						})
					);
				}
				if (event.removeSkill.length) {
					player.removeSkill(event.removeSkill);
					game.log(
						player,
						"失去了技能",
						...event.removeSkill.map((i) => {
							return "#g【" + get.translation(i) + "】";
						})
					);
				}
			}
		},
		async (event, trigger, player) => {
			//手动触发时机
			await event.trigger("changeSkillsEnd");
		},
		async (event, trigger, player) => {
			await event.trigger("changeSkillsAfter");
		},
	],
};
