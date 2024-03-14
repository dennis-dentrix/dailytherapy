import {
  CiCircleOutlined,
  HeartOutlined,
  MessageFilled,
} from "@ant-design/icons";

export default function Header() {
  return (
    <div className="border-b p-4 fixed w-full bg-white">
      <div className="flex container justify-between items-center text-[28px]">
        <CiCircleOutlined />
        <div className="flex gap-2 items-center ">
          <HeartOutlined />
          <MessageFilled />
        </div>
      </div>
    </div>
  );
}
