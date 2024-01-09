export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.GOEC2M81.js","app":"_app/immutable/entry/app.QWgc5FB_.js","imports":["_app/immutable/entry/start.GOEC2M81.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/singletons.EiB_nsjC.js","_app/immutable/entry/app.QWgc5FB_.js","_app/immutable/chunks/runtime.o-IMonL8.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.es02BFb3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/[[lang=lang]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('../output/server/entries/matchers/lang.js')
			return { lang };
		}
	}
}
})();
