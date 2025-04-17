import express from "express";
import { register } from "../controllers/auth";

const router = express.Router();

router.post("/register", register as unknown as express.RequestHandler);

export default router;
