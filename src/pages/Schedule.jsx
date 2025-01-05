import React from "react";
import CalendarComponent from "../components/calendar";

import { Image, Collapse }
  from
  "antd"
  ;
import { IoWarningOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

const title = (rank, teacher, time, date, status = 0) => (
  <div className="w-full h-full relative">
    <p className="flex text-black">
      {status !== 0 ? (
        <span className="mr-2 mt-[2px] text-yellow-300">
          <IoWarningOutline size={17} />
        </span>
      ) : null}
      Bạn có một buổi học cùng {rank} {teacher}
    </p>
    <div className="absolute top-0 right-0 w-[200px] h-full flex text-red-500">
      <span className="mr-1 mt-[4px]">
        <FaClock />
      </span>
      <span>
        {time} | {date}
      </span>
    </div>
  </div>
);
const content = (room, gym, address) => (
  <div>
    <h2>
      Phòng: <span className="text-red-500">{room}</span>
    </h2>
    <h2>
      Tại club: <span className="text-red-500">{gym}</span>
    </h2>
    <h2>
      Địa chỉ: <span className="text-red-500">{address}</span>
    </h2>
    <p className="text-blue-500">Chúc bạn 1 ngày vui vẻ cùng Gympro!</p>
  </div>
);

const items = [
  {
    key: '1',
    label: title('Giảng viên', 'Đạt', '7:00', '06/01/2025', 1),
    children: content(205, 'Yoga', '99, p. Lê Thanh Nghị, Bách khoa, Hai Bà Trưng, Hà Nội'),
  },
  {
    key: '2',
    label: title('Trợ giảng', 'Thanh Lâm', '14:00', '08/01/2025', 0),
    children: content(203, 'Gym', '99, p. Lê Thanh Nghị, Bách khoa, Hai Bà Trưng, Hà Nội'),
  },
  {
    key: '3',
    label: title('Giảng viên', 'Đỗ Ngọc Hiếu', '20:00', '18/01/2025', 0),
    children: content(201, 'Boxing', '99, p. Lê Thanh Nghị, Bách khoa, Hai Bà Trưng, Hà Nội'),
  },
];
const Schedule = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="max-w-[1180px] mt-[20vh] my-[10vh]  mx-auto h-[70vh]  flex p-2">
      <div className=" w-1/3 max-w-[40%]   border border-gray-400 p-4  rounded-[0.5rem]">
        <CalendarComponent />
      </div>
      <div className=" w-2/3   p-1 border border-gray-400   rounded-[0.5rem] fix10 ml-4">
        <div className='w-full  flex'>
          <div className=" w-1/6 aspect-square  ">
            <Image src="https://cdn-i.vtcnews.vn/files/huongntt/2019/08/24/giaovien2-7-0650272.jpg" className="rounded-[50%] p-6 " alt="" />
          </div>
          <div className="w-4/5 pt-7 ">
            <h1 className="text-[2rem] text-bold">Vũ Tiến Đạt</h1>
            <h4>Vai trò : <span>Giảng viên Yoga</span></h4>
          </div>

        </div>
        <div className="w-full h-[44vh]  overflow-y-scroll ">
          <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>


      </div>
    </div>
  )
};

export default Schedule;
