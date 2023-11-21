import React from "react";
import { fetures } from "../constants/feature";

const WantToJoinUs = () => {
  return (
    <section className="pb-10 pt-32">
      <div className="px-20">
        <h1 className="font-poppins lg:text-[55px] text-center">
          Want to{" "}
          <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
            Join
          </span>{" "}
          Us?
        </h1>
        <p className="text-center pt-4">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>
      {/* cards bg */}
      <div className="bg-section-wave bg-cover bg-center h-[757px]">
        {/* json data goes here */}
        <div className="px-20 py-20">
          <h1 className="text-center">Show CA Cards</h1>
        </div>
      </div>
    </section>
  );
};

export default WantToJoinUs;
