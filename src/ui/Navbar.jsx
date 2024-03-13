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
import { Link, NavLink } from "react-router-dom";
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
    <NavLink className="flex items-center justify-center gap-6 py-4 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-1 [&>*]:text-sm  [&>*]:font-thin [&>*]:w-28">
      <Link to="/" className="">
        <HomeOutlined />
        <span>Home</span>
      </Link>
      &nbsp;
      <Link to="/discover" className="">
        <SearchOutlined />
        <span>Discover</span>
      </Link>
      <Link to="/blog" className="">
        <BookOutlined />
        <span>Blog</span>
      </Link>
      <Link to="/audio" className="">
        <SpotifyOutlined />
        <span>Audio</span>
      </Link>
      <Link className="" onClick={onOpen}>
        <MenuFoldOutlined />
        <span>Menu</span>
      </Link>
      <Drawer onClose={onClose} open={open} className="">
        <MenuContent />
      </Drawer>
    </NavLink>
  );
}

const MenuContent = () => {
  return (
    <nav className="flex flex-col items-start gap-4 w-full [&>*]:border-b [&>*]:w-full [&>*]:py-2 [&>*]:gap-3 *:flex *:text-lg last:border-none">
      <Link to="/profile">
        <UserOutlined />
        <span>Profile</span>
      </Link>
      <Link to="/videos">
        <VideoCameraAddOutlined />
        <span>Videos</span>
      </Link>
      <Link to="/therapybot">
        <MessageFilled />
        <span>AITherapy</span>
      </Link>
      <Link to="/seatch">
        <InfoCircleOutlined />
        <span>About</span>
      </Link>
    </nav>
  );
};
