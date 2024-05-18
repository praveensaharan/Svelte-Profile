import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { l as logo, I as Icon, f as founder } from "../../chunks/Icon.js";
const css = {
  code: ".container.svelte-oiyonv{max-width:1024px}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n  import \\"../app.css\\";\\r\\n  import logo from \\"../Assets/logo.png\\";\\r\\n  import founder from \\"../Assets/founder.jpeg\\";\\r\\n  import Icon from \\"@iconify/svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<header class=\\"bg-white shadow\\">\\r\\n  <div class=\\"container mx-auto pr-4 py-2 flex justify-between items-center\\">\\r\\n    <div class=\\"flex items-center\\">\\r\\n      <img src={logo} alt=\\"Duggup\\" class=\\"h-6 w-6\\" />\\r\\n      <span class=\\"ml-2 text-xl font-inter font-bold text-gray-800\\">duggup</span\\r\\n      >\\r\\n    </div>\\r\\n    <nav class=\\"flex space-x-8 ml-auto mr-8\\">\\r\\n      <a href=\\"/\\" class=\\"text-gray-600 hover:text-black flex items-center\\">\\r\\n        <Icon icon=\\"mynaui:home-plus\\" class=\\"h-4 w-4\\" />\\r\\n        <span class=\\"ml-2 text-xs font-medium\\">Home</span>\\r\\n      </a>\\r\\n      <a\\r\\n        href=\\"/\\"\\r\\n        class=\\"text-gray-600 hover:text-black flex items-center\\"\\r\\n      >\\r\\n        <Icon icon=\\"lets-icons:menu\\" class=\\"h-4 w-4\\" />\\r\\n        <span class=\\"ml-2 text-xs font-medium\\">Explore</span>\\r\\n      </a>\\r\\n      <a href=\\"/\\" class=\\"text-gray-600 hover:text-black flex items-center\\">\\r\\n        <Icon icon=\\"ion:book-outline\\" class=\\"h-4 w-4\\" />\\r\\n        <span class=\\"ml-2 text-xs font-medium\\">Learn</span>\\r\\n      </a>\\r\\n      <a\\r\\n        href=\\"/\\"\\r\\n        class=\\"px-4 py-2 rounded-md shadow hover:shadow-md flex items-center border border-b-4 border-black\\"\\r\\n      >\\r\\n        <Icon icon=\\"basil:add-outline\\" class=\\"h-4 w-4\\" />\\r\\n        <span class=\\"ml-2 text-xs font-medium\\">Post</span>\\r\\n      </a>\\r\\n    </nav>\\r\\n    <div class=\\"flex items-center\\">\\r\\n      <span class=\\"ml-2 text-gray-800 font-medium\\">Krishna Kiran</span>\\r\\n      <img\\r\\n        src={founder}\\r\\n        alt=\\"Profile\\"\\r\\n        class=\\"h-10 w-10 rounded-full border-2 border-gray-300 ml-2\\"\\r\\n      />\\r\\n      <Icon icon=\\"fe:arrow-down\\" class=\\"h-3 w-3 ml-3 mt-0.5\\" />\\r\\n    </div>\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n<main class=\\"container mx-auto px-4 py-8\\">\\r\\n  <slot></slot>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  .container {\\r\\n    max-width: 1024px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuDE,wBAAW,CACT,SAAS,CAAE,MACb"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="bg-white shadow"><div class="container mx-auto pr-4 py-2 flex justify-between items-center svelte-oiyonv"><div class="flex items-center" data-svelte-h="svelte-b8tpin"><img${add_attribute("src", logo, 0)} alt="Duggup" class="h-6 w-6"> <span class="ml-2 text-xl font-inter font-bold text-gray-800">duggup</span></div> <nav class="flex space-x-8 ml-auto mr-8"><a href="/" class="text-gray-600 hover:text-black flex items-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mynaui:home-plus",
      class: "h-4 w-4"
    },
    {},
    {}
  )} <span class="ml-2 text-xs font-medium" data-svelte-h="svelte-eg1k6a">Home</span></a> <a href="/" class="text-gray-600 hover:text-black flex items-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "lets-icons:menu",
      class: "h-4 w-4"
    },
    {},
    {}
  )} <span class="ml-2 text-xs font-medium" data-svelte-h="svelte-ruibpk">Explore</span></a> <a href="/" class="text-gray-600 hover:text-black flex items-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ion:book-outline",
      class: "h-4 w-4"
    },
    {},
    {}
  )} <span class="ml-2 text-xs font-medium" data-svelte-h="svelte-12dnjbd">Learn</span></a> <a href="/" class="px-4 py-2 rounded-md shadow hover:shadow-md flex items-center border border-b-4 border-black">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "basil:add-outline",
      class: "h-4 w-4"
    },
    {},
    {}
  )} <span class="ml-2 text-xs font-medium" data-svelte-h="svelte-1c45435">Post</span></a></nav> <div class="flex items-center"><span class="ml-2 text-gray-800 font-medium" data-svelte-h="svelte-752w8l">Krishna Kiran</span> <img${add_attribute("src", founder, 0)} alt="Profile" class="h-10 w-10 rounded-full border-2 border-gray-300 ml-2"> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fe:arrow-down",
      class: "h-3 w-3 ml-3 mt-0.5"
    },
    {},
    {}
  )}</div></div></header> <main class="container mx-auto px-4 py-8 svelte-oiyonv">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
