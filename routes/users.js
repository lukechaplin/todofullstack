import express from "express";
import { getAllTaskItems } from "../db/models/getAllTaskItems.js";
import { insertTaskIntoToDo } from "../db/models/populateTable.js";

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
  await getAllTaskItems();
  return res.json({
    success: true,
    message: `list items retrieved`,
    payload: getAllTaskItems(res),
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

export default router;
