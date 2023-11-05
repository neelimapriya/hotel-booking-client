import { useContext } from 'react';
import logo from '../../../src/assets/LogoL.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const { User, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink className="hover:bg-gray-500 font-serif" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-gray-500 font-serif" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-gray-500 font-serif" to="/cart">
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-gray-500 font-serif" to="/login">
          Gallary
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='bg-black text-white'>
      <div className="navbar   max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown flex items-center">
            <label tabIndex={0} className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 mr-2 cursor-pointer h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
         <div className='flex items-center'>
            <img className='w-10' src={logo} alt="" />
         <a className="font-serif hover:underline  cursor-pointer font-semibold text-xl">Lartisien</a>
         </div>
        </div>
        
        <div className="navbar-end  text-center">
        <div className="  ">
          {User ? (
            <div className='flex'>
              <div className="flex text-white ">
              <label tabIndex={0} className=" avatar">
                <div className="w-7 rounded-full  ">
                  <img src={User?.photoURL} />
                </div>
              </label>
              <p className="text-white font-serif text-sm flex justify-center items-center  ml-1">
                {User?.displayName}
              </p>
              </div>

              <button
                onClick={handleLogout}
                className="ml-4 font-serif w-20 text-white hover:bg-gray-700 rounded-lg"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login">
             <div>
          <h2 className='font-serif text-xl'>Sign In</h2>
          <p className='text-sm text-gray-600'>Or create an account</p>
          </div>
            </Link>
          )}
        </div>
          
        </div>
      </div>
      <div className=" border border-t-orange-700 justify-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
