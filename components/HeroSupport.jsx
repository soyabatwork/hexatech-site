import React from "react";
import { BiSupport } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import styled from "styled-components";
import SupportBg from "../public/assets/performance-bg.png";
import { Fade } from "react-reveal";

const HeroSupportContainer = styled.div`
  background-image: url(${SupportBg.src});
`;

const HeroSupport = () => {
  return (
    <HeroSupportContainer className="bg-gradient-to-br from-[#276D92]  to-[#2B79A2] mt-5 text-gray-50 bg-fixed	 bg-cover bg-no-repeat bg-center px-3 py-10">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 md:h-52 md:flex-row ">
          <Fade up>
            <div className="flex flex-col items-center gap-2 text-xl">
              <BiSupport className="text-4xl" />
              <p>Unlimited Revisions</p>
            </div>
          </Fade>
          <Fade up>
            <div className="flex flex-col items-center gap-2 text-xl">
              <RiTeamFill className="text-4xl" />
              <p>Active Support Team</p>
            </div>
          </Fade>
          <Fade up>
            <div className="flex flex-col items-center gap-2 text-xl">
              <GiBackwardTime className="text-4xl" />
              <p>Money-Back Guarantee</p>
            </div>
          </Fade>
        </div>
      </div>
    </HeroSupportContainer>
  );
};

export default HeroSupport;
