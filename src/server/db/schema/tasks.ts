import { randomUUID } from 'crypto';
import { int, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

import { createTable } from '../helpers';

export const tasks = createTable('tasks', {
  id: text('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  title: text('title', { length: 256 }).notNull(),
  completed_at: int('completed_at', { mode: 'timestamp_ms' }),
});

export const insertTaskSchema = createInsertSchema(tasks);
