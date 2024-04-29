import React from "react";
import growBg from "../../assets/growYourCollection/growBg.png";
import GrowHeader from "./components/GrowHeader";
import GrowImage from "./components/GrowImage";

const GrowYourCollectionPage = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center w-full h-[772px] sm:h-[996px] gap-8 pt-12 px-4 pb-24 sm:pt-20 sm:pb-32 sm:px-20 sm:gap-20 bg-[#fffdf5] bg-cover"
      style={{ backgroundImage: `url(${growBg})` }}
    >
      <GrowHeader />
      <GrowImage />
    </div>
  );
};

export default GrowYourCollectionPage;
