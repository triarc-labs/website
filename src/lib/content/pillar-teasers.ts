export type PillarTeaserLink = {
  href: string
  title: string
  description: string
}

export type PillarTeaserBlock = {
  sectionTitle: string
  intro: string
  links: PillarTeaserLink[]
}

export const strategyPillarTeasers: PillarTeaserBlock = {
  sectionTitle: 'Strategie vertiefen',
  intro:
    'Wenn Digitalisierung scheitert, fehlt selten die Technik – sondern Klarheit über Ziele, Prioritäten und Veränderung im Alltag. Hier zeigen wir, wie wir Sie dabei unterstützen.',
  links: [
    {
      href: '/strategy/digitale-roadmap',
      title: 'Digitale Roadmap & Priorisierung',
      description:
        'Von der IST-Situation zum umsetzbaren Plan: Was lohnt sich zuerst, welche Abhängigkeiten gibt es, und wie machen Sie den Business Case für Entscheidende greifbar?',
    },
    {
      href: '/strategy/menschen-und-veraenderung',
      title: 'Menschen, Organisation & Wirkung',
      description:
        'Strategie wirkt nur, wenn Teams sie tragen. Change, Führung und Prozesse so ausrichten, dass neue Software nicht nur eingeführt, sondern gelebt wird.',
    },
  ],
}

export const operationsPillarTeasers: PillarTeaserBlock = {
  sectionTitle: 'Operationen vertiefen',
  intro:
    'Der grösste Hebel für Zufriedenheit von Kunden und Mitarbeitenden liegt oft im Tagesgeschäft: weniger Doppelarbeit, klarere Daten, schnellere Abläufe.',
  links: [
    {
      href: '/operations/feld-service-logistik',
      title: 'Feld, Service & Logistik digital',
      description:
        'Mobile Apps für Aussendienst, Disposition und Lager: Rapportierung, Touren, Unterschriften und ERP-Rückfluss – damit Ihre operativen Teams im Fluss bleiben.',
    },
    {
      href: '/operations/daten-und-integration',
      title: 'Daten, ERP & Systemlandschaft',
      description:
        'Konsistente Daten über ABACUS, Fachsoftware und Mobile Apps. Weniger Schnittstellen-Chaos, mehr Transparenz – mit massgeschneiderter Integration und μLink.',
    },
  ],
}

export const futurePillarTeasers: PillarTeaserBlock = {
  sectionTitle: 'Zukunft vertiefen',
  intro:
    'Wettbewerbsfähigkeit ist kein einmaliges Projekt. Wir helfen, Lösungen und Architekturen so zu denken, dass Wachstum, neue Kanäle und Technologien tragfähig bleiben.',
  links: [
    {
      href: '/future/skalierung-und-plattformen',
      title: 'Skalierung & Plattformdenken',
      description:
        'Modulare Plattformen, klare Domänen und erweiterbare Services – statt monolithischer Insellösungen, die jedes neue Geschäftsmodell bremsen.',
    },
    {
      href: '/future/innovation-als-daueraufgabe',
      title: 'Innovation als Daueraufgabe',
      description:
        'Von KI-gestütztem Voice Reporting bis zu MVPs und Lab-Spin-offs: Ideen strukturiert erproben und produktiv machen, ohne den laufenden Betrieb zu gefährden.',
    },
  ],
}
