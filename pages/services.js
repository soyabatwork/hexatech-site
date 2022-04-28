import Image from "next/image";
import React from "react";
import ServiceCover from "../public/assets/services-cover.jpg";
import ServiceIcon from "../public/assets/service-development.png";
import styled from "styled-components";

const ServiceContent = [
  {
    title: "Web development & Design",
    subtitle: "Consistent Experience Across Platforms",
    content:
      "We have a dynamic team of inspired perfectionists, who will design the look &amp; feel of your brand communication and your customers' expedition in the digital space with unbeatable user experiences. In a progressively more competitive marketplace, making a very grand first impression is a must.",
  },
  {
    title: "Data Entry",
    content:
      "Data entry is a work done in administrative place usually held in business offices. They assist various departments in the company by imputing the inside personal customer and account information into data spreadsheets. Data entry positions need a character with exceptional typing skills and proficiency in organizational and database software. Data entry employees keep information exact and well-thought-out. In Hexatech Solutions we believe to facilitate companies by reducing their in house work load by getting the job done by our skilled Data entry professionals.",
  },
  {
    title: "BPO (Business Process Outsourcing)",
    content:
      "BPO is a business performance in which association contracts amid an exterior service source to execute a vital business task. Naturally, an organization initially identifies a procedure that is required for its actions yet is not part of its center value proposal in the market; this step needs a high-quality kind of development within the association and a well-built business procedure organization and this is where we come in. Our talented young generations of operators are highly efficient at helping you run your business as smooth as butter.",
  },
  {
    title: "Digital Marketing",
    content:
      "Existing in this excessive competitive market is achievable if you can work out and execute a marketing strategy that represents your exclusiveness and provides the clients a cause to choose you over competitors. Our specialists will build a strong stage for your business in Digital platforms so that you can achieve your highest success. In this Digital Era, no one can stay away from marketing their company at social sites and still promote and stock out their products. We tailor all your product needs and exposure to help you grow your business.",
  },
  {
    title: "App Development and Design",
    content:
      "Discovering the right app development collaborator is very critical forward in the process. Knowing the technology pile, development tests and other technological parts are very hard to comprehend. It can be disconcerting for industrialists lacking tech settings. So, discover an app development associate like Hexatech Solutions that develops and designs your project proficiently and effortlessly.  Our specialist team offers a full set of mobile app development services. That contains the design and development of your mobile application from scrape to initiate. We propose addition, organization services and increase on demand. We also provide further maintenance and make the operation feel trouble-free and smooth.",
  },
  {
    title: "Software Development",
    content:
      "We build up custom software constructions that put up with a bunch of information to generate, design, install and clinch software for the user’s favor. We build software such as human resources system, accounting system, payroll system, ERP system, attendance system, and various other required systems which will be customized as per you need. Our expert team gives custom software development services that equal your exact ambition. We make sure extremely modified software with rapidity and value that exacts your needs.",
  },
];

const ServiceImage = styled.div`
  background-image: url(${ServiceCover.src});
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-attachment: fixed;
`;
const Services = () => {
  return (
    <div>
      <div>
        <ServiceImage />
      </div>
      <div className="-mt-3 text-white bg-primary-gradient">
        <div className="container max-w-xl px-4 py-10 mx-auto space-y-3">
          <div className="relative w-20 h-20 -mt-20">
            <Image alt="services" layout="fill" src={ServiceIcon} />
          </div>
          <p className="tracking-widest">
            TRANSFORM YOUR BUSINESS THROUGH TECHNOLOGY
          </p>
          <h2 className="text-4xl gradient-text">Development</h2>
          <h4 className="text-xl gradient-text">
            With deep experience in web, mobile, and back-end platforms, our
            software solutions are scalable, flexible, and most importantly,
            secure.
          </h4>
          <p>
            While some software needs can be met with modified off-the-shelf
            products, others require a custom software solution built from the
            ground up. Regardless of which method works for your business, it
            needs to not only fit your needs but adapt to them as you grow.
          </p>
        </div>
      </div>
      <div className=" bg-primary-gradient">
        <div className="container max-w-6xl grid-cols-2 gap-5 px-8 py-10 mx-auto space-y-5 md:grid">
          {ServiceContent.map((content, i) => {
            return (
              <div
                key={i}
                className="p-6 text-gray-600 bg-gray-50/90 rounded-tl-3xl rounded-br-3xl"
              >
                <h3 className="text-2xl gradient-text">{content.title}</h3>
                <h6>{content.subtitle}</h6>
                <p className="my-3">{content.content}</p>

                {/* button grayed out due to no content */}

                {/* <button className="btn bg-green-primary">
                  Learn more <BsChevronDoubleRight />
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
