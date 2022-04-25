import Image from "next/image";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import logo from "../public/assets/svg/logo.svg";
const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");

  return (
    <div>
      <div className="container max-w-5xl px-4 mx-auto mt-32">
        <div className="space-y-4">
          <p className="font-light tracking-wide">Contact</p>
          <p className="text-5xl">We are here to help you level up</p>
          <p className="text-xl font-light">
            We&apos;re just one click away to help you take your brand or
            product from great to incredible. Fill in the form to share more
            details about your project. Or your favorite gum flavor. Either way,
            we&apos;d love to talk.
          </p>
        </div>
        <form className="flex flex-col gap-4 p-4 my-8 text-neutral-50 bg-blue-primary">
          <label className="text-lg font-light" htmlFor="name">
            Whats your name?
          </label>
          <input
            type="text"
            className="p-2 border-b-2 rounded-lg text-neutral-900 hover:bg-neutral-400 border-neutral-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-lg font-light" htmlFor="email">
            Your email
          </label>
          <input
            type="text"
            className="p-2 border-b-2 rounded-lg text-neutral-900 hover:bg-neutral-400 border-neutral-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-lg font-light" htmlFor="name">
            What can I help you with?
          </label>
          <textarea
            placeholder="  What can I help you with?"
            htmlFor="name"
            className="p-2 border-b-2 rounded-lg text-neutral-900 hover:bg-neutral-400 border-neutral-800"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="inline-block px-6 py-3 font-normal tracking-wider transition-all bg-neutral-900 max-w-min rounded-2xl text-neutral-50 hover:shadow-xl">
            Send
          </button>
        </form>

        {/* contact form ends */}

        <div className="p-4 space-y-8 md:flex bg-neutral-900 text-neutral-50">
          <div className="relative flex-1 max-w-xs mx-auto">
            <Image src={logo} alt="logo" layout="responsive" />
          </div>
          <div className="flex-1 max-w-md pb-16 mx-auto my-auto space-y-8 md:p-8">
            <p className="text-2xl">
              Hexatech can&apos;t wait to hear your ideas
            </p>
            <p>
              &apos;If there&apos;s on thing I love it&apos;s convey your
              thoughts to our diversely skilled team for the best results&apos;
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 transition-all border-2 border-neutral-50 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900">
                <BiMailSend /> Contact directly
              </button>
              <button className="flex items-center gap-2 px-4 py-2 transition-all border-2 border-neutral-50 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900">
                <FaFilePdf /> Download company PDF
              </button>
            </div>
          </div>
        </div>
        <div className="my-8 space-y-4">
          <p className="text-5xl">Our office is located in Dhaka</p>
          <p className="text-xl font-light">
            We like our home like we like our designs; clean and minimal.
            We&apos;re based in the heart of beautiful Dhaka. We have an open
            door policy, so come visit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
