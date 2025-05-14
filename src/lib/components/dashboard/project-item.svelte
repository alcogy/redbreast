<script lang="ts">
  let { project, getCustomerName } = $props();
</script>

<li>
  <a href={`/project/${project.id}`}>{project.title}</a>
  <p><span class="phase">{project.phase}</span></p>
  <p class="customer">{getCustomerName(project.customerId)}</p>
</li>

<style lang="scss">
  li {
    padding: 16px;
    border-radius: 6px;
    background-color: #f5f5f5;
  }
  p {
    margin-top: 4px;
  }
  .phase {
    font-size: 0.8rem;
    background-color: var(--col-light);
    color: #fff;
    font-weight: 500;
    padding: 2px 4px;
  }
  .customer {
    font-size: 0.9rem;
  }
</style>