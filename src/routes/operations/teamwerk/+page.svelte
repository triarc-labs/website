<script lang="ts">
  import TriarcProject from '$lib/index/TriarcProject.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { operationsMetadata } from '$lib/content/triarc-page-metadata'
</script>

<MetaHead pageMetadata={{ operationsMetadata }}></MetaHead>

<TriarcProject></TriarcProject>
