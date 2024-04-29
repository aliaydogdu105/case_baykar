import React from "react";
import Cards from "./components/Cards";

const TheyLoveUsPage = () => {
  return (
    <div className=" flex w-full justify-center items-center h-[459px] sm:h-[732px] sm:p-20 py-12 bg-[#fffdf5] overflow-hidden">
      <div className=" flex flex-col items-center w-full h-[363px] sm:h-[572px] bg-slate-400">
        <div className="flex justify-center sm:justify-between w-[361px] sm:w-[1280px] bg-blue-500">
          <header className=" sm:text-left text-center sm:w-[1112px] text-[32px] leading-[35.2px] font-bold sm:font-extrabold sm:text-[56px] sm:leading-[31.6px] text-[#0F172A] bg-green-400 ">
            Because they love us
          </header>
          {/* arrows */}
          <div className="hidden sm:flex justify-between sm:w-[120px] text-[#78350F] bg-black ">
            <button
              className=" w-12 h-12 rounded-full border-2 border-[#78350F] rotate-180"
              style={{
                "box-shadow": "0px 1px 3px 0px #0000001A;",
              }}
            >
              <span>&#10132;</span>
            </button>
            <button
              className=" w-12 h-12 rounded-full border-2 border-[#78350F]"
              style={{
                "box-shadow": "0px 1px 3px 0px #0000001A;",
              }}
            >
              <span>&#10132;</span>
            </button>
          </div>
        </div>
        <div className="???">
          <div className=" relative w-full flex justify-center sm:h-[470px] h-[312px] sm:w-[1360px] overflow-visible">
            <div className=" absolute top-0 w-full h-[277px] sm:h-[421px] sm:w-[1360px] bg-[#FDE68A] "></div>
            <div className=" absolute bottom-0 w-[361px] h-[296px] sm:w-[1280px] sm:h-[430px] flex justify-center items-center gap-4 sm:gap-5 bg-red-200 ">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheyLoveUsPage;
