import React from "react";
import Header from "../blocks/Header";
import { Outlet } from "react-router-dom";
import Footer from "../blocks/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="pb-60 lg:pb-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
