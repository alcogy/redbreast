<script lang="ts">
  import { LayoutDashboard, Building2, NotepadText, ListChecks, ChartGantt, AlignJustify } from '@lucide/svelte';
  import { page } from '$app/state';

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
      <h1>Redbreast</h1>
      <button onclick={toggleMenu}><AlignJustify /></button>
    </header>
    <ul class="side-menu">
      <li>
        <a href="/dashboard" class={page.url.pathname.indexOf('/dashboard') >= 0 ? 'current' : ''}>
          <LayoutDashboard />
          <span>DASHBOARD</span>
        </a>
      </li>
      <li>
        <a href="/customer" class={page.url.pathname.indexOf('/customer') >= 0 ? 'current' : ''}>
          <Building2 />
          <span>CUSTOMER</span>
        </a>
      </li>
      <li>
        <a href="/project" class={page.url.pathname.indexOf('/project') >= 0 ? 'current' : ''}>
          <NotepadText />
          <span>PROJECT</span>
        </a>
      </li>
      <li>
        <a href="/activity" class={page.url.pathname.indexOf('/activity') >= 0 ? 'current' : ''}>
          <ChartGantt />
          <span>ACTIVITY</span>
        </a>
      </li>
      <li>
        <a href="/todo" class={page.url.pathname.indexOf('/todo') >= 0 ? 'current' : ''}>
          <ListChecks />
          <span>TODO</span>
        </a>
      </li>
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
        &:hover,
        &.current {
          background-color: var(--col-dark);
        }
      }
    }
  }
  main {
    flex: 1;
  }
</style>