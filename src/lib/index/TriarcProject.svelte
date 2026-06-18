<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import type { TriarcProjectDetailContent } from '$lib/components/TypeDefinitions'

  export let project: TriarcProjectDetailContent
  /** Canonical breadcrumb trail; emits the page's BreadcrumbList JSON-LD. */
  export let breadcrumbs: { name: string; href: string }[] | undefined = undefined
</script>

<div class="relative h-full {`gradient-${project.gradient}`} ">
  <Container>
    {#if breadcrumbs}
      <div class="relative z-20 -mb-4 pt-10 md:pt-12 lg:-mb-24">
        <Breadcrumbs items={breadcrumbs} emitJsonLd />
      </div>
    {/if}
    <div class="flex flex-col lg:flex-row gap-y-2 gap-x-6 bg-transparent py-8 mt-12 lg:mt-32 mb-36">
      <div
        class="w-[112px] max-w-fit flex flex-wrap content-start justify-start gap-2 flex-grow-0 lg:w-24 lg:max-w-none lg:flex-shrink-0 lg:justify-end lg:mt-1"
      >
        {#each project.icons as icon}
          <Icon
            size="medium"
            color={icon.iconColor}
            src={icon.iconSource}
            class="lg:w-11 lg:h-11 category-icon"
          />
        {/each}
      </div>
      <div class="flex flex-col w-full">
        <div
          class="max-w-prose text-4xl leading-tight md:text-5xl md:leading-tight text-white font-bold text-balance pb-4"
        >
          {project.title}
        </div>
        <div class="max-w-prose text-lg text-white pb-4">
          {project.description}
        </div>
      </div>
    </div>
  </Container>
</div>
<div>
  <Container>
    <!-- Fallback if no secondary image is defined -->
    <div class="prose-custom max-w-none lg:pt-12 pb-20">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
      {@html project.htmlContent}
    </div>
  </Container>
</div>
<FooterNoContact />

<style>
  .gradient-green-blue {
    @apply bg-gradient-to-tr from-green-triarc-blended  to-blue-triarc-blended;
  }

  .gradient-blue-red {
    @apply bg-gradient-to-tr from-blue-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-green {
    @apply bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended;
  }

  .gradient-green-red {
    @apply bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-blue {
    @apply bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended;
  }

  /*.icon-grid > :global(.category-icon:nth-child(odd):nth-child(n + 3)) {*/
  /*  grid-column-start: 2;*/
  /*}*/

  /*.icon-grid > :global(.category-icon:nth-child(even):nth-child(n + 4)) {*/
  /*  grid-column-start: 1;*/
  /*}*/
</style>
