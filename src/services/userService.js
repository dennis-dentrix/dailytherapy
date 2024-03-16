import { base_url } from "../configs/apiConfigs";

export async function signUp(data) {
  const { email, password } = data;
  try {
    const response = await fetch(`${base_url}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: password,
      }),
    });

    const data = await response.json();

    console.log(response);

    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }

    return data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
}
