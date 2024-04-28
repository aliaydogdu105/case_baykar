import React from "react";
import SignUpNowBtn from "../../../components/SignUpNowBtn";
import running from "../../../assets/whyJoinUs/running.png";
import bgJoin from "../../../assets/whyJoinUs/bg-join.png";

const JoinMainPart = () => {
  return (
    <div
      className=" flex flex-col justify-between items-center sm:flex-row w-[361px] sm:w-[1280px] h-[617px] sm:h-[496px] sm:p-20 rounded-[30px] py-8 px-4 bg-white "
      style={{
        "box-shadow": "0px 20px 25px -5px #0000001A;",
      }}
    >
      <div className=" flex flex-col justify-between items-center sm:items-start gap-6 sm:text-left">
        <h2 className=" text-[32px] leading-[35.2px] sm:text-[56px] sm:leading-[61.6px] font-bold">
          Why join us
        </h2>
        <ul className=" flex flex-col justify-between gap-2 h-[148px] sm:h-[108px] text-left px-2 ">
          <li>
            <span>&#10003;</span> Est et in pharetra magna adipiscing ornare
            aliquam.
          </li>
          <li>
            <span>&#10003;</span> Tellus arcu sed consequat ac velit ut eu
            blandit.
          </li>
          <li>
            <span>&#10003;</span> Ullamcorper ornare in et egestas dolor orci.
          </li>
        </ul>
        <SignUpNowBtn />
      </div>
      {/* video part */}
      <div
        className=" flex justify-center items-center w-[430px] sm:w-[713px] sm:-mr-36 sm:h-[625.24px] h-[386px] bg-cover bg-center -m-12 "
        style={{ backgroundImage: `url(${bgJoin})` }}
      >
        <div
          className="relative w-[329px] h-[234px] rounded-[20px] border-[5px] mt-8 sm:mt-0 border-white sm:w-[520px] sm:h-[350px] sm:mr-12"
          style={{
            "box-shadow": "0px 25px 50px -12px #00000040;",
          }}
        >
          {/* top bar */}
          <div className=" flex items-center w-full h-[41px] bg-white rounded-t-xl py-2 px-4">
            <div className="flex gap-[5px]">
              {/* circles */}
              <div className=" w-[10px] h-[10px] rounded-full bg-[#E11D48]"></div>
              <div className=" w-[10px] h-[10px] rounded-full bg-[#FBBF24]"></div>
              <div className=" w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
            </div>
          </div>
          {/* image */}
          <div
            className=" grid place-content-center w-full h-[calc(100%-41px)] rounded-b-2xl bg-red-300 bg-cover"
            style={{ backgroundImage: `url(${running})` }}
          >
            <div className=" grid place-content-center w-36 h-36 bg-[#121619BF] rounded-full cursor-pointer hover:bg-[#121619dd] active:scale-95">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                width={96}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-6 sm:-bottom-10 left-8 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#15803D] opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default JoinMainPart;
