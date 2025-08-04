import { NavLink } from "react-router-dom";

import { logo1 } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo1} alt='logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400"}>
          WebD
        </NavLink>
        <NavLink to='/VideoEditing' className={({ isActive }) => isActive ? "text-blue-600" : "text-gray-400"}>
          Video Editing
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
