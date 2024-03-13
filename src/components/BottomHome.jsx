import img3 from '../assets/img3.jpg'
export default function BottomHome() {
    return (
        <section className="flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto relative ">
          <img src={img3} alt="A group of people" className="rounded-lg shadow-md"/>

          <div className='absolute top-1/2 left-1/2 z-30'>
          <h1 className="text-4xl font-bold mt-8">Who Are We?</h1>
        <button className="mt-5 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Learn More
        </button>
          </div>
        </div>
        
        
        
        <div className="flex justify-center space-x-4 mt-6">
          {/* Social Media Icons */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {/* Icon */}
          </a>
          {/* More social media icons */}
        </div>
        
        <div className="mt-10">
          <span className="text-lg">Become a member</span>
          <button className="mt-2 bg-gray-800 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Subscribe
          </button>
        </div>
      </section>
    )
}