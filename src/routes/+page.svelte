<script lang="ts">
  import Landing from '$lib/index/Landing.svelte'
  import LandingMission from '$lib/index/LandingMission.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { landingMetadata } from '$lib/content/triarc-page-metadata'

  const organizationSchema = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'triarc laboratories Ltd.',
      url: 'https://triarc-labs.com',
      logo: 'https://triarc-labs.com/triarc-logo-black.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+41 44 279 10 00',
        contactType: 'sales',
        email: 'development@triarc-labs.com',
        availableLanguage: ['German', 'English'],
      },
      sameAs: ['https://www.linkedin.com/company/triarc-laboratories-ltd/'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Neue Hard 14',
        addressLocality: 'Zürich',
        addressRegion: 'ZH',
        postalCode: '8005',
        addressCountry: 'CH',
      },
    },
    null,
    2
  )
</script>

<MetaHead pageMetadata={landingMetadata}></MetaHead>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- Static JSON-LD -->
  {@html '<script type="application/ld+json">' + organizationSchema + '</script>'}
</svelte:head>

<Landing></Landing>
<LandingMission></LandingMission>
