import img from "../assets/img1.jpg";
import footImg from "../assets/footimg.jpg";
import MenuHeader from "../ui/MenuHeader";
export default function About() {
  return (
    <main>
      <MenuHeader />

      <div className="w-2/3 mx-auto flex flex-col gap-5">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-light text-2xl ">Who are we?</h2>

          <img src={img} alt="" className="md:w-2/3 w-1/2 rounded-md" />
        </div>

        <div className="space-y-5">
          <p>
            My Daily Therapy is a comprehensive mental health application
            designed to serve as a versatile tool for stress management,
            enhancing mental well-being, and providing relief from anxiety.
          </p>
          <p>
            Our application is meticulously crafted to empower individuals on
            their path to a more healthful and harmonious life.
          </p>
          <p>
            Our overarching objective is to offer support not only during
            scheduled therapy sessions but also to provide a means for
            individuals to address their mental health needs proactively at any
            moment.&#34;
          </p>
          <p>
            Are you in crisis, experiencing emotional distress, or worried about
            someone you know? Call or text 988 or chat at 988lifeline.org 24
            hours a day, 7 days a week
          </p>
        </div>

        <div className="place-items-center">
          <img src={footImg} alt="" />
        </div>
      </div>
    </main>
  );
}
