import { NavLink } from "react-router-dom";

import { logo1 } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo1} alt='logo' className='w-11 h-11 object-contain sm:w-12 sm:h-12' />
      </NavLink>
      <nav className=' text-sm gap-5 font-medium flex items-center justify-center space-x-2
             sm:space-x-4 sm:text-lg '>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600  " : "text-gray-400 " }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400"}>
          WebD
        </NavLink>
        <NavLink to='/VideoEditing' className={({ isActive }) => isActive ? "text-blue-600 whitespace-nowrap" : "text-gray-400 whitespace-nowrap"}>
          Video Editing
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
