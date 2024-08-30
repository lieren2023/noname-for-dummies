import { get } from "../../get/index.js";
import { lib } from "../index.js";
import { _status } from "../../status/index.js";
import { ui } from "../../ui/index.js";

export class Dialog extends HTMLDivElement {
	/** @type { HTMLDivElement } */
	// eslint-disable-next-line no-unreachable
	contentContainer;
	/** @type { HTMLDivElement } */
	content;
	/** @type { HTMLDivElement } */
	bar1;
	/** @type { HTMLDivElement } */
	bar2;
	/** @type { Button[] } */
	buttons;
	/** @type { boolean } */
	static;
	/** @type { boolean } */
	noforcebutton;
	/** @type { boolean } */
	noopen;

	// @ts-ignore
	constructor(...args) {
		if (args[0] instanceof Dialog) {
			const other = args[0];
			// @ts-ignore
			args = other._args;
		}

		let hidden = false;
		let noTouchScroll = false;
		let forceButton = false;
		let noForceButton = false;
		/** @type { this } */
		// @ts-ignore
		const dialog = ui.create.div(".dialog");
		Object.setPrototypeOf(dialog, (lib.element.Dialog || Dialog).prototype);
		dialog.contentContainer = ui.create.div(".content-container", dialog);
		dialog.content = ui.create.div(".content", dialog.contentContainer);
		dialog.bar1 = ui.create.div(".bar.top", dialog);
		dialog.bar2 = ui.create.div(".bar.bottom", dialog);
		dialog.buttons = [];
		Array.from(args).forEach((argument) => {
			if (typeof argument == "boolean") dialog.static = argument;
			else if (argument == "hidden") hidden = true;
			else if (argument == "notouchscroll") noTouchScroll = true;
			else if (argument == "forcebutton") forceButton = true;
			else if (argument == "noforcebutton") noForceButton = true;
			else dialog.add(argument);
		});
		//if (!hidden) dialog.open();
		if (!lib.config.touchscreen)
			dialog.contentContainer.onscroll = ui.update;
		if (!noTouchScroll) {
			dialog.contentContainer.ontouchstart = ui.click.dialogtouchStart;
			dialog.contentContainer.ontouchmove = ui.click.touchScroll;
			// @ts-ignore
			dialog.contentContainer.style.webkitOverflowScrolling = "touch";
			dialog.ontouchstart = ui.click.dragtouchdialog;
		}
		if (noForceButton) dialog.noforcebutton = true;
		else if (forceButton) {
			dialog.forcebutton = true;
			dialog.classList.add("forcebutton");
		}
		// @ts-ignore
		dialog._args = args;
		return dialog;
	}
	/**
	 *
	 * @param { string | HTMLDivElement | Card[] | Player[] } item
	 * @param {*} [noclick]
	 * @param { boolean } [zoom]
	 */
	add(item, noclick, zoom) {
		if (typeof item == "string") {
			if (item.startsWith("###")) {
				const items = item.slice(3).split("###");
				this.add(items[0], noclick, zoom);
				this.addText(items[1], items[1].length <= 20, zoom);
			} else if (noclick) {
				const strstr = item;
				item = ui.create.div("", this.content);
				item.innerHTML = strstr;
			} else {
				item = ui.create.caption(item, this.content);
			}
		}
		// @ts-ignore
		else if (["div", "fragment"].includes(get.objtype(item))) {
			// @ts-ignore
			this.content.appendChild(item);
		}
		// @ts-ignore
		else if (get.itemtype(item) == "cards") {
			const buttons = ui.create.div(".buttons", this.content);
			if (zoom) buttons.classList.add("smallzoom");
			// @ts-ignore
			this.buttons = this.buttons.concat(
				ui.create.buttons(item, "card", buttons, noclick)
			);
		}
		// @ts-ignore
		else if (get.itemtype(item) == "players") {
			var buttons = ui.create.div(".buttons", this.content);
			if (zoom) buttons.classList.add("smallzoom");
			// @ts-ignore
			this.buttons = this.buttons.concat(
				ui.create.buttons(item, "player", buttons, noclick)
			);
		} else if (item[1] == "textbutton") {
			ui.create.textbuttons(item[0], this, noclick);
		} else {
			var buttons = ui.create.div(".buttons", this.content);
			if (zoom) buttons.classList.add("smallzoom");
			// @ts-ignore
			this.buttons = this.buttons.concat(
				ui.create.buttons(item[0], item[1], buttons, noclick)
			);
		}
		if (this.buttons.length) {
			if (this.forcebutton !== false) this.forcebutton = true;
			if (this.buttons.length > 3 || (zoom && this.buttons.length > 5)) {
				this.classList.remove("forcebutton-auto");
			} else if (!this.noforcebutton) {
				this.classList.add("forcebutton-auto");
			}
		}
		ui.update();
		return item;
	}
	/**
	 * @param { string } str
	 * @param { boolean } [center]
	 */
	addText(str, center) {
		if (str && str.startsWith("<div")) this.add(str);
		else if (center !== false) {
			this.add('<div class="text center">' + str + "</div>");
		} else {
			this.add('<div class="text">' + str + "</div>");
		}
		return this;
	}

	addSmall(item, noclick) {
		return this.add(item, noclick, true);
	}
	addAuto(content) {
		// @ts-ignore
		if (content && content.length > 4 && !this._hovercustomed) {
			this.addSmall(content);
		} else {
			this.add(content);
		}
	}
	open() {
		if (this.noopen) return;
		for (let i = 0; i < ui.dialogs.length; i++) {
			if (ui.dialogs[i] == this) {
				this.show();
				this.refocus();
				ui.dialogs.remove(this);
				ui.dialogs.unshift(this);
				ui.update();
				return this;
			}
			if (ui.dialogs[i].static) ui.dialogs[i].unfocus();
			else ui.dialogs[i].hide();
		}
		ui.dialog = this;
		let translate;
		if (
			lib.config.remember_dialog &&
			lib.config.dialog_transform &&
			!this.classList.contains("fixed")
		) {
			translate = lib.config.dialog_transform;
			this._dragtransform = translate;
			this.style.transform =
				"translate(" +
				translate[0] +
				"px," +
				translate[1] +
				"px) scale(0.8)";
		} else {
			this.style.transform = "scale(0.8)";
		}
		this.style.transitionProperty = "opacity,transform";
		this.style.opacity = "0";
		ui.arena.appendChild(this);
		ui.dialogs.unshift(this);
		ui.update();
		ui.refresh(this);
		if (
			lib.config.remember_dialog &&
			lib.config.dialog_transform &&
			!this.classList.contains("fixed")
		) {
			this.style.transform =
				"translate(" +
				translate[0] +
				"px," +
				translate[1] +
				"px) scale(1)";
		} else {
			this.style.transform = "scale(1)";
		}
		this.style.opacity = "1";
		setTimeout(() => {
			this.style.transitionProperty = "";
		}, 500);
		return this;
	}
	close() {
		ui.dialogs.remove(this);
		this.delete();
		if (ui.dialogs.length > 0) {
			ui.dialog = ui.dialogs[0];
			ui.dialog.show();
			ui.dialog.refocus();
			ui.update();
		}
		// if(ui.arenalog){
		// 	ui.arenalog.classList.remove('withdialog');
		// }
		return this;
	}
	/**
	 * @param { string } str
	 */
	setCaption(str) {
		// @ts-ignore
		this.querySelector(".caption").innerHTML = str;
		return this;
	}
}
