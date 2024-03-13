import { useNavigate } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";

export function Mailsent() {
  const navigate = useNavigate();
  const onOkClicked = () => {
    navigate("/login");
  };
  return (
    <div>
      <MenuHeader />
      <div className="flex h-screen w-full items-center justify-center bg-white p-4">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-lg font-semibold">
            If an account exists with this email, you will receive an email to
            reset your password
          </h1>
          <button
            onClick={onOkClicked}
            className="w-full rounded-full py-2 bg-blue-600 text-white"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
