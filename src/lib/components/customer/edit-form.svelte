<script lang="ts">
	import type { Customer } from "$lib/models/customer";

  let { data }: { data: Customer } = $props();
</script>

<h2>The FORM</h2>
<form>
  <div>{data !== undefined && data.id}</div>
  <div>
    <label for="">Name</label>
    <input type="text" bind:value={data.name} class="textfield" required>
  </div>
  <div>
    <label for="">Address</label>
    <input type="text" bind:value={data.address} class="textfield">
  </div>
  <div>
    <label for="">Tel</label>
    <input type="text" bind:value={data.tel} class="textfield">
  </div>
  <div>
    <label for="">Email</label>
    <input type="text" bind:value={data.email} class="textfield">
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