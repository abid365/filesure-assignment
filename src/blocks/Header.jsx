import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:px-20 py-5 lg:flex hidden justify-between">
      {/* nav links */}
      <div className="flex gap-10 items-center">
        <Link to={"/"}>
          <img src="/public/logo.png" alt="logo ipsum" />
        </Link>
        <a className="pt-1 font-bold text-sm" href="#">
          Solutions{" "}
          <MdKeyboardArrowDown className="inline-block text-[#0076CE]" />
        </a>
        <a className="pt-1 font-bold text-sm" href="#">
          Fetures{" "}
          <MdKeyboardArrowDown className="inline-block text-[#0076CE]" />
        </a>
        <a className="pt-1 font-bold text-sm" href="#">
          Blog
        </a>
        <a className="pt-1 font-bold text-sm" href="#">
          About <MdKeyboardArrowDown className="inline-block text-[#0076CE]" />
        </a>
      </div>

      {/* logins */}
      <div className="flex gap-5">
        <button className="border border-[#0076CE] text-[#0076CE] px-7 py-1 rounded-md text-[14px] font-bold hover:bg-[#0076CE] hover:text-white">
          Log in
        </button>
        <button className="border border-[#0076CE] text-white bg-[#0076CE] px-7 py-1 rounded-md text-[14px] font-bold hover:text-[#0076CE] hover:bg-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
