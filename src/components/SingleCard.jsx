import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  const { intro, about, deliveryTime, price, id, _id } = data;
  const arrPrefix = ["", "st", "nd", "rd", "th", "th", "th"];

  return (
    <Link className="hover:cursor-pointer" to={`/ca/${_id}`}>
      <div className="border border-[#e2e2e2] bg-white rounded-lg shadow-md px-6 py-8 w-72 relative">
        <div>
          <h1 className="text-center text-sm font-bold py-1">{intro}</h1>
          <p className="text-xs text-center">{about.description}</p>
        </div>
        <div className="bg-[#F4F4F4] px-3 py-5 mt-3 rounded-lg flex justify-between">
          <div>
            <h1 className="text-[14px] font-bold text-[#0076CE]">Due Date</h1>
            <p className="text-black text-xs w-2/3">{deliveryTime}</p>
          </div>
          <div>
            <h1 className="text-[14px] font-bold text-[#FF6666]">
              Penalty Fees
            </h1>
            <p className="text-black text-xs">
              <span className="font-bold">{price}</span> per month.
            </p>
          </div>
        </div>

        {/* rank */}
        <div className="rounded-lg bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-white font-bold absolute -top-3 -left-3 px-5 py-2">
          <div className="relative">
            <small>
              {id}{" "}
              <span className="absolute -top-0 -right-3 text-xs">
                {arrPrefix[id]}
              </span>
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
