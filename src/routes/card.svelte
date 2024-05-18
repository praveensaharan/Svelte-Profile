<script lang="ts">
  export let imageSrc: string;
  export let text: string;
</script>

<div class="border-2 rounded-2xl w-[300px] mt-10">
  <div class="h-[120px] overflow-hidden mt-0.25 rounded-t-2xl">
    <img
      src={imageSrc}
      alt=""
      class="w-full object-cover transform scale-110 -translate-y-2"
    />
  </div>
  <div class="px-5 py-2 h-[65px]">
    <span
      class="text-[#141618] font-inter text-sm font-normal leading-6 text-left line-clamp-2"
    >
      {text}
    </span>
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
