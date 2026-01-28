const verifyToken = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      // verify the token
      const res = await axios.get("http://localhost:3000/api", {
        headers: { authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
      window.location.href = "/html/signin.html";
    }
  } else {
    window.location.href = "/html/signin.html";
  }
};

verifyToken();
