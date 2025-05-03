<script lang="ts">
  import { LayoutDashboard, Building2, NotepadText, ListChecks, ChartGantt, AlignJustify } from '@lucide/svelte';
  let { children } = $props();

  let opened = $state<boolean>(true);
  let optStlye = $derived(opened ? '' : 'closed');
  function toggleMenu() {
    opened = !opened;
  }
</script>

<div class="wrap">
  <div class={`nav ${optStlye}`}>
    <header>
      <h1>Redbreast - SFA</h1>
      <button onclick={toggleMenu}><AlignJustify /></button>
    </header>
    <ul class="side-menu">
      <li><a href="/dashboard"><LayoutDashboard /><span>DASHBOARD</span></a></li>
      <li><a href="/customer"><Building2 /><span>CUSTOMER</span></a></li>
      <li><a href="/project"><NotepadText /><span>PROJECT</span></a></li>
      <li><a href="/activity"><ChartGantt /><span>ACTIVITY</span></a></li>
      <li><a href="/todo"><ListChecks /><span>TODO</span></a></li>
    </ul>
  </div>  
  <main>
    {@render children()}
  </main>
</div>


<style lang="scss">
  .wrap {
    min-height: 100vh;
    display: flex;
  }
  .nav {
    background-color: #903a3a;
    width: 280px;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 10;
    &.closed {
      width: 64px;
      & header > h1 {
        display: none;
      }
      & .side-menu li a span {
        display: none;
      }
    }
  }
  header {
    padding: 0 16px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #702a2a;
    & h1 {
      font-size: 1.3rem;
      color: #fff;
      white-space: nowrap;
      margin-left: 4px;
      cursor: default;
    }
    & button {
      color: #fff;
      background-color: transparent;
      padding: 4px;
      border: 0;
      cursor: pointer;
    }
  }
  .side-menu {
    list-style: none;
    & li {
      & a {
        display: flex;
        gap: 16px;
        align-items: center;
        color: #fff;
        text-decoration: none;
        padding: 16px 20px;
        & span {
          font-weight: 700;
          white-space: nowrap;
        }
        &:hover {
          background-color: #803434;
        }
      }
    }
  }
  main {
    flex: 1;
  }
</style>