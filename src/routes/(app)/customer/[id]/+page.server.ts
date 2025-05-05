
import type { PageServerLoad } from './$types';
import { sampleCustomers } from '$lib/models/customer';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const customer = sampleCustomers.find((v) => v.id === params.id);

	if (customer === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		customer: customer,
	};
};