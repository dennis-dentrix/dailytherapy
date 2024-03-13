import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./ui/Navbar";

export default function Applayout() {
  return (
    <div className="relative overflow-x-hidden h-screen flex flex-col ">
      <div className="md:fixed bg-white">
        <Header />
        <Navbar />
      </div>

      <div className="md:mt-[7.5rem]">
        <Outlet />
      </div>
    </div>
  );
}
