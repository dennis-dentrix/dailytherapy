import { LockFill } from "react-bootstrap-icons";
import img1 from "../assets/img3.jpg";
import { useNavigate } from "react-router-dom";

export default function HomeSection3() {
  return (
    <section className="flex items-center gap-[3.5rem] overflow-x-scroll md:overflow-x-hidden py-4">
      <Collection />
      <Collection />
      <Collection />
    </section>
  );
}

function Collection() {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 items-center justify-between"
      onClick={() => navigate("/podcast/1")}
    >
      <div className="w-[20rem] ">
        <img
          src={img1}
          alt="image 1"
          className="rounded-tr-md rounded-tl-md shadow-lg"
        />

        <div className="px-2 pt-5 flex items-center justify-start gap-1">
          <LockFill className="bg-yellow-300 text-white p-1 w-18 font-bold" />
          <p className="font-medium text-base md:text-lg line-clip-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
