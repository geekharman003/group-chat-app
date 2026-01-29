import { Server } from "socket.io";
import socketAuthMiddleware from "./middleware.js";
import chatHandler from "./handlers/chat.js";
import personalChat from "./handlers/personalChat.js";

export default (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http:localhost:3000",
    },
  });

  // socket.io auth middleware
  socketAuthMiddleware(io);

  io.on("connection", (socket) => {
    chatHandler(socket, io);

    personalChat(socket,io);
  });
};
