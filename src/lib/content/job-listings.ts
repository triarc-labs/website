import jobListingImage from '$lib/assets/img/jobs/super_woman.svg'
import type { BlockContent, JobPosting } from '$lib/components/TypeDefinitions'
import juniorDev from '$lib/assets/img/jobs/junior-dev.svg'
import beHero from '$lib/assets/img/jobs/be_the_hero.svg'
// import cloud from '$lib/assets/img/jobs/cloud_hosting.svg'
import initiative from '$lib/assets/img/jobs/exploring.svg'
// import sales from '$lib/assets/img/jobs/sales.svg'
// import design from '$lib/assets/img/jobs/design.svg'
// import office from '$lib/assets/img/jobs/office.svg'
// import projectlead from '$lib/assets/img/jobs/projectlead.svg'

// Serialized to json
export const JobPostings: JobPosting[] = [
  {
    content:
      'Als Senior begleitest Du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und Deinen Entwickler-KollegInnen. Und Du machst das nicht zum ersten Mal. ',
    claim: 'Senior Software Engineer',
    img: jobListingImage,
    open: false,
    responsibilities:
      'sind so breit gefächert und abwechslungsreich wie die Arbeit, die Dich bei uns erwartet: vom Design bis zur Lösungsfindung ist alles dabei, individuell angepasst auf unsere branchenübergreifenden Kunden. In unserem Team aus den qualifiziertesten Entwicklern profitierst Du von unserer jahrelangen Erfahrung, und wir von Deiner. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobile-Anwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
    skills: [
      'Leidenschaft für die Software Entwicklung',
      'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
      'Hohe Methodenkompetenz und logisches, vernetztes Denken',
      'Freude am aktiven Kundenkontakt und die Fähigkeit, zwischen Kunde und Technologie zu übersetzen',
      'Erfahrung mit KI (Einsatz während Software Entwicklung), sowie Umsetzung von Software mit KI-Funktionalitäten',
      'Spass an der Arbeit im Team',
      'Lösungsorientiertes Denken und Handeln',
      'Lernfähigkeit und kontinuierliche Weiterentwicklung',
      'Sehr gute Deutsch- sowie gute Englisch-Kenntnisse in Wort und Schrift',
      '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
    ],
    experienceRequirements: '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
  },
  // {
  //   content:
  //     'Wir sind Ingenieure: bestausgebildete und praxiserfahrene IT-Fachleute. Wir können, was wir tun. Und tun für unsere Kunden alles, was wir können. Willst Du mittun?',
  //   claim: 'Professional Software Engineer',
  //   img: 'img/jobs/be_the_hero.svg',
  //   open: false,
  //   responsiblities:
  //     'umfassen das ganze Spektrum vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden. Das ist herausfordernd, ja, aber das bringt Dich auch weiter. Und Du bist nicht allein: In unserem Team aus den qualifiziertesten Entwicklern profitierst Du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
  //   skills: [
  //     'Leidenschaft für die Software Entwicklung',
  //     'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
  //     'Hohe Methodenkompetenz und logisches, vernetztes Denken',
  //     'Spass an der Arbeit im Team',
  //     'Lösungsorientiertes Denken und Handeln',
  //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
  //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
  //     '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
  //   ],
  //   experienceRequirements: '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
  // },
  // {
  //  content:
  //     'Möchtest Du die Teams im Infrastrukturbereich unterstützen und Dich um unsere Kubernetes Cluster und unseren Tech-Stack kümmern? Dann fehlt Dir jetzt nur noch ein Klick zum Glück: <a class="underline" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a>',
  //   claim: 'DevOps / Operation Engineer',
  //   img: 'img/jobs/cloud_hosting.svg',
  //   open: false,
  //   responsiblities:
  //     'sind breit gefächert. Unterstütze das Team in der Infrastruktur unserer vielzähligen Projekte. Dazu gehört die Wartung von OnPremise Maschinen mit Linux und kubeadm sowie gemanagte Kubernetes-Cluster auf Google Cloud. Du hilfst im Support von unserem Produkt μLink und arbeitest mit der Entwicklung eng zusammen, um die Stabilität und Verfügbarkeit zu gewährleisten.',
  //   skills: [
  //     'Leidenschaft für die Software Entwicklung',
  //     'Praktische Erfahrung mit Kubernetes, Docker und GCP',
  //     'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
  //     'Spass an der Arbeit im Team',
  //     'Lösungsorientiertes Denken und Handeln',
  //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
  //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
  //   ],
  //   experienceRequirements:
  //     'Praktische Erfahrung mit Kubernetes, Docker und GCP, Gute Deutsch- sowie Englisch-Kenntnisse in Wort und Schrift',
  // },
]

