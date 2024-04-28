import React from "react";
import playIcon from "../../../assets/home/mainPart/play-circle.svg";
import shoe from "../../../assets/home/mainPart/shoe.png";

const MainPart = () => {
  return (
    <div className=" flex flex-col justify-center items-center sm:flex-row w-full sm:max-w-[1440px] sm:h-[583px] h-[802.2px] px-4 py-12 sm:p-20 gap-8 sm:gap-20">
      <div className=" flex flex-col justify-center sm:w-[714px] w-full sm:gap-12 gap-8">
        <h1 className=" h-[124px] sm:h-[79px] text-[56px] leading-[61.6px] sm:text-7xl font-extrabold text-[#0F172A] text-center">
          Collectible Sneakers
        </h1>
        <p className=" h-[116px] sm:h-[58px] text-center sm:text-left text-[18px] font-normal leading-[28.8px]">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className=" flex justify-center sm:justify-start gap-4">
          <button className=" border-2 border-[#78350F] hover:bg-[#78350F] hover:text-[#FEF3C7] duration-100 w-[149px] h-12 rounded-lg p-3">
            Sign up now
          </button>
          <button className=" flex border border-transparent hover:border-[#78350F] duration-100 w-[152px] h-12 rounded-lg px-2 py-3">
            <img src={playIcon} alt="play-icon" />
            <div className=" flex items-center text-[16px] text-[#78350F] leading-4 font-medium p-2 w-28 h-6">
              Watch Demo
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-[361px] h-[314.2px] sm:w-[486px] sm:h-[423px]">
        <img src={shoe} alt="shoe" />
      </div>
    </div>
  );
};

export default MainPart;
