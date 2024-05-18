export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","_redirects"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.D1BRtnrV.js","app":"_app/immutable/entry/app.CW8pxS97.js","imports":["_app/immutable/entry/start.D1BRtnrV.js","_app/immutable/chunks/entry.DpHZ1-uE.js","_app/immutable/chunks/scheduler.D7QZqt6M.js","_app/immutable/entry/app.CW8pxS97.js","_app/immutable/chunks/scheduler.D7QZqt6M.js","_app/immutable/chunks/index.DZCeoULS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
