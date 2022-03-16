import React from "react";
import { BiSupport } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";

const HeroSupport = () => {
  return (
    <div className="mt-5 text-gray-50 bg-[url('../public/assets/performance-bg.png')] bg-fixed	 bg-cover bg-no-repeat bg-center px-3 py-10">
      <div className="container mx-auto md:flex space-y-3 justify-between ">
        <div className="flex gap-2 flex-col items-center text-xl ">
          <BiSupport className="text-4xl" />
          <p>Unlimited Revisions</p>
        </div>
        <div className="flex gap-2 flex-col items-center text-xl">
          <RiTeamFill className="text-4xl" />
          <p>Active Support Team</p>
        </div>
        <div className="flex gap-2 flex-col items-center text-xl">
          <GiBackwardTime className="text-4xl" />
          <p>Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSupport;
