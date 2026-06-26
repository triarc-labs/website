<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { operationSectionContent } from '$lib/content/operations-section'
  import { operationsMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData
  const subsection = {
    ...operationSectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={operationsMetadata} />

<ThemedSection
  sectionContent={subsection}
  sectionGradientColor="green-blue"
  sectionColor="green"
  showFooter={false}
  breadcrumbs={[
    { name: 'Home', href: '/' },
    { name: 'Betrieb', href: '/operations' },
  ]}
/>
<FooterNoContact />
