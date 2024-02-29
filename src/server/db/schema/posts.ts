import { randomUUID } from 'crypto';
import { sql } from 'drizzle-orm';
import { int, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

import { createTable } from '../helpers';

export const posts = createTable('post', {
  id: text('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  name: text('name', { length: 256 }),
  content: text('content'),
  created_at: int('created_at', { mode: 'timestamp_ms' })
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .notNull(),
  updated_at: int('updated_at', { mode: 'timestamp' }),
});

/**
 * Example of how to use the Zod schema to validate forms
 *
 * @see https://orm.drizzle.team/docs/zod
 */
export const insertPostSchema = createInsertSchema(posts);
