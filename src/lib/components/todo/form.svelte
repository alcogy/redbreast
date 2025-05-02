<script lang="ts">
  import { data } from "$lib/data.svelte";
	import type { Task } from "$lib/models/todo";

  let task = $state<string>('');

  function addTask() {
    const newTask: Task = {
      label: task,
      date: new Date(),
      isDone: false,
    }
    data.todo.push(newTask);
    task = "";
  }
</script>

<div class="todo-form">
  <div class="form">
    <div>
      <input type="text" id="task" class="todo-input" placeholder="Enter the task" bind:value={task}>
    </div>
    <div>
      <button onclick={addTask}>Add task</button>
    </div>
  </div>
</div>

<style lang="scss">
  .form {
    background-color: #f5f5f6;
    padding: 32px;
    border-radius: 6px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 8px;
  }
  .todo-input {
    padding: 8px;
    height: 40px;
    border-radius: 4px;
    width: 520px;
    border: 1px solid #aaa;
  }
  button {
    height: 40px;
    border: 0;
    background-color: #9c2828;
    color: #fff;
    font-weight: 700;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>
