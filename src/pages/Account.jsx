import {
  DollarCircleFilled,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import {
  Bell,
  BoxArrowRight,
  FileEarmark,
  Lock,
  SendArrowUp,
  ShareFill,
} from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";
import AppSettings from "../components/AppSettings";

export function Account() {
  return (
    <main>
      <MenuHeader />

      <div className="md:flex justify-center md:h-screen bg-white">
        <AccountMenu />

        <Outlet />
        <div className="hidden md:block"></div>
      </div>
    </main>
  );
}

function AccountMenu() {
  const currentEmail = localStorage.getItem("email");
  return (
    <aside className=" bg-white p-4 md:p-8">
      <div className="flex flex-col gap-4 items-center space-x-2 mb-6">
        <Avatar style={{ fontSize: 30 }} />
        <span className="text-xl font-medium">{currentEmail}</span>
      </div>
      <nav className="space-y-2 md:border py-4 px-3 flex flex-col *:py-3 *:px-2 *:gap-2 *:text-lg md:text-base ">
        <Link
          to="profile"
          className="flex items-center space-x-2 text-gray-700"
        >
          <UserOutlined className="h-5 w-5" />
          My account{"\n              "}
        </Link>
        <Link
          to={"/profile/push"}
          className="flex items-center space-x-2 text-gray-700 border-b"
        >
          <Bell className="h-5 w-5" />
          My push notifications{"\n              "}
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700 border-b">
          <DollarCircleFilled className="h-5 w-5" />
          Subscribe{"\n              "}
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700">
          <SendArrowUp className="h-5 w-5" />
          Contact us{"\n              "}
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700">
          <ShareFill className="h-5 w-5" />
          Share this App{"\n              "}
        </Link>
        <Link to="terms" className="flex items-center space-x-2 text-gray-700">
          <FileEarmark className="h-5 w-5" />
          Terms & Conditions{"\n              "}
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700">
          <Lock className="h-5 w-5" />
          Privacy Policy{"\n              "}
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700">
          <SettingFilled className="h-5 w-5" />
          <AppSettings />
        </Link>
        <Link className="flex items-center space-x-2 text-gray-700">
          <BoxArrowRight className="h-5 w-5" />
          Log out{"\n              "}
        </Link>
      </nav>
    </aside>
  );
}
