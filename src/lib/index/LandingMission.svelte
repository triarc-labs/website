<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Block from '$lib/components/Block.svelte'
  import GradientDivider from '$lib/components/GradientDivider.svelte'
  import { missionPageQuotes } from '$lib/content/landing-page'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'

  const contents = missionPageQuotes
</script>

<div class="flex flex-col pb-16 lg:pb-32">
  <Container class="justify-center items-center text-center">
    <span class="pt-16 lg:pt-32 pb-10 font-semibold font-sans text-7xl text-black">
      Together
      <span class="mx-2 bg-gradient-to-r from-red-triarc via-green-triarc to-blue-triarc bg-clip-text text-transparent">
        you
      </span>
      succeed.
    </span>
    <span class="text-lg text-center font-bold pb-2"> Warum triarc laboratories? </span>
    <span class="text-lg max-w-prose">
      Wir verstehen die Herausforderungen von KMU und entwickeln seit über einem Jahrzehnt massgeschneiderte Lösungen.
      Unser bewährter Ansatz kombiniert strategisches Denken mit praktischer Umsetzung - für messbare Ergebnisse und
      nachhaltigen Geschäftserfolg.
    </span>
  </Container>
</div>
<div>
  <!-- only here to trigger the alternating image to begin right side -->
  <div></div>
  {#each contents as contentBlock, index}
    <div class="group">
      <div class="{index === 0 ? 'pb-10 md:pb-16' : 'py-10 md:py-16'} {index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}">
        <Block content={contentBlock.content} quoteOverlap={index !== contents.length - 1} />
      </div>
      {#if contentBlock.divider}
        <GradientDivider gradientContent={contentBlock.divider} />
      {/if}
    </div>
  {/each}
</div>
<!--<div class="h-0 md:h-40"></div>-->
<FooterNoContact />

<style>
  /*.underline-triarc::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%);*/
  /*  top: 100%; !* just below the text *!*/
  /*  margin-top: 0.35rem; !* tweak vertical gap *!*/
  /*  width: 200%; !* allows horizontal overflow beyond the word *!*/
  /*  height: 0.9em; !* scale with font size *!*/
  /*  background-image: url($lib/assets/img/landing/rainbow-underline.svg);*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center;*/
  /*  background-size: contain; !* or `auto 0.9em` to force height *!*/
  /*  pointer-events: none;*/
  /*  z-index: 0;*/
  /*  display: block;*/
  /*}*/
</style>
