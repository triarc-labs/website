<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import ContactForm from '$lib/components/ContactForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'
  import envelope from '$lib/assets/icons/envelope-solid-full.svg'
  import linkedIn from '$lib/assets/icons/square-linkedin-brands-solid-full.svg'
  import iris from '$lib/assets/team/iris.jpg?w=768&format=webp;png&metadata&enhanced'
  import bsoLogo from '$lib/assets/img/partners/bso_logo_desktop.svg'
  import helvetas from '$lib/assets/img/customer/helvetas.gif'
  import analytica from '$lib/assets/img/customer/analytica-logo-main.svg'
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
  <GradientHero
    kicker="Dienstleistungen"
    title="Beratung"
    content="Erfolgreiche Digitalisierung braucht das Miteinander. Wir bauen Brücken zwischen Strategie, Betrieb und Software – mit Beratung, Change Management und massgeschneiderter Entwicklung aus einer Organisation."
  />

  <!-- Iris quote spotlight -->
  <section class="bg-white">
    <Container>
      <Reveal>
        <div class="flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
          <!-- Image as its own column once there is room for a side-by-side layout -->
          <div class="hidden w-56 flex-shrink-0 md:block lg:w-64">
            <EnhancedImage
              alt={'Iris Zenegaglia'}
              image={iris}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <!-- Quote on top for the side-by-side (md+) layout -->
            <blockquote class="hidden text-xl font-semibold leading-7 text-black sm:text-2xl sm:leading-8 md:block">
              «Der Mensch digitalisiert für die Menschen – wir stellen den User in den Mittelpunkt, damit der Wandel von
              allen getragen und gelebt wird. Nur dann ist die Digitalisierung nachhaltig.»
            </blockquote>
            <!-- Name / role / contact links, with the image beside them while stacked -->
            <div class="flex flex-col items-start gap-6 min-[480px]:flex-row min-[480px]:items-end md:mt-8">
              <div class="text-base text-black">
                <div class="font-semibold">Iris Zenegaglia</div>
                <div class="mt-1">Digitalisierungs-/Organisationsberaterin, Coach (bso), Partnerin</div>
                <div class="mt-2 flex space-x-2 fill-gray-900">
                  <a href="mailto:iris@triarc-labs.com" aria-label="Email">
                    <Icon size="small" src={envelope}></Icon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iriszenegagliagloor/"
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
                  alt={'Iris Zenegaglia'}
                  image={iris}
                  imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
            <!-- Quote below for the stacked layout -->
            <blockquote class="pt-8 text-xl font-semibold leading-7 text-black sm:text-2xl sm:leading-8 md:hidden">
              «Der Mensch digitalisiert für die Menschen – wir stellen den User in den Mittelpunkt, damit der Wandel von
              allen getragen und gelebt wird. Nur dann ist die Digitalisierung nachhaltig.»
            </blockquote>
            <!-- CTA below the text -->
            <div class="mt-8">
              <a
                href="#contactform"
                class="inline-flex items-center gap-x-1 rounded-full bg-green-triarc-deep px-2 py-2 text-base font-medium text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:px-4"
              >
                Kontaktieren Sie mich
                <Icon src={Arrow} size="small" />
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

  <!-- Intro -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid gap-10 lg:grid-cols-[1fr,2fr]">
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Digitalisierung, die getragen wird
          </h2>
          <div class="flex flex-col gap-y-6 text-lg text-black">
            {#each introParagraphs as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Services -->
  <section class="bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unsere Beratungsleistungen</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each services as service, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <div
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="flex flex-grow flex-col p-7">
                <h3 class="text-xl font-bold text-black">{service.title}</h3>
                <p class="mt-3 flex-grow text-base text-black">{service.content}</p>
                {#if service.link}
                  <a
                    href={service.link.href}
                    target="_blank"
                    rel="noreferrer"
                    class="mt-4 text-base font-bold text-blue-triarc hover:underline"
                  >
                    {service.link.text}
                    <svg
                      class="ml-1 inline-block h-[1em] w-[1em] fill-current align-[-0.1em]"
                      viewBox="0 0 640 640"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M571.3 331.3C577.5 325.1 577.5 314.9 571.3 308.7L395.3 132.7C389.1 126.5 378.9 126.5 372.7 132.7C366.5 138.9 366.5 149.1 372.7 155.3L521.4 304L80 304C71.2 304 64 311.2 64 320C64 328.8 71.2 336 80 336L521.4 336L372.7 484.7C366.5 490.9 366.5 501.1 372.7 507.3C378.9 513.5 389.1 513.5 395.3 507.3L571.3 331.3z"
                      />
                    </svg>
                  </a>
                {/if}
                {#if service.posts.length > 0}
                  <ul class="mt-5 flex flex-col gap-y-2 border-t border-gray-100 pt-4">
                    {#each service.posts.slice(0, 1) as post}
                      <li>
                        <a
                          href="/stories/{post.slug}"
                          class="text-sm text-black transition hover:text-blue-triarc"
                        >
                          Artikel: {post.title}
                          <svg
                            class="ml-1 inline-block h-[1em] w-[1em] fill-current align-[-0.1em]"
                            viewBox="0 0 640 640"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M571.3 331.3C577.5 325.1 577.5 314.9 571.3 308.7L395.3 132.7C389.1 126.5 378.9 126.5 372.7 132.7C366.5 138.9 366.5 149.1 372.7 155.3L521.4 304L80 304C71.2 304 64 311.2 64 320C64 328.8 71.2 336 80 336L521.4 336L372.7 484.7C366.5 490.9 366.5 501.1 372.7 507.3C378.9 513.5 389.1 513.5 395.3 507.3L571.3 331.3z"
                            />
                          </svg>
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
            <span class="mt-6 inline-flex items-center gap-x-1 font-bold">
              Gespräch vereinbaren
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
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <!-- Testimonials -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">Das sagen unsere Kunden</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        {#each testimonials as testimonial, index}
          <Reveal delay={index * 100} class="h-full">
            <figure class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <img src={testimonial.logo} alt={testimonial.logoAlt} class="h-10 self-start object-contain" />
              <blockquote class="mt-6 flex-grow text-base leading-relaxed text-black">
                «{testimonial.content}»
              </blockquote>
              <figcaption class="mt-6 font-bold text-black">{testimonial.source}</figcaption>
            </figure>
          </Reveal>
        {/each}
      </div>
    </Container>
  </section>

  <!-- Stories -->
  {#if stories.length > 0}
    <section class="bg-gradient-to-tr from-blue-triarc-blended to-green-triarc-blended py-16 md:py-24">
      <Container>
        <Reveal>
          <div class="flex flex-wrap items-baseline justify-between gap-4">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Einblicke aus unserem Blog</h2>
            <a
              href="/stories?tag=beratung"
              class="inline-flex items-center gap-x-1 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Alle Stories
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
            </a>
          </div>
        </Reveal>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          {#each stories as post, index}
            <Reveal delay={index * 100} class="h-full">
              <a
                href="/stories/{post.slug}"
                class="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                  <h3 class="text-lg font-bold text-black group-hover:text-blue-triarc">{post.title}</h3>
                  <p class="mt-3 flex-grow text-base text-black line-clamp-3">{post.content}</p>
                  <span class="mt-5 text-sm text-black">{post.footer}</span>
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
