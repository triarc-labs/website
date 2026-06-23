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
      content: 'Nimm den Mut zusammen und bewirb dich mit deinen Unterlagen direkt über unser Bewerbungsformular.',
    },
    {
      title: 'Persönliches Interview',
      content:
        'Nach kurzer Prüfung von deinem CV und dem ersten Eindruck, melden wir uns bei dir für ein erstes Vorstellungsgespräch. Remote oder in unserem Office können wir uns gegenseitig austauschen und schauen ob sich Synergien ergeben.',
    },
    {
      title: 'Technisches Interview',
      content:
        'Damit wir dich initial in unser Trackeesystem einstufen können, bekommst du die Gelegenheit dich mit einem Entwickler austauschen.',
    },
    {
      title: 'Probe-Halbtag oder -Tag (optional)',
      content:
        'Lerne das Team kennen und arbeite an einer effektiven Projektchallenge, damit du einen guten Eindruck von uns bekommst und wir von dir.',
    },
  ],
}
