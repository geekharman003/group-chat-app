import { Router } from "express";

import {
  saveMessage,
  getAllMessages,
} from "../controllers/message.controller.js";

import authenticate from "../middlewares/auth.middleware.js";

const messageRouter = Router();

messageRouter.post("/", authenticate, saveMessage);
messageRouter.get("/", authenticate, getAllMessages);

export default messageRouter;
