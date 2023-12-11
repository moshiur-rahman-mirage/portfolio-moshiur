import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navitems = ["Home", "Projects", "Education"];

  const MenuLnk = ({ item, className = "" }) => {
    return (
      <>
        <NavLink
          className={`${className} mx-10`}
          to={`${item}`}
        >
          {item}
        </NavLink>
      </>
    );
  };

  return (
    <div className="navbar mx-auto  max-w-7xl lg:max-w-[90%]">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
          >
            {navitems.map((item) => {
              return (
                <MenuLnk className=" mx-10 " key={item} item={item} />
              );
            })}
          </ul>
        </div>
        <NavLink className="mr-10 hover:bg-[#EDEDED] p-2 rounded-md font-semibold" to={"/"}>Moshiur Rahman</NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navitems.map((item) => {
            return (
              <MenuLnk className=" mx-10 hover:bg-[#EDEDED] p-2 rounded-md font-semibold " key={item} item={item} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
