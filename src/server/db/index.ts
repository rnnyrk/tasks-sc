import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

import { env } from '@env';

import * as tasks from './schema/tasks';

export const db = drizzle(
  new Database(env.DATABASE_URL, {
    fileMustExist: false,
  }),
  {
    schema: {
      ...tasks,
    },
  },
);
