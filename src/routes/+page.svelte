<!-- src/routes/+page.svelte -->
<script>
  import founder from "../Assets/founder.jpeg";
  import Button from "./button.svelte"; // Corrected path
  import logo from "../Assets/logo.png";
  import Icon from "@iconify/svelte";
  import Timeline from "./timeline.svelte";
</script>

<div class="">
  <div class="profile-header py-6 border-b grid grid-cols-12">
    <div class="col-span-2 grid justify-items-center items-center mr-6">
      <img
        src={founder}
        alt="Krishna Kiran"
        class="h-24 w-24 rounded-full border-2"
      />
      <h1 class="text-2xl font-bold text-center text-gray-600">
        Krishna Kiran
      </h1>
    </div>

    <div class="col-span-8">
      <p
        class="text-[#141618] mb-5 font-inter text-sm font-normal leading-6 text-left"
      >
        Co-Founder and CEO at Duggup - Social network for people in tech.
        Ex-Amazon Head of Engineering. I write hot-takes on building a business,
        shipping delightful products and accelerating product and career growth.
      </p>
      <Button children="Follow" />
    </div>
    <div class="grid justify-items-end col-span-2">
      <div class="grid justify-items-end mb-0">
        <img src={logo} alt="Duggup" class="h-10 w-10 rounded-full m-0" />
        <span class="text-sm font-inter font-bold text-gray-800 m-0"
          >Duggup</span
        >
      </div>

      <div class="mt-0">
        <span class="text-xs text-gray-300 font-medium">Co-Founder and CEO</span
        >
      </div>
      <div class="flex items-center mt-1 space-x-1">
        <a href="/home" class="text-gray-400 flex items-center">
          <span class="font-bold text-xs p-2">My Website</span>
          <Icon icon="akar-icons:link-out" class="font-bold w-3 h-3" />
        </a>
        <span class="text-gray-600 pl-2"
          ><Icon icon="solar:menu-dots-bold" /></span
        >
      </div>
    </div>
  </div>

  <Timeline />
</div>

<style>
  .profile-header {
    border-bottom-width: 1px;
  }
</style>
