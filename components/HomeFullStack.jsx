import React from "react";
import styled from "styled-components";

const FullStackContainer = styled.div`
  position: relative;
  &:after {
    content: "";
    background: url("../public/assets/svg/whitewave.svg");
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const HomeFullStack = () => {
  return (
    <FullStackContainer className="bg-gradient-to-bl from-[#276D92] to-[#2B79A2]">
      <div className="container mx-auto py-10 px-10 space-y-10">
        <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary mb-10 font-bold">
          Expert Full-stack Web Development Company
        </h2>
        <p className="text-gray-50">
          Your business success depends on the solutions your brand can deliver
          in the digital world. For more than two decades, mid-size businesses
          and global brands continue to choose Net Solutions as their preferred
          custom web develop ment company. Our certified web development
          specialists can provide various web development services ranging from
          prog ressive web apps (PWAs) to personalized customer experience
          platforms.
        </p>
        <div className="space-x-3">
          <button className="btn bg-slate-50">Explore our process</button>
          <button className="btn bg-green-primary">Request a quote</button>
        </div>
      </div>
    </FullStackContainer>
  );
};

export default HomeFullStack;
