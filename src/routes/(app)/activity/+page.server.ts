import { activities, customers, users } from "$lib/server/db/schema";
import { db } from '$lib/server/db';
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
import { eq } from "drizzle-orm";
import type { ActivityType } from "$lib/models/activity";

export const load: PageServerLoad = async () => {
  const data = await db
    .select({
      id: activities.id,
      type: activities.type,
      date: activities.date,
      userName: users.name,
      customerName: customers.name,
      comment: activities.comment,
    })
    .from(activities)
    .innerJoin(customers, eq(customers.id, activities.customerId))
    .innerJoin(users, eq(users.id, activities.userId));
  
  if (data === undefined) {
    error(404, { message: 'The Activity is no found'});
  }
  
  return {
    activities: data,
  };
}