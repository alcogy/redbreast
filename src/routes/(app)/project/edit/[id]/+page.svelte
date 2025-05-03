<script lang="ts">
  import EditForm from "$lib/components/project/edit-form.svelte";
  let { data } = $props();
  const project = data.project;
</script>

<div class="wrap">
  <EditForm data={project} />
</div>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>