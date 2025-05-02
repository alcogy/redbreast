<script lang="ts">
  import { data } from "$lib/data.svelte";
  import ListItem from "./list-item.svelte";

  type SortType = 'asc'|'desc';
  let sort = $state<SortType>('asc');
  let tasks = $derived(sort === 'asc' ? data.todo : [...data.todo].reverse());

  function onChangeSort(e: Event) {
    sort = (e.target as any).value;
  }

  function onDone(index: number) {
   data.todo = data.todo.map((v, i) => i === index ? {...v, isDone: !v.isDone} : {...v});
  }

  function onDelete(index: number) {
    if (!confirm('Are you sure? not done?')) return;
    data.todo = data.todo.filter((_, i) => i !== index);
  }
</script>

<div class="todo-list">
  <div class="sort">
    <select onchange={onChangeSort} value={sort}>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  </div>
  {#if data.todo.length > 0}
  <ul class="list">
    {#each tasks as task, index}
      <li>
        <ListItem
          task={task}
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
