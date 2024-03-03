import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@env';

import * as tasks from './schema/tasks';

const sql = neon(env.DATABASE_URL);

// @ts-expect-error Neon/Drizzle types are not compatible (waiting for fix)
export const db = drizzle(sql, {
  schema: {
    ...tasks,
  },
});
