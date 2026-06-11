<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import Partners from '$lib/index/Partners.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import NavJump from '$lib/components/NavJump.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import LinkedInLink from '$lib/components/LinkedInLink.svelte'
  import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&enhanced'
  import { referencesMetadata } from '$lib/content/triarc-page-metadata'
  import { referenceProjects } from '$lib/content/reference-projects'

  const accents = ['bg-red-triarc', 'bg-green-triarc', 'bg-blue-triarc']

  // First tag of each project is its primary category
  const categories = [...new Set(referenceProjects.map((project) => project.tags[0]))]
  let activeCategory: string | null = null

  $: filteredProjects = activeCategory
    ? referenceProjects.filter((project) => project.tags[0] === activeCategory)
    : referenceProjects

  // Only the very first card of the unfiltered gallery spans two columns
  $: featuredSlug = activeCategory === null ? referenceProjects[0].slug : null
</script>

<MetaHead pageMetadata={referencesMetadata} />

<div class="bg-white">
  <!-- Hero -->
  <section
    class="relative overflow-hidden bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended text-white"
  >
    <TriarcOrbits focusX={0.78} focusY={0.95} opacity={0.9} scale={1.6} />
    <div class="relative">
      <Container>
        <div class="flex flex-col items-start py-24 md:py-36 lg:max-w-2xl">
          <Reveal y={16}>
            <span class="text-sm font-bold uppercase tracking-widest text-white/70">Referenzen</span>
          </Reveal>
          <Reveal y={16} delay={100}>
            <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Lösungen, die im Alltag wirken.</h1>
          </Reveal>
          <Reveal y={16} delay={200}>
            <p class="mt-6 text-xl text-white/90">
              Was wir vollbracht haben – und woraus es entstanden ist: {referenceProjects.length} Projekte aus Logistik,
              Bau, MedTech, Immobilien und mehr – jedes mit seiner eigenen Geschichte.
            </p>
          </Reveal>
        </div>
      </Container>
    </div>
  </section>

  <!-- Project gallery -->
  <section class="bg-gray-50 py-16 md:py-24" id="projects">
    <Container>
      <div class="mb-10 flex flex-wrap gap-3" role="group" aria-label="Referenzen nach Kategorie filtern">
        <button
          type="button"
          aria-pressed={activeCategory === null}
          class="rounded-full border px-4 py-1.5 text-base font-bold transition duration-300 {activeCategory === null
            ? 'border-transparent bg-blue-triarc text-white shadow'
            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}"
          on:click={() => (activeCategory = null)}
        >
          Alle
        </button>
        {#each categories as category}
          <button
            type="button"
            aria-pressed={activeCategory === category}
            class="rounded-full border px-4 py-1.5 text-base font-bold transition duration-300 {activeCategory ===
            category
              ? 'border-transparent bg-blue-triarc text-white shadow'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}"
            on:click={() => (activeCategory = category)}
          >
            {category}
          </button>
        {/each}
      </div>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each filteredProjects as project, index (project.slug)}
          <Reveal delay={(index % 3) * 100} class="h-full {project.slug === featuredSlug ? 'md:col-span-2' : ''}">
            <a
              href="/references/{project.slug}"
              class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-1.5 {accents[index % accents.length]}" aria-hidden="true"></div>
              <div
                class="flex items-center justify-center overflow-hidden bg-gray-50 p-6 {project.slug === featuredSlug
                  ? 'aspect-[16/7]'
                  : 'aspect-[16/9]'}"
              >
                <EnhancedImage
                  image={project.image}
                  alt="{project.appName} Screenshot"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  sizes="(min-width: 1280px) 700px, (min-width: 768px) 50vw, 100vw"
                  imgClass="max-h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="flex flex-grow flex-col border-t border-gray-100 p-7">
                <span class="text-sm font-bold uppercase tracking-widest text-gray-500">{project.customer}</span>
                <h2 class="mt-2 text-2xl font-bold text-gray-900 group-hover:text-blue-triarc">
                  {project.appName}
                </h2>
                <p class="mt-3 flex-grow text-base text-gray-600">{project.teaser}</p>
                <div class="mt-5 flex flex-wrap items-center gap-3">
                  {#each project.tags as tag}
                    <span class="rounded-full border border-gray-300 px-3 py-0.5 text-sm text-gray-600">{tag}</span>
                  {/each}
                  <span class="ml-auto text-base font-bold text-blue-triarc">
                    Zur Referenz <span class="inline-block transition group-hover:translate-x-0.5" aria-hidden="true"
                      >→</span
                    >
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        {/each}
      </div>
    </Container>
  </section>

  <!-- Quote spotlight -->
  <section class="border-y border-gray-100 bg-green-triarc bg-opacity-5">
    <Container>
      <Reveal>
        <div class="flex flex-col items-center gap-10 py-16 md:py-24 lg:flex-row lg:items-start">
          <div class="w-56 flex-shrink-0 lg:w-64">
            <EnhancedImage
              alt="Serge Müller"
              image={serge}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <figure>
              <blockquote class="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                «Gewinnen Sie durch massgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!»
              </blockquote>
              <figcaption class="mt-6 text-lg text-gray-600">
                <span class="font-bold text-gray-900">Serge Müller</span> · CEO Triarc Laboratories
              </figcaption>
            </figure>
            <div class="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="/contact"
                class="rounded-full bg-green-triarc-deep px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Projekt besprechen
              </a>
              <LinkedInLink href="https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/" person="Serge Müller" />
              <a href="mailto:serge@triarc-labs.com" class="text-base font-bold text-gray-600 hover:text-blue-triarc">
                serge@triarc-labs.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <Customers />
  <Partners />
  <NavJump />
  <Footer />
</div>
