import pg from "pg";

import { db } from "../config.js";

const pool = new pg.Pool({
  connectionString: db.connectionString,
  ssl: { rejectUnauthorized: false },
});

/*Query function here means text taken in from SQL 
statements and any parameters (the dollar sign values) you add are taken in 
as 2nd arguement*/

export default function query(text, params) {
  return pool.query(text, params);
}
