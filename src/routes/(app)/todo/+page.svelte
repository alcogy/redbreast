<script lang="ts">
  import { SlidersHorizontal, Settings, LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
  import TodoForm from '$lib/components/todo/form.svelte';
  import TodoList from '$lib/components/todo/list.svelte';

  const onClick = () => console.log('hello');

</script>

<AppLayout
  title="TODO"
  submenus={[
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  <TodoForm />
  <div class="list-wrap">
    <TodoList />
  </div>
</AppLayout>

<style lang="scss">
  .list-wrap {
    margin-top: 24px;
  }
</style>
