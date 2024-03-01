'use server';

import type * as i from '@types';

import { db } from '@server/db';
import { tasks } from '@server/db/schema/tasks';

export async function getTasks() {
  return await db.query.tasks.findMany();
}

export async function createTask(task: i.InsertTask) {
  return await db.insert(tasks).values(task).returning();
}
