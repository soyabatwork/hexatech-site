import Image from "next/image";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import styled from "styled-components";

import ProcessImage from "../public/assets/designimage.png";

const contents = [
  {
    title: "Requirements",
    details: "We learn about your business goals, industry and compitition",
  },
  {
    title: "Planning",
    details:
      "Process regarding the activities required to achieve the desired goal.",
  },
  {
    title: "Customer Feedback",
    details: "Information, insights, issues, and input shared by client.",
  },
  {
    title: "Design",
    details:
      "Our designers take the information gathered to create a unique custom website design incorporating what we learned.",
  },
  {
    title: "Development",
    details:
      "ur website is programmed using the latest technologies, using  your content to create a fully-functional site.",
  },
  {
    title: "Testing",
    details: "We learn about your business goals, industry and compitition.",
  },
  {
    title: "Launch",
    details:
      "We test your website to make sure everything is working properly, then we launch your new website, for the world to see.",
  },
];

const ProcessItem = styled.div`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.4rem;
  &:before {
    position: absolute;
    bottom: 10%;
    left: 0;
    content: "";
    width: 2px;
    height: 57%;
    background: #f5f5f5;
  }
  svg {
    color: #cadb2b;
    position: absolute;
    top: 0;
    left: -0.44rem;
    height: 45%;
    transform: scale(150%);
  }
`;

const HomeDesignProcess = () => {
  return (
    <div className="bg-gradient-to-br from-[#276D92]  to-[#2B79A2]">
      <div className="container mx-auto px-5 py-10">
        <div className="text-center">
          <h1 className="text-center text-2xl font-bold text-gray-50 mb-2">
            Our Design Process
          </h1>
          <h2 className="text-center tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary mb-10">
            Deliver Only Exceptional Quality and Improvement!
          </h2>
        </div>
        <div className="md:flex flex-row-reverse gap-10">
          <div>
            {contents.map((item, i) => {
              return (
                <ProcessItem key={i} className="text-gray-50">
                  <BsFillArrowDownCircleFill />
                  <h6 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
                    {item.title}
                  </h6>
                  <p>{item.details}</p>
                </ProcessItem>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center my-5 text-gray-50 self-start">
            <Image height="300" width="350" src={ProcessImage} />
            <h4 className="my-3">
              Our core focus is to provide quality services enabling our clients
              to focus on their core business. Ready to start your next project?
              Drop us a line or two at:
            </h4>
            <a
              className="text-green-primary px-3 py-1 bg-blue-900 bg-opacity-60 rounded-lg"
              href="mailto: support@hexatechsolutios.net"
            >
              support@hexatechsolutios.xyz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignProcess;
