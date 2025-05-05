<script lang="ts">
  import ListItem from '$lib/components/activity/list-item.svelte';
  import type { Activity } from '$lib/models/activity';
  let { data }: { data: Activity[] } = $props();
</script>

<ul class="list">
  {#each data as activity}
    <li>
      <ListItem data={activity} />
    </li>
  {/each}
</ul>

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