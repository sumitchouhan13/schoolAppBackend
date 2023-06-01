import express from "express";
import schoolRouter from "./routes/schoolRoute.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

//Using Middlewares
app.use(express.json());
app.use("/api/v1/school", schoolRouter);

app.get("/", (req, res) => {
  res.send("Working");
});
