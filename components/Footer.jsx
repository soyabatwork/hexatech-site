import React from "react";
import HexaLogo from "../public/assets/svg/logo.svg";

const Footer = () => {
  return (
    <div>
      {/* logo */}
      <div
        className="h-12 -mt-5 -translate-y-1/4 scale-125
      mb-3"
      >
        <Image height="100" width="100" src={HexaLogo} />
      </div>
      <div>
        {/* contact */}
        <div>
          <h6>Contact</h6>
          <p>
            Address: House- 616, Road- 08, Avenue- 06, Mirpur DOHS, Dhaka- 1216
          </p>
        </div>
        {/* sitemap */}
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Portfolio</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
        {/* links */}
        <div>
          <a href="/">Privacy Policy</a>
          <a href="/">Services Overview</a>
          <a href="/">Graphic Design/Branding</a>
          <a href="/">Website Design</a>
          <a href="/">Website Development</a>
          <a href="/">Search Engine Optimization(SEO)</a>
          <a href="/">Maintanence &amp; Support</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
