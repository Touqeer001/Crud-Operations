import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'


const app=express();
dotenv.config();
const PORT=8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;




Connection(username,password);

app.listen(PORT,()=>console.log(`SErver is Runnning on ${PORT}`));
