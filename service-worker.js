/**
 * @type { import('typescript') }
 */
var ts;
importScripts('./game/typescript.js');
// @ts-ignore
if (typeof ts != 'undefined') {
	console.log(ts);
} else {
	console.log(`ts undefined`);
}

console.log('version 1');

self.addEventListener('message', event => {
	console.log(event.data);
});

self.addEventListener('fetch', event => {
	// @ts-ignore
	const request = event.request;
	if (typeof request.url != 'string') return console.log(request);
	if (!request.url.endsWith('.ts') || request.url.endsWith('.d.ts')) return;
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
				const js = ts.transpile(text, {
					module: ts.ModuleKind.ES2015,
					target: ts.ScriptTarget.ES2019,
					inlineSourceMap: true
				}, request.url);
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