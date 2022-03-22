import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-reveal";

const HomeFullStack = () => {
  return (
    <div className="bg-gradient-to-bl from-[#276D92] to-[#2B79A2] relative ">
      <div className="container px-10 py-10 mx-auto space-y-10">
        <Fade up>
          <h2 className="mb-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
            Expert Full-stack Web Development Company
          </h2>
        </Fade>
        <Fade up>
          <p className="text-gray-50">
            Your business success depends on the solutions your brand can
            deliver in the digital world. For more than two decades, mid-size
            businesses and global brands continue to choose Net Solutions as
            their preferred custom web develop ment company. Our certified web
            development specialists can provide various web development services
            ranging from prog ressive web apps (PWAs) to personalized customer
            experience platforms.
          </p>
        </Fade>
        <Zoom top>
          <div className="md:space-x-3 ">
            <button className="inline btn bg-slate-50">
              Explore our process
            </button>
            <button className="inline mt-2 ml-1 btn bg-green-primary md:mt-0">
              Request a quote
            </button>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default HomeFullStack;
