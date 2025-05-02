<script lang="ts">
  import { LayoutDashboard, Building2, NotepadText, ListChecks, ChartGantt } from '@lucide/svelte';
  let { children } = $props();
</script>

<div class="wrap">
  <div class="nav">
    <header>
      <h1>Redbreast - SFA</h1>
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
  }
  header {
    padding: 0 16px;
    height: 56px;
    display: flex;
    align-items: center;
    background-color: #702a2a;
    & h1 {
      font-size: 1.3rem;
      color: #fff;
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
        padding: 16px 16px;
        & span {
          font-weight: 700;
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