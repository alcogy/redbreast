
import type { PageServerLoad } from './$types';
import { sampleProjects } from '$lib/models/project';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const project = sampleProjects.find((v) => v.id === params.id);
  if (project === undefined) {
		error(404, { message: 'The customer is no found'});
	}
	
	return {
		project: project,
	};
};