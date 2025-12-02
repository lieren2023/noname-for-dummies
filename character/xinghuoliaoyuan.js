import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "xinghuoliaoyuan",
		connect: true,
		connectBanned: [
			
		],
		character: {
			zhangxingcai: ["female", "shu", 3, ["shenxian", "qiangwu"]],
			caoang: ["male", "wei", 4, ["kaikang"]],
			zhugedan: ["male", "wei", 4, ["gongao", "juyi"]],
			buzhi: ["male", "wu", 3, ["hongde", "dingpan"]],
			liuxie: ["male", "qun", 3, ["tianming", "mizhao", "twzhuiting"], ["zhu"]],
			dongyun: ["male", "shu", 3, ["bingzheng", "sheyan"]],
			simalang: ["male", "wei", 3, ["junbing", "quji"]],
			zhugejin: ["male", "wu", 3, ["huanshi", "olhongyuan", "olmingzhe"]],
			zhanglu: ["male", "qun", 3, ["yishe", "bushi", "midao", "twshijun"], ["zhu"]],
			sunqian: ["male", "shu", 3, ["qianya", "shuimeng"]],
			xizhicai: ["male", "wei", 3, ["tiandu", "xianfu", "chouce"]],
			sp_sunshangxiang: ["female", "shu", 3, ["liangzhu", "fanxiang"]],
			sp_caiwenji: ["female", "wei", 3, ["chenqing", "mozhi"]],
			sp_jiangwei: ["male", "wei", 4, ["kunfen", "fengliang"]],
			sp_pangde: ["male", "wei", 4, ["mashu", "juesi"]],
			jsp_huangyueying: ["female", "qun", 3, ["jiqiao", "linglong"]],
			mizhu: ["male", "shu", 3, ["ziyuan", "jugu"]],
			mazhong: ["male", "shu", 4, ["fuman"]],
			wenpin: ["male", "wei", 4, ["zhenwei"]],
			heqi: ["male", "wu", 4, ["olqizhou", "olshanxi"]],
			guanyinping: ["female", "shu", 3, ["huxiao", "xueji", "wuji"]],
			mayunlu: ["female", "shu", 4, ["fengpo", "mashu"]],
			zumao: ["male", "wu", 4, ["yinbing", "juedi"]],
			tadun: ["male", "qun", 4, ["reluanzhan"]],

			wangcan: ["male", "qun", 3, ["xinfu_sanwen", "xinfu_qiai", "xinfu_denglou"]],
			sp_taishici: ["male", "qun", 4, ["xinfu_jixu"]],
			re_jsp_pangtong: ["male", "wu", 3, ["xinfu_guolun", "xinfu_songsang"]],
			lvdai: ["male", "wu", 4, ["xinfu_qinguo"]],
			re_zhangliang: ["male", "qun", 4, ["xinfu_jijun", "xinfu_fangtong"]],
			lvqian: ["male", "wei", 4, ["xinfu_weilu", "xinfu_zengdao"]],
			panjun: ["male", "wu", 3, ["xinfu_guanwei", "xinfu_gongqing"]],
			duji: ["male", "wei", 3, ["xinfu_andong", "xinfu_yingshi"]],
			zhoufang: ["male", "wu", 3, ["xinfu_duanfa", "xinfu_youdi"]],
			yanjun: ["male", "wu", 3, ["xinfu_guanchao", "xinfu_xunxian"]],
			liuyao: ["male", "qun", 4, ["xinfu_kannan", "twniju"], ["zhu"]],
			liuyan: ["male", "qun", 3, ["xinfu_tushe", "xinfu_limu"]],
			
			star_xunyu: ["male", "wei", 3, ["staranshu", "starkuangzuo"], ["clan:颍川荀氏"]],
			star_zhangzhao: ["male", "wu", 3, ["starzhongyan", "starjinglun"]],
			star_sunjian: ["male", "qun", "4/5", ["starruijun", "stargangyi"]],
			star_zhangchunhua: ["female", "wei", 3, ["starliangyan", "starminghui"]],
			star_yuanshao: [
				"male",
				"qun",
				4,
				["starxiaoyan", "starzongshi", "starjiaowang", "staraoshi"],
				["zhu"],
			],
			star_dongzhuo: ["male", "qun", 5, ["starweilin", "starzhangrong", "starhaoshou"], ["zhu"]],
			star_yuanshu: ["male", "qun", 4, ["starcanxi", "starpizhi", "starzhonggu"], ["zhu"]],
			star_caoren: ["male", "wei", 4, ["starsujun", "starlifeng"]],
			star_sunshangxiang: ["female", "wu", 3, ["starsaying", "starjiaohao"]],
		},
		characterSort: {
			xinghuoliaoyuan: {
				// 分包调整（by棘手怀念摧毁）
				xinghuoliaoyuan_tianfu: ["zhangxingcai", "caoang", "zhugedan", "buzhi", "liuxie"],
				xinghuoliaoyuan_tianliang: ["dongyun", "simalang", "duji", "zhugejin", "liuyan", "zhanglu", "yanjun"],
				xinghuoliaoyuan_tianji: ["sunqian", "xizhicai", "panjun", "wangcan"],
				xinghuoliaoyuan_tiantong: ["sp_sunshangxiang", "sp_caiwenji", "sp_jiangwei", "sp_pangde", "re_jsp_pangtong", "jsp_huangyueying", "sp_taishici"],
				xinghuoliaoyuan_tianxiang: ["mizhu", "mazhong", "wenpin", "zhoufang", "heqi", "lvdai", "liuyao"],
				xinghuoliaoyuan_qisha: ["guanyinping", "mayunlu", "lvqian", "zumao", "tadun", "re_zhangliang"],
				
				xinghuoliaoyuan_tianshu: ["star_yuanshu", "star_dongzhuo", "star_yuanshao"],
				xinghuoliaoyuan_tianxuan: ["star_xunyu", "star_zhangzhao"],
				// xinghuoliaoyuan_bdtianji: [],
				// xinghuoliaoyuan_tianquan: [],
				xinghuoliaoyuan_yuheng: ["star_caoren", "star_zhangchunhua"],
				xinghuoliaoyuan_kaiyang: ["star_sunjian"],
				xinghuoliaoyuan_yaoguang: ["star_sunshangxiang"],
				
				// xinghuoliaoyuan_waitforsort: [],
				
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			wangcan:
				"王粲（177年－217年2月17日），字仲宣。山阳郡高平县（今山东微山两城镇）人。东汉末年文学家，“建安七子”之一，太尉王龚曾孙、司空王畅之孙。",
			re_jsp_pangtong:
				"庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
			lvdai: "吕岱（161年－256年），字定公，广陵海陵（今江苏如皋）人。三国时期吴国重臣、将领。吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年（256年），吕岱去世，年九十六。",
			lvqian: "吕虔（生卒年不详），字子恪。任城国（今山东济宁东南）人。汉末至三国曹魏时期将领。 吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。被推举为秀才，加任骑都尉，仍管辖泰山郡。 曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。再升任徐州刺史，加任威虏将军。任用王祥为别驾，将民政事务都委托于他，为世人所称赞。曹叡继位后，改封万年亭侯。吕虔死后，其子吕翻世袭万年亭侯。",
			panjun: "潘濬（一作潘浚）（？－239年），字承明。武陵郡汉寿县（今湖南汉寿）人。三国时期吴国重臣，蜀汉大司马蒋琬的表弟。 潘濬为人聪察，对问有机理，拜大儒宋忠为师，得到“建安七子”之一的王粲赏识。不到三十，即被荆州牧刘表任命为江夏从事，因按杀贪污的沙羡长而闻名。建安十六年（211年），被刘备任命为荆州治中从事，与守臣关羽不睦。建安二十四年（219年），孙权得荆州，拜潘濬为辅军中郎将。又迁奋威将军，封常迁亭侯。孙权称帝后，拜少府，进封刘阳侯，又改太常。黄龙三年（231年），授假节，与吕岱率军五万平五溪蛮夷叛乱，经三年而斩获数万，使得一方宁静。潘濬为人刚正不阿，在吕壹弄权时，屡请孙权将其诛杀。甚至想亲手击杀吕壹，使吕壹对他非常畏惧。 赤乌二年（239年），潘濬去世。",
			duji: "杜畿（163年—224年），字伯侯，京兆杜陵（今陕西西安东南）人。东汉末及三国时曹魏官吏及将领。西汉御史大夫杜延年的后代。历官郡功曹、守郑县令，善于断案。荀彧将他举荐给曹操，曹操任命他为司空司直，调任护羌校尉，使持节领西平太守。 曹丕受禅登基后，封杜畿为丰乐亭侯。官至尚书仆射。后在陶河试航时遇上大风沉没，杜畿淹死，死时六十二岁，曹丕为之涕泣，追赠其为太仆，谥戴侯。",
			zhoufang:
				"周鲂（生卒年不详），字子鱼。吴郡阳羡县（今江苏宜兴）人。三国时期吴国将领。周鲂年少时好学，被举为孝廉。历任宁国县长、怀安县长、钱塘侯相，一月之内，便斩杀作乱的彭式及其党羽，因而升任丹阳西部都尉。彭绮率数万人反叛时，周鲂被任命为鄱阳太守，与胡综共同将其生擒，因功加职昭义校尉。后诈降曹休，诱其率军接应，使曹休在石亭之战中一败涂地，战后因功被加职为裨将军，封关内侯。贼帅董嗣凭险骚扰豫章等郡，周鲂派间谍将其诱杀，不费兵卒即安定数郡。周鲂在鄱阳赏罚分明、恩威并施，于任职十三年后去世。",
			yanjun: "严畯（生卒年不详），字曼才，彭城（治今江苏徐州）人，三国时期孙吴官员、学者。性情忠厚，待人以诚。少好学，精通《诗》、《书》、《三礼》，又好《说文》。避乱江东，与诸葛瑾、步骘是好朋友，被张昭推荐给孙权作骑都尉、从事中郎。建安二十二年（217年），横江将军鲁肃去世，孙权打算让严畯接替其位。严畯很有自知之明，知道自己没有能力对抗在荆州的关羽和北面的曹魏，便坚决不接受此任命。后来担任尚书令。严畯享年七十八岁。著有《孝经传》、《潮水论》。",
			liuyao: "刘繇（一读yóu）（156年－197年），字正礼。东莱牟平（今山东牟平）人。东汉末年宗室、大臣，汉末群雄之一，齐悼惠王刘肥之后，太尉刘宠之侄。<br>刘繇最初被推举为孝廉，授郎中。任下邑县长时，因拒郡守请托而弃官。后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。兴平元年（194年），被任命为扬州刺史。他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。此后，刘繇又击破反叛的笮融，旋即病逝，年四十二。",
			liuyan: "刘焉（？－194年），字君郎（《华阳国志》又作君朗）。江夏郡竟陵县（今湖北省天门市）人。东汉末年宗室、军阀，汉末群雄之一，西汉鲁恭王刘余之后。<br>刘焉初以汉朝宗室身份，拜为中郎，历任雒阳令、冀州刺史、南阳太守、宗正、太常等官。因益州刺史郄俭在益州大肆聚敛，贪婪成风，加上当时天下大乱。刘焉欲取得一安身立命之所，割据一方，于是向朝廷求为益州牧，封阳城侯，前往益州整饬吏治。郄俭为黄巾军所杀，刘焉进入益州，派张鲁盘踞汉中，张鲁截断交通，斩杀汉使，从此益州与中央道路不通。刘焉进一步对内打击地方豪强，巩固自身势力，益州因而处于半独立的状态。兴平元年（194年），刘焉因背疮迸发而逝世，其子刘璋继领益州牧。",
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
			// 部分武将代码位于sp.js、sp2.js
			
			//荀彧
			staranshu: {
				audio: 2,
				trigger: {
					global: "roundStart",
				},
				filter(event, player) {
					return game.roundNumber > 1;
				},
				async cost(event, trigger, player) {
					game.players.forEach(current => current.removeSkill("staranshu_remove"));
					const cards = Array.from(ui.discardPile.childNodes).filter(card => get.type(card) == "basic");
					if (cards.length) {
						const result = await player
							.chooseButton([get.prompt2("staranshu"), cards], [1, Infinity])
							.set("filterButton", button => {
								// 临时修改（by 棘手怀念摧毁）
								if (ui.selected.buttons && ui.selected.buttons.some(buttonx => buttonx.link.name == button.link.name)) return false;
								// if (ui.selected.buttons?.some(buttonx => buttonx.link.name == button.link.name)) return false;
								return true;
							})
							.set("ai", card => Math.random())
							.forResult();
						event.result = {
							bool: result.bool,
							cards: result.links,
						};
					}
					else event.result = { bool: false };
				},
				async content(event, trigger, player) {
					game.players.forEach(current => current.addTempSkill("staranshu_remove", "roundStart"));
					await game.cardsGotoPile(event.cards, "insert");
					player
						.when({ global: "useCardToTargeted" })
						// 临时修改（by 棘手怀念摧毁）
						.filter(evt => evt && evt.card && evt.card.anshu && evt.targets && evt.getParent() && evt.getParent().triggeredTargets4 && evt.targets.length == evt.getParent().triggeredTargets4.length)
						// .filter(evt => evt.card?.anshu && evt?.targets?.length == evt.getParent()?.triggeredTargets4?.length)
						.then(() => {
							delete trigger.card.anshu;
							const targets = game.filterPlayer(current => current == player || current.isDamaged());
							if (targets.length > 1) {
								player
									.chooseTarget("请选择【五谷丰登】的起点", true, function (card, player, target) {
										return get.event("targets").includes(target);
									})
									.set("targets", targets)
									.set("ai", target => {
										return get.attitude(get.player(), target);
									});
							}
						})
						.then(() => {
							let target = player;
							// 临时修改（by 棘手怀念摧毁）
							if (result && result.targets) target = result.targets[0];
							// if (result?.targets) target = result.targets[0];
							trigger.getParent().targets = trigger.getParent().targets.sortBySeat(target);
							trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.sortBySeat(target);
						});
					await player.chooseUseTarget({ name: "wugu", isCard: true, anshu: true }, true);
				},
				group: "staranshu_draw",
				subSkill: {
					draw: {
						audio: "staranshu",
						trigger: {
							global: "phaseEnd",
						},
						getIndex(event, player) {
							return game.filterPlayer(current => {
								return current.hasHistory("lose", evt => {
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes("staranshu")) return true;
									}
									return false;
								});
							}).sortBySeat();
						},
						filter(event, player, name, target) {
							return target.countCards("h") < target.maxHp;
						},
						logTarget(event, player, name, target) {
							return target;
						},
						check(event, player, name, target) {
							return get.attitude(player, target) > 0;
						},
						prompt2: "令其将手牌摸至体力上限（至多摸五张）",
						async content(event, trigger, player) {
							const target = event.targets[0];
							const num = Math.min(5, target.maxHp - target.countCards("h"));
							if (num > 0) await target.draw(num);
						},
					},
					remove: {
						trigger: {
							player: "gainAfter",
						},
						filter(event, player) {
							return event.getParent("staranshu", true) && event.getParent("wugu", true);
						},
						charlotte: true,
						direct: true,
						onremove(player) {
							player.removeGaintag("staranshu");
						},
						async content(event, trigger, player) {
							player.addGaintag(trigger.cards, "staranshu");
						},
					},
				},
			},
			starkuangzuo: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "water",
				filterTarget: true,
				async content(event, trigger, player) {
					player.awakenSkill("starkuangzuo");
					const target = event.target;
					await target.addSkills("starchengfeng");
					if (target.isZhu2() && !target.getSkills(null, false, false).filter(skill => {
						var info = get.info(skill);
						if (!info || info.charlotte || !info.zhuSkill || get.skillInfoTranslation(skill, player).length == 0) return false;
						return true;
					}).length) await target.addSkills("startongyin");
					const targets = game.filterPlayer(current => current != target && current.countCards("he"));
					let targetx;
					if (!targets.length) return;
					else if (targets.length == 1) targetx = targets[0];
					else {
						const result = await player
							.chooseTarget(`令另一名角色将牌置于${get.translation(target)}武将牌上`, true, function (card, player, target) {
								return target != get.event("gainer") && target.countCards("he");
							})
							.set("gainer", target)
							.set("ai", target => {
								return get.attitude(get.player(), target) * target.countCards("he");
							})
							.forResult();
						if (result.bool) targetx = result.targets[0];
						else return;
					}
					let suits = [];
					for (let card of targetx.getCards("he")) suits.add(get.suit(card));
					const result = await targetx
						.chooseCard("he", true, suits.length)
						.set("complexCard", true)
						.set("filterCard", card => {
							return ui.selected.cards.every(cardx => get.suit(cardx) != get.suit(card));
						})
						.forResult();
					if (result.bool) {
						const next = target.addToExpansion(result.cards, targetx, "give");
						next.gaintag.add("starchengfeng");
						await next;
					}
				},
				ai: {
					order: 10,
					result: {
						target: 1,
					},
				},
				derivation: ["starchengfeng", "startongyin"],
			},
			starchengfeng: {
				marktext: "匡",
				intro: {
					name: "匡祚",
					markcount: "expansion",
					content: "expansion",
				},
				audio: 2,
				usable: 1,
				enable: "chooseToUse",
				filter(event, player) {
					for (const name of ["shan", "wuxie"]) {
						if (name == "wuxie") {
							let info = event.info_map;
							if (info && player != info.target) continue;
						}
						else if (!event.respondTo) continue;
						const color = name == "shan" ? "red" : "black";
						if (!event.filterCard(get.autoViewAs({ name: name }, "unsure"), player, event)) continue;
						if (player.getExpansions("starchengfeng").some(card => get.color(card) == color)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog("承奉", player.getExpansions("starchengfeng"), "hidden");
					},
					filter(button, player) {
						const card = button.link;
						if (!game.checkMod(card, player, "unchanged", "cardEnabled2", player)) return false;
						const evt = _status.event.getParent();
						const name = get.color(card) == "red" ? "shan" : "wuxie";
						return evt.filterCard(get.autoViewAs({ name: name }, [card]), player, evt);
					},
					check: function (button) {
						if (_status.event.getParent().type != "phase") return 1;
						var player = _status.event.player;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup: function (links, player) {
						return {
							audio: "starchengfeng",
							selectCard: -1,
							position: "x",
							filterCard: card => card == lib.skill.starchengfeng_backup.card,
							viewAs(cards, player) {
								const name = get.color(cards[0]) == "red" ? "shan" : "wuxie";
								return { name: name };
							},
							card: links[0],
						};
					},
					prompt: function (links, player) {
						return "将一张基本牌当做" + get.translation(links[0][2]) + "使用";
					},
				},
				hiddenCard: function (player, name) {
					const color = name == "shan" ? "red" : "black";
					if (player.getExpansions("starchengfeng").some(card => get.color(card) == color)) return true;
				},
				ai: {
					respondShan: true,
					skillTagFilter: function (player, tag) {
						if (player.getExpansions("starchengfeng").some(card => get.color(card) == "red")) return true;
					},
					order: 1,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
				group: "starchengfeng_use",
				subSkill: {
					backup: {},
					use: {
						trigger: { player: "useCardAfter" },
						filter(event, player) {
							let colors = [];
							for (let card of player.getExpansions("starchengfeng")) colors.add(get.color(card));
							return event.skill == "starchengfeng_backup" && colors.length < 2;
						},
						prompt2: "将牌堆顶一张牌置入“匡祚”",
						content() {
							player.addToExpansion(get.cards(1), "gain2").gaintag.add("starchengfeng");
						},
					},
				},
			},
			startongyin: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				filter(event, player) {
					if (!event.source || !event.card) return false;
					if (event.source == player) return false;
					// 临时修改（by 棘手怀念摧毁）
					if (event.source.group == player.group) return event.cards && event.cards.length;
					// if (event.source.group == player.group) return event.cards?.length;
					return event.source.countCards("he");
				},
				zhuSkill: true,
				logTarget: "source",
				async content(event, trigger, player) {
					let next;
					if (trigger.source.group == player.group) next = player.addToExpansion(trigger.cards, "gain2");
					else {
						const result = await player
							.choosePlayerCard(trigger.source, "he", true)
							.forResult();
						next = player.addToExpansion(result.cards, trigger.source, "give");
					}
					next.gaintag.add("starchengfeng");
					await next;
				},
			},
			
			xinyingshi: {
				audio: "xinfu_yingshi",
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return (
						player.countCards("he") > 0 &&
						!game.hasPlayer(function (current) {
							return current.getExpansions("xinyingshi_cards").length > 0;
						})
					);
				},
				content: function () {
					"step 0";
					player.chooseCardTarget({
						filterCard: true,
						filterTarget: lib.filter.notMe,
						selectCard: [1, player.countCards("he")],
						position: "he",
						prompt: get.prompt("xinyingshi"),
						prompt2: "将任意张牌置于一名其他角色的武将牌上作为“酬”",
						ai1: function (card) {
							return 1 - player.getUseValue(card);
						},
						ai2: function (target) {
							var player = _status.event.player;
							return (
								(1 +
									game.countPlayer(function (current) {
										return (
											get.attitude(player, current) > 0 &&
											current.inRange(target) &&
											get.damageEffect(target, current, player) > 0
										);
									})) *
								-get.attitude(player, target)
							);
						},
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0],
							cards = result.cards;
						player.logSkill("xinyingshi", target);
						target.addSkill("xinyingshi_cards");
						target.addToExpansion(player, "give", cards).gaintag.add("xinyingshi_cards");
						target.storage.xinyingshi_source = player;
					}
				},
				subSkill: {
					cards: {
						trigger: { player: "damageSource" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return (
								event.source &&
								event.source.isIn() &&
								event.card &&
								event.getParent().type == "card" &&
								player.getExpansions("xinyingshi_cards").length
							);
						},
						logTarget: "source",
						content: function () {
							"step 0";
							event.target = trigger.source;
							event.target.chooseButton([
								"应势：请选择你的赏金",
								player.getExpansions("xinyingshi_cards"),
							]);
							"step 1";
							if (result.bool) {
								var cards = [result.links[0]];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var card = ui.cardPile.childNodes[i];
									if (card.number == cards[0].number && card.suit == cards[0].suit)
										cards.push(card);
								}
								player.$give(cards[0], target);
								if (cards.length > 1) {
									setTimeout(function () {
										target.$gain2(cards.slice(1));
									}, get.delayx(200, 200));
									game.log(target, "从牌堆获得了", cards.slice(1));
								}
								game.delay(0, get.delayx(500, 500));
								target.gain(cards);
							}
							"step 2";
							if (!player.getExpansions("xinyingshi_cards").length)
								player.removeSkill("xinyingshi_cards");
						},
						marktext: "酬",
						intro: {
							content: "expansion",
							markcount: "expansion",
						},
						ai: { threaten: 3 },
						group: "xinyingshi_regain",
						onremove: function (player, skill) {
							var cards = player.getExpansions(skill);
							if (cards.length) player.loseToDiscardpile(cards);
							delete player.storage.xinyingshi_source;
						},
					},
					regain: {
						trigger: { player: "die" },
						forced: true,
						charlotte: true,
						forceDie: true,
						filter: function (event, player) {
							return (
								player.storage.xinyingshi_source &&
								player.storage.xinyingshi_source.isIn() &&
								player.getExpansions("xinyingshi_cards").length > 0
							);
						},
						content: function () {
							player.storage.xinyingshi_source.gain(
								player.getExpansions("xinyingshi_cards"),
								player,
								"give",
								"bySelf"
							);
						},
					},
				},
			},
			xinfu_guolun: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(target, true, "h");
					"step 1";
					event.cardt = result.cards[0];
					target.showCards(event.cardt);
					player.chooseCard("he").set("ai", function (card) {
						var event = _status.event.getParent(),
							player = event.player;
						var numt = get.number(event.cardt);
						var att = get.attitude(player, target);
						var value = get.value(event.cardt);
						var num = get.number(card);
						if (num < numt || att > 2) return value + 6 - get.value(card);
						else if (num == numt) return value - get.value(card);
						return -1;
					});
					"step 2";
					if (!result.bool) event.finish();
					else {
						player.showCards(result.cards);
						event.cardp = result.cards[0];
					}
					"step 3";
					player.swapHandcards(target, [event.cardp], [event.cardt]);
					"step 4";
					var nump = get.number(event.cardp, player);
					var numt = get.number(event.cardt, target);
					if (nump < numt) {
						player.draw();
					} else if (nump > numt) {
						target.draw();
					}
				},
				ai: {
					threaten: 1.5,
					order: 8,
					result: {
						player: function (player, target) {
							if (get.attitude(player, target) > 0) return 1.5;
							return 0.5;
						},
					},
				},
			},
			xinfu_zhanji: {
				audio: 2,
				trigger: {
					player: "gainAfter",
				},
				forced: true,
				filter: function (event, player) {
					if (!player.isPhaseUsing()) return false;
					return event.getParent().name == "draw" && event.getParent(2).name != "xinfu_zhanji";
				},
				content: function () {
					player.draw("nodelay");
				},
			},
			xinfu_songsang: {
				limited: true,
				skillAnimation: true,
				animationColor: "wood",
				audio: 2,
				derivation: "xinfu_zhanji",
				trigger: { global: "dieAfter" },
				logTarget: "player",
				async content(e, t, player) {
					player.awakenSkill("xinfu_songsang");
					if (player.isDamaged()) {
						player.recover();
					} else player.gainMaxHp();
					player.addSkills("xinfu_zhanji");
				},
			},
			xinfu_jixu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					if (ui.selected.targets.length) {
						return target.hp == ui.selected.targets[0].hp;
					}
					return true;
				},
				selectTarget: [1, Infinity],
				multitarget: true,
				multiline: true,
				content: function () {
					"step 0";
					targets.sort(lib.sort.seat);
					"step 1";
					if (!event.num) event.num = 0;
					if (!event.caicuolist) event.caicuolist = [];
					targets[event.num].chooseBool("是否押杀？").ai = function (event, player) {
						var evt = _status.event.getParent();
						if (get.attitude(targets[event.num], evt.player) > 0)
							return evt.player.countCards("h", "sha") ? false : true;
						return Math.random() < (evt.player.countCards("h") / 4);
					};
					"step 2";
					if (result.bool) {
						targets[event.num].chat("有杀");
						game.log(targets[event.num], "认为", player, "#g有杀");
						if (!player.countCards("h", "sha")) event.caicuolist.add(targets[event.num]);
					} else {
						targets[event.num].chat("没杀");
						game.log(targets[event.num], "认为", player, "#y没有杀");
						if (player.countCards("h", "sha")) event.caicuolist.add(targets[event.num]);
					}
					event.num++;
					game.delay();
					if (event.num < targets.length) event.goto(1);
					"step 3";
					player.popup(player.countCards("h", "sha") ? "有杀" : "没杀");
					game.log(player, player.countCards("h", "sha") ? "有杀" : "没杀");
					if (event.caicuolist.length == 0) {
						var evt = _status.event.getParent("phaseUse");
						if (evt && evt.name == "phaseUse") {
							evt.skipped = true;
							event.finish();
						}
					} else {
						player.draw(event.caicuolist.length);
						if (player.countCards("h", "sha")) {
							player.addTempSkill("jixu_sha");
							player.storage.jixu_sha = event.caicuolist;
							event.finish();
						} else event.num = 0;
					}
					"step 4";
					if (event.num < event.caicuolist.length) {
						var target = event.caicuolist[event.num];
						player.discardPlayerCard(true, "he", target);
						event.num++;
						event.redo();
					}
				},
				ai: {
					order: function () {
						return get.order({ name: "sha" }) + 0.1;
					},
					result: {
						target: function (player, target) {
							var raweffect = function (player, target) {
								if (player.countCards("h", "sha")) {
									return get.effect(target, { name: "sha" }, player, target);
								} else {
									var att = get.attitude(player, target);
									var nh = target.countCards("h");
									if (att > 0) {
										if (
											target.getEquip("baiyin") &&
											target.isDamaged() &&
											get.recoverEffect(target, player, player) > 0
										) {
											if (target.hp == 1 && !target.hujia) return 1.6;
											if (target.hp == 2) return 0.01;
											return 0;
										}
									}
									var es = target.getCards("e");
									var noe = es.length == 0 || target.hasSkillTag("noe");
									var noe2 = es.length == 1 && es[0].name == "baiyin" && target.isDamaged();
									var noh = nh == 0 || target.hasSkillTag("noh");
									if (noh && (noe || noe2)) return 0;
									if (att <= 0 && !target.countCards("he")) return 1.5;
									return -1.5;
								}
							};
							var num = game.countPlayer(function (current) {
								return (
									current != player &&
									current.hp == target.hp &&
									raweffect(player, current) * get.attitude(player, current) > 0
								);
							});
							return raweffect(player, target) * Math.max(0, num - 1);
						},
					},
					expose: 0.4,
				},
			},
			jixu_sha: {
				audio: "xinfu_jixu",
				trigger: {
					player: "useCard",
				},
				onremove: function (player) {
					delete player.storage.jixu_sha;
				},
				filter: function (event, player) {
					if (event.card.name == "sha") {
						return game.hasPlayer(function (current) {
							return (
								current != player &&
								player.storage.jixu_sha.includes(current) &&
								!event.targets.includes(current)
							);
						});
					}
					return false;
				},
				forced: true,
				silent: true,
				popup: false,
				content: function () {
					player.logSkill("xinfu_jixu");
					for (var i = 0; i < player.storage.jixu_sha.length; i++) {
						if (
							!trigger.targets.includes(player.storage.jixu_sha[i]) &&
							player.canUse("sha", player.storage.jixu_sha[i], false)
						) {
							player.line(player.storage.jixu_sha[i], trigger.card.nature);
							trigger.targets.push(player.storage.jixu_sha[i]);
						}
					}
				},
			},
			xinfu_sanwen: {
				audio: 2,
				usable: 1,
				trigger: {
					player: "gainAfter",
					global: "loseAsyncAfter",
				},
				filter: function (event, player) {
					var cards = event.getg(player);
					if (!cards || !cards.length) return false;
					var namelist = [];
					var namedlist = [];
					for (var i = 0; i < cards.length; i++) {
						namelist.add(get.name(cards[i]));
					}
					var hs = player.getCards("h");
					for (var j = 0; j < hs.length; j++) {
						if (namelist.includes(get.name(hs[j])) && !cards.includes(hs[j])) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					var namelist = [];
					var namedlist = [];
					var nameddlist = [];
					var namedddlist = [];
					var cards = trigger.getg(player);
					for (var i = 0; i < cards.length; i++) {
						namelist.add(get.name(cards[i]));
					}
					var hs = player.getCards("h");
					for (var j = 0; j < hs.length; j++) {
						if (namelist.includes(get.name(hs[j])) && !cards.includes(hs[j])) {
							namedlist.push(hs[j]);
							namedddlist.add(get.name(hs[j]));
						}
					}
					for (var k = 0; k < cards.length; k++) {
						if (namedddlist.includes(get.name(cards[k]))) nameddlist.push(cards[k]);
					}
					var showlist = namedlist.concat(nameddlist);
					player.showCards(showlist);
					player.discard(nameddlist);
					player.draw(2 * nameddlist.length);
				},
			},
			xinfu_qiai: {
				skillAnimation: true,
				animationColor: "gray",
				trigger: { player: "dying" },
				limited: true,
				audio: 2,
				content: function () {
					"step 0";
					player.awakenSkill("xinfu_qiai");
					event.targets = game
						.filterPlayer(function (current) {
							return current != player;
						})
						.sortBySeat();
					if (!event.targets.length) event.finish();
					"step 1";
					event.current = event.targets.shift();
					if (!event.current.countCards("he")) event.goto(3);
					else
						event.current
							.chooseCard("交给" + get.translation(player) + "一张牌", "he", true)
							.set("ai", function (card) {
								var evt = _status.event.getParent();
								if (get.attitude(_status.event.player, evt.player) > 2) {
									if (card.name == "jiu") return 120;
									if (card.name == "tao") return 110;
								}
								return 100 - get.value(card);
							});
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						event.current.give(result.cards, player);
					}
					"step 3";
					if (event.targets.length > 0) event.goto(1);
				},
			},
			xinfu_denglou: {
				audio: 2,
				trigger: {
					player: "phaseJieshuBegin",
				},
				limited: true,
				filter: function (event, player) {
					return player.countCards("h") == 0;
				},
				skillAnimation: true,
				animationColor: "gray",
				content: function () {
					"step 0";
					player.awakenSkill("xinfu_denglou");
					event.cards = get.cards(4);
					event.gains = [];
					event.discards = [];
					var content = ["牌堆顶的四张牌", event.cards];
					game.log(player, "观看了", "#y牌堆顶的四张牌");
					player.chooseControl("ok").set("dialog", content);
					"step 1";
					if (get.type(event.cards[0]) != "basic") {
						event.gains.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					} else {
						var bool = game.hasPlayer(function (current) {
							return player.canUse(event.cards[0], current);
						});
						if (bool) {
							player.chooseUseTarget(event.cards[0], true, false);
						} else event.discards.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					}
					"step 2";
					if (event.cards.length) event.goto(1);
					else {
						if (event.gains.length) player.gain(event.gains, "gain2");
						if (event.discards.length) {
							player.$throw(event.discards);
							game.cardsDiscard(event.discards);
						}
					}
				},
			},
			qinguo_use: { audio: 2 },
			xinfu_qinguo: {
				group: "xinfu_qinguo_recover",
				audio: "qinguo_use",
				subfrequent: ["recover"],
				trigger: {
					player: "useCardEnd",
				},
				filter: function (event, player) {
					return get.type(event.card) == "equip";
				},
				direct: true,
				content: function () {
					player.chooseUseTarget(
						{ name: "sha" },
						get.prompt("xinfu_qinguo"),
						"视为使用一张【杀】",
						false
					).logSkill = "xinfu_qinguo";
				},
				subSkill: {
					recover: {
						audio: "qinguo_use",
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
						prompt: "是否发动【勤国】回复1点体力？",
						filter: function (event, player) {
							if (player.isHealthy() || player.countCards("e") != player.hp) return false;
							var evt = event.getl(player);
							if (event.name == "equip" && event.player == player)
								return !evt || evt.cards.length != 1;
							return evt && evt.es.length;
						},
						frequent: true,
						content: function () {
							player.recover();
						},
					},
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (
								get.type(card) == "equip" &&
								!get.cardtag(card, "gifts") &&
								game.hasPlayer(function (current) {
									return target.canUse("sha", current);
								})
							)
								return [1, 1.5];
						},
					},
					noe: true,
					reverseEquip: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "noe") return player.countCards("e") == player.hp + 1;
						return game.hasPlayer(function (current) {
							return player.canUse("sha", current);
						});
					},
				},
			},
			xinfu_jijun: {
				ai: {
					reverseEquip: true,
					effect: {
						target: function (card, player, target, current) {
							if (
								get.type(card) == "equip" &&
								player == target &&
								player == _status.currentPhase &&
								get.subtype(card) == "equip1"
							)
								return [1, 3];
						},
					},
					combo: "xinfu_fangtong",
				},
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
				},
				frequent: true,
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					if (event.getParent().triggeredTargets3.length > 1) return false;
					if (get.type(event.card) == "equip" && get.subtype(event.card) != "equip1") return false;
					if (event.targets.includes(player)) return true;
					return false;
				},
				callback: function () {
					player.addToExpansion(card, "gain2").gaintag.add("xinfu_jijun");
				},
				content: function () {
					player.judge(function (card) {
						return 1;
					}).callback = lib.skill.xinfu_jijun.callback;
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
					mark: function (dialog, content, player) {
						var content = player.getExpansions("xinfu_jijun");
						if (content && content.length) {
							dialog.addAuto(content);
							if (player == game.me || player.isUnderControl()) {
								var list = lib.skill.xinfu_fangtong.getAuto(player);
								if (list.length > 0) {
									dialog.addText(
										"<li>推荐方案：" +
											get.translation(list[0]) +
											"+ " +
											get.translation(list.slice(1))
									);
								}
							}
						}
					},
				},
				marktext: "方",
			},
			xinfu_fangtong: {
				getAuto: function (player) {
					var hs = player.getCards("he");
					var ss = player.getExpansions("xinfu_jijun");
					var bool = false,
						max = Math.pow(2, ss.length),
						index,
						i;
					for (i = 0; i < hs.length; i++) {
						for (var j = 1; j < max; j++) {
							var num = get.number(hs[i]);
							index = j.toString(2);
							while (index.length < ss.length) {
								index = "0" + index;
							}
							for (var k = 0; k < ss.length; k++) {
								if (index[k] == "1") num += get.number(ss[k]);
							}
							if (num == 36) {
								bool = true;
								break;
							}
						}
						if (bool) break;
					}
					if (!bool) return [];
					var list = [hs[i]];
					for (var k = 0; k < ss.length; k++) {
						if (index[k] == "1") list.push(ss[k]);
					}
					return list;
				},
				audio: 2,
				trigger: {
					player: "phaseJieshuBegin",
				},
				filter: function (event, player) {
					return player.countCards("he") > 0 && player.getExpansions("xinfu_jijun").length > 0;
				},
				direct: true,
				skillAnimation: true,
				animationColor: "metal",
				content: function () {
					"step 0";
					var info = ["是否发动【方统】？"];
					info.push('<div class="text center">' + get.translation(player) + "的“方”</div>");
					info.push(player.getExpansions("xinfu_jijun"));
					if (player.countCards("h")) {
						info.push('<div class="text center">' + get.translation(player) + "的手牌区</div>");
						info.push(player.getCards("h"));
					}
					if (player.countCards("e")) {
						info.push('<div class="text center">' + get.translation(player) + "的装备区</div>");
						info.push(player.getCards("e"));
					}
					var next = player.chooseButton();
					next.set("createDialog", info);
					next.set("selectButton", function () {
						var num = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							num += get.number(ui.selected.buttons[i]);
						}
						if (num == 36) return ui.selected.buttons.length;
						return ui.selected.buttons.length + 2;
					});
					next.set("filterButton", function (button) {
						var player = _status.event.player,
							cards = player.getExpansions("xinfu_jijun");
						if (ui.selected.buttons.length) {
							if (!cards.includes(button.link)) return false;
						} else if (cards.includes(button.link)) return false;
						var num = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							num += get.number(ui.selected.buttons[i]);
						}
						return get.number(button.link) + num <= 36;
					});
					next.set("autolist", lib.skill.xinfu_fangtong.getAuto(player));
					next.set("processAI", function () {
						if (_status.event.autolist && _status.event.autolist.length > 0) {
							return {
								bool: true,
								links: _status.event.autolist,
							};
						}
						return { bool: false };
					});
					next.set("complexSelect", true);
					"step 1";
					if (result.bool) {
						player.logSkill("xinfu_fangtong");
						var tothrow = [];
						var cards = result.links.slice(0);
						for (var i = 0; i < cards.length; i++) {
							if (get.position(cards[i]) == "x") {
								tothrow.push(cards[i]);
							} else {
								player.discard(cards[i]).delay = false;
							}
						}
						player.loseToDiscardpile(tothrow);
						player
							.chooseTarget(
								"选择一个目标并对其造成3点雷电伤害",
								true,
								function (card, player, target) {
									return target != player;
								}
							)
							.set("ai", function (target) {
								return get.damageEffect(
									target,
									_status.event.player,
									_status.event.player,
									"thunder"
								);
							});
					} else {
						event.finish();
					}
					"step 2";
					var target = result.targets[0];
					player.line(target, "thunder");
					target.damage(3, "thunder");
				},
				ai: {
					combo: "xinfu_jijun",
				},
			},
			xinfu_weilu: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				filter: function (event, player) {
					return (
						event.source &&
						event.source.isIn() &&
						!player.getStorage("xinfu_weilu_effect").includes(event.source)
					);
				},
				check: function (event, player) {
					return get.effect(event.source, { name: "losehp" }, player, player) >= 0;
				},
				forced: true,
				logTarget: "source",
				content: function () {
					player.addTempSkill("xinfu_weilu_effect", { player: "die" });
					player.markAuto("xinfu_weilu_effect", [trigger.source]);
					game.delayx();
				},
				ai: {
					maixie_defend: true,
					threaten: 0.85,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return;
							return 0.9;
						},
					},
				},
				subSkill: {
					effect: {
						audio: "xinfu_weilu",
						trigger: { player: "phaseUseBegin" },
						charlotte: true,
						forced: true,
						logTarget: function (event, player) {
							return player.getStorage("xinfu_weilu_effect").filter(function (current) {
								return current.isIn() && current.hp > 1;
							});
						},
						content: function () {
							"step 0";
							var targets = player.getStorage("xinfu_weilu_effect");
							player.removeSkill("xinfu_weilu_effect");
							event.targets = targets.sortBySeat();
							"step 1";
							var target = targets.shift();
							if (target.isIn() && target.hp > 1) {
								event._delay = true;
								var num = target.hp - 1;
								player.markAuto("xinfu_weilu_recover", [[target, num]]);
								target.loseHp(num);
							}
							if (targets.length > 0) event.redo();
							else if (!event._delay) event.finish();
							"step 2";
							player.addTempSkill("xinfu_weilu_recover", {
								player: ["phaseUseAfter", "phaseAfter"],
							});
							game.delayx();
						},
						onremove: true,
						intro: { content: "已将$列入“威虏”战略打击目标" },
					},
					recover: {
						audio: "xinfu_weilu",
						charlotte: true,
						trigger: { player: "phaseUseEnd" },
						forced: true,
						filter: function (event, player) {
							var targets = player.getStorage("xinfu_weilu_recover");
							for (var i of targets) {
								if (i[0].isIn() && i[0].isDamaged()) return true;
							}
							return false;
						},
						onremove: true,
						logTarget: function (event, player) {
							var logs = [],
								targets = player.getStorage("xinfu_weilu_recover");
							for (var i of targets) {
								if (i[0].isIn() && i[0].isDamaged()) logs.add(i[0]);
							}
							return logs;
						},
						content: function () {
							"step 0";
							event.list = player.getStorage("xinfu_weilu_recover").slice(0);
							event.list.sort(function (a, b) {
								return lib.sort.seat(a[0], b[0]);
							});
							"step 1";
							var group = event.list.shift();
							if (group[0].isIn() && group[0].isDamaged()) {
								group[0].recover(group[1]);
								event._delay = true;
							}
							if (event.list.length > 0) event.redo();
							else if (!event._delay) event.finish();
							"step 2";
							game.delayx();
						},
					},
				},
			},
			xinfu_zengdao: {
				audio: 2,
				limited: true,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.countCards("e") > 0;
				},
				filterTarget: lib.filter.notMe,
				skillAnimation: true,
				animationColor: "thunder",
				position: "e",
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				content: function () {
					player.awakenSkill("xinfu_zengdao");
					target.addToExpansion(cards, player, "give").gaintag.add("xinfu_zengdao2");
					target.addSkill("xinfu_zengdao2");
				},
				ai: {
					order: function () {
						var player = _status.event.player,
							num = 0;
						if (player.hasCard((card) => get.value(card, player) < 0, "e")) return 9;
						for (var i = 1; i < 6; i++) {
							num += player.countEquipableSlot(i);
						}
						if (num <= 2) return 9;
						var targets = player.getStorage("xinfu_weilu_recover"),
							num = 0;
						if (
							player.hp <= 2 ||
							!game.hasPlayer((current) => {
								if (player == current || get.attitude(player, current) < 0 || current.hp <= 1)
									return false;
								for (var arr of targets) {
									if (current == arr[0]) break;
								}
								return current.hp > 2 || current.countCards("hs") > 2;
							})
						)
							return 1;
						return 0;
					},
					result: {
						target: function (player, target) {
							if (target.hasValueTarget({ name: "sha", isCard: true }))
								return ui.selected.cards.length;
							return 0;
						},
					},
				},
			},
			xinfu_zengdao2: {
				trigger: { source: "damageBegin1" },
				forced: true,
				charlotte: true,
				sourceSkill: "xinfu_zengdao",
				filter: function (event, player) {
					return player.getExpansions("xinfu_zengdao2").length > 0;
				},
				content: function () {
					"step 0";
					player.chooseCardButton(
						"将一张“刀”置入弃牌堆",
						player.getExpansions("xinfu_zengdao2"),
						true
					);
					"step 1";
					if (result.bool) {
						trigger.num++;
						player.loseToDiscardpile(result.links);
					}
				},
				marktext: "刀",
				intro: {
					content: "expansion",
					markcount: "expansion",
					onunmark: function (storage, player) {
						player.removeSkill("xinfu_zengdao2");
					},
				},
			},
			xinfu_guanwei: {
				audio: 2,
				usable: 1,
				init: () => {
					game.addGlobalSkill("xinfu_guanwei_ai");
				},
				onremove: () => {
					if (!game.hasPlayer((i) => i.hasSkill("xinfu_guanwei"), true))
						game.removeGlobalSkill("xinfu_guanwei_ai");
				},
				trigger: {
					global: "phaseUseEnd",
				},
				filter: function (event, player) {
					var history = event.player.getHistory("useCard");
					var num = 0;
					var suit = false;
					for (var i = 0; i < history.length; i++) {
						var suit2 = get.suit(history[i].card);
						if (!lib.suit.includes(suit2)) return false;
						if (suit && suit != suit2) return false;
						suit = suit2;
						num++;
					}
					return num > 1;
				},
				direct: true,
				content: function () {
					"step 0";
					var target = trigger.player;
					player
						.chooseToDiscard(
							"he",
							get.prompt("xinfu_guanwei", trigger.player),
							"弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。"
						)
						.set("ai", function (card) {
							if (get.attitude(_status.event.player, _status.event.targetx) < 1) return 0;
							return 9 - get.value(card);
						})
						.set("logSkill", ["xinfu_guanwei", target])
						.set("targetx", target);
					"step 1";
					if (result.bool) {
						player.line(trigger.player, "green");
						trigger.player.draw(2);
					} else {
						player.storage.counttrigger.xinfu_guanwei--;
						event.finish();
					}
					"step 2";
					var evt=trigger.getParent("phase",true);
					if(evt) evt.phaseList.splice(evt.num, 0, "phaseUse|xinfu_guanwei");
				},
				ai: {
					expose: 0.5,
				},
				subSkill: {
					ai: {
						trigger: { player: "dieAfter" },
						filter: () => {
							return !game.hasPlayer((i) => i.hasSkill("xinfu_guanwei"), true);
						},
						silent: true,
						forceDie: true,
						content: () => {
							game.removeGlobalSkill("xinfu_guanwei_ai");
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									if (typeof card != "object" || !player.isPhaseUsing()) return;
									var hasPanjun = game.hasPlayer(function (current) {
										return (
											current.hasSkill("xinfu_guanwei") &&
											(!current.storage.counttrigger ||
												!current.storage.counttrigger.xinfu_guanwei) &&
											get.attitude(current, player) >= 1 &&
											current.hasCard(function (card) {
												return (
													get.value(card) < 7 ||
													(current != game.me &&
														!current.isUnderControl() &&
														!current.isOnline() &&
														get.value(card) < 9)
												);
											}, "he")
										);
									});
									if (!hasPanjun) return;
									var suitx = get.suit(card);
									var history = player.getHistory("useCard");
									if (!history.length) {
										var val = 0;
										if (
											player.hasCard(function (cardx) {
												return (
													get.suit(cardx) == suitx &&
													card != cardx &&
													(!card.cards || !card.cards.includes(cardx)) &&
													player.hasValueTarget(cardx)
												);
											}, "hs")
										)
											val = [2, 0.1];
										if (val) return val;
										return;
									}
									var num = 0;
									var suit = false;
									for (var i = 0; i < history.length; i++) {
										var suit2 = get.suit(history[i].card);
										if (!lib.suit.includes(suit2)) return;
										if (suit && suit != suit2) return;
										suit = suit2;
										num++;
									}
									if (suitx == suit && num == 1) return [1, 0.1];
									if (
										suitx != suit &&
										(num > 1 ||
											(num <= 1 &&
												player.hasCard(function (cardx) {
													return (
														get.suit(cardx) == suit &&
														player.hasValueTarget(cardx)
													);
												}, "hs")))
									)
										return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			xinfu_gongqing_gz_panjun: { audio: 2 },
			xinfu_gongqing: {
				audio: 2,
				audioname2: { gz_panjun: "xinfu_gongqing_gz_panjun" },
				trigger: {
					player: ["damageBegin3", "damageBegin4"],
				},
				forced: true,
				filter: function (event, player, name) {
					if (!event.source) return false;
					var range = event.source.getAttackRange();
					if (name == "damageBegin3") return range > 3;
					return event.num > 1 && range < 3;
				},
				preHidden: true,
				content: function () {
					trigger.num = event.triggername == "damageBegin4" ? 1 : trigger.num + 1;
				},
				ai: {
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
							if (arg.player.getAttackRange() < 3) return true;
						}
						return false;
					},
				},
			},
			xinfu_andong: {
				subSkill: {
					add: {
						sub: true,
						mod: {
							ignoredHandcard: function (card, player) {
								if (get.suit(card) == "heart") {
									return true;
								}
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && get.suit(card) == "heart") return false;
							},
						},
					},
				},
				audio: 2,
				trigger: {
					player: "damageBegin4",
				},
				filter: function (event, player) {
					return get.itemtype(event.source) == "player";
				},
				logTarget: "source",
				content: function () {
					"step 0";
					if (!trigger.source.countCards("h")) event._result = { index: 1 };
					else
						trigger.source
							.chooseControlList(
								[
									"令" + get.translation(player) + "观看你的手牌，并获得其中所有的红桃牌。",
									"防止即将对" +
										get.translation(player) +
										"造成的伤害，并使自己本回合内的红桃手牌不计入手牌上限。",
								],
								true
							)
							.set("ai", function (event, player) {
								var target = _status.event.getParent().player;
								var player = _status.event.player;
								if (get.attitude(player, target) > 0) return 1;
								return 0;
							});
					"step 1";
					if (result.index == 1) {
						trigger.cancel();
						trigger.source.addTempSkill("xinfu_andong_add");
						event.finish();
					} else {
						player.viewHandcards(trigger.source);
					}
					"step 2";
					var cards = trigger.source.getCards("h");
					var togain = [];
					for (var i = 0; i < cards.length; i++) {
						if (get.suit(cards[i]) == "heart") togain.push(cards[i]);
					}
					if (togain.length) player.gain(togain, trigger.source, "giveAuto", "bySelf");
				},
			},
			xinfu_yingshi: {
				audio: 2,
				group: ["yingshi_die"],
				trigger: {
					player: "phaseUseBegin",
				},
				direct: true,
				filter: function (event, player) {
					return (
						player.countCards("he", { suit: "heart" }) > 0 &&
						!game.hasPlayer(function (current) {
							return current.hasSkill("yingshi_heart");
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("xinfu_yingshi"), function (card, player, target) {
							return target != player;
						})
						.set("ai", function () {
							return -1;
						});
					"step 1";
					if (result.bool) {
						var cards = player.getCards("he", { suit: "heart" });
						var target = result.targets[0];
						player.logSkill("xinfu_yingshi", target);
						target.addSkill("yingshi_heart");
						target.addToExpansion(cards, player, "give").gaintag.add("xinfu_yingshi");
					}
				},
				marktext: "酬",
				intro: {
					markcount: "expansion",
					content: "expansion",
					onunmark: function (storage, player) {
						player.removeSkill("yingshi_heart");
					},
				},
			},
			yingshi_heart: {
				charlotte: true,
				trigger: { player: "damageEnd" },
				sourceSkill: "xinfu_yingshi",
				filter: function (event, player) {
					return (
						event.source &&
						event.source.isIn() &&
						event.card &&
						event.card.name == "sha" &&
						player.getExpansions("xinfu_yingshi").length > 0
					);
				},
				forced: true,
				logTarget: "source",
				content: function () {
					"step 0";
					trigger.source.chooseCardButton(
						"应势：选择获得一张“酬”",
						player.getExpansions("xinfu_yingshi"),
						true
					);
					"step 1";
					if (result.bool) {
						trigger.source.gain(result.links, player, "give");
					}
				},
			},
			yingshi_die: {
				audio: "xinfu_yingshi",
				forced: true,
				trigger: { global: "die" },
				logTarget: "player",
				sourceSkill: "xinfu_yingshi",
				filter: function (event, player) {
					return event.player.getExpansions("xinfu_yingshi").length > 0;
				},
				content: function () {
					var target = trigger.player;
					player.gain(target.getExpansions("xinfu_yingshi"), target, "give", "bySelf");
				},
			},
			xinfu_duanfa: {
				init: function (player) {
					player.storage.xinfu_duanfa = 0;
				},
				audio: 2,
				enable: "phaseUse",
				position: "he",
				filter: function (card, player) {
					return player.storage.xinfu_duanfa < player.maxHp;
				},
				filterCard: function (card) {
					return get.color(card) == "black";
				},
				selectCard: function () {
					var player = _status.event.player;
					return [1, player.maxHp - player.storage.xinfu_duanfa];
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				delay: false,
				content: function () {
					player.draw(cards.length);
					player.storage.xinfu_duanfa += cards.length;
				},
				group: "xinfu_duanfa_clear",
				subSkill: {
					clear: {
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						silent: true,
						popup: false,
						content: function () {
							player.storage.xinfu_duanfa = 0;
						},
						sub: true,
					},
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			xinfu_youdi: {
				audio: 2,
				trigger: {
					player: "phaseJieshuBegin",
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("xinfu_youdi"), function (card, player, target) {
							return player != target;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							if (
								player.countCards("h", "sha") > player.countCards("h") / 3 &&
								player.countCards("h", { color: "red" }) > player.countCards("h") / 2
							)
								return 0;
							if (target.countCards("he") == 0) return 0.1;
							return -get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						game.delay();
						player.logSkill("xinfu_youdi", result.targets);
						event.target = result.targets[0];
						event.target.discardPlayerCard(player, "h", true);
					} else {
						event.finish();
					}
					"step 2";
					if (get.color(result.links[0]) != "black") player.draw("nodelay");
					if (result.links[0].name != "sha" && event.target.countCards("he")) {
						player.gainPlayerCard("he", event.target, true);
					}
				},
				ai: {
					expose: 0.3,
					threaten: 1.4,
				},
			},
			xinfu_guanchao: {
				subSkill: {
					dizeng: {
						mark: true,
						marktext: "增",
						intro: {
							content: "单调递增",
						},
						trigger: {
							player: "useCard",
						},
						audio: "xinfu_guanchao",
						forced: true,
						mod: {
							aiOrder: function (player, card, num) {
								if (typeof card.number != "number") return;
								var history = player.getHistory("useCard", function (evt) {
									return (
										evt.isPhaseUsing() &&
										evt.getParent("phaseUse") === _status.event.getParent("phaseUse")
									);
								});
								if (history.length == 0) return num + 10 * (14 - card.number);
								var num = get.number(history[0].card);
								if (!num) return;
								for (var i = 1; i < history.length; i++) {
									var num2 = get.number(history[i].card);
									if (!num2 || num2 <= num) return;
									num = num2;
								}
								if (card.number > num) return num + 10 * (14 - card.number);
							},
						},
						filter: function (event, player) {
							var history = player.getHistory("useCard", function (evt) {
								return (
									evt.isPhaseUsing() &&
									evt.getParent("phaseUse") === _status.event.getParent("phaseUse")
								);
							});
							if (history.length < 2) return false;
							var num = get.number(history[0].card);
							if (!num) return false;
							for (var i = 1; i < history.length; i++) {
								var num2 = get.number(history[i].card);
								if (!num2 || num2 <= num) return false;
								num = num2;
							}
							return true;
						},
						content: function () {
							player.draw();
						},
						sub: true,
					},
					dijian: {
						mark: true,
						marktext: "减",
						intro: {
							content: "单调递减",
						},
						init: function (player) {
							player.storage.guanchao = 0;
						},
						onremove: function (player) {
							delete player.storage.guanchao;
						},
						trigger: {
							player: "useCard",
						},
						audio: "xinfu_guanchao",
						forced: true,
						mod: {
							aiOrder: function (player, card, num) {
								if (typeof card.number != "number") return;
								var history = player.getHistory("useCard", function (evt) {
									return (
										evt.isPhaseUsing() &&
										evt.getParent("phaseUse") === _status.event.getParent("phaseUse")
									);
								});
								if (history.length == 0) return num + 10 * card.number;
								var num = get.number(history[0].card);
								if (!num) return;
								for (var i = 1; i < history.length; i++) {
									var num2 = get.number(history[i].card);
									if (!num2 || num2 >= num) return;
									num = num2;
								}
								if (card.number < num) return num + 10 * card.number;
							},
						},
						filter: function (event, player) {
							var history = player.getHistory("useCard", function (evt) {
								return (
									evt.isPhaseUsing() &&
									evt.getParent("phaseUse") === _status.event.getParent("phaseUse")
								);
							});
							if (history.length < 2) return false;
							var num = get.number(history[0].card);
							if (!num) return false;
							for (var i = 1; i < history.length; i++) {
								var num2 = get.number(history[i].card);
								if (!num2 || num2 >= num) return false;
								num = num2;
							}
							return true;
						},
						content: function () {
							player.draw();
						},
						sub: true,
					},
				},
				audio: 2,
				trigger: {
					player: "phaseUseBegin",
				},
				direct: true,
				content: function () {
					"step 0";
					var list = ["递增", "递减", "取消"];
					player
						.chooseControl(list)
						.set("prompt", get.prompt2("xinfu_guanchao"))
						.set("ai", function () {
							return [0, 1].randomGet();
						});
					"step 1";
					switch (result.control) {
						case "递增": {
							player.logSkill("xinfu_guanchao");
							player.addTempSkill("xinfu_guanchao_dizeng", "phaseUseEnd");
							break;
						}
						case "递减": {
							player.logSkill("xinfu_guanchao");
							player.addTempSkill("xinfu_guanchao_dijian", "phaseUseEnd");
							break;
						}
						case "取消": {
							break;
						}
					}
				},
			},
			xinfu_xunxian: {
				usable: 1,
				audio: 2,
				trigger: {
					player: ["useCardAfter", "respond"],
				},
				filter: function (event, player) {
					if (
						get.itemtype(event.cards) !== "cards" ||
						!game.hasPlayer((current) => {
							if (current === player) return false;
							return (
								current.getHp() > player.getHp() ||
								current.countCards("h") > player.countCards("h")
							);
						})
					)
						return false;
					for (var i = 0; i < event.cards.length; i++) {
						if (event.cards[i].isInPile()) {
							return true;
						}
					}
					return false;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("xinfu_xunxian"), (card, player, target) => {
							if (target === player) return false;
							return (
								target.getHp() > player.getHp() ||
								target.countCards("h") > player.countCards("h")
							);
						})
						.set("ai", (target) => {
							let att = get.attitude(_status.event.player, target),
								name = _status.event.cards[0].name;
							if (att < 3) return 0;
							if (target.hasJudge("lebu")) att /= 5;
							if (name === "sha" && target.hasSha()) att /= 5;
							if (name === "wuxie" && target.needsToDiscard(_status.event.cards)) att /= 5;
							return att / (1 + get.distance(player, target, "absolute"));
						})
						.set("cards", trigger.cards)
						.forResult();
				},
				async content(event, trigger, player) {
					let list = [];
					for (let i = 0; i < trigger.cards.length; i++) {
						if (trigger.cards[i].isInPile()) {
							list.push(trigger.cards[i]);
						}
					}
					if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.2);
					event.targets[0].gain(list, "gain2").giver = player;
				},
			},
			xinfu_kannan: {
				audio: 2,
				subSkill: {
					phase: {
						sub: true,
					},
				},
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasSkill("xinfu_kannan_phase")) return false;
					if (player.getStat().skill.xinfu_kannan >= player.hp) return false;
					return player.countCards("h") > 0;
				},
				filterTarget: function (card, player, target) {
					if (target.hasSkill("xinfu_kannan_phase")) return false;
					return player.canCompare(target);
				},
				ai: {
					order: function () {
						return get.order({ name: "sha" }) + 0.4;
					},
					result: {
						target: function (player, target) {
							if (
								player.hasCard(function (card) {
									if (get.position(card) != "h") return false;
									var val = get.value(card);
									if (val < 0) return true;
									if (val <= 5) {
										return card.number >= 12;
									}
									if (val <= 6) {
										return card.number >= 13;
									}
									return false;
								})
							)
								return -1;
							return 0;
						},
					},
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool) {
						player.addTempSkill("xinfu_kannan_phase");
						if (!player.hasSkill("kannan_eff")) {
							player.addSkill("kannan_eff");
						} else {
							if (!player.storage.kannan_eff) player.storage.kannan_eff = 0;
						}
						player.storage.kannan_eff++;
						player.markSkill("kannan_eff");
					} else {
						target.addTempSkill("xinfu_kannan_phase");
						if (!target.hasSkill("kannan_eff")) {
							target.addSkill("kannan_eff");
						} else {
							if (!target.storage.kannan_eff) player.storage.kannan_eff = 0;
							//target.storage.kannan_eff++;
							//target.markSkill('kannan_eff');
						}
						target.storage.kannan_eff++;
						target.markSkill("kannan_eff");
					}
				},
			},
			kannan_eff: {
				mark: true,
				intro: {
					content: "下一张杀的伤害基数+#",
				},
				trigger: {
					player: "useCard",
				},
				filter: function (event) {
					return event.card && event.card.name == "sha";
				},
				forced: true,
				sourceSkill: "xinfu_kannan",
				content: function () {
					if (!trigger.baseDamage) trigger.baseDamage = 1;
					trigger.baseDamage += player.storage.kannan_eff;
					player.removeSkill("kannan_eff");
				},
				init: function (player) {
					player.storage.kannan_eff = 0;
				},
				onremove: function (player) {
					delete player.storage.kannan_eff;
				},
				ai: {
					damageBonus: true,
				},
			},
			xinfu_tushe: {
				audio: 2,
				mod: {
					aiOrder(player, card, num) {
						if (get.tag(card, "multitarget")) {
							if (player.countCards("h", { type: "basic" })) return num / 10;
							return num * 10;
						}
						if (get.type(card) === "basic") return num + 10;
					},
					aiValue(player, card, num) {
						/*
						if (card.name === "zhangba") {
							let fact = (n) => {
									if (n > 1) return n * fact(n - 1);
									return 1;
								},
								basic = 0;
							return fact(
								Math.min(
									player.countCards("hs", (i) => {
										if (get.tag(i, "multitarget")) return 2;
										if (!["shan", "tao", "jiu"].includes(card.name)) return 1;
										basic++;
									}) /
										(1 + basic),
									player.getCardUsable("sha")
								)
							);
						}
						*/
						if (card.name === "zhangba") return 114514;
						if (["shan", "tao", "jiu"].includes(card.name)) {
							if (player.getEquip("zhangba") && player.countCards("hs") > 1) return 0.01;
							return num / 2;
						}
						if (get.tag(card, "multitarget")) return num + game.players.length;
					},
					aiUseful(player, card, num) {
						if (card.name === "zhangba") return 114514;
						if (get.name(card, player) === "shan") {
							if (
								player.countCards("hs", (i) => {
									if (card === i || (card.cards && card.cards.includes(i))) return false;
									return get.name(i, player) === "shan";
								})
							)
								return -1;
							return num / Math.pow(Math.max(1, player.hp), 2);
						}
					},
				},
				trigger: {
					player: "useCardToPlayered",
				},
				locked: false,
				frequent: true,
				filter: function (event, player) {
					if (get.type(event.card) == "equip") return false;
					if (event.getParent().triggeredTargets3.length > 1) return false;
					return event.targets.length > 0 && !player.countCards("h", { type: "basic" });
				},
				content: function () {
					player.draw(trigger.targets.length);
				},
				ai: {
					presha: true,
					pretao: true,
					threaten: 1.8,
					effect: {
						player(card, player, target) {
							if (
								typeof card === "object" &&
								card.name !== "shan" &&
								get.type(card) !== "equip" &&
								!player.countCards("h", (i) => {
									if (card === i || (card.cards && card.cards.includes(i))) return false;
									return get.type(i) === "basic";
								})
							) {
								let targets = [],
									evt = _status.event.getParent("useCard");
								targets.addArray(ui.selected.targets);
								if (evt && evt.card == card) targets.addArray(evt.targets);
								if (targets.length) return [1, targets.length];
								if (get.tag(card, "multitarget")) return [1, game.players.length - 1];
								return [1, 1];
							}
						},
					},
				},
			},
			xinfu_limu: {
				mod: {
					targetInRange: function (card, player, target) {
						if (player.countCards("j") && player.inRange(target)) {
							return true;
						}
					},
					cardUsableTarget: function (card, player, target) {
						if (player.countCards("j") && player.inRange(target)) return true;
					},
					aiOrder(player, card, num) {
						if (get.type(card, null, player) == "trick" && player.canUse(card, player) && player.canAddJudge(card)) return 15;
					},
				},
				locked: false,
				audio: 2,
				enable: "phaseUse",
				discard: false,
				filter: function (event, player) {
					if (player.hasJudge("lebu")) return false;
					return player.countCards("hes", { suit: "diamond" }) > 0;
				},
				viewAs: { name: "lebu" },
				//prepare:"throw",
				position: "hes",
				filterCard: function (card, player, event) {
					return get.suit(card) == "diamond" && player.canAddJudge({ name: "lebu", cards: [card] });
				},
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return player == target;
				},
				check(card) {
					var player = _status.event.player;
					if (!player.getEquip("zhangba")) {
						let damaged = player.maxHp - player.hp - 1;
						if (
							player.countCards("h", function (cardx) {
								if (cardx == card) return false;
								if (cardx.name == "tao") {
									if (damaged < 1) return true;
									damaged--;
								}
								return ["shan", "jiu"].includes(cardx.name);
							}) > 0
						)
							return 0;
					}
					if (card.name == "shan") return 15;
					if (card.name == "tao" || card.name == "jiu") return 10;
					return 9 - get.value(card);
				},
				onuse: function (links, player) {
					var next = game.createEvent("limu_recover", false, _status.event.getParent());
					next.player = player;
					next.setContent(function () {
						player.recover();
					});
				},
				ai: {
					result: {
						target(player, target) {
							if (player.countCards("hes", "zhangba")) return player.countCards("h", {type: "basic"});
							let res = lib.card.lebu.ai.result.target(player, target);
							if (player.countCards("hs", "sha") >= player.hp) res++;
							if (target.isDamaged())
								return res + 2 * Math.abs(get.recoverEffect(target, player, target));
							return res;
						},
						ignoreStatus: true,
					},
					order(item, player) {
						if (player.hp > 1 && player.countCards("j")) return 0;
						return 12;
					},
					effect: {
						target(card, player, target) {
							if (target.isPhaseUsing() && typeof card === "object" && get.type(card, null, target) === "delay" && !target.countCards("j")) {
								let shas =
									target.getCards("hs", (i) => {
										if (card === i || (card.cards && card.cards.includes(i)))
											return false;
										return get.name(i, target) === "sha" && target.getUseValue(i) > 0;
									}) - target.getCardUsable("sha");
								if (shas > 0) return [1, 1.5 * shas];
							}
						},
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			xinghuoliaoyuan: "星火燎原",
			sp_taishici: "SP太史慈",
			sp_taishici_prefix: "SP",
			wangcan: "王粲",
			re_jsp_pangtong: "SP庞统",
			re_jsp_pangtong_prefix: "SP",
			lvdai: "吕岱",
			re_zhangliang: "张梁",
			lvqian: "吕虔",
			panjun: "潘濬",
			duji: "杜畿",
			zhoufang: "周鲂",
			yanjun: "严畯",
			liuyao: "刘繇",
			liuyan: "刘焉",
			xinfu_guolun: "过论",
			xinfu_guolun_info:
				"出牌阶段限一次，你可以展示一名其他角色的手牌，然后展示你的一张牌。你与其交换这两张牌，然后展示的牌点数较小的角色摸一张牌。",
			xinfu_zhanji: "展骥",
			xinfu_zhanji_info:
				"锁定技。你的出牌阶段内，当你因摸牌且不是因为此技能效果而得到牌后，你摸一张牌。",
			xinfu_songsang: "送丧",
			xinfu_songsang_info:
				"限定技，其他角色死亡时，你可以回复1点体力（若你未受伤，则改为加1点体力上限）；然后获得技能〖展骥〗。",
			xinfu_jixu: "击虚",
			xinfu_jixu_info:
				"出牌阶段限一次，若你有手牌，你可以令任意名体力值相等的其他角色猜测你的手牌中是否有【杀】。然后，你摸X张牌（X为猜错的角色数）。若你有【杀】，则你本回合内使用【杀】时，所有这些角色均成为【杀】的目标；若你没有【杀】，则你弃置所有这些角色的各一张牌。若X为零，你结束出牌阶段。",
			jixu_sha: "击虚",
			jixu_sha_info: "",
			xinfu_sanwen: "散文",
			xinfu_sanwen_info:
				"每回合限一次。当你得到牌后，若你的原手牌中有与这些牌名称相同的牌，则你可以展示这些牌，弃置新得到的同名牌并摸两倍的牌。",
			xinfu_qiai: "七哀",
			xinfu_qiai_info: "限定技，当你进入濒死状态时，你可以令所有其他角色依次交给你一张牌。",
			xinfu_denglou: "登楼",
			xinfu_denglou_info:
				"限定技，结束阶段，若你没有手牌，则你可以观看牌堆顶的四张牌，依次使用其中的所有基本牌（不能使用则弃置），然后获得其余的牌。",
			qinguo_use: "勤国",
			qinguo_use_info: "",
			xinfu_qinguo: "勤国",
			xinfu_qinguo_info:
				"当你使用的装备牌结算完成时，你可以视为使用一张【杀】；当你因使用或失去装备牌导致装备区内牌的数量发生变化后，若你装备区内牌的数量等于你的体力值，则你回复1点体力。",
			qinguo_lose: "勤国",
			qinguo_lose_info: "",
			xinfu_jijun: "集军",
			xinfu_jijun_info:
				"当你于回合内使用非装备牌或武器牌指定目标后，若你是此牌的目标，你可以进行一次判定。然后，你将判定牌置于自己的武将牌上，称之为「方」。",
			xinfu_fangtong: "方统",
			xinfu_fangtong_info:
				"结束阶段，你可以弃置总点数之和为36的一张牌与任意张「方」，并对一名其他角色造成3点雷电伤害。",
			xinfu_weilu: "威虏",
			xinfu_weilu_info:
				"锁定技，当你受到伤害后，伤害来源获得一枚「虏」。你的下个出牌阶段开始时，所有有「虏」的角色将体力失去至1点。此阶段结束后，这些角色回复以此法失去的体力。",
			weilu_effect: "威虏",
			weilu_effect_info: "",
			weilu_effect2: "威虏",
			weilu_effect2_info: "",
			xinfu_zengdao: "赠刀",
			xinfu_zengdao_info:
				"限定技，出牌阶段，你可以将装备区内的任意张牌置于一名其他角色的武将牌旁，称之为“刀”。该角色造成伤害时，其须移去一张“刀”，然后此伤害+1。",
			xinfu_zengdao2: "赠刀",
			xinfu_zengdao2_info: "",
			xinfu_guanwei: "观微",
			xinfu_guanwei_info:
				"每回合限一次。一名角色的出牌阶段结束时，若其本回合使用过两张以上的牌且这些牌均有花色且花色均相同，则你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。",
			xinfu_gongqing: "公清",
			xinfu_gongqing_info:
				"锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
			xinfu_andong: "安东",
			xinfu_andong_info:
				"当你受到伤害时，你可以令伤害来源选择一项：1.令你观看其的手牌并获得其中的所有红桃牌；2.防止此伤害，然后其本回合内的红桃手牌不计入手牌上限。",
			xinfu_yingshi: "应势",
			xinfu_yingshi_info:
				"出牌阶段开始时，若场上的所有角色均没有「酬」，则你可以将所有的红桃牌置于一名其他角色的武将牌旁，称之为「酬」。有「酬」的角色受到【杀】的伤害后/死亡时，伤害来源/你获得其中的一张/所有的「酬」。",
			yingshi_heart: "应势",
			yingshi_heart_info: "",
			yingshi_die: "应势",
			yingshi_die_info: "",
			xinfu_duanfa: "断发",
			xinfu_duanfa_info:
				"出牌阶段，你可以弃置任意张黑色牌，然后摸等量的牌。（每回合内限X张，X为你的体力上限）",
			xinfu_youdi: "诱敌",
			xinfu_youdi_info:
				"结束阶段开始时，你可以令一名其他角色弃置你的一张手牌，若此牌：不为黑色，你摸一张牌。不为【杀】，你获得该角色的一张牌。",
			xinfu_guanchao: "观潮",
			xinfu_guanchao_info:
				"出牌阶段开始时，你可以选择获得一项效果直到回合结束：1.当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌；2.当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌。",
			xinfu_xunxian: "逊贤",
			xinfu_xunxian_info:
				"每回合限一次。当你使用或打出的牌结算完成后，你可以将其对应的所有实体牌交给一名手牌数或体力值大于你的角色。",
			xinfu_kannan: "戡难",
			xinfu_kannan_info:
				"出牌阶段限X次，你可以与一名本回合内未成为过〖戡难〗目标的角色拼点。若你赢，你使用的下一张【杀】的伤害值基数+1，且你本回合内不能再发动〖戡难〗。若你没赢，其使用的下一张【杀】的伤害值基数+1。（X为你的体力值）。",
			kannan_eff: "戡难",
			kannan_eff_info: "",
			xinfu_tushe: "图射",
			xinfu_tushe_info:
				"当你使用非装备牌指定目标后，若你没有基本牌，则你可以摸X张牌。（X为此牌指定的目标数）",
			xinfu_limu: "立牧",
			xinfu_limu_info:
				"出牌阶段，你可以将一张♦牌当做【乐不思蜀】对自己使用，然后回复1点体力。只要你的判定区内有牌，你对攻击范围内的其他角色使用牌便没有次数和距离限制。",
			xinyingshi: "应势",
			xinyingshi_info:
				"出牌阶段开始时，若场上所有角色的武将牌上均没有“酬”，则你可以将任意张牌置于一名角色的武将牌上，称为“酬”。若如此做：当有角色使用牌对有“酬”的角色造成伤害后，其可以获得一张“酬”，并获得牌堆中所有与“酬”花色点数均相同的牌；有“酬”的角色死亡时，你获得其所有“酬”。",
			
			star_xunyu: "星荀彧",
			star_xunyu_prefix: "星",
			staranshu: "安庶",
			staranshu_info: "①非首轮游戏开始时，你可以选择弃牌堆中不同牌名的基本牌各一张置于牌堆顶，然后视为使用一张【五谷丰登】（从你或一名已受伤角色开始结算）；②一名角色的回合结束时，若有角色本回合失去了本轮因〖安庶〗①获得的牌，你可令其将手牌摸至体力上限（至多摸五张）。",
			starkuangzuo: "匡祚",
			starkuangzuo_info: "限定技，出牌阶段，你可以令一名角色A获得〖承奉〗（若其为主公且没有主公技，其获得〖统荫〗），然后令另一名角色B将每种花色的牌各一张置于A武将牌上，称为“匡祚”。",
			starchengfeng: "承奉",
			starchengfeng_info: "每回合限一次，你可以将一张红色/黑色“匡祚”牌当作【闪】/【无懈可击】对即将对你生效的牌使用。此牌结算完成后，若你的“匡祚”牌包含颜色数少于2，你可以将牌堆顶一张牌当作“匡祚”置于武将牌上。",
			startongyin: "统荫",
			startongyin_info: "主公技，你受到其他角色使用牌造成的伤害后，若伤害来源与你势力相同/不同，你可以将此牌/其一张牌当作“匡祚”置于武将牌上。",

			// 南斗六星
			xinghuoliaoyuan_tianfu: "南斗六星·天府",
			xinghuoliaoyuan_tianliang: "南斗六星·天梁",
			xinghuoliaoyuan_tianji: "南斗六星·天机",
			xinghuoliaoyuan_tiantong: "南斗六星·天同",
			xinghuoliaoyuan_tianxiang: "南斗六星·天相",
			xinghuoliaoyuan_qisha: "南斗六星·七杀",
			
			// 北斗七星
			xinghuoliaoyuan_tianshu: "北斗七星·天枢",
			xinghuoliaoyuan_tianxuan: "北斗七星·天璇",
			xinghuoliaoyuan_bdtianji: "北斗七星·天玑",
			xinghuoliaoyuan_tianquan: "北斗七星·天权",
			xinghuoliaoyuan_yuheng: "北斗七星·玉衡",
			xinghuoliaoyuan_kaiyang: "北斗七星·开阳",
			xinghuoliaoyuan_yaoguang: "北斗七星·瑶光",
			
			xinghuoliaoyuan_waitforsort: "等待分包",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
