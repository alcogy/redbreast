<script lang="ts">
  import { LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
  import type { PageProps } from './$types';
  import ActivityItem from '$lib/components/dashboard/activity-item.svelte';

  let { data }: PageProps = $props();
  
  function getCustomerName(customerId: number) {
    const customer = data.customers.find((v) => v.id === customerId);
    return customer !== undefined ? customer.name : '';
  }

</script>

<AppLayout
  title="Dashboard"
  submenus={[]}
>
  <div class="wrap">
    <div>
      <p class="caption">Todo</p>
      <ul class="box-list">
        {#each data.todos as todo}
        <li>
          <p class={`${todo.isDone && 'done'}`}>{todo.task}</p>
          <p class="date">{new Date(todo.date).toLocaleDateString()}</p>
        </li>
        {/each}
      </ul>
    </div>
    <div>
      <p class="caption">Projects</p>
      <ul class="box-list">
        {#each data.projects as project}
        <li>
          <a href={`/project/${project.id}`}>{project.title}</a>
          <p>{project.phase}</p>
          <p>{getCustomerName(project.customerId)}</p>
        </li>
        {/each}
      </ul>
    </div>
    <div>
      <p class="caption">Activity</p>
      <ul class="box-list">
        {#each data.activities as activity}
          <ActivityItem {activity} {getCustomerName} />
        {/each}
      </ul>
    </div>
  </div>
</AppLayout>

<style lang="scss">
  .wrap {
    display: flex;
    gap: 24px;
    & > div {
      flex: 1;
    }
  }
  .box-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    & > li {
      padding: 16px;
      border-radius: 6px;
      background-color: #f5f5f5;
    }
  }
  p.caption {
    font-size: 1.7rem;
    margin-bottom: 8px;
  }
  p.done {
    text-decoration: line-through;
  }
  p.date {
    font-size: 0.8rem;
    color: #555;
  }
</style>