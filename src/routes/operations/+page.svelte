<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { operationSectionContent } from '$lib/content/operations-section'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { operationsMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData

  const subsection = {
    ...operationSectionContent,
    projects: data.pages,
  }
  operationSectionContent
</script>

<MetaHead pageMetadata={operationsMetadata}></MetaHead>

<ThemedSection sectionContent={subsection} sectionGradientColor="green-blue" sectionColor="green"></ThemedSection>
