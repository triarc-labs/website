<script lang="ts">
  import SectionCard from '$lib/components/SectionCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'
  import { landingPageCards } from '$lib/content/landing-page'
  import triarcLogo from '$lib/assets/triarc-logo-claim-quer-negativ.png'
  import type { TriarcColor, TriarcSectionDefinition } from '$lib/components/TypeDefinitions'

  const landingContent = landingPageCards

  interface Pillar {
    color: TriarcColor
    content: TriarcSectionDefinition
    cellClass: string
    delay: number
  }

  const pillars: Pillar[] = [
    { color: 'red', content: landingContent.strategy, cellClass: 'md:justify-end', delay: 0 },
    { color: 'green', content: landingContent.operations, cellClass: 'md:justify-start', delay: 120 },
    {
      color: 'blue',
      content: landingContent.future,
      cellClass: 'justify-center md:col-span-2 xl:col-span-1',
      delay: 240,
    },
  ]

  let activeColor: TriarcColor | null = null

  function highlight(color: TriarcColor | null) {
    activeColor = color
  }
</script>

<section class="triarc-gradient relative overflow-hidden text-white">
  <TriarcOrbits {activeColor} focusX={0.72} focusY={0.6} portraitCrest={0.22} />
  <div class="relative">
    <Container>
      <!-- On lg+ the header text lives in the same bleed + 3-col grid as the cards below, spanning
           columns 1–2 with the cards' p-6 inset. This left-aligns the kicker, logo, lead & buttons
           with the first card's content and lets the lead run to the end of the second card's content. -->
      <div class="pt-16 lg:pt-28 lg:-mx-16 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="flex flex-col lg:col-span-2 lg:px-6">
          <Reveal y={16}>
            <span class="flex items-center text-lg">
              {landingContent.content.prefix}
            </span>
          </Reveal>
          <Reveal y={16} delay={100}>
            <h1 class="py-6">
              <img src={triarcLogo} alt={landingContent.content.title} class="h-12 md:h-16 w-auto" />
            </h1>
          </Reveal>
          <Reveal y={16} delay={200}>
            <p class="text-lg md:text-xl text-white/90">
              {landingContent.content.description}
            </p>
          </Reveal>
          <Reveal y={16} delay={300}>
            <div class="flex flex-wrap gap-4 pb-16 pt-10 lg:pb-24">
            <a
              href="/contact"
              class="rounded-full bg-white px-4 py-2 md:px-6 text-base font-medium text-black shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Kontaktieren Sie uns!
            </a>
            <a
              href="/references"
              class="rounded-full border border-white/40 px-4 py-2 md:px-6 text-base text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Referenzen entdecken
            </a>
            </div>
          </Reveal>
        </div>
      </div>
      <div class="grid grid-cols-1 justify-items-center gap-8 pb-28 md:grid-cols-2 xl:grid-cols-3 lg:-mx-16">
        {#each pillars as pillar}
          <Reveal class="flex w-full {pillar.cellClass}" delay={pillar.delay}>
            <div
              class="flex w-full {pillar.cellClass}"
              role="presentation"
              on:mouseenter={() => highlight(pillar.color)}
              on:mouseleave={() => highlight(null)}
              on:focusin={() => highlight(pillar.color)}
              on:focusout={() => highlight(null)}
            >
              <SectionCard color={pillar.color} content={pillar.content}></SectionCard>
            </div>
          </Reveal>
        {/each}
      </div>
    </Container>
  </div>
</section>

<style>
  .triarc-gradient {
    @apply bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended;
  }
</style>
