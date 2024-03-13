import { ToolFilled } from "@ant-design/icons";
import { Clipboard, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import MenuHeader from "../ui/MenuHeader";

export default function Seatch() {
  return (
    <main>
      <MenuHeader />

      <div className="flex flex-col">
        <Link
          to="/about"
          className="md:h-screen bg-blue-500 border-b-4 text-white text-4xl"
        >
          <div className="mx-auto">
            <ToolFilled />
            <span>About</span>
          </div>
        </Link>

        <div className="md:h-[50vh] flex divide-x-4 *:bg-blue-500 *:text-3xl *:text-white">
          <Link to="/form" className="">
            <Clipboard />
            <span>Intake</span>
          </Link>

          <Link to="/contactus" className="">
            <Heart />
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
