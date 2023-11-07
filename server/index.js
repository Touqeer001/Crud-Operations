import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./Routes/route.js";
// import bodyParser from "body-parser"....;
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// ROuting..
app.use(bodyParser.json({ extended: true })); //ye karne se payload me body show hone lagi gi..
app.use(bodyParser.urlencoded({ extended: true })); //url encode ka used url ko encode krne ke liye hota h..ye url ke liye hota ha.
app.use("/", router);

Connection(username, password);

app.listen(PORT, () => console.log(`SErver is Runnning on ${PORT}`));
