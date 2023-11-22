import React, { useEffect, useState } from "react";
import { caUrl } from "../../public/api/caApi";
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
        <div className="px-20 pt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-4">
          {data.slice(0, 6).map((data, i) => {
            return <SingleCard data={data} key={i}></SingleCard>;
          })}
        </div>
        <p className="py-8 px-20 text-xs font-bold">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you don't file the form for a year, you will owe
          ₹73,000 per form
        </p>
      </div>
    </section>
  );
};

export default WantToJoinUs;
