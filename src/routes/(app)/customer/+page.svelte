<script lang="ts">
  import List from '$lib/components/customer/list.svelte';
	import SearchForm from '$lib/components/customer/search-form.svelte';
  import { data as d } from '$lib/data.svelte';

  let { data } = $props();
  d.customers = data.customers;
</script>

<div class="wrap">
  <SearchForm />
  <List />
</div>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>