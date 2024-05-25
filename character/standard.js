import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "standard",
		connect: true,
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
				standard_2023: ["std_panfeng", "ganfuren"],
				standard_shaoyin: ["std_sunhao", "std_mateng", "std_mayunlu", "std_jianggan", "std_zhouchu", "std_lvlingqi", "std_dc_yanghu", "std_dc_luotong", "std_lijue", "std_chengpu", "std_db_wenyang", "std_re_dengzhi", "std_zhangyì", "std_chengyu", "std_fanyufeng", "std_feiyi"],
			},
		},
		character: {
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
		perfectPair: {
			xiahoudun: ["xiahouyuan"],
			zhenji: ["caopi"],
			caocao: ["xuzhu", "dianwei", "bianfuren"],
			huangzhong: ["weiyan"],
			zhugeliang: ["jiangwei", "jiangfei", "huangyueying"],
			liubei: ["guanyu", "zhangfei", "ganfuren"],
			zhaoyun: ["liushan"],
			daqiao: ["xiaoqiao"],
			zhouyu: ["huanggai", "xiaoqiao", "zhouyi"],
			sunquan: ["zhoutai"],
			lvbu: ["diaochan", "lvlingqi"],
			machao: ["madai", "mayunlu", "yangwan"],
			zhangliao: ["zangba"],
			ganning: ["lingtong", "xf_sufei"],
			guanyu: ["zhangfei", "liaohua"],
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
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
							return event.target.isDamaged();
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
				filterTarget: true,
				selectTarget: [1, Infinity],
				skillAnimation: true,
				animationColor: "thunder",
				async content(event, trigger, player) {
					player.awakenSkill("stdxiongyi");
					const targets = event.targets.sortBySeat();
					let keep = true;
					while (true) {
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
							if (!result.bool && !keep) break;
							if (targets[targets.length - 1] == target && !keep) keep = true;
						}
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
							if (get.attitude(player, aim) > 0 || get.damageEffect(aim, player, player) < 0) return 0;
							if (aim.countCards("he")) return -5;
							if (player.getDiscardableCards(player, "he").some(card => get.suit(card) == "diamond")) return 1;
							return 0;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const result = await player
						.discardPlayerCard(target, "he", true)
						.set("ai", button => {
							const suit = get.suit(button.link);
							return (suit == "diamond" ? 5 : 1) * get.value(button.link);
						})
						.set("prompt", "凤魄：弃置" + (target != player ? get.translation(target) : "") + "一张牌")
						.set("prompt2", "若弃置了方片牌，则此伤害+1")
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
							return -1 / target.countCards("h");
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
			},
			//周处
			stdxiongxia: {
				audio: "xianghai",
				enable: "chooseToUse",
				filterCard: true,
				selectCard: 2,
				position: "hes",
				viewAs: { name: "juedou" },
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
				trigger: { source: "damageBegin1" },
				logTarget: "player",
				filter: function (event, player) {
					return !event.stdjinjian_source2 && !player.hasSkill("stdjinjian_source2");
				},
				prompt2: "令即将对其造成的伤害+1",
				check: function (event, player) {
					return (
						get.attitude(player, event.player) < 0 &&
						!event.player.hasSkillTag("filterDamage", null, {
							player: player,
							card: event.card,
						})
					);
				},
				usable: 1,
				content: function () {
					trigger.stdjinjian_source = true;
					trigger.num++;
					player.addTempSkill("stdjinjian_source2");
				},
				group: "stdjinjian_player",
				subSkill: {
					player: {
						audio: "jinjian",
						trigger: { player: "damageBegin4" },
						filter: function (event, player) {
							return !event.stdjinjian_player2 && !player.hasSkill("stdjinjian_player2");
						},
						prompt2: "令即将受到的伤害-1",
						usable: 1,
						content: function () {
							trigger.stdjinjian_player = true;
							trigger.num--;
							player.addTempSkill("stdjinjian_player2");
						},
					},
					source2: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.stdjinjian_source;
						},
						content: function () {
							trigger.num--;
							trigger.stdjinjian_source2 = true;
							player.removeSkill("stdjinjian_source2");
						},
						marktext: " -1 ",
						intro: {
							content: "下次造成的伤害-1",
						},
					},
					player2: {
						trigger: { player: "damageBegin3" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.stdjinjian_player;
						},
						content: function () {
							trigger.num++;
							trigger.stdjinjian_player2 = true;
							player.removeSkill("stdjinjian_player2");
						},
						marktext: " +1 ",
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
							if (player.hasSkillTag("jueqing")) return;
							if (player._stdjinjian_tmp) return;
							const count = player.storage.counttrigger;
							if (count && count.stdjinjian_player && count.stdjinjian_player > 0) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (get.tag(card, "damage")) {
								if (target.hasSkill("stdjinjian_player2")) {
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
							[1, Infinity]
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
						const bool = await target.chooseBool("是否令" + get.translation(player) + "回复1点体力？").forResult("bool");
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
							[1, Infinity]
						)
						.set("ai", target => {
							const player = get.event("player");
							return get.effect(target, { name: "draw" }, player, player);
						});
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
				filter(event, player) {
					return game.hasPlayer(target => {
						return target.getDiscardableCards(player, "e").some(card => parseInt(get.subtype(card).slice("equip".length)) <= 2);
					});
				},
				filterTarget(card, player, target) {
					if (!ui.selected.targets.length) {
						return target.getDiscardableCards(player, "e").some(card => parseInt(get.subtype(card).slice("equip".length)) <= 2);
					}
					const cards = ui.selected.targets[0]
						.getDiscardableCards(player, "e")
						.filter(card => parseInt(get.subtype(card).slice("equip".length)) <= 2)
						.map(card => get.subtype(card));
					if (cards.length == 2) {
						return target.getDiscardableCards(player, "e").some(card => parseInt(get.subtype(card).slice("equip".length)) <= 2);
					}
					let Tcards = target
						.getDiscardableCards(player, "e")
						.filter(card => parseInt(get.subtype(card).slice("equip".length)) <= 2)
						.map(card => get.subtype(card));
					Tcards.removeArray(cards);
					return Tcards.length;
				},
				selectTarget: [1, 2],
				complexTarget: true,
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					const targets = event.targets.slice();
					if (targets.length == 1) {
						await player.discardPlayerCard("e", targets[0], true);
						return;
					}
					let discardedType = [];
					for (let i = 0; i < 2; i++) {
						const target = targets[i],
							other = targets[1 - i];
						let cards = target
							.getDiscardableCards(player, "e")
							.filter(card => parseInt(get.subtype(card).slice("equip".length)) <= 2)
							.map(card => get.subtype(card));
						const Tcards = other
							.getDiscardableCards(player, "e")
							.filter(card => parseInt(get.subtype(card).slice("equip".length)) <= 2)
							.map(card => get.subtype(card));
						cards.removeArray(i == 0 ? (Tcards.length == 2 ? [] : Tcards) : discardedType);
						if (!cards.length) continue;
						const result = await player
							.discardPlayerCard("e", target, true)
							.set("filterButton", button => {
								return get.event("cards").includes(get.subtype(button.link));
							})
							.set("cards", cards)
							.forResult();
						if (result.bool) {
							discardedType.addArray(
								result.cards.reduce((list, card) => {
									return list.add(get.subtype(card));
								}, [])
							);
						}
					}
				},
				ai: {
					order: 10,
					result: { target: -1 },
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
					effect: {
						target(card, player, target) {
							if (target.countCards("e")) return;
							if (target == player && get.type(card) == "equip" && get.equipValue(card) < 5) return 0;
							if (get.type2(card) == "trick") return [1, 2];
						},
					},
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
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result - get.value(card) / 2;
							} else {
								return -result - get.value(card) / 2;
							}
						})
						.set("judging", trigger.player.judging[0])
						.setHiddenSkill("guicai");
					if (bool) event.result = { bool, cost_data: { cards } };
				},
				//技能的logSkill跟着打出牌走 不进行logSkill
				popup: false,
				async content(event, trigger, player) {
					const chooseCardResultCards = event.cost_data.cards;
					player.respond(chooseCardResultCards, "guicai", "highlight", "noOrdering");
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
				filter(event) {
					return (
						event.card &&
						(event.card.name == "sha" || event.card.name == "juedou") &&
						event.notLink()
					);
				},
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
				shaRelated: true,
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
						return 8 - get.value(card);
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
						.setHiddenSkill(event.name)
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.logSkill(event.name, target);
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
						target(card) {
							if (card.name == "guohe" || card.name == "liuxinghuoyu") return 0.5;
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
				shaRelated: true,
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
					halfneg: true,
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
		characterReplace: {
			caocao: ["caocao", "re_caocao", "sb_caocao", "dc_caocao"],
			guojia: ["guojia", "re_guojia", "ps1059_guojia", "ps2070_guojia"],
			simayi: ["simayi", "re_simayi", "jsrg_simayi", "ps_simayi", "ps2068_simayi"],
			jin_simayi: ["jin_simayi", "junk_simayi", "ps_jin_simayi"],
			zhenji: ["zhenji", "re_zhenji", "sb_zhenji", "yj_zhenji"],
			xuzhu: ["xuzhu", "re_xuzhu"],
			zhangliao: ["zhangliao", "re_zhangliao"],
			sp_zhangliao: ["sp_zhangliao", "yj_zhangliao", "jsrg_zhangliao"],
			xiahoudun: ["xiahoudun", "re_xiahoudun", "xin_xiahoudun", "sb_xiahoudun"],
			liubei: ["liubei", "re_liubei", "sb_liubei", "dc_liubei", "junk_liubei"],
			guanyu: [
				"guanyu",
				"re_guanyu",
				"ol_sb_guanyu",
				"sb_guanyu",
				"ps_guanyu",
				"old_guanyu",
				"junk_guanyu",
			],
			zhangfei: [
				"zhangfei",
				"re_zhangfei",
				"old_zhangfei",
				"xin_zhangfei",
				"sb_zhangfei",
				"tw_zhangfei",
				"jsrg_zhangfei",
				"yj_zhangfei",
			],
			zhaoyun: [
				"zhaoyun",
				"re_zhaoyun",
				"old_zhaoyun",
				"sb_zhaoyun",
				"jsrg_zhaoyun",
				"ps2063_zhaoyun",
				"ps2067_zhaoyun",
			],
			sp_zhaoyun: ["sp_zhaoyun", "jsp_zhaoyun"],
			machao: ["machao", "re_machao", "sb_machao", "ps_machao"],
			sp_machao: ["sp_machao", "dc_sp_machao", "jsrg_machao", "old_machao"],
			zhugeliang: [
				"zhugeliang",
				"re_zhugeliang",
				"sb_zhugeliang",
				"ps2066_zhugeliang",
				"ps_zhugeliang",
			],
			huangyueying: ["huangyueying", "re_huangyueying", "junk_huangyueying", "sb_huangyueying"],
			sunquan: ["sunquan", "re_sunquan", "sb_sunquan", "dc_sunquan"],
			zhouyu: ["zhouyu", "re_zhouyu", "dc_sb_zhouyu", "sb_zhouyu", "ps1062_zhouyu", "ps2080_zhouyu"],
			luxun: ["luxun", "re_luxun", "jsrg_luxun"],
			lvmeng: ["lvmeng", "re_lvmeng", "sb_lvmeng"],
			huanggai: ["huanggai", "re_huanggai", "sb_huanggai"],
			daqiao: ["daqiao", "re_daqiao", "sb_daqiao"],
			sunshangxiang: ["sunshangxiang", "re_sunshangxiang", "sb_sunshangxiang", "jsrg_sunshangxiang"],
			ganning: ["ganning", "re_ganning", "sb_ganning", "yongjian_ganning"],
			yj_ganning: ["yj_ganning", "sp_ganning"],
			lvbu: ["lvbu", "re_lvbu", "jsrg_lvbu", "ps_lvbu"],
			diaochan: ["diaochan", "re_diaochan", "sb_diaochan"],
			huatuo: ["huatuo", "re_huatuo", "old_huatuo"],
			huaxiong: ["huaxiong", "re_huaxiong", "old_huaxiong", "sb_huaxiong", "ol_huaxiong"],
			yuanshu: ["yuanshu", "re_yuanshu", "yl_yuanshu", "old_yuanshu", "ol_yuanshu", "star_yuanshu"],
			gongsunzan: ["gongsunzan", "re_gongsunzan", "dc_gongsunzan", "xin_gongsunzan", "sb_gongsunzan"],
			re_lidian: ["re_lidian", "old_re_lidian", "junk_lidian"],
			sunhao: ["sunhao", "std_sunhao"],
			lvlingqi: ["lvlingqi", "std_lvlingqi"],
			chengyu: ["chengyu", "std_chengyu"],
			fanyufeng: ["fanyufeng", "std_fanyufeng"],
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
			keji_info:
				"弃牌阶段开始时，若你于本回合的出牌阶段内没有过使用或打出过【杀】，则你可以跳过此阶段。",
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
			std_panfeng: "潘凤",
			stdkuangfu: "狂斧",
			stdkuangfu_info:
				"锁定技。出牌阶段限一次。当你使用【杀】对其他角色造成伤害后，若其体力值：小于你，你摸两张牌；不小于你，你失去1点体力。",
			ganfuren: "甘夫人",
			stdshushen: "淑慎",
			stdshushen_info:
				"当你回复1点体力时，你可以令一名其他角色摸一张牌（若其没有手牌则改为摸两张牌）。",
			old_re_lidian: "李典",
			
			std_sunhao: "少阴孙皓",
			std_mateng: "少阴马腾",
			std_mayunlu: "少阴马云騄",
			std_jianggan: "少阴蒋干",
			std_zhouchu: "少阴周处",
			std_lvlingqi: "少阴吕玲绮",
			std_dc_yanghu: "少阴羊祜",
			std_dc_luotong: "少阴骆统",
			std_lijue: "少阴李傕",
			std_chengpu: "少阴程普",
			std_db_wenyang: "少阴文鸯",
			std_re_dengzhi: "少阴邓芝",
			std_zhangyì: "少阴张翼",
			std_chengyu: "少阴程昱",
			std_fanyufeng: "少阴樊玉凤",
			std_feiyi: "少阴费祎",
			std_sunhao_prefix: "少阴",
			std_mateng_prefix: "少阴",
			std_mayunlu_prefix: "少阴",
			std_jianggan_prefix: "少阴",
			std_zhouchu_prefix: "少阴",
			std_lvlingqi_prefix: "少阴",
			std_dc_yanghu_prefix: "少阴",
			std_dc_luotong_prefix: "少阴",
			std_lijue_prefix: "少阴",
			std_chengpu_prefix: "少阴",
			std_db_wenyang_prefix: "少阴",
			std_re_dengzhi_prefix: "少阴",
			std_zhangyì_prefix: "少阴",
			std_chengyu_prefix: "少阴",
			std_fanyufeng_prefix: "少阴",
			std_feiyi_prefix: "少阴",
			stdcanshi: "残蚀",
			stdcanshi_info: "锁定技，摸牌阶段，你改为摸X张牌（X为场上的已受伤角色且X至少为1）。然后本回合你使用【杀】或普通锦囊牌指定目标后，你弃置一张牌。",
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
			stdxiongxia_info: "你可以将两张牌当作【决斗】使用。你以此法使用的【决斗】结算完毕后，若所有目标角色都受到了此牌造成的伤害，则〖凶侠〗于本回合失效。",
			stdhuizhan: "挥战",
			stdhuizhan_info: "你使用【杀】可以额外指定至多两个目标。若如此做，目标角色响应此【杀】时，其他目标角色可以代替其使用【闪】。",
			stdmingfa: "明伐",
			stdmingfa_info: "出牌阶段，你可以对一名体力值大于1的角色造成1点伤害，然后此技能失效直至其死亡或回复体力。",
			stdjinjian: "进谏",
			stdjinjian_info: "每回合每项各限一次，当你造成/受到伤害时，你可令此伤害+1/-1，然后你本回合内下一次造成的伤害-1/+1且不能触发〖进谏〗。",
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
			stdtiaohe_info: "出牌阶段限一次，你可以弃置场上的一张装备牌和一张防具牌（不能为同一名角色装备区的牌）。",
			stdqiansu: "谦素",
			stdqiansu_info: "当你成为锦囊牌的目标后，若你的装备区没有牌，则你可以摸一张牌。",

			standard_2008: "2008版标准包",
			standard_2013: "2013版标准包",
			standard_2019: "2019版标准包",
			standard_2023: "2023版标准包",
			standard_shaoyin: "四象封印·少阴",
			// standard_shaoyang: "四象封印·少阳",
			// standard_taiyin: "四象封印·太阴",
			// standard_taiyang: "四象封印·太阳",
		},
	};
});
