<script lang="ts">
  import { Building2, RotateCwSquare } from '@lucide/svelte';
  let { data } = $props();
  const project = data.project;
  
</script>


<div class="wrap">
  <h2>{project.projects.title}</h2>
  <div class="sub-info">
    <span><Building2 size={18} color="#555" /><a href={`/customer/${project.customers.id}`}>{project.customers.name}</a></span>
    <span>|</span>
    <span><RotateCwSquare size={20} color="#555" />{project.projects.phase}</span>
  </div>
  <div class="desc-wrap">
    <p class="body">{project.projects.desc}</p>
  </div>
  
</div>

<style lang="scss">
  .wrap {
    background-color: #f5f5f5;
    padding: 24px;
    border-radius: 6px;
  }
  .sub-info {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 8px;
    & > span {
      display: flex; 
      align-items: center;
      gap: 4px;
      color: #333;
    }
  }
  .desc-wrap {
    margin-top: 24px;
    white-space: pre-line;
  }
</style>