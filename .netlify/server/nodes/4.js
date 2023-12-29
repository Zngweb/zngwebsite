

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Sr-t7qzm.js","_app/immutable/chunks/scheduler.FgursCHV.js","_app/immutable/chunks/index.G3ihD4w5.js"];
export const stylesheets = [];
export const fonts = [];
