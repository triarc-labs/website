<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { strategySectionContent } from '$lib/content/strategy-section'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { strategyMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData
  const subsection = {
    ...strategySectionContent,
    projects: data.pages,
  }
  strategySectionContent
</script>

<MetaHead pageMetadata={strategyMetadata}></MetaHead>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-green" sectionColor="red"></ThemedSection>
