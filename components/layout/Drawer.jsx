import Link from "next/link";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -1000 },
  exit: { opacity: 0, y: -1000 },
  transition: { type: "tween", duration: 3 },
};

const MobileNav = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
`;

const navSections = [
  "Services",
  "Our works",
  "Contact us",
  "About",
  "Updates",
  "Login",
];

const Drawer = (props) => {
  const handleOpen = () => {
    props.onClick(!props.open);
  };

  return (
    <MobileNav
      variants={variants}
      initial={false}
      exit="exit"
      animate={props.open ? "open" : "closed"}
      className={`bg-gray-900 md:hidden `}
    >
      <RiMenu4Fill
        className="z-30 float-right mt-4 text-3xl text-gray-50 mr-9"
        onClick={handleOpen}
      />
      <div className="flex flex-col items-center space-y-8 mt-36 text-gray-50">
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
