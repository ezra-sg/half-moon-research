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
		client: {"start":"_app/immutable/entry/start._bn6pFXa.js","app":"_app/immutable/entry/app.YySygTRJ.js","imports":["_app/immutable/entry/start._bn6pFXa.js","_app/immutable/chunks/entry.FDYDxNc1.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.YySygTRJ.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.wXANdJIU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
