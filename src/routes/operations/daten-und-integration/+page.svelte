<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { operationsDatenIntegrationMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Jede manuelle Übertragung ist ein Risiko',
      content:
        'Wenn CRM, ERP, Zeiterfassung und Fachapps nicht dieselbe Wahrheit sprechen, entstehen Rückfragen, Fehlbuchungen und verlorenes Vertrauen. <a class="underline text-blue-triarc" href="/operations">Operative Exzellenz</a> braucht <strong>zuverlässige Datenflüsse</strong>.<br/><br/>' +
        'Wir integrieren Systeme gezielt: punktuell über APIs und Massnahmen in Ihrer bestehenden Software, oder breiter mit unserem <a class="underline text-blue-triarc" href="/mlink">μLink Datahub</a> für Echtzeit und Observability in der gesamten Landschaft.',
    },
    {
      title: 'Wofür sich der Aufwand lohnt',
      bulletPoints: [
        'Weniger Doppelarbeit zwischen Büro, Feld und Partnern.',
        'Schnellere Entscheidungen, weil Kennzahlen und Auftragsstatus aktuell sind.',
        'Bessere Auditierbarkeit: nachvollziehbare Prozesse statt Excel-Insellösungen.',
        'Fundament für neue Kanäle (Self-Service, Partnerportale, Automatisierung).',
      ],
    },
    {
      title: 'Gemeinsam die richtige Tiefe wählen',
      content:
        'Manchmal reicht eine gezielte Schnittstelle; manchmal lohnt sich ein Hub. Wir empfehlen, was zu Ihrer Grösse, Ihrem Tempo und Ihrem Risiko passt – technisch sauber und wirtschaftlich sinnvoll.',
      link: { href: '/mlink', text: 'μLink ansehen', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={operationsDatenIntegrationMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Operationen"
    title="Daten, ERP & Integration"
    content="Eine konsistente Systemlandschaft – damit operative Teams und Geschäftsführung dieselben Fakten sehen."
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <FooterNoContact />
</div>
