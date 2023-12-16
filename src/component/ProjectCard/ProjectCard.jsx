import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectCard = ({ open, project, onClick }) => {
  const { id, image, name, description,technology, github_link, demo_link } = project;
  const isOddId = id % 2 !== 0;
  const flexClass = isOddId ? "md:flex-row-reverse text-white border-black  md:border-white" : "md:flex-row text-black md:border-black";
  const btnclass = isOddId ? " border-white" : "border-black";
  const bgclass = isOddId ?  "bg-[#063D62]" : "bg-[#ffd89b]"; 


  const handleButtonClick=(link)=>{
    window.open(link, '_blank');
    // console.log(link)
  }


  return (
    <div className={`flex items-between   rounded-lg md:p-2 mb-5 pb-5 ${flexClass} ${bgclass} flex-col 
    justify-around md:gap-10 gap-5 w-full`}>
      <figure className="">
        <img src={image} alt="Shoes" className=" object-cover w-[900px]" />
      </figure>
      <div className=" pl-10 flex flex-col gap-2 mt-10">
          <h1 className="text-2xl text-left font-semibold">{name}</h1>
          <p className="text-2xl">{description}</p>
          <p className="md:text-xl text-md">{technology}</p>
          <div className="flex flex-row mt-10 gap-5">
            <button className={`btn btn-ghost rounded-r-full rounded-l-full border-2 ${btnclass}`} target="_blank" onClick={()=>{handleButtonClick(github_link)}}>Github Link <MdOutlineArrowOutward/> </button>
            <button className={`btn btn-ghost rounded-r-full rounded-l-full border-2 ${btnclass}`} target="_blank" onClick={()=>{handleButtonClick(demo_link)}}>Demo Link <MdOutlineArrowOutward/></button>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
