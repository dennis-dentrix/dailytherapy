import { useNavigate } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";

export default function ForgotPassword() {
  return (
    <div>
      <MenuHeader />
      <ForgotForm />
    </div>
  );
}

export function ForgotForm() {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    navigate("/mailsent");
  };
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="p-8 bg-white">
        <h1 className="text-3xl font-semibold">Forgot password?</h1>
        <p className="mt-2 text-lg">Enter your email to reset password</p>
        <form className="mt-6">
          <div className="flex flex-col space-y-4">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border px-3 py-2 focus:outline-none rounded-md"
            />
            <div className="mt-6 flex space-x-4 text-white *:w-full *:bg-blue-600 *:rounded-full *:py-2 uppercase ">
              <button className="">Cancel</button>
              <button onClick={onSubmit}>Send</button>
            </div>
          </div>
        </form>
        <p className="mt-6 text-sm text-center *:text-gray-600">
          By using this application, you agree to the
          <a className="underline" href="#">
            {" "}
            Terms of use
          </a>
          and{"\n            "}
          <a className="underline" href="#">
            {" "}
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}
