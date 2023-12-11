import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="bg-[#EDEDED]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
