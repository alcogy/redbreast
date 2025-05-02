<script lang="ts">
  let { label, isDone, onDone, onDelete } = $props();
</script>

<div class="wrap">
  <div class="done-wrap">
    <label>
      <input type="checkbox" value={isDone} onchange={onDone} />
    </label>
  </div>
  <div class={`text ${isDone && 'done'}`}>{label}</div>
  <button onclick={onDelete}>Delete</button>
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
  button {
    border: 0;
    background-color: #9c2828;
    color: #fff;
    font-weight: 700;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>