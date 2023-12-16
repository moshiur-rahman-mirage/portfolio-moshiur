import React from 'react';

import { FaCodeBranch } from 'react-icons/fa';
import { SiTailwindcss,SiMicrosoftsqlserver } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaReact,FaCss3Alt } from "react-icons/fa";
const Techicons = () => {
    return (
        <div className='md:hidden flex flex-col py-10 text-white'>
            <h2 className='text-xl text-center mb-10 '>My Tech Stack</h2>
            <div className='grid grid-cols-3 gap-5 py-5'>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <FaReact className='text-4xl'/>
                    <p>React</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <SiMongodb className='text-4xl'/>
                    <p>MongoDB</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <DiJavascript className='text-4xl'/>
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <SiTailwindcss className='text-4xl'/>
                    <p>Tailwind</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <SiMicrosoftsqlserver className='text-4xl'/>
                    <p>Microsoft Sql Server</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <FaCss3Alt className='text-4xl'/>
                    <p>CSS</p>
                </div>
               
                
               
            </div>
        </div>
    );
};

export default Techicons;