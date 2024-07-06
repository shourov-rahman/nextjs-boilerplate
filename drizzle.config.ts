import type { Config } from "drizzle-kit";

/** @type {import('drizzle-kit').Config} */
export default {
  out: "./migrations",
  schema: "./src/models/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
