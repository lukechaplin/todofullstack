import query from "../index.js";

export async function deleteTaskfromTodo(id) {
  const res = await query(`DELETE FROM todo WHERE id = $1`, [id]);
  console.log(res);
}
