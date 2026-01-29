import "dotenv/config";
import connectToDatabase from "./database/mongodb.js";
import express from "express";
import cors from "cors";
import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";


import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import homeRouter from "./routes/home.routes.js";

import socketIO from "./socket_io/index.js";

const app = express();
const server = http.createServer(app);

socketIO(server);

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api", homeRouter);

app.get("/", (req, res) =>
  res.sendFile(join(__dirname, "public", "html", "signin.html")),
);

server.listen(process.env.PORT || 3000, async () => {
  await connectToDatabase();
  console.log(`server is running at http://localhost:${process.env.PORT}`);
});
