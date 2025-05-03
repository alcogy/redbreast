
import type { PageServerLoad } from './$types';
import { sampleCustomers } from '$lib/models/customer';

export const load: PageServerLoad = async ({ params }) => {
  const customer = sampleCustomers.find((v) => v.id === params.id);
  
	return {
		customer: customer,
	};
};