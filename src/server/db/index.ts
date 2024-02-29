// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

import { env } from '@env';

import * as movies from './schema/movies';
import * as posts from './schema/posts';

export const db = drizzle(
  new Database(env.DATABASE_URL, {
    fileMustExist: false,
  }),
  {
    schema: {
      ...movies,
      ...posts,
    },
  },
);
