import * as server from '../entries/pages/contact/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/5.zq2loj3h.js","_app/immutable/chunks/scheduler.FgursCHV.js","_app/immutable/chunks/index.G3ihD4w5.js","_app/immutable/chunks/siteConfig.0TwVajKn.js"];
export const stylesheets = [];
export const fonts = [];
