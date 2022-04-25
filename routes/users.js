import express from "express";
import { getAllListItems } from "../db/scripts/getAllListItems";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  await getAllListItems()
  res.json({ success: true, message: `list items retrieved`, payload: getAllListItems() });
});

export default router;
