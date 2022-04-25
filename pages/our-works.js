import Image from "next/image";
import React from "react";
import { portfolios } from "../lib/portfolioImports";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PortfolioCarousel from "../components/PortfolioCarousel";
import portfoliobg from "../public/assets/portfoliobg.jpg";

const OurWorks = () => {
  const [display, setDisplay] = React.useState("all");
  const [filtered, setFiltered] = React.useState(portfolios);

  React.useEffect(() => {
    if (display === "all") {
      setFiltered(portfolios);
    } else {
      setFiltered(portfolios.filter((p) => p.cat === display));
    }
  }, [display]);

  console.log(portfolios.filter((p) => p.cat === display));
  return (
    <div>
      <div className="relative px-4 pt-40 pb-24 mx-auto bg-blue-primary">
        <div className="container relative z-10 max-w-md px-4 mx-auto ">
          <h2 className="text-3xl font-light text-neutral-50">
            You can see a list of the artifacts that we have identified as our
            best work and its our reflections.
          </h2>
        </div>
        <Image
          src={portfoliobg}
          layout="fill"
          alt="portfolio"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-400/70 backdrop-blur-sm" />
      </div>
      <div>
        <div className="flex justify-center gap-4 py-8 ">
          <button
            className="px-4 py-2 text-xl font-light border rounded-lg border-neutral-900"
            onClick={() => setDisplay("all")}
          >
            All
          </button>
          <button
            className="px-4 py-2 text-xl font-light border rounded-lg border-neutral-900"
            onClick={() => setDisplay("web")}
          >
            Web Design
          </button>
          <button
            className="px-4 py-2 text-xl font-light border rounded-lg border-neutral-900"
            onClick={() => setDisplay("mobile")}
          >
            Mobile app
          </button>
        </div>
      </div>
      <div className="my-8">
        {filtered?.map((p, i) => (
          <PortfolioCarousel key={i} portfolio={p} />
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
