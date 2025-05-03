<script lang="ts">
  export let forms = {
    id: '',
    name: '',
    address: '',
    tel: '',
    email: '',
  }
</script>


<div class="wrap">
  <form class="search">
    <div class="item">
      <input
        type="text"
        name="id"
        class="textfield"
        bind:value={forms.id}
        placeholder="Enter the words."
      />
    </div>
    <input type="submit" value="Search" class="btn col-main">
  </form>
</div>

<style lang="scss">
  .wrap {
    padding: 24px;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  .search {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  input[type="text"] {
    width: 400px;
  }
</style>