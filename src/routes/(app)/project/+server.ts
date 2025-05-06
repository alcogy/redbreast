import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { customers, projects } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const result = await db.insert(projects).values({
      title: body.title,
      desc: body.desc,
      phase: body.phase,
      customerId: body.customerId,
      userId: body.userId,
    }).returning();

    const customerName = await db.select({name: customers.name}).from(customers).where(eq(customers.id, Number(body.customerId)));
    const insertedProject = result[0];
    return new Response(JSON.stringify({...insertedProject, customerName: customerName}));

  } catch (e) {
    error(500, e as string);
  }

}