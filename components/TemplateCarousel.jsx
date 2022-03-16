import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

//   <div className="relative h-full w-full">
//     <Image layout="fill" src={website1} objectFit="cover" />
//   </div>
import website1 from "../public/assets/website1.png";
import website2 from "../public/assets/website2.png";
import website3 from "../public/assets/website3.png";

const TemplateCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container h-96 flex ">
        <div className="embla__slide relative h-full w-full">
          <Image layout="fill" src={website1} objectFit="cover" />
        </div>
        <div className="embla__slide relative h-full w-full">
          <Image layout="fill" src={website2} objectFit="cover" />
        </div>
        <div className="embla__slide relative h-full w-full">
          <Image layout="fill" src={website3} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default TemplateCarousel;
