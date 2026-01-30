import { Router } from "express";

import { verifyToken, verifyEmail } from "../controllers/home.controller.js";

const homeRouter = Router();

homeRouter.get("/", verifyToken);
homeRouter.post("/verify-email", verifyEmail);

export default homeRouter;
