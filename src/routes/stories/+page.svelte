<script lang="ts">
  import GradientHero from '$lib/components/GradientHero.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import { getSizes, getSource, getSourceSet } from '$lib/util/ghost-helpers'
  import type { GhostPost } from '$lib/util/ghost-helpers'
  import { onMount } from 'svelte'
  import type { MappedPost } from '../consulting/+page'
  import { MasonryInfiniteGrid } from '@egjs/svelte-infinitegrid'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { storiesMetadata } from '$lib/content/triarc-page-metadata'

  export let data: PageData
  let pageNumber = 2 //
  let reachedEnd = false
  let loading = false
  let items: MappedPost[] = []

  onMount(() => {
    items = [...data.posts]
  })

  async function loadMoreStories() {
    const tagSlug = $page.url.searchParams.get('tag') ?? ''
    const postFilter = tagSlug ? `%2Btag:${tagSlug}` : ''
    const postResponse = await fetch(
      `https://blog.triarc-labs.com/ghost/api/content/posts/?include=tags,authors&filter=featured:false${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=25&page=${pageNumber}&order=published_at%20desc`
    )

    const postData = await postResponse.json()
    const newPosts = postData.posts
      //.filter((post: GhostPost) => !!post.feature_image)
      .map((post: GhostPost) => {
        const publishDate = new Date(post.published_at)
        return {
          slug: post.slug,
          title: post.title,
          content: post.excerpt.length === 500 ? post.excerpt + '...' : post.excerpt,
          image: {
            srcset: getSourceSet(post.feature_image),
            sizes: getSizes(),
            src: getSource(post.feature_image),
            alt: post.feature_image_alt ?? 'post feature image',
          },
          link: { href: post.url, text: 'Weiter lesen', target: '_blank' },
          featured: post.featured,
          published_at: publishDate,
          footer: `${publishDate.getDate().toString().padStart(2, '0')}.${(publishDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${publishDate.getFullYear()}`,
        }
      })
    if (newPosts == 0) {
      reachedEnd = true
    }
    return [...items, ...newPosts]
  }
</script>

<MetaHead pageMetadata={storiesMetadata} />

<div
  class="bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended flex flex-grow flex-col"
>
  <GradientHero
    transparent
    kicker="Lösungen"
    title="Stories"
    content="Erfahren Sie mehr über uns, was uns beschäftigt und was wir gerade tun!"
  />

  <div class="min-h-[calc(100vh_-_432px)] flex-grow flex flex-col">
  <Container class="w-full">
    <div class="my-8 flex flex-wrap gap-3" role="group" aria-label="Stories nach Thema filtern">
      <a
        href="/stories"
        target="_self"
        aria-current={data.selectedTag === '' ? 'page' : undefined}
        class="rounded-full border px-4 py-1.5 text-base transition duration-300 {data.selectedTag === ''
          ? 'border-gray-300 bg-white text-black shadow font-bold'
          : 'border-transparent bg-black text-white font-normal hover:bg-white hover:text-black hover:shadow'}"
      >
        Alle <span class="font-normal opacity-70">({data.totalPosts})</span>
      </a>
      {#each data.tags as tag}
        <a
          href="/stories?tag={tag.slug}"
          target="_self"
          aria-current={data.selectedTag === tag.slug ? 'page' : undefined}
          class="rounded-full border px-4 py-1.5 text-base transition duration-300 {data.selectedTag ===
          tag.slug
            ? 'border-gray-300 bg-white text-black shadow font-bold'
            : 'border-transparent bg-black text-white font-normal hover:bg-white hover:text-black hover:shadow'}"
        >
          {tag.name} <span class="font-normal opacity-70">({tag.count.posts})</span>
        </a>
      {/each}
    </div>
  </Container>

  <div class="flex-grow">
    <div class="mx-auto w-full max-w-screen-xl px-8 py-4 lg:px-16">
      <MasonryInfiniteGrid
        gap={40}
        align="center"
        {items}
        on:requestAppend={() => {
          if (reachedEnd || loading) {
            return
          }
          loading = true
          loadMoreStories().then((newItems) => {
            items = newItems
          })
          pageNumber++
          loading = false
        }}
        let:visibleItems
      >
        {#each visibleItems as item}
          <div class="item w-full md:w-[calc(50%-20px)] xl:w-[calc(33.33%-27px)]">
            <a
              href="/stories/{item.data.slug}"
              class="break-inside-avoid flex flex-col group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {#if item.data.image.src !== ''}
                <div class="relative overflow-hidden">
                  <img
                    src={item.data.image.src}
                    srcset={item.data.image.srcset}
                    sizes={item.data.image.sizes}
                    loading="lazy"
                    alt={item.data.image.alt}
                    data-width={item.data.image.width}
                    data-height={item.data.image.height}
                    class="object-cover block h-auto max-w-auto w-full object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
              {/if}
              <div class="px-6 py-5 bg-white">
                <h3 class="font-bold text-xl group-hover:text-blue-triarc">{item.data.title}</h3>
                <p class="line-clamp-3 mb-1 text-gray-600">{item.data.content}</p>
                <p class="text-sm text-gray-500">{item.data.footer}</p>
              </div>
            </a>
          </div>
        {/each}
      </MasonryInfiniteGrid>
    </div>
  </div>

  <hr />

  <div class="bg-white py-6">
    <Container>
      <a
        class="text-gray-700 decoration-red-triarc justify-center flex space-x-2 underline flex-grow xl:text-right"
        href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/"
      >
        <span>Folge uns auf</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 448 512"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          /></svg
        >
      </a>
    </Container>
  </div>

    <FooterNoContact />
  </div>
</div>

<style lang="postcss">
  .item {
    transition: all ease 0.2s;
  }
</style>
