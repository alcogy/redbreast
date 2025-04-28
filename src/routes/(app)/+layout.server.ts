import { error } from '@sveltejs/kit';

export async function load({ params, cookies, request, url }) {
  console.log('data', url.pathname);
}