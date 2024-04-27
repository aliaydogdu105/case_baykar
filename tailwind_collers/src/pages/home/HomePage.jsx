import React from "react";
import Navbar from "./components/Navbar";
import MainPart from "./components/MainPart";
import MainBottom from "./components/MainBottom";

const HomePage = () => {
  return (
    <div className=" flex justify-center items-center flex-col bg-[#FEF3C7]">
      <Navbar />
      <MainPart />
      <MainBottom />
    </div>
  );
};

export default HomePage;
