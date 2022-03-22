import React from "react";
import styled from "styled-components";
import { FaWpexplorer } from "react-icons/fa";
import HeroBackground from "../public/assets/HeroBg.png";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  background-image: url(${HeroBackground.src});
`;

const heroTextVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  transition: { type: "tween", duration: 2 },
};

const Hero = () => {
  return (
    <HeroContainer className="-mt-20 overflow-x-hidden origin-center bg-fixed bg-cover ">
      <div className="container flex items-center justify-center h-screen py-10 mx-auto text-gray-50 md:ml-52">
        <motion.div
          variants={heroTextVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col max-w-xs p-1 mt-20 text-center scale-75 md:text-left opacity-60"
        >
          <div className="text-3xl">
            We offer a wide range of customizable{" "}
            <span className="text-4xl font-extrabold text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
              IT services
            </span>
          </div>
          <p>IT Solutions that will help you save time and money.</p>
          <button className="flex items-center self-center justify-center gap-1 px-5 py-2 mt-5 transition-all rounded-lg shadow-lg md:self-start bg-gradient-to-r from-blue-900 to-blue-800 shadow-gray-300/60 hover:shadow-gray-100">
            Explore <FaWpexplorer />
          </button>
        </motion.div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
