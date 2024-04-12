import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import config from "./config";
import linksRouter from "./routers/LinksRouter";

const app = express()
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/', linksRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();