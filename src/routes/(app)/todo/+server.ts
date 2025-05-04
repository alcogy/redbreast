import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { todos } from '$lib/server/db/schema';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const result = await db.insert(todos).values({
    task: data.task,
    userId: 1,
  }).returning();

  return new Response(JSON.stringify(result));
}