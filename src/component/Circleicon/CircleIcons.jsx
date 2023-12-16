import React, { useState, useEffect } from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { SiTailwindcss,SiMicrosoftsqlserver } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaReact,FaCss3Alt } from "react-icons/fa";


const CircleIcons = () => {
  const icons = [FaReact,SiMicrosoftsqlserver,FaCss3Alt,  DiJavascript, SiMongodb, FaCodeBranch,SiTailwindcss,];

  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height based on your requirements
  };

  const iconContainerStyle = {
    position: 'relative',
    width: '200px', // Adjust the container size
    height: '200px',
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '25%',
    left: '80%',
    transform: 'translateX(-100%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1, // Ensure the button is above the icons
  };

  const iconStyle = {
    position: 'absolute',
    transformOrigin: 'center center', // Adjusted transform origin for rotation around the center
  };

  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(80);

  useEffect(() => {
    const updateRadius = () => {
      // Adjust the radius based on the screen width
      const newRadius = window.innerWidth < 768 ? 50 : 80; // Change the radius for screens smaller than 768px
      setRadius(newRadius);
    };

    updateRadius(); // Initial calculation

    // Update the radius on window resize
    window.addEventListener('resize', updateRadius);

    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50); // Adjust the interval duration for the rotation speed

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateRadius);
    };
  }, []);

  const calculateIconPosition = (index, totalIcons) => {
    const baseAngle = 360 / totalIcons;
    const angle = baseAngle * index + rotation;
    const radius = 80; // Adjust the radius based on your requirements
    const radians = (angle * (Math.PI / 180));
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    const iconRotation = -angle - baseAngle / 2; // Rotate by half the angle to keep the top side up
    return { left: `${50 + x}%`, top: `${50 + y}%`, transform: `rotate(${iconRotation}deg)` };
  };

  return (
    <div className='md:flex hidden justify-center items-center min-h-screen mx-auto '>
      <div className='relative w-[200px] h-[200px]'>
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            style={{ ...iconStyle, ...calculateIconPosition(index, icons.length) }}
            className="md:text-5xl text-2xl bg-red-100 rounded-full"
          />
        ))}
         <button style={buttonStyle} className='bg-red-300 p-2 border-white btn-ghost rounded-full text-black font-semibold border-2'>Skills</button>
      </div>
    </div>
  );
};

export default CircleIcons;
