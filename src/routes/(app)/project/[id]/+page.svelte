<script lang="ts">
  let { data } = $props();
  const project = data.project;
  
</script>

<div class="wrap">
  <p>ID:{project.projects.id}</p>
  <p>Title:{project.projects.title}</p>
  <p>Desc:{project.projects.desc}</p>
  <p>Phase:{project.projects.phase}</p>
  <p>Customer:{project.customers.name}</p>
</div>


<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>