import { redirect } from '@sveltejs/kit'

// TeamWerk is maintained as a Ghost project page; keep the old URL alive.
export const load = () => {
  throw redirect(301, '/projects/teamwerk')
}
