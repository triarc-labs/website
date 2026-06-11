<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import ReferenceStory from '$lib/components/ReferenceStory.svelte'
  import ReferenceCarousel from '$lib/components/ReferenceCarousel.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { TriarcPageMetadata } from '$lib/components/TypeDefinitions'

  export let data

  $: project = data.project
  $: metadata = {
    title: `${project.appName} – Referenz – triarc laboratories`,
    metaTitle: `${project.appName} für ${project.customer} | Referenz | triarc labs`,
    description: project.teaser,
  } satisfies TriarcPageMetadata
</script>

<MetaHead pageMetadata={metadata} />

<div class="bg-white">
  <!-- Header -->
  <header class="border-b border-gray-100 bg-gray-50">
    <Container>
      <div class="grid items-center gap-x-16 gap-y-12 py-16 md:py-20 {project.images ? 'lg:grid-cols-2' : ''}">
        <div>
          <a
            href="/references"
            class="inline-flex items-center gap-x-2 text-base font-bold text-gray-500 transition hover:text-blue-triarc"
          >
            <span aria-hidden="true">←</span> Alle Referenzen
          </a>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <span class="text-sm font-bold uppercase tracking-widest text-gray-400">Referenz</span>
            {#each project.tags as tag}
              <span class="rounded-full border border-gray-300 px-3 py-0.5 text-sm text-gray-600">{tag}</span>
            {/each}
          </div>
          <h1 class="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.appName}</h1>
          <p class="mt-4 max-w-3xl text-xl text-gray-700">{project.teaser}</p>
          <p class="mt-6 max-w-3xl text-lg text-gray-600">
            <span class="font-bold text-gray-900">{project.customer}</span> · {project.companyDescription}
          </p>
        </div>
        {#if project.images}
          <Reveal>
            <ReferenceCarousel appName={project.appName} images={project.images} single />
          </Reveal>
        {/if}
      </div>
    </Container>
  </header>

  <!-- Screenshot (web projects) -->
  {#if !project.images}
    <section class="border-b border-gray-100 py-16 md:py-20">
      <Container>
        <Reveal>
          <div class="flex items-center justify-center">
            <EnhancedImage
              image={project.image}
              alt="{project.appName} App screenshot"
              imgClass="w-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10 lg:max-h-[600px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  {/if}

  <!-- Story -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Das Projekt im Detail</h2>
        <div class="mt-12">
          <ReferenceStory situation={project.situation} challenges={project.challenges} solutions={project.solutions} />
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Next project + CTA -->
  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Weitere Referenzen</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each [data.previousProject, data.nextProject] as neighbour}
          <Reveal class="h-full">
            <a
              href="/references/{neighbour.slug}"
              class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="flex aspect-[16/9] items-center justify-center overflow-hidden bg-gray-50 p-6">
                <EnhancedImage
                  image={neighbour.image}
                  alt="{neighbour.appName} Screenshot"
                  imgClass="max-h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="flex flex-grow flex-col border-t border-gray-100 p-7">
                <span class="text-sm font-bold uppercase tracking-widest text-gray-400">{neighbour.customer}</span>
                <h3 class="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-triarc">
                  {neighbour.appName}
                </h3>
                <p class="mt-3 flex-grow text-base text-gray-600">{neighbour.teaser}</p>
                <span class="mt-5 text-base font-bold text-blue-triarc">
                  Zur Referenz <span class="transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        {/each}
        <Reveal delay={100} class="h-full">
          <a
            href="/contact"
            class="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended p-7 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-bold">Ähnliches Projekt geplant?</h3>
            <p class="mt-3 text-base text-white/90">
              Erzählen Sie uns von Ihrem Vorhaben – wir zeigen Ihnen, wie eine massgeschneiderte Lösung aussehen kann.
            </p>
            <span class="mt-6 font-bold">Kontakt aufnehmen →</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <Footer />
</div>
