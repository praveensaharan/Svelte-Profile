

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D0RquSKj.js","_app/immutable/chunks/scheduler.D7QZqt6M.js","_app/immutable/chunks/index.DZCeoULS.js","_app/immutable/chunks/Icon.CpeZ3gSf.js"];
export const stylesheets = ["_app/immutable/assets/0.C8WFbvSE.css"];
export const fonts = [];
