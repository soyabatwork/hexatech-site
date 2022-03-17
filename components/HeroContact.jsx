import Image from "next/image";
import React from "react";
import HexaLogo from "../public/assets/svg/logo.svg";
import CyberLaptop from "../public/assets/cyberlaptop.png";

import styled from "styled-components";
import { AiFillContacts } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";

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
      <div className="flex flex-col md:flex-row justify-around space-y-8 bg-gradient-to-bl from-[#276D92] to-[#2B79A2] py-10 items-center">
        <div
          className="h-12 md:mt-0 -mt-5 -translate-y-1/4 scale-125
      mb-3"
        >
          <Image height="100" width="100" src={HexaLogo} />
        </div>
        <p className="text-gray-50 max-w-sm">
          Sign Up For Latest IT Resources, News And Insights From Hexatech
          sollutions
        </p>
        <div className="flex">
          <input
            type="text"
            className="focus:outline-none rounded-lg p-2 shadow-md shadow-gray-50/60"
            placeholder="Sign up for latest news"
          />
          <button className="btn whitespace-nowrap bg-green-primary  -ml-3 active:shadow-sm shadow-md shadow-green-100/50">
            Sign up
          </button>
        </div>
      </div>

      {/* hr contact */}

      <div className="text-gray-50 px-3 py-10 relative overflow-hidden md:flex justify-around">
        <div className="flex flex-col justify-center items-center ">
          <Background />
          <AiFillContacts className="text-5xl z-10" />
          <p className="flex flex-col justify-center items-center z-10">
            <span>Get in touch</span>
            <span>
              <a href="mailto:contact@acceleratebs.com">
                Email: info@hexatechsolutions.xyz
              </a>
            </span>
            <span>
              <a href="tel:+91 98206 18832">tel:+91 98206 18832</a>
              <a href="tel:+91 99201 44416">tel:+91 99201 44416</a>
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoIosContacts />
          <p className="flex flex-col justify-center items-center  z-10">
            Join the team
            <span>
              <a href="mailto:hr@acceleratebs.com">
                E-mail:hr@acceleratebs.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
