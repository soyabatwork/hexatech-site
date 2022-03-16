import React from "react";

import TemplateCarousel from "./TemplateCarousel";

const HomeTemplates = () => {
  return (
    <div className="container py-10 mx-auto">
      <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-green-primary mb-10 font-bold text-center">
        Our Design Templates
      </h2>
      <TemplateCarousel />
    </div>
  );
};

export default HomeTemplates;
