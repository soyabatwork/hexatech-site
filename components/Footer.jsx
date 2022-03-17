import Image from "next/image";
import Link from "next/link";
import React from "react";
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
          <div className="text-center md:text-left pt-5">
            <h6 className="font-extrabold mt-5 md:mt-0">Contact</h6>
            <p>
              Address: House- 616, Road- 08, Avenue- 06, Mirpur DOHS, Dhaka-
              1216
            </p>
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
      </div>
      <div className="text-center bg-blue-primary text-gray-50 py-3">
        &copy; 2022 Hexatech solutions
      </div>
    </div>
  );
};

export default Footer;
