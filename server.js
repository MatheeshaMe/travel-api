import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
 
import hotelRoute from "./routes/hotel.routes.js";
dotenv.config();
const app = express();

const DB_URL = process.env.MONGO_DB_URL;

const connect = () => {
  mongoose.connect(DB_URL, () => {
    console.log(`Mongo DB Connected 😀`);
  });
};

app.use(cors())
app.use(cookieParser())
app.use(express.json());


app.use("/api/hotels", hotelRoute);
app.listen(8000, () => {
  console.log("app is running");
  connect();
});
