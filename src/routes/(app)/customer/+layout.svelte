<script lang="ts">
  import { TableProperties, Plus } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
	import { goto } from '$app/navigation';
  import { data } from '$lib/data.svelte';
  import EditDialog from '$lib/components/customer/edit-dialog.svelte';

  let { children } = $props();

  function onClickTable() {
    goto('/customer');
  }

  function onClickPlus() {
    data.openNewDialog = true;
  }
</script>

<AppLayout
  title="CUSTOMER"
  submenus={[
    {icon: TableProperties, onClick: onClickTable},
    {icon: Plus, onClick: onClickPlus},
  ]}
>
  {@render children()}

  {#if data.openNewDialog}
    <EditDialog />
  {/if}
</AppLayout>
