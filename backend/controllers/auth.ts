import User from "../models/auth";
import Crypto from "crypto";
import { Request, Response } from "express";

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

      const setCookie = (res: Response, token: string) => {
        res.cookie("code-snippets-token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
      };

      setCookie(res, user._id as unknown as string);
    
    if (user) {
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }

      const isPasswordValid = await Crypto.createHash('sha256').update(password).digest('hex') === user.password;
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
      }
      
      const setCookie = (res: Response, token: string) => {
        res.cookie("code-snippets-token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
      };

      setCookie(res, user._id as unknown as string);

      return res.status(200).json({ message: "Logged in successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("code-snippets-token");
  return res.status(200).json({ message: "Logged out successfully" });
};

