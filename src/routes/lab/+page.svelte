<script lang="ts">
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import TriarcOrbits from '$lib/components/TriarcOrbits.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
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
</script>

<MetaHead pageMetadata={labMetadata} />

<div class="bg-gray-950 text-white">
  <!-- Hero -->
  <section class="relative overflow-hidden border-b border-white/10">
    <TriarcOrbits focusX={0.75} focusY={0.95} opacity={0.8} scale={1.7} />
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
              Willkommen im Lab von triarc. Hier erfährst du mehr über die entstandenen Produkte, die wir im Rahmen des
              Labs entwickeln.
            </p>
          </Reveal>
        </div>
      </Container>
    </div>
  </section>

  <!-- Coming soon + newsletter -->
  <section>
    <Container>
      <Reveal>
        <div class="grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div class="flex items-center gap-x-4">
              <span class="text-sm font-bold tracking-widest text-gray-500">EXPERIMENT 01</span>
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
                class="rounded-full bg-green-triarc-deep px-7 py-3 text-base font-bold text-white shadow transition duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
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

<FooterNoContact />
