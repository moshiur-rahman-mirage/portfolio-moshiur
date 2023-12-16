import React from "react";
import Hero from "../../component/Hero/Hero";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Footer from "../../Shared/Footer";



const Home = () => {
  return (
    <div className=" border">
      <Hero/>
      <div className="bg-[#F1E9D0]">
      <Projects />
      <Experience/>
      </div>
      <Footer/>
     
      
    </div>
  );
};

export default Home;
