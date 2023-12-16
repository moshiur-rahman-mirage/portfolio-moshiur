import React, { useEffect, useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import AnimatedText from "../AnimatedText";
import banner1 from "../../../public/img/banner1.jpg";
import banner2 from "../../../public/img/banner2.jpg";
import banner3 from "../../../public/img/banner3.jpg";
import ProjectCard from "../ProjectCard/ProjectCard";
import CircleIcons from "../Circleicon/CircleIcons";
import Techicons from "../Techicons/Techicons";

const Hero = () => {
  const words = [
    "Front-End Developer",
    "React Developer",
    "Javascript Developer",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 600);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <div id="About" className="flex md:flex-row flex-col mx-auto bg-gradient-to-r from-[#063D62] to-[#ffd89b]">
      <div className="carousel mx-auto w-[90%] md:w-[50%] min-h-screen  rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          
          <div
            className="absolute  md:pl-12 rounded-xl  flex items-center transform left-0 top-0 h-full gap-2 
           "
          >
            <div className=" md:text-white text-black space-y-7 w-full">
              {/* <AnimatedText
                varitants="quote"
                className="text-xl md:text-3xl lg:text-4xl flex-wrap w-3/4  md:w-1/2 font-semibold uppercase whitespace-pre-wrap"
                text="Hello, I am Moshiur Rahman Taz Mirage"
              /> */}
              <h2 className="text-xl">Hello There,</h2>
              <h1 className="text-md md:text-xl lg:text-2xl flex-wrap w-full font-light md:w-full whitespace-pre-wrap">
              Welcome to my Portfolio! I'm Moshiur Rahman Taz Mirage, a dedicated Software Engineer at Orange Solutions Ltd. In my current role, I specialize in crafting robust backend logic for databases. While excelling in database design, I am actively seeking opportunities to broaden my horizons with full-stack development.
              </h1>
              <h1
                className="text-xl md:text-3xl w-full lg:text-4xl "
              >
                {/* I am a {text}{" "} */}
              </h1>
              <div className="flex lg:flex-row md:flex-col mt-20 md:gap-5  lg:gap-10 flex-col gap-2">
                <button className="btn  btn-ghost hover:bg-slate-500 border-lime-50 rounded-r-full rounded-l-full md:w-30 lg:w-60">
                  Download Resume
                </button>
                <button className="btn  btn-ghost hover:bg-slate-500 border-lime-50 rounded-r-full rounded-l-full md:w-30 lg:w-60">
                  Mail Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:w-[50%]  flex-col items-center justify-center">
        {/* <ProjectCard /> */}
       
        <CircleIcons/>
        <Techicons/>
      </div>
    </div>
  );
};

export default Hero;
