import bcrypt from "bcryptjs";
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { seed } from '$lib/server/db/seed';

export const load: PageServerLoad = async ({ params }) => {
  // await seed();
  
};