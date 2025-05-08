import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { customers } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
  try {
    const result = await db.select().from(customers);
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