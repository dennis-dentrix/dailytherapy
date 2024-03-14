import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";

export default function Testimonial() {
  return (
    <section className=" flex items-center gap-4 overflow-x-scroll py-3 my-3 md:mx-auto md:w-[55%]">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </section>
  );
}

function VideoCard() {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-2 items-center justify-between"
      onClick={() => navigate("/exercise/1")}
    >
      <div className="w-[10rem] ">
        <img src={img1} alt="image 1" className=" rounded-md shadow-lg" />
        <Carousel autoplay />

        <div className="px-2 pt-5">
          <p className="font-medium text-xl ">The madfit jump rope</p>

          <p>Madfit</p>
        </div>
      </div>
    </div>
  );
}
