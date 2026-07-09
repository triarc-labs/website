<script lang="ts">
  import elke from '$lib/assets/team/elke.jpg?format=webp;png&w=500&enhanced'
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import adventurer from '$lib/assets/img/custom-software/triarc-adventure.svg'

  let contents: BlockContent[] = [
    {
      quote: {
        image: elke,
        content:
          'Unsere Firmenkultur beruht auf den Grundsätzen der Gleichberechtigung, Mitbestimmung und Partizipation. Denn zusammen sind wir innovativer, kreativer und finden die besten Lösungen für unsere Kunden.',
        person: 'Elke Engel',
        personTitle: 'CFO / Partner',
        email: 'elke@triarc-labs.com',
        highlight: 'white',
        linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
      },
    },
    {
      title: 'Starte Dein Abenteuer!',
      content:
        'Together you succeed <br/><br/>' +
        'Werde Teil des Teams und bewirb Dich, wenn Du Leidenschaft, Elan und Tatendrang hast und Du Dich mit unseren <a class="underline decoration-red-triarc" href="/">Werten</a> identifizieren kannst. <br/> <br/>' +
        'Du arbeitest und kommunizierst gerne im Team. Das Neue begeistert Dich. Du bist eine positiv eingestellte Persönlichkeit, allzeit bereit für neue Herausforderungen. <br/><br/>' +
        'Lehrabschluss/HF/Bachelor/Master oder selbst angeeignet. Bei uns ist nichts strikt vorgegeben, wir evaluieren immer zu Deiner Situation. ',
      image: { src: adventurer, alt: 'Triarc Career' },
    },
  ]
</script>

{#each contents as content}
  <Block bind:content />
{/each}
