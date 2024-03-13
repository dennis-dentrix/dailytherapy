import { MessageFilled } from "@ant-design/icons";
import { Circle, Heart, X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function MenuHeader() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="border-b pb-2">
        <div className=" flex container justify-between items-center mt-5 ">
          <div className="flex items-center ">
            <X onClick={() => navigate(-1)} className="text-3xl" />
            <Circle onClick={() => navigate("/home")} className="text-2xl" />
          </div>
          <div className="flex gap-2 items-center *:text-2xl">
            <Heart />
            <MessageFilled onClick={() => navigate("/therapybot")} />
          </div>
        </div>
      </div>
      <nav></nav>
    </header>
  );
}
