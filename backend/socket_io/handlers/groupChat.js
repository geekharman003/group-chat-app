export default (socket, io) => {
  socket.on("join-group", (groupName) => {
    socket.join(groupName);
  });

  socket.on("send-message-in-group", ({ message, groupName }) => {
    io.to(groupName).emit("recieve-new-message-in-group", {
      name: socket.user.name,
      message,
    });
  });
};
