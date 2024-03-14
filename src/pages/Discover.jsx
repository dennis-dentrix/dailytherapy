import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Navbar from "../ui/Navbar";
import { Search } from "react-bootstrap-icons";
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
      <Navigation />
      <SearchBody />
      <Navbar />
    </main>
  );
}

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-300 py-4 shadow-md [&>*]:text-gray-700 [&>*]:hover:text-gray-900">
      <div className="space-x-4 *:px-6 *:py-[1.2rem] ">
        <NavLink to="/discover/articles" className="">
          ARTICLES
        </NavLink>
        <NavLink to="/discover/videos" className="">
          VIDEOS
        </NavLink>
        <NavLink to="/discover/audio" className="">
          AUDIO
        </NavLink>
      </div>
    </nav>
  );
};

const SearchBody = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-7xl py-5">
        <SearchOutlined />
      </div>
      <p className="font-medium text-2xl">Perform a search</p>
    </div>
  );
};
