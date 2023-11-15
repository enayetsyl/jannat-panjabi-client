import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'

const NavBar = () => {

    
  const navItems = <>
    <li className="bg-[#d99904] py-2 px-4 ">
    <NavLink to={'/'} activeClassName="active">Home</NavLink>
    </li>
    <li className="bg-[#d99904] py-2 px-4 ">
    <NavLink to={'/showcase'} activeClassName="active">Showcase</NavLink>
    </li>
    <li className="bg-[#d99904] py-2 px-4 ">
    <NavLink to={'/shop'} activeClassName="active">Shop</NavLink>
    </li>
    <li className="bg-[#d99904] py-2 px-4 ">
    <NavLink to={'/contact'} activeClassName="active">Contact</NavLink>
    </li>
    
  </>

  return (
    <div>
      <div className="navbar bg-white text-white opacity-90 fixed z-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" text-[#d99904]  lg:hidden mr-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-5 shadow bg-[#d99904] rounded-box w-52">
        {
          navItems
        }
      </ul>
    </div>
    <img src={logo} alt="" className="h-20 w-20" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-10 text-black font-bold  menu-horizontal  px-1">
      {
        navItems
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default NavBar;