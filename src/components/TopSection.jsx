import { Carousel } from "antd";
import img1 from "../assets/img1.jpg";

export default function ScrollableVideo() {
  return (
    <section className=" flex items-center gap-4 overflow-x-scroll py-3 my-3">
      <VideoCard />
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
  return (
    <div className="flex gap-2 items-center justify-between">
        <div className="w-[20rem] "> 
          <img
            src={img1}
            alt="image 1"
            className=" rounded-md shadow-lg"
          />
          <Carousel autoplay />

          <div className="px-2 pt-5">
            <p className="font-medium text-xl " > 
              The madfit jump rope 
            </p>

            <p>Madfit</p>
          </div>
        </div>
      </div>
  )
}