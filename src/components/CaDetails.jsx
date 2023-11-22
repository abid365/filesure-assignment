import React from "react";
import { useLoaderData } from "react-router-dom";

const CaDetails = () => {
  const caDetails = useLoaderData();
  console.log(caDetails);
  return <div></div>;
};

export default CaDetails;
