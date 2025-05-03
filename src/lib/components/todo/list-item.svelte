<script lang="ts">
  import { formatDateMDHM } from "$lib/logics/format";
	import type { Task } from "$lib/models/todo";

  interface Props {
    task: Task;
    onDone: () => void;
    onDelete: () => void;
  }

  let { task, onDone, onDelete }: Props = $props();  
</script>

<div class="wrap">
  <div class="done-wrap">
    <label>
      <input type="checkbox" value={task.isDone} onchange={onDone} />
    </label>
  </div>
  <div class={`text ${task.isDone && 'done'}`}>{task.label}</div>
  <div>{formatDateMDHM(task.date as Date)}</div>
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