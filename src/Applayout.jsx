import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./ui/Navbar";

export default function Applayout() {
  return (
    <div className=" overflow-x-hidden mb-20 lg:mb-3 flex flex-col ">
      <div className="md:fixed bg-white z-10">
        <Header />
        <Navbar />
      </div>

      <div className="mt-[2rem] md:mt-[8rem]">
        <Outlet />
      </div>
    </div>
  );
}
