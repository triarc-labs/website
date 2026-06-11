<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import heroImage from '$lib/assets/hero/InnovationLab.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { futureSkalierungPlattformenMetadata } from '$lib/content/triarc-page-metadata'

  const contents: BlockContent[] = [
    {
      title: 'Wachstum bricht an den Nähten klassischer Insellösungen',
      content:
        'Neue Standorte, Produkte oder Kanäle belasten Software, die für einen engen Use Case gebaut wurde. <a class="underline text-blue-triarc" href="/future">Zukunftsfähigkeit</a> heisst: <strong>Architektur, die erweiterbar bleibt</strong> – ohne jedes Mal von vorn zu beginnen.<br/><br/>' +
        'Mit modularen Work-Management-Plattformen (z. B. <a class="underline text-blue-triarc" href="/operations/teamwerk">TeamWerk</a>) und klar getrennten Domänen schaffen wir Spielraum für neue Module, ohne bestehende Nutzer zu überfordern.',
    },
    {
      title: 'Worauf wir achten',
      bulletPoints: [
        'Klare Grenzen: welche Fähigkeit lebt in welchem System – und wer ist «Source of Truth»?',
        'APIs und Events statt starrer Kopplung, wo es Sinn ergibt.',
        'Betrieb und Wartung einplanen: Software ist ein Produkt, kein einmaliges Projekt.',
        'User-Onboarding skalieren: gleiche Patterns, konsistente UX über Module hinweg.',
      ],
    },
    {
      title: 'Referenzen & Tiefgang',
      content:
        'Von mittelständischen Organisationen mit hunderten Nutzenden bis zu branchenspezifischen Prozessen – in unseren <a class="underline text-blue-triarc" href="/references">Referenzen</a> sehen Sie, wie Skalierung in der Praxis aussieht.',
      link: { href: '/contact', text: 'Projekt besprechen', target: '_self' },
    },
  ]
</script>

<MetaHead pageMetadata={futureSkalierungPlattformenMetadata} />

<div class="bg-white">
  <Hero
    title="Skalierung & Plattformen"
    content="Technische und organisatorische Grundlagen legen, damit Wachstum Ihre IT nicht ausbremst."
    image={heroImage}
    imageAlt="Skalierung und Plattformen – triarc laboratories"
  />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <Footer />
</div>
