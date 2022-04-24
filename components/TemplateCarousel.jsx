import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import website1 from "../public/assets/website1.png";
import website2 from "../public/assets/website2.png";
import website3 from "../public/assets/website3.png";

const TemplateCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla " ref={emblaRef}>
      <div className="flex embla__container h-96 ">
        <div className="relative w-full h-full embla__slide">
          <Image layout="fill" src={website1} objectFit="cover" />
        </div>
        <div className="relative w-full h-full embla__slide">
          <Image layout="fill" src={website2} objectFit="cover" />
        </div>
        <div className="relative w-full h-full embla__slide">
          <Image layout="fill" src={website3} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default TemplateCarousel;
