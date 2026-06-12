<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import ProcessCycle from '$lib/components/ProcessCycle.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import LinkedInLink from '$lib/components/LinkedInLink.svelte'
  import elke from '$lib/assets/team/elke.jpg?w=768&format=webp;png&metadata&enhanced'
  import maintenance from '$lib/assets/img/custom-software/maintenance.svg'
  import { customSoftwareMetadata } from '$lib/content/triarc-page-metadata'

  const quote = {
    image: elke,
    content:
      'Die Software muss zum Kunden passen. Nicht umgekehrt. Die Vorteile der Digitalisierung lassen sich nur dann voll ausschöpfen, wenn die Software-Lösung exakt den Bedürfnissen entspricht.',
    person: 'Elke Engel',
    personTitle: 'CFO / Partner',
  }

  const solutionParagraphs = [
    'Dank unserer jahrelangen Erfahrung und unserem Know-how sind wir in der Lage, einzigartige Lösungen zu entwickeln, die den Kunden helfen, ihre Ziele effizient und kosteneffektiv zu erreichen. Wir verstehen, dass jedes Unternehmen einzigartig ist und dass es keine "One-Size-Fits-All"-Lösungen gibt.',
    'Unser Ziel ist es, unseren Kunden die besten und innovativsten Lösungen zu bieten, die ihnen dabei helfen, ihr Geschäft zu verbessern und ihre Wettbewerbsfähigkeit zu erhöhen.',
  ]

  const useCases = [
    {
      title: 'Logistik & Dispo',
      content: 'Digitale Steuerung von Fahrzeugparks, Touren und Chauffeuren mit Rapportierung ins ERP.',
      accent: 'bg-red-triarc',
    },
    {
      title: 'Gesundheitswesen & Handwerk',
      content: 'Komplexe Auftrags- und Variantenlogik, Kostenvoranschläge und Bestellprozesse.',
      accent: 'bg-green-triarc',
    },
    {
      title: 'Aussendienst & Vertrieb',
      content: 'Datenbasierte Kundenbetreuung, Routen und Bestellungen vor Ort.',
      accent: 'bg-blue-triarc',
    },
    {
      title: 'Plattformen & Self-Service',
      content: 'Digitale Geschäftsprozesse für Endkundinnen und Partnernetzwerke.',
      accent: 'bg-yellow-triarc',
    },
  ]

  const processSteps = [
    {
      title: 'Concept',
      content:
        'Zusammen erarbeiten wir Ziele sowie Anforderungen, welche erfüllt werden sollen. Gemeinsam erarbeitet durch das Management, die Mitarbeitenden sowie unsere Projektleitung.',
    },
    {
      title: 'Planning',
      content:
        'Nach einer Aufarbeitung der Anforderungen und Einschätzung des Aufwands werden Anforderungen zusammen mit dem Aufwand priorisiert, verschoben oder angepasst. Das Resultat ist ein Sprint mit Anforderungen von 100-180 Stunden Entwicklungsaufwand.',
    },
    {
      title: 'Entwicklung',
      content: 'Die Entwicklung beginnt, es wird fleissig getestet und optimiert bis zum Review Meeting.',
    },
    {
      title: 'Review',
      content:
        'Die Entwicklung ist abgeschlossen und das Resultat kann vom Kunden getestet werden. Sobald abgenommen, geht es direkt in den produktiven Betrieb und die Anwender dürfen sich über die neuesten Änderungen freuen.',
    },
  ]

  const benefits = [
    {
      title: 'Flexibilität',
      content:
        'Während sich das Projekt entwickelt, entwickeln sich auch die Bedürfnisse und Anforderungen. Die agile Softwareentwicklung ermöglicht es, flexibel auf Hindernisse und neue Anforderungen im Entwicklungsprozess zu reagieren. Änderungswünsche können nach jedem Zyklus berücksichtigt werden.',
    },
    {
      title: 'Qualität durch Lerneffekte',
      content:
        'Mit jedem Entwicklungszyklus erzielt man Lerneffekte, die dazu beitragen, die Qualität der Software kontinuierlich zu verbessern. So entsteht eine Software, die genau den Bedarf des Kunden deckt und ihren Zweck erfüllt.',
    },
    {
      title: 'Effizienzsteigerung',
      content:
        'Durch die schrittweise Entwicklung und kontinuierliches Testen werden Fehler und Fehlentwicklungen früh entdeckt und können sofort eliminiert werden.',
    },
    {
      title: 'Geringeres Risiko',
      content:
        'In der klassischen Softwareentwicklung werden Schwachstellen oder falsch definierte Anforderungen erst am Ende sichtbar. Die agile Arbeitsweise beugt diesen Risiken vor, indem mögliche Schwachstellen während des Entwicklungsprozesses aufgedeckt werden.',
    },
    {
      title: 'Transparente Kommunikation',
      content:
        'Die Teams sind untereinander und mit dem Kunden im ständigen Austausch. Der Kunde ist jederzeit auf dem aktuellen Stand und in die Entwicklung involviert. Mögliche Änderungen oder Hindernisse können direkt kommuniziert werden.',
    },
  ]

  const hostingFeatures = ['Cloud-Betrieb', 'On-Premise', 'Security-Patches', 'Monitoring']
