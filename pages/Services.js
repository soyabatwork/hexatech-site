import Image from "next/image";
import React from "react";
import ServiceCover from "../public/assets/services-cover.jpg";
import ServiceIcon from "../public/assets/service-development.png";
import styled from "styled-components";
import { BsChevronDoubleRight } from "react-icons/bs";

const ServiceContent = [
  {
    title: "Web Development",
    subtitle: "Consistent Experience Across Platforms",
    content:
      "We build applications that work for your business and your users. Whether it’s a complex enterprise platform and backend database, a responsive web app, or a marketing site, our web solutions function smoothly and deliver a consistent experience to users across all platforms. Leveraging modern approaches to web development, we bring front-end, back-end, and architecture together to meet your business needs.",
    technology: [
      "Javascript",
      "React.js",
      "node.js",
      "MongoDB",
      "Next.js",
      "Express",
    ],
  },
  {
    title: "Quality Assurance",
    subtitle: "Ensure the Quality of Your Software",
    content:
      "Versed in comprehensive testing best practices, our quality assurance analysts work with your team to identify, fix, and prevent software quality issues. We use our own mix of manual testing, compatibility testing, performance testing, automation engineering, and continuous integration. Additionally, we offer standalone software quality assessment and a managed-service automation framework built to help our clients manage cost, reduce time-to-market, and increase test coverage.",
    technology: [
      "QA Evaluation",
      "QA Strategy",
      "QA Automation",
      "QA Execution",
      "Accessibility Testing",
      "Compatibility Testing",
      "Performance Testing",
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Connect With Your Users",
    content:
      "We built our first mobile app in 2001. Since then, we’ve helped thousands of companies connect with people wherever they are in the world. Our custom mobile and IoT solutions are used for everything from streamlining diabetes care to auto-steering tractors to tracking and sharing bike rides. We have experience integrating native and hybrid mobile apps with devices like smart sensors, medical equipment, thermal imaging cameras, building automation systems, tractors, and many others.",
    technology: ["Android", "IOS", "React native"],
  },
  {
    title: "Enterprise Architecture",
    subtitle: "Lay the Foundation for Your Software",
    content:
      "A robust software platform needs to be built on an equally powerful architecture in order to function properly and efficiently. Whether you have a complex idea that’s not quite fully baked or you’re embarking on a complete rebuild of your system, our systems architects are here to help. With expertise in cloud-native and on-premise architectures, we’ll grow your idea from a minimal viable product to delivery on a global scale.",
    technology: ["W/A Framework", "Single Page Application", "Serverless"],
  },
  {
    title: "Systems Integration",
    subtitle: "Create a Cohesive Software Ecosystem",
    content:
      "Software systems are complicated. With so many different tools making up the software ecosystem, ensuring that every component plays nice with everything else is even more complicated. It takes deep experience with API development, DevOps, and automation strategies. But that’s where we shine. We ensure that your software tools are all efficiently integrated with one another as a cohesive platform that drives your business forward.",
    technology: ["AWS Services", "Azure Services", "Stripe"],
  },
  {
    title: "BPO (Business Process Outsourcing)",
    content:
      "BPO is a business performance in which association contracts amid an exterior service source to execute a vital business task. Naturally, an organization initially identifies a procedure that is required for its actions yet is not part of its center value proposal in the market; this step needs a high-quality kind of development within the association and a well-built business procedure organization and this is where we come in. Our talented young generations of operators are highly efficient at helping you run your business as smooth as butter.",
  },
  {
    title: "Software Development",
    content:
      "We build up custom software constructions that put up with a bunch of information to generate, design, install and clinch software for the user’s favor. We build software’s such human resources system,accounting system, payroll system, ERP system, attendance system, and various other required systems which will be customized as per you need.",
  },
  {
    title: "App Development & Design",
    content:
      "Discovering the right app development collaborator is very critical forward in the process. Knowing the technology pile, development tests and other technological parts are very hard to comprehend. It can be disconcerting for industrialists lacking tech settings. So, discover an app development associate like Hexatech Solutions that develops and designs your project proficiently and effortlessly.  Our specialist team offers a full set of mobile app development services. That contains the design and development of your mobile application from scrape to initiate. We propose addition, organization services and increase on demand. We also provide further maintenance and make the operation feel trouble-free and smooth.",
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
      <div className="-mt-3 bg-primary-gradient text-white">
        <div className="container px-4 space-y-3 mx-auto py-10">
          <div className="-mt-20 h-20 w-20 relative">
            <Image layout="fill" src={ServiceIcon} />
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
        <div className="container mx-auto space-y-5 py-10 px-3 md:grid grid-cols-2 gap-5">
          {ServiceContent.map((content, i) => {
            return (
              <div
                key={i}
                className="p-6 bg-gray-50/90 rounded-tl-3xl rounded-br-3xl  text-gray-600"
              >
                <h3 className="gradient-text text-2xl">{content.title}</h3>
                <h6>{content.subtitle}</h6>
                <p className="text-lg my-3">{content.content}</p>
                <button className="btn bg-green-primary">
                  Learn more <BsChevronDoubleRight />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
