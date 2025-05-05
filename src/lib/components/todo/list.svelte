<script lang="ts">
	import type { Todo } from "$lib/models/todo";
  import ListItem from "./list-item.svelte";

  let { data }: { data: Todo[] } = $props();
  let todos = $state(data);

  type SortType = 'asc'|'desc';
  let sort = $state<SortType>('asc');
  let list = $derived([...todos].sort((a, b) => sort === 'asc' ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime()));

  function onChangeSort(e: Event) {
    sort = (e.target as any).value;
  }

  async function onDone(id: number, isDone: boolean) {
    try {
      await fetch('/todo', { method: 'put', body: JSON.stringify({ id: id, isDone: !isDone})});
      todos = todos.map((v) =>  v.id === id ? {...v, isDone: !isDone} : {...v});
    } catch(e) {
      alert('Error occured.');
    } 
  }

  async function onDelete(id: number) {
    if (!confirm('Are you sure? not done?')) return;

    try {
      await fetch('/todo', { method: 'delete', body: JSON.stringify({ id: id })});
      todos = todos.filter((v) => v.id !== id);
    } catch(e) {
      alert('Error occured.');
    }
  }
</script>

<div class="todo-list">
  <div class="sort">
    <select onchange={onChangeSort} value={sort}>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  </div>
  {#if todos.length > 0}
  <ul class="list">
    {#each list as item}
      <li>
        <ListItem
          todo={item}
          onDone={() => onDone(item.id, item.isDone)}
          onDelete={() => onDelete(item.id)}
        />
      </li>
    {/each}
  </ul>
  {:else}
    <p>No data...</p>
  {/if}
</div>

<style lang="scss">
  .sort {
    margin-bottom: 16px;
  }
  .list {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  select {
    height: 40px;
    border-radius: 6px;
    min-width: 80px;
  }
</style>
