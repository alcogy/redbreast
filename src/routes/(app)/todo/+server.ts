import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { todos } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const result = await db.insert(todos).values({
    task: data.task,
    userId: 1,
  }).returning();

  return new Response(JSON.stringify(result));
}

export const PUT: RequestHandler = async ({ request }) => {
  const data = await request.json();

  await db.update(todos).set({ isDone: data.isDone}).where(eq(todos.id, data.id));
  return new Response(JSON.stringify({ result: 'ok' }));
}

export const DELETE: RequestHandler = async ({ request }) => {
  const data = await request.json();

  await db.delete(todos).where(eq(todos.id, data.id));
  return new Response(JSON.stringify({ result: "ok" }))
}