import React from "react";
0;

const navSections = ["Services", "Our works", "Contact us", "About"];
import Image from "next/image";
import HexaLogo from "../public/assets/svg/logo.svg";

import { BiPhone } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";

const Header = (props) => {
  console.log(props);

  const handleOpen = () => {
    console.log("clicked");
    props.onClick(!props.open);
  };

  return (
    <div className="pb-5 fixed top-0 z-10 w-full bg-gray-800/50 ">
      <div>
        <div className="h-6 pt-5 flex items-center justify-between px-9 pb-5 ">
          <div className="pt-5">
            <Link href="/" className="   z-20">
              <Image
                height="100"
                width="100"
                src={HexaLogo}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden gap-3 mt-3 md:flex z-20 text-gray-50">
            {navSections.map((item, i) => (
              <Link href={`/${item}`} key={i}>
                {item}
              </Link>
            ))}
          </div>
          <div className="md:flex items-center justify-center gap-1 p-1 border-2 border-green-primary rounded-2xl mt-3 text-gray-50 hidden z-20">
            <BiPhone />
            xxxxxxxxxx
          </div>
          <RiMenu4Fill
            className="text-gray-50 text-3xl z-50 md:hidden cursor-pointer mt-6"
            onClick={handleOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
