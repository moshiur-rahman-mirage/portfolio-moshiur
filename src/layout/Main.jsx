import React from "react";
import { Outlet } from "react-router-dom";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "../Shared/Navbar";


const Main = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-[#002B37]">
      <div className="">
        <motion.div
          className="top-0 left-0 right-0 h-[5px] fixed bg-red-600 z-50  transform origin-left"
          style={{ scaleX }}
        />
        <Navbar />
      </div>
      <Outlet />
      <div className="bg-[#303031] ">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;
