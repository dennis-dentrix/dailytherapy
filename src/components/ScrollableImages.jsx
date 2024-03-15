import { LockFill } from "react-bootstrap-icons";
import img1 from "../assets/img2.jpg";
import { useNavigate } from "react-router-dom";

export default function HomeSection2() {
  return (
    <section className=" flex items-center gap-[3.5rem] py-4 overflow-x-scroll md:overflow-hidden md:mx-auto md:w-[85%]">
      <ImageGroup />
      <ImageGroup />
      <ImageGroup />
      <ImageGroup />
    </section>
  );
}

function ImageGroup() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/blog/1")}
      className="flex gap-2 items-center justify-between"
    >
      <div className="w-[8rem] md:w-[11rem]">
        <img
          src={img1}
          alt="image 1"
          className="rounded-tr-md rounded-tl-md shadow-lg"
        />

        <div className="px-2 pt-5">
          <div className="flex gap-1 items-center">
            <LockFill className="bg-yellow-300 text-white p-1 w-14 font-bold" />
            <p className="font-light text-base md:text-xl line-clamp-1 md:line-clamp-2 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae
            </p>
          </div>

          <p className="text-xs">Introduction</p>
        </div>
      </div>
    </div>
  );
}
