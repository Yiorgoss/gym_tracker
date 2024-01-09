import type { DB } from '$lib/db/db';

// import { Pool } from '@neondatabase/serverless';
import { Kysely, PostgresDialect } from 'kysely';
import { DATABASE_URL_POOL } from '$env/static/private';
import { NeonHTTPDialect } from 'kysely-neon';

export const db = new Kysely<DB>({
  dialect: new NeonHTTPDialect({
    connectionString: DATABASE_URL_POOL
  })
});

// const db = new Kysely<DB>({
//   dialect: new PostgresDialect({
//     pool: new Pool({
//       connectionString: DATABASE_URL
//     })
//   })
// });
// export const db = new Kysely<DB>({
//   dialect: new PostgresDialect({
//     pool: new Pool({
//       connectionString: DATABASE_URL
//     })
//   })
// });
//
// const pool = new Pool({connectionString: process.env.DATABASE_URL});
// const {rows: [post]} = await pool.query('SELECT * FROM posts WHERE id =$1', [postId]);
// pool.end();
