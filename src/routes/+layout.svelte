<script>
  import "../app.css";
  import logo from "../Assets/logo.png";
  import founder from "../Assets/founder.jpeg";
  import Icon from "@iconify/svelte";
</script>

<header class="bg-white shadow">
  <div class="container mx-auto pr-4 py-2 flex justify-between items-center">
    <div class="flex items-center">
      <img src={logo} alt="Duggup" class="h-6 w-6" />
      <span class="ml-2 text-xl font-inter font-bold text-gray-800">duggup</span
      >
    </div>
    <nav class="flex space-x-8 ml-auto mr-8">
      <a href="/" class="text-gray-600 hover:text-black flex items-center">
        <Icon icon="mynaui:home-plus" class="h-4 w-4" />
        <span class="ml-2 text-xs font-medium">Home</span>
      </a>
      <a
        href="/"
        class="text-gray-600 hover:text-black flex items-center"
      >
        <Icon icon="lets-icons:menu" class="h-4 w-4" />
        <span class="ml-2 text-xs font-medium">Explore</span>
      </a>
      <a href="/" class="text-gray-600 hover:text-black flex items-center">
        <Icon icon="ion:book-outline" class="h-4 w-4" />
        <span class="ml-2 text-xs font-medium">Learn</span>
      </a>
      <a
        href="/"
        class="px-4 py-2 rounded-md shadow hover:shadow-md flex items-center border border-b-4 border-black"
      >
        <Icon icon="basil:add-outline" class="h-4 w-4" />
        <span class="ml-2 text-xs font-medium">Post</span>
      </a>
    </nav>
    <div class="flex items-center">
      <span class="ml-2 text-gray-800 font-medium">Krishna Kiran</span>
      <img
        src={founder}
        alt="Profile"
        class="h-10 w-10 rounded-full border-2 border-gray-300 ml-2"
      />
      <Icon icon="fe:arrow-down" class="h-3 w-3 ml-3 mt-0.5" />
    </div>
  </div>
</header>

<main class="container mx-auto px-4 py-8">
  <slot></slot>
</main>

<style>
  .container {
    max-width: 1024px;
  }
</style>
