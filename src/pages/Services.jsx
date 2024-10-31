import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="image_full mt-[72px]">
        <div className="content">DỊCH VỤ</div>
        <div className="title-bg">FIND A CLASS</div>
        <img
          src="https://citigym.com.vn/storage/uploads/vietdh/dichvu-dt.jpg"
          alt="Description"
          className="w-full h-[30rem] object-cover"
        />
      </div>
      <section className=" py-16 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
            Các dịch vụ của chúng tôi
          </h2>
          <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
            Chương trình luyện tập yoga, gym, group X được thiết kế khoa học và
            phù hợp từ chuyên gia sẽ giúp bạn đạt được mục tiêu sức khỏe và hình
            thể.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center w-3/4 mx-auto">
          <div className="relative group cursor-pointer aspect-square ">
            <img
              src="https://citigym.com.vn/storage/uploads/bums-and-tums.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-3xl">
                BUMS AND TUMS
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-square">
            <img
              src="https://citigym.com.vn/storage/uploads/thumbnail-1-5.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-3xl">CYCLING</span>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-square">
            <img
              src="https://citigym.com.vn/storage/uploads/untitled-8-3.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-3xl">DANCE</span>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-square">
            <img
              src="https://citigym.com.vn/storage/uploads/rin-1822.jpg"
              alt=""
              className="w-full h-full "
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-3xl">GROUP X</span>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-square">
            <img
              src="https://citigym.com.vn/storage/uploads/thumbnail-3-2.jpg"
              alt=""
              className="w-full h-full "
            />
            <div className="absolute inset-0 bg-red-600  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-3xl">YOGA</span>
            </div>
          </div>
          <div className="relative group cursor-pointer aspect-square">
            <img
              src="https://citigym.com.vn/storage/uploads/vietdh/pt-thuy1.jpg"
              className="w-full h-full"
              alt=""
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span className="text-white font-bold text-2xl">
                Personal Trainer{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="  py-16 ">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center  ">
            <div className="relative cursor-pointer">
              <Link to="/dich-vu/1">
                <img
                  src="https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG"
                  alt=""
                  className="w-full transition-opacity duration-500"
                />
                <div className="bg-opacity-60 border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    PERSONAL TRAINER
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    KICKFIT
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0 mx-2">60 Phút</span>
                  </div>
                  <p>
                    KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền
                    thống với trường phái Muay Thai ...
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative  group  cursor-pointer">
              <Link to="/dich-vu/2" style={{ color: "#333" }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/body-combat.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />

                <div className=" inset-0      border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    PERSONAL TRAINER
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    CYCLING
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">60 Phút</span>
                  </div>
                  <p>
                    Tập luyện với Huấn luyện viên cá nhân theo hình thức 1 kèm
                    1, được thiết kế đặc biệt phù hợp với thể trạng và mục tiêu
                    thể hình ...
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group  cursor-pointer">
              <Link to="/dich-vu/3" style={{ color: "#333" }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/body-balance.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Group X
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    BODYPUMP
                  </div>
                  <div className="my-2 mx-0 ">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">60 Phút</span>
                  </div>
                  <p>
                    BodyPump là 1 bộ môn tập cho toàn bộ nhóm cơ trên cơ thể kết
                    hợp với tạ và âm nhạc. Sử dụng tạ nhẹ đến trung bình qua...
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group cursor-pointer">
              <Link to="/dich-vu/4" style={{ color: "#333" }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0       border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Group X
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    BODY COMBAT
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">60 Phút</span>
                  </div>
                  <p>
                    BodyCombat là phương pháp tập luyện cardio, tim mạch kết hợp
                    với các thế võ tự do (Karate, Taekwondo, Boxing, Muay Thai,
                    ...
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group   cursor-pointer">
              <Link to="/dich-vu/6" style={{ color: "#333" }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/body-combat.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />

                <div className=" inset-0       border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Group X
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    BODY BALANCE
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">45 - 60 Phút</span>
                  </div>
                  <p>
                    Body Balance là lớp học dựa trên nền tảng của các bộ môn
                    Yoga, Taichi, Pilates kết hợp với âm nhạc giúp cải thiện sức
                    khỏe v...
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative  group  cursor-pointer">
              <Link to="/dich-vu/6" style={{ color: "#333" }}>
                <img
                  src="https://citigym.com.vn/storage/uploads/body-balance.jpg"
                  alt=""
                  className="w-full transition-opacity duration-500 group-hover:opacity-50"
                />
                <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                  <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                    Group X
                  </div>
                  <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                    RPM
                  </div>
                  <div className="my-2 mx-0">
                    <FaClock className="float-left mt-[4px]" />

                    <span className="my-0  mx-2">45 - 60 Phút</span>
                  </div>
                  <p>
                    RPM (Revolutions per minute) là bộ môn xe đạp trong nhà kết
                    hợp âm nhạc giả lập chạy trên đường bằng phẳng, lên xuống
                    núi vớ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
