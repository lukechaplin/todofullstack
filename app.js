import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

/*Below router pulls through the routes I created 
- get, post in the routes files so they are used in the app*/
import router from "./routes/users.js";

//Function below means express going to use json
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*this app.use function means base pathway for all routes starts with /todo 
then depending on which route is used and what the rest of that pathway was 
written as, this is tacked on to pathway e.g. /todo/view if using the get request*/

app.use("/todo", router);

/*Using app.use this way means taking body from the HTTP server route 
(from one of the routes imported using router) 
and attaching to json object so can be used in the 
functions in whichever route you are using*/
app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
