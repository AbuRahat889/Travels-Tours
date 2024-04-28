import { NavLink } from "react-router-dom";
import Subnav from "./Subnav";
import { useContext } from "react";
import './Navbar.css'
import { AuthContex } from "../../Contex/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContex);

  //handle logout btn
  const handleLogout = ()=>{
    logOut();
  }
  
  return (
    <div>
      {/* SubNavBar */}
      <Subnav></Subnav>
      {/* main NavBar */}

      <div className="navbar  py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>Home</NavLink>
            </ul>
          </div>

          {/* Logo */}
          <div className="p-6 ml-5 ">
            <h1 className="text-5xl">WanderWise</h1>
          </div>
        </div>

        <div id="nav" className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#9ca3a9]">
            <NavLink className="text-xl font-semibold" to={"/"}>
              Home
            </NavLink>
            <NavLink className="text-xl font-semibold mx-5" to={'/allturistspot'}>
              All Tourists Spot
            </NavLink>
            {/* home001 */}
            <NavLink className="text-xl font-semibold mr-5" to={"/addturistspot"}>
            Add Tourists Spot
            </NavLink>
            <NavLink className="text-xl font-semibold" to={"/mylist"}>
              My List
            </NavLink>
            
          </ul>
        </div>
        <div className="navbar-end gap-3 ">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://i.ibb.co/wyYzNJz/man.jpg"}
                alt=""
                className="rounded-full w-16"
              />

              <a onClick={handleLogout} className="btn bg-[#ffbe00] text-white">
                Sign out
              </a>
            </>
          ) : (
            <NavLink to={"/signin"} className="btn bg-[#ffbe00] text-white">
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
