import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { title: "CLB", path: "/clb" },
  { title: "DỊCH VỤ", path: "/dich-vu" },
  { title: "LỊCH TẬP", path: "/lich-hoc" },
  { title: "CHÍNH SÁCH GIÁ", path: "/chinh-sach-gia" },
  { title: "TIN TỨC", path: "/tin-tuc" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Khai báo cấu trúc   [tên , Set+ tên cấu trúc ] =  reacthook(trạng thái) 


  return (
    <header>
      <nav className="bg-white w-full shadow-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center max-w-[1170px] m-auto py-4">
          <Link to="/">
            <img src={logo} alt="logo-img" className="max-w-[140px]" />
          </Link>

          {/* Hamburger menu icon */}
          <div className="xl:hidden">
            {/* click thay đổi cái gì  */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              {/* Thay đổi icon X -> /// */}
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`${isOpen ? "block" : "hidden"
              } xl:flex flex-col xl:flex-row gap-8 absolute xl:static left-0 top-16 bg-white xl:bg-transparent w-full xl:w-auto px-6 xl:px-0 py-4 xl:py-0 shadow-md xl:shadow-none`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-black font-bold hover:text-[#a50000] transition-all duration-500 block py-2"
                  onClick={() => setIsOpen(false)} // Đóng menu sau khi nhấp vào link
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login/Register Buttons */}
          <div className="hidden xl:flex  h-full">
            <Link
              to="/login"
              className="bg-red-600 text-white py-2 px-4 font-bold hover:bg-red-700 transition-all duration-500 mr-2"
            >
              Đăng Nhập
            </Link>
            {/* <div className="p-2  cursor-pointer flex items-center justify-center  hover:bg-gray-200  z-[0] group h-full w-[15rem] ">

              <div className="px-2 text-[rgb(111 111 111)] text-sm">Nguyễn Thị Thanh Lâm</div>
              <img src="" alt="" className="aspect-square w-9 rounded-full  border border-blue border-solid" />
              <nav className="absolute bottom-0 right-0 w-[8rem] hidden    group-hover:block">
                <ul className="bg-white p-0 border border-gray-100   rounded-[2px]">
                  <li className=" px-3 text-xs py-3 hover:bg-gray-100   transition duration-200"> <FontAwesomeIcon icon={faUser} /> <span className="px-2">Tài khoản </span> </li>
                  <li className=""><hr /></li>

                  <li className="px-3  text-xs py-3 hover:bg-gray-100  transition duration-200"><FontAwesomeIcon icon={faArrowRight} /> <span className="px-2">Đăng xuất</span></li>
                </ul>

              </nav>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
