import express from "express";
import { register, logout, login } from "../controllers/auth";

const router = express.Router();

router.post("/register", register as unknown as express.RequestHandler);
router.post("/login", login as unknown as express.RequestHandler);
router.post("/logout", logout as unknown as express.RequestHandler);

export default router;
