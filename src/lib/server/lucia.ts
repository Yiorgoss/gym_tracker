import { dev } from "$app/environment";

import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from "pg";

const pool = new postgres.Pool({
  connectionString: process.env.DATABASE_URL
});

// expect error (see next section)
export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: pg(pool, {
    user: "auth_user",
    key: "user_key",
    session: "user_session"
  })
});

export type Auth = typeof auth;
