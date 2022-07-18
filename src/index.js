import express from "express";
import cors from "cors";
import { newPoll } from "./controllers/newPoll.js";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/poll", newPoll);

console.log("hello world");
app.listen(5000);