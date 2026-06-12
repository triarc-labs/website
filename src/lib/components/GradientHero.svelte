<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'

  export let title: string
  export let content: string | undefined = undefined
  /** Small uppercase section label above the title. */
  export let kicker: string | undefined = undefined
  /** The rainbow arch animation is reserved for selected special pages. */
  export let orbits = false
</script>

<section
  class="relative overflow-hidden bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended text-white"
>
  {#if orbits}
    <TriarcOrbits focusX={0.78} focusY={0.95} opacity={0.9} scale={1.6} />
  {/if}
  <div class="relative">
    <Container>
      <div class="flex flex-col items-start py-24 md:py-32 lg:max-w-3xl">
        {#if kicker}
          <Reveal y={16}>
            <span class="text-sm font-bold uppercase tracking-widest text-white/70">{kicker}</span>
          </Reveal>
        {/if}
        <Reveal y={16} delay={100}>
          <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
          <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{@html title}</h1>
        </Reveal>
        {#if content}
          <Reveal y={16} delay={200}>
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
            <p class="mt-6 max-w-3xl text-xl text-white/90">{@html content}</p>
          </Reveal>
        {/if}
      </div>
    </Container>
  </div>
</section>
