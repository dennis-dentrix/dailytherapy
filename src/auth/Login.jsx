import { Link } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";

export default function Login() {
  return (
    <div>
      <MenuHeader />
      <LoginForm />
    </div>
  );
}

export function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-bold">My Daily Therapy</h1>
        <form className="mt-8 space-y-6">
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
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full">
            LOG IN
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
              href="#"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs">
            By using this application you agree to the{" "}
            <a href="#" className="underline">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
