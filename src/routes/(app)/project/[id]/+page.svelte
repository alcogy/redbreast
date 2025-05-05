<script lang="ts">
  let { data } = $props();
  const project = data.project;
</script>

<div class="wrap">

  
  {#each Object.keys(project) as key}
  <!-- TODO -->
    <p>{project[key] as string}</p>
  {/each}
</div>


<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>