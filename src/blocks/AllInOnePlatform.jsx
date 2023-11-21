import React from "react";
import { fetures } from "../constants/feature";

const AllInOnePlatform = () => {
  return (
    <div className="px-20 py-36 grid lg:grid-cols-2">
      {/* left side text */}
      <div>
        <h1 className="font-poppins lg:text-[45px] leading-[60px]">
          <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
            All-in-One
          </span>{" "}
          platform that Makes Easier
        </h1>
        <p className="text-[18px] leading-7 pt-6">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        {/* icons */}
        <div className="grid grid-cols-2 gap-y-3 pt-8">
          {fetures.map((feture, i) => {
            return (
              <div className="flex items-start gap-1 w-44" key={i}>
                <img className="h-10" src={feture.image} alt="image" />
                <p className="py-2 text-xs font-bold pl-2">{feture.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side images */}
      <div className="flex flex-col">
        <div className="relative">
          {/* chat bubbles */}
          <div className="absolute flex flex-col items-end left-7">
            <p className="rounded-t-xl rounded-bl-xl bg-[#EFD9F9] px-4 py-2 text-xs mb-2 w-fit">
              Hey, check out loreumipsum services
            </p>
            <p className="rounded-t-xl rounded-bl-xl bg-[#EFD9F9] px-4 py-2 text-xs mb-2 w-fit">
              I learned from their videos, got my first job.
            </p>
            <p className="rounded-t-xl rounded-bl-xl bg-[#EFD9F9] px-4 py-2 text-xs w-fit">
              You won't be disappointed with their services.
            </p>
          </div>
          {/* image */}
          <img
            src="/public/Student.png"
            alt="student"
            className="absolute -top-12 -right-12 h-80"
          />
        </div>

        {/* teacher image and chat bubble */}
        <div className="relative">
          {/* chat bubbles */}
          <div className="absolute top-36 flex flex-col items-end w-fit">
            <p className="rounded-t-xl rounded-bl-xl bg-[#DDF3FF] px-4 py-2 text-xs mb-2 w-fit">
              I got a perfect analysis report from them too
            </p>
            <p className="rounded-t-xl rounded-bl-xl bg-[#DDF3FF] px-4 py-2 text-xs mb-2 w-fit">
              Oh, that's great.
            </p>
          </div>
          {/* techer image */}
          <img
            src="/public/Teacher.png"
            alt="teacher image"
            className="absolute h-80 top-56"
          />
        </div>
      </div>
    </div>
  );
};

export default AllInOnePlatform;
