<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import ContactForm from '$lib/components/ContactForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import iris from '$lib/assets/team/iris.jpg?w=768&format=webp;png&metadata&enhanced'
  import bsoLogo from '$lib/assets/img/partners/bso_logo_desktop.svg'
  import helvetas from '$lib/assets/img/customer/helvetas.gif'
  import analytica from '$lib/assets/img/customer/analytica-logo-main.svg'
  import heroImage from '$lib/assets/hero/Beratung.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import { consultingMetadata } from '$lib/content/triarc-page-metadata'
  import type { MappedPost } from './+page'

  export let data
  export let contactString = 'Iris direkt kontaktieren'

  const introParagraphs = [
    'Unser Digitalisierungsberatungsteam stellt sicher, dass die Digitalisierung für ein Unternehmen zum Erfolg wird.',
    'Dafür ist nicht nur eine hochwertige Software relevant, sondern vor allem, dass sie genutzt wird und ihren Zweck erfüllt. Dies wird erreicht, wenn die Prozesse, Strukturen, Organisationskultur und Mitarbeiter sich mit dem technischen Fortschritt weiterentwickeln.',
    'Wir unterstützen unsere Kunden bei der Analyse und Identifizierung von Chancen, Erstellung einer Transformations-Roadmap und der Umsetzung der definierten Massnahmen.',
  ]

  interface ServiceCard {
    title: string
    content: string
    accent: string
    posts: MappedPost[]
    link?: { href: string; text: string }
  }

  $: services = [
    {
      title: 'Potenzialanalyse',
      content:
        'Gemeinsam analysieren wir den Status quo Ihrer Digitalisierung und identifizieren die Chancen mit dem grössten Hebel für Ihr Unternehmen.',
      accent: 'bg-red-triarc',
      posts: (data.posts.potential as MappedPost[]) ?? [],
    },
    {
      title: 'Visions- und Strategieentwicklung',
      content:
        'Für eine Transformation braucht es ein konkretes Zielbild. Wir entwickeln zusammen mit unseren Kunden eine Vision und Strategie ihrer Digitalisierung. Daraus entstehen Massnahmen für die konkrete Umsetzung und schlussendlich Erreichung des Zielbildes.',
      accent: 'bg-green-triarc',
      posts: (data.posts.vision as MappedPost[]) ?? [],
    },
    {
      title: 'Change Management',
      content:
        'Eine Veränderung ist erst dann erfolgreich, wenn sie sich nachhaltig im Unternehmen verankert. Wir begleiten die Mitarbeiter durch die Transformation, nehmen ihre Ängste und Befürchtungen ernst und binden sie im Entwicklungsprozess mit ein.',
      accent: 'bg-blue-triarc',
      posts: (data.posts.changeManagement as MappedPost[]) ?? [],
    },
    {
      title: 'Strukturen und Prozesse',
      content:
        'Ein verbundenes IT-Ökosystem, das passende Organisationsmodell und die richtigen Qualifikationen ebnen den Weg der Digitalisierung. Wir analysieren den Status quo, optimieren die betroffenen Geschäftsprozesse und passen sie an das neue digitale Arbeitsmodell an.',
      accent: 'bg-red-triarc',
      posts: [],
    },
    {
      title: 'Führungs-, Team- und Mitarbeiter-Coaching',
      content:
        'Wir begleiten und befähigen Führungskräfte, Mitarbeiter und Teams auf dem Weg durch den Wandel – mit einem systemisch-lösungsorientierten Beratungsansatz und dem Ziel der Selbstbefähigung.',
      accent: 'bg-green-triarc',
      posts: (data.posts.coaching as MappedPost[]) ?? [],
      link: { href: 'https://www.coaching-digitalisierung.ch', text: 'coaching-digitalisierung.ch' },
    },
  ] as ServiceCard[]

  $: stories = ((data.posts.consulting as MappedPost[]) ?? []).slice(0, 3)

  const testimonials = [
    {
      logo: helvetas,
      logoAlt: 'Helvetas',
      source: 'Patric Masar von Helvetas',
      content:
        'Dank der effizienten und zielorientierten Methodik konnten wir in nur zwei von Triarc moderierten halbtägigen Workshops ein umfassendes Konzept für eine Zeiterfassungs- und Spesen-App mit dem Erweiterungspotential für eine Vielzahl weiterer Anwendungen erarbeiten. Neben dem Definieren der Kernanforderungen haben wir in Brainstormingsessions auch Ideen für zukünftige Anwendungsgebiete der App erarbeitet. Es ist erstaunlich welche Vielzahl an guten und realisierbaren Ideen daraus resultierten.',
    },
    {
      logo: analytica,
      logoAlt: 'Analytica',
      source: 'Andrea Isler von Analytica',
      content:
        'Dank der Organisationsanalyse der Firma Triarc konnten wir die komplexe Struktur unserer ICT-Organisation besser verstehen und in der Folge die Effizienz unserer Abläufe verbessern sowie deren Innovation fördern. Der didaktische Ansatz der Berater:innen einerseits Wissen zu vermitteln und andererseits unsere Fachkräfte persönlich zu coachen, wurde als besonders gewinnbringend eingeschätzt. Zusammenfassend beurteilt, war der Einsatz der Firma Triarc für uns ein voller Erfolg.',
    },
  ]
</script>

<MetaHead pageMetadata={consultingMetadata} />

