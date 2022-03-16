import Image from "next/image";
import React from "react";
import WebDesign from "../public/assets/svg/webdev.svg";
import AppDev from "../public/assets/svg/appdev.svg";
import DigitalMarketing from "../public/assets/svg/digitalmarketing.svg";
import DataEntry from "../public/assets/svg/dataentry.svg";
import WebMaintanance from "../public/assets/svg/maintanence.svg";
import ErpSoltion from "../public/assets/svg/erpsolution.svg";

const HomeOfferings = () => {
  return (
    <div className="my-10 container mx-auto">
      <h2 className="text-center tracking-wider whitespace-nowrap font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary">
        Worldwide Services and Creative Enterprise
      </h2>
      <h1 className="text-center text-2xl text-blue-primary mb-5">
        We Offer Latest Software And Customized solutions To Our Customers!
      </h1>
      <div className="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2">
        <Image className="" height="100" width="100" src={WebDesign} />
        <Image className="" height="100" width="100" src={AppDev} />
        <Image className="" height="100" width="100" src={DigitalMarketing} />
        <Image className="" height="100" width="100" src={DataEntry} />
        <Image className="" height="100" width="100" src={WebMaintanance} />
        <Image className="" height="100" width="100" src={ErpSoltion} />
      </div>
    </div>
  );
};

export default HomeOfferings;
