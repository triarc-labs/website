<script lang="ts">
  import { customerLogos } from '$lib/content/customer-logos'
</script>

<div class="bg-white">
  <div class="text-center max-w-screen-xl mx-auto py-8 md:py-11 px-4 sm:px-6 lg:px-8" id="customers">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Auszug aus unserem Kundenportfolio</h2>
    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-8 customer-grid">
      {#each customerLogos as logo}
        {#if logo.href}
          <a
            href={logo.href}
            rel="noreferrer"
            target="_blank"
            class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
          >
            <!--suppress CheckImageSize -->
            <img height="80" class={logo.gridClass} src={logo.src} loading="lazy" alt={logo.name} />
          </a>
        {:else}
          <div
            class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
          >
            <!--suppress CheckImageSize -->
            <img height="80" class={logo.gridClass} src={logo.src} loading="lazy" alt={logo.name} />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
