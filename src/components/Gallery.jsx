import img1 from "../assets/img4.jpg";

export default function HomeSection4() {
  return (
    <div className="grid grid-cols-2 gap-10 mx-auto my-4 px-8">
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />

    </div>
  );
}

function ImageComponent() {
  return (
    <div className="overflow-hidden flex gap-6">
        <img src={img1} alt="Beach" className=" rounded-t-md w-48 h-48 object-cover" />
        <div className="">
          <h2 className="text-2xl  text-gray-800">Beach Retreat</h2>
          <p className="text-gray-600 mt-2">Relax and Unwind</p>
          <div className="flex flex-row mt-4">
            <span className="text-sm text-gray-500">Posted on </span>
            <span className="text-sm font-medium text-gray-800">
              03/08/2024
            </span>
          </div>
        </div>
      </div>
  );
}
