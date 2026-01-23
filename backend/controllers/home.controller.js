import jwt from "jsonwebtoken";

const verifyToken = (req, res) => {
  try {
    let token = null;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized!",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default verifyToken;
