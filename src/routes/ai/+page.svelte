<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import AiContactModal from '$lib/components/AiContactModal.svelte'
  import PersonContactLinks from '$lib/components/PersonContactLinks.svelte'
  import { aiMetadata } from '$lib/content/triarc-page-metadata'
  import iris from '$lib/assets/team/iris.jpg?format=webp;png&w=400&enhanced'
  import serge from '$lib/assets/team/serge.jpg?format=webp;png&w=400&enhanced'

  let modalOpen = false
  let modalSubject = ''

  function openContact(subject: string) {
    modalSubject = subject
    modalOpen = true
  }

  // The "problem" cards mirror the three brand colours from the design.
  const problemCards = [
    {
      color: 'bg-red-triarc',
      text: 'Alle reden von KI, aber was davon bringt Ihrem Unternehmen tatsächlich etwas?',
    },
    {
      color: 'bg-green-triarc-deep',
      text: 'Sie hätten Ideen für bessere Abläufe, aber kein Tech-Team, das sie umsetzen kann.',
    },
    {
      color: 'bg-blue-triarc',
      text: 'Sie wollen nicht blind in Tools investieren, die am Ende nicht zu Ihnen passen.',
    },
  ]

  const people = [
    {
      name: 'Iris Zenegaglia',
      role: 'Management-, Strategie- und Digitalisierungsberaterin / Partnerin',
      description: 'Iris versteht Ihr Business und findet die richtigen Ansätze.',
      image: iris,
      email: 'iris@triarc-labs.com',
      linkedin: 'https://www.linkedin.com/in/iriszenegagliagloor/',
    },
    {
      name: 'Serge Müller',
      role: 'CEO / Partner',
      description: 'Serge sorgt dafür, dass aus Ideen funktionierende Lösungen werden.',
      image: serge,
      email: 'serge@triarc-labs.com',
      linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
    },
  ]
</script>

<MetaHead pageMetadata={aiMetadata}></MetaHead>

