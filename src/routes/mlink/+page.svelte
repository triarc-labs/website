<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { mlinkMetadata } from '$lib/content/triarc-page-metadata'

  import mLinkTree from '$lib/assets/img/mlink/mLink_tree.svg'
  import mLinkPoster from '$lib/assets/img/thumbnail/mlink-1080-poster.png'
  import mLinkDatenfluss from '$lib/assets/img/mlink/mLink_Datenfluss.svg'
  import monitoring from '$lib/assets/img/mlink/Monitoring.svg'
  import businessIntelligence from '$lib/assets/img/mlink/BusinessIntelligence.svg'
  import eblLogo from '$lib/assets/img/customer/ebl-logo.svg'
  import glbLogo from '$lib/assets/img/customer/glb-logo.svg'
  import riwaxLogo from '$lib/assets/img/customer/riwax-logo.svg'
  import orthoTeamLogo from '$lib/assets/img/customer/ortho-team-logo.svg'
  import kibagLogo from '$lib/assets/img/customer/kibag-logo.svg'
  import waloLogo from '$lib/assets/img/customer/walo-logo.svg'

  let contents: BlockContent[] = [
    {
      title: 'Ein digitales Ökosystem',
      content:
        'ERP, CRM, Disposition, Zeiterfassung, Projektsoftware, HR Suite, Lagerbewirtschaftung usw. sind mit µLink in einem einzigen digitalen Ökosystem vereint. <br/><br/>' +
        'Unternehmen, die konsequent auf digitale Lösungen setzen, haben einen klaren Wettbewerbsvorteil. Dabei wird mithilfe unterschiedlicher Softwarelösungen ein Prozess nach dem anderen digitalisiert. Durch dieses stetig wachsende und sich verändernde Ökosystem entsteht das Bedürfnis die Datenflüsse zu managen. <br/><br/>' +
        'Essenziell sind dabei Bedürfnisse wie das Verhindern manueller Arbeitsschritte, die direkte Zusammenarbeit von Mitarbeitern über Systemgrenzen hinweg, sowie das schnelle Finden aller massgebenden Informationen in den angebundenen Softwarelösungen. µLink liefert dafür die hochmoderne und effiziente Lösung mit dem Fokus auf Echtzeitkommunikation und Sicherheit.',
      image: { src: mLinkTree, alt: 'mlink logo' },
    },
    {
      video: {
        videoTitle: 'μLink der Kommunikationshub',
        videoId: 'mlink',
        poster: mLinkPoster,
        embedded: false,
        sources: [
          {
            src: 'https://storage.googleapis.com/triarc-website/mlink-1080-v2.webm',
            type: 'video/webm',
          },
          {
            src: 'https://storage.googleapis.com/triarc-website/mlink-v2.mp4',
            type: 'video/mp4',
          },
        ],
      },
    },
    {
      title: 'Softwareökosystem',
      image: { src: mLinkDatenfluss, alt: 'mlink ecosystem' },
      content:
        'Schritt für Schritt zur perfekten Schnittstelle. Bei der Digitalisierung von Geschäftsprozessen kommen meist mehrere Softwaresysteme zum Einsatz. Die Schnittstellen zwischen den verschiedenen Systemen mit unterschiedlichen Technologien stellt Unternehmen vor grosse Herausforderungen. µLink vereinfacht als zentrale Instanz die Schnittstellenproblematik, vernetzt die verschiedenen Systeme und ermöglicht damit die ' +
        'zentrale Bewirtschaftung der Schnittstellen. So kann mit minimalem Aufwand neue ' +
        'Software ins Ökosystem integriert oder bestehende abgelöst werden.',
    },
    {
      title: 'Monitoring',
      content:
        'Mit µLink lassen sich die Datenflüsse zwischen Softwaresystemen zentral observieren. Bei einem Ausfall, einer Abnahme der Leistung oder weiterer konfigurierbarer Parameter kann proaktiv alarmiert werden. Über das Grafana-Dashboard lassen sich alle systemrelevanten Komponenten in Echtzeit überwachen und visualisieren.',
      image: { src: monitoring, alt: 'borders' },
    },
    {
      title: 'Business Intelligence',
      content:
        'In der heutigen Zeit werden Erkenntnisse aufgrund von Daten immer wertvoller. Somit nehmen Systeme, die es ermöglichen aktuelle Daten zu sammeln, kombiniert bereitzustellen und diese zu interpretieren, eine immer wichtigere Rolle für erfolgreiche Unternehmen ein.' +
        'Eine zentrale Funktionalität von µLink ist der Zugriff auf komplexe Daten in Echtzeit. Die Kombination der Daten (wie Stammdaten, Betriebsdaten, temp. Daten) aus verschiedenen Systemen erlauben eine umfassende Einsicht und eröffnen neue Möglichkeiten, um basierend auf Algorithmen oder künstlicher Intelligenz überzeugende Entscheidungen zu treffen. Beispielsweise ermöglicht µLink die einfache Echtzeit-Integration ins Power BI von Microsoft.',
      image: { src: businessIntelligence, alt: 'scale' },
    },
    {
      title: 'Die Vorteile von µLink im Überblick',
      cards: [
        {
          title: 'Klare Grenzen',
          content:
            'Das ERP muss nicht verschiedenste Systeme mit Exporten bedienen und kann seine Ressourcen ausschliesslich für den eigenen Betrieb verwenden. Die Last, welche durch die Kommunikation mit Umsystemen entsteht, wird transparent und explizit verwaltbar. Datentransformationen, welche Umsystem-spezifisch sind, sind nicht mehr Teil des ERP internen Ablaufs.',
        },
        {
          title: 'Skalierbarkeit',
          content:
            'Die Verfügbarkeit der Informationen kann \n' +
            'unabhängig vom ERP ausgebaut werden. \n' +
            'µLink ist nicht von Auslastungsspitzen des Ökosystems betroffen. Es ist dank der Microservice Architektur von µLink sogar möglich einzelne Aspekte der Schnittstelle einzeln zu skalieren. µLink kann On-Premise oder in der Cloud betrieben werden.\n',
        },
        {
          title: 'Schnittstellen',
          content:
            'µLink bietet mit REST und AMQP offene und vielseitige Schnittstellen an. Das Knowhow kann so mit wenig Aufwand intern aufgebaut werden. µLink setzt bewusst auf offene Standards um keine, nur für µLink zu erlernende, Hürde einzuführen.',
        },
        {
          title: 'Sicherheit',
          content:
            'Sämtliche Kommunikation erfolgt ausschliesslich via HTTPS und TLS und bedarf einer Authentifizierung. Die Komponenten von µLink sind hochverfügbar und erlauben einen Ausfall von einzelnen Containern, ohne die Funktion zu mindern. Es besteht die Möglichkeit µLink in ein Monitoring System für kritische Systeme zu integrieren. µLink bietet Möglichkeiten zur Kontrolle des Zugriffs und der Verwendung der Schnittstellen durch Umsysteme. Sogar Daten lassen sich benutzerspezifisch maskieren.',
        },
        {
          title: 'Versionierung',
          content:
            'Die von µLink für die Umsysteme zur Verfügung gestellte Schnittstelle ist versionssicher, d.h. Anpassungen und Updates am ERP führen nicht zu Tests und Anpassungen an allen abhängigen Systemen, sondern beschränken sich auf µLink. Die Komplexität der Kommunikation wird mit dem ERP gekapselt. ',
        },
        {
          title: 'Kosteneffizienz',
          content:
            'Integratoren bewegen sich immer nur im Umfeld ihrer Applikation, somit fällt der grösste Teil der Einarbeitungskosten und Koordinationsaufwand weg. Wird ein angebotenes System ausgetauscht, muss nur die Schnittstelle zu µLink entwickelt werden. \n' +
            'Für diverse Applikationen bieten wir Standardmodule an und sind gewillt auf Kundenwunsch weitere zu erarbeiten. \n' +
            'Das Lizenzmodell von µLink könnte nicht simpler sein. Module werden einmalig erworben, danach verwenden Sie µLink so oft und mit so vielen Usern wie Sie wollen.\n',
        },
      ],
    },
  ]

  const customerQuotes = [
    {
      logo: eblLogo,
      logoAlt: 'EBL',
      logoCss: 'h-16',
      content:
        'μLink ist die Datendrehscheibe, welche Microsoft Dynamics AX und das Data Warehouse mit unseren Applikationen in Echtzeit vernetzt',
      person: 'Philippe Kienner',
      personTitle: 'CIO',
    },
    {
      logo: glbLogo,
      logoAlt: 'GLB',
      logoCss: 'h-16',
      content: 'Mit μLink erweitern wir ABACUS nach Belieben',
      person: 'Ueli Grossen',
      personTitle: 'CIO',
    },
    {
      logo: riwaxLogo,
      logoAlt: 'Riwax',
      logoCss: 'h-10',
      content: 'μLink bindet unseren Aussendienst eng in unseren Betrieb ein',
      person: 'Michel Scherz',
      personTitle: 'Purchasing Manager',
    },
    {
      logo: orthoTeamLogo,
      logoAlt: 'Ortho-Team',
      logoCss: 'h-10',
      content: 'μLink verbindet unsere Mitarbeiter von der Kundenberatung ohne Zeitverlust direkt zum Techniker',
      person: 'Patrick Rohrer',
      personTitle: 'CFO',
    },
    {
      logo: kibagLogo,
      logoAlt: 'KIBAG',
      logoCss: 'h-16',
      content: 'μLink liefert uns die Grundlage für die digitale Bauakte',
      person: 'Yves Stucki',
      personTitle: 'CIO',
    },
    {
      logo: waloLogo,
      logoAlt: 'WALO',
      logoCss: 'h-16',
      content: 'μLink ist die zentrale Datendrehscheibe in unserem Ökosystem',
      person: 'Roger Bühlmann',
      personTitle: 'Group CIO',
    },
  ]
