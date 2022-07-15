import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient } from "mongodb";



const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const client = new MongoClient(process.env.URL_CONNECT_MONGO);
let db;
client.connect().then(()=>{
    db = client.db("Enquetes");
});

app.get("/", async (req, res) => {
    await db.collection('').insertOne({nome: "teste", data:"14/07"});
});

console.log("hello rodei");
app.listen(5000);