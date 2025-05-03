<script lang="ts">
  let { children } = $props();
</script>

{@render children()}

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(body) {
    background-color: #e2e2e2;
  }
  :global(.btn) {
    border: 0;
    font-weight: 700;
    padding: 8px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 1,0rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      background-color: #bbb;
      color: #666;
      cursor: default;
    }
  }
  :global(.col-main) {
    background-color: #9c2828;
    color: #fff;
  }
  :global(.textfield) {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #bbb;
  }
</style>