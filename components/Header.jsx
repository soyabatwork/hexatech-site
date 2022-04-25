import React from "react";
0;

const navSections = [
  { name: "Services", link: "services" },
  { name: "Our works", link: "our-works" },
  { name: "Contact us", link: "contact-us" },
  { name: "About", link: "about" },
];
import Image from "next/image";
import HexaLogo from "../public/assets/svg/logo.svg";

import { BiPhone } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";

const Header = (props) => {
  const handleOpen = () => {
    console.log("clicked");
    props.onClick(!props.open);
  };

  return (
    <div className="fixed top-0 z-10 w-full py-3 bg-gray-800/50 backdrop-blur-xl">
      <div>
        <div className="flex items-center justify-between h-12 px-9">
          <div className="pt-5">
            <Link href="/" className="z-20" passHref>
              <Image
                alt="hero-image"
                height="100"
                width="100"
                src={HexaLogo}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="z-20 hidden gap-3 mt-3 text-xl tracking-wide md:flex text-gray-50">
            {navSections.map((item, i) => (
              <Link href={`/${item.link}`} key={i}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="z-20 items-center justify-center hidden gap-1 p-1 tracking-wider border-2 md:flex border-green-primary rounded-2xl text-gray-50">
            <BiPhone />
            01748708868
          </div>
          <RiMenu4Fill
            className="z-50 mt-3 text-3xl cursor-pointer text-gray-50 md:hidden"
            onClick={handleOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
