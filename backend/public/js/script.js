const BASE_URL = "http://www.localhost:3000";

const handleSignUpForm = async (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phonenumber.value;
  const password = event.target.password.value;

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/sign-up`, {
      name,
      email,
      phone,
      password,
    });

    console.log(res.data);
  } catch (error) {
    console.error(error.message);
  }
};

const handleSignInForm = async (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/sign-in`, {
      email,
      password,
    });
    console.log(res.data);

    window.location.href = "/html/index.html";
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.error(error);
  }
};

const handleMessageForm = async (event) => {
  event.preventDefault();

  const message = event.target.message_box.value;
  console.log(message);
  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `${BASE_URL}/api/messages`,
      {
        message,
      },
      { headers: { authorization: `Bearer ${token}` } },
    );

    console.log(res.data);
  } catch (error) {
    console.error(error);
  } finally {
    event.target.reset();
  }
};

const loadAllMessages = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get(`${BASE_URL}/api/messages`, {
      headers: { authorization: `Bearer ${token}` },
    });

    const { messages } = res.data;
    console.log(messages);

    const messagesContainer = document.getElementById("chat-messages");

    messages.forEach((msg) => {
      const { message, createdAt } = msg;

      addMessageToUi(message, createdAt, messagesContainer);
    });
  } catch (error) {
    console.error(error);
  }
};

const addMessageToUi = (message, createdAt, parent) => {
  const messageElem = document.createElement("span");
  messageElem.classList = "message";

  const time = new Date(createdAt).toLocaleString("en-IN", {
    timeStyle: "short",
  });

  messageElem.innerHTML = `
  ${message}
  <span class="message-time">${time}</span>`;

  parent.appendChild(messageElem);
};


// setInterval(async () => {
//     const messagesContainer = document.getElementById("chat-messages");
//     messagesContainer.innerHTML = "";
//   await loadAllMessages();
// }, 2000);