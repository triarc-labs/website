<script lang="ts">
  import { onMount } from 'svelte'
  import { customerLogos } from '$lib/content/customer-logos'

  // Scroll speed in px/s; the animation duration is derived from the track width so the speed
  // stays the same no matter how many logos there are
  const SPEED = 40

  // Logos get the same visual area instead of the same height: square marks grow, wide wordmarks
  // flatten. Height is clamped so nothing touches the bar edges or becomes illegible.
  const LOGO_AREA = 2000
  const MIN_HEIGHT = 14
  const MAX_HEIGHT = 40

  function fitArea(img: HTMLImageElement, scale = 1) {
    const apply = () => {
      // SVGs without width/height report no natural size in some browsers; the rendered box
      // (h-8 w-auto) still carries the viewBox aspect ratio
      const ratio =
        img.naturalWidth && img.naturalHeight
          ? img.naturalWidth / img.naturalHeight
          : img.offsetWidth / img.offsetHeight
      if (!ratio) return
      const height = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.sqrt((LOGO_AREA * scale) / ratio)))
      img.style.height = `${height}px`
      img.style.width = `${height * ratio}px`
    }
    // Images may already be loaded (from cache) before hydration, so their load event is gone
    if (img.complete) apply()
    img.addEventListener('load', apply)
    return { destroy: () => img.removeEventListener('load', apply) }
  }

  let track: HTMLDivElement
  let duration = 90

  onMount(() => {
    // Logos load after mount and change the track width, so keep the duration in sync
    const observer = new ResizeObserver(() => {
      const loopWidth = track.scrollWidth / 2
      if (loopWidth > 0) duration = loopWidth / SPEED
    })
    observer.observe(track)
    return () => observer.disconnect()
  })
</script>

<div class="customer-carousel" aria-label="Auszug aus unserem Kundenportfolio" role="region">
  <div class="track" bind:this={track} style="--duration: {duration}s">
    <!-- Two identical copies: translating by -50% lands exactly on the start of the second copy -->
    {#each [0, 1] as copy}
      <ul class="logos" aria-hidden={copy === 1 ? 'true' : undefined}>
        {#each customerLogos as logo}
          <li class="flex-shrink-0">
            {#if logo.href}
              <a href={logo.href} rel="noreferrer" target="_blank" tabindex={copy === 1 ? -1 : undefined}>
                <img class="logo {logo.barClass ?? ''}" src={logo.src} alt={logo.name} use:fitArea={logo.barScale} />
              </a>
            {:else}
              <img class="logo {logo.barClass ?? ''}" src={logo.src} alt={logo.name} use:fitArea={logo.barScale} />
            {/if}
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>

<style lang="postcss">
  .customer-carousel {
    @apply fixed bottom-0 inset-x-0 z-40 overflow-hidden bg-white shadow-2xl;
    padding-bottom: env(safe-area-inset-bottom);
    mask-image: linear-gradient(to right, transparent, #000 64px, #000 calc(100% - 64px), transparent);
  }

  .track {
    @apply flex h-16 w-max items-center;
    animation: marquee var(--duration) linear infinite;
  }

  .track:hover {
    animation-play-state: paused;
  }

  .logos {
    @apply flex items-center gap-20 pr-20;
  }

  .logo {
    @apply h-8 w-auto max-w-none object-contain opacity-60 grayscale transition duration-300;
  }

  a:hover .logo,
  a:focus-visible .logo {
    @apply opacity-100 grayscale-0;
  }

  @keyframes marquee {
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .customer-carousel {
      @apply overflow-x-auto;
    }

    .track {
      animation: none;
    }

    .logos[aria-hidden='true'] {
      @apply hidden;
    }
  }
</style>
