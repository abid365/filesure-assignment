import React, { useEffect, useState } from "react";
import { fetures } from "../constants/feature";
import { caUrl } from "../api/caApi";
import SingleCard from "../components/SingleCard";

const WantToJoinUs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(caUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
          {data.map((data, i) => {
            return <h1 key={i}>{data.name}</h1>;
          })}
          <SingleCard />
        </div>
      </div>
    </section>
  );
};

export default WantToJoinUs;
