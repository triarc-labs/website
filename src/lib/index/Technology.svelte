<script lang="ts">
  import { ourTechnologies } from '$lib/content/technologies'

  let technologies = ourTechnologies
</script>

<div class="bg-white text-gray-800">
  <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-2xl font-bold">Unsere Technologien</h2>
        <p class="text-base leading-6">
          Unser Team bringt ein breites Fachwissen mit und beherrscht <span class="underline">fast</span>
          alle gängigen Programmiersprachen. <br />
          Wir freuen uns auf Deine Unterstützung in unseren Projekten, welche wir über mehrere Technologien hinweg zum Erfolg
          führen.
        </p>
      </div>
      <ul
        class="grid list-none grid-cols-1 gap-6 self-center p-0 mt-8 sm:grid-cols-2 lg:grid-cols-3"
        id="technology"
      >
        {#each technologies as technology}
          <li class="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 text-left shadow-sm">
            <div class="flex items-center gap-4">
              <img width="48" height="48" src={technology.icon} loading="lazy" alt={technology.iconAlt} />
              <h3 class="text-xl font-bold text-gray-900">{technology.title}</h3>
            </div>
            <p class="mt-3 text-base text-black">
              {technology.text}
            </p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
