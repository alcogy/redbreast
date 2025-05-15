import type { PageServerLoad } from './$types';
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
  // TODO confirm auth session.  
  const userInfo = cookies.get('userInfo');
  if (!userInfo) {
    redirect(303, '/signin');  
  }

  // const user = JSON.parse(userInfo);

  redirect(307, '/dashboard');
};