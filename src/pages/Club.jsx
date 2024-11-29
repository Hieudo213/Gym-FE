import React from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import CardComponent from "../components/CardComponent";
const listgym = [
  {
    id: 1,
    title: "Gympro Cầu Giấy",
    image: 'https://citigym.com.vn/storage/uploads/vietdh/kickfit.jpg',
  },
  {
    id: 2,
    title: "Gympro Thanh Xuân",
    image: 'https://citigym.com.vn/storage/uploads/thumbnail-2-3.jpg',
  },
  {
    id: 3,
    title: "Gympro Hoàn Kiếm",
    image: 'https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG',
  },
  {
    id: 4,
    title: "Gympro Ba Đình",
    image: 'https://citigym.com.vn/storage/uploads/body-combat.jpg',
  },
  {
    id: 5,
    title: "Gympro Hai Bà Trưng",
    image: 'https://citigym.com.vn/storage/uploads/body-balance.jpg',
  },
  {
    id: 6,
    title: "Gympro Hoàng Mai",
    image: 'https://citigym.com.vn/storage/uploads/vietdh/dichvu-mb.jpg',
    category: 'Group X',
  },
]
const Club = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-4.5rem)] relative mt-[4.5rem]">
        <div className="absolute left-[10vw] bottom-[20vh] font-bold  text-white text-4xl">CÂU LẠC BỘ</div>
        <img
          src="https://citigym.com.vn/storage/uploads/untitled-5-9.jpg"
          alt="Description"
          className="w-full h-full mt-[72px] object-cover"
        />
      </div>
      <section className="bg-[#fef8fa] pb-[84px]">
        <div className="flex flex-col justify-center items-center pt-[60px] pb-[30px]">
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
          <form action="">
            <select className="text-left w-[360px] py-3 px-4 pr-10 appearance-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg')] bg-[length:20px_20px] focus:outline-none">
              <option selected="selected" value>
                Chọn quận gần bạn
              </option>
              <option defaultValue="hai-ba-trung">Quận Hai Bà Trưng</option>
              <option defaultValue="thanh-xuan">Quận Thanh Xuân</option>
              <option defaultValue="tay-ho">Quận Tây Hồ</option>
              <option defaultValue="nam-tu-liem">Quận Nam Từ Liêm</option>
              <option defaultValue="bac-tu-liem">Quận Bắc Từ Liêm</option>
            </select>

            <FaChevronDown className="absolute right-3 top-4 text-[#454545]" />
          </form>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className=" w-[1140px] h-[1169px] grid grid-cols-3 gap-[30px] ">
            {listgym.map((item, index) => (
              <CardComponent key={index} url={item.image}>
                <div className=" inset-0 border border-gray bg-white rounded p-5 fix7">
                  <div className="text-red-700 font-bold text-xl my-2 mx-0 uppercase hover:text-[#720000]">
                    {item.title}
                  </div>
                  <div className="my-2 mx-0">
                    <FaLocationDot className="float-left mt-[4px]" />
                    <span className="my-0  mx-2">52 Thành Thái, Phường 12, Quận 10, Thành phố Hồ Chí Minh</span>
                  </div>
                  <div className="my-2 mx-0">
                    <FaPhoneAlt className="float-left mt-[4px]" />
                    <span className="my-0  mx-2 text-[#a50000]">012345678</span>
                  </div>
                </div>
              </CardComponent>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Club;
