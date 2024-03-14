import { ChevronCompactRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Audio() {
  return (
    <>
      <main className="w-full mt-12 md:w-2/3  grid grid-cols-1 md:grid-cols-2 divide-x-2 justify-center md:mx-auto  ">
        <div className="flex flex-col [&>*]:border-b w-full">
          <Link className="px-2 py-8 flex items-center justify-between md:p-8">
            All audio
            <span>
              <ChevronCompactRight />
            </span>
          </Link>
          <Link className="px-2 py-8 flex items-center justify-between md:p-8">
            Sleep meditation
            <span>
              <ChevronCompactRight />
            </span>
          </Link>
          <Link className="px-2 py-8 flex items-center justify-between md:p-8">
            Soundscapes
            <span>
              <ChevronCompactRight />
            </span>
          </Link>
        </div>

        <div className="flex flex-col [&>*]:border-b">
          <Link className="px-2 py-8 flex items-center justify-between md:p-8 md:items-start">
            Morning meditation
            <span>
              <ChevronCompactRight />
            </span>
          </Link>
          <Link className="px-2 py-8 flex items-center justify-between md:p-8">
            Guided meditation
            <span>
              <ChevronCompactRight />
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
