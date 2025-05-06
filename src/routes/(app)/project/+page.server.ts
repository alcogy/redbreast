
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { customers } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { Project } from '$lib/models/project';

export const load: PageServerLoad = async ({ params }) => {
  const data: Project[] = await db.select({
    id: projects.id,
    title: projects.title,
    desc: projects.desc,
    phase: projects.phase,
    customer: customers.name,
  }).from(projects).innerJoin(customers, eq(projects.customerId, customers.id));

  if (data === undefined) {
    error(404, { message: 'The customer is no found'});
  }
  
  return {
    projects: data,
  };
};