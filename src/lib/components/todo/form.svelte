<script lang="ts">
  import type { Todo } from "$lib/models/todo";
  let { data }: { data: Todo[] } = $props();

  let task = $state<string>('');
  let isDisabled = $derived(task === '');

  async function addTask() {
    
    const response = await fetch('/todo', {
      method: 'post',
      body: JSON.stringify({'task': task}),
    });

    const results = await response.json() as Todo[];
    const newTodo = results[0];
    newTodo.date = new Date(newTodo.date);
    data.push(newTodo);
    task = "";
  }

</script>

<div class="todo-form">
  <div class="form">
    <div>
      <input
        type="text"
        id="task"
        class="todo-input"
        placeholder="Enter the task"
        bind:value={task}
      >
    </div>
    <div>
      <button
        class="btn col-main"
        onclick={addTask}
        disabled={isDisabled}
      >
        Add task
      </button>
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
  }
</style>
