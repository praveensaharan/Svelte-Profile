import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      "@/*": "./path/to/lib/*",
    },
    adapter: adapter({
      edge: false,

      split: false,
    }),
  },
};

export default config;
