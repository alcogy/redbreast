<script lang="ts">
  import { ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
	import ListItem from '$lib/components/activity/list-item.svelte';
  import { type Activity, sampleActivities } from '$lib/models/activity';

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="ACTIVITY"
  submenus={[
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  <ul class="list">
    {#each sampleActivities as activity}
      <li>
        <ListItem data={activity} />
      </li>
    {/each}
  </ul>
</AppLayout>

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
