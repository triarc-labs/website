<script lang="ts">
  export let items: { name: string; href: string }[]
  /**
   * Emit BreadcrumbList JSON-LD. Keep off on routes where the layout already
   * derives the same trail from the URL path; only one list may exist per page.
   */
  export let emitJsonLd = false

  const SITE_URL = 'https://triarc-labs.com'

  $: jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    })),
  })
</script>

<svelte:head>
  {#if emitJsonLd}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- Static JSON-LD -->
    {@html `<script type="application/ld+json">${jsonLd}</script` + '>'}
  {/if}
</svelte:head>

<nav aria-label="Breadcrumb">
  <ol class="flex list-none flex-wrap items-center gap-x-2 p-0 text-sm text-white/70">
    {#each items as item, index}
      <li class="flex items-center gap-x-2">
        {#if index < items.length - 1}
          <a href={item.href} class="font-bold transition hover:text-white">{item.name}</a>
          <span aria-hidden="true">/</span>
        {:else}
          <span aria-current="page">{item.name}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
