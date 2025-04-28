<script lang="ts">
  import { SlidersHorizontal, Settings, LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import PageHeader from "$lib/components/page-header.svelte";

  const onClick = () => console.log('hello');
</script>

<PageHeader
  title="CUSTOMER"
  submenus={[
    {icon: SlidersHorizontal, onClick: onClick},
    {icon: Settings, onClick: onClick},
    {icon: LaptopMinimalCheck, onClick: onClick},
    {icon: ChartColumnBig, onClick: onClick},
  ]}
/>

<div class="content">
  This is a Customer page.
</div>

<style lang="scss">
  .content {
    padding: 16px;
  }
</style>
