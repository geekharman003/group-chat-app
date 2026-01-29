export default (socket, io) => {
  console.log(`user connected with id:${socket.id}`);

  socket.on("chat message", (message) => {
    socket.broadcast.emit("chat message", {
      userName: socket.user.name,
      message,
    });
  });
};

