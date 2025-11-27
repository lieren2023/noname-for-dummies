import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "standard",
		connect: true,
		connectBanned: [
			
		],
		character: {
			std_yuejin: ["male", "wei", 4, ["stdxiaoguo"], ["die_audio:yuejin","character:gz_yuejin"]],
			old_re_lidian: ["male", "wei", 3, ["xunxun", "wangxi"], ["die_audio:lidian"]],
			ganfuren: ["female", "shu", 3, ["stdshushen", "shenzhi"]],
			std_panfeng: ["male", "qun", 4, ["stdkuangfu"]],
			caocao: ["male", "wei", 4, ["jianxiong", "hujia"], ["zhu"]],
			simayi: ["male", "wei", 3, ["fankui", "guicai"]],
			xiahoudun: ["male", "wei", 4, ["ganglie"]],
			zhangliao: ["male", "wei", 4, ["tuxi"]],
			xuzhu: ["male", "wei", 4, ["luoyi"]],
			guojia: ["male", "wei", 3, ["tiandu", "yiji"]],
			zhenji: ["female", "wei", 3, ["luoshen", "qingguo"]],
			liubei: ["male", "shu", 4, ["rende", "jijiang"], ["zhu"]],
			guanyu: ["male", "shu", 4, ["wusheng"]],
			zhangfei: ["male", "shu", 4, ["paoxiao"]],
			zhugeliang: ["male", "shu", 3, ["guanxing", "kongcheng"]],
			zhaoyun: ["male", "shu", 4, ["longdan"]],
			machao: ["male", "shu", 4, ["mashu", "tieji"]],
			huangyueying: ["female", "shu", 3, ["jizhi", "qicai"]],
			sunquan: ["male", "wu", 4, ["zhiheng", "jiuyuan"], ["zhu"]],
			ganning: ["male", "wu", 4, ["qixi"]],
			lvmeng: ["male", "wu", 4, ["keji"]],
			huanggai: ["male", "wu", 4, ["kurou"]],
			zhouyu: ["male", "wu", 3, ["yingzi", "fanjian"]],
			daqiao: ["female", "wu", 3, ["guose", "liuli"]],
			luxun: ["male", "wu", 3, ["qianxun", "lianying"]],
			sunshangxiang: ["female", "wu", 3, ["xiaoji", "jieyin"]],
			huatuo: ["male", "qun", 3, ["qingnang", "jijiu"]],
			lvbu: ["male", "qun", 4, ["wushuang"]],
			diaochan: ["female", "qun", 3, ["lijian", "biyue"]],
			huaxiong: ["male", "qun", 6, ["yaowu"]],
			gongsunzan: ["male", "qun", 4, ["reyicong"]],

			xf_yiji: ["male", "shu", 3, ["xinfu_jijie", "xinfu_jiyuan"], []],
			re_yuanshu: ["male", "qun", 4, ["rewangzun", "retongji"]],
			
		},
		characterSort: {
			standard: {
				standard_2008: [
					"caocao",
					"simayi",
					"xiahoudun",
					"zhangliao",
					"xuzhu",
					"guojia",
					"zhenji",
					"liubei",
					"guanyu",
					"zhangfei",
					"zhugeliang",
					"zhaoyun",
					"machao",
					"huangyueying",
					"sunquan",
					"ganning",
					"lvmeng",
					"huanggai",
					"zhouyu",
					"daqiao",
					"luxun",
					"sunshangxiang",
					"huatuo",
					"lvbu",
					"diaochan",
				],
				standard_2013: ["old_re_lidian", "huaxiong", "re_yuanshu"],
				standard_2019: ["gongsunzan", "xf_yiji"],
				standard_2023: ["std_panfeng", "ganfuren", "std_yuejin"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			liubei: "先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。",
			guanyu: "字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
			zhangfei:
				"字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。",
			zhugeliang:
				"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
			zhaoyun: "字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”",
			machao: "字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。",
			huangyueying:
				"荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
			sunquan: "吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。",
			ganning:
				"字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
			lvmeng: "字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”",
			huanggai:
				"字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
			zhouyu: "字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。",
			daqiao: "庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。",
			luxun: "本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
			sunshangxiang:
				"孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。",
			caocao: "魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。",
			simayi: "晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。",
			xiahoudun: "字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。",
			zhangliao:
				"字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。",
			xuzhu: "字仲康，谯国谯县人。和典韦一同统率着曹操的亲卫队“虎卫军”。因为他十分勇猛，所以有“虎痴”的绰号。曾有裸衣斗马超之举。",
			guojia: "字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”。",
			zhenji: "中山无极人，别称甄洛或甄宓，庙号文昭甄皇后。魏文帝曹丕的正室。懂诗文，有倾国倾城之貌，《洛神赋》即是曹植为她所作。",
			huatuo: "字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。",
			lvbu: "字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
			diaochan:
				"中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。",
			huaxiong:
				"董卓旗下名将，自荐抵抗山东地区反对董卓的诸侯联军于汜水关前，他先后斩杀济北相鲍信之弟鲍忠和孙坚部将祖茂、以及袁术部将俞涉和韩馥手下潘凤等人，最后关东联军派出关羽与之一对一决斗而被杀。",

			xf_yiji:
				"伊籍，字机伯，生卒年不详，兖州山阳郡（今山东金乡县）人，三国时期蜀汉官员。年少时依附于同乡刘表。刘备落难到荆州时，伊籍时常拜访，托请刘备照顾。建安十三年（208年），刘表病死，伊籍便转投刘备，一起渡江南下。建安十六年（211年），刘备入蜀帮助刘璋，伊籍亦有跟随。随后刘备和刘璋双方决裂。建安十九年（214年），刘备平定益州，任命伊籍为左将军从事中郎，其待遇次于简雍、孙乾等。后升任昭文将军，并与诸葛亮、法正、刘巴、李严共同编制《蜀科》。",
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
			//标准版乐进
			stdxiaoguo: {
				audio: "xiaoguo",
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					return (
						event.player.isIn() &&
						event.player != player &&
						player.countCards("h", card => {
							if (_status.connectMode) {
								return true;
							}
							return get.type(card) == "basic" && lib.filter.cardDiscardable(card, player);
						})
					);
				},
				async cost(event, trigger, player) {
					const target = trigger.player;
					const next = player.chooseToDiscard(get.prompt(event.name.slice(0, -5)), (card, player) => {
						return get.type(card) == "basic";
					});
					next.set("ai", card => {
						return get.event("eff") - get.useful(card);
					});
					next.set(
						"eff",
						(function () {
							if (target.hasSkillTag("noe")) {
								return get.attitude(_status.event.player, target);
							}
							return get.damageEffect(target, player, _status.event.player);
						})()
					);
					next.set("logSkill", [event.name.slice(0, -5), target]);
					event.result = await next.forResult();
				},
				popup: false,
				async content(event, trigger, player) {
					const target = trigger.player;
					const bool = await target
						.chooseToDiscard("he", "弃置一张装备牌，或受到1点伤害", { type: "equip" })
						.set("ai", card => {
							if (get.event("damage") > 0) {
								return 0;
							}
							if (get.event("noe")) {
								return 12 - get.value(card);
							}
							return -get.event("damage") - get.value(card);
						})
						.set("damage", get.damageEffect(target, player, target))
						.set("noe", target.hasSkillTag("noe"))
						.forResultBool();
					if (!bool) {
						await target.damage();
					}
				},
			},
			//标准版甘夫人
			stdshushen: {
				audio: "shushen",
				trigger: { player: "recoverEnd" },
				getIndex(event) {
					return event.num || 1;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("stdshushen"), lib.filter.notMe)
						.set("ai", (target) => get.attitude(_status.event.player, target))
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await target.draw(target.countCards("h") > 0 ? 1 : 2);
				},
				ai: { threaten: 0.8, expose: 0.1 },
			},
			stdkuangfu: {
				audio: "xinkuangfu",
				trigger: { source: "damageSource" },
				forced: true,
				usable: 1,
				filter(event, player) {
					return (
						player.isPhaseUsing() &&
						event.card &&
						event.card.name == "sha" &&
						event.player != player &&
						event.player.isIn()
					);
				},
				async content(event, trigger, player) {
					if (trigger.player.hp < player.hp) player.draw(2);
					else player.loseHp();
				},
				ai: {
					halfneg: true,
				},
			},
			rewangzun: {
				trigger: { global: "phaseZhunbeiBegin" },
				forced: true,
				audio: "wangzun",
				filter(event, player) {
					return event.player.hp > player.hp;
				},
				logTarget: "player",
				async content(event, trigger, player) {
					player.draw();
					let zhu = false;
					const target = trigger.player;
					switch (get.mode()) {
						case "identity": {
							zhu = target.isZhu;
							break;
						}
						case "guozhan": {
							zhu = get.is.jun(target);
							break;
						}
						case "versus": {
							zhu = target.identity == "zhu";
							break;
						}
						case "doudizhu": {
							zhu = target == game.zhu;
							break;
						}
					}
					if (zhu) {
						player.draw();
						target.addTempSkill("rewangzun2");
						target.addMark("rewangzun2", 1, false);
					}
				},
			},
			rewangzun2: {
				onremove: true,
				mod: {
					maxHandcard(player, num) {
						return num - player.countMark("rewangzun2");
					},
				},
				intro: { content: "手牌上限-#" },
			},
			retongji: {
				trigger: { global: "useCardToTarget" },
				logTarget: "target",
				audio: "tongji",
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						event.player != player &&
						!event.targets.includes(player) &&
						event.target.inRange(player) &&
						event.target.countCards("he") > 0
					);
				},
				async cost(event, trigger, player) {
					const { result } = await trigger.target
						.chooseCard(
							"he",
							"是否对" + get.translation(player) + "发动【同疾】？",
							"弃置一张牌，将" +
								get.translation(trigger.card) +
								"转移给" +
								get.translation(player),
							lib.filter.cardDiscardable
						)
						.set("ai", (card) => {
							if (!_status.event.check) return -1;
							return get.unuseful(card) + 9;
						})
						.set(
							"check",
							(() => {
								if (trigger.target.countCards("h", "shan")) {
									return -get.attitude(trigger.target, player);
								}
								if (get.attitude(trigger.target, player) < 5) {
									return 6 - get.attitude(trigger.target, player);
								}
								if (trigger.target.hp == 1 && player.countCards("h", "shan") == 0) {
									return 10 - get.attitude(trigger.target, player);
								}
								if (trigger.target.hp == 2 && player.countCards("h", "shan") == 0) {
									return 8 - get.attitude(trigger.target, player);
								}
								return -1;
							})() > 0
						);
					if (result.bool) {
						event.result = {
							bool: true,
							cost_data: {
								cards: result.cards,
							},
						};
					}
				},
				async content(event, trigger, player) {
					trigger.target.discard(event.cost_data.cards);
					const evt = trigger.getParent();
					evt.triggeredTargets2.remove(trigger.target);
					evt.targets.remove(trigger.target);
					evt.targets.push(player);
				},
				ai: {
					neg: true
				},
			},
			hujia: {
				audio: 2,
				audioname: ["re_caocao"],
				unique: true,
				zhuSkill: true,
				trigger: { player: ["chooseToRespondBefore", "chooseToUseBefore"] },
				filter(event, player) {
					if (event.responded) return false;
					if (player.storage.hujiaing) return false;
					if (!player.hasZhuSkill("hujia")) return false;
					if (!event.filterCard({ name: "shan", isCard: true }, player, event)) return false;
					return game.hasPlayer((current) => current != player && current.group == "wei");
				},
				check(event, player) {
					if (get.damageEffect(player, event.player, player) >= 0) return false;
					return true;
				},
				async content(event, trigger, player) {
					while (true) {
						let bool;
						if (!event.current) event.current = player.next;
						if (event.current == player) return;
						else if (event.current.group == "wei") {
							if (
								(event.current == game.me && !_status.auto) ||
								get.attitude(event.current, player) > 2 ||
								event.current.isOnline()
							) {
								player.storage.hujiaing = true;
								const next = event.current.chooseToRespond(
									"是否替" + get.translation(player) + "打出一张闪？",
									{ name: "shan" }
								);
								next.set("ai", () => {
									const event = _status.event;
									return get.attitude(event.player, event.source) - 2;
								});
								next.set("skillwarn", "替" + get.translation(player) + "打出一张闪");
								next.autochoose = lib.filter.autoRespondShan;
								next.set("source", player);
								bool = (await next).result.bool;
							}
						}
						player.storage.hujiaing = false;
						if (bool) {
							trigger.result = { bool: true, card: { name: "shan", isCard: true } };
							trigger.responded = true;
							trigger.animate = false;
							if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
								event.current.ai.shown += 0.3;
								if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
							}
							return;
						} else {
							event.current = event.current.next;
						}
					}
				},
				ai: {
					respondShan: true,
					skillTagFilter(player) {
						if (player.storage.hujiaing) return false;
						if (!player.hasZhuSkill("hujia")) return false;
						return game.hasPlayer((current) => current != player && current.group == "wei");
					},
				},
			},
			jianxiong: {
				audio: 2,
				preHidden: true,
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return get.itemtype(event.cards) == "cards" && get.position(event.cards[0], true) == "o";
				},
				async content(event, trigger, player) {
					player.gain(trigger.cards, "gain2");
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
							if (get.tag(card, "damage")) return [1, 0.55];
						},
					},
				},
			},
			fankui: {
				audio: 2,
				trigger: { player: "damageEnd" },
				logTarget: "source",
				preHidden: true,
				filter(event, player) {
					return (
						event.source &&
						event.source.countGainableCards(player, event.source != player ? "he" : "e") > 0 &&
						event.num > 0
					);
				},
				async content(event, trigger, player) {
					player.gainPlayerCard(true, trigger.source, trigger.source != player ? "he" : "e");
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player.countCards("he") > 1 && get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -1.5];
								if (get.attitude(target, player) < 0) return [1, 1];
							}
						},
					},
				},
			},
			guicai: {
				audio: 2,
				audioname2: {
					xin_simayi: "jilue_guicai",
				},
				trigger: { global: "judge" },
				preHidden: true,
				filter(event, player) {
					return player.countCards(get.mode() == "guozhan" ? "hes" : "hs") > 0;
				},
				async cost(event, trigger, player) {
					const {
						result: { bool, cards },
					} = await player
						.chooseCard(
							get.translation(trigger.player) +
								"的" +
								(trigger.judgestr || "") +
								"判定为" +
								get.translation(trigger.player.judging[0]) +
								"，" +
								get.prompt("guicai"),
							get.mode() == "guozhan" ? "hes" : "hs",
							(card) => {
								const player = _status.event.player;
								const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
								if (mod2 != "unchanged") return mod2;
								const mod = game.checkMod(
									card,
									player,
									"unchanged",
									"cardRespondable",
									player
								);
								if (mod != "unchanged") return mod;
								return true;
							}
						)
						.set("ai", (card) => {
							const trigger = _status.event.getTrigger();
							const player = _status.event.player;
							const judging = _status.event.judging;
							const result = trigger.judge(card) - trigger.judge(judging);
							const attitude = get.attitude(player, trigger.player);
							let val = get.value(card);
							if (get.subtype(card) == "equip2") val /= 2;
							else val /= 4;
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result - val;
							}
							return -result - val;
						})
						.set("judging", trigger.player.judging[0])
						.setHiddenSkill("guicai");
					if (bool) event.result = { bool, cost_data: { cards } };
				},
				//技能的logSkill跟着打出牌走 不进行logSkill
				popup: false,
				async content(event, trigger, player) {
					const chooseCardResultCards = event.cost_data.cards;
					await player.respond(chooseCardResultCards, "guicai", "highlight", "noOrdering");
					if (trigger.player.judging[0].clone) {
						trigger.player.judging[0].clone.classList.remove("thrownhighlight");
						game.broadcast(function (card) {
							if (card.clone) {
								card.clone.classList.remove("thrownhighlight");
							}
						}, trigger.player.judging[0]);
						game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
					}
					game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0] = chooseCardResultCards[0];
					trigger.orderingCards.addArray(chooseCardResultCards);
					game.log(trigger.player, "的判定牌改为", chooseCardResultCards[0]);
					game.asyncDelay(2);
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			ganglie: {
				audio: 2,
				trigger: { player: "damageEnd" },
				filter(event, player) {
					return event.source != undefined;
				},
				check(event, player) {
					return get.attitude(player, event.source) <= 0;
				},
				logTarget: "source",
				async content(event, trigger, player) {
					const judgeEvent = player.judge((card) => {
						if (get.suit(card) == "heart") return -2;
						return 2;
					});
					judgeEvent.judge2 = (result) => result.bool;
					const {
						result: { judge },
					} = await judgeEvent;
					if (judge < 2) return;
					const {
						result: { bool },
					} = await trigger.source.chooseToDiscard(2).set("ai", (card) => {
						if (card.name == "tao") return -10;
						if (card.name == "jiu" && _status.event.player.hp == 1) return -10;
						return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
					});
					if (bool == false) {
						trigger.source.damage();
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						},
					},
				},
			},
			ganglie_three: {
				audio: "ganglie",
				trigger: { player: "damageEnd" },
				async cost(event, trigger, player) {
					const { result } = await player
						.chooseTarget(get.prompt2("ganglie_three"), (card, player, target) => {
							return target.isEnemyOf(player);
						})
						.set("ai", (target) => {
							return (
								-get.attitude(_status.event.player, target) /
								Math.sqrt(1 + target.countCards("h"))
							);
						});
					event.result = result;
				},
				async content(event, trigger, player) {
					event.target = event.targets[0];
					player.logSkill("ganglie_three", event.target);
					const judgeEvent = player.judge((card) => {
						if (get.suit(card) == "heart") return -2;
						return 2;
					});
					judgeEvent.judge2 = (result) => result.bool;
					const {
						result: { judge },
					} = await judgeEvent;
					if (judge < 2) return;
					const {
						result: { bool: chooseToDiscardResultBool },
					} = await event.target.chooseToDiscard(2).set("ai", (card) => {
						if (card.name == "tao") return -10;
						if (card.name == "jiu" && _status.event.player.hp == 1) return -10;
						return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
					});
					if (chooseToDiscardResultBool === false) {
						event.target.damage();
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						},
					},
				},
			},
			tuxi: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter(event, player) {
					return !event.numFixed;
				},
				async cost(event, trigger, player) {
					let num = game.countPlayer(
						(current) =>
							current != player && current.countCards("h") > 0 && get.attitude(player, current) <= 0
					);
					let check = num >= 2;
					const { result } = await player
						.chooseTarget(
							get.prompt("tuxi"),
							"获得其他一至两名角色的各一张手牌",
							[1, 2],
							(card, player, target) => {
								return target.countCards("h") > 0 && player != target;
							},
							(target) => {
								if (!_status.event.aicheck) return 0;
								const att = get.attitude(_status.event.player, target);
								if (target.hasSkill("tuntian")) return att / 10;
								return 1 - att;
							}
						)
						.set("aicheck", check);
					event.result = result;
				},
				async content(event, trigger, player) {
					player.gainMultiple(event.targets);
					trigger.changeToZero();
					game.asyncDelay();
				},
				ai: {
					threaten: 2,
					expose: 0.3,
				},
			},
			luoyi: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				check(event, player) {
					if (player.skipList.includes("phaseUse") || player.countCards("h") < 3) return false;
					if (!player.hasSha()) return false;
					return game.hasPlayer(
						(current) => get.attitude(player, current) < 0 && player.canUse("sha", current)
					);
				},
				preHidden: true,
				filter(event, player) {
					return !event.numFixed && event.num > 0;
				},
				async content(event, trigger, player) {
					player.addTempSkill("luoyi2", "phaseJieshuBegin");
					trigger.num--;
				},
			},
			luoyi2: {
				trigger: { source: "damageBegin1" },
				sourceSkill: "luoyi",
				filter(event) {
					return (
						event.card &&
						(event.card.name == "sha" || event.card.name == "juedou") &&
						event.notLink()
					);
				},
				charlotte: true,
				forced: true,
				async content(event, trigger, player) {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
			tiandu: {
				audio: 2,
				audioname: ["re_guojia", "xizhicai", "gz_nagisa"],
				trigger: { player: "judgeEnd" },
				preHidden: true,
				frequent(event) {
					//if(get.mode()=='guozhan') return false;
					return event.result.card.name !== "du";
				},
				check(event) {
					return event.result.card.name !== "du";
				},
				filter(event, player) {
					return get.position(event.result.card, true) == "o";
				},
				async content(event, trigger, player) {
					player.gain(trigger.result.card, "gain2");
				},
			},
			yiji: {
				audio: 2,
				trigger: { player: "damageEnd" },
				frequent: true,
				filter(event) {
					return event.num > 0;
				},
				getIndex(event, player, triggername) {
					return event.num;
				},
				async content(event, trigger, player) {
					const { cards } = await game.cardsGotoOrdering(get.cards(2));
					if (_status.connectMode)
						game.broadcastAll(function () {
							_status.noclearcountdown = true;
						});
					event.given_map = {};
					if (!cards.length) return;
					// event.goto -> do while
					do {
						const {
							result: { bool, links },
						} =
							cards.length == 1
								? { result: { links: cards.slice(0), bool: true } }
								: await player
										.chooseCardButton("遗计：请选择要分配的牌", true, cards, [
											1,
											cards.length,
										])
										.set("ai", () => {
											if (ui.selected.buttons.length == 0) return 1;
											return 0;
										});
						if (!bool) return;
						cards.removeArray(links);
						event.togive = links.slice(0);
						const {
							result: { targets },
						} = await player
							.chooseTarget("选择一名角色获得" + get.translation(links), true)
							.set("ai", (target) => {
								const att = get.attitude(_status.event.player, target);
								if (_status.event.enemy) {
									return -att;
								} else if (att > 0) {
									return att / (1 + target.countCards("h"));
								} else {
									return att / 100;
								}
							})
							.set("enemy", get.value(event.togive[0], player, "raw") < 0);
						if (targets.length) {
							const id = targets[0].playerid,
								map = event.given_map;
							if (!map[id]) map[id] = [];
							map[id].addArray(event.togive);
						}
					} while (cards.length > 0);
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					const list = [];
					for (const i in event.given_map) {
						const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						if (player !== source && (get.mode() !== "identity" || player.identity !== "nei"))
							player.addExpose(0.2);
						list.push([source, event.given_map[i]]);
					}
					game.loseAsync({
						gain_list: list,
						giver: player,
						animate: "draw",
					}).setContent("gaincardMultiple");
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								let num = 1;
								if (get.attitude(player, target) > 0) {
									if (player.needsToDiscard()) num = 0.7;
									else num = 0.5;
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						},
					},
				},
			},
			luoshen: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				frequent: true,
				preHidden: true,
				async content(event, trigger, player) {
					while (true) {
						if (event.cards == undefined) event.cards = [];
						const judgeEvent = player.judge((card) => {
							if (get.color(card) == "black") return 1.5;
							return -1.5;
						});
						judgeEvent.judge2 = (result) => result.bool;
						if (get.mode() != "guozhan" && !player.hasSkillTag("rejudge"))
							judgeEvent.set("callback", async (event) => {
								if (
									event.judgeResult.color == "black" &&
									get.position(event.card, true) == "o"
								)
									await player.gain(event.card, "gain2");
							});
						else
							judgeEvent.set("callback", async (event) => {
								if (event.judgeResult.color == "black")
									event.getParent().orderingCards.remove(event.card);
							});
						const {
							result: { judge, card },
						} = await judgeEvent;
						let bool;
						if (judge > 0) {
							event.cards.push(card);
							bool = (
								await player
									.chooseBool("是否再次发动【洛神】？")
									.set("frequentSkill", "luoshen")
							).result.bool;
						} else {
							for (let i = 0; i < event.cards.length; i++) {
								if (get.position(event.cards[i], true) != "o") {
									event.cards.splice(i, 1);
									i--;
								}
							}
							if (event.cards.length) {
								player.gain(event.cards, "gain2");
							}
							return;
						}
						if (!bool) {
							if (event.cards.length) {
								player.gain(event.cards, "gain2");
							}
							return;
						}
					}
				},
			},
			xinluoshen: {
				audio: "luoshen",
				// alter:true,
				trigger: { player: "phaseZhunbeiBegin" },
				frequent: true,
				async content(event, trigger, player) {
					while (true) {
						if (event.cards == undefined) event.cards = [];
						const judgeEvent = player.judge((card) => {
							if (get.color(card) == "black") return 1.5;
							return -1.5;
						}, ui.special);
						judgeEvent.judge2 = (result) => result.bool;
						const {
							result: { judge, card },
						} = await judgeEvent;
						let bool;
						if (judge > 0) {
							event.cards.push(card);
							bool = lib.config.autoskilllist.includes("luoshen")
								? (await player.chooseBool("是否再次发动【洛神】？")).result.bool
								: true;
						} else {
							for (let i = 0; i < event.cards.length; i++) {
								if (get.position(event.cards[i]) != "s") {
									event.cards.splice(i, 1);
									i--;
								}
							}
							player.gain(event.cards, "gain2");
							player.storage.xinluoshen = event.cards.slice(0);
							return;
						}
						if (!bool) {
							if (event.cards.length) {
								player.gain(event.cards, "gain2");
								player.storage.xinluoshen = event.cards.slice(0);
								return;
							}
						}
					}
				},
				mod: {
					ignoredHandcard(card, player) {
						if (
							get.is.altered("xinluoshen") &&
							player.storage.xinluoshen &&
							player.storage.xinluoshen.includes(card)
						) {
							return true;
						}
					},
				},
				group: "xinluoshen_clear",
				subSkill: {
					clear: {
						trigger: { player: "phaseAfter" },
						silent: true,
						async content(event, trigger, player) {
							delete player.storage.xinluoshen;
						},
					},
				},
			},
			qingguo: {
				mod: {
					aiValue(player, card, num) {
						if (get.name(card) != "shan" && get.color(card) != "black") return;
						const cards = player.getCards(
							"hs",
							(card) => get.name(card) == "shan" || get.color(card) == "black"
						);
						cards.sort((a, b) => {
							return (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2);
						});
						const geti = () => {
							if (cards.includes(card)) cards.indexOf(card);
							return cards.length;
						};
						if (get.name(card) == "shan")
							return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
						return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
					},
					aiUseful() {
						return lib.skill.qingguo.mod.aiValue.apply(this, arguments);
					},
				},
				locked: false,
				audio: 2,
				audioname: ["sb_zhenji"],
				audioname2: {
					re_zhenji: "reqingguo",
				},
				enable: ["chooseToRespond", "chooseToUse"],
				filterCard(card) {
					return get.color(card) == "black";
				},
				viewAs: { name: "shan" },
				viewAsFilter(player) {
					if (!player.countCards("hs", { color: "black" })) return false;
				},
				position: "hs",
				prompt: "将一张黑色手牌当闪使用或打出",
				check() {
					return 1;
				},
				ai: {
					order: 3,
					respondShan: true,
					skillTagFilter(player) {
						if (!player.countCards("hs", { color: "black" })) return false;
					},
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, "respondShan") && current < 0) return 0.6;
						},
					},
				},
			},
			rende: {
				audio: 2,
				enable: "phaseUse",
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				delay: 0,
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					if (ui.selected.cards.length > 1) return 0;
					if (ui.selected.cards.length && ui.selected.cards[0].name == "du") return 0;
					if (!ui.selected.cards.length && card.name == "du") return 20;
					const player = get.owner(card);
					let num = 0;
					const evt2 = _status.event.getParent();
					player.getHistory("lose", (evt) => {
						if (evt.getParent().skill == "rende" && evt.getParent(3) == evt2)
							num += evt.cards.length;
					});
					if (player.hp == player.maxHp || num > 1 || player.countCards("h") <= 1) {
						if (ui.selected.cards.length) {
							return -1;
						}
						const players = game.filterPlayer();
						for (let i = 0; i < players.length; i++) {
							if (
								players[i].hasSkill("haoshi") &&
								!players[i].isTurnedOver() &&
								!players[i].hasJudge("lebu") &&
								get.attitude(player, players[i]) >= 3 &&
								get.attitude(players[i], player) >= 3
							) {
								return 11 - get.value(card);
							}
						}
						if (player.countCards("h") > player.hp) return 10 - get.value(card);
						if (player.countCards("h") > 2) return 6 - get.value(card);
						return -1;
					}
					return 10 - get.value(card);
				},
				async content(event, trigger, player) {
					const evt2 = event.getParent(3);
					let num = 0;
					player.getHistory("lose", (evt) => {
						if (evt.getParent(2).name == "rende" && evt.getParent(5) == evt2)
							num += evt.cards.length;
					});
					player.give(event.cards, event.target);
					if (num < 2 && num + event.cards.length > 1) player.recover();
				},
				ai: {
					order(skill, player) {
						if (
							player.hp < player.maxHp &&
							player.storage.rende < 2 &&
							player.countCards("h") > 1
						) {
							return 10;
						}
						return 1;
					},
					result: {
						target(player, target) {
							if (target.hasSkillTag("nogain")) return 0;
							if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
								return target.hasSkillTag("nodu") ? 0 : -10;
							}
							if (target.hasJudge("lebu")) return 0;
							const nh = target.countCards("h");
							const np = player.countCards("h");
							if (
								player.hp == player.maxHp ||
								player.storage.rende < 0 ||
								player.countCards("h") <= 1
							) {
								if (nh >= np - 1 && np <= player.hp && !target.hasSkill("haoshi")) return 0;
							}
							return Math.max(1, 5 - nh);
						},
					},
					effect: {
						target(card, player, target) {
							if (player == target && get.type(card) == "equip") {
								if (player.countCards("e", { subtype: get.subtype(card) })) {
									const players = game.filterPlayer();
									for (let i = 0; i < players.length; i++) {
										if (players[i] != player && get.attitude(player, players[i]) > 0) {
											return 0;
										}
									}
								}
							}
						},
					},
					threaten: 0.8,
				},
			},
			rende1: {
				trigger: { player: "phaseUseBegin" },
				silent: true,
				sourceSkill: "rende",
				async content(event, trigger, player) {
					player.storage.rende = 0;
				},
			},
			jijiang: {
				audio: "jijiang1",
				audioname: ["liushan", "re_liubei", "re_liushan", "ol_liushan"],
				unique: true,
				group: ["jijiang1"],
				zhuSkill: true,
				filter(event, player) {
					if (
						!player.hasZhuSkill("jijiang") ||
						!game.hasPlayer((current) => current != player && current.group == "shu")
					)
						return false;
					return !event.jijiang && (event.type != "phase" || !player.hasSkill("jijiang3"));
				},
				enable: ["chooseToUse", "chooseToRespond"],
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
						if (
							!player.hasZhuSkill("jijiang") ||
							!game.hasPlayer((current) => current != player && current.group == "shu")
						)
							return false;
					},
				},
			},
			jijiang1: {
				audio: 2,
				audioname: ["liushan", "re_liubei", "re_liushan", "ol_liushan"],
				trigger: { player: ["useCardBegin", "respondBegin"] },
				logTarget: "targets",
				sourceSkill: "jijiang",
				filter(event, player) {
					return event.skill == "jijiang";
				},
				forced: true,
				async content(event, trigger, player) {
					delete trigger.skill;
					trigger.getParent().set("jijiang", true);
					while (true) {
						if (event.current == undefined) event.current = player.next;
						if (event.current == player) {
							player.addTempSkill("jijiang3");
							trigger.cancel();
							trigger.getParent().goto(0);
							return;
						} else if (event.current.group == "shu") {
							const chooseToRespondEvent = event.current.chooseToRespond(
								"是否替" + get.translation(player) + "打出一张杀？",
								{ name: "sha" }
							);
							chooseToRespondEvent.set("ai", () => {
								const event = _status.event;
								return get.attitude(event.player, event.source) - 2;
							});
							chooseToRespondEvent.set("source", player);
							chooseToRespondEvent.set("jijiang", true);
							chooseToRespondEvent.set(
								"skillwarn",
								"替" + get.translation(player) + "打出一张杀"
							);
							chooseToRespondEvent.noOrdering = true;
							chooseToRespondEvent.autochoose = lib.filter.autoRespondSha;
							const { bool, card, cards } = (await chooseToRespondEvent).result;
							if (bool) {
								trigger.card = card;
								trigger.cards = cards;
								trigger.throw = false;
								if (
									typeof event.current.ai.shown == "number" &&
									event.current.ai.shown < 0.95
								) {
									event.current.ai.shown += 0.3;
									if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
								}
								return;
							} else event.current = event.current.next;
						} else event.current = event.current.next;
					}
				},
			},
			jijiang3: {
				trigger: { global: ["useCardAfter", "useSkillAfter", "phaseAfter"] },
				silent: true,
				charlotte: true,
				sourceSkill: "jijiang",
				filter(event) {
					return event.skill != "jijiang" && event.skill != "qinwang";
				},
				async content(event, trigger, player) {
					player.removeSkill("jijiang3");
				},
			},
			wusheng: {
				audio: 2,
				audioname2: {
					old_guanzhang: "old_fuhun",
					old_guanyu: "wusheng_re_guanyu",
					guanzhang: "wusheng_guanzhang",
					guansuo: "wusheng_guansuo",
				},
				audioname: [
					"re_guanyu",
					"jsp_guanyu",
					"re_guanzhang",
					"dc_jsp_guanyu",
				],
				enable: ["chooseToRespond", "chooseToUse"],
				filterCard(card, player) {
					if (get.zhu(player, "shouyue")) return true;
					return get.color(card) == "red";
				},
				position: "hes",
				viewAs: { name: "sha" },
				viewAsFilter(player) {
					if (get.zhu(player, "shouyue")) {
						if (!player.countCards("hes")) return false;
					} else {
						if (!player.countCards("hes", { color: "red" })) return false;
					}
				},
				prompt: "将一张红色牌当杀使用或打出",
				check(card) {
					const val = get.value(card);
					if (_status.event.name == "chooseToRespond") return 1 / Math.max(0.1, val);
					return 5 - val;
				},
				ai: {
					skillTagFilter(player) {
						if (get.zhu(player, "shouyue")) {
							if (!player.countCards("hes")) return false;
						} else {
							if (!player.countCards("hes", { color: "red" })) return false;
						}
					},
					respondSha: true,
				},
			},
			wusheng_re_guanyu: { audio: 2 },
			zhongyi: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "orange",
				filterCard: true,
				position: "he",
				filter(event, player) {
					return player.countCards("he") > 0;
				},
				discard: false,
				lose: false,
				async content(event, trigger, player) {
					player.awakenSkill("zhongyi");
					player.addTempSkill("zhongyi2", "roundStart");
					player.addToExpansion(player, "give", event.cards).gaintag.add("zhongyi2");
				},
			},
			zhongyi2: {
				trigger: { global: "damageBegin1" },
				forced: true,
				popup: false,
				logTarget: "source",
				sourceSkill: "zhongyi",
				filter(event, player) {
					return event.getParent().name == "sha" && event.source && event.source.isFriendOf(player);
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
				intro: { content: "expansion", markcount: "expansion" },
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			paoxiao: {
				audio: 2,
				firstDo: true,
				audioname: ["re_zhangfei", "xiahouba"],
				audioname2: {
					old_guanzhang: "old_fuhun",
					dc_xiahouba: "paoxiao_xiahouba",
					guanzhang: "paoxiao_guanzhang",
				},
				trigger: { player: "useCard1" },
				forced: true,
				filter(event, player) {
					return (
						!event.audioed &&
						event.card.name == "sha" &&
						player.countUsed("sha", true) > 1 &&
						event.getParent().type == "phase"
					);
				},
				async content(event, trigger, player) {
					trigger.audioed = true;
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == "sha") return Infinity;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (!get.zhu(player, "shouyue")) return false;
						if (arg && arg.name == "sha") return true;
						return false;
					},
				},
			},
			paoxiao_xiahouba: { audio: 2 },
			guanxing_fail: {},
			guanxing: {
				audio: 2,
				audioname: ["jiangwei", "re_jiangwei", "re_zhugeliang", "ol_jiangwei"],
				trigger: { player: "phaseZhunbeiBegin" },
				frequent: true,
				preHidden: true,
				async content(event, trigger, player) {
					const num =
						player.hasSkill("yizhi") && player.hasSkill("guanxing")
							? 5
							: Math.min(5, game.countPlayer());
					const cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					const next = player.chooseToMove();
					next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
					next.set("prompt", "观星：点击将牌移动到牌堆顶或牌堆底");
					next.processAI = (list) => {
						const cards = list[0][1],
							player = _status.event.player;
						const top = [];
						const judges = player.getCards("j");
						let stopped = false;
						if (!player.hasWuxie()) {
							for (let i = 0; i < judges.length; i++) {
								const judge = get.judge(judges[i]);
								cards.sort((a, b) => judge(b) - judge(a));
								if (judge(cards[0]) < 0) {
									stopped = true;
									break;
								} else {
									top.unshift(cards.shift());
								}
							}
						}
						let bottom;
						if (!stopped) {
							cards.sort((a, b) => get.value(b, player) - get.value(a, player));
							while (cards.length) {
								if (get.value(cards[0], player) <= 5) break;
								top.unshift(cards.shift());
							}
						}
						bottom = cards;
						return [top, bottom];
					};
					const {
						result: { moved },
					} = await next;
					const top = moved[0];
					const bottom = moved[1];
					top.reverse();
					game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event, card) => {
						if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
						return null;
					});
					player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
					game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
					game.asyncDelayx();
				},
				ai: {
					threaten: 1.2,
				},
			},
			kongcheng: {
				mod: {
					targetEnabled(card, player, target, now) {
						if (target.countCards("h") == 0) {
							if (card.name == "sha" || card.name == "juedou") return false;
						}
					},
				},
				group: "kongcheng1",
				audio: "kongcheng1",
				audioname: ["re_zhugeliang"],
				ai: {
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == "noh") {
							if (player.countCards("h") != 1) return false;
						}
					},
				},
			},
			kongcheng1: {
				audio: 2,
				trigger: { player: "loseEnd" },
				forced: true,
				firstDo: true,
				audioname: ["re_zhugeliang"],
				sourceSkill: "kongcheng",
				filter(event, player) {
					if (player.countCards("h")) return false;
					for (let i = 0; i < event.cards.length; i++) {
						if (event.cards[i].original == "h") return true;
					}
					return false;
				},
				async content() {},
			},
			longdan: {
				audio: "longdan_sha",
				audioname: ["re_zhaoyun"],
				group: ["longdan_sha", "longdan_shan", "longdan_draw"],
				subSkill: {
					draw: {
						trigger: { player: ["useCard", "respond"] },
						forced: true,
						popup: false,
						filter(event, player) {
							if (!get.zhu(player, "shouyue")) return false;
							return event.skill == "longdan_sha" || event.skill == "longdan_shan";
						},
						async content(event, trigger, player) {
							player.draw();
							player.storage.fanghun2++;
						},
					},
					sha: {
						audio: 2,
						audioname: ["re_zhaoyun"],
						enable: ["chooseToUse", "chooseToRespond"],
						filterCard: { name: "shan" },
						viewAs: { name: "sha" },
						viewAsFilter(player) {
							if (!player.countCards("hs", "shan")) return false;
						},
						position: "hs",
						prompt: "将一张闪当杀使用或打出",
						check() {
							return 1;
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, "respondSha") && current < 0) return 0.6;
								},
							},
							respondSha: true,
							skillTagFilter(player) {
								if (!player.countCards("hs", "shan")) return false;
							},
							order() {
								return get.order({ name: "sha" }) + 0.1;
							},
							useful: -1,
							value: -1,
						},
					},
					shan: {
						audio: "longdan_sha",
						audioname: ["re_zhaoyun"],
						enable: ["chooseToRespond", "chooseToUse"],
						filterCard: { name: "sha" },
						viewAs: { name: "shan" },
						prompt: "将一张杀当闪使用或打出",
						check() {
							return 1;
						},
						position: "hs",
						viewAsFilter(player) {
							if (!player.countCards("hs", "sha")) return false;
						},
						ai: {
							respondShan: true,
							skillTagFilter(player) {
								if (!player.countCards("hs", "sha")) return false;
							},
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, "respondShan") && current < 0) return 0.6;
								},
							},
							order: 4,
							useful: -1,
							value: -1,
						},
					},
				},
			},
			mashu: {
				mod: {
					globalFrom(from, to, distance) {
						return distance - 1;
					},
				},
			},
			mashu2: {
				mod: {
					globalFrom(from, to, distance) {
						return distance - 1;
					},
				},
			},
			feiying: {
				mod: {
					globalTo(from, to, distance) {
						return distance + 1;
					},
				},
			},
			tieji: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				check(event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				filter(event, player) {
					return event.card.name == "sha";
				},
				logTarget: "target",
				preHidden: true,
				async content(event, trigger, player) {
					const judgeEvent = player.judge((card) => {
						if (get.zhu(_status.event.player, "shouyue")) {
							if (get.suit(card) != "spade") return 2;
						} else {
							if (get.color(card) == "red") return 2;
						}
						return -0.5;
					});
					judgeEvent.judge2 = (result) => result.bool;
					const {
						result: { bool },
					} = await judgeEvent;
					if (bool) {
						trigger.getParent().directHit.add(trigger.target);
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (
							get.attitude(player, arg.target) > 0 ||
							arg.card.name != "sha" ||
							!ui.cardPile.firstChild ||
							get.color(ui.cardPile.firstChild, player) != "red"
						)
							return false;
					},
				},
			},
			jizhi: {
				audio: 2,
				audioname: ["jianyong"],
				audioname2: {
					xin_simayi: "jilue_jizhi",
				},
				trigger: { player: "useCard" },
				frequent: true,
				preHidden: true,
				filter(event) {
					return get.type(event.card) == "trick" && event.card.isCard;
				},
				async content(event, trigger, player) {
					player.draw();
				},
				ai: {
					threaten: 1.4,
					noautowuxie: true,
				},
			},
			xinjizhi: {
				audio: "jizhi",
				trigger: { player: "useCard" },
				frequent: true,
				// alter:true,
				filter(event) {
					if (get.type(event.card) == "delay") return false;
					return (
						get.type(event.card, "trick") == "trick" &&
						event.cards[0] &&
						event.cards[0] == event.card
					);
				},
				async content(event, trigger, player) {
					player.draw();
				},
				ai: {
					threaten: 1.4,
					noautowuxie: true,
				},
			},
			qicai: {
				mod: {
					targetInRange(card, player, target, now) {
						if (["trick", "delay"].includes(get.type(card))) return true;
					},
				},
			},
			xinqicai: {
				// alter:true,
				mod: {
					targetInRange(card, player, target, now) {
						if (["trick", "delay"].includes(get.type(card))) return true;
					},
				},
			},
			xinzhiheng: {
				audio: "zhiheng",
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || get.itemtype(card) !== "card" || get.type(card) !== "equip")
							return num;
						let eq = player.getEquip(get.subtype(card));
						if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp))
							return 0;
					},
				},
				locked: false,
				enable: "phaseUse",
				// alter:true,
				usable: 1,
				position: "he",
				filterCard: true,
				selectCard: [1, Infinity],
				check(card) {
					const player = _status.event.player;
					if (
						get.is.altered("xinzhiheng") &&
						get.position(card) == "h" &&
						!player.countCards("h", (card) => get.value(card) >= 8)
					) {
						return 1;
					}
					if (get.position(card) == "e") {
						let subs = get.subtypes(card);
						if (subs.includes("equip2") || subs.includes("equip3")) return player.getHp() - get.value(card);
					}
					return 6 - get.value(card);
				},
				delay: 0,
				async content(event, trigger, player) {
					if (!player.hasSkill("xinzhiheng_delay")) game.asyncDelayx();
					player.draw(event.cards.length);
				},
				group: "xinzhiheng_draw",
				subSkill: {
					draw: {
						trigger: { player: "loseEnd" },
						silent: true,
						filter(event, player) {
							if (event.getParent(2).skill != "xinzhiheng") return false;
							if (!get.is.altered("xinzhiheng")) return false;
							if (player.countCards("h")) return false;
							for (let i = 0; i < event.cards.length; i++) {
								if (event.cards[i].original == "h") return true;
							}
							return false;
						},
						async content(event, trigger, player) {
							player.draw();
							player.addTempSkill("xinzhiheng_delay", "xinzhihengAfter");
						},
					},
					delay: {},
				},
				ai: {
					order(item, player) {
						if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), "he")) return 1;
						return 10;
					},
					result: {
						player: 1,
					},
					nokeep: true,
					skillTagFilter(player, tag, arg) {
						if (tag === "nokeep")
							return (
								(!arg || (arg && arg.card && get.name(arg.card) === "tao")) &&
								player.isPhaseUsing() &&
								!player.getStat().skill.xinzhiheng &&
								player.hasCard((card) => get.name(card) !== "tao", "h")
							);
					},
					threaten: 1.55,
				},
			},
			zhiheng: {
				audio: 2,
				audioname: ["gz_jun_sunquan"],
				audioname2: {
					xin_simayi: "jilue_zhiheng",
				},
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || get.itemtype(card) !== "card" || get.type(card) !== "equip")
							return num;
						let eq = player.getEquip(get.subtype(card));
						if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp))
							return 0;
					},
				},
				locked: false,
				enable: "phaseUse",
				usable: 1,
				position: "he",
				filterCard: true,
				selectCard: [1, Infinity],
				prompt: "弃置任意张牌并摸等量的牌",
				check(card) {
					let player = _status.event.player;
					if (get.position(card) == "e") {
						let subs = get.subtypes(card);
						if (subs.includes("equip2") || subs.includes("equip3")) return player.getHp() - get.value(card);
					}
					return 6 - get.value(card);
				},
				async content(event, trigger, player) {
					player.draw(event.cards.length);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
					threaten: 1.5,
				},
			},
			jiuyuan: {
				audio: 2,
				unique: true,
				trigger: { target: "taoBegin" },
				zhuSkill: true,
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					if (!player.hasZhuSkill("jiuyuan")) return false;
					if (event.player.group != "wu") return false;
					return true;
				},
				async content(event, trigger, player) {
					trigger.baseDamage++;
				},
			},
			xinjiuyuan: {
				audio: "jiuyuan",
				unique: true,
				// alter:true,
				trigger: { target: "taoBegin" },
				zhuSkill: true,
				forced: true,
				filter(event, player) {
					if (get.is.altered("xinjiuyuan")) return false;
					if (event.player == player) return false;
					if (!player.hasZhuSkill("jiuyuan")) return false;
					if (player.hp > 0) return false;
					if (event.player.group != "wu") return false;
					return true;
				},
				async content(event, trigger, player) {
					player.recover();
				},
				global: "xinjiuyuan2",
			},
			xinjiuyuan2: {
				audio: "jiuyuan",
				forceaudio: true,
				trigger: { player: "taoBegin" },
				filter(event, player) {
					if (!get.is.altered("xinjiuyuan")) return false;
					if (player.group != "wu") return false;
					return game.hasPlayer((target) => {
						return (
							player != target &&
							target.isDamaged() &&
							target.hp < player.hp &&
							target.hasZhuSkill("xinjiuyuan", player)
						);
					});
				},
				direct: true,
				async content(event, trigger, player) {
					event.list = game
						.filterPlayer(
							(target) =>
								player != target &&
								target.isDamaged() &&
								target.hp < player.hp &&
								target.hasZhuSkill("xinjiuyuan", player)
						)
						.sortBySeat();
					while (event.list.length > 0) {
						const current = event.list.shift();
						event.current = current;
						const {
							result: { bool },
						} = await player
							.chooseBool(get.prompt("xinjiuyuan", current))
							.set("choice", get.attitude(player, current) > 0);
						if (bool) {
							player.logSkill("xinjiuyuan", event.current);
							event.current.recover();
							player.draw();
						}
					}
				},
			},
			qixi: {
				audio: 2,
				audioname: ["re_ganning"],
				audioname2: { re_heqi: "duanbing_heqi" },
				enable: "chooseToUse",
				filterCard(card) {
					return get.color(card) == "black";
				},
				position: "hes",
				viewAs: { name: "guohe" },
				viewAsFilter(player) {
					if (!player.countCards("hes", { color: "black" })) return false;
				},
				prompt: "将一张黑色牌当过河拆桥使用",
				check(card) {
					return 4 - get.value(card);
				},
			},
			keji: {
				audio: 2,
				audioname: ["re_lvmeng", "sp_lvmeng"],
				trigger: { player: "phaseDiscardBefore" },
				frequent(event, player) {
					return player.needsToDiscard();
				},
				filter(event, player) {
					if (player.getHistory("skipped").includes("phaseUse")) return true;
					const history = player.getHistory("useCard").concat(player.getHistory("respond"));
					for (let i = 0; i < history.length; i++) {
						if (history[i].card.name == "sha" && history[i].isPhaseUsing()) return false;
					}
					return true;
				},
				async content(event, trigger, player) {
					trigger.cancel();
				},
			},
			kurou: {
				audio: 2,
				enable: "phaseUse",
				prompt: "失去1点体力并摸两张牌",
				async content(event, trigger, player) {
					player.loseHp(1);
					player.draw(2);
				},
				ai: {
					basic: {
						order: 1,
					},
					result: {
						player(player) {
							if (player.countCards("h") >= player.hp - 1) return -1;
							if (player.hp < 3) return -1;
							return 1;
						},
					},
				},
			},
			yingzi: {
				audio: 2,
				audioname: ["sp_lvmeng"],
				trigger: { player: "phaseDrawBegin2" },
				frequent: true,
				filter(event, player) {
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
				ai: {
					threaten: 1.3,
				},
			},
			fanjian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				async content(event, trigger, player) {
					const target = event.target;
					const control = await target
						.chooseControl("heart2", "diamond2", "club2", "spade2")
						.set("ai", (event) => {
							switch (Math.floor(Math.random() * 6)) {
								case 0:
									return "heart2";
								case 1:
								case 4:
								case 5:
									return "diamond2";
								case 2:
									return "club2";
								case 3:
									return "spade2";
							}
						})
						.forResultControl();
					game.log(target, "选择了" + get.translation(control));
					event.choice = control;
					target.chat("我选" + get.translation(event.choice));
					const {
						result: { bool, cards },
					} = await target.gainPlayerCard(player, true, "h");
					if (bool && get.suit(cards[0], player) + "2" != event.choice) target.damage("nocard");
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							const eff = get.damageEffect(target, player);
							if (eff >= 0) return 1 + eff;
							let value = 0,
								i;
							const cards = player.getCards("h");
							for (i = 0; i < cards.length; i++) value += get.value(cards[i]);
							value /= player.countCards("h");
							if (target.hp == 1) return Math.min(0, value - 7);
							return Math.min(0, value - 5);
						},
					},
				},
			},
			guose: {
				audio: 2,
				filter(event, player) {
					return player.countCards("hes", { suit: "diamond" }) > 0;
				},
				enable: "chooseToUse",
				filterCard(card) {
					return get.suit(card) == "diamond";
				},
				position: "hes",
				viewAs: { name: "lebu" },
				prompt: "将一张方片牌当乐不思蜀使用",
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					threaten: 1.5,
				},
			},
			liuli: {
				audio: 2,
				audioname: ["re_daqiao", "daxiaoqiao"],
				trigger: { target: "useCardToTarget" },
				preHidden: true,
				filter(event, player) {
					if (event.card.name != "sha") return false;
					if (player.countCards("he") == 0) return false;
					return game.hasPlayer((current) => {
						return (
							player.inRange(current) &&
							current != event.player &&
							current != player &&
							lib.filter.targetEnabled(event.card, event.player, current)
						);
					});
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCardTarget({
							position: "he",
							filterCard: lib.filter.cardDiscardable,
							filterTarget: (card, player, target) => {
								const trigger = _status.event;
								if (player.inRange(target) && target != trigger.source) {
									if (lib.filter.targetEnabled(trigger.card, trigger.source, target))
										return true;
								}
								return false;
							},
							ai1: (card) => get.unuseful(card) + 9,
							ai2: (target) => {
								if (_status.event.player.countCards("h", "shan")) {
									return -get.attitude(_status.event.player, target);
								}
								if (get.attitude(_status.event.player, target) < 5) {
									return 6 - get.attitude(_status.event.player, target);
								}
								if (_status.event.player.hp == 1 && player.countCards("h", "shan") == 0) {
									return 10 - get.attitude(_status.event.player, target);
								}
								if (_status.event.player.hp == 2 && player.countCards("h", "shan") == 0) {
									return 8 - get.attitude(_status.event.player, target);
								}
								return -1;
							},
							prompt: get.prompt("liuli"),
							prompt2: "弃置一张牌，将此【杀】转移给攻击范围内的一名其他角色",
							source: trigger.player,
							card: trigger.card,
						})
						.setHiddenSkill(event.name.slice(0, -5))
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					// player.logSkill(event.name, target);
					player.discard(event.cards);
					const evt = trigger.getParent();
					evt.triggeredTargets2.remove(player);
					evt.targets.remove(player);
					evt.targets.push(target);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target.countCards("he") == 0) return;
							if (card.name != "sha") return;
							let min = 1;
							const friend = get.attitude(player, target) > 0;
							const vcard = { name: "shacopy", nature: card.nature, suit: card.suit };
							const players = game.filterPlayer();
							for (let i = 0; i < players.length; i++) {
								if (
									player != players[i] &&
									get.attitude(target, players[i]) < 0 &&
									target.canUse(card, players[i])
								) {
									if (!friend) return 0;
									if (get.effect(players[i], vcard, player, player) > 0) {
										if (!player.canUse(card, players[0])) {
											return [0, 0.1];
										}
										min = 0;
									}
								}
							}
							return min;
						},
					},
				},
			},
			qianxun: {
				mod: {
					targetEnabled(card, player, target, now) {
						if (card.name == "shunshou" || card.name == "lebu") return false;
					},
				},
				audio: 2,
			},
			lianying: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: [
						"equipAfter",
						"addJudgeAfter",
						"gainAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				frequent: true,
				filter(event, player) {
					if (player.countCards("h")) return false;
					const evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length > 0;
				},
				async content(event, trigger, player) {
					player.draw();
				},
				ai: {
					threaten: 0.8,
					effect: {
						player_use(card, player, target) {
							if (player.countCards("h") === 1) return [1, 0.8];
						},
						target(card, player, target) {
							if (get.tag(card, "loseCard") && target.countCards("h") === 1) return 0.5;
						},
					},
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == "noh") {
							if (player.countCards("h") != 1) return false;
						}
					},
				},
			},
			xiaoji: {
				audio: 2,
				audioname: ["sp_sunshangxiang", "re_sunshangxiang"],
				trigger: {
					player: "loseAfter",
					global: [
						"equipAfter",
						"addJudgeAfter",
						"gainAfter",
						"loseAsyncAfter",
						"addToExpansionAfter",
					],
				},
				frequent: true,
				getIndex(event, player) {
					const evt = event.getl(player);
					if (evt && evt.player === player && evt.es) return evt.es.length;
					return false;
				},
				async content(event, trigger, player) {
					player.draw(2);
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, 3];
						},
					},
				},
			},
			jieyin: {
				audio: 2,
				enable: "phaseUse",
				filterCard: true,
				usable: 1,
				selectCard: 2,
				check(card) {
					const player = get.owner(card);
					if (player.countCards("h") > player.hp) return 8 - get.value(card);
					if (player.hp < player.maxHp) return 6 - get.value(card);
					return 4 - get.value(card);
				},
				filterTarget(card, player, target) {
					if (!target.hasSex("male")) return false;
					if (target.hp >= target.maxHp) return false;
					if (target == player) return false;
					return true;
				},
				async content(event, trigger, player) {
					player.recover();
					event.target.recover();
				},
				ai: {
					order: 5.5,
					result: {
						player(player) {
							if (player.hp < player.maxHp) return 4;
							if (player.countCards("h") > player.hp) return 0;
							return -1;
						},
						target: 4,
					},
					threaten: 2,
				},
			},
			xinjieyin: {
				group: ["xinjieyin_old", "xinjieyin_new"],
				// alter:true,
				subSkill: {
					new: {
						audio: "jieyin",
						enable: "phaseUse",
						filterCard: true,
						usable: 1,
						position: "he",
						filter(event, player) {
							if (!get.is.altered("xinjieyin")) return false;
							return player.countCards("he") > 0;
						},
						check(card) {
							const player = _status.event.player;
							if (get.position(card) == "e") {
								const subtype = get.subtype(card);
								if (
									!game.hasPlayer((current) => {
										return (
											current != player &&
											current.hp != player.hp &&
											get.attitude(player, current) > 0 &&
											!current.countCards("e", { subtype })
										);
									})
								) {
									return 0;
								}
								// 你还想我兼容{subtype:subtype}？不可能！
								if (player.countCards("h", { subtype })) return 20 - get.value(card);
								return 10 - get.value(card);
							} else {
								if (player.countCards("e")) return 0;
								if (player.countCards("h", { type: "equip" })) return 0;
								return 8 - get.value(card);
							}
						},
						filterTarget(card, player, target) {
							if (!target.hasSex("male")) return false;
							card = ui.selected.cards[0];
							if (!card) return false;
							if (
								get.position(card) == "e" &&
								target.countCards("e", { subtype: get.subtype(card) })
							)
								return false;
							return true;
						},
						discard: false,
						delay: 0,
						lose: false,
						async content(event, trigger, player) {
							const { cards, target } = event;
							if (get.position(cards[0]) == "e") {
								player.$give(cards, target);
								target.equip(cards[0]);
							} else {
								player.discard(cards);
							}
							if (player.hp > target.hp) {
								player.draw();
								if (target.isDamaged()) target.recover();
							} else if (player.hp < target.hp) {
								target.draw();
								if (player.isDamaged()) player.recover();
							}
						},
						ai: {
							order() {
								const player = _status.event.player;
								const es = player.getCards("e");
								for (let i = 0; i < es.length; i++) {
									if (player.countCards("h", { subtype: get.subtype(es[i]) })) return 10;
								}
								return 2;
							},
							result: {
								target(player, target) {
									const goon = () => {
										const es = player.getCards("e");
										for (let i = 0; i < es.length; i++) {
											if (player.countCards("h", { subtype: get.subtype(es[i]) }))
												return true;
										}
										return false;
									};
									if (player.hp < target.hp) {
										if (player.isHealthy()) {
											if (!player.needsToDiscard(1) || goon()) return 0.1;
											return 0;
										}
										return 1.5;
									}
									if (player.hp > target.hp) {
										if (target.isHealthy()) {
											if (!player.needsToDiscard(1) || goon()) return 0.1;
											return 0;
										}
										return 1;
									}
									return 0;
								},
							},
						},
					},
					old: {
						audio: "jieyin",
						enable: "phaseUse",
						filterCard: true,
						usable: 1,
						selectCard: 2,
						filter(event, player) {
							if (get.is.altered("xinjieyin")) return false;
							return player.countCards("h") >= 2;
						},
						check(card) {
							const player = get.owner(card);
							if (player.countCards("h") > player.hp) return 8 - get.value(card);
							if (player.hp < player.maxHp) return 6 - get.value(card);
							return 4 - get.value(card);
						},
						filterTarget(card, player, target) {
							if (!target.hasSex("male")) return false;
							if (target.hp >= target.maxHp) return false;
							if (target == player) return false;
							return true;
						},
						async content(event, trigger, player) {
							player.recover();
							event.target.recover();
						},
						ai: {
							order: 5.5,
							result: {
								player(player) {
									if (player.hp < player.maxHp) return 4;
									if (player.countCards("h") > player.hp) return 0;
									return -1;
								},
								target: 4,
							},
						},
					},
				},
				ai: {
					threaten: 2.3,
				},
			},
			qingnang: {
				audio: 2,
				enable: "phaseUse",
				filterCard: true,
				usable: 1,
				check(card) {
					return 9 - get.value(card);
				},
				filterTarget(card, player, target) {
					if (target.hp >= target.maxHp) return false;
					return true;
				},
				async content(event, trigger, player) {
					event.target.recover();
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							if (target.hp == 1) return 5;
							if (player == target && player.countCards("h") > player.hp) return 5;
							return 2;
						},
					},
					threaten: 2,
				},
			},
			jijiu: {
				mod: {
					aiValue(player, card, num) {
						if (get.name(card) != "tao" && get.color(card) != "red") return;
						const cards = player.getCards(
							"hs",
							(card) => get.name(card) == "tao" || get.color(card) == "red"
						);
						cards.sort((a, b) => (get.name(a) == "tao" ? 1 : 2) - (get.name(b) == "tao" ? 1 : 2));
						var geti = () => {
							if (cards.includes(card)) cards.indexOf(card);
							return cards.length;
						};
						return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
					},
					aiUseful() {
						return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
					},
				},
				locked: false,
				audio: 2,
				audioname: ["re_huatuo"],
				enable: "chooseToUse",
				viewAsFilter(player) {
					return player != _status.currentPhase && player.countCards("hes", { color: "red" }) > 0;
				},
				filterCard(card) {
					return get.color(card) == "red";
				},
				position: "hes",
				viewAs: { name: "tao" },
				prompt: "将一张红色牌当桃使用",
				check(card) {
					return 15 - get.value(card);
				},
				ai: {
					threaten: 1.5,
				},
			},
			wushuang: {
				audio: 2,
				audioname: ["re_lvbu", "shen_lvbu", "lvlingqi"],
				forced: true,
				locked: true,
				group: ["wushuang1", "wushuang2"],
				preHidden: ["wushuang1", "wushuang2"],
			},
			wushuang1: {
				audio: "wushuang",
				audioname: ["re_lvbu", "shen_lvbu", "lvlingqi"],
				trigger: { player: "useCardToPlayered" },
				forced: true,
				sourceSkill: "wushuang",
				filter(event, player) {
					return event.card.name == "sha" && !event.getParent().directHit.includes(event.target);
				},
				//priority:-1,
				logTarget: "target",
				async content(event, trigger, player) {
					const id = trigger.target.playerid;
					const map = trigger.getParent().customArgs;
					if (!map[id]) map[id] = {};
					if (typeof map[id].shanRequired == "number") {
						map[id].shanRequired++;
					} else {
						map[id].shanRequired = 2;
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (arg.card.name != "sha" || arg.target.countCards("h", "shan") > 1) return false;
					},
				},
			},
			wushuang2: {
				audio: "wushuang",
				audioname: ["re_lvbu", "shen_lvbu", "lvlingqi"],
				trigger: { player: "useCardToPlayered", target: "useCardToTargeted" },
				forced: true,
				sourceSkill: "wushuang",
				logTarget(trigger, player) {
					return player == trigger.player ? trigger.target : trigger.player;
				},
				filter(event, player) {
					return event.card.name == "juedou";
				},
				//priority:-1,
				async content(event, trigger, player) {
					const id = (player == trigger.player ? trigger.target : trigger.player)["playerid"];
					const idt = trigger.target.playerid;
					const map = trigger.getParent().customArgs;
					if (!map[idt]) map[idt] = {};
					if (!map[idt].shaReq) map[idt].shaReq = {};
					if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
					map[idt].shaReq[id]++;
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (
							arg.card.name != "juedou" ||
							Math.floor(arg.target.countCards("h", "sha") / 2) > player.countCards("h", "sha")
						)
							return false;
					},
				},
			},
			zhanshen: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				skillAnimation: true,
				animationColor: "gray",
				filter(event, player) {
					return (
						player.isDamaged() &&
						game.dead.filter((target) => target.isFriendOf(player)).length > 0
					);
				},
				async content(event, trigger, player) {
					player.awakenSkill("zhanshen");
					const cards = player.getEquips(1);
					if (cards.length) player.discard(cards);
					player.loseMaxHp();
					player.addSkills(["mashu", "shenji"]);
				},
				derivation: ["mashu", "shenji"],
			},
			shenji: {
				mod: {
					selectTarget(card, player, range) {
						if (range[1] == -1) return;
						if (card.name == "sha") range[1] += 2;
					},
					cardUsable(card, player, num) {
						if (card.name == "sha") return num + 1;
					},
				},
			},
			lijian: {
				audio: 2,
				audioname: ["re_diaochan"],
				enable: "phaseUse",
				usable: 1,
				filter(event, player) {
					return game.countPlayer((current) => current != player && current.hasSex("male")) > 1;
				},
				check(card) {
					return 10 - get.value(card);
				},
				filterCard: true,
				position: "he",
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (!target.hasSex("male")) return false;
					if (ui.selected.targets.length == 1) {
						return target.canUse({ name: "juedou" }, ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt: ["先出杀", "后出杀"],
				selectTarget: 2,
				multitarget: true,
				async content(event, trigger, player) {
					const useCardEvent = event.targets[1].useCard(
						{ name: "juedou", isCard: true },
						"nowuxie",
						event.targets[0],
						"noai"
					);
					useCardEvent.animate = false;
					game.asyncDelay(0.5);
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (ui.selected.targets.length == 0) {
								return -3;
							} else {
								return get.effect(target, { name: "juedou" }, ui.selected.targets[0], target);
							}
						},
					},
					expose: 0.4,
					threaten: 3,
				},
			},
			biyue: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				preHidden: true,
				async content(event, trigger, player) {
					player.draw();
				},
			},
			xinbiyue: {
				audio: "biyue",
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				// alter:true,
				async content(event, trigger, player) {
					player.draw();
				},
			},
			yaowu: {
				trigger: { player: "damageBegin3" },
				//priority:1,
				audio: 2,
				filter(event) {
					if (event.card && event.card.name == "sha") {
						if (get.color(event.card) == "red") return true;
					}
					return false;
				},
				forced: true,
				check() {
					return false;
				},
				async content(event, trigger, player) {
					trigger.source.chooseDrawRecover(true);
				},
				ai: {
					neg: true,
					effect: {
						target(card, player, target, current) {
							if (card.name == "sha" && get.color(card) == "red") {
								return [1, -2];
							}
						},
					},
				},
			},
			new_jiangchi: {
				audio: 2,
				trigger: {
					player: "phaseDrawEnd",
				},
				async cost(event, trigger, player) {
					const list = ["弃牌", "摸牌", "cancel2"];
					if (!player.countCards("he")) list.remove("弃牌");
					const control = await player
						.chooseControl(list, () => {
							const player = _status.event.player;
							if (list.includes("弃牌")) {
								if (player.countCards("h") > 3 && player.countCards("h", "sha") > 1) {
									return "弃牌";
								}
								if (player.countCards("h", "sha") > 2) {
									return "弃牌";
								}
							}
							if (!player.countCards("h", "sha")) {
								return "摸牌";
							}
							return "cancel2";
						})
						.set("prompt", get.prompt2("new_jiangchi"))
						.forResultControl();
					if (control === "cancel2") event.result = { bool: false };
					else
						event.result = {
							bool: true,
							cost_data: control,
						};
				},
				async content(event, trigger, player) {
					const control = event.cost_data;

					if (control == "弃牌") {
						player.chooseToDiscard(true, "he");
						player.addTempSkill("jiangchi2", "phaseUseEnd");
					} else if (control == "摸牌") {
						player.draw();
						player.addTempSkill("new_jiangchi3", "phaseEnd");
					}
				},
			},
			new_jiangchi3: {
				mod: {
					cardEnabled(card) {
						if (card.name == "sha") return false;
					},
					cardRespondable(card) {
						if (card.name == "sha") return false;
					},
					ignoredHandcard(card, player) {
						if (get.name(card) == "sha") return true;
					},
					cardDiscardable(card, player, name) {
						if (name == "phaseDiscard" && get.name(card) == "sha") return false;
					},
				},
			},
			xinfu_jijie: {
				enable: "phaseUse",
				usable: 1,
				audio: 2,
				async content(event, trigger, player) {
					const card = get.bottomCards()[0];
					game.cardsGotoOrdering(card);
					event.card = card;
					const {
						result: { bool, targets },
					} = await player
						.chooseTarget(true)
						.set("ai", (target) => {
							let att = get.attitude(_status.event.player, target);
							if (_status.event.du) {
								if (target.hasSkillTag("nodu")) return 0.5;
								return -att;
							}
							if (att > 0) {
								if (_status.event.player != target) att += 2;
								return att + Math.max(0, 5 - target.countCards("h"));
							}
							return att;
						})
						.set("du", event.card.name == "du")
						.set("createDialog", ["机捷：选择一名角色获得此牌", [card]]);
					if (bool) {
						const target = targets[0];
						player.line(target, "green");
						const gainEvent = target.gain(card, "draw");
						gainEvent.giver = player;
					}
				},
				ai: {
					order: 7.2,
					result: {
						player: 1,
					},
				},
			},
			xinfu_jiyuan: {
				trigger: {
					global: ["dying", "gainAfter", "loseAsyncAfter"],
				},
				audio: 2,
				getIndex(event, player) {
					if (event.name !== "loseAsync") return [event.player];
					else
						return game
							.filterPlayer((current) => current != player && event.getg(current).length > 0)
							.sortBySeat();
				},
				filter(event, player, triggername, target) {
					if (!target.isIn()) return false;
					if (event.name === "dying") return true;
					if (event.giver !== player) return false;
					if (event.name === "gain") {
						return event.player != player && event.getg(target).length > 0;
					}
					return game.hasPlayer((current) => current != player && event.getg(current).length > 0);
				},
				logTarget(event, player, triggername, target) {
					return target;
				},
				check(event, player, triggername, target) {
					return get.attitude(player, target) > 0;
				},
				async content(event, trigger, player) {
					event.targets[0].draw();
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			caocao: "曹操",
			hujia: "护驾",
			hujia_info:
				"主公技，当你需要使用或打出一张【闪】时，你可以令其他魏势力角色选择是否打出一张【闪】。若有角色响应，则你视为使用或打出了一张【闪】。",
			jianxiong: "奸雄",
			jianxiong_info: "当你受到伤害后，你可以获得对你造成伤害的牌。",

			simayi: "司马懿",
			fankui: "反馈",
			fankui_info: "当你受到伤害后，你可以获得伤害来源的一张牌。",
			guicai: "鬼才",
			guicai_info: "一名角色的判定牌生效前，你可以打出一张手牌代替之。",
			guicai_info_guozhan: "一名角色的判定牌生效前，你可以打出一张牌代替之。",

			xiahoudun: "夏侯惇",
			zhangliao: "张辽",
			xuzhu: "许褚",
			guojia: "郭嘉",
			zhenji: "甄宓",
			liubei: "刘备",
			guanyu: "关羽",
			zhangfei: "张飞",
			zhugeliang: "诸葛亮",
			zhaoyun: "赵云",
			machao: "马超",
			huangyueying: "黄月英",
			sunquan: "孙权",
			ganning: "甘宁",
			lvmeng: "吕蒙",
			huanggai: "黄盖",
			zhouyu: "周瑜",
			daqiao: "大乔",
			luxun: "陆逊",
			sunshangxiang: "孙尚香",
			huatuo: "华佗",
			lvbu: "吕布",
			diaochan: "貂蝉",
			huaxiong: "华雄",
			xf_yiji: "伊籍",
			re_yuanshu: "袁术",
			caozhang: "曹彰",

			ganglie: "刚烈",
			tuxi: "突袭",
			luoyi: "裸衣",
			luoyi2: "裸衣",
			tiandu: "天妒",
			yiji: "遗计",
			luoshen: "洛神",
			xinluoshen: "洛神",
			qingguo: "倾国",
			rende: "仁德",
			jijiang: "激将",
			jijiang1: "激将",
			jijiang2: "激将",
			wusheng: "武圣",
			paoxiao: "咆哮",
			guanxing: "观星",
			kongcheng: "空城",
			kongcheng1: "空城",
			longdan: "龙胆",
			longdan1: "龙胆",
			longdan2: "龙胆",
			mashu: "马术",
			mashu2: "马术",
			feiying: "飞影",
			tieji: "铁骑",
			jizhi: "集智",
			qicai: "奇才",
			zhiheng: "制衡",
			jiuyuan: "救援",
			qixi: "奇袭",
			keji: "克己",
			kurou: "苦肉",
			yingzi: "英姿",
			fanjian: "反间",
			guose: "国色",
			liuli: "流离",
			qianxun: "谦逊",
			lianying: "连营",
			xiaoji: "枭姬",
			jieyin: "结姻",
			xinjieyin: "结姻",
			qingnang: "青囊",
			jijiu: "急救",
			wushuang: "无双",
			wushuang1: "无双",
			wushuang2: "无双",
			lijian: "离间",
			biyue: "闭月",
			xinbiyue: "闭月",
			pileTop: "牌堆顶",
			pileBottom: "牌堆底",
			ganglie_info:
				"当你受到伤害后，你可以判定。若结果不为红桃，则伤害来源须弃置两张手牌，否则受到来自你的1点伤害。",
			tuxi_info: "摸牌阶段，你可以改为获得至多两名其他角色的各一张手牌。",
			luoyi_info:
				"摸牌阶段，你可以少摸一张牌。若如此做，当你本回合内使用【杀】或【决斗】造成伤害时，此伤害+1。",
			tiandu_info: "当你的判定牌生效后，你可以获得之。",
			yiji_info: "当你受到1点伤害后，你可以观看牌堆顶的两张牌，然后将其分配给任意角色。",
			luoshen_info:
				"准备阶段，你可以判定。若结果为黑色，你获得判定牌。你可重复此流程，直到出现红色的判定结果。",
			luoshen_info_guozhan:
				"准备阶段，你可以判定。若结果为黑色，则可以继续判定，直到出现红色的判定牌。然后你获得所有黑色的判定牌。（判定结果为黑色的牌在此过程中不会进入弃牌堆）",
			xinluoshen_info:
				"准备阶段，你可以判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌。",
			xinluoshen_info_alter:
				"准备阶段，你可以判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌。你通过洛神获得的牌，不计入当前回合的手牌上限。",
			qingguo_info: "你可以将一张黑色手牌当做【闪】使用或打出。",
			rende_info:
				"出牌阶段，你可以将任意张手牌交给其他角色。当你以此法于一回合内给出第二张牌时，你回复1点体力。",
			jijiang_info:
				"主公技，当你需要使用或打出【杀】时，你可以令其他蜀势力角色依次选择是否打出一张【杀】。若有角色响应，则你视为使用或打出了此【杀】。",
			wusheng_info: "你可以将一张红色牌当做【杀】使用或打出。",
			paoxiao_info: "锁定技，出牌阶段，你使用【杀】没有数量限制。",
			guanxing_info:
				"准备阶段，你可以观看牌堆顶的X张牌，并将其以任意顺序置于牌堆项或牌堆底。（X为存活角色数且至多为5）",
			kongcheng_info: "锁定技，当你没有手牌时，你不能成为【杀】或【决斗】的目标。",
			longdan_info: "你可以将【杀】当做【闪】，或将【闪】当做【杀】使用或打出。",
			mashu_info: "锁定技，你计算与其他角色的距离时-1。",
			mashu2_info: "锁定技，你计算与其他角色的距离时-1。",
			feiying_info: "锁定技，其他角色计算与你的距离时+1。",
			tieji_info: "当你使用【杀】指定目标后，你可以进行判定。若结果为红色，则此【杀】不可被闪避。",
			jizhi_info: "当你使用非转化的普通锦囊牌时，你可以摸一张牌。",
			xinjizhi: "集智",
			xinjizhi_info: "当你使用非转化的普通锦囊牌时，你可以摸一张牌。",
			xinjizhi_info_alter:
				"每当你使用一张非转化的锦囊牌，可以摸一张牌，如果摸到的是基本牌，你可以弃置这张牌，然后本回合手牌上限+1。",
			xinqicai: "奇才",
			xinqicai_info: "锁定技，你使用锦囊牌无距离限制。",
			xinqicai_info_alter: "锁定技，你使用的锦囊牌无距离限制，你装备区内的牌不能被弃置。",
			qicai_info: "锁定技，你使用锦囊牌无距离限制。",
			zhiheng_info: "出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。",
			xinzhiheng: "制衡",
			xinzhiheng_info: "出牌阶段限1次，你可以弃置任意张牌并摸等量的牌。",
			xinzhiheng_info_alter:
				"出牌阶段限1次，你可以弃置任意张牌并摸等量的牌，如果在发动制衡时弃置了所有手牌，你额外摸一张牌。",
			jiuyuan_info: "主公技，锁定技，其他吴势力角色对你使用的【桃】的回复值+1。",
			xinjiuyuan: "救援",
			xinjiuyuan_info: "主公技，锁定技，濒死阶段，吴势力角色对你使用的[桃]额外回复1点体力。",
			xinjiuyuan_info_alter:
				"主公技，其他吴势力角色对自己使用【桃】时，若其体力值大于你，其可以令你回复1点体力，然后其摸一张牌。",
			qixi_info: "你可以将一张黑色牌当做【过河拆桥】使用。",
			keji_info: "弃牌阶段开始时，若你于本回合的出牌阶段内没有使用或打出过【杀】，则你可以跳过此阶段。",
			kurou_info: "出牌阶段，你可以失去1点体力，然后摸两张牌。",
			yingzi_info: "摸牌阶段，你可以多摸一张牌。",
			fanjian_info:
				"出牌阶段限一次。你可以令一名角色选择一种花色，然后其获得你的一张手牌。若其以此法选择的花色与其得到的牌花色不同，则你对其造成1点伤害。",
			guose_info: "你可以将一张方片牌当做【乐不思蜀】使用。",
			liuli_info:
				"当你成为【杀】的目标时，你可以弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色（不能是此【杀】的使用者）。",
			qianxun_info: "锁定技，你不能成为【顺手牵羊】和【乐不思蜀】的目标。",
			lianying_info: "当你失去最后的手牌时，你可以摸一张牌。",
			xiaoji_info: "当你失去一张装备区内的牌后，你可以摸两张牌。",
			jieyin_info:
				"出牌阶段限一次，你可以弃置两张手牌并选择一名已经受伤的男性角色。你与其各回复1点体力。",
			xinjieyin_info:
				"出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复1点体力，每阶段限一次。",
			xinjieyin_old_info:
				"出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复1点体力，每阶段限一次。",
			xinjieyin_new_info:
				"出牌阶段限1次，你可以选择一名男性角色，弃置一张手牌或将一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力。",
			xinjieyin_info_alter:
				"出牌阶段限1次，你可以选择一名男性角色，弃置一张手牌或将一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力。",
			qingnang_info: "出牌阶段限一次，你可以弃置一张手牌并令一名角色回复1点体力。",
			jijiu_info: "你的回合外，你可以将一张红色牌当做【桃】使用。",
			wushuang_info:
				"锁定技，当你使用【杀】或【决斗】指定目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。",
			lijian_info:
				"出牌阶段限一次，你可以弃置一张牌，视为一名男性角色对另一名男性角色使用一张【决斗】（不可被【无懈可击】响应）。",
			biyue_info: "结束阶段，你可以摸一张牌。",
			xinbiyue_info: "结束阶段，你可以摸一张牌。",
			xinbiyue_info_alter: "结束阶段，你可以摸一张牌，如果你没有手牌，改为摸两张牌。",
			yaowu: "耀武",
			yaowu_info: "锁定技，一名角色使用红色【杀】对你造成伤害时，该角色回复1点体力或摸一张牌。",
			new_jiangchi: "将驰",
			new_jiangchi_info:
				"摸牌阶段结束时，你可以选择一项：1、摸一张牌，若如此做，你本回合内不能使用或打出【杀】且【杀】不计入手牌上限。 2、弃置一张牌，若如此做，出牌阶段你使用【杀】无距离限制且你可以额外使用一张【杀】，直到回合结束。",
			xinfu_jijie: "机捷",
			xinfu_jijie_info: "出牌阶段限一次。你可以观看牌堆底的一张牌，然后将其交给一名角色。",
			xinfu_jiyuan: "急援",
			xinfu_jiyuan_info: "当有角色进入濒死状态时，或你将牌交给一名其他角色后，你可以令该角色摸一张牌。",
			ganglie_three: "刚烈",
			ganglie_three_info:
				"当你受到伤害后，你可令一名敌方角色判定。若结果不为♥，其弃置两张牌或受到来自你的1点伤害。",
			zhongyi: "忠义",
			zhongyi2: "忠义",
			zhongyi_info:
				"限定技，出牌阶段，你可以将一张牌置于武将牌上。你的武将牌上有〖忠义〗牌时，己方角色使用【杀】造成的伤害+1。下轮游戏开始时，你将〖忠义〗牌置入弃牌堆。",
			zhanshen: "战神",
			zhanshen_info:
				"觉醒技，准备阶段，若场上有已死亡的其他己方角色且你已受伤，则你弃置装备区的武器牌，减1点体力上限，获得技能〖马术〗和〖神戟〗。",
			shenji: "神戟",
			shenji_info: "锁定技，你使用【杀】指定的目标数上限+2，次数上限+1。",
			rewangzun: "妄尊",
			rewangzun2: "妄尊",
			rewangzun_info:
				"锁定技，一名其他角色的准备阶段开始时，若其体力值大于你，你摸一张牌。然后若其身份为主公/主帅/君主/地主且明置，则你摸一张牌，且其本回合的手牌上限-1。",
			retongji: "同疾",
			retongji_info:
				"攻击范围内包含你的角色成为【杀】的目标时，若你不是此【杀】的使用者或目标，其可弃置一张牌，然后将此【杀】转移给你。",
			std_panfeng: "标潘凤",
			std_panfeng_prefix: "标",
			stdkuangfu: "狂斧",
			stdkuangfu_info:
				"锁定技。出牌阶段限一次。当你使用【杀】对其他角色造成伤害后，若其体力值：小于你，你摸两张牌；不小于你，你失去1点体力。",
			ganfuren: "标甘夫人",
			ganfuren_prefix: "标",
			stdshushen: "淑慎",
			stdshushen_info:
				"当你回复1点体力时，你可以令一名其他角色摸一张牌（若其没有手牌则改为摸两张牌）。",
			old_re_lidian: "李典",
			std_yuejin: "标乐进",
			std_yuejin_prefix: "标",
			stdxiaoguo: "骁果",
			stdxiaoguo_info: "其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌；2.受到你对其造成的1点伤害。",

			standard_2008: "2008版标准包",
			standard_2013: "2013版标准包",
			standard_2019: "2019版标准包",
			standard_2023: "2023版标准包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
