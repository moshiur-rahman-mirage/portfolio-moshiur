import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../component/Icons/Icons";
import { Link as ScrollLink } from "react-scroll";
const navitems = ["About", "Projects", "Education"];

const divVariants = {
  rest: {
    position: "relative",
    borderBottom: "2px solid  transparent", // Set the initial border style
    transition: {
      duration: 0.3,
      delay: 0.1,
      scale: 0.9,
    },
  },
  hover: {
    position: "relative",
    scale: 1.1,
  },
};

const MenuButton = ({ item, className = "" }) => {
  return (
    <>
      <motion.div
        variants={divVariants}
        whileHover="hover"
        whileTap="rest"
        style={{
          position: "relative",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
        initial="rest"
      >
        <ScrollLink
          className={`${className} lg:mx-10 md:mx-5 mx-2 md:text-xl text-xs text-left uppercase`}
          to={`${item}`}
          smooth={true}
          offset={-70} // Adjust the offset based on your layout (e.g., navbar height)
          duration={500}
        >
          {item}
        </ScrollLink>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  const handleSignOut = () => {
    logout().then().catch();
  };
  return (
    <motion.div
      className="navbar px-10 fixed z-10"
      initial={{ backgroundColor: "#19547b" }}
      animate={{
        // backgroundColor: scrolling ? '#303031' : 'transparent' ,
        backgroundColor: scrolling
          ? "#303031"
          : isHomePage
          ? "transparent"
          : "#303031",
        color: scrolling ? "#fff" : "#fff",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-start my-[-90px] ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#303031] rounded-box w-52"
          >
            {navitems.map((item) => {
              return (
                <MenuButton
                  className=" mx-10  text-2xl"
                  key={item}
                  item={item}
                />
              );
            })}
          </ul>
        </div>

        {/* <MenuButton className="md:text-xl left-10 text-xs uppercase" item="Moshiur Rahman Taz Mirage"></MenuButton> */}
      </div>

      <div className="navbar-center items-center hidden lg:flex">
        <ul className="menu md:justify-center right-0 menu-horizontal w-full px-1">
          {navitems.map((item) => {
            return (
              <MenuButton
                className="uppercase md:text-2xl text-sm "
                key={item}
                item={item}
              />
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <nav className="md:flex md:items-center md:justify-center md:flex-wrap grid-cols-3 grid place-items-center">
          <motion.a
            href="https://github.com/moshiur-rahman-mirage"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/moshiur-rahman-mirage-085059154/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <TwitterIcon />
          </motion.a>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
