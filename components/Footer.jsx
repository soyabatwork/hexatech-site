import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import HexaLogo from "../public/assets/svg/logo-dark.svg";

const Footer = () => {
  return (
    <div className="mt-5 text-[#333]">
      <div className="container mx-auto flex flex-col ">
        {/* logo */}
        <div className="h-12 self-center md:self-start scale-125">
          <Image height="100" width="100" src={HexaLogo} />
        </div>
        <div className="space-y-5 p-3 md:flex justify-between flex-grow items-center">
          {/* contact */}
          <div className="text-center md:text-left pt-5 text-gray-900">
            <h6 className="font-extrabold mt-5 md:mt-0 tracking-wider">
              Contact
            </h6>
            <p>
              Address: House- 616, Road- 08, Avenue- 06, Mirpur DOHS, Dhaka-
              1216
            </p>
            <a href="tel:+8801748708868">tel: +8801748708868</a>
          </div>
          {/* sitemap */}
          <div className="flex flex-col items-center underline">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
          </div>
          {/* links */}
          <div className="flex flex-col items-center underline">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Services Overview</Link>
            <Link href="/">Graphic Design/Branding</Link>
            <Link href="/">Website Design</Link>
            <Link href="/">Website Development</Link>
            <Link href="/">Search Engine Optimization(SEO)</Link>
            <Link href="/">Maintanence &amp; Support</Link>
          </div>
        </div>
        {/* social media links */}
        <h3 className=" pl-3 text-center md:text-left">
          Follow us on social media
        </h3>
        <div className="flex space-x-2 pl-3 justify-center md:justify-start py-3 cursor-pointer text-3xl text-blue-primary ">
          <Link href="https://www.facebook.com/HexatecHsolutionsbd">
            <FaFacebook />
          </Link>
          <Link href="/">
            <AiFillTwitterCircle />
          </Link>
          <Link href="/">
            <TiSocialInstagramCircular />
          </Link>
          <Link href="/">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <div className="text-center bg-blue-primary text-gray-50 py-3">
        &copy; 2022 Hexatech solutions
      </div>
    </div>
  );
};

export default Footer;
