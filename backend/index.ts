import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
