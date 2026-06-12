<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import type { GradientColor, TriarcColor, TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'

  export let sectionContent: TriarcSubsectionDefinition
  export let sectionColor: TriarcColor
  export let sectionGradientColor: GradientColor
  /** When false, omit the site footer so the parent can add e.g. a contact CTA footer after this block. */
  export let showFooter = true
  /** Visible breadcrumb trail; the matching JSON-LD comes from the layout for these routes. */
  export let breadcrumbs: { name: string; href: string }[] | undefined = undefined
</script>

<div class="relative h-full {`gradient-${sectionGradientColor}`} bg-fixed">
  <Container>
    {#if breadcrumbs}
      <div class="relative z-20 -mb-6 pt-10 md:-mb-10 md:pt-12">
        <Breadcrumbs items={breadcrumbs} />
      </div>
    {/if}
    <ProjectStickyTitle
      title={sectionContent.main.title}
      iconSrc={sectionContent.main.iconSource}
      iconColor={sectionColor}
    />
    <div id="projects">
      <div class="max-w-3xl pb-20 text-lg text-white">
        {sectionContent.main.description}
      </div>
      {#each sectionContent.projects as project}
        <ProjectCard card={project} buttonColor={sectionColor} />
      {/each}
    </div>
  </Container>
</div>
{#if showFooter}
  <FooterNoContact />
{/if}

<style>
  .gradient-green-blue {
    @apply bg-gradient-to-tr from-green-triarc-blended via-[#005540] to-blue-triarc-blended;
  }

  .gradient-blue-green {
    @apply bg-gradient-to-tr from-blue-triarc-blended to-green-triarc-blended;
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
</style>
