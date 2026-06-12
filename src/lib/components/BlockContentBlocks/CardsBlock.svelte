<script lang="ts">
  import type { Card } from '$lib/components/TypeDefinitions'
  export let cards: Card[]
</script>

<ul
  class="mx-auto mt-16 grid max-w-2xl list-none grid-cols-1 gap-6 p-0 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
>
  {#each cards as card}
    <li class="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
      <h3 class="text-xl font-bold text-gray-900">
        {card.title}
      </h3>
      <p class="mt-3 text-base text-gray-600">{card.content}</p>
    </li>
  {/each}
</ul>
