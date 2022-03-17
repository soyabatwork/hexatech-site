import React from "react";
import styled from "styled-components";
import { FaWpexplorer } from "react-icons/fa";
import HeroBackground from "../public/assets/HeroBg.png";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  background-image: url(${HeroBackground.src});
`;

const Hero = () => {
  return (
    <HeroContainer className=" bg-cover origin-center overflow-x-hidden bg-fixed -mt-20">
      <div className="container mx-auto flex items-center justify-center py-10  text-gray-50  h-screen md:ml-52">
        <motion.div
          animate={{ opacity: 1, delay: "1000" }}
          className="scale-75 text-center md:text-left p-1 flex flex-col mt-20 max-w-xs opacity-60"
        >
          <div className="text-3xl">
            We offer a wide range of customizable{" "}
            <span className="whitespace-nowrap text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
              IT services
            </span>
          </div>
          <p>IT Solutions that will help you save time and money.</p>
          <button className="self-center md:self-start px-5 py-2 gap-1 flex justify-center items-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-lg shadow-gray-300/60 hover:shadow-gray-100 mt-5 transition-all">
            Explore <FaWpexplorer />
          </button>
        </motion.div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
