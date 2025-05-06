<script lang="ts">
  import { data } from '$lib/data.svelte';
</script>

<div class="wrap">
  <table>
    <thead>
      <tr>
        <th>
          <label class="check-wrap">
            <input type="checkbox">
          </label>
        </th>
        <th>ID</th>
        <th>Company name</th>
        <th>Address</th>
        <th>Tel</th>
        <th>Email</th>
        <th>Industry</th>
        
      </tr>
    </thead>
    <tbody>
      {#each data.customers as customer}
      <tr>
        <td>
          <label class="check-wrap">
            <input type="checkbox">
          </label>
        </td>
        <td><a href={`/customer/${customer.id}`}>{customer.id}</a></td>
        <td>{customer.name}</td>
        <td>{customer.address}</td>
        <td>{customer.tel}</td>
        <td>{customer.email}</td>
        <td>{customer.industry}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>


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
      white-space: nowrap;
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
  .check-wrap {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    & > input[type="checkbox"] {
      transform: scale(1.3);
    }
    &:hover {
      background-color: #e6e6e6;
    } 
  }
</style>