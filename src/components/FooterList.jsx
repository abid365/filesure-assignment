import React from "react";

const FooterList = ({ headList, list1, list2, list3, list4 }) => {
  return (
    <ul className="text-sm text-white font-sans">
      <li className="font-extrabold text-md py-2">{headList}</li>
      <li className="hover:text-slate-300 py-2 w-fit">{list1}</li>
      <li className="hover:text-slate-300 py-2 w-fit">{list2}</li>
      <li className="hover:text-slate-300 py-2 w-fit">{list3}</li>
      <li className="hover:text-slate-300 py-2 w-fit">{list4}</li>
    </ul>
  );
};

export default FooterList;
