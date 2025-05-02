import { redirect } from "@sveltejs/kit";

// TODO confirm auth session.
redirect(307, '/dashboard');