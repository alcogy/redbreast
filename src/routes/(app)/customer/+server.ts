import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { activities, customers, projects } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');
    let result;
    if (id) {
      const results = await db.select().from(customers).where(eq(customers.id, Number(id)));
      result = results[0];
    } else {
      result = await db.select().from(customers);
    }
    return new Response(JSON.stringify(result));
  } catch (e) {
    error(500, e as string);
  }
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const result = await db.insert(customers).values({
      name: body.name,
      address: body.address,
      tel: body.tel,
      email: body.email,
      industry: body.industry,
    }).returning();
    return new Response(JSON.stringify(result));
  } catch (e) {
    error(500, e as string);
  }
}

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const results = await db.update(customers).set({
      name: body.name,
      address: body.address,
      tel: body.tel,
      email: body.email,
      industry: body.industry,
    }).where(eq(customers.id, body.id)).returning();    
    return new Response(JSON.stringify(results));
  } catch (e) {
    error(500, e as string);
  }
}

export const DELETE: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    await db.delete(projects).where(eq(projects.customerId, body.id));
    await db.delete(activities).where(eq(activities.customerId, body.id));
    await db.delete(customers).where(eq(customers.id, body.id));
    return new Response(JSON.stringify({result: 'ok'}));
  } catch (e) {
    error(500, e as string);
  }
}