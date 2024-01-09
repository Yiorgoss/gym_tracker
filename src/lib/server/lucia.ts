import { dev } from "$app/environment";

import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from "pg";

import { DATABASE_URL_POOL } from '$env/static/private';

const pool = new postgres.Pool({
  connectionString: DATABASE_URL_POOL
});

export const auth = lucia({
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  adapter: pg(pool, {
    user: "User",
    key: "Key",
    session: "Session"
  }),
  getUserAttributes: (databaseUser) => {
    return {
      email: databaseUser.email,
      emailVerified: Boolean(databaseUser.email_verified)
    };
  },
});

export type Auth = typeof auth;
