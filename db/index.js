import pg from "pg";

import { db } from "../config.js";

const pool = new pg.Pool({
  connectionString: db.connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
