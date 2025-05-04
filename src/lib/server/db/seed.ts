import { db } from "./index";
import { users } from "./schema";

export async function seed() {
  await db.insert(users).values([
    {
      name: 'Fumiaki Nagashima',
      email: 'info@alcogy.com',
      position: 'General manager',
      tel: '080-9582-4637',
      isAdmin: true,
    },
    {
      name: 'John Smith',
      email: 'johnsmith@alcogy.com',
      position: 'Leader',
      tel: '090-1231-1111',
      isAdmin: false,
    },
    {
      name: 'Anne Foster',
      email: 'anne@alcogy.com',
      position: 'Member',
      tel: '090-7356-1345',
      isAdmin: false,
    },
  ]);
}
