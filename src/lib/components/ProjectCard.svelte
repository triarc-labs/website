<script lang="ts">
  import { Arrow } from '$lib/content/icons'
  import Icon from '$lib/components/Icon.svelte'
  import type { TriarcColor, TriarcProjectContent } from '$lib/components/TypeDefinitions'

  export let card: TriarcProjectContent
  export let buttonColor: TriarcColor

  const buttonColorMap: Record<TriarcColor, string> = {
    green: 'bg-green-triarc',
    blue: 'bg-blue-triarc',
    red: 'bg-red-triarc',
  }
</script>

<!-- ToDo Try to do it with just CSS without a duplication. Svelte Store for mobile check has refresh/load stutters/transforms that look ugly -->
<a
  href={card.content.sectionLink}
  class="project-card group grid grid-cols-1 lg:grid-cols-2 bg-white place-items-center items-center rounded-3xl lg:h-[476px] mb-16 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl focus-visible:-translate-y-1"
>
  <div class="p-5 md:p-10 w-full hyphens-auto">
    <div class="lg:hidden project-card-image w-full overflow-hidden mb-6">
      <img
        src={card.image.src}
        srcset={card.image.srcset}
        sizes={card.image.sizes}
        loading="lazy"
        alt={card.image.alt}
        class="w-full object-contain"
      />
    </div>
    <div class="text-lg w-full max-w-full mb-2">
      {card.content.prefix}
    </div>
    <div class="text-xl md:text-3xl font-bold w-full max-w-full mb-2 whitespace-pre-line">
      {card.content.title}
    </div>
    <div lang="de" class="text-base max-w-prose whitespace-normal hyphens-auto mb-4">
      {card.content.description}
    </div>
    <span
      class="mehr-dazu inline-flex items-center gap-x-3 w-auto px-6 py-3 md:px-3 md:py-1 rounded-full text-base font-medium text-white {buttonColorMap[
        buttonColor
      ]} transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.25)]"
    >
      Mehr dazu
      <Icon src={Arrow} size="small" />
    </span>
  </div>
  <div class="hidden lg:block project-card-image w-full overflow-hidden">
    <img
      src={card.image.src}
      srcset={card.image.srcset}
      sizes={card.image.sizes}
      loading="lazy"
      alt={card.image.alt}
      class="object-contain"
    />
  </div>
</a>

<style lang="postcss">
  @media (min-width: 1024px) {
    :global(.project-card:nth-child(even) > .project-card-image) {
      order: -1;
    }
  }

  /* When the cursor is directly on the button (while already hovering the card), give it an
     extra float on top of the card-level lift — a hint that the button itself is the link.
     The `.project-card:hover .mehr-dazu:hover` selector outranks the card-hover lift, so it wins. */
  .project-card:hover .mehr-dazu:hover {
    @apply -translate-y-1.5 shadow-[0_16px_34px_-10px_rgba(0,0,0,0.3)];
  }
</style>
