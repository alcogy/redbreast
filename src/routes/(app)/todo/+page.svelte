<script lang="ts">
  import AppLayout from "$lib/components/app-layout.svelte";
  import TodoForm from '$lib/components/todo/form.svelte';
  import TodoList from '$lib/components/todo/list.svelte';

  let { data } = $props();
  let todos = $state(data.todo);

</script>

<AppLayout
  title="TODO"
  submenus={[]}
>
  <div class="list-wrap">
    <TodoForm data={todos} />
    <TodoList data={todos} />
  </div>
</AppLayout>

<style lang="scss">
  .list-wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
