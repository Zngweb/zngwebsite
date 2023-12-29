

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4H405cRH.js","_app/immutable/chunks/scheduler.FgursCHV.js","_app/immutable/chunks/index.G3ihD4w5.js","_app/immutable/chunks/siteConfig.0TwVajKn.js"];
export const stylesheets = [];
export const fonts = [];