<!-- id="ad" anchors the campaign URL https://triarc-labs.com/ai#ad to the top of the page -->
<div id="ad" class="flex min-h-screen flex-col">
  <!-- ===== Hero ===== -->
  <section
    class="relative overflow-hidden bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended text-white"
  >
    <Container>
      <div class="flex flex-col items-center py-24 text-center md:py-32">
        <Reveal y={16}>
          <h1 class="text-4xl font-bold leading-tight tracking-tight md:text-5xl md:leading-tight">
            Ihr Unternehmen.<br />Smarter mit KI.
          </h1>
        </Reveal>
        <Reveal y={16} delay={100}>
          <p class="mt-6 max-w-2xl text-lg text-white">
            KI richtig einsetzen, bevor es die Konkurrenz tut. Wir zeigen Ihnen das Potenzial Ihres Unternehmens.
          </p>
        </Reveal>
        <Reveal y={16} delay={200} class="w-full md:w-auto">
          <button
            type="button"
            on:click={() => openContact('Anfrage kostenloses Erstgespräch')}
            class="mt-10 inline-flex w-full items-center justify-between gap-x-2 rounded-full text-left md:w-auto md:justify-center bg-white px-7 py-3 text-sm font-medium md:text-base text-black shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-triarc-blended"
          >
            Kostenloses Erstgespräch vereinbaren
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Reveal>
      </div>
    </Container>
  </section>

  <!-- ===== Ausgangslage ===== -->
  <section class="bg-white">
    <Container>
      <div class="py-16 md:py-24">
        <Reveal y={16}>
          <span class="text-sm font-bold uppercase tracking-widest text-gray-500">Ausgangslage</span>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kommt Ihnen das bekannt vor?</h2>
        </Reveal>

        <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {#each problemCards as card, i}
            <Reveal y={16} delay={i * 100}>
              <div class="flex h-full rounded-xl {card.color} p-6">
                <p class="text-base font-medium leading-relaxed text-white">{card.text}</p>
              </div>
            </Reveal>
          {/each}
        </div>

        <Reveal y={16}>
          <p class="mt-12 text-lg font-bold text-gray-900">Dann sind Sie hier genau richtig!</p>
          <p class="mt-5 max-w-3xl text-base leading-7 text-black">
            Wir arbeiten mit kleinen und mittleren Unternehmen aus den unterschiedlichsten Branchen. Vom Handwerk über
            Dienstleistung bis zur Industrie.
          </p>
          <p class="mt-5 max-w-3xl text-base leading-7 text-black">
            In einem Kennenlern-Gespräch besprechen wir Herausforderungen und mögliches Potenzial und zeigen Ihnen auf,
            wo wir Ihr Unternehmen anhand massgeschneiderten Agentic KI Lösungen unterstützen können.
          </p>

          <button
            type="button"
            on:click={() => openContact('Anfrage kostenloses Kennenlern-Gespräch')}
            class="mt-9 inline-flex w-full items-center justify-between gap-x-2 rounded-full text-left md:w-auto md:justify-center bg-black px-6 py-3 text-sm font-medium md:text-base text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
          >
            Lassen Sie uns gemeinsam hinschauen
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Reveal>
      </div>
    </Container>
  </section>

  <!-- ===== Unser Angebot ===== -->
  <section class="bg-gradient-to-br from-green-triarc-blended to-blue-triarc-blended text-white">
    <Container>
      <div class="py-16 md:py-24">
        <Reveal y={16}>
          <div class="text-center">
            <span class="text-sm font-bold uppercase tracking-widest text-white/70">Unser Angebot</span>
            <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Klar. Konkret. Auf Sie zugeschnitten.</h2>
          </div>
        </Reveal>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Reveal y={16}>
            <div class="flex h-full flex-col rounded-2xl bg-white p-8 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900">KI-Potenzialberatung für Ihr Unternehmen</h3>
              <p class="mt-4 flex-grow text-base leading-7 text-black">
                Wo lohnt sich KI bei Ihnen wirklich? Wir analysieren Ihre Prozesse und zeigen Ihnen ehrlich, was möglich
                ist. Am Ende wissen Sie genau, wo Sie ansetzen können.
              </p>
              <div>
                <button
                  type="button"
                  on:click={() => openContact('Anfrage KI-Potenzialberatung')}
                  class="mt-6 inline-flex w-full items-center justify-between gap-x-2 rounded-full text-left md:w-auto md:justify-center bg-black px-6 py-3 text-sm font-medium md:text-base text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
                >
                  KI-Potenzialberatung anfragen
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal y={16} delay={100}>
            <div class="flex h-full flex-col rounded-2xl bg-white p-8 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900">Ihre Idee als Prototyp — in wenigen Tagen</h3>
              <p class="mt-4 flex-grow text-base leading-7 text-black">
                Sie haben eine Idee für ein Tool oder einen besseren Ablauf? Wir bauen daraus in wenigen Tagen einen
                funktionierenden Prototypen. Sie sehen Ihre Idee live, bevor Sie gross investieren.
              </p>
              <div>
                <button
                  type="button"
                  on:click={() => openContact('Besprechung Prototyp-Idee')}
                  class="mt-6 inline-flex w-full items-center justify-between gap-x-2 rounded-full text-left md:w-auto md:justify-center bg-black px-6 py-3 text-sm font-medium md:text-base text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
                >
                  Prototyp besprechen
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>

  <!-- ===== Über uns / Ansprechpersonen ===== -->
  <section class="bg-white">
    <Container>
      <div class="py-16 md:py-24">
        <Reveal y={16}>
          <div class="text-center">
            <span class="text-sm font-bold uppercase tracking-widest text-gray-500">Über uns</span>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ihre Ansprechpersonen</h2>
          </div>
        </Reveal>

        <div class="mx-auto mt-12 grid max-w-[912px] grid-cols-1 gap-6 md:grid-cols-2">
          {#each people as person, i}
            <Reveal y={16} delay={i * 100}>
              <div
                class="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-sm md:flex-row md:gap-5"
              >
                <!-- Image: 108px tall on mobile, full card height on desktop -->
                <div
                  class="h-[108px] w-24 flex-none self-start overflow-hidden rounded-xl md:h-full md:self-stretch [&>picture]:block [&>picture]:h-full"
                >
                  <enhanced:img src={person.image} alt={person.name} class="h-full w-full object-cover" />
                </div>
                <!-- Text with the contact icons placed below it -->
                <div class="min-w-0 md:flex-1">
                  <h3 class="text-lg font-bold text-gray-900">{person.name}</h3>
                  <p class="text-sm text-gray-600">{person.role}</p>
                  <p class="mt-3 text-sm leading-6 text-black">{person.description}</p>
                  <div class="mt-4 flex items-center gap-x-4">
                    <PersonContactLinks name={person.name} email={person.email} linkedin={person.linkedin} />
                  </div>
                </div>
              </div>
            </Reveal>
          {/each}
        </div>
      </div>
    </Container>
  </section>

  <!-- ===== Final CTA ===== -->
  <section class="bg-gradient-to-br from-blue-triarc-blended to-red-triarc-blended text-white">
    <Container>
      <div class="flex flex-col items-center py-16 text-center md:py-24">
        <Reveal y={16}>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Bereit? Sprechen wir darüber.</h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg text-white">
            Ein kurzes Gespräch reicht, um herauszufinden, ob und wie KI Ihrem Unternehmen helfen kann.
          </p>
        </Reveal>

        <Reveal y={16} delay={100}>
          <div class="mt-8 flex flex-col items-center gap-4 text-base sm:flex-row sm:gap-8">
            <a href="tel:+41442791000" class="flex items-center gap-x-2 transition hover:text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              +41 44 279 10 00
            </a>
            <a
              href="mailto:development@triarc-labs.com"
              class="flex items-center gap-x-2 transition hover:text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              development@triarc-labs.com
            </a>
            <span class="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Mon-Fri 09:00 - 18:00
            </span>
          </div>
        </Reveal>

        <Reveal y={16} delay={200} class="w-full md:w-auto">
          <button
            type="button"
            on:click={() => openContact('Anfrage kostenloses Kennenlernen')}
            class="mt-10 inline-flex w-full items-center justify-between gap-x-2 rounded-full text-left md:w-auto md:justify-center bg-white px-7 py-3 text-sm font-medium md:text-base text-black shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-triarc-blended"
          >
            Kostenloses Kennenlernen vereinbaren
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Reveal>
      </div>
    </Container>
  </section>
</div>

<AiContactModal bind:open={modalOpen} subject={modalSubject} on:close={() => (modalOpen = false)} />
