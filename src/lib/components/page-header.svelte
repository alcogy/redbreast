<script lang="ts">
  import IconButton from './icon-button.svelte';
  let { title, submenus = [] } = $props();
</script>


<div class="page-header">
  <h2>{title}</h2>
  <ul class="page-menu">
    {#each submenus as menu }
      <li><IconButton icon={menu.icon} onClick={menu.onClick} /></li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .page-header {
    height: 56px;
    width: 100%;
    background-color: #eaeaea;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    & h2 {
      font-size: 1.15rem;
    }
  }
  .page-menu {
    list-style: none;
    display: flex;
    gap: 24px;
  }
  .icon-button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 0.5;
    }
  }
</style>