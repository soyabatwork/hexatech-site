import Image from "next/image";
import React from "react";
import HexaLogo from "../public/assets/svg/logo.svg";

const HeroContact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around space-y-8 bg-gradient-to-bl from-[#276D92] to-[#2B79A2] py-10 items-center">
      <div
        className="h-12 -translate-y-1/2 scale-125
      mb-3"
      >
        <Image height="100" width="100" src={HexaLogo} />
      </div>
      <p className="text-gray-50">
        Sign Up For Latest IT Resources, News And Insights From Hexatech
        sollutions
      </p>
      <div className="flex">
        <input
          type="text"
          className="focus:outline-none rounded-lg p-2"
          placeholder="Sign up for latest news"
        />
        <button className="btn whitespace-nowrap bg-green-primary  -ml-3 active:shadow-sm shadow-md shadow-green-100/50">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HeroContact;
