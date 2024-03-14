import img1 from "../assets/img4.jpg";

export default function HomeSection4() {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:mx-auto my-4 ">
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
    </div>
  );
}

function ImageComponent() {
  return (
    <div className="overflow-hidden flex gap-6 border-b pb-4">
      <img
        src={img1}
        alt="Beach"
        className=" rounded-t-md w-28 h-28 md:w-48 md:h-48 object-cover"
      />
      <div className="">
        <h2 className="md:text-2xl text-gray-800">Beach Retreat</h2>
        <p className="text-gray-600 mt-2 text-sm">Relax and Unwind</p>
        <div className="md:flex flex-row mt-4 hidden">
          <span className="text-sm text-gray-500">Posted on </span>
          <span className="text-sm font-medium text-gray-800">03/08/2024</span>
        </div>
      </div>
    </div>
  );
}
