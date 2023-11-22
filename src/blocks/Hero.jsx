import React from "react";

const Hero = () => {
  return (
    <div className="lg:h-[803px] lg:pl-20 lg:pr-10 px-10 bg-hero-gradient grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-start pt-[170px]">
      {/* left section */}
      <div>
        {/* hero text */}
        <div>
          <h1 className="lg:text-[55px] leading-[60px] font-poppins">
            Find
            <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
              Partners
            </span>
            (CAs) available online
          </h1>
          <p className="leading-[30px] text-[16px] font-sans font-semibold text-[#616161] py-4">
            CONNECT with us where your services are listed and visible to a
            myriad of businesses seeking CA’s for compliance support
          </p>
        </div>
        {/* hero search */}
        <div className="pt-5 relative">
          <input
            className="border border-[#BFBFBF] background-[#FFFFFF] px-7 py-2 rounded-md w-[70%]"
            type="text"
            placeholder="Search by name"
          />
          <button className="px-7 py-3 rounded-md text-white font-bold bg-[#0076CE] absolute left-[68%] bottom-[-2px]">
            Search
          </button>
        </div>
      </div>
      {/* Hero People */}
      <div className="lg:pl-10">
        <img src="/public/HeroPeople.png" alt="Students" />
      </div>
    </div>
  );
};

export default Hero;
