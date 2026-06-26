import type { BlockContent } from '$lib/components/TypeDefinitions'

export const ourApplicationProcess: BlockContent = {
  background: 'bg-gradient-to-tr from-green-triarc-blended to-blue-triarc-blended',
  light: true,
  title: 'So läuft unser Bewerbungsverfahren',
  content:
    'Unser Interviewprozess verläuft in drei Schritten – mit einem optionalen Probe-Halbtag oder -Tag als Abschluss.',
  steps: [
    {
      title: 'Bewerbung einreichen',
      content: 'Nimm den Mut zusammen und bewirb Dich mit Deinen Unterlagen direkt über unser Bewerbungsformular.',
    },
    {
      title: 'Persönliches Interview',
      content:
        'Nach kurzer Prüfung von Deinem CV melden wir uns bei Dir für ein erstes Vorstellungsgespräch. Remote oder in unserem Office können wir uns gegenseitig austauschen und herausfinden ob sich Synergien ergeben.',
    },
    {
      title: 'Technisches Interview',
      content:
        'Damit wir Dich initial in unser Trackeesystem einstufen können, bekommst Du die Gelegenheit Dich mit einem Entwickler auszutauschen. Zeig uns, was Du kannst, an einem Fallbeispiel.',
    },
    {
      title: 'Probe-Halbtag oder -Tag (situativ)',
      content:
        'Lerne das Team kennen und arbeite an einer effektiven Projektchallenge, damit Du einen guten Eindruck von uns bekommst und wir von Dir.',
    },
  ],
}
