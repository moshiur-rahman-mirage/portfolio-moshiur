import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="md:my-8  my-4 first:mt-0 last:mb-9 md:w-[60%] w-[90%] md:mx-auto flex flex-col items-start justify-between">
      <div>
        <h3 className="font-bold text-black text-xl py-5 px-5 capitalize  text-left md:text-2xl">
          {position}&nbsp;
          <a className="text-primary " target="_blank" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="text-dark/70 pb-2 py-5 px-5 md:font-medium text-black capitalize">
          {time} | {address}
        </span>
        <p className="md:font-medium pt-2 px-5 text-xl text-black w-full">{work}</p>
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
    <div id="Education" className="md:mt-16 pb-16 ">
      <h2 className="font-bold  mt-20 md:text-5xl text-black text-xl md:mb-16 md:mt-6 mb-3 w-full text-center">
        My Journey
      </h2>
      <div ref={ref} className=" flex justify-start items-start relative">
        <motion.div  style={{scaleY:scrollYProgress}} className="absolute hidden md:block transition-transform bg-black h-full left-8 top-0 w-[4px] bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between md:ml-4">
          
        <Details
            position="Trainee at Programming Hero"
            company="Programming Hero"
            time="2023-Present"
            address="Dhaka"
            work="Here i've learned front-end development with react and mongodb.
            "
          />
          <Details
            position="Software Engineer"
            company="Orange Solutions Ltd."
            time="2020-Present"
            address="United Group, Satarkul, Dhaka"
            work="In my role, I am actively engaged in developing the backend logic for our flagship product, 
            ERP Software. My experience spans across diverse ERP projects, including prominent entities such as 
            United Hospital, Shamsul Alamin Real Estate Group, and Gazi Group. These engagements have not only 
            honed my technical skills but also provided me with extensive industry expertise.
            "
          />
          <Details
            position="Trainee at IDB-BISEW"
            company="ISDB"
            time="2019-2020"
            address="IDB Bhaban, Agargaon"
            work="This IT scholarship program has provided me with a comprehensive learning experience in backend technologies, including Java, Spring, and JSP. Additionally, I've gained proficiency in Database Technologies such as Oracle and MySQL."
          />
          <Details
            position="Student"
            company="Jagannath University"
            time="2013-2018"
            address="9-10, Chittaranjan Avenue,Dhaka 1100"
            work="I have successfully completed both my Honours and Masters degrees, specializing in Zoology. Driven by an insatiable passion for technology, I have transitioned my career towards the dynamic field of Software Development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
