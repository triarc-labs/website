<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import JobIntro from './job-intro.svelte'
  import Block from '$lib/components/Block.svelte'
  import type { DetailedJobListing, JobPosting } from '$lib/components/TypeDefinitions'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { JobPostings } from '$lib/content/job-listings'
  import { DetailedJobListings } from '$lib/content/job-listings.js'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { jobsMetadata } from '$lib/content/triarc-page-metadata'

  function serializeSchema(jobPosting: JobPosting) {
    return (
      '<script type="application/ld+json">' +
      JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: jobPosting.claim,
          name: jobPosting.claim,
          hiringOrganization: {
            '@types': 'Organization',
            // Remove
            email: 'development@triarc-labs.com',
            name: 'triarc laboratories ltd.',
            url: 'https://triarc-labs.com',
            telephone: '+41 78 946 69 51',
            keywords: 'custom software, software development, software boutique',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Zürich',
              addressRegion: 'ZH',
              addressCountry: 'CH',
              postalCode: '8005',
              streetAddress: 'Neue Hard 14',
            },
          },
          jobBenefits:
            'Junges dynamisches Team. Modernste Technologien. Spannende, abwechslungsreiche Projekte. Soziokratie. Erfolgsbeteiligung. Grünes Open-Space Office mit Bar und Gym zentral in Zürich. Flexible Arbeitszeiten, Homeoffice und Remote. Innovation Lab, Agile Entwicklung',
          datePosted: '2022-05-13',
          description: `Beschreibung: Triarc Labs sucht ${jobPosting.claim} 60 - 100%`,
          educationRequirements:
            'Hochschulabschluss in Informatik (ETH/Universität/FH/vergleichbarer Leistungsnachweis).',
          employmentType: 'Full- or Part-time',
          experienceRequirements: jobPosting.experienceRequirements,
          incentiveCompensation: 'Beteiligung am Unternehmenserfolg',
          industry: 'Custom Software Development',
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Zürich',
              addressRegion: 'ZH',
              addressCountry: 'CH',
              postalCode: '8005',
              streetAddress: 'Neue Hard 14',
              email: 'development@triarc-labs.com',
            },
          },
          occupationalCategory: '15-1132.00 Software Developers, Application',
          qualifications:
            'Leidenschaft für die Software Entwicklung. Hochschulabschluss in Informatik (ETH/Universität/FH/vergleichbarer Leistungsnachweis). Hohe Methodenkompetenz und logisches, vernetztes Denken. Spass an der Arbeit im Team. Lösungsorientiertes Denken und Handeln. Lernfähigkeit und kontinuierliche Weiterentwicklung ',
          responsibilities: jobPosting.responsibilities,
          skills:
            ' Angular, C#, .Net, NodeJS, Docker, MongoDB, PostgreSQL, ElasticSearch, Gitlab, Prometheus, Sentry, Azure',

          baseSalary: '104000-128000',
          salaryCurrency: 'CHF',
          specialCommitments: '60% - 100%',
          workHours: '24 - 40 Stunden pro Woche',
        },
        null,
        2
      ) +
      // prettier-ignore
      // eslint-disable-next-line
      '<\/script>'
    )
  }

  const jobPostings = JobPostings

  let listings: DetailedJobListing[] = DetailedJobListings.filter(
    (listing) => listing.BasicJobInfo.jobDetails?.currentlyHiring
  )
</script>

<MetaHead pageMetadata={jobsMetadata}></MetaHead>

{#each jobPostings as jobPosting}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html serializeSchema(jobPosting)}
{/each}

<GradientHero
  orbits
  kicker="Über uns"
  title="Jobs"
  content="Erfahre mehr über unsere offenen Stellen und was Dich sonst noch dazu interessieren könnte."
/>
<JobIntro />

<section class="bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended">
  <div class="text-white">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        <span class="block">Unsere Stellen</span>
      </h2>
      <p class="mt-4 text-lg leading-6">
        Wir bieten unterschiedliche Stufen, auf denen Du Deine Karriere bei uns starten kannst.
      </p>
    </div>
  </div>

  <div class="mx-auto flex max-w-screen-xl flex-col gap-6 px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
    {#each listings as listing}
      <!-- Whole card links to the detail page (like the references cards); the CTA below is a
           visual-only span so we don't nest an <a> inside this <a>. -->
      <a
        href="jobs/{listing.slug}"
        class="job-card group block overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <Block bind:content={listing.BasicJobInfo}>
          <div slot="columnCta" class="mt-8">
            <span
              class="mehr-erfahren inline-flex items-center gap-x-1 rounded-full bg-black px-4 py-2 text-base font-medium text-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.25)]"
            >
              Mehr erfahren
              <Icon src={Arrow} size="small" />
            </span>
          </div>
        </Block>
      </a>
    {/each}
  </div>
</section>

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

<style lang="postcss">
  /* Block wraps its content in an `overflow-hidden` box (for its collapse animation). The CTA
     button sits flush at that box's bottom edge, so the button's soft hover shadow was clipped
     there and read as a hard/angular edge. These job cards are never collapsed, so lifting that
     clip lets the shadow fade out naturally. The card itself still clips (rounded corners) but the
     button sits far enough from the card edges that its shadow is unaffected. */
  .job-card :global(.overflow-hidden.max-h-infiniti) {
    overflow: visible;
  }

  /* When the cursor is directly on the button (while already hovering the card), give it an
     extra float on top of the card-level lift — a hint that the button itself is the link.
     The `.job-card:hover .mehr-erfahren:hover` selector outranks the card-hover lift, so it wins. */
  .job-card:hover .mehr-erfahren:hover {
    @apply -translate-y-1.5 shadow-[0_16px_34px_-10px_rgba(0,0,0,0.3)];
  }
</style>
