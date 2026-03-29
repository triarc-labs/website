<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
  import type { GradientColor, TriarcColor, TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'

  export let sectionContent: TriarcSubsectionDefinition
  export let sectionColor: TriarcColor
  export let sectionGradientColor: GradientColor
</script>

<div class="relative h-full {`gradient-${sectionGradientColor}`} bg-fixed">
  <Container>
    <ProjectStickyTitle
      title={sectionContent.main.title}
      iconSrc={sectionContent.main.iconSource}
      iconColor={sectionColor}
    ></ProjectStickyTitle>
    <div id="projects">
      <div class="text-lg text-white md:ml-[3.75rem] pb-20">
        {sectionContent.main.description}
      </div>
      {#each sectionContent.projects as project}
        <ProjectCard card={project} buttonColor={sectionColor} />
      {/each}
    </div>
  </Container>
</div>
<FooterNoContact />

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
