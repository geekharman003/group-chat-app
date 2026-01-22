import ChatMessages from "../models/chat_messages.model.js";

const saveMessage = async (req, res) => {
  const { _id } = req.user;
  const { message } = req.body;

  try {
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "please provide the message you want to send!",
      });
    }

    await ChatMessages.create({ user: _id, message });

    res.status(201).json({
      success: true,
      message: "message saved successfully",
      data:{
        message
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { saveMessage };
