/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import WebDesign from "../public/assets/svg/webdev.svg";
import AppDev from "../public/assets/svg/appdev.svg";
import DigitalMarketing from "../public/assets/svg/digitalmarketing.svg";
import DataEntry from "../public/assets/svg/dataentry.svg";
import WebMaintanance from "../public/assets/svg/maintanence.svg";
import ErpSoltion from "../public/assets/svg/erpsolution.svg";
import { Fade } from "react-reveal";

const HomeOfferings = () => {
  return (
    <div className="container mx-auto my-10">
      <Fade up>
        <h2 className="font-extrabold tracking-wider text-center text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
          Worldwide Services and Creative Enterprise
        </h2>
        <h1 className="mb-5 text-2xl text-center text-blue-primary">
          We Offer Latest Software And Customized solutions To Our Customers!
        </h1>
      </Fade>
      <Fade up>
        <div className="grid max-w-lg grid-cols-1 mx-auto md:grid-cols-2">
          <Image className="" height="100" width="100" src={WebDesign} />
          <Image className="" height="100" width="100" src={AppDev} />
          <Image className="" height="100" width="100" src={DigitalMarketing} />
          <Image className="" height="100" width="100" src={DataEntry} />
          <Image className="" height="100" width="100" src={WebMaintanance} />
          <Image className="" height="100" width="100" src={ErpSoltion} />
        </div>
      </Fade>
    </div>
  );
};

export default HomeOfferings;
