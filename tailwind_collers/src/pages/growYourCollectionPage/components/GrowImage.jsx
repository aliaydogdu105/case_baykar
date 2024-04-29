import React from "react";
import running from "../../../assets/growYourCollection/running.jpg";
import shoes from "../../../assets/growYourCollection/shoes.jpg";
import shoe from "../../../assets/growYourCollection/shoe.jpg";

const GrowImage = () => {
  return (
    <div className=" w-[361px] h-[347px] gap-8 sm:w-[1280px] sm:h-[556px] sm:gap-20  flex flex-col sm:flex-row">
      {/* menu */}
      <div className=" w-full sm:w-64 sm:h-[416px] h-14 flex sm:flex-col gap-4  text-[#0F172A] overflow-hidden overflow-x-scroll">
        <div
          className=" h-14 sm:h-64 flex justify-around items-center rounded-md bg-white border border-gray-50"
          style={{
            "box-shadow": "0px 4px 6px -1px #0000001A;",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <header className=" w-44 text-center text-[20px] leading-6 font-medium ">
            Bibendum tellus
          </header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hidden sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <div className=" h-14 sm:h-64 flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 sm:mr-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <header className=" text-[20px] w-48 leading-6 font-medium ">
            Cras eget
          </header>
        </div>
        <div className=" h-14 sm:h-64 flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
          <header className=" text-[20px] w-48 leading-6 font-medium ">
            Dolor pharetra
          </header>
        </div>
        <div className=" h-14 sm:h-64 flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <header className=" text-[20px] w-48 leading-6 font-medium ">
            Amet, fringilla
          </header>
        </div>
        <div className=" h-14 sm:h-64 flex justify-evenly items-center">
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 575.793 575.793"
            xml:space="preserve"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M326.656,327.771v48.254c64.861-17.174,112.814-76.348,112.814-146.532c0-83.578-67.996-151.574-151.575-151.574 c-83.578,0-151.574,67.997-151.574,151.574c0,70.184,47.957,129.362,112.816,146.532v-48.254 c-39.144-15.492-66.916-53.69-66.916-98.278c0-58.269,47.405-105.674,105.674-105.674c58.268,0,105.674,47.405,105.674,105.674 C393.57,274.081,365.797,312.279,326.656,327.771z"></path>{" "}
                  <path d="M517.391,229.494C517.391,102.951,414.439,0,287.896,0S58.402,102.951,58.402,229.494 c0,113.331,82.592,207.672,190.732,226.153v-46.715c-82.678-17.842-144.833-91.502-144.833-179.438 c0-101.234,82.36-183.594,183.594-183.594c101.235,0,183.594,82.36,183.594,183.594c0,87.936-62.154,161.596-144.834,179.438 v46.715C434.797,437.166,517.391,342.824,517.391,229.494z"></path>{" "}
                  <path d="M264.435,379.246v32.291v46.26v117.996h46.918V457.797v-46.26v-32.291v-46.734v-31.906 c2.617-0.867,5.168-1.873,7.65-3.012c2.631-1.209,5.193-2.545,7.65-4.035c21.643-13.146,36.135-36.944,36.135-64.065 c0-41.298-33.596-74.896-74.896-74.896c-41.301,0-74.894,33.599-74.894,74.896c0,27.121,14.489,50.921,36.135,64.065 c2.458,1.492,5.019,2.83,7.65,4.035c2.481,1.139,5.034,2.145,7.65,3.012v31.906V379.246z M259.958,221.844 c0.75-2.732,1.885-5.3,3.354-7.65c5.125-8.207,14.217-13.697,24.584-13.697c10.368,0,19.459,5.49,24.584,13.697 c1.465,2.35,2.604,4.917,3.354,7.65c0.67,2.442,1.059,5,1.059,7.65c0,6.34-2.068,12.194-5.535,16.971 c-5.273,7.271-13.812,12.023-23.461,12.023c-9.648,0-18.186-4.755-23.461-12.023c-3.467-4.776-5.536-10.63-5.536-16.971 C258.899,226.844,259.288,224.286,259.958,221.844z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <header className=" text-[20px] w-48 leading-6 font-medium ">
            Amet nibh
          </header>
        </div>
        <div className=" h-14 sm:h-64 flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>

          <header className=" text-[20px] w-48 leading-6 font-medium ">
            Sed velit
          </header>
        </div>
      </div>
      <div className=" relative w-full h-[259px] sm:h-full sm:w-[944px] ">
        {/* video back */}
        <div
          className="absolute w-[294px] h-[201px] rounded-[20px] border-[5px] border-white sm:w-[759px] sm:h-[451px] "
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
          ></div>
        </div>
        {/* video front */}
        <div
          className="absolute w-[294px] h-[201px] rounded-[20px] border-[5px] border-white sm:w-[759px] sm:h-[451px] top-[20%] left-[10%]"
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
            style={{ backgroundImage: `url(${shoes})` }}
          ></div>
        </div>
        {/* image */}
        <div
          className=" absolute right-0 bottom-[10%] w-[94px] sm:w-64 sm:h-[288px] h-[105px] rounded-[10px] border-[5px] border-white bg-green-500 bg-cover "
          style={{
            "box-shadow": "0px 25px 50px -12px #00000040;",
            backgroundImage: `url(${shoe})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GrowImage;
