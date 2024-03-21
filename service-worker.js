/**
 * @type { import('typescript') }
 */
var ts;
importScripts('./game/typescript.js');
/**
 * @type { import('./game/compiler-sfc.browser.js') }
 */
var sfc;
importScripts('./game/compiler-sfc.browser.js');
// @ts-ignore
if (typeof ts != 'undefined') {
	console.log(`ts loaded`);
} else {
	console.log(`ts undefined`);
}
// @ts-ignore
if (typeof sfc != 'undefined') {
	console.log(`sfc loaded`);
	sfc.registerTS(() => ts);
} else {
	console.log(`sfc undefined`);
}

console.log('serviceWorker version 2.3');

self.addEventListener("install", (event) => {
	// The promise that skipWaiting() returns can be safely ignored.
	// @ts-ignore
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	// 当一个 service worker 被初始注册时，页面在下次加载之前不会使用它。 claim() 方法会立即控制这些页面
	// @ts-ignore
	event.waitUntil(clients.claim());
});

self.addEventListener('message', event => {
	console.log(event.data);
});

/**
 * 将vue编译的结果放在这里，调用的时候直接返回就好了
 */
const vueFileMap = new Map();

self.addEventListener('fetch', event => {
	// @ts-ignore
	const request = event.request;
	if (typeof request.url != 'string') return console.log(request);
	if (vueFileMap.has(request.url)) {
		const rep = new Response(new Blob([vueFileMap.get(request.url)], { type: "text/javascript" }), {
			status: 200,
			statusText: "OK",
			headers: new Headers({
				"Content-Type": "text/javascript"
			}),
		});
		event.respondWith(rep);
		return;
	}
	if (!['.ts', '.json', '.vue', 'css'].some(ext => request.url.endsWith(ext))) return;
	if (request.url.endsWith('.d.ts')) return;
	if (request.url.endsWith('.json') || request.url.endsWith('css')) {
		// @ts-ignore
		if (!event.request.headers.get('origin')) return;
	}
	// 请求ts文件
	const res = fetch(request.url, {
		method: request.method,
		mode: "no-cors",
		headers: new Headers({
			"Content-Type": "text/plain"
		}),
	});
	// @ts-ignore
	event.respondWith(
		res.then(res => {
			if (res.status != 200) return res;
			console.log('正在编译', request.url);
			return res.text().then(text => {
				let js;
				if (request.url.endsWith('.json')) {
					js = `export default ${ text }`;
				} else if (request.url.endsWith('.ts')) {
					js = ts.transpile(text, {
						module: ts.ModuleKind.ES2015,
						target: ts.ScriptTarget.ES2019,
						inlineSourceMap: true,
						resolveJsonModule: true,
						esModuleInterop: true,
					}, request.url);
				} else if (request.url.endsWith('.vue')) {
					const id = Date.now().toString();
					const scopeId = `data-v-${ id }`;
					// 后续处理sourceMap合并
					const { descriptor } = sfc.parse(text, { filename: request.url, sourceMap: true });
					// console.log({ descriptor });
					const hasScoped = descriptor.styles.some((s) => s.scoped);
					// 编译 script，因为可能有 script setup，还要进行 css 变量注入
					const script = sfc.compileScript(descriptor, {
						id: scopeId,
						inlineTemplate: true,
						templateOptions: {
							scoped: hasScoped,
							compilerOptions: {
								scopeId: hasScoped ? scopeId : undefined,
							}
						},
					});
					// 用于存放代码，最后 join('\n') 合并成一份完整代码
					const codeList = [];
					vueFileMap.set(
						request.url + '?type=script',
						// 重写 default
						sfc.rewriteDefault(script.attrs && script.attrs.lang == 'ts' ? ts.transpile(script.content, {
							module: ts.ModuleKind.ES2015,
							target: ts.ScriptTarget.ES2019,
							inlineSourceMap: true,
							resolveJsonModule: true,
							esModuleInterop: true,
						}, request.url + '?type=script') : script.content, "__sfc_main__")
							.replace(`const __sfc_main__`, `export const __sfc_main__`)
							// import vue重新指向
							.replaceAll(`from "vue"`, `from "/game/vue.esm-browser.js"`)
							.replaceAll(`from 'vue'`, `from '/game/vue.esm-browser.js'`)
					);
					codeList.push(`import { __sfc_main__ } from '${ request.url }?type=script'`);
					codeList.push(`__sfc_main__.__scopeId = '${ scopeId }'`);

					// 编译模板，转换成 render 函数
					const template = sfc.compileTemplate({
						source: descriptor.template.content,
						filename: request.url, // 用于错误提示
						id: scopeId,
						scoped: hasScoped,
						compilerOptions: {
							scopeId: hasScoped ? scopeId : undefined,
						}
					});

					vueFileMap.set(request.url + '?type=template', template.code
						// .replace(`function render(_ctx, _cache) {`, str => str + 'console.log(_ctx);')
						.replaceAll(`from "vue"`, `from "/game/vue.esm-browser.js"`)
						.replaceAll(`from 'vue'`, `from '/game/vue.esm-browser.js'`)
					);
					
					codeList.push(`import { render } from '${ request.url }?type=template'`);
					codeList.push(`__sfc_main__.render = render;`);
					codeList.push(`export default __sfc_main__;`);
					// 一个 Vue 文件，可能有多个 style 标签
					let styleIndex = 0;
					for (const styleBlock of descriptor.styles) {
						const styleCode = sfc.compileStyle({
							source: styleBlock.content,
							id,
							filename: request.url,
							scoped: styleBlock.scoped,
						});
						const varName = `el${ styleIndex }`;
						const styleDOM = `let ${ varName } = document.createElement('style');\n${ varName }.innerHTML =  \`${ styleCode.code }\`;\ndocument.body.append(${ varName });`;
						codeList.push(styleDOM);
					}
					js = codeList.join('\n');
					// console.log(js);
				} else if (request.url.endsWith('css')) {
					const id = Date.now().toString();
					const scopeId = `data-v-${ id }`;
					js = `const style = document.createElement('style');
					style.setAttribute('type', 'text/css');
					style.setAttribute('data-vue-dev-id', \`${ scopeId }\`);
					style.textContent = ${ JSON.stringify(text) };
					document.head.appendChild(style);`;
				}
				const rep = new Response(new Blob([js], { type: "text/javascript" }), {
					status: 200,
					statusText: "OK",
					headers: new Headers({
						"Content-Type": "text/javascript"
					}),
				});
				return rep;
			})
		})
		.catch(e => {
			console.log(e);
			throw e;
		})
	);
});