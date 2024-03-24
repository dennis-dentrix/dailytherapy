import TopSection from "../components/TopSection";
import HomeSection2 from "../components/ScrollableImages";
import HomeSection3 from "../components/Largeimagescroll";
import HomeSection4 from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import BottomHome from "../components/BottomHome";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/data/resource.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   console.log(data);
  // }, [data]);

  return (
    <main className="px-3 py-5">
      <TopSection />

      <HomeSection2 />

      <HomeSection3 />

      <HomeSection4 />

      <Testimonial />

      <BottomHome />
    </main>
  );
}
