import type { tasks } from './schema/tasks';

export type Task = typeof tasks.$inferSelect;
export type InsertTask = typeof tasks.$inferInsert;
