export default (socket, io) => {
  console.log(`user connected with id:${socket.id}`);

  socket.on("join-room", ({ roomName, message }) => {
    socket.join(roomName);
  });

  socket.on("new-message", ({ roomName, message }) => {
    io.emit("new-message", { userName: socket.user.name, message });
  });
};
