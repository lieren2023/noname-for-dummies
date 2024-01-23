import { Game as game } from '../game/index.js';
import { lib } from '../library/index.js';

/**
 * @param {string} name - 卡牌包名
 * @returns {Promise<void>}
 */
export const importCardPack = generateImportFunction('card', (name) => `../../card/${name}.js`)

/**
 * @param {string} name - 武将包名
 * @returns {Promise<void>}
 */
export const importCharacterPack = generateImportFunction('character', (name) => `../../character/${name}.js`)

/**
 * @param {string} name - 扩展名
 * @returns {Promise<void>}
 */
export const importExtension = generateImportFunction('extension', (name) => `../../extension/${name}/extension.js`)

/**
 * @param {string} name - 模式名
 * @returns {Promise<void>}
 */
export const importMode = generateImportFunction('mode', (name) => `../../mode/${name}.js`)

/**
 * 生成导入
 * 
 * @param {string} type 
 * @param {(name: string) => string} pathParser 
 * @returns {(name: string) => Promise<void>}
 */
function generateImportFunction(type, pathParser) {
	return async (name) => {
		// if(type == 'extension' && !game.hasExtension(name)){
			// await game.import(type,createEmptyExtension(name));
			// return;
		// }
		const path = pathParser(name);
		// 通过浏览器自带的script标签导入可直接获取报错信息，且不会影响JS运行
		// 此时代码内容也将缓存在浏览器中，故再次import后将不会重新执行代码内容（测试下来如此）
		const [status, script] = await new Promise((resolve) => {
			const script = document.createElement('script');
			script.type = 'module';
			script.src = `${lib.assetURL}noname/init/${path}`;
			script.onerror = () => resolve(['error', script]);
			script.onload = () => resolve(['ok', script]);
			document.head.appendChild(script);
		});
		script.remove();
		if (status === 'error') return;
		const modeContent = await import(path);
		if (!modeContent.type) return;
		if (modeContent.type !== type) throw new Error(`Loaded Content doesn't conform to "${type}" but "${modeContent.type}".`);
		await game.import(type, modeContent.default);
	}
}

function createEmptyExtension(name){
	return {name:name,content:function(config,pack){},precontent:function(){},config:{},help:{},package:{
		character:{
			character:{
			},
			translate:{
			},
		},
		card:{
			card:{
			},
			translate:{
			},
			list:[],
		},
		skill:{
			skill:{
			},
			translate:{
			},
		},
		intro:`扩展《${name}》尚未开启，请开启后查看信息。`,
		author:"未知",
		diskURL:"",
		forumURL:"",
		version:"1.0",
	},files:{"character":[],"card":[],"skill":[],"audio":[]}}
}