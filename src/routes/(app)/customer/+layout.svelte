<script lang="ts">
  import { TableProperties, Plus } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
	import { goto } from '$app/navigation';
  let { children } = $props();

  function onClickTable() {
    goto('/customer');
  }

  function onClickPlus() {
    goto('/customer/edit');
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
</AppLayout>

