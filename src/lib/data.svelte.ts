import type { Todo } from "$lib/models/todo";
import { type Customer, sampleCustomers } from "$lib/models/customer";
import { type Project, sampleProjects } from "./models/project";

interface SharedData {
  todos: Todo[],
  customers: Customer[],
  projects: Project[],
}

export const data = $state<SharedData>({
  todos: [],
  customers: sampleCustomers,
  projects: sampleProjects,
});