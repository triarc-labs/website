<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import CompanyAbout from '$lib/components/CompanyAbout.svelte'
  import seniorDev from '$lib/assets/img/jobs/super_woman.svg'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Button from '$lib/components/Button.svelte'

  let listedJob = 'Senior Software Engineer'

  let block = {
    title: '<span class="text-sm">wir suchen</span><br/>Senior Software Engineer',
    content:
      'Als Senior begleitest Du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und Deinen Entwickler-KollegInnen. Und Du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
    image: { src: seniorDev, alt: 'Senior Software Engineer' },
    bulletPoints: [
      "Erfahrungen mit C# in der Entwicklung von API's",
      'Erfahrungen im Bereich Web und Angular',
      'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
      'Erfahrungen Docker / Kubernetes / Gitlab CI',
    ],
  }
</script>

<svelte:head>
  <title>Developer Job - triarc-labs</title>
</svelte:head>
<GradientHero
  kicker="Jobs"
  title={listedJob}
  content="Erfahre mehr über die Stelle als {listedJob} und das Arbeitsumfeld bei Triarc."
/>

<Block bind:content={block}>
  <div class="flex items-center justify-center mb-8">
    <Button buttonSize="Standard" buttonMargin="None" reference="#applicationForm" label="Mehr erfahren" />
  </div>
</Block>
<Technology />
<!--<GradientHero kicker="Jobs"-->
<!--  title="Developer Job"-->
<!--  content="Erfahre mehr über unsere offene Entwickler Stelle und was Dich sonst noch dazu interessieren könnte."-->
<!--/>-->
<CompanyAbout />
<ApplicationForm availableJobs={[listedJob]} jobString={listedJob} isDefinedListing={true} />

<!--<div class="bg-[#0D1214] min-h-[calc(100vh-64px)] flex flex-col lg:min-h-screen">-->
<!--  <div class="text-white bg-opacity-20">-->
<!--    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">-->
<!--      <h2 class="text-3xl font-extrabold sm:text-4xl">-->
<!--        <span class="block">Immer noch hier?</span>-->
<!--      </h2>-->
<!--      <p class="mt-4 text-lg leading-6">-->
<!--        Du findest, Du passt zu uns und kannst etwas beisteuern? Wir freuen uns auf Deine Bewerbung und sehen Dich in-->
<!--        unserem Jungle.-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
<!--  <img src="img/jobs/jungle.svg" class="w-full h-full" alt="triarc jungle" id="jungle" />-->
<!--</div>-->

<FooterNoContact />
