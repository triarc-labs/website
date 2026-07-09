<script lang="ts">
  import { onMount } from 'svelte'

  /** Transition delay in ms, for staggered entrances. */
  export let delay = 0
  /** Vertical travel distance in px. */
  export let y = 24
  let clazz = ''
  export { clazz as class }

  let el: HTMLElement
  let armed = false
  let shown = false

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      shown = true
      return
    }
    armed = true
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          shown = true
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  })
</script>

<div
  bind:this={el}
  class={clazz}
  class:reveal-armed={armed && !shown}
  class:reveal-shown={shown}
  style="--reveal-delay: {delay}ms; --reveal-y: {y}px"
>
  <slot />
</div>

<style>
  .reveal-armed {
    opacity: 0;
    transform: translateY(var(--reveal-y));
  }
  .reveal-shown {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-delay: var(--reveal-delay);
  }
</style>
