import { Checkbox } from "antd";
import MenuHeader from "../ui/MenuHeader";
import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

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
  const createUser = (e) => {
    e.preventDefault();
    fetch("https://barber-ro3k.onrender.com/api/v1/user/signup")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPswd(!showPswd);
  };
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Sign up</h1>
      <form className="w-full max-w-xs space-y-6">
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
            />
            <button onClick={handleToggle}>
              {showPswd ? <EyeSlash /> : <Eye />}
            </button>
          </div>
        </div>
        <button
          className="w-full uppercase bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
          onClick={createUser}
        >
          Register
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
