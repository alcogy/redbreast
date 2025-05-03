import type { Task } from "$lib/models/todo";
import { type Customer, sampleCustomers } from "$lib/models/customer";
import { type Project, sampleProjects } from "./models/project";

interface SharedData {
  todo: Task[],
  customers: Customer[],
  projects: Project[],
}

export const data = $state<SharedData>({
  todo: [],
  customers: sampleCustomers,
  projects: sampleProjects,
});