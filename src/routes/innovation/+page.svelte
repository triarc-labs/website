<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import Video from '$lib/components/Video.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import LinkedInLink from '$lib/components/LinkedInLink.svelte'
  import pascal from '$lib/assets/team/pascal.jpg?w=768&format=webp;png&metadata&enhanced'
  import mlinkLogo from '$lib/assets/img/mlink/tree.svg'
  import m3expressIcon from '$lib/assets/img/lab/m3express-icon.svg'
  import fairpizzaIcon from '$lib/assets/img/lab/fairpizza-icon-512.png'
  import aiPoc from '$lib/assets/img/thumbnail/ai-poc-poster.png'
  import slothiIcon from '$lib/assets/img/lab/slothi.svg'
  import type { VideoContent } from '$lib/components/TypeDefinitions'
  import { innovationMetadata } from '$lib/content/triarc-page-metadata'

  const quote = {
    image: pascal,
    content:
      'Wir investieren gezielt in Innovation, um sicherzustellen, dass wir unseren Kunden Zugang zu den neuesten und besten Technologien bieten können. In unserer Kernkompetenz als technologischer Partner beteiligen wir uns an Startups und bringen Produkte zur Marktreife.',
    person: 'Pascal Bertschi',
    personTitle: 'CCO / Partner',
  }

  const aiFields = ['Vertragsanalyse', 'Protokollerstellung', 'Assistenzen', 'Wissensmanagement']

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
    {
      title: 'Fair Pizza',
      content:
        'Fair Pizza bietet Restaurants eine einfache und günstige Alternative, ihr Angebot selbstständig online zu verkaufen. Die Whitelabel-Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem Pizzabuilder.',
      icon: fairpizzaIcon,
      iconAlt: 'fair pizza',
      accent: 'bg-blue-triarc',
      link: { href: 'https://fairpizza.ch', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'Slothi',
      content:
        'Slothi soll deine Terminprobleme lösen. Eine smarte Lösung, welche dir den passenden Termin für alle Teilnehmer findet und die Verfügbarkeiten aller Teilnehmer automatisch prüft.',
      icon: slothiIcon,
      iconAlt: 'slothi',
      accent: 'bg-red-triarc',
      link: { href: 'https://slothi.ch', text: 'Mehr dazu', target: '_blank' },
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
  <section class="border-b border-gray-100 bg-green-triarc bg-opacity-5">
    <Container>
      <Reveal>
        <div class="flex flex-col items-center gap-10 py-16 md:py-24 lg:flex-row lg:items-start">
          <div class="w-56 flex-shrink-0 lg:w-64">
            <EnhancedImage
              alt={quote.person}
              image={quote.image}
              imgClass="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div class="max-w-2xl">
            <figure>
              <blockquote class="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                «{quote.content}»
              </blockquote>
              <figcaption class="mt-6 text-lg text-gray-600">
                <span class="font-bold text-gray-900">{quote.person}</span> · {quote.personTitle}
              </figcaption>
            </figure>
            <div class="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="/contact"
                class="rounded-full bg-green-triarc-deep px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Kontaktiere mich
              </a>
              <LinkedInLink href="https://www.linkedin.com/in/pascal-bertschi-9b00b480/" person="Pascal Bertschi" />
              <a href="mailto:pascal@triarc-labs.com" class="text-base font-bold text-gray-600 hover:text-blue-triarc">
                pascal@triarc-labs.com
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
            <span class="text-sm font-bold uppercase tracking-widest text-gray-500">Aktuelles Experiment</span>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Integration von AI in die Welt der Custom Software
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              Wir erproben, wie AI massgeschneiderte Software noch wertvoller macht – nicht als isoliertes Tool, sondern
              direkt eingebettet in Ihre Geschäftsprozesse und Systemlandschaft.
            </p>
            <ul class="mt-6 flex flex-wrap gap-3">
              {#each aiFields as field}
                <li class="rounded-full border border-gray-300 px-4 py-1.5 text-base text-gray-700">{field}</li>
              {/each}
            </ul>
            <p class="mt-6 text-lg text-gray-600">
              Ein Beispiel aus dem Lab: das AI-unterstützte Voice Reporting. Zeit, Leistungen und Materialien werden vor
              Ort per Spracheingabe erfasst, eine AI-Assistenz fragt fehlende Angaben nach und übermittelt den Rapport
              direkt ins ERP oder in die Reporting-Applikation.
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
  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aus dem Lab</h2>
        <p class="mt-4 max-w-3xl text-lg text-gray-600">
          Produkte und Spin-offs, die in unserem Innovation Lab entstanden sind – von der Idee bis zur Marktreife.
        </p>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each labProducts as product, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <div
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-1.5 {product.accent}" aria-hidden="true"></div>
              <div class="flex flex-grow flex-col p-7">
                <img src={product.icon} alt={product.iconAlt} class="h-14 w-14 self-start object-contain" />
                <h3 class="mt-5 text-xl font-bold text-gray-900">{product.title}</h3>
                <p class="mt-3 flex-grow text-base text-gray-600">{product.content}</p>
                <a
                  href={product.link.href}
                  target={product.link.target}
                  rel={product.link.target === '_blank' ? 'noreferrer' : undefined}
                  class="mt-6 text-base font-bold text-blue-triarc hover:underline"
                >
                  {product.link.text} →
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
            <span class="mt-6 font-bold">Zum triarc Lab →</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <Footer />
</div>
