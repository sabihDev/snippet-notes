import express from 'express';
import dotenv from 'dotenv';
import  connectDB  from "./lib/connectDB";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
