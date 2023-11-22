import React from "react";
import Header from "../blocks/Header";
import { Outlet } from "react-router-dom";
import Footer from "../blocks/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
