'use server';

import type * as i from '@types';
import { eq } from 'drizzle-orm';

import { db } from '@server/db';
import { tasks } from '@server/db/schema/tasks';

export async function getTasks() {
  return await db.query.tasks.findMany();
}

export async function getTaskById(taskId: string) {
  return await db.query.tasks.findFirst({
    where: eq(tasks.id, taskId),
  });
}

export async function createTask(task: i.InsertTask) {
  return await db.insert(tasks).values(task).returning();
}

export async function updateTask({ taskId, values }: i.UpdateTask) {
  return await db.update(tasks).set(values).where(eq(tasks.id, taskId)).returning();
}

export async function deleteTask(taskId: string) {
  return await db.delete(tasks).where(eq(tasks.id, taskId)).returning();
}
