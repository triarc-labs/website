<script lang="ts">
  import type { TriarcSectionDefinition } from '$lib/components/TypeDefinitions'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'

  export let color: 'green' | 'blue' | 'red'
  export let content: TriarcSectionDefinition
</script>

<!-- ToDo Improve text handling for word breaks -->
<a
  href={content.sectionLink}
  class="group p-6 {color} text-white rounded-3xl flex flex-col justify-between w-full md:h-[450px] lg:h-[400px] max-w-full md:max-w-[400px] ring-1 ring-white/10 transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 hover:ring-white/30 focus-visible:-translate-y-2"
>
  <div lang="de" class="flex flex-col text-balance hyphens-auto w-full">
    <div class="flex flex-row justify-between gap-x-4 w-full">
      <div class="flex flex-col">
        <span class="text-lg w-full max-w-full pb-2">
          {content.prefix}
        </span>
        <span class="text-4xl w-full max-w-full whitespace-pre-line pb-5">
          {content.title}
        </span>
      </div>
      <div class="flex-shrink-0 self-start transition-transform duration-300 group-hover:animate-wiggle">
        <Icon src={content.iconSource} size="large"></Icon>
      </div>
    </div>
    <div class="text-lg w-full max-w-none line-clamp">
      {content.description}
    </div>
  </div>
  <div class="flex self-end items-end transition-transform duration-300 group-hover:translate-x-1.5">
    <Icon src={Arrow} size="small"></Icon>
  </div>
</a>

<style>
  .green {
    @apply bg-green-triarc-deep;
  }
  .blue {
    @apply bg-blue-triarc;
  }
  .red {
    @apply bg-red-triarc;
  }
</style>
