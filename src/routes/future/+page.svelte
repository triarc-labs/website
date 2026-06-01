<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import type { PageData } from '../../../.svelte-kit/types/src/routes/operations/$types'
  import { futureSectionContent } from '$lib/content/future-section'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { futureMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData

  const subsection = {
    ...futureSectionContent,
    projects: data.pages,
  }
  futureSectionContent
</script>

<MetaHead pageMetadata={{ futureMetadata }}></MetaHead>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-blue" sectionColor="blue"></ThemedSection>
