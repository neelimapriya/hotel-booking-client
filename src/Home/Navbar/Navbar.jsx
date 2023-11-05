import logo from '../../../src/assets/LogoL.png'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
         <div className='flex items-center'>
            <img className='w-10' src={logo} alt="" />
         <a className="font-serif hover:underline  cursor-pointer font-semibold text-xl">Lartisien</a>
         </div>
        </div>
        
        <div className="navbar-end grid text-center">
          <h2 className='font-serif text-xl'>Sign In</h2>
          <p className='text-sm text-gray-600'>Or create an account</p>
        </div>
      </div>
      <div className=" border border-t-orange-700 justify-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
