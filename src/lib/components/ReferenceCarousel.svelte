<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import type { Picture } from 'imagetools-core'

  export let appName: string
  export let images: Picture[]

  let emblaCarousel: EmblaCarouselType
  let options: EmblaOptionsType = { loop: true }
  let plugins: EmblaPluginType[] = []

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaCarousel = event.detail
  }
</script>

<div class="px-10">
  <div class="embla">
    <div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
      <div class="embla__container">
        {#each images as imageSource}
          <div class="embla__slide">
            <div class="embla__slide__inner">
              <EnhancedImage
                imgClass="embla__slide__img object-contain max-h-[450px] lg:max-h-[600px]"
                image={imageSource}
                loading="lazy"
                alt="Screenshot of {appName}"
              ></EnhancedImage>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <button
      class="embla__button embla__button--prev"
      aria-label="Vorheriges Bild"
      on:click={() => emblaCarousel.scrollPrev()}
    >
      <svg class="embla__button__svg__prev" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"
        ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs
          ><style>
            .fa-secondary {
              opacity: 0.4;
            }
          </style></defs
        ><path
          class="fa-primary"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        /><path
          class="fa-secondary"
          d="M233.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        /></svg
      >
    </button>
    <button
      class="embla__button embla__button--next"
      aria-label="Nächstes Bild"
      on:click={() => emblaCarousel.scrollNext()}
    >
      <svg class="embla__button__svg__next" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"
        ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs
          ><style>
            .fa-secondary {
              opacity: 0.4;
            }
          </style></defs
        ><path
          class="fa-primary"
          d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 265.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
        /><path
          class="fa-secondary"
          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
        /></svg
      >
    </button>
  </div>
</div>

<style lang="postcss">
  .embla {
    position: relative;
  }
  .embla__viewport {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    will-change: transform;
  }
  .embla__slide {
    min-width: 0;
    max-width: 80vh;
    flex: 0 0 100%;
    max-height: 80vh;
    position: relative;
    margin-left: 2.5vh;
    margin-right: 2.5vh;
  }
  /* Phone sideways or Tablet */
  @media (min-width: 400px) {
    .embla__slide {
      min-width: 0;
      max-width: 80vh;
      flex: 0 0 100%;
      max-height: 80vh;
      margin-left: 2.5vh;
      margin-right: 2.5vh;
      position: relative;
    }
  }
  /* Desktop */
  @media (min-width: 992px) {
    .embla__slide {
      min-width: 0;
      max-width: 80vh;
      flex: 0 0 31%;
      max-height: 80vh;
      margin-left: 2.5vh;
      margin-right: 2.5vh;
      position: relative;
    }
  }
  .embla__slide__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .embla__button {
    background-color: transparent;
    position: absolute;
    display: grid;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 5rem;
    height: 5rem;
    align-items: center;
    cursor: pointer;
    padding: 0;
  }
  .embla__button__svg__next {
    fill: #009534;
    opacity: 0.5;
    width: 3.5rem;
    height: 3.5rem;
    justify-self: end;
  }

  .embla__button__svg__prev {
    fill: #009534;
    opacity: 0.5;
    width: 3.5rem;
    height: 3.5rem;
    justify-self: start;
  }

  .embla__button--prev {
    left: -30px;
    z-index: 10;
  }

  .embla__button--next {
    right: -30px;
    z-index: 10;
  }
</style>
