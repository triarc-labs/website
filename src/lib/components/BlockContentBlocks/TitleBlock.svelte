<script lang="ts">
  export let title: string
  /** Render as a large section heading (matches the testimonials "Das sagen unsere Kunden" style). */
  export let large = false
  /** Use white text (for dark/gradient backgrounds). */
  export let light = false
</script>

<h2
  class="font-bold {large ? 'text-3xl tracking-tight sm:text-4xl' : 'text-2xl'} {light
    ? 'text-white'
    : large
      ? 'text-gray-900'
      : 'text-black'}"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html title}
</h2>
