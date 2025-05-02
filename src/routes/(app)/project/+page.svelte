<script lang="ts">
  import { SlidersHorizontal, Settings, LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="PROJECT"
  submenus={[
    {icon: LaptopMinimalCheck, onClick: onClick},
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  This is a Project page.
</AppLayout>

<style lang="scss">
  .content {
    padding: 16px;
  }
</style>
