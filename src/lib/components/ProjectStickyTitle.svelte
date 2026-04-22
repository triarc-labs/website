<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'

  export let scrolled = false
  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'
</script>

<div
  class="
  {scrolled ? 'scrolled' : ''}
  md:sticky md:top-16 flex z-10 flex-col md:flex-row gap-y-2 md:items-center bg-transparent py-8"
>
  <Icon
    class="icon lg:hidden self-start mr-10 flex-shrink-0 origin-top-left transition-transform ease-in-out duration-300"
    size="medium"
    color={iconColor}
    src={iconSrc}
  />
  <Icon
    class="icon hidden lg:block self-start mr-10 flex-shrink-0 origin-top-left transition-transform ease-in-out duration-300"
    size="large"
    color={iconColor}
    src={iconSrc}
  />
  <span
    id="sticky-title"
    class="project-title origin-top-left transition-transform ease-in-out duration-300 text-2xl lg:text-5xl leading-tight text-white font-bold text-balance"
    >{title}</span
  >
</div>

<style>
  .scrolled .project-title {
    @apply md:scale-75;
  }

  .scrolled :global(.icon) {
    @apply md:scale-75;
  }

  .scrolled {
    @apply text-3xl;
  }
</style>
