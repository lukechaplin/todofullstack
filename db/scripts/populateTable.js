import query from "../index.js";

export async function insertTaskIntoToDo() {
  console.log(item);
  const data = await query(
    `INSERT INTO todo (item) VALUES ($1) RETURNING item`,
    [item]
  );
  return data.rows;
}

insertTaskIntoToDo();
