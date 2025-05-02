<script lang="ts">
  import { SlidersHorizontal, Settings, LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="CUSTOMER"
  submenus={[
    {icon: SlidersHorizontal, onClick: onClick},
    {icon: Settings, onClick: onClick},
    {icon: LaptopMinimalCheck, onClick: onClick},
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  This is a Customer page.
</AppLayout>

<style lang="scss">
  .content {
    padding: 16px;
  }
</style>
