import { activities, customers, users, projects, todos } from "$lib/server/db/schema";
import { db } from '$lib/server/db';
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
import { eq, desc } from "drizzle-orm";

export const load: PageServerLoad = async () => {
  const cu = await db.select().from(customers).orderBy(desc(customers.id));
  const pj = await db.select().from(projects).where(eq(projects.userId, 1)).orderBy(desc(projects.id));
  const ac = await db.select().from(activities).where(eq(activities.userId, 1));
  const td = await db.select().from(todos).where(eq(todos.userId, 1));

  return {
    customers: cu,
    projects: pj,
    activities: ac,
    todos: td
  };
}