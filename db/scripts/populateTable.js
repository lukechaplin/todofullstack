import query from "../index.js";

export async function insertTaskIntoToDo(item) {
  await query(`INSERT INTO todo (item) VALUES ($1) RETURNING item`, [item]);
  console.log(item);
}
