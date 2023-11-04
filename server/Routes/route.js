//All Routes Calling....

import express from "express";
import { addUser, getUsers, getUSer } from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUSer);
export default router;
