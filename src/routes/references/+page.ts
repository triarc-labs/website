import { fetchGhostProjects } from '$lib/util/ghost-helpers'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  return {
    projects: await fetchGhostProjects(fetch),
  }
}
