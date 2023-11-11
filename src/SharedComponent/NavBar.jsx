import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

const NavBar = () => {

  const navItems = <>
    <li>
    <Link to={'/'}>Home</Link>
    </li>
    <li>
    <Link to={'/menu'}>Menu</Link>
    </li>
    <li>
    <Link to={'/shop'}>Shop</Link>
    </li>
    <li>
    <Link to={'/contact'}>Contact</Link>
    </li>
  </>

  return (
    <div>
      <div className="navbar bg-black text-white opacity-70 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          navItems
        }
      </ul>
    </div>
    <img src={logo} alt="" className="h-20 w-20" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
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