import express from "express";
import { getAllTaskItems } from "../db/scripts/getAllTaskItems.js";
import {insertTaskIntoTodo} from "../db/scripts/populateTable.js"
const router = express.Router();
const app = express()
const port = 3000

/* GET all to do list items. */
app.get("/", function (req, res) {
  await getAllTaskItems()
  res.json({ success: true, message: `list items retrieved`, payload: getAllTaskItems() });
});

/*POST a to do list item to the database */
app.post('/createtodoitem', (req, res) => {
  const newItem = req.body;
  await insertTaskIntoTodo(newItem)
  res.json({success: true, message: `item added`, payload: newItem});
})

app.listen(port, () => {console.log(`app running on port ${port}`)})

export default router;
