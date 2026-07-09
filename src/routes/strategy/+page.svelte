<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { strategySectionContent } from '$lib/content/strategy-section'
  import { strategyMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData
  const subsection = {
    ...strategySectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={strategyMetadata} />

<ThemedSection
  sectionContent={subsection}
  sectionGradientColor="red-green"
  sectionColor="red"
  showFooter={false}
  breadcrumbs={[
    { name: 'Home', href: '/' },
    { name: 'Strategie', href: '/strategy' },
  ]}
/>
<FooterNoContact />
