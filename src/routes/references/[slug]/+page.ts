import { error } from '@sveltejs/kit'
import { referenceProjects } from '$lib/content/reference-projects'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  const index = referenceProjects.findIndex((project) => project.slug === params.slug)
  if (index === -1) {
    throw error(404, 'Referenz nicht gefunden')
  }
  const count = referenceProjects.length
  return {
    project: referenceProjects[index],
    previousProject: referenceProjects[(index - 1 + count) % count],
    nextProject: referenceProjects[(index + 1) % count],
  }
}
