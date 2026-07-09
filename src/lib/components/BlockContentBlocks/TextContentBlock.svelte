<script lang="ts">
  export let content: string
  export let light = false
</script>

<p class="mt-2 text-base leading-6 {light ? 'text-white' : 'text-black'}">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html content}
</p>
