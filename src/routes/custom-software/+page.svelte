<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'
  import envelope from '$lib/assets/icons/envelope-solid-full.svg'
  import linkedIn from '$lib/assets/icons/square-linkedin-brands-solid-full.svg'
  import elke from '$lib/assets/team/elke.jpg?w=768&format=webp;png&metadata&enhanced'
  import maintenance from '$lib/assets/img/custom-software/maintenance.svg'
  import agileJourney from '$lib/assets/img/custom-software/agile-journey.svg'
  import { customSoftwareMetadata } from '$lib/content/triarc-page-metadata'

  const quote = {
    image: elke,
    content:
      'Die Software muss zum Kunden passen. Nicht umgekehrt. Die Vorteile der Digitalisierung lassen sich nur dann voll ausschöpfen, wenn die Software-Lösung exakt den Bedürfnissen entspricht.',
    person: 'Elke Engel',
    personTitle: 'CFO / Partner',
    email: 'elke@triarc-labs.com',
    linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
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

  const processSteps = [
    {
      title: 'Concept',
      content:
        'Zusammen erarbeiten wir Ziele sowie Anforderungen, welche erfüllt werden sollen. Gemeinsam erarbeitet durch Management, Mitarbeitern sowie unserer Projektleitung.',
    },
    {
      title: 'Planning',
      content:
        'Nach einer Aufarbeitung der Anforderungen und Einschätzung des Aufwands, werden Anforderungen zusammen mit dem Aufwand priorisiert, verschoben oder angepasst. Das Resultat ist ein Sprint mit Anforderungen von 100-180 Stunden Entwicklungsaufwand.',
    },
    {
      title: 'Entwicklung',
      content: 'Die Entwicklung beginnt, es wird fleissig getestet und optimiert bis zum Review Meeting.',
    },
    {
      title: 'Review',
      content:
        'Die Entwicklung ist abgeschlossen und das Resultat kann vom Kunden getestet werden. Sobald abgenommen, gehts direkt in den produktiven Betrieb und die Anwender dürfen sich über die neusten Änderungen freuen.',
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

  <!-- Solutions -->
  <section class="py-16 md:py-24">
    <Container>
      <Reveal>
        <div class="grid gap-10 lg:grid-cols-[1fr,2fr]">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lösungen entwickeln</h2>
          <div class="flex flex-col gap-y-6 text-lg text-black">
            {#each solutionParagraphs as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Use cases -->
  <section
    class="relative overflow-hidden bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended py-16 text-white md:py-24"
  >
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Wo Custom Software in der Praxis wirkt
        </h2>
        <p class="mt-4 text-lg text-white">
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
              <div class="flex flex-grow flex-col p-7">
                <h3 class="text-xl font-bold text-gray-900">{useCase.title}</h3>
                <p class="mt-3 text-base text-black">{useCase.content}</p>
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
      <Reveal>
        <div class="mt-10 flex flex-wrap gap-6">
          <a
            href="/references"
            class="group flex items-center gap-x-2 rounded-full bg-white px-7 py-3 text-base font-bold text-gray-900 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Zu den Referenzen
            <svg
              class="h-6 w-6 transition group-hover:translate-x-0.5"
              viewBox="0 0 640 640"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M571.3 331.3C577.5 325.1 577.5 314.9 571.3 308.7L395.3 132.7C389.1 126.5 378.9 126.5 372.7 132.7C366.5 138.9 366.5 149.1 372.7 155.3L521.4 304L80 304C71.2 304 64 311.2 64 320C64 328.8 71.2 336 80 336L521.4 336L372.7 484.7C366.5 490.9 366.5 501.1 372.7 507.3C378.9 513.5 389.1 513.5 395.3 507.3L571.3 331.3z"
              />
            </svg>
          </a>
          <a
            href="/stories?tag=custom-software"
            class="flex items-center gap-x-1 self-center text-base font-bold text-white hover:underline"
          >
            Aktuelle Einblicke im Story-Blog
            <Icon src={Arrow} size="small" />
          </a>
        </div>
      </Reveal>
    </Container>
  </section>

  <!-- Agile development process -->
  <section class="bg-white py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-2xl font-bold text-black">Unser agiler Entwicklungsprozess</h2>
        <p class="mt-2 text-base leading-6 text-black">
          Wir führen unsere Projekte erfolgreich seit einem Jahrzehnt agil. Diese Methode hat sich sowohl für uns, wie
          auch für den Kunden immer bewährt. Unser agiler Entwicklungsprozess besteht aus vier Schritten, welche sich
          pro Sprint wiederholen.
        </p>
        <ul class="-mb-8 mt-12">
          {#each processSteps as step, i}
            <li>
              <div class="relative pb-8">
                {#if i < processSteps.length - 1}
                  <span class="absolute top-8 left-4 -ml-px h-[calc(100%-2rem)] w-px bg-black" aria-hidden="true" />
                {/if}
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full border border-black text-sm font-bold text-black"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div class="min-w-0 flex-1 pt-1.5">
                    <h3 class="text-sm font-semibold text-black">{step.title}</h3>
                    <p class="text-black">{step.content}</p>
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </Reveal>
      <Reveal>
        <img src={agileJourney} alt="Agiler Entwicklungsprozess" class="mt-12 w-full" />
      </Reveal>
    </Container>
  </section>

  <!-- Benefits -->
  <section
    class="relative overflow-hidden bg-gradient-to-tr from-green-triarc-blended to-blue-triarc-blended py-16 md:py-24"
  >
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Vorteile der agilen Entwicklung</h2>
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
              <p class="mt-3 text-base text-black">{benefit.content}</p>
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
            <span class="mt-6 flex items-center gap-x-1 font-bold">
              Kontakt aufnehmen
              <Icon src={Arrow} size="small" />
            </span>
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
            <p class="mt-4 text-lg text-black">
              Der Betrieb sowie die Wartung unserer Software ist uns ein wichtiges Anliegen. Wir betreiben unsere
              Software flexibel in unserem Cloud Angebot oder auf deinen vorhandenen Servern.
            </p>
            <p class="mt-4 text-lg text-black">
              Regelmässige Wartung der Software sowie das Einspielen von sicherheitsrelevanten Patches ist für uns ein
              Routine-Job und lässt uns nachts besser schlafen.
            </p>
            <ul class="mt-8 flex flex-wrap gap-3">
              {#each hostingFeatures as feature}
                <li class="rounded-full border border-gray-700 px-4 py-1.5 text-sm text-gray-700">{feature}</li>
              {/each}
            </ul>
          </div>
          <img src={maintenance} alt="Wartung" class="mx-auto w-full max-w-md" />
        </div>
      </Reveal>
    </Container>
  </section>

  <FooterNoContact />
</div>
