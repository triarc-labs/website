<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { strategyMenschenOrganisationMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Die beste Software nützt nichts ohne Adoption',
      content:
        '<a class="underline text-blue-triarc" href="/strategy">Strategie</a> scheitert selten an Technologie – häufig an fehlendem gemeinsamen Bild, an Sorge vor Kontrollverlust oder an Alltagsstress. Ohne diese Themen adressiert zu haben, bleiben neue Tools ungenutzt.<br/><br/>' +
        'Wir arbeiten eng mit Ihrer <a class="underline text-blue-triarc" href="/consulting">Beratung und Ihren Führungsteams</a> zusammen: Ziele verständlich machen, Rollen klären und Mitarbeitende früh einbinden, damit Lösungen im Alltag ankommen.',
    },
    {
      title: 'Typische Hebel',
      bulletPoints: [
        'Kommunikation und Story: Warum ändert sich etwas – und was gewinnen die Menschen konkret?',
        'Co-Kreation mit Key Usern: Anforderungen aus der Praxis, nicht nur aus dem Konferenzraum.',
        'Schulung und Enablement: kurze, wiederholbare Formate statt einmaliger Gross-Events.',
        'Messbare Nutzung: Feedback-Schleifen und Anpassungen nach Go-Live, nicht «fertig und weg».',
      ],
    },
    {
      title: 'Software + Veränderung aus einer Hand',
      content:
        'triarc verbindet <strong>Custom Software</strong> mit organisatorischer Begleitung. So entsteht keine Lücke zwischen «das haben die Entwickler gebaut» und «so arbeiten wir wirklich».',
      link: { href: '/contact', text: 'Gespräch vereinbaren', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={strategyMenschenOrganisationMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Strategie"
    title="Menschen, Organisation & Wirkung"
    content="Digitalisierung, die sich nachhaltig verankert – weil Führung, Prozesse und Teams von Anfang an mitgedacht sind."
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <Footer />
</div>
