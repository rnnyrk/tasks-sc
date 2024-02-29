import type { movies } from './schema/movies';
import type { posts } from './schema/posts';

export type Movie = typeof movies.$inferSelect;
export type InsertMovie = typeof movies.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;
