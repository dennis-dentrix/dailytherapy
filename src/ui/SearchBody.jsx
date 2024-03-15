import { SearchOutlined } from "@ant-design/icons";

export const SearchBody = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-7xl py-5">
        <SearchOutlined />
      </div>
      <p className="font-medium text-2xl">Perform a search</p>
    </div>
  );
};
