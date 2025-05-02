<script lang="ts">
  import { LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="Dashboard"
  submenus={[
    {icon: LaptopMinimalCheck, onClick: onClick},
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  This is a Dashboard page.
</AppLayout>

<style lang="scss">
  .content {
    padding: 16px;
  }
</style>
