import {
  ChatRightTextFill,
  ChevronCompactLeft,
  Facebook,
  Twitter,
} from "react-bootstrap-icons";
import { Bookmark } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex items-center justify-between border-b">
        <div className="flex items-center gap-2 py-7 md:py-3 px-2 ">
          <ChevronCompactLeft size={25} onClick={() => navigate(-1)} />
          <h3 className="capitalize text-gray-400 hidden md:block">
            Guided Meditation: Letting Go
          </h3>
        </div>

        <div className="flex items-center md:gap-4 md: divide-x-2 py-3 px-2  ">
          <div className="flex items-center gap-1 px-2 py-1 md:rounded-full md:bg-blue-400 md:text-white text-gray-600">
            <Facebook size={20} />
            <span className="hidden md:block">Share</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1  text-gray-600 md:rounded-full md:bg-blue-300 md:text-white">
            <Twitter />
            <span className="hidden md:block">Tweet</span>
          </div>

          <div className="flex items-center gap-3 ">
            <Bookmark />
            <ChatRightTextFill />
          </div>
        </div>
      </header>

      <SubscribeContent />
    </div>
  );
}

export function SubscribeContent() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Subscriber content only
        </h1>
        <p className="mt-4 mb-8 text-lg text-gray-600">
          To access this content and all of our unlimited content subscribe now
        </p>
        <button className="bg-blue-600 text-white hover:bg-blue-700 px-20 py-2 rounded-full">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
