import { sqliteTableCreator } from 'drizzle-orm/sqlite-core';

/**
 * Example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `rnnyrk-test_${name}`);
