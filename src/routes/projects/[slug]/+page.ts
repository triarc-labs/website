import { error } from '@sveltejs/kit'
import { mapPage, type GhostPage } from '$lib/util/ghost-helpers'
import type { PageLoad } from './$types'

// A Ghost page can carry several pillar tags; the FIRST one is its canonical
// breadcrumb parent so every project has exactly one trail (no duplicate SEO signals).
const PILLARS: Record<string, { name: string; href: string }> = {
  'hash-strategy': { name: 'Strategie', href: '/strategy' },
  'hash-operations': { name: 'Betrieb', href: '/operations' },
  'hash-innovation': { name: 'Zukunft', href: '/future' },
}

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `https://blog.triarc-labs.com/ghost/api/content/pages/slug/${params.slug}/?key=93ed4aea5970c22ed269d4ec35&include=authors,tags`
  )

  if (!response.ok) {
    throw error(response.status, 'Fehler beim Laden der Ghost-Pages')
  }

  const data = await response.json()

  if (!data.pages || data.pages.length === 0) {
    throw error(404, 'Project not found')
  }

  const mappedPage = mapPage(data)
  const page = data.pages[0] as GhostPage
  const pillarTag = page.tags?.map((tag) => tag.slug).find((slug) => slug in PILLARS)

  return {
    project: mappedPage,
    pillar: pillarTag ? PILLARS[pillarTag] : null,
  }
}
