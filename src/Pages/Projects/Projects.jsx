import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { Circles } from "react-loader-spinner";
import Overlay from "../../component/Overlay/Overlay";
import Modal from "../../component/Modal/Modal";

const Projects = () => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProject,setSelectedProject]=useState([])
  const [open, setOpen] = useState(false);
  const handleCardClick=(project)=>{
    setSelectedProject(project)
    console.log(selectedProject)
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/Projects.json");
  
      const fetchedData = response.data;
      setCardData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, [axios]);
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div id="Projects" className="min-h-screen w-[90%]  pt-20 pb-10 mx-auto ">
      <h1 className="text-4xl md:text-5xl  text-center text-black  md:mb-32">Some of My Recent Projects</h1>
      <div className="grid place-items-center">
        {loading ? (
          <>
            <div className="min-h-[400]">
              <Circles
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          </>
        ) : (
          <div className="grid md:gap-20 border-red-500 gap:5  grid-cols-1">
            {cardData.map((project) => {
              return (
                <>
                  <ProjectCard key={project.id} open={openModal} project={project} onClick={handleCardClick} />
                  {/* <AnimatePresence>
                    {open && (
                      <Overlay close={closeModal}>
                        
                        <Modal project={selectedProject} close={closeModal} />
                      </Overlay>
                    )}
                  </AnimatePresence> */}
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
