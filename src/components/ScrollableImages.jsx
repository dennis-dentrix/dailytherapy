import img1 from "../assets/img2.jpg";

export default function HomeSection2() {
  return (
    <section className=" mx-auto w-2/3 flex items-center gap-[3.5rem] py-4">
      <ImageGroup />
      <ImageGroup />
      <ImageGroup />
      <ImageGroup />
    </section>
  );
}

function ImageGroup() {
  return (
    <div className="flex gap-2 items-center justify-between" >
      <div className="w-[10rem]">
        <img
          src={img1}
          alt="image 1"
          className="rounded-tr-md rounded-tl-md shadow-lg"
        />

        <div className="px-2 pt-5">
          <p className="font-light text-xl line-clamp-2 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          </p>

          <p>Introduction</p>
        </div>
      </div>
    </div>
  );
}
