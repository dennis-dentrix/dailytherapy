import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Navbar from "./ui/Navbar";

export default function Applayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}