</script>

<MetaHead pageMetadata={mlinkMetadata} />

<div class="bg-white">
  <GradientHero
    kicker="Lösungen"
    title="μLink Datahub"
    content="Die Schnittstellenlösung, welche Ihre komplette Software-Infrastruktur unter einen Hut bringt – hochmodern, effizient und mit Fokus auf Echtzeitkommunikation und Sicherheit."
  />

  {#each contents as content}
    <Block bind:content />
  {/each}

  <section class="bg-gray-50 py-16 md:py-24">
    <Container>
      <Reveal>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Das sagen unsere Kunden</h2>
      </Reveal>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each customerQuotes as quote, index}
          <Reveal delay={(index % 3) * 100} class="h-full">
            <figure class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <img src={quote.logo} alt={quote.logoAlt} class="{quote.logoCss} self-start object-contain" />
              <blockquote class="mt-6 flex-grow text-base leading-relaxed text-gray-600">
                «{quote.content}»
              </blockquote>
              <figcaption class="mt-6 text-base">
                <span class="font-bold text-gray-900">{quote.person}</span>
                <span class="text-gray-500"> · {quote.personTitle}</span>
              </figcaption>
            </figure>
          </Reveal>
        {/each}
      </div>
    </Container>
  </section>

  <FooterNoContact />
</div>
