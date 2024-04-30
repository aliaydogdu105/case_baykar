import React from "react";
import map from "../../assets/shoesCollected/map.png";
import twoShoes from "../../assets/shoesCollected/twoShoes.jpg";

const ShoesCollectedPage = () => {
  return (
    <div
      className=" flex flex-col items-center h-[717px] w-full bg-[#78350F] bg-cover sm:bg-no-repeat sm:bg-contain sm:bg-center "
      style={{
        backgroundImage: `url(${map})`,
      }}
    >
      <div className=" flex flex-col sm:mr-[50%] justify-center items-center ">
        <div
          className="   w-64 bg-center sm:w-64 sm:h-[288px] h-[200px] rounded-[10px] border-[5px] border-white bg-green-500 bg-cover "
          style={{
            "box-shadow": "0px 25px 50px -12px #00000040;",
            backgroundImage: `url(${twoShoes})`,
          }}
        ></div>
        <p
          className=" grid place-content-center rounded-[5px] p-2 w-[250px] h-16 bg-[#E2E8F0] text-[14px] leading-[19.6px] text-[#0F172A] "
          style={{
            "box-shadow": "0px 25px 50px -12px #00000040;",
          }}
        >
          Emma Simpson collected one pair of Cool Shoes.
        </p>
      </div>
      <div className="flex flex-col w-[361px] sm:w-[1280px] mt-14 sm:mt-0 h-24 sm:gap-8 gap-2 text-[#FFFBEB] text-center">
        <div className=" text-5xl sm:text-8xl h-[53px] sm:h-[106px] font-extrabold leading-[52.8px] ">
          11,658,467
        </div>
        <div className=" text-[32px] h-[35px] leading-[35.2px] font-bold  ">
          Shoes Collected
        </div>
      </div>
    </div>
  );
};

export default ShoesCollectedPage;
