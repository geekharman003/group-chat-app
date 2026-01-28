import "dotenv/config";
import connectToDatabase from "./database/mongodb.js";
import express from "express";
import cors from "cors";
import path from "path";
import http from "http";
import { WebSocketServer } from "ws";

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import homeRouter from "./routes/home.routes.js";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api", homeRouter);

app.get("/", (req, res) =>
  res.sendFile(path.join(process.cwd(), "public", "html", "signin.html")),
);

let sockets = [];

wss.on("connection", (ws) => {
  sockets.push(ws);

  ws.on("message", (message) => {
    sockets.forEach((s) => {
      s.send(message);
    });
  });
});

server.listen(process.env.PORT || 3000, async () => {
  await connectToDatabase();
  console.log(`server is running on port ${process.env.PORT}`);
});
