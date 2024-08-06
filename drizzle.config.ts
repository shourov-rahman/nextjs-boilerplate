import "dotenv/config";
import type { Config } from "drizzle-kit";

/** @type {import('drizzle-kit').Config} */
export default {
  out: "./migrations",
  schema: "./src/models/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_CONNECTION_STRING as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
