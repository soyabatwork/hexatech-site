import React from "react";
import { FaServer, FaBrain } from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import QuoteBg from "../public/assets/quotebackground.png";
import { Fade } from "react-reveal";

const quotes = [
  "Enterprise Service & Dedicated Team",
  "Knowledge Base 24/7 Support",
  "Reliability & Budget Friendly",
  "ISO 27001:2013 Security Systems",
];

const QuoteContainer = styled.div`
  background-image: url(${QuoteBg.src});
`;

const QuotesSection = () => {
  return (
    <QuoteContainer className="px-2 ">
      <div className="container pb-10 mx-auto ">
        <div className="flex flex-col justify-center gap-3 mb-10 md:flex-row ">
          <Fade up>
            <div className="-mt-10 quote-card">
              <FaServer className="text-2xl" />
              <p className="py-3 text-xl">
                Enterprise Service & Dedicated Team
              </p>
              <BsFillArrowRightCircleFill className="text-2xl" />
            </div>
          </Fade>
          <Fade up>
            <div className="quote-card">
              <FaBrain className="text-2xl" />
              <p className="py-3 text-xl">Knowledge Base 24/7 Support</p>
              <BsFillArrowRightCircleFill className="text-2xl" />
            </div>
          </Fade>
          <Fade up>
            <div className="quote-card">
              <AiOutlineAppstoreAdd className="text-2xl" />
              <p className="py-3 text-xl">Reliability & Budget Friendly</p>
              <BsFillArrowRightCircleFill className="text-2xl" />
            </div>
          </Fade>
          <Fade up>
            <div className="quote-card">
              <AiFillSafetyCertificate className="text-2xl" />
              <p className="py-3 text-xl">ISO 27001:2013 Security Systems</p>
              <BsFillArrowRightCircleFill className="text-2xl" />
            </div>
          </Fade>
        </div>
        <p className="max-w-md mx-auto text-center text-gray-50">
          We Are Privileged To Provide Support To More Than 70 Countries From
          Asia, Africa And Latin America. We Are Now Entering The European
          Market As Well.
        </p>
      </div>
    </QuoteContainer>
  );
};

export default QuotesSection;
