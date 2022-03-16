import React from "react";

const navSections = ["Services", "Our works", "Contact us", "Our company"];
import Image from "next/image";
import HexaLogo from "../public/assets/svg/logo.svg";

import { BiPhone } from "react-icons/bi";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="h-12 -mt-10">
          <Image className="" height="100" width="100" src={HexaLogo} />
        </div>
        <div className="flex gap-3 mt-3">
          {navSections.map((item, i) => (
            <a key={i} className="text-gray-50">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1 p-1 border-2 border-green-primary rounded-2xl mt-3 text-gray-50">
          <BiPhone />
          xxxxxxxxxx
        </div>
      </div>
    </div>
  );
};

export default Header;
