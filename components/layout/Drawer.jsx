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

const navSections = ["Services", "Our works", "Contact us", "Our company"];

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
        className="text-gray-50 text-3xl z-30 float-right mr-3 mt-3"
        onClick={handleOpen}
      />
      <div className="text-center space-y-8 mt-20">
        {navSections.map((item, i) => (
          <a key={i} className="text-gray-50 block">
            {item}
          </a>
        ))}
      </div>
    </MobileNav>
  );
};

export default Drawer;
