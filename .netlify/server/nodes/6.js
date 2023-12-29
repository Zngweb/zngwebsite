

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.A6im7zkj.js","_app/immutable/chunks/scheduler.FgursCHV.js","_app/immutable/chunks/index.G3ihD4w5.js","_app/immutable/chunks/siteConfig.0TwVajKn.js"];
export const stylesheets = [];
export const fonts = [];
