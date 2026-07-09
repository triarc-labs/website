<script lang="ts">
  import TeamMembers from '$lib/index/TeamMembers.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { teamMetadata } from '$lib/content/triarc-page-metadata'
  import joinTheTeam from '$lib/assets/img/custom-software/triarc-adventure.svg'
</script>

<MetaHead pageMetadata={teamMetadata}></MetaHead>

<GradientHero
  kicker="Über uns"
  title="Unser Team"
  content="Wir lieben, was wir tun, und dass wir das gemeinsam tun.
        Von der Vision bis zur Anwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen.
        Sie werden von erfahrenen, engagierten Spezialisten persönlich begleitet."
/>

<TeamMembers />

<!-- Join the team -->
<section class="relative overflow-hidden bg-gradient-to-tr from-green-triarc-blended to-blue-triarc-blended">
  <Container>
    <Reveal>
      <div class="flex flex-col items-center gap-10 py-16 md:flex-row md:gap-16 md:py-24">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-white sm:text-3xl">Werde Teil des Teams!</h2>
          <p class="mt-4 text-base leading-7 text-white">
            Zusammen können wir alles erreichen.
            <br /><br />
            Werde Teil des Teams und bewirb dich, wenn du Leidenschaft, Elan und Tatendrang hast und du dich mit unseren
            Werten identifizieren kannst.
          </p>
          <a
            href="/jobs"
            class="mt-6 inline-flex items-center gap-x-1 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Unsere Jobs
            <svg
              class="h-6 w-6 fill-current"
              viewBox="0 0 640 640"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M571.3 331.3C577.5 325.1 577.5 314.9 571.3 308.7L395.3 132.7C389.1 126.5 378.9 126.5 372.7 132.7C366.5 138.9 366.5 149.1 372.7 155.3L521.4 304L80 304C71.2 304 64 311.2 64 320C64 328.8 71.2 336 80 336L521.4 336L372.7 484.7C366.5 490.9 366.5 501.1 372.7 507.3C378.9 513.5 389.1 513.5 395.3 507.3L571.3 331.3z"
              />
            </svg>
          </a>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <img src={joinTheTeam} alt="Triarc Career" width="320" class="w-full max-w-sm" />
        </div>
      </div>
    </Reveal>
  </Container>
</section>

<FooterNoContact />
