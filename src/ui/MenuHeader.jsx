import { MessageFilled } from "@ant-design/icons";
import { Circle, Heart, X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function MenuHeader() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="border-b py-2 px-3">
        <div className=" flex container justify-between items-center  ">
          <div className="flex items-center gap-4 ">
            <X onClick={() => navigate(-1)} className="text-4xl" />
            <Circle onClick={() => navigate("/home")} className="text-2xl" />
          </div>
          <div className="flex gap-4 items-bottom *:text-2xl">
            <Heart />
            <MessageFilled onClick={() => navigate("/therapybot")} />
          </div>
        </div>
      </div>
      <nav></nav>
    </header>
  );
}
