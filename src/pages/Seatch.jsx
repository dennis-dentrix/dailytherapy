import { Clipboard, Heart, Layers } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";
import Navbar from "../ui/Navbar";

export default function Seatch() {
  return (
    <main>
      <MenuHeader />

      <div className="grid grid-cols-2 gap-4 grid-rows-6  ">
        <Link
          to="/about"
          className="md:h-screen bg-blue-500 border-b-4 text-white text-4xl flex flex-col items-center justify-center  col-start-1 col-end-3"
        >
          <div className="">
            <Layers />
            <span className="text-4xl">About</span>
          </div>
        </Link>

        <Link
          to="/form"
          className="md:h-screen bg-blue-500 border-b-4 text-white text-4xl flex flex-col items-center justify-center  col-start-1 col-end-2"
        >
          <div className="">
            <Clipboard />
            <span className="text-4xl">Intake</span>
          </div>
        </Link>
        <Link
          to="/contactus"
          className="md:h-screen bg-blue-500 border-b-4 text-white text-4xl flex flex-col items-center justify-center col-start-2 col-end-3 h-56"
        >
          <div className="">
            <Heart />
            <span className="text-4xl">About</span>
          </div>
        </Link>

        {/* <div className="cols-start-1 col-end-2 md:h-[50vh] flex divide-x-4 *:bg-blue-500 *:text-3xl *:text-white">
          <Link to="/form" className="">
            <Clipboard />
            <span>Intake</span>
          </Link>

          <Link to="/contactus" className="">
            <Heart />
            <span>Contact us</span>
          </Link>
        </div> */}
      </div>

      <Navbar />
    </main>
  );
}
