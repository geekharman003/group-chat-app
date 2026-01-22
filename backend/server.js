import "dotenv/config";
import connectToDatabase from "./database/mongodb.js";
import express from "express";
import cors from "cors";

import { authRouter } from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.listen(process.env.PORT || 3000, async () => {
  await connectToDatabase();
  console.log(`server is running on port ${process.env.PORT}`);
});
