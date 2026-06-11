<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import FairPizza from '$lib/assets/img/lab/fairpizza-dashboard.png?format=webp;png&w=500&enhanced'
  import Slothi from '$lib/assets/img/lab/slothi.png?format=webp;png&w=500&enhanced'
  import { labMetadata } from '$lib/content/triarc-page-metadata'

  let email = ''
  let submitted = false

  function submitNewsletter() {
    if (submitted) {
      return
    }

    plausible('subscribed-for-lab')
    const url = `https://assets.mailerlite.com/jsonp/27919/forms/52893614102021803/subscribe?fields%5Bemail%5D=${email}&ajax=1&guid=e5e887ce-74f8-b1da-0911-b9314e0e7247`
    const req = new XMLHttpRequest()
    req.open('GET', url)
    req.send()

    submitted = true
  }

  const experiments = [
    {
      number: '01',
      name: 'Slothi',
      status: 'Live',
      accentText: 'text-indigo-400',
      accentBg: 'bg-indigo-500',
      lead: 'Slothi soll deine Terminprobleme lösen. Eine smarte Lösung, welche dir den passenden Termin für alle Teilnehmer findet.',
      description:
        'Damit du möglichst einfach einen Termin planen kannst, wählst du den Zeitraum in welchem der Termin stattfinden soll. Die erforderliche Zeitdauer und die Teilnehmer welche daran teilnehmen sollen. Ab da übernimmt Slothi für dich und prüft die Verfügbarkeiten aller Teilnehmer. Du erhältst eine Auswahl an möglichen Terminvorschlägen und kannst einen fixen Termin einplanen.',
      image: Slothi,
      imageAlt: 'slothi',
      links: [{ href: 'https://slothi.ch', text: 'Mehr erfahren', primary: true }],
    },
    {
      number: '02',
      name: 'Fair Pizza',
      status: 'Live',
      accentText: 'text-red-400',
      accentBg: 'bg-red-500',
      lead: 'Fair Pizza bietet Restaurants eine einfache und günstige Alternative ihr Angebot selbständig online zu verkaufen. Die Whitelabel Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem Pizzabuilder. Mit Stripe lassen sich die Zahlungen bequem online abwickeln.',
      description:
        'Die Auslieferung erfolgt über eigene Wege oder über einen unserer lokalen <a target="_blank" class="underline" href="https://www.ultrakurier.ch/" rel="noreferrer">Partner</a>.',
      image: FairPizza,
      imageAlt: 'fairpizza dashboard',
      links: [
        { href: 'https://fairpizza.ch', text: 'Mehr erfahren', primary: true },
        { href: 'https://demo.fairpizza.ch', text: 'Demo', primary: false },
      ],
    },
  ]
</script>

<MetaHead pageMetadata={labMetadata} />

<div class="bg-gray-950 text-white">
  <!-- Hero -->
  <section class="relative overflow-hidden border-b border-white/10">
    <TriarcOrbits focusX={0.75} focusY={0.5} opacity={0.8} />
    <div class="relative">
      <Container>
        <div class="flex flex-col items-start py-32 md:py-44 lg:max-w-2xl">
          <Reveal y={16}>
            <span
              class="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-bold tracking-widest uppercase"
            >
              triarc Lab
            </span>
          </Reveal>
          <Reveal y={16} delay={100}>
            <h1 class="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Hier experimentieren <br />wir an morgen.
            </h1>
          </Reveal>
          <Reveal y={16} delay={200}>
            <p class="mt-6 text-xl text-gray-300">
              Willkommen im Lab von triarc. Hier erfährst du mehr zu den entstandenen Produkten, welche wir im Rahmen
              des Labs entwickeln.
            </p>
          </Reveal>
        </div>
      </Container>
    </div>
  </section>

  <!-- Experiments -->
  {#each experiments as experiment, index}
    <section class="border-b border-white/10 {index % 2 === 1 ? 'bg-gray-900' : ''}">
      <Container>
        <Reveal>
          <div
            class="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 {index % 2 === 1
              ? 'lg:[&>*:first-child]:order-last'
              : ''}"
          >
            <div>
              <div class="flex items-center gap-x-4">
                <span class="text-sm font-bold tracking-widest text-gray-500">EXPERIMENT {experiment.number}</span>
                <span
                  class="rounded-full {experiment.accentBg} px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white"
                >
                  {experiment.status}
                </span>
              </div>
              <h2 class="mt-4 text-3xl font-bold tracking-tight {experiment.accentText}">{experiment.name}</h2>
              <p class="mt-4 text-lg text-gray-100">{experiment.lead}</p>
              <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
              <p class="mt-4 text-lg text-gray-400">{@html experiment.description}</p>
              <div class="mt-8 flex flex-wrap items-center gap-4">
                {#each experiment.links as link}
                  {#if link.primary}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full {experiment.accentBg} px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {link.text}
                    </a>
                  {:else}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      class="text-base font-bold {experiment.accentText} hover:underline"
                    >
                      {link.text} →
                    </a>
                  {/if}
                {/each}
              </div>
            </div>
            <div class="flex justify-center">
              <EnhancedImage
                image={experiment.image}
                alt={experiment.imageAlt}
                imgClass="w-full max-w-lg rounded-2xl ring-1 ring-white/10 shadow-2xl"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  {/each}

  <!-- Coming soon + newsletter -->
  <section>
    <Container>
      <Reveal>
        <div class="grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div class="flex items-center gap-x-4">
              <span class="text-sm font-bold tracking-widest text-gray-500">EXPERIMENT 03</span>
              <span
                class="rounded-full border border-white/20 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-gray-300"
              >
                Coming soon
              </span>
            </div>
            <div
              class="mt-6 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5"
            >
              <span class="text-6xl text-gray-500">?</span>
            </div>
            <p class="mt-6 text-lg text-gray-300">
              Das nächste Experiment ist bereits in Arbeit. Was es wird, verraten wir noch nicht.
            </p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 class="text-2xl font-bold">Bist du interessiert an unseren Projekten?</h2>
            <p class="mt-2 text-base text-gray-400">Wir halten dich gerne auf dem Laufenden.</p>
            <form on:submit|preventDefault={submitNewsletter} class="mt-6 flex flex-col gap-4 sm:flex-row">
              {#if !submitted}
                <div class="min-w-0 flex-grow">
                  <label for="cta-email" class="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    type="email"
                    bind:value={email}
                    class="block w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base text-white placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-triarc"
                    placeholder="Deine Email"
                  />
                </div>
              {/if}
              <button
                type="submit"
                class="rounded-full bg-green-triarc px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
              >
                {submitted ? 'Besten Dank!' : 'Newsletter abonnieren'}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
</div>

<Footer />
