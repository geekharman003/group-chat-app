import ChatMessages from "../models/chat_messages.model.js";

const saveMessage = async (req, res) => {
  const { _id } = req.user;
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      message: "please provide the message you want to send!",
    });
  }

  try {
    await ChatMessages.create({ user: _id, message });

    res.status(201).json({
      success: true,
      message: "message saved successfully",
      data: {
        message,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await ChatMessages.find({ user: req.user._id }).select(
      "user message createdAt",
    );

    if (!messages.length) {
      return res.status(404).json({
        success: false,
        message: "no message found",
      });
    }

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { saveMessage, getAllMessages };
