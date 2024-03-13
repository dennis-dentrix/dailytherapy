import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import MenuHeader from "../ui/MenuHeader";

export default function Menu() {
  return (
    <>
      <MenuHeader />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}
