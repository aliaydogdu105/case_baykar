import React from "react";
import logo1 from "../../../assets/home/mainBottom/logo1.png";
import logo2 from "../../../assets/home/mainBottom/logo2.png";
import logo3 from "../../../assets/home/mainBottom/logo3.png";

const MainBottom = () => {
  return (
    <div className="flex justify-center items-center sm:flex-row w-full sm:max-w-[1440px] sm:h-[365px] h-[775px] px-4 py-12 sm:p-20">
      <div className=" flex flex-col sm:flex-row items-center sm:w-[1280px] sm:h-[205px] w-full h-full gap-8 sm:gap-20 px-12 py-4 sm:p-0 text-[#0F172A]">
        <div className="flex justify-between items-center sm:items-start flex-col w-[361px] h-[205px] sm:w-[373.33px] sm:h-[205px] gap-[10px] ">
          <img src={logo1} alt="logo" width={80} />
          <h3 className=" text-[20px] font-medium leading-[22px]">
            Nibh viverra
          </h3>
          <p className=" text-center sm:text-left text-lg">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex justify-between items-center sm:items-start flex-col w-[361px] h-[205px] sm:w-[373.33px] sm:h-[205px] gap-[10px] ">
          <img src={logo2} alt="logo" width={56} />
          <h3 className=" text-[20px] font-medium leading-[22px]">
            Cursus amet
          </h3>
          <p className=" text-center sm:text-left text-lg">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex justify-between items-center sm:items-start flex-col w-[361px] h-[205px] sm:w-[373.33px] sm:h-[205px] gap-[10px] ">
          <img src={logo3} alt="logo" width={80} />
          <h3 className=" text-[20px] font-medium leading-[22px]">
            Ipsum fermentum
          </h3>
          <p className=" text-center sm:text-left text-lg">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
