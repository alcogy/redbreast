import { error } from '@sveltejs/kit';
import { redirect } from "@sveltejs/kit";

export async function load({ params, cookies, request, url }) {
  // TODO confirm auth session.  
  const userInfo = cookies.get('userInfo');
  if (!userInfo) {
    redirect(303, '/signin');  
  }

  // const user = JSON.parse(userInfo);

  redirect(307, '/dashboard');
}