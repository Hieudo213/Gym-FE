import React from "react";
import '../styles/Services.css'


// import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
      <div className="image_full">
        <div className="content">
          DỊCH VỤ
        </div>
        <div className="title-bg">
          FIND A CLASS
        </div>
        <img src="https://citigym.com.vn/storage/uploads/vietdh/dichvu-dt.jpg" alt="Description" className="w-full" />
      </div>

      <section className="bg-[#f1f1f1] py-16 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
            Các dịch vụ của chúng tôi
          </h2>
          <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
            Chương trình luyện tập yoga, gym, group X được thiết kế khoa học và phù hợp từ chuyên gia sẽ giúp bạn đạt được mục tiêu sức khỏe và hình thể.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center container ">
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/bums-and-tums.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">
                BUMS AND TUMS
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/thumbnail-1-5.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">CYCLING</span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/untitled-8-3.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">DANCE</span>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center container mx-auto ">
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/rin-1822.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">
                GROUP X
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/thumbnail-3-2.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">YOGA</span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src="https://citigym.com.vn/storage/uploads/vietdh/pt-thuy1.jpg" alt="" className="w-[352px] h-[352px]" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">PERSONAL TRAINER</span>
            </div>
          </div>

        </div>

      </section>
      <section className="bg-[#f1f1f1]   py-16 ">
        <div className="container ">
          <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center container ">
            <div className="relative  group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />
              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  PERSONAL TRAINER
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  KICKFIT
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">60 Phút</span>
                </div>
                <p>KickFit là môn thể thao kết hợp đặc biệt giữa đấm bốc truyền thống với trường phái Muay Thai ...</p>
              </div>
            </div>
            <div className="relative group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/body-combat.jpg" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />

              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  PERSONAL TRAINER
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  CYCLING
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">60 Phút</span>
                </div>
                <p>Tập luyện với Huấn luyện viên cá nhân theo hình thức 1 kèm 1, được thiết kế đặc biệt phù hợp với thể trạng và mục tiêu thể hình ...</p>
              </div>
            </div>
            <div className="relative group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/body-balance.jpg" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />
              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  Group X
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  BODYPUMP
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">60 Phút</span>
                </div>
                <p>BodyPump là 1 bộ môn tập cho toàn bộ nhóm cơ trên cơ thể kết hợp với tạ và âm nhạc. Sử dụng tạ nhẹ đến trung bình qua...</p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-3 gap-8 px-8  mb-8 items-center container ">
            <div className="relative group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/vietdh/bodypump.JPG" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />
              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  Group X
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  BODY COMBAT
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">60 Phút</span>
                </div>
                <p>BodyCombat là phương pháp tập luyện cardio, tim mạch kết hợp với các thế võ tự do (Karate, Taekwondo, Boxing, Muay Thai, ...</p>
              </div>
            </div>
            <div className="relative group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/body-combat.jpg" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />

              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  Group X
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  BODY BALANCE
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">45 - 60 Phút</span>
                </div>
                <p>Body Balance là lớp học dựa trên nền tảng của các bộ môn Yoga, Taichi, Pilates kết hợp với âm nhạc giúp cải thiện sức khỏe v...</p>
              </div>
            </div>
            <div className="relative group  cursor-pointer">
              <img src="https://citigym.com.vn/storage/uploads/body-balance.jpg" alt="" className="w-full transition-opacity duration-500 group-hover:opacity-50" />
              <div className=" inset-0  bg-opacity-60     border border-gray bg-white rounded p-5 fix7">
                <div className="text-blue-800 font-bold text-sm  my-2 mx-0">
                  Group X
                </div>
                <div className="text-red-700 font-bold text-xl  my-2 mx-0">
                  RPM
                </div>
                <div className="my-2 mx-0">
                  <i class="fa-solid fa-clock"></i>
                  <span className="my-0  mx-5">45 - 60 Phút</span>
                </div>
                <p>RPM (Revolutions per minute) là bộ môn xe đạp trong nhà kết hợp âm nhạc giả lập chạy trên đường bằng phẳng, lên xuống núi vớ...</p>
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className="bg-[#f1f1f1]   py-16  flex flex-col items-center justify-center fix8">
        <div className=" sm:w-1/2 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold uppercase text-[28px] text-white mb-4">
              Đăng ký tham quan câu lạc bộ
            </h2>

          </div>


          <form class=" w-full mx-10">

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_first_name" class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ và Tên </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_last_name" class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Số điện thoại</label>
              </div>
            </div>
            <div class="grid w-full  mt-6">

              <select id="countries" class="bg-gray-50 border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option>Câu lạc bộ nào bạn muốn tham gia</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div class="grid w-full  mt-6">

              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option>Giờ nào chúng tôi có thể gọi bạn</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div class="flex flex-col items-center justify-center  mt-6">
              <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Đăng ký ngay</button>
            </div>
          </form>

        </div>
      </section>
    </>

  )
};

export default Services;
