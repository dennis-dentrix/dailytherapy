import img3 from "../assets/img3.jpg";

export default function Blog() {
  return (
    <main className="w-full mx-auto">
      {/* <div className="grid grid-cols-5 grid-rows-3 items-center justify-center gap-1 w-2/3 mx-auto"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-5 justify-center">
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />

      </div>
    </main>
  );
}

function BlogCards() {
  return (
    <div className=" relative">
    <img className="w-full h-full grayscale" src={img3} alt="" />
    <div className="p-4">
      <h2 className="absolute bottom-0 right-0 text-lg font-bold text-white">Promoting Kidney Health and Awareness</h2>
    </div>
    </div>
  );
}