<div class="bg-white">
  <Hero
    title="Beratung"
    content="Erfolgreiche Digitalisierung braucht das Miteinander. Wir bauen Brücken zwischen Strategie, Betrieb und Software – mit Beratung, Change Management und massgeschneiderter Entwicklung aus einer Organisation."
    image={heroImage}
    imageAlt="Triarc Consulting Header"
  />

  <!-- Intro -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid gap-10 lg:grid-cols-[1fr,2fr]">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Digitalisierung, die getragen wird
          </h2>
          <div class="flex flex-col gap-y-6 text-lg text-gray-600">
            {#each introParagraphs as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Services -->
  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Beratungsleistungen</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each services as service, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <div
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-1.5 {service.accent}" aria-hidden="true"></div>
              <div class="flex flex-grow flex-col p-7">
                <span class="text-sm font-bold tracking-widest text-gray-400">0{index + 1}</span>
                <h3 class="mt-2 text-xl font-bold text-gray-900">{service.title}</h3>
                <p class="mt-3 flex-grow text-base text-gray-600">{service.content}</p>
                {#if service.link}
                  <a
                    href={service.link.href}
                    target="_blank"
                    rel="noreferrer"
                    class="mt-4 text-base font-bold text-blue-triarc hover:underline"
                  >
                    {service.link.text} →
                  </a>
                {/if}
                {#if service.posts.length > 0}
                  <ul class="mt-5 flex flex-col gap-y-2 border-t border-gray-100 pt-4">
                    {#each service.posts.slice(0, 2) as post}
                      <li>
                        <a
                          href={post.link.href}
                          target="_blank"
                          rel="noreferrer"
                          class="text-sm text-gray-500 transition hover:text-blue-triarc"
                        >
                          Artikel: {post.title} →
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </div>
          </Reveal>
        {/each}
        <Reveal delay={200} class="h-full">
          <a
            href="#contactform"
            class="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended p-7 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-bold">Wo stehen Sie heute?</h3>
            <p class="mt-3 text-base text-white/90">
              Im unverbindlichen Erstgespräch finden wir heraus, wo Beratung Ihnen den grössten Mehrwert bringt.
            </p>
            <span class="mt-6 font-bold">Gespräch vereinbaren →</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <!-- Iris quote spotlight -->
  <section class="border-y border-gray-100 bg-green-triarc bg-opacity-5">
    <Container>
      <Reveal>
        <div class="flex flex-col items-center gap-10 py-16 md:py-24 lg:flex-row lg:items-start">
          <div class="w-56 flex-shrink-0 lg:w-64">
            <EnhancedImage
              alt={'Iris Zenegaglia'}
              image={iris}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <figure>
              <blockquote class="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                «Der Mensch digitalisiert für die Menschen – wir stellen den User in den Mittelpunkt, damit der Wandel
                von allen getragen und gelebt wird. Nur dann ist die Digitalisierung nachhaltig.»
              </blockquote>
              <figcaption class="mt-6 text-lg text-gray-600">
                <span class="font-bold text-gray-900">Iris Zenegaglia</span> · Digitalisierungs-/Organisationsberaterin,
                Coach (bso i. A.), Partnerin
              </figcaption>
            </figure>
            <div class="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#contactform"
                class="rounded-full bg-green-triarc px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Kontaktiere mich
              </a>
              <a
                href="https://www.linkedin.com/in/iriszenegagliagloor/"
                target="_blank"
                rel="noreferrer"
                class="text-base font-bold text-gray-600 hover:text-blue-triarc"
              >
                LinkedIn
              </a>
              <a href="mailto:iris@triarc-labs.com" class="text-base font-bold text-gray-600 hover:text-blue-triarc">
                iris@triarc-labs.com
              </a>
            </div>
            <img
              src={bsoLogo}
              alt="bso – Berufsverband für Coaching, Supervision und Organisationsberatung"
              class="mt-8 h-12"
            />
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Testimonials -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Das sagen unsere Kunden</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        {#each testimonials as testimonial, index}
          <Reveal delay={index * 100} class="h-full">
            <figure class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <img src={testimonial.logo} alt={testimonial.logoAlt} class="h-10 self-start object-contain" />
              <blockquote class="mt-6 flex-grow text-base leading-relaxed text-gray-600">
                «{testimonial.content}»
              </blockquote>
              <figcaption class="mt-6 font-bold text-gray-900">{testimonial.source}</figcaption>
            </figure>
          </Reveal>
        {/each}
      </div>
    </Container>
  </section>

  <!-- Stories -->
  {#if stories.length > 0}
    <section class="bg-gray-50 py-16 md:py-24">
      <Container>
        <Reveal>
          <div class="flex flex-wrap items-baseline justify-between gap-4">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Einblicke aus unserem Blog</h2>
            <a href="/stories" class="text-base font-bold text-blue-triarc hover:underline">Alle Stories →</a>
          </div>
        </Reveal>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          {#each stories as post, index}
            <Reveal delay={index * 100} class="h-full">
              <a
                href={post.link.href}
                target="_blank"
                rel="noreferrer"
                class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div class="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image.src}
                    srcset={post.image.srcset}
                    sizes={post.image.sizes}
                    alt={post.image.alt}
                    loading="lazy"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div class="flex flex-grow flex-col p-7">
                  <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-triarc">{post.title}</h3>
                  <p class="mt-3 flex-grow text-base text-gray-600 line-clamp-3">{post.content}</p>
                  <span class="mt-5 text-sm text-gray-400">{post.footer}</span>
                </div>
              </a>
            </Reveal>
          {/each}
        </div>
      </Container>
    </section>
  {/if}

  <ContactForm {contactString} />
  <FooterNoContact />
</div>
