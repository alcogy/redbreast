<script lang="ts">
  import EditForm from "$lib/components/customer/edit-form.svelte";
	import type { Customer } from "$lib/models/customer";
  let data: Customer = $state({
    id: '',
    name: '',
    address: '',
    tel: '',
    email: '',
    representative: '',
    industry: '',
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