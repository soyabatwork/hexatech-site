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
                  className="relative flex-grow-0 flex-shrink-0 mr-12 overflow-hidden border-8 shadow-2xl basis-4/5 md:basis-2/4 h-96 md:h-[600px] w-44 border-blue-primary rounded-2xl"
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
      <div></div>
    </div>
  );
};

export default PortfolioCarousel;
