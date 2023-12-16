import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="md:my-8 my-4 first:mt-0 last:mb-9 md:w-[60%] w-[90%] md:mx-auto flex flex-col items-start justify-between">
      <div>
        <h3 className="font-bold text-white capitalize text-md text-left md:text-2xl">
          {position}&nbsp;
          <a className="text-primary" target="_blank" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="text-dark/70 pb-2 md:font-medium text-white capitalize">
          {time} | {address}
        </span>
        <p className="md:font-medium text-sm md:text-md text-white w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id="Experience" className="md:my-36 my-6">
      <h2 className="font-bold text-left md:text-5xl text-white text-xl md:mb-32 mt-6 mb-3 w-full md:text-center">
        My Journey
      </h2>
      <div ref={ref} className=" flex justify-start items-start relative">
        <motion.div  style={{scaleY:scrollYProgress}} className="absolute transition-transform bg-white h-full left-8 top-0 w-[4px] bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between md:ml-4">
          <Details
            position="Software Engineer"
            company="Orange Solutions Ltd."
            time="2020-Present"
            address="United Group, Satarkul, Dhaka"
            work="Here our main product is ERP Software, and i develop backend logic for this. I have worked on various ERP Project.
            For Example : United Hospital, Shamsul Alamin Real Estate Group and Gazi group. I have achieved vast industry experience through this.
            "
          />
          <Details
            position="Trainee at IDB-BISEW"
            company="ISDB"
            time="2019-2020"
            address="IDB Bhaban, Agargaon"
            work="This is a IT scholarship, Here i have learned backend technologies like Java,Spring,JSP. Database Technologies: ORACLE & Mysql."
          />
          <Details
            position="Student"
            company="Jagannath University"
            time="2013-2018"
            address="9-10, Chittaranjan Avenue,Dhaka 1100"
            work="I have completed My honours and Masters from here. My major was Zoology. Due to never ending thurst for technology i have shift my career towards Software Development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
