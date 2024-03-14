import { Link, useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";
import { Facebook, Youtube } from "react-bootstrap-icons";
import { InstagramFilled, TwitterOutlined } from "@ant-design/icons";
export default function BottomHome() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative">
        <img
          src={img3}
          alt=""
          className="w-full md:w-2/3 md:mx-auto h-auto blur-sm"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="font-bold text-4xl">Who are we?</h1>
          <button className="text-blue-700 uppercase px-2 py3 border border-blue-500 rounded-full">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Social Media Icons */}
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Facebook />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <TwitterOutlined />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Youtube />
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <InstagramFilled />
        </Link>
      </div>

      <div className="mt-10 flex flex-col">
        <p className="text-xl font-light tracking-wider">Become a member</p>
        <span className="text-sm">No limit and no obligation</span>
        <button className="mt-2 bg-blue-600 text-white  font-semibold uppercase text-base px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Subscribe
        </button>
      </div>
    </section>
  );
}
