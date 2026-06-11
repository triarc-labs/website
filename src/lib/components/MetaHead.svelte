<script lang="ts">
  import type { TriarcPageMetadata } from '$lib/components/TypeDefinitions'
  import { page } from '$app/stores'

  export let pageMetadata: TriarcPageMetadata

  const siteName = 'triarc laboratories Ltd.'
  const fallbackOgImage = 'https://triarc-labs.com/triarc-og-default.png'

  $: canonicalUrl = pageMetadata.canonicalUrl ?? $page.url.href
  $: pageTitle = pageMetadata.metaTitle ?? pageMetadata.title
  $: pageDescription = pageMetadata.description
  $: ogImage = pageMetadata.ogImage ?? fallbackOgImage
</script>

<svelte:head>
  <title>{pageMetadata.title}</title>

  <meta name="description" content={pageDescription} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="de_CH" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Canonical -->
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>
