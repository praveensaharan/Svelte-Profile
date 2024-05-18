<!-- src/lib/components/ui/button.svelte -->
<script lang="ts">
  export let children: string;
</script>

<button
  class="px-6 py-2 bg-white text-gray-800 rounded-md shadow hover:shadow-md border border-b-4 border-black"
>
  {children}
</button>
