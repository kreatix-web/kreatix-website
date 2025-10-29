// Idempotent schema initializer for Neon
// Runs safe migrations on demand in the client. Prefer running in server/DB console for production.

import { sql } from "./neon";
import setupSql from "./migrations/setup-database.sql?raw";
import addMessageColumnSql from "./migrations/add-message-column.sql?raw";
import addCrmColumnsSql from "./migrations/add-crm-columns.sql?raw";

// Naive split by semicolon. Works because our scripts have simple statements.
async function runSqlScript(script: string) {
  const statements = script
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const stmt of statements) {
    // Append semicolon back is not required by driver
    await sql(stmt);
  }
}

let initializing: Promise<void> | null = null;

export async function ensureSchema(): Promise<void> {
  if (initializing) return initializing;

  initializing = (async () => {
    try {
      // Create base table first
      await runSqlScript(setupSql);
      // Then additive migrations (idempotent with IF NOT EXISTS)
      await runSqlScript(addMessageColumnSql);
      await runSqlScript(addCrmColumnsSql);

      console.info("Database schema ensured ✅");
    } catch (err) {
      console.error("Failed to ensure database schema:", err);
      // Swallow to not break the UI; callers may still attempt queries which will then fail with clearer errors
    } finally {
      initializing = null;
    }
  })();

  return initializing;
}
