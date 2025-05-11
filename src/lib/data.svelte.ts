import type { Todo } from "$lib/models/todo";
import type { Customer } from "$lib/models/customer";
import type { Project } from "./models/project";
import type { Activity } from "./models/activity";

interface SharedData {
  todos: Todo[],
  customers: Customer[],
  projects: Project[],
  activities: Activity[],
  openNewDialog: boolean;
  openEditDialog: boolean;
}

export const data = $state<SharedData>({
  todos: [],
  customers: [],
  projects: [],
  activities: [],
  openNewDialog: false,
  openEditDialog: false,
});