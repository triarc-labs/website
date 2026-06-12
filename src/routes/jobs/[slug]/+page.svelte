<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Button from '$lib/components/Button.svelte'

  import type { PageData } from './$types'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'
  import Container from '$lib/components/Container.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  export let data: PageData

  let benefits = ourBenefits
  let hiringProcess = ourApplicationProcess

  let jobListingBase = data.jobListing.BasicJobInfo
  let jobListingExtended = data.jobListing.ExtendedJobInfo
  let hiring = jobListingBase.jobDetails?.currentlyHiring
  let jobHero = jobListingBase.title!
  let jobTitle = jobListingBase.jobDetails!.jobName
</script>

<MetaHead
  pageMetadata={{
    title: `${jobTitle} – Jobs – triarc laboratories`,
    metaTitle: `${jobTitle} (m/w/d) | Jobs | triarc labs`,
    description: jobListingBase.content ?? '',
  }}
></MetaHead>
<GradientHero
  kicker="Jobs"
  title="{jobHero} ({jobListingBase.jobDetails?.jobPensum})"
  content={jobListingBase.content}
/>

<div>
  <div
    class="font-bold text-lg py-8 text-center {hiring
      ? 'bg-blue-triarc/20 text-blue-triarc'
      : 'bg-red-triarc/10 text-red-triarc'}"
  >
    <Container>
      {#if jobListingBase.jobDetails?.currentlyHiring}
        <span>Wir nehmen zurzeit Bewerbungen als {jobHero} an </span>
      {:else}
        <span>
          Zurzeit nehmen wir keine Bewerbungen als {jobHero} an
        </span>
      {/if}
    </Container>
  </div>
</div>
{#if jobListingExtended}
  <Block bind:content={jobListingExtended}>
    {#if hiring}
      <div class="flex items-center justify-center mb-8">
        <Button buttonSize="Standard" buttonMargin="None" reference="#applicationForm" label="Jetzt bewerben" />
      </div>
    {/if}
  </Block>
{/if}

{#if data.jobListing.hasTechnologySection}
  <Technology />
{/if}
<Block bind:content={benefits} />
{#if hiring}
  <Block bind:content={hiringProcess} />
  <ApplicationForm availableJobs={[jobTitle]} jobString={jobTitle} isDefinedListing={true} />
{/if}
<FooterNoContact />
