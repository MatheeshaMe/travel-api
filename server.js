import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./helpers/logger.js";
dotenv.config();
const app = express();

const DB_URL = process.env.MONGO_DB_URL;

const connect = () => {
  mongoose.connect(DB_URL, () => {
    logger.info(`Mongo DB Connected 😀`);
  });
};

app.listen(8000, () => {
  console.log("app is running");
  connect();
});
