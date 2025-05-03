<script lang="ts">
	import type { Project } from "$lib/models/project";

  let { data }: { data: Project } = $props();
</script>

<h2>The FORM</h2>
<form>
  <div>{data !== undefined && data.id}</div>
  <div>
    <label for="">Title</label>
    <input type="text" bind:value={data.title} class="textfield" required>
  </div>
  <div>
    <label for="">Description</label>
    <input type="text" bind:value={data.desc} class="textfield">
  </div>
  <div>
    <label for="">Phase</label>
    <input type="text" bind:value={data.phase} class="textfield">
  </div>
  <div>
    <label for="">Customer</label>
    <input type="text" bind:value={data.customer} class="textfield">
  </div>
  <div>
    <label for="">Representative</label>
    <input type="text" bind:value={data.representative} class="textfield">
  </div>
  <div>
    <input type="submit" class="btn col-main" value="Submit">
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 2px;
  }
  input[type="text"] {
    width: 320px;
  }
</style>