import { redirect } from "@sveltejs/kit";
// import { seed } from "$lib/server/db/seed";
// seed();

// TODO confirm auth session.
redirect(307, '/dashboard');