import query from "../index.js";

async function deleteTaskfromTodo() {
  const id = parseInt(request.params.id);
  const res = await query("DELETE FROM todo WHERE id = $1", [id]);
  console.log(res);
}

deleteTaskfromTodo();

const deleteMerchant = () => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query(
      "DELETE FROM merchants WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Merchant deleted with ID: ${id}`);
      }
    );
  });
};
