import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const PortfolioCarousel = ({ portfolio }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div>
      <p className="mx-4 text-xl font-light tracking-wider text-center capitalize md:text-left">
        {portfolio.name}
      </p>
      <div>
        <div ref={emblaRef} className="relative my-8 overflow-hidden">
          <div className="flex">
            {portfolio.images.map((image, i) => {
              return (
                <div
                  key={i}
                  className="relative flex-grow-0 flex-shrink-0 mr-12 basis-4/5 md:basis-2/4 h-72 md:h-[400px] w-44 border-8 border-blue-200 shadow-2xl overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={portfolio.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
