import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return ( 
    <footer className="w-full h-[100px] bg-[#303031] text-white flex items-center justify-center gap-20 flex-row  border-solid font-medium text-lg">
     
        <span>{new Date().getFullYear()} &copy; All Rights Reserved! </span>
        <div className="flex items-center ">
        Build By &nbsp; <Link href="">Moshiur Rahman Taz Mirage</Link>
        </div>
     
    </footer>
  );
};

export default Footer;