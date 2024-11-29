import React from "react";
import "../styles/PricingPolicy.css";
import logo from "../assets/img/logo/favicon.png"

import { FaCrown, FaFire, FaStar } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import gold1 from "../assets/cart/Member Card - Gold/1.png"
import gold2 from "../assets/cart/Member Card - Gold/2.png"

import platium1 from "../assets/cart/Member Card - Platinum/1.png"
import platium2 from "../assets/cart/Member Card - Platinum/2.png"

import selver1 from "../assets/cart/Member Card - Silver/1.png"
import selver2 from "../assets/cart/Member Card - Silver/2.png"


const PricingPolicy = () => {
  return (
    <>
      <div className="m-0 mt-[5rem]  w-full h-[73vh] bg-white relative ">
        <div className="absolute right-[1rem] top-[-2rem] w-[15rem] h-[15rem] ">
          <img src={logo} className="w-full h-full  " alt="" />
        </div>
        <div class="absolute transitiont  left-0 bottom-0 border-none h-[55vh] w-[90vw] bg-red-600  pt-[10vh] [clip-path:polygon(0%_100%,0%_0%,80%_0%,100%_100%)] ">
          <h1 className="text-[3rem] text-white font-black mx-[10vw] ">GYM <span className="text-black mx-[-10px]">PRO</span></h1>
          <h1 className="  text-[6rem] text-white font-black mx-[15vw] text-shadow-md">PRICE LIST</h1>
        </div>
      </div>
      <div className="w-full  h-[20vh] bg-black  flex justify-between items-center text-[1rem] p-7 text-white font-black  mb-2">
        <div className="h-full aspect-[1/1] bg-white flex justify-center items-center rounded-[50%] text-red-600">
          <FaFire size={40} />
        </div>
        <div className=" mx-5">
          PERSONAL TRAINER COST
        </div>
        <div className=" mx-5 border border-l-white px-[5rem] py-2">500.000 VND</div>
        <div className=" mx-5">SESSION</div>
        <div className="h-full  aspect-[1/1] bg-white flex justify-center items-center rounded-[50%] text-red-600">
          <FaStar size={40} />
        </div>
      </div>
      <div className=" max-w-[1180px] mx-auto p-5">
        <div className="w-full p-4 border border-gray-300 rounded-[10px] flex shadow-custom my-5 bg-gray-50">
          <div className="w-1/3 ] ">
            <img src={platium1} className="w-full h-[12rem] rounded-[10px] mb-2" alt="" />
            <img src={platium2} className="w-full h-[12rem] rounded-[10px]" alt="" />
          </div>
          <div className="w-2/3   p-5  ">
            <h1 className="font-black text-[1.5rem] flex my-5">
              <div className="w-[2.5rem] h-[2.5rem] rounded-[50%] border border-gray-300 flex justify-center items-center bg-[#CCCCCC] mx-2">
                <FaCrown color="white" />
              </div>
              <span>PLATIUM</span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >31.000.000 - 33.000.000 VND </span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >YEAR</span>
            </h1>
            <hr />
            <div className="w-full p-3">
              <ul className="list-disc list-inside">
                <li className="my-2">Tập luyện toàn thời gian. </li>
                <li className="my-2">Có hiệu lực tại tất cả cơ sở Club GymPro trên toàn quốc .</li>
                <li className="my-2">Rủ bạn đi theo có hiệu lực 4-5 tháng (1 người / 1 lượt)</li>
                <li className="my-2">Phù hợp với người có lịch trình bận rộn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-4 border border-gray-300 rounded-[10px] flex shadow-custom my-5 bg-gray-50">
          <div className="w-1/3 ] ">
            <img src={gold1} className="w-full h-[12rem] rounded-[10px] mb-2" alt="" />
            <img src={gold2} className="w-full h-[12rem] rounded-[10px]" alt="" />
          </div>
          <div className="w-2/3   p-5  ">
            <h1 className="font-black text-[1.5rem] flex my-5">
              <div className="w-[2.5rem] h-[2.5rem] rounded-[50%] border border-gray-300 flex justify-center items-center bg-[#CCCCCC] mx-2">
                < IoDiamond color="yellow" />
              </div>
              <span>GOLD</span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >10.000.000 - 12.000.000 VND </span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >YEAR</span>
            </h1>
            <hr />
            <div className="w-full p-3">
              <ul className="list-disc list-inside">
                <li className="my-2">Tập luyện cố định thời gian. </li>
                <li className="my-2">Có hiệu lực tại 1 cơ sở Club GymPro trên toàn quốc .</li>
                <li className="my-2">Phù hợp với nhiều người</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full p-4 border border-gray-300 rounded-[10px] flex shadow-custom my-5   bg-gray-50">
          <div className="w-1/3 ] ">
            <img src={selver1} className="w-full h-[12rem] rounded-[10px] mb-2" alt="" />
            <img src={selver2} className="w-full h-[12rem] rounded-[10px]" alt="" />
          </div>
          <div className="w-2/3   p-5  ">
            <h1 className="font-black text-[1.5rem] flex my-5">
              <div className="w-[2.5rem] h-[2.5rem] rounded-[50%]  flex justify-center items-center bg-[#CCCCCC] mx-2">
                <FaStar color="#d7c7a2" />
              </div>
              <span>SELVER</span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >3.000.000 - 5.000.000 VND </span>
              <div className="w-[5px] h-[1.5rem] mt-2 mx-2 border-[3px] border-black"></div>
              <span >YEAR</span>
            </h1>
            <hr />
            <div className="w-full p-3">
              <ul className="list-disc list-inside">
                <li className="my-2">Tập luyện cố định thời gian. </li>
                <li className="my-2">Có hiệu lực tại 1 cơ sở Club GymPro trên toàn quốc .</li>
                <li className="my-2">Phù hợp với mọi người</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};


export default PricingPolicy;
