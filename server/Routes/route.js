//All Routes Calling..

import express from "express";
import { addUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("all", getUsers);

export default router;
