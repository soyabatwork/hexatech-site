import Image from "next/image";
import React from "react";
import styled from "styled-components";
import abouttopbg from "../public/assets/aboutmain.jpg";

import HexaLogo from "../public/assets/svg/logo.svg";

const AboutMainContainer = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  justify-content: baseline;
  align-items: flex-end;
  &:after {
    content: "";
    position: absolute;
    background-image: url(${abouttopbg.src});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    filter: blur(2px);
  }
`;
const AboutBodyContainer = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    background-image: url(${abouttopbg.src});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    filter: blur(2px);
  }
`;

const About = () => {
  return (
    <div>
      <AboutMainContainer>
        <div className="z-10 w-full p-5 bg-gray-200/80">
          <p className="tracking-widest text-gray-700">WE ARE MENTORMATE</p>
          <h4 className="text-4xl text-blue-primary">Your Trusted Guide</h4>
        </div>
      </AboutMainContainer>
      <div className="bg-primary-gradient">
        <div className="container max-w-6xl px-3 py-10 mx-auto space-y-3 text-gray-100">
          <h5 className="tracking-widest text-green-primary">
            WHERE WE’VE BEEN
          </h5>
          <p>
            Hexatech Solutions is an IT company which was established in January
            2020. In March, the whole world was affected by Covid and yet amidst
            all that we were still able to secure ourselves in the industry and
            provide optimal quality services. At Hexatech Solutions our culture
            is to provide all round IT solutions with honesty, integrity and
            in-timely.
          </p>
        </div>
        {/* mission and vision */}
        <div className="container flex max-w-6xl px-3 mx-auto space-x-2 text-gray-700">
          <div className="p-5 rounded-md bg-green-primary ">
            <p className="mb-3 text-3xl">Vision</p>
            <p>
              To represent Bangladesh’s IT products and services globally, and
              make a name as one of the top fortune 500 IT Companies in the
              world.
            </p>
          </div>
          <div className="p-5 rounded-md bg-green-primary">
            <p className="mb-3 text-3xl">Mission</p>
            <p>
              “Hexatech solutions” is an IT company whose target is to provide
              complete IT solutions creatively and uniquely designed for our
              valuable customers within time punctuality. Empowering our
              clients, so they can boldly and effectively reach out to the world
              in this Digital Era.
            </p>
          </div>
        </div>
        <div className="container max-w-6xl px-3 py-10 mx-auto space-y-3 text-gray-100">
          <h5 className="tracking-widest text-green-primary">
            WHERE WE’RE GOING
          </h5>
          <h5 className="text-2xl font-bold tracking-widest text-blue-primary">
            We’re building the next generation of technologists.
          </h5>
          <p>
            Our Director, Mr. Irfanul Haque (Director Fatullah fabrics) is an
            Ideal perfectionist who believes in the value of generating out of
            the box services. After graduating from Harvard University he came
            back to Bangladesh to complete his vision of promoting 1 st  world
            corporate standard and ethics in the Bangladeshi work culture.
          </p>
          <p>
            Our CEO, Mr. Tanzim Hossain earned a degree in “Information
            Technology- Business Analysis” from Canada. After his graduation he
            gained work experiences in multiple First World companies. Through
            his education and experience he planned to bring his expertise to
            establish Hexatech as a Pioneer in bringing the modern Digital
            exposure to the Market of Bangladesh and contribute to the Economic
            Development in the dawn of Digital Revolution of Bangladesh. He met
            other visionaries such as Mr. Irfanul Haque, who shared his ambition
            and brought their expertise from various sectors to provide the
            necessary services and execute the vision they shared.
          </p>
        </div>
      </div>
      <AboutBodyContainer>
        <Image
          className="z-10"
          width="300"
          height="300"
          src={HexaLogo.src}
          alt="logo"
        />
      </AboutBodyContainer>
    </div>
  );
};

export default About;
