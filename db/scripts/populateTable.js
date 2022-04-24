import query from "../index.js";

async function insertTaskIntoTodo() {
  const res = await query(
    "INSERT INTO todo (id, item) VALUES ($1, $2) RETURNING *",
    [item]
  );
  console.log(res);
}

insertTaskIntoTodo();
