<script lang="ts">
  import { Arrow, EnvelopeWhiteOutline } from '$lib/content/icons'
  import Icon from '$lib/components/Icon.svelte'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  // On the landing page the hero already shows a "Kontaktieren Sie uns!" CTA,
  // so we hide the floating button until the visitor scrolls past the hero to
  // avoid showing the same call to action twice.
  $: isHome = $page.url.pathname === '/'

  // On the contact page and the /ai campaign page the floating button would be
  // redundant – both already expose their own contact call to action.
  $: isContact = $page.url.pathname.startsWith('/contact') || $page.url.pathname.startsWith('/ai')

  let scrolledPastHero = false

  function onScroll() {
    scrolledPastHero = window.scrollY > window.innerHeight * 0.6
  }

  onMount(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  })

  $: visible = !isContact && (!isHome || scrolledPastHero)
</script>

{#if visible}
  <a
    href="mailto:development@triarc-labs.com"
    type="button"
    class="fixed text-white flex flex-row gap-x-1 bg-black top-[11px] md:top-24 right-6 md:right-12 justify-center items-center py-2 px-2 md:px-4 text-base font-medium border md:border-0 border-transparent rounded-full z-50
   md:rounded-3xl shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
  >
    <span class="hidden md:inline">Kontaktieren Sie uns!</span>
    <Icon src={EnvelopeWhiteOutline} size="small" class="block md:hidden" />
    <Icon src={Arrow} size="small" class="hidden md:block" />
  </a>
{/if}

<style>
</style>
