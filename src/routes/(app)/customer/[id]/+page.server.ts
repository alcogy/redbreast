
import type { PageServerLoad } from './$types';
import type { Customer } from '$lib/models/customer';
import { error } from '@sveltejs/kit';
import { customers, projects, activities, users } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { desc, eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ params }) => {
  const id = Number(params.id);
	const customer = await db.select().from(customers).where(eq(customers.id, id));
	const project = await db.select().from(projects).where(eq(projects.customerId, id)).orderBy(desc(projects.id)).limit(3);
	const activity = await db
			.select({
				id: activities.id,
				type: activities.type,
				date: activities.date,
				userName: users.name,
				customerName: customers.name,
				comment: activities.comment,
			})
			.from(activities)
			.innerJoin(customers, eq(customers.id, activities.customerId))
			.innerJoin(users, eq(users.id, activities.userId))
			.where(eq(activities.customerId, id))
			.orderBy(desc(activities.id));

	if (customer === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		customer: customer[0] as Customer,
		projects: project,
		activities: activity,
	};
};