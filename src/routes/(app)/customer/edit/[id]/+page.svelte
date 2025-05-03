<script lang="ts">
  import EditForm from "$lib/components/customer/edit-form.svelte";
  let { data } = $props();
  const customer = data.customer;
</script>

<div class="wrap">
  <EditForm data={customer} />
</div>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>