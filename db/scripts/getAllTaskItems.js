import query from "../index.js";

export async function getAllTaskItems() {
  const data = await query(`SELECT * FROM todo`);
  console.log(data.rows);
  return data.rows;
}
