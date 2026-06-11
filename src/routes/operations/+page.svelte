<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { operationSectionContent } from '$lib/content/operations-section'
  import { operationsMetadata } from '$lib/content/triarc-page-metadata'
  import heroImage from '$lib/assets/hero/Projekte.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'

  export let data: PageData
  const subsection = {
    ...operationSectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={operationsMetadata} />

<div class="bg-white">
  <Hero
    title="Operativen Reibungsverlust reduzieren"
    content="Wenn Daten fehlen, doppelt erfasst werden oder zu spät im ERP ankommen, leiden Kundenerlebnis und Marge. Wir digitalisieren die Abläufe dort, wo Ihre Menschen täglich arbeiten."
    image={heroImage}
    imageAlt="Operationen und Projekte – triarc laboratories"
  />
</div>

<ThemedSection sectionContent={subsection} sectionGradientColor="green-blue" sectionColor="green" showFooter={false} />
<Footer />
