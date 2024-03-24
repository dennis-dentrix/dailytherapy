import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";
import { useForm } from "react-hook-form";
import { UseLogin } from "../hooks/useLogin";
import { Checkbox, Spin } from "antd";
import { useAppState } from "../context/userContext";
import { useState } from "react";

export default function Login() {
  return (
    <div>
      <MenuHeader />
      <LoginForm />
    </div>
  );
}

export function LoginForm() {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { loginApi, isLoading } = UseLogin();
  const navigate = useNavigate();
  const { dispatch } = useAppState();

  function handleChecked() {
    setChecked(!checked);
  }

  const onLogin = (data) => {
    console.log(data);
    loginApi(data, {
      onSuccess: () => {
        dispatch({
          type: "login",
          payload: { user: data.data.user, token: data.token },
        });
        localStorage.setItem("email", data.email);
        reset();
        navigate("/profile");
      },
    });
  };
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg">
        <h1 className="text-center text-3xl font-bold">My Daily Therapy</h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onLogin)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full border focus:outline-none px-3 py-2 rounded-md"
              id="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: "Enter your email" })}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-1 block w-full border focus:outline-none px-3 py-2 rounded-md "
              placeholder="Password"
              type="password"
              {...register("password", { required: "Enter your password" })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
            disabled={checked ? true : false}
          >
            {isLoading ? <Spin /> : " LOG IN"}
          </button>
        </form>

        <div className="flex items-center justify-center">
          <Link
            to="/forgot"
            className="text-sm text-blackhover:text-blue-700 underline"
          >
            Forgot your password
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <hr className="w-full text-black" />
          <p className="px-2 text-sm text-gray-800">or</p>
          <hr className="w-full" />
        </div>
        <div className="text-center">
          <p className="text-sm">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-black text-lg hover:text-blue-700 underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="checkbox"
            id=""
            onClick={handleChecked}
          />
          <p className="text-xs">
            By using this application you agree to the{" "}
            <a className="underline">Terms of use</a> and{" "}
            <a className="underline">Privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
