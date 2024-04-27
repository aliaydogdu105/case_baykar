import React from "react";
import card1 from "../../../assets/products/card1.png";
import card2 from "../../../assets/products/card2.png";
import card3 from "../../../assets/products/card3.png";

const ProductCards = () => {
  return (
    <div className=" flex flex-col justify-center items-center sm:flex-row w-full h-[1528px] sm:h-[527px] sm:w-[1358px] bg-[url('/bgProductsMobile.png')] sm:bg-[url('/bgProducts.png')] bg-contain">
      {/* cards */}
      <div className="flex flex-col sm:flex-row w-[361px] sm:w-[1280px] sm:h-[472px] gap-12">
        <div
          className="flex flex-col items-center justify-center rounded-[10px] border border-[#0F172A] sm:w-[394.67px] bg-[#0F172A]"
          style={{
            "box-shadow": "0px 25px 50px -12px #FFFFFF40",
          }}
        >
          <img className="w-full rounded" src={card1} alt="card-image" />
          <div className=" flex flex-col w-[361px] h-[132px] gap-4 px-8 pt-8">
            <div className=" w-[297px] h-[26px] text-2xl leading-[26.4px] font-bold">
              Title
            </div>
            <p className="w-[297px] h-[58px] text-lg leading-[28.8px]">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>
          <div className="flex justify-center items-center p-8 w-[361px] h-[120px]">
            <button className="border-2 border-white w-[297px] h-14 rounded-lg p-4 mx-[calc(50%-148.5px)] sm:mx-0 hover:bg-white hover:text-[#0F172A] duration-100">
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-[10px] border border-[#0F172A] sm:w-[394.67px] bg-[#0F172A]"
          style={{
            "box-shadow": "0px 25px 50px -12px #FFFFFF40",
          }}
        >
          <img className="w-full rounded" src={card2} alt="card-image" />
          <div className=" flex flex-col w-[361px] h-[132px] gap-4 px-8 pt-8">
            <div className=" w-[297px] h-[26px] text-2xl leading-[26.4px] font-bold">
              Title
            </div>
            <p className="w-[297px] h-[58px] text-lg leading-[28.8px]">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>
          <div className="flex justify-center items-center p-8 w-[361px] h-[120px]">
            <button className="border-2 border-white w-[297px] h-14 rounded-lg p-4 mx-[calc(50%-148.5px)] sm:mx-0 hover:bg-white hover:text-[#0F172A] duration-100">
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-[10px] border border-[#0F172A] sm:w-[394.67px] bg-[#0F172A]"
          style={{
            "box-shadow": "0px 25px 50px -12px #FFFFFF40",
          }}
        >
          <img className="w-full rounded" src={card3} alt="card-image" />
          <div className=" flex flex-col w-[361px] h-[132px] gap-4 px-8 pt-8">
            <div className=" w-[297px] h-[26px] text-2xl leading-[26.4px] font-bold">
              Title
            </div>
            <p className="w-[297px] h-[58px] text-lg leading-[28.8px]">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>
          <div className="flex justify-center items-center p-8 w-[361px] h-[120px]">
            <button className="border-2 border-white w-[297px] h-14 rounded-lg p-4 mx-[calc(50%-148.5px)] sm:mx-0 hover:bg-white hover:text-[#0F172A] duration-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
