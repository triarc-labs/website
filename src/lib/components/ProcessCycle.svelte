<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  interface ProcessStep {
    title: string
    content: string
  }

  export let steps: ProcessStep[] = []

  const accents = ['bg-red-triarc', 'bg-green-triarc', 'bg-blue-triarc']

  let active = 0
  let autoplay = true
  let hovering = false

  function accent(index: number) {
    return accents[index % accents.length]
  }

  function select(index: number) {
    active = index
    autoplay = false
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      select((active + 1) % steps.length)
      event.preventDefault()
    } else if (event.key === 'ArrowLeft') {
      select((active - 1 + steps.length) % steps.length)
      event.preventDefault()
    }
  }

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const timer = setInterval(() => {
      if (autoplay && !hovering) {
        active = (active + 1) % steps.length
      }
    }, 6000)
    return () => clearInterval(timer)
  })
</script>

<div role="presentation" on:mouseenter={() => (hovering = true)} on:mouseleave={() => (hovering = false)}>
  <div
    role="tablist"
    aria-label="Agiler Entwicklungsprozess"
    tabindex="-1"
    class="relative grid grid-cols-2 gap-4 lg:grid-cols-4"
    on:keydown={onKeydown}
  >
    <div class="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gray-200 lg:block" aria-hidden="true"></div>
    {#each steps as step, index}
      <button
        type="button"
        role="tab"
        id="process-tab-{index}"
        aria-selected={active === index}
        aria-controls="process-panel"
        tabindex={active === index ? 0 : -1}
        class="group relative flex flex-col items-center gap-y-3 rounded-2xl p-4 text-center transition duration-300 hover:bg-gray-50"
        on:click={() => select(index)}
      >
        <span
          class="flex h-14 w-14 items-center justify-center rounded-full border-2 text-xl font-bold transition duration-300 {active ===
          index
            ? `${accent(index)} border-transparent text-white shadow-lg`
            : 'border-gray-300 bg-white text-gray-400 group-hover:border-gray-400'}"
        >
          {index + 1}
        </span>
        <span class="text-base font-bold {active === index ? 'text-gray-900' : 'text-gray-500'}">
          {step.title}
        </span>
      </button>
    {/each}
  </div>
  <div class="mt-6 min-h-[200px] md:min-h-[160px]">
    {#key active}
      <div
        id="process-panel"
        role="tabpanel"
        aria-labelledby="process-tab-{active}"
        in:fly={{ y: 12, duration: 300 }}
        class="rounded-3xl bg-gray-50 p-8"
      >
        <p class="max-w-3xl text-lg text-gray-700">{steps[active].content}</p>
      </div>
    {/key}
  </div>
  <p class="mt-6 flex items-center gap-x-3 text-base text-gray-500">
    <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 512 512" aria-hidden="true" fill="currentColor">
      <path
        d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
      />
    </svg>
    Nach dem Review startet der nächste Sprint wieder bei Schritt 1 – so bleibt Ihr Projekt in Bewegung.
  </p>
</div>
