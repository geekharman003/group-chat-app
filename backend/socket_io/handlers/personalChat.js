export default (socket, io) => {

  // listening for join room event
  socket.on("join-room", (roomName) => {

    // socket joining the particular room 
    socket.join(roomName);
    console.log(`user with id:${socket.id},joined room:${roomName}`);
  });

  // listening for send message in room event 
  socket.on("send-new-message-in-room", ({ message, roomName }) => {


    // sending the message in particular room
    io.to(roomName).emit("recieve-new-message-in-room", {
      name: socket.user.name,
      message,
    });
  });
};
