import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Club = () => {
  return (
    <>
      <div className="image_full">
        <div className="content">CÂU LẠC BỘ</div>
        <img
          src="https://citigym.com.vn/storage/uploads/untitled-5-9.jpg"
          alt="Description"
          className="w-full h-full mt-[72px] object-cover"
        />
      </div>

      <section className="bg-[#f1f1f1] mb-[30px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
            Tập luyện ở câu lạc bộ gần bạn
          </h2>
          <p className="mb-12 text-center text-base text-[212529]">
            Hệ thống phòng tập gym và yoga của CITIGYM có mặt khắp các quận Hà
            Nội.
            <br />
            Lựa chọn phòng tập gần bạn nhất để có thể tập luyện dễ dàng và tiết
            kiệm thời gian.
          </p>
          <form action="" className="relative">
            <select className="text-left w-[360px] py-3 px-4 pr-10 bg-white appearance-none bg-right bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg')] bg-[length:20px_20px] focus:outline-none">
              <option selected="selected" value>
                Chọn quận gần bạn
              </option>
              <option value="hai-ba-trung">Quận Hai Bà Trưng</option>
              <option value="thanh-xuan">Quận Thanh Xuân</option>
              <option value="tay-ho">Quận Tây Hồ</option>
              <option value="nam-tu-liem">Quận Nam Từ Liêm</option>
              <option value="bac-tu-liem">Quận Bắc Từ Liêm</option>
            </select>

            <FaChevronDown className="absolute right-3 top-4 text-[#454545]" />
          </form>
        </div>
      </section>
      <section className="bg-[#f1f1f1] pb-16 max-w-[1170px] m-auto">
        <div className="grid grid-cols-3 gap-8 mb-8 ">
          <div className="group cursor-pointer">
            <img
              src="https://citigym.com.vn/storage/uploads/screenshot-2020-10-14-180443-375x440.jpg"
              alt=""
              className="w-full h-64"
            />
            <div className="bg-opacity-60 border border-gray bg-white rounded p-5 fix7">
              <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                PERSONAL TRAINER
              </div>
              <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                KICKFIT
              </div>
              <div className="my-2 mx-0">
                <i className="fa-solid fa-clock"></i>
                <span className="my-0 mx-5">60 Phút</span>
              </div>
              <p>
                KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền
                thống với trường phái Muay Thai ...
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src="https://citigym.com.vn/storage/uploads/screenshot-2020-10-14-180443-375x440.jpg"
              alt=""
              className="w-full h-64"
            />
            <div className="bg-opacity-60 border border-gray bg-white rounded p-5 fix7">
              <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                PERSONAL TRAINER
              </div>
              <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                KICKFIT
              </div>
              <div className="my-2 mx-0">
                <i className="fa-solid fa-clock"></i>
                <span className="my-0 mx-5">60 Phút</span>
              </div>
              <p>
                KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền
                thống với trường phái Muay Thai ...
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src="https://citigym.com.vn/storage/uploads/screenshot-2020-10-14-180443-375x440.jpg"
              alt=""
              className="w-full h-64"
            />
            <div className="bg-opacity-60 border border-gray bg-white rounded p-5 fix7">
              <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                PERSONAL TRAINER
              </div>
              <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                KICKFIT
              </div>
              <div className="my-2 mx-0">
                <i className="fa-solid fa-clock"></i>
                <span className="my-0 mx-5">60 Phút</span>
              </div>
              <p>
                KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền
                thống với trường phái Muay Thai ...
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src="https://citigym.com.vn/storage/uploads/screenshot-2020-10-14-180443-375x440.jpg"
              alt=""
              className="w-full h-64"
            />
            <div className="bg-opacity-60 border border-gray bg-white rounded p-5 fix7">
              <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                PERSONAL TRAINER
              </div>
              <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                KICKFIT
              </div>
              <div className="my-2 mx-0">
                <i className="fa-solid fa-clock"></i>
                <span className="my-0 mx-5">60 Phút</span>
              </div>
              <p>
                KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền
                thống với trường phái Muay Thai ...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Club;
