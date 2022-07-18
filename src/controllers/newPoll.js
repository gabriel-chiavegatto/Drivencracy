import joi from "joi";
import dayjs from "dayjs";
import {db} from "../mongoclient.js";

export async function newPoll(req, res) {
    const polldata = req.body;

    const today = dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(today);
    const nextMonth = dayjs().add(1,"month").format('YYYY-MM-DD HH:mm:ss');
    console.log(nextMonth);

    const pollSchema = joi.object({
        title: joi.string().required(),
        expireAt: joi.string().optional()
    });
    const validation = pollSchema.validate(polldata);
    if (validation.error) {
        console.log(validation.error.details);
        res.sendStatus(422);
    }
    if(!polldata.expireAt || polldata.expireAt === ""){
        polldata.expireAt = nextMonth;
    }

    try{
        await db.collection("polls").insertOne(polldata);
        res.status(201).send(polldata);
    } catch{
        res.sendStatus(400);
    }

}