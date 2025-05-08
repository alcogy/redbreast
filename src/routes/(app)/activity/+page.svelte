<script lang="ts">
  import { Plus } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
  import { data as d } from '$lib/data.svelte';
	import ActivityList from '$lib/components/activity/activity-list.svelte';
  import EditDialog from '$lib/components/activity/edit-dialog.svelte';

  let { data } = $props();
  d.activities = data.activities;

  function onClickPlus() {
    d.openNewDialog = true;
  }
</script>

<AppLayout
  title="ACTIVITY"
  submenus={[
    {icon: Plus, onClick: onClickPlus},
  ]}
>
  {#if d.activities.length > 0}
    <ActivityList data={d.activities} />
  {:else}
    No data...
  {/if}
  {#if d.openNewDialog}
    <EditDialog />
  {/if}
</AppLayout>


