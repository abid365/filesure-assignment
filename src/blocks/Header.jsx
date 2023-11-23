import React, { useState } from "react";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* for desktop */}
      <div className="lg:px-20 py-5 lg:flex hidden justify-between">
        {/* nav links */}
        <div className="flex gap-10 items-center">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo ipsum" />
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
            About{" "}
            <MdKeyboardArrowDown className="inline-block text-[#0076CE]" />
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

      {/* for mobile */}
      <div>
        <div className="px-10 lg:hidden py-5 flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="logo ipsum" />
          </div>
          <div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <MdMenu className="text-xl" />
              ) : (
                <FaRegWindowClose className="text-xl" />
              )}
            </button>
          </div>
        </div>
        {!menuOpen && (
          <div className="flex flex-col justify-between items-start px-10 py-4 transition delay-75 ease-out lg:hidden">
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
              About{" "}
              <MdKeyboardArrowDown className="inline-block text-[#0076CE]" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
