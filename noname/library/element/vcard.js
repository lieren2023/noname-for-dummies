import { get } from "../../get/index.js";
import { lib } from "../index.js";
import { _status } from "../../status/index.js";

export class VCard {
	/**
	 * @param { any } [suitOrCard]
	 * @param { number | Card[] } [numberOrCards]
	 * @param { string } [name]
	 * @param { string } [nature]
	 */
	constructor(suitOrCard, numberOrCards, name, nature) {
		if (Array.isArray(suitOrCard)) {
			/**
			 * @type {string}
			 */
			this.suit = suitOrCard[0];
			/**
			 * @type {number}
			 */
			this.number = suitOrCard[1];
			/**
			 * @type {string}
			 */
			this.name = suitOrCard[2];
			/**
			 * @type {string}
			 */
			this.nature = suitOrCard[3];
		}
		// @ts-ignore
		else if (get.itemtype(suitOrCard) == "card") {
			this.name = get.name(suitOrCard);
			this.suit = get.suit(suitOrCard);
			this.color = get.color(suitOrCard);
			this.number = get.number(suitOrCard);
			this.nature = get.nature(suitOrCard);
			/**
			 * @type { boolean }
			 */
			this.isCard = true;
			this.cardid = suitOrCard.cardid;
			this.wunature = suitOrCard.wunature;
			/**
			 * @type {Record<string, any>}
			 */
			this.storage = get.copy(suitOrCard.storage);
			if (Array.isArray(numberOrCards)) this.cards = numberOrCards.slice();
			else this.cards = [suitOrCard];
			const info = get.info(this, false);
			if (info) {
				const autoViewAs = info.autoViewAs;
				if (typeof autoViewAs == "string") this.name = autoViewAs;
			}
		} else if (suitOrCard && typeof suitOrCard != "string") {
			Object.keys(suitOrCard).forEach((key) => {
				/**
				 * @type { PropertyDescriptor }
				 */
				// @ts-ignore
				const propertyDescriptor = Object.getOwnPropertyDescriptor(suitOrCard, key),
					value = propertyDescriptor.value;
				if (Array.isArray(value)) this[key] = value.slice();
				else Object.defineProperty(this, key, propertyDescriptor);
			});
			if (Array.isArray(numberOrCards)) {
				const noCards = !this.cards;
				/**
				 * @type { Card[] }
				 */
				this.cards = numberOrCards.slice();
				if (noCards) {
					if (!lib.suits.includes(this.suit)) this.suit = get.suit(this);
					if (!Object.keys(lib.color).includes(this.color)) this.color = get.color(this);
					if (typeof this.number != "number") this.number = get.number(this);
					if (!this.nature) this.nature = get.nature(this);
				}
			} else if (numberOrCards === "unsure" && !this.isCard) {
				if (!this.suit) this.suit = "unsure";
				if (!this.color) this.color = "unsure";
				if (!this.number) this.number = "unsure";
			}
			const info = get.info(this, false);
			if (info) {
				const autoViewAs = info.autoViewAs;
				if (typeof autoViewAs == "string") this.name = autoViewAs;
			}
		}
		if (typeof suitOrCard == "string") this.suit = suitOrCard;
		if (typeof numberOrCards == "number") this.number = numberOrCards;
		if (typeof name == "string") this.name = name;
		if (typeof nature == "string") this.nature = nature;
		if (!this.storage) this.storage = {};
		if (!this.cards) this.cards = [];
	}
	sameSuitAs(card) {
		return get.suit(this) == get.suit(card);
	}
	differentSuitFrom(card) {
		return get.suit(this) != get.suit(card);
	}
	sameNumberAs(card) {
		return get.number(this) == get.number(card);
	}
	differentNumberFrom(card) {
		return get.number(this) != get.number(card);
	}
	sameNameAs(card) {
		return get.name(this) == get.name(card);
	}
	differentNameFrom(card) {
		return get.name(this) != get.name(card);
	}
	/**
	 * @param { Player } player
	 */
	hasNature(nature, player) {
		const natures = get.natureList(this, player);
		if (!nature) return natures.length > 0;
		if (nature == "linked") return natures.some((n) => lib.linked.includes(n));
		return get.is.sameNature(natures, nature);
	}
	getCacheKey() {
		return `[vc:${this.name}+${this.suit ? this.suit : "none"}+${
			this.number === undefined ? "none" : this.number
		}${this.nature ? "+" : ""}${this.nature ? this.nature : ""}]`;
	}
	hasGaintag(tag) {
		return this.gaintag && this.gaintag.includes(tag);
	}
}
