import express from "express";
import { addUser } from "../controller/user-controller";

const router = express.Router();

router.post("/add", addUser);
export default router;
