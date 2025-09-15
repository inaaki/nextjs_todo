import sql from ".";

async function migrate() {
  await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`;

  await sql`
    CREATE TABLE IF NOT EXISTS todos(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  console.log("migration applied");
  await sql.end();
}

migrate().catch((err) => {
  console.log("migration error: ", err);
  process.exit(1);
});
