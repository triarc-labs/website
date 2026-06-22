<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import Video from '$lib/components/Video.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'
  import envelope from '$lib/assets/icons/envelope-solid-full.svg'
  import linkedIn from '$lib/assets/icons/square-linkedin-brands-solid-full.svg'
  import pascal from '$lib/assets/team/pascal.jpg?w=768&format=webp;png&metadata&enhanced'
  import mlinkLogo from '$lib/assets/img/mlink/tree.svg'
  import m3expressIcon from '$lib/assets/img/lab/m3express-icon.svg'
  import aiPoc from '$lib/assets/img/thumbnail/ai-poc-poster.png'
  import type { VideoContent } from '$lib/components/TypeDefinitions'
  import { innovationMetadata } from '$lib/content/triarc-page-metadata'

  const quote = {
    image: pascal,
    content:
      'Wir investieren gezielt in Innovation, um sicherzustellen, dass wir unseren Kunden Zugang zu den neuesten und besten Technologien bieten können. In unserer Kernkompetenz als technologischer Partner beteiligen wir uns an Startups und bringen Produkte zur Marktreife.',
    person: 'Pascal Bertschi',
    personTitle: 'CCO / Partner',
    email: 'pascal@triarc-labs.com',
    linkedin: 'https://www.linkedin.com/in/pascal-bertschi-9b00b480/',
  }

  const aiFields = ['Vertragsanalyse', 'Protokollerstellung', 'Assistenzen', 'Wissensmanagement', 'Sprachbarrieren überwinden']

  const voiceReportingVideo: VideoContent = {
    videoTitle: 'AI Proof of Concept',
    videoId: 'ai',
    poster: aiPoc,
    embedded: true,
    sources: [
      {
        src: 'https://storage.googleapis.com/triarc-website/ai-poc-1080p_h264.webm',
        type: 'video/webm',
      },
      {
        src: 'https://storage.googleapis.com/triarc-website/ai-poc-1080p.mp4',
        type: 'video/mp4',
      },
    ],
  }

  const labProducts = [
    {
      title: 'μLink Data-hub',
      content:
        'μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind.',
      icon: mlinkLogo,
      iconAlt: 'mlink logo',
      accent: 'bg-red-triarc',
      link: { href: '/mlink', text: 'Mehr dazu', target: '_self' },
    },
    {
      title: 'M3Express',
      content:
        'Die digitale Verbindung von der Baustelle bis zum Lieferanten. Erlaube deinen Kunden bequem Mulde, Kies oder Transport über die M3Express-App zu bestellen. Behalte als Lieferant jederzeit den Überblick und optimiere die Kommunikation zwischen Fahrer, Kunde und dir.',
      icon: m3expressIcon,
      iconAlt: 'm3express',
      accent: 'bg-green-triarc',
      link: { href: 'https://m3express.ch', text: 'Mehr dazu', target: '_blank' },
    },
  ]
</script>

