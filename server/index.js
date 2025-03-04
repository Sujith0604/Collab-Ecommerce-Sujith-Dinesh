import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import server from "./server/server.js";
import mongoConnection from "./config/mongoConnection.js";
import adminRouter from "./routes/adminRoutes.js";
import customerRouter from "./routes/customerRoutes.js";
import brandRouter from "./routes/brandRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import productRouter from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoConnection;

app.use("/admin", adminRouter);
app.use("/customer", customerRouter);
app.use("/brand", brandRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/review", reviewRouter);

server;
