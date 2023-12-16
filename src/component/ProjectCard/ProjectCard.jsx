import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { id, image, name, description, github_link, demo_link } = project;
  const handleGitClick=(github_link)=>{
    window.location.href = {github_link};
  }
  const handleDemoClick=(demo_link)=>{
    window.location.href = {demo_link};
  }
  return (
    <motion.div className="card w-96 bg-transparent text-white border-white border-2 shadow-xl" whileHover={{ scale: 1.01 }}>
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          
        </h2>
        <p>{description}</p>
        <div className="card-actions items-center justify-center pt-5">
          <Link className="btn  border-2 border-black bg-[#7EC482]" to={github_link}>Github Link</Link>
          <Link className="btn  border-2 border-black bg-[#7EC482]" to={demo_link}>Demo Link</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
