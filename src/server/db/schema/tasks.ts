import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const tasks = pgTable('tasks', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  title: text('title').notNull(),
  completed_at: timestamp('completed_at'),
});

export const insertTaskSchema = createInsertSchema(tasks);
export const updateTaskSchema = insertTaskSchema.pick({ title: true, completed_at: true });
