<script lang="ts">
  let props = $props();
</script>

<button onclick={props.onClick}>
  <props.icon />
</button>


<style lang="scss">
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 0.5;
    }
  }
</style>