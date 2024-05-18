<script>
  import Steve from "../Assets/steve.jpeg";
  import Person from "../Assets/person.jpeg";
  import Tokyo from "../Assets/tokyo.png";
  import Picture from "../Assets/picture.jpeg";
  import Logo from "../Assets/logo.png";
  import Betterup from "../Assets/betterup.jpeg";
  import Card from "./card.svelte";
</script>

<div class="flex">
  <div
    class="grid justify-items-end items-center
  "
  >
    <span class="text-xs text-gray-400 font-medium ml-16">Dec 2023</span>
  </div>
  <div
    class="ml-8 mr-16 pl-0.5 relative border-dotted border-blue-500 border-r-2"
  >
    <div class="absolute inset-y-28 left-1/2 transform -translate-x-1/2">
      <div
        class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-0.5"
      >
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center mr-5">
    <Card
      imageSrc={Steve}
      text="No amount of technology can convert a bad story into a good story."
    />
  </div>
  <div class="flex flex-col items-center ml-5">
    <Card
      imageSrc={Person}
      text="Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
    />
  </div>
</div>
<div class="flex">
  <div class="mt-5">
    <div class="grid justify-items-end">
      <img src={Logo} alt="Duggup" class="h-10 w-10 rounded-full" />
      <span class="text-sm font-inter font-bold text-gray-800 mt-2 mb-1"
        >Duggup</span
      >
    </div>

    <div class="grid justify-items-end">
      <div class="text-xs text-gray-400 font-medium">
        San Francisco Bay Area
      </div>
      <div class="text-xs text-gray-400 font-medium">Joined</div>
      <div class="text-xs text-gray-400 font-medium">Nov 2023</div>
    </div>
  </div>
  <div class="mr-16 ml-6 relative border-dotted border-blue-500 border-r-2">
    <div class="absolute inset-y-20 left-1/2 transform -translate-x-1/2">
      <div
        class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
      >
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center mr-5 mt-12 mb-6 ml-5">
    <h2 class="text-xl font-bold text-center text-gray-900">
      Co-Founder and CEO
    </h2>
    <span class="text-sm text-gray-400 inline-block mt-1" style="width: 100%;">
      Full-time &middot; Remote</span
    >
  </div>
</div>
<div class="flex">
  <div class="flex items-center">
    <span class="text-xs text-gray-400 font-medium ml-16">Dec 2023</span>
  </div>
  <!-- <div class="ml-8 mr-16 pl-0.5 border-dotted border-blue-500 border-r-2"></div> -->
  <div
    class="ml-8 mr-16 pl-0.5 relative border-dotted border-blue-500 border-r-2"
  >
    <div class="absolute inset-y-28 left-1/2 transform -translate-x-1/2">
      <div
        class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-0.5"
      >
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center mr-5">
    <Card
      imageSrc={Picture}
      text="Startup Lesson I am reflecting. Don't build for the &quot;average person&quot;"
    />
  </div>

  <div class="flex flex-col items-center ml-5">
    <Card
      imageSrc={Tokyo}
      text="Your biggest regrets at 80 will be acts of omission."
    />
  </div>
</div>
<div class="flex">
  <div class="mt-5">
    <div class="grid justify-items-end">
      <img src={Betterup} alt="Duggup" class="h-10 w-10 rounded-full" />
      <span class="text-sm font-inter font-bold text-gray-800 mt-2 mb-1"
        >BetterUp</span
      >
    </div>

    <div class="grid justify-items-end">
      <div class="text-xs text-gray-400 font-medium">
        San Francisco Bay Area
      </div>
      <div class="text-xs text-gray-400 font-medium">Joined</div>
      <div class="text-xs text-gray-400 font-medium">Sep 2023</div>
    </div>
  </div>

  <div class="mr-16 ml-6 relative border-dotted border-blue-500 border-r-2">
    <div class="absolute inset-y-20 left-1/2 transform -translate-x-1/2">
      <div
        class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
      >
        <div class="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center mr-5 my-12 ml-5">
    <h2 class="text-xl font-bold text-center text-gray-900">VP Engineering</h2>
    <span class="text-sm text-gray-400 inline-block mt-1" style="width: 100%;"
      >Full-time</span
    >
  </div>
</div>

<style>
</style>
