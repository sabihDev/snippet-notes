import User from "../models/auth";
import Crypto from "crypto";
import {Request, Response} from "express";
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    const hashedPassword = await Crypto.createHash('sha256').update(password).digest('hex');
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    
    if (user) {
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

