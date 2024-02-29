import { randomUUID } from 'crypto';
import { int, text } from 'drizzle-orm/sqlite-core';

import { createTable } from '../helpers';

export const movies = createTable('movie', {
  id: text('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  title: text('title', { length: 256 }),
  director: text('director', { length: 256 }),
  year: int('year', { mode: 'number' }),
  genres: text('genres'),
});
