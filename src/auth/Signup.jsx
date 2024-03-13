import { Checkbox } from "antd";
import MenuHeader from "../ui/MenuHeader";

export default function Signup() {
  return (
    <div>
      <MenuHeader />
      <SignupForm />
    </div>
  );
}

export function SignupForm() {
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
          <input
            className="mt-1 block w-full border focus:outline-none px-3 py-2 rounded-md "
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="w-full uppercase bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
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
