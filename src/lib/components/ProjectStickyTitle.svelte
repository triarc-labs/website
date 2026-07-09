<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'

  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'
</script>

<div
  class="flex z-10 flex-col lg:flex-row lg:items-start gap-y-3 lg:gap-x-6 bg-transparent pb-6 pt-14 md:pb-8 md:pt-20"
>
  <Icon class="lg:hidden inline" size="medium" color={iconColor} src={iconSrc} />
  <Icon class="hidden lg:inline lg:mt-1" size="large" color={iconColor} src={iconSrc} />
  <span
    id="sticky-title"
    class="project-title text-4xl leading-tight md:text-5xl md:leading-tight text-white font-bold break-words"
  >
    {title}
  </span>
</div>

<style>
  .project-title {
    @apply inline-block origin-left;
  }
</style>
