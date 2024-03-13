import { useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";
export default function BottomHome() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto relative ">
        <img
          src={img3}
          alt="A group of people"
          className="rounded-lg shadow-md blur-sm"
        />

        <div className="absolute top-1/3 left-1/3 z-30">
          <h1 className="text-4xl font-bold mt-8 text-white">Who Are We?</h1>
          <button
            onClick={() => navigate("/about")}
            className="mt-5 bg-transparent border border-blue-500 text-blue-500 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {/* Social Media Icons */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          {/* Icon */}
        </a>
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
