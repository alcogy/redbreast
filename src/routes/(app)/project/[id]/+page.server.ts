
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from "drizzle-orm";
import { projects, customers } from '$lib/server/db/schema';


export const load: PageServerLoad = async ({ params }) => {
  const project = await db
			.select()
			.from(projects)
			.innerJoin(customers, eq(customers.id, projects.customerId))
			.where(eq(projects.id, Number(params.id)));

  if (project === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		project: project[0],
	};
};