import React from "react";

const SingleCard = () => {
  return (
    <div className="border border-[#e2e2e2] bg-white rounded-lg shadow-md px-6 py-8 w-72 relative">
      <div>
        <h1 className="text-center text-sm font-bold py-1">
          Commencement of business{" "}
        </h1>
        <p className="text-xs text-center">
          Invested shareholders must confirm payment and office address{" "}
        </p>
      </div>
      <div className="bg-[#F4F4F4] px-3 py-5 mt-3 rounded-lg flex justify-between">
        <div>
          <h1 className="text-[14px] font-bold text-[#0076CE]">Due Date</h1>
          <p className="text-black text-xs">With in 100 days</p>
        </div>
        <div>
          <h1 className="text-[14px] font-bold text-[#FF6666]">Penalty Fees</h1>
          <p className="text-black text-xs">₹300 per month.</p>
        </div>
      </div>

      {/* rank */}
      <div className="rounded-lg bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-white font-bold absolute -top-3 -left-3 p-2">
        <small>1st</small>
      </div>
    </div>
  );
};

export default SingleCard;
