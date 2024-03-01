import { sqliteTableCreator } from 'drizzle-orm/sqlite-core';

export const createTable = sqliteTableCreator((name) => `tasks-sc-test_${name}`);
