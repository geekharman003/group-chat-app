import { signUp, signIn } from "../controllers/auth.controller.js";
import { Router } from "express";

export const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
