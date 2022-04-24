/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import website1 from "../public/assets/website1.jpg";
import website2 from "../public/assets/website2.png";
import website3 from "../public/assets/website3.png";

const TemplateCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex md:h-[700px] h-96">
        <div className="relative flex-grow-0 flex-shrink-0 mr-20 basis-4/6">
          <div className="relative w-full h-full">
            <Image layout="fill" src={website1} objectFit="cover" />
          </div>
        </div>
        <div className="relative flex-grow-0 flex-shrink-0 mr-20 basis-4/6">
          <div className="relative w-full h-full">
            <Image layout="fill" src={website2} objectFit="cover" />
          </div>
        </div>
        <div className="relative flex-grow-0 flex-shrink-0 mr-20 basis-4/6">
          <div className="relative w-full h-full">
            <Image layout="fill" src={website3} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCarousel;
