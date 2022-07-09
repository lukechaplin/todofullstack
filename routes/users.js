import express from "express";
import { getAllTaskItems } from "../db/models/getAllTaskItems.js";
import { insertTaskIntoToDo } from "../db/models/populateTable.js";
import { deleteTaskfromTodo } from "../db/models/deleteItem.js";

/*Router part of express package and means setting up 
different URL pathways
for your server that can be exported to be used in the main app,
you then use router.restmethodofyourchoice to define below
what the route will do
 i.e. get, post, delete etc*/

const router = express.Router();

/* GET all to do list items. */
/* make sure always have req, res in the async function smooth brackers 
and always have req first otherwise res.json will not be recognised 
- got to send request for json first so is recognised otherwise will get 
error message saying res.json not a function */
router.get("/view", async function (req, res) {
  let data = await getAllTaskItems();
  res.json({
    success: true,
    message: `list items retrieved`,
    payload: data,
  });
});

/*POST a to do list item to the database */
router.post("/createtodoitem", async function (req, res) {
  const item = req.body;
  await insertTaskIntoToDo(item);
  return res.json({
    success: true,
    message: `item added`,
    payload: item,
  });
});

/*Delete a list item from the database */

router.delete("/deletetodoitem/:id", async function (req, res) {
  let id = req.params.id;
  await deleteTaskfromTodo(id);
  return res.json({
    success: true,
    message: `item deleted`,
    payload: id,
  });
});

export default router;