</script>

<MetaHead pageMetadata={customSoftwareMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Dienstleistungen"
    title="Custom Software"
    content="Als Custom Software Firma sind wir der ideale Partner für Unternehmen, die nach individuellen Softwarelösungen suchen. Wir arbeiten eng mit unseren Kunden zusammen und entwickeln massgeschneiderte Lösungen, die genau auf ihre Bedürfnisse zugeschnitten sind."
  />

  <!-- Quote spotlight -->
  <section class="border-b border-gray-100 bg-blue-triarc bg-opacity-5">
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
                class="rounded-full bg-blue-triarc px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Kontaktiere mich
              </a>
              <LinkedInLink href="https://www.linkedin.com/in/elke-engel-6761998/" person="Elke Engel" />
              <a href="mailto:elke@triarc-labs.com" class="text-base font-bold text-gray-600 hover:text-blue-triarc">
                elke@triarc-labs.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Solutions -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid gap-10 lg:grid-cols-[1fr,2fr]">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lösungen entwickeln</h2>
          <div class="flex flex-col gap-y-6 text-lg text-gray-600">
            {#each solutionParagraphs as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Use cases -->
  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Wo Custom Software in der Praxis wirkt
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-gray-600">
          Custom Software setzt überall dort an, wo Standardsoftware an ihre Grenzen stösst. Oft gilt: 80&nbsp;%
          Standard, 20&nbsp;% Custom – genau dort, wo Sie es für Ihr Geschäft brauchen. Diese 20&nbsp;% sind der
          Gamechanger, der die Hürden im Alltag reduziert. Typisch sind tiefe ERP- und Prozessintegration (z.&nbsp;B.
          ABACUS), Mobile Apps für das Feld und vernetzte Systemlandschaften mit μLink.
        </p>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {#each useCases as useCase, index}
          <Reveal delay={index * 100} class="h-full">
            <div
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-1.5 {useCase.accent}" aria-hidden="true"></div>
              <div class="flex flex-grow flex-col p-7">
                <h3 class="text-xl font-bold text-gray-900">{useCase.title}</h3>
                <p class="mt-3 text-base text-gray-600">{useCase.content}</p>
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
      <Reveal>
        <div class="mt-10 flex flex-wrap gap-6">
          <a
            href="/references"
            class="rounded-full bg-blue-triarc px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Zu den Referenzen
          </a>
          <a href="/stories" class="self-center text-base font-bold text-blue-triarc hover:underline">
            Aktuelle Einblicke im Story-Blog →
          </a>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Agile process -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unser agiler Entwicklungsprozess</h2>
        <p class="mt-4 max-w-3xl text-lg text-gray-600">
          Wir führen unsere Projekte erfolgreich seit einem Jahrzehnt agil. Diese Methode hat sich sowohl für uns als
          auch für den Kunden immer bewährt. Unser agiler Entwicklungsprozess besteht aus vier Schritten, welche sich
          pro Sprint wiederholen.
        </p>
        <div class="mt-12">
          <ProcessCycle steps={processSteps} />
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Benefits -->
  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vorteile der agilen Entwicklung</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each benefits as benefit, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <div class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-green-triarc bg-opacity-10"
                aria-hidden="true"
              >
                <svg class="h-5 w-5 fill-green-triarc" viewBox="0 0 448 512">
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </span>
              <h3 class="mt-5 text-xl font-bold text-gray-900">{benefit.title}</h3>
              <p class="mt-3 text-base text-gray-600">{benefit.content}</p>
            </div>
          </Reveal>
        {/each}
        <Reveal delay={200} class="h-full">
          <a
            href="/contact"
            class="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended p-7 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-bold">Klingt nach Ihrem Projekt?</h3>
            <p class="mt-3 text-base text-white/90">
              Erzählen Sie uns von Ihren Anforderungen – wir zeigen Ihnen, wie eine massgeschneiderte Lösung aussehen
              kann.
            </p>
            <span class="mt-6 font-bold">Kontakt aufnehmen →</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>

  <!-- Hosting & maintenance -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wartung / Hosting</h2>
            <p class="mt-4 text-lg text-gray-600">
              Der Betrieb sowie die Wartung unserer Software ist uns ein wichtiges Anliegen. Wir betreiben unsere
              Software flexibel in unserem Cloud Angebot oder auf deinen vorhandenen Servern.
            </p>
            <p class="mt-4 text-lg text-gray-600">
              Regelmässige Wartung der Software sowie das Einspielen von sicherheitsrelevanten Patches ist für uns ein
              Routine-Job und lässt uns nachts besser schlafen.
            </p>
            <ul class="mt-8 flex flex-wrap gap-3">
              {#each hostingFeatures as feature}
                <li class="rounded-full border border-gray-300 px-4 py-1.5 text-base text-gray-700">{feature}</li>
              {/each}
            </ul>
          </div>
          <img src={maintenance} alt="Wartung" class="mx-auto w-full max-w-md" />
        </div>
      </Reveal>
    </Container>
  </section>

  <Footer />
</div>
