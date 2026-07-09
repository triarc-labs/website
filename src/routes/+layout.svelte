<script lang="ts">
  import '../app.postcss'

  import { beforeUpdate, onMount } from 'svelte'
  import logo from '../lib/assets/triarc-labs-black.svg'
  import logoNegative from '$lib/assets/triarc-logo-negativ-ohneTM.svg'
  import NavDropDown from '$lib/components/NavDropDown.svelte'
  import NavDropDownItem from '$lib/components/NavDropDownItem.svelte'
  import type { MetaInfo, NavItem } from '$lib/components/TypeDefinitions'
  import ContactButton from '$lib/components/ContactButton.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { Arrow } from '$lib/content/icons'
  import { afterNavigate } from '$app/navigation'

  export let menuOpen = false

  export let mobileTitle = ''
  export let mobileSubTitle = ''

  export let data: { pathname: string }
  let closeOnNavigate = false

  // Experimental to wait for page to be loaded before hiding the Nav Menu
  afterNavigate(() => {
    if (closeOnNavigate) {
      menuOpen = false
      closeOnNavigate = false
    }
  })

  // Lock body scroll while the mobile menu overlay is open
  $: if (typeof document !== 'undefined') {
    document.body.classList.toggle('overflow-hidden', menuOpen)
  }

  function onWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      menuOpen = false
    }
  }

  // Titles for pages that intentionally stay out of the navigation (e.g. campaign
  // landing pages) so the mobile top bar still shows a meaningful label.
  const offNavMetaInfo: Record<string, MetaInfo> = {
    '/ai': { title: 'Smarter mit KI', description: 'KI für Ihr Unternehmen' },
  }

  beforeUpdate(() => {
    const navItem = linkMetaInfo[data.pathname] ?? offNavMetaInfo[data.pathname]
    if (navItem) {
      mobileTitle = navItem.title
      mobileSubTitle = navItem.description
    } else {
      mobileTitle = 'Home'
      mobileSubTitle = 'Welcome to Triarc Labs'
    }
  })

  const navItems: NavItem[] = [
    {
      type: 'heading',
      title: 'together you succeed',
      items: [
        {
          type: 'link',
          title: 'Strategie',
          path: '/strategy',
          description: 'Strategie in die Praxis',
        },
        {
          type: 'link',
          title: 'Betrieb',
          path: '/operations',
          description: 'Operativen Reibungsverlust reduzieren',
        },
        {
          type: 'link',
          title: 'Zukunft',
          path: '/future',
          description: 'Wettbewerbsfähigkeit sichern',
        },
      ],
    },
    {
      type: 'heading',
      title: 'Lösungen',
      items: [
        {
          type: 'link',
          title: 'Stories',
          description: 'Neustes von uns und unserem Umfeld',
          path: '/stories',
        },
        {
          type: 'link',
          title: 'Produkte',
          description: 'Real time data hub',
          path: '/mlink',
        },
        {
          type: 'link',
          title: 'Projekte',
          description: 'Erfahrungen und Referenzen',
          path: '/references',
        },
      ],
    },
    {
      type: 'heading',
      title: 'Dienstleistungen',
      items: [
        {
          type: 'link',
          title: 'Beratung',
          description: 'Brücken bauen',
          path: '/consulting',
        },
        {
          type: 'link',
          title: 'Custom Software',
          description: 'Massgeschneiderte Software',
          path: '/custom-software',
        },
        {
          type: 'link',
          title: 'Innovation Lab',
          description: 'Produktentwicklung',
          path: '/innovation',
        },
      ],
    },
    {
      type: 'heading',
      title: 'Über uns',
      items: [
        {
          type: 'link',
          title: 'Kontakt',
          description: 'Sprechen Sie mit uns über Ihre Anliegen',
          path: '/contact',
        },
        {
          type: 'link',
          title: 'Team',
          description: 'Wer wir sind',
          path: '/team',
        },
        {
          type: 'link',
          title: 'Jobs',
          description: 'Für Begeisterte und Motivierte',
          path: '/jobs',
        },
        // ToDo enable when Page exists
        // {
        //   type: 'link',
        //   title: 'Partner',
        //   description: '',
        //   path: '/jobs',
        // },
      ],
    },
  ]

  const linkMetaInfo = navItems.reduce<Record<string, MetaInfo>>((map, item) => {
    if (item.type === 'heading') {
      for (const subItem of item.items) {
        map[subItem.path] = { title: subItem.title, description: subItem.description }
      }
    } else {
      map[item.path] = { title: item.title, description: item.description }
    }
    return map
  }, {})

  function toggle() {
    menuOpen = !menuOpen
  }

  function hideMenu() {
    menuOpen = false
  }

  onMount(() => {
    const messages: { [key: string]: string } = {
      en: "%c We're hiring! Checkout https://triarc-labs.com/jobs",
      de: '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-DE': '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-CH': '%c Mir suched dich! https://triarc-labs.com/jobs',
    }
    const message = messages[navigator.language] || messages['en']
    console.log(
      message,
      [
        'background-image: url(https://triarc-labs.com/icons/triarc-logo.svg)',
        'background-position: left center',
        'color: #fff',
        'padding: 10px 20px 10px 180px',
        'line-height: 80px',
        'background-repeat: no-repeat',
        'height : 100px',
      ].join(';')
    )

    const video = document.getElementById('intro-video') as HTMLVideoElement
    if (video) {
      video.setAttribute('muted', '')
      video.playsInline = true
      video.onloadeddata = () => {
        video.muted = true
        video.play()
      }
      video.play()
    }
  })

  // BreadcrumbList JSON-LD – erzeugt Breadcrumbs aus dem aktuellen Pfad
  $: breadcrumbSegments = getBreadcrumbSegments(data.pathname)

  function getBreadcrumbSegments(pathname: string) {
    if (pathname === '/') return []
    // Ghost project pages emit their own canonical trail (pillar parent from the first tag);
    // the path-based trail would invent a non-existent "Projects" page.
    if (pathname.startsWith('/projects/')) return []
    const segments = pathname.split('/').filter(Boolean)
    const items: { name: string; url: string }[] = []
    let cumulativePath = ''
    for (const segment of segments) {
      cumulativePath += '/' + segment
      const linkInfo = linkMetaInfo[cumulativePath]
      items.push({
        name: linkInfo?.title ?? segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        url: `https://triarc-labs.com${cumulativePath}`,
      })
    }
    return items
  }

  $: breadcrumbJsonLd =
    breadcrumbSegments.length > 0
      ? JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://triarc-labs.com',
            },
            ...breadcrumbSegments.map((seg, i) => ({
              '@type': 'ListItem',
              position: i + 2,
              name: seg.name,
              item: seg.url,
            })),
          ],
        })
      : ''
