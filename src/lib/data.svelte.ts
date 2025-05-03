import type { Task } from "$lib/models/todo";
import { type Customer, sampleCustomers } from "$lib/models/customer";

interface SharedData {
  todo: Task[],
  customers: Customer[],
}

export const data = $state<SharedData>({
  todo: [],
  customers: sampleCustomers,
});