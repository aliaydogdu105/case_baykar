import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col justify-between sm:flex-row w-[361px] h-[131px] sm:w-[1280px] sm:h-16 gap-8 sm:gap-20 ">
      <h3 className=" w-[361px] h-[35px] sm:w-[967px] sm:h-[62px] text-[32px] sm:text-[56px] sm:leading-[61.6px] font-bold sm:font-extrabold leading-[35.2px] text-center sm:text-left ">
        The best of the best
      </h3>
      <button className=" border-2 border-white w-[233px] h-16 rounded-lg p-3 mx-[calc(50%-116.5px)] sm:mx-0 hover:bg-white hover:text-[#0F172A] duration-100">
        Sign up now
      </button>
    </div>
  );
};

export default Header;
