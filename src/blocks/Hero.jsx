import React, { useEffect, useState } from "react";
import { caUrl } from "../../public/api/caApi";
import { Link } from "react-router-dom";

const Hero = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(caUrl)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);
  console.log(result);
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
        <div className="pt-5">
          <div className="relative">
            <input
              className="border border-[#BFBFBF] background-[#FFFFFF] px-7 py-2 rounded-md w-[70%]"
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search by name"
            />
            <button className="px-7 py-3 rounded-md text-white font-bold bg-[#0076CE] absolute left-[68%] bottom-[-2px]">
              Search
            </button>
          </div>
          {search !== "" && (
            <div className="px-5 py-2 w-[40%] bg-slate-200 border border-slate-100 rounded-lg">
              {result
                .filter((item) =>
                  search.toLowerCase() === ""
                    ? ""
                    : item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, i) => {
                  return (
                    <Link key={i} to={`/ca/${item._id}`}>
                      <h1 className="font-bold text-sm cursor-pointer">
                        {item.name}
                      </h1>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      {/* Hero People */}
      <div className="lg:pl-10">
        <img src="/HeroPeople.png" alt="Students" />
      </div>
    </div>
  );
};

export default Hero;
