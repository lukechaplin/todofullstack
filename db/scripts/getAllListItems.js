import query from "../index.js";

export async function getAllListItems() {
  const data = await query(`SELECT * FROM todo`);
  return data.rows;
}
