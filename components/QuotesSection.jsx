import React from "react";
import { FaServer, FaBrain } from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import QuoteBg from "../public/assets/quotebackground.png";

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
    <QuoteContainer className=" px-2 ">
      <div className=" container mx-auto pb-10 ">
        <div className="flex flex-col md:flex-row mb-10 justify-center gap-3 ">
          <div className="quote-card -mt-10">
            <FaServer className="text-2xl" />
            <p className="py-3 text-xl">Enterprise Service & Dedicated Team</p>
            <BsFillArrowRightCircleFill className="text-2xl" />
          </div>
          <div className="quote-card">
            <FaBrain className="text-2xl" />
            <p className="py-3 text-xl">Knowledge Base 24/7 Support</p>
            <BsFillArrowRightCircleFill className="text-2xl" />
          </div>
          <div className="quote-card">
            <AiOutlineAppstoreAdd className="text-2xl" />
            <p className="py-3 text-xl">Reliability & Budget Friendly</p>
            <BsFillArrowRightCircleFill className="text-2xl" />
          </div>
          <div className="quote-card">
            <AiFillSafetyCertificate className="text-2xl" />
            <p className="py-3 text-xl">ISO 27001:2013 Security Systems</p>
            <BsFillArrowRightCircleFill className="text-2xl" />
          </div>
        </div>
        <p className="text-gray-50 max-w-md text-center mx-auto">
          We Are Privileged To Provide Support To More Than 70 Countries From
          Asia, Africa And Latin America. We Are Now Entering The European
          Market As Well.
        </p>
      </div>
    </QuoteContainer>
  );
};

export default QuotesSection;
