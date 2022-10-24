import express from "express";
import dotenv from "dotenv"
const app = express();


app.use("/", require("./routes/user.routes"));

app.listen(8000, () => {
  console.log("app is running");
  //   connectDB();
});
