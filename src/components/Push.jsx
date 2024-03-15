import { BellFilled } from "@ant-design/icons";
import { BellSlashFill } from "react-bootstrap-icons";

export default function Push() {
  return (
    <section className="p-8 w-full">
      <div className="flex gap-3 pb-6 px-3  border-b">
        <BellFilled style={{ fontSize: 25 }} />
        <h2 className="text-3xl">My push notifications</h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 my-auto h-screen">
        <BellSlashFill size={"40"} />
        <p className="font-light tracking-widest">Notifications are disabled</p>
        <p className="font-light tracking-widest">
          Allow notifications to proceed
        </p>
        <button className="uppercase p-2 rounded-full bg-blue-600 text-white">
          Activate Notofications
        </button>
      </div>
    </section>
  );
}
