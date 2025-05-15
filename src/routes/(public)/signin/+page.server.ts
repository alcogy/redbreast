import type { Actions } from './$types';
import bcrypt from "bcryptjs";
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request }) => {
    const fd = await request.formData();
    const email = fd.get('email') as string;
    const password = fd.get('password') as string;
    
    const results = await db.select().from(users).where(eq(users.email, email));

    if (results.length === 0) {
      console.log('user not found');
      return { success: false }
    }
    const user = results[0];
    const checkpass = await bcrypt.compare(password, user.password);
    if (!checkpass) {
      console.log('password is incorrect');
      return { success: false }
    }

    // TODO: To JWT.
    cookies.set('userInfo', JSON.stringify({ id: user.id, name: user.name, position: user.position, admin: user.isAdmin }), { path: '/' });
    redirect(303, '/dashboard');
	}
} satisfies Actions;