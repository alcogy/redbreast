<script lang="ts">
	import type { Todo } from "$lib/models/todo";
  import ListItem from "./list-item.svelte";

  let { data }: { data: Todo[] } = $props();
  let todos = $state(data);

  type SortType = 'asc'|'desc';
  let sort = $state<SortType>('asc');
  let list = $derived(sort === 'asc' ? todos : [...todos].reverse());

  function onChangeSort(e: Event) {
    sort = (e.target as any).value;
  }

  function onDone(index: number) {
    todos = todos.map((v, i) => i === index ? {...v, isDone: !v.isDone} : {...v});
  }

  function onDelete(index: number) {
    if (!confirm('Are you sure? not done?')) return;
    todos = todos.filter((_, i) => i !== index);
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
    {#each list as item, index}
      <li>
        <ListItem
          todo={item}
          onDone={() => onDone(index)}
          onDelete={() => onDelete(index)}
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
