import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
import cal from '$lib/assets/references/cal.png?w=768&format=webp;png&metadata&enhanced'
import orthoOrder from '$lib/assets/references/ortho-order.png?w=768&format=webp;png&metadata&enhanced'
import chauffeur from '$lib/assets/references/chauffeur.png?w=768&format=webp;png&metadata&enhanced'
import gear from '$lib/assets/icons/gear-light-full.svg'

export const operationSectionContent: TriarcSubsectionDefinition = {
  main: {
    title: 'Wir reduzieren operativen Reibungsverlust.',
    description:
      'Automatisierte Abläufe, intuitive Bedienung und gezielter Wissenstransfer sorgen für reibungslose Zusammenarbeit, hochwertige Daten und eine starke operative Performance.',
    iconSource: gear,
  },
  projects: [
    {
      image: cal,
      content: {
        prefix: 'Referenz',
        title: 'CAL – Logistik und Dispo digital verzahnt.',
        description:
          'End-to-end vom Fahrzeugpark bis zum Chauffeur: Aufträge, TomTom-Anbindung, Echtzeit-Routen und automatische Rapportierung – mit ABACUS-Integration für Stammdaten und Verrechnung.',
        sectionLink: '/references',
      },
    },
    {
      image: orthoOrder,
      content: {
        prefix: 'Referenz',
        title: 'Ortho-Order – Einkauf und Bestellungen im Griff.',
        description:
          'Standortübergreifendes Bestellwesen: Lieferanten splitten, Wareneingang dokumentieren, Rechnungsabgleich – ohne Excel-Chaos und mit klaren Freigaben.',
        sectionLink: '/references',
      },
    },
    {
      image: chauffeur,
      content: {
        prefix: 'Referenz',
        title: 'Chauffeur-App – Gefahrgut, Touren, ERP in einer Hand.',
        description:
          'Digitale Ladelisten, Tourenoptimierung und sofortige Rückmeldung ins ERP – inklusive ADR-Papieren. Weniger Papier, weniger Fehler, schnellere Einarbeitung in Dispo und Fahrer-Team.',
        sectionLink: '/references',
      },
    },
  ],
}
