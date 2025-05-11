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
    const response = await fetch('/project', {
      method: 'delete',
      body: JSON.stringify({id: id}),
    });
    if (response.status === 200) {
      data.projects = data.projects.filter((v) => v.id !== id);
    }
  }
</script>

<div class="wrap">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Desc</th>
        <th>Phase</th>
        <th>Customer</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each data.projects as project}
      <tr>
        <td><a href={`/project/${project.id}`}>{project.id}</a></td>
        <td>{project.title}</td>
        <td>{project.desc}</td>
        <td>{project.phase}</td>
        <td>{project.customer}</td>
        <td>
          <button class="btn col-main" onclick={() => onClickEdit(project.id)}>Edit</button>
          <button class="btn col-attention" onclick={() => onClickDelete(project.id)}>Delete</button>
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
</style>