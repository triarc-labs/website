<script lang="ts">
  import TeamMembers from '$lib/index/TeamMembers.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Block from '$lib/components/Block.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { teamMetadata } from '$lib/content/triarc-page-metadata'
  import joinTheTeam from '$lib/assets/img/intro/content_team.svg'

  let content = {
    title: 'Werde Teil des Teams!',
    content:
      'Zusammen können wir alles erreichen. <br/><br/>' +
      'Werde Teil des Teams und bewirb dich, wenn du Leidenschaft, Elan und Tatendrang hast und du dich mit unseren Werten identifizieren kannst. ',
    image: { src: joinTheTeam, alt: 'Triarc Career' },
    link: { href: '/jobs', text: 'Unsere Jobs' },
  }
</script>

<MetaHead pageMetadata={teamMetadata}></MetaHead>

<GradientHero
  kicker="Über uns"
  title="Unser Team"
  content="Wir lieben, was wir tun, und dass wir das gemeinsam tun.
        Von der Vision bis zur Anwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen.
        Sie werden von erfahrenen, engagierten Spezialisten persönlich begleitet."
/>

<TeamMembers />

<Block bind:content />

<FooterNoContact />
