import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    res.status(201).json({
      success: true,
      message: "user created successfully",
      hashedPassword,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const signIn = (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(200).json({
      success: true,
      message: "user sign-in successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { signUp, signIn };