<MetaHead pageMetadata={innovationMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Dienstleistungen"
    title="Innovation Lab"
    content="Innovationen sind der Schlüssel zu Wachstum und Erfolg. In unserem Lab fördern wir innovative und wettbewerbsfähige Businessideen, erstellen Machbarkeitsanalysen und entwickeln MVPs (Minimal Viable Products). "
  />

  <!-- Quote spotlight -->
  <section class="bg-white">
    <Container>
      <Reveal>
        <div class="flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
          <!-- Image as its own column once there is room for a side-by-side layout -->
          <div class="hidden w-56 flex-shrink-0 md:block lg:w-64">
            <EnhancedImage
              alt={quote.person}
              image={quote.image}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <!-- Quote on top for the side-by-side (md+) layout -->
            <blockquote class="hidden text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:leading-8 md:block">
              «{quote.content}»
            </blockquote>
            <!-- Name / role / contact links, with the image beside them while stacked -->
            <div class="flex flex-col items-start gap-6 min-[480px]:flex-row min-[480px]:items-end md:mt-8">
              <div class="text-base text-gray-900">
                <div class="font-semibold">{quote.person}</div>
                <div class="mt-1">{quote.personTitle}</div>
                <div class="mt-2 flex space-x-2 fill-gray-900">
                  <a href="mailto:{quote.email}" aria-label="Email">
                    <Icon size="small" src={envelope}></Icon>
                  </a>
                  <a href={quote.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                    <Icon size="small" src={linkedIn}></Icon>
                  </a>
                </div>
              </div>
              <!-- Image beside the name while stacked; hidden once it moves to its own column -->
              <div class="order-first w-48 flex-shrink-0 sm:w-56 md:hidden">
                <EnhancedImage
                  alt={quote.person}
                  image={quote.image}
                  imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
            <!-- Quote below for the stacked layout -->
            <blockquote class="pt-8 text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:leading-8 md:hidden">
              «{quote.content}»
            </blockquote>
            <!-- CTA below the text -->
            <div class="mt-8">
              <a
                href="/contact"
                class="inline-flex items-center gap-x-1 rounded-full bg-green-triarc-deep px-2 py-2 text-base font-medium text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:px-4"
              >
                Kontaktieren Sie mich
                <Icon src={Arrow} size="small" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Aktuelles Experiment: AI in Custom Software -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span class="text-sm font-bold uppercase tracking-widest text-gray-500">Unser Fokus</span>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Transformation in der Software
            </h2>
            <p class="mt-4 text-base text-black">
              AI ermöglicht neue Wege in der Benutzung und Gestaltung von Software. Der Weg ist jedoch steinig in der
              Praxis – wir bieten dazu die technische Unterstützung und Expertise, um in Zusammenarbeit die richtigen
              Schritte vorzunehmen und der Zukunft gewappnet zu sein.
            </p>
            <ul class="mt-6 flex flex-wrap gap-3">
              {#each aiFields as field}
                <li class="rounded-full border border-gray-300 px-4 py-1.5 text-base text-black">{field}</li>
              {/each}
            </ul>
            <p class="mt-6 text-base text-black">
              Ein Beispiel aus dem Lab: das AI-unterstützte Voice Reporting. Zeit, Leistung und Materialien werden vor
              Ort per Spracheingabe rapportiert. Das entlastet den Polier von mühsamer Datenerfassung und schafft Raum
              für das Wesentliche.
            </p>
          </div>
          <div class="overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
            <Video content={voiceReportingVideo} />
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Lab products -->
  <section
    class="relative overflow-hidden bg-gradient-to-tr from-green-triarc-blended to-blue-triarc-blended py-16 md:py-24"
  >
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Aus dem Lab</h2>
        <p class="mt-4 max-w-3xl text-lg text-white">
          Produkte und Spin-offs, die in unserem Innovation Lab entstanden sind – von der Idee bis zur Marktreife.
        </p>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each labProducts as product, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <div
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="flex flex-grow flex-col p-7">
                <img src={product.icon} alt={product.iconAlt} class="h-14 w-14 self-start object-contain" />
                <h3 class="mt-5 text-xl font-bold text-gray-900">{product.title}</h3>
                <p class="mt-3 flex-grow text-base text-black">{product.content}</p>
                <a
                  href={product.link.href}
                  target={product.link.target}
                  rel={product.link.target === '_blank' ? 'noreferrer' : undefined}
                  class="mt-6 inline-flex items-center gap-x-1 self-end rounded-full bg-black px-5 py-2 text-base font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {product.link.text}
                  <Icon src={Arrow} size="small" />
                </a>
              </div>
            </div>
          </Reveal>
        {/each}
        <Reveal delay={200} class="h-full">
          <a
            href="/lab"
            class="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended p-7 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-bold">Mehr aus dem Lab</h3>
            <p class="mt-3 text-base text-white/90">
              Einblicke in unsere laufenden Experimente – und was als Nächstes kommt.
            </p>
            <span class="mt-6 flex items-center gap-x-1 font-bold">
              Zum triarc Lab
              <Icon src={Arrow} size="small" />
            </span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <FooterNoContact />
</div>
