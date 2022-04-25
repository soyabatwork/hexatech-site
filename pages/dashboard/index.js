import React from "react";
import { BsFileEarmarkPlus } from "react-icons/bs";

const DashBoard = () => {
  return (
    <div className="container max-w-5xl px-10 mx-auto mt-20">
      <h2>Hello admin</h2>
      <div className="flex justify-end w-full">
        <button className="text-white shadow-none bg-blue-primary btn">
          Create <BsFileEarmarkPlus />
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
