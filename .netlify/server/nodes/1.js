

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.GxZXZSMg.js","_app/immutable/chunks/scheduler.cnANAmfW.js","_app/immutable/chunks/index.3tkUlIRE.js","_app/immutable/chunks/stores.eCUzYsF7.js","_app/immutable/chunks/singletons.ohkJ7Bri.js"];
export const stylesheets = ["_app/immutable/assets/1.krAbSnCr.css"];
export const fonts = [];
