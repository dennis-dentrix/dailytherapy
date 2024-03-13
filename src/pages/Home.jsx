import TopSection from "../components/TopSection"
import HomeSection2 from "../components/ScrollableImages"
import HomeSection3 from "../components/Largeimagescroll"
import HomeSection4 from "../components/Gallery"
import Testimonial from '../components/Testimonial';
import BottomHome from "../components/BottomHome";

export default function Home() {
  return (
    <main className="px-3 py-5">
        <TopSection />

        <HomeSection2 />

        <HomeSection3 />

        <HomeSection4 />

        <Testimonial />

        <BottomHome />
      </main>
  )
}
