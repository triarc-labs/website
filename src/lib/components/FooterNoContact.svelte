<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import logoNegative from '$lib/assets/triarc-logo-negativ-ohneTM.svg'

  const year = new Date().getFullYear()

  const linkGroups = [
    {
      title: 'Lösungen',
      links: [
        { title: 'Projekte', href: '/references' },
        { title: 'Produkte', href: '/mlink' },
        { title: 'Stories', href: '/stories' },
      ],
    },
    {
      title: 'Dienstleistungen',
      links: [
        { title: 'Beratung', href: '/consulting' },
        { title: 'Custom Software', href: '/custom-software' },
        { title: 'Innovation Lab', href: '/innovation' },
      ],
    },
    {
      title: 'Über uns',
      links: [
        { title: 'Team', href: '/team' },
        { title: 'Jobs', href: '/jobs' },
        { title: 'Kontakt', href: '/contact' },
      ],
    },
  ]
</script>

<footer class="bg-[#0D1214] text-white">
  <Container>
    <div class="grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-[1.6fr,1fr,1fr,1fr]">
      <div class="sm:col-span-2 lg:col-span-1">
        <a href="/" aria-label="Zur Startseite">
          <img src={logoNegative} alt="triarc laboratories ltd" class="h-9" height="36" />
        </a>
        <address class="mt-6 text-base not-italic leading-relaxed text-gray-400">
          triarc laboratories ltd.<br />
          Neue Hard 14<br />
          8005 Zürich
        </address>
        <div class="mt-6 flex flex-col gap-y-1 text-base">
          <a href="tel:+41442791000" class="text-gray-400 transition hover:text-white">+41 44 279 10 00</a>
          <a href="mailto:development@triarc-labs.com" class="text-gray-400 transition hover:text-white">
            development@triarc-labs.com
          </a>
        </div>
        <a
          href="https://www.linkedin.com/company/triarc-laboratories-ltd/"
          target="_blank"
          rel="noreferrer"
          aria-label="triarc laboratories auf LinkedIn"
          class="mt-6 inline-block text-gray-400 transition hover:text-white"
        >
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
          </svg>
        </a>
      </div>
      {#each linkGroups as group}
        <nav aria-label={group.title}>
          <h3 class="text-sm font-bold uppercase tracking-widest text-gray-500">{group.title}</h3>
          <ul class="mt-4 flex list-none flex-col gap-y-2 p-0">
            {#each group.links as link}
              <li>
                <a href={link.href} class="text-base text-gray-300 transition hover:text-white">{link.title}</a>
              </li>
            {/each}
          </ul>
        </nav>
      {/each}
    </div>
    <div
      class="flex flex-col items-center justify-between gap-y-4 border-t border-white/10 py-6 text-sm text-gray-500 md:flex-row"
    >
      <span>© {year} triarc laboratories ltd.</span>
      <span>Keine Cookies aus Überzeugung</span>
      <a
        href="https://www.swissmadesoftware.org/en/companies/triarc-laboratories-ltd./home.html"
        rel="noreferrer"
        target="_blank"
      >
        <img src="/logos/swiss-logo.png" width="160" height="24" alt="swissmadesoftware" />
      </a>
    </div>
  </Container>
</footer>
