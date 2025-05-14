<script lang="ts">
  import { data } from '$lib/data.svelte';
  import EditDialog from './edit-dialog.svelte';

  let stateId = $state(0);
  async function onClickEdit(id: number) {
    stateId = id;
    data.openEditDialog = true;
  }

  async function onClickDelete(id: number) {
    if (!confirm('Are you sure?')) return;
    const response = await fetch('/customer', {
      method: 'delete',
      body: JSON.stringify({id: id}),
    });
    if (response.status === 200) {
      data.customers = data.customers.filter((v) => v.id !== id);
    }
  }
</script>

<div class="wrap">
  <table>
    <thead>
      <tr>
        <th>Company name</th>
        <th>Address</th>
        <th>Tel</th>
        <th>Email</th>
        <th>Industry</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each data.customers as customer}
      <tr>
        <td class="nowrap"><a href={`/customer/${customer.id}`}>{customer.name}</a></td>
        <td>{customer.address}</td>
        <td>{customer.tel}</td>
        <td>{customer.email}</td>
        <td>{customer.industry}</td>
        <td class="nowrap">
          <button class="btn col-main" onclick={() => onClickEdit(customer.id)}>Edit</button>
          <button class="btn col-attention" onclick={() => onClickDelete(customer.id)}>Delete</button>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
{#if data.openEditDialog}
  <EditDialog id={stateId} />
{/if}

<style lang="scss">
  .wrap {
    max-width: 100%;
    overflow: auto;
    padding-bottom: 24px;
    position: relative;
    height: fit-content;
  }
  table {
    border-collapse: collapse;
    min-width: 100%;
    & th, & td {
      padding: 0 12px;
      height: 56px;
      text-align: left;
      background-color: #f5f5f6;
      border-bottom: 1px solid #ddd;
      word-wrap: break-word;
      &.nowrap {
        white-space: nowrap;
      }
    }
    & thead {
      position: sticky;
      top: 0;
      z-index: 1;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }
    & th:first-of-type {
      border-radius: 8px 0 0 0;
    }
    & th:last-of-type {
      border-radius: 0 8px 0 0;
    }
    & tr:last-of-type td:first-of-type {
      border-radius: 0 0 0 8px;
    }
    & tr:last-of-type td:last-of-type {
      border-radius: 0 0 8px 0;
    }
    & tr:last-of-type td {
      border: 0;
    }
  }
</style>