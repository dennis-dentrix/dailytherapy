
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
export default function Discover() {
  return (
    <main>
      <Navigation/>
      <SearchBody />
      
    </main>
  )
}


const Navigation = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-300 py-4 shadow-md [&>*]:text-gray-700 [&>*]:hover:text-gray-900">
      <div className="space-x-4 *:px-6 *:py-[1.2rem] ">
        <NavLink to="/discover" className="">ARTICLES</NavLink>
        <NavLink to="/videos" className="">VIDEOS</NavLink>
        <NavLink to="/audio" className="">AUDIO</NavLink>
      </div>
    </nav>
  );
};

const SearchBody =( )=> {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='text-7xl py-5'>
      <SearchOutlined />
      </div>
      <p className="font-medium text-2xl">Perform a search</p>
    </div>
  )
}
