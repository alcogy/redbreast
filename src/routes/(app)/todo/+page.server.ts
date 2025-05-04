import { db } from '$lib/server/db/index';
import type { PageServerLoad } from './$types';
import { todos } from '$lib/server/db/schema';
import { desc } from "drizzle-orm";
import type { Todo } from '$lib/models/todo';

export const load: PageServerLoad = async ({ params }) => {
  const data: Todo[] = await db.select().from(todos).orderBy(desc(todos.date));
  return {
    todo: data
  };
};
