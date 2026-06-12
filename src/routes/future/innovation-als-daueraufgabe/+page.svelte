<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { futureInnovationDaueraufgabeMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Innovation braucht einen sicheren Sandkasten',
      content:
        'Neue Technologien (z. B. KI, Sprache, Automatisierung) versprechen viel – aber produktive Nutzung entsteht nur mit klaren Use Cases, Datengrundlagen und Rückkopplung in den Betrieb. <a class="underline text-blue-triarc" href="/future">Zukunftsfähigkeit</a> heisst für uns: <strong>experimentieren und gleichzeitig liefern</strong>.<br/><br/>' +
        'Im <a class="underline text-blue-triarc" href="/innovation">Innovation Lab</a> und in Kundenprojekten erproben wir etwa Voice Reporting, koppeln LLMs an ERP-Daten über μLink oder bauen MVPs für neue Geschäftsmodelle.',
    },
    {
      title: 'So gehen wir vor',
      bulletPoints: [
        'Problem zuerst: welche Entscheidung oder welcher Prozess soll schneller/besser werden?',
        'Kleiner Start, messbarer Nutzen – dann erweitern statt Big Bang.',
        'Integration statt Insellabor: wie fliesst das in Ihre bestehende Landschaft?',
        'Governance: Datenschutz, Qualität und Betrieb von Anfang an mitdenken.',
      ],
    },
    {
      title: 'Neugierig auf ein konkretes Experiment?',
      content:
        'Ob KI-gestützte Rapportierung, Datenprodukt oder Spin-off-Idee – sprechen Sie mit uns über Machbarkeit, Aufwand und einen sinnvollen ersten Milestone.',
      link: { href: '/innovation', text: 'Zum Innovation Lab', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={futureInnovationDaueraufgabeMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Zukunft"
    title="Innovation als Daueraufgabe"
    content="Neue Technologien strukturiert in den Betrieb bringen – ohne Stabilität und Lieferfähigkeit zu opfern."
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <FooterNoContact />
</div>
