import { Checkbox, Spin } from "antd";
import MenuHeader from "../ui/MenuHeader";
import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useSignUp } from "../hooks/useSignUp";

export default function Signup() {
  return (
    <div>
      <MenuHeader />
      <SignupForm />
    </div>
  );
}

export function SignupForm() {
  const [showPswd, setShowPswd] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const { signUpAPI, isLoading } = useSignUp();

  function onSubmitForm(data) {
    signUpAPI(data, {
      onSuccess: () => {
        reset();
      },
    });
  }

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPswd(!showPswd);
  };
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Sign up</h1>
      <form
        className="w-full max-w-xs space-y-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
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
            {...register("email", { required: ["This field is required"] })}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className=" border rounded-md px-2 flex items-center mt-1 show-password">
            <input
              className="mt-1 block w-full border-none focus:outline-none px-1 py-2  "
              placeholder="Password"
              type={showPswd ? "text" : "password"}
              {...register("password", {
                required: ["This field is required"],
              })}
            />
            <button onClick={handleToggle}>
              {showPswd ? <EyeSlash /> : <Eye />}
            </button>
          </div>
        </div>
        <button
          className="w-full uppercase bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
          type="submit"
        >
          {isLoading ? <Spin /> : "Register"}
        </button>
        <div className="mt-6 flex items-center justify-center text-sm">
          <Checkbox id="terms" />
          <label className="ml-2" htmlFor="terms">
            By using this application, you agree to the{" "}
            <a className="text-black underline" href="#">
              Terms of use
            </a>{" "}
            and{" "}
            <a className="text-black underline" href="#">
              Privacy policy
            </a>
          </label>
        </div>
      </form>
    </div>
  );
}
