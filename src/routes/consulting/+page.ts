import type { PageLoad } from './$types'
import type { LoadEvent } from '@sveltejs/kit'
import { mapPosts } from '$lib/util/ghost-helpers'

const GHOST_KEY = '93ed4aea5970c22ed269d4ec35'

// Returns [] instead of throwing so the consulting page still renders when Ghost is unavailable.
async function fetchPostsByTag(fetch: LoadEvent['fetch'], tag: string): Promise<MappedPost[]> {
  try {
    const response = await fetch(
      `https://blog.triarc-labs.com/ghost/api/content/posts/?include=tags,authors&filter=tag:${tag}&key=${GHOST_KEY}&limit=3&order=published_at%20desc`
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()

    if (!data.posts) {
      return []
    }

    return mapPosts(data)
  } catch {
    return []
  }
}

export interface MappedPost {
  slug: string
  title: string
  content: string
  image: {
    srcset: string
    sizes: string
    src: string
    alt: string
  }
  link: {
    href: string
    text: string
    target: string
  }
  featured: boolean
  published_at: Date
  footer: string
}

export interface ConsultingPosts {
  consulting?: MappedPost[]
  potential?: MappedPost[]
  vision?: MappedPost[]
  changeManagement?: MappedPost[]
  strukturen?: MappedPost[]
  coaching?: MappedPost[]
}

export const load: PageLoad = async ({ fetch }) => {
  const [consulting, potential, vision, changeManagement, coaching] = await Promise.all([
    fetchPostsByTag(fetch, 'hash-consulting'),
    fetchPostsByTag(fetch, 'hash-potential-workshop'),
    fetchPostsByTag(fetch, 'hash-vision-workshop'),
    fetchPostsByTag(fetch, 'hash-change-management'),
    fetchPostsByTag(fetch, 'hash-coaching'),
  ])

  const posts: ConsultingPosts = {
    consulting,
    potential,
    vision,
    changeManagement,
    coaching,
  }

  return {
    posts,
  }
}
