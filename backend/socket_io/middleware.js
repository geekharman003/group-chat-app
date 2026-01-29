import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

const socketAuthMiddleware = (io) => {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;

      if (!token) {
        return next(new Error("Unauthorized"));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("_id name email");

      if (!user) {
        return next(new Error("user not found"));
      }

      socket.user = user;
      next();
    } catch (error) {
      console.log(error);
      next(new Error(error.message));
    }
  });
};

export default socketAuthMiddleware;
