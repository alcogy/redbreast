import type { RequestHandler } from "./$types"
import { db } from '$lib/server/db/index';
import { activities } from '$lib/server/db/schema';
import { eq } from "drizzle-orm";
import { error } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
  const results = await db.select().from(activities).where(eq(activities.id, Number(params.id)));
  
  if (results.length === 0) {
    error(500, 'Activity not found');
  }

  return new Response(JSON.stringify({ activity: results[0] }));
}