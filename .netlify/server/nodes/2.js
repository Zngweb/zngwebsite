

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.mHeOn4et.js","_app/immutable/chunks/scheduler.cnANAmfW.js","_app/immutable/chunks/index.3tkUlIRE.js","_app/immutable/chunks/siteConfig.8DTepU5r.js"];
export const stylesheets = [];
export const fonts = [];