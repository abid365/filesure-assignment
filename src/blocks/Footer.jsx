import React from "react";
import FooterList from "../components/FooterList";

const Footer = () => {
  return (
    <div>
      <div className="lg:h-[341px] bg-gradient-to-r from-[#0076CE] to-[#9400D3] mt-[132px] px-20 pt-10">
        <div className="lg:flex lg:flex-row lg:justify-between flex-col border-b-2 border-white pb-16">
          {/* footer brand */}
          <div className="w-fit">
            <img src="/logoWhite.png" alt="logo ipsum" />
            <p className="font-semibold text-sm text-white font-sans pt-4">
              India's first platform dedicated to <br /> simplifying partner
              search
            </p>
          </div>
          {/* footer list */}
          <div className="lg:flex lg:flex-row flex-wrap gap-16">
            <FooterList
              headList={"COMPANY"}
              list1={"About"}
              list2={"Pricing"}
              list3={"Careers"}
            />
            {/* 2 */}
            <FooterList
              headList={"SOLUTIONS"}
              list1={"Search"}
              list2={"Connect"}
              list3={"Research"}
              list4={"Academy"}
            />
            {/* 3 */}
            <FooterList
              headList={"RESOURCES"}
              list1={"Blogs"}
              list2={"Forms"}
            />
            {/* 4 */}
            <FooterList
              headList={"SUPPORT"}
              list1={"Help"}
              list2={"Contact Us"}
            />
            {/* 5 */}
            <FooterList
              headList={"LEGAL"}
              list1={"Privacy"}
              list2={"Terms"}
              list3={"Accessibility"}
            />
          </div>
        </div>
        {/* under border text */}
        <div>
          <p className="text-xs text-whte font-bold py-6 text-white">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
        </div>
      </div>
      <div className="bg-black bottom-0 w-full">
        <h1 className="text-center text-white pt-4 text-sm">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
