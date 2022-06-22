import express from "express";
import { getAllTaskItems } from "../db/scripts/getAllTaskItems.js";
import { insertTaskIntoToDo } from "../db/scripts/populateTable.js";
const router = express.Router();
const app = express();
//Make sure to include PORT in capitals and give a port number to listen on
const PORT = 3000;
//Function below means express going to use json
app.use(express.json());

/*Using app.use this way means taking body from the HTTP server route (one of the below routes) 
and attaching to json object so can be used in the 
functions in whichever route you are using*/

app.use(function (req, res, next) {
  req.body = next();
});

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

app.listen(PORT);

export default router;
