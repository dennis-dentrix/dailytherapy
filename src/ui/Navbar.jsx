import {
  BookOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuFoldOutlined,
  MessageFilled,
  SearchOutlined,
  SpotifyOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:top-[3.5rem]  md:border-2 h-max ">
      <ul className=" top-0 bg-white flex items-center justify-center gap-6 py-4 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-1 [&>*]:text-lg  [&>*]:font-thin [&>*]:w-28">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 text-blue-300" : "translate-x-0"
            }`
          }
        >
          <HomeOutlined />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/discover/articles"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 text-blue-300" : "translate-x-0"
            }`
          }
        >
          <SearchOutlined />
          <span>Discover</span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 text-blue-300" : "translate-x-0"
            }`
          }
        >
          <BookOutlined />
          <span>Blog</span>
        </NavLink>
        <NavLink
          to="/audio"
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 text-blue-300" : "translate-x-0"
            }`
          }
        >
          <SpotifyOutlined />
          <span>Audio</span>
        </NavLink>
        <NavLink className="" onClick={onOpen}>
          <MenuFoldOutlined />
          <span>Menu</span>
        </NavLink>
        <Drawer
          onClose={onClose}
          open={open}
          className={({ isActive }) =>
            `text-gray-500 transition-all duration-300 ${
              isActive ? " translate-x-2 text-blue-300" : "translate-x-0"
            }`
          }
        >
          <MenuContent />
        </Drawer>
      </ul>
    </div>
  );
}

const MenuContent = () => {
  return (
    <nav className="flex flex-col items-start gap-4 w-full [&>*]:border-b [&>*]:w-full [&>*]:py-2 [&>*]:gap-3 *:flex *:text-lg last:border-none">
      <NavLink to="/profile">
        <UserOutlined />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/videos">
        <VideoCameraAddOutlined />
        <span>Videos</span>
      </NavLink>
      <NavLink to="/therapybot">
        <MessageFilled />
        <span>AITherapy</span>
      </NavLink>
      <NavLink to="/seatch">
        <InfoCircleOutlined />
        <span>About</span>
      </NavLink>
    </nav>
  );
};
