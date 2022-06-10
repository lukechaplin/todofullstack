import express from "express";
import { getAllTaskItems } from "../db/scripts/getAllTaskItems.js";
import { insertTaskIntoToDo } from "../db/scripts/populateTable.js";
const router = express.Router();
const app = express();

/* GET all to do list items. */
app.get("/", async function (res) {
  await getAllTaskItems();
  res.json({
    success: true,
    message: `list items retrieved`,
    payload: getAllTaskItems(),
  });
});

/*POST a to do list item to the database */
app.post("/createtodoitem", async function (req, res) {
  const item = req.body;
  await insertTaskIntoToDo(item);
  res.json({
    success: true,
    message: `item added`,
    payload: insertTaskIntoToDo(item),
  });
});

export default router;
