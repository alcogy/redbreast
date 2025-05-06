import type { Todo } from "$lib/models/todo";
import type { Customer } from "$lib/models/customer";
import { type Project, sampleProjects } from "./models/project";

interface SharedData {
  todos: Todo[],
  customers: Customer[],
  projects: Project[],
  openNewDialog: boolean;
}

export const data = $state<SharedData>({
  todos: [],
  customers: [],
  projects: sampleProjects,
  openNewDialog: false,
});