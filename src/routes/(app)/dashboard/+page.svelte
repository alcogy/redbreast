<script lang="ts">
  import AppLayout from "$lib/components/app-layout.svelte";
  import type { PageProps } from './$types';
  import ActivityItem from '$lib/components/dashboard/activity-item.svelte';
  import ProjectItem from '$lib/components/dashboard/project-item.svelte';

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
    <div class="left-wrap">
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
    <div class="right-wrap">
      <div>
        <p class="caption">Activity</p>
        <ul class="box-list">
          {#each data.activities as activity}
            <ActivityItem {activity} {getCustomerName} />
          {/each}
        </ul>
      </div>
      <div>
        <p class="caption">Projects</p>
        <ul class="box-list">
          {#each data.projects as project}
            <ProjectItem {project} {getCustomerName} />
          {/each}
        </ul>
      </div>
    </div>
  </div>
</AppLayout>

<style lang="scss">
  .wrap {
    display: grid;
    grid-template-columns: 1.3fr 1.0fr;
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
  .right-wrap {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>