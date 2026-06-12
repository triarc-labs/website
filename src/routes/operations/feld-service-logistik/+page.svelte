<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { operationsFeldLogistikMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Papier, Funk und Excel kosten mehr als Lizenzgebühren',
      content:
        '<a class="underline text-blue-triarc" href="/operations">Operationen</a> im Feld und in der Disposition leben von Geschwindigkeit und korrekten Daten. Wenn Informationen zu spät oder doppelt erfasst werden, leidet die Planung, die Verrechnung und am Ende die Kundenzufriedenheit.<br/><br/>' +
        'Wir entwickeln <strong>massgeschneiderte Mobile- und Web-Lösungen</strong> für genau Ihre Prozesse – von der Tour über Rapportierung bis zur Unterschrift und ERP-Rückmeldung. Siehe auch unsere <a class="underline text-blue-triarc" href="/references">Referenzen</a> in Logistik, Chemie und Bau.',
    },
    {
      title: 'Das lösen wir typischerweise',
      bulletPoints: [
        'Disposition und Chauffeur: Aufträge, Ladelisten, ADR-/Transportdokumente digital und revisionssicher.',
        'Rapportierung von Zeit, Material und Leistungen – auch offlinefähig, wo das Netz dünn ist.',
        'Echtzeit oder Tagesende: saubere Übergabe ins ERP (z. B. ABACUS) für Verrechnung und Controlling.',
        'Weniger Schulungsaufwand durch konsequentes UX-Design für heterogene Nutzergruppen.',
      ],
    },
    {
      title: 'Nächster Schritt',
      content:
        'Erzählen Sie uns von Ihrem Ist-Prozess – wir schlagen einen pragmatischen Startpunkt vor (MVP) und skizzieren, wie sich die Lösung ausweiten lässt.',
      link: { href: '/custom-software', text: 'Custom Software entdecken', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={operationsFeldLogistikMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Operationen"
    title="Feld, Service & Logistik digital"
    content="Mobile Abläufe, die im Ernstfall funktionieren – mit Daten, die Ihr ERP und Ihre Kundinnen verlassen können."
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <Footer />
</div>
