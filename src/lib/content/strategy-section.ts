import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
import teamwerk from '$lib/assets/img/strategy/TeamWerkExample.png?w=768&format=webp;png&metadata&enhanced'
import orthoClient from '$lib/assets/references/wunder-app.png?w=768&format=webp;png&metadata&enhanced'
import glbRef from '$lib/assets/references/glb1.png?w=768&format=webp;png&metadata&enhanced'
import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'

export const strategySectionContent: TriarcSubsectionDefinition = {
  main: {
    title: 'Wir übersetzen Strategie in die Praxis.',
    description:
      'Mit klaren Entscheidungsgrund-lagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.',
    iconSource: puzzle,
  },
  projects: [
    {
      image: orthoClient,
      content: {
        prefix: 'Referenz',
        title: 'Von der Vision zur digitalen Kernplattform.',
        description:
          'Für ORTHO-TEAM ersetzten wir papierbasierte Kundenauftragsprozesse durch eine Work-Management-Lösung von der Anamnese bis zur Produktion – inklusive IV/Krankenkassen-Logik und ERP-Anbindung. Strategie wird so in greifbare Software übersetzt.',
        sectionLink: '/references',
      },
    },
    {
      image: glbRef,
      content: {
        prefix: 'Referenz',
        title: 'Über 900 Mitarbeitende – eine digitale Strategie.',
        description:
          'Die GLB-Gruppe führte mit «MyBusiness» und «digiZeit» eine modulare Plattform ein: Rapportierung, Kommunikation und Planung an einem Ort. Grosse Organisationen brauchen eine tragfähige IT-Strategie, nicht nur einzelne Apps.',
        sectionLink: '/references',
      },
    },
    {
      image: teamwerk,
      content: {
        prefix: 'Produkt',
        title: 'TeamWerk – modulare Work-Management-Plattform.',
        description:
          'Arbeitsaufträge, Projektkoordination, Protokolle, interne Kommunikation und Wiki in einem System – skalierbar, wenn Ihre Strategie Wachstum und Standardisierung verlangt.',
        sectionLink: '/operations/teamwerk',
      },
    },
  ],
}
