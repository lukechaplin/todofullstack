import query from "../index.js";

export default async function deleteTaskfromTodo() {
  const id = parseInt(request.params.id);
  const res = await query("DELETE FROM todo WHERE id = $1", [id]);
  console.log(res);
}
