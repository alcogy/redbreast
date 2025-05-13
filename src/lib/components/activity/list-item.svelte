<script lang="ts">
  import { Building2 } from '@lucide/svelte';
	import type { Activity } from "$lib/models/activity";
  import { formatDateYMDHM } from "$lib/logics/format";
  import Icons from "./icons.svelte";

  let { data, onClickEdit }: { data: Activity, onClickEdit: (id: number) => void  } = $props();
  let type = $derived(data.type);
</script>

<div class="activity">
  <div class="header">
    <div class="type">
      <Icons {type} />
      <span>{data.type}</span>
    </div>
    <div>
      <button class="btn col-main" onclick={() => onClickEdit(data.id)}>Edit</button>
    </div>
  </div>
  <div class="body">
    <div class="customer">
      <Building2 color="#666" size={20} />
      <span>{data.customerName}</span>
    </div>
    <div class="register">{formatDateYMDHM(data.date)} | {data.userName}</div>
    <p class="comment">
      {data.comment}
    </p>
  </div>
</div>

<style lang="scss">
  .activity {
    background-color: #f5f5f5;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 12px 24px;
    border-bottom: 1px solid #ccc;
  }
  .body {
    padding: 12px 24px 12px 24px;
  }
  .type {
    display: flex;
    align-items: center;
    gap: 8px;
    & > span {
      font-weight: bold;
      color: #333;
    }
  }
  
  .customer {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 4px;
  }
  .register {
    font-size: 0.8rem;
    color: #333;
  }
  .comment {
    margin-top: 16px;
    white-space: pre-line;
  }
</style>