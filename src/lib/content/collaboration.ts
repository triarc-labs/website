/** A single phase in the Triarc project workflow, seen from the Tech Lead's perspective. */
export type CollaborationPhase = {
  /** Phase name (e.g. "Konzept & Planung"). */
  name: string
  /** Short German "Du"-voice description of what you (the Tech Lead) do in this phase. */
  description: string
  /** People you collaborate with in this phase – short labels, excluding the Tech Lead. */
  collaborators: string[]
}

/** Copy + data model for the "Wie du bei uns arbeitest" section on job detail pages. */
export type CollaborationContent = {
  /** Small uppercase label above the heading. */
  kicker: string
  /** Section heading. */
  title: string
  /** Dev-role spotlight paragraphs framing the developer as Tech Lead. */
  roleParagraphs: string[]
  /** Label for the persistent through-line role (the developer). */
  leadLabel: string
  /** Heading above the phase timeline. */
  flowTitle: string
  /** The project phases, in order from concept to review. */
  phases: CollaborationPhase[]
}

export const ourCollaboration: CollaborationContent = {
  kicker: 'Deine Rolle',
  title: 'Wie du bei uns arbeitest',
  roleParagraphs: [
    'Als Entwickler:in bei triarc bist du Tech Lead und damit die technische Konstante im Projekt: Du begleitest es vom ersten Konzept bis zum Review-Meeting mit dem Kunden – und übersetzt durchgehend zwischen Mensch und Technologie.',
    'In jeder Phase arbeitest du mit anderen zusammen: mit UX, PL und Kunde im Konzept, mit den Devs im Sprint, mit der PL beim Testen und schliesslich mit PL und Kunde im Review. So wird aus einer Idee Schritt für Schritt Software, die wirklich trägt.',
  ],
  leadLabel: 'Tech Lead',
  flowTitle: 'Dein Weg durch das Projekt',
  phases: [
    {
      name: 'Konzept & Planung',
      description:
        'Du übersetzt die technische Seite im Konzept, schärfst gemeinsam mit UX, PL und Kunde die Stories, schätzt den Aufwand und priorisierst mit der PL.',
      collaborators: ['UX', 'PL', 'Kunde'],
    },
    {
      name: 'Development Sprint',
      description:
        'Du steigst mit dem Entwicklerteam in den Sprint ein und verteilst die Arbeit sinnvoll auf die Devs.',
      collaborators: ['Devs'],
    },
    {
      name: 'Testing',
      description: 'Du testest die Lösung zusammen mit der PL auf Herz und Nieren.',
      collaborators: ['PL'],
    },
    {
      name: 'Review-Meeting',
      description: 'Du präsentierst die fertige Lösung gemeinsam mit der PL dem Kunden.',
      collaborators: ['PL', 'Kunde'],
    },
  ],
}
