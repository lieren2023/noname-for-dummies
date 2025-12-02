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
			std_dc_yanghu: ["male", "wei", 4, ["stdmingfa"], ["border:jin"]],
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
			std_simashi: ["male", "wei", 4, ["stdjinglve"], ["border:jin"]],
			std_sunshao: ["male", "wu", 3, ["stddingyi", "stdzuici"]],
			std_jiangwan: ["male", "shu", 3, ["stdruwu", "stdchengshi"]],
			std_maliang: ["male", "shu", 3, ["stdxiemu", "stdnaman"]],
			std_xushu: ["male", "shu", 3, ["stdwuyan", "stdjujian"], ["border:wei"]],
			std_xuezong: ["male", "wu", 3, ["stdfunan", "stdxunjie"]],
			std_liuzhang: ["male", "qun", 3, ["stdyinge", "stdshiren", "stdjuyi"], ["zhu"]],
			std_wangyuanji: ["female", "wei", 3, ["stdqianchong", "stdshangjian"], ["border:jin"]],
			std_wanglang: ["male", "wei", 3, ["stdgushe", "stdjici"]],
			std_zhonghui: ["male", "wei", 4, ["stdxingfa"], ["clan:颍川钟氏"]],
			std_huaxin: ["male", "wei", 3, ["stdyuanqing", "stdshuchen"]],
			
			std_zhangbao: ["male", "shu", 4, ["stdjuezhu", "stdchengji"], ["die:std_zhangbao"]],
			std_liuchen: ["male", "shu", 4, ["stdzhanjue", "stdqinwang"], ["zhu"]],
			std_guansuo: ["male", "shu", 4, ["stdzhengnan"]],
			std_xiahouba: ["male", "shu", 4, ["stdbaobian"]],
			std_caorui: ["male", "wei", 3, ["stdhuituo", "stdmingjian", "xingshuai"], ["zhu"]],
			std_liuye: ["male", "wei", 3, ["stdpolu", "stdchoulve"]],
			std_guohuanghou: ["female", "wei", 3, ["stdjiaozhao", "stddanxin"]],
			std_lvfan: ["male", "wu", 3, ["mbdiaodu", "stddianfeng"]],
			std_dingfeng: ["male", "wu", 4, ["stdduanbing", "stdfenxun"]],
			std_sunluban: ["female", "wu", 3, ["stdzenhui", "stdchuyi"]],
			std_liuzan: ["male", "wu", 4, ["stdfenyin"]],
			std_sunyi: ["male", "wu", 4, ["stdzaoli"]],
			std_taoqian: ["male", "qun", 4, ["stdyirang"]],
			std_jiling: ["male", "qun", 4, ["stdshuangdao"]],
			std_liru: ["male", "qun", 3, ["stdmieji", "stdjuece"]],
			std_wangyun: ["male", "qun", 3, ["stdyunji", "stdzongji"]],
			
			std_tianfeng: [
				"male",
				"qun",
				3,
				["stdgangjian", "stdguijie"],
			],
			std_liuxie: [
				"male",
				"qun",
				3,
				["stdtianming", "stdmizhao", "stdzhongyan"],
				["zhu"]
			],
			std_simazhao: [
				"male",
				"wei",
				4,
				["stdzhaoxin"],
			],
			std_guozhao: [
				"female",
				"wei",
				3,
				["stdwufei", "stdjiaochong"],
			],
			std_jiakui: [
				"male",
				"wei",
				3,
				["stdzhongzuo", "stdwanlan"],
			],
			std_yufan: [
				"male",
				"wu",
				3,
				["stdzongxuan", "stdzhiyan"],
			],
			std_zhugeke: [
				"male",
				"wu",
				3,
				["stdaocai", "stdduwu"],
			],
			std_mengda: [
				"male",
				"shu",
				4,
				["stdzhuan"],
			],
			std_caozhen: [
				"male",
				"wei",
				4,
				["stdsidi"],
			],
			std_dongyun: [
				"male",
				"shu",
				3,
				["stdbingzheng", "stdduliang"],
			],
			std_baosanniang: [
				"female",
				"shu",
				3,
				["stdzhennan", "stdshuyong"],
			],
			std_liuba: [
				"male",
				"shu",
				3,
				["stdduanbi"],
			],
			std_kongrong: [
				"male",
				"qun",
				3,
				["stdlirang"],
			],
			std_zoushi: [
				"female",
				"qun",
				3,
				["stdhuoshui", "stdqingcheng"],
			],
			std_sunluyu: [
				"female",
				"wu",
				3,
				["stdmumu", "stdmeibu"],
			],
			std_zhoufang: [
				"male",
				"wu",
				3,
				["stdqijian", "stdyoudi"],
			],
		},
		characterSort: {
			sixiang: {
				// 分包调整（by棘手怀念摧毁）
				shaoyin_li: ["std_lijue", "std_chengpu", "std_db_wenyang", "std_re_dengzhi", "std_zhangyì", "std_chengyu", "std_fanyufeng", "std_feiyi"],
				shaoyin_zhen: ["std_jianggan", "std_mayunlu", "std_mateng", "std_sunhao", "std_dc_luotong", "std_dc_yanghu", "std_lvlingqi", "std_zhouchu"],
				taiyin_gen: ["std_guanxing", "std_sunshao", "std_jiangwan", "std_maliang", "std_xushu", "std_xuezong", "std_wangyuanji", "std_zhonghui"],
				taiyin_kun: ["std_liuzhang", "std_liubiao", "std_gongsunyuan", "std_fuhuanghou", "std_cenhun", "std_wanglang", "std_huaxin", "std_simashi"],
				shaoyang_xun: ["std_zhangbao", "std_guansuo", "std_liuchen", "std_caorui", "std_guohuanghou", "std_liuye", "std_dingfeng", "std_sunluban"],
				shaoyang_kan: ["std_xiahouba", "std_lvfan", "std_liuzan", "std_sunyi", "std_taoqian", "std_jiling", "std_liru", "std_wangyun"],
				taiyang_qian: ["std_tianfeng", "std_liuxie", "std_simazhao", "std_guozhao", "std_jiakui", "std_yufan", "std_zhugeke", "std_mengda"],
				taiyang_dui: ["std_caozhen", "std_dongyun", "std_baosanniang", "std_liuba", "std_kongrong", "std_zoushi", "std_sunluyu", "std_zhoufang"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			std_guanxing: "关兴，名将关羽之子，继承了父亲汉寿亭侯的爵位。年少时即受诸葛亮器重，在蜀汉担任侍中、中监军之职，后在夷陵之战中报了杀父之仇。",
			std_zhangbao: "张苞，张飞的长子，使用父亲的家传蛇矛为兵器，勇猛剽悍不弱其父。",
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
			//四象封印·太阳
			//田丰
			stdgangjian: {
				audio: "sijian",
				trigger: { global: "phaseZhunbeiBegin" },
				filter(event, player) {
					return event.player.canUse({ name: "sha" }, player);
				},
				check(event, player) {
					if (get.attitude(player, event.player) > 0) return false;
					if (player.getEquip("bagua") || player.getEquip("rw_bagua")) return true;
					if (player.hasSkill("stdguijie") && player.countCards("hes", { color: "red" }) > 1) return true;
					if (player.countCards("hs", "shan") || (player.countCards("hs", "sha") && player.hasSkill("ollongdan", null, null, false))) return true;
					return get.effect(player, { name: "draw" }, player, player) + get.effect(event.player, { name: "sha" }, event.player, player);
				},
				logTarget: "player",
				async content(event, trigger, player) {
					const { player: target } = trigger;
					const sha = get.autoViewAs({ name: "sha", isCard: true });
					if (target.canUse({ name: "sha" }, player)) {
						await target.useCard(sha, player);
						if (!game.hasPlayer(current => current.hasHistory("damage", evt => evt.getParent(3) == event))) target.addTempSkill(event.name + "_effect");
					}
				},
				subSkill: {
					effect: {
						charlotte: true,
						mod: {
							cardEnabled(card) {
								if (get.type2(card) == "trick") return false;
							},
						},
						intro: { content: "本回合不能使用锦囊牌" },
					},
				},
			},
			stdguijie: {
				enable: ["chooseToRespond", "chooseToUse"],
				viewAs: { name: "shan" },
				filter(event, player) {
					return player.countCards("hes", { color: "red" }) > 1;
				},
				filterCard(card) {
					return get.color(card) == "red";
				},
				selectCard: 2,
				position: "hes",
				prompt: "弃置两张红色牌并摸一张牌，然后视为使用或打出一张【闪】",
				check(card) {
					return 6.5 - get.value(card);
				},
				log: false,
				async precontent(event, trigger, player) {
					player.logSkill("stdguijie");
					const cards = event.result.cards;
					await player.discard(cards);
					event.result.cards = [];
					await player.draw();
				},
				ai: {
					order(item, player) {
						if (player.countCards("hes", card => get.color(card) == "red" && get.name(card) != "shan") > 3) return 7;
						return 2;
					},
					respondShan: true,
					skillTagFilter(player) {
						return player.countCards("hes", { color: "red" }) > 1;
					},
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, "respondShan") && current < 0) return 0.6;
						},
					},
				},
			},
			//刘协
			stdtianming: {
				audio: "tianming",
				inherit: "tianming",
				check(event, player) {
					const hs = player.getCards("h");
					if (hs.length <= 2 && hs.some(card => ["shan", "tao"].includes(card.name))) return false;
					return player.countCards("he") <= 3;
				},
				filter(event, player) {
					return event.card.name == "sha" && player.countCards("he");
				},
				async content(event, trigger, player) {
					if (player.countCards("he")) await player.modedDiscard(player.getCards("he"));
					await player.draw(2);
					const target = game.findPlayer(current => current.isMaxHp(true));
					if (target?.countCards("he") && player != target) {
						const { result } = await target.chooseBool(get.prompt(event.name), `弃置所有牌然后摸两张牌？`).set("choice", target.countCards("he") <= 3);
						if (result?.bool) {
							await target.modedDiscard(target.getCards("he"));
							await target.draw(2);
						}
					}
				},
			},
			stdmizhao: {
				audio: "mizhao",
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.countCards("h") && game.countPlayer(current => player != current) > 1;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), 2, lib.filter.notMe)
						.set("targetprompt", ["传诏对象", "讨伐对象"])
						.set("ai", target => {
							const player = get.player();
							const att = get.attitude(player, target);
							if (ui.selected.targets.length) {
								const target1 = ui.selected.targets[0];
								const targets = game.filterPlayer(current => player != current && current != target1 && get.effect(current, { name: "losehp" }, player, target1, player) > 0);
								if (targets.length) return get.effect(target, { name: "losehp" }, player, target1, player);
							}
							return att;
						})
						.set("multitarget", true)
						.forResult();
				},
				async content(event, trigger, player) {
					const { targets } = event;
					player.line2(targets);
					const [target1, target2] = targets;
					if (player.countCards("he")) await player.give(player.getCards("he"), target1);
					const { result } = await target1.chooseBool(get.prompt(event.name), `与${get.translation(target2)}各失去1点体力？`).set("choice", get.effect(target1, { name: "losehp" }, player, target1, player) + get.effect(target2, { name: "losehp" }, player, target1, player) > 0);
					if (!result?.bool) return;
					for (const target of targets.sortBySeat()) await target.loseHp();
				},
			},
			stdzhongyan: {
				trigger: { global: "die" },
				filter(event, player) {
					return event.player.group == "qun" && player.isDamaged();
				},
				zhuSkill: true,
				frequent: true,
				async content(event, trigger, player) {
					await player.recover();
				},
			},
			//司马昭
			stdzhaoxin: {
				audio: "xinfu_zhaoxin",
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.countCards("h");
				},
				forced: true,
				async content(event, trigger, player) {
					const hs = player.getCards("h");
					if (!hs.length) return;
					await player.showCards(hs, `${get.translation(player)}发动了【${get.translation(event.name)}】`);
					const colors = hs.map(card => get.color(card)).toUniqued();
					if (colors.length !== 1) return;
					const { result } = await player.chooseTarget(true, get.prompt2(event.name)).set("ai", target => {
						const player = get.player();
						return get.damageEffect(target, player, player);
					});
					if (result?.bool && result?.targets?.length) await result.targets[0].damage();
				},
			},
			//郭照
			stdwufei: {
				audio: "wufei",
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return game.hasPlayer(current => current.hasSex("female") && current.countCards("h"));
				},
				async cost(event, trigger, player) {
					const list = game.filterPlayer(current => current.hasSex("female") && current.countCards("h"));
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
							return get.event("list").includes(target);
						})
						.set("ai", target => {
							const player = get.player();
							const att = Math.sign(get.attitude(player, target));
							const list = get.event("list").filter(current => current.hasSex("female") && current.countCards("h") && get.attitude(player, current) < 0);
							if (list.length) return -att * target.countCards("h");
							const bool = Object.keys(lib.color).some(color => {
								const num = target.countCards("h", card => get.color(card, target) == color);
								return num > 0 && num <= 2;
							});
							return att * (bool ? 1 : 0);
						})
						.set("list", list)
						.forResult();
				},
				async content(event, trigger, player) {
					const {
						targets: [target],
					} = event;
					if (!target.countCards("h")) return;
					await target.showHandcards();
					const list = [],
						bannedList = [],
						indexs = Object.keys(lib.color),
						hs = target.getCards("h");
					for (const card of hs) {
						const color = get.color(card, target);
						list.add(color);
						if (!lib.filter.cardDiscardable(card, target, "stdwufei")) bannedList.add(color);
						if (bannedList.length == indexs.length) break;
					}
					list.removeArray(bannedList);
					list.sort((a, b) => indexs.indexOf(a) - indexs.indexOf(b));
					if (!list.length) return;
					const dialog = ["诬诽：弃置一种颜色的所有牌并摸一张牌"];
					for (let i = 0; i < list.length; i++) {
						const colorx = list[i];
						const cards = hs.filter(card => get.color(card, target) == colorx);
						if (cards.length) dialog.addArray([`<span class="text center">${get.translation(colorx)}</span>`, cards]);
					}
					const result =
						list.length > 1
							? await target
									.chooseControl(list)
									.set("ai", () => {
										const { player, controls } = get.event();
										const cards = player.getCards("h");
										return controls.sort((a, b) => {
											return get.value(cards.filter(card => get.color(card) === a)) - get.value(cards.filter(card => get.color(card) === b));
										})[0];
									})
									.set("dialog", dialog)
									.forResult()
							: { control: list[0] };
					const control = result?.control;
					if (control) {
						target.popup(control);
						game.log(target, "选择了", "#g" + get.translation(control));
						const cards = target.getCards("h").filter(card => get.color(card) === control);
						if (cards.length) {
							await target.discard(cards);
							await target.draw();
						}
					}
				},
			},
			stdjiaochong: {
				audio: "yichong",
				inherit: "stdwufei",
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					return event.player.hasSex("male") && game.hasPlayer(current => current.hasSex("female") && current.countCards("h"));
				},
				async content(event, trigger, player) {
					await player.useSkill("stdwufei", event.targets);
				},
				// 临时修改（by 棘手怀念摧毁）
				// derivation: "stdwufei",
			},
			//贾逵
			stdzhongzuo: {
				audio: "zhongzuo",
				trigger: { global: "phaseEnd" },
				filter(event, player) {
					return ["damage", "sourceDamage"].some(key => player.hasHistory(key));
				},
				forced: true,
				logTarget: "player",
				async content(event, trigger, player) {
					await game.asyncDraw([trigger.player, player].sortBySeat());
				},
			},
			stdwanlan: {
				audio: "wanlan",
				inherit: "wanlan",
				filter(event, player) {
					return event.player != player && event.player.hp <= 0 && player.countCards("h");
				},
				check(event, player) {
					if (get.attitude(player, event.player) < 4) return false;
					if (player.countCards("hs", card => player.canSaveCard(card, event.player)) >= 1 - event.player.hp) return false;
					if (event.player == player || event.player == get.zhu(player)) return true;
					return !player.hasUnknown();
				},
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					const { player: target } = trigger;
					if (player.countCards("h")) await player.give(player.getCards("h"), target);
					await target.recoverTo(1);
				},
			},
			//虞翻
			stdzongxuan: {
				audio: "zongxuan",
				trigger: {
					player: "loseAfter",
					global: "loseAsyncAfter",
				},
				filter(event, player) {
					if (event.type != "discard" || !game.hasPlayer(current => current.countDiscardableCards(player, "ej"))) return false;
					return event.getl?.(player)?.hs?.someInD("d");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
							return target.countDiscardableCards(player, "ej");
						})
						.set("ai", target => {
							const player = get.player();
							return get.effect(target, { name: "guohe_copy", position: "ej" }, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const {
						targets: [target],
					} = event;
					if (target.countDiscardableCards(player, "ej")) await player.discardPlayerCard(target, "ej", true);
				},
			},
			stdzhiyan: {
				audio: "zhiyan",
				getcards: () =>
					get
						.discarded()
						.filterInD("d")
						.filter(card => get.type(card) == "equip"),
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return get.info("stdzhiyan").getcards().length;
				},
				async cost(event, trigger, player) {
					const cards = get.info(event.skill).getcards();
					const { result } = await player.chooseButton(["直言：获得其中一张牌", cards]).set("ai", button => {
						return get.value(button.link);
					});
					event.result = {
						bool: result?.bool,
						cost_data: result?.links,
					};
				},
				async content(event, trigger, player) {
					await player.gain(event.cost_data, "gain2");
				},
			},
			//诸葛恪
			stdaocai: {
				audio: "aocai",
				trigger: { global: "phaseEnd" },
				filter(event, player) {
					return !player.countCards("h");
				},
				async cost(event, trigger, player) {
					const cards = get.cards(2, true);
					const { result } = await player.chooseButton(["傲才：获得其中一张牌", cards]).set("ai", button => {
						return get.value(button.link);
					});
					event.result = {
						bool: result?.bool,
						cost_data: result?.links,
					};
				},
				async content(event, trigger, player) {
					await player.gain(event.cost_data, "gain2");
				},
			},
			stdduwu: {
				audio: "duwu",
				inherit: "duwu",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") && game.hasPlayer(current => get.info("stdduwu").filterTarget(null, player, current));
				},
				filterCard: true,
				selectCard: -1,
				position: "h",
				filterTarget(card, player, target) {
					return player.inRange(target);
				},
				check: card => 1,
				async content(event, trigger, player) {
					await event.target.damage("nocard");
				},
				ai: {
					damage: true,
					order(item, player) {
						if (game.hasPlayer(current => player.inRange(current) && get.effect(current, "stdduwu", player, player) > 0) && !player.hasCard(card => player.hasValueTarget(card) > 0, "h")) return 10;
						return 2;
					},
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					threaten: 1.5,
					expose: 0.3,
				},
			},
			//孟达
			stdzhuan: {
				audio: "dclibang",
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return player.getHistory("damage").indexOf(event) == 0;
				},
				forced: true,
				async content(event, trigger, player) {
					await player.draw(3);
					const { source } = trigger;
					if (source?.isIn() && player.countGainableCards(source, "he")) await source.gainPlayerCard(player, "he", true);
				},
			},
			//曹真
			stdsidi: {
				audio: "sidi",
				trigger: { global: "respond" },
				frequent: true,
				filter: event => event.card?.name == "sha",
				async content(event, trigger, player) {
					await player.draw();
				},
			},
			//董允
			stdbingzheng: {
				audio: "bingzheng",
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return game.hasPlayer(target => target.countDiscardableCards(target, "he"));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
							return target.countDiscardableCards(target, "he");
						})
						.set("ai", target => {
							const player = get.player();
							if (!target.countCards("e") && target.countCards("h") - 1 == target.getHp()) {
								return get.effect(target, { name: "guohe_copy2" }, player, player);
							}
							return get.effect(target, { name: "guohe_copy2" }, player, player) + get.effect(player, { name: "losehp" }, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					if (target.countDiscardableCards(target, "he")) await target.chooseToDiscard("he", true);
					if (target.countCards("h") != target.getHp()) await player.loseHp();
				},
			},
			stdduliang: {
				trigger: { player: "damageEnd" },
				filter: event => event.num > 0,
				async content(event, trigger, player) {
					await player.draw();
					if (player.countCards("h") == player.getHp() && player.isDamaged()) await player.recover();
				},
			},
			//鲍三娘
			stdzhennan: {
				audio: "xinfu_zhennan",
				trigger: { global: "phaseZhunbeiBegin" },
				filter(event, player) {
					return event.player != player && player.countDiscardableCards(player, "h");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard(get.prompt2(event.skill, trigger.player))
						.set("ai", card => {
							const { goon } = get.event();
							return goon ? 6.5 - get.value(card) : 0;
						})
						.set("goon", get.attitude(player, trigger.player) > 0)
						.forResult();
				},
				logTarget: "player",
				async content(event, trigger, player) {
					const { player: target } = trigger;
					player.addTempSkill(event.name + "_effect");
					player.markAuto(event.name + "_effect", [target]);
					target.addTempSkill(event.name + "_ai");
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						trigger: { global: "useCardAfter" },
						filter(event, player) {
							return player.getStorage("stdzhennan_effect").includes(event.player);
						},
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							player.unmarkAuto(event.name, [trigger.player]);
							if (get.color(trigger.card) == "red") {
								const cards = trigger.cards?.filterInD("od");
								if (cards.length) {
									player.logSkill(event.name, trigger.player);
									await trigger.player.gain(cards, "gain2");
								}
							}
						},
					},
					ai: {
						charlotte: true,
						mod: {
							aiOrder(player, card, num) {
								if (get.itemtype(card) == "card" && get.color(card) == "red" && !["equip", "delay"].includes(get.type(card))) return num + 10;
							},
						},
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							player.removeSkill(event.name);
						},
					},
				},
			},
			stdshuyong: {
				audio: "meiyong",
				trigger: { global: "useCard" },
				frequent: true,
				filter(event, player) {
					const target = event.player,
						last = target.getLastUsed(1);
					if (target == player || _status.currentPhase != target) return false;
					return last?.card?.name == event.card.name;
				},
				async content(event, trigger, player) {
					await player.draw();
				},
			},
			//刘巴
			stdduanbi: {
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.countCards("h");
				},
				check(event, player) {
					if (player.countCards("h") <= 2) return true;
					const val = player.getCards("h").reduce((sum, card) => sum + get.value(card), 0);
					return val <= 16;
				},
				async content(event, trigger, player) {
					await player.modedDiscard(player.getCards("h"));
					if (game.countPlayer() < 2) return;
					const { result } = await player.chooseTarget(`锻币：令两名角色各摸两张牌`, 2, true).set("ai", target => {
						const player = get.player();
						return get.effect(target, { name: "draw" }, player, player) * 2;
					});
					if (result?.targets?.length) {
						const targets = result.targets.sortBySeat();
						player.line(targets);
						await game.asyncDraw(targets, 2);
					}
				},
			},
			//孔融
			stdlirang: {
				getCards(event) {
					return game
						.getGlobalHistory("everything", evt => {
							if (!evt.cards?.length) return false;
							return (evt.name === "cardsDiscard" || evt.position == ui.discardPile) && evt.getParent("phaseDiscard") == event;
						})
						.reduce((cards, evt) => cards.addArray(evt.cards.filterInD("d")), [])
						.filter(card => get.color(card) == "red");
				},
				trigger: { global: "phaseDiscardEnd" },
				filter(event, player) {
					return event.player != player && player.countCards("he");
				},
				logTarget: "player",
				async cost(event, trigger, player) {
					const { player: target } = trigger;
					const cards = get.info(event.skill).getCards(trigger);
					let str = `交给${get.translation(target)}一张牌`;
					if (cards.length) str += `然后获得${get.translation(cards)}`;
					event.result = await player
						.chooseCard(get.prompt(event.skill, target), "he", str)
						.set("ai", card => {
							const { player, targetx, cardsx } = get.event();
							const att = get.attitude(player, targetx);
							if (att > 0 && cardsx.length) return 8 - get.value(card);
							if (att <= 0 && cardsx.length >= 2) return 6 - get.value(card);
							return 0;
						})
						.set("targetx", target)
						.set("cardsx", cards)
						.forResult();
				},
				async content(event, trigger, player) {
					await player.give(event.cards, trigger.player);
					const cards = get.info(event.name).getCards(trigger);
					if (cards.length) await player.gain(cards, "gain2");
				},
			},
			//邹氏
			stdhuoshui: {
				audio: "rehuoshui",
				trigger: { global: "damageBegin3" },
				filter(event, player) {
					return event.player != player && event.player.countCards("j");
				},
				forced: true,
				async content(event, trigger, player) {
					trigger.num++;
				},
			},
			stdqingcheng: {
				audio: "reqingcheng",
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					if (player.hasJudge("lebu")) return false;
					return player.countCards("hes", card => get.info("stdqingcheng").filterCard(card, player)) > 1;
				},
				filterCard(card, player) {
					return get.type2(card, player) != "trick" && get.color(card, player) == "red";
				},
				position: "he",
				selectCard: 2,
				filterTarget(card, player, target) {
					return target != player && target.canAddJudge("lebu");
				},
				filterOk() {
					const {
							cards,
							targets: [target],
						} = ui.selected,
						player = get.player();
					return player.canAddJudge({ name: "lebu", cards: [cards[0]] }) && player.canUse({ name: "lebu", cards: [cards[1]] }, target);
				},
				check(card) {
					return 8 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				async content(event, trigger, player) {
					const { cards } = event;
					const targets = [player, event.target].sortBySeat();
					for (let i = 0; i < cards.length; i++) {
						const card = get.autoViewAs({ name: "lebu", cards: [cards[i]] }),
							target = targets[i];
						if ((player == target && player.canAddJudge(card)) || (player != target && player.canUse(card, target))) await player.useCard(card, [cards[i]], targets[i]);
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return get.effect(target, { name: "lebu" }, player, target);
						},
					},
				},
			},
			//孙鲁育
			stdmumu: {
				audio: "mumu",
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return player.countDiscardableCards(player, "h");
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard(get.prompt2(event.skill), "h")
						.set("ai", card => {
							if (get.event("goon")) return 6 - get.value(card);
							return 0;
						})
						.set("goon", player.canMoveCard(true, true))
						.forResult();
				},
				async content(event, trigger, player) {
					if (player.canMoveCard(null, true)) await player.moveCard().set("nojudge", true);
				},
			},
			stdmeibu: {
				audio: "meibu",
				trigger: { global: "useCard" },
				filter(event, player) {
					return event.player.countDiscardableCards(event.player, "h") && event.player.getEquips(1).length && event.card?.name == "sha";
				},
				logTarget: "player",
				check: (event, player) => get.attitude(player, event.player) < 0,
				async content(event, trigger, player) {
					const { player: target } = trigger;
					if (target.countDiscardableCards(target, "h")) await target.chooseToDiscard("h", true);
				},
			},
			//周鲂
			stdqijian: {
				trigger: { player: "phaseZhunbeiBegin" },
				filter(event, player) {
					return game.hasPlayer(current => game.hasPlayer(currentx => current.countCards("h") + currentx.countCards("h") == 7));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2(event.skill), 2)
						.set("filterTarget", (card, player, target) => {
							if (!ui.selected.targets.length) return true;
							const targetx = ui.selected.targets[0];
							return targetx.countCards("h") + target.countCards("h") == 7;
						})
						.set("complexTarget", true)
						.set("ai", target => {
							const player = get.player();
							if (!ui.selected.targets.length) return get.attitude(player, target);
							return 1;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const targets = event.targets.sortBySeat();
					const list = ["摸牌", "弃牌"];
					for (const target of targets) {
						if (!target.isIn()) continue;
						const targetx = targets.filter(current => current != target)[0];
						let result;
						const goon = targetx.countDiscardableCards(target, "he");
						if (goon)
							result = await target
								.chooseControl(list)
								.set("prompt", `七笺：弃置${get.translation(targetx)}一张牌或令其摸一张牌`)
								.set("ai", () => {
									const { player, targetx } = get.event();
									const att = get.attitude(player, targetx);
									return att > 0 ? "摸牌" : "弃牌";
								})
								.set("targetx", targetx)
								.forResult();
						else result = { control: "摸牌" };
						const control = result?.control;
						if (!targetx.isIn() || !control) continue;
						target.popup(control);
						game.log(target, "选择", "#g" + control);
						target.line(targetx);
						if (control == "摸牌") await targetx.draw();
						else if (control == "弃牌" && targetx.countDiscardableCards(target, "he")) await target.discardPlayerCard(targetx, "he", true);
					}
				},
			},
			stdyoudi: {
				audio: "xinfu_youdi",
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return player.countCards("hes", card => player.hasUseTarget(get.autoViewAs({ name: "shunshou" }, [card]), false, false) && get.color(card, player) == "red");
				},
				direct: true,
				clearTime: true,
				async content(event, trigger, player) {
					const next = player.chooseToUse();
					next.set("openskilldialog", get.prompt2(`${event.name}`));
					next.set("norestore", true);
					next.set("_backupevent", `${event.name}_backup`);
					next.set("custom", {
						add: {},
						replace: { window() {} },
					});
					next.backup(`${event.name}_backup`);
					next.set("logSkill", event.name);
					await next;
				},
				subSkill: {
					backup: {
						filterCard(card, player) {
							return get.itemtype(card) == "card" && get.color(card, player) == "red";
						},
						position: "hes",
						viewAs: { name: "shunshou" },
						check(card) {
							return 7 - get.value(card);
						},
						log: false,
					},
				},
			},
			//四象封印·少阳
			//张苞
			stdjuezhu: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter(event, player, name) {
					if (name == "damageSource") return true;
					return event.source?.isIn() && player.canUse({ name: "juedou", isCard: true }, event.source);
				},
				forced: true,
				async content(event, trigger, player) {
					if (event.triggername == "damageSource") player.addTempSkill("stdjuezhu_paoxiao");
					else {
						let card = { name: "juedou", isCard: true };
						if (player.canUse(card, trigger.source)) await player.useCard(card, trigger.source);
					}
				},
				subSkill: {
					paoxiao: {
						charlotte: true,
						mod: {
							cardUsable() {
								return Infinity;
							},
						},
					},
				},
			},
			stdchengji: {
				audio: 2,
				enable: ["chooseToRespond", "chooseToUse"],
				filterCard(card, player) {
					if (!ui.selected.cards.length) return true;
					return ui.selected.cards.every(cardx => get.color(cardx, player) != get.color(card, player));
				},
				complexCard: true,
				position: "hes",
				selectCard: 2,
				viewAs: { name: "sha" },
				viewAsFilter(player) {
					if (player.countCards("hes") < 2) return false;
					let color = get.color(player.getCards("hes")[0], player);
					return _status.connectMode || player.getCards("hes").some(card => get.color(card, player) != color);
				},
				prompt: "将两张颜色不同的牌当杀使用或打出",
				check(card) {
					const val = get.value(card);
					if (_status.event.name == "chooseToRespond") return 1 / Math.max(0.1, val);
					return 5 - val;
				},
				ai: {
					skillTagFilter(player) {
						if (player.countCards("hes") < 2) return false;
						let color = get.color(player.getCards("hes")[0], player);
						return _status.connectMode || player.getCards("hes").some(card => get.color(card, player) != color);
					},
					respondSha: true,
				},
			},
			//刘谌
			stdzhanjue: {
				audio: "zhanjue",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				selectCard: -1,
				position: "h",
				filter(event, player) {
					let hs = player.getCards("h");
					if (!hs.length) return false;
					for (let i = 0; i < hs.length; i++) {
						let mod2 = game.checkMod(hs[i], player, "unchanged", "cardEnabled2", player);
						if (mod2 === false) return false;
					}
					return event.filterCard(get.autoViewAs({ name: "juedou" }, hs));
				},
				viewAs: { name: "juedou" },
				ai: {
					order(item, player) {
						if (player.countCards("h") > 1) return 0.8;
						return 8;
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1,
					},
					result: {
						player(player, target) {
							let td = get.damageEffect(target, player, target);
							if (!td) return 0;
							let hs = player.getCards("h"),
								val = hs.reduce((acc, i) => acc - get.value(i, player), 0) / 6 + 1;
							if (td > 0) return val;
							if (
								player.hasSkillTag("directHit_ai", true, {
									target: target,
									card: get.autoViewAs({ name: "juedou" }, hs),
								})
							)
								return val;
							let pd = get.damageEffect(player, target, player),
								att = get.attitude(player, target);
							if (att > 0 && get.damageEffect(target, player, player) > pd) return val;
							let ts = target.mayHaveSha(player, "respond", null, "count");
							if (ts < 1 && ts * 8 < Math.pow(player.hp, 2)) return val;
							let damage = pd / get.attitude(player, player),
								ps = player.mayHaveSha(player, "respond", hs, "count");
							if (att > 0) {
								if (ts < 1) return val;
								return val + damage + 1;
							}
							if (pd >= 0) return val + damage + 1;
							if (ts - ps + Math.exp(0.8 - player.hp) < 1) return val - ts;
							return val + damage + 1 - ts;
						},
						target(player, target) {
							let td = get.damageEffect(target, player, target) / get.attitude(target, target);
							if (!td) return 0;
							let hs = player.getCards("h");
							if (
								td > 0 ||
								player.hasSkillTag("directHit_ai", true, {
									target: target,
									card: get.autoViewAs({ name: "juedou" }, hs),
								})
							)
								return td + 1;
							let pd = get.damageEffect(player, target, player),
								att = get.attitude(player, target);
							if (att > 0) return td + 1;
							let ts = target.mayHaveSha(player, "respond", null, "count"),
								ps = player.mayHaveSha(player, "respond", hs, "count");
							if (ts < 1) return td + 1;
							if (pd >= 0) return 0;
							if (ts - ps < 1) return td + 1 - ts;
							return -ts;
						},
					},
					nokeep: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag === "nokeep") return (!arg || (arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && player.countSkill("zhanjue_draw") < 2 && player.hasCard(card => get.name(card) != "tao", "h");
					},
				},
				group: "stdzhanjue_draw",
				subSkill: {
					draw: {
						trigger: {
							player: "useCardAfter",
						},
						forced: true,
						charlotte: true,
						popup: false,
						filter(event, player) {
							return event.skill == "stdzhanjue";
						},
						content() {
							player.draw();
						},
					},
				},
			},
			stdqinwang: {
				audio: "qinwang1",
				zhuSkill: true,
				group: "stdqinwang_effect",
				filter(event, player) {
					if (!player.hasZhuSkill("stdqinwang") || event.stdqinwang) return false;
					return game.hasPlayer(current => current != player && current.group == "shu");
				},
				enable: "chooseToRespond",
				viewAs: { name: "sha" },
				filterCard() {
					return false;
				},
				selectCard: -1,
				ai: {
					order() {
						return get.order({ name: "sha" }) + 0.3;
					},
					respondSha: true,
					skillTagFilter(player) {
						if (!player.hasZhuSkill("stdqinwang") || !game.hasPlayer(current => current != player && current.group == "shu")) return false;
					},
				},
				subSkill: {
					effect: {
						audio: "stdqinwang",
						trigger: {
							player: "respondBegin",
						},
						filter(event, player) {
							return event.skill == "stdqinwang";
						},
						forced: true,
						async content(event, trigger, player) {
							delete trigger.skill;
							trigger.getParent().set("stdqinwang", true);
							while (true) {
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									trigger.cancel();
									trigger.getParent().goto(0);
									return;
								} else if (event.current.group == "shu") {
									const discardEvent = event.current.chooseToDiscard("是否弃置一张牌，视为" + get.translation(player) + "打出一张杀？");
									discardEvent.set("filterCard", card => get.type(card) == "basic");
									discardEvent.set("ai", (card) => {
										const event = _status.event;
										if (get.attitude(event.player, event.source) >= 2) return 6 -get.value(card);
										return 0;
									});
									discardEvent.set("source", player);
									discardEvent.set("skillwarn", "弃置一张牌，视为" + get.translation(player) + "打出一张杀");
									const { bool } = await discardEvent.forResult();
									if (bool) {
										if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
											event.current.ai.shown += 0.3;
											if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
										}
										return;
									} else event.current = event.current.next;
								} else event.current = event.current.next;
							}
						},
					},
				},
			},
			//关索
			stdzhengnan: {
				audio: "zhengnan",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter(event, player) {
					return player.countCards("hs", { color: "red" });
				},
				direct: true,
				async content(event, trigger, player) {
					const next = player.chooseToUse();
					next.set("openskilldialog", get.prompt2("stdzhengnan"));
					next.set("norestore", true);
					next.set("_backupevent", "stdzhengnan_backup");
					next.set("custom", {
						add: {},
						replace: { window: function () {} },
					});
					next.backup("stdzhengnan_backup");
					await next;
					if (
						game.getGlobalHistory("everything", evt => {
							if (evt.name != "die" || evt?.source != player) return false;
							return evt.reason?.getParent(event.name) == event;
						}).length > 0
					) {
						await player.draw(2);
					}
				},
				subSkill: {
					backup: {
						audio: "stdzhengnan",
						filterCard(card) {
							return get.itemtype(card) == "card" && get.color(card) == "red";
						},
						position: "hs",
						viewAs: {
							name: "sha",
						},
						prompt: "将一张红色手牌当杀使用",
						check(card) {
							return 7 - get.value(card);
						},
					},
				},
			},
			//夏侯霸
			stdbaobian: {
				audio: "rebaobian",
				trigger: {
					player: "phaseUseBegin",
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdbaobian"), (card, player, target) => {
							return target.countCards("h");
						})
						.set("ai", target => {
							const player = get.player();
							if (player.hp < 2) return 0;
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					await player.loseHp();
					const target = event.targets[0],
						card = { name: "sha", isCard: true };
					const { cards } = await target.chooseToDiscard("h", true).forResult();
					if (get.type(cards[0]) == "basic" && player.canUse(card, target, false)) await player.useCard(card, target, false);
				},
			},
			//曹睿
			stdhuituo: {
				audio: "huituo",
				trigger: {
					player: "damageEnd",
				},
				async content(event, trigger, player) {
					const cards = game.cardsGotoOrdering(get.cards(2)).cards;
					await player.showCards(cards, get.translation(player) + "发动了【恢拓】");
					const next = player.chooseToMove("恢拓：是否交换任意张牌？");
					next.set("list", [
						["展示牌", cards, "sbhuanshi_tag"],
						["你的手牌", player.getCards("h")],
					]);
					next.set("filterMove", (from, to) => {
						return typeof to !== "number";
					});
					next.set("processAI", list => {
						let cards = [...list[0][1], ...list[1][1]],
							player = get.player();
						cards.sort((a, b) => player.getUseValue(a, null, true) - player.getUseValue(b, null, true));
						return [cards.slice(0, 2), cards.slice(2)];
					});
					const { bool, moved } = await next.forResult();
					if (bool) {
						const puts = player.getCards("h", i => moved[0].includes(i)),
							gains = cards.filter(i => moved[1].includes(i));
						if (puts.length && gains.length) {
							player.$throw(puts, 1000);
							await player.lose(puts, ui.special);
							await player.gain(gains, "gain2");
							const cardx = moved[0].slice();
							if (cardx.length) {
								await game.cardsGotoOrdering(cardx);
								for (let i = cardx.length - 1; i >= 0; i--) {
									ui.cardPile.insertBefore(cardx[i], ui.cardPile.firstChild);
								}
								game.updateRoundNumber();
							}
						}
					}
				},
			},
			stdmingjian: {
				audio: "mingjian",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				filterTarget: lib.filter.notMe,
				check(card) {
					return 7 - get.value(card);
				},
				lose: false,
				discard: false,
				delay: false,
				async content(event, trigger, player) {
					const cards = event.cards,
						target = event.target;
					await player.showCards(cards, get.translation(player) + "发动了【明鉴】");
					await player.give(cards, target, true);
					await target
						.chooseToUse(function (card, player, event) {
							if (!get.event("cardx")?.includes(card)) return false;
							return lib.filter.filterCard.apply(this, arguments);
						}, "明鉴：是否使用" + get.translation(cards) + "？")
						.set("cardx", cards);
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							if (!ui.selected.cards.length) return 0;
							return target.getUseValue(ui.selected.cards[0]) + 1;
						},
					},
				},
			},
			//刘晔
			stdpolu: {
				audio: "polu",
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter(event, player) {
					return event.player.countDiscardableCards(player, "e");
				},
				async cost(event, trigger, player) {
					const { bool, links: cards } = await player
						.choosePlayerCard("e", trigger.player, get.prompt2("stdpolu", trigger.player))
						.set("ai", button => {
							const target = get.event().getTrigger().player,
								player = get.player();
							if (get.attitude(player, target) <= 0) return get.value(button.link) + 2;
							if (player == target) return 5 - get.value(button.link);
							return 0;
						})
						.forResult();
					event.result = {
						bool: bool,
						cards: cards,
						targets: [trigger.player],
					};
				},
				async content(event, trigger, player) {
					const { targets, cards } = event;
					const next = targets[0].discard(cards);
					if (player != targets[0]) next.notBySelf = true;
					next.discarder = player;
					await next;
					if (player == targets[0]) await player.draw();
				},
			},
			stdchoulve: {
				audio: "choulve",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				filterTarget: lib.filter.notMe,
				check(card) {
					return 7 - get.value(card);
				},
				lose: false,
				discard: false,
				delay: false,
				async content(event, trigger, player) {
					const cards = event.cards,
						target = event.target;
					await player.give(cards, target);
					const { bool, cards: cardx } = await target
						.chooseCard(`是否展示并交给${get.translation(player)}一张装备牌？`, "he")
						.set("filterCard", card => get.type(card) == "equip")
						.set("ai", card => {
							if (get.event("att") <= 0) return 0;
							return 5 - get.value(card);
						})
						.set("att", get.attitude(target, player))
						.forResult();
					if (bool) {
						await target.showCards(cardx);
						await target.give(cardx, player);
					}
				},
				ai: {
					order: 7,
					result: {
						target: 1,
					},
				},
			},
			//郭皇后
			stdjiaozhao: {
				audio: "rejiaozhao",
				enable: "phaseUse",
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards("h") > 1;
				},
				async content(event, trigger, player) {
					const target = event.target;
					const { bool, cards } = await target.chooseCard("展示两张手牌", "h", 2, true).forResult();
					if (!bool) return;
					await target.showCards(cards);
					if (event.name == "danxin_jiaozhao") {
						const result = await player
							.chooseButton(["是否选择其中一张牌获得？", cards])
							.set("ai", button => {
								if (button.link.name == "du") return 0;
								return get.value(button.link) + 1;
							})
							.forResult();
						if (result.bool) {
							await target.give(result.links, player);
						}
					}
					else {
						const cardx = player.getCards("h").sort((a, b) => player.getUseValue(a) - player.getUseValue(b))[0];
						const result = await player
							.chooseButton(2, ["你的手牌", player.getCards("h"), `${get.translation(target)}展示的手牌`, cards])
							.set("filterButton", button => {
								const { player, cards } = get.event();
								if (!ui.selected.buttons.length) return true;
								let card = ui.selected.buttons[0].link;
								if (cards.includes(card)) return !cards.includes(button.link);
								return cards.includes(button.link);
							})
							.set("cards", cards)
							.set("cardx", cardx)
							.set("ai", button => {
								const { player, cards, cardx } = get.event();
								if (ui.selected.buttons.length) {
									return button.link == cardx;
								}
								if (!cards.includes(button.link)) return 0;
								if (player.getUseValue(button.link) > player.getUseValue(cardx)) return 0;
								return player.getUseValue(button.link) + 1;
							})
							.forResult();
						if (result.bool) {
							const cards1 = result.links.filter(card => !cards.includes(card)),
								cards2 = result.links.filter(card => cards.includes(card));
							await player.swapHandcards(target, cards1, cards2);
						}
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
				},
			},
			stddanxin: {
				audio: "redanxin",
				trigger: {
					player: "damageEnd",
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stddanxin"))
						.set("filterTarget", (card, player, target) => {
							return target != player && target.countCards("h") > 1;
						})
						.set("ai", target => {
							return get.effect(target, { name: "shunshou_copy2"}, get.player(), get.player());
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.logSkill("stdjiaozhao", target);
					const next = game.createEvent("danxin_jiaozhao");
					next.player = player;
					next.target = target;
					next.setContent(lib.skill.stdjiaozhao.content);
					await next;
				},
			},
			//吕范
			stddianfeng: {
				audio: "spdiancai",
				trigger: {
					player: ["loseAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				getIndex(event, player) {
					return game.filterPlayer(current => {
						let evt = event.getl(current);
						return evt?.es?.length > 0 && !current.countCards("e");
					}).sortBySeat();
				},
				logTarget(_1, _2, _3, target) {
					return target;
				},
				frequent: true,
				async content(event, trigger, player) {
					await player.draw();
				},
			},
			//丁奉
			stdduanbing: {
				audio: "duanbing",
				forced: true,
				trigger: { source: "damageBegin1" },
				filter(event, player) {
					if (player.hasHistory("sourceDamage", evt => evt?.card?.name == "sha")) return false;
					return event?.card?.name == "sha";
				},
				logTarget: "player",
				async content(event, trigger, player) {
					trigger.num++;
				},
				group: "stdduanbing_forced",
				subSkill: {
					forced: {
						priority: Infinity,
						mod: {
							attackRange: () => 1,
						},
					},
				},
			},
			stdfenxun: {
				audio: "fenxun",
				enable: "phaseUse",
				usable: 1,
				filterCard(card, player) {
					return get.subtype(card) == "equip2";
				},
				filterTarget: lib.filter.notMe,
				async content(event, trigger, player) {
					player.markAuto("stdfenxun_effect", [event.target]);
					player.addTempSkill("stdfenxun_effect");
				},
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					order: 4,
					result: {
						player(player, target) {
							if (player.inRange(target)) return 0;
							var hs = player.getCards("h", "shunshou");
							if (hs.length && player.canUse(hs[0], target, false)) {
								return 1;
							}
							var geteff = function (current) {
								return player.canUse("sha", current, false, true) && get.effect(current, { name: "sha" }, player, player) > 0;
							};
							if (player.hasSha() && geteff(target)) {
								var num = game.countPlayer(function (current) {
									return current != player && player.inRange(target) && geteff(current);
								});
								if (num == 0) {
									if (
										game.hasPlayer(function (current) {
											return player.canUse("sha", current) && geteff(current) && current != target;
										})
									) {
										return 1;
									}
								} else if (num == 1) {
									return 1;
								}
							}
							return 0;
						},
					},
				},
				subSkill: {
					effect: {
						mark: "character",
						onremove: true,
						intro: {
							content: "$视为在你攻击范围内",
						},
						mod: {
							inRange(from, to) {
								if (from.getStorage("stdfenxun_effect").includes(to)) return true;
							},
						},
					},
				},
			},
			//孙鲁班
			stdzenhui: {
				audio: "rechanhui",
				trigger: { player: "useCard2" },
				filter(event, player) {
					if (!event.targets?.length) return false;
					const card = event.card;
					if (card.name != "sha" && get.type2(card) != "trick") return false;
					return game.hasPlayer(current => {
						return current != player && !event.targets.includes(current);
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdzenhui"), (card, player, target) => {
							if (player == target) return false;
							const evt = _status.event.getTrigger();
							return !evt.targets.includes(target);
						})
						.set("ai", target => {
							const trigger = _status.event.getTrigger(),
								player = _status.event.player;
							let eff = 0;
							for(let current of trigger.targets) {
								eff += get.effect(current, trigger.card, player, player);
								eff += get.effect(current, trigger.card, target, player);
							}
							return eff;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					trigger.player = target;
					game.log(target, "成为了", trigger.card, "的使用者");
				},
			},
			stdchuyi: {
				audio: "xinzenhui",
				trigger: {
					global: "damageBegin1",
				},
				round: 1,
				filter(event, player) {
					if (!event.source || !event.source.isIn() || event.source == player) return false;
					return player.inRange(event.player);
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
			},
			//留赞
			stdfenyin: {
				audio: "fenyin",
				trigger: { player: "phaseDrawBegin2" },
				filter(event, player) {
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.num += 2;
					player.addTempSkill("stdfenyin_discard");
				},
				subSkill: {
					discard: {
						mod: {
							aiOrder: function (player, card, num) {
								if (typeof card == "object" && player == _status.currentPhase) {
									var evt = player.getLastUsed();
									if (evt && evt.card && get.color(evt.card) != "none" && get.color(card) != "none" && get.color(evt.card) != get.color(card)) {
										return num + 10;
									}
								}
							},
						},
						audio: "stdfenyin",
						trigger: { player: "useCard" },
						charlotte: true,
						forced: true,
						filter(event, player) {
							if (!player.countCards("he")) return false;
							if (_status.currentPhase != player) return false;
							var color2 = get.color(event.card);
							var evt = player.getLastUsed(1);
							if (!evt) return false;
							var color1 = get.color(evt.card);
							return color1 && color2 && color1 != "none" && color2 != "none" && color1 == color2;
						},
						async content(event, trigger, player) {
							await player.chooseToDiscard("he", true);
						},
					},
				},
			},
			//孙翊
			stdzaoli: {
				audio: "zaoli",
				locked: true,
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter(event, player) {
					return player.countCards("he");
				},
				async cost(event, trigger, player) {
					let list = [];
					if (player.countCards("h")) list.push("手牌");
					if (player.countCards("e")) list.push("装备区");
					let choice = list[0];
					if (list.length > 1) {
						const { control } = await player
							.chooseControl(list)
							.set("prompt", "躁厉：选择弃置的区域")
							.set("ai", () => ["手牌", "装备区"].randomGet())
							.forResult();
						if (control) choice = control;
					}
					event.result = {
						bool: true,
						cost_data: choice == "手牌" ? "h" : "e",
					};
				},
				async content(event, trigger, player) {
					const pos = event.cost_data;
					let num = player.countCards(pos);
					await player.chooseToDiscard(pos, num, true);
					num += player.getDamagedHp();
					await player.draw(num);
					await player.loseHp();
				},
			},
			//陶谦
			stdyirang: {
				audio: "yirang",
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return player.countCards("h");
				},
				async cost(event, trigger, player) {
					event.result = await player
					.chooseTarget(get.prompt2("stdyirang"), (card, player, target) => {
						if (target == player) return false;
						return !game.hasPlayer(current => {
							return current != player && current.countCards("h") <target.countCards("h");
						});
					})
					.set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					})
					.forResult();
				},
				async content(event, trigger, player) {
					const cards = player.getCards("h"),
						target = event.targets[0];
					let types = [];
					for (let i = 0; i < cards.length; i++) {
						types.add(get.type(cards[i], "trick"));
					}
					await player.give(cards, target);
					await player.draw(types.length);
				},
			},
			//纪灵
			stdshuangdao: {
				audio: "shuangren",
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return (
						player.countCards("h") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && player.canCompare(current);
						})
					);
				},
				async cost(event, trigger, player) {
					let goon;
					if (player.needsToDiscard() > 1) {
						goon = player.hasCard(function (card) {
							return card.number > 10 && get.value(card) <= 5;
						});
					} else {
						goon = player.hasCard(function (card) {
							return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
						});
					}
					event.result = await player
						.chooseTarget(get.prompt2("stdshuangdao"), function (card, player, target) {
							return player.canCompare(target);
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							if (_status.event.goon && get.attitude(player, target) < 0) {
								return get.effect(target, { name: "sha" }, player, player);
							}
							return 0;
						})
						.set("goon", goon)
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const { result } = await player.chooseToCompare(target);
					if (result.bool) {
						if (
							game.hasPlayer(function (current) {
								if (!player.canUse("sha", current, false)) return false;
								return get.distance(target, current) <= 1;
							})
						) {
							const result2 = await player
								.chooseTarget("是否对至多两名与其距离为1的角色各使用一张杀？", [1, 2], function (card, player, target) {
									if (!player.canUse("sha", target, false)) return false;
									return get.distance(get.event("identity"), target) <= 1;
								})
								.set("ai", function (target) {
									let player = _status.event.player;
									return get.effect(target, { name: "sha" }, player, player);
								})
								.set("identity", target)
								.forResult();
							if (result2.bool) {
								for (let targetx of result2.targets) {
									await player.useCard({ name: "sha", isCard: true }, targetx, false);
								}
							}
						}
						else return;
					} else {
						player.addTempSkill("rexianzhen3");
					}
				},
			},
			//李儒
			stdjuece: {
				audio: "rejuece",
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return game.hasPlayer(current => {
						let num = 0;
						current.getHistory("lose", evt => {
							if (evt.cards2?.length > 0) num += evt.cards2.length;
						});
						return num > 1;
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("stdjuece"), "对一名本回合失去过至少两张牌的角色造成1点伤害", function (card, player, target) {
							return _status.event.targets.includes(target);
						})
						.set(
							"targets",
							game.filterPlayer(current => {
								let num = 0;
								current.getHistory("lose", evt => {
									if (evt.cards2?.length > 0) num += evt.cards2.length;
								});
								return num > 1;
							})
						)
						.set("ai", target => {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await target.damage();
				},
			},
			stdmieji: {
				audio: "remieji",
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h", { type: ["trick", "delay"], color: "black" });
				},
				filterCard(card) {
					return get.color(card) == "black" && get.type(card, "trick") == "trick";
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				discard: false,
				delay: false,
				check(card) {
					return 8 - get.value(card);
				},
				lose: false,
				async content(event, trigger, player) {
					await player.give(event.cards, event.target);
					await player.discardPlayerCard(event.target, "he", [1, 2]);
				},
				ai: {
					order: 9,
					result: {
						target: -1,
					},
				},
			},
			//王允
			stdyunji: {
				audio: "jingong",
				enable: "chooseToUse",
				filterCard(card, player) {
					return get.type(card) == "equip";
				},
				position: "hes",
				viewAs: { name: "jiedao" },
				viewAsFilter(player) {
					return player.countCards("hes", { type: "equip" });
				},
				prompt: "将一张装备牌当借刀杀人使用",
				check(card) {
					const val = get.value(card);
					return 5 - val;
				},
			},
			stdzongji: {
				audio: "wylianji",
				trigger: {
					global: "damageEnd",
				},
				filter(event, player) {
					if (!event.card || !["sha", "juedou"].includes(event.card.name)) return false;
					if (!event.player.isIn() || !event.source || !event.source.isIn()) return false;
					return event.player.countCards("he") || event.source.countCards("he");
				},
				check(event, player) {
					let eff1 = get.effect(event.player, { name: "guohe_copy2" }, player, player),
						eff2 = get.effect(event.source, { name: "guohe_copy2" }, player, player);
					return eff1 + eff2 > 0;
				},
				logTarget(event) {
					return [event.player, event.source];
				},
				async content(event, trigger, player) {
					if (trigger.player.countCards("he")) await player.discardPlayerCard(trigger.player, "he", true);
					if (trigger.source.countCards("he")) await player.discardPlayerCard(trigger.source, "he", true);
				},
			},
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
					const cards = event.cards,
						target = event.targets[0];
					await player.showCards(cards, get.translation(player) + "发动了【景略】");
					const next = player.give(cards, target);
					next.gaintag.add("stdjinglve");
					await next;
					trigger.player.addTempSkill("stdjinglve_discard");
					player
						.when({ global: "phaseDiscardEnd" })
						.filter(evt => evt == trigger)
						.then(() => {
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
									if (evt.type != "discard" || evt.position != ui.discardPile || evt.getParent("phaseDiscard") != trigger) {
										return;
									}
									const moves = evt.cards.filterInD("d");
									cards.addArray(moves);
								}
							});
							if (cards.length) {
								player.chooseButton(["景略：是否获得本阶段弃置的一张牌？", cards]);
							} else {
								event._result = { bool: false };
							}
						})
						.then(() => {
							if (result.bool) {
								player.gain(result.links, "gain2");
							}
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
					return !player.getStorage("stdjinjian_used").includes(name.slice(11));
				},
				prompt2(event, player, name) {
					return `防止即将${name == "damageBegin2" ? "造成" : "受到"}的伤害`;
				},
				check: function (event, player) {
					return get.damageEffect(event.player, event.source, player) < 0;
				},
				async content(event, trigger, player) {
					trigger.cancel();
					player.addTempSkill("stdjinjian_used");
					player.markAuto("stdjinjian_used", event.triggername.slice(11));
					player.addTempSkill(`stdjinjian_effect${event.triggername.slice(11)}`);
					player.addMark(`stdjinjian_effect${event.triggername.slice(11)}`, 1, false);
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
					effect2: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						onremove: true,
						async content(event, trigger, player) {
							const num = player.countMark(event.name);
							trigger.num += num;
							player.removeMark(event.name, num, false);
						},
						marktext: "进",
						intro: {
							content: "下次造成的伤害+$",
						},
					},
					effect4: {
						trigger: { player: "damageBegin3" },
						forced: true,
						charlotte: true,
						onremove: true,
						async content(event, trigger, player) {
							const num = player.countMark(event.name);
							trigger.num += num;
							player.removeMark(event.name, num, false);
						},
						marktext: "谏",
						intro: {
							content: "下次受到的伤害+$",
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
				usable: 2,
				check(card) {
					if (card.name == "du") return 114514;
					return 5 - get.value(card);
				},
				async content(event, trigger, player) {
					const target = event.target;
					await player.showCards(event.cards);
					await player.give(event.cards, target, "visible");
					if (target.countCards("h")) await target
						.chooseToGive(
							player,
							(card, player) => {
								return get.type2(card) != get.type2(get.event("cards")[0]);
							}
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
			stdbazhan_info: "出牌阶段限两次，你可以将一张手牌展示并交给一名男性角色，然后其可以展示并交给你一张与此牌类别不同的手牌。",
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
			std_zhangbao: "少阳张苞",
			std_zhangbao_prefix: "少阳",
			std_liuchen: "少阳刘谌",
			std_liuchen_prefix: "少阳",
			std_guansuo: "少阳关索",
			std_guansuo_prefix: "少阳",
			std_xiahouba: "少阳夏侯霸",
			std_xiahouba_prefix: "少阳",
			std_caorui: "少阳曹叡",
			std_caorui_prefix: "少阳",
			std_liuye: "少阳刘晔",
			std_liuye_prefix: "少阳",
			std_guohuanghou: "少阳郭皇后",
			std_guohuanghou_prefix: "少阳",
			std_lvfan: "少阳吕范",
			std_lvfan_prefix: "少阳",
			std_dingfeng: "少阳丁奉",
			std_dingfeng_prefix: "少阳",
			std_sunluban: "少阳孙鲁班",
			std_sunluban_prefix: "少阳",
			std_liuzan: "少阳留赞",
			std_liuzan_prefix: "少阳",
			std_sunyi: "少阳孙翊",
			std_sunyi_prefix: "少阳",
			std_taoqian: "少阳陶谦",
			std_taoqian_prefix: "少阳",
			std_jiling: "少阳纪灵",
			std_jiling_prefix: "少阳",
			std_liru: "少阳李儒",
			std_liru_prefix: "少阳",
			std_wangyun: "少阳王允",
			std_wangyun_prefix: "少阳",
			stdjuezhu: "角逐",
			stdjuezhu_info: "锁定技，当你造成/受到伤害后，你本回合使用牌无次数限制/视为对伤害来源使用一张【决斗】。",
			stdchengji: "承继",
			stdchengji_info: "你可以将两张颜色不同的牌当【杀】使用或打出。",
			stdzhanjue: "战绝",
			stdzhanjue_info: "出牌阶段限一次，你可以将所有手牌当作【决斗】使用，然后摸一张牌。",
			stdqinwang: "勤王",
			stdqinwang_info: "主公技，你需要打出【杀】时，其他蜀势力角色可以弃置一张基本牌，视为你打出之。",
			stdzhengnan: "征南",
			stdzhengnan_info: "准备阶段，你可以将一张红色手牌当【杀】使用；若你因此杀死了角色，摸两张牌。",
			stdbaobian: "豹变",
			stdbaobian_info: "出牌阶段开始时，你可以失去一点体力并令一名角色弃置一张手牌；若此牌为基本牌，你视为对其使用一张【杀】。",
			stdhuituo: "恢拓",
			stdhuituo_info: "当你受到伤害后，你可以展示牌堆顶的两张牌，然后替换任意张牌。",
			stdmingjian: "明鉴",
			stdmingjian_info: "出牌阶段限一次，你可以将一张牌展示并交给一名其他角色，然后其可以使用此牌。",
			stdpolu: "破橹",
			stdpolu_info: "你造成或受到伤害后，可以弃置受伤角色装备区里的一张牌；若该角色为你，你摸一张牌。",
			stdchoulve: "筹略",
			stdchoulve_info: "出牌阶段限一次，你可以交给其他角色一张手牌，然后其可以展示并交给你一张装备牌。",
			stdjiaozhao: "矫诏",
			stdjiaozhao_info: "出牌阶段限一次，你可以令一名手牌数不小于两张的其他角色展示两张手牌，然后你可以用一张牌交换其中一张。",
			stddanxin: "殚心",
			stddanxin_info: "当你受到伤害后，你可以发动一次〖矫诏〗且改为你获得其展示牌中的一张。",
			stddianfeng: "典封",
			stddianfeng_info: "当一名角色失去装备区内的所有牌时，你可以摸一张牌。",
			stdduanbing: "短兵",
			stdduanbing_info: "锁定技，你的攻击范围始终为1。你使用【杀】每回合首次造成的伤害+1。",
			stdfenxun: "奋迅",
			stdfenxun_info: "出牌阶段限一次，你可以弃置一张防具牌并选择一名其他角色，其本回合视为在你的攻击范围内。",
			stdzenhui: "谮毁",
			stdzenhui_info: "当你使用【杀】或锦囊牌时，你可以令一名非目标角色成为此牌使用者。",
			stdchuyi: "除异",
			stdchuyi_info: "每轮限一次，当一名其他角色对你攻击范围内的一名角色造成伤害时，你可令此伤害+1。",
			stdfenyin: "奋音",
			stdfenyin_info: "摸牌阶段，你可以额外摸两张牌；若如此做，本回合你使用牌时，若此牌颜色与你使用的上一张牌颜色相同，你须弃置一张牌。",
			stdzaoli: "躁厉",
			stdzaoli_info: "锁定技，准备阶段，你弃置手牌或装备区里的所有牌，然后摸X牌并失去1点体力（X为你以此法弃置牌数与你的已损失体力值之和）。",
			stdyirang: "揖让",
			stdyirang_info: "出牌阶段开始时，你可以展示所有手牌并将这些牌交给一名手牌数最少的其他角色，然后你摸等同于交出类别数量的牌。",
			stdshuangdao: "双刀",
			stdshuangdao_info: "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以视为对计算与其距离为1的至多两名角色各使用一张无距离限制的【杀】；若你没赢，则你本回合不能使用【杀】。",
			stdjuece: "绝策",
			stdjuece_info: "结束阶段，你可以对一名本回合失去过至少两张牌的角色造成一点伤害。",
			stdmieji: "灭计",
			stdmieji_info: "出牌阶段限一次，你可以交给一名其他角色一张黑色锦囊牌，然后可以弃置其至多两张牌。",
			stdyunji: "运机",
			stdyunji_info: "你可以将一张装备牌当【借刀杀人】使用。",
			stdzongji: "纵计",
			stdzongji_info: "当一名角色受到【杀】或【决斗】造成的伤害后，你可以弃置其与伤害来源的各一张牌。",
			std_tianfeng: "太阳田丰",
			std_tianfeng_prefix: "太阳",
			stdgangjian: "刚谏",
			stdgangjian_info: "其他角色的准备阶段，你可以令其视为对你使用一张【杀】，若此【杀】未造成伤害，其本回合不能使用锦囊牌。",
			stdguijie: "瑰杰",
			stdguijie_info: "当你需要使用或打出一张【闪】时，你可以弃置两张红色牌并摸一张牌，视为使用或打出之。",
			std_liuxie: "太阳刘协",
			std_liuxie_prefix: "太阳",
			stdtianming: "天命",
			stdtianming_info: "当你成为【杀】的目标后，你可以弃置所有牌并摸两张牌，然后体力值唯一最大的其他角色也可以如此做。",
			stdmizhao: "密诏",
			stdmizhao_info: "结束阶段，你可以将所有牌交给一名其他角色并选择另一名角色，然后前者可与后者各失去1点体力。",
			stdzhongyan: "终焉",
			stdzhongyan_info: "主公技。其他群势力角色死亡时，你可以回复1点体力。",
			std_simazhao: "太阳司马昭",
			std_simazhao_prefix: "太阳",
			stdzhaoxin: "昭心",
			stdzhaoxin_info: "锁定技。准备阶段，你展示所有手牌，若这些牌颜色均相同，你对一名角色造成1点伤害。",
			std_guozhao: "太阳郭照",
			std_guozhao_prefix: "太阳",
			stdwufei: "诬诽",
			stdwufei_info: "准备阶段，你可以令一名女性角色展示所有手牌，然后其弃置其中一种颜色的所有牌并摸一张牌。",
			stdjiaochong: "椒宠",
			stdjiaochong_info: "男性角色的结束阶段，你可以对一名女性角色发动一次〖诬诽〗。",
			std_jiakui: "太阳贾逵",
			std_jiakui_prefix: "太阳",
			stdzhongzuo: "忠佐",
			stdzhongzuo_info: "锁定技。一名角色的回合结束时，若你本回合造成或受到过伤害，你与其各摸一张牌。",
			stdwanlan: "挽澜",
			stdwanlan_info: "限定技。其他角色进入濒死时，你可以交给其所有手牌，然后其回复体力至1点。",
			std_yufan: "太阳虞翻",
			std_yufan_prefix: "太阳",
			sstdzongxuan: "纵玄",
			sstdzongxuan_info: "当你的手牌因弃置进入弃牌堆后，你可以弃置场上一张牌。",
			stdzhiyan: "直言",
			stdzhiyan_info: "结束阶段，你可以获得本回合进入弃牌堆的一张装备牌。",
			std_zhugeke: "太阳诸葛恪",
			std_zhugeke_prefix: "太阳",
			stdaocai: "傲才",
			stdaocai_info: "每回合结束时，若你没有手牌，你可以观看牌堆顶的两张牌并获得其中一张牌。",
			stdduwu: "黩武",
			stdduwu_info: "出牌阶段限一次，你可以弃置所有手牌并对攻击范围内的一名角色造成1点伤害。",
			std_mengda: "太阳孟达",
			std_mengda_prefix: "太阳",
			stdzhuan: "逐安",
			stdzhuan_info: "锁定技。当你每回合首次受到伤害后，你摸三张牌，然后伤害来源获得你一张牌。",
			std_caozhen: "太阳曹真",
			std_caozhen_prefix: "太阳",
			stdsidi: "司敌",
			stdsidi_info: "当有角色打出【杀】时，你可以摸一张牌。",
			std_dongyun: "太阳董允",
			std_dongyun_prefix: "太阳",
			stdbingzheng: "秉正",
			stdbingzheng_info: "结束阶段，你可以令一名角色弃置一张牌，若其手牌数不等于体力值，你失去1点体力。",
			stdduliang: "笃良",
			stdduliang_info: "当你受到伤害后，你可以摸一张牌，若你的手牌数等于体力值，你回复1点体力。",
			std_baosanniang: "太阳鲍三娘",
			std_baosanniang_prefix: "太阳",
			stdzhennan: "镇南",
			stdzhennan_info: "其他角色的准备阶段，你可以弃置一张手牌，若如此做，其本回合使用下张牌后，若此牌为红色，你令其获得之。",
			stdshuyong: "姝勇",
			stdshuyong_info: "当其他角色于回合内连续使用两张同名牌时，你可以摸一张牌。",
			std_liuba: "太阳刘巴",
			std_liuba_prefix: "太阳",
			stdduanbi: "锻币",
			stdduanbi_info: "结束阶段，你可以弃置所有手牌，然后令两名角色各摸两张牌。",
			std_kongrong: "太阳孔融",
			std_kongrong_prefix: "太阳",
			stdlirang: "礼让",
			stdlirang_info: "其他角色的弃牌阶段结束时，你可以交给其一张牌，然后获得此阶段进入弃牌堆的所有红色牌。",
			std_zoushi: "太阳邹氏",
			std_zoushi_prefix: "太阳",
			stdhuoshui: "祸水",
			stdhuoshui_info: "锁定技，判定区有牌的其他角色受到的伤害+1。",
			stdqingcheng: "倾城",
			stdqingcheng_info: "出牌阶段限一次，你可以将两张牌红色非锦囊牌当两张【乐不思蜀】对你和一名其他角色使用。",
			std_sunluyu: "太阳孙鲁育",
			std_sunluyu_prefix: "太阳",
			stdmumu: "穆穆",
			stdmumu_info: "准备阶段，你可以弃置一张手牌，然后移动场上一张装备牌。",
			stdmeibu: "魅步",
			stdmeibu_info: "装备着武器牌的角色使用【杀】时，你可以令其弃置一张手牌。",
			std_zhoufang: "太阳周鲂",
			std_zhoufang_prefix: "太阳",
			stdqijian: "七笺",
			stdqijian_info: "准备阶段，你可以令两名手牌数之和为7的角色各选择一项：1.弃置对方一张牌；2.令对方摸一张牌。",
			stdyoudi: "诱敌",
			stdyoudi_info: "结束阶段，你可以将一张红色牌当【顺手牵羊】使用。",

			shaoyin_li: "少阴·离",
			shaoyin_zhen: "少阴·震",
			taiyin_gen: "太阴·艮",
			taiyin_kun: "太阴·坤",
			shaoyang_xun: "少阳·巽",
			shaoyang_kan: "少阳·坎",
			taiyang_qian: "太阳·乾",
			taiyang_dui: "太阳·兑",
			
			sixiang_sort_qinglong: "四象封印·青龙",
			sixiang_sort_baihu: "四象封印·白虎",
			sixiang_sort_zhuque: "四象封印·朱雀",
			sixiang_sort_xuanwu: "四象封印·玄武",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
