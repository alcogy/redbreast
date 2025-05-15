import { db } from "./index";
import { users } from "./schema";
import bcrypt from "bcryptjs";

export async function seed() {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("pass", salt);
  await db.insert(users).values([
    {
      name: 'Fumiaki Nagashima',
      email: 'info@alcogy.com',
      position: 'General manager',
      password: hash,
      tel: '080-9582-4637',
      isAdmin: true,
    },
    {
      name: 'John Smith',
      email: 'johnsmith@alcogy.com',
      position: 'Leader',
      password: hash,
      tel: '090-1231-1111',
      isAdmin: false,
    },
    {
      name: 'Anne Foster',
      email: 'anne@alcogy.com',
      password: hash,
      position: 'Member',
      tel: '090-7356-1345',
      isAdmin: false,
    },
  ]);
}
