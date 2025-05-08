
import type { PageServerLoad } from './$types';
import type { Customer } from '$lib/models/customer';
import { error } from '@sveltejs/kit';
import { customers, projects } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { desc, eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ params }) => {
  const id = Number(params.id);
	const customer = await db.select().from(customers).where(eq(customers.id, id));
	const project = await db.select().from(projects).where(eq(projects.customerId, id)).orderBy(desc(projects.id)).limit(3);

	if (customer === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		customer: customer[0] as Customer,
		projects: project,
	};
};