<script lang="ts">
  import type { PageData } from './$types'
  import TriarcProject from '$lib/index/TriarcProject.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import type { TriarcPageMetadata } from '$lib/components/TypeDefinitions'

  export let data: PageData

  $: metadata = {
    title: `${data.project.title} – Projekt – triarc laboratories`,
    metaTitle: `${data.project.title} | Projekt | triarc labs`,
    description: data.project.description,
  } satisfies TriarcPageMetadata
</script>

<MetaHead pageMetadata={metadata}></MetaHead>

<TriarcProject project={data.project}></TriarcProject>
