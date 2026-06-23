<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import CollaborationSection from '$lib/components/CollaborationSection.svelte'

  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'
  import Container from '$lib/components/Container.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  export let data: PageData

  // Gradient backgrounds only on the job detail page (the shared content keeps its defaults elsewhere).
  let benefits = {
    ...ourBenefits,
    background: 'bg-gradient-to-tr from-blue-triarc-blended to-green-triarc-blended',
    light: true,
  }
  let hiringProcess = {
    ...ourApplicationProcess,
    background: 'bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended',
  }

  let jobListingBase = data.jobListing.BasicJobInfo
  let jobListingExtended = data.jobListing.ExtendedJobInfo
  let hiring = jobListingBase.jobDetails?.currentlyHiring
  let jobHero = jobListingBase.title!
  let jobTitle = jobListingBase.jobDetails!.jobName

  // The collaboration section is only relevant for the senior listing.
  $: isSenior = $page.params.slug === 'senior'
</script>

<MetaHead
  pageMetadata={{
    title: `${jobTitle} – Jobs – triarc laboratories`,
    metaTitle: `${jobTitle} (m/w/d) | Jobs | triarc labs`,
    description: jobListingBase.content ?? '',
  }}
></MetaHead>
<GradientHero
  kicker={jobListingBase.jobDetails?.jobPensum ? `Jobs · ${jobListingBase.jobDetails.jobPensum}` : 'Jobs'}
  title={jobHero}
  content={jobListingBase.content}
  breadcrumbs={[
    { name: 'Home', href: '/' },
    { name: 'Jobs', href: '/jobs' },
    { name: jobTitle, href: `/jobs/${$page.params.slug}` },
  ]}
/>

{#if !hiring}
  <div>
    <div class="font-bold text-lg py-8 text-center bg-red-triarc/10 text-red-triarc">
      <Container>
        <span>
          Zurzeit nehmen wir keine Bewerbungen als {jobHero} an
        </span>
      </Container>
    </div>
  </div>
{/if}
{#if jobListingExtended}
  <Block bind:content={jobListingExtended} />
{/if}

{#if isSenior}
  <CollaborationSection />
{/if}
<Block bind:content={benefits} />
{#if data.jobListing.hasTechnologySection}
  <Technology />
{/if}
{#if hiring}
  <Block bind:content={hiringProcess} />
  <ApplicationForm availableJobs={[jobTitle]} jobString={jobTitle} isDefinedListing={true} />
{/if}
<FooterNoContact />
