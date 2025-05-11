import type { RequestHandler } from './$types';
import { db } from '$lib/server/db/index';
import { customers, projects } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ url }) => { 
  try {
    const id = url.searchParams.get('id');
    const result: {
      customers: unknown[];
      project: unknown;
    } = {
      customers: [],
      project: {},
    }
    // For customer list
    result.customers = await db.select().from(customers);

    // For project data
    if (id !== null) {
      const results = await db.select().from(projects).where(eq(projects.id, Number(id)));  
      result.project = results[0];
    }
    
    return new Response(JSON.stringify(result));
  } catch (e) {
    error(500, e as string);
  }
}

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
    return new Response(JSON.stringify({...insertedProject, customerName: customerName[0].name}));

  } catch (e) {
    error(500, e as string);
  }
}

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const results = await db.update(projects).set({
      title: body.title,
      desc: body.desc,
      phase: body.phase,
      customerId: body.customerId,
    }).where(eq(projects.id, body.id)).returning();
    const customerName = await db.select({name: customers.name}).from(customers).where(eq(customers.id, Number(body.customerId)));
    const updatedProject = results[0];
    return new Response(JSON.stringify({...updatedProject, customerName: customerName[0].name}));
  } catch (e) {
    error(500, e as string);
  }
}

export const DELETE: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    await db.delete(projects).where(eq(projects.id, body.id));
    return new Response(JSON.stringify({result: 'ok'}));
  } catch (e) {
    error(500, e as string);
  }
}