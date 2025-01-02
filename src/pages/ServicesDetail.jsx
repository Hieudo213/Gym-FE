import React, { useEffect, useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaHeartPulse } from "react-icons/fa6";
import { GiBodyBalance } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import { getGymById } from "../services/publicApi";
const ServicesDetail = () => {
  const [data, setData] = useState({});
      const navigate = useNavigate()
      const { id } = useParams();
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const result = await getGymById(id);
                  setData(result);
              } catch (err) {
                  console.log(err);
              }
          };
          fetchData();
      }, []);

  return (
    <>
      <div className="max-w-[1180px] mx-auto  mt-[5rem]  py-5">
        <div className="  font-bold  mt-7   text-xl">
          {data?.result?.name}
        </div>
        <div>Đánh thức cơ thể bạn</div>
      </div >
      <div className="w-full relative">
        <div className="w-full h-[600px] overflow-hidden">
          <div
            style={{
              backgroundImage: `url(http://localhost:8080/api/v1/images/${data?.result?.thumbnail.id})`,
            }}
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
        </div>
        <div className="absolute bottom-[5rem] left-[10rem] text-white font-bold  text-4xl">
          {data?.result?.name}
        </div>
      </div>
      <section className="max-w-[1180px] mx-auto grid grid-cols-2 gap-8 mt-10 ">
        <div className="  group w-full  cursor-pointer  h-full flex items-center ">
          <div className="w-full p-5 ">
            <h1 className="font-bold text-5xl text-[#A9A9A9] my-5">
              {data?.result?.name}
            </h1>
            <p className="text-[#454545]">{data?.result?.description} </p>
          </div>

        </div>
        <div className="relative  group  cursor-pointer ">
          <img src="https://citigym.com.vn/storage/uploads/af1i9380-removebg.jpg" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />
        </div>
      </section>
      <div className="mt-[15rem]">
        <h3 className=" text-center font-bold text-2xl">   {data?.result?.name}</h3>
        <section className="max-w-[1180px] mx-auto grid grid-cols-4 gap-8 mt-10 pb-5">

          <div className="relative w-full  group  cursor-pointer">
            <img src="https://citigym.com.vn/themes/citigym/images/features/feature-2.jpg" alt="" className="w-full h-20rem transition-opacity duration-500 group-hover:opacity-50" />
            <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <FaClockRotateLeft className=" text-7xl text-white w-full text-center" />

              <div className="text-white font-bold mt-5 text-center ">
                <p className="mb-2 text-1xl"> Thời lượng</p>
                <p className="text-2xl">60 Phút</p>
              </div>

            </div>
          </div>


          <div className="relative w-full   group  cursor-pointer">
            <img src="https://citigym.com.vn/themes/citigym/images/features/feature-1.jpg" alt="" className="w-full h-20rem transition-opacity duration-500 group-hover:opacity-50" />
            <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <FaFire className="text-7xl text-white w-full text-center" />


              <div className="text-white font-bold mt-5 text-center ">
                <p className="mb-2 text-1xl"> Calories</p>
                <p className="text-2xl">600 - 800</p>
              </div>

            </div>
          </div>
          <div className="relative w-full   group  cursor-pointer">
            <img src="https://citigym.com.vn/themes/citigym/images/features/feature-3.jpg" alt="" className="w-full h-20rem transition-opacity duration-500 group-hover:opacity-50" />
            <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <FaDumbbell className="text-7xl text-white w-full text-center" />

              <div className="text-white font-bold mt-5 text-center ">
                <p className="mb-2 text-1xl"> Đề xuất</p>
                <p className="text-3xl">gym pro  </p>
              </div>

            </div>
          </div>
          <div className="relative w-full   group  cursor-pointer">
            <img src="https://citigym.com.vn/themes/citigym/images/features/feature-4.jpg" alt="" className="w-full h-20rem transition-opacity duration-500 group-hover:opacity-50" />
            <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <FaHandFist className="text-7xl text-white w-full text-center" />
              <div className="text-white font-bold mt-5 text-center ">
                <p className="mb-2 text-1xl"> Kĩ năng</p>
                <p className="text-3xl">Dành cho mọi trình độ</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full py-5 h-[60rem]  img_bg   relative" >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="relative z-10 text-center my-10 ">
          <h2 className="text-center  font-bold text-3xl">Lợi ích của khóa học</h2>
          <p className="w-[40%] mx-auto my-5">Với chuỗi hoạt động liên tục, môn học này sẽ đem lại vẻ săn chắc đặc biệt là phần bụng; giúp vóc dáng thon gọn nhanh nhất; giảm căng thẳng, tốt cho thể chất và tinh thần; nâng cao khả năng tự vệ; rèn luyện phản xạ và tính kỷ luật.</p>
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

  )
};

export default ServicesDetail;
