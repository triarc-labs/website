import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
import riwax from '$lib/assets/references/riwax.png?w=768&format=webp;png&metadata&enhanced'
import mlinkPoster from '$lib/assets/img/thumbnail/mlink-1080-poster.png?w=768&format=webp;png&metadata&enhanced'
import fastspace from '$lib/assets/references/fastspace.png?w=768&format=webp;png&metadata&enhanced'
import rocket from '$lib/assets/icons/rocket-launch-light-full.svg'

export const futureSectionContent: TriarcSubsectionDefinition = {
  main: {
    title: 'Wir sichern zukünftige Wettbewerbsfähigkeit.',
    description:
      'Skalierbare Lösungen, agile Strukturen und gezielte Innovation stärken die Wettbewerbsfähigkeit und ermöglichen eine klare Positionierung mit einem einzigartigen USP.',
    iconSource: rocket,
  },
  projects: [
    {
      image: riwax,
      content: {
        prefix: 'Referenz',
        title: 'Riwaxique – Aussendienst datengetrieben.',
        description:
          'Kontakt- und Routenplanung, CRM-Daten und Bestellungen aus einer App: Ihre Teams investieren Zeit dort, wo sie den grössten Impact hat – statt in manueller Administration.',
        sectionLink: '/references',
      },
    },
    {
      image: mlinkPoster,
      content: {
        prefix: 'Produkt',
        title: 'μLink – Ökosystem, das mit Ihnen wächst.',
        description:
          'Neue Systeme, Tochtergesellschaften oder Bestands-ERP: Echtzeit-Datenflüsse halten Ihre Landschaft wartbar. So bleiben Investitionen langfristig nutzbar statt «Insel-Lösungen».',
        sectionLink: '/mlink',
      },
    },
    {
      image: fastspace,
      content: {
        prefix: 'Referenz',
        title: 'Fastspace – digitale Geschäftsmodelle.',
        description:
          'Vollständig digitale Mietprozesse mit Online-Zahlung: schnellere Abwicklung, weniger Administration und neue Angebotsformate für Kundinnen und Kunden.',
        sectionLink: '/references',
      },
    },
  ],
}
