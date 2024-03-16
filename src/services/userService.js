import { base_url } from "../configs/apiConfigs";

export async function login(data) {
  const { email, password } = data;

  try {
    const response = await fetch(`${base_url}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error("Could not login. Try again");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error?.message || "An error occurred");
  }
}

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

    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }

    return data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
}

export async function updateProfile(data) {
  console.log(data);
  const { newData, token } = data;
  try {
    const response = await fetch(`${base_url}/user/updateMe`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Error updating your details try again.");
    }
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err?.message);
  }
}

export async function deleteAccount() {
  try {
    const response = await fetch(`${base_url}/user/delete/me`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    console.log(response);

    if (!response.ok) {
      console.log(response);
      throw new Error("Could not delete your account");
    }
  } catch (err) {
    console.log(err);
    throw new Error(err?.message);
  }
}
export async function logOut() {
  try {
    const response = await fetch(`${base_url}/user/logout`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error("Could not log out");
    }
  } catch (err) {
    throw new Error(err?.message);
  }
}
