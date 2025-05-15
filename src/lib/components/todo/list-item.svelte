<script lang="ts">
  import { formatDateMDHM } from "$lib/logics/format";
	import type { Todo } from "$lib/models/todo";

  interface Props {
    todo: Todo;
    onDone: () => void;
    onDelete: () => void;
  }

  let { todo, onDone, onDelete }: Props = $props(); 
</script>

<div class={`wrap ${todo.isDone && 'done'}`}>
  <div class="done-wrap">
    <label>
      <input type="checkbox" checked={todo.isDone} onchange={onDone} />
    </label>
  </div>
  <div class={`text ${todo.isDone && 'done'}`}>{todo.task}</div>
  <div>{formatDateMDHM(todo.date as Date)}</div>
  <button class="btn col-main" onclick={onDelete}>Delete</button>
</div>

<style lang="scss">
  .wrap {
    padding: 16px;
    border: 1px solid #ccc;
    background-color: #f5f5f6;
    border-radius: 6px;
    display: flex;
    gap: 8px;
    align-items: center;
    &.done {
      background-color: #aaa !important;
    }
  }
  .done-wrap {
    display: flex;
    & > label {
      padding: 4px;
      cursor: pointer;
    }
  }
  .text {
    flex: 1;
    &.done {
      text-decoration: line-through;
    }
  }
  
</style>