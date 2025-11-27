import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "yingbian",
		connect: true,
		connectBanned: [
			
		],
		character: {
			chengjichengcui: ["male", "wei", 6, ["oltousui", "olchuming"], ["border:jin"]],
			wangxiang: ["male", "jin", 3, ["bingxin"]],
			jin_jiachong: ["male", "jin", 3, ["xiongshu", "jianhui"]],
			xuangongzhu: ["female", "jin", 3, ["gaoling", "qimei", "ybzhuiji"], ["hiddenSkill"]],
			xinchang: ["male", "jin", 3, ["canmou", "congjian"]],
			yangzhi: ["female", "jin", 3, ["xinwanyi", "maihuo"]],
			yangyan: ["female", "jin", 3, ["xinxuanbei", "xianwan"]],
			ol_huaxin: ["male", "wei", 3, ["caozhao", "olxibing"]],
			zhongyan: ["female", "jin", 3, ["bolan", "yifa"], ["clan:颍川钟氏"]],
			weiguan: ["male", "jin", 3, ["zhongyun", "shenpin"]],
			cheliji: ["male", "qun", 4, ["chexuan", "qiangshou"]],
			simazhou: ["male", "jin", 4, ["recaiwang", "naxiang"]],
			ol_lisu: ["male", "qun", 3, ["qiaoyan", "xianzhu"]],
			jin_yanghuiyu: ["female", "jin", 3, ["huirong", "ciwei", "caiyuan"], ["hiddenSkill"]],
			shibao: ["male", "jin", 4, ["zhuosheng"]],
			jin_zhangchunhua: ["female", "jin", 3, ["huishi", "qingleng", "xuanmu"], ["hiddenSkill"]],
			jin_simayi: ["male", "jin", 3, ["buchen", "smyyingshi", "xiongzhi", "xinquanbian"], ["hiddenSkill"]],
			jin_wangyuanji: ["female", "jin", 3, ["shiren", "yanxi"], ["hiddenSkill"]],
			jin_simazhao: ["male", "jin", 3, ["tuishi", "xinchoufa", "zhaoran", "chengwu"], ["zhu", "hiddenSkill"]],
			jin_xiahouhui: ["female", "jin", 3, ["baoqie", "jyishi", "shiduo"], ["hiddenSkill"]],
			jin_simashi: ["male", "jin", "3/4", ["taoyin", "yimie", "ruilve", "tairan"], ["hiddenSkill", "zhu"]],
			zhanghuyuechen: ["male", "jin", 4, ["xijue"]],
			duyu: ["male", "jin", 4, ["sanchen", "zhaotao"]],
		},
		characterSort: {
			yingbian: {
				yingbian_pack1: ["jin_simayi", "jin_zhangchunhua", "ol_lisu", "simazhou", "cheliji", "ol_huaxin"],
				yingbian_pack2: ["jin_simashi", "jin_xiahouhui", "zhanghuyuechen", "shibao", "jin_yanghuiyu", "chengjichengcui"],
				yingbian_pack3: ["jin_simazhao", "jin_wangyuanji", "duyu", "weiguan", "xuangongzhu"],
				yingbian_pack4: ["zhongyan", "xinchang", "jin_jiachong", "wangxiang"],
				yingbian_pack5: ["yangyan", "yangzhi"],
			},
		},
		characterSubstitute: {
			
		},
		characterIntro: {
			zhanghuyuechen: "张虎，生卒年不详，雁门马邑（今山西朔城区大夫庄）人。三国时期曹魏将领。名将张辽之子。官至偏将军，袭封晋阳侯，有一子张统。乐綝（195~257年），字号不详，阳平郡卫国县（今河南省清丰县）人。三国时期曹魏将领，右将军乐进的儿子。果毅坚毅，袭封广昌亭侯，累迁扬州刺史。甘露二年，为叛乱的征东大将军诸葛诞所杀，追赠卫尉。",
			duyu: "杜预（222年－285年），字元凯，京兆郡杜陵县（今陕西西安）人，中国魏晋时期军事家、经学家、律学家，曹魏散骑常侍杜恕之子。杜预初仕曹魏，任尚书郎，后成为权臣司马昭的幕僚，封丰乐亭侯。西晋建立后，历任河南尹、安西军司、秦州刺史、度支尚书等职。咸宁四年（278年）接替羊祜出任镇南大将军，镇守荆州。他积极备战，支持晋武帝司马炎对孙吴作战，并在咸宁五年（279年）成为晋灭吴之战的统帅之一。战后因功进封当阳县侯，仍镇荆州。太康五年（285年），杜预被征入朝，拜司隶校尉，途中于邓县逝世，终年六十三岁。获赠征南大将军、开府仪同三司，谥号为成。杜预耽思经籍，博学多通，多有建树，时誉为“杜武库”。著有《春秋左氏传集解》及《春秋释例》等。为明朝之前唯一一个同时进入文庙和武庙之人。",
			xiahouhui: "夏侯徽（211年－234年），字媛容，沛国谯县（今安徽亳州）人，司马师第一任妻子。征南大将军夏侯尚之女，母德阳乡主为大司马曹真之妹。夏侯徽与司马师之间，生有五个女儿。夏侯徽很有见识器度，每当司马师有什么想法时，都由她从旁策划协助。当时司马师之父司马懿位居上将重位，而他的儿子们都有雄才大略。夏侯徽深知司马师绝非曹魏忠臣，而司马师对出身曹魏家族的夏侯徽也非常顾忌。青龙二年（234年），正逢“大疫”、“大病”之年，夏侯徽被司马师毒杀，时年二十四岁，死后葬于峻平陵。西晋建国后，追谥夏侯徽为景怀皇后。",
			shibao: "石苞（？～273年），字仲容，渤海南皮（今河北省南皮县）人。三国时曹魏至西晋重要将领，西晋开国功臣。西晋建立后，历任大司马、侍中、司徒等职，封乐陵郡公，卒后谥号为“武”。",
			simazhou: "司马伷（227年～283年6月12日），字子将，河内郡温县（今河南省温县）人。西晋宗室、将领，晋宣帝司马懿第三子，伏太妃所生。晋景帝司马师、文帝司马昭的同父异母弟，晋武帝司马炎的叔父。司马伷少有才气，在曹魏历任宁朔将军、散骑常侍、征虏将军等职，先后受封南安亭侯、东武乡侯，五等爵制建立后，改封南皮伯。西晋建立后，获封东莞郡王，入朝任尚书右仆射、抚军将军，出外拜镇东大将军。后改封琅邪王，加开府仪同三司。西晋伐吴时，率军出涂中，孙皓向他投降并奉上玉玺。战后因功拜大将军，增邑三千户。太康四年（283年），司马伷去世，享年五十七岁。谥号为武，世称“琅邪武王”。著有《周官宁朔新书》八卷，今已亡佚。",
			huangzu: "黄祖（？－208年），东汉末年将领。刘表任荆州牧时，黄祖出任江夏太守。初平二年（191年），黄祖在与长沙太守孙坚交战时，其部下将孙坚射死，因此与孙家结下仇怨。之后，黄祖多次率部与东吴军队交战，射杀凌操、徐琨等人。建安十三年（208年），在与孙权的交战中，兵败被杀。",
			cheliji: "彻里吉是历史小说《三国演义》中的虚构人物，西羌国王。蜀相诸葛亮伐魏，魏都督曹真驰书赴羌，国王彻里吉即命雅丹丞相与越吉元帅起羌兵一十五万、并战车直扣西平关。后军大败，越吉亡，雅丹被俘，亮将所获羌兵及车马器械，尽给还雅丹，俱放回国。彻里吉感蜀恩义，与之结盟。正史中没有关于彻里吉的记载。",
			weiguan: "卫瓘（220年－291年），字伯玉。河东郡安邑县（今山西省夏县）人。三国曹魏后期至西晋初年重臣、书法家，曹魏尚书卫觊之子。卫瓘出身官宦世家，年轻时仕官于曹魏，历任尚书郎、散骑常侍、侍中、廷尉等职。后以镇西军司、监军身份参与伐蜀战争。蜀汉亡后，与钟会一道逮捕邓艾；钟会谋反时，又成功平息叛乱，命田续杀邓艾父子。回师后转任督徐州诸军事、镇东将军，封菑阳侯。西晋建立后，历任青州、幽州刺史、征东大将军等职，成功化解北方边境威胁，因功进爵菑阳公。后入朝为尚书令、侍中，又升任司空，领太子少傅。后逊位，拜太保。晋惠帝即位后，与贾皇后对立，终在政变中满门遇害，享年七十二岁。卫瓘善隶书及章草。不仅兼工各体，还能学古人之长，是颇有创意的书法家。唐朝张怀瓘《书断》中评其章草为“神品”。",
			zhongyan: " 钟琰 (？—？年）颍川人，王浑之妻。生卒年不详，约魏末晋初间前后在世。王浑的妻子钟琰，是颍川人，为魏太傅钟繇的曾孙女，父亲钟徽，为黄门郎。她平时广泛阅读各种书籍，因此几岁的时候就能撰写文章。她聪慧弘雅，善于啸咏，她的礼仪法度，为中表所推崇，她写有文集五卷。",
			yangyan: "杨艳（238年－274年8月25日），字琼芝，弘农郡华阴县（今陕西省华阴市）人，晋武帝司马炎第一任皇后，曹魏通事郎杨炳之女。自幼父母双亡，为舅舅赵俊所养，跟随继母段氏生活。聪明贤慧，善于书法，天生丽质，娴熟女红，嫁给了世子司马炎。泰始元年（265年），晋武帝即位，建立西晋。泰始二年（266年），杨艳受册为皇后，深得晋武帝宠幸，生下三子三女，包括晋惠帝司马衷。泰始十年（274年），去世，时年三十七，陪葬于峻阳陵，谥号武元皇后。",
			yangzhi: "杨芷（259年－292年3月6日），字季兰，小字男胤，弘农郡华阴县（今陕西省华阴市）人，晋武帝司马炎第二任皇后，东汉太尉杨震幼子杨奉后裔，东汉末年东莱太守、蓩亭侯杨众曾孙女，西晋太傅杨骏与嫡妻庞氏之女，武元皇后杨艳堂妹。咸宁二年（276年），立为皇后，史称“婉嫕有妇德， 美映椒房”，得宠于晋武帝。生渤海殇王，早薨，之后再无生育。其父杨骏擅权引起皇后贾南风忌恨，贾南风联络汝南王司马亮、楚王司马玮发动政变，杀死杨骏，并唆使大臣上书状告杨芷谋反，让晋惠帝司马衷将其贬为庶人，押到金墉城居住。元康二年（292年），杨芷冻饿而死，谥号武悼皇后。",
			xinchang: "辛敞（生卒年不详），字泰雍，陇西人氏，是曹魏时代官员。卫尉辛毗之子，辛宪英之弟。",
			xuangongzhu: "高陵宣公主（？—？）司马氏，晋宣帝司马懿第二女。司马氏下嫁杜预。其侄司马炎登基时，司马氏已经去世。泰始年间（265年—274年）追赠高陵公主。",
			jin_guohuai: "郭槐（237年-296年），字媛韶，太原阳曲（今山西太原）人，魏晋权臣贾充的妻子。父亲是曹魏城阳郡太守郭配，伯父是曹魏名将郭淮。出身太原郭氏。二十一岁时，嫁贾充作继室，生二女二子，长女贾南风，次女贾午，一子贾黎民。贾南风是西晋惠帝司马衷皇后，干预国政，专权误国，直接导致“八王之乱”和西晋亡国。",
			wangxiang: "王祥（184年，一作180年－268年4月30日），字休徵。琅邪临沂（今山东省临沂市西孝友村）人。三国曹魏及西晋时大臣。王祥于东汉末隐居二十年，在曹魏，先后任县令、大司农、司空、太尉等职，封爵睢陵侯。西晋建立，拜太保，进封睢陵公。泰始四年四月戊戌日（268年4月30日）去世，年八十五（一作八十九），谥号“元”。有《训子孙遗令》一文传世。王祥侍奉后母朱氏极孝，为传统文化中二十四孝之一“卧冰求鲤”的主人翁。",
			chengjichengcui: "成倅、成济（？～260年6月21日），扬州丹阳（今安徽省宣城市）人。三国时期曹魏将领。依附于司马氏家族，得到司马昭的心腹贾充指使，刺死魏帝曹髦。司马昭为平息众怒，将成倅、成济兄弟二人杀死。据《魏氏春秋》记载，成济兄弟不服罪，光着身子跑到屋顶，大骂司马昭，被军士从下乱箭射杀。",
		},
		characterTitle: {
			
		},
		characterFilter: {
			
		},
		characterInitFilter: {
			
		},
		card: {
			cheliji_sichengliangyu: {
				fullskin: true,
				vanish: true,
				derivation: "cheliji",
				destroy: "chexuan",
				type: "equip",
				subtype: "equip5",
				skills: ["cheliji_sichengliangyu"],
			},
			cheliji_tiejixuanyu: {
				fullskin: true,
				vanish: true,
				derivation: "cheliji",
				destroy: "chexuan",
				type: "equip",
				subtype: "equip5",
				skills: ["cheliji_tiejixuanyu"],
			},
			cheliji_feilunzhanyu: {
				fullskin: true,
				vanish: true,
				derivation: "cheliji",
				destroy: "chexuan",
				type: "equip",
				subtype: "equip5",
				skills: ["cheliji_feilunzhanyu"],
			},
		},
		/** @type { importCharacterConfig['skill'] } */
		skill: {
			//二成
			oltousui: {
				audio: 2,
				enable: "chooseToUse",
				viewAsFilter: function (player) {
					return player.countCards("he");
				},
				viewAs: {
					name: "sha",
					suit: "none",
					number: null,
					isCard: true,
				},
				filterCard: true,
				selectCard: [1, Infinity],
				position: "he",
				check: function (card) {
					const player = get.player();
					return 4.5 + (player.hasSkill("olchuming") ? 1 : 0) - 1.5 * ui.selected.cards.length - get.value(card);
				},
				popname: true,
				ignoreMod: true,
				precontent: function* (event, map) {
					var player = map.player;
					var evt = event.getParent();
					if (evt.dialog && typeof evt.dialog == "object") evt.dialog.close();
					player.logSkill("oltousui");
					delete event.result.skill;
					var cards = event.result.cards;
					player.loseToDiscardpile(cards, ui.cardPile, false, "blank").log = false;
					var shownCards = cards.filter(i => get.position(i) == "e"),
						handcardsLength = cards.length - shownCards.length;
					if (shownCards.length) {
						player.$throw(shownCards, null);
						game.log(player, "将", shownCards, "置于了牌堆底");
					}
					if (handcardsLength > 0) {
						player.$throw(handcardsLength, null);
						game.log(player, "将", get.cnNumber(handcardsLength), "张牌置于了牌堆底");
					}
					game.delayex();
					var viewAs = new lib.element.VCard({ name: event.result.card.name, isCard: true });
					event.result.card = viewAs;
					event.result.cards = [];
					event.result._apply_args = {
						shanReq: cards.length,
						oncard: () => {
							var evt = get.event();
							for (var target of game.filterPlayer(null, null, true)) {
								var id = target.playerid;
								var map = evt.customArgs;
								if (!map[id]) map[id] = {};
								map[id].shanRequired = evt.shanReq;
							}
						},
					};
				},
				ai: {
					order: function (item, player) {
						return get.order({ name: "sha" }) + 0.1;
					},
					result: { player: 1 },
					keepdu: true,
					respondSha: true,
					skillTagFilter: (player, tag, arg) => {
						if (tag == "respondSha" && arg != "use") return false;
					},
				},
			},
			olchuming: {
				audio: 2,
				trigger: {
					source: "damageBegin1",
					player: "damageBegin3",
				},
				filter: function (event, player) {
					if (event.source === event.player) return false;
					if (!event.card || !event.cards || !event.cards.length) return true;
					let target = event[player === event.source ? "player" : "source"];
					return target && target.isIn();
				},
				forced: true,
				content: function* (event, map) {
					var player = map.player,
						trigger = map.trigger;
					if (!trigger.card || !trigger.cards || !trigger.cards.length) {
						trigger.num++;
						event.finish();
						return;
					} else {
						var target = trigger[trigger.source == player ? "player" : "source"];
						trigger._olchuming = true;
						target.addTempSkill("olchuming_effect");
					}
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (!get.tag(card, "damage")) return;
							if (!lib.card[card.name] || !card.cards || !card.cards.length) return [1, 0, 2, 0];
							return [1, -1];
						},
						target: function (card, player, target) {
							if (!get.tag(card, "damage")) return;
							if (!lib.card[card.name] || !card.cards || !card.cards.length) return 2;
							return [1, -1];
						},
					},
					combo: "oltousui",
					halfneg: true
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { global: "phaseEnd" },
						forced: true,
						popup: false,
						content: function* (event, map) {
							var player = map.player;
							var mapx = {};
							var history = player.getHistory("damage").concat(player.getHistory("sourceDamage"));
							history.forEach(evt => {
								if (!evt._olchuming) return;
								var target = evt[evt.source == player ? "player" : "source"];
								if (!target.isIn()) return;
								var cards = evt.cards.filterInD("d");
								if (!cards.length) return;
								if (!mapx[target.playerid]) mapx[target.playerid] = [];
								mapx[target.playerid].addArray(cards);
							});
							var entries = Object.entries(mapx).map(entry => {
								return [(_status.connectMode ? lib.playerOL : game.playerMap)[entry[0]], entry[1]];
							});
							if (!entries.length) {
								event.finish();
								return;
							}
							player.logSkill(
								"olchuming_effect",
								entries.map(i => i[0])
							);
							entries.sort((a, b) => lib.sort.seat(a[0], b[0]));
							for (var entry of entries) {
								var current = entry[0],
									cards = entry[1];
								var list = ["jiedao", "guohe"].filter(i => player.canUse(new lib.element.VCard({ name: i, cards: cards }), current, false));
								if (!list.length) return;
								var result = {};
								if (list.length == 1) result = { bool: true, links: [["", "", list[0]]] };
								else
									result = yield player
										.chooseButton([`畜鸣：请选择要对${get.translation(current)}使用的牌`, [list, "vcard"]], true)
										.set("ai", button => {
											var player = get.player();
											return get.effect(get.event("currentTarget"), { name: button.link[2] }, player, player);
										})
										.set("currentTarget", current);
								if (result.bool) {
									var card = get.autoViewAs({ name: result.links[0][2] }, cards);
									if (player.canUse(card, current, false)) player.useCard(card, cards, current, false);
								}
							}
						},
					},
				},
			},
			bingxin: {
				audio: 2,
				enable: "chooseToUse",
				hiddenCard: function (player, name) {
					if (get.type(name) == "basic" && lib.inpile.includes(name) && !player.getStorage("bingxin_count").includes(name)) return true;
				},
				filter: function (event, player) {
					if (event.type == "wuxie") return false;
					var hs = player.getCards("h");
					if (hs.length != Math.max(0, player.hp)) return false;
					if (hs.length > 1) {
						var color = get.color(hs[0], player);
						for (var i = 1; i < hs.length; i++) {
							if (get.color(hs[i], player) != color) return false;
						}
					}
					var storage = player.storage.bingxin_count;
					for (var i of lib.inpile) {
						if (get.type(i) != "basic") continue;
						if (storage && storage.includes(i)) continue;
						var card = { name: i, isCard: true };
						if (event.filterCard(card, player, event)) return true;
						if (i == "sha") {
							for (var j of lib.inpile_nature) {
								card.nature = j;
								if (event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						var storage = player.storage.bingxin_count;
						for (var i of lib.inpile) {
							if (get.type(i) != "basic") continue;
							if (storage && storage.includes(i)) continue;
							var card = { name: i, isCard: true };
							if (event.filterCard(card, player, event)) list.push(["基本", "", i]);
							if (i == "sha") {
								for (var j of lib.inpile_nature) {
									card.nature = j;
									if (event.filterCard(card, player, event)) list.push(["基本", "", i, j]);
								}
							}
						}
						return ui.create.dialog("冰心", [list, "vcard"], "hidden");
					},
					check: function (button) {
						if (button.link[2] == "shan") return 3;
						var player = _status.event.player;
						if (button.link[2] == "jiu") {
							if (player.getUseValue({ name: "jiu" }) <= 0) return 0;
							if (player.countCards("h", "sha")) return player.getUseValue({ name: "jiu" });
							return 0;
						}
						return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
					},
					backup: function (links, player) {
						return {
							selectCard: -1,
							filterCard: () => false,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								isCard: true,
							},
							precontent: function () {
								player.logSkill("bingxin");
								player.draw();
								delete event.result.skill;
								var name = event.result.card.name;
								player.addTempSkill("bingxin_count");
								player.markAuto("bingxin_count", [name]);
							},
						};
					},
					prompt: function (links, player) {
						var name = links[0][2];
						var nature = links[0][3];
						return "摸一张并视为使用" + (get.translation(nature) || "") + get.translation(name);
					},
				},
				ai: {
					order: 10,
					respondShan: true,
					respondSha: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg == "respond") return false;
						var hs = player.getCards("h");
						if (hs.length != Math.max(0, hs.length)) return false;
						if (hs.length > 1) {
							var color = get.color(hs[0], player);
							for (var i = 1; i < hs.length; i++) {
								if (get.color(hs[i], player) != color) return false;
							}
						}
						var storage = player.storage.bingxin_count;
						if (storage && storage.includes("s" + tag.slice(8))) return false;
					},
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
				subSkill: { count: { charlotte: true, onremove: true } },
			},
			zhefu: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				direct: true,
				filter: function (event, player) {
					return (
						player != _status.currentPhase &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") > 0;
						})
					);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("zhefu"), "令一名有手牌的其他角色弃置一张【" + get.translation(trigger.card.name) + "】，否则受到你造成的1点伤害。", function (card, player, target) {
							return target != player && target.countCards("h") > 0;
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player) / Math.sqrt(target.countCards("h"));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("zhefu", target);
						var name = trigger.card.name;
						target
							.chooseToDiscard("he", { name: name }, "弃置一张【" + get.translation(name) + "】或受到1点伤害")
							.set("ai", function (card) {
								var player = _status.event.player;
								if (_status.event.take || (get.name(card) == "tao" && !player.hasJudge("lebu"))) return 0;
								return 8 - get.value(card);
							})
							.set("take", get.damageEffect(target, player, target) >= 0);
					} else event.finish();
					"step 2";
					if (!result.bool) target.damage();
				},
			},
			yidu: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					return (
						(event.card.name == "sha" || (get.type(event.card, null, false) == "trick" && get.tag(event.card, "damage") > 0)) &&
						event.targets.some(target => {
							return (
								target.countCards("h") > 0 &&
								!target.hasHistory("damage", function (evt) {
									return evt.card == event.card;
								})
							);
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt2("yidu"), (card, player, target) => {
							return _status.event.targets.includes(target);
						})
						.set(
							"targets",
							trigger.targets.filter(target => {
								return (
									target.countCards("h") > 0 &&
									!target.hasHistory("damage", function (evt) {
										return evt.card == trigger.card;
									})
								);
							})
						)
						.set("ai", target => {
							if (target.hasSkillTag("noh")) return 0;
							return -get.attitude(player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("yidu", target);
						player
							.choosePlayerCard(target, "遗毒：展示" + get.translation(target) + "的至多三张手牌", true, "h", [1, Math.min(3, target.countCards("h"))])
							.set("forceAuto", true)
							.set("ai", function (button) {
								if (ui.selected.buttons.length) return 0;
								return 1 + Math.random();
							});
					} else event.finish();
					"step 2";
					var cards = result.cards;
					player.showCards(cards, get.translation(player) + "对" + get.translation(target) + "发动了【遗毒】");
					var color = get.color(cards[0], target);
					var bool = true;
					for (var i = 1; i < cards.length; i++) {
						if (get.color(cards[i], target) != color) {
							bool = false;
							break;
						}
					}
					if (bool) target.discard(cards, "notBySelf").discarder = player;
				},
			},
			xinwanyi: {
				audio: "wanyi",
				trigger: { player: "useCardToTargeted" },
				filter: function (event, player) {
					return player != event.target && event.targets.length == 1 && (event.card.name == "sha" || get.type(event.card, null, false) == "trick") && event.target.countCards("he") > 0;
				},
				locked: false,
				logTarget: "target",
				check: function (event, player) {
					return get.effect(event.target, { name: "guohe_copy2" }, player, player) > 0;
				},
				prompt2: "将该角色的一张牌置于武将牌上作为“嫕”",
				content: function () {
					"step 0";
					event.target = trigger.target;
					player.choosePlayerCard(event.target, true, "he");
					"step 1";
					if (result.bool) {
						var cards = result.cards;
						player.addToExpansion(cards, target, "give").gaintag.add("xinwanyi");
					}
				},
				mod: {
					cardEnabled: function (card, player) {
						var cards = player.getExpansions("xinwanyi");
						if (cards.length) {
							var suit = get.suit(card);
							if (suit == "none") return;
							for (var i of cards) {
								if (get.suit(i, player) == suit) return false;
							}
						}
					},
					cardRespondable: function (card, player) {
						var cards = player.getExpansions("xinwanyi");
						if (cards.length) {
							var suit = get.suit(card);
							if (suit == "none") return;
							for (var i of cards) {
								if (get.suit(i, player) == suit) return false;
							}
						}
					},
					cardSavable: function (card, player) {
						var cards = player.getExpansions("xinwanyi");
						if (cards.length) {
							var suit = get.suit(card);
							if (suit == "none") return;
							for (var i of cards) {
								if (get.suit(i, player) == suit) return false;
							}
						}
					},
					cardDiscardable: function (card, player) {
						var cards = player.getExpansions("xinwanyi");
						if (cards.length) {
							var suit = get.suit(card);
							if (suit == "none") return;
							for (var i of cards) {
								if (get.suit(i, player) == suit) return false;
							}
						}
					},
				},
				marktext: "嫕",
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "xinwanyi_give",
				subSkill: {
					give: {
						audio: "wanyi",
						trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return player.getExpansions("xinwanyi").length > 0;
						},
						content: function () {
							"step 0";
							player.chooseTarget(true, "婉嫕：令一名角色获得一张“嫕”").set("ai", function (target) {
								return get.attitude(_status.event.player, target);
							});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								player.line(target, "green");
								var cards = player.getExpansions("xinwanyi");
								if (cards.length == 1) event._result = { bool: true, links: cards };
								else player.chooseButton(["令" + get.translation(target) + "获得一张“嫕”", cards], true);
							} else event.finish();
							"step 2";
							if (result.bool) {
								target.gain(result.links, player, "give");
							}
						},
					},
				},
			},
			xinxuanbei: {
				audio: "xuanbei",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(current => lib.skill.xinxuanbei.filterTarget(null, player, current));
				},
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("hej") > 0;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(target, "hej", true);
					"step 1";
					if (result.bool) {
						var card = result.cards[0];
						var cardx = get.autoViewAs({ name: "sha" }, [card]);
						if ((get.position(card) != "j" && !game.checkMod(card, target, "unchanged", "cardEnabled2", target)) || !target.canUse(cardx, player, false)) event.finish();
						else {
							var next = target.useCard(cardx, [card], player, false);
							event.card = next.card;
						}
					} else event.finish();
					"step 2";
					var num = 1;
					if (
						player.hasHistory("damage", function (evt) {
							return evt.card == event.card;
						})
					)
						num++;
					player.draw(num);
				},
				ai: {
					order: 7,
					result: {
						player: function (player, target) {
							return get.effect(target, { name: "guohe_copy" }, player, player) + get.effect(player, { name: "sha" }, target, player);
						},
					},
				},
			},
			xiongshu: {
				audio: 2,
				trigger: { global: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					return player != event.player && event.player.countCards("h") > 0 && player.countCards("he") >= player.countMark("xiongshu_count");
				},
				content: function () {
					"step 0";
					event.target = trigger.player;
					var num = player.countMark("xiongshu_count");
					if (num > 0)
						player
							.chooseToDiscard("he", num, get.prompt("xiongshu", trigger.player), "弃置" + get.cnNumber(num) + "张牌并展示其一张手牌")
							.set("goon", get.attitude(player, event.target) < 0)
							.set("ai", function (card) {
								if (!_status.event.goon) return 0;
								return 6 - _status.event.player.countMark("xiongshu_count") - get.value(card);
							}).logSkill = ["xiongshu", trigger.player];
					else
						player
							.chooseBool(get.prompt("xiongshu", trigger.player), "展示其一张牌")
							.set("goon", get.attitude(player, event.target) < 0)
							.set("ai", function (card) {
								return _status.event.goon;
							});
					"step 1";
					if (result.bool) {
						if (!result.cards || !result.cards.length) player.logSkill("xiongshu", target);
						player.addTempSkill("xiongshu_count", "roundStart");
						player.addMark("xiongshu_count", 1, false);
					}
					if (result.bool && target.countCards("h") > 0) {
						player.choosePlayerCard(target, true, "h");
					} else event.finish();
					"step 2";
					var card = result.cards[0],
						name = get.name(card),
						str = get.translation(target);
					player.showCards(card, get.translation(player) + "对" + str + "发动了【凶竖】");
					player.addTempSkill("xiongshu_effect", "phaseUseAfter");
					player.storage.xiongshu_effect = [card, name];
					if (Math.random() < 0.5) {
						target.storage.xiongshu_ai = name;
						target.addTempSkill("xiongshu_ai", "phaseUseAfter");
					}
					player
						.chooseControl("会使用", "不会使用")
						.set("prompt", "预测：" + str + "是否会使用" + get.translation(name) + "？")
						.set(
							"choice",
							(function () {
								if (!target.hasValueTarget(card)) return 1;
								return Math.random() < 0.5 ? 0 : 1;
							})()
						)
						.set("ai", () => _status.event.choice);
					"step 3";
					player.storage.xiongshu_effect[2] = result.index == 0;
				},
				ai: { expose: 0.35 },
				subSkill: {
					ai: {
						charlotte: true,
						onremove: true,
						ai: {
							effect: {
								player: function (card, player, target) {
									if (card.name == player.storage.xiongshu_ai) return "zeroplayertarget";
								},
							},
						},
					},
					count: {
						charlotte: true,
						onremove: true,
					},
					effect: {
						trigger: { global: "phaseUseEnd" },
						forced: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							var info = player.storage.xiongshu_effect;
							return Array.isArray(info) && event.player.isIn();
						},
						logTarget: "player",
						content: function () {
							var target = trigger.player;
							var info = player.storage.xiongshu_effect;
							var card = info[0];
							if (
								target.hasHistory("useCard", function (evt) {
									return evt.card.name == info[1] && evt.getParent("phaseUse") == trigger;
								}) == info[2]
							)
								target.damage();
							else {
								if (target.getCards("hej").includes(card)) player.gain(card, target, "give");
								else if (get.position(card, true) == "d") player.gain(card, "gain2");
							}
						},
					},
				},
			},
			jianhui: {
				audio: 2,
				getLastPlayer: function (evt, player) {
					var history = player.getAllHistory("damage");
					if (!history.length) return null;
					var i = history.indexOf(evt);
					if (i == -1) i = history.length - 1;
					else i--;
					for (i; i >= 0; i--) {
						if (history[i].source) return history[i].source;
					}
					return null;
				},
				trigger: { player: "damageEnd" },
				forced: true,
				filter: function (event, player) {
					return event.source && event.source.isIn() && event.source == lib.skill.jianhui.getLastPlayer(event, player) && event.source.countCards("he") > 0;
				},
				content: function () {
					trigger.source.chooseToDiscard("he", true);
				},
				group: "jianhui_draw",
				subSkill: {
					draw: {
						audio: "jianhui",
						trigger: { source: "damageSource" },
						forced: true,
						logTarget: "player",
						filter: function (event, player) {
							return event.player == lib.skill.jianhui.getLastPlayer(event, player);
						},
						content: function () {
							player.draw();
						},
					},
				},
			},
			huaiyuan: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				filter: function (event, player) {
					var evt = event.getl(player);
					if (!evt || !evt.hs || !evt.hs.length) return false;
					if (event.name == "lose") {
						for (var i in event.gaintag_map) {
							if (event.gaintag_map[i].includes("huaiyuanx")) return true;
						}
						return false;
					}
					return player.hasHistory("lose", function (evt) {
						if (event != evt.getParent()) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes("huaiyuanx")) return true;
						}
						return false;
					});
				},
				forced: true,
				locked: false,
				content: function () {
					"step 0";
					var num = 0;
					if (trigger.name == "lose") {
						for (var i in trigger.gaintag_map) {
							if (trigger.gaintag_map[i].includes("huaiyuanx")) num++;
						}
					} else
						player.getHistory("lose", function (evt) {
							if (trigger != evt.getParent()) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes("huaiyuanx")) num++;
							}
							return false;
						});
					event.count = num;
					"step 1";
					event.count--;
					player.chooseTarget(true, "请选择【怀远】的目标", "令一名角色执行一项：⒈其的手牌上限+1。⒉其的攻击范围+1。⒊其摸一张牌。").set("ai", function (target) {
						var player = _status.event.player,
							att = get.attitude(player, target);
						if (att <= 0) return 0;
						if (target.hasValueTarget({ name: "sha" }, false) && !target.hasValueTarget({ name: "sha" })) att *= 2.2;
						if (target.needsToDiscard()) att *= 1.3;
						return att * Math.sqrt(Math.max(1, 4 - target.countCards("h")));
					});
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "green");
						var str = get.translation(target);
						player
							.chooseControl()
							.set("choiceList", ["令" + str + "的手牌上限+1", "令" + str + "的攻击范围+1", "令" + str + "摸一张牌"])
							.set("ai", function () {
								var player = _status.event.player,
									target = _status.event.getParent().target;
								if (target.hasValueTarget({ name: "sha" }, false) && !target.hasValueTarget({ name: "sha" })) return 1;
								if (target.needsToDiscard()) return 0;
								return 2;
							});
					} else event.finish();
					"step 3";
					if (result.index == 2) target.draw();
					else {
						target.addSkill("huaiyuan_effect" + result.index);
						target.addMark("huaiyuan_effect" + result.index, 1, false);
						game.log(target, "的", "#g" + ["手牌上限", "攻击范围"][result.index], "+1");
						game.delayx();
					}
					if (event.count > 0) event.goto(1);
				},
				group: ["huaiyuan_init", "huaiyuan_die"],
				subSkill: {
					init: {
						audio: "huaiyuan",
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						locked: false,
						filter: function (event, player) {
							return (event.name != "phase" || game.phaseNumber == 0) && player.countCards("h") > 0;
						},
						content: function () {
							var hs = player.getCards("h");
							if (hs.length) player.addGaintag(hs, "huaiyuanx");
						},
					},
					die: {
						audio: "huaiyuan",
						trigger: { player: "die" },
						direct: true,
						forceDie: true,
						skillAnimation: true,
						animationColor: "water",
						filter: function (event, player) {
							return player.hasMark("huaiyuan_effect0") || player.hasMark("huaiyuan_effect1");
						},
						content: function () {
							"step 0";
							var str = "令一名其他角色",
								num1 = player.countMark("huaiyuan_effect0"),
								num2 = player.countMark("huaiyuan_effect1");
							if (num1 > 0) {
								str += "手牌上限+";
								str += num1;
								if (num2 > 0) str += "且";
							}
							if (num2 > 0) {
								str += "攻击范围+";
								str += num2;
							}
							player
								.chooseTarget(lib.filter.notMe, get.prompt("huaiyuan"), str)
								.set("forceDie", true)
								.set("ai", function (target) {
									return get.attitude(_status.event.player, target) + 114514;
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("huaiyuan_die", target);
								var num1 = player.countMark("huaiyuan_effect0"),
									num2 = player.countMark("huaiyuan_effect1");
								if (num1 > 0) {
									target.addSkill("huaiyuan_effect0");
									target.addMark("huaiyuan_effect0", num1, false);
								}
								if (num2 > 0) {
									target.addSkill("huaiyuan_effect1");
									target.addMark("huaiyuan_effect1", num2, false);
								}
								game.delayx();
							}
						},
					},
					effect0: {
						charlotte: true,
						onremove: true,
						mod: {
							maxHandcard: function (player, num) {
								return num + player.countMark("huaiyuan_effect0");
							},
						},
						marktext: "怀",
						intro: { content: "手牌上限+#" },
					},
					effect1: {
						charlotte: true,
						onremove: true,
						mod: {
							attackRange: function (player, num) {
								return num + player.countMark("huaiyuan_effect1");
							},
						},
						marktext: "远",
						intro: { content: "攻击范围+#" },
					},
				},
			},
			chongxin: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return (
						player.countCards("he") > 0 &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") > 0;
						})
					);
				},
				filterCard: true,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				position: "he",
				content: function () {
					"step 0";
					player.recast(cards);
					"step 1";
					if (target.countCards("he") > 0) {
						target.chooseCard("he", true, "请重铸一张牌", lib.filter.cardRecastable);
					} else event.finish();
					"step 2";
					if (result.bool) {
						target.recast(result.cards);
					}
				},
				ai: {
					order: 6,
					result: {
						player: 1,
						target: function (player, target) {
							return 0.5 * Math.sqrt(Math.min(3, target.countCards("h")));
						},
					},
				},
			},
			dezhang: {
				trigger: { player: "phaseZhunbeiBegin" },
				derivation: "weishu",
				juexingji: true,
				forced: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return !player.hasCard(function (card) {
						return card.hasGaintag("huaiyuanx");
					}, "h");
				},
				content: function () {
					player.awakenSkill("dezhang");
					player.loseMaxHp();
					player.addSkills("weishu");
				},
			},
			weishu: {
				audio: 2,
				trigger: { player: "gainAfter" },
				forced: true,
				filter: function (event, player) {
					return event.getParent().name == "draw" && event.getParent(2).name != "weishu" && event.getParent("phaseDraw").player != player;
				},
				content: function () {
					"step 0";
					player.chooseTarget(true, "请选择【卫戍】的目标", "令一名角色摸一张牌").set("ai", function (target) {
						return get.attitude(_status.event.player, target) * Math.sqrt(Math.max(1, 4 - target.countCards("h")));
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.draw();
					}
				},
				group: "weishu_discard",
				subSkill: {
					discard: {
						audio: "weishu",
						trigger: {
							player: "loseAfter",
							global: "loseAsyncAfter",
						},
						forced: true,
						filter: function (event, player) {
							return event.type == "discard" && event.getParent(3).name != "weishu_discard" && event.getParent("phaseDiscard").player != player && event.getl(player).cards2.length > 0 && game.hasPlayer(target => target != player && target.countDiscardableCards(player, "he") > 0);
						},
						content: function () {
							"step 0";
							player
								.chooseTarget(true, "请选择【卫戍】的目标", "弃置一名其他角色的一张牌", function (card, player, target) {
									return target != player && target.countDiscardableCards(player, "he") > 0;
								})
								.set("ai", function (target) {
									var player = _status.event.player;
									return get.effect(target, { name: "guohe_copy2" }, player, player);
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.line(target, "green");
								player.discardPlayerCard(target, "he", true);
							}
						},
					},
				},
			},
			gaoling: {
				unique: true,
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				hiddenSkill: true,
				filter: function (event, player) {
					// 临时修改（by 棘手怀念摧毁）
					return event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("gaoling")) && player != _status.currentPhase && game.hasPlayer(current => current.isDamaged());
					// return event.toShow?.some(i => get.character(i).skills?.includes("gaoling")) && player != _status.currentPhase && game.hasPlayer(current => current.isDamaged());
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("gaoling"), "令一名角色回复1点体力", function (card, player, target) {
							return target.isDamaged();
						})
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.recoverEffect(target, player, player);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("gaoling", target);
						target.recover();
					}
				},
			},
			qimei: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				preHidden: true,
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("qimei"), "选择一名其他角色并获得“齐眉”效果", lib.filter.notMe)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.attitude(player, target) / (Math.abs(player.countCards("h") + 2 - target.countCards("h")) + 1);
						})
						.setHiddenSkill("qimei");
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("qimei", target);
						player.storage.qimei_draw = target;
						player.addTempSkill("qimei_draw", { player: "phaseBegin" });
						game.delayx();
					}
				},
				subSkill: {
					draw: {
						audio: "qimei",
						charlotte: true,
						forced: true,
						popup: false,
						trigger: {
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "loseAfter", "addToExpansionAfter"],
						},
						usable: 1,
						filter: function (event, player) {
							var target = player.storage.qimei_draw;
							if (!target || !target.isIn()) return false;
							if (player.countCards("h") != target.countCards("h")) return false;
							var hasChange = function (event, player) {
								var gain = 0,
									lose = 0;
								if (event.getg) gain = event.getg(player).length;
								if (event.getl) lose = event.getl(player).hs.length;
								return gain != lose;
							};
							return hasChange(event, player) || hasChange(event, target);
						},
						content: function () {
							"step 0";
							if (trigger.delay === false) game.delayx();
							"step 1";
							var target = player.storage.qimei_draw;
							player.logSkill("qimei_draw", target);
							var drawer = [];
							var hasChange = function (event, player) {
								var gain = 0,
									lose = 0;
								if (event.getg) gain = event.getg(player).length;
								if (event.getl) lose = event.getl(player).hs.length;
								return gain != lose;
							};
							if (hasChange(trigger, player)) drawer.push(target);
							if (hasChange(trigger, target)) drawer.push(player);
							if (drawer.length == 1) drawer[0].draw();
							else {
								game.asyncDraw(drawer.sortBySeat());
								game.delayex();
							}
						},
						group: "qimei_hp",
						onremove: true,
						mark: "character",
						intro: { content: "已和$组成齐眉组合" },
					},
					hp: {
						audio: "qimei",
						trigger: { global: "changeHp" },
						charlotte: true,
						forced: true,
						logTarget: function (event, player) {
							return player.storage.qimei_draw;
						},
						usable: 1,
						filter: function (event, player) {
							var target = player.storage.qimei_draw;
							if (!target || !target.isIn()) return false;
							if (player != event.player && target != event.player) return false;
							return player.hp == target.hp;
						},
						content: function () {
							game.delayx();
							(player == trigger.player ? player.storage.qimei_draw : player).draw();
						},
					},
				},
			},
			ybzhuiji: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				preHidden: true,
				content: function () {
					"step 0";
					var list = ["摸两张牌，并于出牌阶段结束时失去1点体力"];
					if (player.isDamaged()) list.push("回复1点体力，并于出牌阶段结束时弃置两张牌");
					player
						.chooseControl("cancel2")
						.set("choiceList", list)
						.set("prompt", get.prompt("ybzhuiji"))
						.set("ai", function () {
							var player = _status.event.player;
							if (player.isDamaged() && player.countCards("h", "tao") < player.getDamagedHp()) return 1;
							return "cancel2";
						})
						.setHiddenSkill("ybzhuiji");
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("ybzhuiji");
						if (result.index == 0) player.draw(2);
						else player.recover();
						player.addTempSkill("ybzhuiji_" + result.index, "phaseUseAfter");
					}
				},
				subSkill: {
					0: {
						trigger: { player: "phaseUseEnd" },
						forced: true,
						charlotte: true,
						content: function () {
							player.loseHp();
						},
					},
					1: {
						trigger: { player: "phaseUseEnd" },
						forced: true,
						charlotte: true,
						content: function () {
							player.chooseToDiscard("he", 2, true);
						},
					},
				},
			},
			canmou: {
				audio: 2,
				trigger: { global: "useCardToPlayer" },
				direct: true,
				filter: function (event, player) {
					if (!event.player.isMaxHandcard(true) || !event.isFirstTarget || get.type(event.card, null, false) != "trick") return false;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current); //&&lib.filter.targetInRange(event.card,event.player,current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				preHidden: true,
				content: function () {
					"step 0";
					var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
					player
						.chooseTarget(get.prompt("canmou"), function (card, player, target) {
							var player = _status.event.source;
							return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target); //&&lib.filter.targetInRange(_status.event.card,player,target);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.source;
							return get.effect(target, trigger.card, player, _status.event.player);
						})
						.set("targets", trigger.targets)
						.set("card", trigger.card)
						.set("source", trigger.player)
						.setHiddenSkill(event.name);
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets) {
						player.logSkill(event.name, event.targets);
						trigger.targets.addArray(event.targets);
						game.log(event.targets, "也成为了", trigger.card, "的目标");
					}
				},
			},
			congjian: {
				audio: 2,
				trigger: { global: "useCardToTarget" },
				logTarget: "target",
				filter: function (event, player) {
					return event.target != player && event.targets.length == 1 && get.type(event.card, null, false) == "trick" && event.target.isMaxHp(true) && lib.filter.targetEnabled2(event.card, event.player, player);
				},
				check: function (event, player) {
					return get.effect(player, event.card, event.player, player) > 0;
				},
				preHidden: true,
				content: function () {
					trigger.targets.push(player);
					game.log(player, "也成为了", trigger.card, "的目标");
					var next = game.createEvent("congjian_draw", false);
					next.player = player;
					event.next.remove(next);
					trigger.getParent().after.push(next);
					next.setContent(function () {
						if (
							player.hasHistory("damage", function (evt) {
								return evt.card == event.parent.card;
							})
						)
							player.draw(2);
					});
				},
			},
			wanyi: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return (
						player.getStorage("wanyi2").length < 4 &&
						player.hasCard(function (i) {
							return get.is.yingbian(i);
						}, "hs")
					);
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = ["zhujinqiyuan", "chuqibuyi", "shuiyanqijunx", "dongzhuxianji"];
						list.removeArray(player.getStorage("wanyi2"));
						return ui.create.dialog("婉嫕", [list, "vcard"], "hidden");
					},
					filter: function (button, player) {
						return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent());
					},
					check: function (button) {
						return _status.event.player.getUseValue({ name: button.link[2] });
					},
					backup: function (links) {
						return {
							audio: "wanyi",
							popname: true,
							viewAs: {
								name: links[0][2],
							},
							filterCard: function (card) {
								return get.is.yingbian(card);
							},
							check: function (card) {
								return 1 / Math.max(1, get.value(card));
							},
							position: "hs",
							onuse: function (links, player) {
								if (!player.storage.wanyi2) player.storage.wanyi2 = [];
								player.storage.wanyi2.add(links.card.name);
								player.addTempSkill("wanyi2");
							},
						};
					},
					prompt: function (links) {
						return "将一张应变牌当做" + get.translation(links[0][2]) + "使用";
					},
				},
				subSkill: { backup: {} },
				ai: { order: 8, result: { player: 1 } },
			},
			wanyi2: { onremove: true },
			maihuo: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				logTarget: "player",
				filter: function (event, player) {
					return event.card.name == "sha" && event.card.isCard && event.getParent(2).name != "maihuo_effect" && event.cards.filterInD().length > 0 && event.targets.length == 1 && event.player.isIn() && !event.player.getExpansions("maihuo_effect").length;
				},
				prompt2: function (event) {
					return "令" + get.translation(event.card) + "暂时对你无效";
				},
				check: function (event, player) {
					return get.effect(player, event.card, event.player, player) < 0;
				},
				content: function () {
					trigger.excluded.add(player);
					var target = trigger.player,
						cards = trigger.cards.filterInD();
					target.addToExpansion("gain2", cards).gaintag.add("maihuo_effect");
					target.storage.maihuo_target = player;
					target.addSkill("maihuo_effect");
				},
				group: "maihuo_damage",
				subSkill: {
					effect: {
						trigger: { player: "phaseUseBegin" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return player.getExpansions("maihuo_effect").length > 0;
						},
						content: function () {
							"step 0";
							var cards = player.getExpansions("maihuo_effect"),
								card = cards[0];
							if (card.name != "sha")
								card = get.autoViewAs(
									{
										name: "sha",
										isCard: true,
									},
									cards
								);
							var target = player.storage.maihuo_target;
							if (target.isIn() && player.canUse(card, target, null, true)) {
								player.useCard(card, target, cards);
							}
							"step 1";
							player.removeSkill("maihuo_effect");
						},
						marktext: "祸",
						intro: {
							content: "expansion",
							markcount: "expansion",
						},
						onremove: function (player, skill) {
							var cards = player.getExpansions(skill);
							if (cards.length) player.loseToDiscardpile(cards);
						},
						ai: { threaten: 1.05 },
					},
					damage: {
						trigger: { source: "damageSource" },
						forced: true,
						locked: false,
						filter: function (event, player) {
							return event.player.hasSkill("maihuo_effect") && event.player.getExpansions("maihuo_effect").length > 0;
						},
						content: function () {
							trigger.player.removeSkill("maihuo_effect");
						},
					},
				},
			},
			xuanbei: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				forced: true,
				locked: false,
				content: function () {
					var cards = [];
					while (cards.length < 2) {
						var card = get.cardPile2(function (i) {
							return get.is.yingbian(i) && !cards.includes(i);
						});
						if (!card) break;
						else cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
				},
				group: "xuanbei_give",
				subSkill: {
					give: {
						trigger: { player: "useCardAfter" },
						usable: 1,
						filter: function (event, player) {
							return (event.card.yingbian || get.is.yingbian(event.card)) && event.cards.filterInD().length > 0;
						},
						direct: true,
						content: function () {
							"step 0";
							event.cards = trigger.cards.filterInD();
							player.chooseTarget(get.prompt("xuanbei"), "令一名其他角色获得" + get.translation(event.cards), lib.filter.notMe).set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (att < 3) return 0;
								if (target.hasJudge("lebu")) att /= 2;
								if (target.hasSkillTag("nogain")) att /= 10;
								return att / (1 + get.distance(player, target, "absolute"));
							});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("xuanbei_give", target);
								target.gain(cards, "gain2").giver = player;
							} else player.storage.counttrigger.xuanbei_give--;
						},
						ai: { expose: 0.1 },
					},
				},
			},
			xianwan: {
				audio: 2,
				enable: "chooseToUse",
				filter: function (event, player) {
					return (
						event.filterCard &&
						event.filterCard(
							{
								name: "sha" + (player.isLinked() ? "" : "n"),
								isCard: true,
							},
							player,
							event
						)
					);
				},
				viewAs: function (cards, player) {
					return {
						name: "sha" + (player.isLinked() ? "" : "n"),
						isCard: true,
					};
				},
				filterCard: () => false,
				selectCard: -1,
				prompt: "将武将牌重置并视为使用【杀】",
				log: false,
				check: () => 1,
				precontent: function () {
					player.logSkill("xianwan");
					player.link();
				},
				ai: {
					order: 3.4,
					respondSha: true,
					respondShan: true,
					skillTagFilter: function (player, tag) {
						return tag == "respondSha" + (player.isLinked() ? "" : "n");
					},
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "respondShan") && current < 0 && !player.isLinked()) return 0.4;
						},
					},
				},
			},
			recaiwang: {
				audio: "caiwang",
				inherit: "caiwang",
				group: ["recaiwang_hand", "recaiwang_equip", "recaiwang_judge"],
			},
			recaiwang_hand: {
				audio: "caiwang",
				enable: ["chooseToUse", "chooseToRespond"],
				sourceSkill: "recaiwang",
				viewAsFilter: function (player) {
					var js = player.getCards("h");
					return js.length == 1 && game.checkMod(js[0], player, "unchanged", "cardEnabled2", player);
				},
				selectCard: -1,
				filterCard: true,
				position: "h",
				prompt: "将全部手牌当做【闪】使用",
				viewAs: { name: "shan" },
				check: card => 10 - get.value(card),
				ai: {
					order: 1,
					respondShan: true,
					skillTagFilter: function (player) {
						return player.countCards("h") == 1;
					},
				},
			},
			recaiwang_equip: {
				audio: "caiwang",
				enable: ["chooseToUse", "chooseToRespond"],
				sourceSkill: "recaiwang",
				viewAsFilter: function (player) {
					var js = player.getCards("e");
					return js.length == 1 && game.checkMod(js[0], player, "unchanged", "cardEnabled2", player);
				},
				selectCard: -1,
				filterCard: true,
				check: card => 9 - get.value(card),
				position: "e",
				prompt: "将装备区的牌当做【无懈可击】使用",
				viewAs: { name: "wuxie" },
				ai: {
					order: 1,
				},
			},
			recaiwang_judge: {
				audio: "caiwang",
				enable: ["chooseToUse", "chooseToRespond"],
				sourceSkill: "recaiwang",
				viewAsFilter: function (player) {
					var js = player.getCards("j");
					return js.length == 1 && game.checkMod(js[0], player, "unchanged", "cardEnabled2", player);
				},
				selectCard: -1,
				filterCard: true,
				position: "j",
				prompt: "将判定区的牌当做【杀】使用",
				viewAs: { name: "sha" },
				check: card => 1,
				locked: false,
				ai: {
					order: 10,
					respondSha: true,
					skillTagFilter: function (player) {
						return player.countCards("j") == 1;
					},
					effect: {
						target: function (card, player, target, current) {
							if (card && (card.name == "shandian" || card.name == "fulei") && player == target && !target.countCards("j") && target.isPhaseUsing() && target.hasValueTarget({ name: "sha" }, null, true)) return [1, 2];
						},
					},
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (card.name == "shandian" || card.name == "fulei") return num + 3;
					},
				},
			},
			caozhao: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					if (
						player.countCards("h") == 0 ||
						!game.hasPlayer(function (current) {
							return current != player && current.hp <= player.hp;
						})
					)
						return false;
					var list = player.getStorage("caozhao");
					for (var i of lib.inpile) {
						if (!list.includes(i) && ["basic", "trick"].includes(get.type(i))) return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = player.getStorage("caozhao"),
							vcards = [];
						for (var i of lib.inpile) {
							if (!list.includes(i)) {
								var type = get.type(i);
								if (type == "basic" || type == "trick") vcards.push([type, "", i]);
							}
						}
						return ui.create.dialog("草诏", [vcards, "vcard"]);
					},
					check: function (button) {
						return _status.event.player.getUseValue({ name: button.link[2], isCard: true }, null, true);
					},
					backup: function (links, player) {
						return {
							audio: "caozhao",
							cardname: links[0][2],
							filterCard: true,
							position: "h",
							check: function (card) {
								return player.getUseValue({ name: lib.skill.caozhao_backup.cardname }) - (player.getUseValue(card, null, true) + 0.1) / (get.value(card) / 6);
							},
							filterTarget: function (card, player, target) {
								return target != player && target.hp <= player.hp;
							},
							discard: false,
							lose: false,
							content: function () {
								"step 0";
								player.showCards(cards, get.translation(player) + "发动【草诏】，声明" + get.translation(lib.skill.caozhao_backup.cardname));
								if (!player.storage.caozhao) player.storage.caozhao = [];
								player.storage.caozhao.push(lib.skill.caozhao_backup.cardname);
								"step 1";
								target
									.chooseControl()
									.set("choiceList", ["令" + get.translation(player) + "将" + get.translation(cards[0]) + "的牌名改为" + get.translation(lib.skill.caozhao_backup.cardname), "失去1点体力"])
									.set("ai", function (event, player) {
										var target = _status.event.getParent().player;
										if (get.attitude(player, target) > 0) return 0;
										if (player.hp > 3 || (player.hp > 1 && player.hasSkill("zhaxiang"))) return 1;
										if (player.hp > 2) return Math.random() > 0.5 ? 0 : 1;
										return 0;
									});
								"step 2";
								if (result.index == 1) {
									target.addExpose(0.2);
									target.loseHp();
									event.finish();
								} else {
									player.chooseTarget("是否将" + get.translation(lib.skill.caozhao_backup.cardname) + "（" + get.translation(cards[0]) + "）交给一名其他角色？", lib.filter.notMe).set("ai", () => -1);
								}
								"step 3";
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, "green");
									if (!target.storage.caozhao_info) target.storage.caozhao_info = {};
									target.storage.caozhao_info[cards[0].cardid] = lib.skill.caozhao_backup.cardname;
									target.addSkill("caozhao_info");
									player.give(cards, target, "give").gaintag.add("caozhao");
								} else {
									if (!player.storage.caozhao_info) player.storage.caozhao_info = {};
									player.storage.caozhao_info[cards[0].cardid] = lib.skill.caozhao_backup.cardname;
									player.addGaintag(cards, "caozhao");
									player.addSkill("caozhao_info");
								}
							},
							ai: {
								result: {
									player: 2,
									target: 0.1,
								},
							},
						};
					},
					prompt: function (links, player) {
						return "将一张手牌声明为" + get.translation(links[0][2]);
					},
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			caozhao_info: {
				charlotte: true,
				mod: {
					cardname: function (card, player) {
						var map = player.storage.caozhao_info;
						if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("caozhao")) return map[card.cardid];
					},
					cardnature: function (card, player) {
						var map = player.storage.caozhao_info;
						if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("caozhao")) return false;
					},
				},
			},
			olxibing: {
				audio: 2,
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					return event.player && event.source && event.player != event.source && event.player.isAlive() && event.source.isAlive() && (event.player.countCards("he") > 0 || event.source.countCards("he") > 0);
				},
				direct: true,
				content: function () {
					"step 0";
					var target = trigger.source;
					event.target = target;
					player
						.chooseTarget(get.prompt("olxibing"), "弃置自己或" + get.translation(target) + "的两张牌，然后手牌数较少的角色摸两张牌且不能对你使用牌直到回合结束", function (card, player, target) {
							if (target != player && target != _status.event.target) return false;
							return target.countCards("he") > 0;
						})
						.set("target", target)
						.set("ai", function (targetx) {
							var player = _status.event.player,
								target = _status.event.target;
							if (target == targetx) {
								if (get.attitude(player, target) > 0) return 0;
								var cards = target
									.getCards("he", function (card) {
										return lib.filter.canBeDiscarded(card, player, target);
									})
									.sort(function (a, b) {
										return get.buttonValue(b) - get.buttonValue(a);
									});
								if (
									target.countCards("h") - player.countCards("h") >=
									Math.max(
										0,
										Math.min(2, cards.length) -
											target.countCards("e", function (card) {
												var index = cards.indexOf(card);
												return index != -1 && index < 2;
											})
									)
								)
									return 1;
								return 0;
							}
							var cards = player
								.getCards("he", function (card) {
									return lib.filter.cardDiscardable(card, player, "olxibing");
								})
								.sort(function (a, b) {
									return get.useful(a) - get.useful(b);
								});
							if (
								player.countCards("h") - target.countCards("h") <
									Math.max(
										0,
										Math.min(cards.length, 2) -
											player.countCards("e", function (card) {
												var index = cards.indexOf(card);
												return index != -1 && index < 2;
											})
									) &&
								(cards.length < 2 || get.value(cards[1]) < 5.5)
							)
								return 0.8;
							return 0;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("olxibing", target);
						var target = result.targets[0];
						if (target == player) player.chooseToDiscard("he", 2, true);
						else player.discardPlayerCard(target, "he", true, 2);
					} else event.finish();
					"step 2";
					if (player.isIn() && target.isIn()) {
						var hs = player.countCards("h"),
							ts = target.countCards("h");
						if (hs != ts) {
							var drawer = hs > ts ? target : player;
							drawer.draw(2);
							player.addTempSkill("olxibing2");
							player.markAuto("olxibing2", [drawer]);
						}
					}
				},
			},
			olxibing2: {
				mod: {
					targetEnabled: function (card, player, target) {
						if (target.getStorage("olxibing2").includes(player)) return false;
					},
					cardSavable: function (card, player, target) {
						if (target.getStorage("olxibing2").includes(player)) return false;
					},
				},
				onremove: true,
			},
			bolan: {
				audio: 2,
				banned: ["kotomi_chuanxiang"],
				global: "bolan_g",
				initList: function (player) {
					var list,
						skills = [];
					if (get.mode() == "guozhan") {
						list = [];
						for (var i in lib.characterPack.mode_guozhan) {
							if (lib.character[i]) list.push(i);
						}
					} else if (_status.connectMode) list = get.charactersOL();
					else {
						list = [];
						for (var i in lib.character) {
							if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					for (var i of list) {
						if (i.indexOf("gz_jun") == 0) continue;
						for (var j of lib.character[i][3]) {
							if (j == "bolan") continue;
							var skill = lib.skill[j];
							if (!skill || skill.juexingji || skill.hiddenSkill || skill.zhuSkill || skill.dutySkill || skill.chargeSkill || lib.skill.bolan.banned.includes(j)) continue;
							if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
							var info = lib.translate[j + "_info"];
							if (info && info.indexOf("出牌阶段限一次") != -1) skills.add(j);
						}
					}
					player.storage.bolan = skills;
				},
				check: function (event, player) {
					return true;
				},
				trigger: { player: "phaseUseBegin" },
				frequent: true,
				preHidden: true,
				content: function () {
					"step 0";
					if (player.isIn()) {
						if (!player.storage.bolan) lib.skill.bolan.initList(player);
						var list = player.storage.bolan.randomGets(3);
						if (!list.length) {
							event.finish();
							return;
						}
						player
							.chooseControl(list)
							.set(
								"choiceList",
								list.map(function (i) {
									return '<div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div>";
								})
							)
							.set("displayIndex", false)
							.set("prompt", "博览：请选择你要获得的技能")
							.set("ai", () => {
								var list = _status.event.controls.slice();
								return list.sort((a, b) => {
									return get.skillRank(b, "in") - get.skillRank(a, "in");
								})[0];
							});
					} else event.finish();
					"step 1";
					player.addTempSkills(result.control, "phaseUseEnd");
					player.popup(result.control);
					// game.log(player,'获得了','#g【'+get.translation(result.control)+'】');
				},
				ai: { threaten: 0.9 },
				subSkill: {
					g: {
						audio: "bolan",
						forceaudio: true,
						enable: "phaseUse",
						usable: 1,
						prompt: "出牌阶段限一次。你可以令一名有〖博览〗的角色从三个描述中包含“出牌阶段限一次”的技能中选择一个，你获得此技能直到此阶段结束。",
						filter: function (event, player) {
							return game.hasPlayer(function (current) {
								return current != player && current.hasSkill("bolan");
							});
						},
						filterTarget: function (card, player, target) {
							return player != target && target.hasSkill("bolan");
						},
						selectTarget: function () {
							if (
								game.countPlayer(current => {
									return lib.skill.bolan_g.filterTarget(null, _status.event.player, current);
								}) == 1
							)
								return -1;
							return 1;
						},
						content: function () {
							"step 0";
							player.loseHp();
							"step 1";
							if (target.isIn() && player.isIn()) {
								if (!target.storage.bolan) lib.skill.bolan.initList(target);
								var list = target.storage.bolan.randomGets(3);
								if (!list.length) {
									event.finish();
									return;
								}
								target
									.chooseControl(list)
									.set(
										"choiceList",
										list.map(function (i) {
											return '<div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div>";
										})
									)
									.set("displayIndex", false)
									.set("prompt", "博览：请选择令" + get.translation(player) + "获得的技能")
									.set("ai", () => {
										var list = _status.event.controls.slice();
										return list.sort((a, b) => {
											return (get.skillRank(b, "in") - get.skillRank(a, "in")) * get.attitude(_status.event.player, _status.event.getParent().player);
										})[0];
									});
							} else event.finish();
							"step 2";
							target.line(player);
							player.addTempSkills(result.control, "phaseUseEnd");
							player.popup(result.control);
						},
						ai: {
							order: function (item, player) {
								if (player.hp >= 5 || player.countCards("h") >= 10) return 10;
								var list = game.filterPlayer(current => lib.skill.bolan_g.filterTarget(null, player, current));
								for (var target of list) {
									if (get.attitude(target, player) > 0) return 10;
								}
								return 4;
							},
							result: {
								player: function (player, target) {
									if (player.hasUnknown()) return player.hp + player.countCards("h") / 4 - 5 > 0 ? 1 : 0;
									var tao = player.countCards("h", "tao");
									if (player.hp + tao > 4) return 4 + get.attitude(player, target);
									if (player.hp + tao > 3) return get.attitude(player, target) - 2;
									return 0;
								},
							},
						},
					},
				},
			},
			yifa: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				logTarget: "player",
				filter: function (event, player) {
					return player != event.player && (event.card.name == "sha" || (get.color(event.card) == "black" && get.type(event.card) == "trick"));
				},
				content: function () {
					var target = trigger.player;
					target.addTempSkill("yifa2", { player: "phaseEnd" });
					target.addMark("yifa2", 1, false);
				},
				ai: { threaten: 0.8 },
			},
			yifa2: {
				charlotte: true,
				onremove: true,
				intro: { content: "手牌上限-#" },
				mod: {
					maxHandcard: function (player, num) {
						return num - player.countMark("yifa2");
					},
				},
			},
			buchen: {
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				hiddenSkill: true,
				filter: function (event, player) {
					var target = _status.currentPhase;
					// 临时修改（by 棘手怀念摧毁）
					return event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("buchen")) && target && target != player && target.countGainableCards(player, "he") > 0;
					// return event.toShow?.some(i => get.character(i).skills?.includes("buchen")) && target && target != player && target.countGainableCards(player, "he") > 0;
				},
				direct: true,
				content: function () {
					var target = _status.currentPhase;
					player.gainPlayerCard(target, "he", get.prompt("buchen", target)).set("logSkill", ["buchen", target]);
				},
			},
			smyyingshi: {
				audio: 2,
				enable: "phaseUse",
				locked: true,
				filter: function (event, player) {
					return Array.isArray(event.smyyingshi);
				},
				onChooseToUse: function (event) {
					if (game.online || !event.player.hasSkill("smyyingshi")) return;
					var cards = [];
					for (var i = 0; i < event.player.maxHp; i++) {
						var card = ui.cardPile.childNodes[i];
						if (card) cards.push(card);
						else break;
					}
					event.set("smyyingshi", cards);
				},
				chooseButton: {
					dialog: function (event) {
						var dialog = ui.create.dialog("鹰视", "hidden");
						if (event.smyyingshi && event.smyyingshi.length) dialog.add(event.smyyingshi);
						else dialog.addText("牌堆无牌");
						for (var i of dialog.buttons) {
							i.classList.add("noclick");
						}
						dialog.buttons.length = 0;
						return dialog;
					},
					filter: function () {
						return false;
					},
				},
			},
			xiongzhi: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				content: function () {
					"step 0";
					player.awakenSkill("xiongzhi");
					"step 1";
					var card = get.cards()[0];
					event.card = card;
					player.showCards(card);
					if ((!get.info(card).notarget || !lib.filter.cardEnabled(card, player)) && !player.hasUseTarget(card)) {
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						game.updateRoundNumber();
						event.finish();
					}
					"step 2";
					var next = player.chooseUseTarget(card, true);
					if (get.info(card).updateUsable == "phaseUse") next.addCount = false;
					"step 3";
					if (result.bool) event.goto(1);
					else {
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						game.updateRoundNumber();
					}
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							if (!player.hasSkill("smyyingshi")) return 1;
							var cards = [];
							for (var i = 0; i < Math.min(2, player.maxHp); i++) {
								var card = ui.cardPile.childNodes[i];
								if (card) {
									if (!player.hasValueTarget(card)) return 0;
								} else break;
							}
							return 1;
						},
					},
				},
			},
			quanbian: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				hasHand: function (event) {
					var evts = event.player.getHistory("lose", function (evt) {
						return evt.getParent() == event;
					});
					return evts && evts.length == 1 && evts[0].hs.length > 0;
				},
				filter: function (event, player) {
					var phase = event.getParent("phaseUse");
					if (!phase || phase.player != player) return false;
					var suit = get.suit(event.card);
					if (!lib.suit.includes(suit) || !lib.skill.quanbian.hasHand(event)) return false;
					return (
						player.getHistory("useCard", function (evt) {
							return evt != event && get.suit(evt.card) == suit && lib.skill.quanbian.hasHand(evt) && evt.getParent("phaseUse") == phase;
						}).length +
							player.getHistory("respond", function (evt) {
								return evt != event && get.suit(evt.card) == suit && lib.skill.quanbian.hasHand(evt) && evt.getParent("phaseUse") == phase;
							}).length ==
						0
					);
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseControl("cancel2")
						.set("prompt", get.prompt("quanbian"))
						.set("choiceList", ["摸一张牌", "观看牌堆顶的" + get.cnNumber(player.maxHp) + "张牌并将其中一张置于牌堆底"])
						.set("ai", function () {
							var player = _status.event.player;
							var suit = get.suit(_status.event.getTrigger().card);
							if (
								player.countCards("h", function (card) {
									return get.suit(card) == suit && player.hasValueTarget(card, null, true);
								})
							)
								return "cancel2";
							return 0;
						});
					"step 1";
					if (result.control == "cancel2") {
						event.finish();
						return;
					}
					player.addTempSkill("quanbian2");
					player.storage.quanbian2.add(get.suit(trigger.card));
					player.markSkill("quanbian2");
					if (result.index == 0) {
						player.draw();
						event.finish();
						return;
					}
					event.cards = get.cards(player.maxHp);
					player.chooseButton(["将一张牌置于牌堆底", event.cards], true);
					"step 2";
					while (cards.length) {
						var card = cards.pop();
						card.fix();
						if (card == result.links[0]) ui.cardPile.appendChild(card);
						else ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
				},
			},
			quanbian2: {
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				mod: {
					cardEnabled2: function (card, player) {
						if (get.position(card) == "h" && player.storage.quanbian2.includes(get.suit(card))) return false;
					},
				},
				intro: {
					content: "本回合内不能使用$花色的手牌",
				},
			},
			//卫瓘
			zhongyun: {
				audio: 2,
				trigger: { player: ["damageEnd", "recoverEnd"] },
				forced: true,
				filter: function (event, player) {
					return (
						player.hp == player.countCards("h") &&
						(player.isDamaged() ||
							game.hasPlayer(function (current) {
								return player.inRange(current);
							}))
					);
				},
				usable: 1,
				preHidden: ["zhongyun2"],
				content: function () {
					"step 0";
					var filterTarget = function (card, player, target) {
						return player.inRange(target);
					};
					if (game.hasPlayer(current => filterTarget("L∞pers", player, current))) {
						var bool = player.isHealthy();
						player.chooseTarget("忠允：对攻击范围内的一名角色造成1点伤害" + (bool ? "" : "，或点取消回复1点体力"), filterTarget, bool).set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					} else event._result = { bool: false };
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.damage();
					} else player.recover();
				},
				group: "zhongyun2",
			},
			zhongyun2: {
				audio: "zhongyun",
				trigger: {
					player: ["loseAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				sourceSkill: "zhongyun",
				filter: function (event, player) {
					var cards1 = event.getl(player).hs,
						cards2 = [];
					if (event.getg) cards2 = event.getg(player);
					return (cards1.length > 0 || cards2.length > 0) && player.countCards("h") == player.hp;
				},
				usable: 1,
				content: function () {
					"step 0";
					if (trigger.delay === false) game.delayx();
					var filterTarget = function (card, player, target) {
						return target != player && target.countDiscardableCards(player, "he") > 0;
					};
					if (!game.hasPlayer(current => filterTarget("L∞pers", player, current))) event._result = { bool: false };
					else
						player.chooseTarget(filterTarget, "忠允：弃置一名其他角色的一张牌，或点取消摸一张牌").set("ai", function (target) {
							var att = get.attitude(player, target);
							if (att >= 0) return 0;
							if (
								target.countCards("he", function (card) {
									return get.value(card) > 5;
								})
							)
								return -att;
							return 0;
						});
					"step 1";
					if (!result.bool) player.draw();
					else {
						var target = result.targets[0];
						player.line(target, "green");
						player.discardPlayerCard(target, true, "he");
					}
				},
			},
			shenpin: {
				audio: 2,
				trigger: { global: "judge" },
				filter: function (event, player) {
					var color = get.color(event.player.judging[0], event.player);
					return (
						player.countCards("hes", function (card) {
							if (_status.connectMode && get.position(card) != "e") return true;
							return get.color(card) != color;
						}) > 0
					);
				},
				direct: true,
				preHidden: true,
				content: function () {
					"step 0";
					var color = get.color(trigger.player.judging[0], trigger.player);
					player
						.chooseCard(get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt("shenpin"), "hes", function (card) {
							if (get.color(card) == _status.event.color) return false;
							var player = _status.event.player;
							var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
							if (mod2 != "unchanged") return mod2;
							var mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
							if (mod != "unchanged") return mod;
							return true;
						})
						.set("ai", function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result;
							} else {
								return -result;
							}
						})
						.set("judging", trigger.player.judging[0])
						.set("color", color)
						.setHiddenSkill(event.name);
					"step 1";
					if (result.bool) {
						player.respond(result.cards, "highlight", "shenpin", "noOrdering");
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
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
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, "的判定牌改为", result.cards[0]);
						game.delay(2);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			//彻里吉
			chexuan: {
				audio: 2,
				enable: "phaseUse",
				derivation: ["cheliji_sichengliangyu", "cheliji_tiejixuanyu", "cheliji_feilunzhanyu"],
				filter: function (event, player) {
					return !player.getEquips(5).length && player.countCards("he", { color: "black" }) > 0;
				},
				filterCard: { color: "black" },
				position: "he",
				check: function (card) {
					return 5 - get.value(card);
				},
				content: function () {
					"step 0";
					player
						.chooseButton(
							[
								"请选择要装备的宝物",
								[
									lib.skill.chexuan.derivation.map(function (i) {
										return ["宝物", "", i];
									}),
									"vcard",
								],
							],
							true
						)
						.set("ai", function (button) {
							if (button.link[2] == "cheliji_sichengliangyu" && player.countCards("h") < player.hp) return 1;
							return Math.random();
						});
					"step 1";
					var name = result.links[0][2],
						card = game.createCard(name, lib.card[name].cardcolor, 5);
					player.$gain2(card);
					player.equip(card);
					game.delay();
				},
				group: "chexuan_lose",
				subfrequent: ["lose"],
				ai: {
					order: 6,
					result: {
						player: 1,
					},
				},
				subSkill: {
					lose: {
						audio: "chexuan",
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						frequent: true,
						filter: function (event, player) {
							var evt = event.getl(player);
							if (!evt || !evt.es || !evt.es.length) return false;
							if (event.name == "equip" && event.player == player) return false;
							for (var i of evt.es) {
								if (get.subtype(i, false) == "equip5") return true;
							}
							return false;
						},
						content: function () {
							"step 0";
							player.judge(function (card) {
								if (get.color(card) == "black") return 3;
								return 0;
							});
							"step 1";
							if (result.bool) {
								var card = game.createCard(lib.skill.chexuan.derivation.randomGet());
								player.$gain2(card);
								player.equip(card);
								game.delay();
							}
						},
					},
				},
			},
			qiangshou: {
				mod: {
					globalFrom: function (player, target, distance) {
						if (player.getEquips(5).length) return distance - 1;
					},
				},
				ai: {
					combo: "chexuan"
				},
			},
			cheliji_sichengliangyu: {
				trigger: { global: "phaseJieshuBegin" },
				equipSkill: true,
				cardcolor: "heart",
				filter: function (event, player) {
					return player.countCards("h") < player.hp && player.getEquip("cheliji_sichengliangyu");
				},
				content: function () {
					"step 0";
					player.draw(2);
					"step 1";
					var card = player.getEquip("cheliji_sichengliangyu");
					if (card) player.discard(card);
				},
			},
			cheliji_tiejixuanyu: {
				trigger: { global: "phaseJieshuBegin" },
				equipSkill: true,
				cardcolor: "club",
				filter: function (event, player) {
					return player != event.player && !event.player.getHistory("sourceDamage").length && event.player.countCards("he") > 0 && player.getEquip("cheliji_tiejixuanyu");
				},
				logTarget: "player",
				check: function (event, player) {
					return get.attitude(player, event.player) < 0;
				},
				content: function () {
					"step 0";
					trigger.player.chooseToDiscard("he", 2, true);
					"step 1";
					var card = player.getEquip("cheliji_tiejixuanyu");
					if (card) player.discard(card);
				},
			},
			cheliji_feilunzhanyu: {
				trigger: { global: "phaseJieshuBegin" },
				equipSkill: true,
				cardcolor: "spade",
				filter: function (event, player) {
					return (
						player != event.player &&
						event.player.getHistory("useCard", function (card) {
							return get.type(card.card) != "basic";
						}).length > 0 &&
						event.player.countCards("he") > 0 &&
						player.getEquip("cheliji_feilunzhanyu")
					);
				},
				logTarget: "player",
				check: function (event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content: function () {
					"step 0";
					trigger.player.chooseCard("he", true, "将一张牌交给" + get.translation(player));
					"step 1";
					if (result.bool) trigger.player.give(result.cards, player);
					"step 2";
					var card = player.getEquip("cheliji_feilunzhanyu");
					if (card) player.discard(card);
				},
			},
			//司马伷和黄祖
			caiwang: {
				audio: 2,
				trigger: { global: ["useCard", "respond"] },
				preHidden: true,
				filter: function (event, player) {
					if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
					var color = get.color(event.card);
					if (color == "none" || get.color(event.respondTo[1]) != color) return false;
					var target = lib.skill.caiwang.logTarget(event, player);
					return target[player.getStorage("naxiang2").includes(target) ? "countGainableCards" : "countDiscardableCards"](player, "he") > 0;
				},
				logTarget: function (event, player) {
					return player == event.respondTo[0] ? event.player : event.respondTo[0];
				},
				prompt2: function (event, player) {
					var target = lib.skill.caiwang.logTarget(event, player);
					return (player.getStorage("naxiang2").includes(target) ? "获得" : "弃置") + "该角色的一张牌";
				},
				check: function (event, player) {
					return get.attitude(player, lib.skill.caiwang.logTarget(event, player)) <= 0;
				},
				popup: false,
				content: function () {
					"step 0";
					if (player != game.me && !player.isOnline()) game.delayx();
					"step 1";
					var target = lib.skill.caiwang.logTarget(trigger, player);
					player.logSkill(event.name, target);
					player[player.getStorage("naxiang2").includes(target) ? "gainPlayerCard" : "discardPlayerCard"](target, "he", true);
				},
			},
			naxiang: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				forced: true,
				preHidden: true,
				filter: function (event, player) {
					var target = lib.skill.naxiang.logTarget(event, player);
					return target && target != player && target.isAlive();
				},
				logTarget: function (event, player) {
					return player == event.player ? event.source : event.player;
				},
				content: function () {
					player.addTempSkill("naxiang2", { player: "phaseBegin" });
					if (!player.storage.naxiang2) player.storage.naxiang2 = [];
					player.storage.naxiang2.add(lib.skill.naxiang.logTarget(trigger, player));
					player.markSkill("naxiang2");
				},
				ai: {
					combo: "caiwang",
				},
			},
			naxiang2: {
				onremove: true,
				intro: {
					content: "已接受$的投降；对这些角色发动【才望】时将“弃置”改为“获得”",
				},
			},
			//李肃
			qiaoyan: {
				trigger: { player: "damageBegin2" },
				forced: true,
				filter: function (event, player) {
					return player != _status.currentPhase && event.source && event.source != player;
				},
				logTarget: "source",
				content: function () {
					"step 0";
					var cards = player.getExpansions("qiaoyan");
					if (cards.length) {
						var source = trigger.source;
						source.gain(cards, player, "give", "bySelf");
						event.finish();
					} else {
						trigger.cancel();
						player.draw();
					}
					"step 1";
					var hs = player.getCards("he");
					if (!hs.length) event.finish();
					else if (hs.length == 1) event._result = { bool: true, cards: hs };
					else player.chooseCard("he", true, "将一张牌作为“珠”置于武将牌上");
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						var cards = result.cards;
						player.addToExpansion(cards, player, "give").gaintag.add("qiaoyan");
					}
					event.finish();
				},
				marktext: "珠",
				intro: { content: "expansion", markcount: "expansion" },
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				ai: {
					filterDamage: true,
					skillTagFilter: function (player, tag, arg) {
						if (!player.getExpansions("qiaoyan").length) return false;
						if (arg && arg.player) {
							if (arg.player.hasSkillTag("jueqing", false, player)) return false;
						}
					},
				},
			},
			xianzhu: {
				trigger: { player: "phaseUseBegin" },
				locked: true,
				filter: function (event, player) {
					return player.getExpansions("qiaoyan").length > 0;
				},
				async cost(event, trigger, player) {
					event.cards = player.getExpansions("qiaoyan");
					event.result = await player
						.chooseTarget(true, "请选择【献珠】的目标", "将" + get.translation(event.cards) + "交给一名角色。若该角色不为你自己，则你令其视为对其攻击范围内的另一名角色使用【杀】")
						.set("ai", function (target) {
							var player = _status.event.player;
							var eff = get.sgn(get.attitude(player, target)) * get.value(_status.event.getParent().cards[0], target);
							if (player != target)
								eff += Math.max.apply(
									null,
									game
										.filterPlayer(function (current) {
											if (current != target && player.inRange(current) && target.canUse("sha", current, false)) return true;
										})
										.map(function (current) {
											return get.effect(current, { name: "sha" }, target, player);
										})
								);
							return eff;
						})
						.forResult();
				},
				content: function () {
					"step 0";
					event.cards = player.getExpansions("qiaoyan");
					event.target = targets[0];
					"step 1";
					player.give(cards, target, "give");
					"step 2";
					if (
						player != target &&
						target.isIn() &&
						player.isIn() &&
						game.hasPlayer(function (current) {
							return current != target && player.inRange(current) && target.canUse("sha", current, false);
						})
					) {
						var str = get.translation(target);
						player
							.chooseTarget(true, "选择攻击范围内的一名角色，视为" + str + "对其使用【杀】", function (card, player, target) {
								var source = _status.event.target;
								return player.inRange(target) && source.canUse("sha", target, false);
							})
							.set("target", target)
							.set("ai", function (target) {
								var evt = _status.event;
								return get.effect(target, { name: "sha" }, evt.target, evt.player);
							});
					} else event.finish();
					"step 3";
					if (result.bool) target.useCard({ name: "sha", isCard: true }, result.targets[0], false);
				},
				ai: { combo: "qiaoyan" },
			},
			huirong: {
				trigger: { player: "showCharacterAfter" },
				forced: true,
				filter: function (event, player) {
					return (
						// 临时修改（by 棘手怀念摧毁）
						event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("huirong")) &&
						// event.toShow?.some(i => get.character(i).skills?.includes("huirong")) &&
						game.hasPlayer(function (target) {
							var num = target.countCards("h");
							return num > target.hp || num < Math.min(5, target.hp);
						})
					);
				},
				hiddenSkill: true,
				content: function () {
					"step 0";
					player
						.chooseTarget("请选择【慧容】的目标", "令一名角色将手牌数摸至/弃置至与其体力值相同（至多摸至五张）", true, function (card, player, target) {
							var num = target.countCards("h");
							return num > target.hp || num < Math.min(5, target.hp);
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							var num = target.countCards("h");
							if (num > target.hp) return -att * (num - target.hp);
							return att * Math.max(0, Math.min(5, target.hp) - target.countCards("h"));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						if (target.countCards("h") < target.hp) target.drawTo(Math.min(5, target.hp));
						else target.chooseToDiscard("h", true, target.countCards("h") - target.hp);
					}
				},
			},
			ciwei: {
				init: () => {
					game.addGlobalSkill("ciwei_ai");
				},
				onremove: () => {
					if (!game.hasPlayer(i => i.hasSkill("ciwei"), true)) game.removeGlobalSkill("ciwei_ai");
				},
				trigger: { global: "useCard" },
				direct: true,
				preHidden: true,
				filter: function (event, player) {
					if (event.all_excluded || event.player == player || event.player != _status.currentPhase || !player.countCards("he")) return false;
					return event.player.getHistory("useCard").indexOf(event) == 1 && ["basic", "trick"].includes(get.type(event.card));
				},
				content: function () {
					"step 0";
					if (player != game.me && !player.isOnline()) game.delayx();
					player
						.chooseToDiscard(get.prompt("ciwei", trigger.player), "弃置一张牌，取消" + get.translation(trigger.card) + "的所有目标", "he")
						.set("ai", function (card) {
							return _status.event.goon / 1.4 - get.value(card);
						})
						.set(
							"goon",
							(function () {
								if (!trigger.targets.length) return -get.attitude(player, trigger.player);
								var num = 0;
								for (var i of trigger.targets) {
									num -= get.effect(i, trigger.card, trigger.player, player);
								}
								return num;
							})()
						)
						.setHiddenSkill(event.name).logSkill = ["ciwei", trigger.player];
					"step 1";
					if (result.bool) {
						trigger.targets.length = 0;
						trigger.all_excluded = true;
					}
				},
			},
			ciwei_ai: {
				mod: {
					aiOrder: function (player, card, num) {
						if (
							player != _status.currentPhase ||
							player.getHistory("useCard").length > 1 ||
							!game.hasPlayer(function (current) {
								return current != player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hasSkill("ciwei") && current.countCards("he") > 0;
							})
						)
							return;
						if (player.getHistory("useCard").length == 0) {
							if (["basic", "trick"].includes(get.type(card))) return num + 10;
							return;
						}
						if (!["basic", "trick"].includes(get.type(card))) return num + 10;
						if (!player._ciwei_temp) {
							player._ciwei_temp = true;
							num /= Math.max(1, player.getUseValue(card));
						}
						delete player._ciwei_temp;
						return num;
					},
				},
				trigger: { player: "dieAfter" },
				sourceSkill: "ciwei",
				filter: () => {
					return !game.hasPlayer(i => i.hasSkill("ciwei"), true);
				},
				silent: true,
				forceDie: true,
				content: () => {
					game.removeGlobalSkill("ciwei_ai");
				},
			},
			caiyuan: {
				trigger: { player: "phaseEnd" },
				forced: true,
				preHidden: true,
				filter: function (event, player) {
					if (player.phaseNumber <= 1) return false;
					const history1 = _status.globalHistory,
						history2 = player.actionHistory;
					for (let i = 0; i < Math.min(history1.length, history2.length); i++) {
						let i1 = history1.length - 1 - i,
							i2 = history2.length - 1 - i;
						if (i > 0 && history2[i2].isMe) break;
						if (history1[i1].changeHp.some(evt => evt.player == player && evt.num < 0)) return false;
					}
					return true;
				},
				content: function () {
					player.draw(2);
				},
			},
			zhuosheng: {
				audio: 2,
				locked: false,
				init: function (player) {
					player.addSkill("zhuosheng_count");
					if (game.phaseNumber > 0) {
						var hs = player.getCards("h"),
							all = player.getAllHistory(),
							cards = [];
						for (var i = all.length - 1; i >= 0; i--) {
							for (var j of all[i].gain) {
								cards.addArray(j.cards);
							}
							if (all[i].isRound) break;
						}
						cards = cards.filter(function (i) {
							return hs.includes(i);
						});
						if (cards.length) player.addGaintag(cards, "zhuosheng");
					}
				},
				onremove: function (player) {
					player.removeSkill("zhuosheng_count");
					player.removeGaintag("zhuosheng");
				},
				mod: {
					targetInRange: function (card, player, target) {
						if (!card.cards || get.type(card) != "basic") return;
						for (var i of card.cards) {
							if (i.hasGaintag("zhuosheng")) return game.online ? player == _status.currentPhase : player.isPhaseUsing();
						}
					},
					cardUsable: function (card, player, target) {
						if (!card.cards || get.mode() == "guozhan" || get.type(card) != "basic" || !(game.online ? player == _status.currentPhase : player.isPhaseUsing())) return;
						for (var i of card.cards) {
							if (i.hasGaintag("zhuosheng")) return Infinity;
						}
					},
					aiOrder: function (player, card, num) {
						if (get.itemtype(card) == "card" && card.hasGaintag("zhuosheng") && get.type(card) == "basic") return num - 0.1;
					},
				},
				trigger: { player: "useCard2" },
				direct: true,
				filterx: function (event, player) {
					if (!player.isPhaseUsing()) return false;
					return (
						player.getHistory("lose", function (evt) {
							if (evt.getParent() != event) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes("zhuosheng")) return true;
							}
							return false;
						}).length > 0
					);
				},
				filter: function (event, player) {
					if (!lib.skill.zhuosheng.filterx(event, player)) return false;
					if (get.type(event.card) != "trick") return false;
					if (event.targets && event.targets.length > 0) return true;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var prompt2 = "为" + get.translation(trigger.card) + "增加或减少一个目标";
					player
						.chooseTarget(get.prompt("zhuosheng"), function (card, player, target) {
							var player = _status.event.player;
							if (_status.event.targets.includes(target)) return true;
							return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
						})
						.set("targets", trigger.targets)
						.set("card", trigger.card);
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					} else {
						event.finish();
					}
					"step 2";
					if (event.targets) {
						player.logSkill("zhuosheng", event.targets);
						if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
						else trigger.targets.addArray(event.targets);
					}
				},
				group: ["zhuosheng_equip", "zhuosheng_silent"],
				subfrequent: ["equip"],
				subSkill: {
					equip: {
						audio: "zhuosheng",
						trigger: { player: "useCard" },
						filter: function (event, player) {
							return get.type(event.card) == "equip" && lib.skill.zhuosheng.filterx(event, player);
						},
						frequent: true,
						prompt: "是否发动【擢升】摸一张牌？",
						content: function () {
							player.draw();
						},
					},
					silent: {
						trigger: {
							player: "useCard1",
						},
						silent: true,
						firstDo: true,
						filter: function (event, player) {
							return get.mode() != "guozhan" && get.type(event.card) == "basic" && lib.skill.zhuosheng.filterx(event, player) && event.addCount !== false;
						},
						content: function () {
							trigger.addCount = false;
							var stat = player.getStat();
							if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
						},
					},
				},
			},
			zhuosheng_count: {
				trigger: {
					player: "gainBegin",
					global: "roundStart",
				},
				silent: true,
				sourceSkill: "zhuosheng",
				filter: function (event, player) {
					if (event.name == "gain") return event.getParent(2).name != "zhuosheng_equip";
					return game.roundNumber > 1;
				},
				content: function () {
					if (trigger.name == "gain") trigger.gaintag.add("zhuosheng");
					else player.removeGaintag("zhuosheng");
				},
			},
			xinquanbian: {
				audio: "quanbian",
				preHidden: true,
				trigger: { player: ["useCard", "respond"] },
				filter: function (event, player) {
					var phase = event.getParent("phaseUse");
					if (!phase || phase.player != player) return false;
					var suit = get.suit(event.card);
					if (!lib.suit.includes(suit) || !lib.skill.quanbian.hasHand(event)) return false;
					return (
						player.getHistory("useCard", function (evt) {
							return evt != event && get.suit(evt.card) == suit && lib.skill.quanbian.hasHand(evt) && evt.getParent("phaseUse") == phase;
						}).length +
							player.getHistory("respond", function (evt) {
								return evt != event && get.suit(evt.card) == suit && lib.skill.quanbian.hasHand(evt) && evt.getParent("phaseUse") == phase;
							}).length ==
						0
					);
				},
				content: function () {
					"step 0";
					var cards = get.cards(Math.min(5, player.maxHp));
					game.cardsGotoOrdering(cards);
					var suit = get.suit(trigger.card);
					var next = player.chooseToMove("权变：获得一张不为" + get.translation(suit) + "花色的牌并排列其他牌");
					next.set("suit", suit);
					next.set("list", [["牌堆顶", cards], ["获得"]]);
					next.set("filterMove", function (from, to, moved) {
						var suit = _status.event.suit;
						if (moved[0].includes(from.link)) {
							if (typeof to == "number") {
								if (to == 1) {
									if (moved[1].length) return false;
									return get.suit(from.link, false) != suit;
								}
								return true;
							}
							if (moved[1].includes(to.link)) return get.suit(from.link, false) != suit;
							return true;
						} else {
							if (typeof to == "number") return true;
							return get.suit(to.link, false) != suit;
						}
					});
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
								return get.value(b) - get.value(a);
							}),
							gains = [];
						for (var i of cards) {
							if (get.suit(i, false) != _status.event.suit) {
								cards.remove(i);
								gains.push(i);
								break;
							}
						}
						return [cards, gains];
					});
					"step 1";
					if (result.bool) {
						var list = result.moved;
						if (list[1].length) player.gain(list[1], "gain2");
						while (list[0].length) {
							ui.cardPile.insertBefore(list[0].pop(), ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
					}
				},
				//group:'xinquanbian_count',
				init: (player, skill) => player.addSkill("xinquanbian_count"),
				onremove: (player, skill) => player.removeSkill("xinquanbian_count"),
			},
			xinquanbian_count: {
				trigger: {
					player: ["useCard0", "phaseUseBefore", "phaseUseAfter"],
				},
				silent: true,
				firstDo: true,
				charlotte: true,
				sourceSkill: "xinquanbian",
				filter: function (event, player) {
					if (event.name === "phaseUse") return true;
					return player.isPhaseUsing() && lib.skill.quanbian.hasHand(event) && get.type(event.card) != "equip";
				},
				content: function () {
					var stat = player.getStat("skill");
					if (trigger.name === "phaseUse") {
						delete stat.xinquanbian;
					} else {
						if (!stat.xinquanbian) stat.xinquanbian = 0;
						stat.xinquanbian++;
					}
				},
				mod: {
					cardEnabled2: function (card, player) {
						var stat = player.getStat("skill");
						if (stat.xinquanbian && stat.xinquanbian >= player.maxHp && get.position(card) == "h" && get.type(card, null, player) != "equip") return false;
					},
				},
			},
			taoyin: {
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				hiddenSkill: true,
				logTarget: function () {
					return _status.currentPhase;
				},
				filter: function (event, player) {
					var target = _status.currentPhase;
					// 临时修改（by 棘手怀念摧毁）
					return player != target && target && target.isAlive() && event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("taoyin"));
					// return player != target && target && target.isAlive() && event.toShow?.some(i => get.character(i).skills?.includes("taoyin"));
				},
				check: function (event, player) {
					return get.attitude(player, _status.currentPhase) < 0;
				},
				content: function () {
					_status.currentPhase.addTempSkill("taoyin2");
					_status.currentPhase.addMark("taoyin2", 2, false);
				},
				ai: {
					expose: 0.2,
				},
			},
			taoyin2: {
				onremove: true,
				charlotte: true,
				intro: {
					content: "手牌上限-#",
				},
				mod: {
					maxHandcard: function (player, num) {
						return num - player.countMark("taoyin2");
					},
				},
			},
			yimie: {
				audio: 2,
				usable: 1,
				preHidden: true,
				trigger: { source: "damageBegin1" },
				filter: function (event, player) {
					return player != event.player && event.num < event.player.hp;
				},
				check: function (event, player) {
					if (event.player.hasSkillTag("nodamage")) return false;
					let tj = player.countCards("hs", function (card) {
							return get.name(card) === "tao" || get.name(card) === "jiu";
						}),
						att = get.attitude(_status.event.player, event.player),
						eff = get.damageEffect(event.player, player, _status.event.player, get.natureList(event)),
						fd = event.player.hasSkillTag("filterDamage", null, {
							player: player,
							card: event.card,
						}),
						hp = player.hp + tj;
					if (player.storage.tairan2) hp -= player.storage.tairan2;
					if (eff <= 0 || fd || att >= -2 || Math.abs(hp) <= 1) return false;
					if (hp > 2 || (eff > 0 && event.player.isLinked() && event.hasNature())) return true;
					return !event.player.countCards("hs") || (event.player.hp > 2 * event.num && !event.player.hasSkillTag("maixie"));
				},
				logTarget: "player",
				content: function () {
					player.loseHp();
					trigger.player.addTempSkill("yimie2");
					trigger.yimie_num = trigger.player.hp - trigger.num;
					trigger.num = trigger.player.hp;
				},
				ai: {
					damageBonus: true,
					skillTagFilter: function (player, tag, arg) {
						return arg && arg.target && arg.target.hp > 1 && player.hp > 1 && get.attitude(player, arg.target) < -2;
					},
				},
			},
			yimie2: {
				trigger: { player: "damageEnd" },
				forced: true,
				popup: false,
				charlotte: true,
				sourceSkill: "yimie",
				filter: function (event, player) {
					return typeof event.yimie_num == "number";
				},
				content: function () {
					player.recover(trigger.yimie_num);
				},
			},
			ruilve: {
				unique: true,
				audio: 2,
				global: "ruilve2",
				zhuSkill: true,
			},
			ruilve2: {
				enable: "phaseUse",
				discard: false,
				lose: false,
				delay: false,
				line: true,
				log: false,
				prepare: function (cards, player, targets) {
					targets[0].logSkill("ruilve");
				},
				prompt: function () {
					var player = _status.event.player;
					var list = game.filterPlayer(function (target) {
						return target != player && target.hasZhuSkill("ruilve", player);
					});
					var str = "将一张具有伤害标签的基本牌或锦囊牌交给" + get.translation(list);
					if (list.length > 1) str += "中的一人";
					return str;
				},
				filter: function (event, player) {
					if (player.group != "jin") return false;
					if (player.countCards("h", lib.skill.ruilve2.filterCard) == 0) return false;
					return game.hasPlayer(function (target) {
						return target != player && target.hasZhuSkill("ruilve", player) && !target.hasSkill("ruilve3");
					});
				},
				filterCard: function (card) {
					if (!get.tag(card, "damage")) return false;
					var type = get.type(card);
					return type == "basic" || type == "trick";
				},
				visible: true,
				filterTarget: function (card, player, target) {
					return target != player && target.hasZhuSkill("ruilve", player) && !target.hasSkill("ruilve3");
				},
				content: function () {
					player.give(cards, target);
					target.addTempSkill("ruilve3", "phaseUseEnd");
				},
				ai: {
					expose: 0.3,
					order: 1,
					result: {
						target: 5,
					},
				},
			},
			ruilve3: {},
			tairan: {
				audio: 2,
				trigger: { player: "phaseEnd" },
				forced: true,
				preHidden: true,
				filter: function (event, player) {
					return player.hp < player.maxHp || player.countCards("h") < player.maxHp;
				},
				content: function () {
					"step 0";
					player.addSkill("tairan2");
					if (!player.storage.tairan2) player.storage.tairan2 = 0;
					var num = player.maxHp - player.hp;
					if (num > 0) {
						player.storage.tairan2 = num;
						player.recover(num);
					}
					"step 1";
					if (player.countCards("h") < player.maxHp) player.drawTo(player.maxHp).gaintag = ["tairan"];
				},
			},
			tairan2: {
				mod: {
					aiOrder: function (player, card, num) {
						if (card.hasGaintag && card.hasGaintag("tairan")) return 10 * num;
					},
					aiValue: function (player, card, num) {
						if (card.hasGaintag && card.hasGaintag("tairan")) {
							if (card.name !== "wuxie" && (get.type(card) === "basic" || get.type(card, "trick") === "trick")) return num / 64;
							return num / 8;
						}
					},
					aiUseful: function (player, card, num) {
						return lib.skill.tairan2.mod.aiValue.apply(this, arguments);
					},
				},
				audio: "tairan",
				trigger: { player: "phaseUseBegin" },
				charlotte: true,
				forced: true,
				onremove: true,
				sourceSkill: "tairan",
				content: function () {
					var map = player.storage.tairan2;
					if (map > 0) player.loseHp(map);
					var hs = player.getCards("h", function (card) {
						return card.hasGaintag("tairan");
					});
					if (hs.length) player.discard(hs);
					player.removeSkill("tairan2");
				},
			},
			baoqie: {
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				forced: true,
				hiddenSkill: true,
				filter: function (event, player) {
					// 临时修改（by 棘手怀念摧毁）
					return event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("baoqie"));
					// return event.toShow?.some(i => get.character(i).skills?.includes("baoqie"));
				},
				content: function () {
					"step 0";
					var card = get.cardPile(function (card) {
						return get.subtype(card, false) == "equip5" && !get.cardtag(card, "gifts");
					});
					if (!card) {
						event.finish();
						return;
					}
					event.card = card;
					player.gain(card, "gain2");
					"step 1";
					if (player.getCards("h").includes(card) && get.subtype(card) == "equip5") player.chooseUseTarget(card).nopopup = true;
				},
			},
			jyishi: {
				audio: 2,
				trigger: {
					global: ["loseAfter", "loseAsyncAfter"],
				},
				usable: 1,
				direct: true,
				preHidden: true,
				filter: function (event, player) {
					var target = _status.currentPhase;
					if (!target || !target.isIn() || event.type != "discard" || !target.isPhaseUsing()) return false;
					if (target == player) return false;
					var evt = event.getl(target);
					for (var i of evt.hs) {
						if (get.position(i, true) == "d") return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					event.target = _status.currentPhase;
					event.cards = trigger.getl(event.target).hs.filterInD("d");
					var str = "是否发动【宜室】令" + get.translation(event.target) + "获得一张牌";
					if (event.cards.length > 1) str += "，然后获得其余的牌";
					str += "？";
					player
						.chooseButton([str, event.cards])
						.set("ai", function (button) {
							var card = button.link;
							var source = _status.event.source;
							if (get.attitude(player, source) > 0) return Math.max(1, source.getUseValue(card, null, true));
							var cards = _status.event.getParent().cards.slice(0);
							if (cards.length == 1) return -get.value(card);
							cards.remove(card);
							return get.value(cards) - get.value(card) - 2;
						})
						.set("source", event.target)
						.setHiddenSkill(event.name);
					"step 1";
					if (result.bool) {
						player.logSkill("jyishi", target);
						if (cards.length > 1) {
							target.$gain2(result.links[0]);
							target.gain(result.links[0], "log");
						} else trigger.player.gain(result.links[0], "gain2");
						cards.remove(result.links[0]);
						if (cards.length) player.gain(cards, "gain2");
					} else player.storage.counttrigger.jyishi--;
				},
			},
			jyishi2: { charlotte: true },
			shiduo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return player != target && player.canCompare(target);
					});
				},
				filterTarget: function (card, player, target) {
					return player != target && player.canCompare(target);
				},
				content: function () {
					"step 0";
					player.chooseToCompare(target);
					"step 1";
					if (result.bool && target.isAlive()) {
						var num = target.countCards("h");
						if (num > 0) player.gainPlayerCard(target, true, "h", num);
					} else event.finish();
					"step 2";
					var num = Math.floor(player.countCards("h") / 2);
					if (num && target.isAlive()) player.chooseCard("h", num, true, "交给" + get.translation(target) + get.cnNumber(num) + "张牌");
					else event.finish();
					"step 3";
					if (result.bool && result.cards && result.cards.length) player.give(result.cards, target);
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							var delta = target.countCards("h") - player.countCards("h");
							if (delta < 0) return 0;
							return -1 - delta;
						},
					},
				},
			},
			tuishi: {
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				forced: true,
				locked: false,
				hiddenSkill: true,
				filter: function (event, player) {
					var target = _status.currentPhase;
					// 临时修改（by 棘手怀念摧毁）
					return player != target && target && target.isAlive() && event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("tuishi"));
					// return player != target && target && target.isAlive() && event.toShow?.some(i => get.character(i).skills?.includes("tuishi"));
				},
				content: function () {
					player.addTempSkill("tuishi2");
				},
			},
			tuishi2: {
				trigger: { global: "phaseEnd" },
				direct: true,
				charlotte: true,
				sourceSkill: "tuishi",
				filter: function (event, player) {
					var target = _status.currentPhase;
					return (
						target != player &&
						target &&
						target.isAlive() &&
						game.hasPlayer(function (current) {
							return current != target && target.inRange(current);
						})
					);
				},
				content: function () {
					"step 0";
					var target = _status.currentPhase;
					event.target = target;
					player
						.chooseTarget(get.prompt2("tuishi", event.target), function (card, player, target) {
							var source = _status.event.source;
							return source != target && source.inRange(target);
						})
						.set("source", target)
						.set("goon", get.damageEffect(target, player, player) > 0)
						.set("ai", function (target) {
							if (!_status.event.goon) return 0;
							var evt = _status.event;
							return get.effect(target, { name: "sha" }, evt.source, evt.player);
						});
					"step 1";
					if (result.bool) {
						event.target2 = result.targets[0];
						player.logSkill("tuishi");
						player.line2([target, event.target2]);
						game.delayx();
					} else event.finish();
					"step 2";
					target.chooseToUse({
						preTarget: event.target2,
						prompt: "请对" + get.translation(event.target2) + "使用一张【杀】，或受到来自" + get.translation(player) + "的1点伤害",
						filterCard: function (card, player) {
							return get.name(card) == "sha" && lib.filter.filterCard.apply(this, arguments);
						},
						filterTarget: function (card, player, target) {
							return target == _status.event.preTarget && lib.filter.filterTarget.apply(this, arguments);
						},
						addCount: false,
					});
					"step 3";
					if (!result.bool) target.damage();
				},
			},
			xinchoufa: {
				audio: "choufa",
				inherit: "choufa",
				content: function () {
					"step 0";
					player.choosePlayerCard(target, "h", true);
					"step 1";
					player.showCards(result.cards, get.translation(player) + "对" + get.translation(target) + "发动了【筹伐】");
					var type = get.type2(result.cards[0], target),
						hs = target.getCards("h", function (card) {
							return card != result.cards[0] && get.type2(card, target) != type;
						});
					if (hs.length) {
						target.addGaintag(hs, "xinchoufa");
						target.addTempSkill("xinchoufa2", { player: "phaseAfter" });
					}
				},
			},
			xinchoufa2: {
				charlotte: true,
				onremove: function (player) {
					player.removeGaintag("xinchoufa");
				},
				mod: {
					cardname: function (card) {
						if (get.itemtype(card) == "card" && card.hasGaintag("xinchoufa")) return "sha";
					},
					cardnature: function (card) {
						if (get.itemtype(card) == "card" && card.hasGaintag("xinchoufa")) return false;
					},
				},
			},
			choufa: {
				enable: "phaseUse",
				audio: 2,
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return lib.skill.choufa.filterTarget(null, player, current);
					});
				},
				filterTarget: function (card, player, target) {
					return target != player && !target.hasSkill("choufa2") && target.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player.choosePlayerCard(target, "h", true);
					"step 1";
					player.showCards(result.cards);
					var type = get.type2(result.cards[0], target);
					target.storage.choufa2 = type;
					target.addTempSkill("choufa2", { player: "phaseAfter" });
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							return -target.countCards("h");
						},
					},
				},
			},
			choufa2: {
				onremove: true,
				charlotte: true,
				mark: true,
				intro: { content: "手牌中的非$牌均视为杀" },
				mod: {
					cardname: function (card, player) {
						if (get.type2(card, false) != player.storage.choufa2) return "sha";
					},
					cardnature: function (card, player) {
						if (get.type2(card, false) != player.storage.choufa2) return false;
					},
				},
			},
			zhaoran: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				preHidden: true,
				content: function () {
					player.addTempSkill("zhaoran2", "phaseUseAfter");
					var cards = player.getCards("h");
					if (cards.length > 0) player.addShownCards(cards, "visible_zhaoran");
				},
			},
			zhaoran2: {
				audio: "zhaoran",
				group: "zhaoran3",
				sourceSkill: "zhaoran",
				init: (player, skill) => {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				onremove: true,
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				charlotte: true,
				popup: false,
				filter: function (event, player, name) {
					if (name == "gainBegin") return true;
					var evt = event.getl(player);
					if (!evt || !evt.hs || !evt.hs.length) return false;
					var list = player.getStorage("zhaoran2");
					for (var i of evt.hs) {
						var suit = get.suit(i, player);
						if (!list.includes(suit) && !player.countCards("h", { suit: suit })) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					if (trigger.delay === false) game.delayx();
					"step 1";
					var list = [];
					var suits = get.copy(player.storage.zhaoran2);
					suits.addArray(
						player.getCards("h").map(function (card) {
							return get.suit(card);
						})
					);
					var evt = trigger.getl(player);
					for (var i of evt.hs) {
						var suit = get.suit(i, player);
						if (!suits.includes(suit)) list.add(suit);
					}
					event.count = list.length;
					player.markAuto("zhaoran2", list);
					"step 1";
					event.count--;
					var filterTarget = function (card, player, target) {
						return target != player && target.countDiscardableCards(player, "he") > 0;
					};
					if (
						!game.hasPlayer(function (current) {
							return filterTarget(null, player, current);
						})
					)
						event._result = { bool: false };
					else
						player.chooseTarget(filterTarget, "弃置一名其他角色的一张牌或摸一张牌").set("ai", function (target) {
							var att = get.attitude(player, target);
							if (att >= 0) return 0;
							if (
								target.countCards("he", function (card) {
									return get.value(card) > 5;
								})
							)
								return -att;
							return 0;
						});
					"step 2";
					if (!result.bool) {
						player.logSkill("zhaoran2");
						player.draw();
					} else {
						var target = result.targets[0];
						player.logSkill("zhaoran2", target);
						player.discardPlayerCard(target, true, "he");
					}
					if (event.count > 0) event.goto(1);
				},
				intro: {
					content: "已因$牌触发过效果",
				},
			},
			zhaoran3: {
				trigger: { player: ["phaseUseEnd", "gainBegin"] },
				forced: true,
				charlotte: true,
				firstDo: true,
				silent: true,
				sourceSkill: "zhaoran",
				content: function () {
					if (event.triggername == "gainBegin") {
						trigger.gaintag.add("visible_zhaoran");
					} else {
						player.hideShownCards(player.getCards("h"), "visible_zhaoran");
					}
				},
			},
			chengwu: {
				zhuSkill: true,
				mod: {
					inRange: function (from, to) {
						if (!from.hasZhuSkill("chengwu") || from._chengwu) return;
						from._chengwu = true;
						var bool = game.hasPlayer(function (current) {
							return current != from && current != to && current.group == "jin" && from.hasZhuSkill("chengwu", current) && current.inRange(to);
						});
						delete from._chengwu;
						if (bool) return true;
					},
				},
			},
			shiren: {
				trigger: { player: "showCharacterAfter" },
				hiddenSkill: true,
				logTarget: function () {
					return _status.currentPhase;
				},
				filter: function (event, player) {
					// 临时修改（by 棘手怀念摧毁）
					if (!(event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("shiren")))) return false;
					// if (!event.toShow?.some(i => get.character(i).skills?.includes("shiren"))) return false;
					var target = _status.currentPhase;
					return target && target != player && target.isAlive() && target.countCards("h") > 0;
				},
				content: function () {
					var next = game.createEvent("yanxi", false);
					next.player = player;
					next.target = _status.currentPhase;
					next.setContent(lib.skill.yanxi.content);
				},
			},
			yanxi: {
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target != player && target.countCards("h") > 0;
				},
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("h") > 0;
					});
				},
				content: function () {
					"step 0";
					event.card = target.getCards("h").randomGet();
					var cards;
					cards = get.cards(2);
					event.cards = cards.concat([event.card]);
					while (cards.length) {
						ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
					}
					if (get.mode() == "guozhan") {
						var num = ui.cardPile.childElementCount;
						var num1 = get.rand(1, num - 1),
							num2 = get.rand(1, num - 1);
						if (num1 == num2) {
							if (num1 == 0) num2++;
							else num1--;
						}
						event.cards = [event.card, ui.cardPile.childNodes[num1], ui.cardPile.childNodes[num2]];
					}
					game.updateRoundNumber();
					event.cards.randomSort();
					game.log(player, "展示了", event.cards);
					event.videoId = lib.status.videoId++;
					var str = get.translation(player) + "对" + get.translation(target) + "发动了【宴戏】";
					game.broadcastAll(
						function (str, id, cards) {
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						str,
						event.videoId,
						event.cards
					);
					game.addVideo("showCards", player, [str, get.cardsInfo(event.cards)]);
					game.delay(2);
					"step 1";
					var func = function (id, target) {
						var dialog = get.idDialog(id);
						if (dialog) dialog.content.firstChild.innerHTML = "猜猜哪张是" + get.translation(target) + "的手牌？";
					};
					if (player == game.me) func(event.videoId, target);
					else if (player.isOnline()) player.send(func, event.videoId, target);
					"step 2";
					var next = player.chooseButton(true);
					next.set("dialog", event.videoId);
					next.set("ai", function (button) {
						if (_status.event.answer) return button.link == _status.event.answer ? 1 : 0;
						return get.value(button.link, _status.event.player);
					});
					if (player.hasSkillTag("viewHandcard", null, target, true)) next.set("answer", card);
					"step 3";
					game.broadcastAll("closeDialog", event.videoId);
					player.addTempSkill("yanxi2");
					var card2 = result.links[0];
					if (card2 == card) {
						player.popup("洗具");
						cards.remove(card2);
						player.$gain2(cards);
						player.gain(cards, "log").gaintag.add("yanxi");
						player.gain(card, target, "bySelf", "give").gaintag.add("yanxi");
					} else {
						player.popup("杯具");
						player.gain(card2, "gain2").gaintag.add("yanxi");
					}
				},
				ai: {
					order: 6,
					result: {
						player: 1,
						target: -0.6,
					},
				},
			},
			yanxi2: {
				mod: {
					ignoredHandcard: function (card, player) {
						if (card.hasGaintag("yanxi")) return true;
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && card.hasGaintag("yanxi")) return false;
					},
				},
				onremove: function (player) {
					player.removeGaintag("yanxi");
				},
			},
			sanchen: {
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					var stat = player.getStat("sanchen");
					return game.hasPlayer(function (current) {
						return !stat || !stat.includes(current);
					});
				},
				filterTarget: function (card, player, target) {
					var stat = player.getStat("sanchen");
					return !stat || !stat.includes(target);
				},
				content: function () {
					"step 0";
					var stat = player.getStat();
					if (!stat.sanchen) stat.sanchen = [];
					stat.sanchen.push(target);
					if (get.mode() != "guozhan") player.addMark("sanchen", 1, false);
					target.draw(3);
					"step 1";
					if (!target.countCards("he")) event._result = { bool: false };
					else
						target.chooseToDiscard("he", true, 3).set("ai", function (card) {
							var list = ui.selected.cards.map(function (i) {
								return get.type2(i);
							});
							if (!list.includes(get.type2(card))) return 7 - get.value(card);
							return -get.value(card);
						});
					"step 2";
					if (result.bool && result.cards && result.cards.length) {
						var list = [];
						for (var i of result.cards) list.add(get.type2(i));
						if (list.length == result.cards.length) {
							target.draw();
							player.getStat("skill").sanchen--;
							if (get.mode() == "guozhan") player.addTempSkills("pozhu");
						}
					} else {
						target.draw();
						player.getStat("skill").sanchen--;
						if (get.mode() == "guozhan") player.addTempSkills("pozhu");
					}
				},
				ai: {
					order: 9,
					threaten: 1.7,
					result: {
						target: function (player, target) {
							if (target.hasSkillTag("nogain")) return 0.1;
							return Math.sqrt(target.countCards("he"));
						},
					},
				},
				intro: {
					content: "已发动过#次技能",
				},
				marktext: "陈",
			},
			zhaotao: {
				forbid: ["guozhan"],
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return player.countMark("sanchen") > 2;
				},
				content: function () {
					player.awakenSkill("zhaotao");
					player.loseMaxHp();
					player.addSkills("pozhu");
				},
				derivation: "pozhu",
				ai: {
					combo: "sanchen",
				},
			},
			pozhu: {
				enable: "phaseUse",
				viewAsFilter: function (player) {
					return !player.hasSkill("pozhu3", null, null, false) && player.countCards("hs") > 0;
				},
				viewAs: { name: "chuqibuyi" },
				filterCard: true,
				position: "hs",
				check: function (card) {
					return 7 - get.value(card);
				},
				group: "pozhu2",
			},
			pozhu2: {
				trigger: { player: "useCardAfter" },
				silent: true,
				sourceSkill: "pozhu",
				filter: function (event, player) {
					return (
						event.skill == "pozhu" &&
						(get.mode() == "guozhan" ||
							!player.getHistory("sourceDamage", function (evt) {
								return evt.card == event.card;
							}).length)
					);
				},
				content: function () {
					player.addTempSkill("pozhu3");
				},
			},
			pozhu3: { charlotte: true },
			xijue: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: ["enterGame", "showCharacterAfter"],
				},
				forced: true,
				filter: function (event, player) {
					if (get.mode() == "guozhan")
						return (
							game
								.getAllGlobalHistory("everything", evt => {
									// 临时修改（by 棘手怀念摧毁）
									return evt.name == "showCharacter" && evt.toShow && evt.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("xijue"));
									// return evt.name == "showCharacter" && evt.toShow?.some(i => get.character(i).skills?.includes("xijue"));
								})
								.indexOf(event) == 0
						);
					return event.name != "showCharacter" && (event.name != "phase" || game.phaseNumber == 0);
				},
				content: function () {
					player.addMark("xijue", 4);
				},
				intro: {
					name2: "爵",
					content: "mark",
				},
				derivation: ["xijue_tuxi", "xijue_xiaoguo"],
				group: ["xijue_gain", "xijue_tuxi", "xijue_xiaoguo"],
			},
			xijue_gain: {
				audio: "xijue",
				trigger: { player: "phaseEnd" },
				forced: true,
				sourceSkill: "xijue",
				filter: function (event, player) {
					var stat = player.getStat();
					return stat.damage && stat.damage > 0;
				},
				content: function () {
					player.addMark("xijue", player.getStat().damage);
				},
			},
			xijue_tuxi: {
				audio: 2,
				trigger: {
					player: "phaseDrawBegin2",
				},
				direct: true,
				filter: function (event, player) {
					return (
						event.num > 0 &&
						!event.numFixed &&
						player.hasMark("xijue") &&
						game.hasPlayer(function (target) {
							return player != target && target.countCards("h") > 0;
						})
					);
				},
				content: function () {
					"step 0";
					var num = trigger.num;
					if (get.mode() == "guozhan" && num > 2) num = 2;
					player.chooseTarget(
						"是否弃置一枚“爵”发动【突袭】？",
						"获得至多" + get.translation(num) + "名角色的各一张手牌，然后少摸等量的牌",
						[1, num],
						function (card, player, target) {
							return target.countCards("h") > 0 && player != target;
						},
						function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.hasSkill("tuntian")) return att / 10;
							return 1 - att;
						}
					);
					"step 1";
					if (result.bool) {
						result.targets.sortBySeat();
						player.logSkill("xijue_tuxi", result.targets);
						player.removeMark("xijue", 1);
						player.gainMultiple(result.targets);
						trigger.num -= result.targets.length;
					} else {
						event.finish();
					}
					"step 2";
					if (trigger.num <= 0) game.delay();
				},
				ai: {
					expose: 0.2,
				},
			},
			xijue_xiaoguo: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					return (
						player.hasMark("xijue") &&
						event.player.isAlive() &&
						event.player != player &&
						player.countCards("h", function (card) {
							if (_status.connectMode || get.mode() != "guozhan") return true;
							return get.type(card) == "basic";
						})
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var nono =
						Math.abs(get.attitude(player, trigger.player)) < 3 ||
						trigger.player.hp > player.countMark("xijue") * 1.5 ||
						trigger.player.countCards("e", function (card) {
							return get.value(card, trigger.player) <= 0;
						});
					if (get.damageEffect(trigger.player, player, player) <= 0) {
						nono = true;
					}
					var next = player.chooseToDiscard(`是否弃置一枚“爵”和一张${get.mode() == "guozhan" ? "基本" : "手"}牌，对${get.translation(trigger.player)}发动【骁果】？`, "h", function (card, player) {
						if (get.mode() != "guozhan") return true;
						return get.type(card, null, player) == "basic";
					});
					next.set("ai", function (card) {
						if (_status.event.nono) return 0;
						return 8 - get.useful(card);
					});
					next.set("logSkill", ["xijue_xiaoguo", trigger.player]);
					next.set("nono", nono);
					"step 1";
					if (result.bool) {
						player.removeMark("xijue", 1);
						var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
						trigger.player
							.chooseToDiscard("he", "弃置一张装备牌并令" + get.translation(player) + "摸一张牌，或受到1点伤害", { type: "equip" })
							.set("ai", function (card) {
								if (_status.event.nono) {
									return 0;
								}
								if (_status.event.player.hp == 1) return 10 - get.value(card);
								return 9 - get.value(card);
							})
							.set("nono", nono);
					} else {
						event.finish();
					}
					"step 2";
					if (result.bool) {
						if (get.mode() != "guozhan") player.draw();
					} else {
						trigger.player.damage();
					}
				},
				ai: {
					expose: 0.3,
					threaten: 1.3,
				},
			},
			huishi: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter: function (event, player) {
					return ui.cardPile.childElementCount % 10 > 0 && !event.numFixed;
				},
				preHidden: true,
				prompt: function () {
					return get.prompt("huishi") + "（当前牌堆尾数：" + (ui.cardPile.childElementCount % 10) + "）";
				},
				check: function (event, player) {
					return ui.cardPile.childElementCount % 10 > 3;
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					var cards = game.cardsGotoOrdering(get.cards(ui.cardPile.childElementCount % 10)).cards;
					var num = Math.ceil(cards.length / 2);
					var next = player.chooseToMove("慧识：将" + get.cnNumber(num) + "张牌置于牌堆底并获得其余的牌", true);
					next.set("list", [["牌堆顶的展示牌", cards], ["牌堆底"]]);
					next.set("filterMove", function (from, to, moved) {
						if (moved[0].includes(from) && to == 1) return moved[1].length < _status.event.num;
						return true;
					});
					next.set("filterOk", function (moved) {
						return moved[1].length == _status.event.num;
					});
					next.set("num", num);
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b) - get.useful(a);
						});
						return [cards, cards.splice(cards.length - _status.event.num)];
					});
					"step 1";
					if (result.bool) {
						var list = result.moved;
						if (list[0].length) player.gain(list[0], "gain2");
						while (list[1].length) ui.cardPile.appendChild(list[1].shift().fix());
					}
				},
			},
			qingleng: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				direct: true,
				preHidden: true,
				filter: function (event, player) {
					var target = event.player;
					return target != player && target.isIn() && !target.storage.nohp && target.hp + target.countCards("h") >= ui.cardPile.childElementCount % 10 && player.countCards("he") > 0 && player.canUse({ name: "sha", nature: "ice" }, target, false);
				},
				content: function () {
					"step 0";
					player
						.chooseCard("he", get.prompt("qingleng", trigger.player), "将一张牌当做冰【杀】对其使用", function (card, player) {
							return player.canUse(get.autoViewAs({ name: "sha", nature: "ice" }, [card]), _status.event.target, false);
						})
						.set("target", trigger.player)
						.set("ai", function (card) {
							if (get.effect(_status.event.target, get.autoViewAs({ name: "sha", nature: "ice" }, [card]), player) <= 0) return false;
							return 6 - get.value(card);
						})
						.setHiddenSkill(event.name);
					"step 1";
					if (result.bool) {
						player.useCard(get.autoViewAs({ name: "sha", nature: "ice" }, result.cards), result.cards, false, trigger.player, "qingleng");
						if (!player.storage.qingleng || !player.storage.qingleng.includes(trigger.player)) {
							player.draw();
							player.markAuto("qingleng", [trigger.player]);
							player.storage.qingleng.sortBySeat();
						}
					}
				},
				intro: {
					content: "已对$发动过此技能",
				},
			},
			xuanmu: {
				audio: 2,
				trigger: { player: "showCharacterAfter" },
				forced: true,
				hiddenSkill: true,
				filter: function (event, player) {
					// 临时修改（by 棘手怀念摧毁）
					return event.toShow && event.toShow.some(i => get.character(i, 3) && get.character(i, 3).includes("xuanmu")) && player != _status.currentPhase;
					// return event.toShow?.some(i => get.character(i).skills?.includes("xuanmu")) && player != _status.currentPhase;
				},
				content: function () {
					player.addTempSkill("xuanmu2");
				},
			},
			xuanmu2: {
				trigger: { player: "damageBegin4" },
				forced: true,
				popup: false,
				sourceSkill: "xuanmu",
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage") && !player.hasSkillTag("jueqing", false, target)) return "zerotarget";
						},
					},
				},
			},
			g_hidden_ai: {
				charlotte: true,
				ai: {
					threaten: function (player, target) {
						if (get.mode() != "guozhan" && target.isUnseen(2)) return 0.0001;
						return 1;
					},
				},
			},
		},
		dynamicTranslate: {
			
		},
		translate: {
			jin_zhangchunhua: "晋张春华",
			jin_zhangchunhua_prefix: "晋",
			huishi: "慧识",
			huishi_info: "摸牌阶段，你可以放弃摸牌，改为观看牌堆顶的X张牌，获得其中的一半（向下取整），然后将其余牌置入牌堆底。（X为牌堆数量的个位数）",
			qingleng: "清冷",
			qingleng_info: "一名角色的回合结束时，若其体力值与手牌数之和不小于X，则你可将一张牌当无距离限制的冰属性【杀】对其使用（X为牌堆数量的个位数）。若这是你本局游戏内首次对其发动此技能，则你摸一张牌。",
			xuanmu: "宣穆",
			xuanmu2: "宣穆",
			xuanmu_info: "锁定技，隐匿技。你于其他角色的回合登场时，防止你受到的伤害直到回合结束。",
			jin_simayi: "晋司马懿",
			jin_simayi_prefix: "晋",
			zhanghuyuechen: "张虎乐綝",
			xijue: "袭爵",
			xijue_gain: "袭爵",
			xijue_info: "锁定技，游戏开始时，你获得4枚“爵”。回合结束时，你获得X枚“爵”（X为你本回合内造成的伤害数）。你可弃置一枚“爵”并在合适的时机发动〖突袭〗和〖骁果〗。",
			xijue_info_guozhan: "锁定技，当你首次明置此武将牌时，你获得4枚“爵”。回合结束时，你获得X枚“爵”（X为你本回合内造成的伤害数）。你可弃置一枚“爵”并在合适的时机发动〖突袭〗和〖骁果〗。",
			xijue_tuxi: "突袭",
			xijue_tuxi_info: "摸牌阶段摸牌时，你可以少摸任意张牌，然后获得等量的角色的各一张手牌。",
			xijue_tuxi_info_guozhan: "摸牌阶段摸牌时，你可以少摸至多两张牌，然后获得等量的角色的各一张手牌。",
			xijue_xiaoguo: "骁果",
			xijue_xiaoguo_info: "其他角色的结束阶段开始时，你可以弃置一张手牌，令该角色选择一项：1.弃置一张装备牌，然后你摸一张牌；2.受到你对其造成的1点伤害。",
			xijue_xiaoguo_info_guozhan: "其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌；2.受到你对其造成的1点伤害。",
			gz_duyu: "杜预",
			duyu: "晋杜预",
			duyu_prefix: "晋",
			sanchen: "三陈",
			sanchen_info: "出牌阶段限一次。你可选择一名本回合内未选择过的角色。其摸三张牌，然后弃置三张牌。若其未以此法弃置牌或以此法弃置的牌的类别均不相同，则其摸一张牌且〖三陈〗于此阶段内使用次数上限+1。",
			sanchen_info_guozhan: "出牌阶段，你可选择一名本回合内未选择过的角色。其摸三张牌，然后弃置三张牌。若其未以此法弃置牌或以此法弃置的牌的类别均不相同，则其摸一张牌且你获得技能〖破竹〗直到回合结束。否则你本阶段内不能再发动〖三陈〗。",
			zhaotao: "诏讨",
			zhaotao_info: "觉醒技，准备阶段，若你本局游戏内发动〖三陈〗的次数大于2，则你减1点体力上限并获得〖破竹〗。",
			pozhu: "破竹",
			pozhu_info: "出牌阶段，你可以将一张手牌当做【出其不意】使用。若你未因此牌造成过伤害，则你不能再发动〖破竹〗直到回合结束。",
			pozhu_info_guozhan: "出牌阶段限一次，你可以将一张手牌当做【出其不意】使用。",
			jin_wangyuanji: "晋王元姬",
			jin_wangyuanji_prefix: "晋",
			shiren: "识人",
			shiren_info: "隐匿技。你于其他角色的回合内登场时，若其有手牌，则你可对其发动〖宴戏〗。",
			yanxi: "宴戏",
			yanxi2: "宴戏",
			yanxi_info: "出牌阶段，你可选择一名有手牌的角色。你将该角色的一张随机手牌与牌堆顶的两张牌混合后展示，并选择其中一张。若你以此法选择的是该角色的手牌，则你获得这三张牌。否则你获得选择的牌。你通过〖宴戏〗得到的牌，不计入当前回合的手牌上限。",
			yanxi_info_guozhan: "出牌阶段，你可选择一名有手牌的角色。你将该角色的一张随机手牌与牌堆中的两张随机牌混合后展示，并选择其中一张。若你以此法选择的是该角色的手牌，则你获得这三张牌。否则你获得选择的牌。你通过〖宴戏〗得到的牌，不计入当前回合的手牌上限。",
			jin_simazhao: "晋司马昭",
			jin_simazhao_prefix: "晋",
			tuishi: "推弑",
			tuishi_info: "隐匿技，你于其他角色A的回合内登场时，可于此回合结束时选择其攻击范围内的一名角色B。A选择一项：①对B使用一张【杀】。②你对A造成1点伤害。",
			choufa: "筹伐",
			choufa2: "筹伐",
			choufa_info: "出牌阶段限一次，你可展示一名其他角色的一张手牌并记录其类型A。你令其原类型不为A的手牌的牌名均视为【杀】且均视为无属性，直到其回合结束。",
			xinchoufa: "筹伐",
			xinchoufa_info: "出牌阶段限一次，你可展示一名其他角色的一张手牌A。你令其所有类型与A不同的手牌的牌名均视为【杀】且均视为无属性，直到其回合结束。",
			zhaoran: "昭然",
			zhaoran2: "昭然",
			zhaoran_info: "出牌阶段开始时，你可令你的手牌对其他角色可见直到出牌阶段结束。若如此做，当你于此阶段内失去一张手牌后，若你的手牌里没有与此牌花色相同的牌且你本回合内未因该花色的牌触发过此效果，则你选择一项：①摸一张牌。②弃置一名其他角色的一张牌。",
			visible_zhaoran: "invisible",
			chengwu: "成务",
			chengwu_info: "主公技，锁定技，其他晋势力角色攻击范围内的角色视为在你的攻击范围内。",
			jin_xiahouhui: "晋夏侯徽",
			jin_xiahouhui_prefix: "晋",
			baoqie: "宝箧",
			baoqie_info: "隐匿技，锁定技。你登场后，从牌堆或弃牌堆中获得一张不为赠物的宝物牌。若此牌在你的手牌区内为宝物牌，则你可以使用此牌。",
			jyishi: "宜室",
			jyishi_info: "每回合限一次，当有其他角色于其出牌阶段内因弃置而失去手牌后，你可令其获得这些牌中位于弃牌堆的一张，然后你获得其余位于弃牌堆的牌。",
			shiduo: "识度",
			shiduo_info: "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你获得其所有手牌。然后你交给其X张手牌（X为你手牌数的一半，向下取整）。",
			jin_simashi: "晋司马师",
			jin_simashi_prefix: "晋",
			taoyin: "韬隐",
			taoyin2: "韬隐",
			taoyin_info: "隐匿技，当你登场后，若当前回合角色存在且不是你，则你可令该角色本回合的手牌上限-2。",
			yimie: "夷灭",
			yimie2: "夷灭",
			yimie_info: "每回合限一次，当你对其他角色造成伤害时，若伤害值X小于Y，则你可失去1点体力，将伤害值改为Y。此伤害结算结束后，其回复(Y-X)点体力（Y为其体力值）。",
			ruilve: "睿略",
			ruilve2: "睿略",
			ruilve_info: "主公技，其他晋势力角色的出牌阶段限一次，该角色可以将一张带有伤害标签的基本牌或锦囊牌交给你。",
			tairan: "泰然",
			tairan2: "泰然",
			tairan_info: "锁定技，回合结束时，你将体力回复至体力上限，并将手牌摸至体力上限（称为“泰然”牌）。然后你的下一个出牌阶段开始时，你失去上一次以此法回复的体力值的体力，弃置所有“泰然”牌。",
			gz_jin_simayi: "司马懿",
			gz_jin_zhangchunhua: "张春华",
			gz_jin_simazhao: "司马昭",
			gz_jin_wangyuanji: "王元姬",
			gz_jin_simashi: "司马师",
			gz_jin_xiahouhui: "夏侯徽",
			xinquanbian: "权变",
			xinquanbian_info: "出牌阶段，每当你首次使用/打出一种花色的手牌时，你可以从牌堆顶的X张牌中获得一张与此牌花色不同的牌，并将其余牌以任意顺序置于牌堆顶。出牌阶段，你至多可使用X张非装备手牌。（X为你的体力上限）",
			shibao: "石苞",
			zhuosheng: "擢升",
			zhuosheng_info: "出牌阶段，①你使用本轮内得到的基本牌时无次数和距离限制。②你使用本轮内获得的普通锦囊牌选择目标后，可令此牌的目标数+1或-1。③你使用本轮内得到的装备牌时可以摸一张牌（以此法得到的牌不能触发〖擢升〗）。",
			zhuosheng_info_guozhan: "出牌阶段，①你使用本轮内得到的基本牌时无距离限制。②你使用本轮内获得的普通锦囊牌选择目标后，可令此牌的目标数+1或-1。③你使用本轮内得到的装备牌时可以摸一张牌（以此法得到的牌不能触发〖擢升〗）。",
			jin_yanghuiyu: "晋羊徽瑜",
			jin_yanghuiyu_prefix: "晋",
			gz_jin_yanghuiyu: "羊徽瑜",
			huirong: "慧容",
			huirong_info: "隐匿技，锁定技。当你登场后，你令一名角色将手牌数摸至/弃至与体力值相同（至多摸至五张）。",
			ciwei: "慈威",
			ciwei_info: "一名角色于其回合内使用第二张牌时，若此牌为基本牌或普通锦囊牌，则你可以弃置一张牌，取消此牌的所有目标。",
			caiyuan: "才媛",
			caiyuan_info: "锁定技。回合结束时，若你于你的上一个回合结束后未扣减过体力，则你摸两张牌。",
			simazhou: "司马伷",
			caiwang: "才望",
			caiwang_info: "当你使用或打出牌响应其他角色使用的牌，或其他角色使用或打出牌响应你使用的牌后，若这两张牌颜色相同，则你可以弃置对方的一张牌。",
			naxiang: "纳降",
			naxiang2: "纳降",
			naxiang_info: "锁定技，当你受到其他角色造成的伤害后，或你对其他角色造成伤害后，你对其发动〖才望①〗时的“弃置”改为“获得”直到你的下回合开始。",
			cheliji: "彻里吉",
			chexuan: "车悬",
			chexuan_info: "出牌阶段，若你的装备区里没有宝物牌，你可弃置一张黑色牌，选择一张【舆】置入你的装备区；当你失去装备区里的宝物牌后，你可进行判定，若结果为黑色，将一张随机的【舆】置入你的装备区。",
			qiangshou: "羌首",
			qiangshou_info: "锁定技，若你的装备区内有宝物牌，你与其他角色的距离-1。",
			cheliji_sichengliangyu: "四乘粮舆",
			cheliji_sichengliangyu_bg: "粮",
			cheliji_sichengliangyu_info: "一名角色的回合结束时，若你的手牌数小于体力值，你可以摸两张牌，然后弃置此牌。",
			cheliji_tiejixuanyu: "铁蒺玄舆",
			cheliji_tiejixuanyu_bg: "蒺",
			cheliji_tiejixuanyu_info: "其他角色的回合结束时，若其本回合未造成过伤害，你可以令其弃置两张牌，然后弃置此牌。",
			cheliji_feilunzhanyu: "飞轮战舆",
			cheliji_feilunzhanyu_bg: "轮",
			cheliji_feilunzhanyu_info: "其他角色的回合结束时，若其本回合使用过非基本牌，你可以令其交给你一张牌，然后弃置此牌。",
			weiguan: "卫瓘",
			zhongyun: "忠允",
			zhongyun2: "忠允",
			zhongyun_info: "锁定技。每名角色的回合限一次，你受伤/回复体力后，若你的体力值与手牌数相等，你回复1点体力或对你攻击范围内的一名角色造成1点伤害；每名角色的回合限一次，你获得手牌或失去手牌后，若你的体力值与手牌数相等，你摸一张牌或弃置一名其他角色一张牌。",
			shenpin: "神品",
			shenpin_info: "当一名角色的判定牌生效前，你可以打出一张与判定牌颜色不同的牌代替之。",
			zhongyan: "钟琰",
			bolan: "博览",
			bolan_info: "①出牌阶段开始时，你可从三个描述中带有“出牌阶段限一次”的技能中选择一个，令当前回合角色获得直至此阶段结束。②其他角色出牌阶段限一次，其可以失去1点体力，令你发动一次〖博览①〗。",
			yifa: "仪法",
			yifa2: "仪法",
			yifa_info: "锁定技，其他角色使用【杀】或黑色普通锦囊牌指定你为目标后，其手牌上限-1直到其回合结束。",
			ol_huaxin: "OL华歆",
			ol_huaxin_prefix: "OL",
			caozhao: "草诏",
			caozhao_backup: "草诏",
			caozhao_info: "出牌阶段限一次，你可展示一张手牌并声明一种未以此法声明过的基本牌或普通锦囊牌，令一名体力不大于你的其他角色选择一项：令此牌视为你声明的牌，或其失去1点体力。然后若此牌声明成功，然后你可将其交给一名其他角色。",
			olxibing: "息兵",
			olxibing_info: "当你受到其他角色造成的伤害后，你可弃置你或该角色两张牌，然后你们中手牌少的角色摸两张牌，以此法摸牌的角色不能使用牌指定你为目标直到回合结束。",
			recaiwang: "才望",
			recaiwang_info: "①当你使用或打出牌响应其他角色使用的牌，或其他角色使用或打出牌响应你使用的牌后，若这两张牌颜色相同，则你可以弃置对方的一张牌。②若你的手牌数为1，则你可以将该手牌当做【闪】使用或打出。③若你的装备区牌数为1，则你可以将该装备当做【无懈可击】使用或打出。④若你的判定区牌数为1，则你可以将该延时锦囊牌当做【杀】使用或打出。",
			recaiwang_hand: "才望",
			recaiwang_equip: "才望",
			recaiwang_judge: "才望",
			yangyan: "杨艳",
			xuanbei: "选备",
			xuanbei_info: "①游戏开始时，你从牌堆中获得两张具有应变标签的牌。②每回合限一次。当你使用的具有应变标签的牌结算结束后，你可将此牌对应的所有实体牌交给一名其他角色。",
			xianwan: "娴婉",
			xianwan_info: "①当你需要使用【闪】时，若你的武将牌未横置，则你可以横置武将牌并视为使用【闪】。②当你需要使用【杀】时，若你的武将牌横置，则你可以重置武将牌并视为使用【杀】。",
			yangzhi: "杨芷",
			wanyi: "婉嫕",
			wanyi_info: "每回合每项限一次。出牌阶段，你可以将一张具有应变效果的牌当做【逐近弃远】/【出其不意】/【水淹七军】/【洞烛先机】使用。",
			maihuo: "埋祸",
			maihuo_info: "①当你成为其他角色使用【杀】的目标后，若此【杀】不为转化牌且有对应的实体牌且其武将牌上没有“祸”且你是此牌的唯一目标，则你可以令此牌对你无效，并将此【杀】置于其武将牌上，称为“祸”。②一名其他角色的出牌阶段开始时，若其武将牌上有“祸”，则其对你使用此“祸”（有距离限制且计入次数限制，若你不是此牌的合法目标，则改为将此“祸”置入弃牌堆）。③当你对有“祸”的其他角色造成伤害后，你移去其“祸”。",
			xinchang: "辛敞",
			canmou: "参谋",
			canmou_info: "一名角色使用普通锦囊牌指定第一个目标时，若其手牌数为全场唯一最多，则你可以为此牌增加一个额外目标。",
			congjian: "从鉴",
			congjian_info: "一名其他角色成为普通锦囊牌的唯一目标时，若其体力值为全场唯一最多，则你也可以成为此牌的目标。此牌结算结束后，若你受到过渠道为此牌的伤害，则你摸两张牌。",
			xuangongzhu: "晋宣公主",
			gz_xuangongzhu: "宣公主",
			xuangongzhu_prefix: "晋",
			gaoling: "高陵",
			gaoling_info: "隐匿技。当你于回合外明置此武将牌时，你可以令一名角色回复1点体力。",
			qimei: "齐眉",
			qimei_info: "准备阶段，你可以选择一名其他角色。你获得如下效果直到下回合开始：①每回合限一次，当你或其获得牌/失去手牌后，若你与其手牌数相等，则另一名角色摸一张牌。②每回合限一次，当你或其的体力值变化后，若你与其体力值相等，则另一名角色摸一张牌。",
			ybzhuiji: "追姬",
			ybzhuiji_info: "出牌阶段开始时，你可选择一项：①摸两张牌，并于出牌阶段结束时失去1点体力；②回复1点体力，并于出牌阶段结束时弃置两张牌。",
			jin_yanghu: "晋羊祜",
			jin_yanghu_prefix: "晋",
			huaiyuan: "怀远",
			huaiyuanx: "绥",
			huaiyuan_info: "①游戏开始时，你将你的手牌标记为“绥”。②当你失去一张“绥”后，你令一名角色执行一项：⒈其的手牌上限+1。⒉其的攻击范围+1。⒊其摸一张牌。③当你死亡时，你可令一名其他角色的手牌上限+X，且攻击范围+Y（X和Y为你自己被执行过〖怀远②〗的选项一和选项二的次数）。",
			chongxin: "崇信",
			chongxin_info: "出牌阶段限一次，你可重铸一张牌，且令一名有手牌的其他角色也重铸一张牌。",
			dezhang: "德彰",
			dezhang_info: "觉醒技。准备阶段，若你没有“绥”，则你减1点体力上限并获得〖卫戍〗。",
			weishu: "卫戍",
			weishu_info: "锁定技。①当你于摸牌阶段外不因〖卫戍①〗而摸牌后，你令一名角色摸一张牌。②当你于弃牌阶段外不因〖卫戍②〗而弃置牌后，你弃置一名其他角色的一张牌。",
			jin_jiachong: "晋贾充",
			jin_jiachong_prefix: "晋",
			xiongshu: "凶竖",
			xiongshu_info: "其他角色的出牌阶段开始时，你可弃置X张牌（X为你本轮内此前已发动过此技能的次数，为0则不弃）并展示其一张手牌，然后你预测“其本阶段内是否会使用与展示牌牌名相同的牌”。此阶段结束时，若你的预测正确，则你对其造成1点伤害；否则你获得展示牌。",
			jianhui: "奸回",
			jianhui_info: "锁定技。当你造成伤害后，若受伤角色为A，则你摸一张牌；当你受到伤害后，若伤害来源为A，则A弃置一张牌。（A为除本次伤害外最近一次对你造成过伤害的角色）",
			xinxuanbei: "选备",
			xinxuanbei_info: "出牌阶段限一次。你可选择一名其他角色区域内的一张牌。然后其对你使用对应实体牌为此牌的【杀】。然后若此【杀】，未对你造成过伤害，你摸一张牌；对你造成过伤害，你摸两张牌。",
			xinwanyi: "婉嫕",
			xinwanyi_info: "①当你使用【杀】或普通锦囊牌指定其他角色为唯一目标后，你可将其的一张牌置于你的武将牌上作为“嫕”。②你不能使用/打出/弃置与“嫕”花色相同的牌。③结束阶段或当你受到伤害后，你令一名角色获得你的一张“嫕”。",
			jin_guohuai: "郭槐",
			zhefu: "哲妇",
			zhefu_info: "当你于回合外使用或打出牌后，你可令一名有手牌的其他角色选择一项：⒈弃置一张名称相同的牌。⒉受到你造成的1点伤害。",
			yidu: "遗毒",
			yidu_info: "当你使用的【杀】或伤害性锦囊牌结算结束后，你可以展示一名未受到过渠道为此牌伤害的目标角色的至多三张手牌。若这些牌颜色均相同，则你弃置这些牌。",
			wangxiang: "王祥",
			bingxin: "冰心",
			bingxin_info: "每种牌名每回合限一次。当你需要使用基本牌时，若你的手牌数等于体力值且这些牌的颜色均相同，则你可以摸一张牌，视为使用一张基本牌。",
			ol_lisu: "OL李肃",
			ol_lisu_prefix: "OL",
			qiaoyan: "巧言",
			qiaoyan_info: "锁定技，当你于回合外受到其他角色造成的伤害时，若你：有“珠”，则你令伤害来源获得“珠”；没有“珠”，则你防止此伤害，然后摸一张牌，并将一张牌正面朝上置于武将牌上，称为“珠”。",
			xianzhu: "献珠",
			xianzhu_info: "锁定技，出牌阶段开始时，你令一名角色A获得“珠”。若A不为你自己，则你选择你攻击范围内的一名角色B，视为A对B使用一张【杀】。",
			chengjichengcui: "成济成倅",
			oltousui: "透髓",
			oltousui_info: "你可以将任意张牌置于牌堆底，视为使用一张需使用等量张【闪】抵消的【杀】。",
			olchuming: "畜鸣",
			olchuming_info: "锁定技。当你对其他角色造成伤害时，或当你受到其他角色造成的伤害时，若此伤害的渠道不为牌或没有对应的实体牌，此伤害+1，否则其于本回合结束时将所有以此法造成伤害的牌当【借刀杀人】或【过河拆桥】对你使用。",

			yingbian_pack1: "文德武备·理",
			yingbian_pack2: "文德武备·备",
			yingbian_pack3: "文德武备·果",
			yingbian_pack4: "文德武备·戒",
			yingbian_pack5: "文德武备·约",
		},
		perfectPair: {
			
		},
		characterReplace: {
			
		},
		pinyins: {
			
		},
	};
});