export const DetailedJobListings: {
  slug: string
  hasTechnologySection: boolean
  BasicJobInfo: BlockContent
  ExtendedJobInfo?: BlockContent
}[] = [
  {
    slug: 'junior',
    hasTechnologySection: true,
    BasicJobInfo: {
      jobDetails: { currentlyHiring: false, jobName: 'Junior Software Engineer', jobPensum: '60-100%' },
      title: 'Junior Software Engineer',
      content:
        'Als Junior bist hast Du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
      image: { src: juniorDev, alt: 'Junior Software Engineer' },
      compactPaddingY: true,
    },
    ExtendedJobInfo: {
      title: 'Das bringst Du mit',
      content: 'Was erwarten wir konkret von Dir?',
      bulletGroups: [
        {
          title: 'Technik & Arbeitsweise',
          bulletPoints: [
            'Du arbeitest Dich selbstständig in neue Technologien ein',
            'Du setzt einfache Features eigenständig um',
            'Du befolgst unseren Entwicklungsworkflow',
            'Du verstehst objektorientierte Programmierung',
            'Du bringst ein Verständnis für sinnvolles Testing mit',
            'Du schreibst sauberen, verständlichen Code',
          ],
        },
        {
          title: 'Interesse',
          bulletPoints: [
            'Du bist interessiert und offen für Neues und hinterfragst bestehende Prozesse',
            'Du siehst KI nicht als Bedrohung, sondern als spannende Herausforderung, die es zu meistern gilt',
            'Du hast keine Angst vor dem Kundenkontakt und bringst Dich im Austausch mit dem Kunden ein',
          ],
        },
        {
          title: 'Zusammenarbeit',
          bulletPoints: ['Du nimmst in Meetings aktiv teil und sprichst Probleme an'],
        },
        {
          title: 'Kommunikation',
          bulletPoints: [
            'Sehr gute Deutschkenntnisse in Wort und Schrift – unsere Kunden sind lokal und sprechen Schweizerdeutsch',
          ],
        },
      ],
    },
  },
  {
    slug: 'professional',
    hasTechnologySection: true,
    BasicJobInfo: {
      jobDetails: { currentlyHiring: true, jobName: 'Professional Software Engineer', jobPensum: '60-100%' },
      title: 'Professional Software Engineer',
      content:
        'Als Professional hast Du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig, übernimmst Verantwortung für Deine Aufgaben und schätzt den direkten Austausch mit unseren Kunden.',
      image: { src: beHero, alt: 'Professional Software Engineer' },
      compactPaddingY: true,
    },
    ExtendedJobInfo: {
      title: 'Das bringst Du mit',
      content: 'Was erwarten wir konkret von Dir?',
      bulletGroups: [
        {
          title: 'Technik & Architektur',
          bulletPoints: [
            'Du verstehst architektonische Entscheidungen und kannst sie nachvollziehen',
            'Du identifizierst Probleme und Bugs in bestehenden Projekten und behebst sie',
            'Du arbeitest längerfristig und selbstständig an komplexeren Features',
            'Du verstehst Datenmodellierung',
            'Du entwickelst Full-Stack mit C#, TypeScript und Angular',
          ],
        },
        {
          title: 'Interesse',
          bulletPoints: [
            'Du bist interessiert und offen für Neues und hinterfragst bestehende Prozesse',
            'Du siehst KI nicht als Bedrohung, sondern als spannende Herausforderung, die es zu meistern gilt',
            'Du hast keine Angst vor dem Kundenkontakt und agierst als technischer Vermittler',
          ],
        },
        {
          title: 'Zusammenarbeit & Arbeitsweise',
          bulletPoints: [
            'Du priorisierst Deine zugeteilten Aufgaben eigenständig',
            'Du erledigst Aufgaben termingerecht – oder informierst frühzeitig über Verzögerungen',
            'Du pflegst aktiven Kundenkontakt: Anforderungen aufnehmen, Lösungen verständlich erklären und Feedback einholen',
            'Du übersetzt in der neuen Welt von KI und Vibecoding zwischen Kunde und Technologie',
          ],
        },
        {
          title: 'Kommunikation',
          bulletPoints: [
            'Sehr gute Deutschkenntnisse in Wort und Schrift – unsere Kunden sind lokal und sprechen Schweizerdeutsch',
          ],
        },
      ],
    },
  },
  {
    slug: 'senior',
    hasTechnologySection: true,
    BasicJobInfo: {
      jobDetails: { currentlyHiring: false, jobName: 'Senior Software Engineer', jobPensum: '60-100%' },
      title: 'Senior Software Engineer',
      content:
        'Als Senior begleitest Du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und Deinen Entwickler-KollegInnen. Und Du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
      image: { src: jobListingImage, alt: 'Senior Software Engineer' },
      compactPaddingY: true,
    },
    ExtendedJobInfo: {
      title: 'Das bringst Du mit',
      content: 'Was erwarten wir konkret von Dir?',
      bulletGroups: [
        {
          title: 'Technik & Architektur',
          bulletPoints: [
            'Du verstehst komplexe Anforderungen und konzipierst die passenden Softwarelösungen dazu',
            'Du evaluierst neue Technologien und bindest sie ein',
            'Du verstehst verschiedene Programmierstrategien und setzt sie passend ein',
            'Du bringst mehrjahrige Erfahrung aus der Software Entwicklung mit',
            'Du kennst Dich im eingesetzten oder ähnlichen Techstack aus und kannst darin Full-Stack entwickeln',
          ],
        },
        {
          title: 'Interesse',
          bulletPoints: [
            'Du bist interessiert und offen für Neues und hinterfragst bestehende Prozesse',
            'Du siehst KI nicht als Bedrohung, sondern als spannende Herausforderung, die es zu meistern gilt',
            'Du hast keine Angst vor dem Kundenkontakt und agierst als technischer Vermittler',
          ],
        },
        {
          title: 'Zusammenarbeit & Kunde',
          bulletPoints: [
            'Du übernimmst die technische Verantwortung und kannst diese kommunizieren',
            'Du begleitest Kunden vom Requirements-Engineering bis in den Betrieb',
            'Du übersetzt in der neuen Welt von KI und Vibecoding zwischen Kunde und Technologie',
          ],
        },
        {
          title: 'Kommunikation',
          bulletPoints: [
            'Sehr gute Deutschkenntnisse in Wort und Schrift – unsere Kunden sind lokal und sprechen Schweizerdeutsch',
          ],
        },
      ],
    },
  },
  {
    slug: 'initiativ',
    hasTechnologySection: true,
    BasicJobInfo: {
      jobDetails: { currentlyHiring: true, jobName: 'Initiativbewerbung', hideMeta: true },
      title: 'Initiativ bewerben',
      content:
        'Auch wenn wir derzeit keine offenen Stellen ausgeschrieben haben oder keine der derzeitigen Stellen Deine Fähigkeiten passend abbildet, sind wir stets an talentierten und motivierten Bewerbern interessiert. Wenn Du der Meinung bist, dass Deine Fähigkeiten und Erfahrungen gut zu uns passen, freuen wir uns auf Deine Initiativbewerbung.',
      image: { src: initiative, alt: 'Initiativbewerbung' },
      compactPaddingY: true,
    },
    ExtendedJobInfo: {
      title: 'Das bringst Du mit',
      content: 'Was erwarten wir konkret von Dir?',
      bulletPoints: [
        'Du bringst Leidenschaft für die Softwareentwicklung mit',
        'Du hast Spass an der Arbeit im Team',
        'Du bist lernfähig und entwickelst Dich kontinuierlich weiter',
        'Du siehst KI nicht als Bedrohung, sondern als spannende Herausforderung, die es zu meistern gilt',
        'Du hast gute Deutsch- sowie Englischkenntnisse in Wort und Schrift',
      ],
    },
  },
  // {
  //   slug: 'devops',
  //   hasTechnologySection: true,
  //   BasicJobInfo: {
  //     jobDetails: {
  //       currentlyHiring: false,
  //       jobName: '(Dev)Ops Engineer',
  //       jobPensum: '80-100%',
  //     },
  //     title: '(Dev)Ops Engineer',
  //     content:
  //       'Als (Dev)Ops betreust Du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',
  //
  //     image: { src: cloud, alt: 'Dev/Ops Engineer' },
  //     bulletPoints: [
  //       'Erfahrungen Docker / Kubernetes / Gitlab CI',
  //       'Erfahrungen mit Google Cloud / Azure von Vorteil',
  //       'Erfahrungen mit Cypress / E2E Testing von Vorteil',
  //     ],
  //     collapsible: true,
  //     collapsed: true,
  //   },
  //   ExtendedJobInfo: {
  //     title: 'Anforderungen',
  //     content: 'Was erwarten wir konkret von Dir?',
  //     image: { src: checklist, alt: 'Requirements' },
  //     bulletPoints: [
  //       'Leidenschaft für die Software Entwicklung',
  //       'Praktische Erfahrung mit Kubernetes, Docker und GCP',
  //       'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
  //       'Spass an der Arbeit im Team',
  //       'Lösungsorientiertes Denken und Handeln',
  //       'Lernfähigkeit und kontinuierliche Weiterentwicklung',
  //       'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
  //     ],
  //   },
  // },
  // {
  //   slug: 'sales',
  //   hasTechnologySection: false,
  //   BasicJobInfo: {
  //     jobDetails: {
  //       currentlyHiring: false,
  //       jobName: 'Technical Sales',
  //       jobPensum: '80-100%',
  //     },
  //     title: 'Technical Sales',
  //     content:
  //       'Als (Dev)Ops betreust Du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',
  //
  //     image: { src: sales, alt: 'Dev/Ops Engineer' },
  //     bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  //     collapsible: true,
  //     collapsed: true,
  //   },
  //   ExtendedJobInfo: {
  //     title: 'Anforderungen',
  //     content: 'Was erwarten wir konkret von Dir?',
  //     image: { src: checklist, alt: 'Requirements' },
  //     bulletPoints: [
  //       'Abschluss in Informatik',
  //       'Idealerweise 5 Jahre Berufserfahrung (Softwareentwicklungs- und/oder Integrationsprojekte und/oder Consulting)',
  //       'Du hast eine hohe Sozialkompetenz und gehst empathisch auf Dein Gegenüber zu',
  //       'Du pflegst mit Begeisterung ein breites Netzwerk und kannst Dich gut auch in neue Gruppen integrieren',
  //       'Du kannst ein komplexes Problem erfassen und konstruktive Lösungsansätze erarbeiten. Diese Lösungsansätze präsentierst Du gerne und kannst diese auch überzeugend in einer Offerte darstellen',
  //       'Du verstehst die Anliegen unserer Kunden auch aus unternehmerischer Sicht',
  //       'Du hast sehr gute Deutsch- und Englisch-Kenntnisse',
  //     ],
  //   },
  // },
  // {
  //   slug: 'design',
  //   hasTechnologySection: false,
  //   BasicJobInfo: {
  //     jobDetails: {
  //       currentlyHiring: false,
  //       jobName: 'UI/UX Designer',
  //       jobPensum: '80-100%',
  //     },
  //     title: 'UI/UX Designer',
  //     content:
  //       'Du arbeitest eng mit Kunden zusammen, um Projektanforderungen zu sammeln und aufzubereiten. Du entwickelst Designideen und visualisierst diese durch Storyboards, Prozessabläufe und Seitenübersichten. Dabei gestaltest Du grafische Benutzeroberflächen für Mobile- und Web-Anwendungen, erstellst UI-Konzepte und Prototypen und schaffst originelle Grafiken. Zudem identifizierst und behebst Du UX-Probleme in bestehenden Projekten und setzt Stilstandards für Schriftarten, Farben und Bilder um.',
  //     image: { src: design, alt: 'Dev/Ops Engineer' },
  //     bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  //     collapsible: true,
  //     collapsed: true,
  //   },
  //   ExtendedJobInfo: {
  //     title: 'Anforderungen',
  //     content: 'Was erwarten wir konkret von Dir?',
  //     image: { src: checklist, alt: 'Requirements' },
  //     bulletPoints: [
  //       'Nachgewiesene Berufserfahrung als UI/UX Designer oder ähnlicher Funktion',
  //       'Hochschulabschluss (ETH/Universität/FH/vergleichbarer Leistungsnachweis) in Design, Computerwissenschaften oder ähnlichem Bereich',
  //       'Starke Kommunikationsfähigkeiten, um mit verschiedenen Interessensvertretern zusammenarbeiten zu können',
  //       'Lösungsorientiertes Denken und Handeln',
  //       'Gutes Zeitmanagement',
  //       'Gute Deutsch- und Englisch-Kenntnisse',
  //     ],
  //   },
  // },
  // {
  //   slug: 'projectlead',
  //   hasTechnologySection: false,
  //   BasicJobInfo: {
  //     jobDetails: {
  //       currentlyHiring: false,
  //       jobName: 'Projektleiter / Requirements Engineer in der Custom Softwareentwicklung',
  //       jobPensum: '80-100%',
  //     },
  //     title: 'Projektmanager<br/>',
  //     content:
  //       'Du übernimmst die Verantwortung für Softwareprojekte, von der Kundenvision bis zum Go-Live. Du identifizierst und managst Anforderungen, erstellst Angebote und führst Verkaufsgespräche zur Projektakquisition. Dabei planst Du Ressourcen und Zeiten, führst agile Teams und coachst sie regelmässig. Zudem organisierst und leitest Du Meetings, pflegst Kundenbeziehungen und kümmerst Dich um die Koordination von Wartungsarbeiten sowie das Eskalationsmanagement bei Problemen.',
  //     image: { src: projectlead, alt: 'Dev/Ops Engineer' },
  //     bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  //     collapsible: true,
  //     collapsed: true,
  //   },
  //   ExtendedJobInfo: {
  //     title: 'Anforderungen',
  //     content: 'Was erwarten wir konkret von Dir?',
  //     image: { src: checklist, alt: 'Requirements' },
  //     bulletPoints: [
  //       'Hochschulabschluss in Informatik (BSc)',
  //       'Mindestens 5 Jahre Berufserfahrung (Softwareentwicklungs- und/oder Integrationsprojekte)',
  //       'Du besitzt eine hohe Methodenkompetenz in der agilen Softwareentwicklung und logisches, vernetztes Denken',
  //       'Du handelst und denkst lösungsorientiert und strukturiert',
  //       'Du arbeitest gerne im Team und im direkten Kontakt mit Kunden',
  //       'Du gehst Konflikten nicht aus dem Weg, sondern klärst sie auf',
  //       'Du bist interessiert an Deiner kontinuierlichen Weiterentwicklung - Priorisieren und einen kühlen Kopf zu bewahren liegt Dir',
  //       'Du vertiefst Dich gerne in die Details von Anforderungsspezifikationen für Softwarefeatures',
  //       'Du hast ein Flair dafür, dem Kunden weiterführende Digitalisierungspotenziale aufzuzeigen',
  //       'Du bist verantwortungsbewusst, sehr selbstständig und sorgfältig',
  //       'Du hast sehr gute Deutsch- und Englisch-Kenntnisse',
  //     ],
  //   },
  // },
  // {
  //   slug: 'officemanager',
  //   hasTechnologySection: false,
  //   BasicJobInfo: {
  //     jobDetails: {
  //       currentlyHiring: false,
  //       jobName: 'Office Manager',
  //       jobPensum: '80-100%',
  //     },
  //     title: 'Office Manager',
  //     content:
  //       'Du kümmerst Dich um das Office- und Materialmanagement, organisierst Reparaturen und betreust unser Reinigungspersonal sowie Gärtner. Du unterstützt in der Buchhaltung, indem Du Rechnungen prüfst und Spesen sammelst. Im HR-Bereich koordinierst Du Stellenausschreibungen, organisierst den Onboardingprozess und bist Ansprechpartner für Mitarbeiter. Zudem planst Du Events und unterstützt die Geschäftsleitung bei administrativen Aufgaben und der Koordination von Meetings.',
  //     image: { src: office, alt: 'Dev/Ops Engineer' },
  //     bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  //     collapsible: true,
  //     collapsed: true,
  //   },
  //   ExtendedJobInfo: {
  //     title: 'Anforderungen',
  //     content: 'Was erwarten wir konkret von Dir?',
  //     image: { src: checklist, alt: 'Requirements' },
  //     bulletPoints: [
  //       'Mindestens 3 Jahre Erfahrung in einer ähnlichen Funktion',
  //       'Du hast eine kaufmännische Grundausbildung oder ähnliches',
  //       'Du arbeitest gern digital, d.h. neben der Officepalette hast Du keine Berührungsängste, Dich in digitale Tools einzuarbeiten und diese anzuwenden',
  //       'Du bist offen, hilfsbereit und kommunikativ',
  //       'Du hast Deine Todoliste im Griff',
  //       'Du bist verantwortungsbewusst, sehr selbstständig und sorgfältig',
  //       'Du arbeitest gerne in einem flexiblen und dynamischen Umfeld',
  //       'Du hast sehr gute Deutsch- und Englisch-Kenntnisse',
  //     ],
  //   },
  // },
]
// Page content
// //TODO: Add Initiativbewerbung, PL, Sales
// export const JobListings: BlockContent[] = [
//   {
//     jobDetails: { currentlyHiring: false, jobName: 'Junior Software Engineer', jobPensum: '60-100%' },
//     title: 'Junior Software Engineer',
//     content:
//       'Als Junior bist hast Du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
//     image: { src: juniorDev, alt: 'Junior Software Engineer' },
//     bulletPoints: ['Erste Erfahrungen mit C# oder Java', 'Erste Erfahrungen im Bereich Web / Single Page Applications'],
//   },
//   {
//     jobDetails: { currentlyHiring: true, slug: 'professional', jobName: 'Professional Software Engineer' },
//     title: 'Professional Software Engineer',
//     content:
//       'Als Professional hast Du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig, übernimmst Verantwortung für Deine Aufgaben.',
//     image: { src: beHero, alt: 'Professional Software Engineer' },
//     bulletPoints: [
//       "Erfahrungen mit C# in der Entwicklung von API's",
//       'Erfahrungen im Bereich Web und Angular',
//       'Kentnisse von Elasticsearch / Postgres / MongoDB von Vorteil',
//     ],
//   },
//   {
//     jobDetails: { currentlyHiring: true, slug: 'senior', jobName: 'Senior Software Engineer' },
//     title: 'Senior Software Engineer',
//     content:
//       'Als Senior begleitest Du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und Deinen Entwickler-KollegInnen. Und Du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
//     image: { src: jobListingImage, alt: 'Senior Software Engineer' },
//     bulletPoints: [
//       "Erfahrungen mit C# in der Entwicklung von API's",
//       'Erfahrungen im Bereich Web und Angular',
//       'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
//       'Erfahrungen Docker / Kubernetes / Gitlab CI',
//     ],
//   },
//   {
//     jobDetails: {
//       currentlyHiring: false,
//       slug: 'devops',
//       jobName: '(Dev)Ops Engineer',
//     },
//     title: '(Dev)Ops Engineer',
//     content:
//       'Als (Dev)Ops betreust Du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',
//
//     image: { src: cloud, alt: 'Dev/Ops Engineer' },
//     bulletPoints: [
//       'Erfahrungen Docker / Kubernetes / Gitlab CI',
//       'Erfahrungen mit Google Cloud / Azure von Vorteil',
//       'Erfahrungen mit Cypress / E2E Testing von Vorteil',
//     ],
//   },
// ]
