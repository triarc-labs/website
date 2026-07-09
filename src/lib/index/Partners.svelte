<script lang="ts">
  import swissMadeSoftwareLogo from '$lib/assets/img/partners/SwissMadeSoftware.png'
  import sbvLogo from '$lib/assets/img/partners/SBV.png'
  import swissICTLogo from '$lib/assets/img/partners/SwissICT.png'
</script>

<div class="bg-white">
  <div class="text-center max-w-screen-xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8" id="partners">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Unsere Partner</h2>
    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-8 partner-grid">
      <div class="partner-grid-row">
        <a
          href="https://www.swissmadesoftware.org"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img
            height="80"
            class="max-h-20"
            src={swissMadeSoftwareLogo}
            loading="lazy"
            alt="partner-swissmadesoftware"
          />
        </a>
        <a
          href="https://baumeister.swiss/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-20" src={sbvLogo} loading="lazy" alt="partner-sbv" />
        </a>
        <a
          href="https://www.swissict.ch"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-20" src={swissICTLogo} loading="lazy" alt="partner-SwissICT" />
        </a>
      </div>
    </div>
  </div>
</div>

<style style lang="postcss">
  .partner-grid-row {
    @apply contents;
  }
</style>
