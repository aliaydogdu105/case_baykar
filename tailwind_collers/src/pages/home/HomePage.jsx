import React from "react";
import Navbar from "./components/Navbar";
import MainPart from "./components/MainPart";
import MainBottom from "./components/MainBottom";
import homebg from "../../assets/home/homebg.png";

const HomePage = () => {
  return (
    <div
      className=" flex justify-center items-center flex-col bg-[#FEFBEB] bg-cover bg-center sm:bg-left-bottom "
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      <Navbar />
      <MainPart />
      <MainBottom />
    </div>
  );
};

export default HomePage;
