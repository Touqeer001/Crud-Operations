//All Routes Calling..

import express from "express";
import {
  addUser,
  getUsers,
  getUSer,
  editUser,
  deleteUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUSer);
router.post("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
