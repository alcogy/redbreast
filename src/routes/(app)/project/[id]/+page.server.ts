
import type { PageServerLoad } from './$types';
import { sampleProjects } from '$lib/models/project';

export const load: PageServerLoad = async ({ params }) => {
  const project = sampleProjects.find((v) => v.id === params.id);
  
	return {
		project: project,
	};
};