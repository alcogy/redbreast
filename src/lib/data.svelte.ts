import { type Task } from "./models/todo";

interface SharedData {
  todo: Task[],
}

export const data = $state<SharedData>({
  todo: [],
});