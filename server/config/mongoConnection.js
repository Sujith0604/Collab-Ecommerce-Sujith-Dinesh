import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoConnection = mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

export default mongoConnection;
