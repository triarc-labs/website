<script lang="ts">
  import type { JobDetails } from '$lib/components/TypeDefinitions'
  export let title: string
  export let jobDetails: JobDetails
  $: pensumSuffix = jobDetails.jobPensum ? ` - ${jobDetails.jobPensum}` : ''
</script>

<div class="flex flex-col sm:w-full sm:flex-row">
  <h2 class="text-2xl font-bold text-black">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
    {@html title}
  </h2>
  {#if !jobDetails.hideMeta}
    <h3 class="sm:hidden mt-1 text-lg font-bold text-black w-full">
      (m/w/d){pensumSuffix}
    </h3>
    {#if jobDetails.currentlyHiring}
      <span
        class="font-medium self-start flex-grow-0 my-3 block text-base border border-blue-triarc bg-white text-blue-triarc px-3 py-1 rounded-full sm:absolute sm:right-0 sm:top-6 sm:my-0"
        >Offene Stellen</span
      >
    {:else}
      <span
        class="font-medium self-start flex-grow-0 my-3 block text-base border border-gray-400 bg-white text-gray-500 px-3 py-1 rounded-full sm:absolute sm:right-0 sm:top-6 sm:my-0"
        >Zurzeit keine offenen Stellen</span
      >
    {/if}
  {/if}
</div>
{#if !jobDetails.hideMeta}
  <h3 class="hidden sm:inline-block text-lg font-bold text-black">
    (m/w/d){pensumSuffix}
  </h3>
{/if}
