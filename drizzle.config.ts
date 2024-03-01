import { type Config } from 'drizzle-kit';

import { env } from '@env';

export default {
  schema: './src/server/db/schema/index.ts',
  driver: 'better-sqlite',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ['tasks-sc-test_*'],
} satisfies Config;
