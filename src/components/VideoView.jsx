import img1 from "../assets/img1.jpg";
import { Bookmark, Facebook, Twitter } from "react-bootstrap-icons";
export default function VideoView() {
  return (
    <main className="mt-14 overflo-y-scroll">
      <div className="bg-white p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
          The MadFit fitness essentials LAUNCH TOMORROW! 🎉 #shorts
        </h1>
        <p className="text-sm text-gray-500 mb-4">Posted on 03/13/2024</p>
        <hr className="border-gray-300 mb-4" />
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            alt="MadFit fitness essentials"
            className="object-cover"
            height="360"
            src={img1}
            style={{
              aspectRatio: "640/360",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 *:flex *:items-center *:gap-3 *:p-2">
            <button className="rounded-full text-white bg-blue-500">
              <Facebook className="w-6 h-6" />
              <span>Share</span>
            </button>
            <button className=" rounded-full bg-blue-400 text-white font-bold ">
              <Twitter className="w-6 h-6" />
              <span>Tweet</span>
            </button>
          </div>

          <button className="">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
      </div>
    </main>
  );
}
