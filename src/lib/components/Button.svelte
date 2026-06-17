<script lang="ts">
  import { Arrow } from '$lib/content/icons'
  import Icon from '$lib/components/Icon.svelte'

  let clazz = ''
  export { clazz as class }
  export let buttonSize: 'Standard' | 'Small'
  export let buttonMargin: 'Standard' | 'None' = 'Standard'
  export let reference = ''
  export let label = ''
  export let target = ''
  export let buttonColor: 'white' | 'red' | 'blue' | 'green' = 'blue'
  export let buttonGraphicStyle: 'primary' | 'secondary' | 'tertiary' = 'primary'
  export let clicked: () => void = () => {}

  const colorMap = {
    white: 'bg-white',
    red: 'bg-red-triarc',
    blue: 'bg-blue-triarc',
    green: 'bg-green-triarc',
  }
  $: colorClass = colorMap[buttonColor]
</script>

<a
  href={reference}
  type="button"
  target={target ?? ''}
  on:click={clicked}
  class="inline-flex justify-center items-center w-full sm:w-auto pointer-events-auto
  {buttonMargin === 'Standard' ? 'my-4' : 'my-0'}
  {buttonGraphicStyle === 'secondary'
    ? 'px-2 py-2 md:px-4'
    : buttonSize === 'Standard'
      ? 'px-6 py-3 md:px-6 md:py-3'
      : 'px-6 py-3 md:px-3 md:py-1'}
  {colorClass}
  {buttonGraphicStyle === 'primary' ? 'primary' : buttonGraphicStyle === 'secondary' ? 'secondary' : 'tertiary'}
  text-base {buttonGraphicStyle === 'secondary' ? 'font-medium' : 'font-bold'}
  border md:border-0 border-transparent rounded-full
  shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg
  focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2
  disabled:bg-gray-500
  {clazz}"
>
  {label}
  {#if buttonGraphicStyle === 'tertiary' || buttonGraphicStyle === 'secondary'}
    <Icon src={Arrow} size="small" class={buttonColor === 'white' ? 'brightness-0' : ''} />
  {/if}
</a>

<style>
  .primary {
    @apply text-white;
  }
  .secondary {
    @apply text-black w-auto rounded-full gap-x-1;
  }
  .tertiary {
    @apply text-white w-auto gap-x-3;
  }
</style>
