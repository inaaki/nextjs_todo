import sql from ".";

async function seed() {
  await sql`
    INSERT INTO todos (title, completed) VALUES
      ('Learn Next.js', true),
      ('Build a Todo App', false),
      ('Deploy to AWS EC2', false);
  `;
  console.log("seed data inserted");
  await sql.end();
}

seed().catch((err) => {
  console.log("seeding error: ", err);
  process.exit(1);
});