</script>

<svelte:head>
  {#if breadcrumbJsonLd}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- Static JSON-LD -->
    {@html `<script type="application/ld+json">${breadcrumbJsonLd}</script` + '>'}
  {/if}
</svelte:head>

<svelte:window on:keydown={onWindowKeydown} />

<ContactButton></ContactButton>
<div id="page" class="content {menuOpen ? 'open' : 'closed'}">
  <nav class="navbar" id="nav-menu">
    <div class="navbar-container">
      <a
        href="/"
        on:click={(event) => {
          if (data.pathname === '/') {
            event.preventDefault()
            hideMenu()
          }
          hideMenu()
        }}
        class="flex items-center py-2 md:pr-8 lg:pr-16"
      >
        <img src={logo} alt="triarc laboratories ltd" width="172" height="29" />
        <!--        <img  src={logoNoText} alt="triarc laboratories ltd" width="172" height="29" />-->
      </a>
      <ul class="nav-links">
        {#each navItems as navItem}
          <li
            class="my-2 md:my-2 last:mb-2 first:mt-2 py-3 px-4 {navItem.type === 'link' &&
            navItem.path === data.pathname
              ? 'rounded-md bg-gray-100 bg-opacity-10'
              : ''}"
          >
            {#if navItem.type === 'link'}
              <a href={navItem.path} on:click={() => (closeOnNavigate = true)}>
                <div class="font-semibold leading-6 text-gray-900 text-sm">{navItem.title}</div>
                <!--            <div class="font-light text-sm">{navItem.description}</div>-->
              </a>
            {:else}
              <NavDropDown
                title={navItem.title}
                isCurrentCategory={navItem.items.some((item) => item.path === data.pathname)}
              >
                {#each navItem.items as subItem}
                  <NavDropDownItem
                    title={subItem.title}
                    description={subItem.description}
                    close={hideMenu}
                    on:closeAfterNavigate={() => (closeOnNavigate = true)}
                    path={subItem.path}
                    isCurrentPath={subItem.path === data.pathname}
                  />
                {/each}
              </NavDropDown>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </nav>

  <!-- Mobile fullscreen menu -->
  <div
    class="mobile-menu md:hidden"
    class:mobile-menu--open={menuOpen}
    role="dialog"
    aria-modal="true"
    aria-label="Navigation"
    aria-hidden={!menuOpen}
  >
    <div
      class="mobile-menu__panel bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended"
    >
      <div class="flex flex-shrink-0 items-center justify-between px-8 pb-2 pt-5">
        <a href="/" on:click={hideMenu} aria-label="Zur Startseite">
          <img src={logoNegative} alt="triarc laboratories ltd" class="h-8" height="32" />
        </a>
        <button
          class="rounded-full p-2 text-white transition hover:bg-white/10"
          on:click={hideMenu}
          aria-label="Menü schliessen"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-7 w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <nav class="flex-grow overflow-y-auto px-8 pt-2 pb-[calc(3rem+env(safe-area-inset-bottom))]">
        {#each navItems as navItem, groupIndex}
          <div class="mobile-menu__group" style="--stagger: {groupIndex}">
            {#if navItem.type === 'link'}
              <a class="block py-2 text-2xl font-bold text-white" href={navItem.path} on:click={hideMenu}>
                {navItem.title}
              </a>
            {:else}
              <div class="mb-2 mt-7 flex items-center">
                <span class="text-sm font-bold uppercase tracking-widest text-white/60">{navItem.title}</span>
              </div>
              <ul class="flex list-none flex-col p-0">
                {#each navItem.items as subItem}
                  <li>
                    <a
                      class="block rounded-xl px-3 py-2 -mx-3 transition hover:bg-white/10 {subItem.path ===
                      data.pathname
                        ? 'bg-white/10'
                        : ''}"
                      href={subItem.path}
                      on:click={hideMenu}
                    >
                      <span class="text-xl font-bold text-white">{subItem.title}</span>
                      {#if subItem.description}
                        <span class="block text-sm text-white/60">{subItem.description}</span>
                      {/if}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
        <div class="mobile-menu__group pt-8" style="--stagger: {navItems.length}">
          <a
            href="/contact"
            on:click={hideMenu}
            class="inline-flex items-center gap-x-1 rounded-full bg-white px-7 py-3 text-base font-medium text-black shadow-lg"
          >
            Kontaktieren Sie uns
            <Icon src={Arrow} size="small" class="brightness-0" />
          </a>
        </div>
      </nav>
    </div>
  </div>

  <div class="main-container w-full content">
    <div class="shadow-xl mobile-bar z-20 bg-white w-full py-2 px-8 flex items-center md:hidden" id="mobile-bar">
      <button class="py-2 px-2 rounded-md" on:click={toggle} aria-label="Navigation Menu">
        <svg width="32px" height="25px" viewBox="0 0 29 25" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="2">
            <line x1="0.5" y1="0.5" x2="31.5" y2="0.5" id="Line" stroke="#DC002E" />
            <line x1="0.5" y1="11.5" x2="31.5" y2="11.5" id="Line" stroke="#009534" />
            <line x1="0.5" y1="22.5" x2="31.5" y2="22.5" id="Line" stroke="#007BC0" />
          </g>
        </svg>
      </button>
      <div class="text-black ml-3 flex-grow min-w-0">
        <div class="font-bold truncate">{mobileTitle}</div>
        <div class="font-light text-sm truncate">{mobileSubTitle}</div>
      </div>
    </div>
    <div class="page-content">
      <slot />
    </div>
  </div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style style lang="postcss">
  #page {
    @apply bg-white flex flex-col min-h-screen md:pt-navbar;
  }

  /*noinspection CssUnusedSymbol*/
  /*#page.landing {*/
  /*  @apply flex-col-reverse lg:flex-row;*/
  /*}*/
  /*noinspection CssUnusedSymbol*/
  #page.content {
    @apply flex flex-col;
  }

  #page .navbar {
    @apply text-[323F33] bg-white min-h-0 hidden md:flex flex-shrink-0 z-[60] shadow-2xl w-full relative md:flex-row md:h-16
      group-odd:xl:flex-row group-even:xl:flex-row-reverse flex-grow md:fixed md:top-0;
  }

  /*#page.landing .navbar {*/
  /*  @apply max-h-screen;*/
  /*}*/

  /*#page.landing .mobile-bar {*/
  /*  @apply hidden;*/
  /*}*/

  #page .mobile-bar {
    @apply h-16;
  }

  #page .mobile-bar {
    @apply sticky top-0;
  }

  /* Horizontal padding mirrors Container so the nav aligns with the page content edges */
  .navbar-container {
    @apply max-w-screen-xl mx-auto flex w-full flex-col md:flex-row md:h-16 min-h-0 px-8 lg:px-16;
  }

  /*noinspection CssUnusedSymbol*/
  #page.landing .navbar {
    @apply h-screen;
  }

  #page.content .navbar {
    @apply hidden md:flex items-center;
  }

  #page .navbar .nav-links {
    @apply flex md:flex-row w-full;
  }

  #page.content .navbar .nav-links {
    @apply min-h-0;
  }

  /*#page.landing .navbar {*/
  /*  @apply px-0 py-8 items-stretch flex-col justify-center w-full lg:max-w-sm lg:fixed lg:top-0 overflow-x-hidden;*/
  /*}*/

  /*#page.landing .navbar-container {*/
  /*  @apply flex-col;*/
  /*}*/

  /*#page.landing .navbar .nav-links {*/
  /*  @apply flex-col flex-grow overflow-y-auto overflow-x-hidden min-h-0 px-8 py-8;*/
  /*}*/
  /*#page .navbar .nav-links {*/
  /*  @apply scrollbar-thin scrollbar-thumb-blue-triarc md:overflow-visible scrollbar-track-transparent;*/
  /* scrollbar-track-gray-800*/
  /*}*/

  #page.landing .main-container {
    @apply md:pl-96;
  }

  /* === Mobile fullscreen menu === */
  .mobile-menu {
    /* Pin all four edges so the overlay fills the fixed containing block. On iOS Safari that
       block is the layout (large) viewport, so `bottom: 0` sits behind the collapsible bottom
       browser bar — the gradient runs the full screen height and behind the chrome instead of
       being cut off above it. `100dvh`/`100lvh` on a top-anchored element proved unreliable here. */
    @apply fixed inset-0 z-50;
    visibility: hidden;
    transition: visibility 0s linear 450ms;
  }
  .mobile-menu--open {
    visibility: visible;
    transition-delay: 0s;
  }

  .mobile-menu__panel {
    @apply absolute inset-0 flex flex-col text-white;
    clip-path: circle(0px at 44px 32px);
    transition: clip-path 450ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .mobile-menu--open .mobile-menu__panel {
    clip-path: circle(150% at 44px 32px);
  }

  .mobile-menu__group {
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity 350ms ease,
      transform 350ms ease;
  }
  .mobile-menu--open .mobile-menu__group {
    opacity: 1;
    transform: none;
    transition-delay: calc(140ms + var(--stagger) * 60ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .mobile-menu,
    .mobile-menu__panel,
    .mobile-menu__group {
      transition: none;
    }
    .mobile-menu__panel {
      clip-path: none;
      opacity: 0;
    }
    .mobile-menu--open .mobile-menu__panel {
      opacity: 1;
    }
    .mobile-menu__group {
      opacity: 1;
      transform: none;
    }
    .mobile-menu:not(.mobile-menu--open) .mobile-menu__panel {
      opacity: 0;
    }
  }

  /* Styles für die alternierenden Contentblöcke um nicht jedes mal eine Spezifische Implementation notwendig zu machen. */
  :global:nth-child(odd of .alternating) {
    @apply bg-white;
  }

  :global:nth-child(even of .alternating) {
    @apply bg-gray-100;
  }

  :global:nth-child(odd of .alternating) .block-card {
    @apply bg-gray-100;
  }

  :global:nth-child(even of .alternating) .block-card {
    @apply bg-white;
  }

  :global:nth-child(even of .alternating) .form-section {
    @apply border-b-gray-900/20;
  }

  :global:nth-child(even of .alternating) .drop-area {
    @apply bg-white;
  }

  :global:nth-child(even of .alternating) .drop-area:hover {
    @apply bg-gray-100;
  }

  :global:nth-child(even of .alternating) .testimonial {
    @apply lg:order-last;
  }
</style>
