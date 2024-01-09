import * as server from '../entries/pages/__lang_lang__/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang_lang__/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang=lang]]/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BrYsae19.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.es02BFb3.js"];
export const stylesheets = [];
export const fonts = [];
