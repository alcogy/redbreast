<script lang="ts">
  import { data } from '$lib/data.svelte';
	import type { ActivityType } from '$lib/models/activity';
  import Loading from '../loading.svelte';

  let type = $state<ActivityType>('Tel');
  let customerId = $state<number>(1);
  let comment = $state<string>('');


  let promise = fetchCustomers();
  async function fetchCustomers() {    
    const response = await fetch('/customer');
    const data = await response.json();   
    return data;
  }

  function onClickCancel() {
    data.openNewDialog = false;
  }

  async function onClickSubmit() {
    try {
      const response = await fetch('/activity', {
        method: 'post',
        body: JSON.stringify({
          type: type,
          customerId: customerId,
          comment: comment,
        }),
      });
      const result = await response.json();
      const newActivity = result;
      data.activities.push(newActivity);
      
    } catch(e) {
      alert('Error occured');
    } finally {
      data.openNewDialog = false;
    }
  }

</script>

<div class="new-dialog-bg">
  {#await promise}
    <Loading />
  {:then res}
  <div class="box">
    <div class="dialog-header">
      <h3>Add Activity</h3></div>
    <div class="dialog-body">
      <div class="form-set">
        <div>
          <p class="label">Type</p>
          <select name="type" bind:value={type}>
            <option value="Tel">Tel</option>
            <option value="Visit">Visit</option>
            <option value="E-mail">E-mail</option>
            <option value="SNS">SNS</option>
            <option value="Negotiation">Negotiation</option>
          </select>
        </div>
        <div>
          <p class="label">Customer</p>
          <select name="type" bind:value={customerId}>
            {#each res as customer}
              <option value="{customer.id}">{customer.name}</option>
            {/each}
          </select>
        </div>
        <div>
          <p class="label">Commect</p>
          <textarea name="comment" bind:value={comment}></textarea>
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