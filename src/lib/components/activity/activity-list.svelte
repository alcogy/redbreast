<script lang="ts">
  import ListItem from '$lib/components/activity/list-item.svelte';
  import type { Activity } from '$lib/models/activity';
  import { data as d } from '$lib/data.svelte';
  import EditDialog from '$lib/components/activity/edit-dialog.svelte';
  
  let { data }: { data: Activity[] } = $props();
  let activity = $state(undefined);

  function clearActivity() {
    activity = undefined;
  }

  async function onClickEdit(id: number) {
    const response = await fetch(`/activity/${id}`);
    const data = await response.json();
    
    activity = data.activity;
    d.openNewDialog = true;
  }
</script>

<ul class="list">
  {#each data as item}
    <li>
      <ListItem data={item} {onClickEdit} />
    </li>
  {/each}
</ul>
{#if d.openNewDialog}
  <EditDialog {activity} {clearActivity} />
{/if}

<style lang="scss">
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>