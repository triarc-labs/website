<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'

  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'
</script>

<div class="flex z-10 flex-col gap-y-2 bg-transparent py-6 md:py-8">
  <Icon class="lg:hidden inline" size="medium" color={iconColor} src={iconSrc} />
  <Icon class="hidden lg:inline" size="large" color={iconColor} src={iconSrc} />
  <span id="sticky-title" class="project-title text-4xl leading-tight md:text-5xl text-white font-bold break-words">
    {title}
  </span>
</div>

<style>
  .project-title {
    @apply inline-block origin-left;
  }
</style>
