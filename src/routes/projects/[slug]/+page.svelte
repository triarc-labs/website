<script lang="ts">
  import type { PageData } from './$types'
  import TriarcProject from '$lib/index/TriarcProject.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { landingMetadata } from '$lib/content/triarc-page-metadata'
  export let data: PageData
</script>

<MetaHead pageMetadata={{ landingMetadata }}></MetaHead>

<TriarcProject project={data.project}></TriarcProject>
