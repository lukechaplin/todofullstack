import query from "../index.js";

export default async function insertTaskIntoTodo() {
  const res = await query("INSERT INTO todo (item) VALUES ($1) RETURNING *", [
    item,
  ]);
  console.log(res);
}
