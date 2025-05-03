<script lang="ts">
  let { data } = $props();
  const project = data.project;
</script>

<div class="wrap">
  {#if project !== undefined}
    {#each Object.keys(project) as key}
    <!-- TODO -->
      <p>{project[key] as string}</p>
    {/each}
    <div>
      <a href={`/project/edit/${project.id}`} class="btn col-main">Edit</a>
    </div>
  {/if}  
</div>


<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>