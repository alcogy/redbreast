<script lang="ts">
  import { LaptopMinimalCheck, ChartColumnBig } from '@lucide/svelte';
  import AppLayout from "$lib/components/app-layout.svelte";
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();

  function getCustomerName(customerId: number) {
    const customer = data.customers.find((v) => v.id === customerId);
    return customer !== undefined ? customer.name : '';
  }

  const onClick = () => console.log('hello');
</script>

<AppLayout
  title="Dashboard"
  submenus={[
    {icon: LaptopMinimalCheck, onClick: onClick},
    {icon: ChartColumnBig, onClick: onClick},
  ]}
>
  <div class="wrap">
    <div>
      <p class="caption">Todos</p>
      <ul class="box-list">
        {#each data.todos as todo}
        <li>
          <p class={`${todo.isDone && 'done'}`}>{todo.task}</p>
          <p>{new Date(todo.date).toLocaleDateString()}</p>
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
        </li>
        {/each}
      </ul>
    </div>
    <div>
      <p class="caption">Activity</p>
      <ul class="box-list">
        {#each data.activities as activity}
        <li>
          <p>{activity.type} | {getCustomerName(activity.customerId)}</p>
          <p>{activity.comment}</p>
        </li>
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
</style>