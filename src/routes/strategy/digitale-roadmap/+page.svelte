<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import heroImage from '$lib/assets/hero/Beratung.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { strategyDigitaleRoadmapMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Wenn viele Ideen – aber wenig Kapazität',
      content:
        '<a class="underline text-blue-triarc" href="/strategy">Strategie</a> · Viele Unternehmen sammeln digitale Initiativen, ohne sie tragfähig zu priorisieren. Das Ergebnis: parallele Projekte, erschlagene Teams und Software, die nicht zur kritischen Masse wird.<br/><br/>' +
        'Wir helfen, aus der Fülle von Möglichkeiten eine <strong>klare Reihenfolge</strong> zu machen: Was bringt dem Geschäft den grössten Nutzen? Was ist technisch oder organisatorisch vorgängig? Wo lohnt ein schlanker Proof of Concept, wo braucht es eine Plattform?',
    },
    {
      title: 'Was Sie von uns erwarten können',
      bulletPoints: [
        'Gemeinsame IST-Aufnahme: Prozesse, Systeme, Datenflüsse und Schmerzpunkte – nicht nur IT, sondern End-to-end.',
        'Abgleich mit Geschäftszielen: welche KPIs oder Kundenerlebnisse sollen sich verbessern?',
        'Roadmap mit Etappen: Quick Wins, Fundament (z. B. Daten/Integration) und grössere Releases.',
        'Entscheidungsvorlagen für Geschäftsleitung und IT: Aufwand, Risiko, Abhängigkeiten.',
      ],
    },
    {
      title: 'Passt das zu Ihnen?',
      content:
        'Ideal, wenn Sie eine neue Software-Idee haben, aber unsicher sind, <strong>wo Sie anfangen</strong>, oder wenn mehrere Abteilungen unterschiedliche Prioritäten vertreten. Wir moderieren den Prozess und übersetzen ihn in Pläne, die sich mit <a class="underline text-blue-triarc" href="/custom-software">Custom Software</a> umsetzen lassen.',
      link: { href: '/consulting', text: 'Beratung anfragen', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={strategyDigitaleRoadmapMetadata} />

<div class="bg-white">
  <Hero
    title="Digitale Roadmap & Priorisierung"
    content="Von der IST-Situation zum Plan, den Ihre Organisation tragen kann – mit klaren Etappen statt endloser Wunschlisten."
    image={heroImage}
    imageAlt="Digitale Roadmap – triarc laboratories"
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <Footer />
</div>
