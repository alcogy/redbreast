<script lang="ts">
  import { TableProperties, Plus } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
	import { goto } from '$app/navigation';
  let { children } = $props();

  function onClickTable() {
    goto('/project');
  }

  function onClickPlus() {
    goto('/project/edit');
  }
</script>

<AppLayout
  title="PROJECT"
  submenus={[
    {icon: TableProperties, onClick: onClickTable},
    {icon: Plus, onClick: onClickPlus},
  ]}
>
  {@render children()}
</AppLayout>

