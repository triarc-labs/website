<script lang="ts">
  import waloLogo from '$lib/assets/img/customer/walo-logo.svg'
  import kibagLogo from '$lib/assets/img/customer/kibag-logo.svg'
  import riwaxLogo from '$lib/assets/img/customer/riwax-logo.svg'
  import sersaLogo from '$lib/assets/img/customer/sersa-logo.svg'
  import enzlerLogo from '$lib/assets/img/customer/enzler-logo.png'
  import orthoTeamLogo from '$lib/assets/img/customer/ortho-team-logo.svg'
  import tanneLogo4sprachig from '$lib/assets/img/customer/Tanne_Logo_4sprachig.png'
  import ideeSportLogoWebp from '$lib/assets/img/customer/idee-sport-logo.webp'
  import svmbLogo from '$lib/assets/img/customer/svmb-logo.svg'
  import srfLogo from '$lib/assets/img/customer/srf-logo.svg'
  import helsanaLogo from '$lib/assets/img/customer/helsana-logo.svg'
  import wettsteinLogo from '$lib/assets/img/customer/wettstein-logo.png'
  import glbLogo from '$lib/assets/img/customer/glb-logo.svg'
  import eblLogo from '$lib/assets/img/customer/ebl-logo.svg'
  import doreanLogo from '$lib/assets/img/customer/dorean-logo.svg'
  import christenLogo from '$lib/assets/img/customer/christen.svg'
  import burkhalterLogo from '$lib/assets/img/customer/burkhalter_holding_logo.svg'
  import renggliLogo from '$lib/assets/img/customer/renggli-logo.svg'
  import volvoLogo from '$lib/assets/img/customer/volvo-logo.png'
  import espaceLogo from '$lib/assets/img/customer/espace-logo.svg'
  import schindlerLogo from '$lib/assets/img/customer/schindler-logo.png'
  import sutterLogo from '$lib/assets/img/customer/sutter.svg'
  import helvetasLogo from '$lib/assets/img/customer/helvetas.gif'
  import fidigitLogo from '$lib/assets/img/customer/fidigit.jpeg'
  import helfensteinLogo from '$lib/assets/img/customer/Header.svg'
  import iwbLogo from '$lib/assets/img/customer/iwbLogo.svg'
  import analyticaLogo from '$lib/assets/img/customer/analytica-logo-main.svg'
</script>

<div class="bg-white">
  <div class="text-center max-w-screen-xl mx-auto py-8 md:py-11 px-4 sm:px-6 lg:px-8" id="customers">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Auszug aus unserem Kundenportfolio</h2>
    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-8 customer-grid">
      <div class="customer-grid-row">
        <a
          href="https://walo.ch"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-20" src={waloLogo} loading="lazy" alt="walo" />
        </a>
        <a
          href="https://www.kibag.ch"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-20" src={kibagLogo} loading="lazy" alt="kibag" />
        </a>
        <a
          href="https://riwax.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-12" src={riwaxLogo} loading="lazy" alt="riwax" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://switzerland.rhomberg-sersa.com"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-14" src={sersaLogo} loading="lazy" alt="sersa" />
        </a>
        <a
          href="https://www.enzler.com/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-10" src={enzlerLogo} loading="lazy" alt="enzler" />
        </a>
        <a
          href="https://www.ortho-team.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-10" src={orthoTeamLogo} loading="lazy" alt="ortho-team" />
        </a>
      </div>
      <!--            volvo, schindler, espace, srf, helsana  -->

      <div class="customer-grid-row">
        <a
          href="https://www.tanne.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <picture class="max-h-12 filter">
            <source type="image/png" srcset={tanneLogo4sprachig} />
            <!--suppress CheckImageSize -->
            <img height="80" class="max-h-20" src={tanneLogo4sprachig} loading="lazy" alt="tanne" />
          </picture>
        </a>
        <a
          href="https://www.ideesport.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <picture class="max-h-12 filter">
            <source type="image/webp" srcset={ideeSportLogoWebp} />
            <!--suppress CheckImageSize -->
            <img height="80" class="max-h-14" src={ideeSportLogoWebp} loading="lazy" alt="idee-sport" />
          </picture>
        </a>
        <a
          href="https://www.bechterew.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-10" src={svmbLogo} loading="lazy" alt="svmb" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.srf.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-10" src={srfLogo} loading="lazy" alt="srf" />
        </a>
        <a
          href="https://www.helsana.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-6" src={helsanaLogo} loading="lazy" alt="helsana" />
        </a>
        <a
          href="http://www.wwag.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-16 filter invert" src={wettsteinLogo} loading="lazy" alt="wettstein" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="http://www.glb.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-16" src={glbLogo} loading="lazy" alt="glb" />
        </a>
        <a
          href="http://www.ebl.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-16" src={eblLogo} loading="lazy" alt="ebl" />
        </a>
        <a
          href="https://www.dorean.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-10" src={doreanLogo} loading="lazy" alt="dorean" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.christen-ag.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-12" src={christenLogo} loading="lazy" alt="christen ag" />
        </a>
        <a
          href="https://www.burkhalter.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-12" src={burkhalterLogo} loading="lazy" alt="burkhalter holding group" />
        </a>
        <a
          href="https://www.renggli.swiss"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-24" src={renggliLogo} loading="lazy" alt="renggli" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.volvocars.com/de-ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-24" src={volvoLogo} loading="lazy" alt="volvo" />
        </a>
        <a
          href="https://espacereal.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-10" src={espaceLogo} loading="lazy" alt="espace" />
        </a>
        <a
          href="https://www.schindler.com/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-28" src={schindlerLogo} loading="lazy" alt="schindler" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.sutterbau.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-24" src={sutterLogo} loading="lazy" alt="sutter" />
        </a>
        <a
          href="https://www.helvetas.org/en/switzerland"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-10" src={helvetasLogo} loading="lazy" alt="helvetas" />
        </a>
        <a
          href="https://www.fidinam.com/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-28" src={fidigitLogo} loading="lazy" alt="afry" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.helfensteinbucher.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-13" src={helfensteinLogo} loading="lazy" alt="customer-h&b" />
        </a>
        <a
          href="https://www.iwb.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-12" src={iwbLogo} loading="lazy" alt="customer-iwb" />
        </a>
        <a
          href="https://www.analytica.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex min-h-[180px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm filter"
        >
          <img height="80" class="max-h-12" src={analyticaLogo} loading="lazy" alt="customer-analytica" />
        </a>
      </div>
    </div>
  </div>
</div>

<style style lang="postcss">
  .customer-grid-row {
    @apply contents;
  }
</style>
