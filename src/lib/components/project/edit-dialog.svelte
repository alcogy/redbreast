<script lang="ts">
  import { data } from '$lib/data.svelte';
	import type { Phase, Project } from '$lib/models/project';
	import Loading from '../loading.svelte';
  
  let { id = undefined } = $props();

  let title = $state<string>('');
  let desc = $state<string>('');
  let phase = $state<Phase>('unset');
  let customerId = $state<number>(1);
  let userId = $state<number>(1);

  let dialogTitle = data.openNewDialog ? 'Create Project' : 'Edit Project';

  function onClickCancel() {
    data.openNewDialog = false;
    data.openEditDialog = false;
  }

  let promise = fetchData();
  async function fetchData() {
    const url = data.openNewDialog ? '/project' : `/project?id=${id}`
    const response = await fetch(url);
    const result = await response.json();
    if (data.openEditDialog) {
      title = result.project.title;
      desc = result.project.desc;
      phase = result.project.phase;
      customerId = result.project.customerId;
      userId = result.project.userId;
    }
    
    return result;
  }
  
  async function onClickSubmit() {
    try {
      const method = data.openNewDialog ? 'post' : 'put';
      const response = await fetch('/project', {
        method: method,
        body: JSON.stringify({
          id: id ? id : 0,
          title: title,
          desc: desc,
          phase: phase,
          customerId: customerId,
          userId: userId,
        }),
      });
      const result = await response.json();
      const newProject: Project = {
        id: result.id,
        title: result.title,
        desc: result.desc,
        phase: result.phase,
        customer: result.customerName,
      };
      if (data.openNewDialog) {
        data.projects.push(newProject);
      } else {
        const index = data.projects.findIndex((v) => v.id === newProject.id);
        if (index >= 0) data.projects[index] = newProject;        
      }
    } catch(e) {
      alert('Error occured');
    } finally {
      data.openNewDialog = false;
      data.openEditDialog = false;
    }
  }
</script>


<div class="new-dialog-bg">
  {#await promise}
    <Loading />
  {:then result}
    <div class="box">
      <div class="dialog-header">
        <h3>{dialogTitle}</h3>
      </div>
      <div class="dialog-body">
        <div class="form-set">
          <div>
            <p class="label">Title</p>
            <input type="text" name="title" class="textfield" placeholder="(e.g.) The company, The corporation." bind:value={title}>
          </div>
          <div>
            <p class="label">Description</p>
            <textarea name="desc" bind:value={desc}></textarea>
          </div>
          <div>
            <p class="label">Phase</p>
            <select name="phase" bind:value={phase}>
              <option value="unset">unset</option>
              <option value="progress">progress</option>
              <option value="complete">complete</option>
              <option value="canceled">canceled</option>
              <option value="pending">pending</option>
            </select>
          </div>
          <div>
            <p class="label">Customer</p>
            <select name="customerId" bind:value={customerId}>
              {#each result.customers as customer}
                <option value="{customer.id}">{customer.name}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <button class="btn col-nega" onclick={onClickCancel}>Cancel</button>
        <button class="btn col-main" onclick={onClickSubmit}>Submit</button>
      </div>
    </div>
  {/await}
</div>


<style lang="scss">
  .new-dialog-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    padding: 24px 32px;
    background-color: #f5f5f5;
    border-radius: 8px;
    min-width: 720px;
  }
  .dialog-body {
    margin: 24px 0;
  }
  .dialog-footer {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
  }
  .form-set {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & .label {
      font-size: 0.85rem;
      color: #333;
      margin-bottom: 2px;
    }
  }
  textarea {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 6px;
    resize: none;
    height: 128px;
    padding: 8px;
  }
  select {
    width: 100%;
    height: 32px;
    padding: 0 4px;
    border: 1px solid #bbb;
    border-radius: 6px;
    background-color: #fff;
  }
</style>