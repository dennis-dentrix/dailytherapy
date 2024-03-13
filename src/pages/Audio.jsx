import { Link } from "react-router-dom";

export default function Audio() {
  return (
    <>
      <main className=" w-2/3  grid md:grid-cols-2 divide-x-2 justify-center mx-auto">
        <div className="flex flex-col [&>*]:border-b">
          <Link className="p-8">All audio</Link>
          <Link className="p-8">Sleep meditation</Link>
          <Link className="p-8">Soundscapes</Link>
        </div>

        <div className="flex flex-col [&>*]:border-b">
          <Link className="p-8 items-start">Morning meditation</Link>
          <Link className="p-8">Guided meditation</Link>
        </div>
      </main>
    </>
  );
}
