import img4 from "../assets/img4.jpg";
export default function Videos() {
  return (
    <main className="grid grid-cols-2 gap-y-4 place-content-center">
      <VideoList />
      <VideoList />
    </main>
  );
}

function VideoList() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 px-8 py-12 last:border-l-2">
      <div className="flex gap-4 items-center lg:items-start">
        <img
          alt="MadFit"
          className="mb-4 w-48 h-48 object-cover rounded-lg"
          height="200"
          src={img4}
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <h2 className="text-lg font-semibold text-gray-800">MadFit</h2>
      </div>
    </div>
  );
}
