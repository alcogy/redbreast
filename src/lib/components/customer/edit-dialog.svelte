<script lang="ts">
  import { data } from '$lib/data.svelte';
	import Loading from '../loading.svelte';
  
  let { id = undefined } = $props();

  let name = $state<string>('');
  let address = $state<string>('');
  let tel = $state<string>('');
  let email = $state<string>('');
  let industry = $state<string>('');

  let dialogTitle = data.openNewDialog ? 'Create Customer' : 'Edit Customer';

  function onClickCancel() {
    data.openNewDialog = false;
    data.openEditDialog = false;
  }

  async function onClickSubmit() {
    try {
      const method = data.openNewDialog ? 'post' : 'put';
      const response = await fetch('/customer', {
        method: method,
        body: JSON.stringify({
          id: id,
          name: name,
          address: address,
          tel: tel,
          email: email,
          industry: industry,
        }),
      });
      const result = await response.json();
      const newCustomer = result[0];
      if (data.openNewDialog) {
        data.customers.push(newCustomer);
      } else {
        const index = data.customers.findIndex((v) => v.id === newCustomer.id);
        if (index >= 0) data.customers[index] = newCustomer;        
      }
      
    } catch(e) {
      console.error(e);
      alert('Error occured');
    } finally {
      data.openNewDialog = false;
      data.openEditDialog = false;
    }
  }

  let promise = fetchData();
  async function fetchData() {
    const url = data.openNewDialog ? '/customer' : `/customer?id=${id}`
    const response = await fetch(url);
    const result = await response.json();
    if (data.openEditDialog) {
      name = result.name;
      address = result.address;
      tel = result.tel;
      email = result.email;
      industry = result.industry;
    }
    
    return result;
  }

</script>
<div class="new-dialog-bg">
  {#await promise}
    <Loading />
  {:then}
  <div class="box">
    <div class="dialog-header">
      <h3>{dialogTitle}</h3>
    </div>
    <div class="dialog-body">
      <div class="form-set">
        <div>
          <p class="label">Name</p>
          <input type="text" class="textfield" placeholder="(e.g.) The company, The corporation." bind:value={name}>
        </div>
        <div>
          <p class="label">Industry</p>
          <input type="text" class="textfield" placeholder="(e.g.) Tech, Financial, Restaurant" bind:value={industry}>
        </div>
        <div>
          <p class="label">Address</p>
          <input type="text" class="textfield" placeholder="Enter the address." bind:value={address}>
        </div>
        <div>
          <p class="label">E-mail</p>
          <input type="text" class="textfield" placeholder="Enter the e-mail." bind:value={email}>
        </div>
        <div>
          <p class="label">Tel</p>
          <input type="text" class="textfield" placeholder="Enter the phone number." bind:value={tel}>
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
    min-width: 640px;
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
</style>