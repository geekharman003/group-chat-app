import { Router } from "express";

import verifyToken from "../controllers/home.controller.js";

const homeRouter = Router();

homeRouter.get("/", verifyToken);

export default homeRouter;
