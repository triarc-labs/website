<script>
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
</script>

<div class="bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended text-white">
  <Container>
    <div class="flex flex-col items-center py-16 text-center sm:py-20">
      <h2 class="text-3xl font-bold sm:text-4xl">Interessiert?</h2>
      <p class="mt-4 text-lg text-white/90">Wir freuen uns auf Sie.</p>
      <a
        class="mt-8 rounded-full bg-white px-7 py-3 text-base font-bold text-blue-triarc-blended shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        href="/contact"
      >
        Kontakt aufnehmen
      </a>
    </div>
  </Container>
</div>

<FooterNoContact />
