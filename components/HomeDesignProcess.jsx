import Image from "next/image";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Fade } from "react-reveal";

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
      <div className="container px-5 py-10 mx-auto">
        <Fade up>
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold text-center text-gray-50">
              Our Design Process
            </h1>
            <h2 className="mb-10 font-extrabold tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
              Deliver Only Exceptional Quality and Improvement!
            </h2>
          </div>
        </Fade>
        <div className="flex-row-reverse gap-10 md:flex">
          <div>
            {contents.map((item, i) => {
              return (
                <Fade up key={i}>
                  <ProcessItem className="text-gray-50">
                    <BsFillArrowDownCircleFill />
                    <h6 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
                      {item.title}
                    </h6>
                    <p>{item.details}</p>
                  </ProcessItem>
                </Fade>
              );
            })}
          </div>
          <Fade up>
            <div className="flex flex-col items-center self-start justify-center my-5 text-gray-50">
              <Image height="300" width="350" src={ProcessImage} />
              <h4 className="my-3">
                Our core focus is to provide quality services enabling our
                clients to focus on their core business. Ready to start your
                next project? Drop us a line or two at:
              </h4>
              <a
                className="px-3 py-1 bg-blue-900 rounded-lg text-green-primary bg-opacity-60"
                href="mailto: support@hexatechsolutios.net"
              >
                support@hexatechsolutios.xyz
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignProcess;
