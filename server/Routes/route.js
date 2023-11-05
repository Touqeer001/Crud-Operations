//All Routes Calling..

import express from "express";
import {
  addUser,
  getUsers,
  getUSer,
  editUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUSer);
router.post("/:id", editUser);

export default router;
