<script lang="ts">
  import { ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
  import { sampleActivities } from '$lib/models/activity';
	import ActivityList from '$lib/components/activity/activity-list.svelte';

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="ACTIVITY"
  submenus={[
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  <ActivityList data={sampleActivities} />
</AppLayout>


