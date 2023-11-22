import React from "react";
import { FaStar, FaRegCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CaDetails = () => {
  const caDetails = useLoaderData();
  const {
    name,
    image,
    intro,
    rating,
    reviewCount,
    taskComplexity,
    price,
    deliveryTime,
    testimonial,
    about,
  } = caDetails;
  return (
    <div className="px-20 pt-20 pb-10">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* left sub-parent div */}
        <div>
          <div>
            {/* profile data */}
            <div>
              <h1 className="font-poppins text-2xl font-bold">{name}</h1>
              <p className="text-md justify-start py-3">{about.description}</p>
              <p className="text-black">
                <FaStar className="text-[#0076CE] text-md inline-block" />
                <span className="text-xs font-bold text-[#0076CE] px-1">
                  {rating}
                </span>
                <span className="text-sm">({reviewCount})</span>
              </p>
            </div>
            {/* service data */}
            <div className="bg-white shadow-lg border border-[#ebf6f7] px-7 py-7 rounded-lg mt-8">
              <div className="flex justify-between">
                <p>{taskComplexity}</p>
                <p className="font-bold">{price}</p>
              </div>
              <p className="pt-8">
                <FaRegCalendarAlt className="font-bold inline-block mr-1" />
                <span className="text-sm">{deliveryTime}</span>
              </p>
              <div className="pt-5 flex justify-between">
                <button className="text-xs font-bold px-4 py-2 rounded-lg bg-[#0076CE] text-white">
                  Request Proposal
                </button>
                <button className="text-xs font-bold px-4 py-2 rounded-lg border border-slate-600">
                  Chat with me
                </button>
              </div>
            </div>
            {/* rating and reviews */}
            <div className="bg-white shadow-lg border border-[#ebf6f7] px-7 py-7 rounded-lg mt-8">
              <h1 className="text-2xl font-bold font-poppins">
                What People Say
              </h1>
              <p className="pt-4 text-sm">{testimonial.text}</p>
            </div>
          </div>
        </div>

        {/* right sub parent div */}
        <div className="lg:col-span-2">
          {/* image */}
          <div className="flex justify-end">
            <div>
              <img
                className="h-[412px] rounded-xl"
                src={image}
                alt={`Image of ${name}`}
              />
              {/* about username */}
              <div className="pt-6">
                <h1 className="text-xl font-bold">About {name}</h1>
                <div>
                  <div className="grid grid-cols-3">
                    <div>
                      <p className="text-[12px] font-bold py-2 text-[#999999] capitalize">
                        From
                      </p>
                      <p className="font-bold text-[14px]">{about.from}</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold py-2 text-[#999999] capitalize">
                        Partner Since
                      </p>
                      <p className="font-bold text-[14px]">
                        {about.partnerSince}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold py-2 text-[#999999] capitalize">
                        average response time
                      </p>
                      <p className="font-bold text-[14px]">
                        {about.averageResponseTime}
                      </p>
                    </div>
                  </div>

                  {/* about */}
                  <div className="py-10">
                    <p className="text-[12px] font-bold py-2 text-[#999999] capitalize">
                      About
                    </p>
                    <p className="text-[14px]">{about.description}</p>
                  </div>
                </div>

                {/* services offer and why me sectoion */}
                <div className="grid grid-cols-2 gap-10 pt-6">
                  {/* services offer */}
                  <div>
                    <p className="text-[12px] font-bold py-2 text-[#999999] capitalize">
                      Services I offer
                    </p>
                    <ul className="ml-8">
                      {about.services.map((service, i) => {
                        return (
                          <li className="list-disc text-[14px] py-1" key={i}>
                            {service}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* why me */}
                  <div>
                    <p className="text-[12px] font-bold pt-[2px] text-[#999999] capitalize">
                      Why me?
                    </p>
                    <ul className="ml-8">
                      {about.benefits.map((benefit, i) => {
                        return (
                          <li
                            className="list-disc text-[14px] pt-[2px]"
                            key={i}
                          >
                            {benefit}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaDetails;
