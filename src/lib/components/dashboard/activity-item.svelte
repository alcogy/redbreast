<script lang="ts">
  import Icons from '$lib/components/activity/icons.svelte';
	import type { ActivityType } from '$lib/models/activity';
  import { formatDateMDHM } from '$lib/logics/format';
  let { activity, getCustomerName} = $props();
</script>

<li>
  <div class="head">
    <div class="type">
      <Icons type={(activity.type as ActivityType)} scale={0.9} />
      <span>{activity.type}</span>
    </div>
    <div>{getCustomerName(activity.customerId)}</div>
  </div>
  <p class="date">{formatDateMDHM(activity.date)}</p>
  <p class="comment">{activity.comment}</p>
</li>

<style lang="scss">
  li {
    padding: 16px;
    border-radius: 6px;
    background-color: #f5f5f5;
  }
  .head {
    display: flex;
    align-items: center;
    & > .type {
      display: flex;
      gap: 4px;
      align-items: center;
      & > span {
        padding-right: 8px;
        margin-right: 8px;
        border-right: 1px solid #555;
      }
    }
  }
  .date {
    margin-top: 4px;
    font-size: 0.8rem;
    color: #555;
  }
  .comment {
    margin-top: 8px;
    font-size: 0.9rem;
    line-height: 1.4;
  }
</style>