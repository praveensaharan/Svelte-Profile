import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Bucd4tsY.js","_app/immutable/chunks/scheduler.D7QZqt6M.js","_app/immutable/chunks/index.DZCeoULS.js","_app/immutable/chunks/Icon.CpeZ3gSf.js"];
export const stylesheets = ["_app/immutable/assets/2.Bi6anPlO.css"];
export const fonts = [];
