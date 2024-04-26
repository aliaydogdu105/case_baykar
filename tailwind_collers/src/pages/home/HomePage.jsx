import React from "react";
import Navbar from "./components/Navbar";
import MainPart from "./components/MainPart";

const HomePage = () => {
  return (
    <div className=" flex justify-center items-center flex-col bg-[#FEF3C7]">
      <Navbar />
      <MainPart />
    </div>
  );
};

export default HomePage;
