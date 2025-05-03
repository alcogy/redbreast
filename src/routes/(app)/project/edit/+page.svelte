<script lang="ts">
  import EditForm from "$lib/components/project/edit-form.svelte";
	import type { Project } from "$lib/models/project";
  let data: Project = $state({
    id: '',
    title: '',
    desc: '',
    phase: '',
    customer: '',
    representative: '',
  });
</script>

<div class="wrap">
  <EditForm data={data} />
</div>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>