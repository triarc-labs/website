<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import type { PillarTeaserBlock } from '$lib/content/pillar-teasers'
  import type { TriarcColor } from '$lib/components/TypeDefinitions'

  export let block: PillarTeaserBlock
  export let accent: TriarcColor = 'blue'

  const accentBg: Record<TriarcColor, string> = {
    red: 'bg-red-triarc',
    green: 'bg-green-triarc',
    blue: 'bg-blue-triarc',
  }
  const accentText: Record<TriarcColor, string> = {
    red: 'text-red-triarc',
    green: 'text-green-triarc',
    blue: 'text-blue-triarc',
  }
</script>

<section class="border-b border-gray-100 bg-white py-16 md:py-24" aria-labelledby="pillar-topics-heading">
  <Container>
    <Reveal>
      <h2 id="pillar-topics-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {block.sectionTitle}
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-gray-600">
        {block.intro}
      </p>
    </Reveal>
    <ul class="mt-12 grid list-none gap-6 p-0 md:grid-cols-2">
      {#each block.links as item, index}
        <li class="h-full">
          <Reveal delay={index * 100} class="h-full">
            <a
              href={item.href}
              class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-1.5 {accentBg[accent]}" aria-hidden="true"></div>
              <div class="flex flex-grow flex-col p-7">
                <h3 class="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p class="mt-3 flex-grow text-base text-gray-600">
                  {item.description}
                </p>
                <span class="mt-6 inline-flex items-center text-base font-bold {accentText[accent]}">
                  Mehr erfahren
                  <span class="ml-1 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        </li>
      {/each}
    </ul>
  </Container>
</section>
