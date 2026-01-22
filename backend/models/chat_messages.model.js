import mongoose from "mongoose";
import { Schema } from "mongoose";

const chatMessagesSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const ChatMessages = mongoose.model("ChatMessages", chatMessagesSchema);

export default ChatMessages;
