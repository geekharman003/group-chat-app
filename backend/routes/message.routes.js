import { Router } from "express";
import { saveMessage } from "../controllers/message.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const messageRouter = Router();

messageRouter.post("/", authenticate,saveMessage);

export default messageRouter;
