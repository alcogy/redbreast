
import type { PageServerLoad } from './$types';
import { type Customer } from '$lib/models/customer';
import { error } from '@sveltejs/kit';
import { customers } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

export const load: PageServerLoad = async ({ params }) => {
  const data: Customer[] = await db.select().from(customers);

	if (data === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		customers: data,
	};
};