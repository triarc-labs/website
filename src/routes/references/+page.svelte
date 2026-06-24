<script lang="ts">
  import type { PageData } from './$types'
  import Customers from '$lib/index/Customers.svelte'
  import Partners from '$lib/index/Partners.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import NavJump from '$lib/components/NavJump.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import envelope from '$lib/assets/icons/envelope-solid-full.svg'
  import linkedIn from '$lib/assets/icons/square-linkedin-brands-solid-full.svg'
  import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&enhanced'
  import { referencesMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData

  $: projects = data.projects

  // Filter by pillar; only show categories that actually have projects, in a fixed order
  const pillarOrder = ['Strategie', 'Operationen', 'Zukunft']
  let activeCategory: string | null = null

  $: categories = pillarOrder.filter((label) =>
    projects.some((project) => project.pillars.some((p) => p.name === label))
  )

  $: filteredProjects = activeCategory
    ? projects.filter((project) => project.pillars.some((p) => p.name === activeCategory))
    : projects

  // Only the very first card of the unfiltered gallery spans two columns
  $: featuredSlug = activeCategory === null && projects.length > 0 ? projects[0].slug : null
</script>

<MetaHead pageMetadata={referencesMetadata} />

<div class="bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended">
  <!-- Hero -->
  <section class="relative overflow-hidden text-white">
    <TriarcOrbits focusX={0.78} focusY={0.95} opacity={0.9} scale={1.6} />
    <div class="relative">
      <Container>
        <div class="flex flex-col items-start py-24 md:py-36 lg:max-w-2xl">
          <Reveal y={16}>
            <span class="text-sm font-bold uppercase tracking-widest text-white/70">Referenzen</span>
          </Reveal>
          <Reveal y={16} delay={100}>
            <h1 class="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl md:leading-tight">
              Lösungen, die im Alltag wirken.
            </h1>
          </Reveal>
          <Reveal y={16} delay={200}>
            <p class="mt-6 text-lg text-white">
              Was wir vollbracht haben – und woraus es entstanden ist: {projects.length} Projekte aus Logistik, Bau, Immobilien
              und mehr – jedes mit seiner eigenen Geschichte.
            </p>
          </Reveal>
        </div>
      </Container>
    </div>
  </section>

  <!-- Project gallery -->
  <section class="pb-16 md:pb-24" id="projects">
    <Container>
      <div class="mb-10 flex flex-wrap gap-3" role="group" aria-label="Referenzen nach Kategorie filtern">
        <button
          type="button"
          aria-pressed={activeCategory === null}
          class="rounded-full border px-4 py-1.5 text-base transition duration-300 {activeCategory === null
            ? 'border-transparent bg-blue-triarc text-white shadow font-bold'
            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 font-medium'}"
          on:click={() => (activeCategory = null)}
        >
          Alle
        </button>
        {#each categories as category}
          <button
            type="button"
            aria-pressed={activeCategory === category}
            class="rounded-full border px-4 py-1.5 text-base transition duration-300 {activeCategory === category
              ? 'border-transparent bg-blue-triarc text-white shadow font-bold'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 font-medium'}"
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
              href="/projects/{project.slug}"
              class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="overflow-hidden bg-white {project.slug === featuredSlug ? 'aspect-[16/7]' : 'aspect-[16/9]'}">
                <img
                  src={project.image.src}
                  srcset={project.image.srcset}
                  sizes="(min-width: 1280px) 700px, (min-width: 768px) 50vw, 100vw"
                  alt={project.image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="flex flex-grow flex-col border-t border-gray-100 p-7">
                <h2 class="text-2xl font-bold text-gray-900 group-hover:text-blue-triarc">
                  {project.title}
                </h2>
                <p class="mt-3 flex-grow text-base text-black">{project.teaser}</p>
                <div class="mt-5 flex flex-wrap items-center gap-3">
                  {#each project.pillars as pillar}
                    <span class="rounded-full border border-gray-300 px-3 py-0.5 text-sm text-gray-600"
                      >{pillar.name}</span
                    >
                  {/each}
                  <span class="ml-auto inline-flex items-center text-black" aria-label="Mehr dazu">
                    <span class="inline-block transition group-hover:translate-x-0.5">
                      <svg
                        class="h-6 w-6 fill-current"
                        viewBox="0 0 640 640"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M571.3 331.3C577.5 325.1 577.5 314.9 571.3 308.7L395.3 132.7C389.1 126.5 378.9 126.5 372.7 132.7C366.5 138.9 366.5 149.1 372.7 155.3L521.4 304L80 304C71.2 304 64 311.2 64 320C64 328.8 71.2 336 80 336L521.4 336L372.7 484.7C366.5 490.9 366.5 501.1 372.7 507.3C378.9 513.5 389.1 513.5 395.3 507.3L571.3 331.3z"
                        />
                      </svg>
                    </span>
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
  <section class="bg-white">
    <Container>
      <Reveal>
        <div class="flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
          <!-- Image as its own column once there is room for a side-by-side layout -->
          <div class="hidden w-56 flex-shrink-0 md:block lg:w-64">
            <EnhancedImage
              alt="Serge Müller"
              image={serge}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <!-- Quote on top for the side-by-side (md+) layout -->
            <blockquote class="hidden text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:leading-8 md:block">
              «Gewinnen Sie durch massgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!»
            </blockquote>
            <!-- Name / role / contact links, with the image beside them while stacked -->
            <div class="flex flex-col items-start gap-6 min-[480px]:flex-row min-[480px]:items-end md:mt-8">
              <div class="text-base text-gray-900">
                <div class="font-semibold">Serge Müller</div>
                <div class="mt-1">CEO Triarc Laboratories</div>
                <div class="mt-2 flex space-x-2 fill-gray-900">
                  <a href="mailto:serge@triarc-labs.com" aria-label="Email">
                    <Icon size="small" src={envelope}></Icon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin"
                  >
                    <Icon size="small" src={linkedIn}></Icon>
                  </a>
                </div>
              </div>
              <!-- Image beside the name while stacked; hidden once it moves to its own column -->
              <div class="order-first w-48 flex-shrink-0 sm:w-56 md:hidden">
                <EnhancedImage
                  alt="Serge Müller"
                  image={serge}
                  imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
            <!-- Quote below for the stacked layout -->
            <blockquote class="pt-8 text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:leading-8 md:hidden">
              «Gewinnen Sie durch massgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!»
            </blockquote>
            <!-- CTA below the text -->
            <div class="mt-8">
              <a
                href="/contact"
                class="inline-block rounded-full bg-green-triarc-deep px-2 py-2 text-base font-medium text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:px-4"
              >
                Projekt besprechen
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
  <FooterNoContact />
</div>
