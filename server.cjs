import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import hotelRoute from "./routes/hotel.routes.js";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import testRoute from "./routes/test.routes.js";
import roomRoute from "./routes/room.router.js";
dotenv.config();
const app = express();

const DB_URL = process.env.MONGO_DB_URL;
const port = process.env.PORT || 8000;

mongoose.connect(DB_URL, () => {
  console.log(`Mongo DB Connected 😀`);
  app.listen(port, () => {
    console.log("app is running on port", port);
    // connect();
  });
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/", testRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

export default app;
