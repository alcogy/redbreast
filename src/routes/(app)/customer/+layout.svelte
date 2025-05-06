<script lang="ts">
  import { TableProperties, Plus } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
	import { goto } from '$app/navigation';
  import { data } from '$lib/data.svelte';

  let { children } = $props();

  let name = $state<string>('');
  let address = $state<string>('');
  let tel = $state<string>('');
  let email = $state<string>('');
  let industry = $state<string>('');

  function onClickCancel() {
    data.openNewDialog = false;
  }

  async function onClickSubmit() {
    try {
      const response = await fetch('/customer', {
        method: 'post',
        body: JSON.stringify({
          name: name,
          address: address,
          tel: tel,
          email: email,
          industry: industry,
        }),
      });
      const result = await response.json();
      const newCustomer = result[0];
      data.customers.push(newCustomer);
    } catch(e) {
      alert('Error occured');
    } finally {
      data.openNewDialog = false;
    }
  }

  function onClickTable() {
    goto('/customer');
  }

  function onClickPlus() {
    data.openNewDialog = true;
  }
</script>

<AppLayout
  title="CUSTOMER"
  submenus={[
    {icon: TableProperties, onClick: onClickTable},
    {icon: Plus, onClick: onClickPlus},
  ]}
>
  {@render children()}

  {#if data.openNewDialog}
  <div class="new-dialog-bg">
    <div class="box">
      <div class="dialog-header">
        <h3>Create Customer</h3></div>
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
  </div>
  {/if}
</AppLayout>

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