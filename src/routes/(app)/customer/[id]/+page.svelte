<script lang="ts">
  let { data } = $props();
  const customer = data.customer;
</script>

<div class="wrap">
  {#if customer !== undefined}
    {#each Object.keys(customer) as key}
    <!-- TODO -->
      <p>{customer[key] as string}</p>
    {/each}
    <div>
      <a href={`/customer/edit/${customer.id}`} class="btn col-main">Edit</a>
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