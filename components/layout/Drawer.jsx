import Link from "next/link";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import styled from "styled-components";

const MobileNav = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
`;

const navSections = ["Services", "Our works", "Contact us", "About"];

const Drawer = (props) => {
  const handleOpen = () => {
    console.log("clicked");
    props.onClick(!props.open);
  };

  return (
    <MobileNav
      className={`bg-gray-900 md:hidden ${props.open ? "" : "hidden"}`}
    >
      <RiMenu4Fill
        className="text-gray-50 text-3xl z-30 float-right mt-4 mr-9"
        onClick={handleOpen}
      />
      <div className="space-y-8 mt-36 flex flex-col items-center text-gray-50">
        {navSections.map((item, i) => (
          <Link href={item} key={i}>
            <a onClick={handleOpen}>{item}</a>
          </Link>
        ))}
      </div>
    </MobileNav>
  );
};

export default Drawer;
