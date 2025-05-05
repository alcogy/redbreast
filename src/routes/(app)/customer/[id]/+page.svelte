<script lang="ts">
  import { sampleActivities } from '$lib/models/activity';
  import ActivityList from '$lib/components/activity/activity-list.svelte';
  let { data } = $props();
  const customer = data.customer;
</script>

<div class="wrap">
  <div class="item">
    <p class="header">ID</p>
    <p class="body">{customer.id}</p>
  </div>
  <div class="item">
    <p class="header">Name</p>
    <p class="body">{customer.name}</p>
  </div>
  <div class="item">
    <p class="header">Industry</p>
    <p class="body">{customer.industry}</p>
  </div>
  <div class="item">
    <p class="header">Address</p>
    <p class="body">{customer.address}</p>
  </div>
  <div class="item">
    <p class="header">E-mail</p>
    <p class="body">{customer.email}</p>
  </div>
  <div class="item">
    <p class="header">Tel</p>
    <p class="body">{customer.tel}</p>
  </div>
  <div class="item">
    <p class="header">User</p>
    <p class="body">{customer.representative}</p>
  </div>
</div>

<div class="sub-wrap">
  <div>
    <h2>Active Projects</h2>
    <div class="box">
      <div>Project list</div>
      <div>Project list</div>
      <div>Project list</div>
      <div>Project list</div>
    </div>
  </div>

  <div>
    <h2>Representative</h2>
    <div class="box">
      <div class="vertical-list">
        <div class="item">
          <p class="header">Name</p>
          <p class="body">Even Nash</p>
        </div>
        <div class="item">
          <p class="header">Position</p>
          <p class="body">Leader</p>
        </div>
        <div class="item">
          <p class="header">Name</p>
          <p class="body">Even Nash</p>
        </div>
      </div>
    </div>
  </div>
</div>


<h2>Activities</h2>
<div class="activity">  
  <ActivityList data={sampleActivities} />
</div>

<style lang="scss">
  .wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
    background-color: #f5f5f5;
    padding: 24px;
    border-radius: 6px;
  }
  .item > .header {
    font-size: 0.85rem;
    font-weight: bold;
    color: #444;
    margin-bottom: 2px;
  }
  .sub-wrap {
    display: flex;
    gap: 24px;
    margin: 32px 0;
  }
  .sub-wrap > div {
    flex: 1;
  }
  .box {
    background-color: #f5f5f5;
    padding: 24px;
    border-radius: 6px;
  }
  h2 {
    font-size: 1.3rem;
    color: #333;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .vertical-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
</style>