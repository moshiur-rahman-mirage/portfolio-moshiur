import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { Circles } from "react-loader-spinner";

const Projects = () => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/Projects.json');
      console.log(response)
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

  return (
    <div id="Projects" className="min-h-screen w-[90%] mx-auto">
      <h1 className="text-4xl text-white text-center py-10">My Recent Projects</h1>
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
            <div className="grid md:gap-20  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {cardData.map((project) => {
                return (
                  <>
                    <ProjectCard
                      key={project.id}
                      project={project}
                      
                    />
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
