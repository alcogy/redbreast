import type { PageServerLoad } from './$types';
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
  // TODO confirm auth session.  
  redirect(307, '/dashboard');
};