<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { futureSectionContent } from '$lib/content/future-section'
  import { futureMetadata } from '$lib/content/triarc-page-metadata'
  import heroImage from '$lib/assets/hero/InnovationLab.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'

  export let data: PageData
  const subsection = {
    ...futureSectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={futureMetadata} />

<div class="bg-white">
  <Hero
    title="Zukünftige Wettbewerbsfähigkeit"
    content="Morgen gewinnen diejenigen, die heute Architektur, Daten und Innovationsfähigkeit bewusst aufbauen – ohne den laufenden Betrieb zu überfordern."
    image={heroImage}
    imageAlt="Innovation und Zukunft – triarc laboratories"
  />
</div>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-blue" sectionColor="blue" showFooter={false} />
<Footer />
