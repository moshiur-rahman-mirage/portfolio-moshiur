import React from "react";
import Hero from "../../component/Hero/Hero";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";



const Home = () => {
  return (
    <div className=" border">
      <Hero/>
      <Projects/>
      <Experience/>
    </div>
  );
};

export default Home;
