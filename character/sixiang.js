import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "sixiang",
		connect: true,
		connectBanned: [
			
		],
		character: {
			std_sunhao: ["male", "wu", 5, ["stdcanshi", "chouhai", "guiming"], ["zhu"]],
			std_mateng: ["male", "qun", 4, ["stdxiongyi", "mashu", "stdyouji"], ["zhu"]],
			std_mayunlu: ["female", "shu", 4, ["stdfengpo", "mashu"]],
			std_jianggan: ["male", "wei", 3, ["stddaoshu", "stddaizui"]],
			std_zhouchu: ["male", "wu", 4, ["stdxiongxia"]],
			std_lvlingqi: ["female", "qun", 4, ["stdhuizhan"]],
			std_dc_yanghu: ["male", "wei", 4, ["stdmingfa"]],
			std_dc_luotong: ["male", "wu", 3, ["stdjinjian", "stdrenzheng"]],
			std_lijue: ["male", "qun", 5, ["stdxiongsuan"]],
			std_chengpu: ["male", "wu", 4, ["stdchunlao"]],
			std_db_wenyang: ["male", "wei", 4, ["stdquedi"]],
			std_re_dengzhi: ["male", "shu", 3, ["stdzhiyinmeng", "stdhehe"]],
			std_zhangyì: ["male", "shu", 4, ["stdzhiyi"]],
			std_chengyu: ["male", "wei", 3, ["stdshefu", "stdyibing"]],
			std_fanyufeng: ["female", "qun", 3, ["stdbazhan", "stdzhanying"]],
			std_feiyi: ["male", "shu", 3, ["stdtiaohe", "stdqiansu"]],
			
			std_guanxing: ["male", "shu", 4, ["stdwuyou"]],
			std_fuhuanghou: ["female", "qun", 3, ["stdqiuyuan", "stdzhuikong"]],
			std_liubiao: ["male", "qun", 3, ["stdzishou", "zongshi", "stdjujin"], ["zhu"]],
			std_gongsunyuan: ["male", "qun", 4, ["stdhuaiyi", "stdfengbai"], ["zhu"]],
			std_cenhun: ["male", "wu", 3, ["stdjishe", "stdwudu"]],
			std_simashi: ["male", "wei", 4, ["stdjinglve"]],
			std_sunshao: ["male", "wu", 3, ["stddingyi", "stdzuici"]],
			std_jiangwan: ["male", "shu", 3, ["stdruwu", "stdchengshi"]],
			std_maliang: ["male", "shu", 3, ["stdxiemu", "stdnaman"]],
			std_xushu: ["male", "shu", 3, ["stdwuyan", "stdjujian"], ["border:wei"]],
			std_xuezong: ["male", "wu", 3, ["stdfunan", "stdxunjie"]],
			std_liuzhang: ["male", "qun", 3, ["stdyinge", "stdshiren", "stdjuyi"], ["zhu"]],
			std_wangyuanji: ["female", "wei", 3, ["stdqianchong", "stdshangjian"]],
			std_wanglang: ["male", "wei", 3, ["stdgushe", "stdjici"]],
			std_zhonghui: ["male", "wei", 4, ["stdxingfa"], ["clan:颍川钟氏"]],
			std_huaxin: ["male", "wei", 3, ["stdyuanqing", "stdshuchen"]],
		},
		characterFilter: {
			
		},
		characterSort: {
			sixiang: {
				sixiang_shaoyin: ["std_sunhao", "std_mateng", "std_mayunlu", "std_jianggan", "std_zhouchu", "std_lvlingqi", "std_dc_yanghu", "std_dc_luotong", "std_lijue", "std_chengpu", "std_db_wenyang", "std_re_dengzhi", "std_zhangyì", "std_chengyu", "std_fanyufeng", "std_feiyi"],
				sixiang_taiyin: ["std_guanxing", "std_fuhuanghou", "std_liubiao", "std_gongsunyuan", "std_cenhun", "std_simashi", "std_sunshao", "std_jiangwan", "std_maliang", "std_xushu", "std_xuezong", "std_liuzhang", "std_wangyuanji", "std_wanglang", "std_zhonghui", "std_huaxin"],
				// sixiang_shaoyang: [],
				// sixiang_taiyang: [],
			},
		},
		characterIntro: {
			std_guanxing: "关兴，名将关羽之子，继承了父亲汉寿亭侯的爵位。年少时即受诸葛亮器重，在蜀汉担任侍中、中监军之职，后在夷陵之战中报了杀父之仇。",
		},
		characterTitle: {
			
		},
		card: {
			
		},
		perfectPair: {
			
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//四象封印·太阴
			//华歆
			stdyuanqing: {
				audio: "yuanqing",
				trigger: {
					player: "phaseEnd",
				},
				getCards(player) {
					let cards = [];
					player.getHistory("lose", evt => {
						if (evt.cards2 && evt.cards2.some(i => get.position(i) == "d")) {
							cards.addArray(evt.cards2.filter(i => get.position(i) == "d"));
						}
					});
					return cards;
				},
				filter(event, player) {
					let targets = lib.skill.stdyuanqing.logTarget(event, player);
					return targets && targets.length;
				},
				logTarget(event, player) {
					return game.filterPlayer(current => {
						let cards = lib.skill.stdyuanqing.getCards(current);
						return cards && cards.length;
					});
				},
				async content(event, trigger, player) {
					for (const target of event.targets) {
						let cards = lib.skill.stdyuanqing.getCards(target);
						if (!cards.length) continue;
						const result = await target.chooseButton(["获得其中一张牌", cards], true).forResult();
						if (result.bool) {
							await target.gain(result.links, 'gain2');
						}
					}
				},
			},
			stdshuchen: {
				audio: "shuchen",
				enable: "chooseToUse",
				viewAsFilter(player) {
					return player != _status.currentPhase && player.countCards("h") > player.getHandcardLimit();
				},
				filterCard: true,
				position: "h",
				selectCard() {
					const player = get.player();
					return player.countCards("h") - player.getHandcardLimit();
				},
				viewAs: {
					name: "tao",
				},
				prompt: "将超出手牌上限的手牌当桃使用",
				check(card) {
					return 15 - get.value(card);
				},
			},
			//玩姬
			stdqianchong: {
				mod: {
					cardUsable: function (card, player) {
						if (player.countCards("e") % 2 != 0) return Infinity;
					},
					targetInRange: function (card, player) {
						if (player.countCards("e") % 2 == 0) return true;
					},
				},
			},
			stdshangjian: {
				trigger: {
					player: "phaseJieshuBegin",
				},
				audio: "xinfu_shangjian",
				filter: function (event, player) {
					let num = 0, cards = [];
					player.getHistory("lose", evt => {
						if (evt.cards2) num += evt.cards2.length;
						if (evt.cards2.some(i => get.position(i) == "d")) cards.addArray(evt.cards2.filter(i => get.position(i) == "d"))
					});
					return cards.length && num > 0 && num <= player.hp;
				},
				async cost(event, trigger, player) {
					let cards = [];
					player.getHistory("lose", evt => {
						if (evt.cards2 && evt.cards2.some(i => get.position(i) == "d")) cards.addArray(evt.cards2.filter(i => get.position(i) == "d"));
					});
					const result = await player.chooseButton(['尚俭：选择获得其中一张牌', cards]).set('ai', button => {
						return get.value(button.link, get.event('player'));
					}).forResult();
					event.result = {
						bool: result.bool,
						cost_data: result.links,
					}
				},
				async content(event, trigger, player) {
					await player.gain(event.cost_data, 'gain2');
				},
			},
			//王司徒
			stdgushe: {
				audio: "gushe",
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player.canCompare(target);
				},
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				async content(event, trigger, player) {
					let num = 1, target = event.target;
					while (num > 0 && player.canCompare(target)) {
						num--;
						let winner = [], failure = [];
						let { result } = await player.chooseToCompare(target)
						if (result.bool) {
							failure.push(target);
							target.chat(lib.skill.gushe.chat.randomGet());
							await player.draw();
						}
						else if (result.tie) failure = [player, target];
						else {
							failure.push(player);
							target.chat(lib.skill.gushe.chat.randomGet());
							await target.draw();
						}
						if (player.canCompare(target)) {
							for (let loser of failure) {
								let choice = loser.countCards("h", card => get.value(card) <= 6 && card.number > 10) > 0;
								const { result: { bool } } = await loser.chooseBool('是否与其再次拼点？').set('choice', choice)
								if (bool) num++;
							}
						}
					}
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							let hs = player.getCards("h");
							if (hs.some(card => get.value(card) <= 6 && card.number > 10) || player.getHp() < 2 && player.getHp() + player.countCards('h', { name: ["tao", "jiu"] }) > 2 || player.getHp() > 1 && player.getHp() + player.countCards('h', { name: "tao" }) > 2) return -1;
							return 0;
						},
					},
				},
			},
			stdjici: {
				audio: "jici",
				trigger: {
					player: "compare",
					target: "compare",
				},
				filter: function (event, player) {
					if (event.player == player && event.iwhile) return false;
					return true;
				},
				check(event, player) {
					return player.getHp() < 2 && player.getHp() + player.countCards('h', { name: ["tao", "jiu"] }) > 2 || player.getHp() > 1 && player.getHp() + player.countCards('h', { name: "tao" }) > 2
				},
				async content(event, trigger, player) {
					await player.loseHp();
					if (player == trigger.player) trigger.num1 = 13
					else trigger.num2 = 13;
					game.log(player, "的拼点牌点数为13");
				},
			},
			//钟会
			stdxingfa: {
				audio: "gzpaiyi",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter: function (event, player) {
					return player.getHp() <= player.countCards("h") && game.hasPlayer(function (current) {
						return current != player;
					});
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(get.prompt("stdxingfa"), "对一名其他角色造成1点伤害", function (card, player, target) {
						return target != player;
					})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						}).forResult();
				},
				async content(event, trigger, player) {
					await event.targets[0].damage('nocard')
				},
				ai: {
					expose: 0.25,
					threaten: 1.7,
				},
			},
			//刘璋
			stdyinge: {
				audio: "yinlang",
				usable: 1,
				enable: "phaseUse",
				filterTarget: function (card, player, target) {
					return player != target && target.countCards("he");
				},
				async content(event, trigger, player) {
					const target = event.target;
					await target.chooseToGive(1, "he", player, true);
					let targets = game.filterPlayer(current => {
						if (!target.canUse({ name: "sha", isCard: true }, current, false)) return false;
						if (current == player) return true;
						return player.inRange(current);
					});
					if (!targets.length) return;
					const result = await target
						.chooseTarget("选择使用杀的目标", true)
						.set("useTargets", targets)
						.set("filterTarget", (card, player, target) => {
							let targets = get.event("useTargets");
							return targets.includes(target);
						})
						.set("ai", target => {
							return get.effect(target, { name: "sha", isCard: true }, get.player(), get.player());
						})
						.forResult();
					if (result.bool) await target.useCard({ name: "sha", isCard: true }, result.targets);
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return target.countCards("he") > 2 ? 1 : 0;
						},
					},
				},
			},
			stdshiren: {
				audio: "xiusheng",
				trigger: {
					target: "useCardToTargeted",
				},
				filter(event, player) {
					return event.card.name == "sha" && event.player != player;
				},
				usable: 1,
				logTarget: "player",
				async content(event, trigger, player) {
					await player.draw(2);
					await player.chooseToGive(event.targets[0], "he", true);
				},
			},
			stdjuyi: {
				zhuSkill: true,
				trigger: {
					player: "damageBegin4",
				},
				filter(event, player) {
					if (!event.source || event.source == player || !player.countCards("he")) return false;
					if (player.hasHistory("damage", evt => evt.source && evt.source == event.source)) return false;
					return event.source.group == "qun" && !player.getStorage("stdjuyi").includes(event.source);
				},
				async cost(event, trigger, player) {
					const result = await trigger.source.choosePlayerCard(player, "he", get.prompt("stdjuyi", player), "据益：是否获得" + get.translation(player) + "一张牌并防止此次伤害？")
						.set("ai", button => {
							if (get.event("eff") > 0) return 0;
							return get.value(button.link);
						})
						.set("eff", get.damageEffect(player, trigger.source, trigger.source))
						.forResult();
					event.result = {
						bool: result.bool,
						cards: result.links,
						targets: [trigger.source],
					};
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await player.give(event.cards, target);
					trigger.cancel();
					if (!player.getStorage("stdjuyi").length) {
						player.when({ global: "phaseEnd" }).then(() => {
							delete player.storage.stdjuyi;
						});
					}
					player.markAuto("stdjuyi", target);
				},
			},
			//薛总
			stdfunan: {
				audio: "funan",
				trigger: {
					target: "shaMiss",
					global: "eventNeutralized",
				},
				usable: 1,
				filter(event, player, name) {
					if (event.type != "card" || event.player == player) return false;
					if (name != "shaMiss" && event._neutralize_event.player != player) return false;
					return event.cards && event.cards.someInD();
				},
				async content(event, trigger, player) {
					await player.gain(trigger.cards.filterInD(), "gain2");
				},
			},
			stdxunjie: {
				audio: "jiexun",
				trigger: {
					player: "phaseJieshuBegin",
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdxunjie"), function (card, player, target) {
							return target.countCards("h");
						})
						.set("ai", function (target) {
							const player = _status.event.player;
							let eff = get.effect(target, { name: "guohe_copy2" }, player, player);
							if (target == player) return player.countCards("h", { suit: "diamod" }) ? 2 : -2;
							return eff * (target.countCards("h") > 4 ? -1 : 1);
						}).forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await target.chooseToDiscard("h", 1, true).set("ai", card => {
						if (get.suit(card) == "diamond") return 11 - get.value(card);
						return 5 - get.value(card);
					}).forResult();
					if (!result.bool) return;
					if (get.suit(result.cards[0]) == "diamond") await target.draw(2);
				},
			},
			//徐庶
			stdwuyan: {
				audio: "wuyan",
				trigger: {
					player: "useCard",
				},
				forced: true,
				filter(event, player) {
					if (!event.cards || event.cards.length != 1 || get.type2(event.cards[0]) != "trick") return false;
					return event.card.name == "wuxie";
				},
				async content() { },
				mod: {
					cardname(card, player) {
						let info = lib.card[card.name];
						if (info && ["trick", "delay"].includes(info.type)) return "wuxie";
					},
				},
			},
			stdjujian: {
				audio: "jujian",
				trigger: {
					player: "useCardAfter"
				},
				usable: 1,
				filter(event, player) {
					return event.cards && event.cards.length && event.card.name == "wuxie";
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(get.prompt2("stdjujian"), lib.filter.notMe).set("ai", target => {
						const player = get.player();
						return target.getUseValue(_status.event.getTrigger().cards[0]) * get.attitude(player, target);
					}).forResult();
					event.result.cards = trigger.cards;
				},
				async content(event, trigger, player) {
					await event.targets[0].gain(event.cards, "gain2");
				},
			},
			//马良
			stdxiemu: {
				audio: "xiemu",
				global: "stdxiemu_global",
				subSkill: {
					global: {
						audio: "xiemu",
						enable: "phaseUse",
						usable: 1,
						filter(event, player) {
							if (!player.countCards("he", card => get.type(card) == "basic")) return false;
							return game.hasPlayer(current => current.hasSkill("stdxiemu") && current != player);
						},
						filterTarget(card, player, target) {
							return target.hasSkill("stdxiemu") && target != player;
						},
						selectTarget() {
							const num = game.countPlayer(current => current.hasSkill("stdxiemu") && current != get.player());
							return num > 1 ? 1 : -1;
						},
						filterCard(card) {
							return get.type(card) == "basic";
						},
						position: "he",
						check(card) {
							return 4 - get.value(card);
						},
						prompt() {
							const list = game.filterPlayer(current => {
								return current.hasSkill("stdxiemu");
							});
							return `将一张牌交给${get.translation(list)}${list.length > 1 ? "中的一人" : ""}，然后你本回合攻击范围+1。`;
						},
						log: false,
						discard: false,
						lose: false,
						async content(event, trigger, player) {
							const card = event.cards[0],
								target = event.target;
							player.logSkill("stdxiemu", target);
							await player.showCards(card, get.translation(player) + "发动了【协穆】");
							await player.give(card, target);
							player.addTempSkill("stdxiemu_range");
							player.addMark("stdxiemu_range", 1, false);
						},
						ai: {
							order: 7,
							result: {
								target: 1,
							},
						},
					},
					range: {
						charlotte: true,
						onremove: true,
						mod: {
							attackRange(player, num) {
								return num + player.countMark("stdxiemu_range");
							},
						},
						intro: {
							content: "本回合攻击范围+#",
						},
					},
				},
			},
			stdnaman: {
				audio: "naman",
				enable: "phaseUse",
				usable: 1,
				viewAs: {
					name: "nanman",
				},
				viewAsFilter(player) {
					if (!player.countCards("he", card => get.type(card) == "basic")) return false;
				},
				filterCard(card) {
					return get.type(card) == "basic";
				},
				position: "he",
				selectCard: [1, Infinity],
				selectTarget() {
					return ui.selected.cards.length;
				},
				complexSelect: true,
			},
			//蒋琬
			stdruwu: {
				audio: "olxvfa",
				enable: "chooseToUse",
				filter(event, player) {
					if (!event.stdruwu || !event.stdruwu.length) return false;
					if (event.filterCard(get.autoViewAs({ name: "juedou" }, "unsure"), player, event)) return true;
					if (event.filterCard(get.autoViewAs({ name: "wuzhong" }, "unsure"), player, event)) return true;
					return false;
				},
				onChooseToUse(event) {
					if (game.online || event.stdruwu) return;
					var list = event.player.getCards("e");
					var history = game.getGlobalHistory("everything", evt => evt.player == event.player && evt.name == "equip");
					list = list.filter(card => {
						return !history.some(evt => evt.cards && evt.cards.includes(card));
					});
					event.set("stdruwu", list);
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						if (event.filterCard(get.autoViewAs({ name: "juedou" }, "unsure"), player, event)) list.push(["锦囊", "", "juedou"]);
						if (event.filterCard(get.autoViewAs({ name: "wuzhong" }, "unsure"), player, event)) list.push(["锦囊", "", "wuzhong"]);
						return ui.create.dialog("儒武", [list, "vcard"]);
					},
					check(button) {
						if (_status.event.getParent().type != "phase") return 1;
						var player = _status.event.player;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							filterCard(card) {
								return _status.event.stdruwu.includes(card);
							},
							position: "e",
							audio: "olxvfa",
							popname: true,
							check(card) {
								return 8 - get.value(card);
							},
							viewAs: { name: links[0][2] },
						};
					},
					prompt(links, player) {
						return "将装备区里的一张牌当做" + get.translation(links[0][2]) + "使用";
					},
				},
				hiddenCard(player, name) {
					var list = player.getCards("e");
					var history = game.getGlobalHistory("everything", evt => evt.player == player && evt.name == "equip");
					list = list.filter(card => {
						return !history.some(evt => evt.cards && evt.cards.includes(card));
					});
					if (!list.length) return false;
					return ["juedou", "wuzhong"].includes(name);
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
			},
			stdchengshi: {
				audio: "spjincui",
				trigger: {
					global: "die",
				},
				filter(event, player) {
					return event.player != player;
				},
				check(event, player) {
					return event.player.countCards("e") > player.countCards("e");
				},
				logTarget: "player",
				skillAnimation: true,
				limited: true,
				animationColor: "fire",
				changeSeat: true,
				seatRelated: true,
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.awakenSkill(event.name);
					game.broadcastAll(function (target1, target2) {
						game.swapSeat(target1, target2);
					}, player, target);
					await player.swapEquip(target);
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: (player, skill) => (player.storage[skill] = false),
			},
			//孙邵
			stddingyi: {
				audio: "mjdingyi",
				trigger: {
					global: "phaseJieshuBegin",
				},
				filter(event, player) {
					return !event.player.countCards("e");
				},
				async cost(event, trigger, player) {
					event.result = await trigger.player.chooseBool(get.prompt("stddingyi"), "摸一张牌").forResult();
					event.result.targets = [trigger.player];
				},
				async content(event, trigger, player) {
					await event.targets[0].draw();
				},
			},
			stdzuici: {
				audio: "mjzuici",
				trigger: {
					player: "damageEnd",
				},
				filter(event, player) {
					if (!event.source) return false;
					return player.canMoveCard(null, null, game.filterPlayer(current => current != event.source), event.source);
				},
				direct: true,
				async content(event, trigger, player) {
					const next = player.moveCard(game.filterPlayer(current => current != trigger.source), trigger.source);
					next.prompt = get.prompt("stdzuici", trigger.source);
					next.prompt2 = "将场上一张牌移动到其区域内";
					next.logSkill = event.name;
					await next;
				},
			},
			//司马师
			stdjinglve: {
				audio: "jinglve",
				trigger: {
					global: "phaseDiscardBegin",
				},
				filter(event, player) {
					return player.countCards("h") > 1 && event.player != player;
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseCard(get.prompt2("stdjinglve"), 2).set("ai", card => {
						if (_status.event.att <= 0) return 0;
						return 5 - get.value(card);
					}).set("att", get.attitude(player, trigger.player)).forResult();
					event.result.targets = [trigger.player];
				},
				async content(event, trigger, player) {
					const cards = event.cards, target = event.targets[0];
					await player.showCards(cards, get.translation(player) + "发动了【景略】");
					const next = player.give(cards, target);
					next.gaintag.add("stdjinglve");
					await next;
					trigger.player.addTempSkill("stdjinglve_discard");
					player.when({ global: "phaseDiscardEnd" }).filter(evt => evt == trigger).then(() => {
						trigger.player.removeSkill("stdjinglve_discard");
						const cards = [];
						game.getGlobalHistory("cardMove", function (evt) {
							if (evt.name == "cardsDiscard") {
								if (evt.getParent("phaseDiscard") == trigger) {
									const moves = evt.cards.filterInD("d");
									cards.addArray(moves);
								}
							}
							if (evt.name == "lose") {
								if (evt.type != "discard" || evt.position != ui.discardPile || evt.getParent("phaseDiscard") != trigger) return;
								const moves = evt.cards.filterInD("d");
								cards.addArray(moves);
							}
						});
						player.chooseButton(["景略：是否获得本阶段弃置的一张牌？", cards]);
					}).then(() => {
						if (result.bool) player.gain(result.links, "gain2");
					});
				},
				subSkill: {
					discard: {
						charlotte: true,
						mod: {
							cardDiscardable(card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("stdjinglve")) {
									return false;
								}
							},
						},
						onremove(player) {
							player.removeGaintag("stdjinglve");
						},
					},
				},
			},
			//岑昏
			stdjishe: {
				audio: "jishe",
				enable: "phaseUse",
				filter(event, player) {
					return player.getHandcardLimit() > 0;
				},
				locked: false,
				async content(event, trigger, player) {
					player.addTempSkill("stdjishe_limit");
					player.addMark("stdjishe_limit", 1, false);
					player.draw();
				},
				subSkill: {
					limit: {
						mod: {
							maxHandcard: function (player, num) {
								return num - player.countMark("stdjishe_limit");
							},
						},
						onremove: true,
						charlotte: true,
						marktext: "奢",
						intro: {
							content: "手牌上限-#",
						},
					},
				},
				ai: {
					order: 10,
					result: {
						player: function (player) {
							if (!player.needsToDiscard(1)) {
								return 1;
							}
							return 0;
						},
					},
				},
			},
			stdwudu: {
				trigger: {
					global: "damageBegin4",
				},
				filter(event, player) {
					return !event.player.countCards("h");
				},
				logTarget: "player",
				check(event, player) {
					return player.maxHp > 1 && get.damageEffect(event.player, event.source, player) < 0;
				},
				async content(event, trigger, player) {
					trigger.cancel();
					await player.loseMaxHp();
				},
			},
			//公孙渊
			stdhuaiyi: {
				audio: "rehuaiyi",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter(event, player) {
					return player.countCards("h");
				},
				forced: true,
				async content(event, trigger, player) {
					const hs = player.getCards("h");
					await player.showCards(hs, get.translation(player) + "发动了【怀异】");
					const colors = [];
					for (let card of hs) {
						colors.add(get.color(card));
					}
					if (colors.length < 2) return;
					const result = await player.chooseControl(colors).set("ai", () => {
						return _status.event.color;
					}).set("color", function () {
						return colors.sort((a, b) => {
							return player.countCards("h", { color: a }) - player.countCards("h", { color: b });
						})[0];
					}()).forResult();
					const discards = player.getCards("h", { color: result.control });
					if (discards.length) {
						await player.discard(discards);
						if (game.hasPlayer(current => current != player && current.countCards("he"))) {
							const result2 = await player.chooseTarget(`获得至多${discards.length}名其他角色各一张牌`, [1, discards.length], true, function (card, player, target) {
								return target != player && target.countCards("he") > 0;
							}).set("ai", function (target) {
								const player = get.player();
								return get.effect(target, { name: "shunshou_copy2" }, player, player);
							}).forResult();
							await player.gainMultiple(result2.targets.sortBySeat(), "he");
							if (result2.targets.length > 1) await player.loseHp();
						}
					}
				},
			},
			stdfengbai: {
				trigger: {
					player: "gainAfter",
					global: "loseAsyncAfter",
				},
				zhuSkill: true,
				logTarget: (event, player, triggername, target) => target,
				check(event, player) {
					return get.effect(event.indexedData, { name: "draw" }, player, player) > 0;
				},
				getIndex(event, player) {
					if (!event.getg || !event.getl) return false;
					const cards = event.getg(player);
					return game.filterPlayer(current => {
						if (current == player || current.group != "qun") return false;
						const evt = event.getl(current);
						if (!evt || !evt.es) return false;
						game.log(evt.es);
						return evt.es.some(card => cards.includes(card));
					}).sortBySeat();
				},
				async content(event, trigger, player) {
					await event.targets[0].draw();
				},
			},
			//刘表
			stdzishou: {
				audio: "zishou",
				trigger: {
					player: "phaseUseBefore",
				},
				check: function (event, player) {
					return player.countCards("h") + 2 <= player.getHandcardLimit();
				},
				async content(event, trigger, player) {
					await player.draw(game.countGroup());
					trigger.cancel();
				},
				ai: {
					threaten: 1.5,
				},
			},
			stdjujin: {
				trigger: {
					player: "damageEnd",
				},
				filter(event, player) {
					if (!event.source || event.source.group != "qun") return false;
					return player.countCards("he") > 1;
				},
				zhuSkill: true,
				async cost(event, trigger, player) {
					event.result = await player.chooseToDiscard(get.prompt2("stdjujin"), 2, "he")
						.set("ai", card => {
							const player = get.player();
							if (get.recoverEffect(player, player, player) <= 0 || player.hp >= player.maxHp) return 0;
							return 5 - get.value(card);
						})
						.set("chooseonly", true).forResult();
				},
				async content(event, trigger, player) {
					const cards = event.cards;
					await player.discard(cards);
					if (player.isDamaged()) await player.recover();
				},
			},
			//伏皇后
			stdqiuyuan: {
				audio: "xinqiuyuan",
				trigger: {
					target: "useCardToTarget",
				},
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						game.hasPlayer(function (current) {
							return current != player && !event.targets.includes(current) && lib.filter.targetEnabled(event.card, event.player, current);
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdqiuyuan"), function (card, player, target) {
							var evt = _status.event.getTrigger();
							return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled(evt.card, evt.player, target);
						})
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, trigger.player, player) + 0.1;
						})
						.set("targets", trigger.targets)
						.set("playerx", trigger.player).forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await target
						.chooseCard("交给" + get.translation(player) + "一张牌，或成为此杀的额外目标")
						.set("ai", function (card) {
							return get.attitude(target, _status.event.sourcex) >= 0 ? 1 : -1;
						})
						.set("sourcex", player).forResult();
					if (result.bool) {
						await target.give(result.cards, player);
						game.delay();
					} else {
						trigger.getParent().targets.push(target);
						trigger.getParent().triggeredTargets2.push(target);
						game.log(target, "成为了额外目标");
					}
				},
				ai: {
					expose: 0.2,
					effect: {
						target_use(card, player, target) {
							if (card.name != "sha") return;
							var players = game.filterPlayer();
							if (get.attitude(player, target) <= 0) {
								for (var i = 0; i < players.length; i++) {
									var target2 = players[i];
									if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, target) > 0 && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, player) < 0) {
										if (target.hp == target.maxHp) return 0.3;
										return 0.6;
									}
								}
							} else {
								for (var i = 0; i < players.length; i++) {
									var target2 = players[i];
									if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: "shacopy", nature: card.nature, suit: card.suit }, player, player) > 0) {
										if (player.canUse(card, target2)) return;
										if (target.hp == target.maxHp) return [0, 1];
										return [0, 0];
									}
								}
							}
						},
					},
				},
			},
			stdzhuikong: {
				audio: "rezhuikong",
				trigger: {
					global: "phaseZhunbeiBegin",
				},
				check: function (event, player) {
					if (get.attitude(player, event.player) < -2) {
						var cards = player.getCards("h");
						if (cards.length > player.hp) return true;
						for (var i = 0; i < cards.length; i++) {
							var useful = get.useful(cards[i]);
							if (useful < 5) return true;
							if (get.number(cards[i]) > 9 && useful < 7) return true;
						}
					}
					return false;
				},
				filter(event, player) {
					if (!player.canCompare(event.player)) return false;
					return _status.connectMode && player.countCards("h") || player.countCards("h", "sha");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard(get.prompt("stdzhuikong", trigger.player), "使用一张【杀】与其拼点", { name: "sha" })
						.set("ai", card => {
							if (_status.event.effect) return 6 - get.value(card);
							return 0;
						})
						.set("effect", lib.skill.stdzhuikong.check(trigger, player)).forResult();
					event.result.targets = [trigger.player];
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const next = player.chooseToCompare(target);
					if (!next.fixedResult) next.fixedResult = {};
					next.fixedResult[player.playerid] = event.cards[0];
					const result = await next.forResult();
					if (result.winner) {
						const card = result[result.winner == player ? "target" : "player"];
						if (!card || !result.winner.hasUseTarget(card)) return;
						await result.winner.chooseUseTarget(card);
					}
				},
			},
			//关兴
			stdwuyou: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(current => player.canCompare(current));
				},
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const { result } = await player.chooseToCompare(target);
					if (!result.bool) {
						player.addTempSkill(event.name + "_effect");
						await player.addAdditionalSkills(event.name + "_effect", "new_rewusheng");
					}
					const winner = result.winner;
					if (!winner) return;
					const loser = player == winner ? target : player;
					const juedou = get.autoViewAs({ name: "juedou", isCard: true });
					if (winner.canUse(juedou, loser, false)) await winner.useCard(juedou, loser, false);
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							return get.effect(target, { name: "juedou" }, player, player) * get.attitude(player, target);
						},
					},
				},
				derivation: "new_rewusheng",
				subSkill: {
					effect: {
						charlotte: true,
						mark: true,
						marktext: "佑",
						intro: {
							content: "视为拥有〖武圣〗",
						},
					},
				},
			},
			
			//四象封印·少阴
			//孙皓
			stdcanshi: {
				audio: "canshi",
				inherit: "canshi",
				forced: true,
				async content(event, trigger, player) {
					trigger.changeToZero();
					await player.draw(
						Math.max(
							1,
							game.countPlayer(target => {
								if (player.hasSkill("guiming") && target != player && target.group == "wu") return true;
								return target.isDamaged();
							})
						)
					);
					player.addTempSkill("stdcanshi_effect");
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "useCardToPlayered" },
						filter(event, player) {
							if (event.card.name != "sha" && get.type(event.card) != "trick") return false;
							return event.target.isDamaged() && player.countCards("he");
						},
						forced: true,
						autodelay: true,
						content() {
							player.chooseToDiscard("he", true);
						},
					},
				},
			},
			//马腾
			stdxiongyi: {
				unique: true,
				limited: true,
				audio: "xiongyi",
				enable: "phaseUse",
				filterTarget: true,
				selectTarget: [1, Infinity],
				multitarget: true,
				multiline: true,
				skillAnimation: true,
				animationColor: "thunder",
				async content(event, trigger, player) {
					player.awakenSkill("stdxiongyi");
					const targets = event.targets.sortBySeat();
					let keep = true;
					while (true) {
						let stop = false;
						for (const target of targets) {
							let next = target
								.chooseToUse(function (card) {
									const event = get.event();
									if (!lib.filter.cardEnabled(card, event.player, event)) return false;
									return get.name(card) == "sha";
								}, "雄异：是否使用一张不可被响应的【杀】？")
								.set("oncard", card => {
									_status.event.directHit.addArray(game.players);
								});
							if (!keep) next.set("prompt2", "若你不使用，则结束此流程");
							const result = await next.forResult();
							if (!result.bool && !keep) {
								stop = true;
								break;
							}
						}
						if (keep) keep = false;
						if (stop) break;
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (player.hasUnknown()) return 0;
							return target.countCards("hs");
						},
					},
				},
			},
			stdyouji: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.canMoveCard(
						null,
						true,
						game.filterPlayer(i => {
							return i.group == "qun";
						}),
						card => {
							return [3, 4, 6].includes(parseInt(get.subtype(card).slice("equip".length)));
						},
						"nojudge"
					);
				},
				direct: true,
				zhuSkill: true,
				content() {
					player
						.moveCard(
							game.filterPlayer(i => {
								return i.group == "qun";
							}),
							card => {
								return [3, 4, 6].includes(parseInt(get.subtype(card).slice("equip".length)));
							}
						)
						.set("prompt", get.prompt2("stdyouji"))
						.set("nojudge", true)
						.set("logSkill", "stdyouji");
				},
			},
			//马云禄
			stdfengpo: {
				audio: "fengpo",
				trigger: { source: "damageBegin1" },
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						[player, event.player].some(target => {
							return target.isIn() && target.countCards("he");
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdfengpo"), (card, player, target) => {
							const event = get.event().getTrigger();
							return [player, event.player]
								.filter(targetx => {
									return targetx.isIn() && targetx.countCards("he");
								})
								.includes(target);
						})
						.set("ai", target => {
							const player = get.event("player"),
								aim = get.event().getTrigger().player;
							let eff = get.damageEffect(aim, player, player);
							if (aim === player && player.getDiscardableCards(player, "he", card => get.suit(card) == "diamond")) eff /= 4;
							return eff + get.effect(target, { name: "guohe" }, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await player
						.discardPlayerCard(target, "he", true)
						.set("ai", button => {
							const suit = get.suit(button.link);
							return get.event().att * (suit == "diamond" ? 5 : 1) * get.value(button.link, player);
						})
						.set("prompt", "凤魄：弃置" + (target != player ? get.translation(target) : "") + "一张牌")
						.set("prompt2", "若弃置了方片牌，则此伤害+1")
						.set("att", get.sgnAttitude(player, target))
						.forResult();
					if (result.bool) {
						if (result.cards && result.cards.some(i => get.suit(i, target) == "diamond")) {
							player.popup("洗具");
							trigger.increase("num");
						}
					}
				},
			},
			//蒋干
			stddaoshu: {
				audio: "daoshu",
				trigger: { global: "phaseZhunbeiBegin" },
				filter(event, player) {
					return game.hasPlayer(target => {
						return target != event.player && target.countCards("h");
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stddaoshu"), (card, player, target) => {
							const event = get.event().getTrigger();
							return target != event.player && target.countCards("h");
						})
						.set("ai", target => {
							const player = get.event("player");
							if (get.attitude(player, target) >= 0) return 0;
							return 1 / target.countCards("h");
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.tempBanSkill("stddaoshu", "roundStart", false);
					const target = event.targets[0];
					const result = await player.choosePlayerCard(target, "h", true).forResult();
					if (result.bool) {
						const cards = result.cards || [];
						if (cards.length) {
							await player.showCards(cards, get.translation(player) + "发动了【盗书】");
							await trigger.player.gain(cards, target, "give");
							const suits = cards.reduce((list, card) => {
								return list.add(get.suit(card, target));
							}, []);
							if (suits.length) {
								for (const i of [player, trigger.player]) {
									i.addTempSkill("stddaoshu_effect");
									i.markAuto("stddaoshu_effect", suits);
								}
							}
						}
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						mod: {
							cardEnabled(card, player) {
								if (player.getStorage("stddaoshu_effect").includes(get.suit(card))) return false;
							},
							cardSavable(card, player) {
								if (player.getStorage("stddaoshu_effect").includes(get.suit(card))) return false;
							},
						},
						intro: { content: "不能使用$花色的牌" },
					},
				},
			},
			stddaizui: {
				audio: "spdaizui",
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return player.isTempBanned("stddaoshu");
				},
				forced: true,
				content() {
					delete player.storage.temp_ban_stddaoshu;
					player.popup("盗书");
					game.log(player, "重置了技能", "#g【盗书】");
				},
				ai: {
					combo: "stddaoshu"
				},
			},
			//周处
			stdxiongxia: {
				audio: "xianghai",
				enable: "chooseToUse",
				filterCard: true,
				selectCard: 2,
				position: "hes",
				viewAs: { name: "juedou" },
				selectTarget: 2,
				viewAsFilter(player) {
					if (player.countCards("hes") < 2) return false;
				},
				check(card) {
					if (get.name(card) == "sha") return 4 - get.value(card);
					return 7.5 - get.value(card);
				},
				onuse(links, player) {
					player.addTempSkill("stdxiongxia_effect");
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "useCardAfter" },
						filter(event, player) {
							return (
								event.skill == "stdxiongxia" &&
								(event.targets || []).every(target => {
									return target.getHistory("damage", evt => {
										return evt.card && evt.card == event.card;
									}).length;
								})
							);
						},
						forced: true,
						popup: false,
						content() {
							player.tempBanSkill("stdxiongxia");
						},
					},
				},
			},
			//吕玲绮
			stdhuizhan: {
				audio: "guowu",
				trigger: { player: "useCard2" },
				filter(event, player) {
					if (event.card.name != "sha") return false;
					return game.hasPlayer(target => {
						return !event.targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target) && lib.filter.targetInRange(event.card, player, target);
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt2("stdhuizhan"),
							(card, player, target) => {
								const event = get.event().getTrigger();
								return !event.targets.includes(target) && lib.filter.targetEnabled2(event.card, player, target) && lib.filter.targetInRange(event.card, player, target);
							},
							[1, 2]
						)
						.set("ai", target => {
							const player = get.event("player"),
								event = get.event().getTrigger();
							return get.effect(target, event.card, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					trigger.targets.addArray(event.targets);
					player.addTempSkill("stdhuizhan_effect");
					trigger.card.stdhuizhan = true;
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { global: "chooseToUseBegin" },
						filter(event, player) {
							if (event._stdhuizhan_effect) return false;
							const evt = event.getParent(2);
							return evt.card && evt.card.stdhuizhan;
						},
						forced: true,
						popup: false,
						forceDie: true,
						async content(event, trigger, player) {
							trigger._stdhuizhan_effect = true;
							const targets = trigger
								.getParent(2)
								.targets.filter(i => {
									return i != trigger.player;
								})
								.sortBySeat();
							if (targets.length) {
								for (const target of targets) {
									if (!target.isIn()) continue;
									const next = target.chooseToUse("挥战：是否替" + get.translation(trigger.player) + "使用一张【闪】？", { name: "shan" });
									next.set("ai", () => {
										const event = _status.event;
										return get.attitude(event.player, event.source) - 2;
									});
									next.set("skillwarn", "替" + get.translation(player) + "打出一张闪");
									next.autochoose = lib.filter.autoRespondShan;
									next.set("source", player);
									const result = await next.forResult();
									if (result.bool) {
										trigger.result = { bool: true, card: { name: "shan", isCard: true, cards: result.cards.slice() }, cards: result.cards.slice() };
										trigger.responded = true;
										trigger.animate = false;
										break;
									}
								}
							}
						},
					},
				},
			},
			//羊祜
			stdmingfa: {
				audio: "dcmingfa",
				enable: "phaseUse",
				filter(event, player) {
					if (player.hasSkill("stdmingfa_used")) return false;
					return game.hasPlayer(target => target.getHp() > 1);
				},
				filterTarget(card, player, target) {
					return target.getHp() > 1;
				},
				async content(event, trigger, player) {
					const target = event.target;
					await target.damage();
					if (target.isIn()) {
						player.addSkill("stdmingfa_used");
						player.markAuto("stdmingfa_used", [target]);
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
						trigger: { global: ["dieAfter", "recoverAfter"] },
						filter(event, player) {
							return player.getStorage("stdmingfa_used").includes(event.player);
						},
						forced: true,
						popup: false,
						content() {
							player.popup("明伐");
							game.log(player, "恢复了技能", "#g【明伐】");
							player.removeSkill("stdmingfa_used");
						},
					},
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							return get.sgn(get.attitude(player, target)) * get.damageEffect(target, player, player);
						},
					},
				},
			},
			//骆统
			stdrenzheng: {
				audio: "renzheng",
				trigger: { global: ["damageCancelled", "damageZero"] },
				filter(event, player, name) {
					if (!_status.currentPhase || !_status.currentPhase.isIn()) return false;
					if (name == "damageCancelled") return true;
					return event.change_history.some(i => i < 0);
				},
				forced: true,
				logTarget: () => _status.currentPhase,
				content() {
					_status.currentPhase.draw();
				},
			},
			stdjinjian: {
				audio: "jinjian",
				trigger: {
					source: "damageBegin2",
					player: "damageBegin4",
				},
				filter: function (event, player, name) {
					return !player.hasSkill(`stdjinjian_effect${name.slice(11)}`);
				},
				prompt2(event, player, name) {
					return `防止即将${name == "damageBegin2" ? "造成" : "受到"}的伤害`;
				},
				check: function (event, player) {
					return get.damageEffect(event.player, event.source, player) < 0;
				},
				async content(event, trigger, player) {
					trigger.cancel();
					player.addTempSkill(`stdjinjian_effect${event.triggername.slice(11)}`);
				},
				subSkill: {
					effect2: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						async content(event, trigger, player) {
							trigger.num++;
							player.tempBanSkill(event.name, null, false);
							player.unmarkSkill(event.name);
						},
						mark: true,
						marktext: "进",
						intro: {
							content: "下次造成的伤害+1",
						},
					},
					effect4: {
						trigger: { player: "damageBegin3" },
						forced: true,
						charlotte: true,
						async content(event, trigger, player) {
							trigger.num++;
							player.tempBanSkill(event.name, null, false);
							player.unmarkSkill(event.name);
						},
						mark: true,
						marktext: "谏",
						intro: {
							content: "下次受到的伤害+1",
						},
					},
				},
				ai: {
					maixie_defend: true,
					threaten: 0.9,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return;
							if (player._stdjinjian_tmp) return;
							const count = player.storage.counttrigger;
							if (count && count.stdjinjian_player && count.stdjinjian_player > 0) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (get.tag(card, "damage")) {
								if (target.hasSkill("stdjinjian_effect4")) {
									return [1, -2];
								} else {
									if (get.attitude(player, target) > 0) {
										return [0, 0.2];
									}
									if (get.attitude(player, target) < 0 && !player.hasSkillTag("damageBonus")) {
										var sha = player.getCardUsable({ name: "sha" });
										player._stdjinjian_tmp = true;
										var num = player.countCards("h", function (card) {
											if (card.name == "sha") {
												if (sha == 0) {
													return false;
												} else {
													sha--;
												}
											}
											return get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
										});
										delete player._stdjinjian_tmp;
										if (player.hasSkillTag("damage")) {
											num++;
										}
										if (num < 2) {
											return [0, 0.8];
										}
									}
								}
							}
						},
					},
				},
			},
			//李傕
			stdxiongsuan: {
				audio: "xinfu_langxi",
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.isMaxHp();
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							"请选择【凶算】的目标",
							lib.translate.stdxiongsuan_info,
							(card, player, target) => {
								return target.getHp() == player.getHp();
							},
							[1, Infinity],
							true
						)
						.set("ai", target => {
							const player = get.event("player");
							return get.damageEffect(target, player, player);
						})
						.forResult();
				},
				locked: true,
				async content(event, trigger, player) {
					for (const i of event.targets) {
						await i.damage();
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (
								target.hp <= 1 ||
								!target.hasFriend() ||
								!_status.currentPhase ||
								!get.tag(card, "damage")
							) return;
							let hp = target.hp - 1;
							if (game.hasPlayer(cur => {
								return cur.hp > hp;
							})) return;
							let ori = game.countPlayer(cur => {
								return cur.hp === hp + 1 && get.attitude(target, cur) <= 0;
							}), now = game.countPlayer(cur => {
								return cur.hp === hp && get.attitude(target, cur) <= 0;
							}), seat = 1, tar = _status.currentPhase.next;
							while (tar !== target) {
								if (get.attitude(target, tar) <= 0) seat++;
								tar = tar.next;
							}
							return [1, 2 * (now - ori) / seat];
						}
					}
				}
			},
			//程普
			stdchunlao: {
				audio: "chunlao",
				trigger: { player: "phaseDiscardEnd" },
				filter(event, player) {
					return (
						(event.cards || []).length >= 2 &&
						game.hasPlayer(target => {
							return target != player && target.countCards("h");
						})
					);
				},
				async cost(event, trigger, player) {
					const cards = trigger.cards;
					event.result = await player
						.chooseTarget(get.prompt("stdchunlao"), "用" + get.translation(cards) + "交换一名其他角色的手牌", (card, player, target) => {
							return target != player && target.countCards("h");
						})
						.set("ai", target => {
							return get.event("cards").length - target.countCards("h") - 0.5;
						})
						.set("cards", cards)
						.forResult();
				},
				async content(event, trigger, player) {
					const cards = trigger.cards,
						target = event.targets[0];
					await target.loseToDiscardpile(target.getCards("h"));
					await target.gain(cards, "gain2").set("giver", player);
					if (player.isDamaged()) {
						const bool = await target
							.chooseBool("是否令" + get.translation(player) + "回复1点体力？")
							.set("choice", get.recoverEffect(player, target, target) > 0)
							.forResult("bool");
						if (bool) {
							target.line(player);
							await player.recover();
						}
					}
				},
			},
			//文鸯
			stdquedi: {
				audio: "dbquedi",
				enable: "chooseToUse",
				filterCard: { name: "sha" },
				position: "hes",
				viewAs: { name: "juedou" },
				viewAsFilter(player) {
					if (!player.countCards("hes", { name: "sha" })) return false;
				},
				check(card) {
					return 6 - get.value(card);
				},
			},
			//邓芝
			//只因盟
			stdzhiyinmeng: {
				audio: "weimeng",
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.countCards("he");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCardTarget({
							prompt: get.prompt2("stdzhiyinmeng"),
							filterTarget: lib.filter.notMe,
							filterCard: true,
							position: "he",
							selectCard: [1, Infinity],
							complexCard: true,
							complexTarget: true,
							complexSelect: true,
							ai1(card) {
								if (ui.selected.cards.length && card.name != "du") return 0;
								if (card.name == "du") return 114514;
								return 5 - get.value(card);
							},
							ai2(target) {
								if (!ui.selected.cards.length) return 0;
								const player = get.event("player"),
									att = get.attitude(player, target);
								if (ui.selected.cards[0].name == "du") {
									if (!target.hasSkillTag("nodu")) return -att;
									return -0.00001 * att;
								}
								return att;
							},
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await player.give(event.cards, target);
					await target.chooseToGive("he", [1, Infinity], player);
				},
			},
			stdhehe: {
				audio: "jianliang",
				trigger: { player: "phaseDrawEnd" },
				filter(event, player) {
					return game.hasPlayer(target => {
						return target != player && target.countCards("h") == player.countCards("h");
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(
							get.prompt2("stdhehe"),
							(card, player, target) => {
								return target != player && target.countCards("h") == player.countCards("h");
							},
							[1, 2]
						)
						.set("ai", target => {
							const player = get.event("player");
							return get.effect(target, { name: "draw" }, player, player);
						})
						.forResult();
				},
				locked: true,
				async content(event, trigger, player) {
					await game.asyncDraw(event.targets);
					await game.asyncDelayx();
				},
			},
			//张翼
			stdzhiyi: {
				audio: "zhiyi",
				trigger: { global: "phaseEnd" },
				filter(event, player) {
					return player.getHistory("useCard", evt => {
						return evt.card.name == "sha";
					}).length;
				},
				forced: true,
				async content(event, trigger, player) {
					const result = await player.chooseUseTarget("执义：视为使用【杀】，或摸一张牌", { name: "sha" }, false).forResult();
					if (!result.bool) await player.draw();
				},
			},
			//大魏汉尼拔
			stdshefu: {
				audio: "shefu",
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.countCards("h");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard(get.prompt("stdshefu"), "将一张手牌置于武将牌上", "h")
						.set("ai", card => {
							return (
								(lib.card.list
									.slice()
									.map(list => list[2])
									.filter(name => {
										return card.name == name;
									}).length -
									1) /
								(get.value(card) || 0.5)
							);
						})
						.forResult();
				},
				content() {
					player.addToExpansion(event.cards, player, "giveAuto").gaintag.add("stdshefu");
				},
				marktext: "伏",
				intro: {
					markcount: "expansion",
					mark(dialog, _, player) {
						const cards = player.getExpansions("stdshefu");
						if (player.isUnderControl(true) && cards.length) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张“伏兵”";
					},
				},
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "stdshefu_effect",
				subSkill: {
					effect: {
						audio: "shefu",
						trigger: { global: "useCard" },
						filter(event, player) {
							return player.getExpansions("stdshefu").some(card => card.name == event.card.name);
						},
						async cost(event, trigger, player) {
							let result = await player
								.chooseButton(["###" + get.prompt("stdshefu") + "###弃置一张同名牌，令此牌无效", player.getExpansions("stdshefu")])
								.set("filterButton", button => {
									return button.link.name == get.event().getTrigger().card.name;
								})
								.set("ai", button => {
									return get.event("goon") ? 1 : 0;
								})
								.set("goon", lib.skill.sbkanpo.subSkill.kanpo.check(trigger, player))
								.forResult();
							if (result.bool && result.links) {
								result.cards = result.links.slice();
								delete result.links;
							}
							event.result = result;
						},
						async content(event, trigger, player) {
							await player.loseToDiscardpile(event.cards);
							trigger.targets.length = 0;
							trigger.all_excluded = true;
						},
					},
				},
			},
			stdyibing: {
				audio: "benyu",
				trigger: { global: "dying" },
				filter(event, player) {
					return event.player != player && event.player.countCards("h");
				},
				direct: true,
				content() {
					const target = trigger.player;
					player.gainPlayerCard(target, "h", true).set("prompt", get.prompt("stdyibing", target)).logSkill = ["stdyibing", target];
				},
			},
			//樊玉凤
			stdbazhan: {
				audio: "bazhan",
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				filterCard: true,
				position: "h",
				filterTarget(card, player, target) {
					return target != player && target.hasSex("male");
				},
				discard: false,
				lose: false,
				delay: false,
				usable: 1,
				check(card) {
					if (card.name == "du") return 114514;
					return 5 - get.value(card);
				},
				async content(event, trigger, player) {
					const target = event.target;
					await player.give(event.cards, target, "visible");
					await target
						.chooseToGive(
							player,
							(card, player) => {
								return get.type2(card) != get.type2(get.event("cards")[0]);
							},
							"he"
						)
						.set("cards", event.cards);
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (!ui.selected.cards.length) return 0;
							const cardxx = ui.selected.cards[0];
							if (cardxx.name == "du") return -100;
							if (!player.hasSkill("stdzhanying")) return 1;
							if (target.countMark("stdzhanying_count") == target.countCards("h") + 1) {
								const cards = player.getCards("hs", card => {
									return card != cardxx && get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
								});
								if (!cards.length) return 1;
								let cardx = cards.filter(card => get.name(card) == "sha");
								cardx.sort((a, b) => get.effect(target, b, player, player) - get.effect(target, a, player, player));
								cardx = cardx.slice(Math.min(cardx.length, player.getCardUsable("sha")), cardx.length);
								cards.removeArray(cardx);
								return -cards.reduce((sum, card) => sum + get.effect(target, card, player, player), 0);
							}
							return 1;
						},
					},
				},
			},
			stdzhanying: {
				audio: "jiaoying",
				trigger: { global: "damageBegin2" },
				filter(event, player) {
					if (_status.currentPhase !== player) return false;
					return event.player.countCards("h") > event.player.countMark("stdzhanying_count");
				},
				forced: true,
				logTarget: "player",
				content() {
					trigger.increase("num");
				},
				global: "stdzhanying_mark",
				subSkill: {
					count: {
						charlotte: true,
						onremove: true,
						intro: {
							markcount: storage => (storage || 0).toString(),
							content: "本回合开始时手牌数为#张",
						},
					},
					mark: {
						charlotte: true,
						trigger: { global: "phaseBegin" },
						filter(event, player) {
							return event.player.hasSkill("stdzhanying", null, null, false);
						},
						forced: true,
						popup: false,
						firstDo: true,
						content() {
							player.addTempSkill("stdzhanying_count");
							player.addMark("stdzhanying_count", player.countCards("h"), false);
						},
						mod: {
							cardEnabled(card, player) {
								if (!_status.currentPhase || !_status.currentPhase.hasSkill("stdzhanying")) return;
								if (get.color(card) == "red" && player.countMark("stdzhanying_count") < player.countCards("h")) return false;
							},
							cardSavable(card, player) {
								if (!_status.currentPhase || !_status.currentPhase.hasSkill("stdzhanying")) return;
								if (get.color(card) == "red" && player.countMark("stdzhanying_count") < player.countCards("h")) return false;
							},
						},
					},
				},
			},
			//F1
			stdtiaohe: {
				audio: "fyjianyu",
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(tar1 => {
						return tar1.countDiscardableCards(player, "e", i => get.subtype(i) == "equip2") && game.hasPlayer(tar2 => {
							return tar1 !== tar2 && tar2.countDiscardableCards(player, "e");
						});
					});
					let e = 0, fj = false;
					game.countPlayer(target => {
						let es = target.getDiscardableCards(player, "e"), js = target.getDiscardableCards(player, "j", i => get.type(i) == "equip");
						if (es.length) e++;
						e += js.length;
						if (!fj && (es.some(card => get.subtype(card) == "equip2") || js.some(card => get.subtype(card) == "equip2"))) fj = true;
					});
					return fj && e >= 2;
				},
				filterTarget(card, player, target) {
					if (!ui.selected.targets.length || ui.selected.targets[0].countDiscardableCards(player, "e", i => get.subtype(i) == "equip2")) {
						return target.countDiscardableCards(player, "e");
					}
					return target.countDiscardableCards(player, "e", i => get.subtype(i) == "equip2");
					let e = 0;
					let es = target.getDiscardableCards(player, "e"), js = target.getDiscardableCards(player, "j", i => get.type(i) == "equip");
					if (es.length) e++;
					e += js.length;
					if (!e) return false;
					if (!ui.selected.targets.length) return true;
					if (!ui.selected.targets[0].countDiscardableCards(player, "ej", i => get.subtype(i) == "equip2")) {
						return es.some(card => get.subtype(card) == "equip2") || js.some(card => get.subtype(card) == "equip2");
					}
					return true;
				},
				selectTarget: function() {
					return 2;
					if (!ui.selected.targets.length) return [1, 2];
					let e = 0, player = get.event("player"), target = ui.selected.targets[0];
					let es = target.getDiscardableCards(player, "e"), js = target.getDiscardableCards(player, "j", i => get.type(i) == "equip");
					if (es.length) e++;
					e += js.length;
					if (e >= 2 && (es.some(card => get.subtype(card) == "equip2") || js.some(card => get.subtype(card) == "equip2"))) return [1, 2];
					return 2;
				},
				complexTarget: true,
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					const targets = event.targets.slice();
					if (targets.length == 1) {
						await player.discardPlayerCard("ej", targets[0], true, 2).set("filterButton", button => {
							let position = get.position(button.link), subtype = get.subtype(button.link);
							if (!subtype || !subtype.startsWith("equip")) return false;
							if (ui.selected.buttons.length) {
								let pos = get.position(ui.selected.buttons[0].link), sub = get.subtype(ui.selected.buttons[0].link);
								if (pos == "e" && position == "e") return false;
								if (sub == "equip2") return true;
								return subtype == "equip2";
							}
							if (position == "e") {
								if (!get.event("js").some(i => get.subtype(i) == "equip2")) return subtype == "equip2";
								return true;
							}
							if (!get.event("es").length) return subtype == "equip2";
							return true;
						}).set("es", targets[0].getDiscardableCards(player, "e", i => get.subtype(i) == "equip2")).set("js", targets[0].getDiscardableCards(player, "j", i => get.type(i) == "equip"));
						return;
					}
					let canfj = targets.filter(target => {
						return target.countDiscardableCards(player, "e", i => get.subtype(i) == "equip2");
					});
					for (let i = 0; i < 2; i++) {
						if (i && canfj.includes(targets[i]) && !targets[i].countDiscardableCards(player, "e", i => get.subtype(i) == "equip2")) break;
						const result = await player
							.discardPlayerCard("e", targets[i], true)
							.set("filterButton", button => {
								if (get.event("fj")) return get.subtype(button.link) == "equip2";
								return true;
								return get.type(button.link) == "equip";
							})
							.set("fj", canfj.length === 1 && canfj.includes(targets[i]))
							.forResult();
						if (result.bool && get.subtype(result.cards[0]) == "equip2") {
							canfj = [];
						}
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							let att = get.attitude(player, target), es = [];
							target.countDiscardableCards(player, "e", i => {
								es.push(get.value(i, target));
							});
							let min = Math.min(...es), max = Math.max(...es), ext = target.hasSkillTag("noe") ? 10 : 0;
							if (att <= 0) return ext - max;
							return ext - min;
						}
					},
				},
			},
			stdqiansu: {
				audio: "shengxi_feiyi",
				trigger: { target: "useCardToTargeted" },
				filter(event, player) {
					return get.type2(event.card) == "trick" && !player.countCards("e");
				},
				frequent: true,
				content() {
					player.draw();
				},
				ai: {
					noe: true,
					effect: {
						target(card, player, target) {
							if (target.countCards("e")) return;
							if (target == player && get.type(card) == "equip" && get.equipValue(card) < 5) return 0;
							if (get.type2(card) == "trick") return [1, 0.6];
						},
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		characterReplace: {
			sunhao: ["sunhao", "std_sunhao"],
			lvlingqi: ["lvlingqi", "std_lvlingqi"],
			chengyu: ["chengyu", "std_chengyu", "dc_sb_chengyu"],
			fanyufeng: ["fanyufeng", "std_fanyufeng"],
		},
		translate: {
			std_sunhao: "少阴孙皓",
			std_sunhao_prefix: "少阴",
			std_mateng: "少阴马腾",
			std_mateng_prefix: "少阴",
			std_mayunlu: "少阴马云騄",
			std_mayunlu_prefix: "少阴",
			std_jianggan: "少阴蒋干",
			std_jianggan_prefix: "少阴",
			std_zhouchu: "少阴周处",
			std_zhouchu_prefix: "少阴",
			std_lvlingqi: "少阴吕玲绮",
			std_lvlingqi_prefix: "少阴",
			std_dc_yanghu: "少阴羊祜",
			std_dc_yanghu_prefix: "少阴",
			std_dc_luotong: "少阴骆统",
			std_dc_luotong_prefix: "少阴",
			std_lijue: "少阴李傕",
			std_lijue_prefix: "少阴",
			std_chengpu: "少阴程普",
			std_chengyu_prefix: "少阴",
			std_db_wenyang: "少阴文鸯",
			std_db_wenyang_prefix: "少阴",
			std_re_dengzhi: "少阴邓芝",
			std_re_dengzhi_prefix: "少阴",
			std_zhangyì: "少阴张翼",
			std_zhangyì_prefix: "少阴",
			std_chengyu: "少阴程昱",
			std_chengpu_prefix: "少阴",
			std_fanyufeng: "少阴樊玉凤",
			std_fanyufeng_prefix: "少阴",
			std_feiyi: "少阴费祎",
			std_feiyi_prefix: "少阴",
			stdcanshi: "残蚀",
			stdcanshi_info: "锁定技，摸牌阶段，你改为摸X张牌（X为场上的已受伤角色且X至少为1）。然后本回合你使用【杀】或普通锦囊牌指定目标后，若其已受伤，你弃置一张牌。",
			stdxiongyi: "雄异",
			stdxiongyi_info: "限定技，出牌阶段，你可以选择任意名角色，这些角色依次选择是否使用一张不可被响应的【杀】，然后这些角色重复此流程直至有角色不使用【杀】。",
			stdyouji: "游骑",
			stdyouji_info: "主公技，准备阶段，你可以移动一名群势力角色的一张坐骑牌。",
			stdfengpo: "凤魄",
			stdfengpo_info: "当你使用【杀】造成伤害时，你可以弃置你或其的一张牌，若以此法弃置了方片牌，则此伤害+1。",
			stddaoshu: "盗书",
			stddaoshu_info: "每轮限一次，一名角色的准备阶段，你可以展示除其外一名角色的一张牌，然后令其获得此牌，且你与其本回合不能使用与此牌花色相同的牌。",
			stddaizui: "戴罪",
			stddaizui_info: "锁定技，当你受到伤害后，你视为本轮未发动过〖盗书〗。",
			stdxiongxia: "凶侠",
			stdxiongxia_info: "你可以将两张牌当作【决斗】对两名其他角色使用。你以此法使用的【决斗】结算完毕后，若所有目标角色都受到了此牌造成的伤害，则〖凶侠〗于本回合失效。",
			stdhuizhan: "挥戟",
			stdhuizhan_info: "你使用【杀】可以额外指定至多两个目标。若如此做，目标角色响应此【杀】时，其他目标角色可以代替其使用【闪】。",
			stdmingfa: "明伐",
			stdmingfa_info: "出牌阶段，你可以对一名体力值大于1的角色造成1点伤害，然后此技能失效直至其死亡或回复体力。",
			stdjinjian: "进谏",
			stdjinjian_info: "每回合每项各限一次，当你造成/受到伤害时，你可防止此伤害，然后你本回合内下一次造成/受到的伤害+1。",
			stdrenzheng: "仁政",
			stdrenzheng_info: "锁定技，当有伤害被防止时，你令当前回合角色摸一张牌。",
			stdxiongsuan: "凶算",
			stdxiongsuan_info: "锁定技，准备阶段，若你的体力值为全场最多，则你须对至少一名体力值等于你的角色各造成1点伤害。",
			stdchunlao: "醇醪",
			stdchunlao_info: "弃牌阶段结束时，若你本阶段弃置了不少于两张牌，则你可以用这些牌交换一名其他角色的手牌，然后其可以令你回复1点体力。",
			stdquedi: "却敌",
			stdquedi_info: "你可以将【杀】当作【决斗】使用。",
			stdzhiyinmeng: "急盟",
			stdzhiyinmeng_info: "准备阶段，你可以交给一名其他角色任意张牌，然后其可以交给你任意张牌。",
			stdhehe: "和合",
			stdhehe_info: "摸牌阶段结束时，你可以令至多两名手牌数与你相同的其他角色各摸一张牌。",
			stdzhiyi: "执义",
			stdzhiyi_info: "锁定技，一名角色的回合结束时，若你本回合使用过【杀】，则你视为使用【杀】或摸一张牌。",
			stdshefu: "设伏",
			stdshefu_info: "①结束阶段，你可以将一张手牌称为“伏兵”扣置于武将牌上。②一名角色使用牌时，你可以移去武将牌上的一张与此牌同名的“伏兵”并令此牌无效。",
			stdyibing: "益兵",
			stdyibing_info: "一名角色进入濒死状态时，你可以获得其一张牌。",
			stdbazhan: "把盏",
			stdbazhan_info: "出牌阶段限一次，你可以交给一名男性角色一张手牌，然后其可以交给你一张与此牌类别不同的牌。",
			stdzhanying: "醮影",
			stdzhanying_info: "锁定技，你的回合内，手牌数比回合开始时多的角色不能使用红色牌且受到的伤害+1。",
			stdtiaohe: "调和",
			stdtiaohe_info: "出牌阶段限一次，你可以弃置场上的一张装备牌和一张防具牌（不能为同一名角色的牌）。",
			stdqiansu: "谦素",
			stdqiansu_info: "当你成为锦囊牌的目标后，若你的装备区没有牌，则你可以摸一张牌。",
			
			std_xushu: "太阴徐庶",
			std_xushu_prefix: "太阴",
			std_xuezong: "太阴薛综",
			std_xuezong_prefix: "太阴",
			std_liuzhang: "太阴刘璋",
			std_liuzhang_prefix: "太阴",
			std_wangyuanji: "太阴王元姬",
			std_wangyuanji_prefix: "太阴",
			std_wanglang: "太阴王朗",
			std_wanglang_prefix: "太阴",
			std_zhonghui: "太阴钟会",
			std_zhonghui_prefix: "太阴",
			std_fuhuanghou: "太阴伏寿",
			std_fuhuanghou_prefix: "太阴",
			std_liubiao: "太阴刘表",
			std_liubiao_prefix: "太阴",
			std_gongsunyuan: "太阴公孙渊",
			std_gongsunyuan_prefix: "太阴",
			std_cenhun: "太阴岑昏",
			std_cenhun_prefix: "太阴",
			std_sunshao: "太阴孙邵",
			std_sunshao_prefix: "太阴",
			std_jiangwan: "太阴蒋琬",
			std_jiangwan_prefix: "太阴",
			std_maliang: "太阴马良",
			std_maliang_prefix: "太阴",
			std_simashi: "太阴司马师",
			std_simashi_prefix: "太阴",
			std_guanxing: "太阴关兴",
			std_guanxing_prefix: "太阴",
			std_huaxin: "太阴华歆",
			std_huaxin_prefix: "太阴",
			stdwuyou: "武佑",
			stdwuyou_info: "出牌阶段限一次，你可以与一名角色进行拼点，若你没赢，你本回合视为拥有〖武圣〗。然后拼点赢的角色视为对没赢的角色使用一张【决斗】。",
			stdqiuyuan: "求援",
			stdqiuyuan_info: "当你成为一名角色使用【杀】的目标时，你可以令另一名其他角色选择一项：1.交给你一张牌；2.成为此【杀】的额外目标。",
			stdzhuikong: "惴恐",
			stdzhuikong_info: "其他角色的准备阶段，你可以用【杀】与其拼点，赢的角色可以使用对方的拼点牌。",
			stdzishou: "自守",
			stdzishou_info: "出牌阶段开始前，你可以摸场上势力数张牌，然后跳过此阶段。",
			stdjujin: "据荆",
			stdjujin_info: "主公技，当你受到其他群势力角色造成的伤害后，你可以弃置两张牌，然后回复1点体力。",
			stdhuaiyi: "怀异",
			stdhuaiyi_info: "锁定技，准备阶段，你展示所有手牌，若颜色不同，你弃置其中一种颜色的所有牌，然后获得至多等量名其他角色各一张牌，若选择角色数大于1，你失去1点体力。",
			stdfengbai: "封拜",
			stdfengbai_info: "主公技，当你获得一名群势力角色装备区内的牌后，你可以令其摸一张牌。",
			stdjishe: "极奢",
			stdjishe_info: "出牌阶段，若你的手牌上限大于0，你可以令本回合手牌上限-1，然后摸一张牌。",
			stdwudu: "无度",
			stdwudu_info: "一名没有手牌的角色受到伤害时，你可以减少1点体力上限，防止此伤害。",
			stdjinglve: "景略",
			stdjinglve_info: "其他角色的弃牌阶段开始时，你可以展示并交给其两张牌，令其本阶段不能弃置这些牌，然后你可以于本阶段结束时获得本阶段弃置的一张牌。",
			stddingyi: "定仪",
			stddingyi_info: "一名角色的结束阶段，若其装备区内没有牌，其可以摸一张牌。",
			stdzuici: "罪辞",
			stdzuici_info: "当你受到伤害后，你可以将场上的一张牌移至伤害来源区域内。",
			stdruwu: "儒武",
			stdruwu_info: "你可以将装备区内一张不为本回合置入的装备牌当【无中生有】或【决斗】使用。",
			stdchengshi: "承事",
			stdchengshi_info: "限定技，当一名其他角色死亡时，你可以与其交换座次和装备区内的牌。",
			stdxiemu: "协穆",
			stdxiemu_info: "其他角色的出牌阶段限一次，其可以展示并交给你一张基本牌，然后其本回合攻击范围+1。",
			stdnaman: "纳蛮",
			stdnaman_info: "出牌阶段限一次，你可以将任意张基本牌当指定等量名目标的【南蛮入侵】使用。",
			stdfunan: "复难",
			stdfunan_info: "每回合限一次，其他角色使用的牌被你抵消时，你可以获得之。",
			stdxunjie: "训诫",
			stdxunjie_info: "结束阶段，你可以令一名角色弃置一张手牌，若此牌花色为♦️，其摸两张牌。",
			stdwuyan: "无言",
			stdwuyan_info: "锁定技，你的锦囊牌均视为【无懈可击】。",
			stdjujian: "举荐",
			stdjujian_info: "每回合限一次，你的【无懈可击】结算结束后可以交给一名其他角色。",
			stdyinge: "引戈",
			stdyinge_info: "出牌阶段限一次，你可以令一名其他角色交给你一张牌，然后其视为对你攻击范围内的另一名角色使用一张【杀】。",
			stdshiren: "施仁",
			stdshiren_info: "每回合限一次，当你成为其他角色使用【杀】的目标后，你可以摸两张牌，然后交给该角色一张牌。",
			stdjuyi: "据益",
			stdjuyi_info: "主公技，其他群势力角色每回合首次对你造成伤害时，其可以防止此伤害，改为获得你的一张牌。",
			stdqianchong: "谦冲",
			stdqianchong_info: "锁定技，若你的装备区内牌的数量为奇数/偶数，你使用牌无次数/距离限制。",
			stdshangjian: "尚俭",
			stdshangjian_info: "结束阶段，若你本回合失去的牌数不大于你的体力值，你可以从弃牌堆中获得一张你本回合失去的牌。",
			stdgushe: "鼓舌",
			stdgushe_info: "出牌阶段限一次，你可以与一名角色拼点，拼点赢的角色摸一张牌，然后拼点输的角色可以与对方重复此流程。",
			stdjici: "激词",
			stdjici_info: "当你亮出拼点牌时，你可以失去1点体力，令此牌点数视为k。",
			stdxingfa: "兴伐",
			stdxingfa_info: "准备阶段，若你的手牌数不小于体力值，你可以对一名其他角色造成1点伤害。",
			stdyuanqing: "渊清",
			stdyuanqing_info: "回合结束时，你可以令所有角色依次选择并获得弃牌堆中其于此回合内失去的一张牌。",
			stdshuchen: "疏陈",
			stdshuchen_info: "你的回合外，你可以将超出手牌上限的手牌当【桃】使用。",

			sixiang_shaoyin: "四象封印·少阴",
			sixiang_taiyin: "四象封印·太阴",
			// sixiang_shaoyang: "四象封印·少阳",
			// sixiang_taiyang: "四象封印·太阳",
		},
		pinyins: {
			
		},
	};
});
