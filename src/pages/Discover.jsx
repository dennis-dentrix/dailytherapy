import { NavLink, Outlet } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import Navbar from "../ui/Navbar";

export default function Discover() {
  return (
    <main>
      <div className="flex gap-2 rounded-lg items-center bg-gray-300 mx-2 my-3 px-3 py-2">
        <Search />
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          className="bg-transparent w-full py-1  text-gray-600 focus:outline-none"
        />
      </div>
      <Navbar />
      <Navigation />
      <Outlet />
      {/* <SearchResult /> */}
      {/* <SearchBody /> */}
    </main>
  );
}

const Navigation = () => {
  return (
    <nav className="lg:mt-[5rem] flex justify-center items-center bg-gray-300 py-4 shadow-md [&>*]:text-gray-700 [&>*]:hover:text-gray-900">
      <div className="space-x-4 *:px-6 *:py-[1.2rem] *:text-sm">
        <NavLink
          to="/discover/articles"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 bg-white" : "translate-x-0"
            }`
          }
        >
          ARTICLES
        </NavLink>
        <NavLink
          to="/discover/videos"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 bg-white" : "translate-x-0"
            }`
          }
        >
          VIDEOS
        </NavLink>
        <NavLink
          to="/discover/audio"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 bg-white" : "translate-x-0"
            }`
          }
        >
          AUDIO
        </NavLink>
      </div>
    </nav>
  );
};
