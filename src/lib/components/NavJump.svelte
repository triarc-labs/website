<script lang="ts">
  import { onMount } from 'svelte'

  let navMenuElement: HTMLElement | null

  function scrollToMenu() {
    if (document.scrollingElement && navMenuElement) {
      document.scrollingElement.scrollTo({
        behavior: 'smooth',
        top: navMenuElement.offsetTop,
      })
    }
  }

  onMount(() => {
    navMenuElement = document.getElementById('nav-menu')
  })
</script>

<!--
  White band that sits directly above the footer, replacing the gradient strip.
  The button is no longer floating: it rests at the top-right of this band with
  24px (pb-6) of space to the footer below.
-->
<div class="flex justify-end bg-white px-6 pb-6">
  <button
    aria-label="Zur Navigation scrollen"
    id="nav-jump-button"
    class="flex bg-[#0D1214] p-2 w-10 h-10 ring-1 ring-red-triarc/5 shadow-lg rounded-full items-center justify-center"
    on:click={scrollToMenu}
  >
    <svg
      class="w-6 h-6 text-white"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="m5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</div>
