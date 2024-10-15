import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import home1 from "../assets/img/home/home-1.png";
import home2 from "../assets/img/home/home-2.png";

// image section course gym
import services1 from "../assets/img/1.jpg";
import services2 from "../assets/img/2.jpg";
import services3 from "../assets/img/3.jpg";
import services4 from "../assets/img/4.jpg";

// blogs
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import blog4 from "../assets/img/blog-4.jpg";
import blog5 from "../assets/img/blog-5.jpg";
import blog6 from "../assets/img/blog-6.jpg";
import blog7 from "../assets/img/blog-7.jpg";
import afterImage from "../assets/img/s-after.jpg";

// before after


import beforeImage from "../assets/img/s-before.jpg";
import afterImage from "../assets/img/s-after.jpg";

// react hook
function HomePage() {
  return (
    <>
      <section className="w-full mt-[72px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={home1}
              alt=""
              className="w-full max-h-[665px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={home2}
              alt=""
              className="w-full max-h-[665px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-[#f1f1f1] py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold uppercase text-[28px] text-[#454545] mb-4">
            Các dịch vụ của chúng tôi
          </h2>
          <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
            Luyện tập tại CITIGYM sẽ giúp bạn đạt được mục tiêu sức khỏe và hình
            thể.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 px-8 mb-8 items-center">
          <div className="relative group">
            <img src={services1} alt="" className="w-full" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">
                PERSONAL TRAINER
              </span>
            </div>
          </div>
          <div className="relative group">
            <img src={services2} alt="" className="w-full" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">YOGA</span>
            </div>
          </div>
          <div className="relative group">
            <img src={services3} alt="" className="w-full" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">GROUP X</span>
            </div>
          </div>
          <div className="relative group">
            <img src={services4} alt="" className="w-full" />
            <div className="absolute inset-0 bg-red-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center ">
              <span class="text-white font-bold text-3xl">XEM THÊM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-800 py-16">
        <div className=" max-w-[1170px] m-auto">
          <div className="flex flex-col justify-center items-center text-white">
            <h2 className="font-bold uppercase text-[28px] mb-4">
              Câu chuyện hội viên
            </h2>
            <p className="max-w-[420px] mb-12 text-center text-base text-[212529]">
              CITIGYM dùng toàn bộ nỗ lực để giúp bạn yêu cơ thể mình hơn, đều
              đặn mỗi ngày.
            </p>
          </div>
          <div className="bg-white">
            <Swiper
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog1}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Không bàn đến việc bạn tập gym như thế nào nhưng chế độ ăn
                    tập gym giảm cân của bạn có thực sự tốt? Các bạn...{" "}
                    <Link to="/" className="text-[#a50000] hover:underline">
                      Xem thêm
                    </Link>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog2}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Lương Gia Huy cho biết anh còn bị tưởng lầm là PT vì quá mê
                    phòng gym.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog3}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Nam diễn viên Huy Khánh đã dành thời gian ghé thăm phòng tập
                    Citigym và khám phá những điều thú vị chỉ có tại đây.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog4}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Với những chàng trai này, chưa cần biết điều kiện vật chất
                    thế nào mà chỉ nhìn qua thôi cũng đã đủ làm bao cô...
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog5}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Thái Trinh đã cùng hơn 200 hội viên và khách mời danh dự có
                    mặt tại dạ tiệc mừng sinh nhật lần thứ 2 của Citigym...
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog6}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Mẹ đơn thân Lê Nguyễn Thu Hà (28 tuổi) hiện đang làm việc
                    trong một ngân hàng tại TP. HCM. Mới đây, chị đã có những...
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-r border-gray-200">
                <div className="p-6">
                  <img
                    src={blog7}
                    alt=""
                    className="w-full h-[248px] object-cover"
                  />
                  <p className="mt-4 text-base text-gray-700">
                    Chuyện tình 10 năm của Ông Cao Thắng – Đông Nhi khiến cho
                    không ít người ngưỡng mộ. Quen nhau kể từ thời điểm...
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="flex max-w-[1170px] m-auto gap-8 py-16 justify-center items-center">
        <div>
          <h3 className="font-bold text-3xl uppercase text-[#4c4141] mb-8">
            Before & After
          </h3>
          <p className="mb-2">
            Tập luyện tại CITIGYM để có cơ hội thay đổi ngoại hình một cách
            ngoạn mục
          </p>
          <p>
            Việc luyện tập đều đặn tại CITIGYM và đúng kỹ thuật, cùng với một
            chế độ dinh dưỡng hợp lý sẽ giúp cải thiện vóc dáng một cách rõ rệt.
            Huấn luyện viên của Citigym thiết kế chương trình luyện tập dựa trên
            chỉ số cơ thể, tình trạng sức khỏe của bạn nhằm giúp bạn thấy rõ sự
            thay đổi ngoạn mục chỉ trong khoảng trung bình từ 6-8 tuần.
          </p>
        </div>
        <img src={afterImage} alt="" className="w-[555px]" />
      </section>
    </>
  );
}

export default HomePage;
