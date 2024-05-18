

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cw9RcDg7.js","_app/immutable/chunks/scheduler.D7QZqt6M.js","_app/immutable/chunks/index.DZCeoULS.js","_app/immutable/chunks/entry.DpHZ1-uE.js"];
export const stylesheets = [];
export const fonts = [];
