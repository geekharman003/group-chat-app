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

const handleLoginForm = async (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
