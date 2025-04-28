<script lang="ts">
  import { SlidersHorizontal, Settings, LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import PageHeader from "$lib/components/page-header.svelte";

  const onClick = () => console.log('hello');
</script>

<PageHeader
  title="ACTIVITY"
  submenus={[
    {icon: ChartColumnBig, onClick: onClick},
  ]}
/>

<div class="content">
  This is a Activity page.
</div>

<style lang="scss">
  .content {
    padding: 16px;
  }
</style>
