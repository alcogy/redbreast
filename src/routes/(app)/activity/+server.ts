import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { activities, customers, users } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const result = await db.insert(activities).values({
      type: body.type,
      customerId: body.customerId,
      comment: body.comment,
      userId: 1,
    }).returning();

    const data= returningData(result[0], body.customerId);

    return new Response(JSON.stringify(data));
  } catch (e) {
    error(500, e as string);
  }
}

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const result = await db.update(activities).set({
      type: body.type,
      customerId: body.customerId,
      comment: body.comment,
    }).where(eq(activities.id, body.id)).returning();
    
    const data = await returningData(result[0], body.customerId);
    return new Response(JSON.stringify(data));
  } catch (e) {
    error(500, e as string);
  }
}

async function returningData(result: any, customerId: number) {
  const data = {...result, customerName: '', userName: ''};
  const customer = await db.select({ name: customers.name }).from(customers).where(eq(customers.id, customerId));
  const user = await db.select({ name: users.name }).from(users).where(eq(users.id, 1));

  data['customerName'] = customer[0].name;
  data['userName'] = user[0].name;

  return data;
}