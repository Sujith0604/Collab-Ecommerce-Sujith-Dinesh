import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import server from "./server/server.js";
import mongoConnection from "./config/mongoConnection.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoConnection;

server;
