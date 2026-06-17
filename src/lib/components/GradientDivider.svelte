<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Container from '$lib/components/Container.svelte'
  import type { TriarcGradientDivider } from '$lib/components/TypeDefinitions'
  export let gradientContent: TriarcGradientDivider
</script>

<div class={`flex justify-center text-center text-white py-[110px] min-h-80 w-full gradient-${gradientContent.color}`}>
  <Container>
    <div>
      <div class="text-4xl font-bold pb-6">{gradientContent.title}</div>
      <div class="text-lg max-w-prose pb-5">{gradientContent.content}</div>
      <Button
        buttonGraphicStyle="secondary"
        buttonColor="white"
        label={gradientContent.buttonLabel}
        reference={gradientContent.linksTo}
        buttonSize="Small">Test</Button
      >
    </div>
  </Container>
</div>

<style>
  .gradient-green-blue {
    @apply bg-gradient-to-tr from-green-triarc-blended  to-blue-triarc-blended;
  }

  .gradient-blue-red {
    @apply bg-gradient-to-tr from-blue-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-green {
    @apply bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended;
  }

  .gradient-green-red {
    @apply bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-blue {
    @apply bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended;
  }
</style>
