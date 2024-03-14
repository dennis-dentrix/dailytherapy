import { CopyOutlined } from "@ant-design/icons";
import {
  Gear,
  Lock,
  Newspaper,
  PersonCircle,
  Send,
  Share,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <main className="py-4 md:py-6 md:flex md:flex-col md:items-center">
      <div className="border-b md:w-1/2 md:py-3">
        <div className="flex flex-col items-center gap-6 mb-6">
          <div className="flex flex-col items-center gap-3 text-3xl">
            <PersonCircle className=" " />
            <p className="text-sm">
              Sign in to access your account infromation
            </p>
          </div>
          <Link
            to="/login"
            className="bg-blue-400 uppercase rounded-full py-2 px-5 text-white font-bold tracking-wide text-lg"
          >
            LOG IN
          </Link>
        </div>

        <nav className="flex flex-col *:py-2 *:px-4 mx-3">
          <Link className="flex items-center gap-4 border-b">
            <Newspaper style={{ fill: "black" }} />
            <span>Subscribe</span>
          </Link>
          <div className="flex flex-col [&>*]:flex [&>*]:items-center [&>*]:gap-4 border-b space-y-4 ">
            <Link>
              <Send />
              <span>Contact us</span>{" "}
            </Link>
            <Link>
              <Share />
              <span>Share this App</span>
            </Link>
            <Link>
              <CopyOutlined />
              <span>Terms & conditions</span>
            </Link>
            <Link>
              <Lock />
              <span>Privacy & Policy</span>
            </Link>
          </div>
          <Link className="flex items-center gap-4 py-2">
            <Gear />
            <span>App Setting</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
