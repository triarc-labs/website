<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { futureSectionContent } from '$lib/content/future-section'
  import { futureMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData
  const subsection = {
    ...futureSectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={futureMetadata} />

<ThemedSection sectionContent={subsection} sectionGradientColor="red-blue" sectionColor="blue" showFooter={false} />
<Footer />
