import img1 from "../assets/img3.jpg";

export default function HomeSection3() {
    return (
        <section className="flex items-center gap-[3.5rem] overflow-x-scroll py-4">
        <Collection />
        <Collection />
        <Collection />
      </section>
      )
}

function Collection () {
  return (
    <div className="flex gap-2 items-center justify-between">
          <div className="w-[30rem] "> 
            <img
              src={img1}
              alt="image 1"
              className="rounded-tr-md rounded-tl-md shadow-lg"
            />
            
            <div className="px-2 pt-5">
              <p className="font-medium text-xl"> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae 
              </p>
    
              <p>Introduction</p>
            </div>
          </div>
    
          
        </div>
  )
}