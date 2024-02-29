'use server';

/**
 * Marking this file as use server will make all exported function accessible via fetch
 * and will be executed on the server, but can ALSO be called in a client side component (BlogOverview.tsx)
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
 */
import type * as i from '@types';
import { eq } from 'drizzle-orm';

import { db } from '@server/db';
import { posts } from '@server/db/schema/posts';

export async function getPosts() {
  return await db.query.posts.findMany();
}

export async function getPost(id: string) {
  return await db.query.posts.findFirst({
    where: eq(posts.id, id),
  });
}

export async function createPost(post: i.InsertPost) {
  return await db.insert(posts).values(post).returning();
}
