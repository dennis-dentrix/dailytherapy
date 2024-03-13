import {
  CiCircleOutlined,
  HeartOutlined,
  MessageFilled,
} from "@ant-design/icons";

export default function Header() {
  return (
    <div className="border-b pb-2 fixed w-full bg-white">
      <div className="flex container justify-between items-center mt-10">
        <CiCircleOutlined />
        <div className="flex gap-2 items-center text-[16px]">
          <HeartOutlined />
          <MessageFilled />
        </div>
      </div>
    </div>
  );
}
