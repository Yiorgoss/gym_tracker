import { Kysely } from "kysely";
import { NeonHTTPDialect } from "kysely-neon";
const DATABASE_URL_POOL = "postgresql://Yiorgoss:jskJ7dS9Mpbt@ep-shrill-boat-98759755-pooler.us-east-2.aws.neon.tech/gym_tracker?sslmode=require";
const db = new Kysely({
  dialect: new NeonHTTPDialect({
    connectionString: DATABASE_URL_POOL
  })
});
async function load() {
  const rows = await db.selectFrom("Example").selectAll().execute();
  return {
    rows
  };
}
export {
  load
};
