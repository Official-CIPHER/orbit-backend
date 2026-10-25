import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

export const pool = new Pool({
  connectionString,
});

pool.on("error", (error) => {
  console.error(`Unexpected PostgreSQL pool error : ${error.message}`);
});

export async function connectionDB(): Promise<void> {
    const result = await pool.query("SELECT NOW()");

    console.log("PostgreSQL connected successfully!!");
    console.log(`Database Time : ${result.rows[0].now}`);
}
