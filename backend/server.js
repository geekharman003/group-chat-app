import "dotenv/config";
import { authRouter } from "./routes/auth.routes.js";
import cors from "cors";

import express from "express";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
