<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { strategySectionContent } from '$lib/content/strategy-section'
  import { strategyMetadata } from '$lib/content/triarc-page-metadata'
  import heroImage from '$lib/assets/hero/Beratung.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'

  export let data: PageData
  const subsection = {
    ...strategySectionContent,
    projects: data.pages,
  }
</script>

<MetaHead pageMetadata={strategyMetadata} />

<div class="bg-white">
  <Hero
    title="Strategie in die Praxis"
    content="Klare Ziele, realistische Roadmaps und Veränderung, die Teams mittragen – damit Digitalisierung nicht bei Powerpoint stehen bleibt, sondern messbar wirkt."
    image={heroImage}
    imageAlt="Strategie und Beratung – triarc laboratories"
  />
</div>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-green" sectionColor="red" showFooter={false} />
<Footer />
