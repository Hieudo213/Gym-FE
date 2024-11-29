import React from "react";
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa6";

import { FaDumbbell } from "react-icons/fa";

import { LuBone } from "react-icons/lu";
import { FaHeartPulse } from "react-icons/fa6";
import { GiBodyBalance } from "react-icons/gi";
const News = () => {
  return (
    <>

      <div className="w-full relative h-[calc(100vh-4.5rem)] mt-[72px]">
        <div className="content">Tin tức</div>
        <div className="title-bg">NEWS</div>
        <img
          src="https://citigym.com.vn/storage/uploads/vietdh/citygym1159.jpg"
          alt="Description"
          className="w-full h-full "
        />
      </div>

      <section className="  py-16 ">
        <div className="w-3/4 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
              Các thông tin hữu ích khi tập GYM
            </h2>
            <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
              Có thể bạn chưa biết
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 px-5  mb-8 items-center  ">

            <div className="relative  group   cursor-pointer">
              <Link to="/dich-vu/2" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/tiet-lo-khung-gio-uong-nuoc-giam-can-cho-chi-em-phu-nu-00.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />

                <div className=" inset-0      border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Tiết lộ khung giờ uống nước cho chị em ..
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">07-08-2024</span>
                  </div>
                  <p>
                    Bạn có biết ngoài việc đóng vai trò quan trọng trong cơ thể, nước còn có tác dụng hỗ trợ cho quá trình giảm cân không?
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group  cursor-pointer">
              <Link to="/dich-vu/3" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/day-ta-bao-nhieu-ky-phu-hop-voi-co-the-cho-ca-nam-lan-nu-00.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Đẩy tạ bao nhiêu ký phù hợp với cơ thể cho nam ...
                  </div>
                  <div className="my-2 mx-0 ">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">26-11-2024</span>
                  </div>
                  <p>
                    Đẩy tạ với số ký phù hợp với cơ thể sẽ giúp bạn phát triển cơ bắp hiệu quả, tránh được những chấn thương trong quá trình tập
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group cursor-pointer">
              <Link to="/dich-vu/4" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/ly-do-buon-ngu-sau-khi-tap-gym-cach-khac-phuc-tinh-trang-tren-001.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Lý do buồn ngủ sau khi tập gym
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">30-05-2024</span>
                  </div>
                  <p>
                    Buồn ngủ sau khi tập gym là hiện tượng khá phổ biến, khiến nhiều người lo lắng. Thực chất đây là tình trạng bình thường khi cơ
                    ...
                  </p>
                </div>
              </Link>
            </div>

            <div className="relative  group   cursor-pointer">
              <Link to="/dich-vu/2" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/tiet-lo-khung-gio-uong-nuoc-giam-can-cho-chi-em-phu-nu-00.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />

                <div className=" inset-0      border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Tiết lộ khung giờ uống nước cho chị em ..
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">07-08-2024</span>
                  </div>
                  <p>
                    Bạn có biết ngoài việc đóng vai trò quan trọng trong cơ thể, nước còn có tác dụng hỗ trợ cho quá trình giảm cân không?
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group  cursor-pointer">
              <Link to="/dich-vu/3" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/day-ta-bao-nhieu-ky-phu-hop-voi-co-the-cho-ca-nam-lan-nu-00.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Đẩy tạ bao nhiêu ký phù hợp với cơ thể cho nam ...
                  </div>
                  <div className="my-2 mx-0 ">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">26-11-2024</span>
                  </div>
                  <p>
                    Đẩy tạ với số ký phù hợp với cơ thể sẽ giúp bạn phát triển cơ bắp hiệu quả, tránh được những chấn thương trong quá trình tập
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group cursor-pointer">
              <Link to="/dich-vu/4" style={{ color: '#333' }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/citigym-ntmk/ly-do-buon-ngu-sau-khi-tap-gym-cach-khac-phuc-tinh-trang-tren-001.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 ">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Blog
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    Lý do buồn ngủ sau khi tập gym
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">30-05-2024</span>
                  </div>
                  <p>
                    Buồn ngủ sau khi tập gym là hiện tượng khá phổ biến, khiến nhiều người lo lắng. Thực chất đây là tình trạng bình thường khi cơ
                    ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-5 h-[60rem]  img_bg   relative" >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="relative z-10 text-center my-10 ">
          <h2 className="text-center  font-bold text-3xl">Lợi ích của tập Gym</h2>
          <p className="w-[40%] mx-auto my-6">Rèn tính kỷ luật, bền bỉ và giúp bạn có cơ thể khỏe khoắn , dáng đẹp </p>
        </div>
        <div className="grid grid-cols-4 gap-8 px-8  mb-8 items-center container ">
          <div className="relative group  cursor-pointer">
            <div className="w-full">
              <FaDumbbell className="text-7xl text-balck w-full text-center" />
            </div>
            <p className="text-center mt-3 font-bold">Tăng cường sức mạnh</p>
          </div>
          <div className="relative group  cursor-pointer">
            <div className="w-full">
              <LuBone className="text-7xl text-balck w-full text-center" />
            </div>
            <p className="text-center mt-3 font-bold">Cơ bắp dẻo dai</p>
          </div>
          <div className="relative group  cursor-pointer">
            <div className="w-full">
              <GiBodyBalance className="text-7xl text-balck w-full text-center" />
            </div>
            <p className="text-center mt-3 font-bold">Cơ thể vững chãi </p>
          </div>
          <div className="relative group  cursor-pointer">
            <div className="w-full">
              <FaHeartPulse className="text-7xl text-balck w-full text-center" />
            </div>
            <p className="text-center mt-3 font-bold">Trái tim khỏe mạnh </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
