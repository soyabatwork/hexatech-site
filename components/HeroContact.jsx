import Image from "next/image";
import React from "react";
import HexaLogo from "../public/assets/svg/logo.svg";
import CyberLaptop from "../public/assets/cyberlaptop.png";

import styled from "styled-components";
import { AiFillContacts } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { Fade } from "react-reveal";

const Background = styled.div`
  position: absolute;
  background: url(${CyberLaptop.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
  width: 110%;
  height: 110%;
  top: 0;
  left: 0;
  margin: -3px -3px;
`;

const HeroContact = () => {
  return (
    <div className="overflow-hidden">
      <Fade up>
        <div className="flex flex-col md:flex-row justify-around space-y-8 bg-gradient-to-bl from-[#276D92] to-[#2B79A2] py-10 items-center">
          <div className="h-12 mb-3 -mt-5 scale-125 md:mt-0 -translate-y-1/4">
            <Image height="100" width="100" src={HexaLogo} />
          </div>
          <p className="max-w-sm text-gray-50">
            Sign Up For Latest IT Resources, News And Insights From Hexatech
            sollutions
          </p>
          <div className="flex">
            <input
              type="text"
              className="p-2 rounded-lg shadow-md focus:outline-none shadow-gray-50/60"
              placeholder="Sign up for latest news"
            />
            <button className="-ml-3 shadow-md btn whitespace-nowrap bg-green-primary active:shadow-sm shadow-green-100/50">
              Sign up
            </button>
          </div>
        </div>
      </Fade>

      {/* hr contact */}

      <div className="relative justify-around px-3 py-10 overflow-hidden text-gray-50 md:flex">
        <div className="flex flex-col items-center justify-center ">
          <Background />
          <AiFillContacts className="z-10 text-5xl" />
          <p className="z-10 flex flex-col items-center justify-center">
            <span>Get in touch</span>
            <span>
              <a href="mailto:contact@acceleratebs.com">
                Email: info@hexatechsolutions.xyz
              </a>
            </span>
            <span>
              <a href="tel:+8801748708868">tel:+8801748708868</a>
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <IoIosContacts />
          <p className="z-10 flex flex-col items-center justify-center">
            Join the team
            <span>
              <a href="mailto:info@hexatechsolutions.xyz">
                E-mail:hr@hexatechsolutions.xyz
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
