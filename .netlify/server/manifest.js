export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-eab3265b.js","imports":["_app/immutable/start-eab3265b.js","_app/immutable/chunks/index-9fae3b59.js","_app/immutable/chunks/singletons-b2cd59d5.js","_app/immutable/chunks/index-9b007e27.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
